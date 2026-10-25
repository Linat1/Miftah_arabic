'use strict';
/* Practice Room · F3-L07 · My neighbourhood — places near my home. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f3-l07',
  arShort: 'حَيِّي',
  grammar: 'places + positions: qarībun min · baʿīdun ʿan · bi-jānibi · amāma · khalfa · muqābila; directions (imshi · khudh · ʿalā al-yamīni / al-yasāri); yūjadu / tūjadu',
  focus: 'Students run their own speaking and writing practice about their neighbourhood: say the place words, act a short dialogue, answer question cards, do a role-play card giving directions to a visitor, give a 30-second neighbourhood talk, then build, fix and write a short description of their area.',
  words1: 'Places near my home (1)', words2: 'Places near my home (2)',
  dialogue: {
    title: 'Is there a pharmacy near here?', ar: 'هَلْ تُوجَدُ صَيْدَلِيَّةٌ قَرِيبَةٌ؟',
    lines: [
      ['A', 'عَفْوًا، هَلْ تُوجَدُ صَيْدَلِيَّةٌ قَرِيبَةٌ مِنْ هُنَا؟', 'Excuse me, is there a pharmacy near here?'],
      ['B', 'نَعَمْ، الصَّيْدَلِيَّةُ بِجَانِبِ المَسْجِدِ.', 'Yes, the pharmacy is next to the mosque.'],
      ['A', 'وَأَيْنَ المَسْجِدُ؟', 'And where is the mosque?'],
      ['B', 'امْشِ مُسْتَقِيمًا، ثُمَّ خُذِ الشَّارِعَ الأَوَّلَ عَلَى اليَمِينِ.', 'Walk straight on, then take the first street on the right.'],
      ['A', 'هَلْ هُوَ بَعِيدٌ؟', 'Is it far?'],
      ['B', 'لَا، خَمْسُ دَقَائِقَ مَشْيًا فَقَطْ.', 'No, only five minutes’ walk.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: ask for a different place (المَكْتَبَةُ · البَنْكُ · المَحَطَّةُ) and change the directions.',
  },
  questions: [
    { q: 'مَاذَا يُوجَدُ فِي حَيِّكَ؟', en: 'What is there in your neighbourhood?', start: 'فِي حَيِّي يُوجَدُ … وَتُوجَدُ …', more: '… وَلٰكِنْ لَا يُوجَدُ …' },
    { q: 'هَلِ المَدْرَسَةُ قَرِيبَةٌ مِنْ بَيْتِكَ؟', en: 'Is the school near your home?', start: 'نَعَمْ، قَرِيبَةٌ مِنْ … / لَا، بَعِيدَةٌ عَنْ …', more: '… عَشْرُ دَقَائِقَ …' },
    { q: 'مَاذَا يُوجَدُ أَمَامَ بَيْتِكَ؟', en: 'What is in front of your house?', start: 'أَمَامَ بَيْتِي …', more: '… وَخَلْفَهُ …' },
    { q: 'أَيْنَ تَشْتَرِي الخُبْزَ؟', en: 'Where do you buy bread?', start: 'أَشْتَرِي الخُبْزَ مِنْ …', more: '… الَّذِي بِجَانِبِ …' },
    { q: 'مَا مَكَانُكَ المُفَضَّلُ فِي حَيِّكَ؟', en: 'What is your favourite place in your area?', start: 'مَكَانِي المُفَضَّلُ …', more: '… لِأَنَّ …' },
  ],
  card: {
    title: 'Role-play card — helping a visitor find the library', ar: 'أُسَاعِدُ زَائِرًا', you: 'a local student', them: 'a visitor to your town',
    tasks: [
      { ex: 'عَفْوًا، أَيْنَ المَكْتَبَةُ؟', task: 'Say where it is (one position).', plan: 'أَيْنَ ← المَكْتَبَةُ مُقَابِلَ …', model: 'المَكْتَبَةُ مُقَابِلَ الحَدِيقَةِ العَامَّةِ.', modelEn: 'The library is opposite the public park.' },
      { ex: 'كَيْفَ أَذْهَبُ إِلَى هُنَاكَ؟', task: 'Give two directions.', plan: 'كَيْفَ ← امْشِ … ثُمَّ خُذْ … عَلَى …', model: 'امْشِ مُسْتَقِيمًا، ثُمَّ خُذِ الشَّارِعَ الثَّانِيَ عَلَى اليَسَارِ.', modelEn: 'Walk straight on, then take the second street on the left.' },
      { ex: 'هَلْ هِيَ بَعِيدَةٌ؟', task: 'Say how far.', plan: 'هَلْ ← لَا، … دَقَائِقَ مَشْيًا', model: 'لَا، هِيَ قَرِيبَةٌ، عَشْرُ دَقَائِقَ مَشْيًا.', modelEn: 'No, it is near — ten minutes’ walk.' },
      { ex: 'وَهَلْ يُوجَدُ مَطْعَمٌ قَرِيبٌ؟', task: 'Answer and say where.', plan: 'هَلْ ← نَعَمْ، يُوجَدُ مَطْعَمٌ … بِجَانِبِ …', model: 'نَعَمْ، يُوجَدُ مَطْعَمٌ صَغِيرٌ بِجَانِبِ المَكْتَبَةِ.', modelEn: 'Yes, there is a small restaurant next to the library.' },
    ],
    girl: 'to a female visitor: امْشِي · خُذِي',
    notes: 'Language: muqābila / bi-jānibi + genitive · imperatives imshi / khudh · ʿashru daqāʾiqa mashyan.',
  },
  talk: {
    title: '30 seconds: my neighbourhood', ar: 'حَيِّي',
    text: 'Talk for 30 seconds about your neighbourhood: what there is, where places are, what is near or far — and your favourite place.',
    routes: {
      core: 'Three places with يُوجَدُ / تُوجَدُ.',
      develop: 'Add positions (بِجَانِبِ · أَمَامَ · مُقَابِلَ) and قَرِيبٌ مِنْ / بَعِيدٌ عَنْ.',
      stretch: 'Add what is missing (لَا يُوجَدُ …) and give a route from your home to one place.',
    },
  },
  builder: [
    { en: 'The bank is opposite the station.', cols: [['البَنْكُ', 'بَنْكٌ'], ['مُقَابِلَ', 'مُقَابِلُ'], ['المَحَطَّةِ.', 'المَحَطَّةُ.']], key: [0, 0, 0], why: 'مُقَابِلَ + genitive: المَحَطَّةِ.' },
    { en: 'The school is far from my home.', cols: [['المَدْرَسَةُ', 'المَدْرَسَةَ'], ['بَعِيدَةٌ عَنْ', 'بَعِيدٌ مِنْ'], ['بَيْتِي.', 'بَيْتُ.']], key: [0, 0, 0], why: 'A school is feminine → بَعِيدَةٌ; far FROM = عَنْ.' },
    { en: 'Take the first street on the right.', cols: [['خُذِ', 'تَأْخُذُ'], ['الشَّارِعَ الأَوَّلَ', 'الشَّارِعُ الأَوَّلُ'], ['عَلَى اليَمِينِ.', 'عَلَى اليَسَارِ.']], key: [0, 0, 0], why: 'A direction = imperative خُذْ; right = اليَمِينِ.' },
  ],
  errors: [
    { wrong: 'المَسْجِدُ قَرِيبٌ عَنْ بَيْتِي.', hint: 'near … which little word?', right: 'المَسْجِدُ قَرِيبٌ مِنْ بَيْتِي.', why: 'near = قَرِيبٌ مِنْ; far = بَعِيدٌ عَنْ.' },
    { wrong: 'يُوجَدُ صَيْدَلِيَّةٌ فِي شَارِعِي.', hint: 'صَيْدَلِيَّةٌ ends in ة.', right: 'تُوجَدُ صَيْدَلِيَّةٌ فِي شَارِعِي.', why: 'Feminine place → تُوجَدُ.' },
    { wrong: 'الحَدِيقَةُ أَمَامَ المَدْرَسَةُ.', hint: 'Look after أَمَامَ.', right: 'الحَدِيقَةُ أَمَامَ المَدْرَسَةِ.', why: 'أَمَامَ + genitive (-i).' },
  ],
  task: {
    title: 'My neighbourhood', ar: 'حَيِّي',
    text: 'Write a description of your neighbourhood (about 40–60 words) for a new neighbour. Include: • four places and where they are • what is near and what is far • the way from your home to one place • your favourite place and why.',
    phrases: [['فِي حَيِّي يُوجَدُ … وَتُوجَدُ …', 'in my area there is … and …'], ['… بِجَانِبِ / مُقَابِلَ / أَمَامَ …', '… next to / opposite / in front of …'], ['… قَرِيبٌ مِنْ … · بَعِيدٌ عَنْ …', '… near … · far from …'], ['مِنْ بَيْتِي: امْشِ … ثُمَّ …', 'from my house: walk … then …']],
    coreFrames: [
      { ar: 'فِي حَيِّي يُوجَدُ ______ ، وَتُوجَدُ ______ .', en: 'In my area there is … and …' },
      { ar: '______ بِجَانِبِ ______ .', en: '… is next to …' },
      { ar: '______ قَرِيبٌ مِنْ بَيْتِي.', en: '… is near my house.' },
      { ar: 'مَكَانِي المُفَضَّلُ ______ .', en: 'My favourite place is …' },
    ],
    developFrames: [
      { ar: 'مِنْ بَيْتِي امْشِ ______ ، ثُمَّ خُذِ ______ .', en: 'From my house walk …, then take …' },
      { ar: 'لَا يُوجَدُ ______ ، وَهٰذَا ______ .', en: 'There is no …, and that is …' },
    ],
    bank: ['حَيٌّ · شَارِعٌ', 'مَسْجِدٌ · مَدْرَسَةٌ', 'صَيْدَلِيَّةٌ · مَكْتَبَةٌ', 'حَدِيقَةٌ عَامَّةٌ', 'بِجَانِبِ · أَمَامَ · خَلْفَ', 'مُقَابِلَ', 'قَرِيبٌ مِنْ · بَعِيدٌ عَنْ', 'امْشِ · خُذْ'],
    model: {
      text: 'أَسْكُنُ فِي حَيٍّ هَادِئٍ فِي شَرْقِ لَنْدَنَ. فِي حَيِّي يُوجَدُ مَسْجِدٌ كَبِيرٌ، وَتُوجَدُ مَدْرَسَةٌ ابْتِدَائِيَّةٌ وَصَيْدَلِيَّةٌ. الصَّيْدَلِيَّةُ بِجَانِبِ المَسْجِدِ، وَالحَدِيقَةُ العَامَّةُ مُقَابِلَ المَدْرَسَةِ. المَكْتَبَةُ قَرِيبَةٌ مِنْ بَيْتِي، لٰكِنَّ المَحَطَّةَ بَعِيدَةٌ. مِنْ بَيْتِي إِلَى الحَدِيقَةِ: امْشِ مُسْتَقِيمًا، ثُمَّ خُذِ الشَّارِعَ الأَوَّلَ عَلَى اليَسَارِ. مَكَانِي المُفَضَّلُ الحَدِيقَةُ، لِأَنَّنِي أَلْعَبُ فِيهَا كُرَةَ القَدَمِ.',
      en: '“I live in a quiet area in east London. In my area there is a big mosque, a primary school and a pharmacy. The pharmacy is next to the mosque, and the public park is opposite the school. The library is near my house, but the station is far. From my house to the park: walk straight on, then take the first street on the left. My favourite place is the park, because I play football there.”',
      find: ['يُوجَدُ مَسْجِدٌ', 'بِجَانِبِ المَسْجِدِ', 'قَرِيبَةٌ مِنْ بَيْتِي', 'خُذِ الشَّارِعَ الأَوَّلَ'],
    },
  },
  checkCore: 'name four places and say where they are?',
  checkDevelop: 'use place words with the genitive and قَرِيبٌ مِنْ / بَعِيدٌ عَنْ?',
});
