'use strict';
/* Practice Room · F2-L06 · Polite classroom Arabic. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f2-l06',
  arShort: 'لُغَةُ الأَدَبِ فِي الصَّفِّ',
  grammar: 'min faḍlika / min faḍliki; hal yumkinu an …?; tafaḍḍal / tafaḍḍalī; apologising and thanking',
  focus: 'Students run their own speaking and writing practice with polite classroom Arabic: say the polite phrases, act a short dialogue, answer request cards, do a role-play card borrowing things in class, give a 30-second polite routine, then build, fix and write a short polite message to a teacher.',
  words1: 'Please, thank you, sorry', words2: 'Asking for help and permission',
  dialogue: {
    title: 'May I borrow a pen?', ar: 'هَلْ يُمْكِنُ أَنْ آخُذَ قَلَمًا؟',
    lines: [
      ['A', 'مَعْذِرَةً، هَلْ عِنْدَكِ قَلَمٌ؟', 'Excuse me, do you have a pen? (to a girl)'],
      ['B', 'نَعَمْ، تَفَضَّلْ.', 'Yes, here you are.'],
      ['A', 'شُكْرًا جَزِيلًا!', 'Thank you very much!'],
      ['B', 'عَفْوًا.', 'You’re welcome.'],
      ['A', 'يَا أُسْتَاذُ، لَا أَفْهَمُ. مِنْ فَضْلِكَ، أَعِدْ.', 'Sir, I don’t understand. Please repeat.'],
      ['C', 'لَا بَأْسَ. اسْمَعْ مَرَّةً أُخْرَى.', 'No problem. Listen once more.'],
    ],
    foot: 'Round 1: read it in threes (A, B and C = the teacher). Round 2: swap letters. Round 3: borrow a different object (كِتَابٌ · مِسْطَرَةٌ · مِمْحَاةٌ).',
  },
  questions: [
    { q: 'مِنْ فَضْلِكَ، هَلْ عِنْدَكَ قَلَمٌ؟', en: 'Please, do you have a pen?', start: 'نَعَمْ، تَفَضَّلْ. / لَا، آسِفٌ.', more: '… عِنْدِي قَلَمَانِ!' },
    { q: 'شُكْرًا جَزِيلًا!', en: 'Thank you very much!', start: 'عَفْوًا.', more: '… لَا بَأْسَ' },
    { q: 'أَنَا آسِفٌ، تَأَخَّرْتُ.', en: 'I’m sorry, I am late.', start: 'لَا بَأْسَ.', more: '… تَفَضَّلْ، اجْلِسْ' },
    { q: 'هَلْ تَفْهَمُ؟', en: 'Do you understand?', start: 'نَعَمْ، أَفْهَمُ. / لَا، لَا أَفْهَمُ.', more: '… أَعِدْ مِنْ فَضْلِكَ' },
    { q: 'مَاذَا تَقُولُ لِلْمُعَلِّمِ عِنْدَمَا تُرِيدُ أَنْ تَسْأَلَ؟', en: 'What do you say to the teacher to ask a question?', start: 'يَا أُسْتَاذُ، …', more: '… هَلْ يُمْكِنُ أَنْ …؟' },
  ],
  qTitle: 'Answer politely — then add more',
  card: {
    title: 'Role-play card — in an Arabic class', ar: 'فِي حِصَّةِ العَرَبِيَّةِ', you: 'a student', them: 'the teacher',
    tasks: [
      { ex: 'صَبَاحَ الخَيْرِ! أَيْنَ كِتَابُكَ؟', task: 'Say sorry, you don’t have it.', plan: 'أَيْنَ ← أَنَا آسِفٌ، …', model: 'صَبَاحَ النُّورِ! أَنَا آسِفٌ، لَيْسَ مَعِي كِتَابِي.', modelEn: 'Good morning! I’m sorry, I don’t have my book with me.' },
      { ex: 'لَا بَأْسَ. تَفَضَّلْ هٰذَا الكِتَابَ.', task: 'Thank the teacher.', plan: 'تَفَضَّلْ ← شُكْرًا …', model: 'شُكْرًا جَزِيلًا يَا أُسْتَاذُ!', modelEn: 'Thank you very much, Sir!' },
      { ex: 'اقْرَأِ الصَّفْحَةَ عَشَرَةً.', task: 'Say you don’t understand; ask to repeat.', plan: 'لَا أَفْهَمُ ← … أَعِدْ مِنْ فَضْلِكَ', model: 'مَعْذِرَةً، لَا أَفْهَمُ. أَعِدْ مِنْ فَضْلِكَ.', modelEn: 'Excuse me, I don’t understand. Please repeat.' },
      { ex: 'هَلْ عِنْدَكَ سُؤَالٌ؟', task: 'Ask permission to go out.', plan: 'سُؤَالٌ ← نَعَمْ، هَلْ يُمْكِنُ أَنْ …؟', model: 'نَعَمْ، هَلْ يُمْكِنُ أَنْ أَخْرُجَ، مِنْ فَضْلِكَ؟', modelEn: 'Yes, may I go out, please?' },
    ],
    girl: 'كِتَابُكِ · تَفَضَّلِي · عِنْدَكِ — and the Speaker says أَنَا آسِفَةٌ; to a female teacher: يَا أُسْتَاذَةُ · أَعِيدِي',
    notes: 'Language: anā āsifun / āsifatun · laysa maʿī · shukran jazīlan · hal yumkinu an + verb in -a.',
  },
  talk: {
    title: '30 seconds: polite in class', ar: 'مُؤَدَّبٌ فِي الصَّفِّ',
    text: 'In 30 seconds, show all the polite phrases you know in one short scene: arrive late, say sorry, ask for a pen, thank someone, say you don’t understand and ask to repeat.',
    routes: {
      core: 'Four phrases: أَنَا آسِفٌ · مِنْ فَضْلِكَ · شُكْرًا · لَا أَفْهَمُ.',
      develop: 'Add a full request: هَلْ عِنْدَكَ …؟ and a reply تَفَضَّلْ.',
      stretch: 'Use هَلْ يُمْكِنُ أَنْ …؟ and the girl / boy forms correctly.',
    },
    phrases: [['مِنْ فَضْلِكَ / مِنْ فَضْلِكِ', 'please (to a boy / girl)'], ['شُكْرًا جَزِيلًا', 'thank you very much'], ['أَنَا آسِفٌ / آسِفَةٌ', 'I am sorry (boy / girl)'], ['هَلْ يُمْكِنُ أَنْ …؟', 'may I …?']],
  },
  builder: [
    { en: 'Excuse me, do you have a ruler?', cols: [['مَعْذِرَةً،', 'عَفْوًا جَزِيلًا،'], ['هَلْ عِنْدَكَ', 'أَيْنَ عِنْدَكَ'], ['مِسْطَرَةٌ؟', 'مِسْطَرَةً.']], key: [0, 0, 0], why: 'Excuse me = مَعْذِرَةً; a yes / no question starts with هَلْ.' },
    { en: 'Here you are (to a girl).', cols: [['تَفَضَّلِي', 'تَفَضَّلْ'], ['، هٰذَا', '، هٰذِهِ'], ['قَلَمِي.', 'قَلَمُكِ.']], key: [0, 0, 0], why: 'To a girl → تَفَضَّلِي; قَلَمٌ is masculine → هٰذَا.' },
    { en: 'May I go out, please?', cols: [['هَلْ يُمْكِنُ', 'هَلْ يُمْكِنُكَ'], ['أَنْ أَخْرُجَ', 'أَنَا أَخْرُجُ'], ['مِنْ فَضْلِكَ؟', 'شُكْرًا؟']], key: [0, 0, 0], why: 'May I = هَلْ يُمْكِنُ أَنْ + “I” verb ending in -a.' },
  ],
  errors: [
    { wrong: 'شُكْرًا! — شُكْرًا!', hint: 'How do you reply to a thank-you?', right: 'شُكْرًا! — عَفْوًا!', why: 'The reply to شُكْرًا is عَفْوًا.' },
    { wrong: 'أَنَا آسِفٌ. (Maryam speaking)', hint: 'Maryam is a girl.', right: 'أَنَا آسِفَةٌ.', why: 'A girl says آسِفَةٌ (with ة).' },
    { wrong: 'تَفَضَّلْ يَا زَيْنَبُ.', hint: 'Zaynab is a girl.', right: 'تَفَضَّلِي يَا زَيْنَبُ.', why: 'To a girl: تَفَضَّلِي (-ī).' },
  ],
  task: {
    title: 'A polite message to my teacher', ar: 'رِسَالَةٌ مُؤَدَّبَةٌ إِلَى مُعَلِّمِي',
    text: 'Write a short, polite message (about 30–45 words) to your teacher. Include: • a polite greeting • say sorry (you missed the lesson / you forgot your homework) • a polite request (هَلْ يُمْكِنُ أَنْ …؟) • a thank-you and a goodbye.',
    range: [20, 60],
    phrases: [['السَّلَامُ عَلَيْكُمْ يَا أُسْتَاذُ / يَا أُسْتَاذَةُ', 'peace be upon you, Sir / Miss'], ['أَنَا آسِفٌ / آسِفَةٌ، …', 'I am sorry, …'], ['هَلْ يُمْكِنُ أَنْ …؟', 'may I / is it possible to …?'], ['شُكْرًا جَزِيلًا', 'thank you very much']],
    coreFrames: [
      { ar: 'السَّلَامُ عَلَيْكُمْ يَا ______ ،', en: 'Peace be upon you, Sir / Miss,' },
      { ar: 'أَنَا ______ ، نَسِيتُ ______ .', en: 'I am sorry, I forgot …' },
      { ar: 'هَلْ يُمْكِنُ أَنْ ______ ، مِنْ فَضْلِكَ؟', en: 'May I …, please?' },
      { ar: 'شُكْرًا ______ . مَعَ السَّلَامَةِ.', en: 'Thank you very much. Goodbye.' },
    ],
    developFrames: [
      { ar: 'كُنْتُ مَرِيضًا / مَرِيضَةً، وَ ______ .', en: 'I was ill (m. / f.), and …' },
      { ar: 'لَا أَفْهَمُ ______ ، هَلْ يُمْكِنُ أَنْ ______ ؟', en: 'I don’t understand …; is it possible to …?' },
    ],
    bank: ['مِنْ فَضْلِكَ', 'شُكْرًا جَزِيلًا', 'أَنَا آسِفٌ · آسِفَةٌ', 'مَعْذِرَةً', 'لَا أَفْهَمُ', 'هَلْ يُمْكِنُ أَنْ', 'يَا أُسْتَاذُ · يَا أُسْتَاذَةُ', 'الوَاجِبُ'],
    model: {
      text: 'السَّلَامُ عَلَيْكُمْ يَا أُسْتَاذَةُ هِنْدُ، أَنَا آسِفَةٌ، نَسِيتُ الوَاجِبَ اليَوْمَ. كُنْتُ مَرِيضَةً أَمْسِ. هَلْ يُمْكِنُ أَنْ أُرْسِلَهُ غَدًا، مِنْ فَضْلِكِ؟ وَأَيْضًا لَا أَفْهَمُ الصَّفْحَةَ الخَامِسَةَ. شُكْرًا جَزِيلًا. مَعَ السَّلَامَةِ، لَيْلَى.',
      en: '“Peace be upon you, Miss Hind. I am sorry, I forgot the homework today. I was ill yesterday. May I send it tomorrow, please? Also, I don’t understand page five. Thank you very much. Goodbye, Layla.”',
      find: ['أَنَا آسِفَةٌ', 'هَلْ يُمْكِنُ أَنْ', 'مِنْ فَضْلِكِ', 'شُكْرًا جَزِيلًا'],
    },
  },
  checkCore: 'use a polite word (مِنْ فَضْلِكَ · شُكْرًا · آسِفٌ) in every line?',
  checkDevelop: 'choose the boy / girl form correctly (-ka / -ki · آسِفٌ / آسِفَةٌ)?',
});
