'use strict';
/* Practice Room · F6-L02 · Locating places — maps, distance and position. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f6-l02',
  arShort: 'تَحْدِيدُ الأَمَاكِنِ',
  grammar: 'ayna …?; positions + genitive (bi-jānibi · amāma · khalfa · bayna … wa … · muqābila · ʿalā yamīni / yasāri · fī wasaṭi); qarībun min / baʿīdun ʿan with agreement (qarībatun · baʿīdatun)',
  focus: 'Students run their own speaking and writing practice locating places on a map: say the position words, act a short dialogue, answer map question cards, do a role-play card helping a visitor with a map, give a 30-second map description, then build, fix and write a description of a town centre map.',
  words1: 'Where is it?', words2: 'More positions',
  dialogue: {
    title: 'Where is the bank?', ar: 'أَيْنَ البَنْكُ؟',
    lines: [
      ['A', 'أَيْنَ البَنْكُ؟', 'Where is the bank?'],
      ['B', 'البَنْكُ بَيْنَ المَطْعَمِ وَالصَّيْدَلِيَّةِ.', 'The bank is between the restaurant and the pharmacy.'],
      ['A', 'وَأَيْنَ المَسْجِدُ؟', 'And where is the mosque?'],
      ['B', 'المَسْجِدُ مُقَابِلَ الحَدِيقَةِ، عَلَى يَمِينِ السُّوقِ.', 'The mosque is opposite the park, to the right of the market.'],
      ['A', 'هَلِ المَحَطَّةُ قَرِيبَةٌ مِنْ هُنَا؟', 'Is the station near here?'],
      ['B', 'لَا، هِيَ بَعِيدَةٌ عَنْ هُنَا، فِي وَسَطِ المَدِينَةِ.', 'No, it is far from here, in the middle of town.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: the Leader draws a quick map (or uses a real one) — the Speaker answers أَيْنَ؟ questions from it.',
  },
  questions: [
    { q: 'أَيْنَ مَدْرَسَتُكَ؟', en: 'Where is your school?', start: 'مَدْرَسَتِي بِجَانِبِ / أَمَامَ …', more: '… وَهِيَ قَرِيبَةٌ مِنْ …' },
    { q: 'مَاذَا يُوجَدُ أَمَامَ بَيْتِكَ؟', en: 'What is in front of your house?', start: 'أَمَامَ بَيْتِي …', more: '… وَخَلْفَهُ …' },
    { q: 'هَلِ المُسْتَشْفَى قَرِيبٌ مِنْ بَيْتِكَ؟', en: 'Is the hospital near your house?', start: 'نَعَمْ، قَرِيبٌ … / لَا، بَعِيدٌ عَنْ …', more: '… عَشْرُ دَقَائِقَ' },
    { q: 'مَا الَّذِي بَيْنَ بَيْتِكَ وَالمَدْرَسَةِ؟', en: 'What is between your house and school?', start: 'بَيْنَ بَيْتِي وَالمَدْرَسَةِ …', more: '…' },
    { q: 'أَيْنَ تُوجَدُ الحَدِيقَةُ العَامَّةُ؟', en: 'Where is the public park?', start: 'الحَدِيقَةُ فِي وَسَطِ / خَارِجَ …', more: '… عَلَى يَسَارِ …' },
  ],
  card: {
    title: 'Role-play card — helping a visitor read the town map', ar: 'الخَرِيطَةُ', you: 'a local student', them: 'a visitor with a map',
    tasks: [
      { ex: 'عَفْوًا، أَيْنَ المَتْحَفُ عَلَى الخَرِيطَةِ؟', task: 'Locate it (one position).', plan: 'أَيْنَ ← المَتْحَفُ هُنَا ، بِجَانِبِ …', model: 'المَتْحَفُ هُنَا، بِجَانِبِ المَكْتَبَةِ.', modelEn: 'The museum is here, next to the library.' },
      { ex: 'هَلْ هُوَ بَعِيدٌ عَنِ المَحَطَّةِ؟', task: 'Near or far?', plan: 'هَلْ ← لَا، هُوَ قَرِيبٌ مِنْ …', model: 'لَا، هُوَ قَرِيبٌ مِنَ المَحَطَّةِ جِدًّا.', modelEn: 'No, it is very near the station.' },
      { ex: 'وَأَيْنَ أَجِدُ مَطْعَمًا؟', task: 'Use بَيْنَ … وَ…', plan: 'أَيْنَ ← بَيْنَ … وَ…', model: 'يُوجَدُ مَطْعَمٌ بَيْنَ المَتْحَفِ وَالسُّوقِ.', modelEn: 'There is a restaurant between the museum and the market.' },
      { ex: 'وَالصَّيْدَلِيَّةُ؟', task: 'Left / right of something.', plan: 'الصَّيْدَلِيَّةُ ← عَلَى يَمِينِ / يَسَارِ …', model: 'الصَّيْدَلِيَّةُ عَلَى يَسَارِ المَسْجِدِ، مُقَابِلَ البَنْكِ.', modelEn: 'The pharmacy is to the left of the mosque, opposite the bank.' },
    ],
    girl: 'to a female visitor nothing in the Leader’s lines changes; a girl speaker says the same',
    notes: 'Language: every position word + genitive · qarībun min / baʿīdun ʿan agree with the place.',
  },
  talk: {
    title: '30 seconds: describe a map', ar: 'أَصِفُ الخَرِيطَةَ',
    text: 'Describe a real or imagined town-centre map in 30 seconds: where five places are, using at least four different position words.',
    routes: {
      core: 'Three places with بِجَانِبِ · أَمَامَ · خَلْفَ.',
      develop: 'Add بَيْنَ … وَ… and مُقَابِلَ.',
      stretch: 'Add عَلَى يَمِينِ / يَسَارِ … · فِي وَسَطِ … and near / far with agreement.',
    },
  },
  builder: [
    { en: 'The library is between the bank and the school.', cols: [['المَكْتَبَةُ', 'مَكْتَبَةٌ'], ['بَيْنَ البَنْكِ', 'بَيْنَ البَنْكُ'], ['وَالمَدْرَسَةِ.', 'وَالمَدْرَسَةُ.']], key: [0, 0, 0], why: 'بَيْنَ X وَY: both in the genitive.' },
    { en: 'The station is far from the market.', cols: [['المَحَطَّةُ', 'المَحَطَّةَ'], ['بَعِيدَةٌ', 'بَعِيدٌ'], ['عَنِ السُّوقِ.', 'مِنَ السُّوقِ.']], key: [0, 0, 0], why: 'Station (f.) → بَعِيدَةٌ; far FROM = عَنْ.' },
    { en: 'The mosque is to the right of the park.', cols: [['المَسْجِدُ', 'المَسْجِدَ'], ['عَلَى يَمِينِ', 'عَلَى يَمِينٌ'], ['الحَدِيقَةِ.', 'الحَدِيقَةُ.']], key: [0, 0, 0], why: 'عَلَى يَمِينِ + genitive.' },
  ],
  errors: [
    { wrong: 'المَدْرَسَةُ قَرِيبٌ مِنْ بَيْتِي.', hint: 'مَدْرَسَةٌ is feminine.', right: 'المَدْرَسَةُ قَرِيبَةٌ مِنْ بَيْتِي.', why: 'Feminine → قَرِيبَةٌ.' },
    { wrong: 'البَنْكُ أَمَامَ المَطْعَمُ.', hint: 'Look after أَمَامَ.', right: 'البَنْكُ أَمَامَ المَطْعَمِ.', why: 'Position words + genitive.' },
    { wrong: 'الحَدِيقَةُ بَعِيدَةٌ مِنَ المَحَطَّةِ.', hint: 'far … which little word?', right: 'الحَدِيقَةُ بَعِيدَةٌ عَنِ المَحَطَّةِ.', why: 'far from = بَعِيدٌ عَنْ; near = قَرِيبٌ مِنْ.' },
  ],
  task: {
    title: 'My town-centre map', ar: 'خَرِيطَةُ وَسَطِ المَدِينَةِ',
    text: 'Draw a quick map of a town centre (real or imagined), then write a description (about 40–60 words) for a visitor. Include: • six places • at least five different position words • one place near and one far from the station • the place you recommend and why.',
    phrases: [['فِي وَسَطِ المَدِينَةِ …', 'in the middle of town …'], ['… بَيْنَ … وَ…', '… between … and …'], ['… مُقَابِلَ … · عَلَى يَمِينِ …', '… opposite … · to the right of …'], ['… قَرِيبٌ مِنْ … · بَعِيدٌ عَنْ …', '… near … · far from …']],
    coreFrames: [
      { ar: 'فِي وَسَطِ المَدِينَةِ يُوجَدُ ______ .', en: 'In the middle of town there is …' },
      { ar: '______ بِجَانِبِ ______ .', en: '… is next to …' },
      { ar: '______ أَمَامَ ______ .', en: '… is in front of …' },
      { ar: '______ قَرِيبٌ / قَرِيبَةٌ مِنَ المَحَطَّةِ.', en: '… is near the station.' },
    ],
    developFrames: [
      { ar: '______ بَيْنَ ______ وَ ______ .', en: '… is between … and …' },
      { ar: '______ عَلَى يَسَارِ ______ ، مُقَابِلَ ______ .', en: '… is to the left of …, opposite …' },
    ],
    bank: ['بِجَانِبِ · أَمَامَ · خَلْفَ', 'بَيْنَ … وَ…', 'مُقَابِلَ', 'عَلَى يَمِينِ · عَلَى يَسَارِ', 'فِي وَسَطِ · خَارِجَ', 'قَرِيبٌ مِنْ · قَرِيبَةٌ مِنْ', 'بَعِيدٌ عَنْ · بَعِيدَةٌ عَنْ', 'أُوصِي بِزِيَارَةِ …'],
    model: {
      text: 'فِي وَسَطِ المَدِينَةِ يُوجَدُ مَيْدَانٌ كَبِيرٌ. المَسْجِدُ عَلَى يَمِينِ المَيْدَانِ، وَالسُّوقُ مُقَابِلَهُ. البَنْكُ بَيْنَ المَطْعَمِ وَالصَّيْدَلِيَّةِ، وَالمَكْتَبَةُ خَلْفَ البَنْكِ. المَتْحَفُ قَرِيبٌ مِنَ المَحَطَّةِ، لٰكِنَّ الحَدِيقَةَ العَامَّةَ بَعِيدَةٌ عَنْهَا. أُوصِي بِزِيَارَةِ المَتْحَفِ، لِأَنَّهُ قَدِيمٌ وَمُثِيرٌ لِلِاهْتِمَامِ.',
      en: '“In the middle of town there is a big square. The mosque is to the right of the square, and the market is opposite it. The bank is between the restaurant and the pharmacy, and the library is behind the bank. The museum is near the station, but the public park is far from it. I recommend visiting the museum, because it is old and interesting.”',
      find: ['عَلَى يَمِينِ المَيْدَانِ', 'بَيْنَ المَطْعَمِ وَالصَّيْدَلِيَّةِ', 'قَرِيبٌ مِنَ المَحَطَّةِ', 'بَعِيدَةٌ عَنْهَا'],
    },
  },
  checkCore: 'use position words + genitive correctly?',
  checkDevelop: 'agree near / far with the place (قَرِيبٌ / قَرِيبَةٌ) and use بَيْنَ … وَ…?',
});
