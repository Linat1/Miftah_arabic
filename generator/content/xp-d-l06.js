'use strict';
/* Exam-practice data · TD-L06 · Jobs and Professions (nisba nouns; active participles; m. / f. / pl. agreement). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'D', n: 6, short: 'Jobs and Professions', arShort: 'الوَظَائِفُ وَالمِهَنُ', fileTitle: 'Jobs_and_Professions', title: 'Jobs and Professions', ar: 'الوَظَائِفُ وَالمِهَنُ', icon: 'FaBriefcase', grammar: 'job nouns in m. / f. / pl. (ṭabīb · ṭabība · aṭibbāʾ); active participles (muhandis, mudarris, ʿāmil); nisba nouns (ṣaḥafiyy, mīkānīkiyy); agreement' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: name jobs in the masculine, feminine and plural (طَبِيبٌ · طَبِيبَةٌ · أَطِبَّاءُ), say what people do and where they work (يَعْمَلُ فِي … · تُسَاعِدُ …), and compare the advantages and disadvantages of jobs.',
  words: [
    w(1, 'طَبِيبٌ', 'a doctor (m.)', [['f.', 'طَبِيبَةٌ'], ['pl.', 'أَطِبَّاءُ']]),
    w(2, 'مُهَنْدِسٌ', 'an engineer (m.)', [['f.', 'مُهَنْدِسَةٌ'], ['pl.', 'مُهَنْدِسُونَ']]),
    w(3, 'مُعَلِّمٌ · مُدَرِّسٌ', 'a teacher (m.)', [['f.', 'مُعَلِّمَةٌ'], ['pl.', 'مُعَلِّمُونَ · مُعَلِّمَاتٌ']]),
    w(4, 'مُمَرِّضٌ', 'a nurse (m.)', [['f.', 'مُمَرِّضَةٌ'], ['pl.', 'مُمَرِّضُونَ · مُمَرِّضَاتٌ']]),
    w(5, 'مُحَامٍ', 'a lawyer (m.)', [['the', 'المُحَامِي'], ['f.', 'مُحَامِيَةٌ'], ['pl.', 'مُحَامُونَ']]),
    w(6, 'صَحَفِيٌّ', 'a journalist (m.)', [['f.', 'صَحَفِيَّةٌ'], ['pl.', 'صَحَفِيُّونَ']], { tag: 'nisba' }),
    w(7, 'طَبَّاخٌ · طَاهٍ', 'a cook · a chef', [['f.', 'طَبَّاخَةٌ'], ['pl.', 'طُهَاةٌ']]),
    w(8, 'مُبَرْمِجٌ', 'a programmer (m.)', [['f.', 'مُبَرْمِجَةٌ'], ['pl.', 'مُبَرْمِجُونَ']]),
    w(9, 'يَعْمَلُ فِي …', 'works in …', [['she', 'تَعْمَلُ'], ['they', 'يَعْمَلُونَ'], ['work', 'العَمَلُ']], { tag: 'verb' }),
    w(10, 'رَاتِبٌ', 'a salary', [['pl.', 'رَوَاتِبُ'], ['high · low', 'مُرْتَفِعٌ · مُنْخَفِضٌ']]),
    w(11, 'مِيزَةٌ · عَيْبٌ', 'an advantage · a disadvantage', [['pl.', 'مَزَايَا · عُيُوبٌ']]),
    w(12, 'مُتْعِبٌ · مُرِيحٌ', 'tiring · comfortable', [['f.', 'مُتْعِبَةٌ · مُرِيحَةٌ'], ['dangerous', 'خَطِيرٌ · خَطِيرَةٌ']]),
  ],
  words1: { eyebrow: 'Language bank · jobs (m. · f. · pl.)', title: 'Doctor, engineer, teacher', ar: 'المِهَنُ', notes: 'LANGUAGE BANK (2 min) — most job nouns add ـة for the feminine: مُهَنْدِسٌ → مُهَنْدِسَةٌ. Sound plurals: مُهَنْدِسُونَ · مُهَنْدِسَاتٌ. Broken plurals: أَطِبَّاءُ · طُهَاةٌ. أَبِي مُهَنْدِسٌ · أُمِّي طَبِيبَةٌ.' },
  words2: { eyebrow: 'Language bank · describing jobs', title: 'Where, what, pros and cons', ar: 'وَصْفُ العَمَلِ', notes: 'LANGUAGE BANK (2 min) — the verb and adjective agree with the worker: تَعْمَلُ المُمَرِّضَةُ فِي المُسْتَشْفَى · عَمَلُهَا مُتْعِبٌ (عَمَل is m.) · الوَظِيفَةُ مُتْعِبَةٌ (f.). Pros and cons: مِنْ مَزَايَاهَا … وَمِنْ عُيُوبِهَا …' },
  checkCore: 'named jobs in the masculine and feminine',
  checkDevelop: 'described a job’s duties and gave an advantage and a disadvantage',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'meeting a new friend', title: 'Role play A — What do your parents do?', ar: 'مَاذَا يَعْمَلُ وَالِدَاكَ؟', you: 'a student', them: 'a new friend',
      tasks: [
        { core: true, ex: 'مَاذَا يَعْمَلُ أَبُوكَ؟', task: 'Say your father’s job.', help: 'أَبِي …', model: 'أَبِي مُهَنْدِسٌ.', modelEn: 'My father is an engineer.' },
        { core: true, ex: 'أَيْنَ يَعْمَلُ؟', task: 'Say where he works.', help: 'يَعْمَلُ فِي …', model: 'يَعْمَلُ فِي شَرِكَةٍ كَبِيرَةٍ فِي لَنْدَنَ.', modelEn: 'He works in a big company in London.' },
        { core: true, ex: 'وَأُمُّكَ؟', task: 'Say your mother’s job.', help: 'أُمِّي …', model: 'أُمِّي طَبِيبَةٌ، وَتَعْمَلُ فِي مُسْتَشْفًى.', modelEn: 'My mother is a doctor, and she works in a hospital.' },
        { core: true, ex: 'أُمِّي مُعَلِّمَةٌ.', task: 'Ask what she teaches.', help: 'مَاذَا …؟', model: 'مَاذَا تُدَرِّسُ؟', modelEn: 'What does she teach?' },
        { core: true, unexpected: true, ex: 'مَاذَا تُرِيدُ أَنْ تَعْمَلَ فِي المُسْتَقْبَلِ؟', task: 'Answer the unexpected question.', help: 'أُرِيدُ أَنْ أَكُونَ …', model: 'أُرِيدُ أَنْ أَكُونَ مُبَرْمِجًا.', modelEn: 'I want to be a programmer.' },
      ],
      girl: 'أَبُوكِ · أُمُّكِ · تُرِيدِينَ · مُبَرْمِجَةً',
      notes: 'Core: nominal sentences (abī muhandis · ummī ṭabība), yaʿmalu / taʿmalu fī agreement, akūna + accusative (mubarmijan / mubarmijatan).',
    },
    {
      id: 'B', level: 'Core+', setting: 'a careers quiz', title: 'Role play B — Guess the job', ar: 'خَمِّنِ المِهْنَةَ', you: 'a student giving clues', them: 'a classmate guessing',
      tasks: [
        { core: true, ex: 'أَيْنَ يَعْمَلُ هٰذَا الشَّخْصُ؟', task: 'Give the workplace.', help: 'يَعْمَلُ فِي …', model: 'يَعْمَلُ فِي مَطْعَمٍ.', modelEn: 'He works in a restaurant.' },
        { core: true, ex: 'وَمَاذَا يَفْعَلُ؟', task: 'Give one duty.', help: 'يُحَضِّرُ … / يُسَاعِدُ …', model: 'يُحَضِّرُ الطَّعَامَ لِلزَّبَائِنِ.', modelEn: 'He prepares food for customers.' },
        { ex: 'هَلْ هُوَ طَبَّاخٌ؟', task: 'Confirm, then give a clue for a female job.', help: 'نَعَمْ! وَالآنَ: هِيَ تَعْمَلُ فِي …', model: 'نَعَمْ! وَالآنَ: هِيَ تَعْمَلُ فِي مَحْكَمَةٍ، وَتُدَافِعُ عَنِ النَّاسِ.', modelEn: 'Yes! Now: she works in a court and defends people.' },
        { ex: 'مُحَامِيَةٌ؟', task: 'ASK your partner for a clue now.', help: 'صَحِيح! دَوْرُكَ: أَيْنَ …؟', model: 'صَحِيحٌ! دَوْرُكَ الآنَ: أَيْنَ يَعْمَلُ شَخْصُكَ؟', modelEn: 'Right! Your turn: where does your person work?' },
        { unexpected: true, ex: 'أَيُّ مِهْنَةٍ أَصْعَبُ فِي رَأْيِكَ؟', task: 'Answer the unexpected question.', help: 'أَصْعَبُ مِهْنَةٍ … لِأَنَّ …', model: 'أَصْعَبُ مِهْنَةٍ هِيَ التَّمْرِيضُ، لِأَنَّ سَاعَاتِ العَمَلِ طَوِيلَةٌ.', modelEn: 'The hardest job is nursing, because the hours are long.' },
      ],
      girl: 'دَوْرُكِ · شَخْصُكِ · رَأْيِكِ',
      notes: 'Core+: yaʿmalu vs taʿmalu, yuḥaḍḍiru li-, tudāfiʿu ʿan, the CANDIDATE asks (task 4), a superlative (aṣʿabu mihnatin), sāʿāt al-ʿamal ṭawīla (non-human pl.).',
    },
    {
      id: 'C', level: 'Develop', setting: 'a school podcast', title: 'Role play C — Interviewing a family member about their job', ar: 'مُقَابَلَةٌ عَنِ العَمَلِ', you: 'a student reporter', them: 'a relative who is a nurse (played by your partner)',
      tasks: [
        { ex: 'مَرْحَبًا! مَا أَسْئِلَتُكَ؟', task: 'ASK how long they have worked there.', help: 'مُنْذُ مَتَى …؟', model: 'مُنْذُ مَتَى تَعْمَلِينَ مُمَرِّضَةً؟', modelEn: 'How long have you worked as a nurse?' },
        { ex: 'مُنْذُ عَشْرِ سَنَوَاتٍ. وَأَنْتَ، مَا رَأْيُكَ فِي التَّمْرِيضِ؟', task: 'Give an advantage and a disadvantage.', help: 'مِنْ مَزَايَاهُ … وَمِنْ عُيُوبِهِ …', model: 'مِنْ مَزَايَاهُ أَنَّهُ يُسَاعِدُ النَّاسَ، وَمِنْ عُيُوبِهِ أَنَّ العَمَلَ فِي اللَّيْلِ مُتْعِبٌ.', modelEn: 'An advantage is helping people; a disadvantage is that night work is tiring.' },
        { ex: 'مَاذَا تَعَلَّمْتَ مِنْ زِيَارَتِكَ لِلْمُسْتَشْفَى؟', task: 'Describe a past visit.', help: 'رَأَيْتُ … وَعَرَفْتُ أَنَّ …', model: 'رَأَيْتُ أَطِبَّاءَ وَمُمَرِّضَاتٍ يَعْمَلُونَ بِسُرْعَةٍ وَهُدُوءٍ، وَعَرَفْتُ أَنَّ العَمَلَ الجَمَاعِيَّ ضَرُورِيٌّ.', modelEn: 'I saw doctors and nurses working fast and calmly, and learnt teamwork is essential.' },
        { ex: 'هَلْ تُفَضِّلُ العَمَلَ فِي مُسْتَشْفًى أَمْ فِي مَكْتَبٍ؟', task: 'Compare two workplaces.', help: 'أُفَضِّلُ … لِأَنَّهُ أَ… لٰكِنَّ …', model: 'أُفَضِّلُ المُسْتَشْفَى، لِأَنَّهُ أَكْثَرُ حَرَكَةً، لٰكِنَّ المَكْتَبَ أَهْدَأُ وَأَكْثَرُ رَاحَةً.', modelEn: 'The hospital — it is busier — but an office is quieter and more comfortable.' },
        { unexpected: true, ex: 'هَلْ سَتَعْمَلُ فِي المَجَالِ الطِّبِّيِّ؟', task: 'Answer the unexpected question (future + condition).', help: 'إِذَا … فَسَـ…', model: 'إِذَا حَصَلْتُ عَلَى دَرَجَاتٍ جَيِّدَةٍ، فَسَأَدْرُسُ الطِّبَّ، وَسَأُصْبِحُ طَبِيبَ أَطْفَالٍ.', modelEn: 'If I get good grades, I’ll study medicine and become a children’s doctor.' },
      ],
      girl: 'رَأْيُكِ · زِيَارَتِكِ · تُفَضِّلِينَ · سَتَعْمَلِينَ · طَبِيبَةَ أَطْفَالٍ',
      notes: 'Develop: mundhu matā + taʿmalīna (addressing a woman), min mazāyāhu … wa-min ʿuyūbihi, a mixed plural (aṭibbāʾa wa-mumarriḍātin yaʿmalūna), comparatives, idhā … fa-sa-.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a careers debate', title: 'Role play D — Salary or passion?', ar: 'الرَّاتِبُ أَمِ الشَّغَفُ؟', you: 'a student panellist', them: 'the debate chair',
      tasks: [
        { ex: 'هَلْ يَجِبُ أَنْ نَخْتَارَ المِهْنَةَ بِحَسَبِ الرَّاتِبِ؟', task: 'Give a balanced view.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، يَحْتَاجُ الإِنْسَانُ إِلَى رَاتِبٍ يَكْفِيهِ، وَمِنْ نَاحِيَةٍ أُخْرَى، مَنْ يَعْمَلُ فِي مِهْنَةٍ يَكْرَهُهَا يَتْعَبُ مَهْمَا كَانَ رَاتِبُهُ مُرْتَفِعًا.', modelEn: 'People need a salary that is enough, but someone in a job they hate suffers however high the pay.' },
        { ex: 'لٰكِنَّ المُعَلِّمِينَ وَالمُمَرِّضِينَ رَوَاتِبُهُمْ مُنْخَفِضَةٌ!', task: 'Concede and give your view.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ رَوَاتِبَهُمْ أَقَلُّ مِمَّا يَسْتَحِقُّونَ، غَيْرَ أَنَّ هٰذِهِ مَسْؤُولِيَّةُ الحُكُومَاتِ، لَا سَبَبٌ لِتَرْكِ هٰذِهِ المِهَنِ.', modelEn: 'They earn less than they deserve, but that’s for governments to fix — not a reason to leave these jobs.' },
        { ex: 'هَلْ تَعْرِفُ شَخْصًا غَيَّرَ مِهْنَتَهُ؟', task: 'Describe a real example.', help: 'نَعَمْ، كَانَ … ثُمَّ …', model: 'نَعَمْ، كَانَ خَالِي مُحَاسِبًا فِي بَنْكٍ، ثُمَّ تَرَكَ عَمَلَهُ وَأَصْبَحَ طَاهِيًا، فَقَلَّ رَاتِبُهُ، لٰكِنَّهُ صَارَ أَسْعَدَ بِكَثِيرٍ.', modelEn: 'Yes, my uncle was a bank accountant, then became a chef: less pay, but much happier.' },
        { ex: 'وَمَا المِهَنُ الَّتِي سَتَخْتَفِي فِي المُسْتَقْبَلِ؟', task: 'Predict with evidence.', help: 'مِنَ المُتَوَقَّعِ أَنْ … بِسَبَبِ …', model: 'مِنَ المُتَوَقَّعِ أَنْ تَخْتَفِيَ بَعْضُ وَظَائِفِ المَكَاتِبِ وَالمَصَانِعِ بِسَبَبِ الذَّكَاءِ الاصْطِنَاعِيِّ، بَيْنَمَا سَتَزْدَادُ الحَاجَةُ إِلَى المُمَرِّضِينَ وَالمُبَرْمِجِينَ.', modelEn: 'Some office and factory jobs will likely vanish because of AI, while demand for nurses and programmers will grow.' },
        { unexpected: true, ex: 'لَوْ عَمِلْتَ يَوْمًا وَاحِدًا فِي أَيِّ مِهْنَةٍ، مَاذَا تَخْتَارُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ عَمِلْتُ …، لَاخْتَرْتُ …', model: 'لَوْ عَمِلْتُ يَوْمًا وَاحِدًا، لَاخْتَرْتُ أَنْ أَكُونَ رَائِدَ فَضَاءٍ، لِأَرَى الأَرْضَ مِنْ بَعِيدٍ.', modelEn: 'If I could work one day in any job, I’d be an astronaut, to see the Earth from afar.' },
      ],
      girl: 'تَعْرِفِينَ · عَمِلْتِ · تَخْتَارِينَ · رَائِدَةَ فَضَاءٍ',
      notes: 'Stretch: a balanced view with man + mahmā, a concession with lā (not a reason), kāna + accusative job noun, thumma … fa- … lākinna, min al-mutawaqqaʿ an + bi-sababi + baynamā, law … la-.',
      modelFoot: 'Stretch: balance, a concession, a real-life change of career, a prediction and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'المِهَنُ مِنْ حَوْلِي', aim: 'one full sentence per question',
      qs: [
        { q: 'مَاذَا يَعْمَلُ وَالِدُكَ؟', en: 'What does your father do?', start: 'أَبِي …', model: 'أَبِي سَائِقُ حَافِلَةٍ.', modelEn: 'My father is a bus driver.' },
        { q: 'وَمَاذَا تَعْمَلُ وَالِدَتُكَ؟', en: 'What does your mother do?', start: 'أُمِّي …', model: 'أُمِّي مُعَلِّمَةُ رِيَاضِيَّاتٍ.', modelEn: 'My mother is a maths teacher.' },
        { q: 'أَيْنَ يَعْمَلُ الطَّبِيبُ؟', en: 'Where does a doctor work?', start: 'يَعْمَلُ الطَّبِيبُ فِي …', model: 'يَعْمَلُ الطَّبِيبُ فِي المُسْتَشْفَى أَوْ فِي العِيَادَةِ.', modelEn: 'A doctor works in a hospital or a clinic.' },
        { q: 'مَا المِهْنَةُ الَّتِي تُحِبُّهَا؟', en: 'Which job do you like?', start: 'أُحِبُّ مِهْنَةَ …', model: 'أُحِبُّ مِهْنَةَ الصَّحَفِيِّ.', modelEn: 'I like journalism.' },
        { q: 'هَلْ تُرِيدُ أَنْ تَعْمَلَ فِي مَكْتَبٍ؟', en: 'Do you want to work in an office?', start: 'نَعَمْ / لَا، لِأَنَّ …', model: 'لَا، لِأَنِّي أُحِبُّ العَمَلَ فِي الخَارِجِ.', modelEn: 'No, because I like working outdoors.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + the right m. / f. job noun = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'عَالَمُ المِهَنِ', aim: 'two or three sentences, with duties, a comparison and a past detail',
      qs: [
        { q: 'صِفْ عَمَلَ أَحَدِ أَفْرَادِ أُسْرَتِكَ.', en: 'Describe the job of a family member.', start: '… يَعْمَلُ / تَعْمَلُ … وَيُسَاعِدُ / وَتُسَاعِدُ …', model: 'عَمَّتِي صَيْدَلَانِيَّةٌ؛ تَعْمَلُ فِي صَيْدَلِيَّةٍ قُرْبَ بَيْتِنَا، وَتُسَاعِدُ المَرْضَى عَلَى فَهْمِ أَدْوِيَتِهِمْ.', modelEn: 'My aunt is a pharmacist: she works near our house and helps patients understand their medicine.' },
        { q: 'مَا مَزَايَا مِهْنَةِ المُعَلِّمِ وَعُيُوبُهَا؟', en: 'What are the pros and cons of teaching?', start: 'مِنْ مَزَايَاهَا … وَمِنْ عُيُوبِهَا …', model: 'مِنْ مَزَايَاهَا العُطَلُ الطَّوِيلَةُ وَالعَمَلُ مَعَ الشَّبَابِ، وَمِنْ عُيُوبِهَا كَثْرَةُ التَّصْحِيحِ فِي المَسَاءِ.', modelEn: 'Long holidays and working with young people; but lots of marking in the evenings.' },
        { q: 'مَاذَا أَرَدْتَ أَنْ تَكُونَ عِنْدَمَا كُنْتَ صَغِيرًا؟', en: 'What did you want to be as a child?', start: 'عِنْدَمَا كُنْتُ صَغِيرًا، كُنْتُ أُرِيدُ …', model: 'عِنْدَمَا كُنْتُ صَغِيرًا، كُنْتُ أُرِيدُ أَنْ أَكُونَ رَجُلَ إِطْفَاءٍ، لِأَنِّي كُنْتُ أُحِبُّ السَّيَّارَاتِ الحَمْرَاءَ!', modelEn: 'As a child I wanted to be a firefighter, because I loved red engines!' },
        { q: 'أَيُّهُمَا أَصْعَبُ: الطِّبُّ أَمِ الهَنْدَسَةُ؟', en: 'Which is harder: medicine or engineering?', start: '… أَصْعَبُ، لِأَنَّ … بَيْنَمَا …', model: 'الطِّبُّ أَصْعَبُ فِي رَأْيِي، لِأَنَّ الطَّبِيبَ مَسْؤُولٌ عَنْ حَيَاةِ النَّاسِ، بَيْنَمَا يَعْمَلُ المُهَنْدِسُ عَلَى مَشَارِيعَ يُمْكِنُ إِصْلَاحُهَا.', modelEn: 'Medicine, I think: doctors hold lives in their hands, whereas engineers’ projects can be fixed.' },
        { q: 'مَا المِهْنَةُ الَّتِي سَتَخْتَارُهَا؟ وَلِمَاذَا؟', en: 'Which job will you choose, and why?', start: 'سَأَكُونُ … لِأَنِّي …', model: 'سَأَكُونُ مُهَنْدِسَةً مِعْمَارِيَّةً، لِأَنِّي أُحِبُّ الرَّسْمَ وَالرِّيَاضِيَّاتِ مَعًا.', modelEn: 'I’ll be an architect (f.), because I love drawing and maths together.' },
      ],
      foot: 'Develop: two or three sentences — agreement (yaʿmalu / taʿmalu), pros and cons, a past wish and a future choice.',
      modelFoot: 'Agreement + pros / cons + time frame = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'العَمَلُ وَالمُجْتَمَعُ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ هُنَاكَ مِهَنٌ لِلرِّجَالِ وَمِهَنٌ لِلنِّسَاءِ؟', en: 'Are there men’s jobs and women’s jobs?', start: 'لَا أَعْتَقِدُ ذٰلِكَ؛ فَـ…', model: 'لَا أَعْتَقِدُ ذٰلِكَ؛ فَاليَوْمَ نَرَى مُهَنْدِسَاتٍ وَطَيَّارَاتٍ، كَمَا نَرَى مُمَرِّضِينَ وَمُعَلِّمِينَ فِي رِيَاضِ الأَطْفَالِ.', modelEn: 'I don’t think so: today we see women engineers and pilots, and male nurses and nursery teachers.' },
        { q: 'لِمَاذَا تُدْفَعُ رَوَاتِبُ عَالِيَةٌ لِلَاعِبِي كُرَةِ القَدَمِ؟', en: 'Why are footballers paid so much?', start: 'بِسَبَبِ … مِمَّا …', model: 'بِسَبَبِ الإِعْلَانَاتِ وَالمُشَاهَدَاتِ الضَّخْمَةِ، مِمَّا يَجْعَلُ رَوَاتِبَهُمْ أَعْلَى بِكَثِيرٍ مِنْ رَوَاتِبِ الأَطِبَّاءِ.', modelEn: 'Because of huge advertising and viewing figures, which pushes their pay far above doctors’.' },
        { q: 'هَلِ العَمَلُ مِنَ البَيْتِ أَفْضَلُ؟', en: 'Is working from home better?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، يُوَفِّرُ وَقْتَ المُوَاصَلَاتِ، وَمِنْ نَاحِيَةٍ أُخْرَى، قَدْ يَشْعُرُ المُوَظَّفُ بِالوَحْدَةِ وَيَخْلِطُ بَيْنَ العَمَلِ وَالحَيَاةِ.', modelEn: 'It saves travel time, but workers may feel lonely and blur work and life.' },
        { q: 'كَيْفَ كَانَتِ المِهَنُ فِي زَمَنِ أَجْدَادِكَ؟', en: 'What were jobs like in your grandparents’ time?', start: 'كَانَ مُعْظَمُ النَّاسِ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَ مُعْظَمُ النَّاسِ يَعْمَلُونَ فِي الزِّرَاعَةِ أَوِ التِّجَارَةِ، أَمَّا اليَوْمَ فَظَهَرَتْ مِهَنٌ لَمْ يَتَخَيَّلُوهَا، كَمُصَمِّمِ التَّطْبِيقَاتِ.', modelEn: 'Most worked in farming or trade; today there are jobs they never imagined, like app designer.' },
        { q: 'لَوْ لَمْ تَحْتَجْ إِلَى المَالِ، هَلْ كُنْتَ سَتَعْمَلُ؟', en: 'If you didn’t need money, would you work?', start: 'لَوْ لَمْ أَحْتَجْ …، لَـ…', model: 'لَوْ لَمْ أَحْتَجْ إِلَى المَالِ، لَعَمِلْتُ مُتَطَوِّعًا مَعَ مُنَظَّمَةٍ إِنْسَانِيَّةٍ، لِأَنَّ العَمَلَ يُعْطِي الحَيَاةَ مَعْنًى.', modelEn: 'I’d volunteer with a humanitarian organisation, because work gives life meaning.' },
      ],
      foot: 'Stretch: feminine and masculine plurals, bi-sababi … mimmā, a balanced view, kāna + present vs ammā … fa-, law lam … la-.',
      modelFoot: 'Stretch: agreement in plurals, cause → effect, balance, past vs present and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I named jobs in the masculine and feminine.' },
    { route: 'core', text: 'I said where people work (yaʿmalu / taʿmalu fī).' },
    { route: 'develop', text: 'I described duties and gave an advantage and a disadvantage.' },
    { route: 'develop', text: 'I used plurals of job nouns correctly.' },
    { route: 'stretch', text: 'I gave a balanced view, a concession or law … la-.' },
  ],
};
speak.RP[1].tasks[3].help = 'صَحِيحٌ! دَوْرُكَ: أَيْنَ …؟';
speak.RP[2].tasks[4].help = 'إِذَا حَصَلْتُ …، فَسَأَدْرُسُ …';
speak.RP[3].tasks[4].help = 'لَوْ عَمِلْتُ …، لَاخْتَرْتُ …';
speak.CONV[2].qs[0].start = 'لَا أَعْتَقِدُ ذٰلِكَ؛ فَاليَوْمَ …';
speak.CONV[2].qs[3].start = 'كَانَ مُعْظَمُ النَّاسِ … أَمَّا اليَوْمَ فَظَهَرَتْ …';
speak.CONV[2].qs[4].start = 'لَوْ لَمْ أَحْتَجْ …، لَعَمِلْتُ …';

const Q2_CORE = `مَرْحَبًا يَا فَاطِمَةُ،
كَيْفَ حَالُكِ؟ فِي الأُسْبُوعِ المَاضِي قُمْتُ بِتَجْرِبَةِ عَمَلٍ فِي مُسْتَشْفَى الأَطْفَالِ. عَمِلْتُ مَعَ مُمَرِّضَةٍ لَطِيفَةٍ اسْمُهَا سُعَادُ. كُنْتُ أُسَاعِدُهَا فِي تَرْتِيبِ الغُرَفِ، وَأَتَكَلَّمُ مَعَ الأَطْفَالِ المَرْضَى. العَمَلُ كَانَ مُتْعِبًا، لِأَنَّنَا كُنَّا نَمْشِي طُولَ اليَوْمِ، لٰكِنَّهُ كَانَ مُفِيدًا جِدًّا. فِي رَأْيِي، التَّمْرِيضُ مِهْنَةٌ مُهِمَّةٌ وَجَمِيلَةٌ، لٰكِنَّ الرَّاتِبَ مُنْخَفِضٌ. فِي المُسْتَقْبَلِ سَأَدْرُسُ الطِّبَّ، وَأُرِيدُ أَنْ أَكُونَ طَبِيبَةَ أَطْفَالٍ.
مَعَ حُبِّي،
رَنَا`;
const Q2_FULL = `عَزِيزَتِي فَاطِمَةُ،
أَكْتُبُ إِلَيْكِ بَعْدَ أُسْبُوعٍ لَا يُنْسَى قَضَيْتُهُ فِي تَجْرِبَةِ عَمَلٍ بِمُسْتَشْفَى الأَطْفَالِ، حَيْثُ رَافَقْتُ مُمَرِّضَةً تَعْمَلُ هُنَاكَ مُنْذُ عِشْرِينَ سَنَةً. كَانَتْ مُهِمَّتِي أَنْ أُرَتِّبَ الغُرَفَ، وَأَقْرَأَ القِصَصَ لِلْأَطْفَالِ الَّذِينَ يَنْتَظِرُونَ العَمَلِيَّاتِ، فَتَعَلَّمْتُ أَنَّ الابْتِسَامَةَ دَوَاءٌ أَيْضًا، وَأَنَّ الكَلِمَةَ الطَّيِّبَةَ تُخَفِّفُ الخَوْفَ. صَحِيحٌ أَنَّ العَمَلَ كَانَ مُتْعِبًا، إِذْ لَمْ نَجْلِسْ إِلَّا دَقَائِقَ قَلِيلَةً، غَيْرَ أَنَّنِي لَمْ أَشْعُرْ بِالمَلَلِ لَحْظَةً وَاحِدَةً. وَأَرَى أَنَّ المُمَرِّضِينَ يَسْتَحِقُّونَ رَوَاتِبَ أَعْلَى بِكَثِيرٍ مِمَّا يَحْصُلُونَ عَلَيْهِ. وَإِذَا حَقَّقْتُ دَرَجَاتٍ عَالِيَةً، فَسَأَدْرُسُ الطِّبَّ لِأُصْبِحَ طَبِيبَةَ أَطْفَالٍ.
بِمَحَبَّةٍ،
رَنَا`;
const Q3A_CORE = `فِي أُسْرَتِي مِهَنٌ كَثِيرَةٌ وَمُخْتَلِفَةٌ. أَبِي مُهَنْدِسٌ، وَيَعْمَلُ فِي شَرِكَةٍ كَبِيرَةٍ لِلْبِنَاءِ. أُمِّي مُعَلِّمَةُ عُلُومٍ فِي مَدْرَسَةٍ ثَانَوِيَّةٍ. أَخِي الكَبِيرُ مُبَرْمِجٌ، وَيَعْمَلُ مِنَ البَيْتِ. أُخْتِي تَدْرُسُ الطِّبَّ فِي الجَامِعَةِ، وَسَتُصْبِحُ طَبِيبَةً بَعْدَ سَنَتَيْنِ.
أُحِبُّ عَمَلَ أَبِي، لِأَنَّهُ يُصَمِّمُ مَبَانِيَ جَمِيلَةً. لٰكِنَّ عَمَلَهُ مُتْعِبٌ، لِأَنَّهُ يُسَافِرُ كَثِيرًا. أَمَّا أُمِّي فَعَمَلُهَا مُفِيدٌ، وَعِنْدَهَا عُطَلٌ طَوِيلَةٌ، لٰكِنَّهَا تُصَحِّحُ الوَاجِبَاتِ فِي المَسَاءِ.
عِنْدَمَا كُنْتُ صَغِيرًا، كُنْتُ أُرِيدُ أَنْ أَكُونَ لَاعِبَ كُرَةِ قَدَمٍ. فِي السَّنَةِ المَاضِيَةِ قُمْتُ بِتَجْرِبَةِ عَمَلٍ فِي مَكْتَبِ مُحَامٍ. كَانَ العَمَلُ هَادِئًا، وَتَعَلَّمْتُ أَشْيَاءَ كَثِيرَةً عَنِ القَانُونِ، وَكَتَبْتُ رَسَائِلَ رَسْمِيَّةً لِلْمُحَامِي.
فِي رَأْيِي، أَهَمُّ شَيْءٍ أَنْ نُحِبَّ عَمَلَنَا. فِي المُسْتَقْبَلِ سَأَدْرُسُ القَانُونَ فِي الجَامِعَةِ، وَسَأُصْبِحُ مُحَامِيًا، لِأَنِّي أُرِيدُ أَنْ أُسَاعِدَ النَّاسَ وَأُدَافِعَ عَنْهُمْ.`;
const Q3A_FULL = `يُقَالُ إِنَّ مَنْ يَعْمَلُ فِيمَا يُحِبُّ لَا يَعْمَلُ يَوْمًا وَاحِدًا فِي حَيَاتِهِ، وَهٰذَا مَا أَرَاهُ فِي أُسْرَتِي الَّتِي تَجْمَعُ مِهَنًا مُتَنَوِّعَةً: فَأَبِي مُهَنْدِسٌ مَدَنِيٌّ، وَأُمِّي صَيْدَلَانِيَّةٌ، وَخَالِي طَاهٍ فِي فُنْدُقٍ مَشْهُورٍ، وَعَمَّتِي صَحَفِيَّةٌ تُسَافِرُ حَوْلَ العَالَمِ.
وَلِكُلِّ مِهْنَةٍ مَزَايَاهَا وَعُيُوبُهَا؛ فَأَبِي يُصَمِّمُ جُسُورًا يَسْتَخْدِمُهَا آلَافُ النَّاسِ، لٰكِنَّهُ يَقْضِي أَسَابِيعَ بَعِيدًا عَنَّا. أَمَّا أُمِّي فَتَعْمَلُ سَاعَاتٍ مُنْتَظِمَةً قُرْبَ البَيْتِ، غَيْرَ أَنَّ رَاتِبَهَا أَقَلُّ مِنْ رَاتِبِهِ بِكَثِيرٍ.
وَقَدْ عِشْتُ تَجْرِبَةً غَيَّرَتْ أَفْكَارِي عَنِ العَمَلِ، عِنْدَمَا قَضَيْتُ أُسْبُوعًا مَعَ خَالِي فِي مَطْبَخِ الفُنْدُقِ؛ فَقَدْ رَأَيْتُ طُهَاةً يَعْمَلُونَ تِسْعَ سَاعَاتٍ بِلَا تَوَقُّفٍ، وَمَعَ ذٰلِكَ كَانُوا يَضْحَكُونَ وَيُغَنُّونَ، لِأَنَّهُمْ يُحِبُّونَ مَا يَصْنَعُونَ، وَيَفْخَرُونَ بِكُلِّ طَبَقٍ يَخْرُجُ مِنْ مَطْبَخِهِمْ.
صَحِيحٌ أَنَّ الرَّاتِبَ مُهِمٌّ، غَيْرَ أَنَّ الشَّغَفَ هُوَ مَا يَجْعَلُ العَمَلَ مُحْتَمَلًا وَمُمْتِعًا. وَلَوْ خُيِّرْتُ بَيْنَ وَظِيفَةٍ مُرِيحَةٍ أَكْرَهُهَا وَأُخْرَى مُتْعِبَةٍ أُحِبُّهَا، لَاخْتَرْتُ الثَّانِيَةَ دُونَ أَيِّ تَرَدُّدٍ.`;
const Q3B_FULL = `يَتَغَيَّرُ سُوقُ العَمَلِ بِسُرْعَةٍ لَمْ يَشْهَدْهَا التَّارِيخُ؛ فَمِهَنٌ كَانَتْ تُعَدُّ آمِنَةً قَبْلَ عِشْرِينَ سَنَةً بَدَأَتْ تَخْتَفِي، بَيْنَمَا ظَهَرَتْ مِهَنٌ جَدِيدَةٌ لَمْ يَتَخَيَّلْهَا أَحَدٌ. فَأَيُّ مِهَنٍ سَتَبْقَى فِي المُسْتَقْبَلِ؟
مِنْ نَاحِيَةٍ، يَسْتَطِيعُ الذَّكَاءُ الاصْطِنَاعِيُّ اليَوْمَ أَنْ يَكْتُبَ التَّقَارِيرَ، وَيُتَرْجِمَ النُّصُوصَ، وَيُجِيبَ عَنْ أَسْئِلَةِ العُمَلَاءِ، مِمَّا يُهَدِّدُ كَثِيرًا مِنْ وَظَائِفِ المَكَاتِبِ وَالبُنُوكِ. وَمِنْ نَاحِيَةٍ أُخْرَى، تَبْقَى المِهَنُ الَّتِي تَحْتَاجُ إِلَى التَّعَاطُفِ الإِنْسَانِيِّ، كَالتَّمْرِيضِ وَالتَّعْلِيمِ، صَعْبَةً عَلَى الآلَاتِ.
وَقَدْ لَاحَظْتُ ذٰلِكَ فِي حَيَاةِ عَمَّتِي، الَّتِي كَانَتْ تَعْمَلُ مُوَظَّفَةَ اسْتِقْبَالٍ فِي بَنْكٍ، ثُمَّ اسْتُبْدِلَتْ وَظِيفَتُهَا بِتَطْبِيقٍ إِلِكْتْرُونِيٍّ. فَعَادَتْ إِلَى الدِّرَاسَةِ وَهِيَ فِي الأَرْبَعِينَ، وَأَصْبَحَتِ اليَوْمَ مُدَرِّبَةً فِي المَهَارَاتِ الرَّقْمِيَّةِ، تُعَلِّمُ مُوَظَّفِينَ فَقَدُوا وَظَائِفَهُمْ مِثْلَهَا.
صَحِيحٌ أَنَّ التِّكْنُولُوجْيَا تُلْغِي بَعْضَ الوَظَائِفِ، غَيْرَ أَنَّهَا تَخْلُقُ غَيْرَهَا، كَمَا حَدَثَ فِي كُلِّ ثَوْرَةٍ صِنَاعِيَّةٍ سَابِقَةٍ. وَإِذَا تَعَلَّمَ الشَّبَابُ أَنْ يَتَكَيَّفُوا وَيَتَعَلَّمُوا طُوالَ حَيَاتِهِمْ، فَلَنْ يَخَافُوا مِنَ المُسْتَقْبَلِ، بَلْ سَيَصْنَعُونَهُ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a work-experience placement form, write an email about your work-experience week, and write an extended piece about jobs in your family or about the jobs of the future.',
  lift: [
    { ar: 'رَافَقْتُ مُمَرِّضَةً تَعْمَلُ هُنَاكَ مُنْذُ عِشْرِينَ سَنَةً', en: 'I shadowed a nurse who has worked there for twenty years' },
    { ar: 'مِنْ مَزَايَاهَا … وَمِنْ عُيُوبِهَا …', en: 'among its advantages … and its disadvantages …' },
    { ar: 'المُمَرِّضُونَ يَسْتَحِقُّونَ رَوَاتِبَ أَعْلَى', en: 'nurses deserve higher salaries' },
  ],
  checkTip: 'Check: job nouns agree with the person (abī muhandis · ummī muhandisa); the verb agrees too (yaʿmalu / taʿmalu); after akūna / uṣbiḥa the job is accusative (uṣbiḥa ṭabībatan); plurals: muhandisūn (subject) / muhandisīn (object).',
  FORM: {
    title: 'Work-experience placement form', ar: 'اسْتِمَارَةُ التَّدْرِيبِ العَمَلِيِّ',
    fields: [
      { core: true, ar: 'الاسْمُ وَالصَّفُّ', en: 'Name and class', model: 'رَنَا مُحَمَّدٌ، العَاشِرُ', modelEn: 'Rana Mohammed, Year 10' },
      { core: true, ar: 'مَكَانُ التَّدْرِيبِ', en: 'Placement', model: 'مُسْتَشْفَى الأَطْفَالِ', modelEn: 'the children’s hospital' },
      { core: true, ar: 'القِسْمُ', en: 'Department', model: 'قِسْمُ التَّمْرِيضِ', modelEn: 'nursing' },
      { core: true, ar: 'المُشْرِفُ / المُشْرِفَةُ', en: 'Supervisor', model: 'المُمَرِّضَةُ سُعَادُ', modelEn: 'Nurse Suad' },
      { core: true, ar: 'التَّوَارِيخُ', en: 'Dates', model: 'مِنْ ٣ إِلَى ٧ يُونْيُو', modelEn: '3 to 7 June' },
      { core: true, ar: 'سَاعَاتُ العَمَلِ', en: 'Working hours', model: 'مِنَ الثَّامِنَةِ إِلَى الثَّالِثَةِ', modelEn: '8 to 3' },
      { ar: 'المِهْنَةُ الَّتِي تُفَكِّرُ فِيهَا', en: 'The career you are considering', model: 'طَبِيبَةُ أَطْفَالٍ', modelEn: 'a paediatrician (f.)' },
      { ar: 'جُمْلَةٌ: مَاذَا تُرِيدُ أَنْ تَتَعَلَّمَ؟', en: 'ONE sentence: what you want to learn', model: 'أُرِيدُ أَنْ أَتَعَلَّمَ كَيْفَ يَتَعَامَلُ الأَطِبَّاءُ وَالمُمَرِّضَاتُ مَعَ الأَطْفَالِ الخَائِفِينَ.', modelEn: 'I want to learn how doctors and nurses deal with frightened children.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with job plurals.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 4: the job noun matches the supervisor (al-mushrifa). Box 7: ṭabībatu aṭfālin (iḍāfa, f.). Box 8: al-aṭibbāʾ wa-l-mumarriḍāt.',
  },
  Q2: {
    short: 'an email about work experience', title: 'Question 2: my work-experience week', ar: 'أُسْبُوعُ التَّدْرِيبِ العَمَلِيِّ',
    task: 'You have just done a week of work experience. Write an email in Arabic to a friend of about 80–90 words. You must include: • where you worked and with whom • what you did there • your opinion of the job (an advantage and a disadvantage) • the job you want in the future and why.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Job nouns that agree (mumarriḍa, ṭabība).', 'A past AND a future sentence.', 'About 80–90 words.'],
    phrases: [['قُمْتُ بِتَجْرِبَةِ عَمَلٍ فِي …', 'I did work experience at …'], ['عَمِلْتُ مَعَ … اسْمُهَا …', 'I worked with … called …'], ['العَمَلُ كَانَ مُتْعِبًا، لٰكِنَّهُ …', 'the work was tiring, but …'], ['أُرِيدُ أَنْ أَكُونَ … لِأَنَّ …', 'I want to be … because …']],
    rubric: [
      ['task', 'قَضَيْتِ أُسْبُوعًا فِي تَجْرِبَةِ عَمَلٍ. اكْتُبِي رِسَالَةً إِلَى صَدِيقَتِكِ (٨٠–٩٠ كَلِمَةً).', 'You did a week’s work experience: write to your friend (80–90 words).'],
      ['1', 'أَيْنَ عَمِلْتِ؟ وَمَعَ مَنْ؟', 'Where you worked and with whom'],
      ['2', 'مَاذَا فَعَلْتِ هُنَاكَ؟', 'What you did there'],
      ['3', 'مَا رَأْيُكِ فِي هٰذِهِ المِهْنَةِ؟', 'Your opinion of the job'],
      ['4', 'مَا المِهْنَةُ الَّتِي تُرِيدِينَهَا فِي المُسْتَقْبَلِ؟ وَلِمَاذَا؟', 'The job you want and why'],
    ],
    qwords: 'أَيْنَ (where) · مَعَ مَنْ (with whom) · مَاذَا فَعَلْتِ (what did you do — PAST) · المُسْتَقْبَلِ (future — use sa- / urīdu an)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكِ؟', 'Hello …, how are you?'],
      ['1', 'فِي الأُسْبُوعِ المَاضِي قُمْتُ بِتَجْرِبَةِ عَمَلٍ فِي ______ ، وَعَمِلْتُ مَعَ ______ .', 'Last week I did work experience at …, and worked with …'],
      ['2', 'كُنْتُ أُسَاعِدُ ______ فِي ______ .', 'I used to help … with …'],
      ['3', 'العَمَلُ كَانَ ______ ، لٰكِنَّهُ ______ . فِي رَأْيِي ______ .', 'The work was …, but it … In my opinion …'],
      ['4', 'فِي المُسْتَقْبَلِ أُرِيدُ أَنْ أَكُونَ ______ ، لِأَنَّ ______ .', 'In future I want to be …, because …'],
      ['end', 'مَعَ حُبِّي، ______', 'With love, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Fatima, how are you? Last week I did work experience at the children’s hospital. I worked with a kind nurse called Suad. I helped her tidy the rooms and talked to the sick children. The work was tiring, because we walked all day, but it was very useful. In my opinion nursing is an important and lovely job, but the pay is low. In future I’ll study medicine, and I want to be a children’s doctor. With love, Rana.”',
      find: ['مُمَرِّضَةٍ لَطِيفَةٍ', 'كُنْتُ أُسَاعِدُهَا', 'كَانَ مُتْعِبًا', 'أَكُونَ طَبِيبَةَ أَطْفَالٍ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Fatima, I’m writing after an unforgettable week of work experience at the children’s hospital, shadowing a nurse who has worked there for twenty years. My job was to tidy rooms and read stories to children waiting for operations, and I learnt that a smile is medicine too, and a kind word eases fear. The work was tiring — we barely sat down — but I didn’t feel bored for a moment. I think nurses deserve far higher salaries than they get. If I achieve high grades, I’ll study medicine to become a paediatrician. With love, Rana.”',
      find: ['تَعْمَلُ هُنَاكَ مُنْذُ', 'الَّذِينَ يَنْتَظِرُونَ', 'لَمْ نَجْلِسْ إِلَّا', 'إِذَا حَقَّقْتُ … فَسَأَدْرُسُ'],
    },
  },
  Q3: {
    a: { title: 'المِهَنُ فِي أُسْرَتِي', en: 'Jobs in my family', bullets: 'مِهَنُ أَفْرَادِ أُسْرَتِكَ · مَزَايَا هٰذِهِ المِهَنِ وَعُيُوبُهَا · تَجْرِبَةُ عَمَلٍ أَوْ حُلْمُ طُفُولَةٍ · المِهْنَةُ الَّتِي سَتَخْتَارُهَا', bulletsEn: 'Your family’s jobs · their advantages and disadvantages · work experience or a childhood dream · the job you will choose' },
    b: { title: 'مِهَنُ المُسْتَقْبَلِ', en: 'The jobs of the future', bullets: 'سُوقُ العَمَلِ يَتَغَيَّرُ · المِهَنُ المُهَدَّدَةُ وَالمِهَنُ الآمِنَةُ · مِثَالٌ مِنَ الوَاقِعِ · رَأْيُكَ وَنَصِيحَتُكَ', bulletsEn: 'The changing job market · threatened and safe jobs · a real example · your opinion and advice' },
    plan: [
      'Family jobs — abī muhandis, ummī muʿallima …; yaʿmalu / taʿmalu fī … (agreement).',
      'Pros and cons — uḥibbu ʿamalahu li-annahu …, lākinna …; ammā ummī fa- …',
      'Past — ʿindamā kuntu ṣaghīran kuntu urīdu an akūna …; work experience: kāna al-ʿamal …',
      'Future — sa-adrusu …, sa-uṣbiḥu + accusative; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'أَبِي مُهَنْدِسٌ، وَأُمِّي مُعَلِّمَةٌ.', en: 'present: my father is an engineer, and my mother is a teacher.' },
      { ar: 'كُنْتُ أُرِيدُ أَنْ أَكُونَ لَاعِبَ كُرَةِ قَدَمٍ.', en: 'past: I used to want to be a footballer.' },
      { ar: 'سَأُصْبِحُ مُحَامِيًا، لِأَنِّي أُرِيدُ أَنْ أُسَاعِدَ النَّاسَ.', en: 'future: I will become a lawyer, because I want to help people.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'My family has many jobs: Dad is an engineer at a big building firm, Mum a secondary science teacher, my brother a programmer working from home, my sister studies medicine and will be a doctor in two years → I like Dad’s job (he designs lovely buildings) but it’s tiring with lots of travel; Mum’s is useful with long holidays, but she marks in the evenings → as a child I wanted to be a footballer; last year I did work experience at a lawyer’s office — quiet, and I learnt a lot about the law, and wrote formal letters for the lawyer → the most important thing is to love your work; I’ll study law and become a lawyer to help and defend people.', find: ['أَبِي مُهَنْدِسٌ', 'أَمَّا أُمِّي فَعَمَلُهَا', 'كُنْتُ أُرِيدُ أَنْ أَكُونَ', 'سَأُصْبِحُ مُحَامِيًا'], notes: 'Core model: job nouns in m. / f., yaʿmalu fī, ammā … fa-, kuntu urīdu an akūna + accusative, kāna + accusative, sa-uṣbiḥu muḥāmiyan.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'They say whoever works at what they love never works a day in their life — I see this in my family: Dad is a civil engineer, Mum a pharmacist, my uncle a chef in a famous hotel, and my aunt a journalist who travels the world → every job has pros and cons: Dad designs bridges thousands use but spends weeks away; Mum works regular hours near home, but earns much less → a week with my uncle in the hotel kitchen changed my ideas about work: chefs worked nine hours non-stop, yet laughed and sang because they love what they make and are proud of every dish that leaves their kitchen → pay matters, but passion makes work bearable and enjoyable; “if I had to choose between a comfortable job I hate and a tiring one I love, I’d choose the second without any hesitation”.', find: ['يُقَالُ إِنَّ مَنْ', 'يَسْتَخْدِمُهَا آلَافُ', 'وَمَعَ ذٰلِكَ كَانُوا', 'لَوْ خُيِّرْتُ … لَاخْتَرْتُ'], notes: 'Full-mark model: a proverb with man, nisba job nouns, a relative without alladhī (jusūran yastakhdimuhā), ammā … fa- / ghayra anna, a mixed plural (ṭuhātan yaʿmalūna), wa-maʿa dhālika, a concession and a passive law … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'the jobs of the future', text: Q3B_FULL, en: 'The job market is changing at unprecedented speed: jobs seen as safe twenty years ago are vanishing, while new ones nobody imagined have appeared — which will survive? → AI can now write reports, translate texts and answer customers, threatening many office and banking jobs; but jobs needing human empathy, like nursing and teaching, remain hard for machines → I saw this in my aunt’s life: she was a bank receptionist until her job was replaced by an app; she went back to study at forty and is now a digital-skills trainer, teaching workers who lost their jobs as she did → technology removes some jobs but creates others, as in every past industrial revolution; “if young people learn to adapt and keep learning all their lives, they won’t fear the future — they’ll build it”.', find: ['كَانَتْ تُعَدُّ آمِنَةً', 'مِمَّا يُهَدِّدُ', 'ثُمَّ اسْتُبْدِلَتْ', 'فَلَنْ يَخَافُوا … بَلْ'], notes: 'Full-mark model for the Stretch title: kānat tuʿaddu (past passive habit), baynamā, a rhetorical question, three subjunctive verbs after an, mimmā, a relative with job nouns in f. (muwaẓẓafata istiqbāl), a past passive (ustubdilat), a ḥāl clause (wa-hiya fī al-arbaʿīn), a concession and idhā … fa-lan … bal.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; the job nouns agree.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: an advantage and a disadvantage, past and future.' },
    { route: 'develop', text: 'Q3: four paragraphs with m. / f. / pl. job nouns.' },
    { route: 'stretch', text: 'Q3: a balanced view, a concession and a conditional.' },
  ],
};

module.exports = { speak, write };
