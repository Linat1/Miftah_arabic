'use strict';
/* P6-L02 · Paper 1 Listening — Full Format Practice and Strategy Mastery — website: Pathways › Progression › P6 › P6-L02 (the six listening strategies,
 * how Paper 1 is scored, three full-format texts — multiple choice 8 · matching 6 · select the supported statement 6 — the performance analysis and the
 * reflection). Website vocabulary, cards, panel, scripts, questions, fields and exit frames used as published, with waṣl alif shown without a kasra,
 * لِكَيْ always written with its sukūn and التَّنَبُّؤُ بِالمَحْتَوَى → بِالمُحْتَوَى (the content: Form VIII participle). Teacher-made: the Do Now, the
 * question-annotation I Do, the read-along translations, the speaking task and the frames. */
const P = require('./p6-common');
const { q } = P;

const meta = P.meta('P6')({
  n: 2, fileTitle: 'Paper_1_Listening', chip: 'IGCSE Bridge',
  title: 'Paper 1 Listening — Full Format Practice and Strategy Mastery', arabic: 'الوَرَقَةُ الأُولَى — الاسْتِمَاعُ: تَدْرِيبٌ كَامِلٌ وَإِتْقَانُ الاسْتِرَاتِيجِيَّاتِ',
  focus: 'Sit a full-format Paper 1 (multiple choice · matching · supported statements) with the six strategies: read and annotate every question, listen once for gist, twice to verify, never leave a blank — and hear the grammar signal.',
  icon: 'FaHeadphones', iconSet: 'fa6',
});

const s = P.site('P6-L02', [['التَّنَبُّؤُ بِالمَحْتَوَى', 'التَّنَبُّؤُ بِالمُحْتَوَى']]);
const B = s.blocks;
const NEXT = { nextCode: 'P6-L03', nextTitle: 'Paper 2 Reading — Full Format Practice and R1–R4 Mastery', nextAr: 'الوَرَقَةُ الثَّانِيَةُ — القِرَاءَةُ' };

const G1 = [
  ['يَقُولُ الخَبِيرُ: تُشِيرُ الدِّرَاسَاتُ إِلَى أَنَّ النَّوْمَ الجَيِّدَ أَسَاسُ الصِّحَّةِ.', 'The expert says: studies indicate that good sleep is the foundation of health.'],
  ['صَحِيحٌ أَنَّ الرِّيَاضَةَ مُهِمَّةٌ، غَيْرَ أَنَّ الرَّاحَةَ لَا تَقِلُّ أَهَمِّيَّةً عَنْهَا.', 'It is true that exercise is important; however, rest is no less important.'],
  ['إِذَا نَامَ الإِنْسَانُ سَبْعَ سَاعَاتٍ، سَيَتَحَسَّنُ تَرْكِيزُهُ. وَلَوْ قَلَّلْنَا مِنَ الشَّاشَاتِ لَيْلًا، لَنِمْنَا بِعُمْقٍ أَكْبَرَ.', 'If a person sleeps seven hours, their concentration will improve. Had we cut down on screens at night, we would have slept more deeply.'],
  ['وَيَنْبَغِي أَنْ نَحْرِصَ عَلَى غِذَاءٍ مُتَوَازِنٍ. وَأَكَّدَ الخَبِيرُ أَنَّ التَّوَتُّرَ المُزْمِنَ يُضْعِفُ المَنَاعَةَ.', 'We should take care to eat a balanced diet. The expert confirmed that chronic stress weakens immunity.'],
];
const G2 = [
  ['سَلْمَى: أَرَى أَنَّ الدِّرَاسَةَ فِي الخَارِجِ تُوَسِّعُ الآفَاقَ. كَرِيمٌ: صَحِيحٌ أَنَّهَا مُكْلِفَةٌ، غَيْرَ أَنَّ العَائِدَ يَسْتَحِقُّ.', 'Salma: I think studying abroad broadens horizons. Karim: True, it is expensive; however, the return is worth it.'],
  ['سَلْمَى: وَلَوْ تَعَلَّمْتُ لُغَةً جَدِيدَةً، لَانْفَتَحَتْ أَمَامِي فُرَصٌ أَكْثَرُ. كَرِيمٌ: وَيَنْبَغِي أَنْ نُخَطِّطَ لِلْمِيزَانِيَّةِ مُبَكِّرًا.', 'Salma: If I learned a new language, more opportunities would open up for me. Karim: We should plan the budget early.'],
  ['سَلْمَى: وَأَكَّدَ مُسْتَشَارِي أَنَّ المِنَحَ تُخَفِّفُ العِبْءَ. كَرِيمٌ: وَإِذَا حَصَلْتُ عَلَى مِنْحَةٍ، سَأُسَافِرُ العَامَ القَادِمَ.', 'Salma: My adviser confirmed that scholarships ease the burden. Karim: If I get a scholarship, I will travel next year.'],
];
const G3 = [
  ['يَقُولُ المُخَطِّطُ: كَانَتِ المَدِينَةُ قَدْ عَانَتْ مِنَ التَّلَوُّثِ لِسَنَوَاتٍ. وَاليَوْمَ يَتَطَلَّبُ الأَمْرُ أَنْ نَسْتَثْمِرَ فِي النَّقْلِ النَّظِيفِ.', 'The planner says: the city had suffered from pollution for years. Today the matter requires us to invest in clean transport.'],
  ['صُمِّمَتِ الحَدَائِقُ الجَدِيدَةُ لِكَيْ تُنَقِّيَ الهَوَاءَ. وَإِذَا اعْتَمَدْنَا عَلَى الطَّاقَةِ الشَّمْسِيَّةِ، سَتَنْخَفِضُ الانْبِعَاثَاتُ.', 'The new parks were designed to purify the air. If we rely on solar energy, emissions will fall.'],
  ['وَيَرْجُو المُخَطِّطُ أَنْ تُصْبِحَ المَدِينَةُ نَمُوذَجًا يُحْتَذَى.', 'The planner hopes that the city will become a model to follow.'],
];

const slides = P.bridgeLesson('P6-L02', {
  site: s, next: NEXT,
  plan: '0–1 Welcome · 1–2 Map · 2–8 Do Now + answers · 8–9 Objectives · 9–13 Strategy words · 13–17 The six strategies · 17–19 How Paper 1 is scored · 19–23 Annotate the questions (I Do) · 23–33 Text 1 · 33–40 Text 2 · 40–47 Text 3 · 47–51 Report what you heard · 51–55 Performance analysis · 55–58 Reflection + self-check · 58–60 Preparation.',
  source: 'The website P6-L02: the listening-strategy vocabulary (8 words), the six listening strategies, “How Paper 1 is scored”, three full-format texts (an expert on healthy living — multiple choice 8 · Salma and Karim on studying abroad — matching 6 · a planner on a green city — select the supported statement 6), the performance-analysis fields and the reflection frames.',
  support: `• FULL-FORMAT PRACTICE: the website audio is in production, so the TEACHER reads each script aloud twice (natural speed, pauses between sentences) — exactly as the website panel says. Students read and annotate the questions in the two-minute gap before each text.
• Core: annotate every question with ONE label (name? number? opinion? conditional?) and answer Text 1 questions 1–4, Text 2 and Text 3 questions 1–3; use the read-along after the second listening. Develop: all 20. Stretch: all 20, then justify each answer with the Arabic signal word.
• Practice, not a test: scores go into the performance analysis only. Celebrate improvement between Text 1 and Text 3.
• The read-along slides (Arabic + English) come AFTER the second listening and BEFORE the answers — for Core support and for checking evidence.
• Website fix: التَّنَبُّؤُ بِالمَحْتَوَى → بِالمُحْتَوَى (the content).`,
  steps: [
    ['donow', 6, 'Retrieval: strategy words and grammar by ear.', 'اِبْدَأِ الآنَ'],
    ['teach', 10, 'The six strategies and how Paper 1 is scored.', 'الاسْتِرَاتِيجِيَّاتُ'],
    ['ido', 4, 'Watch me annotate the questions.', 'شَاهِدْ'],
    ['wedo', 24, 'Three full-format texts, each heard twice.', 'الاسْتِمَاعُ'],
    ['youdo', 8, 'Report what you heard · analyse your score.', 'التَّحْلِيلُ'],
    ['feedback', 3, 'Reflection and self-check.', 'قَيِّمْ'],
    ['prep', 2, 'Get ready for Paper 2 Reading.', 'اِسْتَعِدَّ'],
  ],
  doNow: {
    questions: [
      q('What does قِرَاءَةُ الأَسْئِلَةِ مُسْبَقًا mean?', ['reading the questions in advance', 'reading the answers aloud', 'reading the text twice'], 'Prepared at home (P6-L01).'),
      q('What does التَّحَقُّقُ فِي الاسْتِمَاعِ الثَّانِي mean?', ['verifying on the second listen', 'the first listen', 'a second exam'], 'Prepared at home (P6-L01).'),
      q('What does مُشَتِّتَاتُ الاسْتِمَاعِ mean?', ['listening distractors', 'listening strategies', 'loud noises'], 'Prepared at home (P6-L01).'),
      q('You hear «لَوْ … لَـ …». The speaker means that …', ['it did not happen', 'it will happen', 'it happened'], 'P5-L10: law … la- = a supposition.'),
      q('You hear «صَحِيحٌ أَنَّ …». The point that follows is …', ['conceded to the other side', 'the speaker’s conclusion', 'a statistic'], 'P5-L10: the speaker’s view comes after ghayra anna.'),
    ],
    keyIdea: { text: 'In Paper 1 the grammar is a signpost: it tells you what KIND of information comes next.', ar: '{k|إِذَا} … سَـ · {m|لَوْ} … لَـ · {w|صَحِيحٌ أَنَّ} … {e|غَيْرَ أَنَّ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P6-L01. Questions 4–5 retrieve the listening signals of P5-L10 — today they are tested in full IGCSE format.',
  },
  routes: {
    core: ['I can annotate every question before listening.', 'I can answer 10 of the 20 questions.'],
    develop: ['I can use the second listen to verify, not over-change.', 'I can hear the conditional type and the trigger.'],
    stretch: ['I can justify every answer with the Arabic signal word.', 'I can name my priority question type for the mock.'],
  },
  vocab: {
    core: ['اسْتِرَاتِيجِيَّاتُ الاسْتِمَاعِ', 'قِرَاءَةُ الأَسْئِلَةِ مُسْبَقًا', 'الاسْتِمَاعُ الأَوَّلُ لِلْفَهْمِ العَامِّ', 'الاسْتِمَاعُ الثَّانِي لِلتَّفَاصِيلِ', 'التَّحَقُّقُ فِي الاسْتِمَاعِ الثَّانِي', 'مُشَتِّتَاتُ الاسْتِمَاعِ'],
    forms: {
      'اسْتِرَاتِيجِيَّاتُ الاسْتِمَاعِ': { tag: 'pl · sg', forms: [{ l: 'sg.', ar: 'اسْتِرَاتِيجِيَّةٌ' }] },
      'مُشَتِّتَاتُ الاسْتِمَاعِ': { tag: 'pl · sg', forms: [{ l: 'sg.', ar: 'مُشَتِّتٌ' }] },
    },
    vocabNotes: { 0: 'The strategy sequence in the words themselves: قِرَاءَةُ الأَسْئِلَةِ مُسْبَقًا (before) → الاسْتِمَاعُ الأَوَّلُ لِلْفَهْمِ العَامِّ (listen 1) → الاسْتِمَاعُ الثَّانِي لِلتَّفَاصِيلِ / التَّحَقُّقُ (listen 2). مُشَتِّتَاتٌ = distractors: an option that uses words from the text but says something different.' },
    bridge: [
      { ar: 'سُؤَالٌ', urdu: 'سوال', tr: 'sawāl', en: 'a question' },
      { ar: 'تَفْصِيلٌ', urdu: 'تفصیل', tr: 'tafsīl', en: 'a detail' },
      { ar: 'إِشَارَةٌ', urdu: 'اشارہ', tr: 'ishāra', en: 'a signal' },
      { ar: 'تَوَقُّعٌ', urdu: 'توقع', tr: 'tawaqqo', en: 'an expectation, a prediction' },
      { ar: 'تَحَقُّقٌ', urdu: 'تصدیق', tr: 'tasdīq', en: 'verifying (Arabic تَصْدِيقٌ = believing, approving)' },
    ],
    bridgeNotes: 'URDU BRIDGE: سوال, تفصیل, اشارہ and توقع are shared. Careful: to VERIFY in Urdu is تصدیق کرنا, but in Arabic verifying = التَّحَقُّقُ (from حَقٌّ, truth); Arabic تَصْدِيقٌ = believing or approving.',
  },
  body: [
    P.cards(B[1], {
      min: 4, eyebrow: 'Teach · apply all six today (website)', ar: 'سِتُّ اسْتِرَاتِيجِيَّاتٍ', title: 'The six listening strategies',
      examples: [
        { ar: 'اسْمٌ؟ رَقْمٌ؟ رَأْيٌ؟ نَوْعُ شَرْطٍ؟', en: 'name? number? opinion? conditional type?', note: 'annotate' },
        { ar: 'لِكَيْ · إِذَا · لَوْ', en: 'purpose · real condition · supposition', note: 'grammar signals' },
        { ar: 'صَحِيحٌ أَنَّ · غَيْرَ أَنَّ', en: 'conceded point · the speaker’s view', note: 'grammar signals' },
      ],
      notes: 'TEACH (4 min) — the website cards. Model strategy 2 on the board: write a label next to a sample question. Stress strategy 5: an unanswered question scores zero — make the best-supported guess.',
    }),
    P.panel(B[2], {
      min: 2, eyebrow: 'Teach · how Paper 1 is scored (website)', ar: 'تَقْدِيرُ الدَّرَجَاتِ', title: 'How Paper 1 is scored',
      points: [
        'Three texts today: 8 + 6 + 6 = 20 raw marks. In the real Paper 1 the section is scaled to 45.',
        'Read the questions in the two-minute gap before each text.',
        'Each script is read twice — the script stands in for the recording while the website audio is in production.',
        'The texts span the P6 topic areas and carry P6 grammar naturally: conditionals, triggers, reported speech, concession–refutation.',
      ],
      examples: [
        { ar: 'اخْتِيَارٌ مِنْ مُتَعَدِّدٍ', en: 'Text 1 · multiple choice (8)' },
        { ar: 'مَنْ قَالَ ذٰلِكَ؟', en: 'Text 2 · matching: who says it? (6)' },
        { ar: 'العِبَارَةُ الَّتِي يَدْعَمُهَا النَّصُّ', en: 'Text 3 · the supported statement (6)' },
      ],
      notes: 'TEACH (2 min) — the website panel. Three question types; each needs a slightly different focus: detail (Text 1), WHO (Text 2), what the text actually SUPPORTS (Text 3 — distractors use words from the text but change the meaning).',
    }),
    {
      type: 'formsTable', stage: 'ido', min: 4, eyebrow: 'I do · watch me annotate the Text 1 questions', title: 'Label every question before you listen', ar: 'عَلِّمِ السُّؤَالَ', ltr: true,
      cols: [{ label: 'Q', w: 0.7 }, { label: 'The question asks …', w: 4.6 }, { label: 'My label', w: 2.6 }, { label: 'Signal to listen for', w: 4.43, size: 18 }],
      rows: [
        { core: true, cells: ['1', 'the basis of health (a fact)', 'detail · studies', 'تُشِيرُ الدِّرَاسَاتُ إِلَى أَنَّ'] },
        { core: true, cells: ['2–3', 'what is conceded · what is stressed', 'opinion · balance', 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ'] },
        { cells: ['4–5', 'the Type 1 and Type 2 claims', 'conditional type', 'إِذَا … سَـ · لَوْ … لَـ'] },
        { cells: ['6', 'what is recommended', 'necessity trigger', 'يَنْبَغِي أَنْ'] },
        { cells: ['7', 'what the expert reported about stress', 'reported speech', 'أَكَّدَ … أَنَّ'] },
        { cells: ['8', 'is the view balanced?', 'R3-style judgement', 'concession + refutation = balanced'] },
      ],
      foot: 'Two minutes before every text: read all the questions and write a label beside each one. Then you know what to listen for.',
      notes: 'I DO (4 min) — think aloud on the website Text 1 questions. “Question 2 says ‘concede’ — I’ll listen for ṣaḥīḥun anna. Question 4 says Type 1 — I’ll wait for idhā and the sa- result. Question 8 asks if the view is balanced — I need BOTH ṣaḥīḥun anna and ghayra anna.” Students copy the method for Texts 2 and 3.',
    },
    P.quiz(B[3], { per: 8, min: 8, gloss: G1, seed: 31, notes: 'TEXT 1 (website) — multiple choice, 8 marks. Two-minute gap: students read and label the questions (as in the I Do). Read the script twice. Core: questions 1–4. Develop / Stretch: all 8.' }),
    P.quiz(B[4], { min: 6, gloss: G2, seed: 33, tip: 'Write S / K / both beside each question.\nListen for the NAME before each line.', notes: 'TEXT 2 (website) — matching: who says it? 6 marks. Read the speaker names clearly (سَلْمَى · كَرِيمٌ) — consider a different voice for each. Core: questions 1–3. Develop / Stretch: all 6.' }),
    P.quiz(B[5], { min: 6, gloss: G3, seed: 35, notes: 'TEXT 3 (website) — select the statement the text supports, 6 marks. Warn about distractors: an option may use words from the text but change the meaning (e.g. “the parks were built to attract traffic”). Core: questions 1–3. Develop / Stretch: all 6. Question 6 asks about REGISTER — formal planning language (passives, triggers).' }),
    {
      type: 'speaking', stage: 'youdo', min: 4, eyebrow: 'You do · report what you heard', title: 'Tell your partner what the speakers said', ar: 'التَّحَدُّثُ',
      prompts: [
        { route: 'core', ar: 'مَاذَا قَالَ الخَبِيرُ عَنِ النَّوْمِ؟' },
        { route: 'develop', ar: 'بِمَ سَلَّمَ كَرِيمٌ، وَكَيْفَ رَدَّ؟' },
        { route: 'stretch', ar: 'مَاذَا يَرْجُو المُخَطِّطُ، وَمَاذَا يَتَطَلَّبُ ذٰلِكَ؟' },
      ],
      stems: [
        { route: 'core', ar: 'قَالَ الخَبِيرُ إِنَّ ______ .' },
        { route: 'develop', ar: 'سَلَّمَ كَرِيمٌ بِأَنَّ ______ ، ثُمَّ رَدَّ بِأَنَّ ______ .' },
        { route: 'stretch', ar: 'يَرْجُو المُخَطِّطُ أَنْ ______ ، وَيَتَطَلَّبُ ذٰلِكَ أَنْ ______ .' },
      ],
      model: [
        { who: 'A', ar: 'قَالَ الخَبِيرُ إِنَّ النَّوْمَ الجَيِّدَ أَسَاسُ الصِّحَّةِ.', en: 'The expert said that good sleep is the foundation of health.' },
        { who: 'B', ar: 'سَلَّمَ كَرِيمٌ بِأَنَّ الدِّرَاسَةَ مُكْلِفَةٌ، ثُمَّ رَدَّ بِأَنَّ العَائِدَ يَسْتَحِقُّ.', en: 'Karim conceded that studying is expensive, then replied that the return is worth it.' },
      ],
      notes: 'SPEAKING (4 min) — teacher-made: retell the three texts with reported speech (قَالَ إِنَّ · سَلَّمَ بِأَنَّ · رَدَّ بِأَنَّ). Note: قَالَ takes إِنَّ, other reporting verbs take أَنَّ (P3-L06). ● 10 s think → ↔ 45 s rehearse muted → ◎ two pairs on open mic.',
    },
    P.fields(B[6], {
      min: 4, eyebrow: 'You do · performance analysis (website)', ar: 'تَحْلِيلُ الأَدَاءِ', head: 'Record', ex: 'Example', lw: 4.6, ew: 4.4,
      examples: ['…/8', '…/6', '…/6', 'opinion · conditional · grammar · detail', 'I will improve conditionals by labelling idhā / law questions'],
      foot: 'Total …/20. Circle your priority question type — it becomes your target for the L08 mock.',
      notes: 'PERFORMANCE ANALYSIS (4 min) — website fields. Students record their scores and the question type they found hardest. Ask: was the mistake in HEARING (missed the word) or in UNDERSTANDING (heard it, misread it)? Different fixes.',
    }),
    P.reflect(B[7], {
      min: 2, eyebrow: 'Feedback · listening reflection (website)', ar: 'التَّأَمُّلُ', can: 'my best strategy', next: 'my change for the mock',
      modelCan: 'Annotating every question before the script', modelNext: 'Trust my first answer on plain facts',
      extra: [['أَهَمُّ اسْتِرَاتِيجِيَّةٍ عِنْدِي هِيَ ______ .', 'My most important strategy is …', 'قِرَاءَةُ الأَسْئِلَةِ مُسْبَقًا']],
      foot: 'Two things I will do differently in the L08 mock — write them under your Paper 1 target.',
      notes: 'REFLECTION (2 min) — the website frames (in English), plus one Arabic line for Develop / Stretch.',
    }),
  ],
  selfCheck: [
    { route: 'core', text: 'I read and annotated every question before the script.' },
    { route: 'core', text: 'I left no blanks — I made a best-supported guess.' },
    { route: 'develop', text: 'I used the second reading to verify and correct, not to over-change.' },
    { route: 'develop', text: 'I heard the conditional type, the triggers and ṣaḥīḥun anna / ghayra anna.' },
    { route: 'stretch', text: 'I know which question type is my priority for the mock.' },
  ],
  prep: {
    words: [['المَعْنَى العَامُّ', 'R1 — the general meaning', '—'], ['التَّفَاصِيلُ الوَاقِعِيَّةُ', 'R2 — factual details', 'sg. تَفْصِيلٌ'], ['الأَدِلَّةُ النَّصِّيَّةُ', 'textual evidence', 'sg. دَلِيلٌ'], ['اسْتِنْتَاجُ الكَلِمَاتِ المَجْهُولَةِ', 'deducing unknown words', '—'], ['التَّطَابُقُ عَبْرَ النُّصُوصِ', 'cross-text matching', '—']],
    questionEn: 'What do you do when you meet a word you do not know in a reading text?',
    questionAr: 'إِذَا وَجَدْتُ كَلِمَةً مَجْهُولَةً، أَبْحَثُ عَنْ ______ .',
    homework: {
      core: 'Redo the text where you scored lowest using the read-along; learn the five words.',
      develop: 'Write the six strategies from memory in English; learn the five words.',
      stretch: 'For five questions, write the Arabic signal word that proved the answer; learn the five words.',
    },
    wordsSource: 'The five words come from the website P6-L03 vocabulary (the R1–R4 reading hierarchy).',
  },
  remember: 'Remember: read and label every question first · listen once for gist, twice to verify · never leave a blank · the grammar is a signpost.',
});

module.exports = { meta, slides };
