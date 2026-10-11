'use strict';
/* Exam-practice data · TD-L04 · Studying, Exams and Learning Strategies (verbal nouns; advice; inna and kāna). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'D', n: 4, short: 'Studying, Exams and Learning Strategies', arShort: 'الدِّرَاسَةُ وَالامْتِحَانَاتُ', fileTitle: 'Studying_Exams_and_Learning_Strategies', title: 'Studying, Exams and Learning Strategies', ar: 'الدِّرَاسَةُ وَالِامْتِحَانَاتُ وَاسْتِرَاتِيجِيَّاتُ التَّعَلُّمِ', icon: 'FaBookOpen', grammar: 'verbal nouns (al-murājaʿa, at-tarkīz, at-tanẓīm); advice (yanbaghī an, min al-mufīd an, lā + jussive); inna and kāna (inna al-murājaʿata muhimmatun · kāna al-imtiḥānu ṣaʿban)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: talk about how you revise and prepare for exams, give advice (يَنْبَغِي أَنْ · مِنَ المُفِيدِ أَنْ · لَا تَسْهَرْ), use verbal nouns (المُرَاجَعَةُ · التَّرْكِيزُ) and describe a past exam with كَانَ.',
  words: [
    w(1, 'امْتِحَانٌ', 'an exam', [['pl.', 'امْتِحَانَاتٌ'], ['final', 'امْتِحَانٌ نِهَائِيٌّ'], ['a test', 'اخْتِبَارٌ']]),
    w(2, 'أُرَاجِعُ', 'I revise', [['past', 'رَاجَعْتُ'], ['future', 'سَأُرَاجِعُ'], ['revision', 'المُرَاجَعَةُ']], { tag: 'verb → noun' }),
    w(3, 'أُرَكِّزُ', 'I concentrate', [['concentration', 'التَّرْكِيزُ'], ['focused (m. · f.)', 'مُرَكِّزٌ · مُرَكِّزَةٌ']], { tag: 'verb → noun' }),
    w(4, 'أُنَظِّمُ وَقْتِي', 'I organise my time', [['organisation', 'تَنْظِيمُ الوَقْتِ'], ['organised', 'مُنَظَّمٌ · مُنَظَّمَةٌ']], { tag: 'verb → noun' }),
    w(5, 'أَحْفَظُ', 'I memorise', [['memorising', 'الحِفْظُ'], ['by heart', 'عَنْ ظَهْرِ قَلْبٍ']]),
    w(6, 'مُلَخَّصٌ', 'a summary', [['pl.', 'مُلَخَّصَاتٌ'], ['a mind map', 'خَرِيطَةٌ ذِهْنِيَّةٌ']]),
    w(7, 'أَنْجَحُ · أَرْسُبُ', 'I pass · I fail', [['success', 'النَّجَاحُ'], ['failure', 'الرُّسُوبُ']]),
    w(8, 'دَرَجَةٌ', 'a mark, grade', [['pl.', 'دَرَجَاتٌ'], ['full marks', 'الدَّرَجَةُ الكَامِلَةُ']]),
    w(9, 'قَلَقٌ · ضَغْطٌ', 'anxiety · pressure', [['worried (m. · f.)', 'قَلِقٌ · قَلِقَةٌ'], ['stress of exams', 'ضَغْطُ الامْتِحَانَاتِ']]),
    w(10, 'يَنْبَغِي أَنْ …', 'you should …', [['it is useful to', 'مِنَ المُفِيدِ أَنْ'], ['don’t (m.)', 'لَا تَسْهَرْ']], { tag: 'advice' }),
    w(11, 'إِنَّ …', 'indeed … (+ accusative)', [['e.g.', 'إِنَّ المُرَاجَعَةَ مُهِمَّةٌ'], ['because', 'لِأَنَّ']], { tag: 'inna' }),
    w(12, 'كَانَ …', 'was (+ accusative)', [['e.g.', 'كَانَ الامْتِحَانُ صَعْبًا'], ['f.', 'كَانَتِ الأَسْئِلَةُ سَهْلَةً']], { tag: 'kāna' }),
  ],
  words1: { eyebrow: 'Language bank · study verbs and their verbal nouns', title: 'Revise, concentrate, organise', ar: 'أَفْعَالٌ وَمَصَادِرُ', notes: 'LANGUAGE BANK (2 min) — the verbal noun names the activity: أُرَاجِعُ → المُرَاجَعَةُ مُهِمَّةٌ · أُرَكِّزُ → التَّرْكِيزُ صَعْبٌ · أُنَظِّمُ وَقْتِي → تَنْظِيمُ الوَقْتِ مُفِيدٌ.' },
  words2: { eyebrow: 'Language bank · advice, inna and kāna', title: 'You should … it was …', ar: 'النَّصِيحَةُ', notes: 'LANGUAGE BANK (2 min) — advice: يَنْبَغِي أَنْ تُرَاجِعَ (fatḥa) · لَا تَسْهَرْ (sukūn). إِنَّ + noun in the accusative: إِنَّ النَّوْمَ ضَرُورِيٌّ. كَانَ + predicate in the accusative: كَانَ الامْتِحَانُ طَوِيلًا.' },
  checkCore: 'said how they revise and gave one piece of advice',
  checkDevelop: 'used a verbal noun and kāna + accusative to describe a past exam',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a revision chat', title: 'Role play A — Revising with a friend', ar: 'نُرَاجِعُ مَعًا', you: 'a student', them: 'a classmate',
      tasks: [
        { core: true, ex: 'مَتَى امْتِحَانُكَ؟', task: 'Say when your exam is.', help: 'امْتِحَانِي يَوْمَ …', model: 'امْتِحَانِي يَوْمَ الاثْنَيْنِ القَادِمِ.', modelEn: 'My exam is next Monday.' },
        { core: true, ex: 'فِي أَيِّ مَادَّةٍ؟', task: 'Name the subject.', help: 'فِي …', model: 'فِي الكِيمْيَاءِ.', modelEn: 'In chemistry.' },
        { core: true, ex: 'كَيْفَ تُرَاجِعُ؟', task: 'Say how you revise.', help: 'أُرَاجِعُ … وَأَكْتُبُ …', model: 'أُرَاجِعُ كُلَّ مَسَاءٍ، وَأَكْتُبُ مُلَخَّصَاتٍ قَصِيرَةً.', modelEn: 'I revise every evening and write short summaries.' },
        { core: true, ex: 'أَنَا قَلِقٌ جِدًّا.', task: 'Give one piece of advice.', help: 'يَنْبَغِي أَنْ …', model: 'يَنْبَغِي أَنْ تَنَامَ جَيِّدًا قَبْلَ الامْتِحَانِ.', modelEn: 'You should sleep well before the exam.' },
        { core: true, unexpected: true, ex: 'هَلْ نَدْرُسُ مَعًا غَدًا؟', task: 'Answer the unexpected question.', help: 'نَعَمْ، فِي … السَّاعَةَ …', model: 'نَعَمْ، فِي المَكْتَبَةِ السَّاعَةَ الرَّابِعَةَ.', modelEn: 'Yes, in the library at four o’clock.' },
      ],
      girl: 'امْتِحَانُكِ · تُرَاجِعِينَ · (advice to a girl:) تَنَامِي',
      notes: 'Core: yawma al-ithnayni al-qādim, mulakhkhaṣātin qaṣīra (non-human pl.), yanbaghī an tanāma (subjunctive), a time with as-sāʿata.',
    },
    {
      id: 'B', level: 'Core+', setting: 'a study-skills session', title: 'Role play B — Asking a tutor for advice', ar: 'نَصِيحَةٌ مِنَ المُعَلِّمِ', you: 'a student', them: 'a study-skills tutor',
      tasks: [
        { core: true, ex: 'مَا المُشْكِلَةُ؟', task: 'Describe your problem.', help: 'لَا أَسْتَطِيعُ أَنْ …', model: 'لَا أَسْتَطِيعُ أَنْ أُرَكِّزَ أَكْثَرَ مِنْ عِشْرِينَ دَقِيقَةً.', modelEn: 'I can’t concentrate for more than twenty minutes.' },
        { core: true, ex: 'وَأَيْنَ تُرَاجِعُ؟', task: 'Say where and with what.', help: 'أُرَاجِعُ فِي … وَهَاتِفِي …', model: 'أُرَاجِعُ فِي غُرْفَتِي، وَهَاتِفِي بِجَانِبِي.', modelEn: 'I revise in my room, with my phone next to me.' },
        { ex: 'هٰذَا هُوَ السَّبَبُ!', task: 'ASK what you should do.', help: 'مَاذَا يَنْبَغِي أَنْ …؟', model: 'إِذَنْ مَاذَا يَنْبَغِي أَنْ أَفْعَلَ؟', modelEn: 'So what should I do?' },
        { ex: 'ضَعِ الهَاتِفَ فِي غُرْفَةٍ أُخْرَى، وَخُذْ اسْتِرَاحَةً قَصِيرَةً.', task: 'Accept and say what you will try.', help: 'فِكْرَةٌ جَيِّدَةٌ. سَأُجَرِّبُ …', model: 'فِكْرَةٌ جَيِّدَةٌ. سَأُجَرِّبُ المُرَاجَعَةَ نِصْفَ سَاعَةٍ، ثُمَّ اسْتِرَاحَةً لِمُدَّةِ خَمْسِ دَقَائِقَ.', modelEn: 'Good idea. I’ll try half an hour of revision, then a five-minute break.' },
        { unexpected: true, ex: 'كَيْفَ كَانَ امْتِحَانُكَ الأَخِيرُ؟', task: 'Answer the unexpected question (kāna).', help: 'كَانَ … لِأَنِّي …', model: 'كَانَ صَعْبًا، لِأَنِّي لَمْ أُرَاجِعْ بِشَكْلٍ مُنَظَّمٍ.', modelEn: 'It was hard, because I didn’t revise in an organised way.' },
      ],
      girl: 'تُرَاجِعِينَ · ضَعِي · خُذِي · امْتِحَانُكِ',
      notes: 'Core+: lā astaṭīʿu an + subjunctive, the CANDIDATE asks (mādhā yanbaghī an afʿala?), a verbal noun as object (al-murājaʿa), kāna ṣaʿban, lam + jussive.',
    },
    {
      id: 'C', level: 'Develop', setting: 'after results day', title: 'Role play C — After the mock exams', ar: 'بَعْدَ الامْتِحَانَاتِ التَّجْرِيبِيَّةِ', you: 'a student', them: 'your head of year',
      tasks: [
        { ex: 'كَيْفَ كَانَتْ نَتَائِجُكَ؟', task: 'Describe results with kānat.', help: 'كَانَتْ … فِي … لٰكِنَّ …', model: 'كَانَتْ جَيِّدَةً فِي العَرَبِيَّةِ وَالتَّارِيخِ، لٰكِنَّ دَرَجَتِي فِي الرِّيَاضِيَّاتِ كَانَتْ مُخَيِّبَةً.', modelEn: 'Good in Arabic and history, but my maths mark was disappointing.' },
        { ex: 'لِمَاذَا فِي رَأْيِكَ؟', task: 'Explain with verbal nouns.', help: 'بِسَبَبِ قِلَّةِ … وَ…', model: 'بِسَبَبِ قِلَّةِ التَّمَارِينِ، وَتَأْجِيلِ المُرَاجَعَةِ إِلَى آخِرِ أُسْبُوعٍ.', modelEn: 'Because of too little practice and leaving revision to the last week.' },
        { ex: 'وَكَيْفَ رَاجَعْتَ لِلْعَرَبِيَّةِ؟', task: 'Describe a successful method (past).', help: 'صَنَعْتُ … وَكُنْتُ …', model: 'صَنَعْتُ بِطَاقَاتٍ لِلْمُفْرَدَاتِ، وَكُنْتُ أُرَاجِعُهَا عَشْرَ دَقَائِقَ كُلَّ صَبَاحٍ فِي الحَافِلَةِ.', modelEn: 'I made vocab cards and went over them ten minutes every morning on the bus.' },
        { ex: 'مَا خُطَّتُكَ لِلرِّيَاضِيَّاتِ إِذَنْ؟', task: 'Give a plan with inna and purpose.', help: 'إِنَّ … لِذٰلِكَ سَـ… لِكَيْ …', model: 'إِنَّ التَّدْرِيبَ اليَوْمِيَّ هُوَ الحَلُّ، لِذٰلِكَ سَأَحُلُّ عَشْرَ مَسَائِلَ كُلَّ يَوْمٍ، لِكَيْ أَتَعَوَّدَ عَلَى الأَسْئِلَةِ.', modelEn: 'Daily practice is the answer, so I’ll do ten problems a day to get used to the questions.' },
        { unexpected: true, ex: 'وَمَاذَا تَقُولُ لِطَالِبٍ أَصْغَرَ مِنْكَ؟', task: 'Answer the unexpected question (advice).', help: 'لَا تُؤَجِّلْ … وَمِنَ المُفِيدِ أَنْ …', model: 'لَا تُؤَجِّلِ المُرَاجَعَةَ، وَمِنَ المُفِيدِ أَنْ تَبْدَأَ قَبْلَ الامْتِحَانِ بِشَهْرٍ عَلَى الأَقَلِّ.', modelEn: 'Don’t put off revision; it helps to start at least a month before the exam.' },
      ],
      girl: 'نَتَائِجُكِ · رَأْيِكِ · رَاجَعْتِ · خُطَّتُكِ · تَقُولِينَ',
      notes: 'Develop: kānat + accusative (jayyida, mukhayyiba), bi-sababi + verbal nouns, kuntu + present, inna + accusative, li-dhālika sa- … li-kay, lā + jussive, min al-mufīd an.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a wellbeing assembly', title: 'Role play D — Exam stress: who can help?', ar: 'ضَغْطُ الامْتِحَانَاتِ', you: 'a sixth-form mentor', them: 'the assembly host',
      tasks: [
        { ex: 'لِمَاذَا يَشْعُرُ الطُّلَّابُ بِالقَلَقِ قَبْلَ الامْتِحَانَاتِ؟', task: 'Explain with a cause chain.', help: 'لِأَنَّ … مِمَّا يُؤَدِّي إِلَى …', model: 'لِأَنَّ كَثِيرًا مِنْهُمْ يَرْبِطُونَ مُسْتَقْبَلَهُمْ كُلَّهُ بِدَرَجَةٍ وَاحِدَةٍ، مِمَّا يُؤَدِّي إِلَى قِلَّةِ النَّوْمِ وَضَعْفِ التَّرْكِيزِ.', modelEn: 'Many link their whole future to one grade, which leads to poor sleep and weak focus.' },
        { ex: 'هَلْ مَرَرْتَ بِتَجْرِبَةٍ كَهٰذِهِ؟', task: 'Describe a past experience and a turning point.', help: 'نَعَمْ، كُنْتُ … إِلَى أَنْ …', model: 'نَعَمْ، كُنْتُ أَسْهَرُ حَتَّى الفَجْرِ قَبْلَ كُلِّ امْتِحَانٍ، إِلَى أَنْ نَسِيتُ كُلَّ شَيْءٍ فِي امْتِحَانِ الفِيزْيَاءِ، فَغَيَّرْتُ طَرِيقَتِي تَمَامًا.', modelEn: 'Yes, I used to stay up till dawn before exams, until I blanked in physics — so I changed my approach completely.' },
        { ex: 'مَا نَصِيحَتُكَ لِلطُّلَّابِ؟', task: 'Give three pieces of advice with linkers.', help: 'أَوَّلًا … ثَانِيًا … أَخِيرًا …', model: 'أَوَّلًا، ضَعُوا جَدْوَلًا وَاقِعِيًّا؛ ثَانِيًا، لَا تُقَارِنُوا أَنْفُسَكُمْ بِغَيْرِكُمْ؛ وَأَخِيرًا، إِنَّ النَّوْمَ جُزْءٌ مِنَ المُرَاجَعَةِ لَا عَدُوُّهَا.', modelEn: 'First, make a realistic plan; second, don’t compare yourselves; finally, sleep is part of revision, not its enemy.' },
        { ex: 'أَلَيْسَتِ الامْتِحَانَاتُ ضَرُورِيَّةً؟', task: 'Concede and counter.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهَا ضَرُورِيَّةٌ لِقِيَاسِ التَّقَدُّمِ، غَيْرَ أَنَّهَا لَا تَقِيسُ الإِبْدَاعَ وَلَا التَّعَاوُنَ.', modelEn: 'They are needed to measure progress, but they don’t measure creativity or teamwork.' },
        { unexpected: true, ex: 'لَوْ أَلْغَيْتَ الامْتِحَانَاتِ، مَاذَا تَضَعُ مَكَانَهَا؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ أَلْغَيْتُهَا، لَـ…', model: 'لَوْ أَلْغَيْتُهَا، لَوَضَعْتُ مَكَانَهَا مَشَارِيعَ طَوِيلَةً يُقَيَّمُ فِيهَا الطَّالِبُ عَلَى مَدَارِ السَّنَةِ.', modelEn: 'If I scrapped them, I’d replace them with long projects assessed across the year.' },
      ],
      girl: 'مَرَرْتِ · نَصِيحَتُكِ · أَلْغَيْتِ',
      notes: 'Stretch: a cause chain with mimmā and verbal nouns, kuntu + present … ilā an … fa-, plural imperatives (ḍaʿū, lā tuqārinū), inna, a concession with lā … wa-lā, law … la- with a passive (yuqayyamu).',
      modelFoot: 'Stretch: cause → effect, a turning point, structured advice, a concession and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'كَيْفَ أَدْرُسُ', aim: 'one full sentence per question',
      qs: [
        { q: 'أَيْنَ تُرَاجِعُ عَادَةً؟', en: 'Where do you usually revise?', start: 'أُرَاجِعُ فِي …', model: 'أُرَاجِعُ فِي غُرْفَتِي أَوْ فِي المَكْتَبَةِ.', modelEn: 'I revise in my room or in the library.' },
        { q: 'مَتَى تُرَاجِعُ؟', en: 'When do you revise?', start: 'أُرَاجِعُ فِي …', model: 'أُرَاجِعُ فِي المَسَاءِ بَعْدَ العَشَاءِ.', modelEn: 'I revise in the evening after dinner.' },
        { q: 'هَلْ تَشْعُرُ بِالقَلَقِ قَبْلَ الامْتِحَانِ؟', en: 'Do you feel anxious before an exam?', start: 'نَعَمْ / لَا، …', model: 'نَعَمْ، أَشْعُرُ بِالقَلَقِ قَلِيلًا.', modelEn: 'Yes, I feel a little anxious.' },
        { q: 'مَا أَصْعَبُ امْتِحَانٍ عِنْدَكَ؟', en: 'What is your hardest exam?', start: 'أَصْعَبُ امْتِحَانٍ …', model: 'أَصْعَبُ امْتِحَانٍ عِنْدِي امْتِحَانُ الفِيزْيَاءِ.', modelEn: 'My hardest exam is physics.' },
        { q: 'مَا نَصِيحَتُكَ لِصَدِيقٍ قَلِقٍ؟', en: 'What is your advice to a worried friend?', start: 'يَنْبَغِي أَنْ …', model: 'يَنْبَغِي أَنْ يَنَامَ جَيِّدًا وَيَأْكُلَ فُطُورًا صِحِّيًّا.', modelEn: 'He should sleep well and eat a healthy breakfast.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + yanbaghī an + subjunctive = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'اسْتِرَاتِيجِيَّاتُ التَّعَلُّمِ', aim: 'two or three sentences, with a verbal noun and a past detail',
      qs: [
        { q: 'مَا أَفْضَلُ طَرِيقَةٍ لِلْمُرَاجَعَةِ فِي رَأْيِكَ؟', en: 'What is the best way to revise?', start: 'إِنَّ أَفْضَلَ طَرِيقَةٍ … لِأَنَّ …', model: 'إِنَّ أَفْضَلَ طَرِيقَةٍ هِيَ حَلُّ الامْتِحَانَاتِ السَّابِقَةِ، لِأَنَّهَا تُعَلِّمُنَا نَوْعَ الأَسْئِلَةِ وَتَنْظِيمَ الوَقْتِ.', modelEn: 'The best way is doing past papers, because they teach the question types and timing.' },
        { q: 'صِفِ امْتِحَانًا لَا تَنْسَاهُ.', en: 'Describe an exam you won’t forget.', start: 'كَانَ … وَكُنْتُ … لٰكِنَّ …', model: 'كَانَ امْتِحَانُ العَرَبِيَّةِ الشَّفَهِيُّ، وَكُنْتُ قَلِقًا جِدًّا، لٰكِنَّ المُمْتَحِنَ كَانَ لَطِيفًا، فَنَجَحْتُ بِتَفَوُّقٍ.', modelEn: 'The Arabic speaking exam: I was very anxious, but the examiner was kind, and I passed with distinction.' },
        { q: 'هَلْ تُفَضِّلُ الدِّرَاسَةَ وَحْدَكَ أَمْ مَعَ الآخَرِينَ؟', en: 'Do you prefer studying alone or with others?', start: 'أُفَضِّلُ … لِأَنَّ … لٰكِنَّ …', model: 'أُفَضِّلُ الدِّرَاسَةَ وَحْدِي لِلتَّرْكِيزِ، لٰكِنَّ المُرَاجَعَةَ مَعَ صَدِيقٍ مُفِيدَةٌ قَبْلَ الامْتِحَانِ بِيَوْمٍ.', modelEn: 'Alone, to concentrate — but revising with a friend the day before helps.' },
        { q: 'كَيْفَ تُنَظِّمُ وَقْتَكَ فِي فَتْرَةِ الامْتِحَانَاتِ؟', en: 'How do you organise your time during exams?', start: 'أَضَعُ جَدْوَلًا … وَأُخَصِّصُ …', model: 'أَضَعُ جَدْوَلًا لِلْمُرَاجَعَةِ، وَأُخَصِّصُ سَاعَتَيْنِ لِكُلِّ مَادَّةٍ، مَعَ اسْتِرَاحَاتٍ قَصِيرَةٍ.', modelEn: 'I make a revision timetable, two hours per subject, with short breaks.' },
        { q: 'مَاذَا سَتُغَيِّرُ فِي طَرِيقَةِ دِرَاسَتِكَ؟', en: 'What will you change in how you study?', start: 'سَأَبْدَأُ … وَلَنْ …', model: 'سَأَبْدَأُ المُرَاجَعَةَ مُبَكِّرًا، وَلَنْ أَسْتَخْدِمَ الهَاتِفَ أَثْنَاءَ الدِّرَاسَةِ.', modelEn: 'I’ll start revising early, and I won’t use my phone while studying.' },
      ],
      foot: 'Develop: two or three sentences — a verbal noun, inna or kāna + accusative, and a past or future detail.',
      modelFoot: 'Verbal noun + kāna / inna + time frame = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الامْتِحَانَاتُ وَالنَّجَاحُ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ تَقِيسُ الامْتِحَانَاتُ ذَكَاءَ الطَّالِبِ؟', en: 'Do exams measure intelligence?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهَا تَقِيسُ الحِفْظَ وَالفَهْمَ، غَيْرَ أَنَّهَا لَا تَقِيسُ الإِبْدَاعَ أَوِ القُدْرَةَ عَلَى العَمَلِ فِي فَرِيقٍ.', modelEn: 'They measure memory and understanding, but not creativity or teamwork.' },
        { q: 'هَلِ الدُّرُوسُ الخُصُوصِيَّةُ ضَرُورِيَّةٌ؟', en: 'Are private tutors necessary?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، تُسَاعِدُ الطَّالِبَ الضَّعِيفَ، وَمِنْ نَاحِيَةٍ أُخْرَى، هِيَ غَالِيَةٌ، مِمَّا يَجْعَلُ الفُرَصَ غَيْرَ مُتَسَاوِيَةٍ.', modelEn: 'They help struggling students, but they’re expensive, which makes opportunities unequal.' },
        { q: 'كَيْفَ تُؤَثِّرُ التِّكْنُولُوجْيَا فِي المُرَاجَعَةِ؟', en: 'How does technology affect revision?', start: 'إِنَّ التَّطْبِيقَاتِ … لٰكِنَّ …', model: 'إِنَّ التَّطْبِيقَاتِ التَّعْلِيمِيَّةَ تَجْعَلُ المُرَاجَعَةَ مُمْتِعَةً، لٰكِنَّ الإِشْعَارَاتِ تَقْطَعُ التَّرْكِيزَ كُلَّ دَقِيقَتَيْنِ.', modelEn: 'Educational apps make revision fun, but notifications break concentration every two minutes.' },
        { q: 'كَيْفَ كَانَ وَالِدَاكَ يَدْرُسَانِ؟', en: 'How did your parents study?', start: 'كَانَا يَدْرُسَانِ … أَمَّا أَنَا فَـ…', model: 'كَانَا يَدْرُسَانِ مِنَ الكُتُبِ فَقَطْ، وَيَحْفَظَانِ كَثِيرًا، أَمَّا أَنَا فَأُشَاهِدُ شُرُوحًا وَأَحُلُّ اخْتِبَارَاتٍ عَلَى الإِنْتَرْنِتِ.', modelEn: 'They studied only from books and memorised a lot; I watch explainers and do online quizzes.' },
        { q: 'لَوْ رَسَبْتَ فِي امْتِحَانٍ مُهِمٍّ، مَاذَا تَفْعَلُ؟', en: 'If you failed an important exam, what would you do?', start: 'لَوْ رَسَبْتُ، لَـ…', model: 'لَوْ رَسَبْتُ، لَحَزِنْتُ يَوْمًا وَاحِدًا، ثُمَّ لَحَلَّلْتُ أَخْطَائِي، وَلَأَعَدْتُ الامْتِحَانَ بِخُطَّةٍ أَفْضَلَ.', modelEn: 'I’d be sad for a day, then analyse my mistakes and retake it with a better plan.' },
      ],
      foot: 'Stretch: a concession, a balanced view with mimmā, inna, a dual verb in the past (kānā yadrusān) and law … la-.',
      modelFoot: 'Stretch: ṣaḥīḥun anna … ghayra anna, balance, inna, past vs present and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I said how, where and when I revise.' },
    { route: 'core', text: 'I gave advice with yanbaghī an + subjunctive.' },
    { route: 'develop', text: 'I used verbal nouns (al-murājaʿa, at-tarkīz, tanẓīm al-waqt).' },
    { route: 'develop', text: 'I described a past exam with kāna + accusative.' },
    { route: 'stretch', text: 'I used inna, a concession or law … la-.' },
  ],
};
speak.RP[2].tasks[3].help = 'إِنَّ … لِذٰلِكَ سَأَحُلُّ … لِكَيْ …';
speak.RP[2].tasks[4].help = 'لَا تُؤَجِّلِ … وَمِنَ المُفِيدِ أَنْ …';
speak.RP[3].tasks[4].help = 'لَوْ أَلْغَيْتُهَا، لَوَضَعْتُ …';
speak.CONV[2].qs[3].start = 'كَانَا يَدْرُسَانِ … أَمَّا أَنَا فَأُشَاهِدُ …';
speak.CONV[2].qs[4].start = 'لَوْ رَسَبْتُ، لَحَزِنْتُ … ثُمَّ …';

const Q2_CORE = `مَرْحَبًا يَا سَامِي،
كَيْفَ حَالُكَ؟ عِنْدِي امْتِحَانَاتٌ مُهِمَّةٌ بَعْدَ أُسْبُوعَيْنِ، لِذٰلِكَ أُرَاجِعُ كُلَّ يَوْمٍ. أُرَاجِعُ فِي المَكْتَبَةِ مِنَ السَّاعَةِ الرَّابِعَةِ إِلَى السَّادِسَةِ، وَأَكْتُبُ مُلَخَّصَاتٍ وَخَرَائِطَ ذِهْنِيَّةً. فِي الأُسْبُوعِ المَاضِي كَانَ عِنْدِي اخْتِبَارٌ فِي الكِيمْيَاءِ، وَكَانَ صَعْبًا، لِأَنِّي لَمْ أُرَاجِعْ جَيِّدًا. فِي رَأْيِي، إِنَّ تَنْظِيمَ الوَقْتِ مُهِمٌّ جِدًّا. نَصِيحَتِي لَكَ: يَنْبَغِي أَنْ تَبْدَأَ مُبَكِّرًا، وَلَا تَسْهَرْ قَبْلَ الامْتِحَانِ. بَعْدَ الامْتِحَانَاتِ سَأُسَافِرُ مَعَ أُسْرَتِي إِلَى البَحْرِ.
إِلَى اللِّقَاءِ،
يَاسِرُ`;
const Q2_FULL = `عَزِيزِي سَامِي،
تَبْدَأُ امْتِحَانَاتِي النِّهَائِيَّةُ بَعْدَ أُسْبُوعَيْنِ، وَقَدْ وَضَعْتُ لِنَفْسِي جَدْوَلًا صَارِمًا: أُرَاجِعُ فِي المَكْتَبَةِ كُلَّ يَوْمٍ مِنَ الرَّابِعَةِ إِلَى السَّابِعَةِ، وَأُحَوِّلُ كُلَّ دَرْسٍ إِلَى خَرِيطَةٍ ذِهْنِيَّةٍ مُلَوَّنَةٍ. وَقَدْ تَعَلَّمْتُ هٰذَا الدَّرْسَ بِالطَّرِيقَةِ الصَّعْبَةِ؛ فَفِي الامْتِحَانِ التَّجْرِيبِيِّ لِلْكِيمْيَاءِ كَانَتِ الأَسْئِلَةُ أَصْعَبَ مِمَّا تَوَقَّعْتُ، لِأَنِّي أَجَّلْتُ المُرَاجَعَةَ إِلَى اللَّيْلَةِ الأَخِيرَةِ. إِنَّ التَّنْظِيمَ فِي رَأْيِي أَهَمُّ مِنْ عَدَدِ السَّاعَاتِ؛ لِذٰلِكَ أَنْصَحُكَ بِأَنْ تَبْدَأَ مُبَكِّرًا، وَأَلَّا تُضَحِّيَ بِالنَّوْمِ أَبَدًا. وَإِذَا نَجَحْتُ كَمَا أَتَمَنَّى، فَسَأَحْتَفِلُ بِرِحْلَةٍ إِلَى البَحْرِ مَعَ أُسْرَتِي.
مَعَ تَمَنِّيَاتِي بِالتَّوْفِيقِ،
يَاسِرُ`;
const Q3A_CORE = `أَنَا فِي الصَّفِّ الحَادِي عَشَرَ، وَعِنْدِي امْتِحَانَاتٌ مُهِمَّةٌ هٰذِهِ السَّنَةَ. لِذٰلِكَ أُرَاجِعُ كُلَّ يَوْمٍ بَعْدَ المَدْرَسَةِ. أُرَاجِعُ فِي غُرْفَتِي، وَأُغْلِقُ هَاتِفِي، لِكَيْ أُرَكِّزَ أَكْثَرَ. أَكْتُبُ مُلَخَّصَاتٍ قَصِيرَةً، وَأَحُلُّ امْتِحَانَاتٍ سَابِقَةً كَثِيرَةً.
إِنَّ تَنْظِيمَ الوَقْتِ مُهِمٌّ جِدًّا. عِنْدِي جَدْوَلٌ لِلْمُرَاجَعَةِ: أُرَاجِعُ مَادَّتَيْنِ كُلَّ يَوْمٍ، وَآخُذُ اسْتِرَاحَةً قَصِيرَةً كُلَّ نِصْفِ سَاعَةٍ. فِي يَوْمِ الجُمُعَةِ لَا أُرَاجِعُ، بَلْ أَلْعَبُ كُرَةَ القَدَمِ مَعَ أَصْدِقَائِي.
فِي السَّنَةِ المَاضِيَةِ كَانَ عِنْدِي امْتِحَانٌ فِي الفِيزْيَاءِ، وَكَانَ صَعْبًا جِدًّا. سَهِرْتُ حَتَّى السَّاعَةِ الثَّانِيَةِ لَيْلًا، فَكُنْتُ تَعْبَانَ فِي الامْتِحَانِ، وَنَسِيتُ أَشْيَاءَ كَثِيرَةً. كَانَتْ دَرَجَتِي ضَعِيفَةً، وَحَزِنْتُ كَثِيرًا.
فِي رَأْيِي، يَنْبَغِي أَنْ يَبْدَأَ الطُّلَّابُ المُرَاجَعَةَ مُبَكِّرًا، وَأَنْ يَنَامُوا جَيِّدًا. فِي المُسْتَقْبَلِ سَأُرَاجِعُ بِطَرِيقَةٍ أَفْضَلَ، وَسَأَحْصُلُ عَلَى دَرَجَاتٍ عَالِيَةٍ إِنْ شَاءَ اللّٰهُ.`;
const Q3A_FULL = `كُنْتُ أَظُنُّ أَنَّ النَّجَاحَ فِي الامْتِحَانَاتِ يَعْتَمِدُ عَلَى عَدَدِ السَّاعَاتِ الَّتِي نَقْضِيهَا أَمَامَ الكُتُبِ، إِلَى أَنْ تَعَلَّمْتُ دَرْسًا قَاسِيًا فِي الصَّفِّ العَاشِرِ، دَرْسًا غَيَّرَ طَرِيقَتِي فِي الدِّرَاسَةِ إِلَى الأَبَدِ.
فَقَبْلَ امْتِحَانِ الفِيزْيَاءِ التَّجْرِيبِيِّ، سَهِرْتُ ثَلَاثَ لَيَالٍ مُتَتَالِيَةٍ أَقْرَأُ وَأُعِيدُ القِرَاءَةَ، فَدَخَلْتُ القَاعَةَ مُتْعَبًا إِلَى دَرَجَةِ أَنِّي نَسِيتُ قَوَانِينَ كُنْتُ أَحْفَظُهَا جَيِّدًا. وَكَانَتِ النَّتِيجَةُ أَسْوَأَ دَرَجَةٍ حَصَلْتُ عَلَيْهَا فِي حَيَاتِي، فَخَرَجْتُ مِنَ المَدْرَسَةِ يَوْمَهَا مَكْسُورَ القَلْبِ.
عِنْدَهَا غَيَّرْتُ طَرِيقَتِي تَمَامًا؛ فَأَصْبَحْتُ أُرَاجِعُ عَلَى فَتَرَاتٍ قَصِيرَةٍ، وَأَخْتَبِرُ نَفْسِي بَدَلًا مِنْ إِعَادَةِ القِرَاءَةِ، وَأَشْرَحُ الدُّرُوسَ لِأُخْتِي الصَّغِيرَةِ، لِأَنَّ الشَّرْحَ يَكْشِفُ بِوُضُوحٍ مَا لَمْ أَفْهَمْهُ جَيِّدًا بَعْدُ. وَالأَهَمُّ أَنِّي صِرْتُ أَنَامُ ثَمَانِيَ سَاعَاتٍ كَامِلَةً مَهْمَا كَانَ الضَّغْطُ كَبِيرًا.
صَحِيحٌ أَنَّ الجُهْدَ ضَرُورِيٌّ، غَيْرَ أَنَّ الذَّكَاءَ فِي اسْتِخْدَامِهِ هُوَ مَا يَصْنَعُ الفَرْقَ. وَلَوْ عَرَفْتُ هٰذَا مِنْ قَبْلُ، لَوَفَّرْتُ عَلَى نَفْسِي كَثِيرًا مِنَ القَلَقِ وَاللَّيَالِي الضَّائِعَةِ.`;
const Q3B_FULL = `يَعِيشُ كَثِيرٌ مِنَ الطُّلَّابِ فِي فَتْرَةِ الامْتِحَانَاتِ تَحْتَ ضَغْطٍ هَائِلٍ، حَتَّى إِنَّ بَعْضَهُمْ يَفْقِدُ القُدْرَةَ عَلَى النَّوْمِ أَوِ الأَكْلِ. فَهَلْ هٰذَا الضَّغْطُ ثَمَنٌ ضَرُورِيٌّ لِلنَّجَاحِ، أَمْ أَنَّنَا نَسْتَطِيعُ أَنْ نَتَجَنَّبَهُ؟
مِنْ نَاحِيَةٍ، إِنَّ قَلِيلًا مِنَ القَلَقِ مُفِيدٌ، لِأَنَّهُ يَدْفَعُنَا إِلَى المُرَاجَعَةِ وَالاسْتِعْدَادِ. وَمِنْ نَاحِيَةٍ أُخْرَى، يُؤَدِّي الضَّغْطُ الزَّائِدُ إِلَى ضَعْفِ التَّرْكِيزِ وَالذَّاكِرَةِ، مِمَّا يَجْعَلُ الطَّالِبَ يَخْسَرُ مَا تَعِبَ مِنْ أَجْلِهِ.
وَقَدْ رَأَيْتُ ذٰلِكَ فِي صَدِيقِي، الَّذِي كَانَ مِنْ أَذْكَى طُلَّابِ الصَّفِّ، لٰكِنَّهُ كَانَ يَخَافُ مِنَ الامْتِحَانَاتِ خَوْفًا شَدِيدًا. وَعِنْدَمَا شَارَكَ فِي بَرْنَامَجِ المَدْرَسَةِ لِلدَّعْمِ النَّفْسِيِّ، وَتَعَلَّمَ تَمَارِينَ التَّنَفُّسِ وَتَنْظِيمَ الوَقْتِ، تَحَسَّنَتْ نَتَائِجُهُ بِشَكْلٍ مُدْهِشٍ، وَعَادَتْ إِلَيْهِ ثِقَتُهُ بِنَفْسِهِ.
صَحِيحٌ أَنَّ الامْتِحَانَاتِ جُزْءٌ مِنْ حَيَاةِ كُلِّ طَالِبٍ، غَيْرَ أَنَّ المَدَارِسَ وَالأُسَرَ مَسْؤُولَةٌ عَنْ تَخْفِيفِ ضَغْطِهَا. وَإِذَا تَعَلَّمَ الطُّلَّابُ أَنَّ الدَّرَجَةَ لَا تُحَدِّدُ قِيمَتَهُمْ، فَسَيَدْخُلُونَ الامْتِحَانَ بِثِقَةٍ أَكْبَرَ وَخَوْفٍ أَقَلَّ، وَسَيُحَقِّقُونَ نَتَائِجَ أَفْضَلَ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a revision-planner form, write an email giving a friend exam advice, and write an extended piece about how you learnt to revise or about exam stress.',
  lift: [
    { ar: 'إِنَّ تَنْظِيمَ الوَقْتِ أَهَمُّ مِنْ عَدَدِ السَّاعَاتِ', en: 'organising time matters more than the number of hours' },
    { ar: 'كَانَتِ الأَسْئِلَةُ أَصْعَبَ مِمَّا تَوَقَّعْتُ', en: 'the questions were harder than I expected' },
    { ar: 'يَنْبَغِي أَنْ تَبْدَأَ مُبَكِّرًا، وَلَا تَسْهَرْ', en: 'you should start early, and don’t stay up late' },
  ],
  checkTip: 'Check: kāna / kānat + accusative (kāna ṣaʿban, kānat jayyidatan); inna + accusative (inna at-tanẓīma …); yanbaghī an / allā + subjunctive (fatḥa); lā + jussive (sukūn) for “don’t”.',
  FORM: {
    title: 'Revision-planner form', ar: 'اسْتِمَارَةُ خُطَّةِ المُرَاجَعَةِ',
    fields: [
      { core: true, ar: 'الاسْمُ وَالصَّفُّ', en: 'Name and class', model: 'يَاسِرُ عَلِيٌّ، الحَادِي عَشَرَ', modelEn: 'Yasser Ali, Year 11' },
      { core: true, ar: 'المَادَّةُ', en: 'Subject', model: 'الكِيمْيَاءُ', modelEn: 'chemistry' },
      { core: true, ar: 'تَارِيخُ الامْتِحَانِ', en: 'Exam date', model: '١٢ مَايُو', modelEn: '12 May' },
      { core: true, ar: 'مَكَانُ المُرَاجَعَةِ', en: 'Where you revise', model: 'المَكْتَبَةُ', modelEn: 'the library' },
      { core: true, ar: 'عَدَدُ السَّاعَاتِ أُسْبُوعِيًّا', en: 'Hours per week', model: 'عَشْرُ سَاعَاتٍ', modelEn: 'ten hours' },
      { core: true, ar: 'طَرِيقَةُ المُرَاجَعَةِ', en: 'Revision method', model: 'المُلَخَّصَاتُ وَالامْتِحَانَاتُ السَّابِقَةُ', modelEn: 'summaries and past papers' },
      { ar: 'أَكْبَرُ صُعُوبَةٍ', en: 'Biggest difficulty', model: 'التَّرْكِيزُ لِمُدَّةٍ طَوِيلَةٍ', modelEn: 'concentrating for a long time' },
      { ar: 'جُمْلَةٌ: مَاذَا سَتُغَيِّرُ هٰذِهِ المَرَّةَ؟', en: 'ONE sentence: what you will change this time', model: 'سَأَبْدَأُ المُرَاجَعَةَ قَبْلَ شَهْرٍ، وَلَنْ أَسْهَرَ قَبْلَ الامْتِحَانِ.', modelEn: 'I’ll start revising a month ahead, and I won’t stay up before the exam.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with sa- and lan + subjunctive.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Boxes 6–7: verbal nouns (al-murājaʿa, at-tarkīz). Box 8: lan asshara (lan + subjunctive).',
  },
  Q2: {
    short: 'an email with exam advice', title: 'Question 2: advice before the exams', ar: 'نَصَائِحُ قَبْلَ الامْتِحَانَاتِ',
    task: 'Your friend is worried about the exams. Write an email in Arabic of about 80–90 words. You must include: • how and when you revise • something that happened in a recent test • your opinion about the best way to prepare • advice for your friend and your plans after the exams.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'A verbal noun and advice (yanbaghī an / lā + jussive).', 'kāna in the past AND a future sentence.', 'About 80–90 words.'],
    phrases: [['أُرَاجِعُ فِي … مِنَ السَّاعَةِ … إِلَى …', 'I revise in … from … to …'], ['كَانَ الاخْتِبَارُ صَعْبًا، لِأَنِّي …', 'the test was hard, because I …'], ['إِنَّ تَنْظِيمَ الوَقْتِ مُهِمٌّ', 'organising time is important'], ['يَنْبَغِي أَنْ تَبْدَأَ … وَلَا تَسْهَرْ', 'you should start … and don’t stay up']],
    rubric: [
      ['task', 'صَدِيقُكَ قَلِقٌ مِنَ الامْتِحَانَاتِ. اكْتُبْ لَهُ رِسَالَةً (٨٠–٩٠ كَلِمَةً).', 'Your friend is worried about exams: write to him (80–90 words).'],
      ['1', 'كَيْفَ وَمَتَى تُرَاجِعُ؟', 'How and when you revise'],
      ['2', 'مَاذَا حَدَثَ فِي اخْتِبَارٍ مُؤَخَّرًا؟', 'What happened in a recent test'],
      ['3', 'مَا أَفْضَلُ طَرِيقَةٍ لِلِاسْتِعْدَادِ فِي رَأْيِكَ؟', 'Your opinion on the best way to prepare'],
      ['4', 'مَا نَصِيحَتُكَ؟ وَمَاذَا سَتَفْعَلُ بَعْدَ الامْتِحَانَاتِ؟', 'Your advice; your plans after the exams'],
    ],
    qwords: 'كَيْفَ (how) · مَتَى (when) · مَاذَا حَدَثَ (what happened — PAST) · نَصِيحَتُكَ (your advice) · سَتَفْعَلُ (will do — FUTURE)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', 'Hello …, how are you?'],
      ['1', 'أُرَاجِعُ فِي ______ مِنَ السَّاعَةِ ______ إِلَى ______ ، وَأَكْتُبُ ______ .', 'I revise in … from … to …, and write …'],
      ['2', 'فِي الأُسْبُوعِ المَاضِي كَانَ عِنْدِي اخْتِبَارٌ فِي ______ ، وَكَانَ ______ .', 'Last week I had a test in …, and it was …'],
      ['3', 'فِي رَأْيِي، إِنَّ ______ مُهِمٌّ جِدًّا.', 'In my opinion, … is very important.'],
      ['4', 'يَنْبَغِي أَنْ ______ ، وَلَا ______ . بَعْدَ الامْتِحَانَاتِ سَأُسَافِرُ إِلَى ______ .', 'You should …, and don’t … After the exams I’ll travel to …'],
      ['end', 'إِلَى اللِّقَاءِ، ______', 'See you, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Sami, how are you? I have important exams in two weeks, so I revise every day — in the library from four to six, writing summaries and mind maps. Last week I had a chemistry test, and it was hard, because I didn’t revise well. In my opinion organising your time is very important. My advice: you should start early, and don’t stay up before the exam. After the exams I’ll go to the seaside with my family. See you, Yasser.”',
      find: ['أُرَاجِعُ فِي المَكْتَبَةِ', 'وَكَانَ صَعْبًا', 'إِنَّ تَنْظِيمَ الوَقْتِ', 'وَلَا تَسْهَرْ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Sami, my final exams start in two weeks, and I’ve set myself a strict plan: revising in the library daily from four to seven and turning every lesson into a colourful mind map. I learnt this the hard way: in the chemistry mock the questions were harder than I expected, because I left revision until the last night. In my view organisation matters more than the number of hours, so I advise you to start early and never sacrifice sleep. If I pass as I hope, I’ll celebrate with a trip to the sea with my family. Wishing you success, Yasser.”',
      find: ['وَضَعْتُ لِنَفْسِي', 'أَصْعَبَ مِمَّا تَوَقَّعْتُ', 'إِنَّ التَّنْظِيمَ', 'وَأَلَّا تُضَحِّيَ'],
    },
  },
  Q3: {
    a: { title: 'كَيْفَ تَعَلَّمْتُ أَنْ أُرَاجِعَ', en: 'How I learnt to revise', bullets: 'طَرِيقَتُكَ فِي المُرَاجَعَةِ · تَنْظِيمُ الوَقْتِ · امْتِحَانٌ لَا تَنْسَاهُ · نَصَائِحُكَ وَخِطَطُكَ', bulletsEn: 'Your revision method · organising your time · an exam you won’t forget · your advice and plans' },
    b: { title: 'ضَغْطُ الامْتِحَانَاتِ: ثَمَنٌ لِلنَّجَاحِ؟', en: 'Exam stress: the price of success?', bullets: 'المُشْكِلَةُ · فَوَائِدُ القَلَقِ وَأَضْرَارُهُ · مِثَالٌ مِنَ الوَاقِعِ · رَأْيُكَ وَالحَلُّ', bulletsEn: 'The problem · benefits and harms of anxiety · a real example · your opinion and the solution' },
    plan: [
      'Your method — urājiʿu fī …, uqhliqu hātifī li-kay urakkiza; mulakhkhaṣāt (non-human pl.).',
      'Time — inna tanẓīma al-waqti muhimm; a weekly routine with numbers.',
      'Past exam — kāna ṣaʿban, sahirtu …, fa-kuntu taʿbān, kānat darajatī ḍaʿīfa.',
      'Advice + future — yanbaghī an …, sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'أُغْلِقُ هَاتِفِي لِكَيْ أُرَكِّزَ أَكْثَرَ.', en: 'present: I switch off my phone so that I concentrate more.' },
      { ar: 'كَانَ الامْتِحَانُ صَعْبًا، وَكَانَتْ دَرَجَتِي ضَعِيفَةً.', en: 'past: the exam was hard, and my mark was weak.' },
      { ar: 'سَأُرَاجِعُ بِطَرِيقَةٍ أَفْضَلَ.', en: 'future: I will revise in a better way.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'I’m in Year 11 with important exams, so I revise every day after school, in my room with my phone off to focus; I write short summaries and do lots of past papers → organising time matters: two subjects a day, a short break every half hour; on Fridays I play football instead → last year’s physics exam was very hard: I stayed up till 2 a.m., was tired in the exam and forgot a lot; my mark was weak and I was very upset → students should start revising early and sleep well; I’ll revise better and, God willing, get high marks.', find: ['لِكَيْ أُرَكِّزَ', 'إِنَّ تَنْظِيمَ الوَقْتِ', 'وَكَانَ صَعْبًا جِدًّا', 'يَنْبَغِي أَنْ يَبْدَأَ'], notes: 'Core model: li-kay + subjunctive, inna + accusative, a routine with lā … bal, kāna / kānat + accusative, fa- result, yanbaghī an … wa-an (plural subjunctive).' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'I used to think exam success depended on hours in front of books — until I learnt a harsh lesson in Year 10, one that changed how I study for ever → before the physics mock I stayed up three nights in a row reading and re-reading, and walked in so tired that I forgot laws I knew well; the result was my worst mark ever, and I left school that day heartbroken → so I changed completely: short spaced sessions, testing myself instead of re-reading, and explaining lessons to my little sister, because explaining clearly shows what I haven’t yet understood well; above all, I now sleep a full eight hours however great the pressure → effort is essential, but using it smartly makes the difference; “if I’d known this earlier, I’d have saved myself a lot of worry and wasted nights”.', find: ['كُنْتُ أَظُنُّ أَنَّ', 'إِلَى دَرَجَةِ أَنِّي', 'بَدَلًا مِنْ إِعَادَةِ', 'لَوْ عَرَفْتُ … لَوَفَّرْتُ'], notes: 'Full-mark model: kuntu aẓunnu anna … ilā an, a ḥāl clause (aqraʾu wa-uʿīdu), ilā darajati annī, a superlative + relative, verbal nouns (badalan min iʿādat al-qirāʾa), mahmā, a concession and a past law … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'the price of success?', text: Q3B_FULL, en: 'Many students live under huge pressure at exam time, some even losing the ability to sleep or eat — is this pressure a necessary price, or can we avoid it? → a little anxiety helps, pushing us to revise and prepare; too much weakens concentration and memory, so the student loses what they worked for → I saw this in a friend, one of the brightest in class but terrified of exams; after joining the school wellbeing programme and learning breathing exercises and time management, his results improved remarkably and his self-confidence returned → exams are part of every student’s life, but schools and families must ease the pressure; “if students learn that a grade doesn’t define their worth, they’ll enter exams with more confidence and less fear, and achieve better results”.', find: ['حَتَّى إِنَّ بَعْضَهُمْ', 'إِنَّ قَلِيلًا مِنَ القَلَقِ', 'مِمَّا يَجْعَلُ', 'إِذَا تَعَلَّمَ … فَسَيَدْخُلُونَ'], notes: 'Full-mark model for the Stretch title: ḥattā inna, a rhetorical question, inna in a balanced view, verbal nouns, mimmā, a relative + kāna + cognate accusative (khawfan shadīdan), a concession and idhā … fa-sa-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; verbal nouns in boxes 6–7.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: kāna + accusative for the test, and advice with yanbaghī an / lā + jussive.' },
    { route: 'develop', text: 'Q3: four paragraphs with inna and verbal nouns.' },
    { route: 'stretch', text: 'Q3: a turning point, a concession and a conditional.' },
  ],
};
write.Q3.plan[0] = 'Your method — urājiʿu fī …, ughliqu hātifī li-kay urakkiza; mulakhkhaṣāt (non-human pl.).';

module.exports = { speak, write };
