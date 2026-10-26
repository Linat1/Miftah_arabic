'use strict';
/* Apply Workshop · F6-W06 · F6-L11 (F6 consolidation: town and transport) + F6-L12 (final review and assessment). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f6-w06', pair: ['f6-l11', 'f6-l12'],
  title: 'Welcome to Our Town', arShort: 'أَهْلًا بِكُمْ فِي مَدِينَتِنَا',
  focus: 'Students use all of F6 for one real purpose: a group of students from Morocco is visiting, so they plan a welcome guide — places and where they are, how to travel and how long it takes, a building and its material, advantages and disadvantages, and a route with commands — then present it and write it up.',
  sortTitle: 'Place or transport?', sortCats: ['Places, positions and buildings', 'Transport, tickets and routes'],
  sort: [
    { ar: 'مُقَابِلَ المَتْحَفِ', cat: 0 }, { ar: 'تُوجَدُ مَكْتَبَةٌ', cat: 0 }, { ar: 'مَبْنِيٌّ مِنَ الطُّوبِ', cat: 0 }, { ar: 'فِي وَسَطِ المَدِينَةِ', cat: 0 },
    { ar: 'تَذْكِرَةٌ مُفْرَدَةٌ', cat: 1 }, { ar: 'تَسْتَغْرِقُ الرِّحْلَةُ سَاعَةً', cat: 1 }, { ar: 'انْعَطِفُوا يَمِينًا', cat: 1 }, { ar: 'أَذْهَبُ بِالحَافِلَةِ', cat: 1 },
  ],
  dialogue: {
    title: 'The visitors arrive', ar: 'وَصَلَ الزُّوَّارُ',
    lines: [
      ['A', 'أَهْلًا بِكُمْ فِي مَدِينَتِنَا! هَلْ كَانَتِ الرِّحْلَةُ طَوِيلَةً؟', 'Welcome to our town! Was the journey long?'],
      ['B', 'نَعَمْ، سَافَرْنَا بِالطَّائِرَةِ ثُمَّ بِالقِطَارِ، وَاسْتَغْرَقَتِ الرِّحْلَةُ سِتَّ سَاعَاتٍ.', 'Yes, we travelled by plane and then by train, and the journey took six hours.'],
      ['A', 'فِي وَسَطِ المَدِينَةِ يُوجَدُ مَتْحَفٌ، وَتُوجَدُ سُوقٌ قَدِيمَةٌ بِجَانِبِ المَحَطَّةِ.', 'In the town centre there is a museum, and there is an old market next to the station.'],
      ['B', 'كَيْفَ نَذْهَبُ إِلَى المَتْحَفِ؟', 'How do we get to the museum?'],
      ['A', 'اذْهَبُوا مُسْتَقِيمًا، ثُمَّ انْعَطِفُوا يَسَارًا. هُوَ مَبْنِيٌّ مِنَ الطُّوبِ الأَحْمَرِ.', 'Go straight on, then turn left. It is built of red brick.'],
      ['A', 'مِنْ مَزَايَا مَدِينَتِنَا أَنَّهَا آمِنَةٌ، لٰكِنَّهَا تَفْتَقِرُ إِلَى مَطَارٍ!', 'One advantage of our town is that it is safe, but it lacks an airport!'],
    ],
    notes: 'All four F6 grammar families (F6-L11) appear: يُوجَدُ / تُوجَدُ + positions, transport + تَسْتَغْرِقُ, مَبْنِيٌّ مِنْ + مَزَايَا / عُيُوب, and group commands — the content of the F6-L12 assessment, given a real purpose. Note: سُوقٌ can be masculine or feminine; here it is feminine (سُوقٌ قَدِيمَةٌ).',
  },
  card: {
    title: 'Role-play card — the visitors’ questions', ar: 'أَسْئِلَةُ الزُّوَّارِ', you: 'the student guide', them: 'a visiting student from Morocco',
    mix: 'the four F6 grammar families (F6-L11) in an assessment-style role play (F6-L12)',
    tasks: [
      { ex: 'مَاذَا يُوجَدُ فِي مَدِينَتِكُمْ؟', task: 'Three places, one with a position.', plan: 'مَاذَا ← يُوجَدُ … وَتُوجَدُ … بِجَانِبِ …', model: 'يُوجَدُ مَتْحَفٌ وَمَسْجِدٌ، وَتُوجَدُ حَدِيقَةٌ عَامَّةٌ بِجَانِبِ النَّهْرِ.', modelEn: 'There is a museum and a mosque, and there is a public park next to the river.' },
      { ex: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟ وَكَمْ تَسْتَغْرِقُ الرِّحْلَةُ؟', task: 'Transport + duration.', plan: 'كَيْفَ / كَمْ ← أَذْهَبُ بِالحَافِلَةِ … ، وَتَسْتَغْرِقُ …', model: 'أَذْهَبُ بِالحَافِلَةِ، وَتَسْتَغْرِقُ الرِّحْلَةُ عِشْرِينَ دَقِيقَةً.', modelEn: 'I go by bus, and the journey takes twenty minutes.' },
      { ex: 'صِفْ مَبْنًى مُهِمًّا فِي مَدِينَتِكُمْ.', task: 'What it is, its material, two adjectives.', plan: 'صِفْ ← … مَبْنِيٌّ مِنَ … ، وَهُوَ …', model: 'المَكْتَبَةُ مَبْنِيَّةٌ مِنَ الزُّجَاجِ، وَهِيَ حَدِيثَةٌ وَمُضِيئَةٌ.', modelEn: 'The library is built of glass, and it is modern and bright.' },
      { ex: 'مَا مَزَايَا مَدِينَتِكُمْ وَعُيُوبُهَا؟', task: 'One advantage, one disadvantage.', plan: 'مَا ← مِنْ مَزَايَاهَا أَنَّ … ، لٰكِنْ مِنْ عُيُوبِهَا أَنَّ …', model: 'مِنْ مَزَايَاهَا أَنَّهَا هَادِئَةٌ، لٰكِنْ مِنْ عُيُوبِهَا أَنَّ المَحَلَّاتِ غَالِيَةٌ.', modelEn: 'One advantage is that it is quiet, but one disadvantage is that the shops are expensive.' },
      { unexpected: true, ex: 'كَيْفَ أَذْهَبُ مِنْ هُنَا إِلَى السُّوقِ؟', task: 'Directions to a girl: three steps.', plan: 'كَيْفَ ← اذْهَبِي … ثُمَّ انْعَطِفِي … وَاعْبُرِي …', model: 'اذْهَبِي مُسْتَقِيمًا، ثُمَّ انْعَطِفِي يَمِينًا، وَاعْبُرِي الشَّارِعَ. السُّوقُ مُقَابِلَ البَنْكِ.', modelEn: 'Go straight on, then turn right, and cross the street. The market is opposite the bank.' },
    ],
    girl: 'task 5 is already to a girl; to a boy say: اذْهَبْ · انْعَطِفْ · اعْبُرْ',
  },
  talk: {
    title: 'Our welcome speech', ar: 'كَلِمَةُ التَّرْحِيبِ',
    text: 'Give a welcome speech of 30–45 seconds to the visitors: what there is in your town and where, how people travel and how long journeys take, one building and its material, one advantage and one disadvantage, and directions to your favourite place.',
    routes: {
      core: 'أَهْلًا بِكُمْ! فِي مَدِينَتِنَا يُوجَدُ … · أَذْهَبُ بِالحَافِلَةِ …',
      develop: 'Add a building (مَبْنِيٌّ مِنَ …) and one advantage.',
      stretch: 'Use all four families, including group commands: اذْهَبُوا · انْعَطِفُوا · اعْبُرُوا.',
    },
    phrases: [['فِي مَدِينَتِنَا يُوجَدُ … وَتُوجَدُ …', 'in our town there is …'], ['تَسْتَغْرِقُ الرِّحْلَةُ …', 'the journey takes …'], ['مَبْنِيٌّ مِنَ … · مِنْ مَزَايَاهَا أَنَّ …', 'built of … · an advantage is that …'], ['اذْهَبُوا … ثُمَّ انْعَطِفُوا …', 'go (all) … then turn …']],
  },
  task: {
    title: 'Our welcome guide', ar: 'دَلِيلُ التَّرْحِيبِ',
    text: 'Write a welcome guide (about 55–75 words) for the visiting students. Include: • places with يُوجَدُ / تُوجَدُ and positions • how to travel around and how long it takes • one building and what it is built of • one advantage and one disadvantage of the town • a route to one place with group commands. Then underline one example of each F6 grammar family.',
    range: [45, 95],
    phrases: [['أَهْلًا بِكُمْ فِي مَدِينَةِ …', 'welcome to the town of …'], ['يُوجَدُ … بِجَانِبِ … وَتُوجَدُ … مُقَابِلَ …', 'there is … next to … and … opposite …'], ['تَسْتَغْرِقُ الرِّحْلَةُ بِالحَافِلَةِ …', 'the journey by bus takes …'], ['مِنْ مَزَايَاهَا أَنَّ … ، لٰكِنَّهَا تَفْتَقِرُ إِلَى …', 'an advantage is that …, but it lacks …']],
    coreFrames: [
      { ar: 'أَهْلًا بِكُمْ فِي مَدِينَةِ ______ !', en: 'Welcome to the town of …!' },
      { ar: 'يُوجَدُ ______ بِجَانِبِ ______ .', en: 'There is … next to …' },
      { ar: 'نَذْهَبُ بِالحَافِلَةِ، وَتَسْتَغْرِقُ الرِّحْلَةُ ______ .', en: 'We go by bus, and the journey takes …' },
      { ar: '______ مَبْنِيٌّ مِنَ ______ .', en: '… is built of …' },
      { ar: 'اذْهَبُوا ______ ، ثُمَّ انْعَطِفُوا ______ .', en: 'Go …, then turn …' },
    ],
    developFrames: [
      { ar: 'مِنْ مَزَايَاهَا أَنَّ ______ .', en: 'An advantage is that …' },
      { ar: 'لٰكِنَّهَا تَفْتَقِرُ إِلَى ______ .', en: 'But it lacks …' },
      { ar: 'وَتُوجَدُ ______ مُقَابِلَ ______ .', en: 'And there is … opposite …' },
    ],
    bank: ['يُوجَدُ · تُوجَدُ', 'بِجَانِبِ · مُقَابِلَ', 'بِالحَافِلَةِ · مَشْيًا', 'تَسْتَغْرِقُ', 'مَبْنِيٌّ مِنَ', 'مِنْ مَزَايَاهَا أَنَّ', 'تَفْتَقِرُ إِلَى', 'اذْهَبُوا · انْعَطِفُوا'],
    model: {
      text: 'أَهْلًا بِكُمْ فِي مَدِينَةِ لِيسْتَر! فِي وَسَطِ المَدِينَةِ يُوجَدُ مَتْحَفٌ كَبِيرٌ بِجَانِبِ الجَامِعَةِ، وَتُوجَدُ سُوقٌ قَدِيمَةٌ مُقَابِلَ المَحَطَّةِ. نَذْهَبُ بِالحَافِلَةِ، وَتَسْتَغْرِقُ الرِّحْلَةُ إِلَى الوَسَطِ عِشْرِينَ دَقِيقَةً. المَتْحَفُ مَبْنِيٌّ مِنَ الطُّوبِ الأَحْمَرِ، وَهُوَ قَدِيمٌ وَجَمِيلٌ. مِنْ مَزَايَا مَدِينَتِنَا أَنَّهَا آمِنَةٌ وَنَشِيطَةٌ، لٰكِنَّهَا تَفْتَقِرُ إِلَى مَطَارٍ. لِلذَّهَابِ إِلَى المَتْحَفِ: اذْهَبُوا مُسْتَقِيمًا، ثُمَّ انْعَطِفُوا يَسَارًا، وَاعْبُرُوا الشَّارِعَ.',
      en: '“Welcome to Leicester! In the city centre there is a big museum next to the university, and there is an old market opposite the station. We go by bus, and the journey to the centre takes twenty minutes. The museum is built of red brick, and it is old and beautiful. One advantage of our city is that it is safe and lively, but it lacks an airport. To go to the museum: go straight on, then turn left, and cross the street.”',
      find: ['يُوجَدُ مَتْحَفٌ كَبِيرٌ', 'تَسْتَغْرِقُ الرِّحْلَةُ', 'مَبْنِيٌّ مِنَ الطُّوبِ', 'اذْهَبُوا مُسْتَقِيمًا'],
    },
  },
});
