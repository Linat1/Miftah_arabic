'use strict';
/* GM-N-02 · Singular, Dual and Plural — website: Mastery & Revision › Grammar › Nouns › Lesson 2 (one · exactly two · three or more; the dual
 * ـَانِ / ـَيْنِ; ة becomes ت in the dual; no numeral + plural for “two”; plural preview). Entry check, guided mini-check and mastery check are
 * the website’s; explanation slides, sorter, repair, reading questions, frames and model are teacher-made on the website rules. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-N-02', fileTitle: 'Singular_Dual_and_Plural', title: 'Singular, Dual and Plural', arabic: 'الْمُفْرَدُ وَالْمُثَنَّى وَالْجَمْعُ',
  focus: 'Arabic counts one, exactly two and three-or-more. Build the dual with ـَانِ (subject) and ـَيْنِ (after a preposition or as an object) — كِتَابَانِ · فِي كِتَابَيْنِ · مَدْرَسَتَانِ — and know which plural family comes next.',
  icon: 'FaLayerGroup',
});

const slides = G.gmLesson({
  code: 'GM-N-02', site: 'grammar__03-nouns__grammar-mastery-02-number',
  support: `• Core: singular, dual, plural; build the dual with ـَانِ. Develop: ـَانِ vs ـَيْنِ (after a preposition or as an object); ة → ت in the dual. Stretch: dual agreement with adjectives and verbs; dual in iḍāfa drops its nūn (preview of GM-N-07).
• English and Urdu have no dual: students say “two books” with a number. In Arabic the ENDING says “two” — a number word is not needed (كِتَابَانِ, not اِثْنَانِ كُتُبٌ).
• This lesson is the map; GM-N-03 to GM-N-06 then study each plural family in depth.`,
  teach: 'One, two, three-or-more; building the dual; ـَانِ or ـَيْنِ.',
  wedo: 'Sort by number, repair dual slips, transform singular → dual → plural.',
  next: { nextCode: 'GM-N-03', nextTitle: 'Sound Masculine Plural', nextAr: 'جَمْعُ الْمُذَكَّرِ السَّالِمُ' },
  doNow: {
    keyIdea: { text: 'Exactly two? Add an ending: ـَانِ for the subject, ـَيْنِ after a preposition or as an object.', ar: 'كِتَابٌ · {k|كِتَابَانِ} · فِي {e|كِتَابَيْنِ}' },
    retrieves: 'The website Entry Check (questions 1–5) — diagnostic; it also retrieves GM-N-01 (ة → ت).',
  },
  objectives: ['Distinguish singular, dual and plural.', 'Build the dual with ـَانِ and ـَيْنِ.', 'Change ة to ت before the dual ending.', 'Choose ـَانِ or ـَيْنِ from the position in the sentence.'],
  routes: {
    core: ['I can say one, two or many: طَالِبٌ · طَالِبَانِ · طُلَّابٌ.', 'I can build the dual of a masculine noun.'],
    develop: ['I can build the dual of a noun in ة (مَدْرَسَتَانِ).', 'I use ـَيْنِ after فِي, مَعَ, مِنْ.'],
    stretch: ['I use ـَيْنِ for a dual object (رَأَيْتُ بِنْتَيْنِ).', 'I make the adjective dual too (طَالِبَانِ جَدِيدَانِ).'],
  },
  terms: {
    flexRest: true,
    items: [
      { ar: 'مُفْرَدٌ', en: 'singular (one)', note: 'طَالِبٌ' },
      { ar: 'مُثَنًّى', en: 'dual (exactly two)', note: 'طَالِبَانِ' },
      { ar: 'جَمْعٌ', en: 'plural (three or more)', note: 'طُلَّابٌ', forms: [{ l: 'pl.', ar: 'جُمُوعٌ' }] },
      { ar: 'حَالَةُ الرَّفْعِ', en: 'nominative (subject)', note: 'ـَانِ' },
      { ar: 'حَالَةُ النَّصْبِ وَالْجَرِّ', en: 'accusative and genitive', note: 'ـَيْنِ' },
      { ar: 'حَرْفُ جَرٍّ', en: 'a preposition', note: 'فِي · مِنْ · مَعَ · إِلَى' },
      { ar: 'مَفْعُولٌ بِهِ', en: 'object of a verb', note: 'رَأَيْتُ بِنْتَيْنِ' },
      { ar: 'نُونُ الْمُثَنَّى', en: 'the nūn of the dual', note: 'dropped in iḍāfa' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · the Arabic number system (website table)', title: 'One · exactly two · three or more', ar: 'نِظَامُ الْعَدَدِ', ltr: true,
      cols: [{ label: 'Number', w: 3.2 }, { label: 'Masculine', w: 3.0, size: 26 }, { label: 'Feminine', w: 3.0, size: 26 }, { label: 'Meaning', w: 3.13 }],
      rows: [
        { core: true, cells: ['singular', 'طَالِبٌ', 'طَالِبَةٌ', 'one student'] },
        { core: true, cells: ['dual · subject (-āni)', 'طَالِبَانِ', 'طَالِبَتَانِ', 'two students'] },
        { cells: ['dual · after a trigger (-ayni)', 'طَالِبَيْنِ', 'طَالِبَتَيْنِ', 'two students'] },
        { core: true, cells: ['plural', 'طُلَّابٌ', 'طَالِبَاتٌ', 'three or more'] },
      ],
      foot: 'The dual is not optional in standard Arabic (website): when the meaning is exactly two, use the dual.',
      notes: 'PART 1 (3 min) — website table “The Arabic number system”. Hold up one, two, three fingers: طَالِبٌ · طَالِبَانِ · طُلَّابٌ.',
    },
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 2 · building the dual (website section)', title: 'Two? Add an ending', ar: 'بِنَاءُ الْمُثَنَّى',
      points: [
        'Take the singular and remove the tanwīn.',
        'Subject (nominative): add ـَانِ — two books.',
        'After a preposition (فِي · مِنْ · مَعَ …) or as an object: add ـَيْنِ instead.',
        'A noun ending in ة: the ة opens to ت before the ending — two schools.',
        'Do NOT add a number word for two: the ending already says “two”.',
      ],
      examples: [
        { ar: 'كِتَابٌ · كِتَابَانِ · كِتَابَيْنِ', en: 'a book · two books (subject · after a trigger)' },
        { ar: 'مُعَلِّمٌ · مُعَلِّمَانِ · مُعَلِّمَيْنِ', en: 'a teacher · two teachers' },
        { ar: 'مَدْرَسَةٌ · مَدْرَسَتَانِ · مَدْرَسَتَيْنِ', en: 'a school · two schools', note: 'ة → ت' },
        { ar: 'فِي الْحَيِّ مَدْرَسَتَانِ.', en: 'In the neighbourhood there are two schools.' },
      ],
      callout: { kind: 'warn', text: 'Website warning: do not use a numeral plus a plural for two. Prefer kitābāni, not ithnāni kutub.' },
      notes: 'PART 2 (3 min) — website section “Building and using the dual”. Website practical IGCSE rule: ـَانِ for a dual subject in the nominative; ـَيْنِ after a preposition and in object / genitive positions.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 3 · -āni or -ayni? · Develop', title: 'The position decides the ending', ar: 'ـَانِ أَمْ ـَيْنِ؟', ltr: true,
      cols: [{ label: 'Position', w: 3.4 }, { label: 'Example', w: 5.6, size: 24 }, { label: 'Ending', w: 3.33 }],
      rows: [
        { core: true, cells: ['subject', 'فِي الْفَصْلِ طَالِبَانِ جَدِيدَانِ.', '-āni'] },
        { core: true, cells: ['after a preposition', 'ذَهَبْتُ مَعَ طَالِبَيْنِ.', '-ayni'] },
        { cells: ['object of a verb', 'رَأَيْتُ بِنْتَيْنِ.', '-ayni'] },
        { cells: ['after فِي (feminine)', 'دَرَسْتُ فِي مَدْرَسَتَيْنِ.', '-ayni'] },
        { cells: ['adjective agrees (Stretch)', 'طَالِبَتَانِ مُجْتَهِدَتَانِ', 'both -āni'] },
      ],
      foot: 'The adjective of a dual noun is dual too — with the same ending.',
      notes: 'PART 3 (2 min). Quick drill: teacher says a frame (مَعَ … / فِي الْبَيْتِ …), students type -āni or -ayni.',
    },
    {
      type: 'ruleCards', min: 2, eyebrow: 'Grammar · part 4 · a first look at the plural families · preview', title: 'Three or more: three plural families', ar: 'أَنْوَاعُ الْجَمْعِ',
      cards: [
        { chip: 'SOUND MASC. · GM-N-03', color: '1E6B52', head: 'ـُونَ / ـِينَ', big: 'مُعَلِّمُونَ', en: 'teachers (male / mixed)', clue: 'An ending is added; the word stays whole.' },
        { chip: 'SOUND FEM. · GM-N-04', color: '1D5FBF', head: 'ـَاتٌ', big: 'طَالِبَاتٌ', en: 'female students', clue: 'ة is replaced by ـَاتٌ.' },
        { chip: 'BROKEN · GM-N-05', color: '6B4C9A', head: 'جَمْعُ التَّكْسِيرِ', big: 'كُتُبٌ · طُلَّابٌ', en: 'books · students', clue: 'The inside of the word changes.' },
      ],
      notes: 'PART 4 (2 min) — preview only. Website: “Understand the three-number system before studying each plural family in depth.”',
    },
  ],
  quickQuiz: /Guided/i, quickPick: [0, 1, 2, 3], quickNote: 'website guided mini-check, questions 1–4.',
  ido: {
    title: 'Watch me count: one, two, many',
    steps: [
      { head: 'One', ar: 'مَدْرَسَةٌ', think: 'Singular, feminine.' },
      { head: 'Two (subject)', ar: 'مَدْرَسَتَانِ', think: 'ة → ت, add -āni.' },
      { head: 'Two (after فِي)', ar: 'فِي مَدْرَسَتَيْنِ', think: 'Preposition → -ayni.' },
      { head: 'Many', ar: 'مَدَارِسُ', think: 'A broken plural.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'DUAL -āni', e: 'DUAL -ayni' },
    model: 'فِي حَيِّي {k|مَدْرَسَتَانِ} {k|كَبِيرَتَانِ}، وَدَرَسْتُ فِي {e|مَدْرَسَتَيْنِ}. وَفِي الْمَدِينَةِ مَدَارِسُ كَثِيرَةٌ.',
    modelEn: 'In my neighbourhood there are two big schools, and I have studied in two schools. In the city there are many schools.',
    notes: 'Built on the website model sentence. Think aloud: “Exactly two? Subject or after a preposition?”',
  },
  models: [
    { ar: 'فِي مَدْرَسَتِنَا طَالِبَانِ جَدِيدَانِ.', en: 'In our school there are two new students.', tip: 'Website text: dual noun + dual adjective.' },
    { ar: 'أَسْكُنُ مَعَ أُخْتَيْنِ.', en: 'I live with two sisters.', tip: 'After مَعَ → -ayni.' },
    { ar: 'عِنْدِي كِتَابَانِ.', en: 'I have two books.', tip: 'No number word needed.' },
    { ar: 'رَأَيْتُ بِنْتَيْنِ فِي الْمَكْتَبَةِ.', en: 'I saw two girls in the library.', tip: 'Object → -ayni.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · one, two or many?', title: 'Singular, dual or plural?', ar: 'صَنِّفْ',
      categories: ['Singular', 'Dual', 'Plural'],
      items: [['طَالِبٌ', 0], ['طَالِبَانِ', 1], ['طُلَّابٌ', 2], ['غُرْفَةٌ', 0], ['غُرْفَتَيْنِ', 1], ['غُرَفٌ', 2], ['مُعَلِّمٌ', 0], ['مُعَلِّمَانِ', 1], ['مُعَلِّمُونَ', 2]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type S, D or P for each card. Ask: “How did you know it was dual?” (-āni / -ayni).',
    },
  ],
  mistakes: [
    { wrong: 'اِثْنَانِ كُتُبٌ', right: 'كِتَابَانِ', why: 'The dual ending already means “two”.' },
    { wrong: 'سَيَّارَانِ', right: 'سَيَّارَتَانِ', why: 'Keep the ة as ت before the dual ending.' },
    { wrong: 'ذَهَبْتُ مَعَ طَالِبَانِ.', right: 'ذَهَبْتُ مَعَ طَالِبَيْنِ.', why: 'After a preposition: -ayni.' },
  ],
  hints: ['Do we need a number word?', 'Where did the ة go?', 'After مَعَ: which ending?'],
  practiceQuiz: /Mastery/i, practicePick: [4, 5, 6, 7], practiceLabel: 'website mastery check questions 5–8',
  read: {
    title: 'Our school in numbers', label: 'website read-and-notice text, extended by the teacher',
    text: 'فِي مَدْرَسَتِنَا طَالِبَانِ جَدِيدَانِ وَمُعَلِّمَاتٌ خَبِيرَاتٌ. الْفُصُولُ وَاسِعَةٌ، وَمَكْتَبُ مُدِيرِ الْمَدْرَسَةِ قَرِيبٌ مِنَ الْمَدْخَلِ. فِي الْمَدْرَسَةِ مَكْتَبَتَانِ وَمَلْعَبٌ كَبِيرٌ. أَدْرُسُ مَعَ طَالِبَيْنِ مِنْ سُورِيَا.',
    glossary: [['طَالِبَانِ جَدِيدَانِ', 'two new students'], ['مُعَلِّمَاتٌ خَبِيرَاتٌ', 'expert teachers (f.)'], ['الْفُصُولُ', 'the classrooms'], ['مَكْتَبُ الْمُدِيرِ', 'the head’s office'], ['الْمَدْخَلِ', 'the entrance'], ['مَكْتَبَتَانِ', 'two libraries'], ['مَلْعَبٌ', 'a playground']],
    task: 'Website: underline every noun relevant to this lesson and explain its form (singular, dual or plural).',
    questions: [
      q('How many new students are there?', ['two', 'one', 'many'], 'طَالِبَانِ: dual.'),
      q('Which word is a DUAL with -ayni?', ['طَالِبَيْنِ', 'طَالِبَانِ', 'مَكْتَبَتَانِ'], 'After مَعَ.'),
      q('Why is it مَكْتَبَتَانِ (with ت)?', ['ة opens to ت before the dual ending', 'it is plural', 'it is a verb'], 'مَكْتَبَةٌ → مَكْتَبَتَانِ.'),
      q('Which word is a PLURAL?', ['الْفُصُولُ', 'مَلْعَبٌ', 'الْمَدْخَلِ'], 'فَصْلٌ → فُصُولٌ.'),
    ],
    qNote: 'The first two sentences are the website text; the last two are teacher-written to add more duals. Questions teacher-written.',
  },
  speak: {
    title: 'Speaking: one, two, many', source: 'website task “speak and transform”',
    prompts: [
      { route: 'core', ar: 'كَمْ كِتَابًا عِنْدَكَ؟ قُلْ: كِتَابٌ / كِتَابَانِ / كُتُبٌ.' },
      { route: 'develop', ar: 'مَاذَا فِي غُرْفَتِكَ؟ اِسْتَعْمِلِ الْمُثَنَّى مَرَّتَيْنِ.' },
      { route: 'stretch', ar: 'مَعَ مَنْ تَدْرُسُ؟ اِسْتَعْمِلْ «مَعَ» + الْمُثَنَّى.' },
    ],
    stems: [
      { route: 'core', ar: 'عِنْدِي ______ .' },
      { route: 'develop', ar: 'فِي غُرْفَتِي ______ وَ ______ .' },
      { route: 'stretch', ar: 'أَدْرُسُ مَعَ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَاذَا فِي غُرْفَتِكَ؟', en: 'What is in your room?' },
      { who: 'B', ar: 'فِي غُرْفَتِي سَرِيرٌ وَنَافِذَتَانِ وَكُتُبٌ كَثِيرَةٌ.', en: 'In my room there is a bed, two windows and many books.' },
    ],
    notes: 'Website: choose five nouns; say the singular, dual and/or plural, then use each in a sentence. Use objects on camera (one pen, two pens …). To a girl: عِنْدَكِ · غُرْفَتِكِ · تَدْرُسِينَ.',
  },
  write: {
    siteTask: 'Write 8–12 connected sentences about your school, home or local area. Use at least six target noun forms from this lesson and underline them.',
    core: { amount: '6 sentences', task: 'Six sentences, each with a dual subject (ـَانِ).', how: 'فِي … + dual. Remember ة → ت.' },
    develop: { amount: '8 sentences', task: 'Mix ـَانِ and ـَيْنِ: three after a preposition.', how: 'Underline every dual; label it -āni or -ayni.' },
    stretch: { amount: '8–12 sentences', task: 'Website task, with dual adjectives and one dual object.', how: 'طَالِبَتَانِ مُجْتَهِدَتَانِ · رَأَيْتُ … ـَيْنِ.' },
  },
  frames: {
    core: [
      { en: 'In my house there are two …', ar: 'فِي بَيْتِي ______ .' },
      { en: 'I have two …', ar: 'عِنْدِي ______ .' },
      { en: 'In my class there are two teachers.', ar: 'فِي فَصْلِي ______ .' },
      { en: 'In my area there are two schools.', ar: 'فِي حَيِّي ______ .' },
    ],
    develop: [
      { en: 'I live with two …', ar: 'أَسْكُنُ مَعَ ______ .' },
      { en: 'I studied in two schools.', ar: 'دَرَسْتُ فِي ______ .' },
      { en: 'I saw two …', ar: 'رَأَيْتُ ______ .' },
      { en: 'two new students', ar: 'طَالِبَانِ ______ .' },
    ],
    bank: ['كِتَابَانِ / كِتَابَيْنِ', 'قَلَمَانِ / قَلَمَيْنِ', 'غُرْفَتَانِ / غُرْفَتَيْنِ', 'مَدْرَسَتَانِ / مَدْرَسَتَيْنِ', 'أَخَوَانِ / أَخَوَيْنِ', 'أُخْتَانِ / أُخْتَيْنِ', 'نَافِذَتَانِ', 'مُعَلِّمَانِ', 'جَدِيدَانِ', 'كَبِيرَتَانِ', 'مَعَ', 'فِي'],
  },
  stretchTask: {
    task: 'Website writing workshop: 8–12 connected sentences about your school, home or local area with at least six target noun forms.',
    checklist: ['Three dual subjects with ـَانِ.', 'Three duals after a preposition with ـَيْنِ.', 'One noun in ة in the dual (ة → ت).', 'A dual adjective agreeing with its noun.', 'Some plurals for three or more.'],
    phrases: [['طَالِبَانِ جَدِيدَانِ', 'two new students'], ['مَدْرَسَتَانِ كَبِيرَتَانِ', 'two big schools'], ['مَعَ أُخْتَيْنِ', 'with two sisters'], ['فِي غُرْفَتَيْنِ', 'in two rooms'], ['عِنْدِي أَخَوَانِ', 'I have two brothers'], ['رَأَيْتُ بِنْتَيْنِ', 'I saw two girls']],
  },
  model: {
    text: 'أَسْكُنُ فِي بَيْتٍ صَغِيرٍ فِيهِ غُرْفَتَانِ وَحَدِيقَةٌ جَمِيلَةٌ. عِنْدِي أَخَوَانِ وَأُخْتٌ وَاحِدَةٌ، وَأَنَامُ مَعَ أَخَوَيَّ فِي غُرْفَةٍ وَاحِدَةٍ. فِي حَيِّي مَدْرَسَتَانِ كَبِيرَتَانِ وَمَسْجِدٌ قَدِيمٌ. أَدْرُسُ فِي الْمَدْرَسَةِ الْأُولَى مَعَ صَدِيقَيْنِ، وَعِنْدَنَا مُعَلِّمَانِ لِلْعَرَبِيَّةِ.',
    en: 'I live in a small house with two rooms and a beautiful garden. I have two brothers and one sister, and I sleep with my two brothers in one room. In my area there are two big schools and an old mosque. I study at the first school with two friends, and we have two Arabic teachers.',
    find: ['duals in -āni', 'duals in -ayni', 'ة → ت', 'a dual adjective'],
    source: 'teacher model built on the website model sentence',
    notes: '-āni: غُرْفَتَانِ · أَخَوَانِ · مَدْرَسَتَانِ كَبِيرَتَانِ · مُعَلِّمَانِ. -ayni: صَدِيقَيْنِ; أَخَوَيَّ (Stretch: “my two brothers” — the nūn drops before ـيَّ).',
  },
  selfCheck: [
    { route: 'core', text: 'I used the dual (not a number word) for two.' },
    { route: 'core', text: 'My duals in ة have ت: مَدْرَسَتَانِ.' },
    { route: 'develop', text: 'I used ـَيْنِ after every preposition.' },
    { route: 'develop', text: 'I can tell singular, dual and plural apart.' },
    { route: 'stretch', text: 'My adjectives are dual too.' },
  ],
  exit: [
    q('Choose “two pens” as a subject.', ['قَلَمَانِ', 'قَلَمَيْنِ', 'أَقْلَامٌ'], 'Subject → -āni.'),
    q('After مِنْ, choose “two cities”.', ['مَدِينَتَيْنِ', 'مَدِينَتَانِ', 'مُدُنٌ'], 'Preposition → -ayni; ة → ت.'),
    q('Which means “three or more rooms”?', ['غُرَفٌ', 'غُرْفَتَانِ', 'غُرْفَةٌ'], 'Plural.'),
  ],
  mastery: false,
  prep: {
    words: [['جَمْعُ الْمُذَكَّرِ السَّالِمِ', 'sound masculine plural', '—'], ['مُعَلِّمُونَ', 'teachers (subject)', 'مُعَلِّمِينَ after فِي'], ['مُهَنْدِسُونَ', 'engineers', '—'], ['لَاعِبُونَ', 'players', '—'], ['مُسْلِمُونَ', 'Muslims', '—']],
    questionEn: 'You know مُسْلِمُونَ and مُؤْمِنُونَ from the Qur’an. What do these words have in common?',
    questionAr: 'مُسْلِمُونَ · مُؤْمِنُونَ · ______',
    homework: {
      core: 'Write ten singular → dual pairs (five masculine, five in ة).',
      develop: 'Write five sentences with ـَيْنِ after a preposition.',
      stretch: 'Website writing workshop (8–12 sentences) and the website mastery check.',
    },
    wordsSource: 'The five words prepare GM-N-03 (website Nouns lesson 3: the sound masculine plural).',
  },
  remember: 'Remember: one · two · three-or-more · two = ـَانِ (subject) or ـَيْنِ (after a preposition / object) · ة → ت · no number word for two.',
});

module.exports = { meta, slides };
