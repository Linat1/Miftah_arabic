'use strict';
/*
 * Exam-practice workshops (Topic A onwards): one SPEAKING workshop (Paper 3 — role plays + topic conversation, run in breakout rooms) and
 * one WRITING workshop (Paper 4 — Q1 form filling, Q2 directed writing, Q3 extended writing) per Topic lesson. All scenarios, questions and
 * model answers are teacher-made for the lesson’s topic and grammar; every task is tiered Core (weak) · Develop (intermediate) · Stretch
 * (advanced). Decks are written to <Topic folder>/Exam_Practice.
 */
const C = require('./common');
const { translit } = require('./d-common');

const TOPICS = {
  A: { code: 'AT-A', name: 'Advanced Topic A · Everyday Activities', folder: 'Topic_A', level: 'Topic A · A1+ → B1' },
};

function meta(t, n, kind, o) {
  const T = TOPICS[t];
  const m = C.unitMeta({ code: T.code, kicker: `ADVANCED TOPIC ${t} · EXAM PRACTICE`, name: `${T.name} · exam practice`, level: T.level, site: `Advanced Topics › Topic ${t}`, footer: `Topic ${t} · ${kind} workshop` })({
    n, fileTitle: `${kind}_Workshop_${o.fileTitle}`, chip: `${kind} workshop`, title: o.title, arabic: o.arabic, focus: o.focus, icon: o.icon, iconSet: 'fa6',
  });
  return { ...m, outDir: `${T.folder}/Exam_Practice` };
}

const title = (o) => ({ type: 'title', notes: o.notes });
const map = (steps, support, notes) => ({ type: 'journey', stage: 'welcome', eyebrow: 'Today’s workshop map', title: 'Exam practice, step by step', ar: 'خَرِيطَةُ الوَرْشَةِ', steps: steps.map(([stage, min, text, ar]) => ({ stage, min, text, ar })), support, notes });

// a word with I / he / she / they (or m. / f. / pl.) forms
const word = (n, ar, en, forms, o = {}) => ({
  n, ar, en, tr: o.tr || translit(ar), core: o.core !== false, tag: o.tag || (forms ? forms.map((f) => f[0]).join(' · ') : undefined),
  forms: forms ? [...forms].reverse().map(([l, a]) => ({ l, ar: a })) : undefined,
});
const vocab = (o) => ({ type: 'vocab', stage: 'teach', min: o.min || 2, eyebrow: o.eyebrow, title: o.title, ar: o.ar, items: o.items, notes: o.notes });

// ---------- speaking
// role-play card: examiner’s question · your task · Core help
function roleCard(rp) {
  return {
    type: 'formsTable', stage: 'youdo', min: rp.min || 6, eyebrow: `Role play ${rp.id} · ${rp.level} · ${rp.setting}`, title: rp.title, ar: rp.ar, ltr: true,
    cols: [{ label: '#', w: 0.55 }, { label: 'The examiner says', w: 4.4, size: 17 }, { label: 'Your task', w: 3.9 }, { label: 'Help (Core)', w: 3.48, size: 15 }],
    rows: rp.tasks.map((k, i) => ({ core: !!k.core, cells: [k.unexpected ? `${i + 1} !` : String(i + 1), k.ex, k.task, k.help] })),
    foot: `You are: ${rp.you}  ·  The examiner is: ${rp.them}  ·  ! = unexpected question: listen carefully.`,
    notes: `ROLE PLAY ${rp.id} (${rp.level}) — ${rp.setting}.
SET-UP IN THE BREAKOUT ROOM: A = examiner (reads the left column ONLY — the questions, in order), B = candidate (sees the task column; Core may use the help column), C = observer (ticks the feedback checklist). 1 minute preparation, about 3 minutes speaking, 1 minute feedback, then rotate.
Task ! is the unexpected question: in the exam the candidate has not seen it — the examiner should read it without warning.
To a girl, the examiner uses the feminine: ${rp.girl || 'تَسْتَيْقِظِينَ · تَتَنَاوَلِينَ · تَذْهَبِينَ · تَفْعَلِينَ'}.
${rp.notes || ''}`,
  };
}
// model role play: examiner · model answer (with English)
function roleModel(rp) {
  return {
    type: 'formsTable', stage: 'feedback', min: rp.modelMin || 2, eyebrow: `Model answer · role play ${rp.id} · ${rp.level}`, title: `Role play ${rp.id}: a full-mark performance`, ar: 'نَمُوذَجُ الإِجَابَةِ', ltr: true,
    cols: [{ label: '#', w: 0.55 }, { label: 'The examiner says', w: 4.1, size: 16 }, { label: 'Model answer (with English)', w: 7.68, size: 18 }],
    rows: rp.tasks.map((k, i) => ({ cells: [String(i + 1), k.ex, { ar: k.model, sub: k.modelEn }] })),
    foot: rp.modelFoot || 'Every task answered with a full sentence — short, clear and accurate is enough for the role play.',
    notes: `MODEL — show AFTER the groups have performed. Groups compare: which task did we answer less fully? Read the model aloud in pairs (examiner / candidate).\n${rp.modelNotes || ''}`,
  };
}
// topic-conversation questions for one tier, with starters
function convCard(c) {
  return {
    type: 'formsTable', stage: 'youdo', min: c.min || 5, eyebrow: `Topic conversation · ${c.level} questions`, title: c.title, ar: c.ar, ltr: true,
    cols: [{ label: '#', w: 0.55 }, { label: 'The examiner asks', w: 5.2, size: 17 }, { label: 'Meaning', w: 2.9 }, { label: 'Start like this', w: 3.68, size: 15 }],
    rows: c.qs.map((q, i) => ({ core: c.level === 'Core', cells: [String(i + 1), q.q, q.en, q.start] })),
    foot: c.foot,
    notes: `TOPIC CONVERSATION — ${c.level}. Examiner asks the questions in order and may add “لِمَاذَا؟ / هَلْ يُمْكِنُ أَنْ تَشْرَحَ أَكْثَرَ؟” to push for more. Candidate aims for ${c.aim}.\n${c.notes || ''}`,
  };
}
function convModel(c, from, to, part) {
  const qs = c.qs.slice(from, to);
  return {
    type: 'formsTable', stage: 'feedback', min: c.modelMin || 2, eyebrow: `Model answers · topic conversation · ${c.level}${part ? ` · ${part}` : ''}`, title: `${c.level}: what a strong answer sounds like`, ar: 'نَمُوذَجُ الإِجَابَةِ', ltr: true,
    cols: [{ label: '#', w: 0.55 }, { label: 'Question', w: 3.6, size: 15 }, { label: 'Model answer (with English)', w: 8.18, size: 17 }],
    rows: qs.map((q, i) => ({ cells: [String(from + i + 1), q.q, { ar: q.model, sub: q.modelEn }] })),
    foot: c.modelFoot,
    notes: `MODEL ANSWERS (${c.level}) — show after the groups have practised. Students underline one phrase to “steal” for their own answer.\n${c.modelNotes || ''}`,
  };
}

// ---------- writing
function formTask(f) {
  return {
    type: 'formsTable', stage: 'youdo', min: f.min || 6, eyebrow: 'Question 1 · form filling', title: f.title, ar: f.ar, ltr: true,
    cols: [{ label: '#', w: 0.55 }, { label: 'The form', w: 5.0, size: 17 }, { label: 'What to write', w: 3.6 }, { label: 'Your answer', w: 3.18 }],
    rows: f.fields.map((x, i) => ({ core: !!x.core, cells: [String(i + 1), x.ar, x.en, '______________'] })),
    foot: f.foot,
    notes: `QUESTION 1 — FORM FILLING. ${f.notes || ''}`,
  };
}
function formModel(f) {
  return {
    type: 'formsTable', stage: 'feedback', min: 2, eyebrow: 'Question 1 · model answers', title: `${f.title}: model answers`, ar: 'نَمُوذَجُ الإِجَابَةِ', ltr: true,
    cols: [{ label: '#', w: 0.55 }, { label: 'The form', w: 4.4, size: 16 }, { label: 'Model answer', w: 4.7, size: 18 }, { label: 'English', w: 2.68 }],
    rows: f.fields.map((x, i) => [String(i + 1), x.ar, x.model, x.modelEn]).map((cells) => ({ cells })),
    foot: f.modelFoot || 'Short answers are fine — but they must be accurate, in Arabic, and answer exactly what the form asks.',
    notes: 'MODEL — students check their own form and correct one answer in a different colour.',
  };
}
const words = (s) => s.replace(/[.،؛:!؟?«»"]/g, ' ').split(/\s+/).filter((w) => /[؀-ۿ]/.test(w)).length;
function model(o) {
  return {
    type: 'modelAnswer', stage: 'feedback', min: o.min || 2, eyebrow: o.eyebrow, title: o.title, ar: o.ar || 'نَمُوذَجُ الإِجَابَةِ', text: o.text, en: o.en, find: o.find,
    notes: `MODEL ANSWER (${words(o.text)} words). ${o.notes || ''}`,
  };
}

module.exports = { ...C, TOPICS, meta, title, map, word, vocab, roleCard, roleModel, convCard, convModel, formTask, formModel, model, words };

// =====================================================================================================================
// Whole-deck builders (L02 onwards): one data object per lesson → the same structure as the AT-A-L01 workshops.
// =====================================================================================================================
const closeX = (sp, bye) => ({ ...sp, byeEn: bye, nextLabel: 'NEXT WORKSHOP' });
function lint(obj, path = '') { // warn about split prefixes (tatweel) in slide text
  if (typeof obj === 'string') { if (/[؀-ۿ]ـ|ـ[\s…_]/.test(obj) && !/notes/.test(path)) console.warn(`  ⚠ tatweel in ${path}: ${obj.slice(0, 60)}`); return; }
  if (Array.isArray(obj)) obj.forEach((x, i) => lint(x, `${path}[${i}]`));
  else if (obj && typeof obj === 'object') Object.entries(obj).forEach(([k, v]) => lint(v, `${path}.${k}`));
}

function speakingDeck(d) {
  lint(d, 'speak');
  const meta = module.exports.meta('A', d.n, 'Speaking', { fileTitle: d.fileTitle, title: `Speaking Workshop — ${d.title}`, arabic: `وَرْشَةُ التَّحَدُّثِ — ${d.ar}`, focus: d.focus, icon: d.icon || 'FaComments' });
  const code = `AT-A-L${String(d.n).padStart(2, '0')}`;
  const slides = [
    title({ notes: `WORKSHOP AT A GLANCE — 60 minutes on Teams, mostly in breakout rooms of three.
0–2 Welcome · 2–6 How Paper 3 works · 6–10 Language bank · 10–13 Breakout routine · 13–33 Role plays A–D in rooms (rotate roles) · 33–37 Role-play models (main room) · 37–50 Topic conversation in rooms · 50–55 Conversation models · 55–58 Feedback + self-check · 58–60 Close.
Content: teacher-made exam scenarios for Advanced Topic A, Lesson ${d.n} (${d.title}, ${code}), using that lesson’s language${d.grammar ? ` (${d.grammar})` : ''}. Every task has Core · Develop · Stretch support and a model answer.
EXAM FORMAT: Paper 3 Speaking = a role play and a topic conversation, as in the Cambridge IGCSE Arabic 0544 speaking test. Check timings and marks against the current syllabus and the past paper you use.
BREAKOUT ROOMS: set up rooms of three before the lesson. Share the deck (or a PDF) so every room can see the cards.${d.planNote ? `\n${d.planNote}` : ''}` }),
    C.welcomeSlide(),
    map([
      ['teach', 8, 'How the speaking exam works; the language you need.', 'كَيْفَ'],
      ['youdo', 20, 'Role plays A–D in breakout rooms.', 'تَمْثِيلُ الدَّوْرِ'],
      ['feedback', 4, 'Role-play models.', 'النَّمُوذَجُ'],
      ['youdo', 13, 'Topic conversation in breakout rooms.', 'المُحَادَثَةُ'],
      ['feedback', 9, 'Conversation models, feedback, self-check.', 'قَيِّمْ'],
    ], 'In the rooms everyone has a job: examiner, candidate or observer. You swap after each role play, so everybody speaks.', 'MAP (1 min) — most of the lesson happens in breakout rooms; the teacher visits each room.'),
    {
      type: 'explain', stage: 'teach', min: 3, eyebrow: 'Teach · Paper 3 Speaking', title: 'How the speaking exam works', ar: 'امْتِحَانُ التَّحَدُّثِ',
      pointsHead: 'THE TWO PARTS WE PRACTISE TODAY',
      points: [
        'ROLE PLAY — a card with a situation and tasks. The examiner asks; you answer every task in a full, clear sentence. One task is unexpected (!).',
        'TOPIC CONVERSATION — the examiner asks questions about a topic you know. Short answers are not enough: develop each one.',
        'Examiners reward: completing the tasks, a range of language (tenses, linking words, opinions) and accuracy.',
        d.tip || 'Never stay silent — use a repair phrase and keep going.',
      ],
      exHead: d.exHead || 'REPAIR PHRASES',
      examples: d.repair || [
        { ar: 'عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟', en: 'Sorry, could you repeat the question?' },
        { ar: 'لَحْظَةً، دَعْنِي أُفَكِّرُ …', en: 'One moment, let me think …' },
        { ar: 'أَقْصِدُ …', en: 'I mean …' },
      ],
      notes: `TEACH (3 min). Role play = precise and complete; conversation = develop. ${d.teachNote || 'Choral repetition of the repair phrases. To a girl: تُعِيدِي.'}`,
    },
    vocab({ eyebrow: d.words1.eyebrow, title: d.words1.title, ar: d.words1.ar, items: d.words.slice(0, 6), notes: d.words1.notes }),
    vocab({ eyebrow: d.words2.eyebrow, title: d.words2.title, ar: d.words2.ar, items: d.words.slice(6, 12), notes: d.words2.notes }),
    {
      type: 'challenge', stage: 'youdo', min: 3, eyebrow: 'Breakout rooms · how we work', title: 'Examiner · candidate · observer', ar: 'فِي الغُرَفِ',
      chip: 'BREAKOUT ROUTINE', icon: '🎧', head: 'Three jobs, then swap', text: 'Rooms of three. A = examiner (reads the questions only). B = candidate (answers from the task card). C = observer (ticks the checklist and gives one WWW and one EBI).',
      steps: ['1 minute: the candidate reads the card and plans (no writing full sentences).', 'About 3 minutes: the role play — the examiner reads every question in order.', '1 minute: the observer gives feedback (WWW + EBI).', 'Swap jobs and do the next role play. Then the topic conversation.'],
      routes: {
        core: 'Role plays A and B, with the help column. Conversation: Core questions.',
        develop: 'Role plays B and C, help column covered. Conversation: Core + Develop questions.',
        stretch: 'Role plays C and D, no help. Conversation: Develop + Stretch questions, push with “why?”.',
      },
      phrases: [['دَوْرُكَ!', 'your turn!'], ['أَحْسَنْتَ! / أَحْسَنْتِ!', 'well done! (m. / f.)'], ['تَكَلَّمْ أَكْثَرَ، مِنْ فَضْلِكَ', 'say more, please'], ['لِمَاذَا؟', 'why?']],
      notes: 'BREAKOUT ROUTINE (3 min, in the main room). Same-level rooms make the routes simple; mixed rooms work if the strongest student is examiner first. Post the room timer in the chat. Visit every room for about two minutes.',
    },
    ...d.RP.map(roleCard),
    {
      type: 'formsTable', stage: 'youdo', min: 1, eyebrow: 'Observer · feedback checklist', title: 'Observer: tick and give feedback', ar: 'وَرَقَةُ المُلَاحِظِ', ltr: true,
      cols: [{ label: 'The candidate …', w: 6.2 }, { label: 'Route', w: 1.6 }, { label: '✓ / ✗', w: 1.2 }, { label: 'Example you heard', w: 3.33 }],
      rows: [
        { core: true, cells: ['answered EVERY task, including the unexpected one', 'Core', '', ''] },
        { core: true, cells: [d.checkCore || 'used full sentences with correct verb endings', 'Core', '', ''] },
        { cells: [d.checkDevelop || 'added a time, a sequence word or a frequency word', 'Develop', '', ''] },
        { cells: ['gave a reason (li-anna) or an opinion (fī ra’yī)', 'Develop', '', ''] },
        { cells: ['used more than one time frame (past / future)', 'Stretch', '', ''] },
        { cells: ['kept going with a repair phrase instead of silence', 'All', '', ''] },
      ],
      foot: 'Feedback in the room: one WWW (what went well) + one EBI (even better if …).',
      notes: 'Observers keep this slide open (or copy the six points into their book). Collect one strong WWW per room afterwards.',
    },
    ...d.RP.map(roleModel),
    ...d.CONV.map(convCard),
    convModel(d.CONV[0], 0, 5),
    convModel(d.CONV[1], 0, 5),
    convModel(d.CONV[2], 0, 3, 'part 1'),
    convModel(d.CONV[2], 3, 5, 'part 2'),
    C.selfCheckSlide(d.selfCheck),
    closeX(C.closeSlide({ nextCode: `${code} · Writing workshop`, nextTitle: 'Form filling, directed writing and extended writing', nextAr: 'وَرْشَةُ الكِتَابَةِ', remember: d.remember || 'Remember: in the role play answer EVERY task; in the conversation, develop every answer.' }), 'Well done — great speaking practice today!'),
  ];
  return { meta, slides };
}

function writingDeck(d) {
  lint(d, 'write');
  const meta = module.exports.meta('A', d.n, 'Writing', { fileTitle: d.fileTitle, title: `Writing Workshop — ${d.title}`, arabic: `وَرْشَةُ الكِتَابَةِ — ${d.ar}`, focus: d.focus, icon: d.icon || 'FaPenToSquare' });
  const code = `AT-A-L${String(d.n).padStart(2, '0')}`;
  const nextCode = d.n < 12 ? `AT-A-L${String(d.n + 1).padStart(2, '0')}` : null;
  const check = (label, text, lo, hi) => { const n = words(text); if (n < lo || n > hi) console.warn(`  ⚠ ${code} ${label}: ${n} words (target ${lo}–${hi})`); return n; };
  check('Q2 core', d.Q2.core.text, 55, 90); check('Q2 full', d.Q2.full.text, 80, 95);
  d.Q3.models.forEach((m) => check(`Q3 ${m.which} ${m.level}`, m.text, m.level === 'Core' ? 110 : 130, 155));
  const slides = [
    title({ notes: `WORKSHOP AT A GLANCE — 60 minutes on Teams; individual writing with live feedback (shared document or paper + photo).
0–2 Welcome · 2–6 How Paper 4 works · 6–14 Q1 form filling + model · 14–17 Q2 the task, in English and Arabic · 17–19 Q2 frames (Core) · 19–31 Q2 writing · 31–35 Q2 models · 35–38 Q3 choose a title + plan · 38–54 Q3 writing (Stretch) / Q2 redraft (Core) · 54–58 Q3 models + self-check · 58–60 Close.
Content: teacher-made exam questions for Advanced Topic A, Lesson ${d.n} (${d.title}, ${code}). Every question has Core · Develop · Stretch support; models are given at two levels (a secure Core answer and a full-mark answer).
EXAM FORMAT: Paper 4 Writing — Q1 form filling, Q2 directed writing (about 80–90 words), Q3 extended writing (one title from two, about 130–150 words), following the Cambridge IGCSE Arabic 0544 format. Check word counts and marks against the current syllabus and the past paper you use.
Q3 in one lesson: Stretch students write Q3 in class; Core students redraft Q2 and plan Q3, then write Q3 for homework.` }),
    C.welcomeSlide(),
    map([
      ['teach', 4, 'How the writing paper works.', 'كَيْفَ'],
      ['youdo', 8, 'Question 1: fill in the form.', 'الاسْتِمَارَةُ'],
      ['youdo', 17, `Question 2: ${d.Q2.short}.`, 'الرِّسَالَةُ'],
      ['youdo', 23, 'Question 3: extended writing (choose a title).', 'المَقَالُ'],
      ['feedback', 6, 'Model answers and self-check.', 'قَيِّمْ'],
    ], 'Core students: Questions 1 and 2 today, with frames; plan Question 3 and finish it at home. Stretch: all three questions in class.', 'MAP (1 min).'),
    {
      type: 'explain', stage: 'teach', min: 3, eyebrow: 'Teach · Paper 4 Writing', title: 'How the writing exam works', ar: 'امْتِحَانُ الكِتَابَةِ',
      pointsHead: 'THREE QUESTIONS',
      points: [
        'Q1 FORM FILLING — short answers (a word or a phrase) in Arabic. Answer exactly what each box asks.',
        'Q2 DIRECTED WRITING — about 80–90 words. Cover EVERY bullet point; a missing bullet loses marks.',
        'Q3 EXTENDED WRITING — choose ONE title, about 130–150 words. Show range: past, present and future, opinions, reasons, linking words.',
        d.checkTip || 'Check: verb endings, agreement (m. / f. / pl.), and the right tense for each bullet.',
      ],
      exHead: 'WORDS THAT LIFT YOUR WRITING',
      examples: d.lift,
      notes: 'TEACH (3 min). The two biggest losses: a missed bullet point (Q2) and staying in one tense (Q3). Word counts are a guide: far too short cannot cover the task; far too long creates errors.',
    },
    formTask({ ...d.FORM, min: 6 }),
    formModel(d.FORM),
    {
      type: 'stretchTask', stage: 'youdo', min: 3, eyebrow: 'Question 2 · directed writing · about 80–90 words', title: d.Q2.title, ar: d.Q2.ar, chip: 'Q2 · DIRECTED WRITING',
      task: d.Q2.task, checklist: d.Q2.checklist, phrases: d.Q2.phrases, bankHead: 'USEFUL LANGUAGE',
      notes: `Q2 TASK (3 min to read and plan). Students number the four bullets 1–4 in the margin and tick each one as they write it. ${d.Q2.notes || ''}`,
    },
    {
      type: 'formsTable', stage: 'youdo', min: 2, eyebrow: 'Question 2 · the task in Arabic (as in the exam)', title: 'Read the Arabic rubric', ar: 'نَصُّ السُّؤَالِ', ltr: true,
      cols: [{ label: 'Bullet', w: 1.2 }, { label: 'In Arabic', w: 6.8, size: 18 }, { label: 'In English', w: 4.33 }],
      rows: d.Q2.rubric.map(([b, ar, en]) => ({ cells: [b, ar, en] })),
      foot: 'In the exam the instructions are in Arabic: underline the question word in each bullet.',
      notes: `Question words: ${d.Q2.qwords || 'مَتَى (when) · كَيْفَ (how) · مَاذَا (what) · لِمَاذَا (why) · أَيْنَ (where) · كَمْ (how many / much)'}.`,
    },
    {
      type: 'formsTable', stage: 'youdo', min: 12, eyebrow: 'Question 2 · Core frames (Develop: use them only if stuck)', title: 'Write with these frames', ar: 'قَوَالِبُ الكِتَابَةِ', ltr: true,
      cols: [{ label: 'Bullet', w: 1.2 }, { label: 'Frame', w: 7.0, size: 18 }, { label: 'English', w: 4.13 }],
      rows: d.Q2.frames.map(([b, ar, en]) => ({ core: true, cells: [b, ar, en] })),
      foot: d.Q2.framesFoot || 'Develop: add a frequency word and a “but” (lākin). Stretch: write without frames and add a second opinion.',
      notes: 'WRITE (12 min). Live feedback: check bullet coverage first, then verb endings and agreement. Core completes the frames; Develop adds detail; Stretch writes freely and reaches 90 words.',
    },
    model({ eyebrow: 'Question 2 · Core model · a secure answer', title: 'Q2 Core model: every bullet covered', ...d.Q2.core, notes: `A Core model: every bullet answered in short, accurate sentences. Show how ONE extra detail per bullet brings it to 80–90 words. ${d.Q2.core.notes || ''}` }),
    model({ eyebrow: 'Question 2 · full-mark model', title: d.Q2.fullTitle || 'Q2 full-mark model: detail, linking, opinion', ...d.Q2.full, notes: `Full-mark model: all four bullets, a range of linking words, an opinion with a reason and a contrast. Students compare with their own: what can I add? ${d.Q2.full.notes || ''}` }),
    {
      type: 'formsTable', stage: 'youdo', min: 3, eyebrow: 'Question 3 · extended writing · about 130–150 words · choose ONE', title: 'Question 3: choose one title', ar: 'اخْتَرْ عُنْوَانًا وَاحِدًا', ltr: true,
      cols: [{ label: 'Title', w: 1.1 }, { label: 'In Arabic', w: 6.6, size: 17 }, { label: 'In English', w: 4.63 }],
      rows: [
        { cells: ['(أ)', d.Q3.a.title, d.Q3.a.en] }, { cells: ['', d.Q3.a.bullets, d.Q3.a.bulletsEn] },
        { cells: ['(ب)', d.Q3.b.title, d.Q3.b.en] }, { cells: ['', d.Q3.b.bullets, d.Q3.b.bulletsEn] },
      ],
      foot: 'Cover all four points. Use three time frames (present · past · future), opinions with reasons, and linking words.',
      notes: 'Q3 (3 min to choose and read). Title (أ) suits Core and Develop; title (ب) suits Stretch.',
    },
    {
      type: 'explain', stage: 'youdo', min: 3, eyebrow: 'Question 3 · plan before you write (4 paragraphs)', title: 'A four-paragraph plan', ar: 'خُطَّةُ الكِتَابَةِ',
      pointsHead: 'ONE PARAGRAPH FOR EACH POINT', points: d.Q3.plan, exHead: 'ONE SENTENCE PER TIME FRAME', examples: d.Q3.frames,
      callout: { head: 'ROUTES', text: 'Core: title (أ), one or two sentences per paragraph, then finish at home. Develop: three sentences per paragraph. Stretch: title (ب) with a contrast and a conditional.' },
      notes: 'PLAN (3 min) then WRITE (16 min). Check the plan before students write: four paragraphs = four bullet points.',
    },
    ...d.Q3.models.map((m) => model({
      eyebrow: `Question 3 · title (${m.which}) · ${m.level === 'Core' ? 'Core model' : 'full-mark model'}`,
      title: `Q3 (${m.which}) ${m.level === 'Core' ? 'Core model: clear and complete' : `full-mark model${m.subtitle ? `: ${m.subtitle}` : ': range and accuracy'}`}`,
      text: m.text, en: m.level === 'Core' ? m.en : undefined, find: m.find, min: 2, notes: `${m.notes || ''}${m.level === 'Core' ? '' : `\nENGLISH SUMMARY (read aloud or paste in the chat for Core students): ${m.en}`}`,
    })),
    C.selfCheckSlide(d.selfCheck),
    closeX(C.closeSlide(nextCode
      ? { nextCode: `${nextCode} · Exam practice`, nextTitle: 'Speaking and writing workshops — the next Topic A lesson', nextAr: 'وَرْشَةُ التَّدْرِيبِ', remember: d.remember || 'Remember: cover every bullet point, check your verb endings, and use three time frames in Question 3.' }
      : { nextCode: 'Topic B', nextTitle: 'Exam practice continues with the next topic', nextAr: 'المِحْوَرُ التَّالِي', remember: d.remember || 'Topic A exam practice complete — well done!' }), 'Well done — great writing practice today!'),
  ];
  return { meta, slides };
}

module.exports.speakingDeck = speakingDeck;
module.exports.writingDeck = writingDeck;
module.exports.lint = lint;
