'use strict';
/* Practice Room · F1-L03 · Powerful sounds (ض ط ظ ع غ ف ق ك) and the three long vowels. Sounds + script in one lesson. Teacher-made. */
const { f1, room } = require('./pr-f1-common');

module.exports = room(f1({
  key: 'f1-l03',
  arShort: 'أَصْوَاتٌ قَوِيَّةٌ وَالمَدُّ',
  grammar: 'eight new letters (ḍād · ṭāʾ · ẓāʾ · ʿayn · ghayn · fāʾ · qāf · kāf); plain vs emphatic pairs (د/ض · ت/ط · ذ/ظ · س/ص · ك/ق); the three long vowels made with ا و ي (bā · bū · bī)',
  focus: 'Students run their own sounds-and-script practice with eight new letters and the long vowels: say names and sounds, act a plain-or-heavy mini-dialogue, do point-and-say cards, read long vowels and words on a reading card, race to read the row, then build words, spot slips, and copy, take dictation and label.',
  words1: 'Eight new letters', words2: 'Words with long vowels',
  addWords: [['كِتَابٌ', 'book'], ['طَبِيبٌ', 'doctor'], ['صَدِيقٌ', 'friend'], ['سُوقٌ', 'market']],
  dialogue: {
    title: 'Plain or heavy?', ar: 'خَفِيفٌ أَمْ ثَقِيلٌ؟',
    lines: [
      ['A', 'اسْمَعْ: «تَ» … «طَ».', 'Listen: “ta” … “ṭa”.'],
      ['B', '«طَ» ثَقِيلٌ — الطَّاءُ.', '“ṭa” is heavy — ṭāʾ.'],
      ['A', 'وَ«كَ» … «قَ»؟', 'And “ka” … “qa”?'],
      ['B', '«قَ» مِنْ آخِرِ الفَمِ — القَافُ.', '“qa” comes from the back of the mouth — qāf.'],
      ['A', 'اقْرَأْ: بَا · بُو · بِي.', 'Read: bā · bū · bī.'],
      ['B', 'بَا · بُو · بِي — صَوْتٌ طَوِيلٌ!', 'bā · bū · bī — a long sound!'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: A says a plain or heavy sound (س/ص · د/ض · ت/ط · ك/ق); B says “plain” or “heavy” and names the letter.',
  },
  questions: [
    { q: 'ط', en: 'heavy t · compare ت', start: 'طَاءٌ', more: 'طَبِيبٌ' },
    { q: 'ع', en: 'from the throat · no English sound (word: juice)', start: 'عَيْنٌ', more: 'عَصِيرٌ' },
    { q: 'غ', en: 'like a gargled r · dot above (word: he was absent)', start: 'غَيْنٌ', more: 'غَابَ' },
    { q: 'ق', en: 'deep k · two dots above', start: 'قَافٌ', more: 'سُوقٌ' },
    { q: 'ف', en: 'f · one dot above (word: elephant)', start: 'فَاءٌ', more: 'فِيلٌ' },
  ],
  card: {
    title: 'Reading card — long and short', ar: 'بِطَاقَةُ القِرَاءَةِ', you: 'the reader', them: 'the card holder',
    tasks: [
      { ex: 'كَ · كَا', task: 'Read short, then long.', plan: 'ka · kā', model: 'كَ · كَا', modelEn: 'ka (short) · kā (long — alif).' },
      { ex: 'قُ · قُو · قِ · قِي', task: 'Read the four sounds.', plan: 'qu · qū · qi · qī', model: 'قُ · قُو · قِ · قِي', modelEn: 'qu · qū (wāw) · qi · qī (yāʾ).' },
      { ex: 'كِتَابٌ · طَبِيبٌ', task: 'Read both words; find the long vowels.', plan: 'look for ا and ي', model: 'كِتَابٌ · طَبِيبٌ', modelEn: 'kitāb (long ā) · ṭabīb (long ī).' },
      { unexpected: true, ex: 'سُوقٌ', task: 'Which long vowel? Read it.', plan: 'look for و', model: 'سُوقٌ', modelEn: 'sūq — long ū (wāw); market.' },
    ],
  },
  talk: {
    title: 'Read the row', ar: 'اقْرَأِ السَّطْرَ',
    text: 'In 30 seconds, read the new row ض ط ظ ع غ ف ق ك by name or sound, then bā · bū · bī with five different letters (tā tū tī …). The Coach counts the correct ones.',
    routes: { core: 'Read the eight new letter names in order.', develop: 'Read the eight sounds, then three long-vowel sets.', stretch: 'Read the five words from the bank and say each long vowel.' },
  },
  builder: [
    { en: 'book — kitāb', cols: [['كِ', 'قِ'], ['تَا', 'طَا'], ['بٌ', 'تٌ']], key: [0, 0, 0], full: 'كِتَابٌ', why: 'plain k and plain t; long ā = alif.' },
    { en: 'doctor — ṭabīb', cols: [['طَ', 'تَ'], ['بِي', 'بُو'], ['بٌ', 'ثٌ']], key: [0, 0, 0], full: 'طَبِيبٌ', why: 'heavy ṭ; long ī = yāʾ.' },
    { en: 'friend — ṣadīq', cols: [['صَ', 'سَ'], ['دِي', 'ذِي'], ['قٌ', 'كٌ']], key: [0, 0, 0], full: 'صَدِيقٌ', why: 'heavy ṣ; long ī; deep q.' },
  ],
  errors: [
    { wrong: 'تَبِيبٌ', hint: '“doctor” starts with a HEAVY t.', right: 'طَبِيبٌ', why: 'ط is the emphatic t.' },
    { wrong: 'كِتَبٌ', hint: '“book” has a LONG ā.', right: 'كِتَابٌ', why: 'Long ā needs an alif.' },
    { wrong: 'سُقٌ', hint: '“market” has a long ū.', right: 'سُوقٌ', why: 'Long ū needs a wāw.' },
  ],
  task: {
    title: 'Copy, listen and write: powerful sounds and long vowels', ar: 'أَكْتُبُ الحُرُوفَ وَالمَدَّ',
    text: 'In your book: • copy ض ط ظ ع غ ف ق ك three times each, right to left • write the long-vowel sets for three letters (كَا كُو كِي …) • copy the four words and circle the long vowel in each • DICTATION: your buddy reads five items — write them without looking.',
    phrases: [['ض · ط · ظ', 'ḍād · ṭāʾ · ẓāʾ (heavy)'], ['ع · غ · ف · ق · ك', 'ʿayn · ghayn · fāʾ · qāf · kāf'], ['ا · و · ي', 'long ā · ū · ī'], ['ثَقِيلٌ · خَفِيفٌ', 'heavy · plain']],
    coreFrames: [
      { ar: 'ض ______ ط ______ ظ', en: 'Copy the heavy letters.' },
      { ar: 'ع ______ غ ______ ف ______ ق ______ ك', en: 'Copy the other five.' },
      { ar: 'بَا ______ بُو ______ بِي', en: 'Copy the long vowels.' },
      { ar: 'كِتَابٌ ______ سُوقٌ ______', en: 'Copy two words; circle the long vowel.' },
    ],
    developFrames: [
      { ar: 'قَا ______ قُو ______ قِي ______', en: 'Write the long vowels for qāf.' },
      { ar: 'إِمْلَاءٌ: ١ ______ ٢ ______ ٣ ______', en: 'Dictation: write what your buddy says.' },
    ],
    bank: ['ض · ط · ظ', 'ع · غ', 'ف · ق · ك', 'بَا · بُو · بِي', 'كِتَابٌ', 'طَبِيبٌ', 'صَدِيقٌ', 'سُوقٌ'],
    checklist: ['Every letter from right to left.', 'Dots: right number, right place (ف one · ق two).', 'Long vowels written with ا · و · ي.', 'Dictation: five items without looking (Develop).', 'Buddy check, then fix one thing.'],
    notesFull: 'STEP 8 (10 min). Core: copy letters, long-vowel sets and words with the frames. Develop: long-vowel sets for three letters + a five-item dictation. Stretch: dictation of plain/heavy pairs (سَ صَ · تَ طَ · كَ قَ). Teacher listens for ʿayn and qāf and checks the dots of ف and ق.',
    range: [10, 45],
    model: {
      text: `ض ط ظ ع غ ف ق ك
كَا كُو كِي · قَا قُو قِي · طَا طُو طِي
كِتَابٌ · طَبِيبٌ · صَدِيقٌ · سُوقٌ
إِمْلَاءٌ: صَ · قَ · عُو · طِي · كِتَابٌ`,
      en: 'Line 1: the eight new letters. Line 2: long-vowel sets for three letters. Line 3: the four words (long vowels: ā · ī · ī · ū). Line 4: a dictation of five items.',
      find: ['ض ط ظ', 'قَا قُو قِي', 'طَبِيبٌ', 'سُوقٌ'],
    },
  },
}));
