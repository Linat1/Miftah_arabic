'use strict';
/* Practice Room · D4-L02 · Weather patterns — forecasts and comparisons. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd4-l02',
  arShort: 'أَنْمَاطُ الطَّقْسِ',
  grammar: 'the weather word as the subject of the verb (yasquṭu al-maṭaru · tahubbu al-riyāḥu · tushriqu al-shamsu); temperatures rise / fall (tartafiʿu / tankhafiḍu darajātu al-ḥarāra); comparing places (aḥarru min · abradu min · akthar maṭaran); forecasting: yutawaqqaʿu an + verb in -a',
  focus: 'Students run their own speaking and writing practice with the weather: say the weather phrases, act a short forecast dialogue, answer question cards, do a role-play card planning a trip around the forecast, give a one-minute TV forecast, then build, fix and write a weather report comparing two cities.',
  words1: 'Weather', words2: 'Weather verbs',
  dialogue: {
    title: 'What’s the weather tomorrow?', ar: 'كَيْفَ الطَّقْسُ غَدًا؟',
    lines: [
      ['A', 'كَيْفَ الطَّقْسُ غَدًا فِي لَنْدَنَ؟', 'What’s the weather tomorrow in London?'],
      ['B', 'يُتَوَقَّعُ أَنْ يَسْقُطَ المَطَرُ فِي الصَّبَاحِ، وَأَنْ تَهُبَّ رِيَاحٌ قَوِيَّةٌ.', 'Rain is expected in the morning, and strong winds.'],
      ['A', 'وَدَرَجَاتُ الحَرَارَةِ؟', 'And temperatures?'],
      ['B', 'تَنْخَفِضُ إِلَى ثَمَانِي دَرَجَاتٍ.', 'They will fall to eight degrees.'],
      ['A', 'وَفِي دُبَيٍّ؟', 'And in Dubai?'],
      ['B', 'تُشْرِقُ الشَّمْسُ، وَتَرْتَفِعُ الحَرَارَةُ إِلَى ثَلَاثِينَ. دُبَيُّ أَحَرُّ مِنْ لَنْدَنَ بِكَثِيرٍ!', 'The sun shines and it rises to thirty. Dubai is much hotter than London!'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: give the REAL forecast for your town and another city.',
  },
  questions: [
    { q: 'كَيْفَ الطَّقْسُ اليَوْمَ؟', en: 'What’s the weather today?', start: 'اليَوْمَ … ← تُشْرِقُ الشَّمْسُ / يَسْقُطُ المَطَرُ', more: '… وَدَرَجَةُ الحَرَارَةِ …' },
    { q: 'مَا الطَّقْسُ المُتَوَقَّعُ فِي نِهَايَةِ الأُسْبُوعِ؟', en: 'What is the expected weather at the weekend?', start: 'يُتَوَقَّعُ أَنْ …', more: '… لِذٰلِكَ سَنَبْقَى فِي البَيْتِ / سَنَخْرُجُ' },
    { q: 'أَيُّهُمَا أَبْرَدُ: بَلَدُكَ أَمْ بَلَدُ عَائِلَتِكَ؟', en: 'Which is colder: your country or your family’s?', start: '… أَبْرَدُ مِنْ …', more: '… خُصُوصًا فِي …' },
    { q: 'مَاذَا تَفْعَلُ عِنْدَمَا تَهُبُّ رِيَاحٌ قَوِيَّةٌ؟', en: 'What do you do when strong winds blow?', start: 'عِنْدَمَا تَهُبُّ الرِّيَاحُ …', more: '… لِأَنَّ …' },
    { q: 'مَا فَصْلُكَ المُفَضَّلُ؟ لِمَاذَا؟', en: 'Your favourite season? Why?', start: 'أُحِبُّ … لِأَنَّ …', more: '… تَسْقُطُ الثُّلُوجُ / تُشْرِقُ …' },
  ],
  card: {
    title: 'Role-play card — planning a school trip around the forecast', ar: 'رِحْلَةٌ وَالطَّقْسُ', you: 'the trip organiser (student)', them: 'the teacher',
    tasks: [
      { ex: 'مَا تَوَقُّعَاتُ الطَّقْسِ يَوْمَ الخَمِيسِ؟', task: 'Give the forecast.', plan: 'التَّوَقُّعَاتُ ← يُتَوَقَّعُ أَنْ يَسْقُطَ …', model: 'يُتَوَقَّعُ أَنْ يَسْقُطَ المَطَرُ، وَأَنْ تَنْخَفِضَ الحَرَارَةُ إِلَى عَشْرِ دَرَجَاتٍ.', modelEn: 'Rain is expected, and the temperature should drop to ten degrees.' },
      { ex: 'وَيَوْمَ الجُمُعَةِ؟', task: 'Compare the days.', plan: 'المُقَارَنَةُ ← الجُمُعَةُ أَدْفَأُ / أَقَلُّ مَطَرًا …', model: 'الجُمُعَةُ أَدْفَأُ وَأَقَلُّ مَطَرًا، وَتُشْرِقُ الشَّمْسُ بَعْدَ الظُّهْرِ.', modelEn: 'Friday is warmer and less rainy, and the sun comes out in the afternoon.' },
      { ex: 'إِذَنْ مَتَى نَذْهَبُ؟', task: 'Decide + reason.', plan: '', model: 'نَذْهَبُ يَوْمَ الجُمُعَةِ، لِأَنَّ الحَدِيقَةَ مَفْتُوحَةٌ وَالجَوَّ أَفْضَلُ.', modelEn: 'We go on Friday, because the park is open and the weather is better.' },
      { unexpected: true, ex: 'وَمَاذَا يَلْبَسُ الطُّلَّابُ؟', task: 'Advise on clothes.', plan: '', model: 'يَجِبُ أَنْ يَلْبَسُوا مَعَاطِفَ خَفِيفَةً، وَيُحْضِرُوا مِظَلَّاتٍ احْتِيَاطًا.', modelEn: 'They should wear light coats and bring umbrellas just in case.' },
    ],
    girl: 'teacher to a girl: no changes needed',
    notes: 'yutawaqqaʿu an + verb in -a: an yasquṭa · an tankhafiḍa.',
  },
  talk: {
    title: 'One minute: the TV weather forecast', ar: 'النَّشْرَةُ الجَوِّيَّةُ',
    text: 'Present tomorrow’s forecast for three cities for one minute, like a TV presenter, and compare them.',
    routes: {
      core: 'Three cities with one weather sentence each.',
      develop: 'Add temperatures (تَرْتَفِعُ / تَنْخَفِضُ إِلَى …) and يُتَوَقَّعُ أَنْ …',
      stretch: 'Add two comparatives and advice (يُنْصَحُ بِحَمْلِ مِظَلَّةٍ).',
    },
  },
  builder: [
    { en: 'Strong winds blow in the north.', cols: [['تَهُبُّ', 'يَهُبُّ'], ['رِيَاحٌ قَوِيَّةٌ', 'رِيَاحًا قَوِيَّةً'], ['فِي الشَّمَالِ.', 'فِي الشَّمَالُ.']], key: [0, 0, 0], why: 'رِيَاحٌ (f.) is the subject → تَهُبُّ رِيَاحٌ.' },
    { en: 'It is expected that temperatures will rise.', cols: [['يُتَوَقَّعُ', 'يَتَوَقَّعُ'], ['أَنْ تَرْتَفِعَ', 'أَنْ تَرْتَفِعُ'], ['دَرَجَاتُ الحَرَارَةِ.', 'دَرَجَاتِ الحَرَارَةِ.']], key: [0, 0, 0], why: 'Passive يُتَوَقَّعُ; أَنْ + -a; the subject in -u.' },
    { en: 'Cairo is hotter than Amman.', cols: [['القَاهِرَةُ', 'القَاهِرَةَ'], ['أَحَرُّ', 'أَحَرَّةُ'], ['مِنْ عَمَّانَ.', 'مِنْ عَمَّانُ.']], key: [0, 0, 0], why: 'أَفْعَلُ + مِنْ, no feminine ending.' },
  ],
  errors: [
    { wrong: 'يَسْقُطُ الثُّلُوجُ فِي الجِبَالِ.', hint: 'Plural of a thing …', right: 'تَسْقُطُ الثُّلُوجُ فِي الجِبَالِ.', why: 'Non-human plural subject → feminine verb.' },
    { wrong: 'يُتَوَقَّعُ أَنْ يَسْقُطُ المَطَرُ.', hint: 'After أَنْ …', right: 'يُتَوَقَّعُ أَنْ يَسْقُطَ المَطَرُ.', why: 'أَنْ + -a.' },
    { wrong: 'لَنْدَنُ أَكْثَرُ بَارِدَةٌ مِنْ مَدْرِيدَ.', hint: 'Use the one-word comparative.', right: 'لَنْدَنُ أَبْرَدُ مِنْ مَدْرِيدَ.', why: 'بَارِدٌ → أَبْرَدُ.' },
  ],
  task: {
    title: 'A weather report: two cities', ar: 'تَقْرِيرُ الطَّقْسِ: مَدِينَتَانِ',
    text: 'Write a weather report (about 60–80 words) for a school radio show comparing tomorrow’s weather in two cities. Include: • three weather phrases with the weather word as subject • temperatures rising or falling • one يُتَوَقَّعُ أَنْ … • two comparatives • advice for listeners.',
    phrases: [['يَسْقُطُ المَطَرُ · تَهُبُّ الرِّيَاحُ', 'it rains · the winds blow'], ['تَرْتَفِعُ / تَنْخَفِضُ دَرَجَاتُ الحَرَارَةِ إِلَى …', 'temperatures rise / fall to …'], ['يُتَوَقَّعُ أَنْ …', 'it is expected that …'], ['… أَحَرُّ / أَبْرَدُ مِنْ …', '… hotter / colder than …']],
    coreFrames: [
      { ar: 'غَدًا فِي ______ ، ______ .', en: 'Tomorrow in …, …' },
      { ar: 'تَرْتَفِعُ / تَنْخَفِضُ دَرَجَاتُ الحَرَارَةِ إِلَى ______ .', en: 'Temperatures rise / fall to …' },
      { ar: 'أَمَّا فِي ______ فَ______ .', en: 'As for …, …' },
      { ar: '______ أَحَرُّ / أَبْرَدُ مِنْ ______ .', en: '… is hotter / colder than …' },
    ],
    developFrames: [
      { ar: 'يُتَوَقَّعُ أَنْ ______ بَعْدَ الظُّهْرِ.', en: 'It is expected that … in the afternoon.' },
      { ar: 'نَنْصَحُكُمْ بِ______ ، لِأَنَّ ______ .', en: 'We advise you to …, because …' },
    ],
    bank: ['يَسْقُطُ المَطَرُ', 'تَسْقُطُ الثُّلُوجُ', 'تَهُبُّ الرِّيَاحُ', 'تُشْرِقُ الشَّمْسُ', 'العَاصِفَةُ · السُّحُبُ', 'تَرْتَفِعُ · تَنْخَفِضُ', 'يُتَوَقَّعُ أَنْ', 'أَحَرُّ · أَبْرَدُ · أَكْثَرُ مَطَرًا'],
    model: {
      text: 'مَسَاءَ الخَيْرِ! هٰذِهِ نَشْرَةُ الطَّقْسِ لِيَوْمِ غَدٍ. فِي مَانْشِسْتَرَ يَسْقُطُ المَطَرُ فِي الصَّبَاحِ، وَتَهُبُّ رِيَاحٌ قَوِيَّةٌ، وَتَنْخَفِضُ دَرَجَاتُ الحَرَارَةِ إِلَى سِتِّ دَرَجَاتٍ. يُتَوَقَّعُ أَنْ تَظْهَرَ الشَّمْسُ قَلِيلًا بَعْدَ الظُّهْرِ. أَمَّا فِي إِسْطَنْبُولَ فَتُشْرِقُ الشَّمْسُ طُولَ اليَوْمِ، وَتَرْتَفِعُ الحَرَارَةُ إِلَى ثَمَانِيَ عَشْرَةَ دَرَجَةً. إِذَنْ إِسْطَنْبُولُ أَدْفَأُ مِنْ مَانْشِسْتَرَ، وَأَقَلُّ مَطَرًا بِكَثِيرٍ. نَنْصَحُكُمْ فِي مَانْشِسْتَرَ بِحَمْلِ مِظَلَّةٍ وَمِعْطَفٍ ثَقِيلٍ!',
      en: '“Good evening! Here is tomorrow’s forecast. In Manchester it will rain in the morning, strong winds will blow, and temperatures will drop to six degrees. The sun is expected to appear a little in the afternoon. As for Istanbul, the sun will shine all day, and it will rise to eighteen degrees. So Istanbul is warmer than Manchester and much less rainy. In Manchester we advise you to carry an umbrella and a heavy coat!”',
      find: ['يَسْقُطُ المَطَرُ', 'وَتَنْخَفِضُ دَرَجَاتُ الحَرَارَةِ', 'يُتَوَقَّعُ أَنْ تَظْهَرَ', 'أَدْفَأُ مِنْ مَانْشِسْتَرَ'],
    },
  },
  checkCore: 'make the weather word the subject and agree the verb?',
  checkDevelop: 'use يُتَوَقَّعُ أَنْ + -a and two comparatives?',
});
