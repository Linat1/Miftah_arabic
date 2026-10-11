'use strict';
/* Exam-practice data · TE-L05 · Faiths, Beliefs and Places of Worship (relative clauses; nominal sentences; prepositions of place; respectful, factual language about different faiths). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'E', n: 5, short: 'Faiths, Beliefs and Places of Worship', arShort: 'الأَدْيَانُ وَأَمَاكِنُ العِبَادَةِ', fileTitle: 'Faiths_Beliefs_and_Places_of_Worship', title: 'Faiths, Beliefs and Places of Worship', ar: 'الأَدْيَانُ وَالمُعْتَقَدَاتُ وَأَمَاكِنُ العِبَادَةِ', icon: 'FaMosque', grammar: 'relative clauses (al-masjidu alladhī …, al-kanīsatu allatī …, alladhīna); nominal sentences (al-masjidu kabīrun; fī al-ḥayyi kanīsatun qadīmatun); prepositions of place (bijānibi, amāma, qurba, dākhila); respectful, factual language (yuʾminu, yaḥtarimu, yaʿtabiru)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: describe places of worship in your area accurately and respectfully, explain what happens there, and talk about respect between people of different faiths — using nominal sentences, relative clauses (الَّذِي · الَّتِي · الَّذِينَ) and prepositions of place (أَمَامَ · بِجَانِبِ · دَاخِلَ).',
  words: [
    w(1, 'دِينٌ', 'a religion / faith', [['religions', 'أَدْيَانٌ'], ['religious (m. · f.)', 'دِينِيٌّ · دِينِيَّةٌ']], { tag: 'noun' }),
    w(2, 'مَسْجِدٌ', 'a mosque', [['mosques', 'مَسَاجِدُ'], ['minaret', 'مِئْذَنَةٌ']], { tag: 'place' }),
    w(3, 'كَنِيسَةٌ', 'a church', [['churches', 'كَنَائِسُ'], ['cathedral', 'كَاتِدْرَائِيَّةٌ']], { tag: 'place' }),
    w(4, 'كَنِيسٌ', 'a synagogue', [['temple', 'مَعْبَدٌ'], ['temples', 'مَعَابِدُ']], { tag: 'place' }),
    w(5, 'مُسْلِمٌ · مَسِيحِيٌّ', 'Muslim · Christian (m.)', [['f.', 'مُسْلِمَةٌ · مَسِيحِيَّةٌ'], ['pl.', 'مُسْلِمُونَ · مَسِيحِيُّونَ']], { tag: 'nisba' }),
    w(6, 'يَهُودِيٌّ · هِنْدُوسِيٌّ', 'Jewish · Hindu (m.)', [['Sikh', 'سِيخِيٌّ'], ['Buddhist', 'بُوذِيٌّ']], { tag: 'nisba' }),
    w(7, 'يُؤْمِنُ بِاللّٰهِ', 'believes in …', [['belief', 'إِيمَانٌ'], ['beliefs', 'مُعْتَقَدَاتٌ']], { tag: 'verb' }),
    w(8, 'يُصَلِّي', 'he prays', [['prayer', 'صَلَاةٌ'], ['worship', 'عِبَادَةٌ']], { tag: 'verb' }),
    w(9, 'الَّذِي · الَّتِي · الَّذِينَ', 'who / which (m. · f. · pl.)', [['the mosque which', 'المَسْجِدُ الَّذِي'], ['the people who', 'النَّاسُ الَّذِينَ']], { tag: 'relative' }),
    w(10, 'بِجَانِبِ · أَمَامَ', 'next to · in front of', [['inside', 'دَاخِلَ'], ['opposite', 'مُقَابِلَ']], { tag: 'preposition' }),
    w(11, 'الاحْتِرَامُ المُتَبَادَلُ', 'mutual respect', [['tolerance', 'التَّسَامُحُ'], ['coexistence', 'التَّعَايُشُ']], { tag: 'values' }),
    w(12, 'يَحْتَرِمُ', 'respects', [['I respect', 'أَحْتَرِمُ'], ['respectful (m. · f.)', 'مُحْتَرِمٌ · مُحْتَرِمَةٌ']], { tag: 'verb' }),
  ],
  words1: { eyebrow: 'Language bank · places of worship', title: 'Places and people of faith', ar: 'أَمَاكِنُ العِبَادَةِ وَأَتْبَاعُ الأَدْيَانِ', notes: 'LANGUAGE BANK (2 min) — use accurate, neutral words: مَسْجِدٌ · كَنِيسَةٌ · كَنِيسٌ · مَعْبَدٌ. Nisba for followers: مُسْلِمٌ / مُسْلِمَةٌ / مُسْلِمُونَ; مَسِيحِيٌّ · يَهُودِيٌّ · هِنْدُوسِيٌّ · سِيخِيٌّ. Teacher note: model calm, factual language — "Muslims believe …" (يُؤْمِنُ المُسْلِمُونَ بِاللّٰهِ), not opinions about other faiths.' },
  words2: { eyebrow: 'Language bank · describing with relative clauses', title: 'The place that … · the people who …', ar: 'الوَصْفُ بِالاسْمِ المَوْصُولِ', notes: 'LANGUAGE BANK (2 min) — nominal sentence: فِي حَيِّنَا كَنِيسَةٌ قَدِيمَةٌ (predicate first when the subject is indefinite). Relative clause: الكَنِيسَةُ الَّتِي بِجَانِبِ مَدْرَسَتِي · النَّاسُ الَّذِينَ يُصَلُّونَ هُنَاكَ.' },
  checkCore: 'named and located a place of worship with a preposition',
  checkDevelop: 'described it with a relative clause and used respectful, factual language',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a mosque open day', title: 'Role play A — Volunteer guide at the mosque', ar: 'يَوْمُ المَسْجِدِ المَفْتُوحُ', you: 'a young volunteer guide', them: 'a visitor from the neighbourhood',
      tasks: [
        { core: true, ex: 'صَبَاحَ الخَيْرِ! مَا اسْمُ هٰذَا المَسْجِدِ؟', task: 'Say the name of the mosque.', help: 'اسْمُهُ مَسْجِدُ …', model: 'صَبَاحَ النُّورِ! اسْمُهُ مَسْجِدُ النُّورِ.', modelEn: 'Good morning! It’s called the Al-Noor Mosque.' },
        { core: true, ex: 'هَلْ هُوَ قَدِيمٌ؟', task: 'Say when it was built.', help: 'بُنِيَ فِي سَنَةِ …', model: 'لَا، بُنِيَ فِي سَنَةِ أَلْفَيْنِ.', modelEn: 'No, it was built in 2000.' },
        { core: true, ex: 'مَاذَا يُوجَدُ دَاخِلَ المَسْجِدِ؟', task: 'Describe two things inside.', help: 'يُوجَدُ … وَ…', model: 'تُوجَدُ قَاعَةٌ كَبِيرَةٌ لِلصَّلَاةِ، وَمَكْتَبَةٌ صَغِيرَةٌ.', modelEn: 'There is a big prayer hall and a small library.' },
        { core: true, ex: 'جَمِيلٌ! أَنَا جَارُكُمْ.', task: 'Ask where the visitor lives.', help: 'أَيْنَ …؟', model: 'أَهْلًا بِكَ! أَيْنَ تَسْكُنُ؟', modelEn: 'Welcome! Where do you live?' },
        { core: true, unexpected: true, ex: 'فِي الشَّارِعِ المُقَابِلِ. كَمْ مَرَّةً يُصَلِّي المُسْلِمُونَ؟', task: 'Answer the unexpected question.', help: 'يُصَلِّي المُسْلِمُونَ … مَرَّاتٍ فِي اليَوْمِ.', model: 'يُصَلِّي المُسْلِمُونَ خَمْسَ مَرَّاتٍ فِي اليَوْمِ.', modelEn: 'Muslims pray five times a day.' },
      ],
      girl: '(a female guide uses the same answers) · بِكِ · تَسْكُنِينَ (to a female visitor)',
      notes: 'Core: ismuhu, the passive buniya fī sanati alfayni, tūjadu + indefinite nouns (nominal sentence), dākhila, a factual statement about worship (khamsa marrātin).',
    },
    {
      id: 'B', level: 'Core+', setting: 'planning a school trip', title: 'Role play B — Planning a visit to places of worship', ar: 'التَّخْطِيطُ لِزِيَارَةٍ مَدْرَسِيَّةٍ', you: 'a student', them: 'the Religious Studies teacher',
      tasks: [
        { core: true, ex: 'سَنَزُورُ ثَلَاثَةَ أَمَاكِنَ لِلْعِبَادَةِ. أَيُّ مَكَانٍ تَعْرِفُهُ؟', task: 'Name a place you know and where it is.', help: 'أَعْرِفُ … الَّتِي / الَّذِي … بِجَانِبِ …', model: 'أَعْرِفُ الكَنِيسَةَ الَّتِي بِجَانِبِ مَدْرَسَتِنَا.', modelEn: 'I know the church next to our school.' },
        { core: true, ex: 'كَيْفَ هِيَ؟', task: 'Describe it with a nominal sentence.', help: 'هِيَ … وَلَهَا …', model: 'هِيَ قَدِيمَةٌ وَجَمِيلَةٌ، وَلَهَا بُرْجٌ عَالٍ.', modelEn: 'It’s old and beautiful, with a tall tower.' },
        { ex: 'كَيْفَ نَتَصَرَّفُ بِاحْتِرَامٍ هُنَاكَ؟', task: 'Give two pieces of respectful advice.', help: 'يَنْبَغِي أَنْ … وَلَا …', model: 'يَنْبَغِي أَنْ نَتَكَلَّمَ بِهُدُوءٍ، وَلَا نُصَوِّرَ النَّاسَ الَّذِينَ يُصَلُّونَ.', modelEn: 'We should speak quietly and not photograph people who are praying.' },
        { ex: 'سَنَزُورُ أَيْضًا مَعْبَدًا لِلسِّيخِ.', task: 'ASK two questions about the temple.', help: 'هَلْ يَجِبُ أَنْ …؟ وَمَتَى …؟', model: 'هَلْ يَجِبُ أَنْ نُغَطِّيَ رُؤُوسَنَا هُنَاكَ؟ وَمَتَى سَنَصِلُ؟', modelEn: 'Do we have to cover our heads there? And when will we arrive?' },
        { unexpected: true, ex: 'نَعَمْ، فِي العَاشِرَةِ. لِمَاذَا هٰذِهِ الزِّيَارَةُ مُفِيدَةٌ؟', task: 'Answer the unexpected question (opinion + reason).', help: 'لِأَنَّنَا نَتَعَلَّمُ … ، وَ…', model: 'لِأَنَّنَا نَتَعَلَّمُ عَنْ جِيرَانِنَا، وَالمَعْرِفَةُ تَبْنِي الاحْتِرَامَ.', modelEn: 'Because we learn about our neighbours, and knowledge builds respect.' },
      ],
      girl: 'تَعْرِفِينَهُ',
      notes: 'Core+: allatī + preposition phrase (allatī bijānibi …), a nominal sentence + lahā, yanbaghī an + lā + alladhīna, the CANDIDATE asks (hal yajibu an …? matā …?), a nominal sentence as a reason (al-maʿrifatu tabnī …).',
    },
    {
      id: 'C', level: 'Develop', setting: 'an interfaith youth project', title: 'Role play C — Visiting a friend’s place of worship', ar: 'زِيَارَةُ مَكَانِ عِبَادَةِ صَدِيقِي', you: 'a Muslim student', them: 'the coordinator of an interfaith youth project',
      tasks: [
        { ex: 'حَدِّثْنَا عَنْ زِيَارَتِكَ الأُولَى لِمَكَانِ عِبَادَةٍ آخَرَ.', task: 'Narrate the visit (past + relative clause).', help: 'زُرْتُ … الَّذِي … مَعَ …', model: 'زُرْتُ الكَنِيسَ الَّذِي يُصَلِّي فِيهِ صَدِيقِي دَانِيَالُ، وَكَانَ ذٰلِكَ فِي احْتِفَالٍ بِعِيدٍ عِنْدَهُمْ.', modelEn: 'I visited the synagogue where my friend Daniel prays, during one of their festivals.' },
        { ex: 'مَاذَا رَأَيْتَ هُنَاكَ؟', task: 'Describe what you saw with prepositions.', help: 'فِي وَسَطِ … وَأَمَامَ …', model: 'فِي وَسَطِ القَاعَةِ مِنْبَرٌ لِلْقِرَاءَةِ، وَأَمَامَهُ خِزَانَةٌ فِيهَا كُتُبُ التَّوْرَاةِ.', modelEn: 'In the middle of the hall was a reading platform, and in front of it a cabinet holding the Torah scrolls.' },
        { ex: 'هَلْ لَاحَظْتَ تَشَابُهًا مَعَ المَسْجِدِ؟', task: 'Compare respectfully.', help: 'لَاحَظْتُ أَنَّ … مِثْلَ … بَيْنَمَا …', model: 'لَاحَظْتُ أَنَّ النَّاسَ يَخْلَعُونَ أَحْذِيَتَهُمْ فِي المَسْجِدِ، بَيْنَمَا يُغَطِّي الرِّجَالُ رُؤُوسَهُمْ فِي الكَنِيسِ؛ وَفِي المَكَانَيْنِ هُدُوءٌ وَاحْتِرَامٌ.', modelEn: 'People remove shoes in the mosque, while men cover their heads in the synagogue; both places are calm and respectful.' },
        { ex: 'مَا الَّذِي تَعَلَّمْتَهُ؟', task: 'Reflect with anna.', help: 'تَعَلَّمْتُ أَنَّ … لِذٰلِكَ …', model: 'تَعَلَّمْتُ أَنَّ أَسْئِلَتَنَا تُفْرِحُ الآخَرِينَ إِذَا كَانَتْ بِاحْتِرَامٍ؛ لِذٰلِكَ دَعَوْتُ دَانِيَالَ إِلَى مَسْجِدِنَا.', modelEn: 'Respectful questions make others happy — so I invited Daniel to our mosque.' },
        { unexpected: true, ex: 'كَيْفَ كَانَتْ زِيَارَتُهُ لِلْمَسْجِدِ؟', task: 'Answer the unexpected question (past + feelings).', help: 'كَانَتْ … ؛ فَقَدْ … وَ…', model: 'كَانَتْ رَائِعَةً؛ فَقَدْ شَاهَدَ صَلَاةَ الجُمُعَةِ مِنَ الخَلْفِ، وَسَأَلَ الإِمَامَ أَسْئِلَةً كَثِيرَةً، ثُمَّ أَكَلْنَا مَعًا.', modelEn: 'Wonderful: he watched Friday prayer from the back, asked the imam many questions, and then we ate together.' },
      ],
      girl: 'حَدِّثِينَا · زِيَارَتِكِ · رَأَيْتِ · لَاحَظْتِ · تَعَلَّمْتِهِ · صَدِيقَتِي (if the friend is female)',
      notes: 'Develop: alladhī yuṣallī fīhi (returning pronoun), fī wasaṭi / amāmahu + nominal sentences, baynamā for a respectful comparison, taʿallamtu anna … idhā, li-dhālika, a past sequence with fa-qad.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a radio panel', title: 'Role play D — Faith and respect in a diverse city', ar: 'الإِيمَانُ وَالاحْتِرَامُ فِي مَدِينَةٍ مُتَنَوِّعَةٍ', you: 'a young panellist', them: 'the radio presenter',
      tasks: [
        { ex: 'مَدِينَتُكُمْ مِنْ أَكْثَرِ المُدُنِ تَنَوُّعًا. كَيْفَ تَصِفُ ذٰلِكَ؟', task: 'Describe diversity factually.', help: 'فِي مَدِينَتِنَا … ؛ فَفِي شَارِعٍ وَاحِدٍ …', model: 'فِي مَدِينَتِنَا يَعِيشُ أَتْبَاعُ أَدْيَانٍ كَثِيرَةٍ؛ فَفِي شَارِعٍ وَاحِدٍ قُرْبَ بَيْتِي مَسْجِدٌ وَكَنِيسَةٌ وَمَعْبَدٌ هِنْدُوسِيٌّ.', modelEn: 'Followers of many faiths live here: on one street near my home are a mosque, a church and a Hindu temple.' },
        { ex: 'هَلْ يَعْنِي هٰذَا أَنَّ الجَمِيعَ يَتَّفِقُونَ؟', task: 'Distinguish agreement from respect.', help: 'لَا، … لَيْسَ … بَلْ …', model: 'لَا، فَالاحْتِرَامُ لَيْسَ أَنْ نَتَّفِقَ فِي كُلِّ شَيْءٍ، بَلْ أَنْ نَعْتَرِفَ بِحَقِّ الآخَرِ فِي إِيمَانِهِ، وَأَنْ نَتَعَامَلَ مَعَهُ بِأَدَبٍ.', modelEn: 'No — respect is not agreeing on everything but recognising others’ right to their faith and treating them courteously.' },
        { ex: 'أَعْطِنَا مِثَالًا عَلَى التَّعَاوُنِ.', task: 'Narrate a concrete example.', help: 'عِنْدَمَا … اجْتَمَعَ … فَـ…', model: 'عِنْدَمَا حَدَثَ فَيَضَانٌ فِي الشِّتَاءِ المَاضِي، فَتَحَتِ الكَنِيسَةُ وَالمَسْجِدُ أَبْوَابَهُمَا لِلْعَائِلَاتِ، وَطَبَخَ المُتَطَوِّعُونَ مِنْ كُلِّ الأَدْيَانِ مَعًا.', modelEn: 'When floods hit last winter, the church and the mosque opened their doors to families, and volunteers of all faiths cooked together.' },
        { ex: 'لٰكِنَّ بَعْضَ النَّاسِ يَخَافُونَ مِنَ المُخْتَلِفِ.', task: 'Concede and propose.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ … ؛ لِذٰلِكَ …', model: 'صَحِيحٌ أَنَّ الخَوْفَ طَبِيعِيٌّ، غَيْرَ أَنَّهُ يَأْتِي غَالِبًا مِنْ قِلَّةِ المَعْرِفَةِ؛ لِذٰلِكَ أَقْتَرِحُ أَنْ تَفْتَحَ كُلُّ أَمَاكِنِ العِبَادَةِ أَبْوَابَهَا لِلزُّوَّارِ مَرَّةً فِي السَّنَةِ.', modelEn: 'Fear is natural but usually comes from lack of knowledge — so I propose every place of worship opens to visitors once a year.' },
        { unexpected: true, ex: 'لَوْ طُلِبَ مِنْكَ أَنْ تَكْتُبَ رِسَالَةً وَاحِدَةً عَلَى جِدَارِ المَدِينَةِ، مَاذَا تَكْتُبُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ طُلِبَ مِنِّي ذٰلِكَ، لَكَتَبْتُ: "…"', model: 'لَوْ طُلِبَ مِنِّي ذٰلِكَ، لَكَتَبْتُ: "نَحْنُ مُخْتَلِفُونَ فِي الصَّلَاةِ، وَمُتَّفِقُونَ عَلَى الإِنْسَانِيَّةِ".', modelEn: '“We differ in how we pray, and agree on our humanity.”' },
      ],
      girl: 'تَصِفِينَ · أَعْطِينَا · مِنْكِ · تَكْتُبِينَ',
      notes: 'Stretch: min akthari al-mudun tanawwuʿan, a fronted predicate (fī shāriʿin wāḥidin masjidun …), laysa an … bal an (maṣdar clauses), a past narrative with a dual possessive (abwābahumā), a concession + aqtariḥu an, the passive ṭuliba + law … la-.',
      modelFoot: 'Stretch: factual, respectful description; respect vs agreement; a real example; a concession with a proposal; and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'أَمَاكِنُ العِبَادَةِ فِي حَيِّي', aim: 'one full sentence per question',
      qs: [
        { q: 'هَلْ يُوجَدُ مَكَانٌ لِلْعِبَادَةِ فِي حَيِّكَ؟', en: 'Is there a place of worship in your area?', start: 'نَعَمْ، فِي حَيِّي … / يُوجَدُ …', model: 'نَعَمْ، فِي حَيِّي مَسْجِدٌ كَبِيرٌ وَكَنِيسَةٌ قَدِيمَةٌ.', modelEn: 'Yes, a big mosque and an old church.' },
        { q: 'أَيْنَ يَقَعُ؟', en: 'Where is it?', start: 'يَقَعُ بِجَانِبِ / أَمَامَ …', model: 'يَقَعُ المَسْجِدُ أَمَامَ الحَدِيقَةِ.', modelEn: 'The mosque is in front of the park.' },
        { q: 'صِفْ مَكَانًا لِلْعِبَادَةِ تَعْرِفُهُ.', en: 'Describe a place of worship you know.', start: 'هُوَ … وَلَهُ …', model: 'هُوَ جَمِيلٌ وَوَاسِعٌ، وَلَهُ مِئْذَنَةٌ بَيْضَاءُ.', modelEn: 'Beautiful and spacious, with a white minaret.' },
        { q: 'مَتَى تَذْهَبُ إِلَى هُنَاكَ؟', en: 'When do you go there?', start: 'أَذْهَبُ … كُلَّ …', model: 'أَذْهَبُ إِلَى المَسْجِدِ كُلَّ يَوْمِ جُمُعَةٍ مَعَ أَبِي.', modelEn: 'Every Friday with my dad.' },
        { q: 'هَلْ زُرْتَ مَكَانَ عِبَادَةٍ لِدِينٍ آخَرَ؟', en: 'Have you visited another faith’s place of worship?', start: 'نَعَمْ، زُرْتُ … مَعَ …', model: 'نَعَمْ، زُرْتُ كَاتِدْرَائِيَّةً مَعَ المَدْرَسَةِ.', modelEn: 'Yes, a cathedral with school.' },
      ],
      foot: 'Core: one full sentence for every question — a nominal sentence or a preposition of place. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a preposition of place = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'الإِيمَانُ وَالحَيَاةُ اليَوْمِيَّةُ', aim: 'two or three sentences, with a relative clause and respectful language',
      qs: [
        { q: 'صِفْ مَكَانًا لِلْعِبَادَةِ زُرْتَهُ لِأَوَّلِ مَرَّةٍ.', en: 'Describe a place of worship you visited for the first time.', start: 'زُرْتُ … الَّذِي / الَّتِي … ؛ وَكَانَ …', model: 'زُرْتُ المَعْبَدَ الهِنْدُوسِيَّ الَّذِي فِي وَسَطِ المَدِينَةِ؛ وَكَانَ مَلِيئًا بِالأَلْوَانِ وَالزُّهُورِ، وَاسْتَقْبَلَنَا الكَاهِنُ بِلُطْفٍ.', modelEn: 'The Hindu temple in the city centre: full of colour and flowers; the priest welcomed us kindly.' },
        { q: 'مَا دَوْرُ المَسْجِدِ أَوِ الكَنِيسَةِ فِي حَيِّكَ؟', en: 'What role does the mosque or church play in your area?', start: 'لَيْسَ … فَقَطْ، بَلْ …', model: 'لَيْسَ لِلصَّلَاةِ فَقَطْ، بَلْ فِيهِ دُرُوسٌ لِلْأَطْفَالِ، وَبَنْكٌ لِلطَّعَامِ يُسَاعِدُ العَائِلَاتِ المُحْتَاجَةَ.', modelEn: 'Not only prayer: children’s classes and a food bank that helps families in need.' },
        { q: 'كَيْفَ تُظْهِرُ الاحْتِرَامَ لِأَدْيَانِ زُمَلَائِكَ؟', en: 'How do you show respect for classmates’ faiths?', start: 'أَحْتَرِمُ … ؛ مَثَلًا …', model: 'أَحْتَرِمُ أَعْيَادَهُمْ؛ مَثَلًا، أُهَنِّئُ صَدِيقِي السِّيخِيَّ بِعِيدِهِ، وَهُوَ يُهَنِّئُنِي بِرَمَضَانَ.', modelEn: 'I respect their festivals: I greet my Sikh friend on his festival, and he greets me for Ramadan.' },
        { q: 'هَلْ تَغَيَّرَتْ مَعْرِفَتُكَ بِالأَدْيَانِ الأُخْرَى؟', en: 'Has your knowledge of other faiths changed?', start: 'كُنْتُ … أَمَّا الآنَ فَـ…', model: 'كُنْتُ لَا أَعْرِفُ شَيْئًا عَنْهَا، أَمَّا الآنَ فَأَعْرِفُ الكَثِيرَ بِفَضْلِ دُرُوسِ الدِّرَاسَاتِ الدِّينِيَّةِ وَالزِّيَارَاتِ.', modelEn: 'I knew nothing; now I know a lot thanks to RS lessons and visits.' },
        { q: 'أَيُّ مَكَانٍ دِينِيٍّ تُرِيدُ أَنْ تَزُورَ فِي المُسْتَقْبَلِ؟', en: 'Which religious site would you like to visit in future?', start: 'أَتَمَنَّى أَنْ أَزُورَ … لِأَنَّ …', model: 'أَتَمَنَّى أَنْ أَزُورَ المَسْجِدَ الأَقْصَى فِي القُدْسِ، لِأَنَّهُ مِنْ أَقْدَسِ الأَمَاكِنِ عِنْدَ المُسْلِمِينَ، وَلِأَنَّ المَدِينَةَ مُقَدَّسَةٌ لِأَدْيَانٍ ثَلَاثَةٍ.', modelEn: 'Al-Aqsa Mosque in Jerusalem — among Islam’s holiest sites, in a city sacred to three faiths.' },
      ],
      foot: 'Develop: two or three sentences — a relative clause, an example and calm, factual language.',
      modelFoot: 'Relative clause + example + respectful wording = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الأَدْيَانُ وَالمُجْتَمَعُ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'لِمَاذَا مِنَ المُهِمِّ أَنْ نَتَعَلَّمَ عَنْ أَدْيَانٍ غَيْرِ دِينِنَا؟', en: 'Why is it important to learn about faiths other than our own?', start: 'إِنَّ المَعْرِفَةَ … ؛ فَإِذَا … فَـ…', model: 'إِنَّ المَعْرِفَةَ أَسَاسُ الاحْتِرَامِ؛ فَإِذَا فَهِمْتُ لِمَاذَا يَصُومُ جَارِي أَوْ يُصَلِّي، فَلَنْ أَحْكُمَ عَلَيْهِ مِنْ خِلَالِ الصُّوَرِ النَّمَطِيَّةِ.', modelEn: 'Knowledge is the basis of respect: if I understand why my neighbour fasts or prays, I won’t judge through stereotypes.' },
        { q: 'هَلْ مَا زَالَ لِأَمَاكِنِ العِبَادَةِ دَوْرٌ فِي حَيَاةِ الشَّبَابِ؟', en: 'Do places of worship still play a role in young people’s lives?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، يَقْضِي الشَّبَابُ وَقْتًا أَطْوَلَ عَلَى الإِنْتَرْنِتِ، وَمِنْ نَاحِيَةٍ أُخْرَى، تُقَدِّمُ أَمَاكِنُ العِبَادَةِ نَوَادِيَ وَأَنْشِطَةً تَطَوُّعِيَّةً تَجْذِبُهُمْ وَتَمْنَحُهُمْ مُجْتَمَعًا حَقِيقِيًّا.', modelEn: 'Youth spend more time online, yet places of worship offer clubs and volunteering that attract them and give a real community.' },
        { q: 'كَيْفَ كَانَ جِيلُ أَجْدَادِكَ يَنْظُرُ إِلَى الأَدْيَانِ الأُخْرَى؟', en: 'How did your grandparents’ generation see other faiths?', start: 'كَانَ … أَمَّا جِيلُنَا فَـ…', model: 'كَانَ أَجْدَادِي يَعِيشُونَ فِي قَرْيَةٍ كُلُّ سُكَّانِهَا مُسْلِمُونَ، أَمَّا جِيلُنَا فَيَدْرُسُ وَيَلْعَبُ مَعَ أَتْبَاعِ أَدْيَانٍ كَثِيرَةٍ، مِمَّا يَجْعَلُ الاحْتِرَامَ جُزْءًا مِنْ حَيَاتِنَا اليَوْمِيَّةِ.', modelEn: 'My grandparents lived in an all-Muslim village; our generation studies and plays with many faiths, making respect part of daily life.' },
        { q: 'هَلْ يَجِبُ أَنْ تَحْتَرِمَ المَدَارِسُ المُنَاسَبَاتِ الدِّينِيَّةَ لِلطُّلَّابِ؟', en: 'Should schools respect students’ religious occasions?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ المَدْرَسَةَ لَا تَسْتَطِيعُ أَنْ تُعْطِيَ عُطْلَةً لِكُلِّ عِيدٍ، غَيْرَ أَنَّهَا تَسْتَطِيعُ أَلَّا تَضَعَ الامْتِحَانَاتِ فِي الأَعْيَادِ الكُبْرَى، وَأَنْ تُوَفِّرَ غُرْفَةً لِلصَّلَاةِ.', modelEn: 'A school can’t give a holiday for every festival, but it can avoid exams on major festivals and provide a prayer room.' },
        { q: 'لَوْ صَمَّمْتَ مَكَانًا يَجْمَعُ النَّاسَ مِنْ كُلِّ الأَدْيَانِ، كَيْفَ يَكُونُ؟', en: 'If you designed a place bringing together people of all faiths, what would it be like?', start: 'لَوْ صَمَّمْتُهُ، لَجَعَلْتُ …', model: 'لَوْ صَمَّمْتُهُ، لَجَعَلْتُهُ حَدِيقَةً كَبِيرَةً فِيهَا مَكْتَبَةٌ وَمَطْبَخٌ مُشْتَرَكٌ، لِأَنَّ النَّاسَ يَتَعَارَفُونَ حِينَ يَقْرَؤُونَ وَيَأْكُلُونَ مَعًا.', modelEn: 'A big garden with a library and a shared kitchen — people get to know each other when they read and eat together.' },
      ],
      foot: 'Stretch: inna + idhā … fa-lan, a balanced view, kāna … ammā … fa- with mimmā, a concession and law … la-.',
      modelFoot: 'Stretch: factual, respectful language with inna, mimmā, allā + subjunctive and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I named and located a place of worship.' },
    { route: 'core', text: 'I used a nominal sentence (fī ḥayyī masjidun …).' },
    { route: 'develop', text: 'I used alladhī / allatī / alladhīna correctly.' },
    { route: 'develop', text: 'I used calm, factual language about other faiths.' },
    { route: 'stretch', text: 'I discussed respect with laysa … bal and law … la-.' },
  ],
};
speak.RP[2].tasks[0].help = 'زُرْتُ … الَّذِي يُصَلِّي فِيهِ … ، وَكَانَ …';
speak.RP[2].tasks[4].help = 'كَانَتْ … ؛ فَقَدْ شَاهَدَ … وَسَأَلَ …';
speak.RP[3].tasks[2].help = 'عِنْدَمَا … فَتَحَتِ … وَطَبَخَ …';
speak.RP[3].tasks[4].help = 'لَوْ طُلِبَ مِنِّي ذٰلِكَ، لَكَتَبْتُ: "…"';
speak.CONV[1].qs[3].start = 'كُنْتُ … أَمَّا الآنَ فَأَعْرِفُ …';
speak.CONV[2].qs[0].start = 'إِنَّ المَعْرِفَةَ … ؛ فَإِذَا … فَلَنْ …';
speak.CONV[2].qs[2].start = 'كَانَ أَجْدَادِي … أَمَّا جِيلُنَا فَيَدْرُسُ …';
speak.CONV[2].qs[4].start = 'لَوْ صَمَّمْتُهُ، لَجَعَلْتُهُ …';

const Q2_CORE = `مَرْحَبًا يَا سَامِي،
كَيْفَ حَالُكَ؟ أَمْسِ زُرْنَا مَعَ المَدْرَسَةِ ثَلَاثَةَ أَمَاكِنَ لِلْعِبَادَةِ فِي مَدِينَتِنَا. أَوَّلًا، زُرْنَا الكَاتِدْرَائِيَّةَ الَّتِي فِي وَسَطِ المَدِينَةِ. هِيَ قَدِيمَةٌ جِدًّا، وَلَهَا نَوَافِذُ مُلَوَّنَةٌ جَمِيلَةٌ. ثُمَّ زُرْنَا مَعْبَدًا لِلسِّيخِ، وَهُنَاكَ غَطَّيْنَا رُؤُوسَنَا وَأَكَلْنَا طَعَامًا مَجَّانِيًّا مَعَ النَّاسِ. أَخِيرًا، زُرْنَا مَسْجِدَنَا، وَشَرَحْتُ لِزُمَلَائِي كَيْفَ يُصَلِّي المُسْلِمُونَ. تَعَلَّمْتُ أَنَّ كُلَّ الأَمَاكِنِ تُرَحِّبُ بِالزُّوَّارِ. أَظُنُّ أَنَّ الزِّيَارَةَ كَانَتْ مُفِيدَةً جِدًّا، لِأَنَّنَا فَهِمْنَا جِيرَانَنَا أَكْثَرَ. فِي الشَّهْرِ القَادِمِ سَنَزُورُ كَنِيسًا. وَأَنْتَ، هَلْ زُرْتَ مَكَانًا مِثْلَهُ؟
مَعَ السَّلَامَةِ،
يُوسُفُ`;
const Q2_FULL = `عَزِيزِي سَامِي،
عُدْتُ أَمْسِ مِنْ رِحْلَةٍ مَدْرَسِيَّةٍ لَنْ أَنْسَاهَا؛ فَقَدْ زُرْنَا ثَلَاثَةَ أَمَاكِنَ لِلْعِبَادَةِ فِي يَوْمٍ وَاحِدٍ. بَدَأْنَا بِالكَاتِدْرَائِيَّةِ الَّتِي يَزِيدُ عُمْرُهَا عَلَى ثَمَانِمِئَةِ سَنَةٍ، وَأَدْهَشَتْنِي نَوَافِذُهَا المُلَوَّنَةُ الَّتِي تَحْكِي قِصَصَ الأَنْبِيَاءِ. ثُمَّ انْتَقَلْنَا إِلَى مَعْبَدِ السِّيخِ، حَيْثُ يَأْكُلُ الزُّوَّارُ مِنْ كُلِّ الأَدْيَانِ طَعَامًا مَجَّانِيًّا جَالِسِينَ عَلَى الأَرْضِ جَنْبًا إِلَى جَنْبٍ. وَخَتَمْنَا بِمَسْجِدِنَا، فَشَرَحْتُ لِزُمَلَائِي مَعْنَى الأَذَانِ. وَأَكْثَرُ مَا أَثَّرَ فِيَّ أَنَّ كُلَّ مَكَانٍ يُعَبِّرُ عَنِ الإِيمَانِ بِطَرِيقَتِهِ، غَيْرَ أَنَّ الكَرَمَ وَالهُدُوءَ يَجْمَعُ بَيْنَهَا. وَإِذَا سَمَحَ المُعَلِّمُ، فَسَنَزُورُ كَنِيسًا الشَّهْرَ القَادِمَ. هَلْ تُحِبُّ أَنْ تَنْضَمَّ إِلَيْنَا؟
مَعَ تَحِيَّاتِي،
يُوسُفُ`;
const Q3A_CORE = `أَسْكُنُ فِي مَدِينَةِ لِيسْتَرَ فِي وَسَطِ إِنْجِلْتِرَا. هِيَ مَدِينَةٌ مُتَنَوِّعَةٌ، وَفِيهَا أَتْبَاعُ أَدْيَانٍ كَثِيرَةٍ: مُسْلِمُونَ وَمَسِيحِيُّونَ وَهِنْدُوسٌ وَسِيخٌ وَيَهُودٌ.
فِي حَيِّي مَسْجِدٌ كَبِيرٌ اسْمُهُ مَسْجِدُ النُّورِ. يَقَعُ المَسْجِدُ أَمَامَ الحَدِيقَةِ، بِجَانِبِ مَكْتَبَةِ الحَيِّ. لَهُ مِئْذَنَةٌ عَالِيَةٌ وَقُبَّةٌ خَضْرَاءُ. دَاخِلَ المَسْجِدِ قَاعَةٌ وَاسِعَةٌ لِلصَّلَاةِ، وَمَكْتَبَةٌ، وَصُفُوفٌ لِتَعْلِيمِ العَرَبِيَّةِ وَالقُرْآنِ لِلْأَطْفَالِ.
أَذْهَبُ إِلَى المَسْجِدِ كُلَّ يَوْمِ جُمُعَةٍ مَعَ أَبِي. المَسْجِدُ لَيْسَ لِلصَّلَاةِ فَقَطْ؛ مَثَلًا، فِيهِ بَنْكٌ لِلطَّعَامِ يُسَاعِدُ العَائِلَاتِ الَّتِي تَحْتَاجُ إِلَى مُسَاعَدَةٍ. فِي السَّنَةِ المَاضِيَةِ تَطَوَّعْتُ هُنَاكَ كُلَّ يَوْمِ سَبْتٍ، وَكُنْتُ أُرَتِّبُ الطَّعَامَ فِي الصَّنَادِيقِ.
مُقَابِلَ المَسْجِدِ كَنِيسَةٌ قَدِيمَةٌ، وَالنَّاسُ الَّذِينَ يُصَلُّونَ فِيهَا جِيرَانٌ طَيِّبُونَ. أَحْتَرِمُ كُلَّ الأَدْيَانِ، لِأَنَّ الاحْتِرَامَ مُهِمٌّ فِي مَدِينَةٍ مِثْلِ مَدِينَتِي. فِي المُسْتَقْبَلِ سَأَزُورُ الكَنِيسَةَ مَعَ صَدِيقِي جَيْمْسَ، وَهُوَ سَيَزُورُ مَسْجِدَنَا أَيْضًا.`;
const Q3A_FULL = `حِينَ أَخْرُجُ مِنْ بَيْتِي فِي لِيسْتَرَ، أَسْمَعُ الأَذَانَ مِنْ مَسْجِدِ النُّورِ، وَبَعْدَ دَقَائِقَ تَرِنُّ أَجْرَاسُ الكَنِيسَةِ القَدِيمَةِ الَّتِي تَقَعُ مُقَابِلَهُ. هٰذَا هُوَ الصَّوْتُ الَّذِي نَشَأْتُ عَلَيْهِ، وَالَّذِي يُشْعِرُنِي بِأَنَّنِي فِي بَيْتِي.
وَمَسْجِدُ النُّورِ لَيْسَ مُجَرَّدَ بِنَاءٍ جَمِيلٍ بِمِئْذَنَةٍ عَالِيَةٍ وَقُبَّةٍ خَضْرَاءَ، بَلْ هُوَ قَلْبُ الحَيِّ؛ فَفِيهِ صُفُوفٌ لِلْأَطْفَالِ، وَعِيَادَةٌ مَجَّانِيَّةٌ مَرَّةً فِي الشَّهْرِ، وَبَنْكٌ لِلطَّعَامِ يَخْدُمُ النَّاسَ مِنْ كُلِّ الأَدْيَانِ دُونَ أَنْ يَسْأَلَهُمْ عَنْ دِينِهِمْ أَوْ أَصْلِهِمْ.
وَقَدْ تَطَوَّعْتُ فِي هٰذَا البَنْكِ عَامًا كَامِلًا، فَتَعَرَّفْتُ عَلَى جَارَتِنَا العَجُوزِ مَارِي، وَهِيَ مَسِيحِيَّةٌ تَأْتِي كُلَّ أُسْبُوعٍ لِتُسَاعِدَ فِي تَوْزِيعِ الطَّعَامِ. وَمِنْهَا تَعَلَّمْتُ أَنَّ الإِيمَانَ الحَقِيقِيَّ يَظْهَرُ فِي الأَفْعَالِ أَكْثَرَ مِنَ الكَلِمَاتِ، وَفِي الابْتِسَامَةِ أَكْثَرَ مِنَ الخُطَبِ.
صَحِيحٌ أَنَّ لِكُلِّ دِينٍ مُعْتَقَدَاتِهِ وَطُقُوسَهُ، غَيْرَ أَنَّ الاحْتِرَامَ المُتَبَادَلَ يَجْعَلُ حَيَّنَا مَكَانًا آمِنًا وَدَافِئًا لِلْجَمِيعِ. وَلَوْ سَأَلَنِي زَائِرٌ عَنْ سِرِّ هٰذَا الحَيِّ، لَقُلْتُ لَهُ: "اسْتَمِعْ إِلَى الأَذَانِ وَالأَجْرَاسِ مَعًا".`;
const Q3B_FULL = `تَعِيشُ فِي مُدُنِنَا اليَوْمَ عَائِلَاتٌ مِنْ أَدْيَانٍ مُخْتَلِفَةٍ فِي الشَّارِعِ نَفْسِهِ، وَيَدْرُسُ أَبْنَاؤُهَا فِي الصَّفِّ نَفْسِهِ. فَكَيْفَ نَبْنِي احْتِرَامًا حَقِيقِيًّا بَيْنَ أَتْبَاعِ هٰذِهِ الأَدْيَانِ؟
أَوَّلًا، إِنَّ المَعْرِفَةَ أَسَاسُ الاحْتِرَامِ؛ فَالخَوْفُ مِنَ الآخَرِ يَأْتِي غَالِبًا مِنَ الجَهْلِ بِهِ. لِذٰلِكَ أَرَى أَنَّ دُرُوسَ الدِّرَاسَاتِ الدِّينِيَّةِ وَزِيَارَاتِ أَمَاكِنِ العِبَادَةِ مُهِمَّةٌ جِدًّا لِلطُّلَّابِ، لِأَنَّهَا تُحَوِّلُ الغَرِيبَ إِلَى جَارٍ مَعْرُوفٍ. ثَانِيًا، لَا يَعْنِي الاحْتِرَامُ أَنْ نَتَّفِقَ فِي كُلِّ شَيْءٍ، بَلْ أَنْ نَعْتَرِفَ بِحَقِّ كُلِّ إِنْسَانٍ فِي إِيمَانِهِ.
وَقَدْ رَأَيْتُ ذٰلِكَ عِنْدَمَا نَظَّمَتْ مَدْرَسَتِي "أُسْبُوعَ الأَدْيَانِ"؛ فَقَدَّمَ كُلُّ طَالِبٍ عِيدًا مِنْ أَعْيَادِ دِينِهِ، وَتَذَوَّقْنَا حَلَوِيَّاتٍ مِنْ ثَقَافَاتٍ كَثِيرَةٍ، وَطَرَحْنَا أَسْئِلَةً بِأَدَبٍ وَفُضُولٍ. وَبَعْدَ ذٰلِكَ الأُسْبُوعِ، قَلَّتِ التَّعْلِيقَاتُ السَّلْبِيَّةُ فِي المَدْرَسَةِ بِشَكْلٍ وَاضِحٍ، وَزَادَتِ الصَّدَاقَاتُ.
صَحِيحٌ أَنَّ بِنَاءَ الثِّقَةِ يَحْتَاجُ إِلَى وَقْتٍ، غَيْرَ أَنَّ كُلَّ خُطْوَةٍ صَغِيرَةٍ تَصْنَعُ فَرْقًا. وَإِذَا تَعَلَّمَ الأَطْفَالُ الاحْتِرَامَ فِي المَدْرَسَةِ، فَسَيَنْقُلُونَهُ إِلَى بُيُوتِهِمْ وَمُجْتَمَعَاتِهِمْ فِي المُسْتَقْبَلِ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a form for a school interfaith-visit programme, write an email about visiting three places of worship, and write an extended piece about a place of worship in your area or about building respect between people of different faiths — always in calm, factual language.',
  lift: [
    { ar: 'زُرْنَا الكَاتِدْرَائِيَّةَ الَّتِي فِي وَسَطِ المَدِينَةِ', en: 'we visited the cathedral in the city centre' },
    { ar: 'فِي حَيِّي مَسْجِدٌ كَبِيرٌ، يَقَعُ أَمَامَ الحَدِيقَةِ', en: 'in my area there is a big mosque, in front of the park' },
    { ar: 'تَعَلَّمْتُ أَنَّ كُلَّ الأَمَاكِنِ تُرَحِّبُ بِالزُّوَّارِ', en: 'I learnt that all the places welcome visitors' },
  ],
  checkTip: 'Check relative pronouns and agreement: alladhī for masculine nouns (al-masjid, al-kanīs, al-maʿbad), allatī for feminine nouns and non-human plurals (al-kanīsa, al-amākin), alladhīna for people; with an indefinite subject put the place first (fī ḥayyī masjidun); use neutral verbs (yuʾminu, yuṣallī, yaḥtarimu) and nisba plurals (muslimūna, masīḥiyyūna).',
  FORM: {
    title: 'Interfaith-visit programme form', ar: 'اسْتِمَارَةُ بَرْنَامَجِ زِيَارَةِ أَمَاكِنِ العِبَادَةِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'يُوسُفُ عُثْمَانُ', modelEn: 'Yusuf Osman' },
      { core: true, ar: 'المَدْرَسَةُ', en: 'School', model: 'مَدْرَسَةُ لِيسْتَرَ الثَّانَوِيَّةُ', modelEn: 'Leicester Secondary School' },
      { core: true, ar: 'المَدِينَةُ', en: 'City', model: 'لِيسْتَرُ', modelEn: 'Leicester' },
      { core: true, ar: 'مَكَانُ عِبَادَةٍ قُرْبَ بَيْتِكَ', en: 'A place of worship near your home', model: 'مَسْجِدُ النُّورِ', modelEn: 'Al-Noor Mosque' },
      { core: true, ar: 'مَكَانٌ تُرِيدُ زِيَارَتَهُ', en: 'A place you want to visit', model: 'كَنِيسُ المَدِينَةِ', modelEn: 'the city synagogue' },
      { core: true, ar: 'اللُّغَاتُ', en: 'Languages', model: 'الإِنْجْلِيزِيَّةُ وَالعَرَبِيَّةُ وَالصُّومَالِيَّةُ', modelEn: 'English, Arabic and Somali' },
      { ar: 'سُؤَالٌ تُرِيدُ أَنْ تَسْأَلَهُ', en: 'A question you want to ask', model: 'مَا أَهَمُّ عِيدٍ عِنْدَكُمْ؟', modelEn: 'What is your most important festival?' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُرِيدُ المُشَارَكَةَ؟', en: 'ONE sentence: why you want to take part', model: 'أُرِيدُ أَنْ أَفْهَمَ جِيرَانِي الَّذِينَ يَعِيشُونَ فِي حَيِّي.', modelEn: 'I want to understand the neighbours who live in my area.' },
    ],
    foot: 'One word or a short phrase for each box — box 7 is a polite question; the last box is a full sentence with a relative clause.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 8: alladhīna for people. Teacher note: discuss why box 7 must be a respectful, open question.',
  },
  Q2: {
    short: 'an email about visiting places of worship', title: 'Question 2: our visit to three places of worship', ar: 'زِيَارَةُ أَمَاكِنِ العِبَادَةِ',
    task: 'Write an email in Arabic to a friend of about 80–90 words. You must include: • the visit and where you went • a description of one place (with a relative clause) • what you learnt • your opinion, your next visit, and a question for your friend.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'One relative clause.', 'Past, present AND future.', 'About 80–90 words.'],
    phrases: [['زُرْنَا مَعَ المَدْرَسَةِ …', 'we visited with school …'], ['… الَّتِي فِي وَسَطِ المَدِينَةِ', '… which is in the city centre'], ['تَعَلَّمْتُ أَنَّ …', 'I learnt that …'], ['فِي الشَّهْرِ القَادِمِ سَنَزُورُ …', 'next month we will visit …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنْ زِيَارَةِ أَمَاكِنِ العِبَادَةِ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about visiting places of worship (80–90 words).'],
      ['1', 'أَيْنَ ذَهَبْتُمْ؟', 'Where you went'],
      ['2', 'صِفْ مَكَانًا مِنْهَا.', 'Describe one of the places'],
      ['3', 'مَاذَا تَعَلَّمْتَ؟', 'What you learnt'],
      ['4', 'مَا رَأْيُكَ؟ وَمَاذَا سَتَزُورُونَ بَعْدَ ذٰلِكَ؟ وَاسْأَلْ صَدِيقَكَ سُؤَالًا.', 'Your opinion; your next visit; a question'],
    ],
    qwords: 'أَيْنَ ذَهَبْتُمْ (where did you go — PAST) · صِفْ (describe!) · تَعَلَّمْتَ (you learnt) · سَتَزُورُونَ (you will visit — FUTURE)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', 'Hello …, how are you?'],
      ['1', 'زُرْنَا مَعَ المَدْرَسَةِ ______ .', 'With school we visited …'],
      ['2', 'زُرْنَا ______ الَّتِي ______ . هِيَ ______ .', 'We visited … which … It is …'],
      ['3', 'تَعَلَّمْتُ أَنَّ ______ .', 'I learnt that …'],
      ['4', 'أَظُنُّ أَنَّ ______ . سَنَزُورُ ______ .', 'I think … We’ll visit …'],
      ['end', 'وَأَنْتَ، ______ ؟ مَعَ السَّلَامَةِ.', 'And you, …? Goodbye.'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Sami, how are you? Yesterday we visited three places of worship in our city with school. First, the cathedral in the city centre: it’s very old, with beautiful coloured windows. Then a Sikh temple, where we covered our heads and ate a free meal with the people. Finally our mosque, where I explained to my classmates how Muslims pray. I learnt that all the places welcome visitors. I think the visit was very useful, because we understood our neighbours better. Next month we’ll visit a synagogue. And you, have you visited a place like this? Goodbye, Yusuf.”',
      find: ['الَّتِي فِي وَسَطِ المَدِينَةِ', 'وَلَهَا نَوَافِذُ', 'تَعَلَّمْتُ أَنَّ', 'سَنَزُورُ كَنِيسًا'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Sami, I came back yesterday from a school trip I won’t forget: we visited three places of worship in one day. We began with the cathedral, over eight hundred years old, and I was amazed by its coloured windows that tell the stories of the prophets. Then the Sikh temple, where visitors of all faiths eat a free meal sitting side by side on the floor. We ended at our mosque, and I explained the meaning of the call to prayer. What struck me most is that each place expresses faith in its own way, yet generosity and calm unite them. If the teacher allows, we’ll visit a synagogue next month. Would you like to join us? Best wishes, Yusuf.”',
      find: ['لَنْ أَنْسَاهَا', 'يَزِيدُ عُمْرُهَا عَلَى', 'جَالِسِينَ … جَنْبًا إِلَى جَنْبٍ', 'إِذَا سَمَحَ … فَسَنَزُورُ'],
    },
  },
  Q3: {
    a: { title: 'مَكَانٌ لِلْعِبَادَةِ فِي حَيِّي', en: 'A place of worship in my area', bullets: 'مَدِينَتُكَ وَأَدْيَانُ سُكَّانِهَا · وَصْفُ المَكَانِ وَمَوْقِعُهُ · مَاذَا يَحْدُثُ هُنَاكَ (مَعَ مِثَالٍ) · الاحْتِرَامُ بَيْنَ الجِيرَانِ وَخُطَطُكَ', bulletsEn: 'Your town and its faiths · the place and its location · what happens there (with an example) · respect between neighbours and your plans' },
    b: { title: 'كَيْفَ نَبْنِي الاحْتِرَامَ بَيْنَ أَتْبَاعِ الأَدْيَانِ؟', en: 'How do we build respect between people of different faiths?', bullets: 'المَوْضُوعُ · دَوْرُ المَعْرِفَةِ · مِثَالٌ مِنْ تَجْرِبَتِكَ · رَأْيُكَ', bulletsEn: 'The issue · the role of knowledge · an example from your experience · your opinion' },
    plan: [
      'My town — askunu fī … ; hiya madīnatun mutanawwiʿatun, wa-fīhā atbāʿu adyānin kathīratin',
      'The place — fī ḥayyī masjidun …; yaqaʿu amāma … bijānibi …; dākhila al-masjidi …',
      'What happens — adhhabu …; al-masjidu laysa li-ṣ-ṣalāti faqaṭ; mathalan … allatī …',
      'Respect + future — muqābila … kanīsatun …, wa-n-nāsu alladhīna …; aḥtarimu … li-anna …; sa-azūru …; Stretch: laysa mujarrada … bal, law … la-.',
    ],
    frames: [
      { ar: 'فِي حَيِّي مَسْجِدٌ كَبِيرٌ أَمَامَ الحَدِيقَةِ.', en: 'nominal: a big mosque in front of the park.' },
      { ar: 'النَّاسُ الَّذِينَ يُصَلُّونَ فِيهَا طَيِّبُونَ.', en: 'relative: the people who pray there are kind.' },
      { ar: 'سَأَزُورُ الكَنِيسَةَ مَعَ صَدِيقِي.', en: 'future: I’ll visit the church with a friend.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Leicester is diverse: Muslims, Christians, Hindus, Sikhs and Jews → Al-Noor Mosque in my area is opposite the park, next to the library: a minaret, a green dome, a prayer hall, a library, Arabic classes → I go every Friday; its food bank helps families, and I volunteered there last year → the church opposite has kind neighbours; I respect all faiths and will visit the church with James.', find: ['فِي حَيِّي مَسْجِدٌ', 'أَمَامَ الحَدِيقَةِ، بِجَانِبِ', 'الَّتِي تَحْتَاجُ', 'النَّاسُ الَّذِينَ'], notes: 'Core model: nominal sentences with a fronted place (fī ḥayyī masjidun, dākhila al-masjidi qāʿatun), prepositions (amāma, bijānibi, muqābila), three relative pronouns (allatī, alladhīna), nisba plurals and calm, factual verbs.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Leaving home in Leicester I hear the call to prayer from Al-Noor Mosque, then the bells of the old church opposite — the sound I grew up with, which makes me feel at home → the mosque is not just a fine building with a minaret and green dome but the heart of the area: children’s classes, a monthly free clinic and a food bank serving people of all faiths without asking about their religion or origin → I volunteered there a whole year and got to know our elderly neighbour Mary, a Christian who comes weekly to help hand out food; from her I learnt true faith shows in deeds more than words, and in smiles more than speeches → each faith has its beliefs and rituals, but mutual respect makes our area safe and warm for all; “if a visitor asked our secret, I’d say: listen to the call to prayer and the bells together”.', find: ['الَّتِي تَقَعُ مُقَابِلَهُ', 'لَيْسَ مُجَرَّدَ … بَلْ', 'دُونَ أَنْ يَسْأَلَهُمْ', 'لَوْ سَأَلَنِي … لَقُلْتُ'], notes: 'Full-mark model: a sound-based hook, relative clauses with returning pronouns (muqābilahu, nashaʾtu ʿalayhi), laysa mujarrada … bal, a fronted predicate (fa-fīhi ṣufūfun …), dūna an, a ḥāl-like description of Mary, akthar min, a concession and law … la- with an imperative.' },
      { which: 'ب', level: 'Full', subtitle: 'building respect between faiths', text: Q3B_FULL, en: 'Families of different faiths now live on the same street and their children study in the same class — how do we build real respect? → first, knowledge is the basis of respect: fear of others usually comes from ignorance, so RS lessons and visits to places of worship matter, turning a stranger into a known neighbour; second, respect doesn’t mean agreeing on everything but recognising everyone’s right to their faith → I saw this when my school held a “Faiths Week”: each student presented a festival of their faith and we tasted sweets from many cultures, asking questions politely and curiously; afterwards negative comments clearly decreased and friendships grew → building trust takes time, but every small step makes a difference; “if children learn respect at school, they will carry it to their homes and communities in future”.', find: ['إِنَّ المَعْرِفَةَ أَسَاسُ', 'لَا يَعْنِي … أَنْ … بَلْ أَنْ', 'قَلَّتِ التَّعْلِيقَاتُ', 'إِذَا تَعَلَّمَ … فَسَيَنْقُلُونَهُ'], notes: 'Full-mark model for the Stretch title: a verb–subject opening (taʿīshu … ʿāʾilātun), a rhetorical question, awwalan / thāniyan, inna + nominal sentence, al-jahlu bihi, lā yaʿnī … an … bal an, a narrated example with a measurable result and idhā … fa-sa-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic, with a respectful question in box 7.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: a relative clause and a nominal sentence.' },
    { route: 'develop', text: 'Q3: prepositions of place and calm, factual language.' },
    { route: 'stretch', text: 'Q3: laysa … bal, a concession and a conditional.' },
  ],
};

module.exports = { speak, write };
