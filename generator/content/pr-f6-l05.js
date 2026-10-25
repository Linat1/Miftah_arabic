'use strict';
/* Practice Room · F6-L05 · Describing your town — advantages and disadvantages. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f6-l05',
  arShort: 'مَزَايَا مَدِينَتِي وَعُيُوبُهَا',
  grammar: 'madīnatī + feminine adjectives (hādiʾa · muktaẓẓa · āmina); min mazāyā madīnatī anna …; min ʿuyūbihā anna …; tatamayyazu bi- …; taftaqiru ilā …; lākinna',
  focus: 'Students run their own speaking and writing practice describing their town with a balanced view: say the description words, act a short dialogue, answer question cards, do a role-play card on a radio show about your town, give a 30-second balanced talk, then build, fix and write a pros-and-cons paragraph.',
  words1: 'Advantages and disadvantages', words2: 'Describing a town',
  dialogue: {
    title: 'What is your town like?', ar: 'كَيْفَ مَدِينَتُكَ؟',
    lines: [
      ['A', 'كَيْفَ مَدِينَتُكَ؟', 'What is your town like?'],
      ['B', 'مَدِينَتِي جَمِيلَةٌ وَحَدِيثَةٌ، لٰكِنَّهَا مُكْتَظَّةٌ.', 'My town is beautiful and modern, but it is crowded.'],
      ['A', 'مَا مَزَايَاهَا؟', 'What are its advantages?'],
      ['B', 'مِنْ مَزَايَا مَدِينَتِي أَنَّ المُوَاصَلَاتِ سَهْلَةٌ، وَتَتَمَيَّزُ بِحَدَائِقَ كَثِيرَةٍ.', 'One advantage of my town is that transport is easy, and it is known for its many parks.'],
      ['A', 'وَمَا عُيُوبُهَا؟', 'And its disadvantages?'],
      ['B', 'مِنْ عُيُوبِهَا أَنَّهَا صَاخِبَةٌ، وَتَفْتَقِرُ إِلَى مَرَاكِزَ لِلشَّبَابِ.', 'One disadvantage is that it is noisy, and it lacks youth centres.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: give YOUR town’s real advantages and disadvantages.',
  },
  questions: [
    { q: 'صِفْ مَدِينَتَكَ بِثَلَاثِ صِفَاتٍ.', en: 'Describe your town in three adjectives.', start: 'مَدِينَتِي … وَ… وَ…', more: '… جِدًّا' },
    { q: 'مَا أَكْبَرُ مِيزَةٍ فِي مَدِينَتِكَ؟', en: 'What is the biggest advantage of your town?', start: 'مِنْ مَزَايَا مَدِينَتِي أَنَّ …', more: '… لِذٰلِكَ …' },
    { q: 'وَمَا أَكْبَرُ عَيْبٍ؟', en: 'And the biggest disadvantage?', start: 'مِنْ عُيُوبِهَا أَنَّ …', more: '… لٰكِنَّ …' },
    { q: 'بِمَاذَا تَتَمَيَّزُ مَدِينَتُكَ؟', en: 'What is your town known for?', start: 'تَتَمَيَّزُ بِأَسْوَاقِهَا / بِحَدَائِقِهَا …', more: '…' },
    { q: 'هَلْ مَدِينَتُكَ آمِنَةٌ؟', en: 'Is your town safe?', start: 'نَعَمْ، هِيَ آمِنَةٌ … / لَا، …', more: '… فِي اللَّيْلِ' },
  ],
  card: {
    title: 'Role-play card — on a local radio show about your town', ar: 'فِي إِذَاعَةٍ مَحَلِّيَّةٍ', you: 'a young resident', them: 'the radio presenter',
    tasks: [
      { ex: 'أَهْلًا! صِفْ لَنَا مَدِينَتَكَ.', task: 'Two adjectives (f.).', plan: 'صِفْ ← مَدِينَتِي … وَ…', model: 'مَدِينَتِي قَدِيمَةٌ وَجَمِيلَةٌ.', modelEn: 'My town is old and beautiful.' },
      { ex: 'مَا مَزَايَاهَا؟', task: 'One advantage.', plan: 'مَزَايَا ← مِنْ مَزَايَاهَا أَنَّ …', model: 'مِنْ مَزَايَاهَا أَنَّ النَّاسَ لُطَفَاءُ.', modelEn: 'One of its advantages is that people are kind.' },
      { ex: 'وَعُيُوبُهَا؟', task: 'One disadvantage.', plan: 'عُيُوبٌ ← مِنْ عُيُوبِهَا أَنَّ …', model: 'مِنْ عُيُوبِهَا أَنَّ الشَّوَارِعَ مُزْدَحِمَةٌ.', modelEn: 'One of its disadvantages is that the streets are crowded.' },
      { ex: 'مَاذَا تَحْتَاجُ مَدِينَتُكَ؟', task: 'What it lacks.', plan: 'تَحْتَاجُ ← تَفْتَقِرُ إِلَى …', model: 'تَفْتَقِرُ إِلَى مَسْبَحٍ عَامٍّ وَمَكْتَبَةٍ كَبِيرَةٍ.', modelEn: 'It lacks a public pool and a big library.' },
    ],
    girl: 'صِفِي · مَدِينَتَكِ',
    notes: 'Language: min mazāyāhā anna + noun (-a) · min ʿuyūbihā anna … · taftaqiru ilā + genitive.',
  },
  talk: {
    title: '30 seconds: my town — for and against', ar: 'مَدِينَتِي بَيْنَ المَزَايَا وَالعُيُوبِ',
    text: 'Give a balanced 30-second view of your town: describe it, two advantages, one disadvantage — and an overall opinion.',
    routes: {
      core: 'مَدِينَتِي … · مِنْ مَزَايَاهَا أَنَّ … · مِنْ عُيُوبِهَا أَنَّ …',
      develop: 'Add تَتَمَيَّزُ … and لٰكِنَّ.',
      stretch: 'Add تَفْتَقِرُ إِلَى … and an overall opinion with بِصِفَةٍ عَامَّةٍ.',
    },
  },
  builder: [
    { en: 'My town is quiet and safe.', cols: [['مَدِينَتِي', 'مَدِينَتُكَ'], ['هَادِئَةٌ', 'هَادِئٌ'], ['وَآمِنَةٌ.', 'وَآمِنٌ.']], key: [0, 0, 0], why: 'مَدِينَةٌ (f.) → feminine adjectives.' },
    { en: 'One advantage is that the park is big.', cols: [['مِنْ مَزَايَاهَا', 'مِنْ عُيُوبِهَا'], ['أَنَّ الحَدِيقَةَ', 'أَنَّ الحَدِيقَةُ'], ['كَبِيرَةٌ.', 'كَبِيرَةً.']], key: [0, 0, 0], why: 'أَنَّ + noun in -a + adjective in -un.' },
    { en: 'It lacks a cinema.', cols: [['تَفْتَقِرُ', 'يَفْتَقِرُ'], ['إِلَى', 'مِنْ'], ['سِينِمَا.', 'سِينِمَا إِلَى.']], key: [0, 0, 0], why: 'The town (f.) → تَفْتَقِرُ إِلَى.' },
  ],
  errors: [
    { wrong: 'مَدِينَتِي مُكْتَظٌّ وَصَاخِبٌ.', hint: 'مَدِينَةٌ is feminine.', right: 'مَدِينَتِي مُكْتَظَّةٌ وَصَاخِبَةٌ.', why: 'Feminine → ة on both adjectives.' },
    { wrong: 'مِنْ مَزَايَاهَا أَنَّ المُوَاصَلَاتُ سَهْلَةٌ.', hint: 'After أَنَّ …', right: 'مِنْ مَزَايَاهَا أَنَّ المُوَاصَلَاتِ سَهْلَةٌ.', why: 'أَنَّ + noun in the accusative (-a / -i for plural).' },
    { wrong: 'تَفْتَقِرُ مَسْبَحًا.', hint: 'This verb needs a small word.', right: 'تَفْتَقِرُ إِلَى مَسْبَحٍ.', why: 'تَفْتَقِرُ إِلَى + genitive.' },
  ],
  task: {
    title: 'My town: a balanced view', ar: 'مَدِينَتِي: رَأْيٌ مُتَوَازِنٌ',
    text: 'Write a balanced paragraph (about 45–65 words) for a town website. Include: • a description of your town (three adjectives) • two advantages • one or two disadvantages • what the town lacks • your overall opinion.',
    phrases: [['مَدِينَتِي … وَ… ، لٰكِنَّهَا …', 'my town is … and …, but it is …'], ['مِنْ مَزَايَا مَدِينَتِي أَنَّ …', 'one advantage of my town is that …'], ['مِنْ عُيُوبِهَا أَنَّ …', 'one of its disadvantages is that …'], ['بِصِفَةٍ عَامَّةٍ …', 'overall …']],
    coreFrames: [
      { ar: 'مَدِينَتِي ______ وَ ______ .', en: 'My town is … and …' },
      { ar: 'مِنْ مَزَايَا مَدِينَتِي أَنَّ ______ .', en: 'One advantage of my town is that …' },
      { ar: 'مِنْ عُيُوبِهَا أَنَّ ______ .', en: 'One disadvantage is that …' },
      { ar: 'بِصِفَةٍ عَامَّةٍ، أُحِبُّ مَدِينَتِي.', en: 'Overall, I love my town.' },
    ],
    developFrames: [
      { ar: 'تَتَمَيَّزُ مَدِينَتِي بِحَدَائِقِهَا / بِأَسْوَاقِهَا، لٰكِنَّهَا تَفْتَقِرُ إِلَى ______ .', en: 'My town is known for its parks / markets, but it lacks …' },
      { ar: 'بِصِفَةٍ عَامَّةٍ، ______ لِأَنَّ ______ .', en: 'Overall, … because …' },
    ],
    bank: ['مَزَايَا · عُيُوبٌ', 'هَادِئَةٌ · صَاخِبَةٌ', 'مُكْتَظَّةٌ · نَظِيفَةٌ', 'آمِنَةٌ · حَدِيثَةٌ', 'مِنْ مَزَايَا … أَنَّ', 'مِنْ عُيُوبِ … أَنَّ', 'تَفْتَقِرُ إِلَى', 'بِصِفَةٍ عَامَّةٍ'],
    model: {
      text: 'مَدِينَتِي لِيسْتَرُ كَبِيرَةٌ وَنَشِيطَةٌ وَمُتَنَوِّعَةٌ. مِنْ مَزَايَا مَدِينَتِي أَنَّ المُوَاصَلَاتِ سَهْلَةٌ، وَأَنَّ فِيهَا مَطَاعِمَ مِنْ كُلِّ البُلْدَانِ. وَتَتَمَيَّزُ أَيْضًا بِحَدِيقَةٍ عَامَّةٍ جَمِيلَةٍ. مِنْ عُيُوبِهَا أَنَّ الوَسَطَ مُكْتَظٌّ وَصَاخِبٌ فِي نِهَايَةِ الأُسْبُوعِ، وَهِيَ تَفْتَقِرُ إِلَى مَسْبَحٍ حَدِيثٍ. بِصِفَةٍ عَامَّةٍ، أُحِبُّ مَدِينَتِي لِأَنَّ النَّاسَ لُطَفَاءُ.',
      en: '“My town, Leicester, is big, lively and diverse. One advantage of my town is that transport is easy, and that it has restaurants from every country. It is also known for a beautiful public park. One disadvantage is that the centre is crowded and noisy at the weekend, and it lacks a modern swimming pool. Overall, I love my town because the people are kind.”',
      find: ['مِنْ مَزَايَا مَدِينَتِي أَنَّ', 'وَتَتَمَيَّزُ أَيْضًا', 'مِنْ عُيُوبِهَا أَنَّ', 'تَفْتَقِرُ إِلَى'],
    },
  },
  checkCore: 'describe the town with feminine adjectives?',
  checkDevelop: 'balance it with مِنْ مَزَايَا … أَنَّ and مِنْ عُيُوبِ … أَنَّ?',
});
