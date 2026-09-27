'use strict';
// Usage: node build.js tc-l01 [outDir]
const path = require('path');
const fs = require('fs');
const pptxgen = require('pptxgenjs');
const S = require('./slides');
const { C } = require('./lib');

async function build(key, outDir) {
  const lesson = require(path.join(__dirname, 'content', `${key}.js`));
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_WIDE';
  pres.author = 'Al Madina Online School · Arabic Department';
  pres.company = 'Al Madina Online School';
  pres.title = `${lesson.meta.code} · ${lesson.meta.title}`;
  const D = { pres, meta: lesson.meta, slides: [] };
  for (const sp of lesson.slides) {
    const fn = S[sp.type];
    if (!fn) throw new Error(`Unknown slide type ${sp.type}`);
    await fn(D, sp);
  }
  const total = D.slides.length;
  D.slides.forEach((s, i) => {
    if (i === 0 || i === total - 1) return;
    s.addText(`${i + 1} / ${total}`, { x: 11.33, y: 7.06, w: 1.5, h: 0.24, isTextBox: true, margin: 0, align: 'right', valign: 'middle', fontFace: 'Calibri', fontSize: 8.5, color: C.muted });
  });
  fs.mkdirSync(outDir, { recursive: true });
  const file = path.join(outDir, `${lesson.meta.file}.pptx`);
  await pres.writeFile({ fileName: file });
  console.log(`${file}  (${total} slides)`);
  return file;
}

if (require.main === module) {
  const [key, out] = process.argv.slice(2);
  const unit = key.split('-')[0].toUpperCase();
  const dir = { TC: 'Topic_C', TA: 'Topic_A', TB: 'Topic_B', TD: 'Topic_D', TE: 'Topic_E' }[unit]
    || `${{ F: 'Foundation', D: 'Development', P: 'Progression' }[unit[0]]}_${unit}`;
  build(key, out || path.join(__dirname, '..', dir)).catch((e) => { console.error(e); process.exit(1); });
}
module.exports = build;
