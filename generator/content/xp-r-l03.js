'use strict';
/* Exam-practice data · FR-L03 · Final Revision — Places, Environment and the Digital World (Topic C: places and compass points, landscapes and nature, weather and climate, environmental problems and solutions, the digital world, documents and booking, town services, shopping and prices, measurements and materials). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'R', n: 3, short: 'Places, Environment and the Digital World', arShort: 'الأَمَاكِنُ وَالبِيئَةُ وَالعَالَمُ الرَّقْمِيُّ', fileTitle: 'Places_Environment_and_the_Digital_World', title: 'Final Revision — Places, Environment and the Digital World', ar: 'مُرَاجَعَةٌ: الأَمَاكِنُ وَالبِيئَةُ وَالعَالَمُ الرَّقْمِيُّ', icon: 'FaEarthEurope', grammar: 'Topic C revision: compass points and yaqaʿu / taqaʿu; non-human plural agreement; weather verbs and comparatives; cause and effect (bi-sababi, mimmā yuʾaddī ilā); advice and obligation (yajibu ʿalā … an); booking tenses; yūjadu / tūjadu; prices and measurements; the passive' };

const speak = {
  ...base,
  focus: 'Final-revision Paper 3 practice on Topic C in breakout rooms: places and directions, nature and weather, environmental problems and solutions, the digital world, booking and town services. Exam skills: use يُوجَدُ / تُوجَدُ and prepositions for places, give cause → effect → solution, and keep numbers and prices accurate.',
  words: [
    w(1, 'يَقَعُ فِي شَمَالِ …', 'it is in the north of …', [['south · east · west', 'جَنُوبِ · شَرْقِ · غَرْبِ'], ['f.', 'تَقَعُ']], { tag: 'C · L01' }),
    w(2, 'جِبَالٌ عَالِيَةٌ', 'high mountains', [['forests (non-hum. pl.)', 'غَابَاتٌ كَثِيفَةٌ'], ['a river', 'نَهْرٌ']], { tag: 'C · L02' }),
    w(3, 'الجَوُّ مُشْمِسٌ', 'it is sunny', [['it rains', 'تُمْطِرُ'], ['colder than', 'أَبْرَدُ مِنْ']], { tag: 'C · L03' }),
    w(4, 'التَّلَوُّثُ', 'pollution', [['because of', 'بِسَبَبِ'], ['which leads to', 'مِمَّا يُؤَدِّي إِلَى']], { tag: 'C · L04' }),
    w(5, 'يَجِبُ عَلَيْنَا أَنْ …', 'we must …', [['recycling', 'إِعَادَةُ التَّدْوِيرِ'], ['save water', 'نُوَفِّرَ المَاءَ']], { tag: 'C · L05' }),
    w(6, 'أَتَوَاصَلُ عَبْرَ …', 'I communicate via …', [['an app', 'تَطْبِيقٌ'], ['social media', 'وَسَائِلُ التَّوَاصُلِ']], { tag: 'C · L06' }),
    w(7, 'أُرِيدُ أَنْ أَحْجِزَ …', 'I want to book …', [['a single room', 'غُرْفَةٌ لِشَخْصٍ وَاحِدٍ'], ['for three nights', 'لِثَلَاثِ لَيَالٍ']], { tag: 'C · L07' }),
    w(8, 'يُوجَدُ · تُوجَدُ', 'there is (m. · f.)', [['opposite', 'مُقَابِلَ'], ['near', 'قُرْبَ']], { tag: 'C · L08' }),
    w(9, 'كَمْ ثَمَنُ …؟', 'how much is …?', [['cheaper than', 'أَرْخَصُ مِنْ'], ['a discount', 'تَخْفِيضٌ']], { tag: 'C · L09' }),
    w(10, 'طُولُهُ … · مَصْنُوعٌ مِنْ …', 'its length is … · made of …', [['plastic · glass', 'بْلَاسْتِيكٌ · زُجَاجٌ'], ['f.', 'مَصْنُوعَةٌ مِنْ']], { tag: 'C · L10' }),
    w(11, 'تُرْمَى · يُلَوَّثُ', 'is thrown away · is polluted', [['was built', 'بُنِيَ'], ['is recycled', 'يُعَادُ تَدْوِيرُهُ']], { tag: 'passive' }),
    w(12, 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', 'it is true that … but …', [['if … would', 'لَوْ كُنْتُ رَئِيسَ البَلَدِيَّةِ لَمَنَعْتُ'], ['on one hand', 'مِنْ نَاحِيَةٍ']], { tag: 'top band' }),
  ],
  words1: { eyebrow: 'Language bank · Topic C in twelve structures', title: 'Places, nature and the digital world', ar: 'المِحْوَرُ الثَّالِثُ فِي اثْنَتَيْ عَشْرَةَ بِنْيَةً', notes: 'LANGUAGE BANK (2 min) — a revision map of Topic C. EXAM TIP: for a place, give WHERE (يَقَعُ فِي شَمَالِ …), WHAT is there (يُوجَدُ / تُوجَدُ) and WHAT IT IS LIKE (agreement: غَابَاتٌ كَثِيفَةٌ).' },
  words2: { eyebrow: 'Language bank · structures that lift a mark', title: 'Cause → effect → solution', ar: 'السَّبَبُ وَالنَّتِيجَةُ وَالحَلُّ', notes: 'LANGUAGE BANK (2 min) — the environment answer in three steps: بِسَبَبِ … ، مِمَّا يُؤَدِّي إِلَى … ؛ لِذٰلِكَ يَجِبُ عَلَيْنَا أَنْ … EXAM TIP: numbers and prices are easy marks — say them slowly and check the noun after the number.' },
  checkCore: 'described a place with yaqaʿu fī and yūjadu / tūjadu',
  checkDevelop: 'gave a cause, an effect and a solution',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a tourist office', title: 'Role play A — At the tourist office in Amman', ar: 'فِي مَكْتَبِ السِّيَاحَةِ', you: 'a young tourist', them: 'the tourist-office assistant',
      tasks: [
        { core: true, ex: 'أَهْلًا! كَيْفَ أُسَاعِدُكَ؟', task: 'Ask where the museum is.', help: 'أَيْنَ يَقَعُ …؟', model: 'أَيْنَ يَقَعُ المُتْحَفُ الأُرْدُنِيُّ، مِنْ فَضْلِكَ؟', modelEn: 'Where is the Jordan Museum, please?' },
        { core: true, ex: 'فِي وَسَطِ المَدِينَةِ، مُقَابِلَ البَلَدِيَّةِ.', task: 'Ask the opening time.', help: 'مَتَى يَفْتَحُ …؟', model: 'مَتَى يَفْتَحُ المُتْحَفُ؟', modelEn: 'When does the museum open?' },
        { core: true, ex: 'فِي التَّاسِعَةِ صَبَاحًا. هَلْ هٰذِهِ أَوَّلُ زِيَارَةٍ لَكَ؟', task: 'Say how long you are staying.', help: 'نَعَمْ، سَأَبْقَى …', model: 'نَعَمْ، سَأَبْقَى فِي الأُرْدُنِّ أُسْبُوعًا.', modelEn: 'Yes, I’m staying in Jordan for a week.' },
        { core: true, ex: 'مُمْتَازٌ!', task: 'Ask about tomorrow’s weather.', help: 'كَيْفَ سَيَكُونُ الجَوُّ …؟', model: 'كَيْفَ سَيَكُونُ الجَوُّ غَدًا؟', modelEn: 'What will the weather be like tomorrow?' },
        { core: true, unexpected: true, ex: 'مُشْمِسًا وَحَارًّا. كَيْفَ الجَوُّ فِي بَلَدِكَ الآنَ؟', task: 'Answer the unexpected question.', help: 'الجَوُّ … وَتُمْطِرُ …', model: 'الجَوُّ بَارِدٌ، وَتُمْطِرُ كَثِيرًا.', modelEn: 'It’s cold and rains a lot.' },
      ],
      girl: 'أُسَاعِدُكِ · لَكِ · بَلَدِكِ',
      notes: 'Core: ayna yaqaʿu …? + muqābila (L01, L08), opening times, sa-abqā + a duration, sa-yakūnu al-jawwu (L03), weather verbs (tumṭiru). EXAM TIP: four of these five tasks are questions YOU ask — start each with a question word.',
    },
    {
      id: 'B', level: 'Core+', setting: 'a phone booking', title: 'Role play B — Booking a hotel room', ar: 'حَجْزُ غُرْفَةٍ فِي فُنْدُقٍ', you: 'a traveller', them: 'the hotel receptionist',
      tasks: [
        { core: true, ex: 'فُنْدُقُ البَحْرِ، صَبَاحَ الخَيْرِ.', task: 'Say what you want to book.', help: 'أُرِيدُ أَنْ أَحْجِزَ …', model: 'صَبَاحَ النُّورِ، أُرِيدُ أَنْ أَحْجِزَ غُرْفَةً لِشَخْصَيْنِ.', modelEn: 'Good morning, I’d like to book a room for two people.' },
        { core: true, ex: 'لِكَمْ لَيْلَةً؟', task: 'Give the number of nights and dates.', help: 'لِثَلَاثِ لَيَالٍ، مِنْ … إِلَى …', model: 'لِثَلَاثِ لَيَالٍ، مِنَ العَاشِرِ إِلَى الثَّالِثَ عَشَرَ مِنْ يُولْيُو.', modelEn: 'Three nights, from 10 to 13 July.' },
        { ex: 'عِنْدَنَا غُرْفَةٌ تُطِلُّ عَلَى البَحْرِ بِمِئَةِ دِينَارٍ، وَغُرْفَةٌ أُخْرَى بِسَبْعِينَ.', task: 'Choose with a comparison and reason.', help: 'سَآخُذُ … لِأَنَّهَا أَرْخَصُ / أَجْمَلُ …', model: 'سَآخُذُ الغُرْفَةَ الثَّانِيَةَ، لِأَنَّهَا أَرْخَصُ، وَسَنَقْضِي أَكْثَرَ الوَقْتِ خَارِجَ الفُنْدُقِ.', modelEn: 'The second room — it’s cheaper, and we’ll spend most of the time out.' },
        { ex: 'حَسَنًا.', task: 'ASK two questions about services.', help: 'هَلْ يُوجَدُ …؟ وَهَلْ …؟', model: 'هَلْ يُوجَدُ إِنْتَرْنِتٌ مَجَّانِيٌّ؟ وَهَلِ الفُطُورُ مَشْمُولٌ فِي السِّعْرِ؟', modelEn: 'Is there free wifi? And is breakfast included?' },
        { unexpected: true, ex: 'نَعَمْ لِلِاثْنَيْنِ. كَيْفَ سَتَصِلُونَ إِلَى الفُنْدُقِ؟', task: 'Answer the unexpected question (future + transport).', help: 'سَنَصِلُ بِـالطَّائِرَةِ / بِالسَّيَّارَةِ …', model: 'سَنَصِلُ بِالطَّائِرَةِ إِلَى عَمَّانَ، ثُمَّ سَنَسْتَأْجِرُ سَيَّارَةً إِلَى العَقَبَةِ.', modelEn: 'We’ll fly to Amman, then hire a car to Aqaba.' },
      ],
      girl: '(answers unchanged for a girl)',
      notes: 'Core+: urīdu an aḥjiza (L07), li-thalāthi layālin + dates with ordinals, a comparison (arkhaṣ) + li-annahā (L09), the CANDIDATE asks with hal yūjadu …? (L08), sa- + thumma. EXAM TIP: numbers 3–10 take a plural noun (ثَلَاثِ لَيَالٍ).',
    },
    {
      id: 'C', level: 'Develop', setting: 'the school eco-club', title: 'Role play C — A problem in my town', ar: 'مُشْكِلَةٌ بِيئِيَّةٌ فِي مَدِينَتِي', you: 'a member of the eco-club', them: 'a reporter for the local paper',
      tasks: [
        { ex: 'مَا أَكْبَرُ مُشْكِلَةٍ بِيئِيَّةٍ فِي مَدِينَتِكَ؟', task: 'Name a problem and its cause.', help: 'أَكْبَرُ مُشْكِلَةٍ … بِسَبَبِ …', model: 'أَكْبَرُ مُشْكِلَةٍ تَلَوُّثُ الهَوَاءِ، بِسَبَبِ الزِّحَامِ الشَّدِيدِ وَكَثْرَةِ السَّيَّارَاتِ القَدِيمَةِ.', modelEn: 'Air pollution, because of heavy traffic and many old cars.' },
        { ex: 'وَمَا نَتَائِجُهَا؟', task: 'Give effects with mimmā.', help: '… مِمَّا يُؤَدِّي إِلَى …', model: 'يَمْتَلِئُ الهَوَاءُ بِالدُّخَانِ، مِمَّا يُؤَدِّي إِلَى أَمْرَاضِ الرِّئَةِ، خُصُوصًا عِنْدَ الأَطْفَالِ وَكِبَارِ السِّنِّ.', modelEn: 'The air fills with smoke, leading to lung disease, especially in children and the elderly.' },
        { ex: 'مَاذَا فَعَلَ نَادِيكُمْ؟', task: 'Narrate an action (past + passive).', help: 'نَظَّمْنَا … ؛ وَزُرِعَتْ …', model: 'نَظَّمْنَا يَوْمًا بِلَا سَيَّارَاتٍ فِي حَيِّ المَدْرَسَةِ، وَزُرِعَتْ خَمْسُونَ شَجَرَةً عَلَى جَانِبَيِ الشَّارِعِ.', modelEn: 'We held a car-free day near school, and fifty trees were planted along the street.' },
        { ex: 'وَمَاذَا يَجِبُ أَنْ تَفْعَلَ البَلَدِيَّةُ؟', task: 'Give obligations with yajibu ʿalā.', help: 'يَجِبُ عَلَى البَلَدِيَّةِ أَنْ … وَأَنْ …', model: 'يَجِبُ عَلَى البَلَدِيَّةِ أَنْ تُحَسِّنَ الحَافِلَاتِ العَامَّةَ، وَأَنْ تَبْنِيَ طُرُقًا آمِنَةً لِلدَّرَّاجَاتِ.', modelEn: 'The council must improve public buses and build safe cycle lanes.' },
        { unexpected: true, ex: 'وَهَلْ تَغَيَّرَتِ المَدِينَةُ مُنْذُ طُفُولَتِكَ؟', task: 'Answer the unexpected question (past vs present).', help: 'كَانَتْ … أَمَّا الآنَ فَـ…', model: 'كَانَتْ أَهْدَأَ وَأَنْظَفَ، أَمَّا الآنَ فَهِيَ أَكْبَرُ وَأَكْثَرُ ازْدِحَامًا، لٰكِنَّ النَّاسَ أَكْثَرُ وَعْيًا بِالبِيئَةِ.', modelEn: 'Quieter and cleaner; now bigger and busier — but people are more environmentally aware.' },
      ],
      girl: 'مَدِينَتِكِ · طُفُولَتِكِ · نَادِيكُنَّ / نَادِيكُمْ',
      notes: 'Develop: aḥbaru mushkilatin + bi-sababi (L04), mimmā yuʾaddī ilā, a past action + passive zuriʿat + a number (L05), yajibu ʿalā … an ×2 (L05, L08), kānat + comparatives vs ammā al-āna fa- (L03). EXAM TIP: three linked sentences beat one long list.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a youth debate', title: 'Role play D — Can technology save the planet?', ar: 'هَلْ تُنْقِذُ التِّكْنُولُوجْيَا الكَوْكَبَ؟', you: 'a student debater', them: 'the debate chair',
      tasks: [
        { ex: 'هَلِ التِّكْنُولُوجْيَا صَدِيقَةٌ لِلْبِيئَةِ؟', task: 'Give a balanced thesis.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، تُسَاعِدُنَا الطَّاقَةُ الشَّمْسِيَّةُ وَالسَّيَّارَاتُ الكَهْرَبَائِيَّةُ عَلَى تَقْلِيلِ التَّلَوُّثِ، وَمِنْ نَاحِيَةٍ أُخْرَى، تُرْمَى مَلَايِينُ الأَجْهِزَةِ كُلَّ عَامٍ.', modelEn: 'Solar power and electric cars cut pollution; yet millions of devices are thrown away every year.' },
        { ex: 'وَمَا نَتِيجَةُ رَمْيِ الأَجْهِزَةِ؟', task: 'Cause → effect with the passive.', help: 'تُرْمَى … ، مِمَّا …', model: 'تُرْمَى فِي مَكَبَّاتٍ فِي دُوَلٍ فَقِيرَةٍ، فَتُحْرَقُ، مِمَّا يُلَوِّثُ الهَوَاءَ وَالمَاءَ وَيَضُرُّ بِصِحَّةِ الأَطْفَالِ هُنَاكَ.', modelEn: 'They’re dumped in poor countries and burnt, polluting air and water and harming children’s health there.' },
        { ex: 'هَلْ غَيَّرْتَ عَادَاتِكَ الرَّقْمِيَّةَ؟', task: 'Narrate a personal change with a measurable result.', help: 'نَعَمْ، … بَدَلًا مِنْ … فَوَفَّرْتُ …', model: 'نَعَمْ، أَصْلَحْتُ هَاتِفِي القَدِيمَ بَدَلًا مِنْ شِرَاءِ هَاتِفٍ جَدِيدٍ، فَوَفَّرْتُ مِئَتَيْ جُنَيْهٍ، وَمَنَعْتُ جِهَازًا مِنَ الوُصُولِ إِلَى المَكَبِّ.', modelEn: 'I repaired my old phone instead of buying new — saving £200 and keeping a device out of landfill.' },
        { ex: 'لٰكِنَّ الشَّرِكَاتِ تُرِيدُ أَنْ نَشْتَرِيَ دَائِمًا.', task: 'Concede and say who must act.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ … يَجِبُ عَلَى …', model: 'صَحِيحٌ أَنَّ هَدَفَهَا الرِّبْحُ، غَيْرَ أَنَّ القَوَانِينَ تَسْتَطِيعُ أَنْ تُجْبِرَهَا؛ فَيَجِبُ عَلَى الحُكُومَاتِ أَنْ تَفْرِضَ صِنَاعَةَ أَجْهِزَةٍ قَابِلَةٍ لِلْإِصْلَاحِ.', modelEn: 'Profit is their aim, but laws can force them: governments must require repairable devices.' },
        { unexpected: true, ex: 'لَوِ اخْتَرَعْتَ جِهَازًا لِحِمَايَةِ البِيئَةِ، مَاذَا يَكُونُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوِ اخْتَرَعْتُ …، لَـ…', model: 'لَوِ اخْتَرَعْتُ جِهَازًا، لَصَنَعْتُ آلَةً صَغِيرَةً تُحَوِّلُ البْلَاسْتِيكَ فِي البُيُوتِ إِلَى مَوَادَّ لِلْبِنَاءِ، فَلَا يَصِلُ شَيْءٌ إِلَى البَحْرِ.', modelEn: 'A small machine turning household plastic into building materials, so nothing reaches the sea.' },
      ],
      girl: 'غَيَّرْتِ · عَادَاتِكِ · اخْتَرَعْتِ',
      notes: 'Stretch: a balanced thesis with a passive (turmā), cause → effect with fa- + passive + mimmā (L04), badalan min + a measurable result with miʾatay (L09), a concession + yajibu ʿalā … an (L05), law … la- with a relative-free description (L10). EXAM TIP: numbers in a Stretch answer show precision — use one.',
      modelFoot: 'Stretch: all of Topic C in one card — balance, cause and effect, a measurable personal action, obligation and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'مَدِينَتِي وَعَالَمِي', aim: 'one full sentence per question',
      qs: [
        { q: 'أَيْنَ تَقَعُ مَدِينَتُكَ؟', en: 'Where is your town?', start: 'تَقَعُ مَدِينَتِي فِي …', model: 'تَقَعُ مَدِينَتِي فِي شَمَالِ إِنْجِلْتِرَا.', modelEn: 'In the north of England.' },
        { q: 'مَاذَا يُوجَدُ فِي حَيِّكَ؟', en: 'What is there in your area?', start: 'يُوجَدُ … وَتُوجَدُ …', model: 'يُوجَدُ مَسْجِدٌ، وَتُوجَدُ حَدِيقَةٌ كَبِيرَةٌ.', modelEn: 'A mosque and a big park.' },
        { q: 'كَيْفَ الجَوُّ فِي الشِّتَاءِ؟', en: 'What’s the weather like in winter?', start: 'الجَوُّ … وَتُمْطِرُ …', model: 'الجَوُّ بَارِدٌ، وَتُمْطِرُ كَثِيرًا.', modelEn: 'Cold, and it rains a lot.' },
        { q: 'مَاذَا تَفْعَلُ لِحِمَايَةِ البِيئَةِ؟', en: 'What do you do to protect the environment?', start: 'أُعِيدُ تَدْوِيرَ … / أُطْفِئُ …', model: 'أُعِيدُ تَدْوِيرَ البْلَاسْتِيكِ وَالوَرَقِ.', modelEn: 'I recycle plastic and paper.' },
        { q: 'كَمْ سَاعَةً تَسْتَخْدِمُ الهَاتِفَ يَوْمِيًّا؟', en: 'How many hours a day do you use your phone?', start: 'أَسْتَخْدِمُهُ …', model: 'أَسْتَخْدِمُهُ سَاعَتَيْنِ تَقْرِيبًا.', modelEn: 'About two hours.' },
      ],
      foot: 'Core: one full sentence for every question — يُوجَدُ for masculine, تُوجَدُ for feminine nouns. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + accurate agreement = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'البِيئَةُ وَالمَدِينَةُ وَالتِّكْنُولُوجْيَا', aim: 'two or three sentences, with cause, effect and a time frame',
      qs: [
        { q: 'صِفْ مَكَانًا طَبِيعِيًّا جَمِيلًا زُرْتَهُ.', en: 'Describe a beautiful natural place you visited.', start: 'زُرْتُ … ؛ كَانَتِ … وَكَانَ …', model: 'زُرْتُ مِنْطَقَةَ البُحَيْرَاتِ؛ كَانَتِ الجِبَالُ خَضْرَاءَ، وَكَانَ المَاءُ صَافِيًا، لٰكِنَّ الجَوَّ كَانَ مُمْطِرًا طُولَ الوَقْتِ.', modelEn: 'The Lake District: green mountains, clear water — but rainy all the time.' },
        { q: 'مَا مُشْكِلَةُ البْلَاسْتِيكِ؟', en: 'What’s the problem with plastic?', start: 'يُرْمَى … مِمَّا … ؛ لِذٰلِكَ …', model: 'يُرْمَى فِي البَحْرِ، مِمَّا يَقْتُلُ الأَسْمَاكَ وَالسَّلَاحِفَ؛ لِذٰلِكَ يَجِبُ أَنْ نَسْتَخْدِمَ حَقَائِبَ مِنَ القُمَاشِ.', modelEn: 'It’s thrown in the sea, killing fish and turtles — so we should use cloth bags.' },
        { q: 'كَيْفَ تَسْتَخْدِمُ الإِنْتَرْنِتَ لِلدِّرَاسَةِ؟', en: 'How do you use the internet for study?', start: 'أَبْحَثُ عَنْ … ، وَأُشَاهِدُ … ، لٰكِنَّ …', model: 'أَبْحَثُ عَنِ المَعْلُومَاتِ، وَأُشَاهِدُ دُرُوسًا قَصِيرَةً، لٰكِنِّي أُغْلِقُ وَسَائِلَ التَّوَاصُلِ لِكَيْ أُرَكِّزَ.', modelEn: 'I look things up and watch short lessons, but I close social media to concentrate.' },
        { q: 'كَيْفَ كَانَ التَّسَوُّقُ فِي المَاضِي؟', en: 'What was shopping like in the past?', start: 'كَانَ النَّاسُ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَ النَّاسُ يَذْهَبُونَ إِلَى السُّوقِ كُلَّ يَوْمٍ، أَمَّا اليَوْمَ فَنَشْتَرِي عَلَى الإِنْتَرْنِتِ، وَتَصِلُ الطُّلُبَاتُ إِلَى البَيْتِ.', modelEn: 'People went to the market daily; today we shop online and orders come to the door.' },
        { q: 'أَيْنَ تُحِبُّ أَنْ تَسْكُنَ فِي المُسْتَقْبَلِ؟', en: 'Where would you like to live in future?', start: 'سَأَسْكُنُ فِي … لِأَنَّ …', model: 'سَأَسْكُنُ فِي قَرْيَةٍ قُرْبَ البَحْرِ، لِأَنَّ الهَوَاءَ أَنْظَفُ وَالحَيَاةَ أَهْدَأُ مِنَ المَدِينَةِ.', modelEn: 'A village by the sea — cleaner air and a calmer life than the city.' },
      ],
      foot: 'Develop: two or three sentences — a description, a cause or effect, and a past or future detail.',
      modelFoot: 'Agreement + cause / effect + two time frames = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'مُسْتَقْبَلُ الكَوْكَبِ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'مَنِ المَسْؤُولُ عَنْ حِمَايَةِ البِيئَةِ؟', en: 'Who is responsible for protecting the environment?', start: 'أَرَى أَنَّ المَسْؤُولِيَّةَ … ؛ فَيَجِبُ عَلَى … وَعَلَى …', model: 'أَرَى أَنَّ المَسْؤُولِيَّةَ مُشْتَرَكَةٌ؛ فَيَجِبُ عَلَى الحُكُومَاتِ أَنْ تَسُنَّ القَوَانِينَ، وَعَلَى كُلِّ فَرْدٍ أَنْ يُغَيِّرَ عَادَاتِهِ.', modelEn: 'Shared: governments must pass laws and every individual must change habits.' },
        { q: 'هَلْ يَجِبُ أَنْ نُسَافِرَ أَقَلَّ بِالطَّائِرَةِ؟', en: 'Should we fly less?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الطَّائِرَاتِ تُلَوِّثُ كَثِيرًا، غَيْرَ أَنَّ السَّفَرَ يُقَرِّبُ الشُّعُوبَ؛ لِذٰلِكَ أُفَضِّلُ أَنْ نُسَافِرَ أَقَلَّ، وَلِمُدَّةٍ أَطْوَلَ، وَبِالقِطَارِ حِينَ يُمْكِنُ.', modelEn: 'Planes pollute, but travel brings peoples together — so fewer, longer trips, and by train when possible.' },
        { q: 'هَلْ جَعَلَتْنَا التِّكْنُولُوجْيَا أَقْرَبَ أَمْ أَبْعَدَ؟', en: 'Has technology brought us closer or further apart?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، أَتَكَلَّمُ مَعَ جَدَّتِي فِي مِصْرَ كُلَّ يَوْمٍ، وَمِنْ نَاحِيَةٍ أُخْرَى، نَجْلِسُ أَحْيَانًا فِي الغُرْفَةِ نَفْسِهَا وَكُلٌّ مِنَّا يَنْظُرُ إِلَى شَاشَتِهِ.', modelEn: 'I talk to grandma in Egypt daily, yet sometimes we sit in one room, each staring at a screen.' },
        { q: 'كَيْفَ سَتَكُونُ المُدُنُ بَعْدَ خَمْسِينَ سَنَةً؟', en: 'What will cities be like in fifty years?', start: 'سَتَكُونُ … ، وَسَتُبْنَى … إِذَا …', model: 'سَتَكُونُ أَكْثَرَ خُضْرَةً، وَسَتُبْنَى البُيُوتُ مِنْ مَوَادَّ مُعَادٍ تَدْوِيرُهَا، إِذَا بَدَأْنَا الآنَ.', modelEn: 'Greener, with homes built from recycled materials — if we start now.' },
        { q: 'لَوْ كُنْتَ رَئِيسَ بَلَدِيَّةِ مَدِينَتِكَ، مَاذَا تُغَيِّرُ؟', en: 'If you were your town’s mayor, what would you change?', start: 'لَوْ كُنْتُ …، لَـ…', model: 'لَوْ كُنْتُ رَئِيسَ البَلَدِيَّةِ، لَجَعَلْتُ الحَافِلَاتِ مَجَّانِيَّةً لِلطُّلَّابِ، وَلَحَوَّلْتُ مَوْقِفَ السَّيَّارَاتِ الكَبِيرَ إِلَى حَدِيقَةٍ.', modelEn: 'Free buses for students, and turn the big car park into a park.' },
      ],
      foot: 'Stretch: shared responsibility, a concession with li-dhālika, a balanced view, a future passive with idhā and law … la-.',
      modelFoot: 'Stretch: yajibu ʿalā … wa-ʿalā, comparatives, sa-tubnā (future passive) and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I answered every role-play task, including the unexpected one.' },
    { route: 'core', text: 'I used yaqaʿu / taqaʿu and yūjadu / tūjadu correctly.' },
    { route: 'develop', text: 'I gave a cause, an effect and a solution.' },
    { route: 'develop', text: 'My numbers, prices and dates were accurate.' },
    { route: 'stretch', text: 'I used the passive, a concession and law … la-.' },
  ],
};
speak.RP[1].tasks[4].help = 'سَنَصِلُ بِالطَّائِرَةِ / بِالسَّيَّارَةِ …';
speak.RP[2].tasks[4].help = 'كَانَتْ … أَمَّا الآنَ فَهِيَ …';
speak.RP[3].tasks[2].help = 'نَعَمْ، … بَدَلًا مِنْ … فَوَفَّرْتُ …';
speak.RP[3].tasks[4].help = 'لَوِ اخْتَرَعْتُ …، لَصَنَعْتُ …';
speak.CONV[1].qs[3].start = 'كَانَ النَّاسُ … أَمَّا اليَوْمَ فَنَشْتَرِي …';
speak.CONV[2].qs[4].start = 'لَوْ كُنْتُ …، لَجَعَلْتُ …';

const Q2_CORE = `مَرْحَبًا يَا طَارِقُ،
كَيْفَ حَالُكَ؟ قَضَيْتُ عُطْلَةَ نِهَايَةِ الأُسْبُوعِ مَعَ المَدْرَسَةِ فِي مِنْطَقَةِ البُحَيْرَاتِ. تَقَعُ المِنْطَقَةُ فِي شَمَالِ غَرْبِ إِنْجِلْتِرَا، وَفِيهَا جِبَالٌ عَالِيَةٌ وَبُحَيْرَاتٌ صَافِيَةٌ. كَانَ الجَوُّ بَارِدًا وَمُمْطِرًا، لٰكِنَّنَا مَشَيْنَا عَشَرَةَ كِيلُومِتْرَاتٍ يَوْمَ السَّبْتِ! لِلْأَسَفِ رَأَيْنَا قِمَامَةً كَثِيرَةً قُرْبَ البُحَيْرَةِ، بِسَبَبِ السُّيَّاحِ. لِذٰلِكَ جَمَعْنَا البْلَاسْتِيكَ فِي أَكْيَاسٍ كَبِيرَةٍ. أَظُنُّ أَنَّ الرِّحْلَةَ كَانَتْ مُمْتِعَةً وَمُفِيدَةً. فِي الصَّيْفِ سَأَعُودُ إِلَى هُنَاكَ مَعَ عَائِلَتِي. وَأَنْتَ، هَلْ زُرْتَ مَكَانًا طَبِيعِيًّا جَمِيلًا؟
إِلَى اللِّقَاءِ،
عَادِلٌ`;
const Q2_FULL = `عَزِيزِي طَارِقُ،
عُدْتُ أَمْسِ مِنْ رِحْلَةٍ مَدْرَسِيَّةٍ إِلَى مِنْطَقَةِ البُحَيْرَاتِ، الَّتِي تَقَعُ فِي شَمَالِ غَرْبِ إِنْجِلْتِرَا، وَيَقْصِدُهَا مَلَايِينُ السُّيَّاحِ كُلَّ عَامٍ. صَحِيحٌ أَنَّ المَطَرَ لَمْ يَتَوَقَّفْ يَوْمَيْنِ كَامِلَيْنِ، غَيْرَ أَنَّ الجِبَالَ الخَضْرَاءَ وَالبُحَيْرَاتِ الصَّافِيَةَ كَانَتْ أَجْمَلَ مِنْ أَيِّ صُورَةٍ. وَمَا أَحْزَنَنِي أَنَّنَا وَجَدْنَا قِمَامَةً كَثِيرَةً تُرِكَتْ عَلَى الشَّاطِئِ، مِمَّا يُهَدِّدُ الطُّيُورَ وَالأَسْمَاكَ. لِذٰلِكَ قَضَيْنَا صَبَاحَ الأَحَدِ فِي تَنْظِيفِ المَكَانِ، فَجُمِعَ أَكْثَرُ مِنْ عِشْرِينَ كِيسًا مِنَ البْلَاسْتِيكِ! وَإِذَا وَافَقَ المُدِيرُ، فَسَنُنَظِّمُ حَمْلَةً مِثْلَهَا فِي حَدِيقَةِ مَدِينَتِنَا. هَلْ تُشَارِكُ مَعَنَا؟
مَعَ تَحِيَّاتِي،
عَادِلٌ`;
const Q3A_CORE = `أَسْكُنُ فِي مَدِينَةِ مَانْشِسْتَرَ. تَقَعُ المَدِينَةُ فِي شَمَالِ غَرْبِ إِنْجِلْتِرَا، وَهِيَ مَدِينَةٌ كَبِيرَةٌ وَمَشْهُورَةٌ بِكُرَةِ القَدَمِ وَالمَطَرِ!
فِي حَيِّي يُوجَدُ مَسْجِدٌ وَمَكْتَبَةٌ، وَتُوجَدُ حَدِيقَةٌ كَبِيرَةٌ مُقَابِلَ بَيْتِي. يُوجَدُ أَيْضًا سُوقٌ قَدِيمٌ، وَأَشْتَرِي مِنْهُ الفَوَاكِهَ يَوْمَ السَّبْتِ، لِأَنَّهَا أَرْخَصُ مِنَ المَحَلَّاتِ الكَبِيرَةِ. الجَوُّ فِي الشِّتَاءِ بَارِدٌ، وَتُمْطِرُ كَثِيرًا، أَمَّا فِي الصَّيْفِ فَالجَوُّ مُعْتَدِلٌ.
لِلْأَسَفِ فِي المَدِينَةِ مَشَاكِلُ بِيئِيَّةٌ. أَكْبَرُ مُشْكِلَةٍ تَلَوُّثُ الهَوَاءِ بِسَبَبِ السَّيَّارَاتِ الكَثِيرَةِ، مِمَّا يُسَبِّبُ أَمْرَاضًا لِلنَّاسِ، خُصُوصًا لِلْأَطْفَالِ. فِي السَّنَةِ المَاضِيَةِ زَرَعْنَا مَعَ المَدْرَسَةِ ثَلَاثِينَ شَجَرَةً فِي الحَدِيقَةِ، وَنَظَّفْنَا الشَّارِعَ مِنَ القِمَامَةِ.
كَانَتِ المَدِينَةُ أَصْغَرَ فِي المَاضِي، أَمَّا الآنَ فَهِيَ أَكْبَرُ وَأَكْثَرُ ازْدِحَامًا. يَجِبُ عَلَى البَلَدِيَّةِ أَنْ تُحَسِّنَ الحَافِلَاتِ، وَيَجِبُ عَلَيْنَا أَنْ نَمْشِيَ أَكْثَرَ. فِي المُسْتَقْبَلِ أُرِيدُ أَنْ تَكُونَ مَدِينَتِي أَنْظَفَ وَأَكْثَرَ خُضْرَةً.`;
const Q3A_FULL = `يَقُولُ جَدِّي إِنَّهُ حِينَ وَصَلَ إِلَى مَانْشِسْتَرَ قَبْلَ خَمْسِينَ عَامًا، كَانَتْ سَمَاؤُهَا رَمَادِيَّةً مِنْ دُخَانِ المَصَانِعِ، وَكَانَتْ أَنْهَارُهَا سَوْدَاءَ. أَمَّا اليَوْمَ، فَأَسْتَطِيعُ أَنْ أَرَى البَطَّ يَسْبَحُ فِي القَنَاةِ القَرِيبَةِ مِنْ بَيْتِنَا، وَأَرْكَبُ دَرَّاجَتِي عَلَى ضِفَّتِهَا كُلَّ صَبَاحٍ.
فَقَدْ تَغَيَّرَتِ المَدِينَةُ كَثِيرًا خِلَالَ نِصْفِ قَرْنٍ؛ إِذْ أُغْلِقَتِ المَصَانِعُ القَدِيمَةُ، وَتَحَوَّلَ بَعْضُهَا إِلَى مَتَاحِفَ وَمَكَاتِبَ، وَبُنِيَتْ خُطُوطُ التِّرَامِ الَّتِي تَرْبِطُ الأَحْيَاءَ بِوَسَطِ المَدِينَةِ، مِمَّا قَلَّلَ عَدَدَ السَّيَّارَاتِ فِي الشَّوَارِعِ.
غَيْرَ أَنَّ التَّحَدِّيَاتِ لَمْ تَنْتَهِ؛ فَبِسَبَبِ الزِّحَامِ المُتَزَايِدِ، مَا زَالَ الهَوَاءُ مُلَوَّثًا قُرْبَ الطُّرُقِ الكَبِيرَةِ، مِمَّا يُؤَدِّي إِلَى أَمْرَاضِ الرَّبْوِ عِنْدَ الأَطْفَالِ. لِذٰلِكَ انْضَمَمْتُ إِلَى نَادِي البِيئَةِ، وَشَارَكْتُ فِي زِرَاعَةِ مِئَةِ شَجَرَةٍ فِي حَيِّنَا، وَفِي حَمْلَةٍ لِإِقْنَاعِ الآبَاءِ بِإِطْفَاءِ مُحَرِّكَاتِ سَيَّارَاتِهِمْ أَمَامَ المَدْرَسَةِ.
أَرَى أَنَّ المُسْتَقْبَلَ فِي أَيْدِينَا: فَإِذَا اسْتَخْدَمْنَا المُوَاصَلَاتِ العَامَّةَ وَالدَّرَّاجَاتِ، فَسَتُصْبِحُ مَدِينَتُنَا أَنْظَفَ وَأَهْدَأَ. وَلَوْ رَآهَا جَدِّي بَعْدَ عِشْرِينَ عَامًا، لَمَا عَرَفَهَا مِنْ شِدَّةِ خُضْرَتِهَا.`;
const Q3B_FULL = `نَحْمِلُ فِي جُيُوبِنَا أَجْهِزَةً أَقْوَى مِنَ الحَوَاسِيبِ الَّتِي أَوْصَلَتِ الإِنْسَانَ إِلَى القَمَرِ، وَمَعَ ذٰلِكَ تَزْدَادُ مَشَاكِلُ كَوْكَبِنَا كُلَّ عَامٍ. فَهَلْ تُنْقِذُ التِّكْنُولُوجْيَا البِيئَةَ أَمْ تَضُرُّهَا؟
مِنْ نَاحِيَةٍ، تُقَدِّمُ التِّكْنُولُوجْيَا حُلُولًا رَائِعَةً، كَالطَّاقَةِ الشَّمْسِيَّةِ وَالسَّيَّارَاتِ الكَهْرَبَائِيَّةِ وَالتَّطْبِيقَاتِ الَّتِي تَقِيسُ اسْتِهْلَاكَ المَاءِ وَالكَهْرَبَاءِ فِي البُيُوتِ، فَتُسَاعِدُ العَائِلَاتِ عَلَى التَّوْفِيرِ. وَمِنْ نَاحِيَةٍ أُخْرَى، تُصْنَعُ الأَجْهِزَةُ مِنْ مَعَادِنَ نَادِرَةٍ وَغَالِيَةٍ، ثُمَّ تُرْمَى بَعْدَ سَنَتَيْنِ أَوْ ثَلَاثٍ، مِمَّا يَخْلُقُ جِبَالًا مِنَ النُّفَايَاتِ الإِلِكْتُرُونِيَّةِ، يُرْسَلُ أَغْلَبُهَا إِلَى دُوَلٍ فَقِيرَةٍ.
وَقَدْ قَرَّرْتُ أَنْ أُغَيِّرَ عَادَاتِي بَعْدَ أَنْ شَاهَدْتُ فِيلْمًا وَثَائِقِيًّا عَنْ مَكَبٍّ فِي غَانَا يَحْرِقُ فِيهِ الأَطْفَالُ الأَجْهِزَةَ القَدِيمَةَ؛ فَأَصْلَحْتُ هَاتِفِي بَدَلًا مِنْ تَغْيِيرِهِ، وَأَقْنَعْتُ أُسْرَتِي بِأَنْ نُعِيدَ تَدْوِيرَ الأَجْهِزَةِ القَدِيمَةِ بَدَلًا مِنْ رَمْيِهَا فِي القِمَامَةِ.
لِذٰلِكَ أَرَى أَنَّ التِّكْنُولُوجْيَا أَدَاةٌ، لَا مُنْقِذٌ وَلَا عَدُوٌّ. فَإِذَا صُنِعَتِ الأَجْهِزَةُ لِتَعِيشَ طَوِيلًا، فَسَتُصْبِحُ جُزْءًا مِنَ الحَلِّ لَا مِنَ المُشْكِلَةِ الَّتِي نَعِيشُهَا اليَوْمَ.`;

const write = {
  ...base,
  focus: 'Final-revision Paper 4 practice on Topic C: fill in a hotel-booking form, write an email about a school trip to a national park and an environmental problem you saw, and write an extended piece about your town past, present and future or about whether technology saves or harms the planet. Exam skills: plan cause → effect → solution, and check numbers and agreement.',
  lift: [
    { ar: 'تَقَعُ المِنْطَقَةُ فِي شَمَالِ غَرْبِ إِنْجِلْتِرَا', en: 'the area is in the north-west of England' },
    { ar: 'رَأَيْنَا قِمَامَةً كَثِيرَةً بِسَبَبِ السُّيَّاحِ، لِذٰلِكَ جَمَعْنَا …', en: 'we saw lots of litter because of tourists, so we collected …' },
    { ar: 'يَجِبُ عَلَى البَلَدِيَّةِ أَنْ تُحَسِّنَ …', en: 'the council must improve …' },
  ],
  checkTip: 'EXAM CHECK (2 min): every bullet answered? greeting and closing? Then check Topic C accuracy — taqaʿu for a feminine place (al-madīna, al-minṭaqa), non-human plurals take the feminine singular (jibālun ʿāliyatun), numbers 3–10 + plural, 11+ + singular (ʿishrīna kīsan), bi-sababi + noun vs li-anna + sentence, and passives (turikat, zuriʿat, buniyat).',
  FORM: {
    title: 'Hotel booking form', ar: 'اسْتِمَارَةُ حَجْزِ فُنْدُقٍ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'عَادِلٌ مَحْمُودٌ', modelEn: 'Adil Mahmoud' },
      { core: true, ar: 'تَارِيخُ الوُصُولِ', en: 'Arrival date', model: 'العَاشِرُ مِنْ يُولْيُو', modelEn: '10 July' },
      { core: true, ar: 'عَدَدُ اللَّيَالِي', en: 'Number of nights', model: 'ثَلَاثُ لَيَالٍ', modelEn: 'three nights' },
      { core: true, ar: 'نَوْعُ الغُرْفَةِ', en: 'Room type', model: 'غُرْفَةٌ لِشَخْصَيْنِ', modelEn: 'a double room' },
      { core: true, ar: 'وَسِيلَةُ الوُصُولِ', en: 'How you will arrive', model: 'بِالقِطَارِ', modelEn: 'by train' },
      { core: true, ar: 'رَقْمُ الهَاتِفِ', en: 'Phone number', model: '٠٧٧٠٠٩٠٠١٢٣', modelEn: '07700 900123' },
      { ar: 'طَلَبٌ خَاصٌّ', en: 'A special request', model: 'غُرْفَةٌ هَادِئَةٌ بَعِيدَةٌ عَنِ الشَّارِعِ', modelEn: 'a quiet room away from the street' },
      { ar: 'جُمْلَةٌ: لِمَاذَا اخْتَرْتَ هٰذَا الفُنْدُقَ؟', en: 'ONE sentence: why you chose this hotel', model: 'اخْتَرْتُهُ لِأَنَّهُ يَسْتَخْدِمُ الطَّاقَةَ الشَّمْسِيَّةَ، وَيَقَعُ قُرْبَ البَحْرِ.', modelEn: 'Because it uses solar power and is near the sea.' },
    ],
    foot: 'One word or a short phrase for each box — box 2 is a date with an ordinal, box 3 a number + plural; the last box is a full sentence with li-anna.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 3: thalāthu layālin (3–10 + genitive plural). Box 7: agreement — ghurfatun hādiʾatun.',
  },
  Q2: {
    short: 'an email about a trip to a national park', title: 'Question 2: our trip to the Lake District', ar: 'رِحْلَتُنَا إِلَى مِنْطَقَةِ البُحَيْرَاتِ',
    task: 'Write an email in Arabic to a friend of about 80–90 words. You must include: • where you went and where the place is • a description of the place and the weather • an environmental problem you saw and what you did • your opinion and your plans, and a question for your friend.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'taqaʿu fī + a compass point, and the weather.', 'A cause (bi-sababi) and a result (li-dhālika).', 'About 80–90 words.'],
    phrases: [['تَقَعُ المِنْطَقَةُ فِي شَمَالِ …', 'the area is in the north of …'], ['فِيهَا جِبَالٌ عَالِيَةٌ وَ…', 'it has high mountains and …'], ['رَأَيْنَا … بِسَبَبِ … لِذٰلِكَ …', 'we saw … because of … so …'], ['فِي الصَّيْفِ سَأَعُودُ …', 'in the summer I will return …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنْ رِحْلَةٍ إِلَى مَكَانٍ طَبِيعِيٍّ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about a trip to a natural place (80–90 words).'],
      ['1', 'أَيْنَ ذَهَبْتَ؟ وَأَيْنَ يَقَعُ المَكَانُ؟', 'Where you went; where it is'],
      ['2', 'صِفِ المَكَانَ وَالطَّقْسَ.', 'Describe the place and the weather'],
      ['3', 'مَا المُشْكِلَةُ البِيئِيَّةُ الَّتِي رَأَيْتَهَا؟ وَمَاذَا فَعَلْتُمْ؟', 'An environmental problem; what you did'],
      ['4', 'مَا رَأْيُكَ؟ وَمَا خِطَطُكَ؟ وَاسْأَلْ صَدِيقَكَ سُؤَالًا.', 'Your opinion; plans; a question'],
    ],
    qwords: 'أَيْنَ يَقَعُ (where is it → فِي شَمَالِ …) · صِفْ (describe!) · رَأَيْتَهَا (you saw it — PAST) · مَاذَا فَعَلْتُمْ (what did you do) · خِطَطُكَ (FUTURE)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', 'Hello …, how are you?'],
      ['1', 'قَضَيْتُ … فِي ______ . تَقَعُ المِنْطَقَةُ فِي ______ .', 'I spent … in … It is in …'],
      ['2', 'فِيهَا ______ وَ______ . كَانَ الجَوُّ ______ .', 'It has … and … The weather was …'],
      ['3', 'رَأَيْنَا ______ بِسَبَبِ ______ ، لِذٰلِكَ ______ .', 'We saw … because of …, so …'],
      ['4', 'أَظُنُّ أَنَّ ______ . فِي الصَّيْفِ سَأَعُودُ ______ .', 'I think … In summer I’ll return …'],
      ['end', 'وَأَنْتَ، ______ ؟ إِلَى اللِّقَاءِ.', 'And you, …? See you.'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Tariq, how are you? I spent the weekend with school in the Lake District. It’s in north-west England, with high mountains and clear lakes. It was cold and rainy, but we walked ten kilometres on Saturday! Sadly we saw lots of litter near the lake, because of tourists. So we collected the plastic in big bags. I think the trip was fun and useful. In the summer I’ll go back with my family. And you, have you visited a beautiful natural place? See you, Adil.”',
      find: ['تَقَعُ المِنْطَقَةُ فِي شَمَالِ', 'جِبَالٌ عَالِيَةٌ', 'بِسَبَبِ السُّيَّاحِ', 'لِذٰلِكَ جَمَعْنَا'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Tariq, I got back yesterday from a school trip to the Lake District, in north-west England, visited by millions of tourists every year. It didn’t stop raining for two whole days, but the green mountains and clear lakes were more beautiful than any photo. What saddened me was finding lots of litter left on the shore, which threatens birds and fish. So we spent Sunday morning cleaning the place, and over twenty bags of plastic were collected! If the head agrees, we’ll organise a similar campaign in our town park. Will you join us? Best wishes, Adil.”',
      find: ['الَّتِي تَقَعُ … وَيَقْصِدُهَا', 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ', 'تُرِكَتْ … مِمَّا يُهَدِّدُ', 'فَجُمِعَ أَكْثَرُ مِنْ'],
    },
  },
  Q3: {
    a: { title: 'مَدِينَتِي: المَاضِي وَالحَاضِرُ وَالمُسْتَقْبَلُ', en: 'My town: past, present and future', bullets: 'أَيْنَ تَقَعُ مَدِينَتُكَ وَمَا فِيهَا · الطَّقْسُ وَالحَيَاةُ فِيهَا · مُشْكِلَةٌ بِيئِيَّةٌ وَمَا فَعَلْتَهُ · كَيْفَ تَغَيَّرَتْ وَكَيْفَ تُرِيدُهَا فِي المُسْتَقْبَلِ', bulletsEn: 'Where your town is and what is there · the weather and life there · an environmental problem and what you did · how it has changed and how you want it in future' },
    b: { title: 'هَلْ تُنْقِذُ التِّكْنُولُوجْيَا البِيئَةَ أَمْ تَضُرُّهَا؟', en: 'Does technology save or harm the environment?', bullets: 'المَوْضُوعُ · الحُلُولُ وَالمَخَاطِرُ · مِثَالٌ مِنْ حَيَاتِكَ · رَأْيُكَ', bulletsEn: 'The issue · solutions and risks · an example from your life · your opinion' },
    plan: [
      'Where — askunu fī …; taqaʿu al-madīnatu fī shamāli …; hiya madīnatun … mashhūratun bi- …',
      'What is there + weather — fī ḥayyī yūjadu … wa-tūjadu …; al-jawwu fī ash-shitāʾi … ammā fī aṣ-ṣayfi fa- …',
      'Problem + action — akbaru mushkilatin … bi-sababi …, mimmā …; fī as-sanati al-māḍiya zaraʿnā …',
      'Change + future — kānat … ammā al-āna fa- …; yajibu ʿalā … an …; Stretch: passives, idhā … fa-sa-, law … la-.',
    ],
    frames: [
      { ar: 'تُوجَدُ حَدِيقَةٌ كَبِيرَةٌ مُقَابِلَ بَيْتِي.', en: 'place: a big park opposite my house.' },
      { ar: 'تَلَوُّثُ الهَوَاءِ بِسَبَبِ السَّيَّارَاتِ، مِمَّا …', en: 'cause → effect: pollution from cars …' },
      { ar: 'يَجِبُ عَلَى البَلَدِيَّةِ أَنْ تُحَسِّنَ الحَافِلَاتِ.', en: 'solution: the council must improve buses.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Manchester, in north-west England — big and famous for football and rain! → a mosque and a library, a big park opposite my house, an old market for fruit; cold, rainy winters and mild summers → air pollution from cars causes illness; last year we planted thirty trees with school → the city was smaller, now bigger and busier; the council must improve buses; I want it cleaner and greener.', find: ['تَقَعُ المَدِينَةُ فِي', 'تُوجَدُ حَدِيقَةٌ', 'بِسَبَبِ … مِمَّا', 'يَجِبُ عَلَى البَلَدِيَّةِ'], notes: 'Core model: all of Topic C — location with a compass point (L01), yūjadu / tūjadu + muqābila (L08), weather with ammā … fa- (L03), cause → effect with mimmā (L04), a past action with a number (L05), past vs present comparatives and an obligation (L05, L08).' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Grandpa says when he arrived in Manchester fifty years ago, the sky was grey with factory smoke and the rivers black; today I watch ducks swim in the canal near our house and cycle along its bank every morning → the city changed a lot in half a century: old factories closed, some became museums and offices, and tram lines were built linking districts to the centre, cutting the number of cars → but challenges remain: because of growing traffic the air near big roads is still polluted, causing asthma in children; so I joined the eco-club and helped plant a hundred trees in our area and a campaign persuading parents to switch off engines outside school → the future is in our hands: if we use public transport and bikes, our city will become cleaner and quieter; “if grandpa saw it in twenty years, he wouldn’t recognise it, it would be so green”.', find: ['كَانَتْ سَمَاؤُهَا رَمَادِيَّةً', 'أُغْلِقَتْ … وَبُنِيَتْ', 'مِمَّا يُؤَدِّي إِلَى', 'لَوْ رَآهَا … لَمَا عَرَفَهَا'], notes: 'Full-mark model: reported speech with inna + kānat and colour agreement (ramādiyyatan, sawdāʾa), ammā al-yawma fa-, idh + two passives (ughliqat, buniyat), a relative clause, ghayra anna + bi-sababi + mā zāla + mimmā yuʾaddī ilā, li-dhālika, idhā … fa-sa- and law … la-mā (negative).' },
      { which: 'ب', level: 'Full', subtitle: 'technology and the planet', text: Q3B_FULL, en: 'We carry devices more powerful than the computers that took man to the moon, yet our planet’s problems grow every year — does technology save or harm the environment? → it offers great solutions: solar power, electric cars, apps that measure home water and electricity use, helping families save; yet devices are made from rare, costly metals and thrown away after two or three years, creating mountains of e-waste, mostly sent to poor countries → I changed my habits after a documentary about a dump in Ghana where children burn old devices: I repaired my phone instead of replacing it, and persuaded my family to recycle old devices instead of binning them → technology is a tool — neither saviour nor enemy; “if devices are made to last, they will become part of the solution, not the problem we live with today”.', find: ['أَقْوَى مِنَ … الَّتِي', 'تُصْنَعُ … ثُمَّ تُرْمَى', 'بَدَلًا مِنْ تَغْيِيرِهِ', 'لَا مُنْقِذٌ وَلَا عَدُوٌّ'], notes: 'Full-mark model for the Stretch title: a comparative hook with a relative clause, wa-maʿa dhālika, hal … am, ka- + three examples with allatī, two present passives + mimmā yakhluqu, baʿda an + a relative clause with fīhi, badalan min, lā … wa-lā, and idhā + past passive … fa-sa-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: no empty boxes; a date and a number with the right noun.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: a compass point, the weather, a cause and a result.' },
    { route: 'develop', text: 'Q3: past, present and future of a place, with yūjadu / tūjadu.' },
    { route: 'stretch', text: 'Q3: passives, a concession and a conditional; I checked my numbers.' },
  ],
};

module.exports = { speak, write };
