'use strict';
/* Practice Room · F2-L12 · F2 review. Speaking + writing across the whole unit. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f2-l12',
  arShort: 'مُرَاجَعَةُ الوَحْدَةِ',
  grammar: 'all of F2: greetings + replies; -ka / -ki questions; ismī · ʿumrī · anā min · askunu fī · atakallamu; nisba agreement; hādhā / hādhihi; he / she forms; linking words',
  focus: 'The last F2 practice room: students run their own speaking and writing practice across the whole unit — greetings, names, ages, nationality, languages, polite phrases and profiles — then write a full introduction with a profile of a friend, ready for the assessment.',
  words1: 'F2 review: meeting people', words2: 'F2 review: facts about me and others',
  addWords: [
    ['السَّلَامُ عَلَيْكُمْ', 'peace be upon you'], ['كَيْفَ حَالُكَ؟ · كَيْفَ حَالُكِ؟', 'how are you? (boy · girl)'], ['مَا اسْمُكَ؟ · مَا اسْمُكِ؟', 'what is your name? (boy · girl)'],
    ['كَمْ عُمْرُكَ؟', 'how old are you?'], ['مِنْ أَيْنَ أَنْتَ؟', 'where are you from?'], ['مِنْ فَضْلِكَ · شُكْرًا', 'please · thank you'],
    ['اسْمُهُ · اسْمُهَا', 'his name · her name'], ['عُمْرِي … سَنَةً', 'I am … years old'], ['أَسْكُنُ فِي …', 'I live in …'],
    ['أَتَكَلَّمُ …', 'I speak …'], ['بِرِيطَانِيٌّ · بِرِيطَانِيَّةٌ', 'British (m. · f.)'], ['وَ · أَيْضًا · لِأَنَّ', 'and · also · because'],
  ],
  dialogue: {
    title: 'Meeting someone new — the whole unit', ar: 'لِقَاءٌ جَدِيدٌ',
    lines: [
      ['A', 'السَّلَامُ عَلَيْكُمْ! كَيْفَ حَالُكِ؟', 'Peace be upon you! How are you (to a girl)?'],
      ['B', 'وَعَلَيْكُمُ السَّلَامُ! بِخَيْرٍ، الحَمْدُ لِلّٰهِ. مَا اسْمُكَ؟', 'And upon you be peace! Fine, praise be to God. What is your name?'],
      ['A', 'اسْمِي أَنَسٌ، وَعُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً. وَأَنْتِ؟', 'My name is Anas, and I am thirteen. And you?'],
      ['B', 'اسْمِي جَنَى، وَأَنَا مِنَ الأُرْدُنِّ، لٰكِنِّي أَسْكُنُ فِي لَنْدَنَ.', 'My name is Jana; I am from Jordan, but I live in London.'],
      ['A', 'هٰذَا صَدِيقِي، اسْمُهُ نُوحٌ، وَهُوَ يَتَكَلَّمُ العَرَبِيَّةَ أَيْضًا.', 'This is my friend; his name is Nuh, and he speaks Arabic too.'],
      ['B', 'تَشَرَّفْنَا! مَعَ السَّلَامَةِ.', 'Pleased to meet you! Goodbye.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: with YOUR facts and a real friend — no slide.',
  },
  questions: [
    { q: 'كَيْفَ حَالُكَ؟ / كَيْفَ حَالُكِ؟', en: 'How are you? (boy / girl)', start: 'بِخَيْرٍ، الحَمْدُ لِلّٰهِ.', more: '… وَأَنْتَ؟ / وَأَنْتِ؟' },
    { q: 'مَا اسْمُكَ وَكَمْ عُمْرُكَ؟', en: 'Name and age?', start: 'اسْمِي … وَعُمْرِي …', more: '… سَنَةً' },
    { q: 'مِنْ أَيْنَ أَنْتَ؟ وَمَا جِنْسِيَّتُكَ؟', en: 'Where from? Nationality?', start: 'أَنَا مِنْ … ، وَأَنَا …', more: '… لٰكِنِّي أَسْكُنُ فِي …' },
    { q: 'أَيَّ لُغَاتٍ تَتَكَلَّمُ؟', en: 'Which languages do you speak?', start: 'أَتَكَلَّمُ …', more: '… وَ… أَيْضًا' },
    { q: 'حَدِّثْنِي عَنْ صَدِيقٍ أَوْ صَدِيقَةٍ.', en: 'Tell me about a friend.', start: 'صَدِيقِي اسْمُهُ … / صَدِيقَتِي اسْمُهَا …', more: '… يَسْكُنُ / تَسْكُنُ … وَيَتَكَلَّمُ / وَتَتَكَلَّمُ …' },
  ],
  card: {
    title: 'Role-play card — a welcome evening for new students', ar: 'حَفْلَةُ التَّرْحِيبِ', you: 'a new student', them: 'the head of year',
    tasks: [
      { ex: 'أَهْلًا وَسَهْلًا! مَا اسْمُكَ؟', task: 'Greet and give your name.', plan: 'مَا ← أَهْلًا بِكَ! اسْمِي …', model: 'أَهْلًا بِكَ! اسْمِي حَمْزَةُ.', modelEn: 'Hello! My name is Hamza.' },
      { ex: 'كَمْ عُمْرُكَ؟ وَمِنْ أَيْنَ أَنْتَ؟', task: 'Age and country.', plan: 'كَمْ · مِنْ أَيْنَ ← عُمْرِي … وَأَنَا مِنْ …', model: 'عُمْرِي اثْنَتَا عَشْرَةَ سَنَةً، وَأَنَا مِنَ الصُّومَالِ.', modelEn: 'I am twelve, and I am from Somalia.' },
      { ex: 'أَيَّ لُغَاتٍ تَتَكَلَّمُ؟', task: 'Two languages.', plan: 'أَيَّ ← أَتَكَلَّمُ … وَ…', model: 'أَتَكَلَّمُ الصُّومَالِيَّةَ وَالإِنْجِلِيزِيَّةَ، وَالعَرَبِيَّةَ قَلِيلًا.', modelEn: 'I speak Somali and English, and a little Arabic.' },
      { ex: 'مَنْ هٰذِهِ مَعَكَ؟', task: 'Introduce the girl with you.', plan: 'مَنْ ← هٰذِهِ … ، اسْمُهَا …', model: 'هٰذِهِ أُخْتِي، اسْمُهَا سَهْرُ، وَعُمْرُهَا عَشْرُ سَنَوَاتٍ.', modelEn: 'This is my sister; her name is Sahar, and she is ten.' },
    ],
    girl: 'اسْمُكِ · عُمْرُكِ · أَنْتِ · تَتَكَلَّمِينَ · مَعَكِ',
    notes: 'Review of the whole unit — every task uses a different F2 lesson.',
  },
  talk: {
    title: '30 seconds: me and a friend', ar: 'أَنَا وَصَدِيقِي',
    text: 'Talk for 30 seconds: greet the room, introduce yourself fully, then introduce one friend in the he / she form.',
    routes: {
      core: 'Name, age, country, language — then the friend’s name.',
      develop: 'Join with وَ · أَيْضًا; the friend’s age and city too.',
      stretch: 'Add لِأَنَّ (why you learn Arabic) and لٰكِنَّ (from … but live in …).',
    },
  },
  builder: [
    { en: 'My friend (f.) is Algerian and she speaks French.', cols: [['صَدِيقَتِي جَزَائِرِيَّةٌ،', 'صَدِيقِي جَزَائِرِيَّةٌ،'], ['وَتَتَكَلَّمُ', 'وَيَتَكَلَّمُ'], ['الفَرَنْسِيَّةَ.', 'فَرَنْسَا.']], key: [0, 0, 0], why: 'A girl → صَدِيقَتِي … جَزَائِرِيَّةٌ … تَتَكَلَّمُ.' },
    { en: 'How old are you, Yusuf?', cols: [['كَمْ', 'مَا'], ['عُمْرُكَ', 'عُمْرُكِ'], ['يَا يُوسُفُ؟', 'يُوسُفَ.']], key: [0, 0, 0], why: 'How old = كَمْ عُمْرُ…; to a boy -ka.' },
    { en: 'I am from Iraq, but I live in Wales.', cols: [['أَنَا مِنَ العِرَاقِ،', 'أَنَا فِي العِرَاقِ،'], ['لٰكِنِّي', 'لِأَنِّي'], ['أَسْكُنُ فِي وِيلْزَ.', 'يَسْكُنُ فِي وِيلْزَ.']], key: [0, 0, 0], why: 'From = مِنْ; but I = لٰكِنِّي; I live = أَسْكُنُ.' },
  ],
  errors: [
    { wrong: 'مَسَاءُ الخَيْرِ! — صَبَاحُ النُّورِ!', hint: 'Match the time of day.', right: 'مَسَاءُ الخَيْرِ! — مَسَاءُ النُّورِ!', why: 'Evening → evening reply: مَسَاءُ النُّورِ.' },
    { wrong: 'عُمْرِي عِشْرُونَ سَنَوَاتٍ.', hint: '11–20 + …', right: 'عُمْرِي عِشْرُونَ سَنَةً.', why: '11 and above → singular سَنَةً.' },
    { wrong: 'هٰذِهِ صَدِيقِي، اسْمُهُ زَيْدٌ.', hint: 'Zaid is a boy.', right: 'هٰذَا صَدِيقِي، اسْمُهُ زَيْدٌ.', why: 'A boy → هٰذَا صَدِيقِي.' },
  ],
  task: {
    title: 'Me and my friend', ar: 'أَنَا وَصَدِيقِي',
    text: 'Write a text (about 45–65 words) for a pen-friend website. Include: • a greeting • your name, age, nationality and city • your languages and why you learn Arabic • a friend: name, age, where he / she is from, languages • a polite closing.',
    phrases: [['اسْمِي … ، وَعُمْرِي … سَنَةً', 'my name is …, and I am …'], ['أَنَا … ، وَأَسْكُنُ فِي …', 'I am … (nationality), and I live in …'], ['صَدِيقِي اسْمُهُ … / صَدِيقَتِي اسْمُهَا …', 'my friend’s name is …'], ['أَتَعَلَّمُ العَرَبِيَّةَ لِأَنِّي …', 'I learn Arabic because I …']],
    coreFrames: [
      { ar: 'السَّلَامُ عَلَيْكُمْ! اسْمِي ______ ، وَعُمْرِي ______ سَنَةً.', en: 'Peace be upon you! My name is …, and I am …' },
      { ar: 'أَنَا ______ ، وَأَسْكُنُ فِي ______ .', en: 'I am …, and I live in …' },
      { ar: 'أَتَكَلَّمُ ______ وَ ______ .', en: 'I speak … and …' },
      { ar: 'صَدِيقِي / صَدِيقَتِي اسْمُهُ / اسْمُهَا ______ ، وَعُمْرُهُ / وَعُمْرُهَا ______ .', en: 'My friend’s name is …, and he / she is …' },
    ],
    developFrames: [
      { ar: 'هُوَ / هِيَ مِنْ ______ ، وَيَتَكَلَّمُ / وَتَتَكَلَّمُ ______ أَيْضًا.', en: 'He / she is from …, and speaks … too.' },
      { ar: 'أَتَعَلَّمُ العَرَبِيَّةَ لِأَنِّي ______ .', en: 'I learn Arabic because I …' },
    ],
    bank: ['اسْمِي · اسْمُهُ · اسْمُهَا', 'عُمْرِي · عُمْرُهُ · عُمْرُهَا', 'أَسْكُنُ · يَسْكُنُ · تَسْكُنُ', 'أَتَكَلَّمُ · يَتَكَلَّمُ · تَتَكَلَّمُ', 'مِصْرِيٌّ · مِصْرِيَّةٌ', 'وَ · أَيْضًا', 'لِأَنِّي', 'مَعَ السَّلَامَةِ'],
    model: {
      text: 'السَّلَامُ عَلَيْكُمْ! اسْمِي زَيْنَبُ، وَعُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً. أَنَا بِرِيطَانِيَّةٌ، وَأَسْكُنُ فِي لِيدْزَ. أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ وَالأُرْدِيَّةَ، وَأَتَعَلَّمُ العَرَبِيَّةَ لِأَنِّي أُحِبُّ لُغَةَ القُرْآنِ. صَدِيقَتِي اسْمُهَا لَيْنُ، وَعُمْرُهَا أَرْبَعَ عَشْرَةَ سَنَةً. هِيَ مِنْ سُورِيَا، وَتَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ أَيْضًا. هِيَ لَطِيفَةٌ وَذَكِيَّةٌ جِدًّا. مَعَ السَّلَامَةِ!',
      en: '“Peace be upon you! My name is Zaynab, and I am thirteen. I am British, and I live in Leeds. I speak English and Urdu, and I learn Arabic because I love the language of the Qur’an. My friend’s name is Leen, and she is fourteen. She is from Syria, and she speaks Arabic and English too. She is very kind and clever. Goodbye!”',
      find: ['أَنَا بِرِيطَانِيَّةٌ', 'لِأَنِّي أُحِبُّ', 'صَدِيقَتِي اسْمُهَا', 'وَتَتَكَلَّمُ العَرَبِيَّةَ'],
    },
  },
  checkCore: 'give your own facts AND your friend’s, in full sentences?',
  checkDevelop: 'use the right endings for I, he and she (اسْمِي · اسْمُهُ · اسْمُهَا)?',
});
