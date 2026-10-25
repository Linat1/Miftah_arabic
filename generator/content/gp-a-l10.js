'use strict';
/* Guided Practice Rooms · AT-A-L10 · Topic A mixed practice — a weekend day out. New tasks. Teacher-made. */
const XP = require('./xp-a-l10');

const base = { topic: 'A', n: 10, short: 'Mixed Topic A: a Day Out', arShort: 'يَوْمٌ فِي الخَارِجِ', fileTitle: 'Reading_and_Listening_Exam_Skills', title: 'Topic A mixed practice — a weekend day out', icon: 'FaTree', grammar: 'mixed Topic A: time, routine, food, transport; past (qaḍaytu), present and future (sa-) together; suggestions (mā raʾyuka an …?)' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up, the answer ladder, two new role plays (planning a picnic with a friend, a tourist-information desk), a topic conversation with A-R-E-T across all of Topic A, and a one-minute talk about a perfect Saturday.',
  words: XP.speak.words,
  words1: { title: 'Going out — plans and places', ar: 'الخُرُوجُ وَالأَمَاكِنُ' },
  words2: { title: 'Feelings, picnics and suggestions', ar: 'المَشَاعِرُ وَالاقْتِرَاحَاتُ' },
  ladder: {
    q: 'كَيْفَ قَضَيْتَ يَوْمَ السَّبْتِ المَاضِي؟', qEn: 'How did you spend last Saturday?',
    rungs: [
      { ar: 'قَضَيْتُ يَوْمَ السَّبْتِ فِي الحَدِيقَةِ.', en: 'I spent Saturday in the park.' },
      { ar: 'قَضَيْتُ يَوْمَ السَّبْتِ فِي الحَدِيقَةِ، لِأَنَّ الجَوَّ كَانَ مُشْمِسًا.', en: '… because the weather was sunny.' },
      { ar: '… وَذَهَبْنَا بِالدَّرَّاجَاتِ، ثُمَّ أَكَلْنَا نُزْهَةَ طَعَامٍ تَحْتَ الأَشْجَارِ.', en: '… we went by bike, then had a picnic under the trees.' },
      { ar: '… وَالسَّبْتَ القَادِمَ سَنَزُورُ المُتْحَفَ، لٰكِنِّي فِي رَأْيِي أُفَضِّلُ الحَدِيقَةَ!', en: '… next Saturday we will visit the museum — but in my opinion I prefer the park!' },
    ],
  },
  ladderQs: [
    { q: 'أَيْنَ تُحِبُّ أَنْ تَخْرُجَ مَعَ عَائِلَتِكَ؟', l1: 'أُحِبُّ أَنْ نَخْرُجَ إِلَى …', l2: '… لِأَنَّ …', l3: '… آخِرَ مَرَّةٍ …' },
    { q: 'مَاذَا تَأْخُذُ مَعَكَ فِي النُّزْهَةِ؟', l1: 'آخُذُ …', l2: '… لِأَنَّ …', l3: '… وَالمَرَّةَ القَادِمَةَ …' },
    { q: 'كَيْفَ تَذْهَبُونَ إِلَى الشَّاطِئِ؟', l1: 'نَذْهَبُ بِـالسَّيَّارَةِ …', l2: '… لِأَنَّهَا …', l3: '… وَتَسْتَغْرِقُ الرِّحْلَةُ …' },
    { q: 'مَا رَأْيُكَ فِي المَتَاحِفِ؟', l1: 'فِي رَأْيِي المَتَاحِفُ …', l2: '… لِأَنَّ …', l3: '… مَثَلًا زُرْتُ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a phone call with a friend', title: 'Role play 1 — Planning a picnic with a friend', ar: 'نُخَطِّطُ لِنُزْهَةٍ', you: 'a friend', them: 'your friend on the phone',
      tasks: [
        { ex: 'مَا رَأْيُكَ أَنْ نَخْرُجَ يَوْمَ الأَحَدِ؟', task: 'Accept and suggest a place.', plan: 'مَا رَأْيُكَ ← فِكْرَةٌ رَائِعَةٌ! نَذْهَبُ إِلَى …', model: 'فِكْرَةٌ رَائِعَةٌ! نَذْهَبُ إِلَى حَدِيقَةِ المَدِينَةِ.', modelEn: 'Great idea! Let’s go to the city park.' },
        { ex: 'فِي أَيِّ سَاعَةٍ نَلْتَقِي؟', task: 'Suggest a time.', plan: 'أَيِّ سَاعَةٍ ← فِي السَّاعَةِ …', model: 'نَلْتَقِي فِي السَّاعَةِ العَاشِرَةِ صَبَاحًا.', modelEn: 'Let’s meet at ten in the morning.' },
        { ex: 'كَيْفَ نَذْهَبُ إِلَى هُنَاكَ؟', task: 'Suggest transport.', plan: 'كَيْفَ ← نَذْهَبُ بِـالحَافِلَةِ', model: 'نَذْهَبُ بِالحَافِلَةِ، لِأَنَّهَا قَرِيبَةٌ مِنْ بَيْتِي.', modelEn: 'We go by bus, because the stop is near my home.' },
        { ex: 'وَمَاذَا نَأْكُلُ؟', task: 'Say what you will bring.', plan: 'مَاذَا ← سَآخُذُ …', model: 'سَآخُذُ سَنْدَوِيشَاتٍ وَفَوَاكِهَ وَمَاءً.', modelEn: 'I’ll bring sandwiches, fruit and water.' },
        { unexpected: true, ex: 'وَإِذَا كَانَ الجَوُّ مُمْطِرًا؟', task: 'Answer the unexpected question.', plan: 'إِذَا ← إِذَا … سَنَذْهَبُ إِلَى …', model: 'إِذَا كَانَ الجَوُّ مُمْطِرًا، سَنَذْهَبُ إِلَى المُتْحَفِ.', modelEn: 'If it rains, we will go to the museum.' },
      ],
      girl: 'رَأْيُكِ',
      notes: 'Language: accepting (fikratun rāʾiʿa) · times · bi- + transport · sa-ākhudhu (future) · idhā … sa- (real condition).',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a tourist-information desk in Muscat', title: 'Role play 2 — At the tourist-information desk', ar: 'فِي مَكْتَبِ المَعْلُومَاتِ السِّيَاحِيَّةِ', you: 'a visitor with a free Saturday', them: 'the information officer',
      tasks: [
        { ex: 'أَهْلًا! مَاذَا تُحِبُّ أَنْ تَفْعَلَ يَوْمَ السَّبْتِ؟', task: 'Say what you like doing on a day out, with a reason.', model: 'أُحِبُّ أَنْ أَزُورَ الأَمَاكِنَ التَّارِيخِيَّةَ، لِأَنِّي أَدْرُسُ التَّارِيخَ فِي المَدْرَسَةِ.', modelEn: 'I like visiting historical places, because I study history at school.' },
        { ex: 'أَنْصَحُكَ بِقَلْعَةِ نَزْوَى، لٰكِنَّهَا بَعِيدَةٌ قَلِيلًا.', task: 'ASK how to get there and how long it takes.', model: 'كَيْفَ أَذْهَبُ إِلَيْهَا؟ وَكَمْ تَسْتَغْرِقُ الرِّحْلَةُ؟', modelEn: 'How do I get there? And how long does the journey take?' },
        { ex: 'سَاعَتَانِ بِالحَافِلَةِ. هَلْ تُفَضِّلُ الشَّاطِئَ أَمِ الجِبَالَ؟', task: 'State a preference and compare.', model: 'أُفَضِّلُ الجِبَالَ، لِأَنَّهَا أَبْرَدُ مِنَ الشَّاطِئِ فِي الصَّيْفِ وَأَهْدَأُ.', modelEn: 'I prefer the mountains — cooler than the beach in summer, and quieter.' },
        { ex: 'هَلْ زُرْتَ عُمَانَ مِنْ قَبْلُ؟', task: 'Say what you did yesterday (past).', model: 'لَا، هٰذِهِ أَوَّلُ زِيَارَةٍ؛ أَمْسِ تَجَوَّلْتُ فِي السُّوقِ القَدِيمِ وَأَكَلْتُ الحَلْوَى العُمَانِيَّةَ.', modelEn: 'No, this is my first visit; yesterday I wandered in the old souk and ate Omani halwa.' },
        { unexpected: true, ex: 'لَوْ كَانَ عِنْدَكَ يَوْمٌ آخَرُ، مَاذَا تَفْعَلُ؟', task: 'Answer the unexpected question (law … la-).', model: 'لَوْ كَانَ عِنْدِي يَوْمٌ آخَرُ، لَسَبَحْتُ فِي البَحْرِ، وَلَزُرْتُ القَلْعَةَ مَرَّةً ثَانِيَةً.', modelEn: 'If I had another day, I would swim in the sea and visit the castle again.' },
      ],
      girl: 'تُحِبِّينَ · تَفْعَلِي · أَنْصَحُكِ · تُفَضِّلِينَ · زُرْتِ · عِنْدَكِ',
      notes: 'Language: uḥibbu an azūra · questions with kayfa / kam · comparatives abradu, ahdaʾu · past narrative (tajawwaltu) · law … la- (Stretch).',
    },
  ],
  convAr: 'كُلُّ مَوَاضِيعِ المِحْوَرِ الأَوَّلِ',
  conv: [
    { route: 'Core', q: 'مَاذَا تَفْعَلُ فِي نِهَايَةِ الأُسْبُوعِ عَادَةً؟', en: 'What do you usually do at the weekend?', push: 'مَعَ مَنْ؟' },
    { route: 'Core', q: 'مَا الطَّعَامُ الَّذِي تَأْكُلُهُ فِي النُّزْهَةِ؟', en: 'What food do you eat on a picnic?', push: 'لِمَاذَا؟' },
    { route: 'Develop', q: 'صِفْ يَوْمًا مُمْتِعًا قَضَيْتَهُ فِي الخَارِجِ.', en: 'Describe a fun day you spent out.', push: 'وَكَيْفَ ذَهَبْتُمْ؟' },
    { route: 'Develop', q: 'مَاذَا سَتَفْعَلُ فِي العُطْلَةِ القَادِمَةِ؟', en: 'What will you do next holiday?', push: 'لِمَاذَا؟' },
    { route: 'Stretch', q: 'هَلْ يَقْضِي الشَّبَابُ وَقْتًا كَافِيًا فِي الهَوَاءِ الطَّلْقِ؟', en: 'Do young people spend enough time outdoors?', push: 'مَا الحَلُّ؟' },
    { route: 'Stretch', q: 'لَوْ خَطَّطْتَ يَوْمًا مِثَالِيًّا لِعَائِلَتِكَ، كَيْفَ يَكُونُ؟', en: 'If you planned a perfect day for your family, what would it be like?', push: 'وَلِمَاذَا؟' },
  ],
  convModels: [
    { q: 'مَاذَا تَفْعَلُ فِي نِهَايَةِ الأُسْبُوعِ عَادَةً؟', model: 'عَادَةً أَلْعَبُ كُرَةَ القَدَمِ يَوْمَ السَّبْتِ، لِأَنِّي فِي فَرِيقِ الحَيِّ؛ وَيَوْمَ الأَحَدِ نَزُورُ جَدَّتِي، وَالأُسْبُوعَ القَادِمَ سَنَذْهَبُ إِلَى الشَّاطِئِ.', modelEn: 'A: football on Saturdays · R: I’m in the local team · E: on Sundays we visit grandma · T: next week we’ll go to the beach.' },
    { q: 'صِفْ يَوْمًا مُمْتِعًا قَضَيْتَهُ فِي الخَارِجِ.', model: 'فِي الرَّبِيعِ قَضَيْنَا يَوْمًا فِي مَزْرَعَةٍ قُرْبَ المَدِينَةِ؛ ذَهَبْنَا بِالقِطَارِ، ثُمَّ قَطَفْنَا الفَرَاوِلَةَ، وَأَكَلْنَا الغَدَاءَ عَلَى العُشْبِ، وَكَانَ أَجْمَلَ يَوْمٍ فِي السَّنَةِ.', modelEn: 'A: a day at a farm in spring · E: by train, picked strawberries, lunch on the grass · opinion: the best day of the year.' },
    { q: 'هَلْ يَقْضِي الشَّبَابُ وَقْتًا كَافِيًا فِي الهَوَاءِ الطَّلْقِ؟', model: 'فِي رَأْيِي لَا، لِأَنَّهُمْ يَقْضُونَ سَاعَاتٍ أَمَامَ الشَّاشَاتِ؛ عِنْدَمَا كَانَ أَبِي صَغِيرًا كَانَ يَلْعَبُ فِي الخَارِجِ كُلَّ يَوْمٍ، لِذٰلِكَ يَجِبُ أَنْ تُنَظِّمَ المَدَارِسُ رِحْلَاتٍ أَكْثَرَ.', modelEn: 'Opinion: no · R: hours in front of screens · past: when dad was young he played outside daily · solution: schools should organise more trips.' },
  ],
  talk: {
    title: 'One minute: my perfect Saturday', ar: 'يَوْمُ السَّبْتِ المِثَالِيُّ',
    text: 'Talk for one minute about your perfect Saturday, using everything from Topic A: when you wake up, what you eat, where you go and how, who with — and compare it with last Saturday.',
    routes: {
      core: '30 seconds: four sentences — time, food, place, transport.',
      develop: '60 seconds: add reasons and compare with last Saturday (past).',
      stretch: '90 seconds: all three time frames, a comparison and a conditional (لَوْ …).',
    },
  },
  checkCore: 'used Topic A words: time, food, places and transport',
  checkDevelop: 'used past and future in the same answer (قَضَيْتُ … سَأَزُورُ …)',
};
speak.ladderQs[2].l1 = 'نَذْهَبُ بِالسَّيَّارَةِ …';
speak.RP[0].tasks[2].plan = 'كَيْفَ ← نَذْهَبُ بِالحَافِلَةِ …';

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up, decoding a new Q2 task (a class trip to the countryside), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula — using all of Topic A.',
  FORM: {
    title: 'Class trip: permission and details', ar: 'رِحْلَةُ الصَّفِّ: التَّفَاصِيلُ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'المَكَانُ المُفَضَّلُ لِلرِّحْلَةِ', en: 'Preferred place for the trip', tip: 'حَدِيقَةُ الحَيَوَانَاتِ' },
      { core: true, ar: 'الطَّعَامُ الَّذِي سَتُحْضِرُهُ', en: 'Food you will bring', tip: 'سَنْدَوِيشَاتٌ وَفَوَاكِهُ' },
      { core: true, ar: 'مُشْكِلَةٌ صِحِّيَّةٌ (إِنْ وُجِدَتْ)', en: 'A health problem (if any)', tip: 'لَا تُوجَدُ · الرَّبْوُ' },
      { core: true, ar: 'رَقْمُ هَاتِفِ الوَالِدَيْنِ', en: 'Parents’ phone number', tip: 'Digits.' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُرِيدُ هٰذَا المَكَانَ؟', en: 'ONE sentence: why this place?', tip: 'أُرِيدُ أَنْ نَزُورَ … لِأَنَّ …' },
    ],
  },
  Q2: {
    title: 'Question 2: a class trip to the countryside', ar: 'رِحْلَةُ الصَّفِّ إِلَى الرِّيفِ',
    task: 'Your class went on a day trip to the countryside. Write an email in Arabic to your friend of about 80–90 words. You must include: • when you left and how you travelled • what you did and ate during the day • the best and worst moments, and why • the next trip your class is planning.',
    phrases: [['انْطَلَقْنَا فِي السَّاعَةِ …', 'we set off at …'], ['أَوَّلًا … ثُمَّ … وَفِي النِّهَايَةِ …', 'first … then … and finally …'], ['أَجْمَلُ لَحْظَةٍ كَانَتْ … ، أَمَّا أَسْوَأُ …', 'the best moment was …, as for the worst …'], ['فِي الشَّهْرِ القَادِمِ سَنَزُورُ …', 'next month we will visit …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنْ رِحْلَةِ الصَّفِّ إِلَى الرِّيفِ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about the class trip to the countryside (80–90 words).'],
      ['1', 'مَتَى انْطَلَقْتُمْ؟ وَكَيْفَ سَافَرْتُمْ؟', 'When you left and how you travelled'],
      ['2', 'مَاذَا فَعَلْتُمْ وَأَكَلْتُمْ؟', 'What you did and ate'],
      ['3', 'مَا أَجْمَلُ لَحْظَةٍ وَأَسْوَأُ لَحْظَةٍ؟ وَلِمَاذَا؟', 'The best and worst moments, and why'],
      ['4', 'مَا الرِّحْلَةُ القَادِمَةُ؟', 'The next trip being planned'],
    ],
    decode: ['an email to a FRIEND → informal greeting and closing', 'مَتَى انْطَلَقْتُمْ · كَيْفَ → PAST (we): time + transport', 'مَاذَا فَعَلْتُمْ وَأَكَلْتُمْ → PAST, in order', 'أَجْمَلُ · أَسْوَأُ … وَلِمَاذَا → superlatives + reasons', 'القَادِمَةُ → FUTURE (sa-)'],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', en: 'Hello …, how are you?' },
      { ar: 'انْطَلَقْنَا فِي السَّاعَةِ ______ ، وَسَافَرْنَا بِالحَافِلَةِ.', en: '1 · We set off at …, and travelled by coach.' },
      { ar: 'مَشَيْنَا ______ ، ثُمَّ أَكَلْنَا ______ .', en: '2 · We walked …, then we ate …' },
      { ar: 'أَجْمَلُ لَحْظَةٍ كَانَتْ ______ ، لِأَنَّ ______ .', en: '3 · The best moment was …, because …' },
      { ar: 'فِي الشَّهْرِ القَادِمِ سَنَزُورُ ______ .', en: '4 · Next month we will visit …' },
    ],
    developFrames: [
      { ar: 'اسْتَغْرَقَتِ الرِّحْلَةُ ______ ، وَكَانَتِ الحَافِلَةُ ______ .', en: '1 · The journey took …, and the coach was …' },
      { ar: 'أَوَّلًا ______ ، ثُمَّ ______ ، وَفِي النِّهَايَةِ ______ .', en: '2 · First …, then …, finally …' },
      { ar: 'أَمَّا أَسْوَأُ لَحْظَةٍ فَكَانَتْ ______ .', en: '3 · As for the worst moment, it was …' },
      { ar: 'أَتَمَنَّى أَنْ ______ ، لِأَنَّ ______ .', en: '4 · I hope …, because …' },
    ],
    bank: ['انْطَلَقْنَا', 'بِالحَافِلَةِ', 'مَزْرَعَةٌ · نَهْرٌ', 'نُزْهَةُ طَعَامٍ', 'مُمْتِعٌ · مُتْعِبٌ', 'مُتَحَمِّسٌ', 'أَجْمَلُ · أَسْوَأُ', 'سَنَزُورُ'],
    model: {
      text: `مَرْحَبًا يَا نُورُ،
كَيْفَ حَالُكِ؟ يَوْمَ الخَمِيسِ المَاضِي ذَهَبَ صَفُّنَا فِي رِحْلَةٍ إِلَى الرِّيفِ. انْطَلَقْنَا فِي السَّاعَةِ الثَّامِنَةِ صَبَاحًا بِالحَافِلَةِ، وَاسْتَغْرَقَتِ الرِّحْلَةُ سَاعَتَيْنِ. أَوَّلًا زُرْنَا مَزْرَعَةً كَبِيرَةً وَأَطْعَمْنَا الخِرَافَ، ثُمَّ مَشَيْنَا بِجَانِبِ النَّهْرِ، وَأَكَلْنَا نُزْهَةَ طَعَامٍ لَذِيذَةً تَحْتَ الأَشْجَارِ. أَجْمَلُ لَحْظَةٍ كَانَتْ عِنْدَمَا رَأَيْنَا حِصَانًا صَغِيرًا عُمْرُهُ يَوْمٌ وَاحِدٌ! أَمَّا أَسْوَأُ لَحْظَةٍ فَكَانَتْ فِي طَرِيقِ العَوْدَةِ، لِأَنَّ المَطَرَ نَزَلَ بِقُوَّةٍ وَلَمْ يَكُنْ عِنْدِي مِعْطَفٌ. فِي الشَّهْرِ القَادِمِ سَنَزُورُ مُتْحَفَ العُلُومِ، وَأَنَا مُتَحَمِّسَةٌ جِدًّا!
إِلَى اللِّقَاءِ،
هِنْدُ`,
      en: '“Hi Nour, how are you? Last Thursday our class went on a trip to the countryside. We set off at eight in the morning by coach, and the journey took two hours. First we visited a big farm and fed the sheep, then we walked by the river and had a tasty picnic under the trees. The best moment was when we saw a foal only one day old! The worst moment was on the way back, because it rained heavily and I had no coat. Next month we will visit the science museum, and I am very excited! See you, Hind.”',
      find: ['انْطَلَقْنَا فِي السَّاعَةِ', 'أَوَّلًا … ثُمَّ', 'أَمَّا أَسْوَأُ لَحْظَةٍ فَكَانَتْ', 'سَنَزُورُ مُتْحَفَ'],
    },
  },
  upgrade: [
    { ar: 'ذَهَبْنَا إِلَى الشَّاطِئِ.', en: 'We went to the beach.' },
    { ar: 'ذَهَبْنَا إِلَى الشَّاطِئِ بِالقِطَارِ يَوْمَ الأَحَدِ، وَاسْتَغْرَقَتِ الرِّحْلَةُ سَاعَةً.', en: '… by train on Sunday; the journey took an hour.' },
    { ar: 'ذَهَبْنَا إِلَى الشَّاطِئِ بِالقِطَارِ يَوْمَ الأَحَدِ، لِأَنَّ الجَوَّ كَانَ حَارًّا جِدًّا.', en: '… because the weather was very hot.' },
    { ar: '… وَفِي رَأْيِي كَانَ أَجْمَلَ يَوْمٍ فِي الصَّيْفِ، لٰكِنَّ الشَّاطِئَ كَانَ مُزْدَحِمًا.', en: '… in my opinion it was the best day of the summer, but the beach was crowded.' },
  ],
  builder: [
    { en: 'We will visit the museum next Saturday.', cols: [['سَنَزُورُ', 'زُرْنَا'], ['المُتْحَفَ', 'المُتْحَفُ'], ['يَوْمَ السَّبْتِ القَادِمِ', 'يَوْمَ السَّبْتِ المَاضِي']], key: [0, 0, 0], why: 'Next Saturday → future سَنَزُورُ; the object → المُتْحَفَ.' },
    { en: 'The trip was fun but tiring.', cols: [['كَانَتِ الرِّحْلَةُ', 'كَانَ الرِّحْلَةُ'], ['مُمْتِعَةً', 'مُمْتِعٌ'], ['لٰكِنَّهَا مُتْعِبَةٌ', 'لٰكِنَّهُ مُتْعِبٌ']], key: [0, 0, 0], why: 'الرِّحْلَةُ is feminine → كَانَتْ … مُمْتِعَةً · لٰكِنَّهَا.' },
    { en: 'How about having a picnic in the park?', cols: [['مَا رَأْيُكَ', 'مَا رَأْيِي'], ['أَنْ نَأْكُلَ', 'أَنْ نَأْكُلُ'], ['فِي الحَدِيقَةِ', 'مِنَ الحَدِيقَةِ']], key: [0, 0, 0], why: 'Suggestion = مَا رَأْيُكَ أَنْ + a verb in -a.' },
  ],
  errors: [
    { wrong: 'الأُسْبُوعَ المَاضِي سَنَذْهَبُ إِلَى البَحْرِ.', hint: 'Which time? Which tense?', right: 'الأُسْبُوعَ المَاضِي ذَهَبْنَا إِلَى البَحْرِ.', why: 'Last week → past: ذَهَبْنَا.' },
    { wrong: 'مَا رَأْيُكَ أَنْ نَخْرُجُ؟', hint: 'Look at the verb after أَنْ.', right: 'مَا رَأْيُكَ أَنْ نَخْرُجَ؟', why: 'After أَنْ the verb ends in -a: نَخْرُجَ.' },
    { wrong: 'الحَدَائِقُ جَمِيلُونَ.', hint: 'Non-human plural agreement.', right: 'الحَدَائِقُ جَمِيلَةٌ.', why: 'Non-human plural → feminine singular: جَمِيلَةٌ.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: the best day out of my life', ar: 'أَجْمَلُ يَوْمٍ فِي الخَارِجِ',
    task: 'Full Q3 title: “Free time and days out”. Today write ONLY the past paragraph: the best day out you remember — where, how you went, what you did and ate, why it was special and how you felt.',
    formula: [
      { ar: 'أَجْمَلُ يَوْمٍ قَضَيْتُهُ كَانَ فِي جِبَالِ وِيلْزَ.', en: 'T · The best day I spent was in the Welsh mountains.' },
      { ar: 'صَعِدْنَا الجَبَلَ، وَأَكَلْنَا فِي القِمَّةِ.', en: 'D · We climbed the mountain and ate at the top.' },
      { ar: 'كَانَ مُمَيَّزًا لِأَنَّ كُلَّ العَائِلَةِ كَانَتْ مَعَنَا.', en: 'R · special because the whole family was with us.' },
      { ar: 'شَعَرْتُ بِالفَخْرِ، وَسَنَرْجِعُ فِي الصَّيْفِ.', en: 'F · I felt proud, and we will go back in summer.' },
    ],
    phrases: [['أَجْمَلُ يَوْمٍ قَضَيْتُهُ كَانَ …', 'the best day I spent was …'], ['انْطَلَقْنَا … وَوَصَلْنَا …', 'we set off … and arrived …'], ['قَضَيْنَا اليَوْمَ فِي …', 'we spent the day …'], ['كَانَ مُمَيَّزًا لِأَنَّ …', 'it was special because …'], ['لَنْ أَنْسَى …', 'I will never forget …']],
    model: {
      text: 'أَجْمَلُ يَوْمٍ قَضَيْتُهُ كَانَ فِي جِبَالِ وِيلْزَ فِي الصَّيْفِ المَاضِي. انْطَلَقْنَا بِالسَّيَّارَةِ فِي السَّادِسَةِ صَبَاحًا، وَوَصَلْنَا بَعْدَ ثَلَاثِ سَاعَاتٍ. صَعِدْنَا الجَبَلَ مَعًا، وَكَانَ الطَّرِيقُ صَعْبًا، لٰكِنَّ المَنَاظِرَ كَانَتْ رَائِعَةً. فِي القِمَّةِ أَكَلْنَا السَّنْدَوِيشَاتِ وَشَرِبْنَا الشَّايَ، وَرَأَيْنَا البَحْرَ مِنْ بَعِيدٍ. كَانَ مُمَيَّزًا لِأَنَّ جَدِّي صَعِدَ مَعَنَا، وَعُمْرُهُ سَبْعُونَ سَنَةً! شَعَرْتُ بِالفَخْرِ بِهِ، وَلَنْ أَنْسَى ذٰلِكَ اليَوْمَ أَبَدًا.',
      en: 'T: the best day I spent was in the Welsh mountains last summer · D: we set off by car at six and arrived three hours later; we climbed together — the path was hard but the views were amazing; at the top we ate sandwiches, drank tea and saw the sea in the distance · R: special because my seventy-year-old grandfather climbed with us · F: I felt proud of him, and I will never forget that day.',
      find: ['أَجْمَلُ يَوْمٍ قَضَيْتُهُ', 'انْطَلَقْنَا … وَوَصَلْنَا', 'كَانَ مُمَيَّزًا لِأَنَّ', 'وَلَنْ أَنْسَى'],
    },
  },
};

module.exports = { speak, write };
