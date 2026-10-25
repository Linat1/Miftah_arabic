'use strict';
/* Guided Practice Rooms · AT-A-L08 · Doctor, Pharmacy and Advice. New tasks. Teacher-made. */
const XP = require('./xp-a-l08');

const base = { topic: 'A', n: 8, short: 'Doctor and Pharmacy', arShort: 'عِنْدَ الطَّبِيبِ وَفِي الصَّيْدَلِيَّةِ', fileTitle: 'Doctor_Pharmacy_and_Advice', title: 'Doctor, Pharmacy and Advice', icon: 'FaPrescriptionBottleMedical', grammar: 'advice with anṣaḥuka bi-an / yajibu an + verb in -a; polite requests (hal yumkinu an …?); medicine instructions (khudh … marratayni fī al-yawm); imperatives' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up, the answer ladder, two new role plays (buying something for hay fever at a pharmacy, giving advice to a friend before an exam), a topic conversation with A-R-E-T, and a one-minute talk giving health advice.',
  words: XP.speak.words,
  words1: { title: 'At the doctor’s and the pharmacy', ar: 'الطَّبِيبُ وَالصَّيْدَلِيَّةُ' },
  words2: { title: 'Advice and instructions', ar: 'النَّصَائِحُ وَالتَّعْلِيمَاتُ' },
  ladder: {
    q: 'مَا نَصِيحَتُكَ لِطَالِبٍ مُتْعَبٍ؟', qEn: 'What is your advice for a tired student?',
    rungs: [
      { ar: 'أَنْصَحُهُ بِأَنْ يَنَامَ مُبَكِّرًا.', en: 'I advise him to sleep early.' },
      { ar: 'أَنْصَحُهُ بِأَنْ يَنَامَ مُبَكِّرًا، لِأَنَّ النَّوْمَ يُرِيحُ الجِسْمَ.', en: '… because sleep rests the body.' },
      { ar: '… وَيَجِبُ أَنْ يَتْرُكَ الهَاتِفَ قَبْلَ النَّوْمِ بِسَاعَةٍ.', en: '… and he must leave his phone an hour before sleep.' },
      { ar: '… أَنَا جَرَّبْتُ ذٰلِكَ فِي الشَّهْرِ المَاضِي، وَفِي رَأْيِي هٰذِهِ أَفْضَلُ نَصِيحَةٍ!', en: '… I tried it last month — in my opinion it’s the best advice!' },
    ],
  },
  ladderQs: [
    { q: 'مَاذَا تَفْعَلُ عِنْدَمَا يَكُونُ عِنْدَكَ زُكَامٌ؟', l1: 'آخُذُ …', l2: '… لِأَنَّ …', l3: '… وَأَرْتَاحُ … أَيَّامٍ' },
    { q: 'هَلْ تُحِبُّ أَنْ تَذْهَبَ إِلَى الطَّبِيبِ؟', l1: 'نَعَمْ / لَا، …', l2: '… لِأَنِّي …', l3: '… آخِرَ مَرَّةٍ …' },
    { q: 'مَا النَّصِيحَةُ الَّتِي أَعْطَتْكَ أُمُّكَ؟', l1: 'نَصَحَتْنِي بِأَنْ …', l2: '… لِأَنَّ …', l3: '… وَمُنْذُ ذٰلِكَ …' },
    { q: 'كَيْفَ تَأْخُذُ الدَّوَاءَ؟', l1: 'آخُذُ … مَرَّتَيْنِ …', l2: '… بَعْدَ الأَكْلِ لِأَنَّ …', l3: '… وَلَا يَجِبُ أَنْ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a pharmacy in spring', title: 'Role play 1 — Hay fever at the pharmacy', ar: 'حَسَاسِيَّةُ الرَّبِيعِ', you: 'a customer with hay fever', them: 'the pharmacist',
      tasks: [
        { ex: 'مَسَاءَ الخَيْرِ، مَا المُشْكِلَةُ؟', task: 'Say what is wrong (two symptoms).', plan: 'مَا ← عِنْدِي … وَ…', model: 'عِنْدِي عُطَاسٌ كَثِيرٌ، وَعَيْنَايَ حَمْرَاوَانِ.', modelEn: 'I sneeze a lot, and my eyes are red.' },
        { ex: 'مُنْذُ مَتَى؟', task: 'Say since when.', plan: 'مُنْذُ مَتَى ← مُنْذُ …', model: 'مُنْذُ أُسْبُوعٍ، مُنْذُ بِدَايَةِ الرَّبِيعِ.', modelEn: 'For a week, since the start of spring.' },
        { ex: 'هَلْ عِنْدَكَ وَصْفَةٌ طِبِّيَّةٌ؟', task: 'Say if you have a prescription.', plan: 'هَلْ ← لَا، لَيْسَ عِنْدِي …', model: 'لَا، لَيْسَ عِنْدِي وَصْفَةٌ.', modelEn: 'No, I don’t have a prescription.' },
        { ex: 'خُذْ هٰذِهِ الحُبُوبَ.', task: 'Ask how often to take them.', plan: 'كَمْ مَرَّةً ← كَمْ مَرَّةً آخُذُهَا؟', model: 'كَمْ مَرَّةً آخُذُهَا فِي اليَوْمِ؟', modelEn: 'How many times a day do I take them?' },
        { unexpected: true, ex: 'مَرَّةً وَاحِدَةً. هَلْ تَأْخُذُ أَيَّ دَوَاءٍ آخَرَ؟', task: 'Answer the unexpected question.', plan: 'هَلْ ← لَا / نَعَمْ + جُمْلَةٌ', model: 'لَا، لَا آخُذُ أَيَّ دَوَاءٍ آخَرَ.', modelEn: 'No, I don’t take any other medicine.' },
      ],
      girl: 'عِنْدَكِ · خُذِي · تَأْخُذِينَ',
      notes: 'Language: ʿindī + symptom · the dual ʿaynāya ḥamrāwāni · laysa ʿindī · kam marratan ākhudhuhā? (non-human plural → -hā) · khudh (imperative).',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a friend who is stressed before exams', title: 'Role play 2 — Advice for a stressed friend', ar: 'نَصَائِحُ لِصَدِيقٍ قَلِقٍ', you: 'a good friend', them: 'your friend, who is stressed before exams',
      tasks: [
        { ex: 'لَا أَسْتَطِيعُ أَنْ أَنَامَ بِسَبَبِ الامْتِحَانَاتِ!', task: 'Give advice about sleep, with a reason.', model: 'أَنْصَحُكَ بِأَنْ تَتْرُكَ الكُتُبَ فِي العَاشِرَةِ، لِأَنَّ الدِّمَاغَ يَحْتَاجُ إِلَى الرَّاحَةِ.', modelEn: 'I advise you to stop studying at ten, because the brain needs rest.' },
        { ex: 'وَيُؤْلِمُنِي رَأْسِي كُلَّ يَوْمٍ.', task: 'Give two pieces of advice.', model: 'يَجِبُ أَنْ تَشْرَبَ المَاءَ كَثِيرًا، وَأَنْ تَمْشِيَ قَلِيلًا فِي الهَوَاءِ.', modelEn: 'You must drink lots of water, and walk a little in the fresh air.' },
        { ex: 'هَلْ كُنْتَ قَلِقًا مِثْلِي فِي السَّنَةِ المَاضِيَةِ؟', task: 'Tell a short past experience.', model: 'نَعَمْ، كُنْتُ قَلِقًا جِدًّا، لٰكِنِّي نَظَّمْتُ وَقْتِي فَنَجَحْتُ.', modelEn: 'Yes, I was very anxious, but I organised my time and passed.' },
        { ex: 'رُبَّمَا يَجِبُ أَنْ أَذْهَبَ إِلَى الطَّبِيبِ.', task: 'ASK a question to understand the problem.', model: 'مُنْذُ مَتَى تَشْعُرُ بِهٰذَا الصُّدَاعِ؟', modelEn: 'How long have you had this headache?' },
        { unexpected: true, ex: 'لَوْ كُنْتَ مَكَانِي، مَاذَا تَفْعَلُ؟', task: 'Answer the unexpected question (law … la-).', model: 'لَوْ كُنْتُ مَكَانَكَ، لَوَضَعْتُ جَدْوَلًا لِلْمُرَاجَعَةِ، وَلَتَكَلَّمْتُ مَعَ المُعَلِّمِ.', modelEn: 'If I were you, I would make a revision timetable and talk to the teacher.' },
      ],
      girl: 'كُنْتِ · مَكَانِكِ — and the Speaker says: أَنْصَحُكِ بِأَنْ تَتْرُكِي · تَشْرَبِي · تَمْشِي',
      notes: 'Language: anṣaḥuka bi-an + verb in -a · yajibu an … wa-an … · past experience · mundhu matā? · law kuntu makānaka, la- (Stretch).',
    },
  ],
  convAr: 'الصِّحَّةُ وَالنَّصَائِحُ',
  conv: [
    { route: 'Core', q: 'مَتَى ذَهَبْتَ إِلَى الطَّبِيبِ آخِرَ مَرَّةٍ؟', en: 'When did you last go to the doctor?', push: 'لِمَاذَا؟' },
    { route: 'Core', q: 'أَيْنَ الصَّيْدَلِيَّةُ القَرِيبَةُ مِنْ بَيْتِكَ؟', en: 'Where is the pharmacy near your home?', push: 'وَهَلْ تَذْهَبُ إِلَيْهَا كَثِيرًا؟' },
    { route: 'Develop', q: 'مَا أَفْضَلُ نَصِيحَةٍ عَنِ الصِّحَّةِ؟', en: 'What is the best health advice?', push: 'هَلْ تَفْعَلُ ذٰلِكَ؟' },
    { route: 'Develop', q: 'مَاذَا فَعَلْتَ آخِرَ مَرَّةٍ كُنْتَ فِيهَا مَرِيضًا؟', en: 'What did you do the last time you were ill?', push: 'وَمَنْ سَاعَدَكَ؟' },
    { route: 'Stretch', q: 'هَلْ نَأْخُذُ الأَدْوِيَةَ أَكْثَرَ مِنَ اللَّازِمِ؟', en: 'Do we take more medicine than we need?', push: 'لِمَاذَا فِي رَأْيِكَ؟' },
    { route: 'Stretch', q: 'هَلْ تُحِبُّ أَنْ تَعْمَلَ طَبِيبًا فِي المُسْتَقْبَلِ؟', en: 'Would you like to be a doctor in the future?', push: 'لِمَاذَا؟' },
  ],
  convModels: [
    { q: 'مَا أَفْضَلُ نَصِيحَةٍ عَنِ الصِّحَّةِ؟', model: 'أَفْضَلُ نَصِيحَةٍ أَنْ نَمْشِيَ كُلَّ يَوْمٍ، لِأَنَّ المَشْيَ مُفِيدٌ لِلْقَلْبِ؛ أَنَا أَمْشِي إِلَى المَدْرَسَةِ عِشْرِينَ دَقِيقَةً، وَفِي الصَّيْفِ سَأَمْشِي مَعَ جَدِّي أَيْضًا.', modelEn: 'A: walk every day · R: good for the heart · E: I walk to school for twenty minutes · T: in summer I will walk with my grandfather too.' },
    { q: 'مَاذَا فَعَلْتَ آخِرَ مَرَّةٍ كُنْتَ فِيهَا مَرِيضًا؟', model: 'ذَهَبْتُ إِلَى الطَّبِيبِ مَعَ أَبِي، فَنَصَحَنِي بِأَنْ أَرْتَاحَ يَوْمَيْنِ، وَأَعْطَانِي شَرَابًا لِلسُّعَالِ؛ أَخَذْتُهُ ثَلَاثَ مَرَّاتٍ فِي اليَوْمِ، فَتَحَسَّنْتُ بِسُرْعَةٍ.', modelEn: 'A: I went to the doctor with my dad · R/E: he advised two days’ rest and gave me cough syrup three times a day · result: I got better quickly.' },
    { q: 'هَلْ نَأْخُذُ الأَدْوِيَةَ أَكْثَرَ مِنَ اللَّازِمِ؟', model: 'فِي رَأْيِي نَعَمْ، لِأَنَّ بَعْضَ النَّاسِ يَأْخُذُونَ دَوَاءً لِكُلِّ صُدَاعٍ بَسِيطٍ؛ صَحِيحٌ أَنَّ الدَّوَاءَ يُسَاعِدُ، غَيْرَ أَنَّ المَاءَ وَالنَّوْمَ يَكْفِيَانِ أَحْيَانًا.', modelEn: 'Opinion: yes · R: some take medicine for every small headache · concession: medicine helps, but water and sleep are sometimes enough.' },
  ],
  talk: {
    title: 'One minute: my health advice', ar: 'نَصَائِحِي الصِّحِّيَّةُ',
    text: 'Talk for one minute giving advice to younger students about staying healthy: sleep, food, exercise, what to do when you are ill — and advice you followed yourself.',
    routes: {
      core: '30 seconds: three pieces of advice with يَجِبُ أَنْ + a verb in -a.',
      develop: '60 seconds: add reasons (لِأَنَّ) and one thing you did (past).',
      stretch: '90 seconds: give advice, a negative (يَجِبُ أَلَّا …), a personal example and an opinion.',
    },
    phrases: [['أَنْصَحُكُمْ بِأَنْ …', 'I advise you (pl.) to …'], ['يَجِبُ أَلَّا …', 'you must not …'], ['أَنَا جَرَّبْتُ …', 'I tried …'], ['فِي النِّهَايَةِ …', 'finally …']],
  },
  checkCore: 'gave advice with يَجِبُ أَنْ / أَنْصَحُكَ بِأَنْ + a verb in -a',
  checkDevelop: 'gave medicine instructions or asked a polite question (هَلْ يُمْكِنُ أَنْ …؟)',
};

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up, decoding a new Q2 task (advice to a cousin who is coming to visit), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Health centre: new patient form', ar: 'المَرْكَزُ الصِّحِّيُّ: مَرِيضٌ جَدِيدٌ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'تَارِيخُ المِيلَادِ', en: 'Date of birth', tip: 'العِشْرُونَ مِنْ أَبْرِيلَ' },
      { core: true, ar: 'رَقْمُ الهَاتِفِ', en: 'Phone number', tip: 'Digits: ٠٧٧٠٠ …' },
      { core: true, ar: 'الحَسَاسِيَّةُ', en: 'Allergies', tip: 'لَا تُوجَدُ · الغُبَارُ' },
      { core: true, ar: 'الأَدْوِيَةُ الحَالِيَّةُ', en: 'Current medicines', tip: 'لَا آخُذُ أَيَّ دَوَاءٍ' },
      { ar: 'جُمْلَةٌ: سَبَبُ الزِّيَارَةِ', en: 'ONE sentence: reason for the visit', tip: 'عِنْدِي … مُنْذُ …' },
    ],
  },
  Q2: {
    title: 'Question 2: health advice for your cousin', ar: 'نَصَائِحُ صِحِّيَّةٌ لِابْنِ عَمِّي',
    task: 'Your cousin is coming to stay with you in winter. Write an email in Arabic of about 80–90 words. You must include: • what the weather and illnesses are like in winter where you live • what happened when you were ill last winter • two pieces of advice to stay healthy, with reasons • where the nearest pharmacy or doctor is, and when they open.',
    phrases: [['فِي الشِّتَاءِ يَكُونُ الجَوُّ …', 'in winter the weather is …'], ['فِي الشِّتَاءِ المَاضِي كَانَ عِنْدِي …', 'last winter I had …'], ['أَنْصَحُكَ بِأَنْ …', 'I advise you to …'], ['تَفْتَحُ الصَّيْدَلِيَّةُ فِي …', 'the pharmacy opens at …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى ابْنِ عَمِّكَ قَبْلَ زِيَارَتِهِ (٨٠–٩٠ كَلِمَةً).', 'Write to your cousin before his visit (80–90 words).'],
      ['1', 'كَيْفَ الطَّقْسُ وَالأَمْرَاضُ فِي الشِّتَاءِ عِنْدَكُمْ؟', 'Winter weather and illnesses where you live'],
      ['2', 'مَاذَا حَدَثَ عِنْدَمَا كُنْتَ مَرِيضًا فِي الشِّتَاءِ المَاضِي؟', 'When you were ill last winter'],
      ['3', 'أَعْطِهِ نَصِيحَتَيْنِ لِيَبْقَى بِصِحَّةٍ جَيِّدَةٍ.', 'Two pieces of advice, with reasons'],
      ['4', 'أَيْنَ أَقْرَبُ صَيْدَلِيَّةٍ أَوْ طَبِيبٍ؟ وَمَتَى تَفْتَحُ؟', 'Where the nearest pharmacy is; opening times'],
    ],
    decode: ['an email to a COUSIN → informal greeting and closing', 'كَيْفَ … فِي الشِّتَاءِ → PRESENT description', 'مَاذَا حَدَثَ … كُنْتَ → PAST', 'أَعْطِهِ نَصِيحَتَيْنِ → ADVICE: أَنْصَحُكَ بِأَنْ / يَجِبُ أَنْ + verb in -a', 'أَيْنَ · مَتَى → PRESENT place + times'],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', en: 'Hello …, how are you?' },
      { ar: 'فِي الشِّتَاءِ يَكُونُ الجَوُّ ______ ، وَالنَّاسُ ______ .', en: '1 · In winter the weather is …, and people …' },
      { ar: 'فِي الشِّتَاءِ المَاضِي كَانَ عِنْدِي ______ .', en: '2 · Last winter I had …' },
      { ar: 'أَنْصَحُكَ بِأَنْ ______ ، لِأَنَّ ______ .', en: '3 · I advise you to …, because …' },
      { ar: 'الصَّيْدَلِيَّةُ ______ ، وَتَفْتَحُ فِي ______ .', en: '4 · The pharmacy is …, and opens at …' },
    ],
    developFrames: [
      { ar: 'الشِّتَاءُ عِنْدَنَا ______ وَ ______ ، لِذٰلِكَ ______ .', en: '1 · Our winter is … and …, so …' },
      { ar: 'عِنْدَمَا مَرِضْتُ ______ ، ذَهَبْتُ إِلَى ______ .', en: '2 · When I got ill …, I went to …' },
      { ar: 'يَجِبُ أَنْ ______ ، وَيَجِبُ أَلَّا ______ .', en: '3 · You must …, and you must not …' },
      { ar: 'أَقْرَبُ صَيْدَلِيَّةٍ ______ ، وَهِيَ مَفْتُوحَةٌ مِنْ ______ إِلَى ______ .', en: '4 · The nearest pharmacy is …, open from … to …' },
    ],
    bank: ['بَارِدٌ · مُمْطِرٌ', 'زُكَامٌ · سُعَالٌ', 'دَوَاءٌ', 'الصَّيْدَلِيُّ', 'مِعْطَفٌ', 'أَنْصَحُكَ بِأَنْ', 'يَجِبُ أَلَّا', 'مُقَابِلَ · بِجَانِبِ'],
    model: {
      text: `مَرْحَبًا يَا عَلِيُّ،
أَنَا سَعِيدٌ جِدًّا لِأَنَّكَ سَتَزُورُنَا! فِي الشِّتَاءِ يَكُونُ الجَوُّ بَارِدًا وَمُمْطِرًا هُنَا فِي إِسْكُتْلَنْدَا، وَكَثِيرٌ مِنَ النَّاسِ يَمْرَضُونَ بِالزُّكَامِ، خُصُوصًا فِي شَهْرِ يَنَايِرَ. فِي الشِّتَاءِ المَاضِي كَانَ عِنْدِي سُعَالٌ شَدِيدٌ وَحُمَّى، فَبَقِيتُ فِي البَيْتِ أُسْبُوعًا كَامِلًا، وَفَاتَتْنِي مُبَارَاةٌ مُهِمَّةٌ. لِذٰلِكَ أَنْصَحُكَ بِأَنْ تُحْضِرَ مِعْطَفًا ثَقِيلًا، لِأَنَّ الرِّيحَ قَوِيَّةٌ، وَيَجِبُ أَنْ تَشْرَبَ مَشْرُوبَاتٍ سَاخِنَةً كَثِيرًا. أَقْرَبُ صَيْدَلِيَّةٍ مُقَابِلَ بَيْتِنَا، وَهِيَ مَفْتُوحَةٌ مِنَ الثَّامِنَةِ صَبَاحًا إِلَى التَّاسِعَةِ مَسَاءً، وَالصَّيْدَلِيُّ لَطِيفٌ جِدًّا، وَيَتَكَلَّمُ العَرَبِيَّةَ. أَرَاكَ قَرِيبًا!
إِلَى اللِّقَاءِ،
إِبْرَاهِيمُ`,
      en: '“Hi Ali, I am so happy you are visiting us! In winter the weather is cold and rainy here in Scotland, and many people catch colds, especially in January. Last winter I had a bad cough and a fever, so I stayed at home for a whole week and missed an important match. So I advise you to bring a heavy coat, because the wind is strong, and you must drink lots of hot drinks. The nearest pharmacy is opposite our house; it is open from 8 a.m. to 9 p.m., and the pharmacist is very kind and speaks Arabic. See you soon! Ibrahim.”',
      find: ['كَثِيرٌ مِنَ النَّاسِ يَمْرَضُونَ', 'فَبَقِيتُ فِي البَيْتِ', 'أَنْصَحُكَ بِأَنْ تُحْضِرَ', 'مِنَ الثَّامِنَةِ … إِلَى'],
    },
  },
  upgrade: [
    { ar: 'خُذِ الدَّوَاءَ.', en: 'Take the medicine.' },
    { ar: 'خُذْ هٰذَا الدَّوَاءَ مَرَّتَيْنِ فِي اليَوْمِ بَعْدَ الأَكْلِ.', en: '… twice a day after food.' },
    { ar: 'خُذْ هٰذَا الدَّوَاءَ مَرَّتَيْنِ فِي اليَوْمِ بَعْدَ الأَكْلِ، لِأَنَّهُ قَوِيٌّ عَلَى المَعِدَةِ.', en: '… because it is strong on the stomach.' },
    { ar: '… وَيَجِبُ أَلَّا تَأْخُذَهُ أَكْثَرَ مِنْ أُسْبُوعٍ، وَإِلَّا فَاسْأَلِ الطَّبِيبَ.', en: '… and you must not take it for more than a week — otherwise ask the doctor.' },
  ],
  builder: [
    { en: 'I advise you to rest at home.', cols: [['أَنْصَحُكَ', 'أَنْصَحُنِي'], ['بِأَنْ تَرْتَاحَ', 'بِأَنْ تَرْتَاحُ'], ['فِي البَيْتِ', 'فِي المَدْرَسَةِ']], key: [0, 0, 0], why: 'After أَنْ the verb ends in -a: تَرْتَاحَ.' },
    { en: 'Take two tablets before eating.', cols: [['خُذْ', 'أَخَذَ'], ['حَبَّتَيْنِ', 'حَبَّتَانِ'], ['قَبْلَ الأَكْلِ', 'بَعْدَ الأَكْلِ']], key: [0, 0, 0], why: 'Imperative خُذْ; two tablets as the object = the dual حَبَّتَيْنِ.' },
    { en: 'You must not eat sweets.', cols: [['يَجِبُ', 'لَا يَجِبُ'], ['أَلَّا تَأْكُلَ', 'أَنْ لَا تَأْكُلُ'], ['الحَلَوِيَّاتِ', 'الحَلَوِيَّاتُ']], key: [0, 0, 0], why: 'Must not = يَجِبُ أَلَّا + verb in -a; the object → الحَلَوِيَّاتِ.' },
  ],
  errors: [
    { wrong: 'أَنْصَحُكَ بِأَنْ تَشْرَبُ المَاءَ.', hint: 'Look at the verb after أَنْ.', right: 'أَنْصَحُكَ بِأَنْ تَشْرَبَ المَاءَ.', why: 'After أَنْ the verb ends in -a: تَشْرَبَ.' },
    { wrong: 'خُذْ الدَّوَاءَ ثَلَاثَةَ مَرَّاتٍ.', hint: 'Is مَرَّة masculine or feminine?', right: 'خُذِ الدَّوَاءَ ثَلَاثَ مَرَّاتٍ.', why: 'مَرَّة is feminine → ثَلَاثَ مَرَّاتٍ (and خُذِ before al-).' },
    { wrong: 'هَلْ يُمْكِنُ أُرِيدُ مَوْعِدًا؟', hint: 'A polite request has a set pattern.', right: 'هَلْ يُمْكِنُ أَنْ آخُذَ مَوْعِدًا؟', why: 'هَلْ يُمْكِنُ أَنْ + a verb in -a.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a visit to the doctor', ar: 'زِيَارَةٌ إِلَى الطَّبِيبِ',
    task: 'Full Q3 title: “Staying healthy”. Today write ONLY the past paragraph: a visit to a doctor, dentist or hospital you remember — why you went, what happened, what advice you were given and how you felt.',
    formula: [
      { ar: 'فِي الشَّهْرِ المَاضِي ذَهَبْتُ إِلَى طَبِيبِ الأَسْنَانِ.', en: 'T · Last month I went to the dentist.' },
      { ar: 'كَانَ سِنِّي يُؤْلِمُنِي، فَفَحَصَهُ الطَّبِيبُ.', en: 'D · My tooth hurt, so the dentist checked it.' },
      { ar: 'نَصَحَنِي بِأَنْ آكُلَ حَلَوِيَّاتٍ أَقَلَّ.', en: 'R · He advised me to eat fewer sweets.' },
      { ar: 'شَعَرْتُ بِالرَّاحَةِ، وَسَأَتْبَعُ نَصِيحَتَهُ.', en: 'F · I felt relieved, and I will follow his advice.' },
    ],
    phrases: [['ذَهَبْتُ إِلَى … لِأَنَّ …', 'I went to … because …'], ['فَحَصَنِي الطَّبِيبُ وَ…', 'the doctor examined me and …'], ['نَصَحَنِي بِأَنْ …', 'he advised me to …'], ['فِي البِدَايَةِ كُنْتُ خَائِفًا', 'at first I was afraid'], ['شَعَرْتُ بِالرَّاحَةِ', 'I felt relieved']],
    model: {
      text: 'فِي الشَّهْرِ المَاضِي ذَهَبْتُ إِلَى طَبِيبِ الأَسْنَانِ، لِأَنَّ سِنِّي كَانَ يُؤْلِمُنِي كَثِيرًا عِنْدَمَا آكُلُ الأَشْيَاءَ البَارِدَةَ. فِي البِدَايَةِ كُنْتُ خَائِفًا جِدًّا، لٰكِنَّ الطَّبِيبَ كَانَ لَطِيفًا، وَشَرَحَ لِي كُلَّ شَيْءٍ قَبْلَ أَنْ يَبْدَأَ. فَحَصَ أَسْنَانِي، ثُمَّ قَالَ إِنَّ المُشْكِلَةَ صَغِيرَةٌ، وَنَصَحَنِي بِأَنْ أُنَظِّفَ أَسْنَانِي مَرَّتَيْنِ فِي اليَوْمِ، وَأَنْ آكُلَ حَلَوِيَّاتٍ أَقَلَّ. شَعَرْتُ بِالرَّاحَةِ عِنْدَمَا خَرَجْتُ، وَمِنْ ذٰلِكَ اليَوْمِ لَا أَشْرَبُ المَشْرُوبَاتِ الغَازِيَّةَ أَبَدًا.',
      en: 'T: last month I went to the dentist because my tooth hurt with cold food · D: at first I was very afraid, but the dentist was kind and explained everything before starting; he checked my teeth and said the problem was small · R: he advised me to brush twice a day and eat fewer sweets · F: I felt relieved when I left, and since that day I never drink fizzy drinks.',
      find: ['لِأَنَّ سِنِّي كَانَ يُؤْلِمُنِي', 'فِي البِدَايَةِ كُنْتُ خَائِفًا', 'وَنَصَحَنِي بِأَنْ أُنَظِّفَ', 'شَعَرْتُ بِالرَّاحَةِ'],
    },
  },
};

module.exports = { speak, write };
