'use strict';
/* Practice Room · F1-L12 · Review — the whole of F1 (alphabet, forms, marks, numerals, dictation, signs, reading aloud). Sounds + script in one lesson. Teacher-made. */
const { f1, room } = require('./pr-f1-common');

module.exports = room(f1({
  key: 'f1-l12',
  arShort: 'مُرَاجَعَةُ الوَحْدَةِ',
  grammar: 'F1 review: the 28 letters and their families; four positions and the six breakers; the marks (fatḥa · ḍamma · kasra · sukūn · shadda · tanwīn · madda · hamza); long vowels; sun and moon letters; numerals ٠–٢٠ in the right order; R-E-A-D for vowelled words and SCOPE for signs; fair dictation',
  focus: 'Students run their own review of the whole F1 unit: recall twelve key F1 items, act a review mini-dialogue, do mixed point-and-say cards (one per assessment part), read words, numbers and a sign on a reading card, race through a mixed reading list, then build words, spot slips across the unit, and copy, take dictation and read aloud — and choose one target for F2.',
  bigAr: false,
  words1: 'F1 key items (1)', words2: 'F1 key items (2)',
  wordsAr: 'مُرَاجَعَةٌ',
  words: [
    ['ب ت ث', 'one shape, different dots', 'a letter family', 'alphabet'], ['ا د ذ ر ز و', 'the six breakers', 'never join to the left', 'joins'], ['ـعـ', 'ʿayn in the middle', 'a closed loop', 'forms'], ['ـَ ـُ ـِ ـْ', 'fatḥa · ḍamma · kasra · sukūn', 'a · u · i · no vowel', 'marks'],
    ['ـّ ـٌ آ ء', 'shadda · tanwīn · madda · hamza', 'double · -n · ʾā · catch', 'marks'], ['بَا بُو بِي', 'long ā · ū · ī', 'with ا و ي', 'long vowels'], ['الشَّمْسُ', 'the sun — a sun letter', 'ash-shams', 'al-', 'القَمَرُ', 'moon letter'], ['١٥', 'fifteen', 'same order as English', 'numerals', 'خَمْسَةَ عَشَرَ', 'word'],
    ['مَدْرَسَةٌ', 'school', 'mad-ra-sa', 'reading'], ['مُعَلِّمٌ', 'teacher', 'mu-ʿal-lim', 'reading'], ['سُؤَالٌ', 'question', 'su-ʾāl', 'reading'], ['مخرج', 'exit (a sign)', 'no marks — SCOPE', 'signs', 'مَخْرَج', 'with marks'],
  ],
  warm: { head: 'Review ping-pong', text: 'The Leader says a topic (letter family · breakers · marks · numbers · signs). The Speaker finds the card on the next two slides and explains it in English, then reads the Arabic. The Coach checks.', steps: ['Leader: say 4 topics.', 'Speaker finds each card, reads it and explains it.', 'Coach checks.', 'Swap roles.'], routes: { core: 'Find the card and read it.', develop: 'Explain it in one English sentence.', stretch: 'Give a new example of your own.' } },
  dialogue: {
    title: 'What did we learn?', ar: 'مَاذَا تَعَلَّمْنَا؟',
    lines: [
      ['A', 'كَمْ حَرْفًا فِي العَرَبِيَّةِ؟', 'How many letters are there in Arabic?'],
      ['B', 'ثَمَانِيَةٌ وَعِشْرُونَ حَرْفًا.', 'Twenty-eight letters.'],
      ['A', 'مَا هٰذِهِ؟ (ـّ)', 'What is this? (points to shadda)'],
      ['B', 'شَدَّةٌ — تُضَاعِفُ الحَرْفَ.', 'Shadda — it doubles the letter.'],
      ['A', 'اقْرَأْ: ٢٠.', 'Read: 20.'],
      ['B', 'عِشْرُونَ!', 'Twenty!'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: A asks about ANY card on the word slides; B answers in Arabic or English.',
  },
  qTitle: 'Mixed review cards — one from each part of F1',
  qFoot: 'Each Speaker does every card. Core: read it or say it. Develop: do the “then” part. Stretch: explain the rule in English. Swap after each card.',
  questions: [
    { q: 'ج ح خ', en: 'alphabet · name them, count the dots', start: 'جِيمٌ · حَاءٌ · خَاءٌ', more: 'ب ت ث' },
    { q: 'وَرْدٌ', en: 'joins · why is every letter alone?', start: 'وَرْدٌ', more: 'دَرْسٌ' },
    { q: 'قِطَّةٌ', en: 'marks · name them all', start: 'كَسْرَةٌ · شَدَّةٌ', more: 'أُمٌّ' },
    { q: '١٢ · ٢١', en: 'numerals · read both — careful!', start: 'اثْنَا عَشَرَ', more: 'وَاحِدٌ وَعِشْرُونَ' },
    { q: 'مستشفى', en: 'signs · read without marks', start: 'مُسْتَشْفَى', more: 'مطعم' },
  ],
  card: {
    title: 'Reading card — the F1 showcase', ar: 'بِطَاقَةُ القِرَاءَةِ', you: 'the reader', them: 'the card holder',
    tasks: [
      { ex: 'كِتَابٌ · كِتَابًا · كِتَابٍ', task: 'Read the three tanwīn endings.', plan: '-un · -an · -in', model: 'كِتَابٌ · كِتَابًا · كِتَابٍ', modelEn: 'kitābun · kitāban · kitābin.' },
      { ex: 'الشَّمْسُ · القَمَرُ', task: 'Read; which one doubles?', plan: 'sun · moon', model: 'الشَّمْسُ · القَمَرُ', modelEn: 'ash-shams (sun letter) · al-qamar (moon letter).' },
      { ex: 'حَدِيقَةُ المَدْرَسَةِ', task: 'R-E-A-D the phrase.', plan: 'ḥa-dī-qa-tu l-mad-ra-sa', model: 'حَدِيقَةُ المَدْرَسَةِ', modelEn: 'the school garden.' },
      { unexpected: true, ex: 'مدخل', task: 'Read the sign and say its opposite.', plan: 'SCOPE · opposite = exit', model: 'مَدْخَل · مَخْرَج', modelEn: 'madkhal (entrance) · makhraj (exit).' },
    ],
  },
  talk: {
    title: 'The F1 reading race', ar: 'سِبَاقُ القِرَاءَةِ',
    text: 'In 30 seconds, read as many cards from the word slides as you can, top to bottom. The Coach counts the correct ones. Then try to beat your own score.',
    routes: { core: 'Read six cards.', develop: 'Read all twelve.', stretch: 'Read all twelve and name each topic.' },
  },
  builder: [
    { en: 'school — madrasa', cols: [['مَدْ', 'مَدَ'], ['رَ', 'زَ'], ['سَةٌ', 'صَةٌ']], key: [0, 0, 0], full: 'مَدْرَسَةٌ', why: 'sukūn closes “mad” · r has no dot · plain s.' },
    { en: 'question — suʾāl', cols: [['سُ', 'سَ'], ['ؤَا', 'وَا'], ['لٌ', 'نٌ']], key: [0, 0, 0], full: 'سُؤَالٌ', why: 'hamza on wāw · long ā · tanwīn.' },
    { en: 'the sun — ash-shams', cols: [['ال', 'اِ'], ['شَّمْ', 'شَمْ'], ['سُ', 'صُ']], key: [0, 0, 0], full: 'الشَّمْسُ', why: 'sun letter → shadda on shīn after al-.' },
  ],
  errors: [
    { wrong: 'تَابٌ', hint: '“door” — check the dots.', right: 'بَابٌ', why: 'Alphabet: ب one dot below.' },
    { wrong: '٢١', hint: 'Write twelve.', right: '١٢', why: 'Numerals: same order as English.' },
    { wrong: 'مُعَلِمٌ', hint: '“teacher” — a mark is missing.', right: 'مُعَلِّمٌ', why: 'Marks: shadda on lām.' },
  ],
  task: {
    title: 'Copy, listen and write: my F1 portfolio page', ar: 'صَفْحَتِي فِي الوَحْدَةِ الأُولَى',
    size: 'alphabet · dictation · reading',
    text: 'In your book, make one portfolio page: • the 28 letters from memory • bāʾ, ʿayn and hāʾ in four positions • ١ to ٢٠ in Arabic digits • DICTATION: your buddy reads five words — write them with every mark • copy three signs without marks • read the whole page aloud to your buddy.',
    phrases: [['ثَمَانِيَةٌ وَعِشْرُونَ حَرْفًا', 'twenty-eight letters'], ['حَرَكَاتٌ · شَدَّةٌ · تَنْوِينٌ', 'marks · shadda · tanwīn'], ['إِمْلَاءٌ', 'dictation'], ['أَقْرَأُ بِصَوْتٍ عَالٍ', 'I read aloud']],
    coreFrames: [
      { ar: 'ا ب ت ث ج ح خ … ي', en: 'The 28 letters from memory.' },
      { ar: 'ب بـ ـبـ ـب ______', en: 'Four positions: bāʾ, then ʿayn and hāʾ.' },
      { ar: '١ ٢ ٣ … ٢٠', en: 'One to twenty.' },
      { ar: 'مطعم ______ مسجد ______ مخرج', en: 'Copy three signs.' },
    ],
    developFrames: [
      { ar: 'إِمْلَاءٌ: ١ ______ ٢ ______ ٣ ______ ٤ ______ ٥ ______', en: 'Dictation with every mark.' },
      { ar: 'هَدَفِي لِلْوَحْدَةِ الثَّانِيَةِ: ______', en: 'My target for F2 (in English is fine).' },
    ],
    bank: ['ا ب ت ث', 'ا د ذ ر ز و', 'ـعـ · ـه', 'الشَّمْسُ · القَمَرُ', '١٢ · ١٥ · ٢٠', 'مَدْرَسَةٌ · مُعَلِّمٌ', 'سُؤَالٌ · قِطَّةٌ', 'مطعم · مخرج'],
    checklist: ['28 letters in order, every dot in place.', 'Four positions for three letters.', '١–٢٠ in the right order.', 'Dictation with every mark (Develop).', 'Whole page read aloud to your buddy (Stretch).'],
    notesFull: 'STEP 8 (10 min). Core: letters, positions, numbers and signs with the frames. Develop: add the five-word dictation. Stretch: read the whole page aloud in under one minute and write one target for F2. Teacher notes one strength and one target per student for the F1 report.',
    range: [15, 90],
    model: {
      text: `ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي
ب بـ ـبـ ـب · ع عـ ـعـ ـع · ه هـ ـهـ ـه
١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ١٠ ١١ ١٢ ١٣ ١٤ ١٥ ١٦ ١٧ ١٨ ١٩ ٢٠
إِمْلَاءٌ: مَدْرَسَةٌ · سُؤَالٌ · الشَّمْسُ · قِطَّةٌ · مُعَلِّمٌ
مطعم · مسجد · مخرج`,
      en: 'Line 1: the 28 letters. Line 2: four positions of bāʾ, ʿayn and hāʾ. Line 3: one to twenty. Line 4: a dictation of five words with every mark. Line 5: three signs without marks.',
      find: ['ا ب ت ث', 'ب بـ ـبـ ـب', 'الشَّمْسُ', 'مخرج'],
    },
  },
  buddyRows: [['write all 28 letters with every dot?', 'Core'], ['write four positions correctly?', 'Core'], ['write ١–٢٠ in the right order?', 'Develop'], ['write the dictation with every mark?', 'Develop'], ['read the whole page aloud without stopping?', 'Stretch']],
  remember: 'Before you leave: write ONE target for F2 in your book, e.g. “I will check every dot before I move on.”',
}));
