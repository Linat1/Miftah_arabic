'use strict';
/* GM-N-04 · Sound Feminine Plural — website: Mastery & Revision › Grammar › Nouns › Lesson 4 (remove ة and add ـَاتٌ; not every feminine noun
 * takes it — مَدْرَسَةٌ → مَدَارِسُ; case pattern ـَاتُ / ـَاتِ: the accusative takes KASRA; human feminine plural agreement; also many non-human
 * nouns: سَيَّارَاتٌ). Entry check, guided mini-check and mastery check are the website’s; explanation slides, sorter, repair, reading
 * questions, frames and model are teacher-made on the website rules. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-N-04', fileTitle: 'Sound_Feminine_Plural', title: 'Sound Feminine Plural', arabic: 'جَمْعُ الْمُؤَنَّثِ السَّالِمُ',
  focus: 'Take off the tāʾ marbūṭa and add -āt (female student → female students; car → cars). It has only two case endings: -ātu for the subject and -āti everywhere else, even for an object.',
  icon: 'FaPersonDress',
});

const slides = G.gmLesson({
  code: 'GM-N-04', site: 'grammar__03-nouns__grammar-mastery-04-sound-feminine-plural',
  support: `• Core: ة → ـَاتٌ for female people and common things (طَالِبَاتٌ · سَيَّارَاتٌ). Develop: ـَاتُ (subject) vs ـَاتِ (object / after a preposition); feminine plural adjectives for women. Stretch: the accusative with kasra; nouns in ة that take a BROKEN plural instead.
• QUR’AN BRIDGE: الْمُؤْمِنَاتُ · الصَّالِحَاتِ (وَعَمِلُوا الصَّالِحَاتِ — an object, with kasra!) · السَّمَاوَاتِ. Students hear the kasra on objects every time they recite.
• Agreement reminder from GM-ART-02: women → feminine plural adjective (الطَّالِبَاتُ مُجْتَهِدَاتٌ); things → feminine singular (السَّيَّارَاتُ سَرِيعَةٌ).`,
  teach: 'The -āt plural; exceptions; two case endings; agreement.',
  wedo: 'Sort -āt and broken plurals, repair the accusative.',
  next: { nextCode: 'GM-N-05', nextTitle: 'Broken Plurals', nextAr: 'جَمْعُ التَّكْسِيرِ' },
  doNow: {
    keyIdea: { text: 'Tāʾ marbūṭa out, -āt in. Subject -ātu; everything else -āti (yes, even an object).', ar: 'حَضَرَتِ {k|الطَّالِبَاتُ} ‖ رَأَيْتُ {e|الطَّالِبَاتِ}' },
    retrieves: 'The website Entry Check (questions 1–5) — compare with GM-N-03 (ـُونَ / ـِينَ).',
  },
  objectives: ['Form the sound feminine plural with -āt.', 'Recognise feminine nouns that take a broken plural instead.', 'Choose -ātu or -āti from the noun’s job.', 'Use feminine plural adjectives for women and feminine singular for things.'],
  routes: {
    core: ['I can build female students, teachers and cars.', 'I know the tāʾ marbūṭa disappears before -āt.'],
    develop: ['I use -āti as an object and after a preposition.', 'I give women a feminine plural adjective.'],
    stretch: ['I never write -āta with fatḥa.', 'I know school and city take broken plurals.'],
  },
  terms: {
    items: [
      { ar: 'جَمْعُ الْمُؤَنَّثِ السَّالِمُ', en: 'sound feminine plural', note: 'طَالِبَةٌ · طَالِبَاتٌ' },
      { ar: 'ـَاتٌ', en: 'the plural ending', tr: '-ātun', note: 'طَالِبَاتٌ' },
      { ar: 'ـَاتُ', en: 'subject ending (definite)', tr: '-ātu', note: 'حَضَرَتِ الطَّالِبَاتُ' },
      { ar: 'ـَاتِ', en: 'object / after a preposition', tr: '-āti', note: 'رَأَيْتُ الطَّالِبَاتِ' },
      { ar: 'جَمْعُ التَّكْسِيرِ', en: 'broken plural', note: 'مَدْرَسَةٌ · مَدَارِسُ' },
      { ar: 'كَسْرَةٌ', en: 'kasra (-i)', note: 'the object ending of this plural' },
    ],
  },
  explain: [
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 1 · from tāʾ marbūṭa to -āt (website section)', title: 'Take off the tāʾ marbūṭa, add -āt', ar: 'مِنَ التَّاءِ الْمَرْبُوطَةِ إِلَى «ات»',
      points: [
        'Remove the tāʾ marbūṭa and attach -ātun (website regular process).',
        'Used for groups of women and girls: female students, female teachers.',
        'Also for many THINGS ending in tāʾ marbūṭa: cars, universities, stories — and a few masculine words, such as airports.',
        'Not every feminine noun follows it: school → schools and city → cities are BROKEN plurals.',
        'Learn the plural together with the singular, as a vocabulary family.',
      ],
      examples: [
        { ar: 'طَالِبَةٌ · طَالِبَاتٌ', en: 'female student(s)' },
        { ar: 'مُعَلِّمَةٌ · مُعَلِّمَاتٌ', en: 'female teacher(s)' },
        { ar: 'سَيَّارَةٌ · سَيَّارَاتٌ', en: 'car(s)', note: 'a thing' },
        { ar: 'مَدْرَسَةٌ · مَدَارِسُ', en: 'school(s)', note: 'broken plural' },
      ],
      callout: { text: 'Website: some feminine nouns have broken plurals and must be learned as vocabulary families — school and city (fourth example) are the classic ones.' },
      notes: 'PART 1 (3 min) — website section “From ة to ات”.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · case pattern -ātu / -āti (website table)', title: 'Only two endings — and the object takes kasra', ar: 'ـَاتُ وَـَاتِ', ltr: true,
      cols: [{ label: 'Role', w: 3.0 }, { label: 'Example (website)', w: 5.4, size: 24 }, { label: 'Ending', w: 3.93 }],
      rows: [
        { core: true, cells: ['subject', 'حَضَرَتِ الطَّالِبَاتُ.', '-ātu (ḍamma)'] },
        { core: true, cells: ['object', 'رَأَيْتُ الطَّالِبَاتِ.', '-āti (KASRA, not fatḥa)'] },
        { core: true, cells: ['after a preposition', 'تَحَدَّثْتُ مَعَ الطَّالِبَاتِ.', '-āti (kasra)'] },
        { cells: ['indefinite subject', 'فِي الصَّفِّ طَالِبَاتٌ.', '-ātun'] },
        { cells: ['indefinite object', 'رَأَيْتُ طَالِبَاتٍ.', '-ātin'] },
      ],
      foot: 'Important contrast (website): singular nouns usually take fatḥa in the accusative, but this plural takes KASRA (see the object row).',
      notes: 'PART 2 (3 min) — website table “Case pattern”. Qur’an: وَعَمِلُوا الصَّالِحَاتِ (object with kasra).',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 3 · agreement: women or things? · Develop', title: 'Feminine plural — or feminine singular?', ar: 'الْمُطَابَقَةُ', ltr: true,
      cols: [{ label: 'Meaning', w: 3.6 }, { label: 'Arabic', w: 4.8, size: 24 }, { label: 'Adjective', w: 3.93 }],
      rows: [
        { core: true, cells: ['The female students are active.', 'الطَّالِبَاتُ نَشِيطَاتٌ.', 'women → feminine PLURAL'] },
        { core: true, cells: ['the expert female teachers', 'الْمُعَلِّمَاتُ الْخَبِيرَاتُ', 'women → feminine plural'] },
        { core: true, cells: ['The cars are fast.', 'السَّيَّارَاتُ سَرِيعَةٌ.', 'things → feminine SINGULAR'] },
        { cells: ['the big universities', 'الْجَامِعَاتُ الْكَبِيرَةُ', 'things → feminine singular'] },
      ],
      foot: 'Same ending -āt, two agreement rules: people → plural adjective · things → feminine singular adjective.',
      notes: 'PART 3 (2 min) — links GM-ART-02 (human vs non-human plurals).',
    },
  ],
  quickQuiz: /Guided/i, quickPick: [0, 1, 2, 3], quickNote: 'website guided mini-check, questions 1–4.',
  ido: {
    title: 'Watch me build and place the plural',
    steps: [
      { head: 'Singular', ar: 'مُعَلِّمَةٌ', think: 'Feminine, a person.' },
      { head: 'Plural', ar: 'مُعَلِّمَاتٌ', think: 'tāʾ marbūṭa out, -āt in.' },
      { head: 'Subject', ar: 'حَضَرَتِ الْمُعَلِّمَاتُ', think: 'Subject → -ātu.' },
      { head: 'Object', ar: 'شَكَرْتُ الْمُعَلِّمَاتِ', think: 'Object → -āti (kasra!).' },
    ],
    legend: ['k', 'e'], legendLabels: { k: '-ĀTU (subject)', e: '-ĀTI (other)' },
    model: 'حَضَرَتِ {k|الْمُعَلِّمَاتُ} مُبَكِّرًا، وَشَكَرْتُ {e|الْمُعَلِّمَاتِ} بَعْدَ الدَّرْسِ. الْمُعَلِّمَاتُ خَبِيرَاتٌ.',
    modelEn: 'The (female) teachers came early, and I thanked the teachers after the lesson. The teachers are experts.',
    notes: 'Stop at شَكَرْتُ: “Object — so for a SINGULAR I would say fatḥa (شَكَرْتُ الْمُعَلِّمَةَ). For THIS plural: kasra.”',
  },
  models: [
    { ar: 'فِي مَدْرَسَتِنَا مُعَلِّمَاتٌ خَبِيرَاتٌ.', en: 'In our school there are expert female teachers.', tip: 'Website text: plural + plural adjective.' },
    { ar: 'رَأَيْتُ الطَّالِبَاتِ فِي الْمَكْتَبَةِ.', en: 'I saw the female students in the library.', tip: 'Object → kasra.' },
    { ar: 'السَّيَّارَاتُ فِي الشَّارِعِ كَثِيرَةٌ.', en: 'The cars in the street are many.', tip: 'Things → feminine singular.' },
    { ar: 'دَرَسَ أَخِي فِي جَامِعَاتٍ مُخْتَلِفَةٍ.', en: 'My brother studied at different universities.', tip: 'After a preposition → -ātin.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · -āt or broken plural?', title: 'Which plural?', ar: 'صَنِّفْ',
      categories: ['Sound feminine plural (-āt)', 'Broken plural'],
      items: [['طَالِبَةٌ · طَالِبَاتٌ', 0], ['مَدْرَسَةٌ · مَدَارِسُ', 1], ['سَيَّارَةٌ · سَيَّارَاتٌ', 0], ['مَدِينَةٌ · مُدُنٌ', 1], ['جَامِعَةٌ · جَامِعَاتٌ', 0], ['غُرْفَةٌ · غُرَفٌ', 1], ['مُعَلِّمَةٌ · مُعَلِّمَاتٌ', 0], ['حَدِيقَةٌ · حَدَائِقُ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type S or B. Point out: all eight singulars end in ة — the ة does not decide the plural.',
    },
  ],
  mistakes: [
    { wrong: 'رَأَيْتُ الطَّالِبَاتَ.', right: 'رَأَيْتُ الطَّالِبَاتِ.', why: 'This plural takes kasra as an object.' },
    { wrong: 'مَدْرَسَاتٌ', right: 'مَدَارِسُ', why: 'School has a broken plural.' },
    { wrong: 'الطَّالِبَاتُ مُجْتَهِدَةٌ.', right: 'الطَّالِبَاتُ مُجْتَهِدَاتٌ.', why: 'Women → feminine plural adjective.' },
  ],
  hints: ['Fatḥa or kasra?', 'Is this plural regular?', 'People or things?'],
  practiceQuiz: /Mastery/i, practicePick: [4, 5, 6, 7], practiceLabel: 'website mastery check questions 5–8',
  read: {
    title: 'Our female teachers', label: 'website read-and-notice text, extended by the teacher',
    text: 'فِي مَدْرَسَتِنَا طَالِبَانِ جَدِيدَانِ وَمُعَلِّمَاتٌ خَبِيرَاتٌ. الْمُعَلِّمَاتُ لَطِيفَاتٌ، وَالطَّالِبَاتُ يُحْبِبْنَهُنَّ. فِي الْمَسَاءِ أَرَى الطَّالِبَاتِ فِي الْمَكْتَبَةِ، وَأَسْمَعُ الْحِكَايَاتِ الْجَمِيلَةَ. أَمَامَ الْمَدْرَسَةِ سَيَّارَاتٌ كَثِيرَةٌ.',
    glossary: [['خَبِيرَاتٌ', 'expert (f. pl.)'], ['لَطِيفَاتٌ', 'kind (f. pl.)'], ['يُحْبِبْنَهُنَّ', 'they (f.) love them'], ['أَرَى', 'I see'], ['الْحِكَايَاتِ', 'the stories'], ['أَمَامَ', 'in front of'], ['كَثِيرَةٌ', 'many']],
    task: 'Website: underline every sound feminine plural and say whether it ends in -ātu, -āti or -ātun.',
    questions: [
      q('Why is it الطَّالِبَاتِ (kasra) in the third sentence?', ['It is the object of أَرَى.', 'It is the subject.', 'It is after a number.'], 'Object → kasra.'),
      q('Why is the adjective لَطِيفَاتٌ (plural)?', ['It describes women.', 'It describes things.', 'It is dual.'], 'People → plural adjective.'),
      q('Why is it سَيَّارَاتٌ كَثِيرَةٌ (singular adjective)?', ['Cars are things.', 'It is a mistake.', 'Cars are people.'], 'Non-human plural → feminine singular.'),
      q('What is the singular of الْحِكَايَاتِ?', ['حِكَايَةٌ', 'حِكَايٌ', 'حَكَى'], 'Put the tāʾ marbūṭa back.'),
    ],
    qNote: 'The first sentence is the website text; the rest is teacher-written to practise the plural. Questions teacher-written.',
  },
  speak: {
    title: 'Speaking: women in my life', source: 'website task “speak and transform”',
    prompts: [
      { route: 'core', ar: 'مَنِ الْمُعَلِّمَاتُ فِي مَدْرَسَتِكَ؟' },
      { route: 'develop', ar: 'صِفِ الطَّالِبَاتِ فِي صَفِّكَ أَوْ صَفِّ أُخْتِكَ.' },
      { route: 'stretch', ar: 'مَاذَا فِي شَارِعِكَ؟ (سَيَّارَاتٌ، حَافِلَاتٌ …)' },
    ],
    stems: [
      { route: 'core', ar: 'فِي مَدْرَسَتِي مُعَلِّمَاتٌ ______ .' },
      { route: 'develop', ar: 'الطَّالِبَاتُ ______ وَ ______ .' },
      { route: 'stretch', ar: 'فِي شَارِعِي سَيَّارَاتٌ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'كَيْفَ الْمُعَلِّمَاتُ فِي مَدْرَسَتِكِ؟', en: 'What are the teachers like in your school? (to a girl)' },
      { who: 'B', ar: 'الْمُعَلِّمَاتُ لَطِيفَاتٌ وَخَبِيرَاتٌ، وَأُحِبُّ الْمُعَلِّمَاتِ كَثِيرًا.', en: 'The teachers are kind and expert, and I like the teachers a lot.' },
    ],
    notes: 'Website: choose five nouns; say singular and plural, then use each in a sentence. Listen for the object kasra in أُحِبُّ الْمُعَلِّمَاتِ.',
  },
  write: {
    siteTask: 'Write 8–12 connected sentences about your school, home or local area, using at least six target noun forms from this lesson.',
    core: { amount: '6 sentences', task: 'Six sentences with a sound feminine plural subject.', how: 'Female students, teachers, cars — each with an adjective.' },
    develop: { amount: '8 sentences', task: 'Add three plurals as objects or after a preposition (-āti).', how: 'Check: kasra, never fatḥa, on this plural.' },
    stretch: { amount: '8–12 sentences', task: 'Website task, mixing people and things, plus one feminine noun with a broken plural.', how: 'People → plural adjective · things → feminine singular.' },
  },
  frames: {
    core: [
      { en: 'In my school there are … female teachers.', ar: 'فِي مَدْرَسَتِي مُعَلِّمَاتٌ ______ .' },
      { en: 'The female students are …', ar: 'الطَّالِبَاتُ ______ .' },
      { en: 'In the street there are cars …', ar: 'فِي الشَّارِعِ سَيَّارَاتٌ ______ .' },
      { en: 'My sisters are …', ar: 'أَخَوَاتِي ______ .' },
    ],
    develop: [
      { en: 'I saw the female students …', ar: 'رَأَيْتُ الطَّالِبَاتِ ______ .' },
      { en: 'I talk with the teachers …', ar: 'أَتَحَدَّثُ مَعَ الْمُعَلِّمَاتِ ______ .' },
      { en: 'I like the … (stories)', ar: 'أُحِبُّ الْحِكَايَاتِ ______ .' },
      { en: 'in the universities …', ar: 'فِي الْجَامِعَاتِ ______ .' },
    ],
    bank: ['طَالِبَاتٌ', 'مُعَلِّمَاتٌ', 'أَخَوَاتٌ', 'سَيَّارَاتٌ', 'جَامِعَاتٌ', 'حَافِلَاتٌ', 'حِكَايَاتٌ', 'نَشِيطَاتٌ', 'لَطِيفَاتٌ', 'خَبِيرَاتٌ', 'كَثِيرَةٌ', 'سَرِيعَةٌ'],
  },
  stretchTask: {
    task: 'Website writing workshop: 8–12 connected sentences about your school, home or local area with at least six target noun forms.',
    checklist: ['Three sound feminine plural subjects (-ātu / -ātun).', 'Three as objects or after a preposition (-āti / -ātin).', 'Women with a feminine plural adjective.', 'Things with a feminine singular adjective.', 'One feminine noun with a broken plural.'],
    phrases: [['مُعَلِّمَاتٌ خَبِيرَاتٌ', 'expert female teachers'], ['رَأَيْتُ الطَّالِبَاتِ', 'I saw the female students'], ['مَعَ أَخَوَاتِي', 'with my sisters'], ['السَّيَّارَاتُ سَرِيعَةٌ', 'the cars are fast'], ['فِي الْجَامِعَاتِ', 'in the universities'], ['الْمَدَارِسُ كَبِيرَةٌ', 'the schools are big']],
  },
  model: {
    text: 'عِنْدِي ثَلَاثُ أَخَوَاتٍ، وَهُنَّ طَالِبَاتٌ مُجْتَهِدَاتٌ. تَدْرُسُ أُخْتِي الْكَبِيرَةُ فِي الْجَامِعَةِ، وَتُحِبُّ الْمُعَلِّمَاتِ هُنَاكَ. فِي الْمَسَاءِ أُسَاعِدُ أَخَوَاتِي فِي الْوَاجِبَاتِ. فِي شَارِعِنَا سَيَّارَاتٌ كَثِيرَةٌ وَحَافِلَاتٌ كَبِيرَةٌ، وَفِي مَدِينَتِنَا مَدَارِسُ حَدِيثَةٌ.',
    en: 'I have three sisters, and they are hard-working students. My older sister studies at university and loves the (female) teachers there. In the evening I help my sisters with the homework. In our street there are many cars and big buses, and in our city there are modern schools.',
    find: ['-āt subjects', '-āti objects', 'women: plural adj.', 'things: singular adj.'],
    source: 'teacher model on the website writing workshop',
  },
  selfCheck: [
    { route: 'core', text: 'I removed the tāʾ marbūṭa before adding -āt.' },
    { route: 'core', text: 'My subjects end in -ātu or -ātun.' },
    { route: 'develop', text: 'My objects end in -āti — kasra, not fatḥa.' },
    { route: 'develop', text: 'Women: plural adjective · things: singular adjective.' },
    { route: 'stretch', text: 'I used a broken plural where needed (schools, cities).' },
  ],
  exit: [
    q('Plural of جَامِعَةٌ?', ['جَامِعَاتٌ', 'جَامِعُونَ', 'جَوَامِعُ'], 'Regular: -āt.'),
    q('Choose the object: “I visited the universities.”', ['زُرْتُ الْجَامِعَاتِ.', 'زُرْتُ الْجَامِعَاتَ.', 'زُرْتُ الْجَامِعَاتُ.'], 'Object → kasra.'),
    q('Choose the correct agreement for cars.', ['السَّيَّارَاتُ جَدِيدَةٌ', 'السَّيَّارَاتُ جَدِيدَاتٌ', 'السَّيَّارَاتُ جُدُدٌ'], 'Things → feminine singular.'),
  ],
  mastery: false,
  prep: {
    words: [['جَمْعُ التَّكْسِيرِ', 'broken plural', '—'], ['كُتُبٌ', 'books', 'sing. كِتَابٌ'], ['أَوْلَادٌ', 'boys, children', 'sing. وَلَدٌ'], ['بُيُوتٌ', 'houses', 'sing. بَيْتٌ'], ['مَدَارِسُ', 'schools', 'sing. مَدْرَسَةٌ']],
    questionEn: 'Compare the singulars and plurals of book and house. What changed inside the word?',
    questionAr: 'كِتَابٌ · كُتُبٌ — بَيْتٌ · ______',
    homework: {
      core: 'Make ten sound feminine plurals from words you know.',
      develop: 'Write six sentences: three with -ātu, three with -āti.',
      stretch: 'Website writing workshop and list five feminine nouns with broken plurals.',
    },
    wordsSource: 'The five words prepare GM-N-05 (website Nouns lesson 5: broken plurals).',
  },
  remember: 'Remember: tāʾ marbūṭa out, -āt in · subject -ātu · object and after a preposition -āti (kasra!) · women → plural adjective, things → singular.',
});

module.exports = { meta, slides };
