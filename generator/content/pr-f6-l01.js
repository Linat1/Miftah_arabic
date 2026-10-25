'use strict';
/* Practice Room · F6-L01 · Places in town. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f6-l01',
  arShort: 'الأَمَاكِنُ فِي المَدِينَةِ',
  grammar: 'yūjadu (m.) / tūjadu (f.) / hunāka + place; lā yūjadu; fī madīnatī; one preposition (bi-jānibi · qurba)',
  focus: 'Students run their own speaking and writing practice about places in town: say the place words, act a short dialogue, answer question cards, do a role-play card at a tourist office, give a 30-second talk, then build, fix and write a short description of their town.',
  words1: 'Places in town (1)', words2: 'Places in town (2)',
  dialogue: {
    title: 'What is there in your town?', ar: 'مَاذَا يُوجَدُ فِي مَدِينَتِكَ؟',
    lines: [
      ['A', 'مَاذَا يُوجَدُ فِي مَدِينَتِكَ؟', 'What is there in your town?'],
      ['B', 'يُوجَدُ سُوقٌ كَبِيرٌ وَمَطْعَمٌ لُبْنَانِيٌّ.', 'There is a big market and a Lebanese restaurant.'],
      ['A', 'هَلْ تُوجَدُ مَكْتَبَةٌ؟', 'Is there a library?'],
      ['B', 'نَعَمْ، تُوجَدُ مَكْتَبَةٌ جَمِيلَةٌ بِجَانِبِ المَدْرَسَةِ.', 'Yes, there is a beautiful library next to the school.'],
      ['A', 'وَهَلْ هُنَاكَ مَطَارٌ؟', 'And is there an airport?'],
      ['B', 'لَا، لَا يُوجَدُ مَطَارٌ، لٰكِنْ تُوجَدُ مَحَطَّةُ قِطَارٍ.', 'No, there is no airport, but there is a train station.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: describe YOUR real town — what there is and what there isn’t.',
  },
  questions: [
    { q: 'أَيْنَ تَسْكُنُ؟ فِي مَدِينَةٍ أَمْ فِي قَرْيَةٍ؟', en: 'Do you live in a city or a village?', start: 'أَسْكُنُ فِي …', more: '… اسْمُهَا …' },
    { q: 'مَاذَا يُوجَدُ قُرْبَ بَيْتِكَ؟', en: 'What is near your house?', start: 'يُوجَدُ … / تُوجَدُ …', more: '… وَهُنَاكَ …' },
    { q: 'هَلْ يُوجَدُ مَتْحَفٌ فِي مَدِينَتِكَ؟', en: 'Is there a museum in your town?', start: 'نَعَمْ، يُوجَدُ … / لَا، لَا يُوجَدُ …', more: '… لٰكِنْ …' },
    { q: 'أَيْنَ تَذْهَبُ لِلتَّسَوُّقِ؟', en: 'Where do you go shopping?', start: 'أَذْهَبُ إِلَى …', more: '… لِأَنَّ …' },
    { q: 'مَا مَكَانُكَ المُفَضَّلُ فِي المَدِينَةِ؟', en: 'What is your favourite place in town?', start: 'مَكَانِي المُفَضَّلُ …', more: '… لِأَنَّهُ / لِأَنَّهَا …' },
  ],
  card: {
    title: 'Role-play card — at the tourist information office', ar: 'فِي مَكْتَبِ السِّيَاحَةِ', you: 'a visitor', them: 'the tourist officer',
    tasks: [
      { ex: 'أَهْلًا وَسَهْلًا! كَيْفَ أُسَاعِدُكَ؟', task: 'Ask if there is a museum.', plan: 'كَيْفَ ← هَلْ يُوجَدُ … ؟', model: 'هَلْ يُوجَدُ مَتْحَفٌ فِي المَدِينَةِ؟', modelEn: 'Is there a museum in the town?' },
      { ex: 'نَعَمْ، يُوجَدُ مَتْحَفٌ تَارِيخِيٌّ.', task: 'Ask about a restaurant.', plan: 'اسْأَلْ ← وَهَلْ يُوجَدُ … قَرِيبٌ؟', model: 'رَائِعٌ! وَهَلْ يُوجَدُ مَطْعَمٌ قَرِيبٌ؟', modelEn: 'Great! And is there a restaurant nearby?' },
      { ex: 'نَعَمْ، بِجَانِبِ السُّوقِ.', task: 'Ask about a pharmacy (f.).', plan: 'اسْأَلْ ← هَلْ تُوجَدُ … ؟', model: 'شُكْرًا. هَلْ تُوجَدُ صَيْدَلِيَّةٌ أَيْضًا؟', modelEn: 'Thanks. Is there a pharmacy too?' },
      { ex: 'نَعَمْ، أَمَامَ المُسْتَشْفَى.', task: 'Thank and say goodbye.', plan: 'شُكْرًا ← شُكْرًا جَزِيلًا ، مَعَ السَّلَامَةِ', model: 'شُكْرًا جَزِيلًا، مَعَ السَّلَامَةِ.', modelEn: 'Thank you very much, goodbye.' },
    ],
    girl: 'to a female visitor: أُسَاعِدُكِ',
    notes: 'Language: hal yūjadu (m.) / hal tūjadu (f.) — choose by the place word.',
  },
  talk: {
    title: '30 seconds: my town', ar: 'مَدِينَتِي',
    text: 'Talk for 30 seconds about your town: four places that exist, one that doesn’t, and your favourite place.',
    routes: {
      core: 'Four places with يُوجَدُ / تُوجَدُ.',
      develop: 'Add لَا يُوجَدُ … and one position (بِجَانِبِ …).',
      stretch: 'Add adjectives that agree and a reason for your favourite place.',
    },
  },
  builder: [
    { en: 'There is a big hospital in my town.', cols: [['يُوجَدُ', 'تُوجَدُ'], ['مُسْتَشْفًى كَبِيرٌ', 'مُسْتَشْفًى كَبِيرَةٌ'], ['فِي مَدِينَتِي.', 'مَدِينَتِي فِي.']], key: [0, 0, 0], why: 'مُسْتَشْفًى is masculine → يُوجَدُ … كَبِيرٌ.' },
    { en: 'There is a public park near the school.', cols: [['تُوجَدُ', 'يُوجَدُ'], ['حَدِيقَةٌ عَامَّةٌ', 'حَدِيقَةٌ عَامٌّ'], ['قُرْبَ المَدْرَسَةِ.', 'قُرْبَ المَدْرَسَةُ.']], key: [0, 0, 0], why: 'حَدِيقَةٌ (f.) → تُوجَدُ … عَامَّةٌ; قُرْبَ + genitive.' },
    { en: 'There is no airport.', cols: [['لَا', 'لَيْسَ'], ['يُوجَدُ', 'تُوجَدُ'], ['مَطَارٌ.', 'مَطَارًا.']], key: [0, 0, 0], why: 'There is no = لَا يُوجَدُ + noun (مَطَارٌ is masculine).' },
  ],
  errors: [
    { wrong: 'يُوجَدُ مَكْتَبَةٌ فِي حَيِّي.', hint: 'مَكْتَبَةٌ ends in ة.', right: 'تُوجَدُ مَكْتَبَةٌ فِي حَيِّي.', why: 'Feminine → تُوجَدُ.' },
    { wrong: 'لَيْسَ يُوجَدُ مَسْبَحٌ.', hint: 'Negative of يُوجَدُ.', right: 'لَا يُوجَدُ مَسْبَحٌ.', why: 'Use لَا with the verb يُوجَدُ.' },
    { wrong: 'السُّوقُ بِجَانِبِ المَحَطَّةُ.', hint: 'Look after بِجَانِبِ.', right: 'السُّوقُ بِجَانِبِ المَحَطَّةِ.', why: 'بِجَانِبِ + genitive.' },
  ],
  task: {
    title: 'My town', ar: 'مَدِينَتِي',
    text: 'Write a short description of your town (about 35–55 words) for a visitor. Include: • city, town or village and its name • four places with يُوجَدُ / تُوجَدُ • one place that isn’t there • where one place is • your favourite place and why.',
    phrases: [['أَسْكُنُ فِي مَدِينَةِ …', 'I live in the city of …'], ['فِي مَدِينَتِي يُوجَدُ … وَتُوجَدُ …', 'in my town there is … and …'], ['لَا يُوجَدُ …', 'there is no …'], ['مَكَانِي المُفَضَّلُ … لِأَنَّ …', 'my favourite place is … because …']],
    coreFrames: [
      { ar: 'أَسْكُنُ فِي ______ ______ .', en: 'I live in the … of …' },
      { ar: 'فِي مَدِينَتِي يُوجَدُ ______ ، وَتُوجَدُ ______ .', en: 'In my town there is … and …' },
      { ar: 'لَا يُوجَدُ ______ .', en: 'There is no …' },
      { ar: 'مَكَانِي المُفَضَّلُ ______ .', en: 'My favourite place is …' },
    ],
    developFrames: [
      { ar: '______ بِجَانِبِ / قُرْبَ ______ .', en: '… is next to / near …' },
      { ar: 'أُحِبُّ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I love … because it is …' },
    ],
    bank: ['مَدِينَةٌ · قَرْيَةٌ', 'يُوجَدُ · تُوجَدُ · هُنَاكَ', 'لَا يُوجَدُ', 'سُوقٌ · مَطْعَمٌ · مَتْحَفٌ', 'مَكْتَبَةٌ · مَحَطَّةٌ', 'حَدِيقَةٌ عَامَّةٌ', 'بِجَانِبِ · قُرْبَ', 'لِأَنَّ'],
    model: {
      text: 'أَسْكُنُ فِي مَدِينَةِ كَارْدِيفَ. فِي مَدِينَتِي يُوجَدُ مَتْحَفٌ كَبِيرٌ وَسُوقٌ قَدِيمٌ، وَتُوجَدُ مَحَطَّةُ قِطَارٍ وَحَدِيقَةٌ عَامَّةٌ جَمِيلَةٌ. المَكْتَبَةُ بِجَانِبِ المَحَطَّةِ. لَا يُوجَدُ مَطَارٌ كَبِيرٌ، لٰكِنْ هُنَاكَ مَطَارٌ صَغِيرٌ خَارِجَ المَدِينَةِ. مَكَانِي المُفَضَّلُ الحَدِيقَةُ، لِأَنَّهَا هَادِئَةٌ وَخَضْرَاءُ.',
      en: '“I live in the city of Cardiff. In my city there is a big museum and an old market, and there is a train station and a beautiful public park. The library is next to the station. There isn’t a big airport, but there is a small airport outside the city. My favourite place is the park, because it is quiet and green.”',
      find: ['يُوجَدُ مَتْحَفٌ', 'وَتُوجَدُ مَحَطَّةُ قِطَارٍ', 'لَا يُوجَدُ مَطَارٌ', 'لِأَنَّهَا هَادِئَةٌ'],
    },
  },
  checkCore: 'choose يُوجَدُ / تُوجَدُ by the place word?',
  checkDevelop: 'use لَا يُوجَدُ and a place word + genitive?',
});
