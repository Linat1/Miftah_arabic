'use strict';
/* Practice Room · D1-L03 · How often? Frequency adverbs in my routine. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd1-l03',
  arShort: 'كَمْ مَرَّةً؟',
  grammar: 'frequency: dāʾiman · ʿādatan · ghāliban · aḥyānan · nādiran · lā … abadan · kathīran mā; marratan / marratayni / thalātha marrātin fī al-usbūʿi; yawmiyyan · usbūʿiyyan; comparing with baynamā · ammā … fa- · akthara min',
  focus: 'Students run their own speaking and writing practice with frequency: say the frequency words, act a short dialogue, answer “how often?” cards, do a role-play card for a sleep and screen-time survey, give a one-minute comparison talk, then build, fix and write a comparison of a busy day and a quiet day.',
  words1: 'Days and weeks', words2: 'How often?',
  addWords: [['دَائِمًا', 'always'], ['عَادَةً', 'usually'], ['أَحْيَانًا', 'sometimes'], ['نَادِرًا', 'rarely'], ['مَرَّتَيْنِ فِي الأُسْبُوعِ', 'twice a week'], ['أَمَّا … فَ…', 'as for … (contrast)']],
  dialogue: {
    title: 'How often do you …?', ar: 'كَمْ مَرَّةً …؟',
    lines: [
      ['A', 'كَمْ مَرَّةً تُمَارِسُ الرِّيَاضَةَ؟', 'How often do you do sport?'],
      ['B', 'أَلْعَبُ كُرَةَ السَّلَّةِ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ، وَأَمْشِي يَوْمِيًّا.', 'I play basketball three times a week, and I walk daily.'],
      ['A', 'وَهَلْ تَسْهَرُ كَثِيرًا؟', 'And do you stay up late a lot?'],
      ['B', 'نَادِرًا فِي أَيَّامِ الدِّرَاسَةِ، بَيْنَمَا أَسْهَرُ غَالِبًا فِي نِهَايَةِ الأُسْبُوعِ.', 'Rarely on school days, whereas I often stay up at the weekend.'],
      ['A', 'وَأُخْتُكَ؟', 'And your sister?'],
      ['B', 'أَمَّا أُخْتِي فَلَا تَسْهَرُ أَبَدًا! هِيَ تَنَامُ أَكْثَرَ مِنِّي.', 'As for my sister, she never stays up! She sleeps more than me.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: answer about YOUR habits and compare with someone in your family.',
  },
  questions: [
    { q: 'كَمْ مَرَّةً تُرَاجِعُ دُرُوسَكَ؟', en: 'How often do you revise?', start: 'أُرَاجِعُ … ← يَوْمِيًّا / مَرَّتَيْنِ فِي الأُسْبُوعِ', more: '… لٰكِنْ قَبْلَ الامْتِحَانِ …' },
    { q: 'هَلْ تَأْكُلُ الإِفْطَارَ دَائِمًا؟', en: 'Do you always eat breakfast?', start: 'عَادَةً … / لَا … أَبَدًا', more: '… لِأَنَّ …' },
    { q: 'مَا الَّذِي تَفْعَلُهُ نَادِرًا؟', en: 'What do you rarely do?', start: 'نَادِرًا مَا …', more: '… لِأَنَّهُ …' },
    { q: 'قَارِنْ يَوْمَ الإِثْنَيْنِ بِيَوْمِ السَّبْتِ.', en: 'Compare Monday with Saturday.', start: 'يَوْمُ الإِثْنَيْنِ مُزْدَحِمٌ، بَيْنَمَا …', more: '…' },
    { q: 'مَنْ يُمَارِسُ الرِّيَاضَةَ أَكْثَرَ: أَنْتَ أَمْ صَدِيقُكَ؟', en: 'Who does more sport: you or your friend?', start: '… أَكْثَرَ مِنْ …', more: '… أَمَّا أَنَا فَ… ← فَأُفَضِّلُ …' },
  ],
  card: {
    title: 'Role-play card — a student health survey', ar: 'اسْتِبْيَانٌ عَنِ النَّوْمِ وَالشَّاشَاتِ', you: 'a student', them: 'the school nurse',
    tasks: [
      { ex: 'كَمْ سَاعَةً تَنَامُ عَادَةً؟', task: 'Hours of sleep.', plan: 'كَمْ ← عَادَةً أَنَامُ … سَاعَاتٍ', model: 'عَادَةً أَنَامُ ثَمَانِيَ سَاعَاتٍ.', modelEn: 'I usually sleep eight hours.' },
      { ex: 'كَمْ مَرَّةً تَسْتَعْمِلُ الهَاتِفَ قَبْلَ النَّوْمِ؟', task: 'Frequency.', plan: 'كَمْ مَرَّةً ← أَحْيَانًا / غَالِبًا …', model: 'غَالِبًا، لِلْأَسَفِ، حَوَالَيْ نِصْفِ سَاعَةٍ.', modelEn: 'Often, unfortunately — about half an hour.' },
      { ex: 'وَفِي نِهَايَةِ الأُسْبُوعِ؟', task: 'Contrast with the weekend.', plan: '', model: 'أَمَّا فِي نِهَايَةِ الأُسْبُوعِ فَأَسْتَعْمِلُهُ أَكْثَرَ، لِأَنَّنِي لَا أَذْهَبُ إِلَى المَدْرَسَةِ.', modelEn: 'As for the weekend, I use it more, because I don’t go to school.' },
      { unexpected: true, ex: 'مَاذَا سَتُغَيِّرُ؟', task: 'Answer the surprise question.', plan: '', model: 'سَأُغْلِقُ الهَاتِفَ فِي العَاشِرَةِ دَائِمًا، وَلَنْ أَسْتَعْمِلَهُ فِي السَّرِيرِ أَبَدًا.', modelEn: 'I will always switch off my phone at ten, and I will never use it in bed.' },
    ],
    girl: 'تَنَامِينَ · تَسْتَعْمِلِينَ · سَتُغَيِّرِينَ',
    notes: 'Frequency adverbs + ammā … fa- contrast; future with sa- and lan.',
  },
  talk: {
    title: 'One minute: a busy day and a quiet day', ar: 'يَوْمٌ مُزْدَحِمٌ وَيَوْمٌ هَادِئٌ',
    text: 'Compare your busiest day with your quietest day for one minute: what you do and how often — with at least five frequency expressions.',
    routes: {
      core: 'Five frequency words, one per sentence.',
      develop: 'Add numbers of times (مَرَّتَيْنِ فِي الأُسْبُوعِ) and بَيْنَمَا.',
      stretch: 'Add أَمَّا … فَ… (as in the model), أَكْثَرُ مِنْ … and a judgement on balance.',
    },
  },
  builder: [
    { en: 'I usually revise every evening.', cols: [['عَادَةً', 'أَبَدًا'], ['أُرَاجِعُ دُرُوسِي', 'يُرَاجِعُ دُرُوسِي'], ['كُلَّ مَسَاءٍ.', 'كُلُّ مَسَاءٍ.']], key: [0, 0, 0], why: 'Usually = عَادَةً; every evening = كُلَّ مَسَاءٍ.' },
    { en: 'I never drink coffee.', cols: [['لَا', 'لَنْ'], ['أَشْرَبُ القَهْوَةَ', 'أَشْرَبُ القَهْوَةُ'], ['أَبَدًا.', 'دَائِمًا.']], key: [0, 0, 0], why: 'Never (present) = لَا + verb … أَبَدًا.' },
    { en: 'My brother trains twice a week, whereas I train daily.', cols: [['يَتَدَرَّبُ أَخِي مَرَّتَيْنِ فِي الأُسْبُوعِ،', 'يَتَدَرَّبُ أَخِي مَرَّتَانِ فِي الأُسْبُوعِ،'], ['بَيْنَمَا', 'لِذٰلِكَ'], ['أَتَدَرَّبُ يَوْمِيًّا.', 'يَتَدَرَّبُ يَوْمِيًّا.']], key: [0, 0, 0], why: 'Twice = مَرَّتَيْنِ (adverb, accusative dual); whereas = بَيْنَمَا.' },
  ],
  errors: [
    { wrong: 'أَبَدًا أَسْهَرُ.', hint: '“never” needs two parts.', right: 'لَا أَسْهَرُ أَبَدًا.', why: 'Never = لَا + verb + أَبَدًا.' },
    { wrong: 'أَمَّا أُخْتِي تَنَامُ مُبَكِّرًا.', hint: 'أَمَّا needs a partner.', right: 'أَمَّا أُخْتِي فَتَنَامُ مُبَكِّرًا.', why: 'أَمَّا … then add fa- to the next word: فَتَنَامُ.' },
    { wrong: 'أَلْعَبُ ثَلَاثَةَ مَرَّاتٍ فِي الأُسْبُوعِ.', hint: 'مَرَّةٌ is feminine.', right: 'أَلْعَبُ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ.', why: 'Feminine noun → ثَلَاثَ.' },
  ],
  task: {
    title: 'A busy day vs a quiet day', ar: 'يَوْمٌ مُزْدَحِمٌ وَيَوْمٌ هَادِئٌ',
    text: 'Write a blog post (about 60–80 words) comparing your busiest and quietest days. Include: • what you do on each day and how often (five frequency expressions) • one thing you never do • a comparison with بَيْنَمَا and one with أَمَّا … فَ… (contrast) • which day you prefer and why.',
    phrases: [['يَوْمُ … مُزْدَحِمٌ، بَيْنَمَا يَوْمُ … هَادِئٌ', '… is busy, whereas … is quiet'], ['عَادَةً · غَالِبًا · أَحْيَانًا · نَادِرًا', 'usually · often · sometimes · rarely'], ['لَا … أَبَدًا', 'never'], ['أَمَّا فِي … فَأَنَامُ …', 'as for …, I sleep …']],
    coreFrames: [
      { ar: 'يَوْمِي المُزْدَحِمُ هُوَ ______ .', en: 'My busy day is …' },
      { ar: 'فِي هٰذَا اليَوْمِ ______ دَائِمًا، وَ ______ أَحْيَانًا.', en: 'On this day I always …, and sometimes …' },
      { ar: 'لَا ______ أَبَدًا.', en: 'I never …' },
      { ar: 'يَوْمِي الهَادِئُ ______ ، وَعَادَةً ______ .', en: 'My quiet day is …, and I usually …' },
    ],
    developFrames: [
      { ar: '______ مُزْدَحِمٌ، بَيْنَمَا ______ .', en: '… is busy, whereas …' },
      { ar: 'أَمَّا يَوْمُ ______ فَ ______ ، لِذٰلِكَ أُفَضِّلُهُ.', en: 'As for …, …, so I prefer it.' },
    ],
    bank: ['دَائِمًا · عَادَةً', 'غَالِبًا · أَحْيَانًا', 'نَادِرًا · لَا … أَبَدًا', 'يَوْمِيًّا · أُسْبُوعِيًّا', 'مَرَّتَيْنِ فِي الأُسْبُوعِ', 'بَيْنَمَا', 'أَمَّا … فَ…', 'أَكْثَرَ مِنْ'],
    model: {
      text: 'يَوْمِي المُزْدَحِمُ هُوَ الأَرْبِعَاءُ. فِي هٰذَا اليَوْمِ عِنْدِي دَائِمًا سَبْعُ حِصَصٍ، ثُمَّ أَتَدَرَّبُ فِي النَّادِي، وَأَحْيَانًا أُرَاجِعُ حَتَّى العَاشِرَةِ. لَا أُشَاهِدُ التِّلْفَازَ أَبَدًا يَوْمَ الأَرْبِعَاءِ. يَوْمُ الأَرْبِعَاءِ مُزْدَحِمٌ، بَيْنَمَا يَوْمُ السَّبْتِ هَادِئٌ. أَمَّا يَوْمُ السَّبْتِ فَأَنَامُ غَالِبًا حَتَّى التَّاسِعَةِ، وَنَادِرًا مَا أَعْمَلُ وَاجِبِي. أُفَضِّلُ السَّبْتَ طَبْعًا، لِأَنَّنِي أَقْضِي وَقْتًا أَكْثَرَ مَعَ عَائِلَتِي، وَأَزُورُ جَدَّتِي مَرَّتَيْنِ فِي الشَّهْرِ.',
      en: '“My busy day is Wednesday. On that day I always have seven lessons, then train at the club, and sometimes revise until ten. I never watch TV on Wednesday. Wednesday is busy, whereas Saturday is quiet. As for Saturday, I often sleep until nine, and I rarely do homework. I prefer Saturday of course, because I spend more time with my family, and I visit my grandmother twice a month.”',
      find: ['دَائِمًا', 'لَا أُشَاهِدُ التِّلْفَازَ أَبَدًا', 'بَيْنَمَا يَوْمُ السَّبْتِ', 'أَمَّا يَوْمُ السَّبْتِ فَأَنَامُ'],
    },
  },
  checkCore: 'use at least four different frequency expressions correctly?',
  checkDevelop: 'compare with بَيْنَمَا and أَمَّا … (+ fa-)?',
});
