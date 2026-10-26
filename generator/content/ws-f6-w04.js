'use strict';
/* Apply Workshop · F6-W04 · F6-L07 (the built environment: buildings and materials) + F6-L08 (giving directions). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f6-w04', pair: ['f6-l07', 'f6-l08'],
  title: 'A Heritage Walking Tour', arShort: 'جَوْلَةٌ فِي المَدِينَةِ القَدِيمَةِ',
  focus: 'Students join buildings and materials with directions: as tour guides they lead a group from an old stone mosque to a modern glass library, describing each building (what it is built of, old or new) and giving directions to a boy, a girl and the whole group, then write the tour leaflet.',
  dialogue: {
    title: 'The tour guide speaks', ar: 'يَتَكَلَّمُ المُرْشِدُ',
    lines: [
      ['A', 'هٰذَا المَسْجِدُ قَدِيمٌ جِدًّا، وَهُوَ مَبْنِيٌّ مِنَ الحَجَرِ.', 'This mosque is very old, and it is built of stone.'],
      ['B', 'وَكَيْفَ نَذْهَبُ إِلَى المَكْتَبَةِ الجَدِيدَةِ؟', 'And how do we get to the new library?'],
      ['A', 'اذْهَبُوا مُسْتَقِيمًا حَتَّى الدَّوَّارِ، ثُمَّ انْعَطِفُوا يَسَارًا.', 'Go (all) straight on as far as the roundabout, then turn left.'],
      ['B', 'هَلِ المَكْتَبَةُ مَبْنِيَّةٌ مِنَ الحَجَرِ أَيْضًا؟', 'Is the library built of stone too?'],
      ['A', 'لَا، هِيَ حَدِيثَةٌ وَمَبْنِيَّةٌ مِنَ الزُّجَاجِ وَالمَعْدِنِ.', 'No, it is modern and built of glass and metal.'],
      ['A', 'المَسْجِدُ هَادِئٌ وَتَارِيخِيٌّ، بَيْنَمَا المَكْتَبَةُ عَالِيَةٌ وَمُضِيئَةٌ.', 'The mosque is quiet and historic, whereas the library is tall and bright.'],
    ],
    notes: 'Buildings, مَبْنِيٌّ / مَبْنِيَّةٌ مِنْ … and بَيْنَمَا come from F6-L07; commands to a group (اذْهَبُوا · انْعَطِفُوا) and route words from F6-L08.',
  },
  card: {
    title: 'Role-play card — the tour guide', ar: 'المُرْشِدُ السِّيَاحِيُّ', you: 'the tour guide', them: 'a visitor',
    mix: 'buildings, materials, old / new and بَيْنَمَا (F6-L07) with commands to a boy, a girl and a group, route words and signs (F6-L08)',
    tasks: [
      { ex: 'مَا هٰذَا المَبْنَى؟', task: 'Say what it is and what it is built of.', plan: 'مَا ← هٰذَا … ، وَهُوَ مَبْنِيٌّ مِنَ …', model: 'هٰذَا المَسْجِدُ الكَبِيرُ، وَهُوَ مَبْنِيٌّ مِنَ الحَجَرِ.', modelEn: 'This is the big mosque, and it is built of stone.' },
      { ex: 'كَيْفَ أَذْهَبُ إِلَى المَكْتَبَةِ؟', task: 'Directions to a boy: two steps.', plan: 'كَيْفَ ← اذْهَبْ … ثُمَّ انْعَطِفْ …', model: 'اذْهَبْ مُسْتَقِيمًا، ثُمَّ انْعَطِفْ يَمِينًا عِنْدَ الدَّوَّارِ.', modelEn: 'Go straight on, then turn right at the roundabout.' },
      { ex: 'وَأَنَا؟ كَيْفَ أَذْهَبُ إِلَى المَتْحَفِ؟', task: 'Directions to a girl: two steps.', plan: 'كَيْفَ ← اعْبُرِي … ثُمَّ اذْهَبِي …', model: 'اعْبُرِي الشَّارِعَ، ثُمَّ اذْهَبِي مُسْتَقِيمًا حَتَّى المَتْحَفِ.', modelEn: 'Cross the street, then go straight on as far as the museum.' },
      { ex: 'مَا الفَرْقُ بَيْنَ المَسْجِدِ وَالمَكْتَبَةِ؟', task: 'Compare with بَيْنَمَا.', plan: 'مَا ← المَسْجِدُ … بَيْنَمَا المَكْتَبَةُ …', model: 'المَسْجِدُ قَدِيمٌ وَمِنَ الحَجَرِ، بَيْنَمَا المَكْتَبَةُ حَدِيثَةٌ وَمِنَ الزُّجَاجِ.', modelEn: 'The mosque is old and made of stone, whereas the library is modern and made of glass.' },
      { unexpected: true, ex: 'مَاذَا تَعْنِي هٰذِهِ اللَّافِتَةُ: «مَمْنُوعُ الدُّخُولِ»؟', task: 'Explain the sign and send the group to the exit.', plan: 'مَاذَا ← تَعْنِي … اذْهَبُوا إِلَى المَخْرَجِ', model: 'تَعْنِي: لَا تَدْخُلُوا هُنَا. اذْهَبُوا إِلَى المَخْرَجِ عَلَى اليَسَارِ.', modelEn: 'It means: don’t go in here. Go (all) to the exit on the left.' },
    ],
    girl: 'tasks 2 and 3 already practise both: to a boy (اذْهَبْ · انْعَطِفْ) and to a girl (اذْهَبِي · اعْبُرِي)',
  },
  talk: {
    title: 'My mini heritage tour', ar: 'جَوْلَتِي الصَّغِيرَةُ',
    text: 'Talk for 30–45 seconds as a tour guide in your town (or a city you know): describe an old building and a new one (what they are built of, two adjectives each, a comparison with بَيْنَمَا), then give the group directions from one to the other.',
    routes: {
      core: 'هٰذَا … مَبْنِيٌّ مِنَ … · اذْهَبُوا مُسْتَقِيمًا …',
      develop: 'Two adjectives for each building and three route steps.',
      stretch: 'Add بَيْنَمَا, a sign (مَدْخَلٌ · مَخْرَجٌ · مَمْنُوعُ الدُّخُولِ) and which building you prefer.',
    },
    phrases: [['… مَبْنِيٌّ / مَبْنِيَّةٌ مِنَ …', '… is built of …'], ['… قَدِيمٌ ، بَيْنَمَا … حَدِيثَةٌ', '… is old, whereas … is modern'], ['اذْهَبُوا مُسْتَقِيمًا حَتَّى …', 'go (all) straight on as far as …'], ['انْعَطِفُوا يَمِينًا / يَسَارًا · اعْبُرُوا …', 'turn right / left · cross …']],
  },
  task: {
    title: 'Our heritage tour leaflet', ar: 'نَشْرَةُ الجَوْلَةِ',
    text: 'Write a tour leaflet (about 45–65 words) for visitors. Include: • an old building: what it is, what it is built of, two adjectives • a modern building: the same • a comparison with بَيْنَمَا • directions for the group from the first to the second (at least four steps with group commands) • one sign they will see • which building you prefer and why.',
    range: [40, 85],
    phrases: [['نَبْدَأُ الجَوْلَةَ عِنْدَ …', 'we start the tour at …'], ['… مَبْنِيٌّ مِنَ الحَجَرِ ، بَيْنَمَا … مِنَ الزُّجَاجِ', '… is built of stone, whereas … is made of glass'], ['اذْهَبُوا … ثُمَّ انْعَطِفُوا … وَاعْبُرُوا …', 'go … then turn … and cross …'], ['سَتَرَوْنَ لَافِتَةَ «…»', 'you will see a “…” sign']],
    coreFrames: [
      { ar: 'نَبْدَأُ الجَوْلَةَ عِنْدَ ______ .', en: 'We start the tour at …' },
      { ar: 'هُوَ مَبْنِيٌّ مِنَ ______ ، وَهُوَ ______ .', en: 'It is built of …, and it is …' },
      { ar: 'اذْهَبُوا مُسْتَقِيمًا حَتَّى ______ .', en: 'Go straight on as far as …' },
      { ar: 'ثُمَّ انْعَطِفُوا ______ .', en: 'Then turn …' },
      { ar: '______ مَبْنِيَّةٌ مِنَ ______ .', en: '(the second building) is built of …' },
    ],
    developFrames: [
      { ar: '______ قَدِيمٌ، بَيْنَمَا ______ حَدِيثَةٌ.', en: '… is old, whereas … is modern.' },
      { ar: 'اعْبُرُوا ______ أَمَامَ ______ .', en: 'Cross … in front of …' },
      { ar: 'أُفَضِّلُ ______ لِأَنَّ ______ .', en: 'I prefer … because …' },
    ],
    bank: ['حَجَرٌ · طُوبٌ', 'زُجَاجٌ · مَعْدِنٌ', 'مَبْنِيٌّ · مَبْنِيَّةٌ', 'قَدِيمٌ · حَدِيثٌ · عَالٍ', 'بَيْنَمَا', 'اذْهَبُوا · انْعَطِفُوا', 'اعْبُرُوا · حَتَّى', 'مَدْخَلٌ · مَخْرَجٌ'],
    model: {
      text: 'نَبْدَأُ الجَوْلَةَ عِنْدَ المَسْجِدِ الكَبِيرِ. هُوَ مَبْنِيٌّ مِنَ الحَجَرِ، وَهُوَ قَدِيمٌ وَهَادِئٌ. ثُمَّ اذْهَبُوا مُسْتَقِيمًا حَتَّى الدَّوَّارِ، وَانْعَطِفُوا يَسَارًا، وَاعْبُرُوا الشَّارِعَ أَمَامَ السُّوقِ. سَتَرَوْنَ لَافِتَةَ «مَدْخَلٌ». هٰذِهِ المَكْتَبَةُ الجَدِيدَةُ، وَهِيَ مَبْنِيَّةٌ مِنَ الزُّجَاجِ وَالمَعْدِنِ. المَسْجِدُ تَارِيخِيٌّ، بَيْنَمَا المَكْتَبَةُ حَدِيثَةٌ وَمُضِيئَةٌ. أُفَضِّلُ المَسْجِدَ لِأَنَّهُ جَمِيلٌ وَهَادِئٌ.',
      en: '“We start the tour at the big mosque. It is built of stone, and it is old and quiet. Then go straight on as far as the roundabout, turn left, and cross the street in front of the market. You will see an “Entrance” sign. This is the new library, and it is built of glass and metal. The mosque is historic, whereas the library is modern and bright. I prefer the mosque because it is beautiful and peaceful.”',
      find: ['مَبْنِيٌّ مِنَ الحَجَرِ', 'اذْهَبُوا مُسْتَقِيمًا', 'وَاعْبُرُوا الشَّارِعَ', 'بَيْنَمَا المَكْتَبَةُ'],
    },
  },
});
