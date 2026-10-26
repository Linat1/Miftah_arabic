'use strict';
/* Practice Room · F1-L01 · The alphabet family — ا and the families ب ت ث · ج ح خ. Sounds + script in one lesson. Teacher-made. */
const { f1, room } = require('./pr-f1-common');

module.exports = room(f1({
  key: 'f1-l01',
  arShort: 'أَوَّلُ سَبْعَةِ حُرُوفٍ',
  grammar: 'letter names and sounds (alif · bāʾ · tāʾ · thāʾ · jīm · ḥāʾ · khāʾ); families that share one shape and differ only in dots (ب ت ث · ج ح خ); dot number and position (fawqa / taḥta); writing from right to left',
  focus: 'Students run their own sounds-and-script practice with the first seven letters: say names and sounds, act a “what letter is this?” mini-dialogue, do point-and-say cards, read syllables and first words on a reading card, race to read the letter row, then build words from their letters, spot dot slips, and copy, take dictation and label the letters.',
  words1: 'The seven letters', words2: 'Letters + first words',
  addWords: [['أَبٌ', 'father'], ['بَابٌ', 'door'], ['تَاجٌ', 'crown'], ['حَبٌّ', 'seeds / grain'], ['أَخٌ', 'brother']],
  dialogue: {
    title: 'What letter is this?', ar: 'مَا هٰذَا الحَرْفُ؟',
    lines: [
      ['A', 'مَا هٰذَا الحَرْفُ؟ (ب)', 'What is this letter? (points to ب)'],
      ['B', 'هٰذَا بَاءٌ.', 'This is bāʾ.'],
      ['A', 'كَمْ نُقْطَةً؟', 'How many dots?'],
      ['B', 'نُقْطَةٌ وَاحِدَةٌ، تَحْتَ.', 'One dot, below.'],
      ['A', 'وَهٰذَا؟ (ت)', 'And this? (points to ت)'],
      ['B', 'هٰذَا تَاءٌ — نُقْطَتَانِ فَوْقَ.', 'This is tāʾ — two dots above.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: A points to ANY of the seven letters; B names it and says where the dots are.',
    notes: 'The dialogue is a routine, not grammar to learn: “What is this letter? — This is … · How many dots?”',
  },
  questions: [
    { q: 'ب', en: 'one dot BELOW · sound /b/', start: 'بَاءٌ', more: 'بَابٌ' },
    { q: 'ت', en: 'two dots ABOVE · sound /t/', start: 'تَاءٌ', more: 'تَاجٌ' },
    { q: 'ث', en: 'three dots above · /θ/ as in thin (word: three)', start: 'ثَاءٌ', more: 'ثَلَاثَةٌ' },
    { q: 'ح', en: 'NO dot · a deep, breathy /ħ/', start: 'حَاءٌ', more: 'حَبٌّ' },
    { q: 'خ', en: 'one dot ABOVE · /x/ as in loch', start: 'خَاءٌ', more: 'أَخٌ' },
  ],
  card: {
    title: 'Reading card — sounds and first words', ar: 'بِطَاقَةُ القِرَاءَةِ', you: 'the reader', them: 'the card holder',
    tasks: [
      { ex: 'بَ · بُ · بِ', task: 'Read the three sounds.', plan: 'ba · bu · bi', model: 'بَ · بُ · بِ', modelEn: 'ba · bu · bi — the mark changes the vowel.' },
      { ex: 'جَ · حَ · خَ', task: 'Read them; which has no dot?', plan: 'ja · ḥa · kha', model: 'جَ · حَ · خَ', modelEn: 'ja · ḥa · kha — the middle one (ḥāʾ) has no dot.' },
      { ex: 'أَبٌ · أَخٌ', task: 'Read both words; say the meaning.', plan: 'ab · akh', model: 'أَبٌ · أَخٌ', modelEn: 'ab (father) · akh (brother).' },
      { unexpected: true, ex: 'ب · ت · ث', task: 'Point to the letter with TWO dots above.', plan: 'count the dots', model: 'ت — تَاءٌ', modelEn: 'tāʾ — two dots above.' },
    ],
    foot: 'Speaker = the reader · Leader = the card holder. Read from RIGHT to left. Task ! is a surprise — the Leader asks it without warning. Then swap roles.',
  },
  talk: {
    title: 'Read the row', ar: 'اقْرَأِ السَّطْرَ',
    text: 'In 30 seconds, read the letter row ا ب ت ث ج ح خ (names or sounds), then as many words from the word bank as you can. The Coach counts the correct ones.',
    routes: { core: 'Read the seven letter names in order.', develop: 'Read the seven sounds, then three words.', stretch: 'Read the row backwards, starting from khāʾ, then all five words.' },
  },
  builder: [
    { en: 'door — bāb', cols: [['بَ', 'تَ'], ['ا', 'ح'], ['بٌ', 'ثٌ']], key: [0, 0, 0], full: 'بَابٌ', why: 'b + ā + b: one dot below, twice.' },
    { en: 'crown — tāj', cols: [['تَ', 'ثَ'], ['ا', 'ب'], ['جٌ', 'خٌ']], key: [0, 0, 0], full: 'تَاجٌ', why: 'Two dots above (t); j has its dot below.' },
    { en: 'he searched — baḥatha', cols: [['بَ', 'تَ'], ['حَ', 'جَ'], ['ثَ', 'تَ']], key: [0, 0, 0], full: 'بَحَثَ', why: 'ḥ has NO dot; th has THREE.' },
  ],
  errors: [
    { wrong: 'تَابٌ', hint: '“door” starts with ONE dot below.', right: 'بَابٌ', why: 'ب = one dot below; ت = two dots above.' },
    { wrong: 'أَجٌ', hint: '“brother” has “kh” as in loch …', right: 'أَخٌ', why: 'خ has its dot ABOVE; ج has it below.' },
    { wrong: 'تَاخٌ', hint: '“crown” ends in “j”.', right: 'تَاجٌ', why: 'jīm (ج) — dot below, inside the curve.' },
  ],
  task: {
    title: 'Copy, listen and write: my first seven letters', ar: 'أَكْتُبُ الحُرُوفَ',
    text: 'In your book: • copy the seven letters in order, three times each, from right to left • copy the five words from the word bank • DICTATION: your buddy reads five letters or words from the bank — write them without looking • label each letter with its name.',
    phrases: [['ا · ب · ت · ث', 'alif · bāʾ · tāʾ · thāʾ'], ['ج · ح · خ', 'jīm · ḥāʾ · khāʾ'], ['نُقْطَةٌ · نُقْطَتَانِ · ثَلَاثُ نُقَاطٍ', 'one dot · two dots · three dots'], ['فَوْقَ · تَحْتَ', 'above · below']],
    coreFrames: [
      { ar: 'ا ______ ا ______ ا', en: 'Copy alif three times (top to bottom).' },
      { ar: 'ب ______ ت ______ ث', en: 'Copy the ب family — check the dots.' },
      { ar: 'ج ______ ح ______ خ', en: 'Copy the ج family — check the dots.' },
      { ar: 'بَابٌ ______ تَاجٌ ______', en: 'Copy two words.' },
    ],
    developFrames: [
      { ar: 'بَ ______ بُ ______ بِ ______', en: 'Copy, then say: ba · bu · bi.' },
      { ar: 'إِمْلَاءٌ: ١ ______ ٢ ______ ٣ ______', en: 'Dictation: write what your buddy says.' },
    ],
    bank: ['ا', 'ب · ت · ث', 'ج · ح · خ', 'أَبٌ', 'بَابٌ', 'تَاجٌ', 'حَبٌّ', 'أَخٌ'],
    checklist: ['Every letter written from right to left.', 'Dots: the right number, in the right place.', 'Each letter labelled with its name.', 'Dictation: five items without looking (Develop).', 'Buddy check, then fix one thing.'],
    notesFull: 'STEP 8 (10 min). Core: copy the letters and words using the frames. Develop: add the dictation — the buddy reads five items from the bank. Stretch: eight dictation items, then write one word for each letter you can. Teacher visits rooms and checks direction and dot positions.',
    range: [10, 40],
    model: {
      text: `ا ب ت ث ج ح خ
أَبٌ · بَابٌ · تَاجٌ · حَبٌّ · أَخٌ
إِمْلَاءٌ: بَ · خَ · ثَ · بَحَثَ · أَخٌ`,
      en: 'Line 1: the seven letters in order, right to left. Line 2: the five words from the bank. Line 3: a dictation of five items (three sounds and two words).',
      find: ['ا ب ت ث', 'بَابٌ', 'تَاجٌ', 'بَحَثَ'],
    },
  },
}));
