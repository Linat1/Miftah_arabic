'use strict';
const L = require('./lib');
const { C, STAGES, ROUTES, CODE, W, box, pill, circle, txt, mixed, isArabic, fit } = L;

// ------------------------------------------------------------------ frame
function chipWidth(label) { return Math.max(1.5, 0.44 + 0.083 * label.length); }

function frame(D, sp) {
  const s = D.pres.addSlide();
  s.background = { color: C.paper };
  const st = STAGES[sp.stage];
  // logo + school
  s.addShape('ellipse', { x: 0.5, y: 0.26, w: 0.46, h: 0.46, fill: { color: C.navy }, line: { color: C.gold, width: 1 } });
  s.addText('م', { x: 0.5, y: 0.24, w: 0.46, h: 0.46, isTextBox: true, margin: 0, align: 'center', valign: 'middle', fontFace: 'Amiri', fontSize: 18, bold: true, color: C.gold, rtlMode: true, lang: 'ar-SA' });
  s.addText('Al Madina Online School', { x: 1.05, y: 0.24, w: 4, h: 0.28, isTextBox: true, margin: 0, valign: 'middle', fontFace: 'Cambria', fontSize: 12, bold: true, color: C.navy });
  s.addText('ARABIC DEPARTMENT · MIFTAH ARABIC · IGCSE 0544', { x: 1.05, y: 0.5, w: 5, h: 0.2, isTextBox: true, margin: 0, valign: 'middle', fontFace: 'Calibri', fontSize: 8, bold: true, color: C.goldDark, charSpacing: 2 });
  // lesson chip + stage chip (+ FLEX)
  const chipTxt = `${D.meta.code} · ${D.meta.chip}`;
  pill(s, 9.73, 0.3, 3.1, 0.36, C.navy, chipTxt, { size: Math.min(9.5, fit(chipTxt, 2.5, 0.36, 9.5, 7, false, 1.25)) });
  const label = st.label + (sp.min ? ` · ${sp.min} MIN` : '');
  const cw = chipWidth(label);
  const cx = 9.58 - cw;
  pill(s, cx, 0.3, cw, 0.36, st.color, label, { size: 9 });
  if (sp.flex) pill(s, cx - 0.15 - 1.05, 0.3, 1.05, 0.36, C.paper, 'FLEX', { line: C.slate, dash: 'dash', color: C.slate, size: 8.5 });
  // eyebrow, title, Arabic title
  if (sp.eyebrow) {
    // keep the eyebrow on one line: tighten the letter spacing, then the size, for long labels
    const n = sp.eyebrow.length; let cs = 3; let size = 10;
    if (n * (size * 0.6 + cs) / 72 > 7.4) { cs = 1.5; size = Math.max(8, Math.min(10, ((7.4 * 72) / n - cs) / 0.6)); }
    txt(s, sp.eyebrow.toUpperCase(), 0.5, 0.9, 7.6, 0.26, { size, bold: true, color: st.color, cs, arabic: false });
  }
  if (sp.title) {
    const size = fit(sp.title, 7.6, 0.62, 28, 17, false, 1.2);
    txt(s, sp.title, 0.5, 1.13, 7.6, 0.62, { font: 'Cambria', size, bold: true, color: C.navy, arabic: false });
  }
  if (sp.ar) txt(s, sp.ar, 8.2, 0.95, 4.63, 0.82, { fit: true, size: 28, min: 18, bold: true, color: C.goldDark });
  s.addText(D.meta.footer, { x: 0.5, y: 7.06, w: 7, h: 0.24, isTextBox: true, margin: 0, valign: 'middle', fontFace: 'Calibri', fontSize: 8.5, color: C.muted });
  if (sp.notes) s.addNotes(sp.notes);
  D.slides.push(s);
  return s;
}

// ------------------------------------------------------------------ answer arrangement
const POS = [1, 0, 2, 2, 0, 1, 0, 2, 1, 1, 2, 0];
function arrange(q, k) {
  if (q.fixed || q.options.length < 2 || q.options.length > 3) return { options: q.options, answer: q.answer || 0 };
  if (q.options.length === 2) {
    // two-option items (sun/moon, yes/no): keep a stable order and let the answer move
    const a = q.answer || 0; const opts = q.options.slice().sort();
    return { options: opts, answer: opts.indexOf(q.options[a]) };
  }
  const correct = q.options[q.answer || 0];
  const others = q.options.filter((_, i) => i !== (q.answer || 0));
  const pos = POS[k % POS.length];
  const opts = others.slice();
  opts.splice(pos, 0, correct);
  return { options: opts, answer: pos };
}

// ------------------------------------------------------------------ MCQ grid
function mcqCard(s, q, n, x, y, w, h, reveal, k) {
  const { options, answer } = q._arr || arrange(q, k);
  box(s, x, y, w, h);
  circle(s, x + 0.14, y + 0.15, 0.34, C.navy, n, { size: 11 });
  let optTop = y + 0.68;
  if (q.ar && q.arBlock) {
    txt(s, q.prompt, x + 0.54, y + 0.08, w - 0.66, 0.5, { fit: true, size: 12.5, min: 10, bold: true, color: C.navy });
    txt(s, q.ar, x + 0.2, y + 0.58, w - 0.4, 0.56, { fit: true, size: 18, min: 12, bold: true, color: C.ink });
    optTop = y + 1.16;
  } else if (q.ar) {
    txt(s, q.prompt, x + 0.54, y + 0.08, (w - 0.66) * 0.46, 0.52, { fit: true, size: 12, min: 9.5, bold: true, color: C.navy });
    txt(s, q.ar, x + 0.54 + (w - 0.66) * 0.48, y + 0.08, (w - 0.66) * 0.52, 0.52, { fit: true, size: q.arBig ? 30 : 15, min: 10, bold: true, color: q.arBig ? C.navy : C.ink });
  } else {
    txt(s, q.prompt, x + 0.54, y + 0.08, w - 0.66, 0.52, { fit: true, size: 12.5, min: 9.5, bold: true, color: C.navy });
  }
  const fbSpace = reveal && q.why ? 0.46 : 0.12;
  const pitch = Math.min(0.5, (y + h - fbSpace - optTop) / options.length);
  const arabicOpts = options.every((o) => isArabic(o));
  // shared size for Arabic options in one card so they look even
  let arSize = 30;
  const letterOpts = arabicOpts && options.every((o) => o.replace(/[\u064B-\u0652\s]/g, '').length <= 1);
  if (arabicOpts) for (const o of options) arSize = Math.min(arSize, fit(o, w - 0.72, pitch * 0.98, letterOpts ? 30 : 22, 10.5, true));
  if (!letterOpts) arSize = Math.min(arSize, 22);
  options.forEach((o, i) => {
    const oy = optTop + i * pitch;
    const isAns = reveal && i === answer;
    if (isAns) box(s, x + 0.1, oy + (pitch - 0.38) / 2 + 0.01, w - 0.2, 0.38, { fill: C.correctPale, line: C.correct, shadow: false, r: 0.06 });
    circle(s, x + 0.2, oy + (pitch - 0.28) / 2, 0.28, isAns ? C.correct : (reveal ? 'C9CED6' : C.cream), 'ABC'[i], { size: 9, color: isAns ? C.white : C.navy });
    const col = reveal ? (isAns ? C.ink : C.faint) : C.ink;
    if (isArabic(o)) txt(s, o, x + 0.56, oy, w - 0.72, pitch, { size: arSize, bold: isAns, color: col, plain: reveal && !isAns });
    else txt(s, o, x + 0.56, oy, w - 0.72, pitch, { fit: true, size: 12.5, min: 9, bold: isAns, color: col, arabic: false });
  });
  if (reveal && q.why) mixedLine(s, q.why, x + 0.14, y + h - 0.44, w - 0.28, 0.4, { size: 10.5, italic: true, color: C.goldDark });
}

function mixedLine(s, t, x, y, w, h, o = {}) {
  if (isArabic(t)) return txt(s, t, x, y, w, h, { fit: true, size: (o.size || 11) + 3, min: 9, color: o.color, bold: false });
  return txt(s, t, x, y, w, h, { fit: true, size: o.size || 11, min: o.min || 8, italic: o.italic, color: o.color, bold: o.bold, arabic: false });
}

function sideCard(s, side, x, y, w, h) {
  if (side.kind === 'howto') {
    box(s, x, y, w, h, { fill: 'E8F4F5', line: '9CCFD4' });
    txt(s, 'HOW TO ANSWER', x + 0.22, y + 0.35, w - 0.4, 0.3, { size: 11, bold: true, color: C.teal, cs: 2 });
    txt(s, side.text, x + 0.22, y + 0.66, w - 0.4, 0.9, { fit: true, size: 13.5, min: 10, color: C.ink, valign: 'top' });
    if (side.chat) txt(s, side.chat, x + 0.22, y + 1.5, w - 0.4, 0.34, { size: 14, bold: true, color: C.navy, font: 'Consolas' });
    if (side.timer) txt(s, `⏱  ${side.timer}`, x + 0.22, y + h - 0.62, w - 0.4, 0.44, { size: 18, bold: true, color: C.teal });
  } else if (side.kind === 'keyidea') {
    box(s, x, y, w, h, { fill: 'FFF7E0', line: 'E8D49A' });
    txt(s, 'THE KEY IDEA FOR TODAY', x + 0.2, y + 0.14, w - 0.4, 0.28, { size: 10, bold: true, color: C.goldDark, cs: 2 });
    txt(s, side.text, x + 0.2, y + 0.44, w - 0.4, 0.7, { fit: true, size: 13, min: 10, bold: true, color: C.ink, valign: 'top' });
    txt(s, side.ar, x + 0.2, y + 1.15, w - 0.4, h - 1.25, { fit: true, size: 24, min: 14, bold: true, color: C.navy, align: 'center' });
  } else if (side.kind === 'core') {
    box(s, x, y, w, h, { fill: C.corePale, line: '9CCFB0' });
    if (side.icon) s.addImage({ data: side.icon, x: x + 0.22, y: y + 0.2, w: 0.36, h: 0.36 });
    pill(s, x + 0.68, y + 0.23, 1.0, 0.3, C.core, side.label || 'CORE', { size: 8.5 });
    txt(s, side.text, x + 0.22, y + 0.7, w - 0.4, h - 0.85, { fit: true, size: 12.5, min: 9, color: C.coreDark, valign: 'top' });
  } else if (side.kind === 'info') {
    box(s, x, y, w, h, { fill: side.fill || C.blueBox, line: side.line || C.blueLine });
    txt(s, side.head, x + 0.2, y + 0.14, w - 0.4, 0.3, { size: 10, bold: true, color: side.color || C.navy, cs: 2 });
    txt(s, side.text, x + 0.2, y + 0.48, w - 0.4, h - 0.6, { fit: true, size: 12.5, min: 9, color: C.ink, valign: 'top' });
  }
}

function mcqSlide(D, sp, reveal) {
  const s = frame(D, reveal ? { ...sp, ...sp.answerSlide, notes: (sp.answerSlide || {}).notes || sp.answerNotes } : sp);
  const qs = sp.questions;
  const n = qs.length + (sp.side ? 1 : 0);
  const cols = sp.cols || (n <= 2 ? 2 : n === 4 ? 2 : n >= 7 ? 4 : 3);
  const rows = Math.ceil(n / cols);
  const top = 1.98; const bottom = sp.bottom ? 5.85 : 6.9; const gap = 0.2;
  const cw = (12.33 - gap * (cols - 1)) / cols;
  const ch = (bottom - top - gap * (rows - 1)) / rows;
  qs.forEach((q, i) => {
    if (!q._arr) q._arr = arrange(q, (sp.seed || 0) + i);
    const r = Math.floor(i / cols); const c = i % cols;
    mcqCard(s, q, q.n || i + 1, 0.5 + c * (cw + gap), top + r * (ch + gap), cw, ch, reveal, i);
  });
  if (sp.side) {
    const i = qs.length; const r = Math.floor(i / cols); const c = i % cols;
    const side = reveal && sp.answerSide ? sp.answerSide : sp.side;
    sideCard(s, side, 0.5 + c * (cw + gap), top + r * (ch + gap), cw, ch);
  }
  if (sp.bottom) {
    const b = reveal && sp.answerBottom ? sp.answerBottom : sp.bottom;
    box(s, 0.5, 6.05, 12.33, 0.85, { fill: b.fill || 'FFF7E0', line: b.line || 'E8D49A' });
    const hw = Math.max(0.9, 0.45 + b.head.length * 0.115);
    txt(s, b.head, 0.75, 6.1, hw, 0.75, { size: 12, bold: true, color: b.color || C.goldDark, cs: 1, arabic: false });
    txt(s, b.text, 0.75 + hw, 6.1, 11.9 - hw, 0.75, { fit: true, size: 12.5, min: 9, color: C.ink, arabic: false });
  }
  return s;
}
async function mcq(D, sp) {
  mcqSlide(D, sp, false);
  if (sp.between) await module.exports[sp.between.type](D, sp.between);
  if (sp.answers !== false) mcqSlide(D, sp, true);
}

// ------------------------------------------------------------------ title
async function title(D, sp) {
  const m = D.meta;
  const s = D.pres.addSlide();
  s.background = { color: C.navyDeep };
  s.addShape('ellipse', { x: 8.6, y: -1.6, w: 6.4, h: 6.4, fill: { color: C.navyCircle }, line: { color: C.navyCircle } });
  s.addShape('ellipse', { x: 9.6, y: -0.6, w: 4.4, h: 4.4, fill: { color: C.navy }, line: { color: C.navy } });
  s.addImage({ data: await L.icon(m.iconSet || 'fa6', m.icon || 'FaEarthAfrica', C.gold), x: 10.95, y: 0.75, w: 1.7, h: 1.7 });
  s.addShape('ellipse', { x: 0.5, y: 0.45, w: 0.55, h: 0.55, fill: { color: C.navy }, line: { color: C.gold, width: 1.25 } });
  s.addText('م', { x: 0.5, y: 0.43, w: 0.55, h: 0.55, isTextBox: true, margin: 0, align: 'center', valign: 'middle', fontFace: 'Amiri', fontSize: 22, bold: true, color: C.gold, rtlMode: true, lang: 'ar-SA' });
  s.addText([
    { text: 'Al Madina Online School', options: { fontFace: 'Cambria', fontSize: 14, bold: true, color: C.white, breakLine: true } },
    { text: 'ARABIC DEPARTMENT · MIFTAH ARABIC', options: { fontFace: 'Calibri', fontSize: 8, bold: true, color: C.gold, charSpacing: 2 } },
  ], { x: 1.18, y: 0.42, w: 6, h: 0.62, isTextBox: true, margin: 0, valign: 'middle' });
  txt(s, m.kicker, 0.5, 1.75, 9.5, 0.3, { size: 11, bold: true, color: C.gold, cs: 2, arabic: false });
  txt(s, m.code, 0.5, 2.15, 8, 0.6, { font: 'Cambria', size: 26, bold: true, color: '9FB3D1', arabic: false });
  txt(s, m.title, 0.5, 2.72, 8.8, 0.95, { font: 'Cambria', fit: true, size: 40, min: 24, bold: true, color: C.white, arabic: false });
  txt(s, m.arabic, 0.5, 3.62, 8.8, 0.95, { fit: true, size: 36, min: 22, bold: true, color: C.gold, align: 'left' });
  txt(s, m.focus, 0.5, 4.62, 8.6, 0.8, { fit: true, size: 14, min: 11, color: 'C6D2E6', valign: 'top', arabic: false });
  const info = [['LESSON', m.lessonLine], ['DURATION', '60 minutes · Teams'], ['LEVEL', m.level], ['ON THE WEBSITE', m.site]];
  info.forEach(([h, v], i) => {
    const x = 0.5 + i * 3.08;
    s.addShape('roundRect', { x, y: 5.65, w: 2.9, h: 0.95, rectRadius: 0.08, fill: { color: C.navyMid }, line: { color: C.navyLine, width: 1 } });
    s.addText([
      { text: h, options: { fontSize: 8.5, bold: true, color: C.gold, charSpacing: 2, breakLine: true } },
      { text: v, options: { fontSize: 12, bold: true, color: C.white } },
    ], { x: x + 0.18, y: 5.7, w: 2.6, h: 0.85, isTextBox: true, margin: 0, valign: 'middle', fontFace: 'Calibri' });
  });
  if (sp.notes) s.addNotes(sp.notes);
  D.slides.push(s);
}

// ------------------------------------------------------------------ welcome
function welcome(D, sp) {
  const s = frame(D, sp);
  const items = [
    ['image-2-1.png', 'Camera on', 'So I can see you learning and help you quickly.'],
    ['image-2-2.png', 'Mic muted', 'Unmute only when invited to speak.'],
    ['image-2-3.png', 'Chat for learning', 'Answers, questions and Arabic only.'],
    ['image-2-4.png', 'Raise your hand', 'Use the hand button to ask for help.'],
  ];
  items.forEach(([img, h, t], i) => {
    const y = 2.0 + i * 1.18;
    box(s, 0.5, y, 5.9, 1.02);
    s.addShape('ellipse', { x: 0.7, y: y + 0.19, w: 0.64, h: 0.64, fill: { color: C.icePale }, line: { color: C.icePale } });
    s.addImage({ data: L.templateIcon(img), x: 0.85, y: y + 0.34, w: 0.34, h: 0.34 });
    s.addText([
      { text: h, options: { fontSize: 15, bold: true, color: C.navy, breakLine: true } },
      { text: t, options: { fontSize: 11.5, color: C.slate } },
    ], { x: 1.5, y: y + 0.08, w: 4.8, h: 0.86, isTextBox: true, margin: 0, valign: 'middle', fontFace: 'Calibri' });
  });
  box(s, 6.75, 2.0, 6.08, 4.56, { fill: C.blueBox, line: C.blueLine });
  txt(s, 'HOW WE TALK — THE ORACY CODE', 7.0, 2.12, 5.58, 0.34, { size: 11, bold: true, color: C.navy, cs: 2 });
  const code = [['●', 'Think', 'silent preparation'], ['↔', 'Rehearse', 'both partners speak'], ['+', 'Build', 'add a reason or detail'], ['?', 'Challenge', 'question respectfully'], ['◎', 'Share', 'anyone may be invited'], ['↺', 'Summarise', 'say it more precisely']];
  code.forEach(([sym, h, t], i) => {
    const x = i % 2 === 0 ? 7.0 : 9.84; const y = 2.68 + Math.floor(i / 2) * 1.0;
    circle(s, x, y, 0.6, C.navy, sym, { size: 18, color: C.gold, font: 'Arial' });
    s.addText([
      { text: h, options: { fontSize: 14, bold: true, color: C.navy, breakLine: true } },
      { text: t, options: { fontSize: 11, color: C.slate } },
    ], { x: x + 0.72, y: y - 0.08, w: 2.2, h: 0.76, isTextBox: true, margin: 0, valign: 'middle', fontFace: 'Calibri' });
  });
  txt(s, sp.promise || 'I will always give you thinking and practice time before I ask anyone. Reading aloud is by invitation — you can always say “pass, please come back to me”.', 7.0, 5.72, 5.58, 0.76, { fit: true, size: 11.5, min: 9.5, italic: true, color: C.goldDark, arabic: false });
}

// ------------------------------------------------------------------ lesson map (SEND: predictability)
function journey(D, sp) {
  const s = frame(D, sp);
  const steps = sp.steps; const n = steps.length; const gap = 0.14;
  const w = (12.33 - gap * (n - 1)) / n;
  steps.forEach((st, i) => {
    const x = 0.5 + i * (w + gap); const c = STAGES[st.stage].color;
    box(s, x, 2.0, w, 3.55, { fill: C.white });
    s.addShape('roundRect', { x: x + 0.12, y: 2.12, w: w - 0.24, h: 0.62, rectRadius: 0.06, fill: { color: c }, line: { color: c } });
    txt(s, STAGES[st.stage].label, x + 0.16, 2.14, w - 0.32, 0.36, { fit: true, size: 10, min: 7.5, bold: true, color: C.white, align: 'center', cs: 1, arabic: false });
    txt(s, `${st.min} min`, x + 0.16, 2.46, w - 0.32, 0.26, { size: 10, color: 'E8EDF5', align: 'center', arabic: false });
    circle(s, x + w / 2 - 0.22, 2.9, 0.44, C.cream, i + 1, { size: 13, color: C.navy });
    txt(s, st.text, x + 0.14, 3.44, w - 0.28, 1.55, { fit: true, size: 12, min: 9, color: C.ink, align: 'center', valign: 'top', arabic: false });
    if (st.ar) txt(s, st.ar, x + 0.1, 4.95, w - 0.2, 0.48, { fit: true, size: 15, min: 10, color: c, align: 'center' });
  });
  box(s, 0.5, 5.78, 12.33, 1.12, { fill: C.corePale, line: '9CCFB0' });
  txt(s, 'IF ARABIC FEELS HARD TODAY', 0.75, 5.86, 5, 0.3, { size: 10, bold: true, color: C.coreDark, cs: 2 });
  txt(s, sp.support, 0.75, 6.16, 11.9, 0.68, { fit: true, size: 12.5, min: 9.5, color: C.ink, valign: 'top', arabic: false });
}

// ------------------------------------------------------------------ objectives
function objectives(D, sp) {
  const s = frame(D, sp);
  box(s, 0.5, 1.98, 5.1, 4.72, { fill: C.blueBox, line: C.blueLine });
  txt(s, 'TODAY YOU WILL', 0.75, 2.1, 3, 0.32, { size: 11, bold: true, color: C.navy, cs: 2 });
  txt(s, 'سَتَتَعَلَّمُ اليَوْمَ', 3.1, 2.05, 2.3, 0.4, { size: 16, bold: false, color: C.goldDark });
  const ob = sp.objectives; const pitch = Math.min(0.98, 3.95 / ob.length);
  ob.forEach((o, i) => {
    const y = 2.62 + i * pitch;
    circle(s, 0.75, y, 0.4, C.navy, i + 1, { size: 12, color: C.gold });
    mixedLine(s, o, 1.3, y - 0.12, 4.1, pitch - 0.06, { size: 13 });
  });
  ['core', 'develop', 'stretch'].forEach((k, i) => {
    const R = ROUTES[k]; const y = 1.98 + i * 1.6;
    box(s, 5.85, y, 6.98, 1.48, { fill: R.pale, line: R.line, shadow: false });
    pill(s, 6.05, y + 0.15, 1.25, 0.32, R.color, R.label, { size: 9.5 });
    txt(s, R.tag, 7.4, y + 0.15, 2, 0.32, { size: 10.5, bold: true, italic: true, color: R.color, arabic: false });
    (sp.routes[k] || []).forEach((t, j) => mixedLine(s, '☐  ' + t, 6.05, y + 0.52 + j * 0.45, 6.58, 0.43, { size: 13, bold: true, color: R.color }));
  });
}

// ------------------------------------------------------------------ key words intro (dark)
function keywords(D, sp) {
  const s = D.pres.addSlide();
  s.background = { color: C.navyDeep };
  s.addShape('ellipse', { x: 9.2, y: 1.1, w: 5.2, h: 5.2, fill: { color: '22477F' }, line: { color: '22477F' } });
  const st = STAGES[sp.stage];
  pill(s, 0.5, 1.2, 3.4, 0.4, C.gold, `${st.label}${sp.min ? ' · ' + sp.min + ' MIN' : ''}`, { size: 10, color: C.navyDeep });
  txt(s, sp.title || 'Key words for today', 0.5, 1.95, 8.6, 0.9, { font: 'Cambria', size: 40, bold: true, color: C.white, arabic: false });
  txt(s, sp.ar || 'كَلِمَاتُ الدَّرْسِ', 0.5, 2.85, 8.6, 0.9, { size: 38, bold: true, color: C.gold, align: 'left' });
  txt(s, sp.text, 0.5, 3.9, 8.4, 0.9, { fit: true, size: 16, min: 12, color: 'C6D2E6', valign: 'top', arabic: false });
  const g = sp.groups; const gw = (8.6 - 0.15 * (g.length - 1)) / g.length;
  g.forEach((gr, i) => {
    const x = 0.5 + i * (gw + 0.15);
    s.addShape('roundRect', { x, y: 5.0, w: gw, h: 1.05, rectRadius: 0.08, fill: { color: gr.flex ? C.navyDeep : C.navyMid }, line: { color: gr.flex ? '7E92B4' : C.navyLine, width: 1, dashType: gr.flex ? 'dash' : 'solid' } });
    s.addText([
      { text: gr.head, options: { fontSize: 9, bold: true, color: C.gold, charSpacing: 2, breakLine: true } },
      { text: gr.name, options: { fontSize: 12, bold: true, color: C.white } },
    ], { x: x + 0.15, y: 5.05, w: gw - 0.3, h: 0.95, isTextBox: true, margin: 0, valign: 'middle', fontFace: 'Calibri' });
  });
  if (sp.bridge) {
    s.addShape('roundRect', { x: 9.55, y: 1.5, w: 3.3, h: 0.5 + sp.bridge.length * 0.62, rectRadius: 0.08, fill: { color: 'EAF6EF' }, line: { color: '9CCFB0', width: 1 } });
    txt(s, sp.bridgeTitle || 'BRIDGE FROM URDU', 9.75, 1.56, 2.9, 0.34, { size: 10, bold: true, color: C.core, cs: 2, arabic: false });
    sp.bridge.forEach((b, i) => {
      const y = 1.98 + i * 0.62;
      txt(s, b.ar, 11.2, y, 1.55, 0.52, { fit: true, size: 19, min: 12, bold: true, color: C.navy });
      s.addText([
        { text: '‎' + b.urdu + '‎ ', options: { fontFace: 'Amiri', fontSize: 14, bold: true, color: C.core, lang: 'ur-PK' } },
        { text: ` ${b.tr} · ${b.en}`, options: { fontFace: 'Calibri', fontSize: 9.5, bold: true, color: C.core } },
      ], { x: 9.67, y, w: 1.6, h: 0.52, isTextBox: true, margin: 0, valign: 'middle' });
    });
  }
  if (sp.notes) s.addNotes(sp.notes);
  D.slides.push(s);
}

// ------------------------------------------------------------------ vocabulary cards (6 per slide, RTL order)
function vocab(D, sp) {
  const s = frame(D, sp);
  const cw = 3.98; const ch = 2.36;
  sp.items.forEach((it, i) => {
    const r = Math.floor(i / 3); const c = 2 - (i % 3);
    const x = 0.5 + c * (cw + 0.2); const y = 1.98 + r * (ch + 0.2);
    box(s, x, y, cw, ch);
    circle(s, x + 0.12, y + 0.12, 0.34, C.cream, it.n, { size: 10, color: C.navy });
    let tx = x + 0.55;
    if (it.tag) {
      const tw = Math.max(0.77, 0.3 + it.tag.length * 0.068);
      pill(s, tx, y + 0.14, tw, 0.28, C.goldPale, it.tag, { size: 8, color: C.goldDark, cs: 0 });
      tx += tw + 0.1;
    }
    if (it.core) pill(s, x + cw - 0.95, y + 0.14, 0.8, 0.28, C.core, 'CORE', { size: 8 });
    const hasForms = it.forms && it.forms.length;
    txt(s, it.ar, x + 0.12, y + 0.44, cw - 0.26, hasForms ? 0.78 : 0.95, { fit: true, size: sp.bigAr ? 48 : 30, min: 16, bold: true, color: C.navy });
    const ey = hasForms ? y + 1.2 : y + 1.44;
    s.addText([
      { text: it.en, options: { fontSize: 13.5, bold: true, color: C.ink, breakLine: true } },
      { text: it.tr || '', options: { fontSize: 11, italic: true, color: C.slate } },
    ], { x: x + 0.15, y: ey, w: cw - 0.3, h: 0.56, isTextBox: true, margin: 0, valign: 'top', fontFace: 'Calibri' });
    if (hasForms) {
      const fw = (cw - 0.3 - 0.1 * (it.forms.length - 1)) / it.forms.length;
      it.forms.forEach((f, j) => {
        const fx = x + cw - 0.15 - (j + 1) * fw - j * 0.1;
        box(s, fx, y + 1.78, fw, 0.48, { fill: C.cream, line: C.cream, shadow: false, r: 0.05 });
        const longLbl = f.l.length > 3;
        txt(s, f.l, fx + 0.06, y + 1.79, fw - 0.12, 0.17, { size: longLbl ? 7 : 7.5, bold: true, color: C.goldDark, arabic: false });
        txt(s, f.ar, fx + 0.05, longLbl ? y + 1.93 : y + 1.83, fw - 0.1, longLbl ? 0.32 : 0.42, { fit: true, size: 15, min: 10, bold: true, color: C.navy, align: 'center' });
      });
    } else if (it.note) {
      mixedLine(s, it.note, x + 0.15, y + 1.98, cw - 0.3, 0.32, { size: 10, italic: true, color: C.goldDark });
    }
  });
}


// ------------------------------------------------------------------ letter formation: model, steps, tracing row
function trace(D, sp) {
  const s = frame(D, sp);
  const n = sp.items.length; const cols = sp.cols || (n <= 3 ? n : n === 4 ? 2 : n <= 6 ? 3 : 4);
  const rows = Math.ceil(n / cols); const gap = 0.18;
  const cw = (12.33 - gap * (cols - 1)) / cols; const top = 1.98; const avail = (sp.foot ? 4.5 : 4.92);
  const ch = (avail - gap * (rows - 1)) / rows;
  sp.items.forEach((it, i) => {
    const r = Math.floor(i / cols); const c = i % cols;
    const x = 12.83 - (c + 1) * cw - c * gap; const y = top + r * (ch + gap);
    box(s, x, y, cw, ch);
    const lw = Math.min(1.5, cw * 0.36);
    // model letter (right), name under it
    txt(s, it.ar, x + cw - lw - 0.1, y + 0.08, lw, ch * 0.5, { fit: true, size: 54, min: 28, bold: true, color: C.navy, align: 'center' });
    txt(s, it.name || '', x + cw - lw - 0.1, y + ch * 0.52, lw, 0.34, { fit: true, size: 15, min: 10, bold: true, color: C.teal, align: 'center' });
    // numbered steps (left)
    const sx = x + 0.15; const sw = cw - lw - 0.35;
    (it.steps || []).forEach((st, j) => {
      const sy = y + 0.14 + j * Math.min(0.46, (ch * 0.62) / Math.max(1, it.steps.length));
      circle(s, sx, sy + 0.02, 0.26, '6B4C9A', j + 1, { size: 9 });
      mixedLine(s, st, sx + 0.34, sy - 0.03, sw - 0.34, 0.4, { size: 10.5, color: C.ink });
    });
    // tracing row: baseline + pale copies
    const ty = y + ch - 0.62; const tw = cw - 0.3;
    s.addShape('line', { x: x + 0.15, y: ty + 0.44, w: tw, h: 0, line: { color: 'C9BFA8', width: 0.75, dashType: 'dash' } });
    const k = Math.max(3, Math.min(6, Math.floor(tw / 0.62)));
    for (let j = 0; j < k; j += 1) {
      const gx = x + 0.15 + tw - (j + 1) * (tw / k);
      txt(s, j < k - 2 ? it.ar : ' ', gx, ty - 0.08, tw / k, 0.58, { size: 26, bold: false, color: j < k - 2 ? 'D8CFBD' : C.ink, align: 'center', plain: true });
    }
  });
  if (sp.foot) mixedLine(s, sp.foot, 0.5, 6.55, 12.33, 0.34, { size: 11.5, bold: true, color: C.goldDark });
}

// ------------------------------------------------------------------ nationality / forms table
function formsTable(D, sp) {
  const s = frame(D, sp);
  const cols = sp.cols; // [{label, w}] listed right→left in reading order; last is english column on the left
  let x = 12.83; const pos = [];
  cols.forEach((c) => { x -= c.w; pos.push(x); });
  const hy = 1.98;
  s.addShape('rect', { x: 0.5, y: hy, w: 12.33, h: 0.42, fill: { color: C.navy }, line: { color: C.navy } });
  cols.forEach((c, i) => txt(s, c.label, pos[i] + 0.08, hy, c.w - 0.16, 0.42, { size: 11, bold: true, color: C.white, align: 'center', arabic: false }));
  const rows = sp.rows; const avail = 6.9 - (hy + 0.5) - (sp.foot ? 0.45 : 0);
  const rh = Math.min(0.8, (avail - 0.06 * (rows.length - 1)) / rows.length);
  rows.forEach((r, i) => {
    const y = hy + 0.5 + i * (rh + 0.06);
    box(s, 0.5, y, 12.33, rh, { fill: i % 2 ? C.cream : C.white, shadow: false, r: 0.05 });
    r.cells.forEach((cell, j) => {
      const c = cols[j];
      if (cell && typeof cell === 'object') {
        txt(s, cell.ar, pos[j] + 0.1, y + 0.02, c.w - 0.2, rh * 0.62, { fit: true, size: c.size || 20, min: 12, bold: true, color: C.navy, align: 'center' });
        txt(s, cell.sub, pos[j] + 0.05, y + rh * 0.6, c.w - 0.1, rh * 0.38, { fit: true, size: 9.5, min: 7.5, italic: true, color: C.slate, align: 'center', arabic: false });
      } else if (isArabic(cell)) {
        txt(s, cell, pos[j] + 0.1, y, c.w - 0.2, rh, { fit: true, size: c.size || 20, min: 12, bold: true, color: C.navy, align: 'center' });
      } else {
        mixedLine(s, cell || '', pos[j] + 0.12, y, c.w - 0.2, rh, { size: 11, color: C.slate, italic: !!c.italic });
      }
    });
    if (r.core) pill(s, 12.83 - 0.7, y + 0.05, 0.6, 0.2, C.core, 'CORE', { size: 6.5 });
  });
  if (sp.foot) mixedLine(s, sp.foot, 0.5, 6.5, 12.33, 0.4, { size: 11.5, bold: true, color: C.navy });
}

// ------------------------------------------------------------------ code word (grammar part 1)
function codeWord(D, sp) {
  const s = frame(D, sp);
  box(s, 0.5, 2.0, 12.33, 2.55);
  txt(s, sp.word, 1.5, 2.0, 10.33, 1.72, { fit: true, size: 72, min: 40, bold: true, align: 'center', color: C.navy });
  txt(s, sp.tr, 0.5, 4.02, 12.33, 0.4, { size: 15, italic: true, color: C.slate, align: 'center', arabic: false });
  const n = sp.parts.length; const gap = 0.2; const bw = (12.33 - gap * (n - 1)) / n;
  sp.parts.forEach((p, i) => {
    const x = 12.83 - (i + 1) * bw - i * gap; const col = CODE[p.code].color;
    box(s, x, 4.78, bw, 1.95, { line: col, lw: 1.5 });
    txt(s, String(i + 1), x + 0.2, 4.9, 0.6, 0.6, { font: 'Cambria', size: 30, bold: true, color: 'E1E4EA', arabic: false });
    txt(s, p.ar, x + 0.8, 4.88, bw - 0.95, 0.8, { fit: true, size: 34, min: 18, bold: true, color: col });
    txt(s, p.title, x + 0.2, 5.6, bw - 0.4, 0.34, { fit: true, size: 16, min: 11, bold: true, color: col, arabic: false });
    txt(s, p.text, x + 0.2, 5.95, bw - 0.4, 0.72, { fit: true, size: 11.5, min: 9, color: C.slate, valign: 'top', arabic: false });
  });
}

// ------------------------------------------------------------------ people table (one word, many people)
function peopleTable(D, sp) {
  const s = frame(D, sp);
  s.addShape('rect', { x: 0.5, y: 1.98, w: 12.33, h: 0.46, fill: { color: C.navy }, line: { color: C.navy } });
  txt(s, sp.heads[0], 10.58, 1.98, 2.1, 0.46, { size: 12, bold: true, color: C.white, align: 'center', arabic: false });
  txt(s, sp.heads[1], 7.18, 1.98, 3.1, 0.46, { size: 12, bold: true, color: C.white, align: 'center', arabic: false });
  txt(s, sp.heads[2], 0.65, 1.98, 6.23, 0.46, { size: 12, bold: true, color: C.white, align: 'center', arabic: false });
  const n = sp.rows.length; const rh = Math.min(0.8, (4.46 - 0.1 * (n - 1)) / n);
  sp.rows.forEach((r, i) => {
    const y = 2.54 + i * (rh + 0.1);
    box(s, 0.5, y, 12.33, rh, { fill: i % 2 ? C.cream : C.white, shadow: false, r: 0.05 });
    txt(s, r.who, 11.03, y, 1.65, rh, { fit: true, size: 24, min: 14, bold: true, color: CODE.w.color, align: 'center' });
    txt(s, r.whoEn, 10.4, y, 0.8, rh, { fit: true, size: 11.5, min: 8, italic: true, color: C.slate, arabic: false });
    txt(s, r.word, 7.18, y, 3.1, rh, { fit: true, size: 30, min: 16, bold: true, align: 'center', color: C.navy });
    txt(s, r.sentence, 0.65, y + 0.02, 6.23, rh * 0.6, { fit: true, size: 20, min: 12, bold: false, color: C.ink });
    txt(s, r.en, 0.65, y + rh * 0.58, 6.23, rh * 0.38, { fit: true, size: 11, min: 8, italic: true, color: C.slate, align: 'right', arabic: false });
  });
}

// ------------------------------------------------------------------ rule cards + common error
function ruleCards(D, sp) {
  const s = frame(D, sp);
  const n = sp.cards.length; const gap = 0.2; const bw = (12.33 - gap * (n - 1)) / n;
  const bh = sp.error ? 3.3 : 4.72;
  sp.cards.forEach((c, i) => {
    const x = 12.83 - (i + 1) * bw - i * gap;
    box(s, x, 1.98, bw, bh);
    const chipW = Math.min(bw * 0.6, 0.3 + c.chip.length * 0.075);
    pill(s, x + 0.15, 2.1, chipW, 0.3, c.color || C.navy, c.chip, { size: 8.5 });
    if (c.head) txt(s, c.head, x + 0.2 + chipW, 2.05, bw - 0.35 - chipW, 0.4, { fit: true, size: 16, min: 10, bold: true, color: C.goldDark });
    txt(s, c.big, x + 0.15, 2.5, bw - 0.3, 1.2, { fit: true, size: 32, min: 16, bold: true, align: 'center', color: C.navy });
    txt(s, c.en, x + 0.15, 3.68, bw - 0.3, 0.45, { fit: true, size: 12, min: 9, italic: true, color: C.slate, align: 'center', arabic: false });
    if (c.clue) {
      const cy = 1.98 + bh - 1.0;
      box(s, x + 0.12, cy, bw - 0.24, 0.88, { fill: C.amberPale, line: C.amberPale, shadow: false, r: 0.05 });
      mixedLine(s, c.clue, x + 0.22, cy + 0.04, bw - 0.44, 0.8, { size: 11, color: C.ink });
    }
  });
  if (sp.error) {
    box(s, 0.5, 5.48, 12.33, 1.42, { fill: C.stretchPale, line: 'E3B4AE' });
    txt(s, 'COMMON ERROR', 0.75, 5.58, 3, 0.3, { size: 10, bold: true, color: C.stretch, cs: 2, arabic: false });
    txt(s, sp.error.text, 0.75, 5.9, 3.6, 0.9, { fit: true, size: 11.5, min: 9, color: C.ink, valign: 'top', arabic: false });
    sp.error.pairs.forEach((p, i) => {
      const x = 12.6 - (i + 1) * 4.05;
      txt(s, p[0], x + 2.35, 5.72, 1.8, 0.95, { fit: true, size: 26, min: 14, bold: true, color: C.navy, align: 'center' });
      txt(s, '→', x + 1.95, 5.72, 0.4, 0.95, { size: 20, color: C.slate, align: 'center', arabic: false });
      txt(s, p[1], x + 0.2, 5.72, 1.8, 0.95, { fit: true, size: 26, min: 14, bold: true, color: C.stretch, align: 'center' });
      s.addShape('line', { x: x + 0.35, y: 6.2, w: 1.5, h: 0, line: { color: C.stretch, width: 2 } });
    });
  }
}

// ------------------------------------------------------------------ formula columns (e.g. subject + place)
function formula(D, sp) {
  const s = frame(D, sp);
  const cols = sp.cols; const n = cols.length;
  const enW = 3.3; const gap = 0.12; const cw = (12.33 - enW - gap * n) / n;
  txt(s, 'English meaning', 0.5, 2.0, enW, 0.62, { size: 11, bold: true, color: C.slate, arabic: false });
  cols.forEach((c, i) => {
    const x = 12.83 - (i + 1) * cw - i * gap;
    s.addShape('roundRect', { x, y: 1.98, w: cw, h: 0.62, rectRadius: 0.06, fill: { color: c.color }, line: { color: c.color } });
    txt(s, c.ar, x, 1.96, cw, 0.44, { fit: true, size: 20, min: 12, bold: true, color: C.white, align: 'center' });
    txt(s, c.label, x, 2.36, cw, 0.22, { size: 9, italic: true, color: 'EEF1F6', align: 'center', arabic: false });
  });
  const rh = Math.min(0.9, ((sp.foot ? 3.72 : 4.2) - 0.12 * (sp.rows.length - 1)) / sp.rows.length);
  sp.rows.forEach((r, j) => {
    const y = 2.72 + j * (rh + 0.12);
    mixedLine(s, r.en, 0.5, y, enW - 0.1, rh, { size: 12, color: C.ink });
    r.cells.forEach((cell, i) => {
      const x = 12.83 - (i + 1) * cw - i * gap;
      box(s, x, y, cw, rh, { fill: cols[i].pale, line: cols[i].pale, shadow: false, r: 0.06 });
      txt(s, cell, x + 0.08, y, cw - 0.16, rh, { fit: true, size: 24, min: 12, bold: true, color: C.navy, align: 'center' });
    });
  });
  if (sp.foot) mixedLine(s, sp.foot, 0.5, 6.55, 12.33, 0.35, { size: 12, bold: true, color: C.goldDark });
}

// ------------------------------------------------------------------ rule rows with examples (FLEX)
function ruleRows(D, sp) {
  const s = frame(D, sp);
  const n = sp.rows.length; const rh = (4.92 - 0.14 * (n - 1)) / n;
  sp.rows.forEach((r, i) => {
    const y = 1.98 + i * (rh + 0.14);
    box(s, 0.5, y, 12.33, rh);
    txt(s, `${i + 1}. ${r.title}`, 0.7, y + 0.08, 3.9, rh * 0.5, { fit: true, size: 12.5, min: 9, bold: true, color: C.navy, arabic: false });
    mixedLine(s, r.formula, 0.7, y + rh * 0.52, 3.9, rh * 0.42, { size: 10.5, color: C.slate });
    txt(s, r.examples.join('   ·   '), 4.7, y + 0.04, 7.95, rh - 0.08, { fit: true, size: 20, min: 11, bold: true, color: C.ink });
  });
}

// ------------------------------------------------------------------ I Do (4 steps + copy box)
async function ido(D, sp) {
  const s = frame(D, sp);
  const n = sp.steps.length; const gap = 0.2; const bw = (12.33 - gap * (n - 1)) / n;
  sp.steps.forEach((st, i) => {
    const x = 12.83 - (i + 1) * bw - i * gap;
    box(s, x, 1.98, bw, 2.72);
    circle(s, x + bw - 0.56, 2.12, 0.42, C.purple, i + 1, { size: 14 });
    txt(s, st.head, x + 0.15, 2.1, bw - 0.8, 0.5, { fit: true, size: 12.5, min: 9.5, bold: true, color: C.purple, arabic: false });
    txt(s, st.ar, x + 0.12, 2.68, bw - 0.24, 1.0, { fit: true, size: 28, min: 14, bold: true, color: C.navy, align: 'center' });
    mixedLine(s, st.think, x + 0.15, 3.73, bw - 0.3, 0.88, { size: 11.5, color: C.ink });
    if (i < n - 1) txt(s, '←', x - 0.2, 3.03, 0.2, 0.4, { size: 14, color: C.slate, align: 'center', arabic: false });
  });
  box(s, 0.5, 4.9, 12.33, 2.0, { fill: C.purplePale, line: C.purpleLine });
  s.addImage({ data: L.templateIcon('image-19-1.png'), x: 0.75, y: 5.1, w: 0.5, h: 0.5 });
  txt(s, 'COPY THIS INTO YOUR BOOK', 1.4, 5.18, 4, 0.34, { size: 12, bold: true, color: C.purple, cs: 2, arabic: false });
  const legend = sp.legend || ['w', 'p', 'm', 'e', 'k'];
  legend.forEach((k, i) => {
    const lx = 12.58 - (legend.length - i) * 1.08;
    pill(s, lx, 5.18, 1.0, 0.26, CODE[k].color, (sp.legendLabels && sp.legendLabels[k]) || CODE[k].label, { size: 8, cs: 1 });
  });
  txt(s, sp.model, 0.75, 5.5, 11.83, 0.8, { fit: true, size: 26, min: 14, bold: true, color: C.navy });
  txt(s, sp.modelEn, 0.75, 6.3, 11.83, 0.4, { fit: true, size: 13, min: 9, italic: true, color: C.slate, align: 'right', arabic: false });
}

// ------------------------------------------------------------------ model sentences (numbered rows)
function models(D, sp) {
  const s = frame(D, sp);
  const n = sp.rows.length; const rh = (4.92 - 0.14 * (n - 1)) / n;
  sp.rows.forEach((r, i) => {
    const y = 1.98 + i * (rh + 0.14);
    box(s, 0.5, y, 12.33, rh);
    circle(s, 12.25, y + rh / 2 - 0.22, 0.44, C.navy, i + 1, { size: 13 });
    txt(s, r.ar, 5.0, y + 0.04, 7.1, rh - 0.08, { fit: true, size: 26, min: 14, bold: true, color: C.navy });
    s.addText([
      { text: r.en, options: { fontSize: 12.5, bold: true, color: C.ink, breakLine: true } },
      { text: r.tip || '', options: { fontSize: 10.5, italic: true, color: C.goldDark } },
    ], { x: 0.75, y: y + 0.05, w: 4.1, h: rh - 0.1, isTextBox: true, margin: 0, valign: 'middle', fontFace: 'Calibri' });
  });
}

// ------------------------------------------------------------------ sentence builder (+ answers)
function builder(D, sp) {
  const draw = (reveal) => {
    const s = frame(D, reveal ? { ...sp, ...sp.answerSlide } : sp);
    if (!reveal) {
      ['Column 1 · start here', 'Column 2', 'Column 3'].forEach((t, i) => txt(s, t, 10.04 - i * 2.795, 1.86, 2.64, 0.28, { size: 10, bold: true, color: STAGES.wedo.color, align: 'center', arabic: false }));
      sp.rows.forEach((r, i) => {
        const y = 2.2 + i * 1.51;
        box(s, 0.5, y, 12.33, 1.38);
        circle(s, 0.65, y + 0.15, 0.4, STAGES.wedo.color, i + 1, { size: 12 });
        txt(s, r.en, 1.15, y + 0.12, 3.1, 1.14, { fit: true, size: 14, min: 10, bold: true, color: C.navy, valign: 'top', arabic: false });
        r.cols.forEach((col, c) => {
          const x = 10.04 - c * 2.795;
          col.forEach((opt, j) => {
            const oy = y + 0.1 + j * 0.62;
            box(s, x, oy, 2.64, 0.56, { fill: C.icePale, line: C.blueLine, shadow: false, r: 0.06 });
            txt(s, 'AB'[j], x + 0.06, oy, 0.3, 0.56, { size: 10, bold: true, color: STAGES.wedo.color, arabic: false });
            txt(s, opt, x + 0.35, oy, 2.19, 0.56, { fit: true, size: 18, min: 10, bold: false, color: C.ink });
          });
        });
      });
    } else {
      sp.rows.forEach((r, i) => {
        const y = 1.98 + i * 1.62;
        box(s, 0.5, y, 12.33, 1.48, { fill: C.correctPale, line: '9CCFB0' });
        circle(s, 0.7, y + 0.15, 0.4, C.correct, i + 1, { size: 12 });
        const letters = r.key.map((k) => 'AB'[k]).join(' · ');
        txt(s, r.en, 1.25, y + 0.1, 3.6, 0.5, { fit: true, size: 13, min: 9.5, bold: true, color: C.navy, arabic: false });
        txt(s, `Columns = ${letters}`, 1.25, y + 0.6, 3.6, 0.28, { size: 10.5, bold: true, color: C.coreDark, arabic: false });
        if (r.why) txt(s, r.why, 1.25, y + 0.9, 3.6, 0.48, { fit: true, size: 10.5, min: 8, italic: true, color: C.slate, arabic: false });
        const full = r.cols.map((col, c) => col[r.key[c]]).join(' ');
        txt(s, r.full || full, 5.0, y + 0.1, 7.6, 1.28, { fit: true, size: 28, min: 14, bold: true, color: C.navy });
      });
    }
  };
  draw(false); draw(true);
}

// ------------------------------------------------------------------ sorter (+ answers)
function sorter(D, sp) {
  const colsN = sp.categories.length; const gap = 0.2; const cw = (12.33 - gap * (colsN - 1)) / colsN;
  const colX = (i) => 12.83 - (i + 1) * cw - i * gap;
  const s = frame(D, sp);
  const per = 4; const tw = (12.33 - 0.15 * (per - 1)) / per;
  sp.items.forEach((it, i) => {
    const r = Math.floor(i / per); const c = i % per;
    const x = 12.83 - (c + 1) * tw - c * 0.15; const y = 1.98 + r * 0.56;
    box(s, x, y, tw, 0.48, { fill: 'FFF4DC', line: 'E6C98A', r: 0.06 });
    txt(s, it.ar, x + 0.1, y, tw - 0.2, 0.48, { fit: true, size: 18, min: 11, bold: true, color: C.navy, align: 'center' });
  });
  const top = 1.98 + Math.ceil(sp.items.length / per) * 0.56 + 0.2;
  sp.categories.forEach((cat, i) => {
    const x = colX(i);
    box(s, x, top, cw, 6.9 - top, { fill: C.icePale, line: C.blueLine, shadow: false });
    pill(s, x + 0.15, top + 0.12, cw - 0.3, 0.34, STAGES.wedo.color, `${i + 1} · ${cat}`, { size: 9.5, cs: 0 });
  });
  const a = frame(D, { ...sp, ...sp.answerSlide });
  sp.categories.forEach((cat, i) => {
    const x = colX(i);
    box(a, x, 1.98, cw, 4.92, { fill: C.icePale, line: C.blueLine, shadow: false });
    pill(a, x + 0.15, 2.1, cw - 0.3, 0.34, STAGES.wedo.color, `${i + 1} · ${cat}`, { size: 9.5, cs: 0 });
    const mine = sp.items.filter((it) => it.cat === i);
    const most = Math.max(...sp.categories.map((_, ci) => sp.items.filter((it) => it.cat === ci).length));
    const pitch = Math.min(0.56, 4.2 / Math.max(1, most)); const bh = pitch - 0.08;
    mine.forEach((it, j) => {
      const y = 2.6 + j * pitch;
      box(a, x + 0.15, y, cw - 0.3, bh, { fill: 'FFF4DC', line: 'E6C98A', r: 0.06, shadow: false });
      txt(a, it.ar, x + 0.25, y, cw - 0.5, bh, { fit: true, size: 18, min: 11, bold: true, color: C.navy, align: 'center' });
    });
  });
}

// ------------------------------------------------------------------ spot and fix (+ corrections)
function repair(D, sp) {
  const s = frame(D, sp);
  sp.items.forEach((it, i) => {
    const y = 1.98 + i * 1.58;
    box(s, 0.5, y, 12.33, 1.42, { fill: C.stretchPale, line: 'E3B4AE' });
    circle(s, 12.23, y + 0.48, 0.44, C.stretch, i + 1, { size: 13 });
    txt(s, it.wrong, 4.4, y + 0.1, 7.63, 1.2, { fit: true, size: 30, min: 14, bold: true, color: C.stretch });
    txt(s, it.hint || 'What is wrong? How do you fix it?', 0.8, y + 0.1, 3.5, 1.2, { fit: true, size: 13, min: 9.5, italic: true, color: C.slate, arabic: false });
  });
  const a = frame(D, { ...sp, ...sp.answerSlide });
  sp.items.forEach((it, i) => {
    const y = 1.98 + i * 1.58;
    box(a, 0.5, y, 12.33, 1.42, { fill: C.correctPale, line: '9CCFB0' });
    txt(a, it.wrong, 9.3, y + 0.1, 3.35, 1.2, { fit: true, size: 18, min: 10, color: C.stretch });
    a.addShape('line', { x: 9.45, y: y + 0.71, w: 3.1, h: 0, line: { color: C.stretch, width: 1.25 } });
    txt(a, '←', 8.9, y + 0.1, 0.4, 1.2, { size: 20, color: C.slate, align: 'center', arabic: false });
    txt(a, it.right, 3.9, y + 0.1, 4.95, 1.2, { fit: true, size: 24, min: 12, bold: true, color: C.coreDark });
    mixedLine(a, it.why, 0.75, y + 0.1, 3.05, 1.2, { size: 11.5, bold: true, color: C.navy });
  });
}

// ------------------------------------------------------------------ long Arabic text (+ optional glossary)
function passage(D, sp) {
  const s = frame(D, sp);
  const gw = sp.glossary ? 3.3 : 0;
  box(s, 0.5, 1.98, 12.33 - gw - (gw ? 0.2 : 0), 4.92);
  const tw = 12.33 - gw - (gw ? 0.2 : 0) - 0.5;
  if (sp.docLines) {
    // a document (message, form): one row per line, first line as its heading
    const n = sp.docLines.length; const rh = 4.6 / n;
    sp.docLines.forEach((ln, i) => {
      const y = 2.12 + i * rh;
      if (i) s.addShape('line', { x: 0.75, y, w: tw, h: 0, line: { color: 'E4DCCB', width: 0.75, dashType: 'dash' } });
      txt(s, ln, 0.75, y + 0.02, tw, rh - 0.04, { fit: true, size: i ? 20 : 22, min: 12, bold: !i, color: i ? C.ink : C.navy, arFactor: 0.9 });
    });
  } else txt(s, sp.text, 0.75, 2.15, tw, 4.6, { fit: true, size: 26, min: 13, bold: false, color: C.ink, valign: 'top', arFactor: 0.9 });
  if (sp.glossary) {
    const x = 12.83 - gw;
    box(s, x, 1.98, gw, 4.92, { fill: C.corePale, line: '9CCFB0' });
    txt(s, sp.glossaryHead || 'KEY WORDS', x + 0.2, 2.06, gw - 0.4, 0.32, { size: 10, bold: true, color: C.coreDark, cs: 2, arabic: false });
    const n = sp.glossary.length; const rh = Math.min(0.55, 4.4 / n);
    sp.glossary.forEach((g, i) => {
      const y = 2.42 + i * rh;
      txt(s, g[0], x + gw * 0.46, y, gw * 0.5, rh, { fit: true, size: 16, min: 10, bold: true, color: C.navy });
      txt(s, g[1], x + 0.15, y, gw * 0.46, rh, { fit: true, size: 10.5, min: 8, color: C.ink, arabic: false });
    });
  }
}

// ------------------------------------------------------------------ glossed text: Arabic line + English line
function glossed(D, sp) {
  const s = frame(D, sp);
  const n = sp.lines.length; const rh = (4.92 - 0.08 * (n - 1)) / n;
  sp.lines.forEach((ln, i) => {
    const y = 1.98 + i * (rh + 0.08);
    box(s, 0.5, y, 12.33, rh, { fill: i % 2 ? C.cream : C.white, shadow: false, r: 0.05 });
    txt(s, ln[0], 5.4, y + 0.02, 7.3, rh - 0.04, { fit: true, size: 20, min: 11, bold: true, color: C.navy });
    txt(s, ln[1], 0.7, y + 0.02, 4.55, rh - 0.04, { fit: true, size: 12.5, min: 8.5, color: C.ink, arabic: false });
  });
}

// ------------------------------------------------------------------ speaking
function speaking(D, sp) {
  const s = frame(D, sp);
  const seq = [['●', 'Think', '10 seconds'], ['↔', 'Rehearse', 'muted · 45 s'], ['◎', 'Pairs share', 'open mic'], ['+ ?', 'Build / ask', 'in the chat'], ['↺', 'Summarise', 'he / she …']];
  seq.forEach(([sym, h, t], i) => {
    const x = 0.5 + i * 2.485;
    box(s, x, 1.98, 2.39, 0.62, { fill: C.icePale, line: C.blueLine, shadow: false });
    txt(s, sym, x + 0.06, 1.98, 0.42, 0.62, { size: 18, bold: true, color: C.navy, font: 'Arial', align: 'center', arabic: false });
    s.addText([
      { text: h, options: { fontSize: 10.5, bold: true, color: C.navy, breakLine: true } },
      { text: t, options: { fontSize: 9.5, color: C.slate } },
    ], { x: x + 0.5, y: 1.98, w: 1.84, h: 0.62, isTextBox: true, margin: 0, valign: 'middle', fontFace: 'Calibri' });
  });
  // prompts (right)
  sp.prompts.forEach((p, i) => {
    const y = 2.72 + i * 0.68; const R = ROUTES[p.route];
    box(s, 5.2, y, 7.63, 0.62);
    pill(s, 5.3, y + 0.17, 1.05, 0.28, R.color, R.label, { size: 8 });
    txt(s, p.ar, 6.45, y, 6.23, 0.62, { fit: true, size: 18, min: 11, bold: true, color: C.navy });
  });
  // stems (left)
  box(s, 0.5, 2.72, 4.5, 2.9, { fill: C.blueBox, line: C.blueLine });
  txt(s, 'SENTENCE STEMS', 0.7, 2.78, 3, 0.3, { size: 10, bold: true, color: C.navy, cs: 2, arabic: false });
  sp.stems.forEach((st, i) => {
    const y = 3.12 + i * 0.61;
    const R = st.route === 'sum' ? { color: C.navy, label: '↺ SUM UP' } : ROUTES[st.route];
    pill(s, 0.7, y + 0.17, 1.15, 0.28, R.color, R.label, { size: 8 });
    txt(s, st.ar.replace(/_{4,}/g, '___'), 1.95, y, 2.95, 0.61, { fit: true, size: 16, min: 10, color: st.route === 'core' ? CODE.w.color : C.ink });
  });
  // model
  box(s, 0.5, 5.74, 12.33, 1.16, { fill: 'EAF3EF', line: 'A8CDB9' });
  txt(s, 'MODEL (WEBSITE)', 0.7, 5.78, 2.2, 0.28, { size: 9.5, bold: true, color: C.coreDark, cs: 1, arabic: false });
  sp.model.forEach((m, i) => {
    const y = 6.04 + i * 0.4;
    circle(s, 12.33, y + 0.04, 0.32, C.coreDark, m.who, { size: 10 });
    txt(s, m.ar, 3.1, y, 9.13, 0.4, { fit: true, size: 15.5, min: 9.5, color: C.ink, bold: false });
    txt(s, m.en, 0.7, y, 2.35, 0.4, { fit: true, size: 9.5, min: 7.5, italic: true, color: C.slate, arabic: false });
  });
}

// ------------------------------------------------------------------ writing routes
function routes(D, sp) {
  const s = frame(D, sp);
  ['core', 'develop', 'stretch'].forEach((k, i) => {
    const R = ROUTES[k]; const r = sp[k]; const x = 0.5 + i * 4.18;
    box(s, x, 1.98, 3.98, 4.72, { fill: R.pale, line: R.line });
    pill(s, x + 0.2, 2.12, 1.3, 0.34, R.color, R.label, { size: 10 });
    txt(s, R.ar, x + 2.18, 2.06, 1.6, 0.46, { size: 18, bold: true, color: R.color });
    txt(s, r.amount, x + 0.2, 2.6, 3.58, 0.5, { font: 'Cambria', fit: true, size: 22, min: 14, bold: true, color: R.color, arabic: false });
    mixedLine(s, r.task, x + 0.2, 3.15, 3.58, 1.3, { size: 14, bold: true, color: C.ink });
    box(s, x + 0.2, 4.55, 3.58, 1.95, { fill: C.white, line: C.white, shadow: false });
    s.addText([
      { text: 'HOW', options: { fontSize: 9, bold: true, color: R.color, charSpacing: 2, breakLine: true } },
      { text: r.how, options: { fontSize: 11.5, color: C.ink } },
    ], { x: x + 0.3, y: 4.62, w: 3.38, h: 1.8, isTextBox: true, margin: 0, valign: 'top', fontFace: 'Calibri' });
  });
}

// ------------------------------------------------------------------ frames + word bank (Develop left, Core right)
function frames(D, sp) {
  const s = frame(D, sp);
  const draw = (k, x, list) => {
    const R = ROUTES[k];
    box(s, x, 1.98, 6.06, 3.9, { fill: R.pale, line: R.line });
    pill(s, x + (k === 'core' ? 4.76 : 0.15), 2.08, 1.15, 0.3, R.color, R.label, { size: 8.5 });
    const rh = Math.min(0.62, 3.3 / list.length);
    list.forEach((f, i) => {
      const y = 2.46 + i * rh;
      txt(s, f.ar, x + 2.2, y, 3.7, rh * 0.95, { fit: true, size: 18, min: 10, bold: true, color: C.navy });
      mixedLine(s, f.en, x + 0.15, y, 2.0, rh * 0.95, { size: 10.5, italic: true, color: C.slate });
    });
  };
  draw('develop', 0.5, sp.develop);
  draw('core', 6.77, sp.core);
  box(s, 0.5, 6.02, 12.33, 0.88, { fill: C.white });
  txt(s, 'WORD BANK', 0.7, 6.06, 2, 0.26, { size: 9.5, bold: true, color: C.goldDark, cs: 2, arabic: false });
  txt(s, sp.bank.join('  ·  '), 0.7, 6.3, 11.93, 0.56, { fit: true, size: 16, min: 10, bold: true, color: C.navy });
}

// ------------------------------------------------------------------ stretch task + phrase bank
function stretchTask(D, sp) {
  const s = frame(D, sp);
  box(s, 0.5, 1.98, 6.1, 4.92, { fill: C.stretchPale, line: C.stretch });
  pill(s, 0.7, 2.12, 1.3, 0.32, C.stretch, 'STRETCH', { size: 9.5 });
  mixedLine(s, sp.task, 0.7, 2.55, 5.7, 1.0, { size: 13.5, bold: true, color: C.ink });
  const n = sp.checklist.length; const rh = Math.min(0.58, 3.1 / n);
  sp.checklist.forEach((c, i) => mixedLine(s, '☐  ' + c, 0.75, 3.62 + i * rh, 5.7, rh, { size: 12, color: C.ink }));
  box(s, 6.8, 1.98, 6.03, 4.92, { fill: C.white });
  txt(s, sp.bankHead || 'PHRASE BANK — FROM THE WEBSITE TEXTS', 7.0, 2.08, 5.6, 0.3, { size: 9.5, bold: true, color: C.goldDark, cs: 1, arabic: false });
  const m = sp.phrases.length; const ph = Math.min(0.72, 4.35 / m);
  sp.phrases.forEach((p, i) => {
    const y = 2.44 + i * ph;
    txt(s, p[0], 9.2, y, 3.45, ph * 0.62, { fit: true, size: 18, min: 10, bold: true, color: C.navy });
    txt(s, p[1], 7.0, y + ph * 0.5, 5.65, ph * 0.42, { fit: true, size: 10.5, min: 8, italic: true, color: C.slate, align: 'right', arabic: false });
  });
}

// ------------------------------------------------------------------ model answer
function modelAnswer(D, sp) {
  const s = frame(D, sp);
  const h = sp.en ? 3.55 : 4.3;
  box(s, 0.5, 1.98, 12.33, h);
  txt(s, sp.text, 0.75, 2.12, 11.83, h - 0.28, { fit: true, size: 26, min: 13, bold: false, color: C.ink, valign: 'middle', arFactor: 0.92 });
  if (sp.en) {
    box(s, 0.5, 1.98 + h + 0.12, 12.33, 1.12, { fill: C.cream, line: C.cream, shadow: false });
    txt(s, sp.en, 0.7, 1.98 + h + 0.16, 11.93, 1.04, { fit: true, size: 11.5, min: 8, italic: true, color: C.slate, valign: 'top', arabic: false });
  }
  txt(s, 'FIND IN THE MODEL:', 0.5, 6.62, 2.4, 0.28, { size: 9.5, bold: true, color: C.goldDark, cs: 2, arabic: false });
  const cols = [CODE.w.color, C.navy, CODE.p.color, CODE.m.color];
  sp.find.forEach((f, i) => pill(s, 2.95 + i * 2.5, 6.6, 2.35, 0.3, cols[i % 4], f, { size: 9.5, cs: 0 }));
}

// ------------------------------------------------------------------ self check
function selfCheck(D, sp) {
  const s = frame(D, sp);
  const pitch = Math.min(1.02, 4.92 / sp.items.length); const bh = pitch - 0.14;
  sp.items.forEach((it, i) => {
    const y = 1.98 + i * pitch; const R = ROUTES[it.route];
    box(s, 0.5, y, 8.1, bh);
    s.addShape('rect', { x: 0.75, y: y + bh / 2 - 0.12, w: 0.24, h: 0.24, fill: { color: C.white }, line: { color: R.color, width: 1.5 } });
    mixedLine(s, it.text, 1.2, y, 5.9, bh, { size: 13, color: C.ink });
    pill(s, 7.2, y + bh / 2 - 0.14, 1.2, 0.28, R.color, R.label, { size: 8 });
  });
  box(s, 8.85, 1.98, 3.98, 2.28, { fill: C.corePale, line: '9CCFB0' });
  s.addText([{ text: 'WWW', options: { fontSize: 18, bold: true, color: C.core, breakLine: true } }, { text: 'What went well? One thing you did accurately.', options: { fontSize: 12, color: C.ink } }], { x: 9.05, y: 2.1, w: 3.58, h: 2.0, isTextBox: true, margin: 0, valign: 'middle', fontFace: 'Calibri' });
  box(s, 8.85, 4.42, 3.98, 2.28, { fill: C.amberPale, line: 'E8D49A' });
  s.addText([{ text: 'EBI', options: { fontSize: 18, bold: true, color: C.develop, breakLine: true } }, { text: 'Even better if… One thing you will fix or add.', options: { fontSize: 12, color: C.ink } }], { x: 9.05, y: 4.54, w: 3.58, h: 2.0, isTextBox: true, margin: 0, valign: 'middle', fontFace: 'Calibri' });
}

// ------------------------------------------------------------------ preparation (flipped learning)
function prep(D, sp) {
  const s = frame(D, sp);
  box(s, 0.5, 1.98, 5.9, 4.92, { fill: C.stretchPale, line: 'E3B4AE' });
  s.addShape('ellipse', { x: 0.7, y: 2.12, w: 0.52, h: 0.52, fill: { color: 'C45A3C' }, line: { color: 'C45A3C' } });
  s.addImage({ data: L.templateIcon('image-43-1.png'), x: 0.8, y: 2.22, w: 0.32, h: 0.32 });
  s.addText([{ text: `LEARN THESE ${sp.words.length} WORDS`, options: { fontSize: 11, bold: true, color: 'C45A3C', charSpacing: 2, breakLine: true } }, { text: `for ${sp.next}`, options: { fontSize: 10, color: C.slate } }], { x: 1.32, y: 2.1, w: 4.9, h: 0.56, isTextBox: true, margin: 0, valign: 'middle', fontFace: 'Calibri' });
  sp.words.forEach((w, i) => {
    const y = 2.8 + i * 0.5;
    txt(s, w[0], 3.3, y, 2.9, 0.48, { fit: true, size: 20, min: 12, bold: true, color: C.navy });
    s.addText([{ text: w[1], options: { fontSize: 12, bold: true, color: C.ink } }, { text: w[2] ? `  ${w[2]}` : '', options: { fontSize: 10, italic: true, color: C.slate } }], { x: 0.75, y, w: 2.55, h: 0.48, isTextBox: true, margin: 0, valign: 'middle', fontFace: 'Calibri' });
  });
  const qy = 2.85 + sp.words.length * 0.5;
  txt(s, 'AND ANSWER ONE QUESTION', 0.75, qy, 3, 0.26, { size: 9, bold: true, color: 'C45A3C', cs: 2, arabic: false });
  txt(s, sp.questionEn, 0.75, qy + 0.26, 2.4, 6.75 - qy - 0.3, { fit: true, size: 10.5, min: 8, color: C.ink, valign: 'top', arabic: false });
  txt(s, sp.questionAr, 3.2, qy + 0.2, 3.0, 6.75 - qy - 0.25, { fit: true, size: 17, min: 10, bold: true, color: C.navy });
  txt(s, 'HOMEWORK — CHOOSE YOUR ROUTE', 6.7, 2.0, 6, 0.3, { size: 10, bold: true, color: C.navy, cs: 2, arabic: false });
  ['core', 'develop', 'stretch'].forEach((k, i) => {
    const R = ROUTES[k]; const y = 2.4 + i * 1.5;
    box(s, 6.7, y, 6.13, 1.36, { fill: R.pale, line: R.line });
    pill(s, 6.9, y + 0.14, 1.15, 0.3, R.color, R.label, { size: 8.5 });
    mixedLine(s, sp.homework[k], 6.9, y + 0.5, 5.75, 0.8, { size: 12, color: C.ink });
  });
}

// ------------------------------------------------------------------ close
function close(D, sp) {
  const m = D.meta;
  const s = D.pres.addSlide();
  s.background = { color: C.navyDeep };
  s.addShape('ellipse', { x: 8.6, y: 1.2, w: 6.4, h: 6.4, fill: { color: C.navyCircle }, line: { color: C.navyCircle } });
  s.addShape('ellipse', { x: 10.25, y: 2.85, w: 1.9, h: 1.9, fill: { color: C.gold }, line: { color: C.gold } });
  s.addImage({ data: L.templateIcon('image-44-1.png'), x: 10.62, y: 3.22, w: 1.16, h: 1.16 });
  txt(s, `${m.code} COMPLETE`, 0.5, 1.4, 6, 0.3, { size: 11, bold: true, color: C.gold, cs: 3, arabic: false });
  txt(s, 'أَحْسَنْتُمْ! إِلَى اللِّقَاءِ', 0.5, 1.85, 8, 1.0, { size: 40, bold: true, color: C.white, align: 'left' });
  txt(s, 'Well done — see you next lesson.', 0.5, 2.85, 8, 0.45, { size: 16, italic: true, color: 'C6D2E6', arabic: false });
  txt(s, 'NEXT LESSON', 0.5, 3.9, 6, 0.3, { size: 11, bold: true, color: C.gold, cs: 3, arabic: false });
  txt(s, sp.next, 0.5, 4.25, 8, 0.6, { font: 'Cambria', fit: true, size: 28, min: 16, bold: true, color: C.white, arabic: false });
  txt(s, sp.nextAr, 0.5, 4.85, 8, 0.6, { fit: true, size: 24, min: 14, bold: true, color: C.gold, align: 'left' });
  txt(s, sp.remember, 0.5, 5.8, 8, 0.4, { size: 13, bold: true, color: C.white, arabic: false });
  if (sp.notes) s.addNotes(sp.notes);
  D.slides.push(s);
}

module.exports = {
  frame, mcq, title, welcome, journey, objectives, keywords, vocab, formsTable, codeWord, peopleTable, ruleCards,
  trace, formula, ruleRows, ido, models, builder, sorter, repair, passage, glossed, speaking, routes, frames, stretchTask,
  modelAnswer, selfCheck, prep, close,
};

// ------------------------------------------------------------------ picture match (website lesson game, with icons)
async function picMatch(D, sp) {
  const n = sp.items.length; const gap = 0.2; const cw = (12.33 - gap * (n - 1)) / n;
  const order = sp.order || sp.items.map((_, i) => (i + 1) % n); // sentence display order (letters)
  const letterOf = (i) => 'ABC'[order.indexOf(i)];
  const scene = async (s, it, i, x, y, h) => {
    box(s, x, y, cw, h, { fill: C.white });
    circle(s, x + 0.14, y + 0.14, 0.4, C.navy, i + 1, { size: 12 });
    const k = it.icons.length; const iw = 0.95; const tot = k * iw + (k - 1) * 0.35;
    for (let j = 0; j < k; j++) {
      const [set, name, col] = it.icons[j];
      const ix = x + (cw - tot) / 2 + j * (iw + 0.35);
      s.addShape('ellipse', { x: ix - 0.08, y: y + 0.28, w: iw + 0.16, h: iw + 0.16, fill: { color: 'F4F1EA' }, line: { color: 'F4F1EA' } });
      s.addImage({ data: await L.icon(set, name, col || C.navy), x: ix + 0.12, y: y + 0.48, w: iw - 0.24, h: iw - 0.24 });
      if (j < k - 1 && it.link) txt(s, it.link, ix + iw + 0.02, y + 0.5, 0.31, 0.5, { size: 16, bold: true, color: C.slate, align: 'center', arabic: false });
    }
    if (it.label) txt(s, it.label, x + 0.15, y + 1.5, cw - 0.3, 0.32, { fit: true, size: 11, min: 8.5, italic: true, color: C.slate, align: 'center', arabic: false });
  };
  const s = frame(D, sp);
  for (let i = 0; i < n; i++) await scene(s, sp.items[i], i, 0.5 + (n - 1 - i) * (cw + gap), 1.98, 1.9);
  order.forEach((idx, j) => {
    const y = 4.08 + j * 0.62;
    box(s, 0.5, y, 12.33, 0.54, { fill: C.icePale, line: C.blueLine, shadow: false, r: 0.06 });
    circle(s, 12.3, y + 0.11, 0.32, STAGES.wedo.color, 'ABC'[j], { size: 10 });
    txt(s, sp.items[idx].ar, 0.8, y, 11.35, 0.54, { fit: true, size: 20, min: 12, bold: true, color: C.navy });
  });
  txt(s, sp.task || 'Match each picture to a sentence. Type in the chat: 1_  2_  3_', 0.5, 5.98, 12.33, 0.4, { size: 12.5, bold: true, color: STAGES.wedo.color, arabic: false });
  txt(s, sp.hint || 'Core: find ONE key word you know in each sentence first.', 0.5, 6.4, 12.33, 0.4, { size: 11.5, italic: true, color: C.slate, arabic: false });
  const a = frame(D, { ...sp, ...sp.answerSlide });
  for (let i = 0; i < n; i++) {
    const x = 0.5 + (n - 1 - i) * (cw + gap);
    await scene(a, sp.items[i], i, x, 1.98, 1.9);
    box(a, x, 4.02, cw, 2.88, { fill: C.correctPale, line: '9CCFB0' });
    circle(a, x + cw - 0.52, 4.14, 0.36, C.correct, letterOf(i), { size: 11 });
    txt(a, sp.items[i].ar, x + 0.15, 4.55, cw - 0.3, 1.25, { fit: true, size: 22, min: 12, bold: true, color: C.navy, align: 'center' });
    txt(a, sp.items[i].en, x + 0.15, 5.85, cw - 0.3, 0.9, { fit: true, size: 12, min: 9, italic: true, color: C.slate, align: 'center', valign: 'top', arabic: false });
  }
}
module.exports.picMatch = picMatch;
