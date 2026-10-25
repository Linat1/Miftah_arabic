'use strict';
/* Practice Room · D1-L08 · Weekend routine — school week vs weekend. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd1-l08',
  arShort: 'نِهَايَةُ الأُسْبُوعِ',
  grammar: 'contrast: ammā … fa- · baynamā · ʿalā ʿaks; condition with idhā + past verb (idhā kāna ʿindī waqtun …); flexible frequency (ghāliban mā · fī baʿḍi al-aḥyāni); comparatives (aṭwal · akthar); a judgement about balance',
  focus: 'Students run their own speaking and writing practice contrasting the school week with the weekend: say the weekend phrases, act a short dialogue, answer question cards, do a role-play card planning a weekend with a cousin, give a one-minute contrast talk, then build, fix and write a blog post about their weekend.',
  words1: 'The weekend', words2: 'Weekend activities and contrast',
  dialogue: {
    title: 'Is your weekend different?', ar: 'هَلْ نِهَايَةُ أُسْبُوعِكَ مُخْتَلِفَةٌ؟',
    lines: [
      ['A', 'هَلْ يَخْتَلِفُ رُوتِينُكَ فِي نِهَايَةِ الأُسْبُوعِ؟', 'Is your routine different at the weekend?'],
      ['B', 'جِدًّا! فِي أَيَّامِ الدِّرَاسَةِ أَسْتَيْقِظُ فِي السَّادِسَةِ، أَمَّا يَوْمَ السَّبْتِ فَأَنَامُ وَقْتًا أَطْوَلَ.', 'Very! On school days I wake up at six; as for Saturday, I sleep longer.'],
      ['A', 'وَمَاذَا تَفْعَلُ يَوْمَ الأَحَدِ؟', 'And what do you do on Sunday?'],
      ['B', 'غَالِبًا مَا أَزُورُ أَقَارِبِي، وَإِذَا كَانَ الجَوُّ جَمِيلًا نَذْهَبُ إِلَى الشَّاطِئِ.', 'I often visit my relatives, and if the weather is nice we go to the beach.'],
      ['A', 'وَهَلْ تَدْرُسُ؟', 'And do you study?'],
      ['B', 'قَلِيلًا. أُرَاجِعُ سَاعَةً مَسَاءَ الأَحَدِ، بَيْنَمَا أُرَاجِعُ ثَلَاثَ سَاعَاتٍ يَوْمِيًّا فِي الأُسْبُوعِ.', 'A little. I revise for an hour on Sunday evening, whereas I revise three hours a day in the week.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: give YOUR weekend — every answer must contrast with a school day.',
  },
  questions: [
    { q: 'مَتَى تَسْتَيْقِظُ يَوْمَ السَّبْتِ؟', en: 'When do you wake up on Saturday?', start: 'يَوْمَ السَّبْتِ أَسْتَيْقِظُ فِي …', more: '… أَمَّا فِي أَيَّامِ الدِّرَاسَةِ فَ…' },
    { q: 'مَاذَا تَفْعَلُ إِذَا كَانَ عِنْدَكَ وَقْتٌ؟', en: 'What do you do if you have time?', start: 'إِذَا كَانَ عِنْدِي وَقْتٌ …', more: '… مَعَ …' },
    { q: 'مَاذَا تَفْعَلُ إِذَا كَانَ الجَوُّ مُمْطِرًا؟', en: 'What do you do if it is rainy?', start: 'إِذَا كَانَ الجَوُّ مُمْطِرًا …', more: '… لِأَنَّ …' },
    { q: 'مَعَ مَنْ تَقْضِي نِهَايَةَ الأُسْبُوعِ؟', en: 'Who do you spend the weekend with?', start: 'أَقْضِيهَا مَعَ …', more: '… غَالِبًا مَا …' },
    { q: 'هَلْ أُسْبُوعُكَ مُتَوَازِنٌ؟', en: 'Is your week balanced?', start: 'فِي رَأْيِي …', more: '… لِأَنَّ … وَلٰكِنْ …' },
  ],
  card: {
    title: 'Role-play card — planning a weekend with your cousin', ar: 'خُطَّةٌ لِنِهَايَةِ الأُسْبُوعِ', you: 'yourself', them: 'your cousin, who is visiting',
    tasks: [
      { ex: 'مَاذَا تَفْعَلُ عَادَةً يَوْمَ السَّبْتِ؟', task: 'Your usual Saturday.', plan: 'مَاذَا ← عَادَةً أَنَامُ … ثُمَّ …', model: 'عَادَةً أَنَامُ حَتَّى التَّاسِعَةِ، ثُمَّ أَلْعَبُ كُرَةَ القَدَمِ فِي الحَدِيقَةِ.', modelEn: 'I usually sleep until nine, then play football in the park.' },
      { ex: 'وَإِذَا كَانَ الجَوُّ سَيِّئًا؟', task: 'Plan B with إِذَا.', plan: 'إِذَا ← إِذَا كَانَ … نَذْهَبُ إِلَى …', model: 'إِذَا كَانَ الجَوُّ سَيِّئًا نَذْهَبُ إِلَى المَتْحَفِ أَوِ السِّينِمَا.', modelEn: 'If the weather is bad, we go to the museum or the cinema.' },
      { ex: 'وَيَوْمَ الأَحَدِ؟', task: 'Contrast Sunday.', plan: '', model: 'أَمَّا يَوْمُ الأَحَدِ فَنَزُورُ جَدَّتِي، وَنَتَغَدَّى عِنْدَهَا.', modelEn: 'As for Sunday, we visit my grandmother and have lunch at her house.' },
      { unexpected: true, ex: 'هَلْ عِنْدَكَ وَاجِبٌ فِي نِهَايَةِ الأُسْبُوعِ؟', task: 'Answer the surprise question.', plan: '', model: 'نَعَمْ، لِذٰلِكَ أُرَاجِعُ سَاعَةً صَبَاحَ الأَحَدِ، قَبْلَ أَنْ نَخْرُجَ.', modelEn: 'Yes, so I revise for an hour on Sunday morning, before we go out.' },
    ],
    girl: 'cousin to a girl: تَفْعَلِينَ · عِنْدَكِ',
    notes: 'ammā … fa- (fa- joins the next word) · idhā kāna + adjective in -an · qabla an + verb in -a.',
  },
  talk: {
    title: 'One minute: week vs weekend', ar: 'الأُسْبُوعُ وَنِهَايَتُهُ',
    text: 'Contrast your school week with your weekend for one minute and finish with a judgement: is your week balanced?',
    routes: {
      core: 'Three weekday sentences and three weekend sentences.',
      develop: 'Join them with بَيْنَمَا and أَمَّا … فَ…, plus one إِذَا.',
      stretch: 'Add comparatives (وَقْتًا أَطْوَلَ · أَكْثَرَ) and a balanced judgement with لٰكِنْ.',
    },
  },
  builder: [
    { en: 'As for Saturday, I sleep longer.', cols: [['أَمَّا يَوْمُ السَّبْتِ', 'أَمَّا يَوْمَ السَّبْتِ'], ['فَأَنَامُ', 'أَنَامُ'], ['وَقْتًا أَطْوَلَ.', 'وَقْتٌ أَطْوَلُ.']], key: [0, 0, 0], why: 'أَمَّا + subject (-u), then fa-; وَقْتًا is accusative.' },
    { en: 'If I have time, I visit my friends.', cols: [['إِذَا كَانَ', 'إِذَا يَكُونُ'], ['عِنْدِي وَقْتٌ،', 'عِنْدِي وَقْتًا،'], ['أَزُورُ أَصْدِقَائِي.', 'أَزُورُ أَصْدِقَائِيَ.']], key: [0, 0, 0], why: 'إِذَا + past كَانَ; وَقْتٌ is the subject.' },
    { en: 'On weekdays I study, whereas I rest at the weekend.', cols: [['فِي أَيَّامِ الدِّرَاسَةِ أَدْرُسُ،', 'فِي أَيَّامُ الدِّرَاسَةِ أَدْرُسُ،'], ['بَيْنَمَا', 'لِذٰلِكَ'], ['أَرْتَاحُ فِي نِهَايَةِ الأُسْبُوعِ.', 'أَرْتَاحُ فِي نِهَايَةُ الأُسْبُوعِ.']], key: [0, 0, 0], why: 'فِي + genitive; whereas = بَيْنَمَا.' },
  ],
  errors: [
    { wrong: 'أَمَّا يَوْمُ الأَحَدِ أَزُورُ جَدِّي.', hint: 'أَمَّا needs its partner.', right: 'أَمَّا يَوْمُ الأَحَدِ فَأَزُورُ جَدِّي.', why: 'أَمَّا … then fa-: فَأَزُورُ.' },
    { wrong: 'إِذَا كَانَ الجَوُّ جَمِيلٌ نَخْرُجُ.', hint: 'Look at the adjective after كَانَ.', right: 'إِذَا كَانَ الجَوُّ جَمِيلًا نَخْرُجُ.', why: 'كَانَ makes the adjective accusative: جَمِيلًا.' },
    { wrong: 'أَنَامُ وَقْتًا أَطْوَلُ فِي العُطْلَةِ.', hint: 'Adjective agrees with وَقْتًا.', right: 'أَنَامُ وَقْتًا أَطْوَلَ فِي العُطْلَةِ.', why: 'Agreeing comparative: أَطْوَلَ.' },
  ],
  task: {
    title: 'A blog post: my weekend', ar: 'مُدَوَّنَةٌ: نِهَايَةُ أُسْبُوعِي',
    text: 'Write a blog post (about 60–80 words) about your weekend compared with the school week. Include: • four weekend activities with times or frequency • one أَمَّا … فَ… and one بَيْنَمَا • one إِذَا sentence (Plan B) • a judgement: is your week balanced? why?',
    phrases: [['فِي أَيَّامِ الدِّرَاسَةِ …، أَمَّا فِي نِهَايَةِ الأُسْبُوعِ فَ…', 'on school days …; as for the weekend …'], ['غَالِبًا مَا … · فِي بَعْضِ الأَحْيَانِ …', 'often … · sometimes …'], ['إِذَا كَانَ الجَوُّ … ، …', 'if the weather is …, …'], ['فِي رَأْيِي أُسْبُوعِي مُتَوَازِنٌ لِأَنَّ …', 'I think my week is balanced because …']],
    coreFrames: [
      { ar: 'فِي أَيَّامِ الدِّرَاسَةِ أَسْتَيْقِظُ فِي ______ .', en: 'On school days I wake up at …' },
      { ar: 'يَوْمَ السَّبْتِ ______ ، ثُمَّ ______ .', en: 'On Saturday I …, then …' },
      { ar: 'يَوْمَ الأَحَدِ غَالِبًا مَا ______ .', en: 'On Sunday I often …' },
      { ar: 'فِي رَأْيِي أُسْبُوعِي ______ ، لِأَنَّ ______ .', en: 'In my opinion my week is …, because …' },
    ],
    developFrames: [
      { ar: 'أَمَّا فِي نِهَايَةِ الأُسْبُوعِ فَ ______ .', en: 'As for the weekend, …' },
      { ar: 'إِذَا كَانَ الجَوُّ ______ ، ______ .', en: 'If the weather is …, …' },
    ],
    bank: ['أَنَامُ وَقْتًا أَطْوَلَ', 'أَزُورُ أَقَارِبِي', 'أَلْتَقِي بِأَصْدِقَائِي', 'غَالِبًا مَا', 'فِي بَعْضِ الأَحْيَانِ', 'أَمَّا … فَ…', 'بَيْنَمَا · إِذَا', 'مُتَوَازِنٌ'],
    model: {
      text: 'فِي أَيَّامِ الدِّرَاسَةِ أَسْتَيْقِظُ فِي السَّادِسَةِ، وَأَدْرُسُ حَتَّى المَسَاءِ. أَمَّا فِي نِهَايَةِ الأُسْبُوعِ فَأَنَامُ وَقْتًا أَطْوَلَ، حَتَّى التَّاسِعَةِ تَقْرِيبًا. يَوْمَ السَّبْتِ أَلْعَبُ التِّنِسَ مَعَ أَبِي، ثُمَّ أَلْتَقِي بِأَصْدِقَائِي فِي المَرْكَزِ التِّجَارِيِّ. يَوْمَ الأَحَدِ غَالِبًا مَا نَزُورُ أَقَارِبَنَا، وَإِذَا كَانَ الجَوُّ جَمِيلًا نَتَنَزَّهُ فِي الرِّيفِ. أُرَاجِعُ سَاعَةً وَاحِدَةً فَقَطْ، بَيْنَمَا أُرَاجِعُ ثَلَاثَ سَاعَاتٍ فِي الأُسْبُوعِ. فِي رَأْيِي أُسْبُوعِي مُتَوَازِنٌ، لِأَنَّنِي أَعْمَلُ بِجِدٍّ ثُمَّ أَرْتَاحُ.',
      en: '“On school days I wake up at six and study until the evening. As for the weekend, I sleep longer, until about nine. On Saturday I play tennis with my dad, then meet my friends at the shopping centre. On Sunday we often visit our relatives, and if the weather is nice we go for a walk in the countryside. I revise for only one hour, whereas I revise three hours in the week. In my opinion my week is balanced, because I work hard and then rest.”',
      find: ['أَمَّا فِي نِهَايَةِ الأُسْبُوعِ فَأَنَامُ', 'غَالِبًا مَا', 'وَإِذَا كَانَ الجَوُّ جَمِيلًا', 'بَيْنَمَا أُرَاجِعُ'],
    },
  },
  checkCore: 'describe four weekend activities with times or frequency?',
  checkDevelop: 'contrast with أَمَّا … فَ… / بَيْنَمَا and use إِذَا كَانَ … correctly?',
});
