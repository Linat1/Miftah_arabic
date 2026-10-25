'use strict';
/* Guided Practice Rooms · TC-L04 · Environmental problems and causes. New tasks. Teacher-made. */
const XP = require('./xp-c-l04');

const base = { topic: 'C', n: 4, short: 'Environmental Problems and Causes', arShort: 'مَشَاكِلُ البِيئَةِ وَأَسْبَابُهَا', fileTitle: 'Environmental_Problems_Causes', title: 'Environmental problems and causes', icon: 'FaIndustry', grammar: 'cause and effect (bi-sababi + genitive · li-anna · yuʾaddī ilā · mimmā yusabbibu); the passive (tuqṭaʿu · yulawwathu · turmā); verbal nouns (qaṭʿ, talawwuth); opinions with fī raʾyī' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up on environmental problems, the answer ladder, two new role plays (reporting rubbish to the council, a TV interview about a polluted river), a topic conversation with A-R-E-T, and a one-minute talk about the biggest problem in their area.',
  words: XP.speak.words,
  words1: { title: 'Environmental problems', ar: 'مَشَاكِلُ البِيئَةِ' },
  words2: { title: 'Causes and effects', ar: 'الأَسْبَابُ وَالنَّتَائِجُ' },
  ladder: {
    q: 'مَا أَكْبَرُ مُشْكِلَةٍ بِيئِيَّةٍ فِي مَدِينَتِكَ؟', qEn: 'What is the biggest environmental problem in your city?',
    rungs: [
      { ar: 'أَكْبَرُ مُشْكِلَةٍ هِيَ تَلَوُّثُ الهَوَاءِ.', en: 'The biggest problem is air pollution.' },
      { ar: 'أَكْبَرُ مُشْكِلَةٍ هِيَ تَلَوُّثُ الهَوَاءِ بِسَبَبِ زَحْمَةِ المُرُورِ.', en: '… because of traffic congestion.' },
      { ar: '… فَدُخَانُ السَّيَّارَاتِ يُلَوِّثُ الهَوَاءَ، مِمَّا يُسَبِّبُ أَمْرَاضًا مِثْلَ الرَّبْوِ.', en: '… car fumes pollute the air, which causes illnesses like asthma.' },
      { ar: '… أَخِي الصَّغِيرُ مُصَابٌ بِالرَّبْوِ، لِذٰلِكَ أَرَى أَنَّ هٰذِهِ المُشْكِلَةَ خَطِيرَةٌ جِدًّا.', en: '… my little brother has asthma, so I think this problem is very serious.' },
    ],
  },
  ladderQs: [
    { q: 'لِمَاذَا الهَوَاءُ مُلَوَّثٌ فِي المُدُنِ الكَبِيرَةِ؟', l1: 'بِسَبَبِ …', l2: '… مِمَّا يُسَبِّبُ …', l3: '… مَثَلًا فِي لَنْدَنَ …' },
    { q: 'مَاذَا يَحْدُثُ عِنْدَمَا تُقْطَعُ الغَابَاتُ؟', l1: 'تَفْقِدُ الحَيَوَانَاتُ …', l2: '… وَيُؤَدِّي ذٰلِكَ إِلَى …', l3: '… وَفِي رَأْيِي …' },
    { q: 'هَلْ تُوجَدُ نُفَايَاتٌ فِي شَوَارِعِ حَيِّكَ؟', l1: 'نَعَمْ / لَا، …', l2: '… لِأَنَّ النَّاسَ …', l3: '… وَأَمْسِ رَأَيْتُ …' },
    { q: 'مَا رَأْيُكَ فِي البْلَاسْتِيكِ؟', l1: 'فِي رَأْيِي البْلَاسْتِيكُ …', l2: '… لِأَنَّهُ …', l3: '… وَلَوْ … لَكَانَ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a phone call to the local council', title: 'Role play 1 — Reporting a rubbish problem', ar: 'الاتِّصَالُ بِالبَلَدِيَّةِ', you: 'a resident', them: 'the council officer',
      tasks: [
        { ex: 'البَلَدِيَّةُ، تَفَضَّلْ. مَا المُشْكِلَةُ؟', task: 'Describe the problem.', plan: 'المُشْكِلَةُ ← تُوجَدُ نُفَايَاتٌ كَثِيرَةٌ فِي …', model: 'تُوجَدُ نُفَايَاتٌ كَثِيرَةٌ فِي الحَدِيقَةِ العَامَّةِ.', modelEn: 'There is a lot of rubbish in the public park.' },
        { ex: 'أَيْنَ تَقَعُ الحَدِيقَةُ؟', task: 'Give the location.', plan: 'أَيْنَ ← تَقَعُ فِي شَارِعِ … بِجَانِبِ …', model: 'تَقَعُ فِي شَارِعِ المَحَطَّةِ، بِجَانِبِ المَدْرَسَةِ.', modelEn: 'It is on Station Road, next to the school.' },
        { ex: 'مُنْذُ مَتَى؟', task: 'Say how long.', plan: 'مُنْذُ مَتَى ← مُنْذُ … أَسَابِيعَ', model: 'مُنْذُ ثَلَاثَةِ أَسَابِيعَ.', modelEn: 'For three weeks.' },
        { ex: 'هَلْ هُنَاكَ مُشْكِلَةٌ أُخْرَى؟', task: 'Give a result of the problem.', plan: 'أُخْرَى ← بِسَبَبِ النُّفَايَاتِ …', model: 'نَعَمْ، بِسَبَبِ النُّفَايَاتِ، تَأْتِي الفِئْرَانُ إِلَى البُيُوتِ.', modelEn: 'Yes, because of the rubbish, rats come to the houses.' },
        { unexpected: true, ex: 'مَنِ المَسْؤُولُ فِي رَأْيِكَ؟', task: 'Answer the unexpected question.', plan: 'مَنْ ← فِي رَأْيِي … لِأَنَّ …', model: 'فِي رَأْيِي النَّاسُ مَسْؤُولُونَ، لِأَنَّهُمْ يَرْمُونَ النُّفَايَاتِ عَلَى الأَرْضِ.', modelEn: 'In my opinion people are responsible, because they throw rubbish on the ground.' },
      ],
      girl: 'تَفَضَّلِي · رَأْيِكِ',
      notes: 'Language: tūjadu nufāyātun · taqaʿu fī … bi-jānibi · mundhu + genitive · bi-sababi + genitive · masʾūlūna (human plural).',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a local TV news report', title: 'Role play 2 — Interview about a polluted river', ar: 'مُقَابَلَةٌ عَنْ نَهْرٍ مُلَوَّثٍ', you: 'a young local campaigner', them: 'a TV reporter',
      tasks: [
        { ex: 'مَاذَا حَدَثَ لِلنَّهْرِ؟', task: 'Explain what happened (past + passive).', model: 'فِي الشَّهْرِ المَاضِي، رُمِيَتْ مَوَادُّ كِيمْيَائِيَّةٌ مِنْ مَصْنَعٍ قَرِيبٍ فِي النَّهْرِ، فَمَاتَتْ أَسْمَاكٌ كَثِيرَةٌ.', modelEn: 'Last month, chemicals from a nearby factory were dumped in the river, and many fish died.' },
        { ex: 'مَا نَتَائِجُ ذٰلِكَ عَلَى النَّاسِ؟', task: 'Give two effects.', model: 'لَا يَسْتَطِيعُ الأَطْفَالُ أَنْ يَلْعَبُوا بِجَانِبِهِ، وَالرَّائِحَةُ كَرِيهَةٌ، مِمَّا يُؤَدِّي إِلَى مَشَاكِلَ صِحِّيَّةٍ.', modelEn: 'Children can’t play by it, and the smell is awful, which leads to health problems.' },
        { ex: 'كَيْفَ كَانَ النَّهْرُ قَبْلَ ذٰلِكَ؟', task: 'Compare past and present.', model: 'كَانَ نَظِيفًا وَأَزْرَقَ، وَكُنَّا نَصْطَادُ فِيهِ مَعَ أَبِي، أَمَّا الآنَ فَهُوَ أَسْوَدُ وَمَهْجُورٌ.', modelEn: 'It was clean and blue, and we used to fish there with dad — now it is black and deserted.' },
        { ex: 'هَلْ تَكَلَّمْتُمْ مَعَ المَصْنَعِ؟', task: 'Answer and ASK the reporter something.', model: 'كَتَبْنَا رِسَالَةً، لٰكِنَّهُمْ لَمْ يَرُدُّوا. هَلْ يُمْكِنُ أَنْ تَسْأَلُوهُمْ أَنْتُمْ فِي التِّلْفَازِ؟', modelEn: 'We wrote a letter but they didn’t reply. Could you ask them on TV?' },
        { unexpected: true, ex: 'لَوْ أُغْلِقَ المَصْنَعُ، سَيَفْقِدُ النَّاسُ عَمَلَهُمْ. مَا رَأْيُكَ؟', task: 'Answer the unexpected question (concession).', model: 'صَحِيحٌ أَنَّ المَصْنَعَ مُهِمٌّ لِلْعَمَلِ، غَيْرَ أَنَّ صِحَّةَ النَّاسِ أَهَمُّ؛ يَجِبُ أَنْ يُنَظِّفَ النَّهْرَ، لَا أَنْ يُغْلَقَ.', modelEn: 'It’s true the factory matters for jobs, but people’s health matters more — it must clean the river, not be closed.' },
      ],
      girl: 'رَأْيُكِ — and the Speaker stays the same',
      notes: 'Stretch language: passive past rumiyat · fa- for result · mimmā yuʾaddī ilā · kāna … wa-kunnā naṣṭādu (past habit) vs ammā al-āna fa- · ṣaḥīḥun anna … ghayra anna · comparative ahammu.',
    },
  ],
  convAr: 'مَشَاكِلُ البِيئَةِ',
  conv: [
    { route: 'Core', q: 'هَلْ مَدِينَتُكَ نَظِيفَةٌ؟', en: 'Is your city clean?', push: 'لِمَاذَا؟' },
    { route: 'Core', q: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟', en: 'How do you get to school?', push: 'هَلْ هٰذَا يُلَوِّثُ؟' },
    { route: 'Develop', q: 'مَا المُشْكِلَةُ البِيئِيَّةُ الَّتِي تُقْلِقُكَ أَكْثَرَ؟', en: 'Which environmental problem worries you most?', push: 'مَا سَبَبُهَا؟' },
    { route: 'Develop', q: 'هَلْ رَأَيْتَ تَلَوُّثًا فِي مَكَانٍ زُرْتَهُ؟', en: 'Have you seen pollution somewhere you visited?', push: 'صِفْهُ.' },
    { route: 'Stretch', q: 'هَلِ المَصَانِعُ أَمِ النَّاسُ مَسْؤُولُونَ عَنِ التَّلَوُّثِ؟', en: 'Are factories or people responsible for pollution?', push: 'وَالحُكُومَاتُ؟' },
    { route: 'Stretch', q: 'كَيْفَ سَيَكُونُ العَالَمُ بَعْدَ خَمْسِينَ سَنَةً إِذَا لَمْ نَتَغَيَّرْ؟', en: 'What will the world be like in fifty years if we don’t change?', push: 'وَإِذَا تَغَيَّرْنَا؟' },
  ],
  convModels: [
    { q: 'مَا المُشْكِلَةُ البِيئِيَّةُ الَّتِي تُقْلِقُكَ أَكْثَرَ؟', model: 'يُقْلِقُنِي الاحْتِبَاسُ الحَرَارِيُّ أَكْثَرَ، لِأَنَّهُ يُؤَدِّي إِلَى ذَوَبَانِ الجَلِيدِ؛ مَثَلًا، رَأَيْتُ فِيلْمًا عَنِ الدِّبَبَةِ القُطْبِيَّةِ الَّتِي فَقَدَتْ بَيْتَهَا، وَسَأُشَارِكُ فِي حَمْلَةٍ فِي مَدْرَسَتِي.', modelEn: 'A: global warming · R: it leads to ice melting · E: I saw a film about polar bears losing their home · T: I’ll join a campaign at school.' },
    { q: 'هَلْ رَأَيْتَ تَلَوُّثًا فِي مَكَانٍ زُرْتَهُ؟', model: 'نَعَمْ، فِي الصَّيْفِ المَاضِي زُرْتُ شَاطِئًا فِي مِصْرَ، وَكَانَتْ عَلَيْهِ زُجَاجَاتٌ بْلَاسْتِيكِيَّةٌ كَثِيرَةٌ، لِأَنَّ السُّيَّاحَ تَرَكُوهَا؛ لِذٰلِكَ جَمَعْنَاهَا مَعَ أَبِي فِي أَكْيَاسٍ.', modelEn: 'A: yes, a beach in Egypt last summer · E: lots of plastic bottles on it · R: tourists left them · T/result: so we collected them in bags with dad.' },
    { q: 'هَلِ المَصَانِعُ أَمِ النَّاسُ مَسْؤُولُونَ عَنِ التَّلَوُّثِ؟', model: 'فِي رَأْيِي كِلَاهُمَا مَسْؤُولٌ؛ صَحِيحٌ أَنَّ المَصَانِعَ تُلَوِّثُ الهَوَاءَ وَالمَاءَ أَكْثَرَ، غَيْرَ أَنَّنَا نَشْتَرِي مُنْتَجَاتِهَا، فَإِذَا اشْتَرَيْنَا أَقَلَّ، أَنْتَجَتْ أَقَلَّ.', modelEn: 'Opinion: both · concession: factories pollute air and water more, but we buy their products — if we buy less, they produce less.' },
  ],
  talk: {
    title: 'One minute: the biggest problem where I live', ar: 'أَكْبَرُ مُشْكِلَةٍ فِي مِنْطَقَتِي',
    text: 'Talk for one minute about an environmental problem where you live: what it is, its causes, its effects on people and animals — something you saw — and who is responsible.',
    routes: {
      core: '30 seconds: the problem, one cause (بِسَبَبِ …), one effect.',
      develop: '60 seconds: add مِمَّا يُسَبِّبُ …, a passive verb and something you saw.',
      stretch: '90 seconds: add an opinion on who is responsible and a concession.',
    },
  },
  checkCore: 'linked a cause with بِسَبَبِ / لِأَنَّ',
  checkDevelop: 'linked an effect with يُؤَدِّي إِلَى / مِمَّا يُسَبِّبُ',
};

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up form, decoding a new Q2 task (an article for the school magazine about pollution), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Report an environmental problem', ar: 'بَلِّغْ عَنْ مُشْكِلَةٍ بِيئِيَّةٍ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'المَكَانُ', en: 'Place', tip: 'النَّهْرُ · الشَّاطِئُ' },
      { core: true, ar: 'نَوْعُ المُشْكِلَةِ', en: 'Type of problem', tip: 'نُفَايَاتٌ · دُخَانٌ' },
      { core: true, ar: 'التَّارِيخُ', en: 'Date', tip: 'يَوْمَ الإِثْنَيْنِ' },
      { core: true, ar: 'السَّبَبُ', en: 'Cause', tip: 'بِسَبَبِ المَصْنَعِ' },
      { ar: 'جُمْلَةٌ: مَا نَتِيجَةُ المُشْكِلَةِ؟', en: 'ONE sentence: what is the result of the problem?', tip: 'مِمَّا يُسَبِّبُ …' },
    ],
  },
  Q2: {
    title: 'Question 2: pollution in my area', ar: 'التَّلَوُّثُ فِي مِنْطَقَتِي',
    task: 'Write an article in Arabic for your school magazine of about 80–90 words. You must include: • an environmental problem in your area • its causes • its effects on people or animals • something that happened recently because of it.',
    phrases: [['مِنْ أَكْبَرِ المَشَاكِلِ فِي مِنْطَقَتِنَا …', 'one of the biggest problems in our area …'], ['بِسَبَبِ … / لِأَنَّ …', 'because of … / because …'], ['يُؤَدِّي ذٰلِكَ إِلَى … ، مِمَّا يُسَبِّبُ …', 'this leads to …, which causes …'], ['فِي الأُسْبُوعِ المَاضِي …', 'last week …']],
    rubric: [
      ['task', 'اكْتُبْ مَقَالَةً لِمَجَلَّةِ المَدْرَسَةِ (٨٠–٩٠ كَلِمَةً).', 'Write an article for the school magazine (80–90 words).'],
      ['1', 'مَا المُشْكِلَةُ البِيئِيَّةُ فِي مِنْطَقَتِكَ؟', 'The problem in your area'],
      ['2', 'مَا أَسْبَابُهَا؟', 'Its causes'],
      ['3', 'مَا نَتَائِجُهَا عَلَى النَّاسِ أَوِ الحَيَوَانَاتِ؟', 'Its effects'],
      ['4', 'مَاذَا حَدَثَ مُؤَخَّرًا بِسَبَبِهَا؟', 'Something that happened recently'],
    ],
    decode: ['an ARTICLE → a title, no “Dear …”, speak to the reader (نَحْنُ)', 'مَا المُشْكِلَةُ → PRESENT + a noun (تَلَوُّثٌ · نُفَايَاتٌ)', 'مَا أَسْبَابُهَا → بِسَبَبِ + genitive · لِأَنَّ + noun / pronoun', 'مَا نَتَائِجُهَا → يُؤَدِّي إِلَى · مِمَّا يُسَبِّبُ', 'مَاذَا حَدَثَ → PAST (+ a passive verb for extra marks)'],
    coreFrames: [
      { ar: 'التَّلَوُّثُ فِي مِنْطَقَتِنَا', en: 'Title: Pollution in our area' },
      { ar: 'مِنْ أَكْبَرِ المَشَاكِلِ فِي مِنْطَقَتِنَا ______ .', en: '1 · One of the biggest problems in our area is …' },
      { ar: 'السَّبَبُ هُوَ ______ ، لِأَنَّ ______ .', en: '2 · The cause is …, because …' },
      { ar: 'هٰذِهِ المُشْكِلَةُ خَطِيرَةٌ عَلَى ______ ، لِأَنَّ ______ .', en: '3 · This problem is dangerous for …, because …' },
      { ar: 'فِي الأُسْبُوعِ المَاضِي ______ .', en: '4 · Last week …' },
    ],
    developFrames: [
      { ar: 'يُعَانِي حَيُّنَا مِنْ ______ مُنْذُ ______ .', en: '1 · Our area has suffered from … since …' },
      { ar: 'بِسَبَبِ ______ وَ ______ ، أَصْبَحَ ______ .', en: '2 · Because of … and …, … has become …' },
      { ar: 'يُؤَدِّي ذٰلِكَ إِلَى ______ ، مِمَّا يُسَبِّبُ ______ .', en: '3 · This leads to …, which causes …' },
      { ar: 'مُؤَخَّرًا ______ ، فَ ______ .', en: '4 · Recently …, so …' },
    ],
    bank: ['تَلَوُّثُ الهَوَاءِ', 'دُخَانُ السَّيَّارَاتِ', 'زَحْمَةُ المُرُورِ', 'نُفَايَاتٌ بْلَاسْتِيكِيَّةٌ', 'بِسَبَبِ', 'يُؤَدِّي إِلَى', 'مِمَّا يُسَبِّبُ', 'ضَارٌّ · خَطِيرٌ'],
    model: {
      text: `الهَوَاءُ فِي حَيِّنَا
مِنْ أَكْبَرِ المَشَاكِلِ فِي حَيِّنَا تَلَوُّثُ الهَوَاءِ، فَشَارِعُنَا الرَّئِيسِيُّ مُزْدَحِمٌ دَائِمًا. السَّبَبُ الأَوَّلُ زَحْمَةُ المُرُورِ، لِأَنَّ كَثِيرًا مِنَ النَّاسِ يَذْهَبُونَ إِلَى العَمَلِ بِالسَّيَّارَةِ، وَالسَّبَبُ الثَّانِي المَصْنَعُ الكَبِيرُ الَّذِي بُنِيَ قَبْلَ سَنَتَيْنِ. يُؤَدِّي دُخَانُ السَّيَّارَاتِ وَالمَصْنَعِ إِلَى هَوَاءٍ ضَارٍّ، مِمَّا يُسَبِّبُ أَمْرَاضًا مِثْلَ الرَّبْوِ عِنْدَ الأَطْفَالِ وَكِبَارِ السِّنِّ. بِالإِضَافَةِ إِلَى ذٰلِكَ، قُطِعَتْ أَشْجَارٌ كَثِيرَةٌ لِكَيْ يُبْنَى مَوْقِفٌ لِلسَّيَّارَاتِ. فِي الأُسْبُوعِ المَاضِي، أُغْلِقَتْ مَدْرَسَةٌ ابْتِدَائِيَّةٌ قَرِيبَةٌ يَوْمًا كَامِلًا بِسَبَبِ التَّلَوُّثِ، فَبَقِيَ الأَطْفَالُ فِي بُيُوتِهِمْ.
عُمَرُ، الصَّفُّ العَاشِرُ`,
      en: '“The air in our area. One of the biggest problems in our area is air pollution: our main road is always crowded. The first cause is traffic, because many people drive to work, and the second is the big factory that was built two years ago. Fumes from the cars and the factory lead to harmful air, which causes illnesses like asthma in children and the elderly. In addition, many trees were cut down so that a car park could be built. Last week a nearby primary school was closed for a whole day because of the pollution, so the children stayed at home. Omar, Year 10.”',
      find: ['مِنْ أَكْبَرِ المَشَاكِلِ', 'الَّذِي بُنِيَ قَبْلَ سَنَتَيْنِ', 'يُؤَدِّي … إِلَى … مِمَّا يُسَبِّبُ', 'أُغْلِقَتْ … بِسَبَبِ التَّلَوُّثِ'],
    },
  },
  upgrade: [
    { ar: 'البْلَاسْتِيكُ مُشْكِلَةٌ.', en: 'Plastic is a problem.' },
    { ar: 'البْلَاسْتِيكُ مُشْكِلَةٌ خَطِيرَةٌ، لِأَنَّهُ لَا يَتَحَلَّلُ بِسُرْعَةٍ.', en: 'Plastic is a serious problem, because it doesn’t break down quickly.' },
    { ar: '… تُرْمَى مَلَايِينُ الأَكْيَاسِ فِي البَحْرِ كُلَّ سَنَةٍ، مِمَّا يُسَبِّبُ مَوْتَ السَّلَاحِفِ.', en: '… millions of bags are thrown into the sea every year, which causes turtles to die.' },
    { ar: '… صَحِيحٌ أَنَّ البْلَاسْتِيكَ رَخِيصٌ، غَيْرَ أَنَّ ثَمَنَهُ الحَقِيقِيَّ تَدْفَعُهُ الطَّبِيعَةُ.', en: '… it’s true plastic is cheap, but nature pays its real price.' },
  ],
  builder: [
    { en: 'Because of the traffic, the air is polluted.', cols: [['بِسَبَبِ', 'لِأَنَّ'], ['زَحْمَةِ المُرُورِ', 'زَحْمَةُ المُرُورِ'], ['الهَوَاءُ مُلَوَّثٌ', 'الهَوَاءُ يُلَوِّثُ']], key: [0, 0, 0], why: 'بِسَبَبِ + genitive (زَحْمَةِ); “polluted” = مُلَوَّثٌ (a description).' },
    { en: 'Forests are cut down every year.', cols: [['تُقْطَعُ', 'تَقْطَعُ'], ['الغَابَاتُ', 'الغَابَاتِ'], ['كُلَّ سَنَةٍ', 'أَمْسِ']], key: [0, 0, 0], why: 'Passive present: تُقْطَعُ (tu-…-a-); the forests become the subject (-u).' },
    { en: 'Smoke leads to illnesses.', cols: [['يُؤَدِّي', 'تُؤَدِّي'], ['الدُّخَانُ', 'الدُّخَانَ'], ['إِلَى أَمْرَاضٍ', 'أَمْرَاضًا']], key: [0, 0, 0], why: 'يُؤَدِّي (m. subject الدُّخَانُ) + إِلَى + genitive.' },
  ],
  errors: [
    { wrong: 'الهَوَاءُ مُلَوَّثٌ بِسَبَبِ المَصَانِعُ.', hint: 'Look at the word after بِسَبَبِ.', right: 'الهَوَاءُ مُلَوَّثٌ بِسَبَبِ المَصَانِعِ.', why: 'بِسَبَبِ + genitive: المَصَانِعِ.' },
    { wrong: 'لِأَنَّ السَّيَّارَاتُ تُلَوِّثُ الهَوَاءَ.', hint: 'Look at the word after لِأَنَّ.', right: 'لِأَنَّ السَّيَّارَاتِ تُلَوِّثُ الهَوَاءَ.', why: 'The noun after لِأَنَّ / أَنَّ is accusative: السَّيَّارَاتِ.' },
    { wrong: 'يُؤَدِّي التَّلَوُّثُ الأَمْرَاضَ.', hint: 'This verb needs a small word.', right: 'يُؤَدِّي التَّلَوُّثُ إِلَى الأَمْرَاضِ.', why: 'يُؤَدِّي إِلَى + genitive.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a time I saw nature damaged', ar: 'رَأَيْتُ الطَّبِيعَةَ تَتَضَرَّرُ',
    task: 'Full Q3 title: “Our environment in danger”. Today write ONLY the past paragraph: a time you saw pollution or damage to nature — where you were, what you saw, the cause, and how you felt.',
    formula: [
      { ar: 'فِي العُطْلَةِ رَأَيْتُ شَاطِئًا مَلِيئًا بِالنُّفَايَاتِ.', en: 'T · In the holiday I saw a beach full of rubbish.' },
      { ar: 'كَانَتْ هُنَاكَ زُجَاجَاتٌ وَأَكْيَاسٌ فِي كُلِّ مَكَانٍ.', en: 'D · There were bottles and bags everywhere.' },
      { ar: 'حَدَثَ ذٰلِكَ لِأَنَّ السُّيَّاحَ لَمْ يُنَظِّفُوا.', en: 'R · It happened because the tourists didn’t clean up.' },
      { ar: 'شَعَرْتُ بِالحُزْنِ وَالغَضَبِ.', en: 'F · I felt sad and angry.' },
    ],
    phrases: [['عِنْدَمَا وَصَلْنَا رَأَيْنَا …', 'when we arrived we saw …'], ['كَانَ / كَانَتْ مُلَوَّثًا / مُلَوَّثَةً', 'it was polluted'], ['بِسَبَبِ …', 'because of …'], ['قُطِعَتْ · رُمِيَتْ', 'were cut down · were thrown'], ['شَعَرْتُ بِالحُزْنِ / بِالغَضَبِ', 'I felt sad / angry']],
    model: {
      text: 'قَبْلَ سَنَةٍ زُرْتُ قَرْيَةَ جَدِّي فِي جِبَالِ لُبْنَانَ، وَرَأَيْتُ شَيْئًا لَنْ أَنْسَاهُ. عِنْدَمَا كُنْتُ صَغِيرًا، كَانَتْ هُنَاكَ غَابَةٌ كَبِيرَةٌ خَلْفَ بَيْتِهِ، وَكُنْتُ أَلْعَبُ فِيهَا مَعَ أَبْنَاءِ عَمِّي. لٰكِنْ فِي هٰذِهِ الزِّيَارَةِ، وَجَدْتُ أَنَّ أَشْجَارًا كَثِيرَةً قُطِعَتْ، لِأَنَّ شَرِكَةً بَنَتْ فُنْدُقًا جَدِيدًا هُنَاكَ. بِسَبَبِ ذٰلِكَ، هَرَبَتِ الطُّيُورُ، وَأَصْبَحَ الجَوُّ أَحَرَّ. شَعَرْتُ بِحُزْنٍ كَبِيرٍ، لِأَنَّ جُزْءًا مِنْ طُفُولَتِي اخْتَفَى.',
      en: 'T: a year ago I visited my grandfather’s village in the mountains of Lebanon and saw something I won’t forget · D: when I was little there was a big forest behind his house where I played with my cousins; this visit I found many trees had been cut down, because a company built a new hotel there; because of that the birds fled and it became hotter · F/R: I felt very sad, because part of my childhood had disappeared.',
      find: ['كَانَتْ هُنَاكَ غَابَةٌ', 'أَشْجَارًا كَثِيرَةً قُطِعَتْ', 'بِسَبَبِ ذٰلِكَ', 'شَعَرْتُ بِحُزْنٍ كَبِيرٍ'],
    },
  },
};
write.Q2.developFrames[3] = { ar: 'مُؤَخَّرًا ______ ، لِذٰلِكَ ______ .', en: '4 · Recently …, so …' };

module.exports = { speak, write };
