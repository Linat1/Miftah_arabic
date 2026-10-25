'use strict';
/* Practice Room · D4-L11 · Consolidation — range mastery and speaking preparation. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd4-l11',
  arShort: 'تَرْسِيخُ الوَحْدَةِ',
  grammar: 'one chain for the whole unit: climate → problem → cause → solution → qualified judgement; accuracy under pressure (an + -a · lam + jussive · non-human plural → f. sg. · anna + -a); recovering in speaking: li-uṣaḥḥiḥ dhālika · aqṣidu anna … · bi-ʿibāratin ukhrā',
  focus: 'Students run their own consolidation of the whole D4 unit: say the range and recovery phrases, act a dialogue that recovers from a mistake, build the full chain aloud with cards, do a role-play card as examiner and candidate, give a one-minute developed answer under time pressure, then build, fix and write a developed exam answer.',
  words1: 'Range and accuracy', words2: 'Recovering in speaking',
  dialogue: {
    title: 'Recovering from a mistake', ar: 'أُصَحِّحُ نَفْسِي',
    lines: [
      ['A', 'مَا أَكْبَرُ مُشْكِلَةٍ بِيئِيَّةٍ فِي بَلَدِكَ؟', 'What is the biggest environmental problem in your country?'],
      ['B', 'أَكْبَرُ مُشْكِلَةٍ هِيَ تَلَوُّثُ الهَوَاءِ… لِأُصَحِّحْ ذٰلِكَ: فِي المُدُنِ الكَبِيرَةِ فَقَطْ.', 'The biggest problem is air pollution… let me correct that: in the big cities only.'],
      ['A', 'وَمَا سَبَبُهُ؟', 'And what causes it?'],
      ['B', 'السَّيَّارَاتُ. أَقْصِدُ أَنَّ عَدَدَ السَّيَّارَاتِ ارْتَفَعَ كَثِيرًا.', 'Cars. What I mean is that the number of cars has risen a lot.'],
      ['A', 'وَمَا الحَلُّ؟', 'And the solution?'],
      ['B', 'يَجِبُ أَنْ نَسْتَخْدِمَ النَّقْلَ العَامَّ؛ بِعِبَارَةٍ أُخْرَى، أَنْ نَتْرُكَ السَّيَّارَةَ فِي البَيْتِ، إِلَى حَدٍّ مَا.', 'We must use public transport; in other words, leave the car at home — to some extent.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: answer about YOUR country — use each recovery phrase once.',
  },
  qTitle: 'The chain — one link per card',
  questions: [
    { q: '١) كَيْفَ المَنَاخُ فِي بَلَدِكَ؟', en: '1) What is the climate like in your country?', start: 'يَسُودُ مَنَاخٌ …', more: '… وَيَتَمَيَّزُ … بِ…' },
    { q: '٢) مَا المُشْكِلَةُ البِيئِيَّةُ الأَكْبَرُ؟', en: '2) The biggest environmental problem?', start: 'أَكْبَرُ مُشْكِلَةٍ هِيَ …', more: '… فِي …' },
    { q: '٣) مَا سَبَبُهَا وَنَتِيجَتُهَا؟', en: '3) Its cause and effect?', start: 'بِسَبَبِ … ، مِمَّا يُؤَدِّي إِلَى …', more: '…' },
    { q: '٤) مَا الحَلُّ؟', en: '4) The solution?', start: 'يَجِبُ عَلَى … أَنْ …', more: '… لِكَيْ …' },
    { q: '٥) هَلْ سَتَنْجَحُ الحُلُولُ؟', en: '5) Will the solutions work?', start: 'إِلَى حَدٍّ مَا، بِشَرْطِ أَنْ …', more: '… وَإِذَا لَمْ … فَسَوْفَ …' },
  ],
  card: {
    title: 'Role-play card — the D4 speaking test (practice)', ar: 'اخْتِبَارُ المُحَادَثَةِ', you: 'the candidate', them: 'the examiner',
    tasks: [
      { ex: 'صِفْ طَقْسَ بَلَدِكَ.', task: 'Climate + comparison.', plan: 'الطَّقْسُ ← يَسُودُ … وَهُوَ أَ… مِنْ …', model: 'يَسُودُ مَنَاخٌ مُعْتَدِلٌ وَرَطْبٌ، وَهُوَ أَبْرَدُ مِنْ مَنَاخِ بَلَدِ وَالِدَيَّ.', modelEn: 'A mild, humid climate prevails, and it is colder than my parents’ country.' },
      { ex: 'مَا المُشْكِلَةُ الَّتِي تُقْلِقُكَ؟', task: 'Problem + cause.', plan: 'المُشْكِلَةُ ← … بِسَبَبِ …', model: 'تُقْلِقُنِي الفَيَضَانَاتُ، بِسَبَبِ الأَمْطَارِ الغَزِيرَةِ وَإِزَالَةِ الغَابَاتِ.', modelEn: 'Floods worry me, because of heavy rain and deforestation.' },
      { ex: 'وَمَا الحَلُّ فِي رَأْيِكَ؟', task: 'Solution + purpose.', plan: '', model: 'يَجِبُ عَلَى الحُكُومَةِ أَنْ تَزْرَعَ الأَشْجَارَ لِكَيْ تَمْتَصَّ المِيَاهَ.', modelEn: 'The government must plant trees so that they absorb the water.' },
      { unexpected: true, ex: 'هَلْ تَسْتَطِيعُ التِّكْنُولُوجِيَا أَنْ تُسَاعِدَ؟', task: 'Qualified judgement.', plan: '', model: 'إِلَى حَدٍّ مَا؛ أَقْصِدُ أَنَّ أَنْظِمَةَ الإِنْذَارِ تُسَاعِدُ، بِشَرْطِ أَنْ يَسْتَمِعَ النَّاسُ إِلَيْهَا.', modelEn: 'To some extent — I mean warning systems help, on condition that people listen to them.' },
    ],
    girl: 'examiner to a girl: بَلَدِكِ · تُقْلِقُكِ · رَأْيِكِ · تَسْتَطِيعِينَ (the topic sentences stay the same)',
    notes: 'The full chain in four answers; one recovery phrase is allowed — and rewarded.',
  },
  talk: {
    title: 'One minute under pressure', ar: 'دَقِيقَةٌ تَحْتَ الضَّغْطِ',
    text: 'The Leader gives a topic card (weather · plastic · technology · water). Speak for one minute with the full chain — no preparation. The Coach counts accuracy slips and recoveries.',
    routes: {
      core: 'Problem → cause → solution.',
      develop: 'The full chain with one passive and one إِذَا sentence.',
      stretch: 'Full chain + qualified judgement + a smooth recovery (لِأُصَحِّحْ ذٰلِكَ).',
    },
  },
  builder: [
    { en: 'What I mean is that the rivers are polluted.', cols: [['أَقْصِدُ', 'أَقْصِدَ'], ['أَنَّ الأَنْهَارَ', 'أَنَّ الأَنْهَارُ'], ['مُلَوَّثَةٌ.', 'مُلَوَّثُونَ.']], key: [0, 0, 0], why: 'أَنَّ + -a; non-human plural → f. sg.' },
    { en: 'If we don’t act, the ice will melt.', cols: [['إِذَا لَمْ', 'إِذَا لَا'], ['نَتَحَرَّكْ،', 'نَتَحَرَّكُ،'], ['فَسَوْفَ يَذُوبُ الجَلِيدُ.', 'سَوْفَ يَذُوبَ الجَلِيدُ.']], key: [0, 0, 0], why: 'لَمْ + jussive; fa-sawfa + present.' },
    { en: 'In other words, we must reduce consumption.', cols: [['بِعِبَارَةٍ أُخْرَى،', 'بِعِبَارَةٌ أُخْرَى،'], ['يَجِبُ أَنْ', 'يَجِبُ'], ['نُقَلِّلَ الاسْتِهْلَاكَ.', 'نُقَلِّلُ الاسْتِهْلَاكَ.']], key: [0, 0, 0], why: 'بِ + genitive; أَنْ + -a.' },
  ],
  errors: [
    { wrong: 'الغَابَاتُ تُقْطَعُ وَهُمْ مُهِمُّونَ.', hint: 'Forests are not people.', right: 'الغَابَاتُ تُقْطَعُ، وَهِيَ مُهِمَّةٌ.', why: 'Non-human plural → هِيَ + f. sg.' },
    { wrong: 'يَجِبُ عَلَى النَّاسِ أَنْ يَسْتَخْدِمُونَ الحَافِلَاتِ.', hint: 'After أَنْ …', right: 'يَجِبُ عَلَى النَّاسِ أَنْ يَسْتَخْدِمُوا الحَافِلَاتِ.', why: '-ūna → -ū after أَنْ.' },
    { wrong: '(silence after a mistake)', hint: 'Recover!', right: 'لِأُصَحِّحْ ذٰلِكَ: …', why: 'Self-correction shows control — examiners reward it.' },
  ],
  task: {
    title: 'A developed exam answer', ar: 'إِجَابَةٌ مُطَوَّرَةٌ',
    text: 'Exam question: «مَا أَكْبَرُ تَحَدٍّ بِيئِيٍّ فِي العَالَمِ، وَكَيْفَ نُوَاجِهُهُ؟» Write a developed answer (about 60–85 words) with the full chain: climate or context → problem → cause and effect → two solutions → a qualified judgement. Use at least one passive, one إِذَا لَمْ … , and one أَقْصِدُ أَنَّ / بِعِبَارَةٍ أُخْرَى.',
    range: [55, 100],
    phrases: [['أَكْبَرُ تَحَدٍّ هُوَ …', 'the biggest challenge is …'], ['بِسَبَبِ … مِمَّا يُؤَدِّي إِلَى …', 'because of …, which leads to …'], ['يَجِبُ عَلَى … أَنْ … لِكَيْ …', '… must … so that …'], ['بِعِبَارَةٍ أُخْرَى … · إِلَى حَدٍّ مَا …', 'in other words … · to some extent …']],
    coreFrames: [
      { ar: 'فِي رَأْيِي أَكْبَرُ تَحَدٍّ هُوَ ______ .', en: 'In my opinion the biggest challenge is …' },
      { ar: 'يَحْدُثُ بِسَبَبِ ______ ، مِمَّا يُؤَدِّي إِلَى ______ .', en: 'It happens because of …, which leads to …' },
      { ar: 'يَجِبُ عَلَى ______ أَنْ ______ .', en: '… must …' },
      { ar: 'إِذَا لَمْ ______ ، فَسَوْفَ ______ .', en: 'If we don’t …, … will …' },
    ],
    developFrames: [
      { ar: 'بِعِبَارَةٍ أُخْرَى، ______ .', en: 'In other words, …' },
      { ar: 'سَتَنْجَحُ هٰذِهِ الحُلُولُ إِلَى حَدٍّ مَا، بِشَرْطِ أَنْ ______ .', en: 'These solutions will work to some extent, on condition that …' },
    ],
    bank: ['يَسُودُ · يَتَمَيَّزُ بِ…', 'بِسَبَبِ · يُؤَدِّي إِلَى', 'مِمَّا يُسَبِّبُ', 'تُقْطَعُ · يُلَوَّثُ', 'يَجِبُ عَلَى … أَنْ', 'إِذَا لَمْ + jussive', 'أَقْصِدُ أَنَّ', 'بِعِبَارَةٍ أُخْرَى'],
    model: {
      text: 'فِي رَأْيِي أَكْبَرُ تَحَدٍّ هُوَ الاحْتِبَاسُ الحَرَارِيُّ. يَحْدُثُ بِسَبَبِ حَرْقِ الوَقُودِ الأُحْفُورِيِّ، وَلِأَنَّ الغَابَاتِ تُقْطَعُ بِسُرْعَةٍ، مِمَّا يُؤَدِّي إِلَى ذَوَبَانِ الجَلِيدِ وَارْتِفَاعِ مُسْتَوَى البَحْرِ. يَجِبُ عَلَى الحُكُومَاتِ أَنْ تَنْتَقِلَ إِلَى الطَّاقَةِ المُتَجَدِّدَةِ، وَيَجِبُ عَلَى المُوَاطِنِينَ أَنْ يُقَلِّلُوا الاسْتِهْلَاكَ. بِعِبَارَةٍ أُخْرَى، كُلُّنَا مَسْؤُولُونَ. إِذَا لَمْ نَتَحَرَّكِ الآنَ، فَسَوْفَ تَغْرَقُ مُدُنٌ سَاحِلِيَّةٌ كَثِيرَةٌ. سَتَنْجَحُ هٰذِهِ الحُلُولُ إِلَى حَدٍّ مَا، بِشَرْطِ أَنْ تَتَعَاوَنَ الدُّوَلُ مَعًا.',
      en: '“In my opinion the biggest challenge is global warming. It happens because fossil fuels are burned and forests are cut down quickly, which leads to melting ice and rising sea levels. Governments must move to renewable energy, and citizens must reduce consumption. In other words, we are all responsible. If we don’t act now, many coastal cities will flood. These solutions will work to some extent, on condition that countries cooperate.”',
      find: ['الغَابَاتِ تُقْطَعُ', 'مِمَّا يُؤَدِّي إِلَى', 'بِعِبَارَةٍ أُخْرَى', 'إِذَا لَمْ نَتَحَرَّكِ'],
    },
  },
  checkCore: 'build the chain problem → cause → solution accurately?',
  checkDevelop: 'add a passive, إِذَا لَمْ + jussive and a qualified judgement?',
});
