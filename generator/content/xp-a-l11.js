'use strict';
/* Exam-practice data · AT-A-L11 · Reading — Travel and Tourism Texts (holidays in the past tense; hotels; sights; إِذَا / لَوْ). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { n: 11, short: 'Travel and Tourism', arShort: 'السَّفَرُ وَالسِّيَاحَةُ', fileTitle: 'Reading_Travel_and_Tourism_Texts', title: 'Travel and Tourism', ar: 'السَّفَرُ وَالسِّيَاحَةُ', icon: 'FaSuitcaseRolling', grammar: 'holidays in the past tense; hotels and sights; إِذَا (real) and لَوْ (unreal) conditionals' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: book a hotel room, talk about a past holiday, describe sights and problems, and imagine dream trips with idhā and law.',
  words: [
    w(1, 'سَافَرْتُ', 'I travelled', [['he', 'سَافَرَ'], ['she', 'سَافَرَتْ'], ['we', 'سَافَرْنَا']]),
    w(2, 'زُرْتُ', 'I visited', [['he', 'زَارَ'], ['she', 'زَارَتْ'], ['we', 'زُرْنَا']]),
    w(3, 'نَزَلْتُ فِي …', 'I stayed at (a hotel)', [['he', 'نَزَلَ'], ['she', 'نَزَلَتْ'], ['we', 'نَزَلْنَا']]),
    w(4, 'أَحْجِزُ', 'I book', [['past', 'حَجَزْتُ'], ['he', 'يَحْجِزُ'], ['we', 'نَحْجِزُ']]),
    w(5, 'سَائِحٌ', 'a tourist', [['m.', 'سَائِحٌ'], ['f.', 'سَائِحَةٌ'], ['pl.', 'سُيَّاحٌ']]),
    w(6, 'فُنْدُقٌ', 'a hotel', [['sg.', 'فُنْدُقٌ'], ['pl.', 'فَنَادِقُ']]),
    w(7, 'غُرْفَةٌ مُزْدَوِجَةٌ', 'a double room', [['single', 'غُرْفَةٌ مُفْرَدَةٌ'], ['pl.', 'غُرَفٌ']]),
    w(8, 'مَعْلَمٌ سِيَاحِيٌّ', 'a tourist sight', [['sg.', 'مَعْلَمٌ'], ['pl.', 'مَعَالِمُ']]),
    w(9, 'تَارِيخِيٌّ', 'historic', [['m.', 'تَارِيخِيٌّ'], ['f.', 'تَارِيخِيَّةٌ'], ['pl.', 'تَارِيخِيَّةٌ']], { tag: 'm. · f. · non-hum. pl.' }),
    w(10, 'عُطْلَةٌ', 'a holiday', [['sg.', 'عُطْلَةٌ'], ['pl.', 'عُطَلٌ']]),
    w(11, 'إِذَا …', 'if … (real, likely)', null, { tag: 'idhā + past verb' }),
    w(12, 'لَوْ كَانَ … لَسَافَرْتُ', 'if … I would travel (unreal)', null, { tag: 'law … la-' }),
  ],
  words1: { eyebrow: 'Language bank · holiday verbs in the past (I · he · she · we)', title: 'Where did you go?', ar: 'أَيْنَ سَافَرْتَ؟', notes: 'LANGUAGE BANK (2 min) — hollow verbs shorten in the past: زَارَ → زُرْتُ · زُرْنَا. Staying at a hotel: نَزَلْنَا فِي فُنْدُقٍ قَرِيبٍ مِنَ البَحْرِ.' },
  words2: { eyebrow: 'Language bank · hotels, sights and conditionals', title: 'Hotels, sights — and “if …”', ar: 'الفُنْدُقُ وَالمَعَالِمُ', notes: 'LANGUAGE BANK (2 min) — two kinds of “if”: إِذَا سَافَرْتُ، سَأَزُورُ … (real) · لَوْ كَانَ عِنْدِي مَالٌ، لَسَافَرْتُ … (unreal). Non-human plurals take feminine singular: مَعَالِمُ تَارِيخِيَّةٌ.' },
  checkCore: 'said where, when and how they travelled, in the past tense',
  checkDevelop: 'described a sight or a problem, and gave an opinion with a reason',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'phoning a hotel', title: 'Role play A — Booking a hotel room', ar: 'أَحْجِزُ غُرْفَةً', you: 'a guest', them: 'the hotel receptionist',
      tasks: [
        { core: true, ex: 'فُنْدُقُ البَحْرِ، تَفَضَّلْ.', task: 'Say you want to book a room.', help: 'أُرِيدُ أَنْ أَحْجِزَ غُرْفَةً …', model: 'مَسَاءُ الخَيْرِ، أُرِيدُ أَنْ أَحْجِزَ غُرْفَةً، مِنْ فَضْلِكَ.', modelEn: 'Good evening, I would like to book a room, please.' },
        { core: true, ex: 'غُرْفَةٌ مُفْرَدَةٌ أَمْ مُزْدَوِجَةٌ؟', task: 'Say which room and for how many people.', help: 'غُرْفَةٌ … لِـ … أَشْخَاصٍ', model: 'غُرْفَةٌ مُزْدَوِجَةٌ لِشَخْصَيْنِ: أَنَا وَأَخِي.', modelEn: 'A double room for two people: me and my brother.' },
        { core: true, ex: 'كَمْ لَيْلَةً؟', task: 'Say how many nights and from when.', help: '… لَيَالٍ، مِنْ يَوْمِ …', model: 'ثَلَاثَ لَيَالٍ، مِنْ يَوْمِ الخَمِيسِ إِلَى يَوْمِ الأَحَدِ.', modelEn: 'Three nights, from Thursday to Sunday.' },
        { core: true, ex: 'هَلْ تُرِيدُ غُرْفَةً تُطِلُّ عَلَى البَحْرِ؟', task: 'Answer and give a reason.', help: 'نَعَمْ، لِأَنَّ …', model: 'نَعَمْ، مِنْ فَضْلِكَ، لِأَنَّ المَنْظَرَ جَمِيلٌ.', modelEn: 'Yes please, because the view is beautiful.' },
        { core: true, unexpected: true, ex: 'مَتَى سَتَصِلُ إِلَى الفُنْدُقِ؟', task: 'Answer the unexpected question.', help: 'سَأَصِلُ فِي السَّاعَةِ …', model: 'سَأَصِلُ فِي السَّاعَةِ الخَامِسَةِ مَسَاءً تَقْرِيبًا.', modelEn: 'I will arrive at about five in the evening.' },
      ],
      girl: 'تَفَضَّلِي · تُرِيدِينَ · سَتَصِلِينَ — the candidate says أَنَا وَأُخْتِي',
      notes: 'Core: a polite request, room type, numbers with layālin (3–10 + genitive plural), a reason, the future.',
    },
    {
      id: 'B', level: 'Core+', setting: 'at the hotel desk', title: 'Role play B — A problem at the hotel', ar: 'مُشْكِلَةٌ فِي الفُنْدُقِ', you: 'a guest', them: 'the hotel manager',
      tasks: [
        { core: true, ex: 'مَسَاءُ الخَيْرِ، هَلْ هُنَاكَ مُشْكِلَةٌ؟', task: 'Explain the problem with your room.', help: 'نَعَمْ، … فِي غُرْفَتِي لَا يَعْمَلُ', model: 'نَعَمْ، المُكَيِّفُ فِي غُرْفَتِي لَا يَعْمَلُ، وَالجَوُّ حَارٌّ جِدًّا.', modelEn: 'Yes, the air conditioning in my room doesn’t work, and it is very hot.' },
        { core: true, ex: 'مَا رَقْمُ غُرْفَتِكَ؟', task: 'Give the room number and floor.', help: 'غُرْفَةٌ رَقْمُ … فِي الطَّابِقِ …', model: 'غُرْفَةٌ رَقْمُ مِئَتَيْنِ وَخَمْسَةٍ، فِي الطَّابِقِ الثَّانِي.', modelEn: 'Room 205, on the second floor.' },
        { ex: 'سَنُرْسِلُ مُوَظَّفًا غَدًا.', task: 'Ask politely for another room tonight.', help: 'هَلْ يُمْكِنُ أَنْ …؟', model: 'هَلْ يُمْكِنُ أَنْ تُعْطِيَنِي غُرْفَةً أُخْرَى اللَّيْلَةَ؟', modelEn: 'Could you give me another room tonight?' },
        { ex: 'طَبْعًا. عِنْدَنَا غُرْفَةٌ فِي الطَّابِقِ الخَامِسِ.', task: 'Thank him and ASK about breakfast time.', help: 'شُكْرًا … مَتَى …؟', model: 'شُكْرًا جَزِيلًا. وَمَتَى يَبْدَأُ الفُطُورُ فِي الصَّبَاحِ؟', modelEn: 'Thank you very much. And when does breakfast start?' },
        { unexpected: true, ex: 'كَيْفَ وَجَدْتَ مَدِينَتَنَا حَتَّى الآنَ؟', task: 'Answer the unexpected question (past + opinion).', help: 'زُرْتُ … وَكَانَ …', model: 'زُرْتُ القَلْعَةَ وَالسُّوقَ القَدِيمَ، وَكَانَ كُلُّ شَيْءٍ رَائِعًا.', modelEn: 'I visited the castle and the old market, and everything was wonderful.' },
      ],
      girl: 'غُرْفَتِكِ · وَجَدْتِ · تُعْطِيَنِي (same)',
      notes: 'Task 3: a polite request with hal yumkin an + verb in -a. Task 4: the CANDIDATE asks. Ordinal floors: الطَّابِقُ الثَّانِي / الخَامِسُ.',
    },
    {
      id: 'C', level: 'Develop', setting: 'back at school', title: 'Role play C — Your holiday', ar: 'كَيْفَ كَانَتْ عُطْلَتُكَ؟', you: 'a student back from holiday', them: 'your Arabic teacher',
      tasks: [
        { ex: 'أَهْلًا! أَيْنَ قَضَيْتَ العُطْلَةَ؟', task: 'Say where, with whom and how long.', help: 'قَضَيْتُ … فِي … مَعَ …', model: 'قَضَيْتُ أُسْبُوعًا فِي إِسْطَنْبُولَ مَعَ أُسْرَتِي.', modelEn: 'I spent a week in Istanbul with my family.' },
        { ex: 'كَيْفَ سَافَرْتُمْ؟ وَأَيْنَ نَزَلْتُمْ؟', task: 'Say how you travelled and where you stayed.', help: 'سَافَرْنَا بِـ … وَنَزَلْنَا فِي …', model: 'سَافَرْنَا بِالطَّائِرَةِ، وَنَزَلْنَا فِي فُنْدُقٍ صَغِيرٍ قَرِيبٍ مِنَ البَحْرِ.', modelEn: 'We flew, and stayed in a small hotel near the sea.' },
        { ex: 'مَا أَجْمَلُ شَيْءٍ رَأَيْتَهُ؟', task: 'Describe a sight with a superlative.', help: 'أَجْمَلُ شَيْءٍ كَانَ … لِأَنَّ …', model: 'أَجْمَلُ شَيْءٍ كَانَ المَسْجِدَ الأَزْرَقَ، لِأَنَّهُ ضَخْمٌ وَمُزَيَّنٌ بِأَلْوَانٍ رَائِعَةٍ.', modelEn: 'The most beautiful thing was the Blue Mosque, because it is huge and decorated in wonderful colours.' },
        { ex: 'هَلْ حَدَثَتْ أَيُّ مُشْكِلَةٍ؟', task: 'Describe a small problem and the result.', help: 'نَعَمْ، … فَـ…', model: 'نَعَمْ، ضَاعَتْ حَقِيبَةُ أُخْتِي فِي المَطَارِ، فَانْتَظَرْنَا سَاعَتَيْنِ حَتَّى وَجَدُوهَا.', modelEn: 'Yes, my sister’s bag got lost at the airport, so we waited two hours until they found it.' },
        { unexpected: true, ex: 'هَلْ تَنْصَحُ صَدِيقَكَ بِزِيَارَتِهَا؟', task: 'Answer the unexpected question (advice + idhā).', help: 'نَعَمْ، إِذَا ذَهَبَ … يَجِبُ أَنْ …', model: 'نَعَمْ، وَإِذَا ذَهَبَ فِي الرَّبِيعِ، فَيَجِبُ أَنْ يَرْكَبَ القَارِبَ فِي البُوسْفُورِ.', modelEn: 'Yes, and if he goes in spring, he must take a boat on the Bosphorus.' },
      ],
      girl: 'قَضَيْتِ · رَأَيْتِهِ · تَنْصَحِينَ صَدِيقَتَكِ — إِذَا ذَهَبَتْ … أَنْ تَرْكَبَ',
      notes: 'Develop: we-forms in the past, a superlative + relative (ajmalu shayʾin raʾaytuhu), a problem with fa- + ḥattā, advice with idhā.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a travel podcast', title: 'Role play D — Tourism: good or bad?', ar: 'السِّيَاحَةُ: نِعْمَةٌ أَمْ مُشْكِلَةٌ؟', you: 'a young traveller', them: 'a podcast host',
      tasks: [
        { ex: 'لِمَاذَا يُحِبُّ النَّاسُ السَّفَرَ فِي رَأْيِكَ؟', task: 'Give two reasons.', help: 'لِأَنَّهُ … وَلِأَنَّهُ …', model: 'لِأَنَّهُ يُبْعِدُنَا عَنْ ضَغْطِ الحَيَاةِ اليَوْمِيَّةِ، وَلِأَنَّهُ يُعَرِّفُنَا بِثَقَافَاتٍ جَدِيدَةٍ.', modelEn: 'Because it takes us away from daily stress, and because it introduces us to new cultures.' },
        { ex: 'هَلْ لِلسِّيَاحَةِ سَلْبِيَّاتٌ؟', task: 'Give a disadvantage with an example.', help: 'نَعَمْ، مِثْلًا …', model: 'نَعَمْ، مِثْلًا تَزْدَحِمُ المُدُنُ القَدِيمَةُ بِالسُّيَّاحِ، فَيَرْتَفِعُ سِعْرُ السَّكَنِ عَلَى أَهْلِهَا.', modelEn: 'Yes — for example old cities get crowded with tourists, so housing prices rise for the locals.' },
        { ex: 'كَيْفَ تَغَيَّرَ السَّفَرُ مُنْذُ أَيَّامِ أَجْدَادِنَا؟', task: 'Compare past and present.', help: 'كَانَ السَّفَرُ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَ السَّفَرُ صَعْبًا وَغَالِيًا، أَمَّا اليَوْمَ فَنَحْجِزُ الرِّحْلَةَ وَالفُنْدُقَ بِالهَاتِفِ فِي دَقَائِقَ.', modelEn: 'Travel used to be hard and expensive; today we book the flight and hotel on our phone in minutes.' },
        { ex: 'هَلْ يَجِبُ أَنْ نُقَلِّلَ السَّفَرَ بِالطَّائِرَةِ؟', task: 'Concede and give your view.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الطَّائِرَاتِ تُلَوِّثُ البِيئَةَ، غَيْرَ أَنَّنَا نَسْتَطِيعُ أَنْ نُسَافِرَ أَقَلَّ وَنَبْقَى مُدَّةً أَطْوَلَ.', modelEn: 'It is true that planes pollute, but we can travel less often and stay longer.' },
        { unexpected: true, ex: 'لَوْ رَبِحْتَ رِحْلَةً مَجَّانِيَّةً، أَيْنَ تَذْهَبُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ رَبِحْتُ …، لَـ…', model: 'لَوْ رَبِحْتُ رِحْلَةً مَجَّانِيَّةً، لَذَهَبْتُ إِلَى المَغْرِبِ، لِأَزُورَ فَاسَ وَأَتَعَلَّمَ صِنَاعَةَ الفَخَّارِ.', modelEn: 'If I won a free trip, I would go to Morocco to visit Fez and learn pottery.' },
      ],
      girl: 'رَأْيِكِ · رَبِحْتِ · تَذْهَبِينَ',
      notes: 'Stretch: two reasons, mithlan + fa- (result), kāna vs ammā … fa-, a concession and law … la- with li- of purpose.',
      modelFoot: 'Stretch: reasons, an example with a result, ammā … fa-, ṣaḥīḥun anna … ghayra anna and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'عُطْلَتِي', aim: 'one full sentence per question',
      qs: [
        { q: 'أَيْنَ سَافَرْتَ فِي الصَّيْفِ المَاضِي؟', en: 'Where did you travel last summer?', start: 'سَافَرْتُ إِلَى …', model: 'سَافَرْتُ إِلَى مِصْرَ مَعَ أُسْرَتِي.', modelEn: 'I travelled to Egypt with my family.' },
        { q: 'كَيْفَ سَافَرْتُمْ؟', en: 'How did you travel?', start: 'سَافَرْنَا بِالطَّائِرَةِ / بِالسَّيَّارَةِ …', model: 'سَافَرْنَا بِالطَّائِرَةِ، وَاسْتَغْرَقَتِ الرِّحْلَةُ خَمْسَ سَاعَاتٍ.', modelEn: 'We flew, and the flight took five hours.' },
        { q: 'أَيْنَ نَزَلْتُمْ؟', en: 'Where did you stay?', start: 'نَزَلْنَا فِي …', model: 'نَزَلْنَا فِي فُنْدُقٍ كَبِيرٍ قَرِيبٍ مِنَ النِّيلِ.', modelEn: 'We stayed in a big hotel near the Nile.' },
        { q: 'مَاذَا زُرْتُمْ؟', en: 'What did you visit?', start: 'زُرْنَا …', model: 'زُرْنَا الأَهْرَامَ وَالمُتْحَفَ المِصْرِيَّ.', modelEn: 'We visited the pyramids and the Egyptian Museum.' },
        { q: 'هَلْ تُحِبُّ السَّفَرَ؟', en: 'Do you like travelling?', start: 'نَعَمْ، أُحِبُّ السَّفَرَ لِأَنَّ …', model: 'نَعَمْ، أُحِبُّ السَّفَرَ كَثِيرًا، لِأَنِّي أَرَى أَمَاكِنَ جَدِيدَةً.', modelEn: 'Yes, I love travelling, because I see new places.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence in the past + a detail = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'السَّفَرُ وَالسِّيَاحَةُ', aim: 'two or three sentences, with a description and an opinion',
      qs: [
        { q: 'صِفْ أَجْمَلَ مَدِينَةٍ زُرْتَهَا.', en: 'Describe the most beautiful city you have visited.', start: 'أَجْمَلُ مَدِينَةٍ زُرْتُهَا هِيَ … فِيهَا …', model: 'أَجْمَلُ مَدِينَةٍ زُرْتُهَا هِيَ غَرْنَاطَةُ؛ فِيهَا قَصْرُ الحَمْرَاءِ وَحَدَائِقُ رَائِعَةٌ وَشَوَارِعُ ضَيِّقَةٌ.', modelEn: 'The most beautiful city I have visited is Granada; it has the Alhambra, wonderful gardens and narrow streets.' },
        { q: 'هَلْ تُفَضِّلُ عُطْلَةً عَلَى الشَّاطِئِ أَمْ فِي مَدِينَةٍ تَارِيخِيَّةٍ؟', en: 'Beach holiday or historic city?', start: 'أُفَضِّلُ … لِأَنَّ …', model: 'أُفَضِّلُ المَدِينَةَ التَّارِيخِيَّةَ، لِأَنِّي أُحِبُّ التَّارِيخَ، وَالشَّاطِئُ مُمِلٌّ بَعْدَ يَوْمَيْنِ.', modelEn: 'I prefer a historic city, because I love history, and the beach is boring after two days.' },
        { q: 'مَا الَّذِي تَأْخُذُهُ مَعَكَ دَائِمًا فِي السَّفَرِ؟', en: 'What do you always take when travelling?', start: 'آخُذُ … لِأَنَّ …', model: 'آخُذُ دَائِمًا كِتَابًا وَشَاحِنَ الهَاتِفِ، لِأَنَّ الرِّحْلَاتِ الطَّوِيلَةَ مُمِلَّةٌ.', modelEn: 'I always take a book and a phone charger, because long journeys are boring.' },
        { q: 'هَلْ حَدَثَتْ لَكَ مُشْكِلَةٌ فِي السَّفَرِ؟', en: 'Have you had a problem while travelling?', start: 'نَعَمْ، مَرَّةً … فَـ…', model: 'نَعَمْ، مَرَّةً تَأَخَّرَتْ طَائِرَتُنَا سِتَّ سَاعَاتٍ، فَنِمْنَا عَلَى الكَرَاسِي فِي المَطَارِ.', modelEn: 'Yes, once our plane was six hours late, so we slept on the chairs at the airport.' },
        { q: 'أَيْنَ سَتَقْضِي عُطْلَتَكَ القَادِمَةَ؟', en: 'Where will you spend your next holiday?', start: 'إِذَا … سَنَذْهَبُ إِلَى …', model: 'إِذَا نَجَحْتُ فِي الامْتِحَانَاتِ، سَنَذْهَبُ إِلَى الأُرْدُنِّ لِنَزُورَ البَتْرَاءَ.', modelEn: 'If I pass my exams, we will go to Jordan to visit Petra.' },
      ],
      foot: 'Develop: two or three sentences — a superlative, a preference with a reason, a past problem and an idhā sentence.',
      modelFoot: 'Description + reason + past problem + idhā = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'السِّيَاحَةُ وَالعَالَمُ', aim: 'a developed answer: opinion, comparison, concession and a conditional',
      qs: [
        { q: 'هَلِ السَّفَرُ أَفْضَلُ طَرِيقَةٍ لِلتَّعَلُّمِ؟', en: 'Is travel the best way to learn?', start: 'أَعْتَقِدُ أَنَّ … لِأَنَّ …', model: 'أَعْتَقِدُ أَنَّهُ مِنْ أَفْضَلِ الطُّرُقِ، لِأَنَّنَا نَتَعَلَّمُ اللُّغَةَ وَالتَّارِيخَ مِنَ النَّاسِ مُبَاشَرَةً، لَا مِنَ الكُتُبِ فَقَطْ.', modelEn: 'I think it is one of the best ways, because we learn language and history directly from people, not only from books.' },
        { q: 'كَيْفَ تُؤَثِّرُ السِّيَاحَةُ فِي البِلَادِ الفَقِيرَةِ؟', en: 'How does tourism affect poorer countries?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ تُوَفِّرُ فُرَصَ عَمَلٍ، وَمِنْ نَاحِيَةٍ أُخْرَى قَدْ تُضِرُّ بِالبِيئَةِ وَالتَّقَالِيدِ المَحَلِّيَّةِ.', modelEn: 'On one hand it creates jobs; on the other it may harm the environment and local traditions.' },
        { q: 'هَلِ السُّيَّاحُ يَحْتَرِمُونَ ثَقَافَةَ البِلَادِ دَائِمًا؟', en: 'Do tourists always respect local culture?', start: 'لَيْسَ دَائِمًا؛ فَبَعْضُهُمْ …', model: 'لَيْسَ دَائِمًا؛ فَبَعْضُهُمْ يَلْبَسُونَ مَلَابِسَ غَيْرَ مُنَاسِبَةٍ فِي الأَمَاكِنِ الدِّينِيَّةِ، لِأَنَّهُمْ لَمْ يَقْرَؤُوا عَنْهَا قَبْلَ السَّفَرِ.', modelEn: 'Not always; some wear inappropriate clothes in religious places because they didn’t read about them before travelling.' },
        { q: 'هَلِ السَّفَرُ الافْتِرَاضِيُّ يُغْنِي عَنِ السَّفَرِ الحَقِيقِيِّ؟', en: 'Can virtual travel replace real travel?', start: 'صَحِيحٌ أَنَّهُ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهُ رَخِيصٌ وَمُفِيدٌ لِلْبِيئَةِ، غَيْرَ أَنَّهُ لَا يُعْطِينَا رَائِحَةَ الأَسْوَاقِ وَلَا طَعْمَ الأَكْلِ.', modelEn: 'It is true it is cheap and good for the environment, but it can’t give us the smell of the markets or the taste of the food.' },
        { q: 'لَوْ عِشْتَ سَنَةً فِي بَلَدٍ آخَرَ، أَيَّ بَلَدٍ تَخْتَارُ؟', en: 'If you lived a year abroad, which country would you choose?', start: 'لَوْ عِشْتُ …، لَاخْتَرْتُ … لِأَنَّ …', model: 'لَوْ عِشْتُ سَنَةً فِي بَلَدٍ آخَرَ، لَاخْتَرْتُ اليَابَانَ، لِأَنَّ ثَقَافَتَهَا مُخْتَلِفَةٌ تَمَامًا عَنْ ثَقَافَتِنَا.', modelEn: 'If I lived a year abroad, I would choose Japan, because its culture is completely different from ours.' },
      ],
      foot: 'Stretch: min nāḥiya … wa-min nāḥiya ukhrā, lam + jussive, a concession, a superlative and law … la-.',
      modelFoot: 'Stretch: min afḍal aṭ-ṭuruq, balanced views, lam yaqraʾū, ṣaḥīḥun anna … ghayra anna, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I said where, when and how I travelled (sāfartu, zurtu).' },
    { route: 'core', text: 'I booked a room or explained a problem politely.' },
    { route: 'develop', text: 'I described a sight with a superlative (ajmalu …).' },
    { route: 'develop', text: 'I used idhā for a real plan.' },
    { route: 'stretch', text: 'I used law … la-, a concession or balanced views.' },
  ],
};
speak.RP[1].tasks[0].help = 'نَعَمْ، المُكَيِّفُ فِي غُرْفَتِي لَا يَعْمَلُ …';
speak.RP[2].tasks[1].help = 'سَافَرْنَا بِالطَّائِرَةِ … وَنَزَلْنَا فِي …';
speak.RP[2].tasks[3].help = 'نَعَمْ، ضَاعَتْ … فَانْتَظَرْنَا …';
speak.RP[3].tasks[2].help = 'كَانَ السَّفَرُ … أَمَّا اليَوْمَ فَنَحْجِزُ …';
speak.RP[3].tasks[4].help = 'لَوْ رَبِحْتُ …، لَذَهَبْتُ …';
speak.RP[0].tasks[1].help = 'غُرْفَةٌ مُزْدَوِجَةٌ لِشَخْصَيْنِ …';
speak.CONV[1].qs[3].start = 'نَعَمْ، مَرَّةً تَأَخَّرَتْ … فَنِمْنَا …';

const Q2_CORE = `مَرْحَبًا يَا نَادِيَةُ،
كَيْفَ حَالُكِ؟ أَنَا الآنَ فِي تُونِسَ مَعَ أُسْرَتِي. سَافَرْنَا بِالطَّائِرَةِ يَوْمَ السَّبْتِ، وَاسْتَغْرَقَتِ الرِّحْلَةُ ثَلَاثَ سَاعَاتٍ. نَزَلْنَا فِي فُنْدُقٍ جَمِيلٍ قَرِيبٍ مِنَ البَحْرِ، وَغُرْفَتِي كَبِيرَةٌ وَنَظِيفَةٌ. أَمْسِ زُرْنَا المَدِينَةَ القَدِيمَةَ، وَاشْتَرَيْتُ هَدِيَّةً لَكِ مِنَ السُّوقِ، وَأَكَلْنَا الحَلَوِيَّاتِ التُّونِسِيَّةَ. الطَّقْسُ حَارٌّ، لٰكِنَّ البَحْرَ رَائِعٌ. غَدًا سَنَزُورُ قَرْطَاجَ، وَسَنَأْكُلُ الكُسْكُسِي فِي مَطْعَمٍ مَشْهُورٍ.
مَعَ السَّلَامَةِ،
رِيمُ`;
const Q2_FULL = `عَزِيزَتِي نَادِيَةُ،
تَحِيَّةً طَيِّبَةً مِنْ تُونِسَ! وَصَلْنَا يَوْمَ السَّبْتِ بَعْدَ رِحْلَةٍ بِالطَّائِرَةِ اسْتَغْرَقَتْ ثَلَاثَ سَاعَاتٍ، وَنَزَلْنَا فِي فُنْدُقٍ صَغِيرٍ لٰكِنَّهُ مُرِيحٌ، تُطِلُّ غُرْفَتِي فِيهِ عَلَى البَحْرِ مُبَاشَرَةً. أَمْسِ قَضَيْنَا اليَوْمَ فِي المَدِينَةِ القَدِيمَةِ، وَتَجَوَّلْنَا فِي أَسْوَاقِهَا الضَّيِّقَةِ، وَاشْتَرَيْتُ لَكِ هَدِيَّةً سَتُحِبِّينَهَا، ثُمَّ جَلَسْنَا فِي مَقْهًى قَدِيمٍ وَشَرِبْنَا الشَّايَ بِالبُنْدُقِ. صَحِيحٌ أَنَّ الطَّقْسَ حَارٌّ جِدًّا فِي الظُّهْرِ، غَيْرَ أَنَّ النَّسِيمَ فِي المَسَاءِ لَطِيفٌ. غَدًا سَنَزُورُ آثَارَ قَرْطَاجَ، وَإِذَا بَقِيَ عِنْدَنَا وَقْتٌ، سَنَذْهَبُ إِلَى سِيدِي بُوسَعِيدَ. لَوْ كُنْتِ مَعَنَا، لَكَانَتِ الرِّحْلَةُ أَجْمَلَ!
مَعَ أَشْوَاقِي،
رِيمُ`;
const Q3A_CORE = `فِي الصَّيْفِ المَاضِي سَافَرْتُ مَعَ أُسْرَتِي إِلَى المَغْرِبِ. سَافَرْنَا بِالطَّائِرَةِ مِنْ لَنْدَنَ إِلَى مُرَّاكُشَ، وَاسْتَغْرَقَتِ الرِّحْلَةُ أَرْبَعَ سَاعَاتٍ. نَزَلْنَا فِي فُنْدُقٍ تَقْلِيدِيٍّ جَمِيلٍ، فِيهِ حَدِيقَةٌ وَمَسْبَحٌ، وَكَانَتْ غُرْفَتِي جَمِيلَةً وَمُلَوَّنَةً.
فِي اليَوْمِ الأَوَّلِ زُرْنَا سَاحَةَ جَامِعِ الفَنَا. رَأَيْنَا هُنَاكَ مُوسِيقِيِّينَ وَبَائِعِينَ كَثِيرِينَ، وَاشْتَرَتْ أُمِّي سَجَّادَةً صَغِيرَةً. أَكَلْنَا الطَّاجِينَ، وَشَرِبْنَا الشَّايَ بِالنَّعْنَاعِ. كَانَ الأَكْلُ لَذِيذًا جِدًّا، وَكَانَ رَخِيصًا أَيْضًا، فَأَكَلْنَا كَثِيرًا!
فِي اليَوْمِ الثَّالِثِ ذَهَبْنَا إِلَى الصَّحْرَاءِ، وَرَكِبْنَا الجِمَالَ. كَانَ الجَوُّ حَارًّا جِدًّا، فَشَرِبْنَا مَاءً كَثِيرًا. فِي اللَّيْلِ نِمْنَا فِي خَيْمَةٍ، وَرَأَيْنَا نُجُومًا كَثِيرَةً. كَانَتْ أَجْمَلَ لَيْلَةٍ فِي الرِّحْلَةِ، وَأَخَذْتُ صُوَرًا كَثِيرَةً.
فِي رَأْيِي، المَغْرِبُ بَلَدٌ رَائِعٌ، لِأَنَّ النَّاسَ لُطَفَاءُ وَالأَكْلَ لَذِيذٌ. فِي المُسْتَقْبَلِ أُرِيدُ أَنْ أَزُورَ فَاسَ وَشَفْشَاوِنَ، لِأَنَّهُمَا مَدِينَتَانِ تَارِيخِيَّتَانِ.`;
const Q3A_FULL = `لَمْ أَكُنْ أَتَوَقَّعُ أَنْ تَكُونَ رِحْلَتُنَا إِلَى المَغْرِبِ فِي الصَّيْفِ المَاضِي أَجْمَلَ رِحْلَةٍ فِي حَيَاتِي. سَافَرْنَا بِالطَّائِرَةِ إِلَى مُرَّاكُشَ، وَاسْتَغْرَقَتِ الرِّحْلَةُ أَرْبَعَ سَاعَاتٍ، ثُمَّ نَزَلْنَا فِي رِيَاضٍ تَقْلِيدِيٍّ؛ وَهُوَ بَيْتٌ قَدِيمٌ تَتَوَسَّطُهُ حَدِيقَةٌ صَغِيرَةٌ فِيهَا نَافُورَةٌ وَأَشْجَارُ بُرْتُقَالٍ.
قَضَيْنَا الأَيَّامَ الأُولَى نَتَجَوَّلُ فِي الأَسْوَاقِ المُلَوَّنَةِ، وَنَتَذَوَّقُ الطَّاجِينَ وَالشَّايَ بِالنَّعْنَاعِ، أَمَّا المَسَاءُ فَكُنَّا نَقْضِيهِ فِي سَاحَةِ جَامِعِ الفَنَا بَيْنَ المُوسِيقِيِّينَ وَالحَكَوَاتِيِّينَ وَبَائِعِي العَصِيرِ الطَّازَجِ.
غَيْرَ أَنَّ الرِّحْلَةَ لَمْ تَخْلُ مِنَ المَشَاكِلِ؛ فَفِي طَرِيقِنَا إِلَى الصَّحْرَاءِ تَعَطَّلَتِ الحَافِلَةُ، فَانْتَظَرْنَا ثَلَاثَ سَاعَاتٍ تَحْتَ الشَّمْسِ الحَارِقَةِ، وَبَدَأَ الجَمِيعُ يَشْعُرُونَ بِالقَلَقِ وَالعَطَشِ. لٰكِنَّ أَهْلَ قَرْيَةٍ قَرِيبَةٍ دَعَوْنَا إِلَى بَيْتِهِمْ، وَقَدَّمُوا لَنَا الخُبْزَ السَّاخِنَ، فَتَحَوَّلَتِ المُشْكِلَةُ إِلَى أَجْمَلِ ذِكْرَى.
تَعَلَّمْتُ أَنَّ السَّفَرَ لَيْسَ أَمَاكِنَ فَقَطْ، بَلْ نَاسٌ أَيْضًا، وَأَنَّ الكَرَمَ لَا يَحْتَاجُ إِلَى لُغَةٍ مُشْتَرَكَةٍ. إِذَا سَنَحَتْ لِي الفُرْصَةُ، سَأَرْجِعُ لِأَزُورَ فَاسَ، وَلَوْ كُنْتُ أَتَكَلَّمُ الدَّارِجَةَ، لَتَحَدَّثْتُ مَعَهُمْ أَكْثَرَ.`;
const Q3B_FULL = `أَصْبَحَتِ السِّيَاحَةُ مِنْ أَهَمِّ الصِّنَاعَاتِ فِي العَالَمِ، فَهِيَ تُوَفِّرُ مَلَايِينَ فُرَصِ العَمَلِ، وَتُعَرِّفُ الشُّعُوبَ بِبَعْضِهَا، وَتُسَاعِدُ عَلَى حِمَايَةِ الآثَارِ القَدِيمَةِ. فَحِينَ يَزُورُ السَّائِحُ مِصْرَ أَوِ الأُرْدُنَّ، يَشْتَرِي مِنَ الأَسْوَاقِ، وَيَنْزِلُ فِي الفَنَادِقِ، وَيَأْكُلُ فِي المَطَاعِمِ المَحَلِّيَّةِ، فَيَسْتَفِيدُ أَهْلُ البَلَدِ مُبَاشَرَةً.
فِي المَاضِي كَانَ السَّفَرُ لِلْأَغْنِيَاءِ فَقَطْ، أَمَّا اليَوْمَ فَقَدْ أَصْبَحَتِ الرِّحْلَاتُ أَرْخَصَ، وَصِرْنَا نَحْجِزُ كُلَّ شَيْءٍ بِالهَاتِفِ. وَهٰذَا جَمِيلٌ، غَيْرَ أَنَّهُ جَعَلَ بَعْضَ المُدُنِ مُزْدَحِمَةً بِالسُّيَّاحِ طُولَ السَّنَةِ.
فِي الصَّيْفِ المَاضِي زُرْتُ مَدِينَةً سَاحِلِيَّةً جَمِيلَةً، فَلَاحَظْتُ أَنَّ الشَّاطِئَ مَلِيءٌ بِالقُمَامَةِ، وَأَنَّ أَهْلَ المَدِينَةِ يَشْكُونَ مِنْ غَلَاءِ الأَسْعَارِ بِسَبَبِ السُّيَّاحِ. فَقَرَّرْتُ مَعَ أُخْتِي أَنْ نُنَظِّفَ جُزْءًا مِنَ الشَّاطِئِ، فَانْضَمَّ إِلَيْنَا سُيَّاحٌ آخَرُونَ، وَجَمَعْنَا عِشْرِينَ كِيسًا فِي سَاعَتَيْنِ.
صَحِيحٌ أَنَّ لِلسِّيَاحَةِ سَلْبِيَّاتٍ، غَيْرَ أَنَّ فَوَائِدَهَا أَكْبَرُ إِذَا احْتَرَمْنَا البِيئَةَ وَالنَّاسَ. وَلَوِ اهْتَمَّ كُلُّ سَائِحٍ بِالمَكَانِ كَمَا يَهْتَمُّ بِبَيْتِهِ، لَبَقِيَتْ مُدُنُنَا جَمِيلَةً لِلْأَجْيَالِ القَادِمَةِ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a hotel registration card, write a holiday email, and write an extended piece about a trip or about tourism, with idhā and law.',
  lift: [
    { ar: 'نَزَلْنَا فِي فُنْدُقٍ يُطِلُّ عَلَى البَحْرِ', en: 'we stayed in a hotel overlooking the sea' },
    { ar: 'إِذَا بَقِيَ عِنْدَنَا وَقْتٌ، سَنَذْهَبُ …', en: 'if we have time left, we will go …' },
    { ar: 'لَوْ كُنْتَ مَعَنَا، لَكَانَتِ الرِّحْلَةُ أَجْمَلَ', en: 'if you had been with us, the trip would have been nicer' },
  ],
  checkTip: 'Check: hollow verbs in the past (zurnā, nimnā); idhā + past verb → sa- (real); law + past → la- + past (unreal); non-human plurals with feminine adjectives.',
  FORM: {
    title: 'Hotel registration card', ar: 'بِطَاقَةُ التَّسْجِيلِ فِي الفُنْدُقِ',
    fields: [
      { core: true, ar: 'الاسْمُ الكَامِلُ', en: 'Full name', model: 'رِيمُ خَالِدٍ', modelEn: 'Reem Khalid' },
      { core: true, ar: 'الجِنْسِيَّةُ', en: 'Nationality', model: 'بِرِيطَانِيَّةٌ', modelEn: 'British' },
      { core: true, ar: 'تَارِيخُ الوُصُولِ', en: 'Arrival date', model: 'السَّبْتُ ١٢ يُولْيُو', modelEn: 'Saturday 12 July' },
      { core: true, ar: 'عَدَدُ اللَّيَالِي', en: 'Number of nights', model: 'خَمْسُ لَيَالٍ', modelEn: 'five nights' },
      { core: true, ar: 'نَوْعُ الغُرْفَةِ', en: 'Room type', model: 'غُرْفَةٌ مُزْدَوِجَةٌ', modelEn: 'a double room' },
      { core: true, ar: 'سَبَبُ الزِّيَارَةِ', en: 'Reason for the visit', model: 'عُطْلَةٌ عَائِلِيَّةٌ', modelEn: 'a family holiday' },
      { ar: 'طَلَبٌ خَاصٌّ', en: 'A special request', model: 'غُرْفَةٌ تُطِلُّ عَلَى البَحْرِ', modelEn: 'a sea-view room' },
      { ar: 'جُمْلَةٌ: مَاذَا تُرِيدُ أَنْ تَزُورَ؟', en: 'ONE sentence: what you want to visit', model: 'أُرِيدُ أَنْ أَزُورَ المَدِينَةَ القَدِيمَةَ وَآثَارَ قَرْطَاجَ.', modelEn: 'I want to visit the old city and the ruins of Carthage.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence (urīdu an azūra …).',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 2: nationality agrees with the writer (birīṭāniyya for a girl).',
  },
  Q2: {
    short: 'a holiday email', title: 'Question 2: a holiday email', ar: 'رِسَالَةٌ مِنَ العُطْلَةِ',
    task: 'You are on holiday abroad. Write an email in Arabic to your friend of about 80–90 words. You must include: • where you are, and how you travelled • where you are staying, and what it is like • what you did yesterday • the weather, and your plans for tomorrow.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Past verbs (safarnā, zurnā).', 'A description with adjectives.', 'A future plan (sa-).'],
    phrases: [['أَنَا الآنَ فِي … مَعَ …', 'I am now in … with …'], ['نَزَلْنَا فِي فُنْدُقٍ …', 'we are staying in a … hotel'], ['أَمْسِ زُرْنَا …', 'yesterday we visited …'], ['غَدًا سَنَزُورُ …', 'tomorrow we will visit …']],
    rubric: [
      ['task', 'أَنْتِ فِي عُطْلَةٍ خَارِجَ بَلَدِكِ. اكْتُبِي رِسَالَةً إِلَى صَدِيقَتِكِ (٨٠–٩٠ كَلِمَةً).', 'You are on holiday abroad: write to your friend (80–90 words).'],
      ['1', 'أَيْنَ أَنْتِ؟ وَكَيْفَ سَافَرْتِ؟', 'Where you are; how you travelled'],
      ['2', 'أَيْنَ تَنْزِلِينَ؟ وَكَيْفَ هُوَ؟', 'Where you are staying; what it is like'],
      ['3', 'مَاذَا فَعَلْتِ أَمْسِ؟', 'What you did yesterday'],
      ['4', 'كَيْفَ الطَّقْسُ؟ وَمَا خُطَطُكِ لِلْغَدِ؟', 'The weather; plans for tomorrow'],
    ],
    qwords: 'أَيْنَ (where) · كَيْفَ (how / what like) · مَاذَا (what) · مَا خُطَطُكِ (your plans) — bullet 3 is PAST, bullet 4 is FUTURE',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكِ؟', 'Hello …, how are you?'],
      ['1', 'أَنَا الآنَ فِي ______ . سَافَرْنَا ______ .', 'I am now in … We travelled by …'],
      ['2', 'نَزَلْنَا فِي فُنْدُقٍ ______ ، وَغُرْفَتِي ______ .', 'We are staying in a … hotel, and my room is …'],
      ['3', 'أَمْسِ زُرْنَا ______ ، وَ ______ .', 'Yesterday we visited … and …'],
      ['4', 'الطَّقْسُ ______ . غَدًا سَنَزُورُ ______ .', 'The weather is … Tomorrow we will visit …'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Nadia, how are you? I am in Tunisia now with my family. We flew on Saturday and the flight took three hours. We are staying in a lovely hotel near the sea, and my room is big and clean. Yesterday we visited the old city, and I bought you a present in the market, and we ate Tunisian sweets. The weather is hot, but the sea is wonderful. Tomorrow we will visit Carthage and eat couscous in a famous restaurant. Goodbye, Reem.”',
      find: ['سَافَرْنَا بِالطَّائِرَةِ', 'نَزَلْنَا فِي فُنْدُقٍ', 'أَمْسِ زُرْنَا', 'غَدًا سَنَزُورُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Nadia, greetings from Tunisia! We arrived on Saturday after a three-hour flight, and we are staying in a small but comfortable hotel where my room looks straight out over the sea. Yesterday we spent the day in the old city, wandering through its narrow markets, and I bought you a present you will love, then sat in an old café drinking hazelnut tea. It is true it is very hot at midday, but the evening breeze is pleasant. Tomorrow we will visit the ruins of Carthage, and if we have time left, we will go to Sidi Bou Said. If you were with us, the trip would be even better! Missing you, Reem.”',
      find: ['تُطِلُّ غُرْفَتِي فِيهِ', 'سَتُحِبِّينَهَا', 'إِذَا بَقِيَ … سَنَذْهَبُ', 'لَوْ كُنْتِ … لَكَانَتِ'],
    },
  },
  Q3: {
    a: { title: 'رِحْلَةٌ لَا أَنْسَاهَا', en: 'A trip I won’t forget', bullets: 'أَيْنَ وَكَيْفَ سَافَرْتَ؟ · أَيْنَ نَزَلْتَ؟ وَمَاذَا زُرْتَ؟ · مُشْكِلَةٌ أَوْ مَوْقِفٌ لَا تَنْسَاهُ · مَاذَا تَعَلَّمْتَ؟ وَأَيْنَ تُرِيدُ أَنْ تُسَافِرَ؟', bulletsEn: 'Where and how you travelled · where you stayed; what you visited · a problem or moment you won’t forget · what you learned; where next' },
    b: { title: 'السِّيَاحَةُ: فَوَائِدُ وَأَضْرَارٌ', en: 'Tourism: benefits and harms', bullets: 'فَوَائِدُ السِّيَاحَةِ · كَيْفَ تَغَيَّرَ السَّفَرُ؟ · تَجْرِبَةٌ لَاحَظْتَ فِيهَا مُشْكِلَةً · رَأْيُكَ وَاقْتِرَاحَاتُكَ', bulletsEn: 'The benefits of tourism · how travel has changed · an experience where you noticed a problem · your opinion and suggestions' },
    plan: [
      'Set the scene — where, when, how (sāfarnā bi-…), where you stayed (nazalnā fī …).',
      'Sights + food — zurnā, raʾaynā, akalnā; adjectives that agree; a superlative.',
      'A problem — taʿaṭṭalat …, fa-ntaẓarnā …; how it ended.',
      'Lesson + future — idhā … sa- (real); Stretch: ṣaḥīḥun anna … ghayra anna, law … la- (unreal).',
    ],
    frames: [
      { ar: 'نَزَلْنَا فِي فُنْدُقٍ قَرِيبٍ مِنَ البَحْرِ.', en: 'past: we stayed in a hotel near the sea.' },
      { ar: 'المَغْرِبُ بَلَدٌ رَائِعٌ.', en: 'present: Morocco is a wonderful country.' },
      { ar: 'إِذَا سَنَحَتِ الفُرْصَةُ، سَأَزُورُ فَاسَ.', en: 'future: if I get the chance, I will visit Fez.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Last summer to Morocco: London to Marrakesh by plane (four hours); a lovely traditional hotel with a garden and pool, a colourful room → day one: Jemaa el-Fnaa square, musicians and sellers, Mum bought a small rug; tagine and mint tea, very tasty and cheap, so we ate a lot! → day three: the desert, camel rides; very hot, lots of water; a night in a tent under many stars — the best night, lots of photos → Morocco is wonderful (kind people, tasty food); in future I want to visit Fez and Chefchaouen, two historic cities.', find: ['سَافَرْنَا بِالطَّائِرَةِ', 'زُرْنَا سَاحَةَ', 'رَكِبْنَا الجِمَالَ', 'أُرِيدُ أَنْ أَزُورَ'], notes: 'Core model: a clear past narrative, days in order, food and weather, an opinion with reasons and a future wish.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'I didn’t expect Morocco to be the best trip of my life: a four-hour flight, then a traditional riad — an old house around a small garden with a fountain and orange trees → the first days in colourful markets, tagine and mint tea; as for the evenings, we spent them in Jemaa el-Fnaa among musicians, storytellers and fresh-juice sellers → but problems too: the bus broke down on the way to the desert; three hours in the burning sun, everyone worried and thirsty; villagers invited us home and gave us warm bread — the problem became the best memory → travel isn’t only places but people, and generosity needs no shared language; if I get the chance, I’ll go back to visit Fez; “if I spoke Darija, I would have talked with them more”.', find: ['لَمْ أَكُنْ أَتَوَقَّعُ', 'أَمَّا المَسَاءُ فَكُنَّا', 'فَتَحَوَّلَتِ المُشْكِلَةُ', 'لَوْ كُنْتُ أَتَكَلَّمُ … لَتَحَدَّثْتُ'], notes: 'Full-mark model: lam akun + present, a definition with a relative, ammā … fa-kunnā, lam takhlu, fa- results, lays … bal, idhā … sa- and law … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'benefits and harms', text: Q3B_FULL, en: 'Tourism is one of the world’s biggest industries: millions of jobs, peoples getting to know each other, protecting ancient sites; a tourist in Egypt or Jordan shops, stays and eats locally, so locals benefit directly → in the past travel was for the rich only; as for today, trips are cheaper and booked by phone — good, but some cities are crowded all year → last summer, a coastal town: rubbish on the beach, locals complaining of rising prices; my sister and I cleaned part of the beach and other tourists joined us — twenty bags in two hours → it is true tourism has downsides, but its benefits are bigger if we respect places and people; “if every tourist cared for a place as for their own home, our cities would stay beautiful for future generations”.', find: ['مِنْ أَهَمِّ الصِّنَاعَاتِ', 'أَمَّا اليَوْمَ فَقَدْ', 'فَقَرَّرْتُ … أَنْ نُنَظِّفَ', 'لَوِ اهْتَمَّ … لَبَقِيَتْ'], notes: 'Full-mark model for the Stretch title: a superlative, ḥīna …, kāna vs ammā … fa-qad, a past initiative, a concession with idhā, and law … la-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; numbers + nights correct (khamsu layālin).' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: past (zurnā) AND future (sanazūru) used correctly.' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: idhā (real) and law … la- (unreal) both used correctly.' },
  ],
};
write.Q2.frames[1] = ['1', 'أَنَا الآنَ فِي ______ . سَافَرْنَا بِـ ______ .', 'I am now in … We travelled by …'];
write.Q2.frames[1] = ['1', 'أَنَا الآنَ فِي ______ . سَافَرْنَا ______ .', 'I am now in … We travelled by …'];

module.exports = { speak, write };
