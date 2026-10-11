'use strict';
/* P6-L04 · Paper 4 Q1 — Directed Writing: Mastering Form and Register — website: Pathways › Progression › P6 › P6-L04 (text types and register signals,
 * the Q1 mark scheme TC 7 · Range 4 · Accuracy 4, three 130–140-word tasks — a formal letter, an article, a friendly email — with their models, the
 * text-type difficulty profile and the reflection). Website vocabulary, table, mark scheme, tasks, checklists, models, fields and exit frames used as
 * published, with waṣl alif shown without a kasra, لِكَيْ always written with its sukūn and يَسْعُدُنِي → يُسْعِدُنِي (email model: Form IV “it makes me
 * happy”). Teacher-made: the Do Now, the same-content-two-registers I Do, the route allocation, the phrase banks and the English model translations. */
const P = require('./p6-common');
const { q } = P;

const meta = P.meta('P6')({
  n: 4, fileTitle: 'Paper_4_Q1_Directed_Writing', chip: 'IGCSE Bridge',
  title: 'Paper 4 Q1 — Directed Writing: Mastering Form and Register', arabic: 'الوَرَقَةُ الرَّابِعَةُ — الكِتَابَةُ المُوَجَّهَةُ: الشَّكْلُ وَالصِّيغَةُ',
  focus: 'Write Paper 4 Q1 (130–140 words) in the right form and register — a formal letter, an article or a friendly email — with the right opening and closing, every content point covered, and the Q1 mark scheme (TC 7 · Range 4 · Accuracy 4) as your checklist.',
  icon: 'FaEnvelopeOpenText', iconSet: 'fa6',
});

const s = P.site('P6-L04', [['يَسْعُدُنِي', 'يُسْعِدُنِي']]);
const B = s.blocks;
const NEXT = { nextCode: 'P6-L05', nextTitle: 'Paper 4 Q2 — Extended Writing: Essay Architecture Under Exam Conditions', nextAr: 'الوَرَقَةُ الرَّابِعَةُ — الكِتَابَةُ المُوَسَّعَةُ' };

const W1 = P.writing(B[3], {
  phrases: [['أَتَشَرَّفُ بِمُخَاطَبَتِكُمْ بِشَأْنِ', 'I have the honour of writing to you about'], ['يُفَاقِمُ الأَزْمَةَ', 'worsens the crisis'], ['وَأَقْتَرِحُ أَنْ تُطْلَقَ حَمْلَةٌ', 'I propose that a campaign be launched'], ['أَرْجُو أَنْ تَتَّخِذُوا القَرَارَ المُنَاسِبَ', 'I hope you will take the right decision'], ['وَتَفَضَّلُوا بِقَبُولِ فَائِقِ الاحْتِرَامِ', 'yours faithfully']],
  en: 'Honourable members of the Environment Committee, I have the honour of writing to you about water scarcity in our region. It is true that resources are limited; however, poor management is worsening the crisis. I propose that a campaign be launched to rationalise consumption, and that solar energy be invested in desalination. Had these measures been applied, the situation would have improved greatly. Based on the above, I hope that you will take the appropriate decision urgently. Yours faithfully.',
  find: ['formal opening + closing', 'problem · solution · benefit · request', 'passive in -a (an tuṭlaqa)', 'law … la- · wa-bināʾan'],
  stage: 'youdo', route: 'stretch', eyebrow: 'You do · Stretch route · Task 1 — formal letter (website)', title: 'Task 1 — A formal letter', ar: 'خِطَابٌ رَسْمِيٌّ',
  modelNotes: 'Website model (formal letter). Register signals: حَضَرَاتِ … المُحْتَرَمِينَ · أَتَشَرَّفُ بِمُخَاطَبَتِكُمْ · passives in -a (أَنْ تُطْلَقَ · أَنْ تُسْتَثْمَرَ) · وَتَفَضَّلُوا بِقَبُولِ فَائِقِ الاحْتِرَامِ.',
});
const W2 = P.writing(B[4], {
  phrases: [['سُؤَالٌ يَشْغَلُ كَثِيرًا مِنَ الشَّبَابِ', 'a question on many young people’s minds'], ['أَسَاسٌ لَا غِنَى عَنْهُ', 'an indispensable foundation'], ['تَنْظِيمُ الوَقْتِ يُخَفِّفُهُ', 'organising time eases it'], ['مَعَ مَنْ نَثِقُ بِهِمْ', 'with people we trust'], ['أَدْعُو كُلَّ قَارِئٍ إِلَى أَنْ …', 'I call on every reader to …']],
  en: 'How do I keep my mental balance? It is a question on many young people’s minds. First, I point out that good sleep and exercise are an indispensable foundation. It is true that studying causes stress; however, organising my time eases it. When I set aside an hour a day for rest, I feel a clear improvement. We should make sure we talk to people we trust. Finally, I call on every reader to look after their mental health as they look after their body.',
  find: ['a hook question, no address', 'first person, semi-formal', 'idhā … · yanbaghī an', 'a closing thought for the reader'],
  stage: 'youdo', route: 'develop', eyebrow: 'You do · Develop route · Task 2 — article (website)', title: 'Task 2 — An article', ar: 'مَقَالَةٌ',
  modelNotes: 'Website model (article). Register signals: a hook question, first person (أُشِيرُ · أُحَافِظُ), يَنْبَغِي أَنْ, a call to the reader (أَدْعُو … إِلَى أَنْ يَعْتَنِيَ). Note: إِذَا خَصَّصْتُ … شَعَرْتُ — a past-tense result for a habit (“whenever”).',
});
const W3 = P.writing(B[5], {
  phrases: [['عَزِيزِي … ، حَيَّاكَ اللَّهُ!', 'Dear …, hello!'], ['يُسْعِدُنِي أَنَّكَ سَتَزُورُ', 'I am happy that you will visit'], ['وَأَنْصَحُكَ بِأَنْ تُحْضِرَ', 'and I advise you to bring'], ['وَمِنَ العَادَاتِ المُهِمَّةِ أَنْ …', 'one important custom is that …'], ['أَتَطَلَّعُ إِلَى لِقَائِكَ', 'I look forward to meeting you']],
  en: 'Dear Ahmad, hello! I am happy that you will visit our school next month. Our school is big and has modern laboratories, and it is near a beautiful park. It is true that the weather is sometimes cold, but people are friendly. I advise you to bring a coat. One important custom is that we take off our shoes when entering homes. If there is time, we will visit the local museum together. I look forward to meeting you. See you soon, your friend Sami.',
  find: ['warm opening + closing', 'school · area · custom · activity', 'bi-an tuḥḍira · idhā … sa-', 'friendly 1st / 2nd person'],
  stage: 'youdo', route: 'core', eyebrow: 'You do · Core route · Task 3 — friendly email (website)', title: 'Task 3 — A friendly email', ar: 'بَرِيدٌ إِلِكْتْرُونِيٌّ',
  modelNotes: 'Website model (email), with one fix: يَسْعُدُنِي → يُسْعِدُنِي (Form IV, “it makes me happy”). Register signals: عَزِيزِي · حَيَّاكَ اللَّهُ · أَنْصَحُكَ بِأَنْ تُحْضِرَ · إِلَى اللِّقَاءِ، صَدِيقُكَ.',
});

const slides = P.bridgeLesson('P6-L04', {
  site: s, next: NEXT,
  plan: '0–1 Welcome · 1–2 Map · 2–8 Do Now + answers · 8–9 Objectives · 9–14 Register words · 14–17 Register signals · 17–21 Same content, two registers (I Do) · 21–23 The Q1 mark scheme · 23–25 Choose your task · 25–45 Write (20 min, exam timing) · 45–51 Models + self-mark · 51–54 Difficulty profile · 54–58 Reflection + self-check · 58–60 Preparation.',
  source: 'The website P6-L04: the text-type and register vocabulary (16 words), the register-signals table, the Paper 4 Q1 mark scheme (TC 7 · Range 4 · Accuracy 4), three tasks with checklists and models (a formal letter to the Arab League Environment Committee · a youth-magazine article on wellbeing · a friendly email to an exchange student), the text-type difficulty profile and the reflection frames.',
  support: `• EXAM-TIMED WRITING: Q1 in the real Paper 4 has about 25–30 minutes; today students write ONE task in 20 minutes. Routes by register difficulty: Core → Task 3 (friendly email) · Develop → Task 2 (article) · Stretch → Task 1 (formal letter). Fast finishers start a second task.
• The key message of the website: in Q1, Task Completion carries the most weight (7 of 15) — the wrong register or one missing content point costs marks even when the Arabic is accurate.
• Models are shown ONLY after writing; students then self-mark against the website mark scheme (TC / Range / Accuracy) and write one improvement.
• Website fix: يَسْعُدُنِي → يُسْعِدُنِي (email model).`,
  steps: [
    ['donow', 6, 'Retrieval: register words and P5 accuracy.', 'اِبْدَأِ الآنَ'],
    ['teach', 10, 'Text types, register signals, the mark scheme.', 'الصِّيغَةُ'],
    ['ido', 4, 'Same content, two registers.', 'شَاهِدْ'],
    ['youdo', 22, 'Choose your task and write (exam timing).', 'اُكْتُبْ'],
    ['feedback', 12, 'Models, self-marking, difficulty profile, reflection.', 'قَيِّمْ'],
    ['prep', 2, 'Get ready for the extended essay.', 'اِسْتَعِدَّ'],
  ],
  doNow: {
    questions: [
      q('What does الكِتَابَةُ المُوَجَّهَةُ mean?', ['directed writing', 'free writing', 'handwriting'], 'Prepared at home (P6-L03).'),
      q('What does صِيغَةٌ رَسْمِيَّةٌ mean?', ['formal register', 'an official form', 'a friendly tone'], 'Prepared at home (P6-L03).'),
      q('Which phrase opens a formal letter?', ['أَتَشَرَّفُ بِمُخَاطَبَتِكُمْ', 'حَيَّاكَ اللَّهُ', 'إِلَى اللِّقَاءِ'], 'Prepared at home (P6-L03).'),
      q('Complete: أَقْتَرِحُ أَنْ ___ حَمْلَةٌ لِتَرْشِيدِ الاسْتِهْلَاكِ.', ['تُطْلَقَ', 'تُطْلَقُ', 'أُطْلِقَتْ'], 'P5: an + a passive in -a.'),
      q('Complete: لَوْ طُبِّقَتْ هٰذِهِ الإِجْرَاءَاتُ، ___ الوَضْعُ.', ['لَتَحَسَّنَ', 'سَيَتَحَسَّنُ', 'يَتَحَسَّنُ'], 'P5: law … la-.'),
    ],
    keyIdea: { text: 'In Q1 the reader decides the language: a minister, a magazine reader and a friend each need a different register — from the very first line.', ar: 'أَتَشَرَّفُ بِمُخَاطَبَتِكُمْ ≠ حَيَّاكَ اللَّهُ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P6-L03. Questions 4–5 retrieve two P5 accuracy points that appear in the formal-letter model.',
  },
  routes: {
    core: ['I can open and close a friendly email correctly.', 'I can cover all four content points.'],
    develop: ['I can keep a semi-formal register in an article.', 'I can use a conditional and a trigger.'],
    stretch: ['I can write a formal letter with passives and formal connectors.', 'I can self-mark against TC, Range and Accuracy.'],
  },
  vocab: {
    core: ['الكِتَابَةُ المُوَجَّهَةُ', 'خِطَابٌ رَسْمِيٌّ', 'بَرِيدٌ إِلِكْتْرُونِيٌّ', 'مَقَالَةٌ', 'صِيغَةٌ رَسْمِيَّةٌ', 'صِيغَةٌ غَيْرُ رَسْمِيَّةٍ', 'أَتَشَرَّفُ بِمُخَاطَبَتِكُمْ', 'حَيَّاكَ اللَّهُ', 'وَتَفَضَّلُوا بِقَبُولِ الاحْتِرَامِ', 'إِلَى اللِّقَاءِ'],
    forms: {
      'خِطَابٌ رَسْمِيٌّ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'خِطَابَاتٌ رَسْمِيَّةٌ' }] }, 'مَقَالَةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'مَقَالَاتٌ' }] },
      'تَقْرِيرٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'تَقَارِيرُ' }] }, 'حَيَّاكَ اللَّهُ': { tag: 'to a boy · girl', forms: [{ l: 'girl', ar: 'حَيَّاكِ اللَّهُ' }] },
    },
    vocabNotes: {
      0: 'Text types: خِطَابٌ رَسْمِيٌّ (a formal letter) · بَرِيدٌ إِلِكْتْرُونِيٌّ (an email) · مَقَالَةٌ (an article) · تَقْرِيرٌ (a report) · يَوْمِيَّاتٌ (a diary). Each has its own صِيغَةٌ (register): رَسْمِيَّةٌ or غَيْرُ رَسْمِيَّةٍ.',
      1: 'Register signals — learn them in PAIRS: formal أَتَشَرَّفُ بِمُخَاطَبَتِكُمْ … وَتَفَضَّلُوا بِقَبُولِ الاحْتِرَامِ · friendly حَيَّاكَ اللَّهُ … إِلَى اللِّقَاءِ. Never mix them in one text.',
    },
    bridge: [
      { ar: 'خِطَابٌ', urdu: 'خطاب', tr: 'khitāb', en: 'Arabic: a letter, an address · Urdu: a speech, a title' },
      { ar: 'رَسْمِيٌّ', urdu: 'رسمی', tr: 'rasmī', en: 'formal, official' },
      { ar: 'تَقْرِيرٌ', urdu: 'تقریر', tr: 'taqrīr', en: 'Arabic: a report · Urdu: a speech' },
      { ar: 'مَقَالَةٌ', urdu: 'مقالہ', tr: 'maqāla', en: 'an article' },
      { ar: 'اِحْتِرَامٌ', urdu: 'احترام', tr: 'ehtirām', en: 'respect' },
    ],
    bridgeNotes: 'URDU BRIDGE: رسمی, مقالہ and احترام are shared. Two traps: Urdu تقریر = a SPEECH, but Arabic التَّقْرِيرُ = a REPORT; Urdu خطاب = a speech or a title, but Arabic الخِطَابُ here = a (formal) LETTER.',
  },
  body: [
    P.table(B[1], {
      w: [2.2, 3.6, 6.5], core: [0, 1], size: 18, min: 3, eyebrow: 'Teach · match the signal to the type (website)', ar: 'عَلَامَاتُ الصِّيغَةِ',
      foot: 'The opening line tells the examiner the register — get it right before anything else.',
      notes: 'REGISTER SIGNALS (3 min) — website table. Ask: which text type has NO address? (the article — it opens with a hook). Which uses numbered sections? (the report).',
    }),
    {
      type: 'formsTable', stage: 'ido', min: 4, eyebrow: 'I do · same content, two registers', title: 'One message — a minister or a friend?', ar: 'رَسْمِيٌّ أَمْ وُدِّيٌّ؟', ltr: true,
      cols: [{ label: 'Move', w: 1.9 }, { label: 'Formal letter', w: 5.3, size: 16 }, { label: 'Friendly email', w: 5.13, size: 16 }],
      rows: [
        { core: true, cells: ['open', 'حَضَرَاتِ أَعْضَاءِ اللَّجْنَةِ المُحْتَرَمِينَ، أَتَشَرَّفُ بِمُخَاطَبَتِكُمْ …', 'عَزِيزِي أَحْمَدُ، حَيَّاكَ اللَّهُ!'] },
        { cells: ['the problem', 'صَحِيحٌ أَنَّ المَوَارِدَ مَحْدُودَةٌ، غَيْرَ أَنَّ …', 'صَحِيحٌ أَنَّ الطَّقْسَ بَارِدٌ، غَيْرَ أَنَّ …'] },
        { cells: ['advise / ask', 'وَأَقْتَرِحُ أَنْ تُطْلَقَ حَمْلَةٌ …', 'وَأَنْصَحُكَ بِأَنْ تُحْضِرَ مِعْطَفًا.'] },
        { cells: ['request', 'أَرْجُو أَنْ تَتَّخِذُوا القَرَارَ المُنَاسِبَ عَاجِلًا.', 'وَإِذَا تَوَفَّرَ الوَقْتُ، سَنَزُورُ المَتْحَفَ.'] },
        { core: true, cells: ['close', 'وَتَفَضَّلُوا بِقَبُولِ فَائِقِ الاحْتِرَامِ.', 'إِلَى اللِّقَاءِ، صَدِيقُكَ سَامِي.'] },
      ],
      foot: 'Same grammar (ṣaḥīḥun anna … ghayra anna · an + -a) — different register: you (plural) and passives vs. you (singular) and “I”.',
      notes: 'I DO (4 min) — built from the two website models. Read each row across, formal then friendly. Point out: formal = plural “you” (تَتَّخِذُوا), passives (تُطْلَقَ), formal titles; friendly = singular “you” (أَنْصَحُكَ), names, exclamation. The P5 grammar works in BOTH registers.',
    },
    P.markScheme(B[2], {
      min: 2, eyebrow: 'Teach · know how you are marked (website)',
      foot: 'TC is 7 of 15: the right register from the first line, and EVERY content point.',
    }),
    {
      type: 'routes', stage: 'youdo', min: 2, eyebrow: 'You do · choose your task · write for 20 minutes', title: 'Write: choose your route', ar: 'اُكْتُبْ',
      core: { amount: 'Task 3 · email', task: 'A friendly email (130–140 words) to an exchange student: the school, the area, one custom, one activity.', how: 'Open with عَزِيزِي … حَيَّاكَ اللَّهُ! · close with إِلَى اللِّقَاءِ. Tick the four points.' },
      develop: { amount: 'Task 2 · article', task: 'An article (130–140 words) for a youth magazine: how I manage stress and keep my wellbeing.', how: 'Open with a hook question · first person · one conditional + one trigger.' },
      stretch: { amount: 'Task 1 · letter', task: 'A formal letter (130–140 words) to the Arab League Environment Committee: problem, solution, benefit, request.', how: 'Formal opening and closing · passives in -a · law … la- · wa-bināʾan.' },
      notes: 'ROUTES (2 min to choose). Students may move UP a route if confident. Exam timing: 20 minutes, then pens down. Fast finishers: a second task in a different register.',
    },
    W3[0], W2[0], W1[0],
    W3[1], W2[1], W1[1],
    P.fields(B[6], {
      min: 3, eyebrow: 'You do · text-type difficulty profile (website)', ar: 'أَقْوَى نَوْعٍ وَأَضْعَفُهُ', head: 'Record', ex: 'Example', lw: 4.4, ew: 5.0,
      examples: ['the email — I know the friendly openings', 'the formal letter — the passives are hard', 'formal openings and closings from memory'],
      foot: 'In the real exam you cannot always choose the text type — practise your weakest before the L09 mock.',
      notes: 'DIFFICULTY PROFILE (3 min) — website fields, completed after self-marking against the mark scheme.',
    }),
    P.reflect(B[7], {
      min: 2, eyebrow: 'Feedback · register — the TC multiplier (website)', ar: 'التَّأَمُّلُ', can: 'the signal I use confidently', next: 'the type I will practise most',
      modelCan: 'أَتَشَرَّفُ بِمُخَاطَبَتِكُمْ', modelNext: 'the formal letter',
      extra: [['أَصْعَبُ نَوْعٍ عِنْدِي هُوَ ______ .', 'The hardest type for me is …', 'الخِطَابُ الرَّسْمِيُّ']],
      foot: 'Register is the TC multiplier: right from the first line, consistent to the last.',
      notes: 'REFLECTION (2 min) — website frames.',
    }),
  ],
  selfCheck: [
    { route: 'core', text: 'I chose the correct opening and closing for my text type.' },
    { route: 'core', text: 'I included every required content point.' },
    { route: 'develop', text: 'I kept the register consistent from the opening sentence.' },
    { route: 'develop', text: 'I used a conditional and a trigger + -a.' },
    { route: 'stretch', text: 'I scored my own writing against TC, Range and Accuracy.' },
  ],
  prep: {
    words: [['الكِتَابَةُ المُوَسَّعَةُ', 'extended writing', '—'], ['هَيْكَلُ المَقَالِ', 'essay structure', 'pl. هَيَاكِلُ'], ['التَّنَوُّعُ المَعْجَمِيُّ', 'lexical variety', '—'], ['الدِّقَّةُ تَحْتَ ضَغْطِ الوَقْتِ', 'accuracy under time pressure', '—'], ['الأُطْرُوحَةُ', 'the thesis', 'pl. الأُطْرُوحَاتُ']],
    questionEn: 'How many minutes would you spend planning a 150-word essay — and why?',
    questionAr: 'أُخَطِّطُ لِلْمَقَالِ ______ دَقَائِقَ، لِأَنَّ ______ .',
    homework: {
      core: 'Redraft your email using the model’s phrases; learn the five words.',
      develop: 'Write the second paragraph of a different task in a new register; learn the five words.',
      stretch: 'Write a second task in full (130–140 words) under 25 minutes; learn the five words.',
    },
    wordsSource: 'The five words come from the website P6-L05 vocabulary (extended writing).',
  },
  remember: 'Remember: the reader decides the register — formal letter, article or email — right from the first line; cover EVERY content point; TC is 7 of 15.',
});

module.exports = { meta, slides };
