'use strict';
/* Practice Room · F4-L12 · Review and assessment practice — school life. Speaking + writing. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f4-l12',
  arShort: 'تَدْرِيبٌ لِلتَّقْيِيمِ',
  grammar: 'all of F4: subjects + li-annahu / li-annahā; days and clock times; classroom objects (hādhā / hādhihi, ʿindī / laysa ʿindī); preferences; yajibu an / lā yajūzu an; sequencing',
  focus: 'Assessment practice for F4: students run their own speaking and writing rehearsal in breakout rooms — a quick word check, a model exchange, exam-style question cards, a five-prompt role play, a 45-second talk, then build, fix and write a timed text about school life.',
  words1: 'F4 check: subjects and opinions', words2: 'F4 check: time, rules, routine',
  addWords: [
    ['الرِّيَاضِيَّاتُ · العُلُومُ', 'maths · science'], ['التَّارِيخُ · الفَنُّ', 'history · art'], ['مُفِيدٌ · مُمْتِعٌ', 'useful · enjoyable'],
    ['صَعْبٌ · مُمِلٌّ', 'difficult · boring'], ['أُفَضِّلُ', 'I prefer'], ['لِأَنَّهُ · لِأَنَّهَا', 'because it (m. · f.)'],
    ['يَوْمَ الإِثْنَيْنِ', 'on Monday'], ['فِي السَّاعَةِ الثَّامِنَةِ', 'at eight o’clock'], ['حِصَّةٌ', 'a lesson'],
    ['يَجِبُ أَنْ', 'must'], ['لَا يَجُوزُ أَنْ', 'must not'], ['ثُمَّ · بَعْدَ ذٰلِكَ', 'then · after that'],
  ],
  dialogue: {
    title: 'An exam-style exchange', ar: 'حِوَارٌ مِثْلَ الامْتِحَانِ',
    lines: [
      ['A', 'مَا مَادَّتُكَ المُفَضَّلَةُ؟ وَلِمَاذَا؟', 'What is your favourite subject, and why?'],
      ['B', 'مَادَّتِي المُفَضَّلَةُ الفَنُّ، لِأَنَّهُ إِبْدَاعِيٌّ وَمُمْتِعٌ.', 'My favourite subject is art, because it is creative and enjoyable.'],
      ['A', 'صِفْ يَوْمَ الإِثْنَيْنِ فِي مَدْرَسَتِكَ.', 'Describe Monday at your school.'],
      ['B', 'تَبْدَأُ المَدْرَسَةُ فِي الثَّامِنَةِ وَالنِّصْفِ. أَوَّلًا عِنْدِي عُلُومٌ، ثُمَّ رِيَاضِيَّاتٌ.', 'School starts at half past eight. First I have science, then maths.'],
      ['A', 'مَا القَوَاعِدُ فِي مَدْرَسَتِكَ؟', 'What are the rules at your school?'],
      ['B', 'يَجِبُ أَنْ نَلْبَسَ اللِّبَاسَ المَدْرَسِيَّ، وَلَا يَجُوزُ أَنْ نَتَأَخَّرَ.', 'We must wear uniform, and we must not be late.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap. Round 3: answer with your own facts under exam conditions — no slide.',
  },
  questions: [
    { q: 'مَاذَا تَدْرُسُ يَوْمَ الأَرْبِعَاءِ؟', en: 'What do you study on Wednesday?', start: 'يَوْمَ الأَرْبِعَاءِ أَدْرُسُ …', more: '… وَالحِصَّةُ الأُولَى …' },
    { q: 'أَيُّهُمَا تُفَضِّلُ: العُلُومَ أَمِ التَّارِيخَ؟', en: 'Which do you prefer: science or history?', start: 'أُفَضِّلُ … لِأَنَّهُ / لِأَنَّهَا …', more: '… لٰكِنَّ …' },
    { q: 'مَاذَا فِي حَقِيبَتِكَ؟', en: 'What is in your bag?', start: 'فِي حَقِيبَتِي …', more: '… وَلَيْسَ عِنْدِي …' },
    { q: 'مَاذَا تَفْعَلُ بَعْدَ المَدْرَسَةِ؟', en: 'What do you do after school?', start: 'أَعُودُ إِلَى البَيْتِ فِي … ، ثُمَّ …', more: '… وَفِي النِّهَايَةِ …' },
    { q: 'مَا رَأْيُكَ فِي اللِّبَاسِ المَدْرَسِيِّ؟', en: 'What do you think of school uniform?', start: 'فِي رَأْيِي …', more: '… لِأَنَّهُ …' },
  ],
  card: {
    title: 'Role-play card — your first day at a new school (five prompts)', ar: 'أَوَّلُ يَوْمٍ فِي مَدْرَسَةٍ جَدِيدَةٍ', you: 'a new student', them: 'a teacher',
    tasks: [
      { ex: 'أَهْلًا! مَا اسْمُكَ وَفِي أَيِّ صَفٍّ أَنْتَ؟', task: 'Name and year.', plan: 'مَا ← اسْمِي … ، وَأَنَا فِي الصَّفِّ …', model: 'اسْمِي عَلِيٌّ، وَأَنَا فِي الصَّفِّ التَّاسِعِ.', modelEn: 'My name is Ali, and I am in Year 9.' },
      { ex: 'مَا المَادَّةُ الَّتِي تُحِبُّهَا؟', task: 'A subject + reason.', plan: 'مَا ← أُحِبُّ … لِأَنَّهُ / لِأَنَّهَا …', model: 'أُحِبُّ الجُغْرَافِيَا، لِأَنَّهَا مُثِيرَةٌ لِلِاهْتِمَامِ.', modelEn: 'I like geography, because it is interesting.' },
      { ex: 'هَلْ عِنْدَكَ كُلُّ الأَدَوَاتِ؟', task: 'Say what you don’t have.', plan: 'هَلْ ← عِنْدِي … ، لٰكِنْ لَيْسَ عِنْدِي …', model: 'عِنْدِي كُتُبِي وَدَفْتَرِي، لٰكِنْ لَيْسَ عِنْدِي آلَةٌ حَاسِبَةٌ.', modelEn: 'I have my books and exercise book, but I don’t have a calculator.' },
      { ex: 'هَلْ عِنْدَكَ سُؤَالٌ؟', task: 'Ask when lunch is.', plan: 'سُؤَالٌ ← نَعَمْ، مَتَى …؟', model: 'نَعَمْ، مَتَى وَقْتُ الغَدَاءِ؟', modelEn: 'Yes, when is lunchtime?' },
      { unexpected: true, ex: 'مَا القَاعِدَةُ المُهِمَّةُ فِي مَدْرَسَتِكَ القَدِيمَةِ؟', task: 'Answer the surprise question.', plan: 'مَا ← كَانَ يَجِبُ أَنْ … ← يَجِبُ أَنْ …', model: 'يَجِبُ أَنْ نَصِلَ فِي الوَقْتِ، لِأَنَّ البَابَ يُغْلَقُ فِي الثَّامِنَةِ.', modelEn: 'We must arrive on time, because the gate closes at eight.' },
    ],
    girl: 'اسْمُكِ · أَنْتِ · تُحِبِّينَهَا · عِنْدَكِ · مَدْرَسَتِكِ',
    notes: 'Five prompts, task ! unexpected — exactly as in the assessment.',
  },
  talk: {
    title: '45 seconds: school life', ar: 'حَيَاتِي المَدْرَسِيَّةُ',
    text: 'Speak for 45 seconds without stopping about your school life: subjects and opinions, your timetable, rules and your day.',
    head: 'Talk for 45 seconds — no stopping',
    routes: {
      core: '30 seconds: one sentence each on subjects, times, rules.',
      develop: '45 seconds with reasons and connectors.',
      stretch: '45 seconds + a preference, a “but” and no agreement errors.',
    },
  },
  builder: [
    { en: 'On Thursday the first lesson is Arabic.', cols: [['يَوْمَ الخَمِيسِ', 'فِي الخَمِيسُ'], ['الحِصَّةُ الأُولَى', 'الحِصَّةُ الأَوَّلُ'], ['لُغَةٌ عَرَبِيَّةٌ.', 'لُغَةٌ عَرَبِيٌّ.']], key: [0, 0, 0], why: 'On Thursday = يَوْمَ الخَمِيسِ; حِصَّةٌ (f.) → الأُولَى.' },
    { en: 'I prefer maths because it is clear.', cols: [['أُفَضِّلُ الرِّيَاضِيَّاتِ', 'أُفَضِّلُ الرِّيَاضِيَّاتُ'], ['لِأَنَّهَا', 'لِأَنَّهُ'], ['وَاضِحَةٌ.', 'وَاضِحٌ.']], key: [0, 0, 0], why: 'Non-human plural → لِأَنَّهَا وَاضِحَةٌ.' },
    { en: 'We must not eat in the library.', cols: [['لَا يَجُوزُ', 'يَجِبُ'], ['أَنْ نَأْكُلَ', 'أَنْ نَأْكُلُ'], ['فِي المَكْتَبَةِ.', 'فِي المَكْتَبَةُ.']], key: [0, 0, 0], why: 'Must not = لَا يَجُوزُ أَنْ + verb in -a; فِي + genitive.' },
  ],
  errors: [
    { wrong: 'هٰذَا مِقْلَمَتِي.', hint: 'مِقْلَمَةٌ …', right: 'هٰذِهِ مِقْلَمَتِي.', why: 'Feminine → هٰذِهِ.' },
    { wrong: 'تَبْدَأُ المَدْرَسَةُ فِي السَّاعَةِ تِسْعٍ.', hint: 'Clock time.', right: 'تَبْدَأُ المَدْرَسَةُ فِي السَّاعَةِ التَّاسِعَةِ.', why: 'Clock time = feminine ordinal.' },
    { wrong: 'أُحِبُّ التَّارِيخَ لِأَنَّهَا مُمْتِعَةٌ.', hint: 'التَّارِيخُ is masculine.', right: 'أُحِبُّ التَّارِيخَ لِأَنَّهُ مُمْتِعٌ.', why: 'Masculine subject → لِأَنَّهُ مُمْتِعٌ.' },
  ],
  task: {
    title: 'Timed writing: my school life', ar: 'كِتَابَةٌ مُؤَقَّتَةٌ: حَيَاتِي المَدْرَسِيَّةُ',
    text: 'Timed practice (12 minutes). Write about 55–75 words for an e-pal. Include: • your school and when it starts / ends • two subjects: one you love, one you don’t, with reasons • what is in your bag • one “must” and one “must not” rule • your opinion of your school.',
    range: [40, 90],
    phrases: [['تَبْدَأُ المَدْرَسَةُ فِي … وَتَنْتَهِي فِي …', 'school starts at … and ends at …'], ['أُحِبُّ … لِأَنَّهُ / لِأَنَّهَا …', 'I love … because it …'], ['يَجِبُ أَنْ … · لَا يَجُوزُ أَنْ …', 'we must … · we must not …'], ['فِي رَأْيِي مَدْرَسَتِي …', 'in my opinion my school is …']],
    coreFrames: [
      { ar: 'أَدْرُسُ فِي ______ . تَبْدَأُ المَدْرَسَةُ فِي ______ .', en: 'I study at … School starts at …' },
      { ar: 'أُحِبُّ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I love … because it is …' },
      { ar: 'فِي حَقِيبَتِي ______ وَ ______ .', en: 'In my bag there is … and …' },
      { ar: 'يَجِبُ أَنْ ______ ، وَلَا يَجُوزُ أَنْ ______ .', en: 'We must …, and we must not …' },
    ],
    developFrames: [
      { ar: 'لَا أُحِبُّ ______ كَثِيرًا لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I don’t like … much because it is …' },
      { ar: 'فِي رَأْيِي مَدْرَسَتِي ______ ، لٰكِنَّ ______ .', en: 'In my opinion my school is …, but …' },
    ],
    bank: ['أَدْرُسُ فِي', 'تَبْدَأُ · تَنْتَهِي', 'فِي السَّاعَةِ …', 'لِأَنَّهُ · لِأَنَّهَا', 'عِنْدِي · لَيْسَ عِنْدِي', 'يَجِبُ أَنْ', 'لَا يَجُوزُ أَنْ', 'فِي رَأْيِي'],
    model: {
      text: 'مَرْحَبًا! أَدْرُسُ فِي مَدْرَسَةِ السَّلَامِ فِي لِيدْزَ. تَبْدَأُ المَدْرَسَةُ فِي الثَّامِنَةِ وَالنِّصْفِ، وَتَنْتَهِي فِي الثَّالِثَةِ. أُحِبُّ الكِيمْيَاءَ لِأَنَّهَا عَمَلِيَّةٌ، لٰكِنِّي لَا أُحِبُّ التَّارِيخَ كَثِيرًا لِأَنَّهُ صَعْبٌ. فِي حَقِيبَتِي كُتُبٌ وَمِقْلَمَةٌ وَآلَةٌ حَاسِبَةٌ. يَجِبُ أَنْ نَلْبَسَ اللِّبَاسَ المَدْرَسِيَّ، وَلَا يَجُوزُ أَنْ نَسْتَعْمِلَ الهَاتِفَ فِي الصَّفِّ. فِي رَأْيِي مَدْرَسَتِي جَيِّدَةٌ جِدًّا.',
      en: '“Hello! I study at Al-Salam School in Leeds. School starts at half past eight and finishes at three. I love chemistry because it is practical, but I don’t like history much because it is difficult. In my bag there are books, a pencil case and a calculator. We must wear uniform, and we must not use phones in class. In my opinion my school is very good.”',
      find: ['تَبْدَأُ المَدْرَسَةُ فِي الثَّامِنَةِ', 'لِأَنَّهَا عَمَلِيَّةٌ', 'لَا يَجُوزُ أَنْ', 'فِي رَأْيِي'],
    },
  },
  checkCore: 'cover every bullet point in full sentences within the time?',
  checkDevelop: 'get the agreements right (لِأَنَّهُ / لِأَنَّهَا · هٰذَا / هٰذِهِ · times)?',
  remember: 'Remember: decode the question word, answer in full sentences, check every agreement.',
});
