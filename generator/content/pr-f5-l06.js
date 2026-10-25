'use strict';
/* Practice Room · F5-L06 · Menus, prices and dishes. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f5-l06',
  arShort: 'القَائِمَةُ وَالأَسْعَارُ',
  grammar: 'menu sections; prices with numbers + currency (junayhāt · dīnār · dirham); rakhīṣ / ghālin; al-majmūʿu; yatakawwanu / tatakawwanu min … (a dish consists of …)',
  focus: 'Students run their own speaking and writing practice with menus: say the menu words, read a menu dialogue, answer price questions, do a role-play card ordering for the family and totalling the bill, give a 30-second dish description, then build, fix and write a menu description of a favourite dish.',
  words1: 'Menu sections and prices', words2: 'Dishes from the Arab world',
  dialogue: {
    title: 'Reading the menu', ar: 'نَقْرَأُ القَائِمَةَ',
    lines: [
      ['A', 'مَاذَا فِي قَائِمَةِ المُقَبِّلَاتِ؟', 'What is on the starters menu?'],
      ['B', 'فِيهَا حُمُّصٌ وَفَلَافِلُ وَتَبُّولَةٌ.', 'There is hummus, falafel and tabbouleh.'],
      ['A', 'كَمْ سِعْرُ الحُمُّصِ؟', 'How much is the hummus?'],
      ['B', 'سِعْرُهُ ثَلَاثَةُ جُنَيْهَاتٍ، وَهُوَ رَخِيصٌ.', 'It costs three pounds, and it is cheap.'],
      ['A', 'وَمَا الكَبْسَةُ؟', 'And what is kabsa?'],
      ['B', 'هِيَ طَبَقٌ سُعُودِيٌّ يَتَكَوَّنُ مِنَ الأَرُزِّ وَالدَّجَاجِ وَالبَهَارَاتِ. سِعْرُهَا عَشَرَةُ جُنَيْهَاتٍ.', 'It is a Saudi dish made of rice, chicken and spices. It costs ten pounds.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: describe a dish from YOUR family’s country with يَتَكَوَّنُ مِنْ …',
  },
  questions: [
    { q: 'كَمْ سِعْرُ الفَلَافِلِ؟ (2 £)', en: 'How much is the falafel? (£2)', start: 'سِعْرُهَا جُنَيْهَانِ', more: '… وَهِيَ رَخِيصَةٌ' },
    { q: 'مَا الطَّبَقُ الرَّئِيسِيُّ الَّذِي تُرِيدُهُ؟', en: 'Which main dish do you want?', start: 'أُرِيدُ …', more: '… لِأَنَّهُ / لِأَنَّهَا …' },
    { q: 'مِمَّ يَتَكَوَّنُ الحُمُّصُ؟', en: 'What is hummus made of?', start: 'يَتَكَوَّنُ مِنَ …', more: '… وَزَيْتِ الزَّيْتُونِ' },
    { q: 'هَلْ هٰذَا المَطْعَمُ غَالٍ؟', en: 'Is this restaurant expensive?', start: 'نَعَمْ / لَا، هُوَ …', more: '… لِأَنَّ الأَسْعَارَ …' },
    { q: 'كَمِ المَجْمُوعُ؟ (3 £ + 7 £)', en: 'What is the total? (£3 + £7)', start: 'المَجْمُوعُ عَشَرَةُ جُنَيْهَاتٍ', more: '…' },
  ],
  card: {
    title: 'Role-play card — ordering for the family and paying', ar: 'أَطْلُبُ لِعَائِلَتِي', you: 'the oldest child ordering', them: 'the waiter',
    tasks: [
      { ex: 'مَاذَا تُرِيدُونَ مِنَ المُقَبِّلَاتِ؟', task: 'Order two starters.', plan: 'مَاذَا ← نُرِيدُ … وَ…', model: 'نُرِيدُ حُمُّصًا وَتَبُّولَةً، مِنْ فَضْلِكَ.', modelEn: 'We would like hummus and tabbouleh, please.' },
      { ex: 'وَالطَّبَقُ الرَّئِيسِيُّ؟', task: 'Order a main dish for four.', plan: 'الرَّئِيسِيُّ ← أَرْبَعَةُ أَطْبَاقِ …', model: 'أَرْبَعَةُ أَطْبَاقِ كَبْسَةٍ، مِنْ فَضْلِكَ.', modelEn: 'Four plates of kabsa, please.' },
      { ex: 'هَلْ تُرِيدُونَ حَلْوَيَاتٍ؟', task: 'Ask the price first.', plan: 'هَلْ ← كَمْ سِعْرُ …؟', model: 'كَمْ سِعْرُ البَقْلَاوَةِ؟', modelEn: 'How much is the baklava?' },
      { ex: 'المَجْمُوعُ خَمْسُونَ جُنَيْهًا.', task: 'React and pay.', plan: 'المَجْمُوعُ ← هٰذَا … ، أَدْفَعُ …', model: 'هٰذَا مَعْقُولٌ. أَدْفَعُ بِالبِطَاقَةِ، شُكْرًا.', modelEn: 'That’s reasonable. I’ll pay by card, thank you.' },
    ],
    girl: 'to a waitress: مِنْ فَضْلِكِ',
    notes: 'Language: plural ordering (nurīdu) · numbers + plurals (arbaʿatu aṭbāqin) · kam siʿru + genitive · prices 11+ → singular accusative (khamsūna junayhan).',
  },
  talk: {
    title: '30 seconds: a dish I love', ar: 'طَبَقٌ أُحِبُّهُ',
    text: 'Describe one dish for 30 seconds: its name and country, what it is made of, its price in a restaurant, and why you love it.',
    routes: {
      core: 'Name + country + two ingredients.',
      develop: 'Add يَتَكَوَّنُ / تَتَكَوَّنُ مِنْ … and a price.',
      stretch: 'Add taste adjectives that agree and when your family eats it.',
    },
  },
  builder: [
    { en: 'The soup costs four pounds.', cols: [['سِعْرُ الشُّورْبَةِ', 'سِعْرُ الشُّورْبَةُ'], ['أَرْبَعَةُ', 'أَرْبَعُ'], ['جُنَيْهَاتٍ.', 'جُنَيْهًا.']], key: [0, 0, 0], why: 'جُنَيْهٌ is masculine → أَرْبَعَةُ; 3–10 + plural genitive جُنَيْهَاتٍ.' },
    { en: 'Kabsa is made of rice and meat.', cols: [['الكَبْسَةُ', 'الكَبْسَةَ'], ['تَتَكَوَّنُ', 'يَتَكَوَّنُ'], ['مِنَ الأَرُزِّ وَاللَّحْمِ.', 'الأَرُزَّ وَاللَّحْمَ.']], key: [0, 0, 0], why: 'Kabsa (f.) → تَتَكَوَّنُ مِنْ + genitive.' },
    { en: 'The total is twenty pounds.', cols: [['المَجْمُوعُ', 'المَجْمُوعَ'], ['عِشْرُونَ', 'عِشْرِينَ'], ['جُنَيْهًا.', 'جُنَيْهَاتٍ.']], key: [0, 0, 0], why: '11–99 + singular accusative: عِشْرُونَ جُنَيْهًا.' },
  ],
  errors: [
    { wrong: 'سِعْرُهُ عَشَرَةُ جُنَيْهًا.', hint: '3–10 + plural.', right: 'سِعْرُهُ عَشَرَةُ جُنَيْهَاتٍ.', why: '3–10 → plural genitive: جُنَيْهَاتٍ.' },
    { wrong: 'الفَلَافِلُ غَالٍ جِدًّا.', hint: 'فَلَافِلُ is a plural (non-human).', right: 'الفَلَافِلُ غَالِيَةٌ جِدًّا.', why: 'Non-human plural → feminine singular.' },
    { wrong: 'الحُمُّصُ تَتَكَوَّنُ مِنَ الحِمَّصِ.', hint: 'حُمُّصٌ is masculine.', right: 'الحُمُّصُ يَتَكَوَّنُ مِنَ الحِمَّصِ وَالطَّحِينَةِ.', why: 'Masculine → يَتَكَوَّنُ.' },
  ],
  task: {
    title: 'A menu card for my favourite dish', ar: 'بِطَاقَةُ طَبَقِي المُفَضَّلِ',
    text: 'Write a menu card (about 40–60 words) for a class “food from around the world” day. Include: • the name of the dish and its country • what it is made of (يَتَكَوَّنُ / تَتَكَوَّنُ مِنْ) • its taste • its price • a drink and a dessert to go with it, with prices.',
    phrases: [['… طَبَقٌ … مِنْ …', '… is a … dish from …'], ['يَتَكَوَّنُ / تَتَكَوَّنُ مِنْ …', 'it is made of …'], ['سِعْرُهُ / سِعْرُهَا … جُنَيْهَاتٍ', 'it costs … pounds'], ['المَجْمُوعُ …', 'the total is …']],
    coreFrames: [
      { ar: '______ طَبَقٌ ______ مِنْ ______ .', en: '… is a … dish from …' },
      { ar: 'يَتَكَوَّنُ / تَتَكَوَّنُ مِنْ ______ وَ ______ .', en: 'It is made of … and …' },
      { ar: 'هُوَ / هِيَ ______ جِدًّا.', en: 'It is very …' },
      { ar: 'سِعْرُهُ / سِعْرُهَا ______ .', en: 'It costs …' },
    ],
    developFrames: [
      { ar: 'مَعَهُ / مَعَهَا: ______ (______ جُنَيْهَاتٍ).', en: 'With it: … (… pounds).' },
      { ar: 'المَجْمُوعُ ______ ، وَهٰذَا ______ .', en: 'The total is …, and that is …' },
    ],
    bank: ['مُقَبِّلَاتٌ', 'طَبَقٌ رَئِيسِيٌّ', 'حَلْوَيَاتٌ · مَشْرُوبَاتٌ', 'يَتَكَوَّنُ · تَتَكَوَّنُ مِنْ', 'سِعْرٌ · المَجْمُوعُ', 'جُنَيْهَاتٌ · جُنَيْهًا', 'رَخِيصٌ · غَالٍ', 'لَذِيذٌ · حَارٌّ'],
    model: {
      text: 'المَقْلُوبَةُ طَبَقٌ فِلَسْطِينِيٌّ مَشْهُورٌ. تَتَكَوَّنُ مِنَ الأَرُزِّ وَالدَّجَاجِ وَالبَاذِنْجَانِ وَالبَهَارَاتِ. هِيَ لَذِيذَةٌ جِدًّا وَلَيْسَتْ حَارَّةً. سِعْرُهَا ثَمَانِيَةُ جُنَيْهَاتٍ. مَعَهَا: لَبَنٌ بِالخِيَارِ (جُنَيْهَانِ)، وَبَعْدَهَا كُنَافَةٌ (أَرْبَعَةُ جُنَيْهَاتٍ). المَجْمُوعُ أَرْبَعَةَ عَشَرَ جُنَيْهًا، وَهٰذَا رَخِيصٌ لِوَجْبَةٍ كَبِيرَةٍ!',
      en: '“Maqluba is a famous Palestinian dish. It is made of rice, chicken, aubergine and spices. It is very delicious and not spicy. It costs eight pounds. With it: yoghurt with cucumber (two pounds), and after it kunafa (four pounds). The total is fourteen pounds — cheap for a big meal!”',
      find: ['طَبَقٌ فِلَسْطِينِيٌّ', 'تَتَكَوَّنُ مِنَ', 'سِعْرُهَا ثَمَانِيَةُ جُنَيْهَاتٍ', 'المَجْمُوعُ'],
    },
  },
  checkCore: 'give the dish, its ingredients and a price?',
  checkDevelop: 'use numbers + جُنَيْهَاتٍ / جُنَيْهًا correctly and يَتَكَوَّنُ / تَتَكَوَّنُ?',
});
