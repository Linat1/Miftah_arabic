'use strict';
/* Apply Workshop · D5-W06 · D5-L11 (D5 consolidation: past-tense mastery) + D5-L12 (review and unit assessment). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd5-w06', pair: ['d5-l11', 'd5-l12'],
  title: 'The Best Day of My Life', arShort: 'أَفْضَلُ يَوْمٍ فِي حَيَاتِي',
  focus: 'Students use all of D5 for one real purpose: they tell and write about the best day of their life — the scene with كَانَ, regular and irregular past verbs for I · we · they, a reason and an example, a reflection — and then answer the exam-style email about hobbies now, a childhood hobby, a memorable event and future plans.',
  sortTitle: 'Regular or irregular past?', sortCats: ['Regular past stems', 'Irregular past stems'],
  sort: [
    { ar: 'لَعِبْتُ', cat: 0 }, { ar: 'شَرِبْنَا', cat: 0 }, { ar: 'رَكَضُوا', cat: 0 }, { ar: 'ذَهَبَتْ', cat: 0 },
    { ar: 'زُرْتُ', cat: 1 }, { ar: 'مَشَيْنَا', cat: 1 }, { ar: 'نِمْنَا', cat: 1 }, { ar: 'قَالُوا', cat: 1 },
  ],
  dialogue: {
    title: 'The best day — one polished answer', ar: 'جَوَابٌ مُتْقَنٌ',
    lines: [
      ['A', 'صِفْ أَفْضَلَ يَوْمٍ فِي حَيَاتِكَ.', 'Describe the best day of your life.'],
      ['B', 'كَانَ ذٰلِكَ اليَوْمُ يَوْمَ العِيدِ فِي بَيْتِ جَدِّي؛ كَانَ الجَوُّ مُشْمِسًا وَجَمِيلًا.', 'That day was Eid day at my grandfather’s house; the weather was sunny and lovely.'],
      ['A', 'مَاذَا فَعَلْتُمْ؟', 'What did you (all) do?'],
      ['B', 'زُرْنَا الأَقَارِبَ، وَمَشَيْنَا إِلَى الحَدِيقَةِ، وَلَعِبَ الأَطْفَالُ كُرَةَ القَدَمِ.', 'We visited relatives, we walked to the park, and the children played football.'],
      ['A', 'لِمَاذَا كَانَ أَفْضَلَ يَوْمٍ؟', 'Why was it the best day?'],
      ['B', 'لِأَنَّ العَائِلَةَ كُلَّهَا كَانَتْ مَعًا؛ عَلَى سَبِيلِ المِثَالِ، قَالَ جَدِّي قِصَصًا مُضْحِكَةً. مَا زِلْتُ أَتَذَكَّرُ ضَحِكَهُ.', 'Because the whole family was together; for example, my grandfather told funny stories. I still remember his laugh.'],
    ],
    notes: 'Fixing the stem before the ending (زُرْنَا · مَشَيْنَا · قَالَ) and extending each answer with a reason and an example come from D5-L11; the scene with كَانَ + -an and the reflection revise D5-L05, as in the D5-L12 review.',
  },
  card: {
    title: 'Speaking card — the exam conversation', ar: 'مُحَادَثَةُ الامْتِحَانِ', you: 'the candidate', them: 'the examiner',
    mix: 'past questions answered in the past with correct stems, reasons and examples (D5-L11), across every D5 topic (D5-L12)',
    tasks: [
      { ex: 'مَاذَا تَفْعَلُ فِي وَقْتِ فَرَاغِكَ؟ وَكَمْ مَرَّةً؟', task: 'Two hobbies with the right verbs and frequency.', plan: 'مَاذَا ← أَعْزِفُ عَلَى … · أُمَارِسُ … مَرَّتَيْنِ …', model: 'أَعْزِفُ عَلَى الجِيتَارِ كُلَّ يَوْمٍ، وَأُمَارِسُ الكَارَاتِيهْ مَرَّتَيْنِ فِي الأُسْبُوعِ.', modelEn: 'I play the guitar every day, and I do karate twice a week.' },
      { ex: 'مَا الهِوَايَةُ الَّتِي كُنْتَ تُمَارِسُهَا فِي الطُّفُولَةِ؟', task: 'Used to + a reason you stopped.', plan: 'مَا ← كُنْتُ … ، وَلٰكِنْ …', model: 'كُنْتُ أَجْمَعُ الطَّوَابِعَ، وَلٰكِنِّي تَوَقَّفْتُ لِأَنِّي أَصْبَحْتُ مَشْغُولًا.', modelEn: 'I used to collect stamps, but I stopped because I became busy.' },
      { ex: 'مَاذَا فَعَلْتُمْ فِي آخِرِ رِحْلَةٍ مَدْرَسِيَّةٍ؟', task: 'We + they actions, two irregular.', plan: '______________', model: 'زُرْنَا مَتْحَفَ العُلُومِ، وَمَشَيْنَا فِي الحَدِيقَةِ، وَقَالَ المُعَلِّمُونَ إِنَّنَا كُنَّا رَائِعِينَ.', modelEn: 'We visited the science museum, walked in the park, and the teachers said we were great.' },
      { ex: 'كَيْفَ بَدَأْتَ رِيَاضَتَكَ المُفَضَّلَةَ؟', task: 'Answer a past question in the past + an example.', plan: '______________', model: 'بَدَأْتُ عِنْدَمَا كَانَ عُمْرِي ثَمَانِيَ سَنَوَاتٍ؛ عَلَى سَبِيلِ المِثَالِ، اشْتَرَكْتُ فِي نَادِي الحَيِّ.', modelEn: 'I started when I was eight; for example, I joined the local club.' },
      { unexpected: true, ex: 'أَيْنَ سَتَذْهَبُ فِي الإِجَازَةِ القَادِمَةِ؟', task: 'Switch to the future; buy time if needed.', plan: '______________', model: 'دَعْنِي أُفَكِّرُ… فِي الحَقِيقَةِ، سَأُسَافِرُ إِلَى المَغْرِبِ لِأَنَّ خَالِي يَسْكُنُ هُنَاكَ.', modelEn: 'Let me think… actually, I will travel to Morocco because my uncle lives there.' },
    ],
    girl: 'مَاذَا تَفْعَلِينَ؟ · كَيْفَ بَدَأْتِ؟ · أَيْنَ سَتَذْهَبِينَ؟',
  },
  talk: {
    title: 'The best day of my life', ar: 'أَفْضَلُ يَوْمٍ فِي حَيَاتِي',
    text: 'Answer the exam question for one minute: «صِفْ أَفْضَلَ يَوْمٍ فِي حَيَاتِكَ». Include the scene (كَانَ + -an), five past verbs (two irregular), a “we” action and a “they” action, a reason and an example, and a reflection. Your partner listens for every stem.',
    routes: {
      core: 'كَانَ ذٰلِكَ اليَوْمُ … · ذَهَبْتُ … · لَعِبْنَا …',
      develop: 'Add two irregular stems (زُرْنَا · مَشَيْنَا · قَالُوا) and لِأَنَّ … عَلَى سَبِيلِ المِثَالِ …',
      stretch: 'Add كُنَّا + present, فَجْأَةً and مَا زِلْتُ أَتَذَكَّرُ …',
    },
  },
  task: {
    title: 'Exam-style email: my free time', ar: 'وَقْتُ فَرَاغِي',
    text: 'Write an email (about 60–80 words) to an Arabic-speaking friend. Answer ALL four bullets: • your hobbies now and how often • a hobby you used to do as a child • a memorable trip or event (what you and others did) • your plans for next holiday. Check every past stem before you finish.',
    range: [50, 100],
    phrases: [['أَلْعَبُ … · أَعْزِفُ عَلَى … · مَرَّتَيْنِ فِي الأُسْبُوعِ', 'I play … · I play (an instrument) · twice a week'], ['فِي الطُّفُولَةِ كُنْتُ …', 'as a child I used to …'], ['سَافَرْنَا … · زُرْنَا … · كَانَ الطَّقْسُ …', 'we travelled … · we visited … · the weather was …'], ['فِي الإِجَازَةِ القَادِمَةِ سَأُسَافِرُ …', 'next holiday I will travel …']],
    coreFrames: [
      { ar: 'فِي وَقْتِ فَرَاغِي ______ ______ فِي الأُسْبُوعِ.', en: '• In my free time I … (how often) a week.' },
      { ar: 'فِي الطُّفُولَةِ كُنْتُ ______ .', en: '• As a child I used to …' },
      { ar: 'الصَّيْفَ المَاضِيَ زُرْنَا ______ ، وَ ______ .', en: '• Last summer we visited …, and …' },
      { ar: 'كَانَ الجَوُّ ______ ، وَكَانَتِ الرِّحْلَةُ ______ .', en: '• The weather was …, and the trip was …' },
      { ar: 'فِي الإِجَازَةِ القَادِمَةِ سَأُسَافِرُ إِلَى ______ .', en: '• Next holiday I will travel to …' },
    ],
    developFrames: [
      { ar: 'قَالَ / قَالُوا ______ .', en: 'He / they said …' },
      { ar: 'مَا زِلْتُ أَتَذَكَّرُ ______ لِأَنَّ ______ .', en: 'I still remember … because …' },
    ],
    bank: ['أَعْزِفُ عَلَى · أَسْتَمِعُ إِلَى', 'كُنْتُ أَجْمَعُ · كُنْتُ أَلْعَبُ', 'سَافَرْنَا · زُرْنَا', 'مَشَيْنَا · نِمْنَا · قَالُوا', 'كَانَ + مُشْمِسًا', 'عَلَى سَبِيلِ المِثَالِ', 'مَا زِلْتُ أَتَذَكَّرُ', 'سَأُسَافِرُ · أَنْوِي أَنْ'],
    model: {
      text: 'أَهْلًا يَا كَرِيمُ! فِي وَقْتِ فَرَاغِي أَعْزِفُ عَلَى الجِيتَارِ كُلَّ يَوْمٍ، وَأُمَارِسُ الكَارَاتِيهْ مَرَّتَيْنِ فِي الأُسْبُوعِ. فِي الطُّفُولَةِ كُنْتُ أَجْمَعُ الطَّوَابِعَ مَعَ جَدِّي. الصَّيْفَ المَاضِيَ زُرْنَا اسْكُتْلَنْدَا؛ مَشَيْنَا فِي الجِبَالِ، وَنِمْنَا فِي خَيْمَةٍ، وَقَالَ أَبِي إِنَّهَا أَجْمَلُ رِحْلَةٍ. كَانَ الجَوُّ بَارِدًا، وَلٰكِنَّ الطَّبِيعَةَ كَانَتْ رَائِعَةً. مَا زِلْتُ أَتَذَكَّرُ البُحَيْرَةَ الزَّرْقَاءَ. فِي الإِجَازَةِ القَادِمَةِ سَأُسَافِرُ إِلَى المَغْرِبِ، لِأَنَّ خَالِي يَسْكُنُ هُنَاكَ.',
      en: '“Hello, Karim! In my free time I play the guitar every day, and I do karate twice a week. As a child I used to collect stamps with my grandfather. Last summer we visited Scotland; we walked in the mountains, slept in a tent, and my father said it was the best trip. The weather was cold, but the nature was amazing. I still remember the blue lake. Next holiday I will travel to Morocco, because my uncle lives there.”',
      find: ['كُنْتُ أَجْمَعُ', 'مَشَيْنَا فِي الجِبَالِ', 'وَنِمْنَا فِي خَيْمَةٍ', 'سَأُسَافِرُ إِلَى'],
    },
  },
});
