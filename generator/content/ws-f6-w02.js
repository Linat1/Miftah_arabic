'use strict';
/* Apply Workshop · F6-W02 · F6-L03 (transport and how we travel) + F6-L04 (tickets, timetables and journey duration). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f6-w02', pair: ['f6-l03', 'f6-l04'],
  title: 'A Train Journey to York', arShort: 'رِحْلَةٌ بِالقِطَارِ إِلَى يُورْك',
  focus: 'Students join ways of travelling with tickets and timetables: they plan a family day trip by train — how each person gets to the station, which ticket to buy and for how much, the departure time and platform, how long the journey takes — and write a journey-plan message.',
  dialogue: {
    title: 'At the ticket window', ar: 'عِنْدَ شُبَّاكِ التَّذَاكِرِ',
    lines: [
      ['A', 'أُرِيدُ تَذْكِرَةَ ذَهَابٍ وَإِيَابٍ إِلَى يُورْك، مِنْ فَضْلِكَ.', 'I would like a return ticket to York, please.'],
      ['B', 'تَفَضَّلْ. ثَمَنُهَا أَرْبَعُونَ جُنَيْهًا.', 'Here you are. It costs forty pounds.'],
      ['A', 'مَتَى يُغَادِرُ القِطَارُ؟ وَمِنْ أَيِّ رَصِيفٍ؟', 'When does the train leave? And from which platform?'],
      ['B', 'يُغَادِرُ فِي السَّاعَةِ العَاشِرَةِ وَالنِّصْفِ مِنَ الرَّصِيفِ رَقْمِ أَرْبَعَةٍ.', 'It leaves at half past ten from platform four.'],
      ['A', 'كَمْ تَسْتَغْرِقُ الرِّحْلَةُ؟', 'How long does the journey take?'],
      ['B', 'تَسْتَغْرِقُ سَاعَتَيْنِ. وَكَيْفَ تَذْهَبُ إِلَى المَحَطَّةِ؟ — أَذْهَبُ بِالحَافِلَةِ.', 'It takes two hours. And how do you get to the station? — I go by bus.'],
    ],
    notes: 'Tickets, departure, platform and تَسْتَغْرِقُ come from F6-L04; means of transport (بِالحَافِلَةِ · بِالقِطَارِ · مَشْيًا) from F6-L03.',
  },
  card: {
    title: 'Role-play card — booking the family trip', ar: 'نَحْجِزُ الرِّحْلَةَ', you: 'the traveller', them: 'the ticket officer',
    mix: 'transport patterns بِالحَافِلَةِ / عَلَى الدَّرَّاجَةِ / مَشْيًا (F6-L03) with tickets, prices, times, platforms and duration (F6-L04)',
    tasks: [
      { ex: 'صَبَاحَ الخَيْرِ! أَيَّ تَذْكِرَةٍ تُرِيدُ؟', task: 'Ask for two return tickets.', plan: 'أَيَّ ← أُرِيدُ تَذْكِرَتَيْ ذَهَابٍ وَإِيَابٍ إِلَى …', model: 'أُرِيدُ تَذْكِرَتَيْ ذَهَابٍ وَإِيَابٍ إِلَى يُورْك، مِنْ فَضْلِكَ.', modelEn: 'I would like two return tickets to York, please.' },
      { ex: 'ثَمَنُ التَّذْكِرَةِ أَرْبَعُونَ جُنَيْهًا.', task: 'Ask about a cheaper ticket or how to pay.', plan: 'ثَمَنُ ← هَلْ عِنْدَكُمْ تَذْكِرَةٌ أَرْخَصُ؟', model: 'هَلْ عِنْدَكُمْ تَذْكِرَةٌ أَرْخَصُ لِلطُّلَّابِ؟', modelEn: 'Do you have a cheaper ticket for students?' },
      { ex: 'القِطَارُ يُغَادِرُ فِي العَاشِرَةِ وَالنِّصْفِ.', task: 'Ask the platform and the arrival time.', plan: 'يُغَادِرُ ← مِنْ أَيِّ رَصِيفٍ؟ وَمَتَى يَصِلُ؟', model: 'مِنْ أَيِّ رَصِيفٍ؟ وَمَتَى يَصِلُ إِلَى يُورْك؟', modelEn: 'From which platform? And when does it arrive in York?' },
      { ex: 'كَيْفَ تَذْهَبُونَ إِلَى المَحَطَّةِ؟', task: 'Say how two people travel to the station.', plan: 'كَيْفَ ← أَبِي يَقُودُ … · أَنَا أَذْهَبُ …', model: 'أَبِي يَقُودُ السَّيَّارَةَ، وَأَنَا أَذْهَبُ عَلَى الدَّرَّاجَةِ.', modelEn: 'My father drives the car, and I go by bike.' },
      { unexpected: true, ex: 'عُذْرًا، القِطَارُ يَتَأَخَّرُ عِشْرِينَ دَقِيقَةً.', task: 'React and ask when it will leave now.', plan: 'يَتَأَخَّرُ ← لَا بَأْسَ … مَتَى يُغَادِرُ الآنَ؟', model: 'لَا بَأْسَ. إِذَنْ يُغَادِرُ فِي السَّاعَةِ الحَادِيَةَ عَشْرَةَ إِلَّا عَشْرَ دَقَائِقَ؟', modelEn: 'No problem. So it leaves at ten to eleven?' },
    ],
    girl: 'أَيَّ تَذْكِرَةٍ تُرِيدِينَ؟ · تَفَضَّلِي — and she answers the same way',
    notes: 'Task 5 is hard for Core: accept لَا بَأْسَ، شُكْرًا. مَتَى يُغَادِرُ الآنَ؟',
  },
  talk: {
    title: 'How my family travels', ar: 'كَيْفَ تُسَافِرُ عَائِلَتِي',
    text: 'Talk for 30–45 seconds: how you go to school and how long it takes, how two family members travel, and a journey you take (by train, coach or plane) — the ticket, the departure time and how long it takes.',
    routes: {
      core: 'أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ / مَشْيًا · أَبِي يَقُودُ …',
      develop: 'Add a journey: يُغَادِرُ … فِي … · تَسْتَغْرِقُ الرِّحْلَةُ …',
      stretch: 'Add your favourite transport with a reason, and a ticket price.',
    },
    phrases: [['أَذْهَبُ بِالحَافِلَةِ · عَلَى الدَّرَّاجَةِ · مَشْيًا', 'I go by bus · by bike · on foot'], ['يُغَادِرُ القِطَارُ فِي …', 'the train leaves at …'], ['تَسْتَغْرِقُ الرِّحْلَةُ …', 'the journey takes …'], ['تَذْكِرَةُ ذَهَابٍ وَإِيَابٍ', 'a return ticket']],
  },
  task: {
    title: 'Our journey plan', ar: 'خُطَّةُ الرِّحْلَةِ',
    text: 'Write a message (about 45–65 words) to a friend who will meet you in York. Include: • who is travelling and how you each get to the station • the ticket you bought and its price • the departure time and platform • how long the journey takes and when you arrive • a delay, if there is one • your favourite transport and why.',
    range: [40, 85],
    phrases: [['سَنُسَافِرُ بِالقِطَارِ إِلَى …', 'we will travel by train to …'], ['اشْتَرَيْتُ تَذْكِرَةَ ذَهَابٍ وَإِيَابٍ بِأَرْبَعِينَ جُنَيْهًا', 'I bought a return ticket for forty pounds'], ['يُغَادِرُ القِطَارُ فِي … مِنَ الرَّصِيفِ …', 'the train leaves at … from platform …'], ['تَسْتَغْرِقُ الرِّحْلَةُ … ، وَنَصِلُ فِي …', 'the journey takes … and we arrive at …']],
    coreFrames: [
      { ar: 'سَنُسَافِرُ بِالقِطَارِ إِلَى ______ .', en: 'We will travel by train to …' },
      { ar: 'أَذْهَبُ إِلَى المَحَطَّةِ ______ .', en: 'I go to the station (by / on foot) …' },
      { ar: 'اشْتَرَيْتُ تَذْكِرَةَ ______ .', en: 'I bought a … ticket.' },
      { ar: 'يُغَادِرُ القِطَارُ فِي السَّاعَةِ ______ .', en: 'The train leaves at …' },
      { ar: 'تَسْتَغْرِقُ الرِّحْلَةُ ______ .', en: 'The journey takes …' },
    ],
    developFrames: [
      { ar: 'مِنَ الرَّصِيفِ رَقْمِ ______ ، وَنَصِلُ فِي ______ .', en: 'From platform …, and we arrive at …' },
      { ar: 'أُفَضِّلُ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I prefer … because it is …' },
    ],
    bank: ['بِالقِطَارِ · بِالحَافِلَةِ', 'بِالسَّيَّارَةِ · مَشْيًا', 'عَلَى الدَّرَّاجَةِ', 'تَذْكِرَةٌ مُفْرَدَةٌ', 'تَذْكِرَةُ ذَهَابٍ وَإِيَابٍ', 'يُغَادِرُ · يَصِلُ', 'رَصِيفٌ', 'تَسْتَغْرِقُ'],
    model: {
      text: 'أَهْلًا يَا زَيْنَبُ! سَنُسَافِرُ أَنَا وَأُمِّي بِالقِطَارِ إِلَى يُورْك يَوْمَ السَّبْتِ. أُمِّي تَذْهَبُ إِلَى المَحَطَّةِ بِالسَّيَّارَةِ، وَأَنَا أَذْهَبُ مَشْيًا. اشْتَرَيْتُ تَذْكِرَتَيْ ذَهَابٍ وَإِيَابٍ بِثَمَانِينَ جُنَيْهًا. يُغَادِرُ القِطَارُ فِي السَّاعَةِ العَاشِرَةِ وَالنِّصْفِ مِنَ الرَّصِيفِ رَقْمِ أَرْبَعَةٍ. تَسْتَغْرِقُ الرِّحْلَةُ سَاعَتَيْنِ، وَنَصِلُ فِي الثَّانِيَةَ عَشْرَةَ وَالنِّصْفِ. أُفَضِّلُ القِطَارَ لِأَنَّهُ سَرِيعٌ وَمُرِيحٌ.',
      en: '“Hello, Zaynab! My mother and I will travel by train to York on Saturday. My mother goes to the station by car, and I go on foot. I bought two return tickets for eighty pounds. The train leaves at half past ten from platform four. The journey takes two hours, and we arrive at half past twelve. I prefer the train because it is fast and comfortable.”',
      find: ['بِالقِطَارِ إِلَى يُورْك', 'تَذْكِرَتَيْ ذَهَابٍ وَإِيَابٍ', 'مِنَ الرَّصِيفِ رَقْمِ أَرْبَعَةٍ', 'تَسْتَغْرِقُ الرِّحْلَةُ سَاعَتَيْنِ'],
    },
  },
});
