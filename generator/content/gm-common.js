'use strict';
/*
 * Miftah Grammar Mastery (website: Mastery & Revision › Grammar). One deck per website grammar lesson, in the school sequence
 * Welcome → Do Now → Objectives → Key words → Grammar → Quick check → I Do → We Do → You Do → Feedback → Preparation.
 * Website data: site-data/grammar/<page>.json (lede, explanation outline, entry check, mini-checks, game items, skills tasks,
 * mastery check). Each lesson file supplies the full teaching layer: grammar words, step-by-step explanation slides with
 * worked examples, I Do model, sorter, repair, reading questions, speaking, routes, frames, model answer and preparation.
 * Lessons are labelled by website code only (GM-ART-01 …); pages without a printed code use the area code (GM-SCR, GM-PRO, GM-NUM).
 */
const C = require('./common');
const { translit } = require('../translit');

const AREAS = {
  SCR: { n: '01', name: 'Arabic Script', ar: 'الخَطُّ العَرَبِيُّ' },
  ART: { n: '02', name: 'Articles', ar: 'أَدَوَاتُ التَّعْرِيفِ وَالتَّنْكِيرِ' },
  N: { n: '03', name: 'Nouns', ar: 'الأَسْمَاءُ' },
  ADJ: { n: '04', name: 'Adjectives', ar: 'الصِّفَاتُ' },
  ADV: { n: '05', name: 'Adverbs', ar: 'الظُّرُوفُ' },
  PRO: { n: '06', name: 'Pronouns', ar: 'الضَّمَائِرُ' },
  V: { n: '07', name: 'Verbs', ar: 'الأَفْعَالُ' },
  VF: { n: '07a', name: 'Arabic Verb Forms', ar: 'الأَوْزَانُ الصَّرْفِيَّةُ' },
  CP: { n: '08', name: 'Conjunctions and Prepositions', ar: 'حُرُوفُ العَطْفِ وَالجَرِّ' },
  NUM: { n: '09', name: 'Numbers and Time', ar: 'الأَرْقَامُ وَالوَقْتُ' },
  VS: { n: '10', name: 'Verbal Sentences', ar: 'الجُمَلُ الفِعْلِيَّةُ' },
  NVS: { n: '11', name: 'Non-Verbal Sentences', ar: 'الجُمَلُ الاِسْمِيَّةُ' },
  CASE: { n: '12', name: 'Case Endings', ar: 'عَلَامَاتُ الإِعْرَابِ' },
  POS: { n: '13', name: 'Possessives', ar: 'تَرَاكِيبُ المِلْكِيَّةِ' },
  INT: { n: '14', name: 'Interrogatives', ar: 'أَدَوَاتُ الاِسْتِفْهَامِ' },
};

const area = (code) => AREAS[code.split('-')[1]];

function meta(o) {
  const A = area(o.code);
  return {
    code: o.code, file: `${o.code}_${o.fileTitle}`, outDir: `Grammar_Mastery/${A.n}_${A.name.replace(/ /g, '_')}`,
    chip: o.chip || A.name, title: o.title, arabic: o.arabic, focus: o.focus,
    kicker: `MIFTAH GRAMMAR MASTERY  ·  ${A.name.toUpperCase()}  ·  ${o.code}`,
    lessonLine: `${o.code} · Grammar Mastery`,
    level: o.level || 'All pathways · revision',
    site: `Grammar › ${A.name}`,
    footer: `Miftah Arabic · Grammar Mastery · ${A.name} · ${o.code}`,
    icon: o.icon, iconSet: o.iconSet || 'fa6',
  };
}

// website data
const site = (key) => require(`../site-data/grammar/${key}.json`);
const quiz = (s, re) => { const z = s.quizzes.find((x) => re.test(x.title)); if (!z) throw new Error(`no quiz ${re} in ${s.path}`); return z.items; };
// website item → deck question; “Complete: <Arabic>” prompts show the Arabic at full size
const fq = (it, extra = {}) => C.splitPrompt({ prompt: it.prompt, options: it.options, answer: it.answer, feedback: it.feedback.replace(/^✔️?\s*/, '') }, extra);
const pick = (items, idx) => idx.map((i) => fq(items[i]));

function gmLesson(x) {
  const A = area(x.code);
  const s = x.site ? site(x.site) : null;
  const slides = [];
  slides.push({
    type: 'title',
    notes: `LESSON AT A GLANCE — planned for 56 minutes, leaving about 4 minutes for Teams delays.
${x.plan || '0–1 Welcome · 1–2 Lesson map · 2–9 Do Now + answers · 9–10 Objectives · 10–13 Grammar words · 13–24 The grammar, step by step · 24–26 Quick check · 26–29 I Do · 29–38 We Do (sort, repair, practise) · 38–49 You Do (read, speak, write on your route) · 49–54 Feedback (model, self-check, exit ticket) · 54–56 Preparation.'}
FLEX slides are optional: use them if the class is moving quickly; otherwise the same activities are on the website for homework.

Content source: Miftah Arabic website, Mastery & Revision › Grammar › ${A.name} › ${x.code}${s ? ` (“${s.title}”)` : ''}. ${x.source || 'The Do Now, quick check, game practice, exit ticket and mastery check are the website’s own quizzes; the reading text, speaking and writing tasks are the website’s four-skills application. Explanation slides, worked examples, sorter, repair items, frames and model translations are teacher-made on the website rules and labelled in the notes.'}

SUPPORT FOR THIS CLASS (Arabic not yet secure; mixed levels):
${x.support}
• Grammar words are always given in English AND Arabic: students should be able to name the rule, not just apply it.
• Colour code (same as all Miftah lessons): WHO = blue, MEANING = purple, ENDING = pink, PATTERN = orange, KEY WORD = teal.
• SEND “automatic doors”: lesson map, chunked tasks, worked examples before practice, cover-the-text reading and “pass” for reading aloud are built in for everyone.

ROUTES: Core (green) = students whose Arabic is not yet secure; Develop (amber) = on track; Stretch (red) = confident. Same objective for everyone — the task changes, not the goal.`,
  });
  slides.push(C.welcomeSlide());
  slides.push(C.journeySlide({ teach: x.teach, wedo: x.wedo, next: x.next.nextCode, support: x.mapSupport }));
  slides.push(C.doNow({ ...x.doNow, questions: x.doNow.questions || pick(quiz(s, /Entry|Diagnostic|Starter/i), x.doNow.pick || [0, 1, 2, 3, 4]) }));
  slides.push(C.objectivesSlide(x.objectives, x.routes, 0, x.objNotes || 'Objectives are drawn from the website lesson purpose and its Core / Develop / Stretch routes.'));
  // grammar words (terms): 6 cards per slide
  const terms = x.terms.items;
  for (let i = 0; i < terms.length; i += 6) {
    const chunk = terms.slice(i, i + 6);
    const part = terms.length > 6 ? ` (${i / 6 + 1} of ${Math.ceil(terms.length / 6)})` : '';
    slides.push({
      type: 'vocab', stage: 'teach', min: i ? undefined : 3, flex: !!(i && x.terms.flexRest), eyebrow: `Key words · the grammar words we will use${part}`,
      title: `${x.terms.title || 'Grammar words'}${part}`, ar: x.terms.ar || 'مُصْطَلَحَاتُ الدَّرْسِ',
      items: chunk.map((t, k) => ({ n: i + k + 1, ar: t.ar, en: t.en, tr: t.tr || translit(t.ar), tag: t.tag || '', core: t.core !== false && i + k < (x.terms.core || 6), forms: t.forms, note: t.note })),
      notes: `GRAMMAR WORDS${part} (3 min). These are the words we use to TALK ABOUT the grammar. Hear → Say → See → Use:
say each term twice, class repeats, point to the example on the card, then ask “Which word means …?” (chat the number).
Core students learn the English name and recognise the Arabic; Develop/Stretch use the Arabic term when explaining a rule.
${x.terms.notes || ''}`,
    });
  }
  (x.explain || []).forEach((e) => slides.push({ stage: 'teach', ...e }));
  slides.push(C.quickCheck(x.quick || pick(quiz(s, x.quickQuiz || /Mini-check|Guided|Quick|Check your understanding/i), x.quickPick || [0, 1, 2, 3]), x.quickNote || 'website mini-check questions.'));
  slides.push({ type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: x.ido.title, ar: 'شَاهِدْ ثُمَّ اُكْتُبْ', ...x.ido, notes: `I DO (3 min) — think aloud at every step: name the rule in English and Arabic as you apply it.\n${x.ido.notes || ''}` });
  if (x.models) {
    slides.push({
      type: 'models', stage: 'ido', min: 1, eyebrow: 'I do · model sentences', title: 'Sentences to borrow', ar: 'جُمَلٌ نَمُوذَجِيَّةٌ', rows: x.models,
      notes: `MODEL SENTENCES (1 min). Students copy TWO that are useful for them.\n• Core: copy one and change one word. • Develop: copy two and change the noun. • Stretch: combine two into one longer sentence.\n${x.modelsNotes || ''}`,
    });
  }
  (x.wedoSlides || []).forEach((w) => slides.push({ stage: 'wedo', ...w }));
  if (x.mistakes) slides.push(C.repairSlide({ mistakes: x.mistakes }, x.hints || []));
  if (x.practice !== false) {
    const pr = x.practice || pick(s.games && s.games[0] ? s.games[0].map((g) => ({ prompt: g.p, options: g.choices, answer: g.choices.indexOf(g.a), feedback: g.e })) : quiz(s, x.practiceQuiz || /Mini-check|Guided/i), x.practicePick || [4, 5, 6, 7]);
    slides.push(C.morePractice(pr, x.practiceLabel || 'website grammar game'));
  }
  if (x.read) {
    slides.push({
      type: 'passage', stage: 'youdo', min: x.read.min || 3, eyebrow: `You do · read and notice · ${x.read.label || 'website reading text'}`, title: x.read.title, ar: 'اِقْرَأْ وَلَاحِظْ',
      text: x.read.text, glossary: x.read.glossary,
      notes: `READ AND NOTICE (3 min) — ${x.read.label || 'the website reading text'}. Read it aloud once while students follow; then they hunt for today’s grammar.
Task: ${x.read.task}
SEND reading strategy: cover the text and uncover one sentence at a time. Core: use the green glossary.
${x.read.notes || ''}`,
    });
    slides.push({
      type: 'mcq', stage: 'youdo', min: 3, eyebrow: 'You do · reading questions · find the grammar', title: 'Reading: notice the grammar', ar: 'أَسْئِلَةُ القِرَاءَةِ',
      seed: 9, questions: x.read.questions,
      side: x.read.questions.length > 7 ? undefined : { kind: 'info', head: 'GRAMMAR DETECTIVE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: x.read.detective || '1. Read the question first.\n2. Find the phrase in the text.\n3. Name the rule that explains it.' },
      answerSlide: { eyebrow: 'You do · reading answers', title: 'Reading: answers', ar: 'إِجَابَاتُ القِرَاءَةِ' },
      notes: `READING QUESTIONS (3 min). ${x.read.qNote || 'Teacher-written on the website text unless marked as the website reading check.'}`,
      answerNotes: 'Go through each answer: a student reads the phrase aloud and names the rule (in English or Arabic).',
    });
  }
  slides.push({
    type: 'speaking', stage: 'youdo', min: 3, eyebrow: 'You do · say it before you write it', title: x.speak.title, ar: 'التَّحَدُّثُ',
    prompts: x.speak.prompts, stems: x.speak.stems, model: x.speak.model,
    notes: `SPEAKING (3 min) — ${x.speak.source || 'the website speaking task'}. Sequence: ● 10s think → ↔ 45s rehearse aloud with mic muted → ◎ two named students on open mic (warned in advance) → + ? the class types one follow-up in chat → ↺ one student summarises.
Routes: Core uses the Core prompt and stem; Develop the Develop prompt; Stretch the last prompt.
${x.speak.notes || ''}`,
  });
  slides.push({
    type: 'routes', stage: 'youdo', min: 9, eyebrow: 'You do · independent practice · 9 minutes', title: 'Write: choose your route', ar: 'اُكْتُبْ',
    core: x.write.core, develop: x.write.develop, stretch: x.write.stretch,
    notes: `YOU DO (9 min writing). Steer routes using the Do Now and quick-check results.
Website writing task: ${x.write.siteTask || ''}
LIVE FEEDBACK: students post their first two sentences in the chat after 3 minutes. Scan and correct the target rule immediately (private chat for individual corrections).
Work with the less able: stay with Core students for the first 3 minutes. SEND: chunk the Core task — “two sentences, then show me”.
${x.write.notes || ''}`,
  });
  slides.push(C.framesSlide(x.frames));
  if (x.stretchTask) {
    slides.push({
      type: 'stretchTask', stage: 'youdo', eyebrow: 'You do · stretch · the website writing task', title: 'Stretch: the full writing task', ar: 'مُهِمَّةُ التَّحَدِّي',
      ...x.stretchTask, bankHead: x.stretchTask.bankHead || 'PHRASE BANK — USEFUL FOR THIS TASK',
      notes: 'Stretch students work from this slide. Checklist = website writing checklist; phrase bank = phrases built on today’s rule.',
    });
  }
  slides.push({
    type: 'modelAnswer', stage: 'feedback', min: 1, eyebrow: 'Feedback · compare with the model', title: 'What a strong answer looks like', ar: 'نَمُوذَجُ الإِجَابَةِ',
    text: x.model.text, en: x.model.en, find: x.model.find,
    notes: `FEEDBACK (1 min) — ${x.model.source || 'model answer built on the website model'}, with an English translation for Core students.
Students find in the model (● 20s → ◎) the items on the chips. ${x.model.notes || ''}
Then each student chooses ONE thing from the model to add to their own writing.`,
  });
  slides.push(C.selfCheckSlide(x.selfCheck));
  const mastery = s && s.quizzes.length ? quiz(s, x.masteryQuiz || /Mastery|Self-check|Final/i) : null;
  slides.push(C.exitTicket(x.exit || pick(mastery, x.exitPick || [0, 1, 2]), mastery ? mastery.length : 3));
  if (x.mastery !== false && mastery) {
    const restIdx = x.masteryPick || mastery.map((_, i) => i).filter((i) => !(x.exitPick || [0, 1, 2]).includes(i)).slice(0, 6);
    if (restIdx.length) {
      slides.push({
        type: 'mcq', stage: 'feedback', flex: true, eyebrow: 'Extension · website mastery check · FLEX', title: 'Mastery check', ar: 'اِخْتِبَارُ الإِتْقَانِ',
        seed: 12, questions: pick(mastery, restIdx),
        answerSlide: { eyebrow: 'Extension · mastery answers', title: 'Mastery check: answers', ar: 'الإِجَابَاتُ' },
        notes: 'WEBSITE MASTERY CHECK (FLEX) — the rest of the website final check, for fast finishers or homework. Website guidance: below 70% repeat the mini-check; 70–89% replay the game; 90%+ move on and revisit in 3–7 days.',
      });
    }
  }
  (x.extra || []).forEach((e) => slides.push(e));
  slides.push(C.prepSlide({ ...x.next, ...x.prep }));
  slides.push(C.closeSlide({ ...x.next, remember: x.remember }));
  return slides;
}

module.exports = { ...C, AREAS, meta, site, quiz, fq, pick, gmLesson, translit };
