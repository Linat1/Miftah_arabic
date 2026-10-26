'use strict';
/* Apply Workshop · D4-W03 · D4-L05 (the digital world: technology and social media) + D4-L06 (green technology). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd4-w03', pair: ['d4-l05', 'd4-l06'],
  title: 'The Smart-School Tech Expo', arShort: 'مَعْرِضُ المَدْرَسَةِ الذَّكِيَّةِ',
  focus: 'Students join the digital world with green technology: at a tech expo they present a school eco-app (how we interact with it, benefits and risks) and the school’s new solar panels (how they work, what they are used for, what they help with), give a balanced, qualified judgement, and write an expo article.',
  dialogue: {
    title: 'At the expo stand', ar: 'فِي جَنَاحِ المَعْرِضِ',
    lines: [
      ['A', 'مَا هٰذَا التَّطْبِيقُ؟', 'What is this app?'],
      ['B', 'تَطْبِيقُ «مَدْرَسَتِي الخَضْرَاءُ»؛ نَتَوَاصَلُ مَعَ الطُّلَّابِ، وَنُعَلِّقُ عَلَى الأَفْكَارِ البِيئِيَّةِ.', 'The “My Green School” app; we communicate with students and comment on green ideas.'],
      ['A', 'وَمَا هٰذِهِ الأَلْوَاحُ عَلَى السَّطْحِ؟', 'And what are these panels on the roof?'],
      ['B', 'أَلْوَاحٌ شَمْسِيَّةٌ؛ تُحَوِّلُ ضَوْءَ الشَّمْسِ إِلَى كَهْرَبَاءَ، وَتُسْتَخْدَمُ لِتَشْغِيلِ الحَوَاسِيبِ.', 'Solar panels; they turn sunlight into electricity, and they are used to run the computers.'],
      ['A', 'هَلْ هُنَاكَ مَخَاطِرُ؟', 'Are there risks?'],
      ['B', 'مِنْ نَاحِيَةٍ تُسَاعِدُ عَلَى تَوْفِيرِ الطَّاقَةِ، وَمِنْ نَاحِيَةٍ أُخْرَى ثَمَنُهَا مُرْتَفِعٌ؛ هِيَ مُفِيدَةٌ إِلَى حَدٍّ كَبِيرٍ.', 'On the one hand they help to save energy; on the other hand they are expensive; they are useful to a large extent.'],
    ],
    notes: 'Digital verbs with prepositions (نَتَوَاصَلُ مَعَ · نُعَلِّقُ عَلَى) and the balanced view come from D4-L05; how green technology works (تُحَوِّلُ … إِلَى … · تُسْتَخْدَمُ لِ… · تُسَاعِدُ عَلَى …) from D4-L06.',
  },
  card: {
    title: 'Role-play card — the expo judge', ar: 'حَكَمُ المَعْرِضِ', you: 'the student presenter', them: 'the expo judge',
    mix: 'digital verbs, benefits, risks and a qualified judgement (D4-L05) with how green technology works and what it is used for (D4-L06)',
    tasks: [
      { ex: 'كَيْفَ يَسْتَخْدِمُ الطُّلَّابُ تَطْبِيقَكُمْ؟', task: 'Two digital verbs with prepositions.', plan: 'كَيْفَ ← يَتَوَاصَلُونَ مَعَ … · يُعَلِّقُونَ عَلَى …', model: 'يَتَوَاصَلُونَ مَعَ نَادِي البِيئَةِ، وَيُعَلِّقُونَ عَلَى الأَفْكَارِ، وَيَبْحَثُونَ عَنْ نَصَائِحَ.', modelEn: 'They communicate with the eco-club, comment on ideas and search for tips.' },
      { ex: 'كَيْفَ تَعْمَلُ الأَلْوَاحُ الشَّمْسِيَّةُ؟', task: 'Explain how it works.', plan: 'كَيْفَ ← تُحَوِّلُ … إِلَى …', model: 'تُحَوِّلُ ضَوْءَ الشَّمْسِ إِلَى كَهْرَبَاءَ نَظِيفَةٍ.', modelEn: 'They turn sunlight into clean electricity.' },
      { ex: 'لِمَاذَا تُسْتَخْدَمُ فِي المَدْرَسَةِ؟', task: 'What it is used for + what it helps with.', plan: '______________', model: 'تُسْتَخْدَمُ لِتَشْغِيلِ الحَوَاسِيبِ وَالأَضْوَاءِ، وَتُسَاعِدُ عَلَى تَقْلِيلِ الفَوَاتِيرِ.', modelEn: 'They are used to run the computers and lights, and help to reduce the bills.' },
      { ex: 'مَا مَخَاطِرُ التَّطْبِيقِ؟', task: 'One benefit and one risk with أَنَّ.', plan: '______________', model: 'مِنْ فَوَائِدِهِ أَنَّهُ يَنْشُرُ الأَفْكَارَ بِسُرْعَةٍ، وَمِنْ مَخَاطِرِهِ أَنَّ الطُّلَّابَ قَدْ يَقْضُونَ وَقْتًا طَوِيلًا عَلَى الشَّاشَةِ.', modelEn: 'One benefit is that it spreads ideas quickly; one risk is that students may spend a long time on screens.' },
      { unexpected: true, ex: 'فِي رَأْيِكَ، هَلِ التِّكْنُولُوجِيَا تُنْقِذُ البِيئَةَ؟', task: 'A qualified judgement.', plan: '______________', model: 'إِلَى حَدٍّ مَا؛ هِيَ مُفِيدَةٌ بِشَرْطِ أَنْ نَسْتَخْدِمَهَا بِذَكَاءٍ وَأَنْ نُغَيِّرَ عَادَاتِنَا أَيْضًا.', modelEn: 'To some extent; it is useful provided that we use it wisely and change our habits too.' },
    ],
    girl: 'when the presenter is a girl, the judge says: فِي رَأْيِكِ …',
  },
  talk: {
    title: 'Our expo pitch', ar: 'عَرْضُنَا فِي المَعْرِضِ',
    text: 'Pitch your two inventions for one minute: the eco-app (how students interact with it, one benefit, one risk) and one green technology for the school (how it works, what it is used for, what it helps with). Finish with a balanced, qualified judgement.',
    routes: {
      core: 'نَتَوَاصَلُ مَعَ … · تُحَوِّلُ … إِلَى …',
      develop: 'Add مِنْ فَوَائِدِهَا أَنَّ … · مِنْ مَخَاطِرِهَا أَنَّ … and تُسْتَخْدَمُ لِ…',
      stretch: 'Add مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى … and إِلَى حَدٍّ مَا · بِشَرْطِ أَنْ …',
    },
  },
  task: {
    title: 'Expo article: technology for a greener school', ar: 'مَقَالُ المَعْرِضِ',
    text: 'Write an article (about 60–80 words) for the school website about the two expo inventions. Include: • how students use the app (three digital verbs with prepositions) • how the green technology works and what it is used for • what it helps with • one benefit and one risk • a balanced view (on the one hand … on the other …) • a qualified judgement.',
    range: [50, 100],
    phrases: [['نَتَوَاصَلُ مَعَ … · نُعَلِّقُ عَلَى … · نَبْحَثُ عَنْ …', 'we communicate with … · comment on … · search for …'], ['تُحَوِّلُ … إِلَى … · تُسْتَخْدَمُ لِ…', 'it turns … into … · it is used for …'], ['تُسَاعِدُ عَلَى …', 'it helps with …'], ['مُفِيدَةٌ إِلَى حَدٍّ مَا · بِشَرْطِ أَنْ …', 'useful to some extent · provided that …']],
    coreFrames: [
      { ar: 'فِي تَطْبِيقِنَا نَتَوَاصَلُ مَعَ ______ .', en: 'In our app we communicate with …' },
      { ar: 'وَنُعَلِّقُ عَلَى ______ .', en: 'And we comment on …' },
      { ar: 'الأَلْوَاحُ الشَّمْسِيَّةُ تُحَوِّلُ ______ إِلَى ______ .', en: 'Solar panels turn … into …' },
      { ar: 'تُسْتَخْدَمُ لِ ______ .', en: 'They are used for …' },
      { ar: 'تُسَاعِدُ عَلَى ______ .', en: 'They help with …' },
    ],
    developFrames: [
      { ar: 'مِنْ نَاحِيَةٍ ______ ، وَمِنْ نَاحِيَةٍ أُخْرَى ______ .', en: 'On the one hand …, on the other hand …' },
      { ar: 'هِيَ مُفِيدَةٌ إِلَى حَدٍّ مَا، بِشَرْطِ أَنْ ______ .', en: 'It is useful to some extent, provided that …' },
    ],
    bank: ['يَتَوَاصَلُ مَعَ', 'يُعَلِّقُ عَلَى · يَبْحَثُ عَنْ', 'تُحَوِّلُ … إِلَى', 'تُوَلِّدُ الكَهْرَبَاءَ', 'تُسْتَخْدَمُ لِ…', 'تُسَاعِدُ عَلَى', 'مِنْ فَوَائِدِهَا · مِنْ مَخَاطِرِهَا', 'إِلَى حَدٍّ مَا · بِشَرْطِ أَنْ'],
    model: {
      text: 'فِي مَعْرِضِنَا قَدَّمْنَا تَطْبِيقَ «مَدْرَسَتِي الخَضْرَاءُ». فِيهِ نَتَوَاصَلُ مَعَ نَادِي البِيئَةِ، وَنُعَلِّقُ عَلَى الأَفْكَارِ، وَنَبْحَثُ عَنْ نَصَائِحَ لِتَوْفِيرِ الطَّاقَةِ. وَقَدَّمْنَا أَيْضًا الأَلْوَاحَ الشَّمْسِيَّةَ؛ تُحَوِّلُ ضَوْءَ الشَّمْسِ إِلَى كَهْرَبَاءَ، وَتُسْتَخْدَمُ لِتَشْغِيلِ الحَوَاسِيبِ، وَتُسَاعِدُ عَلَى تَقْلِيلِ التَّلَوُّثِ. مِنْ نَاحِيَةٍ، التِّكْنُولُوجِيَا تَنْشُرُ الوَعْيَ بِسُرْعَةٍ، وَمِنْ نَاحِيَةٍ أُخْرَى، مِنْ مَخَاطِرِهَا أَنَّنَا نَقْضِي وَقْتًا طَوِيلًا عَلَى الشَّاشَةِ. فِي رَأْيِي هِيَ مُفِيدَةٌ إِلَى حَدٍّ كَبِيرٍ، بِشَرْطِ أَنْ نُغَيِّرَ عَادَاتِنَا أَيْضًا.',
      en: '“At our expo we presented the “My Green School” app. In it we communicate with the eco-club, comment on ideas and search for tips to save energy. We also presented the solar panels; they turn sunlight into electricity, are used to run the computers, and help to reduce pollution. On the one hand, technology spreads awareness quickly; on the other, one of its risks is that we spend a long time on screens. In my opinion it is useful to a large extent, provided that we change our habits too.”',
      find: ['نَتَوَاصَلُ مَعَ', 'تُحَوِّلُ ضَوْءَ الشَّمْسِ', 'تُسَاعِدُ عَلَى تَقْلِيلِ', 'بِشَرْطِ أَنْ'],
    },
  },
});
