'use strict';
/* Practice Room · D4-L08 · Reading — environment and technology reports. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd4-l08',
  arShort: 'أَقْرَأُ التَّقَارِيرَ',
  grammar: 'impersonal reporting: yushāru ilā anna … · yutawaqqaʿu an …; statistics: yablughu … · yumaththilu … · bi-nisbati … % · wafqan li-…; claim (iddiʿāʾ) vs evidence (dalīl); tracking pronouns; comparing the tone of two texts (mutafāʾil · mutashāʾim · muḥāyid)',
  focus: 'Students run their own reading-and-speaking practice with reports: read a short report aloud, find the exact statistic, separate claim from evidence, track pronouns and compare tone. They do a role-play card presenting a report to the class, give a one-minute “what the data says” talk, then build, fix and write a short report with statistics.',
  words1: 'Reports and data', words2: 'Reporting verbs',
  dialogue: {
    title: 'What does the report say?', ar: 'مَاذَا يَقُولُ التَّقْرِيرُ؟',
    lines: [
      ['A', '«وَفْقًا لِتَقْرِيرٍ جَدِيدٍ، تَبْلُغُ نِسْبَةُ إِعَادَةِ التَّدْوِيرِ فِي المَدِينَةِ ٣٠٪.»', '“According to a new report, the city’s recycling rate is 30%.”'],
      ['B', 'إِذَنِ الرَّقْمُ الدَّقِيقُ: ثَلَاثُونَ بِالمِئَةِ.', 'So the exact figure is thirty per cent.'],
      ['A', '«يُشَارُ إِلَى أَنَّ النُّفَايَاتِ البِلَاسْتِيكِيَّةَ تُمَثِّلُ نِصْفَ القُمَامَةِ.»', '“It is indicated that plastic waste represents half of the rubbish.”'],
      ['B', '«تُمَثِّلُ نِصْفَ» = خَمْسُونَ بِالمِئَةِ. هٰذَا دَلِيلٌ، لَيْسَ رَأْيًا.', '“Represents half” = 50%. That is evidence, not opinion.'],
      ['A', '«يَدَّعِي البَعْضُ أَنَّ المُشْكِلَةَ بَسِيطَةٌ.»', '“Some claim that the problem is simple.”'],
      ['B', 'هٰذَا ادِّعَاءٌ بِدُونِ دَلِيلٍ — وَالأَرْقَامُ تَقُولُ العَكْسَ.', 'That is a claim without evidence — and the figures say the opposite.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: A invents a statistic; B says “claim or evidence?” and repeats the exact figure.',
  },
  qTitle: 'Report detective — find the figure, prove it',
  questions: [
    { q: '«يَبْلُغُ عَدَدُ السَّيَّارَاتِ الكَهْرَبَائِيَّةِ ٢٠٠٠ سَيَّارَةٍ.» — كَمْ عَدَدُهَا؟', en: '“The number of electric cars reaches 2,000.” — How many?', start: 'يَبْلُغُ عَدَدُهَا أَلْفَيْ سَيَّارَةٍ', more: '… الفِعْلُ: يَبْلُغُ' },
    { q: '«انْخَفَضَ التَّلَوُّثُ بِنِسْبَةِ ١٥٪.» — مَاذَا حَدَثَ؟', en: '“Pollution fell by 15%.” — What happened?', start: 'انْخَفَضَ التَّلَوُّثُ بِنِسْبَةِ …', more: '… وَهٰذَا خَبَرٌ جَيِّدٌ' },
    { q: '«يُتَوَقَّعُ أَنْ تَرْتَفِعَ الحَرَارَةُ دَرَجَتَيْنِ.» — هَلْ هٰذَا حَدَثَ؟', en: '“Temperatures are expected to rise two degrees.” — Has it happened?', start: 'لَا، هٰذَا تَوَقُّعٌ …', more: '… لِلْمُسْتَقْبَلِ' },
    { q: '«الطَّاقَةُ الشَّمْسِيَّةُ أَفْضَلُ حَلٍّ.» — ادِّعَاءٌ أَمْ دَلِيلٌ؟', en: '“Solar is the best solution.” — Claim or evidence?', start: 'ادِّعَاءٌ، لِأَنَّهُ …', more: '… لَا يُوجَدُ رَقْمٌ' },
    { q: 'النَّصُّ الأَوَّلُ مُتَفَائِلٌ وَالثَّانِي مُتَشَائِمٌ. — مَا الفَرْقُ؟', en: 'Text 1 is optimistic, text 2 pessimistic. — The difference?', start: 'النَّصُّ الأَوَّلُ … بَيْنَمَا …', more: '… الدَّلِيلُ كَلِمَةُ …' },
  ],
  card: {
    title: 'Role-play card — presenting a report to the class', ar: 'أُقَدِّمُ تَقْرِيرًا', you: 'the presenter', them: 'a classmate asking questions',
    tasks: [
      { ex: 'عَنْ مَاذَا تَقْرِيرُكَ؟', task: 'Topic + source.', plan: 'المَوْضُوعُ ← تَقْرِيرِي عَنْ … وَفْقًا لِبَيَانَاتِ …', model: 'تَقْرِيرِي عَنِ الطَّاقَةِ فِي مَدْرَسَتِنَا، وَفْقًا لِبَيَانَاتِ الإِدَارَةِ.', modelEn: 'My report is about energy at our school, according to the management’s data.' },
      { ex: 'مَا أَهَمُّ رَقْمٍ؟', task: 'A statistic.', plan: 'رَقْمٌ ← يَبْلُغُ … / يُمَثِّلُ …', model: 'تُمَثِّلُ الإِضَاءَةُ أَرْبَعِينَ بِالمِئَةِ مِنِ اسْتِهْلَاكِ الكَهْرَبَاءِ.', modelEn: 'Lighting represents forty per cent of electricity consumption.' },
      { ex: 'هَلْ هُنَاكَ تَحَسُّنٌ؟', task: 'A change with بِنِسْبَةِ.', plan: '', model: 'نَعَمْ، انْخَفَضَ الاسْتِهْلَاكُ بِنِسْبَةِ عَشَرَةٍ بِالمِئَةِ هٰذَا العَامَ.', modelEn: 'Yes, consumption fell by ten per cent this year.' },
      { unexpected: true, ex: 'بَعْضُ الطُّلَّابِ يَقُولُونَ إِنَّ الأَرْقَامَ غَيْرُ صَحِيحَةٍ.', task: 'Claim vs evidence.', plan: '', model: 'هٰذَا ادِّعَاءٌ، وَلٰكِنَّ الدَّلِيلَ هُوَ فَوَاتِيرُ الكَهْرَبَاءِ الرَّسْمِيَّةُ.', modelEn: 'That is a claim, but the evidence is the official electricity bills.' },
    ],
    girl: 'classmate to a girl: تَقْرِيرُكِ',
    notes: 'Read numbers exactly; name the source (wafqan li-…); separate claim from evidence.',
  },
  talk: {
    title: 'One minute: what the data says', ar: 'مَاذَا تَقُولُ الأَرْقَامُ؟',
    text: 'The Leader writes three invented statistics (e.g. 25% · 3,000 · −10%). Talk for one minute reporting them formally, then give your interpretation.',
    routes: {
      core: 'Report the three figures with يَبْلُغُ / بِنِسْبَةِ.',
      develop: 'Add وَفْقًا لِ… and يُشَارُ إِلَى أَنَّ …',
      stretch: 'Add one claim vs evidence comment and a tone word (مُتَفَائِلٌ / مُتَشَائِمٌ).',
    },
  },
  builder: [
    { en: 'It is indicated that pollution is increasing.', cols: [['يُشَارُ', 'يُشِيرُ'], ['إِلَى أَنَّ التَّلَوُّثَ', 'أَنَّ التَّلَوُّثُ'], ['يَزْدَادُ.', 'يَزْدَادَ.']], key: [0, 0, 0], why: 'يُشَارُ إِلَى أَنَّ + noun in -a.' },
    { en: 'According to the report, the rate reaches 40%.', cols: [['وَفْقًا لِلتَّقْرِيرِ،', 'وَفْقًا التَّقْرِيرِ،'], ['تَبْلُغُ النِّسْبَةُ', 'يَبْلُغُ النِّسْبَةَ'], ['أَرْبَعِينَ بِالمِئَةِ.', 'أَرْبَعُونَ بِالمِئَةِ.']], key: [0, 0, 0], why: 'وَفْقًا لِ…; نِسْبَةٌ (f.) → تَبْلُغُ + object in -īna.' },
    { en: 'Consumption fell by 10%.', cols: [['انْخَفَضَ', 'انْخَفَضَتْ'], ['الاسْتِهْلَاكُ', 'الاسْتِهْلَاكَ'], ['بِنِسْبَةِ عَشَرَةٍ بِالمِئَةِ.', 'نِسْبَةَ عَشَرَةٍ بِالمِئَةِ.']], key: [0, 0, 0], why: 'اسْتِهْلَاكٌ (m.) → انْخَفَضَ; by = بِنِسْبَةِ.' },
  ],
  errors: [
    { wrong: '«تُمَثِّلُ رُبْعَ» ← خَمْسُونَ بِالمِئَةِ.', hint: 'A quarter = ?', right: '«تُمَثِّلُ رُبْعَ» = خَمْسَةٌ وَعِشْرُونَ بِالمِئَةِ.', why: 'Read fractions exactly: رُبْعٌ = 25%.' },
    { wrong: '«يُتَوَقَّعُ أَنْ يَرْتَفِعَ …» ← ارْتَفَعَ فِعْلًا.', hint: 'Has it happened?', right: 'هٰذَا تَوَقُّعٌ لِلْمُسْتَقْبَلِ، لَمْ يَحْدُثْ بَعْدُ.', why: 'يُتَوَقَّعُ = a prediction, not a fact.' },
    { wrong: 'يُشَارُ أَنَّ الطَّاقَةَ غَالِيَةٌ.', hint: 'Missing preposition.', right: 'يُشَارُ إِلَى أَنَّ الطَّاقَةَ غَالِيَةٌ.', why: 'يُشَارُ إِلَى أَنَّ …' },
  ],
  task: {
    title: 'A short report with statistics', ar: 'تَقْرِيرٌ قَصِيرٌ بِالأَرْقَامِ',
    text: 'Write a short report (about 60–80 words) for the school website on recycling, energy or transport at your school (you may invent realistic data). Include: • the source (وَفْقًا لِ…) • three statistics (يَبْلُغُ · يُمَثِّلُ · بِنِسْبَةِ …) • يُشَارُ إِلَى أَنَّ … • one prediction (يُتَوَقَّعُ أَنْ …) • a conclusion that separates claim from evidence.',
    phrases: [['وَفْقًا لِبَيَانَاتِ …', 'according to … data'], ['يَبْلُغُ … · يُمَثِّلُ … · بِنِسْبَةِ …', 'reaches … · represents … · by …'], ['يُشَارُ إِلَى أَنَّ …', 'it is indicated that …'], ['يُتَوَقَّعُ أَنْ …', 'it is expected that …']],
    coreFrames: [
      { ar: 'وَفْقًا لِبَيَانَاتِ ______ ، ______ .', en: 'According to … data, …' },
      { ar: 'يَبْلُغُ عَدَدُ ______ ______ .', en: 'The number of … reaches …' },
      { ar: 'ارْتَفَعَ / انْخَفَضَ ______ بِنِسْبَةِ ______ بِالمِئَةِ.', en: '… rose / fell by … per cent.' },
      { ar: 'يُتَوَقَّعُ أَنْ ______ .', en: 'It is expected that …' },
    ],
    developFrames: [
      { ar: 'يُشَارُ إِلَى أَنَّ ______ تُمَثِّلُ ______ .', en: 'It is indicated that … represents …' },
      { ar: 'يَدَّعِي البَعْضُ أَنَّ ______ ، وَلٰكِنَّ الأَرْقَامَ ______ .', en: 'Some claim that …, but the figures …' },
    ],
    bank: ['تَقْرِيرٌ · بَيَانَاتٌ', 'إِحْصَاءَاتٌ', 'دَلِيلٌ · ادِّعَاءٌ', 'يُشَارُ إِلَى أَنَّ', 'يُتَوَقَّعُ أَنْ', 'يَبْلُغُ · يُمَثِّلُ', 'وَفْقًا لِ…', 'بِنِسْبَةِ … بِالمِئَةِ'],
    model: {
      text: 'وَفْقًا لِبَيَانَاتِ إِدَارَةِ المَدْرَسَةِ، يَبْلُغُ عَدَدُ الطُّلَّابِ الَّذِينَ يَأْتُونَ بِالسَّيَّارَةِ ثَلَاثَمِئَةِ طَالِبٍ. يُشَارُ إِلَى أَنَّ السَّيَّارَاتِ تُمَثِّلُ سِتِّينَ بِالمِئَةِ مِنْ تَلَوُّثِ الهَوَاءِ أَمَامَ المَدْرَسَةِ. وَلٰكِنْ بَعْدَ حَمْلَةِ «امْشِ إِلَى المَدْرَسَةِ»، انْخَفَضَ عَدَدُ السَّيَّارَاتِ بِنِسْبَةِ عِشْرِينَ بِالمِئَةِ. يُتَوَقَّعُ أَنْ يَسْتَمِرَّ هٰذَا الانْخِفَاضُ إِذَا وَفَّرَتِ البَلَدِيَّةُ حَافِلَاتٍ أَكْثَرَ. يَدَّعِي البَعْضُ أَنَّ الحَمْلَةَ لَمْ تُغَيِّرْ شَيْئًا، وَلٰكِنَّ الأَرْقَامَ دَلِيلٌ وَاضِحٌ عَلَى نَجَاحِهَا.',
      en: '“According to the school management’s data, the number of students who come by car reaches three hundred. It is indicated that cars represent sixty per cent of air pollution in front of the school. But after the “Walk to School” campaign, the number of cars fell by twenty per cent. This fall is expected to continue if the council provides more buses. Some claim the campaign changed nothing, but the figures are clear evidence of its success.”',
      find: ['وَفْقًا لِبَيَانَاتِ', 'يُشَارُ إِلَى أَنَّ', 'بِنِسْبَةِ عِشْرِينَ بِالمِئَةِ', 'يَدَّعِي البَعْضُ'],
    },
  },
  checkCore: 'report figures exactly (يَبْلُغُ · بِنِسْبَةِ)?',
  checkDevelop: 'use impersonal reporting and separate claim from evidence?',
});
