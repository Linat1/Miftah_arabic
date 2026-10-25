'use strict';
/* Practice Room · F4-L01 · School subjects — what do you study? Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f4-l01',
  arShort: 'المَوَادُّ الدِّرَاسِيَّةُ',
  grammar: 'adrusu / yadrusu / tadrusu + subject; uḥibbu …; li-annahu (m. subject) / li-annahā (f. subject) + adjective that agrees',
  focus: 'Students run their own speaking and writing practice about school subjects: say the subject words, act a short dialogue, answer question cards, do a role-play card choosing options with a tutor, give a 30-second talk, then build, fix and write about their subjects with reasons.',
  words1: 'School subjects', words2: 'Describing subjects',
  dialogue: {
    title: 'What do you study?', ar: 'مَاذَا تَدْرُسُ؟',
    lines: [
      ['A', 'مَاذَا تَدْرُسُ يَوْمَ الإِثْنَيْنِ؟', 'What do you study on Monday?'],
      ['B', 'أَدْرُسُ الرِّيَاضِيَّاتِ وَالعُلُومَ وَاللُّغَةَ العَرَبِيَّةَ.', 'I study maths, science and Arabic.'],
      ['A', 'مَا مَادَّتُكَ المُفَضَّلَةُ؟', 'What is your favourite subject?'],
      ['B', 'مَادَّتِي المُفَضَّلَةُ الفَنُّ، لِأَنَّهُ مُمْتِعٌ.', 'My favourite subject is art, because it is enjoyable.'],
      ['A', 'هَلْ تُحِبُّ الجُغْرَافِيَا؟', 'Do you like geography?'],
      ['B', 'نَعَمْ، أُحِبُّهَا لِأَنَّهَا مُفِيدَةٌ، لٰكِنَّهَا صَعْبَةٌ قَلِيلًا.', 'Yes, I like it because it is useful, but it is a little difficult.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: use YOUR subjects and opinions — check لِأَنَّهُ / لِأَنَّهَا.',
  },
  questions: [
    { q: 'مَاذَا تَدْرُسُ فِي المَدْرَسَةِ؟', en: 'What do you study at school?', start: 'أَدْرُسُ … وَ… وَ…', more: '… وَأَيْضًا …' },
    { q: 'مَا مَادَّتُكَ المُفَضَّلَةُ؟', en: 'What is your favourite subject?', start: 'مَادَّتِي المُفَضَّلَةُ …', more: '… لِأَنَّهُ / لِأَنَّهَا …' },
    { q: 'هَلْ تُحِبُّ الرِّيَاضِيَّاتِ؟', en: 'Do you like maths?', start: 'نَعَمْ، أُحِبُّهَا … / لَا، …', more: '… لِأَنَّهَا …' },
    { q: 'مَا المَادَّةُ الصَّعْبَةُ فِي رَأْيِكَ؟', en: 'Which subject is difficult in your opinion?', start: 'فِي رَأْيِي … صَعْبٌ / صَعْبَةٌ', more: '… لٰكِنَّهُ / لٰكِنَّهَا مُفِيدٌ / مُفِيدَةٌ' },
    { q: 'مَاذَا يَدْرُسُ صَدِيقُكَ؟', en: 'What does your friend study?', start: 'صَدِيقِي يَدْرُسُ …', more: '… وَهُوَ يُحِبُّ …' },
  ],
  card: {
    title: 'Role-play card — choosing your subjects with the tutor', ar: 'أَخْتَارُ مَوَادِّي', you: 'a student', them: 'the form tutor',
    tasks: [
      { ex: 'مَا مَادَّتُكَ المُفَضَّلَةُ؟', task: 'Name it.', plan: 'مَا ← مَادَّتِي المُفَضَّلَةُ …', model: 'مَادَّتِي المُفَضَّلَةُ العُلُومُ.', modelEn: 'My favourite subject is science.' },
      { ex: 'لِمَاذَا؟', task: 'Give a reason (agreement!).', plan: 'لِمَاذَا ← لِأَنَّهَا … ← مُفِيدَةٌ', model: 'لِأَنَّهَا مُفِيدَةٌ وَمُمْتِعَةٌ.', modelEn: 'Because it is useful and enjoyable.' },
      { ex: 'هَلْ تُرِيدُ أَنْ تَدْرُسَ الفَنَّ أَيْضًا؟', task: 'Answer yes / no + reason.', plan: 'هَلْ ← نَعَمْ / لَا ، لِأَنَّهُ …', model: 'نَعَمْ، لِأَنَّهُ إِبْدَاعِيٌّ، وَأُحِبُّ الرَّسْمَ.', modelEn: 'Yes, because it is creative, and I love drawing.' },
      { ex: 'وَمَا المَادَّةُ الَّتِي لَا تُحِبُّهَا؟', task: 'Name one + reason.', plan: 'لَا تُحِبُّ ← لَا أُحِبُّ … لِأَنَّهُ / لِأَنَّهَا …', model: 'لَا أُحِبُّ التَّارِيخَ، لِأَنَّهُ مُمِلٌّ قَلِيلًا.', modelEn: 'I don’t like history, because it is a bit boring.' },
    ],
    girl: 'مَادَّتُكِ · تُرِيدِينَ · تُحِبِّينَهَا',
    notes: 'Language: li-annahu for a masculine subject (al-fann, al-tārīkh), li-annahā for a feminine one (al-ʿulūm, al-riyāḍiyyāt).',
  },
  talk: {
    title: '30 seconds: my subjects', ar: 'مَوَادِّي',
    text: 'Talk for 30 seconds: the subjects you study, your favourite and least favourite — each with a reason.',
    routes: {
      core: 'أَدْرُسُ … · أُحِبُّ … · لَا أُحِبُّ …',
      develop: 'Add a reason with لِأَنَّهُ / لِأَنَّهَا + an agreeing adjective.',
      stretch: 'Add a friend’s favourite (صَدِيقِي يُحِبُّ …) and لٰكِنَّ.',
    },
  },
  builder: [
    { en: 'I like science because it is useful.', cols: [['أُحِبُّ العُلُومَ', 'أُحِبُّ العُلُومُ'], ['لِأَنَّهَا', 'لِأَنَّهُ'], ['مُفِيدَةٌ.', 'مُفِيدٌ.']], key: [0, 0, 0], why: 'العُلُومُ (plural, non-human) → لِأَنَّهَا مُفِيدَةٌ.' },
    { en: 'Art is enjoyable and creative.', cols: [['الفَنُّ', 'الفَنَّ'], ['مُمْتِعٌ', 'مُمْتِعَةٌ'], ['وَإِبْدَاعِيٌّ.', 'وَإِبْدَاعِيَّةٌ.']], key: [0, 0, 0], why: 'الفَنُّ is masculine → masculine adjectives.' },
    { en: 'My sister studies computer science.', cols: [['أُخْتِي', 'أَخِي'], ['تَدْرُسُ', 'يَدْرُسُ'], ['عِلْمَ الحَاسُوبِ.', 'عِلْمُ الحَاسُوبِ.']], key: [0, 0, 0], why: 'She → تَدْرُسُ; the subject is the object → عِلْمَ.' },
  ],
  errors: [
    { wrong: 'أُحِبُّ الرِّيَاضِيَّاتِ لِأَنَّهُ سَهْلٌ.', hint: 'الرِّيَاضِيَّاتُ is a non-human plural.', right: 'أُحِبُّ الرِّيَاضِيَّاتِ لِأَنَّهَا سَهْلَةٌ.', why: 'Non-human plural → feminine singular: لِأَنَّهَا سَهْلَةٌ.' },
    { wrong: 'مَادَّتِي المُفَضَّلُ الجُغْرَافِيَا.', hint: 'مَادَّةٌ is feminine.', right: 'مَادَّتِي المُفَضَّلَةُ الجُغْرَافِيَا.', why: 'المُفَضَّلَةُ agrees with مَادَّةٌ.' },
    { wrong: 'هُوَ أَدْرُسُ التَّارِيخَ.', hint: 'He …', right: 'هُوَ يَدْرُسُ التَّارِيخَ.', why: 'He → يَدْرُسُ.' },
  ],
  task: {
    title: 'My school subjects', ar: 'مَوَادِّي الدِّرَاسِيَّةُ',
    text: 'Write a short text (about 40–60 words) for the school website. Include: • the subjects you study • your favourite subject and why • a subject you don’t like and why • a friend’s or sibling’s favourite subject.',
    phrases: [['أَدْرُسُ … وَ… وَ…', 'I study …, … and …'], ['مَادَّتِي المُفَضَّلَةُ … لِأَنَّهُ / لِأَنَّهَا …', 'my favourite subject is … because it …'], ['لَا أُحِبُّ … لِأَنَّهُ / لِأَنَّهَا …', 'I don’t like … because it …'], ['صَدِيقِي يُحِبُّ … · صَدِيقَتِي تُحِبُّ …', 'my friend likes …']],
    coreFrames: [
      { ar: 'أَدْرُسُ ______ وَ ______ وَ ______ .', en: 'I study …, … and …' },
      { ar: 'مَادَّتِي المُفَضَّلَةُ ______ .', en: 'My favourite subject is …' },
      { ar: 'أُحِبُّهُ / أُحِبُّهَا لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I like it because it is …' },
      { ar: 'لَا أُحِبُّ ______ .', en: 'I don’t like …' },
    ],
    developFrames: [
      { ar: '______ صَعْبٌ / صَعْبَةٌ، لٰكِنَّهُ / لٰكِنَّهَا ______ .', en: '… is difficult, but it is …' },
      { ar: 'صَدِيقِي يُحِبُّ ______ لِأَنَّهُ ______ .', en: 'My friend likes … because he …' },
    ],
    bank: ['الرِّيَاضِيَّاتُ · العُلُومُ', 'الفَنُّ · التَّارِيخُ', 'اللُّغَةُ العَرَبِيَّةُ', 'التَّرْبِيَةُ البَدَنِيَّةُ', 'لِأَنَّهُ · لِأَنَّهَا', 'سَهْلٌ · صَعْبٌ', 'مُفِيدٌ · مُمْتِعٌ', 'مُمِلٌّ'],
    model: {
      text: 'أَدْرُسُ فِي المَدْرَسَةِ عَشْرَ مَوَادَّ، مِثْلَ الرِّيَاضِيَّاتِ وَالعُلُومِ وَالتَّارِيخِ. مَادَّتِي المُفَضَّلَةُ اللُّغَةُ العَرَبِيَّةُ، لِأَنَّهَا جَمِيلَةٌ وَمُفِيدَةٌ، وَمُعَلِّمَتِي لَطِيفَةٌ. لَا أُحِبُّ الجُغْرَافِيَا كَثِيرًا، لِأَنَّهَا مُمِلَّةٌ قَلِيلًا. صَدِيقِي يُوسُفُ يُحِبُّ التَّرْبِيَةَ البَدَنِيَّةَ، لِأَنَّهُ رِيَاضِيٌّ وَيُحِبُّ كُرَةَ القَدَمِ.',
      en: '“At school I study ten subjects, such as maths, science and history. My favourite subject is Arabic, because it is beautiful and useful, and my teacher is kind. I don’t like geography much, because it is a bit boring. My friend Yusuf likes PE, because he is sporty and loves football.”',
      find: ['مَادَّتِي المُفَضَّلَةُ', 'لِأَنَّهَا جَمِيلَةٌ وَمُفِيدَةٌ', 'لَا أُحِبُّ الجُغْرَافِيَا', 'صَدِيقِي يُوسُفُ يُحِبُّ'],
    },
  },
  checkCore: 'name subjects and give one opinion each?',
  checkDevelop: 'choose لِأَنَّهُ / لِأَنَّهَا to match the subject, with an agreeing adjective?',
});
