'use strict';
/* Apply Workshop · F4-W04 · F4-L07 (a typical school day) + F4-L08 (reading school texts and notices). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f4-w04', pair: ['f4-l07', 'f4-l08'],
  title: 'The Science Museum Trip', arShort: 'رِحْلَةٌ إِلَى مَتْحَفِ العُلُومِ',
  focus: 'Students join reading a school notice with narrating a day: they read a trip notice for the key facts (when, where, how much, what to bring), plan the day of the trip in sequence with times, tell a partner, and write a message about their trip day.',
  dialogue: {
    title: 'Did you read the notice?', ar: 'هَلْ قَرَأْتَ الإِعْلَانَ؟',
    lines: [
      ['A', 'هَلْ قَرَأْتَ الإِعْلَانَ؟ مَتَى الرِّحْلَةُ؟', 'Did you read the notice? When is the trip?'],
      ['B', 'يَوْمَ الخَمِيسِ. تَخْرُجُ الحَافِلَةُ فِي السَّاعَةِ الثَّامِنَةِ.', 'On Thursday. The bus leaves at eight o’clock.'],
      ['A', 'كَمْ ثَمَنُ التَّذْكِرَةِ؟', 'How much is the ticket?'],
      ['B', 'خَمْسَةُ جُنَيْهَاتٍ. وَعَلَى جَمِيعِ الطُّلَّابِ أَنْ يُحْضِرُوا غَدَاءً.', 'Five pounds. And all students must bring lunch.'],
      ['A', 'إِذَنْ يَوْمَ الخَمِيسِ أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ!', 'So on Thursday I wake up at half past six!'],
      ['B', 'وَأَنَا أَتَنَاوَلُ الفُطُورَ، ثُمَّ أَذْهَبُ إِلَى المَدْرَسَةِ مُبَكِّرًا.', 'And I have breakfast, then I go to school early.'],
    ],
    notes: 'Reading the notice for clues (مَتَى → time · كَمْ → number · عَلَى جَمِيعِ الطُّلَّابِ أَنْ …) comes from F4-L08; the day in sequence with “I” verbs and times from F4-L07.',
  },
  card: {
    title: 'Role-play card — phoning a friend about the trip', ar: 'مُكَالَمَةٌ عَنِ الرِّحْلَةِ', you: 'the student who read the notice', them: 'a friend who was absent',
    mix: 'facts scanned from the notice (F4-L08) with the sequence of the trip day, times and connectors (F4-L07)',
    tasks: [
      { ex: 'إِلَى أَيْنَ الرِّحْلَةُ؟ وَمَتَى؟', task: 'Give the place and the day.', plan: 'أَيْنَ / مَتَى ← إِلَى … يَوْمَ …', model: 'إِلَى مَتْحَفِ العُلُومِ، يَوْمَ الخَمِيسِ.', modelEn: 'To the science museum, on Thursday.' },
      { ex: 'مِنْ أَيْنَ تَخْرُجُ الحَافِلَةُ؟ وَفِي أَيِّ سَاعَةٍ؟', task: 'Give the place and the time.', plan: 'مِنْ أَيْنَ ← مِنْ أَمَامِ … فِي السَّاعَةِ …', model: 'مِنْ أَمَامِ المَدْرَسَةِ، فِي السَّاعَةِ الثَّامِنَةِ تَمَامًا.', modelEn: 'From in front of the school, at exactly eight o’clock.' },
      { ex: 'مَاذَا يَجِبُ أَنْ نُحْضِرَ؟', task: 'Give two things from the notice.', plan: 'مَاذَا ← يَجِبُ أَنْ نُحْضِرَ … وَ…', model: 'يَجِبُ أَنْ نُحْضِرَ غَدَاءً وَمَاءً، وَخَمْسَةَ جُنَيْهَاتٍ.', modelEn: 'We must bring lunch and water, and five pounds.' },
      { ex: 'مَتَى تَسْتَيْقِظُ يَوْمَ الرِّحْلَةِ؟ وَمَاذَا تَفْعَلُ بَعْدَ ذٰلِكَ؟', task: 'Say your morning in sequence with a time.', plan: 'مَتَى ← أَسْتَيْقِظُ فِي … ثُمَّ … وَبَعْدَ ذٰلِكَ …', model: 'أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ، ثُمَّ أَتَنَاوَلُ الفُطُورَ، وَبَعْدَ ذٰلِكَ أَذْهَبُ إِلَى المَدْرَسَةِ.', modelEn: 'I wake up at half past six, then I have breakfast, and after that I go to school.' },
      { unexpected: true, ex: 'مَتَى نَعُودُ إِلَى المَدْرَسَةِ؟', task: 'Give the return time and what you do then.', plan: 'مَتَى ← نَعُودُ فِي … ، وَعِنْدَمَا …', model: 'نَعُودُ فِي السَّاعَةِ الثَّالِثَةِ، وَعِنْدَمَا أَصِلُ إِلَى البَيْتِ أَسْتَرِيحُ.', modelEn: 'We return at three o’clock, and when I get home I rest.' },
    ],
    girl: 'مَتَى تَسْتَيْقِظِينَ؟ · مَاذَا تَفْعَلِينَ بَعْدَ ذٰلِكَ؟',
    notes: 'Before the card, put a short invented notice on screen or in the chat: إِعْلَانٌ: رِحْلَةٌ إِلَى مَتْحَفِ العُلُومِ — يَوْمَ الخَمِيسِ — تَخْرُجُ الحَافِلَةُ مِنْ أَمَامِ المَدْرَسَةِ فِي السَّاعَةِ الثَّامِنَةِ — الثَّمَنُ: خَمْسَةُ جُنَيْهَاتٍ — عَلَى جَمِيعِ الطُّلَّابِ أَنْ يُحْضِرُوا غَدَاءً وَمَاءً — يُرْجَى دَفْعُ الثَّمَنِ قَبْلَ يَوْمِ الاِثْنَيْنِ.',
  },
  talk: {
    title: 'My trip day, from morning to evening', ar: 'يَوْمُ الرِّحْلَةِ',
    text: 'Talk for 30–45 seconds about the day of the trip: when you wake up and what you do before school, the key facts from the notice (time, place, what to bring), and what you do when you get home.',
    routes: {
      core: 'أَسْتَيْقِظُ فِي السَّاعَةِ … · أَذْهَبُ إِلَى المَدْرَسَةِ …',
      develop: 'Use three connectors: أَوَّلًا · ثُمَّ · بَعْدَ ذٰلِكَ · وَفِي النِّهَايَةِ.',
      stretch: 'Add facts from the notice (… تَخْرُجُ الحَافِلَةُ فِي …) and عِنْدَمَا أَصِلُ …',
    },
    phrases: [['أَسْتَيْقِظُ فِي السَّاعَةِ …', 'I wake up at …'], ['أَوَّلًا … ثُمَّ … بَعْدَ ذٰلِكَ …', 'first … then … after that …'], ['تَخْرُجُ الحَافِلَةُ فِي …', 'the bus leaves at …'], ['عِنْدَمَا أَصِلُ … · وَفِي النِّهَايَةِ …', 'when I arrive … · finally …']],
  },
  task: {
    title: 'A message about the trip day', ar: 'رِسَالَةٌ عَنْ يَوْمِ الرِّحْلَةِ',
    text: 'Write a message (about 45–65 words) to the friend who missed the notice. Include: • where and when the trip is • the bus time and place • the price and two things to bring • your plan for the morning, in sequence with times • what you do when you get home. Use at least four connectors.',
    range: [40, 90],
    phrases: [['الرِّحْلَةُ إِلَى … يَوْمَ …', 'the trip is to … on …'], ['تَخْرُجُ الحَافِلَةُ مِنْ … فِي السَّاعَةِ …', 'the bus leaves from … at …'], ['يَجِبُ أَنْ نُحْضِرَ …', 'we must bring …'], ['أَوَّلًا … ثُمَّ … وَبَعْدَ ذٰلِكَ …', 'first … then … and after that …']],
    coreFrames: [
      { ar: 'الرِّحْلَةُ إِلَى ______ يَوْمَ ______ .', en: 'The trip is to … on …' },
      { ar: 'تَخْرُجُ الحَافِلَةُ فِي السَّاعَةِ ______ .', en: 'The bus leaves at …' },
      { ar: 'الثَّمَنُ ______ ، وَيَجِبُ أَنْ نُحْضِرَ ______ .', en: 'The price is …, and we must bring …' },
      { ar: 'أَسْتَيْقِظُ فِي السَّاعَةِ ______ ، ثُمَّ ______ .', en: 'I wake up at …, then …' },
      { ar: 'وَفِي النِّهَايَةِ ______ .', en: 'And finally …' },
    ],
    developFrames: [
      { ar: 'بَعْدَ ذٰلِكَ ______ .', en: 'After that …' },
      { ar: 'عِنْدَمَا أَصِلُ إِلَى البَيْتِ، ______ .', en: 'When I get home, …' },
      { ar: 'يُرْجَى ______ قَبْلَ ______ .', en: 'Please … before …' },
    ],
    bank: ['أَسْتَيْقِظُ', 'أَتَنَاوَلُ الفُطُورَ', 'أَذْهَبُ · أَصِلُ', 'أَعُودُ إِلَى البَيْتِ', 'أَوَّلًا · ثُمَّ', 'بَعْدَ ذٰلِكَ · عِنْدَمَا', 'فِي السَّاعَةِ …', 'يَجِبُ أَنْ نُحْضِرَ'],
    model: {
      text: 'أَهْلًا يَا رِيمُ! الرِّحْلَةُ إِلَى مَتْحَفِ العُلُومِ يَوْمَ الخَمِيسِ. تَخْرُجُ الحَافِلَةُ مِنْ أَمَامِ المَدْرَسَةِ فِي السَّاعَةِ الثَّامِنَةِ. الثَّمَنُ خَمْسَةُ جُنَيْهَاتٍ، وَيَجِبُ أَنْ نُحْضِرَ غَدَاءً وَمَاءً. يَوْمَ الخَمِيسِ أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ. أَوَّلًا أُصَلِّي، ثُمَّ أَتَنَاوَلُ الفُطُورَ، وَبَعْدَ ذٰلِكَ أَذْهَبُ إِلَى المَدْرَسَةِ. نَعُودُ فِي السَّاعَةِ الثَّالِثَةِ، وَعِنْدَمَا أَصِلُ إِلَى البَيْتِ أَسْتَرِيحُ. يُرْجَى دَفْعُ الثَّمَنِ قَبْلَ يَوْمِ الاِثْنَيْنِ!',
      en: '“Hello, Reem! The trip is to the science museum on Thursday. The bus leaves from in front of the school at eight o’clock. The price is five pounds, and we must bring lunch and water. On Thursday I wake up at half past six. First I pray, then I have breakfast, and after that I go to school. We come back at three o’clock, and when I get home I rest. Please pay before Monday!”',
      find: ['يَوْمَ الخَمِيسِ', 'يَجِبُ أَنْ نُحْضِرَ', 'أَسْتَيْقِظُ فِي السَّاعَةِ', 'وَبَعْدَ ذٰلِكَ'],
    },
  },
});
