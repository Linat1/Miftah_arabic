'use strict';
/* Practice Room · D2-L03 · Clothes and accessories — vocabulary and shopping. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd2-l03',
  arShort: 'المَلَابِسُ وَالتَّسَوُّقُ',
  grammar: 'hādhā (m.) / hādhihi (f. and non-human plural); colour agreement (azraqu / zarqāʾu; abyaḍu / bayḍāʾu); shopping phrases: urīdu an ujarriba · hal ʿindakum maqāsun akbaru? · kam thamanuhu / thamanuhā?; numbers with prices',
  focus: 'Students run their own speaking and writing practice with clothes and shopping: say the clothes words, act a shop dialogue, answer question cards, do a role-play card returning an item, give a one-minute talk about an outfit, then build, fix and write a review of an online clothes order.',
  words1: 'Clothes', words2: 'Accessories and shopping',
  dialogue: {
    title: 'In the clothes shop', ar: 'فِي مَحَلِّ المَلَابِسِ',
    lines: [
      ['A', 'أَهْلًا، كَيْفَ أُسَاعِدُكِ؟', 'Hello, how can I help you?'],
      ['B', 'أُرِيدُ هٰذِهِ السُّتْرَةَ الزَّرْقَاءَ، مِنْ فَضْلِكَ.', 'I would like this blue jacket, please.'],
      ['A', 'مَا مَقَاسُكِ؟', 'What is your size?'],
      ['B', 'مُتَوَسِّطٌ. أُرِيدُ أَنْ أُجَرِّبَهَا. أَيْنَ غُرْفَةُ القِيَاسِ؟', 'Medium. I want to try it on. Where is the fitting room?'],
      ['A', 'هُنَاكَ عَلَى اليَمِينِ.', 'Over there on the right.'],
      ['B', 'إِنَّهَا ضَيِّقَةٌ قَلِيلًا. هَلْ عِنْدَكُمْ مَقَاسٌ أَكْبَرُ؟ وَكَمْ ثَمَنُهَا؟', 'It’s a bit tight. Do you have a bigger size? And how much is it?'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: buy a MASCULINE item (قَمِيصٌ · مِعْطَفٌ) — change هٰذِهِ → هٰذَا and أُجَرِّبَهَا → أُجَرِّبَهُ.',
  },
  questions: [
    { q: 'مَاذَا تَلْبَسُ إِلَى المَدْرَسَةِ؟', en: 'What do you wear to school?', start: 'أَلْبَسُ قَمِيصًا … وَسِرْوَالًا …', more: '… وَحِذَاءً أَسْوَدَ' },
    { q: 'مَا لَوْنُكَ المُفَضَّلُ فِي المَلَابِسِ؟', en: 'What is your favourite colour in clothes?', start: 'أُحِبُّ اللَّوْنَ …', more: '… لِأَنَّهُ …' },
    { q: 'كَمْ ثَمَنُ هٰذِهِ الحَقِيبَةِ؟', en: 'How much is this bag?', start: 'ثَمَنُهَا … جُنَيْهًا', more: '… وَهِيَ غَالِيَةٌ / رَخِيصَةٌ' },
    { q: 'مَاذَا تَلْبَسُ فِي الشِّتَاءِ؟', en: 'What do you wear in winter?', start: 'فِي الشِّتَاءِ أَلْبَسُ مِعْطَفًا …', more: '… لِأَنَّ الجَوَّ …' },
    { q: 'أَيْنَ تَشْتَرِي مَلَابِسَكَ عَادَةً؟', en: 'Where do you usually buy your clothes?', start: 'أَشْتَرِي مَلَابِسِي مِنْ …', more: '… لِأَنَّ الأَسْعَارَ …' },
  ],
  card: {
    title: 'Role-play card — returning an item', ar: 'إِرْجَاعُ قِطْعَةِ مَلَابِسَ', you: 'a customer', them: 'the shop assistant',
    tasks: [
      { ex: 'مَرْحَبًا، كَيْفَ أُسَاعِدُكَ؟', task: 'Say what you bought.', plan: 'اشْتَرَيْتُ ← اشْتَرَيْتُ هٰذَا القَمِيصَ …', model: 'اشْتَرَيْتُ هٰذَا القَمِيصَ الأَبْيَضَ أَمْسِ.', modelEn: 'I bought this white shirt yesterday.' },
      { ex: 'مَا المُشْكِلَةُ؟', task: 'The problem.', plan: 'المُشْكِلَةُ ← إِنَّهُ صَغِيرٌ / ضَيِّقٌ …', model: 'المُشْكِلَةُ أَنَّهُ صَغِيرٌ جِدًّا، وَالمَقَاسُ غَيْرُ مُنَاسِبٍ.', modelEn: 'The problem is that it’s too small; the size isn’t right.' },
      { ex: 'هَلْ تُرِيدُ مَقَاسًا آخَرَ أَمْ لَوْنًا آخَرَ؟', task: 'Choose + reason.', plan: '', model: 'أُرِيدُ مَقَاسًا أَكْبَرَ بِنَفْسِ اللَّوْنِ، لِأَنَّنِي أُحِبُّ الأَبْيَضَ.', modelEn: 'I want a bigger size in the same colour, because I like white.' },
      { unexpected: true, ex: 'لِلْأَسَفِ لَيْسَ عِنْدَنَا مَقَاسٌ أَكْبَرُ.', task: 'Answer the surprise.', plan: '', model: 'لَا مُشْكِلَةَ. هَلْ يُمْكِنُ أَنْ تُرْجِعَ لِي الثَّمَنَ مِنْ فَضْلِكَ؟', modelEn: 'No problem. Can you give me a refund, please?' },
    ],
    girl: 'to a female customer: أُسَاعِدُكِ · تُرِيدِينَ',
    notes: 'hādhā / hādhihi + colour agreement · past tense ishtaraytu · polite requests.',
  },
  talk: {
    title: 'One minute: my favourite outfit', ar: 'مَلَابِسِي المُفَضَّلَةُ',
    text: 'Describe your favourite outfit for one minute: each item, its colour, where you wear it and why you like it.',
    routes: {
      core: 'Four items with a colour each.',
      develop: 'Colour agreement for masculine and feminine items + where you bought it and its price.',
      stretch: 'Add a comparison with another outfit and an opinion (أَنِيقٌ · مُرِيحٌ).',
    },
  },
  builder: [
    { en: 'I want to try on this red dress.', cols: [['أُرِيدُ أَنْ أُجَرِّبَ', 'أُرِيدُ أَنْ أُجَرِّبُ'], ['هٰذَا الفُسْتَانَ', 'هٰذِهِ الفُسْتَانَ'], ['الأَحْمَرَ.', 'الحَمْرَاءَ.']], key: [0, 0, 0], why: 'أَنْ + -a; فُسْتَانٌ (m.) → هٰذَا + أَحْمَرُ.' },
    { en: 'How much is this white skirt?', cols: [['كَمْ ثَمَنُ', 'كَمْ ثَمَنَ'], ['هٰذِهِ التَّنُّورَةِ', 'هٰذَا التَّنُّورَةِ'], ['البَيْضَاءِ؟', 'الأَبْيَضِ؟']], key: [0, 0, 0], why: 'تَنُّورَةٌ (f.) → هٰذِهِ + بَيْضَاءُ.' },
    { en: 'Do you have a bigger size?', cols: [['هَلْ عِنْدَكُمْ', 'هَلْ عِنْدِي'], ['مَقَاسٌ', 'مَقَاسًا'], ['أَكْبَرُ؟', 'كَبِيرَةٌ؟']], key: [0, 0, 0], why: 'After عِنْدَ the thing owned is the subject → مَقَاسٌ أَكْبَرُ.' },
  ],
  errors: [
    { wrong: 'هٰذَا الحَقِيبَةُ جَمِيلَةٌ.', hint: 'حَقِيبَةٌ is …', right: 'هٰذِهِ الحَقِيبَةُ جَمِيلَةٌ.', why: 'Feminine → هٰذِهِ.' },
    { wrong: 'أُحِبُّ السُّتْرَةَ الأَزْرَقَ.', hint: 'Colour agreement.', right: 'أُحِبُّ السُّتْرَةَ الزَّرْقَاءَ.', why: 'Feminine colour: زَرْقَاءُ.' },
    { wrong: 'كَمْ ثَمَنُهُ هٰذِهِ الأَحْذِيَةِ؟', hint: 'Two problems.', right: 'كَمْ ثَمَنُ هٰذِهِ الأَحْذِيَةِ؟', why: 'Iḍāfa: no suffix on ثَمَنُ when a noun follows.' },
  ],
  task: {
    title: 'A review of an online order', ar: 'تَقْيِيمُ طَلَبٍ عَلَى الإِنْتَرْنِت',
    text: 'You ordered clothes online. Write a review (about 60–80 words) for the shop’s website. Include: • three items you ordered, with colour and price • one item that was perfect and why • one problem (size / colour) • what you will do next and your rating (… / ٥).',
    phrases: [['طَلَبْتُ … وَ … وَ …', 'I ordered … and … and …'], ['ثَمَنُهُ / ثَمَنُهَا … جُنَيْهًا', 'it cost … pounds'], ['المُشْكِلَةُ أَنَّ المَقَاسَ …', 'the problem is that the size …'], ['سَأُرْجِعُهُ / سَأُرْجِعُهَا · تَقْيِيمِي …', 'I will return it · my rating …']],
    coreFrames: [
      { ar: 'طَلَبْتُ ______ وَ ______ وَ ______ .', en: 'I ordered …, … and …' },
      { ar: '______ ثَمَنُهُ / ثَمَنُهَا ______ .', en: '… cost …' },
      { ar: '______ مُمْتَازٌ / مُمْتَازَةٌ لِأَنَّ ______ .', en: '… is excellent because …' },
      { ar: 'المُشْكِلَةُ أَنَّ ______ .', en: 'The problem is that …' },
    ],
    developFrames: [
      { ar: 'لِذٰلِكَ سَأُرْجِعُ ______ وَأَطْلُبُ ______ .', en: 'So I will return … and order …' },
      { ar: 'تَقْيِيمِي ______ مِنْ خَمْسَةٍ، لِأَنَّ ______ .', en: 'My rating is … out of five, because …' },
    ],
    bank: ['قَمِيصٌ · سِرْوَالٌ', 'تَنُّورَةٌ · فُسْتَانٌ', 'سُتْرَةٌ · مِعْطَفٌ', 'حِذَاءٌ · حَقِيبَةٌ', 'أَزْرَقُ · زَرْقَاءُ', 'أَبْيَضُ · بَيْضَاءُ', 'مَقَاسٌ · ثَمَنٌ', 'ضَيِّقٌ · وَاسِعٌ'],
    model: {
      text: 'طَلَبْتُ مِنْ مَوْقِعِكُمْ قَمِيصًا أَبْيَضَ وَسُتْرَةً زَرْقَاءَ وَحِذَاءً رِيَاضِيًّا. القَمِيصُ ثَمَنُهُ عِشْرُونَ جُنَيْهًا، وَهُوَ مُمْتَازٌ لِأَنَّ القُمَاشَ نَاعِمٌ وَمُرِيحٌ. الحِذَاءُ أَيْضًا جَمِيلٌ وَخَفِيفٌ. المُشْكِلَةُ أَنَّ السُّتْرَةَ ضَيِّقَةٌ جِدًّا، وَلَوْنُهَا أَغْمَقُ مِنَ الصُّورَةِ. ثَمَنُهَا أَرْبَعُونَ جُنَيْهًا، وَهٰذَا غَالٍ. لِذٰلِكَ سَأُرْجِعُهَا وَأَطْلُبُ مَقَاسًا أَكْبَرَ. تَقْيِيمِي أَرْبَعَةٌ مِنْ خَمْسَةٍ، لِأَنَّ التَّوْصِيلَ كَانَ سَرِيعًا جِدًّا، وَالمَلَابِسَ وَصَلَتْ فِي يَوْمَيْنِ فَقَطْ. أَنْصَحُ أَصْدِقَائِي بِهٰذَا المَوْقِعِ.',
      en: '“I ordered a white shirt, a blue jacket and trainers from your website. The shirt cost twenty pounds, and it is excellent because the fabric is soft and comfortable. The shoes are also nice and light. The problem is that the jacket is very tight, and its colour is darker than the picture. It cost forty pounds, which is expensive. So I will return it and order a bigger size. My rating is four out of five, because delivery was very fast — the clothes arrived in just two days. I recommend this website to my friends.”',
      find: ['سُتْرَةً زَرْقَاءَ', 'ثَمَنُهُ عِشْرُونَ جُنَيْهًا', 'المُشْكِلَةُ أَنَّ السُّتْرَةَ', 'سَأُرْجِعُهَا'],
    },
  },
  checkCore: 'choose هٰذَا / هٰذِهِ and make the colour agree?',
  checkDevelop: 'use shopping phrases (أُرِيدُ أَنْ أُجَرِّبَ · كَمْ ثَمَنُهُ) and give a problem + solution?',
});
