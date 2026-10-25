'use strict';
/* Practice Room · F6-L12 · Final review and assessment practice — my town and transport. Speaking + writing. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f6-l12',
  arShort: 'تَدْرِيبٌ لِلتَّقْيِيمِ',
  grammar: 'all of F6: places + yūjadu / tūjadu; positions + genitive; transport patterns; tickets, times and tastaghriqu; describing a town (mazāyā / ʿuyūb); prices and comparatives; mabniyyun min; commands m. / f. / pl.',
  focus: 'Assessment practice for F6: students run their own speaking and writing rehearsal in breakout rooms — a quick word check, a model exchange, exam-style question cards, a five-prompt role play, a 45-second talk, then build, fix and write a timed text about their town and transport.',
  words1: 'F6 check: places and positions', words2: 'F6 check: transport and directions',
  addWords: [
    ['يُوجَدُ · تُوجَدُ', 'there is (m. · f.)'], ['مَحَطَّةٌ · مَطَارٌ', 'station · airport'], ['سُوقٌ · مَكْتَبَةٌ', 'market · library'],
    ['بِجَانِبِ · مُقَابِلَ', 'next to · opposite'], ['قَرِيبٌ مِنْ · بَعِيدٌ عَنْ', 'near · far from'], ['مَبْنِيٌّ مِنْ', 'built of'],
    ['بِالحَافِلَةِ · مَشْيًا', 'by bus · on foot'], ['تَذْكِرَةُ ذَهَابٍ وَإِيَابٍ', 'return ticket'], ['تَسْتَغْرِقُ', 'takes (time)'],
    ['أَرْخَصُ مِنْ · أَغْلَى مِنْ', 'cheaper · dearer than'], ['اذْهَبْ · انْعَطِفْ · اعْبُرْ', 'go · turn · cross'], ['مِنْ مَزَايَا … أَنَّ', 'one advantage … is that'],
  ],
  dialogue: {
    title: 'An exam-style exchange', ar: 'حِوَارٌ مِثْلَ الامْتِحَانِ',
    lines: [
      ['A', 'صِفْ مَدِينَتَكَ.', 'Describe your town.'],
      ['B', 'مَدِينَتِي صَغِيرَةٌ وَهَادِئَةٌ؛ يُوجَدُ فِيهَا سُوقٌ قَدِيمٌ، وَتُوجَدُ مَحَطَّةُ قِطَارٍ.', 'My town is small and quiet; it has an old market and a train station.'],
      ['A', 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟', 'How do you go to school?'],
      ['B', 'أَذْهَبُ مَشْيًا، وَتَسْتَغْرِقُ الرِّحْلَةُ عِشْرِينَ دَقِيقَةً.', 'I walk, and the journey takes twenty minutes.'],
      ['A', 'مَا رَأْيُكَ فِي المُوَاصَلَاتِ فِي مَدِينَتِكَ؟', 'What do you think of the transport in your town?'],
      ['B', 'مِنْ مَزَايَاهَا أَنَّ الحَافِلَاتِ رَخِيصَةٌ، لٰكِنَّهَا تَتَأَخَّرُ كَثِيرًا.', 'One advantage is that buses are cheap, but they are often late.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap. Round 3: answer with your own facts under exam conditions — no slide.',
  },
  questions: [
    { q: 'مَاذَا يُوجَدُ قُرْبَ بَيْتِكَ؟', en: 'What is near your home?', start: 'يُوجَدُ … وَتُوجَدُ …', more: '… مُقَابِلَ …' },
    { q: 'أَيْنَ المَحَطَّةُ فِي مَدِينَتِكَ؟', en: 'Where is the station in your town?', start: 'المَحَطَّةُ … ، قَرِيبَةٌ مِنْ / بَعِيدَةٌ عَنْ …', more: '…' },
    { q: 'كَيْفَ سَافَرْتَ فِي آخِرِ عُطْلَةٍ؟', en: 'How did you travel on your last holiday?', start: 'سَافَرْتُ بِالقِطَارِ / بِالطَّائِرَةِ …', more: '… وَاسْتَغْرَقَتِ الرِّحْلَةُ …' },
    { q: 'أَيْنَ تَتَسَوَّقُ؟ وَهَلْ هُوَ رَخِيصٌ؟', en: 'Where do you shop, and is it cheap?', start: 'أَتَسَوَّقُ فِي … ، وَهُوَ أَرْخَصُ مِنْ …', more: '…' },
    { q: 'كَيْفَ أَذْهَبُ مِنَ المَدْرَسَةِ إِلَى المَكْتَبَةِ؟', en: 'How do I get from school to the library?', start: 'اذْهَبْ … ، ثُمَّ …', more: '… وَالمَكْتَبَةُ عَلَى …' },
  ],
  card: {
    title: 'Role-play card — a day out in the city (five prompts)', ar: 'يَوْمٌ فِي المَدِينَةِ', you: 'a visitor', them: 'a helpful local',
    tasks: [
      { ex: 'أَهْلًا! مَاذَا تُرِيدُ أَنْ تَزُورَ؟', task: 'Name two places.', plan: 'مَاذَا ← أُرِيدُ أَنْ أَزُورَ … وَ…', model: 'أُرِيدُ أَنْ أَزُورَ المَتْحَفَ وَالسُّوقَ القَدِيمَ.', modelEn: 'I want to visit the museum and the old market.' },
      { ex: 'المَتْحَفُ بَعِيدٌ قَلِيلًا.', task: 'Ask how to get there.', plan: 'اسْأَلْ ← كَيْفَ أَذْهَبُ إِلَى …؟', model: 'كَيْفَ أَذْهَبُ إِلَيْهِ؟ بِالحَافِلَةِ أَمْ بِالمِتْرُو؟', modelEn: 'How do I get there? By bus or by underground?' },
      { ex: 'بِالمِتْرُو. تَسْتَغْرِقُ الرِّحْلَةُ رُبْعَ سَاعَةٍ.', task: 'Ask about the ticket price.', plan: 'اسْأَلْ ← كَمْ ثَمَنُ التَّذْكِرَةِ؟', model: 'شُكْرًا. كَمْ ثَمَنُ التَّذْكِرَةِ؟', modelEn: 'Thanks. How much is the ticket?' },
      { ex: 'جُنَيْهَانِ فَقَطْ. وَالسُّوقُ قَرِيبٌ مِنَ المَتْحَفِ.', task: 'Ask the exact location of the market.', plan: 'أَيْنَ ← أَيْنَ السُّوقُ بِالضَّبْطِ؟', model: 'أَيْنَ السُّوقُ بِالضَّبْطِ؟ بِجَانِبِ المَتْحَفِ؟', modelEn: 'Where exactly is the market? Next to the museum?' },
      { unexpected: true, ex: 'مَا رَأْيُكَ فِي مَدِينَتِنَا حَتَّى الآنَ؟', task: 'Answer the surprise question.', plan: 'رَأْيُكَ ← هِيَ … ، لٰكِنَّهَا …', model: 'هِيَ جَمِيلَةٌ وَنَظِيفَةٌ، لٰكِنَّهَا مُكْتَظَّةٌ قَلِيلًا.', modelEn: 'It is beautiful and clean, but a bit crowded.' },
    ],
    girl: 'تُرِيدِينَ · رَأْيُكِ',
    notes: 'Five prompts covering places, transport, tickets, positions and opinions; task ! is unexpected.',
  },
  talk: {
    title: '45 seconds: my town and transport', ar: 'مَدِينَتِي وَالمُوَاصَلَاتُ',
    text: 'Speak for 45 seconds without stopping about your town and transport — places, travel, a building, prices, advantages and disadvantages.',
    head: 'Talk for 45 seconds — no stopping',
    routes: {
      core: '30 seconds: one sentence on each theme.',
      develop: '45 seconds with reasons and connectors.',
      stretch: '45 seconds + a route with commands and an overall judgement — no agreement errors.',
    },
  },
  builder: [
    { en: 'The station is opposite the hospital.', cols: [['المَحَطَّةُ', 'المَحَطَّةَ'], ['مُقَابِلَ', 'مُقَابِلُ'], ['المُسْتَشْفَى.', 'مُسْتَشْفًى.']], key: [0, 0, 0], why: 'Position word + genitive (المُسْتَشْفَى does not change).' },
    { en: 'The journey to London takes three hours.', cols: [['تَسْتَغْرِقُ', 'يَسْتَغْرِقُ'], ['الرِّحْلَةُ إِلَى لَنْدَنَ', 'الرِّحْلَةَ إِلَى لَنْدَنُ'], ['ثَلَاثَ سَاعَاتٍ.', 'ثَلَاثَةُ سَاعَةٍ.']], key: [0, 0, 0], why: 'رِحْلَةٌ (f.) → تَسْتَغْرِقُ; ثَلَاثَ سَاعَاتٍ (f. noun → ثَلَاثَ).' },
    { en: 'Turn right, then cross the street. (to a girl)', cols: [['انْعَطِفِي يَمِينًا،', 'انْعَطِفْ يَمِينًا،'], ['ثُمَّ', 'لِأَنَّ'], ['اعْبُرِي الشَّارِعَ.', 'اعْبُرُوا الشَّارِعَ.']], key: [0, 0, 0], why: 'To a girl → -ī on every command.' },
  ],
  errors: [
    { wrong: 'يُوجَدُ صَيْدَلِيَّةٌ بِجَانِبِ البَنْكِ.', hint: 'صَيْدَلِيَّةٌ …', right: 'تُوجَدُ صَيْدَلِيَّةٌ بِجَانِبِ البَنْكِ.', why: 'Feminine → تُوجَدُ.' },
    { wrong: 'كَمْ ثَمَنُهُ؟ (about a ticket — تَذْكِرَةٌ)', hint: 'تَذْكِرَةٌ is feminine.', right: 'كَمْ ثَمَنُهَا؟', why: 'Feminine item → ثَمَنُهَا.' },
    { wrong: 'المَدِينَةُ مُكْتَظٌّ وَصَاخِبٌ.', hint: 'مَدِينَةٌ …', right: 'المَدِينَةُ مُكْتَظَّةٌ وَصَاخِبَةٌ.', why: 'Feminine → ة on both adjectives.' },
  ],
  task: {
    title: 'Timed writing: my town and transport', ar: 'كِتَابَةٌ مُؤَقَّتَةٌ: مَدِينَتِي وَالمُوَاصَلَاتُ',
    text: 'Timed practice (12 minutes). Write about 55–75 words for an e-pal. Include: • your town: places and where they are • how you travel to school and how long it takes • a building and what it is built of • one advantage and one disadvantage • directions from your home to one place.',
    range: [40, 90],
    phrases: [['يُوجَدُ فِي مَدِينَتِي … بِجَانِبِ …', 'in my town there is … next to …'], ['أَذْهَبُ … ، وَتَسْتَغْرِقُ الرِّحْلَةُ …', 'I go …, and it takes …'], ['مِنْ مَزَايَاهَا أَنَّ … ، لٰكِنَّ …', 'one advantage is that …, but …'], ['اذْهَبْ … ثُمَّ انْعَطِفْ …', 'go … then turn …']],
    coreFrames: [
      { ar: 'فِي مَدِينَتِي يُوجَدُ ______ ، وَتُوجَدُ ______ .', en: 'In my town there is … and …' },
      { ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ ______ ، وَتَسْتَغْرِقُ الرِّحْلَةُ ______ .', en: 'I go to school …, and it takes …' },
      { ar: '______ مَبْنِيٌّ / مَبْنِيَّةٌ مِنَ ______ .', en: '… is built of …' },
      { ar: 'مِنْ مَزَايَا مَدِينَتِي أَنَّ ______ .', en: 'One advantage of my town is that …' },
    ],
    developFrames: [
      { ar: 'لٰكِنَّهَا تَفْتَقِرُ إِلَى ______ .', en: 'But it lacks …' },
      { ar: 'مِنْ بَيْتِي إِلَى ______ : اذْهَبْ ______ ، ثُمَّ ______ .', en: 'From my house to …: go …, then …' },
    ],
    bank: ['يُوجَدُ · تُوجَدُ', 'بِجَانِبِ · مُقَابِلَ · بَيْنَ', 'بِالحَافِلَةِ · مَشْيًا', 'تَسْتَغْرِقُ', 'مَبْنِيٌّ مِنْ', 'مِنْ مَزَايَا … أَنَّ', 'تَفْتَقِرُ إِلَى', 'اذْهَبْ · انْعَطِفْ'],
    model: {
      text: 'مَرْحَبًا! أَسْكُنُ فِي مَدِينَةِ بِرْمِنْغْهَامَ. فِي وَسَطِهَا يُوجَدُ مَيْدَانٌ كَبِيرٌ، وَتُوجَدُ مَكْتَبَةٌ حَدِيثَةٌ بِجَانِبِهِ، وَهِيَ مَبْنِيَّةٌ مِنَ الزُّجَاجِ وَالمَعْدِنِ. أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ، وَتَسْتَغْرِقُ الرِّحْلَةُ نِصْفَ سَاعَةٍ. مِنْ مَزَايَا مَدِينَتِي أَنَّ المُوَاصَلَاتِ كَثِيرَةٌ، لٰكِنَّهَا مُكْتَظَّةٌ. مِنْ بَيْتِي إِلَى المَكْتَبَةِ: اذْهَبْ مُسْتَقِيمًا، ثُمَّ انْعَطِفْ يَسَارًا عِنْدَ المَحَطَّةِ.',
      en: '“Hello! I live in Birmingham. In the centre there is a big square, and a modern library next to it, built of glass and metal. I go to school by bus, and the journey takes half an hour. One advantage of my city is that there is a lot of transport, but it is crowded. From my house to the library: go straight on, then turn left at the station.”',
      find: ['وَتُوجَدُ مَكْتَبَةٌ حَدِيثَةٌ', 'مَبْنِيَّةٌ مِنَ الزُّجَاجِ', 'وَتَسْتَغْرِقُ الرِّحْلَةُ', 'مِنْ مَزَايَا مَدِينَتِي أَنَّ'],
    },
  },
  checkCore: 'cover every bullet point in full sentences within the time?',
  checkDevelop: 'get the F6 agreements right (يُوجَدُ / تُوجَدُ · ثَمَنُهُ / ثَمَنُهَا · commands)?',
  remember: 'Remember: decode the question word, answer in full sentences, check every agreement.',
});
