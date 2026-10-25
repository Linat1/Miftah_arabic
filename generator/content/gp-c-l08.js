'use strict';
/* Guided Practice Rooms · TC-L08 · Buildings, services and urban areas. New tasks. Teacher-made. */
const XP = require('./xp-c-l08');

const base = { topic: 'C', n: 8, short: 'Buildings, Services and Urban Areas', arShort: 'المَبَانِي وَالخِدْمَاتُ فِي المَدِينَةِ', fileTitle: 'Buildings_Services_Urban_Areas', title: 'Buildings, services and urban areas', icon: 'FaCity', grammar: 'yūjadu / tūjadu and lā yūjadu; prepositions of place (muqābila · khalfa · amāma · bayna); directions (imperatives); mabniyyun min; comparatives city vs countryside; kāna fīhā … + past' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up on buildings and services, the answer ladder, two new role plays (giving directions to a visitor, a radio phone-in about the town centre), a topic conversation with A-R-E-T, and a one-minute talk about their town.',
  words: XP.speak.words,
  words1: { title: 'Buildings and services', ar: 'المَبَانِي وَالخِدْمَاتُ' },
  words2: { title: 'Where things are and what they are like', ar: 'الأَمَاكِنُ وَالوَصْفُ' },
  ladder: {
    q: 'مَاذَا يُوجَدُ فِي مَدِينَتِكَ؟', qEn: 'What is there in your town?',
    rungs: [
      { ar: 'يُوجَدُ فِي مَدِينَتِي مَرْكَزٌ تِجَارِيٌّ كَبِيرٌ.', en: 'There is a big shopping centre in my town.' },
      { ar: 'يُوجَدُ فِي مَدِينَتِي مَرْكَزٌ تِجَارِيٌّ كَبِيرٌ، وَتُوجَدُ مَكْتَبَةٌ عَامَّةٌ مُقَابِلَهُ.', en: '… and there is a public library opposite it.' },
      { ar: '… لٰكِنْ لَا يُوجَدُ مَرْكَزٌ لِلشَّبَابِ، لِذٰلِكَ نَلْتَقِي فِي المَقْهَى أَوْ فِي الشَّارِعِ.', en: '… but there is no youth centre, so we meet in the café or in the street.' },
      { ar: '… فِي المَاضِي كَانَتْ هُنَاكَ سِينِمَا قَدِيمَةٌ، أَمَّا الآنَ فَهِيَ مَوْقِفُ سَيَّارَاتٍ؛ وَأَتَمَنَّى أَنْ يَبْنُوا مَسْبَحًا جَدِيدًا.', en: '… there used to be an old cinema, but now it’s a car park — I hope they build a new pool.' },
    ],
  },
  ladderQs: [
    { q: 'أَيْنَ تَقَعُ مَدْرَسَتُكَ؟', l1: 'تَقَعُ فِي …', l2: '… بَيْنَ … وَ…', l3: '… وَأَذْهَبُ إِلَيْهَا …' },
    { q: 'هَلْ تُحِبُّ وَسَطَ المَدِينَةِ؟', l1: 'نَعَمْ / لَا، …', l2: '… لِأَنَّهُ مُزْدَحِمٌ / هَادِئٌ …', l3: '… وَفِي نِهَايَةِ الأُسْبُوعِ المَاضِي …' },
    { q: 'مَا الخِدْمَاتُ الَّتِي تَحْتَاجُهَا مَدِينَتُكَ؟', l1: 'تَحْتَاجُ إِلَى …', l2: '… لِأَنَّ …', l3: '… وَلَوْ كُنْتُ رَئِيسَ البَلَدِيَّةِ لَبَنَيْتُ …' },
    { q: 'هَلْ تُفَضِّلُ المَدِينَةَ أَمِ الرِّيفَ؟', l1: 'أُفَضِّلُ …', l2: '… لِأَنَّ … أَكْثَرُ …', l3: '… صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a street in your town', title: 'Role play 1 — Helping a lost visitor', ar: 'أُسَاعِدُ زَائِرًا ضَائِعًا', you: 'a local teenager', them: 'a visitor from Jordan',
      tasks: [
        { ex: 'عَفْوًا، أَيْنَ المُسْتَشْفَى؟', task: 'Say where the hospital is.', plan: 'أَيْنَ ← المُسْتَشْفَى … مُقَابِلَ …', model: 'المُسْتَشْفَى فِي شَارِعِ المَلِكِ، مُقَابِلَ المَحَطَّةِ.', modelEn: 'The hospital is on King Street, opposite the station.' },
        { ex: 'كَيْفَ أَذْهَبُ إِلَى هُنَاكَ؟', task: 'Give directions (two steps).', plan: 'كَيْفَ ← امْشِ … ثُمَّ خُذِ … عَلَى اليَمِينِ', model: 'امْشِ مُسْتَقِيمًا، ثُمَّ خُذِ الشَّارِعَ الثَّانِيَ عَلَى اليَمِينِ.', modelEn: 'Walk straight on, then take the second street on the right.' },
        { ex: 'هَلْ هُوَ بَعِيدٌ؟', task: 'Say how far.', plan: 'بَعِيدٌ ← لَا، … دَقَائِقَ مَشْيًا', model: 'لَا، عَشْرُ دَقَائِقَ مَشْيًا فَقَطْ.', modelEn: 'No, only ten minutes’ walk.' },
        { ex: 'هَلْ تُوجَدُ صَيْدَلِيَّةٌ قَرِيبَةٌ؟', task: 'Answer and say where.', plan: 'صَيْدَلِيَّةٌ ← نَعَمْ، تُوجَدُ … خَلْفَ …', model: 'نَعَمْ، تُوجَدُ صَيْدَلِيَّةٌ خَلْفَ المَسْجِدِ.', modelEn: 'Yes, there is a pharmacy behind the mosque.' },
        { unexpected: true, ex: 'مَا أَجْمَلُ مَكَانٍ فِي مَدِينَتِكَ؟', task: 'Answer the unexpected question with a reason.', plan: 'أَجْمَلُ ← أَجْمَلُ مَكَانٍ … لِأَنَّ …', model: 'أَجْمَلُ مَكَانٍ هُوَ الحَدِيقَةُ الكَبِيرَةُ، لِأَنَّ فِيهَا بُحَيْرَةً وَطُيُورًا.', modelEn: 'The most beautiful place is the big park, because it has a lake and birds.' },
      ],
      girl: 'to a female visitor: امْشِي · خُذِي · مَدِينَتِكِ',
      notes: 'Language: muqābila · khalfa (+ genitive) · imperatives imshi / khudh · ʿashru daqāʾiqa mashyan · tūjadu ṣaydaliyyatun · superlative ajmalu makānin.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a local radio phone-in', title: 'Role play 2 — What should change in our town centre?', ar: 'وَسَطُ مَدِينَتِنَا: مَاذَا يَجِبُ أَنْ يَتَغَيَّرَ؟', you: 'a young caller', them: 'the radio presenter',
      tasks: [
        { ex: 'أَهْلًا بِكَ عَلَى الهَوَاءِ! صِفْ لَنَا وَسَطَ المَدِينَةِ.', task: 'Describe the centre (buildings + adjectives).', model: 'وَسَطُ المَدِينَةِ مُزْدَحِمٌ وَقَدِيمٌ؛ تُوجَدُ فِيهِ مَحَلَّاتٌ كَثِيرَةٌ مُغْلَقَةٌ، وَمَبَانٍ مَبْنِيَّةٌ مِنَ الطُّوبِ الأَحْمَرِ.', modelEn: 'The centre is crowded and old; there are many closed shops, and buildings made of red brick.' },
        { ex: 'كَيْفَ كَانَ قَبْلَ عَشْرِ سَنَوَاتٍ؟', task: 'Compare past and present.', model: 'كَانَ أَنْشَطَ بِكَثِيرٍ، وَكَانَتْ فِيهِ سِينِمَا وَسُوقٌ كُلَّ يَوْمِ سَبْتٍ، أَمَّا الآنَ فَيَتَسَوَّقُ النَّاسُ عَلَى الإِنْتَرْنِتِ.', modelEn: 'It was much livelier, with a cinema and a Saturday market — now people shop online.' },
        { ex: 'مَا الخِدْمَةُ النَّاقِصَةُ لِلشَّبَابِ؟', task: 'Name a missing service and give two reasons.', model: 'لَا يُوجَدُ مَرْكَزٌ لِلشَّبَابِ، وَهٰذَا مُهِمٌّ لِأَنَّنَا نَحْتَاجُ إِلَى مَكَانٍ آمِنٍ، وَلِأَنَّ المَقَاهِيَ غَالِيَةٌ.', modelEn: 'There is no youth centre — important because we need a safe place, and cafés are expensive.' },
        { ex: 'تُرِيدُ البَلَدِيَّةُ أَنْ تَبْنِيَ مَوْقِفًا كَبِيرًا لِلسَّيَّارَاتِ.', task: 'Disagree politely and ASK a question.', model: 'مَعَ احْتِرَامِي، لَا أُوَافِقُ، لِأَنَّ ذٰلِكَ سَيَزِيدُ التَّلَوُّثَ. لِمَاذَا لَا تُحَسِّنُونَ الحَافِلَاتِ بَدَلًا مِنْ ذٰلِكَ؟', modelEn: 'With respect, I disagree, because that will increase pollution. Why not improve the buses instead?' },
        { unexpected: true, ex: 'لَوْ كَانَ عِنْدَكَ مِلْيُونُ جُنَيْهٍ لِلْمَدِينَةِ، مَاذَا تَبْنِي؟', task: 'Answer the unexpected question (law … la- + purpose).', model: 'لَوْ كَانَ عِنْدِي مِلْيُونُ جُنَيْهٍ، لَبَنَيْتُ مَرْكَزًا ثَقَافِيًّا فِيهِ مَكْتَبَةٌ وَمَلْعَبٌ، لِكَيْ يَلْتَقِيَ فِيهِ الصِّغَارُ وَالكِبَارُ.', modelEn: 'If I had a million pounds, I would build a cultural centre with a library and a pitch, so young and old could meet there.' },
      ],
      girl: 'بِكِ · صِفِي · عِنْدَكِ · تَبْنِينَ',
      notes: 'Stretch language: mabānin mabniyyatun min · kāna anshaṭa + kānat fīhi · lā yūjadu … li-annanā … wa-li-anna · polite disagreement · law kāna ʿindī … la- + li-kay.',
    },
  ],
  convAr: 'مَدِينَتِي وَخِدْمَاتُهَا',
  conv: [
    { route: 'Core', q: 'هَلْ يُوجَدُ مَسْجِدٌ قُرْبَ بَيْتِكَ؟', en: 'Is there a mosque near your home?', push: 'أَيْنَ بِالضَّبْطِ؟' },
    { route: 'Core', q: 'كَيْفَ تَذْهَبُ إِلَى وَسَطِ المَدِينَةِ؟', en: 'How do you get to the town centre?', push: 'كَمْ دَقِيقَةً؟' },
    { route: 'Develop', q: 'صِفْ مَبْنًى مَشْهُورًا فِي مَدِينَتِكَ.', en: 'Describe a famous building in your town.', push: 'هَلْ دَخَلْتَهُ؟' },
    { route: 'Develop', q: 'مَا الخِدْمَاتُ الَّتِي تَسْتَعْمِلُهَا عَائِلَتُكَ؟', en: 'What services does your family use?', push: 'مَثَلًا الأُسْبُوعَ المَاضِي؟' },
    { route: 'Stretch', q: 'هَلِ الحَيَاةُ فِي المَدِينَةِ أَفْضَلُ لِلشَّبَابِ؟', en: 'Is city life better for young people?', push: 'وَلِكِبَارِ السِّنِّ؟' },
    { route: 'Stretch', q: 'كَيْفَ سَتَكُونُ المُدُنُ بَعْدَ عِشْرِينَ سَنَةً؟', en: 'What will cities be like in twenty years?', push: 'هَلْ تُرِيدُ أَنْ تَعِيشَ فِيهَا؟' },
  ],
  convModels: [
    { q: 'صِفْ مَبْنًى مَشْهُورًا فِي مَدِينَتِكَ.', model: 'أَشْهَرُ مَبْنًى فِي مَدِينَتِي هُوَ المَكْتَبَةُ الجَدِيدَةُ، لِأَنَّهَا مَبْنِيَّةٌ مِنَ الزُّجَاجِ وَالمَعْدِنِ، وَشَكْلُهَا غَرِيبٌ؛ دَخَلْتُهَا مَعَ صَفِّي، وَسَأَدْرُسُ فِيهَا لِلِامْتِحَانَاتِ.', modelEn: 'A: the new library · R: made of glass and metal, with an unusual shape · E: I went in with my class · T: I’ll revise there for exams.' },
    { q: 'مَا الخِدْمَاتُ الَّتِي تَسْتَعْمِلُهَا عَائِلَتُكَ؟', model: 'نَسْتَعْمِلُ العِيَادَةَ وَالمَكْتَبَةَ وَالحَافِلَاتِ، لِأَنَّ أُمِّي لَا تَقُودُ السَّيَّارَةَ؛ الأُسْبُوعَ المَاضِي أَخَذْتُ جَدِّي إِلَى العِيَادَةِ الَّتِي تَقَعُ خَلْفَ السُّوقِ، فَانْتَظَرْنَا سَاعَةً كَامِلَةً!', modelEn: 'A: the clinic, library and buses · R: mum doesn’t drive · E: last week I took grandad to the clinic behind the market — we waited a whole hour!' },
    { q: 'هَلِ الحَيَاةُ فِي المَدِينَةِ أَفْضَلُ لِلشَّبَابِ؟', model: 'صَحِيحٌ أَنَّ المَدِينَةَ فِيهَا جَامِعَاتٌ وَوَظَائِفُ أَكْثَرُ، غَيْرَ أَنَّهَا أَغْلَى وَأَكْثَرُ تَلَوُّثًا؛ مَثَلًا، ابْنُ عَمِّي انْتَقَلَ إِلَى لَنْدَنَ لِلْعَمَلِ، لٰكِنَّهُ يَدْفَعُ نِصْفَ رَاتِبِهِ لِلشَّقَّةِ.', modelEn: 'Concession: cities have more universities and jobs, but are dearer and more polluted · E: my cousin moved to London for work, but pays half his salary on rent.' },
  ],
  talk: {
    title: 'One minute: my town', ar: 'مَدِينَتِي',
    text: 'Talk for one minute about your town: where it is, the buildings and services, where things are, what is missing — how it has changed — and what you would like to see in the future.',
    routes: {
      core: '30 seconds: three places with يُوجَدُ · تُوجَدُ and one preposition (مُقَابِلَ · خَلْفَ).',
      develop: '60 seconds: add what is missing (لَا يُوجَدُ …) and how it was in the past.',
      stretch: '90 seconds: add a city / countryside comparison and a لَوْ … sentence.',
    },
  },
  checkCore: 'used يُوجَدُ / تُوجَدُ / لَا يُوجَدُ correctly',
  checkDevelop: 'gave locations with مُقَابِلَ · خَلْفَ · أَمَامَ · بَيْنَ',
};

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up form, decoding a new Q2 task (a guide to your town for exchange students), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Library membership form', ar: 'اسْتِمَارَةُ الاشْتِرَاكِ فِي المَكْتَبَةِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'العُنْوَانُ', en: 'Address', tip: 'شَارِعُ … ، رَقْمُ …' },
      { core: true, ar: 'المَدْرَسَةُ', en: 'School', tip: 'مَدْرَسَةُ …' },
      { core: true, ar: 'كَيْفَ تَأْتِي إِلَى المَكْتَبَةِ؟', en: 'How you get to the library', tip: 'بِالحَافِلَةِ · مَشْيًا' },
      { core: true, ar: 'الخِدْمَةُ الَّتِي تُرِيدُهَا', en: 'The service you want', tip: 'الحَاسُوبُ · الكُتُبُ' },
      { ar: 'جُمْلَةٌ: مَاذَا يُوجَدُ قُرْبَ بَيْتِكَ؟', en: 'ONE sentence: what is near your home?', tip: 'قُرْبَ بَيْتِي يُوجَدُ …' },
    ],
  },
  Q2: {
    title: 'Question 2: a guide to my town', ar: 'دَلِيلٌ إِلَى مَدِينَتِي',
    task: 'Exchange students from Morocco are coming to your town. Write a short guide in Arabic of about 80–90 words. You must include: • where your town is and what it is like • the important buildings and services, and where they are • a place you visited recently and what you did there • what is missing for young people and your opinion.',
    phrases: [['تَقَعُ مَدِينَتُنَا فِي … ، وَهِيَ …', 'our town is in …, and it is …'], ['يُوجَدُ … مُقَابِلَ / خَلْفَ …', 'there is … opposite / behind …'], ['فِي الأُسْبُوعِ المَاضِي زُرْتُ …', 'last week I visited …'], ['لَا يُوجَدُ … ، وَفِي رَأْيِي …', 'there is no …, and in my opinion …']],
    rubric: [
      ['task', 'اكْتُبْ دَلِيلًا قَصِيرًا لِلطُّلَّابِ الزَّائِرِينَ (٨٠–٩٠ كَلِمَةً).', 'Write a short guide for visiting students (80–90 words).'],
      ['1', 'أَيْنَ تَقَعُ مَدِينَتُكَ؟ وَكَيْفَ هِيَ؟', 'Where your town is; what it is like'],
      ['2', 'المَبَانِي وَالخِدْمَاتُ المُهِمَّةُ وَأَيْنَ هِيَ.', 'Important buildings and services; where'],
      ['3', 'مَكَانٌ زُرْتَهُ مُؤَخَّرًا.', 'A place you visited recently'],
      ['4', 'مَا النَّاقِصُ لِلشَّبَابِ؟ وَمَا رَأْيُكَ؟', 'What is missing; your opinion'],
    ],
    decode: ['a GUIDE → a title, speak to visitors (سَتَجِدُونَ · زُورُوا)', 'أَيْنَ · كَيْفَ هِيَ → تَقَعُ + adjectives (f.)', 'المَبَانِي وَأَيْنَ → يُوجَدُ / تُوجَدُ + مُقَابِلَ · خَلْفَ · بَيْنَ', 'زُرْتَهُ مُؤَخَّرًا → PAST', 'النَّاقِصُ · رَأْيُكَ → لَا يُوجَدُ + فِي رَأْيِي / يَجِبُ أَنْ'],
    coreFrames: [
      { ar: 'أَهْلًا وَسَهْلًا فِي ______ !', en: 'Title: Welcome to …!' },
      { ar: 'تَقَعُ مَدِينَتُنَا فِي ______ ، وَهِيَ ______ .', en: '1 · Our town is in …, and it is …' },
      { ar: 'يُوجَدُ ______ ، وَتُوجَدُ ______ مُقَابِلَ ______ .', en: '2 · There is …, and there is … opposite …' },
      { ar: 'فِي الأُسْبُوعِ المَاضِي زُرْتُ ______ وَ ______ .', en: '3 · Last week I visited … and …' },
      { ar: 'لَا يُوجَدُ ______ ، وَفِي رَأْيِي ______ .', en: '4 · There is no …, and in my opinion …' },
    ],
    developFrames: [
      { ar: 'مَدِينَتُنَا ______ مِنْ ______ ، لٰكِنَّهَا ______ .', en: '1 · Our town is … than …, but it is …' },
      { ar: 'بَيْنَ ______ وَ ______ سَتَجِدُونَ ______ الَّذِي ______ .', en: '2 · Between … and … you will find the … which …' },
      { ar: 'زُرْتُ ______ الَّذِي بُنِيَ ______ ، فَ ______ .', en: '3 · I visited the … that was built …, and …' },
      { ar: 'يَجِبُ عَلَى البَلَدِيَّةِ أَنْ ______ ، لِكَيْ ______ .', en: '4 · The council must …, so that …' },
    ],
    bank: ['يُوجَدُ · تُوجَدُ · لَا يُوجَدُ', 'مُقَابِلَ · خَلْفَ · أَمَامَ', 'بَيْنَ … وَ…', 'مَكْتَبَةٌ عَامَّةٌ', 'مَرْكَزٌ تِجَارِيٌّ', 'مَحَطَّةُ القِطَارِ', 'مُزْدَحِمٌ · هَادِئٌ', 'مَبْنِيٌّ مِنْ'],
    model: {
      text: `أَهْلًا وَسَهْلًا فِي يُورْكَ!
تَقَعُ مَدِينَتُنَا فِي شَمَالِ إِنْجِلْتِرَا، وَهِيَ مَدِينَةٌ قَدِيمَةٌ وَهَادِئَةٌ، لٰكِنَّهَا مُزْدَحِمَةٌ بِالسُّيَّاحِ فِي الصَّيْفِ. فِي الوَسَطِ تُوجَدُ كَاتِدْرَائِيَّةٌ ضَخْمَةٌ مَبْنِيَّةٌ مِنَ الحَجَرِ، وَمُقَابِلَهَا سَتَجِدُونَ مَكْتَبَةً عَامَّةً فِيهَا حَوَاسِيبُ مَجَّانِيَّةٌ. يُوجَدُ مَسْجِدٌ صَغِيرٌ بَيْنَ المَحَطَّةِ وَالمُسْتَشْفَى. فِي الأُسْبُوعِ المَاضِي زُرْتُ مَتْحَفَ القِطَارَاتِ الَّذِي يَقَعُ خَلْفَ المَحَطَّةِ، فَرَأَيْتُ قِطَارَاتٍ عُمْرُهَا مِئَتَا سَنَةٍ. لِلْأَسَفِ لَا يُوجَدُ مَرْكَزٌ لِلشَّبَابِ، وَفِي رَأْيِي يَجِبُ أَنْ تَبْنِيَ البَلَدِيَّةُ مَرْكَزًا رَخِيصًا، لِكَيْ يَلْتَقِيَ فِيهِ الشَّبَابُ بَعْدَ المَدْرَسَةِ بَدَلًا مِنَ الشَّارِعِ.
آدَمُ`,
      en: '“Welcome to York! Our city is in the north of England; it is old and calm, but crowded with tourists in summer. In the centre there is a huge cathedral built of stone, and opposite it you will find a public library with free computers. There is a small mosque between the station and the hospital. Last week I visited the railway museum behind the station, and saw trains two hundred years old. Unfortunately there is no youth centre, and in my opinion the council must build a cheap one, so young people can meet there after school instead of in the street. Adam.”',
      find: ['مَبْنِيَّةٌ مِنَ الحَجَرِ', 'وَمُقَابِلَهَا سَتَجِدُونَ', 'بَيْنَ المَحَطَّةِ وَالمُسْتَشْفَى', 'لَا يُوجَدُ مَرْكَزٌ لِلشَّبَابِ'],
    },
  },
  upgrade: [
    { ar: 'يُوجَدُ مُسْتَشْفًى.', en: 'There is a hospital.' },
    { ar: 'يُوجَدُ مُسْتَشْفًى كَبِيرٌ وَحَدِيثٌ فِي شَرْقِ المَدِينَةِ.', en: 'There is a big modern hospital in the east of the town.' },
    { ar: '… مُقَابِلَ الحَدِيقَةِ العَامَّةِ، وَقَدْ بُنِيَ قَبْلَ خَمْسِ سَنَوَاتٍ.', en: '… opposite the public park, and it was built five years ago.' },
    { ar: '… صَحِيحٌ أَنَّهُ حَدِيثٌ، غَيْرَ أَنَّ المَرْضَى يَنْتَظِرُونَ سَاعَاتٍ، لِأَنَّ الأَطِبَّاءَ قَلِيلُونَ.', en: '… it’s true it’s modern, but patients wait for hours, because there are few doctors.' },
  ],
  builder: [
    { en: 'There is a public library opposite the station.', cols: [['تُوجَدُ', 'يُوجَدُ'], ['مَكْتَبَةٌ عَامَّةٌ', 'مَكْتَبَةٌ عَامٌّ'], ['مُقَابِلَ المَحَطَّةِ', 'مُقَابِلَ المَحَطَّةُ']], key: [0, 0, 0], why: 'مَكْتَبَةٌ is feminine → تُوجَدُ … عَامَّةٌ; مُقَابِلَ + genitive.' },
    { en: 'There is no cinema in my town.', cols: [['لَا تُوجَدُ', 'لَيْسَ تُوجَدُ'], ['سِينِمَا', 'السِّينِمَا'], ['فِي مَدِينَتِي', 'مَدِينَتِي فِي']], key: [0, 0, 0], why: 'Negative = لَا + تُوجَدُ (سِينِمَا is feminine).' },
    { en: 'The building is made of glass.', cols: [['المَبْنَى', 'مَبْنًى'], ['مَبْنِيٌّ', 'مَبْنِيَّةٌ'], ['مِنَ الزُّجَاجِ', 'بِالزُّجَاجِ']], key: [0, 0, 0], why: 'مَبْنًى is masculine → مَبْنِيٌّ مِنْ + genitive.' },
  ],
  errors: [
    { wrong: 'يُوجَدُ مَحَطَّةٌ قُرْبَ بَيْتِي.', hint: 'Masculine or feminine?', right: 'تُوجَدُ مَحَطَّةٌ قُرْبَ بَيْتِي.', why: 'Feminine noun → تُوجَدُ.' },
    { wrong: 'المَسْجِدُ خَلْفَ المَدْرَسَةُ.', hint: 'Look after خَلْفَ.', right: 'المَسْجِدُ خَلْفَ المَدْرَسَةِ.', why: 'Place words (خَلْفَ · أَمَامَ · مُقَابِلَ) + genitive.' },
    { wrong: 'فِي المَاضِي يُوجَدُ سِينِمَا هُنَا.', hint: 'In the past…', right: 'فِي المَاضِي كَانَتْ هُنَاكَ سِينِمَا.', why: 'Past “there was” → كَانَتْ هُنَاكَ (feminine noun).' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: how my area has changed', ar: 'كَيْفَ تَغَيَّرَ حَيِّي',
    task: 'Full Q3 title: “Where I live: the past and the future”. Today write ONLY the past paragraph: how your area (or a family member’s area) was in the past — what there was, what was missing, one memory, and what has changed.',
    formula: [
      { ar: 'قَبْلَ عَشْرِ سَنَوَاتٍ كَانَ حَيُّنَا مُخْتَلِفًا جِدًّا.', en: 'T · Ten years ago our area was very different.' },
      { ar: 'كَانَتْ فِيهِ حَدِيقَةٌ كَبِيرَةٌ، وَلَمْ يَكُنْ فِيهِ مَرْكَزٌ تِجَارِيٌّ.', en: 'D · There was a big park, and no shopping centre.' },
      { ar: 'تَغَيَّرَ لِأَنَّ النَّاسَ احْتَاجُوا إِلَى بُيُوتٍ.', en: 'R · It changed because people needed homes.' },
      { ar: 'أَشْتَاقُ إِلَى الحَدِيقَةِ القَدِيمَةِ.', en: 'F · I miss the old park.' },
    ],
    phrases: [['فِي المَاضِي كَانَ / كَانَتْ هُنَاكَ …', 'in the past there was …'], ['لَمْ يَكُنْ هُنَاكَ …', 'there was no …'], ['كُنَّا نَلْعَبُ / نَذْهَبُ …', 'we used to play / go …'], ['أَمَّا الآنَ فَـ …', 'but now …'], ['بُنِيَ · هُدِمَ', 'was built · was demolished']],
    model: {
      text: 'عِنْدَمَا كُنْتُ فِي المَدْرَسَةِ الابْتِدَائِيَّةِ، كَانَ حَيُّنَا فِي شَرْقِ لَنْدَنَ هَادِئًا وَأَخْضَرَ. كَانَتْ هُنَاكَ حَدِيقَةٌ وَاسِعَةٌ مُقَابِلَ بَيْتِنَا، وَكُنَّا نَلْعَبُ فِيهَا كُرَةَ القَدَمِ كُلَّ مَسَاءٍ، وَلَمْ يَكُنْ هُنَاكَ مَرْكَزٌ تِجَارِيٌّ وَلَا مَحَطَّةٌ قَرِيبَةٌ. قَبْلَ ثَلَاثِ سَنَوَاتٍ، هُدِمَتِ المَصَانِعُ القَدِيمَةُ، وَبُنِيَتْ مَكَانَهَا عِمَارَاتٌ عَالِيَةٌ مِنَ الزُّجَاجِ، لِأَنَّ النَّاسَ احْتَاجُوا إِلَى شُقَقٍ. أَمَّا الآنَ فَالحَيُّ مُزْدَحِمٌ، لٰكِنَّ فِيهِ خِدْمَاتٍ أَكْثَرَ. أَشْتَاقُ إِلَى هُدُوئِهِ القَدِيمِ.',
      en: 'T: when I was at primary school, our area in east London was calm and green · D: there was a wide park opposite our house where we played football every evening, and there was no shopping centre or nearby station; three years ago the old factories were demolished and tall glass blocks were built in their place · R: because people needed flats · F: now the area is crowded, but it has more services; I miss its old calm.',
      find: ['كَانَتْ هُنَاكَ حَدِيقَةٌ', 'وَكُنَّا نَلْعَبُ', 'لَمْ يَكُنْ هُنَاكَ', 'هُدِمَتِ … وَبُنِيَتْ'],
    },
  },
};
write.Q3.phrases[3] = ['أَمَّا الآنَ فَالحَيُّ …', 'but now the area …'];

module.exports = { speak, write };
