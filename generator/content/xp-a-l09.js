'use strict';
/* Exam-practice data · AT-A-L09 · Travel and Transport for Everyday Journeys (travel verbs; prepositions; time; comparison; directions). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { n: 9, short: 'Everyday Journeys', arShort: 'المُوَاصَلَاتُ اليَوْمِيَّةُ', fileTitle: 'Travel_and_Transport_for_Everyday_Journeys', title: 'Travel and Transport for Everyday Journeys', ar: 'السَّفَرُ وَالمُوَاصَلَاتُ فِي الحَيَاةِ اليَوْمِيَّةِ', icon: 'FaBus', grammar: 'travel verbs with bi- (by); prepositions; time; comparatives (أَسْرَعُ مِنْ); directions' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: say how you travel and how long it takes, buy a ticket, ask for and give directions, and compare means of transport (asraʿu min …).',
  words: [
    w(1, 'أَذْهَبُ بِالحَافِلَةِ', 'I go by bus', [['he', 'يَذْهَبُ'], ['she', 'تَذْهَبُ'], ['they', 'يَذْهَبُونَ']]),
    w(2, 'أَرْكَبُ', 'I ride, get on', [['he', 'يَرْكَبُ'], ['she', 'تَرْكَبُ'], ['they', 'يَرْكَبُونَ']]),
    w(3, 'أَصِلُ', 'I arrive', [['he', 'يَصِلُ'], ['she', 'تَصِلُ'], ['they', 'يَصِلُونَ']]),
    w(4, 'أَمْشِي', 'I walk', [['he', 'يَمْشِي'], ['she', 'تَمْشِي'], ['they', 'يَمْشُونَ']]),
    w(5, 'حَافِلَةٌ · قِطَارٌ · سَيَّارَةٌ', 'bus · train · car', [['pl.', 'حَافِلَاتٌ · قِطَارَاتٌ · سَيَّارَاتٌ']], { tag: 'transport' }),
    w(6, 'مَحَطَّةٌ', 'a station, a stop', [['sg.', 'مَحَطَّةٌ'], ['pl.', 'مَحَطَّاتٌ']]),
    w(7, 'تَذْكِرَةٌ', 'a ticket', [['sg.', 'تَذْكِرَةٌ'], ['pl.', 'تَذَاكِرُ']]),
    w(8, 'سَرِيعٌ', 'fast', [['m.', 'سَرِيعٌ'], ['f.', 'سَرِيعَةٌ'], ['faster', 'أَسْرَعُ مِنْ']], { tag: 'comparative' }),
    w(9, 'رَخِيصٌ · غَالٍ', 'cheap · expensive', [['cheaper', 'أَرْخَصُ'], ['dearer', 'أَغْلَى']], { tag: 'comparative' }),
    w(10, 'مُزْدَحِمٌ', 'crowded', [['m.', 'مُزْدَحِمٌ'], ['f.', 'مُزْدَحِمَةٌ'], ['more', 'أَكْثَرُ ازْدِحَامًا']]),
    w(11, 'اذْهَبْ · خُذْ · انْعَطِفْ', 'go · take · turn', [['f.', 'اذْهَبِي · خُذِي · انْعَطِفِي']], { tag: 'directions' }),
    w(12, 'يَمِينًا · يَسَارًا · إِلَى الأَمَامِ', 'right · left · straight on', null, { tag: 'directions' }),
  ],
  words1: { eyebrow: 'Language bank · travel verbs (I · he · she · they)', title: 'How do you get there?', ar: 'كَيْفَ تَذْهَبُ؟', notes: 'LANGUAGE BANK (2 min) — means of transport with bi-: بِالحَافِلَةِ · بِالقِطَارِ · بِالسَّيَّارَةِ — but on foot = مَشْيًا عَلَى الأَقْدَامِ. Time taken: تَسْتَغْرِقُ الرِّحْلَةُ عِشْرِينَ دَقِيقَةً.' },
  words2: { eyebrow: 'Language bank · comparing and directions', title: 'Faster, cheaper — and which way?', ar: 'المُقَارَنَةُ وَالاتِّجَاهَاتُ', notes: 'LANGUAGE BANK (2 min) — comparatives on the afʿal pattern: أَسْرَعُ مِنْ · أَرْخَصُ مِنْ · أَغْلَى مِنْ. Longer adjectives: أَكْثَرُ ازْدِحَامًا. Directions use the imperative.' },
  checkCore: 'said how they travel, when they leave and how long it takes',
  checkDevelop: 'compared two means of transport with asraʿu / arkhaṣu min and a reason',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a new classmate', title: 'Role play A — How do you get to school?', ar: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟', you: 'a student', them: 'a new classmate',
      tasks: [
        { core: true, ex: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟', task: 'Say how you travel to school.', help: 'أَذْهَبُ بِـ …', model: 'أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ.', modelEn: 'I go to school by bus.' },
        { core: true, ex: 'مَتَى تَخْرُجُ مِنَ البَيْتِ؟', task: 'Say what time you leave home.', help: 'أَخْرُجُ فِي السَّاعَةِ …', model: 'أَخْرُجُ مِنَ البَيْتِ فِي السَّاعَةِ السَّابِعَةِ وَالرُّبْعِ.', modelEn: 'I leave home at quarter past seven.' },
        { core: true, ex: 'كَمْ دَقِيقَةً تَسْتَغْرِقُ الرِّحْلَةُ؟', task: 'Say how long the journey takes.', help: 'تَسْتَغْرِقُ … دَقِيقَةً', model: 'تَسْتَغْرِقُ الرِّحْلَةُ عِشْرِينَ دَقِيقَةً تَقْرِيبًا.', modelEn: 'The journey takes about twenty minutes.' },
        { core: true, ex: 'مَعَ مَنْ تَذْهَبُ؟', task: 'Say who you travel with.', help: 'أَذْهَبُ مَعَ …', model: 'أَذْهَبُ مَعَ أَخِي وَصَدِيقِي سَامِرٍ.', modelEn: 'I go with my brother and my friend Samer.' },
        { core: true, unexpected: true, ex: 'هَلْ تُحِبُّ الحَافِلَةَ؟', task: 'Answer the unexpected question.', help: 'نَعَمْ / لَا، لِأَنَّهَا …', model: 'نَعَمْ، أُحِبُّهَا لِأَنَّهَا رَخِيصَةٌ، لٰكِنَّهَا مُزْدَحِمَةٌ أَحْيَانًا.', modelEn: 'Yes, I like it because it is cheap, but it is sometimes crowded.' },
      ],
      girl: 'تَذْهَبِينَ · تَخْرُجِينَ · تُحِبِّينَ',
      notes: 'Core: transport with bi-, a clock time, a duration (ʿishrīna daqīqatan — accusative singular after 11–99), who with, an opinion.',
    },
    {
      id: 'B', level: 'Core+', setting: 'at the train station', title: 'Role play B — Buying a train ticket', ar: 'فِي مَحَطَّةِ القِطَارِ', you: 'a traveller', them: 'the ticket clerk',
      tasks: [
        { core: true, ex: 'أَهْلًا، إِلَى أَيْنَ؟', task: 'Say where you want to go.', help: 'أُرِيدُ تَذْكِرَةً إِلَى …', model: 'أُرِيدُ تَذْكِرَةً إِلَى الإِسْكَنْدَرِيَّةِ، مِنْ فَضْلِكَ.', modelEn: 'I would like a ticket to Alexandria, please.' },
        { core: true, ex: 'ذَهَابٌ فَقَطْ أَمْ ذَهَابٌ وَعَوْدَةٌ؟', task: 'Choose the type of ticket.', help: 'ذَهَابٌ وَعَوْدَةٌ، …', model: 'ذَهَابٌ وَعَوْدَةٌ، لِأَنِّي سَأَرْجِعُ يَوْمَ الجُمُعَةِ.', modelEn: 'Return, because I will come back on Friday.' },
        { ex: 'هُنَاكَ قِطَارٌ فِي التَّاسِعَةِ وَقِطَارٌ فِي الحَادِيَةَ عَشْرَةَ.', task: 'ASK which train is faster.', help: 'أَيُّ قِطَارٍ أَسْرَعُ؟', model: 'أَيُّ قِطَارٍ أَسْرَعُ، مِنْ فَضْلِكَ؟', modelEn: 'Which train is faster, please?' },
        { ex: 'قِطَارُ التَّاسِعَةِ يَصِلُ بَعْدَ سَاعَتَيْنِ.', task: 'Choose the train and ask the price.', help: 'سَآخُذُ … بِكَمِ التَّذْكِرَةُ؟', model: 'سَآخُذُ قِطَارَ التَّاسِعَةِ إِذَنْ. بِكَمِ التَّذْكِرَةُ؟', modelEn: 'I’ll take the nine o’clock train then. How much is the ticket?' },
        { unexpected: true, ex: 'كَيْفَ تُرِيدُ أَنْ تَدْفَعَ؟', task: 'Answer the unexpected question.', help: 'بِالبِطَاقَةِ / نَقْدًا …', model: 'بِالبِطَاقَةِ، مِنْ فَضْلِكَ.', modelEn: 'By card, please.' },
      ],
      girl: 'تُرِيدِينَ أَنْ تَدْفَعِي',
      notes: 'Task 3: the CANDIDATE asks with a comparative (أَسْرَعُ). Task 4: sa- + a question. Prices: بِكَمِ التَّذْكِرَةُ؟',
    },
    {
      id: 'C', level: 'Develop', setting: 'lost in town', title: 'Role play C — Asking for directions', ar: 'أَسْأَلُ عَنِ الطَّرِيقِ', you: 'a visitor', them: 'a local person',
      tasks: [
        { ex: 'هَلْ تَحْتَاجُ إِلَى مُسَاعَدَةٍ؟', task: 'Politely ask the way to the museum.', help: 'لَوْ سَمَحْتَ، كَيْفَ أَصِلُ إِلَى …؟', model: 'نَعَمْ، لَوْ سَمَحْتَ، كَيْفَ أَصِلُ إِلَى المُتْحَفِ الوَطَنِيِّ؟', modelEn: 'Yes, excuse me, how do I get to the National Museum?' },
        { ex: 'اذْهَبْ إِلَى الأَمَامِ، ثُمَّ انْعَطِفْ يَمِينًا عِنْدَ البَنْكِ.', task: 'Repeat the directions to check.', help: 'إِذَنْ، إِلَى الأَمَامِ ثُمَّ …', model: 'إِذَنْ، أَذْهَبُ إِلَى الأَمَامِ، ثُمَّ أَنْعَطِفُ يَمِينًا عِنْدَ البَنْكِ. صَحِيحٌ؟', modelEn: 'So I go straight on, then turn right at the bank. Is that right?' },
        { ex: 'صَحِيحٌ. وَالمُتْحَفُ عَلَى اليَسَارِ.', task: 'ASK if it is far, and if you should walk or take a bus.', help: 'هَلْ هُوَ بَعِيدٌ؟ هَلْ أَمْشِي أَمْ …؟', model: 'هَلْ هُوَ بَعِيدٌ؟ هَلْ أَمْشِي أَمْ آخُذُ الحَافِلَةَ؟', modelEn: 'Is it far? Should I walk or take the bus?' },
        { ex: 'عَشْرُ دَقَائِقَ مَشْيًا، أَوْ مَحَطَّتَانِ بِالحَافِلَةِ.', task: 'Decide and give a reason (comparison).', help: 'سَأَمْشِي لِأَنَّ … أَجْمَلُ / أَرْخَصُ', model: 'سَأَمْشِي، لِأَنَّ الجَوَّ جَمِيلٌ، وَالمَشْيُ أَرْخَصُ مِنَ الحَافِلَةِ.', modelEn: 'I will walk, because the weather is nice and walking is cheaper than the bus.' },
        { unexpected: true, ex: 'مِنْ أَيْنَ أَنْتَ؟ وَكَيْفَ وَصَلْتَ إِلَى هُنَا؟', task: 'Answer the unexpected question (past).', help: 'أَنَا مِنْ … وَصَلْتُ بِالطَّائِرَةِ …', model: 'أَنَا مِنْ لَنْدَنَ، وَوَصَلْتُ أَمْسِ بِالطَّائِرَةِ، ثُمَّ رَكِبْتُ القِطَارَ إِلَى وَسَطِ المَدِينَةِ.', modelEn: 'I am from London; I arrived yesterday by plane, then took the train to the city centre.' },
      ],
      girl: 'تَحْتَاجِينَ · اذْهَبِي · انْعَطِفِي · أَنْتِ · وَصَلْتِ',
      notes: 'Develop: lau samaḥt (polite), checking by repeating, a choice question with am, a comparative + reason, two past verbs.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a council survey', title: 'Role play D — Transport in your town', ar: 'المُوَاصَلَاتُ فِي مَدِينَتِكَ', you: 'a young resident', them: 'a council researcher',
      tasks: [
        { ex: 'مَا رَأْيُكَ فِي المُوَاصَلَاتِ العَامَّةِ فِي مَدِينَتِكَ؟', task: 'Give an opinion with a contrast.', help: 'الحَافِلَاتُ … أَمَّا القِطَارُ فَـ…', model: 'الحَافِلَاتُ رَخِيصَةٌ لٰكِنَّهَا بَطِيئَةٌ، أَمَّا القِطَارُ فَأَسْرَعُ بِكَثِيرٍ، غَيْرَ أَنَّهُ غَالٍ.', modelEn: 'The buses are cheap but slow; the train is much faster, but it is expensive.' },
        { ex: 'هَلْ تَغَيَّرَتِ المُوَاصَلَاتُ فِي السَّنَوَاتِ الأَخِيرَةِ؟', task: 'Compare past and present.', help: 'قَبْلَ … كَانَ … أَمَّا الآنَ …', model: 'قَبْلَ خَمْسِ سَنَوَاتٍ كَانَتِ الحَافِلَةُ تَأْتِي كُلَّ سَاعَةٍ، أَمَّا الآنَ فَتَأْتِي كُلَّ عَشْرِ دَقَائِقَ.', modelEn: 'Five years ago the bus came every hour; now it comes every ten minutes.' },
        { ex: 'لِمَاذَا يُفَضِّلُ النَّاسُ السَّيَّارَةَ فِي رَأْيِكَ؟', task: 'Give two reasons.', help: 'لِأَنَّهَا … وَلِأَنَّ …', model: 'لِأَنَّهَا مُرِيحَةٌ وَتَصِلُ إِلَى كُلِّ مَكَانٍ، وَلِأَنَّ الحَافِلَاتِ لَا تَعْمَلُ فِي اللَّيْلِ.', modelEn: 'Because it is comfortable and reaches everywhere, and because the buses don’t run at night.' },
        { ex: 'هَلْ يَجِبُ أَنْ تَكُونَ المُوَاصَلَاتُ مَجَّانِيَّةً لِلطُّلَّابِ؟', task: 'Concede and give your view.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ ذٰلِكَ مُكْلِفٌ لِلْبَلَدِيَّةِ، غَيْرَ أَنَّهُ يُقَلِّلُ عَدَدَ السَّيَّارَاتِ وَالتَّلَوُّثَ.', modelEn: 'It is true that it is costly for the council, but it reduces the number of cars and pollution.' },
        { unexpected: true, ex: 'لَوْ كَانَ عِنْدَكَ مِلْيُونُ دِينَارٍ لِلْمُوَاصَلَاتِ، مَاذَا تَفْعَلُ؟', task: 'Answer the unexpected question (a conditional).', help: 'لَوْ كَانَ عِنْدِي …، لَبَنَيْتُ …', model: 'لَوْ كَانَ عِنْدِي مِلْيُونُ دِينَارٍ، لَبَنَيْتُ طُرُقًا آمِنَةً لِلدَّرَّاجَاتِ حَوْلَ المَدَارِسِ.', modelEn: 'If I had a million dinars, I would build safe cycle lanes around schools.' },
      ],
      girl: 'رَأْيُكِ · مَدِينَتِكِ · عِنْدَكِ',
      notes: 'Stretch: ammā … fa-, bi-kathīr (much faster), kāna + present (past habit), two reasons, a concession and a conditional.',
      modelFoot: 'Stretch: a contrast with ammā … fa-, kāna + present, two reasons, ṣaḥīḥun anna … ghayra anna and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'رِحْلَاتِي اليَوْمِيَّةُ', aim: 'one full sentence per question',
      qs: [
        { q: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟', en: 'How do you get to school?', start: 'أَذْهَبُ … / أَمْشِي …', model: 'أَمْشِي إِلَى المَدْرَسَةِ، لِأَنَّهَا قَرِيبَةٌ مِنْ بَيْتِي.', modelEn: 'I walk to school, because it is near my house.' },
        { q: 'كَمْ دَقِيقَةً تَسْتَغْرِقُ الرِّحْلَةُ؟', en: 'How many minutes does the journey take?', start: 'تَسْتَغْرِقُ …', model: 'تَسْتَغْرِقُ الرِّحْلَةُ رُبْعَ سَاعَةٍ فَقَطْ.', modelEn: 'The journey takes only a quarter of an hour.' },
        { q: 'مَا وَسِيلَةُ المُوَاصَلَاتِ المُفَضَّلَةُ عِنْدَكَ؟', en: 'What is your favourite means of transport?', start: 'أُفَضِّلُ … لِأَنَّ …', model: 'أُفَضِّلُ القِطَارَ، لِأَنَّهُ سَرِيعٌ وَمُرِيحٌ.', modelEn: 'I prefer the train, because it is fast and comfortable.' },
        { q: 'هَلْ عِنْدَكَ دَرَّاجَةٌ؟', en: 'Do you have a bike?', start: 'نَعَمْ / لَا، …', model: 'نَعَمْ، عِنْدِي دَرَّاجَةٌ زَرْقَاءُ، وَأَرْكَبُهَا فِي نِهَايَةِ الأُسْبُوعِ.', modelEn: 'Yes, I have a blue bike and I ride it at the weekend.' },
        { q: 'كَيْفَ يَذْهَبُ أَبُوكَ إِلَى العَمَلِ؟', en: 'How does your father go to work?', start: 'يَذْهَبُ أَبِي بِـ …', model: 'يَذْهَبُ أَبِي إِلَى العَمَلِ بِالسَّيَّارَةِ كُلَّ يَوْمٍ.', modelEn: 'My father goes to work by car every day.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a reason or a time = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'السَّفَرُ وَالمُوَاصَلَاتُ', aim: 'two or three sentences, with a comparison and a past journey',
      qs: [
        { q: 'قَارِنْ بَيْنَ الحَافِلَةِ وَالسَّيَّارَةِ.', en: 'Compare the bus and the car.', start: 'الحَافِلَةُ أَرْخَصُ مِنْ … لٰكِنَّ السَّيَّارَةَ …', model: 'الحَافِلَةُ أَرْخَصُ مِنَ السَّيَّارَةِ، لٰكِنَّ السَّيَّارَةَ أَسْرَعُ وَأَكْثَرُ رَاحَةً.', modelEn: 'The bus is cheaper than the car, but the car is faster and more comfortable.' },
        { q: 'صِفْ رِحْلَةً قُمْتَ بِهَا بِالقِطَارِ أَوِ الطَّائِرَةِ.', en: 'Describe a journey you made by train or plane.', start: 'فِي … سَافَرْتُ إِلَى … وَاسْتَغْرَقَتِ الرِّحْلَةُ …', model: 'فِي الصَّيْفِ سَافَرْتُ بِالقِطَارِ إِلَى أَدِنْبَرَةَ، وَاسْتَغْرَقَتِ الرِّحْلَةُ أَرْبَعَ سَاعَاتٍ، وَكَانَتِ المَنَاظِرُ جَمِيلَةً.', modelEn: 'In the summer I travelled by train to Edinburgh; it took four hours and the views were beautiful.' },
        { q: 'مَا المُشْكِلَاتُ فِي المُوَاصَلَاتِ فِي مَدِينَتِكَ؟', en: 'What are the transport problems in your town?', start: 'المُشْكِلَةُ الكُبْرَى هِيَ … خُصُوصًا …', model: 'المُشْكِلَةُ الكُبْرَى هِيَ الازْدِحَامُ، خُصُوصًا فِي الصَّبَاحِ، فَأَحْيَانًا أَصِلُ مُتَأَخِّرًا.', modelEn: 'The biggest problem is traffic, especially in the morning, so I sometimes arrive late.' },
        { q: 'كَيْفَ تَصِفُ الطَّرِيقَ مِنْ بَيْتِكَ إِلَى المَدْرَسَةِ؟', en: 'Describe the route from your home to school.', start: 'أَخْرُجُ مِنَ البَيْتِ، ثُمَّ … وَأَنْعَطِفُ …', model: 'أَخْرُجُ مِنَ البَيْتِ، وَأَمْشِي إِلَى الأَمَامِ، ثُمَّ أَنْعَطِفُ يَسَارًا عِنْدَ المَسْجِدِ، وَالمَدْرَسَةُ عَلَى اليَمِينِ.', modelEn: 'I leave home, walk straight on, then turn left at the mosque; the school is on the right.' },
        { q: 'هَلْ سَتَشْتَرِي سَيَّارَةً فِي المُسْتَقْبَلِ؟', en: 'Will you buy a car in the future?', start: 'نَعَمْ / لَا، سَـ… لِأَنَّ …', model: 'لَا أَظُنُّ، سَأَسْتَعْمِلُ القِطَارَ وَالدَّرَّاجَةَ، لِأَنَّهُمَا أَفْضَلُ لِلْبِيئَةِ.', modelEn: 'I don’t think so; I will use the train and the bike, because they are better for the environment.' },
      ],
      foot: 'Develop: two or three sentences — a comparison (arkhaṣu min), a past journey, a reason and directions.',
      modelFoot: 'Comparison + past journey + time taken + reason = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'المُوَاصَلَاتُ وَالبِيئَةُ', aim: 'a developed answer: opinion, comparison, concession and a conditional',
      qs: [
        { q: 'هَلِ المُوَاصَلَاتُ العَامَّةُ أَفْضَلُ مِنَ السَّيَّارَاتِ الخَاصَّةِ؟', en: 'Is public transport better than private cars?', start: 'أَعْتَقِدُ أَنَّ … أَفْضَلُ، لِأَنَّ …', model: 'أَعْتَقِدُ أَنَّ المُوَاصَلَاتِ العَامَّةَ أَفْضَلُ، لِأَنَّ حَافِلَةً وَاحِدَةً تَنْقُلُ خَمْسِينَ شَخْصًا بَدَلًا مِنْ خَمْسِينَ سَيَّارَةً.', modelEn: 'I think public transport is better, because one bus carries fifty people instead of fifty cars.' },
        { q: 'كَيْفَ كَانَ النَّاسُ يُسَافِرُونَ فِي أَيَّامِ أَجْدَادِكَ؟', en: 'How did people travel in your grandparents’ day?', start: 'كَانَ جَدِّي يُسَافِرُ بِـ… أَمَّا اليَوْمَ فَـ…', model: 'كَانَ جَدِّي يُسَافِرُ بَيْنَ القُرَى عَلَى الحِمَارِ، أَمَّا اليَوْمَ فَنَقْطَعُ المَسَافَةَ نَفْسَهَا بِالسَّيَّارَةِ فِي دَقَائِقَ.', modelEn: 'My grandfather travelled between villages by donkey; today we cover the same distance by car in minutes.' },
        { q: 'هَلْ يَجِبُ أَنْ نَمْنَعَ السَّيَّارَاتِ فِي وَسَطِ المُدُنِ؟', en: 'Should we ban cars from city centres?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ المَنْعَ يُقَلِّلُ التَّلَوُّثَ، غَيْرَ أَنَّهُ صَعْبٌ عَلَى كِبَارِ السِّنِّ وَذَوِي الإِعَاقَةِ.', modelEn: 'It is true that a ban reduces pollution, but it is hard for older and disabled people.' },
        { q: 'مَا أَصْعَبُ رِحْلَةٍ قُمْتَ بِهَا؟', en: 'What is the hardest journey you have made?', start: 'أَصْعَبُ رِحْلَةٍ كَانَتْ … عِنْدَمَا …', model: 'أَصْعَبُ رِحْلَةٍ كَانَتْ عِنْدَمَا تَأَخَّرَ قِطَارُنَا ثَلَاثَ سَاعَاتٍ بِسَبَبِ الثَّلْجِ، فَوَصَلْنَا فِي مُنْتَصَفِ اللَّيْلِ.', modelEn: 'The hardest journey was when our train was three hours late because of snow, so we arrived at midnight.' },
        { q: 'لَوْ صَمَّمْتَ وَسِيلَةَ مُوَاصَلَاتٍ جَدِيدَةً، كَيْفَ تَكُونُ؟', en: 'If you designed a new means of transport, what would it be like?', start: 'لَوْ صَمَّمْتُ …، لَجَعَلْتُهَا …', model: 'لَوْ صَمَّمْتُ وَسِيلَةً جَدِيدَةً، لَجَعَلْتُهَا تَطِيرُ بِالطَّاقَةِ الشَّمْسِيَّةِ، فَتَكُونُ سَرِيعَةً وَنَظِيفَةً مَعًا.', modelEn: 'If I designed a new one, I would make it fly on solar power, so it would be both fast and clean.' },
      ],
      foot: 'Stretch: badalan min, kāna + present, ammā … fa-, a superlative (aṣʿabu riḥla), a concession and a conditional.',
      modelFoot: 'Stretch: comparatives and superlatives, kāna + present, ṣaḥīḥun anna … ghayra anna, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I said how I travel (bil-ḥāfila …) and how long it takes.' },
    { route: 'core', text: 'I bought a ticket or asked the way politely.' },
    { route: 'develop', text: 'I compared transport with asraʿu / arkhaṣu min.' },
    { route: 'develop', text: 'I gave or repeated directions (right, left, straight on).' },
    { route: 'stretch', text: 'I used ammā … fa-, a concession or a conditional.' },
  ],
};
speak.words[0] = w(1, 'أَذْهَبُ بِالحَافِلَةِ', 'I go by bus', [['he', 'يَذْهَبُ'], ['she', 'تَذْهَبُ'], ['they', 'يَذْهَبُونَ']]);
speak.RP[0].tasks[0].help = 'أَذْهَبُ بِالحَافِلَةِ / بِالسَّيَّارَةِ …';
speak.RP[3].tasks[0].help = 'الحَافِلَاتُ … أَمَّا القِطَارُ فَأَسْرَعُ …';
speak.RP[3].tasks[4].help = 'لَوْ كَانَ عِنْدِي …، لَبَنَيْتُ …';
speak.CONV[0].qs[4].start = 'يَذْهَبُ أَبِي بِالسَّيَّارَةِ …';
speak.CONV[1].qs[4].start = 'نَعَمْ / لَا، سَأَسْتَعْمِلُ … لِأَنَّ …';
speak.CONV[2].qs[1].start = 'كَانَ جَدِّي يُسَافِرُ … أَمَّا اليَوْمَ فَنَقْطَعُ …';

const Q2_CORE = `مَرْحَبًا يَا جَمِيلَةُ،
كَيْفَ حَالُكِ؟ أَذْهَبُ إِلَى المَدْرَسَةِ الجَدِيدَةِ بِالحَافِلَةِ كُلَّ يَوْمٍ. أَخْرُجُ مِنَ البَيْتِ فِي السَّاعَةِ السَّابِعَةِ، وَتَسْتَغْرِقُ الرِّحْلَةُ نِصْفَ سَاعَةٍ تَقْرِيبًا. أَرْكَبُ الحَافِلَةَ مَعَ صَدِيقَتِي هِنْدٍ، وَنَتَحَدَّثُ طُولَ الطَّرِيقِ. الحَافِلَةُ رَخِيصَةٌ، لٰكِنَّهَا مُزْدَحِمَةٌ جِدًّا فِي الصَّبَاحِ. أَمْسِ تَأَخَّرَتِ الحَافِلَةُ، فَوَصَلْتُ إِلَى المَدْرَسَةِ مُتَأَخِّرَةً عَشْرَ دَقَائِقَ. فِي السَّنَةِ القَادِمَةِ سَأَذْهَبُ بِالدَّرَّاجَةِ، لِأَنَّهَا أَسْرَعُ.
مَعَ السَّلَامَةِ،
سَارَةُ`;
const Q2_FULL = `عَزِيزَتِي جَمِيلَةُ،
تَحِيَّةً طَيِّبَةً، وَبَعْدُ، فَقَدْ سَأَلْتِنِي كَيْفَ أَذْهَبُ إِلَى مَدْرَسَتِي الجَدِيدَةِ. أَرْكَبُ الحَافِلَةَ رَقْمَ ١٢ مِنَ المَحَطَّةِ الَّتِي أَمَامَ بَيْتِنَا فِي السَّاعَةِ السَّابِعَةِ، وَتَسْتَغْرِقُ الرِّحْلَةُ نَحْوَ نِصْفِ سَاعَةٍ. أُفَضِّلُ الحَافِلَةَ عَلَى السَّيَّارَةِ، لِأَنَّهَا أَرْخَصُ وَأَفْضَلُ لِلْبِيئَةِ، غَيْرَ أَنَّهَا تَكُونُ مُزْدَحِمَةً فِي الصَّبَاحِ. أَمْسِ حَدَثَ شَيْءٌ مُضْحِكٌ: نِمْتُ فِي الحَافِلَةِ، فَفَاتَتْنِي مَحَطَّتِي، وَاضْطُرِرْتُ إِلَى المَشْيِ عَشْرَ دَقَائِقَ تَحْتَ المَطَرِ، فَوَصَلْتُ مُبْتَلَّةً وَمُتَأَخِّرَةً! فِي السَّنَةِ القَادِمَةِ سَأَذْهَبُ بِالدَّرَّاجَةِ، لِأَنَّهَا أَسْرَعُ وَأَكْثَرُ مُتْعَةً. وَأَنْتِ، كَيْفَ تَذْهَبِينَ إِلَى مَدْرَسَتِكِ؟ أَنْتَظِرُ رَدَّكِ بِشَوْقٍ.
مَعَ مَحَبَّتِي،
سَارَةُ`;
const Q3A_CORE = `أَسْكُنُ فِي مَدِينَةٍ كَبِيرَةٍ، وَفِيهَا مُوَاصَلَاتٌ كَثِيرَةٌ: الحَافِلَاتُ وَالقِطَارَاتُ وَسَيَّارَاتُ الأُجْرَةِ. أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ، وَتَسْتَغْرِقُ الرِّحْلَةُ عِشْرِينَ دَقِيقَةً تَقْرِيبًا. أَبِي يَذْهَبُ إِلَى العَمَلِ بِالقِطَارِ، وَأُمِّي تَذْهَبُ بِالسَّيَّارَةِ، لِأَنَّ عَمَلَهَا بَعِيدٌ عَنِ المَحَطَّةِ.
أُحِبُّ القِطَارَ، لِأَنَّهُ سَرِيعٌ وَمُرِيحٌ. الحَافِلَةُ أَرْخَصُ مِنَ القِطَارِ، لٰكِنَّهَا أَبْطَأُ، وَهِيَ مُزْدَحِمَةٌ فِي الصَّبَاحِ. السَّيَّارَةُ مُرِيحَةٌ، لٰكِنَّهَا غَالِيَةٌ، وَهِيَ تُلَوِّثُ الهَوَاءَ.
فِي الشَّهْرِ المَاضِي ذَهَبْتُ مَعَ أُسْرَتِي إِلَى بَيْتِ جَدِّي بِالقِطَارِ. رَكِبْنَا القِطَارَ فِي السَّاعَةِ التَّاسِعَةِ، وَوَصَلْنَا فِي السَّاعَةِ الثَّانِيَةَ عَشْرَةَ. أَكَلْنَا السَّنْدَوِيشَاتِ، وَلَعِبْنَا الوَرَقَ فِي القِطَارِ. كَانَتِ الرِّحْلَةُ مُمْتِعَةً جِدًّا، وَرَأَيْنَا مِنَ النَّافِذَةِ جِبَالًا وَمَزَارِعَ جَمِيلَةً.
فِي رَأْيِي، يَجِبُ أَنْ نَسْتَعْمِلَ المُوَاصَلَاتِ العَامَّةَ أَكْثَرَ، لِأَنَّهَا أَفْضَلُ لِلْبِيئَةِ. فِي المُسْتَقْبَلِ سَأَذْهَبُ إِلَى المَدْرَسَةِ بِالدَّرَّاجَةِ مَعَ أَصْدِقَائِي.`;
const Q3A_FULL = `أَسْكُنُ فِي ضَاحِيَةٍ هَادِئَةٍ، عَلَى بُعْدِ عَشَرَةِ كِيلُومِتْرَاتٍ مِنْ وَسَطِ المَدِينَةِ، وَلِذٰلِكَ تُشَكِّلُ المُوَاصَلَاتُ جُزْءًا كَبِيرًا مِنْ يَوْمِي. أَخْرُجُ مِنَ البَيْتِ فِي السَّابِعَةِ، وَأَمْشِي خَمْسَ دَقَائِقَ إِلَى المَحَطَّةِ، ثُمَّ أَرْكَبُ القِطَارَ الَّذِي يَصِلُ بِي إِلَى المَدْرَسَةِ فِي رُبْعِ سَاعَةٍ فَقَطْ، وَأَقْرَأُ أَوْ أُرَاجِعُ دُرُوسِي أَثْنَاءَ الرِّحْلَةِ.
أُفَضِّلُ القِطَارَ عَلَى الحَافِلَةِ، لِأَنَّهُ أَسْرَعُ بِكَثِيرٍ وَلَا يَتَأَثَّرُ بِازْدِحَامِ الشَّوَارِعِ أَوْ بِالحَوَادِثِ، أَمَّا الحَافِلَةُ فَأَرْخَصُ، غَيْرَ أَنَّهَا قَدْ تَتَأَخَّرُ نِصْفَ سَاعَةٍ فِي أَوْقَاتِ الذُّرْوَةِ.
لٰكِنَّ القِطَارَ لَيْسَ مِثَالِيًّا دَائِمًا؛ فَفِي الشِّتَاءِ المَاضِي تَعَطَّلَ القِطَارُ بِسَبَبِ الثَّلْجِ، فَانْتَظَرْنَا سَاعَةً كَامِلَةً فِي البَرْدِ الشَّدِيدِ، ثُمَّ مَشَيْتُ مَعَ زُمَلَائِي إِلَى المَدْرَسَةِ، وَوَصَلْنَا بَعْدَ أَنْ بَدَأَ الدَّرْسُ الثَّانِي.
فِي رَأْيِي، يَنْبَغِي أَنْ تَسْتَثْمِرَ المَدِينَةُ فِي طُرُقِ الدَّرَّاجَاتِ، لِأَنَّهَا أَرْخَصُ وَأَنْظَفُ، وَتُشَجِّعُ الشَّبَابَ عَلَى الرِّيَاضَةِ. وَلَوْ كَانَتْ هُنَاكَ طَرِيقٌ آمِنَةٌ مِنْ بَيْتِي إِلَى المَدْرَسَةِ، لَذَهَبْتُ بِالدَّرَّاجَةِ كُلَّ يَوْمٍ، حَتَّى فِي الشِّتَاءِ.`;
const Q3B_FULL = `يَعْتَمِدُ كَثِيرٌ مِنَ النَّاسِ فِي مَدِينَتِي عَلَى السَّيَّارَاتِ الخَاصَّةِ، حَتَّى لِلرِّحْلَاتِ القَصِيرَةِ، وَهٰذَا يُسَبِّبُ ازْدِحَامًا شَدِيدًا وَتَلَوُّثًا فِي الهَوَاءِ، خُصُوصًا فِي الصَّبَاحِ عِنْدَمَا يَذْهَبُ الجَمِيعُ إِلَى العَمَلِ وَالمَدَارِسِ فِي الوَقْتِ نَفْسِهِ. وَقَدْ تَسْتَغْرِقُ رِحْلَةٌ قَصِيرَةٌ نِصْفَ سَاعَةٍ أَوْ أَكْثَرَ.
فِي المَاضِي كَانَ النَّاسُ يَمْشُونَ إِلَى السُّوقِ وَالمَسْجِدِ وَالمَدْرَسَةِ، لِأَنَّ كُلَّ شَيْءٍ كَانَ قَرِيبًا، أَمَّا اليَوْمَ فَقَدْ كَبُرَتِ المُدُنُ، وَأَصْبَحَتِ المَسَافَاتُ أَطْوَلَ، فَصَارَتِ السَّيَّارَةُ ضَرُورَةً لِكَثِيرٍ مِنَ الأُسَرِ، خُصُوصًا فِي الأَحْيَاءِ البَعِيدَةِ.
فِي السَّنَةِ المَاضِيَةِ نَظَّمَتْ مَدْرَسَتِي «أُسْبُوعَ بِلَا سَيَّارَاتٍ»؛ جَاءَ الطُّلَّابُ مَشْيًا أَوْ بِالدَّرَّاجَاتِ أَوْ بِالحَافِلَةِ، فَقَلَّ الازْدِحَامُ أَمَامَ المَدْرَسَةِ بِشَكْلٍ وَاضِحٍ، وَشَعَرَ الجَمِيعُ بِنَشَاطٍ أَكْبَرَ فِي الحِصَّةِ الأُولَى.
صَحِيحٌ أَنَّ السَّيَّارَةَ مُرِيحَةٌ وَضَرُورِيَّةٌ أَحْيَانًا، غَيْرَ أَنَّ المُوَاصَلَاتِ العَامَّةَ أَفْضَلُ لِلْبِيئَةِ وَأَرْخَصُ لِلْأُسْرَةِ. وَلَوْ جَعَلَتِ البَلَدِيَّةُ الحَافِلَاتِ أَكْثَرَ وَأَسْرَعَ، لَتَرَكَ كَثِيرٌ مِنَ النَّاسِ سَيَّارَاتِهِمْ فِي البَيْتِ، وَلَأَصْبَحَتْ مَدِينَتُنَا أَنْظَفَ وَأَهْدَأَ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a bus-pass application, write an email about your journey to a new school, and write an extended piece comparing transport, with a past journey and your opinion.',
  lift: [
    { ar: 'تَسْتَغْرِقُ الرِّحْلَةُ نِصْفَ سَاعَةٍ', en: 'the journey takes half an hour' },
    { ar: 'القِطَارُ أَسْرَعُ مِنَ الحَافِلَةِ', en: 'the train is faster than the bus' },
    { ar: 'أُفَضِّلُ … عَلَى … لِأَنَّ …', en: 'I prefer … to … because …' },
  ],
  checkTip: 'Check: bi- + al- with transport (bil-ḥāfila); comparatives do not change for gender (al-ḥāfila asraʿu); numbers + minutes (ʿashr daqāʾiq · ʿishrūna daqīqa).',
  FORM: {
    title: 'Student bus-pass application', ar: 'طَلَبُ بِطَاقَةِ الحَافِلَةِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Your name', model: 'سَارَةُ عَلِيٌّ', modelEn: 'Sara Ali' },
      { core: true, ar: 'العُنْوَانُ', en: 'Your address (street and town)', model: 'شَارِعُ النَّخِيلِ، المَنَامَةُ', modelEn: 'Palm Street, Manama' },
      { core: true, ar: 'اسْمُ المَدْرَسَةِ', en: 'Name of your school', model: 'مَدْرَسَةُ النُّورِ', modelEn: 'Al Noor School' },
      { core: true, ar: 'المَحَطَّةُ القَرِيبَةُ مِنْ بَيْتِكَ', en: 'Nearest stop to your home', model: 'مَحَطَّةُ السُّوقِ', modelEn: 'the market stop' },
      { core: true, ar: 'وَقْتُ الخُرُوجِ مِنَ البَيْتِ', en: 'Time you leave home', model: 'السَّابِعَةُ وَالرُّبْعُ', modelEn: 'quarter past seven' },
      { core: true, ar: 'أَيَّامُ السَّفَرِ', en: 'Days you travel', model: 'مِنَ الأَحَدِ إِلَى الخَمِيسِ', modelEn: 'Sunday to Thursday' },
      { ar: 'كَيْفَ تَذْهَبُ الآنَ؟', en: 'How you travel now', model: 'بِالسَّيَّارَةِ مَعَ أَبِي', modelEn: 'by car with my father' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُرِيدُ البِطَاقَةَ؟', en: 'ONE sentence: why you want the pass', model: 'أُرِيدُ البِطَاقَةَ لِأَنَّ الحَافِلَةَ أَرْخَصُ وَأَفْضَلُ لِلْبِيئَةِ.', modelEn: 'I want the pass because the bus is cheaper and better for the environment.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with a comparative.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 6: min … ilā … (from … to …).',
  },
  Q2: {
    short: 'an email about your journey to school', title: 'Question 2: my journey to school', ar: 'رِسَالَةٌ عَنْ رِحْلَتِي إِلَى المَدْرَسَةِ',
    task: 'You have started at a new school. Write an email in Arabic to your friend of about 80–90 words. You must include: • how you travel to your new school, and when you leave • how long the journey takes, and who you travel with • your opinion of this means of transport • something that happened on the journey yesterday, and how you will travel next year.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'A clock time and a duration.', 'A comparison or an opinion with a reason.', 'A past AND a future sentence.'],
    phrases: [['أَذْهَبُ إِلَى المَدْرَسَةِ بِـ…', 'I go to school by …'], ['تَسْتَغْرِقُ الرِّحْلَةُ …', 'the journey takes …'], ['أُفَضِّلُ … عَلَى … لِأَنَّ …', 'I prefer … to … because …'], ['أَمْسِ تَأَخَّرَتِ الحَافِلَةُ', 'yesterday the bus was late']],
    rubric: [
      ['task', 'بَدَأْتِ الدِّرَاسَةَ فِي مَدْرَسَةٍ جَدِيدَةٍ. اكْتُبِي رِسَالَةً إِلَى صَدِيقَتِكِ (٨٠–٩٠ كَلِمَةً).', 'You have started at a new school: write to your friend (80–90 words).'],
      ['1', 'كَيْفَ تَذْهَبِينَ إِلَى المَدْرَسَةِ؟ وَمَتَى تَخْرُجِينَ؟', 'How you travel; when you leave'],
      ['2', 'كَمْ تَسْتَغْرِقُ الرِّحْلَةُ؟ وَمَعَ مَنْ تَذْهَبِينَ؟', 'How long; who with'],
      ['3', 'مَا رَأْيُكِ فِي هٰذِهِ الوَسِيلَةِ؟', 'Your opinion of it'],
      ['4', 'مَاذَا حَدَثَ أَمْسِ فِي الطَّرِيقِ؟ وَكَيْفَ سَتَذْهَبِينَ فِي السَّنَةِ القَادِمَةِ؟', 'What happened yesterday; next year'],
    ],
    qwords: 'كَيْفَ (how) · مَتَى (when) · كَمْ (how long) · مَعَ مَنْ (with whom) · مَا رَأْيُكِ (your opinion) — bullet 4 is PAST then FUTURE',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكِ؟', 'Hello …, how are you?'],
      ['1', 'أَذْهَبُ إِلَى المَدْرَسَةِ ______ . أَخْرُجُ فِي السَّاعَةِ ______ .', 'I go to school … I leave at …'],
      ['2', 'تَسْتَغْرِقُ الرِّحْلَةُ ______ . أَذْهَبُ مَعَ ______ .', 'The journey takes … I go with …'],
      ['3', '______ رَخِيصَةٌ / سَرِيعَةٌ، لٰكِنَّهَا ______ .', '… is cheap / fast, but it is …'],
      ['4', 'أَمْسِ ______ . فِي السَّنَةِ القَادِمَةِ سَـ ______ .', 'Yesterday … Next year I will …'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Jamila, how are you? I go to my new school by bus every day. I leave home at seven o’clock, and the journey takes about half an hour. I take the bus with my friend Hind, and we chat all the way. The bus is cheap, but it is very crowded in the morning. Yesterday the bus was late, so I arrived at school ten minutes late. Next year I will go by bike, because it is faster. Goodbye, Sara.”',
      find: ['بِالحَافِلَةِ', 'تَسْتَغْرِقُ الرِّحْلَةُ', 'لٰكِنَّهَا مُزْدَحِمَةٌ', 'سَأَذْهَبُ بِالدَّرَّاجَةِ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Jamila, greetings. You asked me how I get to my new school. I take the number 12 bus from the stop in front of our house at seven, and the journey takes about half an hour. I prefer the bus to the car because it is cheaper and better for the environment, but it is crowded in the morning. Something funny happened yesterday: I fell asleep on the bus, missed my stop and had to walk for ten minutes in the rain, so I arrived wet and late! Next year I will go by bike, because it is faster and more fun. And you — how do you get to your school? I look forward to your reply. With love, Sara.”',
      find: ['الَّتِي أَمَامَ بَيْتِنَا', 'أُفَضِّلُ الحَافِلَةَ عَلَى السَّيَّارَةِ', 'فَفَاتَتْنِي مَحَطَّتِي', 'أَسْرَعُ وَأَكْثَرُ مُتْعَةً'],
    },
  },
  Q3: {
    a: { title: 'المُوَاصَلَاتُ فِي حَيَاتِي', en: 'Transport in my life', bullets: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ وَالأَمَاكِنِ الأُخْرَى؟ · قَارِنْ بَيْنَ وَسِيلَتَيْنِ · رِحْلَةٌ لَا تَنْسَاهَا · رَأْيُكَ وَخُطَطُكَ لِلْمُسْتَقْبَلِ', bulletsEn: 'How you get to school and elsewhere · compare two means of transport · a journey you won’t forget · your opinion and future plans' },
    b: { title: 'السَّيَّارَةُ أَمِ المُوَاصَلَاتُ العَامَّةُ؟', en: 'The car or public transport?', bullets: 'المُشْكِلَاتُ فِي مَدِينَتِكَ · كَيْفَ تَغَيَّرَتِ المُوَاصَلَاتُ؟ · تَجْرِبَةٌ أَوْ مُبَادَرَةٌ تَعْرِفُهَا · رَأْيُكَ وَاقْتِرَاحَاتُكَ', bulletsEn: 'Problems in your town · how transport has changed · an experience or initiative · your opinion and suggestions' },
    plan: [
      'Present — how you travel, times and durations: adhhabu bi-…, tastaghriqu r-riḥla …',
      'Compare — asraʿu / arkhaṣu min …; Stretch: ammā … fa-, bi-kathīr.',
      'Past — a journey to remember: rakibnā, waṣalnā, taʾakhkhara …; fa- for a result.',
      'Opinion + future — yajibu an …, sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ بِالقِطَارِ.', en: 'present: I go to school by train.' },
      { ar: 'رَكِبْنَا القِطَارَ، وَوَصَلْنَا ظُهْرًا.', en: 'past: we took the train and arrived at noon.' },
      { ar: 'سَأَذْهَبُ بِالدَّرَّاجَةِ فِي السَّنَةِ القَادِمَةِ.', en: 'future: I will go by bike next year.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'A big city with buses, trains and taxis; I take the bus (about twenty minutes), Dad the train, Mum the car (her work is far from the station) → I like the train (fast, comfortable); the bus is cheaper but slower and crowded; the car is comfortable but expensive and pollutes the air → last month to Grandad’s by train: 9:00 to 12:00, sandwiches and cards, a great trip with mountains and farms from the window → we must use public transport more (better for the environment); I will cycle to school with my friends in future.', find: ['تَسْتَغْرِقُ الرِّحْلَةُ', 'أَرْخَصُ مِنَ القِطَارِ', 'رَكِبْنَا القِطَارَ', 'يَجِبُ أَنْ نَسْتَعْمِلَ'], notes: 'Core model: transport with bi-, a duration, comparatives, a past journey, an opinion and a future plan.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'A quiet suburb 10 km from the centre, so transport fills my day: walk five minutes, then the train that gets me to school in only a quarter of an hour, reading or revising on the way → I prefer the train: much faster and not affected by traffic or accidents; as for the bus, it is cheaper but can be half an hour late at rush hour → but the train isn’t perfect: last winter it broke down in the snow; a whole hour in the bitter cold, then we walked and arrived after the second lesson had begun → the city should invest in cycle lanes (cheaper, cleaner, encouraging exercise); “if there were a safe route from my home to school, I would cycle every day, even in winter”.', find: ['يَصِلُ بِي إِلَى المَدْرَسَةِ', 'أَمَّا الحَافِلَةُ فَأَرْخَصُ', 'بَعْدَ أَنْ بَدَأَ', 'لَوْ كَانَتْ … لَذَهَبْتُ'], notes: 'Full-mark model: a relative clause, uffaḍḍilu … ʿalā, bi-kathīr, ammā … fa-, a past narrative with fa-, yanbaghī an and a conditional.' },
      { which: 'ب', level: 'Full', subtitle: 'the car or public transport?', text: Q3B_FULL, en: 'Many people in my town rely on cars even for short trips — traffic and air pollution, especially in the morning when everyone travels at once; a short trip can take half an hour → in the past people walked to the market, mosque and school because everything was close; as for today, cities have grown and distances are longer, so the car became a necessity, especially in outlying districts → last year my school ran a “car-free week”: students walked, cycled or took the bus; clearly less traffic and more energy in the first lesson → it is true the car is comfortable and sometimes necessary, but public transport is better for the environment and cheaper for families; “if the council made buses more frequent and faster, many people would leave their cars at home, and our town would be cleaner and calmer”.', find: ['يَعْتَمِدُ كَثِيرٌ مِنَ النَّاسِ', 'أَمَّا اليَوْمَ فَقَدْ كَبُرَتِ', '«أُسْبُوعَ بِلَا سَيَّارَاتٍ»', 'لَوْ جَعَلَتِ … لَتَرَكَ'], notes: 'Full-mark model for the Stretch title: kāna + present, ammā … fa-qad, a school initiative, a concession, comparatives and a conditional.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; a clock time and min … ilā.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: a comparison (arkhaṣu min) or uffaḍḍilu … ʿalā.' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: ammā … fa-, a concession or a conditional.' },
  ],
};
write.Q2.frames[4] = ['4', 'أَمْسِ ______ . فِي السَّنَةِ القَادِمَةِ سَأَذْهَبُ ______ .', 'Yesterday … Next year I will go …'];
write.Q2.phrases[0] = ['أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ', 'I go to school by bus'];

module.exports = { speak, write };
