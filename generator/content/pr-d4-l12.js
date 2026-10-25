'use strict';
/* Practice Room · D4-L12 · Review — environment, weather and technology, the whole unit in one room. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd4-l12',
  arShort: 'مُرَاجَعَةُ الوَحْدَةِ',
  grammar: 'D4 review: yasūdu / yatamayyazu bi-; weather word as subject; yutawaqqaʿu an + -a; bi-sababi · yuʾaddī ilā · mimmā yusabbibu; passives; yanbaghī / yajibu ʿalā … an + -a (-ū for “they”); digital verbs + prepositions; tuḥawwilu … ilā …; idhā lam + jussive; impersonal reporting; qualified judgements',
  focus: 'Students run their own review of the whole D4 unit: recall twelve key D4 expressions, act a mixed dialogue, answer mixed exam-style cards, do a full role-play card, give a one-minute talk, then build, fix and write an exam-style article — and set one target for D5.',
  words1: 'D4 key language (1)', words2: 'D4 key language (2)',
  addWords: [
    ['يَسُودُ مَنَاخٌ مُعْتَدِلٌ', 'a mild climate prevails'], ['تَهُبُّ الرِّيَاحُ', 'the winds blow'], ['يُتَوَقَّعُ أَنْ', 'it is expected that'], ['بِسَبَبِ', 'because of'], ['يُؤَدِّي إِلَى', 'leads to'], ['تُقْطَعُ الأَشْجَارُ', 'trees are cut down'],
    ['يَجِبُ عَلَى الحُكُومَةِ أَنْ', 'the government must'], ['إِعَادَةُ التَّدْوِيرِ', 'recycling'], ['أَتَوَاصَلُ مَعَ', 'I keep in touch with'], ['تُحَوِّلُ … إِلَى …', 'converts … into …'], ['إِذَا لَمْ نُرَشِّدْ', 'if we don’t conserve'], ['إِلَى حَدٍّ مَا', 'to some extent'],
  ],
  dialogue: {
    title: 'Everything from D4 in one conversation', ar: 'كُلُّ الوَحْدَةِ فِي حِوَارٍ',
    lines: [
      ['A', 'كَيْفَ الطَّقْسُ فِي مَدِينَتِكَ هٰذَا الأُسْبُوعَ؟', 'What is the weather like in your city this week?'],
      ['B', 'تَهُبُّ رِيَاحٌ قَوِيَّةٌ، وَيُتَوَقَّعُ أَنْ يَسْقُطَ المَطَرُ غَدًا.', 'Strong winds are blowing, and rain is expected tomorrow.'],
      ['A', 'وَمَا المُشْكِلَةُ البِيئِيَّةُ هُنَاكَ؟', 'And the environmental problem there?'],
      ['B', 'الفَيَضَانَاتُ، بِسَبَبِ قَطْعِ الأَشْجَارِ، مِمَّا يُسَبِّبُ خَسَائِرَ كَبِيرَةً.', 'Floods, because of tree cutting, which causes big losses.'],
      ['A', 'وَمَا الحَلُّ؟', 'And the solution?'],
      ['B', 'يَجِبُ عَلَى البَلَدِيَّةِ أَنْ تَزْرَعَ الأَشْجَارَ، وَالتِّكْنُولُوجِيَا تُسَاعِدُ إِلَى حَدٍّ مَا.', 'The council must plant trees, and technology helps to some extent.'],
    ],
    foot: 'Round 1: read it. Round 2: swap letters. Round 3: answer with YOUR city — then ask your partner the same three questions.',
  },
  qTitle: 'Mixed exam cards — one from each part of D4',
  questions: [
    { q: 'صِفْ طَبِيعَةَ بَلَدٍ تَعْرِفُهُ وَمَنَاخَهُ.', en: 'Describe the nature and climate of a country you know.', start: 'يَتَمَيَّزُ / تَتَمَيَّزُ … بِ… وَيَسُودُ …', more: '… بَيْنَمَا …' },
    { q: 'مَا تَوَقُّعَاتُ الطَّقْسِ لِنِهَايَةِ الأُسْبُوعِ؟', en: 'What’s the forecast for the weekend?', start: 'يُتَوَقَّعُ أَنْ …', more: '… أَحَرُّ / أَبْرَدُ مِنْ …' },
    { q: 'مَا أَسْبَابُ التَّلَوُّثِ وَنَتَائِجُهُ؟', en: 'Causes and effects of pollution?', start: 'بِسَبَبِ … ، مِمَّا يُؤَدِّي إِلَى …', more: '…' },
    { q: 'كَيْفَ تَسْتَخْدِمُ التِّكْنُولُوجِيَا؟ هَلْ هِيَ مُفِيدَةٌ؟', en: 'How do you use technology? Is it useful?', start: 'أَتَوَاصَلُ مَعَ … / أَبْحَثُ عَنْ …', more: '… مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …' },
    { q: 'مَاذَا سَيَحْدُثُ إِذَا لَمْ نَحْمِ البِيئَةَ؟', en: 'What will happen if we don’t protect the environment?', start: 'إِذَا لَمْ نَحْمِ البِيئَةَ، فَسَوْفَ …', more: '… لِذٰلِكَ يَجِبُ …' },
  ],
  card: {
    title: 'Role-play card — the school environment day interview', ar: 'يَوْمُ البِيئَةِ فِي المَدْرَسَةِ', you: 'the eco-club leader', them: 'a local journalist',
    tasks: [
      { ex: 'مَا أَكْبَرُ مُشْكِلَةٍ فِي مَدْرَسَتِكُمْ؟', task: 'Problem + cause.', plan: 'المُشْكِلَةُ ← … بِسَبَبِ …', model: 'هَدْرُ الطَّعَامِ، بِسَبَبِ الوَجَبَاتِ الكَبِيرَةِ فِي المَقْصَفِ.', modelEn: 'Food waste, because of big portions in the canteen.' },
      { ex: 'وَمَا النَّتِيجَةُ؟', task: 'Effect chain.', plan: 'النَّتِيجَةُ ← يُؤَدِّي إِلَى … مِمَّا …', model: 'يُؤَدِّي ذٰلِكَ إِلَى نُفَايَاتٍ كَثِيرَةٍ، مِمَّا يُسَبِّبُ رَوَائِحَ وَتَلَوُّثًا.', modelEn: 'That leads to lots of waste, which causes smells and pollution.' },
      { ex: 'وَمَا حُلُولُكُمْ؟', task: 'Two solutions.', plan: '', model: 'يَنْبَغِي أَنْ نُقَدِّمَ وَجَبَاتٍ أَصْغَرَ، وَيَجِبُ عَلَى الطُّلَّابِ أَنْ يُعِيدُوا تَدْوِيرَ البَقَايَا.', modelEn: 'We should serve smaller meals, and students must recycle the leftovers.' },
      { unexpected: true, ex: 'هَلْ تَسْتَخْدِمُونَ التِّكْنُولُوجِيَا؟', task: 'Explain one technology.', plan: '', model: 'نَعَمْ، عِنْدَنَا آلَةٌ تُحَوِّلُ بَقَايَا الطَّعَامِ إِلَى سَمَادٍ لِلْحَدِيقَةِ.', modelEn: 'Yes — we have a machine that turns food leftovers into compost for the garden.' },
    ],
    girl: 'no changes needed',
    notes: 'This card mixes every D4 structure; the Coach ticks each one heard.',
  },
  talk: {
    title: 'One minute: my D4 showcase', ar: 'أَعْرِضُ مَا تَعَلَّمْتُ',
    text: 'Talk for one minute about the environment and technology. The Coach ticks: يَسُودُ · weather verb · يُتَوَقَّعُ أَنْ · بِسَبَبِ · يُؤَدِّي إِلَى · passive · يَجِبُ عَلَى … أَنْ · تُحَوِّلُ … إِلَى · إِذَا لَمْ.',
    routes: {
      core: 'Five structures from the list.',
      develop: 'Seven structures, with accurate أَنْ + -a.',
      stretch: 'All nine, ending with a qualified judgement.',
    },
  },
  builder: [
    { en: 'Snow is expected to fall in the mountains.', cols: [['يُتَوَقَّعُ', 'يَتَوَقَّعُ'], ['أَنْ تَسْقُطَ الثُّلُوجُ', 'أَنْ يَسْقُطُ الثُّلُوجُ'], ['فِي الجِبَالِ.', 'فِي الجِبَالُ.']], key: [0, 0, 0], why: 'Non-human plural → تَسْقُطَ; أَنْ + -a.' },
    { en: 'Water is polluted, which causes diseases.', cols: [['تُلَوَّثُ المِيَاهُ،', 'يُلَوِّثُ المِيَاهُ،'], ['مِمَّا يُسَبِّبُ', 'لِأَنَّ يُسَبِّبُ'], ['الأَمْرَاضَ.', 'الأَمْرَاضُ.']], key: [0, 0, 0], why: 'Passive + مِمَّا يُسَبِّبُ + object.' },
    { en: 'Citizens must use public transport.', cols: [['يَجِبُ عَلَى المُوَاطِنِينَ', 'يَجِبُ المُوَاطِنُونَ'], ['أَنْ يَسْتَخْدِمُوا', 'أَنْ يَسْتَخْدِمُونَ'], ['النَّقْلَ العَامَّ.', 'النَّقْلُ العَامُّ.']], key: [0, 0, 0], why: 'عَلَى + genitive; -ū after أَنْ.' },
  ],
  errors: [
    { wrong: 'يَسْقُطُ الثُّلُوجُ وَيُتَوَقَّعُ أَنْ يَرْتَفِعُ البَرْدُ.', hint: 'Two errors.', right: 'تَسْقُطُ الثُّلُوجُ، وَيُتَوَقَّعُ أَنْ يَشْتَدَّ البَرْدُ.', why: 'Non-human plural → f. verb; أَنْ + -a.' },
    { wrong: 'يُؤَدِّي التَّلَوُّثُ المَرَضَ بِسَبَبِ المَصَانِعُ.', hint: 'Two errors.', right: 'يُؤَدِّي التَّلَوُّثُ إِلَى المَرَضِ بِسَبَبِ المَصَانِعِ.', why: 'يُؤَدِّي إِلَى; بِسَبَبِ + genitive.' },
    { wrong: 'إِذَا لَا نُرَشِّدُ المَاءَ، سَيَنْضَبُ.', hint: 'Two errors.', right: 'إِذَا لَمْ نُرَشِّدِ المَاءَ، فَسَوْفَ يَنْضَبُ.', why: 'إِذَا لَمْ + jussive; result with fa-.' },
  ],
  task: {
    title: 'Exam-style article: our planet', ar: 'مَقَالٌ بِأُسْلُوبِ الامْتِحَانِ: كَوْكَبُنَا',
    text: 'Write an article (about 60–85 words) for a youth magazine. Answer ALL four bullets: • the climate and weather where you live • one environmental problem, with causes and effects • two solutions (one for the government, one for young people) • can technology help? Give a qualified judgement.',
    range: [55, 100],
    phrases: [['يَسُودُ … · يُتَوَقَّعُ أَنْ …', 'a … prevails · it is expected that …'], ['بِسَبَبِ … مِمَّا يُؤَدِّي إِلَى …', 'because of …, which leads to …'], ['يَجِبُ عَلَى … أَنْ … · يَنْبَغِي أَنْ …', '… must … · we should …'], ['إِلَى حَدٍّ مَا · بِشَرْطِ أَنْ …', 'to some extent · on condition that …']],
    coreFrames: [
      { ar: 'فِي ______ يَسُودُ مَنَاخٌ ______ .', en: 'In … a … climate prevails.' },
      { ar: 'أَكْبَرُ مُشْكِلَةٍ هِيَ ______ بِسَبَبِ ______ .', en: 'The biggest problem is … because of …' },
      { ar: 'يَجِبُ عَلَى الحُكُومَةِ أَنْ ______ .', en: 'The government must …' },
      { ar: 'التِّكْنُولُوجِيَا تُسَاعِدُ إِلَى حَدٍّ مَا، لِأَنَّ ______ .', en: 'Technology helps to some extent, because …' },
    ],
    developFrames: [
      { ar: '______ ، مِمَّا يُؤَدِّي إِلَى ______ .', en: '…, which leads to …' },
      { ar: 'يَجِبُ عَلَى الشَّبَابِ أَنْ ______ ، بِشَرْطِ أَنْ ______ .', en: 'Young people must …, on condition that …' },
    ],
    bank: ['يَسُودُ · يَتَمَيَّزُ بِ…', 'يُتَوَقَّعُ أَنْ', 'بِسَبَبِ · يُؤَدِّي إِلَى', 'مِمَّا يُسَبِّبُ', 'تُقْطَعُ · يُلَوَّثُ', 'يَجِبُ عَلَى … أَنْ', 'تُحَوِّلُ … إِلَى …', 'إِلَى حَدٍّ مَا'],
    model: {
      text: 'فِي شَمَالِ إِنْجِلْتِرَا يَسُودُ مَنَاخٌ بَارِدٌ وَرَطْبٌ، وَيَسْقُطُ المَطَرُ كَثِيرًا، وَيُتَوَقَّعُ أَنْ تَزْدَادَ العَوَاصِفُ فِي المُسْتَقْبَلِ. أَكْبَرُ مُشْكِلَةٍ هُنَا هِيَ الفَيَضَانَاتُ، بِسَبَبِ الأَمْطَارِ الغَزِيرَةِ وَالبِنَاءِ قُرْبَ الأَنْهَارِ، مِمَّا يُؤَدِّي إِلَى تَدْمِيرِ البُيُوتِ. يَجِبُ عَلَى الحُكُومَةِ أَنْ تَبْنِيَ حَوَاجِزَ قَوِيَّةً، وَيَجِبُ عَلَى الشَّبَابِ أَنْ يَزْرَعُوا الأَشْجَارَ. التِّكْنُولُوجِيَا تُسَاعِدُ إِلَى حَدٍّ مَا؛ فَمَثَلًا، تُرْسِلُ التَّطْبِيقَاتُ تَحْذِيرَاتٍ مُبَكِّرَةً، بِشَرْطِ أَنْ يَهْتَمَّ النَّاسُ بِهَا.',
      en: '“In the north of England a cold, humid climate prevails, it rains a lot, and storms are expected to increase in future. The biggest problem here is flooding, because of heavy rain and building near rivers, which leads to houses being destroyed. The government must build strong barriers, and young people must plant trees. Technology helps to some extent; for example, apps send early warnings, on condition that people pay attention to them.”',
      find: ['يَسُودُ مَنَاخٌ بَارِدٌ', 'يُتَوَقَّعُ أَنْ تَزْدَادَ', 'مِمَّا يُؤَدِّي إِلَى', 'إِلَى حَدٍّ مَا'],
    },
  },
  checkCore: 'answer all four bullets with accurate verb agreement?',
  checkDevelop: 'use a cause-effect chain, -ū after أَنْ and a qualified judgement?',
  remember: 'Before you leave: write ONE target for D5 in your book, e.g. “After أَنْ, they = -ū (يَسْتَخْدِمُوا).”',
});
