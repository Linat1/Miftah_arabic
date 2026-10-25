'use strict';
/* Practice Room · D4-L10 · Listening — environment and technology news. Partners read, partners catch. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd4-l10',
  arShort: 'أَسْتَمِعُ إِلَى الأَخْبَارِ',
  grammar: 'news reporting verbs: aʿlana anna · akkada anna · ḥadhdhara min · aḍāfa anna — WHO said it?; the FINAL detail after a change (badalan min · tamma taʾjīlu … ilā …); exact figures (irtafaʿa min … ilā … · bi-nisbati …); the speaker’s role (murāsil · khabīr · wazīr)',
  focus: 'Students run their own listening-and-speaking practice in pairs: one reads a short news item aloud, the other catches who said what, the final detail after a change, and the exact figures. Then they do a role-play card as a TV correspondent, read a one-minute bulletin with traps, and build, fix and write their own news item.',
  words1: 'News words', words2: 'Reporting and figures',
  dialogue: {
    title: 'Catch the news', ar: 'الْتَقِطِ الخَبَرَ',
    lines: [
      ['A', 'أَعْلَنَتْ وِزَارَةُ البِيئَةِ أَنَّ المُؤْتَمَرَ سَيُعْقَدُ فِي مَارِسَ، بَدَلًا مِنْ فِبْرَايِرَ.', 'The Environment Ministry announced the conference will be held in March, instead of February.'],
      ['B', 'الشَّهْرُ النِّهَائِيُّ: مَارِسُ. «بَدَلًا مِنْ» تُغَيِّرُ المَعْلُومَةَ.', 'Final month: March. “instead of” changes the information.'],
      ['A', 'وَحَذَّرَ خَبِيرٌ مِنِ ارْتِفَاعِ الحَرَارَةِ.', 'And an expert warned of rising temperatures.'],
      ['B', 'مَنْ حَذَّرَ؟ الخَبِيرُ، لَيْسَ الوِزَارَةَ.', 'Who warned? The expert, not the ministry.'],
      ['A', 'وَأَضَافَ أَنَّ الحَرَارَةَ ارْتَفَعَتْ مِنْ ثَلَاثِينَ إِلَى ثَلَاثٍ وَثَلَاثِينَ دَرَجَةً.', 'He added that temperatures rose from thirty to thirty-three degrees.'],
      ['B', 'إِذَنِ الارْتِفَاعُ ثَلَاثُ دَرَجَاتٍ — وَالرَّقْمُ الأَخِيرُ ثَلَاثٌ وَثَلَاثُونَ.', 'So the rise is three degrees — and the final figure is thirty-three.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: A invents a news item with “instead of”; B catches the final detail and who said it.',
  },
  qTitle: 'Catch it — the Leader reads, the Speaker answers',
  questions: [
    { q: 'أَكَّدَ الوَزِيرُ أَنَّ المَشْرُوعَ سَيَبْدَأُ فِي الصَّيْفِ، بَدَلًا مِنَ الرَّبِيعِ. — مَتَى يَبْدَأُ؟', en: '“The minister confirmed the project will start in summer, instead of spring.” — When?', start: 'فِي الصَّيْفِ …', more: 'Trap: الرَّبِيعُ = القَدِيمُ' },
    { q: 'حَذَّرَتْ خَبِيرَةٌ مِنْ نَقْصِ المِيَاهِ. — مَنْ حَذَّرَ؟ وَمِمَّ؟', en: '“A (female) expert warned of water shortage.” — Who? Of what?', start: 'الخَبِيرَةُ … مِنْ …', more: '…' },
    { q: 'ارْتَفَعَ عَدَدُ السَّيَّارَاتِ الكَهْرَبَائِيَّةِ مِنْ أَلْفٍ إِلَى خَمْسَةِ آلَافٍ. — كَمِ العَدَدُ الآنَ؟', en: '“EVs rose from 1,000 to 5,000.” — How many now?', start: 'خَمْسَةُ آلَافٍ …', more: 'Trap: أَلْفٌ = البِدَايَةُ' },
    { q: 'قَالَ المُرَاسِلُ إِنَّ العَاصِفَةَ لَنْ تَصِلَ اليَوْمَ، بَلْ غَدًا. — مَتَى تَصِلُ؟', en: '“The correspondent said the storm won’t arrive today, but tomorrow.” — When?', start: 'غَدًا …', more: 'Key word: بَلْ' },
    { q: 'انْخَفَضَ التَّلَوُّثُ بِنِسْبَةِ ٢٠٪، وَأَضَافَ الخَبِيرُ أَنَّ هٰذَا غَيْرُ كَافٍ. — مَا مَوْقِفُ الخَبِيرِ؟', en: '“Pollution fell 20%; the expert added this is not enough.” — Expert’s view?', start: 'هُوَ غَيْرُ رَاضٍ …', more: '… لِأَنَّهُ قَالَ …' },
  ],
  card: {
    title: 'Role-play card — the TV correspondent', ar: 'مُرَاسِلٌ تِلِفِزْيُونِيٌّ', you: 'the correspondent on location', them: 'the studio presenter',
    tasks: [
      { ex: 'مَا آخِرُ الأَخْبَارِ مِنْ هُنَاكَ؟', task: 'The main news.', plan: 'الخَبَرُ ← أَعْلَنَتِ البَلَدِيَّةُ أَنَّ …', model: 'أَعْلَنَتِ البَلَدِيَّةُ أَنَّ الحَدِيقَةَ الجَدِيدَةَ سَتُفْتَتَحُ غَدًا.', modelEn: 'The council announced the new park will open tomorrow.' },
      { ex: 'أَلَمْ يَكُنِ الافْتِتَاحُ اليَوْمَ؟', task: 'The change.', plan: 'التَّغْيِيرُ ← نَعَمْ، وَلٰكِنْ … بَدَلًا مِنَ …', model: 'كَانَ اليَوْمَ، وَلٰكِنْ تَمَّ تَأْجِيلُهُ إِلَى الغَدِ بِسَبَبِ المَطَرِ.', modelEn: 'It was today, but it was postponed to tomorrow because of the rain.' },
      { ex: 'وَهَلْ تَحَدَّثْتَ مَعَ أَحَدٍ؟', task: 'Report a statement.', plan: '', model: 'نَعَمْ، أَكَّدَ المُهَنْدِسُ أَنَّهُمْ زَرَعُوا أَلْفَ شَجَرَةٍ.', modelEn: 'Yes, the engineer confirmed that they planted a thousand trees.' },
      { unexpected: true, ex: 'وَهَلْ هُنَاكَ أَيُّ تَحْذِيرٍ؟', task: 'A warning.', plan: '', model: 'حَذَّرَتِ الشُّرْطَةُ مِنَ الزِّحَامِ، وَنَصَحَتِ الزُّوَّارَ بِاسْتِخْدَامِ الحَافِلَاتِ.', modelEn: 'The police warned of traffic and advised visitors to use buses.' },
    ],
    girl: 'presenter to a female correspondent: تَحَدَّثْتِ',
    notes: 'Reporting verbs: aʿlana / akkada anna … · ḥadhdhara min … · aḍāfa anna …',
  },
  talk: {
    title: 'One minute: read the news — with traps', ar: 'نَشْرَةٌ فِيهَا فِخَاخٌ',
    text: 'Read a one-minute news bulletin you invent: three items, two different speakers, one “instead of” change and one figure that rises or falls. Your partner notes: who · final detail · final figure.',
    head: 'Speak for one minute — your partner catches the details',
    routes: {
      core: 'Three items with أَعْلَنَ / أَكَّدَ أَنَّ …',
      develop: 'Add a change with بَدَلًا مِنْ and a figure (مِنْ … إِلَى …).',
      stretch: 'Add حَذَّرَ مِنْ … , أَضَافَ أَنَّ … and a second speaker.',
    },
  },
  builder: [
    { en: 'The minister announced that the plan will start in May.', cols: [['أَعْلَنَ الوَزِيرُ', 'أَعْلَنَتِ الوَزِيرُ'], ['أَنَّ الخُطَّةَ', 'أَنَّ الخُطَّةُ'], ['سَتَبْدَأُ فِي مَايُو.', 'سَتَبْدَأَ فِي مَايُو.']], key: [0, 0, 0], why: 'Minister (m.) → أَعْلَنَ; أَنَّ + -a.' },
    { en: 'The expert (f.) warned of pollution.', cols: [['حَذَّرَتِ الخَبِيرَةُ', 'حَذَّرَ الخَبِيرَةُ'], ['مِنَ', 'عَلَى'], ['التَّلَوُّثِ.', 'التَّلَوُّثُ.']], key: [0, 0, 0], why: 'حَذَّرَ مِنْ + genitive; feminine subject → حَذَّرَتْ.' },
    { en: 'The rate rose from 10% to 25%.', cols: [['ارْتَفَعَتِ النِّسْبَةُ', 'ارْتَفَعَ النِّسْبَةُ'], ['مِنْ عَشَرَةٍ', 'إِلَى عَشَرَةٍ'], ['إِلَى خَمْسَةٍ وَعِشْرِينَ بِالمِئَةِ.', 'مِنْ خَمْسَةٍ وَعِشْرِينَ بِالمِئَةِ.']], key: [0, 0, 0], why: 'نِسْبَةٌ (f.); rose FROM … TO …' },
  ],
  errors: [
    { wrong: '«… فِي مَارِسَ بَدَلًا مِنْ فِبْرَايِرَ» ← فِبْرَايِرُ.', hint: 'Which month is final?', right: 'مَارِسُ.', why: 'بَدَلًا مِنْ X = X is cancelled.' },
    { wrong: '«أَعْلَنَتِ الوِزَارَةُ … وَحَذَّرَ الخَبِيرُ …» ← الوِزَارَةُ حَذَّرَتْ.', hint: 'Who warned?', right: 'الخَبِيرُ هُوَ الَّذِي حَذَّرَ.', why: 'Match each reporting verb to its speaker.' },
    { wrong: '«ارْتَفَعَ مِنْ ٣٠ إِلَى ٣٣» ← الارْتِفَاعُ ٣٣.', hint: 'Rise or final figure?', right: 'الارْتِفَاعُ ٣، وَالرَّقْمُ النِّهَائِيُّ ٣٣.', why: 'Separate the change from the final figure.' },
  ],
  task: {
    title: 'Write a news item — with traps', ar: 'أَكْتُبُ خَبَرًا فِيهِ فِخَاخٌ',
    text: 'Write a short news item (about 60–80 words) about an environmental or technology event for a listening test. Include: • two speakers with reporting verbs (أَعْلَنَ · أَكَّدَ · حَذَّرَ مِنْ · أَضَافَ) • one change with بَدَلًا مِنْ • one figure that rises or falls (مِنْ … إِلَى …). Then write three questions and read it to your partner.',
    phrases: [['أَعْلَنَ / أَعْلَنَتْ … أَنَّ …', '… announced that …'], ['… بَدَلًا مِنْ …', '… instead of …'], ['ارْتَفَعَ / انْخَفَضَ مِنْ … إِلَى …', 'rose / fell from … to …'], ['حَذَّرَ مِنْ … · أَضَافَ أَنَّ …', 'warned of … · added that …']],
    coreFrames: [
      { ar: 'أَعْلَنَ / أَعْلَنَتْ ______ أَنَّ ______ .', en: '… announced that …' },
      { ar: '______ فِي ______ بَدَلًا مِنْ ______ .', en: '… in … instead of …' },
      { ar: 'ارْتَفَعَ / انْخَفَضَ ______ مِنْ ______ إِلَى ______ .', en: '… rose / fell from … to …' },
      { ar: 'حَذَّرَ ______ مِنْ ______ .', en: '… warned of …' },
    ],
    developFrames: [
      { ar: 'وَأَضَافَ / وَأَضَافَتْ أَنَّ ______ .', en: 'And he / she added that …' },
      { ar: 'أَسْئِلَةٌ: ١) مَتَى …؟ ٢) مَنْ حَذَّرَ …؟ ٣) كَمِ العَدَدُ الآنَ؟', en: 'Questions: 1) When …? 2) Who warned …? 3) What is the number now?' },
    ],
    bank: ['نَشْرَةٌ إِخْبَارِيَّةٌ', 'مُرَاسِلٌ · خَبِيرٌ', 'تَصْرِيحٌ', 'أَعْلَنَ أَنَّ · أَكَّدَ أَنَّ', 'حَذَّرَ مِنْ', 'أَضَافَ أَنَّ', 'بَدَلًا مِنْ', 'ارْتَفَعَ مِنْ … إِلَى …'],
    model: {
      text: `أَعْلَنَتْ بَلَدِيَّةُ المَدِينَةِ أَنَّ الحَافِلَاتِ الكَهْرَبَائِيَّةَ سَتَبْدَأُ العَمَلَ فِي سِبْتَمْبَرَ، بَدَلًا مِنْ يُونْيُو. وَأَكَّدَ مُدِيرُ النَّقْلِ أَنَّ عَدَدَ الحَافِلَاتِ ارْتَفَعَ مِنْ عِشْرِينَ إِلَى خَمْسِينَ حَافِلَةً. مِنْ جِهَتِهَا، حَذَّرَتْ خَبِيرَةٌ بِيئِيَّةٌ مِنْ نَقْصِ مَحَطَّاتِ الشَّحْنِ، وَأَضَافَتْ أَنَّ المَدِينَةَ تَحْتَاجُ إِلَى مِئَةِ مَحَطَّةٍ عَلَى الأَقَلِّ.
أَسْئِلَةٌ: ١) مَتَى تَبْدَأُ الحَافِلَاتُ؟ ٢) كَمْ حَافِلَةً هُنَاكَ الآنَ؟ ٣) مَنْ حَذَّرَ، وَمِمَّ؟`,
      en: '“The city council announced that electric buses will start operating in September, instead of June. The transport director confirmed that the number of buses rose from twenty to fifty. For her part, an environmental expert warned of a shortage of charging stations, and added that the city needs at least a hundred. Questions: 1) When do the buses start? 2) How many buses are there now? 3) Who warned, and of what?”',
      find: ['أَعْلَنَتْ بَلَدِيَّةُ المَدِينَةِ أَنَّ', 'بَدَلًا مِنْ يُونْيُو', 'ارْتَفَعَ مِنْ عِشْرِينَ', 'حَذَّرَتْ خَبِيرَةٌ'],
    },
  },
  checkCore: 'catch the FINAL detail after بَدَلًا مِنْ and the final figure?',
  checkDevelop: 'match each reporting verb to the right speaker?',
});
