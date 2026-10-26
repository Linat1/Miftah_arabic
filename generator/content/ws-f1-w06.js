'use strict';
/* Apply Workshop · F1-W06 · F1-L11 (Arabic around us) + F1-L12 (F1 review and assessment). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f1-w06', pair: ['f1-l11', 'f1-l12'], allowTatweel: true,
  title: 'Our Arabic-Around-Us Showcase', arShort: 'مَعْرِضُ العَرَبِيَّةِ حَوْلَنَا',
  focus: 'Students use all of F1 for one real purpose: they build a class showcase of Arabic they find in everyday life — a food packet, a shop sign, a screen, a calligraphy panel — read each item (with or without vowels), explain the script, and copy and label their exhibits.',
  sortTitle: 'Script skill or Arabic around us?', sortCats: ['Script: letters and marks', 'Arabic around us'],
  sort: [
    { ar: 'ب ت ث', cat: 0 }, { ar: 'ـعـ', cat: 0 }, { ar: 'شَدَّةٌ', cat: 0 }, { ar: 'ا د ذ ر ز و', cat: 0 },
    { ar: 'مخبز', cat: 1 }, { ar: 'الفُصْحَى', cat: 1 }, { ar: 'خَطُّ الثُّلُثِ', cat: 1 }, { ar: 'وصول', cat: 1 },
  ],
  dialogue: {
    title: 'Exhibit number one', ar: 'المَعْرُوضُ الأَوَّلُ',
    lines: [
      ['A', 'مَا هٰذَا؟', 'What is this?'],
      ['B', 'هٰذِهِ لَافِتَةُ مَخْبَزٍ: مخبز.', 'This is a bakery sign: (bakery, no vowels).'],
      ['A', 'هَلْ فِيهَا حَرَكَاتٌ؟', 'Does it have vowel marks?'],
      ['B', 'لَا، اللَّافِتَاتُ عَادَةً بِدُونِ حَرَكَاتٍ: مَخْبَزٌ.', 'No, signs are usually without vowel marks: makhbaz.'],
      ['A', 'وَهٰذِهِ؟', 'And this one?'],
      ['B', 'هٰذَا خَطُّ الثُّلُثِ، كَبِيرٌ وَجَمِيلٌ.', 'This is Thuluth script — large and beautiful.'],
    ],
    notes: 'Signs, calligraphy styles and “which script?” come from F1-L11; reading without vowels, breakers and marks revise F1-L12. Invite students to bring (or show on screen) one real item with Arabic on it.',
  },
  card: {
    title: 'Reading card — the showcase exhibits', ar: 'بِطَاقَةُ القِرَاءَةِ', you: 'the guide', them: 'a visitor to the showcase',
    mix: 'Arabic in everyday life and calligraphy styles (F1-L11) with every F1 script skill under review (F1-L12)',
    tasks: [
      { ex: 'مخبز', task: 'Read the sign; give the vowelled form.', plan: 'a shop sign', model: 'مَخْبَزٌ', modelEn: 'makhbaz — bakery.' },
      { ex: 'وصول · مغادرة', task: 'Where do you see these words?', plan: 'an airport screen', model: 'وُصُولٌ · مُغَادَرَةٌ', modelEn: 'arrivals · departures — on an airport screen.' },
      { ex: 'قِطَّةٌ · وَرْدٌ', task: 'Read both; name one mark and one breaker.', plan: 'shadda · breakers', model: 'قِطَّةٌ — ـّ · وَرْدٌ — و ر د', modelEn: 'qiṭṭa has a shadda; ward has three breakers.' },
      { ex: '١٢ · ٢١', task: 'Read both numbers — careful with the order!', plan: 'left to right', model: '١٢ · ٢١', modelEn: 'twelve · twenty-one.' },
      { unexpected: true, ex: 'الشَّمْسُ · القَمَرُ', task: 'Read both; which one has a sun letter?', plan: 'is the l silent?', model: 'الشَّمْسُ', modelEn: 'ash-shams — ش is a sun letter.' },
    ],
  },
  talk: {
    title: 'Showcase tour race', ar: 'جَوْلَةُ المَعْرِضِ',
    text: 'In 30 seconds, read as many showcase items as you can from the Step 1 slides and the reading card: letters, vowelled words, signs without vowels and numbers. The partner counts the correct ones.',
    routes: { core: 'Read ten letters and two words.', develop: 'Read four vowelled words and two signs.', stretch: 'Read every item and say which script style or mark it shows.' },
  },
  task: {
    title: 'Copy, label and write: my exhibits', ar: 'أَكْتُبُ مَعْرُوضَاتِي',
    text: 'In your book: • copy three showcase items — a sign without vowels, a vowelled word and a number • label each one: where you see it, and one script feature (a mark, a breaker, a position) • DICTATION: your buddy reads four items from the F1 review — write them without looking • check with a buddy and fix one thing.',
    range: [8, 50],
    phrases: [['مخبز · مَخْبَزٌ', 'a sign · the same word with vowels'], ['النَّسْخُ · الرُّقْعَةُ · الثُّلُثُ', 'three calligraphy styles'], ['الفُصْحَى · لَهْجَةٌ', 'standard Arabic · a dialect'], ['ـّ · ـٌ · آ · ء', 'shadda · tanwīn · madda · hamza']],
    coreFrames: [
      { ar: 'مخبز ← مَخْبَزٌ ______', en: 'Copy the sign and its vowelled form.' },
      { ar: 'وصول ← وُصُولٌ ______', en: 'Copy the sign and its vowelled form.' },
      { ar: 'قِطَّةٌ · وَرْدٌ ______', en: 'Copy two vowelled words.' },
      { ar: '١٢ · ٢١ ______', en: 'Copy the two numbers.' },
    ],
    developFrames: [
      { ar: 'إِمْلَاءٌ: ١ ______ ٢ ______ ٣ ______', en: 'Dictation: four review items.' },
      { ar: 'الشَّمْسُ ______ القَمَرُ ______', en: 'Copy, then circle the sun letter.' },
    ],
    bank: ['مخبز · مَخْبَزٌ', 'وصول · مغادرة', 'أخبار · بحث', 'قِطَّةٌ · وَرْدٌ', 'سُؤَالٌ · مُعَلِّمٌ', 'الشَّمْسُ · القَمَرُ', '١٢ · ١٥ · ٢١', 'النَّسْخُ · الثُّلُثُ'],
    model: {
      text: `مخبز ← مَخْبَزٌ · وصول ← وُصُولٌ · ١٥
قِطَّةٌ · وَرْدٌ · الشَّمْسُ
إِمْلَاءٌ: سُؤَالٌ · مُعَلِّمٌ · مستشفى · ٢١`,
      en: 'Line 1: two signs with their vowelled forms, and a number — labels: a bakery sign (shop), an airport screen, a price. Line 2: three vowelled words — a shadda in قِطَّة, three breakers in وَرْد, a sun letter in الشَّمْس. Line 3: a dictation of four review items.',
      find: ['مَخْبَزٌ', 'وُصُولٌ', 'الشَّمْسُ', 'سُؤَالٌ'],
    },
  },
});
