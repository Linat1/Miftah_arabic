'use strict';
/* Practice Room · F2-L04 · Nationality and language. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f2-l04',
  arShort: 'الجِنْسِيَّةُ وَاللُّغَةُ',
  grammar: 'anā min …; nationality nisba (-iyyun / -iyyatun); atakallamu · afhamu · aqraʾu · aktubu',
  focus: 'Students run their own speaking and writing practice about where they are from and the languages they speak: say the words, act a short dialogue, answer question cards, do a role-play card at an international summer camp, give a 30-second talk, then build, fix and write a short profile.',
  words1: 'Where are you from?', words2: 'Languages: speak, understand, read, write',
  dialogue: {
    title: 'Where are you from?', ar: 'مِنْ أَيْنَ أَنْتَ؟',
    lines: [
      ['A', 'مِنْ أَيْنَ أَنْتَ؟', 'Where are you from? (to a boy)'],
      ['B', 'أَنَا مِنْ بَاكِسْتَانَ، لٰكِنِّي أَسْكُنُ فِي بِرِيطَانِيَا.', 'I am from Pakistan, but I live in Britain.'],
      ['A', 'مَا جِنْسِيَّتُكَ؟', 'What is your nationality?'],
      ['B', 'أَنَا بِرِيطَانِيٌّ. وَأَنْتِ؟', 'I am British (m.). And you?'],
      ['A', 'أَنَا مِصْرِيَّةٌ. أَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ.', 'I am Egyptian (f.). I speak Arabic and English.'],
      ['B', 'أَنَا أَتَكَلَّمُ الأُرْدِيَّةَ وَالإِنْجِلِيزِيَّةَ، وَأَفْهَمُ العَرَبِيَّةَ قَلِيلًا.', 'I speak Urdu and English, and I understand a little Arabic.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: give your REAL country, nationality and languages.',
  },
  questions: [
    { q: 'مِنْ أَيْنَ أَنْتَ؟ / مِنْ أَيْنَ أَنْتِ؟', en: 'Where are you from? (boy / girl)', start: 'أَنَا مِنْ …', more: '… وَأَسْكُنُ فِي …' },
    { q: 'مَا جِنْسِيَّتُكَ؟', en: 'What is your nationality?', start: 'أَنَا … ← بِرِيطَانِيٌّ / بِرِيطَانِيَّةٌ', more: '… وَأُمِّي …' },
    { q: 'أَيَّ لُغَةٍ تَتَكَلَّمُ؟', en: 'Which language do you speak?', start: 'أَتَكَلَّمُ …', more: '… وَ … أَيْضًا' },
    { q: 'هَلْ تَقْرَأُ العَرَبِيَّةَ؟', en: 'Do you read Arabic?', start: 'نَعَمْ، أَقْرَأُ … / لَا، …', more: '… وَأَكْتُبُ قَلِيلًا' },
    { q: 'مِنْ أَيْنَ صَدِيقُكَ؟', en: 'Where is your friend from?', start: 'صَدِيقِي مِنْ …', more: '… هُوَ … / صَدِيقَتِي … هِيَ …' },
  ],
  card: {
    title: 'Role-play card — an international summer camp', ar: 'فِي المُخَيَّمِ الدَّوْلِيِّ', you: 'a camper from Britain', them: 'the camp leader',
    tasks: [
      { ex: 'أَهْلًا وَسَهْلًا! مِنْ أَيْنَ أَنْتَ؟', task: 'Say where you are from.', plan: 'مِنْ أَيْنَ ← أَنَا مِنْ …', model: 'أَنَا مِنْ بِرِيطَانِيَا.', modelEn: 'I am from Britain.' },
      { ex: 'مَا جِنْسِيَّتُكَ؟', task: 'Give your nationality.', plan: 'جِنْسِيَّةٌ ← أَنَا …', model: 'أَنَا بِرِيطَانِيٌّ.', modelEn: 'I am British.' },
      { ex: 'أَيَّ لُغَةٍ تَتَكَلَّمُ؟', task: 'Name two languages.', plan: 'أَيَّ ← أَتَكَلَّمُ … وَ…', model: 'أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ وَالأُرْدِيَّةَ.', modelEn: 'I speak English and Urdu.' },
      { ex: 'هَلْ تَفْهَمُ العَرَبِيَّةَ؟', task: 'Answer yes / no + a little.', plan: 'هَلْ ← نَعَمْ، أَفْهَمُ … قَلِيلًا', model: 'نَعَمْ، أَفْهَمُ العَرَبِيَّةَ قَلِيلًا، وَأَقْرَأُهَا.', modelEn: 'Yes, I understand Arabic a little, and I read it.' },
    ],
    girl: 'أَنْتِ · جِنْسِيَّتُكِ · تَتَكَلَّمِينَ · تَفْهَمِينَ — and the Speaker says بِرِيطَانِيَّةٌ',
    notes: 'Language: anā min + country · nationality agrees with the person (-iyyun / -iyyatun) · language verbs atakallamu, afhamu, aqraʾu.',
  },
  talk: {
    title: '30 seconds: where I am from', ar: 'مِنْ أَيْنَ أَنَا',
    text: 'Talk for 30 seconds: where you are from, where you live, your nationality and the languages you speak, understand and read.',
    routes: {
      core: 'أَنَا مِنْ … · أَنَا … (nationality) · أَتَكَلَّمُ …',
      develop: 'Add أَسْكُنُ فِي … and أَفْهَمُ / أَقْرَأُ …',
      stretch: 'Add a family member’s nationality with the right ending (أُمِّي مِصْرِيَّةٌ · أَبِي سُودَانِيٌّ).',
    },
    phrases: [['أَنَا مِنْ …', 'I am from …'], ['أَسْكُنُ فِي …', 'I live in …'], ['أَتَكَلَّمُ … وَ…', 'I speak … and …'], ['قَلِيلًا · جَيِّدًا', 'a little · well']],
  },
  builder: [
    { en: 'I am from Morocco; I am Moroccan (girl).', cols: [['أَنَا مِنَ المَغْرِبِ،', 'أَنَا فِي المَغْرِبِ،'], ['أَنَا', 'هُوَ'], ['مَغْرِبِيَّةٌ.', 'مَغْرِبِيٌّ.']], key: [0, 0, 0], why: 'From = مِنْ; a girl → مَغْرِبِيَّةٌ (-iyyatun).' },
    { en: 'I speak Arabic and English.', cols: [['أَتَكَلَّمُ', 'يَتَكَلَّمُ'], ['العَرَبِيَّةَ', 'عَرَبِيٌّ'], ['وَالإِنْجِلِيزِيَّةَ.', 'وَإِنْجِلْتِرَا.']], key: [0, 0, 0], why: 'I speak = أَتَكَلَّمُ; languages = العَرَبِيَّةَ · الإِنْجِلِيزِيَّةَ.' },
    { en: 'My father is Sudanese, and he speaks Arabic.', cols: [['أَبِي سُودَانِيٌّ،', 'أَبِي سُودَانِيَّةٌ،'], ['وَيَتَكَلَّمُ', 'وَأَتَكَلَّمُ'], ['العَرَبِيَّةَ.', 'عَرَبِيٌّ.']], key: [0, 0, 0], why: 'A man → سُودَانِيٌّ; he speaks = يَتَكَلَّمُ; the language = العَرَبِيَّةَ.' },
  ],
  errors: [
    { wrong: 'أُمِّي بَاكِسْتَانِيٌّ.', hint: 'My mother is a woman.', right: 'أُمِّي بَاكِسْتَانِيَّةٌ.', why: 'A woman → -iyyatun: بَاكِسْتَانِيَّةٌ.' },
    { wrong: 'أَنَا فِي الأُرْدُنِّ. (I am from Jordan.)', hint: 'from or in?', right: 'أَنَا مِنَ الأُرْدُنِّ.', why: 'From = مِنْ; in = فِي.' },
    { wrong: 'أَنَا أَتَكَلَّمُ عَرَبِيٌّ.', hint: 'The language, not the person.', right: 'أَنَا أَتَكَلَّمُ العَرَبِيَّةَ.', why: 'The language = العَرَبِيَّةُ; عَرَبِيٌّ = an Arab (person).' },
  ],
  task: {
    title: 'My profile: country and languages', ar: 'بِطَاقَتِي: البَلَدُ وَاللُّغَاتُ',
    text: 'Write a short profile (about 30–50 words) for an international pen-friend club. Include: • your name and where you are from • where you live • your nationality • the languages you speak and understand • one family member’s nationality.',
    range: [20, 65],
    phrases: [['أَنَا مِنْ … وَأَسْكُنُ فِي …', 'I am from … and I live in …'], ['أَنَا بِرِيطَانِيٌّ / بِرِيطَانِيَّةٌ', 'I am British (m. / f.)'], ['أَتَكَلَّمُ … ، وَأَفْهَمُ … قَلِيلًا', 'I speak …, and I understand … a little'], ['أُمِّي … ، وَأَبِي …', 'my mother is … and my father is …']],
    coreFrames: [
      { ar: 'اسْمِي ______ ، وَأَنَا مِنْ ______ .', en: 'My name is …, and I am from …' },
      { ar: 'أَسْكُنُ فِي ______ .', en: 'I live in …' },
      { ar: 'أَنَا ______ .', en: 'I am … (nationality).' },
      { ar: 'أَتَكَلَّمُ ______ وَ ______ .', en: 'I speak … and …' },
    ],
    developFrames: [
      { ar: 'أَفْهَمُ ______ قَلِيلًا، وَأَقْرَأُ ______ .', en: 'I understand … a little, and I read …' },
      { ar: 'أُمِّي ______ ، وَأَبِي ______ .', en: 'My mother is …, and my father is …' },
      { ar: 'أَكْتُبُ بِالعَرَبِيَّةِ ______ .', en: 'I write in Arabic …' },
    ],
    bank: ['أَنَا مِنْ', 'أَسْكُنُ فِي', 'بِرِيطَانِيٌّ · بِرِيطَانِيَّةٌ', 'مِصْرِيٌّ · مِصْرِيَّةٌ', 'أَتَكَلَّمُ', 'أَفْهَمُ · أَقْرَأُ', 'العَرَبِيَّةُ · الإِنْجِلِيزِيَّةُ', 'قَلِيلًا'],
    model: {
      text: 'مَرْحَبًا! اسْمِي حَمْزَةُ، وَأَنَا مِنَ الصُّومَالِ، لٰكِنِّي أَسْكُنُ فِي مَانْشِسْتَرَ. أَنَا بِرِيطَانِيٌّ. أُمِّي صُومَالِيَّةٌ، وَأَبِي صُومَالِيٌّ أَيْضًا. أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ وَالصُّومَالِيَّةَ، وَأَفْهَمُ العَرَبِيَّةَ قَلِيلًا، وَأَقْرَأُ القُرْآنَ بِالعَرَبِيَّةِ. مَعَ السَّلَامَةِ!',
      en: '“Hello! My name is Hamza, and I am from Somalia, but I live in Manchester. I am British. My mother is Somali, and my father is Somali too. I speak English and Somali, I understand Arabic a little, and I read the Qur’an in Arabic. Goodbye!”',
      find: ['أَنَا مِنَ الصُّومَالِ', 'أُمِّي صُومَالِيَّةٌ', 'أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ', 'أَفْهَمُ العَرَبِيَّةَ قَلِيلًا'],
    },
  },
  checkCore: 'use أَنَا مِنْ … and a language verb (أَتَكَلَّمُ)?',
  checkDevelop: 'make the nationality match the person (-iyyun / -iyyatun)?',
});
