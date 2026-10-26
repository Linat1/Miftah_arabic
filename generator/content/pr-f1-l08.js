'use strict';
/* Practice Room · F1-L08 · From marks to meaning — reading aloud with the R-E-A-D routine. Sounds + script in one lesson. Teacher-made. */
const { f1, room } = require('./pr-f1-common');

module.exports = room(f1({
  key: 'f1-l08',
  arShort: 'القِرَاءَةُ الجَهْرِيَّةُ',
  grammar: 'one routine for any fully vowelled word — R: start at the Right edge · E: Extract the letters · A: Attach the marks · D: Draw them together — then read again more smoothly; syllables (ma-dra-sa), sukūn closes a syllable, shadda doubles, tāʾ marbūṭa (ة) says -a / -at',
  focus: 'Students run their own reading-aloud practice: say twelve useful words, act a “how do you read it?” mini-dialogue using R-E-A-D, do point-and-say syllable cards, read longer words and a short phrase on a reading card, race to read the word list smoothly, then build words from syllables, spot reading slips, and copy and write the words from dictation.',
  bigAr: false,
  words1: 'Words to read (1)', words2: 'Words to read (2)',
  wordsAr: 'كَلِمَاتٌ لِلْقِرَاءَةِ',
  words: [
    ['بَيْتٌ', 'house', 'bay-tun', '2 syllables'], ['شَمْسٌ', 'sun', 'sham-sun', '2 syllables'], ['قَمَرٌ', 'moon', 'qa-ma-run', '3 syllables'], ['كِتَابٌ', 'book', 'ki-tā-bun', '3 syllables'], ['مَدْرَسَةٌ', 'school', 'mad-ra-sa', 'ة = -a'], ['طَالِبَةٌ', 'student (f.)', 'ṭā-li-ba', 'ة = -a'],
    ['مُعَلِّمٌ', 'teacher (m.)', 'mu-ʿal-li-mun', 'shadda'], ['سَيَّارَةٌ', 'car', 'say-yā-ra', 'shadda'], ['مِفْتَاحٌ', 'key', 'mif-tā-ḥun', 'sukūn'], ['نَافِذَةٌ', 'window', 'nā-fi-dha', 'long ā'], ['حَدِيقَةٌ', 'garden', 'ḥa-dī-qa', 'long ī'], ['مَطْبَخٌ', 'kitchen', 'maṭ-ba-khun', 'sukūn'],
  ],
  warm: { head: 'Word ping-pong', text: 'The Leader says a word in ENGLISH from the next two slides. The Speaker finds it and reads the Arabic aloud, syllable by syllable, then smoothly. The Coach checks the marks.', steps: ['Leader: say 4 English words.', 'Speaker reads each one twice: slowly, then smoothly.', 'Coach checks every mark.', 'Swap roles.'], routes: { core: 'Read the word slowly, syllable by syllable.', develop: 'Read it twice — the second time smoothly.', stretch: 'Clap the syllables, then read it with al- in front.' } },
  dialogue: {
    title: 'How do you read it?', ar: 'كَيْفَ تَقْرَأُهَا؟',
    lines: [
      ['A', 'كَيْفَ تَقْرَأُ «مَدْرَسَةٌ»؟', 'How do you read madrasa?'],
      ['B', 'أَبْدَأُ مِنَ اليَمِينِ: مَدْ · رَ · سَ · ةٌ.', 'I start from the right: mad · ra · sa · tun.'],
      ['A', 'وَالسُّكُونُ عَلَى الدَّالِ؟', 'And the sukūn on dāl?'],
      ['B', 'يُغْلِقُ المَقْطَعَ: «مَدْ».', 'It closes the syllable: “mad”.'],
      ['A', 'الآنَ بِسُرْعَةٍ!', 'Now quickly!'],
      ['B', 'مَدْرَسَةٌ!', 'madrasa!'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: do the same with مُعَلِّمٌ and سَيَّارَةٌ — slowly, then smoothly.',
  },
  qTitle: 'Syllable cards — slowly, then smoothly',
  questions: [
    { q: 'شَمْسٌ', en: 'sun · sukūn on mīm', start: 'شَمْ · سٌ', more: 'الشَّمْسُ' },
    { q: 'مُعَلِّمٌ', en: 'teacher · shadda on lām', start: 'مُ · عَلْ · لِ · مٌ', more: 'مُعَلِّمَةٌ' },
    { q: 'مِفْتَاحٌ', en: 'key · sukūn on fāʾ', start: 'مِفْ · تَا · حٌ', more: 'المِفْتَاحُ' },
    { q: 'حَدِيقَةٌ', en: 'garden · ة at the end', start: 'حَ · دِي · قَ · ةٌ', more: 'الحَدِيقَةُ' },
    { q: 'سَيَّارَةٌ', en: 'car · shadda on yāʾ', start: 'سَيْ · يَا · رَ · ةٌ', more: 'سَيَّارَتِي' },
  ],
  card: {
    title: 'Reading card — longer words and a first phrase', ar: 'بِطَاقَةُ القِرَاءَةِ', you: 'the reader', them: 'the card holder',
    tasks: [
      { ex: 'مَطْبَخٌ', task: 'R-E-A-D it aloud.', plan: 'maṭ · ba · khun', model: 'مَطْبَخٌ', modelEn: 'maṭbakh — kitchen.' },
      { ex: 'طَالِبَةٌ · طَالِبٌ', task: 'Read both; what does ة add?', plan: 'ṭā-li-ba · ṭā-lib', model: 'طَالِبَةٌ · طَالِبٌ', modelEn: 'ṭāliba (female student) · ṭālib (male student).' },
      { ex: 'بَيْتٌ كَبِيرٌ', task: 'Read the phrase smoothly.', plan: 'bay-tun ka-bī-run', model: 'بَيْتٌ كَبِيرٌ', modelEn: 'a big house.' },
      { unexpected: true, ex: 'نَافِذَةُ المَطْبَخِ', task: 'Read it — two words joined in meaning.', plan: 'nā-fi-dha-tu l-maṭ-bakh', model: 'نَافِذَةُ المَطْبَخِ', modelEn: 'the kitchen window.' },
    ],
  },
  talk: {
    title: 'Smooth-reading race', ar: 'سِبَاقُ القِرَاءَةِ',
    text: 'In 30 seconds, read the twelve words on the word slides smoothly (no syllable breaks). The Coach counts the words read correctly AND smoothly.',
    routes: { core: 'Read six words, syllable by syllable.', develop: 'Read all twelve smoothly.', stretch: 'Read all twelve with al- in front (sun letters doubled).' },
  },
  builderTitle: 'Join the syllables into one word',
  builder: [
    { en: 'school — madrasa', cols: [['مَدْ', 'مُدْ'], ['رَ', 'رِ'], ['سَةٌ', 'صَةٌ']], key: [0, 0, 0], full: 'مَدْرَسَةٌ', why: 'mad · ra · sa — sukūn closes “mad”.' },
    { en: 'teacher — muʿallim', cols: [['مُ', 'مَ'], ['عَلْ', 'عِلْ'], ['لِمٌ', 'لُمٌ']], key: [0, 0, 0], full: 'مُعَلِّمٌ', why: 'Joined, ʿal + li = عَلِّ (shadda).' },
    { en: 'key — miftāḥ', cols: [['مِفْ', 'مَفْ'], ['تَا', 'طَا'], ['حٌ', 'خٌ']], key: [0, 0, 0], full: 'مِفْتَاحٌ', why: 'mif · tā · ḥun — long ā in the middle.' },
  ],
  errors: [
    { wrong: 'مَدَرَسَةٌ', hint: 'Read it: is there a vowel after d?', right: 'مَدْرَسَةٌ', why: 'sukūn on dāl: mad-ra-sa.' },
    { wrong: 'مُعَلِمٌ', hint: '“teacher” doubles the l.', right: 'مُعَلِّمٌ', why: 'shadda on lām: mu-ʿal-lim.' },
    { wrong: 'حَدِقَةٌ', hint: '“garden” has a long ī.', right: 'حَدِيقَةٌ', why: 'Long ī needs yāʾ: ḥa-dī-qa.' },
  ],
  task: {
    title: 'Copy, listen and write: twelve words', ar: 'أَكْتُبُ الكَلِمَاتِ',
    text: 'In your book: • copy the twelve words with every mark • split six of them into syllables (مَدْ · رَ · سَةٌ) • DICTATION: your buddy reads five words — write them with all the marks, without looking • read your list aloud to your buddy.',
    phrases: [['ابْدَأْ مِنَ اليَمِينِ', 'start from the right'], ['حُرُوفٌ · حَرَكَاتٌ', 'letters · marks'], ['مَقْطَعٌ', 'syllable'], ['اقْرَأْ بِسَلَاسَةٍ', 'read smoothly']],
    coreFrames: [
      { ar: 'بَيْتٌ ______ شَمْسٌ ______ قَمَرٌ', en: 'Copy three short words.' },
      { ar: 'مَدْرَسَةٌ ______ طَالِبَةٌ ______', en: 'Copy two words ending in ة.' },
      { ar: 'مُعَلِّمٌ ______ سَيَّارَةٌ ______', en: 'Copy two shadda words.' },
      { ar: 'مَدْ · رَ · سَةٌ ______', en: 'Copy the syllables.' },
    ],
    developFrames: [
      { ar: 'مِفْ · ______ · ______', en: 'Split مِفْتَاحٌ into syllables.' },
      { ar: 'إِمْلَاءٌ: ١ ______ ٢ ______ ٣ ______', en: 'Dictation — with every mark.' },
    ],
    bank: ['بَيْتٌ · شَمْسٌ', 'قَمَرٌ · كِتَابٌ', 'مَدْرَسَةٌ · طَالِبَةٌ', 'مُعَلِّمٌ · سَيَّارَةٌ', 'مِفْتَاحٌ · مَطْبَخٌ', 'نَافِذَةٌ · حَدِيقَةٌ', 'سُكُونٌ · شَدَّةٌ', 'مِنَ اليَمِينِ'],
    checklist: ['Every word copied with all its marks.', 'Syllables split at the right places.', 'ة written at the end of the feminine words.', 'Dictation with every mark (Develop).', 'Read the list aloud to your buddy.'],
    notesFull: 'STEP 8 (10 min). Core: copy the words and syllables with the frames. Develop: split six words + a five-word dictation. Stretch: eight-word dictation and read the list in under 30 seconds. Teacher listens to one student read three words per room.',
    range: [12, 50],
    model: {
      text: `بَيْتٌ · شَمْسٌ · قَمَرٌ · كِتَابٌ · مَدْرَسَةٌ · طَالِبَةٌ
مُعَلِّمٌ · سَيَّارَةٌ · مِفْتَاحٌ · نَافِذَةٌ · حَدِيقَةٌ · مَطْبَخٌ
مَدْ · رَ · سَةٌ — مُ · عَلْ · لِ · مٌ — مِفْ · تَا · حٌ
إِمْلَاءٌ: شَمْسٌ · سَيَّارَةٌ · حَدِيقَةٌ · مَطْبَخٌ · مُعَلِّمٌ`,
      en: 'Lines 1–2: the twelve words with every mark. Line 3: three words split into syllables. Line 4: a dictation of five words.',
      find: ['مَدْرَسَةٌ', 'مُعَلِّمٌ', 'مِفْ · تَا · حٌ', 'حَدِيقَةٌ'],
    },
  },
}));
