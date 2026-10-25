'use strict';
/* Practice Room · D3-L05 · Education and training — routes to a career. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd3-l05',
  arShort: 'طُرُقٌ إِلَى العَمَلِ',
  grammar: 'routes: university · college · vocational institute · apprenticeship · training course; the route to a goal: li-kay uṣbiḥa … yajibu an …; condition: idhā ḥaṣaltu ʿalā … fa-sawfa …; comparing routes (aqṣaru min · arkhaṣu min · akthar ʿamaliyyatan); a balanced judgement',
  focus: 'Students run their own speaking and writing practice about routes into work: say the education and training words, act a short dialogue comparing routes, answer question cards, do a role-play card at a college open day, give a one-minute talk comparing two routes, then build, fix and write a balanced comparison of university and an apprenticeship.',
  words1: 'Routes into work', words2: 'Requirements and support',
  dialogue: {
    title: 'University or apprenticeship?', ar: 'الجَامِعَةُ أَمِ التَّلْمَذَةُ المِهَنِيَّةُ؟',
    lines: [
      ['A', 'هَلْ سَتَذْهَبُ إِلَى الجَامِعَةِ؟', 'Will you go to university?'],
      ['B', 'لَا أَعْرِفُ بَعْدُ. أُفَكِّرُ فِي تَلْمَذَةٍ مِهَنِيَّةٍ.', 'I don’t know yet. I’m thinking about an apprenticeship.'],
      ['A', 'لِمَاذَا؟', 'Why?'],
      ['B', 'لِأَنَّهَا أَقْصَرُ وَأَرْخَصُ، وَأَكْسِبُ خِبْرَةً عَمَلِيَّةً وَرَاتِبًا.', 'Because it is shorter and cheaper, and I gain work experience and a wage.'],
      ['A', 'وَلٰكِنَّ الشَّهَادَةَ الجَامِعِيَّةَ مُهِمَّةٌ لِبَعْضِ الوَظَائِفِ.', 'But a university degree is important for some jobs.'],
      ['B', 'صَحِيحٌ. لِكَيْ أُصْبِحَ طَبِيبًا يَجِبُ أَنْ أَدْرُسَ فِي الجَامِعَةِ، أَمَّا لِكَيْ أُصْبِحَ كَهْرَبَائِيًّا فَالتَّدْرِيبُ أَفْضَلُ.', 'True. To become a doctor I must study at university; but to become an electrician, training is better.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: choose YOUR route and defend it — your partner argues for the other route.',
  },
  questions: [
    { q: 'مَا الطَّرِيقُ إِلَى وَظِيفَةِ أَحْلَامِكَ؟', en: 'What is the route to your dream job?', start: 'لِكَيْ أُصْبِحَ … يَجِبُ أَنْ …', more: '… ثُمَّ …' },
    { q: 'مَا مَزَايَا الجَامِعَةِ؟', en: 'What are the advantages of university?', start: 'مِنْ مَزَايَا الجَامِعَةِ أَنَّ …', more: '… وَلٰكِنَّ …' },
    { q: 'هَلِ التَّدْرِيبُ العَمَلِيُّ مُفِيدٌ؟', en: 'Is a work placement useful?', start: 'نَعَمْ، لِأَنَّهُ …', more: '… مَثَلًا …' },
    { q: 'مَا مُتَطَلَّبَاتُ القَبُولِ فِي كُلِّيَّةِ الطِّبِّ؟', en: 'What are the entry requirements for medicine?', start: 'يَجِبُ أَنْ يَحْصُلَ الطَّالِبُ عَلَى …', more: '… فِي الكِيمْيَاءِ وَ …' },
    { q: 'مَاذَا سَتَفْعَلُ إِذَا حَصَلْتَ عَلَى مِنْحَةٍ دِرَاسِيَّةٍ؟', en: 'What will you do if you get a scholarship?', start: 'إِذَا حَصَلْتُ عَلَى مِنْحَةٍ، فَسَوْفَ …', more: '… لِكَيْ …' },
  ],
  card: {
    title: 'Role-play card — at a college open day', ar: 'يَوْمٌ مَفْتُوحٌ فِي الكُلِّيَّةِ', you: 'a student visitor', them: 'a college tutor',
    tasks: [
      { ex: 'أَيَّ دَوْرَةٍ تُرِيدُ أَنْ تَدْرُسَ؟', task: 'Course + goal.', plan: 'الدَّوْرَةُ ← أُرِيدُ أَنْ أَدْرُسَ … لِكَيْ …', model: 'أُرِيدُ أَنْ أَدْرُسَ التَّصْمِيمَ لِكَيْ أُصْبِحَ مُصَمِّمَ أَزْيَاءٍ.', modelEn: 'I want to study design so that I become a fashion designer.' },
      { ex: 'هَلْ تَعْرِفُ مُتَطَلَّبَاتِ القَبُولِ؟', task: 'Ask about requirements.', plan: 'سُؤَالٌ ← لَا، مَا الدَّرَجَاتُ المَطْلُوبَةُ؟', model: 'لَيْسَ تَمَامًا. مَا الدَّرَجَاتُ المَطْلُوبَةُ، مِنْ فَضْلِكَ؟', modelEn: 'Not exactly. What grades are needed, please?' },
      { ex: 'نَطْلُبُ خَمْسَ شَهَادَاتٍ، وَمَلَفًّا فَنِّيًّا.', task: 'React + plan.', plan: '', model: 'مُمْتَازٌ! سَأُحَضِّرُ مَلَفًّا بِرُسُومَاتِي هٰذَا الصَّيْفَ.', modelEn: 'Excellent! I will prepare a portfolio of my drawings this summer.' },
      { unexpected: true, ex: 'هَلْ فَكَّرْتَ فِي التَّلْمَذَةِ المِهَنِيَّةِ بَدَلًا مِنْ ذٰلِكَ؟', task: 'Compare the routes.', plan: '', model: 'نَعَمْ، هِيَ أَرْخَصُ، وَلٰكِنَّ الدَّوْرَةَ هُنَا أَكْثَرُ إِبْدَاعًا، لِذٰلِكَ أُفَضِّلُهَا.', modelEn: 'Yes, it is cheaper, but the course here is more creative, so I prefer it.' },
    ],
    girl: 'to a girl: تُرِيدِينَ · تَعْرِفِينَ · فَكَّرْتِ · مُصَمِّمَةَ أَزْيَاءٍ',
    notes: 'The route: li-kay uṣbiḥa … yajibu an … · comparing routes with afʿalu / akthar + noun.',
  },
  talk: {
    title: 'One minute: two routes compared', ar: 'طَرِيقَانِ',
    text: 'Compare two routes (e.g. university vs apprenticeship) for one minute, then say which you would choose for YOUR dream job.',
    routes: {
      core: 'Two advantages of each route.',
      develop: 'Add comparatives (أَقْصَرُ · أَرْخَصُ · أَكْثَرُ عَمَلِيَّةً) and لِكَيْ أُصْبِحَ … يَجِبُ أَنْ …',
      stretch: 'Add a condition (إِذَا … فَسَوْفَ …) and a balanced judgement.',
    },
  },
  builder: [
    { en: 'To become a lawyer, I must study law.', cols: [['لِكَيْ أُصْبِحَ مُحَامِيًا،', 'لِكَيْ أُصْبِحُ مُحَامٍ،'], ['يَجِبُ أَنْ', 'يَجِبُ'], ['أَدْرُسَ القَانُونَ.', 'أَدْرُسُ القَانُونَ.']], key: [0, 0, 0], why: 'لِكَيْ / أَنْ + -a; أُصْبِحَ + -an (مُحَامِيًا).' },
    { en: 'An apprenticeship is cheaper than university.', cols: [['التَّلْمَذَةُ المِهَنِيَّةُ', 'التَّلْمَذَةَ المِهَنِيَّةَ'], ['أَرْخَصُ', 'أَرْخَصَةٌ'], ['مِنَ الجَامِعَةِ.', 'مِنَ الجَامِعَةُ.']], key: [0, 0, 0], why: 'أَفْعَلُ + مِنْ, no feminine ending; مِنْ + genitive.' },
    { en: 'If I get the grades, I will go to college.', cols: [['إِذَا حَصَلْتُ عَلَى', 'إِذَا أَحْصُلُ'], ['الدَّرَجَاتِ،', 'الدَّرَجَاتُ،'], ['فَسَوْفَ أَذْهَبُ إِلَى الكُلِّيَّةِ.', 'سَوْفَ أَذْهَبَ إِلَى الكُلِّيَّةِ.']], key: [0, 0, 0], why: 'إِذَا + past; حَصَلَ عَلَى + genitive; fa- + future.' },
  ],
  errors: [
    { wrong: 'لِكَيْ أُصْبِحُ مُهَنْدِسًا يَجِبُ أَنْ أَدْرُسُ.', hint: 'Two verbs after particles.', right: 'لِكَيْ أُصْبِحَ مُهَنْدِسًا يَجِبُ أَنْ أَدْرُسَ.', why: 'لِكَيْ / أَنْ + -a.' },
    { wrong: 'الجَامِعَةُ أَغْلَى مِنَ التَّدْرِيبُ.', hint: 'After مِنْ …', right: 'الجَامِعَةُ أَغْلَى مِنَ التَّدْرِيبِ.', why: 'مِنْ + genitive.' },
    { wrong: 'حَصَلْتُ الشَّهَادَةَ.', hint: 'Missing preposition.', right: 'حَصَلْتُ عَلَى الشَّهَادَةِ.', why: 'حَصَلَ عَلَى …' },
  ],
  task: {
    title: 'University or apprenticeship? A balanced view', ar: 'الجَامِعَةُ أَمِ التَّلْمَذَةُ؟ رَأْيٌ مُتَوَازِنٌ',
    text: 'Write a balanced paragraph (about 60–80 words) for a school careers newsletter. Include: • two advantages of university and two of an apprenticeship or training • two comparatives • the route to YOUR dream job (لِكَيْ أُصْبِحَ … يَجِبُ أَنْ …) • a condition (إِذَا … فَسَوْفَ …) • your conclusion.',
    phrases: [['مِنْ مَزَايَا … أَنَّ …', 'one advantage of … is that …'], ['… أَقْصَرُ / أَرْخَصُ مِنْ …', '… shorter / cheaper than …'], ['لِكَيْ أُصْبِحَ … يَجِبُ أَنْ …', 'to become … I must …'], ['فِي النِّهَايَةِ، الطَّرِيقُ الأَفْضَلُ يَعْتَمِدُ عَلَى …', 'in the end, the best route depends on …']],
    coreFrames: [
      { ar: 'مِنْ مَزَايَا الجَامِعَةِ أَنَّ ______ .', en: 'One advantage of university is that …' },
      { ar: 'أَمَّا التَّلْمَذَةُ المِهَنِيَّةُ فَهِيَ ______ مِنَ الجَامِعَةِ.', en: 'An apprenticeship is … than university.' },
      { ar: 'لِكَيْ أُصْبِحَ ______ ، يَجِبُ أَنْ ______ .', en: 'To become …, I must …' },
      { ar: 'فِي النِّهَايَةِ ______ .', en: 'In the end …' },
    ],
    developFrames: [
      { ar: 'إِذَا حَصَلْتُ عَلَى ______ ، فَسَوْفَ ______ .', en: 'If I get …, I will …' },
      { ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّ ______ .', en: 'Although …, …' },
    ],
    bank: ['جَامِعَةٌ · كُلِّيَّةٌ', 'مَعْهَدٌ مِهَنِيٌّ', 'تَلْمَذَةٌ مِهَنِيَّةٌ', 'تَدْرِيبٌ عَمَلِيٌّ', 'شَهَادَةٌ · دَوْرَةٌ تَدْرِيبِيَّةٌ', 'مِنْحَةٌ دِرَاسِيَّةٌ', 'خِبْرَةٌ عَمَلِيَّةٌ', 'أَقْصَرُ · أَرْخَصُ · أَغْلَى'],
    model: {
      text: 'مِنْ مَزَايَا الجَامِعَةِ أَنَّ الشَّهَادَةَ مُهِمَّةٌ لِوَظَائِفَ كَثِيرَةٍ، وَأَنَّ الطَّالِبَ يَتَعَلَّمُ كَثِيرًا مِنَ الأَسَاتِذَةِ. أَمَّا التَّلْمَذَةُ المِهَنِيَّةُ فَهِيَ أَقْصَرُ وَأَرْخَصُ مِنَ الجَامِعَةِ، كَمَا أَنَّ المُتَدَرِّبَ يَكْسِبُ رَاتِبًا وَخِبْرَةً عَمَلِيَّةً. لِكَيْ أُصْبِحَ مُعَلِّمَةَ عُلُومٍ، يَجِبُ أَنْ أَدْرُسَ فِي الجَامِعَةِ أَرْبَعَ سَنَوَاتٍ. إِذَا حَصَلْتُ عَلَى مِنْحَةٍ دِرَاسِيَّةٍ، فَسَوْفَ أَدْرُسُ فِي جَامِعَةِ لَنْدَنَ. عَلَى الرَّغْمِ مِنْ أَنَّ الجَامِعَةَ غَالِيَةٌ، فَإِنَّهَا الطَّرِيقُ الوَحِيدُ إِلَى وَظِيفَتِي. فِي النِّهَايَةِ، الطَّرِيقُ الأَفْضَلُ يَعْتَمِدُ عَلَى الوَظِيفَةِ.',
      en: '“One advantage of university is that the degree matters for many jobs, and students learn a lot from lecturers. An apprenticeship is shorter and cheaper than university, and the apprentice earns a wage and practical experience. To become a science teacher, I must study at university for four years. If I get a scholarship, I will study at a London university. Although university is expensive, it is the only route to my job. In the end, the best route depends on the job.”',
      find: ['مِنْ مَزَايَا الجَامِعَةِ أَنَّ', 'أَقْصَرُ وَأَرْخَصُ مِنَ الجَامِعَةِ', 'لِكَيْ أُصْبِحَ', 'إِذَا حَصَلْتُ عَلَى مِنْحَةٍ'],
    },
  },
  checkCore: 'give advantages of two routes and the route to your own job?',
  checkDevelop: 'use comparatives, لِكَيْ … يَجِبُ أَنْ … and an إِذَا condition?',
});
