'use strict';
/* GM-ADJ-04 · Position and Full Adjective Agreement — website: Mastery & Revision › Grammar › Adjectives › Lesson 4 (the descriptive
 * adjective comes after its noun; four-part agreement: gender, number, definiteness, case — الطَّالِبُ الْمُجْتَهِدُ · رَأَيْتُ الطَّالِبَ
 * الْمُجْتَهِدَ · مَعَ الطَّالِبِ الْمُجْتَهِدِ; phrase vs sentence; clinic: adjective before noun, الـ on the noun only). The website Entry
 * Check is the Do Now (feedback in English); guided and mastery checks repeat it, so quick check, practice and exit are teacher-written.
 * Teacher-added Stretch: a noun with a possessive ending is definite, so its adjective takes الـ (بَيْتِي الْكَبِيرُ); two adjectives;
 * the dual. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-ADJ-04', fileTitle: 'Position_and_Full_Agreement', title: 'Position and Full Adjective Agreement', arabic: 'مَوْقِعُ الصِّفَةِ وَالْمُطَابَقَةُ الْكَامِلَةُ',
  focus: 'The adjective follows its noun and copies FOUR things: gender, number, definiteness and case. Core: gender, number and al-. Stretch: the case ending too — the hard-working student, I saw the hard-working student, with the hard-working student.',
  icon: 'FaListCheck',
});

const slides = G.gmLesson({
  code: 'GM-ADJ-04', site: 'grammar__04-adjectives__grammar-mastery-04-position-definiteness',
  support: `• Core: adjective AFTER the noun; al- on both or neither (website clinic). Develop: phrase vs sentence; the four-feature checklist. Stretch: case copying (‑u / ‑a / ‑i), possessive nouns + al- adjective (بَيْتِي الْكَبِيرُ), the dual (الطَّالِبَانِ الْمُجْتَهِدَانِ).
• Website guidance: for Core, focus first on gender, number and definiteness; case is developed in Stretch.
• Use a four-box checklist on screen for every example: G · N · D · C. Students tick each box aloud.`,
  teach: 'Position; four-part agreement; phrase vs sentence.',
  wedo: 'Fix the order, copy the case, build phrases.',
  next: { nextCode: 'GM-ADJ-05', nextTitle: 'Negative Description with غَيْر', nextAr: 'النَّفْيُ الوَصْفِيُّ بِـ«غَيْر»' },
  doNow: {
    fb: { 0: 'Definite noun and definite adjective.', 1: 'An indefinite predicate makes a sentence.', 2: 'The Arabic descriptive adjective follows its noun.', 3: 'Both noun and adjective are genitive after maʿa.' },
    keyIdea: { text: 'Adjective AFTER the noun. It copies gender, number, definiteness — and the case ending.', ar: 'مَعَ {k|الطَّالِبِ} {e|الْمُجْتَهِدِ}' },
    retrieves: 'The website Entry Check (all five questions) — it uses the five words prepared at the end of GM-ADJ-03.',
  },
  objectives: ['Place the adjective after its noun.', 'Make noun and adjective agree in gender, number and definiteness.', 'Tell a phrase from a sentence.', 'Copy the case ending of the noun onto the adjective.'],
  routes: {
    core: ['I put the adjective after the noun.', 'I put al- on both words or on neither.'],
    develop: ['I check all four features with the G-N-D-C list.', 'I tell “the big house” from “the house is big”.'],
    stretch: ['I copy -u, -a and -i onto the adjective.', 'I write my big house with al- on the adjective.'],
  },
  terms: {
    items: [
      { ar: 'النَّعْتُ', en: 'adjective (describing word)', note: 'also called صِفَةٌ' },
      { ar: 'الْمَنْعُوتُ', en: 'the noun described', note: 'الطَّالِبُ الْمُجْتَهِدُ' },
      { ar: 'النَّوْعُ', en: 'gender', tr: 'G', note: 'مُذَكَّرٌ / مُؤَنَّثٌ' },
      { ar: 'الْعَدَدُ', en: 'number', tr: 'N', note: 'مُفْرَدٌ · مُثَنًّى · جَمْعٌ' },
      { ar: 'التَّعْرِيفُ', en: 'definiteness', tr: 'D', note: 'الـ or none' },
      { ar: 'الْإِعْرَابُ', en: 'case', tr: 'C', note: 'الطَّالِبُ · الطَّالِبَ · الطَّالِبِ' },
    ],
  },
  explain: [
    {
      type: 'explain', min: 2, eyebrow: 'Grammar · step 1 · adjective after noun (website)', title: 'The noun comes first', ar: 'الصِّفَةُ بَعْدَ الْمَوْصُوفِ',
      pointsHead: 'THE RULE',
      points: [
        'In an ordinary descriptive phrase, the adjective comes AFTER the noun (website).',
        'English “a big house” becomes “house big” in Arabic.',
        'Website clinic: do not copy English word order.',
        'Two adjectives? Both follow the noun, usually joined by “and” or just side by side.',
      ],
      examples: [
        { ar: 'بَيْتٌ كَبِيرٌ', en: 'a big house', note: 'website' },
        { ar: 'مَدْرَسَةٌ جَدِيدَةٌ', en: 'a new school', note: 'website' },
        { ar: 'شَارِعٌ طَوِيلٌ', en: 'a long street', note: 'website' },
        { ar: 'غُرْفَةٌ صَغِيرَةٌ وَنَظِيفَةٌ', en: 'a small, clean room', note: 'two adjectives' },
      ],
      notes: 'STEP 1 (2 min) — website “Adjective after noun”. Say each English phrase, students rebuild it in Arabic order.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · step 2 · four-part agreement (website)', title: 'G · N · D · C — the adjective copies all four', ar: 'الْمُطَابَقَةُ فِي أَرْبَعَةٍ', ltr: true,
      cols: [{ label: 'Feature', w: 2.4 }, { label: 'Example', w: 5.0, size: 24 }, { label: 'What is copied', w: 4.93 }],
      rows: [
        { core: true, cells: ['Gender', 'طَالِبَةٌ مُجْتَهِدَةٌ', 'feminine → + ة'] },
        { core: true, cells: ['Number', 'الطَّالِبَانِ الْمُجْتَهِدَانِ', 'dual → -āni on both'] },
        { core: true, cells: ['Definiteness', 'الطَّالِبُ الْمُجْتَهِدُ', 'al- on both (website)'] },
        { cells: ['Case: subject', 'جَاءَ الطَّالِبُ الْمُجْتَهِدُ.', '-u on both (website)'] },
        { cells: ['Case: object', 'رَأَيْتُ الطَّالِبَ الْمُجْتَهِدَ.', '-a on both (website)'] },
        { cells: ['Case: after a preposition', 'تَحَدَّثْتُ مَعَ الطَّالِبِ الْمُجْتَهِدِ.', '-i on both (website)'] },
      ],
      foot: 'Website: for Core work, focus first on gender, number and definiteness; case endings are developed in Stretch.',
      notes: 'STEP 2 (4 min) — website “Four-part agreement”. Tick G-N-D-C aloud for each row. Remind students: non-human plurals use feminine singular (ADJ-02) — that is the one exception to “number”.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · step 3 · phrase versus sentence (website) · Develop / Stretch', title: 'Definiteness changes the structure', ar: 'عِبَارَةٌ أَمْ جُمْلَةٌ؟', ltr: true,
      cols: [{ label: 'Arabic', w: 4.4, size: 26 }, { label: 'Meaning', w: 3.6 }, { label: 'Why', w: 4.33 }],
      rows: [
        { core: true, cells: ['الْوَلَدُ الصَّغِيرُ', 'the small boy', 'al- on both → phrase (website)'] },
        { core: true, cells: ['الْوَلَدُ صَغِيرٌ.', 'The boy is small.', 'adjective without al- → sentence (website)'] },
        { core: true, cells: ['وَلَدٌ صَغِيرٌ', 'a small boy', 'neither → phrase (website)'] },
        { cells: ['بَيْتِي الْكَبِيرُ', 'my big house', '“my house” is definite → al- on the adjective'] },
        { cells: ['بَيْتُ أَخِي الْجَدِيدُ', 'my brother’s new house', 'iḍāfa is definite → al- on the adjective (N-07)'] },
      ],
      foot: 'Stretch: a noun with a possessive ending or a definite iḍāfa counts as definite — so the adjective needs al-.',
      notes: 'STEP 3 (3 min) — website “Phrase versus sentence”, plus two teacher-added Stretch rows. Common error: بَيْتِي كَبِيرٌ means “my house IS big” — fine as a sentence, but not “my big house”.',
    },
  ],
  quick: [
    q('Choose “a long street”.', ['شَارِعٌ طَوِيلٌ', 'طَوِيلٌ شَارِعٌ', 'الشَّارِعُ طَوِيلٌ'], 'Adjective after the noun.'),
    q('Choose “the clean room”.', ['الْغُرْفَةُ النَّظِيفَةُ', 'الْغُرْفَةُ نَظِيفَةٌ', 'الْغُرْفَةُ نَظِيفَةُ'], 'al- on both.'),
    q('Choose “I visited the old city.”', ['زُرْتُ الْمَدِينَةَ الْقَدِيمَةَ.', 'زُرْتُ الْمَدِينَةَ الْقَدِيمَةُ.', 'زُرْتُ الْمَدِينَةُ الْقَدِيمَةِ.'], 'Object: -a on both.'),
    q('What does بَيْتِي الْجَدِيدُ mean?', ['my new house', 'My house is new.', 'a new house'], 'A possessive noun is definite → al- adjective = phrase.'),
  ],
  quickNote: 'teacher-written hinge questions on the website’s three steps.',
  ido: {
    title: 'Watch me tick G · N · D · C',
    steps: [
      { head: 'Noun', ar: 'السَّيَّارَةَ', think: 'f · sing · al- · object.' },
      { head: 'G · N', ar: 'سَرِيعَةٌ', think: 'feminine, singular.' },
      { head: 'D', ar: 'السَّرِيعَةُ', think: 'add al-.' },
      { head: 'C', ar: 'رَأَيْتُ السَّيَّارَةَ السَّرِيعَةَ', think: 'object → -a.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'NOUN', e: 'ADJECTIVE' },
    model: 'رَأَيْتُ {k|السَّيَّارَةَ} {e|السَّرِيعَةَ} أَمَامَ {k|الْبَيْتِ} {e|الْكَبِيرِ}، وَ{k|صَاحِبُهَا} {e|الْجَدِيدُ} لَطِيفٌ.',
    modelEn: 'I saw the fast car in front of the big house, and its new owner is kind.',
    notes: 'Website model: رَأَيْتُ السَّيَّارَةَ السَّرِيعَةَ. Build it feature by feature. Then show the -i pair after أَمَامَ and the possessive noun صَاحِبُهَا + al- adjective (Stretch).',
  },
  models: [
    { ar: 'الْبَيْتُ الْكَبِيرُ', en: 'the big house', tip: 'Website model bank: phrase.' },
    { ar: 'الْبَيْتُ كَبِيرٌ.', en: 'The house is big.', tip: 'Website model bank: sentence.' },
    { ar: 'سَكَنْتُ فِي شَقَّةٍ صَغِيرَةٍ.', en: 'I lived in a small flat.', tip: 'After a preposition: -in on both.' },
    { ar: 'الْمُعَلِّمَتَانِ الْجَدِيدَتَانِ لَطِيفَتَانِ.', en: 'The two new teachers (f.) are kind.', tip: 'Dual: copied on every word.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · phrase or sentence?', title: 'A phrase, or a full sentence?', ar: 'عِبَارَةٌ أَمْ جُمْلَةٌ؟',
      categories: ['Phrase (“the / a … ”)', 'Sentence (“… is …”)'],
      items: [['الْقَلَمُ الْجَدِيدُ', 0], ['الْقَلَمُ جَدِيدٌ', 1], ['قِصَّةٌ طَوِيلَةٌ', 0], ['الْقِصَّةُ طَوِيلَةٌ', 1], ['غُرْفَتِي الْوَاسِعَةُ', 0], ['غُرْفَتِي وَاسِعَةٌ', 1], ['الْجَوُّ الْبَارِدُ', 0], ['الْجَوُّ بَارِدٌ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type P or S. Pairs are deliberately minimal — the only difference is al- on the adjective.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'We do · copy the case · say it aloud (Stretch)', title: 'Put the phrase into the sentence', ar: 'ضَعِ الْعِبَارَةَ فِي الْجُمْلَةِ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Phrase', w: 3.6, size: 22 }, { label: 'Frame', w: 3.4, size: 22 }, { label: 'Result', w: 5.33, size: 24 }],
      rows: [
        { core: true, cells: ['الْمُعَلِّمُ الْجَدِيدُ', 'جَاءَ …', 'جَاءَ الْمُعَلِّمُ الْجَدِيدُ.'] },
        { core: true, cells: ['الْمُعَلِّمُ الْجَدِيدُ', 'شَكَرْتُ …', 'شَكَرْتُ الْمُعَلِّمَ الْجَدِيدَ.'] },
        { core: true, cells: ['الْمُعَلِّمُ الْجَدِيدُ', 'سَلَّمْتُ عَلَى …', 'سَلَّمْتُ عَلَى الْمُعَلِّمِ الْجَدِيدِ.'] },
        { cells: ['حَدِيقَةٌ جَمِيلَةٌ', 'جَلَسْنَا فِي …', 'جَلَسْنَا فِي حَدِيقَةٍ جَمِيلَةٍ.'] },
        { cells: ['كِتَابٌ مُفِيدٌ', 'قَرَأْتُ …', 'قَرَأْتُ كِتَابًا مُفِيدًا.'] },
      ],
      foot: 'The same phrase changes its last vowel in each sentence — and the noun and adjective ALWAYS change together.',
      notes: 'WE DO (2 min, Stretch focus). Core students say the phrase correctly (G-N-D); Stretch students add the case.',
    },
  ],
  mistakes: [
    { wrong: 'كَبِيرٌ بَيْتٌ', right: 'بَيْتٌ كَبِيرٌ', why: 'The adjective follows the noun (website clinic).' },
    { wrong: 'الْمَدْرَسَةُ جَدِيدَةُ', right: 'الْمَدْرَسَةُ الْجَدِيدَةُ', why: 'For “the new school”, al- on both (website clinic).' },
    { wrong: 'رَأَيْتُ الْوَلَدَ الصَّغِيرُ.', right: 'رَأَيْتُ الْوَلَدَ الصَّغِيرَ.', why: 'The adjective copies the case.' },
  ],
  hints: ['Which word comes first?', 'Al- on both?', 'Does the case match?'],
  practice: [
    q('Choose “a hot day”.', ['يَوْمٌ حَارٌّ', 'حَارٌّ يَوْمٌ', 'الْيَوْمُ حَارٌّ'], 'Adjective after noun, both indefinite.'),
    q('Choose “The street is long.”', ['الشَّارِعُ طَوِيلٌ.', 'الشَّارِعُ الطَّوِيلُ', 'شَارِعٌ طَوِيلٌ'], 'Sentence: no al- on the adjective.'),
    q('Choose “in the small garden”.', ['فِي الْحَدِيقَةِ الصَّغِيرَةِ', 'فِي الْحَدِيقَةِ الصَّغِيرَةُ', 'فِي الْحَدِيقَةِ صَغِيرَةٍ'], 'Genitive and definite on both.'),
    q('Choose “my old friend”.', ['صَدِيقِي الْقَدِيمُ', 'صَدِيقِي قَدِيمٌ', 'الصَّدِيقِي الْقَدِيمُ'], 'Possessive noun is definite → al- adjective.'),
  ],
  practiceLabel: 'teacher-written practice on the website rules',
  read: {
    title: 'A walk in my city', label: 'website reading text, extended by the teacher',
    text: 'فِي مَدِينَتِي أَمَاكِنُ جَمِيلَةٌ وَشَوَارِعُ وَاسِعَةٌ. هَذِهِ الْمَدْرَسَةُ الْجَدِيدَةُ قَرِيبَةٌ، وَذَلِكَ الْمَتْحَفُ الْقَدِيمُ مُثِيرٌ لِلِاهْتِمَامِ. أَمْشِي كُلَّ يَوْمٍ فِي الشَّارِعِ الطَّوِيلِ، وَأَرَى الْحَدِيقَةَ الْكَبِيرَةَ. صَدِيقِي الْجَدِيدُ يَسْكُنُ فِي بَيْتٍ قَدِيمٍ.',
    glossary: [['أَمَاكِنُ', 'places'], ['وَاسِعَةٌ', 'wide'], ['الْمَتْحَفُ', 'the museum'], ['مُثِيرٌ لِلِاهْتِمَامِ', 'interesting'], ['أَمْشِي', 'I walk'], ['أَرَى', 'I see'], ['يَسْكُنُ', 'lives']],
    task: 'Website: underline each adjective, draw an arrow to its noun, and label the agreement feature (G · N · D · C).',
    questions: [
      q('In the second sentence, the school words form …', ['a sentence: “The new school is near.”', 'one phrase only', 'two phrases'], 'Phrase + adjective without al-.'),
      q('Why does the adjective of the garden end in -a?', ['The garden is the object of أَرَى.', 'It is after a preposition.', 'It is the subject.'], 'Case copied: -a.'),
      q('Why does the adjective of the street end in -i?', ['It comes after the preposition فِي.', 'It is the object.', 'It is feminine.'], 'Case copied: -i.'),
      q('Why does الْجَدِيدُ have al- after صَدِيقِي?', ['“My friend” is definite.', 'It is a sentence.', 'It is a mistake.'], 'Possessive noun → al- adjective.'),
    ],
    qNote: 'The first two sentences are the website text; the rest is teacher-written. Questions teacher-written.',
  },
  speak: {
    title: 'Speaking: my favourite places', source: 'website speaking task (45–60 seconds)',
    prompts: [
      { route: 'core', ar: 'صِفْ بَيْتَكَ وَشَارِعَكَ.' },
      { route: 'develop', ar: 'مَا الْمَكَانُ الْمُفَضَّلُ فِي مَدِينَتِكَ؟ لِمَاذَا؟' },
      { route: 'stretch', ar: 'مَاذَا رَأَيْتَ فِي رِحْلَتِكَ الْأَخِيرَةِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَسْكُنُ فِي بَيْتٍ ______ فِي شَارِعٍ ______ .' },
      { route: 'develop', ar: 'الْمَكَانُ الْمُفَضَّلُ عِنْدِي ______ ______ .' },
      { route: 'stretch', ar: 'رَأَيْتُ ______ ______ ، وَزُرْتُ ______ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَاذَا رَأَيْتَ فِي رِحْلَتِكَ؟', en: 'What did you see on your trip?' },
      { who: 'B', ar: 'رَأَيْتُ الْمَسْجِدَ الْكَبِيرَ، وَمَشَيْتُ فِي السُّوقِ الْقَدِيمِ، وَأَكَلْتُ طَعَامًا لَذِيذًا.', en: 'I saw the big mosque, walked in the old market and ate delicious food.' },
    ],
    notes: 'Website: 45–60 seconds with six accurate structures. Listen for the case on both words in the Stretch model (-a, -i, -an).',
  },
  write: {
    siteTask: 'Write 90–120 words describing a person, place, object or experience, with at least eight target adjective structures, underlined.',
    core: { amount: '6 sentences', task: 'Six phrases or sentences describing your home.', how: 'Adjective after noun; al- on both or neither.' },
    develop: { amount: '8 sentences', task: 'Mix phrases and “… is …” sentences.', how: 'Tick G-N-D for each pair.' },
    stretch: { amount: '90–120 words', task: 'Website task about a trip, with phrases as subject, object and after prepositions.', how: 'Tick all four: G-N-D-C.' },
  },
  frames: {
    core: [
      { en: 'I live in a … house.', ar: 'أَسْكُنُ فِي بَيْتٍ ______ .' },
      { en: 'My room is …', ar: 'غُرْفَتِي ______ .' },
      { en: 'The street is …', ar: 'الشَّارِعُ ______ .' },
      { en: 'The weather is …', ar: 'الْجَوُّ ______ .' },
    ],
    develop: [
      { en: 'I visited the … museum. (add al-)', ar: 'زُرْتُ الْمَتْحَفَ ______ .' },
      { en: 'We sat in the … garden. (add al-)', ar: 'جَلَسْنَا فِي الْحَدِيقَةِ ______ .' },
      { en: 'My new friend is …', ar: 'صَدِيقِي الْجَدِيدُ ______ .' },
      { en: 'I read a … book.', ar: 'قَرَأْتُ كِتَابًا ______ .' },
    ],
    bank: ['كَبِيرٌ', 'صَغِيرٌ', 'جَدِيدٌ', 'قَدِيمٌ', 'طَوِيلٌ', 'وَاسِعٌ', 'نَظِيفٌ', 'جَمِيلٌ', 'هَادِئٌ', 'مُفِيدٌ', 'لَذِيذٌ', 'حَارٌّ', 'بَارِدٌ'],
  },
  stretchTask: {
    task: 'Website extended writing workshop: 90–120 words about a trip or a place, with at least eight target adjective structures.',
    checklist: ['Every adjective is after its noun.', 'Three definite phrases (al- on both).', 'Two “… is …” sentences.', 'One phrase as object (-a) and one after a preposition (-i).', 'One possessive noun with an al- adjective (my new friend).'],
    phrases: [['الْمَسْجِدُ الْكَبِيرُ', 'the big mosque'], ['فِي السُّوقِ الْقَدِيمِ', 'in the old market'], ['رَأَيْتُ الْبَحْرَ الْأَزْرَقَ', 'I saw the blue sea'], ['طَعَامًا لَذِيذًا', 'delicious food (object)'], ['صَدِيقِي الْجَدِيدُ', 'my new friend'], ['الْجَوُّ حَارٌّ', 'the weather is hot']],
  },
  model: {
    text: 'فِي الْعُطْلَةِ الْمَاضِيَةِ سَافَرْنَا إِلَى مَدِينَةٍ سَاحِلِيَّةٍ. سَكَنَّا فِي فُنْدُقٍ صَغِيرٍ قُرْبَ الْبَحْرِ الْأَزْرَقِ. زُرْتُ الْمَسْجِدَ الْكَبِيرَ وَالسُّوقَ الْقَدِيمَ، وَاشْتَرَيْتُ هَدِيَّةً جَمِيلَةً لِأُخْتِي الصَّغِيرَةِ. كَانَ الْجَوُّ حَارًّا، لَكِنَّ الْبَحْرَ كَانَ بَارِدًا. رِحْلَتُنَا الْقَصِيرَةُ كَانَتْ مُمْتِعَةً.',
    en: 'Last holiday we travelled to a coastal city. We stayed in a small hotel near the blue sea. I visited the big mosque and the old market, and bought a beautiful gift for my little sister. The weather was hot, but the sea was cold. Our short trip was enjoyable.',
    find: ['indefinite phrases', 'definite phrases', 'case copied', 'possessive + al-'],
    source: 'teacher model on the website writing workshop',
  },
  selfCheck: [
    { route: 'core', text: 'Every adjective comes after its noun.' },
    { route: 'core', text: 'Al- is on both words or on neither in my phrases.' },
    { route: 'develop', text: 'Gender and number match every time.' },
    { route: 'develop', text: 'My sentences and phrases mean what I intended.' },
    { route: 'stretch', text: 'The adjective copies the case of its noun.' },
  ],
  exit: [
    q('Choose “the tall man”.', ['الرَّجُلُ الطَّوِيلُ', 'الطَّوِيلُ الرَّجُلُ', 'الرَّجُلُ طَوِيلٌ'], 'After the noun; al- on both.'),
    q('Choose “The room is clean.”', ['الْغُرْفَةُ نَظِيفَةٌ.', 'الْغُرْفَةُ النَّظِيفَةُ', 'غُرْفَةٌ نَظِيفَةٌ'], 'Sentence: no al- on the adjective.'),
    q('Choose “I thanked the kind doctor.”', ['شَكَرْتُ الطَّبِيبَ اللَّطِيفَ.', 'شَكَرْتُ الطَّبِيبَ اللَّطِيفُ.', 'شَكَرْتُ الطَّبِيبُ اللَّطِيفَ.'], 'Object: -a on both.'),
  ],
  mastery: false,
  prep: {
    words: [['غَيْرُ', 'not, non-, other than', '—'], ['مُمْكِنٌ', 'possible', 'غَيْرُ مُمْكِنٍ = impossible'], ['صَحِيحٌ', 'correct', 'غَيْرُ صَحِيحٍ = incorrect'], ['مُنَاسِبٌ', 'suitable', '—'], ['مُرِيحٌ', 'comfortable', '—']],
    questionEn: 'Ghayr means “not”. How do you think you would say “uncomfortable”?',
    questionAr: 'مُرِيحٌ · غَيْرُ ______',
    homework: {
      core: 'Write ten noun + adjective phrases about your home.',
      develop: 'Write five phrases and five matching sentences.',
      stretch: 'Website writing workshop about a trip, ticking G-N-D-C.',
    },
    wordsSource: 'The five words prepare GM-ADJ-05 (website Adjectives lesson 5: negative description with ghayr).',
  },
  remember: 'Remember: adjective AFTER the noun · it copies Gender, Number, Definiteness and Case · al- on the adjective = phrase; none = “is” · my house / my brother’s house are definite.',
});

module.exports = { meta, slides };
