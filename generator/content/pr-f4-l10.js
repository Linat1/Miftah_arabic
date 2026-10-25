'use strict';
/* Practice Room · F4-L10 · Listening and speaking — school conversations. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f4-l10',
  arShort: 'مُحَادَثَاتٌ مَدْرَسِيَّةٌ',
  grammar: 'repair phrases (lam afham · hal yumkinuka an tuʿīda …?); precise school questions (matā · ayna · kam · man); five-prompt role plays; -ka / -ki to the listener',
  focus: 'Students run their own listening-and-speaking practice: say the repair phrases, act a model conversation with a repair, answer question cards with a partner who “misunderstands”, perform a five-prompt role play, give a 30-second talk, then build, fix and write a short message from a conversation.',
  words1: 'Repair phrases', words2: 'School question words',
  addWords: [['مَتَى؟', 'when?'], ['أَيْنَ؟', 'where?'], ['كَمْ؟', 'how many / how much?'], ['مَنْ؟', 'who?'], ['مَعَ مَنْ؟', 'with whom?'], ['لِمَاذَا؟', 'why?']],
  dialogue: {
    title: 'A conversation with a repair', ar: 'لَمْ أَفْهَمْ!',
    lines: [
      ['A', 'مَتَى يَبْدَأُ النَّادِي المُوسِيقِيُّ؟', 'When does the music club start?'],
      ['B', 'يَبْدَأُ يَوْمَ الثُّلَاثَاءِ بَعْدَ المَدْرَسَةِ، فِي الثَّالِثَةِ وَالرُّبْعِ.', 'It starts on Tuesday after school, at quarter past three.'],
      ['A', 'آسِفٌ، لَمْ أَفْهَمْ. هَلْ يُمْكِنُكِ أَنْ تُعِيدِي ذٰلِكَ؟', 'Sorry, I didn’t understand. Could you repeat that? (to a girl)'],
      ['B', 'طَبْعًا. يَوْمَ الثُّلَاثَاءِ، فِي السَّاعَةِ الثَّالِثَةِ وَالرُّبْعِ.', 'Of course. On Tuesday, at quarter past three.'],
      ['A', 'شُكْرًا، فَهِمْتُ الآنَ. وَأَيْنَ؟', 'Thank you, I understand now. And where?'],
      ['B', 'فِي قَاعَةِ المُوسِيقَى، بِجَانِبِ المَكْتَبَةِ.', 'In the music room, next to the library.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: the Leader speaks FAST on purpose — the Speaker must use a repair phrase before answering.',
  },
  questions: [
    { q: 'مَتَى يَنْتَهِي اليَوْمُ المَدْرَسِيُّ؟', en: 'When does the school day end?', start: 'يَنْتَهِي فِي …', more: '… وَيَوْمَ الجُمُعَةِ …' },
    { q: 'أَيْنَ مَكْتَبُ المُدِيرِ؟', en: 'Where is the head’s office?', start: 'مَكْتَبُ المُدِيرِ … بِجَانِبِ / أَمَامَ …', more: '…' },
    { q: 'كَمْ طَالِبًا فِي صَفِّكَ؟', en: 'How many students are in your class?', start: 'فِي صَفِّي … طَالِبًا', more: '… وَ… طَالِبَةً' },
    { q: 'مَنْ مُعَلِّمُكَ المُفَضَّلُ؟', en: 'Who is your favourite teacher?', start: 'مُعَلِّمِي المُفَضَّلُ … / مُعَلِّمَتِي المُفَضَّلَةُ …', more: '… لِأَنَّهُ / لِأَنَّهَا …' },
    { q: 'مَعَ مَنْ تَجْلِسُ فِي الصَّفِّ؟', en: 'Who do you sit with in class?', start: 'أَجْلِسُ مَعَ …', more: '… لِأَنَّهُ / لِأَنَّهَا …' },
  ],
  qTitle: 'Answer — the Leader may pretend not to understand!',
  card: {
    title: 'Role-play card — joining the chess club (five prompts)', ar: 'نَادِي الشِّطْرَنْجِ', you: 'a student', them: 'the club teacher',
    tasks: [
      { ex: 'أَهْلًا! مَا اسْمُكَ؟ وَفِي أَيِّ صَفٍّ أَنْتَ؟', task: 'Name and year group.', plan: 'مَا · أَيِّ ← اسْمِي … ، وَأَنَا فِي الصَّفِّ …', model: 'اسْمِي نَبِيلٌ، وَأَنَا فِي الصَّفِّ الثَّامِنِ.', modelEn: 'My name is Nabil, and I am in Year 8.' },
      { ex: 'لِمَاذَا تُرِيدُ أَنْ تَنْضَمَّ إِلَى النَّادِي؟', task: 'Give a reason.', plan: 'لِمَاذَا ← لِأَنَّنِي …', model: 'لِأَنَّنِي أُحِبُّ الشِّطْرَنْجَ، وَأَلْعَبُهُ مَعَ أَبِي.', modelEn: 'Because I love chess, and I play it with my dad.' },
      { ex: 'النَّادِي يَوْمَ الأَرْبِعَاءِ فِي الغُرْفَةِ عِشْرِينَ.', task: 'Ask the teacher to repeat.', plan: 'آسِفٌ ، لَمْ أَفْهَمْ … تُعِيدَ …؟', model: 'آسِفٌ، لَمْ أَفْهَمْ. هَلْ يُمْكِنُكَ أَنْ تُعِيدَ رَقْمَ الغُرْفَةِ؟', modelEn: 'Sorry, I didn’t understand. Could you repeat the room number?' },
      { ex: 'الغُرْفَةُ عِشْرُونَ. هَلْ عِنْدَكَ سُؤَالٌ؟', task: 'Ask when it ends.', plan: 'سُؤَالٌ ← نَعَمْ، مَتَى يَنْتَهِي …؟', model: 'نَعَمْ، مَتَى يَنْتَهِي النَّادِي؟', modelEn: 'Yes, when does the club end?' },
      { unexpected: true, ex: 'هَلْ لَعِبْتَ فِي مُسَابَقَةٍ مِنْ قَبْلُ؟', task: 'Answer the surprise question.', plan: 'هَلْ ← نَعَمْ / لَا ، …', model: 'لَا، لٰكِنَّنِي أُرِيدُ أَنْ أَلْعَبَ فِي مُسَابَقَةٍ هٰذِهِ السَّنَةَ.', modelEn: 'No, but I want to play in a competition this year.' },
    ],
    girl: 'اسْمُكِ · أَنْتِ · تُرِيدِينَ · تَنْضَمِّي · عِنْدَكِ · لَعِبْتِ — and the Speaker says آسِفَةٌ',
    notes: 'Five prompts, as in the real role play; task 3 practises a repair; task ! is unexpected.',
  },
  talk: {
    title: '30 seconds: my school, then two follow-ups', ar: 'مَدْرَسَتِي',
    text: 'Talk for 30 seconds about your school. Then the Leader asks two quick follow-up questions (one fast, so you must use a repair phrase first!).',
    routes: {
      core: 'Three sentences + one repair phrase.',
      develop: 'Five sentences + answer both follow-ups.',
      stretch: 'Answer the follow-ups in two sentences, with a reason.',
    },
  },
  builder: [
    { en: 'Sorry, I didn’t understand. (a girl speaking)', cols: [['آسِفَةٌ،', 'آسِفٌ،'], ['لَمْ', 'لَا'], ['أَفْهَمْ.', 'فَهِمْتُ.']], key: [0, 0, 0], why: 'A girl → آسِفَةٌ; didn’t understand = لَمْ أَفْهَمْ.' },
    { en: 'Could you repeat that? (to a boy)', cols: [['هَلْ يُمْكِنُكَ', 'هَلْ يُمْكِنُكِ'], ['أَنْ تُعِيدَ', 'أَنْ تُعِيدِي'], ['ذٰلِكَ؟', 'ذٰلِكِ؟']], key: [0, 0, 0], why: 'To a boy → -ka … تُعِيدَ.' },
    { en: 'Speak slowly, please. (to a girl)', cols: [['تَكَلَّمِي', 'تَكَلَّمْ'], ['بِبُطْءٍ،', 'بُطْءٌ،'], ['مِنْ فَضْلِكِ.', 'مِنْ فَضْلِكَ.']], key: [0, 0, 0], why: 'To a girl → تَكَلَّمِي … فَضْلِكِ.' },
  ],
  errors: [
    { wrong: 'هَلْ يُمْكِنُكَ أَنْ تُعِيدَ يَا مُعَلِّمَةُ؟', hint: 'The teacher is a woman.', right: 'هَلْ يُمْكِنُكِ أَنْ تُعِيدِي يَا مُعَلِّمَةُ؟', why: 'To a woman: يُمْكِنُكِ … تُعِيدِي.' },
    { wrong: 'لَمْ أَفْهَمُ.', hint: 'After لَمْ …', right: 'لَمْ أَفْهَمْ.', why: 'لَمْ + verb with sukūn: أَفْهَمْ.' },
    { wrong: 'مَعَ مَنْ تَجْلِسُ؟ — فِي الصَّفِّ.', hint: 'مَعَ مَنْ = with whom.', right: 'أَجْلِسُ مَعَ صَدِيقِي زَيْدٍ.', why: 'Answer the question word: a person.' },
  ],
  task: {
    title: 'A message after the conversation', ar: 'رِسَالَةٌ بَعْدَ المُحَادَثَةِ',
    text: 'You spoke to a teacher about a club. Write a short message (about 40–60 words) to a friend with the information you heard. Include: • which club • the day and time • the place • one thing you must bring or do • why you want to go • an invitation to come with you.',
    phrases: [['تَكَلَّمْتُ مَعَ … عَنْ نَادِي …', 'I spoke with … about the … club'], ['النَّادِي يَوْمَ … فِي السَّاعَةِ …', 'the club is on … at …'], ['يَجِبُ أَنْ نُحْضِرَ …', 'we must bring …'], ['هَلْ تُرِيدُ أَنْ تَأْتِيَ مَعِي؟', 'do you want to come with me?']],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ !', en: 'Hello …!' },
      { ar: 'تَكَلَّمْتُ مَعَ ______ عَنْ نَادِي ______ .', en: 'I spoke with … about the … club.' },
      { ar: 'النَّادِي يَوْمَ ______ فِي السَّاعَةِ ______ ، فِي ______ .', en: 'The club is on … at …, in …' },
      { ar: 'هَلْ تُرِيدُ أَنْ تَأْتِيَ مَعِي؟', en: 'Do you want to come with me?' },
    ],
    developFrames: [
      { ar: 'يَجِبُ أَنْ نُحْضِرَ ______ .', en: 'We must bring …' },
      { ar: 'أُرِيدُ أَنْ أَذْهَبَ لِأَنَّنِي ______ .', en: 'I want to go because I …' },
    ],
    bank: ['تَكَلَّمْتُ مَعَ', 'نَادِي …', 'يَوْمَ … فِي السَّاعَةِ …', 'فِي قَاعَةِ … · فِي الغُرْفَةِ …', 'يَجِبُ أَنْ نُحْضِرَ', 'لِأَنَّنِي', 'تَأْتِيَ · تَأْتِي', 'مَعِي'],
    model: {
      text: 'مَرْحَبًا يَا زَيْدُ! اليَوْمَ تَكَلَّمْتُ مَعَ الأُسْتَاذِ أَحْمَدَ عَنْ نَادِي الشِّطْرَنْجِ. النَّادِي يَوْمَ الأَرْبِعَاءِ فِي السَّاعَةِ الثَّالِثَةِ وَالنِّصْفِ، فِي الغُرْفَةِ عِشْرِينَ بِجَانِبِ المَكْتَبَةِ. يَجِبُ أَنْ نُحْضِرَ دَفْتَرًا صَغِيرًا. أُرِيدُ أَنْ أَذْهَبَ لِأَنَّنِي أُحِبُّ الشِّطْرَنْجَ كَثِيرًا. هَلْ تُرِيدُ أَنْ تَأْتِيَ مَعِي؟',
      en: '“Hi Zaid! Today I spoke with Mr Ahmed about the chess club. The club is on Wednesday at half past three, in room twenty next to the library. We must bring a small notebook. I want to go because I love chess a lot. Do you want to come with me?”',
      find: ['تَكَلَّمْتُ مَعَ الأُسْتَاذِ', 'يَوْمَ الأَرْبِعَاءِ فِي السَّاعَةِ', 'يَجِبُ أَنْ نُحْضِرَ', 'هَلْ تُرِيدُ أَنْ تَأْتِيَ مَعِي؟'],
    },
  },
  checkCore: 'use a repair phrase instead of silence?',
  checkDevelop: 'answer the exact question word (when → time, where → place …)?',
});
