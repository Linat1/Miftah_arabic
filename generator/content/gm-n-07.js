'use strict';
/* GM-N-07 · The Iḍāfa Possessive Structure — website: Mastery & Revision › Grammar › Nouns › Lesson 7 (muḍāf: first, no الـ, no tanwīn,
 * case from its role; muḍāf ilayh: right after, always genitive, controls definiteness — بَابُ مَدْرَسَةٍ / بَابُ الْمَدْرَسَةِ / بَابُ مَدْرَسَتِي;
 * longer chains مَكْتَبُ مُدِيرِ الْمَدْرَسَةِ; dual and sound-plural nūn drop مُعَلِّمَا الصَّفِّ · مُعَلِّمُو الْمَدْرَسَةِ; ة is pronounced t;
 * adjective goes after the whole chain and its gender shows which noun it describes). Entry, guided and mastery checks are the website’s.
 * Website fix: the table note “ة pronounce” is completed as “ة is pronounced t”. Builder slide, sorter, repair, reading questions,
 * frames and model are teacher-made. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-N-07', fileTitle: 'Idafa_Possessive_Structure', title: 'The Iḍāfa Possessive Structure', arabic: 'تَرْكِيبُ الْإِضَافَةِ',
  focus: 'Join two nouns to say “the teacher’s house” or “the door of the school”. The first noun loses al- and tanwīn; the second is always genitive and decides whether the whole phrase is “the …” or “a …”.',
  icon: 'FaLink',
});

const slides = G.gmLesson({
  code: 'GM-N-07', site: 'grammar__03-nouns__grammar-mastery-07-idafa',
  support: `• Core: build two-noun iḍāfa — first noun no الـ, no tanwīn; second noun genitive (بَيْتُ الْمُعَلِّمِ). Develop: definite vs indefinite chains; the case of the first noun changes with its job; ة read as t. Stretch: three-noun chains; dual / plural nūn drops; adjective placement after the chain.
• This is the capstone of the Nouns unit: it reuses gender (N-01, ة → t), dual (N-02, ـَا), sound masculine plural (N-03, ـُو), and every case ending.
• Qur’an bridge: بِسْمِ اللَّهِ · رَبِّ الْعَالَمِينَ · يَوْمِ الدِّينِ · مَالِكِ يَوْمِ الدِّينِ (a three-noun chain!). Students recite iḍāfa many times daily.`,
  teach: 'Muḍāf and muḍāf ilayh; definiteness; chains; nūn drop; adjectives.',
  wedo: 'Build chains, sort definite / indefinite, repair.',
  next: { nextCode: 'GM-ADJ-01', nextTitle: 'Masculine and Feminine Singular', nextAr: 'مُطَابَقَةُ الصِّفَةِ فِي الْمُذَكَّرِ وَالْمُؤَنَّثِ' },
  doNow: {
    questions: G.pick(G.quiz(G.site('grammar__03-nouns__grammar-mastery-07-idafa'), /Entry/i).map((it, i) => (i === 3 ? { ...it, feedback: 'The nūn drops in iḍāfa (GM-N-02 / N-03).' } : it)), [0, 1, 2, 3, 4]),
    keyIdea: { text: 'First noun: no al-, no tanwīn. Second noun: always genitive — and it makes the whole chain “the …” or “a …”.', ar: '{k|بَيْتُ} {e|الْمُعَلِّمِ} ‖ {k|بَابُ} {e|مَدْرَسَةٍ}' },
    retrieves: 'The website Entry Check (questions 1–5) — it uses the five prepared words from GM-N-06 and the nūn rule from GM-N-02 / N-03.',
  },
  objectives: ['Build an iḍāfa with the correct form of each noun.', 'Make the chain definite or indefinite through the last noun.', 'Drop the nūn of duals and sound masculine plurals in iḍāfa.', 'Place an adjective after the chain and match it to the right noun.'],
  routes: {
    core: ['I write the first noun with no al- and no tanwīn.', 'I put the second noun in the genitive.'],
    develop: ['I make the chain definite or indefinite.', 'I read tāʾ marbūṭa as t in the first noun.'],
    stretch: ['I build three-noun chains and drop the nūn.', 'I place the adjective after the whole chain.'],
  },
  terms: {
    items: [
      { ar: 'الْإِضَافَةُ', en: 'iḍāfa (possessive structure)', note: 'بَيْتُ الْمُعَلِّمِ' },
      { ar: 'الْمُضَافُ', en: 'first noun (the thing owned)', tr: 'al-muḍāf', note: 'بَيْتُ' },
      { ar: 'الْمُضَافُ إِلَيْهِ', en: 'second noun (the owner)', tr: 'al-muḍāf ilayh', note: 'الْمُعَلِّمِ' },
      { ar: 'مَجْرُورٌ', en: 'genitive (-i / -in)', note: 'the second noun' },
      { ar: 'مَعْرِفَةٌ', en: 'definite (“the”)', note: 'بَابُ الْمَدْرَسَةِ' },
      { ar: 'نَكِرَةٌ', en: 'indefinite (“a”)', note: 'بَابُ مَدْرَسَةٍ' },
    ],
  },
  explain: [
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 1 · the architecture of iḍāfa (website section)', title: 'Two nouns, one unit', ar: 'الْمُضَافُ وَالْمُضَافُ إِلَيْهِ',
      points: [
        'Iḍāfa joins nouns into one possessive unit; English uses “of” or apostrophe-s (website).',
        'FIRST noun (muḍāf): comes first, has NO al- and NO tanwīn.',
        'Its case comes from its job in the sentence: -u as subject, -a as object, -i after a preposition.',
        'SECOND noun (muḍāf ilayh): comes immediately after and is ALWAYS genitive.',
        'Nothing may come between the two nouns — not even an adjective.',
      ],
      examples: [
        { ar: 'بَيْتُ الْمُعَلِّمِ', en: 'the teacher’s house', note: 'website example' },
        { ar: 'كِتَابُ الطَّالِبِ', en: 'the student’s book' },
        { ar: 'رَأَيْتُ بَيْتَ الْمُعَلِّمِ.', en: 'I saw the teacher’s house.', note: 'first noun as object' },
        { ar: 'فِي بَيْتِ الْمُعَلِّمِ', en: 'in the teacher’s house', note: 'first noun after a preposition' },
      ],
      callout: { kind: 'warn', head: 'COMMON SLIP', text: 'Never put al- on the first noun. “The house the teacher” is not Arabic — the second noun already makes the whole phrase definite.' },
      notes: 'PART 1 (3 min) — website section “The architecture of iḍāfa”. Draw two linked boxes: box 1 “no al-, no tanwīn, case from the sentence”; box 2 “always -i / -in”.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 2 · definiteness travels from the end (website callout)', title: 'The last noun decides “the” or “a”', ar: 'التَّعْرِيفُ وَالتَّنْكِيرُ', ltr: true,
      cols: [{ label: 'Arabic', w: 4.4, size: 26 }, { label: 'Meaning', w: 4.0 }, { label: 'Why', w: 3.93 }],
      rows: [
        { core: true, cells: ['بَابُ مَدْرَسَةٍ', 'a school door', 'last noun indefinite → whole chain “a”'] },
        { core: true, cells: ['بَابُ الْمَدْرَسَةِ', 'the school door', 'last noun has al- → “the”'] },
        { core: true, cells: ['بَابُ مَدْرَسَتِي', 'my school’s door', 'a possessive ending is definite too'] },
        { cells: ['بَابُ خَالِدٍ', 'Khalid’s door', 'a name is definite (despite tanwīn)'] },
      ],
      foot: 'Website: definiteness travels from the final term. The first noun never shows it.',
      notes: 'PART 2 (2 min) — website callout, plus a teacher-added proper-name row for Stretch (names are definite even with tanwīn).',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · longer chains and special forms (website table) · Stretch', title: 'Chains, dropped nūn and tāʾ marbūṭa', ar: 'سَلَاسِلُ وَأَشْكَالٌ خَاصَّةٌ', ltr: true,
      cols: [{ label: 'Meaning', w: 3.8 }, { label: 'Arabic', w: 4.6, size: 24 }, { label: 'Notice', w: 3.93 }],
      rows: [
        { core: true, cells: ['the student’s bag', 'حَقِيبَةُ الطَّالِبِ', 'tāʾ marbūṭa is pronounced t: ḥaqībatu'] },
        { cells: ['the school headteacher’s office', 'مَكْتَبُ مُدِيرِ الْمَدْرَسَةِ', 'only the LAST noun takes al-'] },
        { cells: ['the two class teachers', 'مُعَلِّمَا الصَّفِّ', 'dual nūn drops (GM-N-02)'] },
        { cells: ['the school teachers', 'مُعَلِّمُو الْمَدْرَسَةِ', 'sound plural nūn drops (GM-N-03)'] },
        { cells: ['the new door of the school', 'بَابُ الْمَدْرَسَةِ الْجَدِيدُ', 'adjective after the chain; masculine → the door'] },
        { cells: ['the door of the new school', 'بَابُ الْمَدْرَسَةِ الْجَدِيدَةِ', 'feminine genitive → the school'] },
      ],
      foot: 'Website warning: do not insert an adjective inside the chain. Put it after, and let its gender and case show which noun it describes.',
      notes: 'PART 3 (3 min) — website table “Longer chains and special forms” (the ة note completed). The last two rows come from the website warning: compare the two adjectives letter by letter.',
    },
  ],
  quickQuiz: /Guided/i, quickPick: [0, 1, 2, 3], quickNote: 'website guided mini-check, questions 1–4.',
  ido: {
    title: 'Watch me build a chain',
    steps: [
      { head: 'Owner', ar: 'الْمَدْرَسَةِ', think: 'Last noun: al- + genitive.' },
      { head: 'Add a noun', ar: 'مُدِيرِ الْمَدْرَسَةِ', think: 'Middle: no al-, genitive.' },
      { head: 'Add the first', ar: 'مَكْتَبُ مُدِيرِ الْمَدْرَسَةِ', think: 'First: no al-, no tanwīn.' },
      { head: 'In a sentence', ar: 'دَخَلْتُ مَكْتَبَ مُدِيرِ الْمَدْرَسَةِ', think: 'Object → first noun -a.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'FIRST NOUN', e: 'GENITIVE NOUNS' },
    model: '{k|مَكْتَبُ} {e|مُدِيرِ الْمَدْرَسَةِ} قَرِيبٌ مِنَ الْمَدْخَلِ، وَ{k|مُعَلِّمُو} {e|الصَّفِّ} فِي الْغُرْفَةِ الْمُجَاوِرَةِ.',
    modelEn: 'The headteacher’s office is near the entrance, and the class teachers are in the next room.',
    notes: 'Build from the END backwards — it makes definiteness obvious. Then point to مُعَلِّمُو: “Where has the nūn gone? Iḍāfa ate it.”',
  },
  models: [
    { ar: 'هَذَا بَيْتُ الْمُعَلِّمِ.', en: 'This is the teacher’s house.', tip: 'Simple two-noun iḍāfa.' },
    { ar: 'حَقِيبَةُ أُخْتِي ثَقِيلَةٌ.', en: 'My sister’s bag is heavy.', tip: 'Tāʾ marbūṭa read as t.' },
    { ar: 'زُرْتُ مُعَلِّمِي الْمَدْرَسَةِ.', en: 'I visited the school teachers.', tip: 'Object plural: -ī, nūn dropped.' },
    { ar: 'أَدْرُسُ فِي مَكْتَبَةِ الْمَدِينَةِ.', en: 'I study in the city library.', tip: 'First noun after a preposition → -i.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · “the …” or “a …”?', title: 'Definite or indefinite chain?', ar: 'مَعْرِفَةٌ أَمْ نَكِرَةٌ؟',
      categories: ['Definite (“the …”)', 'Indefinite (“a …”)'],
      items: [['بَابُ الْبَيْتِ', 0], ['بَابُ بَيْتٍ', 1], ['كِتَابُ أَخِي', 0], ['كِتَابُ طَالِبٍ', 1], ['غُرْفَةُ الْفُنْدُقِ', 0], ['غُرْفَةُ فُنْدُقٍ', 1], ['سَيَّارَةُ مُحَمَّدٍ', 0], ['مُعَلِّمُ لُغَةٍ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type D or I. Trap: the name Muḥammad has tanwīn but is definite — the chain means “Muhammad’s car”.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'We do · build the iḍāfa · say it aloud', title: 'Join the two nouns', ar: 'كَوِّنِ الْإِضَافَةَ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Meaning', w: 3.6 }, { label: 'Nouns', w: 3.6, size: 22 }, { label: 'Iḍāfa', w: 5.13, size: 24 }],
      rows: [
        { core: true, cells: ['the boy’s pen', 'قَلَمٌ · الْوَلَدُ', 'قَلَمُ الْوَلَدِ'] },
        { core: true, cells: ['the girl’s room', 'غُرْفَةٌ · الْبِنْتُ', 'غُرْفَةُ الْبِنْتِ'] },
        { core: true, cells: ['a car door', 'بَابٌ · سَيَّارَةٌ', 'بَابُ سَيَّارَةٍ'] },
        { cells: ['the two school gates', 'بَابَانِ · الْمَدْرَسَةُ', 'بَابَا الْمَدْرَسَةِ'] },
        { cells: ['the city engineers', 'مُهَنْدِسُونَ · الْمَدِينَةُ', 'مُهَنْدِسُو الْمَدِينَةِ'] },
      ],
      foot: 'Cover the last column. Step 1: remove al- / tanwīn from the first noun. Step 2: make the second genitive. Step 3: drop any nūn.',
      notes: 'WE DO (2 min) — reveal row by row; students say the answer before you reveal it. Rows 4–5 are Develop / Stretch.',
    },
  ],
  mistakes: [
    { wrong: 'الْبَيْتُ الْمُعَلِّمِ', right: 'بَيْتُ الْمُعَلِّمِ', why: 'The first noun has no al-.' },
    { wrong: 'مُعَلِّمُونَ الْمَدْرَسَةِ', right: 'مُعَلِّمُو الْمَدْرَسَةِ', why: 'The plural nūn drops in iḍāfa.' },
    { wrong: 'بَابُ الْجَدِيدُ الْمَدْرَسَةِ', right: 'بَابُ الْمَدْرَسَةِ الْجَدِيدُ', why: 'The adjective goes after the chain.' },
  ],
  hints: ['Does the first noun take al-?', 'What happens to the nūn?', 'Where does the adjective go?'],
  practiceQuiz: /Mastery/i, practicePick: [4, 5, 6, 7], practiceLabel: 'website mastery check questions 5–8',
  read: {
    title: 'The headteacher’s office', label: 'website read-and-notice text, extended by the teacher',
    text: 'فِي مَدْرَسَتِنَا طَالِبَانِ جَدِيدَانِ وَمُعَلِّمَاتٌ خَبِيرَاتٌ. الْفُصُولُ وَاسِعَةٌ، وَمَكْتَبُ مُدِيرِ الْمَدْرَسَةِ قَرِيبٌ مِنَ الْمَدْخَلِ. مُعَلِّمُو الصَّفِّ الثَّالِثِ لُطَفَاءُ، وَمَكْتَبَةُ الْمَدْرَسَةِ كَبِيرَةٌ. أَقْرَأُ كُتُبَ التَّارِيخِ فِي غُرْفَةِ الْمُطَالَعَةِ.',
    glossary: [['مَكْتَبُ', 'office'], ['مُدِيرِ', 'headteacher'], ['الْمَدْخَلِ', 'the entrance'], ['الثَّالِثِ', 'third'], ['لُطَفَاءُ', 'kind (pl.)'], ['التَّارِيخِ', 'history'], ['الْمُطَالَعَةِ', 'reading (study)']],
    task: 'Website: underline every iḍāfa and mark the first noun and the genitive noun(s).',
    questions: [
      q('How many nouns are in the chain about the office?', ['three', 'two', 'four'], 'Office · headteacher · the school.'),
      q('Why is it مُعَلِّمُو without a final nūn?', ['It is the first noun of an iḍāfa.', 'It is dual.', 'It is a mistake.'], 'Plural nūn drops.'),
      q('Why is it كُتُبَ (with fatḥa)?', ['It is the object of أَقْرَأُ.', 'It is genitive.', 'It is the subject.'], 'The first noun takes its case from the sentence.'),
      q('Why is it غُرْفَةِ (with kasra)?', ['It comes after the preposition فِي.', 'It is the owner.', 'It is the subject.'], 'First noun after a preposition → -i.'),
    ],
    qNote: 'The first two sentences are the website text; the rest is teacher-written to practise iḍāfa. Questions teacher-written.',
  },
  speak: {
    title: 'Speaking: whose is it?', source: 'website task “speak and transform”',
    prompts: [
      { route: 'core', ar: 'مَا اسْمُ صَدِيقِ أَخِيكَ؟ مَا لَوْنُ سَيَّارَةِ أَبِيكَ؟' },
      { route: 'develop', ar: 'صِفْ غُرْفَةَ أُخْتِكَ أَوْ مَكْتَبَ مُعَلِّمِكَ.' },
      { route: 'stretch', ar: 'صِفْ مَكْتَبَ مُدِيرِ مَدْرَسَتِكَ.' },
    ],
    stems: [
      { route: 'core', ar: 'لَوْنُ سَيَّارَةِ أَبِي ______ .' },
      { route: 'develop', ar: 'غُرْفَةُ أُخْتِي ______ وَ ______ .' },
      { route: 'stretch', ar: 'مَكْتَبُ مُدِيرِ الْمَدْرَسَةِ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَا لَوْنُ سَيَّارَةِ أَبِيكَ؟', en: 'What colour is your father’s car?' },
      { who: 'B', ar: 'لَوْنُ سَيَّارَةِ أَبِي أَبْيَضُ، وَبَابُ السَّيَّارَةِ الْأَمَامِيُّ مَكْسُورٌ!', en: 'The colour of my father’s car is white, and the car’s front door is broken!' },
    ],
    notes: 'Website: choose five nouns and use each in a sentence. The model answer has a three-noun chain and an adjective placed after the chain (بَابُ السَّيَّارَةِ الْأَمَامِيُّ — masculine, so it describes the door).',
  },
  write: {
    siteTask: 'Write 8–12 connected sentences about your school, home or local area, using at least six target noun forms from this lesson.',
    core: { amount: '6 sentences', task: 'Six sentences, each with a two-noun iḍāfa.', how: 'First noun: no al-, no tanwīn. Second: -i.' },
    develop: { amount: '8 sentences', task: 'Use iḍāfa as subject, object and after a preposition.', how: 'Change only the first noun’s ending.' },
    stretch: { amount: '8–12 sentences', task: 'Website task with a three-noun chain, a dropped nūn and an adjective after a chain.', how: 'Check the adjective’s gender points to the right noun.' },
  },
  frames: {
    core: [
      { en: 'This is my brother’s room.', ar: 'هَذِهِ غُرْفَةُ ______ .' },
      { en: 'The school door is …', ar: 'بَابُ الْمَدْرَسَةِ ______ .' },
      { en: 'My father’s car is …', ar: 'سَيَّارَةُ أَبِي ______ .' },
      { en: 'The teacher’s book is on …', ar: 'كِتَابُ الْمُعَلِّمِ عَلَى ______ .' },
    ],
    develop: [
      { en: 'I visited the city library.', ar: 'زُرْتُ ______ الْمَدِينَةِ.' },
      { en: 'I study in my sister’s room.', ar: 'أَدْرُسُ فِي غُرْفَةِ ______ .' },
      { en: 'The school teachers are …', ar: 'مُعَلِّمُو الْمَدْرَسَةِ ______ .' },
      { en: 'The headteacher’s office is …', ar: 'مَكْتَبُ مُدِيرِ الْمَدْرَسَةِ ______ .' },
    ],
    bank: ['بَيْتُ', 'غُرْفَةُ', 'بَابُ', 'كِتَابُ', 'سَيَّارَةُ', 'مَكْتَبَةُ', 'مُعَلِّمُو', 'مُدِيرِ', 'الْمَدْرَسَةِ', 'الْمَدِينَةِ', 'أَبِي', 'أُخْتِي', 'كَبِيرٌ', 'جَمِيلَةٌ', 'قَرِيبٌ'],
  },
  stretchTask: {
    task: 'Website writing workshop: 8–12 connected sentences about your school, home or local area with at least six target noun forms.',
    checklist: ['Four two-noun iḍāfas with no al- on the first noun.', 'One iḍāfa as an object (first noun -a) and one after a preposition (-i).', 'One indefinite chain (“a … of a …”).', 'One three-noun chain.', 'One dual or plural with the nūn dropped, and one adjective after a chain.'],
    phrases: [['مَكْتَبُ مُدِيرِ الْمَدْرَسَةِ', 'the headteacher’s office'], ['مُعَلِّمُو الصَّفِّ', 'the class teachers'], ['بَابَا الْبَيْتِ', 'the two doors of the house'], ['فِي مَكْتَبَةِ الْمَدِينَةِ', 'in the city library'], ['غُرْفَةُ أُخْتِي الصَّغِيرَةُ', 'my sister’s small room'], ['حَدِيقَةُ بَيْتٍ', 'a house garden']],
  },
  model: {
    text: 'أَسْكُنُ فِي بَيْتٍ قَرِيبٍ مِنْ مَدْرَسَتِي. غُرْفَةُ أُخْتِي الصَّغِيرَةُ جَمِيلَةٌ، وَبَابَا الْبَيْتِ أَبْيَضَانِ. فِي الصَّبَاحِ أَمْشِي إِلَى الْمَدْرَسَةِ مَعَ ابْنِ عَمِّي. مُعَلِّمُو الْمَدْرَسَةِ لُطَفَاءُ، وَمَكْتَبُ مُدِيرِ الْمَدْرَسَةِ قَرِيبٌ مِنَ الْبَابِ. بَعْدَ الدَّرْسِ أَقْرَأُ فِي مَكْتَبَةِ الْمَدِينَةِ.',
    en: 'I live in a house near my school. My sister’s small room is beautiful, and the two doors of the house are white. In the morning I walk to school with my cousin. The school teachers are kind, and the headteacher’s office is near the door. After the lesson I read in the city library.',
    find: ['two-noun iḍāfa', 'three-noun chain', 'dropped nūn', 'adjective after chain'],
    source: 'teacher model on the website writing workshop',
  },
  selfCheck: [
    { route: 'core', text: 'No first noun has al- or tanwīn.' },
    { route: 'core', text: 'Every second noun is genitive.' },
    { route: 'develop', text: 'The first noun’s ending matches its job.' },
    { route: 'develop', text: 'I made at least one chain indefinite.' },
    { route: 'stretch', text: 'I dropped the nūn and placed adjectives after the chain.' },
  ],
  exit: [
    q('Choose “the girl’s bag”.', ['حَقِيبَةُ الْبِنْتِ', 'الْحَقِيبَةُ الْبِنْتِ', 'حَقِيبَةٌ الْبِنْتُ'], 'First noun: no al-, no tanwīn.'),
    q('Choose “a hotel room”.', ['غُرْفَةُ فُنْدُقٍ', 'غُرْفَةُ الْفُنْدُقِ', 'الْغُرْفَةُ فُنْدُقٍ'], 'Indefinite last noun.'),
    q('Choose “the city engineers”.', ['مُهَنْدِسُو الْمَدِينَةِ', 'مُهَنْدِسُونَ الْمَدِينَةِ', 'الْمُهَنْدِسُونَ الْمَدِينَةِ'], 'The nūn drops.'),
  ],
  mastery: false,
  prep: {
    words: [['صِفَةٌ', 'adjective', '—'], ['طَوِيلٌ', 'tall (m.)', 'f. طَوِيلَةٌ'], ['قَصِيرٌ', 'short (m.)', 'f. قَصِيرَةٌ'], ['نَشِيطٌ', 'active (m.)', 'f. نَشِيطَةٌ'], ['مُرِيحٌ', 'comfortable (m.)', 'f. مُرِيحَةٌ']],
    questionEn: 'How would you say “a tall girl”? What do you add to the adjective?',
    questionAr: 'وَلَدٌ طَوِيلٌ · بِنْتٌ ______',
    homework: {
      core: 'Write ten two-noun iḍāfas about your home.',
      develop: 'Write eight sentences using iḍāfa as subject, object and after a preposition.',
      stretch: 'Website writing workshop with a three-noun chain and a dropped nūn.',
    },
    wordsSource: 'The five words prepare GM-ADJ-01 (website Adjectives lesson 1: masculine and feminine singular).',
  },
  remember: 'Remember: first noun — no al-, no tanwīn, case from its job · second noun — always genitive and decides “the” or “a” · nūn drops · adjective after the chain.',
});

module.exports = { meta, slides };
