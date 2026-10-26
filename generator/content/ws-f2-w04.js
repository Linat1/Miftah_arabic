'use strict';
/* Apply Workshop · F2-W04 · F2-L07 (a full introduction: I) + F2-L08 (personal profiles: he / she). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f2-w04', pair: ['f2-l07', 'f2-l08'],
  title: 'Me and My Partner', arShort: 'أَنَا وَزَمِيلِي',
  focus: 'Students move between “I” and “he / she”: they interview a partner, introduce themselves and then their partner, give a short talk and write a two-part profile — me, then my partner — for the class website.',
  dialogue: {
    title: 'Introduce yourself — then your partner', ar: 'عَرِّفْ نَفْسَكَ وَزَمِيلَكَ',
    lines: [
      ['A', 'مَا اسْمُكَ، وَكَمْ عُمْرُكَ؟', 'What is your name, and how old are you?'],
      ['B', 'اسْمِي مَرْيَمُ، وَعُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً.', 'My name is Maryam, and I am thirteen.'],
      ['A', 'أَيْنَ تَسْكُنِينَ؟ وَمَا هِوَايَتُكِ؟', 'Where do you live? And what is your hobby?'],
      ['B', 'أَسْكُنُ فِي بِرْمِنْغَامَ، وَهِوَايَتِي الرَّسْمُ.', 'I live in Birmingham, and my hobby is drawing.'],
      ['A', 'هٰذِهِ زَمِيلَتِي. اسْمُهَا مَرْيَمُ، وَتَسْكُنُ فِي بِرْمِنْغَامَ.', 'This is my classmate. Her name is Maryam, and she lives in Birmingham.'],
      ['A', 'هِيَ تَتَكَلَّمُ العَرَبِيَّةَ، وَهِوَايَتُهَا الرَّسْمُ.', 'She speaks Arabic, and her hobby is drawing.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: use your REAL facts — B answers, then A tells the class about B (he / she).',
    notes: 'Lines 2 and 4 (“I”) come from F2-L07; lines 5–6 (“she”) from F2-L08. Highlight the change: أَسْكُنُ → تَسْكُنُ · هِوَايَتِي → هِوَايَتُهَا.',
  },
  card: {
    title: 'Role-play card — the class website interview', ar: 'مُقَابَلَةٌ لِمَوْقِعِ الصَّفِّ', you: 'the student being interviewed', them: 'the website editor',
    mix: 'a full introduction with “I” (F2-L07) and a profile of someone else with “he / she” (F2-L08)',
    tasks: [
      { ex: 'مَا اسْمُكَ، وَكَمْ عُمْرُكَ؟', task: 'Give your name and age in one sentence.', plan: 'مَا / كَمْ ← اسْمِي … ، وَعُمْرِي …', model: 'اسْمِي زَيْدٌ، وَعُمْرِي اثْنَتَا عَشْرَةَ سَنَةً.', modelEn: 'My name is Zayd, and I am twelve.' },
      { ex: 'مِنْ أَيْنَ أَنْتَ، وَأَيْنَ تَسْكُنُ؟', task: 'Say where you are from and where you live.', plan: 'مِنْ أَيْنَ ← أَنَا مِنْ … ، وَأَسْكُنُ فِي …', model: 'أَنَا مِنَ اليَمَنِ، وَأَسْكُنُ فِي لَنْدَنَ.', modelEn: 'I am from Yemen, and I live in London.' },
      { ex: 'أَيَّ لُغَاتٍ تَتَكَلَّمُ؟', task: 'Name two languages with وَ … أَيْضًا.', plan: 'أَيَّ ← أَتَكَلَّمُ … ، وَ… أَيْضًا', model: 'أَتَكَلَّمُ العَرَبِيَّةَ، وَالإِنْجِلِيزِيَّةَ أَيْضًا.', modelEn: 'I speak Arabic, and English too.' },
      { ex: 'مَنْ صَدِيقُكَ؟ وَمَا هِوَايَتُهُ؟', task: 'Introduce a friend (he): name, age, hobby.', plan: 'مَنْ ← صَدِيقِي … عُمْرُهُ … هِوَايَتُهُ …', model: 'صَدِيقِي اسْمُهُ عُمَرُ، عُمْرُهُ ثَلَاثَ عَشْرَةَ سَنَةً، وَهِوَايَتُهُ كُرَةُ القَدَمِ.', modelEn: 'My friend is called Omar; he is thirteen, and his hobby is football.' },
      { unexpected: true, ex: 'وَأَيْنَ يَسْكُنُ صَدِيقُكَ؟', task: 'Say where he lives and one language he speaks.', plan: 'أَيْنَ ← يَسْكُنُ فِي … وَيَتَكَلَّمُ …', model: 'يَسْكُنُ فِي مَانْشِسْتَرَ، وَيَتَكَلَّمُ الصُّومَالِيَّةَ.', modelEn: 'He lives in Manchester, and he speaks Somali.' },
    ],
    girl: 'مَا اسْمُكِ؟ · مِنْ أَيْنَ أَنْتِ، وَأَيْنَ تَسْكُنِينَ؟ · أَيَّ لُغَاتٍ تَتَكَلَّمِينَ؟ · مَنْ صَدِيقَتُكِ؟',
  },
  talk: {
    title: 'I am … and this is …', ar: 'أَنَا … وَهٰذَا / هٰذِهِ …',
    text: 'Talk for 30–45 seconds: introduce yourself (name, age, city, languages), then introduce your partner or a friend with “he” or “she” (name, city, languages, hobby).',
    routes: {
      core: 'اسْمِي … · أَسْكُنُ فِي … — هٰذَا صَدِيقِي، اسْمُهُ … / هٰذِهِ صَدِيقَتِي، اسْمُهَا …',
      develop: 'Use he / she verbs: يَسْكُنُ / تَسْكُنُ · يَتَكَلَّمُ / تَتَكَلَّمُ.',
      stretch: 'Compare: أَنَا أَسْكُنُ فِي … ، وَهُوَ يَسْكُنُ فِي … أَيْضًا / لٰكِنَّهُ …',
    },
    phrases: [['اسْمِي … · اسْمُهُ … · اسْمُهَا …', 'my · his · her name'], ['أَسْكُنُ · يَسْكُنُ · تَسْكُنُ', 'I · he · she live(s)'], ['أَتَكَلَّمُ · يَتَكَلَّمُ · تَتَكَلَّمُ', 'I · he · she speak(s)'], ['هِوَايَتِي · هِوَايَتُهُ · هِوَايَتُهَا', 'my · his · her hobby']],
  },
  task: {
    title: 'Me and my partner: a two-part profile', ar: 'أَنَا وَزَمِيلِي',
    text: 'Write a profile (about 40–60 words) for the class website in two parts. Part 1 · ME: name and age · where you are from and live · languages. Part 2 · MY PARTNER (he / she): name and age · where he / she lives · languages · hobby. Use وَ and أَيْضًا at least twice.',
    range: [35, 75],
    phrases: [['اسْمِي … ، وَعُمْرِي … سَنَةً', 'my name is … and I am …'], ['أَنَا مِنْ … ، وَأَسْكُنُ فِي …', 'I am from … and I live in …'], ['زَمِيلِي اسْمُهُ … ، وَيَسْكُنُ فِي …', 'my classmate (m.) is called … and lives in …'], ['زَمِيلَتِي اسْمُهَا … ، وَهِوَايَتُهَا …', 'my classmate (f.) is called … and her hobby is …']],
    coreFrames: [
      { ar: 'اسْمِي ______ ، وَعُمْرِي ______ سَنَةً.', en: 'My name is … and I am … years old.' },
      { ar: 'أَنَا مِنْ ______ ، وَأَسْكُنُ فِي ______ .', en: 'I am from … and I live in …' },
      { ar: 'زَمِيلِي / زَمِيلَتِي اسْمُهُ / اسْمُهَا ______ .', en: 'My classmate is called …' },
      { ar: 'يَسْكُنُ / تَسْكُنُ فِي ______ .', en: 'He / she lives in …' },
      { ar: 'هِوَايَتُهُ / هِوَايَتُهَا ______ .', en: 'His / her hobby is …' },
    ],
    developFrames: [
      { ar: 'أَتَكَلَّمُ ______ ، وَ ______ أَيْضًا.', en: 'I speak …, and … too.' },
      { ar: 'وَهُوَ / وَهِيَ يَتَكَلَّمُ / تَتَكَلَّمُ ______ .', en: 'And he / she speaks …' },
      { ar: 'نَحْنُ نُحِبُّ ______ أَيْضًا.', en: 'We both like … too.' },
    ],
    bank: ['اسْمِي · اسْمُهُ · اسْمُهَا', 'عُمْرِي · عُمْرُهُ · عُمْرُهَا', 'أَسْكُنُ · يَسْكُنُ · تَسْكُنُ', 'أَتَكَلَّمُ · يَتَكَلَّمُ · تَتَكَلَّمُ', 'هِوَايَتُهُ · هِوَايَتُهَا', 'زَمِيلِي · زَمِيلَتِي', 'وَ · أَيْضًا', 'ثُمَّ'],
    model: {
      text: 'السَّلَامُ عَلَيْكُمْ! اسْمِي سَارَةُ، وَعُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً. أَنَا مِنْ مِصْرَ، وَأَسْكُنُ فِي لَنْدَنَ. أَتَكَلَّمُ العَرَبِيَّةَ، وَالإِنْجِلِيزِيَّةَ أَيْضًا. زَمِيلَتِي اسْمُهَا مَرْيَمُ، وَعُمْرُهَا اثْنَتَا عَشْرَةَ سَنَةً. هِيَ تَسْكُنُ فِي بِرْمِنْغَامَ، وَتَتَكَلَّمُ الأُرْدِيَّةَ وَالإِنْجِلِيزِيَّةَ. هِوَايَتُهَا الرَّسْمُ، وَأَنَا أُحِبُّ الرَّسْمَ أَيْضًا!',
      en: '“Peace be upon you! My name is Sara, and I am thirteen. I am from Egypt, and I live in London. I speak Arabic, and English too. My classmate is called Maryam, and she is twelve. She lives in Birmingham, and she speaks Urdu and English. Her hobby is drawing, and I like drawing too!”',
      find: ['وَأَسْكُنُ فِي لَنْدَنَ', 'اسْمُهَا مَرْيَمُ', 'تَسْكُنُ فِي بِرْمِنْغَامَ', 'هِوَايَتُهَا الرَّسْمُ'],
    },
  },
});
