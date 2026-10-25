'use strict';
/* Practice Room · F4-L09 · Extended writing — my school. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f4-l09',
  arShort: 'مَدْرَسَتِي',
  grammar: 'email vs article format; three purposeful paragraphs (my school · my day and subjects · rules and opinion); connectors; topic sentences',
  focus: 'Students run their own speaking and writing practice for an extended text about school: say the format words, rehearse a model plan aloud, answer planning cards, interview a buddy to build a plan, give a 30-second oral draft, then build, fix and write a three-paragraph email about their school.',
  words1: 'Formats: email and article', words2: 'Connectors for a longer text',
  addWords: [['أَوَّلًا · ثُمَّ', 'first · then'], ['بِالإِضَافَةِ إِلَى ذٰلِكَ', 'in addition'], ['لِأَنَّ · لِذٰلِكَ', 'because · so'], ['لٰكِنَّ', 'but'], ['فِي رَأْيِي', 'in my opinion'], ['فِي النِّهَايَةِ', 'finally']],
  dialogue: {
    title: 'Say the plan out loud — an email to a pen-friend', ar: 'خُطَّةُ الرِّسَالَةِ',
    lines: [
      ['', 'مَرْحَبًا يَا يَاسِرُ! (التَّحِيَّةُ)', 'Hello Yasser! (the greeting)'],
      ['1', 'أَدْرُسُ فِي مَدْرَسَةِ المَدِينَةِ، وَهِيَ كَبِيرَةٌ وَحَدِيثَةٌ.', 'I study at Al Madina School; it is big and modern.'],
      ['2', 'يَبْدَأُ يَوْمِي فِي الثَّامِنَةِ، وَمَادَّتِي المُفَضَّلَةُ العُلُومُ لِأَنَّهَا عَمَلِيَّةٌ.', 'My day starts at eight, and my favourite subject is science because it is practical.'],
      ['3', 'يَجِبُ أَنْ نَلْبَسَ اللِّبَاسَ المَدْرَسِيَّ. فِي رَأْيِي هٰذِهِ القَاعِدَةُ مُفِيدَةٌ.', 'We must wear uniform. In my opinion this rule is useful.'],
      ['', 'مَعَ السَّلَامَةِ! (الخَاتِمَةُ وَالتَّوْقِيعُ)', 'Goodbye! (the closing and signature)'],
    ],
    foot: 'Take turns reading the plan. Then each Speaker says THEIR OWN three-paragraph plan aloud — greeting, one sentence per paragraph, closing.',
  },
  questions: [
    { q: 'أَيْنَ تَدْرُسُ؟ صِفْ مَدْرَسَتَكَ.', en: 'Where do you study? Describe it. (paragraph 1)', start: 'أَدْرُسُ فِي … ، وَهِيَ …', more: '… فِيهَا … طَالِبٍ' },
    { q: 'كَيْفَ يَوْمُكَ فِي المَدْرَسَةِ؟', en: 'What is your school day like? (paragraph 2)', start: 'يَبْدَأُ يَوْمِي فِي …', more: '… ثُمَّ …' },
    { q: 'مَا مَادَّتُكَ المُفَضَّلَةُ؟ وَلِمَاذَا؟', en: 'Favourite subject and why? (paragraph 2)', start: 'مَادَّتِي المُفَضَّلَةُ …', more: '… لِأَنَّهُ / لِأَنَّهَا …' },
    { q: 'مَا القَوَاعِدُ فِي مَدْرَسَتِكَ؟', en: 'What are the rules? (paragraph 3)', start: 'يَجِبُ أَنْ … · لَا يَجُوزُ أَنْ …', more: '… فِي رَأْيِي …' },
    { q: 'هَلْ تُحِبُّ مَدْرَسَتَكَ؟ لِمَاذَا؟', en: 'Do you like your school? (paragraph 3)', start: 'نَعَمْ / لَا، لِأَنَّ …', more: '… لٰكِنَّ …' },
  ],
  qTitle: 'Plan by speaking: one card per paragraph',
  card: {
    title: 'Card — interview your buddy, then swap plans', ar: 'أُقَابِلُ زَمِيلِي', you: 'the interviewer', them: 'your buddy (the writer)',
    tasks: [
      { ex: 'كَمْ طَالِبًا فِي مَدْرَسَتِكَ؟', task: 'Buddy answers; you note the number.', plan: 'كَمْ ← فِي مَدْرَسَتِي حَوَالَيْ … طَالِبٍ', model: 'فِي مَدْرَسَتِي حَوَالَيْ أَلْفِ طَالِبٍ.', modelEn: 'There are about a thousand students in my school.' },
      { ex: 'مَا أَجْمَلُ مَكَانٍ فِيهَا؟', task: 'Buddy names a place + why.', plan: 'مَا ← أَجْمَلُ مَكَانٍ … لِأَنَّ …', model: 'أَجْمَلُ مَكَانٍ المَكْتَبَةُ، لِأَنَّهَا هَادِئَةٌ.', modelEn: 'The nicest place is the library, because it is quiet.' },
      { ex: 'مَا المَادَّةُ الصَّعْبَةُ عِنْدَكَ؟', task: 'Buddy names one + a “but”.', plan: 'مَا ← … صَعْبٌ / صَعْبَةٌ ، لٰكِنَّ …', model: 'الرِّيَاضِيَّاتُ صَعْبَةٌ، لٰكِنَّ المُعَلِّمَ يُسَاعِدُنَا.', modelEn: 'Maths is difficult, but the teacher helps us.' },
      { ex: 'مَا القَاعِدَةُ الَّتِي لَا تُحِبُّهَا؟', task: 'Buddy gives a rule + opinion.', plan: 'مَا ← لَا يَجُوزُ أَنْ … ، وَفِي رَأْيِي …', model: 'لَا يَجُوزُ أَنْ نَأْكُلَ فِي الصَّفِّ، وَفِي رَأْيِي هٰذَا صَعْبٌ!', modelEn: 'We must not eat in class — in my opinion that is hard!' },
    ],
    foot: 'Interviewer asks and notes English keywords; the writer answers in full Arabic. Give the notes to the writer — that is their plan for Step 8. Swap roles.',
    girl: 'مَدْرَسَتِكِ · عِنْدَكِ · تُحِبِّينَهَا',
    notes: 'Peer interview turns into each writer’s plan for the extended text.',
  },
  talk: {
    title: '30 seconds: my email, said aloud', ar: 'رِسَالَتِي بِصَوْتٍ عَالٍ',
    text: 'Say your whole email aloud in 30 seconds BEFORE you write it: greeting, three paragraphs (one or two sentences each), closing.',
    routes: {
      core: 'Greeting + three sentences + closing.',
      develop: 'Two sentences per paragraph with لِأَنَّ.',
      stretch: 'Add بِالإِضَافَةِ إِلَى ذٰلِكَ · لٰكِنَّ · فِي رَأْيِي.',
    },
  },
  builder: [
    { en: 'My school is big, and in addition it has a swimming pool.', cols: [['مَدْرَسَتِي كَبِيرَةٌ،', 'مَدْرَسَتِي كَبِيرٌ،'], ['وَبِالإِضَافَةِ إِلَى ذٰلِكَ', 'وَلِأَنَّ'], ['فِيهَا مَسْبَحٌ.', 'فِيهِ مَسْبَحٌ.']], key: [0, 0, 0], why: 'School (f.) → كَبِيرَةٌ … فِيهَا; in addition = بِالإِضَافَةِ إِلَى ذٰلِكَ.' },
    { en: 'My day starts at eight, then I have maths.', cols: [['يَبْدَأُ يَوْمِي', 'تَبْدَأُ يَوْمِي'], ['فِي الثَّامِنَةِ،', 'فِي ثَمَانِيَةٍ،'], ['ثُمَّ عِنْدِي رِيَاضِيَّاتٌ.', 'ثُمَّ عِنْدَهُ رِيَاضِيَّاتٌ.']], key: [0, 0, 0], why: 'يَوْمٌ (m.) → يَبْدَأُ; the time = الثَّامِنَةِ.' },
    { en: 'In my opinion this rule is important.', cols: [['فِي رَأْيِي', 'فِي رَأْيُ'], ['هٰذِهِ القَاعِدَةُ', 'هٰذَا القَاعِدَةُ'], ['مُهِمَّةٌ.', 'مُهِمٌّ.']], key: [0, 0, 0], why: 'قَاعِدَةٌ (f.) → هٰذِهِ … مُهِمَّةٌ.' },
  ],
  errors: [
    { wrong: 'مَرْحَبًا! أَدْرُسُ فِي مَدْرَسَةِ …', hint: 'No closing at the end — An email needs …', right: '… مَعَ السَّلَامَةِ، سَلْمَى.', why: 'An email needs a greeting AND a closing + signature.' },
    { wrong: 'أُحِبُّ مَدْرَسَتِي لِأَنَّهُ كَبِيرٌ.', hint: 'مَدْرَسَةٌ is feminine.', right: 'أُحِبُّ مَدْرَسَتِي لِأَنَّهَا كَبِيرَةٌ.', why: 'Feminine → لِأَنَّهَا كَبِيرَةٌ.' },
    { wrong: 'يَجِبُ أَنْ نَلْبَسُ اللِّبَاسَ المَدْرَسِيَّ.', hint: 'After أَنْ …', right: 'يَجِبُ أَنْ نَلْبَسَ اللِّبَاسَ المَدْرَسِيَّ.', why: 'أَنْ + verb ending in -a.' },
  ],
  task: {
    title: 'An email about my school', ar: 'رِسَالَةٌ عَنْ مَدْرَسَتِي',
    text: 'Write an email (about 60–80 words) to a pen-friend in Jordan, using your buddy’s notes as your plan. Paragraph 1: your school (where, size, one place you like). Paragraph 2: your day and favourite subject, with a reason. Paragraph 3: one rule and your opinion of school. Include a greeting, a closing and at least four connectors.',
    range: [45, 95],
    phrases: [['أَدْرُسُ فِي … ، وَهِيَ …', 'I study at …; it is …'], ['يَبْدَأُ يَوْمِي فِي … ، ثُمَّ …', 'my day starts at …, then …'], ['يَجِبُ أَنْ … ، وَفِي رَأْيِي …', 'we must …, and in my opinion …'], ['بِالإِضَافَةِ إِلَى ذٰلِكَ · لٰكِنَّ', 'in addition · but']],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ !', en: 'Hello …!' },
      { ar: 'أَدْرُسُ فِي ______ ، وَهِيَ ______ وَ ______ .', en: 'I study at …; it is … and …' },
      { ar: 'يَبْدَأُ يَوْمِي فِي ______ . مَادَّتِي المُفَضَّلَةُ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'My day starts at … My favourite subject is … because …' },
      { ar: 'يَجِبُ أَنْ ______ . فِي رَأْيِي ______ .', en: 'We must … In my opinion …' },
      { ar: 'مَعَ السَّلَامَةِ، ______', en: 'Goodbye, …' },
    ],
    developFrames: [
      { ar: 'بِالإِضَافَةِ إِلَى ذٰلِكَ، فِي مَدْرَسَتِي ______ .', en: 'In addition, my school has …' },
      { ar: '______ صَعْبٌ / صَعْبَةٌ، لٰكِنَّ ______ .', en: '… is difficult, but …' },
    ],
    bank: ['مَرْحَبًا يَا …', 'أَدْرُسُ فِي', 'يَبْدَأُ يَوْمِي', 'مَادَّتِي المُفَضَّلَةُ', 'يَجِبُ أَنْ · لَا يَجُوزُ أَنْ', 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'لِأَنَّ · لٰكِنَّ', 'مَعَ السَّلَامَةِ'],
    model: {
      text: `مَرْحَبًا يَا يَاسِرُ،
أَدْرُسُ فِي مَدْرَسَةِ النُّورِ فِي لَنْدَنَ، وَهِيَ كَبِيرَةٌ وَحَدِيثَةٌ. بِالإِضَافَةِ إِلَى ذٰلِكَ، فِيهَا مَكْتَبَةٌ جَمِيلَةٌ وَمَلْعَبٌ وَاسِعٌ.
يَبْدَأُ يَوْمِي فِي الثَّامِنَةِ وَالنِّصْفِ، وَعِنْدِي سِتُّ حِصَصٍ. مَادَّتِي المُفَضَّلَةُ العُلُومُ، لِأَنَّهَا عَمَلِيَّةٌ وَشَيِّقَةٌ.
يَجِبُ أَنْ نَلْبَسَ اللِّبَاسَ المَدْرَسِيَّ، وَلَا يَجُوزُ أَنْ نَسْتَعْمِلَ الهَاتِفَ. فِي رَأْيِي القَوَاعِدُ مُفِيدَةٌ، لٰكِنَّ الوَاجِبَاتِ كَثِيرَةٌ!
مَعَ السَّلَامَةِ،
آدَمُ`,
      en: '“Hello Yasser, I study at Al-Nour School in London; it is big and modern. In addition, it has a lovely library and a wide playground. / My day starts at half past eight, and I have six lessons. My favourite subject is science, because it is practical and engaging. / We must wear uniform, and we must not use phones. In my opinion the rules are useful, but there is a lot of homework! Goodbye, Adam.”',
      find: ['وَهِيَ كَبِيرَةٌ وَحَدِيثَةٌ', 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'لِأَنَّهَا عَمَلِيَّةٌ', 'لٰكِنَّ الوَاجِبَاتِ'],
    },
  },
  checkCore: 'write three paragraphs with a greeting and a closing?',
  checkDevelop: 'use at least four connectors and a reason in each paragraph?',
});
