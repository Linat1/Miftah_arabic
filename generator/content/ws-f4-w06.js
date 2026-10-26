'use strict';
/* Apply Workshop · F4-W06 · F4-L11 (speaking and writing about school) + F4-L12 (review and assessment: school life). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f4-w06', pair: ['f4-l11', 'f4-l12'],
  title: 'A Video for Our Partner School', arShort: 'فِيدْيُو لِمَدْرَسَتِنَا الشَّقِيقَةِ',
  focus: 'Students use all of F4 for one real purpose: a partner school in Jordan wants to know about school life in Britain, so students plan, rehearse and present a short video script — subjects and reasons, the timetable, the bag, rules and a typical day — then write it up as a paragraph.',
  sortTitle: 'Subjects and opinions, or times and rules?', sortCats: ['Subjects and opinions', 'Times, days and rules'],
  sort: [
    { ar: 'أُفَضِّلُ العُلُومَ', cat: 0 }, { ar: 'الفَنُّ مُمْتِعٌ', cat: 0 }, { ar: 'لِأَنَّهَا مُفِيدَةٌ', cat: 0 }, { ar: 'التَّارِيخُ مُمِلٌّ قَلِيلًا', cat: 0 },
    { ar: 'فِي السَّاعَةِ الثَّامِنَةِ', cat: 1 }, { ar: 'يَوْمَ الإِثْنَيْنِ', cat: 1 }, { ar: 'يَجِبُ أَنْ نَصِلَ مُبَكِّرًا', cat: 1 }, { ar: 'لَا يَجُوزُ أَنْ نَأْكُلَ فِي الصَّفِّ', cat: 1 },
  ],
  dialogue: {
    title: 'Planning the video', ar: 'نُخَطِّطُ لِلْفِيدْيُو',
    lines: [
      ['A', 'مَاذَا نَقُولُ أَوَّلًا؟', 'What do we say first?'],
      ['B', 'أَوَّلًا نَقُولُ: تَبْدَأُ المَدْرَسَةُ فِي الثَّامِنَةِ وَالنِّصْفِ، وَتَنْتَهِي فِي الثَّالِثَةِ.', 'First we say: school starts at half past eight and ends at three.'],
      ['A', 'ثُمَّ المَوَادُّ. أَنَا أُحِبُّ التَّارِيخَ لِأَنَّهُ مُمْتِعٌ.', 'Then the subjects. I like history because it is enjoyable.'],
      ['B', 'وَأَنَا أُفَضِّلُ العُلُومَ عَلَى التَّارِيخِ لِأَنَّهَا عَمَلِيَّةٌ.', 'And I prefer science to history because it is practical.'],
      ['A', 'وَبَعْدَ ذٰلِكَ القَوَاعِدُ: يَجِبُ أَنْ نَلْبَسَ اللِّبَاسَ المَدْرَسِيَّ.', 'And after that, the rules: we must wear the school uniform.'],
      ['B', 'وَفِي النِّهَايَةِ: مِنَ الضَّرُورِيِّ أَنْ نَحْتَرِمَ الجَمِيعَ!', 'And finally: it is important that we respect everyone!'],
    ],
    notes: 'The sequence and connectors (أَوَّلًا · ثُمَّ · بَعْدَ ذٰلِكَ · فِي النِّهَايَةِ · مِنَ الضَّرُورِيِّ أَنْ) come from F4-L11; the content revises the whole unit as in F4-L12.',
  },
  card: {
    title: 'Role-play card — the partner school asks', ar: 'تَسْأَلُ المَدْرَسَةُ الشَّقِيقَةُ', you: 'a student in Britain', them: 'a student in Jordan',
    mix: 'the whole F4 system (F4-L12 review) in a connected spoken answer with sequence and connectors (F4-L11)',
    tasks: [
      { ex: 'مَتَى تَبْدَأُ مَدْرَسَتُكُمْ وَمَتَى تَنْتَهِي؟', task: 'Give two times.', plan: 'مَتَى ← تَبْدَأُ فِي … وَتَنْتَهِي فِي …', model: 'تَبْدَأُ فِي السَّاعَةِ الثَّامِنَةِ وَالرُّبْعِ، وَتَنْتَهِي فِي السَّاعَةِ الثَّالِثَةِ.', modelEn: 'It starts at a quarter past eight and ends at three o’clock.' },
      { ex: 'أَيُّهُمَا تُفَضِّلُ: الرِّيَاضِيَّاتِ أَمِ الفَنَّ؟', task: 'Prefer one and give a reason that agrees.', plan: 'أَيُّهُمَا ← أُفَضِّلُ … عَلَى … لِأَنَّهُ / لِأَنَّهَا …', model: 'أُفَضِّلُ الفَنَّ عَلَى الرِّيَاضِيَّاتِ لِأَنَّهُ إِبْدَاعِيٌّ وَمُمْتِعٌ.', modelEn: 'I prefer art to maths because it is creative and enjoyable.' },
      { ex: 'مَاذَا فِي حَقِيبَتِكَ اليَوْمَ؟', task: 'Name four things, and one you don’t have.', plan: 'مَاذَا ← فِي حَقِيبَتِي … ، لٰكِنْ لَيْسَ عِنْدِي …', model: 'فِي حَقِيبَتِي دَفْتَرَانِ وَكِتَابٌ وَمِقْلَمَةٌ وَمَاءٌ، لٰكِنْ لَيْسَ عِنْدِي قَامُوسٌ.', modelEn: 'In my bag there are two notebooks, a book, a pencil case and water, but I don’t have a dictionary.' },
      { ex: 'مَا القَوَاعِدُ فِي مَدْرَسَتِكُمْ؟', task: 'One “must” and one “must not”.', plan: 'مَا ← يَجِبُ أَنْ … · لَا يَجُوزُ أَنْ …', model: 'يَجِبُ أَنْ نَصِلَ فِي الوَقْتِ، وَلَا يَجُوزُ أَنْ نَسْتَعْمِلَ الهَاتِفَ.', modelEn: 'We must arrive on time, and we must not use the phone.' },
      { unexpected: true, ex: 'صِفْ يَوْمَكَ المَدْرَسِيَّ بِثَلَاثِ جُمَلٍ.', task: 'Three steps with connectors.', plan: 'صِفْ ← أَوَّلًا … ثُمَّ … وَفِي النِّهَايَةِ …', model: 'أَوَّلًا أَصِلُ إِلَى المَدْرَسَةِ، ثُمَّ أَدْرُسُ أَرْبَعَ حِصَصٍ، وَفِي النِّهَايَةِ أَلْعَبُ فِي المَلْعَبِ.', modelEn: 'First I arrive at school, then I study four lessons, and finally I play in the playground.' },
    ],
    girl: 'أَيُّهُمَا تُفَضِّلِينَ؟ · مَاذَا فِي حَقِيبَتِكِ؟ · صِفِي يَوْمَكِ',
  },
  talk: {
    title: 'Our video: school life in Britain', ar: 'الحَيَاةُ المَدْرَسِيَّةُ فِي بِرِيطَانِيَا',
    text: 'Present your part of the video for 30–45 seconds without stopping: when school starts and ends, two subjects with reasons, what is in your bag, one rule, and your opinion of your school. Your partner times you and checks the connectors.',
    routes: {
      core: 'تَبْدَأُ المَدْرَسَةُ فِي … · أُحِبُّ … لِأَنَّهُ / لِأَنَّهَا …',
      develop: 'Add a rule (يَجِبُ أَنْ …) and three connectors.',
      stretch: 'Add أُفَضِّلُ … عَلَى … and مِنَ الضَّرُورِيِّ أَنْ … — speak without notes.',
    },
    phrases: [['أَوَّلًا … ثُمَّ … فِي النِّهَايَةِ …', 'first … then … finally …'], ['أُفَضِّلُ … عَلَى … لِأَنَّ …', 'I prefer … to … because …'], ['يَجِبُ أَنْ … · لَا يَجُوزُ أَنْ …', 'we must … · we must not …'], ['مِنَ الضَّرُورِيِّ أَنْ …', 'it is important that …']],
  },
  task: {
    title: 'Our video script, written up', ar: 'نَصُّ الفِيدْيُو',
    text: 'Write your video script as one connected paragraph (about 50–70 words) for the partner school. Include: • when school starts and ends • two subjects: one you love, one you don’t, with reasons that agree • what is in your bag • one “must” and one “must not” rule • your opinion of your school. Use at least four connectors.',
    range: [45, 90],
    phrases: [['تَبْدَأُ المَدْرَسَةُ فِي … وَتَنْتَهِي فِي …', 'school starts at … and ends at …'], ['أُحِبُّ … لِأَنَّهُ / لِأَنَّهَا … ، لٰكِنِّي لَا أُحِبُّ …', 'I like … because it …, but I don’t like …'], ['يَجِبُ أَنْ … · لَا يَجُوزُ أَنْ …', 'we must … · we must not …'], ['فِي رَأْيِي مَدْرَسَتِي …', 'in my opinion my school is …']],
    coreFrames: [
      { ar: 'أَهْلًا مِنْ بِرِيطَانِيَا! اسْمِي ______ .', en: 'Hello from Britain! My name is …' },
      { ar: 'تَبْدَأُ المَدْرَسَةُ فِي ______ ، وَتَنْتَهِي فِي ______ .', en: 'School starts at … and ends at …' },
      { ar: 'أُحِبُّ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I like … because it is …' },
      { ar: 'فِي حَقِيبَتِي ______ وَ ______ .', en: 'In my bag there is … and …' },
      { ar: 'يَجِبُ أَنْ ______ ، وَلَا يَجُوزُ أَنْ ______ .', en: 'We must … and we must not …' },
    ],
    developFrames: [
      { ar: 'لٰكِنِّي لَا أُحِبُّ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'But I don’t like … because it is …' },
      { ar: 'فِي النِّهَايَةِ، فِي رَأْيِي مَدْرَسَتِي ______ .', en: 'Finally, in my opinion my school is …' },
    ],
    bank: ['تَبْدَأُ · تَنْتَهِي', 'فِي السَّاعَةِ …', 'مُمْتِعٌ · مُفِيدٌ', 'صَعْبٌ · مُمِلٌّ', 'لِأَنَّهُ · لِأَنَّهَا', 'يَجِبُ أَنْ · لَا يَجُوزُ أَنْ', 'أَوَّلًا · ثُمَّ', 'فِي النِّهَايَةِ'],
    model: {
      text: 'أَهْلًا مِنْ بِرِيطَانِيَا! اسْمِي يَاسِمِينُ. تَبْدَأُ مَدْرَسَتِي فِي السَّاعَةِ الثَّامِنَةِ وَالنِّصْفِ، وَتَنْتَهِي فِي الثَّالِثَةِ. أُحِبُّ العُلُومَ كَثِيرًا لِأَنَّهَا عَمَلِيَّةٌ وَمُمْتِعَةٌ، لٰكِنِّي لَا أُحِبُّ التَّارِيخَ لِأَنَّهُ صَعْبٌ. فِي حَقِيبَتِي كِتَابَانِ وَدَفْتَرٌ وَمِقْلَمَةٌ. يَجِبُ أَنْ نَلْبَسَ اللِّبَاسَ المَدْرَسِيَّ، وَلَا يَجُوزُ أَنْ نَأْكُلَ فِي الصَّفِّ. فِي النِّهَايَةِ، فِي رَأْيِي مَدْرَسَتِي مُمْتَازَةٌ لِأَنَّ المُعَلِّمِينَ لُطَفَاءُ.',
      en: '“Hello from Britain! My name is Yasmin. My school starts at half past eight and ends at three. I like science a lot because it is practical and enjoyable, but I don’t like history because it is difficult. In my bag there are two books, a notebook and a pencil case. We must wear the school uniform, and we must not eat in class. Finally, in my opinion my school is excellent because the teachers are kind.”',
      find: ['لِأَنَّهَا عَمَلِيَّةٌ', 'لٰكِنِّي لَا أُحِبُّ', 'يَجِبُ أَنْ نَلْبَسَ', 'فِي النِّهَايَةِ'],
    },
  },
});
