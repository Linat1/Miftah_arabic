'use strict';
/*
 * Repairs Arabic font settings in decks that are already built (no rebuild, content untouched):
 * runs that contain Arabic → ar-SA + Amiri in every font slot; theme fallbacks → Amiri, CJK script fonts removed.
 * Usage: node fix-fonts.js [folder …]   (default: every .pptx in the repository)
 */
const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');
const { patchZip } = require('./fonts');

const ROOT = path.join(__dirname, '..');
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
  if (e.name === 'node_modules' || e.name.startsWith('.')) return [];
  const p = path.join(d, e.name);
  return e.isDirectory() ? walk(p) : (p.endsWith('.pptx') ? [p] : []);
});
(async () => {
  const files = (process.argv.slice(2).length ? process.argv.slice(2).map((a) => path.resolve(a)) : [ROOT]).flatMap((p) => (fs.statSync(p).isDirectory() ? walk(p) : [p]));
  let n = 0;
  for (const f of files) {
    const zip = await JSZip.loadAsync(fs.readFileSync(f));
    await patchZip(zip);
    fs.writeFileSync(f, await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' }));
    n++;
  }
  console.log(`patched ${n} decks`);
})().catch((e) => { console.error(e); process.exit(1); });
