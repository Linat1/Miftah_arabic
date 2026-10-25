'use strict';
/* Guided Practice Rooms · AT-A-L05 · Eating Out — Café, Menu and Prices. New tasks. Teacher-made. */
const XP = require('./xp-a-l05');

const base = { topic: 'A', n: 5, short: 'Eating Out', arShort: 'فِي المَطْعَمِ وَالمَقْهَى', fileTitle: 'Eating_Out_Cafe_Menu_and_Prices', title: 'Eating Out — Café, Menu and Prices', icon: 'FaUtensils', grammar: 'polite requests (urīdu · aʿṭinī · hal yumkinu an); imperatives; attached pronouns (-hu / -hā); numbers and prices (kam thamanu …?)' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up, the answer ladder, two new role plays (ordering at a juice bar, a problem with a restaurant bill), a topic conversation with A-R-E-T, and a one-minute talk about a restaurant they know.',
  words: XP.speak.words,
  words1: { title: 'Ordering and paying', ar: 'الطَّلَبُ وَالدَّفْعُ' },
  words2: { title: 'Menus, bills and prices', ar: 'القَائِمَةُ وَالأَسْعَارُ' },
  ladder: {
    q: 'مَا المَطْعَمُ الَّذِي تُفَضِّلُهُ؟', qEn: 'Which restaurant do you prefer?',
    rungs: [
      { ar: 'أُفَضِّلُ مَطْعَمًا لُبْنَانِيًّا قَرِيبًا مِنْ بَيْتِي.', en: 'I prefer a Lebanese restaurant near my home.' },
      { ar: 'أُفَضِّلُ مَطْعَمًا لُبْنَانِيًّا قَرِيبًا مِنْ بَيْتِي، لِأَنَّ الطَّعَامَ لَذِيذٌ وَرَخِيصٌ.', en: '… because the food is tasty and cheap.' },
      { ar: '… وَعَادَةً أَطْلُبُ الشَّاوِرْمَا، وَثَمَنُهَا خَمْسَةُ جُنَيْهَاتٍ فَقَطْ.', en: '… I usually order shawarma, and it costs only five pounds.' },
      { ar: '… وَيَوْمَ السَّبْتِ سَأَحْتَفِلُ هُنَاكَ بِعِيدِ مِيلَادِي، فَهُوَ فِي رَأْيِي أَفْضَلُ مَطْعَمٍ فِي المَدِينَةِ.', en: '… on Saturday I will celebrate my birthday there — in my opinion it is the best restaurant in town.' },
    ],
  },
  ladderQs: [
    { q: 'كَمْ مَرَّةً تَأْكُلُ فِي مَطْعَمٍ؟', l1: 'آكُلُ فِي مَطْعَمٍ …', l2: '… لِأَنَّ …', l3: '… آخِرَ مَرَّةٍ …' },
    { q: 'مَاذَا تَطْلُبُ فِي المَقْهَى؟', l1: 'أَطْلُبُ …', l2: '… لِأَنَّهُ …', l3: '… وَثَمَنُهُ …' },
    { q: 'هَلْ تُفَضِّلُ الأَكْلَ فِي البَيْتِ أَمْ فِي المَطْعَمِ؟', l1: 'أُفَضِّلُ …', l2: '… لِأَنَّ …', l3: '… لٰكِنْ أَحْيَانًا …' },
    { q: 'مَنْ يَدْفَعُ الحِسَابَ عَادَةً؟', l1: '… يَدْفَعُ الحِسَابَ', l2: '… لِأَنَّ …', l3: '… وَفِي المَرَّةِ القَادِمَةِ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a juice bar in Dubai', title: 'Role play 1 — At the juice bar', ar: 'فِي مَحَلِّ العَصِيرِ', you: 'a customer', them: 'the waiter',
      tasks: [
        { ex: 'أَهْلًا وَسَهْلًا! مَاذَا تُرِيدُ أَنْ تَشْرَبَ؟', task: 'Order a juice.', plan: 'مَاذَا ← أُرِيدُ عَصِيرَ …', model: 'أُرِيدُ عَصِيرَ المَانْجُو، مِنْ فَضْلِكَ.', modelEn: 'I would like a mango juice, please.' },
        { ex: 'صَغِيرٌ أَمْ كَبِيرٌ؟', task: 'Choose the size.', plan: 'أَمْ ← … ، مِنْ فَضْلِكَ', model: 'كَبِيرٌ، مِنْ فَضْلِكَ، وَمَعَ ثَلْجٍ.', modelEn: 'Large, please, with ice.' },
        { ex: 'هَلْ تُرِيدُ شَيْئًا لِلْأَكْلِ؟', task: 'Order something to eat.', plan: 'هَلْ ← نَعَمْ، أَعْطِنِي …', model: 'نَعَمْ، أَعْطِنِي سَنْدَوِيشَ جُبْنٍ، مِنْ فَضْلِكَ.', modelEn: 'Yes, give me a cheese sandwich, please.' },
        { ex: 'حَاضِرٌ.', task: 'Ask how much it costs.', plan: 'كَمْ ← كَمِ الحِسَابُ؟', model: 'كَمِ الحِسَابُ، مِنْ فَضْلِكَ؟', modelEn: 'How much is the bill, please?' },
        { unexpected: true, ex: 'عِشْرُونَ دِرْهَمًا. هَلْ تَدْفَعُ نَقْدًا أَمْ بِالبِطَاقَةِ؟', task: 'Answer the unexpected question.', plan: 'أَمْ ← أَدْفَعُ …', model: 'أَدْفَعُ بِالبِطَاقَةِ، شُكْرًا.', modelEn: 'I will pay by card, thank you.' },
      ],
      girl: 'تُرِيدِينَ · تَشْرَبِي · تَدْفَعِينَ',
      notes: 'Language: urīdu · aʿṭinī (give me) · kami al-ḥisābu? · numbers + tamyīz (ʿishrūna dirhaman) · nqdan / bi-l-biṭāqa.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a restaurant in Cairo', title: 'Role play 2 — A problem with the bill', ar: 'مُشْكِلَةٌ فِي الفَاتُورَةِ', you: 'a customer who checks the bill', them: 'the restaurant manager',
      tasks: [
        { ex: 'تَفَضَّلْ، كَيْفَ أُسَاعِدُكَ؟', task: 'Explain politely that there is a problem.', model: 'عَفْوًا، أَظُنُّ أَنَّ هُنَاكَ خَطَأً فِي الفَاتُورَةِ.', modelEn: 'Excuse me, I think there is a mistake in the bill.' },
        { ex: 'مَا المُشْكِلَةُ بِالضَّبْطِ؟', task: 'Say what you ordered and what is wrong.', model: 'طَلَبْتُ طَبَقَيْ كُشَرِيٍّ فَقَطْ، لٰكِنَّ الفَاتُورَةَ فِيهَا ثَلَاثَةُ أَطْبَاقٍ.', modelEn: 'I ordered only two plates of koshari, but the bill has three.' },
        { ex: 'آسِفٌ جِدًّا. وَكَيْفَ كَانَ الطَّعَامُ؟', task: 'Give your opinion of the food, with a reason.', model: 'كَانَ الكُشَرِيُّ لَذِيذًا جِدًّا، لٰكِنَّ الخِدْمَةَ كَانَتْ بَطِيئَةً قَلِيلًا.', modelEn: 'The koshari was delicious, but the service was a bit slow.' },
        { ex: 'سَأُغَيِّرُ الفَاتُورَةَ حَالًا.', task: 'ASK a polite question (e.g. a receipt, a discount).', model: 'شُكْرًا، وَهَلْ يُمْكِنُ أَنْ تُعْطِيَنِي إِيصَالًا؟', modelEn: 'Thank you — could you give me a receipt?' },
        { unexpected: true, ex: 'هَلْ سَتَرْجِعُ إِلَى مَطْعَمِنَا؟', task: 'Answer the unexpected question (future + condition).', model: 'نَعَمْ، سَأَرْجِعُ إِذَا كَانَتِ الخِدْمَةُ أَسْرَعَ، لِأَنَّ الطَّعَامَ مُمْتَازٌ.', modelEn: 'Yes, I will come back if the service is faster, because the food is excellent.' },
      ],
      girl: 'أُسَاعِدُكِ · تَفَضَّلِي · سَتَرْجِعِينَ',
      notes: 'Language: aẓunnu anna … · the dual ṭabaqay (two plates) · numbers + plural · contrast lākinna · hal yumkinu an tuʿṭiyanī …? · idhā … (Stretch).',
    },
  ],
  convAr: 'الأَكْلُ خَارِجَ البَيْتِ',
  conv: [
    { route: 'Core', q: 'مَا اسْمُ مَطْعَمِكَ المُفَضَّلِ؟', en: 'What is your favourite restaurant called?', push: 'أَيْنَ هُوَ؟' },
    { route: 'Core', q: 'كَمْ ثَمَنُ وَجْبَةٍ فِي مَقْصَفِ المَدْرَسَةِ؟', en: 'How much is a meal in the school canteen?', push: 'هَلْ هِيَ رَخِيصَةٌ؟' },
    { route: 'Develop', q: 'مَتَى أَكَلْتَ فِي مَطْعَمٍ آخِرَ مَرَّةٍ؟', en: 'When did you last eat in a restaurant?', push: 'مَاذَا طَلَبْتَ؟' },
    { route: 'Develop', q: 'مَا الفَرْقُ بَيْنَ المَقْهَى وَالمَطْعَمِ؟', en: 'What is the difference between a café and a restaurant?', push: 'أَيُّهُمَا تُفَضِّلُ؟' },
    { route: 'Stretch', q: 'هَلِ الأَكْلُ فِي المَطَاعِمِ غَالٍ جِدًّا اليَوْمَ؟', en: 'Is eating out too expensive today?', push: 'مَا الحَلُّ؟' },
    { route: 'Stretch', q: 'لَوْ كُنْتَ نَادِلًا، كَيْفَ تَتَعَامَلُ مَعَ زَبُونٍ غَاضِبٍ؟', en: 'If you were a waiter, how would you deal with an angry customer?', push: 'لِمَاذَا؟' },
  ],
  convModels: [
    { q: 'كَمْ ثَمَنُ وَجْبَةٍ فِي مَقْصَفِ المَدْرَسَةِ؟', model: 'ثَمَنُ الوَجْبَةِ ثَلَاثَةُ جُنَيْهَاتٍ، وَهِيَ رَخِيصَةٌ لِأَنَّ المَدْرَسَةَ تَدْعَمُهَا؛ عَادَةً آكُلُ المَعْكَرُونَةَ، وَغَدًا سَأُجَرِّبُ الطَّبَقَ الهِنْدِيَّ الجَدِيدَ.', modelEn: 'A: three pounds · R: cheap because the school supports it · E: I usually eat pasta · T: tomorrow I’ll try the new Indian dish.' },
    { q: 'مَتَى أَكَلْتَ فِي مَطْعَمٍ آخِرَ مَرَّةٍ؟', model: 'أَكَلْتُ فِي مَطْعَمٍ تُرْكِيٍّ يَوْمَ الجُمُعَةِ المَاضِي مَعَ عَائِلَتِي، لِأَنَّ أُمِّي نَجَحَتْ فِي امْتِحَانِ القِيَادَةِ؛ طَلَبْتُ المَشَاوِيَ، وَكَانَ الحِسَابُ غَالِيًا قَلِيلًا.', modelEn: 'A: a Turkish restaurant last Friday · R: mum passed her driving test · E: I ordered grills; the bill was a bit expensive.' },
    { q: 'هَلِ الأَكْلُ فِي المَطَاعِمِ غَالٍ جِدًّا اليَوْمَ؟', model: 'صَحِيحٌ أَنَّ الأَسْعَارَ ارْتَفَعَتْ كَثِيرًا، لِذٰلِكَ نَأْكُلُ فِي المَطْعَمِ مَرَّةً فِي الشَّهْرِ فَقَطْ؛ فِي رَأْيِي الطَّبْخُ فِي البَيْتِ أَرْخَصُ وَأَصَحُّ، وَسَأَتَعَلَّمُ طَبَقًا جَدِيدًا كُلَّ أُسْبُوعٍ.', modelEn: 'A: prices have risen a lot · R/E: so we eat out once a month · opinion: cooking at home is cheaper and healthier · T: I will learn a new dish every week.' },
  ],
  talk: {
    title: 'One minute: a restaurant I know', ar: 'مَطْعَمٌ أَعْرِفُهُ',
    text: 'Talk for one minute about a café or restaurant you know: where it is, what is on the menu, prices, what you order — and your last visit.',
    routes: {
      core: '30 seconds: the name, two dishes and one price (… جُنَيْهَاتٍ).',
      develop: '60 seconds: add what you usually order, why, and your last visit (past).',
      stretch: '90 seconds: compare it with another place (أَرْخَصُ مِنْ · أَلَذُّ مِنْ) and recommend it with a reason.',
    },
    phrases: [['فِي قَائِمَةِ الطَّعَامِ …', 'on the menu …'], ['ثَمَنُ … هُوَ …', 'the price of … is …'], ['آخِرَ مَرَّةٍ طَلَبْتُ …', 'the last time I ordered …'], ['أَنْصَحُكَ بِهِ لِأَنَّ …', 'I recommend it because …']],
  },
  checkCore: 'used polite requests (أُرِيدُ … مِنْ فَضْلِكَ · أَعْطِنِي …)',
  checkDevelop: 'gave prices correctly (number + noun) and an opinion with a reason',
};

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up, decoding a new Q2 task (a review of a new café), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Restaurant: table booking', ar: 'حَجْزُ طَاوِلَةٍ فِي المَطْعَمِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'التَّارِيخُ', en: 'Date', tip: 'السَّبْتُ، العَاشِرُ مِنْ مَارِسَ' },
      { core: true, ar: 'السَّاعَةُ', en: 'Time', tip: 'السَّابِعَةُ مَسَاءً' },
      { core: true, ar: 'عَدَدُ الأَشْخَاصِ', en: 'Number of people', tip: 'أَرْبَعَةُ أَشْخَاصٍ' },
      { core: true, ar: 'المُنَاسَبَةُ', en: 'Occasion', tip: 'عِيدُ مِيلَادٍ' },
      { ar: 'جُمْلَةٌ: طَلَبٌ خَاصٌّ', en: 'ONE sentence: a special request', tip: 'هَلْ يُمْكِنُ أَنْ … ؟ (a verb in -a)' },
    ],
  },
  Q2: {
    title: 'Question 2: a review of a new café', ar: 'رَأْيِي فِي مَقْهًى جَدِيدٍ',
    task: 'A new café has opened in your town. Write an email in Arabic to your friend of about 80–90 words. You must include: • where the café is and what it is like • what you ordered and the prices • what you liked and did not like, and why • when you will go back, and an invitation to your friend.',
    phrases: [['فُتِحَ مَقْهًى جَدِيدٌ فِي …', 'a new café opened in …'], ['طَلَبْتُ … وَثَمَنُهُ …', 'I ordered … and it cost …'], ['أَعْجَبَنِي … لٰكِنْ …', 'I liked … but …'], ['هَلْ تَأْتِي مَعِي …؟', 'will you come with me …?']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنْ مَقْهًى جَدِيدٍ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about a new café (80–90 words).'],
      ['1', 'أَيْنَ المَقْهَى؟ وَكَيْفَ هُوَ؟', 'Where the café is and what it is like'],
      ['2', 'مَاذَا طَلَبْتَ؟ وَكَمْ كَانَ الثَّمَنُ؟', 'What you ordered and the prices'],
      ['3', 'مَاذَا أَعْجَبَكَ؟ وَمَاذَا لَمْ يُعْجِبْكَ؟ وَلِمَاذَا؟', 'What you liked and didn’t, and why'],
      ['4', 'مَتَى سَتَرْجِعُ؟ وَادْعُ صَدِيقَكَ.', 'When you will go back; invite your friend'],
    ],
    decode: ['an email to a FRIEND → informal greeting and closing', 'أَيْنَ · كَيْفَ → PRESENT description (يَقَعُ · هُوَ …)', 'مَاذَا طَلَبْتَ · كَمْ كَانَ → PAST + prices', 'أَعْجَبَكَ · لَمْ يُعْجِبْكَ → PAST opinion + reasons', 'سَتَرْجِعُ · ادْعُ → FUTURE + an invitation'],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', en: 'Hello …, how are you?' },
      { ar: 'فُتِحَ مَقْهًى جَدِيدٌ قُرْبَ ______ ، وَهُوَ ______ .', en: '1 · A new café opened near …, and it is …' },
      { ar: 'طَلَبْتُ ______ ، وَكَانَ الثَّمَنُ ______ .', en: '2 · I ordered …, and the price was …' },
      { ar: 'أَعْجَبَنِي ______ ، لٰكِنْ لَمْ يُعْجِبْنِي ______ .', en: '3 · I liked …, but I didn’t like …' },
      { ar: 'سَأَرْجِعُ يَوْمَ ______ . هَلْ تَأْتِي مَعِي؟', en: '4 · I will go back on … Will you come with me?' },
    ],
    developFrames: [
      { ar: 'يَقَعُ المَقْهَى فِي ______ ، وَهُوَ ______ وَ ______ .', en: '1 · The café is in …, and it is … and …' },
      { ar: 'طَلَبْتُ ______ بِـخَمْسَةِ جُنَيْهَاتٍ، وَ ______ .', en: '2 · I ordered … for five pounds, and …' },
      { ar: 'أَحْبَبْتُ ______ لِأَنَّهُ ______ ، أَمَّا ______ فَكَانَ ______ .', en: '3 · I loved … because …, as for …, it was …' },
      { ar: 'مَا رَأْيُكَ أَنْ نَذْهَبَ مَعًا ______ ؟', en: '4 · How about going together …?' },
    ],
    bank: ['قَائِمَةُ الطَّعَامِ', 'رَخِيصٌ · غَالٍ', 'لَذِيذٌ', 'الخِدْمَةُ', 'سَرِيعَةٌ · بَطِيئَةٌ', 'جُنَيْهٌ · جُنَيْهَاتٌ', 'هَادِئٌ · مُزْدَحِمٌ', 'نَادِلٌ لَطِيفٌ'],
    model: {
      text: `مَرْحَبًا يَا يُوسُفُ،
كَيْفَ حَالُكَ؟ فُتِحَ مَقْهًى جَدِيدٌ فِي الشَّارِعِ الرَّئِيسِيِّ، قُرْبَ المَكْتَبَةِ العَامَّةِ، وَهُوَ وَاسِعٌ وَهَادِئٌ، وَفِيهِ كُتُبٌ كَثِيرَةٌ لِلْقِرَاءَةِ. يَوْمَ الأَحَدِ المَاضِي طَلَبْتُ كَعْكَةَ الشُّوكُولَاتَةِ وَعَصِيرَ الفَرَاوِلَةِ، وَكَانَ الحِسَابُ سَبْعَةَ جُنَيْهَاتٍ فَقَطْ، وَهٰذَا رَخِيصٌ جِدًّا فِي رَأْيِي، لِأَنَّ الكَعْكَةَ كَانَتْ كَبِيرَةً. أَعْجَبَتْنِي الكَعْكَةُ كَثِيرًا لِأَنَّهَا كَانَتْ طَازَجَةً، أَمَّا الخِدْمَةُ فَكَانَتْ بَطِيئَةً قَلِيلًا، لِأَنَّ المَقْهَى كَانَ مُزْدَحِمًا جِدًّا. سَأَرْجِعُ يَوْمَ السَّبْتِ القَادِمِ بَعْدَ التَّدْرِيبِ، فَمَا رَأْيُكَ أَنْ تَأْتِيَ مَعِي؟ أَنَا مُتَأَكِّدٌ أَنَّكَ سَتُحِبُّ المَكَانَ وَالعَصِيرَ!
إِلَى اللِّقَاءِ،
زَيْدٌ`,
      en: '“Hi Yusuf, how are you? A new café has opened on the high street near the public library; it is spacious and quiet, with lots of books to read. Last Sunday I ordered chocolate cake and strawberry juice, and the bill was only seven pounds — very cheap in my opinion, because the cake was big. I really liked the cake because it was fresh, but the service was a bit slow because the café was very busy. I will go back next Saturday after training — how about coming with me? I am sure you will love the place and the juice! See you, Zaid.”',
      find: ['فُتِحَ مَقْهًى جَدِيدٌ', 'سَبْعَةَ جُنَيْهَاتٍ', 'أَمَّا الخِدْمَةُ فَكَانَتْ', 'فَمَا رَأْيُكَ أَنْ'],
    },
  },
  upgrade: [
    { ar: 'طَلَبْتُ البِيتْزَا.', en: 'I ordered pizza.' },
    { ar: 'طَلَبْتُ بِيتْزَا كَبِيرَةً بِالخُضَارِ، وَكَانَ ثَمَنُهَا عَشَرَةَ جُنَيْهَاتٍ.', en: '… a large vegetable pizza, and it cost ten pounds.' },
    { ar: 'طَلَبْتُ بِيتْزَا كَبِيرَةً بِالخُضَارِ، لِأَنِّي كُنْتُ جَائِعًا جِدًّا بَعْدَ المُبَارَاةِ.', en: '… because I was very hungry after the match.' },
    { ar: '… وَفِي رَأْيِي كَانَتْ لَذِيذَةً، لٰكِنَّهَا كَانَتْ غَالِيَةً قَلِيلًا.', en: '… in my opinion it was tasty, but a little expensive.' },
  ],
  builder: [
    { en: 'Give me the bill, please.', cols: [['أَعْطِنِي', 'أَعْطِي'], ['الحِسَابَ', 'الحِسَابُ'], ['مِنْ فَضْلِكَ', 'لِأَنَّ']], key: [0, 0, 0], why: 'Imperative “give me” = أَعْطِنِي; the bill is the object → الحِسَابَ.' },
    { en: 'The coffee costs three pounds.', cols: [['ثَمَنُ القَهْوَةِ', 'القَهْوَةُ ثَمَنٌ'], ['ثَلَاثَةُ', 'ثَلَاثُ'], ['جُنَيْهَاتٍ', 'جُنَيْهًا']], key: [0, 0, 0], why: 'جُنَيْه is masculine → ثَلَاثَةُ + a plural: ثَلَاثَةُ جُنَيْهَاتٍ.' },
    { en: 'I liked the cake but not the service.', cols: [['أَعْجَبَتْنِي الكَعْكَةُ', 'أَعْجَبَنِي الكَعْكَةُ'], ['لٰكِنْ', 'لِأَنَّ'], ['لَمْ تُعْجِبْنِي الخِدْمَةُ', 'لَا يُعْجِبُنِي الخِدْمَةُ']], key: [0, 0, 0], why: 'الكَعْكَةُ and الخِدْمَةُ are feminine → أَعْجَبَتْنِي · لَمْ تُعْجِبْنِي.' },
  ],
  errors: [
    { wrong: 'أَعْطِينِي القَهْوَةُ.', hint: 'Two things: the imperative to a man, and the object.', right: 'أَعْطِنِي القَهْوَةَ.', why: 'To a man: أَعْطِنِي; the object ends in -a: القَهْوَةَ.' },
    { wrong: 'ثَمَنُ الشَّايِ خَمْسَةُ جُنَيْهٍ.', hint: 'Numbers 3–10 take a plural.', right: 'ثَمَنُ الشَّايِ خَمْسَةُ جُنَيْهَاتٍ.', why: '3–10 + plural genitive: خَمْسَةُ جُنَيْهَاتٍ.' },
    { wrong: 'الوَجْبَةُ كَانَ غَالِيًا.', hint: 'Is وَجْبَة masculine or feminine?', right: 'الوَجْبَةُ كَانَتْ غَالِيَةً.', why: 'Feminine subject → كَانَتْ + feminine adjective: غَالِيَةً.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a special meal out', ar: 'وَجْبَةٌ مُمَيَّزَةٌ فِي مَطْعَمٍ',
    task: 'Full Q3 title: “Eating out with family and friends”. Today write ONLY the past paragraph: a special meal in a restaurant — the occasion, the place, what you ordered, one thing that happened, and how you felt.',
    formula: [
      { ar: 'فِي الصَّيْفِ المَاضِي احْتَفَلْنَا بِنَجَاحِ أُخْتِي فِي مَطْعَمٍ يَمَنِيٍّ.', en: 'T · Last summer we celebrated my sister’s success in a Yemeni restaurant.' },
      { ar: 'طَلَبْنَا المَنْدِي، وَجَلَسْنَا عَلَى الأَرْضِ.', en: 'D · We ordered mandi and sat on the floor.' },
      { ar: 'كَانَ مُمَيَّزًا لِأَنَّهَا أَوَّلُ مَرَّةٍ أَجْلِسُ هٰكَذَا.', en: 'R · It was special — the first time I sat like that.' },
      { ar: 'ضَحِكْنَا كَثِيرًا، وَسَنَرْجِعُ فِي العِيدِ.', en: 'F · We laughed a lot, and we will go back at Eid.' },
    ],
    phrases: [['احْتَفَلْنَا بِ… فِي مَطْعَمٍ …', 'we celebrated … in a … restaurant'], ['طَلَبْنَا … وَ…', 'we ordered … and …'], ['جَاءَ النَّادِلُ وَ…', 'the waiter came and …'], ['كَانَ الحِسَابُ …', 'the bill was …'], ['شَعَرْتُ بِالسَّعَادَةِ لِأَنَّ …', 'I felt happy because …']],
    model: {
      text: 'فِي الصَّيْفِ المَاضِي احْتَفَلْنَا بِنَجَاحِ أُخْتِي الكُبْرَى فِي مَطْعَمٍ يَمَنِيٍّ فِي وَسَطِ المَدِينَةِ. جَلَسْنَا عَلَى الأَرْضِ، وَطَلَبْنَا المَنْدِي بِاللَّحْمِ وَالخُبْزَ السَّاخِنَ، ثُمَّ شَرِبْنَا الشَّايَ بِالحَلِيبِ. فِي آخِرِ الوَجْبَةِ جَاءَ النَّادِلُ بِكَعْكَةٍ كَبِيرَةٍ مَكْتُوبٍ عَلَيْهَا اسْمُ أُخْتِي، لِأَنَّ أَبِي طَلَبَهَا سِرًّا! شَعَرَتْ أُخْتِي بِالمُفَاجَأَةِ، وَضَحِكْنَا كُلُّنَا كَثِيرًا. كَانَ الحِسَابُ غَالِيًا، لٰكِنَّهُ كَانَ أَجْمَلَ مَسَاءٍ فِي الصَّيْفِ، وَسَنَرْجِعُ إِلَى هُنَاكَ فِي العِيدِ.',
      en: 'T: last summer we celebrated my older sister’s success in a Yemeni restaurant downtown · D: we sat on the floor, ordered meat mandi and hot bread, then drank milky tea; at the end the waiter brought a big cake with my sister’s name on it, because dad had ordered it secretly · F: she was surprised and we all laughed a lot · the bill was expensive, but it was the best evening of the summer, and we will go back at Eid.',
      find: ['احْتَفَلْنَا بِنَجَاحِ', 'طَلَبْنَا المَنْدِي', 'لِأَنَّ أَبِي طَلَبَهَا', 'لٰكِنَّهُ كَانَ أَجْمَلَ'],
    },
  },
};
write.Q2.developFrames[1] = { ar: 'طَلَبْتُ ______ بِخَمْسَةِ جُنَيْهَاتٍ، وَ ______ .', en: '2 · I ordered … for five pounds, and …' };

module.exports = { speak, write };
