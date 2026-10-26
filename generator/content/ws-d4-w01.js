'use strict';
/* Apply Workshop · D4-W01 · D4-L01 (the natural world: environment and climate) + D4-L02 (weather patterns). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd4-w01', pair: ['d4-l01', 'd4-l02'],
  title: 'Planning a School Trip to Jordan', arShort: 'نُخَطِّطُ لِرِحْلَةٍ إِلَى الأُرْدُنِّ',
  focus: 'Students join geography and climate with weather and forecasts: they plan a school trip to Jordan — describing natural features and climate in formal language, comparing the weather with Britain, reading a forecast (يُتَوَقَّعُ أَنْ …) — and write a trip briefing for parents with packing advice.',
  dialogue: {
    title: 'Where shall we go?', ar: 'إِلَى أَيْنَ نَذْهَبُ؟',
    lines: [
      ['A', 'بِمَاذَا يَتَمَيَّزُ الأُرْدُنُّ؟', 'What is Jordan distinguished by?'],
      ['B', 'يَتَمَيَّزُ بِصَحْرَاءَ وَاسِعَةٍ فِي الجَنُوبِ، وَبِالبَحْرِ المَيِّتِ فِي الغَرْبِ.', 'It is distinguished by a vast desert in the south and the Dead Sea in the west.'],
      ['A', 'وَكَيْفَ المَنَاخُ فِي الرَّبِيعِ؟', 'And what is the climate like in spring?'],
      ['B', 'يَسُودُ مَنَاخٌ مُعْتَدِلٌ، وَلٰكِنْ يُتَوَقَّعُ أَنْ تَرْتَفِعَ دَرَجَاتُ الحَرَارَةِ فِي الصَّحْرَاءِ إِلَى ثَلَاثِينَ دَرَجَةً.', 'A mild climate prevails, but temperatures are expected to rise to thirty degrees in the desert.'],
      ['A', 'هَلْ هُوَ أَحَرُّ مِنْ بِرِيطَانِيَا؟', 'Is it hotter than Britain?'],
      ['B', 'نَعَمْ، بِكَثِيرٍ! وَفِي اللَّيْلِ تَنْخَفِضُ الحَرَارَةُ، لِذٰلِكَ يَجِبُ أَنْ نَأْخُذَ مَلَابِسَ دَافِئَةً.', 'Yes, much! And at night the temperature falls, so we must take warm clothes.'],
    ],
    notes: 'Formal geography (يَتَمَيَّزُ بِ… · يَسُودُ مَنَاخٌ …) comes from D4-L01; temperatures rising and falling, يُتَوَقَّعُ أَنْ + -a and comparatives (أَحَرُّ مِنْ) from D4-L02.',
  },
  card: {
    title: 'Role-play card — the trip planning meeting', ar: 'اجْتِمَاعُ التَّخْطِيطِ', you: 'the student trip planner', them: 'the head of geography',
    mix: 'natural features, climate and formal verbs (D4-L01) with weather as subject, forecasts and comparisons (D4-L02)',
    tasks: [
      { ex: 'صِفْ طَبِيعَةَ الأُرْدُنِّ.', task: 'Two natural features with agreeing adjectives and a place.', plan: 'صِفْ ← يَتَمَيَّزُ بِ… فِي الجَنُوبِ · جِبَالٌ …', model: 'يَتَمَيَّزُ بِجِبَالٍ عَالِيَةٍ فِي البَتْرَاءِ، وَبِصَحْرَاءَ وَاسِعَةٍ فِي وَادِي رَمٍّ.', modelEn: 'It is distinguished by high mountains in Petra and a vast desert in Wadi Rum.' },
      { ex: 'مَا المَنَاخُ الَّذِي يَسُودُ هُنَاكَ؟', task: 'Climate with يَسُودُ and a season.', plan: 'مَا ← يَسُودُ مَنَاخٌ … فِي …', model: 'يَسُودُ مَنَاخٌ حَارٌّ وَجَافٌّ فِي الصَّيْفِ، وَمُعْتَدِلٌ فِي الرَّبِيعِ.', modelEn: 'A hot, dry climate prevails in summer, and a mild one in spring.' },
      { ex: 'مَا الطَّقْسُ المُتَوَقَّعُ فِي أُسْبُوعِ الرِّحْلَةِ؟', task: 'A forecast with يُتَوَقَّعُ أَنْ.', plan: '______________', model: 'يُتَوَقَّعُ أَنْ تُشْرِقَ الشَّمْسُ، وَأَنْ تَهُبَّ رِيَاحٌ خَفِيفَةٌ فِي المَسَاءِ.', modelEn: 'The sun is expected to shine, and light winds are expected in the evening.' },
      { ex: 'قَارِنْ طَقْسَ الأُرْدُنِّ بِطَقْسِ بِرِيطَانِيَا.', task: 'Two comparatives.', plan: '______________', model: 'الأُرْدُنُّ أَحَرُّ وَأَجَفُّ مِنْ بِرِيطَانِيَا، أَمَّا بِرِيطَانِيَا فَأَكْثَرُ مَطَرًا.', modelEn: 'Jordan is hotter and drier than Britain, whereas Britain is rainier.' },
      { unexpected: true, ex: 'مَاذَا يَجِبُ أَنْ يَأْخُذَ الطُّلَّابُ مَعَهُمْ؟ لِمَاذَا؟', task: 'Packing advice linked to the weather.', plan: '______________', model: 'يَجِبُ أَنْ يَأْخُذُوا قُبَّعَةً وَمَاءً بِسَبَبِ الشَّمْسِ، وَسُتْرَةً لِأَنَّ الحَرَارَةَ تَنْخَفِضُ لَيْلًا.', modelEn: 'They must take a hat and water because of the sun, and a jacket because the temperature falls at night.' },
    ],
    girl: 'when the planner is a girl, the teacher says: صِفِي · قَارِنِي',
  },
  talk: {
    title: 'Jordan in one minute: nature and weather', ar: 'الأُرْدُنُّ فِي دَقِيقَةٍ',
    text: 'Present Jordan (or another country you know) to the trip group for one minute: three natural features and where they are, the climate in two seasons, the forecast for the trip week, a comparison with Britain, and what to pack.',
    routes: {
      core: 'يَتَمَيَّزُ بِ… · الطَّقْسُ … · أَحَرُّ مِنْ …',
      develop: 'Add يَسُودُ مَنَاخٌ … and temperatures that rise or fall.',
      stretch: 'Add يُتَوَقَّعُ أَنْ + -a, يَتَّسِمُ بِ… and advice with a reason.',
    },
  },
  task: {
    title: 'A trip briefing for parents', ar: 'نَشْرَةُ الرِّحْلَةِ لِلْأَهْلِ',
    text: 'Write a briefing (about 60–80 words) for parents about the trip to Jordan. Include: • three natural features with agreeing adjectives and where they are • the climate with يَسُودُ … • the forecast with يُتَوَقَّعُ أَنْ … and temperatures rising or falling • a comparison with Britain • two packing tips with reasons.',
    range: [50, 100],
    phrases: [['يَتَمَيَّزُ الأُرْدُنُّ بِصَحْرَاءَ وَاسِعَةٍ', 'Jordan is distinguished by a vast desert'], ['يَسُودُ مَنَاخٌ مُعْتَدِلٌ فِي الرَّبِيعِ', 'a mild climate prevails in spring'], ['يُتَوَقَّعُ أَنْ تَرْتَفِعَ دَرَجَاتُ الحَرَارَةِ', 'temperatures are expected to rise'], ['أَحَرُّ مِنْ · أَكْثَرُ مَطَرًا', 'hotter than · rainier']],
    coreFrames: [
      { ar: 'يَتَمَيَّزُ الأُرْدُنُّ بِ ______ فِي ______ .', en: 'Jordan is distinguished by … in …' },
      { ar: 'يَسُودُ مَنَاخٌ ______ فِي الرَّبِيعِ.', en: 'A … climate prevails in spring.' },
      { ar: 'يُتَوَقَّعُ أَنْ ______ .', en: 'It is expected that …' },
      { ar: 'الأُرْدُنُّ ______ مِنْ بِرِيطَانِيَا.', en: 'Jordan is …-er than Britain.' },
      { ar: 'يَجِبُ أَنْ يَأْخُذَ الطُّلَّابُ ______ لِأَنَّ ______ .', en: 'Students must take … because …' },
    ],
    developFrames: [
      { ar: 'تَرْتَفِعُ / تَنْخَفِضُ دَرَجَاتُ الحَرَارَةِ إِلَى ______ .', en: 'Temperatures rise / fall to …' },
      { ar: 'أَمَّا بِرِيطَانِيَا فَ ______ .', en: 'As for Britain, …' },
    ],
    bank: ['صَحْرَاءُ وَاسِعَةٌ', 'جِبَالٌ عَالِيَةٌ', 'يَتَمَيَّزُ بِ… · يَتَّسِمُ بِ…', 'يَسُودُ مَنَاخٌ …', 'حَارٌّ · جَافٌّ · مُعْتَدِلٌ', 'تَرْتَفِعُ · تَنْخَفِضُ', 'يُتَوَقَّعُ أَنْ', 'أَحَرُّ · أَبْرَدُ مِنْ'],
    model: {
      text: 'أَعِزَّاءَنَا الأَهْلَ، يَتَمَيَّزُ الأُرْدُنُّ بِطَبِيعَةٍ مُتَنَوِّعَةٍ: جِبَالٌ عَالِيَةٌ فِي البَتْرَاءِ، وَصَحْرَاءُ وَاسِعَةٌ فِي الجَنُوبِ، وَالبَحْرُ المَيِّتُ فِي الغَرْبِ. يَسُودُ مَنَاخٌ مُعْتَدِلٌ فِي الرَّبِيعِ، وَلٰكِنْ يُتَوَقَّعُ أَنْ تَرْتَفِعَ دَرَجَاتُ الحَرَارَةِ إِلَى ثَلَاثِينَ دَرَجَةً فِي وَادِي رَمٍّ، ثُمَّ تَنْخَفِضَ كَثِيرًا فِي اللَّيْلِ. الأُرْدُنُّ أَحَرُّ وَأَجَفُّ مِنْ بِرِيطَانِيَا. لِذٰلِكَ يَجِبُ أَنْ يَأْخُذَ الطُّلَّابُ قُبَّعَةً وَمَاءً بِسَبَبِ الشَّمْسِ، وَسُتْرَةً دَافِئَةً لِلَّيْلِ.',
      en: '“Dear parents, Jordan is distinguished by varied nature: high mountains in Petra, a vast desert in the south and the Dead Sea in the west. A mild climate prevails in spring, but temperatures are expected to rise to thirty degrees in Wadi Rum, then fall a lot at night. Jordan is hotter and drier than Britain. So students must take a hat and water because of the sun, and a warm jacket for the night.”',
      find: ['يَتَمَيَّزُ الأُرْدُنُّ', 'يَسُودُ مَنَاخٌ مُعْتَدِلٌ', 'يُتَوَقَّعُ أَنْ تَرْتَفِعَ', 'أَحَرُّ وَأَجَفُّ'],
    },
  },
});
