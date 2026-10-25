'use strict';
/* Practice Room · F4-L11 · Speaking and writing about school. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f4-l11',
  arShort: 'أَتَكَلَّمُ وَأَكْتُبُ عَنِ المَدْرَسَةِ',
  grammar: 'the whole F4 system in one talk and one paragraph: subjects + reasons, times, objects, rules (yajibu / lā yajūzu), sequence; connectors thumma · ayḍan · lākinna · min al-ḍarūriyyi an · fī al-nihāya',
  focus: 'Students run their own speaking and writing practice bringing all of F4 together: say the connectors, act a model exchange, answer mixed question cards, do a role-play card for a school open evening, deliver a one-minute school talk, then build, fix and write a 6–8 sentence paragraph about school.',
  words1: 'Connectors for a talk', words2: 'F4 key language',
  addWords: [['أَدْرُسُ', 'I study'], ['مَادَّتِي المُفَضَّلَةُ', 'my favourite subject'], ['يَجِبُ أَنْ', 'we must'], ['فِي السَّاعَةِ …', 'at … o’clock'], ['حِصَّةٌ · حِصَصٌ', 'lesson · lessons'], ['فِي حَقِيبَتِي', 'in my bag']],
  dialogue: {
    title: 'An open evening chat', ar: 'فِي يَوْمِ المَدْرَسَةِ المَفْتُوحِ',
    lines: [
      ['A', 'مَا رَأْيُكَ فِي هٰذِهِ المَدْرَسَةِ؟', 'What do you think of this school?'],
      ['B', 'أُحِبُّهَا كَثِيرًا، لِأَنَّ المُعَلِّمِينَ لُطَفَاءُ، وَالصُّفُوفَ حَدِيثَةٌ.', 'I like it a lot, because the teachers are kind and the classrooms are modern.'],
      ['A', 'كَيْفَ يَوْمُكَ هُنَا؟', 'What is your day like here?'],
      ['B', 'يَبْدَأُ فِي الثَّامِنَةِ وَالنِّصْفِ، ثُمَّ عِنْدِي سِتُّ حِصَصٍ، وَفِي النِّهَايَةِ أَذْهَبُ إِلَى نَادِي العُلُومِ.', 'It starts at half past eight, then I have six lessons, and finally I go to science club.'],
      ['A', 'وَالقَوَاعِدُ؟', 'And the rules?'],
      ['B', 'مِنَ الضَّرُورِيِّ أَنْ نَصِلَ فِي الوَقْتِ، وَلَا يَجُوزُ أَنْ نَسْتَعْمِلَ الهَاتِفَ.', 'It is important that we arrive on time, and we must not use phones.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: answer with YOUR school — and add one more connector to each answer.',
  },
  questions: [
    { q: 'مَا مَادَّتُكَ المُفَضَّلَةُ؟ لِمَاذَا؟', en: 'Favourite subject? Why?', start: 'مَادَّتِي المُفَضَّلَةُ … لِأَنَّهُ / لِأَنَّهَا …', more: '… وَأَيْضًا …' },
    { q: 'مَتَى تَبْدَأُ المَدْرَسَةُ وَمَتَى تَنْتَهِي؟', en: 'When does school start and end?', start: 'تَبْدَأُ فِي … وَتَنْتَهِي فِي …', more: '… ثُمَّ أَعُودُ …' },
    { q: 'مَاذَا فِي حَقِيبَتِكَ اليَوْمَ؟', en: 'What is in your bag today?', start: 'فِي حَقِيبَتِي …', more: '… لٰكِنْ لَيْسَ عِنْدِي …' },
    { q: 'مَا القَاعِدَةُ المُهِمَّةُ فِي مَدْرَسَتِكَ؟', en: 'What is an important rule?', start: 'مِنَ الضَّرُورِيِّ أَنْ …', more: '… لِأَنَّ …' },
    { q: 'صِفْ يَوْمَكَ المَدْرَسِيَّ.', en: 'Describe your school day.', start: 'أَوَّلًا … ثُمَّ …', more: '… وَفِي النِّهَايَةِ …' },
  ],
  card: {
    title: 'Role-play card — guiding a family at the open evening', ar: 'أَسْتَقْبِلُ عَائِلَةً', you: 'a student guide', them: 'a parent visiting with their child',
    tasks: [
      { ex: 'مَسَاءَ الخَيْرِ! مَا المَوَادُّ هُنَا؟', task: 'Name four subjects.', plan: 'مَا ← نَدْرُسُ … وَ… وَ…', model: 'مَسَاءَ النُّورِ! نَدْرُسُ الرِّيَاضِيَّاتِ وَالعُلُومَ وَالعَرَبِيَّةَ وَالفَنَّ.', modelEn: 'Good evening! We study maths, science, Arabic and art.' },
      { ex: 'هَلِ المُعَلِّمُونَ جَيِّدُونَ؟', task: 'Answer with a reason.', plan: 'هَلْ ← نَعَمْ، لِأَنَّهُمْ …', model: 'نَعَمْ، لِأَنَّهُمْ لُطَفَاءُ وَيَشْرَحُونَ بِوُضُوحٍ.', modelEn: 'Yes, because they are kind and explain clearly.' },
      { ex: 'كَمْ حِصَّةً فِي اليَوْمِ؟', task: 'Give the number + a time.', plan: 'كَمْ ← … حِصَصٍ ، تَبْدَأُ فِي …', model: 'سِتُّ حِصَصٍ، وَالحِصَّةُ الأُولَى تَبْدَأُ فِي الثَّامِنَةِ وَالنِّصْفِ.', modelEn: 'Six lessons, and the first starts at half past eight.' },
      { ex: 'مَا أَصْعَبُ قَاعِدَةٍ؟', task: 'Give a rule + opinion.', plan: 'مَا ← لَا يَجُوزُ أَنْ … ، لٰكِنَّ …', model: 'لَا يَجُوزُ أَنْ نَأْكُلَ فِي الصَّفِّ، لٰكِنَّ هٰذِهِ القَاعِدَةَ مُهِمَّةٌ.', modelEn: 'We must not eat in class, but this rule is important.' },
    ],
    girl: 'if the parent is a man or woman, nothing changes in the Leader’s lines; a girl guide says the same',
    notes: 'Mixes subjects, reasons, numbers, times and rules from the whole unit.',
  },
  talk: {
    title: 'One minute: my school', ar: 'دَقِيقَةٌ عَنْ مَدْرَسَتِي',
    text: 'Deliver a ONE-MINUTE talk about your school: the school, your day, subjects and reasons, one rule, your opinion. Use at least five connectors.',
    head: 'Talk for one minute — no stopping',
    routes: {
      core: '30 seconds: one sentence for each part.',
      develop: '45 seconds: two sentences per part with لِأَنَّ and ثُمَّ.',
      stretch: '60 seconds: add مِنَ الضَّرُورِيِّ أَنْ … · لٰكِنَّ · فِي النِّهَايَةِ.',
    },
  },
  builder: [
    { en: 'It is important that we listen to the teacher.', cols: [['مِنَ الضَّرُورِيِّ', 'الضَّرُورِيُّ مِنْ'], ['أَنْ نَسْتَمِعَ', 'أَنْ نَسْتَمِعُ'], ['إِلَى المُعَلِّمِ.', 'المُعَلِّمَ إِلَى.']], key: [0, 0, 0], why: 'مِنَ الضَّرُورِيِّ أَنْ + verb in -a; listen TO = إِلَى.' },
    { en: 'I study Arabic, and I also study French.', cols: [['أَدْرُسُ العَرَبِيَّةَ،', 'يَدْرُسُ العَرَبِيَّةَ،'], ['وَأَدْرُسُ الفَرَنْسِيَّةَ', 'وَأَدْرُسُ فَرَنْسَا'], ['أَيْضًا.', 'لٰكِنَّ.']], key: [0, 0, 0], why: 'I study = أَدْرُسُ; also = أَيْضًا at the end.' },
    { en: 'Finally, I go home at four.', cols: [['فِي النِّهَايَةِ', 'فِي البِدَايَةِ'], ['أَعُودُ إِلَى البَيْتِ', 'أَعُودُ البَيْتَ'], ['فِي الرَّابِعَةِ.', 'فِي أَرْبَعَةٍ.']], key: [0, 0, 0], why: 'Finally = فِي النِّهَايَةِ; return TO = إِلَى; time = الرَّابِعَةِ.' },
  ],
  errors: [
    { wrong: 'وَلٰكِنَّ المَدْرَسَةُ كَبِيرَةٌ.', hint: 'After لٰكِنَّ the noun …', right: 'وَلٰكِنَّ المَدْرَسَةَ كَبِيرَةٌ.', why: 'لٰكِنَّ + noun in -a.' },
    { wrong: 'ثُمَّ ثُمَّ ثُمَّ …', hint: 'Vary your connectors.', right: 'أَوَّلًا … ثُمَّ … بَعْدَ ذٰلِكَ … فِي النِّهَايَةِ …', why: 'Varied connectors make a stronger talk and text.' },
    { wrong: 'أُحِبُّ الفَنَّ لِأَنَّهَا إِبْدَاعِيَّةٌ.', hint: 'الفَنُّ is masculine.', right: 'أُحِبُّ الفَنَّ لِأَنَّهُ إِبْدَاعِيٌّ.', why: 'Masculine subject → لِأَنَّهُ إِبْدَاعِيٌّ.' },
  ],
  task: {
    title: 'A paragraph about my school', ar: 'فِقْرَةٌ عَنْ مَدْرَسَتِي',
    text: 'Turn your one-minute talk into a connected paragraph of 6–8 sentences (about 55–75 words). Include: • your school • your day (times, sequence) • two subjects with reasons • one rule with مِنَ الضَّرُورِيِّ أَنْ or لَا يَجُوزُ أَنْ • your opinion. Then improve ONE sentence with your buddy.',
    range: [40, 90],
    phrases: [['أَدْرُسُ فِي … ، وَهِيَ …', 'I study at …; it is …'], ['يَبْدَأُ يَوْمِي فِي … ، ثُمَّ …', 'my day starts at …, then …'], ['مِنَ الضَّرُورِيِّ أَنْ …', 'it is important that …'], ['فِي النِّهَايَةِ …', 'finally …']],
    coreFrames: [
      { ar: 'أَدْرُسُ فِي ______ ، وَهِيَ ______ .', en: 'I study at …; it is …' },
      { ar: 'يَبْدَأُ يَوْمِي فِي ______ ، ثُمَّ ______ .', en: 'My day starts at …, then …' },
      { ar: 'أُحِبُّ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I like … because it is …' },
      { ar: 'مِنَ الضَّرُورِيِّ أَنْ ______ .', en: 'It is important that …' },
    ],
    developFrames: [
      { ar: 'لَا أُحِبُّ ______ كَثِيرًا، وَلٰكِنَّ ______ .', en: 'I don’t like … much, but …' },
      { ar: 'فِي النِّهَايَةِ ______ .', en: 'Finally …' },
    ],
    bank: ['ثُمَّ · بَعْدَ ذٰلِكَ', 'أَيْضًا', 'وَلٰكِنَّ', 'لِأَنَّهُ · لِأَنَّهَا', 'مِنَ الضَّرُورِيِّ أَنْ', 'لَا يَجُوزُ أَنْ', 'فِي النِّهَايَةِ', 'فِي رَأْيِي'],
    model: {
      text: 'أَدْرُسُ فِي مَدْرَسَةِ الأَمَلِ فِي بِرْمِنْغْهَامَ، وَهِيَ صَغِيرَةٌ وَهَادِئَةٌ. يَبْدَأُ يَوْمِي فِي الثَّامِنَةِ وَالرُّبْعِ، ثُمَّ عِنْدِي خَمْسُ حِصَصٍ. أُحِبُّ التَّارِيخَ لِأَنَّهُ مُثِيرٌ لِلِاهْتِمَامِ، وَأُحِبُّ العَرَبِيَّةَ أَيْضًا لِأَنَّهَا جَمِيلَةٌ. لَا أُحِبُّ الرِّيَاضِيَّاتِ كَثِيرًا، وَلٰكِنَّ المُعَلِّمَةَ صَبُورَةٌ. مِنَ الضَّرُورِيِّ أَنْ نَحْتَرِمَ الآخَرِينَ. فِي النِّهَايَةِ، فِي رَأْيِي مَدْرَسَتِي مُمْتَازَةٌ.',
      en: '“I study at Al-Amal School in Birmingham; it is small and calm. My day starts at quarter past eight, then I have five lessons. I like history because it is interesting, and I like Arabic too because it is beautiful. I don’t like maths much, but the teacher is patient. It is important that we respect others. Finally, in my opinion my school is excellent.”',
      find: ['ثُمَّ عِنْدِي خَمْسُ حِصَصٍ', 'لِأَنَّهُ مُثِيرٌ لِلِاهْتِمَامِ', 'وَلٰكِنَّ المُعَلِّمَةَ', 'مِنَ الضَّرُورِيِّ أَنْ'],
    },
  },
  checkCore: 'write 6–8 connected sentences covering every bullet?',
  checkDevelop: 'use at least five different connectors?',
});
