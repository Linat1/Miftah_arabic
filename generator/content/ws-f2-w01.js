'use strict';
/* Apply Workshop · F2-W01 · F2-L01 (greetings, how are you?) + F2-L02 (what is your name?). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f2-w01', pair: ['f2-l01', 'f2-l02'],
  title: 'First Day at the Arabic Club', arShort: 'اليَوْمُ الأَوَّلُ فِي النَّادِي',
  focus: 'Students use greetings, “how are you?” and names together: they meet new people at an Arabic club, ask and answer, introduce a friend, give a short talk and write a welcome message that uses both lessons.',
  sort: [
    { ar: 'كَيْفَ حَالُكَ؟', cat: 0 }, { ar: 'بِخَيْرٍ، الحَمْدُ لِلّٰهِ', cat: 0 }, { ar: 'صَبَاحُ النُّورِ', cat: 0 }, { ar: 'مَعَ السَّلَامَةِ', cat: 0 },
    { ar: 'مَا اسْمُكِ؟', cat: 1 }, { ar: 'اسْمِي يُوسُفُ', cat: 1 }, { ar: 'هٰذِهِ صَدِيقَتِي', cat: 1 }, { ar: 'تَشَرَّفْنَا', cat: 1 },
  ],
  dialogue: {
    title: 'At the Arabic club', ar: 'فِي نَادِي اللُّغَةِ العَرَبِيَّةِ',
    lines: [
      ['A', 'السَّلَامُ عَلَيْكُمْ!', 'Peace be upon you!'],
      ['B', 'وَعَلَيْكُمُ السَّلَامُ! أَهْلًا وَسَهْلًا.', 'And upon you be peace! Welcome.'],
      ['A', 'أَنَا اسْمِي سَارَةُ. مَا اسْمُكَ؟', 'My name is Sara. What is your name?'],
      ['B', 'اسْمِي عَلِيٌّ. تَشَرَّفْنَا! كَيْفَ حَالُكِ؟', 'My name is Ali. Pleased to meet you! How are you?'],
      ['A', 'بِخَيْرٍ، الحَمْدُ لِلّٰهِ. هٰذِهِ صَدِيقَتِي، اسْمُهَا مَرْيَمُ.', 'Fine, praise be to God. This is my friend; her name is Maryam.'],
      ['B', 'أَهْلًا يَا مَرْيَمُ! كَيْفَ حَالُكِ؟', 'Hello, Maryam! How are you?'],
    ],
    notes: 'Lines 1–2 and the “how are you?” lines come from F2-L01; the names and “this is my friend” come from F2-L02. Point out كَيْفَ حَالُكِ (to a girl) and مَا اسْمُكَ (to a boy).',
  },
  card: {
    title: 'Role-play card — first day at the club', ar: 'اليَوْمُ الأَوَّلُ', you: 'a new member', them: 'the club leader',
    mix: 'greet, ask how someone is (F2-L01) and give and ask names, then introduce a friend (F2-L02)',
    tasks: [
      { ex: 'السَّلَامُ عَلَيْكُمْ!', task: 'Reply to the greeting.', plan: 'السَّلَامُ ← وَعَلَيْكُمُ …', model: 'وَعَلَيْكُمُ السَّلَامُ!', modelEn: 'And upon you be peace!' },
      { ex: 'أَهْلًا وَسَهْلًا! مَا اسْمُكَ؟', task: 'Give your name.', plan: 'مَا ← اسْمِي …', model: 'اسْمِي آدَمُ. تَشَرَّفْنَا!', modelEn: 'My name is Adam. Pleased to meet you!' },
      { ex: 'كَيْفَ حَالُكَ يَا آدَمُ؟', task: 'Say how you are and say thank you.', plan: 'كَيْفَ ← بِخَيْرٍ … شُكْرًا', model: 'بِخَيْرٍ، الحَمْدُ لِلّٰهِ. شُكْرًا!', modelEn: 'Fine, praise be to God. Thank you!' },
      { ex: 'مَنْ هٰذَا؟', task: 'Introduce your friend (a boy) and give his name.', plan: 'مَنْ ← هٰذَا صَدِيقِي، اسْمُهُ …', model: 'هٰذَا صَدِيقِي، اسْمُهُ يُوسُفُ.', modelEn: 'This is my friend; his name is Yusuf.' },
      { unexpected: true, ex: 'إِلَى اللِّقَاءِ!', task: 'Reply and say goodbye.', plan: 'إِلَى اللِّقَاءِ ← مَعَ …', model: 'مَعَ السَّلَامَةِ! إِلَى اللِّقَاءِ.', modelEn: 'Goodbye! See you later.' },
    ],
    girl: 'كَيْفَ حَالُكِ؟ · مَا اسْمُكِ؟ — and a girl friend: هٰذِهِ صَدِيقَتِي، اسْمُهَا …',
  },
  talk: {
    title: 'Meet me and my friend', ar: 'أَنَا وَصَدِيقِي',
    text: 'Talk for 30–45 seconds as if you are meeting the class for the first time: greet everyone, say how you are, say your name, then introduce a friend (a boy or a girl) and finish politely.',
    routes: {
      core: 'السَّلَامُ عَلَيْكُمْ · أَنَا بِخَيْرٍ · اسْمِي … · مَعَ السَّلَامَةِ.',
      develop: 'Add a friend: هٰذَا صَدِيقِي، اسْمُهُ … or هٰذِهِ صَدِيقَتِي، اسْمُهَا …',
      stretch: 'Introduce a boy AND a girl, ask the class كَيْفَ حَالُكُمْ؟ and use the long greeting.',
    },
    phrases: [['السَّلَامُ عَلَيْكُمْ', 'peace be upon you'], ['أَنَا بِخَيْرٍ، الحَمْدُ لِلّٰهِ', 'I am fine, praise be to God'], ['اسْمِي … · اسْمُهُ … · اسْمُهَا …', 'my name · his name · her name'], ['مَعَ السَّلَامَةِ', 'goodbye']],
  },
  task: {
    title: 'A welcome message for the club chat', ar: 'رِسَالَةُ تَرْحِيبٍ',
    text: 'Write a message (about 40–60 words) for the Arabic club chat. Include: • a greeting to everyone • how you are • your name • a friend (a boy): his name • a friend (a girl): her name • a question to the group (how are you? / what is your name?) • a polite goodbye.',
    range: [35, 75],
    phrases: [['السَّلَامُ عَلَيْكُمْ جَمِيعًا!', 'peace be upon you all!'], ['أَنَا بِخَيْرٍ، الحَمْدُ لِلّٰهِ', 'I am fine, praise be to God'], ['هٰذَا صَدِيقِي، اسْمُهُ …', 'this is my friend; his name is …'], ['هٰذِهِ صَدِيقَتِي، اسْمُهَا …', 'this is my friend; her name is …']],
    coreFrames: [
      { ar: 'السَّلَامُ عَلَيْكُمْ! اسْمِي ______ .', en: 'Peace be upon you! My name is …' },
      { ar: 'أَنَا ______ ، الحَمْدُ لِلّٰهِ.', en: 'I am …, praise be to God.' },
      { ar: 'هٰذَا صَدِيقِي، اسْمُهُ ______ .', en: 'This is my friend; his name is …' },
      { ar: 'هٰذِهِ صَدِيقَتِي، اسْمُهَا ______ .', en: 'This is my friend; her name is …' },
      { ar: 'شُكْرًا، وَ ______ !', en: 'Thank you, and goodbye!' },
    ],
    developFrames: [
      { ar: 'كَيْفَ حَالُكُمْ ______ ؟', en: 'How are you (all) …?' },
      { ar: 'وَأَنْتَ، مَا ______ ؟', en: 'And you (boy), what is …?' },
      { ar: 'وَأَنْتِ، مَا ______ ؟', en: 'And you (girl), what is …?' },
    ],
    bank: ['السَّلَامُ عَلَيْكُمْ', 'أَهْلًا وَسَهْلًا', 'بِخَيْرٍ', 'اسْمِي', 'اسْمُهُ · اسْمُهَا', 'صَدِيقِي · صَدِيقَتِي', 'تَشَرَّفْنَا', 'مَعَ السَّلَامَةِ'],
    model: {
      text: 'السَّلَامُ عَلَيْكُمْ جَمِيعًا! أَهْلًا وَسَهْلًا. اسْمِي عُمَرُ، وَأَنَا بِخَيْرٍ، الحَمْدُ لِلّٰهِ. هٰذَا صَدِيقِي، اسْمُهُ خَالِدٌ. وَهٰذِهِ صَدِيقَتِي، اسْمُهَا زَيْنَبُ. نَحْنُ فِي نَادِي اللُّغَةِ العَرَبِيَّةِ. كَيْفَ حَالُكُمْ؟ وَأَنْتَ، مَا اسْمُكَ؟ وَأَنْتِ، مَا اسْمُكِ؟ تَشَرَّفْنَا! شُكْرًا، وَمَعَ السَّلَامَةِ!',
      en: '“Peace be upon you all! Welcome. My name is Omar, and I am fine, praise be to God. This is my friend; his name is Khalid. And this is my friend; her name is Zaynab. We are in the Arabic club. How are you all? And you (boy), what is your name? And you (girl), what is your name? Pleased to meet you! Thank you, and goodbye!”',
      find: ['السَّلَامُ عَلَيْكُمْ', 'بِخَيْرٍ', 'اسْمُهُ خَالِدٌ', 'اسْمُهَا زَيْنَبُ', 'مَا اسْمُكِ؟'],
    },
  },
});
