'use strict';
/*
 * Arabic font safety for Teams / PowerPoint for the web.
 * 1. pptxgenjs writes every Amiri run with an East-Asian slot (<a:ea charset="-122"> = GB2312) and a complex-script slot with charset -120
 *    (Big5). A viewer without Amiri then substitutes by charset — a Chinese font — and Arabic shows as Chinese-looking glyphs.
 *    fixRuns() removes the East-Asian slot and gives the Latin and complex-script slots the Arabic charset (178 → "-78").
 * 2. embed() embeds Amiri Regular and Bold (SIL Open Font License, fsType 0 = installable embedding) in the .pptx as Embedded OpenType
 *    (.fntdata), the format PowerPoint itself uses, and sets embedTrueTypeFonts="1".
 */
const fs = require('fs');
const JSZip = require('jszip');

const DIR = '/usr/share/fonts/opentype/fonts-hosny-amiri';
const FACES = [{ file: 'Amiri-Regular.ttf', slot: 'regular' }, { file: 'Amiri-Bold.ttf', slot: 'bold' }];

// ---------- minimal TrueType reader + EOT (version 0x00020001, uncompressed) writer
function tables(buf) {
  const n = buf.readUInt16BE(4); const t = {};
  for (let i = 0; i < n; i++) {
    const o = 12 + i * 16;
    t[buf.toString('ascii', o, o + 4)] = { off: buf.readUInt32BE(o + 8), len: buf.readUInt32BE(o + 12) };
  }
  return t;
}
function nameRecord(buf, t, id) {
  const base = t.name.off; const count = buf.readUInt16BE(base + 2); const strOff = base + buf.readUInt16BE(base + 4);
  for (let i = 0; i < count; i++) {
    const r = base + 6 + i * 12;
    const plat = buf.readUInt16BE(r); const enc = buf.readUInt16BE(r + 2); const lang = buf.readUInt16BE(r + 4); const nid = buf.readUInt16BE(r + 6);
    if (plat === 3 && enc === 1 && lang === 0x409 && nid === id) {
      const len = buf.readUInt16BE(r + 8); const off = buf.readUInt16BE(r + 10);
      const be = buf.subarray(strOff + off, strOff + off + len); const le = Buffer.alloc(len);
      for (let k = 0; k < len; k += 2) { le[k] = be[k + 1]; le[k + 1] = be[k]; }
      return le; // UTF-16LE, as EOT requires
    }
  }
  return Buffer.alloc(0);
}
function eot(ttf) {
  const t = tables(ttf); const os2 = t['OS/2'].off;
  const names = [1, 2, 5, 4].map((id) => nameRecord(ttf, t, id)); // family, style, version, full name
  const parts = [];
  const head = Buffer.alloc(82);
  head.writeUInt32LE(0, 0); // EOTSize, filled in below
  head.writeUInt32LE(ttf.length, 4);
  head.writeUInt32LE(0x00020001, 8);
  head.writeUInt32LE(0, 12); // flags: no compression, no XOR
  ttf.copy(head, 16, os2 + 32, os2 + 42); // PANOSE
  head.writeUInt8(1, 26); // DEFAULT_CHARSET
  head.writeUInt8(ttf.readUInt16BE(os2 + 62) & 1, 27); // italic (fsSelection bit 0)
  head.writeUInt32LE(ttf.readUInt16BE(os2 + 4), 28); // usWeightClass
  head.writeUInt16LE(ttf.readUInt16BE(os2 + 8), 32); // fsType
  head.writeUInt16LE(0x504c, 34); // magic
  for (let k = 0; k < 4; k++) head.writeUInt32LE(ttf.readUInt32BE(os2 + 42 + k * 4), 36 + k * 4); // ulUnicodeRange1–4
  for (let k = 0; k < 2; k++) head.writeUInt32LE(ttf.readUInt32BE(os2 + 78 + k * 4), 52 + k * 4); // ulCodePageRange1–2
  head.writeUInt32LE(ttf.readUInt32BE(t.head.off + 8), 60); // checkSumAdjustment
  // 64–79 reserved (0), 80–81 padding1 (0)
  parts.push(head);
  names.forEach((nm, i) => {
    const sz = Buffer.alloc(2); sz.writeUInt16LE(nm.length, 0);
    parts.push(sz, nm);
    parts.push(Buffer.alloc(2)); // padding after each name (padding2–5; the last one precedes RootString)
    if (i === 3) { const root = Buffer.alloc(2); root.writeUInt16LE(0, 0); parts.push(root); } // RootStringSize = 0
  });
  parts.push(ttf);
  const out = Buffer.concat(parts);
  out.writeUInt32LE(out.length, 0);
  return out;
}

let cache = null;
const fontData = () => cache || (cache = FACES.map((f) => ({ ...f, data: eot(fs.readFileSync(`${DIR}/${f.file}`)) })));

function fixRuns(xml) {
  return xml
    .replace(/<a:ea typeface="[^"]*"[^>]*\/>/g, '') // no East-Asian slot (its GB2312 charset is what pulls in a Chinese font)
    .replace(/<a:latin typeface="Amiri"[^>]*\/>/g, '<a:latin typeface="Amiri" pitchFamily="2" charset="-78"/>')
    .replace(/<a:cs typeface="[^"]*"[^>]*\/>/g, '<a:cs typeface="Amiri" pitchFamily="2" charset="-78"/>'); // any Arabic, even inside an English run, uses Amiri
}

/*
 * 3. Editing safety (clicking into a text box in Teams / PowerPoint for the web). In edit mode the viewer may not use the
 *    embedded font and falls back by the run's language and the theme. Runs tagged en-US with no East-Asian slot fell back
 *    to the theme's Chinese / Japanese script fonts. So every run that contains Arabic is tagged ar-SA and names Amiri
 *    with the Arabic charset in all three slots (latin is left alone when it is an English font), and the theme's
 *    East-Asian / complex-script fallbacks become Amiri, with the CJK script fonts removed.
 */
const AR = /[؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿]/;
const AMIRI = 'pitchFamily="2" charset="-78"';
function arabicRuns(xml) {
  return xml.replace(/<a:r>(<a:rPr\b[^>]*?(?:\/>|>[\s\S]*?<\/a:rPr>))?(<a:t>[^<]*<\/a:t>)<\/a:r>/g, (all, rPr, t) => {
    if (!AR.test(t)) return all;
    let pr = rPr || '<a:rPr/>';
    if (pr.endsWith('/>')) pr = pr.slice(0, -2) + '></a:rPr>';
    let open = pr.match(/^<a:rPr\b[^>]*>/)[0]; let body = pr.slice(open.length, -'</a:rPr>'.length);
    open = /\blang="/.test(open) ? open.replace(/\blang="[^"]*"/, 'lang="ar-SA"') : open.replace('<a:rPr', '<a:rPr lang="ar-SA"');
    body = body.replace(/<a:ea\b[^>]*\/>/g, '').replace(/<a:cs\b[^>]*\/>/g, '');
    const slots = `<a:ea typeface="Amiri" ${AMIRI}/><a:cs typeface="Amiri" ${AMIRI}/>`;
    if (/<a:latin\b[^>]*\/>/.test(body)) body = body.replace(/(<a:latin\b[^>]*\/>)/, `$1${slots}`);
    else {
      const m = body.search(/<a:(sym|hlinkClick|hlinkMouseOver|rtl|extLst)\b/);
      const latin = `<a:latin typeface="Amiri" ${AMIRI}/>`;
      body = m < 0 ? body + latin + slots : body.slice(0, m) + latin + slots + body.slice(m);
    }
    return `<a:r>${open}${body}</a:rPr>${t}</a:r>`;
  });
}
function fixTheme(xml) {
  return xml
    .replace(/<a:font script="(Jpan|Hang|Hans|Hant)" typeface="[^"]*"\/>/g, '')
    .replace(/(<a:(?:major|minor)Font>[\s\S]*?)<a:ea typeface="[^"]*"[^>]*\/>/g, `$1<a:ea typeface="Amiri" ${AMIRI}/>`)
    .replace(/(<a:(?:major|minor)Font>[\s\S]*?)<a:cs typeface="[^"]*"[^>]*\/>/g, `$1<a:cs typeface="Amiri" ${AMIRI}/>`)
    .replace(/<a:font script="Arab" typeface="[^"]*"\/>/g, '<a:font script="Arab" typeface="Amiri"/>');
}

// Font safety only (runs + themes) — used by embed() and to repair decks that are already built.
async function patchZip(zip) {
  const xmlFiles = Object.keys(zip.files).filter((p) => /^ppt\/(slides|slideLayouts|slideMasters|notesSlides|notesMasters)\/[^/]+\.xml$/.test(p));
  for (const p of xmlFiles) zip.file(p, arabicRuns(fixRuns(await zip.file(p).async('string'))));
  for (const p of Object.keys(zip.files).filter((q) => /^ppt\/theme\/[^/]+\.xml$/.test(q))) zip.file(p, fixTheme(await zip.file(p).async('string')));
}

async function embed(file) {
  const zip = await JSZip.loadAsync(fs.readFileSync(file));
  await patchZip(zip);
  const fd = fontData();
  const rels = await zip.file('ppt/_rels/presentation.xml.rels').async('string');
  let relXml = rels; const ids = [];
  fd.forEach((f, i) => {
    const id = `rIdFont${i + 1}`; ids.push(id);
    zip.file(`ppt/fonts/font${i + 1}.fntdata`, f.data);
    relXml = relXml.replace('</Relationships>', `<Relationship Id="${id}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/font" Target="fonts/font${i + 1}.fntdata"/></Relationships>`);
  });
  zip.file('ppt/_rels/presentation.xml.rels', relXml);
  let pres = await zip.file('ppt/presentation.xml').async('string');
  const lst = `<p:embeddedFontLst><p:embeddedFont><p:font typeface="Amiri" pitchFamily="2" charset="-78"/>${fd.map((f, i) => `<p:${f.slot} r:id="${ids[i]}"/>`).join('')}</p:embeddedFont></p:embeddedFontLst>`;
  pres = pres.replace(/(<p:notesSz[^>]*\/>)/, `$1${lst}`).replace(/<p:presentation /, '<p:presentation embedTrueTypeFonts="1" ');
  zip.file('ppt/presentation.xml', pres);
  let ct = await zip.file('[Content_Types].xml').async('string');
  if (!/Extension="fntdata"/.test(ct)) ct = ct.replace('<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">', '$&<Default Extension="fntdata" ContentType="application/x-fontdata"/>');
  zip.file('[Content_Types].xml', ct);
  fs.writeFileSync(file, await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' }));
}

module.exports = { embed, fixRuns, arabicRuns, fixTheme, patchZip, eot };
