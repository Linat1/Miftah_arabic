'use strict';
/* GM-INT-04 · How Many? The Kam Rule — website: Mastery & Revision › Grammar › Interrogatives › Lesson 4 (kam + singular indefinite
 * accusative noun: kam kitāban? — never a plural; tanwīn fatḥ spelling: supporting alif on regular nouns, none after tāʾ marbūṭa or
 * hamza; adjectives copy the singular accusative; high-frequency questions — number, frequency (kam marratan), duration (kam
 * yawman) — and fixed questions (kam ʿumruka? kam thamanu hādhā? bi-kam?); answers use ordinary number grammar; clinic). Final
 * deck of the Grammar Mastery series; next is Progression P1-L01. Quizzes are the website’s (Starter, Mini-checks: singular
 * accusative, spelling; Repair lab; Mastery); items with bare vowel-mark options or “only / always” options are skipped. Colour code:
 * teal = kam, pink = counted noun (-an). I-do, meaning → question drill, correct-or-repair sorter, reading, frames and the model
 * survey are teacher-made on the website content (the drill uses the website game items). */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__14-interrogatives__grammar-mastery-04-kam';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-INT-04', fileTitle: 'Kam', title: 'How Many? The Kam Rule', arabic: 'كَمْ وَالْمُفْرَدُ الْمَنْصُوبُ',
  focus: 'How many? = kam + ONE singular noun ending in -an: kam kitāban? (how many books?), kam sayyāratan? (how many cars?). Never a plural after kam. The answer then uses a normal number: qaraʾtu thalāthata kutubin.',
  icon: 'FaHashtag',
});

const slides = G.gmLesson({
  code: 'GM-INT-04', site: KEY,
  support: `• Core: kam + singular indefinite accusative noun (kam waladan? kam sāʿatan? kam marratan?). Develop: tanwīn fatḥ spelling (kitāban with alif; sayyāratan and māʾan without), matching adjectives (kam kitāban jadīdan?), fixed questions kam ʿumruka? and kam thamanu hādhā? / bi-kam? Stretch: kam across tenses, survey questions, and answering with ordinary number grammar.
• Website memory phrase: the number is unknown, so the category noun appears ONCE — in the singular — after kam. Do not copy the kam form into the answer.
• Colour code: teal = kam, pink = counted noun. Final Grammar Mastery deck: recycles GM-NUM-01 to 04 (numbers, age, money), GM-CASE-02 (-an spelling) and GM-INT-01 to 03.`,
  teach: 'The formula; spelling; adjectives; frequent questions; answers.',
  wedo: 'Meaning → question; correct or repair?; repair.',
  next: { nextCode: 'P1-L01', nextTitle: 'Diet and Nutrition', nextAr: 'الْغِذَاءُ وَالتَّغْذِيَةُ' },
  doNow: {
    questions: [
      W(/كَمْ Starter/, 0, { prompt: 'Choose “How many boys?”', feedback: 'Singular -an: waladan.' }),
      W(/كَمْ Starter/, 1, { prompt: 'Choose “How many cars?”', feedback: 'Singular: sayyāratan.' }),
      W(/كَمْ Starter/, 3, { prompt: 'Which word is spelled correctly with the supporting alif?', feedback: 'Kitāban: alif added.' }),
      W(/كَمْ Starter/, 4, { prompt: 'Which feminine form is correct?', feedback: 'No extra alif after tāʾ marbūṭa.' }),
      W(/كَمْ Starter/, 5, { prompt: 'Choose the noun + adjective pair after kam.', feedback: 'Both singular -an.' }),
    ],
    keyIdea: { text: 'kam + ONE singular noun in -an (+ adjective in -an). The answer uses a normal number.', ar: '{k|كَمْ} {e|كِتَابًا} قَرَأْتَ؟ ‖ قَرَأْتُ ثَلَاثَةَ كُتُبٍ.' },
    retrieves: 'The website Starter — GM-CASE-02 -an spelling and GM-NUM-01 number phrases.',
  },
  objectives: ['Ask “how many?” with kam + singular -an.', 'Spell -an with and without alif.', 'Add a matching adjective.', 'Answer with a normal number phrase.'],
  routes: {
    core: ['I write kam kitāban? and kam marratan?', 'I never put a plural after kam.'],
    develop: ['I spell sayyāratan and māʾan correctly.', 'I ask kam ʿumruka? and bi-kam?'],
    stretch: ['I answer with ordinary number grammar.', 'I write and report an eight-question survey.'],
  },
  terms: {
    items: [
      { ar: 'كَمْ', en: 'how many? / how much?', note: 'كَمْ كِتَابًا؟' },
      { ar: 'الْمَعْدُودُ', en: 'the counted noun', note: 'كِتَابًا' },
      { ar: 'مُفْرَدٌ مَنْصُوبٌ', en: 'singular, accusative (-an)', note: 'سَيَّارَةً' },
      { ar: 'تَنْوِينُ الْفَتْحِ', en: '-an ending (with or without alif)', note: 'قَلَمًا · مَرَّةً' },
      { ar: 'كَمْ مَرَّةً؟', en: 'how many times? (frequency)', note: 'كَمْ مَرَّةً تَتَدَرَّبُ؟' },
      { ar: 'بِكَمْ؟', en: 'how much? (price)', note: 'بِكَمْ هَذَا؟' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · the core formula (website table)', title: 'kam + ONE singular noun in -an', ar: 'كَمْ + اسْمٌ مُفْرَدٌ نَكِرَةٌ مَنْصُوبٌ', ltr: true,
      cols: [{ label: 'Meaning', w: 3.6 }, { label: 'Correct', w: 4.2, size: 26 }, { label: 'Not this', w: 4.53, size: 24 }],
      rows: [
        { core: true, cells: ['how many students?', 'كَمْ طَالِبًا؟', 'كَمْ طُلَّابٍ؟'] },
        { core: true, cells: ['how many girls?', 'كَمْ بِنْتًا؟', 'كَمْ بَنَاتٍ؟'] },
        { core: true, cells: ['how many schools?', 'كَمْ مَدْرَسَةً؟', 'كَمْ مَدَارِسَ؟'] },
        { cells: ['how many days?', 'كَمْ يَوْمًا؟', 'كَمْ أَيَّامٍ؟'] },
        { cells: ['how many times?', 'كَمْ مَرَّةً؟', 'كَمْ مَرَّاتٍ؟'] },
        { cells: ['how many lessons?', 'كَمْ دَرْسًا؟', 'كَمْ دُرُوسٍ؟'] },
      ],
      foot: 'Website memory phrase: the number is unknown, so the category noun appears ONCE — singular, indefinite (no al-) and accusative (-an). English says “how many books”; Arabic says “how many book”.',
      notes: 'PART 1 (3 min) — website “The core formula”. Column 3 is the website’s own “not this” column. Choral: kam ṭāliban? kam bintan? …',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · tanwīn fatḥ spelling (website table)', title: 'Alif or no alif?', ar: 'كِتَابًا · سَيَّارَةً · مَاءً', ltr: true,
      cols: [{ label: 'Noun', w: 2.8, size: 24 }, { label: 'After kam', w: 4.0, size: 24 }, { label: 'Spelling', w: 5.53 }],
      rows: [
        { core: true, cells: ['كِتَابٌ', 'كَمْ كِتَابًا؟', 'regular ending: add the alif'] },
        { core: true, cells: ['قَلَمٌ', 'كَمْ قَلَمًا؟', 'regular ending: add the alif'] },
        { cells: ['يَوْمٌ', 'كَمْ يَوْمًا؟', 'regular ending: add the alif'] },
        { core: true, cells: ['سَيَّارَةٌ', 'كَمْ سَيَّارَةً؟', 'tāʾ marbūṭa: NO extra alif'] },
        { cells: ['مَرَّةٌ', 'كَمْ مَرَّةً؟', 'tāʾ marbūṭa: NO extra alif'] },
        { cells: ['مَاءٌ', 'كَمْ كُوبًا مِنَ الْمَاءِ؟', 'count a unit; māʾan has no extra alif'] },
      ],
      foot: 'Website common visual error: sayyāratan written with an extra alif is wrong — the tāʾ marbūṭa already carries the -an. Water is not counted directly: count cups (kam kūban mina l-māʾi?).',
      notes: 'PART 2 (3 min) — website “Tanwīn fatḥ spelling”. Recycles GM-CASE-02 part 2.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 3 · add adjectives (website models) · Develop', title: 'The adjective follows: singular -an', ar: 'الصِّفَةُ بَعْدَ كَمْ', ltr: true,
      cols: [{ label: 'Question', w: 6.0, size: 22 }, { label: 'Meaning', w: 6.33 }],
      rows: [
        { core: true, cells: ['كَمْ كِتَابًا جَدِيدًا اشْتَرَيْتَ؟', 'How many new books did you buy?'] },
        { core: true, cells: ['كَمْ سَيَّارَةً سَرِيعَةً رَأَيْتِ؟', 'How many fast cars did you see? (to a girl)'] },
        { cells: ['كَمْ مَدْرَسَةً كَبِيرَةً فِي مَدِينَتِكَ؟', 'How many big schools are in your city?'] },
        { cells: ['كَمْ طَالِبًا جَدِيدًا فِي الصَّفِّ؟', 'How many new students are in the class?'] },
      ],
      foot: 'Website important note: the answer may use a normal number phrase with different noun rules. Do not copy the singular -an form mechanically into the answer.',
      notes: 'PART 3 (2 min) — website “Add adjectives and other modifiers” (rows 3–4 from the website game and teacher).',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 4 · high-frequency kam questions (website table) · Develop', title: 'Count it — or use a fixed question', ar: 'أَسْئِلَةٌ شَائِعَةٌ بِكَمْ', ltr: true,
      cols: [{ label: 'Purpose', w: 3.0 }, { label: 'Question', w: 4.8, size: 22 }, { label: 'Note', w: 4.53 }],
      rows: [
        { core: true, cells: ['number of people / items', 'كَمْ طَالِبًا فِي الصَّفِّ؟', 'core rule: singular -an'] },
        { core: true, cells: ['frequency', 'كَمْ مَرَّةً تَتَدَرَّبُ؟', 'marratan is counted'] },
        { cells: ['duration', 'كَمْ يَوْمًا بَقِيتَ؟', 'yawman is counted'] },
        { core: true, cells: ['age', 'كَمْ عُمْرُكَ؟', 'fixed question — no counted noun'] },
        { cells: ['price', 'كَمْ ثَمَنُ هَذَا؟ · بِكَمْ هَذَا؟', 'fixed question — ask the price'] },
      ],
      foot: 'Website: do not over-apply one rule. The singular -an rule is for the COUNTED noun after kam. Kam ʿumruka? and kam thamanu hādhā? are fixed patterns (GM-NUM-03, GM-NUM-04).',
      notes: 'PART 4 (3 min) — website “High-frequency kam questions”.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 5 · answering kam questions (website models) · Stretch', title: 'The answer uses a normal number', ar: 'الْجَوَابُ عَنْ كَمْ', ltr: true,
      cols: [{ label: 'Question', w: 4.6, size: 22 }, { label: 'Answer', w: 4.6, size: 22 }, { label: 'Note', w: 3.13 }],
      rows: [
        { core: true, cells: ['كَمْ كِتَابًا قَرَأْتَ؟', 'قَرَأْتُ ثَلَاثَةَ كُتُبٍ.', '3–10: plural -in'] },
        { cells: ['كَمْ مَرَّةً تَسْبَحِينَ فِي الْأُسْبُوعِ؟', 'أَسْبَحُ مَرَّتَيْنِ فِي الْأُسْبُوعِ.', 'dual: twice'] },
        { cells: ['كَمْ طَالِبًا فِي الصَّفِّ؟', 'فِي الصَّفِّ عِشْرُونَ طَالِبًا.', '11–99: singular -an'] },
        { cells: ['كَمْ يَوْمًا بَقِيتَ؟', 'بَقِيتُ عَشَرَةَ أَيَّامٍ.', '3–10: plural -in'] },
      ],
      foot: 'Website: the question tests the kam structure; the answer uses ordinary number–noun rules (GM-NUM-01). Speaking strategy: give the number, then add a time, reason or comparison.',
      notes: 'PART 5 (2 min) — website “Answering kam questions” (rows 3–4 teacher-added from GM-NUM-01).',
    },
  ],
  quick: [
    W(/singular accusative/, 0, { prompt: 'Choose “How many lessons?”', feedback: 'Singular: darsan.' }),
    W(/singular accusative/, 1, { prompt: 'Choose “How many female teachers?”', feedback: 'Singular feminine: muʿallimatan.' }),
    W(/singular accusative/, 2, { prompt: 'Choose “How many hours?”', feedback: 'Singular: sāʿatan.' }),
    W(/Mini-check: spelling/, 0, { prompt: 'Choose the correct form after kam.', feedback: 'Regular qalam: qalaman with alif.' }),
  ],
  quickNote: 'website mini-checks: singular accusative and spelling.',
  ido: {
    title: 'Watch me write survey questions',
    steps: [
      { head: 'Category', ar: 'طَالِبٌ', think: 'What are we counting?' },
      { head: 'Singular', ar: 'طَالِبًا', think: 'One form — not ṭullāb.' },
      { head: 'Feminine', ar: 'طَالِبَةً', think: 'No extra alif.' },
      { head: 'Frequency', ar: 'مَرَّةً', think: 'How many times?' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'KAM', e: 'SINGULAR -AN' },
    model: '{k|كَمْ} {e|طَالِبًا} يَمْشِي إِلَى الْمَدْرَسَةِ؟ {k|كَمْ} {e|طَالِبَةً} تَرْكَبُ الْحَافِلَةَ؟ {k|كَمْ} {e|مَرَّةً} يُمَارِسُونَ الرِّيَاضَةَ فِي الْأُسْبُوعِ؟ — يَمْشِي اثْنَا عَشَرَ طَالِبًا، وَتَرْكَبُ تِسْعُ طَالِبَاتٍ الْحَافِلَةَ، وَيُمَارِسُونَ الرِّيَاضَةَ ثَلَاثَ مَرَّاتٍ.',
    modelEn: 'How many students walk to school? How many girls take the bus? How many times a week do they do sport? — Twelve students walk, nine girls take the bus, and they do sport three times.',
    notes: 'Website “Reading: class survey” questions with teacher answers. Point out: the answers use normal number grammar (tisʿu ṭālibātin, thalātha marrātin).',
  },
  models: [
    { ar: 'كَمْ وَلَدًا فِي الصَّفِّ؟', en: 'How many boys are in the class?', tip: 'Singular -an.' },
    { ar: 'كَمْ سَيَّارَةً رَأَيْتَ؟', en: 'How many cars did you see?', tip: 'No extra alif.' },
    { ar: 'كَمْ كِتَابًا جَدِيدًا اشْتَرَيْتِ؟', en: 'How many new books did you buy? (to a girl)', tip: 'Adjective -an too.' },
    { ar: 'كَمْ مَرَّةً تَتَدَرَّبُ فِي الْأُسْبُوعِ؟', en: 'How many times a week do you train?', tip: 'Frequency.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · meaning → kam question (website game)', title: 'One noun, singular, -an', ar: 'اِسْأَلْ بِكَمْ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Meaning', w: 3.8 }, { label: 'Arabic', w: 5.0, size: 24 }, { label: 'Check', w: 3.53 }],
      rows: [
        { core: true, cells: ['How many books?', 'كَمْ كِتَابًا؟', 'alif added'] },
        { core: true, cells: ['How many girls?', 'كَمْ بِنْتًا؟', 'singular, not banāt'] },
        { core: true, cells: ['How many cars?', 'كَمْ سَيَّارَةً؟', 'no extra alif'] },
        { cells: ['How many days?', 'كَمْ يَوْمًا؟', 'singular, not ayyām'] },
        { cells: ['How many new books?', 'كَمْ كِتَابًا جَدِيدًا؟', 'adjective -an'] },
        { cells: ['How many large schools?', 'كَمْ مَدْرَسَةً كَبِيرَةً؟', 'both -atan'] },
      ],
      foot: 'Website proofreading sequence: singular → indefinite → -an spelling → adjective agreement.',
      notes: 'WE DO (3 min) — website game items. Cover column 2; then a partner answers each question with a number.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · website repair game', title: 'Correct, or needs repair?', ar: 'صَحِيحٌ أَمْ يَحْتَاجُ إِلَى تَصْحِيحٍ؟',
      categories: ['Correct', 'Needs repair'],
      items: [['كَمْ كِتَابًا؟', 0], ['كَمْ سَيَّارَةً؟', 0], ['كَمْ يَوْمًا؟', 0], ['كَمْ عُمْرُكَ؟', 0], ['كَمْ كُتُبٍ؟', 1], ['كَمْ سَيَّارَةًا؟', 1], ['كَمْ أَيَّامٍ؟', 1], ['كَمْ الْوَلَدُ؟', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). For each repair card students say the correct form and which check failed (plural, extra alif, al-).',
    },
  ],
  mistakes: [
    { wrong: 'كَمْ طُلَّابٍ فِي الصَّفِّ؟', right: 'كَمْ طَالِبًا فِي الصَّفِّ؟', why: 'Singular -an after kam (website repair lab).' },
    { wrong: 'كَمْ مَدْرَسَةًا فِي الْمَدِينَةِ؟', right: 'كَمْ مَدْرَسَةً فِي الْمَدِينَةِ؟', why: 'No extra alif after tāʾ marbūṭa (website repair lab).' },
    { wrong: 'قَرَأْتُ كَمْ كِتَابًا.', right: 'قَرَأْتُ ثَلَاثَةَ كُتُبٍ.', why: 'The answer uses a normal number (website note).' },
  ],
  hints: ['Plural after kam?', 'Alif after tāʾ marbūṭa?', 'Does the answer repeat kam?'],
  practice: [
    W(/Mini-check: spelling/, 1, { prompt: 'Choose the correct feminine form after kam.', feedback: 'Ḥaqībatan: no extra alif.' }),
    W(/Mini-check: spelling/, 2, { prompt: 'Choose the correct spelling of “water” (-an).', feedback: 'Māʾan: no extra alif.' }),
    W(/Mini-check: spelling/, 3, { prompt: 'Which kam question is fully accurate?', feedback: 'Yawman: singular -an with alif.' }),
    W(/Repair lab/, 2, { prompt: 'Repair: كَمْ كِتَابًا مُفِيدٌ قَرَأْتَ؟', feedback: 'Adjective -an too: mufīdan.' }),
  ],
  practiceLabel: 'website mini-check: spelling and Repair lab',
  read: {
    title: 'Our class survey', label: 'website reading: class survey (teacher-written report)',
    text: 'أَجْرَيْنَا اسْتِبْيَانًا فِي صَفِّنَا. سَأَلْنَا: كَمْ أَخًا وَأُخْتًا عِنْدَكَ؟ كَمْ كِتَابًا تَقْرَأُ فِي الشَّهْرِ؟ كَمْ سَاعَةً تَقْضِي أَمَامَ الشَّاشَةِ يَوْمِيًّا؟ وَجَدْنَا أَنَّ أَغْلَبَ الطُّلَّابِ عِنْدَهُمْ أَخَوَانِ أَوْ ثَلَاثَةُ إِخْوَةٍ. يَقْرَأُ الطَّالِبُ كِتَابَيْنِ فِي الشَّهْرِ تَقْرِيبًا، وَلَكِنَّهُ يَقْضِي أَرْبَعَ سَاعَاتٍ أَمَامَ الشَّاشَةِ كُلَّ يَوْمٍ! سَأَلْنَا أَيْضًا: كَمْ مَرَّةً تُمَارِسُ الرِّيَاضَةَ؟ فَكَانَ الْجَوَابُ: مَرَّتَيْنِ فِي الْأُسْبُوعِ فَقَطْ.',
    glossary: [['اسْتِبْيَانًا', 'a survey'], ['الشَّاشَةِ', 'the screen'], ['يَوْمِيًّا', 'daily'], ['أَغْلَبَ', 'most'], ['تَقْرِيبًا', 'about / roughly']],
    task: 'Website: identify the category, tense and counted noun in each kam question. Then check the answers use normal number grammar.',
    questions: [
      q('How many books does a student read per month?', ['about two', 'four', 'ten'], 'Kitābayni fī sh-shahri taqrīban.'),
      q('How many hours a day in front of a screen?', ['four', 'two', 'three'], 'Arbaʿa sāʿātin.'),
      q('Why kam sāʿatan, not kam sāʿātin?', ['after kam: singular -an', 'it is only one hour', 'it is a mistake'], 'The kam rule.'),
      q('How often do they do sport?', ['twice a week', 'every day', 'three times a week'], 'Marratayni fī l-usbūʿi faqaṭ.'),
    ],
    qNote: 'Teacher-written report built on the website class-survey questions; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: the class questionnaire', source: 'website speaking questionnaire',
    prompts: [
      { route: 'core', ar: 'كَمْ أَخًا عِنْدَكَ؟' },
      { route: 'develop', ar: 'كَمْ سَاعَةً تَدْرُسُ كُلَّ يَوْمٍ؟' },
      { route: 'stretch', ar: 'كَمْ مَرَّةً سَافَرْتَ هَذِهِ السَّنَةَ؟ وَإِلَى أَيْنَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'عِنْدِي ______ .' },
      { route: 'develop', ar: 'أَدْرُسُ ______ كُلَّ يَوْمٍ، لِأَنَّ ______ .' },
      { route: 'stretch', ar: 'سَافَرْتُ ______ : إِلَى ______ وَ______ .' },
    ],
    model: [
      { who: 'A', ar: 'كَمْ عُمْرُكِ؟ وَكَمْ أُخْتًا عِنْدَكِ؟', en: 'How old are you? And how many sisters do you have? (to a girl)' },
      { who: 'B', ar: 'عُمْرِي أَرْبَعَةَ عَشَرَ عَامًا، وَعِنْدِي أُخْتَانِ وَأَخٌ وَاحِدٌ.', en: 'I am fourteen, and I have two sisters and one brother.' },
    ],
    notes: 'Website: ask about books, siblings, school subjects, weekly activities, journeys and screen time. Extend every answer.',
  },
  write: {
    siteTask: 'Write eight kam questions, collect or invent answers, then write a short report comparing the results.',
    core: { amount: '5 questions', task: 'kam questions about your class and family.', how: 'kam ṭāliban? kam akhan?' },
    develop: { amount: '8 questions', task: 'Add feminine nouns, an adjective, frequency and duration.', how: 'kam marratan? kam yawman?' },
    stretch: { amount: '8 questions + report', task: 'Website survey with a results report.', how: 'Answers in normal number grammar.' },
  },
  frames: {
    core: [
      { en: 'How many … are in your class?', ar: 'كَمْ ______ فِي صَفِّكَ؟' },
      { en: 'How many … do you have?', ar: 'كَمْ ______ عِنْدَكَ؟' },
      { en: 'How old is …?', ar: 'كَمْ عُمْرُ ______ ؟' },
      { en: 'How much is …?', ar: 'بِكَمْ ______ ؟' },
    ],
    develop: [
      { en: 'How many hours do you …?', ar: 'كَمْ سَاعَةً ______ ؟' },
      { en: 'How many times a week do you …?', ar: 'كَمْ مَرَّةً ______ فِي الْأُسْبُوعِ؟' },
      { en: 'How many new … did you buy?', ar: 'كَمْ ______ جَدِيدًا اشْتَرَيْتَ؟' },
      { en: 'How many days did you stay in …?', ar: 'كَمْ يَوْمًا بَقِيتَ فِي ______ ؟' },
    ],
    bank: ['كَمْ', 'طَالِبًا', 'طَالِبَةً', 'كِتَابًا', 'سَاعَةً', 'مَرَّةً', 'يَوْمًا', 'أَخًا', 'أُخْتًا', 'كُوبًا', 'جَدِيدًا', 'بِكَمْ', 'عُمْرُكَ'],
  },
  stretchTask: {
    task: 'Website class or family survey: eight kam questions, answers and a short comparison report.',
    checklist: ['Eight singular -an counted nouns.', 'Two feminine nouns and two adjectives.', 'One duration and one frequency question.', 'One fixed age or price question.', 'Answers in normal number grammar.'],
    phrases: [['أَجْرَيْنَا اسْتِبْيَانًا', 'we carried out a survey'], ['النَّتَائِجُ', 'the results'], ['أَغْلَبُ', 'most'], ['تَقْرِيبًا', 'about'], ['يَوْمِيًّا', 'daily'], ['فَقَطْ', 'only']],
  },
  model: {
    text: 'أَسْئِلَةُ الِاسْتِبْيَانِ: كَمْ شَخْصًا فِي أُسْرَتِكَ؟ كَمْ غُرْفَةً فِي بَيْتِكُمْ؟ كَمْ كِتَابًا قَرَأْتَ هَذَا الشَّهْرَ؟ كَمْ سَاعَةً تَنَامُ كُلَّ لَيْلَةٍ؟ كَمْ مَرَّةً تَأْكُلُ الْخُضَارَ فِي الْأُسْبُوعِ؟ كَمْ كُوبًا مِنَ الْمَاءِ تَشْرَبُ يَوْمِيًّا؟ كَمْ عُمْرُ أَكْبَرِ شَخْصٍ فِي أُسْرَتِكَ؟ بِكَمِ اشْتَرَيْتَ آخِرَ كِتَابٍ؟ — النَّتَائِجُ: فِي أُسْرَةِ أَغْلَبِ الطُّلَّابِ خَمْسَةُ أَشْخَاصٍ، وَفِي بُيُوتِهِمْ أَرْبَعُ غُرَفٍ. قَرَأَ الطُّلَّابُ كِتَابًا وَاحِدًا هَذَا الشَّهْرَ، وَيَنَامُونَ ثَمَانِيَ سَاعَاتٍ تَقْرِيبًا. يَأْكُلُونَ الْخُضَارَ خَمْسَ مَرَّاتٍ فِي الْأُسْبُوعِ، وَيَشْرَبُونَ سِتَّةَ أَكْوَابٍ مِنَ الْمَاءِ. أَكْبَرُ شَخْصٍ فِي أَغْلَبِ الْأُسَرِ هُوَ الْجَدُّ أَوِ الْجَدَّةُ.',
    en: 'Survey questions: How many people are in your family? How many rooms are in your house? How many books did you read this month? How many hours do you sleep each night? How many times a week do you eat vegetables? How many glasses of water do you drink a day? How old is the oldest person in your family? How much did you pay for your last book? — Results: most students’ families have five people, and their houses have four rooms. The students read one book this month, and they sleep about eight hours. They eat vegetables five times a week and drink six glasses of water. The oldest person in most families is the grandfather or grandmother.',
    find: ['kam + singular -an', 'kam marratan (frequency)', 'fixed question (kam ʿumru / bi-kam)', 'answer in normal number grammar'],
    source: 'teacher model on the website survey task',
  },
  selfCheck: [
    { route: 'core', text: 'After kam I wrote ONE singular noun.' },
    { route: 'core', text: 'The noun ends in -an and has no al-.' },
    { route: 'develop', text: 'No extra alif after tāʾ marbūṭa or hamza.' },
    { route: 'develop', text: 'My adjectives after kam end in -an too.' },
    { route: 'stretch', text: 'My answers use normal number grammar, not the kam form.' },
  ],
  exit: [
    W(/كَمْ Mastery/, 2, { prompt: 'Choose “How many schools?”', feedback: 'Madrasatan, no extra alif.' }),
    W(/كَمْ Mastery/, 5, { prompt: 'Choose the frequency question.', feedback: 'Kam marratan?' }),
    W(/كَمْ Mastery/, 8, { prompt: 'Choose the natural question about water.', feedback: 'Count cups: kam kūban.' }),
  ],
  mastery: false,
  prep: {
    words: [['بُرُوتِينٌ', 'protein', '—'], ['كَرْبُوهِيدْرَاتٌ', 'carbohydrates', '—'], ['دُهُونٌ', 'fats', '—'], ['أَلْيَافٌ', 'fibre', '—'], ['يَحْتَوِي عَلَى', 'contains', '—']],
    questionEn: 'Next we move on to Progression P1: Diet and Nutrition. What do you think eggs contain?',
    questionAr: 'يَحْتَوِي الْبَيْضُ عَلَى ______ .',
    homework: {
      core: 'Write five kam questions about your home and family.',
      develop: 'Write eight kam questions with two adjectives and one frequency question.',
      stretch: 'Website survey with a results report.',
    },
    wordsSource: 'The five words prepare P1-L01 (Progression: Diet and Nutrition).',
  },
  remember: 'Remember: kam + ONE singular noun in -an (kam kitāban? kam sayyāratan?) · no plural, no al- · alif on regular nouns, none after tāʾ marbūṭa or hamza · adjectives -an too · kam ʿumruka? and bi-kam? are fixed · the answer uses a normal number.',
});

module.exports = { meta, slides };
