'use strict';
/* Practice Room · D1-L12 · Review — the whole of D1 in one room. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd1-l12',
  arShort: 'مُرَاجَعَةُ الوَحْدَةِ',
  grammar: 'D1 review: clock time with ordinals and fractions; frequency; qabla / baʿda (+ noun) and qabla an / baʿda an (+ verb in -a); li-muddati · li-kay; he / she / you forms; ammā … fa- · baynamā · idhā; past (ams) and future (sa-)',
  focus: 'Students run their own review of the whole D1 unit: recall twelve key D1 expressions, act a mixed dialogue, answer mixed exam-style cards, do a full role-play card, give a one-minute talk, then build, fix and write an exam-style routine email — and set one target for D2.',
  words1: 'D1 key language (1)', words2: 'D1 key language (2)',
  addWords: [
    ['السَّاعَةُ الثَّالِثَةُ وَالرُّبْعُ', 'quarter past three'], ['إِلَّا الرُّبْعَ', 'quarter to'], ['يَسْتَمِرُّ', 'it lasts'], ['عَادَةً · أَحْيَانًا', 'usually · sometimes'], ['لَا … أَبَدًا', 'never'], ['مَرَّتَيْنِ فِي الأُسْبُوعِ', 'twice a week'],
    ['قَبْلَ أَنْ أَنَامَ', 'before I sleep'], ['بَعْدَ أَنْ أَرْجِعَ', 'after I get back'], ['لِمُدَّةِ سَاعَةٍ', 'for an hour'], ['لِكَيْ أَسْتَعِدَّ', 'in order to prepare'], ['بَيْنَمَا', 'whereas'], ['إِذَا كَانَ عِنْدِي وَقْتٌ', 'if I have time'],
  ],
  dialogue: {
    title: 'Everything from D1 in one conversation', ar: 'كُلُّ الوَحْدَةِ فِي حِوَارٍ',
    lines: [
      ['A', 'كَيْفَ يَوْمُكَ عَادَةً؟', 'What is your day usually like?'],
      ['B', 'أَسْتَيْقِظُ فِي السَّادِسَةِ وَالنِّصْفِ، وَقَبْلَ أَنْ أَخْرُجَ أَتَنَاوَلُ الإِفْطَارَ.', 'I wake up at half past six, and before I go out I have breakfast.'],
      ['A', 'وَكَمْ مَرَّةً تَتَدَرَّبُ؟', 'And how often do you train?'],
      ['B', 'مَرَّتَيْنِ فِي الأُسْبُوعِ، لِمُدَّةِ سَاعَةٍ وَنِصْفٍ، لِكَيْ أَبْقَى نَشِيطًا.', 'Twice a week, for an hour and a half, to stay active.'],
      ['A', 'وَمَاذَا فَعَلْتَ أَمْسِ؟', 'And what did you do yesterday?'],
      ['B', 'أَمْسِ رَجَعْتُ مُتَأَخِّرًا، أَمَّا غَدًا فَسَأَرْجِعُ فِي الثَّالِثَةِ.', 'Yesterday I got back late; as for tomorrow, I will get back at three.'],
    ],
    foot: 'Round 1: read it. Round 2: swap letters. Round 3: answer with YOUR life — then ask your partner the same three questions (boy / girl form!).',
  },
  qTitle: 'Mixed exam cards — one from each D1 lesson',
  questions: [
    { q: 'كَمِ السَّاعَةُ الآنَ؟ وَمَتَى تَنْتَهِي الحِصَّةُ؟', en: 'What time is it? When does the lesson end?', start: 'السَّاعَةُ … وَتَنْتَهِي فِي …', more: '… أَيْ بَعْدَ … دَقِيقَةً' },
    { q: 'مَا الَّذِي لَا تَفْعَلُهُ أَبَدًا قَبْلَ النَّوْمِ؟', en: 'What do you never do before sleeping?', start: 'لَا … أَبَدًا قَبْلَ أَنْ أَنَامَ', more: '… لِأَنَّ …' },
    { q: 'صِفْ رُوتِينَ أَبِيكَ أَوْ أُمِّكَ.', en: 'Describe your father’s or mother’s routine.', start: 'يَسْتَيْقِظُ أَبِي / تَسْتَيْقِظُ أُمِّي …', more: '… بَيْنَمَا أَنَا …' },
    { q: 'مَا الفَرْقُ بَيْنَ الأُسْبُوعِ وَنِهَايَتِهِ عِنْدَكَ؟', en: 'How is your week different from your weekend?', start: 'فِي الأُسْبُوعِ … أَمَّا فِي نِهَايَتِهِ فَ…', more: '… وَإِذَا كَانَ …' },
    { q: 'مَاذَا سَتُغَيِّرُ فِي رُوتِينِكَ؟ لِمَاذَا؟', en: 'What will you change in your routine? Why?', start: 'سَأُحَاوِلُ أَنْ …', more: '… لِكَيْ …' },
  ],
  card: {
    title: 'Role-play card — the school wellbeing interview', ar: 'مُقَابَلَةُ الرَّفَاهِيَةِ', you: 'a student', them: 'the school counsellor',
    tasks: [
      { ex: 'مَتَى تَنَامُ وَمَتَى تَسْتَيْقِظُ؟', task: 'Two exact times.', plan: 'مَتَى ← أَنَامُ فِي … وَأَسْتَيْقِظُ فِي …', model: 'أَنَامُ فِي العَاشِرَةِ وَالنِّصْفِ، وَأَسْتَيْقِظُ فِي السَّادِسَةِ وَالرُّبْعِ.', modelEn: 'I sleep at half past ten and wake up at quarter past six.' },
      { ex: 'كَمْ سَاعَةً تَدْرُسُ بَعْدَ المَدْرَسَةِ؟', task: 'Duration + purpose.', plan: 'كَمْ ← لِمُدَّةِ … لِكَيْ …', model: 'أَدْرُسُ لِمُدَّةِ سَاعَتَيْنِ، لِكَيْ أَسْتَعِدَّ لِلِامْتِحَانَاتِ.', modelEn: 'I study for two hours, to prepare for the exams.' },
      { ex: 'هَلْ تَرْتَاحُ فِي نِهَايَةِ الأُسْبُوعِ؟', task: 'Contrast week and weekend.', plan: '', model: 'نَعَمْ، أَمَّا فِي نِهَايَةِ الأُسْبُوعِ فَأَنَامُ أَكْثَرَ وَأَزُورُ أَقَارِبِي.', modelEn: 'Yes — at the weekend I sleep more and visit my relatives.' },
      { unexpected: true, ex: 'مَاذَا فَعَلْتَ أَمْسِ لِكَيْ تَرْتَاحَ؟', task: 'Answer in the past.', plan: '', model: 'أَمْسِ مَشَيْتُ مَعَ أَبِي لِمُدَّةِ نِصْفِ سَاعَةٍ بَعْدَ العَشَاءِ.', modelEn: 'Yesterday I walked with my dad for half an hour after dinner.' },
    ],
    girl: 'counsellor to a girl: تَنَامِينَ · تَدْرُسِينَ · فَعَلْتِ',
    notes: 'This card mixes every D1 structure; the Coach ticks each one heard.',
  },
  talk: {
    title: 'One minute: my D1 showcase', ar: 'أَعْرِضُ مَا تَعَلَّمْتُ',
    text: 'Talk for one minute about your routine and show as many D1 structures as you can. The Coach ticks them on a list: time · frequency · قَبْلَ أَنْ · لِمُدَّةِ · لِكَيْ · he / she · أَمَّا · past · future.',
    routes: {
      core: 'Five structures from the list.',
      develop: 'Seven structures, including قَبْلَ أَنْ / بَعْدَ أَنْ correctly.',
      stretch: 'All nine, with a PREC chain.',
    },
  },
  builder: [
    { en: 'After I finish my homework, I go out for an hour.', cols: [['بَعْدَ أَنْ', 'بَعْدَ'], ['أُنْهِيَ وَاجِبِي،', 'أُنْهِي وَاجِبِيَ،'], ['أَخْرُجُ لِمُدَّةِ سَاعَةٍ.', 'أَخْرُجَ لِمُدَّةِ سَاعَةٍ.']], key: [0, 0, 0], why: 'بَعْدَ أَنْ + verb in -a (أُنْهِيَ); main verb stays -u.' },
    { en: 'My mother rarely sleeps before eleven.', cols: [['نَادِرًا مَا', 'أَبَدًا'], ['تَنَامُ أُمِّي', 'يَنَامُ أُمِّي'], ['قَبْلَ الحَادِيَةَ عَشْرَةَ.', 'قَبْلَ أَحَدَ عَشَرَ.']], key: [0, 0, 0], why: 'She → ta-; clock time = ordinal.' },
    { en: 'Yesterday I woke up late; as for tomorrow, I will wake up early.', cols: [['أَمْسِ اسْتَيْقَظْتُ مُتَأَخِّرًا،', 'أَمْسِ أَسْتَيْقِظُ مُتَأَخِّرًا،'], ['أَمَّا غَدًا', 'بَيْنَمَا غَدًا'], ['فَسَأَسْتَيْقِظُ مُبَكِّرًا.', 'سَأَسْتَيْقِظُ مُبَكِّرًا.']], key: [0, 0, 0], why: 'Past → future, joined by أَمَّا … + fa-.' },
  ],
  errors: [
    { wrong: 'السَّاعَةُ أَرْبَعَةٌ إِلَّا الرُّبْعُ.', hint: 'Two errors.', right: 'السَّاعَةُ الرَّابِعَةُ إِلَّا الرُّبْعَ.', why: 'Ordinal hour; إِلَّا + accusative.' },
    { wrong: 'أُرَاجِعُ لِكَيْ أَنْجَحُ، وَأُخْتِي يُرَاجِعُ أَيْضًا.', hint: 'Two errors.', right: 'أُرَاجِعُ لِكَيْ أَنْجَحَ، وَأُخْتِي تُرَاجِعُ أَيْضًا.', why: 'لِكَيْ + -a; she → ta-.' },
    { wrong: 'إِذَا كَانَ الجَوُّ جَمِيلٌ، أَمَّا أَنَا أَخْرُجُ.', hint: 'Two errors.', right: 'إِذَا كَانَ الجَوُّ جَمِيلًا أَخْرُجُ.', why: 'كَانَ + adjective in -an; أَمَّا is not needed here.' },
  ],
  task: {
    title: 'Exam-style email: my routine', ar: 'رِسَالَةٌ بِأُسْلُوبِ الامْتِحَانِ: رُوتِينِي',
    text: 'You have a new pen-friend in Jordan. Write an email (about 70–90 words) about your daily life. Answer ALL four bullets: • your school-day routine, with times • what you do in the evening and why • how your weekend is different • what you did last weekend, and one change you will make.',
    range: [65, 105],
    phrases: [['أَسْتَيْقِظُ فِي … وَقَبْلَ أَنْ …', 'I wake up at … and before …'], ['أُرَاجِعُ لِمُدَّةِ … لِكَيْ …', 'I revise for … to …'], ['أَمَّا فِي نِهَايَةِ الأُسْبُوعِ فَ…', 'as for the weekend, …'], ['فِي نِهَايَةِ الأُسْبُوعِ المَاضِيَةِ … · سَأُحَاوِلُ أَنْ …', 'last weekend … · I will try to …']],
    coreFrames: [
      { ar: 'أَسْتَيْقِظُ فِي ______ ، وَ ______ .', en: 'I wake up at …, and …' },
      { ar: 'فِي المَسَاءِ أُرَاجِعُ لِمُدَّةِ ______ لِأَنَّ ______ .', en: 'In the evening I revise for … because …' },
      { ar: 'فِي نِهَايَةِ الأُسْبُوعِ ______ .', en: 'At the weekend I …' },
      { ar: 'فِي نِهَايَةِ الأُسْبُوعِ المَاضِيَةِ ______ .', en: 'Last weekend I …' },
    ],
    developFrames: [
      { ar: 'بَعْدَ أَنْ ______ ، ______ ، لِكَيْ ______ .', en: 'After …, I …, so that …' },
      { ar: 'فِي المُسْتَقْبَلِ سَأُحَاوِلُ أَنْ ______ ، لِأَنَّ ______ .', en: 'In future I will try to …, because …' },
    ],
    bank: ['وَالرُّبْعُ · إِلَّا الرُّبْعَ', 'عَادَةً · نَادِرًا', 'قَبْلَ أَنْ · بَعْدَ أَنْ', 'لِمُدَّةِ · لِكَيْ', 'بَيْنَمَا', 'أَمَّا … فَ…', 'إِذَا كَانَ', 'سَأُحَاوِلُ أَنْ'],
    model: {
      text: `مَرْحَبًا يَا رَامِي،
فِي أَيَّامِ الدِّرَاسَةِ أَسْتَيْقِظُ فِي السَّادِسَةِ وَالنِّصْفِ، وَقَبْلَ أَنْ أَخْرُجَ أَتَنَاوَلُ الإِفْطَارَ. تَبْدَأُ المَدْرَسَةُ فِي الثَّامِنَةِ إِلَّا الرُّبْعَ. فِي المَسَاءِ أُرَاجِعُ لِمُدَّةِ سَاعَةٍ لِكَيْ أَسْتَعِدَّ لِلِامْتِحَانَاتِ. أَمَّا فِي نِهَايَةِ الأُسْبُوعِ فَأَنَامُ وَقْتًا أَطْوَلَ، وَإِذَا كَانَ الجَوُّ جَمِيلًا أَلْعَبُ التِّنِسَ مَعَ أَبِي. فِي نِهَايَةِ الأُسْبُوعِ المَاضِيَةِ زُرْتُ خَالَتِي وَسَاعَدْتُهَا فِي الحَدِيقَةِ. فِي المُسْتَقْبَلِ سَأُحَاوِلُ أَنْ أَنَامَ مُبَكِّرًا، لِأَنَّنِي مُتْعَبٌ دَائِمًا فِي الصَّبَاحِ.
أَخْبِرْنِي عَنْ يَوْمِكَ!
صَدِيقُكَ، آدَمُ`,
      en: '“Hi Rami, on school days I wake up at half past six, and before I go out I have breakfast. School starts at quarter to eight. In the evening I revise for an hour to prepare for the exams. As for the weekend, I sleep longer, and if the weather is nice I play tennis with my dad. Last weekend I visited my aunt and helped her in the garden. In future I will try to sleep early, because I am always tired in the morning. Tell me about your day! Your friend, Adam.”',
      find: ['وَقَبْلَ أَنْ أَخْرُجَ', 'لِكَيْ أَسْتَعِدَّ', 'أَمَّا فِي نِهَايَةِ الأُسْبُوعِ فَأَنَامُ', 'سَأُحَاوِلُ أَنْ أَنَامَ'],
    },
  },
  checkCore: 'answer all four bullets with correct clock times?',
  checkDevelop: 'use past, present and future, plus قَبْلَ أَنْ / لِكَيْ with the -a ending?',
  remember: 'Before you leave: write ONE target for D2 in your book, e.g. “I will always check ta- for she.”',
});
