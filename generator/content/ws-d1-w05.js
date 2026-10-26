'use strict';
/* Apply Workshop · D1-W05 · D1-L09 (reading routines and weekly schedules) + D1-L10 (listening: routine and time details). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd1-w05', pair: ['d1-l09', 'd1-l10'],
  title: 'Activities Week: Schedule and Voicemail', arShort: 'أُسْبُوعُ الأَنْشِطَةِ',
  focus: 'Students join reading a schedule with listening for traps: they read the activities-week timetable (start, finish, duration, 24-hour times), listen to a voicemail that changes the plan (لٰكِنْ · بَلْ · لَا / لَيْسَ), find the correct details, and write an updated schedule email for a new student.',
  sortTitle: 'Schedule language or listening trap?', sortCats: ['Reading a schedule · D1-L09', 'Listening traps · D1-L10'],
  sort: [
    { ar: 'مَوْعِدُ البَدْءِ', cat: 0 }, { ar: 'المُدَّةُ سَاعَةٌ وَنِصْفٌ', cat: 0 }, { ar: 'حَسَبَ الجَدْوَلِ', cat: 0 }, { ar: 'مَوْعِدُ الانْتِهَاءِ', cat: 0 },
    { ar: 'لٰكِنْ هٰذَا الأُسْبُوعَ', cat: 1 }, { ar: 'لَيْسَ يَوْمَ … بَلْ …', cat: 1 }, { ar: 'لَمْ يَحْضُرْ', cat: 1 }, { ar: 'أَمَّا أَخِي فَ…', cat: 1 },
  ],
  dialogue: {
    title: 'The voicemail changes the plan', ar: 'الرِّسَالَةُ الصَّوْتِيَّةُ',
    lines: [
      ['A', 'حَسَبَ الجَدْوَلِ، يَبْدَأُ نَادِي الرُّوبُوتَاتِ يَوْمَ الثُّلَاثَاءِ فِي الرَّابِعَةِ.', 'According to the schedule, the robotics club starts on Tuesday at four.'],
      ['B', 'لٰكِنِ اسْمَعِ الرِّسَالَةَ: «النَّادِي لَيْسَ يَوْمَ الثُّلَاثَاءِ بَلْ يَوْمَ الأَرْبِعَاءِ».', 'But listen to the message: “The club is not on Tuesday but on Wednesday.”'],
      ['A', 'وَهَلْ يَبْدَأُ فِي الرَّابِعَةِ أَيْضًا؟', 'And does it start at four too?'],
      ['B', '«عَادَةً فِي الرَّابِعَةِ، لٰكِنْ هٰذَا الأُسْبُوعَ فِي الرَّابِعَةِ وَالنِّصْفِ».', '“Usually at four, but this week at half past four.”'],
      ['A', 'وَكَمِ المُدَّةُ؟', 'And how long is it?'],
      ['B', 'المُدَّةُ سَاعَةٌ وَنِصْفٌ، فَيَنْتَهِي فِي السَّادِسَةِ — أَيِ السَّاعَةِ ١٨:٠٠.', 'It lasts an hour and a half, so it ends at six — that is, 18:00.'],
    ],
    notes: 'Reading the schedule (حَسَبَ الجَدْوَلِ · المُدَّةُ · 24-hour times) comes from D1-L09; the traps (لَيْسَ … بَلْ … · عَادَةً … لٰكِنْ هٰذَا الأُسْبُوعَ) from D1-L10.',
  },
  card: {
    title: 'Listening card — the voicemail', ar: 'بِطَاقَةُ الاسْتِمَاعِ', you: 'the listener', them: 'the person reading the voicemail',
    mix: 'listening for corrections, negation and a change of person (D1-L10), then checking the facts against the schedule (D1-L09)',
    tasks: [
      { ex: '«التَّدْرِيبُ عَادَةً يَوْمَ الإِثْنَيْنِ، لٰكِنْ هٰذَا الأُسْبُوعَ يَوْمَ الخَمِيسِ».', task: 'Which day is training this week?', plan: 'لٰكِنْ ← يَوْمَ …', model: 'يَوْمَ الخَمِيسِ.', modelEn: 'On Thursday.' },
      { ex: '«تَبْدَأُ الرِّحْلَةُ فِي السَّابِعَةِ إِلَّا الرُّبْعَ، لَا فِي السَّابِعَةِ».', task: 'What time does the trip start?', plan: 'لَا ← فِي …', model: 'فِي السَّابِعَةِ إِلَّا الرُّبْعَ، أَيِ ٦:٤٥.', modelEn: 'At a quarter to seven — 6:45.' },
      { ex: '«أُخْتِي تَذْهَبُ إِلَى المَسْبَحِ، أَمَّا أَنَا فَأَذْهَبُ إِلَى المَكْتَبَةِ».', task: 'Where does the speaker go?', plan: 'أَنَا ← إِلَى …', model: 'إِلَى المَكْتَبَةِ — لَيْسَ إِلَى المَسْبَحِ.', modelEn: 'To the library — not to the pool (that is his sister).' },
      { ex: '«تَسْتَمِرُّ الوَرْشَةُ أَرْبَعِينَ دَقِيقَةً، وَالاسْتِرَاحَةُ عَشْرَ دَقَائِقَ».', task: 'How long is the workshop? And the break?', plan: 'كَمْ ← … دَقِيقَةً', model: 'الوَرْشَةُ أَرْبَعُونَ دَقِيقَةً، وَالاسْتِرَاحَةُ عَشْرُ دَقَائِقَ.', modelEn: 'The workshop is forty minutes, and the break ten minutes.' },
      { unexpected: true, ex: 'الآنَ: اقْرَأْ هٰذَا الوَقْتَ بِالكَلِمَاتِ: ١٦:٤٥', task: 'Say the 24-hour time in words.', plan: 'الخَامِسَةُ إِلَّا …', model: 'الخَامِسَةُ إِلَّا الرُّبْعَ بَعْدَ الظُّهْرِ.', modelEn: 'A quarter to five in the afternoon.' },
    ],
    foot: 'Partner A reads each message ONCE, then again. The listener answers with a short answer first, then a full sentence, and names the trap (لٰكِنْ · لَا / لَيْسَ · بَلْ · another person). Then swap.',
    girl: 'to a girl: اقْرَئِي هٰذَا الوَقْتَ · اسْمَعِي',
  },
  talk: {
    title: 'Record a voicemail with one trap', ar: 'رِسَالَةٌ صَوْتِيَّةٌ',
    text: 'Speak for one minute as if leaving a voicemail for a friend about the activities week: three activities with days, start times and durations — and one deliberate trap (a correction with لٰكِنْ or بَلْ). Your partner listens and says the CORRECT details.',
    routes: {
      core: 'النَّادِي يَوْمَ … فِي السَّاعَةِ …',
      develop: 'Add durations (المُدَّةُ … · يَسْتَمِرُّ …) and one trap.',
      stretch: 'Add two traps, a 24-hour time in words and another person (أَمَّا أَخِي فَ…).',
    },
  },
  task: {
    title: 'An updated schedule for the new student', ar: 'الجَدْوَلُ الجَدِيدُ',
    text: 'Write an email (about 60–80 words) to a new student with the UPDATED activities-week schedule. Include: • four activities with day, start time and finish time • two durations • one change you heard in the voicemail (use لٰكِنْ or لَيْسَ … بَلْ …) • one 24-hour time written in words • which activity you recommend and why.',
    range: [50, 100],
    phrases: [['حَسَبَ الجَدْوَلِ الجَدِيدِ …', 'according to the new schedule …'], ['يَبْدَأُ فِي … وَيَنْتَهِي فِي …', 'it starts at … and ends at …'], ['لَيْسَ يَوْمَ … بَلْ يَوْمَ …', 'not on … but on …'], ['أَنْصَحُكَ بِنَادِي … لِأَنَّ …', 'I recommend the … club because …']],
    coreFrames: [
      { ar: 'حَسَبَ الجَدْوَلِ الجَدِيدِ، ______ يَوْمَ ______ .', en: 'According to the new schedule, … is on …' },
      { ar: 'يَبْدَأُ فِي ______ وَيَنْتَهِي فِي ______ .', en: 'It starts at … and ends at …' },
      { ar: 'المُدَّةُ ______ .', en: 'It lasts …' },
      { ar: 'انْتَبِهْ: النَّادِي لَيْسَ ______ بَلْ ______ .', en: 'Careful: the club is not … but …' },
    ],
    developFrames: [
      { ar: 'السَّاعَةُ ١٦:٣٠ يَعْنِي ______ .', en: '16:30 means …' },
      { ar: 'أَنْصَحُكَ بِنَادِي ______ لِأَنَّ ______ .', en: 'I recommend the … club because …' },
    ],
    bank: ['حَسَبَ الجَدْوَلِ', 'مَوْعِدُ البَدْءِ', 'مَوْعِدُ الانْتِهَاءِ', 'المُدَّةُ', 'يَسْتَمِرُّ · تَسْتَمِرُّ', 'لٰكِنْ هٰذَا الأُسْبُوعَ', 'لَيْسَ … بَلْ …', 'أَنْصَحُكَ بِنَادِي …'],
    model: {
      text: 'أَهْلًا يَا رَامِي! هٰذَا جَدْوَلُ أُسْبُوعِ الأَنْشِطَةِ الجَدِيدُ. نَادِي الرُّوبُوتَاتِ لَيْسَ يَوْمَ الثُّلَاثَاءِ بَلْ يَوْمَ الأَرْبِعَاءِ؛ يَبْدَأُ فِي الرَّابِعَةِ وَالنِّصْفِ وَيَنْتَهِي فِي السَّادِسَةِ، أَيْ أَنَّ المُدَّةَ سَاعَةٌ وَنِصْفٌ. التَّدْرِيبُ عَادَةً يَوْمَ الإِثْنَيْنِ، لٰكِنْ هٰذَا الأُسْبُوعَ يَوْمَ الخَمِيسِ مِنَ الثَّالِثَةِ إِلَى الرَّابِعَةِ. وَوَرْشَةُ الفَنِّ يَوْمَ الأَحَدِ، وَتَسْتَمِرُّ أَرْبَعِينَ دَقِيقَةً. السَّاعَةُ ١٦:٣٠ تَعْنِي الرَّابِعَةَ وَالنِّصْفَ بَعْدَ الظُّهْرِ. أَنْصَحُكَ بِنَادِي الرُّوبُوتَاتِ لِأَنَّهُ مُمْتِعٌ وَمُفِيدٌ.',
      en: '“Hello, Rami! Here is the new activities-week schedule. The robotics club is not on Tuesday but on Wednesday; it starts at half past four and ends at six, so it lasts an hour and a half. Training is usually on Monday, but this week it is on Thursday from three to four. And the art workshop is on Sunday, and it lasts forty minutes. 16:30 means half past four in the afternoon. I recommend the robotics club because it is fun and useful.”',
      find: ['لَيْسَ يَوْمَ الثُّلَاثَاءِ بَلْ', 'المُدَّةَ سَاعَةٌ وَنِصْفٌ', 'لٰكِنْ هٰذَا الأُسْبُوعَ', 'أَنْصَحُكَ بِنَادِي'],
    },
  },
});
