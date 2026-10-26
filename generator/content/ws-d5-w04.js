'use strict';
/* Apply Workshop · D5-W04 · D5-L07 (holidays and travel: past and future) + D5-L08 (reading leisure, sport and past-experience texts). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd5-w04', pair: ['d5-l07', 'd5-l08'],
  title: 'Holiday Reviews: Read One, Write One', arShort: 'آرَاءٌ عَنِ الإِجَازَاتِ',
  focus: 'Students join holidays in two tenses with reading: they read a short holiday review (who is writing? which tense? the nearest time marker decides), answer with proof from the text, then talk and write about their own last holiday and their next one — switching tenses cleanly with time markers.',
  sortTitle: 'Last holiday or next holiday?', sortCats: ['Past: the last holiday', 'Future: the next holiday'],
  sort: [
    { ar: 'سَافَرْنَا إِلَى …', cat: 0 }, { ar: 'أَقَمْنَا فِي فُنْدُقٍ', cat: 0 }, { ar: 'اسْتَمْتَعْتُ بِالبَحْرِ', cat: 0 }, { ar: 'الصَّيْفَ المَاضِيَ', cat: 0 },
    { ar: 'سَأَزُورُ …', cat: 1 }, { ar: 'سَوْفَ نَحْجِزُ', cat: 1 }, { ar: 'أَنْوِي أَنْ …', cat: 1 }, { ar: 'فِي الإِجَازَةِ القَادِمَةِ', cat: 1 },
  ],
  dialogue: {
    title: 'Reading a holiday review', ar: 'نَقْرَأُ رَأْيًا عَنْ رِحْلَةٍ',
    lines: [
      ['A', 'اسْمَعْ: «سَافَرْتُ إِلَى جِدَّةَ مَعَ أُسْرَتِي، وَأَقَمْنَا فِي فُنْدُقٍ عَلَى البَحْرِ».', 'Listen: “I travelled to Jeddah with my family, and we stayed in a hotel by the sea.”'],
      ['B', 'مَنْ يَكْتُبُ؟', 'Who is writing?'],
      ['A', 'شَخْصٌ يَتَكَلَّمُ عَنْ نَفْسِهِ؛ الدَّلِيلُ: «سَافَرْتُ» وَ«أَقَمْنَا».', 'A person talking about themselves; the proof: “I travelled” and “we stayed”.'],
      ['B', 'وَهَلْ أَعْجَبَتْهُ الرِّحْلَةُ؟', 'And did they like the trip?'],
      ['A', '«كَانَتْ مِنْ أَجْمَلِ الرِّحْلَاتِ، وَالصَّيْفَ القَادِمَ سَأَزُورُ المَدِينَةَ المُنَوَّرَةَ».', '“It was one of the best trips, and next summer I will visit Madinah.”'],
      ['B', 'إِذَنْ «الصَّيْفَ القَادِمَ» تَعْنِي المُسْتَقْبَلَ!', 'So “next summer” means the future!'],
    ],
    notes: 'Reading the endings for WHO (سَافَرْتُ · أَقَمْنَا) and the nearest time marker for WHEN comes from D5-L08; travel verbs in the past and future (أَقَمْنَا · سَأَزُورُ) from D5-L07.',
  },
  card: {
    title: 'Reading card — a travel blog', ar: 'مُدَوَّنَةُ سَفَرٍ', you: 'the reader', them: 'the person reading the blog aloud',
    mix: 'reading for WHO and WHEN with proof from the text (D5-L08) about travel in the past and the future (D5-L07)',
    tasks: [
      { ex: '«حَجَزَتْ أُمِّي غُرْفَتَيْنِ فِي الفُنْدُقِ.» — مَنْ حَجَزَ؟', task: 'Who did it? Prove it.', plan: 'مَنْ ← … ؛ الدَّلِيلُ: حَجَزَتْ', model: 'أُمُّهُ حَجَزَتْ؛ الدَّلِيلُ: «حَجَزَتْ» تَنْتَهِي بِتَاءٍ لِلْمُؤَنَّثِ.', modelEn: 'His mother booked; the proof: “ḥajazat” ends in -at for she.' },
      { ex: '«أَمْسِ سَبَحْنَا، وَغَدًا سَنَزُورُ السُّوقَ القَدِيمَ.» — مَتَى سَيَزُورُونَ السُّوقَ؟', task: 'The nearest time marker decides.', plan: 'مَتَى ← غَدًا …', model: 'غَدًا؛ لِأَنَّ «غَدًا» قَبْلَ «سَنَزُورُ».', modelEn: 'Tomorrow; because “ghadan” comes right before “we will visit”.' },
      { ex: '«فِي البِدَايَةِ كَانَ الجَوُّ حَارًّا، ثُمَّ سَقَطَ المَطَرُ.» — مَا التَّرْتِيبُ؟', task: 'Put the events in order.', plan: '______________', model: 'أَوَّلًا كَانَ الجَوُّ حَارًّا، ثُمَّ سَقَطَ المَطَرُ.', modelEn: 'First the weather was hot, then it rained.' },
      { ex: 'وَأَنْتَ: أَيْنَ سَافَرْتَ فِي آخِرِ إِجَازَةٍ؟ وَبِمَاذَا اسْتَمْتَعْتَ؟', task: 'Your last holiday + a judgement.', plan: '______________', model: 'سَافَرْتُ إِلَى وِيلْز، وَأَقَمْنَا فِي خَيْمَةٍ؛ اسْتَمْتَعْتُ بِالجِبَالِ، وَكَانَتْ مِنْ أَجْمَلِ الرِّحْلَاتِ.', modelEn: 'I travelled to Wales, and we stayed in a tent; I enjoyed the mountains, and it was one of the best trips.' },
      { unexpected: true, ex: 'وَأَيْنَ سَتَذْهَبُ فِي الإِجَازَةِ القَادِمَةِ؟ لِمَاذَا؟', task: 'Switch to the future with a time marker.', plan: '______________', model: 'فِي الإِجَازَةِ القَادِمَةِ سَأَزُورُ جَدَّتِي فِي مِصْرَ، لِأَنِّي لَمْ أَرَهَا مُنْذُ سَنَتَيْنِ.', modelEn: 'Next holiday I will visit my grandmother in Egypt, because I haven’t seen her for two years.' },
    ],
    foot: 'Partner A reads each blog line twice. Answer, then PROVE it (an ending or a time marker). Tasks 4 and ! are about you. Then swap.',
    girl: 'وَأَنْتِ: أَيْنَ سَافَرْتِ؟ · وَأَيْنَ سَتَذْهَبِينَ؟',
  },
  talk: {
    title: 'Last holiday, next holiday', ar: 'الإِجَازَةُ المَاضِيَةُ وَالقَادِمَةُ',
    text: 'Talk for one minute in two parts. Part 1 (past): where you went, where you stayed, two things you visited, what you enjoyed, one problem, and a judgement. Part 2 (future): your next holiday — where, with whom and why. Switch tenses with a clear time marker.',
    routes: {
      core: 'سَافَرْتُ إِلَى … · زُرْنَا … · سَأَزُورُ …',
      develop: 'Add أَقَمْنَا فِي … · اسْتَمْتَعْتُ بِ… and كَانَتْ مِنْ أَجْمَلِ الرِّحْلَاتِ.',
      stretch: 'Add a problem in the past, سَوْفَ نَحْجِزُ / أَنْوِي أَنْ … and a reason.',
    },
  },
  task: {
    title: 'My holiday review — and my next trip', ar: 'رَأْيِي فِي إِجَازَتِي',
    text: 'Write a review (about 60–80 words) for a travel blog. Part 1 (past): where you went and with whom, where you stayed, two places you visited, what you enjoyed, one problem and a judgement. Part 2 (future): your next holiday — where, with whom and why. Use time markers to switch tenses cleanly.',
    range: [50, 100],
    phrases: [['الصَّيْفَ المَاضِيَ سَافَرْتُ إِلَى …', 'last summer I travelled to …'], ['أَقَمْنَا فِي … · زُرْنَا … · اسْتَمْتَعْتُ بِ…', 'we stayed in … · we visited … · I enjoyed …'], ['كَانَتْ مِنْ أَجْمَلِ الرِّحْلَاتِ', 'it was one of the best trips'], ['فِي الإِجَازَةِ القَادِمَةِ سَأَزُورُ …', 'next holiday I will visit …']],
    coreFrames: [
      { ar: 'الصَّيْفَ المَاضِيَ سَافَرْتُ إِلَى ______ مَعَ ______ .', en: 'Last summer I travelled to … with …' },
      { ar: 'أَقَمْنَا فِي ______ ، وَزُرْنَا ______ .', en: 'We stayed in …, and we visited …' },
      { ar: 'اسْتَمْتَعْتُ بِ ______ .', en: 'I enjoyed …' },
      { ar: 'كَانَتْ مِنْ أَجْمَلِ الرِّحْلَاتِ لِأَنَّ ______ .', en: 'It was one of the best trips because …' },
      { ar: 'فِي الإِجَازَةِ القَادِمَةِ سَأَزُورُ ______ .', en: 'Next holiday I will visit …' },
    ],
    developFrames: [
      { ar: 'لِلْأَسَفِ ______ .', en: 'Unfortunately …' },
      { ar: 'أَنْوِي أَنْ ______ لِأَنَّ ______ .', en: 'I intend to … because …' },
    ],
    bank: ['سَافَرْتُ · سَافَرْنَا', 'أَقَمْنَا · حَجَزْنَا', 'زُرْتُ · زُرْنَا', 'اسْتَمْتَعْتُ بِ…', 'لِلْأَسَفِ', 'الصَّيْفَ المَاضِيَ', 'سَأَزُورُ · سَوْفَ نَحْجِزُ', 'فِي الإِجَازَةِ القَادِمَةِ'],
    model: {
      text: 'الصَّيْفَ المَاضِيَ سَافَرْتُ إِلَى إِسْطَنْبُولَ مَعَ عَائِلَتِي، وَأَقَمْنَا فِي فُنْدُقٍ صَغِيرٍ قُرْبَ البَحْرِ. زُرْنَا المَسَاجِدَ القَدِيمَةَ وَالسُّوقَ الكَبِيرَ، وَاسْتَمْتَعْتُ بِرِحْلَةٍ فِي القَارِبِ. لِلْأَسَفِ ضَاعَتْ حَقِيبَةُ أَخِي فِي المَطَارِ، وَلٰكِنَّهَا وَصَلَتْ بَعْدَ يَوْمَيْنِ. كَانَتْ مِنْ أَجْمَلِ الرِّحْلَاتِ لِأَنَّ النَّاسَ كَانُوا لُطَفَاءَ. فِي الإِجَازَةِ القَادِمَةِ سَأَزُورُ عَمِّي فِي عَمَّانَ، وَأَنْوِي أَنْ أَرَى البَتْرَاءَ لِأَنَّهَا مَدِينَةٌ تَارِيخِيَّةٌ رَائِعَةٌ.',
      en: '“Last summer I travelled to Istanbul with my family, and we stayed in a small hotel near the sea. We visited the old mosques and the big market, and I enjoyed a boat trip. Unfortunately my brother’s bag got lost at the airport, but it arrived two days later. It was one of the best trips because the people were kind. Next holiday I will visit my uncle in Amman, and I intend to see Petra because it is an amazing historic city.”',
      find: ['الصَّيْفَ المَاضِيَ سَافَرْتُ', 'وَأَقَمْنَا فِي فُنْدُقٍ', 'مِنْ أَجْمَلِ الرِّحْلَاتِ', 'فِي الإِجَازَةِ القَادِمَةِ'],
    },
  },
});
