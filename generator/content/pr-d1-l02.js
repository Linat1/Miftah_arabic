'use strict';
/* Practice Room · D1-L02 · Telling the time — what time is it? Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd1-l02',
  arShort: 'كَمِ السَّاعَةُ؟',
  grammar: 'kami al-sāʿatu?; al-sāʿatu + feminine ordinal + wa-l-rubʿ / wa-l-niṣf / wa-l-thulth / illā al-rubʿa; yabdaʾu / yantahī fī …; yastamirru … (lasts); 24-hour times on timetables',
  focus: 'Students run their own speaking and writing practice with clock times: say the time words, act a short dialogue, answer timetable cards, do a role-play card planning a day at a theme park, give a one-minute talk about their timetable, then build, fix and write a timed schedule email.',
  words1: 'Telling the time (1)', words2: 'Telling the time (2) and duration',
  dialogue: {
    title: 'What time does it start?', ar: 'مَتَى يَبْدَأُ؟',
    lines: [
      ['A', 'كَمِ السَّاعَةُ الآنَ؟', 'What time is it now?'],
      ['B', 'السَّاعَةُ الرَّابِعَةُ إِلَّا الرُّبْعَ.', 'It is quarter to four.'],
      ['A', 'مَتَى يَبْدَأُ الفِيلْمُ؟', 'When does the film start?'],
      ['B', 'يَبْدَأُ فِي الرَّابِعَةِ وَالثُّلُثِ، وَيَنْتَهِي فِي السَّادِسَةِ إِلَّا عَشْرَ دَقَائِقَ.', 'It starts at twenty past four and finishes at ten to six.'],
      ['A', 'إِذَنْ يَسْتَمِرُّ سَاعَةً وَنِصْفًا.', 'So it lasts an hour and a half.'],
      ['B', 'صَحِيحٌ! لٰكِنَّ الحَافِلَةَ الأَخِيرَةَ فِي السَّادِسَةِ وَالرُّبْعِ، لِذٰلِكَ لَا مُشْكِلَةَ.', 'Right! But the last bus is at quarter past six, so no problem.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: change all the times — the partner must calculate how long it lasts.',
  },
  questions: [
    { q: 'كَمِ السَّاعَةُ الآنَ؟', en: 'What time is it now?', start: 'السَّاعَةُ …', more: '… تَقْرِيبًا' },
    { q: 'مَتَى يَبْدَأُ يَوْمُكَ المَدْرَسِيُّ وَمَتَى يَنْتَهِي؟', en: 'When does your school day start and end?', start: 'يَبْدَأُ فِي … وَيَنْتَهِي فِي …', more: '… أَيْ يَسْتَمِرُّ … سَاعَاتٍ' },
    { q: 'كَمْ تَسْتَمِرُّ الحِصَّةُ؟', en: 'How long does a lesson last?', start: 'تَسْتَمِرُّ … دَقِيقَةً', more: '… لٰكِنَّ حِصَّةَ …' },
    { q: 'مَتَى تَتَنَاوَلُ العَشَاءَ؟', en: 'When do you have dinner?', start: 'فِي … ← السَّابِعَةِ وَالنِّصْفِ', more: '… وَأَحْيَانًا …' },
    { q: 'مَا الوَقْتُ المُفَضَّلُ عِنْدَكَ فِي اليَوْمِ؟ لِمَاذَا؟', en: 'What is your favourite time of day? Why?', start: 'أُفَضِّلُ السَّاعَةَ … لِأَنَّ …', more: '… مَثَلًا …' },
  ],
  card: {
    title: 'Role-play card — planning a day at a theme park', ar: 'يَوْمٌ فِي مَدِينَةِ المَلَاهِي', you: 'yourself', them: 'a friend planning with you',
    tasks: [
      { ex: 'مَتَى تَفْتَحُ مَدِينَةُ المَلَاهِي؟', task: 'Give the opening time.', plan: 'مَتَى ← تَفْتَحُ فِي … وَالنِّصْفِ', model: 'تَفْتَحُ فِي التَّاسِعَةِ وَالنِّصْفِ صَبَاحًا.', modelEn: 'It opens at half past nine in the morning.' },
      { ex: 'وَمَتَى نَخْرُجُ مِنَ البَيْتِ؟', task: 'Suggest a time + reason.', plan: 'مَتَى ← نَخْرُجُ فِي … لِأَنَّ الرِّحْلَةَ …', model: 'نَخْرُجُ فِي الثَّامِنَةِ وَالرُّبْعِ، لِأَنَّ الرِّحْلَةَ تَسْتَمِرُّ سَاعَةً.', modelEn: 'We leave at quarter past eight, because the journey lasts an hour.' },
      { ex: 'هُنَاكَ عَرْضٌ فِي الثَّانِيَةِ إِلَّا الثُّلُثَ. هَلْ نَذْهَبُ؟', task: 'Agree + how long it lasts.', plan: '', model: 'نَعَمْ! كَمْ يَسْتَمِرُّ العَرْضُ؟ نِصْفَ سَاعَةٍ؟', modelEn: 'Yes! How long does the show last? Half an hour?' },
      { unexpected: true, ex: 'وَمَتَى نَرْجِعُ؟ القِطَارُ الأَخِيرُ فِي السَّادِسَةِ.', task: 'Answer the surprise question.', plan: '', model: 'نَرْجِعُ فِي الخَامِسَةِ وَالنِّصْفِ، حَتَّى لَا نَتَأَخَّرَ عَنِ القِطَارِ.', modelEn: 'We come back at half past five, so we don’t miss the train.' },
    ],
    girl: 'no changes — you speak about “we” (نَخْرُجُ · نَرْجِعُ)',
    notes: 'Times with fractions (wa-l-thulth · illā al-thulth) · durations with yastamirru · ḥattā lā + verb in -a.',
  },
  talk: {
    title: 'One minute: my timetable', ar: 'جَدْوَلِي',
    text: 'Talk for one minute about your school day and evening with at least SIX exact times and two durations.',
    routes: {
      core: 'Four times with السَّاعَةُ … + وَالرُّبْعُ / وَالنِّصْفُ.',
      develop: 'Six times including إِلَّا الرُّبْعَ / وَالثُّلُثُ + two durations (يَسْتَمِرُّ …).',
      stretch: 'Add 24-hour times from a timetable and a comparison of weekday and weekend.',
    },
  },
  builder: [
    { en: 'The lesson starts at twenty past ten.', cols: [['تَبْدَأُ الحِصَّةُ', 'يَبْدَأُ الحِصَّةُ'], ['فِي العَاشِرَةِ', 'فِي عَشَرَةٍ'], ['وَالثُّلُثِ.', 'إِلَّا الثُّلُثَ.']], key: [0, 0, 0], why: 'حِصَّةٌ (f.) → تَبْدَأُ; twenty past = وَالثُّلُثِ.' },
    { en: 'The match lasts an hour and a half.', cols: [['تَسْتَمِرُّ', 'يَسْتَمِرُّونَ'], ['المُبَارَاةُ', 'المُبَارَاةَ'], ['سَاعَةً وَنِصْفًا.', 'سَاعَةٌ وَنِصْفٌ.']], key: [0, 0, 0], why: 'مُبَارَاةٌ (f.) → تَسْتَمِرُّ; duration in the accusative.' },
    { en: 'It is quarter to seven.', cols: [['السَّاعَةُ', 'السَّاعَةَ'], ['السَّابِعَةُ', 'سَبْعَةٌ'], ['إِلَّا الرُّبْعَ.', 'وَالرُّبْعُ.']], key: [0, 0, 0], why: 'Quarter to = إِلَّا الرُّبْعَ.' },
  ],
  errors: [
    { wrong: 'السَّاعَةُ ثَلَاثَةٌ وَالنِّصْفُ.', hint: 'Clock times use the ordinal.', right: 'السَّاعَةُ الثَّالِثَةُ وَالنِّصْفُ.', why: 'Feminine ordinal: الثَّالِثَةُ.' },
    { wrong: 'يَبْدَأُ الحِصَّةُ فِي التَّاسِعَةِ.', hint: 'حِصَّةٌ is feminine.', right: 'تَبْدَأُ الحِصَّةُ فِي التَّاسِعَةِ.', why: 'Feminine subject → تَبْدَأُ.' },
    { wrong: 'السَّاعَةُ الخَامِسَةُ إِلَّا الرُّبْعُ.', hint: 'After إِلَّا …', right: 'السَّاعَةُ الخَامِسَةُ إِلَّا الرُّبْعَ.', why: 'إِلَّا + accusative: الرُّبْعَ.' },
  ],
  task: {
    title: 'An email: my timetable on Saturday', ar: 'رِسَالَةٌ: جَدْوَلِي يَوْمَ السَّبْتِ',
    text: 'A friend wants to meet you on Saturday. Write an email (about 60–80 words) with your timetable for the day. Include: • at least six activities with exact times (including a quarter / third to or past) • two durations (يَسْتَمِرُّ / تَسْتَمِرُّ …) • when you are free and where to meet • a reason with لِأَنَّ.',
    phrases: [['فِي التَّاسِعَةِ وَالرُّبْعِ …', 'at quarter past nine …'], ['… يَبْدَأُ فِي … وَيَنْتَهِي فِي …', '… starts at … and ends at …'], ['يَسْتَمِرُّ / تَسْتَمِرُّ سَاعَةً وَنِصْفًا', 'it lasts an hour and a half'], ['أَنَا حُرٌّ / حُرَّةٌ مِنَ … إِلَى …', 'I am free from … to …']],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ !', en: 'Hi …!' },
      { ar: 'يَوْمَ السَّبْتِ أَسْتَيْقِظُ فِي ______ .', en: 'On Saturday I wake up at …' },
      { ar: 'فِي ______ أَذْهَبُ إِلَى ______ ، وَيَسْتَمِرُّ ______ .', en: 'At … I go to …, and it lasts …' },
      { ar: 'أَنَا حُرٌّ / حُرَّةٌ مِنَ ______ إِلَى ______ .', en: 'I am free from … to …' },
    ],
    developFrames: [
      { ar: 'يَبْدَأُ التَّدْرِيبُ فِي ______ ، وَيَنْتَهِي فِي ______ ، لِذٰلِكَ ______ .', en: 'Training starts at … and ends at …, so …' },
      { ar: 'نَلْتَقِي فِي ______ أَمَامَ ______ ، لِأَنَّ ______ .', en: 'Let’s meet at … in front of …, because …' },
    ],
    bank: ['وَالرُّبْعُ · وَالنِّصْفُ', 'وَالثُّلُثُ · إِلَّا الثُّلُثَ', 'إِلَّا الرُّبْعَ', 'يَبْدَأُ · يَنْتَهِي', 'يَسْتَمِرُّ · تَسْتَمِرُّ', 'صَبَاحًا · مَسَاءً', 'حُرٌّ · حُرَّةٌ', 'لِأَنَّ · لِذٰلِكَ'],
    model: {
      text: `مَرْحَبًا يَا سَامِي،
يَوْمَ السَّبْتِ أَسْتَيْقِظُ فِي الثَّامِنَةِ إِلَّا الرُّبْعَ. فِي التَّاسِعَةِ وَالرُّبْعِ أَذْهَبُ إِلَى دَرْسِ القُرْآنِ، وَيَسْتَمِرُّ سَاعَةً وَنِصْفًا. بَعْدَ ذٰلِكَ أَتَنَاوَلُ الغَدَاءَ مَعَ عَائِلَتِي فِي الوَاحِدَةِ. يَبْدَأُ تَدْرِيبُ كُرَةِ القَدَمِ فِي الثَّانِيَةِ وَالثُّلُثِ وَيَنْتَهِي فِي الرَّابِعَةِ إِلَّا عَشْرَ دَقَائِقَ، لِذٰلِكَ أَنَا حُرٌّ مِنَ الرَّابِعَةِ وَالنِّصْفِ إِلَى السَّابِعَةِ. نَلْتَقِي فِي الخَامِسَةِ أَمَامَ المَكْتَبَةِ، لِأَنَّهَا قَرِيبَةٌ مِنْ بَيْتِكَ.
إِلَى اللِّقَاءِ،
يُوسُفُ`,
      en: '“Hi Sami, on Saturday I wake up at quarter to eight. At quarter past nine I go to my Qur’an lesson, which lasts an hour and a half. After that I have lunch with my family at one. Football training starts at twenty past two and ends at ten to four, so I am free from half past four to seven. Let’s meet at five in front of the library, because it is near your house. See you, Yusuf.”',
      find: ['إِلَّا الرُّبْعَ', 'وَيَسْتَمِرُّ سَاعَةً وَنِصْفًا', 'فِي الثَّانِيَةِ وَالثُّلُثِ', 'لِذٰلِكَ أَنَا حُرٌّ'],
    },
  },
  checkCore: 'give clock times with the feminine ordinal (الثَّالِثَةُ …)?',
  checkDevelop: 'use fractions (وَالثُّلُثُ · إِلَّا الرُّبْعَ) and durations (يَسْتَمِرُّ …)?',
});
