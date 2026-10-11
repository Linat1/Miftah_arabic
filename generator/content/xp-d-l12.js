'use strict';
/* Exam-practice data · TD-L12 · Topic D Review and Four-Skills Assessment — a full Topic D mock: institutions and stages, classroom tools,
   subjects and timetables, studying and exams, training and qualifications, jobs, workplaces, personal qualities, applications and interviews, career plans. Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'D', n: 12, short: 'Topic D Mock Exam', arShort: 'امْتِحَانٌ تَجْرِيبِيٌّ', fileTitle: 'Topic_D_Review_and_Four_Skills_Assessment', title: 'Topic D Review — mock exam practice', ar: 'مُرَاجَعَةُ المِحْوَرِ د', icon: 'FaClipboardCheck', grammar: 'all of Topic D: ordinal numbers and stages, verbs with prepositions, time and timetables, the imperative and advice, verbal nouns, professions in m. / f. / pl., kāna + present, adjectives of quality, formal requests, sa- / aṭmaḥu ilā an and conditionals' };

const speak = {
  ...base,
  focus: 'A full Paper 3 mock in breakout rooms: four role plays and a mixed topic conversation covering the whole of Topic D — schools and stages, subjects and timetables, revision and exams, training, jobs and workplaces, personal qualities, interviews and career plans.',
  words: [
    w(1, 'المَرْحَلَةُ الابْتِدَائِيَّةُ', 'primary stage', [['secondary', 'الثَّانَوِيَّةُ'], ['university', 'الجَامِعَةُ']], { tag: 'L01' }),
    w(2, 'أَحْتَاجُ إِلَى … · أَسْتَخْدِمُ …', 'I need … · I use …', [['a ruler', 'مِسْطَرَةٌ'], ['a calculator', 'آلَةٌ حَاسِبَةٌ']], { tag: 'L02' }),
    w(3, 'تَبْدَأُ الحِصَّةُ فِي …', 'the lesson starts at …', [['at half past eight', 'فِي الثَّامِنَةِ وَالنِّصْفِ'], ['I prefer', 'أُفَضِّلُ']], { tag: 'L03' }),
    w(4, 'أُرَاجِعُ · رَاجِعْ!', 'I revise · revise! (imp.)', [['you should', 'يَنْبَغِي أَنْ'], ['I passed', 'نَجَحْتُ فِي']], { tag: 'L04' }),
    w(5, 'حَصَلْتُ عَلَى شَهَادَةٍ', 'I got a certificate', [['a course in', 'دَوْرَةٌ فِي'], ['learning (v.n.)', 'تَعَلُّمُ']], { tag: 'L05' }),
    w(6, 'طَبِيبٌ · طَبِيبَةٌ · أَطِبَّاءُ', 'doctor (m. · f. · pl.)', [['engineer (f.)', 'مُهَنْدِسَةٌ'], ['teachers', 'مُعَلِّمُونَ']], { tag: 'L06' }),
    w(7, 'كُنْتُ أَعْمَلُ فِي …', 'I used to work in …', [['shifts', 'نَوْبَاتٌ'], ['colleagues', 'زُمَلَاءُ']], { tag: 'L07' }),
    w(8, 'صَبُورٌ · مُنَظَّمٌ · دَقِيقٌ', 'patient · organised · precise', [['f.', 'صَبُورَةٌ · مُنَظَّمَةٌ'], ['teamwork', 'العَمَلُ الجَمَاعِيُّ']], { tag: 'L08' }),
    w(9, 'أَوَدُّ أَنْ أَتَقَدَّمَ لِوَظِيفَةٍ', 'I would like to apply for …', [['enclosed', 'مُرْفَقٌ'], ['I look forward to', 'أَتَطَلَّعُ إِلَى']], { tag: 'L09' }),
    w(10, 'أَطْمَحُ إِلَى أَنْ …', 'I aspire to …', [['plan B', 'خُطَّةٌ بَدِيلَةٌ'], ['I will', 'سَوْفَ']], { tag: 'L10' }),
    w(11, 'أَوَّلًا · بِالإِضَافَةِ إِلَى ذٰلِكَ', 'firstly · in addition', [['however', 'مَعَ ذٰلِكَ'], ['therefore', 'لِذٰلِكَ']], { tag: 'L11' }),
    w(12, 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', 'it is true that … but …', [['if … would', 'لَوْ كُنْتُ … لَاخْتَرْتُ'], ['if … will', 'إِذَا … فَسَوْفَ']], { tag: 'top band' }),
  ],
  words1: { eyebrow: 'Language bank · one key structure from each part of Topic D', title: 'Topic D in twelve structures', ar: 'المِحْوَرُ د فِي اثْنَتَيْ عَشْرَةَ بِنْيَةً', notes: 'LANGUAGE BANK (2 min) — a revision map: each card recalls one lesson (L01–L11). Ask students to say ONE sentence with each structure before the role plays.' },
  words2: { eyebrow: 'Language bank · structures that lift a mark', title: 'Precise, linked, developed', ar: 'بِنْيَاتٌ تَرْفَعُ الدَّرَجَةَ', notes: 'LANGUAGE BANK (2 min) — top-band answers are precise (m. / f. professions, times, verbs with prepositions), linked (awwalan, li-dhālika, maʿa dhālika) and developed (a concession and a conditional).' },
  checkCore: 'completed every role-play task, including the unexpected one',
  checkDevelop: 'used three Topic D structures accurately and two time frames',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a language institute', title: 'Role play A — Enrolling on an Arabic course', ar: 'التَّسْجِيلُ فِي مَعْهَدٍ لِلُّغَةِ', you: 'a new student', them: 'the institute receptionist',
      tasks: [
        { core: true, ex: 'أَهْلًا وَسَهْلًا! مَاذَا تُرِيدُ أَنْ تَدْرُسَ؟', task: 'Say what you want to study.', help: 'أُرِيدُ أَنْ أَدْرُسَ …', model: 'أُرِيدُ أَنْ أَدْرُسَ اللُّغَةَ العَرَبِيَّةَ، مِنْ فَضْلِكَ.', modelEn: 'I want to study Arabic, please.' },
        { core: true, ex: 'فِي أَيِّ مَرْحَلَةٍ تَدْرُسُ الآنَ؟', task: 'Say your stage and year.', help: 'أَنَا فِي المَرْحَلَةِ … فِي الصَّفِّ …', model: 'أَنَا فِي المَرْحَلَةِ الثَّانَوِيَّةِ، فِي الصَّفِّ العَاشِرِ.', modelEn: 'I’m at secondary stage, in Year 10.' },
        { core: true, ex: 'عِنْدَنَا صَفٌّ مَسَائِيٌّ وَصَفٌّ يَوْمَ السَّبْتِ.', task: 'Say which you prefer and why.', help: 'أُفَضِّلُ … لِأَنَّ …', model: 'أُفَضِّلُ صَفَّ يَوْمِ السَّبْتِ، لِأَنِّي مَشْغُولٌ فِي المَسَاءِ.', modelEn: 'I prefer the Saturday class, because I’m busy in the evenings.' },
        { core: true, ex: 'مُمْتَازٌ. هَلْ عِنْدَكَ سُؤَالٌ؟', task: 'Ask what time the lesson starts.', help: 'مَتَى تَبْدَأُ …؟', model: 'مَتَى تَبْدَأُ الحِصَّةُ؟', modelEn: 'When does the lesson start?' },
        { core: true, unexpected: true, ex: 'فِي العَاشِرَةِ. مَاذَا تَحْتَاجُ لِلصَّفِّ؟', task: 'Answer the unexpected question.', help: 'أَحْتَاجُ إِلَى … وَ…', model: 'أَحْتَاجُ إِلَى دَفْتَرٍ وَقَامُوسٍ.', modelEn: 'I need an exercise book and a dictionary.' },
      ],
      girl: 'تُرِيدِينَ · تَدْرُسِينَ · عِنْدَكِ · تَحْتَاجِينَ · مَشْغُولَةٌ',
      notes: 'Core: stages and ordinals (al-ṣaff al-ʿāshir, L01), uffaḍḍilu + li-anna (L03), matā tabdaʾu al-ḥiṣṣa? (L03), aḥtāju ilā + classroom tools (L02).',
    },
    {
      id: 'B', level: 'Core+', setting: 'a phone call', title: 'Role play B — A part-time job at a café', ar: 'عَمَلٌ جُزْئِيٌّ فِي مَقْهًى', you: 'a student looking for work', them: 'the café manager',
      tasks: [
        { core: true, ex: 'مَقْهَى الوَاحَةِ، تَفَضَّلْ.', task: 'Say why you are calling.', help: 'رَأَيْتُ إِعْلَانًا عَنْ … وَأَوَدُّ أَنْ …', model: 'رَأَيْتُ إِعْلَانًا عَنْ عَمَلٍ جُزْئِيٍّ، وَأَوَدُّ أَنْ أَتَقَدَّمَ لَهُ.', modelEn: 'I saw an advert for a part-time job and would like to apply.' },
        { core: true, ex: 'هَلْ عَمِلْتَ فِي مَقْهًى مِنْ قَبْلُ؟', task: 'Describe past experience.', help: 'نَعَمْ، كُنْتُ أَعْمَلُ فِي …', model: 'نَعَمْ، كُنْتُ أَعْمَلُ فِي مَطْعَمِ عَمِّي فِي العُطَلِ.', modelEn: 'Yes, I used to work in my uncle’s restaurant in the holidays.' },
        { ex: 'مَا صِفَاتُكَ الشَّخْصِيَّةُ؟', task: 'Give two qualities with an example.', help: 'أَنَا … وَ… ، مَثَلًا …', model: 'أَنَا نَشِيطٌ وَمُهَذَّبٌ؛ مَثَلًا، أَبْتَسِمُ دَائِمًا لِلزَّبَائِنِ حَتَّى عِنْدَمَا يَكُونُ المَطْعَمُ مُزْدَحِمًا.', modelEn: 'I’m energetic and polite; for example, I always smile at customers even when it’s busy.' },
        { ex: 'العَمَلُ يَوْمَ الجُمُعَةِ مِنَ الرَّابِعَةِ إِلَى التَّاسِعَةِ.', task: 'ASK about pay and the uniform.', help: 'كَمِ الرَّاتِبُ فِي السَّاعَةِ؟ وَهَلْ …؟', model: 'كَمِ الرَّاتِبُ فِي السَّاعَةِ؟ وَهَلْ هُنَاكَ زِيٌّ خَاصٌّ؟', modelEn: 'What is the hourly pay? And is there a uniform?' },
        { unexpected: true, ex: 'وَكَيْفَ سَتُوَفِّقُ بَيْنَ العَمَلِ وَالدِّرَاسَةِ؟', task: 'Answer the unexpected question (future).', help: 'سَأُرَاجِعُ … وَلَنْ …', model: 'سَأُرَاجِعُ دُرُوسِي يَوْمَ السَّبْتِ صَبَاحًا، وَلَنْ أَعْمَلَ أَكْثَرَ مِنْ خَمْسِ سَاعَاتٍ فِي الأُسْبُوعِ.', modelEn: 'I’ll revise on Saturday mornings, and I won’t work more than five hours a week.' },
      ],
      girl: 'تَفَضَّلِي · عَمِلْتِ · صِفَاتُكِ · نَشِيطَةٌ وَمُهَذَّبَةٌ · سَتُوَفِّقِينَ',
      notes: 'Core+: awaddu an atqaddama (L09), kuntu aʿmalu (L07), qualities + mathalan (L08), the CANDIDATE asks (kam ar-rātib?), sa- + lan with khamsi sāʿātin (L04, L10).',
    },
    {
      id: 'C', level: 'Develop', setting: 'a meeting with a teacher', title: 'Role play C — Results day and choosing a course', ar: 'يَوْمُ النَّتَائِجِ وَاخْتِيَارُ الدِّرَاسَةِ', you: 'a student', them: 'your form tutor',
      tasks: [
        { ex: 'مَبْرُوكٌ عَلَى النَّتَائِجِ! كَيْفَ كَانَتْ؟', task: 'Give results with comparison (past).', help: 'نَجَحْتُ فِي … وَكَانَتْ … أَفْضَلَ مِنْ …', model: 'شُكْرًا! نَجَحْتُ فِي كُلِّ المَوَادِّ، وَكَانَتْ نَتِيجَةُ الرِّيَاضِيَّاتِ أَفْضَلَ مِنْ نَتِيجَةِ الامْتِحَانِ التَّجْرِيبِيِّ بِكَثِيرٍ.', modelEn: 'Thanks! I passed everything, and maths was much better than in the mock.' },
        { ex: 'مَا السِّرُّ؟ كَيْفَ رَاجَعْتَ؟', task: 'Explain your methods with linkers.', help: 'أَوَّلًا … ثُمَّ … بِالإِضَافَةِ إِلَى ذٰلِكَ …', model: 'أَوَّلًا، وَضَعْتُ جَدْوَلًا لِلْمُرَاجَعَةِ، ثُمَّ حَلَلْتُ امْتِحَانَاتٍ سَابِقَةً؛ بِالإِضَافَةِ إِلَى ذٰلِكَ، كُنْتُ أُرَاجِعُ مَعَ صَدِيقٍ كُلَّ يَوْمِ أَحَدٍ.', modelEn: 'First I made a revision timetable, then did past papers; also I revised with a friend every Sunday.' },
        { ex: 'مَاذَا تُرِيدُ أَنْ تَدْرُسَ بَعْدَ ذٰلِكَ؟', task: 'Say what and why (verbal noun).', help: 'أُرِيدُ دِرَاسَةَ … لِأَنَّ …', model: 'أُرِيدُ دِرَاسَةَ التَّصْمِيمِ وَالتِّكْنُولُوجْيَا، لِأَنَّنِي أُحِبُّ صِنَاعَةَ الأَشْيَاءِ بِيَدَيَّ.', modelEn: 'I want to study design and technology, because I love making things with my hands.' },
        { ex: 'هُنَاكَ دَوْرَةٌ مِهْنِيَّةٌ أَوْ مَسَارٌ أَكَادِيمِيٌّ.', task: 'Compare the options and choose.', help: 'الدَّوْرَةُ … أَمَّا المَسَارُ الأَكَادِيمِيُّ فَـ… لِذٰلِكَ …', model: 'الدَّوْرَةُ المِهْنِيَّةُ عَمَلِيَّةٌ أَكْثَرَ، أَمَّا المَسَارُ الأَكَادِيمِيُّ فَيَفْتَحُ بَابَ الجَامِعَةِ؛ لِذٰلِكَ سَأَخْتَارُ المَسَارَ الأَكَادِيمِيَّ.', modelEn: 'The vocational course is more practical, but the academic route opens the door to university, so I’ll choose it.' },
        { unexpected: true, ex: 'وَإِذَا تَغَيَّرَ رَأْيُكَ بَعْدَ سَنَةٍ؟', task: 'Answer the unexpected question (condition).', help: 'إِذَا …، فَسَوْفَ …', model: 'إِذَا تَغَيَّرَ رَأْيِي، فَسَوْفَ أَنْتَقِلُ إِلَى الدَّوْرَةِ المِهْنِيَّةِ، وَمَعَ ذٰلِكَ لَنْ أَنْدَمَ عَلَى التَّجْرِبَةِ.', modelEn: 'If I change my mind, I’ll switch to the vocational course — and I won’t regret the experience.' },
      ],
      girl: 'رَاجَعْتِ · تُرِيدِينَ · رَأْيُكِ',
      notes: 'Develop: najaḥtu fī + afḍalu min … bi-kathīr (L04), sequencing + kuntu urājiʿu (L04, L11), a verbal noun (dirāsata, ṣināʿata, L05), ammā … fa- + li-dhālika (L03, L10), idhā … fa-sawfa + lan.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a formal interview', title: 'Role play D — Interview for a summer job at a museum', ar: 'مُقَابَلَةُ عَمَلٍ فِي المَتْحَفِ', you: 'a job applicant', them: 'the museum’s head of education',
      tasks: [
        { ex: 'لِمَاذَا تَقَدَّمْتَ لِهٰذِهِ الوَظِيفَةِ؟', task: 'Give a formal, motivated answer.', help: 'يَسُرُّنِي أَنْ … فَقَدْ … مُنْذُ …', model: 'يَسُرُّنِي أَنْ أَكُونَ هُنَا. فَقَدْ أَحْبَبْتُ التَّارِيخَ مُنْذُ طُفُولَتِي، وَأَرَى أَنَّ المَتْحَفَ أَفْضَلُ مَكَانٍ لِأَنْقُلَ هٰذَا الحُبَّ إِلَى الأَطْفَالِ.', modelEn: 'I’ve loved history since childhood, and the museum is the best place to pass that love on to children.' },
        { ex: 'هَلْ عِنْدَكَ خِبْرَةٌ فِي العَمَلِ مَعَ الأَطْفَالِ؟', task: 'Narrate experience with a result.', help: 'فِي … كُنْتُ … فَتَعَلَّمْتُ …', model: 'فِي الصَّيْفِ المَاضِي كُنْتُ مُشْرِفًا فِي مُخَيَّمٍ لِلْأَطْفَالِ، وَكُنْتُ أُنَظِّمُ لَهُمْ أَلْعَابًا تَعْلِيمِيَّةً، فَتَعَلَّمْتُ أَنْ أَشْرَحَ الأَفْكَارَ الصَّعْبَةَ بِطَرِيقَةٍ بَسِيطَةٍ.', modelEn: 'Last summer I supervised a children’s camp, organising educational games — and learnt to explain hard ideas simply.' },
        { ex: 'مَا نُقْطَةُ ضَعْفِكَ؟', task: 'Admit a weakness and show progress.', help: 'كُنْتُ … أَمَّا الآنَ فَـ…', model: 'كُنْتُ أَخْجَلُ مِنَ الكَلَامِ أَمَامَ الجُمْهُورِ، أَمَّا الآنَ فَأَتَدَرَّبُ فِي نَادِي المُنَاظَرَاتِ، وَقَدْ أَصْبَحْتُ أَكْثَرَ ثِقَةً.', modelEn: 'I used to be shy speaking in public; now I train in the debating club and have become more confident.' },
        { ex: 'الوَظِيفَةُ تَتَطَلَّبُ العَمَلَ فِي عُطْلَةِ نِهَايَةِ الأُسْبُوعِ.', task: 'Concede and reassure.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ ذٰلِكَ سَيَأْخُذُ مِنْ وَقْتِ رَاحَتِي، غَيْرَ أَنَّ الخِبْرَةَ أَهَمُّ عِنْدِي؛ وَالدَّلِيلُ أَنَّنِي عَمِلْتُ فِي العُطَلِ سَنَتَيْنِ مُتَتَالِيَتَيْنِ.', modelEn: 'It will take some of my rest time, but experience matters more to me — I’ve worked holidays two years running.' },
        { unexpected: true, ex: 'لَوْ لَمْ تَحْصُلْ عَلَى الوَظِيفَةِ، مَاذَا سَتَفْعَلُ؟', task: 'Answer the unexpected question (law lam … la-).', help: 'لَوْ لَمْ أَحْصُلْ …، لَـ… لِكَيْ …', model: 'لَوْ لَمْ أَحْصُلْ عَلَيْهَا، لَتَطَوَّعْتُ فِي المَتْحَفِ يَوْمًا فِي الأُسْبُوعِ، لِكَيْ أَبْقَى قَرِيبًا مِنَ المَجَالِ الَّذِي أُحِبُّهُ.', modelEn: 'I’d volunteer at the museum one day a week, to stay close to the field I love.' },
      ],
      girl: 'تَقَدَّمْتِ · عِنْدَكِ · ضَعْفِكِ · تَحْصُلِي · سَتَفْعَلِينَ · مُشْرِفَةً · قَرِيبَةً',
      notes: 'Stretch: formal register (yasurrunī an, arā anna), mundhu, kuntu + present … fa-taʿallamtu an (L07–L08), kuntu … ammā al-āna fa- + qad aṣbaḥtu, a concession with wa-d-dalīlu anna and a dual (sanatayni mutatāliyatayni), law lam … la- + li-kay (L09–L10).',
      modelFoot: 'Stretch: every Topic D skill in one card — motivation, narrated experience, honest self-reflection, a concession and law lam … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'مَدْرَسَتِي وَعَمَلِي', aim: 'one full sentence per question',
      qs: [
        { q: 'فِي أَيِّ مَدْرَسَةٍ تَدْرُسُ؟', en: 'Which school do you go to?', start: 'أَدْرُسُ فِي مَدْرَسَةِ …', model: 'أَدْرُسُ فِي مَدْرَسَةِ المَدِينَةِ، وَهِيَ مَدْرَسَةٌ كَبِيرَةٌ.', modelEn: 'I study at Al Madina School; it’s a big school.' },
        { q: 'مَتَى يَبْدَأُ يَوْمُكَ الدِّرَاسِيُّ؟', en: 'When does your school day start?', start: 'يَبْدَأُ فِي …', model: 'يَبْدَأُ فِي الثَّامِنَةِ وَالنِّصْفِ، وَيَنْتَهِي فِي الثَّالِثَةِ.', modelEn: 'It starts at 8.30 and ends at three.' },
        { q: 'مَاذَا تَحْمِلُ فِي حَقِيبَتِكَ؟', en: 'What do you carry in your bag?', start: 'أَحْمِلُ … وَ…', model: 'أَحْمِلُ كُتُبِي وَمِقْلَمَتِي وَآلَةً حَاسِبَةً.', modelEn: 'My books, pencil case and a calculator.' },
        { q: 'مَا الصِّفَاتُ المُهِمَّةُ لِلْمُعَلِّمِ؟', en: 'What qualities are important for a teacher?', start: 'يَجِبُ أَنْ يَكُونَ …', model: 'يَجِبُ أَنْ يَكُونَ صَبُورًا وَمُنَظَّمًا.', modelEn: 'A teacher must be patient and organised.' },
        { q: 'مَا الوَظِيفَةُ الَّتِي تُرِيدُهَا؟', en: 'What job do you want?', start: 'أُرِيدُ أَنْ أَكُونَ … لِأَنَّ …', model: 'أُرِيدُ أَنْ أَكُونَ طَبِيبَ أَسْنَانٍ، لِأَنَّ الرَّاتِبَ جَيِّدٌ.', modelEn: 'A dentist, because the salary is good.' },
      ],
      foot: 'Core: one full sentence for every question — each question comes from a different Topic D lesson. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + accurate agreement = a secure Core answer on every theme.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'أَنَا وَدِرَاسَتِي وَمُسْتَقْبَلِي', aim: 'two or three sentences, mixing time frames',
      qs: [
        { q: 'قَارِنْ بَيْنَ مَدْرَسَتِكَ الابْتِدَائِيَّةِ وَالثَّانَوِيَّةِ.', en: 'Compare your primary and secondary schools.', start: 'كَانَتِ الابْتِدَائِيَّةُ … أَمَّا الثَّانَوِيَّةُ فَـ…', model: 'كَانَتِ الابْتِدَائِيَّةُ صَغِيرَةً وَقَرِيبَةً مِنْ بَيْتِي، أَمَّا الثَّانَوِيَّةُ فَأَكْبَرُ بِكَثِيرٍ، وَفِيهَا مُخْتَبَرَاتٌ وَمَكْتَبَةٌ حَدِيثَةٌ.', modelEn: 'Primary was small and near home; secondary is much bigger, with labs and a modern library.' },
        { q: 'مَا نَصِيحَتُكَ لِطَالِبٍ قَبْلَ الامْتِحَانَاتِ؟', en: 'What is your advice for a student before exams?', start: 'رَاجِعْ … وَلَا تَـ… لِأَنَّ …', model: 'رَاجِعْ قَلِيلًا كُلَّ يَوْمٍ، وَلَا تَسْهَرْ لَيْلَةَ الامْتِحَانِ، لِأَنَّ النَّوْمَ يُسَاعِدُ الذَّاكِرَةَ.', modelEn: 'Revise a little every day and don’t stay up the night before, because sleep helps memory.' },
        { q: 'صِفْ مَكَانَ عَمَلٍ زُرْتَهُ أَوْ عَمِلْتَ فِيهِ.', en: 'Describe a workplace you visited or worked in.', start: 'عَمِلْتُ / زُرْتُ … كَانَ … وَكَانَ الزُّمَلَاءُ …', model: 'عَمِلْتُ أُسْبُوعًا فِي مَكْتَبِ مُحَامٍ؛ كَانَ المَكْتَبُ هَادِئًا، وَكَانَ الزُّمَلَاءُ لُطَفَاءَ، لٰكِنَّ السَّاعَاتِ كَانَتْ طَوِيلَةً.', modelEn: 'I worked a week in a lawyer’s office: quiet, kind colleagues, but long hours.' },
        { q: 'مَا الشَّهَادَاتُ أَوِ الدَّوْرَاتُ الَّتِي تُرِيدُهَا؟', en: 'What certificates or courses do you want?', start: 'أُرِيدُ أَنْ أَحْصُلَ عَلَى … لِكَيْ …', model: 'أُرِيدُ أَنْ أَحْصُلَ عَلَى شَهَادَةٍ فِي البَرْمَجَةِ، لِكَيْ أَجِدَ عَمَلًا جُزْئِيًّا وَأَنَا فِي الجَامِعَةِ.', modelEn: 'A programming certificate, so I can find part-time work while at university.' },
        { q: 'أَيْنَ تُحِبُّ أَنْ تَعْمَلَ فِي المُسْتَقْبَلِ؟', en: 'Where would you like to work in future?', start: 'أَطْمَحُ إِلَى أَنْ … لِأَنَّ …', model: 'أَطْمَحُ إِلَى أَنْ أَعْمَلَ فِي شَرِكَةٍ دُوَلِيَّةٍ، لِأَنِّي أُحِبُّ السَّفَرَ وَاللُّغَاتِ.', modelEn: 'I aspire to work for an international company — I love travel and languages.' },
      ],
      foot: 'Develop: two or three sentences — description, a reason, a past or future detail and linking words.',
      modelFoot: 'Comparison + a reason + two time frames = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'التَّعْلِيمُ وَمُسْتَقْبَلُ العَمَلِ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلِ الامْتِحَانَاتُ أَفْضَلُ طَرِيقَةٍ لِتَقْيِيمِ الطُّلَّابِ؟', en: 'Are exams the best way to assess students?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهَا عَادِلَةٌ وَوَاضِحَةٌ، غَيْرَ أَنَّهَا لَا تَقِيسُ الإِبْدَاعَ وَالعَمَلَ الجَمَاعِيَّ، لِذٰلِكَ أُفَضِّلُ أَنْ تُضَافَ إِلَيْهَا مَشَارِيعُ.', modelEn: 'They are fair and clear, but don’t measure creativity or teamwork, so I’d add projects.' },
        { q: 'كَيْفَ سَيَتَغَيَّرُ عَالَمُ العَمَلِ بِسَبَبِ التِّكْنُولُوجْيَا؟', en: 'How will technology change the world of work?', start: 'سَتَخْتَفِي … مِمَّا …', model: 'سَتَخْتَفِي بَعْضُ الوَظَائِفِ الرُّوتِينِيَّةِ، وَسَتَظْهَرُ وَظَائِفُ جَدِيدَةٌ، مِمَّا يَعْنِي أَنَّنَا سَنَحْتَاجُ إِلَى التَّعَلُّمِ طُولَ الحَيَاةِ.', modelEn: 'Some routine jobs will vanish and new ones appear, meaning we’ll need lifelong learning.' },
        { q: 'هَلِ الرَّاتِبُ أَهَمُّ مِنَ السَّعَادَةِ فِي العَمَلِ؟', en: 'Is salary more important than happiness at work?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، نَحْتَاجُ إِلَى رَاتِبٍ يَكْفِي لِحَيَاةٍ كَرِيمَةٍ، وَمِنْ نَاحِيَةٍ أُخْرَى، نَقْضِي فِي العَمَلِ ثُلُثَ حَيَاتِنَا، فَلَا بُدَّ أَنْ نُحِبَّهُ.', modelEn: 'We need a decent salary, but we spend a third of our lives at work, so we must love it.' },
        { q: 'مَنْ أَثَّرَ فِي اخْتِيَارِكَ لِمِهْنَتِكَ؟', en: 'Who influenced your choice of career?', start: 'أَثَّرَتْ فِيَّ / أَثَّرَ فِيَّ … عِنْدَمَا …', model: 'أَثَّرَتْ فِيَّ مُعَلِّمَةُ العُلُومِ عِنْدَمَا شَجَّعَتْنِي عَلَى المُشَارَكَةِ فِي مُسَابَقَةٍ، فَاكْتَشَفْتُ حُبِّي لِلْبَحْثِ العِلْمِيِّ.', modelEn: 'My science teacher, when she encouraged me to enter a competition — I discovered my love of research.' },
        { q: 'لَوْ كُنْتَ وَزِيرَ التَّعْلِيمِ، مَاذَا تُغَيِّرُ؟', en: 'If you were education minister, what would you change?', start: 'لَوْ كُنْتُ …، لَـ…', model: 'لَوْ كُنْتُ وَزِيرًا لِلتَّعْلِيمِ، لَأَضَفْتُ حِصَّةً أُسْبُوعِيَّةً لِلْمَهَارَاتِ المِهْنِيَّةِ، وَلَجَعَلْتُ التَّدْرِيبَ فِي الشَّرِكَاتِ جُزْءًا مِنَ المَنْهَجِ.', modelEn: 'I’d add a weekly careers-skills lesson and make company placements part of the curriculum.' },
      ],
      foot: 'Stretch: a concession, a future with mimmā, a balanced view, a narrated influence and law … la-.',
      modelFoot: 'Stretch: ṣaḥīḥun anna … ghayra anna, the passive (tuḍāfa), mimmā yaʿnī, balance with lā budda and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I completed every role-play task, including the unexpected one.' },
    { route: 'core', text: 'I answered in full sentences on at least three Topic D themes.' },
    { route: 'develop', text: 'I used times, ordinals or m. / f. professions accurately.' },
    { route: 'develop', text: 'I linked ideas and used two time frames in one answer.' },
    { route: 'stretch', text: 'I gave a balanced view, a concession and a conditional.' },
  ],
};
speak.RP[1].tasks[1].help = 'نَعَمْ، كُنْتُ أَعْمَلُ فِي … فِي العُطَلِ';
speak.RP[2].tasks[3].help = 'الدَّوْرَةُ … أَمَّا المَسَارُ الأَكَادِيمِيُّ فَيَفْتَحُ … لِذٰلِكَ …';
speak.RP[3].tasks[1].help = 'فِي … كُنْتُ … فَتَعَلَّمْتُ أَنْ …';
speak.RP[3].tasks[2].help = 'كُنْتُ … أَمَّا الآنَ فَأَتَدَرَّبُ …';
speak.RP[3].tasks[4].help = 'لَوْ لَمْ أَحْصُلْ …، لَتَطَوَّعْتُ … لِكَيْ …';
speak.CONV[1].qs[0].start = 'كَانَتِ الابْتِدَائِيَّةُ … أَمَّا الثَّانَوِيَّةُ فَأَكْبَرُ …';
speak.CONV[1].qs[1].start = 'رَاجِعْ … وَلَا تَسْهَرْ … لِأَنَّ …';
speak.CONV[2].qs[4].start = 'لَوْ كُنْتُ …، لَأَضَفْتُ …';

const Q2_CORE = `مَرْحَبًا يَا لَيْلَى،
كَيْفَ حَالُكِ؟ أَنَا الآنَ طَالِبَةٌ فِي الكُلِّيَّةِ الجَدِيدَةِ! الكُلِّيَّةُ كَبِيرَةٌ وَحَدِيثَةٌ، وَفِيهَا مَكْتَبَةٌ جَمِيلَةٌ. أَدْرُسُ الأَحْيَاءَ وَالكِيمْيَاءَ وَعِلْمَ النَّفْسِ. تَبْدَأُ الحِصَصُ فِي التَّاسِعَةِ وَتَنْتَهِي فِي الرَّابِعَةِ. مَادَّتِي المُفَضَّلَةُ عِلْمُ النَّفْسِ، لِأَنَّ المُعَلِّمَةَ صَبُورَةٌ وَمُمْتِعَةٌ. بِالإِضَافَةِ إِلَى ذٰلِكَ، بَدَأْتُ عَمَلًا جُزْئِيًّا فِي صَيْدَلِيَّةٍ يَوْمَ السَّبْتِ. الدِّرَاسَةُ صَعْبَةٌ، وَمَعَ ذٰلِكَ أَنَا سَعِيدَةٌ. فِي المُسْتَقْبَلِ سَأَدْرُسُ الطِّبَّ إِنْ شَاءَ اللّٰهُ. وَأَنْتِ، كَيْفَ مَدْرَسَتُكِ؟
مَعَ السَّلَامَةِ،
مَرْيَمُ`;
const Q2_FULL = `عَزِيزَتِي لَيْلَى،
مَرَّ أُسْبُوعِيَ الأَوَّلُ فِي الكُلِّيَّةِ بِسُرْعَةٍ! المَبْنَى أَكْبَرُ بِكَثِيرٍ مِنْ مَدْرَسَتِنَا القَدِيمَةِ، وَفِيهِ مُخْتَبَرَاتٌ حَدِيثَةٌ وَمَكْتَبَةٌ تَفْتَحُ حَتَّى المَسَاءِ. اخْتَرْتُ الأَحْيَاءَ وَالكِيمْيَاءَ وَعِلْمَ النَّفْسِ، وَأَكْثَرُ مَا أَعْجَبَنِي أَنَّ الأَسَاتِذَةَ يُعَامِلُونَنَا كَالكِبَارِ، فَنُنَظِّمُ وَقْتَنَا بِأَنْفُسِنَا. وَقَدْ تَعَرَّفْتُ عَلَى زَمِيلَاتٍ لَطِيفَاتٍ مِنْ بُلْدَانٍ مُخْتَلِفَةٍ، فَلَمْ أَشْعُرْ بِالوَحْدَةِ أَبَدًا. صَحِيحٌ أَنَّ الوَاجِبَاتِ كَثِيرَةٌ، وَأَنَّنِي أَعْمَلُ أَيْضًا فِي صَيْدَلِيَّةٍ أَيَّامَ السَّبْتِ، غَيْرَ أَنَّ التَّجْرِبَةَ تُعَلِّمُنِي المَسْؤُولِيَّةَ وَتَنْظِيمَ الوَقْتِ. وَإِذَا حَصَلْتُ عَلَى دَرَجَاتٍ عَالِيَةٍ، فَسَأَتَقَدَّمُ لِكُلِّيَّةِ الطِّبِّ بَعْدَ سَنَتَيْنِ. أَخْبِرِينِي: هَلِ اخْتَرْتِ مَوَادَّكِ؟
بِمَحَبَّةٍ،
مَرْيَمُ`;
const Q3A_CORE = `أُرِيدُ أَنْ أَكُونَ مُهَنْدِسَةً مِعْمَارِيَّةً فِي المُسْتَقْبَلِ. هٰذِهِ هِيَ وَظِيفَةُ أَحْلَامِي، لِأَنِّي أُحِبُّ الرَّسْمَ وَالرِّيَاضِيَّاتِ.
فِي المَدْرَسَةِ الابْتِدَائِيَّةِ كُنْتُ أَرْسُمُ البُيُوتَ وَالمَسَاجِدَ كُلَّ يَوْمٍ. الآنَ أَنَا فِي الصَّفِّ الحَادِي عَشَرَ، وَأَدْرُسُ الرِّيَاضِيَّاتِ وَالفِيزْيَاءَ وَالفَنَّ. أُرَاجِعُ كُلَّ مَسَاءٍ سَاعَةً وَنِصْفًا، لِأَنَّ الدَّرَجَاتِ العَالِيَةَ مُهِمَّةٌ لِهٰذِهِ المِهْنَةِ. مَادَّتِي المُفَضَّلَةُ الفَنُّ، لِأَنَّ مُعَلِّمَتِي تُشَجِّعُنِي دَائِمًا.
فِي الصَّيْفِ المَاضِي عَمِلْتُ أُسْبُوعًا فِي مَكْتَبٍ لِلْهَنْدَسَةِ. كَانَ المَكْتَبُ كَبِيرًا وَهَادِئًا، وَكَانَ الزُّمَلَاءُ لُطَفَاءَ جِدًّا. سَاعَدْتُ مُهَنْدِسَةً فِي رَسْمِ خَرِيطَةٍ لِمَدْرَسَةٍ جَدِيدَةٍ، وَتَعَلَّمْتُ كَيْفَ يَعْمَلُ الفَرِيقُ مَعًا. كَانَ العَمَلُ صَعْبًا وَطَوِيلًا، وَمَعَ ذٰلِكَ كَانَ مُمْتِعًا.
المُهَنْدِسَةُ الجَيِّدَةُ صَبُورَةٌ وَدَقِيقَةٌ وَمُبْدِعَةٌ. لِذٰلِكَ سَأَدْرُسُ الهَنْدَسَةَ فِي الجَامِعَةِ، ثُمَّ سَأَعْمَلُ فِي شَرِكَةٍ كَبِيرَةٍ. أَطْمَحُ إِلَى أَنْ أَبْنِيَ مَدَارِسَ جَمِيلَةً لِلْأَطْفَالِ فِي بَلَدِ وَالِدَيَّ، إِنْ شَاءَ اللّٰهُ.`;
const Q3A_FULL = `مُنْذُ أَنْ كُنْتُ فِي السَّابِعَةِ، وَأَنَا أَمْلَأُ دَفَاتِرِي بِرُسُومِ بُيُوتٍ وَمَسَاجِدَ وَجُسُورٍ خَيَالِيَّةٍ؛ فَلَمْ يَكُنْ غَرِيبًا أَنْ تُصْبِحَ الهَنْدَسَةُ المِعْمَارِيَّةُ وَظِيفَةَ أَحْلَامِي.
وَمَعَ أَنَّ كَثِيرِينَ يَظُنُّونَ أَنَّ المُهَنْدِسَ المِعْمَارِيَّ رَسَّامٌ فَقَطْ، فَإِنَّ هٰذِهِ المِهْنَةَ تَجْمَعُ بَيْنَ الفَنِّ وَالعِلْمِ؛ لِذٰلِكَ اخْتَرْتُ الرِّيَاضِيَّاتِ وَالفِيزْيَاءَ وَالفَنَّ، وَأُخَصِّصُ كُلَّ مَسَاءٍ سَاعَةً لِلرَّسْمِ الهَنْدَسِيِّ. كَمَا انْضَمَمْتُ إِلَى دَوْرَةٍ مَسَائِيَّةٍ فِي التَّصْمِيمِ بِالحَاسُوبِ، وَحَصَلْتُ عَلَى شَهَادَتِهَا الأُولَى.
وَقَدْ تَأَكَّدَ اخْتِيَارِي حِينَ تَدَرَّبْتُ أُسْبُوعًا فِي مَكْتَبٍ هَنْدَسِيٍّ مَشْهُورٍ؛ إِذْ رَافَقْتُ مُهَنْدِسَةً تُصَمِّمُ مَدْرَسَةً صَدِيقَةً لِلْبِيئَةِ، فَرَأَيْتُ كَيْفَ تُصْغِي إِلَى المُعَلِّمِينَ وَالأَهَالِي قَبْلَ أَنْ تَرْسُمَ خَطًّا وَاحِدًا عَلَى الوَرَقِ. عِنْدَئِذٍ فَهِمْتُ أَنَّ الصَّبْرَ وَالاسْتِمَاعَ لَا يَقِلَّانِ أَهَمِّيَّةً عَنِ المَوْهِبَةِ.
لِذٰلِكَ أَطْمَحُ إِلَى دِرَاسَةِ الهَنْدَسَةِ المِعْمَارِيَّةِ، ثُمَّ تَصْمِيمِ مَدَارِسَ تَدْخُلُهَا الشَّمْسُ وَيُحِبُّهَا الأَطْفَالُ، فِي المُدُنِ وَالقُرَى عَلَى السَّوَاءِ. صَحِيحٌ أَنَّ الدِّرَاسَةَ تَسْتَغْرِقُ سَبْعَ سَنَوَاتٍ، غَيْرَ أَنَّنِي لَوْ خُيِّرْتُ مِنْ جَدِيدٍ، لَاخْتَرْتُ الطَّرِيقَ نَفْسَهُ.`;
const Q3B_FULL = `بَعْدَ امْتِحَانَاتِ الثَّانَوِيَّةِ، يَقِفُ كَثِيرٌ مِنَ الشَّبَابِ وَأُسَرِهِمْ أَمَامَ سُؤَالٍ صَعْبٍ: هَلْ يَدْخُلُونَ الجَامِعَةَ، أَمْ يَبْدَؤُونَ العَمَلَ مُبَاشَرَةً؟ وَلِكُلِّ طَرِيقٍ مُؤَيِّدُونَ وَمُعَارِضُونَ.
مِنْ نَاحِيَةٍ، تَفْتَحُ الشَّهَادَةُ الجَامِعِيَّةُ أَبْوَابَ مِهَنٍ كَثِيرَةٍ، كَالطِّبِّ وَالهَنْدَسَةِ وَالقَانُونِ، وَتُتِيحُ لِلطَّالِبِ أَنْ يَنْضُجَ وَيَكْتَشِفَ اهْتِمَامَاتِهِ. كَمَا يَبْنِي عَلَاقَاتٍ وَصَدَاقَاتٍ قَدْ تُفِيدُهُ طَوَالَ حَيَاتِهِ المِهْنِيَّةِ. وَمِنْ نَاحِيَةٍ أُخْرَى، تُكَلِّفُ الجَامِعَةُ كَثِيرًا، بَيْنَمَا يَكْسِبُ مَنْ يَبْدَأُ العَمَلَ مَالًا وَخِبْرَةً عَمَلِيَّةً مُبَكِّرَةً، دُونَ أَنْ يَتَحَمَّلَ دُيُونًا كَبِيرَةً.
فَأَخِي مَثَلًا تَرَكَ الدِّرَاسَةَ بَعْدَ الثَّانَوِيَّةِ، وَالْتَحَقَ بِتَدْرِيبٍ مِهْنِيٍّ فِي شَرِكَةٍ لِلْكَهْرَبَاءِ، وَهُوَ اليَوْمَ فَنِّيٌّ مَاهِرٌ يَدْرُسُ فِي المَسَاءِ عَلَى حِسَابِ الشَّرِكَةِ. أَمَّا ابْنَةُ عَمِّي فَتَخَرَّجَتْ مِنَ الجَامِعَةِ، وَمَا زَالَتْ تَبْحَثُ عَنْ وَظِيفَةٍ مُنَاسِبَةٍ لِتَخَصُّصِهَا مُنْذُ سَنَةٍ كَامِلَةٍ.
أَرَى أَنَّهُ لَا يُوجَدُ طَرِيقٌ وَاحِدٌ صَحِيحٌ لِلْجَمِيعِ؛ فَالمُهِمُّ أَنْ يَعْرِفَ الإِنْسَانُ نَفْسَهُ وَأَهْدَافَهُ وَظُرُوفَهُ المَالِيَّةَ. وَإِذَا اخْتَارَ عَنْ قَنَاعَةٍ، فَسَيَنْجَحُ فِي أَيِّ طَرِيقٍ يَسْلُكُهُ بِإِذْنِ اللّٰهِ.`;

const write = {
  ...base,
  focus: 'A full Paper 4 mock across all of Topic D: fill in a part-time job application form, write an email about your first week at college, and write an extended piece about your dream job or about university versus starting work at 18.',
  lift: [
    { ar: 'المَبْنَى أَكْبَرُ بِكَثِيرٍ مِنْ مَدْرَسَتِنَا القَدِيمَةِ', en: 'the building is much bigger than our old school' },
    { ar: 'كُنْتُ أَرْسُمُ البُيُوتَ … الآنَ أَدْرُسُ …', en: 'I used to draw houses … now I study …' },
    { ar: 'إِذَا حَصَلْتُ عَلَى دَرَجَاتٍ عَالِيَةٍ، فَسَأَتَقَدَّمُ …', en: 'if I get high grades, I will apply …' },
  ],
  checkTip: 'Check Topic D accuracy: m. / f. professions (muhandisa, ṭabība) and adjective agreement (ṣabūra, daqīqa); times (fī at-tāsiʿa); verbs with prepositions (aḥtāju ilā, ḥaṣaltu ʿalā, ataqaddamu li-); kuntu + present for the past, sa- or aṭmaḥu ilā an for the future; four linkers.',
  FORM: {
    title: 'Part-time job application form', ar: 'اسْتِمَارَةُ طَلَبِ عَمَلٍ جُزْئِيٍّ',
    fields: [
      { core: true, ar: 'الاسْمُ الكَامِلُ', en: 'Full name', model: 'مَرْيَمُ حَسَنٌ', modelEn: 'Maryam Hassan' },
      { core: true, ar: 'المَدْرَسَةُ أَوِ الكُلِّيَّةُ', en: 'School or college', model: 'كُلِّيَّةُ النُّورِ', modelEn: 'Al Noor College' },
      { core: true, ar: 'الوَظِيفَةُ المَطْلُوبَةُ', en: 'Job applied for', model: 'مُسَاعِدَةٌ فِي صَيْدَلِيَّةٍ', modelEn: 'pharmacy assistant' },
      { core: true, ar: 'الأَيَّامُ المُنَاسِبَةُ', en: 'Days available', model: 'السَّبْتُ وَالأَحَدُ', modelEn: 'Saturday and Sunday' },
      { core: true, ar: 'صِفَتَانِ شَخْصِيَّتَانِ', en: 'Two personal qualities', model: 'صَبُورَةٌ وَمُنَظَّمَةٌ', modelEn: 'patient and organised' },
      { core: true, ar: 'اللُّغَاتُ', en: 'Languages', model: 'العَرَبِيَّةُ وَالإِنْجْلِيزِيَّةُ', modelEn: 'Arabic and English' },
      { ar: 'خِبْرَةٌ سَابِقَةٌ', en: 'Previous experience', model: 'أُسْبُوعٌ فِي مُسْتَشْفًى', modelEn: 'a week in a hospital' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُرِيدُ هٰذَا العَمَلَ؟', en: 'ONE sentence: why you want this job', model: 'أُرِيدُ هٰذَا العَمَلَ لِأَنِّي أَطْمَحُ إِلَى دِرَاسَةِ الطِّبِّ.', modelEn: 'Because I aspire to study medicine.' },
    ],
    foot: 'One word or a short phrase for each box — feminine agreement for a female applicant (ṣabūra, munaẓẓama, musāʿida); the last box is a full sentence with a reason.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. The boxes recycle Topic D: institutions (L01), jobs (L06), timetables (L03), qualities (L08), experience (L07) and applications (L09). Box 5 is a dual: ṣifatāni shakhṣiyyatāni.',
  },
  Q2: {
    short: 'an email about my first week at college', title: 'Question 2: my first week at college', ar: 'أُسْبُوعِي الأَوَّلُ فِي الكُلِّيَّةِ',
    task: 'Write an email in Arabic to a friend of about 80–90 words. You must include: • a description of your new college • your subjects and your favourite • something else you are doing this year (a job, a course) and your opinion • your plans for the future, and a question for your friend.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'At least three linking words.', 'Past, present AND future.', 'About 80–90 words.'],
    phrases: [['الكُلِّيَّةُ كَبِيرَةٌ وَحَدِيثَةٌ، وَفِيهَا …', 'the college is big and modern, with …'], ['مَادَّتِي المُفَضَّلَةُ … لِأَنَّ …', 'my favourite subject … because …'], ['بَدَأْتُ عَمَلًا جُزْئِيًّا فِي …', 'I started a part-time job at …'], ['فِي المُسْتَقْبَلِ سَأَدْرُسُ …', 'in the future I will study …']],
    rubric: [
      ['task', 'اكْتُبِي رِسَالَةً إِلَى صَدِيقَتِكِ عَنْ أُسْبُوعِكِ الأَوَّلِ فِي الكُلِّيَّةِ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about your first week at college (80–90 words).'],
      ['1', 'صِفِي الكُلِّيَّةَ الجَدِيدَةَ.', 'Describe the new college'],
      ['2', 'مَا المَوَادُّ الَّتِي تَدْرُسِينَهَا؟ وَمَا مَادَّتُكِ المُفَضَّلَةُ؟', 'Your subjects and your favourite'],
      ['3', 'مَاذَا تَفْعَلِينَ أَيْضًا هٰذِهِ السَّنَةَ؟ وَمَا رَأْيُكِ؟', 'Something else this year; your opinion'],
      ['4', 'مَا خِطَطُكِ لِلْمُسْتَقْبَلِ؟ وَاسْأَلِي صَدِيقَتَكِ سُؤَالًا.', 'Future plans; a question for your friend'],
    ],
    qwords: 'صِفِي (describe! — f. imperative) · تَدْرُسِينَهَا (you study them — PRESENT) · تَفْعَلِينَ (you do) · خِطَطُكِ (your plans — FUTURE) · اسْأَلِي (ask!)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكِ؟', 'Hello …, how are you?'],
      ['1', 'الكُلِّيَّةُ ______ وَ______ ، وَفِيهَا ______ .', 'The college is … and …, with …'],
      ['2', 'أَدْرُسُ ______ . مَادَّتِي المُفَضَّلَةُ ______ ، لِأَنَّ ______ .', 'I study … My favourite is … because …'],
      ['3', 'بِالإِضَافَةِ إِلَى ذٰلِكَ، بَدَأْتُ ______ ، وَمَعَ ذٰلِكَ ______ .', 'Also I started …; nevertheless …'],
      ['4', 'فِي المُسْتَقْبَلِ سَأَ______ . وَأَنْتِ، ______ ؟', 'In future I will … And you, …?'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Layla, how are you? I’m now a student at the new college! It’s big and modern, with a beautiful library. I study biology, chemistry and psychology. Lessons start at nine and end at four. My favourite is psychology, because the teacher is patient and fun. In addition, I started a part-time job in a pharmacy on Saturdays. Studying is hard; nevertheless I’m happy. In future I’ll study medicine, God willing. And you, how is your school? Goodbye, Maryam.”',
      find: ['كَبِيرَةٌ وَحَدِيثَةٌ', 'تَبْدَأُ الحِصَصُ فِي التَّاسِعَةِ', 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'سَأَدْرُسُ الطِّبَّ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Layla, my first week at college flew by! The building is much bigger than our old school, with modern labs and a library open until the evening. I chose biology, chemistry and psychology, and what I like most is that the teachers treat us like adults, so we organise our own time. I’ve met kind classmates from different countries, so I’ve never felt lonely. The homework is heavy and I also work in a pharmacy on Saturdays, but the experience is teaching me responsibility and time management. If I get high grades, I’ll apply to medical school in two years. Tell me: have you chosen your subjects? With love, Maryam.”',
      find: ['أَكْبَرُ بِكَثِيرٍ مِنْ', 'يُعَامِلُونَنَا كَالكِبَارِ', 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ', 'إِذَا حَصَلْتُ … فَسَأَتَقَدَّمُ'],
    },
  },
  Q3: {
    a: { title: 'وَظِيفَةُ أَحْلَامِي', en: 'My dream job', bullets: 'الوَظِيفَةُ وَلِمَاذَا تُحِبُّهَا · دِرَاسَتُكَ فِي المَاضِي وَالآنَ · تَجْرِبَةُ عَمَلٍ · الصِّفَاتُ المَطْلُوبَةُ وَخُطَطُكَ', bulletsEn: 'The job and why you like it · your studies then and now · a work experience · the qualities needed and your plans' },
    b: { title: 'الجَامِعَةُ أَمِ العَمَلُ بَعْدَ الثَّانَوِيَّةِ؟', en: 'University or work after school?', bullets: 'السُّؤَالُ · فَوَائِدُ الجَامِعَةِ وَفَوَائِدُ العَمَلِ · مِثَالٌ مِنْ حَيَاتِكَ · رَأْيُكَ', bulletsEn: 'The question · benefits of university and of work · an example from your life · your opinion' },
    plan: [
      'The job — urīdu an akūna …; hādhihi hiya waẓīfatu aḥlāmī li-annī …',
      'Studies — fī al-ibtidāʾiyya kuntu …; al-āna adrusu …; urājiʿu …',
      'Experience — ʿamiltu usbūʿan fī …; kāna al-maktab …; wa-maʿa dhālika …',
      'Qualities + plans — al-muhandisa al-jayyida ṣabūra …; li-dhālika sa-adrusu …; aṭmaḥu ilā an …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'كُنْتُ أَرْسُمُ البُيُوتَ كُلَّ يَوْمٍ.', en: 'past: I used to draw houses every day.' },
      { ar: 'الآنَ أَدْرُسُ الرِّيَاضِيَّاتِ وَالفِيزْيَاءَ وَالفَنَّ.', en: 'present: now I study maths, physics and art.' },
      { ar: 'لِذٰلِكَ سَأَدْرُسُ الهَنْدَسَةَ فِي الجَامِعَةِ.', en: 'future: so I will study engineering.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'I want to be an architect: I love drawing and maths → in primary I drew houses; now in Year 11 I study maths, physics and art and revise every evening → a week in an engineering office: kind colleagues; I helped draw a plan for a school and learnt teamwork → a good engineer is patient, precise and creative, so I’ll study engineering and build schools for children.', find: ['كُنْتُ أَرْسُمُ', 'عَمِلْتُ أُسْبُوعًا', 'وَمَعَ ذٰلِكَ', 'أَطْمَحُ إِلَى أَنْ'], notes: 'Core model: the whole of Topic D in four paragraphs — stages and subjects (L01, L03), revision (L04), work experience and colleagues (L07), a profession in the feminine (L06), qualities (L08) and plans (L10).' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Since I was seven I have filled my notebooks with imaginary houses, mosques and bridges, so it was no surprise that architecture became my dream job → although many think an architect is just an artist, the profession combines art and science, so I chose maths, physics and art and give an hour every evening to technical drawing; I also took an evening computer-design course and got its first certificate → my choice was confirmed during a week in an architecture office, shadowing an engineer designing an eco-friendly school: she listened to teachers and parents before drawing a single line on paper, and I understood that patience and listening matter as much as talent → so I aspire to study architecture and design sunny schools children love, in towns and villages alike; the course takes seven years, “but if I could choose again, I would take the same road”.', find: ['مُنْذُ أَنْ كُنْتُ … وَأَنَا', 'مَعَ أَنَّ … فَإِنَّ', 'لَا يَقِلَّانِ أَهَمِّيَّةً عَنْ', 'لَوْ خُيِّرْتُ … لَاخْتَرْتُ'], notes: 'Full-mark model: mundhu an kuntu … wa-anā + present, lam yakun gharīban an, maʿa anna … fa-inna, idh + a relative-free description (tuṣammimu), qabla an, a dual verb (lā yaqillāni), verbal nouns (dirāsa, taṣmīm), a concession and a passive law khuyyirtu … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'university or work after school?', text: Q3B_FULL, en: 'After school exams many young people and their families face a hard question: university or straight to work? Each path has supporters and critics → a degree opens doors to many professions (medicine, engineering, law) and lets students mature and build lifelong contacts; on the other hand, university is expensive, while those who start work gain money and early experience without big debts → my brother joined an electrical apprenticeship and is now a skilled technician studying in the evenings at the company’s expense, whereas my cousin graduated and is still looking for a job in her field after a whole year → there is no single right path for everyone; what matters is knowing yourself, your goals and your finances, “and if you choose out of conviction, you will succeed on any path you take”.', find: ['هَلْ … أَمْ', 'بَيْنَمَا يَكْسِبُ', 'أَمَّا ابْنَةُ عَمِّي فَتَخَرَّجَتْ', 'إِذَا اخْتَارَ … فَسَيَنْجَحُ'], notes: 'Full-mark model for the Stretch title: a hal … am question, mu-ayyidūn wa-muʿāriḍūn, a balanced view with tutīḥu li- … an and baynamā, a contrasting example with ammā … fa- and mā zālat, lā yūjadu, and idhā … fa-sa-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic, with feminine agreement where needed.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: three linking words and past, present and future.' },
    { route: 'develop', text: 'Q3: four paragraphs, with a work experience in the past.' },
    { route: 'stretch', text: 'Q3: a balanced view, a concession and a conditional.' },
  ],
};

module.exports = { speak, write };
