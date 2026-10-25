'use strict';
/* Guided Practice Rooms · TC-L12 · Topic C Review — mock exam practice. New tasks across all of Topic C. Teacher-made. */
const XP = require('./xp-c-l12');

const base = { topic: 'C', n: 12, short: 'Topic C Review', arShort: 'مُرَاجَعَةُ المِحْوَرِ الثَّالِثِ', fileTitle: 'Review_Four_Skills_Assessment', title: 'Topic C Review — mock exam practice', icon: 'FaClipboardCheck', grammar: 'all of Topic C: yaqaʿu / taqaʿu + compass points; non-human plurals; weather + kāna; bi-sababi · mimmā yusabbibu; yajibu ʿalā … an · li-kay; verbs + prepositions; the passive; yūjadu / tūjadu; prices and numbers; measurements; ṣaḥīḥun anna … ghayra anna' };

const speak = {
  ...base,
  focus: 'The last Topic C practice room before the mock: students run their own speaking practice using everything from the topic — a word warm-up, the answer ladder, two mixed role plays (planning an eco-holiday, a town-twinning video call), a conversation with A-R-E-T across all of Topic C, and a one-minute talk.',
  words: XP.speak.words,
  words1: { title: 'Topic C: places, nature, weather, environment', ar: 'الأَمَاكِنُ وَالطَّبِيعَةُ وَالطَّقْسُ وَالبِيئَةُ' },
  words2: { title: 'Topic C: technology, town, shopping, objects', ar: 'التِّكْنُولُوجْيَا وَالمَدِينَةُ وَالتَّسَوُّقُ' },
  ladder: {
    q: 'صِفْ مَكَانًا تُحِبُّهُ فِي العَالَمِ.', qEn: 'Describe a place you love in the world.',
    rungs: [
      { ar: 'أُحِبُّ مَدِينَةَ إِسْطَنْبُولَ.', en: 'I love Istanbul.' },
      { ar: 'أُحِبُّ مَدِينَةَ إِسْطَنْبُولَ الَّتِي تَقَعُ بَيْنَ آسِيَا وَأُورُوبَّا.', en: '… which lies between Asia and Europe.' },
      { ar: '… فِيهَا مَسَاجِدُ قَدِيمَةٌ وَأَسْوَاقٌ مُلَوَّنَةٌ، وَالجَوُّ فِيهَا مُعْتَدِلٌ فِي الرَّبِيعِ.', en: '… it has old mosques and colourful markets, and the weather is mild in spring.' },
      { ar: '… صَحِيحٌ أَنَّهَا مُزْدَحِمَةٌ جِدًّا، غَيْرَ أَنِّي لَوْ زُرْتُهَا مَرَّةً أُخْرَى، لَرَكِبْتُ القَارِبَ عَلَى البُوسْفُورِ مَرَّةً ثَانِيَةً.', en: '… it’s true it’s very crowded, but if I visited again, I would take the boat on the Bosphorus once more.' },
    ],
  },
  ladderQs: [
    { q: 'كَيْفَ كَانَ الطَّقْسُ فِي آخِرِ عُطْلَةٍ؟', l1: 'كَانَ الجَوُّ …', l2: '… لِذٰلِكَ …', l3: '… وَفِي العُطْلَةِ القَادِمَةِ …' },
    { q: 'مَا الَّذِي يَجِبُ أَنْ نَفْعَلَهُ لِنَحْمِيَ البِيئَةَ؟', l1: 'يَجِبُ أَنْ …', l2: '… لِكَيْ …', l3: '… مَثَلًا فِي مَدْرَسَتِي …' },
    { q: 'مَا رَأْيُكَ فِي وَسَائِلِ التَّوَاصُلِ؟', l1: 'فِي رَأْيِي …', l2: '… مِنْ فَوَائِدِهَا … وَمِنْ عُيُوبِهَا …', l3: '… صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …' },
    { q: 'صِفْ شَيْئًا اشْتَرَيْتَهُ مُؤَخَّرًا.', l1: 'اشْتَرَيْتُ …', l2: '… مَصْنُوعٌ مِنْ … وَثَمَنُهُ …', l3: '… وَكَانَ أَرْخَصَ / أَغْلَى مِنْ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'an eco-travel agency', title: 'Role play 1 — Planning an eco-holiday', ar: 'نُخَطِّطُ لِعُطْلَةٍ صَدِيقَةٍ لِلْبِيئَةِ', you: 'a customer', them: 'the travel agent',
      tasks: [
        { ex: 'أَهْلًا! أَيْنَ تُرِيدُ أَنْ تُسَافِرَ؟', task: 'Name a country and say where it is.', plan: 'أَيْنَ ← إِلَى … الَّتِي تَقَعُ فِي …', model: 'أُرِيدُ أَنْ أُسَافِرَ إِلَى عُمَانَ الَّتِي تَقَعُ فِي جَنُوبِ شَرْقِ الجَزِيرَةِ العَرَبِيَّةِ.', modelEn: 'I want to travel to Oman, which is in the south-east of the Arabian Peninsula.' },
        { ex: 'مَتَى تُرِيدُ أَنْ تُسَافِرَ؟', task: 'Choose a season and give a reason.', plan: 'مَتَى ← فِي … لِأَنَّ الجَوَّ …', model: 'فِي الشِّتَاءِ، لِأَنَّ الجَوَّ مُعْتَدِلٌ وَلَيْسَ حَارًّا.', modelEn: 'In winter, because the weather is mild, not hot.' },
        { ex: 'مَاذَا تُرِيدُ أَنْ تَرَى؟', task: 'Name two natural places.', plan: 'مَاذَا ← أُرِيدُ أَنْ أَرَى … وَ…', model: 'أُرِيدُ أَنْ أَرَى الجِبَالَ وَالشَّوَاطِئَ.', modelEn: 'I want to see the mountains and the beaches.' },
        { ex: 'كَيْفَ تُرِيدُ أَنْ تَتَنَقَّلَ هُنَاكَ؟', task: 'Choose green transport.', plan: 'كَيْفَ ← بِالحَافِلَةِ … لِكَيْ …', model: 'بِالحَافِلَةِ، لِكَيْ نُقَلِّلَ مِنَ التَّلَوُّثِ.', modelEn: 'By bus, to reduce pollution.' },
        { unexpected: true, ex: 'كَمْ تُرِيدُ أَنْ تَدْفَعَ؟', task: 'Answer the unexpected question.', plan: 'كَمْ ← أَلْفَ جُنَيْهٍ تَقْرِيبًا', model: 'حَوَالَيْ أَلْفِ جُنَيْهٍ لِكُلِّ شَخْصٍ.', modelEn: 'About a thousand pounds per person.' },
      ],
      girl: 'تُرِيدِينَ · تُسَافِرِي · تَرَيْ · تَتَنَقَّلِي · تَدْفَعِي',
      notes: 'Topic C mix: allatī taqaʿu fī + compass (L01) · weather + li-anna (L03) · non-human plural al-jibāla (L02) · li-kay (L05) · prices (L09).',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a video call between twin towns', title: 'Role play 2 — A town-twinning video call', ar: 'مُكَالَمَةٌ بَيْنَ مَدِينَتَيْنِ تَوْأَمَيْنِ', you: 'a student representing your town', them: 'a student from your twin town in Jordan',
      tasks: [
        { ex: 'حَدِّثْنَا عَنْ مَدِينَتِكَ وَخِدْمَاتِهَا.', task: 'Describe your town (location, services, what is missing).', model: 'تَقَعُ مَدِينَتِي فِي شَمَالِ إِنْجِلْتِرَا، وَفِيهَا مُسْتَشْفًى كَبِيرٌ وَمَكْتَبَةٌ حَدِيثَةٌ، لٰكِنْ لَا يُوجَدُ فِيهَا مَرْكَزٌ لِلشَّبَابِ.', modelEn: 'My town is in the north of England, with a big hospital and a modern library, but no youth centre.' },
        { ex: 'مَا أَكْبَرُ مُشْكِلَةٍ بِيئِيَّةٍ عِنْدَكُمْ؟', task: 'Give a problem, cause and effect.', model: 'الفَيَضَانَاتُ، بِسَبَبِ الأَمْطَارِ الغَزِيرَةِ وَقَطْعِ الأَشْجَارِ، مِمَّا يُسَبِّبُ أَضْرَارًا فِي البُيُوتِ كُلَّ شِتَاءٍ.', modelEn: 'Floods, because of heavy rain and tree-cutting, which damage homes every winter.' },
        { ex: 'كَيْفَ تَغَيَّرَتْ مَدِينَتُكُمْ؟', task: 'Compare past and present (passive + kāna).', model: 'فِي المَاضِي كَانَتْ فِيهَا مَصَانِعُ كَثِيرَةٌ، أَمَّا الآنَ فَقَدْ أُغْلِقَتْ، وَبُنِيَتْ مَكَانَهَا شُقَقٌ وَمَحَلَّاتٌ.', modelEn: 'In the past it had many factories; now they have been closed, and flats and shops were built in their place.' },
        { ex: 'عِنْدَنَا فِي عَمَّانَ مُشْكِلَةُ قِلَّةِ المَاءِ.', task: 'React, suggest a joint project and ASK a question.', model: 'هٰذَا صَعْبٌ! يُمْكِنُ أَنْ نَعْمَلَ مَشْرُوعًا مُشْتَرَكًا عَلَى الإِنْتَرْنِتِ عَنْ تَوْفِيرِ المَاءِ. مَا رَأْيُكُمْ؟', modelEn: 'That’s hard! We could do a joint online project about saving water. What do you think?' },
        { unexpected: true, ex: 'لَوْ زُرْتَنَا، مَاذَا تَشْتَرِي هَدِيَّةً لِعَائِلَتِكَ؟', task: 'Answer the unexpected question (law … la- + description + price).', model: 'لَوْ زُرْتُكُمْ، لَاشْتَرَيْتُ صُنْدُوقًا خَشَبِيًّا صَغِيرًا مِنَ السُّوقِ القَدِيمِ لِأُمِّي، وَلَفَاصَلْتُ عَلَى السِّعْرِ قَلِيلًا!', modelEn: 'If I visited you, I would buy my mum a small wooden box from the old souq — and bargain a bit on the price!' },
      ],
      girl: 'مَدِينَتِكِ · عِنْدَكِ · زُرْتِنَا · تَشْتَرِينَ · لِعَائِلَتِكِ',
      notes: 'Topic C mix at Stretch level: taqaʿu + lā yūjadu (L08) · bi-sababi … mimmā yusabbibu (L04) · passive past ughliqat / buniyat (L04, L08) · suggestions (L05) · law … la- + materials and bargaining (L09–L10).',
    },
  ],
  convAr: 'مُحَادَثَةٌ عَنْ كُلِّ المِحْوَرِ',
  conv: [
    { route: 'Core', q: 'أَيْنَ تَقَعُ مَدِينَتُكَ؟', en: 'Where is your town?', push: 'وَمَاذَا يُوجَدُ فِيهَا؟' },
    { route: 'Core', q: 'كَيْفَ الطَّقْسُ اليَوْمَ؟', en: 'What is the weather like today?', push: 'وَغَدًا؟' },
    { route: 'Develop', q: 'مَاذَا فَعَلْتَ مُؤَخَّرًا لِتَحْمِيَ البِيئَةَ؟', en: 'What have you done recently to protect the environment?', push: 'وَعَائِلَتُكَ؟' },
    { route: 'Develop', q: 'صِفْ شَيْئًا مُهِمًّا عِنْدَكَ: شَكْلَهُ وَمَادَّتَهُ.', en: 'Describe an important object: its shape and material.', push: 'مِنْ أَيْنَ هُوَ؟' },
    { route: 'Stretch', q: 'هَلِ التِّكْنُولُوجْيَا جَعَلَتْ حَيَاتَنَا أَفْضَلَ؟', en: 'Has technology made our lives better?', push: 'وَلٰكِنْ …؟' },
    { route: 'Stretch', q: 'لَوِ اسْتَطَعْتَ أَنْ تَعِيشَ فِي أَيِّ بَلَدٍ، أَيْنَ تَعِيشُ؟', en: 'If you could live in any country, where would you live?', push: 'وَلِمَاذَا لَيْسَ هُنَا؟' },
  ],
  convModels: [
    { q: 'مَاذَا فَعَلْتَ مُؤَخَّرًا لِتَحْمِيَ البِيئَةَ؟', model: 'فِي الأُسْبُوعِ المَاضِي بَدَأْتُ أَذْهَبُ إِلَى المَدْرَسَةِ بِالدَّرَّاجَةِ، لِأَنَّ زَحْمَةَ المُرُورِ تُلَوِّثُ الهَوَاءَ؛ بِالإِضَافَةِ إِلَى ذٰلِكَ أُعِيدُ تَدْوِيرَ العُلَبِ، وَسَأُقْنِعُ أَبِي بِأَنْ يَشْتَرِيَ سَيَّارَةً كَهْرَبَائِيَّةً.', modelEn: 'A: last week I started cycling to school · R: traffic pollutes the air · E: I also recycle cans · T: I’ll persuade dad to buy an electric car.' },
    { q: 'صِفْ شَيْئًا مُهِمًّا عِنْدَكَ: شَكْلَهُ وَمَادَّتَهُ.', model: 'عِنْدِي سَجَّادَةُ صَلَاةٍ مُسْتَطِيلَةٌ مَصْنُوعَةٌ مِنَ الصُّوفِ، طُولُهَا مِتْرٌ وَعِشْرُونَ سَنْتِيمِتْرًا؛ هِيَ مُهِمَّةٌ لِأَنَّ جَدِّي اشْتَرَاهَا لِي فِي مَكَّةَ، وَسَأُعْطِيهَا لِابْنِي يَوْمًا مَا.', modelEn: 'A: a rectangular wool prayer mat, 1.2 m long · R: grandad bought it for me in Makkah · T: I’ll give it to my son one day.' },
    { q: 'هَلِ التِّكْنُولُوجْيَا جَعَلَتْ حَيَاتَنَا أَفْضَلَ؟', model: 'صَحِيحٌ أَنَّهَا جَعَلَتِ التَّوَاصُلَ وَالتَّسَوُّقَ أَسْهَلَ، غَيْرَ أَنَّنَا أَصْبَحْنَا نَتَكَلَّمُ وَجْهًا لِوَجْهٍ أَقَلَّ؛ مَثَلًا، فِي العَشَاءِ كَانَ كُلُّ وَاحِدٍ فِي عَائِلَتِي يَنْظُرُ إِلَى هَاتِفِهِ، لِذٰلِكَ قَرَّرْنَا أَنْ نَضَعَ الهَوَاتِفَ فِي صُنْدُوقٍ.', modelEn: 'Concession: it made communication and shopping easier, but we talk face to face less · E: at dinner everyone in my family looked at their phone, so we decided to put phones in a box.' },
  ],
  talk: {
    title: 'One minute: the world around me', ar: 'العَالَمُ حَوْلِي',
    text: 'Talk for one minute linking all of Topic C: where you live, the landscape and weather, an environmental problem and a solution, how you use technology — and a place in the world you want to visit.',
    routes: {
      core: '30 seconds: one sentence for each of four themes (place · weather · environment · technology).',
      develop: '60 seconds: add a cause (بِسَبَبِ …), a solution (يَجِبُ … لِكَيْ …) and a past example.',
      stretch: '90 seconds: add a passive verb, a concession and a لَوْ … sentence.',
    },
  },
  checkCore: 'used Topic C vocabulary with correct agreement (including non-human plurals)',
  checkDevelop: 'used the past, present and future in the same conversation',
};

const write = {
  ...base,
  focus: 'The last Topic C writing room before the mock: a Q1 warm-up form, decoding a new Q2 task (a report on an eco-trip), upgrading sentences, writing with a buddy, spotting and fixing the most common Topic C errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Eco-trip: registration form', ar: 'الرِّحْلَةُ البِيئِيَّةُ: اسْتِمَارَةُ التَّسْجِيلِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'الجِنْسِيَّةُ', en: 'Nationality', tip: 'Agree: بِرِيطَانِيٌّ / بِرِيطَانِيَّةٌ' },
      { core: true, ar: 'البَلَدُ الَّذِي تُرِيدُ أَنْ تَزُورَهُ', en: 'The country you want to visit', tip: 'المَغْرِبُ · الأُرْدُنُّ' },
      { core: true, ar: 'الفَصْلُ المُفَضَّلُ لِلسَّفَرِ', en: 'Favourite season to travel', tip: 'الرَّبِيعُ' },
      { core: true, ar: 'نَشَاطٌ بِيئِيٌّ', en: 'An eco-activity', tip: 'تَنْظِيفُ الشَّاطِئِ' },
      { ar: 'جُمْلَةٌ: مَاذَا تَحْمِلُ فِي حَقِيبَتِكَ؟', en: 'ONE sentence: what you carry in your bag', tip: 'أَحْمِلُ زُجَاجَةً مَعْدِنِيَّةً لِكَيْ …' },
    ],
  },
  Q2: {
    title: 'Question 2: a report on our eco-trip', ar: 'تَقْرِيرٌ عَنْ رِحْلَتِنَا البِيئِيَّةِ',
    task: 'Your class went on an eco-trip. Write a report in Arabic for the school website of about 80–90 words. You must include: • where you went (location, landscape, weather) • an environmental problem you saw and its cause • what you did to help • what people should do in future, and your opinion.',
    phrases: [['ذَهَبَ صَفُّنَا إِلَى … الَّذِي / الَّتِي يَقَعُ / تَقَعُ فِي …', 'our class went to …, which is in …'], ['كَانَ الجَوُّ … ، وَكَانَتِ المَنَاظِرُ …', 'the weather was … and the scenery was …'], ['رَأَيْنَا … بِسَبَبِ …', 'we saw … because of …'], ['يَجِبُ عَلَى النَّاسِ أَنْ … لِكَيْ …', 'people must … so that …']],
    rubric: [
      ['task', 'اكْتُبْ تَقْرِيرًا لِمَوْقِعِ المَدْرَسَةِ (٨٠–٩٠ كَلِمَةً).', 'Write a report for the school website (80–90 words).'],
      ['1', 'أَيْنَ ذَهَبْتُمْ؟ صِفِ المَكَانَ وَالطَّقْسَ.', 'Where; the place and weather'],
      ['2', 'مَا المُشْكِلَةُ البِيئِيَّةُ الَّتِي رَأَيْتُمُوهَا؟ وَمَا سَبَبُهَا؟', 'A problem you saw and its cause'],
      ['3', 'مَاذَا فَعَلْتُمْ لِتُسَاعِدُوا؟', 'What you did to help'],
      ['4', 'مَاذَا يَجِبُ أَنْ يَفْعَلَ النَّاسُ؟ وَمَا رَأْيُكَ؟', 'What people should do; your opinion'],
    ],
    decode: ['a REPORT → a title, factual tone, نَحْنُ (we)', 'أَيْنَ ذَهَبْتُمْ · صِفْ → PAST + يَقَعُ / تَقَعُ + كَانَ الجَوُّ + accusative', 'مَا المُشْكِلَةُ · مَا سَبَبُهَا → بِسَبَبِ + genitive · مِمَّا يُسَبِّبُ', 'مَاذَا فَعَلْتُمْ → PAST (we) + لِكَيْ', 'يَجِبُ · رَأْيُكَ → يَجِبُ عَلَى … أَنْ + فِي رَأْيِي / صَحِيحٌ أَنَّ … غَيْرَ أَنَّ'],
    coreFrames: [
      { ar: 'رِحْلَتُنَا إِلَى ______', en: 'Title: Our trip to …' },
      { ar: 'ذَهَبَ صَفُّنَا إِلَى ______ الَّتِي تَقَعُ فِي ______ ، وَكَانَ الجَوُّ ______ .', en: '1 · Our class went to …, which is in …, and the weather was …' },
      { ar: 'رَأَيْنَا ______ ، بِسَبَبِ ______ .', en: '2 · We saw …, because of …' },
      { ar: 'جَمَعْنَا ______ ، وَ ______ .', en: '3 · We collected …, and …' },
      { ar: 'يَجِبُ عَلَى النَّاسِ أَنْ ______ ، لِكَيْ ______ .', en: '4 · People must …, so that …' },
    ],
    developFrames: [
      { ar: 'المَكَانُ خَلَّابٌ: فِيهِ ______ عَالِيَةٌ وَ ______ .', en: '1 · The place is stunning: it has high … and …' },
      { ar: 'لِلْأَسَفِ ______ ، مِمَّا يُسَبِّبُ ______ .', en: '2 · Unfortunately …, which causes …' },
      { ar: 'أَوَّلًا ______ ، ثُمَّ ______ ، وَبِالإِضَافَةِ إِلَى ذٰلِكَ ______ .', en: '3 · First …, then …, and in addition …' },
      { ar: 'صَحِيحٌ أَنَّ ______ ، غَيْرَ أَنَّ ______ .', en: '4 · It is true that …, but …' },
    ],
    bank: ['يَقَعُ · تَقَعُ فِي', 'جِبَالٌ عَالِيَةٌ', 'كَانَ الجَوُّ مُشْمِسًا', 'بِسَبَبِ · مِمَّا يُسَبِّبُ', 'تُرْمَى النُّفَايَاتُ', 'يَجِبُ عَلَى … أَنْ', 'لِكَيْ', 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ'],
    model: {
      text: `رِحْلَتُنَا إِلَى شَاطِئِ كُورْنْوُولَ
فِي الأُسْبُوعِ المَاضِي، ذَهَبَ صَفُّنَا إِلَى كُورْنْوُولَ الَّتِي تَقَعُ فِي جَنُوبِ غَرْبِ إِنْجِلْتِرَا. المَكَانُ خَلَّابٌ: فِيهِ صُخُورٌ عَالِيَةٌ وَشَوَاطِئُ رَمْلِيَّةٌ وَاسِعَةٌ، وَكَانَ الجَوُّ مُشْمِسًا لٰكِنَّ الرِّيَاحَ كَانَتْ بَارِدَةً. لِلْأَسَفِ، رَأَيْنَا نُفَايَاتٍ بْلَاسْتِيكِيَّةً كَثِيرَةً عَلَى الرَّمْلِ، بِسَبَبِ السُّيَّاحِ وَالسُّفُنِ، مِمَّا يُسَبِّبُ مَوْتَ الطُّيُورِ وَالأَسْمَاكِ. أَوَّلًا، جَمَعْنَا أَرْبَعِينَ كِيسًا مِنَ النُّفَايَاتِ فِي ثَلَاثِ سَاعَاتٍ، ثُمَّ وَضَعْنَا لَافِتَاتٍ تَطْلُبُ مِنَ الزُّوَّارِ أَنْ يَأْخُذُوا نُفَايَاتِهِمْ مَعَهُمْ. فِي رَأْيِي، يَجِبُ عَلَى النَّاسِ أَنْ يَسْتَعْمِلُوا زُجَاجَاتٍ مَعْدِنِيَّةً، لِكَيْ يَبْقَى البَحْرُ نَظِيفًا لِلْأَجْيَالِ القَادِمَةِ.
مَرْيَمُ، الصَّفُّ الحَادِيَ عَشَرَ`,
      en: '“Our trip to the Cornish coast. Last week our class went to Cornwall, in the south-west of England. The place is stunning: high cliffs and wide sandy beaches; it was sunny, but the wind was cold. Unfortunately we saw a lot of plastic rubbish on the sand, because of tourists and ships, which causes birds and fish to die. First we collected forty bags of rubbish in three hours, then we put up signs asking visitors to take their rubbish with them. In my opinion people must use metal bottles, so the sea stays clean for future generations. Maryam, Year 11.”',
      find: ['الَّتِي تَقَعُ فِي جَنُوبِ غَرْبِ', 'صُخُورٌ عَالِيَةٌ', 'بِسَبَبِ … مِمَّا يُسَبِّبُ', 'يَجِبُ عَلَى النَّاسِ أَنْ … لِكَيْ'],
    },
  },
  upgrade: [
    { ar: 'زُرْتُ المَغْرِبَ.', en: 'I visited Morocco.' },
    { ar: 'زُرْتُ المَغْرِبَ الَّذِي يَقَعُ فِي شَمَالِ غَرْبِ إِفْرِيقْيَا، وَكَانَ الجَوُّ حَارًّا.', en: '… which is in north-west Africa, and it was hot.' },
    { ar: '… رَأَيْنَا جِبَالًا عَالِيَةً وَصَحْرَاءَ وَاسِعَةً، وَاشْتَرَيْتُ حَقِيبَةً جِلْدِيَّةً بِمِئَتَيْ دِرْهَمٍ.', en: '… we saw high mountains and a vast desert, and I bought a leather bag for 200 dirhams.' },
    { ar: '… صَحِيحٌ أَنَّ النُّفَايَاتِ كَانَتْ مُشْكِلَةً فِي بَعْضِ الأَمَاكِنِ، غَيْرَ أَنَّ النَّاسَ كَانُوا يُنَظِّفُونَ الشَّوَارِعَ كُلَّ صَبَاحٍ.', en: '… it’s true rubbish was a problem in some places, but people cleaned the streets every morning.' },
  ],
  builder: [
    { en: 'Lebanon is in the west of Asia.', cols: [['يَقَعُ لُبْنَانُ', 'تَقَعُ لُبْنَانُ'], ['فِي غَرْبِ', 'غَرْبِيٌّ'], ['آسِيَا', 'آسِيَا فِي']], key: [0, 0, 0], why: 'لُبْنَانُ is masculine → يَقَعُ; فِي غَرْبِ + iḍāfa.' },
    { en: 'Many trees were cut down.', cols: [['قُطِعَتْ', 'قَطَعَتْ'], ['أَشْجَارٌ', 'أَشْجَارًا'], ['كَثِيرَةٌ', 'كَثِيرُونَ']], key: [0, 0, 0], why: 'Passive past قُطِعَتْ; non-human plural → feminine singular كَثِيرَةٌ.' },
    { en: 'We must save energy to protect the planet.', cols: [['يَجِبُ أَنْ', 'يَجِبُ أَنَّ'], ['نُوَفِّرَ الطَّاقَةَ', 'نُوَفِّرُ الطَّاقَةُ'], ['لِكَيْ نَحْمِيَ الأَرْضَ', 'لِأَنَّ نَحْمِي الأَرْضَ']], key: [0, 0, 0], why: 'أَنْ / لِكَيْ + verb in -a; the object is accusative.' },
  ],
  errors: [
    { wrong: 'الجِبَالُ عَالُونَ وَالأَنْهَارُ طَوِيلُونَ.', hint: 'Mountains and rivers are not people.', right: 'الجِبَالُ عَالِيَةٌ وَالأَنْهَارُ طَوِيلَةٌ.', why: 'Non-human plural → feminine singular adjective.' },
    { wrong: 'أَمْسِ كَانَ الجَوُّ بَارِدٌ بِسَبَبِ الرِّيَاحُ.', hint: 'Two mistakes: after كَانَ and after بِسَبَبِ.', right: 'أَمْسِ كَانَ الجَوُّ بَارِدًا بِسَبَبِ الرِّيَاحِ.', why: 'كَانَ → accusative (بَارِدًا); بِسَبَبِ → genitive (الرِّيَاحِ).' },
    { wrong: 'هٰذَا الحَقِيبَةُ مَصْنُوعٌ مِنَ الجِلْدِ.', hint: 'Two words must agree with حَقِيبَةٌ.', right: 'هٰذِهِ الحَقِيبَةُ مَصْنُوعَةٌ مِنَ الجِلْدِ.', why: 'Feminine noun → هٰذِهِ … مَصْنُوعَةٌ.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a journey that opened my eyes', ar: 'رِحْلَةٌ فَتَحَتْ عَيْنَيَّ',
    task: 'Full Q3 title: “Our world: places, people and the planet”. Today write ONLY the past paragraph: a journey that taught you something about the world — where it was, the landscape and weather, what you saw (good or bad), and what you learnt. Use Topic C language.',
    formula: [
      { ar: 'فِي الصَّيْفِ المَاضِي زُرْتُ قَرْيَةً فِي جَنُوبِ المَغْرِبِ.', en: 'T · Last summer I visited a village in southern Morocco.' },
      { ar: 'كَانَ الجَوُّ حَارًّا جِدًّا، وَكَانَتِ البِئْرُ جَافَّةً.', en: 'D · It was very hot, and the well was dry.' },
      { ar: 'حَدَثَ ذٰلِكَ بِسَبَبِ قِلَّةِ الأَمْطَارِ.', en: 'R · That happened because of the lack of rain.' },
      { ar: 'تَعَلَّمْتُ أَنَّ المَاءَ أَغْلَى شَيْءٍ.', en: 'F · I learnt that water is the most precious thing.' },
    ],
    phrases: [['زُرْتُ … الَّتِي تَقَعُ فِي …', 'I visited …, which is in …'], ['كَانَ الجَوُّ … وَكَانَتِ المَنَاظِرُ …', 'the weather was … and the scenery …'], ['بِسَبَبِ … ، مِمَّا يُسَبِّبُ …', 'because of …, which causes …'], ['صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', 'it is true that … but …'], ['تَعَلَّمْتُ أَنَّ …', 'I learnt that …']],
    model: {
      text: 'فِي الصَّيْفِ المَاضِي، سَافَرْتُ مَعَ أَبِي إِلَى قَرْيَةٍ صَغِيرَةٍ فِي جِبَالِ الأَطْلَسِ الَّتِي تَقَعُ فِي وَسَطِ المَغْرِبِ. كَانَتِ المَنَاظِرُ خَلَّابَةً، لٰكِنَّ الجَوَّ كَانَ حَارًّا وَجَافًّا جِدًّا. لَاحَظْتُ أَنَّ النِّسَاءَ يَمْشِينَ سَاعَتَيْنِ كُلَّ يَوْمٍ لِكَيْ يُحْضِرْنَ المَاءَ، لِأَنَّ النَّهْرَ القَرِيبَ جَفَّ بِسَبَبِ قِلَّةِ الأَمْطَارِ. صَحِيحٌ أَنَّ النَّاسَ كَانُوا فُقَرَاءَ، غَيْرَ أَنَّهُمْ كَانُوا كُرَمَاءَ جِدًّا مَعَنَا. تَعَلَّمْتُ أَنَّ المَاءَ أَغْلَى مِنَ الذَّهَبِ، فَأَصْبَحْتُ أُغْلِقُ الصُّنْبُورَ دَائِمًا.',
      en: 'T: last summer I travelled with my father to a small village in the Atlas Mountains, in central Morocco · D: the scenery was stunning, but it was very hot and dry; I noticed that women walked two hours every day to fetch water, because the nearby river had dried up through lack of rain; the people were poor, but they were very generous with us · F: I learnt that water is more precious than gold, so now I always turn off the tap.',
      find: ['الَّتِي تَقَعُ فِي وَسَطِ المَغْرِبِ', 'لِكَيْ يُحْضِرْنَ المَاءَ', 'بِسَبَبِ قِلَّةِ الأَمْطَارِ', 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّهُمْ'],
    },
  },
};

module.exports = { speak, write };
