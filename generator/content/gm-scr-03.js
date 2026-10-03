'use strict';
/* GM-SCR-03 · Vowels and Phonetic Marks — website: Mastery & Revision › Grammar › Arabic Script › Script Mastery 03 (three short vowels; long
 * vowels with ا و ي; tanwīn; sukūn; shadda; madda آ; hamza and its chairs; hamzat al-qaṭʿ vs hamzat al-waṣl; mark hunt, short/long listening,
 * controlled contrast speaking, fully vowelled writing; common mistakes). Quizzes are teacher-written on the website content (the website checks
 * this chapter through games). GM-SCR-03 = website Script Mastery 03. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-SCR-03', fileTitle: 'Vowels_and_Phonetic_Marks', title: 'Vowels and Phonetic Marks', arabic: 'الْحَرَكَاتُ وَالْعَلَامَاتُ الصَّوْتِيَّةُ',
  focus: 'Read every mark on a fully vowelled word: the three short vowels (ـَ ـِ ـُ), long vowels (بَا · بِي · بُو), tanwīn (ـٌ ـً ـٍ), sukūn (ـْ), shadda (ـّ), madda (آ) and hamza on its chairs (أ إ ؤ ئ ء).',
  icon: 'FaBookOpenReader',
});

const slides = G.gmLesson({
  code: 'GM-SCR-03', site: 'grammar__01-arabic-script__script-mastery-03-vowels-phonetic-marks',
  source: 'The website chapter “Script Mastery 03”: short vowels, long vowels, tanwīn, sukūn, shadda, madda, hamza chairs and the qaṭʿ / waṣl distinction, with the mark hunt, short/long listening, controlled-contrast speaking, fully vowelled writing and the common-mistakes table. The website checks this chapter through eight games, so the quizzes are teacher-written on the website content.',
  support: `• Core: the three short vowels, long vowels, sukūn and shadda. Develop: tanwīn and vowel length; read fully vowelled words fluently. Stretch: madda, hamza chairs, hamzat al-qaṭʿ vs al-waṣl.
• QUR’AN BRIDGE: students know these marks from muṣḥaf reading (zabar · zer · pesh in Urdu = fatḥa · kasra · ḍamma; jazm = sukūn; tashdīd = shadda; do zabar = tanwīn fatḥ). Use their Urdu names as the hook, then teach the Arabic terms.
• Length matters: a long vowel is about twice as long as a short one — practise the contrast aloud every time.`,
  teach: 'Short vowels, long vowels, tanwīn, sukūn, shadda, madda and hamza.',
  wedo: 'Sort short and long, repair missing marks, hunt marks in words.',
  next: { nextCode: 'GM-SCR-04', nextTitle: 'Arabic Figures', nextAr: 'الْأَرْقَامُ الْعَرَبِيَّةُ' },
  doNow: {
    questions: [
      q('Which mark is a fatḥa?', ['ـَ', 'ـِ', 'ـُ'], 'Prepared at home: fatḥa = a short a.'),
      q('Which mark is a ḍamma?', ['ـُ', 'ـَ', 'ـْ'], 'Prepared at home: ḍamma = a short u.'),
      q('What does tanwīn add to the end of a word?', ['an n sound', 'a long ā', 'nothing'], 'Prepared at home: -un · -an · -in.'),
      q('Which word begins with a SUN letter?', ['النُّورُ', 'الْبَابُ', 'الْقَلَمُ'], 'GM-SCR-02: ن is a sun letter.'),
      q('Where is the break in وَرَقَة?', ['after و', 'after ر', 'no break'], 'GM-SCR-01: و never joins forward.'),
    ],
    keyIdea: { text: 'Every mark tells you a sound — or tells you there is NO vowel (sukūn) or a DOUBLE consonant (shadda).', ar: 'بَ · بِ · بُ · بْ · بّ' },
    retrieves: 'Questions 1–3 test the words prepared at home; 4–5 retrieve GM-SCR-02 and GM-SCR-01.',
  },
  objectives: ['Read the three short vowels and the three long vowels.', 'Read tanwīn, sukūn and shadda accurately.', 'Recognise madda and the hamza chairs.', 'Distinguish hamzat al-qaṭʿ from hamzat al-waṣl.'],
  routes: {
    core: ['I can read بَ · بِ · بُ and بَا · بِي · بُو.', 'I can spot a sukūn and a shadda.'],
    develop: ['I can read tanwīn: كِتَابٌ · كِتَابًا · كِتَابٍ.', 'I can keep long vowels long and short vowels short.'],
    stretch: ['I can explain where hamza sits (أ · إ · ؤ · ئ · ء).', 'I can tell hamzat al-qaṭʿ from hamzat al-waṣl.'],
  },
  terms: {
    flexRest: true,
    items: [
      { ar: 'فَتْحَةٌ', en: 'fatḥa — short a (zabar)', note: 'كَتَبَ' },
      { ar: 'كَسْرَةٌ', en: 'kasra — short i (zer)', note: 'بِنْتٌ' },
      { ar: 'ضَمَّةٌ', en: 'ḍamma — short u (pesh)', note: 'كُتُبٌ' },
      { ar: 'سُكُونٌ', en: 'sukūn — no vowel (jazm)', note: 'مَكْتَبٌ' },
      { ar: 'شَدَّةٌ', en: 'shadda — doubled letter (tashdīd)', note: 'مُعَلِّمٌ' },
      { ar: 'تَنْوِينٌ', en: 'tanwīn — -un · -an · -in', note: 'كِتَابٌ' },
      { ar: 'مَدٌّ', en: 'long vowel / madda', note: 'e.g. قُرْآنٌ' },
      { ar: 'هَمْزَةٌ', en: 'hamza (glottal stop)', note: 'أ إ ؤ ئ ء' },
    ],
    notes: 'Bridge each Arabic term to the Urdu muṣḥaf term students already know (zabar, zer, pesh, jazm, tashdīd).',
  },
  explain: [
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 1 · short and long vowels (website sections)', title: 'Short a, i, u — and their long partners', ar: 'الْحَرَكَاتُ الْقَصِيرَةُ وَالطَّوِيلَةُ',
      points: [
        'Three short vowels sit above or below a letter: fatḥa ـَ (a) · kasra ـِ (i) · ḍamma ـُ (u).',
        'A short vowel is brief. Do not lengthen it unless a long-vowel letter follows (website duration rule).',
        'Long ā = fatḥa + alif · long ī = kasra + yāʾ · long ū = ḍamma + wāw.',
        'Say a long vowel about twice as long as a short one: بَ (ba) — بَا (bā).',
        'Wāw and yāʾ can also be consonants (وَلَدٌ · يَوْمٌ): the vowels around them decide.',
      ],
      examples: [
        { ar: 'كَتَبَ · بِنْتٌ · كُتُبٌ', en: 'kataba · bintun · kutubun', note: 'short a · i · u' },
        { ar: 'بَابٌ', en: 'bābun — door', note: 'fatḥa + alif = ā' },
        { ar: 'كَبِيرٌ', en: 'kabīrun — big', note: 'kasra + yāʾ = ī' },
        { ar: 'نُورٌ', en: 'nūrun — light', note: 'ḍamma + wāw = ū' },
      ],
      callout: { text: 'Website table: fatḥa + alif = long ā (bābun) · kasra + yāʾ = long ī (kabīrun) · ḍamma + wāw = long ū (nūrun).' },
      notes: 'PART 1 (3 min). Choral contrast pairs (website speaking task): بَ / بَا · بِ / بِي · بُ / بُو — hold the long vowel for two beats.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · tanwīn, sukūn and shadda (website sections)', title: 'Three more marks', ar: 'التَّنْوِينُ وَالسُّكُونُ وَالشَّدَّةُ', ltr: true,
      cols: [{ label: 'Mark', w: 2.6 }, { label: 'Example', w: 3.6, size: 28 }, { label: 'What it tells you (website)', w: 6.13 }],
      rows: [
        { core: true, cells: ['tanwīn ḍamm (-un)', 'كِتَابٌ', 'Adds an n sound; usually an indefinite noun: a book.'] },
        { cells: ['tanwīn fatḥ (-an)', 'كِتَابًا', 'Written with an extra alif in most words.'] },
        { cells: ['tanwīn kasr (-in)', 'كِتَابٍ', 'e.g. after a preposition: فِي بَيْتٍ.'] },
        { core: true, cells: ['sukūn', 'مَكْتَبٌ', 'كْ has no vowel: do not add an extra vowel (makNtab ✗).'] },
        { core: true, cells: ['shadda', 'مُعَلِّمٌ', 'The lām is doubled: two consonants, the first without a vowel.'] },
      ],
      foot: 'Hidden structure (website): a shadda = two consonants — the first vowelless, the second carrying the written vowel.',
      notes: 'PART 2 (3 min). Website pronunciation rule for sukūn: “do not insert an extra vowel after a letter carrying sukūn” — يَكْتُبُ moves directly from كْ to تُ.',
    },
    {
      type: 'ruleCards', min: 3, eyebrow: 'Grammar · part 3 · madda and hamza (website sections) · Develop / Stretch', title: 'Madda, hamza and its chairs', ar: 'الْمَدَّةُ وَالْهَمْزَةُ',
      cards: [
        { chip: 'MADDA', color: '1E6B52', head: 'آ', big: 'قُرْآنٌ', en: 'hamza + long ā — only ever written on alif', clue: 'Also: آمَنَ (he believed).' },
        { chip: 'HAMZA CHAIRS', color: '1D5FBF', head: 'أ · إ · ؤ · ئ · ء', big: 'أَكَلَ · إِسْلَامٌ', en: 'a with fatḥa/ḍamma above alif · with kasra below alif', clue: 'On wāw: سُؤَالٌ · on yāʾ: بِئْرٌ · alone: شَيْءٌ.' },
        { chip: 'QAṬʿ OR WAṢL', color: '6B4C9A', head: 'أَحْمَدُ · اِسْمٌ', big: 'بِسْمِ اللهِ', en: 'qaṭʿ is always said; waṣl drops when joined', clue: 'بِسْمِ: the alif of اِسْم is not heard.' },
      ],
      error: { text: 'Website mistake: an initial kasra puts hamza BELOW the alif.', pairs: [['إِسْلَامٌ', 'أِسْلَامٌ']] },
      notes: 'PART 3 (3 min). Website precision notes: madda is written only on alif (آ), not over every long vowel. Hamzat al-qaṭʿ (أَحْمَدُ, إِنَّ) is always pronounced; hamzat al-waṣl (اِسْمٌ, الْكِتَابُ) is pronounced only at the start of speech — link to GM-ART-01.',
    },
  ],
  quick: [
    q('Which word has a LONG ī?', ['كَبِيرٌ', 'بِنْتٌ', 'كَتَبَ'], 'kasra + yāʾ.'),
    q('What does the sukūn in مَكْتَبٌ tell you?', ['كْ has no vowel', 'كّ is doubled', 'ك is long'], 'Move straight on to تَ.'),
    q('Which word has a shadda?', ['مُعَلِّمٌ', 'مَكْتَبٌ', 'نُورٌ'], 'The lām is doubled.'),
    q('Which ending is tanwīn fatḥ (-an)?', ['كِتَابًا', 'كِتَابٌ', 'كِتَابٍ'], 'Double fatḥa, with an alif.'),
  ],
  quickNote: 'teacher-written on the website sections.',
  ido: {
    title: 'Watch me read every mark',
    steps: [
      { head: 'Letters', ar: 'م ع ل م', think: 'Read the skeleton first.' },
      { head: 'Short vowels', ar: 'مُ عَ لِ', think: 'mu · ʿa · li' },
      { head: 'Shadda', ar: 'مُعَلِّـ', think: 'Double the lām: mu-ʿal-li' },
      { head: 'Tanwīn', ar: 'مُعَلِّمٌ', think: 'End with -un: muʿallimun.' },
    ],
    legend: [],
    model: 'مُعَلِّمٌ · مَكْتَبٌ · كَبِيرٌ · نُورٌ · قُرْآنٌ · سُؤَالٌ',
    modelEn: 'teacher · desk/office · big · light · Qurʾān · question — the website mark hunt: one shadda, two long vowels, one sukūn, one hamza chair.',
    notes: 'Think aloud through مُعَلِّمٌ, then let the class “read the marks” of مَكْتَبٌ with you (sukūn on ك).',
  },
  models: [
    { ar: 'بَ / بَا · بِ / بِي · بُ / بُو', en: 'ba / bā · bi / bī · bu / bū', tip: 'Website controlled contrast: long = two beats.' },
    { ar: 'يَكْتُبُ', en: 'yaktubu — he writes', tip: 'kt: no vowel between ك and ت.' },
    { ar: 'سُؤَالٌ · بِئْرٌ · شَيْءٌ', en: 'a question · a well · a thing', tip: 'hamza on wāw · on yāʾ · alone' },
    { ar: 'آمَنَ', en: 'āmana — he believed', tip: 'madda: hamza + long ā' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · website game 3 “Short or Long?”', title: 'Short vowel or long vowel?', ar: 'صَنِّفْ',
      categories: ['Short vowel only', 'Has a long vowel'],
      items: [['كَتَبَ', 0], ['بَابٌ', 1], ['بِنْتٌ', 0], ['كَبِيرٌ', 1], ['كُتُبٌ', 0], ['نُورٌ', 1], ['قَلَمٌ', 0], ['سُوقٌ', 1], ['وَلَدٌ', 0], ['كِتَابٌ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Read each word aloud first — exaggerate the long vowels. Note وَلَدٌ: the wāw is a consonant here, not a long vowel (website warning).',
    },
  ],
  mistakes: [
    { wrong: 'مَكِتَبٌ', right: 'مَكْتَبٌ', why: 'كْ carries no vowel (sukūn).' },
    { wrong: 'مُعَلِمٌ', right: 'مُعَلِّمٌ', why: 'The lām is doubled: it needs a shadda.' },
    { wrong: 'أِسْلَامٌ', right: 'إِسْلَامٌ', why: 'An initial kasra puts hamza below the alif.' },
  ],
  hints: ['Which letter has no vowel?', 'Is a letter doubled?', 'Where does hamza sit?'],
  practice: [
    q('Which word begins with madda?', ['آمَنَ', 'أَكَلَ', 'إِسْلَامٌ'], 'آ = hamza + long ā.'),
    q('In سُؤَالٌ, what carries the hamza?', ['wāw', 'yāʾ', 'alif'], 'Hamza on a wāw chair.'),
    q('Which is hamzat al-waṣl?', ['the alif of اِسْمٌ', 'the hamza of أَحْمَدُ', 'the hamza of إِنَّ'], 'It drops in بِسْمِ اللهِ.'),
    q('How many consonants does a letter with shadda stand for?', ['two', 'one', 'three'], 'The first is vowelless, the second has the vowel.'),
  ],
  practiceLabel: 'teacher-written on website games 4, 6 and 7',
  read: {
    title: 'Mark hunt', label: 'website reading task “mark hunt”', size: 40,
    text: 'مُعَلِّمٌ · مَكْتَبٌ · كَبِيرٌ · نُورٌ · قُرْآنٌ · سُؤَالٌ',
    glossary: [['مُعَلِّمٌ', 'a teacher'], ['مَكْتَبٌ', 'an office / desk'], ['كَبِيرٌ', 'big'], ['نُورٌ', 'light'], ['قُرْآنٌ', 'Qurʾān'], ['سُؤَالٌ', 'a question']],
    task: 'Website mark hunt: find one shadda, two long vowels, one sukūn and one hamza chair.',
    questions: [
      q('Which word has the shadda?', ['مُعَلِّمٌ', 'نُورٌ', 'كَبِيرٌ'], 'لّ is doubled.'),
      q('Which TWO words have a long vowel?', ['كَبِيرٌ and نُورٌ', 'مُعَلِّمٌ and مَكْتَبٌ', 'مَكْتَبٌ and سُؤَالٌ'], 'ī in كَبِيرٌ · ū in نُورٌ (قُرْآنٌ and سُؤَالٌ also have ā).'),
      q('Which word has a sukūn on كْ?', ['مَكْتَبٌ', 'كَبِيرٌ', 'مُعَلِّمٌ'], 'mak-tab.'),
      q('Which word has a hamza on a chair?', ['سُؤَالٌ', 'نُورٌ', 'مَكْتَبٌ'], 'ؤ: hamza on wāw.'),
    ],
    qNote: 'Teacher-written on the website mark-hunt words.',
    detective: '1. Look above and below each letter.\n2. Name the mark.\n3. Say the word aloud.',
  },
  speak: {
    title: 'Speaking: controlled contrast', source: 'website speaking task “controlled contrast” and listening “short or long?”',
    prompts: [
      { route: 'core', ar: 'اِقْرَأْ: بَ / بَا · بِ / بِي · بُ / بُو' },
      { route: 'develop', ar: 'اِقْرَأْ: كِتَابٌ · كِتَابًا · كِتَابٍ' },
      { route: 'stretch', ar: 'اِقْرَأْ: قُرْآنٌ · سُؤَالٌ · بِسْمِ اللهِ' },
    ],
    stems: [
      { route: 'core', ar: 'فِي كَلِمَةِ ______ فَتْحَةٌ.' },
      { route: 'develop', ar: 'فِي كَلِمَةِ ______ شَدَّةٌ.' },
      { route: 'stretch', ar: 'فِي كَلِمَةِ ______ هَمْزَةٌ عَلَى ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَا الْعَلَامَةُ عَلَى اللَّامِ فِي «مُعَلِّمٌ»؟', en: 'What mark is on the lām in “teacher”?' },
      { who: 'B', ar: 'عَلَيْهَا شَدَّةٌ وَكَسْرَةٌ: مُعَلِّمٌ.', en: 'It has a shadda and a kasra: muʿallimun.' },
    ],
    notes: 'Website listening (do it first, slide hidden): say each pair twice — بَ / بَا · بِ / بِي · بُ / بُو · كَ / كَا · سِ / سِي · نُ / نُو. Students write “short, long” for each. Then the speaking contrast: keep the long vowel twice as long.',
  },
  write: {
    siteTask: 'Fully vowelled practice: write six short words and add every necessary mark, including a long vowel, sukūn, shadda, tanwīn, madda and hamza.',
    core: { amount: '6 words', task: 'Copy six words from the lesson with ALL their marks.', how: 'Letters first, then vowels, then sukūn / shadda / tanwīn.' },
    develop: { amount: '6 words', task: 'Write six words: two long vowels, one sukūn, one shadda, two with tanwīn.', how: 'Read each one aloud after you write it.' },
    stretch: { amount: '6 words + labels', task: 'Website task: a long vowel, sukūn, shadda, tanwīn, madda and hamza.', how: 'Label each mark with its Arabic name.' },
  },
  frames: {
    core: [
      { en: 'Copy: a teacher', ar: 'مُعَلِّمٌ · ______' },
      { en: 'Copy: a door', ar: 'بَابٌ · ______' },
      { en: 'Copy: an office', ar: 'مَكْتَبٌ · ______' },
      { en: 'Copy: light', ar: 'نُورٌ · ______' },
    ],
    develop: [
      { en: 'A word with a long ā', ar: 'بَابٌ · ______' },
      { en: 'A word with a sukūn', ar: 'مَكْتَبٌ · ______' },
      { en: 'A word with a shadda', ar: 'مُعَلِّمٌ · ______' },
      { en: 'A word with tanwīn', ar: 'كِتَابٌ · ______' },
    ],
    bank: ['بَابٌ', 'كَبِيرٌ', 'نُورٌ', 'مَكْتَبٌ', 'يَكْتُبُ', 'مُعَلِّمٌ', 'كِتَابٌ', 'كِتَابًا', 'قُرْآنٌ', 'آمَنَ', 'سُؤَالٌ', 'إِسْلَامٌ'],
  },
  stretchTask: {
    task: 'Website fully vowelled practice: write six words and add every necessary mark.',
    checklist: ['A long vowel (ā, ī or ū).', 'A sukūn.', 'A shadda.', 'Tanwīn.', 'A madda (آ).', 'A hamza on the correct chair.'],
    phrases: [['قُرْآنٌ', 'madda'], ['سُؤَالٌ', 'hamza on wāw'], ['بِئْرٌ', 'hamza on yāʾ'], ['شَيْءٌ', 'hamza alone'], ['إِسْلَامٌ', 'hamza below alif'], ['مُعَلِّمٌ', 'shadda']],
    bankHead: 'WORD BANK — FROM THE WEBSITE EXAMPLES',
  },
  model: {
    text: 'بَابٌ · مَكْتَبٌ · مُعَلِّمٌ · كِتَابًا · قُرْآنٌ · سُؤَالٌ',
    en: 'door (long ā) · office (sukūn on ك) · teacher (shadda on ل) · a book (tanwīn -an) · Qurʾān (madda) · question (hamza on wāw)',
    find: ['long vowel', 'sukūn + shadda', 'tanwīn', 'madda + hamza'],
    source: 'teacher model for the website fully vowelled task',
  },
  selfCheck: [
    { route: 'core', text: 'I can read and write the three short vowels.' },
    { route: 'core', text: 'I can build ā, ī and ū.' },
    { route: 'develop', text: 'I never add a vowel after a sukūn.' },
    { route: 'develop', text: 'I read tanwīn and shadda correctly.' },
    { route: 'stretch', text: 'I put hamza on the right chair.' },
  ],
  exit: [
    q('Which word has a long ū?', ['نُورٌ', 'كُتُبٌ', 'قُمْ'], 'ḍamma + wāw.'),
    q('Which mark means “no vowel”?', ['ـْ', 'ـّ', 'ـً'], 'sukūn.'),
    q('Which is spelled correctly?', ['إِسْلَامٌ', 'أِسْلَامٌ', 'اسْلَامٌ'], 'kasra → hamza below alif.'),
  ],
  masteryQs: [
    q('Which word has tanwīn kasr?', ['بَيْتٍ', 'بَيْتٌ', 'بَيْتًا'], 'Two kasras: -in.'),
    q('Where is madda written?', ['only on alif', 'on every long vowel', 'on wāw'], 'آ only.'),
    q('Which is hamzat al-qaṭʿ?', ['أَحْمَدُ', 'اِسْمٌ', 'الْكِتَابُ'], 'Always pronounced.'),
    q('Which word has NO long vowel?', ['قَلَمٌ', 'سُوقٌ', 'كَبِيرٌ'], 'qa-la-mun: short vowels only.'),
    q('In وَلَدٌ, is the wāw a long vowel?', ['no — it is a consonant', 'yes — long ū', 'yes — long ā'], 'It carries its own fatḥa.'),
    q('Which pair shows short then long?', ['سِ / سِي', 'سِي / سِ', 'سَ / سُ'], 'kasra, then kasra + yāʾ.'),
  ],
  prep: {
    words: [['رَقْمٌ', 'a number / figure', 'pl. أَرْقَامٌ'], ['صِفْرٌ', 'zero', '—'], ['خَمْسَةٌ', 'five', '—'], ['السَّاعَةُ', 'the time / o’clock', '—'], ['السِّعْرُ', 'the price', '—']],
    questionEn: 'Find Arabic figures on something at home (a clock, a book, a receipt). Copy three.',
    questionAr: 'رَأَيْتُ الرَّقْمَ ______ عَلَى ______ .',
    homework: {
      core: 'Learn the short and long vowels; copy the six mark-hunt words with all marks.',
      develop: 'Write six words with a long vowel, sukūn, shadda and tanwīn.',
      stretch: 'Complete the website fully vowelled task and play the 60-second Phonetic Marks Challenge.',
    },
    wordsSource: 'The five words prepare GM-SCR-04 (website Script Mastery 04: Arabic figures).',
  },
  remember: 'Remember: short vowels are short · long = vowel + ا / ي / و · sukūn = no vowel · shadda = double · hamza sits on its chair.',
});

module.exports = { meta, slides };
