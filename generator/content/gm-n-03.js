'use strict';
/* GM-N-03 · Sound Masculine Plural — website: Mastery & Revision › Grammar › Nouns › Lesson 3 (stem stays whole + ـُونَ / ـِينَ; the ending
 * follows the noun’s job: subject ـُونَ, object and after a preposition ـِينَ; mainly male / mixed human groups and professions; human plural
 * agreement; the nūn drops in iḍāfa: مُعَلِّمُو الْمَدْرَسَةِ). Entry check, guided mini-check and mastery check are the website’s; explanation
 * slides, sorter, repair, reading questions, frames and model are teacher-made on the website rules. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-N-03', fileTitle: 'Sound_Masculine_Plural', title: 'Sound Masculine Plural', arabic: 'جَمْعُ الْمُذَكَّرِ السَّالِمُ',
  focus: 'Keep the word whole and add an ending for male or mixed groups of people: ـُونَ for the subject (حَضَرَ الْمُعَلِّمُونَ), ـِينَ as an object or after a preposition (مَعَ الْمُعَلِّمِينَ) — and drop the nūn in an iḍāfa (مُعَلِّمُو الْمَدْرَسَةِ).',
  icon: 'FaUsers',
});

const slides = G.gmLesson({
  code: 'GM-N-03', site: 'grammar__03-nouns__grammar-mastery-03-sound-masculine-plural',
  support: `• Core: build the plural with ـُونَ from professions and describing words (مُعَلِّمٌ → مُعَلِّمُونَ). Develop: ـُونَ vs ـِينَ from the noun’s job; plural adjective agreement. Stretch: the nūn drops in iḍāfa.
• QUR’AN BRIDGE: students know الْمُسْلِمُونَ / الْمُسْلِمِينَ, الْمُؤْمِنُونَ / الْمُؤْمِنِينَ, الْعَالَمِينَ, الصَّالِحِينَ — the SAME two endings, chosen by position. Use Sūrat al-Fātiḥa (رَبِّ الْعَالَمِينَ · الضَّالِّينَ) as the example of ـِينَ.
• Website reminder: “sound” means the stem stays whole — it does NOT mean every masculine noun takes this plural (كِتَابٌ → كُتُبٌ).`,
  teach: 'Whole stem + ـُونَ / ـِينَ; the ending follows the job; agreement; iḍāfa.',
  wedo: 'Sort ـُونَ / ـِينَ, repair case and iḍāfa slips, build plurals.',
  next: { nextCode: 'GM-N-04', nextTitle: 'Sound Feminine Plural', nextAr: 'جَمْعُ الْمُؤَنَّثِ السَّالِمُ' },
  doNow: {
    keyIdea: { text: 'Same plural, two endings: the job in the sentence decides — subject ـُونَ, everything else ـِينَ.', ar: 'حَضَرَ {k|الْمُعَلِّمُونَ} ‖ رَأَيْتُ {e|الْمُعَلِّمِينَ}' },
    retrieves: 'The website Entry Check (questions 1–5) — it retrieves GM-N-02 (cases after a preposition) and tests prepared words.',
  },
  objectives: ['Form the sound masculine plural with ـُونَ / ـِينَ.', 'Choose the ending from the noun’s job in the sentence.', 'Use plural adjectives for male or mixed human groups.', 'Drop the nūn when the plural is the first noun of an iḍāfa.'],
  routes: {
    core: ['I can build مُعَلِّمُونَ · مُهَنْدِسُونَ · لَاعِبُونَ.', 'I know this plural is for male / mixed people.'],
    develop: ['I use ـِينَ after a preposition and as an object.', 'I make the adjective plural: الطُّلَّابُ نَشِيطُونَ.'],
    stretch: ['I drop the nūn in iḍāfa: مُعَلِّمُو الْمَدْرَسَةِ.', 'I know which nouns do NOT take this plural.'],
  },
  terms: {
    items: [
      { ar: 'جَمْعُ الْمُذَكَّرِ السَّالِمُ', en: 'sound masculine plural', note: 'the stem stays whole' },
      { ar: 'ـُونَ', en: 'nominative ending (subject)', tr: '-ūna', note: 'الْمُعَلِّمُونَ' },
      { ar: 'ـِينَ', en: 'accusative / genitive ending', tr: '-īna', note: 'الْمُعَلِّمِينَ' },
      { ar: 'فَاعِلٌ', en: 'subject of a verb', note: 'حَضَرَ الْمُعَلِّمُونَ' },
      { ar: 'مَفْعُولٌ بِهِ', en: 'object of a verb', note: 'رَأَيْتُ الْمُعَلِّمِينَ' },
      { ar: 'عَاقِلٌ', en: 'human (rational)', note: 'people, not things' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · formation and meaning (website table)', title: 'Keep the word whole, add an ending', ar: 'الصِّيغَةُ وَالْمَعْنَى', ltr: true,
      cols: [{ label: 'Meaning', w: 3.2 }, { label: 'Singular', w: 2.8, size: 24 }, { label: 'Subject (-ūna)', w: 3.1, size: 24 }, { label: 'Object / after prep. (-īna)', w: 3.23, size: 24 }],
      rows: [
        { core: true, cells: ['male / mixed teachers', 'مُعَلِّمٌ', 'مُعَلِّمُونَ', 'مُعَلِّمِينَ'] },
        { core: true, cells: ['engineers', 'مُهَنْدِسٌ', 'مُهَنْدِسُونَ', 'مُهَنْدِسِينَ'] },
        { cells: ['hard-working people', 'مُجْتَهِدٌ', 'مُجْتَهِدُونَ', 'مُجْتَهِدِينَ'] },
        { cells: ['players', 'لَاعِبٌ', 'لَاعِبُونَ', 'لَاعِبِينَ'] },
        { cells: ['employees', 'مُوَظَّفٌ', 'مُوَظَّفُونَ', 'مُوَظَّفِينَ'] },
      ],
      foot: '“Sound” means the stem stays substantially intact (website) — it does not mean every masculine noun uses this plural.',
      notes: 'PART 1 (3 min) — website table “Formation and meaning”. Cover the plural columns: students build them from the singular.',
    },
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 2 · choose -ūna or -īna from the noun’s job (website section)', title: 'The job in the sentence chooses the ending', ar: 'ـُونَ أَمْ ـِينَ؟',
      points: [
        'Subject (who does the action) → -ūna: the teachers attended (first example).',
        'Object (who receives the action) → -īna: I saw the teachers.',
        'After a preposition such as maʿa, min, ilā, fī → -īna: I spoke with the teachers.',
        'The nūn stays in ordinary use — but drops when the plural is the FIRST noun of an iḍāfa.',
        'This plural is used mainly for male or mixed groups of PEOPLE: professions, nationalities, describing words.',
      ],
      examples: [
        { ar: 'حَضَرَ الْمُعَلِّمُونَ.', en: 'The teachers attended.', note: 'subject' },
        { ar: 'رَأَيْتُ الْمُعَلِّمِينَ.', en: 'I saw the teachers.', note: 'object' },
        { ar: 'تَحَدَّثْتُ مَعَ الْمُعَلِّمِينَ.', en: 'I spoke with the teachers.', note: 'after a preposition' },
        { ar: 'مُعَلِّمُو الْمَدْرَسَةِ', en: 'the school’s teachers', note: 'iḍāfa: nūn drops' },
      ],
      callout: { kind: 'warn', text: 'Spelling alert (website): the nūn remains in ordinary use, but drops when the sound plural is the first term of an iḍāfa.' },
      notes: 'PART 2 (3 min) — website section “Choose ـونَ or ـينَ from the noun’s job”. Qur’an link: رَبِّ الْعَالَمِينَ (after rabb, genitive) · وَلَا الضَّالِّينَ.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 3 · agreement with people · Develop', title: 'Plural people, plural adjective', ar: 'مُطَابَقَةُ الصِّفَةِ', ltr: true,
      cols: [{ label: 'Meaning', w: 3.6 }, { label: 'Arabic', w: 5.0, size: 24 }, { label: 'Notice', w: 3.73 }],
      rows: [
        { core: true, cells: ['The students are active.', 'الطُّلَّابُ نَشِيطُونَ.', 'plural adjective'] },
        { core: true, cells: ['the hard-working teachers', 'الْمُعَلِّمُونَ الْمُجْتَهِدُونَ', 'both ـُونَ'] },
        { cells: ['with the new players', 'مَعَ اللَّاعِبِينَ الْجُدُدِ', 'adjective: broken plural'] },
        { cells: ['I met Egyptian engineers.', 'قَابَلْتُ مُهَنْدِسِينَ مِصْرِيِّينَ.', 'both ـِينَ (object)'] },
      ],
      foot: 'Website: the adjective of a human masculine plural is plural too — and shares the same case.',
      notes: 'PART 3 (2 min). Contrast with GM-ART-02: things (الْكُتُبُ) take a feminine SINGULAR adjective; people take a plural one.',
    },
  ],
  quickQuiz: /Guided/i, quickPick: [0, 1, 2, 3], quickNote: 'website guided mini-check, questions 1–4.',
  ido: {
    title: 'Watch me choose the ending',
    steps: [
      { head: 'Singular', ar: 'مُهَنْدِسٌ', think: 'A male profession.' },
      { head: 'Subject', ar: 'وَصَلَ الْمُهَنْدِسُونَ', think: 'They arrived → -ūna.' },
      { head: 'After مَعَ', ar: 'مَعَ الْمُهَنْدِسِينَ', think: 'Preposition → -īna.' },
      { head: 'Iḍāfa', ar: 'مُهَنْدِسُو الشَّرِكَةِ', think: 'First noun → no nūn.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: '-ŪNA (subject)', e: '-ĪNA (other)' },
    model: 'وَصَلَ {k|الْمُهَنْدِسُونَ} صَبَاحًا، وَعَمِلْتُ مَعَ {e|الْمُهَنْدِسِينَ} طُولَ الْيَوْمِ. مُهَنْدِسُو الشَّرِكَةِ {k|مُجْتَهِدُونَ}.',
    modelEn: 'The engineers arrived in the morning, and I worked with the engineers all day. The company’s engineers are hard-working.',
    notes: 'Ask at each plural: “What is its job — subject, object, after a preposition, or the first noun of an iḍāfa?”',
  },
  models: [
    { ar: 'الْمُعَلِّمُونَ فِي الْفَصْلِ.', en: 'The teachers are in the class.', tip: 'Subject → -ūna.' },
    { ar: 'شَكَرْتُ الْمُعَلِّمِينَ.', en: 'I thanked the teachers.', tip: 'Object → -īna.' },
    { ar: 'ذَهَبْتُ إِلَى الْمُوَظَّفِينَ.', en: 'I went to the employees.', tip: 'After إِلَى → -īna.' },
    { ar: 'لَاعِبُو الْفَرِيقِ مَشْهُورُونَ.', en: 'The team’s players are famous.', tip: 'Iḍāfa: nūn drops.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · -ūna or -īna?', title: 'Which ending?', ar: 'صَنِّفْ',
      categories: ['-ūna (subject)', '-īna (object / after a preposition)'],
      items: [['حَضَرَ الْمُعَلِّمُونَ', 0], ['رَأَيْتُ اللَّاعِبِينَ', 1], ['مَعَ الْمُوَظَّفِينَ', 1], ['الْمُهَنْدِسُونَ مَشْغُولُونَ', 0], ['شَكَرْتُ الْمُعَلِّمِينَ', 1], ['وَصَلَ الْمُسَافِرُونَ', 0], ['مِنَ الْمُسْلِمِينَ', 1], ['الْفَلَّاحُونَ نَشِيطُونَ', 0]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type U or I for each card and say WHY (subject / object / preposition).',
    },
  ],
  mistakes: [
    { wrong: 'شَكَرْتُ الْمُعَلِّمُونَ.', right: 'شَكَرْتُ الْمُعَلِّمِينَ.', why: 'Object → -īna.' },
    { wrong: 'مُعَلِّمُونَ الْمَدْرَسَةِ', right: 'مُعَلِّمُو الْمَدْرَسَةِ', why: 'The first noun of an iḍāfa drops its nūn.' },
    { wrong: 'الْمُعَلِّمُونَ مُجْتَهِدٌ.', right: 'الْمُعَلِّمُونَ مُجْتَهِدُونَ.', why: 'People in the plural take a plural adjective.' },
  ],
  hints: ['Subject or object?', 'First noun of an iḍāfa?', 'Does the adjective agree?'],
  practiceQuiz: /Mastery/i, practicePick: [4, 5, 6, 7], practiceLabel: 'website mastery check questions 5–8',
  read: {
    title: 'Our school’s teachers', label: 'website read-and-notice text, extended by the teacher',
    text: 'فِي مَدْرَسَتِنَا مُعَلِّمُونَ مُجْتَهِدُونَ وَمُعَلِّمَاتٌ خَبِيرَاتٌ. يَصِلُ الْمُعَلِّمُونَ مُبَكِّرِينَ كُلَّ يَوْمٍ. فِي الِاسْتِرَاحَةِ يَتَحَدَّثُ الطُّلَّابُ مَعَ الْمُعَلِّمِينَ، وَيَلْعَبُ لَاعِبُو فَرِيقِ الْمَدْرَسَةِ فِي الْمَلْعَبِ. الْمُوَظَّفُونَ فِي الْمَكْتَبِ لُطَفَاءُ.',
    glossary: [['مُجْتَهِدُونَ', 'hard-working'], ['خَبِيرَاتٌ', 'expert (f.)'], ['يَصِلُ', 'arrive'], ['مُبَكِّرِينَ', 'early'], ['الِاسْتِرَاحَةِ', 'the break'], ['لَاعِبُو فَرِيقِ الْمَدْرَسَةِ', 'the school team’s players'], ['لُطَفَاءُ', 'kind']],
    task: 'Website: underline every noun relevant to this lesson and explain its form (-ūna, -īna or no nūn).',
    questions: [
      q('Why is it الْمُعَلِّمِينَ in the third sentence?', ['It comes after مَعَ.', 'It is the subject.', 'It is feminine.'], 'After a preposition → -īna.'),
      q('Why is it يَصِلُ الْمُعَلِّمُونَ?', ['الْمُعَلِّمُونَ is the subject.', 'It comes after a preposition.', 'It is an object.'], 'Subject → -ūna.'),
      q('Why is there no nūn in لَاعِبُو?', ['It is the first noun of an iḍāfa.', 'It is singular.', 'It is a mistake.'], 'لَاعِبُو فَرِيقِ الْمَدْرَسَةِ.'),
      q('Which word is a sound masculine plural adjective?', ['مُجْتَهِدُونَ', 'لُطَفَاءُ', 'خَبِيرَاتٌ'], 'Whole stem + -ūna.'),
    ],
    qNote: 'Teacher-written text on the website pattern (the website read-and-notice text has no masculine sound plural), with teacher-written questions.',
  },
  speak: {
    title: 'Speaking: people in my school', source: 'website task “speak and transform”',
    prompts: [
      { route: 'core', ar: 'مَنْ فِي مَدْرَسَتِكَ؟ (مُعَلِّمُونَ، مُوَظَّفُونَ …)' },
      { route: 'develop', ar: 'مَعَ مَنْ تَتَحَدَّثُ فِي الْمَدْرَسَةِ؟' },
      { route: 'stretch', ar: 'صِفْ لَاعِبِي فَرِيقِكَ الْمُفَضَّلِ.' },
    ],
    stems: [
      { route: 'core', ar: 'فِي مَدْرَسَتِي ______ .' },
      { route: 'develop', ar: 'أَتَحَدَّثُ مَعَ ______ .' },
      { route: 'stretch', ar: 'لَاعِبُو ______ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَنْ فِي مَدْرَسَتِكَ؟', en: 'Who is in your school?' },
      { who: 'B', ar: 'فِي مَدْرَسَتِي مُعَلِّمُونَ لُطَفَاءُ، وَأَتَحَدَّثُ مَعَ الْمُعَلِّمِينَ كُلَّ يَوْمٍ.', en: 'In my school there are kind teachers, and I talk with the teachers every day.' },
    ],
    notes: 'Website: choose five nouns; say singular, dual and plural, then use each in a sentence. To a girl: مَدْرَسَتِكِ · تَتَحَدَّثِينَ · فَرِيقِكِ.',
  },
  write: {
    siteTask: 'Write 8–12 connected sentences about your school, home or local area, using at least six target noun forms from this lesson.',
    core: { amount: '6 sentences', task: 'Six sentences with a plural subject in ـُونَ.', how: 'مُعَلِّمُونَ · مُهَنْدِسُونَ · لَاعِبُونَ + an adjective.' },
    develop: { amount: '8 sentences', task: 'Mix ـُونَ and ـِينَ: three after a preposition, two as objects.', how: 'Label each plural S, O or P.' },
    stretch: { amount: '8–12 sentences', task: 'Website task with one iḍāfa plural (مُعَلِّمُو …) and plural adjectives.', how: 'Check every nūn: does it stay or drop?' },
  },
  frames: {
    core: [
      { en: 'In my school there are … teachers.', ar: 'فِي مَدْرَسَتِي مُعَلِّمُونَ ______ .' },
      { en: 'The players are …', ar: 'اللَّاعِبُونَ ______ .' },
      { en: 'The engineers work in …', ar: 'يَعْمَلُ الْمُهَنْدِسُونَ فِي ______ .' },
      { en: 'The employees are …', ar: 'الْمُوَظَّفُونَ ______ .' },
    ],
    develop: [
      { en: 'I talk with the teachers …', ar: 'أَتَحَدَّثُ مَعَ الْمُعَلِّمِينَ ______ .' },
      { en: 'I thanked the …', ar: 'شَكَرْتُ ______ .' },
      { en: 'The school’s teachers are …', ar: 'مُعَلِّمُو الْمَدْرَسَةِ ______ .' },
      { en: 'I watched the players …', ar: 'شَاهَدْتُ اللَّاعِبِينَ ______ .' },
    ],
    bank: ['مُعَلِّمُونَ / مُعَلِّمِينَ', 'مُهَنْدِسُونَ / مُهَنْدِسِينَ', 'لَاعِبُونَ / لَاعِبِينَ', 'مُوَظَّفُونَ / مُوَظَّفِينَ', 'مُسَافِرُونَ', 'مُجْتَهِدُونَ', 'نَشِيطُونَ', 'مَشْهُورُونَ', 'مَعَ', 'إِلَى', 'شَكَرْتُ', 'رَأَيْتُ'],
  },
  stretchTask: {
    task: 'Website writing workshop: 8–12 connected sentences about your school or local area with at least six target noun forms.',
    checklist: ['Three plural subjects with ـُونَ.', 'Three plurals after a preposition or as objects with ـِينَ.', 'One iḍāfa plural without nūn.', 'Plural adjectives for people.', 'One contrast with a broken plural (الطُّلَّابُ).'],
    phrases: [['مُعَلِّمُو الْمَدْرَسَةِ', 'the school’s teachers'], ['مَعَ الْمُوَظَّفِينَ', 'with the employees'], ['اللَّاعِبُونَ الْمَشْهُورُونَ', 'the famous players'], ['شَكَرْتُ الْمُعَلِّمِينَ', 'I thanked the teachers'], ['يَصِلُونَ مُبَكِّرِينَ', 'they arrive early'], ['الْمُسَافِرُونَ فِي الْمَطَارِ', 'the travellers at the airport']],
  },
  model: {
    text: 'فِي مَدْرَسَتِي مُعَلِّمُونَ مُجْتَهِدُونَ، وَهُمْ يَصِلُونَ مُبَكِّرِينَ. أُحِبُّ أَنْ أَتَحَدَّثَ مَعَ الْمُعَلِّمِينَ بَعْدَ الدَّرْسِ. فِي الْمَكْتَبِ مُوَظَّفُونَ لُطَفَاءُ يُسَاعِدُونَ الطُّلَّابَ. لَاعِبُو فَرِيقِ الْمَدْرَسَةِ مَشْهُورُونَ فِي الْمَدِينَةِ، وَشَاهَدْتُ اللَّاعِبِينَ فِي الْمُبَارَاةِ الْأَخِيرَةِ. فِي الْعُطْلَةِ يَزُورُ مُهَنْدِسُونَ الْمَدْرَسَةَ وَيَتَحَدَّثُونَ عَنْ عَمَلِهِمْ.',
    en: 'In my school there are hard-working teachers, and they arrive early. I like to talk with the teachers after the lesson. In the office there are kind employees who help the students. The school team’s players are famous in the city, and I watched the players in the last match. In the holidays engineers visit the school and talk about their work.',
    find: ['-ūna subjects', '-īna after a preposition', '-īna objects', 'iḍāfa: no nūn'],
    source: 'teacher model on the website writing workshop',
  },
  selfCheck: [
    { route: 'core', text: 'My plural subjects end in ـُونَ.' },
    { route: 'core', text: 'I used this plural only for people.' },
    { route: 'develop', text: 'After a preposition or as an object I wrote ـِينَ.' },
    { route: 'develop', text: 'My adjectives for people are plural.' },
    { route: 'stretch', text: 'I dropped the nūn in iḍāfa.' },
  ],
  exit: [
    q('Choose the subject: “The travellers arrived.”', ['وَصَلَ الْمُسَافِرُونَ.', 'وَصَلَ الْمُسَافِرِينَ.', 'وَصَلَ الْمُسَافِرَاتِ.'], 'Subject → -ūna.'),
    q('After مِنْ, choose.', ['الْمُوَظَّفِينَ', 'الْمُوَظَّفُونَ', 'الْمُوَظَّفُو'], 'Genitive → -īna.'),
    q('Choose “the club’s players”.', ['لَاعِبُو النَّادِي', 'لَاعِبُونَ النَّادِي', 'اللَّاعِبُونَ النَّادِي'], 'Iḍāfa: nūn drops, no الـ.'),
  ],
  mastery: false,
  prep: {
    words: [['جَمْعُ الْمُؤَنَّثِ السَّالِمِ', 'sound feminine plural', '—'], ['طَالِبَاتٌ', 'female students', 'sing. طَالِبَةٌ'], ['سَيَّارَاتٌ', 'cars', 'sing. سَيَّارَةٌ'], ['مُعَلِّمَاتٌ', 'female teachers', 'sing. مُعَلِّمَةٌ'], ['جَامِعَاتٌ', 'universities', 'sing. جَامِعَةٌ']],
    questionEn: 'What happens to the ة when طَالِبَةٌ becomes plural? Guess the rule.',
    questionAr: 'طَالِبَةٌ ← ______ · سَيَّارَةٌ ← ______',
    homework: {
      core: 'Make ten sound masculine plurals from professions.',
      develop: 'Write six sentences: three with ـُونَ, three with ـِينَ.',
      stretch: 'Website writing workshop and three iḍāfa plurals (مُعَلِّمُو …).',
    },
    wordsSource: 'The five words prepare GM-N-04 (website Nouns lesson 4: the sound feminine plural).',
  },
  remember: 'Remember: people (male / mixed) → whole stem + ـُونَ / ـِينَ · subject ـُونَ · object or after a preposition ـِينَ · iḍāfa drops the nūn.',
});

module.exports = { meta, slides };
