'use strict';
/* Exam-practice data · TD-L05 · Training, Qualifications and Skills (verbal nouns; possession; relative pronouns). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'D', n: 5, short: 'Training, Qualifications and Skills', arShort: 'التَّدْرِيبُ وَالمَهَارَاتُ', fileTitle: 'Training_Qualifications_and_Skills', title: 'Training, Qualifications and Skills', ar: 'التَّدْرِيبُ وَالمُؤَهِّلَاتُ وَالمَهَارَاتُ', icon: 'FaCertificate', grammar: 'verbal nouns (ad-dirāsa, at-tadrīb, al-ḥuṣūl ʿalā); possession (ʿindī, ladayya, lī); relative pronouns (al-mahārāt allatī aḥtāju ilayhā)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: talk about courses, training, certificates and skills — what you have (عِنْدِي · لَدَيَّ), the routes after school (بَعْدَ أَنْ أُنْهِيَ …), and the skills you need with relative clauses (المَهَارَاتُ الَّتِي أَحْتَاجُ إِلَيْهَا).',
  words: [
    w(1, 'شَهَادَةٌ', 'a certificate, qualification', [['pl.', 'شَهَادَاتٌ'], ['school-leaving', 'الشَّهَادَةُ الثَّانَوِيَّةُ']]),
    w(2, 'دَوْرَةٌ', 'a course', [['pl.', 'دَوْرَاتٌ'], ['training course', 'دَوْرَةٌ تَدْرِيبِيَّةٌ'], ['online', 'دَوْرَةٌ إِلِكْتْرُونِيَّةٌ']]),
    w(3, 'تَدْرِيبٌ', 'training', [['verb', 'أَتَدَرَّبُ'], ['trainee (m. · f.)', 'مُتَدَرِّبٌ · مُتَدَرِّبَةٌ']], { tag: 'verbal noun' }),
    w(4, 'تَدْرِيبٌ مِهْنِيٌّ', 'vocational training', [['apprenticeship', 'تَلْمَذَةٌ مِهْنِيَّةٌ'], ['work experience', 'خِبْرَةُ عَمَلٍ']]),
    w(5, 'مَهَارَةٌ', 'a skill', [['pl.', 'مَهَارَاتٌ'], ['skilful (m. · f.)', 'مَاهِرٌ · مَاهِرَةٌ']]),
    w(6, 'التَّوَاصُلُ · العَمَلُ الجَمَاعِيُّ', 'communication · teamwork', [['problem-solving', 'حَلُّ المُشْكِلَاتِ'], ['leadership', 'القِيَادَةُ']]),
    w(7, 'أَحْصُلُ عَلَى …', 'I obtain …', [['past', 'حَصَلْتُ عَلَى'], ['obtaining', 'الحُصُولُ عَلَى']], { tag: 'verb + ʿalā' }),
    w(8, 'عِنْدِي · لَدَيَّ', 'I have', [['he has · she has', 'لَدَيْهِ · لَدَيْهَا'], ['I don’t have', 'لَيْسَ عِنْدِي']], { tag: 'possession' }),
    w(9, 'أَحْتَاجُ إِلَى …', 'I need …', [['past', 'احْتَجْتُ إِلَى'], ['the skills I need', 'المَهَارَاتُ الَّتِي أَحْتَاجُ إِلَيْهَا']], { tag: 'relatives' }),
    w(10, 'بَعْدَ أَنْ …', 'after (+ verb)', [['after finishing', 'بَعْدَ أَنْ أُنْهِيَ'], ['before', 'قَبْلَ أَنْ']]),
    w(11, 'مُؤَهَّلٌ', 'qualified', [['f.', 'مُؤَهَّلَةٌ'], ['qualifications', 'مُؤَهِّلَاتٌ']]),
    w(12, 'مُتَطَوِّعٌ', 'a volunteer (m.)', [['f.', 'مُتَطَوِّعَةٌ'], ['volunteering', 'التَّطَوُّعُ']]),
  ],
  words1: { eyebrow: 'Language bank · courses, certificates and training', title: 'Certificate, course, training', ar: 'الشَّهَادَاتُ وَالدَّوْرَاتُ', notes: 'LANGUAGE BANK (2 min) — verbal nouns name routes: الدِّرَاسَةُ فِي الجَامِعَةِ · التَّدْرِيبُ المِهْنِيُّ · الحُصُولُ عَلَى شَهَادَةٍ. Possession: عِنْدِي شَهَادَةٌ فِي الإِسْعَافَاتِ الأَوَّلِيَّةِ (lit. at me is a certificate — the thing owned stays nominative).' },
  words2: { eyebrow: 'Language bank · skills and relative clauses', title: 'The skills I need', ar: 'المَهَارَاتُ الَّتِي أَحْتَاجُ إِلَيْهَا', notes: 'LANGUAGE BANK (2 min) — relative + returning pronoun: الدَّوْرَةُ الَّتِي حَضَرْتُهَا · المَهَارَاتُ الَّتِي تَعَلَّمْتُهَا · الشَّهَادَةُ الَّتِي حَصَلْتُ عَلَيْهَا. Sequence: بَعْدَ أَنْ أُنْهِيَ المَدْرَسَةَ، سَأَدْرُسُ …' },
  checkCore: 'said what certificate, course or skill they have',
  checkDevelop: 'used a verbal noun and a relative clause with a returning pronoun',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a sports centre', title: 'Role play A — Signing up for a lifeguard course', ar: 'دَوْرَةُ الإِنْقَاذِ', you: 'a teenager', them: 'the sports-centre receptionist',
      tasks: [
        { core: true, ex: 'أَهْلًا! كَيْفَ أُسَاعِدُكَ؟', task: 'Say which course you want.', help: 'أُرِيدُ أَنْ أُسَجِّلَ فِي …', model: 'أُرِيدُ أَنْ أُسَجِّلَ فِي دَوْرَةِ الإِنْقَاذِ.', modelEn: 'I want to register for the lifeguard course.' },
        { core: true, ex: 'كَمْ عُمْرُكَ؟', task: 'Give your age.', help: 'عُمْرِي …', model: 'عُمْرِي سِتَّ عَشْرَةَ سَنَةً.', modelEn: 'I am sixteen.' },
        { core: true, ex: 'هَلْ تَسْبَحُ جَيِّدًا؟', task: 'Answer with a certificate.', help: 'نَعَمْ، عِنْدِي شَهَادَةٌ فِي …', model: 'نَعَمْ، عِنْدِي شَهَادَةٌ فِي السِّبَاحَةِ.', modelEn: 'Yes, I have a swimming certificate.' },
        { core: true, ex: 'الدَّوْرَةُ يَوْمَ السَّبْتِ.', task: 'Ask how long it lasts.', help: 'كَمْ أُسْبُوعًا …؟', model: 'كَمْ أُسْبُوعًا تَسْتَمِرُّ الدَّوْرَةُ؟', modelEn: 'How many weeks does the course last?' },
        { core: true, unexpected: true, ex: 'لِمَاذَا تُرِيدُ هٰذِهِ الدَّوْرَةَ؟', task: 'Answer the unexpected question.', help: 'لِأَنِّي أُرِيدُ أَنْ أَعْمَلَ …', model: 'لِأَنِّي أُرِيدُ أَنْ أَعْمَلَ مُنْقِذًا فِي الصَّيْفِ.', modelEn: 'Because I want to work as a lifeguard in the summer.' },
      ],
      girl: 'أُسَاعِدُكِ · عُمْرُكِ · تَسْبَحِينَ · تُرِيدِينَ · مُنْقِذَةً',
      notes: 'Core: an usajjila fī, sitta ʿashrata sanatan, ʿindī shahādatun (possession), kam usbūʿan (kam + acc. sg.), aʿmalu munqidhan (ḥāl).',
    },
    {
      id: 'B', level: 'Core+', setting: 'a careers fair', title: 'Role play B — At a careers fair', ar: 'فِي مَعْرِضِ المِهَنِ', you: 'a Year 11 student', them: 'a college representative',
      tasks: [
        { core: true, ex: 'مَاذَا سَتَفْعَلُ بَعْدَ المَدْرَسَةِ؟', task: 'Say what you plan to do.', help: 'بَعْدَ أَنْ أُنْهِيَ المَدْرَسَةَ، سَـ…', model: 'بَعْدَ أَنْ أُنْهِيَ المَدْرَسَةَ، سَأَدْرُسُ فِي كُلِّيَّةٍ مِهْنِيَّةٍ.', modelEn: 'After I finish school, I’ll study at a vocational college.' },
        { core: true, ex: 'أَيَّ مَجَالٍ يُعْجِبُكَ؟', task: 'Name a field and why.', help: 'يُعْجِبُنِي … لِأَنَّ …', model: 'يُعْجِبُنِي الطَّبْخُ، لِأَنِّي أُحِبُّ العَمَلَ بِيَدَيَّ.', modelEn: 'I like cooking, because I enjoy working with my hands.' },
        { ex: 'عِنْدَنَا دَوْرَةٌ لِلطُّهَاةِ لِمُدَّةِ سَنَتَيْنِ.', task: 'ASK about work experience.', help: 'هَلْ تَشْمَلُ … ؟', model: 'هَلْ تَشْمَلُ الدَّوْرَةُ تَدْرِيبًا فِي مَطْعَمٍ حَقِيقِيٍّ؟', modelEn: 'Does the course include training in a real restaurant?' },
        { ex: 'نَعَمْ، ثَلَاثَةَ أَشْهُرٍ فِي فُنْدُقٍ. مَا مَهَارَاتُكَ؟', task: 'Name two skills with evidence.', help: 'لَدَيَّ مَهَارَةُ … لِأَنِّي …', model: 'لَدَيَّ مَهَارَةُ العَمَلِ الجَمَاعِيِّ، لِأَنِّي أَلْعَبُ فِي فَرِيقِ كُرَةِ السَّلَّةِ، وَأَنَا مُنَظَّمٌ جِدًّا.', modelEn: 'I have teamwork skills because I play in the basketball team, and I’m very organised.' },
        { unexpected: true, ex: 'هَلْ عِنْدَكَ خِبْرَةُ عَمَلٍ؟', task: 'Answer the unexpected question (past).', help: 'نَعَمْ، عَمِلْتُ فِي … حَيْثُ …', model: 'نَعَمْ، عَمِلْتُ فِي مَخْبَزِ عَمِّي فِي الصَّيْفِ، حَيْثُ تَعَلَّمْتُ صُنْعَ الخُبْزِ.', modelEn: 'Yes, I worked in my uncle’s bakery in the summer, where I learnt to make bread.' },
      ],
      girl: 'سَتَفْعَلِينَ · يُعْجِبُكِ · مَهَارَاتُكِ · مُنَظَّمَةٌ',
      notes: 'Core+: baʿda an + subjunctive, yuʿjibunī, the CANDIDATE asks (hal tashmalu …?), ladayya mahāratu …, a ḥaythu clause with a verbal noun (ṣunʿ al-khubz).',
    },
    {
      id: 'C', level: 'Develop', setting: 'a volunteering interview', title: 'Role play C — Volunteering at a hospital', ar: 'التَّطَوُّعُ فِي المُسْتَشْفَى', you: 'a student volunteer', them: 'the volunteer coordinator',
      tasks: [
        { ex: 'لِمَاذَا تُرِيدُ أَنْ تَتَطَوَّعَ هُنَا؟', task: 'Give a reason linked to your future.', help: 'لِأَنَّ … وَأُرِيدُ أَنْ …', model: 'لِأَنِّي أُرِيدُ أَنْ أَدْرُسَ التَّمْرِيضَ، وَأُرِيدُ أَنْ أَكْتَسِبَ خِبْرَةً حَقِيقِيَّةً قَبْلَ الجَامِعَةِ.', modelEn: 'Because I want to study nursing and gain real experience before university.' },
        { ex: 'هَلْ حَضَرْتَ أَيَّ دَوْرَاتٍ؟', task: 'Describe a course with a relative clause.', help: 'نَعَمْ، الدَّوْرَةُ الَّتِي حَضَرْتُهَا …', model: 'نَعَمْ، الدَّوْرَةُ الَّتِي حَضَرْتُهَا فِي الشِّتَاءِ كَانَتْ فِي الإِسْعَافَاتِ الأَوَّلِيَّةِ، وَحَصَلْتُ فِي نِهَايَتِهَا عَلَى شَهَادَةٍ.', modelEn: 'Yes, the course I took in winter was first aid, and I got a certificate at the end.' },
        { ex: 'مَا المَهَارَاتُ الَّتِي سَتَحْتَاجُ إِلَيْهَا هُنَا؟', task: 'Name two skills and why.', help: 'سَأَحْتَاجُ إِلَى … لِأَنَّ …', model: 'سَأَحْتَاجُ إِلَى الصَّبْرِ وَمَهَارَةِ الاسْتِمَاعِ، لِأَنَّ المَرْضَى أَحْيَانًا قَلِقُونَ وَوَحِيدُونَ.', modelEn: 'I’ll need patience and listening skills, because patients are sometimes anxious and lonely.' },
        { ex: 'الوَقْتُ المَطْلُوبُ أَرْبَعُ سَاعَاتٍ أُسْبُوعِيًّا.', task: 'Explain how you’ll fit it in.', help: 'أَسْتَطِيعُ أَنْ … لِأَنَّ …', model: 'أَسْتَطِيعُ أَنْ آتِيَ يَوْمَ الأَحَدِ صَبَاحًا، لِأَنَّهُ لَيْسَ عِنْدِي دُرُوسٌ، وَسَأُرَاجِعُ فِي المَسَاءِ.', modelEn: 'I can come on Sunday mornings, as I have no lessons, and I’ll revise in the evening.' },
        { unexpected: true, ex: 'مَاذَا سَتَفْعَلُ إِذَا رَأَيْتَ مَرِيضًا يَبْكِي؟', task: 'Answer the unexpected question (condition).', help: 'إِذَا رَأَيْتُ …، فَسَـ…', model: 'إِذَا رَأَيْتُ مَرِيضًا يَبْكِي، فَسَأَجْلِسُ بِجَانِبِهِ وَأَسْتَمِعُ إِلَيْهِ، ثُمَّ أُخْبِرُ المُمَرِّضَةَ.', modelEn: 'If I saw a patient crying, I’d sit with them and listen, then tell the nurse.' },
      ],
      girl: 'تُرِيدِينَ · حَضَرْتِ · سَتَحْتَاجِينَ · سَتَفْعَلِينَ · رَأَيْتِ',
      notes: 'Develop: aktasiba khibra, allatī ḥaḍartuhā (returning pronoun), ḥaṣaltu ʿalā, al-mahārāt allatī … ilayhā, laysa ʿindī (negative possession), idhā … fa-sa- + a ḥāl verb (yabkī).',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a radio debate', title: 'Role play D — University or apprenticeship?', ar: 'الجَامِعَةُ أَمِ التَّدْرِيبُ المِهْنِيُّ؟', you: 'a student guest', them: 'the radio presenter',
      tasks: [
        { ex: 'هَلِ الشَّهَادَةُ الجَامِعِيَّةُ ضَرُورِيَّةٌ لِلنَّجَاحِ اليَوْمَ؟', task: 'Give a balanced view.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، تَطْلُبُ مِهَنٌ كَالطِّبِّ وَالقَانُونِ شَهَادَةً جَامِعِيَّةً، وَمِنْ نَاحِيَةٍ أُخْرَى، يَنْجَحُ كَثِيرُونَ بِالتَّدْرِيبِ المِهْنِيِّ وَالخِبْرَةِ العَمَلِيَّةِ.', modelEn: 'Jobs like medicine and law need a degree, but many succeed through apprenticeships and experience.' },
        { ex: 'وَمَاذَا اخْتَرْتَ أَنْتَ؟', task: 'Explain your choice with evidence.', help: 'اخْتَرْتُ … لِأَنَّ … فَقَدْ …', model: 'اخْتَرْتُ تَلْمَذَةً مِهْنِيَّةً فِي الهَنْدَسَةِ، لِأَنِّي أَتَعَلَّمُ وَأَكْسِبُ رَاتِبًا فِي الوَقْتِ نَفْسِهِ؛ فَقَدْ رَأَيْتُ أَخِي يَتَخَرَّجُ بِدُيُونٍ كَبِيرَةٍ.', modelEn: 'I chose an engineering apprenticeship: I learn and earn at once — I saw my brother graduate with big debts.' },
        { ex: 'لٰكِنَّ الجَامِعَةَ تُعَلِّمُ التَّفْكِيرَ النَّقْدِيَّ!', task: 'Concede and counter.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهَا تُنَمِّي التَّفْكِيرَ، غَيْرَ أَنَّ حَلَّ المُشْكِلَاتِ الحَقِيقِيَّةِ فِي المَصْنَعِ يُعَلِّمُ التَّفْكِيرَ أَيْضًا، وَبِطَرِيقَةٍ عَمَلِيَّةٍ.', modelEn: 'It develops thinking, but solving real problems in a factory teaches thinking too, in a practical way.' },
        { ex: 'مَا المَهَارَاتُ الَّتِي يَطْلُبُهَا أَصْحَابُ العَمَلِ؟', task: 'List skills with a relative clause.', help: 'المَهَارَاتُ الَّتِي … هِيَ …', model: 'المَهَارَاتُ الَّتِي يَطْلُبُونَهَا أَكْثَرَ هِيَ التَّوَاصُلُ وَالعَمَلُ الجَمَاعِيُّ وَالقُدْرَةُ عَلَى التَّعَلُّمِ المُسْتَمِرِّ.', modelEn: 'The skills they want most are communication, teamwork and the ability to keep learning.' },
        { unexpected: true, ex: 'لَوْ لَمْ تَجِدْ تَدْرِيبًا، مَاذَا كُنْتَ سَتَفْعَلُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ لَمْ أَجِدْ …، لَـ…', model: 'لَوْ لَمْ أَجِدْ تَدْرِيبًا، لَدَرَسْتُ الهَنْدَسَةَ فِي الجَامِعَةِ، وَلَعَمِلْتُ فِي الصَّيْفِ لِأَكْتَسِبَ الخِبْرَةَ.', modelEn: 'If I hadn’t found an apprenticeship, I’d have studied engineering at university and worked summers for experience.' },
      ],
      girl: 'اخْتَرْتِ · تَجِدِي · كُنْتِ سَتَفْعَلِينَ',
      notes: 'Stretch: a balanced view with verbal nouns, a reason + fa-qad evidence, fī al-waqti nafsihi, a concession, allatī yaṭlubūnahā (returning pronoun), law lam … la-.',
      modelFoot: 'Stretch: balance, a justified personal choice, a concession, a relative clause and law lam … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'مَهَارَاتِي وَشَهَادَاتِي', aim: 'one full sentence per question',
      qs: [
        { q: 'هَلْ عِنْدَكَ شَهَادَةٌ فِي شَيْءٍ؟', en: 'Do you have a certificate in anything?', start: 'نَعَمْ، عِنْدِي شَهَادَةٌ فِي …', model: 'نَعَمْ، عِنْدِي شَهَادَةٌ فِي البِيَانُو.', modelEn: 'Yes, I have a piano certificate.' },
        { q: 'مَا مَهَارَتُكَ الأَقْوَى؟', en: 'What is your strongest skill?', start: 'مَهَارَتِي الأَقْوَى …', model: 'مَهَارَتِي الأَقْوَى التَّوَاصُلُ مَعَ النَّاسِ.', modelEn: 'My strongest skill is communicating with people.' },
        { q: 'هَلْ حَضَرْتَ دَوْرَةً مِنْ قَبْلُ؟', en: 'Have you taken a course before?', start: 'نَعَمْ، حَضَرْتُ دَوْرَةً فِي …', model: 'نَعَمْ، حَضَرْتُ دَوْرَةً فِي البَرْمَجَةِ.', modelEn: 'Yes, I took a coding course.' },
        { q: 'هَلْ تَتَطَوَّعُ؟', en: 'Do you volunteer?', start: 'نَعَمْ، أَتَطَوَّعُ فِي …', model: 'نَعَمْ، أَتَطَوَّعُ فِي مَكْتَبَةِ الحَيِّ يَوْمَ السَّبْتِ.', modelEn: 'Yes, I volunteer at the local library on Saturdays.' },
        { q: 'مَاذَا سَتَدْرُسُ بَعْدَ المَدْرَسَةِ؟', en: 'What will you study after school?', start: 'سَأَدْرُسُ …', model: 'سَأَدْرُسُ الهَنْدَسَةَ فِي الجَامِعَةِ.', modelEn: 'I will study engineering at university.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + ʿindī / ladayya = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'التَّدْرِيبُ وَالمُسْتَقْبَلُ', aim: 'two or three sentences, with a verbal noun and a relative clause',
      qs: [
        { q: 'صِفْ دَوْرَةً حَضَرْتَهَا.', en: 'Describe a course you took.', start: 'الدَّوْرَةُ الَّتِي حَضَرْتُهَا …', model: 'الدَّوْرَةُ الَّتِي حَضَرْتُهَا كَانَتْ فِي التَّصْوِيرِ، وَاسْتَمَرَّتْ شَهْرًا، وَتَعَلَّمْتُ فِيهَا اسْتِخْدَامَ الضَّوْءِ الطَّبِيعِيِّ.', modelEn: 'The course I took was in photography; it lasted a month and I learnt to use natural light.' },
        { q: 'مَا المَهَارَاتُ الَّتِي تَتَعَلَّمُهَا فِي المَدْرَسَةِ؟', en: 'Which skills do you learn at school?', start: 'أَتَعَلَّمُ … مِثْلَ …', model: 'أَتَعَلَّمُ مَهَارَاتٍ كَثِيرَةً، مِثْلَ العَمَلِ الجَمَاعِيِّ فِي المَشَارِيعِ، وَالتَّقْدِيمِ أَمَامَ الصَّفِّ.', modelEn: 'Many skills, like teamwork in projects and presenting in front of the class.' },
        { q: 'هَلِ التَّطَوُّعُ مُفِيدٌ لِلشَّبَابِ؟', en: 'Is volunteering useful for young people?', start: 'نَعَمْ، لِأَنَّهُ … فَمَثَلًا …', model: 'نَعَمْ، لِأَنَّهُ يُعْطِيهِمْ خِبْرَةً وَثِقَةً؛ فَمَثَلًا تَعَلَّمْتُ الصَّبْرَ عِنْدَمَا تَطَوَّعْتُ مَعَ الأَطْفَالِ.', modelEn: 'Yes, it gives experience and confidence — I learnt patience volunteering with children.' },
        { q: 'أَيُّهُمَا أَهَمُّ: الشَّهَادَةُ أَمِ الخِبْرَةُ؟', en: 'Which matters more: qualifications or experience?', start: 'أَرَى أَنَّ … لٰكِنَّ …', model: 'أَرَى أَنَّ الشَّهَادَةَ تَفْتَحُ البَابَ، لٰكِنَّ الخِبْرَةَ هِيَ الَّتِي تَجْعَلُكَ تَنْجَحُ فِي العَمَلِ.', modelEn: 'A qualification opens the door, but experience is what makes you succeed at work.' },
        { q: 'مَا الطَّرِيقُ الَّذِي سَتَخْتَارُهُ بَعْدَ المَدْرَسَةِ؟', en: 'Which route will you choose after school?', start: 'بَعْدَ أَنْ أُنْهِيَ … سَـ…', model: 'بَعْدَ أَنْ أُنْهِيَ الثَّانَوِيَّةَ، سَأَدْرُسُ الصَّيْدَلَةَ، ثُمَّ سَأَتَدَرَّبُ فِي صَيْدَلِيَّةٍ قَبْلَ أَنْ أَعْمَلَ.', modelEn: 'After sixth form I’ll study pharmacy, then train in a pharmacy before working.' },
      ],
      foot: 'Develop: two or three sentences — a verbal noun, a relative clause with a returning pronoun and baʿda an / qabla an.',
      modelFoot: 'Verbal noun + relative clause + time frame = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'التَّعْلِيمُ وَسُوقُ العَمَلِ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ تُعِدُّ المَدَارِسُ الطُّلَّابَ لِسُوقِ العَمَلِ؟', en: 'Do schools prepare students for the job market?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهَا تُعَلِّمُ المَعْرِفَةَ، غَيْرَ أَنَّهَا نَادِرًا مَا تُعَلِّمُ مَهَارَاتٍ عَمَلِيَّةً كَإِدَارَةِ المَالِ أَوْ كِتَابَةِ السِّيرَةِ الذَّاتِيَّةِ.', modelEn: 'They teach knowledge, but rarely practical skills like managing money or writing a CV.' },
        { q: 'هَلِ الدَّوْرَاتُ الإِلِكْتْرُونِيَّةُ تُغْنِي عَنِ الجَامِعَةِ؟', en: 'Can online courses replace university?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، هِيَ أَرْخَصُ وَأَكْثَرُ مُرُونَةً، وَمِنْ نَاحِيَةٍ أُخْرَى، لَا تُقَدِّمُ الحَيَاةَ الجَامِعِيَّةَ وَالعَلَاقَاتِ الَّتِي تُبْنَى هُنَاكَ.', modelEn: 'They are cheaper and more flexible, but don’t offer university life and the connections made there.' },
        { q: 'لِمَاذَا يَخْتَارُ بَعْضُ الشَّبَابِ التَّدْرِيبَ المِهْنِيَّ؟', en: 'Why do some young people choose vocational training?', start: 'لِأَنَّهُ … مِمَّا …', model: 'لِأَنَّهُ يُتِيحُ لَهُمْ أَنْ يَكْسِبُوا المَالَ وَهُمْ يَتَعَلَّمُونَ، مِمَّا يُجَنِّبُهُمْ دُيُونَ الجَامِعَةِ.', modelEn: 'Because they earn while learning, which spares them university debt.' },
        { q: 'كَيْفَ كَانَ الشَّبَابُ يَتَعَلَّمُونَ المِهَنَ فِي المَاضِي؟', en: 'How did young people learn trades in the past?', start: 'كَانُوا … أَمَّا اليَوْمَ فَـ…', model: 'كَانُوا يَتَعَلَّمُونَ مِنْ آبَائِهِمْ فِي الوَرْشَةِ أَوِ الحَقْلِ، أَمَّا اليَوْمَ فَيَحْتَاجُونَ إِلَى شَهَادَاتٍ رَسْمِيَّةٍ.', modelEn: 'They learnt from their fathers in the workshop or field; today they need official certificates.' },
        { q: 'لَوِ اسْتَطَعْتَ أَنْ تَتَعَلَّمَ أَيَّ مَهَارَةٍ فِي شَهْرٍ، مَاذَا تَخْتَارُ؟', en: 'If you could learn any skill in a month, what would you choose?', start: 'لَوِ اسْتَطَعْتُ، لَاخْتَرْتُ …', model: 'لَوِ اسْتَطَعْتُ، لَاخْتَرْتُ لُغَةَ الإِشَارَةِ، لِكَيْ أَتَوَاصَلَ مَعَ الصُّمِّ فِي المُسْتَشْفَى الَّذِي أَتَطَوَّعُ فِيهِ.', modelEn: 'Sign language, to communicate with deaf patients in the hospital where I volunteer.' },
      ],
      foot: 'Stretch: a concession, a balanced view, mimmā, kānū + present vs ammā … fa-, law … la- with li-kay.',
      modelFoot: 'Stretch: ṣaḥīḥun anna … ghayra anna, balance, cause → effect, past vs present and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I said what certificates, courses or skills I have (ʿindī / ladayya).' },
    { route: 'core', text: 'I said what I will do after school.' },
    { route: 'develop', text: 'I used verbal nouns (at-tadrīb, al-ḥuṣūl ʿalā, at-taṭawwuʿ).' },
    { route: 'develop', text: 'I used a relative clause with a returning pronoun (allatī ḥaḍartuhā).' },
    { route: 'stretch', text: 'I gave a balanced view, a concession or law … la-.' },
  ],
};
speak.RP[1].tasks[0].help = 'بَعْدَ أَنْ أُنْهِيَ المَدْرَسَةَ، سَأَدْرُسُ …';
speak.RP[2].tasks[4].help = 'إِذَا رَأَيْتُ …، فَسَأَجْلِسُ …';
speak.RP[3].tasks[4].help = 'لَوْ لَمْ أَجِدْ …، لَدَرَسْتُ …';
speak.CONV[1].qs[4].start = 'بَعْدَ أَنْ أُنْهِيَ … سَأَدْرُسُ …';
speak.CONV[2].qs[3].start = 'كَانُوا … أَمَّا اليَوْمَ فَيَحْتَاجُونَ …';

const Q2_CORE = `إِلَى مُدِيرِ مَرْكَزِ الشَّبَابِ،
أَنَا اسْمِي حَمْزَةُ، وَعُمْرِي خَمْسَ عَشْرَةَ سَنَةً. أُرِيدُ أَنْ أُسَجِّلَ فِي دَوْرَةِ الإِسْعَافَاتِ الأَوَّلِيَّةِ الَّتِي تُقَدِّمُونَهَا فِي الصَّيْفِ. عِنْدِي شَهَادَةٌ فِي السِّبَاحَةِ، وَأَنَا مُتَطَوِّعٌ فِي نَادِي الحَيِّ. فِي السَّنَةِ المَاضِيَةِ حَضَرْتُ دَوْرَةً قَصِيرَةً فِي القِيَادَةِ، وَتَعَلَّمْتُ فِيهَا العَمَلَ الجَمَاعِيَّ. أُرِيدُ هٰذِهِ الدَّوْرَةَ لِأَنِّي أُحِبُّ مُسَاعَدَةَ النَّاسِ، وَأُرِيدُ أَنْ أَعْمَلَ مُنْقِذًا. هَلِ الدَّوْرَةُ مَجَّانِيَّةٌ؟ وَمَتَى تَبْدَأُ؟ بَعْدَ الدَّوْرَةِ سَأَتَطَوَّعُ فِي المَسْبَحِ.
مَعَ الشُّكْرِ،
حَمْزَةُ`;
const Q2_FULL = `حَضْرَةَ مُدِيرِ مَرْكَزِ الشَّبَابِ المُحْتَرَمِ،
أَوَدُّ أَنْ أُسَجِّلَ فِي دَوْرَةِ الإِسْعَافَاتِ الأَوَّلِيَّةِ الَّتِي أَعْلَنْتُمْ عَنْهَا لِلصَّيْفِ القَادِمِ. لَدَيَّ شَهَادَةٌ مُتَقَدِّمَةٌ فِي السِّبَاحَةِ، كَمَا أَنَّنِي أَتَطَوَّعُ مُنْذُ سَنَتَيْنِ فِي نَادِي الحَيِّ لِتَدْرِيبِ الأَطْفَالِ. وَقَدْ حَضَرْتُ العَامَ المَاضِي دَوْرَةً فِي القِيَادَةِ، اكْتَسَبْتُ فِيهَا مَهَارَاتٍ أَعْتَمِدُ عَلَيْهَا يَوْمِيًّا، كَتَنْظِيمِ الفَرِيقِ وَحَلِّ المُشْكِلَاتِ. وَأَرْغَبُ فِي هٰذِهِ الدَّوْرَةِ لِأَنَّ الحُصُولَ عَلَيْهَا شَرْطٌ لِلْعَمَلِ مُنْقِذًا، وَهُوَ الهَدَفُ الَّذِي أَسْعَى إِلَيْهِ. وَأَرْجُو أَنْ تُخْبِرُونِي بِمَوَاعِيدِ الدَّوْرَةِ وَتَكْلِفَتِهَا. وَبَعْدَ أَنْ أُنْهِيَهَا، سَأَتَطَوَّعُ فِي المَسْبَحِ البَلَدِيِّ طُوالَ العُطْلَةِ.
مَعَ خَالِصِ الشُّكْرِ،
حَمْزَةُ`;
const Q3A_CORE = `أَنَا فِي الصَّفِّ الحَادِي عَشَرَ، وَأُفَكِّرُ كَثِيرًا فِي مُسْتَقْبَلِي. عِنْدِي بَعْضُ الشَّهَادَاتِ: شَهَادَةٌ فِي السِّبَاحَةِ، وَشَهَادَةٌ فِي الإِسْعَافَاتِ الأَوَّلِيَّةِ. أَتَطَوَّعُ أَيْضًا فِي مَكْتَبَةِ الحَيِّ يَوْمَ السَّبْتِ، وَأُسَاعِدُ الأَطْفَالَ الصِّغَارَ عَلَى القِرَاءَةِ وَالكِتَابَةِ.
المَهَارَاتُ الَّتِي أَتَعَلَّمُهَا فِي المَدْرَسَةِ مُفِيدَةٌ جِدًّا، مِثْلَ العَمَلِ الجَمَاعِيِّ وَالتَّقْدِيمِ أَمَامَ الصَّفِّ. أَنَا مُنَظَّمٌ وَصَبُورٌ، وَأُحِبُّ التَّوَاصُلَ مَعَ النَّاسِ. هٰذِهِ المَهَارَاتُ سَتُسَاعِدُنِي فِي العَمَلِ.
فِي الصَّيْفِ المَاضِي حَضَرْتُ دَوْرَةً فِي البَرْمَجَةِ لِمُدَّةِ أُسْبُوعَيْنِ. كَانَتِ الدَّوْرَةُ صَعْبَةً فِي البِدَايَةِ، لٰكِنِّي صَنَعْتُ لُعْبَةً صَغِيرَةً فِي النِّهَايَةِ، وَحَصَلْتُ عَلَى شَهَادَةٍ. كُنْتُ فَخُورًا جِدًّا، وَأَرَيْتُ اللُّعْبَةَ لِأُسْرَتِي.
فِي رَأْيِي، الشَّهَادَاتُ مُهِمَّةٌ، لٰكِنَّ المَهَارَاتِ وَالخِبْرَةَ أَهَمُّ. بَعْدَ أَنْ أُنْهِيَ المَدْرَسَةَ، سَأَدْرُسُ عُلُومَ الحَاسُوبِ فِي الجَامِعَةِ، وَسَأَتَدَرَّبُ فِي شَرِكَةٍ كَبِيرَةٍ فِي الصَّيْفِ، لِأَكْتَسِبَ الخِبْرَةَ.`;
const Q3A_FULL = `يُقَالُ إِنَّ الشَّهَادَةَ تَفْتَحُ البَابَ، أَمَّا المَهَارَاتُ فَهِيَ الَّتِي تُبْقِيكَ فِي الغُرْفَةِ. وَقَدْ أَدْرَكْتُ صِدْقَ هٰذِهِ العِبَارَةِ مُبَكِّرًا، فَحَرَصْتُ عَلَى أَنْ أَبْنِيَ مَهَارَاتِي خَارِجَ الفَصْلِ بِقَدْرِ مَا أَبْنِيهَا دَاخِلَهُ، بِالتَّطَوُّعِ وَالدَّوْرَاتِ القَصِيرَةِ.
لَدَيَّ اليَوْمَ شَهَادَتَانِ أَعْتَزُّ بِهِمَا: الأُولَى فِي الإِسْعَافَاتِ الأَوَّلِيَّةِ، وَالثَّانِيَةُ فِي البَرْمَجَةِ. غَيْرَ أَنَّ أَهَمَّ مَا تَعَلَّمْتُهُ لَمْ يَأْتِ مِنْ دَوْرَةٍ، بَلْ مِنْ تَطَوُّعِي فِي مُسْتَشْفَى الأَطْفَالِ؛ فَهُنَاكَ تَعَلَّمْتُ الصَّبْرَ، وَالاسْتِمَاعَ، وَالتَّصَرُّفَ بِهُدُوءٍ فِي المَوَاقِفِ الصَّعْبَةِ.
وَأَذْكُرُ يَوْمًا انْهَارَ فِيهِ طِفْلٌ بِالبُكَاءِ لِأَنَّهُ خَافَ مِنَ الإِبْرَةِ، فَجَلَسْتُ مَعَهُ وَحَكَيْتُ لَهُ قِصَّةً حَتَّى هَدَأَ، وَشَكَرَتْنِي المُمَرِّضَةُ أَمَامَ الجَمِيعِ، وَقَالَتْ إِنَّنِي سَأَكُونُ مُمَرِّضًا مُمْتَازًا. عِنْدَهَا عَرَفْتُ أَنَّ هٰذِهِ المَهَارَاتِ لَا تُدَرَّسُ فِي الكُتُبِ.
صَحِيحٌ أَنَّ الشَّهَادَاتِ ضَرُورِيَّةٌ لِلْقَبُولِ فِي الجَامِعَةِ، غَيْرَ أَنَّ الخِبْرَةَ تَصْنَعُ الإِنْسَانَ. وَإِذَا قُبِلْتُ فِي كُلِّيَّةِ التَّمْرِيضِ كَمَا أَتَمَنَّى، فَسَأُوَاصِلُ التَّطَوُّعَ، لِأَنَّ التَّعَلُّمَ الحَقِيقِيَّ لَا يَتَوَقَّفُ أَبَدًا.`;
const Q3B_FULL = `لِسَنَوَاتٍ طَوِيلَةٍ، كَانَتِ الجَامِعَةُ هِيَ الطَّرِيقَ الوَحِيدَ الَّذِي يَرَاهُ الأَهْلُ لِأَبْنَائِهِمْ المُتَفَوِّقِينَ. أَمَّا اليَوْمَ، فَيَتَسَاءَلُ كَثِيرٌ مِنَ الشَّبَابِ: هَلْ تَسْتَحِقُّ الشَّهَادَةُ الجَامِعِيَّةُ الوَقْتَ وَالمَالَ اللَّذَيْنِ تَتَطَلَّبُهُمَا؟
مِنْ نَاحِيَةٍ، تَبْقَى الجَامِعَةُ ضَرُورِيَّةً لِمِهَنٍ كَالطِّبِّ وَالهَنْدَسَةِ وَالقَانُونِ، كَمَا أَنَّهَا تُنَمِّي التَّفْكِيرَ النَّقْدِيَّ وَالبَحْثَ. وَمِنْ نَاحِيَةٍ أُخْرَى، يُتِيحُ التَّدْرِيبُ المِهْنِيُّ لِلطَّالِبِ أَنْ يَكْسِبَ رَاتِبًا وَهُوَ يَتَعَلَّمُ، مِمَّا يُجَنِّبُهُ دُيُونًا قَدْ تُلَاحِقُهُ سَنَوَاتٍ، وَيَمْنَحُهُ خِبْرَةً عَمَلِيَّةً يَطْلُبُهَا أَصْحَابُ العَمَلِ.
وَقَدْ رَأَيْتُ الطَّرِيقَيْنِ فِي أُسْرَتِي؛ فَأَخِي الأَكْبَرُ تَخَرَّجَ فِي الجَامِعَةِ بِشَهَادَةٍ فِي التَّارِيخِ، وَظَلَّ عَامًا كَامِلًا يَبْحَثُ عَنْ عَمَلٍ مُنَاسِبٍ دُونَ جَدْوَى، بَيْنَمَا اخْتَارَ ابْنُ عَمِّي تَدْرِيبًا فِي الكَهْرَبَاءِ، فَأَصْبَحَ اليَوْمَ يُدِيرُ شَرِكَتَهُ الصَّغِيرَةَ، وَيُوَظِّفُ ثَلَاثَةَ عُمَّالٍ.
صَحِيحٌ أَنَّ لِكُلِّ طَرِيقٍ مَزَايَاهُ وَعُيُوبَهُ، غَيْرَ أَنَّ الخَطَأَ أَنْ نَعْتَبِرَ أَحَدَهُمَا أَفْضَلَ دَائِمًا. وَلَوْ عَامَلَ المُجْتَمَعُ التَّدْرِيبَ المِهْنِيَّ بِالاحْتِرَامِ نَفْسِهِ، لَاخْتَارَ كُلُّ شَابٍّ الطَّرِيقَ الَّذِي يُنَاسِبُ مَوَاهِبَهُ وَأَحْلَامَهُ حَقًّا.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a course-application form, write a letter applying for a training course, and write an extended piece about your skills and qualifications or about university versus vocational training.',
  lift: [
    { ar: 'لَدَيَّ شَهَادَةٌ مُتَقَدِّمَةٌ فِي السِّبَاحَةِ', en: 'I have an advanced swimming certificate' },
    { ar: 'الدَّوْرَةُ الَّتِي حَضَرْتُهَا', en: 'the course I attended' },
    { ar: 'بَعْدَ أَنْ أُنْهِيَ المَدْرَسَةَ، سَأَدْرُسُ …', en: 'after I finish school, I will study …' },
  ],
  checkTip: 'Check: with ʿindī / ladayya the thing owned is nominative (ʿindī shahādatun); a relative after a definite noun needs alladhī / allatī and often a returning pronoun (allatī ḥaḍartuhā); baʿda an / qabla an + subjunctive.',
  FORM: {
    title: 'Training-course application form', ar: 'اسْتِمَارَةُ التَّسْجِيلِ فِي دَوْرَةٍ تَدْرِيبِيَّةٍ',
    fields: [
      { core: true, ar: 'الاسْمُ وَالعُمْرُ', en: 'Name and age', model: 'حَمْزَةُ يُوسُفُ، خَمْسَ عَشْرَةَ سَنَةً', modelEn: 'Hamza Yusuf, fifteen' },
      { core: true, ar: 'الدَّوْرَةُ المَطْلُوبَةُ', en: 'Course requested', model: 'الإِسْعَافَاتُ الأَوَّلِيَّةُ', modelEn: 'first aid' },
      { core: true, ar: 'الشَّهَادَاتُ الَّتِي لَدَيْكَ', en: 'Certificates you hold', model: 'شَهَادَةٌ فِي السِّبَاحَةِ', modelEn: 'a swimming certificate' },
      { core: true, ar: 'المَدْرَسَةُ', en: 'School', model: 'مَدْرَسَةُ المَدِينَةِ', modelEn: 'Al Madina School' },
      { core: true, ar: 'مَهَارَتَانِ', en: 'Two skills', model: 'العَمَلُ الجَمَاعِيُّ وَالتَّنْظِيمُ', modelEn: 'teamwork and organisation' },
      { core: true, ar: 'الأَيَّامُ المُنَاسِبَةُ', en: 'Suitable days', model: 'السَّبْتُ وَالأَحَدُ', modelEn: 'Saturday and Sunday' },
      { ar: 'خِبْرَةُ تَطَوُّعٍ', en: 'Volunteering experience', model: 'تَدْرِيبُ الأَطْفَالِ فِي نَادِي الحَيِّ', modelEn: 'coaching children at the local club' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُرِيدُ هٰذِهِ الدَّوْرَةَ؟', en: 'ONE sentence: why you want this course', model: 'أُرِيدُهَا لِأَنَّ الشَّهَادَةَ الَّتِي سَأَحْصُلُ عَلَيْهَا شَرْطٌ لِلْعَمَلِ مُنْقِذًا.', modelEn: 'Because the certificate I’ll get is required to work as a lifeguard.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with allatī + a returning pronoun (ʿalayhā).',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 5: two verbal nouns. Box 7: tadrību al-aṭfāl (verbal noun + iḍāfa). Box 8: allatī sa-aḥṣulu ʿalayhā.',
  },
  Q2: {
    short: 'a letter applying for a course', title: 'Question 2: applying for a course', ar: 'طَلَبُ التَّسْجِيلِ فِي دَوْرَةٍ',
    task: 'You want to join a training course at a youth centre. Write a letter in Arabic of about 80–90 words. You must include: • which course you want and who you are • the certificates and skills you already have • a course or experience you had in the past • why you want this course, a question, and what you will do afterwards.',
    checklist: ['All four bullet points, in order.', 'A formal greeting and closing.', 'ʿindī / ladayya and a relative clause.', 'A past AND a future sentence.', 'About 80–90 words.'],
    phrases: [['أُرِيدُ أَنْ أُسَجِّلَ فِي دَوْرَةِ …', 'I want to register for the … course'], ['عِنْدِي شَهَادَةٌ فِي … وَأَنَا …', 'I have a certificate in … and I am …'], ['حَضَرْتُ دَوْرَةً فِي … وَتَعَلَّمْتُ فِيهَا …', 'I attended a course in … and learnt …'], ['بَعْدَ الدَّوْرَةِ سَأَتَطَوَّعُ …', 'after the course I will volunteer …']],
    rubric: [
      ['task', 'تُرِيدُ أَنْ تُسَجِّلَ فِي دَوْرَةٍ تَدْرِيبِيَّةٍ. اكْتُبْ رِسَالَةً إِلَى مَرْكَزِ الشَّبَابِ (٨٠–٩٠ كَلِمَةً).', 'Apply for a training course at a youth centre (80–90 words).'],
      ['1', 'أَيُّ دَوْرَةٍ تُرِيدُ؟ وَمَنْ أَنْتَ؟', 'Which course; who you are'],
      ['2', 'مَا الشَّهَادَاتُ وَالمَهَارَاتُ الَّتِي لَدَيْكَ؟', 'Certificates and skills you have'],
      ['3', 'صِفْ دَوْرَةً أَوْ خِبْرَةً سَابِقَةً.', 'A past course or experience'],
      ['4', 'لِمَاذَا تُرِيدُ الدَّوْرَةَ؟ اسْأَلْ سُؤَالًا، وَقُلْ مَاذَا سَتَفْعَلُ بَعْدَهَا.', 'Why; a question; what you will do afterwards'],
    ],
    qwords: 'أَيُّ (which) · مَنْ (who) · الَّتِي لَدَيْكَ (that you have) · سَابِقَةٌ (previous — PAST) · سَتَفْعَلُ (will do — FUTURE)',
    frames: [
      ['start', 'إِلَى مُدِيرِ مَرْكَزِ الشَّبَابِ،', 'To the director of the youth centre,'],
      ['1', 'أَنَا اسْمِي ______ ، وَعُمْرِي ______ . أُرِيدُ أَنْ أُسَجِّلَ فِي دَوْرَةِ ______ .', 'My name is …, I am … I want to register for the … course.'],
      ['2', 'عِنْدِي شَهَادَةٌ فِي ______ ، وَأَنَا ______ .', 'I have a certificate in …, and I am …'],
      ['3', 'فِي السَّنَةِ المَاضِيَةِ حَضَرْتُ دَوْرَةً فِي ______ ، وَتَعَلَّمْتُ فِيهَا ______ .', 'Last year I attended a course in …, and learnt …'],
      ['4', 'أُرِيدُ هٰذِهِ الدَّوْرَةَ لِأَنَّ ______ . هَلِ ______ ؟ بَعْدَ الدَّوْرَةِ سَأَ______ .', 'I want this course because … Is …? After the course I will …'],
      ['end', 'مَعَ الشُّكْرِ، ______', 'With thanks, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“To the director of the youth centre, my name is Hamza and I am fifteen. I want to register for the first-aid course you offer in the summer. I have a swimming certificate, and I volunteer at the local club. Last year I took a short leadership course and learnt teamwork. I want this course because I love helping people and want to work as a lifeguard. Is the course free? And when does it start? After the course I will volunteer at the pool. With thanks, Hamza.”',
      find: ['الَّتِي تُقَدِّمُونَهَا', 'عِنْدِي شَهَادَةٌ', 'حَضَرْتُ دَوْرَةً', 'سَأَتَطَوَّعُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Director, I would like to register for the first-aid course you announced for next summer. I hold an advanced swimming certificate, and I have volunteered for two years at the local club coaching children. Last year I attended a leadership course where I gained skills I rely on daily, such as organising a team and solving problems. I want this course because obtaining it is a requirement for working as a lifeguard — the goal I am working towards. Please tell me the course dates and cost. After finishing it, I will volunteer at the municipal pool all holiday. With sincere thanks, Hamza.”',
      find: ['الَّتِي أَعْلَنْتُمْ عَنْهَا', 'لَدَيَّ شَهَادَةٌ', 'أَعْتَمِدُ عَلَيْهَا', 'بَعْدَ أَنْ أُنْهِيَهَا'],
    },
  },
  Q3: {
    a: { title: 'مَهَارَاتِي وَمُؤَهِّلَاتِي', en: 'My skills and qualifications', bullets: 'الشَّهَادَاتُ الَّتِي لَدَيْكَ · المَهَارَاتُ الَّتِي تَتَعَلَّمُهَا · دَوْرَةٌ أَوْ تَجْرِبَةٌ مُفِيدَةٌ · رَأْيُكَ وَخِطَطُكَ', bulletsEn: 'Certificates you have · skills you are learning · a useful course or experience · your opinion and plans' },
    b: { title: 'الجَامِعَةُ أَمِ التَّدْرِيبُ المِهْنِيُّ؟', en: 'University or vocational training?', bullets: 'الطَّرِيقُ التَّقْلِيدِيُّ · مَزَايَا كُلِّ طَرِيقٍ · مِثَالٌ مِنَ الوَاقِعِ · رَأْيُكَ', bulletsEn: 'The traditional route · the advantages of each route · a real example · your opinion' },
    plan: [
      'Your certificates — ʿindī / ladayya shahādatun fī …; atațawwaʿu fī …',
      'Your skills — al-mahārāt allatī ataʿallamuhā …; anā munaẓẓam wa-ṣabūr.',
      'Past — ḥaḍartu dawratan fī …; kānat ṣaʿba … lākinnī …; ḥaṣaltu ʿalā shahāda.',
      'Opinion + future — baʿda an unhiya al-madrasa, sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, idhā … fa-sa-.',
    ],
    frames: [
      { ar: 'عِنْدِي شَهَادَةٌ فِي السِّبَاحَةِ، وَأَتَطَوَّعُ فِي المَكْتَبَةِ.', en: 'present: I have a swimming certificate, and I volunteer at the library.' },
      { ar: 'حَضَرْتُ دَوْرَةً فِي البَرْمَجَةِ، وَحَصَلْتُ عَلَى شَهَادَةٍ.', en: 'past: I took a coding course and got a certificate.' },
      { ar: 'بَعْدَ أَنْ أُنْهِيَ المَدْرَسَةَ، سَأَدْرُسُ فِي الجَامِعَةِ.', en: 'future: after I finish school, I will study at university.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'I’m in Year 11 and think a lot about my future; I hold swimming and first-aid certificates and volunteer at the local library on Saturdays, helping young children read and write → school skills are very useful — teamwork, presenting; I’m organised and patient and like communicating; these skills will help me at work → last summer I did a two-week coding course: hard at first, but I made a small game and got a certificate; I was very proud and showed the game to my family → qualifications matter, but skills and experience matter more; after school I’ll study computer science and do summer training at a big company to gain experience.', find: ['عِنْدِي بَعْضُ الشَّهَادَاتِ', 'الَّتِي أَتَعَلَّمُهَا', 'حَصَلْتُ عَلَى شَهَادَةٍ', 'بَعْدَ أَنْ أُنْهِيَ'], notes: 'Core model: ʿindī + nominative, allatī ataʿallamuhā, kānat + accusative, ḥaṣaltu ʿalā, a comparative opinion, baʿda an + subjunctive and two future verbs.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'They say a certificate opens the door, but skills keep you in the room — I realised this early, so I built my skills outside the classroom as much as inside, through volunteering and short courses → I hold two certificates I’m proud of: first aid and coding; yet the most important thing I learnt came not from a course but from volunteering at a children’s hospital: patience, listening and staying calm in hard moments → I remember a child bursting into tears, afraid of a needle; I sat with him and told him a story until he calmed down, and the nurse thanked me in front of everyone, saying I would make an excellent nurse — such skills aren’t taught in books → certificates are needed for university, but experience makes the person; “if I’m accepted to study nursing as I hope, I’ll keep volunteering, because real learning never, ever stops”.', find: ['يُقَالُ إِنَّ', 'شَهَادَتَانِ أَعْتَزُّ بِهِمَا', 'لَمْ يَأْتِ … بَلْ', 'إِذَا قُبِلْتُ … فَسَأُوَاصِلُ'], notes: 'Full-mark model: a passive hook, ammā … fa-, bi-qadri mā, a dual with a returning pronoun (bihimā), lam … bal, a list of verbal nouns, a narrative with ḥattā, a passive (tudarrasu), a concession and a passive idhā … fa-sa-.' },
      { which: 'ب', level: 'Full', subtitle: 'university or vocational training?', text: Q3B_FULL, en: 'For years university was the only route parents saw for their high-achieving children; today many young people ask: is a degree worth the time and money it requires? → university remains essential for medicine, engineering and law, and develops critical thinking and research; vocational training lets students earn while they learn, sparing them debts that may follow them for years, and giving them the practical experience employers want → I’ve seen both in my family: my older brother graduated in history and spent a whole year hunting in vain for a suitable job, while my cousin chose electrical training and now runs his own small company, employing three workers → each route has its advantages and drawbacks, but it’s wrong to treat one as always better; “if society respected vocational training equally, every young person would choose the route that truly suits their talents and dreams”.', find: ['اللَّذَيْنِ تَتَطَلَّبُهُمَا', 'وَهُوَ يَتَعَلَّمُ', 'بَيْنَمَا اخْتَارَ', 'لَوْ عَامَلَ … لَاخْتَارَ'], notes: 'Full-mark model for the Stretch title: a dual relative (alladhayni + returning pronoun), ammā … fa-, a balanced view with kamā anna and mimmā, a ḥāl clause (wa-huwa yataʿallamu), ẓalla + present, baynamā, a concession and law … la-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; verbal nouns for skills.' },
    { route: 'core', text: 'Q2: all four bullet points, with a formal greeting and closing.' },
    { route: 'develop', text: 'Q2: ʿindī / ladayya + nominative, and a relative clause.' },
    { route: 'develop', text: 'Q3: four paragraphs with baʿda an + subjunctive.' },
    { route: 'stretch', text: 'Q3: a balanced view, a concession and a conditional.' },
  ],
};
write.Q3.plan[0] = 'Your certificates — ʿindī / ladayya shahādatun fī …; ataṭawwaʿu fī …';

module.exports = { speak, write };
