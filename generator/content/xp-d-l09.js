'use strict';
/* Exam-practice data · TD-L09 · Applications and Interviews (formal questions; past experience; object pronouns). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'D', n: 9, short: 'Applications and Interviews', arShort: 'الطَّلَبَاتُ وَالمُقَابَلَاتُ', fileTitle: 'Applications_and_Interviews', title: 'Applications and Interviews', ar: 'طَلَبَاتُ التَّوْظِيفِ وَالمُقَابَلَاتُ', icon: 'FaFileLines', grammar: 'formal questions (hal yumkinunī an …? · mā hiya …?); past experience (ʿamiltu, katabtu, nazzamtu); object pronouns (asāʿiduhum, aʿṭānī iyyāhā, nazzamtuhu)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: read job adverts, answer interview questions formally, talk about past experience (عَمِلْتُ · نَظَّمْتُ · تَعَلَّمْتُ) using object pronouns (أُسَاعِدُهُمْ · نَظَّمْتُهُ), and ask the interviewer polite questions (هَلْ يُمْكِنُنِي أَنْ أَسْأَلَ …؟).',
  words: [
    w(1, 'إِعْلَانُ وَظِيفَةٍ', 'a job advert', [['pl.', 'إِعْلَانَاتُ وَظَائِفَ'], ['vacancy', 'وَظِيفَةٌ شَاغِرَةٌ']]),
    w(2, 'طَلَبُ تَوْظِيفٍ', 'a job application', [['I apply for a job', 'أَتَقَدَّمُ لِوَظِيفَةٍ'], ['applicant (m. · f.)', 'مُتَقَدِّمٌ · مُتَقَدِّمَةٌ']]),
    w(3, 'سِيرَةٌ ذَاتِيَّةٌ', 'a CV', [['pl.', 'سِيَرٌ ذَاتِيَّةٌ'], ['cover letter', 'رِسَالَةُ تَقْدِيمٍ']]),
    w(4, 'مُقَابَلَةٌ', 'an interview', [['pl.', 'مُقَابَلَاتٌ'], ['interviewer', 'المُحَاوِرُ · المُحَاوِرَةُ']]),
    w(5, 'خِبْرَةٌ', 'experience', [['pl.', 'خِبْرَاتٌ'], ['previous', 'خِبْرَةٌ سَابِقَةٌ']]),
    w(6, 'تَوْصِيَةٌ', 'a reference', [['pl.', 'تَوْصِيَاتٌ'], ['referee', 'المُوصِي · المُوصِيَةُ']]),
    w(7, 'عَمِلْتُ · نَظَّمْتُ · تَعَلَّمْتُ', 'I worked · organised · learnt', [['he', 'عَمِلَ · نَظَّمَ · تَعَلَّمَ'], ['she', 'عَمِلَتْ · نَظَّمَتْ · تَعَلَّمَتْ']], { tag: 'past' }),
    w(8, 'أُسَاعِدُهُمْ', 'I help them', [['her', 'أُسَاعِدُهَا'], ['him', 'أُسَاعِدُهُ'], ['you (formal)', 'أُسَاعِدُكُمْ']], { tag: 'object pronouns' }),
    w(9, 'هَلْ يُمْكِنُنِي أَنْ …؟', 'may I …?', [['could you …?', 'هَلْ يُمْكِنُكَ أَنْ …؟'], ['what are …?', 'مَا هِيَ …؟']], { tag: 'formal questions' }),
    w(10, 'رَاتِبٌ شَهْرِيٌّ', 'a monthly salary', [['contract', 'عَقْدٌ'], ['trial period', 'فَتْرَةُ تَجْرِبَةٍ']]),
    w(11, 'مُتَحَمِّسٌ', 'keen, enthusiastic (m.)', [['f.', 'مُتَحَمِّسَةٌ'], ['enthusiasm', 'الحَمَاسُ']]),
    w(12, 'يَسُرُّنِي أَنْ …', 'I am pleased to …', [['I would like to', 'أَوَدُّ أَنْ'], ['thank you for your time', 'شُكْرًا عَلَى وَقْتِكُمْ']], { tag: 'register' }),
  ],
  words1: { eyebrow: 'Language bank · applications and interviews', title: 'Advert, CV, interview', ar: 'التَّقَدُّمُ لِوَظِيفَةٍ', notes: 'LANGUAGE BANK (2 min) — formal register: أَوَدُّ أَنْ أَتَقَدَّمَ لِوَظِيفَةِ … · يَسُرُّنِي أَنْ أُرْسِلَ لَكُمْ سِيرَتِي الذَّاتِيَّةَ. In an interview use حَضْرَتُكَ / حَضْرَتُكِ for “you” and finish with شُكْرًا عَلَى وَقْتِكُمْ.' },
  words2: { eyebrow: 'Language bank · past experience and object pronouns', title: 'I organised it, I helped them', ar: 'خِبْرَتِي السَّابِقَةُ', notes: 'LANGUAGE BANK (2 min) — attach the object to the verb: نَظَّمْتُ الحَفْلَ → نَظَّمْتُهُ · سَاعَدْتُ الأَطْفَالَ → سَاعَدْتُهُمْ · كَتَبْتُ الرِّسَالَةَ → كَتَبْتُهَا. Two objects: أَعْطَانِي إِيَّاهَا (he gave it to me).' },
  checkCore: 'answered interview questions in full, formal sentences',
  checkDevelop: 'described past experience using an object pronoun',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a phone enquiry', title: 'Role play A — Phoning about a job advert', ar: 'اسْتِفْسَارٌ عَنْ وَظِيفَةٍ', you: 'a young applicant', them: 'a hotel receptionist',
      tasks: [
        { core: true, ex: 'فُنْدُقُ النَّخِيلِ، صَبَاحَ الخَيْرِ.', task: 'Say why you are calling.', help: 'أَتَّصِلُ بِخُصُوصِ …', model: 'صَبَاحَ النُّورِ، أَتَّصِلُ بِخُصُوصِ إِعْلَانِ الوَظِيفَةِ.', modelEn: 'Good morning, I’m calling about the job advert.' },
        { core: true, ex: 'أَيُّ وَظِيفَةٍ؟', task: 'Name the job.', help: 'وَظِيفَةُ …', model: 'وَظِيفَةُ مُسَاعِدٍ فِي المَطْعَمِ.', modelEn: 'The restaurant assistant job.' },
        { core: true, ex: 'كَمْ عُمْرُكَ؟', task: 'Give your age.', help: 'عُمْرِي …', model: 'عُمْرِي سَبْعَ عَشْرَةَ سَنَةً.', modelEn: 'I am seventeen.' },
        { core: true, ex: 'هَلْ عِنْدَكَ سِيرَةٌ ذَاتِيَّةٌ؟', task: 'Answer and offer to send it.', help: 'نَعَمْ، سَأُرْسِلُهَا …', model: 'نَعَمْ، سَأُرْسِلُهَا بِالبَرِيدِ الإِلِكْتْرُونِيِّ اليَوْمَ.', modelEn: 'Yes, I’ll send it by email today.' },
        { core: true, unexpected: true, ex: 'مَتَى تَسْتَطِيعُ أَنْ تَأْتِيَ لِلْمُقَابَلَةِ؟', task: 'Answer the unexpected question.', help: 'أَسْتَطِيعُ أَنْ آتِيَ يَوْمَ …', model: 'أَسْتَطِيعُ أَنْ آتِيَ يَوْمَ الخَمِيسِ بَعْدَ الظُّهْرِ.', modelEn: 'I can come on Thursday afternoon.' },
      ],
      girl: 'عُمْرُكِ · عِنْدَكِ · تَسْتَطِيعِينَ · مُسَاعِدَةٍ',
      notes: 'Core: bi-khuṣūṣi, waẓīfatu musāʿidin (iḍāfa), sabʿa ʿashrata sanatan, sa-ursiluhā (object pronoun -hā for as-sīra), an ātiya (subjunctive).',
    },
    {
      id: 'B', level: 'Core+', setting: 'a short interview', title: 'Role play B — Interview for a shop assistant job', ar: 'مُقَابَلَةٌ فِي مَحَلٍّ', you: 'an applicant', them: 'the shop manager',
      tasks: [
        { core: true, ex: 'تَفَضَّلْ بِالجُلُوسِ. لِمَاذَا تُرِيدُ هٰذِهِ الوَظِيفَةَ؟', task: 'Give a reason.', help: 'لِأَنِّي أُحِبُّ … وَأُرِيدُ أَنْ …', model: 'لِأَنِّي أُحِبُّ التَّعَامُلَ مَعَ النَّاسِ، وَأُرِيدُ أَنْ أَكْسِبَ خِبْرَةً.', modelEn: 'Because I enjoy dealing with people and want to gain experience.' },
        { core: true, ex: 'هَلْ عَمِلْتَ مِنْ قَبْلُ؟', task: 'Describe past work.', help: 'نَعَمْ، عَمِلْتُ فِي …', model: 'نَعَمْ، عَمِلْتُ فِي مَخْبَزٍ فِي الصَّيْفِ المَاضِي.', modelEn: 'Yes, I worked in a bakery last summer.' },
        { ex: 'وَمَاذَا كُنْتَ تَفْعَلُ هُنَاكَ؟', task: 'Give duties with object pronouns.', help: 'كُنْتُ أَبِيعُ … وَأُرَتِّبُهُ …', model: 'كُنْتُ أَبِيعُ الخُبْزَ وَأُرَتِّبُهُ عَلَى الرُّفُوفِ، وَأُسَاعِدُ الزَّبَائِنَ وَأُجِيبُ عَنْ أَسْئِلَتِهِمْ.', modelEn: 'I sold bread and arranged it on the shelves, and helped customers and answered their questions.' },
        { ex: 'هَلْ عِنْدَكَ أَسْئِلَةٌ؟', task: 'ASK a formal question.', help: 'هَلْ يُمْكِنُنِي أَنْ أَسْأَلَ عَنْ …؟', model: 'نَعَمْ، هَلْ يُمْكِنُنِي أَنْ أَسْأَلَ عَنْ سَاعَاتِ العَمَلِ؟', modelEn: 'Yes, may I ask about the working hours?' },
        { unexpected: true, ex: 'مَا أَكْبَرُ نُقْطَةِ قُوَّةٍ عِنْدَكَ؟', task: 'Answer the unexpected question with evidence.', help: 'أَنَا … فَمَثَلًا …', model: 'أَنَا صَبُورٌ؛ فَمَثَلًا كَانَ بَعْضُ الزَّبَائِنِ غَاضِبِينَ، فَاسْتَمَعْتُ إِلَيْهِمْ بِهُدُوءٍ.', modelEn: 'I’m patient — some customers were angry, and I listened to them calmly.' },
      ],
      girl: 'تَفَضَّلِي · تُرِيدِينَ · عَمِلْتِ · كُنْتِ تَفْعَلِينَ · عِنْدَكِ',
      notes: 'Core+: verbal nouns (at-taʿāmul), kuntu + present with object pronouns (urattibuhu, asʾilatihim), the CANDIDATE asks formally (hal yumkinunī an …?), fa-mathalan + kāna + accusative plural.',
    },
    {
      id: 'C', level: 'Develop', setting: 'a volunteering interview', title: 'Role play C — Interview to be a museum guide', ar: 'مُرْشِدٌ فِي المَتْحَفِ', you: 'an applicant', them: 'the museum’s education officer',
      tasks: [
        { ex: 'حَدِّثْنَا عَنْ نَفْسِكَ.', task: 'Introduce yourself formally.', help: 'يَسُرُّنِي أَنْ … أَنَا … وَأَدْرُسُ …', model: 'يَسُرُّنِي أَنْ أَكُونَ هُنَا. أَنَا طَالِبٌ فِي الصَّفِّ الثَّانِي عَشَرَ، وَأَدْرُسُ التَّارِيخَ وَالعَرَبِيَّةَ.', modelEn: 'I’m pleased to be here. I’m in Year 12, studying history and Arabic.' },
        { ex: 'هَلْ لَدَيْكَ خِبْرَةٌ فِي التَّحَدُّثِ أَمَامَ الجُمْهُورِ؟', task: 'Describe a past experience with object pronouns.', help: 'نَعَمْ، نَظَّمْتُ … وَقَدَّمْتُهُ …', model: 'نَعَمْ، نَظَّمْتُ مَعْرِضًا عَنْ تَارِيخِ الأَنْدَلُسِ فِي مَدْرَسَتِي، وَقَدَّمْتُهُ لِأَوْلِيَاءِ الأُمُورِ، فَأَعْجَبَهُمْ كَثِيرًا.', modelEn: 'Yes, I organised an exhibition on al-Andalus at school and presented it to parents, who liked it very much.' },
        { ex: 'كَيْفَ تَشْرَحُ قِطْعَةً أَثَرِيَّةً لِلْأَطْفَالِ؟', task: 'Explain your method.', help: 'أَبْدَأُ بِـ … ثُمَّ أَطْلُبُ مِنْهُمْ أَنْ …', model: 'أَبْدَأُ بِسُؤَالٍ يُثِيرُ فُضُولَهُمْ، ثُمَّ أَحْكِي لَهُمْ قِصَّةً قَصِيرَةً عَنْهَا، وَأَطْلُبُ مِنْهُمْ أَنْ يَرْسُمُوهَا.', modelEn: 'I start with a question that sparks curiosity, then tell a short story about it, and ask them to draw it.' },
        { ex: 'العَمَلُ يَوْمَ السَّبْتِ. هَلْ يُنَاسِبُكَ؟', task: 'Answer and ask about training.', help: 'نَعَمْ يُنَاسِبُنِي. هَلْ يُمْكِنُنِي أَنْ أَسْأَلَ …؟', model: 'نَعَمْ، يُنَاسِبُنِي تَمَامًا. هَلْ يُمْكِنُنِي أَنْ أَسْأَلَ: هَلْ تُقَدِّمُونَ تَدْرِيبًا لِلْمُرْشِدِينَ الجُدُدِ؟', modelEn: 'Yes, it suits me perfectly. May I ask — do you offer training for new guides?' },
        { unexpected: true, ex: 'مَاذَا تَفْعَلُ إِذَا سَأَلَكَ زَائِرٌ سُؤَالًا لَا تَعْرِفُ جَوَابَهُ؟', task: 'Answer the unexpected question (condition).', help: 'إِذَا … فَسَـ…', model: 'إِذَا سَأَلَنِي سُؤَالًا لَا أَعْرِفُ جَوَابَهُ، فَسَأَعْتَرِفُ بِذٰلِكَ بِأَدَبٍ، وَسَأَبْحَثُ عَنِ الجَوَابِ، ثُمَّ أُرْسِلُهُ إِلَيْهِ.', modelEn: 'If asked something I don’t know, I’d admit it politely, find the answer and send it to them.' },
      ],
      girl: 'حَدِّثِينَا · نَفْسِكِ · لَدَيْكِ · تَشْرَحِينَ · يُنَاسِبُكِ · سَأَلَكِ',
      notes: 'Develop: formal yasurrunī an, object pronouns (qaddamtuhu, aʿjabahum, yarsumūhā, ursiluhu), a relative without alladhī, thumma, hal yumkinunī an + embedded question, idhā … fa-sa-.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a competitive interview', title: 'Role play D — Interview for a youth ambassador role', ar: 'سَفِيرُ الشَّبَابِ', you: 'a candidate', them: 'a panel member from a charity',
      tasks: [
        { ex: 'لِمَاذَا يَجِبُ أَنْ نَخْتَارَكَ أَنْتَ؟', task: 'Make a persuasive case with evidence.', help: 'لِأَنَّنِي … وَالدَّلِيلُ أَنَّنِي …', model: 'لِأَنَّنِي أَجْمَعُ بَيْنَ الحَمَاسِ وَالخِبْرَةِ؛ وَالدَّلِيلُ أَنَّنِي أَسَّسْتُ نَادِيًا لِلتَّطَوُّعِ فِي مَدْرَسَتِي، وَطَوَّرْتُهُ حَتَّى أَصْبَحَ يَضُمُّ خَمْسِينَ عُضْوًا.', modelEn: 'I combine enthusiasm and experience — I founded a volunteering club at school and grew it to fifty members.' },
        { ex: 'حَدِّثْنَا عَنْ فَشَلٍ تَعَلَّمْتَ مِنْهُ.', task: 'Describe a failure and the lesson.', help: 'فِي البِدَايَةِ … لٰكِنِّي تَعَلَّمْتُ أَنَّ …', model: 'فِي البِدَايَةِ نَظَّمْتُ حَمْلَةً لِجَمْعِ التَّبَرُّعَاتِ دُونَ تَخْطِيطٍ كَافٍ، فَلَمْ يَأْتِ أَحَدٌ، لٰكِنِّي تَعَلَّمْتُ أَنَّ الإِعْلَانَ المُبَكِّرَ نِصْفُ النَّجَاحِ.', modelEn: 'At first I organised a fundraiser with too little planning and nobody came — but I learnt early publicity is half of success.' },
        { ex: 'هٰذَا الدَّوْرُ يَتَطَلَّبُ وَقْتًا كَثِيرًا. أَلَنْ يُؤَثِّرَ فِي دِرَاسَتِكَ؟', task: 'Concede and reassure.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنِّي …', model: 'صَحِيحٌ أَنَّهُ يَتَطَلَّبُ وَقْتًا، غَيْرَ أَنِّي تَعَوَّدْتُ أَنْ أُوَازِنَ بَيْنَ الدِّرَاسَةِ وَالنَّشَاطَاتِ، وَنَتَائِجِي هٰذَا العَامَ أَفْضَلُ مِنَ العَامِ المَاضِي.', modelEn: 'It takes time, but I’m used to balancing study and activities, and my results this year are better than last.' },
        { ex: 'هَلْ لَدَيْكَ سُؤَالٌ لَنَا؟', task: 'ASK two formal questions.', help: 'نَعَمْ، أَوَدُّ أَنْ أَعْرِفَ … وَهَلْ …؟', model: 'نَعَمْ، أَوَدُّ أَنْ أَعْرِفَ مَا أَهَمُّ التَّحَدِّيَاتِ الَّتِي يُوَاجِهُهَا السُّفَرَاءُ، وَهَلْ سَيَكُونُ هُنَاكَ مُرْشِدٌ يُتَابِعُ عَمَلَنَا؟', modelEn: 'I’d like to know the main challenges ambassadors face, and whether a mentor will follow our work.' },
        { unexpected: true, ex: 'لَوْ لَمْ تُقْبَلْ، مَاذَا سَتَفْعَلُ؟', task: 'Answer the unexpected question (law lam … la-).', help: 'لَوْ لَمْ أُقْبَلْ، لَـ…', model: 'لَوْ لَمْ أُقْبَلْ، لَطَلَبْتُ مِنْكُمْ مُلَاحَظَاتٍ عَلَى أَدَائِي، وَلَتَقَدَّمْتُ مَرَّةً أُخْرَى فِي العَامِ القَادِمِ بِخِبْرَةٍ أَكْبَرَ.', modelEn: 'If I weren’t accepted, I’d ask you for feedback on my performance and apply again next year with more experience.' },
      ],
      girl: 'نَخْتَارَكِ · تَعَلَّمْتِ · دِرَاسَتِكِ · لَدَيْكِ · تُقْبَلِي',
      notes: 'Stretch: wa-d-dalīlu annanī, object pronouns (ṭawwartuhu, yuwājihuhā), ḥattā aṣbaḥa, a failure → lesson, a concession with evidence, formal indirect questions (awaddu an aʿrifa mā …), a passive law lam … la-.',
      modelFoot: 'Stretch: a persuasive case, a failure turned into a lesson, a concession with evidence, formal questions and law lam … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'الطَّلَبُ وَالمُقَابَلَةُ', aim: 'one full sentence per question',
      qs: [
        { q: 'هَلْ عِنْدَكَ سِيرَةٌ ذَاتِيَّةٌ؟', en: 'Do you have a CV?', start: 'نَعَمْ / لَا، …', model: 'نَعَمْ، كَتَبْتُهَا فِي حِصَّةِ المِهَنِ.', modelEn: 'Yes, I wrote it in a careers lesson.' },
        { q: 'هَلْ قُمْتَ بِمُقَابَلَةٍ مِنْ قَبْلُ؟', en: 'Have you had an interview before?', start: 'نَعَمْ، قُمْتُ بِمُقَابَلَةٍ لِـ …', model: 'نَعَمْ، قُمْتُ بِمُقَابَلَةٍ لِعَمَلٍ فِي مَقْهًى.', modelEn: 'Yes, an interview for a café job.' },
        { q: 'مَاذَا تَلْبَسُ فِي المُقَابَلَةِ؟', en: 'What do you wear to an interview?', start: 'أَلْبَسُ …', model: 'أَلْبَسُ مَلَابِسَ رَسْمِيَّةً وَنَظِيفَةً.', modelEn: 'I wear smart, clean clothes.' },
        { q: 'هَلْ تَشْعُرُ بِالتَّوَتُّرِ قَبْلَ المُقَابَلَةِ؟', en: 'Do you feel nervous before an interview?', start: 'نَعَمْ، قَلِيلًا، لٰكِنِّي …', model: 'نَعَمْ، قَلِيلًا، لٰكِنِّي أَتَدَرَّبُ قَبْلَهَا.', modelEn: 'Yes, a little, but I practise beforehand.' },
        { q: 'مَا الوَظِيفَةُ الَّتِي تُرِيدُ أَنْ تَتَقَدَّمَ لَهَا؟', en: 'Which job do you want to apply for?', start: 'أُرِيدُ أَنْ أَتَقَدَّمَ لِوَظِيفَةِ …', model: 'أُرِيدُ أَنْ أَتَقَدَّمَ لِوَظِيفَةِ مُدَرِّبِ سِبَاحَةٍ.', modelEn: 'A swimming-coach job.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + an object pronoun (katabtuhā, qablahā) = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'الاسْتِعْدَادُ لِلْعَمَلِ', aim: 'two or three sentences, with past experience and object pronouns',
      qs: [
        { q: 'كَيْفَ تَسْتَعِدُّ لِلْمُقَابَلَةِ؟', en: 'How do you prepare for an interview?', start: 'أَقْرَأُ عَنِ … ثُمَّ أَتَدَرَّبُ …', model: 'أَقْرَأُ عَنِ الشَّرِكَةِ وَأَتَعَرَّفُ عَلَى عَمَلِهَا، ثُمَّ أَتَدَرَّبُ عَلَى الأَسْئِلَةِ مَعَ أُمِّي.', modelEn: 'I read about the company and learn what it does, then practise questions with my mum.' },
        { q: 'صِفْ مُقَابَلَةً قُمْتَ بِهَا.', en: 'Describe an interview you had.', start: 'كَانَتِ المُقَابَلَةُ … سَأَلُونِي … فَـ…', model: 'كَانَتِ المُقَابَلَةُ فِي مَطْعَمٍ، وَسَأَلُونِي عَنْ خِبْرَتِي، فَأَخْبَرْتُهُمْ عَنْ عَمَلِي فِي المَخْبَزِ، وَقَبِلُونِي.', modelEn: 'It was at a restaurant; they asked about my experience, I told them about the bakery, and they accepted me.' },
        { q: 'مَا الَّذِي تَكْتُبُهُ فِي سِيرَتِكَ الذَّاتِيَّةِ؟', en: 'What do you put on your CV?', start: 'أَكْتُبُ فِيهَا …', model: 'أَكْتُبُ فِيهَا دِرَاسَتِي وَمَهَارَاتِي وَخِبْرَاتِي فِي التَّطَوُّعِ، وَأُرَاجِعُهَا بِدِقَّةٍ قَبْلَ أَنْ أُرْسِلَهَا.', modelEn: 'My studies, skills and volunteering, and I check it carefully before sending it.' },
        { q: 'مَا أَصْعَبُ سُؤَالٍ فِي المُقَابَلَاتِ؟', en: 'What is the hardest interview question?', start: 'أَصْعَبُ سُؤَالٍ … لِأَنَّ …', model: 'أَصْعَبُ سُؤَالٍ هُوَ "مَا نُقْطَةُ ضَعْفِكَ؟"، لِأَنَّنَا نَخَافُ أَنْ نُعْطِيَ صُورَةً سَيِّئَةً عَنْ أَنْفُسِنَا.', modelEn: '“What is your weakness?” — we’re afraid of giving a bad impression.' },
        { q: 'لِأَيِّ وَظِيفَةٍ سَتَتَقَدَّمُ فِي الصَّيْفِ؟', en: 'Which job will you apply for in summer?', start: 'سَأَتَقَدَّمُ لِـ … لِأَنَّ …', model: 'سَأَتَقَدَّمُ لِوَظِيفَةٍ فِي مُخَيَّمٍ لِلْأَطْفَالِ، لِأَنِّي أُحِبُّ الرِّيَاضَةَ، وَأَسْتَطِيعُ أَنْ أُدَرِّبَهُمْ.', modelEn: 'A children’s camp job — I love sport and can coach them.' },
      ],
      foot: 'Develop: two or three sentences — past experience, object pronouns and sequence (thumma, qabla an).',
      modelFoot: 'Past experience + object pronouns + time frame = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'التَّوْظِيفُ اليَوْمَ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلِ المُقَابَلَةُ أَفْضَلُ طَرِيقَةٍ لِاخْتِيَارِ المُوَظَّفِ؟', en: 'Is an interview the best way to choose an employee?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهَا تَكْشِفُ شَخْصِيَّةَ المُتَقَدِّمِ، غَيْرَ أَنَّ بَعْضَ الأَكْفَاءِ يَتَوَتَّرُونَ فِيهَا، فَلَا تَظْهَرُ قُدُرَاتُهُمُ الحَقِيقِيَّةُ.', modelEn: 'It reveals personality, but some capable people get nervous, so their true abilities don’t show.' },
        { q: 'هَلْ يَجِبُ أَنْ يَطْلُبَ أَصْحَابُ العَمَلِ صُوَرًا فِي السِّيرَةِ الذَّاتِيَّةِ؟', en: 'Should employers ask for photos on CVs?', start: 'لَا أَعْتَقِدُ ذٰلِكَ، لِأَنَّ …', model: 'لَا أَعْتَقِدُ ذٰلِكَ، لِأَنَّ الصُّورَةَ قَدْ تُؤَدِّي إِلَى التَّمْيِيزِ بِسَبَبِ الشَّكْلِ أَوِ العُمْرِ، بَدَلًا مِنَ المَهَارَاتِ.', modelEn: 'No — a photo can lead to discrimination by looks or age instead of skills.' },
        { q: 'مَا رَأْيُكَ فِي المُقَابَلَاتِ عَنْ بُعْدٍ؟', en: 'What do you think of online interviews?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، تُوَفِّرُ الوَقْتَ وَالسَّفَرَ، وَمِنْ نَاحِيَةٍ أُخْرَى، يَصْعُبُ فِيهَا بِنَاءُ عَلَاقَةٍ إِنْسَانِيَّةٍ مَعَ المُحَاوِرِ.', modelEn: 'They save time and travel, but it’s hard to build a human connection with the interviewer.' },
        { q: 'كَيْفَ كَانَ النَّاسُ يَجِدُونَ العَمَلَ فِي المَاضِي؟', en: 'How did people find work in the past?', start: 'كَانُوا … أَمَّا اليَوْمَ فَـ…', model: 'كَانُوا يَجِدُونَهُ عَنْ طَرِيقِ الأَقَارِبِ وَإِعْلَانَاتِ الصُّحُفِ، أَمَّا اليَوْمَ فَيَتَقَدَّمُ النَّاسُ لِعَشَرَاتِ الوَظَائِفِ عَلَى الإِنْتَرْنِتِ فِي يَوْمٍ وَاحِدٍ.', modelEn: 'Through relatives and newspaper ads; today people apply for dozens of jobs online in a day.' },
        { q: 'لَوْ كُنْتَ تُجْرِي مُقَابَلَةً، مَا السُّؤَالُ الَّذِي تَطْرَحُهُ؟', en: 'If you were interviewing, what question would you ask?', start: 'لَوْ كُنْتُ …، لَسَأَلْتُ …', model: 'لَوْ كُنْتُ أُجْرِي مُقَابَلَةً، لَسَأَلْتُ: "حَدِّثْنِي عَنْ مَرَّةٍ سَاعَدْتَ فِيهَا زَمِيلًا دُونَ أَنْ يَطْلُبَ مِنْكَ أَحَدٌ ذٰلِكَ."', modelEn: '“Tell me about a time you helped a colleague without anyone asking you to.”' },
      ],
      foot: 'Stretch: a concession, yuʾaddī ilā + badalan min, a balanced view, kānū + object pronoun vs ammā … fa-, law … la-.',
      modelFoot: 'Stretch: ṣaḥīḥun anna … ghayra anna, cause → effect, balance, past vs present and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I answered interview questions in full, polite sentences.' },
    { route: 'core', text: 'I described a past job with ʿamiltu / kuntu aʿmalu.' },
    { route: 'develop', text: 'I used object pronouns (sāʿadtuhum, nazzamtuhu, katabtuhā).' },
    { route: 'develop', text: 'I asked a formal question (hal yumkinunī an …?).' },
    { route: 'stretch', text: 'I gave evidence, a concession or law … la-.' },
  ],
};
speak.RP[2].tasks[2].help = 'أَبْدَأُ بِسُؤَالٍ … ثُمَّ أَطْلُبُ مِنْهُمْ أَنْ …';
speak.RP[2].tasks[4].help = 'إِذَا سَأَلَنِي …، فَسَأَعْتَرِفُ …';
speak.RP[3].tasks[4].help = 'لَوْ لَمْ أُقْبَلْ، لَطَلَبْتُ …';
speak.CONV[0].qs[1].start = 'نَعَمْ، قُمْتُ بِمُقَابَلَةٍ لِعَمَلٍ فِي …';
speak.CONV[1].qs[1].start = 'كَانَتِ المُقَابَلَةُ … سَأَلُونِي … فَأَخْبَرْتُهُمْ …';
speak.CONV[1].qs[4].start = 'سَأَتَقَدَّمُ لِوَظِيفَةٍ فِي … لِأَنَّ …';
speak.CONV[2].qs[3].start = 'كَانُوا يَجِدُونَهُ … أَمَّا اليَوْمَ فَيَتَقَدَّمُ …';
speak.CONV[2].qs[4].start = 'لَوْ كُنْتُ أُجْرِي مُقَابَلَةً، لَسَأَلْتُ …';

const Q2_CORE = `إِلَى مُدِيرِ مَكْتَبَةِ المَدِينَةِ،
أَوَدُّ أَنْ أَتَقَدَّمَ لِوَظِيفَةِ المُسَاعِدِ الَّتِي رَأَيْتُهَا فِي إِعْلَانِكُمْ. اسْمِي سَامِي، وَعُمْرِي سَبْعَ عَشْرَةَ سَنَةً، وَأَدْرُسُ فِي الصَّفِّ الثَّانِي عَشَرَ. أُحِبُّ الكُتُبَ كَثِيرًا، وَأَنَا مُنَظَّمٌ وَصَبُورٌ. فِي الصَّيْفِ المَاضِي عَمِلْتُ فِي مَكْتَبَةِ المَدْرَسَةِ، وَكُنْتُ أُرَتِّبُ الكُتُبَ وَأُسَاعِدُ الطُّلَّابَ فِي البَحْثِ عَنْهَا. أُرِيدُ هٰذِهِ الوَظِيفَةَ لِأَنَّهَا تُنَاسِبُ دِرَاسَتِي، وَسَأَتَعَلَّمُ مِنْهَا كَثِيرًا. هَلْ يُمْكِنُنِي أَنْ أَسْأَلَ عَنْ سَاعَاتِ العَمَلِ؟ سَأُرْسِلُ لَكُمْ سِيرَتِي الذَّاتِيَّةَ مَعَ هٰذِهِ الرِّسَالَةِ.
مَعَ الشُّكْرِ،
سَامِي أَحْمَدُ`;
const Q2_FULL = `حَضْرَةَ مُدِيرِ مَكْتَبَةِ المَدِينَةِ المُحْتَرَمِ،
يَسُرُّنِي أَنْ أَتَقَدَّمَ لِوَظِيفَةِ المُسَاعِدِ الَّتِي نَشَرْتُمُوهَا عَلَى مَوْقِعِكُمْ هٰذَا الأُسْبُوعَ. فَأَنَا طَالِبٌ فِي الصَّفِّ الثَّانِي عَشَرَ، شَغُوفٌ بِالقِرَاءَةِ، وَأَتَمَيَّزُ بِالتَّنْظِيمِ وَالدِّقَّةِ. وَقَدْ عَمِلْتُ الصَّيْفَ المَاضِي مُتَطَوِّعًا فِي مَكْتَبَةِ مَدْرَسَتِي، حَيْثُ أَعَدْتُ تَصْنِيفَ قِسْمِ الرِّوَايَاتِ كُلِّهِ، وَنَظَّمْتُ نَادِيًا لِلْقِرَاءَةِ وَأَدَرْتُهُ أُسْبُوعِيًّا. وَأَرَى أَنَّ هٰذِهِ الوَظِيفَةَ فُرْصَةٌ لِأُطَوِّرَ مَهَارَاتِي فِي التَّعَامُلِ مَعَ الجُمْهُورِ. وَأَوَدُّ أَنْ أَسْأَلَ: هَلْ يُمْكِنُ أَنْ تَكُونَ سَاعَاتُ العَمَلِ مَرِنَةً فِي فَتْرَةِ الامْتِحَانَاتِ؟ تَجِدُونَ مُرْفَقًا سِيرَتِي الذَّاتِيَّةَ وَتَوْصِيَةً مِنْ أَمِينَةِ المَكْتَبَةِ.
وَتَفَضَّلُوا بِقَبُولِ فَائِقِ الاحْتِرَامِ،
سَامِي أَحْمَدُ`;
const Q3A_CORE = `فِي السَّنَةِ المَاضِيَةِ تَقَدَّمْتُ لِأَوَّلِ وَظِيفَةٍ فِي حَيَاتِي. كَانَتْ وَظِيفَةً فِي مَقْهًى قُرْبَ بَيْتِي، يَوْمَ السَّبْتِ فَقَطْ. رَأَيْتُ الإِعْلَانَ عَلَى نَافِذَةِ المَقْهَى، فَكَتَبْتُ سِيرَتِي الذَّاتِيَّةَ، وَأَرْسَلْتُهَا فِي اليَوْمِ نَفْسِهِ. كُنْتُ مُتَحَمِّسًا جِدًّا.
قَبْلَ المُقَابَلَةِ كُنْتُ مُتَوَتِّرًا جِدًّا. قَرَأْتُ عَنِ المَقْهَى، وَتَدَرَّبْتُ عَلَى الأَسْئِلَةِ مَعَ أُمِّي. لَبِسْتُ مَلَابِسَ نَظِيفَةً وَرَسْمِيَّةً، وَوَصَلْتُ قَبْلَ المَوْعِدِ بِعَشْرِ دَقَائِقَ. أَخَذْتُ مَعِي نُسْخَةً مِنْ سِيرَتِي.
فِي المُقَابَلَةِ سَأَلَتْنِي المُدِيرَةُ عَنْ خِبْرَتِي. أَخْبَرْتُهَا أَنِّي أُسَاعِدُ أَبِي فِي مَحَلِّهِ، وَأَنِّي أُحِبُّ العَمَلَ مَعَ النَّاسِ. ثُمَّ سَأَلْتُهَا عَنْ سَاعَاتِ العَمَلِ. بَعْدَ يَوْمَيْنِ اتَّصَلَتْ بِي، وَقَبِلَتْنِي! فَرِحْتُ كَثِيرًا.
فِي رَأْيِي، الاسْتِعْدَادُ أَهَمُّ شَيْءٍ قَبْلَ المُقَابَلَةِ. فِي المُسْتَقْبَلِ سَأَتَقَدَّمُ لِوَظَائِفَ أُخْرَى، وَسَأُضِيفُ كُلَّ خِبْرَةٍ جَدِيدَةٍ إِلَى سِيرَتِي الذَّاتِيَّةِ، لِكَيْ أَجِدَ عَمَلًا أَفْضَلَ.`;
const Q3A_FULL = `مَا زِلْتُ أَتَذَكَّرُ يَدَيَّ تَرْتَجِفَانِ وَأَنَا أَطْرُقُ بَابَ مَكْتَبِ المُدِيرَةِ فِي أَوَّلِ مُقَابَلَةِ عَمَلٍ فِي حَيَاتِي. كَانَتِ الوَظِيفَةُ بَسِيطَةً: مُسَاعِدٌ فِي مَقْهًى يَوْمَ السَّبْتِ، غَيْرَ أَنَّهَا بَدَتْ لِي يَوْمَهَا أَهَمَّ مِنْ أَيِّ امْتِحَانٍ، لِأَنَّهَا كَانَتْ خُطْوَتِي الأُولَى نَحْوَ الاسْتِقْلَالِ.
وَقَدِ اسْتَعْدَدْتُ لَهَا جَيِّدًا؛ فَقَرَأْتُ عَنِ المَقْهَى وَتَارِيخِهِ وَقَائِمَةِ طَعَامِهِ، وَكَتَبْتُ عَشَرَةَ أَسْئِلَةٍ مُتَوَقَّعَةً، وَتَدَرَّبْتُ عَلَيْهَا مَعَ أَخِي الَّذِي لَعِبَ دَوْرَ المُحَاوِرِ بِجِدِّيَّةٍ أَضْحَكَتْنَا كَثِيرًا.
وَفِي المُقَابَلَةِ، فَاجَأَتْنِي المُدِيرَةُ بِسُؤَالٍ لَمْ أَتَوَقَّعْهُ: "مَاذَا تَفْعَلُ إِذَا أَسْقَطْتَ صِينِيَّةً أَمَامَ الزَّبَائِنِ؟". فَابْتَسَمْتُ وَقُلْتُ إِنَّنِي سَأَعْتَذِرُ، ثُمَّ أُنَظِّفُ المَكَانَ بِسُرْعَةٍ، وَأُحْضِرُ طَلَبًا جَدِيدًا عَلَى حِسَابِي. وَبَعْدَ يَوْمَيْنِ اتَّصَلَتْ بِي لِتُخْبِرَنِي أَنَّ جَوَابِي أَعْجَبَهَا، وَأَنَّنِي قُبِلْتُ.
صَحِيحٌ أَنَّ الاسْتِعْدَادَ ضَرُورِيٌّ، غَيْرَ أَنَّ الهُدُوءَ وَالصِّدْقَ هُمَا مَا يُقْنِعُ المُحَاوِرَ فِي النِّهَايَةِ، لَا الإِجَابَاتُ المَحْفُوظَةُ. وَلَوْ عُدْتُ إِلَى تِلْكَ اللَّحْظَةِ، لَقُلْتُ لِنَفْسِي: "لَا تَخَفْ، فَهُمْ يُرِيدُونَ أَنْ تَنْجَحَ".`;
const Q3B_FULL = `قَبْلَ عِشْرِينَ سَنَةً، كَانَ البَاحِثُ عَنْ عَمَلٍ يَقْرَأُ إِعْلَانَاتِ الصُّحُفِ، وَيَكْتُبُ رِسَالَةً بِخَطِّ يَدِهِ، ثُمَّ يَنْتَظِرُ الرَّدَّ أَسَابِيعَ. أَمَّا اليَوْمَ، فَيَتَقَدَّمُ لِعَشَرَاتِ الوَظَائِفِ بِضَغْطَةِ زِرٍّ، وَقَدْ يُقَابِلُهُ بَرْنَامَجٌ ذَكِيٌّ قَبْلَ أَنْ يُقَابِلَهُ إِنْسَانٌ.
مِنْ نَاحِيَةٍ، جَعَلَتِ التِّكْنُولُوجْيَا التَّقَدُّمَ لِلْوَظَائِفِ أَسْرَعَ وَأَسْهَلَ، وَأَتَاحَتْ لِلشَّبَابِ أَنْ يَعْمَلُوا مَعَ شَرِكَاتٍ فِي بُلْدَانٍ أُخْرَى. وَمِنْ نَاحِيَةٍ أُخْرَى، تَرْفُضُ بَعْضُ البَرَامِجِ السِّيَرَ الذَّاتِيَّةَ تِلْقَائِيًّا إِذَا لَمْ تَجِدْ فِيهَا كَلِمَاتٍ مُعَيَّنَةً، مِمَّا قَدْ يَظْلِمُ مُتَقَدِّمِينَ أَكْفَاءَ.
وَقَدْ عَاشَتْ أُخْتِي هٰذِهِ التَّجْرِبَةَ؛ فَبَعْدَ تَخَرُّجِهَا أَرْسَلَتْ أَكْثَرَ مِنْ خَمْسِينَ طَلَبًا دُونَ أَنْ يَرُدَّ عَلَيْهَا أَحَدٌ، إِلَى أَنْ نَصَحَهَا مُرْشِدٌ بِأَنْ تُعَدِّلَ سِيرَتَهَا لِكُلِّ وَظِيفَةٍ، فَدُعِيَتْ إِلَى ثَلَاثِ مُقَابَلَاتٍ فِي أُسْبُوعٍ وَاحِدٍ.
صَحِيحٌ أَنَّ الآلَاتِ تُسَاعِدُ الشَّرِكَاتِ عَلَى تَوْفِيرِ الوَقْتِ، غَيْرَ أَنَّ القَرَارَ النِّهَائِيَّ يَجِبُ أَنْ يَبْقَى إِنْسَانِيًّا. وَإِذَا تَعَلَّمَ الشَّبَابُ كَيْفَ يُقَدِّمُونَ أَنْفُسَهُمْ بِذَكَاءٍ، فَسَيَصِلُونَ إِلَى المُقَابَلَةِ، حَيْثُ تَتَكَلَّمُ شَخْصِيَّاتُهُمْ عَنْهُمْ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a job application form, write a formal letter applying for a job, and write an extended piece about your first interview or about how job hunting has changed.',
  lift: [
    { ar: 'أَوَدُّ أَنْ أَتَقَدَّمَ لِوَظِيفَةِ المُسَاعِدِ الَّتِي رَأَيْتُهَا', en: 'I would like to apply for the assistant post I saw' },
    { ar: 'نَظَّمْتُ نَادِيًا لِلْقِرَاءَةِ وَأَدَرْتُهُ أُسْبُوعِيًّا', en: 'I organised a reading club and ran it weekly' },
    { ar: 'هَلْ يُمْكِنُنِي أَنْ أَسْأَلَ عَنْ سَاعَاتِ العَمَلِ؟', en: 'may I ask about the working hours?' },
  ],
  checkTip: 'Check the register: awaddu an / yasurrunī an + subjunctive, ḥaḍrat … al-muḥtaram, wa-tafaḍḍalū bi-qabūli fāʾiqi al-iḥtirām. Object pronouns agree with what they replace (as-sīra → arsaltuhā; an-nādī → adartuhu; aṭ-ṭullāb → sāʿadtuhum).',
  FORM: {
    title: 'Job application form', ar: 'اسْتِمَارَةُ طَلَبِ وَظِيفَةٍ',
    fields: [
      { core: true, ar: 'الاسْمُ الكَامِلُ', en: 'Full name', model: 'سَامِي أَحْمَدُ', modelEn: 'Sami Ahmed' },
      { core: true, ar: 'تَارِيخُ المِيلَادِ', en: 'Date of birth', model: '١٥ مَارِس ٢٠٠٨', modelEn: '15 March 2008' },
      { core: true, ar: 'الوَظِيفَةُ المَطْلُوبَةُ', en: 'Position applied for', model: 'مُسَاعِدٌ فِي المَكْتَبَةِ', modelEn: 'library assistant' },
      { core: true, ar: 'المُؤَهِّلَاتُ', en: 'Qualifications', model: 'الشَّهَادَةُ الثَّانَوِيَّةُ (قَيْدَ الدِّرَاسَةِ)', modelEn: 'A levels (in progress)' },
      { core: true, ar: 'الخِبْرَةُ السَّابِقَةُ', en: 'Previous experience', model: 'مُتَطَوِّعٌ فِي مَكْتَبَةِ المَدْرَسَةِ', modelEn: 'volunteer in the school library' },
      { core: true, ar: 'اللُّغَاتُ', en: 'Languages', model: 'الإِنْجْلِيزِيَّةُ وَالعَرَبِيَّةُ', modelEn: 'English and Arabic' },
      { ar: 'اسْمُ المُوصِي', en: 'Name of referee', model: 'السَّيِّدَةُ مَرْيَمُ، أَمِينَةُ المَكْتَبَةِ', modelEn: 'Mrs Maryam, the librarian' },
      { ar: 'جُمْلَةٌ: مَاذَا فَعَلْتَ فِي عَمَلِكَ السَّابِقِ؟', en: 'ONE sentence: what you did in your last role', model: 'نَظَّمْتُ نَادِيًا لِلْقِرَاءَةِ، وَأَدَرْتُهُ كُلَّ أُسْبُوعٍ لِمُدَّةِ سَنَةٍ.', modelEn: 'I organised a reading club and ran it weekly for a year.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with a past verb and an object pronoun.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 7: as-sayyida … amīnatu al-maktaba (f. agreement). Box 8: adartuhu (-hu = an-nādī).',
  },
  Q2: {
    short: 'a formal job application letter', title: 'Question 2: applying for a job', ar: 'رِسَالَةُ طَلَبِ وَظِيفَةٍ',
    task: 'You have seen an advert for a part-time job at the town library. Write a formal letter in Arabic of about 80–90 words. You must include: • which job you are applying for and who you are • your qualities • your previous experience • why you want the job, a question, and what you are sending with the letter.',
    checklist: ['All four bullet points, in order.', 'A formal greeting and closing.', 'A past experience with an object pronoun.', 'A formal question (hal yumkinunī an …?).', 'About 80–90 words.'],
    phrases: [['أَوَدُّ أَنْ أَتَقَدَّمَ لِوَظِيفَةِ …', 'I would like to apply for the post of …'], ['عَمِلْتُ فِي … وَكُنْتُ أُرَتِّبُ … وَأُسَاعِدُ …', 'I worked in … and used to arrange … and help …'], ['هَلْ يُمْكِنُنِي أَنْ أَسْأَلَ عَنْ …؟', 'may I ask about …?'], ['سَأُرْسِلُ لَكُمْ سِيرَتِي الذَّاتِيَّةَ', 'I will send you my CV']],
    rubric: [
      ['task', 'رَأَيْتَ إِعْلَانًا عَنْ وَظِيفَةٍ فِي مَكْتَبَةِ المَدِينَةِ. اكْتُبْ رِسَالَةً رَسْمِيَّةً (٨٠–٩٠ كَلِمَةً).', 'You saw a library job advert: write a formal letter (80–90 words).'],
      ['1', 'لِأَيِّ وَظِيفَةٍ تَتَقَدَّمُ؟ وَمَنْ أَنْتَ؟', 'Which job; who you are'],
      ['2', 'مَا صِفَاتُكَ؟', 'Your qualities'],
      ['3', 'مَا خِبْرَتُكَ السَّابِقَةُ؟', 'Your previous experience'],
      ['4', 'لِمَاذَا تُرِيدُ الوَظِيفَةَ؟ اسْأَلْ سُؤَالًا، وَقُلْ مَاذَا تُرْسِلُ مَعَ الرِّسَالَةِ.', 'Why; a question; what you are enclosing'],
    ],
    qwords: 'لِأَيِّ (for which) · مَنْ (who) · مَا صِفَاتُكَ (your qualities) · السَّابِقَةُ (previous — PAST) · اسْأَلْ (ask!)',
    frames: [
      ['start', 'إِلَى مُدِيرِ مَكْتَبَةِ المَدِينَةِ،', 'To the town-library manager,'],
      ['1', 'أَوَدُّ أَنْ أَتَقَدَّمَ لِوَظِيفَةِ ______ . اسْمِي ______ .', 'I’d like to apply for … My name is …'],
      ['2', 'أَنَا ______ وَ______ .', 'I am … and …'],
      ['3', 'فِي الصَّيْفِ المَاضِي عَمِلْتُ فِي ______ ، وَكُنْتُ ______ .', 'Last summer I worked in …; I used to …'],
      ['4', 'أُرِيدُ الوَظِيفَةَ لِأَنَّ ______ . هَلْ يُمْكِنُنِي أَنْ ______ ؟', 'I want it because … May I …?'],
      ['end', 'مَعَ الشُّكْرِ، ______', 'With thanks, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“To the manager of the town library, I would like to apply for the assistant post I saw in your advert. My name is Sami, I am seventeen and in Year 12. I love books, and I am organised and patient. Last summer I worked in the school library, where I arranged the books and helped students find them. I want this job because it suits my studies, and I will learn a lot from it. May I ask about the working hours? I am sending my CV with this letter. With thanks, Sami Ahmed.”',
      find: ['أَوَدُّ أَنْ أَتَقَدَّمَ', 'الَّتِي رَأَيْتُهَا', 'البَحْثِ عَنْهَا', 'هَلْ يُمْكِنُنِي أَنْ أَسْأَلَ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Manager, I am pleased to apply for the assistant post you published on your website this week. I am a Year 12 student, passionate about reading, and distinguished by organisation and precision. Last summer I volunteered in my school library, where I reclassified the whole fiction section and organised a reading club that I ran weekly. I see this job as a chance to develop my skills in dealing with the public. I would like to ask: could the working hours be flexible during exam time? Please find attached my CV and a reference from the librarian. Yours respectfully, Sami Ahmed.”',
      find: ['يَسُرُّنِي أَنْ', 'نَشَرْتُمُوهَا', 'وَأَدَرْتُهُ', 'أَوَدُّ أَنْ أَسْأَلَ'],
    },
  },
  Q3: {
    a: { title: 'أَوَّلُ مُقَابَلَةِ عَمَلٍ', en: 'My first job interview', bullets: 'الوَظِيفَةُ وَكَيْفَ تَقَدَّمْتَ لَهَا · كَيْفَ اسْتَعْدَدْتَ · مَا حَدَثَ فِي المُقَابَلَةِ · مَا تَعَلَّمْتَهُ وَخِطَطُكَ', bulletsEn: 'The job and how you applied · how you prepared · what happened in the interview · what you learnt and your plans' },
    b: { title: 'البَحْثُ عَنْ عَمَلٍ فِي العَصْرِ الرَّقْمِيِّ', en: 'Job hunting in the digital age', bullets: 'المَاضِي وَالحَاضِرُ · الإِيجَابِيَّاتُ وَالسَّلْبِيَّاتُ · مِثَالٌ مِنَ الوَاقِعِ · رَأْيُكَ وَنَصِيحَتُكَ', bulletsEn: 'Past and present · positives and negatives · a real example · your opinion and advice' },
    plan: [
      'The job and the application — taqaddamtu li-waẓīfa …; raʾaytu al-iʿlān fa-katabtu sīratī wa-arsaltuhā.',
      'Preparation — qaraʾtu ʿan …, tadarrabtu ʿalā al-asʾila maʿa …; kuntu mutawattiran.',
      'The interview — saʾalatnī ʿan …, akhbartuhā anna …, thumma saʾaltuhā …; qabilatnī!',
      'Lessons + future — al-istiʿdād ahammu shayʾ, sa-ataqaddamu …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'أَتَدَرَّبُ عَلَى الأَسْئِلَةِ قَبْلَ كُلِّ مُقَابَلَةٍ.', en: 'present: I practise the questions before every interview.' },
      { ar: 'كَتَبْتُ سِيرَتِي الذَّاتِيَّةَ، وَأَرْسَلْتُهَا فِي اليَوْمِ نَفْسِهِ.', en: 'past: I wrote my CV and sent it the same day.' },
      { ar: 'سَأُضِيفُ كُلَّ خِبْرَةٍ جَدِيدَةٍ إِلَى سِيرَتِي.', en: 'future: I will add every new experience to my CV.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Last year I applied for my first job: Saturdays in a café near home; I saw the advert in the window, wrote my CV and sent it the same day — I was very excited → before the interview I was very nervous: I read about the café and practised questions with Mum; I wore smart clothes and arrived ten minutes early with a copy of my CV → the manager (f.) asked about my experience; I told her I help Dad in his shop and like working with people, then asked her about hours; two days later she rang and accepted me! I was overjoyed → preparation matters most; I’ll apply for more jobs and add each new experience to my CV to find a better job.', find: ['وَأَرْسَلْتُهَا', 'كُنْتُ مُتَوَتِّرًا', 'سَأَلَتْنِي المُدِيرَةُ', 'سَأُضِيفُ'], notes: 'Core model: past verbs with object pronouns (arsaltuhā, akhbartuhā, saʾaltuhā, qabilatnī), kuntu + accusative, a time phrase (qabla al-mawʿid bi-ʿashri daqāʾiqa), reported anna, a future plan.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'I still remember my hands shaking as I knocked on the manager’s door at my first job interview; the job was simple — a Saturday café assistant — but that day it felt more important than any exam, as it was my first step towards independence → I prepared well: I read about the café, its history and its menu, wrote ten likely questions and practised them with my brother, who played the interviewer so seriously we laughed a lot → in the interview she surprised me: “What would you do if you dropped a tray in front of customers?” I smiled and said I’d apologise, clean up quickly and bring a new order at my own expense; two days later she rang to say she liked my answer and I was accepted → preparation is essential, but calm and honesty convince the interviewer in the end, not memorised answers; “if I could go back, I’d tell myself: don’t be afraid — they want you to succeed”.', find: ['يَدَيَّ تَرْتَجِفَانِ', 'لَعِبَ دَوْرَ المُحَاوِرِ', 'لَمْ أَتَوَقَّعْهُ', 'لَوْ عُدْتُ … لَقُلْتُ'], notes: 'Full-mark model: mā ziltu + a dual ḥāl clause, badat lī, ammā / fa- sequence with object pronouns, a relative clause (alladhī laʿiba), lam atawaqqaʿhu, reported speech with inna + sa-, a passive (qubiltu), a concession and law … la- with a quoted imperative.' },
      { which: 'ب', level: 'Full', subtitle: 'job hunting in the digital age', text: Q3B_FULL, en: 'Twenty years ago a job seeker read newspaper ads, handwrote a letter and waited weeks; today they apply for dozens of jobs with one click, and may be interviewed by software before a human → technology has made applying faster and easier, letting young people work with companies abroad; but some programs automatically reject CVs lacking certain keywords, which can be unfair to capable applicants → my sister lived this: after graduating she sent over fifty applications with no reply, until a mentor advised her to tailor her CV to each job — and she was invited to three interviews in one week → machines save companies time, but the final decision must stay human; “if young people learn to present themselves cleverly, they’ll reach the interview, where their personalities speak for them”.', find: ['كَانَ البَاحِثُ … يَقْرَأُ', 'قَبْلَ أَنْ يُقَابِلَهُ', 'مِمَّا قَدْ يَظْلِمُ', 'فَدُعِيَتْ'], notes: 'Full-mark model for the Stretch title: kāna + three present verbs, ammā … fa- with an object pronoun (yuqābiluhu), a balanced view, idhā lam + mimmā, dūna an + ilā an, a past passive (duʿiyat), a concession and idhā … fa-sa- with ḥaythu.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; dates and qualifications are clear.' },
    { route: 'core', text: 'Q2: all four bullet points, with a formal greeting and closing.' },
    { route: 'develop', text: 'Q2: a past experience with an object pronoun and a formal question.' },
    { route: 'develop', text: 'Q3: four paragraphs telling the story in sequence.' },
    { route: 'stretch', text: 'Q3: a turning point, a concession and a conditional.' },
  ],
};

module.exports = { speak, write };
