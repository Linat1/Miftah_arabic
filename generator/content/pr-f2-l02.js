'use strict';
/* Practice Room · F2-L02 · What is your name? Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f2-l02',
  arShort: 'مَا اسْمُكَ؟',
  grammar: 'mā ismuka (to a boy) / mā ismuki (to a girl); ismī …; hādhā ṣadīqī / hādhihi ṣadīqatī; ismuhu / ismuhā',
  focus: 'Students run their own speaking and writing practice with names: say the name phrases, act a short dialogue, answer name cards, do a role-play card on the first day at a club, give a 30-second introduction, then build, fix and write a short message introducing themselves and a friend.',
  words1: 'Asking and giving names', words2: 'Introducing a friend',
  dialogue: {
    title: 'What is your name?', ar: 'مَا اسْمُكَ؟',
    lines: [
      ['A', 'السَّلَامُ عَلَيْكُمْ! أَنَا يُوسُفُ. مَا اسْمُكَ؟', 'Peace be upon you! I am Yusuf. What is your name?'],
      ['B', 'وَعَلَيْكُمُ السَّلَامُ! اسْمِي خَالِدٌ. وَأَنْتَ؟', 'And upon you be peace! My name is Khalid. And you?'],
      ['A', 'اسْمِي يُوسُفُ. تَشَرَّفْنَا!', 'My name is Yusuf. Pleased to meet you!'],
      ['B', 'تَشَرَّفْنَا! هٰذِهِ صَدِيقَتِي، اسْمُهَا زَيْنَبُ.', 'Pleased to meet you! This is my friend; her name is Zaynab.'],
      ['A', 'أَهْلًا يَا زَيْنَبُ! وَمَنْ هٰذَا؟', 'Hello, Zaynab! And who is this?'],
      ['B', 'هٰذَا صَدِيقِي، اسْمُهُ عُمَرُ.', 'This is my friend; his name is Omar.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: use YOUR names and the names of people in your room.',
  },
  questions: [
    { q: 'مَا اسْمُكَ؟ / مَا اسْمُكِ؟', en: 'What is your name? (boy / girl)', start: 'اسْمِي …', more: '… وَأَنْتَ؟ / وَأَنْتِ؟' },
    { q: 'مَنْ هٰذَا؟', en: 'Who is this? (a boy)', start: 'هٰذَا صَدِيقِي …', more: '… اسْمُهُ …' },
    { q: 'مَنْ هٰذِهِ؟', en: 'Who is this? (a girl)', start: 'هٰذِهِ صَدِيقَتِي …', more: '… اسْمُهَا …' },
    { q: 'مَا اسْمُ مُعَلِّمِكَ؟', en: 'What is your teacher’s name?', start: 'اسْمُ مُعَلِّمِي …', more: '… / اسْمُ مُعَلِّمَتِي …' },
    { q: 'مَا اسْمُ صَدِيقِكَ المُفَضَّلِ؟', en: 'What is your best friend’s name?', start: 'اسْمُهُ … / اسْمُهَا …', more: '… تَشَرَّفْنَا!' },
  ],
  card: {
    title: 'Role-play card — the first day at a football club', ar: 'أَوَّلُ يَوْمٍ فِي النَّادِي', you: 'a new player', them: 'the coach',
    tasks: [
      { ex: 'أَهْلًا وَسَهْلًا! مَا اسْمُكَ؟', task: 'Give your name.', plan: 'مَا ← اسْمِي …', model: 'أَهْلًا بِكَ! اسْمِي سَامِي.', modelEn: 'Hello! My name is Sami.' },
      { ex: 'تَشَرَّفْنَا يَا سَامِي!', task: 'Reply politely.', plan: 'تَشَرَّفْنَا ← تَشَرَّفْنَا!', model: 'تَشَرَّفْنَا!', modelEn: 'Pleased to meet you!' },
      { ex: 'مَنْ هٰذَا مَعَكَ؟', task: 'Introduce your friend (a boy).', plan: 'مَنْ ← هٰذَا صَدِيقِي ، اسْمُهُ …', model: 'هٰذَا صَدِيقِي، اسْمُهُ آدَمُ.', modelEn: 'This is my friend; his name is Adam.' },
      { ex: 'وَأَنَا اسْمِي المُدَرِّبُ مَحْمُودٌ.', task: 'Ask the name of the girl next to the coach.', plan: 'اسْأَلْ ← مَا اسْمُكِ؟', model: 'أَهْلًا! وَأَنْتِ، مَا اسْمُكِ؟', modelEn: 'Hello! And you, what is your name?' },
    ],
    girl: 'مَا اسْمُكِ؟ · مَعَكِ — and the Speaker says هٰذِهِ صَدِيقَتِي، اسْمُهَا …',
    notes: 'Language: -ka to a boy, -ki to a girl · ismī · hādhā ṣadīqī / hādhihi ṣadīqatī · tasharrafnā.',
  },
  talk: {
    title: '30 seconds: me and my friends', ar: 'أَنَا وَأَصْدِقَائِي',
    text: 'Talk for 30 seconds: greet the room, say your name, then introduce two friends (a boy and a girl) with their names.',
    routes: {
      core: 'Three sentences: السَّلَامُ عَلَيْكُمْ · اسْمِي … · هٰذَا صَدِيقِي …',
      develop: 'Add a girl: هٰذِهِ صَدِيقَتِي، اسْمُهَا …',
      stretch: 'Ask two people their names (-ka / -ki) and finish with تَشَرَّفْنَا.',
    },
    phrases: [['اسْمِي …', 'my name is …'], ['هٰذَا صَدِيقِي، اسْمُهُ …', 'this is my friend; his name is …'], ['هٰذِهِ صَدِيقَتِي، اسْمُهَا …', 'this is my friend; her name is …'], ['تَشَرَّفْنَا', 'pleased to meet you']],
  },
  builder: [
    { en: 'And you, what is your name? (to a girl)', cols: [['وَأَنْتِ،', 'وَأَنْتَ،'], ['مَا', 'مَنْ'], ['اسْمُكِ؟', 'اسْمُكَ؟']], key: [0, 0, 0], why: 'To a girl: أَنْتِ … اسْمُكِ (-ki); what = مَا.' },
    { en: 'This is my friend; his name is Ali.', cols: [['هٰذَا صَدِيقِي،', 'هٰذِهِ صَدِيقَتِي،'], ['اسْمُهُ', 'اسْمُهَا'], ['عَلِيٌّ.', 'مَرْيَمُ.']], key: [0, 0, 0], why: 'A boy → هٰذَا صَدِيقِي … اسْمُهُ.' },
    { en: 'This is my friend; her name is Huda.', cols: [['هٰذِهِ صَدِيقَتِي،', 'هٰذَا صَدِيقِي،'], ['اسْمُهَا', 'اسْمُهُ'], ['هُدَى.', 'عُمَرُ.']], key: [0, 0, 0], why: 'A girl → هٰذِهِ صَدِيقَتِي … اسْمُهَا.' },
  ],
  errors: [
    { wrong: 'مَا اسْمُكَ يَا فَاطِمَةُ؟', hint: 'Fatima is a girl.', right: 'مَا اسْمُكِ يَا فَاطِمَةُ؟', why: 'To a girl: اسْمُكِ (-ki).' },
    { wrong: 'هٰذَا صَدِيقَتِي.', hint: 'Look at both words.', right: 'هٰذِهِ صَدِيقَتِي.', why: 'A girl friend → هٰذِهِ صَدِيقَتِي.' },
    { wrong: 'هٰذَا صَدِيقِي، اسْمُهَا يُوسُفُ.', hint: 'Yusuf is a boy.', right: 'هٰذَا صَدِيقِي، اسْمُهُ يُوسُفُ.', why: 'His name → اسْمُهُ (-hu).' },
  ],
  task: {
    title: 'Introduce yourself and a friend', ar: 'أُعَرِّفُ بِنَفْسِي وَبِصَدِيقِي',
    text: 'Write a short message (about 25–40 words) for the class chat. Include: • a greeting • your name • a friend (a boy) and his name • a friend (a girl) and her name • a polite closing.',
    range: [20, 60],
    phrases: [['السَّلَامُ عَلَيْكُمْ!', 'peace be upon you!'], ['اسْمِي …', 'my name is …'], ['هٰذَا صَدِيقِي، اسْمُهُ …', 'this is my friend; his name is …'], ['هٰذِهِ صَدِيقَتِي، اسْمُهَا …', 'this is my friend; her name is …']],
    coreFrames: [
      { ar: 'السَّلَامُ عَلَيْكُمْ!', en: 'Peace be upon you!' },
      { ar: 'اسْمِي ______ .', en: 'My name is …' },
      { ar: 'هٰذَا صَدِيقِي، اسْمُهُ ______ .', en: 'This is my friend; his name is …' },
      { ar: 'هٰذِهِ صَدِيقَتِي، اسْمُهَا ______ .', en: 'This is my friend; her name is …' },
    ],
    developFrames: [
      { ar: 'أَهْلًا وَسَهْلًا! أَنَا ______ .', en: 'Welcome! I am …' },
      { ar: 'وَأَنْتَ، مَا ______ ؟ وَأَنْتِ، مَا ______ ؟', en: 'And you (boy), what is …? And you (girl), what is …?' },
      { ar: 'تَشَرَّفْنَا! مَعَ ______ .', en: 'Pleased to meet you! Good…' },
    ],
    bank: ['اسْمِي', 'اسْمُكَ · اسْمُكِ', 'اسْمُهُ · اسْمُهَا', 'هٰذَا صَدِيقِي', 'هٰذِهِ صَدِيقَتِي', 'وَأَنْتَ؟ · وَأَنْتِ؟', 'تَشَرَّفْنَا', 'مَعَ السَّلَامَةِ'],
    model: {
      text: 'السَّلَامُ عَلَيْكُمْ! اسْمِي نُورٌ. هٰذَا صَدِيقِي، اسْمُهُ يُوسُفُ. وَهٰذِهِ صَدِيقَتِي، اسْمُهَا زَيْنَبُ. وَأَنْتَ، مَا اسْمُكَ؟ وَأَنْتِ، مَا اسْمُكِ؟ تَشَرَّفْنَا! مَعَ السَّلَامَةِ.',
      en: '“Peace be upon you! My name is Nour. This is my friend; his name is Yusuf. And this is my friend; her name is Zaynab. And you (boy), what is your name? And you (girl), what is your name? Pleased to meet you! Goodbye.”',
      find: ['اسْمِي', 'هٰذَا صَدِيقِي، اسْمُهُ', 'هٰذِهِ صَدِيقَتِي، اسْمُهَا', 'مَا اسْمُكِ؟'],
    },
  },
  checkCore: 'use اسْمُكَ for a boy and اسْمُكِ for a girl?',
  checkDevelop: 'use هٰذَا صَدِيقِي … اسْمُهُ and هٰذِهِ صَدِيقَتِي … اسْمُهَا?',
});
