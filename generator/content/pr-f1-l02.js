'use strict';
/* Practice Room · F1-L02 · New letter families (د ذ ر ز · س ش ص), connection breakers, sun and moon letters. Sounds + script in one lesson. Teacher-made. */
const { f1, room } = require('./pr-f1-common');

module.exports = room(f1({
  key: 'f1-l02',
  arShort: 'حُرُوفٌ جَدِيدَةٌ',
  grammar: 'seven new letters (dāl · dhāl · rāʾ · zāy · sīn · shīn · ṣād); pairs that differ only by a dot (د ذ · ر ز · س ش); the connection breakers ا د ذ ر ز never join to the next letter; after al-, a sun letter is doubled (al-shams → ash-shams) and a moon letter keeps the l (al-qamar)',
  focus: 'Students run their own sounds-and-script practice with seven new letters: say names and sounds, act a dot-pair mini-dialogue, do point-and-say cards, read words with breakers and with sun and moon letters on a reading card, race to read the row, then build words from their letters, spot slips and copy, take dictation and label.',
  words1: 'Seven new letters', words2: 'Letters + words',
  addWords: [['دَرْسٌ', 'lesson'], ['بَحْرٌ', 'sea'], ['خُبْزٌ', 'bread'], ['شَجَرٌ', 'trees'], ['سَبْتٌ', 'Saturday']],
  dialogue: {
    title: 'Dot or no dot?', ar: 'نُقْطَةٌ أَمْ لَا؟',
    lines: [
      ['A', 'مَا هٰذَا الحَرْفُ؟ (ر)', 'What is this letter? (points to ر)'],
      ['B', 'هٰذَا رَاءٌ — لَيْسَ فِيهِ نُقْطَةٌ.', 'This is rāʾ — it has no dot.'],
      ['A', 'وَهٰذَا؟ (ز)', 'And this? (points to ز)'],
      ['B', 'هٰذَا زَايٌ — نُقْطَةٌ وَاحِدَةٌ فَوْقَ.', 'This is zāy — one dot above.'],
      ['A', 'وَ«ش»؟', 'And “sh”?'],
      ['B', 'شِينٌ — ثَلَاثُ نُقَاطٍ فَوْقَ.', 'shīn — three dots above.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: A points to د ذ ر ز س ش ص in any order; B names it and counts the dots.',
  },
  questions: [
    { q: 'د', en: 'no dot · /d/ · a breaker', start: 'دَالٌ', more: 'دَرْسٌ' },
    { q: 'ذ', en: 'one dot above · /ð/ as in this (word: corn)', start: 'ذَالٌ', more: 'ذُرَةٌ' },
    { q: 'ز', en: 'one dot above · /z/ as in zoo · a breaker', start: 'زَايٌ', more: 'خُبْزٌ' },
    { q: 'ش', en: 'three dots above · /ʃ/ as in ship', start: 'شِينٌ', more: 'شَجَرٌ' },
    { q: 'ص', en: 'no dot · a dark, heavy /sˤ/ (word: he was patient)', start: 'صَادٌ', more: 'صَبَرَ' },
  ],
  card: {
    title: 'Reading card — breakers, sun and moon', ar: 'بِطَاقَةُ القِرَاءَةِ', you: 'the reader', them: 'the card holder',
    tasks: [
      { ex: 'دَرْسٌ · بَحْرٌ', task: 'Read both words; where does the word “break”?', plan: 'look after د and ر', model: 'دَرْسٌ · بَحْرٌ', modelEn: 'dars · baḥr — the pen lifts after د and ر (breakers).' },
      { ex: 'سَ · شَ · صَ', task: 'Read the three s-sounds.', plan: 'sa · sha · ṣa (heavy)', model: 'سَ · شَ · صَ', modelEn: 'sa · sha · ṣa — ṣa is deeper and heavier.' },
      { ex: 'البَحْرُ · الشَّجَرُ', task: 'Read both; which one doubles the letter after al-?', plan: 'moon · sun', model: 'البَحْرُ · الشَّجَرُ', modelEn: 'al-baḥr (moon letter: say the l) · ash-shajar (sun letter: no l, double sh).' },
      { unexpected: true, ex: 'الدَّرْسُ', task: 'Sun or moon letter? Read it.', plan: 'look for the shadda', model: 'الدَّرْسُ', modelEn: 'ad-dars — د is a sun letter (shadda, no l sound).' },
    ],
  },
  talk: {
    title: 'Read the row', ar: 'اقْرَأِ السَّطْرَ',
    text: 'In 30 seconds, read the new row (dāl to ṣād) by name or sound, then the five words with al- in front (sun or moon?). The Coach counts the correct ones.',
    routes: { core: 'Read the seven new letter names in order.', develop: 'Read the seven sounds, then three words.', stretch: 'Read all five words with al- — doubling the sun letters.' },
  },
  builder: [
    { en: 'lesson — dars', cols: [['دَ', 'ذَ'], ['رْ', 'زْ'], ['سٌ', 'شٌ']], key: [0, 0, 0], full: 'دَرْسٌ', why: 'd + r + s — no dots at all; the word breaks after د and ر.' },
    { en: 'bread — khubz', cols: [['خُ', 'حُ'], ['بْ', 'تْ'], ['زٌ', 'رٌ']], key: [0, 0, 0], full: 'خُبْزٌ', why: 'kh = dot above; z = dot above r.' },
    { en: 'trees — shajar', cols: [['شَ', 'سَ'], ['جَ', 'خَ'], ['رٌ', 'زٌ']], key: [0, 0, 0], full: 'شَجَرٌ', why: 'sh = three dots; r = no dot.' },
  ],
  errors: [
    { wrong: 'دَرْشٌ', hint: '“lesson” ends in plain s.', right: 'دَرْسٌ', why: 'س has no dots; ش has three.' },
    { wrong: 'خُبْرٌ', hint: '“bread” ends in z.', right: 'خُبْزٌ', why: 'ز = ر with one dot above.' },
    { wrong: 'السَبْتُ', hint: 'س is a SUN letter.', right: 'السَّبْتُ', why: 'Sun letter after al- → add shadda: as-sabt.' },
  ],
  task: {
    title: 'Copy, listen and write: seven new letters', ar: 'أَكْتُبُ الحُرُوفَ الجَدِيدَةَ',
    text: 'In your book: • copy the new letters د ذ ر ز س ش ص three times each, right to left • copy the five words — leave a small gap after every breaker • add al- to each word and mark the sun letters with a shadda • DICTATION: your buddy reads five items from the bank — write them without looking.',
    phrases: [['د · ذ · ر · ز', 'dāl · dhāl · rāʾ · zāy (breakers)'], ['س · ش · ص', 'sīn · shīn · ṣād'], ['حُرُوفٌ شَمْسِيَّةٌ', 'sun letters (double after al-)'], ['حُرُوفٌ قَمَرِيَّةٌ', 'moon letters (say the l)']],
    coreFrames: [
      { ar: 'د ______ ذ ______ ر ______ ز', en: 'Copy the four breakers.' },
      { ar: 'س ______ ش ______ ص', en: 'Copy the s-letters — count the dots.' },
      { ar: 'دَرْسٌ ______ بَحْرٌ ______', en: 'Copy two words — gap after د and ر.' },
      { ar: 'البَحْرُ ______ الشَّجَرُ ______', en: 'Copy: moon word, sun word.' },
    ],
    developFrames: [
      { ar: 'الدَّرْسُ ______ الخُبْزُ ______ السَّبْتُ ______', en: 'Copy, then circle the sun words.' },
      { ar: 'إِمْلَاءٌ: ١ ______ ٢ ______ ٣ ______', en: 'Dictation: write what your buddy says.' },
    ],
    bank: ['د · ذ · ر · ز', 'س · ش · ص', 'دَرْسٌ', 'بَحْرٌ', 'خُبْزٌ', 'شَجَرٌ', 'سَبْتٌ', 'الشَّمْسُ · القَمَرُ'],
    checklist: ['Every letter from right to left.', 'Dots: right number, right place.', 'A gap after every breaker (ا د ذ ر ز).', 'Shadda on sun letters after al- (Develop).', 'Buddy check, then fix one thing.'],
    notesFull: 'STEP 8 (10 min). Core: copy the letters and words with the frames. Develop: add al- to each word and mark the sun letters; then a five-item dictation. Stretch: eight-item dictation, then sort the words into sun and moon. Teacher checks breaker gaps and dots.',
    range: [10, 40],
    model: {
      text: `د ذ ر ز س ش ص
دَرْسٌ · بَحْرٌ · خُبْزٌ · شَجَرٌ · سَبْتٌ
الدَّرْسُ · البَحْرُ · الخُبْزُ · الشَّجَرُ · السَّبْتُ
إِمْلَاءٌ: زَ · شَ · صَ · دَرْسٌ · خُبْزٌ`,
      en: 'Line 1: the seven new letters. Line 2: the five words. Line 3: the words with al- — shadda on the sun letters (د · ش · س). Line 4: a dictation of five items.',
      find: ['د ذ ر ز', 'دَرْسٌ', 'الشَّجَرُ', 'السَّبْتُ'],
    },
  },
}));
