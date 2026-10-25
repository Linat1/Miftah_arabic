'use strict';
/* Practice Room · D4-L03 · Environmental problems — causes and effects. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd4-l03',
  arShort: 'المُشْكِلَاتُ البِيئِيَّةُ',
  grammar: 'cause → effect chains: bi-sababi + genitive · yuʾaddī ilā + genitive · mimmā yusabbibu …; active (tulawwithu al-maṣāniʿu al-hawāʾa) vs passive (yulawwathu al-hawāʾu · tuqṭaʿu al-ashjāru); naming the problem with a maṣdar (talawwuth · izālat al-ghābāt · al-taṣaḥḥur)',
  focus: 'Students run their own speaking and writing practice about environmental problems: say the problem words, act a short dialogue building a cause-effect chain, answer question cards, do a role-play card for a radio phone-in, give a one-minute cause-effect talk, then build, fix and write an explanation of one problem in their area.',
  words1: 'Environmental problems', words2: 'Causes and effects',
  dialogue: {
    title: 'Why is the river dirty?', ar: 'لِمَاذَا النَّهْرُ مُلَوَّثٌ؟',
    lines: [
      ['A', 'لِمَاذَا لَوْنُ النَّهْرِ غَرِيبٌ؟', 'Why is the river a strange colour?'],
      ['B', 'بِسَبَبِ تَلَوُّثِ المِيَاهِ. المَصْنَعُ يَرْمِي النُّفَايَاتِ فِيهِ.', 'Because of water pollution. The factory dumps waste into it.'],
      ['A', 'وَمَا النَّتِيجَةُ؟', 'And the result?'],
      ['B', 'يُؤَدِّي التَّلَوُّثُ إِلَى مَوْتِ الأَسْمَاكِ، مِمَّا يُسَبِّبُ مُشْكِلَاتٍ لِلصَّيَّادِينَ.', 'Pollution leads to fish dying, which causes problems for fishermen.'],
      ['A', 'وَالغَابَةُ القَرِيبَةُ؟', 'And the nearby forest?'],
      ['B', 'تُقْطَعُ الأَشْجَارُ كُلَّ سَنَةٍ لِبِنَاءِ البُيُوتِ.', 'Trees are cut down every year to build houses.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: build a chain about ANOTHER problem (plastic, air, desert) — cause → effect → effect.',
  },
  questions: [
    { q: 'مَا أَكْبَرُ مُشْكِلَةٍ بِيئِيَّةٍ فِي مَدِينَتِكَ؟', en: 'What is the biggest environmental problem in your city?', start: 'أَكْبَرُ مُشْكِلَةٍ هِيَ …', more: '… بِسَبَبِ …' },
    { q: 'مَا أَسْبَابُ تَلَوُّثِ الهَوَاءِ؟', en: 'What causes air pollution?', start: 'بِسَبَبِ … وَ …', more: '… مِثْلَ السَّيَّارَاتِ …' },
    { q: 'إِلَامَ تُؤَدِّي إِزَالَةُ الغَابَاتِ؟', en: 'What does deforestation lead to?', start: 'تُؤَدِّي إِلَى …', more: '… مِمَّا يُسَبِّبُ …' },
    { q: 'لِمَاذَا يَذُوبُ الجَلِيدُ؟', en: 'Why is the ice melting?', start: 'بِسَبَبِ الاحْتِبَاسِ الحَرَارِيِّ …', more: '… مِمَّا يُؤَدِّي إِلَى ارْتِفَاعِ …' },
    { q: 'أَيْنَ تُرْمَى النُّفَايَاتُ البِلَاسْتِيكِيَّةُ؟', en: 'Where is plastic waste thrown?', start: 'تُرْمَى فِي …', more: '… فَتَمُوتُ …' },
  ],
  card: {
    title: 'Role-play card — a radio phone-in about pollution', ar: 'بَرْنَامَجٌ إِذَاعِيٌّ', you: 'a caller (a local student)', them: 'the radio presenter',
    tasks: [
      { ex: 'مَا المُشْكِلَةُ فِي حَيِّكَ؟', task: 'Name the problem.', plan: 'المُشْكِلَةُ ← المُشْكِلَةُ هِيَ …', model: 'المُشْكِلَةُ هِيَ تَلَوُّثُ الهَوَاءِ قُرْبَ المَدْرَسَةِ.', modelEn: 'The problem is air pollution near the school.' },
      { ex: 'وَمَا سَبَبُهُ؟', task: 'Cause with بِسَبَبِ.', plan: 'السَّبَبُ ← بِسَبَبِ …', model: 'بِسَبَبِ الزِّحَامِ؛ تَقِفُ مِئَاتُ السَّيَّارَاتِ كُلَّ صَبَاحٍ.', modelEn: 'Because of traffic — hundreds of cars wait every morning.' },
      { ex: 'وَمَا النَّتَائِجُ؟', task: 'Effect chain.', plan: '', model: 'يُؤَدِّي ذٰلِكَ إِلَى أَمْرَاضِ الصَّدْرِ، مِمَّا يُسَبِّبُ غِيَابَ بَعْضِ الطُّلَّابِ.', modelEn: 'That leads to chest illnesses, which causes some students to be absent.' },
      { unexpected: true, ex: 'وَمَنِ المَسْؤُولُ فِي رَأْيِكَ؟', task: 'Answer the surprise question.', plan: '', model: 'كُلُّنَا مَسْؤُولُونَ، وَلٰكِنَّ البَلَدِيَّةَ يَجِبُ أَنْ تَبْدَأَ.', modelEn: 'We are all responsible, but the council must start.' },
    ],
    girl: 'presenter to a girl: حَيِّكِ · رَأْيِكِ',
    notes: 'bi-sababi + genitive; yuʾaddī ilā + genitive; mimmā yusabbibu + object.',
  },
  talk: {
    title: 'One minute: a cause-and-effect chain', ar: 'سِلْسِلَةُ أَسْبَابٍ وَنَتَائِجَ',
    text: 'Choose one problem. Talk for one minute: what it is, two causes, and a chain of two or three effects.',
    routes: {
      core: 'Problem + one cause (بِسَبَبِ) + one effect.',
      develop: 'Add يُؤَدِّي إِلَى … مِمَّا يُسَبِّبُ … and one passive.',
      stretch: 'Add a second cause, a local example and who is responsible.',
    },
  },
  builder: [
    { en: 'The air is polluted because of factories.', cols: [['يُلَوَّثُ الهَوَاءُ', 'يُلَوِّثُ الهَوَاءَ'], ['بِسَبَبِ', 'بِسَبَبُ'], ['المَصَانِعِ.', 'المَصَانِعُ.']], key: [0, 0, 0], why: 'Passive يُلَوَّثُ + subject; بِسَبَبِ + genitive.' },
    { en: 'Deforestation leads to desertification.', cols: [['تُؤَدِّي', 'يُؤَدِّي'], ['إِزَالَةُ الغَابَاتِ', 'إِزَالَةَ الغَابَاتِ'], ['إِلَى التَّصَحُّرِ.', 'إِلَى التَّصَحُّرُ.']], key: [0, 0, 0], why: 'إِزَالَةٌ (f.) → تُؤَدِّي; إِلَى + genitive.' },
    { en: 'The ice melts, which causes sea levels to rise.', cols: [['يَذُوبُ الجَلِيدُ،', 'يَذُوبُ الجَلِيدَ،'], ['مِمَّا يُسَبِّبُ', 'مِمَّا يُسَبِّبَ'], ['ارْتِفَاعَ مُسْتَوَى البَحْرِ.', 'ارْتِفَاعُ مُسْتَوَى البَحْرِ.']], key: [0, 0, 0], why: 'مِمَّا يُسَبِّبُ + object in -a.' },
  ],
  errors: [
    { wrong: 'بِسَبَبِ السَّيَّارَاتُ الهَوَاءُ مُلَوَّثٌ.', hint: 'After بِسَبَبِ …', right: 'الهَوَاءُ مُلَوَّثٌ بِسَبَبِ السَّيَّارَاتِ.', why: 'بِسَبَبِ + genitive.' },
    { wrong: 'يُؤَدِّي التَّلَوُّثُ المَرَضَ.', hint: 'Missing preposition.', right: 'يُؤَدِّي التَّلَوُّثُ إِلَى المَرَضِ.', why: 'يُؤَدِّي إِلَى …' },
    { wrong: 'يُقْطَعُ الأَشْجَارُ كُلَّ يَوْمٍ.', hint: 'Plural of things …', right: 'تُقْطَعُ الأَشْجَارُ كُلَّ يَوْمٍ.', why: 'Non-human plural → feminine passive verb.' },
  ],
  task: {
    title: 'A problem in my area', ar: 'مُشْكِلَةٌ فِي مِنْطَقَتِي',
    text: 'Write an explanation (about 60–80 words) of one environmental problem in your area for the school eco-club. Include: • the problem (a maṣdar: تَلَوُّثُ … / إِزَالَةُ …) • two causes (بِسَبَبِ …) • one passive verb (يُلَوَّثُ / تُقْطَعُ / تُرْمَى …) • a chain: يُؤَدِّي إِلَى … مِمَّا يُسَبِّبُ … • who is responsible.',
    phrases: [['أَكْبَرُ مُشْكِلَةٍ فِي مِنْطَقَتِي هِيَ …', 'the biggest problem in my area is …'], ['بِسَبَبِ …', 'because of …'], ['يُؤَدِّي … إِلَى … مِمَّا يُسَبِّبُ …', '… leads to …, which causes …'], ['فِي رَأْيِي المَسْؤُولُ هُوَ …', 'in my opinion the one responsible is …']],
    coreFrames: [
      { ar: 'أَكْبَرُ مُشْكِلَةٍ فِي مِنْطَقَتِي هِيَ ______ .', en: 'The biggest problem in my area is …' },
      { ar: 'تَحْدُثُ هٰذِهِ المُشْكِلَةُ بِسَبَبِ ______ وَ ______ .', en: 'This problem happens because of … and …' },
      { ar: 'يُؤَدِّي ذٰلِكَ إِلَى ______ .', en: 'That leads to …' },
      { ar: 'فِي رَأْيِي ______ .', en: 'In my opinion …' },
    ],
    developFrames: [
      { ar: '______ ، مِمَّا يُسَبِّبُ ______ .', en: '…, which causes …' },
      { ar: 'كُلَّ يَوْمٍ تُرْمَى / تُقْطَعُ ______ .', en: 'Every day … are thrown / cut down.' },
    ],
    bank: ['تَلَوُّثُ الهَوَاءِ', 'تَلَوُّثُ المِيَاهِ', 'النُّفَايَاتُ البِلَاسْتِيكِيَّةُ', 'إِزَالَةُ الغَابَاتِ', 'الاحْتِبَاسُ الحَرَارِيُّ', 'بِسَبَبِ', 'يُؤَدِّي إِلَى', 'مِمَّا يُسَبِّبُ'],
    model: {
      text: 'أَكْبَرُ مُشْكِلَةٍ فِي مِنْطَقَتِي هِيَ النُّفَايَاتُ البِلَاسْتِيكِيَّةُ عَلَى الشَّاطِئِ. تَحْدُثُ هٰذِهِ المُشْكِلَةُ بِسَبَبِ السُّيَّاحِ الَّذِينَ يَتْرُكُونَ زُجَاجَاتِهِمْ، وَبِسَبَبِ قِلَّةِ صَنَادِيقِ القُمَامَةِ. كُلَّ صَيْفٍ تُرْمَى آلَافُ الأَكْيَاسِ فِي البَحْرِ. يُؤَدِّي ذٰلِكَ إِلَى مَوْتِ السَّلَاحِفِ وَالأَسْمَاكِ، مِمَّا يُسَبِّبُ خَسَارَةً لِلصَّيَّادِينَ أَيْضًا. كَمَا أَنَّ الشَّاطِئَ أَصْبَحَ قَبِيحًا. فِي رَأْيِي كُلُّنَا مَسْؤُولُونَ، وَلٰكِنَّ البَلَدِيَّةَ يَجِبُ أَنْ تَضَعَ صَنَادِيقَ أَكْثَرَ.',
      en: '“The biggest problem in my area is plastic waste on the beach. This problem happens because of tourists who leave their bottles, and because of the lack of bins. Every summer, thousands of bags are thrown into the sea. That leads to the death of turtles and fish, which also causes losses for fishermen. The beach has also become ugly. In my opinion we are all responsible, but the council must put out more bins.”',
      find: ['بِسَبَبِ السُّيَّاحِ', 'تُرْمَى آلَافُ الأَكْيَاسِ', 'يُؤَدِّي ذٰلِكَ إِلَى', 'مِمَّا يُسَبِّبُ'],
    },
  },
  checkCore: 'name a problem and give a cause with بِسَبَبِ + genitive?',
  checkDevelop: 'build a chain (يُؤَدِّي إِلَى … مِمَّا يُسَبِّبُ …) and use one passive?',
});
