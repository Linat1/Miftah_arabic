'use strict';
/* Practice Room · F2-L08 · Reading and writing personal profiles. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f2-l08',
  arShort: 'البِطَاقَاتُ الشَّخْصِيَّةُ',
  grammar: 'from “I” to “he / she”: ismuhu / ismuhā; ya- (he) and ta- (she) verbs: yaskunu / taskunu, yatakallamu / tatakallamu; hiwāyatuhu',
  focus: 'Students run their own speaking and writing practice with personal profiles: say the profile words, act a short dialogue about a classmate, answer question cards in the third person, do a role-play card reporting on a new student, give a 30-second talk about a friend, then build, fix and write a profile of someone else.',
  words1: 'Profile categories', words2: 'Talking about him and her',
  addWords: [['اسْمُهُ · اسْمُهَا', 'his name · her name'], ['عُمْرُهُ · عُمْرُهَا', 'his age · her age'], ['يَسْكُنُ · تَسْكُنُ', 'he lives · she lives'], ['يَتَكَلَّمُ · تَتَكَلَّمُ', 'he speaks · she speaks'], ['يُحِبُّ · تُحِبُّ', 'he likes · she likes'], ['هِوَايَتُهُ · هِوَايَتُهَا', 'his hobby · her hobby']],
  dialogue: {
    title: 'Who is the new student?', ar: 'مَنِ الطَّالِبَةُ الجَدِيدَةُ؟',
    lines: [
      ['A', 'مَنِ الطَّالِبَةُ الجَدِيدَةُ؟', 'Who is the new student (f.)?'],
      ['B', 'اسْمُهَا رِيمُ، وَعُمْرُهَا ثَلَاثَ عَشْرَةَ سَنَةً.', 'Her name is Reem, and she is thirteen.'],
      ['A', 'أَيْنَ تَسْكُنُ؟', 'Where does she live?'],
      ['B', 'تَسْكُنُ فِي لَنْدَنَ، وَهِيَ مِنْ تُونُسَ.', 'She lives in London, and she is from Tunisia.'],
      ['A', 'مَا هِوَايَتُهَا؟', 'What is her hobby?'],
      ['B', 'هِوَايَتُهَا الرَّسْمُ، وَتَتَكَلَّمُ العَرَبِيَّةَ وَالفَرَنْسِيَّةَ.', 'Her hobby is drawing, and she speaks Arabic and French.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: change Reem to a BOY (اسْمُهُ · يَسْكُنُ · هِوَايَتُهُ) and say it again.',
  },
  questions: [
    { q: 'مَا اسْمُ صَدِيقِكَ؟', en: 'What is your friend’s name?', start: 'اسْمُهُ …', more: '… وَعُمْرُهُ …' },
    { q: 'أَيْنَ يَسْكُنُ؟', en: 'Where does he live?', start: 'يَسْكُنُ فِي …', more: '… وَهُوَ مِنْ …' },
    { q: 'مَا اسْمُ صَدِيقَتِكِ؟', en: 'What is your (girl) friend’s name?', start: 'اسْمُهَا …', more: '… وَعُمْرُهَا …' },
    { q: 'أَيَّ لُغَةٍ تَتَكَلَّمُ صَدِيقَتُكِ؟', en: 'Which language does your friend (f.) speak?', start: 'تَتَكَلَّمُ …', more: '… وَ… أَيْضًا' },
    { q: 'مَا هِوَايَةُ صَدِيقِكَ المُفَضَّلَةُ؟', en: 'What is your friend’s favourite hobby?', start: 'هِوَايَتُهُ …', more: '… يُحِبُّ … كَثِيرًا' },
  ],
  card: {
    title: 'Role-play card — telling the teacher about a new student', ar: 'أُخْبِرُ المُعَلِّمَ عَنْ طَالِبٍ جَدِيدٍ', you: 'a class helper', them: 'the teacher',
    tasks: [
      { ex: 'مَا اسْمُ الطَّالِبِ الجَدِيدِ؟', task: 'Give his name.', plan: 'مَا ← اسْمُهُ …', model: 'اسْمُهُ مُصْطَفَى.', modelEn: 'His name is Mustafa.' },
      { ex: 'كَمْ عُمْرُهُ؟', task: 'Give his age.', plan: 'كَمْ ← عُمْرُهُ … سَنَةً', model: 'عُمْرُهُ اثْنَتَا عَشْرَةَ سَنَةً.', modelEn: 'He is twelve.' },
      { ex: 'مِنْ أَيْنَ هُوَ؟ وَأَيْنَ يَسْكُنُ؟', task: 'Give where he is from and lives.', plan: 'مِنْ أَيْنَ ← هُوَ مِنْ … وَيَسْكُنُ فِي …', model: 'هُوَ مِنَ السُّودَانِ، وَيَسْكُنُ قُرْبَ المَدْرَسَةِ.', modelEn: 'He is from Sudan, and he lives near the school.' },
      { ex: 'مَاذَا يُحِبُّ؟', task: 'Give his hobby.', plan: 'مَاذَا ← يُحِبُّ … / هِوَايَتُهُ …', model: 'يُحِبُّ كُرَةَ القَدَمِ، وَهِوَايَتُهُ القِرَاءَةُ أَيْضًا.', modelEn: 'He likes football, and his hobby is reading too.' },
    ],
    girl: 'if the new student is a girl: اسْمُهَا · عُمْرُهَا · هِيَ · تَسْكُنُ · تُحِبُّ · هِوَايَتُهَا',
    notes: 'Language: -hu / -hā endings · ya- for he, ta- for she.',
  },
  talk: {
    title: '30 seconds: my best friend', ar: 'صَدِيقِي المُفَضَّلُ',
    text: 'Talk for 30 seconds about your best friend: name, age, where he or she is from and lives, languages and hobby.',
    routes: {
      core: 'اسْمُهُ / اسْمُهَا … · عُمْرُهُ / عُمْرُهَا …',
      develop: 'Add يَسْكُنُ / تَسْكُنُ … and يَتَكَلَّمُ / تَتَكَلَّمُ …',
      stretch: 'Talk about TWO friends: a boy and a girl, with the right endings for each.',
    },
    phrases: [['اسْمُهُ … · اسْمُهَا …', 'his name … · her name …'], ['يَسْكُنُ · تَسْكُنُ فِي …', 'he lives · she lives in …'], ['هِوَايَتُهُ · هِوَايَتُهَا …', 'his hobby · her hobby …'], ['هُوَ · هِيَ مِنْ …', 'he · she is from …']],
  },
  builder: [
    { en: 'She lives in Leeds.', cols: [['هِيَ', 'هُوَ'], ['تَسْكُنُ', 'يَسْكُنُ'], ['فِي لِيدْزَ.', 'مِنْ لِيدْزَ.']], key: [0, 0, 0], why: 'She → هِيَ تَسْكُنُ (ta-); in = فِي.' },
    { en: 'His hobby is swimming.', cols: [['هِوَايَتُهُ', 'هِوَايَتُهَا'], ['السِّبَاحَةُ', 'يَسْبَحُ'], ['.', 'أَيْضًا.']], key: [0, 0, 0], why: 'His → -hu; the hobby is a noun: السِّبَاحَةُ.' },
    { en: 'He speaks Urdu and English.', cols: [['يَتَكَلَّمُ', 'تَتَكَلَّمُ'], ['الأُرْدِيَّةَ', 'أُرْدِيٌّ'], ['وَالإِنْجِلِيزِيَّةَ.', 'وَإِنْجِلْتِرَا.']], key: [0, 0, 0], why: 'He → ya-; languages = الأُرْدِيَّةَ · الإِنْجِلِيزِيَّةَ.' },
  ],
  errors: [
    { wrong: 'مَرْيَمُ يَسْكُنُ فِي لَنْدَنَ.', hint: 'Maryam is a she.', right: 'مَرْيَمُ تَسْكُنُ فِي لَنْدَنَ.', why: 'She → ta-: تَسْكُنُ.' },
    { wrong: 'عُمَرُ اسْمُهَا عُمَرُ.', hint: 'Whose name?', right: 'صَدِيقِي اسْمُهُ عُمَرُ.', why: 'His name → اسْمُهُ (-hu).' },
    { wrong: 'هِوَايَتُهَا يَرْسُمُ.', hint: 'A hobby is a thing (a noun).', right: 'هِوَايَتُهَا الرَّسْمُ.', why: 'Hobby + noun: الرَّسْمُ (drawing).' },
  ],
  task: {
    title: 'A profile of my friend', ar: 'بِطَاقَةُ صَدِيقِي',
    text: 'Write a profile (about 35–50 words) of a friend or a family member for the school magazine. Include: • name and age • where he / she is from and lives • languages • hobby and favourite thing • one sentence about why you like him / her.',
    phrases: [['اسْمُهُ … ، وَعُمْرُهُ …', 'his name is …, and he is …'], ['هِيَ مِنْ … ، وَتَسْكُنُ فِي …', 'she is from …, and lives in …'], ['يَتَكَلَّمُ / تَتَكَلَّمُ …', 'he / she speaks …'], ['هِوَايَتُهُ / هِوَايَتُهَا …', 'his / her hobby is …']],
    coreFrames: [
      { ar: 'صَدِيقِي / صَدِيقَتِي اسْمُهُ / اسْمُهَا ______ .', en: 'My friend’s name is …' },
      { ar: 'عُمْرُهُ / عُمْرُهَا ______ سَنَةً.', en: 'He / she is … years old.' },
      { ar: 'هُوَ / هِيَ مِنْ ______ ، وَيَسْكُنُ / وَتَسْكُنُ فِي ______ .', en: 'He / she is from …, and lives in …' },
      { ar: 'هِوَايَتُهُ / هِوَايَتُهَا ______ .', en: 'His / her hobby is …' },
    ],
    developFrames: [
      { ar: 'يَتَكَلَّمُ / تَتَكَلَّمُ ______ وَ ______ .', en: 'He / she speaks … and …' },
      { ar: 'أُحِبُّهُ / أُحِبُّهَا لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I like him / her because he / she is …' },
    ],
    bank: ['اسْمُهُ · اسْمُهَا', 'عُمْرُهُ · عُمْرُهَا', 'يَسْكُنُ · تَسْكُنُ', 'يَتَكَلَّمُ · تَتَكَلَّمُ', 'هِوَايَتُهُ · هِوَايَتُهَا', 'المُفَضَّلُ · المُفَضَّلَةُ', 'لَطِيفٌ · لَطِيفَةٌ', 'لِأَنَّ'],
    model: {
      text: 'صَدِيقَتِي اسْمُهَا يَاسْمِينُ، وَعُمْرُهَا ثَلَاثَ عَشْرَةَ سَنَةً. هِيَ مِنَ المَغْرِبِ، وَتَسْكُنُ فِي بِرِسْتُولَ. تَتَكَلَّمُ العَرَبِيَّةَ وَالفَرَنْسِيَّةَ وَالإِنْجِلِيزِيَّةَ. هِوَايَتُهَا الرَّسْمُ، وَلَوْنُهَا المُفَضَّلُ الأَزْرَقُ. عِنْدَهَا أَخٌ صَغِيرٌ اسْمُهُ سَامِي، وَعُمْرُهُ سِتُّ سَنَوَاتٍ. هِيَ تَدْرُسُ مَعِي فِي الصَّفِّ الثَّامِنِ. أُحِبُّهَا لِأَنَّهَا لَطِيفَةٌ وَذَكِيَّةٌ جِدًّا.',
      en: '“My friend’s name is Yasmin, and she is thirteen. She is from Morocco, and she lives in Bristol. She speaks Arabic, French and English. Her hobby is drawing, and her favourite colour is blue. She has a little brother called Sami, who is six. She studies with me in Year 8. I like her because she is very kind and clever.”',
      find: ['اسْمُهَا يَاسْمِينُ', 'وَتَسْكُنُ فِي', 'هِوَايَتُهَا الرَّسْمُ', 'لِأَنَّهَا لَطِيفَةٌ'],
    },
  },
  checkCore: 'use -hu for him and -hā for her (اسْمُهُ · اسْمُهَا)?',
  checkDevelop: 'use ya- verbs for him and ta- verbs for her?',
});
