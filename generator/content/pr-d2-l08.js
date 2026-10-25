'use strict';
/* Practice Room · D2-L08 · Reading — personality, relationships and fashion opinion texts. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd2-l08',
  arShort: 'أَقْرَأُ رَأْيَ الكَاتِبِ',
  grammar: 'reporting a writer’s view: yarā anna … · yadhkuru mithālan … · yukhālifu … · yakhluṣu ilā anna …; anna + noun in -a; finding contrast (baynamā · wa-lākinna) and concession; agreeing / disagreeing with evidence (uwāfiqu / lā uwāfiqu li-anna …)',
  focus: 'Students run their own reading-and-speaking practice: read a short opinion text aloud, report what the writer thinks, find the example and the conclusion, then agree or disagree with evidence. They do a role-play card on a book-club discussion, give a one-minute response, then build, fix and write a short reply to an opinion article.',
  words1: 'Reading an argument', words2: 'Style and fashion words',
  pick: [5, 6, 7, 1, 4, 26, 27, 31, 34, 35, 36, 37],
  dialogue: {
    title: 'What does the writer think?', ar: 'مَاذَا يَرَى الكَاتِبُ؟',
    lines: [
      ['A', 'قَرَأْتُ مَقَالَةً عَنِ المَوْضَةِ. الكَاتِبُ يَرَى أَنَّ الشَّبَابَ يُنْفِقُونَ كَثِيرًا عَلَى المَلَابِسِ.', 'I read an article about fashion. The writer thinks young people spend too much on clothes.'],
      ['B', 'وَهَلْ يَذْكُرُ مِثَالًا؟', 'Does he give an example?'],
      ['A', 'نَعَمْ، يَذْكُرُ أَنَّ بَعْضَ الطُّلَّابِ يَشْتَرُونَ حِذَاءً جَدِيدًا كُلَّ شَهْرٍ.', 'Yes, he mentions that some students buy new shoes every month.'],
      ['B', 'وَمَا رَأْيُهُ فِي اللِّبَاسِ التَّقْلِيدِيِّ؟', 'And what does he think of traditional dress?'],
      ['A', 'يَخْلُصُ إِلَى أَنَّهُ عَمَلِيٌّ وَيُعَبِّرُ عَنْ هُوِيَّتِنَا.', 'He concludes that it is practical and expresses our identity.'],
      ['B', 'أُوَافِقُهُ جُزْئِيًّا، وَلٰكِنَّ المَلَابِسَ العَصْرِيَّةَ مُرِيحَةٌ أَيْضًا.', 'I partly agree with him, but modern clothes are comfortable too.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: report a text you read this week — use يَرَى أَنَّ and يَخْلُصُ إِلَى أَنَّ.',
  },
  qTitle: 'Text detective — read it, report it',
  questions: [
    { q: '«أَرَى أَنَّ الصَّدِيقَ الحَقِيقِيَّ يَقُولُ الصِّدْقَ دَائِمًا.» — مَا رَأْيُ الكَاتِبِ؟', en: '“I think a true friend always tells the truth.” — The writer’s view?', start: 'يَرَى الكَاتِبُ أَنَّ …', more: '… وَأَنَا أُوَافِقُهُ لِأَنَّ …' },
    { q: '«مَثَلًا، أُخْتِي تَدْعَمُنِي فِي كُلِّ امْتِحَانٍ.» — مَا المِثَالُ؟', en: '“For example, my sister supports me in every exam.” — What is the example?', start: 'يَذْكُرُ مِثَالًا: …', more: '… وَهٰذَا يَدُلُّ عَلَى …' },
    { q: '«بَعْضُ النَّاسِ يُحِبُّونَ المَوْضَةَ، بَيْنَمَا يُفَضِّلُ آخَرُونَ الرَّاحَةَ.» — مَا المُقَارَنَةُ؟', en: '“Some love fashion, whereas others prefer comfort.” — The contrast?', start: 'يُقَارِنُ بَيْنَ … وَ …', more: '… الكَلِمَةُ: بَيْنَمَا' },
    { q: '«فِي النِّهَايَةِ، الأَخْلَاقُ أَهَمُّ مِنَ المَظْهَرِ.» — مَا الخُلَاصَةُ؟', en: '“In the end, character matters more than appearance.” — The conclusion?', start: 'يَخْلُصُ إِلَى أَنَّ …', more: '… هَلْ تُوَافِقُ؟' },
    { q: 'هَلْ تُوَافِقُ عَلَى أَنَّ المَلَابِسَ تُظْهِرُ الشَّخْصِيَّةَ؟', en: 'Do you agree that clothes show personality?', start: 'أُوَافِقُ / لَا أُوَافِقُ، لِأَنَّ …', more: '… عَلَى سَبِيلِ المِثَالِ …' },
  ],
  card: {
    title: 'Role-play card — the book club: a story about two friends', ar: 'نَادِي الكِتَابِ', you: 'a club member who read the story', them: 'the club leader',
    tasks: [
      { ex: 'مَا الفِكْرَةُ الرَّئِيسِيَّةُ فِي القِصَّةِ؟', task: 'Main idea.', plan: 'الفِكْرَةُ ← تَتَحَدَّثُ القِصَّةُ عَنْ …', model: 'تَتَحَدَّثُ القِصَّةُ عَنْ صَدِيقَتَيْنِ تَخْتَلِفَانِ ثُمَّ تَتَصَالَحَانِ.', modelEn: 'The story is about two friends who fall out and then make up.' },
      { ex: 'كَيْفَ شَخْصِيَّةُ لَيْلَى؟ وَمَا الدَّلِيلُ؟', task: 'Quality + evidence.', plan: 'لَيْلَى ← هِيَ … ، وَالدَّلِيلُ أَنَّهَا …', model: 'هِيَ صَبُورَةٌ، وَالدَّلِيلُ أَنَّهَا تَنْتَظِرُ صَدِيقَتَهَا شَهْرًا.', modelEn: 'She is patient — the evidence is that she waits a month for her friend.' },
      { ex: 'مَاذَا يَرَى الكَاتِبُ فِي النِّهَايَةِ؟', task: 'The conclusion.', plan: '', model: 'يَخْلُصُ الكَاتِبُ إِلَى أَنَّ الصَّدَاقَةَ الحَقِيقِيَّةَ تَحْتَاجُ إِلَى الصَّبْرِ.', modelEn: 'The writer concludes that real friendship needs patience.' },
      { unexpected: true, ex: 'هَلْ تُوَافِقُ الكَاتِبَ؟', task: 'Agree / disagree + reason.', plan: '', model: 'أُوَافِقُهُ، لِأَنَّنِي اخْتَلَفْتُ مَعَ صَدِيقِي مَرَّةً، وَبَعْدَ أُسْبُوعٍ تَصَالَحْنَا.', modelEn: 'I agree, because I once fell out with my friend, and after a week we made up.' },
    ],
    girl: 'leader to a girl: تُوَافِقِينَ',
    notes: 'anna + noun in -a: يَرَى أَنَّ الصَّدَاقَةَ … · يَخْلُصُ إِلَى أَنَّ …',
  },
  talk: {
    title: 'One minute: respond to a view', ar: 'أَرُدُّ عَلَى رَأْيٍ',
    text: 'The Leader reads this view: «المَلَابِسُ الغَالِيَةُ أَفْضَلُ دَائِمًا.» Report it, then agree or disagree for one minute with reasons and examples.',
    routes: {
      core: 'يَرَى الكَاتِبُ أَنَّ … + أُوَافِقُ / لَا أُوَافِقُ لِأَنَّ …',
      develop: 'Add an example (مَثَلًا …) and a contrast (بَيْنَمَا / وَلٰكِنَّ).',
      stretch: 'Add a concession (عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …) and a conclusion.',
    },
  },
  builder: [
    { en: 'The writer thinks that fashion is expensive.', cols: [['يَرَى الكَاتِبُ', 'يَرَى الكَاتِبَ'], ['أَنَّ المَوْضَةَ', 'أَنَّ المَوْضَةُ'], ['غَالِيَةٌ.', 'غَالِيَةً.']], key: [0, 0, 0], why: 'أَنَّ + noun in -a; its adjective stays -un.' },
    { en: 'He mentions an example from his school.', cols: [['يَذْكُرُ', 'يَذْكُرُونَ'], ['مِثَالًا', 'مِثَالٌ'], ['مِنْ مَدْرَسَتِهِ.', 'مِنْ مَدْرَسَتِهَا.']], key: [0, 0, 0], why: 'Object → مِثَالًا; his → -hi.' },
    { en: 'I don’t agree, because comfort is more important.', cols: [['لَا أُوَافِقُ،', 'لَمْ أُوَافِقُ،'], ['لِأَنَّ', 'لِذٰلِكَ'], ['الرَّاحَةَ أَهَمُّ.', 'الرَّاحَةُ أَهَمُّ.']], key: [0, 0, 0], why: 'لِأَنَّ + noun in -a.' },
  ],
  errors: [
    { wrong: 'يَرَى الكَاتِبُ أَنَّ الأَصْدِقَاءُ مُهِمُّونَ.', hint: 'After أَنَّ …', right: 'يَرَى الكَاتِبُ أَنَّ الأَصْدِقَاءَ مُهِمُّونَ.', why: 'أَنَّ + noun in -a.' },
    { wrong: 'يَخْلُصُ أَنَّ الأَخْلَاقَ أَهَمُّ.', hint: 'Missing word?', right: 'يَخْلُصُ إِلَى أَنَّ الأَخْلَاقَ أَهَمُّ.', why: 'يَخْلُصُ إِلَى أَنَّ …' },
    { wrong: 'أُوَافِقُ لِأَنَّ … (no reason)', hint: 'Agreement needs evidence.', right: 'أُوَافِقُ، لِأَنَّ أُخْتِي تَدْعَمُنِي دَائِمًا.', why: 'Give a real reason or example.' },
  ],
  task: {
    title: 'A reply to an opinion article', ar: 'رَدٌّ عَلَى مَقَالَةِ رَأْيٍ',
    text: 'A magazine article says: «الأَصْدِقَاءُ أَهَمُّ مِنَ العَائِلَةِ فِي حَيَاةِ المُرَاهِقِينَ.» Write a reply (about 60–80 words). Include: • report the writer’s view (يَرَى الكَاتِبُ أَنَّ …) • do you agree? why? • an example from your life • a contrast or concession • your conclusion (فِي النِّهَايَةِ …).',
    phrases: [['يَرَى الكَاتِبُ أَنَّ …', 'the writer thinks that …'], ['أُوَافِقُ جُزْئِيًّا / لَا أُوَافِقُ …', 'I partly agree / I don’t agree …'], ['عَلَى سَبِيلِ المِثَالِ …', 'for example …'], ['فِي النِّهَايَةِ أَرَى أَنَّ …', 'in the end I think that …']],
    coreFrames: [
      { ar: 'يَرَى الكَاتِبُ أَنَّ ______ .', en: 'The writer thinks that …' },
      { ar: 'أُوَافِقُ / لَا أُوَافِقُ، لِأَنَّ ______ .', en: 'I agree / don’t agree, because …' },
      { ar: 'عَلَى سَبِيلِ المِثَالِ، ______ .', en: 'For example, …' },
      { ar: 'فِي النِّهَايَةِ أَرَى أَنَّ ______ .', en: 'In the end I think that …' },
    ],
    developFrames: [
      { ar: 'مِنْ جِهَةٍ ______ ، وَمِنْ جِهَةٍ أُخْرَى ______ .', en: 'On one hand …, on the other …' },
      { ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّ ______ .', en: 'Although …, …' },
    ],
    bank: ['يَرَى أَنَّ', 'يَذْكُرُ مِثَالًا', 'يَخْلُصُ إِلَى أَنَّ', 'أُوَافِقُ · لَا أُوَافِقُ', 'جُزْئِيًّا', 'مِنْ جِهَةٍ أُخْرَى', 'بَيْنَمَا · وَلٰكِنَّ', 'عَلَى الرَّغْمِ مِنْ أَنَّ'],
    model: {
      text: 'يَرَى الكَاتِبُ أَنَّ الأَصْدِقَاءَ أَهَمُّ مِنَ العَائِلَةِ فِي حَيَاةِ المُرَاهِقِينَ. أُوَافِقُهُ جُزْئِيًّا فَقَطْ. مِنْ جِهَةٍ، أَقْضِي وَقْتًا طَوِيلًا مَعَ أَصْدِقَائِي، وَهُمْ يَفْهَمُونَ مُشْكِلَاتِي. وَمِنْ جِهَةٍ أُخْرَى، عَائِلَتِي تَدْعَمُنِي دَائِمًا. عَلَى سَبِيلِ المِثَالِ، عِنْدَمَا كُنْتُ مَرِيضًا، بَقِيَتْ أُمِّي بِجَانِبِي طُولَ اللَّيْلِ. عَلَى الرَّغْمِ مِنْ أَنَّ الأَصْدِقَاءَ مُهِمُّونَ، فَإِنَّ العَائِلَةَ بَاقِيَةٌ مَعَنَا طُولَ الحَيَاةِ. فِي النِّهَايَةِ أَرَى أَنَّنَا نَحْتَاجُ إِلَى الاثْنَيْنِ مَعًا.',
      en: '“The writer thinks friends are more important than family in teenagers’ lives. I only partly agree with him. On one hand, I spend a long time with my friends, and they understand my problems. On the other hand, my family always supports me. For example, when I was ill, my mum stayed beside me all night. Although friends are important, family stays with us for life. In the end I think we need both together.”',
      find: ['يَرَى الكَاتِبُ أَنَّ', 'أُوَافِقُهُ جُزْئِيًّا', 'عَلَى سَبِيلِ المِثَالِ', 'فَإِنَّ العَائِلَةَ'],
    },
  },
  checkCore: 'report the writer’s view with يَرَى أَنَّ + noun in -a?',
  checkDevelop: 'agree / disagree with an example and a concession?',
});
