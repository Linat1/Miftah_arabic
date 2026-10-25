'use strict';
/* Practice Room · F2-L11 · Writing a short personal introduction. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f2-l11',
  arShort: 'أَكْتُبُ تَعْرِيفِي',
  grammar: 'form answers (one word or phrase); connected sentences with wa · ayḍan · thumma · li-anna; checking agreement and endings',
  focus: 'Students run their own speaking and writing practice for a written introduction: say the form words, act an interview, answer question cards, fill a form card aloud, give a 30-second introduction, then build, fix and write a polished introduction with a plan and a check.',
  words1: 'Form headings', words2: 'Linking words',
  addWords: [['وَ', 'and'], ['أَيْضًا', 'also, too'], ['ثُمَّ', 'then'], ['لِأَنَّ', 'because'], ['لٰكِنَّ', 'but'], ['جِدًّا', 'very']],
  dialogue: {
    title: 'Filling in a form together', ar: 'نَمْلَأُ الاسْتِمَارَةَ',
    lines: [
      ['A', 'الاسْمُ؟', 'Name?'],
      ['B', 'سَلْمَى حَسَن.', 'Salma Hassan.'],
      ['A', 'العُمْرُ؟ وَالجِنْسِيَّةُ؟', 'Age? And nationality?'],
      ['B', 'أَرْبَعَ عَشْرَةَ سَنَةً. بِرِيطَانِيَّةٌ.', 'Fourteen. British (f.).'],
      ['A', 'مَكَانُ السَّكَنِ؟ وَاللُّغَاتُ؟', 'Place of residence? And languages?'],
      ['B', 'نُوتِنْغْهَامُ. العَرَبِيَّةُ وَالإِنْجِلِيزِيَّةُ.', 'Nottingham. Arabic and English.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap and give YOUR answers. Round 3: B turns each short answer into a full sentence (اسْمِي … · عُمْرِي … · أَنَا … · أَسْكُنُ فِي … · أَتَكَلَّمُ …).',
    notes: 'A form needs short answers; a text needs full sentences. Practising both is the point of the lesson.',
  },
  questions: [
    { q: 'الاسْمُ؟ ← قُلْهُ فِي جُمْلَةٍ.', en: 'Name? → say it in a sentence.', start: 'اسْمِي …', more: '… وَاسْمُ عَائِلَتِي …' },
    { q: 'العُمْرُ؟ ← قُلْهُ فِي جُمْلَةٍ.', en: 'Age? → in a sentence.', start: 'عُمْرِي … سَنَةً', more: '… وَعُمْرُ أَخِي …' },
    { q: 'الجِنْسِيَّةُ وَمَكَانُ السَّكَنِ؟', en: 'Nationality and residence?', start: 'أَنَا … ، وَأَسْكُنُ فِي …', more: '… لٰكِنَّ عَائِلَتِي مِنْ …' },
    { q: 'اللُّغَاتُ؟', en: 'Languages?', start: 'أَتَكَلَّمُ … وَ…', more: '… وَأَتَعَلَّمُ … أَيْضًا' },
    { q: 'لِمَاذَا تَتَعَلَّمُ العَرَبِيَّةَ؟', en: 'Why do you learn Arabic?', start: 'أَتَعَلَّمُ العَرَبِيَّةَ لِأَنَّ …', more: '… وَأُحِبُّهَا جِدًّا' },
  ],
  qTitle: 'Short form answer → full sentence → add more',
  card: {
    title: 'Card — a membership interview at a youth library', ar: 'الاشْتِرَاكُ فِي المَكْتَبَةِ', you: 'a new member', them: 'the librarian filling in the form',
    tasks: [
      { ex: 'مَا اسْمُكَ الكَامِلُ؟', task: 'Give your full name.', plan: 'مَا ← اسْمِي …', model: 'اسْمِي يُوسُفُ عَلِيّ.', modelEn: 'My name is Yusuf Ali.' },
      { ex: 'كَمْ عُمْرُكَ؟ وَمَا جِنْسِيَّتُكَ؟', task: 'Age and nationality.', plan: 'كَمْ · مَا ← عُمْرِي … ، وَأَنَا …', model: 'عُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً، وَأَنَا بِرِيطَانِيٌّ.', modelEn: 'I am thirteen, and I am British.' },
      { ex: 'أَيْنَ تَسْكُنُ؟', task: 'Your town.', plan: 'أَيْنَ ← أَسْكُنُ فِي …', model: 'أَسْكُنُ فِي بِرَادْفُورْدَ، قُرْبَ المَكْتَبَةِ.', modelEn: 'I live in Bradford, near the library.' },
      { ex: 'لِمَاذَا تُرِيدُ أَنْ تَشْتَرِكَ؟', task: 'Give a reason.', plan: 'لِمَاذَا ← لِأَنِّي أُحِبُّ …', model: 'لِأَنِّي أُحِبُّ القِرَاءَةَ، وَأُرِيدُ كُتُبًا بِالعَرَبِيَّةِ أَيْضًا.', modelEn: 'Because I love reading, and I want books in Arabic too.' },
    ],
    girl: 'اسْمُكِ · عُمْرُكِ · جِنْسِيَّتُكِ · تَسْكُنِينَ · تُرِيدِينَ · تَشْتَرِكِي — and the Speaker says بِرِيطَانِيَّةٌ',
    notes: 'Language: the form facts as full sentences + a reason with li-annī.',
  },
  talk: {
    title: '30 seconds: my introduction, linked', ar: 'تَعْرِيفِي بِكَلِمَاتِ الرَّبْطِ',
    text: 'Give your introduction in 30 seconds, using at least FOUR linking words (وَ · أَيْضًا · ثُمَّ · لِأَنَّ · لٰكِنَّ). The Coach counts them.',
    routes: {
      core: 'Five facts joined with وَ.',
      develop: 'Add أَيْضًا and لِأَنَّ.',
      stretch: 'Add لٰكِنَّ and ثُمَّ (e.g. أَدْرُسُ ثُمَّ أَلْعَبُ).',
    },
    phrases: [['وَ · أَيْضًا', 'and · also'], ['ثُمَّ', 'then'], ['لِأَنَّ', 'because'], ['لٰكِنَّ', 'but']],
  },
  builder: [
    { en: 'I am British, but my family is from Iraq.', cols: [['أَنَا بِرِيطَانِيٌّ،', 'أَنَا بِرِيطَانِيَا،'], ['لٰكِنَّ', 'لِأَنَّ'], ['عَائِلَتِي مِنَ العِرَاقِ.', 'عَائِلَتِي فِي العِرَاقِ مِنْ.']], key: [0, 0, 0], why: 'Nationality = بِرِيطَانِيٌّ; but = لٰكِنَّ.' },
    { en: 'I learn Arabic because I love it.', cols: [['أَتَعَلَّمُ العَرَبِيَّةَ', 'يَتَعَلَّمُ العَرَبِيَّةَ'], ['لِأَنِّي', 'لٰكِنِّي'], ['أُحِبُّهَا.', 'أُحِبُّهُ.']], key: [0, 0, 0], why: 'Because I = لِأَنِّي; Arabic is feminine → أُحِبُّهَا.' },
    { en: 'I speak English, and I speak Urdu too.', cols: [['أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ،', 'أَتَكَلَّمُ الإِنْجِلِيزِيَّةُ،'], ['وَأَتَكَلَّمُ الأُرْدِيَّةَ', 'ثُمَّ الأُرْدِيَّةَ'], ['أَيْضًا.', 'لِأَنَّ.']], key: [0, 0, 0], why: 'Too = أَيْضًا at the end; the language after the verb ends in -a.' },
  ],
  errors: [
    { wrong: 'العُمْرُ: عُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً وَأَنَا أُحِبُّ الرِّيَاضَةَ.', hint: 'A form box needs a SHORT answer.', right: 'العُمْرُ: ثَلَاثَ عَشْرَةَ سَنَةً.', why: 'Forms: short answers only; full sentences belong in the text.' },
    { wrong: 'أَتَعَلَّمُ العَرَبِيَّةَ لِأَنَّ أُحِبُّهَا.', hint: 'لِأَنَّ + “I” …', right: 'أَتَعَلَّمُ العَرَبِيَّةَ لِأَنِّي أُحِبُّهَا.', why: 'Because I → لِأَنِّي.' },
    { wrong: 'أَنَا بِرِيطَانِيٌّ.', hint: 'Salma writing — Salma is a girl.', right: 'أَنَا بِرِيطَانِيَّةٌ.', why: 'A girl → -iyyatun.' },
  ],
  task: {
    title: 'Form + introduction', ar: 'الاسْتِمَارَةُ وَالتَّعْرِيفُ',
    text: 'Part 1: fill in six form boxes (الاسْمُ · العُمْرُ · الجِنْسِيَّةُ · مَكَانُ السَّكَنِ · اللُّغَاتُ · التَّوْقِيعُ) with short answers. Part 2: turn them into an introduction (about 40–55 words) using at least four linking words and one reason with لِأَنَّ. Then check it with your buddy.',
    phrases: [['اسْمِي … ، وَعُمْرِي …', 'my name is …, and I am …'], ['أَنَا … ، لٰكِنَّ عَائِلَتِي مِنْ …', 'I am …, but my family is from …'], ['أَتَكَلَّمُ … ، وَ… أَيْضًا', 'I speak …, and … too'], ['أَتَعَلَّمُ العَرَبِيَّةَ لِأَنِّي …', 'I learn Arabic because I …']],
    coreFrames: [
      { ar: 'السَّلَامُ عَلَيْكُمْ! اسْمِي ______ ، وَعُمْرِي ______ سَنَةً.', en: 'Peace be upon you! My name is …, and I am …' },
      { ar: 'أَنَا ______ ، وَأَسْكُنُ فِي ______ .', en: 'I am …, and I live in …' },
      { ar: 'أَتَكَلَّمُ ______ ، وَ ______ أَيْضًا.', en: 'I speak …, and … too.' },
      { ar: 'أَتَعَلَّمُ العَرَبِيَّةَ لِأَنِّي ______ .', en: 'I learn Arabic because I …' },
    ],
    developFrames: [
      { ar: 'عَائِلَتِي مِنْ ______ ، لٰكِنِّي وُلِدْتُ فِي ______ .', en: 'My family is from …, but I was born in …' },
      { ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ، ثُمَّ ______ .', en: 'I go to school, then …' },
    ],
    bank: ['الاسْمُ · العُمْرُ', 'الجِنْسِيَّةُ', 'مَكَانُ السَّكَنِ', 'اللُّغَاتُ', 'وَ · أَيْضًا', 'ثُمَّ', 'لِأَنِّي', 'لٰكِنَّ'],
    model: {
      text: 'السَّلَامُ عَلَيْكُمْ! اسْمِي مُحَمَّدٌ، وَعُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً. أَنَا بِرِيطَانِيٌّ، لٰكِنَّ عَائِلَتِي مِنْ مِصْرَ. أَسْكُنُ فِي مَانْشِسْتَرَ مَعَ عَائِلَتِي. أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ، وَأَتَكَلَّمُ العَرَبِيَّةَ أَيْضًا. كُلَّ يَوْمٍ أَذْهَبُ إِلَى المَدْرَسَةِ، ثُمَّ أَلْعَبُ كُرَةَ القَدَمِ. أَتَعَلَّمُ العَرَبِيَّةَ لِأَنِّي أُرِيدُ أَنْ أَقْرَأَ القُرْآنَ.',
      en: '“Peace be upon you! My name is Mohammed, and I am fourteen. I am British, but my family is from Egypt. I live in Manchester with my family. I speak English, and I speak Arabic too. Every day I go to school, then I play football. I learn Arabic because I want to read the Qur’an.”',
      find: ['لٰكِنَّ عَائِلَتِي مِنْ مِصْرَ', 'أَيْضًا', 'ثُمَّ أَلْعَبُ', 'لِأَنِّي أُرِيدُ'],
    },
  },
  checkCore: 'answer the form boxes briefly and write the text in full sentences?',
  checkDevelop: 'use at least four linking words, including لِأَنِّي?',
});
