'use strict';
/* Guided Practice Rooms · AT-A-L02 · Calendar, Dates and the School Week. New tasks. Teacher-made. */
const XP = require('./xp-a-l02');

const base = { topic: 'A', n: 2, short: 'Calendar and the School Week', arShort: 'التَّقْوِيمُ وَالأُسْبُوعُ الدِّرَاسِيُّ', fileTitle: 'Calendar_Dates_and_the_School_Week', title: 'Calendar, Dates and the School Week', icon: 'FaCalendarDays', grammar: 'days, months and ordinal dates (al-khāmis min māyū); clock times; prepositions of time (fī, yawma, qabla, baʿda)' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up, the answer ladder, two new role plays (booking a dentist appointment, planning a school trip), a topic conversation with A-R-E-T, and a one-minute talk about their timetable.',
  words: XP.speak.words,
  words1: { title: 'Time words for the week', ar: 'الوَقْتُ وَالأُسْبُوعُ' },
  words2: { title: 'Dates, order and appointments', ar: 'التَّوَارِيخُ وَالمَوَاعِيدُ' },
  ladder: {
    q: 'مَا يَوْمُكَ المُفَضَّلُ فِي الأُسْبُوعِ؟', qEn: 'What is your favourite day of the week?',
    rungs: [
      { ar: 'يَوْمِي المُفَضَّلُ هُوَ يَوْمُ الخَمِيسِ.', en: 'My favourite day is Thursday.' },
      { ar: 'يَوْمِي المُفَضَّلُ هُوَ يَوْمُ الخَمِيسِ، لِأَنَّ عِنْدِي حِصَّةَ رِيَاضَةٍ.', en: '… because I have a PE lesson.' },
      { ar: '… وَتَبْدَأُ الحِصَّةُ فِي السَّاعَةِ الوَاحِدَةِ، وَنَلْعَبُ كُرَةَ السَّلَّةِ.', en: '… the lesson starts at one, and we play basketball.' },
      { ar: '… وَيَوْمَ الخَمِيسِ القَادِمِ سَنَلْعَبُ مُبَارَاةً، فَالخَمِيسُ فِي رَأْيِي أَجْمَلُ يَوْمٍ!', en: '… next Thursday we will play a match — in my opinion Thursday is the best day!' },
    ],
  },
  ladderQs: [
    { q: 'كَمْ حِصَّةً عِنْدَكَ فِي اليَوْمِ؟', l1: 'عِنْدِي … حِصَصٍ', l2: '… وَأَصْعَبُهَا …', l3: '… يَوْمَ … / صَبَاحًا' },
    { q: 'مَتَى عِيدُ مِيلَادِكَ؟', l1: 'عِيدُ مِيلَادِي فِي …', l2: '… وَأُحِبُّهُ لِأَنَّ …', l3: '… السَّنَةَ المَاضِيَةَ …' },
    { q: 'مَا الشَّهْرُ الَّذِي تُحِبُّهُ؟', l1: 'أُحِبُّ شَهْرَ …', l2: '… لِأَنَّ …', l3: '… فِي هٰذَا الشَّهْرِ سَوْفَ …' },
    { q: 'مَتَى تَبْدَأُ العُطْلَةُ؟', l1: 'تَبْدَأُ العُطْلَةُ فِي …', l2: '… وَأَنَا سَعِيدٌ لِأَنَّ …', l3: '… وَفِي العُطْلَةِ سَوْفَ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a dentist’s reception desk (on the phone)', title: 'Role play 1 — Booking a dentist appointment', ar: 'مَوْعِدٌ عِنْدَ طَبِيبِ الأَسْنَانِ', you: 'a patient', them: 'the receptionist',
      tasks: [
        { ex: 'عِيَادَةُ الأَسْنَانِ، صَبَاحَ الخَيْرِ. كَيْفَ أُسَاعِدُكَ؟', task: 'Say you want an appointment.', plan: 'كَيْفَ ← أُرِيدُ مَوْعِدًا …', model: 'صَبَاحَ النُّورِ، أُرِيدُ مَوْعِدًا مِنْ فَضْلِكِ.', modelEn: 'Good morning, I would like an appointment, please.' },
        { ex: 'أَيَّ يَوْمٍ يُنَاسِبُكَ؟', task: 'Say which day suits you.', plan: 'أَيَّ يَوْمٍ ← يَوْمُ … يُنَاسِبُنِي', model: 'يَوْمُ الأَرْبِعَاءِ يُنَاسِبُنِي.', modelEn: 'Wednesday suits me.' },
        { ex: 'فِي أَيِّ سَاعَةٍ؟', task: 'Give a time after school.', plan: 'أَيِّ سَاعَةٍ ← فِي السَّاعَةِ …', model: 'فِي السَّاعَةِ الرَّابِعَةِ، بَعْدَ المَدْرَسَةِ.', modelEn: 'At four o’clock, after school.' },
        { ex: 'مَا تَارِيخُ مِيلَادِكَ؟', task: 'Give your date of birth.', plan: 'مَا ← وُلِدْتُ فِي … مِنْ …', model: 'وُلِدْتُ فِي العَاشِرِ مِنْ نُوفَمْبِرَ.', modelEn: 'I was born on the tenth of November.' },
        { unexpected: true, ex: 'هَلْ عِنْدَكَ أَلَمٌ الآنَ؟', task: 'Answer the unexpected question.', plan: 'هَلْ ← نَعَمْ / لَا + جُمْلَةٌ كَامِلَةٌ', model: 'لَا، لَيْسَ عِنْدِي أَلَمٌ، هٰذَا فَحْصٌ عَادِيٌّ فَقَطْ.', modelEn: 'No, I have no pain — it is just a normal check-up.' },
      ],
      girl: 'أُسَاعِدُكِ · يُنَاسِبُكِ · مِيلَادِكِ · عِنْدَكِ',
      notes: 'Language: yunāsibunī (suits me) · fī as-sāʿati ar-rābiʿati · ordinal dates: al-ʿāshiri min nūfambir · laysa ʿindī (I don’t have). The receptionist is a woman, so the Speaker says مِنْ فَضْلِكِ.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a student-council meeting', title: 'Role play 2 — Planning the Year 10 trip', ar: 'نُخَطِّطُ لِرِحْلَةٍ مَدْرَسِيَّةٍ', you: 'a student-council member', them: 'the head of year',
      tasks: [
        { ex: 'أَيُّ شَهْرٍ أَفْضَلُ لِلرِّحْلَةِ فِي رَأْيِكَ؟', task: 'Suggest a month, with a reason.', model: 'أَقْتَرِحُ شَهْرَ مَايُو، لِأَنَّ الطَّقْسَ يَكُونُ جَمِيلًا وَالامْتِحَانَاتُ لَمْ تَبْدَأْ بَعْدُ.', modelEn: 'I suggest May, because the weather is nice and exams have not started yet.' },
        { ex: 'وَأَيُّ يَوْمٍ فِي الأُسْبُوعِ؟', task: 'Suggest a day and compare with another day.', model: 'يَوْمُ الجُمُعَةِ أَفْضَلُ مِنْ يَوْمِ الاثْنَيْنِ، لِأَنَّهُ آخِرُ يَوْمٍ فِي الأُسْبُوعِ الدِّرَاسِيِّ.', modelEn: 'Friday is better than Monday, because it is the last day of the school week.' },
        { ex: 'سَتَكُونُ الرِّحْلَةُ إِلَى المُتْحَفِ أَوْ إِلَى الشَّاطِئِ.', task: 'ASK about the cost or the time.', model: 'كَمْ سَتَكُونُ التَّكْلِفَةُ؟ وَمَتَى سَنَرْجِعُ إِلَى المَدْرَسَةِ؟', modelEn: 'How much will it cost? And when will we come back to school?' },
        { ex: 'هَلْ ذَهَبْتَ فِي رِحْلَةٍ مَدْرَسِيَّةٍ مِنْ قَبْلُ؟', task: 'Describe a past trip (date + what happened).', model: 'نَعَمْ، فِي الخَامِسِ مِنْ مَارِسَ الْمَاضِي ذَهَبْنَا إِلَى حَدِيقَةِ الحَيَوَانَاتِ، وَرَجَعْنَا فِي السَّاعَةِ الرَّابِعَةِ.', modelEn: 'Yes, on 5 March last year we went to the zoo and came back at four.' },
        { unexpected: true, ex: 'وَمَاذَا نَفْعَلُ إِذَا كَانَ الطَّقْسُ سَيِّئًا؟', task: 'Answer the unexpected question (if … then).', model: 'إِذَا كَانَ الطَّقْسُ سَيِّئًا، فَسَنَزُورُ المُتْحَفَ بَدَلًا مِنَ الشَّاطِئِ.', modelEn: 'If the weather is bad, we will visit the museum instead of the beach.' },
      ],
      girl: 'رَأْيِكِ · ذَهَبْتِ',
      notes: 'Language: aqtariḥu (I suggest) · comparison afḍalu min · ordinal dates · past narrative (dhahabnā, rajaʿnā) · idhā … fa-sa- (real condition).',
    },
  ],
  convAr: 'أُسْبُوعِي المَدْرَسِيُّ',
  conv: [
    { route: 'Core', q: 'مَا أَوَّلُ حِصَّةٍ يَوْمَ الاثْنَيْنِ؟', en: 'What is the first lesson on Monday?', push: 'هَلْ تُحِبُّهَا؟' },
    { route: 'Core', q: 'كَمْ يَوْمًا تَذْهَبُ إِلَى المَدْرَسَةِ؟', en: 'How many days do you go to school?', push: 'وَأَيُّ يَوْمٍ أَصْعَبُ؟' },
    { route: 'Develop', q: 'مَاذَا فَعَلْتَ يَوْمَ الأَحَدِ المَاضِي؟', en: 'What did you do last Sunday?', push: 'وَفِي أَيِّ سَاعَةٍ؟' },
    { route: 'Develop', q: 'مَا التَّارِيخُ المُهِمُّ لَكَ هٰذِهِ السَّنَةَ؟', en: 'Which date is important to you this year?', push: 'لِمَاذَا؟' },
    { route: 'Stretch', q: 'هَلْ يَجِبُ أَنْ يَبْدَأَ اليَوْمُ الدِّرَاسِيُّ مُتَأَخِّرًا؟', en: 'Should the school day start later?', push: 'لِمَاذَا فِي رَأْيِكَ؟' },
    { route: 'Stretch', q: 'لَوْ كَانَ أُسْبُوعُ المَدْرَسَةِ أَرْبَعَةَ أَيَّامٍ، مَاذَا تَفْعَلُ فِي اليَوْمِ الخَامِسِ؟', en: 'If the school week were four days, what would you do on day five?', push: 'وَلِمَاذَا؟' },
  ],
  convModels: [
    { q: 'كَمْ يَوْمًا تَذْهَبُ إِلَى المَدْرَسَةِ؟', model: 'أَذْهَبُ إِلَى المَدْرَسَةِ خَمْسَةَ أَيَّامٍ، مِنَ الاثْنَيْنِ إِلَى الجُمُعَةِ، لٰكِنَّ يَوْمَ الثُّلَاثَاءِ أَصْعَبُ، لِأَنَّ عِنْدِي حِصَّتَيْ رِيَاضِيَّاتٍ؛ وَالأُسْبُوعَ القَادِمَ سَيَكُونُ عِنْدَنَا امْتِحَانٌ.', modelEn: 'A: five days, Monday to Friday · R/E: Tuesday is hardest — two maths lessons · T: next week we will have an exam.' },
    { q: 'مَا التَّارِيخُ المُهِمُّ لَكَ هٰذِهِ السَّنَةَ؟', model: 'أَهَمُّ تَارِيخٍ هُوَ العِشْرُونَ مِنْ يُونْيُو، لِأَنَّهُ آخِرُ يَوْمٍ فِي الامْتِحَانَاتِ؛ فِي ذٰلِكَ اليَوْمِ سَنَحْتَفِلُ مَعَ أَصْدِقَائِي فِي مَطْعَمٍ.', modelEn: 'A: 20 June · R: the last day of exams · T/E: that day we will celebrate with my friends in a restaurant.' },
    { q: 'هَلْ يَجِبُ أَنْ يَبْدَأَ اليَوْمُ الدِّرَاسِيُّ مُتَأَخِّرًا؟', model: 'فِي رَأْيِي نَعَمْ، لِأَنَّ الطُّلَّابَ يَكُونُونَ نَاعِسِينَ فِي الصَّبَاحِ؛ مَثَلًا أَنَا أَسْتَيْقِظُ فِي السَّادِسَةِ، وَلَوْ بَدَأَتِ المَدْرَسَةُ فِي التَّاسِعَةِ، لَكُنْتُ أَنْشَطَ.', modelEn: 'Opinion: yes · R: students are sleepy in the morning · E: I wake at six · conditional: if school started at nine, I would be more energetic.' },
  ],
  talk: {
    title: 'One minute: my timetable', ar: 'جَدْوَلِي الدِّرَاسِيُّ',
    text: 'Talk for one minute about your school week: which days you have which lessons, start and finish times, your favourite and least favourite day — and an important date coming up.',
    routes: {
      core: '30 seconds: three days, three lessons and two times.',
      develop: '60 seconds: add your favourite day with a reason, and what you did last Friday.',
      stretch: '90 seconds: compare two days, give an opinion, and talk about a coming date with sa-.',
    },
    phrases: [['يَوْمَ الاثْنَيْنِ عِنْدِي …', 'on Monday I have …'], ['تَبْدَأُ الحِصَّةُ فِي …', 'the lesson starts at …'], ['أَصْعَبُ يَوْمٍ هُوَ …', 'the hardest day is …'], ['فِي … مِنْ … سَوْفَ …', 'on … of … I will …']],
  },
  checkCore: 'said days, dates and times correctly',
  checkDevelop: 'used prepositions of time (يَوْمَ · فِي · قَبْلَ · بَعْدَ) and an ordinal date',
};
speak.talk.phrases[3] = ['فِي … مِنْ … سَوْفَ …', 'on … of … I will …'];

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up, decoding a new Q2 task (an invitation and arrangements), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Library: book a study room', ar: 'حَجْزُ غُرْفَةِ دِرَاسَةٍ فِي المَكْتَبَةِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'التَّارِيخُ', en: 'Date', tip: 'An ordinal date: الثَّالِثُ مِنْ أَبْرِيلَ' },
      { core: true, ar: 'اليَوْمُ', en: 'Day', tip: 'يَوْمُ السَّبْتِ' },
      { core: true, ar: 'مِنَ السَّاعَةِ … إِلَى السَّاعَةِ …', en: 'From … to … (time)', tip: 'مِنَ العَاشِرَةِ إِلَى الثَّانِيَةَ عَشْرَةَ' },
      { core: true, ar: 'عَدَدُ الطُّلَّابِ', en: 'Number of students', tip: 'A number: ثَلَاثَةُ طُلَّابٍ' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تَحْتَاجُ الغُرْفَةَ؟', en: 'ONE sentence: why do you need the room?', tip: 'نَحْتَاجُ الغُرْفَةَ لِأَنَّ …' },
    ],
  },
  Q2: {
    title: 'Question 2: an invitation for Saturday', ar: 'دَعْوَةٌ لِيَوْمِ السَّبْتِ',
    task: 'Your friend wants to meet next weekend. Write an email in Arabic of about 80–90 words. You must include: • which day and time suit you, and why • what you did last weekend • what you have planned for the rest of the week • a suggestion of where to meet.',
    phrases: [['يُنَاسِبُنِي يَوْمُ … لِأَنَّ …', '… suits me because …'], ['فِي نِهَايَةِ الأُسْبُوعِ المَاضِي …', 'last weekend …'], ['يَوْمَ … عِنْدِي …', 'on … I have …'], ['مَا رَأْيُكَ أَنْ نَلْتَقِيَ فِي …؟', 'how about meeting at …?']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنْ مَوْعِدٍ لِلِقَاءٍ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend to arrange to meet (80–90 words).'],
      ['1', 'أَيُّ يَوْمٍ وَأَيُّ سَاعَةٍ تُنَاسِبُكَ؟ وَلِمَاذَا؟', 'Which day and time suit you, and why'],
      ['2', 'مَاذَا فَعَلْتَ فِي نِهَايَةِ الأُسْبُوعِ المَاضِي؟', 'What you did last weekend'],
      ['3', 'مَا خِطَطُكَ لِبَقِيَّةِ الأُسْبُوعِ؟', 'Your plans for the rest of the week'],
      ['4', 'اقْتَرِحْ مَكَانًا لِلِقَاءٍ.', 'Suggest a place to meet'],
    ],
    decode: ['an email to a FRIEND → informal greeting and closing', 'أَيُّ يَوْمٍ … وَلِمَاذَا → a day + time + a reason (لِأَنَّ)', 'مَاذَا فَعَلْتَ → PAST', 'خِطَطُكَ → FUTURE (sa- / sawfa) + days', 'اقْتَرِحْ → a suggestion: مَا رَأْيُكَ أَنْ …؟'],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', en: 'Hello …, how are you?' },
      { ar: 'يُنَاسِبُنِي يَوْمُ ______ فِي السَّاعَةِ ______ .', en: '1 · … at … suits me.' },
      { ar: 'فِي نِهَايَةِ الأُسْبُوعِ المَاضِي ______ .', en: '2 · Last weekend I …' },
      { ar: 'يَوْمَ ______ سَأَذْهَبُ إِلَى ______ .', en: '3 · On … I will go to …' },
      { ar: 'مَا رَأْيُكَ أَنْ نَلْتَقِيَ فِي ______ ؟', en: '4 · How about meeting at …?' },
      { ar: 'إِلَى اللِّقَاءِ.', en: 'See you.' },
    ],
    developFrames: [
      { ar: 'يَوْمُ ______ أَفْضَلُ مِنْ ______ ، لِأَنَّ ______ .', en: '1 · … is better than …, because …' },
      { ar: 'أَوَّلًا ______ ، ثُمَّ ______ .', en: '2 · First …, then …' },
      { ar: 'أُسْبُوعِي مَشْغُولٌ: يَوْمَ ______ عِنْدِي ______ .', en: '3 · My week is busy: on … I have …' },
      { ar: 'نَلْتَقِي أَمَامَ ______ ، وَبَعْدَ ذٰلِكَ ______ .', en: '4 · We meet outside …, and after that …' },
    ],
    bank: ['يَوْمُ السَّبْتِ', 'صَبَاحًا · مَسَاءً', 'فِي السَّاعَةِ …', 'مَوْعِدٌ', 'مَشْغُولٌ / مَشْغُولَةٌ', 'عُطْلَةٌ', 'قَبْلَ · بَعْدَ', 'مَرْكَزُ المَدِينَةِ'],
    model: {
      text: `مَرْحَبًا يَا رِيمُ،
شُكْرًا عَلَى رِسَالَتِكِ! يُنَاسِبُنِي يَوْمُ السَّبْتِ فِي السَّاعَةِ الحَادِيَةَ عَشْرَةَ صَبَاحًا، لِأَنَّ عِنْدِي دَرْسَ سِبَاحَةٍ فِي التَّاسِعَةِ. فِي نِهَايَةِ الأُسْبُوعِ المَاضِي زُرْتُ جَدَّتِي فِي عِيدِ مِيلَادِهَا، وَأَكَلْنَا الكَعْكَةَ مَعًا، ثُمَّ لَعِبْتُ مَعَ أَبْنَاءِ عَمِّي فِي الحَدِيقَةِ حَتَّى المَسَاءِ. أُسْبُوعِي مَشْغُولٌ جِدًّا: يَوْمَ الثُّلَاثَاءِ عِنْدِي امْتِحَانُ عُلُومٍ، وَيَوْمَ الخَمِيسِ سَأَذْهَبُ إِلَى طَبِيبِ الأَسْنَانِ بَعْدَ المَدْرَسَةِ. مَا رَأْيُكِ أَنْ نَلْتَقِيَ أَمَامَ المَكْتَبَةِ العَامَّةِ؟ وَبَعْدَ ذٰلِكَ نَشْرَبُ عَصِيرًا فِي المَقْهَى القَرِيبِ، وَنَتَمَشَّى فِي الحَدِيقَةِ.
إِلَى اللِّقَاءِ،
مَرْيَمُ`,
      en: '“Hi Reem, thanks for your message! Saturday at eleven in the morning suits me, because I have a swimming lesson at nine. Last weekend I visited my grandmother on her birthday; we ate cake together, then I played with my cousins in the garden until the evening. My week is very busy: on Tuesday I have a science exam, and on Thursday I will go to the dentist after school. How about meeting outside the public library? After that we can have a juice in the café nearby and walk in the park. See you, Maryam.”',
      find: ['يُنَاسِبُنِي يَوْمُ السَّبْتِ', 'لِأَنَّ عِنْدِي', 'يَوْمَ الخَمِيسِ سَأَذْهَبُ', 'مَا رَأْيُكِ أَنْ نَلْتَقِيَ'],
    },
  },
  upgrade: [
    { ar: 'عِنْدِي امْتِحَانٌ.', en: 'I have an exam.' },
    { ar: 'عِنْدِي امْتِحَانُ رِيَاضِيَّاتٍ يَوْمَ الأَرْبِعَاءِ فِي السَّاعَةِ التَّاسِعَةِ.', en: '… a maths exam on Wednesday at nine.' },
    { ar: 'عِنْدِي امْتِحَانُ رِيَاضِيَّاتٍ يَوْمَ الأَرْبِعَاءِ، لِذٰلِكَ سَأُرَاجِعُ كُلَّ مَسَاءٍ.', en: '… so I will revise every evening.' },
    { ar: '… وَفِي رَأْيِي الرِّيَاضِيَّاتُ صَعْبَةٌ، لٰكِنِّي أُحِبُّ التَّحَدِّيَ!', en: '… in my opinion maths is hard, but I like a challenge!' },
  ],
  builder: [
    { en: 'The holiday starts on the first of July.', cols: [['تَبْدَأُ العُطْلَةُ', 'يَبْدَأُ العُطْلَةُ'], ['فِي الأَوَّلِ', 'فِي الوَاحِدِ'], ['مِنْ يُولْيُو', 'إِلَى يُولْيُو']], key: [0, 0, 0], why: 'العُطْلَةُ is feminine → تَبْدَأُ; dates use the ordinal: الأَوَّلِ مِنْ.' },
    { en: 'I have two lessons before lunch.', cols: [['عِنْدِي', 'عِنْدَكَ'], ['حِصَّتَانِ', 'حِصَّتَيْنِ'], ['قَبْلَ الغَدَاءِ', 'بَعْدَ الغَدَاءِ']], key: [0, 0, 0], why: 'Two lessons = the dual حِصَّتَانِ (subject of عِنْدِي).' },
    { en: 'Last week I went to the museum on Friday.', cols: [['فِي الأُسْبُوعِ المَاضِي', 'فِي الأُسْبُوعِ القَادِمِ'], ['ذَهَبْتُ إِلَى المُتْحَفِ', 'سَأَذْهَبُ إِلَى المُتْحَفِ'], ['يَوْمَ الجُمُعَةِ', 'يَوْمُ الجُمُعَةِ']], key: [0, 0, 0], why: 'Past time → past verb; “on Friday” = يَوْمَ الجُمُعَةِ.' },
  ],
  errors: [
    { wrong: 'وُلِدْتُ فِي الخَمْسَةِ مِنْ مَايُو.', hint: 'Dates use a special number.', right: 'وُلِدْتُ فِي الخَامِسِ مِنْ مَايُو.', why: 'Dates use the ordinal: الخَامِسِ (fifth), not خَمْسَة.' },
    { wrong: 'تَبْدَأُ المَدْرَسَةُ فِي السَّاعَةِ الثَّامِنُ.', hint: 'Look at the hour.', right: 'تَبْدَأُ المَدْرَسَةُ فِي السَّاعَةِ الثَّامِنَةِ.', why: 'السَّاعَة is feminine → الثَّامِنَةِ.' },
    { wrong: 'الأُسْبُوعُ القَادِمُ ذَهَبْتُ إِلَى الطَّبِيبِ.', hint: 'Which time? Which tense?', right: 'الأُسْبُوعَ القَادِمَ سَأَذْهَبُ إِلَى الطَّبِيبِ.', why: 'Next week → future: سَأَذْهَبُ.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a date I will never forget', ar: 'تَارِيخٌ لَا أَنْسَاهُ',
    task: 'Full Q3 title: “Important dates in my year”. Today write ONLY the past paragraph: one date you will never forget — what the date was, what happened, why it was special, and how you felt.',
    formula: [
      { ar: 'لَنْ أَنْسَى السَّابِعَ مِنْ سِبْتَمْبِرَ أَبَدًا.', en: 'T · I will never forget the seventh of September.' },
      { ar: 'كَانَ أَوَّلَ يَوْمٍ لِي فِي مَدْرَسَةٍ جَدِيدَةٍ.', en: 'D · It was my first day at a new school.' },
      { ar: 'كَانَ مُهِمًّا لِأَنِّي لَمْ أَعْرِفْ أَحَدًا.', en: 'R · It was important because I knew nobody.' },
      { ar: 'فِي النِّهَايَةِ شَعَرْتُ بِالفَرَحِ.', en: 'F · In the end I felt happy.' },
    ],
    phrases: [['لَنْ أَنْسَى … أَبَدًا', 'I will never forget …'], ['فِي ذٰلِكَ اليَوْمِ …', 'on that day …'], ['فِي الصَّبَاحِ … وَفِي المَسَاءِ …', 'in the morning … and in the evening …'], ['كَانَ مُهِمًّا لِأَنَّ …', 'it was important because …'], ['شَعَرْتُ بِالفَرَحِ · بِالخَوْفِ', 'I felt happy · afraid']],
    model: {
      text: 'لَنْ أَنْسَى السَّابِعَ مِنْ سِبْتَمْبِرَ أَبَدًا، لِأَنَّهُ كَانَ أَوَّلَ يَوْمٍ لِي فِي مَدْرَسَةٍ جَدِيدَةٍ. فِي الصَّبَاحِ اسْتَيْقَظْتُ فِي السَّادِسَةِ، وَكُنْتُ خَائِفًا جِدًّا، لِأَنِّي لَمْ أَعْرِفْ أَحَدًا. فِي الحِصَّةِ الأُولَى جَلَسْتُ بِجَانِبِ طَالِبٍ اسْمُهُ يُوسُفُ، فَسَاعَدَنِي فِي الرِّيَاضِيَّاتِ، وَأَكَلْنَا الغَدَاءَ مَعًا. فِي المَسَاءِ شَعَرْتُ بِالفَرَحِ، وَحَكَيْتُ لِأُمِّي عَنْ صَدِيقِي الجَدِيدِ. وَالآنَ نَحْنُ أَعَزُّ صَدِيقَيْنِ، وَسَنَحْتَفِلُ بِهٰذَا التَّارِيخِ كُلَّ سَنَةٍ.',
      en: 'T: I will never forget 7 September — my first day at a new school · D: I woke at six, very afraid because I knew nobody; in the first lesson I sat next to Yusuf, who helped me with maths, and we had lunch together · F: in the evening I felt happy and told my mum · future: now we are best friends and will celebrate this date every year.',
      find: ['لَنْ أَنْسَى … أَبَدًا', 'لِأَنِّي لَمْ أَعْرِفْ', 'فِي الحِصَّةِ الأُولَى', 'شَعَرْتُ بِالفَرَحِ'],
    },
  },
};
write.Q3.phrases[4] = ['شَعَرْتُ بِالفَرَحِ · بِالخَوْفِ', 'I felt happy · afraid'];

module.exports = { speak, write };
