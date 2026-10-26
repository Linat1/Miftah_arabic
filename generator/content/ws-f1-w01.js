'use strict';
/* Apply Workshop · F1-W01 · F1-L01 (ا and the families ب ت ث · ج ح خ) + F1-L02 (د ذ ر ز س ش ص, breakers, sun / moon). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f1-w01', pair: ['f1-l01', 'f1-l02'], allowTatweel: true,
  title: 'Our Class Word Wall', arShort: 'جِدَارُ الكَلِمَاتِ',
  focus: 'Students use the first fourteen letters together: they sort letters by family and dots, read and build short words for a class word wall, spot the connection breakers and the sun letters, race to read the word wall and copy and take dictation of its words.',
  sort: [
    { ar: 'ب', cat: 0 }, { ar: 'ث', cat: 0 }, { ar: 'ح', cat: 0 }, { ar: 'تَاجٌ', cat: 0 },
    { ar: 'ذ', cat: 1 }, { ar: 'ش', cat: 1 }, { ar: 'ص', cat: 1 }, { ar: 'دَرْسٌ', cat: 1 },
  ],
  dialogue: {
    title: 'Which letter? Which family?', ar: 'أَيُّ حَرْفٍ؟',
    lines: [
      ['A', 'مَا هٰذَا الحَرْفُ؟ (ش)', 'What is this letter? (points to ش)'],
      ['B', 'هٰذَا شِينٌ — ثَلَاثُ نُقَاطٍ فَوْقَ.', 'This is shīn — three dots above.'],
      ['A', 'وَهٰذَا؟ (ث)', 'And this? (points to ث)'],
      ['B', 'هٰذَا ثَاءٌ — ثَلَاثُ نُقَاطٍ فَوْقَ أَيْضًا!', 'This is thāʾ — three dots above too!'],
      ['A', 'اقْرَأْ: بَحْرٌ.', 'Read: baḥr (sea).'],
      ['B', 'بَحْرٌ — بَاءٌ، حَاءٌ، رَاءٌ.', 'baḥr — bāʾ, ḥāʾ, rāʾ.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: A points to ANY letter from both lessons; B names it, says the dots, then reads a word with it.',
    notes: 'ث and the ب family come from F1-L01; ش, ر and the breakers from F1-L02. Ask: which two letters have three dots above? (ث · ش)',
  },
  card: {
    title: 'Reading card — the class word wall', ar: 'بِطَاقَةُ القِرَاءَةِ', you: 'the reader', them: 'the card holder',
    mix: 'letters, dots and first words from F1-L01 with the breakers and sun / moon letters from F1-L02',
    tasks: [
      { ex: 'بَ · تَ · ثَ · دَ · ذَ', task: 'Read the five sounds.', plan: 'ba · ta · tha · da · dha', model: 'بَ · تَ · ثَ · دَ · ذَ', modelEn: 'ba · ta · tha · da · dha — count the dots.' },
      { ex: 'بَابٌ · بَحْرٌ · خُبْزٌ', task: 'Read the three words; say one meaning.', plan: 'bāb · baḥr · khubz', model: 'بَابٌ · بَحْرٌ · خُبْزٌ', modelEn: 'door · sea · bread.' },
      { ex: 'دَرْسٌ', task: 'Which letter does not join to the next one?', plan: 'look for a gap', model: 'د — دَالٌ', modelEn: 'dāl — a connection breaker.' },
      { ex: 'الشَّجَرُ · الحَبُّ', task: 'Read both; which has a sun letter?', plan: 'ash- / al-', model: 'الشَّجَرُ', modelEn: 'ash-shajar — ش is a sun letter (the l is silent).' },
      { unexpected: true, ex: 'ج · ح · خ · ز', task: 'Point to the letter that is NOT in the ج family.', plan: 'shape, not dots', model: 'ز — زَايٌ', modelEn: 'zāy — a different shape (and a breaker).' },
    ],
  },
  talk: {
    title: 'Word-wall race', ar: 'سِبَاقُ الجِدَارِ',
    text: 'In 30 seconds, read the fourteen letters in order (names or sounds), then as many words from the two Step 1 word slides as you can. The partner counts the correct ones.',
    routes: { core: 'Read the fourteen letter names in order.', develop: 'Read the sounds, then four words.', stretch: 'Read all seven words, then say which letters in them are breakers.' },
  },
  task: {
    title: 'Copy, listen and write: our word wall', ar: 'أَكْتُبُ جِدَارَ الكَلِمَاتِ',
    text: 'In your book: • copy the fourteen letters in order, from right to left • copy six word-wall words, three from each lesson • DICTATION: your buddy reads five letters or words — write them without looking • circle the breakers in your words • label each letter in one word.',
    range: [10, 50],
    phrases: [['ب · ت · ث', 'one shape, 1 · 2 · 3 dots'], ['ج · ح · خ', 'dot below · no dot · dot above'], ['ا د ذ ر ز', 'they never join to the next letter'], ['الشَّمْسُ · القَمَرُ', 'sun letter · moon letter']],
    coreFrames: [
      { ar: 'ا ب ت ث ج ح خ', en: 'Copy the first seven letters.' },
      { ar: 'د ذ ر ز س ش ص', en: 'Copy the next seven letters.' },
      { ar: 'بَابٌ ______ تَاجٌ ______', en: 'Copy two words from lesson 1.' },
      { ar: 'دَرْسٌ ______ بَحْرٌ ______', en: 'Copy two words from lesson 2.' },
    ],
    developFrames: [
      { ar: 'إِمْلَاءٌ: ١ ______ ٢ ______ ٣ ______', en: 'Dictation: write what your buddy says.' },
      { ar: 'خُبْزٌ ______ شَجَرٌ ______', en: 'Copy, then circle the breakers.' },
    ],
    bank: ['ب ت ث', 'ج ح خ', 'د ذ · ر ز', 'س ش ص', 'بَابٌ · تَاجٌ', 'أَخٌ · حَبٌّ', 'دَرْسٌ · بَحْرٌ', 'خُبْزٌ · شَجَرٌ'],
    model: {
      text: `ا ب ت ث ج ح خ د ذ ر ز س ش ص
بَابٌ · تَاجٌ · أَخٌ · دَرْسٌ · بَحْرٌ · خُبْزٌ
إِمْلَاءٌ: ش · ذَ · حَبٌّ · سَبْتٌ · شَجَرٌ`,
      en: 'Line 1: the fourteen letters in order. Line 2: six word-wall words (three from each lesson). Line 3: a dictation of five items. Breakers in the words: ا in بَاب and تَاج · د and ر in دَرْس · ر in بَحْر · ز in خُبْز.',
      find: ['ا ب ت ث', 'دَرْسٌ', 'خُبْزٌ', 'شَجَرٌ'],
    },
  },
});
