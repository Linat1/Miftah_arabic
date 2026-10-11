'use strict';
/* Exam-practice data · TC-L04 · Environmental Problems and Causes (cause and effect; active vs passive). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'C', n: 4, short: 'Environmental Problems and Causes', arShort: 'مَشَاكِلُ البِيئَةِ', fileTitle: 'Environmental_Problems_Causes', title: 'Environmental Problems and Causes', ar: 'المَشَاكِلُ البِيئِيَّةُ وَأَسْبَابُهَا', icon: 'FaGlobe', grammar: 'cause and effect (bi-sababi, yuʾaddī ilā, mimmā yusabbibu); active vs passive (tulawwithu / yulawwathu)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: name environmental problems — pollution, rubbish, traffic, deforestation — explain their causes and effects (بِسَبَبِ · يُؤَدِّي إِلَى · مِمَّا يُسَبِّبُ) and use active and passive verbs.',
  words: [
    w(1, 'البِيئَةُ', 'the environment', [['adj. m.', 'بِيئِيٌّ'], ['adj. f.', 'بِيئِيَّةٌ']]),
    w(2, 'تَلَوُّثٌ', 'pollution', [['air pollution', 'تَلَوُّثُ الهَوَاءِ'], ['polluted', 'مُلَوَّثٌ · مُلَوَّثَةٌ']]),
    w(3, 'يُلَوِّثُ', 'pollutes', [['f.', 'تُلَوِّثُ'], ['passive', 'يُلَوَّثُ · تُلَوَّثُ']], { tag: 'active / passive' }),
    w(4, 'نُفَايَاتٌ', 'rubbish, waste', [['plastic waste', 'نُفَايَاتٌ بْلَاسْتِيكِيَّةٌ'], ['a bin', 'سَلَّةُ مُهْمَلَاتٍ']]),
    w(5, 'دُخَانٌ', 'smoke, fumes', [['car fumes', 'دُخَانُ السَّيَّارَاتِ'], ['factories', 'مَصَانِعُ']]),
    w(6, 'زَحْمَةُ المُرُورِ', 'traffic congestion', [['crowded (f.)', 'مُزْدَحِمَةٌ'], ['crowded (m.)', 'مُزْدَحِمٌ']]),
    w(7, 'قَطْعُ الأَشْجَارِ', 'cutting down trees', [['forests are cut', 'تُقْطَعُ الغَابَاتُ']]),
    w(8, 'الاحْتِبَاسُ الحَرَارِيُّ', 'global warming', [['climate change', 'تَغَيُّرُ المُنَاخِ']]),
    w(9, 'بِسَبَبِ …', 'because of …', [['the cause', 'السَّبَبُ'], ['pl.', 'أَسْبَابٌ']], { tag: 'cause' }),
    w(10, 'يُؤَدِّي إِلَى …', 'leads to …', [['f.', 'تُؤَدِّي إِلَى'], ['which causes', 'مِمَّا يُسَبِّبُ']], { tag: 'effect' }),
    w(11, 'خَطِيرٌ · ضَارٌّ', 'dangerous · harmful', [['f.', 'خَطِيرَةٌ · ضَارَّةٌ'], ['harms', 'يَضُرُّ بِالبِيئَةِ']]),
    w(12, 'مُشْكِلَةٌ', 'a problem', [['pl.', 'مَشَاكِلُ · مُشْكِلَاتٌ'], ['serious', 'مُشْكِلَةٌ كَبِيرَةٌ']]),
  ],
  words1: { eyebrow: 'Language bank · problems (noun · adjective · verb)', title: 'Pollution, rubbish, smoke', ar: 'مَشَاكِلُ البِيئَةِ', notes: 'LANGUAGE BANK (2 min) — active: المَصَانِعُ تُلَوِّثُ النَّهْرَ (factories pollute the river). Passive: يُلَوَّثُ النَّهْرُ (the river is polluted). Adjective: نَهْرٌ مُلَوَّثٌ · مَدِينَةٌ مُلَوَّثَةٌ.' },
  words2: { eyebrow: 'Language bank · causes and effects', title: 'Because of … leads to …', ar: 'الأَسْبَابُ وَالنَّتَائِجُ', notes: 'LANGUAGE BANK (2 min) — بِسَبَبِ + noun in genitive: بِسَبَبِ الدُّخَانِ. لِأَنَّ + sentence. يُؤَدِّي إِلَى + noun. مِمَّا يُسَبِّبُ links a whole idea to its result.' },
  checkCore: 'named a problem and gave one cause (bi-sababi / li-anna)',
  checkDevelop: 'linked a cause to an effect (yuʾaddī ilā / mimmā) and used a passive verb',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a school survey', title: 'Role play A — The school environment survey', ar: 'اسْتِطْلَاعٌ عَنِ البِيئَةِ', you: 'a student', them: 'a member of the school eco-club',
      tasks: [
        { core: true, ex: 'مَا أَكْبَرُ مُشْكِلَةٍ فِي مَدِينَتِكَ؟', task: 'Name a problem.', help: 'أَكْبَرُ مُشْكِلَةٍ هِيَ …', model: 'أَكْبَرُ مُشْكِلَةٍ هِيَ زَحْمَةُ المُرُورِ.', modelEn: 'The biggest problem is traffic congestion.' },
        { core: true, ex: 'لِمَاذَا هِيَ مُشْكِلَةٌ؟', task: 'Give a reason.', help: 'لِأَنَّ …', model: 'لِأَنَّ السَّيَّارَاتِ تُلَوِّثُ الهَوَاءَ.', modelEn: 'Because cars pollute the air.' },
        { core: true, ex: 'وَفِي المَدْرَسَةِ؟', task: 'Name a problem at school.', help: 'فِي المَدْرَسَةِ … كَثِيرَةٌ', model: 'فِي المَدْرَسَةِ النُّفَايَاتُ البْلَاسْتِيكِيَّةُ كَثِيرَةٌ.', modelEn: 'At school there is a lot of plastic waste.' },
        { core: true, ex: 'نُرِيدُ أَنْ نَكْتُبَ تَقْرِيرًا.', task: 'Ask who will read it.', help: 'مَنْ …؟', model: 'مَنْ سَيَقْرَأُ التَّقْرِيرَ؟', modelEn: 'Who will read the report?' },
        { core: true, unexpected: true, ex: 'كَيْفَ تَأْتِي إِلَى المَدْرَسَةِ؟', task: 'Answer the unexpected question.', help: 'آتِي … بِـ / مَشْيًا', model: 'آتِي إِلَى المَدْرَسَةِ مَشْيًا، لِأَنَّ بَيْتِي قَرِيبٌ.', modelEn: 'I walk to school, because my house is close.' },
      ],
      girl: 'مَدِينَتِكِ · تَأْتِينَ',
      notes: 'Core: a superlative + iḍāfa (akbaru mushkilatin); as-sayyārāt (non-human pl.) tulawwithu; an-nufāyāt … kathīra.',
    },
    {
      id: 'B', level: 'Core+', setting: 'a polluted beach', title: 'Role play B — Reporting a dirty beach', ar: 'شَاطِئٌ مُلَوَّثٌ', you: 'a visitor', them: 'a council officer on the phone',
      tasks: [
        { core: true, ex: 'أَهْلًا، كَيْفَ أُسَاعِدُكَ؟', task: 'Say where you are and the problem.', help: 'أَنَا فِي … وَهُوَ …', model: 'أَنَا عَلَى الشَّاطِئِ الشَّمَالِيِّ، وَهُوَ مُلَوَّثٌ جِدًّا.', modelEn: 'I’m on the north beach, and it is very polluted.' },
        { core: true, ex: 'مَاذَا تَرَى بِالضَّبْطِ؟', task: 'Describe two things.', help: 'أَرَى … وَ…', model: 'أَرَى زُجَاجَاتٍ بْلَاسْتِيكِيَّةً كَثِيرَةً، وَأَكْيَاسًا عَلَى الرَّمْلِ.', modelEn: 'I see lots of plastic bottles, and bags on the sand.' },
        { ex: 'هٰذَا غَرِيبٌ.', task: 'ASK when it will be cleaned.', help: 'مَتَى سَيُنَظَّفُ …؟', model: 'مَتَى سَيُنَظَّفُ الشَّاطِئُ؟', modelEn: 'When will the beach be cleaned?' },
        { ex: 'غَدًا إِنْ شَاءَ اللّٰهُ. مَا السَّبَبُ فِي رَأْيِكَ؟', task: 'Give the cause and the effect.', help: 'بِسَبَبِ … مِمَّا يَضُرُّ …', model: 'بِسَبَبِ الزُّوَّارِ الَّذِينَ يَتْرُكُونَ نُفَايَاتِهِمْ، مِمَّا يَضُرُّ بِالطُّيُورِ وَالأَسْمَاكِ.', modelEn: 'Because of visitors who leave their rubbish, which harms birds and fish.' },
        { unexpected: true, ex: 'هَلْ تَرَى سَلَّاتِ مُهْمَلَاتٍ هُنَاكَ؟', task: 'Answer the unexpected question.', help: 'لَا، … / نَعَمْ، لٰكِنَّ …', model: 'نَعَمْ، لٰكِنَّهَا قَلِيلَةٌ وَمُمْتَلِئَةٌ.', modelEn: 'Yes, but there are few and they are full.' },
      ],
      girl: 'أُسَاعِدُكِ · تَرَيْنَ · رَأْيِكِ',
      notes: 'Core+: mulawwath (passive participle); non-human plurals zujājātin … kathīra; the CANDIDATE asks with a passive (sa-yunaẓẓafu); bi-sababi … mimmā.',
    },
    {
      id: 'C', level: 'Develop', setting: 'a local news report', title: 'Role play C — The river is dying', ar: 'النَّهْرُ يَمُوتُ', you: 'a young resident', them: 'a local journalist',
      tasks: [
        { ex: 'مَاذَا حَدَثَ لِلنَّهْرِ؟', task: 'Say what happened (past).', help: 'تَلَوَّثَ … وَمَاتَتْ …', model: 'تَلَوَّثَ النَّهْرُ فِي الشَّهْرِ المَاضِي، وَمَاتَتْ أَسْمَاكٌ كَثِيرَةٌ.', modelEn: 'The river was polluted last month, and many fish died.' },
        { ex: 'مَا السَّبَبُ؟', task: 'Explain the cause (active + passive).', help: 'المَصْنَعُ … / تُرْمَى …', model: 'المَصْنَعُ القَرِيبُ يَرْمِي مَوَادَّ كِيمِيَائِيَّةً فِيهِ؛ أَيْ تُرْمَى المَوَادُّ فِي المَاءِ لَيْلًا.', modelEn: 'The nearby factory dumps chemicals in it — the chemicals are dumped in the water at night.' },
        { ex: 'كَيْفَ كَانَ النَّهْرُ قَبْلَ ذٰلِكَ؟', task: 'Describe it in the past.', help: 'كَانَ … وَكُنَّا …', model: 'كَانَ صَافِيًا وَنَظِيفًا، وَكُنَّا نَصْطَادُ فِيهِ مَعَ أَبِي.', modelEn: 'It was clear and clean, and we used to fish in it with my dad.' },
        { ex: 'وَمَا النَّتَائِجُ عَلَى السُّكَّانِ؟', task: 'Give two effects.', help: 'يُؤَدِّي إِلَى … وَ…', model: 'يُؤَدِّي التَّلَوُّثُ إِلَى رَائِحَةٍ كَرِيهَةٍ، وَإِلَى أَمْرَاضٍ عِنْدَ الأَطْفَالِ.', modelEn: 'The pollution leads to a bad smell, and to illnesses in children.' },
        { unexpected: true, ex: 'مَاذَا سَتَفْعَلُونَ الآنَ؟', task: 'Answer the unexpected question (future).', help: 'سَنَكْتُبُ … وَسَـ…', model: 'سَنَكْتُبُ رِسَالَةً إِلَى البَلَدِيَّةِ، وَسَنَجْمَعُ تَوْقِيعَاتِ الجِيرَانِ.', modelEn: 'We will write a letter to the council, and collect the neighbours’ signatures.' },
      ],
      girl: '(same words — the journalist may be a woman)',
      notes: 'Develop: past events, active (yarmī) vs passive (turmā), kāna + kunnā + present, yuʾaddī ilā + two effects, the future.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a youth debate', title: 'Role play D — Who is to blame?', ar: 'مَنِ المَسْؤُولُ؟', you: 'a debate speaker', them: 'the debate chair',
      tasks: [
        { ex: 'مَا أَخْطَرُ مُشْكِلَةٍ بِيئِيَّةٍ فِي رَأْيِكَ؟', task: 'Name it and justify with evidence.', help: 'أَخْطَرُهَا … بِدَلِيلِ أَنَّ …', model: 'أَخْطَرُهَا تَلَوُّثُ الهَوَاءِ، بِدَلِيلِ أَنَّ مَلَايِينَ النَّاسِ يَمُوتُونَ بِسَبَبِهِ كُلَّ سَنَةٍ.', modelEn: 'The most dangerous is air pollution — millions of people die because of it every year.' },
        { ex: 'وَمَا أَسْبَابُهُ؟', task: 'Give a chain of causes.', help: 'يَزْدَادُ … مِمَّا يُؤَدِّي إِلَى …', model: 'يَزْدَادُ عَدَدُ السَّيَّارَاتِ وَالمَصَانِعِ، مِمَّا يُؤَدِّي إِلَى ارْتِفَاعِ نِسْبَةِ الغَازَاتِ الضَّارَّةِ فِي الجَوِّ.', modelEn: 'Cars and factories are increasing, which leads to a rise in harmful gases in the air.' },
        { ex: 'هَلِ المَسْؤُولُ الحُكُومَاتُ أَمِ الأَفْرَادُ؟', task: 'Balance both sides.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، تَسْمَحُ الحُكُومَاتُ لِلْمَصَانِعِ بِالتَّلْوِيثِ، وَمِنْ نَاحِيَةٍ أُخْرَى، نَسْتَخْدِمُ نَحْنُ السَّيَّارَةَ حَتَّى لِلْمَسَافَاتِ القَصِيرَةِ.', modelEn: 'On one hand, governments let factories pollute; on the other, we use the car even for short distances.' },
        { ex: 'لٰكِنَّ المَصَانِعَ تُوَفِّرُ الوَظَائِفَ!', task: 'Concede and counter.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهَا تُوَفِّرُ الوَظَائِفَ، غَيْرَ أَنَّ صِحَّةَ العُمَّالِ أَنْفُسِهِمْ تَتَضَرَّرُ مِنْ هٰذَا الدُّخَانِ.', modelEn: 'It is true they provide jobs, but the workers’ own health is damaged by the fumes.' },
        { unexpected: true, ex: 'لَوْ لَمْ تُوجَدْ سَيَّارَاتٌ، كَيْفَ تَكُونُ المُدُنُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ لَمْ تُوجَدْ …، لَكَانَتِ …', model: 'لَوْ لَمْ تُوجَدْ سَيَّارَاتٌ، لَكَانَتِ المُدُنُ أَهْدَأَ وَأَنْظَفَ، وَلَمَشَى النَّاسُ أَكْثَرَ.', modelEn: 'If there were no cars, cities would be quieter and cleaner, and people would walk more.' },
      ],
      girl: 'رَأْيِكِ',
      notes: 'Stretch: a superlative + bi-dalīli anna, a cause chain with mimmā, a balanced view (min nāḥiya … wa-min nāḥiya ukhrā), a concession, law lam … la-.',
      modelFoot: 'Stretch: evidence, a cause chain, a balanced view, ṣaḥīḥun anna … ghayra anna and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'البِيئَةُ فِي مَدِينَتِي', aim: 'one full sentence per question',
      qs: [
        { q: 'هَلْ مَدِينَتُكَ نَظِيفَةٌ؟', en: 'Is your town clean?', start: 'نَعَمْ / لَا، مَدِينَتِي …', model: 'لَا، مَدِينَتِي لَيْسَتْ نَظِيفَةً جِدًّا.', modelEn: 'No, my town isn’t very clean.' },
        { q: 'مَا المُشْكِلَةُ الكَبِيرَةُ فِي مَدِينَتِكَ؟', en: 'What is the big problem in your town?', start: 'المُشْكِلَةُ الكَبِيرَةُ …', model: 'المُشْكِلَةُ الكَبِيرَةُ هِيَ النُّفَايَاتُ فِي الشَّوَارِعِ.', modelEn: 'The big problem is rubbish in the streets.' },
        { q: 'هَلِ الهَوَاءُ نَظِيفٌ؟', en: 'Is the air clean?', start: 'لَا، الهَوَاءُ … بِسَبَبِ …', model: 'لَا، الهَوَاءُ مُلَوَّثٌ بِسَبَبِ السَّيَّارَاتِ.', modelEn: 'No, the air is polluted because of the cars.' },
        { q: 'هَلْ تَرْمِي النُّفَايَاتِ فِي السَّلَّةِ؟', en: 'Do you put rubbish in the bin?', start: 'نَعَمْ، أَرْمِي …', model: 'نَعَمْ، أَرْمِي النُّفَايَاتِ فِي السَّلَّةِ دَائِمًا.', modelEn: 'Yes, I always put rubbish in the bin.' },
        { q: 'هَلِ البِيئَةُ مُهِمَّةٌ لَكَ؟', en: 'Is the environment important to you?', start: 'نَعَمْ، البِيئَةُ مُهِمَّةٌ لِأَنَّ …', model: 'نَعَمْ، البِيئَةُ مُهِمَّةٌ لِأَنَّهَا بَيْتُنَا.', modelEn: 'Yes, the environment is important because it is our home.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + bi-sababi or li-anna = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'أَسْبَابٌ وَنَتَائِجُ', aim: 'two or three sentences, with a cause, an effect and a past detail',
      qs: [
        { q: 'مَا أَسْبَابُ تَلَوُّثِ الهَوَاءِ فِي المُدُنِ؟', en: 'What causes air pollution in cities?', start: 'مِنْ أَسْبَابِهِ … وَ…', model: 'مِنْ أَسْبَابِهِ دُخَانُ السَّيَّارَاتِ وَالمَصَانِعِ، وَقِلَّةُ الحَدَائِقِ وَالأَشْجَارِ.', modelEn: 'Its causes include car and factory fumes, and a lack of parks and trees.' },
        { q: 'كَيْفَ يُؤَثِّرُ البْلَاسْتِيكُ فِي البِحَارِ؟', en: 'How does plastic affect the seas?', start: 'يُؤَدِّي البْلَاسْتِيكُ إِلَى …', model: 'يُؤَدِّي البْلَاسْتِيكُ إِلَى مَوْتِ السَّلَاحِفِ وَالأَسْمَاكِ، لِأَنَّهَا تَظُنُّهُ طَعَامًا.', modelEn: 'Plastic leads to the death of turtles and fish, because they think it is food.' },
        { q: 'صِفْ مَكَانًا مُلَوَّثًا رَأَيْتَهُ.', en: 'Describe a polluted place you have seen.', start: 'رَأَيْتُ … كَانَ …', model: 'رَأَيْتُ قَنَاةً فِي مَدِينَتِنَا كَانَتْ مَمْلُوءَةً بِالأَكْيَاسِ وَالعُلَبِ، وَكَانَتْ رَائِحَتُهَا كَرِيهَةً.', modelEn: 'I saw a canal in our town full of bags and cans, and it smelt awful.' },
        { q: 'هَلِ الضَّجِيجُ مُشْكِلَةٌ بِيئِيَّةٌ أَيْضًا؟', en: 'Is noise an environmental problem too?', start: 'نَعَمْ، لِأَنَّهُ يُسَبِّبُ …', model: 'نَعَمْ، لِأَنَّهُ يُسَبِّبُ التَّوَتُّرَ وَقِلَّةَ النَّوْمِ، وَيُخِيفُ الطُّيُورَ أَيْضًا.', modelEn: 'Yes, because it causes stress and lack of sleep, and scares birds too.' },
        { q: 'لِمَاذَا تُقْطَعُ الغَابَاتُ؟', en: 'Why are forests cut down?', start: 'تُقْطَعُ الغَابَاتُ لِـ … / مِنْ أَجْلِ …', model: 'تُقْطَعُ الغَابَاتُ مِنْ أَجْلِ الخَشَبِ وَالزِّرَاعَةِ، مِمَّا يُهَدِّدُ الحَيَوَانَاتِ.', modelEn: 'Forests are cut down for wood and farming, which threatens animals.' },
      ],
      foot: 'Develop: two or three sentences — a cause, an effect, a passive verb or a past description.',
      modelFoot: 'Cause + effect + an example = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الإِنْسَانُ وَمَشَاكِلُ البِيئَةِ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلِ الدُّوَلُ الغَنِيَّةُ مَسْؤُولَةٌ أَكْثَرَ مِنَ الدُّوَلِ الفَقِيرَةِ؟', en: 'Are rich countries more responsible than poor ones?', start: 'فِي رَأْيِي … لِأَنَّ …', model: 'فِي رَأْيِي نَعَمْ، لِأَنَّهَا تُنْتِجُ وَتَسْتَهْلِكُ أَكْثَرَ بِكَثِيرٍ، وَلِأَنَّ مَصَانِعَهَا لَوَّثَتِ العَالَمَ مُنْذُ مِئَتَيْ سَنَةٍ.', modelEn: 'I think so — they produce and consume much more, and their factories have polluted the world for 200 years.' },
        { q: 'هَلِ التِّكْنُولُوجْيَا سَبَبُ المُشْكِلَةِ أَمْ حَلُّهَا؟', en: 'Is technology the cause of the problem or the solution?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، الأَجْهِزَةُ القَدِيمَةُ تُرْمَى وَتُلَوِّثُ الأَرْضَ، وَمِنْ نَاحِيَةٍ أُخْرَى، السَّيَّارَاتُ الكَهْرَبَائِيَّةُ تُخَفِّفُ التَّلَوُّثَ.', modelEn: 'On one hand, old devices are thrown away and pollute the land; on the other, electric cars reduce pollution.' },
        { q: 'كَيْفَ تَغَيَّرَتْ مِنْطَقَتُكَ فِي السَّنَوَاتِ الأَخِيرَةِ؟', en: 'How has your area changed recently?', start: 'كَانَتْ … أَمَّا الآنَ فَقَدْ …', model: 'كَانَتْ هُنَاكَ حُقُولٌ خَضْرَاءُ، أَمَّا الآنَ فَقَدْ بُنِيَ عَلَيْهَا طَرِيقٌ سَرِيعٌ، وَازْدَادَ الضَّجِيجُ وَالدُّخَانُ.', modelEn: 'There were green fields; now a motorway has been built on them, and noise and fumes have increased.' },
        { q: 'هَلْ يَهْتَمُّ الشَّبَابُ بِالبِيئَةِ أَكْثَرَ مِنَ الكِبَارِ؟', en: 'Do young people care more about the environment than adults?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الشَّبَابَ يَتَحَدَّثُونَ عَنْهَا كَثِيرًا، غَيْرَ أَنَّ بَعْضَهُمْ يَشْتَرِي مَلَابِسَ جَدِيدَةً كُلَّ أُسْبُوعٍ، مِمَّا يَضُرُّ بِالبِيئَةِ.', modelEn: 'Young people talk about it a lot, but some buy new clothes every week, which harms the environment.' },
        { q: 'لَوْ لَمْ نُغَيِّرْ عَادَاتِنَا، كَيْفَ سَيَكُونُ العَالَمُ بَعْدَ مِئَةِ سَنَةٍ؟', en: 'If we don’t change our habits, what will the world be like in 100 years?', start: 'إِذَا لَمْ نُغَيِّرْ …، فَسَـ…', model: 'إِذَا لَمْ نُغَيِّرْ عَادَاتِنَا، فَسَتَخْتَفِي غَابَاتٌ كَثِيرَةٌ، وَسَتَغْرَقُ مُدُنٌ سَاحِلِيَّةٌ تَحْتَ البَحْرِ.', modelEn: 'If we don’t change our habits, many forests will vanish and coastal cities will sink under the sea.' },
      ],
      foot: 'Stretch: a balanced view, a passive verb, kānat vs ammā … fa-qad, a concession and idhā lam … fa-sa-.',
      modelFoot: 'Stretch: balance, passive, past vs present, ṣaḥīḥun anna … ghayra anna, idhā … fa-sa- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I named environmental problems in full sentences.' },
    { route: 'core', text: 'I gave a cause with bi-sababi or li-anna.' },
    { route: 'develop', text: 'I linked a cause to an effect (yuʾaddī ilā / mimmā).' },
    { route: 'develop', text: 'I used a passive verb (tuqṭaʿu, yulawwathu) or mulawwath.' },
    { route: 'stretch', text: 'I gave a balanced view, a concession or a conditional.' },
  ],
};
speak.RP[0].tasks[4].help = 'آتِي مَشْيًا / بِالسَّيَّارَةِ، لِأَنَّ …';
speak.RP[2].tasks[4].help = 'سَنَكْتُبُ … وَسَنَجْمَعُ …';
speak.CONV[1].qs[4].start = 'تُقْطَعُ الغَابَاتُ مِنْ أَجْلِ …';
speak.CONV[2].qs[4].start = 'إِذَا لَمْ نُغَيِّرْ …، فَسَتَخْتَفِي …';

const Q2_CORE = `إِلَى مُدِيرِ المَدْرَسَةِ المُحْتَرَمِ،
أَنَا طَالِبَةٌ فِي الصَّفِّ العَاشِرِ، وَأَكْتُبُ إِلَيْكَ عَنْ مُشْكِلَةٍ بِيئِيَّةٍ فِي مَدْرَسَتِنَا. المُشْكِلَةُ هِيَ النُّفَايَاتُ البْلَاسْتِيكِيَّةُ؛ فَالمَلْعَبُ وَالمَمَرَّاتُ وَسِخَةٌ بَعْدَ الاسْتِرَاحَةِ. السَّبَبُ أَنَّ سَلَّاتِ المُهْمَلَاتِ قَلِيلَةٌ، وَأَنَّ الطُّلَّابَ يَشْتَرُونَ زُجَاجَاتِ مَاءٍ كُلَّ يَوْمٍ. أَمْسِ رَأَيْتُ طَائِرًا يَأْكُلُ كِيسًا بْلَاسْتِيكِيًّا، وَحَزِنْتُ كَثِيرًا. فِي رَأْيِي، هٰذِهِ مُشْكِلَةٌ خَطِيرَةٌ. أَقْتَرِحُ أَنْ نَضَعَ سَلَّاتٍ لِلتَّدْوِيرِ، وَسَنُنَظِّمُ نَحْنُ يَوْمًا لِلتَّنْظِيفِ.
مَعَ الشُّكْرِ،
مَرْيَمُ`;
const Q2_FULL = `حَضْرَةَ مُدِيرِ المَدْرَسَةِ المُحْتَرَمِ،
تَحِيَّةً طَيِّبَةً، وَبَعْدُ، فَأَكْتُبُ إِلَيْكَ نِيَابَةً عَنْ نَادِي البِيئَةِ لِأُلْفِتَ نَظَرَكَ إِلَى مُشْكِلَةٍ تَزْدَادُ يَوْمًا بَعْدَ يَوْمٍ، وَهِيَ النُّفَايَاتُ البْلَاسْتِيكِيَّةُ الَّتِي تُرْمَى فِي المَلْعَبِ وَالمَمَرَّاتِ. وَيَرْجِعُ السَّبَبُ إِلَى قِلَّةِ السَّلَّاتِ، وَإِلَى بَيْعِ المَاءِ فِي زُجَاجَاتٍ تُسْتَخْدَمُ مَرَّةً وَاحِدَةً فَقَطْ. وَقَدْ لَاحَظْنَا الأُسْبُوعَ المَاضِي أَنَّ الرِّيَاحَ حَمَلَتِ الأَكْيَاسَ إِلَى الحَدِيقَةِ المُجَاوِرَةِ، مِمَّا أَضَرَّ بِالطُّيُورِ وَالسَّنَاجِبِ الَّتِي تَعِيشُ هُنَاكَ. لِذٰلِكَ نَقْتَرِحُ تَرْكِيبَ نَافُورَاتٍ لِلشُّرْبِ وَسَلَّاتٍ لِلتَّدْوِيرِ، وَسَيَتَطَوَّعُ أَعْضَاءُ النَّادِي لِتَوْعِيَةِ الطُّلَّابِ فِي الاسْتِرَاحَاتِ وَالاجْتِمَاعَاتِ الصَّبَاحِيَّةِ.
وَتَفَضَّلُوا بِقَبُولِ فَائِقِ الاحْتِرَامِ،
مَرْيَمُ`;
const Q3A_CORE = `فِي مَدِينَتِي مَشَاكِلُ بِيئِيَّةٌ كَثِيرَةٌ. أَكْبَرُ مُشْكِلَةٍ هِيَ زَحْمَةُ المُرُورِ. فِي الصَّبَاحِ الشَّوَارِعُ مُزْدَحِمَةٌ جِدًّا، وَالسَّيَّارَاتُ وَالحَافِلَاتُ تُلَوِّثُ الهَوَاءَ. هُنَاكَ أَيْضًا نُفَايَاتٌ كَثِيرَةٌ فِي الحَدَائِقِ وَالشَّوَارِعِ.
السَّبَبُ الأَوَّلُ هُوَ أَنَّ النَّاسَ يَسْتَخْدِمُونَ السَّيَّارَاتِ كَثِيرًا. السَّبَبُ الثَّانِي هُوَ أَنَّ بَعْضَ النَّاسِ يَرْمُونَ النُّفَايَاتِ فِي الشَّارِعِ، وَلَا يَسْتَخْدِمُونَ السَّلَّاتِ. هٰذَا يُؤَدِّي إِلَى أَمْرَاضٍ، وَيَضُرُّ بِالحَيَوَانَاتِ وَالطُّيُورِ.
فِي الشَّهْرِ المَاضِي ذَهَبْتُ مَعَ صَفِّي إِلَى النَّهْرِ. كَانَ المَاءُ وَسِخًا، وَكَانَتْ هُنَاكَ زُجَاجَاتٌ وَأَكْيَاسٌ كَثِيرَةٌ. جَمَعْنَا النُّفَايَاتِ فِي أَكْيَاسٍ كَبِيرَةٍ، وَبَعْدَ ثَلَاثِ سَاعَاتٍ أَصْبَحَ المَكَانُ نَظِيفًا. كُنْتُ سَعِيدَةً جِدًّا، لِأَنَّ عَمَلَنَا كَانَ مُفِيدًا لِلنَّهْرِ وَلِلطُّيُورِ.
فِي رَأْيِي، البِيئَةُ مُهِمَّةٌ جِدًّا، لِأَنَّهَا بَيْتُنَا جَمِيعًا. فِي المُسْتَقْبَلِ سَأَذْهَبُ إِلَى المَدْرَسَةِ بِالدَّرَّاجَةِ، وَسَأَسْتَخْدِمُ زُجَاجَةَ مَاءٍ وَاحِدَةً كُلَّ يَوْمٍ.`;
const Q3A_FULL = `يَظُنُّ كَثِيرٌ مِنَ النَّاسِ أَنَّ المَشَاكِلَ البِيئِيَّةَ بَعِيدَةٌ عَنْهُمْ، وَأَنَّهَا تَحْدُثُ فِي الغَابَاتِ الاسْتِوَائِيَّةِ أَوْ فِي القُطْبِ الشَّمَالِيِّ فَقَطْ. لٰكِنَّ الحَقِيقَةَ أَنَّ مَدِينَتِي نَفْسَهَا تُعَانِي مِنْ مَشَاكِلَ لَا تَقِلُّ خُطُورَةً.
أَوَّلُ هٰذِهِ المَشَاكِلِ تَلَوُّثُ الهَوَاءِ؛ فَبِسَبَبِ زَحْمَةِ المُرُورِ فِي سَاعَاتِ الصَّبَاحِ، تَمْتَلِئُ الشَّوَارِعُ بِدُخَانِ السَّيَّارَاتِ، مِمَّا يُسَبِّبُ الرَّبْوَ لِلْأَطْفَالِ وَكِبَارِ السِّنِّ. أَمَّا المُشْكِلَةُ الثَّانِيَةُ فَهِيَ النُّفَايَاتُ الَّتِي تُرْمَى فِي الحَدَائِقِ وَالقَنَوَاتِ، فَتُشَوِّهُ جَمَالَهَا وَتَقْتُلُ الحَيَوَانَاتِ.
وَقَدْ رَأَيْتُ نَتَائِجَ ذٰلِكَ بِنَفْسِي فِي الصَّيْفِ المَاضِي، عِنْدَمَا شَارَكْتُ فِي حَمْلَةِ تَنْظِيفٍ عَلَى ضِفَّةِ القَنَاةِ؛ فَقَدْ جَمَعْنَا خِلَالَ سَاعَتَيْنِ أَكْثَرَ مِنْ خَمْسِينَ كِيسًا مِنَ العُلَبِ وَالأَكْيَاسِ، وَوَجَدْنَا بَطَّةً عَالِقَةً فِي شَبَكَةٍ بْلَاسْتِيكِيَّةٍ.
صَحِيحٌ أَنَّ البَلَدِيَّةَ مَسْؤُولَةٌ عَنْ نَظَافَةِ المَدِينَةِ، غَيْرَ أَنَّ كُلَّ مُشْكِلَةٍ تَبْدَأُ بِتَصَرُّفٍ فَرْدِيٍّ صَغِيرٍ. وَلَوْ فَكَّرَ كُلُّ وَاحِدٍ مِنَّا قَبْلَ أَنْ يَرْمِيَ كِيسًا أَوْ يَرْكَبَ سَيَّارَتَهُ، لَتَغَيَّرَتْ مَدِينَتُنَا خِلَالَ سَنَوَاتٍ قَلِيلَةٍ.`;
const Q3B_FULL = `يُنْتِجُ العَالَمُ كُلَّ سَنَةٍ مِئَاتِ المَلَايِينِ مِنَ الأَطْنَانِ مِنَ البْلَاسْتِيكِ، وَيَنْتَهِي جُزْءٌ كَبِيرٌ مِنْهَا فِي البِحَارِ وَالمُحِيطَاتِ. وَيُقَدِّرُ العُلَمَاءُ أَنَّ كَمِّيَّةَ البْلَاسْتِيكِ فِي البَحْرِ قَدْ تَزِيدُ عَلَى كَمِّيَّةِ الأَسْمَاكِ قَبْلَ نِهَايَةِ هٰذَا القَرْنِ.
فِي المَاضِي كَانَ النَّاسُ يَحْمِلُونَ مُشْتَرَيَاتِهِمْ فِي سِلَالٍ، وَيَشْرَبُونَ مِنْ أَوَانٍ زُجَاجِيَّةٍ تُسْتَخْدَمُ سَنَوَاتٍ، أَمَّا اليَوْمَ فَكُلُّ شَيْءٍ تَقْرِيبًا يُغَلَّفُ بِالبْلَاسْتِيكِ ثُمَّ يُرْمَى بَعْدَ دَقَائِقَ، مِمَّا يُؤَدِّي إِلَى تَرَاكُمِ النُّفَايَاتِ فِي كُلِّ مَكَانٍ، مِنَ الشَّوَارِعِ إِلَى أَعْمَاقِ المُحِيطَاتِ.
وَقَدْ صُدِمْتُ فِي عُطْلَتِي الأَخِيرَةِ عَلَى سَاحِلِ البَحْرِ الأَحْمَرِ؛ فَبَيْنَمَا كُنْتُ أَغُوصُ لِأُشَاهِدَ الشِّعَابَ المَرْجَانِيَّةَ، رَأَيْتُ سُلَحْفَاةً تُحَاوِلُ أَنْ تَأْكُلَ كِيسًا شَفَّافًا تَظُنُّهُ قِنْدِيلَ بَحْرٍ، فَسَحَبَهُ المُدَرِّبُ مِنْ فَمِهَا بِسُرْعَةٍ، وَلَمْ أَنْسَ ذٰلِكَ المَشْهَدَ أَبَدًا.
صَحِيحٌ أَنَّ البْلَاسْتِيكَ رَخِيصٌ وَعَمَلِيٌّ، غَيْرَ أَنَّ ثَمَنَهُ الحَقِيقِيَّ تَدْفَعُهُ الطَّبِيعَةُ. وَإِذَا لَمْ تُفْرَضْ قَوَانِينُ صَارِمَةٌ عَلَى الشَّرِكَاتِ، وَلَمْ نُغَيِّرْ نَحْنُ عَادَاتِنَا، فَسَنَتْرُكُ لِأَبْنَائِنَا بِحَارًا بِلَا حَيَاةٍ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in an eco-club problem-report form, write a formal letter to the head teacher about a problem at school, and write an extended piece about problems in your town or plastic in the seas.',
  lift: [
    { ar: 'بِسَبَبِ زَحْمَةِ المُرُورِ', en: 'because of the traffic' },
    { ar: 'مِمَّا يُسَبِّبُ الرَّبْوَ لِلْأَطْفَالِ', en: 'which causes asthma in children' },
    { ar: 'النُّفَايَاتُ الَّتِي تُرْمَى فِي الحَدَائِقِ', en: 'the rubbish that is thrown in the parks' },
  ],
  checkTip: 'Check: bi-sababi + genitive noun, li-anna + sentence; passive verbs agree with the new subject (tuqṭaʿu al-ghābāt, yurmā al-kīs); mulawwath / mulawwatha agree with the noun.',
  FORM: {
    title: 'Eco-club problem report', ar: 'اسْتِمَارَةُ الإِبْلَاغِ عَنْ مُشْكِلَةٍ بِيئِيَّةٍ',
    fields: [
      { core: true, ar: 'الاسْمُ وَالصَّفُّ', en: 'Name and class', model: 'مَرْيَمُ حَسَنٌ، الصَّفُّ العَاشِرُ', modelEn: 'Maryam Hassan, Year 10' },
      { core: true, ar: 'المَكَانُ', en: 'Place', model: 'مَلْعَبُ المَدْرَسَةِ', modelEn: 'the school playground' },
      { core: true, ar: 'نَوْعُ المُشْكِلَةِ', en: 'Type of problem', model: 'نُفَايَاتٌ بْلَاسْتِيكِيَّةٌ', modelEn: 'plastic rubbish' },
      { core: true, ar: 'التَّارِيخُ', en: 'Date', model: 'يَوْمُ الاثْنَيْنِ، ١٢ مَارِس', modelEn: 'Monday 12 March' },
      { core: true, ar: 'مَتَى تَحْدُثُ؟', en: 'When it happens', model: 'بَعْدَ الاسْتِرَاحَةِ', modelEn: 'after break' },
      { core: true, ar: 'السَّبَبُ', en: 'The cause', model: 'قِلَّةُ السَّلَّاتِ', modelEn: 'too few bins' },
      { ar: 'النَّتِيجَةُ', en: 'The effect', model: 'المَكَانُ وَسِخٌ وَالطُّيُورُ تَأْكُلُ البْلَاسْتِيكَ', modelEn: 'the place is dirty and birds eat the plastic' },
      { ar: 'جُمْلَةٌ: اقْتِرَاحُكَ', en: 'ONE sentence: your suggestion', model: 'أَقْتَرِحُ أَنْ تُوضَعَ سَلَّاتٌ لِلتَّدْوِيرِ بِجَانِبِ المَقْصَفِ.', modelEn: 'I suggest recycling bins be placed next to the canteen.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with aqtariḥu an + a passive.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 6: qillatu + iḍāfa. Box 8: aqtariḥu an tūḍaʿa (passive subjunctive).',
  },
  Q2: {
    short: 'a letter about a school problem', title: 'Question 2: letter to the head teacher', ar: 'رِسَالَةٌ إِلَى المُدِيرِ',
    task: 'There is an environmental problem at your school. Write a letter in Arabic to the head teacher of about 80–90 words. You must include: • what the problem is • its causes • something you saw recently • your suggestion and what students will do.',
    checklist: ['All four bullet points, in order.', 'A formal greeting and closing.', 'A cause (bi-sababi / li-anna / as-sababu anna).', 'A past AND a future sentence.', 'About 80–90 words.'],
    phrases: [['أَكْتُبُ إِلَيْكَ عَنْ مُشْكِلَةٍ …', 'I am writing to you about a problem …'], ['السَّبَبُ أَنَّ …', 'the cause is that …'], ['أَمْسِ رَأَيْتُ …', 'yesterday I saw …'], ['أَقْتَرِحُ أَنْ … وَسَنُنَظِّمُ …', 'I suggest that … and we will organise …']],
    rubric: [
      ['task', 'هُنَاكَ مُشْكِلَةٌ بِيئِيَّةٌ فِي مَدْرَسَتِكَ. اكْتُبْ رِسَالَةً إِلَى المُدِيرِ (٨٠–٩٠ كَلِمَةً).', 'There is an environmental problem at school: write to the head (80–90 words).'],
      ['1', 'مَا المُشْكِلَةُ؟', 'What the problem is'],
      ['2', 'مَا أَسْبَابُهَا؟', 'Its causes'],
      ['3', 'مَاذَا رَأَيْتَ مُؤَخَّرًا؟', 'Something you saw recently'],
      ['4', 'مَا اقْتِرَاحُكَ؟ وَمَاذَا سَيَفْعَلُ الطُّلَّابُ؟', 'Your suggestion; what students will do'],
    ],
    qwords: 'مَا (what) · أَسْبَابُهَا (its causes) · مُؤَخَّرًا (recently) · اقْتِرَاحُكَ (your suggestion) — bullet 3 is PAST, bullet 4 is FUTURE',
    frames: [
      ['start', 'إِلَى مُدِيرِ المَدْرَسَةِ المُحْتَرَمِ،', 'To the respected head teacher,'],
      ['1', 'أَكْتُبُ إِلَيْكَ عَنْ مُشْكِلَةِ ______ فِي مَدْرَسَتِنَا.', 'I’m writing about the problem of … at school.'],
      ['2', 'السَّبَبُ أَنَّ ______ ، وَأَنَّ ______ .', 'The cause is that …, and that …'],
      ['3', 'أَمْسِ رَأَيْتُ ______ .', 'Yesterday I saw …'],
      ['4', 'أَقْتَرِحُ أَنْ ______ ، وَسَنُنَظِّمُ نَحْنُ ______ .', 'I suggest that …, and we will organise …'],
      ['end', 'مَعَ الشُّكْرِ، ______', 'With thanks, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“To the respected head teacher, I am a Year 10 student and I am writing to you about an environmental problem at our school. The problem is plastic rubbish: the playground and corridors are dirty after break. The cause is that there are few bins, and students buy bottles of water every day. Yesterday I saw a bird eating a plastic bag, and I was very sad. In my opinion this is a serious problem. I suggest we put out recycling bins, and we will organise a clean-up day. With thanks, Maryam.”',
      find: ['مُشْكِلَةٍ بِيئِيَّةٍ', 'السَّبَبُ أَنَّ', 'رَأَيْتُ طَائِرًا يَأْكُلُ', 'وَسَنُنَظِّمُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Head Teacher, greetings. I am writing on behalf of the eco-club to draw your attention to a growing problem: plastic rubbish thrown in the playground and corridors. The cause is the lack of bins, and the sale of water in single-use bottles. Last week we noticed the wind carried bags into the neighbouring park, which harmed the birds and squirrels that live there. We therefore suggest installing drinking fountains and recycling bins, and club members will volunteer to raise awareness among students at break and in morning assemblies. Yours respectfully, Maryam.”',
      find: ['لِأُلْفِتَ نَظَرَكَ إِلَى', 'الَّتِي تُرْمَى', 'يَرْجِعُ السَّبَبُ إِلَى', 'مِمَّا أَضَرَّ'],
    },
  },
  Q3: {
    a: { title: 'المَشَاكِلُ البِيئِيَّةُ فِي مَدِينَتِي', en: 'Environmental problems in my town', bullets: 'المَشَاكِلُ فِي مَدِينَتِكَ · أَسْبَابُهَا وَنَتَائِجُهَا · تَجْرِبَةٌ شَخْصِيَّةٌ · رَأْيُكَ وَمَا سَتَفْعَلُهُ', bulletsEn: 'Problems in your town · causes and effects · a personal experience · your opinion and what you will do' },
    b: { title: 'البْلَاسْتِيكُ يُهَدِّدُ البِحَارَ', en: 'Plastic is threatening the seas', bullets: 'حَجْمُ المُشْكِلَةِ · المَاضِي وَالحَاضِرُ · مَوْقِفٌ رَأَيْتَهُ · رَأْيُكَ وَالحَلُّ', bulletsEn: 'The size of the problem · past and present · something you saw · your opinion and the solution' },
    plan: [
      'The problems — fī madīnatī mashākilu bīʾiyya kathīra; non-human plural agreement.',
      'Causes and effects — as-sababu anna …, bi-sababi …, yuʾaddī ilā …, mimmā …; a passive (turmā).',
      'Past — a clean-up or an incident: dhahabnā, jamaʿnā, raʾaytu; kāna al-māʾu wasikhan.',
      'Opinion + future — sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la- or idhā lam … fa-sa-.',
    ],
    frames: [
      { ar: 'السَّيَّارَاتُ وَالحَافِلَاتُ تُلَوِّثُ الهَوَاءَ.', en: 'present: cars and buses pollute the air.' },
      { ar: 'كَانَ المَاءُ وَسِخًا، وَجَمَعْنَا النُّفَايَاتِ.', en: 'past: the water was dirty, and we collected the rubbish.' },
      { ar: 'سَأَذْهَبُ إِلَى المَدْرَسَةِ بِالدَّرَّاجَةِ.', en: 'future: I will go to school by bike.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'My town has many environmental problems: the biggest is traffic — the streets are very crowded in the morning and cars and buses pollute the air; there is also lots of rubbish in parks and streets → first cause: people use cars a lot; second: some people throw rubbish in the street and don’t use the bins; this leads to illness and harms animals and birds → last month my class went to the river: the water was dirty with many bottles and bags; we collected the rubbish in big bags, and after three hours the place was clean; I was very happy because our work helped the river and the birds → the environment matters because it is everyone’s home; I will cycle to school and use one water bottle every day.', find: ['تُلَوِّثُ الهَوَاءَ', 'السَّبَبُ الأَوَّلُ', 'يُؤَدِّي إِلَى', 'كَانَ المَاءُ وَسِخًا'], notes: 'Core model: non-human plural agreement, as-sababu al-awwal / ath-thānī, yuʾaddī ilā, a past paragraph with kāna + accusative, a future plan.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Many think environmental problems are far away — in the tropics or the Arctic — but my own town suffers from problems no less serious → first, air pollution: because of morning traffic the streets fill with fumes, which causes asthma in children and the elderly; second, rubbish thrown in parks and canals, which spoils their beauty and kills animals → I saw the results myself last summer in a canal-bank clean-up: in two hours we collected over fifty bags of cans and bags and found a duck trapped in plastic netting → it is true the council is responsible for cleaning, but every problem starts with one small personal act; “if each of us thought before throwing a bag or getting in the car, our town would change within a few years”.', find: ['يَظُنُّ … أَنَّ', 'فَبِسَبَبِ زَحْمَةِ', 'مِمَّا يُسَبِّبُ', 'لَوْ فَكَّرَ … لَتَغَيَّرَتْ'], notes: 'Full-mark model: a hook that challenges a belief, lā taqillu khuṭūra, bi-sababi … mimmā, ammā … fa-, a passive relative (allatī turmā), a vivid past incident, a concession and law … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'plastic in the seas', text: Q3B_FULL, en: 'The world produces hundreds of millions of tonnes of plastic a year, much of it ending up in the seas; scientists estimate there may be more plastic than fish by the end of the century → in the past people carried shopping in baskets and drank from glass that lasted years; today almost everything is wrapped in plastic and thrown away within minutes, which leads to waste piling up everywhere, from streets to the ocean depths → I was shocked on my last holiday on the Red Sea: while diving to see the coral reefs, I saw a turtle trying to eat a clear bag it thought was a jellyfish, and the instructor pulled it from its mouth — I have never forgotten that scene → it is true plastic is cheap and practical, but nature pays its real price; “if strict laws are not imposed on companies and we don’t change our habits, we will leave our children lifeless seas”.', find: ['يُقَدِّرُ العُلَمَاءُ أَنَّ', 'أَمَّا اليَوْمَ فَكُلُّ شَيْءٍ', 'بَيْنَمَا كُنْتُ أَغُوصُ', 'إِذَا لَمْ تُفْرَضْ … فَسَنَتْرُكُ'], notes: 'Full-mark model for the Stretch title: statistics, kāna + present vs ammā … fa-, passives (yughallafu, yurmā, tufraḍ), mimmā, bayna-mā kuntu, a concession and idhā lam … fa-sa-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; the cause and effect are clear.' },
    { route: 'core', text: 'Q2: all four bullet points, with a formal greeting and closing.' },
    { route: 'develop', text: 'Q2: a cause, a past event and a suggestion (aqtariḥu an …).' },
    { route: 'develop', text: 'Q3: four paragraphs, with yuʾaddī ilā / mimmā and a passive verb.' },
    { route: 'stretch', text: 'Q3: a concession and law … la- or idhā lam … fa-sa-.' },
  ],
};

module.exports = { speak, write };
