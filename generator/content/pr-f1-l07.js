'use strict';
/* Practice Room · F1-L07 · Arabic numerals ٠–٩, numbers 0–20, keeping the order. Sounds + script in one lesson. Teacher-made. */
const { f1, room } = require('./pr-f1-common');

module.exports = room(f1({
  key: 'f1-l07',
  arShort: 'الأَرْقَامُ',
  grammar: 'the ten digits ٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩; numbers are written left to right even inside Arabic (١٥ = 15); look-alikes (٥ circle vs ٠ dot · ٧ V vs ٨ upside-down V · ٢ vs ٣); saying 0–20; reading real numbers in prices, rooms, scores and times',
  focus: 'Students run their own practice with Arabic numerals: say the digits and their names, act a “how old / which room?” mini-dialogue, do point-and-say cards, read real numbers on a reading card (price, room, score, time), race to count 0–20, then write numbers in the right order, spot look-alike slips, and copy and write numbers from dictation.',
  words1: 'Digits zero to five', words2: 'Digits six to nine, ten and twenty',
  wordsAr: 'الأَرْقَامُ',
  words: [
    ['٠', 'zero — a dot', 'ṣifr', 'digit', 'صِفْرٌ', 'word'], ['١', 'one', 'wāḥid', 'digit', 'وَاحِدٌ', 'word'], ['٢', 'two — one hook', 'ithnān', 'digit', 'اثْنَانِ', 'word'], ['٣', 'three — two hooks', 'thalātha', 'digit', 'ثَلَاثَةٌ', 'word'], ['٤', 'four', 'arbaʿa', 'digit', 'أَرْبَعَةٌ', 'word'], ['٥', 'five — a small circle', 'khamsa', 'digit', 'خَمْسَةٌ', 'word'],
    ['٦', 'six', 'sitta', 'digit', 'سِتَّةٌ', 'word'], ['٧', 'seven — a V', 'sabʿa', 'digit', 'سَبْعَةٌ', 'word'], ['٨', 'eight — an upside-down V', 'thamāniya', 'digit', 'ثَمَانِيَةٌ', 'word'], ['٩', 'nine', 'tisʿa', 'digit', 'تِسْعَةٌ', 'word'], ['١٠', 'ten', 'ʿashara', 'number', 'عَشَرَةٌ', 'word'], ['٢٠', 'twenty', 'ʿishrūn', 'number', 'عِشْرُونَ', 'word'],
  ],
  warm: { head: 'Number ping-pong', text: 'The Leader says a number in ENGLISH (0–10 or 20). The Speaker points to the digit and says it in Arabic. The Coach checks.', steps: ['Leader: say 4 numbers in English.', 'Speaker points to the digit and says the Arabic word.', 'Swap roles.', 'Last round: the Leader writes a digit in the chat; the Speaker says it.'], routes: { core: 'Find the digit and say the Arabic word.', develop: 'Say the next number too.', stretch: 'Count backwards from the number to zero.' } },
  dialogue: {
    title: 'How old? Which room?', ar: 'كَمْ عُمْرُكَ؟',
    lines: [
      ['A', 'كَمْ عُمْرُكَ؟', 'How old are you?'],
      ['B', 'عُمْرِي اثْنَا عَشَرَ عَامًا. (١٢)', 'I am twelve. (12)'],
      ['A', 'مَا رَقْمُ غُرْفَتِكَ؟', 'What is your room number?'],
      ['B', 'غُرْفَةُ خَمْسَةَ عَشَرَ. (١٥)', 'Room fifteen. (15)'],
      ['A', 'وَرَقْمُ هَاتِفِكَ؟', 'And your phone number?'],
      ['B', 'صِفْرٌ، سَبْعَةٌ، ثَلَاثَةٌ … (٠٧٣)', 'Zero, seven, three … (073)'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: give YOUR real age and an invented room and phone number — your partner writes the digits.',
  },
  qTitle: 'Point to the number, say it, check',
  questions: [
    { q: '٣', en: 'two hooks on top', start: 'ثَلَاثَةٌ', more: 'أَرْبَعَةٌ' },
    { q: '٨', en: 'an upside-down V', start: 'ثَمَانِيَةٌ', more: 'تِسْعَةٌ' },
    { q: '١٢', en: 'one, then two — same order as English', start: 'اثْنَا عَشَرَ', more: 'ثَلَاثَةَ عَشَرَ' },
    { q: '١٥', en: 'fifteen', start: 'خَمْسَةَ عَشَرَ', more: 'سِتَّةَ عَشَرَ' },
    { q: '٢٠', en: 'twenty', start: 'عِشْرُونَ', more: 'عَشَرَةٌ' },
  ],
  card: {
    title: 'Reading card — real numbers', ar: 'بِطَاقَةُ القِرَاءَةِ', you: 'the reader', them: 'the card holder',
    tasks: [
      { ex: '٥ جُنَيْهَاتٍ', task: 'Read the price.', plan: 'five pounds', model: 'خَمْسَةُ جُنَيْهَاتٍ', modelEn: 'five pounds.' },
      { ex: 'غُرْفَةُ ١٤', task: 'Read the room number.', plan: 'room fourteen', model: 'غُرْفَةُ أَرْبَعَةَ عَشَرَ', modelEn: 'room fourteen.' },
      { ex: '٣ – ١', task: 'Read the football score.', plan: 'three – one', model: 'ثَلَاثَةٌ – وَاحِدٌ', modelEn: 'three – one.' },
      { unexpected: true, ex: '١٨', task: 'Read it — careful with the order!', plan: '1 then 8', model: 'ثَمَانِيَةَ عَشَرَ', modelEn: 'eighteen (not 81!).' },
    ],
  },
  talk: {
    title: 'Count to twenty', ar: 'نَعُدُّ إِلَى عِشْرِينَ',
    text: 'In 30 seconds, count from ٠ to ٢٠ in Arabic while your partner points to the digits you say (write ٠–٢٠ in your book first). The Coach counts how far you get.',
    routes: { core: 'Count 0–10.', develop: 'Count 0–20.', stretch: 'Count 20 → 0 backwards.' },
  },
  buddyRows: [['write the digits clearly (٥ circle · ٠ dot)?', 'Core'], ['keep two-digit numbers in the right order (١٢ not ٢١)?', 'Core'], ['write ١٠ to ٢٠ without gaps?', 'Develop'], ['write the dictation numbers correctly?', 'Develop'], ['read every number aloud in Arabic too?', 'Stretch']],
  builderTitle: 'Write the numbers in the right order',
  builderAr: 'اكْتُبِ الأَرْقَامَ',
  builderAnswer: 'Numbers: answers',
  builderNotes: 'STEP 6 (4 min). Read the English numbers, then choose the correct Arabic digits from each column, starting on the RIGHT (column 1). Watch for reversed two-digit numbers and look-alikes. Students copy the three answers into their book.',
  builder: [
    { en: '7 · 12 · 20', cols: [['٧', '٨'], ['١٢', '٢١'], ['٢٠', '٠٢']], key: [0, 0, 0], full: '٧ · ١٢ · ٢٠', why: 'Digits keep the same order as English: 12 = ١٢.' },
    { en: '5 · 15 · 0', cols: [['٥', '٠'], ['١٥', '٥١'], ['٠', '٥']], key: [0, 0, 0], full: '٥ · ١٥ · ٠', why: '٥ is a small circle; ٠ is a dot.' },
    { en: '3 · 18 · 6', cols: [['٣', '٢'], ['١٨', '٨١'], ['٦', '٧']], key: [0, 0, 0], full: '٣ · ١٨ · ٦', why: '٣ has two hooks; ٢ has one.' },
  ],
  errors: [
    { wrong: '٢١', hint: 'Write twelve.', right: '١٢', why: 'Same order as English: first 1, then 2.' },
    { wrong: '٠', hint: 'Write five.', right: '٥', why: '٥ = a small circle; ٠ = a dot (zero).' },
    { wrong: '٨', hint: 'Write seven.', right: '٧', why: '٧ opens upwards like a V; ٨ is upside down.' },
  ],
  task: {
    title: 'Copy, listen and write: numbers', ar: 'أَكْتُبُ الأَرْقَامَ',
    size: 'copy · dictation · prices',
    text: 'In your book: • copy the digits ٠–٩ three times • write ١٠ to ٢٠ in Arabic digits • DICTATION: your buddy says five numbers in Arabic — write the digits without looking • write two prices and one room number you can see at home.',
    phrases: [['٠ ١ ٢ ٣ ٤', 'ṣifr · wāḥid · ithnān · thalātha · arbaʿa'], ['٥ ٦ ٧ ٨ ٩', 'khamsa · sitta · sabʿa · thamāniya · tisʿa'], ['١٠ · ٢٠', 'ʿashara · ʿishrūn'], ['جُنَيْهٌ · غُرْفَةٌ', 'pound · room']],
    coreFrames: [
      { ar: '٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩', en: 'Copy the ten digits — left to right.' },
      { ar: '١٠ ______ ١١ ______ ١٢ ______', en: 'Continue to ٢٠.' },
      { ar: '٥ جُنَيْهَاتٍ ______', en: 'Copy a price.' },
      { ar: 'غُرْفَةُ ١٤ ______', en: 'Copy a room number.' },
    ],
    developFrames: [
      { ar: 'إِمْلَاءٌ: ١ ______ ٢ ______ ٣ ______', en: 'Dictation: write the digits you hear.' },
      { ar: 'السِّعْرُ: ______ جُنَيْهَاتٍ', en: 'The price: … pounds.' },
    ],
    bank: ['٠ ١ ٢ ٣ ٤', '٥ ٦ ٧ ٨ ٩', '١٠ · ٢٠', 'صِفْرٌ · وَاحِدٌ', 'خَمْسَةٌ · عَشَرَةٌ', 'عِشْرُونَ', 'جُنَيْهٌ', 'غُرْفَةٌ'],
    checklist: ['All ten digits, clearly different (٥ circle · ٠ dot).', 'Two-digit numbers in the same order as English.', '١٠ to ٢٠ complete.', 'Dictation: five numbers without looking (Develop).', 'Buddy check, then fix one thing.'],
    notesFull: 'STEP 8 (10 min). Core: copy the digits and ١٠–٢٠ with the frames. Develop: a five-number dictation + one price. Stretch: dictation of eight numbers including look-alikes (٧/٨ · ٢/٣ · ٥/٠). Teacher checks order in two-digit numbers.',
    range: [8, 60],
    model: {
      text: `٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩
١٠ ١١ ١٢ ١٣ ١٤ ١٥ ١٦ ١٧ ١٨ ١٩ ٢٠
إِمْلَاءٌ: ٧ · ١١ · ١٤ · ١٨ · ٢٠
السِّعْرُ: ٥ جُنَيْهَاتٍ · غُرْفَةُ ١٤`,
      en: 'Line 1: the ten digits. Line 2: ten to twenty. Line 3: a dictation of five numbers. Line 4: a price and a room number.',
      find: ['٠ ١ ٢ ٣', '١٢', '١٨', '٥ جُنَيْهَاتٍ'],
    },
  },
}));
