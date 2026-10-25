'use strict';
/* Practice Room · F6-L11 · F6 consolidation — complete town and transport review. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f6-l11',
  arShort: 'مُرَاجَعَةُ الوَحْدَةِ',
  grammar: 'four F6 grammar families: (1) yūjadu / tūjadu + agreement; (2) transport patterns bi- / ʿalā / mashyan + tastaghriqu; (3) mabniyyun min · tatamayyazu bi- · min mazāyā / ʿuyūbi … anna; (4) commands m. / f. / pl.',
  focus: 'Students run their own speaking and writing practice across F6: review the four grammar families, act a model exchange, answer one-minute topic-conversation cards, do a role-play card helping a family new to the town, give a one-minute talk, then diagnose → explain → repair errors and write a short text that uses all four families.',
  words1: 'F6 review: review words', words2: 'F6 review: grammar families',
  dialogue: {
    title: 'A new family in town', ar: 'عَائِلَةٌ جَدِيدَةٌ فِي المَدِينَةِ',
    lines: [
      ['A', 'نَحْنُ جُدُدٌ هُنَا. هَلْ تُوجَدُ مَدْرَسَةٌ قَرِيبَةٌ؟', 'We are new here. Is there a school nearby?'],
      ['B', 'نَعَمْ، تُوجَدُ مَدْرَسَةٌ حَدِيثَةٌ مَبْنِيَّةٌ مِنَ الطُّوبِ، بِجَانِبِ الحَدِيقَةِ.', 'Yes, there is a modern school built of brick, next to the park.'],
      ['A', 'كَيْفَ نَذْهَبُ إِلَى هُنَاكَ؟', 'How do we get there?'],
      ['B', 'اذْهَبُوا مُسْتَقِيمًا، ثُمَّ انْعَطِفُوا يَمِينًا. تَسْتَغْرِقُ الرِّحْلَةُ خَمْسَ دَقَائِقَ مَشْيًا.', 'Go straight on, then turn right. It takes five minutes on foot.'],
      ['A', 'وَكَيْفَ المَدِينَةُ؟', 'And what is the town like?'],
      ['B', 'مِنْ مَزَايَاهَا أَنَّهَا آمِنَةٌ، وَمِنْ عُيُوبِهَا أَنَّهَا تَفْتَقِرُ إِلَى مَطَاعِمَ كَثِيرَةٍ.', 'One advantage is that it is safe; one disadvantage is that it lacks many restaurants.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: answer about YOUR town — use all four grammar families.',
  },
  questions: [
    { q: 'مَاذَا يُوجَدُ فِي وَسَطِ مَدِينَتِكَ؟', en: 'What is in your town centre?', start: 'يُوجَدُ … وَتُوجَدُ …', more: '… بِجَانِبِ …' },
    { q: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟ وَكَمْ تَسْتَغْرِقُ الرِّحْلَةُ؟', en: 'How do you go to school, and how long does it take?', start: 'أَذْهَبُ … ، وَتَسْتَغْرِقُ …', more: '…' },
    { q: 'صِفْ مَبْنًى فِي مَدِينَتِكَ.', en: 'Describe a building in your town.', start: '… مَبْنِيٌّ / مَبْنِيَّةٌ مِنَ …', more: '… وَتَتَمَيَّزُ المَدِينَةُ بِهِ' },
    { q: 'مَا مَزَايَا مَدِينَتِكَ وَعُيُوبُهَا؟', en: 'Advantages and disadvantages?', start: 'مِنْ مَزَايَاهَا أَنَّ … ، وَمِنْ عُيُوبِهَا أَنَّ …', more: '…' },
    { q: 'كَيْفَ أَذْهَبُ مِنْ هُنَا إِلَى المَحَطَّةِ؟ (to a girl)', en: 'How do I get to the station? (to a girl)', start: 'اذْهَبِي … ، ثُمَّ انْعَطِفِي …', more: '…' },
  ],
  card: {
    title: 'Role-play card — helping a family new to your town', ar: 'أُسَاعِدُ عَائِلَةً جَدِيدَةً', you: 'a local teenager', them: 'the mother of a new family',
    tasks: [
      { ex: 'أَيْنَ أَشْتَرِي الطَّعَامَ؟', task: 'A shop + position.', plan: 'أَيْنَ ← يُوجَدُ / تُوجَدُ … بِجَانِبِ …', model: 'يُوجَدُ سُوقٌ كَبِيرٌ مُقَابِلَ المَسْجِدِ.', modelEn: 'There is a big market opposite the mosque.' },
      { ex: 'هَلْ هُوَ أَرْخَصُ مِنَ المَرْكَزِ التِّجَارِيِّ؟', task: 'Compare prices.', plan: 'هَلْ ← نَعَمْ، أَرْخَصُ … ، لٰكِنَّ …', model: 'نَعَمْ، هُوَ أَرْخَصُ، لٰكِنَّهُ مُكْتَظٌّ يَوْمَ السَّبْتِ.', modelEn: 'Yes, it is cheaper, but it is crowded on Saturday.' },
      { ex: 'كَيْفَ أَذْهَبُ إِلَى المُسْتَشْفَى؟', task: 'Directions to a woman.', plan: 'كَيْفَ ← اذْهَبِي … ثُمَّ …', model: 'اذْهَبِي بِالحَافِلَةِ رَقْمِ عَشَرَةٍ، ثُمَّ انْزِلِي أَمَامَ المَكْتَبَةِ.', modelEn: 'Take bus number ten, then get off in front of the library.' },
      { unexpected: true, ex: 'هَلْ تُحِبُّ مَدِينَتَكَ؟ لِمَاذَا؟', task: 'Answer the surprise question.', plan: 'هَلْ ← بِصِفَةٍ عَامَّةٍ … لِأَنَّ …', model: 'بِصِفَةٍ عَامَّةٍ نَعَمْ، لِأَنَّهَا هَادِئَةٌ وَالنَّاسُ لُطَفَاءُ.', modelEn: 'Overall yes, because it is quiet and the people are kind.' },
    ],
    girl: 'تُحِبِّينَ · مَدِينَتَكِ',
    notes: 'Mixes all four F6 grammar families; commands to a woman (-ī). Task ! is unexpected.',
  },
  talk: {
    title: 'One minute: my town and transport', ar: 'دَقِيقَةٌ: مَدِينَتِي وَالمُوَاصَلَاتُ',
    text: 'Give a ONE-MINUTE talk on your town: places and positions, one building, how you travel and how long it takes, advantages and disadvantages, and a route to one place.',
    head: 'Talk for one minute — no stopping',
    routes: {
      core: '30 seconds: one sentence from each grammar family.',
      develop: '45 seconds with connectors and agreement.',
      stretch: '60 seconds + a route with commands and an overall judgement.',
    },
  },
  builder: [
    { en: 'There are many old buildings built of stone.', cols: [['تُوجَدُ مَبَانٍ', 'يُوجَدُ مَبَانٍ'], ['قَدِيمَةٌ كَثِيرَةٌ', 'قَدِيمُونَ كَثِيرُونَ'], ['مَبْنِيَّةٌ مِنَ الحَجَرِ.', 'مَبْنِيُّونَ مِنَ الحَجَرِ.']], key: [0, 0, 0], why: 'Non-human plural → feminine singular: تُوجَدُ … قَدِيمَةٌ … مَبْنِيَّةٌ.' },
    { en: 'I go by bike, and it takes a quarter of an hour.', cols: [['أَذْهَبُ عَلَى الدَّرَّاجَةِ،', 'أَذْهَبُ بِالدَّرَّاجَةُ،'], ['وَتَسْتَغْرِقُ الرِّحْلَةُ', 'وَتَسْتَغْرِقُ الرِّحْلَةَ'], ['رُبْعَ سَاعَةٍ.', 'رُبْعُ سَاعَةٍ.']], key: [0, 0, 0], why: 'Bike → عَلَى الدَّرَّاجَةِ; duration is the object → رُبْعَ.' },
    { en: 'Cross the street, then turn left. (to a group)', cols: [['اعْبُرُوا الشَّارِعَ،', 'اعْبُرِي الشَّارِعَ،'], ['ثُمَّ', 'بَلْ'], ['انْعَطِفُوا يَسَارًا.', 'انْعَطِفْ يَسَارًا.']], key: [0, 0, 0], why: 'Group → -ū on every command.' },
  ],
  errors: [
    { wrong: 'الحَدَائِقُ جَمِيلُونَ.', hint: 'Diagnose: plural of things.', right: 'الحَدَائِقُ جَمِيلَةٌ.', why: 'Repair: non-human plural → feminine singular.' },
    { wrong: 'أَذْهَبُ بِالمَشْيِ.', hint: 'Diagnose: on foot.', right: 'أَذْهَبُ مَشْيًا.', why: 'Repair: on foot = مَشْيًا.' },
    { wrong: 'مِنْ عُيُوبِهَا أَنَّ المُوَاصَلَاتُ قَلِيلَةٌ.', hint: 'Diagnose: after أَنَّ.', right: 'مِنْ عُيُوبِهَا أَنَّ المُوَاصَلَاتِ قَلِيلَةٌ.', why: 'Repair: noun after أَنَّ → accusative.' },
  ],
  task: {
    title: 'My town: all four grammar families', ar: 'مَدِينَتِي: العَائِلَاتُ الأَرْبَعُ',
    text: 'Write a text (about 55–75 words) that uses ALL FOUR F6 grammar families. Include: • places with يُوجَدُ / تُوجَدُ and positions • how you travel + تَسْتَغْرِقُ • one building (مَبْنِيٌّ مِنْ) and an advantage / disadvantage • a route to one place with commands. Then highlight one example of each family.',
    range: [45, 90],
    phrases: [['يُوجَدُ … وَتُوجَدُ … بِجَانِبِ …', 'there is … and … next to …'], ['أَذْهَبُ … ، وَتَسْتَغْرِقُ الرِّحْلَةُ …', 'I go …, and the journey takes …'], ['… مَبْنِيٌّ مِنْ … · مِنْ مَزَايَاهَا أَنَّ …', '… built of … · an advantage is that …'], ['اذْهَبْ … ، ثُمَّ انْعَطِفْ …', 'go …, then turn …']],
    coreFrames: [
      { ar: 'فِي مَدِينَتِي يُوجَدُ ______ ، وَتُوجَدُ ______ بِجَانِبِ ______ .', en: 'In my town there is …, and there is … next to …' },
      { ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ ______ ، وَتَسْتَغْرِقُ الرِّحْلَةُ ______ .', en: 'I go to school …, and the journey takes …' },
      { ar: '______ مَبْنِيٌّ / مَبْنِيَّةٌ مِنْ ______ .', en: '… is built of …' },
      { ar: 'إِلَى ______ : اذْهَبْ ______ ، ثُمَّ ______ .', en: 'To …: go …, then …' },
    ],
    developFrames: [
      { ar: 'مِنْ مَزَايَا مَدِينَتِي أَنَّ ______ ، لٰكِنَّهَا تَفْتَقِرُ إِلَى ______ .', en: 'One advantage … but it lacks …' },
      { ar: 'تَتَمَيَّزُ مَدِينَتِي بِحَدَائِقِهَا / بِ ______ .', en: 'My town is known for its parks / …' },
    ],
    bank: ['يُوجَدُ · تُوجَدُ', 'بِجَانِبِ · مُقَابِلَ · خَلْفَ', 'بِالحَافِلَةِ · عَلَى الدَّرَّاجَةِ · مَشْيًا', 'تَسْتَغْرِقُ', 'مَبْنِيٌّ · مَبْنِيَّةٌ مِنْ', 'مِنْ مَزَايَا … أَنَّ', 'تَفْتَقِرُ إِلَى', 'اذْهَبْ · انْعَطِفْ · اعْبُرْ'],
    model: {
      text: 'فِي مَدِينَتِي يُوجَدُ مَيْدَانٌ كَبِيرٌ، وَتُوجَدُ مَكْتَبَةٌ عَامَّةٌ بِجَانِبِهِ. أَذْهَبُ إِلَى المَدْرَسَةِ عَلَى الدَّرَّاجَةِ، وَتَسْتَغْرِقُ الرِّحْلَةُ عَشْرَ دَقَائِقَ. المَكْتَبَةُ مَبْنِيَّةٌ مِنَ الزُّجَاجِ، وَهِيَ حَدِيثَةٌ وَمُضِيئَةٌ. مِنْ مَزَايَا مَدِينَتِي أَنَّهَا نَظِيفَةٌ، لٰكِنَّهَا تَفْتَقِرُ إِلَى نَادٍ لِلشَّبَابِ. إِلَى المَكْتَبَةِ: اذْهَبْ مُسْتَقِيمًا حَتَّى المَيْدَانِ، ثُمَّ انْعَطِفْ يَمِينًا، وَالمَدْخَلُ أَمَامَكَ.',
      en: '“In my town there is a big square, and a public library next to it. I go to school by bike, and the journey takes ten minutes. The library is built of glass; it is modern and bright. One advantage of my town is that it is clean, but it lacks a youth club. To the library: go straight on until the square, then turn right, and the entrance is in front of you.”',
      find: ['وَتُوجَدُ مَكْتَبَةٌ', 'وَتَسْتَغْرِقُ الرِّحْلَةُ', 'مَبْنِيَّةٌ مِنَ الزُّجَاجِ', 'اذْهَبْ مُسْتَقِيمًا'],
    },
  },
  checkCore: 'use at least one example from each grammar family?',
  checkDevelop: 'diagnose and repair one of your own errors after the buddy check?',
});
