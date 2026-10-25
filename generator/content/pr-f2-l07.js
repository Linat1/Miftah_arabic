'use strict';
/* Practice Room · F2-L07 · Building a full introduction. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f2-l07',
  arShort: 'تَعْرِيفٌ كَامِلٌ',
  grammar: 'joining facts with wa and ayḍan; ismī · ʿumrī · anā min · askunu fī · atakallamu; thumma',
  focus: 'Students run their own speaking and writing practice building a full introduction: say the key phrases, act a short dialogue, answer question cards, do a role-play card on a video call with a new pen-friend, give a 30-second introduction, then build, fix and write a connected introduction.',
  words1: 'Linking a full introduction', words2: 'The facts you give',
  addWords: [['اسْمِي …', 'my name is …'], ['عُمْرِي … سَنَةً', 'I am … years old'], ['أَنَا مِنْ …', 'I am from …'], ['جِنْسِيَّتِي …', 'my nationality is …'], ['أَتَكَلَّمُ …', 'I speak …'], ['مَدْرَسَتِي …', 'my school is …']],
  dialogue: {
    title: 'Tell me about yourself', ar: 'عَرِّفْنِي بِنَفْسِكَ',
    lines: [
      ['A', 'السَّلَامُ عَلَيْكُمْ! عَرِّفْنَا بِنَفْسِكَ.', 'Peace be upon you! Tell us about yourself.'],
      ['B', 'وَعَلَيْكُمُ السَّلَامُ! اسْمِي إِبْرَاهِيمُ، وَعُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً.', 'And upon you be peace! My name is Ibrahim, and I am fourteen.'],
      ['A', 'مِنْ أَيْنَ أَنْتَ؟', 'Where are you from?'],
      ['B', 'أَنَا مِنَ العِرَاقِ، وَأَسْكُنُ فِي بِرْمِنْغْهَامَ.', 'I am from Iraq, and I live in Birmingham.'],
      ['A', 'أَيَّ لُغَةٍ تَتَكَلَّمُ؟', 'Which language do you speak?'],
      ['B', 'أَتَكَلَّمُ العَرَبِيَّةَ، وَأَتَكَلَّمُ الإِنْجِلِيزِيَّةَ أَيْضًا. سَعِيدٌ بِلِقَائِكُمْ!', 'I speak Arabic, and I speak English too. Pleased to meet you!'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: the Speaker gives their OWN introduction, the Leader asks the questions.',
  },
  questions: [
    { q: 'مَا اسْمُكَ وَكَمْ عُمْرُكَ؟', en: 'What is your name and how old are you?', start: 'اسْمِي … وَعُمْرِي …', more: '… سَنَةً' },
    { q: 'مِنْ أَيْنَ أَنْتَ؟', en: 'Where are you from?', start: 'أَنَا مِنْ …', more: '… وَأَسْكُنُ فِي …' },
    { q: 'مَا جِنْسِيَّتُكَ؟', en: 'What is your nationality?', start: 'أَنَا …', more: '… وَأُمِّي … أَيْضًا' },
    { q: 'أَيَّ لُغَاتٍ تَتَكَلَّمُ؟', en: 'Which languages do you speak?', start: 'أَتَكَلَّمُ …', more: '… وَأَفْهَمُ … أَيْضًا' },
    { q: 'أَيْنَ تَدْرُسُ؟', en: 'Where do you study?', start: 'أَدْرُسُ فِي مَدْرَسَةِ …', more: '… فِي الصَّفِّ …' },
  ],
  card: {
    title: 'Role-play card — first video call with a pen-friend in Jordan', ar: 'أَوَّلُ مُكَالَمَةٍ مَعَ صَدِيقٍ بِالمُرَاسَلَةِ', you: 'yourself', them: 'your new pen-friend',
    tasks: [
      { ex: 'مَرْحَبًا! مَا اسْمُكَ؟', task: 'Greet and give your name.', plan: 'مَا ← مَرْحَبًا! اسْمِي …', model: 'مَرْحَبًا! اسْمِي زَكَرِيَّا.', modelEn: 'Hello! My name is Zakariya.' },
      { ex: 'كَمْ عُمْرُكَ؟', task: 'Give your age.', plan: 'كَمْ ← عُمْرِي … سَنَةً', model: 'عُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً.', modelEn: 'I am thirteen.' },
      { ex: 'أَيْنَ تَسْكُنُ؟', task: 'Say where you live + where you are from.', plan: 'أَيْنَ ← أَسْكُنُ فِي … وَأَنَا مِنْ …', model: 'أَسْكُنُ فِي لِيسْتَرَ، وَأَنَا مِنَ الهِنْدِ.', modelEn: 'I live in Leicester, and I am from India.' },
      { ex: 'هَلْ تَتَكَلَّمُ العَرَبِيَّةَ؟', task: 'Answer + another language.', plan: 'هَلْ ← نَعَمْ، … قَلِيلًا ، وَ… أَيْضًا', model: 'نَعَمْ، قَلِيلًا، وَأَتَكَلَّمُ الإِنْجِلِيزِيَّةَ وَالغُوجَرَاتِيَّةَ أَيْضًا.', modelEn: 'Yes, a little, and I speak English and Gujarati too.' },
    ],
    girl: 'اسْمُكِ · عُمْرُكِ · تَسْكُنِينَ · تَتَكَلَّمِينَ',
    notes: 'Language: one fact per sentence, joined with wa and ayḍan.',
  },
  talk: {
    title: '30 seconds: all about me', ar: 'كُلُّ شَيْءٍ عَنِّي',
    text: 'Give a full 30-second introduction with no stopping: greeting, name, age, where you are from, where you live, nationality, languages — and a polite closing.',
    routes: {
      core: 'Five facts: name, age, from, live, language.',
      develop: 'Join the facts with وَ and أَيْضًا.',
      stretch: 'Add your school and one family member (أُمِّي مِنْ … · أَخِي عُمْرُهُ …).',
    },
    phrases: [['اسْمِي … وَعُمْرِي …', 'my name is … and I am …'], ['أَنَا مِنْ … وَأَسْكُنُ فِي …', 'I am from … and I live in …'], ['أَتَكَلَّمُ … ، وَ… أَيْضًا', 'I speak …, and … too'], ['سَعِيدٌ / سَعِيدَةٌ بِلِقَائِكُمْ', 'pleased to meet you (boy / girl)']],
  },
  builder: [
    { en: 'My name is Adam and I am twelve.', cols: [['اسْمِي آدَمُ', 'اسْمُهُ آدَمُ'], ['وَعُمْرِي', 'أَيْضًا عُمْرِي'], ['اثْنَتَا عَشْرَةَ سَنَةً.', 'اثْنَتَا عَشْرَةَ سَنَوَاتٍ.']], key: [0, 0, 0], why: 'My = -ī; and = وَ; 11–20 + سَنَةً.' },
    { en: 'I am from Syria and I live in Glasgow.', cols: [['أَنَا مِنْ سُورِيَا', 'أَنَا فِي سُورِيَا'], ['وَأَسْكُنُ', 'وَيَسْكُنُ'], ['فِي غْلَاسْكُو.', 'مِنْ غْلَاسْكُو.']], key: [0, 0, 0], why: 'From = مِنْ; I live = أَسْكُنُ فِي.' },
    { en: 'I speak English, and Arabic too.', cols: [['أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ،', 'أَتَكَلَّمُ إِنْجِلِيزِيٌّ،'], ['وَالعَرَبِيَّةَ', 'وَعَرَبِيٌّ'], ['أَيْضًا.', 'جِدًّا.']], key: [0, 0, 0], why: 'Languages = الإِنْجِلِيزِيَّةَ · العَرَبِيَّةَ; too = أَيْضًا at the end.' },
  ],
  errors: [
    { wrong: 'اسْمِي سَلْمَى عُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً.', hint: 'Two facts need a joining word.', right: 'اسْمِي سَلْمَى، وَعُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً.', why: 'Join two facts with وَ.' },
    { wrong: 'أَيْضًا أَتَكَلَّمُ الفَرَنْسِيَّةَ.', hint: 'Where does أَيْضًا usually go?', right: 'أَتَكَلَّمُ الفَرَنْسِيَّةَ أَيْضًا.', why: 'أَيْضًا usually comes at the end.' },
    { wrong: 'أَنَا سَعِيدٌ بِلِقَائِكُمْ. (Sara speaking)', hint: 'Sara is a girl.', right: 'أَنَا سَعِيدَةٌ بِلِقَائِكُمْ.', why: 'A girl → سَعِيدَةٌ.' },
  ],
  task: {
    title: 'My full introduction', ar: 'تَعْرِيفِي الكَامِلُ',
    text: 'Write your full introduction (about 35–50 words) for the class website. Include: • a greeting • your name and age • where you are from and where you live • your nationality • your languages • a polite closing. Use وَ and أَيْضًا at least twice.',
    phrases: [['اسْمِي … ، وَعُمْرِي … سَنَةً', 'my name is …, and I am …'], ['أَنَا مِنْ … ، وَأَسْكُنُ فِي …', 'I am from …, and I live in …'], ['أَنَا … (nationality)', 'I am …'], ['أَتَكَلَّمُ … ، وَ… أَيْضًا', 'I speak …, and … too']],
    coreFrames: [
      { ar: 'السَّلَامُ عَلَيْكُمْ! اسْمِي ______ ، وَعُمْرِي ______ سَنَةً.', en: 'Peace be upon you! My name is …, and I am …' },
      { ar: 'أَنَا مِنْ ______ ، وَأَسْكُنُ فِي ______ .', en: 'I am from …, and I live in …' },
      { ar: 'أَنَا ______ ، وَأَتَكَلَّمُ ______ .', en: 'I am … (nationality), and I speak …' },
      { ar: 'سَعِيدٌ / سَعِيدَةٌ بِلِقَائِكُمْ!', en: 'Pleased to meet you!' },
    ],
    developFrames: [
      { ar: 'أَتَكَلَّمُ ______ ، وَأَفْهَمُ ______ أَيْضًا.', en: 'I speak …, and I understand … too.' },
      { ar: 'أَدْرُسُ فِي ______ ، فِي الصَّفِّ ______ .', en: 'I study at …, in year …' },
    ],
    bank: ['اسْمِي', 'عُمْرِي … سَنَةً', 'أَنَا مِنْ', 'أَسْكُنُ فِي', 'أَتَكَلَّمُ', 'وَ', 'أَيْضًا', 'سَعِيدٌ بِلِقَائِكُمْ'],
    model: {
      text: 'السَّلَامُ عَلَيْكُمْ! اسْمِي عَائِشَةُ، وَعُمْرِي اثْنَتَا عَشْرَةَ سَنَةً. أَنَا مِنَ اليَمَنِ، وَأَسْكُنُ فِي شِيفِيلْدَ. أَنَا بِرِيطَانِيَّةٌ، وَأُمِّي يَمَنِيَّةٌ. أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ وَالعَرَبِيَّةَ، وَأَفْهَمُ الفَرَنْسِيَّةَ قَلِيلًا أَيْضًا. أَدْرُسُ فِي مَدْرَسَةِ المَدِينَةِ، فِي الصَّفِّ الثَّامِنِ، وَمُعَلِّمَتِي اسْمُهَا الأُسْتَاذَةُ سَلْمَى. سَعِيدَةٌ بِلِقَائِكُمْ!',
      en: '“Peace be upon you! My name is Aisha and I am twelve. I am from Yemen, and I live in Sheffield. I am British, and my mother is Yemeni. I speak English and Arabic, and I understand a little French too. I study at Al Madina School, in Year 8, and my teacher is Miss Salma. Pleased to meet you!”',
      find: ['وَعُمْرِي اثْنَتَا عَشْرَةَ سَنَةً', 'وَأَسْكُنُ فِي', 'أَيْضًا', 'سَعِيدَةٌ بِلِقَائِكُمْ'],
    },
  },
  checkCore: 'give at least five facts in full sentences?',
  checkDevelop: 'join the facts with وَ and أَيْضًا?',
});
