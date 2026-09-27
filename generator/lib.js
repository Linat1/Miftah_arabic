'use strict';
/*
 * Miftah Arabic lesson-deck design system.
 * Reproduces the approved D1-L01 template: 13.33" x 7.5" canvas, Cambria headings,
 * Calibri body, Amiri Arabic, navy/gold palette, stage chips, route colours and the
 * WHO / PATTERN / MEANING / ENDING / KEY WORD colour code.
 */
const path = require('path');
const fs = require('fs');

const W = 13.333;
const H = 7.5;

const C = {
  navy: '1B3B6F', navyDeep: '0D1F3C', navyMid: '16335F', navyLine: '2A4B7C', navyCircle: '14315C',
  ink: '1F2A37', slate: '5A6472', muted: '8A93A0', faint: '9AA1AB',
  gold: 'D4AF37', goldDark: '8A6D1E', goldPale: 'EFE7D2',
  paper: 'FFFDF8', cream: 'F4F1EA', line: 'D8D0BF', white: 'FFFFFF',
  core: '2E8B57', corePale: 'E9F5EE', coreDark: '1E6B52',
  develop: 'C9780A', developPale: 'FCF1E0',
  stretch: 'B83227', stretchPale: 'FBEAEA',
  blueBox: 'F7F9FC', blueLine: 'C9D6EA', icePale: 'EEF3FA',
  teal: '0E7C86', tealPale: 'E6F3F4',
  purple: '6B4C9A', purplePale: 'F1ECF8', purpleLine: 'CFC2E3',
  red: 'B83227', correct: '2E8B57', correctPale: 'E6F4EC',
  amberPale: 'FFF4E0',
};

// Colour code used inside Arabic text: {w|..} {p|..} {m|..} {e|..} {k|..}
const CODE = {
  w: { color: '1D5FBF', label: 'WHO' },
  p: { color: 'C77700', label: 'PATTERN' },
  m: { color: '7B3FA0', label: 'MEANING' },
  e: { color: 'D6336C', label: 'ENDING' },
  k: { color: '0E7C86', label: 'KEY WORD' },
};

const STAGES = {
  welcome: { label: 'WELCOME', color: '5A6472' },
  donow: { label: 'DO NOW', color: '0E7C86' },
  teach: { label: 'TEACHER INSTRUCTION', color: '1B3B6F' },
  ido: { label: 'I DO', color: '6B4C9A' },
  wedo: { label: 'WE DO', color: '2F6FB0' },
  youdo: { label: 'YOU DO', color: '1E6B52' },
  feedback: { label: 'FEEDBACK', color: '8A6D1E' },
  prep: { label: 'PREPARATION', color: 'C45A3C' },
};

const ROUTES = {
  core: { label: 'CORE', color: C.core, pale: C.corePale, line: C.core, tag: 'Everyone', ar: 'الأَسَاسُ' },
  develop: { label: 'DEVELOP', color: C.develop, pale: C.developPale, line: C.develop, tag: 'Most of us', ar: 'التَّطْوِيرُ' },
  stretch: { label: 'STRETCH', color: C.stretch, pale: C.stretchPale, line: C.stretch, tag: 'Aim high', ar: 'التَّحَدِّي' },
};

const AR_RE = /[؀-ۿ]/;
const HARAKAT_RE = /[ً-ٰٟـ‎‏]/g;
const isArabic = (s) => AR_RE.test(String(s || '')) && !/[A-Za-z]/.test(stripMarkupRaw(String(s || '')));
function stripMarkupRaw(s) { return s.replace(/\{[wpmek]\|([^}]*)\}/g, '$1'); }
// split an English sentence into Latin and Arabic segments
const AR_SEG = /([\u0600-\u06FF\u0750-\u077F](?:[\u0600-\u06FF\u0750-\u077F\s\u060C\u061B\u061F\u0640\/\u2026]*[\u0600-\u06FF\u0750-\u077F])?)/;
const segs = (t) => String(t).split(AR_SEG).filter((x) => x !== '');
const stripMarkup = (s) => String(s || '').replace(/\{[wpmek]\|([^}]*)\}/g, '$1');
const baseLen = (s) => stripMarkup(s).replace(HARAKAT_RE, '').length;

// ---------- text measuring heuristics (calibrated against the template render) ----------
function textWidth(text, size, arabic) {
  const t = stripMarkup(text);
  if (arabic) return baseLen(t) * size * 0.0052;
  let w = 0;
  for (const ch of t) {
    if (/[ilI.,:;'’|!]/.test(ch)) w += 0.0034;
    else if (/[mwMW]/.test(ch)) w += 0.0115;
    else if (/[A-Z]/.test(ch)) w += 0.0086;
    else if (AR_RE.test(ch)) w += 0.0052;
    else if (/[ً-ٰٟ]/.test(ch)) w += 0;
    else w += 0.0071;
  }
  return w * size;
}
function linesNeeded(text, size, boxW, arabic) {
  const paragraphs = stripMarkup(text).split('\n');
  let lines = 0;
  for (const p of paragraphs) {
    const words = p.split(/\s+/).filter(Boolean);
    let cur = 0; let n = 1;
    const space = (arabic ? 0.0052 : 0.0034) * size;
    for (const wd of words) {
      const ww = textWidth(wd, size, arabic);
      if (cur > 0 && cur + space + ww > boxW) { n++; cur = ww; } else { cur += (cur > 0 ? space : 0) + ww; }
    }
    lines += n;
  }
  return lines;
}
function lineHeight(size, arabic) { return (arabic ? 1.62 : 1.22) * size / 72; }
function fit(text, boxW, boxH, maxSize, minSize, arabic, factor = 1) {
  arabic = arabic === undefined ? isArabic(text) : arabic;
  const usableW = (boxW * 0.94) / factor;
  for (let s = maxSize; s >= minSize; s -= 0.5) {
    const n = linesNeeded(text, s, usableW, arabic);
    if (n * lineHeight(s, arabic) <= boxH * 0.96) return s;
  }
  return minSize;
}

// ---------- icons ----------
const ICON_DIR = path.join(__dirname, 'icons');
const iconCache = {};
let React; let ReactDOMServer; let sharp;
async function icon(set, name, color, size = 256) {
  const key = `${set}/${name}/${color}`;
  if (iconCache[key]) return iconCache[key];
  React = React || require('react');
  ReactDOMServer = ReactDOMServer || require('react-dom/server');
  sharp = sharp || require('sharp');
  const lib = require(`react-icons/${set}`);
  const Comp = lib[name];
  if (!Comp) throw new Error(`icon ${set}/${name} missing`);
  const svg = ReactDOMServer.renderToStaticMarkup(React.createElement(Comp, { color: `#${color}`, size: String(size) }));
  const buf = await sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();
  iconCache[key] = 'image/png;base64,' + buf.toString('base64');
  return iconCache[key];
}
function templateIcon(file) {
  return 'image/png;base64,' + fs.readFileSync(path.join(ICON_DIR, file)).toString('base64');
}

// ---------- primitive builders ----------
function shadow() { return { type: 'outer', blur: 4, offset: 1.5, angle: 90, color: '000000', opacity: 0.1 }; }

function box(s, x, y, w, h, o = {}) {
  s.addShape('roundRect', {
    x, y, w, h,
    rectRadius: o.r === undefined ? 0.08 : o.r,
    fill: { color: o.fill || C.white },
    line: o.line === null ? { type: 'none' } : { color: o.line || C.line, width: o.lw || 0.75, dashType: o.dash || 'solid' },
    shadow: o.shadow === false ? undefined : shadow(),
  });
}
function pill(s, x, y, w, h, fill, text, o = {}) {
  s.addShape('roundRect', { x, y, w, h, rectRadius: h / 2, fill: { color: fill }, line: o.line ? { color: o.line, width: 1, dashType: o.dash || 'solid' } : { color: fill, width: 1 } });
  if (text !== undefined) {
    s.addText(text, {
      x, y, w, h, isTextBox: true, margin: 0, align: 'center', valign: 'middle',
      fontFace: o.font || 'Calibri', fontSize: o.size || 9, bold: o.bold !== false, color: o.color || C.white,
      charSpacing: o.cs === undefined ? 1 : o.cs, italic: !!o.italic,
    });
  }
}
function circle(s, x, y, d, fill, text, o = {}) {
  s.addShape('ellipse', { x, y, w: d, h: d, fill: { color: fill }, line: { color: o.line || fill, width: o.lw || 1 } });
  if (text !== undefined && text !== '') {
    s.addText(String(text), {
      x, y: y + (o.dy || 0), w: d, h: d, isTextBox: true, margin: 0, align: 'center', valign: 'middle',
      fontFace: o.font || 'Calibri', fontSize: o.size || 11, bold: o.bold !== false, color: o.color || C.white,
      rtlMode: isArabic(text), lang: isArabic(text) ? 'ar-SA' : undefined,
    });
  }
}

// Arabic runs with colour-code markup
function arRuns(text, o = {}) {
  const runs = [];
  const re = /\{([wpmek])\|([^}]*)\}/g;
  let last = 0; let m;
  const base = { fontFace: 'Amiri', bold: o.bold !== false, color: o.color || C.ink, lang: 'ar-SA', rtlMode: true };
  if (o.size) base.fontSize = o.size;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) runs.push({ text: text.slice(last, m.index), options: { ...base } });
    runs.push({ text: m[2], options: { ...base, color: o.plain ? base.color : CODE[m[1]].color } });
    last = m.index + m[0].length;
  }
  if (last < text.length) runs.push({ text: text.slice(last), options: { ...base } });
  return runs;
}

// Generic text: auto-detect Arabic, colour-code markup, fitted size
function txt(s, text, x, y, w, h, o = {}) {
  const arabic = o.arabic === undefined ? isArabic(text) : o.arabic;
  const factor = o.factor || (o.font === 'Cambria' ? 1.2 : 1);
  const size = o.fit ? fit(text, w, h, o.size || (arabic ? 18 : 13), o.min || (arabic ? 11 : 9), arabic, factor) : (o.size || (arabic ? 18 : 13));
  const common = {
    x, y, w, h, isTextBox: true, margin: o.margin === undefined ? 0 : o.margin, valign: o.valign || 'middle',
    align: o.align || (arabic ? 'right' : 'left'), fontSize: size, paraSpaceAfter: o.psa || 0,
  };
  if (arabic && o.arFactor) common.fontSize = fit(text, w, h, o.size || 18, o.min || 11, true, o.arFactor);
  let arLsm = o.lsm;
  if (arabic && o.fit && !o.lsm) {
    // fully vowelled Arabic over several lines needs air between lines so the harakat do not collide
    const f = o.arFactor || factor;
    if (linesNeeded(stripMarkupRaw(String(text)), common.fontSize, (w * 0.94) / f, true) > 1) {
      arLsm = 1.2;
      common.fontSize = fit(text, w, h / 1.2, o.size || 18, o.min || 11, true, f);
    }
  }
  if (arabic) {
    s.addText(arRuns(String(text), { color: o.color, bold: o.bold, plain: o.plain }), {
      ...common, rtlMode: true, lang: 'ar-SA', fontFace: 'Amiri', lineSpacingMultiple: arLsm || undefined,
    });
  } else if (AR_RE.test(String(text))) {
    // English sentence containing Arabic words: Arabic segments in Amiri, a little larger so they stay legible
    const runs = segs(stripMarkupRaw(String(text))).map((seg) => (AR_RE.test(seg)
      ? { text: seg, options: { fontFace: 'Amiri', fontSize: Math.round(size * 1.3 * 2) / 2, bold: !!o.bold, color: o.arColor || o.color || C.ink, lang: 'ar-SA' } }
      : { text: seg, options: { fontFace: o.font || 'Calibri', fontSize: size, bold: !!o.bold, italic: !!o.italic, color: o.color || C.ink } }));
    s.addText(runs, { ...common, lineSpacingMultiple: o.lsm || undefined });
  } else {
    s.addText(String(text), {
      ...common, fontFace: o.font || 'Calibri', bold: !!o.bold, italic: !!o.italic, color: o.color || C.ink,
      charSpacing: o.cs || undefined, lineSpacingMultiple: o.lsm || undefined,
    });
  }
  return size;
}

// Mixed English + Arabic line, e.g. "The ending ـِيٌّ means …" – given as array of segments
function mixed(s, segs, x, y, w, h, o = {}) {
  const size = o.size || 12;
  const runs = segs.map((seg, i) => {
    const t = (i < segs.length - 1 && !isArabic(seg)) ? seg : seg;
    if (isArabic(seg)) return { text: '‎' + stripMarkup(seg) + '‎', options: { fontFace: 'Amiri', fontSize: size * 1.2, bold: !!o.arBold, color: o.arColor || o.color || C.ink, lang: 'ar-SA' } };
    return { text: t, options: { fontFace: 'Calibri', fontSize: size, bold: !!o.bold, italic: !!o.italic, color: o.color || C.ink } };
  });
  s.addText(runs, { x, y, w, h, isTextBox: true, margin: 0, valign: o.valign || 'middle', align: o.align || 'left' });
}

module.exports = {
  W, H, C, CODE, STAGES, ROUTES, isArabic, stripMarkup, baseLen, fit, textWidth, linesNeeded, lineHeight,
  icon, templateIcon, segs, box, pill, circle, arRuns, txt, mixed, shadow,
};
