'use strict';
/*
 * Editable Word (.docx) versions of the Final Revision student handouts (same content as handouts.js):
 * FR-L05 / FR-L06 speaking booklets and writing papers, the exam-day survival sheet and the marking grids.
 * Arabic runs are right-to-left Amiri (embedded in each file); English uses Calibri / Cambria like the decks.
 * Usage: node handouts-docx.js      → Final_Revision/Student_Handouts/Word/*.docx
 */
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, Header, AlignmentType, WidthType, BorderStyle,
  ShadingType, VerticalAlign, LevelFormat, TabStopType, PageBreak, LineRuleType, CharacterSet, TableLayoutType,
} = require('docx');

const OUT = path.join(__dirname, '..', 'Final_Revision', 'Student_Handouts', 'Word');
const AMIRI = '/usr/share/fonts/opentype/fonts-hosny-amiri/Amiri-Regular.ttf';
const C = { navy: '1B3B6F', gold: '8A6D1E', goldLine: 'D4AF37', ink: '1F2A3A', muted: '5B6577', line: 'D8D0BF', cream: 'F4F1EA',
  core: '2E7D57', develop: 'D9861A', stretch: 'C0392B', www: 'E6F2EC', ebi: 'FFF4E2', rule: 'B9C0CC' };
const W = 10206; // A4 width 11906 minus 2 × 850 margins (DXA)
const LEVEL = { Core: 'core', 'Core+': 'core', Develop: 'develop', Stretch: 'stretch' };

// ───────── runs and paragraphs
const en = (text, o = {}) => new TextRun({ text, bold: o.b, italics: o.i, underline: o.u ? {} : undefined, size: Math.round((o.sz || 10.5) * 2),
  color: o.c || C.ink, font: o.f || 'Calibri', shading: o.fill ? { type: ShadingType.CLEAR, fill: o.fill, color: 'auto' } : undefined });
const arR = (text, o = {}) => new TextRun({ text, rightToLeft: true, bold: o.b, boldComplexScript: o.b, size: Math.round((o.sz || 14) * 2),
  sizeComplexScript: Math.round((o.sz || 14) * 2), color: o.c || C.ink, font: { ascii: 'Amiri', hAnsi: 'Amiri', cs: 'Amiri', eastAsia: 'Amiri' },
  language: { bidirectional: 'ar-SA' }, shading: o.fill ? { type: ShadingType.CLEAR, fill: o.fill, color: 'auto' } : undefined });
const sp = (before = 0, after = 60) => ({ before, after });
const P = (children, o = {}) => new Paragraph({ children: [].concat(children), alignment: o.align, spacing: o.spacing || sp(o.before || 0, o.after ?? 60),
  numbering: o.bullet ? { reference: o.bullet, level: 0 } : undefined, border: o.border, keepNext: o.keepNext, tabStops: o.tabs });
const arP = (text, o = {}) => new Paragraph({ bidirectional: true, alignment: o.center ? AlignmentType.CENTER : AlignmentType.START,
  spacing: o.spacing || sp(o.before || 0, o.after ?? 40), children: [arR(text, o)] });
const chip = (level) => en(` ${level.toUpperCase()} `, { b: true, sz: 7.5, c: 'FFFFFF', fill: C[LEVEL[level] || 'core'] });
const box = '☐';
const tick = (o = {}) => new TextRun({ text: box + ' ', size: (o.sz || 11) * 2, font: 'Segoe UI Symbol', color: C.navy });
const brk = () => new Paragraph({ pageBreakBefore: true, spacing: { before: 0, after: 0 }, children: [] });
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const stripTitle = (t) => t.replace(/^Role play [A-D] — /, '');

// ───────── tables
const B = (style, color = C.line, size = 4) => ({ style, size, color });
const thin = { top: B(BorderStyle.SINGLE), bottom: B(BorderStyle.SINGLE), left: B(BorderStyle.SINGLE), right: B(BorderStyle.SINGLE) };
const NB = () => B(BorderStyle.NONE, 'FFFFFF', 0);
const none = { top: NB(), bottom: NB(), left: NB(), right: NB(), insideHorizontal: NB(), insideVertical: NB() };
const cell = (children, w, o = {}) => new TableCell({ width: { size: w, type: WidthType.DXA }, children: [].concat(children),
  shading: o.fill ? { type: ShadingType.CLEAR, fill: o.fill, color: 'auto' } : undefined, verticalAlign: o.v || VerticalAlign.TOP,
  margins: { top: o.pad ?? 70, bottom: o.pad ?? 70, left: 110, right: 110 }, borders: o.borders, columnSpan: o.span });
const table = (rows, widths, o = {}) => new Table({ width: { size: widths.reduce((a, b) => a + b, 0), type: WidthType.DXA }, columnWidths: widths,
  layout: TableLayoutType.FIXED, borders: o.borders || { ...thin, insideHorizontal: B(BorderStyle.SINGLE), insideVertical: B(BorderStyle.SINGLE) },
  rows: rows.map((r) => new TableRow({ children: r, cantSplit: true, tableHeader: false, height: o.rowH ? { value: o.rowH, rule: 'exact' } : undefined })) });
const th = (text, w, fill = C.navy) => cell(P(en(text, { b: true, sz: 9, c: 'FFFFFF' }), { after: 0 }), w, { fill, v: VerticalAlign.CENTER });
// a single-cell "box" with optional fill / dashed border (cut-out cards)
const panel = (children, o = {}) => {
  const b = o.dashed ? B(BorderStyle.DASHED, '9AA3B2', 8) : B(BorderStyle.SINGLE, o.borderColor || C.line, 6);
  return table([[cell(children, o.w || W, { fill: o.fill, pad: 110 })]], [o.w || W], { borders: { top: b, bottom: b, left: b, right: b } });
};
const gap = (after = 120) => P([], { after });
const numCell = (label, unx, w = 480) => cell(P(en(String(label), { b: true, sz: 10, c: 'FFFFFF' }), { align: AlignmentType.CENTER, after: 0 }), w,
  { fill: unx ? C.stretch : C.navy, v: VerticalAlign.CENTER });
const noLines = { ...none, insideHorizontal: B(BorderStyle.DOTTED, C.line, 4), insideVertical: B(BorderStyle.NONE, 'FFFFFF', 0) };

// ───────── page furniture
const header = (right) => new Header({ children: [
  P([arR(' م ', { b: true, sz: 13, c: C.goldLine, fill: C.navy }), en('  Al Madina Online School', { b: true, sz: 11.5, c: C.navy, f: 'Cambria' }),
    en('\t' + right, { sz: 8.5, c: C.muted })], { tabs: [{ type: TabStopType.RIGHT, position: W }], after: 0 }),
  P(en('ARABIC DEPARTMENT · MIFTAH ARABIC · IGCSE 0544', { b: true, sz: 7.5, c: C.gold }),
    { border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: C.goldLine, space: 4 } }, after: 120 }),
] });
const kicker = (t) => P(en(t.toUpperCase(), { b: true, sz: 7.5, c: C.gold }), { after: 40 });
const titleRow = (k, title, arTitle) => [kicker(k), table([[
  cell(P(en(title, { b: true, sz: 18, c: C.navy, f: 'Cambria' }), { after: 0 }), 6900, { pad: 0, v: VerticalAlign.BOTTOM }),
  cell(arP(arTitle, { b: true, sz: 18, c: C.gold, after: 0 }), W - 6900, { pad: 0, v: VerticalAlign.BOTTOM }),
]], [6900, W - 6900], { borders: none }), gap(100)];
const h2 = (parts) => P(parts.map((p) => (typeof p === 'string' ? en(p, { b: true, sz: 13.5, c: C.navy, f: 'Cambria' }) : p)), { before: 60, after: 80, keepNext: true });
const h3 = (t, extra = []) => P([en(t, { b: true, sz: 11.5, c: C.navy, f: 'Cambria' }), ...extra], { after: 60, keepNext: true });
const timer = (t) => en(`  ⏱ ${t} `, { b: true, sz: 9, c: C.navy });
const small = (t, o = {}) => en(t, { sz: 9, c: C.muted, ...o });
const nameLine = (label2 = 'Date') => P([en('Name: ', { b: true }), en('______________________________   ', { c: C.muted }), en(label2 + ': ', { b: true }), en('____________________', { c: C.muted })], { after: 140 });
// ruled writing lines (right-to-left, so typing in Word also runs right-to-left)
const lines = (n, w = W) => [table(Array.from({ length: n }, () => [new TableCell({ width: { size: w, type: WidthType.DXA },
  children: [new Paragraph({ bidirectional: true, spacing: { before: 0, after: 0 }, children: [arR(' ', { sz: 14 })] })] })]), [w],
  { borders: { top: NB(), left: NB(), right: NB(), bottom: B(BorderStyle.SINGLE, C.rule, 4), insideHorizontal: B(BorderStyle.SINGLE, C.rule, 4), insideVertical: NB() }, rowH: 500 })];
const numbering = { config: [
  { reference: 'bul', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 240 } } } }] },
  { reference: 'num', levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 280 } } } }] },
] };
const bul = (runs) => P(runs, { bullet: 'bul', after: 30 });

async function save(name, right, children) {
  const doc = new Document({
    creator: 'Al Madina Online School · Arabic Department', title: name.replace(/_/g, ' '),
    styles: { default: { document: { run: { font: 'Calibri', size: 21, color: C.ink } } } },
    numbering,
    fonts: process.env.NOFONT ? [] : [{ name: 'Amiri', data: fs.readFileSync(AMIRI), characterSet: CharacterSet.ARABIC }],
    sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1150, bottom: 800, left: 850, right: 850, header: 450 } } },
      headers: { default: header(right) }, children }],
  });
  fs.mkdirSync(OUT, { recursive: true });
  const out = path.join(OUT, name + '.docx');
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log(out);
}

// ───────── speaking booklet
function speaking(d, code) {
  const s = d.speak; const k = [];
  k.push(...titleRow(`${code} · Paper 3 practice · timed`, `Speaking mock: ${s.short}`, s.arShort));
  k.push(panel([h3('How this mock works (breakout rooms, pairs)'),
    bul([en('Partner A', { b: true }), en(' is the candidate and keeps only the '), en('candidate card', { b: true }), en('. '), en('Partner B', { b: true }), en(' is the examiner and keeps the '), en('examiner card', { b: true }), en('. Then swap.')]),
    bul([en('Preparation: ', { b: true }), en('1 minute per role play. Read all five tasks, underline the question words and plan the '), en('first words', { i: true }), en(' of each answer.')]),
    bul([en('Role play: ', { b: true }), en('about 2–3 minutes. The examiner reads each line exactly as written and waits for an answer.')]),
    bul([en('Task '), en(' ! ', { b: true, c: 'FFFFFF', fill: C.stretch }), en(' is the '), en('unexpected question', { b: true }), en('. It is '), en('not', { u: true }), en(' printed on your card: listen carefully and answer fully.')]),
    bul([en('Topic conversation: ', { b: true }), en('about 5 minutes. The examiner asks questions from different topics (A–E), starting with Core and moving up.')]),
    bul([en('Afterwards, the examiner completes the '), en('speaking marking grid', { b: true }), en(' with you.')]),
  ], { fill: C.cream }), gap());
  const wC = [700, 1250, 3256, 2500, 2500];
  k.push(h3('Which role play should I do?'), table([
    ['Card', 'Level', 'Situation', 'You are…', 'Examiner is…'].map((t, i) => th(t, wC[i])),
    ...s.RP.map((r) => [cell(P(en(r.id, { b: true }), { after: 0 }), wC[0]), cell(P(chip(r.level), { after: 0 }), wC[1]),
      cell([P(en(stripTitle(r.title)), { after: 0 }), arP(r.ar, { sz: 13, after: 0 })], wC[2]), cell(P(en(r.you), { after: 0 }), wC[3]), cell(P(en(r.them), { after: 0 }), wC[4])]),
  ], wC), P(small('Core students: cards A and B. Develop students: B and C. Stretch students: C and D. Everyone does the topic conversation.'), { before: 60, after: 140 }));
  k.push(h3('If you get stuck, keep talking'), table([[
    cell([arP('عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟', { after: 0 }), P(small('Sorry, could you repeat the question?'), { after: 0 })], W / 2),
    cell([arP('لَحْظَةً مِنْ فَضْلِكَ … دَعْنِي أُفَكِّرُ.', { after: 0 }), P(small('One moment please … let me think.'), { after: 0 })], W / 2),
  ]], [W / 2, W / 2]));

  const taskRows = (r, kind) => table(r.tasks.map((t, i) => {
    let body;
    if (kind === 'cand') body = t.unexpected ? [P([en('Unexpected question. ', { b: true, c: C.stretch }), en('Listen carefully and answer fully.')], { after: 0 })] : [P(en(t.task), { after: 0 })];
    else if (kind === 'exam') body = [arP(t.ex, { after: 0 }), P([t.unexpected ? en('Unexpected question: ', { b: true, sz: 9, c: C.stretch }) : en(''), small(t.task)], { after: 0 })];
    else body = [arP(t.help, { after: 0 })];
    return [numCell(t.unexpected ? '!' : i + 1, t.unexpected), cell(body, (kind === 'support' ? 4300 : W - 260) - 480, { pad: 50 })];
  }), [480, (kind === 'support' ? 4300 : W - 260) - 480], { borders: noLines });

  const cardHead = (label, r) => P([en(`${label} ${r.id}: ${stripTitle(r.title)}   `, { b: true, sz: 11.5, c: C.navy, f: 'Cambria' }), chip(r.level)], { after: 40 });
  const cand = (r) => [panel([cardHead('Candidate card', r), arP(r.ar, { sz: 14, after: 20 }),
    P([small('Setting: '), en(r.setting, { b: true, sz: 9 })], { after: 40 }),
    P([en('You are '), en(r.you, { b: true }), en('. Your teacher / partner is '), en(r.them, { b: true }), en('. Answer every task with a full sentence.')], { after: 60 }),
    taskRows(r, 'cand'), P([small('Preparation: '), timer('1 min'), small('   Role play: '), timer('2–3 min')], { before: 60, after: 0 })], { dashed: true }), gap(220)];
  const exam = (r) => [panel([cardHead('Examiner card', r),
    P(small(`You are ${r.them} (${r.setting}). Read each line exactly as written. Wait for the full answer before the next line. Do not help with the answer.`), { after: 60 }),
    taskRows(r, 'exam'), ...(r.girl ? [P([en('If your partner is a girl, say: ', { b: true, sz: 9 }), arR(r.girl, { sz: 12 })], { before: 60, after: 0 })] : [])], { dashed: true }), gap(220)];

  [[0, 2, 'A–B'], [2, 4, 'C–D']].forEach(([a, b, l]) => k.push(brk(), kicker(`Candidate cards ${l} · give to the candidate · cut along the dashed line`), ...s.RP.slice(a, b).flatMap(cand)));
  [[0, 2, 'A–B'], [2, 4, 'C–D']].forEach(([a, b, l]) => k.push(brk(), kicker(`Examiner cards ${l} · examiner only · do not show to the candidate`), ...s.RP.slice(a, b).flatMap(exam)));

  k.push(brk(), ...titleRow('Examiner sheet · topic conversation · about 5 minutes', 'Topic conversation questions', 'أَسْئِلَةُ المُحَادَثَةِ'));
  k.push(P([small('Start with two or three Core questions, then move to Develop and Stretch while your partner is coping. Follow-ups: '),
    arR('لِمَاذَا؟', { sz: 12 }), small(' (why?)  '), arR('وَفِي المُسْتَقْبَلِ؟', { sz: 12 }), small(' (and in the future?). Tick each question you ask.')], { after: 100 }));
  const wq = [420, 380, 5000, 900, 3506];
  s.CONV.forEach((c) => {
    k.push(P([en(`${c.level} questions: ${c.aim}   `, { b: true, sz: 11, c: C.navy, f: 'Cambria' }), chip(c.level)], { after: 50, keepNext: true }));
    k.push(table(c.qs.map((q, i) => [cell(P(tick(), { after: 0 }), wq[0], { v: VerticalAlign.CENTER }), cell(P(en(String(i + 1), { b: true }), { after: 0 }), wq[1], { v: VerticalAlign.CENTER }),
      cell(arP(q.q.replace(/\s*\([^)]*\)\s*$/, ''), { after: 0 }), wq[2], { v: VerticalAlign.CENTER }),
      cell(P(en((q.q.match(/\(([^)]*)\)\s*$/) || ['', 'mixed'])[1], { b: true, sz: 9 }), { after: 0 }), wq[3], { v: VerticalAlign.CENTER }),
      cell(P(small(q.en.replace(/\s*\([^)]*\)\s*$/, '')), { after: 0 }), wq[4], { v: VerticalAlign.CENTER })]), wq), gap(140));
  });

  k.push(brk(), ...titleRow('Optional · Core support strips · teacher decides who uses them', 'Sentence starters for the role plays', 'بِدَايَاتُ الجُمَلِ'));
  k.push(P(small('For students who need a scaffold during the preparation minute only. Take the strip away before the role play starts, so it stays exam-like.'), { after: 100 }));
  const half = W / 2;
  const strip = (r) => cell([P([en(`Card ${r.id}: ${stripTitle(r.title)}  `, { b: true, sz: 10.5, c: C.navy, f: 'Cambria' }), chip(r.level)], { after: 50 }), taskRows(r, 'support')], half, { pad: 100,
    borders: { top: B(BorderStyle.DASHED, '9AA3B2', 8), bottom: B(BorderStyle.DASHED, '9AA3B2', 8), left: B(BorderStyle.DASHED, '9AA3B2', 8), right: B(BorderStyle.DASHED, '9AA3B2', 8) } });
  k.push(table([[strip(s.RP[0]), strip(s.RP[1])], [strip(s.RP[2]), strip(s.RP[3])]], [half, half], { borders: none }));
  return save(`${code}_Student_Speaking_Mock_${d.write.fileTitle}`, `${code} · Speaking mock · Student handout`, k);
}

// ───────── writing paper
function writing(d, code) {
  const wr = d.write; const k = [];
  k.push(...titleRow(`${code} · Paper 4 practice · timed`, `Writing mock: ${wr.short}`, wr.arShort), nameLine('Class'));
  k.push(panel([h3('Instructions'),
    bul([en('Answer '), en('all three', { b: true }), en(' questions. In Question 3, choose '), en('one', { b: true }), en(' title only.')]),
    bul([en('Write in Arabic. Answer '), en('every bullet point', { b: true }), en(': a missing bullet loses marks, however good your Arabic is.')]),
    bul([en('Suggested timing for this practice: '), en('Q1 · 8 min  ·  Q2 · 12 min  ·  Q3 · 25 min', { b: true, c: C.navy }), en(', including a 3-minute plan and a 2-minute check. Any extra time on the day = checking time.')]),
    bul([en('No dictionaries, notes or model answers. This is timed practice under exam conditions.')]),
  ], { fill: C.cream }), gap());
  k.push(h2(['Question 1 · Form', timer('8 min')]));
  k.push(table([[cell(P(en(wr.FORM.title, { b: true, sz: 11.5, c: C.navy, f: 'Cambria' }), { after: 0 }), 5600, { pad: 0 }), cell(arP(wr.FORM.ar, { b: true, after: 0 }), W - 5600, { pad: 0 })]], [5600, W - 5600], { borders: none }));
  k.push(P([small('Fill in the form in Arabic. One word or a short phrase in each box. The last box needs '), en('one full sentence', { b: true, sz: 9 }), small('.')], { after: 60 }));
  const wf = [450, 4300, W - 4750];
  k.push(table(wr.FORM.fields.map((f, i) => [cell(P(en(String(i + 1), { b: true }), { after: 0 }), wf[0]),
    cell([arP(f.ar, { after: 0 }), P(small(f.en), { after: 0 })], wf[1]), cell(arP(' ', { after: 0 }), wf[2])]), wf));

  k.push(brk(), h2(['Question 2 · Directed writing', timer('12 min'), small('   about 80–90 words')]));
  const wb = [450, 5600, W - 6050];
  k.push(panel([
    table([[cell(P(en(cap(wr.Q2.title.replace(/^Question 2: /, '')), { b: true, sz: 11.5, c: C.navy, f: 'Cambria' }), { after: 0 }), 4300, { pad: 0 }), cell(arP(wr.Q2.ar, { b: true, after: 0 }), W - 260 - 4300, { pad: 0 })]], [4300, W - 260 - 4300], { borders: none }),
    arP(wr.Q2.rubric[0][1], { after: 60 }),
    table(wr.Q2.rubric.slice(1).map((r) => [cell(P(en(r[0], { b: true }), { after: 0 }), wb[0]), cell(arP(r[1], { after: 0 }), wb[1] - 260), cell(P(small(r[2]), { after: 0 }), wb[2])]), [wb[0], wb[1] - 260, wb[2]]),
    P(small('Remember: a greeting and a closing · past, present and future · check your verb endings.'), { before: 60, after: 0 }),
  ]), gap(160), ...lines(16), P(small('Word count (approx.): ________'), { before: 80 }));

  k.push(brk(), h2(['Question 3 · Extended writing', timer('25 min'), small('   about 130–150 words · choose ONE title')]));
  const opt = (letter, o) => cell([P(en(`(${letter}) ${o.en}`, { b: true, sz: 11, c: C.navy, f: 'Cambria' }), { after: 20 }), arP(o.title, { b: true, after: 40 }),
    ...o.bullets.split(' · ').flatMap((b, i) => [arP('• ' + b, { sz: 13, after: 0 }), P(small(o.bulletsEn.split(' · ')[i] || ''), { after: 30 })])], W / 2, { pad: 110 });
  k.push(table([[opt('أ', wr.Q3.a), opt('ب', wr.Q3.b)]], [W / 2, W / 2]), gap(120));
  k.push(panel([h3('3-minute plan', [small('  (one line per paragraph, then cross it out)')]),
    table([1, 2, 3, 4].map((n) => [cell(P(en(String(n), { b: true }), { after: 0 }), 450), cell(arP(' ', { after: 0 }), W - 260 - 450)]), [450, W - 260 - 450]),
    P([small('I chose title:  (أ) '), tick(), small('   (ب) '), tick()], { before: 60, after: 0 })], { fill: C.cream }), gap(120), ...lines(11));
  k.push(brk(), kicker('Question 3 · continued'), ...lines(22), gap(160));
  const third = Math.floor(W / 3); const w3 = [third, third, W - 260 - 2 * third];
  const ci = (runs) => cell(P([tick({ sz: 10 }), ...runs], { after: 0 }), 0);
  const chk = [[ci([small('Every bullet answered (Q2 and Q3)')]), ci([small('Verb endings: who + when  '), arR('كَتَبْتُ · نَكْتُبُ · سَأَكْتُبُ', { sz: 11 })]), ci([small('Agreement: adjectives, colours, plurals')])],
    [ci([small('Numbers + nouns')]), ci([small('Past, present AND future verbs')]), ci([small('Linkers  '), arR('لِأَنَّ · لٰكِنَّ · ثُمَّ', { sz: 11 })])]];
  k.push(panel([h3('Final 2-minute check (tick before you hand in)'), table(chk.map((r) => r.map((c, i) => new TableCell({ ...c.options, width: { size: w3[i], type: WidthType.DXA }, children: c.options.children }))), w3, { borders: none })], { fill: C.cream }));
  return save(`${code}_Student_Writing_Mock_${wr.fileTitle}`, `${code} · Writing mock · Student handout`, k);
}

// ───────── exam-day survival sheet (one page)
function survival() {
  const k = [...titleRow('IGCSE Arabic 0544 · Paper 3 Speaking and Paper 4 Writing', 'Exam-day survival sheet', 'دَلِيلُ يَوْمِ الامْتِحَانِ')];
  const half = W / 2; const navyB = { top: B(BorderStyle.SINGLE, C.navy), bottom: B(BorderStyle.SINGLE, C.navy), left: B(BorderStyle.SINGLE, C.navy), right: B(BorderStyle.SINGLE, C.navy) };
  const tRow = (a, b) => [P([en(a, { b: true, sz: 9, c: 'FFFFFF' }), en('  ' + b, { sz: 9, c: 'FFFFFF' })], { after: 30 })];
  k.push(table([[
    cell([P(en('⏱ Timings: Writing', { b: true, sz: 11, c: C.goldLine, f: 'Cambria' }), { after: 40 }), ...tRow('Q1 Form', '≈ 8 min · no empty boxes'),
      ...tRow('Q2 Email / message', '≈ 12 min · every bullet · 80–90 words'), ...tRow('Q3 Extended', '≈ 25 min = 3 plan + 20 write + 2 check'),
      P(en('Extra time on the day? Spend it checking, not adding new risky sentences.', { sz: 8.5, c: 'FFFFFF', i: true }), { after: 0 })], half, { fill: C.navy }),
    cell([P(en('🎙 Timings: Speaking', { b: true, sz: 11, c: C.goldLine, f: 'Cambria' }), { after: 40 }), ...tRow('Prep', 'read every task · underline question words · plan first words'),
      ...tRow('Role plays', 'full sentence for every task · the ! task is not on your card: listen'), ...tRow('Conversation', 'answer + reason + another time frame')], half, { fill: C.navy }),
  ]], [half, half], { borders: { ...navyB, insideVertical: B(BorderStyle.SINGLE, 'FFFFFF', 12) } }), gap(100));

  const pair = (rows, wA) => table(rows.map((r) => [cell(arP(r[0], { sz: 11.5, after: 0, spacing: { before: 0, after: 0, line: 300, lineRule: LineRuleType.EXACT } }), wA, { pad: 15, v: VerticalAlign.CENTER }), cell(P(small(r[1]), { after: 0 }), W - wA, { pad: 25, v: VerticalAlign.CENTER })]), [wA, W - wA]);
  k.push(h3('🛟 Repair phrases: never leave a silence'), pair([
    ['عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟', 'Sorry, could you repeat the question?'],
    ['لَمْ أَفْهَمْ جَيِّدًا. هَلْ يُمْكِنُ أَنْ تَتَكَلَّمَ بِبُطْءٍ؟', 'I didn’t quite understand. Could you speak slowly?'],
    ['مَا مَعْنَى …؟', 'What does … mean?'],
    ['لَحْظَةً مِنْ فَضْلِكَ … دَعْنِي أُفَكِّرُ.', 'One moment please … let me think.'],
    ['أَقْصِدُ أَنَّ … / بِعِبَارَةٍ أُخْرَى …', 'I mean that … / In other words …'],
    ['لَا أَتَذَكَّرُ الكَلِمَةَ، لٰكِنَّهُ شَيْءٌ …', 'I can’t remember the word, but it’s something …'],
    ['هٰذَا سُؤَالٌ صَعْبٌ، وَلٰكِنْ فِي رَأْيِي …', 'That’s a hard question, but in my opinion …'],
  ], 5600), P([small('To a female examiner:  '), arR('تُعِيدِي · تَتَكَلَّمِي · مِنْ فَضْلِكِ', { sz: 12 })], { before: 30, after: 100 }));

  const mini = (rows, wA, wT) => table(rows.map((r) => [cell(arP(r[0], { sz: 11.5, after: 0, spacing: { before: 0, after: 0, line: 300, lineRule: LineRuleType.EXACT } }), wA, { pad: 12, v: VerticalAlign.CENTER }), cell(P(small(r[1]), { after: 0 }), wT - wA, { pad: 20, v: VerticalAlign.CENTER })]), [wA, wT - wA]);
  const inner = half - 220;
  k.push(table([[
    cell([h3('🔎 Question-word decoder'), mini([['أَيْنَ', 'where → place'], ['مَتَى', 'when → time / day'], ['كَيْفَ', 'how → way / transport'], ['لِمَاذَا', 'why → لِأَنَّ'],
      ['صِفْ / صِفِي', 'describe → adjectives'], ['مَا رَأْيُكَ', 'opinion → أَظُنُّ أَنَّ'], ['مَاذَا فَعَلْتَ', 'what did you do → PAST'], ['خِطَطُكَ', 'your plans → FUTURE']], 1700, inner)], half, { pad: 60 }),
    cell([h3('🚀 Mark boosters'), mini([['لِأَنَّ … · لِذٰلِكَ …', 'because … · so …'], ['كُنْتُ … أَمَّا الآنَ …', 'I used to … but now …'], ['سَوْفَ … / فِي المُسْتَقْبَلِ …', 'I will … / in the future …'],
      ['أَكْثَرُ … مِنْ · بَيْنَمَا', 'more … than · whereas'], ['صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', 'it’s true that … but …'], ['لَوْ كُنْتُ …، لَفَعَلْتُ …', 'if I were …, I would …']], 2650, inner)], half, { pad: 60 }),
  ]], [half, half], { borders: none }), gap(80));

  const np = (runs, a) => [P([...runs, ...(a ? [en('  '), arR(a, { sz: 11.5 })] : [])], { bullet: 'num', after: 20 })];
  k.push(table([[
    cell([h3('✅ The five-point writing check'), ...np([en('Every bullet', { b: true, sz: 9.5 }), en(' answered (plus greeting and closing in Q2).', { sz: 9.5 })]),
      ...np([en('Verb endings: ', { b: true, sz: 9.5 }), en('who and when?', { sz: 9.5 })], 'ذَهَبْتُ · نَذْهَبُ · سَأَذْهَبُ'),
      ...np([en('Agreement:', { b: true, sz: 9.5 })], 'بَيْتٌ كَبِيرٌ · مَدِينَةٌ كَبِيرَةٌ · حَقِيبَةٌ سَوْدَاءُ'),
      ...np([en('Numbers + nouns:', { b: true, sz: 9.5 })], 'ثَلَاثُ سَاعَاتٍ · عِشْرُونَ طَالِبًا'),
      ...np([en('Three time frames', { b: true, sz: 9.5 }), en(' and linkers:', { sz: 9.5 })], 'لِأَنَّ · لٰكِنَّ · ثُمَّ')], half, { fill: C.cream, pad: 90 }),
    cell([h3('🌙 The night before and on the day'), ...['Sleep early, eat breakfast and drink water.', 'Pens, ID and a watch ready the night before.', 'Read the whole question before you write a word.',
      'A short correct sentence beats a long broken one.', 'Stuck? Use a repair phrase, breathe, and keep going.'].map((t) => P(en(t, { sz: 9.5 }), { bullet: 'bul', after: 10 })),
      arP('رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي', { b: true, sz: 13, before: 40, after: 0 }), P(small('“My Lord, expand my chest and ease my task for me.” (Ṭā Hā 20:25–26)'), { after: 0 })], half, { fill: C.cream, pad: 90 }),
  ]], [half, half], { borders: { ...none, insideVertical: B(BorderStyle.SINGLE, 'FFFFFF', 18) } }));
  k.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: sp(60, 0), children: [arR('بِالتَّوْفِيقِ فِي الامْتِحَانِ!', { b: true, sz: 14, c: C.gold }), en('  · Good luck in the exam!', { sz: 9, c: C.muted })] }));
  return save('Exam_Day_Survival_Sheet', 'Exam-day survival sheet', k);
}

// ───────── marking grids
function grids() {
  const k = []; const t = () => tick({ sz: 10 });
  const wB = [2000, 2735, 2735, 2736];
  const head4 = [th('Criterion', wB[0]), th('Secure (Core)', wB[1], C.core), th('Strong (Develop)', wB[2], C.develop), th('Excellent (Stretch)', wB[3], C.stretch)];
  const bandRow = (name, sub, a, b, c) => [cell([P(en(name, { b: true, sz: 10 }), { after: 0 }), ...(sub ? [P(small(sub), { after: 0 })] : [])], wB[0], { fill: C.cream }),
    ...[a, b, c].map((x, i) => cell([].concat(x).map((part, j) => (typeof part === 'string' ? P([...(j === 0 ? [t()] : []), en(part, { sz: 9.5 })], { after: 0 }) : part)), wB[i + 1]))];
  const note = P([en('Teacher note: ', { b: true, sz: 9 }), small('these are student-friendly grids built on the areas the Cambridge mark scheme rewards (completing the task and communicating clearly, range of language, accuracy, and pronunciation in speaking). They are for peer and self-assessment in class. For marks and grades, use the official mark scheme for your syllabus year.')], { after: 100 });
  const wwwEbi = (h) => table([[cell([h3('WWW: what went well'), ...Array(h).fill(0).map(() => P([], { after: 120 }))], W / 2, { fill: C.www }), cell([h3('EBI: even better if…'), ...Array(h).fill(0).map(() => P([], { after: 120 }))], W / 2, { fill: C.ebi })]], [W / 2, W / 2]);

  k.push(...titleRow('Paper 3 · peer assessment · examiner completes, then discusses with the candidate', 'Speaking marking grid', 'شَبَكَةُ تَقْيِيمِ المُحَادَثَةِ'), note, nameLine('Examiner (partner)'));
  const wR = [1700, 2835, 2835, 2836];
  const rp = (n) => [h3(`Role play ${n}`, [small('    Card: ____   ·   examiner: ______________')]), table([
    [th('Task', wR[0]), th('2 · Fully done: clear, complete sentence; the message gets across', wR[1], C.core), th('1 · Partly done: one word only, part missing, or I had to help', wR[2], C.develop), th('0 · Not done: no answer, or the message is not understood', wR[3], C.stretch)],
    ...[1, 2, 3, 4, '!'].map((x) => [cell(P(en(x === '!' ? '! Unexpected' : `Task ${x}`, { b: true, c: x === '!' ? C.stretch : C.ink }), { after: 0 }), wR[0]), ...[1, 2, 3].map((j) => cell(P(t(), { align: AlignmentType.CENTER, after: 0 }), wR[j]))]),
    [cell(P([en('Total: ____ / 10', { b: true }), small('   ·   Was the unexpected question answered with a full sentence?   yes '), t(), small(' no '), t()], { after: 0 }), W, { span: 4 })],
  ], wR), gap(140)];
  k.push(...rp(1), ...rp(2), panel([P([en('How to give feedback in 1 minute: ', { b: true, sz: 9.5 }), en('say one task that was fully done (a 2), then one that was partly done (a 1) and what full sentence would have made it a 2.', { sz: 9.5 })], { after: 0 })], { fill: C.cream }));

  k.push(brk(), ...titleRow('Paper 3 · topic conversation · tick ONE box per row', 'Speaking marking grid: conversation', 'تَقْيِيمُ المُحَادَثَةِ'));
  k.push(table([head4,
    bandRow('Communication', 'answering the question', 'Answers every question with a full sentence', 'Gives reasons and a second detail; few pauses', 'Develops answers fully: opinions, examples, balance'),
    bandRow('Range', 'vocabulary and structures', 'Topic words used correctly; simple sentences', ['Linkers and two time frames', arP('لِأَنَّ · لٰكِنَّ · ثُمَّ', { sz: 11.5, after: 0 })], 'Three time frames + comparison, concession or law … la-'),
    bandRow('Accuracy', 'grammar', 'Meaning is clear, despite errors', 'Most verb endings and agreements correct', 'Errors are rare, even in complex sentences'),
    bandRow('Pronunciation and fluency', '', 'Understandable; some long pauses', ['Clear sounds; keeps going', arP('ح · ع · ق', { sz: 11.5, after: 0 })], 'Natural flow; uses repair phrases smoothly'),
  ], wB), gap(140));
  k.push(table([[
    cell([h3('I heard these good structures'), ...lines(4, W / 2 - 220)], W / 2),
    cell([h3('Time frames heard'), P([t(), en('past '), arR('ذَهَبْتُ', { sz: 12 }), en('    '), t(), en('present '), arR('أَذْهَبُ', { sz: 12 }), en('    '), t(), en('future '), arR('سَأَذْهَبُ', { sz: 12 })], { after: 100 }),
      h3('Repair phrase used instead of silence?'), P([t(), en('yes    '), t(), en('no    '), t(), en('not needed')], { after: 0 })], W / 2),
  ]], [W / 2, W / 2]), gap(140), wwwEbi(4), gap(120),
  panel([P([en('Self-assessment: ', { b: true, sz: 9.5 }), en('my target for the real exam is ______________________________________________', { sz: 9.5 })], { after: 0 })], { fill: C.cream }));

  k.push(brk(), ...titleRow('Paper 4 · peer or self-assessment · swap papers, use a different colour pen', 'Writing marking grid', 'شَبَكَةُ تَقْيِيمِ الكِتَابَةِ'), nameLine('Checked by'));
  const wF = [2400, ...Array(8).fill(810), W - 2400 - 6480];
  k.push(h3('Question 1 · Form'), table([
    [th('Box', wF[0]), ...[1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => th(String(n), wF[i + 1])), th('Total', wF[9])],
    [cell(P(small('✔ correct and in Arabic'), { after: 0 }), wF[0]), ...[1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => cell(P(t(), { align: AlignmentType.CENTER, after: 0 }), wF[i + 1])), cell(P(en('__ / 8', { b: true }), { after: 0 }), wF[9])],
  ], wF), P(small('Check: does the word agree (masculine / feminine)? Is box 8 a full sentence?'), { before: 50, after: 160 }));
  const wQ = [2600, 900, 900, 900, 900, 2003, 2003];
  k.push(h3('Question 2 · Directed writing'), table([
    ['Bullet point covered?', '1', '2', '3', '4', 'Greeting / closing', '≈ 80–90 words'].map((x, i) => th(x, wQ[i])),
    [cell(P(small('tick if answered clearly'), { after: 0 }), wQ[0]), ...wQ.slice(1).map((w) => cell(P(t(), { align: AlignmentType.CENTER, after: 0 }), w))],
  ], wQ), gap(100), table([head4,
    bandRow('Language', '', 'Simple, clear sentences; topic words', 'Linkers and past + present + future', 'Varied structures: maʿa anna, comparatives, idhā … fa-'),
    bandRow('Accuracy', '', 'Meaning clear despite errors', 'Most endings and agreements right', 'Very few errors'),
  ], wB), gap(140));
  k.push(panel([P(en('Five-point check: did the writer…', { b: true, sz: 10 }), { after: 40 }),
    P([t(), en('answer every bullet   '), t(), en('get verb endings right   '), t(), en('make adjectives agree   '), t(), en('write numbers + nouns correctly   '), t(), en('use three time frames?')], { after: 0 })], { fill: C.cream }));

  k.push(brk(), ...titleRow('Paper 4 · Question 3 · tick ONE box per row', 'Writing marking grid: extended writing', 'تَقْيِيمُ الكِتَابَةِ المُطَوَّلَةِ'));
  k.push(P([small('Title chosen:  (أ) '), t(), small('  (ب) '), t(), small('   ·   All four bullet points covered?  '), t(), small('1 '), t(), small('2 '), t(), small('3 '), t(), small('4   ·   About 130–150 words? '), t()], { after: 100 }));
  k.push(table([head4,
    bandRow('Content and development', '', 'Every bullet answered, simply', 'Every bullet answered with reasons and details', 'Every bullet developed: examples, opinions, balance'),
    bandRow('Organisation', '', 'Paragraphs in a sensible order', 'Clear paragraphs; linkers between ideas', 'Strong opening and conclusion; ideas flow'),
    bandRow('Range of language', '', 'Topic words; simple sentences; one past verb', ['Three time frames and linkers', arP('لِأَنَّ · لٰكِنَّ · عِنْدَمَا', { sz: 11.5, after: 0 })], 'Complex structures: concession, passive, mimmā, law … la-'),
    bandRow('Accuracy', '', 'Meaning clear despite errors', 'Most verbs, agreements and numbers correct', 'Errors are rare, even in long sentences'),
  ], wB), gap(160));
  k.push(panel([h3('Best sentence in this piece (copy it here)'), ...lines(2, W - 220)]), gap(120),
    panel([h3('One sentence to correct (copy it, then write the correction)'), ...lines(3, W - 220)]), gap(120), wwwEbi(3));
  return save('Marking_Grids_Peer_and_Self_Assessment', 'Peer and self-assessment · Marking grids', k);
}

(async () => {
  for (const [code, file] of [['FR-L05', './content/xp-r-l05'], ['FR-L06', './content/xp-r-l06']]) {
    const d = require(file);
    await speaking(d, code);
    await writing(d, code);
  }
  await survival();
  await grids();
})().catch((e) => { console.error(e); process.exit(1); });
