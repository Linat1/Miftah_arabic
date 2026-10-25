'use strict';
/* Practice Room · F2-L01 · Hello, goodbye and how are you? Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f2-l01',
  arShort: 'التَّحِيَّاتُ',
  grammar: 'greeting + paired reply; kayfa ḥāluka (to a boy) / kayfa ḥāluki (to a girl); polite closings',
  focus: 'Students run their own speaking and writing practice with greetings: say the greetings and their replies, act a short dialogue, answer greeting cards, do a role-play card meeting a neighbour, give a 30-second greeting, then build, fix and write a short greeting message.',
  words1: 'Greetings and replies', words2: 'How are you? Thank you, goodbye',
  addWords: [['السَّلَامُ عَلَيْكُمْ', 'Peace be upon you.']],
  dialogue: {
    title: 'Good morning! How are you?', ar: 'صَبَاحُ الخَيْرِ! كَيْفَ حَالُكَ؟',
    lines: [
      ['A', 'السَّلَامُ عَلَيْكُمْ!', 'Peace be upon you!'],
      ['B', 'وَعَلَيْكُمُ السَّلَامُ! صَبَاحُ الخَيْرِ.', 'And upon you be peace! Good morning.'],
      ['A', 'صَبَاحُ النُّورِ! كَيْفَ حَالُكَ؟', 'Good morning! How are you (to a boy)?'],
      ['B', 'بِخَيْرٍ، الحَمْدُ لِلّٰهِ. وَأَنْتِ؟ كَيْفَ حَالُكِ؟', 'Fine, praise be to God. And you? How are you (to a girl)?'],
      ['A', 'أَنَا بِخَيْرٍ، شُكْرًا.', 'I am fine, thank you.'],
      ['B', 'مَعَ السَّلَامَةِ! إِلَى اللِّقَاءِ.', 'Goodbye! See you later.'],
    ],
    foot: 'Round 1: read it in pairs (A and B). Round 2: swap letters. Round 3: cover the Arabic and say it from the English. Then change the time of day: مَسَاءُ الخَيْرِ ← مَسَاءُ النُّورِ.',
  },
  questions: [
    { q: 'السَّلَامُ عَلَيْكُمْ!', en: 'Peace be upon you!', start: 'وَعَلَيْكُمُ السَّلَامُ!', more: '… وَرَحْمَةُ اللّٰهِ' },
    { q: 'صَبَاحُ الخَيْرِ!', en: 'Good morning!', start: 'صَبَاحُ النُّورِ!', more: '… كَيْفَ حَالُكَ؟' },
    { q: 'مَسَاءُ الخَيْرِ!', en: 'Good evening!', start: 'مَسَاءُ النُّورِ!', more: '… أَهْلًا وَسَهْلًا' },
    { q: 'كَيْفَ حَالُكَ؟ / كَيْفَ حَالُكِ؟', en: 'How are you? (boy / girl)', start: 'بِخَيْرٍ، الحَمْدُ لِلّٰهِ.', more: '… وَأَنْتَ؟ / وَأَنْتِ؟' },
    { q: 'مَعَ السَّلَامَةِ!', en: 'Goodbye!', start: 'مَعَ السَّلَامَةِ!', more: '… إِلَى اللِّقَاءِ' },
  ],
  qTitle: 'Reply to each greeting — then ask back',
  card: {
    title: 'Role-play card — meeting your neighbour in the morning', ar: 'أُحَيِّي جَارِي', you: 'a student leaving for school', them: 'your neighbour',
    tasks: [
      { ex: 'السَّلَامُ عَلَيْكُمْ!', task: 'Reply to the greeting.', plan: 'السَّلَامُ ← وَعَلَيْكُمُ السَّلَامُ', model: 'وَعَلَيْكُمُ السَّلَامُ!', modelEn: 'And upon you be peace!' },
      { ex: 'صَبَاحُ الخَيْرِ!', task: 'Reply to “good morning”.', plan: 'صَبَاحُ الخَيْرِ ← صَبَاحُ النُّورِ', model: 'صَبَاحُ النُّورِ!', modelEn: 'Good morning! (reply)' },
      { ex: 'كَيْفَ حَالُكَ؟', task: 'Say how you are, then ask back.', plan: 'كَيْفَ ← بِخَيْرٍ … وَأَنْتَ؟', model: 'بِخَيْرٍ، الحَمْدُ لِلّٰهِ. وَأَنْتَ؟', modelEn: 'Fine, praise be to God. And you?' },
      { ex: 'أَنَا بِخَيْرٍ. إِلَى أَيْنَ؟ إِلَى المَدْرَسَةِ؟', task: 'Say yes and say goodbye.', plan: 'إِلَى أَيْنَ ← نَعَمْ … مَعَ السَّلَامَةِ', model: 'نَعَمْ، إِلَى المَدْرَسَةِ. مَعَ السَّلَامَةِ!', modelEn: 'Yes, to school. Goodbye!' },
    ],
    girl: 'كَيْفَ حَالُكِ؟ — and the Speaker asks a woman neighbour: وَأَنْتِ؟',
    notes: 'Language: every greeting has a paired reply · -ka to a boy, -ki to a girl · polite closing.',
  },
  talk: {
    title: '30 seconds: greet the class', ar: 'أُحَيِّي الصَّفَّ',
    text: 'Greet your room for 30 seconds as if you are arriving at school: greet, ask how they are, answer, thank them and say goodbye.',
    routes: {
      core: 'Three lines: السَّلَامُ عَلَيْكُمْ · كَيْفَ حَالُكُمْ؟ · مَعَ السَّلَامَةِ.',
      develop: 'Add the time of day (صَبَاحُ / مَسَاءُ الخَيْرِ) and شُكْرًا.',
      stretch: 'Use the long greeting (… وَرَحْمَةُ اللّٰهِ وَبَرَكَاتُهُ) and ask a boy AND a girl how they are.',
    },
    phrases: [['السَّلَامُ عَلَيْكُمْ', 'peace be upon you'], ['كَيْفَ حَالُكُمْ؟', 'how are you (all)?'], ['أَنَا بِخَيْرٍ', 'I am fine'], ['إِلَى اللِّقَاءِ', 'see you later']],
  },
  builder: [
    { en: 'Good morning! How are you? (to a boy)', cols: [['صَبَاحُ الخَيْرِ!', 'مَسَاءُ الخَيْرِ!'], ['كَيْفَ', 'مَا'], ['حَالُكَ؟', 'حَالُكِ؟']], key: [0, 0, 0], why: 'Morning = صَبَاحٌ; to a boy = حَالُكَ (-ka).' },
    { en: 'Good evening! How are you? (to a girl)', cols: [['مَسَاءُ الخَيْرِ!', 'صَبَاحُ النُّورِ!'], ['كَيْفَ', 'أَيْنَ'], ['حَالُكِ؟', 'حَالُكَ؟']], key: [0, 0, 0], why: 'Evening = مَسَاءٌ; to a girl = حَالُكِ (-ki).' },
    { en: 'Fine, thank you. Goodbye!', cols: [['بِخَيْرٍ،', 'صَبَاحُ النُّورِ،'], ['شُكْرًا.', 'عَفْوًا.'], ['مَعَ السَّلَامَةِ!', 'أَهْلًا وَسَهْلًا!']], key: [0, 0, 0], why: 'Thank you = شُكْرًا; goodbye = مَعَ السَّلَامَةِ.' },
  ],
  errors: [
    { wrong: 'صَبَاحُ الخَيْرِ! — صَبَاحُ الخَيْرِ!', hint: 'The reply is different.', right: 'صَبَاحُ الخَيْرِ! — صَبَاحُ النُّورِ!', why: 'The reply to صَبَاحُ الخَيْرِ is صَبَاحُ النُّورِ.' },
    { wrong: 'كَيْفَ حَالُكَ يَا مَرْيَمُ؟', hint: 'Maryam is a girl.', right: 'كَيْفَ حَالُكِ يَا مَرْيَمُ؟', why: 'To a girl: حَالُكِ (-ki).' },
    { wrong: 'السَّلَامُ عَلَيْكُمْ! — أَهْلًا السَّلَامُ!', hint: 'This greeting has a fixed reply.', right: 'السَّلَامُ عَلَيْكُمْ! — وَعَلَيْكُمُ السَّلَامُ!', why: 'The reply turns it round: وَعَلَيْكُمُ السَّلَامُ.' },
  ],
  task: {
    title: 'A short greeting message', ar: 'رِسَالَةُ تَحِيَّةٍ قَصِيرَةٌ',
    text: 'Write a short chat message (about 25–40 words) to a new classmate. Include: • a greeting • a question: how are you? • how you are • a thank-you and a goodbye. Then write the classmate’s reply.',
    range: [20, 60],
    phrases: [['السَّلَامُ عَلَيْكُمْ يَا …', 'peace be upon you, …'], ['كَيْفَ حَالُكَ / حَالُكِ؟', 'how are you (boy / girl)?'], ['أَنَا بِخَيْرٍ، الحَمْدُ لِلّٰهِ', 'I am fine, praise be to God'], ['شُكْرًا · مَعَ السَّلَامَةِ', 'thank you · goodbye']],
    coreFrames: [
      { ar: 'السَّلَامُ عَلَيْكُمْ يَا ______ !', en: 'Peace be upon you, …!' },
      { ar: 'كَيْفَ حَالُ ______ ؟', en: 'How are you? (-ka / -ki)' },
      { ar: 'أَنَا ______ ، الحَمْدُ لِلّٰهِ.', en: 'I am …, praise be to God.' },
      { ar: '______ ، مَعَ السَّلَامَةِ!', en: '…, goodbye!' },
    ],
    developFrames: [
      { ar: 'صَبَاحُ ______ يَا ______ !', en: 'Good morning, …!' },
      { ar: 'الرَّدُّ: وَعَلَيْكُمُ ______ ، صَبَاحُ ______ !', en: 'The reply: and upon you …, good morning!' },
      { ar: 'شُكْرًا ______ ، إِلَى ______ !', en: 'Thank you very much, see you …!' },
    ],
    bank: ['السَّلَامُ عَلَيْكُمْ', 'وَعَلَيْكُمُ السَّلَامُ', 'صَبَاحُ الخَيْرِ · صَبَاحُ النُّورِ', 'مَسَاءُ الخَيْرِ · مَسَاءُ النُّورِ', 'كَيْفَ حَالُكَ؟ · كَيْفَ حَالُكِ؟', 'بِخَيْرٍ', 'شُكْرًا جَزِيلًا', 'مَعَ السَّلَامَةِ'],
    model: {
      text: `السَّلَامُ عَلَيْكُمْ يَا سَلْمَى! صَبَاحُ الخَيْرِ. كَيْفَ حَالُكِ؟ أَنَا بِخَيْرٍ، الحَمْدُ لِلّٰهِ. شُكْرًا، مَعَ السَّلَامَةِ!
وَعَلَيْكُمُ السَّلَامُ يَا آدَمُ! صَبَاحُ النُّورِ. أَنَا بِخَيْرٍ أَيْضًا، شُكْرًا جَزِيلًا. إِلَى اللِّقَاءِ!`,
      en: '“Peace be upon you, Salma! Good morning. How are you? I am fine, praise be to God. Thank you, goodbye!” — “And upon you be peace, Adam! Good morning. I am fine too, thank you very much. See you later!”',
      find: ['كَيْفَ حَالُكِ؟', 'الحَمْدُ لِلّٰهِ', 'وَعَلَيْكُمُ السَّلَامُ', 'صَبَاحُ النُّورِ'],
    },
  },
  checkCore: 'write the right reply to each greeting?',
  checkDevelop: 'use حَالُكَ for a boy and حَالُكِ for a girl?',
});
