'use strict';
/* Exam-practice data · TC-L02 · Landscapes, Nature and Animals (adjective agreement; non-human plurals; describing settings). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'C', n: 2, short: 'Landscapes, Nature and Animals', arShort: 'الطَّبِيعَةُ وَالحَيَوَانَاتُ', fileTitle: 'Landscapes_Nature_Animals', title: 'Landscapes, Nature and Animals', ar: 'المَنَاظِرُ الطَّبِيعِيَّةُ وَالحَيَوَانَاتُ', icon: 'FaLeaf', grammar: 'adjective agreement; non-human plurals (al-jibālu ʿāliya); relative clauses for habitats' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: describe landscapes and wildlife — mountains, deserts, forests, rivers — with adjectives that agree, say where animals live (allatī taʿīshu fī …) and why nature matters.',
  words: [
    w(1, 'جَبَلٌ', 'a mountain', [['sg.', 'جَبَلٌ'], ['pl.', 'جِبَالٌ'], ['high', 'جِبَالٌ عَالِيَةٌ']]),
    w(2, 'صَحْرَاءُ', 'a desert', [['sg.', 'صَحْرَاءُ'], ['pl.', 'صَحَارٍ'], ['vast', 'صَحْرَاءُ وَاسِعَةٌ']]),
    w(3, 'غَابَةٌ', 'a forest', [['sg.', 'غَابَةٌ'], ['pl.', 'غَابَاتٌ'], ['tropical', 'غَابَةٌ اسْتِوَائِيَّةٌ']]),
    w(4, 'نَهْرٌ · بُحَيْرَةٌ', 'a river · a lake', [['pl.', 'أَنْهَارٌ · بُحَيْرَاتٌ']]),
    w(5, 'وَادٍ', 'a valley', [['the', 'الوَادِي'], ['pl.', 'وِدْيَانٌ']]),
    w(6, 'شَاطِئٌ · سَاحِلٌ', 'a beach · a coast', [['pl.', 'شَوَاطِئُ · سَوَاحِلُ']]),
    w(7, 'حَيَوَانٌ', 'an animal', [['sg.', 'حَيَوَانٌ'], ['pl.', 'حَيَوَانَاتٌ'], ['wild', 'حَيَوَانَاتٌ بَرِّيَّةٌ']]),
    w(8, 'طَائِرٌ', 'a bird', [['sg.', 'طَائِرٌ'], ['pl.', 'طُيُورٌ'], ['rare', 'طُيُورٌ نَادِرَةٌ']]),
    w(9, 'يَعِيشُ فِي …', 'lives in …', [['f. / non-hum. pl.', 'تَعِيشُ'], ['they (people)', 'يَعِيشُونَ']], { tag: 'habitat' }),
    w(10, 'جَمِيلٌ · خَلَّابٌ', 'beautiful · stunning', [['f.', 'جَمِيلَةٌ · خَلَّابَةٌ']]),
    w(11, 'نَادِرٌ · مُهَدَّدٌ', 'rare · endangered', [['f.', 'نَادِرَةٌ · مُهَدَّدَةٌ'], ['endangered', 'مُهَدَّدٌ بِالانْقِرَاضِ']]),
    w(12, 'نِظَامٌ بِيئِيٌّ', 'an ecosystem', [['pl.', 'أَنْظِمَةٌ بِيئِيَّةٌ'], ['the environment', 'البِيئَةُ']]),
  ],
  words1: { eyebrow: 'Language bank · landscapes (sg. · pl. · with an adjective)', title: 'Mountains, deserts and rivers', ar: 'المَنَاظِرُ الطَّبِيعِيَّةُ', notes: 'LANGUAGE BANK (2 min) — non-human plurals take the feminine singular: جِبَالٌ عَالِيَةٌ · غَابَاتٌ كَثِيفَةٌ. صَحْرَاءُ is feminine and has no tanwīn. وَادٍ → الوَادِي (al- restores the yāʾ).' },
  words2: { eyebrow: 'Language bank · animals and habitats', title: 'Who lives where?', ar: 'أَيْنَ تَعِيشُ الحَيَوَانَاتُ؟', notes: 'LANGUAGE BANK (2 min) — the verb agrees too: يَعِيشُ الجَمَلُ فِي الصَّحْرَاءِ · تَعِيشُ الطُّيُورُ فِي الغَابَةِ (non-human pl. → f. sg.). Relative: الحَيَوَانَاتُ الَّتِي تَعِيشُ فِي القُطْبِ.' },
  checkCore: 'described a landscape with adjectives that agree',
  checkDevelop: 'used non-human plural agreement and a relative clause (allatī / alladhī)',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a national park', title: 'Role play A — At the national-park visitor centre', ar: 'فِي الحَدِيقَةِ الوَطَنِيَّةِ', you: 'a visitor', them: 'the park ranger',
      tasks: [
        { core: true, ex: 'أَهْلًا! مَاذَا تُرِيدُ أَنْ تَرَى؟', task: 'Say what you want to see.', help: 'أُرِيدُ أَنْ أَرَى …', model: 'أُرِيدُ أَنْ أَرَى الجِبَالَ وَالبُحَيْرَةَ الكَبِيرَةَ.', modelEn: 'I want to see the mountains and the big lake.' },
        { core: true, ex: 'هَلْ تُحِبُّ الطَّبِيعَةَ؟', task: 'Say what nature you like and why.', help: 'نَعَمْ، أُحِبُّ … لِأَنَّ …', model: 'نَعَمْ، أُحِبُّ الجِبَالَ لِأَنَّهَا عَالِيَةٌ وَجَمِيلَةٌ.', modelEn: 'Yes, I love mountains because they are high and beautiful.' },
        { core: true, ex: 'أَيَّ حَيَوَانَاتٍ تُرِيدُ أَنْ تَرَى؟', task: 'Name two animals.', help: 'أُرِيدُ أَنْ أَرَى … وَ…', model: 'أُرِيدُ أَنْ أَرَى الغِزْلَانَ وَالطُّيُورَ النَّادِرَةَ.', modelEn: 'I want to see the deer and the rare birds.' },
        { core: true, ex: 'الطَّرِيقُ إِلَى البُحَيْرَةِ طَوِيلٌ.', task: 'Ask how long it takes.', help: 'كَمْ سَاعَةً …؟', model: 'كَمْ سَاعَةً نَمْشِي إِلَى البُحَيْرَةِ؟', modelEn: 'How many hours do we walk to the lake?' },
        { core: true, unexpected: true, ex: 'هَلْ عِنْدَكَ مَاءٌ وَحِذَاءٌ مُنَاسِبٌ؟', task: 'Answer the unexpected question.', help: 'نَعَمْ، عِنْدِي … / لَا، …', model: 'نَعَمْ، عِنْدِي زُجَاجَتَا مَاءٍ، وَحِذَاءٌ قَوِيٌّ لِلْمَشْيِ.', modelEn: 'Yes, I have two bottles of water and strong walking boots.' },
      ],
      girl: 'تُرِيدِينَ · تُحِبِّينَ · عِنْدَكِ',
      notes: 'Core: al-jibāl (non-human pl.) → li-annahā ʿāliya; aṭ-ṭuyūr an-nādira; a dual in iḍāfa (zujājatā māʾin).',
    },
    {
      id: 'B', level: 'Core+', setting: 'choosing a trip', title: 'Role play B — Desert or forest?', ar: 'الصَّحْرَاءُ أَمِ الغَابَةُ؟', you: 'a student', them: 'a friend planning a school trip',
      tasks: [
        { core: true, ex: 'أَيْنَ نَذْهَبُ: إِلَى الصَّحْرَاءِ أَمْ إِلَى الغَابَةِ؟', task: 'Choose and give a reason.', help: 'أُفَضِّلُ … لِأَنَّ …', model: 'أُفَضِّلُ الصَّحْرَاءَ، لِأَنَّهَا هَادِئَةٌ وَوَاسِعَةٌ.', modelEn: 'I prefer the desert, because it is quiet and vast.' },
        { core: true, ex: 'وَمَاذَا نَرَى هُنَاكَ؟', task: 'Say two things you will see.', help: 'سَنَرَى … وَ…', model: 'سَنَرَى الكُثْبَانَ الرَّمْلِيَّةَ الذَّهَبِيَّةَ، وَالجِمَالَ.', modelEn: 'We will see golden sand dunes, and camels.' },
        { ex: '… لٰكِنَّ الصَّحْرَاءَ حَارَّةٌ جِدًّا!', task: 'ASK when it is best to go.', help: 'مَتَى …؟', model: 'إِذَنْ، مَتَى أَفْضَلُ وَقْتٍ لِلزِّيَارَةِ؟', modelEn: 'So when is the best time to visit?' },
        { ex: 'فِي الشِّتَاءِ. وَفِي اللَّيْلِ يَكُونُ الجَوُّ بَارِدًا.', task: 'Compare the desert and the forest.', help: 'الصَّحْرَاءُ أَ… مِنَ الغَابَةِ، لٰكِنَّ …', model: 'الصَّحْرَاءُ أَجْمَلُ مِنَ الغَابَةِ فِي اللَّيْلِ، لٰكِنَّ الغَابَةَ أَبْرَدُ فِي النَّهَارِ.', modelEn: 'The desert is prettier than the forest at night, but the forest is cooler in the day.' },
        { unexpected: true, ex: 'مَا الحَيَوَانُ الَّذِي يَعِيشُ فِي الصَّحْرَاءِ؟', task: 'Answer the unexpected question.', help: 'يَعِيشُ … لِأَنَّهُ …', model: 'يَعِيشُ الجَمَلُ فِي الصَّحْرَاءِ، لِأَنَّهُ يَصْبِرُ عَلَى العَطَشِ أَيَّامًا.', modelEn: 'The camel lives in the desert, because it can go without water for days.' },
      ],
      girl: '(same words — the friend may be a girl: أَيْنَ نَذْهَبُ؟)',
      notes: 'Core+: aṣ-ṣaḥrāʾ (f.) → hādiʾa, wāsiʿa; non-human plurals al-kuthbān … adh-dhahabiyya; comparatives; the CANDIDATE asks (task 3).',
    },
    {
      id: 'C', level: 'Develop', setting: 'a nature photo', title: 'Role play C — Describing your best nature photo', ar: 'صُورَةٌ مِنَ الطَّبِيعَةِ', you: 'a student photographer', them: 'the school photography-club leader',
      tasks: [
        { ex: 'أَيْنَ أَخَذْتَ هٰذِهِ الصُّورَةَ؟', task: 'Say where and when (past).', help: 'أَخَذْتُهَا فِي … عِنْدَمَا …', model: 'أَخَذْتُهَا فِي جِبَالِ الأَطْلَسِ فِي المَغْرِبِ، عِنْدَمَا زُرْنَا قَرْيَةَ جَدِّي.', modelEn: 'I took it in the Atlas Mountains in Morocco, when we visited my grandfather’s village.' },
        { ex: 'صِفْ مَا نَرَاهُ فِيهَا.', task: 'Describe it with three agreeing adjectives.', help: 'فِي الصُّورَةِ … وَ… وَ…', model: 'فِي الصُّورَةِ وَادٍ أَخْضَرُ، وَنَهْرٌ صَغِيرٌ، وَجِبَالٌ عَالِيَةٌ تُغَطِّيهَا الثُّلُوجُ.', modelEn: 'There is a green valley, a small river and high mountains covered in snow.' },
        { ex: 'وَهَلْ تُوجَدُ حَيَوَانَاتٌ؟', task: 'Describe an animal with a relative clause.', help: 'نَعَمْ، … الَّذِي / الَّتِي …', model: 'نَعَمْ، هُنَاكَ قُرُودٌ صَغِيرَةٌ تَعِيشُ فِي الغَابَاتِ الَّتِي تُغَطِّي الجِبَالَ.', modelEn: 'Yes, there are small monkeys that live in the forests covering the mountains.' },
        { ex: 'لِمَاذَا اخْتَرْتَ هٰذِهِ الصُّورَةَ لِلْمُسَابَقَةِ؟', task: 'Give two reasons.', help: 'لِأَنَّ … وَلِأَنَّ …', model: 'لِأَنَّ الأَلْوَانَ جَمِيلَةٌ، وَلِأَنَّهَا تُذَكِّرُنِي بِأَجْمَلِ يَوْمٍ فِي العُطْلَةِ.', modelEn: 'Because the colours are beautiful, and because it reminds me of the best day of the holiday.' },
        { unexpected: true, ex: 'أَيْنَ سَتُصَوِّرُ فِي المَرَّةِ القَادِمَةِ؟', task: 'Answer the unexpected question (future).', help: 'سَأُصَوِّرُ … لِأَنَّ …', model: 'سَأُصَوِّرُ الطُّيُورَ عَلَى سَاحِلِ وِيلْزَ، لِأَنَّ بَعْضَهَا نَادِرٌ جِدًّا.', modelEn: 'I will photograph the birds on the Welsh coast, because some of them are very rare.' },
      ],
      girl: 'أَخَذْتِ · صِفِي · اخْتَرْتِ · سَتُصَوِّرِينَ',
      notes: 'Develop: -hā for aṣ-ṣūra (akhadhtuhā), wādin akhḍar, a relative clause with a non-human plural (al-ghābāt allatī tughaṭṭī), two reasons, the future.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a wildlife documentary interview', title: 'Role play D — Protecting wildlife', ar: 'حِمَايَةُ الحَيَاةِ البَرِّيَّةِ', you: 'a young wildlife volunteer', them: 'a documentary presenter',
      tasks: [
        { ex: 'لِمَاذَا تَتَطَوَّعُ لِحِمَايَةِ الحَيَوَانَاتِ؟', task: 'Explain your reason with an example.', help: 'لِأَنَّ … فَمَثَلًا …', model: 'لِأَنَّ كَثِيرًا مِنَ الحَيَوَانَاتِ مُهَدَّدَةٌ بِالانْقِرَاضِ؛ فَمَثَلًا لَمْ يَبْقَ مِنَ النَّمِرِ العَرَبِيِّ إِلَّا القَلِيلُ.', modelEn: 'Because many animals are endangered — only a few Arabian leopards remain, for example.' },
        { ex: 'كَيْفَ كَانَتِ الطَّبِيعَةُ فِي المَاضِي؟', task: 'Compare past and present.', help: 'كَانَتِ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَتِ الغَابَاتُ تُغَطِّي مِسَاحَاتٍ أَكْبَرَ بِكَثِيرٍ، أَمَّا اليَوْمَ فَتَحَوَّلَ كَثِيرٌ مِنْهَا إِلَى مُدُنٍ وَطُرُقٍ.', modelEn: 'Forests used to cover much larger areas; today many have turned into cities and roads.' },
        { ex: 'مَاذَا فَعَلْتُمْ فِي مَجْمُوعَتِكُمْ؟', task: 'Describe a past action and its result.', help: 'نَظَّفْنَا … فَعَادَتْ …', model: 'نَظَّفْنَا ضِفَّةَ النَّهْرِ مِنَ البْلَاسْتِيكِ، فَعَادَتِ البَطُّ وَالأَسْمَاكُ بَعْدَ شُهُورٍ قَلِيلَةٍ.', modelEn: 'We cleaned plastic from the riverbank, and the ducks and fish came back within a few months.' },
        { ex: 'أَلَيْسَ النَّاسُ أَهَمَّ مِنَ الحَيَوَانَاتِ؟', task: 'Concede and give your view.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ حَاجَاتِ النَّاسِ مُهِمَّةٌ، غَيْرَ أَنَّ النِّظَامَ البِيئِيَّ إِذَا انْهَارَ، فَسَيَتَضَرَّرُ الإِنْسَانُ أَيْضًا.', modelEn: 'It is true people’s needs matter, but if the ecosystem collapses, humans will suffer too.' },
        { unexpected: true, ex: 'لَوْ كُنْتَ حَيَوَانًا، أَيَّ حَيَوَانٍ تَكُونُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ كُنْتُ حَيَوَانًا، لَكُنْتُ … لِأَنَّ …', model: 'لَوْ كُنْتُ حَيَوَانًا، لَكُنْتُ صَقْرًا، لِأَنِّي أُرِيدُ أَنْ أَرَى الصَّحْرَاءَ وَالجِبَالَ مِنْ فَوْقُ.', modelEn: 'If I were an animal, I would be a falcon, because I want to see the desert and mountains from above.' },
      ],
      girl: 'تَتَطَوَّعِينَ · مَجْمُوعَتِكُنَّ / مَجْمُوعَتِكُمْ · كُنْتِ',
      notes: 'Stretch: lam yabqa … illā, kāna + present vs ammā … fa-, a past action → fa- result (non-human plural ʿādat al-baṭṭ), a concession with idhā … fa-sa-, law … la-kuntu.',
      modelFoot: 'Stretch: an example, past vs present, cause → result, ṣaḥīḥun anna … ghayra anna and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'الطَّبِيعَةُ حَوْلِي', aim: 'one full sentence per question',
      qs: [
        { q: 'هَلْ تُحِبُّ الطَّبِيعَةَ؟', en: 'Do you like nature?', start: 'نَعَمْ، أُحِبُّ … لِأَنَّ …', model: 'نَعَمْ، أُحِبُّ الطَّبِيعَةَ لِأَنَّهَا هَادِئَةٌ وَجَمِيلَةٌ.', modelEn: 'Yes, I love nature because it is calm and beautiful.' },
        { q: 'هَلْ تُوجَدُ جِبَالٌ أَوْ أَنْهَارٌ قُرْبَ مَدِينَتِكَ؟', en: 'Are there mountains or rivers near your town?', start: 'نَعَمْ، يُوجَدُ … / تُوجَدُ …', model: 'نَعَمْ، يُوجَدُ نَهْرٌ طَوِيلٌ، وَتُوجَدُ تِلَالٌ خَضْرَاءُ.', modelEn: 'Yes, there is a long river and green hills.' },
        { q: 'مَا حَيَوَانُكَ المُفَضَّلُ؟', en: 'What is your favourite animal?', start: 'حَيَوَانِي المُفَضَّلُ … لِأَنَّهُ …', model: 'حَيَوَانِيَ المُفَضَّلُ الدُّلْفِينُ، لِأَنَّهُ ذَكِيٌّ.', modelEn: 'My favourite animal is the dolphin, because it is clever.' },
        { q: 'أَيْنَ يَعِيشُ الجَمَلُ؟', en: 'Where does the camel live?', start: 'يَعِيشُ الجَمَلُ فِي …', model: 'يَعِيشُ الجَمَلُ فِي الصَّحْرَاءِ.', modelEn: 'The camel lives in the desert.' },
        { q: 'هَلْ تُفَضِّلُ البَحْرَ أَمِ الجَبَلَ؟', en: 'Do you prefer the sea or the mountains?', start: 'أُفَضِّلُ … لِأَنَّ …', model: 'أُفَضِّلُ البَحْرَ، لِأَنِّي أُحِبُّ السِّبَاحَةَ.', modelEn: 'I prefer the sea, because I love swimming.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + an adjective that agrees = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'المَنَاظِرُ وَالحَيَوَانَاتُ', aim: 'two or three sentences, with description and a past detail',
      qs: [
        { q: 'صِفْ أَجْمَلَ مَكَانٍ طَبِيعِيٍّ زُرْتَهُ.', en: 'Describe the most beautiful natural place you have visited.', start: 'أَجْمَلُ مَكَانٍ زُرْتُهُ … فِيهِ …', model: 'أَجْمَلُ مَكَانٍ زُرْتُهُ بُحَيْرَةُ وِينْدِرْمِيرَ؛ فِيهَا مَاءٌ صَافٍ، وَحَوْلَهَا تِلَالٌ خَضْرَاءُ وَغَابَاتٌ كَثِيفَةٌ.', modelEn: 'The most beautiful place I’ve visited is Lake Windermere: clear water, surrounded by green hills and thick forests.' },
        { q: 'هَلْ عِنْدَكَ حَيَوَانٌ أَلِيفٌ؟ صِفْهُ.', en: 'Do you have a pet? Describe it.', start: 'نَعَمْ، عِنْدِي … لَوْنُهُ … وَهُوَ …', model: 'نَعَمْ، عِنْدِي قِطَّةٌ بَيْضَاءُ اسْمُهَا ثَلْجَةُ، عَيْنَاهَا زَرْقَاوَانِ، وَهِيَ كَسُولَةٌ جِدًّا!', modelEn: 'Yes, I have a white cat called Snowy with blue eyes — she is very lazy!' },
        { q: 'لِمَاذَا يُحِبُّ النَّاسُ قَضَاءَ الوَقْتِ فِي الطَّبِيعَةِ؟', en: 'Why do people like spending time in nature?', start: 'لِأَنَّهَا … وَتُسَاعِدُ …', model: 'لِأَنَّهَا تُرِيحُ الأَعْصَابَ، وَتُبْعِدُنَا عَنْ ضَجِيجِ المُدُنِ وَالشَّاشَاتِ.', modelEn: 'Because it calms the nerves and takes us away from the noise of cities and screens.' },
        { q: 'مَا الحَيَوَانَاتُ الَّتِي تَعِيشُ فِي بِلَادِكَ؟', en: 'Which animals live in your country?', start: 'تَعِيشُ … وَ… فِي …', model: 'تَعِيشُ الثَّعَالِبُ وَالسَّنَاجِبُ فِي الحَدَائِقِ، وَتَعِيشُ الغِزْلَانُ فِي الغَابَاتِ الشَّمَالِيَّةِ.', modelEn: 'Foxes and squirrels live in parks, and deer live in the northern forests.' },
        { q: 'أَيْنَ تُرِيدُ أَنْ تَذْهَبَ لِتَرَى الطَّبِيعَةَ؟', en: 'Where would you like to go to see nature?', start: 'أُرِيدُ أَنْ أَزُورَ … لِأَرَى …', model: 'أُرِيدُ أَنْ أَزُورَ وَادِي رَمٍّ فِي الأُرْدُنِّ، لِأَرَى الصَّحْرَاءَ الحَمْرَاءَ وَالنُّجُومَ فِي اللَّيْلِ.', modelEn: 'I want to visit Wadi Rum in Jordan, to see the red desert and the stars at night.' },
      ],
      foot: 'Develop: two or three sentences — description, non-human plural agreement, a reason and a future wish.',
      modelFoot: 'Description + agreement + reason = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الإِنْسَانُ وَالطَّبِيعَةُ', aim: 'a developed answer: opinion, comparison, concession and a conditional',
      qs: [
        { q: 'هَلْ حَدَائِقُ الحَيَوَانِ مُفِيدَةٌ أَمْ ظَالِمَةٌ؟', en: 'Are zoos useful or cruel?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ بَعْضَهَا يَحْمِي الحَيَوَانَاتِ المُهَدَّدَةَ، غَيْرَ أَنَّ الأَقْفَاصَ الصَّغِيرَةَ لَا تُنَاسِبُ حَيَوَانَاتٍ تَعِيشُ فِي مِسَاحَاتٍ وَاسِعَةٍ.', modelEn: 'It is true some protect endangered animals, but small cages don’t suit animals that live in vast spaces.' },
        { q: 'لِمَاذَا تَخْتَفِي بَعْضُ الحَيَوَانَاتِ؟', en: 'Why are some animals disappearing?', start: 'بِسَبَبِ … وَ… مِمَّا …', model: 'بِسَبَبِ قَطْعِ الغَابَاتِ وَالصَّيْدِ، مِمَّا يُدَمِّرُ بُيُوتَهَا الطَّبِيعِيَّةَ.', modelEn: 'Because of deforestation and hunting, which destroys their natural homes.' },
        { q: 'كَيْفَ تَغَيَّرَتِ الطَّبِيعَةُ فِي مِنْطَقَتِكَ؟', en: 'How has nature changed in your area?', start: 'كَانَ هُنَاكَ … أَمَّا الآنَ فَـ…', model: 'كَانَ هُنَاكَ حَقْلٌ كَبِيرٌ تَعِيشُ فِيهِ الأَرَانِبُ، أَمَّا الآنَ فَقَدْ بَنَوْا عَلَيْهِ مَوْقِفًا لِلسَّيَّارَاتِ.', modelEn: 'There used to be a big field where rabbits lived; now they have built a car park on it.' },
        { q: 'مَا الَّذِي يَسْتَطِيعُ الشَّبَابُ أَنْ يَفْعَلُوهُ لِلطَّبِيعَةِ؟', en: 'What can young people do for nature?', start: 'يَسْتَطِيعُونَ أَنْ … مَثَلًا …', model: 'يَسْتَطِيعُونَ أَنْ يَزْرَعُوا الأَشْجَارَ وَيُنَظِّفُوا الشَّوَاطِئَ؛ مَثَلًا زَرَعَ صَفِّي مِئَةَ شَجَرَةٍ فِي السَّنَةِ المَاضِيَةِ.', modelEn: 'They can plant trees and clean beaches — my class planted a hundred trees last year.' },
        { q: 'لَوِ اخْتَفَتِ الطُّيُورُ مِنَ العَالَمِ، كَيْفَ تَكُونُ الحَيَاةُ؟', en: 'If birds disappeared from the world, what would life be like?', start: 'لَوِ اخْتَفَتْ …، لَـ…', model: 'لَوِ اخْتَفَتِ الطُّيُورُ، لَأَصْبَحَ الصَّبَاحُ صَامِتًا وَحَزِينًا، وَلَكَثُرَتِ الحَشَرَاتُ الَّتِي تَأْكُلُهَا.', modelEn: 'If birds disappeared, mornings would be silent and sad, and the insects they eat would multiply.' },
      ],
      foot: 'Stretch: a concession, bi-sababi … mimmā, kāna + present vs ammā … fa-qad, an example and law … la-.',
      modelFoot: 'Stretch: ṣaḥīḥun anna … ghayra anna, cause and effect, past vs present, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I described landscapes with adjectives that agree.' },
    { route: 'core', text: 'I said where animals live (yaʿīshu / taʿīshu fī …).' },
    { route: 'develop', text: 'I used feminine singular for non-human plurals (jibāl ʿāliya).' },
    { route: 'develop', text: 'I used a relative clause (allatī / alladhī).' },
    { route: 'stretch', text: 'I used cause and effect, a concession or law … la-.' },
  ],
};
speak.RP[3].tasks[1].help = 'كَانَتِ الغَابَاتُ … أَمَّا اليَوْمَ فَتَحَوَّلَ …';
speak.RP[3].tasks[2].help = 'نَظَّفْنَا … فَعَادَتْ …';
speak.RP[1].tasks[3].help = 'الصَّحْرَاءُ أَجْمَلُ مِنَ الغَابَةِ … لٰكِنَّ …';
speak.CONV[0].qs[1].start = 'نَعَمْ، يُوجَدُ نَهْرٌ … وَتُوجَدُ …';
speak.CONV[2].qs[1].start = 'بِسَبَبِ … وَ… مِمَّا يُدَمِّرُ …';
speak.CONV[2].qs[2].start = 'كَانَ هُنَاكَ … أَمَّا الآنَ فَقَدْ …';
speak.CONV[2].qs[4].start = 'لَوِ اخْتَفَتِ الطُّيُورُ، لَأَصْبَحَ …';

const Q2_CORE = `مَرْحَبًا يَا زَيْنَبُ،
كَيْفَ حَالُكِ؟ أَنَا الآنَ فِي رِحْلَةٍ مَدْرَسِيَّةٍ فِي جِبَالِ وِيلْزَ. المَنْظَرُ هُنَا جَمِيلٌ جِدًّا: الجِبَالُ عَالِيَةٌ وَخَضْرَاءُ، وَالبُحَيْرَاتُ صَافِيَةٌ وَزَرْقَاءُ. أَمْسِ مَشَيْنَا ثَلَاثَ سَاعَاتٍ إِلَى قِمَّةِ جَبَلٍ، وَرَأَيْنَا طُيُورًا كَبِيرَةً وَخِرَافًا كَثِيرَةً. كَانَ الجَوُّ بَارِدًا، لٰكِنَّ الرِّحْلَةَ كَانَتْ مُمْتِعَةً. أُحِبُّ الطَّبِيعَةَ لِأَنَّهَا هَادِئَةٌ. غَدًا سَنَزُورُ شَلَّالًا كَبِيرًا فِي الغَابَةِ، وَسَآخُذُ صُوَرًا كَثِيرَةً.
مَعَ السَّلَامَةِ،
سَارَةُ`;
const Q2_FULL = `عَزِيزَتِي زَيْنَبُ،
تَحِيَّةً طَيِّبَةً مِنْ جِبَالِ وِيلْزَ! أَقْضِي هٰذَا الأُسْبُوعَ فِي رِحْلَةٍ مَدْرَسِيَّةٍ فِي حَدِيقَةٍ وَطَنِيَّةٍ خَلَّابَةٍ؛ فَالجِبَالُ هُنَا عَالِيَةٌ تُغَطِّيهَا الغُيُومُ، وَالوِدْيَانُ خَضْرَاءُ تَجْرِي فِيهَا أَنْهَارٌ صَغِيرَةٌ صَافِيَةٌ. أَمْسِ صَعِدْنَا أَعْلَى قِمَّةٍ فِي المِنْطَقَةِ بَعْدَ مَشْيٍ اسْتَمَرَّ أَرْبَعَ سَاعَاتٍ، وَرَأَيْنَا صَقْرًا يَطِيرُ فَوْقَنَا، وَقَطِيعًا مِنَ الخِرَافِ البَيْضَاءِ تَرْعَى فِي الوَادِي. صَحِيحٌ أَنَّ المَطَرَ لَمْ يَتَوَقَّفْ، غَيْرَ أَنَّنِي لَمْ أَشْعُرْ بِهٰذَا الهُدُوءِ مِنْ قَبْلُ. غَدًا سَنَزُورُ شَلَّالًا مَشْهُورًا فِي وَسَطِ الغَابَةِ، وَإِذَا كَانَتِ الشَّمْسُ مُشْرِقَةً، فَسَأُرْسِلُ لَكِ صُوَرًا رَائِعَةً.
مَعَ مَحَبَّتِي،
سَارَةُ`;
const Q3A_CORE = `أُحِبُّ الطَّبِيعَةَ كَثِيرًا. أَسْكُنُ فِي مَدِينَةٍ كَبِيرَةٍ، لٰكِنْ قُرْبَ مَدِينَتِي تُوجَدُ تِلَالٌ خَضْرَاءُ وَنَهْرٌ طَوِيلٌ. فِي نِهَايَةِ الأُسْبُوعِ أَمْشِي مَعَ أَبِي فِي التِّلَالِ، وَنَرَى الطُّيُورَ وَالأَرَانِبَ. أَحْيَانًا نَجْلِسُ قُرْبَ النَّهْرِ، وَنَأْكُلُ السَّنْدَوِيشَاتِ، وَنَسْمَعُ أَصْوَاتَ الطُّيُورِ.
مَكَانِيَ المُفَضَّلُ هُوَ الشَّاطِئُ. الرَّمْلُ هُنَاكَ أَصْفَرُ وَنَاعِمٌ، وَالبَحْرُ أَزْرَقُ. تَعِيشُ فِي البَحْرِ أَسْمَاكٌ كَثِيرَةٌ، وَتَطِيرُ فَوْقَهُ طُيُورٌ بَيْضَاءُ. أُحِبُّ الشَّاطِئَ لِأَنَّهُ هَادِئٌ وَجَمِيلٌ.
فِي الصَّيْفِ المَاضِي زُرْتُ الأُرْدُنَّ مَعَ أُسْرَتِي. ذَهَبْنَا إِلَى صَحْرَاءِ وَادِي رَمٍّ. كَانَتِ الرِّمَالُ حَمْرَاءَ، وَالجِبَالُ عَالِيَةً. رَكِبْنَا الجِمَالَ، وَنِمْنَا فِي خَيْمَةٍ، وَرَأَيْنَا نُجُومًا كَثِيرَةً جِدًّا. كَانَتْ تِلْكَ أَجْمَلَ لَيْلَةٍ فِي حَيَاتِي، وَلَنْ أَنْسَاهَا أَبَدًا.
فِي رَأْيِي، يَجِبُ أَنْ نَحْمِيَ الطَّبِيعَةَ وَالحَيَوَانَاتِ. فِي المُسْتَقْبَلِ أُرِيدُ أَنْ أَعْمَلَ فِي حَدِيقَةٍ وَطَنِيَّةٍ، وَسَأَزُورُ غَابَاتِ إِفْرِيقْيَا.`;
const Q3A_FULL = `هُنَاكَ أَمَاكِنُ تُغَيِّرُ نَظْرَتَنَا إِلَى العَالَمِ، وَأَهَمُّهَا عِنْدِي صَحْرَاءُ وَادِي رَمٍّ فِي جَنُوبِ الأُرْدُنِّ. قَبْلَ أَنْ أَزُورَهَا، كُنْتُ أَظُنُّ أَنَّ الصَّحْرَاءَ مَكَانٌ فَارِغٌ مُمِلٌّ، لَا حَيَاةَ فِيهِ إِلَّا الرَّمْلُ وَالشَّمْسُ الحَارِقَةُ وَالرِّيَاحُ.
لٰكِنَّ مَا رَأَيْتُهُ كَانَ مُخْتَلِفًا تَمَامًا؛ فَالرِّمَالُ حَمْرَاءُ كَالنَّارِ، وَالجِبَالُ الصَّخْرِيَّةُ تَرْتَفِعُ فَجْأَةً كَأَنَّهَا قِلَاعٌ قَدِيمَةٌ. أَمَّا فِي اللَّيْلِ، فَتَمْتَلِئُ السَّمَاءُ بِآلَافِ النُّجُومِ الَّتِي لَا نَرَاهَا أَبَدًا فِي المُدُنِ.
وَأَكْثَرُ مَا أَدْهَشَنِي الحَيَوَانَاتُ الَّتِي تَعِيشُ هُنَاكَ؛ فَقَدْ رَأَيْتُ مَعَ المُرْشِدِ آثَارَ ثَعْلَبٍ صَحْرَاوِيٍّ صَغِيرٍ، وَشَرَحَ لَنَا كَيْفَ يَخْتَبِئُ تَحْتَ الرَّمْلِ فِي النَّهَارِ، وَيَخْرُجُ لِيَبْحَثَ عَنْ طَعَامِهِ فِي اللَّيْلِ البَارِدِ. وَرَأَيْنَا أَيْضًا نَبَاتَاتٍ صَغِيرَةً تَعِيشُ بِقَلِيلٍ مِنَ المَاءِ، وَطُيُورًا تَبْنِي أَعْشَاشَهَا بَيْنَ الصُّخُورِ العَالِيَةِ.
صَحِيحٌ أَنَّ الجَوَّ كَانَ قَاسِيًا، غَيْرَ أَنَّ الرِّحْلَةَ عَلَّمَتْنِي أَنَّ لِكُلِّ نِظَامٍ بِيئِيٍّ جَمَالَهُ وَأَسْرَارَهُ. وَلَوْ عُدْتُ إِلَى هُنَاكَ، لَبَقِيتُ أُسْبُوعًا كَامِلًا، وَلَدَرَسْتُ الحَيَوَانَاتِ الصَّحْرَاوِيَّةَ بِنَفْسِي.`;
const Q3B_FULL = `تَخْتَفِي كُلَّ سَنَةٍ آلَافُ الأَنْوَاعِ مِنَ الحَيَوَانَاتِ وَالنَّبَاتَاتِ، وَيُحَذِّرُ العُلَمَاءُ مِنْ أَنَّ النَّمِرَ العَرَبِيَّ وَالسُّلَحْفَاةَ البَحْرِيَّةَ وَكَثِيرًا مِنَ الطُّيُورِ قَدْ تَخْتَفِي قَرِيبًا إِذَا لَمْ نَتَحَرَّكْ.
فِي المَاضِي كَانَتِ الغَابَاتُ الكَثِيفَةُ تُغَطِّي مِسَاحَاتٍ شَاسِعَةً، وَكَانَتِ الحَيَوَانَاتُ تَعِيشُ بِأَمَانٍ بَعِيدًا عَنِ الإِنْسَانِ، أَمَّا اليَوْمَ فَتَتَحَوَّلُ الغَابَاتُ إِلَى مَزَارِعَ وَمُدُنٍ، مِمَّا يَطْرُدُ الحَيَوَانَاتِ مِنْ بُيُوتِهَا الطَّبِيعِيَّةِ، وَيُلَوِّثُ الأَنْهَارَ الَّتِي تَشْرَبُ مِنْهَا.
لَكِنَّ الأَمَلَ مَوْجُودٌ؛ فَفِي السَّنَةِ المَاضِيَةِ شَارَكْتُ مَعَ نَادِي البِيئَةِ فِي مَدْرَسَتِي فِي زِرَاعَةِ مِئَتَيْ شَجَرَةٍ قُرْبَ النَّهْرِ، وَصَنَعْنَا بُيُوتًا خَشَبِيَّةً لِلطُّيُورِ. وَبَعْدَ أَشْهُرٍ قَلِيلَةٍ، لَاحَظْنَا عَوْدَةَ أَنْوَاعٍ مِنَ الطُّيُورِ لَمْ نَرَهَا مُنْذُ سَنَوَاتٍ، وَشَعَرْنَا بِأَنَّ عَمَلَنَا الصَّغِيرَ قَدْ صَنَعَ فَرْقًا حَقِيقِيًّا فِي حَيِّنَا.
صَحِيحٌ أَنَّ النَّاسَ يَحْتَاجُونَ إِلَى الأَرْضِ لِلسَّكَنِ وَالزِّرَاعَةِ، غَيْرَ أَنَّنَا جُزْءٌ مِنَ الطَّبِيعَةِ لَا أَسْيَادُهَا. وَلَوْ خَصَّصَتْ كُلُّ مَدِينَةٍ جُزْءًا مِنْ أَرْضِهَا لِلْحَيَاةِ البَرِّيَّةِ، لَعَاشَ الإِنْسَانُ وَالحَيَوَانُ جَنْبًا إِلَى جَنْبٍ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a nature-reserve volunteer form, write an email describing a landscape from a trip, and write an extended piece about a place in nature or about protecting wildlife.',
  lift: [
    { ar: 'الجِبَالُ عَالِيَةٌ، وَالوِدْيَانُ خَضْرَاءُ', en: 'the mountains are high, and the valleys green' },
    { ar: 'رَأَيْنَا صَقْرًا يَطِيرُ فَوْقَنَا', en: 'we saw a falcon flying above us' },
    { ar: 'الحَيَوَانَاتُ الَّتِي تَعِيشُ هُنَاكَ', en: 'the animals that live there' },
  ],
  checkTip: 'Check: non-human plurals take feminine singular adjectives AND verbs (al-ṭuyūru taṭīru, al-jibālu ʿāliya); colours agree (ṣaḥrāʾ ḥamrāʾ); allatī after feminine and non-human plural nouns.',
  FORM: {
    title: 'Nature-reserve volunteer form', ar: 'اسْتِمَارَةُ التَّطَوُّعِ فِي المَحْمِيَّةِ',
    fields: [
      { core: true, ar: 'الاسْمُ وَالعُمْرُ', en: 'Name and age', model: 'سَارَةُ عَلِيٌّ، سِتَّ عَشْرَةَ سَنَةً', modelEn: 'Sara Ali, sixteen' },
      { core: true, ar: 'المَكَانُ الطَّبِيعِيُّ المُفَضَّلُ', en: 'Favourite natural place', model: 'الجِبَالُ', modelEn: 'the mountains' },
      { core: true, ar: 'حَيَوَانٌ تُحِبُّهُ', en: 'An animal you like', model: 'الصَّقْرُ', modelEn: 'the falcon' },
      { core: true, ar: 'أَيْنَ يَعِيشُ؟', en: 'Where it lives', model: 'فِي الصَّحْرَاءِ وَالجِبَالِ', modelEn: 'in the desert and mountains' },
      { core: true, ar: 'الأَيَّامُ المُنَاسِبَةُ', en: 'Days available', model: 'السَّبْتُ وَالأَحَدُ', modelEn: 'Saturday and Sunday' },
      { core: true, ar: 'مَهَارَةٌ عِنْدَكَ', en: 'A skill you have', model: 'التَّصْوِيرُ', modelEn: 'photography' },
      { ar: 'نَشَاطٌ تُرِيدُ أَنْ تُشَارِكَ فِيهِ', en: 'An activity you want to do', model: 'زِرَاعَةُ الأَشْجَارِ قُرْبَ النَّهْرِ', modelEn: 'planting trees by the river' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُرِيدُ أَنْ تَتَطَوَّعَ؟', en: 'ONE sentence: why you want to volunteer', model: 'أُرِيدُ أَنْ أَتَطَوَّعَ لِأَنَّ الطُّيُورَ الَّتِي تَعِيشُ هُنَا مُهَدَّدَةٌ.', modelEn: 'I want to volunteer because the birds that live here are endangered.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with allatī and a non-human plural.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 8: aṭ-ṭuyūr allatī … muhaddada (non-human plural → feminine).',
  },
  Q2: {
    short: 'an email describing a landscape', title: 'Question 2: postcard from the mountains', ar: 'رِسَالَةٌ مِنَ الجِبَالِ',
    task: 'You are on a school trip in the countryside. Write an email in Arabic to your friend of about 80–90 words. You must include: • where you are and what the landscape is like • what you did and saw yesterday (animals or plants) • your opinion of the place, with a reason • what you will do tomorrow.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Adjectives that agree (non-human plurals!).', 'A past AND a future sentence.', 'About 80–90 words.'],
    phrases: [['المَنْظَرُ هُنَا … : الجِبَالُ … وَالبُحَيْرَاتُ …', 'the view here …: the mountains … and the lakes …'], ['أَمْسِ مَشَيْنَا … وَرَأَيْنَا …', 'yesterday we walked … and saw …'], ['أُحِبُّ … لِأَنَّهَا …', 'I love … because it is …'], ['غَدًا سَنَزُورُ …', 'tomorrow we will visit …']],
    rubric: [
      ['task', 'أَنْتِ فِي رِحْلَةٍ مَدْرَسِيَّةٍ فِي الرِّيفِ. اكْتُبِي رِسَالَةً إِلَى صَدِيقَتِكِ (٨٠–٩٠ كَلِمَةً).', 'You are on a countryside trip: write to your friend (80–90 words).'],
      ['1', 'أَيْنَ أَنْتِ؟ وَكَيْفَ المَنْظَرُ؟', 'Where you are; what the landscape is like'],
      ['2', 'مَاذَا فَعَلْتِ أَمْسِ؟ وَمَاذَا رَأَيْتِ؟', 'What you did and saw yesterday'],
      ['3', 'مَا رَأْيُكِ فِي المَكَانِ؟ وَلِمَاذَا؟', 'Your opinion of the place, and why'],
      ['4', 'مَاذَا سَتَفْعَلِينَ غَدًا؟', 'What you will do tomorrow'],
    ],
    qwords: 'أَيْنَ (where) · كَيْفَ (what … like) · مَاذَا (what) · مَا رَأْيُكِ (your opinion) · لِمَاذَا (why) — bullet 2 is PAST, bullet 4 is FUTURE',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكِ؟', 'Hello …, how are you?'],
      ['1', 'أَنَا الآنَ فِي ______ . الجِبَالُ ______ ، وَالبُحَيْرَاتُ ______ .', 'I am now in … The mountains are …, and the lakes are …'],
      ['2', 'أَمْسِ مَشَيْنَا ______ ، وَرَأَيْنَا ______ .', 'Yesterday we walked …, and saw …'],
      ['3', 'أُحِبُّ هٰذَا المَكَانَ، لِأَنَّهُ ______ .', 'I love this place, because it is …'],
      ['4', 'غَدًا سَنَزُورُ ______ .', 'Tomorrow we will visit …'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Zainab, how are you? I am now on a school trip in the mountains of Wales. The view here is very beautiful: the mountains are high and green, and the lakes clear and blue. Yesterday we walked three hours to a mountain top and saw big birds and lots of sheep. It was cold, but the trip was fun. I love nature because it is calm. Tomorrow we will visit a big waterfall in the forest, and I’ll take lots of photos. Goodbye, Sara.”',
      find: ['الجِبَالُ عَالِيَةٌ وَخَضْرَاءُ', 'وَرَأَيْنَا طُيُورًا كَبِيرَةً', 'لِأَنَّهَا هَادِئَةٌ', 'غَدًا سَنَزُورُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Zainab, greetings from the Welsh mountains! I’m spending this week on a school trip in a stunning national park: the mountains are high and covered in cloud, and the green valleys have small clear rivers running through them. Yesterday we climbed the highest peak in the area after a four-hour walk, and saw a falcon flying above us and a flock of white sheep grazing in the valley. It is true the rain didn’t stop, but I have never felt such calm before. Tomorrow we’ll visit a famous waterfall in the middle of the forest, and if the sun is out, I’ll send you wonderful photos. With love, Sara.”',
      find: ['الجِبَالُ هُنَا عَالِيَةٌ تُغَطِّيهَا', 'رَأَيْنَا صَقْرًا يَطِيرُ', 'لَمْ أَشْعُرْ … مِنْ قَبْلُ', 'إِذَا كَانَتِ … فَسَأُرْسِلُ'],
    },
  },
  Q3: {
    a: { title: 'مَكَانٌ طَبِيعِيٌّ لَا أَنْسَاهُ', en: 'A natural place I won’t forget', bullets: 'الطَّبِيعَةُ حَوْلَ مَدِينَتِكَ · مَكَانُكَ المُفَضَّلُ وَوَصْفُهُ · رِحْلَةٌ إِلَى مَكَانٍ طَبِيعِيٍّ · رَأْيُكَ وَأَحْلَامُكَ', bulletsEn: 'Nature around your town · your favourite place and a description · a trip to a natural place · your opinion and dreams' },
    b: { title: 'الحَيَوَانَاتُ المُهَدَّدَةُ: مَسْؤُولِيَّتُنَا', en: 'Endangered animals: our responsibility', bullets: 'لِمَاذَا تَخْتَفِي الحَيَوَانَاتُ؟ · المَاضِي وَالحَاضِرُ · مُبَادَرَةٌ شَارَكْتَ فِيهَا · رَأْيُكَ وَاقْتِرَاحُكَ', bulletsEn: 'Why animals are disappearing · past and present · an initiative you took part in · your opinion and suggestion' },
    plan: [
      'Nature near you — tūjadu tilālun khaḍrāʾ …; non-human plural agreement.',
      'Your favourite place — colours, sizes, animals (taʿīshu fīhi …); Stretch: kaʾannahā …',
      'Past — a trip: zurnā, rakibnā, raʾaynā; kāna / kānat + accusative adjectives.',
      'Opinion + future — yajibu an naḥmiya …, sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'تَعِيشُ فِي البَحْرِ أَسْمَاكٌ كَثِيرَةٌ.', en: 'present: many fish live in the sea.' },
      { ar: 'كَانَتِ الرِّمَالُ حَمْرَاءَ، وَالجِبَالُ عَالِيَةً.', en: 'past: the sand was red, and the mountains high.' },
      { ar: 'سَأَزُورُ غَابَاتِ إِفْرِيقْيَا.', en: 'future: I will visit the forests of Africa.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'I love nature: I live in a big city, but nearby there are green hills and a long river; at weekends I walk with Dad and we see birds and rabbits; sometimes we sit by the river, eat sandwiches and listen to the birds → favourite place: the beach — soft yellow sand, blue sea, many fish, white birds flying above; calm and beautiful → last summer Wadi Rum in Jordan: red sand, high mountains; camel rides, a night in a tent, so many stars — the best night of my life, I’ll never forget it → we must protect nature and animals; I want to work in a national park and will visit Africa’s forests.', find: ['تِلَالٌ خَضْرَاءُ', 'طُيُورٌ بَيْضَاءُ', 'كَانَتِ الرِّمَالُ حَمْرَاءَ', 'يَجِبُ أَنْ نَحْمِيَ'], notes: 'Core model: non-human plurals with feminine agreement, colours, a past paragraph with kānat + accusative, an opinion and a future plan.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Some places change how we see the world; for me, Wadi Rum in southern Jordan — before visiting I thought a desert was an empty, boring place with only sand, burning sun and wind → what I saw was completely different: sand red as fire, rocky mountains rising suddenly like ancient castles; as for the night, the sky fills with thousands of stars we never see in cities → what amazed me most were the animals: with the guide I saw a small desert fox’s tracks; he explained how it hides under the sand by day and comes out to hunt in the cold night; we also saw small plants that live on little water, and birds nesting among the high rocks → it is true the climate was harsh, but the trip taught me every ecosystem has its beauty and secrets; “if I went back, I would stay a whole week and study the desert animals myself”.', find: ['كُنْتُ أَظُنُّ أَنَّ', 'كَأَنَّهَا قِلَاعٌ', 'أَمَّا فِي اللَّيْلِ، فَتَمْتَلِئُ', 'لَوْ عُدْتُ … لَبَقِيتُ'], notes: 'Full-mark model: a superlative hook, qabla an, kuntu aẓunnu anna, lā … illā, similes (ka-, kaʾanna), ammā … fa-, relative clauses, a concession and law … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'our responsibility', text: Q3B_FULL, en: 'Thousands of species disappear every year; scientists warn that the Arabian leopard, sea turtles and many birds may vanish soon if we don’t act → in the past dense forests covered vast areas and animals lived safely far from humans; as for today, forests are turning into farms and cities, which drives animals out of their natural homes and pollutes the rivers they drink from → but there is hope: last year my school’s environment club planted two hundred trees by the river and built wooden bird boxes; within a few months we noticed bird species we hadn’t seen for years, and felt our small effort had made a real difference in our neighbourhood → it is true people need land to live and farm, but we are part of nature, not its masters; “if every city set aside part of its land for wildlife, humans and animals would live side by side”.', find: ['إِذَا لَمْ نَتَحَرَّكْ', 'أَمَّا اليَوْمَ فَتَتَحَوَّلُ', 'لَمْ نَرَهَا مُنْذُ', 'لَوْ خَصَّصَتْ … لَعَاشَ'], notes: 'Full-mark model for the Stretch title: yuḥadhdhiru min anna, idhā lam + jussive, kāna + present vs ammā … fa-, mimmā, a school initiative, lā … (not … but) contrast, a concession and a conditional.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; places and animals named correctly.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: feminine singular with non-human plurals (al-jibālu ʿāliya).' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: a simile or relative clause, a concession and law … la-.' },
  ],
};

module.exports = { speak, write };
