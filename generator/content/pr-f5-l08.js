'use strict';
/* Practice Room · F5-L08 · Health problems and how you feel. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f5-l08',
  arShort: 'كَيْفَ تَشْعُرُ؟',
  grammar: 'ʿindī + illness (ṣudāʿun · zukāmun · ḥummā); ʿindī alamun fī …; ashʿuru bi-…; mundhu + time (mundhu amsi · mundhu yawmayni); anā marīḍun / marīḍatun',
  focus: 'Students run their own speaking and writing practice about feeling ill: say the symptom words, act a short dialogue, answer question cards, do a role-play card phoning the school to say you are ill, give a 30-second talk, then build, fix and write an absence message.',
  words1: 'Illnesses and symptoms', words2: 'Saying how you feel',
  dialogue: {
    title: 'What’s wrong?', ar: 'مَاذَا بِكَ؟',
    lines: [
      ['A', 'مَاذَا بِكَ؟ أَنْتَ لَسْتَ بِخَيْرٍ.', 'What’s wrong? You are not well.'],
      ['B', 'عِنْدِي صُدَاعٌ، وَأَشْعُرُ بِالتَّعَبِ.', 'I have a headache, and I feel tired.'],
      ['A', 'مُنْذُ مَتَى؟', 'Since when?'],
      ['B', 'مُنْذُ أَمْسِ. وَعِنْدِي أَلَمٌ فِي الحَلْقِ أَيْضًا.', 'Since yesterday. And I have a sore throat too.'],
      ['A', 'هَلْ عِنْدَكَ حُمَّى؟', 'Do you have a fever?'],
      ['B', 'نَعَمْ، قَلِيلًا. أَظُنُّ أَنَّ عِنْدِي زُكَامًا.', 'Yes, a little. I think I have a cold.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: choose a different illness and a different “since when”.',
  },
  questions: [
    { q: 'كَيْفَ تَشْعُرُ اليَوْمَ؟', en: 'How do you feel today?', start: 'أَشْعُرُ بِالتَّعَبِ / أَنَا بِخَيْرٍ', more: '… لِأَنَّ …' },
    { q: 'أَيْنَ الأَلَمُ؟', en: 'Where is the pain?', start: 'عِنْدِي أَلَمٌ فِي …', more: '… وَفِي … أَيْضًا' },
    { q: 'مُنْذُ مَتَى أَنْتَ مَرِيضٌ؟', en: 'How long have you been ill?', start: 'مُنْذُ …', more: '… يَوْمَيْنِ / أُسْبُوعٍ' },
    { q: 'هَلْ عِنْدَكَ حُمَّى؟', en: 'Do you have a fever?', start: 'نَعَمْ، عِنْدِي … / لَا، لَيْسَتْ عِنْدِي …', more: '… لٰكِنْ عِنْدِي …' },
    { q: 'مَاذَا تَفْعَلُ عِنْدَمَا يَكُونُ عِنْدَكَ زُكَامٌ؟', en: 'What do you do when you have a cold?', start: 'أَبْقَى فِي البَيْتِ وَ…', more: '… وَأَشْرَبُ …' },
  ],
  card: {
    title: 'Role-play card — phoning school to say you are ill', ar: 'أَتَّصِلُ بِالمَدْرَسَةِ', you: 'a student (or a parent) phoning', them: 'the school office',
    tasks: [
      { ex: 'مَدْرَسَةُ النُّورِ، صَبَاحَ الخَيْرِ.', task: 'Greet + give your name.', plan: 'صَبَاحَ ← صَبَاحَ النُّورِ ، أَنَا …', model: 'صَبَاحَ النُّورِ، أَنَا أَحْمَدُ مِنَ الصَّفِّ الثَّامِنِ.', modelEn: 'Good morning, I am Ahmed from Year 8.' },
      { ex: 'كَيْفَ أُسَاعِدُكَ؟', task: 'Say you are ill + the problem.', plan: 'كَيْفَ ← أَنَا مَرِيضٌ ، عِنْدِي …', model: 'أَنَا مَرِيضٌ اليَوْمَ، عِنْدِي حُمَّى وَسُعَالٌ.', modelEn: 'I am ill today; I have a fever and a cough.' },
      { ex: 'مُنْذُ مَتَى؟', task: 'Say since when.', plan: 'مُنْذُ مَتَى ← مُنْذُ …', model: 'مُنْذُ لَيْلَةِ أَمْسِ.', modelEn: 'Since last night.' },
      { ex: 'هَلْ سَتَأْتِي غَدًا؟', task: 'Answer + thank.', plan: 'هَلْ ← لَا أَعْرِفُ ، إِنْ شَاءَ اللّٰهُ … شُكْرًا', model: 'إِنْ شَاءَ اللّٰهُ، إِذَا كُنْتُ أَفْضَلَ. شُكْرًا جَزِيلًا.', modelEn: 'God willing, if I am better. Thank you very much.' },
    ],
    girl: 'أُسَاعِدُكِ · سَتَأْتِينَ — and the Speaker says أَنَا مَرِيضَةٌ',
    notes: 'Language: anā marīḍun / marīḍatun · ʿindī + illness · mundhu + time.',
  },
  talk: {
    title: '30 seconds: the last time I was ill', ar: 'آخِرُ مَرَّةٍ كُنْتُ مَرِيضًا',
    text: 'Talk for 30 seconds about how you feel today, then describe one illness you had: what, where it hurt, how long — and what you did.',
    routes: {
      core: 'أَشْعُرُ بِالتَّعَبِ · عِنْدِي … · مُنْذُ …',
      develop: 'Add عِنْدِي أَلَمٌ فِي … and two symptoms.',
      stretch: 'Tell it in the past: كَانَ عِنْدِي … · بَقِيتُ فِي البَيْتِ …',
    },
  },
  builder: [
    { en: 'I have a stomach ache since yesterday.', cols: [['عِنْدِي', 'عِنْدَهُ'], ['أَلَمٌ فِي المَعِدَةِ', 'أَلَمٌ فِي المَعِدَةُ'], ['مُنْذُ أَمْسِ.', 'مِنْ أَمْسِ.']], key: [0, 0, 0], why: 'I have = عِنْدِي; فِي + genitive; since = مُنْذُ.' },
    { en: 'My sister is ill; she has a fever.', cols: [['أُخْتِي مَرِيضَةٌ،', 'أُخْتِي مَرِيضٌ،'], ['عِنْدَهَا', 'عِنْدِي'], ['حُمَّى.', 'حُمَّاهَا.']], key: [0, 0, 0], why: 'A girl → مَرِيضَةٌ; she has = عِنْدَهَا.' },
    { en: 'I feel tired.', cols: [['أَشْعُرُ', 'يَشْعُرُ'], ['بِالتَّعَبِ', 'التَّعَبَ'], ['.', 'أَمْسِ.']], key: [0, 0, 0], why: 'I feel = أَشْعُرُ + bi- + noun.' },
  ],
  errors: [
    { wrong: 'أَنَا عِنْدِي صُدَاعٌ مِنْ أَمْسِ.', hint: '“since” in Arabic …', right: 'أَنَا عِنْدِي صُدَاعٌ مُنْذُ أَمْسِ.', why: 'Since / for = مُنْذُ.' },
    { wrong: 'عِنْدِي أَلَمٌ فِي رَأْسِي وَأُذُنِي. أَنَا مَرِيضٌ.', hint: 'Sara is speaking — she is a girl.', right: 'عِنْدِي أَلَمٌ فِي رَأْسِي وَأُذُنِي. أَنَا مَرِيضَةٌ.', why: 'A girl → مَرِيضَةٌ.' },
    { wrong: 'أَشْعُرُ التَّعَبَ.', hint: 'This verb needs a small word.', right: 'أَشْعُرُ بِالتَّعَبِ.', why: 'أَشْعُرُ + bi-.' },
  ],
  task: {
    title: 'An absence message', ar: 'رِسَالَةُ غِيَابٍ',
    text: 'Write a short message (about 35–55 words) to your teacher explaining why you missed school. Include: • a polite greeting • that you were / are ill • two symptoms and where it hurts • since when • what you did (doctor? rest?) • when you hope to come back.',
    phrases: [['أَنَا آسِفٌ / آسِفَةٌ، لَمْ آتِ إِلَى المَدْرَسَةِ …', 'I am sorry, I didn’t come to school …'], ['كَانَ عِنْدِي … وَ…', 'I had … and …'], ['مُنْذُ …', 'since …'], ['إِنْ شَاءَ اللّٰهُ سَأَرْجِعُ …', 'God willing I will come back …']],
    coreFrames: [
      { ar: 'السَّلَامُ عَلَيْكُمْ يَا ______ ،', en: 'Peace be upon you, …' },
      { ar: 'أَنَا آسِفٌ / آسِفَةٌ، أَنَا مَرِيضٌ / مَرِيضَةٌ.', en: 'I am sorry, I am ill.' },
      { ar: 'عِنْدِي ______ وَ ______ مُنْذُ ______ .', en: 'I have … and … since …' },
      { ar: 'سَأَرْجِعُ إِلَى المَدْرَسَةِ ______ .', en: 'I will come back to school …' },
    ],
    developFrames: [
      { ar: 'عِنْدِي أَلَمٌ فِي ______ ، وَأَشْعُرُ بِالتَّعَبِ / بِالبَرْدِ.', en: 'I have pain in …, and I feel tired / cold.' },
      { ar: 'ذَهَبْتُ إِلَى ______ ، وَ ______ .', en: 'I went to …, and …' },
    ],
    bank: ['صُدَاعٌ · زُكَامٌ', 'حُمَّى · سُعَالٌ', 'أَلَمُ الحَلْقِ', 'عِنْدِي أَلَمٌ فِي', 'أَشْعُرُ بِالتَّعَبِ', 'مَرِيضٌ · مَرِيضَةٌ', 'مُنْذُ أَمْسِ', 'إِنْ شَاءَ اللّٰهُ'],
    model: {
      text: 'السَّلَامُ عَلَيْكُمْ يَا أُسْتَاذُ خَالِدٌ، أَنَا آسِفَةٌ، لَمْ آتِ إِلَى المَدْرَسَةِ اليَوْمَ لِأَنِّي مَرِيضَةٌ. عِنْدِي حُمَّى وَسُعَالٌ مُنْذُ يَوْمَيْنِ، وَعِنْدِي أَلَمٌ فِي الحَلْقِ. ذَهَبْتُ إِلَى الطَّبِيبِ أَمْسِ، فَقَالَ: اسْتَرِيحِي. إِنْ شَاءَ اللّٰهُ سَأَرْجِعُ يَوْمَ الإِثْنَيْنِ. مَعَ الشُّكْرِ، مَرْيَمُ.',
      en: '“Peace be upon you, Mr Khalid. I am sorry, I didn’t come to school today because I am ill. I have had a fever and a cough for two days, and I have a sore throat. I went to the doctor yesterday, and he said: rest. God willing I will come back on Monday. With thanks, Maryam.”',
      find: ['لِأَنِّي مَرِيضَةٌ', 'مُنْذُ يَوْمَيْنِ', 'عِنْدِي أَلَمٌ فِي الحَلْقِ', 'إِنْ شَاءَ اللّٰهُ'],
    },
  },
  checkCore: 'use عِنْدِي + illness and مُنْذُ + time?',
  checkDevelop: 'say where it hurts (عِنْدِي أَلَمٌ فِي …) and agree مَرِيضٌ / مَرِيضَةٌ?',
});
