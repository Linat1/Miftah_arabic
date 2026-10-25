'use strict';
/* Practice Room · F4-L06 · School rules and obligations — must and must not. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f4-l06',
  arShort: 'القَوَاعِدُ المَدْرَسِيَّةُ',
  grammar: 'yajibu an + verb in -a (must); lā yajūzu an + verb in -a (must not); yumkinu an (may); imperatives to a boy / girl / group (iḥtarim · iḥtarimī · iḥtarimū); lā + jussive (lā taʾkul)',
  focus: 'Students run their own speaking and writing practice with school rules: say the rule words, act a short dialogue, answer question cards, do a role-play card showing a new student the rules, give a 30-second talk, then build, fix and write a rulebook for their class or an online classroom.',
  words1: 'Rules and school life', words2: 'Must, must not, may',
  addWords: [['يَجِبُ أَنْ …', 'you must …'], ['لَا يَجُوزُ أَنْ …', 'you must not …'], ['يُمْكِنُ أَنْ …', 'you may / can …'], ['احْتَرِمْ · احْتَرِمِي', 'respect! (boy · girl)'], ['لَا تَأْكُلْ', 'don’t eat! (to a boy)'], ['فِي الوَقْتِ', 'on time']],
  dialogue: {
    title: 'What are the rules here?', ar: 'مَا القَوَاعِدُ هُنَا؟',
    lines: [
      ['A', 'مَا القَوَاعِدُ فِي مَدْرَسَتِكُمْ؟', 'What are the rules at your school?'],
      ['B', 'يَجِبُ أَنْ نَلْبَسَ اللِّبَاسَ المَدْرَسِيَّ كُلَّ يَوْمٍ.', 'We must wear school uniform every day.'],
      ['A', 'هَلْ يُمْكِنُ أَنْ نَسْتَعْمِلَ الهَاتِفَ؟', 'Can we use the phone?'],
      ['B', 'لَا، لَا يَجُوزُ أَنْ نَسْتَعْمِلَ الهَاتِفَ فِي الصَّفِّ.', 'No, we must not use the phone in class.'],
      ['A', 'وَمَاذَا عَنِ الوَاجِبِ المَنْزِلِيِّ؟', 'And what about homework?'],
      ['B', 'يَجِبُ أَنْ نُسَلِّمَهُ فِي الوَقْتِ، وَلَا يَجُوزُ أَنْ نَتَأَخَّرَ.', 'We must hand it in on time, and we must not be late.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: give YOUR school’s real rules — one “must”, one “must not”, one “may”.',
  },
  questions: [
    { q: 'مَاذَا يَجِبُ أَنْ تَلْبَسَ فِي المَدْرَسَةِ؟', en: 'What must you wear at school?', start: 'يَجِبُ أَنْ أَلْبَسَ …', more: '… لَوْنُهُ …' },
    { q: 'مَاذَا لَا يَجُوزُ أَنْ تَفْعَلَ فِي الصَّفِّ؟', en: 'What must you not do in class?', start: 'لَا يَجُوزُ أَنْ …', more: '… لِأَنَّ …' },
    { q: 'هَلْ يُمْكِنُ أَنْ تَأْكُلَ فِي الصَّفِّ؟', en: 'Can you eat in class?', start: 'لَا، لَا يَجُوزُ … / نَعَمْ، يُمْكِنُ …', more: '… لٰكِنْ يُمْكِنُ أَنْ نَأْكُلَ فِي …' },
    { q: 'مَا رَأْيُكَ فِي اللِّبَاسِ المَدْرَسِيِّ؟', en: 'What do you think of school uniform?', start: 'فِي رَأْيِي …', more: '… لِأَنَّهُ …' },
    { q: 'مَا أَهَمُّ قَاعِدَةٍ فِي رَأْيِكَ؟', en: 'What is the most important rule?', start: 'أَهَمُّ قَاعِدَةٍ: يَجِبُ أَنْ …', more: '… لِأَنَّ الاحْتِرَامَ …' },
  ],
  card: {
    title: 'Role-play card — explaining the rules to a new student', ar: 'أَشْرَحُ القَوَاعِدَ', you: 'a school buddy', them: 'a new student (a girl)',
    tasks: [
      { ex: 'هَلْ يَجِبُ أَنْ أَلْبَسَ اللِّبَاسَ المَدْرَسِيَّ؟', task: 'Say yes + what it is.', plan: 'هَلْ ← نَعَمْ، يَجِبُ أَنْ تَلْبَسِي …', model: 'نَعَمْ، يَجِبُ أَنْ تَلْبَسِي التَّنُّورَةَ الزَّرْقَاءَ وَالقَمِيصَ الأَبْيَضَ.', modelEn: 'Yes, you must wear the blue skirt and the white shirt.' },
      { ex: 'هَلْ يُمْكِنُ أَنْ أَسْتَعْمِلَ هَاتِفِي؟', task: 'Say no + when it is allowed.', plan: 'هَلْ ← لَا، لَا يَجُوزُ … ، لٰكِنْ يُمْكِنُ فِي …', model: 'لَا، لَا يَجُوزُ فِي الصَّفِّ، لٰكِنْ يُمْكِنُ فِي الاسْتِرَاحَةِ.', modelEn: 'No, not in class, but you can at break.' },
      { ex: 'مَتَى يَجِبُ أَنْ أَصِلَ؟', task: 'Give the time.', plan: 'مَتَى ← يَجِبُ أَنْ تَصِلِي قَبْلَ …', model: 'يَجِبُ أَنْ تَصِلِي قَبْلَ السَّاعَةِ الثَّامِنَةِ وَالرُّبْعِ.', modelEn: 'You must arrive before quarter past eight.' },
      { ex: 'وَمَاذَا أَفْعَلُ إِذَا تَأَخَّرْتُ؟', task: 'Give advice (an imperative).', plan: 'إِذَا ← اذْهَبِي إِلَى …', model: 'اذْهَبِي إِلَى المَكْتَبِ أَوَّلًا، وَقُولِي: أَنَا آسِفَةٌ.', modelEn: 'Go to the office first, and say: I’m sorry.' },
    ],
    girl: 'this card is written for a new GIRL (-ī endings); to a boy: تَلْبَسَ · تَصِلَ · اذْهَبْ · قُلْ',
    notes: 'Language: yajibu an / lā yajūzu an + verb in -a · imperatives to a girl (-ī) · qabla + time.',
  },
  talk: {
    title: '30 seconds: the rules of our online classroom', ar: 'قَوَاعِدُ صَفِّنَا عَلَى الإِنْتَرْنِتِ',
    text: 'Give the rules of your Teams lesson in 30 seconds: what you must do, what you must not do, and what you may do — with one reason.',
    routes: {
      core: 'Two يَجِبُ أَنْ … and one لَا يَجُوزُ أَنْ …',
      develop: 'Add يُمْكِنُ أَنْ … and a reason with لِأَنَّ.',
      stretch: 'Give the rules as instructions to the group: افْتَحُوا … · لَا تَتَكَلَّمُوا …',
    },
  },
  builder: [
    { en: 'We must respect the teachers.', cols: [['يَجِبُ', 'لَا يَجُوزُ'], ['أَنْ نَحْتَرِمَ', 'أَنْ نَحْتَرِمُ'], ['المُعَلِّمِينَ.', 'المُعَلِّمُونَ.']], key: [0, 0, 0], why: 'Must = يَجِبُ أَنْ + verb ending in -a (نَحْتَرِمَ).' },
    { en: 'You must not run in the corridor.', cols: [['لَا يَجُوزُ', 'يَجِبُ'], ['أَنْ تَرْكُضَ', 'تَرْكُضُ'], ['فِي المَمَرِّ.', 'فِي المَمَرُّ.']], key: [0, 0, 0], why: 'Must not = لَا يَجُوزُ أَنْ + verb in -a.' },
    { en: 'Listen, everyone! (to a group)', cols: [['اسْتَمِعُوا', 'اسْتَمِعْ'], ['جَمِيعًا', 'وَحْدَكَ'], ['مِنْ فَضْلِكُمْ!', 'مِنْ فَضْلِكَ!']], key: [0, 0, 0], why: 'To a group → -ū (اسْتَمِعُوا) and فَضْلِكُمْ.' },
  ],
  errors: [
    { wrong: 'يَجِبُ أَنْ نَلْبَسُ اللِّبَاسَ المَدْرَسِيَّ.', hint: 'The verb after أَنْ.', right: 'يَجِبُ أَنْ نَلْبَسَ اللِّبَاسَ المَدْرَسِيَّ.', why: 'أَنْ + verb ending in -a.' },
    { wrong: 'لَا يَجِبُ أَنْ تَأْكُلَ فِي الصَّفِّ. (must not)', hint: 'Which phrase means “must not”?', right: 'لَا يَجُوزُ أَنْ تَأْكُلَ فِي الصَّفِّ.', why: 'Must not = لَا يَجُوزُ أَنْ.' },
    { wrong: 'افْتَحْ كِتَابَكِ يَا هُدَى.', hint: 'Huda is a girl.', right: 'افْتَحِي كِتَابَكِ يَا هُدَى.', why: 'Imperative to a girl → -ī: افْتَحِي.' },
  ],
  task: {
    title: 'A rulebook for our class', ar: 'قَوَاعِدُ صَفِّنَا',
    text: 'Write a rulebook (about 40–60 words) for your class or your online lesson. Include: • three things you must do • two things you must not do • one thing you may do • one reason why a rule is important.',
    phrases: [['يَجِبُ أَنْ …', 'we must …'], ['لَا يَجُوزُ أَنْ …', 'we must not …'], ['يُمْكِنُ أَنْ …', 'we may …'], ['هٰذِهِ القَاعِدَةُ مُهِمَّةٌ لِأَنَّ …', 'this rule is important because …']],
    coreFrames: [
      { ar: 'يَجِبُ أَنْ نَصِلَ ______ .', en: 'We must arrive …' },
      { ar: 'يَجِبُ أَنْ ______ .', en: 'We must …' },
      { ar: 'لَا يَجُوزُ أَنْ ______ .', en: 'We must not …' },
      { ar: 'يُمْكِنُ أَنْ ______ .', en: 'We may …' },
    ],
    developFrames: [
      { ar: 'فِي الصَّفِّ عَلَى الإِنْتَرْنِتِ يَجِبُ أَنْ ______ ، وَلَا يَجُوزُ أَنْ ______ .', en: 'In the online class we must …, and we must not …' },
      { ar: 'أَهَمُّ قَاعِدَةٍ ______ لِأَنَّ ______ .', en: 'The most important rule is … because …' },
    ],
    bank: ['يَجِبُ أَنْ', 'لَا يَجُوزُ أَنْ', 'يُمْكِنُ أَنْ', 'نَحْتَرِمَ · نَسْتَمِعَ', 'نَلْبَسَ · نَصِلَ', 'الهَاتِفُ المَحْمُولُ', 'الوَاجِبُ المَنْزِلِيُّ', 'فِي الوَقْتِ'],
    model: {
      text: 'قَوَاعِدُ صَفِّنَا: يَجِبُ أَنْ نَصِلَ فِي الوَقْتِ، وَيَجِبُ أَنْ نَحْتَرِمَ المُعَلِّمَةَ وَالزُّمَلَاءَ. يَجِبُ أَنْ نُسَلِّمَ الوَاجِبَ يَوْمَ الخَمِيسِ. لَا يَجُوزُ أَنْ نَسْتَعْمِلَ الهَاتِفَ فِي الحِصَّةِ، وَلَا يَجُوزُ أَنْ نَتَكَلَّمَ مَعًا عِنْدَمَا تَشْرَحُ المُعَلِّمَةُ. يُمْكِنُ أَنْ نَشْرَبَ المَاءَ. أَهَمُّ قَاعِدَةٍ الاحْتِرَامُ، لِأَنَّ الصَّفَّ عَائِلَةٌ وَاحِدَةٌ.',
      en: '“Our class rules: we must arrive on time, and we must respect the teacher and our classmates. We must hand in homework on Thursday. We must not use our phones in the lesson, and we must not talk together when the teacher is explaining. We may drink water. The most important rule is respect, because the class is one family.”',
      find: ['يَجِبُ أَنْ نَصِلَ فِي الوَقْتِ', 'لَا يَجُوزُ أَنْ نَسْتَعْمِلَ', 'يُمْكِنُ أَنْ نَشْرَبَ', 'لِأَنَّ الصَّفَّ'],
    },
  },
  checkCore: 'use يَجِبُ أَنْ and لَا يَجُوزُ أَنْ correctly?',
  checkDevelop: 'end every verb after أَنْ in -a?',
});
