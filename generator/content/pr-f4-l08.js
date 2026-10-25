'use strict';
/* Practice Room · F4-L08 · Reading school texts and timetables. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f4-l08',
  arShort: 'نُصُوصٌ مَدْرَسِيَّةٌ',
  grammar: 'question words as clues (matā → a time · ayna → a place · kam → a number · man → a person); scanning day → time → subject; notice language (yurjā · ʿalā jamīʿi al-ṭullābi …)',
  focus: 'Students run their own reading-into-speaking-and-writing practice: say the text-type words, read a school notice aloud together, answer scanning questions about it, do a role-play card asking the office about a notice, give a 30-second summary, then build, fix and write their own school notice.',
  words1: 'Text types at school', words2: 'Question words as clues',
  addWords: [['مَتَى؟ ← وَقْتٌ', 'when? → a time'], ['أَيْنَ؟ ← مَكَانٌ', 'where? → a place'], ['كَمْ؟ ← رَقْمٌ', 'how many? → a number'], ['مَنْ؟ ← شَخْصٌ', 'who? → a person'], ['يُرْجَى …', 'please … (on notices)'], ['عَلَى جَمِيعِ الطُّلَّابِ', 'all students must …']],
  dialogue: {
    title: 'Read the notice aloud together', ar: 'إِعْلَانٌ مَدْرَسِيٌّ',
    lines: [
      ['1', 'إِعْلَانٌ: رِحْلَةٌ إِلَى المَتْحَفِ', 'Notice: a trip to the museum'],
      ['2', 'يَوْمَ الخَمِيسِ القَادِمِ، يَزُورُ الصَّفُّ الثَّامِنُ مَتْحَفَ العُلُومِ.', 'Next Thursday, Year 8 will visit the Science Museum.'],
      ['3', 'تَخْرُجُ الحَافِلَةُ مِنْ أَمَامِ المَدْرَسَةِ فِي السَّاعَةِ التَّاسِعَةِ.', 'The coach leaves from in front of the school at nine o’clock.'],
      ['4', 'ثَمَنُ التَّذْكِرَةِ خَمْسَةُ جُنَيْهَاتٍ.', 'The ticket costs five pounds.'],
      ['5', 'عَلَى جَمِيعِ الطُّلَّابِ أَنْ يَلْبَسُوا اللِّبَاسَ المَدْرَسِيَّ وَيُحْضِرُوا غَدَاءً.', 'All students must wear uniform and bring a lunch.'],
      ['6', 'يُرْجَى تَسْلِيمُ الاسْتِمَارَةِ قَبْلَ يَوْمِ الإِثْنَيْنِ.', 'Please hand in the form before Monday.'],
    ],
    foot: 'Take turns reading one line each, aloud and clearly. Then the Leader asks the questions on the next slide — the Speaker finds the evidence WITHOUT reading the English.',
    notes: 'The “dialogue” step is a shared read-aloud of a short notice. Step 3 then trains scanning: question word → the kind of answer → the line with the evidence.',
  },
  questions: [
    { q: 'مَتَى الرِّحْلَةُ؟', en: 'When is the trip?', start: 'يَوْمَ …', more: '… السَّطْرُ رَقْمُ …' },
    { q: 'أَيْنَ يَذْهَبُ الطُّلَّابُ؟', en: 'Where are the students going?', start: 'إِلَى …', more: '… فِي السَّطْرِ …' },
    { q: 'مِنْ أَيْنَ تَخْرُجُ الحَافِلَةُ؟ وَمَتَى؟', en: 'Where does the coach leave from, and when?', start: 'مِنْ … ، فِي السَّاعَةِ …', more: '…' },
    { q: 'كَمْ ثَمَنُ التَّذْكِرَةِ؟', en: 'How much is the ticket?', start: 'ثَمَنُهَا …', more: '… جُنَيْهَاتٍ' },
    { q: 'مَاذَا يَجِبُ عَلَى الطُّلَّابِ أَنْ يَفْعَلُوا؟', en: 'What must the students do?', start: 'يَجِبُ أَنْ يَلْبَسُوا … وَ…', more: '… وَيُسَلِّمُوا … قَبْلَ …' },
  ],
  qTitle: 'Scan for the evidence: question word → answer type → line',
  card: {
    title: 'Role-play card — asking the school office about the trip', ar: 'فِي مَكْتَبِ المَدْرَسَةِ', you: 'a student', them: 'the school secretary',
    tasks: [
      { ex: 'صَبَاحَ الخَيْرِ! كَيْفَ أُسَاعِدُكَ؟', task: 'Say you read the notice.', plan: 'كَيْفَ ← قَرَأْتُ الإِعْلَانَ عَنْ …', model: 'صَبَاحَ النُّورِ! قَرَأْتُ الإِعْلَانَ عَنِ الرِّحْلَةِ إِلَى المَتْحَفِ.', modelEn: 'Good morning! I read the notice about the trip to the museum.' },
      { ex: 'نَعَمْ. هَلْ عِنْدَكَ سُؤَالٌ؟', task: 'Ask when you come back.', plan: 'سُؤَالٌ ← مَتَى … ؟', model: 'نَعَمْ، مَتَى نَرْجِعُ إِلَى المَدْرَسَةِ؟', modelEn: 'Yes, when do we come back to school?' },
      { ex: 'فِي السَّاعَةِ الثَّالِثَةِ.', task: 'Ask about the price / payment.', plan: 'اسْأَلْ ← هَلْ يُمْكِنُ أَنْ أَدْفَعَ …؟', model: 'شُكْرًا. هَلْ يُمْكِنُ أَنْ أَدْفَعَ الخَمْسَةَ جُنَيْهَاتٍ الآنَ؟', modelEn: 'Thanks. Can I pay the five pounds now?' },
      { ex: 'طَبْعًا. وَالاسْتِمَارَةُ؟', task: 'Say when you will bring it.', plan: 'الاسْتِمَارَةُ ← سَأُحْضِرُهَا يَوْمَ …', model: 'سَأُحْضِرُهَا غَدًا، قَبْلَ يَوْمِ الإِثْنَيْنِ.', modelEn: 'I will bring it tomorrow, before Monday.' },
    ],
    girl: 'أُسَاعِدُكِ · عِنْدَكِ',
    notes: 'Turning reading into speaking: refer to the notice, ask for missing information, use the facts in the text.',
  },
  talk: {
    title: '30 seconds: summarise the notice', ar: 'لَخِّصِ الإِعْلَانَ',
    text: 'Without looking, summarise the museum notice in 30 seconds: what, when, where from, how much, and what students must do.',
    routes: {
      core: 'Three facts: when, where, how much.',
      develop: 'Five facts, including the time and the rules.',
      stretch: 'All the facts + your opinion: هَلْ تُرِيدُ أَنْ تَذْهَبَ؟ لِمَاذَا؟',
    },
  },
  builder: [
    { en: 'The trip is next Thursday.', cols: [['الرِّحْلَةُ', 'الرِّحْلَةَ'], ['يَوْمَ الخَمِيسِ', 'فِي خَمِيسٍ'], ['القَادِمِ.', 'القَادِمَةِ.']], key: [0, 0, 0], why: 'On + day = يَوْمَ …; القَادِمِ agrees with يَوْمٌ (m.).' },
    { en: 'All students must bring a lunch.', cols: [['عَلَى جَمِيعِ الطُّلَّابِ', 'جَمِيعُ عَلَى الطُّلَّابِ'], ['أَنْ يُحْضِرُوا', 'أَنْ يُحْضِرُونَ'], ['غَدَاءً.', 'غَدَاءٌ.']], key: [0, 0, 0], why: 'Notice language: عَلَى … أَنْ + verb (they → -ū, no nūn after أَنْ).' },
    { en: 'Please hand in the form before Monday.', cols: [['يُرْجَى', 'نَرْجُو أَنَا'], ['تَسْلِيمُ الاسْتِمَارَةِ', 'تَسْلِيمَ الاسْتِمَارَةُ'], ['قَبْلَ يَوْمِ الإِثْنَيْنِ.', 'بَعْدَ يَوْمُ الإِثْنَيْنِ.']], key: [0, 0, 0], why: 'Please (notice) = يُرْجَى + verbal noun; before = قَبْلَ + genitive.' },
  ],
  errors: [
    { wrong: 'مَتَى الرِّحْلَةُ؟ — فِي المَتْحَفِ.', hint: 'مَتَى asks for …?', right: 'مَتَى الرِّحْلَةُ؟ — يَوْمَ الخَمِيسِ.', why: 'مَتَى → a time or a day, not a place.' },
    { wrong: 'كَمْ ثَمَنُ التَّذْكِرَةِ؟ — فِي السَّاعَةِ التَّاسِعَةِ.', hint: 'Price, not time.', right: 'ثَمَنُهَا خَمْسَةُ جُنَيْهَاتٍ.', why: 'كَمْ ثَمَنُ → a price.' },
    { wrong: 'الحَافِلَةُ يَخْرُجُ فِي التَّاسِعَةِ.', hint: 'حَافِلَةٌ is feminine.', right: 'الحَافِلَةُ تَخْرُجُ فِي التَّاسِعَةِ.', why: 'Feminine subject → تَخْرُجُ.' },
  ],
  task: {
    title: 'Write a school notice', ar: 'أَكْتُبُ إِعْلَانًا مَدْرَسِيًّا',
    text: 'Write your own school notice (about 40–60 words) for an event (a sports day, a trip, a club or an Eid party). Include: • a title • what and when (day + time) • where • the price (or free) • two things students must do • a “please” line with a deadline.',
    phrases: [['إِعْلَانٌ: …', 'notice: …'], ['يَوْمَ … فِي السَّاعَةِ …', 'on … at …'], ['عَلَى جَمِيعِ الطُّلَّابِ أَنْ …', 'all students must …'], ['يُرْجَى … قَبْلَ …', 'please … before …']],
    coreFrames: [
      { ar: 'إِعْلَانٌ: ______', en: 'Notice: …' },
      { ar: 'يَوْمَ ______ فِي السَّاعَةِ ______ .', en: 'On … at …' },
      { ar: 'المَكَانُ: ______ .', en: 'Place: …' },
      { ar: 'الثَّمَنُ: ______ .', en: 'Price: …' },
    ],
    developFrames: [
      { ar: 'عَلَى جَمِيعِ الطُّلَّابِ أَنْ ______ وَ ______ .', en: 'All students must … and …' },
      { ar: 'يُرْجَى ______ قَبْلَ ______ .', en: 'Please … before …' },
    ],
    bank: ['إِعْلَانٌ', 'رِحْلَةٌ · حَفْلَةٌ', 'يَوْمَ … فِي السَّاعَةِ …', 'مِنْ أَمَامِ المَدْرَسَةِ', 'ثَمَنُ التَّذْكِرَةِ · مَجَّانًا', 'عَلَى جَمِيعِ الطُّلَّابِ أَنْ', 'يُرْجَى', 'قَبْلَ'],
    model: {
      text: 'إِعْلَانٌ: حَفْلَةُ العِيدِ. يَوْمَ الجُمُعَةِ القَادِمِ، فِي السَّاعَةِ الثَّانِيَةِ، تُقَامُ حَفْلَةُ العِيدِ فِي قَاعَةِ المَدْرَسَةِ. الدُّخُولُ مَجَّانًا. سَيَكُونُ هُنَاكَ طَعَامٌ وَمُسَابَقَاتٌ وَهَدَايَا. عَلَى جَمِيعِ الطُّلَّابِ أَنْ يَلْبَسُوا مَلَابِسَ العِيدِ، وَأَنْ يُحْضِرُوا طَبَقًا صَغِيرًا. يُرْجَى كِتَابَةُ اسْمِكَ عِنْدَ المُعَلِّمَةِ قَبْلَ يَوْمِ الأَرْبِعَاءِ.',
      en: '“Notice: the Eid party. Next Friday at two o’clock the Eid party will take place in the school hall. Entry is free. There will be food, competitions and presents. All students must wear Eid clothes and bring a small dish. Please give your name to the teacher before Wednesday.”',
      find: ['يَوْمَ الجُمُعَةِ القَادِمِ', 'الدُّخُولُ مَجَّانًا', 'عَلَى جَمِيعِ الطُّلَّابِ أَنْ', 'يُرْجَى'],
    },
  },
  checkCore: 'give the what, when, where and price clearly?',
  checkDevelop: 'use notice language (عَلَى جَمِيعِ الطُّلَّابِ أَنْ … · يُرْجَى …)?',
});
