'use strict';
/* Guided Practice Rooms · AT-A-L01 · Time and Daily Routine. New tasks (not the Exam_Practice workshop ones). Teacher-made. */
const X = require('./xp-common');

const base = { topic: 'A', n: 1, short: 'Time and Daily Routine', arShort: 'الوَقْتُ وَالرُّوتِينُ اليَوْمِيُّ', fileTitle: 'Time_and_Daily_Routine', title: 'Time and Daily Routine', icon: 'FaClock', grammar: 'present-tense routine verbs (I · he · she); telling the time (fī as-sāʿati …); frequency (ʿādatan, aḥyānan); sequence (thumma, baʿda dhālika)' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up, the answer ladder, two new role plays (a sleepover at a friend’s house, a school exchange interview), a topic conversation with A-R-E-T, and a one-minute talk about their school day.',
  words: [
    X.word(1, 'أَسْتَيْقِظُ', 'I wake up', [['he', 'يَسْتَيْقِظُ'], ['she', 'تَسْتَيْقِظُ'], ['they', 'يَسْتَيْقِظُونَ']]),
    X.word(2, 'أَتَنَاوَلُ', 'I have (a meal)', [['he', 'يَتَنَاوَلُ'], ['she', 'تَتَنَاوَلُ'], ['they', 'يَتَنَاوَلُونَ']]),
    X.word(3, 'أَسْتَقِلُّ الحَافِلَةَ', 'I take the bus', [['he', 'يَسْتَقِلُّ'], ['she', 'تَسْتَقِلُّ'], ['they', 'يَسْتَقِلُّونَ']]),
    X.word(4, 'أَسْتَعِدُّ', 'I get ready', [['he', 'يَسْتَعِدُّ'], ['she', 'تَسْتَعِدُّ'], ['they', 'يَسْتَعِدُّونَ']]),
    X.word(5, 'أَصِلُ', 'I arrive', [['he', 'يَصِلُ'], ['she', 'تَصِلُ'], ['they', 'يَصِلُونَ']]),
    X.word(6, 'أَنَامُ', 'I sleep, go to bed', [['he', 'يَنَامُ'], ['she', 'تَنَامُ'], ['they', 'يَنَامُونَ']]),
    X.word(7, 'نَشِيطٌ', 'energetic', [['m.', 'نَشِيطٌ'], ['f.', 'نَشِيطَةٌ'], ['pl.', 'نَشِيطُونَ']]),
    X.word(8, 'نَاعِسٌ', 'sleepy', [['m.', 'نَاعِسٌ'], ['f.', 'نَاعِسَةٌ'], ['pl.', 'نَاعِسُونَ']]),
    X.word(9, 'مُتْعَبٌ', 'tired', [['m.', 'مُتْعَبٌ'], ['f.', 'مُتْعَبَةٌ'], ['pl.', 'مُتْعَبُونَ']]),
    X.word(10, 'مُنَبِّهٌ', 'an alarm clock', [['sg.', 'مُنَبِّهٌ'], ['pl.', 'مُنَبِّهَاتٌ']]),
    X.word(11, 'عَادَةً · أَحْيَانًا', 'usually · sometimes', null, { tag: 'frequency' }),
    X.word(12, 'مُبَكِّرًا · مُتَأَخِّرًا', 'early · late', null, { tag: 'time' }),
  ],
  words1: { title: 'Verbs for your day', ar: 'أَفْعَالُ الرُّوتِينِ' },
  words2: { title: 'Feelings, time and frequency', ar: 'الصِّفَاتُ وَالوَقْتُ' },
  ladder: {
    q: 'مَتَى تَسْتَيْقِظُ؟', qEn: 'When do you wake up?',
    rungs: [
      { ar: 'أَسْتَيْقِظُ فِي السَّاعَةِ السَّابِعَةِ.', en: 'I wake up at seven o’clock.' },
      { ar: 'أَسْتَيْقِظُ فِي السَّاعَةِ السَّابِعَةِ، لِأَنَّ المَدْرَسَةَ تَبْدَأُ مُبَكِّرًا.', en: '… because school starts early.' },
      { ar: '… وَعَادَةً أَتَنَاوَلُ الفُطُورَ مَعَ أُخْتِي، ثُمَّ أَسْتَقِلُّ الحَافِلَةَ.', en: '… usually I have breakfast with my sister, then I take the bus.' },
      { ar: '… أَمْسِ اسْتَيْقَظْتُ مُتَأَخِّرًا، فَفِي رَأْيِي المُنَبِّهُ ضَرُورِيٌّ!', en: '… yesterday I woke up late — in my opinion an alarm is essential!' },
    ],
  },
  ladderQs: [
    { q: 'مَاذَا تَتَنَاوَلُ فِي الفُطُورِ؟', l1: 'أَتَنَاوَلُ …', l2: '… لِأَنَّهُ …', l3: '… عَادَةً / فِي السَّاعَةِ …' },
    { q: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟', l1: 'أَذْهَبُ …', l2: '… لِأَنَّ …', l3: '… وَأَصِلُ فِي السَّاعَةِ …' },
    { q: 'مَاذَا تَفْعَلُ بَعْدَ المَدْرَسَةِ؟', l1: 'بَعْدَ المَدْرَسَةِ …', l2: '… لِأَنِّي …', l3: '… ثُمَّ … / أَمْسِ …' },
    { q: 'مَتَى تَنَامُ؟', l1: 'أَنَامُ فِي السَّاعَةِ …', l2: '… لِأَنِّي …', l3: '… وَفِي نِهَايَةِ الأُسْبُوعِ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a sleepover at a friend’s house', title: 'Role play 1 — Staying the night at your friend’s house', ar: 'لَيْلَةٌ عِنْدَ صَدِيقِي', you: 'a guest', them: 'your friend’s mother or father',
      tasks: [
        { ex: 'أَهْلًا! مَتَى تَنَامُ عَادَةً؟', task: 'Say when you usually go to bed.', plan: 'مَتَى ← أَنَامُ فِي السَّاعَةِ …', model: 'أَنَامُ عَادَةً فِي السَّاعَةِ العَاشِرَةِ.', modelEn: 'I usually go to bed at ten.' },
        { ex: 'وَمَتَى تَسْتَيْقِظُ؟', task: 'Say when you wake up.', plan: 'مَتَى ← أَسْتَيْقِظُ فِي …', model: 'أَسْتَيْقِظُ فِي السَّاعَةِ السَّابِعَةِ وَالنِّصْفِ.', modelEn: 'I wake up at half past seven.' },
        { ex: 'مَاذَا تَتَنَاوَلُ فِي الفُطُورِ؟', task: 'Say what you have for breakfast.', plan: 'مَاذَا ← أَتَنَاوَلُ … وَ…', model: 'أَتَنَاوَلُ البَيْضَ وَالخُبْزَ، وَأَشْرَبُ الحَلِيبَ.', modelEn: 'I have eggs and bread, and I drink milk.' },
        { ex: 'هَلْ تَحْتَاجُ إِلَى شَيْءٍ؟', task: 'Ask for something you need.', plan: 'هَلْ ← نَعَمْ، هَلْ يُمْكِنُ أَنْ …؟', model: 'نَعَمْ، هَلْ يُمْكِنُ أَنْ أَسْتَعْمِلَ المُنَبِّهَ، مِنْ فَضْلِكِ؟', modelEn: 'Yes, could I use the alarm clock, please?' },
        { unexpected: true, ex: 'كَيْفَ سَتَذْهَبُ إِلَى البَيْتِ غَدًا؟', task: 'Answer the unexpected question (future).', plan: 'كَيْفَ ← سَأَذْهَبُ بِالحَافِلَةِ …', model: 'سَأَذْهَبُ بِالحَافِلَةِ فِي السَّاعَةِ العَاشِرَةِ.', modelEn: 'I will go by bus at ten o’clock.' },
      ],
      girl: 'تَنَامِينَ · تَسْتَيْقِظِينَ · تَتَنَاوَلِينَ · تَحْتَاجِينَ · سَتَذْهَبِينَ',
      notes: 'Language: time with fī as-sāʿati + ordinal (as-sābiʿati wa-n-niṣf) · ʿādatan · hal yumkinu an + verb in -a (polite request) · sa- for the future.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a school-exchange interview', title: 'Role play 2 — Interview for a school exchange in Jordan', ar: 'مُقَابَلَةٌ لِتَبَادُلٍ مَدْرَسِيٍّ', you: 'a student applying for the exchange', them: 'the exchange coordinator',
      tasks: [
        { ex: 'صِفْ لِي يَوْمًا عَادِيًّا فِي حَيَاتِكَ.', task: 'Describe a normal day (sequence).', model: 'أَسْتَيْقِظُ فِي السَّابِعَةِ، ثُمَّ أَسْتَقِلُّ الحَافِلَةَ، وَأَصِلُ إِلَى المَدْرَسَةِ فِي الثَّامِنَةِ وَالرُّبْعِ.', modelEn: 'I wake at seven, then take the bus, and I arrive at school at quarter past eight.' },
        { ex: 'مَا الوَقْتُ المُفَضَّلُ عِنْدَكَ فِي اليَوْمِ؟ وَلِمَاذَا؟', task: 'Say your favourite time of day, with a reason.', model: 'أُفَضِّلُ المَسَاءَ، لِأَنِّي أَرْتَاحُ وَأَقْرَأُ بَعْدَ الوَاجِبَاتِ.', modelEn: 'I prefer the evening, because I relax and read after homework.' },
        { ex: 'فِي الأُرْدُنِّ تَبْدَأُ المَدْرَسَةُ فِي السَّاعَةِ السَّابِعَةِ وَالنِّصْفِ.', task: 'ASK one question about the school day in Jordan.', model: 'وَمَتَى تَنْتَهِي المَدْرَسَةُ هُنَاكَ؟', modelEn: 'And when does school finish there?' },
        { ex: 'مَاذَا فَعَلْتَ يَوْمَ السَّبْتِ المَاضِي؟', task: 'Say what you did last Saturday (past).', model: 'اسْتَيْقَظْتُ مُتَأَخِّرًا، ثُمَّ لَعِبْتُ كُرَةَ القَدَمِ مَعَ أَصْدِقَائِي فِي الحَدِيقَةِ.', modelEn: 'I woke up late, then played football with my friends in the park.' },
        { unexpected: true, ex: 'كَيْفَ سَيَتَغَيَّرُ رُوتِينُكَ فِي الأُرْدُنِّ؟', task: 'Answer the unexpected question (future + comparison).', model: 'سَأَسْتَيْقِظُ أَبْكَرَ مِنَ الآنَ، لٰكِنِّي سَأَنَامُ مُبَكِّرًا أَيْضًا، فَلَنْ أَكُونَ مُتْعَبًا.', modelEn: 'I will wake up earlier than now, but I will also go to bed early, so I won’t be tired.' },
      ],
      girl: 'صِفِي · حَيَاتِكِ · عِنْدَكِ · فَعَلْتِ · رُوتِينُكِ — and the Speaker says مُتْعَبَةً',
      notes: 'Language: sequencing (thumma) · times with ordinals and quarters · past routine verbs (istayqaẓtu, laʿibtu) · comparison abkaru min · future negative lan akūna.',
    },
  ],
  convAr: 'يَوْمِي',
  conv: [
    { route: 'Core', q: 'مَتَى تَصِلُ إِلَى المَدْرَسَةِ؟', en: 'When do you arrive at school?', push: 'كَيْفَ تَذْهَبُ؟' },
    { route: 'Core', q: 'هَلْ أَنْتَ نَشِيطٌ فِي الصَّبَاحِ؟', en: 'Are you energetic in the morning?', push: 'لِمَاذَا؟' },
    { route: 'Develop', q: 'كَيْفَ تَسْتَعِدُّ لِلْمَدْرَسَةِ فِي اللَّيْلِ؟', en: 'How do you get ready for school at night?', push: 'وَمَاذَا فَعَلْتَ أَمْسِ؟' },
    { route: 'Develop', q: 'مَا الفَرْقُ بَيْنَ يَوْمِ المَدْرَسَةِ وَيَوْمِ العُطْلَةِ؟', en: 'What is the difference between a school day and a day off?', push: 'أَيُّهُمَا تُفَضِّلُ؟' },
    { route: 'Stretch', q: 'هَلِ الرُّوتِينُ مُهِمٌّ لِلطُّلَّابِ؟', en: 'Is a routine important for students?', push: 'لِمَاذَا فِي رَأْيِكَ؟' },
    { route: 'Stretch', q: 'كَيْفَ سَيَكُونُ رُوتِينُكَ بَعْدَ عَشْرِ سَنَوَاتٍ؟', en: 'What will your routine be like in ten years?', push: 'وَمَا الَّذِي سَيَتَغَيَّرُ؟' },
  ],
  convModels: [
    { q: 'هَلْ أَنْتَ نَشِيطٌ فِي الصَّبَاحِ؟', model: 'لَا، أَنَا نَاعِسٌ فِي الصَّبَاحِ، لِأَنِّي أَنَامُ مُتَأَخِّرًا؛ مَثَلًا أَمْسِ نِمْتُ فِي السَّاعَةِ الحَادِيَةَ عَشْرَةَ، وَمِنَ الآنَ سَأَنَامُ أَبْكَرَ.', modelEn: 'A: no, I’m sleepy · R: I go to bed late · E: last night at eleven · T: from now on I’ll sleep earlier.' },
    { q: 'مَا الفَرْقُ بَيْنَ يَوْمِ المَدْرَسَةِ وَيَوْمِ العُطْلَةِ؟', model: 'فِي يَوْمِ المَدْرَسَةِ أَسْتَيْقِظُ مُبَكِّرًا، بَيْنَمَا أَسْتَيْقِظُ فِي العُطْلَةِ فِي العَاشِرَةِ، لِأَنِّي أُحِبُّ النَّوْمَ؛ وَيَوْمَ الأَحَدِ القَادِمِ سَأَزُورُ جَدَّتِي.', modelEn: 'A: early on school days, ten on holidays · R: I love sleeping · T: next Sunday I will visit my grandmother.' },
    { q: 'هَلِ الرُّوتِينُ مُهِمٌّ لِلطُّلَّابِ؟', model: 'نَعَمْ، فِي رَأْيِي الرُّوتِينُ مُهِمٌّ جِدًّا، لِأَنَّهُ يُسَاعِدُنَا عَلَى التَّنْظِيمِ؛ عِنْدَمَا كُنْتُ صَغِيرًا لَمْ يَكُنْ عِنْدِي رُوتِينٌ، فَكُنْتُ أَنْسَى وَاجِبَاتِي كَثِيرًا.', modelEn: 'A + opinion: very important · R: it helps us organise · E/T: when I was little I had no routine, so I often forgot my homework.' },
  ],
  talk: {
    title: 'One minute: my school day', ar: 'يَوْمِي المَدْرَسِيُّ',
    text: 'Talk for one minute about your school day from morning to night: times, what you do, how you feel — and one thing you did differently yesterday.',
    routes: {
      core: '30 seconds: four times and four verbs (أَسْتَيْقِظُ · أَتَنَاوَلُ · أَصِلُ · أَنَامُ).',
      develop: '60 seconds: add ثُمَّ / بَعْدَ ذٰلِكَ, how you feel and how often.',
      stretch: '90 seconds: today, yesterday and next weekend; one opinion about your routine.',
    },
    phrases: [['فِي الصَّبَاحِ …', 'in the morning …'], ['ثُمَّ · بَعْدَ ذٰلِكَ', 'then · after that'], ['أَمْسِ …', 'yesterday …'], ['فِي الخِتَامِ …', 'to finish …']],
  },
  checkCore: 'said times correctly (fī as-sāʿati + the hour)',
  checkDevelop: 'used sequence and frequency words (ثُمَّ · عَادَةً · أَحْيَانًا)',
};

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up, decoding a new Q2 task (a message about a busy day), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'After-school club: sign-up form', ar: 'اسْتِمَارَةُ نَادِي مَا بَعْدَ المَدْرَسَةِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'الصَّفُّ', en: 'Year / class', tip: 'الصَّفُّ العَاشِرُ' },
      { core: true, ar: 'وَقْتُ الاسْتِيقَاظِ', en: 'Time you wake up', tip: 'السَّاعَةُ السَّابِعَةُ' },
      { core: true, ar: 'وَسِيلَةُ المُوَاصَلَاتِ', en: 'How you get to school', tip: 'بِالحَافِلَةِ · مَشْيًا' },
      { core: true, ar: 'الأَيَّامُ المُنَاسِبَةُ', en: 'Days that suit you', tip: 'يَوْمُ الاثْنَيْنِ وَيَوْمُ الخَمِيسِ' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُرِيدُ هٰذَا النَّادِيَ؟', en: 'ONE sentence: why this club?', tip: 'أُرِيدُ أَنْ + a verb in -a: أُرِيدُ أَنْ أَتَعَلَّمَ …' },
    ],
  },
  Q2: {
    title: 'Question 2: my busiest day', ar: 'أَكْثَرُ أَيَّامِي ازْدِحَامًا',
    task: 'Write an email in Arabic to your friend of about 80–90 words about your busiest school day. You must include: • which day it is and when you wake up • what you do during the day, in order • how you feel at the end of the day, and why • how you will make the day easier next week.',
    phrases: [['أَكْثَرُ أَيَّامِي ازْدِحَامًا هُوَ …', 'my busiest day is …'], ['أَوَّلًا … ثُمَّ … بَعْدَ ذٰلِكَ …', 'first … then … after that …'], ['أَشْعُرُ بِالتَّعَبِ لِأَنَّ …', 'I feel tired because …'], ['فِي الأُسْبُوعِ القَادِمِ سَأُحَاوِلُ أَنْ …', 'next week I will try to …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنْ أَكْثَرِ أَيَّامِكَ ازْدِحَامًا (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about your busiest day (80–90 words).'],
      ['1', 'مَا هٰذَا اليَوْمُ؟ وَمَتَى تَسْتَيْقِظُ؟', 'Which day; when you wake up'],
      ['2', 'مَاذَا تَفْعَلُ خِلَالَ اليَوْمِ؟', 'What you do during the day'],
      ['3', 'كَيْفَ تَشْعُرُ فِي آخِرِ اليَوْمِ؟ وَلِمَاذَا؟', 'How you feel at the end, and why'],
      ['4', 'كَيْفَ سَتَجْعَلُ اليَوْمَ أَسْهَلَ فِي الأُسْبُوعِ القَادِمِ؟', 'How you will make it easier next week'],
    ],
    decode: ['an email to a FRIEND → informal greeting and closing', 'مَا · مَتَى → PRESENT + a day and a time', 'مَاذَا تَفْعَلُ → PRESENT, in order (ثُمَّ)', 'كَيْفَ … وَلِمَاذَا → PRESENT feeling + a reason (لِأَنَّ)', 'سَتَجْعَلُ → FUTURE (sa- / sawfa)'],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', en: 'Hello …, how are you?' },
      { ar: 'أَكْثَرُ أَيَّامِي ازْدِحَامًا هُوَ يَوْمُ ______ .', en: '1 · My busiest day is …' },
      { ar: 'أَسْتَيْقِظُ فِي السَّاعَةِ ______ ، ثُمَّ ______ .', en: '1–2 · I wake at …, then …' },
      { ar: 'فِي آخِرِ اليَوْمِ أَشْعُرُ بِالتَّعَبِ لِأَنَّ ______ .', en: '3 · At the end I feel tired because …' },
      { ar: 'فِي الأُسْبُوعِ القَادِمِ سَأَنَامُ ______ .', en: '4 · Next week I will sleep …' },
      { ar: 'إِلَى اللِّقَاءِ.', en: 'See you.' },
    ],
    developFrames: [
      { ar: 'لَيْسَ عِنْدِي وَقْتٌ يَوْمَ ______ ، لِأَنَّ ______ .', en: '1 · I have no time on … because …' },
      { ar: 'أَوَّلًا ______ ، ثُمَّ ______ ، وَبَعْدَ ذٰلِكَ ______ .', en: '2 · First …, then …, after that …' },
      { ar: 'عِنْدَمَا أَصِلُ إِلَى البَيْتِ أَكُونُ ______ جِدًّا.', en: '3 · When I get home I am very …' },
      { ar: 'لِذٰلِكَ سَأَسْتَعِدُّ ______ ، وَسَأُحَاوِلُ أَنْ ______ .', en: '4 · So I will prepare … and try to …' },
    ],
    bank: ['أَسْتَيْقِظُ', 'أَسْتَقِلُّ الحَافِلَةَ', 'أَصِلُ', 'حِصَّةٌ', 'تَدْرِيبٌ', 'وَاجِبَاتٌ', 'مُتْعَبٌ / مُتْعَبَةٌ', 'مُبَكِّرًا'],
    model: {
      text: `مَرْحَبًا يَا سَامِي،
كَيْفَ حَالُكَ؟ أَكْثَرُ أَيَّامِي ازْدِحَامًا هُوَ يَوْمُ الثُّلَاثَاءِ. أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ، لِأَنَّ عِنْدِي تَدْرِيبَ سِبَاحَةٍ قَبْلَ المَدْرَسَةِ، وَأَتَنَاوَلُ فُطُورًا سَرِيعًا فِي المَطْبَخِ. بَعْدَ التَّدْرِيبِ أَسْتَقِلُّ الحَافِلَةَ، ثُمَّ عِنْدِي سِتُّ حِصَصٍ، وَبَعْدَ ذٰلِكَ أَذْهَبُ إِلَى نَادِي العُلُومِ حَتَّى السَّاعَةِ الخَامِسَةِ وَالنِّصْفِ. عِنْدَمَا أَصِلُ إِلَى البَيْتِ فِي السَّادِسَةِ أَكُونُ مُتْعَبًا جِدًّا، لِأَنِّي لَا أَرْتَاحُ أَبَدًا! لِذٰلِكَ سَأَسْتَعِدُّ فِي الأُسْبُوعِ القَادِمِ مِنْ يَوْمِ الاثْنَيْنِ، وَسَأُحَاوِلُ أَنْ أَنَامَ قَبْلَ العَاشِرَةِ. وَأَنْتَ، مَا أَكْثَرُ أَيَّامِكَ ازْدِحَامًا؟
إِلَى اللِّقَاءِ،
آدَمُ`,
      en: '“Hi Sami, how are you? My busiest day is Tuesday. I wake up at half past six because I have swimming training before school, and I eat a quick breakfast in the kitchen. After training I take the bus, then I have six lessons, and after that I go to science club until half past five. When I get home at six I am very tired, because I never rest! So next week I will get ready on Monday, and I will try to go to bed before ten. And you, what is your busiest day? See you, Adam.”',
      find: ['أَكْثَرُ أَيَّامِي ازْدِحَامًا', 'ثُمَّ … وَبَعْدَ ذٰلِكَ', 'لِأَنِّي لَا أَرْتَاحُ', 'سَأُحَاوِلُ أَنْ أَنَامَ'],
    },
  },
  upgrade: [
    { ar: 'أَسْتَيْقِظُ مُبَكِّرًا.', en: 'I wake up early.' },
    { ar: 'أَسْتَيْقِظُ مُبَكِّرًا فِي السَّاعَةِ السَّادِسَةِ كُلَّ يَوْمٍ.', en: 'I wake up early at six every day.' },
    { ar: 'أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ كُلَّ يَوْمٍ، لِأَنَّ الحَافِلَةَ تَصِلُ فِي السَّابِعَةِ.', en: '… because the bus comes at seven.' },
    { ar: '… وَفِي رَأْيِي هٰذَا مُبَكِّرٌ جِدًّا، لٰكِنِّي أَكُونُ نَشِيطًا فِي الصَّبَاحِ.', en: '… in my opinion that is very early, but I am energetic in the morning.' },
  ],
  builder: [
    { en: 'My sister wakes up at seven.', cols: [['أُخْتِي', 'أَخِي'], ['تَسْتَيْقِظُ', 'يَسْتَيْقِظُ'], ['فِي السَّاعَةِ السَّابِعَةِ', 'فِي السَّاعَةِ السَّابِعَ']], key: [0, 0, 0], why: 'She → تَسْتَيْقِظُ; the hour is feminine: السَّابِعَةِ.' },
    { en: 'Usually I have breakfast, then I take the bus.', cols: [['عَادَةً', 'أَمْسِ'], ['أَتَنَاوَلُ الفُطُورَ', 'تَنَاوَلْتُ الفُطُورَ'], ['ثُمَّ أَسْتَقِلُّ الحَافِلَةَ', 'ثُمَّ اسْتَقْلَلْتُ الحَافِلَةَ']], key: [0, 0, 0], why: 'Usually → present tense in both verbs.' },
    { en: 'Yesterday I arrived late, so I was tired.', cols: [['أَمْسِ', 'غَدًا'], ['وَصَلْتُ مُتَأَخِّرًا', 'أَصِلُ مُتَأَخِّرًا'], ['فَكُنْتُ مُتْعَبًا', 'فَأَكُونُ مُتْعَبًا']], key: [0, 0, 0], why: 'Past time → past verbs (وَصَلْتُ · كُنْتُ).' },
  ],
  errors: [
    { wrong: 'أُخْتِي يَسْتَيْقِظُ فِي السَّادِسَةِ.', hint: 'Who is doing the verb?', right: 'أُخْتِي تَسْتَيْقِظُ فِي السَّادِسَةِ.', why: 'She → the verb starts with ta-: تَسْتَيْقِظُ.' },
    { wrong: 'أَصِلُ إِلَى المَدْرَسَةِ فِي السَّاعَةِ الثَّامِنُ.', hint: 'Look at the hour.', right: 'أَصِلُ إِلَى المَدْرَسَةِ فِي السَّاعَةِ الثَّامِنَةِ.', why: 'السَّاعَة is feminine → الثَّامِنَةِ.' },
    { wrong: 'أَمْسِ أَنَامُ مُتَأَخِّرًا.', hint: 'Which time? Which tense?', right: 'أَمْسِ نِمْتُ مُتَأَخِّرًا.', why: 'Yesterday → past tense: نِمْتُ.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a day that went wrong', ar: 'يَوْمٌ لَمْ يَسِرْ كَمَا خَطَّطْتُ',
    task: 'Full Q3 title: “My daily routine — and a day I will not forget”. Today write ONLY the past paragraph: a day when your routine went wrong (you woke up late, missed the bus …) — what happened, why, and how you felt.',
    formula: [
      { ar: 'فِي يَوْمِ الاثْنَيْنِ المَاضِي لَمْ يَسِرْ صَبَاحِي كَمَا خَطَّطْتُ.', en: 'T · Last Monday my morning did not go to plan.' },
      { ar: 'اسْتَيْقَظْتُ مُتَأَخِّرًا، وَفَاتَتْنِي الحَافِلَةُ.', en: 'D · I woke up late and missed the bus.' },
      { ar: 'حَدَثَ ذٰلِكَ لِأَنَّ المُنَبِّهَ لَمْ يَرِنَّ.', en: 'R · because the alarm did not ring.' },
      { ar: 'شَعَرْتُ بِالقَلَقِ، وَالآنَ أَسْتَعِدُّ فِي اللَّيْلِ.', en: 'F · I felt worried — now I get ready at night.' },
    ],
    phrases: [['فِي يَوْمِ … المَاضِي', 'last …day'], ['اسْتَيْقَظْتُ مُتَأَخِّرًا', 'I woke up late'], ['فَاتَتْنِي الحَافِلَةُ', 'I missed the bus'], ['لِأَنَّ … لَمْ …', 'because … did not …'], ['شَعَرْتُ بِالقَلَقِ · بِالخَجَلِ', 'I felt worried · embarrassed']],
    model: {
      text: 'فِي يَوْمِ الخَمِيسِ المَاضِي لَمْ يَسِرْ صَبَاحِي كَمَا خَطَّطْتُ. نِمْتُ مُتَأَخِّرًا لِأَنِّي كُنْتُ أُرَاجِعُ لِلِامْتِحَانِ، فَلَمْ أَسْمَعِ المُنَبِّهَ، وَاسْتَيْقَظْتُ فِي السَّاعَةِ الثَّامِنَةِ! لَبِسْتُ مَلَابِسِي بِسُرْعَةٍ، وَلَمْ أَتَنَاوَلِ الفُطُورَ، لٰكِنْ فَاتَتْنِي الحَافِلَةُ، فَأَوْصَلَنِي أَبِي بِالسَّيَّارَةِ. وَصَلْتُ مُتَأَخِّرًا عَشْرَ دَقَائِقَ، وَشَعَرْتُ بِالخَجَلِ أَمَامَ المُعَلِّمِ. مُنْذُ ذٰلِكَ اليَوْمِ أَسْتَعِدُّ فِي اللَّيْلِ، وَسَأَنَامُ دَائِمًا قَبْلَ العَاشِرَةِ.',
      en: 'T: last Thursday my morning did not go to plan · D: I went to bed late revising, didn’t hear the alarm and woke at eight; I dressed quickly, skipped breakfast, missed the bus, and my dad drove me · R/F: I arrived ten minutes late and felt embarrassed in front of the teacher · future: since then I get ready at night, and I will always sleep before ten.',
      find: ['لَمْ يَسِرْ صَبَاحِي', 'لِأَنِّي كُنْتُ أُرَاجِعُ', 'فَاتَتْنِي الحَافِلَةُ', 'شَعَرْتُ بِالخَجَلِ'],
    },
  },
};

module.exports = { speak, write };
