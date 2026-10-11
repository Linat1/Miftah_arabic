'use strict';
/* Exam-practice data · TE-L06 · Faith Celebrations and Special Occasions (past vs present habits; sequencing: awwalan, thumma, baʿda dhālika, akhīran; object pronouns: ushtartuhā, ahdatnī iyyāhu, zurnāhum). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'E', n: 6, short: 'Faith Celebrations and Special Occasions', arShort: 'الأَعْيَادُ الدِّينِيَّةُ وَالمُنَاسَبَاتُ', fileTitle: 'Faith_Celebrations_and_Special_Occasions', title: 'Faith Celebrations and Special Occasions', ar: 'الأَعْيَادُ الدِّينِيَّةُ وَالمُنَاسَبَاتُ الخَاصَّةُ', icon: 'FaMoon', grammar: 'past for one celebration vs present for every year (iḥtafalnā / naḥtafilu); sequencing (awwalan, thumma, baʿda dhālika, akhīran); object pronouns (zurnāhum, ushtartuhā, ahdatnī iyyāhu)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: describe how you celebrate Ramadan, the two Eids and other special occasions — what you do every year (present) and what you did last time (past) — in a clear sequence (أَوَّلًا · ثُمَّ · بَعْدَ ذٰلِكَ · أَخِيرًا), with object pronouns to avoid repetition (زُرْنَاهُمْ · اشْتَرَيْتُهَا).',
  words: [
    w(1, 'عِيدٌ', 'a festival / Eid', [['festivals', 'أَعْيَادٌ'], ['happy Eid', 'عِيدٌ مُبَارَكٌ']], { tag: 'noun' }),
    w(2, 'عِيدُ الفِطْرِ · عِيدُ الأَضْحَى', 'Eid al-Fitr · Eid al-Adha', [['Ramadan', 'رَمَضَانُ'], ['the fast', 'الصِّيَامُ']], { tag: 'occasions' }),
    w(3, 'أَحْتَفِلُ بِالعِيدِ', 'I celebrate Eid', [['we celebrated', 'احْتَفَلْنَا'], ['celebration', 'احْتِفَالٌ']], { tag: 'verb' }),
    w(4, 'الإِفْطَارُ · السُّحُورُ', 'the fast-breaking meal · pre-dawn meal', [['I fast', 'أَصُومُ'], ['fasting (m. · f.)', 'صَائِمٌ · صَائِمَةٌ']], { tag: 'Ramadan' }),
    w(5, 'صَلَاةُ العِيدِ', 'the Eid prayer', [['the mosque', 'المَسْجِدُ'], ['the morning', 'الصَّبَاحُ']], { tag: 'noun' }),
    w(6, 'عِيدِيَّةٌ', 'Eid money (gift)', [['a gift', 'هَدِيَّةٌ'], ['gifts', 'هَدَايَا']], { tag: 'noun' }),
    w(7, 'مَلَابِسُ جَدِيدَةٌ', 'new clothes', [['I wore it (f.)', 'لَبِسْتُهَا'], ['I bought them', 'اشْتَرَيْتُهَا']], { tag: 'object pronoun' }),
    w(8, 'نَزُورُ الأَقَارِبَ', 'we visit relatives', [['we visited them', 'زُرْنَاهُمْ'], ['they visited us', 'زَارُونَا']], { tag: 'object pronoun' }),
    w(9, 'أَوَّلًا · ثُمَّ', 'first · then', [['after that', 'بَعْدَ ذٰلِكَ'], ['finally', 'أَخِيرًا']], { tag: 'sequence' }),
    w(10, 'حَفْلَةُ زِفَافٍ', 'a wedding party', [['bride · groom', 'عَرُوسٌ · عَرِيسٌ'], ['a birth', 'وِلَادَةٌ']], { tag: 'occasions' }),
    w(11, 'أُهَنِّئُ', 'I congratulate', [['congratulations', 'تَهْنِئَةٌ'], ['every year and you are well', 'كُلُّ عَامٍ وَأَنْتُمْ بِخَيْرٍ']], { tag: 'courtesy' }),
    w(12, 'كُنَّا نَحْتَفِلُ', 'we used to celebrate', [['when I was little', 'عِنْدَمَا كُنْتُ صَغِيرًا'], ['nowadays', 'أَمَّا اليَوْمَ']], { tag: 'past habit' }),
  ],
  words1: { eyebrow: 'Language bank · occasions and sequence', title: 'First … then … finally', ar: 'تَرْتِيبُ الأَحْدَاثِ', notes: 'LANGUAGE BANK (2 min) — the Eid day in order: أَوَّلًا نُصَلِّي صَلَاةَ العِيدِ، ثُمَّ نُفْطِرُ، بَعْدَ ذٰلِكَ نَزُورُ الأَقَارِبَ، وَأَخِيرًا نَخْرُجُ إِلَى الحَدِيقَةِ. Present for every year; past for "last Eid".' },
  words2: { eyebrow: 'Language bank · object pronouns and greetings', title: 'Avoid repeating the noun', ar: 'الضَّمَائِرُ المُتَّصِلَةُ بِالفِعْلِ', notes: 'LANGUAGE BANK (2 min) — attach the object to the verb: اشْتَرَيْتُ الفُسْتَانَ → اشْتَرَيْتُهُ · زُرْنَا جَدَّتِي → زُرْنَاهَا · زُرْنَا أَقَارِبَنَا → زُرْنَاهُمْ. Two objects: أَهْدَتْنِي إِيَّاهُ (she gave it to me). Greetings: عِيدٌ مُبَارَكٌ · كُلُّ عَامٍ وَأَنْتُمْ بِخَيْرٍ.' },
  checkCore: 'described a celebration with at least two sequencing words',
  checkDevelop: 'used past and present correctly and one object pronoun',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'Eid morning in the street', title: 'Role play A — Eid morning with a neighbour', ar: 'صَبَاحُ العِيدِ مَعَ الجَارِ', you: 'a teenager on Eid morning', them: 'a friendly neighbour',
      tasks: [
        { core: true, ex: 'صَبَاحَ الخَيْرِ! تَبْدُو جَمِيلًا اليَوْمَ!', task: 'Explain that it is Eid.', help: 'شُكْرًا! اليَوْمَ …', model: 'شُكْرًا! اليَوْمَ عِيدُ الفِطْرِ.', modelEn: 'Thanks! Today is Eid al-Fitr.' },
        { core: true, ex: 'مَاذَا تَفْعَلُونَ فِي العِيدِ؟', task: 'Say two things you do (present + sequence).', help: 'أَوَّلًا … ثُمَّ …', model: 'أَوَّلًا نُصَلِّي فِي المَسْجِدِ، ثُمَّ نَزُورُ جَدَّتِي.', modelEn: 'First we pray at the mosque, then we visit my grandmother.' },
        { core: true, ex: 'وَمَاذَا تَأْكُلُونَ؟', task: 'Name a special food.', help: 'نَأْكُلُ …', model: 'نَأْكُلُ الكَعْكَ وَالمَعْمُولَ.', modelEn: 'We eat Eid biscuits and maamoul.' },
        { core: true, ex: 'لَذِيذٌ! عِيدٌ سَعِيدٌ لَكُمْ.', task: 'Thank the neighbour and offer something.', help: 'شُكْرًا! تَفَضَّلْ …', model: 'شُكْرًا! تَفَضَّلْ، هٰذَا مَعْمُولٌ مِنْ أُمِّي.', modelEn: 'Thank you! Here — some maamoul from my mum.' },
        { core: true, unexpected: true, ex: 'مَا أَلْطَفَكُمْ! هَلْ تَأْخُذُ هَدَايَا فِي العِيدِ؟', task: 'Answer the unexpected question.', help: 'نَعَمْ، آخُذُ … مِنْ …', model: 'نَعَمْ، آخُذُ عِيدِيَّةً مِنْ جَدِّي.', modelEn: 'Yes, I get Eid money from my grandpa.' },
      ],
      girl: 'تَبْدِينَ جَمِيلَةً · تَأْخُذِينَ',
      notes: 'Core: present-tense routine (nuṣallī, nazūru, naʾkulu), awwalan … thumma, courtesy (tafaḍḍal), ʿīdiyya.',
    },
    {
      id: 'B', level: 'Core+', setting: 'at school', title: 'Role play B — Inviting a friend to an iftar', ar: 'دَعْوَةٌ إِلَى الإِفْطَارِ', you: 'a student who fasts', them: 'a classmate who does not fast',
      tasks: [
        { core: true, ex: 'هَلْ أَنْتَ صَائِمٌ اليَوْمَ؟', task: 'Say yes and explain briefly.', help: 'نَعَمْ، أَصُومُ … مِنْ … إِلَى …', model: 'نَعَمْ، أَصُومُ مِنَ الفَجْرِ إِلَى المَغْرِبِ.', modelEn: 'Yes, I fast from dawn to sunset.' },
        { core: true, ex: 'وَمَتَى تَأْكُلُ؟', task: 'Explain iftar and invite your friend.', help: 'نَأْكُلُ … ؛ هَلْ تُرِيدُ أَنْ …؟', model: 'نَأْكُلُ الإِفْطَارَ مَعَ الأُسْرَةِ. هَلْ تُرِيدُ أَنْ تَأْتِيَ يَوْمَ السَّبْتِ؟', modelEn: 'We eat iftar with family. Would you like to come on Saturday?' },
        { ex: 'بِكُلِّ سُرُورٍ! مَتَى وَأَيْنَ؟', task: 'Give time and place.', help: 'فِي بَيْتِنَا … فِي السَّاعَةِ …', model: 'فِي بَيْتِنَا، فِي السَّاعَةِ الثَّامِنَةِ وَالرُّبْعِ، لِأَنَّ المَغْرِبَ مُتَأَخِّرٌ فِي الصَّيْفِ.', modelEn: 'At our house at 8.15, because sunset is late in summer.' },
        { ex: 'مَاذَا أُحْضِرُ مَعِي؟', task: 'Answer, then ASK about their festival.', help: 'لَا شَيْءَ! … وَأَنْتَ، كَيْفَ تَحْتَفِلُونَ بِـ…؟', model: 'لَا شَيْءَ، أَنْتَ ضَيْفُنَا! وَأَنْتَ، كَيْفَ تَحْتَفِلُونَ بِعِيدِ المِيلَادِ؟', modelEn: 'Nothing — you’re our guest! And you, how do you celebrate Christmas?' },
        { unexpected: true, ex: 'نَتَبَادَلُ الهَدَايَا. أَلَيْسَ الصِّيَامُ صَعْبًا؟', task: 'Answer the unexpected question (opinion + reason).', help: 'صَعْبٌ قَلِيلًا، لٰكِنَّهُ …', model: 'صَعْبٌ قَلِيلًا فِي الأَيَّامِ الأُولَى، لٰكِنَّهُ يُعَلِّمُنِي الصَّبْرَ، وَيُذَكِّرُنِي بِالفُقَرَاءِ.', modelEn: 'A bit hard the first days, but it teaches me patience and reminds me of the poor.' },
      ],
      girl: 'أَنْتِ صَائِمَةٌ · تَأْكُلِينَ · تُرِيدِينَ · تَأْتِي · أَنْتِ ضَيْفَتُنَا · أَصُومُ (same)',
      notes: 'Core+: min … ilā, an invitation with hal turīdu an, telling the time (ath-thāmina wa-r-rubʿ), lā shayʾa, the CANDIDATE asks about a friend’s festival, lākinnahu + two verbs with object pronouns (yuʿallimunī, yudhakkirunī).',
    },
    {
      id: 'C', level: 'Develop', setting: 'a class presentation', title: 'Role play C — Last Eid, step by step', ar: 'العِيدُ المَاضِي خُطْوَةً خُطْوَةً', you: 'a student presenting', them: 'your teacher asking questions',
      tasks: [
        { ex: 'كَيْفَ اسْتَعْدَدْتُمْ لِلْعِيدِ الأَخِيرِ؟', task: 'Describe preparations (past + object pronouns).', help: 'اشْتَرَيْنَا … وَ… ثُمَّ …', model: 'اشْتَرَيْنَا مَلَابِسَ جَدِيدَةً وَلَبِسْنَاهَا صَبَاحَ العِيدِ، وَقَبْلَ ذٰلِكَ بِيَوْمٍ خَبَزْنَا الكَعْكَ وَوَزَّعْنَاهُ عَلَى الجِيرَانِ.', modelEn: 'We bought new clothes and wore them on Eid morning; the day before, we baked biscuits and gave them to the neighbours.' },
        { ex: 'وَيَوْمُ العِيدِ نَفْسُهُ؟', task: 'Sequence the day with four linkers.', help: 'أَوَّلًا … ثُمَّ … بَعْدَ ذٰلِكَ … وَأَخِيرًا …', model: 'أَوَّلًا صَلَّيْنَا فِي الحَدِيقَةِ مَعَ آلَافِ النَّاسِ، ثُمَّ فَطَرْنَا عِنْدَ جَدِّي، بَعْدَ ذٰلِكَ زُرْنَا أَعْمَامِي، وَأَخِيرًا ذَهَبْنَا إِلَى المَلَاهِي.', modelEn: 'First we prayed in the park with thousands, then breakfast at grandpa’s, after that we visited my uncles, and finally the funfair.' },
        { ex: 'هَلْ يَخْتَلِفُ العِيدُ الآنَ عَنِ العِيدِ فِي طُفُولَتِكَ؟', task: 'Contrast then and now.', help: 'عِنْدَمَا كُنْتُ صَغِيرًا كُنَّا … أَمَّا الآنَ فَـ…', model: 'عِنْدَمَا كُنْتُ صَغِيرًا كُنَّا نَحْتَفِلُ فِي الأُرْدُنِّ مَعَ كُلِّ العَائِلَةِ، أَمَّا الآنَ فَنَحْتَفِلُ هُنَا، وَنُكَلِّمُ أَقَارِبَنَا بِالفِيدْيُو.', modelEn: 'As a child we celebrated in Jordan with the whole family; now we celebrate here and video-call relatives.' },
        { ex: 'مَا أَجْمَلُ هَدِيَّةٍ أَخَذْتَهَا؟', task: 'Describe a gift with object pronouns.', help: 'أَهْدَانِي … إِيَّاهُ / أَهْدَتْنِي …', model: 'أَجْمَلُ هَدِيَّةٍ مُصْحَفٌ صَغِيرٌ أَهْدَتْنِي إِيَّاهُ جَدَّتِي، وَأَحْمِلُهُ مَعِي دَائِمًا.', modelEn: 'A small Qur’an my grandmother gave me — I always carry it.' },
        { unexpected: true, ex: 'كَيْفَ سَتَحْتَفِلُ بِالعِيدِ القَادِمِ؟', task: 'Answer the unexpected question (future + purpose).', help: 'سَـ… لِكَيْ …', model: 'سَأُنَظِّمُ مَعَ أَصْدِقَائِي حَفْلَةً صَغِيرَةً لِأَطْفَالِ المُسْتَشْفَى، لِكَيْ يَشْعُرُوا بِفَرْحَةِ العِيدِ أَيْضًا.', modelEn: 'I’ll organise a small party with friends for children in hospital, so they feel the joy of Eid too.' },
      ],
      girl: 'اسْتَعْدَدْتُمْ (same) · طُفُولَتِكِ · أَخَذْتِهَا · سَتَحْتَفِلِينَ · كُنْتُ صَغِيرَةً',
      notes: 'Develop: past verbs with object pronouns (labisnāhā, wazzaʿnāhu), qabla dhālika bi-yawmin, four sequencers, kunnā naḥtafilu vs ammā al-āna fa-, ahdatnī iyyāhu, sa- + li-kay.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a TV interview', title: 'Role play D — Celebrations in a diverse society', ar: 'الأَعْيَادُ فِي مُجْتَمَعٍ مُتَنَوِّعٍ', you: 'a young guest', them: 'a TV presenter',
      tasks: [
        { ex: 'مَا الَّذِي يَجْعَلُ العِيدَ مُمَيَّزًا بِالنِّسْبَةِ إِلَيْكَ؟', task: 'Explain meaning beyond food and gifts.', help: 'لَيْسَ … بَلْ …', model: 'لَيْسَ الطَّعَامَ وَلَا الهَدَايَا، بَلِ الشُّعُورُ بِأَنَّنَا أُمَّةٌ وَاحِدَةٌ؛ فَبَعْدَ شَهْرٍ مِنَ الصِّيَامِ نَفْرَحُ مَعًا، وَنَتَذَكَّرُ الفُقَرَاءَ بِزَكَاةِ الفِطْرِ.', modelEn: 'Not food or gifts but the feeling of one community: after a month of fasting we rejoice together and remember the poor through zakat al-fitr.' },
        { ex: 'هَلْ تُشَارِكُ فِي أَعْيَادِ غَيْرِكَ؟', task: 'Describe sharing others’ festivals respectfully.', help: 'نَعَمْ، أُهَنِّئُ … ؛ مَثَلًا، فِي …', model: 'نَعَمْ، أُهَنِّئُ أَصْدِقَائِي بِأَعْيَادِهِمْ؛ مَثَلًا، فِي دِيوَالِي زُرْتُ صَدِيقَتِي الهِنْدُوسِيَّةَ مَعَ أُمِّي، وَأَهْدَيْنَاهَا حَلَوِيَّاتٍ، فَأَضَاءَتْ لَنَا مِصْبَاحًا.', modelEn: 'Yes — at Diwali mum and I visited my Hindu friend, gave her sweets, and she lit a lamp for us.' },
        { ex: 'يَقُولُ البَعْضُ إِنَّ الأَعْيَادَ صَارَتْ تِجَارِيَّةً.', task: 'Concede and balance.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ … مِمَّا …', model: 'صَحِيحٌ أَنَّ المَحَلَّاتِ تَسْتَغِلُّهَا لِتَبِيعَ أَكْثَرَ، غَيْرَ أَنَّ العَائِلَاتِ مَا زَالَتْ تَجْتَمِعُ، مِمَّا يَعْنِي أَنَّ الرُّوحَ بَاقِيَةٌ.', modelEn: 'Shops exploit them to sell more, but families still gather, which means the spirit remains.' },
        { ex: 'كَيْفَ كَانَ أَجْدَادُكَ يَحْتَفِلُونَ؟', task: 'Narrate the past with kāna + present.', help: 'كَانُوا … ، وَكَانَ … ؛ أَمَّا نَحْنُ فَـ…', model: 'كَانُوا يَسْهَرُونَ لَيْلَةَ العِيدِ يَخْبِزُونَ الكَعْكَ فِي فُرْنِ القَرْيَةِ، وَكَانَ الأَطْفَالُ يَطْرُقُونَ الأَبْوَابَ؛ أَمَّا نَحْنُ فَنَشْتَرِيهِ جَاهِزًا غَالِبًا.', modelEn: 'They stayed up Eid night baking biscuits in the village oven, and children knocked on doors; we mostly buy them ready-made.' },
        { unexpected: true, ex: 'لَوْ أَضَفْتَ عَادَةً جَدِيدَةً إِلَى العِيدِ، فَمَا هِيَ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ أَضَفْتُ عَادَةً، لَـ… لِكَيْ …', model: 'لَوْ أَضَفْتُ عَادَةً، لَدَعَوْنَا جَارًا وَحِيدًا إِلَى غَدَاءِ العِيدِ كُلَّ سَنَةٍ، لِكَيْ لَا يَبْقَى أَحَدٌ فِي حَيِّنَا وَحْدَهُ فِي يَوْمِ الفَرَحِ.', modelEn: 'We’d invite a lonely neighbour to Eid lunch every year, so no one in our area is alone on the day of joy.' },
      ],
      girl: 'إِلَيْكِ · تُشَارِكِينَ · غَيْرِكِ · أَجْدَادُكِ · أَضَفْتِ',
      notes: 'Stretch: laysa … wa-lā … bal, fa-baʿda shahrin, mathalan + past with object pronouns (ahdaynāhā), a concession with mimmā yaʿnī, kānū + present + ḥāl (yakhbizūna), ammā naḥnu fa-, law … la- + li-kay lā.',
      modelFoot: 'Stretch: meaning, sharing festivals, a concession, the past in kāna + present and law … la- — all with object pronouns.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'أَعْيَادُنَا', aim: 'one full sentence per question',
      qs: [
        { q: 'مَا عِيدُكَ المُفَضَّلُ؟', en: 'What is your favourite festival?', start: 'عِيدِي المُفَضَّلُ … لِأَنَّ …', model: 'عِيدِيَ المُفَضَّلُ عِيدُ الفِطْرِ، لِأَنَّهُ بَعْدَ رَمَضَانَ.', modelEn: 'Eid al-Fitr — it comes after Ramadan.' },
        { q: 'مَاذَا تَلْبَسُ فِي العِيدِ؟', en: 'What do you wear at Eid?', start: 'أَلْبَسُ …', model: 'أَلْبَسُ مَلَابِسَ جَدِيدَةً.', modelEn: 'New clothes.' },
        { q: 'مَنْ تَزُورُ فِي العِيدِ؟', en: 'Who do you visit at Eid?', start: 'أَزُورُ …', model: 'أَزُورُ جَدِّي وَجَدَّتِي وَأَعْمَامِي.', modelEn: 'My grandparents and uncles.' },
        { q: 'هَلْ تَصُومُ فِي رَمَضَانَ؟', en: 'Do you fast in Ramadan?', start: 'نَعَمْ، أَصُومُ … / …', model: 'نَعَمْ، أَصُومُ كُلَّ الشَّهْرِ.', modelEn: 'Yes, the whole month.' },
        { q: 'مَا أَكْلَةُ العِيدِ فِي بَيْتِكُمْ؟', en: 'What is the Eid dish at your house?', start: 'نَأْكُلُ …', model: 'نَأْكُلُ البِرْيَانِي، وَتَطْبُخُهُ أُمِّي.', modelEn: 'Biryani — mum cooks it.' },
      ],
      foot: 'Core: one full sentence for every question — present tense for "every year". If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + present tense + a reason = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'العِيدُ بَيْنَ الأَمْسِ وَاليَوْمِ', aim: 'two or three sentences, with sequence, two time frames and an object pronoun',
      qs: [
        { q: 'صِفْ يَوْمَ العِيدِ فِي بَيْتِكُمْ.', en: 'Describe Eid day at your house.', start: 'أَوَّلًا … ثُمَّ … وَأَخِيرًا …', model: 'أَوَّلًا نُصَلِّي صَلَاةَ العِيدِ، ثُمَّ نُفْطِرُ مَعًا، وَأَخِيرًا نَزُورُ أَقَارِبَنَا وَنُهَنِّئُهُمْ.', modelEn: 'Eid prayer, breakfast together, then we visit and congratulate relatives.' },
        { q: 'كَيْفَ قَضَيْتَ رَمَضَانَ الأَخِيرَ؟', en: 'How did you spend last Ramadan?', start: 'صُمْتُ … وَكُنْتُ … كُلَّ لَيْلَةٍ', model: 'صُمْتُ الشَّهْرَ كُلَّهُ، وَكُنْتُ أَذْهَبُ إِلَى المَسْجِدِ كُلَّ لَيْلَةٍ لِصَلَاةِ التَّرَاوِيحِ مَعَ أَبِي.', modelEn: 'I fasted the whole month and went to the mosque every night for tarawih with my dad.' },
        { q: 'حَدِّثْنِي عَنْ مُنَاسَبَةٍ خَاصَّةٍ حَضَرْتَهَا.', en: 'Tell me about a special occasion you attended.', start: 'حَضَرْتُ … ؛ كَانَ … وَ…', model: 'حَضَرْتُ حَفْلَةَ زِفَافِ خَالَتِي فِي الصَّيْفِ؛ كَانَ المَكَانُ جَمِيلًا، وَرَقَصْنَا الدَّبْكَةَ حَتَّى مُنْتَصَفِ اللَّيْلِ.', modelEn: 'My aunt’s wedding last summer: a beautiful venue, and we danced the dabke till midnight.' },
        { q: 'هَلْ تَغَيَّرَ احْتِفَالُكُمْ بِالعِيدِ؟', en: 'Has your Eid celebration changed?', start: 'كُنَّا … أَمَّا الآنَ فَـ…', model: 'كُنَّا نَحْتَفِلُ فِي البَيْتِ فَقَطْ، أَمَّا الآنَ فَنَذْهَبُ إِلَى مِهْرَجَانِ العِيدِ فِي الحَدِيقَةِ الكَبِيرَةِ.', modelEn: 'We celebrated only at home; now we go to the Eid festival in the big park.' },
        { q: 'مَا الهَدِيَّةُ الَّتِي سَتُعْطِيهَا لِأُمِّكَ فِي العِيدِ القَادِمِ؟', en: 'What gift will you give your mum next Eid?', start: 'سَأُهْدِيهَا … لِأَنَّ …', model: 'سَأُهْدِيهَا عِطْرًا، لِأَنَّهَا تُحِبُّهُ، وَسَأَشْتَرِيهِ مِنْ مَصْرُوفِي.', modelEn: 'Perfume — she loves it, and I’ll buy it from my pocket money.' },
      ],
      foot: 'Develop: two or three sentences — sequencing, two time frames and an object pronoun on the verb.',
      modelFoot: 'Sequence + past / present + object pronouns = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'مَعْنَى الأَعْيَادِ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ فَقَدَتِ الأَعْيَادُ مَعْنَاهَا الحَقِيقِيَّ؟', en: 'Have festivals lost their true meaning?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الإِعْلَانَاتِ تُرَكِّزُ عَلَى الشِّرَاءِ، غَيْرَ أَنَّ المَعْنَى يَبْقَى فِي أَيْدِينَا؛ فَنَحْنُ الَّذِينَ نُقَرِّرُ هَلْ نَجْعَلُهُ يَوْمَ تَسَوُّقٍ أَمْ يَوْمَ تَرَاحُمٍ.', modelEn: 'Adverts focus on buying, but the meaning is in our hands: we decide whether it’s a shopping day or a day of compassion.' },
        { q: 'مَا فَائِدَةُ الاحْتِفَالِ بِأَعْيَادِ الآخَرِينَ فِي المَدْرَسَةِ؟', en: 'What’s the benefit of marking others’ festivals at school?', start: 'أَرَى أَنَّ … لِأَنَّ … مِمَّا …', model: 'أَرَى أَنَّهُ مُفِيدٌ جِدًّا، لِأَنَّ الطَّالِبَ يَشْعُرُ بِأَنَّ ثَقَافَتَهُ مُحْتَرَمَةٌ، مِمَّا يُقَوِّي انْتِمَاءَهُ إِلَى المَدْرَسَةِ.', modelEn: 'Very useful: a student feels their culture is respected, which strengthens their sense of belonging.' },
        { q: 'كَيْفَ تَخْتَلِفُ الأَعْيَادُ فِي بَلَدٍ مُسْلِمٍ عَنْهَا فِي بَرِيطَانْيَا؟', en: 'How do Eids differ in a Muslim country from Britain?', start: 'هُنَاكَ … بَيْنَمَا هُنَا …', model: 'هُنَاكَ تُعَطَّلُ المَدَارِسُ وَتَمْتَلِئُ الشَّوَارِعُ بِالزِّينَةِ، بَيْنَمَا هُنَا يَذْهَبُ بَعْضُ النَّاسِ إِلَى العَمَلِ، لٰكِنَّ المُجْتَمَعَ يَصْنَعُ أَجْوَاءَهُ الخَاصَّةَ.', modelEn: 'There schools close and streets fill with decorations; here some go to work, but the community makes its own atmosphere.' },
        { q: 'مَا أَهَمُّ ذِكْرَى لَكَ مِنْ عِيدٍ مَضَى؟', en: 'What is your most important memory of a past Eid?', start: 'أَهَمُّ ذِكْرَى … عِنْدَمَا …', model: 'أَهَمُّ ذِكْرَى عِنْدَمَا صُمْتُ رَمَضَانَ كَامِلًا لِأَوَّلِ مَرَّةٍ وَأَنَا فِي العَاشِرَةِ، فَأَهْدَانِي جَدِّي سَاعَةً مَا زِلْتُ أَلْبَسُهَا.', modelEn: 'Fasting all of Ramadan for the first time at ten — grandpa gave me a watch I still wear.' },
        { q: 'لَوْ قَضَيْتَ العِيدَ وَحْدَكَ فِي بَلَدٍ بَعِيدٍ، مَاذَا تَفْعَلُ؟', en: 'If you spent Eid alone in a distant country, what would you do?', start: 'لَوْ حَدَثَ ذٰلِكَ، لَـ…', model: 'لَوْ حَدَثَ ذٰلِكَ، لَبَحَثْتُ عَنْ أَقْرَبِ مَسْجِدٍ لِأُصَلِّيَ مَعَ النَّاسِ، وَلَكَلَّمْتُ أُسْرَتِي بِالفِيدْيُو، فَالعِيدُ لَا يَكْتَمِلُ إِلَّا مَعَ الآخَرِينَ.', modelEn: 'I’d find the nearest mosque to pray with people and video-call my family — Eid is only complete with others.' },
      ],
      foot: 'Stretch: a concession, an opinion with mimmā, a comparison with baynamā, a narrated memory and law … la-.',
      modelFoot: 'Stretch: hal … am, the passive (tuʿaṭṭalu), mimmā, mā ziltu, lā … illā and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I described a celebration in order (awwalan, thumma).' },
    { route: 'core', text: 'I named food, clothes and people I visit.' },
    { route: 'develop', text: 'I used the past for last Eid and the present for every year.' },
    { route: 'develop', text: 'I used an object pronoun (zurnāhum, labistuhā).' },
    { route: 'stretch', text: 'I discussed the meaning of festivals with a concession and law … la-.' },
  ],
};
speak.RP[1].tasks[3].help = 'لَا شَيْءَ! … وَأَنْتَ، كَيْفَ تَحْتَفِلُونَ بِعِيدِ …؟';
speak.RP[2].tasks[2].help = 'عِنْدَمَا كُنْتُ صَغِيرًا كُنَّا … أَمَّا الآنَ فَنَحْتَفِلُ …';
speak.RP[2].tasks[4].help = 'سَأُنَظِّمُ … لِكَيْ …';
speak.RP[3].tasks[3].help = 'كَانُوا … ، وَكَانَ … ؛ أَمَّا نَحْنُ فَنَشْتَرِي …';
speak.RP[3].tasks[4].help = 'لَوْ أَضَفْتُ عَادَةً، لَدَعَوْنَا … لِكَيْ …';
speak.CONV[1].qs[3].start = 'كُنَّا … أَمَّا الآنَ فَنَذْهَبُ …';
speak.CONV[2].qs[4].start = 'لَوْ حَدَثَ ذٰلِكَ، لَبَحَثْتُ …';

const Q2_CORE = `مَرْحَبًا يَا رِيمُ،
كَيْفَ حَالُكِ؟ عِيدٌ مُبَارَكٌ! أُرِيدُ أَنْ أُخْبِرَكِ عَنْ عِيدِ الفِطْرِ. قَبْلَ العِيدِ اشْتَرَيْتُ فُسْتَانًا أَزْرَقَ جَمِيلًا، وَلَبِسْتُهُ صَبَاحَ العِيدِ. أَوَّلًا، صَلَّيْنَا صَلَاةَ العِيدِ فِي الحَدِيقَةِ الكَبِيرَةِ. ثُمَّ ذَهَبْنَا إِلَى بَيْتِ جَدَّتِي، وَأَكَلْنَا الكَعْكَ هُنَاكَ. بَعْدَ ذٰلِكَ زُرْنَا خَالَاتِي، وَأَعْطَيْنَنِي عِيدِيَّةً. كَانَ اليَوْمُ رَائِعًا، لِأَنَّ كُلَّ العَائِلَةِ كَانَتْ مَعًا. فِي العِيدِ القَادِمِ سَأَطْبُخُ المَعْمُولَ مَعَ أُمِّي. وَأَنْتِ، كَيْفَ احْتَفَلْتِ بِالعِيدِ؟
مَعَ السَّلَامَةِ،
زَيْنَبُ`;
const Q2_FULL = `عَزِيزَتِي رِيمُ،
كُلُّ عَامٍ وَأَنْتِ بِخَيْرٍ! مَا زِلْتُ أَعِيشُ فَرْحَةَ العِيدِ، فَأَرَدْتُ أَنْ أُشَارِكَكِ تَفَاصِيلَهُ. فِي اللَّيْلَةِ الأَخِيرَةِ مِنْ رَمَضَانَ، خَبَزْنَا الكَعْكَ فِي مَطْبَخِ جَدَّتِي حَتَّى مُنْتَصَفِ اللَّيْلِ، ثُمَّ وَزَّعْنَاهُ عَلَى الجِيرَانِ صَبَاحًا. وَبَعْدَ أَنْ صَلَّيْنَا العِيدَ فِي الحَدِيقَةِ مَعَ آلَافِ النَّاسِ، اجْتَمَعَتِ العَائِلَةُ كُلُّهَا عَلَى الفُطُورِ. أَمَّا أَجْمَلُ هَدِيَّةٍ فَكَانَتْ أُسْوِرَةً فِضِّيَّةً أَهْدَتْنِي إِيَّاهَا خَالَتِي، وَلَمْ أَخْلَعْهَا مُنْذُ ذٰلِكَ اليَوْمِ. صَحِيحٌ أَنَّنِي تَعِبْتُ مِنْ كَثْرَةِ الزِّيَارَاتِ، غَيْرَ أَنَّ ضَحِكَاتِ الأَطْفَالِ أَنْسَتْنِي التَّعَبَ. وَإِذَا سَمَحَتْ أُمُّكِ، فَسَأَدْعُوكِ إِلَى إِفْطَارِ رَمَضَانَ القَادِمِ. هَلْ تَقْبَلِينَ؟
بِمَحَبَّةٍ،
زَيْنَبُ`;
const Q3A_CORE = `أَجْمَلُ عِيدٍ فِي حَيَاتِي كَانَ عِيدَ الفِطْرِ فِي السَّنَةِ المَاضِيَةِ. فِي ذٰلِكَ العِيدِ زَارَتْنَا جَدَّتِي مِنَ الأُرْدُنِّ لِأَوَّلِ مَرَّةٍ مُنْذُ خَمْسِ سَنَوَاتٍ.
قَبْلَ العِيدِ صُمْتُ رَمَضَانَ كُلَّهُ، وَكُنْتُ أُسَاعِدُ أُمِّي فِي تَحْضِيرِ الإِفْطَارِ كُلَّ يَوْمٍ. فِي اللَّيْلَةِ الأَخِيرَةِ خَبَزْنَا الكَعْكَ مَعَ جَدَّتِي، وَعَلَّمَتْنِي وَصْفَتَهَا القَدِيمَةَ.
فِي صَبَاحِ العِيدِ لَبِسْتُ فُسْتَانًا جَدِيدًا اشْتَرَتْهُ لِي أُمِّي. أَوَّلًا، صَلَّيْنَا فِي الحَدِيقَةِ مَعَ النَّاسِ. ثُمَّ أَكَلْنَا الفُطُورَ مَعًا فِي البَيْتِ. بَعْدَ ذٰلِكَ جَاءَ أَعْمَامِي وَأَوْلَادُهُمْ، وَأَعْطَانِي عَمِّي عِيدِيَّةً كَبِيرَةً، فَاشْتَرَيْتُ بِهَا كِتَابًا جَدِيدًا. أَخِيرًا، ذَهَبْنَا إِلَى المَلَاهِي فِي المَسَاءِ، وَرَكِبْنَا العَجَلَةَ الكَبِيرَةَ مَعًا.
فِي كُلِّ عِيدٍ نَحْتَفِلُ مَعًا، لٰكِنَّ ذٰلِكَ العِيدَ كَانَ مُخْتَلِفًا، لِأَنَّ جَدَّتِي كَانَتْ مَعَنَا. فِي العِيدِ القَادِمِ سَنُسَافِرُ إِلَى الأُرْدُنِّ لِنَزُورَهَا هُنَاكَ إِنْ شَاءَ اللّٰهُ.`;
const Q3A_FULL = `لَا أَتَذَكَّرُ كُلَّ الأَعْيَادِ الَّتِي احْتَفَلْتُ بِهَا، غَيْرَ أَنَّ عِيدَ الفِطْرِ المَاضِيَ مَحْفُورٌ فِي ذَاكِرَتِي؛ فَفِيهِ عَادَتْ جَدَّتِي إِلَى بَيْتِنَا بَعْدَ غِيَابٍ دَامَ خَمْسَ سَنَوَاتٍ، قَضَتْهَا فِي عَمَّانَ بَعِيدَةً عَنْ أَحْفَادِهَا.
وَقَدْ بَدَأَتْ فَرْحَتُهُ قَبْلَهُ بِأَيَّامٍ؛ فَكُنْتُ أَعُدُّ اللَّيَالِيَ الأَخِيرَةَ مِنْ رَمَضَانَ، وَأَتَعَلَّمُ مِنْ جَدَّتِي وَصْفَةَ كَعْكِهَا الَّتِي وَرِثَتْهَا عَنْ أُمِّهَا، ثُمَّ نُوَزِّعُهُ مَعًا عَلَى جِيرَانِنَا مِنْ كُلِّ الأَدْيَانِ، فَيَرُدُّونَ الأَطْبَاقَ مَلِيئَةً بِحَلَوِيَّاتِهِمْ.
وَفِي صَبَاحِ العِيدِ، بَعْدَ أَنْ صَلَّيْنَا فِي الحَدِيقَةِ وَسَطَ آلَافِ المُصَلِّينَ، امْتَلَأَ بَيْتُنَا بِالأَقَارِبِ وَالضَّحِكَاتِ وَرَائِحَةِ القَهْوَةِ العَرَبِيَّةِ. وَحِينَ أَخْرَجَتْ جَدَّتِي مِنْ حَقِيبَتِهَا قِلَادَةً قَدِيمَةً وَأَهْدَتْنِي إِيَّاهَا قَائِلَةً: "هٰذِهِ كَانَتْ لِي حِينَ كُنْتُ فِي عُمْرِكِ"، لَمْ أَسْتَطِعْ أَنْ أَحْبِسَ دُمُوعِي.
أَدْرَكْتُ يَوْمَهَا أَنَّ العِيدَ لَيْسَ مَلَابِسَ جَدِيدَةً وَلَا هَدَايَا، بَلْ هُوَ لَمَّةُ القُلُوبِ الَّتِي تُبَاعِدُ بَيْنَهَا المَسَافَاتُ طُولَ العَامِ. وَلَوْ خُيِّرْتُ أَنْ أَعِيشَ يَوْمًا وَاحِدًا مِنْ جَدِيدٍ، لَاخْتَرْتُ ذٰلِكَ الصَّبَاحَ دُونَ تَرَدُّدٍ.`;
const Q3B_FULL = `قَبْلَ أَسَابِيعَ مِنْ كُلِّ عِيدٍ، تَمْتَلِئُ المَحَلَّاتُ بِالزِّينَةِ وَالعُرُوضِ، وَتُطَارِدُنَا الإِعْلَانَاتُ عَلَى هَوَاتِفِنَا وَشَاشَاتِ التِّلْفَازِ. فَهَلْ فَقَدَتِ الأَعْيَادُ مَعْنَاهَا الحَقِيقِيَّ وَصَارَتْ مُنَاسَبَاتٍ لِلشِّرَاءِ فَقَطْ؟
لَا شَكَّ أَنَّ الجَانِبَ التِّجَارِيَّ صَارَ أَكْبَرَ مِمَّا كَانَ فِي زَمَنِ أَجْدَادِنَا بِكَثِيرٍ؛ فَكَثِيرٌ مِنَ العَائِلَاتِ تُنْفِقُ أَكْثَرَ مِمَّا تَسْتَطِيعُ، وَبَعْضُ الأَطْفَالِ يَحْكُمُونَ عَلَى العِيدِ بِقِيمَةِ هَدَايَاهُمْ، لَا بِالوَقْتِ الَّذِي قَضَوْهُ مَعَ أَحِبَّائِهِمْ. وَمَعَ ذٰلِكَ، فَإِنَّ جَوْهَرَ الأَعْيَادِ الدِّينِيَّةِ مَا زَالَ حَيًّا: الصَّلَاةُ، وَصِلَةُ الرَّحِمِ، وَمُسَاعَدَةُ المُحْتَاجِينَ وَالفُقَرَاءِ.
وَقَدْ رَأَيْتُ ذٰلِكَ فِي العِيدِ المَاضِي، عِنْدَمَا قَرَّرَتْ أُسْرَتِي أَنْ تَشْتَرِيَ هَدَايَا أَقَلَّ، وَأَنْ تُرْسِلَ الفَرْقَ إِلَى أُسَرٍ لَاجِئَةٍ فِي مَدِينَتِنَا، عَنْ طَرِيقِ جَمْعِيَّةِ المَسْجِدِ. فَلَمْ نَشْعُرْ بِأَنَّنَا خَسِرْنَا شَيْئًا، بَلْ كَانَ ذٰلِكَ أَسْعَدَ عِيدٍ عِشْنَاهُ مُنْذُ سَنَوَاتٍ.
لِذٰلِكَ أَرَى أَنَّ الأَعْيَادَ لَمْ تَفْقِدْ مَعْنَاهَا، وَإِنَّمَا نَحْنُ الَّذِينَ نَنْسَاهُ أَحْيَانًا وَسَطَ الزِّحَامِ. فَإِذَا تَذَكَّرْنَا لِمَاذَا نَحْتَفِلُ، فَسَيَبْقَى العِيدُ يَوْمًا لِلْقُلُوبِ لَا لِلْجُيُوبِ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a form for a school Eid celebration, write an email describing your Eid in sequence, and write an extended piece about an unforgettable celebration or about whether festivals have lost their true meaning.',
  lift: [
    { ar: 'اشْتَرَيْتُ فُسْتَانًا أَزْرَقَ، وَلَبِسْتُهُ صَبَاحَ العِيدِ', en: 'I bought a blue dress and wore it on Eid morning' },
    { ar: 'أَوَّلًا … ثُمَّ … بَعْدَ ذٰلِكَ … أَخِيرًا …', en: 'first … then … after that … finally …' },
    { ar: 'أَهْدَتْنِي إِيَّاهَا خَالَتِي', en: 'my aunt gave it to me' },
  ],
  checkTip: 'Check tense: past (ṣallaynā, zurnā) for last Eid, present (nuṣallī, nazūru) for every year, kunnā + present for childhood; the object pronoun must match the noun (al-fustān → labistuhu, al-kaʿk → wazzaʿnāhu, al-uswira → ahdatnī iyyāhā); four sequencers in order.',
  FORM: {
    title: 'School Eid celebration form', ar: 'اسْتِمَارَةُ احْتِفَالِ المَدْرَسَةِ بِالعِيدِ',
    fields: [
      { core: true, ar: 'الاسْمُ وَالصَّفُّ', en: 'Name and class', model: 'زَيْنَبُ عَلِيٌّ، العَاشِرُ', modelEn: 'Zainab Ali, Year 10' },
      { core: true, ar: 'العِيدُ', en: 'Festival', model: 'عِيدُ الفِطْرِ', modelEn: 'Eid al-Fitr' },
      { core: true, ar: 'أَكْلَةٌ سَتُحْضِرِينَهَا', en: 'A dish you will bring', model: 'المَعْمُولُ', modelEn: 'maamoul' },
      { core: true, ar: 'نَشَاطٌ تُشَارِكِينَ فِيهِ', en: 'An activity you will join', model: 'رَسْمُ الحِنَّاءِ', modelEn: 'henna painting' },
      { core: true, ar: 'المَلَابِسُ', en: 'Clothes', model: 'فُسْتَانٌ تَقْلِيدِيٌّ', modelEn: 'a traditional dress' },
      { core: true, ar: 'التَّهْنِئَةُ بِالعَرَبِيَّةِ', en: 'The greeting in Arabic', model: 'عِيدٌ مُبَارَكٌ', modelEn: 'Eid Mubarak' },
      { ar: 'كَلِمَةٌ تَصِفُ العِيدَ', en: 'A word describing Eid', model: 'فَرْحَةٌ', modelEn: 'joy' },
      { ar: 'جُمْلَةٌ: مَاذَا فَعَلْتِ فِي العِيدِ المَاضِي؟', en: 'ONE sentence: what you did last Eid', model: 'صَلَّيْتُ فِي الحَدِيقَةِ، ثُمَّ زُرْتُ جَدَّتِي وَأَهْدَيْتُهَا وُرُودًا.', modelEn: 'I prayed in the park, then visited my grandmother and gave her flowers.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence in the past, with a sequencer and an object pronoun.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Boxes 3–4 headings use relative-free clauses with feminine verbs (tuḥḍirīnahā) — a boy reads تُحْضِرُهَا / تُشَارِكُ. Box 8: ahdaytuhā (object pronoun).',
  },
  Q2: {
    short: 'an email about how you celebrated Eid', title: 'Question 2: my Eid', ar: 'كَيْفَ احْتَفَلْتُ بِالعِيدِ',
    task: 'Write an email in Arabic to a friend of about 80–90 words. You must include: • how you prepared for Eid • what you did on the day, in order • a present you received or gave and your opinion of the day • your plans for the next Eid, and a question for your friend.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Three sequencing words.', 'Past AND future, with an object pronoun.', 'About 80–90 words.'],
    phrases: [['قَبْلَ العِيدِ اشْتَرَيْتُ … وَلَبِسْتُهُ …', 'before Eid I bought … and wore it …'], ['أَوَّلًا … ثُمَّ … بَعْدَ ذٰلِكَ …', 'first … then … after that …'], ['زُرْنَا … وَأَعْطَوْنِي عِيدِيَّةً', 'we visited … and they gave me Eid money'], ['فِي العِيدِ القَادِمِ سَأَطْبُخُ …', 'next Eid I will …']],
    rubric: [
      ['task', 'اكْتُبِي رِسَالَةً إِلَى صَدِيقَتِكِ عَنِ احْتِفَالِكِ بِالعِيدِ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about how you celebrated Eid (80–90 words).'],
      ['1', 'كَيْفَ اسْتَعْدَدْتِ لِلْعِيدِ؟', 'How you prepared for Eid'],
      ['2', 'مَاذَا فَعَلْتِ يَوْمَ العِيدِ؟ (بِالتَّرْتِيبِ)', 'What you did on the day, in order'],
      ['3', 'مَا الهَدِيَّةُ؟ وَمَا رَأْيُكِ فِي اليَوْمِ؟', 'A present; your opinion of the day'],
      ['4', 'مَاذَا سَتَفْعَلِينَ فِي العِيدِ القَادِمِ؟ وَاسْأَلِي صَدِيقَتَكِ سُؤَالًا.', 'Plans for next Eid; a question'],
    ],
    qwords: 'اسْتَعْدَدْتِ (you prepared — PAST) · بِالتَّرْتِيبِ (in order) · سَتَفْعَلِينَ (you will do — FUTURE) · اسْأَلِي (ask!)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، عِيدٌ مُبَارَكٌ!', 'Hello …, Eid Mubarak!'],
      ['1', 'قَبْلَ العِيدِ اشْتَرَيْتُ ______ ، وَلَبِسْتُ______ .', 'Before Eid I bought …, and wore it.'],
      ['2', 'أَوَّلًا ______ ، ثُمَّ ______ ، بَعْدَ ذٰلِكَ ______ .', 'First …, then …, after that …'],
      ['3', 'أَعْطَانِي ______ . كَانَ اليَوْمُ ______ لِأَنَّ ______ .', '… gave me … The day was … because …'],
      ['4', 'فِي العِيدِ القَادِمِ سَأَ______ .', 'Next Eid I will …'],
      ['end', 'وَأَنْتِ، ______ ؟ مَعَ السَّلَامَةِ.', 'And you, …? Goodbye.'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Reem, how are you? Eid Mubarak! I want to tell you about Eid al-Fitr. Before Eid I bought a beautiful blue dress and wore it on Eid morning. First, we prayed the Eid prayer in the big park. Then we went to my grandmother’s house and ate biscuits there. After that we visited my aunts, and they gave me Eid money. The day was wonderful, because the whole family was together. Next Eid I’ll cook maamoul with my mum. And you, how did you celebrate Eid? Goodbye, Zainab.”',
      find: ['وَلَبِسْتُهُ', 'أَوَّلًا … ثُمَّ', 'بَعْدَ ذٰلِكَ', 'سَأَطْبُخُ المَعْمُولَ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Reem, many happy returns! I’m still living the joy of Eid, so I wanted to share the details with you. On the last night of Ramadan we baked biscuits in grandma’s kitchen until midnight, then handed them out to the neighbours in the morning. After praying Eid in the park with thousands of people, the whole family gathered for breakfast. The best present was a silver bracelet my aunt gave me — I haven’t taken it off since. I got tired from so many visits, but the children’s laughter made me forget it. If your mum allows, I’ll invite you to iftar next Ramadan. Will you accept? With love, Zainab.”',
      find: ['مَا زِلْتُ أَعِيشُ', 'وَزَّعْنَاهُ', 'أَهْدَتْنِي إِيَّاهَا', 'أَنْسَتْنِي التَّعَبَ'],
    },
  },
  Q3: {
    a: { title: 'عِيدٌ لَا أَنْسَاهُ', en: 'A celebration I will never forget', bullets: 'أَيُّ عِيدٍ وَلِمَاذَا كَانَ مُمَيَّزًا · التَّحْضِيرُ · يَوْمُ العِيدِ بِالتَّرْتِيبِ · مَشَاعِرُكَ وَخُطَطُكَ لِلْعِيدِ القَادِمِ', bulletsEn: 'Which celebration and why it was special · the preparations · the day in order · your feelings and plans for the next one' },
    b: { title: 'هَلْ فَقَدَتِ الأَعْيَادُ مَعْنَاهَا الحَقِيقِيَّ؟', en: 'Have festivals lost their true meaning?', bullets: 'المَوْضُوعُ · الجَانِبُ التِّجَارِيُّ وَجَوْهَرُ العِيدِ · مِثَالٌ مِنْ تَجْرِبَتِكَ · رَأْيُكَ', bulletsEn: 'The issue · the commercial side and the heart of the festival · an example from your experience · your opinion' },
    plan: [
      'Which Eid — ajmalu ʿīdin fī ḥayātī kāna …; fī dhālika al-ʿīdi zāratnā …',
      'Preparation — qabla al-ʿīdi ṣumtu …; kuntu usāʿidu …; khabaznā al-kaʿka wa-ʿallamatnī …',
      'The day — awwalan … thumma … baʿda dhālika … akhīran …; aʿṭānī ʿammī …',
      'Feelings + future — fī kulli ʿīdin naḥtafilu, lākinna …; fī al-ʿīdi al-qādimi sa- …; Stretch: laysa … wa-lā … bal, law … la-.',
    ],
    frames: [
      { ar: 'خَبَزْنَا الكَعْكَ، وَوَزَّعْنَاهُ عَلَى الجِيرَانِ.', en: 'past + object: we baked and shared it.' },
      { ar: 'فِي كُلِّ عِيدٍ نَحْتَفِلُ مَعًا.', en: 'present: every Eid we celebrate together.' },
      { ar: 'سَنُسَافِرُ لِنَزُورَهَا هُنَاكَ.', en: 'future: we’ll travel to visit her there.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Best Eid: last year, when grandma visited from Jordan for the first time in five years → I fasted all Ramadan, helped mum with iftar; on the last night we baked biscuits and she taught me her recipe → new dress; first prayer in the park, then breakfast, after that uncles came with Eid money, finally the funfair → different because grandma was with us; next Eid we’ll visit her in Jordan.', find: ['وَعَلَّمَتْنِي وَصْفَتَهَا', 'أَوَّلًا … ثُمَّ', 'أَعْطَانِي عَمِّي', 'لِنَزُورَهَا'], notes: 'Core model: past narrative with object pronouns (ʿallamatnī, aʿṭānī, li-nazūrahā), kuntu + present for Ramadan habits, four sequencers, a present general truth (fī kulli ʿīdin naḥtafilu) and a future plan with li-.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'I don’t remember every Eid I’ve celebrated, but last Eid al-Fitr is engraved in my memory: grandma came back to our home after five years away in Amman, far from her grandchildren → its joy began days before: I counted Ramadan’s last nights, learnt grandma’s biscuit recipe inherited from her mother, and we shared them with neighbours of all faiths, who returned the plates full of their own sweets → after praying among thousands in the park, our house filled with relatives, laughter and the smell of Arabic coffee; when grandma took an old necklace from her bag and gave it to me, saying “this was mine at your age”, I couldn’t hold back tears → I realised Eid is not new clothes or gifts but hearts coming together that distance keeps apart all year; “if I could relive one day, I’d choose that morning without hesitation”.', find: ['مَحْفُورٌ فِي ذَاكِرَتِي', 'الَّتِي وَرِثَتْهَا', 'أَهْدَتْنِي إِيَّاهَا قَائِلَةً', 'لَوْ خُيِّرْتُ … لَاخْتَرْتُ'], notes: 'Full-mark model: a contrast hook (lā atadhakkaru … ghayra anna), ghiyābun dāma, kuntu + three present verbs, a relative clause with an object pronoun (warithathā), baʿda an, a ḥāl (qāʾilatan), lam astaṭiʿ an, laysa … wa-lā … bal and a passive law khuyyirtu … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'have festivals lost meaning?', text: Q3B_FULL, en: 'Weeks before every festival shops fill with decorations and offers, and adverts chase us on our phones and TV screens — have festivals lost their meaning and become shopping occasions? → the commercial side is bigger than in our grandparents’ time: many families spend more than they can, and some children judge a festival by their presents, not the time spent with loved ones; yet the heart of religious festivals lives on: prayer, family ties and helping those in need → last Eid my family chose fewer presents and sent the difference to refugee families in our city through the mosque charity; we lost nothing — it was our happiest Eid in years → festivals haven’t lost their meaning; we sometimes forget it amid the rush; “if we remember why we celebrate, Eid will stay a day for hearts, not wallets”.', find: ['تُطَارِدُنَا الإِعْلَانَاتُ', 'أَكْثَرَ مِمَّا تَسْتَطِيعُ', 'أَسْعَدَ عِيدٍ عِشْنَاهُ', 'لِلْقُلُوبِ لَا لِلْجُيُوبِ'], notes: 'Full-mark model for the Stretch title: a vivid hook, hal … wa-ṣārat, lā shakka anna, akbar mimmā kāna, akthar mimmā tastaṭīʿu, wa-maʿa dhālika fa-inna, a narrated choice with two an-clauses, lam … bal, innamā naḥnu alladhīna and a rhyming close (li-l-qulūb lā li-l-juyūb).' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic, with a past sentence in box 8.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: three sequencers and one object pronoun.' },
    { route: 'develop', text: 'Q3: past for one Eid, present for every year, future for next year.' },
    { route: 'stretch', text: 'Q3: laysa … bal, a concession and a conditional.' },
  ],
};

module.exports = { speak, write };
