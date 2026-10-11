'use strict';
/* Exam-practice data · FR-L04 · Final Revision — Education, Work and the International World (Topic D: school, subjects, exams, training, jobs, workplaces, applications, career plans; Topic E: languages, cultures, customs, travel and global connections). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'R', n: 4, short: 'Education, Work and the International World', arShort: 'التَّعْلِيمُ وَالعَمَلُ وَالعَالَمُ الدُّوَلِيُّ', fileTitle: 'Education_Work_and_the_International_World', title: 'Final Revision — Education, Work and the International World', ar: 'مُرَاجَعَةٌ: التَّعْلِيمُ وَالعَمَلُ وَالعَالَمُ الدُّوَلِيُّ', icon: 'FaGraduationCap', grammar: 'Topics D and E revision: subjects and timetables; professions m. / f.; kuntu + present; sa- and aṭmaḥu ilā an; formal requests (awaddu an); nisba and languages; comparison with baynamā / ammā … fa-; conditionals (idhā … fa-sa-, law … la-)' };

const speak = {
  ...base,
  focus: 'Final-revision Paper 3 practice on Topics D and E in breakout rooms: school and subjects, training and jobs, applications and interviews, career plans, languages, cultures, travel and global life. Exam skills: switch to formal Arabic in interviews (يَسُرُّنِي · أَوَدُّ أَنْ), compare cultures with respect, and finish developed answers with a plan or a condition.',
  words: [
    w(1, 'مَادَّتِي المُفَضَّلَةُ …', 'my favourite subject is …', [['timetable', 'الجَدْوَلُ الدِّرَاسِيُّ'], ['I prefer … to …', 'أُفَضِّلُ … عَلَى …']], { tag: 'D · L03' }),
    w(2, 'أُرَاجِعُ · نَجَحْتُ فِي', 'I revise · I passed', [['exams', 'امْتِحَانَاتٌ'], ['results', 'نَتَائِجُ']], { tag: 'D · L04' }),
    w(3, 'مُهَنْدِسٌ · مُهَنْدِسَةٌ', 'engineer (m. · f.)', [['doctor (f.)', 'طَبِيبَةٌ'], ['teachers', 'مُعَلِّمُونَ']], { tag: 'D · L06' }),
    w(4, 'خِبْرَةُ عَمَلٍ', 'work experience', [['colleagues', 'زُمَلَاءُ'], ['salary', 'رَاتِبٌ']], { tag: 'D · L07' }),
    w(5, 'أَوَدُّ أَنْ أَتَقَدَّمَ لِوَظِيفَةٍ', 'I would like to apply for a job', [['I am pleased to', 'يَسُرُّنِي أَنْ'], ['interview', 'مُقَابَلَةٌ']], { tag: 'D · L09' }),
    w(6, 'أَطْمَحُ إِلَى أَنْ …', 'I aspire to …', [['plan B', 'خُطَّةٌ بَدِيلَةٌ'], ['university', 'الجَامِعَةُ']], { tag: 'D · L10' }),
    w(7, 'أَتَكَلَّمُ … بِطَلَاقَةٍ', 'I speak … fluently', [['bilingual', 'ثُنَائِيُّ اللُّغَةِ'], ['translation', 'التَّرْجَمَةُ']], { tag: 'E · L02' }),
    w(8, 'عَادَاتٌ · تَقَالِيدُ', 'customs · traditions', [['hospitality', 'الضِّيَافَةُ'], ['identity', 'الهُوِيَّةُ']], { tag: 'E · L03–04' }),
    w(9, 'تَبَادُلٌ ثَقَافِيٌّ', 'a cultural exchange', [['host family', 'العَائِلَةُ المُضِيفَةُ'], ['abroad', 'فِي الخَارِجِ']], { tag: 'E · L08' }),
    w(10, 'بَيْنَمَا · أَمَّا … فَإِنَّ', 'whereas · as for …', [['different, not better', 'مُخْتَلِفٌ لَا أَفْضَلُ'], ['usually', 'غَالِبًا']], { tag: 'E · L09' }),
    w(11, 'إِذَا … فَسَأُسَافِرُ', 'if … I will travel', [['global', 'عَالَمِيٌّ'], ['international', 'دُوَلِيٌّ']], { tag: 'E · L10' }),
    w(12, 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', 'it is true that … but …', [['if … would', 'لَوْ كُنْتُ … لَاخْتَرْتُ'], ['not … but', 'لَيْسَ … بَلْ']], { tag: 'top band' }),
  ],
  words1: { eyebrow: 'Language bank · Topics D and E in twelve structures', title: 'School, work and the world', ar: 'المِحْوَرَانِ الرَّابِعُ وَالخَامِسُ', notes: 'LANGUAGE BANK (2 min) — a revision map of Topics D and E. EXAM TIP: professions change for gender (مُهَنْدِسٌ / مُهَنْدِسَةٌ), and languages are feminine (اللُّغَةُ العَرَبِيَّةُ) — two quick accuracy wins.' },
  words2: { eyebrow: 'Language bank · structures that lift a mark', title: 'Formal, comparative, conditional', ar: 'بِنْيَاتٌ تَرْفَعُ الدَّرَجَةَ', notes: 'LANGUAGE BANK (2 min) — interviews need formal Arabic: يَسُرُّنِي أَنْ · أَوَدُّ أَنْ · حَضْرَتُكَ. Comparing cultures needs respect: بَيْنَمَا · غَالِبًا · مُخْتَلِفٌ لَا أَفْضَلُ. EXAM TIP: end a developed answer with a plan: إِذَا … فَسَـ…' },
  checkCore: 'talked about subjects, a job and languages in full sentences',
  checkDevelop: 'used formal register or a respectful comparison, and two time frames',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a careers interview', title: 'Role play A — Talking to the careers adviser', ar: 'مَعَ المُرْشِدَةِ المِهْنِيَّةِ', you: 'a Year 11 student', them: 'the careers adviser',
      tasks: [
        { core: true, ex: 'أَهْلًا! مَا المَوَادُّ الَّتِي تَدْرُسِينَهَا؟', task: 'Name three subjects.', help: 'أَدْرُسُ … وَ… وَ…', model: 'أَدْرُسُ الأَحْيَاءَ وَالكِيمْيَاءَ وَالعَرَبِيَّةَ.', modelEn: 'Biology, chemistry and Arabic.' },
        { core: true, ex: 'وَمَا مَادَّتُكِ المُفَضَّلَةُ؟', task: 'Give your favourite with a reason.', help: 'مَادَّتِي المُفَضَّلَةُ … لِأَنَّ …', model: 'مَادَّتِيَ المُفَضَّلَةُ الأَحْيَاءُ، لِأَنَّهَا مُمْتِعَةٌ.', modelEn: 'Biology — it’s interesting.' },
        { core: true, ex: 'أَيَّ وَظِيفَةٍ تُرِيدِينَ فِي المُسْتَقْبَلِ؟', task: 'Say your dream job (feminine).', help: 'أُرِيدُ أَنْ أَكُونَ …', model: 'أُرِيدُ أَنْ أَكُونَ طَبِيبَةً.', modelEn: 'I want to be a doctor.' },
        { core: true, ex: 'فِكْرَةٌ جَيِّدَةٌ.', task: 'Ask about work experience.', help: 'هَلْ أَسْتَطِيعُ أَنْ …؟', model: 'هَلْ أَسْتَطِيعُ أَنْ أَتَدَرَّبَ فِي مُسْتَشْفًى؟', modelEn: 'Can I do work experience in a hospital?' },
        { core: true, unexpected: true, ex: 'نَعَمْ. كَمْ لُغَةً تَتَكَلَّمِينَ؟', task: 'Answer the unexpected question.', help: 'أَتَكَلَّمُ …', model: 'أَتَكَلَّمُ الإِنْجْلِيزِيَّةَ وَالعَرَبِيَّةَ وَالأُرْدِيَّةَ.', modelEn: 'English, Arabic and Urdu.' },
      ],
      girl: '(model is f.; a boy: تَدْرُسُهَا · مَادَّتُكَ · تُرِيدُ · طَبِيبًا · تَتَكَلَّمُ)',
      notes: 'Core: subjects (D · L03), li-annahā, a feminine profession (ṭabība, D · L06), hal astaṭīʿu an …? (D · L07), languages (E · L01–02). EXAM TIP: if the job is for a woman, add ـَةً: مُهَنْدِسَةً · مُعَلِّمَةً.',
    },
    {
      id: 'B', level: 'Core+', setting: 'a job interview', title: 'Role play B — A summer job at an international hotel', ar: 'وَظِيفَةٌ صَيْفِيَّةٌ فِي فُنْدُقٍ دُوَلِيٍّ', you: 'a student applying for a summer job', them: 'the hotel manager',
      tasks: [
        { core: true, ex: 'صَبَاحَ الخَيْرِ، تَفَضَّلِي بِالجُلُوسِ.', task: 'Greet formally and say why you are here.', help: 'صَبَاحَ النُّورِ. أَوَدُّ أَنْ أَتَقَدَّمَ لِـ…', model: 'صَبَاحَ النُّورِ. أَوَدُّ أَنْ أَتَقَدَّمَ لِوَظِيفَةِ مُوَظَّفَةِ الاسْتِقْبَالِ.', modelEn: 'Good morning. I’d like to apply for the receptionist job.' },
        { core: true, ex: 'مَا اللُّغَاتُ الَّتِي تَتَكَلَّمِينَهَا؟', task: 'Name languages with level.', help: 'أَتَكَلَّمُ … بِطَلَاقَةٍ، وَ… قَلِيلًا', model: 'أَتَكَلَّمُ الإِنْجْلِيزِيَّةَ وَالعَرَبِيَّةَ بِطَلَاقَةٍ، وَالفَرَنْسِيَّةَ قَلِيلًا.', modelEn: 'English and Arabic fluently, and a little French.' },
        { ex: 'لِمَاذَا تُنَاسِبُكِ هٰذِهِ الوَظِيفَةُ؟', task: 'Give two qualities with evidence.', help: 'لِأَنِّي … وَ… ؛ مَثَلًا …', model: 'لِأَنِّي مُنَظَّمَةٌ وَصَبُورَةٌ؛ مَثَلًا، أُسَاعِدُ أَبِي فِي مَحَلِّهِ، وَأَتَعَامَلُ مَعَ زَبَائِنَ مِنْ ثَقَافَاتٍ مُخْتَلِفَةٍ.', modelEn: 'I’m organised and patient — I help in dad’s shop with customers from many cultures.' },
        { ex: 'العَمَلُ مِنَ الأَحَدِ إِلَى الخَمِيسِ.', task: 'ASK about hours and pay.', help: 'كَمْ سَاعَةً …؟ وَكَمِ …؟', model: 'كَمْ سَاعَةً فِي اليَوْمِ؟ وَكَمِ الرَّاتِبُ فِي السَّاعَةِ؟', modelEn: 'How many hours a day? And what is the hourly pay?' },
        { unexpected: true, ex: 'سِتُّ سَاعَاتٍ. هَلْ زُرْتِ بَلَدًا عَرَبِيًّا؟', task: 'Answer the unexpected question (past + opinion).', help: 'نَعَمْ، زُرْتُ … ، وَأَعْجَبَنِي …', model: 'نَعَمْ، زُرْتُ الأُرْدُنَّ السَّنَةَ المَاضِيَةَ، وَأَعْجَبَنِي كَرَمُ النَّاسِ هُنَاكَ.', modelEn: 'Yes, Jordan last year — I loved people’s generosity there.' },
      ],
      girl: '(model is f.; a boy: تَفَضَّلْ · مُوَظَّفِ · تَتَكَلَّمُهَا · تُنَاسِبُكَ · مُنَظَّمٌ وَصَبُورٌ · زُرْتَ)',
      notes: 'Core+: formal register + awaddu an atqaddama (D · L09), languages with bi-ṭalāqa (E · L02), qualities + mathalan (D · L08), the CANDIDATE asks (kam sāʿatan …? kam ar-rātib?), a past visit + aʿjabanī (E · L04, L08).',
    },
    {
      id: 'C', level: 'Develop', setting: 'an exchange in Jordan', title: 'Role play C — Two school systems', ar: 'نِظَامَانِ دِرَاسِيَّانِ', you: 'a British exchange student in Amman', them: 'your Jordanian host teacher',
      tasks: [
        { ex: 'كَيْفَ يَوْمُكِ الدِّرَاسِيُّ فِي بَرِيطَانْيَا؟', task: 'Describe your school day (times, subjects).', help: 'يَبْدَأُ فِي … ، وَأَدْرُسُ … ، وَيَنْتَهِي …', model: 'يَبْدَأُ فِي الثَّامِنَةِ وَالنِّصْفِ، وَأَدْرُسُ خَمْسَ حِصَصٍ، ثُمَّ أَبْقَى لِنَادِي العُلُومِ حَتَّى الرَّابِعَةِ.', modelEn: 'It starts at 8.30, five lessons, then science club till four.' },
        { ex: 'وَمَا الفَرْقُ بَيْنَ مَدْرَسَتِكِ وَمَدْرَسَتِنَا؟', task: 'Compare respectfully with baynamā.', help: 'عِنْدَنَا … بَيْنَمَا عِنْدَكُمْ … ؛ وَكِلَاهُمَا …', model: 'عِنْدَنَا زِيٌّ مَدْرَسِيٌّ وَعُطْلَةٌ يَوْمَيِ السَّبْتِ وَالأَحَدِ، بَيْنَمَا عُطْلَتُكُمُ الجُمُعَةُ وَالسَّبْتُ؛ وَفِي المَدْرَسَتَيْنِ يَحْتَرِمُ الطُّلَّابُ المُعَلِّمِينَ.', modelEn: 'We have uniform and a Sat–Sun weekend; yours is Fri–Sat — in both, students respect teachers.' },
        { ex: 'كَيْفَ اسْتَعْدَدْتِ لِامْتِحَانَاتِكِ؟', task: 'Narrate revision methods (past).', help: 'أَوَّلًا … ثُمَّ … بِالإِضَافَةِ إِلَى ذٰلِكَ …', model: 'أَوَّلًا، وَضَعْتُ جَدْوَلًا لِلْمُرَاجَعَةِ، ثُمَّ حَلَلْتُ امْتِحَانَاتٍ سَابِقَةً؛ بِالإِضَافَةِ إِلَى ذٰلِكَ، كُنْتُ أُرَاجِعُ مَعَ صَدِيقَتِي كُلَّ يَوْمِ أَحَدٍ.', modelEn: 'A revision timetable, past papers, and revising with a friend every Sunday.' },
        { ex: 'وَمَاذَا سَتَدْرُسِينَ بَعْدَ المَدْرَسَةِ؟', task: 'Plan with aspiration and purpose.', help: 'سَأَدْرُسُ … لِأَنِّي أَطْمَحُ إِلَى أَنْ …', model: 'سَأَدْرُسُ الصَّيْدَلَةَ، لِأَنِّي أَطْمَحُ إِلَى أَنْ أَعْمَلَ فِي مُنَظَّمَةٍ صِحِّيَّةٍ دُوَلِيَّةٍ.', modelEn: 'Pharmacy — I aspire to work for an international health organisation.' },
        { unexpected: true, ex: 'وَإِذَا لَمْ تُقْبَلِي فِي الصَّيْدَلَةِ؟', task: 'Answer the unexpected question (plan B).', help: 'إِذَا لَمْ أُقْبَلْ، فَسَوْفَ …', model: 'إِذَا لَمْ أُقْبَلْ، فَسَوْفَ أَدْرُسُ الكِيمْيَاءَ سَنَةً، ثُمَّ أُحَاوِلُ مِنْ جَدِيدٍ.', modelEn: 'If I’m not accepted, I’ll study chemistry for a year and try again.' },
      ],
      girl: '(model is f.; a boy: يَوْمُكَ · مَدْرَسَتِكَ · اسْتَعْدَدْتَ · سَتَدْرُسُ · تُقْبَلْ · صَدِيقِي)',
      notes: 'Develop: times + thumma (D · L03), baynamā + kilā / fī al-madrasatayni (E · L09), a past sequence with kuntu + present (D · L04), sa- + aṭmaḥu ilā an (D · L10), idhā lam + passive jussive (uqbal) … fa-sawfa.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a youth panel', title: 'Role play D — Should young people study or work abroad?', ar: 'الدِّرَاسَةُ وَالعَمَلُ فِي الخَارِجِ', you: 'a student panellist', them: 'the panel chair',
      tasks: [
        { ex: 'هَلْ تَنْصَحِينَ الشَّبَابَ بِالدِّرَاسَةِ فِي الخَارِجِ؟', task: 'Give a balanced thesis.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، يَتَعَلَّمُ الطَّالِبُ لُغَةً وَثَقَافَةً جَدِيدَتَيْنِ وَيَعْتَمِدُ عَلَى نَفْسِهِ، وَمِنْ نَاحِيَةٍ أُخْرَى، قَدْ يَشْعُرُ بِالوَحْدَةِ، وَتَكُونُ التَّكَالِيفُ مُرْتَفِعَةً.', modelEn: 'Students learn a new language and culture and become independent; yet they may feel lonely and costs are high.' },
        { ex: 'مَا الَّذِي يَطْلُبُهُ أَصْحَابُ العَمَلِ اليَوْمَ؟', task: 'List skills with linkers and a relative clause.', help: 'أَوَّلًا … بِالإِضَافَةِ إِلَى ذٰلِكَ … ؛ وَالمُوَظَّفُ الَّذِي …', model: 'أَوَّلًا، اللُّغَاتُ وَالتَّوَاصُلُ؛ بِالإِضَافَةِ إِلَى ذٰلِكَ، القُدْرَةُ عَلَى العَمَلِ مَعَ أَشْخَاصٍ مِنْ ثَقَافَاتٍ مُخْتَلِفَةٍ؛ فَالمُوَظَّفُ الَّذِي عَاشَ فِي الخَارِجِ يَفْهَمُ ذٰلِكَ بِسُهُولَةٍ.', modelEn: 'Languages and communication; also working with people of other cultures — someone who has lived abroad understands this easily.' },
        { ex: 'هَلْ عِشْتِ تَجْرِبَةً مِثْلَ هٰذِهِ؟', task: 'Narrate an experience with a result.', help: 'عِنْدَمَا … كُنْتُ … فَـ…', model: 'عِنْدَمَا شَارَكْتُ فِي تَبَادُلٍ فِي عَمَّانَ، كُنْتُ أَخْجَلُ مِنْ لَهْجَتِي فِي البِدَايَةِ، ثُمَّ صِرْتُ أَتَكَلَّمُ بِثِقَةٍ، فَتَحَسَّنَتْ دَرَجَتِي فِي العَرَبِيَّةِ كَثِيرًا.', modelEn: 'On an exchange in Amman I was shy of my accent at first, then spoke confidently — my Arabic grade rose a lot.' },
        { ex: 'لٰكِنَّ بَعْضَ الأُسَرِ تَخَافُ عَلَى أَبْنَائِهَا.', task: 'Concede and reassure.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ … ؛ لِذٰلِكَ …', model: 'صَحِيحٌ أَنَّ القَلَقَ طَبِيعِيٌّ، غَيْرَ أَنَّ بَرَامِجَ التَّبَادُلِ المُنَظَّمَةَ آمِنَةٌ، وَالتَّوَاصُلَ اليَوْمِيَّ سَهْلٌ؛ لِذٰلِكَ أَنْصَحُ بِالبَدْءِ بِرِحْلَةٍ قَصِيرَةٍ.', modelEn: 'Worry is natural, but organised exchanges are safe and daily contact is easy — so start with a short trip.' },
        { unexpected: true, ex: 'لَوِ اسْتَطَعْتِ أَنْ تَعْمَلِي فِي أَيِّ بَلَدٍ، فَأَيُّهَا تَخْتَارِينَ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوِ اسْتَطَعْتُ، لَاخْتَرْتُ … لِأَنَّ …', model: 'لَوِ اسْتَطَعْتُ، لَاخْتَرْتُ الإِمَارَاتِ، لِأَنَّهَا تَجْمَعُ بَيْنَ اللُّغَةِ العَرَبِيَّةِ وَبِيئَةِ عَمَلٍ دُوَلِيَّةٍ فِيهَا أَكْثَرُ مِنْ مِئَتَيْ جِنْسِيَّةٍ.', modelEn: 'The UAE — Arabic plus an international workplace with over two hundred nationalities.' },
      ],
      girl: '(model is f.; a boy: تَنْصَحُ · عِشْتَ · اسْتَطَعْتَ · تَعْمَلَ · تَخْتَارُ)',
      notes: 'Stretch: a balanced thesis with dual agreement (jadīdatayni), linkers + alladhī (D · L08, E · L02), a past narrative with kuntu + ṣirtu + fa- (E · L08), a concession + anṣaḥu bi- (D · L04), law … la- + a relative clause and a number (E · L10).',
      modelFoot: 'Stretch: Topics D and E together — balance, employability, a narrated exchange, reassurance and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'دِرَاسَتِي وَمُسْتَقْبَلِي', aim: 'one full sentence per question',
      qs: [
        { q: 'مَا مَادَّتُكَ المُفَضَّلَةُ؟', en: 'What is your favourite subject?', start: 'مَادَّتِي المُفَضَّلَةُ … لِأَنَّ …', model: 'مَادَّتِيَ المُفَضَّلَةُ الرِّيَاضِيَّاتُ، لِأَنَّهَا سَهْلَةٌ.', modelEn: 'Maths — it’s easy.' },
        { q: 'مَاذَا تُرِيدُ أَنْ تَعْمَلَ فِي المُسْتَقْبَلِ؟', en: 'What do you want to do in future?', start: 'أُرِيدُ أَنْ أَكُونَ …', model: 'أُرِيدُ أَنْ أَكُونَ مُحَامِيًا.', modelEn: 'A lawyer.' },
        { q: 'كَمْ لُغَةً تَتَكَلَّمُ؟', en: 'How many languages do you speak?', start: 'أَتَكَلَّمُ …', model: 'أَتَكَلَّمُ لُغَتَيْنِ: الإِنْجْلِيزِيَّةَ وَالعَرَبِيَّةَ.', modelEn: 'Two: English and Arabic.' },
        { q: 'هَلْ سَافَرْتَ إِلَى الخَارِجِ؟', en: 'Have you travelled abroad?', start: 'نَعَمْ، سَافَرْتُ إِلَى …', model: 'نَعَمْ، سَافَرْتُ إِلَى مِصْرَ.', modelEn: 'Yes, to Egypt.' },
        { q: 'مَا عَادَةٌ تُحِبُّهَا فِي ثَقَافَتِكَ؟', en: 'What custom do you love in your culture?', start: 'أُحِبُّ …', model: 'أُحِبُّ الضِّيَافَةَ، لِأَنَّنَا نُرَحِّبُ بِكُلِّ ضَيْفٍ.', modelEn: 'Hospitality — we welcome every guest.' },
      ],
      foot: 'Core: one full sentence for every question — school, work, languages, travel and culture. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a reason = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'مِنَ المَدْرَسَةِ إِلَى العَالَمِ', aim: 'two or three sentences, with linkers and two time frames',
      qs: [
        { q: 'كَيْفَ تَغَيَّرَتْ دِرَاسَتُكَ مُنْذُ الابْتِدَائِيَّةِ؟', en: 'How has your study changed since primary?', start: 'كُنْتُ … أَمَّا الآنَ فَـ…', model: 'كُنْتُ أَدْرُسُ مَوَادَّ قَلِيلَةً، أَمَّا الآنَ فَأَدْرُسُ تِسْعَ مَوَادَّ، وَسَأَخْتَارُ ثَلَاثًا فَقَطْ فِي السَّنَةِ القَادِمَةِ.', modelEn: 'Few subjects then; nine now — and I’ll choose only three next year.' },
        { q: 'مَا الصِّفَاتُ الَّتِي يَحْتَاجُ إِلَيْهَا المُوَظَّفُ الجَيِّدُ؟', en: 'What qualities does a good employee need?', start: 'أَوَّلًا … بِالإِضَافَةِ إِلَى ذٰلِكَ …', model: 'أَوَّلًا، الدِّقَّةُ وَاحْتِرَامُ الوَقْتِ؛ بِالإِضَافَةِ إِلَى ذٰلِكَ، العَمَلُ الجَمَاعِيُّ وَاللُّطْفُ مَعَ الزُّمَلَاءِ.', modelEn: 'Precision and punctuality; also teamwork and kindness to colleagues.' },
        { q: 'كَيْفَ تُسَاعِدُكَ اللُّغَاتُ فِي حَيَاتِكَ؟', en: 'How do languages help you?', start: 'تُسَاعِدُنِي … ؛ مَثَلًا …', model: 'تُسَاعِدُنِي فِي التَّوَاصُلِ مَعَ أَقَارِبِي وَفِي العَمَلِ؛ مَثَلًا، تَرْجَمْتُ لِسَائِحٍ عَرَبِيٍّ فِي المَحَطَّةِ الأُسْبُوعَ المَاضِيَ.', modelEn: 'With relatives and at work — last week I translated for an Arab tourist at the station.' },
        { q: 'قَارِنْ بَيْنَ ثَقَافَتَيْنِ تَعْرِفُهُمَا.', en: 'Compare two cultures you know.', start: 'فِي … بَيْنَمَا فِي … ؛ وَلٰكِنَّ …', model: 'فِي بَيْتِنَا نَتَعَشَّى مُتَأَخِّرِينَ مَعَ كُلِّ الأُسْرَةِ، بَيْنَمَا يَتَعَشَّى أَصْدِقَائِي الإِنْجْلِيزُ مُبَكِّرًا غَالِبًا؛ وَلٰكِنَّ الثَّقَافَتَيْنِ تُقَدِّرَانِ العَائِلَةَ.', modelEn: 'We dine late as a family; my English friends usually early — but both value family.' },
        { q: 'أَيْنَ تَرَى نَفْسَكَ بَعْدَ عَشْرِ سَنَوَاتٍ؟', en: 'Where do you see yourself in ten years?', start: 'أَطْمَحُ إِلَى أَنْ … وَإِذَا …', model: 'أَطْمَحُ إِلَى أَنْ أَعْمَلَ مُهَنْدِسًا فِي شَرِكَةٍ دُوَلِيَّةٍ، وَإِذَا نَجَحْتُ، فَسَأَعْمَلُ سَنَتَيْنِ فِي الخَلِيجِ.', modelEn: 'An engineer at an international firm — and if I succeed, two years in the Gulf.' },
      ],
      foot: 'Develop: two or three sentences — linkers, a comparison or example, and two time frames.',
      modelFoot: 'Linkers + an example + two time frames = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'العَمَلُ فِي عَالَمٍ مُتَّصِلٍ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلِ الشَّهَادَاتُ أَهَمُّ مِنَ الخِبْرَةِ؟', en: 'Are qualifications more important than experience?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الشَّهَادَاتِ تَفْتَحُ الأَبْوَابَ، غَيْرَ أَنَّ الخِبْرَةَ هِيَ الَّتِي تُبْقِيهَا مَفْتُوحَةً؛ لِذٰلِكَ أَحْرِصُ عَلَى الاثْنَتَيْنِ.', modelEn: 'Qualifications open doors, but experience keeps them open — so I work on both.' },
        { q: 'هَلْ يَجِبُ أَنْ يَتَعَلَّمَ كُلُّ طَالِبٍ لُغَةً ثَانِيَةً؟', en: 'Should every student learn a second language?', start: 'أَرَى أَنَّ … لِأَنَّ … مِمَّا …', model: 'أَرَى أَنَّ ذٰلِكَ ضَرُورِيٌّ، لِأَنَّ أَصْحَابَ العَمَلِ يَطْلُبُونَ اللُّغَاتِ، مِمَّا يَجْعَلُهَا مِفْتَاحًا لِلْوَظَائِفِ الدُّوَلِيَّةِ.', modelEn: 'Essential — employers want languages, making them a key to international jobs.' },
        { q: 'كَيْفَ غَيَّرَتِ العَوْلَمَةُ عَالَمَ العَمَلِ؟', en: 'How has globalisation changed the world of work?', start: 'كَانَ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَ النَّاسُ يَعْمَلُونَ فِي مَدِينَتِهِمْ طُولَ حَيَاتِهِمْ، أَمَّا اليَوْمَ فَيَعْمَلُ كَثِيرُونَ مَعَ زُمَلَاءَ فِي قَارَّاتٍ أُخْرَى دُونَ أَنْ يُغَادِرُوا بُيُوتَهُمْ.', modelEn: 'People worked in their city all their lives; today many work with colleagues on other continents without leaving home.' },
        { q: 'مَا دَوْرُ المَدْرَسَةِ فِي إِعْدَادِنَا لِلْعَالَمِ؟', en: 'What is school’s role in preparing us for the world?', start: 'لَيْسَ … فَقَطْ، بَلْ …', model: 'لَيْسَ دَوْرُهَا تَعْلِيمَ المَعْلُومَاتِ فَقَطْ، بَلْ تَعْلِيمُنَا كَيْفَ نَعْمَلُ مَعَ مَنْ يَخْتَلِفُ عَنَّا، وَكَيْفَ نَتَعَلَّمُ طُولَ الحَيَاةِ.', modelEn: 'Not only teaching facts, but how to work with people unlike us and how to keep learning for life.' },
        { q: 'لَوْ عُرِضَتْ عَلَيْكَ وَظِيفَةٌ فِي بَلَدٍ بَعِيدٍ، هَلْ تَقْبَلُهَا؟', en: 'If you were offered a job in a distant country, would you accept?', start: 'لَوْ عُرِضَتْ عَلَيَّ …، لَـ… بِشَرْطِ أَنْ …', model: 'لَوْ عُرِضَتْ عَلَيَّ، لَقَبِلْتُهَا بِشَرْطِ أَنْ تَكُونَ لِمُدَّةٍ مَحْدُودَةٍ، لِأَنِّي أُرِيدُ أَنْ أَكْسِبَ الخِبْرَةَ ثُمَّ أَعُودَ لِأَخْدُمَ مُجْتَمَعِي.', modelEn: 'I’d accept for a limited time — to gain experience, then return to serve my community.' },
      ],
      foot: 'Stretch: a concession, an opinion with mimmā, kāna … ammā al-yawma fa-, laysa … faqaṭ bal, and a passive law … la-.',
      modelFoot: 'Stretch: alladhī as subject, mimmā, dūna an, laysa … bal, bi-sharṭi an and law + passive — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I answered every role-play task, including the unexpected one.' },
    { route: 'core', text: 'I used the right form of professions (m. / f.) and languages.' },
    { route: 'develop', text: 'I used formal Arabic in the interview (yasurrunī, awaddu an).' },
    { route: 'develop', text: 'I compared cultures with respect (baynamā, ghāliban).' },
    { route: 'stretch', text: 'I gave a balanced view with a concession and law … la-.' },
  ],
};
speak.RP[1].tasks[0].help = 'صَبَاحَ النُّورِ. أَوَدُّ أَنْ أَتَقَدَّمَ لِوَظِيفَةِ …';
speak.RP[2].tasks[4].help = 'إِذَا لَمْ أُقْبَلْ، فَسَوْفَ أَدْرُسُ …';
speak.RP[3].tasks[2].help = 'عِنْدَمَا … كُنْتُ … ثُمَّ صِرْتُ … فَتَحَسَّنَتْ …';
speak.RP[3].tasks[4].help = 'لَوِ اسْتَطَعْتُ، لَاخْتَرْتُ … لِأَنَّ …';
speak.CONV[1].qs[0].start = 'كُنْتُ … أَمَّا الآنَ فَأَدْرُسُ …';
speak.CONV[2].qs[2].start = 'كَانَ النَّاسُ … أَمَّا اليَوْمَ فَيَعْمَلُ …';
speak.CONV[2].qs[4].start = 'لَوْ عُرِضَتْ عَلَيَّ، لَقَبِلْتُهَا بِشَرْطِ أَنْ …';

const Q2_CORE = `مَرْحَبًا يَا هَالَةُ،
كَيْفَ حَالُكِ؟ أَنَا الآنَ فِي أُسْبُوعِ خِبْرَةِ العَمَلِ فِي المَرْكَزِ الثَّقَافِيِّ العَرَبِيِّ فِي لَنْدَنَ! أَعْمَلُ مِنَ التَّاسِعَةِ إِلَى الثَّالِثَةِ. أُسَاعِدُ فِي الاسْتِقْبَالِ، وَأُتَرْجِمُ لِلزُّوَّارِ مِنَ العَرَبِيَّةِ إِلَى الإِنْجْلِيزِيَّةِ. زُمَلَائِي مِنْ مِصْرَ وَالمَغْرِبِ وَبَرِيطَانْيَا، وَهُمْ لُطَفَاءُ جِدًّا. أَمْسِ نَظَّمْنَا أُمْسِيَةً لِلشِّعْرِ العَرَبِيِّ، وَحَضَرَهَا خَمْسُونَ شَخْصًا. العَمَلُ مُتْعِبٌ، وَمَعَ ذٰلِكَ أُحِبُّهُ كَثِيرًا، لِأَنِّي أَسْتَخْدِمُ لُغَتَيَّ. فِي المُسْتَقْبَلِ أُرِيدُ أَنْ أَعْمَلَ مُتَرْجِمَةً. وَأَنْتِ، أَيْنَ سَتَعْمَلِينَ فِي خِبْرَةِ العَمَلِ؟
مَعَ السَّلَامَةِ،
رُقَيَّةُ`;
const Q2_FULL = `عَزِيزَتِي هَالَةُ،
أَكْتُبُ إِلَيْكِ فِي نِهَايَةِ أُسْبُوعِي الأَوَّلِ مِنْ خِبْرَةِ العَمَلِ فِي المَرْكَزِ الثَّقَافِيِّ العَرَبِيِّ، وَهُوَ أُسْبُوعٌ لَمْ أَتَوَقَّعْ أَنْ يَكُونَ بِهٰذَا الغِنَى! فَبَيْنَمَا كُنْتُ أَظُنُّ أَنَّنِي سَأُرَتِّبُ الأَوْرَاقَ فَقَطْ، طَلَبَ مِنِّي المُدِيرُ أَنْ أُتَرْجِمَ لِلزُّوَّارِ، وَأَنْ أُسَاعِدَ فِي تَنْظِيمِ أُمْسِيَةٍ لِلشِّعْرِ حَضَرَهَا خَمْسُونَ شَخْصًا. أَمَّا زُمَلَائِي فَمِنْ أَرْبَعِ جِنْسِيَّاتٍ، وَتَعَلَّمْتُ مِنْهُمْ أَنَّ الاحْتِرَامَ وَالدِّقَّةَ لُغَةٌ يَفْهَمُهَا الجَمِيعُ. صَحِيحٌ أَنَّ اليَوْمَ طَوِيلٌ، غَيْرَ أَنَّ هٰذِهِ التَّجْرِبَةَ أَكَّدَتْ لِي أَنَّ التَّرْجَمَةَ هِيَ المِهْنَةُ الَّتِي أُرِيدُهَا. وَإِذَا قُبِلْتُ فِي الجَامِعَةِ، فَسَأَدْرُسُ اللُّغَاتِ وَالتَّرْجَمَةَ. أَخْبِرِينِي: أَيْنَ قَضَيْتِ أُسْبُوعَكِ؟
بِمَحَبَّةٍ،
رُقَيَّةُ`;
const Q3A_CORE = `أَوَّلًا، أَنَا الآنَ فِي الصَّفِّ الحَادِي عَشَرَ، وَأَدْرُسُ تِسْعَ مَوَادَّ. مَادَّتِي المُفَضَّلَةُ العَرَبِيَّةُ، لِأَنَّهَا لُغَةُ عَائِلَتِي. أُحِبُّ الفَرَنْسِيَّةَ أَيْضًا، لٰكِنَّ القَوَاعِدَ صَعْبَةٌ. أُرَاجِعُ كُلَّ يَوْمٍ سَاعَتَيْنِ فِي المَكْتَبَةِ، لِأَنَّ الامْتِحَانَاتِ قَرِيبَةٌ.
بِالإِضَافَةِ إِلَى ذٰلِكَ، أَتَكَلَّمُ ثَلَاثَ لُغَاتٍ: الإِنْجْلِيزِيَّةَ وَالعَرَبِيَّةَ وَالأُرْدِيَّةَ. فِي البَيْتِ أَتَكَلَّمُ الأُرْدِيَّةَ مَعَ جَدَّتِي، وَفِي المَدْرَسَةِ الإِنْجْلِيزِيَّةَ. فِي الصَّيْفِ المَاضِي زُرْتُ الأُرْدُنَّ فِي تَبَادُلٍ ثَقَافِيٍّ، وَأَعْجَبَنِي كَرَمُ النَّاسِ هُنَاكَ.
فِي الشَّهْرِ المَاضِي قَضَيْتُ أُسْبُوعًا فِي خِبْرَةِ عَمَلٍ فِي مَرْكَزٍ ثَقَافِيٍّ عَرَبِيٍّ. كُنْتُ أُتَرْجِمُ لِلزُّوَّارِ، وَأُسَاعِدُ فِي الاسْتِقْبَالِ. كَانَ العَمَلُ مُتْعِبًا، وَمَعَ ذٰلِكَ كَانَ مُمْتِعًا جِدًّا.
لِذٰلِكَ أَطْمَحُ إِلَى أَنْ أَعْمَلَ مُتَرْجِمَةً فِي مُنَظَّمَةٍ دُوَلِيَّةٍ. سَأَدْرُسُ اللُّغَاتِ فِي الجَامِعَةِ. وَإِذَا لَمْ أُقْبَلْ، فَسَأَدْرُسُ العَرَبِيَّةَ فِي مَعْهَدٍ سَنَةً، ثُمَّ أُحَاوِلُ مِنْ جَدِيدٍ بِثِقَةٍ أَكْبَرَ.`;
const Q3A_FULL = `حِينَ سَأَلَتْنِي المُرْشِدَةُ المِهْنِيَّةُ عَنْ أَهَمِّ مَهَارَاتِي، لَمْ أَذْكُرِ الرِّيَاضِيَّاتِ أَوِ العُلُومَ، بَلْ قُلْتُ: "أَعِيشُ بِثَلَاثِ لُغَاتٍ". فَأَنَا أُفَكِّرُ بِالإِنْجْلِيزِيَّةِ، وَأُصَلِّي بِالعَرَبِيَّةِ، وَأُكَلِّمُ جَدَّتِي بِالأُرْدِيَّةِ الَّتِي حَمَلَتْهَا مَعَهَا مِنْ لَاهُورَ.
وَقَدِ اخْتَرْتُ مَوَادِّي لِلْمَرْحَلَةِ القَادِمَةِ عَلَى هٰذَا الأَسَاسِ: العَرَبِيَّةَ وَالفَرَنْسِيَّةَ وَالتَّارِيخَ. وَمَعَ أَنَّ الفَرَنْسِيَّةَ أَصْعَبُ مَوَادِّي، فَإِنَّ تَنْظِيمَ المُرَاجَعَةِ وَحَلَّ الامْتِحَانَاتِ السَّابِقَةِ جَعَلَانِي أَتَقَدَّمُ فِيهَا بِسُرْعَةٍ.
غَيْرَ أَنَّ أَهَمَّ مَا عَلَّمَنِي كَانَ خَارِجَ الصَّفِّ؛ فَفِي تَبَادُلٍ ثَقَافِيٍّ فِي عَمَّانَ اكْتَشَفْتُ أَنَّ اللُّغَةَ لَيْسَتْ كَلِمَاتٍ فَحَسْبُ، بَلْ عَادَاتٌ وَإِيمَاءَاتٌ وَطَرِيقَةُ تَفْكِيرٍ. ثُمَّ أَكَّدَتْ لِي خِبْرَةُ العَمَلِ فِي مَرْكَزٍ ثَقَافِيٍّ أَنَّ المُتَرْجِمَ جِسْرٌ بَيْنَ الثَّقَافَاتِ لَا مُجَرَّدُ قَامُوسٍ.
لِذٰلِكَ أَطْمَحُ إِلَى دِرَاسَةِ التَّرْجَمَةِ، ثُمَّ العَمَلِ فِي مُنَظَّمَةٍ دُوَلِيَّةٍ. صَحِيحٌ أَنَّ المُنَافَسَةَ شَدِيدَةٌ، غَيْرَ أَنَّ لِي خُطَّةً بَدِيلَةً: أَنْ أَدْرُسَ اللُّغَاتِ فِي مَعْهَدٍ ثُمَّ أُحَاوِلَ مِنْ جَدِيدٍ. وَلَوْ سَأَلَتْنِي المُرْشِدَةُ اليَوْمَ، لَقُلْتُ: "أُرِيدُ أَنْ أُسَاعِدَ النَّاسَ عَلَى أَنْ يَفْهَمُوا بَعْضَهُمْ".`;
const Q3B_FULL = `فِي إِعْلَانَاتِ الوَظَائِفِ اليَوْمَ، نَادِرًا مَا نَجِدُ وَظِيفَةً دُوَلِيَّةً لَا تَطْلُبُ لُغَةً ثَانِيَةً عَلَى الأَقَلِّ، خُصُوصًا فِي المُدُنِ الكَبِيرَةِ كَلَنْدَنَ وَدُبَيّ. فَهَلْ يَجِبُ أَنْ يَتَعَلَّمَ كُلُّ طَالِبٍ لُغَتَيْنِ لِيَنْجَحَ فِي عَالَمِ العَمَلِ؟
مِنْ نَاحِيَةٍ، تَفْتَحُ اللُّغَاتُ لِلشَّبَابِ أَبْوَابًا كَثِيرَةً، كَالتَّرْجَمَةِ وَالسِّيَاحَةِ وَالتِّجَارَةِ الدُّوَلِيَّةِ، كَمَا أَنَّهَا تُعَلِّمُ الطَّالِبَ احْتِرَامَ الثَّقَافَاتِ الأُخْرَى. وَمِنْ نَاحِيَةٍ أُخْرَى، يَرَى بَعْضُ النَّاسِ أَنَّ التَّرْجَمَةَ الآلِيَّةَ صَارَتْ كَافِيَةً وَسَرِيعَةً، وَأَنَّ المَهَارَاتِ التِّقْنِيَّةَ أَهَمُّ، كَالبَرْمَجَةِ وَتَحْلِيلِ البَيَانَاتِ.
وَقَدْ رَأَيْتُ أَثَرَ اللُّغَةِ بِنَفْسِي الشَّهْرَ المَاضِيَ؛ فَفِي خِبْرَةِ العَمَلِ اخْتَارَنِي المُدِيرُ لِاسْتِقْبَالِ وَفْدٍ مِنَ الأُرْدُنِّ لِأَنِّي أَتَكَلَّمُ العَرَبِيَّةَ، بَيْنَمَا كَانَ زُمَلَائِي يَعْتَمِدُونَ عَلَى التَّطْبِيقَاتِ، فَشَعَرَ الضُّيُوفُ بِالرَّاحَةِ مَعِي أَكْثَرَ، وَشَكَرُونِي بِالعَرَبِيَّةِ فِي نِهَايَةِ الزِّيَارَةِ.
صَحِيحٌ أَنَّ التِّكْنُولُوجْيَا تُسَاعِدُ، غَيْرَ أَنَّهَا لَا تَبْنِي الثِّقَةَ كَمَا يَبْنِيهَا الكَلَامُ المُبَاشِرُ بِلُغَةِ الآخَرِ. فَإِذَا تَعَلَّمَ الطُّلَّابُ لُغَتَيْنِ، فَسَيَدْخُلُونَ عَالَمَ العَمَلِ بِمِفْتَاحَيْنِ بَدَلًا مِنْ مِفْتَاحٍ وَاحِدٍ، وَبِقُلُوبٍ أَكْثَرَ انْفِتَاحًا.`;

const write = {
  ...base,
  focus: 'Final-revision Paper 4 practice on Topics D and E: fill in a summer-job application form, write an email about work experience at an Arab cultural centre, and write an extended piece about your studies, languages and future or about whether every student needs two languages to succeed at work. Exam skills: mix three time frames and finish with a plan B.',
  lift: [
    { ar: 'أُتَرْجِمُ لِلزُّوَّارِ مِنَ العَرَبِيَّةِ إِلَى الإِنْجْلِيزِيَّةِ', en: 'I translate for visitors from Arabic into English' },
    { ar: 'العَمَلُ مُتْعِبٌ، وَمَعَ ذٰلِكَ أُحِبُّهُ كَثِيرًا', en: 'the work is tiring; nevertheless I love it' },
    { ar: 'إِذَا لَمْ أُقْبَلْ، فَسَأَدْرُسُ …', en: 'if I am not accepted, I will study …' },
  ],
  checkTip: 'EXAM CHECK (2 min): every bullet answered? greeting and closing? Then check Topics D and E accuracy — feminine professions for a girl (mutarjima, ṭabība), languages are feminine (al-ʿarabiyya), numbers + nouns (khamsūna shakhṣan, tisʿa mawādd), idhā + past … fa-sa- (never idhā + sa-), and respectful comparison (baynamā, ghāliban).',
  FORM: {
    title: 'Summer-job application form', ar: 'اسْتِمَارَةُ طَلَبِ وَظِيفَةٍ صَيْفِيَّةٍ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'رُقَيَّةُ خَانُ', modelEn: 'Ruqayya Khan' },
      { core: true, ar: 'المَدْرَسَةُ وَالصَّفُّ', en: 'School and year', model: 'مَدْرَسَةُ المَدِينَةِ، الحَادِي عَشَرَ', modelEn: 'Al Madina School, Year 11' },
      { core: true, ar: 'الوَظِيفَةُ المَطْلُوبَةُ', en: 'Job applied for', model: 'مُوَظَّفَةُ اسْتِقْبَالٍ', modelEn: 'receptionist' },
      { core: true, ar: 'اللُّغَاتُ', en: 'Languages', model: 'الإِنْجْلِيزِيَّةُ وَالعَرَبِيَّةُ وَالأُرْدِيَّةُ', modelEn: 'English, Arabic and Urdu' },
      { core: true, ar: 'صِفَتَانِ', en: 'Two qualities', model: 'مُنَظَّمَةٌ وَصَبُورَةٌ', modelEn: 'organised and patient' },
      { core: true, ar: 'الأَيَّامُ المُتَاحَةُ', en: 'Days available', model: 'مِنَ الأَحَدِ إِلَى الخَمِيسِ', modelEn: 'Sunday to Thursday' },
      { ar: 'خِبْرَةٌ سَابِقَةٌ', en: 'Previous experience', model: 'أُسْبُوعٌ فِي مَرْكَزٍ ثَقَافِيٍّ', modelEn: 'a week at a cultural centre' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُنَاسِبُكِ الوَظِيفَةُ؟', en: 'ONE sentence: why the job suits you', model: 'تُنَاسِبُنِي لِأَنِّي أَتَكَلَّمُ ثَلَاثَ لُغَاتٍ، وَأُحِبُّ مُسَاعَدَةَ النَّاسِ مِنْ ثَقَافَاتٍ مُخْتَلِفَةٍ.', modelEn: 'Because I speak three languages and love helping people from different cultures.' },
    ],
    foot: 'One word or a short phrase for each box — feminine forms for a female applicant; the last box is a full sentence with li-annī.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Boxes recycle Topic D (job, qualities, experience) and Topic E (languages, cultures). A boy writes مُوَظَّفُ اسْتِقْبَالٍ · مُنَظَّمٌ وَصَبُورٌ and reads تُنَاسِبُكَ.',
  },
  Q2: {
    short: 'an email about work experience', title: 'Question 2: my work-experience week', ar: 'أُسْبُوعُ خِبْرَةِ العَمَلِ',
    task: 'Write an email in Arabic to a friend of about 80–90 words. You must include: • where you are doing work experience and your hours • what you do there and who your colleagues are • something that happened and your opinion of the work • your plans for the future, and a question for your friend.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Times, a nationality and a number.', 'Past, present AND future.', 'About 80–90 words.'],
    phrases: [['أَنَا فِي أُسْبُوعِ خِبْرَةِ العَمَلِ فِي …', 'I am on work experience at …'], ['أَعْمَلُ مِنَ … إِلَى …', 'I work from … to …'], ['أَمْسِ نَظَّمْنَا … وَحَضَرَهَا …', 'yesterday we organised … attended by …'], ['فِي المُسْتَقْبَلِ أُرِيدُ أَنْ أَعْمَلَ …', 'in the future I want to work as …']],
    rubric: [
      ['task', 'اكْتُبِي رِسَالَةً إِلَى صَدِيقَتِكِ عَنْ أُسْبُوعِ خِبْرَةِ العَمَلِ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about your work-experience week (80–90 words).'],
      ['1', 'أَيْنَ تَعْمَلِينَ؟ وَمَا سَاعَاتُ العَمَلِ؟', 'Where you work; your hours'],
      ['2', 'مَاذَا تَفْعَلِينَ؟ وَمَنْ زُمَلَاؤُكِ؟', 'What you do; who your colleagues are'],
      ['3', 'مَاذَا حَدَثَ؟ وَمَا رَأْيُكِ فِي العَمَلِ؟', 'Something that happened; your opinion'],
      ['4', 'مَا خِطَطُكِ لِلْمُسْتَقْبَلِ؟ وَاسْأَلِي صَدِيقَتَكِ سُؤَالًا.', 'Future plans; a question'],
    ],
    qwords: 'أَيْنَ (where) · مَا سَاعَاتُ (what hours → مِنَ … إِلَى …) · مَنْ زُمَلَاؤُكِ (who → nisba) · مَاذَا حَدَثَ (PAST) · خِطَطُكِ (FUTURE)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكِ؟', 'Hello …, how are you?'],
      ['1', 'أَنَا فِي أُسْبُوعِ خِبْرَةِ العَمَلِ فِي ______ . أَعْمَلُ مِنَ ______ إِلَى ______ .', 'I’m on work experience at … I work from … to …'],
      ['2', 'أُسَاعِدُ فِي ______ . زُمَلَائِي مِنْ ______ .', 'I help with … My colleagues are from …'],
      ['3', 'أَمْسِ ______ . العَمَلُ ______ ، وَمَعَ ذٰلِكَ ______ .', 'Yesterday … The work is …; nevertheless …'],
      ['4', 'فِي المُسْتَقْبَلِ أُرِيدُ أَنْ ______ . وَأَنْتِ، ______ ؟', 'In future I want to … And you, …?'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Hala, how are you? I’m on my work-experience week at the Arab Cultural Centre in London! I work from nine to three. I help at reception and translate for visitors from Arabic into English. My colleagues are from Egypt, Morocco and Britain, and they’re very kind. Yesterday we organised an evening of Arabic poetry, and fifty people came. The work is tiring; nevertheless I love it, because I use both my languages. In future I want to be a translator. And you, where will you do your work experience? Goodbye, Ruqayya.”',
      find: ['أَعْمَلُ مِنَ التَّاسِعَةِ', 'زُمَلَائِي مِنْ مِصْرَ', 'وَمَعَ ذٰلِكَ أُحِبُّهُ', 'أُرِيدُ أَنْ أَعْمَلَ مُتَرْجِمَةً'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Hala, I’m writing at the end of my first work-experience week at the Arab Cultural Centre — a week far richer than I expected! While I thought I’d only be filing papers, the director asked me to interpret for visitors and help organise a poetry evening attended by fifty people. As for my colleagues, they’re of four nationalities, and they taught me that respect and precision are a language everyone understands. The days are long, but this experience has confirmed that translation is the career I want. If I’m accepted at university, I’ll study languages and translation. Tell me: where did you spend your week? With love, Ruqayya.”',
      find: ['لَمْ أَتَوَقَّعْ أَنْ', 'فَبَيْنَمَا كُنْتُ أَظُنُّ', 'لُغَةٌ يَفْهَمُهَا الجَمِيعُ', 'إِذَا قُبِلْتُ … فَسَأَدْرُسُ'],
    },
  },
  Q3: {
    a: { title: 'مُسْتَقْبَلِي: الدِّرَاسَةُ وَاللُّغَاتُ وَالعَمَلُ', en: 'My future: studies, languages and work', bullets: 'دِرَاسَتُكَ الآنَ وَمَوَادُّكَ · اللُّغَاتُ وَالثَّقَافَاتُ فِي حَيَاتِكَ · تَجْرِبَةُ عَمَلٍ أَوْ سَفَرٍ · طُمُوحَاتُكَ وَخُطَّتُكَ البَدِيلَةُ', bulletsEn: 'Your studies now and your subjects · languages and cultures in your life · a work or travel experience · your ambitions and plan B' },
    b: { title: 'هَلْ يَحْتَاجُ كُلُّ طَالِبٍ إِلَى لُغَتَيْنِ لِيَنْجَحَ فِي العَمَلِ؟', en: 'Does every student need two languages to succeed at work?', bullets: 'المَوْضُوعُ · فَوَائِدُ اللُّغَاتِ وَالآرَاءُ الأُخْرَى · مِثَالٌ مِنْ تَجْرِبَتِكَ · رَأْيُكَ', bulletsEn: 'The issue · benefits of languages and other views · an example from your experience · your opinion' },
    plan: [
      'Studies — awwalan, anā al-āna fī …; adrusu …; māddatī al-mufaḍḍala … li-annahā …; urājiʿu …',
      'Languages + culture — bi-l-iḍāfati ilā dhālika, atakallamu …; fī al-bayti … wa-fī al-madrasati …; zurtu …',
      'Experience — fī ash-shahri al-māḍī qaḍaytu usbūʿan fī …; kuntu utarjimu …; kāna … wa-maʿa dhālika …',
      'Ambition + plan B — li-dhālika aṭmaḥu ilā an …; sa-adrusu …; idhā lam uqbal fa-sa- …; Stretch: laysat … bal, law … la-.',
    ],
    frames: [
      { ar: 'أَدْرُسُ تِسْعَ مَوَادَّ، وَأُرَاجِعُ كُلَّ يَوْمٍ.', en: 'present: nine subjects; I revise daily.' },
      { ar: 'كُنْتُ أُتَرْجِمُ لِلزُّوَّارِ فِي المَرْكَزِ.', en: 'past: I translated for visitors.' },
      { ar: 'أَطْمَحُ إِلَى أَنْ أَعْمَلَ مُتَرْجِمَةً.', en: 'future: I aspire to be a translator.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Year 11, nine subjects; Arabic is my favourite — my family’s language; French grammar is hard; I revise two hours a day → I speak English, Arabic and Urdu; I visited Jordan on an exchange and loved people’s generosity → a week’s work experience at an Arab cultural centre, translating and helping at reception: tiring, yet fun → I aspire to be a translator; if not accepted, a year at an institute, then try again.', find: ['أَوَّلًا', 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'كُنْتُ أُتَرْجِمُ', 'إِذَا لَمْ أُقْبَلْ'], notes: 'Core model: Topics D and E together — subjects and revision (D · L03–04), languages and an exchange (E · L02, L08), work experience with kuntu + present (D · L07), a feminine profession and aspiration (D · L06, L10), and idhā lam + passive jussive … fa-sa-.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'When the careers adviser asked my most important skill, I didn’t mention maths or science but said “I live in three languages”: I think in English, pray in Arabic and talk to grandma in the Urdu she brought from Lahore → I chose my next subjects on that basis — Arabic, French and history; though French is hardest, organised revision and past papers made me progress fast → but the most important lessons came outside class: on an exchange in Amman I found language is not just words but customs, gestures and a way of thinking; then work experience at a cultural centre confirmed a translator is a bridge between cultures, not just a dictionary → so I aspire to study translation and work for an international organisation; competition is fierce, but I have a plan B — study languages at an institute and try again; “if the adviser asked me today, I’d say: I want to help people understand each other”.', find: ['لَمْ أَذْكُرْ … بَلْ قُلْتُ', 'مَعَ أَنَّ … فَإِنَّ', 'لَيْسَتْ كَلِمَاتٍ فَحَسْبُ، بَلْ', 'لَوْ سَأَلَتْنِي … لَقُلْتُ'], notes: 'Full-mark model: an anecdote hook with lam … bal, three parallel present verbs, ʿalā hādhā al-asās, maʿa anna … fa-inna with a dual verb (jaʿalānī), laysat … fa-ḥasbu bal, lā mujarrad, a concession, and law … la- with an infinitive clause.' },
      { which: 'ب', level: 'Full', subtitle: 'languages and jobs', text: Q3B_FULL, en: 'In today’s job adverts we rarely find an international post that doesn’t require at least a second language, especially in big cities like London and Dubai — must every student learn two languages to succeed at work? → languages open many doors — translation, tourism, international trade — and teach respect for other cultures; yet some say machine translation is now enough and fast and technical skills like coding and data analysis matter more → I saw a language’s effect myself last month: on work experience the manager chose me to welcome a delegation from Jordan because I speak Arabic, while colleagues relied on apps — and the guests felt more at ease with me and thanked me in Arabic at the end → technology helps, but it doesn’t build trust as direct conversation in the other’s language does; “if students learn two languages, they will enter the world of work with two keys instead of one, and more open hearts”.', find: ['نَادِرًا مَا نَجِدُ', 'كَمَا أَنَّهَا تُعَلِّمُ', 'بَيْنَمَا كَانَ زُمَلَائِي', 'بِمِفْتَاحَيْنِ بَدَلًا مِنْ'], notes: 'Full-mark model for the Stretch title: nādiran mā + a negative relative clause, li- purpose, a balanced view with kamā anna and yarā baʿḍu an-nās anna (hedging), a narrated example with li-annī + baynamā + fa-, a concession with kamā yabnīhā, and idhā … fa-sa- with a dual (miftāḥayni).' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box filled, with feminine forms where needed.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: times, a number and a nationality; three time frames.' },
    { route: 'develop', text: 'Q3: studies, languages, an experience and a plan B.' },
    { route: 'stretch', text: 'Q3: laysa … bal, a concession and a conditional.' },
  ],
};

module.exports = { speak, write };
