'use strict';
/* Apply Workshop · F1-W04 · F1-L07 (Arabic-Indic numerals) + F1-L08 (reading aloud: R-E-A-D). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f1-w04', pair: ['f1-l07', 'f1-l08'], allowTatweel: true,
  title: 'The School Open-Day Map', arShort: 'خَرِيطَةُ اليَوْمِ المَفْتُوحِ',
  focus: 'Students join numerals with reading aloud: on a school open-day map they read room labels (fully vowelled words with R-E-A-D) and room numbers (written left to right), say which room is which, race to read the map and copy and take dictation of labels and numbers.',
  sort: [
    { ar: '٥', cat: 0 }, { ar: '٨', cat: 0 }, { ar: '١٥', cat: 0 }, { ar: '٢٠', cat: 0 },
    { ar: 'مَدْرَسَةٌ', cat: 1 }, { ar: 'مُعَلِّمٌ', cat: 1 }, { ar: 'حَدِيقَةٌ', cat: 1 }, { ar: 'مِفْتَاحٌ', cat: 1 },
  ],
  dialogue: {
    title: 'Where is the room?', ar: 'أَيْنَ الغُرْفَةُ؟',
    lines: [
      ['A', 'اقْرَأْ: مَطْبَخٌ.', 'Read: maṭbakh (kitchen).'],
      ['B', 'مَطْ — بَخٌ: مَطْبَخٌ.', 'maṭ — bakh: maṭbakh.'],
      ['A', 'مَا رَقْمُ المَطْبَخِ؟', 'What is the kitchen’s number?'],
      ['B', '١٢ — اثْنَا عَشَرَ.', '12 — twelve.'],
      ['A', 'وَالحَدِيقَةُ؟', 'And the garden?'],
      ['B', 'حَدِيقَةٌ — رَقْمُ ٧، سَبْعَةٌ.', 'ḥadīqa — number 7, seven.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: A points to ANY room label on the map; B reads it in syllables, then says its number.',
    notes: 'The numerals (١٢ · ٧, written left to right) come from F1-L07; reading in syllables with R-E-A-D (maṭ-bakh · ḥa-dī-qa) from F1-L08. Sketch a simple map with six rooms and numbers in the chat or on the board.',
  },
  card: {
    title: 'Reading card — the open-day map', ar: 'بِطَاقَةُ القِرَاءَةِ', you: 'the reader', them: 'the map holder',
    mix: 'Arabic-Indic numerals in the right order (F1-L07) with fully vowelled words read with R-E-A-D (F1-L08)',
    tasks: [
      { ex: '٣ · ٨ · ٥ · ٠', task: 'Read the four numbers.', plan: 'two hooks · upside-down V · circle · dot', model: '٣ · ٨ · ٥ · ٠', modelEn: 'three · eight · five · zero.' },
      { ex: '١٥ · ٢٠ · ١٢', task: 'Read them — left to right!', plan: 'start on the LEFT', model: '١٥ · ٢٠ · ١٢', modelEn: 'fifteen · twenty · twelve.' },
      { ex: 'مَدْرَسَةٌ', task: 'Read it in syllables, then smoothly.', plan: 'ma · dra · sa', model: 'مَدْ — رَ — سَةٌ', modelEn: 'mad-ra-sa (school).' },
      { ex: 'مُعَلِّمٌ — غُرْفَةُ ٩', task: 'Read the label and the room number.', plan: 'shadda on lām', model: 'مُعَلِّمٌ — ٩', modelEn: 'muʿallim (teacher) — room nine.' },
      { unexpected: true, ex: '٧ · ٨', task: 'Which is seven and which is eight?', plan: 'V or upside-down V?', model: '٧ — سَبْعَةٌ · ٨ — ثَمَانِيَةٌ', modelEn: '٧ is seven (a V), ٨ is eight (an upside-down V).' },
    ],
  },
  talk: {
    title: 'Map race', ar: 'سِبَاقُ الخَرِيطَةِ',
    text: 'In 30 seconds, read as many room labels and room numbers from the open-day map as you can (or use the two Step 1 slides). Say each label in syllables first, then smoothly. The partner counts.',
    routes: { core: 'Read the numbers 0–10.', develop: 'Read four labels with their numbers.', stretch: 'Read every label smoothly and the numbers up to 20.' },
  },
  task: {
    title: 'Copy, listen and write: our map labels', ar: 'أَكْتُبُ لَافِتَاتِ الخَرِيطَةِ',
    text: 'In your book: • copy the digits 0–9 in order • make four map labels: a word and a room number • DICTATION: your buddy reads three numbers and two words — write them without looking • split two words into syllables.',
    range: [8, 50],
    phrases: [['٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩', 'the ten digits'], ['١٥', 'fifteen — numbers go left to right'], ['مَدْ · رَ · سَةٌ', 'read in syllables'], ['ة', 'says -a (or -at)']],
    coreFrames: [
      { ar: '٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩', en: 'Copy the ten digits.' },
      { ar: 'مَطْبَخٌ — ١٢ ______', en: 'Copy the label and its number.' },
      { ar: 'حَدِيقَةٌ — ٧ ______', en: 'Copy the label and its number.' },
      { ar: 'مُعَلِّمٌ — ٩ ______', en: 'Copy the label and its number.' },
    ],
    developFrames: [
      { ar: 'إِمْلَاءٌ: ١ ______ ٢ ______ ٣ ______', en: 'Dictation: three numbers and two words.' },
      { ar: 'نَافِذَةٌ = ______ · ______ · ______', en: 'Split into syllables.' },
    ],
    bank: ['٠ – ٩', '١٠ · ١٢ · ١٥ · ٢٠', 'مَدْرَسَةٌ · مُعَلِّمٌ', 'مَطْبَخٌ · حَدِيقَةٌ', 'نَافِذَةٌ · مِفْتَاحٌ', 'بَيْتٌ · سَيَّارَةٌ', 'شَمْسٌ · قَمَرٌ', 'طَالِبَةٌ · كِتَابٌ'],
    model: {
      text: `٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩
مَطْبَخٌ ١٢ · حَدِيقَةٌ ٧ · مُعَلِّمٌ ٩ · مَدْرَسَةٌ ٢٠
إِمْلَاءٌ: ١٥ · ٨ · ٣ · مِفْتَاحٌ · سَيَّارَةٌ`,
      en: 'Line 1: the ten digits. Line 2: four map labels with room numbers. Line 3: a dictation of three numbers and two words. Syllables: نَا · فِ · ذَةٌ (nā-fi-dha).',
      find: ['٠ ١ ٢ ٣', 'مَطْبَخٌ ١٢', 'مُعَلِّمٌ ٩', 'مِفْتَاحٌ'],
    },
  },
});
