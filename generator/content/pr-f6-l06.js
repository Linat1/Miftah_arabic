'use strict';
/* Practice Room · F6-L06 · Shopping in town — prices and comparisons. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f6-l06',
  arShort: 'التَّسَوُّقُ فِي المَدِينَةِ',
  grammar: 'kam thamanuhu (m. item) / kam thamanuhā (f. item)?; rakhīṣun / ghālin (ghāliya); arkhaṣu min / aghlā min; urīdu an ashtariya …; hal ʿindakum …?; naqdan / bi-l-biṭāqa; khaṣm',
  focus: 'Students run their own speaking and writing practice shopping in town: say the shopping words, act a short shop dialogue, answer price question cards, do a role-play card buying a present, give a 30-second talk, then build, fix and write a short comparison of two shops.',
  words1: 'Prices and paying', words2: 'Comparing and asking',
  dialogue: {
    title: 'How much is it?', ar: 'كَمْ ثَمَنُهُ؟',
    lines: [
      ['A', 'أُرِيدُ أَنْ أَشْتَرِيَ هٰذَا القَمِيصَ. كَمْ ثَمَنُهُ؟', 'I want to buy this shirt. How much is it?'],
      ['B', 'ثَمَنُهُ خَمْسَةَ عَشَرَ جُنَيْهًا.', 'It costs fifteen pounds.'],
      ['A', 'وَهٰذِهِ الحَقِيبَةُ؟ كَمْ ثَمَنُهَا؟', 'And this bag? How much is it?'],
      ['B', 'ثَمَنُهَا عِشْرُونَ جُنَيْهًا. هِيَ أَغْلَى مِنَ القَمِيصِ.', 'It costs twenty pounds. It is more expensive than the shirt.'],
      ['A', 'هَلْ هُنَاكَ خَصْمٌ؟', 'Is there a discount?'],
      ['B', 'نَعَمْ، خَصْمٌ عَشَرَةٌ فِي المِئَةِ. هَلْ تَدْفَعُ نَقْدًا أَمْ بِالبِطَاقَةِ؟', 'Yes, ten per cent off. Are you paying cash or by card?'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: “sell” real objects from your room — ثَمَنُهُ for masculine, ثَمَنُهَا for feminine.',
  },
  questions: [
    { q: 'كَمْ ثَمَنُ هٰذَا الكِتَابِ؟ (8 £)', en: 'How much is this book? (£8)', start: 'ثَمَنُهُ ثَمَانِيَةُ جُنَيْهَاتٍ', more: '… وَهُوَ رَخِيصٌ' },
    { q: 'كَمْ ثَمَنُ هٰذِهِ السَّاعَةِ؟ (40 £)', en: 'How much is this watch? (£40)', start: 'ثَمَنُهَا أَرْبَعُونَ جُنَيْهًا', more: '… وَهِيَ غَالِيَةٌ' },
    { q: 'أَيْنَ تَتَسَوَّقُ عَادَةً؟', en: 'Where do you usually shop?', start: 'أَتَسَوَّقُ فِي …', more: '… لِأَنَّهُ أَرْخَصُ مِنْ …' },
    { q: 'هَلْ تَدْفَعُ نَقْدًا أَمْ بِالبِطَاقَةِ؟', en: 'Do you pay cash or by card?', start: 'أَدْفَعُ …', more: '… لِأَنَّ …' },
    { q: 'مَاذَا تُرِيدُ أَنْ تَشْتَرِيَ هٰذَا الأُسْبُوعَ؟', en: 'What do you want to buy this week?', start: 'أُرِيدُ أَنْ أَشْتَرِيَ …', more: '… مِنْ …' },
  ],
  card: {
    title: 'Role-play card — buying a present for your mother', ar: 'هَدِيَّةٌ لِأُمِّي', you: 'a customer', them: 'the shop assistant',
    tasks: [
      { ex: 'أَهْلًا! كَيْفَ أُسَاعِدُكَ؟', task: 'Say what you want.', plan: 'كَيْفَ ← أُرِيدُ أَنْ أَشْتَرِيَ هَدِيَّةً لِ…', model: 'أُرِيدُ أَنْ أَشْتَرِيَ هَدِيَّةً لِأُمِّي.', modelEn: 'I want to buy a present for my mother.' },
      { ex: 'عِنْدَنَا هٰذَا الوِشَاحُ وَهٰذِهِ السَّاعَةُ.', task: 'Ask the price of the scarf (m.).', plan: 'اسْأَلْ ← كَمْ ثَمَنُ … ؟ ← كَمْ ثَمَنُهُ', model: 'كَمْ ثَمَنُ الوِشَاحِ؟', modelEn: 'How much is the scarf?' },
      { ex: 'ثَمَنُهُ عَشَرَةُ جُنَيْهَاتٍ، وَالسَّاعَةُ ثَلَاثُونَ.', task: 'Compare + choose.', plan: 'قَارِنْ ← الوِشَاحُ أَرْخَصُ … ، سَآخُذُ …', model: 'الوِشَاحُ أَرْخَصُ مِنَ السَّاعَةِ، سَآخُذُهُ.', modelEn: 'The scarf is cheaper than the watch — I’ll take it.' },
      { ex: 'كَيْفَ تَدْفَعُ؟', task: 'Say how + ask for a bag.', plan: 'كَيْفَ ← أَدْفَعُ … ، وَهَلْ عِنْدَكُمْ …؟', model: 'أَدْفَعُ نَقْدًا. هَلْ عِنْدَكُمْ كِيسُ هَدَايَا؟', modelEn: 'I’ll pay cash. Do you have a gift bag?' },
    ],
    girl: 'أُسَاعِدُكِ · تَدْفَعِينَ',
    notes: 'Language: thamanuhu / thamanuhā by item gender · arkhaṣu min · urīdu an ashtariya.',
  },
  talk: {
    title: '30 seconds: a shopping trip in town', ar: 'التَّسَوُّقُ فِي المَدِينَةِ',
    text: 'In 30 seconds, describe a shopping trip: where you went, two things you looked at, their prices, which was cheaper or more expensive, and how you paid.',
    routes: {
      core: 'Two items with their prices.',
      develop: 'Add a comparison: أَرْخَصُ / أَغْلَى مِنْ …',
      stretch: 'Add a discount and how you paid.',
    },
  },
  builder: [
    { en: 'How much is this jacket?', cols: [['كَمْ ثَمَنُ', 'كَمْ ثَمَنًا'], ['هٰذِهِ', 'هٰذَا'], ['السُّتْرَةِ؟', 'السُّتْرَةُ؟']], key: [0, 0, 0], why: 'سُتْرَةٌ (f.) → هٰذِهِ; كَمْ ثَمَنُ + genitive.' },
    { en: 'The market is cheaper than the shopping centre.', cols: [['السُّوقُ', 'السُّوقَ'], ['أَرْخَصُ', 'رَخِيصَةٌ'], ['مِنَ المَرْكَزِ التِّجَارِيِّ.', 'المَرْكَزَ التِّجَارِيَّ.']], key: [0, 0, 0], why: 'Comparative أَرْخَصُ + مِنْ + genitive.' },
    { en: 'I want to buy new trainers.', cols: [['أُرِيدُ', 'أُرِيدُ أَنَا أَنْ'], ['أَنْ أَشْتَرِيَ', 'أَنْ أَشْتَرِي'], ['حِذَاءً رِيَاضِيًّا جَدِيدًا.', 'حِذَاءٌ رِيَاضِيٌّ جَدِيدٌ.']], key: [0, 0, 0], why: 'أُرِيدُ أَنْ + verb in -a (أَشْتَرِيَ); object → -an.' },
  ],
  errors: [
    { wrong: 'كَمْ ثَمَنُهُ؟', hint: 'About a bag — حَقِيبَةٌ is feminine.', right: 'كَمْ ثَمَنُهَا؟', why: 'Feminine item → ثَمَنُهَا.' },
    { wrong: 'الحَقِيبَةُ أَغْلَى عَنِ القَمِيصِ.', hint: 'more expensive THAN …', right: 'الحَقِيبَةُ أَغْلَى مِنَ القَمِيصِ.', why: 'Comparative + مِنْ.' },
    { wrong: 'ثَمَنُهُ ثَلَاثُونَ جُنَيْهَاتٍ.', hint: '11–99 + …', right: 'ثَمَنُهُ ثَلَاثُونَ جُنَيْهًا.', why: '11–99 → singular accusative جُنَيْهًا.' },
  ],
  task: {
    title: 'Two shops compared', ar: 'مُقَارَنَةُ مَحَلَّيْنِ',
    text: 'Write a short text (about 40–60 words) for a town guide comparing two shops or markets. Include: • the two places • two items and their prices • which is cheaper / more expensive • a discount or how you can pay • where you prefer to shop and why.',
    phrases: [['فِي … ثَمَنُ … جُنَيْهًا', 'in … the price of … is £…'], ['… أَرْخَصُ مِنْ … · … أَغْلَى مِنْ …', '… cheaper than … · … more expensive than …'], ['يُمْكِنُ أَنْ تَدْفَعَ نَقْدًا أَوْ بِالبِطَاقَةِ', 'you can pay cash or by card'], ['أُفَضِّلُ … لِأَنَّ …', 'I prefer … because …']],
    coreFrames: [
      { ar: 'فِي ______ ثَمَنُ ______ ______ جُنَيْهًا.', en: 'In … the … costs £…' },
      { ar: 'وَفِي ______ ثَمَنُهُ / ثَمَنُهَا ______ .', en: 'And in … it costs …' },
      { ar: '______ أَرْخَصُ مِنْ ______ .', en: '… is cheaper than …' },
      { ar: 'أُفَضِّلُ ______ .', en: 'I prefer …' },
    ],
    developFrames: [
      { ar: 'هُنَاكَ خَصْمٌ ______ ، وَيُمْكِنُ أَنْ تَدْفَعَ ______ .', en: 'There is a … discount, and you can pay …' },
      { ar: 'أُفَضِّلُ ______ لِأَنَّ ______ .', en: 'I prefer … because …' },
    ],
    bank: ['كَمْ ثَمَنُهُ؟ · كَمْ ثَمَنُهَا؟', 'رَخِيصٌ · غَالٍ', 'أَرْخَصُ مِنْ · أَغْلَى مِنْ', 'خَصْمٌ', 'نَقْدًا · بِالبِطَاقَةِ', 'أُرِيدُ أَنْ أَشْتَرِيَ', 'سُوقٌ · مَرْكَزٌ تِجَارِيٌّ', 'جُنَيْهٌ · جُنَيْهَاتٌ'],
    model: {
      text: 'فِي مَدِينَتِي سُوقٌ قَدِيمٌ وَمَرْكَزٌ تِجَارِيٌّ حَدِيثٌ. فِي السُّوقِ ثَمَنُ القَمِيصِ عَشَرَةُ جُنَيْهَاتٍ، وَفِي المَرْكَزِ ثَمَنُهُ عِشْرُونَ جُنَيْهًا. الحَقِيبَةُ فِي السُّوقِ أَرْخَصُ أَيْضًا. لٰكِنْ فِي المَرْكَزِ هُنَاكَ خَصْمٌ يَوْمَ الجُمُعَةِ، وَيُمْكِنُ أَنْ تَدْفَعَ بِالبِطَاقَةِ. أُفَضِّلُ السُّوقَ، لِأَنَّهُ أَرْخَصُ وَأَجْمَلُ، وَالبَائِعُونَ لُطَفَاءُ.',
      en: '“In my town there is an old market and a modern shopping centre. At the market a shirt costs ten pounds, and at the centre it costs twenty. The bag is cheaper at the market too. But at the centre there is a discount on Friday, and you can pay by card. I prefer the market, because it is cheaper and nicer, and the sellers are kind.”',
      find: ['ثَمَنُ القَمِيصِ عَشَرَةُ جُنَيْهَاتٍ', 'أَرْخَصُ أَيْضًا', 'هُنَاكَ خَصْمٌ', 'أُفَضِّلُ السُّوقَ'],
    },
  },
  checkCore: 'ask and give prices with ثَمَنُهُ / ثَمَنُهَا correctly?',
  checkDevelop: 'compare with أَرْخَصُ / أَغْلَى مِنْ and get the number + جُنَيْهًا / جُنَيْهَاتٍ right?',
});
