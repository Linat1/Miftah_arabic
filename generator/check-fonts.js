'use strict';
/*
 * Arabic font safety check for built decks (fails with exit code 1 if anything could make Arabic show as Chinese):
 * every run that contains Arabic must be lang="ar-SA" with Amiri (Arabic charset) in the latin, ea and cs slots; no theme may
 * contain CJK script fonts or an empty ea / cs fallback; Amiri must be embedded.
 * Usage: node check-fonts.js deck.pptx [more.pptx …]
 */
const fs = require('fs');
const JSZip = require('jszip');
const AR = /[؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿]/;
(async () => {
  let failed = 0;
  for (const f of process.argv.slice(2)) {
    const zip = await JSZip.loadAsync(fs.readFileSync(f));
    const problems = []; let runs = 0;
    for (const p of Object.keys(zip.files).filter((q) => /^ppt\/(slides|slideLayouts|slideMasters|notesSlides)\/[^/]+\.xml$/.test(q))) {
      const xml = await zip.file(p).async('string');
      for (const m of xml.matchAll(/<a:r>(<a:rPr\b[^>]*?(?:\/>|>[\s\S]*?<\/a:rPr>))?<a:t>([^<]*)<\/a:t><\/a:r>/g)) {
        if (!AR.test(m[2])) continue; runs++;
        const pr = m[1] || '';
        const latinOk = /[A-Za-z]/.test(m[2]) || /<a:latin typeface="Amiri"[^>]*charset="-78"/.test(pr);
        const ok = /lang="ar-SA"/.test(pr) && latinOk && /<a:ea typeface="Amiri"[^>]*charset="-78"/.test(pr)
          && /<a:cs typeface="Amiri"[^>]*charset="-78"/.test(pr) && !/charset="-12[02]"/.test(pr);
        if (!ok && problems.length < 3) problems.push(`${p}: ${m[2].slice(0, 30)}`);
        if (!ok) problems.count = (problems.count || 0) + 1;
      }
    }
    for (const p of Object.keys(zip.files).filter((q) => /^ppt\/theme\/[^/]+\.xml$/.test(q))) {
      const th = await zip.file(p).async('string');
      if (/script="(Jpan|Hang|Hans|Hant)"/.test(th) || /<a:(ea|cs) typeface=""/.test(th)) problems.push(`${p}: CJK or empty fallback font`);
    }
    if (!Object.keys(zip.files).some((q) => q.startsWith('ppt/fonts/'))) problems.push('Amiri is not embedded');
    if (problems.length) { failed++; console.log(`✗ ${f.split('/').pop()} — ${problems.count || 0} unsafe Arabic runs; ${problems.join(' | ')}`); }
    else console.log(`✓ ${f.split('/').pop()} — ${runs} Arabic runs, all Amiri / ar-SA; no CJK fonts; Amiri embedded`);
  }
  process.exit(failed ? 1 : 0);
})();
