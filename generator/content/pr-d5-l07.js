'use strict';
/* Practice Room · D5-L07 · Holidays and travel — past and future. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd5-l07',
  arShort: 'الإِجَازَاتُ وَالسَّفَرُ',
  grammar: 'the trip in the past: sāfartu ilā · aqamtu fī · zurtu · ḥajaztu · istamtaʿtu bi- · ʿudtu; judging it: kānat min ajmali al-riḥlāt; switching cleanly to the future: sa-azūru · sawfa naḥjizu · anwī an …; time markers decide the tense (al-ṣayfa al-māḍiya ↔ al-ṣayfa al-qādima)',
  focus: 'Students run their own speaking and writing practice about holidays: say the travel verbs, act a past-and-future holiday dialogue, answer question cards, do a role-play card at a travel agency, give a one-minute “last holiday, next holiday” talk, then build, fix and write a holiday email in two tenses.',
  words1: 'Travel verbs', words2: 'Places and judgements',
  dialogue: {
    title: 'Last summer and next summer', ar: 'الصَّيْفُ المَاضِي وَالصَّيْفُ القَادِمُ',
    lines: [
      ['A', 'أَيْنَ قَضَيْتَ إِجَازَةَ الصَّيْفِ المَاضِي؟', 'Where did you spend last summer’s holiday?'],
      ['B', 'سَافَرْتُ إِلَى المَغْرِبِ مَعَ عَائِلَتِي، وَأَقَمْنَا فِي فُنْدُقٍ قُرْبَ البَحْرِ.', 'I travelled to Morocco with my family, and we stayed in a hotel near the sea.'],
      ['A', 'وَمَاذَا زُرْتُمْ؟', 'And what did you visit?'],
      ['B', 'زُرْنَا مَرَّاكُشَ وَاسْتَمْتَعْنَا بِالأَسْوَاقِ. كَانَتْ مِنْ أَجْمَلِ الرِّحْلَاتِ!', 'We visited Marrakesh and enjoyed the markets. It was one of the best trips!'],
      ['A', 'وَالصَّيْفَ القَادِمَ؟', 'And next summer?'],
      ['B', 'سَأَزُورُ جَدَّتِي فِي الأُرْدُنِّ، وَسَوْفَ نَحْجِزُ التَّذَاكِرَ قَرِيبًا.', 'I will visit my grandmother in Jordan, and we will book the tickets soon.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: YOUR last holiday and your next — the time word decides the tense!',
  },
  questions: [
    { q: 'أَيْنَ سَافَرْتَ فِي آخِرِ إِجَازَةٍ؟', en: 'Where did you travel on your last holiday?', start: 'سَافَرْتُ إِلَى …', more: '… مَعَ …' },
    { q: 'أَيْنَ أَقَمْتُمْ؟', en: 'Where did you stay?', start: 'أَقَمْنَا فِي …', more: '… وَكَانَ …' },
    { q: 'بِمَاذَا اسْتَمْتَعْتَ أَكْثَرَ؟', en: 'What did you enjoy most?', start: 'اسْتَمْتَعْتُ بِ…', more: '… لِأَنَّ …' },
    { q: 'هَلْ حَدَثَتْ مُشْكِلَةٌ فِي الرِّحْلَةِ؟', en: 'Did a problem happen on the trip?', start: 'نَعَمْ، … / لَا، …', more: '… وَلٰكِنْ فِي النِّهَايَةِ …' },
    { q: 'أَيْنَ سَتَذْهَبُ فِي الإِجَازَةِ القَادِمَةِ؟', en: 'Where will you go next holiday?', start: 'سَأُسَافِرُ إِلَى … / أَنْوِي أَنْ …', more: '… لِكَيْ …' },
  ],
  card: {
    title: 'Role-play card — at the travel agency', ar: 'فِي وَكَالَةِ السَّفَرِ', you: 'a customer', them: 'the travel agent',
    tasks: [
      { ex: 'أَهْلًا! أَيْنَ تُرِيدُ أَنْ تُسَافِرَ؟', task: 'Where + when (future).', plan: 'أَيْنَ ← سَأُسَافِرُ إِلَى … فِي …', model: 'سَأُسَافِرُ إِلَى إِسْطَنْبُولَ فِي إِجَازَةِ الرَّبِيعِ.', modelEn: 'I will travel to Istanbul in the spring holiday.' },
      { ex: 'هَلْ زُرْتَهَا مِنْ قَبْلُ؟', task: 'Past experience.', plan: 'المَاضِي ← نَعَمْ، زُرْتُهَا … / لَا، لَمْ أَزُرْهَا …', model: 'نَعَمْ، زُرْتُهَا قَبْلَ سَنَتَيْنِ، وَاسْتَمْتَعْتُ بِالمَسَاجِدِ القَدِيمَةِ.', modelEn: 'Yes, I visited two years ago, and I enjoyed the old mosques.' },
      { ex: 'أَيَّ نَوْعٍ مِنَ الفَنَادِقِ تُفَضِّلُ؟', task: 'Preference + reason.', plan: '', model: 'أُفَضِّلُ فُنْدُقًا صَغِيرًا فِي وَسَطِ المَدِينَةِ، لِكَيْ أَمْشِيَ إِلَى كُلِّ مَكَانٍ.', modelEn: 'I prefer a small hotel in the centre, so I can walk everywhere.' },
      { unexpected: true, ex: 'لِلْأَسَفِ، الرِّحْلَاتُ فِي الرَّبِيعِ مَحْجُوزَةٌ!', task: 'Change the plan.', plan: '', model: 'لَا بَأْسَ؛ إِذَنْ سَأَحْجِزُ لِلصَّيْفِ بَدَلًا مِنَ الرَّبِيعِ.', modelEn: 'No problem — then I will book for the summer instead of the spring.' },
    ],
    girl: 'agent to a girl: تُرِيدِينَ · زُرْتِهَا · تُفَضِّلِينَ',
    notes: 'Past for what happened (zurtu), future for the plan (sa-usāfiru); the time marker decides.',
  },
  talk: {
    title: 'One minute: last holiday, next holiday', ar: 'إِجَازَتِي المَاضِيَةُ وَالقَادِمَةُ',
    text: 'Talk for one minute: your last holiday (where, stayed, visited, enjoyed, judgement) then your next holiday plan.',
    routes: {
      core: 'Four past verbs + two future verbs.',
      develop: 'Add a judgement (كَانَتْ مِنْ أَجْمَلِ …) and a reason for the next trip.',
      stretch: 'Add a problem in the past and a condition for the future (إِذَا … فَسَوْفَ …).',
    },
  },
  builder: [
    { en: 'We stayed in a hotel near the beach.', cols: [['أَقَمْنَا', 'أَقَامْنَا'], ['فِي فُنْدُقٍ', 'فِي فُنْدُقٌ'], ['قُرْبَ الشَّاطِئِ.', 'قُرْبُ الشَّاطِئِ.']], key: [0, 0, 0], why: 'أَقَامَ → أَقَمْنَا (short vowel before -nā).' },
    { en: 'It was one of the most beautiful trips.', cols: [['كَانَتْ', 'كَانَ'], ['مِنْ أَجْمَلِ', 'مِنْ أَجْمَلُ'], ['الرِّحْلَاتِ.', 'الرِّحْلَاتُ.']], key: [0, 0, 0], why: 'رِحْلَةٌ (f.) → كَانَتْ; مِنْ + genitive.' },
    { en: 'Next summer I will visit Egypt.', cols: [['الصَّيْفَ القَادِمَ', 'الصَّيْفَ المَاضِيَ'], ['سَأَزُورُ', 'زُرْتُ'], ['مِصْرَ.', 'مِصْرُ.']], key: [0, 0, 0], why: 'Future time → future verb.' },
  ],
  errors: [
    { wrong: 'الصَّيْفَ المَاضِيَ سَأُسَافِرُ إِلَى تُونِسَ.', hint: 'Time word vs tense.', right: 'الصَّيْفَ المَاضِيَ سَافَرْتُ إِلَى تُونِسَ.', why: 'Past time → past verb.' },
    { wrong: 'اسْتَمْتَعْتُ الرِّحْلَةَ كَثِيرًا.', hint: 'Missing preposition.', right: 'اسْتَمْتَعْتُ بِالرِّحْلَةِ كَثِيرًا.', why: 'اسْتَمْتَعَ بِ + genitive.' },
    { wrong: 'زَارْتُ المَتْحَفَ.', hint: 'Hollow verb.', right: 'زُرْتُ المَتْحَفَ.', why: 'زَارَ → زُرْتُ.' },
  ],
  task: {
    title: 'A holiday email in two tenses', ar: 'رِسَالَةٌ عَنْ إِجَازَتَيْنِ',
    text: 'Write an email (about 60–80 words) to a friend. Part 1 (past): where you went, where you stayed, what you visited, what you enjoyed, and a judgement. Part 2 (future): your next holiday — where, with whom and why. Use time markers to switch tenses cleanly.',
    phrases: [['سَافَرْتُ إِلَى … · أَقَمْنَا فِي …', 'I travelled to … · we stayed in …'], ['زُرْنَا … · اسْتَمْتَعْتُ بِ…', 'we visited … · I enjoyed …'], ['كَانَتْ مِنْ أَجْمَلِ الرِّحْلَاتِ', 'it was one of the best trips'], ['فِي الإِجَازَةِ القَادِمَةِ سَأَ…', 'next holiday I will …']],
    coreFrames: [
      { ar: 'فِي الصَّيْفِ المَاضِي سَافَرْتُ إِلَى ______ .', en: 'Last summer I travelled to …' },
      { ar: 'أَقَمْنَا فِي ______ ، وَزُرْنَا ______ .', en: 'We stayed in …, and visited …' },
      { ar: 'كَانَتْ ______ مِنْ أَجْمَلِ ______ .', en: '… was one of the best …' },
      { ar: 'فِي الإِجَازَةِ القَادِمَةِ سَأُسَافِرُ إِلَى ______ .', en: 'Next holiday I will travel to …' },
    ],
    developFrames: [
      { ar: 'اسْتَمْتَعْتُ بِ______ ، وَلٰكِنَّ ______ .', en: 'I enjoyed …, but …' },
      { ar: 'سَوْفَ نَحْجِزُ ______ لِكَيْ ______ .', en: 'We will book … so that …' },
    ],
    bank: ['سَافَرْتُ إِلَى', 'زُرْتُ · زُرْنَا', 'أَقَمْتُ · أَقَمْنَا فِي', 'حَجَزْنَا', 'اسْتَمْتَعْتُ بِ…', 'عُدْنَا', 'المَطَارُ · الفُنْدُقُ · الشَّاطِئُ', 'سَأَزُورُ · سَوْفَ نَحْجِزُ'],
    model: {
      text: `مَرْحَبًا يَا لَيْلَى،
فِي الصَّيْفِ المَاضِي سَافَرْتُ إِلَى مَالِيزْيَا مَعَ عَائِلَتِي. أَقَمْنَا فِي فُنْدُقٍ جَمِيلٍ قُرْبَ الشَّاطِئِ، وَزُرْنَا المَسْجِدَ الوَطَنِيَّ وَالغَابَاتِ الاسْتِوَائِيَّةَ. اسْتَمْتَعْتُ بِالطَّعَامِ كَثِيرًا، وَلٰكِنَّ الجَوَّ كَانَ رَطْبًا جِدًّا. كَانَتْ مِنْ أَجْمَلِ الرِّحْلَاتِ فِي حَيَاتِي! فِي الإِجَازَةِ القَادِمَةِ سَأُسَافِرُ إِلَى المَدِينَةِ المُنَوَّرَةِ مَعَ أَبِي، وَسَوْفَ نَحْجِزُ الفُنْدُقَ مُبَكِّرًا لِكَيْ يَكُونَ قَرِيبًا مِنَ المَسْجِدِ.
إِلَى اللِّقَاءِ، سَارَةُ`,
      en: '“Hi Layla, last summer I travelled to Malaysia with my family. We stayed in a lovely hotel near the beach, and visited the National Mosque and the rainforests. I enjoyed the food a lot, but the weather was very humid. It was one of the best trips of my life! Next holiday I will travel to Madinah with my father, and we will book the hotel early so it is close to the mosque. See you, Sara.”',
      find: ['سَافَرْتُ إِلَى مَالِيزْيَا', 'أَقَمْنَا فِي فُنْدُقٍ', 'كَانَتْ مِنْ أَجْمَلِ الرِّحْلَاتِ', 'سَأُسَافِرُ إِلَى'],
    },
  },
  checkCore: 'tell the trip in the past and the plan in the future?',
  checkDevelop: 'use hollow verbs correctly (زُرْتُ · أَقَمْنَا) and a judgement with مِنْ أَجْمَلِ …?',
});
