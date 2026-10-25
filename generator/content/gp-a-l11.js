'use strict';
/* Guided Practice Rooms · AT-A-L11 · Travel and Tourism. New tasks. Teacher-made. */
const XP = require('./xp-a-l11');

const base = { topic: 'A', n: 11, short: 'Travel and Tourism', arShort: 'السَّفَرُ وَالسِّيَاحَةُ', fileTitle: 'Reading_Travel_and_Tourism_Texts', title: 'Travel and Tourism', icon: 'FaPlaneDeparture', grammar: 'holidays in the past tense (sāfartu, zurtu, nazaltu fī); hotels and sights; idhā (real) and law … la- (unreal) conditionals' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up, the answer ladder, two new role plays (checking in at a hotel, a problem with a hotel room), a topic conversation with A-R-E-T, and a one-minute talk about a holiday.',
  words: XP.speak.words,
  words1: { title: 'Holidays in the past', ar: 'العُطْلَاتُ فِي المَاضِي' },
  words2: { title: 'Hotels, sights and conditions', ar: 'الفَنَادِقُ وَالمَعَالِمُ' },
  ladder: {
    q: 'أَيْنَ قَضَيْتَ عُطْلَتَكَ الأَخِيرَةَ؟', qEn: 'Where did you spend your last holiday?',
    rungs: [
      { ar: 'قَضَيْتُ عُطْلَتِي فِي تُرْكِيَا.', en: 'I spent my holiday in Turkey.' },
      { ar: 'قَضَيْتُ عُطْلَتِي فِي تُرْكِيَا، لِأَنَّ خَالِي يَعِيشُ هُنَاكَ.', en: '… because my uncle lives there.' },
      { ar: '… وَنَزَلْنَا فِي فُنْدُقٍ قُرْبَ البَحْرِ، وَزُرْنَا مَسَاجِدَ تَارِيخِيَّةً كَثِيرَةً.', en: '… we stayed in a hotel near the sea and visited many historic mosques.' },
      { ar: '… وَإِذَا نَجَحْتُ فِي الامْتِحَانَاتِ، سَنُسَافِرُ إِلَى المَغْرِبِ؛ فَالسَّفَرُ فِي رَأْيِي أَفْضَلُ مُعَلِّمٍ.', en: '… if I pass my exams, we will travel to Morocco — in my opinion travel is the best teacher.' },
    ],
  },
  ladderQs: [
    { q: 'هَلْ تُفَضِّلُ الفُنْدُقَ أَمِ الخَيْمَةَ؟', l1: 'أُفَضِّلُ …', l2: '… لِأَنَّ …', l3: '… مَثَلًا فِي الصَّيْفِ المَاضِي …' },
    { q: 'مَا البَلَدُ الَّذِي تُرِيدُ أَنْ تَزُورَهُ؟', l1: 'أُرِيدُ أَنْ أَزُورَ …', l2: '… لِأَنَّ …', l3: '… وَسَأَزُورُ … هُنَاكَ' },
    { q: 'مَاذَا تَأْخُذُ مَعَكَ عِنْدَمَا تُسَافِرُ؟', l1: 'آخُذُ …', l2: '… لِأَنَّ …', l3: '… وَمَرَّةً نَسِيتُ …' },
    { q: 'مَا أَجْمَلُ مَكَانٍ زُرْتَهُ؟', l1: 'أَجْمَلُ مَكَانٍ زُرْتُهُ …', l2: '… لِأَنَّهُ …', l3: '… وَلَوْ … لَسَافَرْتُ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a hotel reception in Marrakech', title: 'Role play 1 — Checking in at the hotel', ar: 'فِي اسْتِقْبَالِ الفُنْدُقِ', you: 'a guest', them: 'the receptionist',
      tasks: [
        { ex: 'أَهْلًا وَسَهْلًا! هَلْ عِنْدَكَ حَجْزٌ؟', task: 'Say you have a booking and give your name.', plan: 'هَلْ ← نَعَمْ، عِنْدِي حَجْزٌ بِاسْمِ …', model: 'نَعَمْ، عِنْدِي حَجْزٌ بِاسْمِ يُوسُفَ أَحْمَدَ.', modelEn: 'Yes, I have a booking in the name of Yusuf Ahmad.' },
        { ex: 'كَمْ لَيْلَةً سَتَبْقَى؟', task: 'Say how many nights.', plan: 'كَمْ ← سَأَبْقَى … لَيَالٍ', model: 'سَأَبْقَى ثَلَاثَ لَيَالٍ.', modelEn: 'I will stay three nights.' },
        { ex: 'أَيَّ نَوْعٍ مِنَ الغُرَفِ تُرِيدُ؟', task: 'Say the type of room.', plan: 'أَيَّ ← أُرِيدُ غُرْفَةً …', model: 'أُرِيدُ غُرْفَةً مُزْدَوِجَةً مَعَ حَمَّامٍ.', modelEn: 'I would like a double room with a bathroom.' },
        { ex: 'تَفَضَّلْ، هٰذَا المِفْتَاحُ.', task: 'Ask when breakfast is.', plan: 'مَتَى ← مَتَى الفُطُورُ؟', model: 'شُكْرًا، مَتَى الفُطُورُ، مِنْ فَضْلِكِ؟', modelEn: 'Thank you — when is breakfast, please?' },
        { unexpected: true, ex: 'مِنَ السَّابِعَةِ إِلَى العَاشِرَةِ. لِمَاذَا جِئْتَ إِلَى مَرَّاكُشَ؟', task: 'Answer the unexpected question.', plan: 'لِمَاذَا ← جِئْتُ لِأَنَّ …', model: 'جِئْتُ لِأَنِّي أُرِيدُ أَنْ أَزُورَ الأَسْوَاقَ القَدِيمَةَ.', modelEn: 'I came because I want to visit the old markets.' },
      ],
      girl: 'عِنْدَكِ · سَتَبْقَيْنَ · تُرِيدِينَ · تَفَضَّلِي · جِئْتِ',
      notes: 'Language: ʿindī ḥajzun bi-smi … · thalātha layālin (feminine noun → thalātha without tā’; layāl = plural) · ghurfa muzdawija · matā …? · li-annī urīdu an azūra.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a hotel manager’s office', title: 'Role play 2 — A problem with your hotel room', ar: 'مُشْكِلَةٌ فِي غُرْفَةِ الفُنْدُقِ', you: 'an unhappy guest', them: 'the hotel manager',
      tasks: [
        { ex: 'مَسَاءَ الخَيْرِ، مَا المُشْكِلَةُ؟', task: 'Explain two problems with the room.', model: 'المُكَيِّفُ لَا يَعْمَلُ، وَالغُرْفَةُ تُطِلُّ عَلَى الشَّارِعِ المُزْدَحِمِ، فَلَا أَسْتَطِيعُ أَنْ أَنَامَ.', modelEn: 'The air-conditioning doesn’t work, and the room faces the busy street, so I can’t sleep.' },
        { ex: 'مُنْذُ مَتَى؟', task: 'Say since when, and what you did (past).', model: 'مُنْذُ أَمْسِ؛ اتَّصَلْتُ بِالاسْتِقْبَالِ مَرَّتَيْنِ، لٰكِنْ لَمْ يَأْتِ أَحَدٌ.', modelEn: 'Since yesterday; I called reception twice, but nobody came.' },
        { ex: 'آسِفٌ جِدًّا. مَاذَا تُرِيدُ أَنْ نَفْعَلَ؟', task: 'Make a polite request.', model: 'هَلْ يُمْكِنُ أَنْ تُعْطِيَنِي غُرْفَةً أَهْدَأَ فِي طَابِقٍ أَعْلَى؟', modelEn: 'Could you give me a quieter room on a higher floor?' },
        { ex: 'عِنْدَنَا غُرْفَةٌ تُطِلُّ عَلَى الحَدِيقَةِ.', task: 'ASK about the price or another detail.', model: 'مُمْتَازٌ! وَهَلْ سِعْرُهَا مِثْلُ سِعْرِ غُرْفَتِي؟', modelEn: 'Excellent! And is it the same price as my room?' },
        { unexpected: true, ex: 'هَلْ سَتَرْجِعُ إِلَى فُنْدُقِنَا مَرَّةً أُخْرَى؟', task: 'Answer the unexpected question (idhā + future).', model: 'إِذَا كَانَتِ الغُرْفَةُ الجَدِيدَةُ مُرِيحَةً، فَسَأَرْجِعُ بِالتَّأْكِيدِ، لِأَنَّ المَوْقِعَ رَائِعٌ.', modelEn: 'If the new room is comfortable, I will definitely come back — the location is wonderful.' },
      ],
      girl: 'تُرِيدِينَ · سَتَرْجِعِينَ',
      notes: 'Language: describing a problem (lā yaʿmalu, tuṭillu ʿalā) · mundhu · lam yaʾti aḥadun · comparatives ahdaʾ / aʿlā · hal yumkinu an tuʿṭiyanī · idhā … fa-sa-.',
    },
  ],
  convAr: 'السَّفَرُ وَالعُطْلَاتُ',
  conv: [
    { route: 'Core', q: 'هَلْ تُحِبُّ السَّفَرَ؟', en: 'Do you like travelling?', push: 'لِمَاذَا؟' },
    { route: 'Core', q: 'مَعَ مَنْ تُسَافِرُ عَادَةً؟', en: 'Who do you usually travel with?', push: 'وَإِلَى أَيْنَ؟' },
    { route: 'Develop', q: 'صِفْ فُنْدُقًا نَزَلْتَ فِيهِ.', en: 'Describe a hotel you stayed in.', push: 'هَلْ أَعْجَبَكَ؟' },
    { route: 'Develop', q: 'مَا المَعْلَمُ السِّيَاحِيُّ الَّذِي تُرِيدُ أَنْ تَرَاهُ؟', en: 'Which tourist sight do you want to see?', push: 'لِمَاذَا؟' },
    { route: 'Stretch', q: 'هَلِ السِّيَاحَةُ مُفِيدَةٌ لِلْبُلْدَانِ دَائِمًا؟', en: 'Is tourism always good for countries?', push: 'وَلٰكِنْ …؟' },
    { route: 'Stretch', q: 'لَوْ كَانَ عِنْدَكَ مَالٌ كَثِيرٌ، أَيْنَ تُسَافِرُ؟', en: 'If you had lots of money, where would you travel?', push: 'وَمَعَ مَنْ؟' },
  ],
  convModels: [
    { q: 'مَعَ مَنْ تُسَافِرُ عَادَةً؟', model: 'أُسَافِرُ عَادَةً مَعَ عَائِلَتِي، لِأَنَّ أَبِي يُحِبُّ أَنْ نَكُونَ مَعًا فِي العُطْلَةِ؛ فِي الصَّيْفِ المَاضِي سَافَرْنَا إِلَى إِسْبَانْيَا، وَفِي المُسْتَقْبَلِ سَأُسَافِرُ مَعَ أَصْدِقَائِي.', modelEn: 'A: with my family · R: dad likes us to be together on holiday · E: Spain last summer · T: in the future I’ll travel with friends.' },
    { q: 'صِفْ فُنْدُقًا نَزَلْتَ فِيهِ.', model: 'نَزَلْنَا فِي فُنْدُقٍ صَغِيرٍ فِي إِسْطَنْبُولَ، وَكَانَتْ غُرْفَتُنَا تُطِلُّ عَلَى البَحْرِ؛ أَعْجَبَنِي الفُطُورُ لِأَنَّهُ كَانَ غَنِيًّا جِدًّا، لٰكِنَّ المِصْعَدَ كَانَ مُعَطَّلًا.', modelEn: 'A: a small hotel in Istanbul with a sea view · R: I liked the rich breakfast · contrast: but the lift was broken.' },
    { q: 'هَلِ السِّيَاحَةُ مُفِيدَةٌ لِلْبُلْدَانِ دَائِمًا؟', model: 'صَحِيحٌ أَنَّ السِّيَاحَةَ تُوَفِّرُ وَظَائِفَ كَثِيرَةً، غَيْرَ أَنَّهَا قَدْ تُلَوِّثُ الشَّوَاطِئَ؛ لِذٰلِكَ أَرَى أَنَّهُ يَجِبُ عَلَى السُّيَّاحِ أَنْ يَحْتَرِمُوا البِيئَةَ وَالعَادَاتِ.', modelEn: 'Concession: tourism creates many jobs, but may pollute beaches · opinion: tourists must respect the environment and customs.' },
  ],
  talk: {
    title: 'One minute: a holiday I remember', ar: 'عُطْلَةٌ أَتَذَكَّرُهَا',
    text: 'Talk for one minute about a holiday: where you went, how you travelled, where you stayed, what you visited and ate — and where you will go next.',
    routes: {
      core: '30 seconds: four past sentences (سَافَرْتُ · نَزَلْتُ · زُرْتُ · أَكَلْتُ).',
      develop: '60 seconds: add reasons, one problem, and a future plan with إِذَا.',
      stretch: '90 seconds: all three time frames, an opinion about tourism and law … la-.',
    },
    phrases: [['فِي الصَّيْفِ المَاضِي سَافَرْتُ إِلَى …', 'last summer I travelled to …'], ['نَزَلْنَا فِي …', 'we stayed in …'], ['أَجْمَلُ شَيْءٍ كَانَ …', 'the best thing was …'], ['إِذَا … سَأُسَافِرُ إِلَى …', 'if … I will travel to …']],
  },
  checkCore: 'used past holiday verbs (سَافَرْتُ · نَزَلْتُ · زُرْتُ)',
  checkDevelop: 'used إِذَا + future, or law … la-',
};

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up, decoding a new Q2 task (a postcard-style email from a holiday), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Hotel booking form', ar: 'اسْتِمَارَةُ حَجْزِ فُنْدُقٍ',
    fields: [
      { core: true, ar: 'الاسْمُ الكَامِلُ', en: 'Full name', tip: 'First name + family name.' },
      { core: true, ar: 'تَارِيخُ الوُصُولِ', en: 'Arrival date', tip: 'الخَامِسُ مِنْ أَغُسْطُسَ' },
      { core: true, ar: 'عَدَدُ اللَّيَالِي', en: 'Number of nights', tip: 'أَرْبَعُ لَيَالٍ' },
      { core: true, ar: 'نَوْعُ الغُرْفَةِ', en: 'Room type', tip: 'غُرْفَةٌ مُزْدَوِجَةٌ' },
      { core: true, ar: 'عَدَدُ الأَشْخَاصِ', en: 'Number of people', tip: 'شَخْصَانِ' },
      { ar: 'جُمْلَةٌ: طَلَبٌ خَاصٌّ', en: 'ONE sentence: a special request', tip: 'أُرِيدُ غُرْفَةً تُطِلُّ عَلَى …' },
    ],
  },
  Q2: {
    title: 'Question 2: an email from my holiday', ar: 'رِسَالَةٌ مِنْ عُطْلَتِي',
    task: 'You are on holiday. Write an email in Arabic to your friend of about 80–90 words. You must include: • where you are, who with, and how you travelled • the hotel and the weather • what you visited and ate yesterday • where you would go next time, and why.',
    phrases: [['أَنَا الآنَ فِي … مَعَ …', 'I am now in … with …'], ['نَزَلْنَا فِي فُنْدُقٍ …', 'we are staying in a … hotel'], ['أَمْسِ زُرْنَا …', 'yesterday we visited …'], ['فِي المَرَّةِ القَادِمَةِ سَأَزُورُ …', 'next time I will visit …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ مِنْ عُطْلَتِكَ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend from your holiday (80–90 words).'],
      ['1', 'أَيْنَ أَنْتَ؟ وَمَعَ مَنْ؟ وَكَيْفَ سَافَرْتَ؟', 'Where you are, who with, how you travelled'],
      ['2', 'صِفِ الفُنْدُقَ وَالطَّقْسَ.', 'The hotel and the weather'],
      ['3', 'مَاذَا زُرْتَ وَأَكَلْتَ أَمْسِ؟', 'What you visited and ate yesterday'],
      ['4', 'أَيْنَ سَتَذْهَبُ فِي المَرَّةِ القَادِمَةِ؟ وَلِمَاذَا؟', 'Where you will go next time, and why'],
    ],
    decode: ['an email to a FRIEND → informal greeting and closing', 'أَيْنَ أَنْتَ · كَيْفَ سَافَرْتَ → PRESENT place + PAST journey', 'صِفْ → PRESENT description (adjectives agree)', 'مَاذَا زُرْتَ وَأَكَلْتَ أَمْسِ → PAST', 'سَتَذْهَبُ … وَلِمَاذَا → FUTURE + a reason'],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', en: 'Hello …, how are you?' },
      { ar: 'أَنَا الآنَ فِي ______ مَعَ ______ . سَافَرْنَا بِالطَّائِرَةِ.', en: '1 · I am now in … with … We flew.' },
      { ar: 'الفُنْدُقُ ______ ، وَالجَوُّ ______ .', en: '2 · The hotel is …, and the weather is …' },
      { ar: 'أَمْسِ زُرْنَا ______ ، وَأَكَلْنَا ______ .', en: '3 · Yesterday we visited …, and ate …' },
      { ar: 'فِي المَرَّةِ القَادِمَةِ سَأَزُورُ ______ ، لِأَنَّ ______ .', en: '4 · Next time I will visit …, because …' },
    ],
    developFrames: [
      { ar: 'وَصَلْنَا بَعْدَ رِحْلَةٍ ______ ، وَكَانَتْ ______ .', en: '1 · We arrived after a … journey, which was …' },
      { ar: 'نَزَلْنَا فِي فُنْدُقٍ ______ ، وَغُرْفَتِي تُطِلُّ عَلَى ______ .', en: '2 · We are in a … hotel; my room looks out on …' },
      { ar: 'أَمْسِ تَجَوَّلْنَا فِي ______ ، ثُمَّ ______ .', en: '3 · Yesterday we wandered around …, then …' },
      { ar: 'لَوْ كَانَ عِنْدِي وَقْتٌ، لَزُرْتُ ______ .', en: '4 · If I had time, I would visit …' },
    ],
    bank: ['سَافَرْنَا', 'نَزَلْنَا فِي', 'فُنْدُقٌ مُرِيحٌ', 'غُرْفَةٌ مُزْدَوِجَةٌ', 'مَعْلَمٌ تَارِيخِيٌّ', 'مُشْمِسٌ · حَارٌّ', 'تُطِلُّ عَلَى', 'سُوقٌ قَدِيمٌ'],
    model: {
      text: `مَرْحَبًا يَا جَمِيلَةُ،
أَنَا الآنَ فِي القَاهِرَةِ مَعَ أُمِّي وَأَخِي! سَافَرْنَا بِالطَّائِرَةِ مِنْ لَنْدَنَ، وَاسْتَغْرَقَتِ الرِّحْلَةُ خَمْسَ سَاعَاتٍ. نَزَلْنَا فِي فُنْدُقٍ مُرِيحٍ بِجَانِبِ النِّيلِ، وَغُرْفَتِي تُطِلُّ عَلَى النَّهْرِ، أَمَّا الجَوُّ فَحَارٌّ وَمُشْمِسٌ جِدًّا. أَمْسِ زُرْنَا الأَهْرَامَاتِ فِي الصَّبَاحِ البَاكِرِ، لِأَنَّ الشَّمْسَ تَكُونُ أَقْوَى بَعْدَ الظُّهْرِ، ثُمَّ أَكَلْنَا الكُشَرِيَّ فِي مَطْعَمٍ شَعْبِيٍّ، وَكَانَ لَذِيذًا وَرَخِيصًا. فِي المَرَّةِ القَادِمَةِ سَأَزُورُ الأُقْصُرَ، لِأَنَّ فِيهَا مَعَابِدَ قَدِيمَةً كَثِيرَةً، وَلَوْ كَانَ عِنْدِي وَقْتٌ، لَسَافَرْتُ إِلَى هُنَاكَ بِالقِطَارِ.
إِلَى اللِّقَاءِ،
أَمِينَةُ`,
      en: '“Hi Jamila, I am in Cairo now with my mum and brother! We flew from London, and the journey took five hours. We are staying in a comfortable hotel by the Nile; my room looks out on the river, and the weather is very hot and sunny. Yesterday we visited the pyramids early in the morning, because the sun is stronger in the afternoon, then we ate koshari in a local restaurant — tasty and cheap. Next time I will visit Luxor, because it has many ancient temples, and if I had time I would travel there by train. See you, Amina.”',
      find: ['نَزَلْنَا فِي فُنْدُقٍ', 'أَمَّا الجَوُّ فَحَارٌّ', 'أَمْسِ زُرْنَا', 'لَوْ كَانَ عِنْدِي وَقْتٌ، لَسَافَرْتُ'],
    },
  },
  upgrade: [
    { ar: 'زُرْتُ المُتْحَفَ.', en: 'I visited the museum.' },
    { ar: 'زُرْتُ المُتْحَفَ الوَطَنِيَّ فِي العَاصِمَةِ يَوْمَ الثُّلَاثَاءِ مَعَ خَالِي.', en: '… the national museum in the capital on Tuesday with my uncle.' },
    { ar: 'زُرْتُ المُتْحَفَ الوَطَنِيَّ مَعَ خَالِي، لِأَنَّهُ يُحِبُّ التَّارِيخَ كَثِيرًا.', en: '… because he loves history.' },
    { ar: '… وَفِي رَأْيِي كَانَ مُمْتِعًا، لٰكِنْ لَوْ كَانَ عِنْدِي وَقْتٌ أَطْوَلُ، لَرَأَيْتُ كُلَّ شَيْءٍ!', en: '… in my opinion it was fun — but if I had had more time, I would have seen everything!' },
  ],
  builder: [
    { en: 'We stayed in a comfortable hotel.', cols: [['نَزَلْنَا', 'نَنْزِلُ'], ['فِي فُنْدُقٍ', 'إِلَى فُنْدُقٍ'], ['مُرِيحٍ', 'مُرِيحٌ']], key: [0, 0, 0], why: 'Past: نَزَلْنَا فِي; the adjective follows the noun’s case: فُنْدُقٍ مُرِيحٍ.' },
    { en: 'If I pass, I will travel to Oman.', cols: [['إِذَا نَجَحْتُ', 'لَوْ نَجَحْتُ'], ['سَأُسَافِرُ', 'سَافَرْتُ'], ['إِلَى عُمَانَ', 'مِنْ عُمَانَ']], key: [0, 0, 0], why: 'A real possibility → إِذَا + past, then a future verb.' },
    { en: 'If I were rich, I would visit Japan.', cols: [['لَوْ كُنْتُ غَنِيًّا', 'إِذَا كُنْتُ غَنِيًّا'], ['لَزُرْتُ', 'سَأَزُورُ'], ['اليَابَانَ', 'اليَابَانُ']], key: [0, 0, 0], why: 'An unreal wish → لَوْ … then la- + past: لَزُرْتُ.' },
  ],
  errors: [
    { wrong: 'لَوْ كَانَ عِنْدِي مَالٌ، سَأُسَافِرُ.', hint: 'لَوْ needs a special answer.', right: 'لَوْ كَانَ عِنْدِي مَالٌ، لَسَافَرْتُ.', why: 'لَوْ (unreal) → la- + past: لَسَافَرْتُ.' },
    { wrong: 'نَزَلْنَا فِي فُنْدُقٌ كَبِيرٌ.', hint: 'Look at the noun after فِي.', right: 'نَزَلْنَا فِي فُنْدُقٍ كَبِيرٍ.', why: 'After فِي the noun and its adjective take -in: فُنْدُقٍ كَبِيرٍ.' },
    { wrong: 'بَقِيتُ فِي الفُنْدُقِ ثَلَاثَةَ لَيَالٍ.', hint: 'Is لَيْلَة masculine or feminine?', right: 'بَقِيتُ فِي الفُنْدُقِ ثَلَاثَ لَيَالٍ.', why: 'لَيْلَة is feminine → ثَلَاثَ لَيَالٍ.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: my most memorable holiday', ar: 'أَجْمَلُ عُطْلَةٍ فِي حَيَاتِي',
    task: 'Full Q3 title: “Travel and holidays”. Today write ONLY the past paragraph: your most memorable holiday — where, who with, where you stayed, one thing that happened, and how you felt.',
    formula: [
      { ar: 'أَجْمَلُ عُطْلَةٍ كَانَتْ فِي الأُرْدُنِّ قَبْلَ سَنَتَيْنِ.', en: 'T · My best holiday was in Jordan two years ago.' },
      { ar: 'نَزَلْنَا فِي مُخَيَّمٍ فِي الصَّحْرَاءِ، وَرَكِبْنَا الجِمَالَ.', en: 'D · We stayed in a desert camp and rode camels.' },
      { ar: 'كَانَتْ مُمَيَّزَةً لِأَنَّنَا نِمْنَا تَحْتَ النُّجُومِ.', en: 'R · Special because we slept under the stars.' },
      { ar: 'شَعَرْتُ بِالسَّلَامِ، وَأَتَمَنَّى أَنْ أَرْجِعَ.', en: 'F · I felt peaceful, and I hope to go back.' },
    ],
    phrases: [['قَبْلَ سَنَتَيْنِ سَافَرْنَا إِلَى …', 'two years ago we travelled to …'], ['نَزَلْنَا فِي …', 'we stayed in …'], ['فِي يَوْمٍ مِنَ الأَيَّامِ …', 'one day …'], ['كَانَتْ مُمَيَّزَةً لِأَنَّ …', 'it was special because …'], ['لَوْ رَجَعْتُ، لَـ …', 'if I went back, I would …']],
    model: {
      text: 'أَجْمَلُ عُطْلَةٍ فِي حَيَاتِي كَانَتْ فِي الأُرْدُنِّ قَبْلَ سَنَتَيْنِ. سَافَرْتُ مَعَ عَائِلَتِي بِالطَّائِرَةِ إِلَى عَمَّانَ، ثُمَّ ذَهَبْنَا بِالسَّيَّارَةِ إِلَى وَادِي رَمٍّ فِي الجَنُوبِ. نَزَلْنَا فِي مُخَيَّمٍ صَغِيرٍ فِي الصَّحْرَاءِ، وَرَكِبْنَا الجِمَالَ عِنْدَ غُرُوبِ الشَّمْسِ. فِي اللَّيْلِ أَكَلْنَا الزَّرْبَ، وَهُوَ لَحْمٌ يُطْبَخُ تَحْتَ الرَّمْلِ، ثُمَّ نِمْنَا خَارِجَ الخَيْمَةِ تَحْتَ النُّجُومِ. كَانَتْ مُمَيَّزَةً لِأَنِّي لَمْ أَرَ سَمَاءً جَمِيلَةً مِثْلَهَا مِنْ قَبْلُ. لَوْ رَجَعْتُ إِلَى هُنَاكَ، لَبَقِيتُ أُسْبُوعًا كَامِلًا.',
      en: 'T: my best holiday was in Jordan two years ago · D: we flew to Amman, then drove to Wadi Rum in the south; we stayed in a small desert camp and rode camels at sunset; at night we ate zarb — meat cooked under the sand — and slept outside under the stars · R: special because I had never seen such a beautiful sky · if I went back, I would stay a whole week.',
      find: ['أَجْمَلُ عُطْلَةٍ فِي حَيَاتِي', 'نَزَلْنَا فِي مُخَيَّمٍ', 'كَانَتْ مُمَيَّزَةً لِأَنِّي', 'لَوْ رَجَعْتُ … لَبَقِيتُ'],
    },
  },
};
write.Q3.phrases[4] = ['لَوْ رَجَعْتُ، لَبَقِيتُ …', 'if I went back, I would stay …'];

module.exports = { speak, write };
