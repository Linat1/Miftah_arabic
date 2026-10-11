'use strict';
/* Exam-practice data · TB-L05 · Furniture, Furnishings and Appliances (iḍāfa; attached pronouns; relative clauses). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'B', n: 5, short: 'Furniture and Appliances', arShort: 'الأَثَاثُ وَالأَجْهِزَةُ', fileTitle: 'Furniture_Furnishings_and_Appliances', title: 'Furniture, Furnishings and Appliances', ar: 'الأَثَاثُ وَالمُفْرُوشَاتُ وَالأَجْهِزَةُ', icon: 'FaCouch', grammar: 'iḍāfa; attached pronouns (-hu, -hā); relative clauses' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: say where furniture is, what appliances are used for, what is broken or needs changing — using iḍāfa, attached pronouns and alladhī / allatī.',
  words: [
    w(1, 'سَرِيرٌ', 'a bed', [['sg.', 'سَرِيرٌ'], ['pl.', 'أَسِرَّةٌ'], ['my', 'سَرِيرِي']]),
    w(2, 'خِزَانَةُ المَلَابِسِ', 'a wardrobe (clothes cupboard)', [['pl.', 'خِزَانَاتٌ'], ['its', 'بَابُهَا']], { tag: 'iḍāfa' }),
    w(3, 'مَكْتَبٌ · كُرْسِيٌّ', 'a desk · a chair', [['pl.', 'مَكَاتِبُ · كَرَاسِيُّ']]),
    w(4, 'رَفٌّ', 'a shelf', [['sg.', 'رَفٌّ'], ['pl.', 'رُفُوفٌ']]),
    w(5, 'سَجَّادَةٌ · سِتَارَةٌ', 'a rug · a curtain', [['pl.', 'سَجَّادٌ · سَتَائِرُ']]),
    w(6, 'ثَلَّاجَةٌ', 'a fridge', [['sg.', 'ثَلَّاجَةٌ'], ['pl.', 'ثَلَّاجَاتٌ']]),
    w(7, 'غَسَّالَةٌ', 'a washing machine', [['sg.', 'غَسَّالَةٌ'], ['pl.', 'غَسَّالَاتٌ']]),
    w(8, 'فُرْنٌ', 'an oven', [['sg.', 'فُرْنٌ'], ['pl.', 'أَفْرَانٌ']]),
    w(9, 'نَسْتَعْمِلُهُ لِـ …', 'we use it for … (m.)', [['f.', 'نَسْتَعْمِلُهَا'], ['I', 'أَسْتَعْمِلُهُ']], { tag: 'attached pronoun' }),
    w(10, 'مُعَطَّلٌ', 'broken, not working', [['m.', 'مُعَطَّلٌ'], ['f.', 'مُعَطَّلَةٌ'], ['pl.', 'مُعَطَّلَةٌ']], { tag: 'm. · f. · non-hum. pl.' }),
    w(11, 'قَدِيمٌ · جَدِيدٌ', 'old · new', [['f.', 'قَدِيمَةٌ · جَدِيدَةٌ'], ['pl.', 'قُدَامَى · جُدُدٌ']]),
    w(12, 'الَّذِي · الَّتِي', 'which (m. · f.)', [['m.', 'المَكْتَبُ الَّذِي …'], ['f.', 'الخِزَانَةُ الَّتِي …']], { tag: 'relative clauses' }),
  ],
  words1: { eyebrow: 'Language bank · furniture and furnishings (sg. · pl.)', title: 'What is in your room?', ar: 'مَاذَا فِي غُرْفَتِكَ؟', notes: 'LANGUAGE BANK (2 min) — iḍāfa: خِزَانَةُ المَلَابِسِ · غُرْفَةُ النَّوْمِ · بَابُ الثَّلَّاجَةِ — the first word has no al- and no tanwīn. Broken plurals: أَسِرَّةٌ · رُفُوفٌ · سَتَائِرُ.' },
  words2: { eyebrow: 'Language bank · appliances, “it” and “which”', title: 'What do we use it for?', ar: 'لِمَاذَا نَسْتَعْمِلُهُ؟', notes: 'LANGUAGE BANK (2 min) — the pronoun matches the noun: الفُرْنُ → نَسْتَعْمِلُهُ · الثَّلَّاجَةُ → نَسْتَعْمِلُهَا. Relative: الغَسَّالَةُ الَّتِي اشْتَرَيْنَاهَا مُعَطَّلَةٌ.' },
  checkCore: 'named furniture and said where it is, with the right gender',
  checkDevelop: 'used an attached pronoun (-hu / -hā) or alladhī / allatī, and gave a reason',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'in a furniture shop', title: 'Role play A — Buying a desk', ar: 'فِي مَحَلِّ الأَثَاثِ', you: 'a customer', them: 'the shop assistant',
      tasks: [
        { core: true, ex: 'أَهْلًا، مَاذَا تُرِيدُ؟', task: 'Say what furniture you want.', help: 'أُرِيدُ … لِغُرْفَتِي', model: 'أُرِيدُ مَكْتَبًا وَكُرْسِيًّا لِغُرْفَتِي، مِنْ فَضْلِكَ.', modelEn: 'I would like a desk and a chair for my room, please.' },
        { core: true, ex: 'أَيَّ لَوْنٍ تُفَضِّلُ؟', task: 'Say which colour and why.', help: 'أُفَضِّلُ … لِأَنَّ …', model: 'أُفَضِّلُ اللَّوْنَ الأَبْيَضَ، لِأَنَّ غُرْفَتِي صَغِيرَةٌ.', modelEn: 'I prefer white, because my room is small.' },
        { core: true, ex: 'هٰذَا المَكْتَبُ بِمِئَةِ جُنَيْهٍ.', task: 'Say it is too expensive and ask for a cheaper one.', help: 'هٰذَا غَالٍ، هَلْ عِنْدَكُمْ …؟', model: 'هٰذَا غَالٍ قَلِيلًا، هَلْ عِنْدَكُمْ مَكْتَبٌ أَرْخَصُ؟', modelEn: 'That is a bit expensive; do you have a cheaper desk?' },
        { core: true, ex: 'هٰذَا بِسِتِّينَ جُنَيْهًا، وَفِيهِ ثَلَاثَةُ أَدْرَاجٍ.', task: 'Accept it and say where you will put it.', help: 'سَآخُذُهُ … سَأَضَعُهُ …', model: 'مُمْتَازٌ، سَآخُذُهُ، وَسَأَضَعُهُ بِجَانِبِ النَّافِذَةِ.', modelEn: 'Excellent, I’ll take it, and I’ll put it next to the window.' },
        { core: true, unexpected: true, ex: 'هَلْ تُرِيدُ أَنْ نُوَصِّلَهُ إِلَى بَيْتِكَ؟', task: 'Answer the unexpected question.', help: 'نَعَمْ، … يَوْمَ …', model: 'نَعَمْ، مِنْ فَضْلِكَ، يَوْمَ السَّبْتِ فِي الصَّبَاحِ.', modelEn: 'Yes please, on Saturday morning.' },
      ],
      girl: 'تُرِيدِينَ · تُفَضِّلِينَ · بَيْتِكِ',
      notes: 'Core: object pronoun -hu for the desk (saʾākhudhuhu, saʾaḍaʿuhu), a comparative (arkhaṣ), colours, prepositions.',
    },
    {
      id: 'B', level: 'Core+', setting: 'calling the landlord', title: 'Role play B — Something is broken in the flat', ar: 'جِهَازٌ مُعَطَّلٌ', you: 'a tenant', them: 'the landlord',
      tasks: [
        { core: true, ex: 'أَلُو، نَعَمْ؟', task: 'Say which appliance is broken.', help: 'الغَسَّالَةُ / الثَّلَّاجَةُ مُعَطَّلَةٌ', model: 'مَسَاءَ الخَيْرِ، الغَسَّالَةُ فِي شَقَّتِنَا مُعَطَّلَةٌ.', modelEn: 'Good evening, the washing machine in our flat is broken.' },
        { core: true, ex: 'مُنْذُ مَتَى؟', task: 'Say since when.', help: 'مُنْذُ …', model: 'مُنْذُ يَوْمِ الإِثْنَيْنِ، أَيْ مُنْذُ ثَلَاثَةِ أَيَّامٍ.', modelEn: 'Since Monday — three days ago.' },
        { ex: 'مَا المُشْكِلَةُ بِالضَّبْطِ؟', task: 'Describe the problem.', help: 'عِنْدَمَا … لَا …', model: 'عِنْدَمَا نُشَغِّلُهَا، يَخْرُجُ المَاءُ عَلَى الأَرْضِ، وَلَا تَغْسِلُ المَلَابِسَ.', modelEn: 'When we switch it on, water comes out onto the floor, and it doesn’t wash the clothes.' },
        { ex: 'سَأُرْسِلُ فَنِّيًّا.', task: 'ASK when he will come.', help: 'مَتَى …؟', model: 'شُكْرًا، وَمَتَى سَيَأْتِي الفَنِّيُّ؟ لِأَنَّنَا نَحْتَاجُهَا كُلَّ يَوْمٍ.', modelEn: 'Thank you — when will the technician come? Because we need it every day.' },
        { unexpected: true, ex: 'هَلْ هُنَاكَ مُشْكِلَةٌ أُخْرَى؟', task: 'Answer the unexpected question.', help: 'نَعَمْ، … أَيْضًا …', model: 'نَعَمْ، بَابُ الثَّلَّاجَةِ لَا يُغْلَقُ جَيِّدًا أَيْضًا.', modelEn: 'Yes, the fridge door doesn’t close properly either.' },
      ],
      girl: '(the landlord may be a woman: أَلُو، نَعَمْ؟ · سَأُرْسِلُ فَنِّيًّا — same words)',
      notes: 'Task 3: the pronoun -hā for al-ghassāla (nushagghiluhā). Task 4: the CANDIDATE asks. Task 5: iḍāfa (bābu th-thallāja).',
    },
    {
      id: 'C', level: 'Develop', setting: 'redecorating', title: 'Role play C — Redesigning your bedroom', ar: 'غُرْفَتِي الجَدِيدَةُ', you: 'a teenager', them: 'your parent',
      tasks: [
        { ex: 'تُرِيدُ أَنْ تُغَيِّرَ غُرْفَتَكَ؟ لِمَاذَا؟', task: 'Give a reason for the change.', help: 'لِأَنَّ الأَثَاثَ … وَ…', model: 'لِأَنَّ الأَثَاثَ قَدِيمٌ، وَالسَّرِيرُ صَغِيرٌ عَلَيَّ الآنَ.', modelEn: 'Because the furniture is old, and the bed is too small for me now.' },
        { ex: 'مَاذَا تُرِيدُ أَنْ تُغَيِّرَ؟', task: 'Say two things to change and where they will go.', help: 'أُرِيدُ … وَأَنْ أَضَعَ … بِجَانِبِ …', model: 'أُرِيدُ سَرِيرًا أَكْبَرَ، وَأَنْ أَضَعَ رُفُوفًا لِلْكُتُبِ فَوْقَ المَكْتَبِ.', modelEn: 'I want a bigger bed, and to put bookshelves above the desk.' },
        { ex: 'وَالخِزَانَةُ القَدِيمَةُ؟', task: 'Say what to do with it.', help: 'نُعْطِيهَا لِـ … لِأَنَّهَا …', model: 'نُعْطِيهَا لِابْنِ عَمِّي، لِأَنَّهَا مَا زَالَتْ جَيِّدَةً وَهُوَ يَحْتَاجُهَا.', modelEn: 'We give it to my cousin, because it is still good and he needs it.' },
        { ex: 'لٰكِنَّ المِيزَانِيَّةَ صَغِيرَةٌ!', task: 'Suggest a cheaper solution.', help: 'مَا رَأْيُكَ أَنْ …؟', model: 'مَا رَأْيُكَ أَنْ نَصْبُغَ المَكْتَبَ القَدِيمَ بَدَلًا مِنْ أَنْ نَشْتَرِيَ مَكْتَبًا جَدِيدًا؟', modelEn: 'How about painting the old desk instead of buying a new one?' },
        { unexpected: true, ex: 'مَنْ سَيُسَاعِدُكَ فِي العَمَلِ؟', task: 'Answer the unexpected question (future).', help: 'سَيُسَاعِدُنِي … وَسَـ…', model: 'سَيُسَاعِدُنِي أَخِي يَوْمَ السَّبْتِ، وَسَنُنْهِي كُلَّ شَيْءٍ قَبْلَ المَسَاءِ.', modelEn: 'My brother will help me on Saturday, and we’ll finish everything before evening.' },
      ],
      girl: 'تُرِيدِينَ أَنْ تُغَيِّرِي غُرْفَتَكِ · سَيُسَاعِدُكِ — نُعْطِيهَا لِبِنْتِ عَمِّي',
      notes: 'Develop: reasons, an + subjunctive, the pronoun -hā for the wardrobe, mā zālat, badalan min an, a future plan.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a tech show', title: 'Role play D — The smart home', ar: 'البَيْتُ الذَّكِيُّ', you: 'a young visitor', them: 'a technology presenter',
      tasks: [
        { ex: 'مَا الجِهَازُ الَّذِي لَا تَسْتَطِيعُ أَنْ تَعِيشَ بِدُونِهِ؟', task: 'Name an appliance and explain with a relative clause.', help: 'الجِهَازُ الَّذِي … هُوَ … لِأَنَّهُ …', model: 'الجِهَازُ الَّذِي لَا أَسْتَطِيعُ أَنْ أَعِيشَ بِدُونِهِ هُوَ الثَّلَّاجَةُ، لِأَنَّهَا تَحْفَظُ الطَّعَامَ طَازَجًا.', modelEn: 'The appliance I can’t live without is the fridge, because it keeps food fresh.' },
        { ex: 'كَيْفَ كَانَتِ البُيُوتُ قَبْلَ هٰذِهِ الأَجْهِزَةِ؟', task: 'Compare past and present.', help: 'كَانَ النَّاسُ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَ النَّاسُ يَغْسِلُونَ المَلَابِسَ بِأَيْدِيهِمْ سَاعَاتٍ، أَمَّا اليَوْمَ فَتَغْسِلُهَا الآلَةُ وَنَحْنُ نَدْرُسُ.', modelEn: 'People used to wash clothes by hand for hours; today the machine does it while we study.' },
        { ex: 'مَا رَأْيُكَ فِي البُيُوتِ الذَّكِيَّةِ؟', task: 'Give an advantage and a risk.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ تُوَفِّرُ الوَقْتَ وَالكَهْرَبَاءَ، وَمِنْ نَاحِيَةٍ أُخْرَى قَدْ يَسْرِقُ المُخْتَرِقُونَ مَعْلُومَاتِنَا.', modelEn: 'On one hand they save time and electricity; on the other, hackers may steal our data.' },
        { ex: 'هَلْ تَجْعَلُنَا الأَجْهِزَةُ كُسَالَى؟', task: 'Concede and give your view.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهَا تَجْعَلُنَا نَتَحَرَّكُ أَقَلَّ، غَيْرَ أَنَّهَا تُعْطِينَا وَقْتًا لِلْقِرَاءَةِ وَالعَائِلَةِ.', modelEn: 'It is true they make us move less, but they give us time for reading and family.' },
        { unexpected: true, ex: 'لَوِ اخْتَرَعْتَ جِهَازًا جَدِيدًا لِلْبَيْتِ، فَمَاذَا يَفْعَلُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوِ اخْتَرَعْتُ …، لَـ…', model: 'لَوِ اخْتَرَعْتُ جِهَازًا، لَجَعَلْتُهُ يُرَتِّبُ غُرْفَتِي وَيَطْوِي مَلَابِسِي وَحْدَهُ!', modelEn: 'If I invented a machine, I would make it tidy my room and fold my clothes by itself!' },
      ],
      girl: 'تَسْتَطِيعِينَ أَنْ تَعِيشِي · رَأْيُكِ · اخْتَرَعْتِ',
      notes: 'Stretch: alladhī + bidūnihi, kāna + present vs ammā … fa-, balanced points, a concession and law … la-.',
      modelFoot: 'Stretch: a relative clause with a pronoun, past vs present, min nāḥiya …, ṣaḥīḥun anna … ghayra anna, law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'أَثَاثُ بَيْتِي', aim: 'one full sentence per question',
      qs: [
        { q: 'مَاذَا يُوجَدُ فِي غُرْفَتِكَ؟', en: 'What is in your room?', start: 'يُوجَدُ … وَ…', model: 'يُوجَدُ سَرِيرٌ وَمَكْتَبٌ وَخِزَانَةُ مَلَابِسَ.', modelEn: 'There is a bed, a desk and a wardrobe.' },
        { q: 'أَيْنَ تَضَعُ كُتُبَكَ؟', en: 'Where do you keep your books?', start: 'أَضَعُهَا عَلَى …', model: 'أَضَعُهَا عَلَى الرَّفِّ فَوْقَ المَكْتَبِ.', modelEn: 'I put them on the shelf above the desk.' },
        { q: 'مَا لَوْنُ غُرْفَتِكَ؟', en: 'What colour is your room?', start: 'غُرْفَتِي … وَالسَّتَائِرُ …', model: 'جُدْرَانُ غُرْفَتِي زَرْقَاءُ، وَالسَّتَائِرُ بَيْضَاءُ.', modelEn: 'My room’s walls are blue, and the curtains are white.' },
        { q: 'مَا الجِهَازُ الَّذِي تَسْتَعْمِلُهُ كَثِيرًا؟', en: 'Which appliance do you use a lot?', start: 'أَسْتَعْمِلُ … كَثِيرًا لِأَنَّ …', model: 'أَسْتَعْمِلُ المَيْكْرُوِيفَ كَثِيرًا، لِأَنَّهُ سَرِيعٌ.', modelEn: 'I use the microwave a lot, because it is quick.' },
        { q: 'هَلْ تُحِبُّ أَثَاثَ غُرْفَتِكَ؟', en: 'Do you like your bedroom furniture?', start: 'نَعَمْ / لَا، لِأَنَّهُ …', model: 'نَعَمْ، أُحِبُّهُ، لِأَنَّهُ جَدِيدٌ وَمُرِيحٌ.', modelEn: 'Yes, I like it, because it is new and comfortable.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a place or a colour = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'الأَثَاثُ وَالأَجْهِزَةُ', aim: 'two or three sentences, with a reason or a past detail',
      qs: [
        { q: 'صِفْ غُرْفَةَ الجُلُوسِ فِي بَيْتِكُمْ.', en: 'Describe your living room.', start: 'فِي غُرْفَةِ الجُلُوسِ … أَمَامَ … وَعَلَى …', model: 'فِي غُرْفَةِ الجُلُوسِ كَنَبَةٌ كَبِيرَةٌ أَمَامَ التِّلْفَازِ، وَعَلَى الأَرْضِ سَجَّادَةٌ حَمْرَاءُ مِنْ إِيرَانَ.', modelEn: 'In the living room there is a big sofa in front of the TV, and a red Persian rug on the floor.' },
        { q: 'مَا الجِهَازُ الَّذِي تَعَطَّلَ فِي بَيْتِكُمْ مُؤَخَّرًا؟', en: 'Which appliance broke at home recently?', start: 'تَعَطَّلَ … فَـ…', model: 'تَعَطَّلَ الفُرْنُ يَوْمَ العِيدِ، فَطَبَخَتْ أُمِّي فِي بَيْتِ جَارَتِنَا!', modelEn: 'The oven broke on Eid day, so my mum cooked at our neighbour’s house!' },
        { q: 'مَاذَا تُرِيدُ أَنْ تُغَيِّرَ فِي غُرْفَتِكَ؟', en: 'What would you like to change in your room?', start: 'أُرِيدُ أَنْ … لِأَنَّ …', model: 'أُرِيدُ أَنْ أُغَيِّرَ لَوْنَ الجُدْرَانِ، لِأَنَّهُ لَوْنٌ اخْتَارَهُ أَبِي عِنْدَمَا كُنْتُ طِفْلًا.', modelEn: 'I want to change the wall colour, because Dad chose it when I was a child.' },
        { q: 'مَنْ يُرَتِّبُ غُرْفَتَكَ؟', en: 'Who tidies your room?', start: 'أُرَتِّبُهَا … لٰكِنْ …', model: 'أُرَتِّبُهَا بِنَفْسِي كُلَّ يَوْمِ جُمُعَةٍ، لٰكِنَّ أُمِّي تُسَاعِدُنِي أَحْيَانًا.', modelEn: 'I tidy it myself every Friday, but my mum sometimes helps me.' },
        { q: 'مَا الأَثَاثُ الَّذِي سَتَحْتَاجُهُ فِي الجَامِعَةِ؟', en: 'What furniture will you need at university?', start: 'سَأَحْتَاجُ إِلَى … لِأَنَّ …', model: 'سَأَحْتَاجُ إِلَى مَكْتَبٍ كَبِيرٍ وَمِصْبَاحٍ جَيِّدٍ، لِأَنِّي سَأَدْرُسُ كَثِيرًا فِي اللَّيْلِ.', modelEn: 'I will need a big desk and a good lamp, because I will study a lot at night.' },
      ],
      foot: 'Develop: two or three sentences — locations, a past problem, a reason and the future.',
      modelFoot: 'Description + reason + a past detail = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الأَجْهِزَةُ وَالمُجْتَمَعُ', aim: 'a developed answer: opinion, comparison, concession and a conditional',
      qs: [
        { q: 'هَلْ نَشْتَرِي أَجْهِزَةً أَكْثَرَ مِمَّا نَحْتَاجُ؟', en: 'Do we buy more appliances than we need?', start: 'نَعَمْ، فِي رَأْيِي … لِأَنَّ …', model: 'نَعَمْ، فِي رَأْيِي نَشْتَرِي أَجْهِزَةً كَثِيرَةً لَا نَسْتَعْمِلُهَا إِلَّا مَرَّةً، لِأَنَّ الإِعْلَانَاتِ تُقْنِعُنَا بِأَنَّنَا نَحْتَاجُهَا.', modelEn: 'Yes — we buy many gadgets we use only once, because adverts convince us we need them.' },
        { q: 'هَلِ الأَثَاثُ القَدِيمُ أَفْضَلُ مِنَ الجَدِيدِ؟', en: 'Is old furniture better than new?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الأَثَاثَ الجَدِيدَ أَرْخَصُ، غَيْرَ أَنَّ القَدِيمَ مَصْنُوعٌ مِنْ خَشَبٍ قَوِيٍّ يَبْقَى سَنَوَاتٍ طَوِيلَةً.', modelEn: 'It is true new furniture is cheaper, but old furniture is made of strong wood that lasts for years.' },
        { q: 'كَيْفَ نُقَلِّلُ اسْتِهْلَاكَ الكَهْرَبَاءِ فِي البَيْتِ؟', en: 'How can we use less electricity at home?', start: 'يَجِبُ أَنْ … وَأَلَّا …', model: 'يَجِبُ أَنْ نُطْفِئَ الأَجْهِزَةَ الَّتِي لَا نَسْتَعْمِلُهَا، وَأَلَّا نَتْرُكَ الشَّاحِنَ فِي الكَهْرَبَاءِ طُولَ اللَّيْلِ.', modelEn: 'We should switch off appliances we aren’t using, and not leave chargers plugged in all night.' },
        { q: 'كَيْفَ كَانَ بَيْتُ أَجْدَادِكَ مُخْتَلِفًا؟', en: 'How was your grandparents’ home different?', start: 'كَانَ فِي بَيْتِ جَدِّي … أَمَّا عِنْدَنَا فَـ…', model: 'كَانَ فِي بَيْتِ جَدِّي فُرْنٌ مِنَ الطِّينِ وَلَمْ تَكُنْ هُنَاكَ ثَلَّاجَةٌ، أَمَّا عِنْدَنَا فَفِي المَطْبَخِ وَحْدَهُ عَشَرَةُ أَجْهِزَةٍ!', modelEn: 'My grandfather’s house had a clay oven and no fridge; in our kitchen alone there are ten appliances!' },
        { q: 'لَوْ كَانَ عَلَيْكَ أَنْ تَعِيشَ أُسْبُوعًا بِلَا كَهْرَبَاءَ، كَيْفَ تَقْضِيهِ؟', en: 'If you had to live a week without electricity, how would you spend it?', start: 'لَوْ عِشْتُ …، لَـ…', model: 'لَوْ عِشْتُ أُسْبُوعًا بِلَا كَهْرَبَاءَ، لَقَرَأْتُ كُتُبًا كَثِيرَةً، وَلَلَعِبْتُ مَعَ إِخْوَتِي فِي الحَدِيقَةِ.', modelEn: 'If I lived a week without electricity, I would read lots of books and play with my siblings in the garden.' },
      ],
      foot: 'Stretch: lā … illā, a concession, advice with allā, kāna vs ammā … fa- and law … la-.',
      modelFoot: 'Stretch: relative clauses with -hā, ṣaḥīḥun anna … ghayra anna, an + allā, lam takun, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I named furniture and said where it is.' },
    { route: 'core', text: 'I made adjectives and verbs agree with the noun (m. / f.).' },
    { route: 'develop', text: 'I used -hu / -hā for “it” correctly.' },
    { route: 'develop', text: 'I used an iḍāfa and alladhī / allatī.' },
    { route: 'stretch', text: 'I used a concession, ammā … fa- or law … la-.' },
  ],
};
speak.RP[1].tasks[0].help = 'الغَسَّالَةُ مُعَطَّلَةٌ / الثَّلَّاجَةُ مُعَطَّلَةٌ';
speak.RP[2].tasks[2].help = 'نُعْطِيهَا لِابْنِ عَمِّي … لِأَنَّهَا …';
speak.RP[3].tasks[1].help = 'كَانَ النَّاسُ … أَمَّا اليَوْمَ فَتَغْسِلُهَا …';
speak.RP[3].tasks[4].help = 'لَوِ اخْتَرَعْتُ جِهَازًا، لَجَعَلْتُهُ …';
speak.RP[2].tasks[4].help = 'سَيُسَاعِدُنِي … وَسَنُنْهِي …';
speak.words[8] = w(9, 'نَسْتَعْمِلُهُ لِلطَّبْخِ', 'we use it for cooking (m.)', [['f.', 'نَسْتَعْمِلُهَا'], ['I', 'أَسْتَعْمِلُهُ']], { tag: 'attached pronoun' });
speak.CONV[1].qs[1].start = 'تَعَطَّلَ … فَطَبَخَتْ …';
speak.CONV[2].qs[3].start = 'كَانَ فِي بَيْتِ جَدِّي … أَمَّا عِنْدَنَا فَفِي …';
speak.CONV[2].qs[4].start = 'لَوْ عِشْتُ …، لَقَرَأْتُ …';

const Q2_CORE = `مَرْحَبًا يَا هَالَةُ،
كَيْفَ حَالُكِ؟ غَيَّرْتُ أَثَاثَ غُرْفَتِي فِي نِهَايَةِ الأُسْبُوعِ. اشْتَرَيْتُ سَرِيرًا جَدِيدًا وَمَكْتَبًا أَبْيَضَ، وَوَضَعْتُ المَكْتَبَ بِجَانِبِ النَّافِذَةِ. فَوْقَ المَكْتَبِ يُوجَدُ رَفٌّ لِلْكُتُبِ. السَّتَائِرُ الجَدِيدَةُ زَرْقَاءُ، وَأَنَا أُحِبُّهَا كَثِيرًا، لِأَنَّهَا جَمِيلَةٌ. لٰكِنَّ عِنْدَنَا مُشْكِلَةً: الغَسَّالَةُ مُعَطَّلَةٌ مُنْذُ يَوْمَيْنِ، فَغَسَلْنَا المَلَابِسَ بِأَيْدِينَا! غَدًا سَيَأْتِي الفَنِّيُّ لِيُصْلِحَهَا. فِي العُطْلَةِ تَعَالَيْ وَشَاهِدِي غُرْفَتِي!
مَعَ السَّلَامَةِ،
رِيمُ`;
const Q2_FULL = `عَزِيزَتِي هَالَةُ،
تَحِيَّةً طَيِّبَةً، وَبَعْدُ، فَقَدْ قَضَيْتُ نِهَايَةَ الأُسْبُوعِ أُغَيِّرُ أَثَاثَ غُرْفَتِي، الَّتِي لَمْ تَتَغَيَّرْ مُنْذُ كُنْتُ فِي العَاشِرَةِ. اشْتَرَيْتُ سَرِيرًا أَكْبَرَ، وَصَبَغْتُ مَكْتَبِيَ القَدِيمَ بِاللَّوْنِ الأَبْيَضِ بَدَلًا مِنْ أَنْ أَشْتَرِيَ مَكْتَبًا جَدِيدًا، ثُمَّ وَضَعْتُهُ بِجَانِبِ النَّافِذَةِ لِأَدْرُسَ فِي ضَوْءِ الشَّمْسِ. أَمَّا الخِزَانَةُ القَدِيمَةُ فَأَعْطَيْنَاهَا لِبِنْتِ خَالَتِي. لٰكِنَّ فَرْحَتِي لَمْ تَكْتَمِلْ؛ فَالغَسَّالَةُ الَّتِي اشْتَرَيْنَاهَا قَبْلَ سَنَةٍ تَعَطَّلَتْ، وَأَغْرَقَتْ أَرْضَ المَطْبَخِ بِالمَاءِ! سَيَأْتِي الفَنِّيُّ غَدًا، وَإِذَا لَمْ يَسْتَطِعْ أَنْ يُصْلِحَهَا، فَسَنَشْتَرِي وَاحِدَةً جَدِيدَةً. تَعَالَيْ فِي العُطْلَةِ لِتَرَيْ غُرْفَتِي!
مَعَ مَحَبَّتِي،
رِيمُ`;
const Q3A_CORE = `غُرْفَتِي هِيَ أَحَبُّ مَكَانٍ إِلَيَّ فِي البَيْتِ. هِيَ لَيْسَتْ كَبِيرَةً، لٰكِنَّهَا مُرَتَّبَةٌ وَمُرِيحَةٌ. جُدْرَانُهَا خَضْرَاءُ فَاتِحَةٌ، وَسَتَائِرُهَا بَيْضَاءُ. غُرْفَتِي فِي الطَّابِقِ الأَوَّلِ، بِجَانِبِ غُرْفَةِ أُخْتِي.
فِي غُرْفَتِي سَرِيرٌ بِجَانِبِ الجِدَارِ، وَمَكْتَبٌ أَمَامَ النَّافِذَةِ. فَوْقَ المَكْتَبِ رَفَّانِ لِلْكُتُبِ، وَعَلَى الأَرْضِ سَجَّادَةٌ رَمَادِيَّةٌ نَاعِمَةٌ. خِزَانَةُ المَلَابِسِ كَبِيرَةٌ، وَأَضَعُ فِيهَا مَلَابِسِي وَأَحْذِيَتِي. أَسْتَعْمِلُ المَكْتَبَ لِلدِّرَاسَةِ كُلَّ يَوْمٍ، وَأَسْتَعْمِلُ الرُّفُوفَ لِكُتُبِي وَأَلْعَابِي القَدِيمَةِ.
فِي الصَّيْفِ المَاضِي غَيَّرْتُ غُرْفَتِي مَعَ أَبِي. صَبَغْنَا الجُدْرَانَ، وَاشْتَرَيْنَا مِصْبَاحًا جَدِيدًا لِلْمَكْتَبِ. عَمِلْنَا ثَلَاثَةَ أَيَّامٍ، وَكَانَ العَمَلُ مُتْعِبًا، لٰكِنَّهُ كَانَ مُمْتِعًا جِدًّا. أُمِّي قَالَتْ إِنَّ الغُرْفَةَ أَصْبَحَتْ أَجْمَلَ غُرْفَةٍ فِي البَيْتِ!
فِي رَأْيِي، الغُرْفَةُ المُرَتَّبَةُ تُسَاعِدُ عَلَى الدِّرَاسَةِ. فِي المُسْتَقْبَلِ أُرِيدُ أَنْ أَشْتَرِيَ كُرْسِيًّا مُرِيحًا لِلْقِرَاءَةِ، وَسَأَضَعُهُ فِي الزَّاوِيَةِ بِجَانِبِ الرَّفِّ.`;
const Q3A_FULL = `يَقُولُونَ إِنَّ غُرْفَةَ الإِنْسَانِ تَعْكِسُ شَخْصِيَّتَهُ، وَأَظُنُّ أَنَّ غُرْفَتِي تَقُولُ عَنِّي إِنِّي أُحِبُّ الكُتُبَ وَالهُدُوءَ. هِيَ لَيْسَتْ وَاسِعَةً، لٰكِنَّ كُلَّ قِطْعَةِ أَثَاثٍ فِيهَا لَهَا مَكَانُهَا وَقِصَّتُهَا.
أَمَامَ النَّافِذَةِ مَكْتَبٌ خَشَبِيٌّ قَدِيمٌ كَانَ لِجَدِّي، وَقَدْ أَعْطَانِي إِيَّاهُ عِنْدَمَا بَدَأْتُ المَرْحَلَةَ الثَّانَوِيَّةَ. فَوْقَهُ رُفُوفٌ مَلِيئَةٌ بِالكُتُبِ الَّتِي جَمَعْتُهَا مُنْذُ صِغَرِي، أَمَّا السَّرِيرُ فَبِجَانِبِ الجِدَارِ، تَحْتَ صُورَةٍ كَبِيرَةٍ لِمَدِينَةِ القُدْسِ.
فِي العُطْلَةِ المَاضِيَةِ قَرَّرْتُ أَنْ أُجَدِّدَ الغُرْفَةَ دُونَ أَنْ أُنْفِقَ كَثِيرًا؛ فَصَبَغْتُ الجُدْرَانَ بِلَوْنٍ أَزْرَقَ هَادِئٍ، وَصَنَعْتُ مِنْ صَنَادِيقَ خَشَبِيَّةٍ قَدِيمَةٍ رَفًّا جَدِيدًا، وَنَقَلْتُ المَكْتَبَ لِيَصِلَهُ ضَوْءُ الشَّمْسِ فِي الصَّبَاحِ. لَمْ يُكَلِّفْنِي ذٰلِكَ إِلَّا ثَمَنَ الصَّبْغِ، لٰكِنَّهُ أَخَذَ أُسْبُوعًا كَامِلًا مِنَ العَمَلِ.
صَحِيحٌ أَنَّ الأَثَاثَ الجَدِيدَ جَمِيلٌ، غَيْرَ أَنَّ الأَشْيَاءَ القَدِيمَةَ تَحْمِلُ ذِكْرَيَاتٍ لَا تُشْتَرَى. وَعِنْدَمَا أَدْرُسُ فِي الجَامِعَةِ، سَآخُذُ مَكْتَبَ جَدِّي مَعِي، وَلَوْ كَانَ ثَقِيلًا جِدًّا، لَأَخَذْتُ مِنْهُ دُرْجًا وَاحِدًا عَلَى الأَقَلِّ!`;
const Q3B_FULL = `امْتَلَأَتْ بُيُوتُنَا اليَوْمَ بِالأَجْهِزَةِ الكَهْرَبَائِيَّةِ: غَسَّالَاتٌ وَثَلَّاجَاتٌ وَأَفْرَانٌ، وَحَتَّى مَكَانِسُ تَعْمَلُ وَحْدَهَا، وَمَصَابِيحُ نُشَغِّلُهَا بِالهَاتِفِ أَوْ بِالصَّوْتِ. وَهٰذِهِ الأَجْهِزَةُ تُوَفِّرُ عَلَيْنَا سَاعَاتٍ طَوِيلَةً كَانَ أَجْدَادُنَا يَقْضُونَهَا فِي أَعْمَالِ البَيْتِ.
فِي المَاضِي كَانَتْ جَدَّتِي تَغْسِلُ مَلَابِسَ عَشَرَةِ أَشْخَاصٍ بِيَدَيْهَا، وَتَخْبِزُ الخُبْزَ فِي فُرْنٍ مِنَ الطِّينِ كُلَّ صَبَاحٍ، أَمَّا أُمِّي فَتُشَغِّلُ الغَسَّالَةَ بِضَغْطَةِ زِرٍّ، وَتَشْتَرِي الخُبْزَ جَاهِزًا مِنَ المَخْبَزِ، فَيَبْقَى عِنْدَهَا وَقْتٌ لِعَمَلِهَا وَلَنَا.
لٰكِنَّ لِهٰذِهِ الرَّاحَةِ ثَمَنًا. فِي الشِّتَاءِ المَاضِي انْقَطَعَتِ الكَهْرَبَاءُ فِي حَيِّنَا يَوْمَيْنِ، فَتَوَقَّفَ كُلُّ شَيْءٍ فِي البَيْتِ، وَلَمْ نَعْرِفْ كَيْفَ نَطْبُخُ أَوْ نُدَفِّئُ أَنْفُسَنَا. حِينَئِذٍ فَهِمْتُ كَمْ أَصْبَحْنَا نَعْتَمِدُ عَلَى الآلَاتِ، بَيْنَمَا كَانَتْ جَدَّتِي تَضْحَكُ وَتُشْعِلُ النَّارَ لِتَطْبُخَ لَنَا.
صَحِيحٌ أَنَّ الأَجْهِزَةَ الحَدِيثَةَ نِعْمَةٌ، غَيْرَ أَنَّهَا تَسْتَهْلِكُ طَاقَةً كَثِيرَةً، وَتَجْعَلُنَا نَنْسَى مَهَارَاتٍ مُهِمَّةً. وَلَوْ تَعَلَّمَ كُلُّ شَابٍّ بَعْضَ هٰذِهِ المَهَارَاتِ القَدِيمَةِ، لَمَا خَافَ مِنِ انْقِطَاعِ الكَهْرَبَاءِ أَبَدًا، وَلَعَاشَ حَيَاةً أَبْسَطَ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a furniture-delivery form, write an email about changing your room and a broken appliance, and write an extended piece about your room or about appliances in modern life.',
  lift: [
    { ar: 'وَضَعْتُ المَكْتَبَ بِجَانِبِ النَّافِذَةِ', en: 'I put the desk next to the window' },
    { ar: 'الغَسَّالَةُ الَّتِي اشْتَرَيْنَاهَا تَعَطَّلَتْ', en: 'the washing machine we bought has broken' },
    { ar: 'صَبَغْتُهُ بَدَلًا مِنْ أَنْ أَشْتَرِيَ وَاحِدًا جَدِيدًا', en: 'I painted it instead of buying a new one' },
  ],
  checkTip: 'Check: iḍāfa without al- on the first word (khizānatu l-malābis); -hu for masculine things, -hā for feminine (and non-human plurals); allatī after a feminine noun.',
  FORM: {
    title: 'Furniture delivery form', ar: 'اسْتِمَارَةُ تَوْصِيلِ الأَثَاثِ',
    fields: [
      { core: true, ar: 'اسْمُ الزَّبُونِ', en: 'Customer’s name', model: 'رِيمُ يُوسُفُ', modelEn: 'Reem Yusuf' },
      { core: true, ar: 'العُنْوَانُ', en: 'Address', model: '١٤ شَارِعُ الحَدِيقَةِ', modelEn: '14 Park Street' },
      { core: true, ar: 'القِطْعَةُ', en: 'The item', model: 'سَرِيرٌ وَمَكْتَبٌ', modelEn: 'a bed and a desk' },
      { core: true, ar: 'اللَّوْنُ', en: 'Colour', model: 'أَبْيَضُ', modelEn: 'white' },
      { core: true, ar: 'الغُرْفَةُ', en: 'Which room', model: 'غُرْفَةُ النَّوْمِ', modelEn: 'the bedroom' },
      { core: true, ar: 'يَوْمُ التَّوْصِيلِ وَوَقْتُهُ', en: 'Delivery day and time', model: 'السَّبْتُ، العَاشِرَةُ صَبَاحًا', modelEn: 'Saturday, 10 a.m.' },
      { ar: 'فِي أَيِّ طَابِقٍ؟ هَلْ يُوجَدُ مِصْعَدٌ؟', en: 'Which floor? Is there a lift?', model: 'الطَّابِقُ الثَّالِثُ، لَا يُوجَدُ مِصْعَدٌ', modelEn: 'third floor, no lift' },
      { ar: 'جُمْلَةٌ: أَيْنَ سَتَضَعُ المَكْتَبَ؟', en: 'ONE sentence: where you will put the desk', model: 'سَأَضَعُهُ بِجَانِبِ النَّافِذَةِ لِأَنَّ الضَّوْءَ هُنَاكَ جَيِّدٌ.', modelEn: 'I will put it next to the window because the light is good there.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with -hu (saʾaḍaʿuhu).',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 5 is an iḍāfa (ghurfatu n-nawm).',
  },
  Q2: {
    short: 'an email about changing your room', title: 'Question 2: my new room', ar: 'رِسَالَةٌ عَنْ غُرْفَتِي',
    task: 'You have changed the furniture in your room. Write an email in Arabic to your friend of about 80–90 words. You must include: • what furniture you bought or changed • where you put things in the room • a problem with an appliance at home • what will happen next, and an invitation.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Two prepositions and an iḍāfa.', '-hu / -hā for “it”.', 'A past AND a future sentence.'],
    phrases: [['اشْتَرَيْتُ … وَغَيَّرْتُ …', 'I bought … and changed …'], ['وَضَعْتُ … بِجَانِبِ …', 'I put … next to …'], ['… مُعَطَّلَةٌ مُنْذُ …', '… has been broken since …'], ['سَيَأْتِي الفَنِّيُّ لِيُصْلِحَهَا', 'the technician will come to fix it']],
    rubric: [
      ['task', 'غَيَّرْتِ أَثَاثَ غُرْفَتِكِ. اكْتُبِي رِسَالَةً إِلَى صَدِيقَتِكِ (٨٠–٩٠ كَلِمَةً).', 'You changed your room’s furniture: write to your friend (80–90 words).'],
      ['1', 'مَاذَا اشْتَرَيْتِ أَوْ غَيَّرْتِ؟', 'What you bought or changed'],
      ['2', 'أَيْنَ وَضَعْتِ الأَشْيَاءَ فِي الغُرْفَةِ؟', 'Where you put things'],
      ['3', 'مَا المُشْكِلَةُ فِي أَحَدِ أَجْهِزَةِ البَيْتِ؟', 'A problem with an appliance'],
      ['4', 'مَاذَا سَيَحْدُثُ بَعْدَ ذٰلِكَ؟ ادْعِي صَدِيقَتَكِ.', 'What will happen next; invite your friend'],
    ],
    qwords: 'مَاذَا (what) · أَيْنَ (where) · مَا المُشْكِلَةُ (what problem) · ادْعِي (invite — to a girl) — bullets 1–2 are PAST, bullet 4 is FUTURE',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكِ؟', 'Hello …, how are you?'],
      ['1', 'غَيَّرْتُ أَثَاثَ غُرْفَتِي. اشْتَرَيْتُ ______ وَ ______ .', 'I changed my room. I bought … and …'],
      ['2', 'وَضَعْتُ ______ بِجَانِبِ ______ ، وَفَوْقَ ______ يُوجَدُ ______ .', 'I put … next to …, and above … there is …'],
      ['3', 'لٰكِنَّ ______ مُعَطَّلَةٌ مُنْذُ ______ .', 'But the … has been broken since …'],
      ['4', 'غَدًا سَيَأْتِي الفَنِّيُّ. تَعَالَيْ وَشَاهِدِي غُرْفَتِي!', 'Tomorrow the technician will come. Come and see my room!'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Hala, how are you? I changed the furniture in my room at the weekend. I bought a new bed and a white desk, and put the desk next to the window. Above the desk there is a bookshelf. The new curtains are blue, and I love them, because they are beautiful. But we have a problem: the washing machine has been broken for two days, so we washed our clothes by hand! Tomorrow the technician will come to fix it. Come in the holiday and see my room! Goodbye, Reem.”',
      find: ['وَضَعْتُ المَكْتَبَ بِجَانِبِ', 'أُحِبُّهَا', 'مُعَطَّلَةٌ مُنْذُ', 'لِيُصْلِحَهَا'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Hala, greetings. I spent the weekend changing the furniture in my room, which hadn’t changed since I was ten. I bought a bigger bed, and painted my old desk white instead of buying a new one, then put it by the window so I can study in the sunlight. As for the old wardrobe, we gave it to my cousin. But my joy wasn’t complete: the washing machine we bought a year ago broke down and flooded the kitchen floor! The technician comes tomorrow, and if he can’t fix it, we’ll buy a new one. Come in the holiday to see my room! With love, Reem.”',
      find: ['الَّتِي لَمْ تَتَغَيَّرْ', 'بَدَلًا مِنْ أَنْ أَشْتَرِيَ', 'أَمَّا الخِزَانَةُ … فَأَعْطَيْنَاهَا', 'إِذَا لَمْ يَسْتَطِعْ … فَسَنَشْتَرِي'],
    },
  },
  Q3: {
    a: { title: 'غُرْفَتِي', en: 'My room', bullets: 'صِفْ غُرْفَتَكَ وَأَثَاثَهَا · أَيْنَ الأَشْيَاءُ؟ وَلِمَاذَا تَسْتَعْمِلُهَا؟ · تَغْيِيرٌ قُمْتَ بِهِ فِي غُرْفَتِكَ · رَأْيُكَ وَخُطَطُكَ', bulletsEn: 'Describe your room and furniture · where things are; what you use them for · a change you made · your opinion and plans' },
    b: { title: 'الأَجْهِزَةُ الحَدِيثَةُ: رَاحَةٌ أَمْ اعْتِمَادٌ؟', en: 'Modern appliances: comfort or dependence?', bullets: 'الأَجْهِزَةُ فِي بُيُوتِنَا اليَوْمَ · المَاضِي وَالحَاضِرُ · تَجْرِبَةٌ شَخْصِيَّةٌ · رَأْيُكَ وَاقْتِرَاحُكَ', bulletsEn: 'Appliances in our homes today · past and present · a personal experience · your opinion and suggestion' },
    plan: [
      'Describe — size, colours, furniture: iḍāfa (khizānatu l-malābis), laysa … lākinna …',
      'Where + what for — bijānibi, fawqa, amāma; asta‘miluhu li- …; Stretch: ammā … fa-.',
      'Past — a change: ṣabaghtu, ishtaraytu, naqaltu …; dūna an …',
      'Opinion + future — fī raʾyī …, sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'فَوْقَ المَكْتَبِ رَفَّانِ لِلْكُتُبِ.', en: 'present: above the desk there are two bookshelves.' },
      { ar: 'صَبَغْنَا الجُدْرَانَ، وَاشْتَرَيْنَا مِصْبَاحًا.', en: 'past: we painted the walls and bought a lamp.' },
      { ar: 'سَأَضَعُهُ فِي الزَّاوِيَةِ.', en: 'future: I will put it in the corner.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'My room is my favourite place: not big, but tidy and comfortable; pale green walls, white curtains; first floor, next to my sister’s room → bed by the wall, desk in front of the window; two shelves above the desk, a soft grey rug; a big wardrobe for clothes and shoes; I use the desk to study every day, and the shelves for books and old toys → last summer Dad and I changed it: painted the walls, bought a new desk lamp; three tiring but fun days; Mum said it became the nicest room in the house → a tidy room helps you study; I want to buy a comfy reading chair and will put it in the corner by the shelf.', find: ['لَيْسَتْ كَبِيرَةً، لٰكِنَّهَا', 'رَفَّانِ', 'خِزَانَةُ المَلَابِسِ', 'سَأَضَعُهُ'], notes: 'Core model: laysat + accusative, colours that agree, a dual (raffāni), iḍāfa, a past paragraph, an opinion and a future plan with -hu.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'They say a room reflects its owner, and mine says I love books and quiet; not spacious, but every piece has its place and story → in front of the window, an old wooden desk that was my grandfather’s, given to me when I started secondary school; shelves above it full of books collected since childhood; as for the bed, it is by the wall under a big picture of Jerusalem → last holiday I renewed the room without spending much: calm blue walls, a new shelf from old wooden crates, the desk moved to catch the morning sun — it cost only the paint, but took a whole week → it is true new furniture is beautiful, but old things carry memories money can’t buy; at university I’ll take Grandpa’s desk, “and if it were too heavy, I’d take at least one drawer!”', find: ['كَانَ لِجَدِّي', 'الَّتِي جَمَعْتُهَا', 'دُونَ أَنْ أُنْفِقَ', 'لَوْ كَانَ … لَأَخَذْتُ'], notes: 'Full-mark model: reported view (yaqūlūna inna …), laysa + accusative, a relative clause with a resumptive pronoun, aʿṭānī iyyāhu, ammā … fa-, dūna an, li- of purpose, a concession and law … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'comfort or dependence?', text: Q3B_FULL, en: 'Our homes are full of appliances — washing machines, fridges, ovens, even robot vacuums and lights switched on by phone or voice — saving the hours our grandparents spent on housework → in the past my grandmother washed ten people’s clothes by hand and baked bread in a clay oven every morning; as for my mum, she presses a button and buys ready-made bread, leaving time for her job and for us → but comfort has a price: last winter a two-day power cut stopped everything at home — we didn’t know how to cook or keep warm; then I understood how dependent on machines we have become, while Grandma laughed and lit a fire to cook for us → it is true modern appliances are a blessing, but they use a lot of energy and make us forget important skills; “if every young person learned some old skills, they would never fear a power cut, and would live a simpler life”.', find: ['كَانَ أَجْدَادُنَا يَقْضُونَهَا', 'أَمَّا أُمِّي فَتُشَغِّلُ', 'وَلَمْ نَعْرِفْ كَيْفَ', 'لَوْ تَعَلَّمَ … لَمَا خَافَ'], notes: 'Full-mark model for the Stretch title: a relative clause with a resumptive pronoun, kāna + present vs ammā … fa-, lam + jussive, kam (how much), a concession and law … lamā.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; furniture words spelt correctly.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: -hu / -hā and an iḍāfa used correctly.' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: allatī / alladhī, a concession or law … la-.' },
  ],
};

module.exports = { speak, write };
