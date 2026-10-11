'use strict';
/* Exam-practice data · AT-A-L10 · Reading and Listening Exam Skills — the workshops apply the whole of Topic A
   (routine, time, food, health, transport) to one theme: a weekend day out. Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { n: 10, short: 'Mixed Topic A: a Day Out', arShort: 'يَوْمٌ فِي الخَارِجِ', fileTitle: 'Reading_and_Listening_Exam_Skills', title: 'Topic A mixed practice — a weekend day out', ar: 'نُزْهَةٌ فِي نِهَايَةِ الأُسْبُوعِ', icon: 'FaMapLocationDot', grammar: 'mixed Topic A: time, routine, food, health and transport; past, present and future together' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: plan and describe a day out, using everything from Topic A — times, food, transport, health — across past, present and future.',
  words: [
    w(1, 'نُزْهَةٌ', 'an outing, a day out', [['sg.', 'نُزْهَةٌ'], ['pl.', 'نُزُهَاتٌ']]),
    w(2, 'نَخْرُجُ', 'we go out', [['I', 'أَخْرُجُ'], ['he', 'يَخْرُجُ'], ['they', 'يَخْرُجُونَ']]),
    w(3, 'قَضَيْتُ', 'I spent (time)', [['he', 'قَضَى'], ['she', 'قَضَتْ'], ['we', 'قَضَيْنَا']]),
    w(4, 'سَنَزُورُ', 'we will visit', [['I', 'سَأَزُورُ'], ['he', 'سَيَزُورُ'], ['they', 'سَيَزُورُونَ']]),
    w(5, 'نَتَّفِقُ عَلَى …', 'we agree on …', [['I', 'أَتَّفِقُ'], ['he', 'يَتَّفِقُ'], ['they', 'يَتَّفِقُونَ']]),
    w(6, 'حَدِيقَةٌ · شَاطِئٌ · مُتْحَفٌ', 'park · beach · museum', [['pl.', 'حَدَائِقُ · شَوَاطِئُ · مَتَاحِفُ']], { tag: 'places' }),
    w(7, 'مُمْتِعٌ', 'enjoyable, fun', [['m.', 'مُمْتِعٌ'], ['f.', 'مُمْتِعَةٌ'], ['more', 'أَمْتَعُ']]),
    w(8, 'مُتْعِبٌ', 'tiring', [['m.', 'مُتْعِبٌ'], ['f.', 'مُتْعِبَةٌ'], ['more', 'أَكْثَرُ تَعَبًا']]),
    w(9, 'مُتَحَمِّسٌ', 'excited', [['m.', 'مُتَحَمِّسٌ'], ['f.', 'مُتَحَمِّسَةٌ'], ['pl.', 'مُتَحَمِّسُونَ']]),
    w(10, 'نُزْهَةُ طَعَامٍ', 'a picnic', null, { tag: 'food' }),
    w(11, 'مَا رَأْيُكَ أَنْ …؟', 'how about … (+ verb in -a)?', [['you f.', 'مَا رَأْيُكِ'], ['you pl.', 'مَا رَأْيُكُمْ']], { tag: 'suggesting' }),
    w(12, 'فِكْرَةٌ رَائِعَةٌ!', 'great idea!', null, { tag: 'agreeing' }),
  ],
  words1: { eyebrow: 'Language bank · day-out verbs in three time frames', title: 'Plan it, do it, tell it', ar: 'خَطِّطْ وَتَحَدَّثْ', notes: 'LANGUAGE BANK (2 min) — the exam rewards three time frames: نَخْرُجُ (present) · قَضَيْنَا (past) · سَنَزُورُ (future). Every topic in A can be fitted into a day out: time, food, transport, health.' },
  words2: { eyebrow: 'Language bank · places, feelings and suggestions', title: 'Where shall we go — and how was it?', ar: 'أَيْنَ نَذْهَبُ؟', notes: 'LANGUAGE BANK (2 min) — suggesting: مَا رَأْيُكَ أَنْ نَذْهَبَ …؟ (an + verb in -a). Feelings agree: كَانَ اليَوْمُ مُمْتِعًا · كَانَتِ الرِّحْلَةُ مُمْتِعَةً.' },
  checkCore: 'gave times, places and transport in full sentences',
  checkDevelop: 'used at least two time frames and gave an opinion with a reason',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'planning with a friend', title: 'Role play A — Planning Saturday', ar: 'نُخَطِّطُ لِيَوْمِ السَّبْتِ', you: 'a student', them: 'your friend',
      tasks: [
        { core: true, ex: 'مَاذَا نَفْعَلُ يَوْمَ السَّبْتِ؟', task: 'Suggest a place to go.', help: 'مَا رَأْيُكَ أَنْ نَذْهَبَ إِلَى …؟', model: 'مَا رَأْيُكَ أَنْ نَذْهَبَ إِلَى الحَدِيقَةِ الكَبِيرَةِ؟', modelEn: 'How about going to the big park?' },
        { core: true, ex: 'فِكْرَةٌ رَائِعَةٌ! مَتَى نَلْتَقِي؟', task: 'Suggest a time and a meeting place.', help: 'نَلْتَقِي فِي السَّاعَةِ … أَمَامَ …', model: 'نَلْتَقِي فِي السَّاعَةِ العَاشِرَةِ أَمَامَ المَكْتَبَةِ.', modelEn: 'Let’s meet at ten in front of the library.' },
        { core: true, ex: 'كَيْفَ نَذْهَبُ؟', task: 'Say how you will travel.', help: 'نَذْهَبُ بِالحَافِلَةِ … لِأَنَّ …', model: 'نَذْهَبُ بِالحَافِلَةِ، لِأَنَّهَا رَخِيصَةٌ وَسَرِيعَةٌ.', modelEn: 'We’ll go by bus, because it is cheap and quick.' },
        { core: true, ex: 'وَمَاذَا نَأْكُلُ؟', task: 'Say what food you will bring.', help: 'سَأُحْضِرُ … وَ…', model: 'سَأُحْضِرُ السَّنْدَوِيشَاتِ وَالفَوَاكِهَ وَالمَاءَ.', modelEn: 'I’ll bring sandwiches, fruit and water.' },
        { core: true, unexpected: true, ex: 'وَإِذَا كَانَ الجَوُّ مُمْطِرًا؟', task: 'Answer the unexpected question.', help: 'إِذَا كَانَ … نَذْهَبُ إِلَى …', model: 'إِذَا كَانَ الجَوُّ مُمْطِرًا، نَذْهَبُ إِلَى المُتْحَفِ بَدَلًا مِنَ الحَدِيقَةِ.', modelEn: 'If it’s raining, we’ll go to the museum instead of the park.' },
      ],
      girl: 'to a girl friend: مَا رَأْيُكِ أَنْ نَذْهَبَ …؟',
      notes: 'Core: a suggestion (mā raʾyuka an + verb in -a), a time + place, transport with bi-, food, and an idhā sentence.',
    },
    {
      id: 'B', level: 'Core+', setting: 'at a tourist office', title: 'Role play B — At the tourist information office', ar: 'فِي مَكْتَبِ السِّيَاحَةِ', you: 'a visitor', them: 'the information officer',
      tasks: [
        { core: true, ex: 'مَرْحَبًا، كَيْفَ أُسَاعِدُكَ؟', task: 'Ask what there is to do in the town.', help: 'مَاذَا يُمْكِنُ أَنْ نَفْعَلَ فِي …؟', model: 'مَرْحَبًا، مَاذَا يُمْكِنُ أَنْ نَفْعَلَ فِي المَدِينَةِ اليَوْمَ؟', modelEn: 'Hello, what can we do in the town today?' },
        { core: true, ex: 'هُنَاكَ المُتْحَفُ وَالشَّاطِئُ وَالسُّوقُ القَدِيمُ.', task: 'Choose one and give a reason.', help: 'نُرِيدُ أَنْ نَزُورَ … لِأَنَّ …', model: 'نُرِيدُ أَنْ نَزُورَ السُّوقَ القَدِيمَ، لِأَنَّ أُمِّي تُحِبُّ التَّسَوُّقَ.', modelEn: 'We want to visit the old market, because my mum loves shopping.' },
        { ex: 'السُّوقُ يَفْتَحُ مِنَ التَّاسِعَةِ.', task: 'ASK when it closes.', help: 'مَتَى …؟', model: 'وَمَتَى يُغْلِقُ، مِنْ فَضْلِكَ؟', modelEn: 'And when does it close, please?' },
        { ex: 'فِي السَّادِسَةِ. وَهُنَاكَ مَطْعَمٌ مَشْهُورٌ قَرِيبٌ.', task: 'Ask the way to the restaurant.', help: 'كَيْفَ نَصِلُ إِلَى …؟', model: 'رَائِعٌ! كَيْفَ نَصِلُ إِلَى المَطْعَمِ مِنْ هُنَا؟', modelEn: 'Great! How do we get to the restaurant from here?' },
        { unexpected: true, ex: 'كَمْ يَوْمًا سَتَبْقَوْنَ فِي المَدِينَةِ؟', task: 'Answer the unexpected question.', help: 'سَنَبْقَى … حَتَّى …', model: 'سَنَبْقَى ثَلَاثَةَ أَيَّامٍ، حَتَّى يَوْمِ الثُّلَاثَاءِ.', modelEn: 'We will stay three days, until Tuesday.' },
      ],
      girl: 'أُسَاعِدُكِ',
      notes: 'Task 3: the CANDIDATE asks. Opening and closing times recycle AT-A-L01/L02; directions recycle L09; food L05.',
    },
    {
      id: 'C', level: 'Develop', setting: 'the morning after', title: 'Role play C — Telling a friend about your day out', ar: 'كَيْفَ كَانَتِ النُّزْهَةُ؟', you: 'a student who went on a day out', them: 'a friend who stayed at home',
      tasks: [
        { ex: 'أَيْنَ ذَهَبْتَ أَمْسِ؟', task: 'Say where and with whom (past).', help: 'ذَهَبْتُ إِلَى … مَعَ …', model: 'ذَهَبْتُ إِلَى الشَّاطِئِ مَعَ أُسْرَتِي وَأَوْلَادِ عَمِّي.', modelEn: 'I went to the beach with my family and my cousins.' },
        { ex: 'مَاذَا فَعَلْتُمْ هُنَاكَ؟', task: 'Describe two activities.', help: 'سَبَحْنَا … ثُمَّ …', model: 'سَبَحْنَا فِي الصَّبَاحِ، ثُمَّ لَعِبْنَا كُرَةَ الطَّائِرَةِ عَلَى الرَّمْلِ.', modelEn: 'We swam in the morning, then played volleyball on the sand.' },
        { ex: 'وَمَاذَا أَكَلْتُمْ؟', task: 'Say what you ate and give an opinion.', help: 'أَكَلْنَا … وَكَانَ …', model: 'أَكَلْنَا سَمَكًا مَشْوِيًّا فِي مَطْعَمٍ صَغِيرٍ، وَكَانَ أَلَذَّ سَمَكٍ أَكَلْتُهُ!', modelEn: 'We ate grilled fish in a small restaurant — the tastiest fish I have ever eaten!' },
        { ex: '… أَنَا بَقِيتُ فِي البَيْتِ لِأَنِّي كُنْتُ مَرِيضًا.', task: 'Show sympathy and ASK how he feels now.', help: 'سَلَامَتُكَ! كَيْفَ …؟', model: 'سَلَامَتُكَ! وَكَيْفَ تَشْعُرُ الآنَ؟', modelEn: 'Get well soon! And how do you feel now?' },
        { unexpected: true, ex: 'هَلْ سَتَذْهَبُونَ مَرَّةً أُخْرَى؟', task: 'Answer the unexpected question (future + invitation).', help: 'نَعَمْ، سَنَذْهَبُ … هَلْ تَأْتِي مَعَنَا؟', model: 'نَعَمْ، سَنَذْهَبُ فِي العُطْلَةِ القَادِمَةِ، فَهَلْ تَأْتِي مَعَنَا؟', modelEn: 'Yes, we will go in the next holiday — will you come with us?' },
      ],
      girl: 'ذَهَبْتِ · كُنْتُ مَرِيضَةً · سَلَامَتُكِ · تَشْعُرِينَ · تَأْتِينَ',
      notes: 'Develop: a past narrative (we-forms), a superlative (aladhdhu samakin), sympathy (L07), a question, a future invitation.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a youth radio interview', title: 'Role play D — How young people spend their weekends', ar: 'نِهَايَةُ الأُسْبُوعِ عِنْدَ الشَّبَابِ', you: 'a young guest', them: 'a radio presenter',
      tasks: [
        { ex: 'كَيْفَ يَقْضِي الشَّبَابُ عُطْلَةَ نِهَايَةِ الأُسْبُوعِ اليَوْمَ؟', task: 'Describe and give an opinion.', help: 'يَقْضِي كَثِيرٌ مِنْهُمْ … وَهٰذَا …', model: 'يَقْضِي كَثِيرٌ مِنْهُمْ وَقْتَهُمْ أَمَامَ الشَّاشَاتِ، وَهٰذَا فِي رَأْيِي غَيْرُ صِحِّيٍّ.', modelEn: 'Many of them spend their time in front of screens, which in my view is unhealthy.' },
        { ex: 'وَكَيْفَ كَانَ الأَمْرُ فِي المَاضِي؟', task: 'Compare past and present.', help: 'كَانَ … أَمَّا اليَوْمَ فَيُفَضِّلُونَ …', model: 'كَانَ الشَّبَابُ يَخْرُجُونَ إِلَى الطَّبِيعَةِ أَكْثَرَ، أَمَّا اليَوْمَ فَيُفَضِّلُونَ المَرَاكِزَ التِّجَارِيَّةَ.', modelEn: 'Young people used to go out into nature more; today they prefer shopping centres.' },
        { ex: 'صِفْ لَنَا نُزْهَةً لَا تَنْسَاهَا.', task: 'Tell a short story with a problem and a result.', help: 'ذَهَبْنَا … وَفَجْأَةً … فَاخْتَبَأْنَا …', model: 'ذَهَبْنَا إِلَى الجَبَلِ، وَفَجْأَةً بَدَأَ المَطَرُ، فَاخْتَبَأْنَا فِي كَهْفٍ صَغِيرٍ وَضَحِكْنَا كَثِيرًا.', modelEn: 'We went to the mountain, and suddenly it started raining, so we hid in a small cave and laughed a lot.' },
        { ex: 'يَقُولُ البَعْضُ إِنَّ النُّزُهَاتِ غَالِيَةٌ جِدًّا.', task: 'Concede and disagree.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ بَعْضَهَا غَالٍ، غَيْرَ أَنَّ المَشْيَ فِي الحَدِيقَةِ أَوْ عَلَى الشَّاطِئِ مَجَّانِيٌّ وَمُفِيدٌ.', modelEn: 'It is true some are expensive, but walking in the park or on the beach is free and good for you.' },
        { unexpected: true, ex: 'لَوْ كُنْتَ تَسْتَطِيعُ أَنْ تَذْهَبَ إِلَى أَيِّ مَكَانٍ غَدًا، أَيْنَ تَذْهَبُ؟', task: 'Answer the unexpected question (a conditional).', help: 'لَوْ كُنْتُ أَسْتَطِيعُ …، لَذَهَبْتُ …', model: 'لَوْ كُنْتُ أَسْتَطِيعُ، لَذَهَبْتُ إِلَى البَتْرَاءِ، لِأَنِّي أَحْلُمُ بِرُؤْيَتِهَا مُنْذُ سَنَوَاتٍ.', modelEn: 'If I could, I would go to Petra, because I have dreamed of seeing it for years.' },
      ],
      girl: 'كُنْتِ تَسْتَطِيعِينَ · تَذْهَبِينَ · لَا تَنْسَيْنَهَا',
      notes: 'Stretch: an opinion, kāna + present vs ammā … fa-, a story with fajʾatan + fa-, a concession, a conditional with a reason.',
      modelFoot: 'Stretch: kāna + present, ammā … fa-, fajʾatan … fa-, ṣaḥīḥun anna … ghayra anna and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'نِهَايَةُ الأُسْبُوعِ', aim: 'one full sentence per question',
      qs: [
        { q: 'مَاذَا تَفْعَلُ يَوْمَ السَّبْتِ عَادَةً؟', en: 'What do you usually do on Saturdays?', start: 'يَوْمَ السَّبْتِ عَادَةً …', model: 'يَوْمَ السَّبْتِ عَادَةً أَلْعَبُ كُرَةَ القَدَمِ، ثُمَّ أَزُورُ جَدَّتِي.', modelEn: 'On Saturdays I usually play football, then visit my grandmother.' },
        { q: 'فِي أَيِّ سَاعَةٍ تَسْتَيْقِظُ فِي نِهَايَةِ الأُسْبُوعِ؟', en: 'What time do you get up at the weekend?', start: 'أَسْتَيْقِظُ فِي السَّاعَةِ …', model: 'أَسْتَيْقِظُ فِي السَّاعَةِ التَّاسِعَةِ، لِأَنِّي أُحِبُّ النَّوْمَ!', modelEn: 'I get up at nine, because I love sleeping!' },
        { q: 'أَيْنَ تُحِبُّ أَنْ تَذْهَبَ مَعَ أُسْرَتِكَ؟', en: 'Where do you like going with your family?', start: 'أُحِبُّ أَنْ أَذْهَبَ إِلَى …', model: 'أُحِبُّ أَنْ أَذْهَبَ إِلَى الشَّاطِئِ مَعَ أُسْرَتِي.', modelEn: 'I like going to the beach with my family.' },
        { q: 'مَاذَا تَأْكُلُونَ فِي النُّزْهَةِ؟', en: 'What do you eat on a day out?', start: 'نَأْكُلُ …', model: 'نَأْكُلُ السَّنْدَوِيشَاتِ وَالفَوَاكِهَ، وَنَشْرَبُ العَصِيرَ.', modelEn: 'We eat sandwiches and fruit, and drink juice.' },
        { q: 'أَيْنَ ذَهَبْتَ فِي نِهَايَةِ الأُسْبُوعِ المَاضِي؟', en: 'Where did you go last weekend?', start: 'ذَهَبْتُ إِلَى …', model: 'ذَهَبْتُ إِلَى السُّوقِ مَعَ أُمِّي، وَاشْتَرَيْتُ حِذَاءً جَدِيدًا.', modelEn: 'I went to the market with my mum and bought new shoes.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a time, a place or a person = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'نُزْهَاتِي', aim: 'two or three sentences, mixing time frames',
      qs: [
        { q: 'صِفْ نُزْهَةً جَمِيلَةً قُمْتَ بِهَا.', en: 'Describe a lovely day out you had.', start: 'فِي … ذَهَبْنَا إِلَى … وَ…', model: 'فِي الرَّبِيعِ ذَهَبْنَا إِلَى مَزْرَعَةِ عَمِّي، وَقَطَفْنَا الفَرَاوِلَةَ، وَأَكَلْنَا الغَدَاءَ تَحْتَ الأَشْجَارِ.', modelEn: 'In spring we went to my uncle’s farm, picked strawberries and ate lunch under the trees.' },
        { q: 'كَيْفَ تَذْهَبُونَ إِلَى النُّزْهَةِ؟ وَكَمْ تَسْتَغْرِقُ الرِّحْلَةُ؟', en: 'How do you travel, and how long does it take?', start: 'نَذْهَبُ بِالسَّيَّارَةِ، وَتَسْتَغْرِقُ …', model: 'نَذْهَبُ بِالسَّيَّارَةِ عَادَةً، وَتَسْتَغْرِقُ الرِّحْلَةُ سَاعَةً، فَنُغَنِّي فِي الطَّرِيقِ.', modelEn: 'We usually go by car; it takes an hour, so we sing on the way.' },
        { q: 'هَلْ تُفَضِّلُ النُّزْهَةَ فِي المَدِينَةِ أَمْ فِي الطَّبِيعَةِ؟', en: 'Do you prefer a day out in town or in nature?', start: 'أُفَضِّلُ … لِأَنَّ …', model: 'أُفَضِّلُ الطَّبِيعَةَ، لِأَنَّ الهَوَاءَ أَنْظَفُ، وَالمَكَانَ أَهْدَأُ مِنَ المَدِينَةِ.', modelEn: 'I prefer nature, because the air is cleaner and it is quieter than the town.' },
        { q: 'لِمَاذَا النُّزُهَاتُ مُفِيدَةٌ لِلصِّحَّةِ؟', en: 'Why are days out good for your health?', start: 'لِأَنَّنَا نَمْشِي … وَ…', model: 'لِأَنَّنَا نَمْشِي وَنَتَنَفَّسُ هَوَاءً نَقِيًّا، وَنَنْسَى ضَغْطَ الدِّرَاسَةِ قَلِيلًا.', modelEn: 'Because we walk and breathe fresh air, and forget the pressure of school for a while.' },
        { q: 'مَا خُطَطُكَ لِنِهَايَةِ الأُسْبُوعِ القَادِمِ؟', en: 'What are your plans for next weekend?', start: 'سَأَزُورُ … ثُمَّ سَنَأْكُلُ …', model: 'سَأَزُورُ المُتْحَفَ الجَدِيدَ مَعَ أَصْدِقَائِي، ثُمَّ سَنَأْكُلُ البِيتْزَا فِي المَسَاءِ.', modelEn: 'I will visit the new museum with my friends, then we will have pizza in the evening.' },
      ],
      foot: 'Develop: two or three sentences — past, present and future, a comparison and a reason.',
      modelFoot: 'Three time frames + a comparison + a reason = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الوَقْتُ الحُرُّ وَالمُجْتَمَعُ', aim: 'a developed answer: opinion, comparison, concession and a conditional',
      qs: [
        { q: 'هَلْ يَقْضِي الشَّبَابُ وَقْتًا كَافِيًا مَعَ أُسَرِهِمْ؟', en: 'Do young people spend enough time with their families?', start: 'لَا أَظُنُّ ذٰلِكَ، لِأَنَّ …', model: 'لَا أَظُنُّ ذٰلِكَ، لِأَنَّ كُلَّ وَاحِدٍ مَشْغُولٌ بِهَاتِفِهِ، حَتَّى عِنْدَمَا يَجْلِسُونَ مَعًا.', modelEn: 'I don’t think so, because everyone is busy with their phone, even when they sit together.' },
        { q: 'مَا الفَرْقُ بَيْنَ عُطْلَةِ نِهَايَةِ الأُسْبُوعِ عِنْدَكَ وَعِنْدَ وَالِدَيْكَ عِنْدَمَا كَانَا صَغِيرَيْنِ؟', en: 'How do your weekends differ from your parents’ as children?', start: 'كَانَ أَبِي يَقْضِي … أَمَّا أَنَا فَأَقْضِي …', model: 'كَانَ أَبِي يَقْضِي عُطْلَتَهُ فِي اللَّعِبِ فِي الحَيِّ، أَمَّا أَنَا فَأَقْضِي جُزْءًا كَبِيرًا مِنْهَا فِي الدُّرُوسِ الإِضَافِيَّةِ.', modelEn: 'My father spent his weekends playing in the neighbourhood; I spend a big part of mine in extra lessons.' },
        { q: 'هَلْ يَجِبُ أَنْ تَكُونَ المَتَاحِفُ مَجَّانِيَّةً؟', en: 'Should museums be free?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ المَتَاحِفَ تَحْتَاجُ إِلَى المَالِ، غَيْرَ أَنَّ الثَّقَافَةَ يَجِبُ أَنْ تَكُونَ لِلْجَمِيعِ، لَا لِلْأَغْنِيَاءِ فَقَطْ.', modelEn: 'It is true museums need money, but culture should be for everyone, not just the rich.' },
        { q: 'مَا أَجْمَلُ مَكَانٍ زُرْتَهُ؟ وَلِمَاذَا؟', en: 'What is the most beautiful place you have visited?', start: 'أَجْمَلُ مَكَانٍ زُرْتُهُ هُوَ … لِأَنَّ …', model: 'أَجْمَلُ مَكَانٍ زُرْتُهُ هُوَ وَادِي رَمٍّ، لِأَنَّ الصَّحْرَاءَ هُنَاكَ حَمْرَاءُ، وَالنُّجُومَ فِي اللَّيْلِ لَا تُصَدَّقُ.', modelEn: 'The most beautiful place I have visited is Wadi Rum, because the desert there is red and the stars at night are unbelievable.' },
        { q: 'لَوْ نَظَّمْتَ يَوْمًا مِثَالِيًّا لِصَفِّكَ، كَيْفَ يَكُونُ؟', en: 'If you organised a perfect day for your class, what would it be like?', start: 'لَوْ نَظَّمْتُ …، لَبَدَأْنَا … ثُمَّ …', model: 'لَوْ نَظَّمْتُ يَوْمًا مِثَالِيًّا، لَبَدَأْنَا بِالمَشْيِ فِي الجَبَلِ، ثُمَّ تَغَدَّيْنَا عَلَى الشَّاطِئِ، وَخَتَمْنَا بِمُبَارَاةٍ.', modelEn: 'If I organised a perfect day, we would start with a mountain walk, then have lunch on the beach and finish with a match.' },
      ],
      foot: 'Stretch: kāna + present vs ammā … fa-, a superlative + relative clause (ajmalu makānin zurtuhu), a concession and a conditional.',
      modelFoot: 'Stretch: ḥattā ʿindamā, kāna + present, ṣaḥīḥun anna … ghayra anna, a superlative, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I gave times, places and transport in full sentences.' },
    { route: 'core', text: 'I made a suggestion (mā raʾyuka an …?).' },
    { route: 'develop', text: 'I used past, present AND future in the conversation.' },
    { route: 'develop', text: 'I asked a question in the role play.' },
    { route: 'stretch', text: 'I used a superlative, a concession or a conditional.' },
  ],
};
speak.RP[0].tasks[2].help = 'نَذْهَبُ بِالحَافِلَةِ … لِأَنَّ …';
speak.RP[3].tasks[1].help = 'كَانَ … أَمَّا اليَوْمَ فَيُفَضِّلُونَ …';
speak.RP[3].tasks[2].help = 'ذَهَبْنَا … وَفَجْأَةً … فَاخْتَبَأْنَا …';
speak.CONV[1].qs[4].start = 'سَأَزُورُ … ثُمَّ سَنَأْكُلُ …';
speak.CONV[2].qs[1].start = 'كَانَ أَبِي يَقْضِي … أَمَّا أَنَا فَأَقْضِي …';

const Q2_CORE = `مَرْحَبًا يَا رَامِي،
كَيْفَ حَالُكَ؟ أَمْسِ ذَهَبْتُ مَعَ أُسْرَتِي إِلَى الشَّاطِئِ. خَرَجْنَا مِنَ البَيْتِ فِي السَّاعَةِ الثَّامِنَةِ، وَذَهَبْنَا بِالسَّيَّارَةِ، وَاسْتَغْرَقَتِ الرِّحْلَةُ سَاعَةً. سَبَحْنَا فِي البَحْرِ، وَلَعِبْنَا كُرَةَ القَدَمِ عَلَى الرَّمْلِ. فِي الظُّهْرِ أَكَلْنَا السَّمَكَ وَالسَّلَطَةَ فِي مَطْعَمٍ صَغِيرٍ. كَانَ اليَوْمُ مُمْتِعًا جِدًّا، لٰكِنِّي كُنْتُ مُتْعَبًا فِي المَسَاءِ. فِي الشَّهْرِ القَادِمِ سَنَذْهَبُ إِلَى الجَبَلِ. هَلْ تَأْتِي مَعَنَا؟
مَعَ السَّلَامَةِ،
عَادِلٌ`;
const Q2_FULL = `عَزِيزِي رَامِي،
تَحِيَّةً طَيِّبَةً، وَبَعْدُ، فَأُرِيدُ أَنْ أُخْبِرَكَ عَنْ نُزْهَتِنَا أَمْسِ إِلَى الشَّاطِئِ. خَرَجْنَا مُبَكِّرًا فِي السَّابِعَةِ لِكَيْ نَتَجَنَّبَ الازْدِحَامَ، وَاسْتَغْرَقَتِ الرِّحْلَةُ بِالسَّيَّارَةِ سَاعَةً تَقْرِيبًا، فَوَصَلْنَا قَبْلَ أَنْ يَمْتَلِئَ الشَّاطِئُ بِالنَّاسِ. قَضَيْنَا الصَّبَاحَ فِي السِّبَاحَةِ وَبِنَاءِ القِلَاعِ الرَّمْلِيَّةِ مَعَ أَخِي الصَّغِيرِ، ثُمَّ تَغَدَّيْنَا سَمَكًا مَشْوِيًّا فِي مَطْعَمٍ يُطِلُّ عَلَى البَحْرِ، وَكَانَ أَلَذَّ سَمَكٍ أَكَلْتُهُ. صَحِيحٌ أَنَّ الشَّمْسَ كَانَتْ حَارَّةً جِدًّا، غَيْرَ أَنَّنَا اسْتَعْمَلْنَا الكْرِيمَ وَشَرِبْنَا مَاءً كَثِيرًا، فَلَمْ يُصَبْ أَحَدٌ بِضَرْبَةِ شَمْسٍ. فِي الشَّهْرِ القَادِمِ سَنَزُورُ الجَبَلَ، فَمَا رَأْيُكَ أَنْ تَأْتِيَ مَعَنَا؟
مَعَ تَحِيَّاتِي،
عَادِلٌ`;
const Q3A_CORE = `فِي نِهَايَةِ الأُسْبُوعِ المَاضِي ذَهَبْتُ مَعَ صَفِّي إِلَى حَدِيقَةِ الحَيَوَانَاتِ. خَرَجْنَا مِنَ المَدْرَسَةِ فِي السَّاعَةِ التَّاسِعَةِ، وَذَهَبْنَا بِالحَافِلَةِ. كَانَتِ الرِّحْلَةُ طَوِيلَةً، لٰكِنَّنَا غَنَّيْنَا وَضَحِكْنَا فِي الطَّرِيقِ، وَوَصَلْنَا فِي السَّاعَةِ العَاشِرَةِ وَالنِّصْفِ.
فِي الحَدِيقَةِ رَأَيْنَا الأُسُودَ وَالفِيَلَةَ وَالقُرُودَ. القُرُودُ كَانَتْ مُضْحِكَةً جِدًّا! فِي الظُّهْرِ جَلَسْنَا تَحْتَ الأَشْجَارِ، وَأَكَلْنَا السَّنْدَوِيشَاتِ وَالفَوَاكِهَ، وَشَرِبْنَا المَاءَ، لِأَنَّ الجَوَّ كَانَ حَارًّا.
بَعْدَ الغَدَاءِ مَشَيْنَا كَثِيرًا، فَتَعِبْنَا. رَجَعْنَا إِلَى المَدْرَسَةِ فِي السَّاعَةِ الرَّابِعَةِ، وَنِمْتُ فِي الحَافِلَةِ! فِي البَيْتِ أَخْبَرْتُ أُمِّي عَنْ كُلِّ شَيْءٍ، وَأَرَيْتُهَا الصُّوَرَ الَّتِي أَخَذْتُهَا بِهَاتِفِي.
فِي رَأْيِي، النُّزُهَاتُ مُفِيدَةٌ، لِأَنَّنَا نَتَعَلَّمُ أَشْيَاءَ جَدِيدَةً، وَنَمْشِي فِي الهَوَاءِ النَّقِيِّ، وَنَقْضِي وَقْتًا جَمِيلًا مَعَ أَصْدِقَائِنَا. فِي الصَّيْفِ القَادِمِ سَأَزُورُ الحَدِيقَةَ مَرَّةً أُخْرَى مَعَ أُسْرَتِي، لِأَنَّ أَخِي الصَّغِيرَ يُحِبُّ الحَيَوَانَاتِ.`;
const Q3A_FULL = `لَنْ أَنْسَى يَوْمَ الجُمُعَةِ المَاضِي، عِنْدَمَا قَرَّرَتْ أُسْرَتِي أَنْ تَقْضِيَ يَوْمًا كَامِلًا فِي الجَبَلِ بَعِيدًا عَنِ الشَّاشَاتِ. خَرَجْنَا قَبْلَ شُرُوقِ الشَّمْسِ، وَاسْتَغْرَقَتِ الرِّحْلَةُ بِالسَّيَّارَةِ سَاعَتَيْنِ، فَتَنَاوَلْنَا الفُطُورَ عِنْدَ وُصُولِنَا عَلَى صَخْرَةٍ كَبِيرَةٍ تُطِلُّ عَلَى الوَادِي: خُبْزٌ سَاخِنٌ وَزَيْتُونٌ وَجُبْنٌ وَشَايٌ بِالنَّعْنَاعِ.
بَعْدَ ذٰلِكَ مَشَيْنَا ثَلَاثَ سَاعَاتٍ فِي طَرِيقٍ ضَيِّقٍ، وَكَانَ أَبِي يَشْرَحُ لَنَا أَسْمَاءَ النَّبَاتَاتِ. أَمَّا أُخْتِي الصَّغِيرَةُ فَكَانَتْ تَجْمَعُ الأَزْهَارَ وَتَسْأَلُ عَنْ كُلِّ شَيْءٍ تَرَاهُ، حَتَّى تَعِبَتْ فَحَمَلَهَا أَبِي عَلَى ظَهْرِهِ.
فَجْأَةً تَغَيَّرَ الجَوُّ، وَبَدَأَ المَطَرُ يَنْزِلُ بِغَزَارَةٍ، فَاخْتَبَأْنَا تَحْتَ شَجَرَةٍ كَبِيرَةٍ، وَشَرِبْنَا الشَّايَ السَّاخِنَ مِنَ التُّرْمُسِ وَنَحْنُ نَضْحَكُ. رَجَعْنَا إِلَى البَيْتِ مُبْتَلِّينَ وَمُتْعَبِينَ، لٰكِنْ سُعَدَاءَ جِدًّا.
صَحِيحٌ أَنَّ اليَوْمَ كَانَ مُتْعِبًا، غَيْرَ أَنَّهُ كَانَ أَجْمَلَ مِنْ أَيِّ يَوْمٍ قَضَيْتُهُ أَمَامَ الهَاتِفِ. سَنُكَرِّرُ هٰذِهِ التَّجْرِبَةَ كُلَّ شَهْرٍ، وَلَوْ كَانَ الأَمْرُ بِيَدِي، لَجَعَلْتُ يَوْمَ الجُمُعَةِ يَوْمًا بِلَا شَاشَاتٍ لِكُلِّ الأُسَرِ.`;
const Q3B_FULL = `تَغَيَّرَتْ طَرِيقَةُ قَضَاءِ الشَّبَابِ لِعُطْلَةِ نِهَايَةِ الأُسْبُوعِ كَثِيرًا. فِي المَاضِي كَانَ الأَطْفَالُ يَلْعَبُونَ فِي الحَيِّ حَتَّى المَغْرِبِ، وَكَانَتِ الأُسَرُ تَخْرُجُ مَعًا إِلَى الحَدَائِقِ وَالشَّوَاطِئِ، أَمَّا اليَوْمَ فَيَقْضِي كَثِيرٌ مِنَ الشَّبَابِ سَاعَاتٍ طَوِيلَةً أَمَامَ الأَلْعَابِ الإِلِكْتِرُونِيَّةِ أَوْ فِي المَرَاكِزِ التِّجَارِيَّةِ.
فِي رَأْيِي، لِهٰذَا التَّغْيِيرِ أَسْبَابٌ كَثِيرَةٌ: الدُّرُوسُ الإِضَافِيَّةُ تَأْخُذُ جُزْءًا كَبِيرًا مِنَ العُطْلَةِ، وَالمُدُنُ أَصْبَحَتْ أَكْثَرَ ازْدِحَامًا، وَالنُّزُهَاتُ صَارَتْ أَغْلَى مِنْ قَبْلُ، كَمَا أَنَّ كَثِيرًا مِنَ الآبَاءِ يَعْمَلُونَ حَتَّى فِي العُطْلَةِ.
غَيْرَ أَنَّ هُنَاكَ حُلُولًا بَسِيطَةً. فِي الشَّهْرِ المَاضِي نَظَّمَ نَادِي الشَّبَابِ فِي حَيِّنَا رِحْلَةَ مَشْيٍ مَجَّانِيَّةً إِلَى الغَابَةِ، فَشَارَكَ فِيهَا أَكْثَرُ مِنْ خَمْسِينَ شَابًّا، وَتَعَرَّفْتُ هُنَاكَ إِلَى أَصْدِقَاءَ جُدُدٍ، وَقَرَّرْنَا أَنْ نَمْشِيَ مَعًا كُلَّ شَهْرٍ.
صَحِيحٌ أَنَّ التِّكْنُولُوجْيَا جُزْءٌ مِنْ حَيَاتِنَا، غَيْرَ أَنَّ الطَّبِيعَةَ وَالأُسْرَةَ أَهَمُّ لِصِحَّتِنَا وَسَعَادَتِنَا. وَلَوْ خَصَّصَتْ كُلُّ أُسْرَةٍ يَوْمًا وَاحِدًا فِي الشَّهْرِ لِلْخُرُوجِ مَعًا، لَتَغَيَّرَتْ عَلَاقَاتُنَا كَثِيرًا.`;

const write = {
  ...base,
  focus: 'Paper 4 practice using all of Topic A: fill in a trip sign-up form, write an email about a day out, and write an extended piece about weekends then and now.',
  lift: [
    { ar: 'خَرَجْنَا فِي السَّابِعَةِ، وَاسْتَغْرَقَتِ الرِّحْلَةُ سَاعَةً', en: 'we left at seven, and the journey took an hour' },
    { ar: 'كَانَ أَلَذَّ سَمَكٍ أَكَلْتُهُ', en: 'it was the tastiest fish I have ever eaten' },
    { ar: 'فِي الشَّهْرِ القَادِمِ سَنَزُورُ …', en: 'next month we will visit …' },
  ],
  checkTip: 'Check: past verbs with -nā (kharajnā, akalnā); kāna + adjective in the accusative (kāna l-yawmu mumtiʿan); a future with sa- in every piece.',
  FORM: {
    title: 'School trip sign-up form', ar: 'اسْتِمَارَةُ الرِّحْلَةِ المَدْرَسِيَّةِ',
    fields: [
      { core: true, ar: 'الاسْمُ وَالصَّفُّ', en: 'Name and class', model: 'عَادِلٌ حَسَنٌ، الصَّفُّ العَاشِرُ', modelEn: 'Adil Hassan, Year 10' },
      { core: true, ar: 'المَكَانُ الَّذِي تَخْتَارُهُ', en: 'The place you choose', model: 'المُتْحَفُ الوَطَنِيُّ', modelEn: 'the National Museum' },
      { core: true, ar: 'وَسِيلَةُ المُوَاصَلَاتِ المُفَضَّلَةُ', en: 'Preferred transport', model: 'الحَافِلَةُ', modelEn: 'the bus' },
      { core: true, ar: 'طَعَامٌ لَا تَأْكُلُهُ', en: 'A food you don’t eat', model: 'البَيْضُ', modelEn: 'eggs' },
      { core: true, ar: 'مُشْكِلَةٌ صِحِّيَّةٌ (إِنْ وُجِدَتْ)', en: 'Any health problem', model: 'الرَّبْوُ', modelEn: 'asthma' },
      { core: true, ar: 'رَقْمُ هَاتِفِ أَحَدِ الوَالِدَيْنِ', en: 'A parent’s phone number', model: '٠٧٧٠١٢٣٤٥٦٧', modelEn: '07701234567' },
      { ar: 'نَشَاطٌ تُرِيدُ أَنْ تُجَرِّبَهُ', en: 'An activity you want to try', model: 'رَسْمُ الخَرَائِطِ القَدِيمَةِ', modelEn: 'drawing old maps' },
      { ar: 'جُمْلَةٌ: لِمَاذَا اخْتَرْتَ هٰذَا المَكَانَ؟', en: 'ONE sentence: why you chose this place', model: 'اخْتَرْتُ المُتْحَفَ لِأَنِّي أُحِبُّ التَّارِيخَ وَأُرِيدُ أَنْ أَرَى الآثَارَ.', modelEn: 'I chose the museum because I love history and want to see the antiquities.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with li-annī.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. This form mixes the whole of Topic A: transport (L09), food (L04), health (L07).',
  },
  Q2: {
    short: 'an email about a day out', title: 'Question 2: an email about a day out', ar: 'رِسَالَةٌ عَنْ نُزْهَةٍ',
    task: 'You went on a day out last weekend. Write an email in Arabic to your friend of about 80–90 words. You must include: • where you went, when and how • what you did there • what you ate, and your opinion of the day • your next day-out plan, and an invitation to your friend.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'A time and a means of transport.', 'Past, opinion AND future.', 'About 80–90 words.'],
    phrases: [['خَرَجْنَا فِي السَّاعَةِ …', 'we left at …'], ['ذَهَبْنَا بِالسَّيَّارَةِ', 'we went by car'], ['كَانَ اليَوْمُ مُمْتِعًا، لٰكِنْ …', 'the day was fun, but …'], ['هَلْ تَأْتِي مَعَنَا؟', 'will you come with us?']],
    rubric: [
      ['task', 'ذَهَبْتَ فِي نُزْهَةٍ فِي نِهَايَةِ الأُسْبُوعِ. اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ (٨٠–٩٠ كَلِمَةً).', 'You went on a day out at the weekend: write to your friend (80–90 words).'],
      ['1', 'أَيْنَ ذَهَبْتَ؟ وَمَتَى؟ وَكَيْفَ؟', 'Where, when and how'],
      ['2', 'مَاذَا فَعَلْتَ هُنَاكَ؟', 'What you did there'],
      ['3', 'مَاذَا أَكَلْتَ؟ وَمَا رَأْيُكَ فِي اليَوْمِ؟', 'What you ate; your opinion'],
      ['4', 'مَا خُطَّتُكَ لِلنُّزْهَةِ القَادِمَةِ؟ ادْعُ صَدِيقَكَ.', 'Your next plan; invite your friend'],
    ],
    qwords: 'أَيْنَ (where) · مَتَى (when) · كَيْفَ (how) · مَاذَا (what) · مَا رَأْيُكَ (your opinion) — ادْعُ = invite (an instruction)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', 'Hello …, how are you?'],
      ['1', 'أَمْسِ ذَهَبْتُ إِلَى ______ . خَرَجْنَا فِي ______ وَذَهَبْنَا بِالـ ______ .', 'Yesterday I went to … We left at … and went by …'],
      ['2', '______ ، ثُمَّ ______ .', 'We … then we …'],
      ['3', 'أَكَلْنَا ______ . كَانَ اليَوْمُ ______ ، لٰكِنْ ______ .', 'We ate … The day was …, but …'],
      ['4', 'فِي الشَّهْرِ القَادِمِ سَنَذْهَبُ إِلَى ______ . هَلْ تَأْتِي مَعَنَا؟', 'Next month we will go to … Will you come?'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Rami, how are you? Yesterday I went to the beach with my family. We left home at eight, went by car, and the journey took an hour. We swam in the sea and played football on the sand. At noon we ate fish and salad in a small restaurant. The day was great fun, but I was tired in the evening. Next month we will go to the mountains. Will you come with us? Goodbye, Adil.”',
      find: ['خَرَجْنَا', 'بِالسَّيَّارَةِ', 'كَانَ اليَوْمُ مُمْتِعًا', 'سَنَذْهَبُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Rami, greetings. I want to tell you about our day out at the beach yesterday. We left early at seven to avoid the traffic, and the journey by car took about an hour, so we arrived before the beach filled up. We spent the morning swimming and building sandcastles with my little brother, then had grilled fish for lunch in a restaurant overlooking the sea — the tastiest fish I have ever eaten. It is true the sun was very hot, but we used sun cream and drank plenty of water, so nobody got sunstroke. Next month we will visit the mountains — how about coming with us? Best wishes, Adil.”',
      find: ['لِكَيْ نَتَجَنَّبَ', 'قَضَيْنَا الصَّبَاحَ فِي', 'أَلَذَّ سَمَكٍ أَكَلْتُهُ', 'مَا رَأْيُكَ أَنْ تَأْتِيَ'],
    },
  },
  Q3: {
    a: { title: 'يَوْمٌ لَا أَنْسَاهُ', en: 'A day I won’t forget', bullets: 'أَيْنَ ذَهَبْتَ؟ وَكَيْفَ؟ · مَاذَا فَعَلْتُمْ وَأَكَلْتُمْ؟ · مَاذَا حَدَثَ؟ · رَأْيُكَ وَخُطَطُكَ', bulletsEn: 'Where you went and how · what you did and ate · what happened · your opinion and plans' },
    b: { title: 'عُطْلَةُ نِهَايَةِ الأُسْبُوعِ: بَيْنَ الأَمْسِ وَاليَوْمِ', en: 'Weekends: then and now', bullets: 'كَيْفَ تَغَيَّرَتْ؟ · لِمَاذَا؟ · تَجْرِبَةٌ أَوْ مُبَادَرَةٌ · رَأْيُكَ وَاقْتِرَاحُكَ', bulletsEn: 'How they have changed · why · an experience or initiative · your opinion and suggestion' },
    plan: [
      'Set the scene — when, where, who with, how (bi-), how long (istaghraqat …).',
      'Activities + food — we-forms in the past (mashaynā, akalnā); a superlative.',
      'Something happened — fajʾatan … fa- …; feelings (kunnā mutʿabīn …).',
      'Opinion + future — fī raʾyī …, sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'ذَهَبْنَا إِلَى الجَبَلِ بِالسَّيَّارَةِ.', en: 'past: we went to the mountains by car.' },
      { ar: 'النُّزُهَاتُ مُفِيدَةٌ لِلصِّحَّةِ.', en: 'present: days out are good for your health.' },
      { ar: 'سَنُكَرِّرُ التَّجْرِبَةَ كُلَّ شَهْرٍ.', en: 'future: we will repeat it every month.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Last weekend a class trip to the zoo: left school at nine by bus; a long trip but we sang and laughed; arrived at 10:30 → lions, elephants and funny monkeys; lunch under the trees with sandwiches, fruit and water because it was hot → lots of walking, tired; back at four, I slept on the bus; told Mum everything and showed her my photos → trips are useful (new things, fresh air, time with friends); next summer I’ll go again with my family because my little brother loves animals.', find: ['ذَهَبْنَا بِالحَافِلَةِ', 'لِأَنَّ الجَوَّ كَانَ حَارًّا', 'فَتَعِبْنَا', 'سَأَزُورُ'], notes: 'Core model: a clear past story with times and transport, food, feelings, an opinion and a future plan.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Last Friday my family spent a whole screen-free day in the mountains: left before sunrise, two hours by car, breakfast on a rock above the valley: warm bread, olives, cheese and mint tea → a three-hour walk; Dad named the plants; as for my little sister, she collected flowers and asked about everything until she was tired and Dad carried her → suddenly the weather changed; heavy rain; we sheltered under a tree drinking hot tea from the flask, laughing; home wet and tired but very happy → it is true it was tiring, but better than any day on my phone; we’ll repeat it monthly; “if it were up to me, I would make Friday a screen-free day for every family”.', find: ['عِنْدَمَا قَرَّرَتْ … أَنْ تَقْضِيَ', 'أَمَّا أُخْتِي … فَكَانَتْ', 'فَجْأَةً … فَاخْتَبَأْنَا', 'لَوْ كَانَ … لَجَعَلْتُ'], notes: 'Full-mark model: ʿindamā, a relative clause, kāna + present, ammā … fa-, fajʾatan … fa-, a ḥāl (wa-naḥnu naḍḥaku), a concession and a conditional.' },
      { which: 'ب', level: 'Full', subtitle: 'weekends then and now', text: Q3B_FULL, en: 'Weekends have changed: children used to play in the neighbourhood until sunset and families went out together; as for today, many young people spend hours on video games or in malls → reasons: extra lessons, more crowded cities, days out are dearer, and many parents work even at weekends → but there are simple solutions: last month our youth club ran a free forest walk; over fifty young people joined and I made new friends; we decided to walk together every month → it is true technology is part of life, but nature and family matter more for our health and happiness; “if every family set aside one day a month to go out together, our relationships would change a lot”.', find: ['كَانَ الأَطْفَالُ يَلْعَبُونَ', 'أَمَّا اليَوْمَ فَيَقْضِي', 'أَكْثَرُ ازْدِحَامًا', 'لَوْ خَصَّصَتْ … لَتَغَيَّرَتْ'], notes: 'Full-mark model for the Stretch title: kāna + present, ammā … fa-, three reasons, a past initiative, a concession, comparatives and a conditional.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic, using words from all of Topic A.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: a time, a means of transport and an opinion with a reason.' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: a superlative, a concession or a conditional.' },
  ],
};
write.Q2.frames[1] = ['1', 'أَمْسِ ذَهَبْتُ إِلَى ______ . خَرَجْنَا فِي ______ وَذَهَبْنَا ______ .', 'Yesterday I went to … We left at … and went by …'];

module.exports = { speak, write };
