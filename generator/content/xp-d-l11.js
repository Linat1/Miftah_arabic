'use strict';
/* Exam-practice data · TD-L11 · Topic D Integrated Communication Workshop (education → qualifications → work → plans; mixed tenses; register; cohesion). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'D', n: 11, short: 'Integrated Communication Workshop', arShort: 'وَرْشَةُ التَّوَاصُلِ المُتَكَامِلِ', fileTitle: 'Topic_D_Integrated_Communication_Workshop', title: 'Topic D Integrated Communication Workshop', ar: 'وَرْشَةُ التَّوَاصُلِ المُتَكَامِلِ لِلْمِحْوَرِ د', icon: 'FaPeopleGroup', grammar: 'mixed tenses in one answer (kuntu … ammā al-ān … sa-); register (informal vs formal: ahlan / ḥaḍrat …); cohesion (awwalan, bi-l-iḍāfati ilā dhālika, maʿa dhālika, li-dhālika)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms, mixing all of Topic D: school and subjects, revision, training and skills, jobs, workplaces, interviews and future plans. Move between past, present and future, switch between informal and formal Arabic, and link ideas (أَوَّلًا · بِالإِضَافَةِ إِلَى ذٰلِكَ · مَعَ ذٰلِكَ · لِذٰلِكَ).',
  words: [
    w(1, 'أَوَّلًا · ثُمَّ · أَخِيرًا', 'firstly · then · finally', [['after that', 'بَعْدَ ذٰلِكَ'], ['before that', 'قَبْلَ ذٰلِكَ']], { tag: 'sequence' }),
    w(2, 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'in addition', [['also', 'كَمَا أَنَّ'], ['moreover', 'فَضْلًا عَنْ ذٰلِكَ']], { tag: 'adding' }),
    w(3, 'مَعَ ذٰلِكَ · غَيْرَ أَنَّ', 'nevertheless · however', [['although', 'مَعَ أَنَّ'], ['whereas', 'بَيْنَمَا']], { tag: 'contrast' }),
    w(4, 'لِذٰلِكَ · مِمَّا', 'therefore · which (result)', [['because of', 'بِسَبَبِ'], ['so that', 'لِكَيْ']], { tag: 'cause / result' }),
    w(5, 'كُنْتُ أَدْرُسُ', 'I used to study', [['now I study', 'الآنَ أَدْرُسُ'], ['I will study', 'سَأَدْرُسُ']], { tag: 'three tenses' }),
    w(6, 'حَضْرَتُكَ · حَضْرَتُكِ', 'you (formal m. · f.)', [['informal', 'أَنْتَ · أَنْتِ'], ['dear Sir / Madam', 'حَضْرَةَ … المُحْتَرَمِ']], { tag: 'register' }),
    w(7, 'المَرْحَلَةُ الثَّانَوِيَّةُ', 'secondary school', [['subjects', 'المَوَادُّ'], ['revision', 'المُرَاجَعَةُ']], { tag: 'education' }),
    w(8, 'شَهَادَةٌ · دَوْرَةٌ · تَدْرِيبٌ', 'certificate · course · training', [['skills', 'مَهَارَاتٌ'], ['experience', 'خِبْرَةٌ']], { tag: 'training' }),
    w(9, 'وَظِيفَةٌ · مِهْنَةٌ', 'a job · a profession', [['workplace', 'مَكَانُ العَمَلِ'], ['salary', 'رَاتِبٌ']], { tag: 'work' }),
    w(10, 'مُقَابَلَةٌ · سِيرَةٌ ذَاتِيَّةٌ', 'an interview · a CV', [['apply', 'أَتَقَدَّمُ لِوَظِيفَةٍ'], ['accepted', 'قُبِلْتُ']], { tag: 'applications' }),
    w(11, 'أَطْمَحُ إِلَى أَنْ …', 'I aspire to …', [['I hope to', 'أَتَمَنَّى أَنْ'], ['plan B', 'خُطَّةٌ بَدِيلَةٌ']], { tag: 'plans' }),
    w(12, 'إِذَا لَمْ … فَسَوْفَ …', 'if not … then will …', [['if I were', 'لَوْ كُنْتُ … لَاخْتَرْتُ'], ['I won’t', 'لَنْ أَتْرُكَ']], { tag: 'conditions' }),
  ],
  words1: { eyebrow: 'Language bank · cohesion and tenses', title: 'Link it, then time it', ar: 'أَدَوَاتُ الرَّبْطِ وَالأَزْمِنَةُ', notes: 'LANGUAGE BANK (2 min) — the Topic D story in three tenses: كُنْتُ أَدْرُسُ … أَمَّا الآنَ فَأَتَدَرَّبُ … وَسَأَعْمَلُ … Link with أَوَّلًا · بِالإِضَافَةِ إِلَى ذٰلِكَ · مَعَ ذٰلِكَ · لِذٰلِكَ. Target: three linkers and three tenses in every developed answer.' },
  words2: { eyebrow: 'Language bank · the Topic D journey and register', title: 'School → skills → work → future', ar: 'رِحْلَةُ المِحْوَرِ د', notes: 'LANGUAGE BANK (2 min) — the examiner may jump from school to jobs to plans: have one sentence ready for each. Register: with a friend أَهْلًا · كَيْفَ حَالُكَ؟; in an interview حَضْرَتُكَ · يَسُرُّنِي أَنْ · شُكْرًا عَلَى وَقْتِكُمْ.' },
  checkCore: 'answered on school, work and future plans in full sentences',
  checkDevelop: 'used three tenses and three linking words in one answer',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a careers fair stall', title: 'Role play A — At the careers fair', ar: 'فِي مَعْرِضِ المِهَنِ', you: 'a Year 11 student', them: 'a company representative',
      tasks: [
        { core: true, ex: 'أَهْلًا! فِي أَيِّ صَفٍّ أَنْتَ؟', task: 'Say your year and school.', help: 'أَنَا فِي الصَّفِّ … فِي مَدْرَسَةِ …', model: 'أَنَا فِي الصَّفِّ الحَادِي عَشَرَ فِي مَدْرَسَةِ النُّورِ.', modelEn: 'I’m in Year 11 at Al Noor School.' },
        { core: true, ex: 'مَا مَادَّتُكَ المُفَضَّلَةُ؟', task: 'Name it with a reason.', help: 'مَادَّتِي المُفَضَّلَةُ … لِأَنَّ …', model: 'مَادَّتِيَ المُفَضَّلَةُ الحَاسُوبُ، لِأَنَّهُ مُمْتِعٌ.', modelEn: 'My favourite subject is computing, because it is fun.' },
        { core: true, ex: 'شَرِكَتُنَا تُقَدِّمُ تَدْرِيبًا صَيْفِيًّا.', task: 'Ask how long it is.', help: 'كَمْ أُسْبُوعًا …؟', model: 'كَمْ أُسْبُوعًا يَسْتَمِرُّ التَّدْرِيبُ؟', modelEn: 'How many weeks does the training last?' },
        { core: true, ex: 'أَرْبَعَةُ أَسَابِيعَ. مَاذَا تُرِيدُ أَنْ تَعْمَلَ فِي المُسْتَقْبَلِ؟', task: 'Say your dream job.', help: 'أُرِيدُ أَنْ أَكُونَ …', model: 'أُرِيدُ أَنْ أَكُونَ مُصَمِّمَ أَلْعَابٍ.', modelEn: 'I want to be a games designer.' },
        { core: true, unexpected: true, ex: 'هَلْ عِنْدَكَ خِبْرَةُ عَمَلٍ؟', task: 'Answer the unexpected question (past).', help: 'نَعَمْ، عَمِلْتُ فِي …', model: 'نَعَمْ، عَمِلْتُ فِي مَحَلٍّ لِلْحَوَاسِيبِ أُسْبُوعًا وَاحِدًا.', modelEn: 'Yes, I worked in a computer shop for one week.' },
      ],
      girl: 'مَادَّتُكِ · تُرِيدِينَ · مُصَمِّمَةَ أَلْعَابٍ · عِنْدَكِ',
      notes: 'Core: four Topic D themes in one card — school (L01, L03), training (L05), jobs (L06) and experience (L07); kam usbūʿan, arbaʿatu asābīʿa.',
    },
    {
      id: 'B', level: 'Core+', setting: 'two registers', title: 'Role play B — Telling a friend, then the manager', ar: 'مَعَ صَدِيقٍ ثُمَّ مَعَ المُدِيرِ', you: 'a student with a new weekend job', them: 'a friend (tasks 1–2), then the manager (tasks 3–5)',
      tasks: [
        { core: true, ex: '(صَدِيقٌ) أَهْلًا! سَمِعْتُ أَنَّكَ وَجَدْتَ عَمَلًا!', task: 'Tell your friend (informal).', help: 'نَعَمْ! أَعْمَلُ فِي … يَوْمَ …', model: 'نَعَمْ! أَعْمَلُ فِي مَكْتَبَةٍ يَوْمَ السَّبْتِ.', modelEn: 'Yes! I work in a bookshop on Saturdays.' },
        { core: true, ex: 'وَكَيْفَ العَمَلُ؟', task: 'Give your opinion (informal).', help: 'العَمَلُ … لٰكِنَّ …', model: 'العَمَلُ مُمْتِعٌ، لٰكِنَّ السَّاعَاتِ طَوِيلَةٌ قَلِيلًا.', modelEn: 'The work is fun, but the hours are a bit long.' },
        { ex: '(المُدِيرُ) صَبَاحَ الخَيْرِ. هَلْ يُمْكِنُكَ أَنْ تَعْمَلَ يَوْمَ الأَحَدِ أَيْضًا؟', task: 'Answer the manager formally.', help: 'صَبَاحَ النُّورِ يَا حَضْرَةَ المُدِيرِ … لٰكِنْ …', model: 'صَبَاحَ النُّورِ. يَسُرُّنِي ذٰلِكَ، لٰكِنْ عِنْدِي امْتِحَانَاتٌ هٰذَا الشَّهْرَ.', modelEn: 'Good morning. I’d be pleased to, but I have exams this month.' },
        { ex: 'أَفْهَمُ. مَتَى تَنْتَهِي امْتِحَانَاتُكَ؟', task: 'ASK politely to start later.', help: 'هَلْ يُمْكِنُنِي أَنْ …؟', model: 'تَنْتَهِي فِي آخِرِ الشَّهْرِ. هَلْ يُمْكِنُنِي أَنْ أَبْدَأَ أَيَّامَ الأَحَدِ بَعْدَ ذٰلِكَ؟', modelEn: 'At the end of the month. May I start Sundays after that?' },
        { unexpected: true, ex: 'طَبْعًا. وَمَاذَا سَتَدْرُسُ بَعْدَ المَدْرَسَةِ؟', task: 'Answer the unexpected question (future + reason).', help: 'سَأَدْرُسُ … لِأَنِّي أَطْمَحُ إِلَى …', model: 'سَأَدْرُسُ الأَدَبَ الإِنْجْلِيزِيَّ، لِأَنِّي أَطْمَحُ إِلَى أَنْ أَعْمَلَ فِي دَارِ نَشْرٍ.', modelEn: 'English literature — I aspire to work in a publishing house.' },
      ],
      girl: 'وَجَدْتِ · يُمْكِنُكِ · امْتِحَانَاتُكِ · سَتَدْرُسِينَ',
      notes: 'Core+: switching register (aḥlan / ṣabāḥa an-nūr … yasurrunī), lākinna, the CANDIDATE asks formally (hal yumkinunī an …?), aṭmaḥu ilā an.',
    },
    {
      id: 'C', level: 'Develop', setting: 'a mentoring session', title: 'Role play C — My journey so far', ar: 'رِحْلَتِي حَتَّى الآنَ', you: 'a Year 12 student', them: 'a mentor from a local business',
      tasks: [
        { ex: 'حَدِّثْنِي عَنْ دِرَاسَتِكَ.', task: 'Past → present with linkers.', help: 'فِي الثَّانَوِيَّةِ كُنْتُ … أَمَّا الآنَ فَـ…', model: 'فِي الثَّانَوِيَّةِ كُنْتُ أُحِبُّ العُلُومَ، أَمَّا الآنَ فَأَدْرُسُ الكِيمْيَاءَ وَالأَحْيَاءَ وَالرِّيَاضِيَّاتِ، وَأُرَاجِعُ كُلَّ يَوْمٍ سَاعَتَيْنِ.', modelEn: 'In secondary I loved science; now I study chemistry, biology and maths, revising two hours a day.' },
        { ex: 'وَمَا المَهَارَاتُ الَّتِي اكْتَسَبْتَهَا خَارِجَ المَدْرَسَةِ؟', task: 'Give skills with evidence.', help: 'أَوَّلًا … بِالإِضَافَةِ إِلَى ذٰلِكَ …', model: 'أَوَّلًا، حَصَلْتُ عَلَى شَهَادَةٍ فِي الإِسْعَافَاتِ الأَوَّلِيَّةِ؛ بِالإِضَافَةِ إِلَى ذٰلِكَ، أَتَطَوَّعُ فِي دَارٍ لِلْمُسِنِّينَ، فَتَعَلَّمْتُ الصَّبْرَ وَالاسْتِمَاعَ.', modelEn: 'First, a first-aid certificate; also I volunteer at a care home, where I learnt patience and listening.' },
        { ex: 'مَا الوَظِيفَةُ الَّتِي تُنَاسِبُ هٰذِهِ المَهَارَاتِ؟', task: 'Match skills to a job (relative clause).', help: 'الوَظِيفَةُ الَّتِي … هِيَ …', model: 'الوَظِيفَةُ الَّتِي تُنَاسِبُنِي هِيَ الصَّيْدَلَةُ، لِأَنَّهَا تَجْمَعُ بَيْنَ العِلْمِ وَمُسَاعَدَةِ النَّاسِ.', modelEn: 'Pharmacy suits me, because it combines science and helping people.' },
        { ex: 'هَلْ سَتَبْحَثُ عَنْ خِبْرَةِ عَمَلٍ هٰذَا الصَّيْفَ؟', task: 'Give a plan with purpose.', help: 'نَعَمْ، سَأَتَقَدَّمُ … لِكَيْ …', model: 'نَعَمْ، سَأَتَقَدَّمُ لِتَدْرِيبٍ فِي صَيْدَلِيَّةِ المُسْتَشْفَى، لِكَيْ أَرَى العَمَلَ الحَقِيقِيَّ قَبْلَ الجَامِعَةِ.', modelEn: 'Yes, I’ll apply for a placement in the hospital pharmacy to see real work before university.' },
        { unexpected: true, ex: 'وَإِذَا لَمْ تَجِدْ تَدْرِيبًا؟', task: 'Answer the unexpected question (plan B).', help: 'إِذَا لَمْ أَجِدْ …، فَسَوْفَ …', model: 'إِذَا لَمْ أَجِدْ تَدْرِيبًا، فَسَوْفَ أَعْمَلُ فِي صَيْدَلِيَّةِ الحَيِّ، وَمَعَ ذٰلِكَ سَأُوَاصِلُ التَّطَوُّعَ.', modelEn: 'If I don’t find a placement, I’ll work in the local chemist — and keep volunteering anyway.' },
      ],
      girl: 'حَدِّثِينِي · دِرَاسَتِكِ · اكْتَسَبْتِهَا · سَتَبْحَثِينَ · تَجِدِي',
      notes: 'Develop: kuntu + present vs ammā al-āna fa-, awwalan / bi-l-iḍāfati ilā dhālika, allatī + returning pronoun, sa- + li-kay, idhā lam … fa-sawfa + wa-maʿa dhālika.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a final interview', title: 'Role play D — The scholarship interview', ar: 'مُقَابَلَةُ المِنْحَةِ الدِّرَاسِيَّةِ', you: 'a scholarship candidate', them: 'the head of the scholarship panel',
      tasks: [
        { ex: 'لِمَاذَا تَسْتَحِقُّ هٰذِهِ المِنْحَةَ؟', task: 'Make a formal, evidenced case.', help: 'يَسُرُّنِي أَنْ … وَالدَّلِيلُ أَنَّ …', model: 'يَسُرُّنِي أَنْ أَكُونَ هُنَا. أَرَى أَنَّنِي أَسْتَحِقُّهَا لِأَنِّي أَجْمَعُ بَيْنَ التَّفَوُّقِ وَخِدْمَةِ المُجْتَمَعِ؛ وَالدَّلِيلُ أَنَّنِي حَصَلْتُ عَلَى أَعْلَى الدَّرَجَاتِ، وَأَسَّسْتُ نَادِيًا لِلدُّرُوسِ المَجَّانِيَّةِ.', modelEn: 'I believe I deserve it: I combine excellence and community service — top grades, and I founded a free-tuition club.' },
        { ex: 'مَا أَكْبَرُ تَحَدٍّ وَاجَهْتَهُ فِي دِرَاسَتِكَ؟', task: 'Narrate a challenge (past) and its result.', help: 'عِنْدَمَا … كُنْتُ … فَـ…', model: 'عِنْدَمَا انْتَقَلْنَا إِلَى بَرِيطَانْيَا، لَمْ أَكُنْ أَتَكَلَّمُ الإِنْجْلِيزِيَّةَ جَيِّدًا، فَكُنْتُ أَدْرُسُ ثَلَاثَ سَاعَاتٍ إِضَافِيَّةً كُلَّ يَوْمٍ، حَتَّى أَصْبَحْتُ مِنَ الأَوَائِلِ فِي صَفِّي.', modelEn: 'When we moved to Britain I didn’t speak English well, so I studied three extra hours a day until I was among the top in my class.' },
        { ex: 'هَلِ الدَّرَجَاتُ أَهَمُّ مِنَ المَهَارَاتِ؟', task: 'Concede and balance.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ … لِذٰلِكَ …', model: 'صَحِيحٌ أَنَّ الدَّرَجَاتِ تَفْتَحُ أَبْوَابَ الجَامِعَاتِ، غَيْرَ أَنَّ المَهَارَاتِ هِيَ الَّتِي تَفْتَحُ أَبْوَابَ العَمَلِ؛ لِذٰلِكَ حَرَصْتُ عَلَى الاثْنَيْنِ.', modelEn: 'Grades open university doors, but skills open work doors — so I worked on both.' },
        { ex: 'كَيْفَ سَتَسْتَخْدِمُ المِنْحَةَ؟', task: 'Plan the future with hopes and purpose.', help: 'سَأَدْرُسُ … ثُمَّ أَطْمَحُ إِلَى … لِكَيْ …', model: 'سَأَدْرُسُ الهَنْدَسَةَ الطِّبِّيَّةَ، ثُمَّ أَطْمَحُ إِلَى أَنْ أُصَمِّمَ أَجْهِزَةً رَخِيصَةً لِلْمُسْتَشْفَيَاتِ الفَقِيرَةِ، لِكَيْ يَحْصُلَ الجَمِيعُ عَلَى العِلَاجِ.', modelEn: 'I’ll study medical engineering, then aspire to design low-cost devices for poor hospitals, so everyone can get treatment.' },
        { unexpected: true, ex: 'لَوْ لَمْ تَحْصُلْ عَلَى المِنْحَةِ، هَلْ سَيَتَغَيَّرُ حُلْمُكَ؟', task: 'Answer the unexpected question (law lam … la-).', help: 'لَوْ لَمْ أَحْصُلْ …، لَـ… لٰكِنَّ …', model: 'لَوْ لَمْ أَحْصُلْ عَلَيْهَا، لَعَمِلْتُ وَدَرَسْتُ فِي الوَقْتِ نَفْسِهِ؛ فَالطَّرِيقُ سَيَكُونُ أَطْوَلَ، لٰكِنَّ الحُلْمَ لَنْ يَتَغَيَّرَ.', modelEn: 'I’d work and study at once — the road would be longer, but the dream wouldn’t change.' },
      ],
      girl: 'تَسْتَحِقِّينَ · وَاجَهْتِهِ · دِرَاسَتِكِ · سَتَسْتَخْدِمِينَ · تَحْصُلِي · حُلْمُكِ',
      notes: 'Stretch: formal register (yasurrunī an, arā annanī), wa-d-dalīlu anna, lam akun + kuntu + present … ḥattā, a balanced concession with li-dhālika, a future chain with aṭmaḥu ilā an + li-kay, law lam … la- with lan.',
      modelFoot: 'Stretch: the whole Topic D journey — education, effort, skills, ambition and a conditional — in formal Arabic.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'الدِّرَاسَةُ وَالعَمَلُ', aim: 'one full sentence per question',
      qs: [
        { q: 'مَا مَادَّتُكَ المُفَضَّلَةُ؟', en: 'What is your favourite subject?', start: 'مَادَّتِي المُفَضَّلَةُ … لِأَنَّ …', model: 'مَادَّتِيَ المُفَضَّلَةُ التَّارِيخُ، لِأَنَّهُ مُمْتِعٌ.', modelEn: 'History — it’s interesting.' },
        { q: 'كَيْفَ تُرَاجِعُ لِلِامْتِحَانَاتِ؟', en: 'How do you revise for exams?', start: 'أُرَاجِعُ … وَأَكْتُبُ …', model: 'أُرَاجِعُ فِي المَكْتَبَةِ، وَأَكْتُبُ مُلَخَّصَاتٍ.', modelEn: 'In the library, writing summaries.' },
        { q: 'مَاذَا يَعْمَلُ أَحَدُ أَفْرَادِ أُسْرَتِكَ؟', en: 'What does someone in your family do?', start: 'أَبِي / أُمِّي …', model: 'أُمِّي مُمَرِّضَةٌ، وَتَعْمَلُ فِي مُسْتَشْفًى.', modelEn: 'My mum is a nurse in a hospital.' },
        { q: 'هَلْ عِنْدَكَ عَمَلٌ جُزْئِيٌّ؟', en: 'Do you have a part-time job?', start: 'نَعَمْ، أَعْمَلُ … / لَا، …', model: 'لَا، لٰكِنِّي أَتَطَوَّعُ فِي نَادِي الحَيِّ.', modelEn: 'No, but I volunteer at the local club.' },
        { q: 'مَاذَا سَتَفْعَلُ بَعْدَ المَدْرَسَةِ؟', en: 'What will you do after school?', start: 'سَأَدْرُسُ …', model: 'سَأَدْرُسُ القَانُونَ فِي الجَامِعَةِ.', modelEn: 'I’ll study law at university.' },
      ],
      foot: 'Core: one full sentence for every question — each comes from a different Topic D lesson. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a reason = a secure Core answer on any Topic D theme.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'مِنَ المَدْرَسَةِ إِلَى العَمَلِ', aim: 'two or three sentences, with linkers and two or three time frames',
      qs: [
        { q: 'كَيْفَ تَغَيَّرَتْ دِرَاسَتُكَ مُنْذُ الابْتِدَائِيَّةِ؟', en: 'How has your study changed since primary?', start: 'كُنْتُ … أَمَّا الآنَ فَـ… وَسَـ…', model: 'كُنْتُ أَدْرُسُ مَوَادَّ قَلِيلَةً وَسَهْلَةً، أَمَّا الآنَ فَأَدْرُسُ تِسْعَ مَوَادَّ، وَسَأَخْتَارُ ثَلَاثًا فَقَطْ فِي السَّنَةِ القَادِمَةِ.', modelEn: 'I studied a few easy subjects; now nine, and next year I’ll choose only three.' },
        { q: 'مَا المَهَارَاتُ الَّتِي يَطْلُبُهَا أَصْحَابُ العَمَلِ؟', en: 'What skills do employers want?', start: 'أَوَّلًا … بِالإِضَافَةِ إِلَى ذٰلِكَ …', model: 'أَوَّلًا، التَّوَاصُلُ وَالعَمَلُ الجَمَاعِيُّ؛ بِالإِضَافَةِ إِلَى ذٰلِكَ، المَهَارَاتُ الرَّقْمِيَّةُ وَالقُدْرَةُ عَلَى التَّعَلُّمِ.', modelEn: 'Communication and teamwork; also digital skills and the ability to learn.' },
        { q: 'صِفْ تَجْرِبَةَ عَمَلٍ أَوْ تَطَوُّعٍ.', en: 'Describe a work or volunteering experience.', start: 'فِي … عَمِلْتُ / تَطَوَّعْتُ … فَتَعَلَّمْتُ …', model: 'فِي الصَّيْفِ تَطَوَّعْتُ فِي مُخَيَّمٍ لِلْأَطْفَالِ، فَتَعَلَّمْتُ الصَّبْرَ وَالتَّنْظِيمَ، وَمَعَ ذٰلِكَ كَانَ العَمَلُ مُتْعِبًا.', modelEn: 'Last summer I volunteered at a children’s camp and learnt patience and organisation — though it was tiring.' },
        { q: 'أَيُّهُمَا أَهَمُّ: الجَامِعَةُ أَمِ الخِبْرَةُ؟', en: 'Which matters more: university or experience?', start: 'أَرَى أَنَّ … لٰكِنَّ … لِذٰلِكَ …', model: 'أَرَى أَنَّ الجَامِعَةَ مُهِمَّةٌ لِبَعْضِ المِهَنِ، لٰكِنَّ الخِبْرَةَ ضَرُورِيَّةٌ لِلْجَمِيعِ؛ لِذٰلِكَ سَأَعْمَلُ وَأَنَا أَدْرُسُ.', modelEn: 'University matters for some jobs, but experience is essential for all — so I’ll work while studying.' },
        { q: 'أَيْنَ تَرَى نَفْسَكَ بَعْدَ عَشْرِ سَنَوَاتٍ؟', en: 'Where do you see yourself in ten years?', start: 'أَطْمَحُ إِلَى أَنْ … وَإِذَا …', model: 'أَطْمَحُ إِلَى أَنْ أَكُونَ مُهَنْدِسًا فِي شَرِكَةٍ لِلطَّاقَةِ، وَإِذَا نَجَحْتُ فِي ذٰلِكَ، فَسَأُؤَسِّسُ شَرِكَتِي الخَاصَّةَ.', modelEn: 'An engineer at an energy company — and if that goes well, I’ll found my own.' },
      ],
      foot: 'Develop: two or three sentences — at least two linkers and two time frames per answer.',
      modelFoot: 'Linkers + several time frames = a strong Develop answer on any Topic D theme.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'التَّعْلِيمُ وَالعَمَلُ وَالمُسْتَقْبَلُ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ تُعِدُّ المَدَارِسُ الطُّلَّابَ لِعَالَمِ العَمَلِ؟', en: 'Do schools prepare students for the world of work?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهَا تُعَلِّمُ المَعْرِفَةَ، غَيْرَ أَنَّهَا لَا تُعَلِّمُ كِتَابَةَ السِّيرَةِ الذَّاتِيَّةِ أَوِ التَّصَرُّفَ فِي المُقَابَلَاتِ، مِمَّا يَجْعَلُ البِدَايَةَ صَعْبَةً.', modelEn: 'They teach knowledge, but not CV writing or interview skills, which makes the start hard.' },
        { q: 'هَلْ يَجِبُ أَنْ يَعْمَلَ الطُّلَّابُ أَثْنَاءَ الدِّرَاسَةِ؟', en: 'Should students work while studying?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، يَكْتَسِبُونَ خِبْرَةً وَمَالًا، وَمِنْ نَاحِيَةٍ أُخْرَى، قَدْ تَتَأَثَّرُ دَرَجَاتُهُمْ إِذَا كَانَتِ السَّاعَاتُ طَوِيلَةً.', modelEn: 'They gain experience and money, but grades may suffer if hours are long.' },
        { q: 'كَيْفَ تَخْتَلِفُ فُرَصُ جِيلِكَ عَنْ فُرَصِ وَالِدَيْكَ؟', en: 'How do your generation’s opportunities differ from your parents’?', start: 'كَانَ … أَمَّا جِيلُنَا فَـ…', model: 'كَانَ وَالِدَايَ يَعْمَلَانِ فِي وَظِيفَةٍ وَاحِدَةٍ طُولَ حَيَاتِهِمَا، أَمَّا جِيلُنَا فَسَيُغَيِّرُ مِهْنَتَهُ مَرَّاتٍ، مِمَّا يَتَطَلَّبُ تَعَلُّمًا مُسْتَمِرًّا.', modelEn: 'My parents kept one job all their lives; our generation will change careers several times, needing lifelong learning.' },
        { q: 'مَا أَهَمُّ دَرْسٍ تَعَلَّمْتَهُ عَنِ النَّجَاحِ؟', en: 'What is the most important lesson you’ve learnt about success?', start: 'تَعَلَّمْتُ أَنَّ … عِنْدَمَا …', model: 'تَعَلَّمْتُ أَنَّ الفَشَلَ جُزْءٌ مِنَ النَّجَاحِ، عِنْدَمَا رَسَبْتُ فِي امْتِحَانٍ تَجْرِيبِيٍّ، ثُمَّ نَجَحْتُ بَعْدَهُ بِتَفَوُّقٍ.', modelEn: 'That failure is part of success — I failed a mock, then passed with distinction afterwards.' },
        { q: 'لَوْ أَعْطَيْتَ نَصِيحَةً وَاحِدَةً لِطَالِبٍ فِي الصَّفِّ السَّابِعِ، مَاذَا تَقُولُ؟', en: 'If you gave one piece of advice to a Year 7 student, what would it be?', start: 'لَوْ نَصَحْتُهُ، لَقُلْتُ …', model: 'لَوْ نَصَحْتُهُ، لَقُلْتُ لَهُ: "جَرِّبْ كُلَّ شَيْءٍ، وَتَطَوَّعْ، وَاقْرَأْ؛ فَالمَهَارَاتُ الَّتِي تَبْنِيهَا اليَوْمَ سَتَفْتَحُ لَكَ أَبْوَابًا لَا تَتَخَيَّلُهَا".', modelEn: '“Try everything, volunteer and read — the skills you build today will open doors you can’t imagine.”' },
      ],
      foot: 'Stretch: link education, work and the future — a concession, a balanced view, past vs present, a turning point and law … la-.',
      modelFoot: 'Stretch: ṣaḥīḥun anna … ghayra anna, balance, mimmā, a narrated lesson and law … la- with imperatives — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I answered on school, work and future plans.' },
    { route: 'core', text: 'I gave a reason in every answer.' },
    { route: 'develop', text: 'I used three different linking words.' },
    { route: 'develop', text: 'I used past, present and future in one answer.' },
    { route: 'stretch', text: 'I switched register correctly and used a concession or law … la-.' },
  ],
};
speak.RP[2].tasks[0].help = 'فِي الثَّانَوِيَّةِ كُنْتُ … أَمَّا الآنَ فَأَدْرُسُ …';
speak.RP[2].tasks[3].help = 'نَعَمْ، سَأَتَقَدَّمُ … لِكَيْ …';
speak.RP[3].tasks[1].help = 'عِنْدَمَا … كُنْتُ … فَكُنْتُ أَدْرُسُ …';
speak.RP[3].tasks[4].help = 'لَوْ لَمْ أَحْصُلْ …، لَعَمِلْتُ … لٰكِنَّ …';
speak.CONV[1].qs[0].start = 'كُنْتُ … أَمَّا الآنَ فَأَدْرُسُ … وَسَأَخْتَارُ …';
speak.CONV[1].qs[2].start = 'فِي … تَطَوَّعْتُ … فَتَعَلَّمْتُ …';
speak.CONV[2].qs[2].start = 'كَانَ وَالِدَايَ … أَمَّا جِيلُنَا فَسَيُغَيِّرُ …';
speak.CONV[2].qs[4].start = 'لَوْ نَصَحْتُهُ، لَقُلْتُ لَهُ …';

const Q2_CORE = `مَرْحَبًا يَا يُوسُفُ،
كَيْفَ حَالُكَ؟ عِنْدِي أَخْبَارٌ كَثِيرَةٌ! أَوَّلًا، انْتَهَتِ الامْتِحَانَاتُ، وَكَانَتِ الكِيمْيَاءُ أَصْعَبَ مَادَّةٍ. ثُمَّ بَدَأْتُ تَدْرِيبًا فِي صَيْدَلِيَّةِ المُسْتَشْفَى. أَعْمَلُ مِنَ التَّاسِعَةِ إِلَى الثَّالِثَةِ، وَأُسَاعِدُ الصَّيْدَلَانِيَّ فِي تَرْتِيبِ الأَدْوِيَةِ. بِالإِضَافَةِ إِلَى ذٰلِكَ، أَتَعَلَّمُ كَيْفَ أَتَكَلَّمُ مَعَ المَرْضَى. العَمَلُ مُتْعِبٌ، وَمَعَ ذٰلِكَ أُحِبُّهُ كَثِيرًا. لِذٰلِكَ سَأَدْرُسُ الصَّيْدَلَةَ فِي الجَامِعَةِ إِنْ شَاءَ اللّٰهُ. وَأَنْتَ، مَاذَا سَتَفْعَلُ فِي الصَّيْفِ؟
إِلَى اللِّقَاءِ،
آدَمُ`;
const Q2_FULL = `عَزِيزِي يُوسُفُ،
انْتَهَى أَخِيرًا مَوْسِمُ الامْتِحَانَاتِ، وَكَانَتِ الكِيمْيَاءُ أَصْعَبَهَا كَمَا تَوَقَّعْتُ، غَيْرَ أَنَّ المُرَاجَعَةَ المُنَظَّمَةَ أَنْقَذَتْنِي. وَبَدَأْتُ هٰذَا الأُسْبُوعَ تَدْرِيبًا صَيْفِيًّا فِي صَيْدَلِيَّةِ المُسْتَشْفَى، حَيْثُ أُسَاعِدُ الصَّيْدَلَانِيَّةَ فِي تَرْتِيبِ الأَدْوِيَةِ وَتَسْجِيلِهَا، وَأُرَاقِبُ كَيْفَ تَشْرَحُ لِلْمَرْضَى طَرِيقَةَ اسْتِعْمَالِهَا بِلُطْفٍ وَصَبْرٍ. صَحِيحٌ أَنَّ سَاعَاتِ العَمَلِ طَوِيلَةٌ، وَأَنَّنِي أَعُودُ إِلَى البَيْتِ مُتْعَبًا، إِلَّا أَنَّ هٰذِهِ التَّجْرِبَةَ أَكَّدَتْ لِي أَنَّ الصَّيْدَلَةَ هِيَ الطَّرِيقُ الَّذِي أُرِيدُهُ. لِذٰلِكَ سَأَتَقَدَّمُ لِكُلِّيَّاتِ الصَّيْدَلَةِ فِي الخَرِيفِ، وَإِذَا لَمْ أُقْبَلْ، فَسَأَدْرُسُ الكِيمْيَاءَ أَوَّلًا. وَأَنْتَ، كَيْفَ تَقْضِي صَيْفَكَ؟ هَلْ وَجَدْتَ عَمَلًا؟
مَعَ تَحِيَّاتِي،
آدَمُ`;
const Q3A_CORE = `أَوَّلًا، أَنَا الآنَ فِي الصَّفِّ الثَّانِي عَشَرَ، وَأَدْرُسُ الكِيمْيَاءَ وَالأَحْيَاءَ وَالرِّيَاضِيَّاتِ. أُرَاجِعُ كُلَّ يَوْمٍ سَاعَتَيْنِ فِي مَكْتَبَةِ المَدْرَسَةِ بَعْدَ الدُّرُوسِ، لِأَنَّ الامْتِحَانَاتِ مُهِمَّةٌ جِدًّا. فِي المَدْرَسَةِ الابْتِدَائِيَّةِ كُنْتُ أُحِبُّ العُلُومَ، وَكُنْتُ أَعْمَلُ تَجَارِبَ صَغِيرَةً فِي البَيْتِ.
بِالإِضَافَةِ إِلَى ذٰلِكَ، أَتَطَوَّعُ فِي دَارٍ لِلْمُسِنِّينَ كُلَّ يَوْمِ سَبْتٍ. هُنَاكَ تَعَلَّمْتُ الصَّبْرَ وَالاسْتِمَاعَ. حَصَلْتُ أَيْضًا عَلَى شَهَادَةٍ فِي الإِسْعَافَاتِ الأَوَّلِيَّةِ مِنَ الهِلَالِ الأَحْمَرِ.
فِي الصَّيْفِ المَاضِي عَمِلْتُ فِي صَيْدَلِيَّةِ الحَيِّ أُسْبُوعَيْنِ. كُنْتُ أُرَتِّبُ الأَدْوِيَةَ، وَأُسَاعِدُ الزَّبَائِنَ، وَتَعَلَّمْتُ أَنَّ العَمَلَ مَعَ النَّاسِ يَحْتَاجُ إِلَى الصَّبْرِ وَالابْتِسَامَةِ. كَانَ العَمَلُ مُتْعِبًا، وَمَعَ ذٰلِكَ كَانَ مُمْتِعًا جِدًّا.
لِذٰلِكَ أَطْمَحُ إِلَى أَنْ أُصْبِحَ صَيْدَلَانِيًّا. سَأَتَقَدَّمُ لِلْجَامِعَةِ فِي الخَرِيفِ، وَإِذَا لَمْ أُقْبَلْ فِي الصَّيْدَلَةِ، فَسَأَدْرُسُ الكِيمْيَاءَ أَوَّلًا، ثُمَّ أُحَاوِلُ مِنْ جَدِيدٍ. لَنْ أَتْرُكَ حُلْمِي.`;
const Q3A_FULL = `حِينَ أَنْظُرُ إِلَى الوَرَاءِ، أَرَى أَنَّ رِحْلَتِي نَحْوَ مِهْنَةِ المُسْتَقْبَلِ لَمْ تَبْدَأْ فِي مَكْتَبِ الإِرْشَادِ المِهْنِيِّ، بَلْ فِي مَطْبَخِ بَيْتِنَا، حَيْثُ كُنْتُ أَخْلِطُ المَوَادَّ وَأَنَا فِي الثَّامِنَةِ، مُقْتَنِعًا بِأَنَّنِي عَالِمٌ كَبِيرٌ!
وَمَعَ مُرُورِ السَّنَوَاتِ، تَحَوَّلَ ذٰلِكَ الفُضُولُ إِلَى شَغَفٍ حَقِيقِيٍّ وَعَمِيقٍ بِالكِيمْيَاءِ، فَاخْتَرْتُهَا مَعَ الأَحْيَاءِ وَالرِّيَاضِيَّاتِ لِلْمَرْحَلَةِ الثَّانَوِيَّةِ. وَمَعَ أَنَّهَا أَصْعَبُ مَوَادِّي، فَإِنَّ تَنْظِيمَ المُرَاجَعَةِ وَحَلَّ الامْتِحَانَاتِ السَّابِقَةِ جَعَلَانِي أَتَفَوَّقُ فِيهَا.
غَيْرَ أَنَّ الكُتُبَ وَحْدَهَا لَمْ تَكُنْ كَافِيَةً؛ فَقَدْ تَطَوَّعْتُ فِي دَارٍ لِلْمُسِنِّينَ، وَتَدَرَّبْتُ خِلَالَ العُطْلَةِ أُسْبُوعَيْنِ فِي صَيْدَلِيَّةِ المُسْتَشْفَى، فَاكْتَشَفْتُ أَنَّ الصَّيْدَلَانِيَّ لَيْسَ عَالِمًا فِي مُخْتَبَرٍ فَحَسْبُ، بَلْ هُوَ أَيْضًا شَخْصٌ يَسْتَمِعُ وَيُطَمْئِنُ.
لِذٰلِكَ أَطْمَحُ إِلَى دِرَاسَةِ الصَّيْدَلَةِ، ثُمَّ العَمَلِ فِي مُسْتَشْفًى لِلْأَطْفَالِ، حَيْثُ يَحْتَاجُ الصِّغَارُ وَأَهْلُهُمْ إِلَى كَلِمَةٍ طَيِّبَةٍ. صَحِيحٌ أَنَّ الطَّرِيقَ طَوِيلٌ، غَيْرَ أَنَّ لِي خُطَّةً بَدِيلَةً إِذَا لَمْ أُقْبَلْ. وَلَوْ رَآنِي ذٰلِكَ الطِّفْلُ الصَّغِيرُ فِي المَطْبَخِ اليَوْمَ، لَابْتَسَمَ فَخُورًا.`;
const Q3B_FULL = `يَقْضِي الطَّالِبُ نَحْوَ ثَلَاثَ عَشْرَةَ سَنَةً فِي المَدْرَسَةِ، ثُمَّ يُطْلَبُ مِنْهُ فَجْأَةً أَنْ يَكْتُبَ سِيرَةً ذَاتِيَّةً، وَأَنْ يَنْجَحَ فِي مُقَابَلَةٍ، وَأَنْ يَخْتَارَ مِهْنَةً لِبَقِيَّةِ حَيَاتِهِ. فَهَلْ تُعِدُّهُ المَدْرَسَةُ حَقًّا لِهٰذِهِ اللَّحْظَةِ؟
مِنْ نَاحِيَةٍ، تُقَدِّمُ المَدْرَسَةُ أَسَاسًا لَا غِنَى عَنْهُ مِنَ المَعْرِفَةِ، وَتُعَلِّمُ الانْضِبَاطَ وَتَنْظِيمَ الوَقْتِ. وَمِنْ نَاحِيَةٍ أُخْرَى، نَادِرًا مَا تُعَلِّمُ المَهَارَاتِ العَمَلِيَّةَ، كَالتَّوَاصُلِ المِهْنِيِّ وَإِدَارَةِ المَالِ، مِمَّا يَجْعَلُ الانْتِقَالَ إِلَى العَمَلِ صَدْمَةً لِكَثِيرِينَ، فَيَشْعُرُونَ بِأَنَّهُمْ غَيْرُ مُسْتَعِدِّينَ رَغْمَ شَهَادَاتِهِمُ العَالِيَةِ.
وَقَدْ رَأَيْتُ الفَرْقَ فِي مَدْرَسَتِي عِنْدَمَا نَظَّمَتْ "أُسْبُوعَ المِهَنِ" لِأَوَّلِ مَرَّةٍ؛ فَتَدَرَّبْنَا عَلَى المُقَابَلَاتِ مَعَ مُوَظَّفِينَ حَقِيقِيِّينَ، وَكَتَبْنَا سِيَرَنَا الذَّاتِيَّةَ بِمُسَاعَدَةِ خُبَرَاءَ، فَحَصَلَ نِصْفُ صَفِّي عَلَى تَدْرِيبٍ صَيْفِيٍّ، وَأَنَا مِنْهُمْ.
صَحِيحٌ أَنَّ المَدْرَسَةَ لَا تَسْتَطِيعُ أَنْ تُعَلِّمَ كُلَّ شَيْءٍ، غَيْرَ أَنَّ أُسْبُوعًا وَاحِدًا صَنَعَ فَرْقًا كَبِيرًا. وَإِذَا تَعَاوَنَتِ المَدَارِسُ مَعَ الشَّرِكَاتِ المَحَلِّيَّةِ، فَسَيَدْخُلُ الشَّبَابُ عَالَمَ العَمَلِ بِثِقَةٍ وَاسْتِعْدَادٍ بَدَلًا مِنَ الخَوْفِ وَالحَيْرَةِ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice mixing all of Topic D: fill in a careers-portfolio form, write an email about your exams, training and plans, and write a cohesive extended piece about your journey from school to work or about whether schools prepare students for work.',
  lift: [
    { ar: 'العَمَلُ مُتْعِبٌ، وَمَعَ ذٰلِكَ أُحِبُّهُ كَثِيرًا', en: 'the work is tiring; nevertheless I love it' },
    { ar: 'كُنْتُ أُحِبُّ العُلُومَ … لِذٰلِكَ أَطْمَحُ إِلَى …', en: 'I used to love science … so I aspire to …' },
    { ar: 'إِذَا لَمْ أُقْبَلْ، فَسَأَدْرُسُ الكِيمْيَاءَ أَوَّلًا', en: 'if I am not accepted, I will study chemistry first' },
  ],
  checkTip: 'Check cohesion and time: at least four linkers (awwalan, bi-l-iḍāfati ilā dhālika, maʿa dhālika, li-dhālika); a past paragraph (kuntu + present, ʿamiltu), a present one and a future one (sa-, aṭmaḥu ilā an, idhā lam … fa-sa-); one register throughout (friendly email vs formal letter).',
  FORM: {
    title: 'Careers-portfolio form', ar: 'اسْتِمَارَةُ مَلَفِّ الإِنْجَازِ المِهْنِيِّ',
    fields: [
      { core: true, ar: 'الاسْمُ وَالصَّفُّ', en: 'Name and class', model: 'آدَمُ رَشِيدٌ، الثَّانِي عَشَرَ', modelEn: 'Adam Rashid, Year 12' },
      { core: true, ar: 'المَوَادُّ الحَالِيَّةُ', en: 'Current subjects', model: 'الكِيمْيَاءُ وَالأَحْيَاءُ وَالرِّيَاضِيَّاتُ', modelEn: 'chemistry, biology and maths' },
      { core: true, ar: 'الشَّهَادَاتُ', en: 'Certificates', model: 'الإِسْعَافَاتُ الأَوَّلِيَّةُ', modelEn: 'first aid' },
      { core: true, ar: 'خِبْرَةُ العَمَلِ', en: 'Work experience', model: 'أُسْبُوعَانِ فِي صَيْدَلِيَّةٍ', modelEn: 'two weeks in a pharmacy' },
      { core: true, ar: 'التَّطَوُّعُ', en: 'Volunteering', model: 'دَارُ المُسِنِّينَ', modelEn: 'a care home' },
      { core: true, ar: 'المِهْنَةُ المَطْلُوبَةُ', en: 'Target career', model: 'صَيْدَلَانِيٌّ', modelEn: 'pharmacist' },
      { ar: 'الخُطَّةُ البَدِيلَةُ', en: 'Plan B', model: 'دِرَاسَةُ الكِيمْيَاءِ أَوَّلًا', modelEn: 'studying chemistry first' },
      { ar: 'جُمْلَةٌ: كَيْفَ سَاعَدَتْكَ خِبْرَتُكَ؟', en: 'ONE sentence: how your experience helped you', model: 'كُنْتُ أُفَكِّرُ فِي الطِّبِّ، أَمَّا الآنَ فَأَعْرِفُ أَنَّ الصَّيْدَلَةَ تُنَاسِبُنِي أَكْثَرَ.', modelEn: 'I used to consider medicine; now I know pharmacy suits me better.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence moving from past to present (kuntu … ammā al-āna fa-).',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. The boxes recycle Topic D: subjects (L03), certificates (L05), experience (L07), career (L06), plan B (L10). Box 4: usbūʿān (dual).',
  },
  Q2: {
    short: 'an email about exams, training and plans', title: 'Question 2: news from my summer', ar: 'أَخْبَارُ صَيْفِي',
    task: 'Write an email in Arabic to a friend of about 80–90 words. You must include: • how your exams went • the training or job you have started and what you do • your opinion of it • your plans for next year (with a plan B), and a question for your friend.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'At least three linking words.', 'Past, present AND future.', 'About 80–90 words.'],
    phrases: [['أَوَّلًا، انْتَهَتِ الامْتِحَانَاتُ، وَكَانَتْ …', 'firstly, the exams finished, and … was …'], ['ثُمَّ بَدَأْتُ تَدْرِيبًا فِي …', 'then I started training at …'], ['العَمَلُ مُتْعِبٌ، وَمَعَ ذٰلِكَ …', 'the work is tiring; nevertheless …'], ['لِذٰلِكَ سَأَدْرُسُ … وَإِذَا لَمْ …', 'so I will study … and if not …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنْ صَيْفِكَ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about your summer (80–90 words).'],
      ['1', 'كَيْفَ كَانَتِ امْتِحَانَاتُكَ؟', 'How your exams went'],
      ['2', 'مَا التَّدْرِيبُ أَوِ العَمَلُ الَّذِي بَدَأْتَهُ؟ وَمَاذَا تَفْعَلُ؟', 'The training or job you started; what you do'],
      ['3', 'مَا رَأْيُكَ فِيهِ؟', 'Your opinion of it'],
      ['4', 'مَا خِطَطُكَ لِلسَّنَةِ القَادِمَةِ؟ وَاسْأَلْ صَدِيقَكَ سُؤَالًا.', 'Next year’s plans (with a plan B); a question'],
    ],
    qwords: 'كَيْفَ كَانَتْ (how did … go — PAST) · مَاذَا تَفْعَلُ (what do you do — PRESENT) · خِطَطُكَ (your plans — FUTURE) · اسْأَلْ (ask!)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', 'Hello …, how are you?'],
      ['1', 'أَوَّلًا، انْتَهَتِ الامْتِحَانَاتُ، وَكَانَتْ ______ أَصْعَبَ مَادَّةٍ.', 'Firstly, exams are over; … was the hardest.'],
      ['2', 'ثُمَّ بَدَأْتُ تَدْرِيبًا فِي ______ ، وَأُسَاعِدُ ______ .', 'Then I started training at …; I help …'],
      ['3', 'العَمَلُ ______ ، وَمَعَ ذٰلِكَ ______ .', 'The work is …; nevertheless …'],
      ['4', 'لِذٰلِكَ سَأَدْرُسُ ______ . وَأَنْتَ، ______ ؟', 'So I’ll study … And you, …?'],
      ['end', 'إِلَى اللِّقَاءِ، ______', 'See you, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Yusuf, how are you? I have lots of news! Firstly, the exams are over, and chemistry was the hardest subject. Then I started training at the hospital pharmacy. I work from nine to three and help the pharmacist arrange the medicines. In addition, I’m learning how to talk to patients. The work is tiring; nevertheless I love it a lot. So I’ll study pharmacy at university, God willing. And you, what will you do this summer? See you, Adam.”',
      find: ['أَوَّلًا', 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'وَمَعَ ذٰلِكَ', 'لِذٰلِكَ سَأَدْرُسُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Yusuf, exam season is finally over; chemistry was the hardest, as expected, but organised revision saved me. This week I started a summer placement at the hospital pharmacy, helping the pharmacist (f.) sort and log medicines and watching how she explains their use to patients kindly and patiently. The hours are long and I come home tired, yet this experience has confirmed that pharmacy is the path I want. So I’ll apply to pharmacy schools in the autumn, and if I’m not accepted, I’ll study chemistry first. And you — how are you spending your summer? Have you found a job? Best wishes, Adam.”',
      find: ['غَيْرَ أَنَّ', 'حَيْثُ أُسَاعِدُ', 'صَحِيحٌ أَنَّ … إِلَّا أَنَّ', 'إِذَا لَمْ أُقْبَلْ'],
    },
  },
  Q3: {
    a: { title: 'مِنَ المَدْرَسَةِ إِلَى مِهْنَةِ المُسْتَقْبَلِ', en: 'From school to my future career', bullets: 'دِرَاسَتُكَ الآنَ وَفِي المَاضِي · المَهَارَاتُ وَالشَّهَادَاتُ · تَجْرِبَةُ عَمَلٍ أَوْ تَطَوُّعٍ · طُمُوحَاتُكَ وَخُطَّتُكَ البَدِيلَةُ', bulletsEn: 'Your studies now and before · skills and certificates · a work or volunteering experience · your ambitions and plan B' },
    b: { title: 'هَلْ تُعِدُّنَا المَدْرَسَةُ لِعَالَمِ العَمَلِ؟', en: 'Does school prepare us for the world of work?', bullets: 'المُشْكِلَةُ · مَا تُقَدِّمُهُ المَدْرَسَةُ وَمَا يَنْقُصُهَا · مِثَالٌ مِنْ تَجْرِبَتِكَ · رَأْيُكَ وَاقْتِرَاحُكَ', bulletsEn: 'The issue · what school offers and lacks · an example from your experience · your opinion and suggestion' },
    plan: [
      'Studies — awwalan, anā al-āna fī …; fī al-ibtidāʾiyya kuntu …; urājiʿu …',
      'Skills — bi-l-iḍāfati ilā dhālika, ataṭawwaʿu …; ḥaṣaltu ʿalā shahāda …',
      'Experience — ʿamiltu / tadarrabtu fī …; kāna al-ʿamal mutʿiban, wa-maʿa dhālika …',
      'Ambition + plan B — li-dhālika aṭmaḥu ilā an …; idhā lam uqbal fa-sa- …; lan atruka …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'أَدْرُسُ الكِيمْيَاءَ، وَأُرَاجِعُ كُلَّ يَوْمٍ سَاعَتَيْنِ.', en: 'present: I study chemistry and revise two hours a day.' },
      { ar: 'عَمِلْتُ فِي صَيْدَلِيَّةٍ، وَكَانَ العَمَلُ مُتْعِبًا، وَمَعَ ذٰلِكَ كَانَ مُمْتِعًا.', en: 'past: I worked in a pharmacy; it was tiring, yet fun.' },
      { ar: 'لِذٰلِكَ أَطْمَحُ إِلَى أَنْ أُصْبِحَ صَيْدَلَانِيًّا.', en: 'future: so I aspire to become a pharmacist.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Year 12: chemistry, biology and maths; I revise two hours a day; in primary I loved science → I volunteer at a care home and learnt patience; first-aid certificate → last summer two weeks in a pharmacy: tiring, yet enjoyable → so I aspire to be a pharmacist; if not accepted, I’ll study chemistry first. I won’t give up my dream.', find: ['أَوَّلًا', 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'وَمَعَ ذٰلِكَ', 'لِذٰلِكَ أَطْمَحُ'], notes: 'Core model: the whole Topic D journey — subjects and revision (L03–L04), skills and certificates (L05, L08), work experience (L07), ambitions and plan B (L10) — with four linkers and three tenses.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Looking back, my journey towards a career began not in the careers office but in our kitchen, where at eight I mixed ingredients convinced I was a great scientist! → over the years that curiosity became a real passion for chemistry, which I chose with biology and maths; although it is my hardest subject, organised revision and past papers made me excel → but books alone weren’t enough: I volunteered at a care home and trained two weeks in the hospital pharmacy, discovering that a pharmacist is not only a lab scientist but also someone who listens and reassures → so I aspire to study pharmacy, then work in a children’s hospital, where children and families need a kind word; the road is long, but I have a plan B; “if that little boy in the kitchen could see me today, he would smile with pride”.', find: ['لَمْ تَبْدَأْ … بَلْ', 'مَعَ أَنَّهَا … فَإِنَّ', 'لَيْسَ … فَحَسْبُ، بَلْ', 'لَوْ رَآنِي … لَابْتَسَمَ'], notes: 'Full-mark model: ḥīna, lam … bal, a ḥāl clause (wa-anā fī ath-thāmina), muqtaniʿan bi-anna, maʿa anna … fa-inna with a dual verb, laysa … fa-ḥasbu bal, li-dhālika, a concession and law … la- — four Topic D lessons woven together.' },
      { which: 'ب', level: 'Full', subtitle: 'does school prepare us for work?', text: Q3B_FULL, en: 'A student spends about thirteen years at school, then is suddenly asked to write a CV, pass an interview and choose a career for life — does school really prepare them for this moment? → school gives an indispensable base of knowledge and teaches discipline and time management; but it rarely teaches practical skills like professional communication and money management, which makes the move to work a shock for many, who feel unready despite high grades → I saw the difference when my school held its first “careers week”: we practised interviews with real employees and wrote our CVs, and half my class, me included, got summer placements → school can’t teach everything, but one week made a big difference; “if schools worked with local companies, young people would enter the world of work with confidence instead of fear”.', find: ['يُطْلَبُ مِنْهُ فَجْأَةً', 'لَا غِنَى عَنْهُ', 'مِمَّا يَجْعَلُ', 'إِذَا تَعَاوَنَتْ … فَسَيَدْخُلُ'], notes: 'Full-mark model for the Stretch title: thalātha ʿashrata sanatan, a passive (yuṭlabu) with three subjunctives, a rhetorical question, a balanced view with nādiran mā and mimmā, a narrated example with fa- result, a concession and idhā … fa-sa- with badalan min.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic, across all of Topic D.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: three linking words and past, present and future.' },
    { route: 'develop', text: 'Q3: four paragraphs, from school to skills to work to the future.' },
    { route: 'stretch', text: 'Q3: four or more linkers, a concession and a conditional.' },
  ],
};

module.exports = { speak, write };
