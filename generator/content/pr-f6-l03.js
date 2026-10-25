'use strict';
/* Practice Room · F6-L03 · Transport — types and how we travel. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f6-l03',
  arShort: 'المُوَاصَلَاتُ',
  grammar: 'adhhabu bi-l-ḥāfilati / bi-l-qiṭāri / bi-l-sayyārati; ʿalā al-darrājati; mashyan; yarkabu · yaqūdu · yusāfiru; kayfa tadhhabu / tadhhabīna …?',
  focus: 'Students run their own speaking and writing practice about transport: say the transport words, act a short dialogue, answer question cards, do a role-play card planning a day trip, give a 30-second talk, then build, fix and write about how their family travels.',
  words1: 'Kinds of transport', words2: 'Travel verbs',
  dialogue: {
    title: 'How do you go to school?', ar: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟',
    lines: [
      ['A', 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟', 'How do you go to school?'],
      ['B', 'أَذْهَبُ بِالحَافِلَةِ، لِأَنَّ المَدْرَسَةَ بَعِيدَةٌ.', 'I go by bus, because the school is far.'],
      ['A', 'وَأَنْتِ؟ كَيْفَ تَذْهَبِينَ؟', 'And you (to a girl)? How do you go?'],
      ['C', 'أَذْهَبُ مَشْيًا، وَأَحْيَانًا عَلَى الدَّرَّاجَةِ.', 'I walk, and sometimes by bike.'],
      ['A', 'وَكَيْفَ يَذْهَبُ أَبُوكِ إِلَى العَمَلِ؟', 'And how does your father go to work?'],
      ['C', 'يَقُودُ السَّيَّارَةَ، لٰكِنَّ أُمِّي تَرْكَبُ القِطَارَ.', 'He drives the car, but my mum takes the train.'],
    ],
    foot: 'Read in threes (A asks, B is a boy, C is a girl). Round 2: swap letters. Round 3: say how YOUR family really travels.',
  },
  questions: [
    { q: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟', en: 'How do you go to school?', start: 'أَذْهَبُ بِالحَافِلَةِ / مَشْيًا …', more: '… لِأَنَّ …' },
    { q: 'هَلْ رَكِبْتَ طَائِرَةً؟', en: 'Have you been on a plane?', start: 'نَعَمْ، رَكِبْتُ … / لَا، …', more: '… إِلَى …' },
    { q: 'مَا وَسِيلَةُ النَّقْلِ المُفَضَّلَةُ عِنْدَكَ؟', en: 'What is your favourite transport?', start: 'أُفَضِّلُ …', more: '… لِأَنَّهُ / لِأَنَّهَا سَرِيعٌ / سَرِيعَةٌ' },
    { q: 'كَيْفَ يَذْهَبُ صَدِيقُكَ إِلَى النَّادِي؟', en: 'How does your friend go to the club?', start: 'يَذْهَبُ …', more: '… مَعَ أَبِيهِ' },
    { q: 'هَلْ تُحِبُّ السَّفَرَ بِالقِطَارِ؟', en: 'Do you like travelling by train?', start: 'نَعَمْ / لَا، …', more: '… لِأَنَّهُ مُرِيحٌ / غَالٍ' },
  ],
  card: {
    title: 'Role-play card — planning a day trip to the seaside', ar: 'رِحْلَةٌ إِلَى البَحْرِ', you: 'yourself', them: 'a friend',
    tasks: [
      { ex: 'كَيْفَ نَذْهَبُ إِلَى البَحْرِ؟', task: 'Suggest a transport.', plan: 'كَيْفَ ← نَذْهَبُ بِالقِطَارِ / بِالحَافِلَةِ', model: 'نَذْهَبُ بِالقِطَارِ.', modelEn: 'Let’s go by train.' },
      { ex: 'لِمَاذَا القِطَارُ؟', task: 'Give a reason.', plan: 'لِمَاذَا ← لِأَنَّهُ …', model: 'لِأَنَّهُ سَرِيعٌ وَمُرِيحٌ.', modelEn: 'Because it is fast and comfortable.' },
      { ex: 'وَمِنَ المَحَطَّةِ إِلَى الشَّاطِئِ؟', task: 'Say how (on foot / bike).', plan: 'مِنَ المَحَطَّةِ ← نَذْهَبُ مَشْيًا / عَلَى الدَّرَّاجَةِ', model: 'نَذْهَبُ مَشْيًا، لِأَنَّ الشَّاطِئَ قَرِيبٌ.', modelEn: 'We walk, because the beach is near.' },
      { ex: 'هَلْ يَأْتِي أَخُوكَ مَعَنَا؟', task: 'Say how he will come.', plan: 'هَلْ ← نَعَمْ، يَأْتِي بِالسَّيَّارَةِ مَعَ …', model: 'نَعَمْ، يَأْتِي بِالسَّيَّارَةِ مَعَ أَبِي.', modelEn: 'Yes, he is coming by car with my dad.' },
    ],
    girl: 'أَخُوكِ',
    notes: 'Language: bi- + vehicle (bi-l-qiṭāri) · ʿalā al-darrājati · mashyan · he / she verbs.',
  },
  talk: {
    title: '30 seconds: how my family travels', ar: 'كَيْفَ تُسَافِرُ عَائِلَتِي',
    text: 'Talk for 30 seconds about how you and your family travel: to school, to work, at the weekend — and your favourite transport.',
    routes: {
      core: 'Three sentences with بِالحَافِلَةِ / بِالسَّيَّارَةِ / مَشْيًا.',
      develop: 'Add he / she verbs (يَقُودُ · تَرْكَبُ) and a reason.',
      stretch: 'Add a journey you made by plane or train, and a comparison (أَسْرَعُ مِنْ …).',
    },
  },
  builder: [
    { en: 'I go to school by bus.', cols: [['أَذْهَبُ', 'يَذْهَبُ'], ['إِلَى المَدْرَسَةِ', 'المَدْرَسَةَ إِلَى'], ['بِالحَافِلَةِ.', 'الحَافِلَةَ.']], key: [0, 0, 0], why: 'By + vehicle = bi- + the vehicle: بِالحَافِلَةِ.' },
    { en: 'My sister rides her bike.', cols: [['أُخْتِي', 'أَخِي'], ['تَرْكَبُ', 'يَرْكَبُ'], ['دَرَّاجَتَهَا.', 'دَرَّاجَتَهُ.']], key: [0, 0, 0], why: 'She → تَرْكَبُ; her bike → دَرَّاجَتَهَا.' },
    { en: 'We go to the park on foot.', cols: [['نَذْهَبُ', 'أَذْهَبُ نَحْنُ'], ['إِلَى الحَدِيقَةِ', 'فِي الحَدِيقَةِ إِلَى'], ['مَشْيًا.', 'بِالمَشْيِ القَدَمِ.']], key: [0, 0, 0], why: 'We → نَذْهَبُ; on foot = مَشْيًا.' },
  ],
  errors: [
    { wrong: 'أَذْهَبُ فِي الحَافِلَةِ إِلَى المَدْرَسَةِ.', hint: '“by bus” in Arabic …', right: 'أَذْهَبُ بِالحَافِلَةِ إِلَى المَدْرَسَةِ.', why: 'By bus = بِالحَافِلَةِ.' },
    { wrong: 'أَذْهَبُ بِالدَّرَّاجَةِ … عَلَى مَشْيًا.', hint: 'On foot is one word.', right: 'أَذْهَبُ مَشْيًا.', why: 'On foot = مَشْيًا (no preposition).' },
    { wrong: 'كَيْفَ تَذْهَبُ يَا لَيْلَى؟', hint: 'Layla is a girl.', right: 'كَيْفَ تَذْهَبِينَ يَا لَيْلَى؟', why: 'To a girl → تَذْهَبِينَ.' },
  ],
  task: {
    title: 'How my family travels', ar: 'كَيْفَ تَتَنَقَّلُ عَائِلَتِي',
    text: 'Write a short text (about 40–60 words) for a class survey on transport. Include: • how you go to school and why • how two family members travel • how you travel at the weekend or on holiday • your favourite transport and why.',
    phrases: [['أَذْهَبُ إِلَى المَدْرَسَةِ بِالقِطَارِ', 'I go to school by …'], ['أَبِي يَقُودُ … · أُمِّي تَرْكَبُ …', 'my dad drives … · my mum takes …'], ['فِي العُطْلَةِ نُسَافِرُ بِالطَّائِرَةِ', 'on holiday we travel by plane'], ['أُفَضِّلُ … لِأَنَّهُ / لِأَنَّهَا …', 'I prefer … because it …']],
    coreFrames: [
      { ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ ______ .', en: 'I go to school …' },
      { ar: 'أَبِي ______ ، وَأُمِّي ______ .', en: 'My dad …, and my mum …' },
      { ar: 'فِي العُطْلَةِ نُسَافِرُ ______ .', en: 'On holiday we travel …' },
      { ar: 'أُفَضِّلُ ______ .', en: 'I prefer …' },
    ],
    developFrames: [
      { ar: 'أَذْهَبُ ______ لِأَنَّ المَدْرَسَةَ ______ .', en: 'I go … because the school is …' },
      { ar: 'أُفَضِّلُ ______ لِأَنَّهُ / لِأَنَّهَا أَسْرَعُ / أَرْخَصُ مِنْ ______ .', en: 'I prefer … because it is faster / cheaper than …' },
    ],
    bank: ['بِالحَافِلَةِ · بِالقِطَارِ', 'بِالسَّيَّارَةِ · بِالطَّائِرَةِ', 'عَلَى الدَّرَّاجَةِ', 'مَشْيًا', 'يَقُودُ · يَرْكَبُ · تَرْكَبُ', 'يُسَافِرُ · نُسَافِرُ', 'سَرِيعٌ · مُرِيحٌ', 'لِأَنَّ'],
    model: {
      text: 'أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ، لِأَنَّ المَدْرَسَةَ بَعِيدَةٌ عَنْ بَيْتِي. أَبِي يَقُودُ السَّيَّارَةَ إِلَى عَمَلِهِ، وَأُمِّي تَرْكَبُ المِتْرُو. أُخْتِي الصَّغِيرَةُ تَذْهَبُ إِلَى المَدْرَسَةِ مَشْيًا. فِي العُطْلَةِ نُسَافِرُ بِالطَّائِرَةِ إِلَى مِصْرَ. أُفَضِّلُ القِطَارَ، لِأَنَّهُ مُرِيحٌ، وَأَسْتَطِيعُ أَنْ أَقْرَأَ فِيهِ.',
      en: '“I go to school by bus, because the school is far from my house. My dad drives to work, and my mum takes the underground. My little sister walks to school. On holiday we travel by plane to Egypt. I prefer the train, because it is comfortable and I can read on it.”',
      find: ['بِالحَافِلَةِ', 'أَبِي يَقُودُ', 'وَأُمِّي تَرْكَبُ', 'تَذْهَبُ إِلَى المَدْرَسَةِ مَشْيًا'],
    },
  },
  checkCore: 'use bi- + vehicle, عَلَى الدَّرَّاجَةِ or مَشْيًا correctly?',
  checkDevelop: 'use he / she verbs for family members (يَقُودُ · تَرْكَبُ)?',
});
