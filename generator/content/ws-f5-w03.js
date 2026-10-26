'use strict';
/* Apply Workshop · F5-W03 · F5-L05 (ordering food politely) + F5-L06 (menus, prices and dishes). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f5-w03', pair: ['f5-l05', 'f5-l06'],
  title: 'Dinner at the Lebanese Restaurant', arShort: 'عَشَاءٌ فِي المَطْعَمِ اللُّبْنَانِيِّ',
  focus: 'Students join polite ordering with menus and prices: they read a menu, ask what a dish is made of and how much it costs, order a starter, a main dish and a drink politely, ask for the bill and work out the total, then write a short restaurant review.',
  dialogue: {
    title: 'Ordering from the menu', ar: 'نَطْلُبُ مِنَ القَائِمَةِ',
    lines: [
      ['A', 'مَسَاءُ الخَيْرِ! هٰذِهِ قَائِمَةُ الطَّعَامِ. مَاذَا تُرِيدُ؟', 'Good evening! Here is the menu. What would you like?'],
      ['B', 'لَوْ سَمَحْتَ، مِمَّ تَتَكَوَّنُ الكَبْسَةُ؟', 'Excuse me, what is the kabsa made of?'],
      ['A', 'تَتَكَوَّنُ مِنْ أَرُزٍّ وَدَجَاجٍ وَبَهَارَاتٍ.', 'It is made of rice, chicken and spices.'],
      ['B', 'أُرِيدُ حُمُّصًا وَكَبْسَةً، مِنْ فَضْلِكَ. كَمِ السِّعْرُ؟', 'I would like hummus and kabsa, please. How much is it?'],
      ['A', 'الحُمُّصُ ثَلَاثَةُ جُنَيْهَاتٍ، وَالكَبْسَةُ تِسْعَةُ جُنَيْهَاتٍ.', 'The hummus is three pounds, and the kabsa is nine pounds.'],
      ['B', 'مُمْتَازٌ. وَالحِسَابُ مِنْ فَضْلِكَ — المَجْمُوعُ اثْنَا عَشَرَ جُنَيْهًا.', 'Excellent. And the bill, please — the total is twelve pounds.'],
    ],
    notes: 'Polite ordering (لَوْ سَمَحْتَ · أُرِيدُ … مِنْ فَضْلِكَ · الحِسَابُ) comes from F5-L05; menu words, يَتَكَوَّنُ / تَتَكَوَّنُ مِنْ and prices from F5-L06. Note the numbers: 3–10 + جُنَيْهَاتٍ; 11 and above + جُنَيْهًا.',
  },
  card: {
    title: 'Role-play card — at the restaurant', ar: 'فِي المَطْعَمِ', you: 'the customer', them: 'the waiter',
    mix: 'polite requests, questions and the bill (F5-L05) with menu sections, ingredients, prices and the total (F5-L06)',
    tasks: [
      { ex: 'أَهْلًا وَسَهْلًا! مَاذَا تُرِيدُ مِنَ المُقَبِّلَاتِ؟', task: 'Order a starter politely.', plan: 'مَاذَا ← أُرِيدُ … مِنْ فَضْلِكَ', model: 'أُرِيدُ فَلَافِلَ، مِنْ فَضْلِكَ.', modelEn: 'I would like falafel, please.' },
      { ex: 'وَمِنَ الأَطْبَاقِ الرَّئِيسِيَّةِ؟', task: 'Ask what a dish is made of, then order it.', plan: 'وَ ← مِمَّ يَتَكَوَّنُ / تَتَكَوَّنُ …؟ ثُمَّ أُرِيدُ …', model: 'مِمَّ تَتَكَوَّنُ الكَبْسَةُ؟ … طَيِّبٌ، أُرِيدُ الكَبْسَةَ.', modelEn: 'What is the kabsa made of? … OK, I would like the kabsa.' },
      { ex: 'وَمَاذَا تُرِيدُ أَنْ تَشْرَبَ؟', task: 'Ask if they have a drink, then order.', plan: 'مَاذَا ← هَلْ عِنْدَكُمْ …؟', model: 'هَلْ عِنْدَكُمْ عَصِيرُ لَيْمُونٍ بِالنَّعْنَاعِ؟', modelEn: 'Do you have lemon and mint juice?' },
      { ex: 'هَلْ تُرِيدُ حَلْوَيَاتٍ؟', task: 'Ask the price of a dessert and decide.', plan: 'هَلْ ← كَمْ سِعْرُ …؟ … غَالٍ / رَخِيصٌ', model: 'كَمْ سِعْرُ البَقْلَاوَةِ؟ … أَرْبَعَةُ جُنَيْهَاتٍ؟ نَعَمْ، مِنْ فَضْلِكَ.', modelEn: 'How much is the baklava? … Four pounds? Yes, please.' },
      { unexpected: true, ex: 'هَلْ كُلُّ شَيْءٍ جَيِّدٌ؟', task: 'Give an opinion and ask for the bill.', plan: 'هَلْ ← الطَّعَامُ … ، الحِسَابُ …', model: 'نَعَمْ، الطَّعَامُ لَذِيذٌ جِدًّا، شُكْرًا. الحِسَابُ مِنْ فَضْلِكَ.', modelEn: 'Yes, the food is very tasty, thank you. The bill, please.' },
    ],
    girl: 'to a waitress: لَوْ سَمَحْتِ · مِنْ فَضْلِكِ — and the waitress asks a girl: مَاذَا تُرِيدِينَ؟',
    notes: 'Put a simple menu with prices on screen or in the chat before the card: حُمُّصٌ ٣ · فَلَافِلُ ٢ · كَبْسَةٌ ٩ · شَاوَرْمَا ٧ · عَصِيرٌ ٢ · بَقْلَاوَةٌ ٤ (جُنَيْهَاتٌ).',
  },
  talk: {
    title: 'My perfect meal out', ar: 'وَجْبَتِي المِثَالِيَّةُ',
    text: 'Talk for 30–45 seconds about your perfect meal at a restaurant: which restaurant and with whom, what you order (a starter, a main dish, a drink and a dessert), what one dish is made of, the prices and the total.',
    routes: {
      core: 'أَطْلُبُ … وَ… · السِّعْرُ … جُنَيْهَاتٍ',
      develop: 'Add يَتَكَوَّنُ / تَتَكَوَّنُ مِنْ … and the total (المَجْمُوعُ …).',
      stretch: 'Add your opinion: رَخِيصٌ / غَالٍ — and a polite request you use there.',
    },
    phrases: [['أُرِيدُ … مِنْ فَضْلِكَ', 'I would like …, please'], ['مِمَّ يَتَكَوَّنُ / تَتَكَوَّنُ …؟', 'what is … made of?'], ['السِّعْرُ … جُنَيْهَاتٍ', 'the price is … pounds'], ['المَجْمُوعُ … · الحِسَابُ مِنْ فَضْلِكَ', 'the total … · the bill, please']],
  },
  task: {
    title: 'A short restaurant review', ar: 'رَأْيِي فِي المَطْعَمِ',
    text: 'Write a review (about 45–65 words) of a meal at a restaurant (real or imagined). Include: • where and with whom • what you ordered: a starter, a main dish and a drink • what one dish is made of • the prices and the total • one polite question you asked • your opinion of the food and the price.',
    range: [40, 85],
    phrases: [['ذَهَبْتُ مَعَ … إِلَى مَطْعَمِ …', 'I went with … to … restaurant'], ['طَلَبْتُ … وَ… وَ…', 'I ordered … and … and …'], ['تَتَكَوَّنُ الكَبْسَةُ مِنْ …', 'the kabsa is made of …'], ['المَجْمُوعُ … · كَانَ المَطْعَمُ رَخِيصًا / غَالِيًا', 'the total … · the restaurant was cheap / expensive']],
    coreFrames: [
      { ar: 'ذَهَبْتُ مَعَ ______ إِلَى مَطْعَمِ ______ .', en: 'I went with … to … restaurant.' },
      { ar: 'طَلَبْتُ ______ وَ ______ .', en: 'I ordered … and …' },
      { ar: 'وَشَرِبْتُ ______ .', en: 'And I drank …' },
      { ar: 'سِعْرُ ______ ______ جُنَيْهَاتٍ.', en: 'The price of … is … pounds.' },
      { ar: 'المَجْمُوعُ ______ .', en: 'The total is …' },
    ],
    developFrames: [
      { ar: 'يَتَكَوَّنُ / تَتَكَوَّنُ ______ مِنْ ______ .', en: '… is made of …' },
      { ar: 'سَأَلْتُ النَّادِلَ: هَلْ عِنْدَكُمْ ______ ؟', en: 'I asked the waiter: do you have …?' },
      { ar: 'فِي رَأْيِي الطَّعَامُ ______ ، وَلٰكِنْ ______ .', en: 'In my opinion the food is …, but …' },
    ],
    bank: ['مُقَبِّلَاتٌ', 'طَبَقٌ رَئِيسِيٌّ', 'حَلْوَيَاتٌ · مَشْرُوبَاتٌ', 'أُرِيدُ … مِنْ فَضْلِكَ', 'لَوْ سَمَحْتَ', 'يَتَكَوَّنُ · تَتَكَوَّنُ مِنْ', 'جُنَيْهَاتٍ · جُنَيْهًا', 'رَخِيصٌ · غَالٍ'],
    model: {
      text: 'ذَهَبْتُ مَعَ عَائِلَتِي إِلَى مَطْعَمِ «الأَرْزِ» اللُّبْنَانِيِّ. طَلَبْتُ حُمُّصًا وَكَبْسَةً، وَشَرِبْتُ عَصِيرَ لَيْمُونٍ. تَتَكَوَّنُ الكَبْسَةُ مِنْ أَرُزٍّ وَدَجَاجٍ وَبَهَارَاتٍ. سَأَلْتُ النَّادِلَ: هَلْ عِنْدَكُمْ بَقْلَاوَةٌ؟ قَالَ: نَعَمْ. سِعْرُ الحُمُّصِ ثَلَاثَةُ جُنَيْهَاتٍ، وَسِعْرُ الكَبْسَةِ تِسْعَةُ جُنَيْهَاتٍ، وَالمَجْمُوعُ اثْنَا عَشَرَ جُنَيْهًا. فِي رَأْيِي الطَّعَامُ لَذِيذٌ جِدًّا، وَالمَطْعَمُ لَيْسَ غَالِيًا.',
      en: '“I went with my family to the Cedar Lebanese restaurant. I ordered hummus and kabsa, and I drank lemon juice. Kabsa is made of rice, chicken and spices. I asked the waiter: do you have baklava? He said yes. The hummus costs three pounds and the kabsa nine pounds, and the total is twelve pounds. In my opinion the food is very tasty, and the restaurant is not expensive.”',
      find: ['طَلَبْتُ حُمُّصًا وَكَبْسَةً', 'تَتَكَوَّنُ الكَبْسَةُ مِنْ', 'هَلْ عِنْدَكُمْ', 'اثْنَا عَشَرَ جُنَيْهًا'],
    },
  },
});
