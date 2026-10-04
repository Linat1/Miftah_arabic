'use strict';
/* GM-POS-02 · Possessive Iḍāfa Construction — website: Mastery & Revision › Grammar › Possessives › Lesson 2 (the two-part
 * architecture: muḍāf bare — no al-, no tanwīn — and muḍāf ilayh always genitive; the final possessor controls definiteness:
 * common noun, indefinite noun, proper name, suffix, chain; the first noun’s case comes from its sentence role; longer chains —
 * build from the end; dual and sound masculine plural construct forms drop the nūn; adjective scope by agreement evidence;
 * clinic). Quizzes are the website’s (Iḍāfa Starter, Mini-checks: definiteness, case across the chain, construct number forms,
 * adjective scope; Iḍāfa Mastery). Colour code: teal = first noun (muḍāf), purple = possessor (muḍāf ilayh). I-do, build drill,
 * sorter, reading, frames and the extended model are teacher-made on the website content (the drill uses the website game items). */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__13-possessives__grammar-mastery-02-idafa';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-POS-02', fileTitle: 'Idafa', title: 'Possessive Iḍāfa Construction', arabic: 'تَرْكِيبُ الْإِضَافَةِ لِلْمِلْكِيَّةِ وَالِارْتِبَاطِ',
  focus: 'Arabic links two nouns with no apostrophe: bābu l-madrasati (the school door), kitābu ṭālibin (a student’s book). The first noun is bare — no al-, no tanwīn; the last noun is genitive and decides whether the whole phrase is definite.',
  icon: 'FaLink',
});

const slides = G.gmLesson({
  code: 'GM-POS-02', site: KEY,
  support: `• Core: build a two-noun iḍāfa — first noun bare (no al-, no tanwīn), second noun genitive (bābu l-madrasati, kitābu Laylā). Develop: definite vs indefinite chains (kitābu ṭ-ṭālibi / kitābu ṭālibin), the first noun’s case from its sentence role (fataḥtu bāba l-madrasati), three-noun chains. Stretch: dual and plural construct forms (ṭālibā l-madrasati, muʿallimū l-madrasati) and adjective scope.
• Website precision: the first noun is not “indefinite” — it is in the construct state (bare); the whole phrase is definite or indefinite according to the FINAL possessor.
• Colour code: teal = first noun, purple = possessor. Builds directly on GM-CASE-03 (genitive) and GM-POS-01 (nūn deletion before suffixes).`,
  teach: 'Architecture; first-noun case; chains; dual and plural; adjective scope.',
  wedo: 'Build the iḍāfa; definite or indefinite?; repair.',
  next: { nextCode: 'GM-POS-03', nextTitle: 'Possession with ʿinda and li-', nextAr: 'التَّعْبِيرُ عَنِ الْمِلْكِيَّةِ بِـ«عِنْدَ» وَ«لِـ»' },
  doNow: {
    questions: [
      W(/Iḍāfa Starter/, 0, { feedback: 'Bare first noun + genitive second noun.' }),
      W(/Iḍāfa Starter/, 1, { feedback: 'The second noun is always genitive.' }),
      W(/Iḍāfa Starter/, 2, { feedback: 'No tanwīn on the first noun.' }),
      W(/Iḍāfa Starter/, 3, { feedback: 'An indefinite last noun → indefinite phrase.' }),
      W(/Iḍāfa Starter/, 4, { prompt: 'Choose “Laylā’s book”.', feedback: 'A name can be the possessor.' }),
    ],
    keyIdea: { text: 'First noun: bare (no al-, no tanwīn). Last noun: genitive — and it decides definiteness.', ar: '{k|بَابُ} {m|الْمَدْرَسَةِ} ‖ {k|كِتَابُ} {m|طَالِبٍ}' },
    retrieves: 'The website Iḍāfa Starter — GM-CASE-03 genitive and GM-POS-01 possessive endings.',
  },
  objectives: ['Build a two-noun iḍāfa.', 'Make it definite or indefinite.', 'Give the first noun its sentence case.', 'Build chains and show adjective scope.'],
  routes: {
    core: ['I write bābu l-madrasati.', 'I never put al- or tanwīn on the first noun.'],
    develop: ['I write kitābu ṭālibin and fataḥtu bāba …', 'I build three-noun chains.'],
    stretch: ['I write muʿallimū l-madrasati.', 'I write 110–130 words with ten iḍāfas.'],
  },
  terms: {
    items: [
      { ar: 'الْإِضَافَةُ', en: 'iḍāfa: noun + noun', note: 'بَابُ الْمَدْرَسَةِ' },
      { ar: 'الْمُضَافُ', en: 'first noun (bare)', note: 'بَابُ' },
      { ar: 'الْمُضَافُ إِلَيْهِ', en: 'possessor (genitive)', note: 'الْمَدْرَسَةِ' },
      { ar: 'السِّلْسِلَةُ', en: 'chain of three or more', note: 'بَابُ فَصْلِ الْمَدْرَسَةِ' },
      { ar: 'مَعْرِفَةٌ · نَكِرَةٌ', en: 'definite · indefinite', note: 'كِتَابُ الطَّالِبِ · كِتَابُ طَالِبٍ' },
      { ar: 'حَذْفُ النُّونِ', en: 'dropping the nūn', note: 'مُعَلِّمُو الْمَدْرَسَةِ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · the two-part architecture (website tables)', title: 'The last noun decides', ar: 'الْمُضَافُ وَالْمُضَافُ إِلَيْهِ', ltr: true,
      cols: [{ label: 'Final possessor', w: 3.2 }, { label: 'Iḍāfa', w: 3.8, size: 24 }, { label: 'Meaning', w: 3.4 }, { label: 'Phrase is', w: 1.93 }],
      rows: [
        { core: true, cells: ['definite noun', 'كِتَابُ الطَّالِبِ', 'the student’s book', 'definite'] },
        { core: true, cells: ['indefinite noun', 'كِتَابُ طَالِبٍ', 'a student’s book', 'indefinite'] },
        { core: true, cells: ['proper name', 'كِتَابُ لَيْلَى', 'Laylā’s book', 'definite'] },
        { cells: ['noun + suffix', 'كِتَابُ صَدِيقِي', 'my friend’s book', 'definite'] },
        { cells: ['longer chain', 'كِتَابُ صَدِيقِ أَخِي', 'my brother’s friend’s book', 'definite'] },
      ],
      foot: 'Website rules: the FIRST noun (muḍāf) takes no al- and no tanwīn — its case comes from the sentence. The SECOND noun (muḍāf ilayh) is always genitive and may be definite or indefinite.',
      notes: 'PART 1 (3 min) — website “The two-part architecture” + “Names, suffixes and established expressions”. Precision: the first noun is bare (construct state), not “indefinite”.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · the first noun changes case (website table) · Develop', title: 'One unit inside the sentence', ar: 'إِعْرَابُ الْمُضَافِ', ltr: true,
      cols: [{ label: 'Role', w: 2.8 }, { label: 'Model', w: 5.6, size: 22 }, { label: 'Case pattern', w: 3.93 }],
      rows: [
        { core: true, cells: ['topic / subject', 'بَابُ الْمَدْرَسَةِ مَفْتُوحٌ.', 'first -u + second -i'] },
        { core: true, cells: ['direct object', 'فَتَحْتُ بَابَ الْمَدْرَسَةِ.', 'first -a + second -i'] },
        { cells: ['after a locator', 'وَقَفْتُ عِنْدَ بَابِ الْمَدْرَسَةِ.', 'first -i + second -i'] },
        { cells: ['direct object', 'زُرْتُ مَكْتَبَةَ مَدْرَسَتِنَا.', 'first -a + second -i'] },
        { cells: ['after fī', 'دَرَسْتُ فِي مَكْتَبَةِ الْمَدِينَةِ.', 'first -i + second -i'] },
      ],
      foot: 'Website: the genitive of the second noun belongs to the iḍāfa; the case of the first noun belongs to the sentence around it.',
      notes: 'PART 2 (3 min) — website “The first noun changes case; the possessor stays genitive” (rows 4–5 from the website Mastery and models).',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 3 · longer iḍāfa chains (website models) · Develop', title: 'Build from the end', ar: 'سِلْسِلَةُ الْإِضَافَةِ', ltr: true,
      cols: [{ label: 'Chain', w: 4.8, size: 24 }, { label: 'Meaning', w: 4.2 }, { label: 'Last noun', w: 3.33 }],
      rows: [
        { core: true, cells: ['بَابُ فَصْلِ الْمَدْرَسَةِ', 'the door of the school’s classroom', 'definite'] },
        { cells: ['مُدِيرُ مَكْتَبِ الشَّرِكَةِ', 'the manager of the company office', 'definite'] },
        { core: true, cells: ['مَفَاتِيحُ سَيَّارَةِ أَبِي', 'my father’s car keys', 'suffix → definite'] },
        { cells: ['بَرْنَامَجُ تَدْرِيبِ الْمُعَلِّمِينَ', 'the teachers’ training programme', 'plural -īna'] },
      ],
      foot: 'Website method: decide the final possessor first and put it in the genitive; then add each noun in front of it — bare, no al-, no tanwīn. Every middle noun is genitive AND bare.',
      notes: 'PART 3 (2 min) — website “Longer iḍāfa chains”. Read right to left, then translate left to right: keys ← car ← father.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 4 · dual and plural first nouns (website table) · Stretch', title: 'The nūn drops — again', ar: 'الْمُثَنَّى وَالْجَمْعُ مُضَافَيْنِ', ltr: true,
      cols: [{ label: 'Independent', w: 3.0, size: 24 }, { label: 'Construct', w: 2.6, size: 24 }, { label: 'Example', w: 6.73, size: 22 }],
      rows: [
        { cells: ['طَالِبَانِ', 'طَالِبَا', 'طَالِبَا الْمَدْرَسَةِ'] },
        { cells: ['طَالِبَيْنِ', 'طَالِبَيِ', 'قَابَلْتُ طَالِبَيِ الْمَدْرَسَةِ.'] },
        { cells: ['مُعَلِّمُونَ', 'مُعَلِّمُو', 'مُعَلِّمُو الْمَدْرَسَةِ'] },
        { cells: ['مُعَلِّمِينَ', 'مُعَلِّمِي', 'تَحَدَّثْتُ مَعَ مُعَلِّمِي الْمَدْرَسَةِ.'] },
        { cells: ['طَالِبَاتٌ', 'طَالِبَاتُ', 'طَالِبَاتُ الْمَدْرَسَةِ'] },
      ],
      foot: 'Website: the same nūn-deletion rule as with possessive endings (kitābāhu). Sound feminine plurals have no final nūn, so ṭālibātu l-madrasati stays intact — only the tanwīn goes.',
      notes: 'PART 4 (2 min) — website “Dual and sound masculine plural in iḍāfa”. Connected speech: ṭālibayi l-madrasati (helping kasra).',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 5 · adjective scope (website table) · Stretch', title: 'Which noun is described?', ar: 'لِمَنِ الصِّفَةُ؟', ltr: true,
      cols: [{ label: 'Meaning', w: 3.8 }, { label: 'Arabic', w: 4.4, size: 24 }, { label: 'Evidence', w: 4.13 }],
      rows: [
        { core: true, cells: ['the school’s large door', 'بَابُ الْمَدْرَسَةِ الْكَبِيرُ', 'm. -u → the door'] },
        { core: true, cells: ['the door of the large school', 'بَابُ الْمَدْرَسَةِ الْكَبِيرَةِ', 'f. -i → the school'] },
        { cells: ['the school door is large', 'بَابُ الْمَدْرَسَةِ كَبِيرٌ', 'no al- → predicate'] },
        { cells: ['the new student’s book', 'كِتَابُ الطَّالِبِ الْجَدِيدِ', '-i → the student'] },
        { cells: ['the student’s new book', 'كِتَابُ الطَّالِبِ الْجَدِيدُ', '-u → the book'] },
      ],
      foot: 'Website: nearest noun is not enough. The adjective follows the WHOLE iḍāfa; gender, number, definiteness and case show which noun it describes.',
      notes: 'PART 5 (2 min) — website “Adjective scope” (rows 4–5 from the website Mastery). Recycles GM-CASE-03 part 3.',
    },
  ],
  quick: [
    W(/definiteness/, 0, { prompt: 'Choose “a student’s book”.', feedback: 'Indefinite last noun → indefinite phrase.' }),
    W(/definiteness/, 1, { prompt: 'Choose “the student’s book”.', feedback: 'Bare + definite genitive.' }),
    W(/definiteness/, 2, { prompt: 'Choose “our school’s library”.', feedback: 'The suffix makes the chain definite.' }),
    W(/case across the chain/, 0, { prompt: 'Choose “The school door is open.”', feedback: 'First noun -u (topic); second -i.' }),
  ],
  quickNote: 'website mini-checks: definiteness and case across the chain.',
  ido: {
    title: 'Watch me unpack the chains',
    steps: [
      { head: 'Last noun', ar: 'الْمَدِينَةِ', think: 'Definite: whole chain definite.' },
      { head: 'Middle noun', ar: 'فُنُونِ', think: 'Bare, -i.' },
      { head: 'First noun', ar: 'مَعْرِضَ', think: 'Object: -a, no al-.' },
      { head: 'Scope', ar: 'الْمَوْهُوبِ', think: 'm. -i: the student.' },
    ],
    legend: ['k', 'm'], legendLabels: { k: 'FIRST NOUN', m: 'POSSESSOR' },
    model: 'زُرْنَا {k|مَعْرِضَ} {m|فُنُونِ الْمَدِينَةِ}، ثُمَّ دَخَلْنَا {k|قَاعَةَ} {m|أَعْمَالِ الطُّلَّابِ}. أَعْجَبَتْنِي {k|لَوْحَةُ} {m|طَالِبِ مَدْرَسَتِنَا} الْمَوْهُوبِ. اِشْتَرَيْتُ {k|كِتَابَ} {m|فَنَّانٍ} مَشْهُورٍ.',
    modelEn: 'We visited the city’s art exhibition, then we went into the hall of the students’ work. I liked the painting by our school’s talented student. I bought a book by a famous artist.',
    notes: 'Website reading lines, extended. Website question: why does al-mawhūbi describe the male student, not the school? (masculine, genitive.)',
  },
  models: [
    { ar: 'فَتَحْتُ بَابَ الْمَدْرَسَةِ.', en: 'I opened the school door.', tip: 'Object -a + possessor -i.' },
    { ar: 'هَذَا كِتَابُ طَالِبٍ.', en: 'This is a student’s book.', tip: 'Indefinite chain.' },
    { ar: 'أَيْنَ مَفَاتِيحُ سَيَّارَةِ أَبِي؟', en: 'Where are my father’s car keys?', tip: 'Three-noun chain.' },
    { ar: 'مُعَلِّمُو الْمَدْرَسَةِ لُطَفَاءُ.', en: 'The school’s teachers are kind.', tip: 'Nūn dropped.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · build the iḍāfa (website game)', title: 'Bare first noun, genitive possessor', ar: 'اِبْنِ الْإِضَافَةَ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Meaning', w: 3.6 }, { label: 'Iḍāfa', w: 5.0, size: 24 }, { label: 'Check', w: 3.73 }],
      rows: [
        { core: true, cells: ['the house door', 'بَابُ الْبَيْتِ', 'bare + definite -i'] },
        { core: true, cells: ['a house door', 'بَابُ بَيْتٍ', 'indefinite -in'] },
        { core: true, cells: ['Laylā’s bag', 'حَقِيبَةُ لَيْلَى', 'name as possessor'] },
        { cells: ['our classroom door', 'بَابُ فَصْلِنَا', 'suffix → definite'] },
        { cells: ['I opened the classroom door.', 'فَتَحْتُ بَابَ الْفَصْلِ.', 'object: -a'] },
        { cells: ['the school’s two buses', 'حَافِلَتَا الْمَدْرَسَةِ', 'dual: nūn drops'] },
      ],
      foot: 'Website editing check: first noun, final possessor, chain definiteness, adjective target — one decision at a time.',
      notes: 'WE DO (3 min) — website game items. Cover column 2.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · look at the LAST noun', title: 'Definite or indefinite?', ar: 'مَعْرِفَةٌ أَمْ نَكِرَةٌ؟',
      categories: ['Definite (“the …”)', 'Indefinite (“a …”)'],
      items: [['كِتَابُ الطَّالِبِ', 0], ['بَابُ مَدْرَسَتِنَا', 0], ['حَقِيبَةُ لَيْلَى', 0], ['مُدِيرُ الشَّرِكَةِ', 0], ['كِتَابُ طَالِبٍ', 1], ['بَابُ بَيْتٍ', 1], ['مُدِيرُ شَرِكَةٍ', 1], ['غُرْفَةُ نَوْمٍ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). The first noun looks the same in every card — only the last noun decides.',
    },
  ],
  mistakes: [
    { wrong: 'بَابٌ الْمَدْرَسَةِ', right: 'بَابُ الْمَدْرَسَةِ', why: 'No tanwīn on the first noun (website clinic).' },
    { wrong: 'طَالِبَانِ الْمَدْرَسَةِ', right: 'طَالِبَا الْمَدْرَسَةِ', why: 'The dual drops its nūn (website clinic).' },
    { wrong: 'بَابُ الْمَدْرَسَةِ الْكَبِيرَةُ', right: 'بَابُ الْمَدْرَسَةِ الْكَبِيرَةِ', why: 'An adjective for the school is genitive too (website clinic).' },
  ],
  hints: ['Tanwīn on the first noun?', 'What happens to the dual nūn?', 'Which noun is big?'],
  practice: [
    W(/case across the chain/, 1, { prompt: 'Choose “I opened the school door.”', feedback: 'Object: bāba.' }),
    W(/case across the chain/, 2, { prompt: 'Choose “I stood by the school door.”', feedback: 'After ʿinda: bābi.' }),
    W(/construct number forms/, 0, { prompt: 'Choose “the school’s two students” (as a subject).', feedback: 'Ṭālibā: nūn dropped.' }),
    W(/construct number forms/, 2, { prompt: 'Choose “the school’s teachers” (as a subject).', feedback: 'Muʿallimū: nūn dropped.' }),
  ],
  practiceLabel: 'website mini-checks: case across the chain and construct number forms',
  read: {
    title: 'A tour of our school', label: 'website reading (teacher-written tour)',
    text: 'مَرْحَبًا بِكُمْ فِي مَدْرَسَتِنَا! هَذَا مَكْتَبُ الْمُدِيرِ، وَبِجَانِبِهِ غُرْفَةُ الْمُعَلِّمِينَ. فِي الطَّابِقِ الْأَوَّلِ مَكْتَبَةُ الْمَدْرَسَةِ الْكَبِيرَةُ، وَفِيهَا كُتُبُ قِصَصٍ كَثِيرَةٌ. أَمَامَ الْمَكْتَبَةِ مُخْتَبَرُ الْعُلُومِ، وَمُعَلِّمُو الْعُلُومِ لَطِيفُونَ جِدًّا. خَلْفَ الْمَبْنَى مَلْعَبُ كُرَةِ الْقَدَمِ، وَبِجَانِبِهِ مَوْقِفُ حَافِلَاتِ الْمَدْرَسَةِ. فِي نِهَايَةِ الْجَوْلَةِ سَنَزُورُ مَعْرِضَ رُسُومِ الطُّلَّابِ.',
    glossary: [['مُخْتَبَرُ', 'laboratory'], ['مَلْعَبُ', 'pitch / playing field'], ['مَوْقِفُ', 'stop / car park'], ['الْجَوْلَةِ', 'the tour'], ['رُسُومِ', 'drawings']],
    task: 'Website: bracket each iḍāfa chain and underline every possessor. Explain which noun al-kabīratu describes.',
    questions: [
      q('What is next to the head teacher’s office?', ['the teachers’ room', 'the library', 'the science lab'], 'Ghurfatu l-muʿallimīna.'),
      q('In maktabatu l-madrasati l-kabīratu, what is big?', ['the library', 'the school', 'the floor'], '-u: it matches maktabatu.'),
      q('Which first noun has lost its nūn?', ['مُعَلِّمُو الْعُلُومِ', 'كُتُبُ قِصَصٍ', 'مَلْعَبُ كُرَةِ الْقَدَمِ'], 'Muʿallimūna → muʿallimū.'),
      q('What will visitors see at the end?', ['the students’ art exhibition', 'the football pitch', 'the bus stop'], 'Maʿriḍa rusūmi ṭ-ṭullābi.'),
    ],
    qNote: 'Teacher-written tour for the website reading task; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: a 60-second tour', source: 'website speaking task',
    prompts: [
      { route: 'core', ar: 'مَا الْأَمَاكِنُ فِي مَدْرَسَتِكَ؟' },
      { route: 'develop', ar: 'صِفْ بَيْتَكَ: مَا الْغُرَفُ؟' },
      { route: 'stretch', ar: 'خُذْنَا فِي جَوْلَةٍ فِي مَدِينَتِكَ.' },
    ],
    stems: [
      { route: 'core', ar: 'فِي مَدْرَسَتِي مَكْتَبُ ______ وَغُرْفَةُ ______ .' },
      { route: 'develop', ar: 'هَذِهِ غُرْفَةُ ______ ، وَتِلْكَ غُرْفَةُ ______ .' },
      { route: 'stretch', ar: 'هُنَا مَتْحَفُ ______ ، وَهُنَاكَ سُوقُ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'أَيْنَ مَكْتَبُ الْمُدِيرِ؟', en: 'Where is the head teacher’s office?' },
      { who: 'B', ar: 'مَكْتَبُ الْمُدِيرِ بِجَانِبِ غُرْفَةِ الْمُعَلِّمِينَ، أَمَامَ بَابِ الْمَدْرَسَةِ الرَّئِيسِيِّ.', en: 'The head teacher’s office is next to the teachers’ room, opposite the school’s main door.' },
    ],
    notes: 'Website: give a 60-second tour with eight iḍāfa expressions, including one chain of three nouns.',
  },
  write: {
    siteTask: 'Write 110–130 Arabic words describing a school, home, workplace, town or fictional venue.',
    core: { amount: '5 sentences', task: 'Your school: five places, each an iḍāfa.', how: 'maktabu l-mudīri · ghurfatu l-muʿallimīna.' },
    develop: { amount: '8 sentences', task: 'Add two indefinite iḍāfas and one three-noun chain.', how: 'kitābu ṭālibin · bābu faṣli l-madrasati.' },
    stretch: { amount: '110–130 words', task: 'Website place description with ten iḍāfas.', how: 'Draw a chain diagram first.' },
  },
  frames: {
    core: [
      { en: 'This is the school’s …', ar: 'هَذَا ______ الْمَدْرَسَةِ.' },
      { en: 'The teachers’ room is …', ar: 'غُرْفَةُ الْمُعَلِّمِينَ ______ .' },
      { en: 'I study in the … library', ar: 'أَدْرُسُ فِي مَكْتَبَةِ ______ .' },
      { en: 'My father’s car is …', ar: 'سَيَّارَةُ أَبِي ______ .' },
    ],
    develop: [
      { en: 'I visited the … museum', ar: 'زُرْتُ مَتْحَفَ ______ .' },
      { en: 'The school’s teachers are …', ar: 'مُعَلِّمُو الْمَدْرَسَةِ ______ .' },
      { en: 'This is my brother’s friend’s …', ar: 'هَذَا ______ صَدِيقِ أَخِي.' },
      { en: 'In front of the school gate is …', ar: 'أَمَامَ بَابِ الْمَدْرَسَةِ ______ .' },
    ],
    bank: ['بَابُ', 'مَكْتَبُ', 'غُرْفَةُ', 'مَكْتَبَةُ', 'مُدِيرُ', 'الْمَدْرَسَةِ', 'الْمُعَلِّمِينَ', 'الْمَدِينَةِ', 'الطُّلَّابِ', 'أَبِي', 'كَبِيرٌ', 'جَمِيلَةٌ', 'قَرِيبٌ'],
  },
  stretchTask: {
    task: 'Website place description (110–130 words): a school, home, workplace, town or fictional venue.',
    checklist: ['At least ten iḍāfa constructions.', 'Two indefinite and four definite.', 'Two with a proper name or a suffix.', 'One dual or -ūna construct (nūn dropped).', 'One adjective-scope contrast.'],
    phrases: [['فِي وَسَطِ الْمَدِينَةِ', 'in the city centre'], ['بِجَانِبِ', 'next to'], ['أَمَامَ', 'opposite / in front of'], ['قِسْمُ', 'department'], ['مَكْتَبُ الِاسْتِقْبَالِ', 'reception desk'], ['إِدَارَةُ', 'management']],
  },
  model: {
    text: 'أَعْمَلُ فِي الصَّيْفِ مُتَطَوِّعَةً فِي مُسْتَشْفَى الْأَطْفَالِ فِي مَدِينَتِنَا. يَقَعُ الْمُسْتَشْفَى فِي وَسَطِ الْمَدِينَةِ، بِجَانِبِ حَدِيقَةِ الْحَيَوَانَاتِ. عِنْدَ بَابِ الْمُسْتَشْفَى الرَّئِيسِيِّ مَكْتَبُ الِاسْتِقْبَالِ، وَمُوَظَّفُو الِاسْتِقْبَالِ لُطَفَاءُ جِدًّا. فِي الطَّابِقِ الثَّانِي غُرْفَةُ أَلْعَابِ الْأَطْفَالِ الْمُلَوَّنَةُ، وَهِيَ مَكَانِي الْمُفَضَّلُ. أَقْرَأُ قِصَصَ الْأَنْبِيَاءِ لِلْأَطْفَالِ، وَأُسَاعِدُ مُمَرِّضَتَيِ الْقِسْمِ. مُدِيرُ قِسْمِ التَّطَوُّعِ رَجُلٌ نَشِيطٌ، وَمَكْتَبُهُ قُرْبَ مَطْعَمِ الْمُوَظَّفِينَ. فِي نِهَايَةِ كُلِّ أُسْبُوعٍ نَكْتُبُ تَقْرِيرَ الْعَمَلِ، وَنُرْسِلُهُ إِلَى إِدَارَةِ الْمُسْتَشْفَى. أَتَمَنَّى أَنْ أُصْبِحَ طَبِيبَةَ أَطْفَالٍ فِي الْمُسْتَقْبَلِ.',
    en: 'In the summer I volunteer at the children’s hospital in our city. The hospital is in the city centre, next to the zoo. At the hospital’s main door is the reception desk, and the reception staff are very kind. On the second floor is the colourful children’s playroom, and it is my favourite place. I read stories of the prophets to the children, and I help the ward’s two nurses. The head of the volunteering department is an energetic man, and his office is near the staff restaurant. At the end of every week we write the work report and send it to the hospital management. I hope to become a children’s doctor in the future.',
    find: ['definite iḍāfa', 'indefinite iḍāfa', 'construct dual / plural (nūn dropped)', 'three-noun chain'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'My first nouns have no al- and no tanwīn.' },
    { route: 'core', text: 'My possessors end in -i / -in.' },
    { route: 'develop', text: 'The first noun takes its sentence case (-u / -a / -i).' },
    { route: 'develop', text: 'I wrote at least one three-noun chain.' },
    { route: 'stretch', text: 'Duals and -ūna plurals lost their nūn.' },
  ],
  exit: [
    W(/Iḍāfa Mastery/, 4, { prompt: 'Choose “I visited our school library.”', feedback: 'Object: maktabata.' }),
    W(/Iḍāfa Mastery/, 7, { prompt: 'Which phrase means “the new student’s book”?', feedback: '-i: describes the student.' }),
    W(/Iḍāfa Mastery/, 8, { prompt: 'Which phrase means “the student’s new book”?', feedback: '-u: describes the book.' }),
  ],
  mastery: false,
  prep: {
    words: [['عِنْدِي', 'I have (with me)', '—'], ['عِنْدَكَ', 'you (m.) have', '—'], ['لِي', 'I have / it is mine', '—'], ['لَهُ', 'he has / it is his', '—'], ['لَيْسَ عِنْدِي', 'I do not have', '—']],
    questionEn: 'Arabic has no verb “to have”. ʿindī kitābun = “with me is a book” = I have a book. How would you say “I have a brother”?',
    questionAr: 'عِنْدِي ______ .',
    homework: {
      core: 'Write eight two-noun iḍāfas for places in your home or school.',
      develop: 'Write four sentences: the same iḍāfa as subject, object, after fī, after ʿinda.',
      stretch: 'Website place description (110–130 words).',
    },
    wordsSource: 'The five words prepare GM-POS-03 (website: possession with ʿinda and li-).',
  },
  remember: 'Remember: first noun bare (no al-, no tanwīn) + possessor in -i · the LAST noun decides definite or indefinite · the first noun takes its sentence case · chains: build from the end · duals and -ūna plurals drop the nūn · the adjective’s form shows which noun it describes.',
});

module.exports = { meta, slides };
