'use strict';
/*
 * Printable student handouts for the Final Revision mocks (FR-L05, FR-L06), the exam-day survival sheet and the
 * peer / self-assessment marking grids. Builds HTML from the same lesson data as the decks, then prints A4 PDFs
 * with headless Chromium (fonts are embedded in the PDF, so the vowelled Arabic prints and displays everywhere).
 * Usage: node handouts.js            → Final_Revision/Student_Handouts/*.pdf
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const OUT = path.join(__dirname, '..', 'Final_Revision', 'Student_Handouts');
const TMP = path.join(require('os').tmpdir(), 'miftah-handouts');
const CHROME = '/opt/pw-browsers/chromium';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const ar = (s, cls = '') => `<span class="ar ${cls}" dir="rtl" lang="ar">${esc(s)}</span>`;
const arBlock = (s, cls = '') => `<div class="ar ${cls}" dir="rtl" lang="ar">${esc(s)}</div>`;
const LEVEL = { Core: 'core', 'Core+': 'core', Develop: 'develop', Stretch: 'stretch' };
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const chip = (level) => `<span class="chip ${LEVEL[level] || 'core'}">${esc(level)}</span>`;

const CSS = `
@page { size: A4; margin: 11mm 13mm 11mm; }
* { box-sizing: border-box; }
body { margin: 0; font-family: 'Noto Sans', sans-serif; font-size: 10.5pt; color: #1F2A3A; line-height: 1.38; }
.ar { font-family: 'Amiri', serif; font-size: 1.32em; line-height: 1.7; }
h1, h2, h3 { font-family: 'Noto Serif', serif; color: #1B3B6F; margin: 0; }
h1 { font-size: 19pt; } h2 { font-size: 13.5pt; margin: 10px 0 6px; } h3 { font-size: 11.5pt; margin: 0 0 4px; }
.page { page-break-after: always; } .page:last-child { page-break-after: auto; }
.head { display: flex; align-items: center; gap: 10px; border-bottom: 2px solid #D4AF37; padding-bottom: 6px; margin-bottom: 10px; }
.logo { width: 34px; height: 34px; border-radius: 50%; background: #1B3B6F; border: 1.5px solid #D4AF37; color: #D4AF37;
  font-family: 'Amiri'; font-weight: 700; font-size: 20px; display: flex; align-items: center; justify-content: center; }
.school { font-family: 'Noto Serif'; font-weight: 700; color: #1B3B6F; font-size: 11pt; }
.dept { font-size: 7pt; letter-spacing: 1.6px; color: #8A6D1E; font-weight: 700; }
.head .right { margin-left: auto; text-align: right; font-size: 8.5pt; color: #5B6577; }
.titlerow { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 8px; }
.titlerow .ar { white-space: nowrap; margin-left: 12px; color: #8A6D1E; font-size: 19pt; font-weight: 700; line-height: 1.3; }
.kicker { font-size: 7.5pt; letter-spacing: 1.8px; font-weight: 700; color: #8A6D1E; text-transform: uppercase; }
.box { border: 1px solid #D8D0BF; border-radius: 6px; padding: 8px 11px; margin-bottom: 8px; background: #fff; }
.cream { background: #F4F1EA; } .navy { background: #1B3B6F; color: #fff; border-color: #1B3B6F; } .navy h3 { color: #D4AF37; }
.chip { display: inline-block; font-size: 7pt; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #fff;
  border-radius: 9px; padding: 1px 8px; vertical-align: middle; }
.chip.core { background: #2E7D57; } .chip.develop { background: #D9861A; } .chip.stretch { background: #C0392B; }
.name { display: flex; gap: 14px; font-size: 9.5pt; margin: 2px 0 10px; }
.name span { flex: 1; border-bottom: 1px solid #9AA3B2; padding-bottom: 2px; }
.lines { border: 1px solid #D8D0BF; border-radius: 6px; padding: 0 12px 4px; overflow: hidden; }
.lines div { height: 9mm; border-bottom: 0.7px solid #B9C0CC; }
.compact .ar { font-size: 1.16em; line-height: 1.3; } .compact td { padding: 2px 6px; } .compact .box { padding: 6px 10px; margin-bottom: 6px; }
.compact h3 { font-size: 10.5pt; } .compact li { margin: 1px 0; line-height: 1.4; }
.timer { display: inline-block; border: 1.5px solid #1B3B6F; border-radius: 12px; padding: 1px 10px; font-weight: 700; color: #1B3B6F; font-size: 9pt; }
table { width: 100%; border-collapse: collapse; }
td, th { border: 1px solid #D8D0BF; padding: 5px 7px; vertical-align: top; text-align: left; }
th { background: #1B3B6F; color: #fff; font-size: 8.5pt; font-weight: 700; }
.small { font-size: 8.5pt; color: #5B6577; } .muted { color: #5B6577; }
.cut { border: 1.5px dashed #9AA3B2; border-radius: 8px; padding: 10px 13px; margin-bottom: 10px; break-inside: avoid; }
.cut .top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; }
.task { display: flex; gap: 9px; padding: 4px 0; border-top: 1px dotted #D8D0BF; align-items: flex-start; }
.task:first-of-type { border-top: 0; }
.num { flex: 0 0 22px; height: 22px; border-radius: 50%; background: #1B3B6F; color: #fff; font-weight: 700; font-size: 9pt;
  display: flex; align-items: center; justify-content: center; }
.num.unx { background: #C0392B; }
.cut .ar { line-height: 1.45; } .cut .task { padding: 3px 0; }
.unx-label { color: #C0392B; font-weight: 700; font-size: 8.5pt; }
.two { display: grid; grid-template-columns: 1fr 1fr; gap: 9px; }
.three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; }
.tick { display: inline-block; width: 11px; height: 11px; border: 1.3px solid #1B3B6F; border-radius: 2px; vertical-align: -1px; margin-right: 5px; }
.field td.blank { width: 52%; height: 30px; }
ul { margin: 3px 0 0 18px; padding: 0; } li { margin: 2px 0; }
.footer { position: fixed; bottom: -8mm; left: 0; right: 0; font-size: 7.5pt; color: #8A93A3; display: flex; justify-content: space-between; }
`;

const header = (right) => `<div class="head"><div class="logo">م</div><div><div class="school">Al Madina Online School</div>
<div class="dept">ARABIC DEPARTMENT · MIFTAH ARABIC · IGCSE 0544</div></div><div class="right">${right}</div></div>`;
const titleRow = (kicker, title, arTitle) => `<div class="titlerow"><div><div class="kicker">${esc(kicker)}</div><h1>${esc(title)}</h1></div>${ar(arTitle)}</div>`;
const nameRow = (extra = 'Date') => `<div class="name"><span>Name:</span><span>${extra}:</span></div>`;
const doc = (title, pages, foot) => `<!doctype html><html><head><meta charset="utf-8"><title>${esc(title)}</title><style>${CSS}</style></head>
<body>${pages.join('\n')}</body></html>`;

// ───────────────────────── speaking booklet (candidate cards, examiner cards, conversation sheet, Core support)
function speakingBooklet(d, code) {
  const s = d.speak;
  const right = `${code} · Speaking mock<br>Student handout`;
  const intro = `<div class="page">${header(right)}${titleRow(`${code} · Paper 3 practice · timed`, `Speaking mock: ${s.short}`, s.arShort)}
  <div class="box cream"><h3>How this mock works (breakout rooms, pairs)</h3>
  <ul><li><b>Partner A</b> is the candidate and keeps only the <b>candidate card</b>. <b>Partner B</b> is the examiner and keeps the <b>examiner card</b>. Then swap.</li>
  <li><b>Preparation:</b> 1 minute per role play. Read all five tasks, underline the question words and plan the <i>first words</i> of each answer. No writing full sentences.</li>
  <li><b>Role play:</b> about 2–3 minutes. The examiner reads each line exactly as written and waits for an answer.</li>
  <li>Task <span class="num unx" style="display:inline-flex;width:17px;height:17px;font-size:8pt">!</span> is the <b>unexpected question</b>. It is <u>not</u> printed on your card: listen carefully and answer fully.</li>
  <li><b>Topic conversation:</b> about 5 minutes. The examiner asks questions from different topics (A–E), starting with Core and moving up.</li>
  <li>Afterwards, the examiner completes the <b>speaking marking grid</b> with you.</li></ul></div>
  <div class="box"><h3>Which role play should I do?</h3>
  <table><tr><th>Card</th><th>Level</th><th>Situation</th><th>You are…</th><th>Examiner is…</th></tr>
  ${s.RP.map((r) => `<tr><td><b>${r.id}</b></td><td>${chip(r.level)}</td><td>${esc(r.title.replace(/^Role play [A-D] — /, ''))}<br>${ar(r.ar)}</td><td>${esc(r.you)}</td><td>${esc(r.them)}</td></tr>`).join('')}
  </table><p class="small" style="margin:6px 0 0">Core students: cards A and B. Develop students: B and C. Stretch students: C and D. Everyone does the topic conversation.</p></div>
  <div class="box"><h3>If you get stuck, keep talking</h3>
  <div class="two"><div>${arBlock('عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟')}<div class="small">Sorry, could you repeat the question?</div></div>
  <div>${arBlock('لَحْظَةً مِنْ فَضْلِكَ … دَعْنِي أُفَكِّرُ.')}<div class="small">One moment please … let me think.</div></div></div></div>
  </div>`;

  const cand = (r) => `<div class="cut"><div class="top"><h3>Candidate card ${r.id}: ${esc(r.title.replace(/^Role play [A-D] — /, ''))}</h3>${chip(r.level)}</div>
  <div class="two" style="margin-bottom:4px"><div>${ar(r.ar)}</div><div class="small" style="text-align:right">Setting: <b>${esc(r.setting)}</b></div></div>
  <p style="margin:0 0 5px">You are <b>${esc(r.you)}</b>. Your teacher / partner is <b>${esc(r.them)}</b>. Answer every task with a full sentence.</p>
  ${r.tasks.map((t, i) => t.unexpected
    ? `<div class="task"><div class="num unx">!</div><div><span class="unx-label">Unexpected question.</span> Listen carefully and answer fully.</div></div>`
    : `<div class="task"><div class="num">${i + 1}</div><div>${esc(t.task)}</div></div>`).join('')}
  <div class="small" style="margin-top:6px">Preparation: <span class="timer">1 min</span> &nbsp; Role play: <span class="timer">2–3 min</span></div></div>`;

  const exam = (r) => `<div class="cut"><div class="top"><h3>Examiner card ${r.id}: ${esc(r.title.replace(/^Role play [A-D] — /, ''))}</h3>${chip(r.level)}</div>
  <p style="margin:0 0 5px" class="small">You are <b>${esc(r.them)}</b> (${esc(r.setting)}). Read each line exactly as written. Wait for the full answer before the next line. Do not help with the answer.</p>
  ${r.tasks.map((t, i) => `<div class="task"><div class="num ${t.unexpected ? 'unx' : ''}">${t.unexpected ? '!' : i + 1}</div><div style="flex:1">${arBlock(t.ex)}
  <div class="small">${t.unexpected ? '<b style="color:#C0392B">Unexpected question:</b> ' : ''}${esc(t.task)}</div></div></div>`).join('')}
  ${r.girl ? `<div class="small" style="margin-top:5px"><b>If your partner is a girl, say:</b> ${ar(r.girl)}</div>` : ''}</div>`;

  const candPages = [s.RP.slice(0, 2), s.RP.slice(2)].map((pair, k) => `<div class="page">${header(right)}
  <div class="kicker" style="margin-bottom:6px">Candidate cards ${k ? 'C–D' : 'A–B'} · give to the candidate · cut along the dashed line</div>${pair.map(cand).join('')}</div>`);
  const examPages = [s.RP.slice(0, 2), s.RP.slice(2)].map((pair, k) => `<div class="page">${header(right)}
  <div class="kicker" style="margin-bottom:6px">Examiner cards ${k ? 'C–D' : 'A–B'} · examiner only · do not show to the candidate</div>${pair.map(exam).join('')}</div>`);

  const conv = `<div class="page">${header(right)}${titleRow('Examiner sheet · topic conversation · about 5 minutes', 'Topic conversation questions', 'أَسْئِلَةُ المُحَادَثَةِ')}
  <p class="small" style="margin-top:0">Start with two or three Core questions, then move to Develop and Stretch while your partner is coping. Ask follow-ups such as
  ${ar('لِمَاذَا؟')} (why?) ${ar('وَمَاذَا بَعْدَ ذٰلِكَ؟')} (and then?) ${ar('وَفِي المُسْتَقْبَلِ؟')} (and in the future?). Tick each question you ask.</p>
  ${s.CONV.map((c) => `<div class="box"><div class="top" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px"><h3>${esc(c.level)} questions: ${esc(c.aim)}</h3>${chip(c.level)}</div>
  <table>${c.qs.map((q, i) => `<tr><td style="width:24px"><span class="tick"></span></td><td style="width:22px"><b>${i + 1}</b></td><td style="width:50%">${arBlock(q.q.replace(/\s*\([^)]*\)\s*$/, ''))}</td><td style="width:13%" class="small"><b>${(q.q.match(/\(([^)]*)\)\s*$/) || ['', 'mixed'])[1]}</b></td><td class="small">${esc(q.en.replace(/\s*\([^)]*\)\s*$/, ''))}</td></tr>`).join('')}</table></div>`).join('')}
  </div>`;

  const support = `<div class="page">${header(right)}${titleRow('Optional · Core support strips · teacher decides who uses them', 'Sentence starters for the role plays', 'بِدَايَاتُ الجُمَلِ')}
  <p class="small" style="margin-top:0">For students who need a scaffold during the <b>preparation minute only</b>. Take the strip away before the role play starts, so it stays exam-like.</p>
  <div class="two">${s.RP.map((r) => `<div class="cut"><div class="top"><h3>Card ${r.id}: ${esc(r.title.replace(/^Role play [A-D] — /, ''))}</h3>${chip(r.level)}</div>
  ${r.tasks.map((t, i) => `<div class="task"><div class="num ${t.unexpected ? 'unx' : ''}">${t.unexpected ? '!' : i + 1}</div><div style="flex:1">${arBlock(t.help)}</div></div>`).join('')}</div>`).join('')}</div>
  </div>`;

  return doc(`${code} Speaking mock`, [intro, ...candPages, ...examPages, conv, support], `${code} · ${s.short} · Speaking mock`);
}

// ───────────────────────── writing paper (Q1 form, Q2 directed writing, Q3 extended writing)
function writingPaper(d, code) {
  const wr = d.write; const right = `${code} · Writing mock<br>Student handout`;
  const fem = /اكْتُبِي/.test(wr.Q2.rubric[0][1]);
  const cover = `<div class="page">${header(right)}${titleRow(`${code} · Paper 4 practice · timed`, `Writing mock: ${wr.short}`, wr.arShort)}${nameRow('Class')}
  <div class="box cream"><h3>Instructions</h3><ul>
  <li>Answer <b>all three</b> questions. In Question 3, choose <b>one</b> title only.</li>
  <li>Write in Arabic. Answer <b>every bullet point</b>: a missing bullet loses marks, however good your Arabic is.</li>
  <li>Suggested timing for this practice: <span class="timer">Q1 · 8 min</span> <span class="timer">Q2 · 12 min</span> <span class="timer">Q3 · 25 min</span>, including a 3-minute plan and a 2-minute check.
  Any extra time on the day = checking time.</li>
  <li>No dictionaries, notes or model answers. This is timed practice under exam conditions.</li></ul></div>
  <h2>Question 1 · Form <span class="timer">8 min</span></h2>
  <div class="box"><div class="two" style="align-items:end"><h3>${esc(wr.FORM.title)}</h3><div style="text-align:right">${ar(wr.FORM.ar)}</div></div>
  <p class="small" style="margin:2px 0 6px">Fill in the form in Arabic. One word or a short phrase in each box. The last box needs <b>one full sentence</b>.</p>
  <table class="field">${wr.FORM.fields.map((f, i) => `<tr><td style="width:22px"><b>${i + 1}</b></td><td>${ar(f.ar)}<div class="small">${esc(f.en)}</div></td><td class="blank"></td></tr>`).join('')}</table></div></div>`;

  const q2 = `<div class="page">${header(right)}<h2 style="margin-top:0">Question 2 · Directed writing <span class="timer">12 min</span> <span class="small">about 80–90 words</span></h2>
  <div class="box"><div class="two" style="align-items:end"><h3>${esc(cap(wr.Q2.title.replace(/^Question 2: /, '')))}</h3><div style="text-align:right">${ar(wr.Q2.ar)}</div></div>
  ${arBlock(wr.Q2.rubric[0][1])}
  <table style="margin-top:4px">${wr.Q2.rubric.slice(1).map((r) => `<tr><td style="width:22px"><b>${r[0]}</b></td><td style="width:56%">${arBlock(r[1])}</td><td class="small">${esc(r[2])}</td></tr>`).join('')}</table>
  <p class="small" style="margin:6px 0 0">Remember: a greeting and a closing · past, present and future · check your verb endings.</p></div>
  <div class="lines" dir="rtl" style=""><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  <div class="small" style="margin-top:4px">Word count (approx.): ________</div></div>`;

  const bul = (b, en) => { const a = b.split(' · '); const e = en.split(' · '); return `<table>${a.map((x, i) => `<tr><td style="width:56%">${arBlock('• ' + x)}</td><td class="small">${esc(e[i] || '')}</td></tr>`).join('')}</table>`; };
  const q3 = `<div class="page">${header(right)}<h2 style="margin-top:0">Question 3 · Extended writing <span class="timer">25 min</span> <span class="small">about 130–150 words · choose ONE title</span></h2>
  <div class="two">
  <div class="box"><h3>(أ) ${esc(wr.Q3.a.en)}</h3>${arBlock(wr.Q3.a.title, 'b')}${bul(wr.Q3.a.bullets, wr.Q3.a.bulletsEn)}</div>
  <div class="box"><h3>(ب) ${esc(wr.Q3.b.en)}</h3>${arBlock(wr.Q3.b.title, 'b')}${bul(wr.Q3.b.bullets, wr.Q3.b.bulletsEn)}</div></div>
  <div class="box cream"><h3>3-minute plan <span class="small">(one line per paragraph, then cross it out)</span></h3>
  <table>${[1, 2, 3, 4].map((n) => `<tr><td style="width:22px"><b>${n}</b></td><td style="height:24px"></td></tr>`).join('')}</table>
  <p class="small" style="margin:5px 0 0">I chose title: &nbsp; (أ) <span class="tick"></span> &nbsp; (ب) <span class="tick"></span></p></div>
  <div class="lines" dir="rtl" style=""><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
  <div class="page">${header(right)}<div class="kicker" style="margin-bottom:6px">Question 3 · continued</div>
  <div class="lines" dir="rtl" style=""><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  <div class="box cream" style="margin-top:8px"><h3>Final 2-minute check (tick before you hand in)</h3>
  <div class="three small">
  <div><span class="tick"></span>Every bullet answered (Q2 and Q3)</div><div><span class="tick"></span>Verb endings: who + when (${ar(fem ? 'كَتَبْتُ · نَكْتُبُ · سَأَكْتُبُ' : 'كَتَبْتُ · نَكْتُبُ · سَأَكْتُبُ')})</div>
  <div><span class="tick"></span>Agreement: adjectives, colours, plurals</div><div><span class="tick"></span>Numbers + nouns</div>
  <div><span class="tick"></span>Past, present AND future verbs</div><div><span class="tick"></span>Linkers: ${ar('لِأَنَّ · لٰكِنَّ · ثُمَّ · لِذٰلِكَ')}</div></div></div></div>`;

  return doc(`${code} Writing mock`, [cover, q2, q3], `${code} · ${wr.short} · Writing mock`);
}

// ───────────────────────── exam-day survival sheet (one A4 page)
function survivalSheet() {
  const repair = [
    ['عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟', 'Sorry, could you repeat the question?'],
    ['لَمْ أَفْهَمْ جَيِّدًا. هَلْ يُمْكِنُ أَنْ تَتَكَلَّمَ بِبُطْءٍ؟', 'I didn’t quite understand. Could you speak slowly?'],
    ['مَا مَعْنَى …؟', 'What does … mean?'],
    ['لَحْظَةً مِنْ فَضْلِكَ … دَعْنِي أُفَكِّرُ.', 'One moment please … let me think.'],
    ['أَقْصِدُ أَنَّ … / بِعِبَارَةٍ أُخْرَى …', 'I mean that … / In other words …'],
    ['لَا أَتَذَكَّرُ الكَلِمَةَ، لٰكِنَّهُ شَيْءٌ …', 'I can’t remember the word, but it’s something …'],
    ['هٰذَا سُؤَالٌ صَعْبٌ، وَلٰكِنْ فِي رَأْيِي …', 'That’s a hard question, but in my opinion …'],
  ];
  const qwords = [['أَيْنَ', 'where → place'], ['مَتَى', 'when → time / day'], ['كَيْفَ', 'how → way / transport'], ['لِمَاذَا', 'why → لِأَنَّ'],
    ['صِفْ / صِفِي', 'describe → adjectives'], ['مَا رَأْيُكَ', 'opinion → أَظُنُّ أَنَّ'], ['مَاذَا فَعَلْتَ', 'what did you do → PAST'], ['خِطَطُكَ', 'your plans → FUTURE سَـ']];
  const boost = [['لِأَنَّ … · لِذٰلِكَ …', 'because … · so …'], ['كُنْتُ … أَمَّا الآنَ فَـ …', 'I used to … but now …'], ['سَوْفَ … / فِي المُسْتَقْبَلِ …', 'I will … / in the future …'],
    ['أَكْثَرُ … مِنْ · بَيْنَمَا', 'more … than · whereas'], ['صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', 'it’s true that … but …'], ['لَوْ كُنْتُ …، لَـ …', 'if I were …, I would …']];
  const page = `<div class="page compact" style="font-size:9pt">${header('Exam-day survival sheet<br>Keep it on your desk while revising')}
  ${titleRow('IGCSE Arabic 0544 · Paper 3 Speaking and Paper 4 Writing', 'Exam-day survival sheet', 'دَلِيلُ يَوْمِ الامْتِحَانِ')}
  <div class="two">
  <div class="box navy"><h3>⏱ Timings: Writing</h3><table style="color:#fff">
  <tr><td style="border-color:#2A4B7C"><b>Q1</b> Form</td><td style="border-color:#2A4B7C">≈ 8 min · no empty boxes</td></tr>
  <tr><td style="border-color:#2A4B7C"><b>Q2</b> Email / message</td><td style="border-color:#2A4B7C">≈ 12 min · every bullet · 80–90 words</td></tr>
  <tr><td style="border-color:#2A4B7C"><b>Q3</b> Extended</td><td style="border-color:#2A4B7C">≈ 25 min = 3 plan + 20 write + 2 check</td></tr></table>
  <div style="font-size:8.5pt;margin-top:4px">Extra time on the day? Spend it <b>checking</b>, not adding new risky sentences.</div></div>
  <div class="box navy"><h3>🎙 Timings: Speaking</h3><table style="color:#fff">
  <tr><td style="border-color:#2A4B7C"><b>Prep</b></td><td style="border-color:#2A4B7C">Read every task · underline question words · plan first words</td></tr>
  <tr><td style="border-color:#2A4B7C"><b>Role plays</b></td><td style="border-color:#2A4B7C">Full sentence for every task · the <b>!</b> task is not on your card: listen</td></tr>
  <tr><td style="border-color:#2A4B7C"><b>Conversation</b></td><td style="border-color:#2A4B7C">Answer + reason + another time frame</td></tr></table></div></div>

  <div class="box"><h3>🛟 Repair phrases: never leave a silence</h3>
  <table>${repair.map((r) => `<tr><td style="width:58%">${arBlock(r[0])}</td><td class="small">${esc(r[1])}</td></tr>`).join('')}</table>
  <div class="small" style="margin-top:3px">To a female examiner: ${ar('تُعِيدِي · تَتَكَلَّمِي · مِنْ فَضْلِكِ')}</div></div>

  <div class="two">
  <div class="box"><h3>🔎 Question-word decoder</h3><table>${qwords.map((q) => `<tr><td style="width:44%">${arBlock(q[0])}</td><td class="small">${esc(q[1])}</td></tr>`).join('')}</table></div>
  <div class="box"><h3>🚀 Mark boosters</h3><table>${boost.map((q) => `<tr><td style="width:56%">${arBlock(q[0])}</td><td class="small">${esc(q[1])}</td></tr>`).join('')}</table></div></div>

  <div class="two">
  <div class="box cream"><h3>✅ The five-point writing check</h3><ol style="margin:3px 0 0 18px;padding:0">
  <li><b>Every bullet</b> answered (plus greeting and closing in Q2).</li>
  <li><b>Verb endings:</b> who and when? ${arBlock('ذَهَبْتُ · نَذْهَبُ · سَأَذْهَبُ')}</li>
  <li><b>Agreement:</b> ${arBlock('بَيْتٌ كَبِيرٌ · مَدِينَةٌ كَبِيرَةٌ · حَقِيبَةٌ سَوْدَاءُ')}</li>
  <li><b>Numbers + nouns:</b> ${arBlock('ثَلَاثُ سَاعَاتٍ · عِشْرُونَ طَالِبًا')}</li>
  <li><b>Three time frames</b> and linkers: ${arBlock('لِأَنَّ · لٰكِنَّ · ثُمَّ')}</li></ol></div>
  <div class="box cream"><h3>🌙 The night before and on the day</h3><ul>
  <li>Sleep early, eat breakfast and drink water.</li><li>Pens, ID and a watch ready the night before.</li>
  <li>Read the <b>whole</b> question before you write a word.</li><li>A short correct sentence beats a long broken one.</li>
  <li>Stuck? Use a repair phrase, breathe, and keep going.</li></ul>
  ${arBlock('رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي', 'b')}<div class="small">“My Lord, expand my chest and ease my task for me.” (Ṭā Hā 20:25–26)</div></div></div>
  <div style="text-align:center;margin-top:2px">${ar('بِالتَّوْفِيقِ فِي الامْتِحَانِ!', 'b')} <span class="small">· Good luck in the exam!</span></div></div>`;
  return doc('Exam-day survival sheet', [page], 'Exam-day survival sheet');
}

// ───────────────────────── peer / self-assessment marking grids
function markingGrids() {
  const right = 'Peer and self-assessment<br>Marking grids';
  const band = (cells) => `<tr>${cells.map((c, i) => `<td${i === 0 ? ' style="width:20%;background:#F4F1EA"' : ''}>${c}</td>`).join('')}</tr>`;
  const head4 = '<tr><th>Criterion</th><th style="background:#2E7D57">Secure <span style="font-weight:400">(Core)</span></th><th style="background:#D9861A">Strong <span style="font-weight:400">(Develop)</span></th><th style="background:#C0392B">Excellent <span style="font-weight:400">(Stretch)</span></th></tr>';
  const t = '<span class="tick"></span>';
  const note = `<p class="small" style="margin:0 0 8px"><b>Teacher note:</b> these are student-friendly grids built on the areas the Cambridge mark scheme rewards
  (completing the task and communicating clearly, range of language, accuracy, and pronunciation in speaking). They are for peer and self-assessment in class.
  For marks and grades, use the official mark scheme for your syllabus year.</p>`;

  const rpTable = (label) => `<div class="box"><h3>Role play ${label} <span class="small">Card: ____ · examiner: ____________</span></h3>
  <table><tr><th style="width:12%">Task</th><th style="background:#2E7D57">2 · Fully done<br><span style="font-weight:400">clear, complete sentence; the message gets across</span></th>
  <th style="background:#D9861A">1 · Partly done<br><span style="font-weight:400">one word only, part missing, or I had to help</span></th>
  <th style="background:#C0392B">0 · Not done<br><span style="font-weight:400">no answer, or the message is not understood</span></th></tr>
  ${[1, 2, 3, 4, '!'].map((n) => `<tr><td><b>${n === '!' ? '! Unexpected' : 'Task ' + n}</b></td><td>${t}</td><td>${t}</td><td>${t}</td></tr>`).join('')}
  <tr><td colspan="4" class="small"><b>Total: ____ / 10</b> &nbsp;·&nbsp; Was the unexpected question answered with a full sentence? &nbsp; yes ${t} no ${t}</td></tr></table></div>`;

  const sp1 = `<div class="page">${header(right)}${titleRow('Paper 3 · peer assessment · examiner completes, then discusses with the candidate', 'Speaking marking grid', 'شَبَكَةُ تَقْيِيمِ المُحَادَثَةِ')}
  ${note}${nameRow('Examiner (partner)')}${rpTable('1')}${rpTable('2')}
  <div class="box cream small"><b>How to give feedback in 1 minute:</b> say one thing that was <b>fully done</b> (a 2), then one task that was <b>partly done</b> (a 1) and what full sentence would have made it a 2.</div></div>`;

  const sp2 = `<div class="page">${header(right)}${titleRow('Paper 3 · topic conversation · tick ONE box per row', 'Speaking marking grid: conversation', 'تَقْيِيمُ المُحَادَثَةِ')}
  <table>${head4}
  ${band(['<b>Communication</b><br><span class="small">answering the question</span>', `${t}Answers every question with a full sentence`, `${t}Gives reasons and a second detail; few pauses`, `${t}Develops answers fully: opinions, examples, balance`])}
  ${band(['<b>Range</b><br><span class="small">vocabulary and structures</span>', `${t}Topic words used correctly; simple sentences`, `${t}Linkers and <b>two</b> time frames${arBlock('لِأَنَّ · لٰكِنَّ · ثُمَّ')}`, `${t}Three time frames + comparison, concession or <i>law … la-</i>`])}
  ${band(['<b>Accuracy</b><br><span class="small">grammar</span>', `${t}Meaning is clear, despite errors`, `${t}Most verb endings and agreements correct`, `${t}Errors are rare, even in complex sentences`])}
  ${band(['<b>Pronunciation and fluency</b>', `${t}Understandable; some long pauses`, `${t}Clear sounds; keeps going${arBlock('ح · ع · ق')}`, `${t}Natural flow; uses repair phrases smoothly`])}
  </table>
  <div class="two" style="margin-top:9px">
  <div class="box"><h3>I heard these good structures</h3><div class="lines" style="border:0;padding:0"><div></div><div></div><div></div></div></div>
  <div class="box"><h3>Time frames heard</h3><p>${t}past ${ar('ذَهَبْتُ')} &nbsp; ${t}present ${ar('أَذْهَبُ')} &nbsp; ${t}future ${ar('سَأَذْهَبُ')}</p>
  <h3 style="margin-top:6px">Repair phrase used instead of silence?</h3><p>${t}yes &nbsp; ${t}no &nbsp; ${t}not needed</p></div></div>
  <div class="two"><div class="box" style="background:#E6F2EC"><h3>WWW: what went well</h3><div style="height:24mm"></div></div>
  <div class="box" style="background:#FFF4E2"><h3>EBI: even better if…</h3><div style="height:24mm"></div></div></div>
  <div class="box cream small"><b>Self-assessment:</b> my target for the real exam is __________________________________________________</div></div>`;

  const wr1 = `<div class="page">${header(right)}${titleRow('Paper 4 · peer or self-assessment · swap papers, use a different colour pen', 'Writing marking grid', 'شَبَكَةُ تَقْيِيمِ الكِتَابَةِ')}
  ${nameRow('Checked by')}
  <div class="box"><h3>Question 1 · Form</h3><table><tr><th>Box</th>${[1, 2, 3, 4, 5, 6, 7, 8].map((n) => `<th style="text-align:center">${n}</th>`).join('')}<th>Total</th></tr>
  <tr><td class="small">✔ correct and in Arabic</td>${[1, 2, 3, 4, 5, 6, 7, 8].map(() => `<td style="text-align:center">${t}</td>`).join('')}<td><b>__ / 8</b></td></tr></table>
  <p class="small" style="margin:4px 0 0">Check: does the word agree (masculine / feminine)? Is box 8 a <b>full sentence</b>?</p></div>
  <div class="box"><h3>Question 2 · Directed writing</h3>
  <table><tr><th>Bullet point covered?</th><th style="text-align:center">1</th><th style="text-align:center">2</th><th style="text-align:center">3</th><th style="text-align:center">4</th><th>Greeting / closing</th><th>≈ 80–90 words</th></tr>
  <tr><td class="small">tick if answered clearly</td><td style="text-align:center">${t}</td><td style="text-align:center">${t}</td><td style="text-align:center">${t}</td><td style="text-align:center">${t}</td><td>${t}</td><td>${t}</td></tr></table>
  <table style="margin-top:6px">${head4}
  ${band(['<b>Language</b>', `${t}Simple, clear sentences; topic words`, `${t}Linkers and past + present + future`, `${t}Varied structures: <i>maʿa anna</i>, comparatives, <i>idhā … fa-</i>`])}
  ${band(['<b>Accuracy</b>', `${t}Meaning clear despite errors`, `${t}Most endings and agreements right`, `${t}Very few errors`])}</table></div>
  <div class="box cream small"><b>Five-point check, did the writer…</b> ${t}answer every bullet ${t}get verb endings right ${t}make adjectives agree ${t}write numbers + nouns correctly ${t}use three time frames?</div></div>`;

  const wr2 = `<div class="page">${header(right)}${titleRow('Paper 4 · Question 3 · tick ONE box per row', 'Writing marking grid: extended writing', 'تَقْيِيمُ الكِتَابَةِ المُطَوَّلَةِ')}
  <p class="small" style="margin-top:0">Title chosen: (أ) ${t} (ب) ${t} &nbsp;·&nbsp; All four bullet points covered? ${t}1 ${t}2 ${t}3 ${t}4 &nbsp;·&nbsp; About 130–150 words? ${t}</p>
  <table>${head4}
  ${band(['<b>Content and development</b>', `${t}Every bullet answered, simply`, `${t}Every bullet answered with reasons and details`, `${t}Every bullet developed: examples, opinions, balance`])}
  ${band(['<b>Organisation</b>', `${t}Paragraphs in a sensible order`, `${t}Clear paragraphs; linkers between ideas`, `${t}Strong opening and conclusion; ideas flow`])}
  ${band(['<b>Range of language</b>', `${t}Topic words; simple sentences; one past verb`, `${t}Three time frames and linkers${arBlock('لِأَنَّ · لٰكِنَّ · عِنْدَمَا')}`, `${t}Complex structures: concession, passive, <i>mimmā</i>, <i>law … la-</i>`])}
  ${band(['<b>Accuracy</b>', `${t}Meaning clear despite errors`, `${t}Most verbs, agreements and numbers correct`, `${t}Errors are rare, even in long sentences`])}
  </table>
  <div class="box" style="margin-top:9px"><h3>Best sentence in this piece (copy it here)</h3><div class="lines" dir="rtl" style="border:0;padding:0"><div></div><div></div></div></div>
  <div class="box"><h3>One sentence to correct (copy it, then write the correction)</h3><div class="lines" dir="rtl" style="border:0;padding:0"><div></div><div></div><div></div></div></div>
  <div class="two"><div class="box" style="background:#E6F2EC"><h3>WWW: what went well</h3><div style="height:20mm"></div></div>
  <div class="box" style="background:#FFF4E2"><h3>EBI: even better if…</h3><div style="height:20mm"></div></div></div></div>`;

  return doc('Marking grids', [sp1, sp2, wr1, wr2], 'Peer and self-assessment marking grids');
}

// ───────────────────────── build
function pdf(name, html) {
  fs.mkdirSync(TMP, { recursive: true }); fs.mkdirSync(OUT, { recursive: true });
  const src = path.join(TMP, name + '.html'); const out = path.join(OUT, name + '.pdf');
  fs.writeFileSync(src, html);
  execFileSync(CHROME, ['--headless', '--no-sandbox', '--disable-gpu', '--no-pdf-header-footer', '--print-to-pdf-no-header',
    `--print-to-pdf=${out}`, 'file://' + src], { stdio: 'ignore' });
  console.log(out);
}
const MOCKS = [['FR-L05', require('./content/xp-r-l05')], ['FR-L06', require('./content/xp-r-l06')]];
for (const [code, d] of MOCKS) {
  const t = d.write.fileTitle;
  pdf(`${code}_Student_Speaking_Mock_${t}`, speakingBooklet(d, code));
  pdf(`${code}_Student_Writing_Mock_${t}`, writingPaper(d, code));
}
pdf('Exam_Day_Survival_Sheet', survivalSheet());
pdf('Marking_Grids_Peer_and_Self_Assessment', markingGrids());
