'use strict';
/* Practice Room · F6-L09 · Extended writing — my town and how I get around. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f6-l09',
  arShort: 'مَدِينَتِي وَكَيْفَ أَتَنَقَّلُ',
  grammar: 'three paragraphs (my town and its places · how I travel · a balanced judgement); yūjadu / tūjadu; mabniyyun min; adhhabu bi- / mashyan; min mazāyā … anna · min ʿuyūbi … anna; bi-ṣifatin ʿāmmatin; ūṣī bi-',
  focus: 'Students run their own speaking and writing practice for an extended text about their town: say the toolkit phrases, rehearse a model plan aloud, answer planning cards, interview a buddy for ideas, give a 30-second oral draft, then build, fix and write three paragraphs: my town and how I get around.',
  words1: 'The F6 writing toolkit (1)', words2: 'The F6 writing toolkit (2)',
  dialogue: {
    title: 'Say the plan out loud', ar: 'قُلِ الخُطَّةَ',
    lines: [
      ['1', 'أَسْكُنُ فِي مَدِينَةِ … ؛ يُوجَدُ فِيهَا … وَتُوجَدُ …', 'I live in … ; it has … and …'],
      ['', 'المَكْتَبَةُ مَبْنِيَّةٌ مِنَ الزُّجَاجِ، وَهِيَ بِجَانِبِ المَحَطَّةِ.', 'The library is built of glass, and it is next to the station.'],
      ['2', 'أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ، وَتَسْتَغْرِقُ الرِّحْلَةُ عِشْرِينَ دَقِيقَةً.', 'I go to school by bus, and the journey takes twenty minutes.'],
      ['', 'فِي نِهَايَةِ الأُسْبُوعِ أَذْهَبُ إِلَى السُّوقِ مَشْيًا.', 'At the weekend I walk to the market.'],
      ['3', 'مِنْ مَزَايَا مَدِينَتِي أَنَّهَا هَادِئَةٌ، وَمِنْ عُيُوبِهَا أَنَّهَا تَفْتَقِرُ إِلَى مَسْبَحٍ.', 'One advantage is that it is quiet; one disadvantage is that it lacks a pool.'],
      ['', 'بِصِفَةٍ عَامَّةٍ أُحِبُّهَا، وَأُوصِي بِزِيَارَةِ المَتْحَفِ.', 'Overall I love it, and I recommend visiting the museum.'],
    ],
    foot: 'Take turns reading one paragraph each. Then each Speaker says THEIR OWN three-paragraph plan aloud — two sentences per paragraph.',
    notes: 'Oral rehearsal of a three-paragraph plan before the extended writing.',
  },
  questions: [
    { q: 'مَاذَا يُوجَدُ فِي مَدِينَتِكَ؟', en: 'What is in your town? (paragraph 1)', start: 'يُوجَدُ … وَتُوجَدُ …', more: '… بِجَانِبِ / مُقَابِلَ …' },
    { q: 'صِفْ مَبْنًى مُهِمًّا.', en: 'Describe an important building. (paragraph 1)', start: '… مَبْنِيٌّ / مَبْنِيَّةٌ مِنَ …', more: '… وَهُوَ / وَهِيَ …' },
    { q: 'كَيْفَ تَتَنَقَّلُ فِي مَدِينَتِكَ؟', en: 'How do you get around? (paragraph 2)', start: 'أَذْهَبُ بِالحَافِلَةِ / مَشْيًا …', more: '… وَتَسْتَغْرِقُ الرِّحْلَةُ …' },
    { q: 'مَا مَزَايَا مَدِينَتِكَ وَعُيُوبُهَا؟', en: 'Advantages and disadvantages? (paragraph 3)', start: 'مِنْ مَزَايَاهَا أَنَّ … · مِنْ عُيُوبِهَا أَنَّ …', more: '… تَفْتَقِرُ إِلَى …' },
    { q: 'بِمَاذَا تُوصِي الزَّائِرَ؟', en: 'What do you recommend to a visitor? (paragraph 3)', start: 'أُوصِي بِزِيَارَةِ …', more: '… لِأَنَّ …' },
  ],
  qTitle: 'Plan by speaking: one card per paragraph',
  card: {
    title: 'Card — interview your buddy, then swap plans', ar: 'أُقَابِلُ زَمِيلِي', you: 'the interviewer', them: 'your buddy (the writer)',
    tasks: [
      { ex: 'مَا أَجْمَلُ مَكَانٍ فِي مَدِينَتِكَ؟', task: 'Buddy: place + position.', plan: 'مَا ← أَجْمَلُ مَكَانٍ … ، وَهُوَ / وَهِيَ بِجَانِبِ …', model: 'أَجْمَلُ مَكَانٍ الحَدِيقَةُ العَامَّةُ، وَهِيَ فِي وَسَطِ المَدِينَةِ.', modelEn: 'The nicest place is the public park, in the middle of town.' },
      { ex: 'كَيْفَ تَذْهَبُ إِلَى هُنَاكَ؟', task: 'Buddy: transport + time.', plan: 'كَيْفَ ← أَذْهَبُ … ، وَتَسْتَغْرِقُ …', model: 'أَذْهَبُ عَلَى الدَّرَّاجَةِ، وَتَسْتَغْرِقُ الرِّحْلَةُ عَشْرَ دَقَائِقَ.', modelEn: 'I go by bike, and it takes ten minutes.' },
      { ex: 'مَا أَكْبَرُ مُشْكِلَةٍ فِي مَدِينَتِكَ؟', task: 'Buddy: a disadvantage.', plan: 'مَا ← مِنْ عُيُوبِهَا أَنَّ …', model: 'مِنْ عُيُوبِهَا أَنَّ الشَّوَارِعَ مُكْتَظَّةٌ صَبَاحًا.', modelEn: 'One disadvantage is that the streets are crowded in the morning.' },
      { ex: 'هَلْ تُحِبُّ مَدِينَتَكَ بِصِفَةٍ عَامَّةٍ؟', task: 'Buddy: overall judgement.', plan: 'هَلْ ← بِصِفَةٍ عَامَّةٍ … لِأَنَّ …', model: 'بِصِفَةٍ عَامَّةٍ نَعَمْ، لِأَنَّهَا آمِنَةٌ وَنَظِيفَةٌ.', modelEn: 'Overall yes, because it is safe and clean.' },
    ],
    foot: 'Interviewer notes English keywords; the writer answers in full Arabic. The notes become the writer’s plan for Step 8. Swap roles.',
    girl: 'مَدِينَتِكِ · تَذْهَبِينَ · تُحِبِّينَ',
    notes: 'Peer interview for idea generation.',
  },
  talk: {
    title: '30 seconds: my text, said aloud', ar: 'نَصِّي بِصَوْتٍ عَالٍ',
    text: 'Say your three paragraphs aloud in 30 seconds BEFORE writing: town · transport · judgement.',
    routes: {
      core: 'One sentence per paragraph.',
      develop: 'Two sentences per paragraph with a connector.',
      stretch: 'Add مِنْ مَزَايَا … أَنَّ · بِصِفَةٍ عَامَّةٍ · أُوصِي بِزِيَارَةِ … (in full).',
    },
  },
  builder: [
    { en: 'In my town there is a modern station built of glass.', cols: [['فِي مَدِينَتِي تُوجَدُ', 'فِي مَدِينَتِي يُوجَدُ'], ['مَحَطَّةٌ حَدِيثَةٌ', 'مَحَطَّةٌ حَدِيثٌ'], ['مَبْنِيَّةٌ مِنَ الزُّجَاجِ.', 'مَبْنِيٌّ مِنَ الزُّجَاجِ.']], key: [0, 0, 0], why: 'مَحَطَّةٌ (f.) → تُوجَدُ … حَدِيثَةٌ … مَبْنِيَّةٌ.' },
    { en: 'I go by train, and the journey takes an hour.', cols: [['أَذْهَبُ بِالقِطَارِ،', 'أَذْهَبُ فِي القِطَارِ،'], ['وَتَسْتَغْرِقُ الرِّحْلَةُ', 'وَيَسْتَغْرِقُ الرِّحْلَةُ'], ['سَاعَةً.', 'سَاعَةٌ.']], key: [0, 0, 0], why: 'By train = بِالقِطَارِ; رِحْلَةٌ (f.) → تَسْتَغْرِقُ + duration in -an.' },
    { en: 'Overall, I recommend visiting the old market.', cols: [['بِصِفَةٍ عَامَّةٍ،', 'بِصِفَةٌ عَامَّةٌ،'], ['أُوصِي', 'يُوصِي'], ['بِزِيَارَةِ السُّوقِ القَدِيمِ.', 'زِيَارَةَ السُّوقِ القَدِيمِ.']], key: [0, 0, 0], why: 'Overall = بِصِفَةٍ عَامَّةٍ; recommend = أُوصِي + bi-.' },
  ],
  errors: [
    { wrong: 'يُوجَدُ مَكْتَبَةٌ حَدِيثَةٌ.', hint: 'مَكْتَبَةٌ …', right: 'تُوجَدُ مَكْتَبَةٌ حَدِيثَةٌ.', why: 'Feminine → تُوجَدُ.' },
    { wrong: 'مِنْ مَزَايَاهَا أَنَّ هِيَ هَادِئَةٌ.', hint: 'أَنَّ + pronoun as an ending.', right: 'مِنْ مَزَايَاهَا أَنَّهَا هَادِئَةٌ.', why: 'أَنَّ + attached pronoun: أَنَّهَا.' },
    { wrong: 'أَذْهَبُ إِلَى المَدْرَسَةِ عَلَى الحَافِلَةِ.', hint: 'Bus, not bike.', right: 'أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ.', why: 'Vehicles → bi-; only the bike takes عَلَى.' },
  ],
  task: {
    title: 'My town and how I get around', ar: 'مَدِينَتِي وَكَيْفَ أَتَنَقَّلُ',
    text: 'Write three paragraphs (about 65–85 words) using your buddy’s notes. Paragraph 1: your town — places, positions, one building and its material. Paragraph 2: how you travel — to school and at the weekend, with times. Paragraph 3: advantages, disadvantages, an overall judgement and a recommendation.',
    range: [50, 100],
    phrases: [['يُوجَدُ فِي مَدِينَتِي … وَتُوجَدُ …', 'my town has …'], ['أَذْهَبُ … ، وَتَسْتَغْرِقُ الرِّحْلَةُ …', 'I go …, and the journey takes …'], ['مِنْ مَزَايَاهَا أَنَّ … · مِنْ عُيُوبِهَا أَنَّ …', 'an advantage … · a disadvantage …'], ['بِصِفَةٍ عَامَّةٍ … · أُوصِي بِزِيَارَةِ …', 'overall … · I recommend visiting …']],
    coreFrames: [
      { ar: 'أَسْكُنُ فِي ______ . يُوجَدُ فِيهَا ______ ، وَتُوجَدُ ______ .', en: 'I live in … It has … and …' },
      { ar: '______ مَبْنِيٌّ / مَبْنِيَّةٌ مِنَ ______ .', en: '… is built of …' },
      { ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ ______ ، وَتَسْتَغْرِقُ الرِّحْلَةُ ______ .', en: 'I go to school …, and the journey takes …' },
      { ar: 'مِنْ مَزَايَا مَدِينَتِي أَنَّ ______ ، وَمِنْ عُيُوبِهَا أَنَّ ______ .', en: 'One advantage … and one disadvantage …' },
    ],
    developFrames: [
      { ar: 'فِي نِهَايَةِ الأُسْبُوعِ ______ .', en: 'At the weekend …' },
      { ar: 'بِصِفَةٍ عَامَّةٍ ______ ، وَأُوصِي بِزِيَارَةِ ______ .', en: 'Overall …, and I recommend visiting …' },
    ],
    bank: ['يُوجَدُ · تُوجَدُ', 'بِجَانِبِ · مُقَابِلَ', 'مَبْنِيٌّ مِنْ', 'بِالحَافِلَةِ · مَشْيًا', 'تَسْتَغْرِقُ', 'مِنْ مَزَايَا … أَنَّ', 'مِنْ عُيُوبِ … أَنَّ', 'بِصِفَةٍ عَامَّةٍ · أُوصِي'],
    model: {
      text: `أَسْكُنُ فِي مَدِينَةِ يُورْكَ. يُوجَدُ فِيهَا مَتْحَفٌ لِلْقِطَارَاتِ، وَتُوجَدُ كَاتِدْرَائِيَّةٌ ضَخْمَةٌ مَبْنِيَّةٌ مِنَ الحَجَرِ، وَهِيَ مُقَابِلَ المَكْتَبَةِ.
أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ، وَتَسْتَغْرِقُ الرِّحْلَةُ رُبْعَ سَاعَةٍ. فِي نِهَايَةِ الأُسْبُوعِ أَذْهَبُ إِلَى السُّوقِ مَشْيًا مَعَ أُمِّي.
مِنْ مَزَايَا مَدِينَتِي أَنَّهَا تَارِيخِيَّةٌ وَآمِنَةٌ، وَمِنْ عُيُوبِهَا أَنَّهَا مُكْتَظَّةٌ بِالسُّيَّاحِ فِي الصَّيْفِ. بِصِفَةٍ عَامَّةٍ أُحِبُّهَا كَثِيرًا، وَأُوصِي بِزِيَارَةِ مَتْحَفِ القِطَارَاتِ.`,
      en: '“I live in York. It has a railway museum, and a huge cathedral built of stone, opposite the library. / I go to school by bus, and the journey takes a quarter of an hour. At the weekend I walk to the market with my mum. / One advantage of my town is that it is historic and safe; one disadvantage is that it is crowded with tourists in summer. Overall I love it, and I recommend visiting the railway museum.”',
      find: ['مَبْنِيَّةٌ مِنَ الحَجَرِ', 'وَتَسْتَغْرِقُ الرِّحْلَةُ', 'مِنْ مَزَايَا مَدِينَتِي أَنَّهَا', 'أُوصِي بِزِيَارَةِ'],
    },
  },
  checkCore: 'write three paragraphs: town · transport · judgement?',
  checkDevelop: 'use the F6 toolkit (يُوجَدُ / تُوجَدُ · مَبْنِيٌّ مِنْ · تَسْتَغْرِقُ · مِنْ مَزَايَا … أَنَّ)?',
});
