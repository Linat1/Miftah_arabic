'use strict';
/* Practice Room · F1-L06 · Small marks, big changes — shadda, tanwīn, alif madda, hamza. Sounds + script in one lesson. Teacher-made. */
const { f1, room } = require('./pr-f1-common');

module.exports = room(f1({
  key: 'f1-l06',
  arShort: 'عَلَامَاتٌ صَغِيرَةٌ',
  grammar: 'shadda doubles a letter (darasa → darrasa); tanwīn adds -n (kitābun · kitāban · kitābin); alif madda says ʾā (ādam); hamza is a catch in the throat and sits on ا · و · ي or alone (suʾāl · māʾ); routine: see the mark → name its job → read the word',
  focus: 'Students run their own script practice with four small marks: name each mark and its job, act a “what does the mark do?” mini-dialogue, do point-and-say cards, read minimal pairs on a reading card, race to read marked words, then build words, spot missing marks, and copy and write from dictation with every mark.',
  bigAr: false,
  words1: 'Shadda and tanwīn', words2: 'Madda and hamza',
  wordsAr: 'عَلَامَاتُ الدَّرْسِ',
  words: [
    ['ـّ', 'shadda — doubles the letter', 'a small “w” on top', 'shadda', 'شَدَّةٌ'], ['دَرَّسَ', 'he taught (compare: he studied)', 'dar-ra-sa', 'shadda', 'دَرَسَ', 'compare'], ['أُمٌّ', 'mother', 'umm-un', 'shadda'], ['قِطَّةٌ', 'cat', 'qiṭ-ṭa', 'shadda'],
    ['كِتَابٌ', 'a book (-un)', 'kitābun', 'tanwīn', 'كِتَابًا · كِتَابٍ', 'also'], ['بَيْتٌ', 'a house (-un)', 'baytun', 'tanwīn'],
    ['آ', 'alif madda — says ʾā', 'a wave on alif', 'madda', 'مَدَّةٌ'], ['آدَمُ', 'Adam', 'ʾĀdam', 'madda'],
    ['ء', 'hamza — a catch in the throat', 'alone, or on ا · و · ي', 'hamza', 'هَمْزَةٌ'], ['سُؤَالٌ', 'question', 'su-ʾā-lun', 'hamza on و'], ['مَاءٌ', 'water', 'māʾ-un', 'hamza alone'], ['سَأَلَ', 'he asked', 'sa-ʾa-la', 'hamza on ا'],
  ],
  warm: { head: 'Mark ping-pong', text: 'The Leader says a mark (shadda · tanwīn · madda · hamza). The Speaker finds a word on the next two slides with that mark and reads it. The Coach checks.', steps: ['Leader: say 4 marks; Speaker finds and reads a word for each.', 'Coach checks the mark and the sound.', 'Swap roles.', 'Last round: say what each mark DOES (doubles · adds n · ʾā · catch).'], routes: { core: 'Find a word with the mark and read it.', develop: 'Say the mark’s job in English.', stretch: 'Find a second word with the same mark.' } },
  dialogue: {
    title: 'What does the mark do?', ar: 'مَاذَا تَفْعَلُ العَلَامَةُ؟',
    lines: [
      ['A', 'مَا هٰذِهِ العَلَامَةُ؟ (ـّ)', 'What is this mark? (points to shadda)'],
      ['B', 'هٰذِهِ شَدَّةٌ — تُضَاعِفُ الحَرْفَ.', 'This is shadda — it doubles the letter.'],
      ['A', 'اقْرَأْ: دَرَسَ · دَرَّسَ.', 'Read: darasa · darrasa.'],
      ['B', 'دَرَسَ … دَرَّسَ — الرَّاءُ مَرَّتَيْنِ!', 'darasa … darrasa — the r twice!'],
      ['A', 'وَ«كِتَابٌ»؟', 'And kitābun?'],
      ['B', 'تَنْوِينٌ — نَقُولُ «نْ» فِي الآخِرِ: كِتَابُنْ.', 'tanwīn — we say “n” at the end: kitābun.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: A points to any marked word on the word slides; B names the mark and reads it.',
  },
  qTitle: 'See the mark, name its job, read',
  questions: [
    { q: 'مُدَرِّسٌ', en: 'shadda on r · teacher', start: 'شَدَّةٌ', more: 'مُدَرِّسَةٌ' },
    { q: 'كِتَابًا', en: 'tanwīn -an', start: 'تَنْوِينٌ', more: 'بَيْتًا' },
    { q: 'آمِنٌ', en: 'madda · safe', start: 'مَدَّةٌ', more: 'آدَمُ' },
    { q: 'سُؤَالٌ', en: 'hamza on wāw · question', start: 'هَمْزَةٌ', more: 'مَاءٌ' },
    { q: 'أُمٌّ', en: 'TWO marks! hamza + shadda', start: 'هَمْزَةٌ · شَدَّةٌ', more: 'جَدٌّ' },
  ],
  card: {
    title: 'Reading card — pairs that differ by one mark', ar: 'بِطَاقَةُ القِرَاءَةِ', you: 'the reader', them: 'the card holder',
    tasks: [
      { ex: 'دَرَسَ · دَرَّسَ', task: 'Read both; what changes?', plan: 'the r doubles', model: 'دَرَسَ · دَرَّسَ', modelEn: 'darasa (he studied) · darrasa (he taught) — shadda doubles r.' },
      { ex: 'كِتَابٌ · كِتَابًا · كِتَابٍ', task: 'Read the three tanwīn endings.', plan: '-un · -an · -in', model: 'كِتَابٌ · كِتَابًا · كِتَابٍ', modelEn: 'kitābun · kitāban · kitābin.' },
      { ex: 'أَدَمُ · آدَمُ', task: 'Which is correct? Read it.', plan: 'look for the wave', model: 'آدَمُ', modelEn: 'ʾĀdam — alif madda says ʾā.' },
      { unexpected: true, ex: 'سَأَلَ · سُؤَالٌ', task: 'Read both; where is the hamza?', plan: 'on ا · on و', model: 'سَأَلَ · سُؤَالٌ', modelEn: 'saʾala (on alif) · suʾāl (on wāw) — he asked / a question.' },
    ],
  },
  talk: {
    title: 'Marked-word race', ar: 'سِبَاقُ العَلَامَاتِ',
    text: 'In 30 seconds, read the twelve words on the word slides, saying each mark’s sound clearly (double letters, -n, ʾā, the catch). The Coach counts the correct ones.',
    routes: { core: 'Read six words.', develop: 'Read all twelve.', stretch: 'Read all twelve, then name each mark as you go.' },
  },
  builder: [
    { en: 'teacher (m.) — mudarris', cols: [['مُ', 'مَ'], ['دَ', 'ذَ'], ['رِّسٌ', 'رِسٌ']], key: [0, 0, 0], full: 'مُدَرِّسٌ', why: 'Shadda doubles the r: mu-dar-ris.' },
    { en: 'question — suʾāl', cols: [['سُ', 'صُ'], ['ؤَا', 'وَا'], ['لٌ', 'نٌ']], key: [0, 0, 0], full: 'سُؤَالٌ', why: 'Hamza sits on wāw after ḍamma.' },
    { en: 'he asked — saʾala', cols: [['سَ', 'صَ'], ['أَ', 'ؤَ'], ['لَ', 'نَ']], key: [0, 0, 0], full: 'سَأَلَ', why: 'After fatḥa, hamza sits on alif: sa-ʾa-la.' },
  ],
  errors: [
    { wrong: 'أُمٌ', hint: '“mother” has a doubled m.', right: 'أُمٌّ', why: 'Shadda on mīm: umm.' },
    { wrong: 'سُوَالٌ', hint: '“question” has a catch …', right: 'سُؤَالٌ', why: 'Hamza on the wāw: suʾāl.' },
    { wrong: 'ادَمُ', hint: '“Adam” starts with ʾā.', right: 'آدَمُ', why: 'Alif madda (آ) = hamza + long ā.' },
  ],
  task: {
    title: 'Copy, listen and write: every mark', ar: 'أَكْتُبُ العَلَامَاتِ',
    text: 'In your book: • copy the four marks and write each one’s job in English • copy three words for each mark • DICTATION: your buddy reads five marked words — write them with EVERY mark, without looking.',
    phrases: [['شَدَّةٌ', 'shadda — doubles'], ['تَنْوِينٌ', 'tanwīn — adds -n'], ['مَدَّةٌ', 'madda — ʾā'], ['هَمْزَةٌ', 'hamza — catch in the throat']],
    coreFrames: [
      { ar: 'ـّ ______ ـٌ ______ آ ______ ء', en: 'Copy the four marks.' },
      { ar: 'دَرَّسَ ______ أُمٌّ ______ قِطَّةٌ', en: 'Copy three shadda words.' },
      { ar: 'كِتَابٌ ______ كِتَابًا ______ كِتَابٍ', en: 'Copy the three tanwīn endings.' },
      { ar: 'آدَمُ ______ سُؤَالٌ ______ مَاءٌ', en: 'Copy madda and hamza words.' },
    ],
    developFrames: [
      { ar: 'مُدَرِّسٌ ______ سَأَلَ ______ آمِنٌ ______', en: 'Copy, then name each mark.' },
      { ar: 'إِمْلَاءٌ: ١ ______ ٢ ______ ٣ ______', en: 'Dictation — with every mark.' },
    ],
    bank: ['ـّ شَدَّةٌ', 'ـٌ ـً ـٍ تَنْوِينٌ', 'آ مَدَّةٌ', 'ء أ ؤ ئ هَمْزَةٌ', 'دَرَّسَ · أُمٌّ', 'كِتَابٌ · بَيْتٌ', 'آدَمُ · آمِنٌ', 'سُؤَالٌ · مَاءٌ'],
    checklist: ['Each mark copied with its job.', 'Shadda ON TOP of the doubled letter.', 'Hamza on the right seat (ا · و · ي · alone).', 'Dictation with every mark (Develop).', 'Buddy check, then fix one thing.'],
    notesFull: 'STEP 8 (10 min). Core: copy marks and words with the frames. Develop: name each mark + a five-word dictation. Stretch: an eight-word dictation including the minimal pairs (دَرَسَ / دَرَّسَ). Teacher checks shadda placement and hamza seats.',
    range: [10, 45],
    model: {
      text: `ـّ شَدَّةٌ · ـٌ تَنْوِينٌ · آ مَدَّةٌ · ء هَمْزَةٌ
دَرَّسَ · أُمٌّ · قِطَّةٌ · كِتَابٌ · كِتَابًا · كِتَابٍ
آدَمُ · سُؤَالٌ · مَاءٌ · سَأَلَ
إِمْلَاءٌ: مُدَرِّسٌ · بَيْتٌ · آمِنٌ · سُؤَالٌ · أُمٌّ`,
      en: 'Line 1: the four marks with their names. Line 2: shadda and tanwīn words. Line 3: madda and hamza words. Line 4: a dictation of five marked words.',
      find: ['شَدَّةٌ', 'كِتَابًا', 'آدَمُ', 'سُؤَالٌ'],
    },
  },
}));
