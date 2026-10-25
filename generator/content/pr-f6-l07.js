'use strict';
/* Practice Room · F6-L07 · The built environment — buildings, materials and urban life. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f6-l07',
  arShort: 'المَبَانِي',
  grammar: 'mabniyyun / mabniyyatun min + material; adjectives that agree (qadīm · ḥadīth · ʿālin); comparing with baynamā (whereas); old vs new, city vs countryside',
  focus: 'Students run their own speaking and writing practice about buildings: say the building and material words, act a short dialogue, answer question cards, do a role-play card as a tour guide, give a 30-second talk, then build, fix and write a comparison of an old and a new building.',
  words1: 'Materials', words2: 'Kinds of buildings',
  dialogue: {
    title: 'What is it built of?', ar: 'مِمَّ هُوَ مَبْنِيٌّ؟',
    lines: [
      ['A', 'مَا هٰذَا المَبْنَى؟', 'What is this building?'],
      ['B', 'هٰذَا مَبْنًى تَارِيخِيٌّ، وَهُوَ مَبْنِيٌّ مِنَ الحَجَرِ.', 'This is a historic building, and it is built of stone.'],
      ['A', 'وَتِلْكَ العِمَارَةُ؟', 'And that apartment block?'],
      ['B', 'هِيَ مَبْنِيَّةٌ مِنَ الخَرَسَانَةِ وَالزُّجَاجِ، وَهِيَ حَدِيثَةٌ.', 'It is built of concrete and glass, and it is modern.'],
      ['A', 'أَيُّهُمَا أَجْمَلُ فِي رَأْيِكَ؟', 'Which is more beautiful in your opinion?'],
      ['B', 'أُحِبُّ المَبْنَى القَدِيمَ، بَيْنَمَا يُحِبُّ أَخِي نَاطِحَاتِ السَّحَابِ.', 'I love the old building, whereas my brother loves skyscrapers.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: describe two REAL buildings in your town.',
  },
  questions: [
    { q: 'مِمَّ بَيْتُكَ مَبْنِيٌّ؟', en: 'What is your house built of?', start: 'بَيْتِي مَبْنِيٌّ مِنَ …', more: '… وَ…' },
    { q: 'مِمَّ مَدْرَسَتُكَ مَبْنِيَّةٌ؟', en: 'What is your school built of?', start: 'مَدْرَسَتِي مَبْنِيَّةٌ مِنَ …', more: '… وَهِيَ حَدِيثَةٌ / قَدِيمَةٌ' },
    { q: 'هَلْ تُوجَدُ نَاطِحَاتُ سَحَابٍ فِي مَدِينَتِكَ؟', en: 'Are there skyscrapers in your town?', start: 'نَعَمْ، تُوجَدُ … / لَا، …', more: '… لٰكِنْ …' },
    { q: 'صِفْ مَبْنًى تَارِيخِيًّا تَعْرِفُهُ.', en: 'Describe a historic building you know.', start: 'أَعْرِفُ … ، وَهُوَ مَبْنِيٌّ مِنْ …', more: '… عُمْرُهُ … سَنَةٍ' },
    { q: 'هَلْ تُفَضِّلُ البُيُوتَ القَدِيمَةَ أَمِ الحَدِيثَةَ؟', en: 'Do you prefer old or modern houses?', start: 'أُفَضِّلُ …', more: '… بَيْنَمَا …' },
  ],
  card: {
    title: 'Role-play card — guiding a tour of the old town', ar: 'جَوْلَةٌ فِي المَدِينَةِ القَدِيمَةِ', you: 'the young tour guide', them: 'a tourist',
    tasks: [
      { ex: 'مَا هٰذَا المَبْنَى الجَمِيلُ؟', task: 'Name the building.', plan: 'مَا ← هٰذَا … ، اسْمُهُ …', model: 'هٰذَا مَسْجِدٌ تَارِيخِيٌّ، اسْمُهُ المَسْجِدُ الكَبِيرُ.', modelEn: 'This is a historic mosque, called the Great Mosque.' },
      { ex: 'مِمَّ هُوَ مَبْنِيٌّ؟', task: 'Give the material.', plan: 'مِمَّ ← هُوَ مَبْنِيٌّ مِنَ …', model: 'هُوَ مَبْنِيٌّ مِنَ الحَجَرِ وَالطِّينِ.', modelEn: 'It is built of stone and clay.' },
      { ex: 'وَتِلْكَ البُيُوتُ؟', task: 'Describe them (non-human plural).', plan: 'البُيُوتُ ← هِيَ مَبْنِيَّةٌ مِنْ … ، وَ…', model: 'هِيَ بُيُوتٌ تَقْلِيدِيَّةٌ، مَبْنِيَّةٌ مِنَ الطُّوبِ.', modelEn: 'They are traditional houses, built of brick.' },
      { ex: 'مَا الفَرْقُ بَيْنَ هُنَا وَوَسَطِ المَدِينَةِ؟', task: 'Compare with بَيْنَمَا.', plan: 'الفَرْقُ ← هُنَا … ، بَيْنَمَا الوَسَطُ …', model: 'هُنَا المَبَانِي قَدِيمَةٌ، بَيْنَمَا فِي الوَسَطِ عِمَارَاتٌ حَدِيثَةٌ مِنَ الزُّجَاجِ.', modelEn: 'Here the buildings are old, whereas in the centre there are modern glass blocks.' },
    ],
    girl: 'a girl guide says the same; to a female tourist nothing changes',
    notes: 'Language: mabniyyun (m.) / mabniyyatun (f. and non-human plural) min + genitive · baynamā.',
  },
  talk: {
    title: '30 seconds: old and new buildings', ar: 'مَبَانٍ قَدِيمَةٌ وَحَدِيثَةٌ',
    text: 'Talk for 30 seconds about two buildings in your town (one old, one modern): what they are, what they are built of, and which you prefer.',
    routes: {
      core: 'Two buildings + materials.',
      develop: 'Add adjectives that agree and a preference.',
      stretch: 'Compare them with بَيْنَمَا and give a reason.',
    },
  },
  builder: [
    { en: 'The library is built of glass.', cols: [['المَكْتَبَةُ', 'المَكْتَبَةَ'], ['مَبْنِيَّةٌ', 'مَبْنِيٌّ'], ['مِنَ الزُّجَاجِ.', 'بِالزُّجَاجِ.']], key: [0, 0, 0], why: 'Feminine → مَبْنِيَّةٌ مِنْ + genitive.' },
    { en: 'The old houses are built of stone.', cols: [['البُيُوتُ القَدِيمَةُ', 'البُيُوتُ القَدِيمُونَ'], ['مَبْنِيَّةٌ', 'مَبْنِيُّونَ'], ['مِنَ الحَجَرِ.', 'مِنَ الحَجَرُ.']], key: [0, 0, 0], why: 'Non-human plural → feminine singular: القَدِيمَةُ · مَبْنِيَّةٌ.' },
    { en: 'I like old buildings, whereas my sister likes modern ones.', cols: [['أُحِبُّ المَبَانِيَ القَدِيمَةَ،', 'أُحِبُّ المَبَانِي القَدِيمُ،'], ['بَيْنَمَا', 'لِأَنَّ'], ['تُحِبُّ أُخْتِي الحَدِيثَةَ.', 'يُحِبُّ أُخْتِي الحَدِيثَ.']], key: [0, 0, 0], why: 'Whereas = بَيْنَمَا; sister → تُحِبُّ.' },
  ],
  errors: [
    { wrong: 'المَدْرَسَةُ مَبْنِيٌّ مِنَ الطُّوبِ.', hint: 'مَدْرَسَةٌ is feminine.', right: 'المَدْرَسَةُ مَبْنِيَّةٌ مِنَ الطُّوبِ.', why: 'Feminine → مَبْنِيَّةٌ.' },
    { wrong: 'العِمَارَاتُ عَالُونَ.', hint: 'Blocks are not people.', right: 'العِمَارَاتُ عَالِيَةٌ.', why: 'Non-human plural → feminine singular.' },
    { wrong: 'البَيْتُ مَبْنِيٌّ بِالخَشَبِ.', hint: 'built OF = …', right: 'البَيْتُ مَبْنِيٌّ مِنَ الخَشَبِ.', why: 'Material: مَبْنِيٌّ مِنْ.' },
  ],
  task: {
    title: 'An old building and a new one', ar: 'مَبْنًى قَدِيمٌ وَمَبْنًى حَدِيثٌ',
    text: 'Write a comparison (about 45–65 words) of an old and a new building in your town or a city you know. Include: • what each building is • what each is built of • two adjectives for each • a comparison with بَيْنَمَا • which you prefer and why.',
    phrases: [['… مَبْنِيٌّ / مَبْنِيَّةٌ مِنَ …', '… is built of …'], ['هُوَ قَدِيمٌ وَ… · هِيَ حَدِيثَةٌ وَ…', 'it is old and … · it is modern and …'], ['… بَيْنَمَا …', '… whereas …'], ['أُفَضِّلُ … لِأَنَّ …', 'I prefer … because …']],
    coreFrames: [
      { ar: 'فِي مَدِينَتِي ______ قَدِيمٌ / قَدِيمَةٌ.', en: 'In my town there is an old …' },
      { ar: 'هُوَ / هِيَ مَبْنِيٌّ / مَبْنِيَّةٌ مِنَ ______ .', en: 'It is built of …' },
      { ar: 'وَهُنَاكَ ______ حَدِيثٌ / حَدِيثَةٌ مِنَ ______ .', en: 'And there is a modern … of …' },
      { ar: 'أُفَضِّلُ ______ .', en: 'I prefer …' },
    ],
    developFrames: [
      { ar: '______ جَمِيلٌ وَتَارِيخِيٌّ، بَيْنَمَا ______ .', en: '… is beautiful and historic, whereas …' },
      { ar: 'أُفَضِّلُ ______ لِأَنَّ ______ .', en: 'I prefer … because …' },
    ],
    bank: ['مَبْنِيٌّ · مَبْنِيَّةٌ مِنْ', 'حَجَرٌ · طُوبٌ · خَشَبٌ', 'زُجَاجٌ · خَرَسَانَةٌ · مَعْدِنٌ', 'قَدِيمٌ · حَدِيثٌ', 'تَارِيخِيٌّ · تَقْلِيدِيٌّ', 'نَاطِحَةُ سَحَابٍ · عِمَارَةٌ', 'بَيْنَمَا', 'لِأَنَّ'],
    model: {
      text: 'فِي وَسَطِ مَدِينَتِي يُوجَدُ مَسْجِدٌ قَدِيمٌ، عُمْرُهُ مِئَةُ سَنَةٍ، وَهُوَ مَبْنِيٌّ مِنَ الطُّوبِ الأَحْمَرِ. وَبِجَانِبِهِ مَكْتَبَةٌ حَدِيثَةٌ، مَبْنِيَّةٌ مِنَ الزُّجَاجِ وَالمَعْدِنِ. المَسْجِدُ هَادِئٌ وَتَارِيخِيٌّ، بَيْنَمَا المَكْتَبَةُ مُضِيئَةٌ وَوَاسِعَةٌ. أُفَضِّلُ المَسْجِدَ القَدِيمَ، لِأَنَّ جَدِّي كَانَ يُصَلِّي فِيهِ، وَلِأَنَّهُ جُزْءٌ مِنْ تَارِيخِ مَدِينَتِي.',
      en: '“In the middle of my town there is an old mosque, a hundred years old, built of red brick. Next to it is a modern library, built of glass and metal. The mosque is calm and historic, whereas the library is bright and spacious. I prefer the old mosque, because my grandfather used to pray there, and because it is part of my town’s history.”',
      find: ['مَبْنِيٌّ مِنَ الطُّوبِ', 'مَبْنِيَّةٌ مِنَ الزُّجَاجِ', 'بَيْنَمَا المَكْتَبَةُ', 'أُفَضِّلُ المَسْجِدَ القَدِيمَ'],
    },
  },
  checkCore: 'use مَبْنِيٌّ / مَبْنِيَّةٌ مِنْ correctly?',
  checkDevelop: 'compare with بَيْنَمَا and make plurals agree (feminine singular)?',
});
