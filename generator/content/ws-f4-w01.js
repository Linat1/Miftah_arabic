'use strict';
/* Apply Workshop · F4-W01 · F4-L01 (school subjects) + F4-L02 (the timetable: days and times). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f4-w01', pair: ['f4-l01', 'f4-l02'],
  title: 'Helping a New Student', arShort: 'نُسَاعِدُ طَالِبًا جَدِيدًا',
  focus: 'Students join subjects, opinions and the timetable: they help a new student understand the week — which subjects on which day, at what time, and what they think of them — then give a short talk and write a timetable guide for the new student.',
  dialogue: {
    title: 'The new student asks', ar: 'يَسْأَلُ الطَّالِبُ الجَدِيدُ',
    lines: [
      ['A', 'مَتَى تَبْدَأُ المَدْرَسَةُ؟', 'When does school start?'],
      ['B', 'تَبْدَأُ فِي السَّاعَةِ الثَّامِنَةِ وَالنِّصْفِ.', 'It starts at half past eight.'],
      ['A', 'مَاذَا نَدْرُسُ يَوْمَ الاِثْنَيْنِ؟', 'What do we study on Monday?'],
      ['B', 'الحِصَّةُ الأُولَى الرِّيَاضِيَّاتُ، ثُمَّ العُلُومُ، ثُمَّ الفَنُّ.', 'The first lesson is maths, then science, then art.'],
      ['A', 'هَلْ تُحِبُّ العُلُومَ؟', 'Do you like science?'],
      ['B', 'نَعَمْ، أُحِبُّهَا لِأَنَّهَا مُمْتِعَةٌ، لٰكِنَّ الرِّيَاضِيَّاتِ صَعْبَةٌ قَلِيلًا.', 'Yes, I like it because it is enjoyable, but maths is a little difficult.'],
    ],
    notes: 'Times and days (فِي السَّاعَةِ الثَّامِنَةِ وَالنِّصْفِ · يَوْمَ الاِثْنَيْنِ) come from F4-L02; subjects and opinions with لِأَنَّهُ / لِأَنَّهَا from F4-L01. Point out: العُلُومُ / الرِّيَاضِيَّاتُ are plural things → لِأَنَّهَا … مُمْتِعَةٌ (feminine singular).',
  },
  card: {
    title: 'Role-play card — the new student’s first morning', ar: 'الصَّبَاحُ الأَوَّلُ', you: 'the guide', them: 'the new student',
    mix: 'days, times and periods (F4-L02) with subjects, favourites and reasons that agree (F4-L01)',
    tasks: [
      { ex: 'مَتَى تَبْدَأُ المَدْرَسَةُ وَمَتَى تَنْتَهِي؟', task: 'Give the start and finish time.', plan: 'مَتَى ← تَبْدَأُ فِي … وَتَنْتَهِي فِي …', model: 'تَبْدَأُ فِي السَّاعَةِ الثَّامِنَةِ، وَتَنْتَهِي فِي السَّاعَةِ الثَّالِثَةِ.', modelEn: 'It starts at eight o’clock and finishes at three o’clock.' },
      { ex: 'كَمْ حِصَّةً عِنْدَنَا فِي اليَوْمِ؟', task: 'Give the number of lessons.', plan: 'كَمْ ← عِنْدَنَا … حِصَصٍ', model: 'عِنْدَنَا خَمْسُ حِصَصٍ فِي اليَوْمِ.', modelEn: 'We have five lessons a day.' },
      { ex: 'مَاذَا نَدْرُسُ يَوْمَ الثُّلَاثَاءِ؟', task: 'Name three subjects in order.', plan: 'مَاذَا ← أَوَّلًا … ثُمَّ … ثُمَّ …', model: 'أَوَّلًا العَرَبِيَّةُ، ثُمَّ الجُغْرَافِيَا، ثُمَّ التَّرْبِيَةُ البَدَنِيَّةُ.', modelEn: 'First Arabic, then geography, then PE.' },
      { ex: 'مَا مَادَّتُكَ المُفَضَّلَةُ؟ لِمَاذَا؟', task: 'Give your favourite subject and a reason that agrees.', plan: 'مَا ← مَادَّتِي المُفَضَّلَةُ … لِأَنَّهُ / لِأَنَّهَا …', model: 'مَادَّتِي المُفَضَّلَةُ الفَنُّ لِأَنَّهُ مُمْتِعٌ وَسَهْلٌ.', modelEn: 'My favourite subject is art because it is enjoyable and easy.' },
      { unexpected: true, ex: 'مَتَى الاِسْتِرَاحَةُ؟', task: 'Give the break time.', plan: 'مَتَى ← الاِسْتِرَاحَةُ فِي السَّاعَةِ …', model: 'الاِسْتِرَاحَةُ فِي السَّاعَةِ العَاشِرَةِ وَالرُّبْعِ.', modelEn: 'Break is at a quarter past ten.' },
    ],
    girl: 'مَا مَادَّتُكِ المُفَضَّلَةُ؟ · هَلْ تُحِبِّينَ …؟',
  },
  talk: {
    title: 'My best day at school', ar: 'أَفْضَلُ يَوْمٍ فِي مَدْرَسَتِي',
    text: 'Talk for 30–45 seconds about your favourite school day: which day, when school starts, the lessons in order, one subject you love and one you don’t, with reasons.',
    routes: {
      core: 'يَوْمِي المُفَضَّلُ يَوْمُ … · أَدْرُسُ … وَ…',
      develop: 'Add one time and the order: أَوَّلًا … ثُمَّ … · فِي السَّاعَةِ …',
      stretch: 'Give two reasons that agree (لِأَنَّهُ / لِأَنَّهَا) and a “but” (لٰكِنَّ).',
    },
    phrases: [['يَوْمِي المُفَضَّلُ يَوْمُ …', 'my favourite day is …'], ['تَبْدَأُ المَدْرَسَةُ فِي السَّاعَةِ …', 'school starts at …'], ['أُحِبُّ … لِأَنَّهُ / لِأَنَّهَا …', 'I like … because it …'], ['الحِصَّةُ الأُولَى … ثُمَّ …', 'the first lesson … then …']],
  },
  task: {
    title: 'A timetable guide for the new student', ar: 'دَلِيلُ الجَدْوَلِ',
    text: 'Write a short guide (about 45–65 words) for a new student. Include: • when school starts and finishes • break or lunchtime • your favourite day and its lessons, in order • your favourite subject and why • one subject you don’t like and why • a friendly closing.',
    range: [40, 85],
    phrases: [['تَبْدَأُ المَدْرَسَةُ فِي … وَتَنْتَهِي فِي …', 'school starts at … and finishes at …'], ['يَوْمَ … الحِصَّةُ الأُولَى … ، ثُمَّ …', 'on … the first lesson is …, then …'], ['مَادَّتِي المُفَضَّلَةُ … لِأَنَّهُ / لِأَنَّهَا …', 'my favourite subject … because it …'], ['لَا أُحِبُّ … لِأَنَّهُ / لِأَنَّهَا …', 'I don’t like … because it …']],
    coreFrames: [
      { ar: 'تَبْدَأُ المَدْرَسَةُ فِي السَّاعَةِ ______ .', en: 'School starts at …' },
      { ar: 'الاِسْتِرَاحَةُ فِي السَّاعَةِ ______ .', en: 'Break is at …' },
      { ar: 'يَوْمِي المُفَضَّلُ يَوْمُ ______ .', en: 'My favourite day is …' },
      { ar: 'الحِصَّةُ الأُولَى ______ ، ثُمَّ ______ .', en: 'The first lesson is …, then …' },
      { ar: 'أُحِبُّ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I like … because it is …' },
    ],
    developFrames: [
      { ar: 'لَا أُحِبُّ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I don’t like … because it is …' },
      { ar: 'وَتَنْتَهِي فِي السَّاعَةِ ______ .', en: 'And it finishes at …' },
      { ar: 'أَهْلًا وَسَهْلًا فِي مَدْرَسَتِنَا!', en: 'Welcome to our school!' },
    ],
    bank: ['الرِّيَاضِيَّاتُ · العُلُومُ', 'الفَنُّ · الجُغْرَافِيَا', 'يَوْمَ الاِثْنَيْنِ', 'فِي السَّاعَةِ الثَّامِنَةِ', 'وَالنِّصْفِ · وَالرُّبْعِ', 'حِصَّةٌ · حِصَصٌ', 'مُمْتِعٌ · مُفِيدٌ · سَهْلٌ', 'لِأَنَّهُ · لِأَنَّهَا'],
    model: {
      text: 'أَهْلًا وَسَهْلًا فِي مَدْرَسَتِنَا! تَبْدَأُ المَدْرَسَةُ فِي السَّاعَةِ الثَّامِنَةِ وَالنِّصْفِ، وَتَنْتَهِي فِي السَّاعَةِ الثَّالِثَةِ. الاِسْتِرَاحَةُ فِي السَّاعَةِ العَاشِرَةِ وَالرُّبْعِ. يَوْمِي المُفَضَّلُ يَوْمُ الخَمِيسِ: الحِصَّةُ الأُولَى العَرَبِيَّةُ، ثُمَّ العُلُومُ، ثُمَّ الفَنُّ. أُحِبُّ الفَنَّ لِأَنَّهُ مُمْتِعٌ وَإِبْدَاعِيٌّ. لَا أُحِبُّ الجُغْرَافِيَا كَثِيرًا لِأَنَّهَا صَعْبَةٌ، لٰكِنَّهَا مُفِيدَةٌ.',
      en: '“Welcome to our school! School starts at half past eight and finishes at three o’clock. Break is at a quarter past ten. My favourite day is Thursday: the first lesson is Arabic, then science, then art. I like art because it is enjoyable and creative. I don’t like geography much because it is difficult, but it is useful.”',
      find: ['فِي السَّاعَةِ الثَّامِنَةِ وَالنِّصْفِ', 'يَوْمُ الخَمِيسِ', 'لِأَنَّهُ مُمْتِعٌ', 'لٰكِنَّهَا مُفِيدَةٌ'],
    },
  },
});
