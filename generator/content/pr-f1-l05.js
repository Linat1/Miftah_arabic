'use strict';
/* Practice Room · F1-L05 · One letter, four positions — and the six breakers. Sounds + script in one lesson. Teacher-made. */
const { f1, room } = require('./pr-f1-common');

module.exports = room(f1({
  key: 'f1-l05',
  arShort: 'أَشْكَالُ الحُرُوفِ',
  grammar: 'a letter keeps its identity (dots and main stroke) but changes its joining strokes: alone · start · middle · end; the six breakers (ا د ذ ر ز و) join only from the right, so the next letter takes a start or alone form',
  focus: 'Students run their own script practice with letter positions: name the four forms of a letter, act a “where is it in the word?” mini-dialogue, do point-and-say cards, read words and find each letter’s position on a reading card, race to read words with breakers, then build words from parts, spot joining slips, and copy and write from dictation.',
  words1: 'Four forms: bāʾ and ʿayn', words2: 'Four forms: hāʾ — and the breakers',
  words: [
    ['ب', 'bāʾ — alone', 'isolated', 'alone'], ['بـ', 'bāʾ — at the start', 'joins to the left', 'start'], ['ـبـ', 'bāʾ — in the middle', 'joins both sides', 'middle'], ['ـب', 'bāʾ — at the end', 'joins from the right', 'end'],
    ['ع', 'ʿayn — alone', 'isolated', 'alone'], ['عـ', 'ʿayn — at the start', 'open mouth on top', 'start'], ['ـعـ', 'ʿayn — in the middle', 'a closed loop', 'middle'], ['ـع', 'ʿayn — at the end', 'loop + a tail', 'end'],
    ['ه', 'hāʾ — alone', 'isolated', 'alone'], ['هـ', 'hāʾ — at the start', 'two eyes', 'start'], ['ـهـ', 'hāʾ — in the middle', 'a loop through the line', 'middle'],
    ['ا د ذ ر ز و', 'the six breakers', 'never join to the LEFT', 'breakers'],
  ],
  wordsAr: 'أَشْكَالُ الحَرْفِ',
  warm: { head: 'Shape ping-pong', text: 'The Leader says a letter and a position (“bāʾ — middle”). The Speaker points to the right card (or says its number). The Coach checks.', steps: ['Leader: say 4 letter + position pairs.', 'Speaker finds each card and draws the shape in the air.', 'Swap roles — new pairs each time.', 'Last round: the Leader says a breaker; the Speaker says what happens after it.'], routes: { core: 'Find the right card.', develop: 'Say which strokes join (right · left · both).', stretch: 'Name another letter that changes the same way.' } },
  dialogue: {
    title: 'Where is the letter?', ar: 'أَيْنَ الحَرْفُ؟',
    lines: [
      ['A', 'أَيْنَ البَاءُ فِي «بَابٌ»؟', 'Where is the bāʾ in bāb?'],
      ['B', 'فِي البِدَايَةِ وَفِي النِّهَايَةِ.', 'At the start and at the end.'],
      ['A', 'لِمَاذَا البَاءُ الثَّانِيَةُ وَحْدَهَا؟', 'Why is the second bāʾ on its own?'],
      ['B', 'لِأَنَّ الأَلِفَ لَا تَتَّصِلُ بِمَا بَعْدَهَا.', 'Because alif doesn’t join to what comes after it.'],
      ['A', 'وَالعَيْنُ فِي «سَعِيدٌ»؟', 'And the ʿayn in saʿīd?'],
      ['B', 'فِي الوَسَطِ — شَكْلُهَا مُغْلَقٌ.', 'In the middle — its shape is closed.'],
    ],
    foot: 'Round 1: read it in pairs (English helps!). Round 2: swap letters. Round 3: A writes a word in the chat; B says where one letter is: start · middle · end.',
  },
  qTitle: 'Point, say the position, check',
  questions: [
    { q: 'بَابٌ', en: 'find both bāʾs · why is the second alone?', start: 'بـ · ب', more: 'كِتَابٌ' },
    { q: 'سَعِيدٌ', en: 'ʿayn in the middle', start: 'ـعـ', more: 'بَعِيدٌ' },
    { q: 'شَارِعٌ', en: 'ʿayn at the end — after a breaker', start: 'ع', more: 'رَبِيعٌ' },
    { q: 'وَجْهٌ', en: 'hāʾ at the end', start: 'ـه', more: 'نَهْرٌ' },
    { q: 'دَرْسٌ', en: 'how many breakers?', start: 'د · ر', more: 'وَرْدٌ' },
  ],
  card: {
    title: 'Reading card — find the position', ar: 'بِطَاقَةُ القِرَاءَةِ', you: 'the reader', them: 'the card holder',
    tasks: [
      { ex: 'عَيْنٌ · سَعِيدٌ · شَارِعٌ', task: 'Read; say where ʿayn is in each.', plan: 'start · middle · end', model: 'عَيْنٌ · سَعِيدٌ · شَارِعٌ', modelEn: 'ʿayn (start) · saʿīd (middle) · shāriʿ (end, alone after r).' },
      { ex: 'هُوَ · نَهْرٌ · وَجْهٌ', task: 'Read; say where hāʾ is.', plan: 'start · middle · end', model: 'هُوَ · نَهْرٌ · وَجْهٌ', modelEn: 'huwa (start) · nahr (middle) · wajh (end).' },
      { ex: 'وَرْدٌ', task: 'Read it; why are all letters separate?', plan: 'count the breakers', model: 'وَرْدٌ', modelEn: 'ward (roses) — و ر د are all breakers.' },
      { unexpected: true, ex: 'ـبـ', task: 'Which position is this?', plan: 'joins on both sides', model: 'ـبـ', modelEn: 'bāʾ in the middle — joined on both sides.' },
    ],
  },
  talk: {
    title: 'Breaker race', ar: 'سِبَاقُ الحُرُوفِ',
    text: 'In 30 seconds, read these words and clap at every breaker: بَابٌ · دَرْسٌ · وَرْدٌ · شَارِعٌ · كِتَابٌ · سَعِيدٌ. The Coach counts the correct words.',
    routes: { core: 'Read three words and clap the breakers.', develop: 'Read all six words.', stretch: 'Read all six, then say the position of ʿayn or hāʾ in each.' },
  },
  builderTitle: 'Join the parts into one word',
  builder: [
    { en: 'happy — saʿīd', cols: [['سَ', 'صَ'], ['عِي', 'غِي'], ['دٌ', 'ذٌ']], key: [0, 0, 0], full: 'سَعِيدٌ', why: 'Joined: ʿayn takes its closed middle form.' },
    { en: 'street — shāriʿ', cols: [['شَا', 'سَا'], ['رِ', 'زِ'], ['عٌ', 'غٌ']], key: [0, 0, 0], full: 'شَارِعٌ', why: 'After the breaker ر, ʿayn stands alone.' },
    { en: 'face — wajh', cols: [['وَ', 'فَ'], ['جْ', 'حْ'], ['هٌ', 'ةٌ']], key: [0, 0, 0], full: 'وَجْهٌ', why: 'و breaks; then j + h join; h takes its end form.' },
  ],
  errors: [
    { wrong: 'ـعـ', hint: 'This should be ʿayn at the END — the end form has a tail.', right: 'ـع', why: 'Middle = closed loop; end = loop + tail.' },
    { wrong: 'وـرد', hint: 'Can و join to the left?', right: 'وَرْدٌ', why: 'و ر د are breakers: no joining line after them.' },
    { wrong: 'هـ', hint: 'This is the START form. “face” ends in h …', right: 'ـه', why: 'End form of hāʾ: joined from the right only.' },
  ],
  task: {
    title: 'Copy, listen and write: four positions', ar: 'أَكْتُبُ أَشْكَالَ الحُرُوفِ',
    text: 'In your book: • write ب ع ه in all four positions (alone · start · middle · end) • copy the six words and circle every breaker • DICTATION: your buddy reads five words — write them, joining correctly, without looking.',
    phrases: [['وَحْدَهُ · فِي البِدَايَةِ', 'alone · at the start'], ['فِي الوَسَطِ · فِي النِّهَايَةِ', 'in the middle · at the end'], ['ا د ذ ر ز و', 'the six breakers'], ['يَتَّصِلُ · لَا يَتَّصِلُ', 'joins · does not join']],
    coreFrames: [
      { ar: 'ب ______ بـ ______ ـبـ ______ ـب', en: 'Copy the four forms of bāʾ.' },
      { ar: 'ع ______ عـ ______ ـعـ ______ ـع', en: 'Copy the four forms of ʿayn.' },
      { ar: 'ه ______ هـ ______ ـهـ ______ ـه', en: 'Copy the four forms of hāʾ.' },
      { ar: 'بَابٌ ______ وَرْدٌ ______', en: 'Copy two words; circle the breakers.' },
    ],
    developFrames: [
      { ar: 'سَعِيدٌ ______ شَارِعٌ ______ وَجْهٌ ______', en: 'Copy; label the position of ʿayn / hāʾ.' },
      { ar: 'إِمْلَاءٌ: ١ ______ ٢ ______ ٣ ______', en: 'Dictation: join correctly.' },
    ],
    bank: ['ب · بـ · ـبـ · ـب', 'ع · عـ · ـعـ · ـع', 'ه · هـ · ـهـ · ـه', 'ا د ذ ر ز و', 'بَابٌ · كِتَابٌ', 'سَعِيدٌ · شَارِعٌ', 'وَجْهٌ · نَهْرٌ', 'دَرْسٌ · وَرْدٌ'],
    checklist: ['Four forms for each letter, in order.', 'Dots stay the same in every position.', 'No joining line after a breaker.', 'Dictation words joined correctly (Develop).', 'Buddy check, then fix one thing.'],
    notesFull: 'STEP 8 (10 min). Core: the four forms of ب ع ه with the frames. Develop: the six words with labelled positions + dictation. Stretch: dictation of eight words, then write the four forms of ج and ك from memory. Teacher checks for joins after breakers.',
    range: [10, 45],
    model: {
      text: `ب بـ ـبـ ـب · ع عـ ـعـ ـع · ه هـ ـهـ ـه
بَابٌ · دَرْسٌ · وَرْدٌ · شَارِعٌ · كِتَابٌ · سَعِيدٌ
إِمْلَاءٌ: عَيْنٌ · نَهْرٌ · وَجْهٌ · بَعِيدٌ · رَبِيعٌ`,
      en: 'Line 1: the four forms of bāʾ, ʿayn and hāʾ. Line 2: the six words (breakers: ا · د · ر · و). Line 3: a dictation of five words, joined correctly.',
      find: ['ب بـ ـبـ ـب', 'وَرْدٌ', 'شَارِعٌ', 'وَجْهٌ'],
    },
  },
}));
