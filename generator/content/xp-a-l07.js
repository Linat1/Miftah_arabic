'use strict';
/* Exam-practice data · AT-A-L07 · Body Parts and Health Problems (possessive suffixes; عِنْدَ; symptoms and duration). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { n: 7, short: 'Body and Health Problems', arShort: 'الجِسْمُ وَالمَشَاكِلُ الصِّحِّيَّةُ', fileTitle: 'Body_Parts_and_Health_Problems', title: 'Body Parts and Health Problems', ar: 'أَعْضَاءُ الجِسْمِ وَالمَشَاكِلُ الصِّحِّيَّةُ', icon: 'FaKitMedical', grammar: 'possessive suffixes; عِنْدِي; symptoms and duration (مُنْذُ)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: say what hurts (yuʾlimunī ra’sī), describe symptoms with ʿindī, say how long (mundhu) and talk about being ill in the past.',
  words: [
    w(1, 'رَأْسٌ', 'head', [['my', 'رَأْسِي'], ['his', 'رَأْسُهُ'], ['her', 'رَأْسُهَا']], { tag: 'possessive suffixes' }),
    w(2, 'بَطْنٌ', 'stomach, tummy', [['my', 'بَطْنِي'], ['his', 'بَطْنُهُ'], ['her', 'بَطْنُهَا']]),
    w(3, 'ظَهْرٌ', 'back', [['my', 'ظَهْرِي'], ['his', 'ظَهْرُهُ'], ['her', 'ظَهْرُهَا']]),
    w(4, 'يَدٌ · رِجْلٌ', 'hand · leg', [['pl.', 'أَيْدٍ · أَرْجُلٌ'], ['my', 'يَدِي · رِجْلِي']]),
    w(5, 'يُؤْلِمُنِي …', '… hurts me (masc. body part)', [['m.', 'يُؤْلِمُنِي رَأْسِي'], ['f.', 'تُؤْلِمُنِي يَدِي']], { tag: 'it hurts' }),
    w(6, 'عِنْدِي …', 'I have … (a symptom)', [['you m.', 'عِنْدَكَ'], ['you f.', 'عِنْدَكِ'], ['he · she', 'عِنْدَهُ · عِنْدَهَا']]),
    w(7, 'صُدَاعٌ', 'a headache', null, { tag: 'symptom' }),
    w(8, 'حُمَّى · زُكَامٌ · سُعَالٌ', 'a fever · a cold · a cough', null, { tag: 'symptoms' }),
    w(9, 'مَرِيضٌ', 'ill, sick', [['m.', 'مَرِيضٌ'], ['f.', 'مَرِيضَةٌ'], ['pl.', 'مَرْضَى']]),
    w(10, 'مُتْعَبٌ', 'tired', [['m.', 'مُتْعَبٌ'], ['f.', 'مُتْعَبَةٌ'], ['pl.', 'مُتْعَبُونَ']]),
    w(11, 'مُنْذُ …', 'since, for (+ time)', null, { tag: 'duration' }),
    w(12, 'أَشْعُرُ بِالتَّعَبِ', 'I feel tired', [['he', 'يَشْعُرُ'], ['she', 'تَشْعُرُ'], ['they', 'يَشْعُرُونَ']]),
  ],
  words1: { eyebrow: 'Language bank · body parts with my · his · her', title: 'Where does it hurt?', ar: 'أَيْنَ الأَلَمُ؟', notes: 'LANGUAGE BANK (2 min) — possessive suffixes: -ī (my), -hu (his), -hā (her). The verb agrees with the body part: يُؤْلِمُنِي رَأْسِي (m.) · تُؤْلِمُنِي يَدِي (f. — hands, legs, eyes and ears are feminine).' },
  words2: { eyebrow: 'Language bank · symptoms (m. · f. · pl.)', title: 'Symptoms — and for how long', ar: 'الأَعْرَاضُ', notes: 'LANGUAGE BANK (2 min) — عِنْدِي + symptom: عِنْدِي صُدَاعٌ وَحُمَّى. Duration: مُنْذُ يَوْمَيْنِ (for two days) · مُنْذُ ثَلَاثَةِ أَيَّامٍ · مُنْذُ أُسْبُوعٍ. Plural of مَرِيضٌ is مَرْضَى.' },
  checkCore: 'said what hurts and named a symptom with ʿindī',
  checkDevelop: 'gave a duration with mundhu and described how it started (past)',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'calling school', title: 'Role play A — Phoning school: I am ill', ar: 'أَتَّصِلُ بِالمَدْرَسَةِ', you: 'a student who is ill', them: 'the school secretary',
      tasks: [
        { core: true, ex: 'مَدْرَسَةُ النُّورِ، صَبَاحُ الخَيْرِ. مَنْ مَعِي؟', task: 'Give your name and class.', help: 'أَنَا … فِي الصَّفِّ …', model: 'صَبَاحُ النُّورِ، أَنَا سَامِي فِي الصَّفِّ العَاشِرِ.', modelEn: 'Good morning, I am Sami in Year 10.' },
        { core: true, ex: 'مَا المُشْكِلَةُ؟', task: 'Say that you are ill and cannot come.', help: 'أَنَا مَرِيضٌ وَلَا أَسْتَطِيعُ …', model: 'أَنَا مَرِيضٌ اليَوْمَ، وَلَا أَسْتَطِيعُ أَنْ آتِيَ إِلَى المَدْرَسَةِ.', modelEn: 'I am ill today and I cannot come to school.' },
        { core: true, ex: 'مَاذَا يُؤْلِمُكَ؟', task: 'Say what hurts.', help: 'يُؤْلِمُنِي …', model: 'يُؤْلِمُنِي رَأْسِي وَبَطْنِي كَثِيرًا.', modelEn: 'My head and my stomach hurt a lot.' },
        { core: true, ex: 'هَلْ عِنْدَكَ حُمَّى؟', task: 'Say which symptoms you have.', help: 'نَعَمْ، عِنْدِي … وَ…', model: 'نَعَمْ، عِنْدِي حُمَّى وَسُعَالٌ أَيْضًا.', modelEn: 'Yes, I have a fever and a cough too.' },
        { core: true, unexpected: true, ex: 'مُنْذُ مَتَى أَنْتَ مَرِيضٌ؟', task: 'Answer the unexpected question.', help: 'مُنْذُ …', model: 'مُنْذُ أَمْسِ فِي المَسَاءِ.', modelEn: 'Since yesterday evening.' },
      ],
      girl: 'مَنْ مَعِي؟ — أَنَا مَرِيضَةٌ · يُؤْلِمُكِ · عِنْدَكِ · أَنْتِ مَرِيضَةٌ',
      notes: 'Core: name, ill, what hurts, symptoms, how long. يُؤْلِمُنِي رَأْسِي وَبَطْنِي — one masculine verb for two masculine body parts.',
    },
    {
      id: 'B', level: 'Core+', setting: 'at the school nurse', title: 'Role play B — At the school nurse after PE', ar: 'بَعْدَ دَرْسِ الرِّيَاضَةِ', you: 'a student hurt in PE', them: 'the school nurse',
      tasks: [
        { core: true, ex: 'مَاذَا حَدَثَ لَكَ؟', task: 'Say what happened (past).', help: 'وَقَعْتُ فِي …', model: 'وَقَعْتُ فِي المَلْعَبِ أَثْنَاءَ المُبَارَاةِ.', modelEn: 'I fell on the pitch during the match.' },
        { core: true, ex: 'أَيْنَ الأَلَمُ؟', task: 'Say where it hurts (feminine body part).', help: 'تُؤْلِمُنِي …', model: 'تُؤْلِمُنِي رِجْلِي اليُسْرَى، وَيَدِي أَيْضًا.', modelEn: 'My left leg hurts, and my hand too.' },
        { ex: 'هَلْ تَسْتَطِيعُ أَنْ تَمْشِيَ؟', task: 'Say how well you can walk.', help: 'أَسْتَطِيعُ … لٰكِنْ …', model: 'أَسْتَطِيعُ أَنْ أَمْشِيَ، لٰكِنْ بِبُطْءٍ، لِأَنَّ الأَلَمَ شَدِيدٌ.', modelEn: 'I can walk, but slowly, because the pain is bad.' },
        { ex: '… سَأَضَعُ الثَّلْجَ عَلَى رِجْلِكَ.', task: 'ASK if you should go home (the nurse then answers).', help: 'هَلْ يَجِبُ أَنْ …؟', model: 'هَلْ يَجِبُ أَنْ أَرْجِعَ إِلَى البَيْتِ؟', modelEn: 'Should I go back home?' },
        { unexpected: true, ex: 'هَلْ تُرِيدُ أَنْ أَتَّصِلَ بِأُسْرَتِكَ؟', task: 'Answer the unexpected question.', help: 'نَعَمْ، مِنْ فَضْلِكِ، اتَّصِلِي بِأُمِّي …', model: 'نَعَمْ، مِنْ فَضْلِكِ، اتَّصِلِي بِأُمِّي، رَقْمُهَا فِي دَفْتَرِي.', modelEn: 'Yes please, call my mum; her number is in my notebook.' },
      ],
      girl: 'حَدَثَ لَكِ · تَسْتَطِيعِينَ أَنْ تَمْشِي · رِجْلِكِ · تُرِيدِينَ · أُسْرَتِكِ',
      notes: 'Task 2: رِجْل and يَد are feminine → تُؤْلِمُنِي. Task 4: the CANDIDATE asks. Task 5: the nurse is a woman → اتَّصِلِي (imperative, f.).',
    },
    {
      id: 'C', level: 'Develop', setting: 'phoning a friend', title: 'Role play C — Your friend missed the trip', ar: 'صَدِيقِي المَرِيضُ', you: 'a student phoning a sick friend', them: 'your friend who is ill at home',
      tasks: [
        { ex: 'أَهْلًا! أَنَا فِي السَّرِيرِ مُنْذُ يَوْمَيْنِ.', task: 'Ask what is wrong, and show sympathy.', help: 'سَلَامَتُكَ! مَاذَا …؟', model: 'سَلَامَتُكَ يَا صَدِيقِي! مَاذَا عِنْدَكَ بِالضَّبْطِ؟', modelEn: 'Get well soon, my friend! What exactly do you have?' },
        { ex: 'عِنْدِي زُكَامٌ شَدِيدٌ. وَكَيْفَ كَانَتِ الرِّحْلَةُ؟', task: 'Describe the trip in two past sentences.', help: 'ذَهَبْنَا إِلَى … وَكَانَتْ …', model: 'ذَهَبْنَا إِلَى المُتْحَفِ، وَكَانَتِ الرِّحْلَةُ رَائِعَةً، لٰكِنَّنَا افْتَقَدْنَاكَ كَثِيرًا.', modelEn: 'We went to the museum and the trip was great, but we missed you a lot.' },
        { ex: 'هَلْ عِنْدَكَ نَصِيحَةٌ لِي؟', task: 'Give two pieces of advice.', help: 'يَجِبُ أَنْ … وَ…', model: 'يَجِبُ أَنْ تَشْرَبَ سَوَائِلَ دَافِئَةً، وَأَنْ تَرْتَاحَ كَثِيرًا.', modelEn: 'You must drink warm drinks and rest a lot.' },
        { ex: '… الطَّبِيبُ قَالَ أُسْبُوعًا!', task: 'ASK when he will come back to school.', help: 'مَتَى …؟', model: 'إِذَنْ، مَتَى سَتَرْجِعُ إِلَى المَدْرَسَةِ؟', modelEn: 'So when will you come back to school?' },
        { unexpected: true, ex: 'هَلْ تُرْسِلُ لِي الوَاجِبَ؟', task: 'Answer the unexpected question.', help: 'طَبْعًا، سَأُرْسِلُ …', model: 'طَبْعًا، سَأُرْسِلُ لَكَ الوَاجِبَ وَصُوَرَ الرِّحْلَةِ اللَّيْلَةَ.', modelEn: 'Of course, I will send you the homework and the trip photos tonight.' },
      ],
      girl: 'to a girl: سَلَامَتُكِ يَا صَدِيقَتِي · عِنْدَكِ · افْتَقَدْنَاكِ · تَشْرَبِي · تَرْتَاحِي · سَتَرْجِعِينَ',
      notes: 'Develop: sympathy (سَلَامَتُكَ), two past sentences, advice with أَنْ + verb in -a, a question and the future (sa-).',
    },
    {
      id: 'D', level: 'Stretch', setting: 'at the clinic', title: 'Role play D — Describing an illness in detail', ar: 'فِي العِيَادَةِ', you: 'a patient', them: 'the doctor',
      tasks: [
        { ex: 'مَتَى بَدَأَتِ الأَعْرَاضُ؟ وَكَيْفَ؟', task: 'Say when and how it started (past).', help: 'بَدَأَتْ قَبْلَ … عِنْدَمَا …', model: 'بَدَأَتْ قَبْلَ ثَلَاثَةِ أَيَّامٍ، عِنْدَمَا رَجَعْتُ مِنَ المُبَارَاةِ مُبْتَلًّا بِالمَطَرِ.', modelEn: 'They started three days ago, when I came back from the match soaked by the rain.' },
        { ex: 'صِفْ لِي الأَلَمَ.', task: 'Describe the symptoms in detail.', help: 'عِنْدِي … وَيَزْدَادُ … عِنْدَمَا …', model: 'عِنْدِي صُدَاعٌ وَسُعَالٌ، وَيَزْدَادُ السُّعَالُ فِي اللَّيْلِ، فَلَا أَسْتَطِيعُ أَنْ أَنَامَ.', modelEn: 'I have a headache and a cough, and the cough gets worse at night, so I can’t sleep.' },
        { ex: 'هَلْ أَخَذْتَ أَيَّ دَوَاءٍ؟', task: 'Say what you tried and whether it helped.', help: 'أَخَذْتُ … لٰكِنَّهُ لَمْ …', model: 'أَخَذْتُ دَوَاءً لِلصُّدَاعِ، لٰكِنَّهُ لَمْ يُسَاعِدْنِي كَثِيرًا.', modelEn: 'I took a headache tablet, but it did not help me much.' },
        { ex: 'هَلْ حَدَثَ هٰذَا مِنْ قَبْلُ؟', task: 'Compare with a past illness.', help: 'نَعَمْ، فِي … لٰكِنْ هٰذِهِ المَرَّةَ …', model: 'نَعَمْ، فِي الشِّتَاءِ المَاضِي، لٰكِنَّ الأَعْرَاضَ هٰذِهِ المَرَّةَ أَشَدُّ وَأَطْوَلُ.', modelEn: 'Yes, last winter, but this time the symptoms are worse and longer.' },
        { unexpected: true, ex: 'لَوْ أَعْطَيْتُكَ إِجَازَةً أُسْبُوعًا، مَاذَا سَتَفْعَلُ؟', task: 'Answer the unexpected question (rest + school work).', help: 'سَأَرْتَاحُ … لٰكِنْ يَجِبُ أَنْ …', model: 'سَأَرْتَاحُ فِي البَيْتِ، لٰكِنْ يَجِبُ أَنْ أُرَاجِعَ دُرُوسِي، لِأَنَّ الامْتِحَانَاتِ قَرِيبَةٌ.', modelEn: 'I will rest at home, but I must revise, because the exams are close.' },
      ],
      girl: 'أَخَذْتِ · رَجَعْتُ مُبْتَلَّةً · أَعْطَيْتُكِ · سَتَفْعَلِينَ',
      notes: 'Stretch: qabla + time (ago), ʿindamā, a cause and result (fa-), lam + jussive (lam yusāʿidnī), a comparative and a reason.',
      modelFoot: 'Stretch: past narrative with ʿindamā, fa- result, lam + jussive, a comparison and li-anna.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'صِحَّتِي', aim: 'one full sentence per question',
      qs: [
        { q: 'كَيْفَ صِحَّتُكَ اليَوْمَ؟', en: 'How is your health today?', start: 'صِحَّتِي … الحَمْدُ لِلّٰهِ', model: 'صِحَّتِي جَيِّدَةٌ اليَوْمَ، وَالحَمْدُ لِلّٰهِ.', modelEn: 'My health is good today, thank God.' },
        { q: 'مَتَى كُنْتَ مَرِيضًا آخِرَ مَرَّةٍ؟', en: 'When were you last ill?', start: 'كُنْتُ مَرِيضًا فِي …', model: 'كُنْتُ مَرِيضًا فِي الشَّهْرِ المَاضِي، وَكَانَ عِنْدِي زُكَامٌ.', modelEn: 'I was ill last month; I had a cold.' },
        { q: 'مَاذَا تَفْعَلُ عِنْدَمَا يُؤْلِمُكَ رَأْسُكَ؟', en: 'What do you do when you have a headache?', start: 'عِنْدَمَا يُؤْلِمُنِي رَأْسِي، …', model: 'عِنْدَمَا يُؤْلِمُنِي رَأْسِي، أَشْرَبُ المَاءَ وَأَنَامُ قَلِيلًا.', modelEn: 'When my head hurts, I drink water and sleep a little.' },
        { q: 'هَلْ تَذْهَبُ إِلَى الطَّبِيبِ كَثِيرًا؟', en: 'Do you go to the doctor often?', start: 'لَا، أَذْهَبُ … فَقَطْ', model: 'لَا، أَذْهَبُ إِلَى الطَّبِيبِ مَرَّةً فِي السَّنَةِ فَقَطْ.', modelEn: 'No, I only go to the doctor once a year.' },
        { q: 'مَنْ يَعْتَنِي بِكَ عِنْدَمَا تَمْرَضُ؟', en: 'Who looks after you when you are ill?', start: 'يَعْتَنِي بِي … / تَعْتَنِي بِي …', model: 'تَعْتَنِي بِي أُمِّي، وَتَطْبُخُ لِي الشُّورْبَةَ.', modelEn: 'My mum looks after me and makes me soup.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a symptom or a time phrase = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'تَجْرِبَتِي مَعَ المَرَضِ', aim: 'two or three sentences, with a past narrative and a duration',
      qs: [
        { q: 'صِفْ آخِرَ مَرَّةٍ كُنْتَ فِيهَا مَرِيضًا.', en: 'Describe the last time you were ill.', start: 'فِي … كَانَ عِنْدِي … وَبَقِيتُ …', model: 'فِي الشِّتَاءِ كَانَ عِنْدِي حُمَّى وَسُعَالٌ، وَبَقِيتُ فِي البَيْتِ ثَلَاثَةَ أَيَّامٍ.', modelEn: 'In winter I had a fever and a cough, and I stayed at home for three days.' },
        { q: 'هَلْ جُرِحْتَ فِي الرِّيَاضَةِ مِنْ قَبْلُ؟', en: 'Have you ever been injured in sport?', start: 'نَعَمْ، مَرَّةً وَقَعْتُ … فَآلَمَتْنِي …', model: 'نَعَمْ، مَرَّةً وَقَعْتُ فِي مُبَارَاةِ كُرَةِ القَدَمِ، فَآلَمَتْنِي رِجْلِي أُسْبُوعَيْنِ.', modelEn: 'Yes, once I fell in a football match, so my leg hurt for two weeks.' },
        { q: 'مَاذَا يَجِبُ أَنْ يَفْعَلَ الطَّالِبُ المَرِيضُ؟', en: 'What should an ill student do?', start: 'يَجِبُ أَنْ … وَأَلَّا …', model: 'يَجِبُ أَنْ يَبْقَى فِي البَيْتِ وَيَرْتَاحَ، وَأَلَّا يَأْتِيَ إِلَى المَدْرَسَةِ حَتَّى لَا يُعْدِيَ زُمَلَاءَهُ.', modelEn: 'He must stay at home and rest, and not come to school so that he doesn’t infect his classmates.' },
        { q: 'مَا الأَمْرَاضُ الشَّائِعَةُ فِي الشِّتَاءِ؟', en: 'What illnesses are common in winter?', start: 'فِي الشِّتَاءِ يُصَابُ النَّاسُ بِالزُّكَامِ …', model: 'فِي الشِّتَاءِ يُصَابُ كَثِيرٌ مِنَ النَّاسِ بِالزُّكَامِ وَالسُّعَالِ، لِأَنَّ الجَوَّ بَارِدٌ.', modelEn: 'In winter many people catch colds and coughs, because the weather is cold.' },
        { q: 'كَيْفَ تَشْعُرُ عِنْدَمَا تَكُونُ مَرِيضًا؟', en: 'How do you feel when you are ill?', start: 'أَشْعُرُ بِالتَّعَبِ … وَلَا أَسْتَطِيعُ …', model: 'أَشْعُرُ بِالتَّعَبِ وَالمَلَلِ، وَلَا أَسْتَطِيعُ أَنْ أُرَكِّزَ عَلَى أَيِّ شَيْءٍ.', modelEn: 'I feel tired and bored, and I can’t concentrate on anything.' },
      ],
      foot: 'Develop: two or three sentences — a past narrative, a duration (three days, two weeks) and a reason.',
      modelFoot: 'Symptoms + past + how long + a reason or advice = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الصِّحَّةُ وَالوِقَايَةُ', aim: 'a developed answer: opinion, comparison, concession and a conditional',
      qs: [
        { q: 'هَلِ الوِقَايَةُ أَهَمُّ مِنَ العِلَاجِ؟', en: 'Is prevention more important than cure?', start: 'أَعْتَقِدُ أَنَّ الوِقَايَةَ … لِأَنَّ …', model: 'أَعْتَقِدُ أَنَّ الوِقَايَةَ أَهَمُّ، لِأَنَّ غَسْلَ اليَدَيْنِ وَالنَّوْمَ الجَيِّدَ يَحْمِيَانِنَا مِنْ أَمْرَاضٍ كَثِيرَةٍ.', modelEn: 'I think prevention is more important, because washing our hands and good sleep protect us from many illnesses.' },
        { q: 'هَلْ يَذْهَبُ الطُّلَّابُ إِلَى المَدْرَسَةِ وَهُمْ مَرْضَى؟ لِمَاذَا؟', en: 'Do students go to school while ill? Why?', start: 'نَعَمْ، بَعْضُهُمْ … خَوْفًا مِنْ …', model: 'نَعَمْ، بَعْضُهُمْ يَأْتُونَ وَهُمْ مَرْضَى خَوْفًا مِنْ أَنْ تَفُوتَهُمُ الدُّرُوسُ، وَهٰذَا يَنْشُرُ المَرَضَ.', modelEn: 'Yes, some come while ill for fear of missing lessons, and this spreads the illness.' },
        { q: 'كَيْفَ تَغَيَّرَ اهْتِمَامُ النَّاسِ بِالصِّحَّةِ؟', en: 'How has people’s attention to health changed?', start: 'فِي المَاضِي كَانَ … أَمَّا الآنَ فَيَبْحَثُونَ …', model: 'فِي المَاضِي كَانَ النَّاسُ يَذْهَبُونَ إِلَى الطَّبِيبِ مُتَأَخِّرِينَ، أَمَّا الآنَ فَيَبْحَثُونَ عَنِ الأَعْرَاضِ فِي الإِنْتَرْنِتِ أَوَّلًا.', modelEn: 'In the past people went to the doctor late; now they look up their symptoms online first.' },
        { q: 'هَلِ البَحْثُ عَنِ الأَعْرَاضِ فِي الإِنْتَرْنِتِ مُفِيدٌ؟', en: 'Is looking up symptoms online useful?', start: 'صَحِيحٌ أَنَّهُ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهُ سَرِيعٌ وَسَهْلٌ، غَيْرَ أَنَّ المَعْلُومَاتِ أَحْيَانًا خَاطِئَةٌ وَتُخِيفُ المَرِيضَ بِلَا سَبَبٍ.', modelEn: 'It is true that it is quick and easy, but the information is sometimes wrong and frightens the patient for no reason.' },
        { q: 'لَوْ كُنْتَ طَبِيبًا، مَاذَا تَنْصَحُ الشَّبَابَ؟', en: 'If you were a doctor, what would you advise young people?', start: 'لَوْ كُنْتُ طَبِيبًا، لَنَصَحْتُهُمْ بِأَنْ …', model: 'لَوْ كُنْتُ طَبِيبًا، لَنَصَحْتُهُمْ بِأَنْ يَنَامُوا جَيِّدًا، وَأَنْ يَتْرُكُوا الهَاتِفَ سَاعَةً قَبْلَ النَّوْمِ.', modelEn: 'If I were a doctor, I would advise them to sleep well and to put their phone down an hour before bed.' },
      ],
      foot: 'Stretch: a comparative, a reason with khawfan min, past vs present, a concession and a conditional.',
      modelFoot: 'Stretch: ahamm, wa-hum marḍā (while ill), kāna + present, ṣaḥīḥun anna … ghayra anna, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I said what hurts with yuʾlimunī / tuʾlimunī.' },
    { route: 'core', text: 'I named my symptoms with ʿindī.' },
    { route: 'develop', text: 'I said how long with mundhu or a number of days.' },
    { route: 'develop', text: 'I told a past story about being ill or injured.' },
    { route: 'stretch', text: 'I used a comparison, a concession or a conditional.' },
  ],
};

const Q2_CORE = `مَرْحَبًا يَا أُسْتَاذُ أَحْمَدُ،
أَنَا سَامِي مِنَ الصَّفِّ العَاشِرِ. أَنَا آسِفٌ، لَا أَسْتَطِيعُ أَنْ آتِيَ إِلَى المَدْرَسَةِ اليَوْمَ، لِأَنِّي مَرِيضٌ. عِنْدِي حُمَّى وَسُعَالٌ، وَيُؤْلِمُنِي رَأْسِي كَثِيرًا. أَنَا مَرِيضٌ مُنْذُ يَوْمَيْنِ. أَمْسِ ذَهَبْتُ إِلَى الطَّبِيبِ مَعَ أُمِّي، وَأَعْطَانِي دَوَاءً. سَأَرْجِعُ إِلَى المَدْرَسَةِ يَوْمَ الأَحَدِ إِنْ شَاءَ اللّٰهُ. هَلْ يُمْكِنُ أَنْ تُرْسِلَ لِي الوَاجِبَ؟
شُكْرًا جَزِيلًا،
سَامِي`;
const Q2_FULL = `حَضْرَةَ الأُسْتَاذِ أَحْمَدَ المُحْتَرَمِ،
تَحِيَّةً طَيِّبَةً، وَبَعْدُ، فَأَنَا سَامِي مِنَ الصَّفِّ العَاشِرِ، وَأَكْتُبُ إِلَيْكَ لِأَعْتَذِرَ عَنِ الغِيَابِ اليَوْمَ. أَنَا مَرِيضٌ مُنْذُ يَوْمِ الإِثْنَيْنِ؛ عِنْدِي حُمَّى شَدِيدَةٌ وَسُعَالٌ، وَيُؤْلِمُنِي رَأْسِي وَحَلْقِي، وَأَشْعُرُ بِتَعَبٍ شَدِيدٍ طُولَ اليَوْمِ، فَلَا أَسْتَطِيعُ أَنْ أُرَكِّزَ أَوْ أَدْرُسَ. بَدَأَتِ الأَعْرَاضُ عِنْدَمَا رَجَعْتُ مِنَ المُبَارَاةِ مُبْتَلًّا بِالمَطَرِ. أَمْسِ فَحَصَنِي الطَّبِيبُ، وَنَصَحَنِي بِأَنْ أَرْتَاحَ ثَلَاثَةَ أَيَّامٍ وَأَشْرَبَ سَوَائِلَ كَثِيرَةً. أَتَوَقَّعُ أَنْ أَرْجِعَ يَوْمَ الأَحَدِ، وَأَرْجُو أَنْ تُرْسِلَ لِي وَاجِبَ هٰذَا الأُسْبُوعِ لِكَيْ لَا يَفُوتَنِي شَيْءٌ.
مَعَ الشُّكْرِ وَالتَّقْدِيرِ،
سَامِي يُوسُفُ`;
const Q3A_CORE = `فِي الشِّتَاءِ المَاضِي كُنْتُ مَرِيضًا جِدًّا. فِي يَوْمِ الإِثْنَيْنِ رَجَعْتُ مِنَ المَدْرَسَةِ، وَكُنْتُ مُتْعَبًا. فِي اللَّيْلِ كَانَ عِنْدِي حُمَّى، وَكَانَ يُؤْلِمُنِي رَأْسِي وَبَطْنِي. لَمْ آكُلْ شَيْئًا، وَلَمْ أَنَمْ جَيِّدًا، لِأَنَّ الأَلَمَ كَانَ شَدِيدًا.
فِي الصَّبَاحِ ذَهَبْتُ إِلَى الطَّبِيبِ مَعَ أَبِي. سَأَلَنِي الطَّبِيبُ: «مُنْذُ مَتَى أَنْتَ مَرِيضٌ؟» قُلْتُ: «مُنْذُ أَمْسِ». فَحَصَنِي، وَقَالَ: «عِنْدَكَ زُكَامٌ شَدِيدٌ». أَعْطَانِي دَوَاءً، وَقَالَ: «يَجِبُ أَنْ تَرْتَاحَ».
بَقِيتُ فِي البَيْتِ أَرْبَعَةَ أَيَّامٍ. نِمْتُ كَثِيرًا، وَشَرِبْتُ الشَّايَ بِالعَسَلِ، وَطَبَخَتْ لِي أُمِّي الشُّورْبَةَ. كُنْتُ حَزِينًا، لِأَنِّي لَمْ أَلْعَبْ مَعَ أَصْدِقَائِي، لٰكِنَّ صَدِيقِي أَرْسَلَ لِي الوَاجِبَ.
الآنَ صِحَّتِي جَيِّدَةٌ، وَالحَمْدُ لِلّٰهِ. فِي رَأْيِي، يَجِبُ أَنْ نَغْسِلَ أَيْدِيَنَا، وَأَنْ نَلْبَسَ مَلَابِسَ دَافِئَةً فِي الشِّتَاءِ. فِي المُسْتَقْبَلِ سَأَهْتَمُّ بِصِحَّتِي أَكْثَرَ، وَسَأَنَامُ مُبَكِّرًا.`;
const Q3A_FULL = `لَنْ أَنْسَى الأُسْبُوعَ الَّذِي مَرِضْتُ فِيهِ قَبْلَ امْتِحَانَاتِ الشِّتَاءِ. بَدَأَ كُلُّ شَيْءٍ يَوْمَ السَّبْتِ، عِنْدَمَا لَعِبْتُ مُبَارَاةً تَحْتَ المَطَرِ، ثُمَّ رَجَعْتُ إِلَى البَيْتِ مُبْتَلًّا وَلَمْ أُغَيِّرْ مَلَابِسِي، لِأَنِّي كُنْتُ مُتْعَبًا جِدًّا، وَجَلَسْتُ أَمَامَ التِّلْفَازِ سَاعَتَيْنِ.
فِي اللَّيْلِ ارْتَفَعَتْ حَرَارَتِي، وَصَارَ يُؤْلِمُنِي حَلْقِي وَظَهْرِي، فَلَمْ أَسْتَطِعْ أَنْ أَنَامَ. فِي الصَّبَاحِ أَخَذَنِي أَبِي إِلَى الطَّبِيبِ، فَفَحَصَنِي وَقَالَ إِنَّ عِنْدِي التِهَابًا فِي الحَلْقِ، وَنَصَحَنِي بِأَنْ أَرْتَاحَ أُسْبُوعًا كَامِلًا.
كَانَ أَصْعَبُ شَيْءٍ أَنَّنِي كُنْتُ قَلِقًا عَلَى دُرُوسِي، لِأَنَّ الامْتِحَانَاتِ كَانَتْ قَرِيبَةً. لٰكِنَّ زُمَلَائِي كَانُوا رَائِعِينَ؛ أَرْسَلُوا لِي المُلَخَّصَاتِ، وَاتَّصَلَ بِي مُعَلِّمِي لِيَطْمَئِنَّ عَلَيَّ، أَمَّا أُمِّي فَكَانَتْ تُحَضِّرُ لِي الشُّورْبَةَ وَالشَّايَ بِالعَسَلِ كُلَّ يَوْمٍ.
تَعَلَّمْتُ مِنْ هٰذِهِ التَّجْرِبَةِ أَنَّ الصِّحَّةَ أَغْلَى مِنْ أَيِّ شَيْءٍ. صَحِيحٌ أَنَّ المَرَضَ كَانَ مُزْعِجًا، غَيْرَ أَنَّهُ عَلَّمَنِي أَنْ أَهْتَمَّ بِنَفْسِي. وَلَوْ رَجَعَ بِيَ الزَّمَنُ، لَغَيَّرْتُ مَلَابِسِي فَوْرًا بَعْدَ المُبَارَاةِ، وَلَشَرِبْتُ شَيْئًا دَافِئًا.`;
const Q3B_FULL = `يَعْتَقِدُ كَثِيرٌ مِنَ النَّاسِ أَنَّ الصِّحَّةَ مَسْؤُولِيَّةُ الطَّبِيبِ وَحْدَهُ، أَمَّا أَنَا فَأَرَى أَنَّ الوِقَايَةَ تَبْدَأُ مِنْ عَادَاتِنَا اليَوْمِيَّةِ. فَغَسْلُ اليَدَيْنِ، وَالنَّوْمُ الكَافِي، وَالطَّعَامُ الصِّحِّيُّ تَحْمِينَا مِنْ أَمْرَاضٍ كَثِيرَةٍ قَبْلَ أَنْ نَحْتَاجَ إِلَى الدَّوَاءِ، وَكَذٰلِكَ الرِّيَاضَةُ الَّتِي تُقَوِّي جِسْمَنَا وَتُحَسِّنُ مِزَاجَنَا.
فِي المَاضِي كَانَ النَّاسُ يَنْتَظِرُونَ حَتَّى يَشْتَدَّ المَرَضُ، ثُمَّ يَذْهَبُونَ إِلَى الطَّبِيبِ. أَمَّا اليَوْمَ فَهُنَاكَ حَمَلَاتٌ لِلتَّطْعِيمِ وَالفَحْصِ المُبَكِّرِ فِي المَدَارِسِ، وَهٰذَا قَلَّلَ الأَمْرَاضَ كَثِيرًا، كَمَا أَصْبَحَتِ المَعْلُومَاتُ الصِّحِّيَّةُ مُتَوَفِّرَةً لِلْجَمِيعِ عَلَى الإِنْتَرْنِتِ.
فِي السَّنَةِ المَاضِيَةِ انْتَشَرَ الزُّكَامُ فِي صَفِّي، وَغَابَ نِصْفُ الطُّلَّابِ تَقْرِيبًا. فَقَرَّرَتِ المَدْرَسَةُ أَنْ تَضَعَ مُعَقِّمًا فِي كُلِّ فَصْلٍ، وَأَنْ تَطْلُبَ مِنَ الطُّلَّابِ المَرْضَى أَنْ يَبْقَوْا فِي بُيُوتِهِمْ، فَتَحَسَّنَ الوَضْعُ خِلَالَ أُسْبُوعَيْنِ.
صَحِيحٌ أَنَّ العِلَاجَ ضَرُورِيٌّ أَحْيَانًا، غَيْرَ أَنَّ الوِقَايَةَ أَسْهَلُ وَأَرْخَصُ. وَلَوِ اتَّبَعَ كُلُّ وَاحِدٍ مِنَّا هٰذِهِ العَادَاتِ البَسِيطَةَ، لَقَلَّتْ زِيَارَاتُنَا لِلطَّبِيبِ كَثِيرًا، وَلَعِشْنَا حَيَاةً أَسْعَدَ وَأَطْوَلَ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a clinic registration form, write an absence email to your teacher, and write an extended piece about an illness or about prevention.',
  lift: [
    { ar: 'يُؤْلِمُنِي رَأْسِي · تُؤْلِمُنِي يَدِي', en: 'my head hurts · my hand hurts' },
    { ar: 'عِنْدِي حُمَّى مُنْذُ يَوْمَيْنِ', en: 'I have had a fever for two days' },
    { ar: 'بَدَأَتِ الأَعْرَاضُ عِنْدَمَا …', en: 'the symptoms started when …' },
  ],
  checkTip: 'Check: the verb agrees with the body part (yuʾlimunī raʾsī · tuʾlimunī yadī); ʿindī + symptom in the nominative; mundhu + a time phrase.',
  FORM: {
    title: 'Clinic registration form', ar: 'اسْتِمَارَةُ العِيَادَةِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Your name', model: 'سَامِي يُوسُفُ', modelEn: 'Sami Yusuf' },
      { core: true, ar: 'العُمْرُ', en: 'Your age', model: 'خَمْسَ عَشْرَةَ سَنَةً', modelEn: 'fifteen' },
      { core: true, ar: 'أَيْنَ الأَلَمُ؟', en: 'Where it hurts', model: 'الرَّأْسُ وَالحَلْقُ', modelEn: 'head and throat' },
      { core: true, ar: 'الأَعْرَاضُ', en: 'Your symptoms (two)', model: 'حُمَّى وَسُعَالٌ', modelEn: 'fever and cough' },
      { core: true, ar: 'مُنْذُ مَتَى؟', en: 'Since when', model: 'مُنْذُ يَوْمَيْنِ', modelEn: 'for two days' },
      { core: true, ar: 'هَلْ أَخَذْتَ دَوَاءً؟', en: 'Medicine taken?', model: 'نَعَمْ، دَوَاءً لِلصُّدَاعِ', modelEn: 'yes, a headache tablet' },
      { ar: 'حَسَاسِيَّةٌ', en: 'Any allergies', model: 'حَسَاسِيَّةٌ مِنَ الفُولِ السُّودَانِيِّ', modelEn: 'peanut allergy' },
      { ar: 'جُمْلَةٌ: كَيْفَ بَدَأَ المَرَضُ؟', en: 'ONE sentence: how the illness started', model: 'بَدَأَ المَرَضُ عِنْدَمَا لَعِبْتُ تَحْتَ المَطَرِ يَوْمَ السَّبْتِ.', modelEn: 'The illness started when I played in the rain on Saturday.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence in the past.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 5 uses mundhu + dual (yawmayn).',
  },
  Q2: {
    short: 'an absence email to your teacher', title: 'Question 2: an absence email', ar: 'رِسَالَةُ اعْتِذَارٍ عَنِ الغِيَابِ',
    task: 'You are ill and cannot go to school. Write an email in Arabic to your teacher of about 80–90 words. You must include: • why you cannot come to school • your symptoms and how long you have been ill • what you did yesterday about your illness • when you will return, and one request.',
    checklist: ['All four bullet points, in order.', 'A polite greeting and closing.', 'Symptoms with ʿindī and yuʾlimunī.', 'A past sentence AND a future sentence.', 'About 80–90 words.'],
    phrases: [['أَنَا آسِفٌ، لَا أَسْتَطِيعُ أَنْ …', 'I am sorry, I can’t …'], ['عِنْدِي … وَيُؤْلِمُنِي …', 'I have … and my … hurts'], ['أَنَا مَرِيضٌ مُنْذُ …', 'I have been ill since …'], ['هَلْ يُمْكِنُ أَنْ تُرْسِلَ لِي …؟', 'could you send me …?']],
    rubric: [
      ['task', 'أَنْتَ مَرِيضٌ وَلَا تَسْتَطِيعُ الذَّهَابَ إِلَى المَدْرَسَةِ. اكْتُبْ رِسَالَةً إِلَى مُعَلِّمِكَ (٨٠–٩٠ كَلِمَةً).', 'You are ill and can’t go to school: write to your teacher (80–90 words).'],
      ['1', 'لِمَاذَا لَا تَسْتَطِيعُ الحُضُورَ؟', 'Why you cannot come'],
      ['2', 'مَا الأَعْرَاضُ؟ وَمُنْذُ مَتَى أَنْتَ مَرِيضٌ؟', 'Your symptoms, and since when'],
      ['3', 'مَاذَا فَعَلْتَ أَمْسِ بِسَبَبِ المَرَضِ؟', 'What you did yesterday about it'],
      ['4', 'مَتَى سَتَرْجِعُ؟ وَمَاذَا تَطْلُبُ مِنْ مُعَلِّمِكَ؟', 'When you will return; one request'],
    ],
    qwords: 'لِمَاذَا (why) · مَا (what) · مُنْذُ مَتَى (since when) · مَاذَا (what) · مَتَى (when) — bullet 3 is PAST, bullet 4 is FUTURE',
    frames: [
      ['start', 'مَرْحَبًا يَا أُسْتَاذُ ______ ، أَنَا ______ مِنَ الصَّفِّ ______ .', 'Hello Mr …, I am … from Year …'],
      ['1', 'أَنَا آسِفٌ، لَا أَسْتَطِيعُ أَنْ آتِيَ، لِأَنِّي ______ .', 'Sorry, I can’t come, because I am …'],
      ['2', 'عِنْدِي ______ ، وَيُؤْلِمُنِي ______ ، مُنْذُ ______ .', 'I have …, and my … hurts, since …'],
      ['3', 'أَمْسِ ذَهَبْتُ إِلَى ______ وَ ______ .', 'Yesterday I went to … and …'],
      ['4', 'سَأَرْجِعُ يَوْمَ ______ . هَلْ يُمْكِنُ أَنْ ______ ؟', 'I will return on … Could you …?'],
      ['end', 'شُكْرًا جَزِيلًا، ______', 'Many thanks, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Mr Ahmed, I am Sami from Year 10. I am sorry, I can’t come to school today because I am ill. I have a fever and a cough, and my head hurts a lot. I have been ill for two days. Yesterday I went to the doctor with my mum and he gave me medicine. I will come back to school on Sunday, God willing. Could you send me the homework? Many thanks, Sami.”',
      find: ['لِأَنِّي مَرِيضٌ', 'يُؤْلِمُنِي رَأْسِي', 'مُنْذُ يَوْمَيْنِ', 'سَأَرْجِعُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Mr Ahmed, greetings. I am Sami from Year 10, and I am writing to apologise for my absence today. I have been ill since Monday: I have a high fever and a cough, and my head and throat hurt; I feel very tired all day, so I can’t concentrate or study. The symptoms started when I came back from the match soaked by the rain. Yesterday the doctor examined me and advised me to rest for three days and drink plenty of fluids. I expect to return on Sunday, and I would be grateful if you could send me this week’s homework so that I don’t miss anything. With thanks and respect, Sami Yusuf.”',
      find: ['لِأَعْتَذِرَ عَنِ الغِيَابِ', 'مُنْذُ يَوْمِ الإِثْنَيْنِ', 'بَدَأَتِ الأَعْرَاضُ عِنْدَمَا', 'لِكَيْ لَا يَفُوتَنِي'],
    },
  },
  Q3: {
    a: { title: 'يَوْمَ كُنْتُ مَرِيضًا', en: 'The time I was ill', bullets: 'مَتَى وَكَيْفَ بَدَأَ المَرَضُ؟ · الأَعْرَاضُ وَزِيَارَةُ الطَّبِيبِ · كَيْفَ قَضَيْتَ أَيَّامَ المَرَضِ؟ · مَاذَا تَعَلَّمْتَ؟', bulletsEn: 'When and how it started · symptoms and the doctor · how you spent the days · what you learned' },
    b: { title: 'الوِقَايَةُ خَيْرٌ مِنَ العِلَاجِ', en: 'Prevention is better than cure', bullets: 'عَادَاتٌ تَحْمِينَا مِنَ المَرَضِ · كَيْفَ تَغَيَّرَ الاهْتِمَامُ بِالصِّحَّةِ؟ · تَجْرِبَةٌ فِي مَدْرَسَتِكَ أَوْ أُسْرَتِكَ · رَأْيُكَ وَاقْتِرَاحَاتُكَ', bulletsEn: 'Habits that protect us · how attention to health has changed · an experience at school or home · your opinion and suggestions' },
    plan: [
      'Start — when and how: qabla … (ago), ʿindamā …; set the scene in the past.',
      'Symptoms + doctor — ʿindī …, yuʾlimunī …, the doctor said / advised (naṣaḥanī bi-an …).',
      'Middle — how you felt and who helped: kuntu + adjective, li-anna …',
      'End — what you learned + future: sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'بَدَأَ كُلُّ شَيْءٍ عِنْدَمَا لَعِبْتُ تَحْتَ المَطَرِ.', en: 'past: it all started when I played in the rain.' },
      { ar: 'عِنْدِي صُدَاعٌ، وَتُؤْلِمُنِي رِجْلِي.', en: 'present: I have a headache, and my leg hurts.' },
      { ar: 'سَأَهْتَمُّ بِصِحَّتِي أَكْثَرَ.', en: 'future: I will look after my health more.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Last winter: home from school tired; at night a fever, head and stomach hurt; no food, poor sleep because of the pain → the doctor with Dad: “Since when?” “Since yesterday”; a bad cold; medicine and rest → four days at home: sleep, tea with honey, Mum’s soup; sad not to play, but a friend sent the homework → now healthy; we must wash our hands and dress warmly; I will look after my health more and sleep early.', find: ['كَانَ عِنْدِي حُمَّى', 'مُنْذُ أَمْسِ', 'أَرْبَعَةَ أَيَّامٍ', 'يَجِبُ أَنْ نَغْسِلَ'], notes: 'Core model: a clear past story with simple dialogue, symptoms, a duration, an opinion and a future sentence.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'I will never forget the week I fell ill before the winter exams: a match in the rain, home soaked, didn’t change (too tired, two hours of TV) → at night a temperature, sore throat and back, no sleep; the doctor: a throat infection, rest for a whole week → worried about lessons, but classmates sent summaries and the teacher phoned; Mum made soup and honey tea every day → health is worth more than anything; it is true illness was annoying, but it taught me to look after myself; “if I could go back in time, I would change my clothes straight after the match and have a warm drink”.', find: ['لَنْ أَنْسَى الأُسْبُوعَ الَّذِي', 'فَلَمْ أَسْتَطِعْ', 'نَصَحَنِي بِأَنْ أَرْتَاحَ', 'لَوْ رَجَعَ … لَغَيَّرْتُ'], notes: 'Full-mark model: a relative clause, ʿindamā, lam + jussive, reported speech, li- of purpose, a comparative, a concession and a conditional.' },
      { which: 'ب', level: 'Full', subtitle: 'prevention is better', text: Q3B_FULL, en: 'Many think health is the doctor’s job; I believe prevention starts with daily habits — handwashing, sleep, healthy food, and exercise that strengthens body and mood → in the past people waited until illness got worse; today schools run vaccination and screening campaigns, and health information is online for all → last year a cold spread in my class and half were absent; the school put sanitiser in every room and asked ill students to stay home; better within two weeks → it is true treatment is sometimes necessary, but prevention is easier and cheaper; “if each of us followed these simple habits, our visits to the doctor would fall a lot, and we would live happier, longer lives”.', find: ['أَمَّا أَنَا فَأَرَى', 'كَانَ النَّاسُ يَنْتَظِرُونَ', 'فَقَرَّرَتِ المَدْرَسَةُ أَنْ', 'لَوِ اتَّبَعَ … لَقَلَّتْ'], notes: 'Full-mark model for the Stretch title: ammā … fa-, past vs present, a school experience, a concession, comparatives and a conditional.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; mundhu + a time phrase.' },
    { route: 'core', text: 'Q2: all four bullet points, with a polite greeting and closing.' },
    { route: 'develop', text: 'Q2: yuʾlimunī / tuʾlimunī agrees with the body part.' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: ʿindamā, lam + jussive, a concession or a conditional.' },
  ],
};

module.exports = { speak, write };
