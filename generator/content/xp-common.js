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
