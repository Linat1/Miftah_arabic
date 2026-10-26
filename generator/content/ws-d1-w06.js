'use strict';
/* Apply Workshop · D1-W06 · D1-L11 (speaking and writing: my daily routine) + D1-L12 (review and unit assessment). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd1-w06', pair: ['d1-l11', 'd1-l12'],
  title: 'A Day in My Life: Vlog and Email', arShort: 'يَوْمٌ فِي حَيَاتِي',
  focus: 'Students use all of D1 for one real purpose: they script and present a “day in my life” vlog for a partner school in Jordan — times, frequency, before and after, evening purposes, another person’s routine, last weekend and a future change — extending every answer with Point · Reason · Example · Contrast, then write the exam-style email.',
  sortTitle: 'Time and sequence, or extending an answer?', sortCats: ['Time, frequency and sequence', 'Extending an answer (PREC)'],
  sort: [
    { ar: 'فِي السَّابِعَةِ إِلَّا الرُّبْعَ', cat: 0 }, { ar: 'نَادِرًا', cat: 0 }, { ar: 'بَعْدَ أَنْ أَرْجِعَ', cat: 0 }, { ar: 'لِمُدَّةِ سَاعَةٍ', cat: 0 },
    { ar: 'لِأَنَّ', cat: 1 }, { ar: 'عَلَى سَبِيلِ المِثَالِ', cat: 1 }, { ar: 'مَعَ ذٰلِكَ', cat: 1 }, { ar: 'هٰذَا يَعْنِي أَنَّ', cat: 1 },
  ],
  dialogue: {
    title: 'Vlog interview: one full answer', ar: 'جَوَابٌ كَامِلٌ',
    lines: [
      ['A', 'صِفْ صَبَاحَكَ فِي يَوْمٍ مَدْرَسِيٍّ.', 'Describe your morning on a school day.'],
      ['B', 'أَسْتَيْقِظُ فِي السَّادِسَةِ وَالنِّصْفِ، وَقَبْلَ أَنْ أَخْرُجَ أَتَنَاوَلُ الفُطُورَ لِأَنَّهُ يُعْطِينِي طَاقَةً.', 'I wake up at half past six, and before I go out I have breakfast because it gives me energy.'],
      ['B', 'عَلَى سَبِيلِ المِثَالِ، آكُلُ الشُّوفَانَ مَعَ المَوْزِ.', 'For example, I eat porridge with bananas.'],
      ['B', 'أَمَّا أَخِي فَلَا يَأْكُلُ شَيْئًا فِي الصَّبَاحِ أَبَدًا!', 'As for my brother, he never eats anything in the morning!'],
      ['A', 'وَمَاذَا فَعَلْتَ فِي نِهَايَةِ الأُسْبُوعِ المَاضِيَةِ؟', 'And what did you do last weekend?'],
      ['B', 'زُرْتُ جَدِّي، وَفِي المُسْتَقْبَلِ سَأُحَاوِلُ أَنْ أَنَامَ مُبَكِّرًا.', 'I visited my grandfather, and in future I will try to sleep early.'],
    ],
    notes: 'The PREC chain (Point · Reason with لِأَنَّ · Example with عَلَى سَبِيلِ المِثَالِ · Contrast with مَعَ ذٰلِكَ / أَمَّا … فَ…) comes from D1-L11; the content — times, قَبْلَ أَنْ, another person, past and future — is the D1-L12 review.',
  },
  card: {
    title: 'Role-play card — the partner school asks', ar: 'تَسْأَلُ المَدْرَسَةُ الشَّقِيقَةُ', you: 'the vlogger', them: 'a student in Jordan',
    mix: 'every D1 structure under review (D1-L12), each answer extended with a reason, an example or a contrast (D1-L11)',
    tasks: [
      { ex: 'كَمِ السَّاعَةُ عِنْدَكُمُ الآنَ؟ وَمَتَى تَنْتَهِي المَدْرَسَةُ؟', task: 'Two exact times.', plan: 'كَمْ ← السَّاعَةُ … · تَنْتَهِي فِي …', model: 'السَّاعَةُ الآنَ العَاشِرَةُ وَالثُّلُثُ، وَتَنْتَهِي المَدْرَسَةُ فِي الثَّالِثَةِ وَالرُّبْعِ.', modelEn: 'It is now twenty past ten, and school ends at a quarter past three.' },
      { ex: 'مَاذَا تَفْعَلُ بَعْدَ المَدْرَسَةِ عَادَةً؟', task: 'Point + reason + example.', plan: 'مَاذَا ← بَعْدَ أَنْ أَرْجِعَ … لِأَنَّ … عَلَى سَبِيلِ المِثَالِ …', model: 'بَعْدَ أَنْ أَرْجِعَ أُرَاجِعُ لِمُدَّةِ سَاعَةٍ لِأَنَّ الامْتِحَانَاتِ قَرِيبَةٌ؛ عَلَى سَبِيلِ المِثَالِ أُرَاجِعُ الرِّيَاضِيَّاتِ.', modelEn: 'After I get back I revise for an hour because the exams are near; for example, I revise maths.' },
      { ex: 'صِفْ رُوتِينَ أَبِيكَ أَوْ أُمِّكَ.', task: 'Three he / she verbs and a contrast.', plan: 'صِفْ ← أُمِّي تَسْتَيْقِظُ … ، بَيْنَمَا أَنَا …', model: 'أُمِّي تَسْتَيْقِظُ فِي الخَامِسَةِ وَتَعْمَلُ فِي المُسْتَشْفَى، بَيْنَمَا أَنَا أَنَامُ حَتَّى السَّادِسَةِ وَالنِّصْفِ.', modelEn: 'My mother wakes up at five and works at the hospital, whereas I sleep until half past six.' },
      { ex: 'مَا الفَرْقُ بَيْنَ الأُسْبُوعِ وَنِهَايَتِهِ عِنْدَكَ؟', task: 'Use أَمَّا … فَ… and a frequency word.', plan: 'مَا ← فِي الأُسْبُوعِ … أَمَّا فِي نِهَايَتِهِ فَ…', model: 'فِي الأُسْبُوعِ أَنَامُ مُبَكِّرًا، أَمَّا فِي نِهَايَتِهِ فَغَالِبًا مَا أَسْهَرُ قَلِيلًا.', modelEn: 'During the week I sleep early, but at the weekend I often stay up a little.' },
      { unexpected: true, ex: 'مَاذَا فَعَلْتَ أَمْسِ؟ وَمَاذَا سَتُغَيِّرُ؟', task: 'One past sentence and one future plan.', plan: 'مَاذَا ← أَمْسِ … · سَأُحَاوِلُ أَنْ …', model: 'أَمْسِ لَعِبْتُ كُرَةَ القَدَمِ، وَسَأُحَاوِلُ أَنْ أَسْتَعْمِلَ الهَاتِفَ أَقَلَّ.', modelEn: 'Yesterday I played football, and I will try to use my phone less.' },
    ],
    girl: 'صِفِي · مَاذَا تَفْعَلِينَ؟ · مَاذَا فَعَلْتِ؟ · مَاذَا سَتُغَيِّرِينَ؟',
  },
  talk: {
    title: 'My vlog: a day in my life', ar: 'مُدَوَّنَتِي المُصَوَّرَةُ',
    text: 'Present your vlog for one minute without stopping: your school day with exact times, after school (with a duration and a purpose), one family member’s routine, how the weekend is different, what you did last weekend and one change you will make. Extend at least two points with PREC.',
    routes: {
      core: 'أَسْتَيْقِظُ فِي … · بَعْدَ المَدْرَسَةِ … · فِي نِهَايَةِ الأُسْبُوعِ …',
      develop: 'Add قَبْلَ أَنْ / بَعْدَ أَنْ, لِمُدَّةِ and أَمَّا … فَ…',
      stretch: 'Two full PREC chains, a past sentence and a future plan — no notes.',
    },
  },
  task: {
    title: 'Exam-style email: my daily life', ar: 'رِسَالَةٌ عَنْ حَيَاتِي اليَوْمِيَّةِ',
    text: 'You have a new pen-friend in Jordan. Write an email (about 60–80 words). Answer ALL four bullets: • your school-day routine, with times • what you do in the evening and why • how your weekend is different • what you did last weekend, and one change you will make. Include at least one full PREC chain.',
    range: [50, 100],
    phrases: [['أَسْتَيْقِظُ فِي … وَقَبْلَ أَنْ …', 'I wake up at … and before I …'], ['أُرَاجِعُ لِمُدَّةِ … لِكَيْ …', 'I revise for … so that …'], ['أَمَّا فِي نِهَايَةِ الأُسْبُوعِ فَ…', 'but at the weekend …'], ['فِي نِهَايَةِ الأُسْبُوعِ المَاضِيَةِ … · سَأُحَاوِلُ أَنْ …', 'last weekend … · I will try to …']],
    coreFrames: [
      { ar: 'أَسْتَيْقِظُ فِي ______ ، وَقَبْلَ أَنْ أَخْرُجَ ______ .', en: '• I wake up at …, and before I go out I …' },
      { ar: 'فِي المَسَاءِ أُرَاجِعُ لِمُدَّةِ ______ لِكَيْ ______ .', en: '• In the evening I revise for … so that …' },
      { ar: 'أَمَّا فِي نِهَايَةِ الأُسْبُوعِ فَ ______ .', en: '• But at the weekend …' },
      { ar: 'فِي نِهَايَةِ الأُسْبُوعِ المَاضِيَةِ ______ .', en: '• Last weekend I …' },
      { ar: 'سَأُحَاوِلُ أَنْ ______ لِأَنَّ ______ .', en: '• I will try to … because …' },
    ],
    developFrames: [
      { ar: 'عَلَى سَبِيلِ المِثَالِ، ______ .', en: 'For example, …' },
      { ar: 'مَعَ ذٰلِكَ، ______ .', en: 'However, …' },
    ],
    bank: ['وَالرُّبْعِ · وَالنِّصْفِ · إِلَّا', 'عَادَةً · غَالِبًا مَا', 'قَبْلَ أَنْ · بَعْدَ أَنْ', 'لِمُدَّةِ · لِكَيْ', 'أَمَّا … فَ…', 'لِأَنَّ · عَلَى سَبِيلِ المِثَالِ', 'مَعَ ذٰلِكَ', 'سَأُحَاوِلُ أَنْ'],
    model: {
      text: 'أَهْلًا يَا عُمَرُ! فِي أَيَّامِ المَدْرَسَةِ أَسْتَيْقِظُ فِي السَّادِسَةِ وَالنِّصْفِ، وَقَبْلَ أَنْ أَخْرُجَ أَتَنَاوَلُ الفُطُورَ. تَبْدَأُ المَدْرَسَةُ فِي الثَّامِنَةِ وَتَنْتَهِي فِي الثَّالِثَةِ وَالرُّبْعِ. فِي المَسَاءِ أُرَاجِعُ لِمُدَّةِ سَاعَةٍ لِكَيْ أَسْتَعِدَّ لِلِامْتِحَانَاتِ؛ عَلَى سَبِيلِ المِثَالِ، أُرَاجِعُ الكَلِمَاتِ العَرَبِيَّةَ. أَمَّا فِي نِهَايَةِ الأُسْبُوعِ فَأَنَامُ حَتَّى التَّاسِعَةِ، وَغَالِبًا مَا أَلْعَبُ مَعَ أَصْدِقَائِي. فِي نِهَايَةِ الأُسْبُوعِ المَاضِيَةِ زُرْتُ جَدِّي فِي بِرْمِنْغَهَام. مَعَ ذٰلِكَ، أَسْتَعْمِلُ الهَاتِفَ كَثِيرًا، لِذٰلِكَ سَأُحَاوِلُ أَنْ أَسْتَعْمِلَهُ أَقَلَّ.',
      en: '“Hello, Omar! On school days I wake up at half past six, and before I go out I have breakfast. School starts at eight and ends at a quarter past three. In the evening I revise for an hour so that I am ready for the exams; for example, I revise Arabic words. But at the weekend I sleep until nine, and I often play with my friends. Last weekend I visited my grandfather in Birmingham. However, I use my phone a lot, so I will try to use it less.”',
      find: ['وَقَبْلَ أَنْ أَخْرُجَ', 'لِمُدَّةِ سَاعَةٍ لِكَيْ', 'أَمَّا فِي نِهَايَةِ الأُسْبُوعِ', 'سَأُحَاوِلُ أَنْ'],
    },
  },
});
