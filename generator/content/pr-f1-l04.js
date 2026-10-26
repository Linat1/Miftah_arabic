'use strict';
/* Practice Room · F1-L04 · The last six letters (ل م ن ه و ي) and the four marks. Sounds + script in one lesson. Teacher-made. */
const { f1, room } = require('./pr-f1-common');

module.exports = room(f1({
  key: 'f1-l04',
  arShort: 'آخِرُ الحُرُوفِ وَالحَرَكَاتُ',
  grammar: 'the last six letters (lām · mīm · nūn · hāʾ · wāw · yāʾ); و is the sixth breaker; the four marks: fatḥa (a) · ḍamma (u) · kasra (i) · sukūn (no vowel); reading first fully vowelled words',
  focus: 'Students run their own sounds-and-script practice with the last six letters and the four marks: say names and sounds, act a “which mark?” mini-dialogue, do point-and-say cards, read fully vowelled words on a reading card, race to read the whole alphabet, then build words, spot mark slips, and copy, take dictation and label.',
  words1: 'The last six letters', words2: 'First vowelled words',
  addWords: [['قَلَمٌ', 'pen'], ['بِنْتٌ', 'girl'], ['وَلَدٌ', 'boy'], ['نَهْرٌ', 'river'], ['يَدٌ', 'hand'], ['مَوْزٌ', 'banana']],
  dialogue: {
    title: 'Which mark is it?', ar: 'مَا الحَرَكَةُ؟',
    lines: [
      ['A', 'اقْرَأْ: مَ · مُ · مِ · مْ.', 'Read: ma · mu · mi · m.'],
      ['B', 'مَ · مُ · مِ · مْ.', 'ma · mu · mi · m (no vowel).'],
      ['A', 'مَا هٰذِهِ؟ (ـْ)', 'What is this? (points to ـْ)'],
      ['B', 'هٰذِهِ سُكُونٌ — لَا صَوْتَ بَعْدَ الحَرْفِ.', 'This is sukūn — no vowel after the letter.'],
      ['A', 'اقْرَأْ: قَلَمٌ.', 'Read: qalam.'],
      ['B', 'قَ · لَ · مٌ — قَلَمٌ!', 'qa · la · mun — qalam (pen)!'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: A writes a letter with a mark in the chat; B reads it and names the mark.',
  },
  questions: [
    { q: 'ل', en: 'lām · /l/', start: 'لَامٌ', more: 'قَلَمٌ' },
    { q: 'ن', en: 'nūn · one dot above · /n/', start: 'نُونٌ', more: 'بِنْتٌ' },
    { q: 'ه', en: 'hāʾ · a light h, as in hat', start: 'هَاءٌ', more: 'نَهْرٌ' },
    { q: 'و', en: 'wāw · /w/ or long ū · a breaker', start: 'وَاوٌ', more: 'وَلَدٌ' },
    { q: 'ـْ', en: 'sukūn · no vowel', start: 'سُكُونٌ', more: 'بِنْتٌ' },
  ],
  card: {
    title: 'Reading card — fully vowelled words', ar: 'بِطَاقَةُ القِرَاءَةِ', you: 'the reader', them: 'the card holder',
    tasks: [
      { ex: 'نَ · نُ · نِ · نْ', task: 'Read the four marks on nūn.', plan: 'na · nu · ni · n', model: 'نَ · نُ · نِ · نْ', modelEn: 'na · nu · ni · n (sukūn).' },
      { ex: 'وَلَدٌ · بِنْتٌ', task: 'Read both words; say the meaning.', plan: 'wa-la-dun · bin-tun', model: 'وَلَدٌ · بِنْتٌ', modelEn: 'walad (boy) · bint (girl).' },
      { ex: 'نَهْرٌ · مَوْزٌ', task: 'Read; where is the sukūn?', plan: 'on هـ and و', model: 'نَهْرٌ · مَوْزٌ', modelEn: 'nahr (river) · mawz (banana) — sukūn on h and w.' },
      { unexpected: true, ex: 'يَدٌ', task: 'Read it and show it!', plan: 'ya-dun', model: 'يَدٌ', modelEn: 'yad — hand (show your hand!).' },
    ],
  },
  talk: {
    title: 'The whole alphabet!', ar: 'كُلُّ الحُرُوفِ',
    text: 'In 30 seconds, read the 28 letters in order, starting from alif. Then read as many of the six words as you can. The Coach counts the correct ones.',
    routes: { core: 'Read the last six letters, then try the whole row.', develop: 'Read all 28 letter names in order.', stretch: 'Read all 28, then the six words with every mark.' },
  },
  builder: [
    { en: 'pen — qalam', cols: [['قَ', 'كَ'], ['لَ', 'لْ'], ['مٌ', 'نٌ']], key: [0, 0, 0], full: 'قَلَمٌ', why: 'qa · la · mun — fatḥa twice, then tanwīn.' },
    { en: 'girl — bint', cols: [['بِ', 'بَ'], ['نْ', 'نَ'], ['تٌ', 'ثٌ']], key: [0, 0, 0], full: 'بِنْتٌ', why: 'kasra under b; sukūn on n.' },
    { en: 'boy — walad', cols: [['وَ', 'وُ'], ['لَ', 'لْ'], ['دٌ', 'ذٌ']], key: [0, 0, 0], full: 'وَلَدٌ', why: 'wa · la · dun; و breaks the joining.' },
  ],
  errors: [
    { wrong: 'بَنْتٌ', hint: '“girl” = bint.', right: 'بِنْتٌ', why: '“i” = kasra, BELOW the letter.' },
    { wrong: 'نَهَرٌ', hint: 'No vowel after h …', right: 'نَهْرٌ', why: 'sukūn on هـ: nah-run.' },
    { wrong: 'قَلُمٌ', hint: '“pen” = qa-la-m.', right: 'قَلَمٌ', why: 'fatḥa (a) on lām, not ḍamma (u).' },
  ],
  task: {
    title: 'Copy, listen and write: the full alphabet and the marks', ar: 'أَكْتُبُ الحُرُوفَ وَالحَرَكَاتِ',
    text: 'In your book: • copy ل م ن ه و ي three times each • write one letter with all four marks (بَ بُ بِ بْ) • copy the six words with every mark • DICTATION: your buddy reads five vowelled words or syllables — write them with the marks, without looking.',
    phrases: [['ل · م · ن', 'lām · mīm · nūn'], ['ه · و · ي', 'hāʾ · wāw · yāʾ'], ['فَتْحَةٌ · ضَمَّةٌ · كَسْرَةٌ · سُكُونٌ', 'fatḥa · ḍamma · kasra · sukūn'], ['مَشْكُولٌ', 'fully vowelled']],
    coreFrames: [
      { ar: 'ل ______ م ______ ن', en: 'Copy three letters.' },
      { ar: 'ه ______ و ______ ي', en: 'Copy three more — و is a breaker.' },
      { ar: 'لَ ______ لُ ______ لِ ______ لْ', en: 'Copy lām with the four marks.' },
      { ar: 'وَلَدٌ ______ بِنْتٌ ______', en: 'Copy two words with every mark.' },
    ],
    developFrames: [
      { ar: 'قَلَمٌ ______ نَهْرٌ ______ مَوْزٌ ______', en: 'Copy, then read aloud.' },
      { ar: 'إِمْلَاءٌ: ١ ______ ٢ ______ ٣ ______', en: 'Dictation — with the marks.' },
    ],
    bank: ['ل · م · ن', 'ه · و · ي', 'ـَ · ـُ · ـِ · ـْ', 'قَلَمٌ', 'بِنْتٌ', 'وَلَدٌ', 'نَهْرٌ', 'يَدٌ · مَوْزٌ'],
    checklist: ['Every letter from right to left.', 'و written as a breaker (gap after it).', 'Every mark in the right place: above (a) · below (i).', 'Dictation with marks (Develop).', 'Buddy check, then fix one thing.'],
    notesFull: 'STEP 8 (10 min). Core: copy letters, mark sets and words with the frames. Develop: a five-item dictation with marks. Stretch: write the whole alphabet from memory, then three dictated words. Teacher checks that kasra is BELOW and sukūn is a small circle.',
    allowTatweel: true,
    range: [10, 45],
    model: {
      text: `ل م ن ه و ي
بَ بُ بِ بْ · لَ لُ لِ لْ
قَلَمٌ · بِنْتٌ · وَلَدٌ · نَهْرٌ · يَدٌ · مَوْزٌ
إِمْلَاءٌ: مُو · نِي · وَلَدٌ · نَهْرٌ · يَدٌ`,
      en: 'Line 1: the last six letters. Line 2: two letters with the four marks. Line 3: the six words. Line 4: a dictation of five items.',
      find: ['ل م ن', 'بَ بُ بِ بْ', 'بِنْتٌ', 'نَهْرٌ'],
    },
  },
}));
