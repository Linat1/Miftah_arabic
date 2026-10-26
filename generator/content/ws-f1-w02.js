'use strict';
/* Apply Workshop · F1-W02 · F1-L03 (ض ط ظ ع غ ف ق ك + long vowels) + F1-L04 (ل م ن ه و ي + the four short-vowel marks). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f1-w02', pair: ['f1-l03', 'f1-l04'], allowTatweel: true,
  title: 'Labels at the Market Stall', arShort: 'لَافِتَاتُ السُّوقِ',
  focus: 'Students use the whole alphabet with long and short vowels: at a pretend market stall they read and say word labels, hear the difference between plain and powerful sounds, read short and long vowels, race to read the labels and copy and take dictation of them.',
  sort: [
    { ar: 'ط', cat: 0 }, { ar: 'ع', cat: 0 }, { ar: 'ق', cat: 0 }, { ar: 'بَا · بُو · بِي', cat: 0 },
    { ar: 'ل', cat: 1 }, { ar: 'ن', cat: 1 }, { ar: 'ي', cat: 1 }, { ar: 'بَ · بُ · بِ · بْ', cat: 1 },
  ],
  dialogue: {
    title: 'What does the label say?', ar: 'مَاذَا عَلَى اللَّافِتَةِ؟',
    lines: [
      ['A', 'اقْرَأِ اللَّافِتَةَ، مِنْ فَضْلِكَ.', 'Read the label, please.'],
      ['B', 'مَوْزٌ.', 'mawz (bananas).'],
      ['A', 'مَا أَوَّلُ حَرْفٍ؟', 'What is the first letter?'],
      ['B', 'مِيمٌ، وَعَلَيْهِ فَتْحَةٌ: مَ.', 'mīm, with a fatḥa on it: ma.'],
      ['A', 'وَهٰذِهِ؟ (سُوقٌ)', 'And this one? (sūq)'],
      ['B', 'سُوقٌ — السِّينُ، ثُمَّ وَاوٌ طَوِيلَةٌ، ثُمَّ قَافٌ.', 'sūq — sīn, then a long wāw, then qāf.'],
    ],
    notes: 'ق and the long vowel و (sūq) come from F1-L03; م and the fatḥa (mawz) from F1-L04. Ask: which word has a long vowel?',
  },
  card: {
    title: 'Reading card — the market labels', ar: 'بِطَاقَةُ القِرَاءَةِ', you: 'the reader', them: 'the stall keeper',
    mix: 'powerful sounds and long vowels (F1-L03) with the last six letters and the four short-vowel marks (F1-L04)',
    tasks: [
      { ex: 'تَ · طَ · سَ · صَ', task: 'Read them: plain, then powerful.', plan: 'ta · ṭa · sa · ṣa', model: 'تَ · طَ · سَ · صَ', modelEn: 'ta (plain) · ṭa (powerful) · sa (plain) · ṣa (powerful).' },
      { ex: 'بَا · بُو · بِي', task: 'Read the three long vowels.', plan: 'bā · bū · bī', model: 'بَا · بُو · بِي', modelEn: 'bā · bū · bī — ا و ي make the vowel long.' },
      { ex: 'قَلَمٌ · مَوْزٌ · نَهْرٌ', task: 'Read the three labels.', plan: 'qalam · mawz · nahr', model: 'قَلَمٌ · مَوْزٌ · نَهْرٌ', modelEn: 'pen · bananas · river.' },
      { ex: 'كِتَابٌ · طَبِيبٌ', task: 'Read both; say where the long vowels are.', plan: 'ā in kitāb · ī in ṭabīb', model: 'كِتَابٌ · طَبِيبٌ', modelEn: 'kitāb (long ā) · ṭabīb (long ī).' },
      { unexpected: true, ex: 'بِنْتٌ', task: 'Which mark means “no vowel”? Point to it.', plan: 'a small circle', model: 'نْ — سُكُونٌ', modelEn: 'the sukūn on the nūn: bint.' },
    ],
  },
  talk: {
    title: 'Label race', ar: 'سِبَاقُ اللَّافِتَاتِ',
    text: 'In 30 seconds, read as many labels as you can from the two Step 1 word slides — letters, then words. The partner counts the correct ones and listens for the powerful sounds and the long vowels.',
    routes: { core: 'Read the fourteen new letter names.', develop: 'Read the sounds with a fatḥa, then four words.', stretch: 'Read every word, then say which ones have a long vowel.' },
  },
  task: {
    title: 'Copy, listen and write: the market labels', ar: 'أَكْتُبُ لَافِتَاتِ السُّوقِ',
    text: 'In your book: • copy the fourteen new letters from both lessons, right to left • copy six market labels, three from each lesson • DICTATION: your buddy reads five sounds or words — write them without looking, with the marks • underline every long vowel.',
    range: [10, 50],
    phrases: [['ط · ض · ص · ظ', 'the powerful (emphatic) sounds'], ['بَا · بُو · بِي', 'long ā · ū · ī'], ['ـَ ـُ ـِ ـْ', 'fatḥa · ḍamma · kasra · sukūn'], ['ل م ن ه و ي', 'the last six letters']],
    coreFrames: [
      { ar: 'ض ط ظ ع غ ف ق ك', en: 'Copy the eight letters of lesson 1.' },
      { ar: 'ل م ن ه و ي', en: 'Copy the six letters of lesson 2.' },
      { ar: 'كِتَابٌ ______ سُوقٌ ______', en: 'Copy two labels from lesson 1.' },
      { ar: 'قَلَمٌ ______ مَوْزٌ ______', en: 'Copy two labels from lesson 2.' },
    ],
    developFrames: [
      { ar: 'إِمْلَاءٌ: ١ ______ ٢ ______ ٣ ______', en: 'Dictation: write it with the marks.' },
      { ar: 'طَبِيبٌ ______ وَلَدٌ ______', en: 'Copy, then underline the long vowel.' },
    ],
    bank: ['ض ط ظ', 'ع غ · ف ق ك', 'ل م ن ه و ي', 'بَا · بُو · بِي', 'كِتَابٌ · سُوقٌ', 'طَبِيبٌ · صَدِيقٌ', 'قَلَمٌ · مَوْزٌ', 'بِنْتٌ · وَلَدٌ'],
    model: {
      text: `ض ط ظ ع غ ف ق ك ل م ن ه و ي
كِتَابٌ · سُوقٌ · طَبِيبٌ · قَلَمٌ · مَوْزٌ · وَلَدٌ
إِمْلَاءٌ: طَ · بُو · نَهْرٌ · بِنْتٌ · صَدِيقٌ`,
      en: 'Line 1: the fourteen new letters. Line 2: six market labels (three from each lesson). Line 3: a dictation of five items with marks. Long vowels: كِتَاب (ā) · سُوق (ū) · طَبِيب (ī) · صَدِيق (ī).',
      find: ['ض ط ظ', 'سُوقٌ', 'مَوْزٌ', 'صَدِيقٌ'],
    },
  },
});
