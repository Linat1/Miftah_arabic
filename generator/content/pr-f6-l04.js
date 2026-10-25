'use strict';
/* Practice Room · F6-L04 · Tickets, timetables and journey duration. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f6-l04',
  arShort: 'التَّذَاكِرُ وَالرِّحْلَاتُ',
  grammar: 'urīdu tadhkiratan mufradatan / tadhkirata dhahābin wa-iyāb; yughādiru / yaṣilu + fī al-sāʿati …; min ayyi raṣīfin?; tastaghriqu al-riḥlatu sāʿatayni; yataʾakhkharu',
  focus: 'Students run their own speaking and writing practice with tickets and timetables: say the station words, act a ticket-office dialogue, answer departure-board questions, do a role-play card when a train is delayed, give a 30-second journey description, then build, fix and write a message about a journey plan.',
  words1: 'At the ticket office', words2: 'Departures and duration',
  dialogue: {
    title: 'A return ticket, please', ar: 'تَذْكِرَةُ ذَهَابٍ وَإِيَابٍ',
    lines: [
      ['A', 'أُرِيدُ تَذْكِرَةَ ذَهَابٍ وَإِيَابٍ إِلَى مَانْشِسْتَرَ، مِنْ فَضْلِكَ.', 'I would like a return ticket to Manchester, please.'],
      ['B', 'تَفَضَّلْ. سِعْرُهَا ثَلَاثُونَ جُنَيْهًا.', 'Here you are. It costs thirty pounds.'],
      ['A', 'مَتَى يُغَادِرُ القِطَارُ؟', 'When does the train leave?'],
      ['B', 'يُغَادِرُ فِي السَّاعَةِ التَّاسِعَةِ وَالرُّبْعِ مِنَ الرَّصِيفِ رَقْمِ أَرْبَعَةٍ.', 'It leaves at quarter past nine from platform four.'],
      ['A', 'كَمْ تَسْتَغْرِقُ الرِّحْلَةُ؟', 'How long does the journey take?'],
      ['B', 'تَسْتَغْرِقُ سَاعَتَيْنِ، وَيَصِلُ القِطَارُ فِي الحَادِيَةَ عَشْرَةَ وَالرُّبْعِ.', 'It takes two hours, and the train arrives at quarter past eleven.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: change the city, ticket type, time and platform.',
  },
  questions: [
    { q: 'أَيَّ تَذْكِرَةٍ تُرِيدُ؟', en: 'Which ticket do you want?', start: 'أُرِيدُ تَذْكِرَةً مُفْرَدَةً / تَذْكِرَةَ ذَهَابٍ وَإِيَابٍ', more: '… إِلَى …' },
    { q: 'مَتَى يُغَادِرُ القِطَارُ إِلَى لِيدْزَ؟ (10:30)', en: 'When does the train to Leeds leave? (10:30)', start: 'يُغَادِرُ فِي السَّاعَةِ العَاشِرَةِ وَالنِّصْفِ', more: '… مِنَ الرَّصِيفِ …' },
    { q: 'مِنْ أَيِّ رَصِيفٍ؟ (2)', en: 'From which platform? (2)', start: 'مِنَ الرَّصِيفِ رَقْمِ اثْنَيْنِ', more: '…' },
    { q: 'كَمْ تَسْتَغْرِقُ الرِّحْلَةُ؟ (3 hours)', en: 'How long is the journey? (3 hours)', start: 'تَسْتَغْرِقُ ثَلَاثَ سَاعَاتٍ', more: '… وَيَصِلُ فِي …' },
    { q: 'هَلِ القِطَارُ فِي الوَقْتِ؟', en: 'Is the train on time?', start: 'نَعَمْ، فِي الوَقْتِ / لَا، يَتَأَخَّرُ …', more: '… عِشْرِينَ دَقِيقَةً' },
  ],
  qTitle: 'Read the departure board — answer like the station announcer',
  card: {
    title: 'Role-play card — the train is delayed!', ar: 'القِطَارُ مُتَأَخِّرٌ!', you: 'a passenger', them: 'the station staff',
    tasks: [
      { ex: 'كَيْفَ أُسَاعِدُكَ؟', task: 'Ask about your train.', plan: 'كَيْفَ ← مَتَى يُغَادِرُ القِطَارُ إِلَى …؟', model: 'مَتَى يُغَادِرُ القِطَارُ إِلَى بِرْمِنْغْهَامَ؟', modelEn: 'When does the train to Birmingham leave?' },
      { ex: 'لِلْأَسَفِ، يَتَأَخَّرُ نِصْفَ سَاعَةٍ.', task: 'React and ask the new time.', plan: 'يَتَأَخَّرُ ← أَوْهْ! إِذَنْ مَتَى …؟', model: 'أَوْهْ! إِذَنْ مَتَى يُغَادِرُ الآنَ؟', modelEn: 'Oh! So when does it leave now?' },
      { ex: 'فِي السَّاعَةِ الثَّانِيَةِ وَالنِّصْفِ.', task: 'Ask about the platform.', plan: 'اسْأَلْ ← مِنْ أَيِّ رَصِيفٍ؟', model: 'وَمِنْ أَيِّ رَصِيفٍ، مِنْ فَضْلِكَ؟', modelEn: 'And from which platform, please?' },
      { ex: 'مِنَ الرَّصِيفِ رَقْمِ سِتَّةٍ.', task: 'Ask how long the journey is.', plan: 'اسْأَلْ ← كَمْ تَسْتَغْرِقُ الرِّحْلَةُ؟', model: 'شُكْرًا. كَمْ تَسْتَغْرِقُ الرِّحْلَةُ؟', modelEn: 'Thanks. How long does the journey take?' },
    ],
    girl: 'أُسَاعِدُكِ',
    notes: 'Language: yughādiru · yataʾakhkharu · min ayyi raṣīfin · tastaghriqu + duration.',
  },
  talk: {
    title: '30 seconds: my journey plan', ar: 'خُطَّةُ رِحْلَتِي',
    text: 'Describe a train or bus journey in 30 seconds: where to, the ticket, the departure time, the platform, how long it takes and when you arrive.',
    routes: {
      core: 'Destination, ticket, departure time.',
      develop: 'Add the platform and تَسْتَغْرِقُ الرِّحْلَةُ …',
      stretch: 'Add a delay (يَتَأَخَّرُ …) and what you will do while you wait.',
    },
  },
  builder: [
    { en: 'The train leaves at eight o’clock.', cols: [['يُغَادِرُ', 'تُغَادِرُ'], ['القِطَارُ', 'القِطَارَ'], ['فِي السَّاعَةِ الثَّامِنَةِ.', 'فِي ثَمَانِيَةٍ.']], key: [0, 0, 0], why: 'قِطَارٌ (m.) → يُغَادِرُ; clock time = feminine ordinal.' },
    { en: 'The journey takes two hours.', cols: [['تَسْتَغْرِقُ', 'يَسْتَغْرِقُ'], ['الرِّحْلَةُ', 'الرِّحْلَةَ'], ['سَاعَتَيْنِ.', 'سَاعَتَانِ.']], key: [0, 0, 0], why: 'رِحْلَةٌ (f.) → تَسْتَغْرِقُ; two hours as object = سَاعَتَيْنِ.' },
    { en: 'I want a single ticket to York.', cols: [['أُرِيدُ', 'يُرِيدُ'], ['تَذْكِرَةً مُفْرَدَةً', 'تَذْكِرَةٌ مُفْرَدَةٌ'], ['إِلَى يُورْكَ.', 'فِي يُورْكَ.']], key: [0, 0, 0], why: 'Object after أُرِيدُ → -atan; to = إِلَى.' },
  ],
  errors: [
    { wrong: 'الرِّحْلَةُ يَسْتَغْرِقُ سَاعَةً.', hint: 'رِحْلَةٌ is feminine.', right: 'الرِّحْلَةُ تَسْتَغْرِقُ سَاعَةً.', why: 'Feminine subject → تَسْتَغْرِقُ.' },
    { wrong: 'تَسْتَغْرِقُ الرِّحْلَةُ اثْنَانِ سَاعَةٍ.', hint: 'Two hours → one word.', right: 'تَسْتَغْرِقُ الرِّحْلَةُ سَاعَتَيْنِ.', why: 'Use the dual: سَاعَتَيْنِ.' },
    { wrong: 'مِنْ أَيِّ رَصِيفٌ؟', hint: 'After أَيِّ …', right: 'مِنْ أَيِّ رَصِيفٍ؟', why: 'أَيِّ + noun in genitive: رَصِيفٍ.' },
  ],
  task: {
    title: 'A message about the journey plan', ar: 'رِسَالَةٌ عَنْ خُطَّةِ الرِّحْلَةِ',
    text: 'Write a message (about 40–60 words) to a friend who is meeting you. Include: • where you are travelling to and how • the ticket you bought and its price • the departure time and platform • how long the journey takes and when you arrive • a delay, if there is one.',
    phrases: [['سَأُسَافِرُ بِالقِطَارِ إِلَى …', 'I will travel by train to …'], ['اشْتَرَيْتُ تَذْكِرَةَ … بِعِشْرِينَ جُنَيْهًا', 'I bought a … ticket for £20'], ['يُغَادِرُ القِطَارُ فِي … مِنَ الرَّصِيفِ …', 'the train leaves at … from platform …'], ['تَسْتَغْرِقُ الرِّحْلَةُ … ، وَأَصِلُ فِي …', 'the journey takes …, and I arrive at …']],
    coreFrames: [
      { ar: 'سَأُسَافِرُ بِالقِطَارِ إِلَى ______ .', en: 'I will travel by train to …' },
      { ar: 'اشْتَرَيْتُ تَذْكِرَةَ ______ ، وَسِعْرُهَا ______ .', en: 'I bought a … ticket, and it cost …' },
      { ar: 'يُغَادِرُ القِطَارُ فِي السَّاعَةِ ______ .', en: 'The train leaves at …' },
      { ar: 'تَسْتَغْرِقُ الرِّحْلَةُ ______ .', en: 'The journey takes …' },
    ],
    developFrames: [
      { ar: 'يُغَادِرُ مِنَ الرَّصِيفِ رَقْمِ ______ ، وَأَصِلُ فِي ______ .', en: 'It leaves from platform …, and I arrive at …' },
      { ar: 'لِلْأَسَفِ يَتَأَخَّرُ القِطَارُ ______ ، لِذٰلِكَ ______ .', en: 'Unfortunately the train is … late, so …' },
    ],
    bank: ['تَذْكِرَةٌ مُفْرَدَةٌ', 'تَذْكِرَةُ ذَهَابٍ وَإِيَابٍ', 'يُغَادِرُ · يَصِلُ', 'رَصِيفٌ', 'تَسْتَغْرِقُ', 'سَاعَةٌ · سَاعَتَانِ · سَاعَاتٌ', 'يَتَأَخَّرُ · فِي الوَقْتِ', 'شُبَّاكُ التَّذَاكِرِ'],
    model: {
      text: 'مَرْحَبًا يَا عُمَرُ! سَأُسَافِرُ بِالقِطَارِ إِلَى لَنْدَنَ يَوْمَ السَّبْتِ. اشْتَرَيْتُ تَذْكِرَةَ ذَهَابٍ وَإِيَابٍ، وَسِعْرُهَا أَرْبَعُونَ جُنَيْهًا. يُغَادِرُ القِطَارُ فِي السَّاعَةِ الثَّامِنَةِ مِنَ الرَّصِيفِ رَقْمِ ثَلَاثَةٍ. تَسْتَغْرِقُ الرِّحْلَةُ سَاعَتَيْنِ وَنِصْفًا، لِذٰلِكَ أَصِلُ فِي العَاشِرَةِ وَالنِّصْفِ. إِذَا تَأَخَّرَ القِطَارُ، سَأُرْسِلُ لَكَ رِسَالَةً. إِلَى اللِّقَاءِ!',
      en: '“Hi Omar! I will travel by train to London on Saturday. I bought a return ticket, and it cost forty pounds. The train leaves at eight from platform three. The journey takes two and a half hours, so I arrive at half past ten. If the train is late, I will send you a message. See you!”',
      find: ['تَذْكِرَةَ ذَهَابٍ وَإِيَابٍ', 'يُغَادِرُ القِطَارُ فِي', 'تَسْتَغْرِقُ الرِّحْلَةُ', 'إِذَا تَأَخَّرَ'],
    },
  },
  checkCore: 'give the ticket, departure time and platform?',
  checkDevelop: 'use تَسْتَغْرِقُ + duration correctly (dual / plural)?',
});
