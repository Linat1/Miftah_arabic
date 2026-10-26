'use strict';
/* Apply Workshop · D2-W02 · D2-L03 (clothes and shopping) + D2-L04 (fashion and identity: opinions). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd2-w02', pair: ['d2-l03', 'd2-l04'],
  title: 'Shopping for an Eid Outfit', arShort: 'نَشْتَرِي مَلَابِسَ العِيدِ',
  focus: 'Students join clothes shopping with opinions on style: they shop for an Eid outfit (colours that agree, sizes, prices, trying on), discuss traditional versus modern style with a reason, a contrast and a concession, and write a review that includes a balanced opinion about clothes and identity.',
  dialogue: {
    title: 'In the clothes shop', ar: 'فِي مَحَلِّ المَلَابِسِ',
    lines: [
      ['A', 'أُرِيدُ أَنْ أُجَرِّبَ هٰذَا القَمِيصَ الأَبْيَضَ، مِنْ فَضْلِكَ.', 'I would like to try on this white shirt, please.'],
      ['B', 'تَفَضَّلْ. وَهٰذِهِ العَبَاءَةُ الزَّرْقَاءُ أَيْضًا جَمِيلَةٌ.', 'Here you are. And this blue abaya is lovely too.'],
      ['A', 'هَلْ عِنْدَكُمْ مَقَاسٌ أَكْبَرُ؟ وَكَمْ ثَمَنُهُ؟', 'Do you have a bigger size? And how much is it?'],
      ['B', 'نَعَمْ. ثَمَنُهُ خَمْسَةٌ وَعِشْرُونَ جُنَيْهًا.', 'Yes. It costs twenty-five pounds.'],
      ['A', 'فِي رَأْيِي المَلَابِسُ التَّقْلِيدِيَّةُ أَنِيقَةٌ فِي العِيدِ، لِأَنَّهَا تُعَبِّرُ عَنْ ثَقَافَتِنَا.', 'In my opinion traditional clothes are elegant at Eid, because they express our culture.'],
      ['B', 'عَلَى الرَّغْمِ مِنْ أَنَّ المَلَابِسَ العَصْرِيَّةَ مُرِيحَةٌ، فَإِنَّنِي أُوَافِقُكَ.', 'Although modern clothes are comfortable, I agree with you.'],
    ],
    notes: 'Shopping phrases, هٰذَا / هٰذِهِ and colour agreement (الأَبْيَضَ · الزَّرْقَاءُ) come from D2-L03; opinion, reason and concession (عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …) from D2-L04. Remind: judge clothes, never people.',
  },
  card: {
    title: 'Role-play card — at the Eid market', ar: 'فِي سُوقِ العِيدِ', you: 'the customer', them: 'the shop assistant',
    mix: 'shopping, sizes, prices and colour agreement (D2-L03) with style opinions, contrast and concession (D2-L04)',
    tasks: [
      { ex: 'أَهْلًا! كَيْفَ أُسَاعِدُكَ؟', task: 'Say what you want, with a colour that agrees.', plan: 'كَيْفَ ← أُرِيدُ … أَبْيَضَ / زَرْقَاءَ …', model: 'أُرِيدُ قَمِيصًا أَبْيَضَ وَسِرْوَالًا رَمَادِيًّا لِلْعِيدِ.', modelEn: 'I would like a white shirt and grey trousers for Eid.' },
      { ex: 'تَفَضَّلْ، هٰذَا مَقَاسٌ مُتَوَسِّطٌ.', task: 'Ask to try it on and ask for another size.', plan: 'مَقَاسٌ ← أُرِيدُ أَنْ أُجَرِّبَ … هَلْ عِنْدَكُمْ …؟', model: 'أُرِيدُ أَنْ أُجَرِّبَهُ. هَلْ عِنْدَكُمْ مَقَاسٌ أَكْبَرُ؟', modelEn: 'I would like to try it on. Do you have a bigger size?' },
      { ex: 'ثَمَنُ القَمِيصِ ثَلَاثُونَ جُنَيْهًا.', task: 'React to the price and decide.', plan: '______________', model: 'هٰذَا غَالٍ قَلِيلًا، وَلٰكِنَّهُ أَنِيقٌ جِدًّا، لِذٰلِكَ سَآخُذُهُ.', modelEn: 'That is a little expensive, but it is very elegant, so I will take it.' },
      { ex: 'هَلْ تُفَضِّلُ المَلَابِسَ التَّقْلِيدِيَّةَ أَمِ العَصْرِيَّةَ فِي العِيدِ؟', task: 'Opinion + reason + contrast.', plan: '______________', model: 'أُفَضِّلُ التَّقْلِيدِيَّةَ فِي العِيدِ لِأَنَّهَا جَمِيلَةٌ، وَلٰكِنَّ العَصْرِيَّةَ أَكْثَرُ رَاحَةً فِي المَدْرَسَةِ.', modelEn: 'I prefer traditional clothes at Eid because they are beautiful, but modern ones are more comfortable at school.' },
      { unexpected: true, ex: 'هَلِ المَلَابِسُ تُعَبِّرُ عَنِ الشَّخْصِيَّةِ؟', task: 'A concession with عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …', plan: '______________', model: 'عَلَى الرَّغْمِ مِنْ أَنَّ المَلَابِسَ تُعَبِّرُ عَنْ ذَوْقِنَا، فَإِنَّ الشَّخْصِيَّةَ أَهَمُّ.', modelEn: 'Although clothes express our taste, personality is more important.' },
    ],
    girl: 'كَيْفَ أُسَاعِدُكِ؟ · هَلْ تُفَضِّلِينَ …؟ — and she may choose: عَبَاءَةً زَرْقَاءَ · فُسْتَانًا أَخْضَرَ',
  },
  talk: {
    title: 'My Eid outfit — and what I think about fashion', ar: 'مَلَابِسُ العِيدِ وَرَأْيِي فِي المَوْضَةِ',
    text: 'Talk for one minute: what you will wear (or wore) for Eid — three items with colours and prices — where you bought them, and your opinion on traditional versus modern clothes, with a reason, a contrast and a concession.',
    routes: {
      core: 'سَأَلْبَسُ … أَبْيَضَ · ثَمَنُهُ …',
      develop: 'Add فِي رَأْيِي … لِأَنَّ … and وَلٰكِنَّ …',
      stretch: 'Add عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ … and four style adjectives that agree.',
    },
  },
  task: {
    title: 'A review — and my view on fashion', ar: 'تَقْيِيمٌ وَرَأْيٌ',
    text: 'Write a review (about 60–80 words) of the shop where you bought your Eid outfit. Include: • three items with colours that agree and prices • one problem (size or colour) and what you did • your rating out of five • a balanced opinion on clothes and identity, with a reason, a contrast (وَلٰكِنَّ) and a concession.',
    range: [50, 100],
    phrases: [['اشْتَرَيْتُ … أَبْيَضَ وَ… زَرْقَاءَ', 'I bought a white … and a blue …'], ['ثَمَنُهُ / ثَمَنُهَا … جُنَيْهًا', 'it cost … pounds'], ['المُشْكِلَةُ أَنَّ المَقَاسَ …', 'the problem is that the size …'], ['عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …', 'although … , …']],
    coreFrames: [
      { ar: 'اشْتَرَيْتُ لِلْعِيدِ ______ وَ ______ .', en: 'For Eid I bought … and …' },
      { ar: 'ثَمَنُ ______ ______ جُنَيْهًا.', en: 'The … cost … pounds.' },
      { ar: 'المُشْكِلَةُ أَنَّ ______ ، لِذٰلِكَ ______ .', en: 'The problem is that …, so …' },
      { ar: 'تَقْيِيمِي: ______ / ٥', en: 'My rating: … / 5' },
      { ar: 'فِي رَأْيِي المَلَابِسُ ______ لِأَنَّ ______ .', en: 'In my opinion clothes … because …' },
    ],
    developFrames: [
      { ar: 'وَلٰكِنَّ ______ .', en: 'But …' },
      { ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّ ______ .', en: 'Although …, …' },
    ],
    bank: ['قَمِيصٌ · عَبَاءَةٌ', 'فُسْتَانٌ · حِذَاءٌ', 'أَبْيَضُ · بَيْضَاءُ', 'أَزْرَقُ · زَرْقَاءُ', 'مَقَاسٌ أَكْبَرُ', 'أَنِيقٌ · عَصْرِيٌّ · تَقْلِيدِيٌّ', 'وَلٰكِنَّ', 'عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …'],
    model: {
      text: 'اشْتَرَيْتُ لِلْعِيدِ مِنْ مَحَلِّ «النُّورِ» قَمِيصًا أَبْيَضَ وَسِرْوَالًا رَمَادِيًّا وَحِذَاءً أَسْوَدَ. ثَمَنُ القَمِيصِ خَمْسَةٌ وَعِشْرُونَ جُنَيْهًا، وَالحِذَاءُ أَرْبَعُونَ جُنَيْهًا. المُشْكِلَةُ أَنَّ المَقَاسَ كَانَ صَغِيرًا، لِذٰلِكَ أَرْجَعْتُهُ وَأَخَذْتُ مَقَاسًا أَكْبَرَ. تَقْيِيمِي: أَرْبَعَةٌ مِنْ خَمْسَةٍ. فِي رَأْيِي المَلَابِسُ التَّقْلِيدِيَّةُ أَنِيقَةٌ فِي العِيدِ لِأَنَّهَا تُعَبِّرُ عَنْ ثَقَافَتِنَا، وَلٰكِنَّ المَلَابِسَ العَصْرِيَّةَ أَكْثَرُ رَاحَةً. عَلَى الرَّغْمِ مِنْ أَنَّ المَلَابِسَ مُهِمَّةٌ، فَإِنَّ الأَخْلَاقَ أَهَمُّ.',
      en: '“For Eid I bought a white shirt, grey trousers and black shoes from Al-Nour shop. The shirt cost twenty-five pounds, and the shoes forty pounds. The problem was that the size was small, so I returned it and took a bigger size. My rating: four out of five. In my opinion traditional clothes are elegant at Eid because they express our culture, but modern clothes are more comfortable. Although clothes are important, good character is more important.”',
      find: ['قَمِيصًا أَبْيَضَ', 'خَمْسَةٌ وَعِشْرُونَ جُنَيْهًا', 'وَلٰكِنَّ المَلَابِسَ العَصْرِيَّةَ', 'فَإِنَّ الأَخْلَاقَ أَهَمُّ'],
    },
  },
});
