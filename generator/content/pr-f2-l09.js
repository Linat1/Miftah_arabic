'use strict';
/* Practice Room · F2-L09 · Listening to personal introductions. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f2-l09',
  arShort: 'أَسْتَمِعُ وَأُعِيدُ',
  grammar: 'listening for facts (name · age · country · city · language · hobby); retelling in the third person (ismuhu · taskunu · yatakallamu)',
  focus: 'Students run their own listening-and-speaking practice in pairs: one partner introduces themselves, the other listens for the facts, notes them and retells them in the third person; then they build, fix and write a short report of what they heard.',
  words1: 'Listening instructions', words2: 'The facts you listen for',
  addWords: [['الاسْمُ', 'the name'], ['العُمْرُ', 'the age'], ['البَلَدُ', 'the country'], ['المَدِينَةُ', 'the city'], ['اللُّغَةُ', 'the language'], ['الهِوَايَةُ', 'the hobby']],
  warm: {
    title: 'Listen, then say it', ar: 'اسْمَعْ ثُمَّ قُلْ',
    text: 'The Leader says a word or a fact in ARABIC from the word bank (or a fact about themselves). The Speaker listens WITHOUT looking and says what it means in English, then repeats it in Arabic.',
    steps: ['Leader: say 4 words or short facts in Arabic.', 'Speaker: eyes off the slide — say the meaning, then repeat the Arabic.', 'Coach checks with the slide.', 'Swap roles — new words each time.'],
    routes: { core: 'Single words: the meaning in English.', develop: 'Short facts: عُمْرِي … · أَسْكُنُ فِي …', stretch: 'Two facts in one sentence — repeat them in the he / she form.' },
  },
  dialogue: {
    title: 'Listen and retell', ar: 'اسْتَمِعْ وَأَعِدْ',
    lines: [
      ['A', 'اسْمِي طَارِقٌ، وَعُمْرِي خَمْسَ عَشْرَةَ سَنَةً. أَنَا مِنْ لِيبْيَا.', 'My name is Tariq, and I am fifteen. I am from Libya.'],
      ['A', 'أَسْكُنُ فِي كَارْدِيفَ، وَأَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ. هِوَايَتِي السِّبَاحَةُ.', 'I live in Cardiff, and I speak Arabic and English. My hobby is swimming.'],
      ['B', 'اسْمُهُ طَارِقٌ، وَعُمْرُهُ خَمْسَ عَشْرَةَ سَنَةً.', 'His name is Tariq, and he is fifteen.'],
      ['B', 'هُوَ مِنْ لِيبْيَا، وَيَسْكُنُ فِي كَارْدِيفَ.', 'He is from Libya, and he lives in Cardiff.'],
      ['B', 'يَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ، وَهِوَايَتُهُ السِّبَاحَةُ.', 'He speaks Arabic and English, and his hobby is swimming.'],
    ],
    foot: 'A speaks (I); B listens and RETELLS (he / she). Round 2: swap. Round 3: A changes three facts; B listens with the slide hidden and retells.',
    notes: 'This is the core skill of the lesson: hear “I” forms and turn them into “he / she” forms.',
  },
  questions: [
    { q: 'اسْمَعْ: «اسْمِي … وَعُمْرِي …» — مَا اسْمُهُ؟ كَمْ عُمْرُهُ؟', en: 'Listen to your partner: what is his / her name? age?', start: 'اسْمُهُ / اسْمُهَا … وَعُمْرُهُ / عُمْرُهَا …', more: '… سَنَةً' },
    { q: 'مِنْ أَيْنَ هُوَ / هِيَ؟', en: 'Where is he / she from?', start: 'هُوَ / هِيَ مِنْ …', more: '… وَيَسْكُنُ / وَتَسْكُنُ فِي …' },
    { q: 'أَيَّ لُغَةٍ يَتَكَلَّمُ / تَتَكَلَّمُ؟', en: 'Which language does he / she speak?', start: 'يَتَكَلَّمُ / تَتَكَلَّمُ …', more: '… وَ… أَيْضًا' },
    { q: 'مَا هِوَايَتُهُ / هِوَايَتُهَا؟', en: 'What is his / her hobby?', start: 'هِوَايَتُهُ / هِوَايَتُهَا …', more: '… وَيُحِبُّ / وَتُحِبُّ …' },
    { q: 'صَحِيحٌ أَمْ خَطَأٌ؟ «هُوَ مِنْ مِصْرَ.»', en: 'True or false? (the Leader says a fact about the Speaker)', start: 'صَحِيحٌ. / خَطَأٌ، أَنَا مِنْ …', more: '… وَأَسْكُنُ فِي …' },
  ],
  qTitle: 'Introduce yourself — your partner answers about YOU',
  card: {
    title: 'Card — interview a new member, then report back', ar: 'مُقَابَلَةٌ ثُمَّ تَقْرِيرٌ', you: 'a club reporter', them: 'the club leader (who heard nothing)',
    tasks: [
      { ex: 'مَا اسْمُ العُضْوِ الجَدِيدِ؟', task: 'Report the name you heard.', plan: 'مَا ← اسْمُهُ / اسْمُهَا …', model: 'اسْمُهَا نَادِيَةُ.', modelEn: 'Her name is Nadia.' },
      { ex: 'كَمْ عُمْرُهَا؟', task: 'Report the age.', plan: 'كَمْ ← عُمْرُهَا … سَنَةً', model: 'عُمْرُهَا أَرْبَعَ عَشْرَةَ سَنَةً.', modelEn: 'She is fourteen.' },
      { ex: 'مِنْ أَيْنَ هِيَ؟ وَأَيْنَ تَسْكُنُ؟', task: 'Report country and city.', plan: 'مِنْ أَيْنَ ← هِيَ مِنْ … وَتَسْكُنُ فِي …', model: 'هِيَ مِنَ الجَزَائِرِ، وَتَسْكُنُ فِي لُوتُنَ.', modelEn: 'She is from Algeria, and she lives in Luton.' },
      { ex: 'مَاذَا تُحِبُّ؟', task: 'Report her hobby and languages.', plan: 'مَاذَا ← تُحِبُّ … وَتَتَكَلَّمُ …', model: 'تُحِبُّ كُرَةَ السَّلَّةِ، وَتَتَكَلَّمُ العَرَبِيَّةَ وَالفَرَنْسِيَّةَ.', modelEn: 'She likes basketball, and she speaks Arabic and French.' },
    ],
    foot: 'Before the card: the Speaker interviews the Coach for 1 minute (name, age, country, city, hobby, language) and notes the facts. Then the Leader asks the card questions and the Speaker REPORTS. Swap roles.',
    girl: 'if the member is a boy: اسْمُهُ · عُمْرُهُ · هُوَ · يَسْكُنُ · يُحِبُّ · يَتَكَلَّمُ',
    notes: 'This turns the listening skill into a real exchange: ask, listen, note, report.',
  },
  talk: {
    title: '30 seconds: who is my partner?', ar: 'مَنْ زَمِيلِي؟',
    text: 'Introduce your partner to the room in 30 seconds, using only what you heard in today’s tasks — in the he / she form.',
    routes: {
      core: 'Three facts: name, age, country.',
      develop: 'Five facts, joined with وَ.',
      stretch: 'Six facts, plus one thing you have in common: هُوَ … وَأَنَا … أَيْضًا.',
    },
    phrases: [['هٰذَا زَمِيلِي · هٰذِهِ زَمِيلَتِي', 'this is my classmate (m. · f.)'], ['اسْمُهُ · اسْمُهَا …', 'his · her name is …'], ['يَسْكُنُ · تَسْكُنُ فِي …', 'he · she lives in …'], ['… وَأَنَا أَيْضًا', '… and me too']],
  },
  builder: [
    { en: 'He said: “I live in Leeds.” → He lives in Leeds.', cols: [['هُوَ', 'أَنَا'], ['يَسْكُنُ', 'أَسْكُنُ'], ['فِي لِيدْزَ.', 'إِلَى لِيدْزَ.']], key: [0, 0, 0], why: 'Retell in the third person: أَسْكُنُ → يَسْكُنُ.' },
    { en: 'She said: “My name is Hala.” → Her name is Hala.', cols: [['اسْمُهَا', 'اسْمِي'], ['هَالَةُ', 'هَالَةَ'], ['.', '؟']], key: [0, 0, 0], why: 'My name → her name: اسْمِي → اسْمُهَا.' },
    { en: 'She said: “I speak Urdu.” → She speaks Urdu.', cols: [['تَتَكَلَّمُ', 'أَتَكَلَّمُ'], ['الأُرْدِيَّةَ', 'الأُرْدِيَّةُ'], ['أَيْضًا.', 'جِدًّا.']], key: [0, 0, 0], why: 'I speak → she speaks: أَتَكَلَّمُ → تَتَكَلَّمُ.' },
  ],
  errors: [
    { wrong: 'سَلْمَى: «أَسْكُنُ فِي بِرْمِنْغْهَامَ.» ← هِيَ أَسْكُنُ فِي بِرْمِنْغْهَامَ.', hint: 'Retell it for her.', right: 'هِيَ تَسْكُنُ فِي بِرْمِنْغْهَامَ.', why: 'She → ta-: تَسْكُنُ.' },
    { wrong: 'خَالِدٌ: «عُمْرِي ١٤ سَنَةً.» ← عُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً.', hint: 'Whose age?', right: 'عُمْرُهُ أَرْبَعَ عَشْرَةَ سَنَةً.', why: 'His age → عُمْرُهُ.' },
    { wrong: 'هِوَايَتُهُ السِّبَاحَةُ.', hint: 'About Laila — Laila is a girl.', right: 'هِوَايَتُهَا السِّبَاحَةُ.', why: 'Her → -hā.' },
  ],
  task: {
    title: 'Report: what I heard', ar: 'تَقْرِيرٌ: مَاذَا سَمِعْتُ',
    text: 'Write a short report (about 35–50 words) for the class blog about the partner you interviewed today. Include: • name and age • country and city • languages • hobby • one thing you have in common.',
    phrases: [['اسْمُهُ / اسْمُهَا … وَعُمْرُهُ / وَعُمْرُهَا …', 'his / her name is … and he / she is …'], ['هُوَ / هِيَ مِنْ … وَيَسْكُنُ / وَتَسْكُنُ فِي …', 'he / she is from … and lives in …'], ['يَتَكَلَّمُ / تَتَكَلَّمُ …', 'he / she speaks …'], ['هُوَ / هِيَ يُحِبُّ … وَأَنَا أَيْضًا', 'he / she likes … and so do I']],
    coreFrames: [
      { ar: 'زَمِيلِي / زَمِيلَتِي اسْمُهُ / اسْمُهَا ______ .', en: 'My classmate’s name is …' },
      { ar: 'عُمْرُهُ / عُمْرُهَا ______ سَنَةً.', en: 'He / she is … years old.' },
      { ar: 'هُوَ / هِيَ مِنْ ______ .', en: 'He / she is from …' },
      { ar: 'هِوَايَتُهُ / هِوَايَتُهَا ______ .', en: 'His / her hobby is …' },
    ],
    developFrames: [
      { ar: 'يَسْكُنُ / تَسْكُنُ فِي ______ ، وَيَتَكَلَّمُ / وَتَتَكَلَّمُ ______ .', en: 'He / she lives in …, and speaks …' },
      { ar: 'هُوَ / هِيَ يُحِبُّ / تُحِبُّ ______ ، وَأَنَا أَيْضًا!', en: 'He / she likes …, and so do I!' },
    ],
    bank: ['اسْمُهُ · اسْمُهَا', 'عُمْرُهُ · عُمْرُهَا', 'يَسْكُنُ · تَسْكُنُ', 'يَتَكَلَّمُ · تَتَكَلَّمُ', 'هِوَايَتُهُ · هِوَايَتُهَا', 'زَمِيلِي · زَمِيلَتِي', 'وَأَنَا أَيْضًا', 'أَيْضًا'],
    model: {
      text: 'زَمِيلِي اسْمُهُ بِلَالٌ، وَعُمْرُهُ ثَلَاثَ عَشْرَةَ سَنَةً. هُوَ مِنْ بَنْغْلَادِيش، وَيَسْكُنُ فِي لَنْدَنَ. يَتَكَلَّمُ البَنْغَالِيَّةَ وَالإِنْجِلِيزِيَّةَ، وَيَفْهَمُ العَرَبِيَّةَ قَلِيلًا. هِوَايَتُهُ كُرَةُ القَدَمِ، وَفَرِيقُهُ المُفَضَّلُ أَرْسِنَالُ. هُوَ يُحِبُّ الرَّسْمَ أَيْضًا، وَأَنَا أُحِبُّ الرَّسْمَ أَيْضًا! بِلَالٌ لَطِيفٌ وَمَرِحٌ جِدًّا.',
      en: '“My classmate’s name is Bilal, and he is thirteen. He is from Bangladesh, and he lives in London. He speaks Bengali and English, and understands a little Arabic. His hobby is football, and his favourite team is Arsenal. He likes drawing too — and so do I! Bilal is very kind and funny.”',
      find: ['اسْمُهُ بِلَالٌ', 'وَيَسْكُنُ فِي لَنْدَنَ', 'يَتَكَلَّمُ البَنْغَالِيَّةَ', 'هِوَايَتُهُ كُرَةُ القَدَمِ'],
    },
  },
  checkCore: 'report the facts in the he / she form (not “I”)?',
  checkDevelop: 'use the right endings for him (-hu, ya-) and her (-hā, ta-)?',
});
