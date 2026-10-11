'use strict';
/* Exam-practice data · TD-L02 · The Classroom and Learning Tools (yūjadu / tūjadu; demonstratives; relative clauses). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'D', n: 2, short: 'The Classroom and Learning Tools', arShort: 'الفَصْلُ وَأَدَوَاتُ التَّعَلُّمِ', fileTitle: 'The_Classroom_and_Learning_Tools', title: 'The Classroom and Learning Tools', ar: 'الفَصْلُ الدِّرَاسِيُّ وَأَدَوَاتُ التَّعَلُّمِ', icon: 'FaPencil', grammar: 'yūjadu / tūjadu; demonstratives (hādhā · hādhihi · hāʾulāʾi); relative clauses (alladhī · allatī nastakhdimuhu / nastakhdimuhā)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: describe your classroom and the tools you learn with (يُوجَدُ · تُوجَدُ), point things out (هٰذَا · هٰذِهِ), explain what tools are for with relative clauses (الَّذِي نَسْتَخْدِمُهُ لِلْبَحْثِ) and discuss classroom rules and routines.',
  words: [
    w(1, 'فَصْلٌ · صَفٌّ', 'a classroom', [['pl.', 'فُصُولٌ · صُفُوفٌ'], ['bright (m.)', 'فَصْلٌ مُضِيءٌ']]),
    w(2, 'سَبُّورَةٌ', 'a board', [['smart board', 'سَبُّورَةٌ ذَكِيَّةٌ'], ['pl.', 'سَبُّورَاتٌ']]),
    w(3, 'مَقْعَدٌ · طَاوِلَةٌ', 'a seat · a table', [['pl.', 'مَقَاعِدُ · طَاوِلَاتٌ']]),
    w(4, 'دَفْتَرٌ · كِتَابٌ', 'an exercise book · a book', [['pl.', 'دَفَاتِرُ · كُتُبٌ']]),
    w(5, 'قَلَمٌ · مِمْحَاةٌ · مِسْطَرَةٌ', 'a pen · a rubber · a ruler', [['pl.', 'أَقْلَامٌ · مَمَاحٍ · مَسَاطِرُ']]),
    w(6, 'حَاسُوبٌ لَوْحِيٌّ', 'a tablet', [['pl.', 'حَوَاسِيبُ لَوْحِيَّةٌ'], ['laptop', 'حَاسُوبٌ مَحْمُولٌ']]),
    w(7, 'هٰذَا · هٰذِهِ', 'this (m. · f.)', [['these (people)', 'هٰؤُلَاءِ'], ['these (things)', 'هٰذِهِ']], { tag: 'demonstratives' }),
    w(8, 'الَّذِي · الَّتِي', 'which, who (m. · f.)', [['the tablet which we use', 'الحَاسُوبُ الَّذِي نَسْتَخْدِمُهُ'], ['pl. (people)', 'الَّذِينَ']], { tag: 'relatives' }),
    w(9, 'أَسْتَخْدِمُ … لِلدِّرَاسَةِ', 'I use … for studying', [['he · she', 'يَسْتَخْدِمُ · تَسْتَخْدِمُ'], ['use', 'اسْتِخْدَامٌ']]),
    w(10, 'قَاعِدَةٌ', 'a rule', [['pl.', 'قَوَاعِدُ'], ['forbidden', 'مَمْنُوعٌ'], ['allowed', 'مَسْمُوحٌ']]),
    w(11, 'وَاجِبٌ مَنْزِلِيٌّ', 'homework', [['pl.', 'وَاجِبَاتٌ مَنْزِلِيَّةٌ'], ['submit', 'يُسَلِّمُ']]),
    w(12, 'مِنَصَّةٌ تَعْلِيمِيَّةٌ', 'a learning platform', [['pl.', 'مِنَصَّاتٌ تَعْلِيمِيَّةٌ'], ['upload', 'يَرْفَعُ']]),
  ],
  words1: { eyebrow: 'Language bank · in the classroom (sg. · pl.)', title: 'Board, books, tablets', ar: 'فِي الفَصْلِ', notes: 'LANGUAGE BANK (2 min) — يُوجَدُ + masculine: يُوجَدُ حَاسُوبٌ. تُوجَدُ + feminine OR non-human plural: تُوجَدُ سَبُّورَةٌ ذَكِيَّةٌ · تُوجَدُ كُتُبٌ كَثِيرَةٌ. Negative: لَا يُوجَدُ / لَا تُوجَدُ.' },
  words2: { eyebrow: 'Language bank · pointing and explaining', title: 'This one, which we use for …', ar: 'هٰذَا الَّذِي …', notes: 'LANGUAGE BANK (2 min) — هٰذَا القَلَمُ · هٰذِهِ المِسْطَرَةُ · هٰذِهِ الكُتُبُ (non-human pl. → هٰذِهِ). Relative + returning pronoun: السَّبُّورَةُ الَّتِي نَكْتُبُ عَلَيْهَا · الحَاسُوبُ الَّذِي نَسْتَخْدِمُهُ.' },
  checkCore: 'said what there is in the classroom with yūjadu / tūjadu',
  checkDevelop: 'used a demonstrative and a relative clause with a returning pronoun',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a school stationery shop', title: 'Role play A — Buying school supplies', ar: 'فِي مَكْتَبَةِ القِرْطَاسِيَّةِ', you: 'a student', them: 'the shop assistant',
      tasks: [
        { core: true, ex: 'أَهْلًا! مَاذَا تَحْتَاجُ لِلْمَدْرَسَةِ؟', task: 'Say two things you need.', help: 'أَحْتَاجُ إِلَى … وَ…', model: 'أَحْتَاجُ إِلَى دَفْتَرَيْنِ وَقَلَمٍ أَزْرَقَ.', modelEn: 'I need two exercise books and a blue pen.' },
        { core: true, ex: 'هٰذَا الدَّفْتَرُ كَبِيرٌ، وَهٰذَا صَغِيرٌ.', task: 'Choose one.', help: 'أُرِيدُ هٰذَا … لِأَنَّهُ …', model: 'أُرِيدُ هٰذَا الدَّفْتَرَ الكَبِيرَ، لِأَنَّهُ أَفْضَلُ لِلرِّيَاضِيَّاتِ.', modelEn: 'I want this big exercise book, because it is better for maths.' },
        { core: true, ex: 'هَلْ تَحْتَاجُ إِلَى مِسْطَرَةٍ؟', task: 'Ask about colours.', help: 'نَعَمْ، هَلْ عِنْدَكَ … ؟', model: 'نَعَمْ، هَلْ عِنْدَكَ مِسْطَرَةٌ خَضْرَاءُ؟', modelEn: 'Yes, do you have a green ruler?' },
        { core: true, ex: 'نَعَمْ، تَفَضَّلْ.', task: 'Ask the total price.', help: 'كَمْ …؟', model: 'كَمْ ثَمَنُ كُلِّ هٰذِهِ الأَشْيَاءِ؟', modelEn: 'How much are all these things?' },
        { core: true, unexpected: true, ex: 'مَا مَادَّتُكَ المُفَضَّلَةُ؟', task: 'Answer the unexpected question.', help: 'مَادَّتِي المُفَضَّلَةُ … لِأَنَّ …', model: 'مَادَّتِيَ المُفَضَّلَةُ العُلُومُ، لِأَنَّهَا مُمْتِعَةٌ.', modelEn: 'My favourite subject is science, because it is fun.' },
      ],
      girl: 'تَحْتَاجِينَ · عِنْدَكِ · مَادَّتُكِ',
      notes: 'Core: a dual (daftarayni), hādhā ad-daftar al-kabīr (demonstrative + noun + adjective), mistara khaḍrāʾ (f. colour), hādhihi al-ashyāʾ (non-human pl.).',
    },
    {
      id: 'B', level: 'Core+', setting: 'showing a visitor round', title: 'Role play B — Showing a visitor your classroom', ar: 'جَوْلَةٌ فِي الفَصْلِ', you: 'a student guide', them: 'a visiting parent',
      tasks: [
        { core: true, ex: 'مَا هٰذَا الفَصْلُ؟', task: 'Say what the room is for.', help: 'هٰذَا فَصْلُ …', model: 'هٰذَا فَصْلُ العُلُومِ.', modelEn: 'This is the science classroom.' },
        { core: true, ex: 'مَاذَا يُوجَدُ فِيهِ؟', task: 'Name three things.', help: 'يُوجَدُ … وَتُوجَدُ …', model: 'يُوجَدُ فِيهِ مُخْتَبَرٌ صَغِيرٌ، وَتُوجَدُ سَبُّورَةٌ ذَكِيَّةٌ وَحَوَاسِيبُ كَثِيرَةٌ.', modelEn: 'There is a small lab, a smart board and many computers.' },
        { ex: 'وَهٰذِهِ الشَّاشَةُ؟', task: 'Explain with a relative clause.', help: 'هٰذِهِ الشَّاشَةُ الَّتِي …', model: 'هٰذِهِ الشَّاشَةُ الَّتِي يَعْرِضُ عَلَيْهَا المُعَلِّمُ التَّجَارِبَ.', modelEn: 'This is the screen on which the teacher shows the experiments.' },
        { ex: 'هَلْ تَسْتَخْدِمُونَ الهَوَاتِفَ فِي الحِصَّةِ؟', task: 'Explain the rule.', help: 'لَا، … مَمْنُوعَةٌ، لٰكِنْ …', model: 'لَا، الهَوَاتِفُ مَمْنُوعَةٌ، لٰكِنْ نَسْتَخْدِمُ الحَوَاسِيبَ اللَّوْحِيَّةَ أَحْيَانًا.', modelEn: 'No, phones are banned, but we sometimes use tablets.' },
        { unexpected: true, ex: 'هَلْ يُعْجِبُكَ هٰذَا الفَصْلُ؟', task: 'Ask the visitor a question back.', help: 'نَعَمْ، … وَأَنْتَ، هَلْ …؟', model: 'نَعَمْ، كَثِيرًا. وَأَنْتَ، هَلْ عِنْدَكُمْ مُخْتَبَرٌ مِثْلُهُ فِي مَدْرَسَةِ ابْنِكَ؟', modelEn: 'Yes, very much. And you — is there a lab like this at your son’s school?' },
      ],
      girl: 'يُعْجِبُكِ · ابْنِكِ',
      notes: 'Core+: hādhā / hādhihi, yūjadu vs tūjadu, allatī … ʿalayhā (returning pronoun), mamnūʿa (non-human pl. → f.), the CANDIDATE asks back (task 5).',
    },
    {
      id: 'C', level: 'Develop', setting: 'a new student', title: 'Role play C — Helping a new student', ar: 'مُسَاعَدَةُ طَالِبٍ جَدِيدٍ', you: 'a class buddy', them: 'a new student from abroad',
      tasks: [
        { ex: 'كَيْفَ أَعْرِفُ الوَاجِبَاتِ؟', task: 'Explain the platform with a relative clause.', help: 'عَلَى المِنَصَّةِ الَّتِي …', model: 'تَجِدُهَا عَلَى المِنَصَّةِ الَّتِي يَرْفَعُ عَلَيْهَا المُعَلِّمُونَ الوَاجِبَاتِ كُلَّ يَوْمٍ.', modelEn: 'You find it on the platform where the teachers upload homework every day.' },
        { ex: 'وَمَا القَوَاعِدُ المُهِمَّةُ فِي الفَصْلِ؟', task: 'Give two rules (imperatives).', help: 'لَا تَـ… / ارْفَعْ …', model: 'ارْفَعْ يَدَكَ قَبْلَ أَنْ تَتَكَلَّمَ، وَلَا تَأْكُلْ فِي الفَصْلِ.', modelEn: 'Raise your hand before you speak, and don’t eat in class.' },
        { ex: 'كَيْفَ كَانَ يَوْمُكَ الأَوَّلُ هُنَا؟', task: 'Describe your first day (past).', help: 'فِي يَوْمِي الأَوَّلِ …', model: 'فِي يَوْمِي الأَوَّلِ ضِعْتُ فِي المَمَرَّاتِ، لٰكِنَّ طَالِبًا لَطِيفًا سَاعَدَنِي، فَأَصْبَحْنَا صَدِيقَيْنِ.', modelEn: 'On my first day I got lost in the corridors, but a kind student helped me, and we became friends.' },
        { ex: 'هَلِ الحَاسُوبُ أَفْضَلُ مِنَ الدَّفْتَرِ؟', task: 'Compare with two reasons.', help: 'الحَاسُوبُ أَسْرَعُ، لٰكِنَّ الدَّفْتَرَ …', model: 'الحَاسُوبُ أَسْرَعُ وَأَسْهَلُ لِلْبَحْثِ، لٰكِنَّ الدَّفْتَرَ يُسَاعِدُنِي عَلَى التَّذَكُّرِ أَكْثَرَ.', modelEn: 'The computer is faster and easier for research, but the notebook helps me remember more.' },
        { unexpected: true, ex: 'هَلْ سَتُسَاعِدُنِي فِي الرِّيَاضِيَّاتِ؟', task: 'Answer the unexpected question (future).', help: 'طَبْعًا، سَـ…', model: 'طَبْعًا، سَنَدْرُسُ مَعًا فِي المَكْتَبَةِ يَوْمَ الثُّلَاثَاءِ بَعْدَ المَدْرَسَةِ.', modelEn: 'Of course — we’ll study together in the library on Tuesday after school.' },
      ],
      girl: 'تَجِدِينَهَا · ارْفَعِي يَدَكِ · لَا تَأْكُلِي · يَوْمُكِ · سَتُسَاعِدِينَنِي',
      notes: 'Develop: allatī … ʿalayhā, imperatives (irfaʿ, lā taʾkul), a past narrative with fa-, comparatives with lākinna, a future offer.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a student council', title: 'Role play D — Should every student have a tablet?', ar: 'حَاسُوبٌ لَوْحِيٌّ لِكُلِّ طَالِبٍ؟', you: 'a student-council member', them: 'the deputy head',
      tasks: [
        { ex: 'تَقْتَرِحُ أَنْ يَحْصُلَ كُلُّ طَالِبٍ عَلَى حَاسُوبٍ لَوْحِيٍّ. لِمَاذَا؟', task: 'Give two reasons.', help: 'أَوَّلًا … ثَانِيًا …', model: 'أَوَّلًا، لِأَنَّ الكُتُبَ الوَرَقِيَّةَ ثَقِيلَةٌ وَغَالِيَةٌ؛ ثَانِيًا، لِأَنَّ المِنَصَّاتِ الَّتِي نَسْتَخْدِمُهَا تَحْتَاجُ إِلَى جِهَازٍ خَاصٍّ.', modelEn: 'Firstly, paper books are heavy and expensive; secondly, the platforms we use need a personal device.' },
        { ex: 'لٰكِنَّ الطُّلَّابَ سَيَلْعَبُونَ بِهَا!', task: 'Concede and propose a solution.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ بَعْضَهُمْ قَدْ يَلْعَبُ، غَيْرَ أَنَّنَا نَسْتَطِيعُ أَنْ نُغْلِقَ الأَلْعَابَ وَالمَوَاقِعَ غَيْرَ التَّعْلِيمِيَّةِ أَثْنَاءَ الحِصَصِ.', modelEn: 'Some may play, but we can block games and non-educational sites during lessons.' },
        { ex: 'هَلْ جُرِّبَتْ هٰذِهِ الفِكْرَةُ مِنْ قَبْلُ؟', task: 'Give an example with evidence.', help: 'نَعَمْ، فِي … حَيْثُ … فَـ…', model: 'نَعَمْ، فِي مَدْرَسَةِ ابْنِ عَمِّي، حَيْثُ وُزِّعَتِ الأَجْهِزَةُ العَامَ المَاضِي، فَتَحَسَّنَتْ نَتَائِجُ الطُّلَّابِ فِي القِرَاءَةِ.', modelEn: 'Yes, at my cousin’s school, where devices were handed out last year, and reading results improved.' },
        { ex: 'وَمَاذَا عَنِ الطُّلَّابِ الَّذِينَ يُفَضِّلُونَ الوَرَقَ؟', task: 'Give a balanced answer.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، يَجِبُ أَنْ نَحْتَرِمَ اخْتِيَارَهُمْ، وَمِنْ نَاحِيَةٍ أُخْرَى، يَحْتَاجُ الجَمِيعُ إِلَى مَهَارَاتٍ رَقْمِيَّةٍ لِلْمُسْتَقْبَلِ.', modelEn: 'We should respect their choice, but everyone needs digital skills for the future.' },
        { unexpected: true, ex: 'لَوْ رَفَضَتِ الإِدَارَةُ، مَاذَا تَفْعَلُونَ؟', task: 'Answer the unexpected question (conditional).', help: 'لَوْ رَفَضَتْ، لَـ…', model: 'لَوْ رَفَضَتِ الإِدَارَةُ، لَاقْتَرَحْنَا تَجْرِبَةً لِمُدَّةِ فَصْلٍ دِرَاسِيٍّ وَاحِدٍ فِي صَفٍّ وَاحِدٍ، ثُمَّ نُقَارِنُ النَّتَائِجَ.', modelEn: 'If the management refused, we’d suggest a one-term trial in one class, then compare results.' },
      ],
      girl: 'تَقْتَرِحِينَ',
      notes: 'Stretch: awwalan / thāniyan, allatī nastakhdimuhā, a concession, passives (jurribat, wuzziʿat), ḥaythu + fa- result, alladhīna, a balanced view and law … la-.',
      modelFoot: 'Stretch: reasons, a concession with a solution, evidence with passives, a balanced view and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'فَصْلِي', aim: 'one full sentence per question',
      qs: [
        { q: 'صِفْ فَصْلَكَ.', en: 'Describe your classroom.', start: 'فَصْلِي … وَ…', model: 'فَصْلِي كَبِيرٌ وَمُضِيءٌ.', modelEn: 'My classroom is big and bright.' },
        { q: 'مَاذَا يُوجَدُ فِي فَصْلِكَ؟', en: 'What is there in your classroom?', start: 'يُوجَدُ … وَتُوجَدُ …', model: 'يُوجَدُ حَاسُوبٌ، وَتُوجَدُ سَبُّورَةٌ ذَكِيَّةٌ.', modelEn: 'There is a computer and a smart board.' },
        { q: 'مَاذَا فِي حَقِيبَتِكَ؟', en: 'What is in your bag?', start: 'فِي حَقِيبَتِي …', model: 'فِي حَقِيبَتِي كُتُبٌ وَدَفَاتِرُ وَأَقْلَامٌ.', modelEn: 'In my bag there are books, exercise books and pens.' },
        { q: 'هَلْ تَسْتَخْدِمُ الحَاسُوبَ فِي المَدْرَسَةِ؟', en: 'Do you use a computer at school?', start: 'نَعَمْ، أَسْتَخْدِمُهُ لِـ …', model: 'نَعَمْ، أَسْتَخْدِمُهُ لِلْبَحْثِ وَالوَاجِبَاتِ.', modelEn: 'Yes, I use it for research and homework.' },
        { q: 'هَلِ الهَوَاتِفُ مَسْمُوحَةٌ فِي فَصْلِكَ؟', en: 'Are phones allowed in your classroom?', start: 'لَا، الهَوَاتِفُ …', model: 'لَا، الهَوَاتِفُ مَمْنُوعَةٌ فِي الفَصْلِ.', modelEn: 'No, phones are banned in class.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + yūjadu / tūjadu = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'أَدَوَاتُ التَّعَلُّمِ', aim: 'two or three sentences, with a relative clause and a past detail',
      qs: [
        { q: 'مَا الأَدَاةُ الَّتِي لَا تَسْتَطِيعُ أَنْ تَدْرُسَ بِدُونِهَا؟', en: 'Which tool can’t you study without?', start: 'الأَدَاةُ الَّتِي … هِيَ …', model: 'الأَدَاةُ الَّتِي لَا أَسْتَطِيعُ أَنْ أَدْرُسَ بِدُونِهَا هِيَ حَاسُوبِي المَحْمُولُ، لِأَنَّ كُلَّ دُرُوسِي عَلَى الإِنْتَرْنِتِ.', modelEn: 'The tool I can’t study without is my laptop, because all my lessons are online.' },
        { q: 'صِفْ فَصْلَكَ فِي المَدْرَسَةِ الابْتِدَائِيَّةِ.', en: 'Describe your primary classroom.', start: 'كَانَ فَصْلِي … وَكَانَتْ …', model: 'كَانَ فَصْلِي مُلَوَّنًا، وَكَانَتْ عَلَى الجُدْرَانِ رُسُومَاتٌ كَثِيرَةٌ رَسَمْنَاهَا بِأَنْفُسِنَا.', modelEn: 'My classroom was colourful, with lots of drawings we made ourselves on the walls.' },
        { q: 'مَا القَوَاعِدُ فِي فَصْلِكَ؟', en: 'What are the rules in your class?', start: 'يَجِبُ أَنْ … وَمَمْنُوعٌ أَنْ …', model: 'يَجِبُ أَنْ نَصِلَ فِي الوَقْتِ، وَمَمْنُوعٌ أَنْ نَسْتَخْدِمَ الهَوَاتِفَ دُونَ إِذْنٍ.', modelEn: 'We must arrive on time, and it’s forbidden to use phones without permission.' },
        { q: 'هَلْ تُفَضِّلُ الكُتُبَ الوَرَقِيَّةَ أَمِ الإِلِكْتْرُونِيَّةَ؟', en: 'Do you prefer paper or e-books?', start: 'أُفَضِّلُ … لِأَنَّ … لٰكِنَّ …', model: 'أُفَضِّلُ الوَرَقِيَّةَ لِلْقِرَاءَةِ، لِأَنَّهَا أَرْيَحُ لِلْعَيْنَيْنِ، لٰكِنَّ الإِلِكْتْرُونِيَّةَ أَخَفُّ فِي الحَقِيبَةِ.', modelEn: 'Paper for reading — easier on the eyes — but e-books are lighter in the bag.' },
        { q: 'كَيْفَ سَيَكُونُ فَصْلُ المُسْتَقْبَلِ؟', en: 'What will the classroom of the future be like?', start: 'سَيَكُونُ فِيهِ … وَسَـ…', model: 'سَيَكُونُ فِيهِ مُعَلِّمٌ آلِيٌّ يُسَاعِدُ المُعَلِّمَ، وَسَنَدْرُسُ التَّارِيخَ بِالوَاقِعِ الافْتِرَاضِيِّ.', modelEn: 'There’ll be a robot assistant, and we’ll study history in virtual reality.' },
      ],
      foot: 'Develop: two or three sentences — a relative clause, a rule or a comparison, and a past or future detail.',
      modelFoot: 'Relative clause + reason + time frame = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'التِّكْنُولُوجْيَا فِي الفَصْلِ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ تُسَاعِدُ التِّكْنُولُوجْيَا الطُّلَّابَ عَلَى التَّعَلُّمِ؟', en: 'Does technology help students learn?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، تَجْعَلُ الدُّرُوسَ تَفَاعُلِيَّةً وَمُمْتِعَةً، وَمِنْ نَاحِيَةٍ أُخْرَى، قَدْ تُشَتِّتُ الانْتِبَاهَ إِذَا لَمْ تُسْتَخْدَمْ بِحِكْمَةٍ.', modelEn: 'It makes lessons interactive and fun, but may distract if not used wisely.' },
        { q: 'هَلْ يَجِبُ أَنْ تُمْنَعَ الهَوَاتِفُ فِي المَدَارِسِ؟', en: 'Should phones be banned in schools?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهَا تُشَتِّتُ الطُّلَّابَ، غَيْرَ أَنَّ المَنْعَ الكَامِلَ يَحْرِمُهُمْ مِنْ أَدَاةٍ مُفِيدَةٍ لِلْبَحْثِ؛ لِذٰلِكَ أُفَضِّلُ قَوَاعِدَ وَاضِحَةً.', modelEn: 'They distract, but a total ban removes a useful research tool — so I prefer clear rules.' },
        { q: 'مَا الَّذِي يَجْعَلُ الفَصْلَ مَكَانًا جَيِّدًا لِلتَّعَلُّمِ؟', en: 'What makes a classroom a good place to learn?', start: 'أَوَّلًا … بِالإِضَافَةِ إِلَى ذٰلِكَ …', model: 'أَوَّلًا، المُعَلِّمُ الَّذِي يُشَجِّعُ الأَسْئِلَةَ؛ بِالإِضَافَةِ إِلَى ذٰلِكَ، الهُدُوءُ وَالضَّوْءُ الطَّبِيعِيُّ وَالاحْتِرَامُ بَيْنَ الطُّلَّابِ.', modelEn: 'A teacher who encourages questions; also calm, natural light and respect between students.' },
        { q: 'كَيْفَ كَانَ الطُّلَّابُ يَتَعَلَّمُونَ قَبْلَ الإِنْتَرْنِتِ؟', en: 'How did students learn before the internet?', start: 'كَانُوا … أَمَّا نَحْنُ …', model: 'كَانُوا يَبْحَثُونَ فِي المَوْسُوعَاتِ وَيَكْتُبُونَ كُلَّ شَيْءٍ بِأَيْدِيهِمْ، أَمَّا نَحْنُ فَنَجِدُ المَعْلُومَةَ فِي ثَوَانٍ.', modelEn: 'They searched encyclopaedias and wrote everything by hand; we find information in seconds.' },
        { q: 'لَوْ صَمَّمْتَ فَصْلًا مِثَالِيًّا، كَيْفَ يَكُونُ؟', en: 'If you designed an ideal classroom, what would it be like?', start: 'لَوْ صَمَّمْتُهُ، لَجَعَلْتُ …', model: 'لَوْ صَمَّمْتُهُ، لَجَعَلْتُ فِيهِ نَوَافِذَ كَبِيرَةً، وَطَاوِلَاتٍ دَائِرِيَّةً لِلْعَمَلِ الجَمَاعِيِّ، وَزَاوِيَةً هَادِئَةً لِلْقِرَاءَةِ.', modelEn: 'I’d give it big windows, round tables for group work and a quiet reading corner.' },
      ],
      foot: 'Stretch: a balanced view, a concession with li-dhālika, linkers, kānū + present vs ammā … fa-, law … la-.',
      modelFoot: 'Stretch: balance, a passive condition, ṣaḥīḥun anna … ghayra anna, past vs present and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I said what there is in my classroom (yūjadu / tūjadu).' },
    { route: 'core', text: 'I used hādhā / hādhihi correctly.' },
    { route: 'develop', text: 'I used alladhī / allatī with a returning pronoun (nastakhdimuhu).' },
    { route: 'develop', text: 'I described my primary classroom in the past.' },
    { route: 'stretch', text: 'I gave a balanced view, a concession or law … la-.' },
  ],
};
speak.RP[2].tasks[1].help = 'ارْفَعْ … / لَا تَأْكُلْ …';
speak.RP[2].tasks[4].help = 'طَبْعًا، سَنَدْرُسُ مَعًا …';
speak.RP[3].tasks[2].help = 'نَعَمْ، فِي … حَيْثُ وُزِّعَتْ … فَتَحَسَّنَتْ …';
speak.RP[3].tasks[4].help = 'لَوْ رَفَضَتْ، لَاقْتَرَحْنَا …';
speak.CONV[0].qs[3].start = 'نَعَمْ، أَسْتَخْدِمُهُ لِلْبَحْثِ …';
speak.CONV[1].qs[4].start = 'سَيَكُونُ فِيهِ … وَسَنَدْرُسُ …';
speak.CONV[2].qs[3].start = 'كَانُوا … أَمَّا نَحْنُ فَنَجِدُ …';

const Q2_CORE = `مَرْحَبًا يَا رِيمُ،
كَيْفَ حَالُكِ؟ أُرِيدُ أَنْ أَصِفَ لَكِ فَصْلِي الجَدِيدَ. هُوَ فَصْلٌ كَبِيرٌ وَمُضِيءٌ فِي الطَّابِقِ الثَّانِي. فِيهِ تُوجَدُ سَبُّورَةٌ ذَكِيَّةٌ، وَيُوجَدُ حَاسُوبٌ لِكُلِّ طَالِبَيْنِ. عَلَى الجُدْرَانِ خَرَائِطُ وَصُوَرٌ جَمِيلَةٌ. أَمْسِ اسْتَخْدَمْنَا الحَوَاسِيبَ اللَّوْحِيَّةَ فِي حِصَّةِ الجُغْرَافْيَا، وَكَانَ الدَّرْسُ مُمْتِعًا جِدًّا. فِي فَصْلِنَا قَوَاعِدُ: الهَوَاتِفُ مَمْنُوعَةٌ، وَيَجِبُ أَنْ نَرْفَعَ أَيْدِيَنَا. فِي رَأْيِي، هٰذَا الفَصْلُ أَفْضَلُ مِنْ فَصْلِي القَدِيمِ. فِي الأُسْبُوعِ القَادِمِ سَنَزْرَعُ نَبَاتَاتٍ صَغِيرَةً عِنْدَ النَّافِذَةِ.
مَعَ السَّلَامَةِ،
نُورَةُ`;
const Q2_FULL = `عَزِيزَتِي رِيمُ،
وَعَدْتُكِ أَنْ أَصِفَ لَكِ فَصْلِي الجَدِيدَ، وَهَا أَنَا أَفِي بِوَعْدِي! إِنَّهُ فَصْلٌ وَاسِعٌ تُطِلُّ نَوَافِذُهُ عَلَى الحَدِيقَةِ، تُوجَدُ فِيهِ سَبُّورَةٌ ذَكِيَّةٌ يَعْرِضُ عَلَيْهَا المُعَلِّمُ الأَفْلَامَ وَالخَرَائِطَ، وَطَاوِلَاتٌ دَائِرِيَّةٌ نَجْلِسُ حَوْلَهَا فِي مَجْمُوعَاتٍ. وَأَكْثَرُ مَا أَعْجَبَنِي الحَوَاسِيبُ اللَّوْحِيَّةُ الَّتِي اسْتَخْدَمْنَاهَا أَمْسِ لِتَصْمِيمِ خَرِيطَةٍ تَفَاعُلِيَّةٍ لِمَدِينَتِنَا. صَحِيحٌ أَنَّ القَوَاعِدَ هُنَا صَارِمَةٌ، فَالهَوَاتِفُ مَمْنُوعَةٌ تَمَامًا، غَيْرَ أَنَّنِي أَشْعُرُ بِتَرْكِيزٍ أَكْبَرَ مِنْ قَبْلُ. وَإِذَا وَافَقَتِ المُعَلِّمَةُ عَلَى اقْتِرَاحِي، فَسَنُنْشِئُ رُكْنًا صَغِيرًا لِلْقِرَاءَةِ فِي آخِرِ الفَصْلِ، فِيهِ وَسَائِدُ مُلَوَّنَةٌ وَكُتُبٌ عَرَبِيَّةٌ.
بِمَحَبَّةٍ،
نُورَةُ`;
const Q3A_CORE = `أَدْرُسُ فِي فَصْلٍ كَبِيرٍ فِي الطَّابِقِ الأَوَّلِ. فِي فَصْلِي تُوجَدُ سَبُّورَةٌ ذَكِيَّةٌ، وَيُوجَدُ ثَلَاثُونَ مَقْعَدًا، وَنَوَافِذُ كَبِيرَةٌ تُطِلُّ عَلَى المَلْعَبِ. عَلَى الجُدْرَانِ صُوَرٌ وَخَرَائِطُ مُلَوَّنَةٌ. أُحِبُّ فَصْلِي، لِأَنَّهُ مُضِيءٌ وَهَادِئٌ، وَلِأَنَّ أَصْدِقَائِي يَجْلِسُونَ بِجَانِبِي.
أَسْتَخْدِمُ أَدَوَاتٍ كَثِيرَةً لِلدِّرَاسَةِ. فِي حَقِيبَتِي كُتُبٌ وَدَفَاتِرُ وَأَقْلَامٌ. أَسْتَخْدِمُ أَيْضًا الحَاسُوبَ الَّذِي أَعْطَتْنِي إِيَّاهُ المَدْرَسَةُ، لِلْبَحْثِ وَالوَاجِبَاتِ. هٰذَا الحَاسُوبُ مُفِيدٌ جِدًّا، لِأَنَّهُ خَفِيفٌ وَسَرِيعٌ.
فِي المَدْرَسَةِ الابْتِدَائِيَّةِ كَانَ فَصْلِي صَغِيرًا وَمُلَوَّنًا. لَمْ تَكُنْ هُنَاكَ حَوَاسِيبُ، وَكُنَّا نَكْتُبُ كُلَّ شَيْءٍ فِي الدَّفَاتِرِ. كَانَتْ مُعَلِّمَتِي تَقْرَأُ لَنَا قِصَصًا جَمِيلَةً كُلَّ يَوْمٍ، وَكُنْتُ أَنْتَظِرُ ذٰلِكَ الوَقْتَ بِشَوْقٍ.
فِي رَأْيِي، التِّكْنُولُوجْيَا مُفِيدَةٌ فِي الفَصْلِ، لٰكِنَّ الكُتُبَ مُهِمَّةٌ أَيْضًا. فِي المُسْتَقْبَلِ سَأَشْتَرِي حَاسُوبًا لَوْحِيًّا جَدِيدًا، وَسَأَسْتَخْدِمُهُ لِتَعَلُّمِ اللُّغَةِ العَرَبِيَّةِ فِي البَيْتِ.`;
const Q3A_FULL = `لَمْ يَعُدِ الفَصْلُ الدِّرَاسِيُّ أَرْبَعَةَ جُدْرَانٍ وَسَبُّورَةً سَوْدَاءَ؛ فَفَصْلِي اليَوْمَ أَشْبَهُ بِمُخْتَبَرٍ صَغِيرٍ تُوجَدُ فِيهِ سَبُّورَةٌ ذَكِيَّةٌ، وَحَوَاسِيبُ لَوْحِيَّةٌ، وَطَاوِلَاتٌ دَائِرِيَّةٌ نَعْمَلُ حَوْلَهَا فِي مَجْمُوعَاتٍ، وَرُكْنٌ لِلْقِرَاءَةِ يَمْتَلِئُ بِالكُتُبِ وَالمَجَلَّاتِ.
وَلَعَلَّ أَهَمَّ أَدَاةٍ عِنْدِي هِيَ الحَاسُوبُ المَحْمُولُ الَّذِي أَحْضُرُ بِهِ دُرُوسِي، لِأَنَّنِي أَدْرُسُ بَعْضَ المَوَادِّ فِي مَدْرَسَةٍ إِلِكْتْرُونِيَّةٍ؛ فَعَلَيْهِ أُشَارِكُ فِي النِّقَاشِ، وَأُسَلِّمُ الوَاجِبَاتِ، وَأُرَاجِعُ التَّسْجِيلَاتِ الَّتِي يَرْفَعُهَا المُعَلِّمُونَ بَعْدَ كُلِّ حِصَّةٍ.
وَمَعَ ذٰلِكَ، أَتَذَكَّرُ بِحَنِينٍ فَصْلِي فِي المَدْرَسَةِ الابْتِدَائِيَّةِ؛ فَقَدْ كَانَتْ جُدْرَانُهُ مُغَطَّاةً بِرُسُومَاتِنَا، وَكَانَتِ المُعَلِّمَةُ تُوَزِّعُ عَلَيْنَا بِطَاقَاتٍ مُلَوَّنَةً نَصْنَعُ بِهَا القِصَصَ. لَمْ تَكُنْ هُنَاكَ شَاشَاتٌ، لٰكِنَّنَا تَعَلَّمْنَا الكَثِيرَ، لِأَنَّ الخَيَالَ كَانَ أَدَاتَنَا الأُولَى.
صَحِيحٌ أَنَّ التِّكْنُولُوجْيَا جَعَلَتِ التَّعَلُّمَ أَسْرَعَ وَأَمْتَعَ، غَيْرَ أَنَّ الأَدَاةَ وَحْدَهَا لَا تَصْنَعُ طَالِبًا نَاجِحًا. وَلَوْ جَمَعَتْ كُلُّ الفُصُولِ بَيْنَ الحَاسُوبِ وَالكِتَابِ وَالحِوَارِ، لَحَصَلْنَا عَلَى أَفْضَلِ مَا فِي العَالَمَيْنِ: سُرْعَةِ التِّكْنُولُوجْيَا، وَعُمْقِ القِرَاءَةِ، وَدِفْءِ النِّقَاشِ.`;
const Q3B_FULL = `تَتَسَابَقُ المَدَارِسُ اليَوْمَ لِتَزْوِيدِ فُصُولِهَا بِأَحْدَثِ الأَجْهِزَةِ، حَتَّى أَصْبَحَ الحَاسُوبُ اللَّوْحِيُّ فِي بَعْضِهَا أَهَمَّ مِنَ الكِتَابِ. فَهَلْ تُحَسِّنُ هٰذِهِ الأَجْهِزَةُ التَّعَلُّمَ حَقًّا، أَمْ أَنَّهَا مُجَرَّدُ مَظْهَرٍ حَدِيثٍ؟
مِنْ نَاحِيَةٍ، تَجْعَلُ التِّكْنُولُوجْيَا الدُّرُوسَ تَفَاعُلِيَّةً، وَتُتِيحُ لِكُلِّ طَالِبٍ أَنْ يَتَعَلَّمَ بِسُرْعَتِهِ الخَاصَّةِ، مِمَّا يُسَاعِدُ الضُّعَفَاءَ وَالمُتَفَوِّقِينَ مَعًا. وَمِنْ نَاحِيَةٍ أُخْرَى، تُشِيرُ دِرَاسَاتٌ حَدِيثَةٌ كَثِيرَةٌ إِلَى أَنَّ القِرَاءَةَ عَلَى الشَّاشَةِ أَقَلُّ تَرْكِيزًا مِنَ القِرَاءَةِ عَلَى الوَرَقِ، فَضْلًا عَنْ أَضْرَارِ الشَّاشَاتِ عَلَى العُيُونِ وَالنَّوْمِ.
وَقَدْ لَاحَظْتُ ذٰلِكَ فِي تَجْرِبَتِي؛ فَعِنْدَمَا حَصَلَ صَفُّنَا عَلَى حَوَاسِيبَ لَوْحِيَّةٍ فِي العَامِ المَاضِي، تَحَسَّنَتْ دَرَجَاتُنَا فِي الرِّيَاضِيَّاتِ بِفَضْلِ التَّطْبِيقَاتِ التَّفَاعُلِيَّةِ، بَيْنَمَا تَرَاجَعَ اهْتِمَامُ كَثِيرٍ مِنْ زُمَلَائِي بِقِرَاءَةِ الرِّوَايَاتِ، وَأَصْبَحُوا يَكْتَفُونَ بِالمُلَخَّصَاتِ القَصِيرَةِ.
صَحِيحٌ أَنَّ المُسْتَقْبَلَ رَقْمِيٌّ بِلَا شَكٍّ، غَيْرَ أَنَّ الجِهَازَ أَدَاةٌ، لَا مُعَلِّمٌ. وَإِذَا اسْتُخْدِمَتِ التِّكْنُولُوجْيَا بِتَوَازُنٍ وَتَحْتَ إِشْرَافِ مُعَلِّمِينَ مُدَرَّبِينَ، فَسَتُصْبِحُ الفُصُولُ أَمَاكِنَ يَتَعَلَّمُ فِيهَا الجَمِيعُ بِشَغَفٍ وَثِقَةٍ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a school equipment-loan form, write an email describing your new classroom, and write an extended piece about your classroom and learning tools or about technology in classrooms.',
  lift: [
    { ar: 'سَبُّورَةٌ ذَكِيَّةٌ يَعْرِضُ عَلَيْهَا المُعَلِّمُ الأَفْلَامَ', en: 'a smart board on which the teacher shows films' },
    { ar: 'الحَوَاسِيبُ اللَّوْحِيَّةُ الَّتِي اسْتَخْدَمْنَاهَا أَمْسِ', en: 'the tablets we used yesterday' },
    { ar: 'هٰذَا الفَصْلُ أَفْضَلُ مِنْ فَصْلِي القَدِيمِ', en: 'this classroom is better than my old one' },
  ],
  checkTip: 'Check: yūjadu + m. / tūjadu + f. or non-human pl.; hādhā + m., hādhihi + f. or non-human pl.; after alladhī / allatī add a returning pronoun when the noun is the object (al-ḥāsūb alladhī astakhdimuhu).',
  FORM: {
    title: 'Equipment-loan form', ar: 'اسْتِمَارَةُ اسْتِعَارَةِ جِهَازٍ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'نُورَةُ سَعِيدٌ', modelEn: 'Noura Saeed' },
      { core: true, ar: 'الصَّفُّ', en: 'Class', model: 'العَاشِرُ (ب)', modelEn: '10B' },
      { core: true, ar: 'الجِهَازُ المَطْلُوبُ', en: 'Device requested', model: 'حَاسُوبٌ لَوْحِيٌّ', modelEn: 'a tablet' },
      { core: true, ar: 'المَادَّةُ', en: 'Subject', model: 'الجُغْرَافْيَا', modelEn: 'geography' },
      { core: true, ar: 'تَارِيخُ الاسْتِعَارَةِ', en: 'Loan date', model: '١٠ أُكْتُوبَر', modelEn: '10 October' },
      { core: true, ar: 'تَارِيخُ الإِرْجَاعِ', en: 'Return date', model: '١٧ أُكْتُوبَر', modelEn: '17 October' },
      { ar: 'أَدَوَاتٌ إِضَافِيَّةٌ', en: 'Extra equipment', model: 'سَمَّاعَاتٌ وَشَاحِنٌ', modelEn: 'headphones and a charger' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تَحْتَاجُ إِلَى الجِهَازِ؟', en: 'ONE sentence: why you need the device', model: 'أَحْتَاجُ إِلَيْهِ لِمَشْرُوعٍ يَطْلُبُ مِنَّا أَنْ نُصَمِّمَ خَرِيطَةً تَفَاعُلِيَّةً.', modelEn: 'I need it for a project that asks us to design an interactive map.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with a relative clause (no alladhī after an indefinite noun).',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 3: ḥāsūbun lawḥiyy (nisba). Box 8: mashrūʿin yaṭlubu … — after an indefinite noun the relative has no alladhī.',
  },
  Q2: {
    short: 'an email about your new classroom', title: 'Question 2: my new classroom', ar: 'فَصْلِي الجَدِيدُ',
    task: 'Write an email in Arabic to a friend describing your new classroom, of about 80–90 words. You must include: • what the classroom is like and what there is in it • a lesson where you used a learning tool • the classroom rules and your opinion • a plan for the classroom next week.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'yūjadu / tūjadu and a demonstrative.', 'A past AND a future sentence.', 'About 80–90 words.'],
    phrases: [['فِيهِ تُوجَدُ … وَيُوجَدُ …', 'in it there is … and …'], ['أَمْسِ اسْتَخْدَمْنَا … فِي حِصَّةِ …', 'yesterday we used … in the … lesson'], ['الهَوَاتِفُ مَمْنُوعَةٌ، وَيَجِبُ أَنْ …', 'phones are banned, and we must …'], ['فِي الأُسْبُوعِ القَادِمِ سَنَزْرَعُ …', 'next week we will plant …']],
    rubric: [
      ['task', 'صِفِي فَصْلَكِ الجَدِيدَ لِصَدِيقَتِكِ فِي رِسَالَةٍ (٨٠–٩٠ كَلِمَةً).', 'Describe your new classroom to a friend (80–90 words).'],
      ['1', 'كَيْفَ الفَصْلُ؟ وَمَاذَا يُوجَدُ فِيهِ؟', 'What the classroom is like and what is in it'],
      ['2', 'صِفِي دَرْسًا اسْتَخْدَمْتِ فِيهِ أَدَاةً لِلتَّعَلُّمِ.', 'A lesson where you used a learning tool'],
      ['3', 'مَا القَوَاعِدُ؟ وَمَا رَأْيُكِ؟', 'The rules and your opinion'],
      ['4', 'مَاذَا سَتَفْعَلُونَ فِي الفَصْلِ الأُسْبُوعَ القَادِمَ؟', 'A plan for next week'],
    ],
    qwords: 'كَيْفَ (what … like) · مَاذَا يُوجَدُ (what is there) · اسْتَخْدَمْتِ (you used — PAST) · سَتَفْعَلُونَ (you will do — FUTURE)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكِ؟', 'Hello …, how are you?'],
      ['1', 'فَصْلِي الجَدِيدُ ______ . فِيهِ تُوجَدُ ______ ، وَيُوجَدُ ______ .', 'My new classroom is … In it there is …, and …'],
      ['2', 'أَمْسِ اسْتَخْدَمْنَا ______ فِي حِصَّةِ ______ ، وَكَانَ الدَّرْسُ ______ .', 'Yesterday we used … in the … lesson, and the lesson was …'],
      ['3', 'الهَوَاتِفُ مَمْنُوعَةٌ، وَيَجِبُ أَنْ ______ . فِي رَأْيِي ______ .', 'Phones are banned, and we must … In my opinion …'],
      ['4', 'فِي الأُسْبُوعِ القَادِمِ سَنَزْرَعُ / سَنَصْنَعُ ______ .', 'Next week we will plant / make …'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Reem, how are you? I want to describe my new classroom. It is big and bright, on the second floor. There is a smart board and a computer for every two students. On the walls are maps and lovely pictures. Yesterday we used tablets in geography, and the lesson was really fun. Our class has rules: phones are banned and we must raise our hands. In my opinion this classroom is better than my old one. Next week we’ll plant small plants by the window. Goodbye, Noura.”',
      find: ['تُوجَدُ سَبُّورَةٌ ذَكِيَّةٌ', 'اسْتَخْدَمْنَا الحَوَاسِيبَ', 'الهَوَاتِفُ مَمْنُوعَةٌ', 'هٰذَا الفَصْلُ أَفْضَلُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Reem, I promised to describe my new classroom, and here I am keeping my promise! It is spacious, its windows overlooking the garden, with a smart board on which the teacher shows films and maps, and round tables we sit at in groups. What I liked most were the tablets we used yesterday to design an interactive map of our town. The rules here are strict — phones are completely banned — but I feel more focused than before. If the teacher agrees to my suggestion, we’ll set up a small reading corner at the back, with colourful cushions and Arabic books. With love, Noura.”',
      find: ['تُطِلُّ نَوَافِذُهُ', 'يَعْرِضُ عَلَيْهَا', 'الَّتِي اسْتَخْدَمْنَاهَا', 'إِذَا وَافَقَتْ … فَسَنُنْشِئُ'],
    },
  },
  Q3: {
    a: { title: 'فَصْلِي وَأَدَوَاتُ التَّعَلُّمِ', en: 'My classroom and learning tools', bullets: 'وَصْفُ فَصْلِكَ · الأَدَوَاتُ الَّتِي تَسْتَخْدِمُهَا · فَصْلُكَ فِي المَاضِي · رَأْيُكَ وَخِطَطُكَ', bulletsEn: 'Describing your classroom · the tools you use · your classroom in the past · your opinion and plans' },
    b: { title: 'هَلْ تُحَسِّنُ الأَجْهِزَةُ التَّعَلُّمَ؟', en: 'Do devices improve learning?', bullets: 'التِّكْنُولُوجْيَا فِي الفُصُولِ · الإِيجَابِيَّاتُ وَالسَّلْبِيَّاتُ · تَجْرِبَتُكَ · رَأْيُكَ', bulletsEn: 'Technology in classrooms · positives and negatives · your experience · your opinion' },
    plan: [
      'Your classroom — fī faṣlī tūjadu …, wa-yūjadu …; nawāfidhu kabīra (non-human pl.).',
      'Your tools — astakhdimu … lil-baḥth; al-ḥāsūb alladhī aʿṭatnī iyyāhu al-madrasa.',
      'Primary classroom — kāna faṣlī …, lam takun hunāka …, kunnā naktubu …',
      'Opinion + future — at-tiknūlūjyā mufīda lākinna …, sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'فِي فَصْلِي تُوجَدُ سَبُّورَةٌ ذَكِيَّةٌ، وَيُوجَدُ ثَلَاثُونَ مَقْعَدًا.', en: 'present: in my classroom there is a smart board and thirty seats.' },
      { ar: 'لَمْ تَكُنْ هُنَاكَ حَوَاسِيبُ، وَكُنَّا نَكْتُبُ فِي الدَّفَاتِرِ.', en: 'past: there were no computers, and we wrote in exercise books.' },
      { ar: 'سَأَشْتَرِي حَاسُوبًا لَوْحِيًّا جَدِيدًا.', en: 'future: I will buy a new tablet.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'My classroom is big, on the first floor: a smart board, thirty seats, big windows over the playground, colourful maps; I love it because it is bright and quiet, and my friends sit next to me → I use many tools: books, exercise books, pens, and the laptop the school gave me for research and homework — light and fast → in primary my classroom was small and colourful; no computers, we wrote everything in exercise books, and my teacher read us stories daily, which I looked forward to → technology is useful, but books matter too; I’ll buy a new tablet to learn Arabic at home.', find: ['تُوجَدُ سَبُّورَةٌ ذَكِيَّةٌ', 'الحَاسُوبَ الَّذِي', 'لَمْ تَكُنْ هُنَاكَ', 'سَأَشْتَرِي حَاسُوبًا'], notes: 'Core model: tūjadu / yūjadu with agreement, thalāthūna maqʿadan, alladhī + aʿṭatnī iyyāhu, hādhā al-ḥāsūb, lam takun hunāka, kunnā + present, a future plan.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'A classroom is no longer four walls and a blackboard: mine is more like a small lab, with a smart board, tablets and round tables for group work, and a reading corner full of books and magazines → perhaps my most important tool is the laptop I attend lessons on, as I study some subjects online: on it I join discussions, hand in homework and review the recordings teachers upload after each lesson → yet I remember my primary classroom fondly: walls covered in our drawings, and a teacher handing out coloured cards for making stories; no screens, but we learnt a lot, because imagination was our first tool → technology has made learning faster and more fun, but a tool alone doesn’t make a successful student; “if every classroom combined the computer, the book and conversation, we’d get the best of both worlds: the speed of technology, the depth of reading and the warmth of discussion”.', find: ['لَمْ يَعُدِ', 'الَّذِي أَحْضُرُ بِهِ', 'الَّتِي يَرْفَعُهَا', 'لَوْ جَمَعَتْ … لَحَصَلْنَا'], notes: 'Full-mark model: lam yaʿud, ashbahu bi-, relative clauses with returning pronouns (bihi, yarfaʿuhā), a triple verb list, wa-maʿa dhālika, a passive participle (mughaṭṭātan), a concession and law … la- with a dual (al-ʿālamayn).' },
      { which: 'ب', level: 'Full', subtitle: 'do devices improve learning?', text: Q3B_FULL, en: 'Schools race to equip classrooms with the latest devices, until in some the tablet matters more than the book — do these devices really improve learning, or are they just a modern look? → on one hand, technology makes lessons interactive and lets each student learn at their own pace, helping strugglers and high-flyers alike; on the other, many recent studies suggest reading on screen is less focused than on paper, not to mention screens’ harm to eyes and sleep → I noticed this myself: when our class got tablets last year, maths marks rose thanks to interactive apps, while many classmates lost interest in reading novels, settling for short summaries → the future is undoubtedly digital, but a device is a tool, not a teacher; “if technology is used in balance and under trained teachers, classrooms will become places where everyone learns with passion and confidence”.', find: ['أَمْ أَنَّهَا مُجَرَّدُ', 'مِمَّا يُسَاعِدُ', 'بَيْنَمَا تَرَاجَعَ', 'إِذَا اسْتُخْدِمَتْ … فَسَتُصْبِحُ'], notes: 'Full-mark model for the Stretch title: ḥattā, a rhetorical question, a balanced view with mimmā and research evidence, ʿindamā + bi-faḍli + baynamā, a concession with lā (a tool, not a teacher) and a passive idhā … fa-sa-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; dates and the device are clear.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: yūjadu / tūjadu agree, and a relative clause with a returning pronoun.' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: a balanced view, a concession and a conditional.' },
  ],
};

module.exports = { speak, write };
