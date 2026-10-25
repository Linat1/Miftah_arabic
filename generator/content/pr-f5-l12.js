'use strict';
/* Practice Room · F5-L12 · Review and assessment practice — food, health and body. Speaking + writing. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f5-l12',
  arShort: 'تَدْرِيبٌ لِلتَّقْيِيمِ',
  grammar: 'all of F5: ākulu / ashrabu; meals + frequency; ufaḍḍilu … ʿalā; li-annahu / li-annahā + agreeing adjectives; ordering (urīdu … min faḍlika); body parts + duals; ʿindī … mundhu; advice with yajibu an',
  focus: 'Assessment practice for F5: students run their own speaking and writing rehearsal in breakout rooms — a quick word check, a model exchange, exam-style question cards, a five-prompt role play, a 45-second talk, then build, fix and write a timed text on food and health.',
  words1: 'F5 check: food and meals', words2: 'F5 check: body and health',
  addWords: [
    ['خُبْزٌ · أَرُزٌّ · دَجَاجٌ', 'bread · rice · chicken'], ['فَاكِهَةٌ · خُضَارٌ', 'fruit · vegetables'], ['فُطُورٌ · غَدَاءٌ · عَشَاءٌ', 'breakfast · lunch · dinner'],
    ['لَذِيذٌ · صِحِّيٌّ', 'delicious · healthy'], ['أُفَضِّلُ … عَلَى …', 'I prefer … to …'], ['أُرِيدُ … مِنْ فَضْلِكَ', 'I would like …, please'],
    ['رَأْسٌ · عَيْنَانِ · يَدَانِ', 'head · two eyes · two hands'], ['صُدَاعٌ · زُكَامٌ · حُمَّى', 'headache · cold · fever'], ['عِنْدِي أَلَمٌ فِي …', 'I have a pain in …'],
    ['مُنْذُ', 'since / for'], ['دَوَاءٌ · صَيْدَلِيَّةٌ', 'medicine · pharmacy'], ['يَجِبُ أَنْ · مِنَ الأَفْضَلِ أَنْ', 'must · it is better to'],
  ],
  dialogue: {
    title: 'An exam-style exchange', ar: 'حِوَارٌ مِثْلَ الامْتِحَانِ',
    lines: [
      ['A', 'مَاذَا تَأْكُلُ عَادَةً فِي العَشَاءِ؟', 'What do you usually eat for dinner?'],
      ['B', 'عَادَةً آكُلُ الدَّجَاجَ مَعَ الأَرُزِّ، وَأَحْيَانًا السَّمَكَ.', 'Usually I eat chicken with rice, and sometimes fish.'],
      ['A', 'هَلْ أَنْتَ بِصِحَّةٍ جَيِّدَةٍ؟', 'Are you in good health?'],
      ['B', 'نَعَمْ، لٰكِنْ عِنْدِي صُدَاعٌ مُنْذُ الصَّبَاحِ، لِأَنِّي سَهِرْتُ.', 'Yes, but I have had a headache since the morning, because I stayed up late.'],
      ['A', 'مَا نَصِيحَتُكَ لِصَدِيقٍ يَأْكُلُ حَلْوَيَاتٍ كَثِيرَةً؟', 'What is your advice to a friend who eats lots of sweets?'],
      ['B', 'يَجِبُ أَنْ يَأْكُلَ الفَاكِهَةَ بَدَلًا مِنْهَا، لِأَنَّهَا صِحِّيَّةٌ وَحُلْوَةٌ.', 'He should eat fruit instead, because it is healthy and sweet.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap. Round 3: answer with your own facts under exam conditions — no slide.',
  },
  questions: [
    { q: 'مَا طَعَامُكَ المُفَضَّلُ؟', en: 'What is your favourite food?', start: 'طَعَامِي المُفَضَّلُ …', more: '… لِأَنَّهُ / لِأَنَّهَا …' },
    { q: 'أَيُّهُمَا تُفَضِّلُ: الشَّايَ أَمِ القَهْوَةَ؟', en: 'Tea or coffee?', start: 'أُفَضِّلُ … عَلَى …', more: '… لِأَنَّ …' },
    { q: 'صِفْ وَجْهَكَ.', en: 'Describe your face.', start: 'عَيْنَايَ … وَشَعْرِي …', more: '… وَأَنْفِي …' },
    { q: 'مَاذَا تَفْعَلُ عِنْدَمَا عِنْدَكَ صُدَاعٌ؟', en: 'What do you do when you have a headache?', start: 'أَسْتَرِيحُ وَ…', more: '… وَأَحْيَانًا آخُذُ …' },
    { q: 'كَيْفَ تَعِيشُ حَيَاةً صِحِّيَّةً؟', en: 'How do you live healthily?', start: 'أَشْرَبُ … وَأُمَارِسُ …', more: '… لِذٰلِكَ …' },
  ],
  card: {
    title: 'Role-play card — feeling ill on a school trip (five prompts)', ar: 'مَرِيضٌ فِي الرِّحْلَةِ', you: 'a student', them: 'the trip leader',
    tasks: [
      { ex: 'مَاذَا بِكَ؟ أَنْتَ لَسْتَ بِخَيْرٍ.', task: 'Say what is wrong.', plan: 'مَاذَا ← عِنْدِي أَلَمٌ فِي …', model: 'عِنْدِي أَلَمٌ فِي المَعِدَةِ.', modelEn: 'I have a stomach ache.' },
      { ex: 'مُنْذُ مَتَى؟', task: 'Since when.', plan: 'مُنْذُ مَتَى ← مُنْذُ …', model: 'مُنْذُ الغَدَاءِ.', modelEn: 'Since lunch.' },
      { ex: 'مَاذَا أَكَلْتَ؟', task: 'Say what you ate.', plan: 'مَاذَا ← أَكَلْتُ … وَشَرِبْتُ …', model: 'أَكَلْتُ شَطِيرَةً كَبِيرَةً، وَشَرِبْتُ عَصِيرًا بَارِدًا.', modelEn: 'I ate a big sandwich and drank a cold juice.' },
      { ex: 'هَلْ تُرِيدُ شَيْئًا؟', task: 'Ask for water / to sit down.', plan: 'هَلْ ← أُرِيدُ … مِنْ فَضْلِكَ', model: 'أُرِيدُ مَاءً، مِنْ فَضْلِكَ، وَأُرِيدُ أَنْ أَجْلِسَ قَلِيلًا.', modelEn: 'I would like water, please, and I want to sit for a while.' },
      { unexpected: true, ex: 'هَلْ تُرِيدُ أَنْ نَتَّصِلَ بِأُمِّكَ؟', task: 'Answer the surprise question.', plan: 'هَلْ ← نَعَمْ / لَا ، شُكْرًا …', model: 'لَا، شُكْرًا، أَشْعُرُ بِتَحَسُّنٍ قَلِيلًا الآنَ.', modelEn: 'No, thank you, I feel a little better now.' },
    ],
    girl: 'بِكِ · أَنْتِ لَسْتِ · أَكَلْتِ · تُرِيدِينَ · بِأُمِّكِ',
    notes: 'Five prompts covering illness, food and polite requests; task ! is unexpected.',
  },
  talk: {
    title: '45 seconds: food, body and health', ar: 'الطَّعَامُ وَالصِّحَّةُ',
    text: 'Speak for 45 seconds without stopping about food, meals and health — include a preference, a reason, an illness and one piece of advice.',
    head: 'Talk for 45 seconds — no stopping',
    routes: {
      core: '30 seconds: four facts, one per theme.',
      develop: '45 seconds with reasons and connectors.',
      stretch: '45 seconds + a past illness and advice with يَجِبُ أَنْ / مِنَ الأَفْضَلِ أَنْ.',
    },
  },
  builder: [
    { en: 'I prefer salad to chips because it is healthy.', cols: [['أُفَضِّلُ السَّلَطَةَ', 'أُفَضِّلُ السَّلَطَةُ'], ['عَلَى البَطَاطِسِ', 'مِنَ البَطَاطِسِ'], ['لِأَنَّهَا صِحِّيَّةٌ.', 'لِأَنَّهُ صِحِّيٌّ.']], key: [0, 0, 0], why: 'أُفَضِّلُ … عَلَى …; salad (f.) → لِأَنَّهَا صِحِّيَّةٌ.' },
    { en: 'I have a pain in my ear since yesterday.', cols: [['عِنْدِي أَلَمٌ', 'عِنْدِي أَلَمًا'], ['فِي أُذُنِي', 'فِي أُذُنَيِّ'], ['مُنْذُ أَمْسِ.', 'مِنْ أَمْسِ.']], key: [0, 0, 0], why: 'عِنْدِي أَلَمٌ فِي … مُنْذُ …' },
    { en: 'You should drink more water. (to a girl)', cols: [['يَجِبُ أَنْ', 'يَجِبُ'], ['تَشْرَبِي', 'تَشْرَبِينَ'], ['مَاءً أَكْثَرَ.', 'مَاءٌ أَكْثَرُ.']], key: [0, 0, 0], why: 'After أَنْ the -īna becomes -ī: تَشْرَبِي.' },
  ],
  errors: [
    { wrong: 'هٰذَا يَدِي.', hint: 'يَدٌ is feminine.', right: 'هٰذِهِ يَدِي.', why: 'Feminine body part → هٰذِهِ.' },
    { wrong: 'أُرِيدُ عَصِيرٌ مِنْ فَضْلِكَ.', hint: 'After أُرِيدُ …', right: 'أُرِيدُ عَصِيرًا مِنْ فَضْلِكَ.', why: 'Object → -an.' },
    { wrong: 'القَهْوَةُ مُرٌّ.', hint: 'قَهْوَةٌ is feminine.', right: 'القَهْوَةُ مُرَّةٌ.', why: 'Feminine → مُرَّةٌ.' },
  ],
  task: {
    title: 'Timed writing: food and health', ar: 'كِتَابَةٌ مُؤَقَّتَةٌ: الطَّعَامُ وَالصِّحَّةُ',
    text: 'Timed practice (12 minutes). Write about 55–75 words for an e-pal. Include: • your meals on a normal day • your favourite food and a preference, with reasons • a time you were ill (what, since when, what you did) • one piece of advice for a healthy life.',
    range: [40, 90],
    phrases: [['فِي الفُطُورِ … وَفِي الغَدَاءِ …', 'for breakfast … and for lunch …'], ['أُفَضِّلُ … عَلَى … لِأَنَّهُ / لِأَنَّهَا …', 'I prefer … to … because …'], ['كَانَ عِنْدِي … مُنْذُ …', 'I had … for …'], ['يَجِبُ أَنْ … / مِنَ الأَفْضَلِ أَنْ …', 'you must … / it is better to …']],
    coreFrames: [
      { ar: 'فِي الفُطُورِ آكُلُ ______ ، وَفِي العَشَاءِ ______ .', en: 'For breakfast I eat …, and for dinner …' },
      { ar: 'طَعَامِي المُفَضَّلُ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'My favourite food is … because …' },
      { ar: 'فِي الشَّهْرِ المَاضِي كَانَ عِنْدِي ______ .', en: 'Last month I had …' },
      { ar: 'يَجِبُ أَنْ ______ .', en: 'You must …' },
    ],
    developFrames: [
      { ar: 'أُفَضِّلُ ______ عَلَى ______ ، لِأَنَّ ______ .', en: 'I prefer … to …, because …' },
      { ar: 'ذَهَبْتُ إِلَى ______ ، وَ ______ ، لِذٰلِكَ ______ .', en: 'I went to …, and …, so …' },
    ],
    bank: ['آكُلُ · أَشْرَبُ', 'عَادَةً · أَحْيَانًا', 'أُفَضِّلُ … عَلَى', 'لِأَنَّهُ · لِأَنَّهَا', 'كَانَ عِنْدِي', 'مُنْذُ', 'يَجِبُ أَنْ', 'لِذٰلِكَ'],
    model: {
      text: 'مَرْحَبًا! فِي الفُطُورِ آكُلُ الخُبْزَ مَعَ الجُبْنِ، وَفِي العَشَاءِ آكُلُ الدَّجَاجَ مَعَ الخُضَارِ. طَعَامِي المُفَضَّلُ الكَبْسَةُ لِأَنَّهَا لَذِيذَةٌ، وَأُفَضِّلُ العَصِيرَ عَلَى المَشْرُوبَاتِ الغَازِيَّةِ لِأَنَّهُ صِحِّيٌّ. فِي الشَّهْرِ المَاضِي كَانَ عِنْدِي زُكَامٌ وَسُعَالٌ مُنْذُ أُسْبُوعٍ، فَذَهَبْتُ إِلَى الطَّبِيبِ، وَأَخَذْتُ الدَّوَاءَ. نَصِيحَتِي: يَجِبُ أَنْ تَنَامَ مُبَكِّرًا، وَتَشْرَبَ مَاءً كَثِيرًا.',
      en: '“Hello! For breakfast I eat bread with cheese, and for dinner I eat chicken with vegetables. My favourite food is kabsa because it is delicious, and I prefer juice to fizzy drinks because it is healthy. Last month I had a cold and a cough for a week, so I went to the doctor and took the medicine. My advice: you must sleep early and drink plenty of water.”',
      find: ['فِي الفُطُورِ آكُلُ', 'لِأَنَّهَا لَذِيذَةٌ', 'أُفَضِّلُ العَصِيرَ عَلَى', 'يَجِبُ أَنْ تَنَامَ'],
    },
  },
  checkCore: 'cover every bullet point in full sentences within the time?',
  checkDevelop: 'get the agreements right (food adjectives, body parts, he / she verbs)?',
  remember: 'Remember: decode the question word, answer in full sentences, check every agreement.',
});
