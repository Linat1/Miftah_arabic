'use strict';
/* Apply Workshop · F6-W03 · F6-L05 (describing your town: advantages and disadvantages) + F6-L06 (shopping: prices and comparisons). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f6-w03', pair: ['f6-l05', 'f6-l06'],
  title: 'Market or Shopping Centre?', arShort: 'السُّوقُ أَمِ المَرْكَزُ التِّجَارِيُّ؟',
  focus: 'Students join a balanced view of the town with shopping and prices: they compare the old market and the new shopping centre (advantages, disadvantages, prices, cheaper / more expensive, how to pay), act a shopping scene and write a balanced shopping guide for their town.',
  dialogue: {
    title: 'Where shall we shop?', ar: 'أَيْنَ نَتَسَوَّقُ؟',
    lines: [
      ['A', 'أَيْنَ تَتَسَوَّقِينَ عَادَةً: فِي السُّوقِ أَمْ فِي المَرْكَزِ التِّجَارِيِّ؟', 'Where do you usually shop: in the market or in the shopping centre?'],
      ['B', 'فِي السُّوقِ، لِأَنَّهُ أَرْخَصُ مِنَ المَرْكَزِ التِّجَارِيِّ.', 'In the market, because it is cheaper than the shopping centre.'],
      ['A', 'كَمْ ثَمَنُ هٰذِهِ الحَقِيبَةِ فِي السُّوقِ؟', 'How much is this bag in the market?'],
      ['B', 'ثَمَنُهَا عَشَرَةُ جُنَيْهَاتٍ فَقَطْ، وَفِي المَرْكَزِ ثَلَاثُونَ جُنَيْهًا!', 'It costs only ten pounds, and in the centre thirty pounds!'],
      ['A', 'لٰكِنَّ السُّوقَ مُكْتَظٌّ وَصَاخِبٌ.', 'But the market is crowded and noisy.'],
      ['B', 'صَحِيحٌ. مِنْ مَزَايَا المَرْكَزِ أَنَّهُ حَدِيثٌ وَنَظِيفٌ، وَيُمْكِنُ أَنْ تَدْفَعَ بِالبِطَاقَةِ.', 'True. One advantage of the centre is that it is modern and clean, and you can pay by card.'],
    ],
    notes: 'Advantages and disadvantages (مِنْ مَزَايَا … أَنَّ · مُكْتَظٌّ · صَاخِبٌ) come from F6-L05; prices, ثَمَنُهُ / ثَمَنُهَا, comparatives and paying from F6-L06. Numbers: 3–10 + جُنَيْهَاتٍ · 11–99 + جُنَيْهًا.',
  },
  card: {
    title: 'Role-play card — shopping in town', ar: 'التَّسَوُّقُ فِي المَدِينَةِ', you: 'the shopper', them: 'the shop assistant',
    mix: 'prices, comparisons and paying (F6-L06) with opinions about places in town — advantages and disadvantages (F6-L05)',
    tasks: [
      { ex: 'أَهْلًا! مَاذَا تُرِيدُ؟', task: 'Say what you want to buy.', plan: 'مَاذَا ← أُرِيدُ أَنْ أَشْتَرِيَ …', model: 'أُرِيدُ أَنْ أَشْتَرِيَ قَمِيصًا أَزْرَقَ، مِنْ فَضْلِكَ.', modelEn: 'I want to buy a blue shirt, please.' },
      { ex: 'هٰذَا القَمِيصُ جَمِيلٌ.', task: 'Ask the price (masculine item).', plan: 'هٰذَا ← كَمْ ثَمَنُهُ؟', model: 'كَمْ ثَمَنُهُ؟', modelEn: 'How much is it?' },
      { ex: 'ثَمَنُهُ خَمْسَةٌ وَعِشْرُونَ جُنَيْهًا.', task: 'Compare with the market price.', plan: 'ثَمَنُهُ ← هُوَ أَغْلَى مِنْ … / فِي السُّوقِ أَرْخَصُ', model: 'هٰذَا غَالٍ! فِي السُّوقِ هُوَ أَرْخَصُ؛ ثَمَنُهُ خَمْسَةَ عَشَرَ جُنَيْهًا.', modelEn: 'That is expensive! In the market it is cheaper; it costs fifteen pounds.' },
      { ex: 'عِنْدَنَا خَصْمٌ اليَوْمَ: عِشْرُونَ جُنَيْهًا فَقَطْ.', task: 'Accept and say how you will pay.', plan: 'خَصْمٌ ← طَيِّبٌ … أَدْفَعُ نَقْدًا / بِالبِطَاقَةِ', model: 'طَيِّبٌ، شُكْرًا. أَدْفَعُ بِالبِطَاقَةِ.', modelEn: 'OK, thank you. I will pay by card.' },
      { unexpected: true, ex: 'مَا رَأْيُكَ فِي مَرْكَزِنَا التِّجَارِيِّ؟', task: 'Give one advantage and one disadvantage.', plan: 'مَا ← مِنْ مَزَايَاهُ أَنَّ … ، لٰكِنَّ …', model: 'مِنْ مَزَايَاهُ أَنَّهُ نَظِيفٌ وَحَدِيثٌ، لٰكِنَّ الأَسْعَارَ غَالِيَةٌ.', modelEn: 'One advantage is that it is clean and modern, but the prices are high.' },
    ],
    girl: 'مَاذَا تُرِيدِينَ؟ · مَا رَأْيُكِ …؟ — and for a feminine item: هٰذِهِ الحَقِيبَةُ … كَمْ ثَمَنُهَا؟',
  },
  talk: {
    title: 'Shopping in my town: a balanced view', ar: 'التَّسَوُّقُ فِي مَدِينَتِي',
    text: 'Talk for 30–45 seconds about shopping in your town: two places to shop, two items and their prices, which place is cheaper, one advantage and one disadvantage of each, and where you prefer to shop and why.',
    routes: {
      core: 'أَتَسَوَّقُ فِي … · ثَمَنُ … جُنَيْهًا',
      develop: 'Compare: … أَرْخَصُ مِنْ … · … أَغْلَى مِنْ …',
      stretch: 'Add مِنْ مَزَايَا … أَنَّ … · مِنْ عُيُوبِ … أَنَّ … and بِصِفَةٍ عَامَّةٍ …',
    },
    phrases: [['ثَمَنُهُ / ثَمَنُهَا … جُنَيْهًا', 'it costs … pounds'], ['أَرْخَصُ مِنْ · أَغْلَى مِنْ', 'cheaper than · more expensive than'], ['مِنْ مَزَايَا … أَنَّ …', 'one advantage of … is that …'], ['مِنْ عُيُوبِ … أَنَّ …', 'one disadvantage of … is that …']],
  },
  task: {
    title: 'A balanced shopping guide to my town', ar: 'دَلِيلُ التَّسَوُّقِ',
    text: 'Write a guide (about 45–65 words) for visitors comparing two places to shop in your town. Include: • the two places and a description of each • two items and their prices • which is cheaper or more expensive • one advantage and one disadvantage • how you can pay or a discount • where you prefer to shop and why.',
    range: [40, 85],
    phrases: [['فِي مَدِينَتِي سُوقٌ قَدِيمٌ وَمَرْكَزٌ تِجَارِيٌّ حَدِيثٌ', 'in my town there is an old market and a modern shopping centre'], ['فِي السُّوقِ ثَمَنُ … جُنَيْهَاتٍ', 'in the market … costs … pounds'], ['مِنْ مَزَايَا … أَنَّ … · مِنْ عُيُوبِهِ أَنَّ …', 'an advantage of … is that … · a disadvantage is that …'], ['بِصِفَةٍ عَامَّةٍ أُفَضِّلُ … لِأَنَّ …', 'overall I prefer … because …']],
    coreFrames: [
      { ar: 'فِي مَدِينَتِي ______ وَ ______ .', en: 'In my town there is … and …' },
      { ar: 'فِي السُّوقِ ثَمَنُ ______ ______ جُنَيْهَاتٍ.', en: 'In the market … costs … pounds.' },
      { ar: 'فِي المَرْكَزِ التِّجَارِيِّ ثَمَنُهُ ______ جُنَيْهًا.', en: 'In the shopping centre it costs … pounds.' },
      { ar: 'السُّوقُ أَرْخَصُ مِنَ ______ .', en: 'The market is cheaper than …' },
      { ar: 'أُفَضِّلُ ______ لِأَنَّ ______ .', en: 'I prefer … because …' },
    ],
    developFrames: [
      { ar: 'مِنْ مَزَايَا ______ أَنَّهُ ______ .', en: 'One advantage of … is that it is …' },
      { ar: 'وَمِنْ عُيُوبِهِ أَنَّهُ ______ .', en: 'And one disadvantage is that it is …' },
      { ar: 'يُمْكِنُ أَنْ تَدْفَعَ ______ .', en: 'You can pay …' },
    ],
    bank: ['سُوقٌ · مَرْكَزٌ تِجَارِيٌّ', 'ثَمَنُهُ · ثَمَنُهَا', 'رَخِيصٌ · غَالٍ', 'أَرْخَصُ مِنْ · أَغْلَى مِنْ', 'مُكْتَظٌّ · صَاخِبٌ', 'حَدِيثٌ · نَظِيفٌ', 'نَقْدًا · بِالبِطَاقَةِ', 'بِصِفَةٍ عَامَّةٍ'],
    model: {
      text: 'فِي مَدِينَتِي سُوقٌ قَدِيمٌ وَمَرْكَزٌ تِجَارِيٌّ حَدِيثٌ. فِي السُّوقِ ثَمَنُ الحَقِيبَةِ عَشَرَةُ جُنَيْهَاتٍ، وَفِي المَرْكَزِ ثَمَنُهَا ثَلَاثُونَ جُنَيْهًا. السُّوقُ أَرْخَصُ مِنَ المَرْكَزِ، وَهُوَ نَشِيطٌ وَجَمِيلٌ، لٰكِنَّهُ مُكْتَظٌّ وَصَاخِبٌ. مِنْ مَزَايَا المَرْكَزِ أَنَّهُ نَظِيفٌ وَآمِنٌ، وَيُمْكِنُ أَنْ تَدْفَعَ بِالبِطَاقَةِ، وَمِنْ عُيُوبِهِ أَنَّهُ غَالٍ. بِصِفَةٍ عَامَّةٍ أُفَضِّلُ السُّوقَ لِأَنَّ الأَسْعَارَ رَخِيصَةٌ.',
      en: '“In my town there is an old market and a modern shopping centre. In the market a bag costs ten pounds, and in the centre it costs thirty pounds. The market is cheaper than the centre, and it is lively and beautiful, but it is crowded and noisy. One advantage of the centre is that it is clean and safe, and you can pay by card; one disadvantage is that it is expensive. Overall I prefer the market because the prices are cheap.”',
      find: ['عَشَرَةُ جُنَيْهَاتٍ', 'أَرْخَصُ مِنَ المَرْكَزِ', 'مِنْ مَزَايَا المَرْكَزِ', 'بِصِفَةٍ عَامَّةٍ'],
    },
  },
});
