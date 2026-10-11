'use strict';
/* Exam-practice data · TC-L11 · Integrated Communication Workshop (Topic C mixed: weather, environment, technology, town; mixed tenses; cohesion; balanced opinion). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'C', n: 11, short: 'Integrated Communication Workshop', arShort: 'وَرْشَةُ التَّوَاصُلِ المُتَكَامِلِ', fileTitle: 'Integrated_Communication_Workshop', title: 'Integrated Communication Workshop', ar: 'وَرْشَةُ التَّوَاصُلِ المُتَكَامِلِ', icon: 'FaComments', grammar: 'mixed tenses in one answer; cohesion (awwalan, thumma, bi-l-iḍāfati ilā, maʿa dhālika, li-dhālika); a balanced opinion (min nāḥiya … wa-min nāḥiya ukhrā); idhā … fa-sa- and law … la-' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms, mixing all of Topic C: weather and seasons, the environment, the digital world and town life. Link ideas (أَوَّلًا · بِالإِضَافَةِ إِلَى ذٰلِكَ · مَعَ ذٰلِكَ · لِذٰلِكَ), move between past, present and future, and give a balanced opinion.',
  words: [
    w(1, 'أَوَّلًا · ثَانِيًا', 'firstly · secondly', [['finally', 'أَخِيرًا'], ['then', 'ثُمَّ · بَعْدَ ذٰلِكَ']], { tag: 'sequence' }),
    w(2, 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'in addition to that', [['also', 'كَمَا أَنَّ …'], ['moreover', 'فَضْلًا عَنْ ذٰلِكَ']], { tag: 'adding' }),
    w(3, 'مَعَ ذٰلِكَ', 'nevertheless', [['however', 'غَيْرَ أَنَّ …'], ['although', 'مَعَ أَنَّ …']], { tag: 'contrast' }),
    w(4, 'لِذٰلِكَ', 'therefore', [['so (result)', 'فَذَهَبْنَا'], ['which leads to', 'مِمَّا يُؤَدِّي إِلَى']], { tag: 'result' }),
    w(5, 'مِنْ نَاحِيَةٍ …', 'on one hand …', [['on the other', 'وَمِنْ نَاحِيَةٍ أُخْرَى …']], { tag: 'balance' }),
    w(6, 'فِي رَأْيِي', 'in my opinion', [['I think that', 'أَعْتَقِدُ أَنَّ'], ['I see that', 'أَرَى أَنَّ']], { tag: 'opinion' }),
    w(7, 'الطَّقْسُ · المُنَاخُ', 'weather · climate', [['it rains (f.)', 'تَسْقُطُ الأَمْطَارُ'], ['comp.', 'أَبْرَدُ · أَحَرُّ']]),
    w(8, 'البِيئَةُ', 'the environment', [['pollution', 'التَّلَوُّثُ'], ['recycling', 'إِعَادَةُ التَّدْوِيرِ']]),
    w(9, 'التِّكْنُولُوجْيَا', 'technology', [['I keep in touch with', 'أَتَوَاصَلُ مَعَ'], ['apps', 'تَطْبِيقَاتٌ']]),
    w(10, 'المَدِينَةُ · الرِّيفُ', 'the city · the countryside', [['there is (m. · f.)', 'يُوجَدُ · تُوجَدُ'], ['services', 'خِدْمَاتٌ']]),
    w(11, 'كُنْتُ + present', 'I used to …', [['e.g.', 'كُنْتُ أَلْعَبُ'], ['she used to', 'كَانَتْ تَلْعَبُ']], { tag: 'past habit' }),
    w(12, 'لَوْ كُنْتُ … لَاخْتَرْتُ …', 'if I were … I would choose …', [['if I were', 'لَوْ كُنْتُ …'], ['I would choose', 'لَاخْتَرْتُ']], { tag: 'hypothetical' }),
  ],
  words1: { eyebrow: 'Language bank · linking words (cohesion)', title: 'Firstly, also, however, so', ar: 'أَدَوَاتُ الرَّبْطِ', notes: 'LANGUAGE BANK (2 min) — linkers turn a list into an answer: أَوَّلًا … ثُمَّ … بِالإِضَافَةِ إِلَى ذٰلِكَ … مَعَ ذٰلِكَ … لِذٰلِكَ. Target: three different linkers in every developed answer.' },
  words2: { eyebrow: 'Language bank · the four Topic C themes', title: 'Weather, environment, tech, town', ar: 'مَوْضُوعَاتُ الوَحْدَةِ', notes: 'LANGUAGE BANK (2 min) — the examiner may jump between themes. Have one ready-made sentence for each: weather (tasquṭu al-amṭār), environment (yajibu an …), tech (atawāṣalu maʿa), town (tūjadu / yūjadu). Then add a time frame.' },
  checkCore: 'answered questions on two different Topic C themes',
  checkDevelop: 'used three linking words and two time frames in one answer',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a hostel reception', title: 'Role play A — Arriving at a youth hostel', ar: 'فِي بَيْتِ الشَّبَابِ', you: 'a young traveller', them: 'the hostel receptionist',
      tasks: [
        { core: true, ex: 'أَهْلًا! هَلْ عِنْدَكَ حَجْزٌ؟', task: 'Say you have a booking and for how many nights.', help: 'نَعَمْ، حَجَزْتُ … لَيَالٍ', model: 'نَعَمْ، حَجَزْتُ سَرِيرًا لِثَلَاثِ لَيَالٍ.', modelEn: 'Yes, I booked a bed for three nights.' },
        { core: true, ex: 'كَيْفَ كَانَ الطَّقْسُ فِي الطَّرِيقِ؟', task: 'Describe the weather (past).', help: 'كَانَ الجَوُّ … وَ…', model: 'كَانَ الجَوُّ بَارِدًا، وَسَقَطَتْ أَمْطَارٌ كَثِيرَةٌ.', modelEn: 'It was cold, and a lot of rain fell.' },
        { core: true, ex: 'مَاذَا تُرِيدُ أَنْ تَزُورَ فِي المَدِينَةِ؟', task: 'Name two places.', help: 'أُرِيدُ أَنْ أَزُورَ … وَ…', model: 'أُرِيدُ أَنْ أَزُورَ المَتْحَفَ وَالسُّوقَ القَدِيمَ.', modelEn: 'I want to visit the museum and the old market.' },
        { core: true, ex: 'عِنْدَنَا إِنْتَرْنِتٌ مَجَّانِيٌّ.', task: 'Ask for the password.', help: 'مَا … مِنْ فَضْلِكَ؟', model: 'مَا كَلِمَةُ السِّرِّ مِنْ فَضْلِكَ؟', modelEn: 'What is the password, please?' },
        { core: true, unexpected: true, ex: 'هَلْ تُعِيدُ التَّدْوِيرَ؟ عِنْدَنَا ثَلَاثُ سَلَّاتٍ.', task: 'Answer the unexpected question.', help: 'نَعَمْ، أُعِيدُ تَدْوِيرَ … فِي البَيْتِ', model: 'نَعَمْ، أُعِيدُ تَدْوِيرَ الوَرَقِ وَالبْلَاسْتِيكِ فِي البَيْتِ دَائِمًا.', modelEn: 'Yes, I always recycle paper and plastic at home.' },
      ],
      girl: 'عِنْدَكِ · تُرِيدِينَ',
      notes: 'Core: four themes in one card — booking (ḥajaztu), weather (kāna + accusative, saqaṭat), town (two places), tech (kalimatu as-sirr), environment (recycling).',
    },
    {
      id: 'B', level: 'Core+', setting: 'a school trip plan', title: 'Role play B — Planning the end-of-year trip', ar: 'رِحْلَةُ نِهَايَةِ السَّنَةِ', you: 'a class representative', them: 'your form tutor',
      tasks: [
        { core: true, ex: 'أَيْنَ تُرِيدُونَ أَنْ تَذْهَبُوا؟', task: 'Suggest a place and a reason.', help: 'نُرِيدُ أَنْ نَذْهَبَ إِلَى … لِأَنَّ …', model: 'نُرِيدُ أَنْ نَذْهَبَ إِلَى الحَدِيقَةِ الوَطَنِيَّةِ، لِأَنَّ الطَّبِيعَةَ هُنَاكَ جَمِيلَةٌ.', modelEn: 'We want to go to the national park, because the nature there is beautiful.' },
        { core: true, ex: 'وَكَيْفَ نَذْهَبُ؟', task: 'Suggest transport and why.', help: 'بِالقِطَارِ، لِأَنَّهُ …', model: 'بِالقِطَارِ، لِأَنَّهُ أَسْرَعُ وَأَنْظَفُ لِلْبِيئَةِ مِنَ الحَافِلَةِ.', modelEn: 'By train, because it is faster and cleaner for the environment than the coach.' },
        { ex: 'لٰكِنْ قَدْ يَكُونُ الجَوُّ مُمْطِرًا.', task: 'ASK about a plan B.', help: 'وَإِذَا أَمْطَرَتْ، هَلْ …؟', model: 'وَإِذَا أَمْطَرَتْ، هَلْ يُمْكِنُ أَنْ نَزُورَ مَرْكَزَ الزُّوَّارِ بَدَلًا مِنَ المَشْيِ؟', modelEn: 'And if it rains, could we visit the visitor centre instead of walking?' },
        { ex: 'فِكْرَةٌ جَيِّدَةٌ. وَالهَوَاتِفُ؟', task: 'Give a balanced suggestion.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، نَحْتَاجُهَا لِلصُّوَرِ وَالخَرَائِطِ، وَمِنْ نَاحِيَةٍ أُخْرَى، يَجِبُ أَنْ نَسْتَمْتِعَ بِالطَّبِيعَةِ.', modelEn: 'On one hand we need them for photos and maps; on the other, we should enjoy nature.' },
        { unexpected: true, ex: 'مَاذَا فَعَلْتُمْ فِي رِحْلَةِ السَّنَةِ المَاضِيَةِ؟', task: 'Answer the unexpected question (past).', help: 'ذَهَبْنَا إِلَى … وَ…', model: 'ذَهَبْنَا إِلَى مَتْحَفِ العُلُومِ فِي لَنْدَنَ، وَتَعَلَّمْنَا كَثِيرًا عَنِ الفَضَاءِ.', modelEn: 'We went to the Science Museum in London and learnt a lot about space.' },
      ],
      girl: '(same words — the tutor may be a woman)',
      notes: 'Core+: nurīdu an + subjunctive, comparatives (asraʿu wa-anẓafu min), the CANDIDATE asks with idhā, a balanced view, the past.',
    },
    {
      id: 'C', level: 'Develop', setting: 'a pen-friend video call', title: 'Role play C — Life in my town, life in yours', ar: 'مُكَالَمَةٌ مَعَ صَدِيقٍ فِي الخَارِجِ', you: 'a student in the UK', them: 'a pen-friend in Morocco',
      tasks: [
        { ex: 'صِفْ لِي مَدِينَتَكَ.', task: 'Describe it with linkers.', help: 'أَوَّلًا … بِالإِضَافَةِ إِلَى ذٰلِكَ …', model: 'أَوَّلًا، مَدِينَتِي كَبِيرَةٌ وَمُزْدَحِمَةٌ؛ بِالإِضَافَةِ إِلَى ذٰلِكَ، تُوجَدُ فِيهَا حَدَائِقُ كَثِيرَةٌ وَمَكْتَبَةٌ حَدِيثَةٌ.', modelEn: 'Firstly, my city is big and busy; in addition, it has many parks and a modern library.' },
        { ex: 'وَكَيْفَ الطَّقْسُ عِنْدَكُمُ الآنَ؟', task: 'Compare with Morocco.', help: 'الجَوُّ هُنَا … أَمَّا عِنْدَكُمْ فَـ…', model: 'الجَوُّ هُنَا بَارِدٌ وَغَائِمٌ، أَمَّا عِنْدَكُمْ فَالشَّمْسُ مُشْرِقَةٌ، فَأَنْتُمْ أَسْعَدُ مِنَّا!', modelEn: 'Here it’s cold and cloudy; with you the sun shines — you’re luckier than us!' },
        { ex: 'كَيْفَ تَتَوَاصَلُ مَعَ أَقَارِبِكَ فِي الخَارِجِ؟', task: 'Explain, then compare with the past.', help: 'أَتَوَاصَلُ مَعَهُمْ … أَمَّا فِي المَاضِي فَكَانَ …', model: 'أَتَوَاصَلُ مَعَهُمْ بِالفِيدْيُو كُلَّ أُسْبُوعٍ، أَمَّا فِي المَاضِي فَكَانَ أَبِي يَكْتُبُ لَهُمْ رَسَائِلَ تَصِلُ بَعْدَ أَسَابِيعَ.', modelEn: 'I video-call them weekly; in the past my dad wrote them letters that arrived weeks later.' },
        { ex: 'هَلْ هُنَاكَ مَشَاكِلُ بِيئِيَّةٌ فِي مَدِينَتِكَ؟', task: 'Give a problem, a cause and a solution.', help: 'نَعَمْ، … بِسَبَبِ … لِذٰلِكَ …', model: 'نَعَمْ، الهَوَاءُ مُلَوَّثٌ بِسَبَبِ زَحْمَةِ السَّيَّارَاتِ، لِذٰلِكَ أَذْهَبُ إِلَى المَدْرَسَةِ بِالدَّرَّاجَةِ.', modelEn: 'Yes, the air is polluted because of traffic, so I cycle to school.' },
        { unexpected: true, ex: 'مَتَى سَتَزُورُنِي فِي مَرَّاكُشَ؟', task: 'Answer the unexpected question (future + condition).', help: 'سَأَزُورُكَ فِي … إِذَا …', model: 'سَأَزُورُكَ فِي الرَّبِيعِ القَادِمِ إِذَا وَجَدْتُ تَذْكِرَةً رَخِيصَةً، لِأَنَّ الجَوَّ سَيَكُونُ مُعْتَدِلًا.', modelEn: 'I’ll visit you next spring if I find a cheap ticket, because the weather will be mild.' },
      ],
      girl: 'صِفِي · مَدِينَتَكِ · أَقَارِبِكِ · سَتَزُورِينَنِي',
      notes: 'Develop: linkers (awwalan, bi-l-iḍāfati ilā dhālika, li-dhālika), tūjadu + non-human pl., ammā … fa- comparisons, kāna + present, bi-sababi, a future with idhā.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a youth council interview', title: 'Role play D — Designing a better town', ar: 'مَدِينَةٌ أَفْضَلُ لِلشَّبَابِ', you: 'a youth-council candidate', them: 'a council member',
      tasks: [
        { ex: 'مَا أَكْبَرُ مُشْكِلَةٍ تُوَاجِهُ الشَّبَابَ فِي مَدِينَتِنَا؟', task: 'Identify a problem and its cause chain.', help: 'أَرَى أَنَّ … بِسَبَبِ … مِمَّا …', model: 'أَرَى أَنَّ أَكْبَرَهَا قِلَّةُ الأَمَاكِنِ الآمِنَةِ لِلِقَاءِ، بِسَبَبِ إِغْلَاقِ المَرَاكِزِ الشَّبَابِيَّةِ، مِمَّا يَدْفَعُ الشَّبَابَ إِلَى الشَّاشَاتِ.', modelEn: 'The biggest is the lack of safe places to meet, because youth centres closed, which pushes young people to screens.' },
        { ex: 'وَمَا اقْتِرَاحُكَ؟', task: 'Propose a project linking environment and technology.', help: 'أَقْتَرِحُ أَنْ … لِكَيْ …', model: 'أَقْتَرِحُ أَنْ يُبْنَى مَرْكَزٌ أَخْضَرُ بِأَلْوَاحٍ شَمْسِيَّةٍ، فِيهِ مُخْتَبَرٌ رَقْمِيٌّ وَحَدِيقَةٌ، لِكَيْ يَتَعَلَّمَ الشَّبَابُ وَيَلْتَقُوا.', modelEn: 'I suggest a green, solar-powered centre with a digital lab and a garden, so young people can learn and meet.' },
        { ex: 'هَلْ لَدَيْكَ خِبْرَةٌ فِي مِثْلِ هٰذِهِ المَشَارِيعِ؟', task: 'Describe a past project with a result.', help: 'نَعَمْ، فِي العَامِ المَاضِي … فَـ…', model: 'نَعَمْ، فِي العَامِ المَاضِي نَظَّمْتُ مَعَ زُمَلَائِي سُوقًا لِلْأَجْهِزَةِ المُسْتَعْمَلَةِ، فَجَمَعْنَا خَمْسَمِئَةِ جُنَيْهٍ لِلْمَدْرَسَةِ.', modelEn: 'Yes, last year I ran a second-hand electronics market with friends, and we raised £500 for the school.' },
        { ex: 'لٰكِنَّ المِيزَانِيَّةَ مَحْدُودَةٌ.', task: 'Concede and counter.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ المِيزَانِيَّةَ مَحْدُودَةٌ، غَيْرَ أَنَّ الأَلْوَاحَ الشَّمْسِيَّةَ سَتُوَفِّرُ تَكَالِيفَ الكَهْرَبَاءِ، وَقَدْ تَدْعَمُنَا الشَّرِكَاتُ المَحَلِّيَّةُ.', modelEn: 'True, but solar panels will save on electricity, and local companies may support us.' },
        { unexpected: true, ex: 'لَوِ انْتُخِبْتَ، مَا أَوَّلُ شَيْءٍ تَفْعَلُهُ؟', task: 'Answer the unexpected question (law + passive … la-).', help: 'لَوِ انْتُخِبْتُ، لَـ…', model: 'لَوِ انْتُخِبْتُ، لَأَجْرَيْتُ اسْتِطْلَاعًا إِلِكْتْرُونِيًّا لِكُلِّ طُلَّابِ المَدِينَةِ، لِأَعْرِفَ مَا يَحْتَاجُونَ إِلَيْهِ حَقًّا.', modelEn: 'If elected, I’d run an online survey of all the town’s students, to find out what they really need.' },
      ],
      girl: 'اقْتِرَاحُكِ · لَدَيْكِ · انْتُخِبْتِ',
      notes: 'Stretch: arā anna + a cause chain (bi-sababi … mimmā), aqtariḥu an + passive (yubnā) + li-kay, a past project with a measurable result, a concession, law + passive … la-.',
      modelFoot: 'Stretch: all four Topic C themes in one card — town, environment, technology and money — with cohesion and range.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'العَالَمُ حَوْلِي', aim: 'one full sentence per question',
      qs: [
        { q: 'كَيْفَ الطَّقْسُ اليَوْمَ؟', en: 'What is the weather like today?', start: 'الجَوُّ اليَوْمَ …', model: 'الجَوُّ اليَوْمَ مُشْمِسٌ وَدَافِئٌ.', modelEn: 'Today it is sunny and warm.' },
        { q: 'مَاذَا يُوجَدُ فِي مَدِينَتِكَ؟', en: 'What is there in your town?', start: 'يُوجَدُ … وَتُوجَدُ …', model: 'يُوجَدُ مَرْكَزٌ رِيَاضِيٌّ، وَتُوجَدُ حَدِيقَةٌ كَبِيرَةٌ.', modelEn: 'There is a sports centre and a big park.' },
        { q: 'كَيْفَ تَحْمِي البِيئَةَ؟', en: 'How do you protect the environment?', start: 'أُعِيدُ … / أُطْفِئُ …', model: 'أُطْفِئُ الأَضْوَاءَ، وَأُعِيدُ تَدْوِيرَ الوَرَقِ.', modelEn: 'I turn off the lights and recycle paper.' },
        { q: 'مَا تَطْبِيقُكَ المُفَضَّلُ؟', en: 'What is your favourite app?', start: 'تَطْبِيقِي المُفَضَّلُ … لِأَنَّ …', model: 'تَطْبِيقِيَ المُفَضَّلُ تَطْبِيقُ المُوسِيقَى، لِأَنَّهُ مُمْتِعٌ.', modelEn: 'My favourite app is a music app, because it is fun.' },
        { q: 'مَا فَصْلُكَ المُفَضَّلُ؟', en: 'What is your favourite season?', start: 'فَصْلِي المُفَضَّلُ … لِأَنَّ …', model: 'فَصْلِيَ المُفَضَّلُ الخَرِيفُ، لِأَنَّ الأَلْوَانَ جَمِيلَةٌ.', modelEn: 'My favourite season is autumn, because the colours are beautiful.' },
      ],
      foot: 'Core: one full sentence for every question — the topic changes each time, so listen for the key word. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a reason (li-anna) = a secure Core answer on any theme.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'أَرْبَعَةُ مَوْضُوعَاتٍ', aim: 'two or three sentences, with linkers and two time frames',
      qs: [
        { q: 'صِفْ رِحْلَةً تَأَثَّرَتْ بِالطَّقْسِ.', en: 'Describe a trip affected by the weather.', start: 'فِي … ذَهَبْنَا إِلَى … لٰكِنْ … لِذٰلِكَ …', model: 'فِي الصَّيْفِ ذَهَبْنَا إِلَى الشَّاطِئِ، لٰكِنْ هَبَّتْ عَاصِفَةٌ قَوِيَّةٌ، لِذٰلِكَ قَضَيْنَا اليَوْمَ فِي مَتْحَفِ البَحْرِ.', modelEn: 'In summer we went to the beach, but a storm blew up, so we spent the day in the maritime museum.' },
        { q: 'كَيْفَ تَغَيَّرَتْ مَدِينَتُكَ؟', en: 'How has your town changed?', start: 'كَانَ هُنَاكَ … أَمَّا الآنَ فَـ…', model: 'كَانَ هُنَاكَ مَصْنَعٌ قَدِيمٌ، أَمَّا الآنَ فَتُوجَدُ مَكَانَهُ حَدِيقَةٌ وَمَكْتَبَةٌ رَقْمِيَّةٌ.', modelEn: 'There was an old factory; now there is a park and a digital library in its place.' },
        { q: 'هَلْ تُسَاعِدُ التِّكْنُولُوجْيَا البِيئَةَ؟', en: 'Does technology help the environment?', start: 'نَعَمْ، فَمَثَلًا … مَعَ ذٰلِكَ …', model: 'نَعَمْ، فَمَثَلًا تُوَفِّرُ الأَلْوَاحُ الشَّمْسِيَّةُ الطَّاقَةَ، وَمَعَ ذٰلِكَ تُسَبِّبُ الأَجْهِزَةُ القَدِيمَةُ نُفَايَاتٍ كَثِيرَةً.', modelEn: 'Yes — solar panels save energy — but old devices create a lot of waste.' },
        { q: 'أَيْنَ تُفَضِّلُ أَنْ تَسْكُنَ: فِي المَدِينَةِ أَمْ فِي الرِّيفِ؟', en: 'Where would you rather live: city or countryside?', start: 'أُفَضِّلُ … لِأَنَّ … بِالإِضَافَةِ إِلَى ذٰلِكَ …', model: 'أُفَضِّلُ المَدِينَةَ، لِأَنَّ الخِدْمَاتِ أَكْثَرُ؛ بِالإِضَافَةِ إِلَى ذٰلِكَ، المُوَاصَلَاتُ أَسْرَعُ.', modelEn: 'The city: more services, and transport is faster too.' },
        { q: 'مَاذَا سَتَفْعَلُ فِي العُطْلَةِ القَادِمَةِ؟', en: 'What will you do next holiday?', start: 'سَأُسَافِرُ إِلَى … وَسَـ…', model: 'سَأُسَافِرُ إِلَى الأُرْدُنِّ، وَسَأَحْجِزُ رِحْلَةً إِلَى البَتْرَاءِ عَلَى الإِنْتَرْنِتِ قَبْلَ السَّفَرِ.', modelEn: 'I’ll travel to Jordan, and book a Petra trip online before I go.' },
      ],
      foot: 'Develop: two or three sentences — at least two linkers and two time frames per answer.',
      modelFoot: 'Linkers + two time frames = a strong Develop answer on any Topic C theme.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'نَظْرَةٌ أَوْسَعُ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'أَيُّهُمَا أَخْطَرُ: تَغَيُّرُ المُنَاخِ أَمْ إِدْمَانُ الشَّاشَاتِ؟', en: 'Which is more dangerous: climate change or screen addiction?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى … لٰكِنِّي أَرَى أَنَّ …', model: 'مِنْ نَاحِيَةٍ، يُؤَثِّرُ الإِدْمَانُ فِي صِحَّتِنَا، وَمِنْ نَاحِيَةٍ أُخْرَى، يُهَدِّدُ تَغَيُّرُ المُنَاخِ الكَوْكَبَ كُلَّهُ؛ لِذٰلِكَ أَرَى أَنَّهُ أَخْطَرُ.', modelEn: 'Addiction affects our health, but climate change threatens the whole planet — so I think it is more dangerous.' },
        { q: 'هَلْ يُمْكِنُ أَنْ تَكُونَ المَدِينَةُ صَدِيقَةً لِلْبِيئَةِ؟', en: 'Can a city be environmentally friendly?', start: 'نَعَمْ، إِذَا … فَـ…', model: 'نَعَمْ، إِذَا زُرِعَتِ الأَشْجَارُ عَلَى الأَسْطُحِ، وَأَصْبَحَتِ المُوَاصَلَاتُ كَهْرَبَائِيَّةً، فَسَتَنْخَفِضُ الحَرَارَةُ وَالتَّلَوُّثُ مَعًا.', modelEn: 'Yes: if trees are planted on rooftops and transport goes electric, heat and pollution will both fall.' },
        { q: 'هَلْ عِشْتَ مَوْقِفًا جَعَلَكَ تُفَكِّرُ فِي البِيئَةِ؟', en: 'Have you experienced something that made you think about the environment?', start: 'نَعَمْ، عِنْدَمَا … فَأَدْرَكْتُ أَنَّ …', model: 'نَعَمْ، عِنْدَمَا فَاضَ النَّهْرُ فِي مَدِينَتِنَا وَأُغْلِقَتِ المَدَارِسُ، فَأَدْرَكْتُ أَنَّ تَغَيُّرَ المُنَاخِ لَيْسَ بَعِيدًا عَنَّا.', modelEn: 'Yes, when our river flooded and schools closed, I realised climate change isn’t far away.' },
        { q: 'هَلِ التَّسَوُّقُ عَلَى الإِنْتَرْنِتِ يَضُرُّ بِالمُدُنِ؟', en: 'Does online shopping harm towns?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهُ مُرِيحٌ، غَيْرَ أَنَّ مَحَلَّاتٍ كَثِيرَةً أُغْلِقَتْ فِي شَارِعِنَا، مِمَّا جَعَلَ وَسَطَ المَدِينَةِ حَزِينًا وَفَارِغًا.', modelEn: 'It’s convenient, but many shops on our street have closed, which has left the centre sad and empty.' },
        { q: 'لَوْ كُنْتَ تَسْتَطِيعُ أَنْ تُغَيِّرَ شَيْئًا وَاحِدًا فِي العَالَمِ، مَاذَا تُغَيِّرُ؟', en: 'If you could change one thing in the world, what would it be?', start: 'لَوْ كُنْتُ أَسْتَطِيعُ، لَـ…', model: 'لَوْ كُنْتُ أَسْتَطِيعُ، لَجَعَلْتُ الطَّاقَةَ النَّظِيفَةَ مَجَّانِيَّةً لِلْجَمِيعِ، لِأَنَّ ذٰلِكَ سَيَحُلُّ مَشَاكِلَ كَثِيرَةً فِي وَقْتٍ وَاحِدٍ.', modelEn: 'If I could, I’d make clean energy free for everyone, because that would solve many problems at once.' },
      ],
      foot: 'Stretch: link themes together — a balanced view, a passive condition, a personal turning point, a concession and law … la-.',
      modelFoot: 'Stretch: balance → judgement, idhā + passive … fa-sa-, adraktu anna, ṣaḥīḥun anna … ghayra anna, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I answered questions on at least two Topic C themes.' },
    { route: 'core', text: 'I gave a reason in every answer (li-anna).' },
    { route: 'develop', text: 'I used three different linking words.' },
    { route: 'develop', text: 'I used two time frames in one answer.' },
    { route: 'stretch', text: 'I linked two themes and used a concession or law … la-.' },
  ],
};
speak.CONV[1].qs[0].start = 'فِي … ذَهَبْنَا إِلَى … لٰكِنْ … لِذٰلِكَ قَضَيْنَا …';
speak.CONV[1].qs[1].start = 'كَانَ هُنَاكَ … أَمَّا الآنَ فَتُوجَدُ …';
speak.CONV[1].qs[4].start = 'سَأُسَافِرُ إِلَى … وَسَأَحْجِزُ …';
speak.CONV[2].qs[1].start = 'نَعَمْ، إِذَا زُرِعَتْ … فَسَتَنْخَفِضُ …';
speak.CONV[2].qs[4].start = 'لَوْ كُنْتُ أَسْتَطِيعُ، لَجَعَلْتُ …';
speak.RP[2].tasks[1].help = 'الجَوُّ هُنَا … أَمَّا عِنْدَكُمْ فَالشَّمْسُ …';
speak.RP[2].tasks[2].help = 'أَتَوَاصَلُ مَعَهُمْ … أَمَّا فِي المَاضِي فَكَانَ …';
speak.RP[3].tasks[2].help = 'نَعَمْ، فِي العَامِ المَاضِي نَظَّمْتُ … فَجَمَعْنَا …';
speak.RP[3].tasks[4].help = 'لَوِ انْتُخِبْتُ، لَأَجْرَيْتُ …';

const Q2_CORE = `مَرْحَبًا يَا يُوسُفُ،
كَيْفَ حَالُكَ؟ وَصَلْتُ أَمْسِ إِلَى إِدِنْبَرَةَ مَعَ صَفِّي. أَوَّلًا، المَدِينَةُ جَمِيلَةٌ جِدًّا؛ فِيهَا قَلْعَةٌ قَدِيمَةٌ عَلَى جَبَلٍ، وَتُوجَدُ مَتَاحِفُ كَثِيرَةٌ. لٰكِنَّ الجَوَّ بَارِدٌ وَمُمْطِرٌ، وَهُوَ أَبْرَدُ مِنْ جَوِّ لَنْدَنَ. أَمْسِ زُرْنَا المَتْحَفَ الوَطَنِيَّ، وَأَخَذْتُ صُوَرًا كَثِيرَةً بِهَاتِفِي. بِالإِضَافَةِ إِلَى ذٰلِكَ، المَدِينَةُ نَظِيفَةٌ، وَفِيهَا سَلَّاتٌ لِإِعَادَةِ التَّدْوِيرِ فِي كُلِّ شَارِعٍ. فِي رَأْيِي، هِيَ مَدِينَةٌ رَائِعَةٌ. غَدًا سَنَصْعَدُ إِلَى القَلْعَةِ إِذَا تَوَقَّفَ المَطَرُ.
إِلَى اللِّقَاءِ،
عَلِيٌّ`;
const Q2_FULL = `عَزِيزِي يُوسُفُ،
تَحِيَّةً مِنْ إِدِنْبَرَةَ! وَصَلْنَا أَمْسِ بِالقِطَارِ، وَهِيَ وَسِيلَةٌ أَسْرَعُ وَأَنْظَفُ لِلْبِيئَةِ مِنَ الطَّائِرَةِ. أَوَّلُ مَا لَفَتَ نَظَرِي أَنَّ المَدِينَةَ مَزِيجٌ مِنَ القَدِيمِ وَالحَدِيثِ؛ فَقَلْعَتُهَا الحَجَرِيَّةُ تُطِلُّ عَلَى شَوَارِعَ مَلِيئَةٍ بِالمَقَاهِي وَمَحَطَّاتِ الدَّرَّاجَاتِ الكَهْرَبَائِيَّةِ. أَمَّا الطَّقْسُ فَمُتَقَلِّبٌ جِدًّا: شَمْسٌ فِي الصَّبَاحِ، ثُمَّ أَمْطَارٌ غَزِيرَةٌ بَعْدَ الظُّهْرِ، لِذٰلِكَ قَضَيْنَا سَاعَتَيْنِ فِي المَتْحَفِ الوَطَنِيِّ. وَمَعَ أَنَّ الجَوَّ أَبْرَدُ مِنْ جَوِّ لَنْدَنَ، فَإِنَّنِي أَحْبَبْتُ هُدُوءَهَا. وَإِذَا تَحَسَّنَ الطَّقْسُ غَدًا، فَسَنَصْعَدُ إِلَى قِمَّةِ "عَرْشِ آرْثَر"، وَسَأُرْسِلُ لَكَ الصُّوَرَ مُبَاشَرَةً عَبْرَ هَاتِفِي.
مَعَ تَحِيَّاتِي،
عَلِيٌّ`;
const Q3A_CORE = `أَسْكُنُ فِي مَدِينَةِ لِيدْز فِي شَمَالِ إِنْجِلْتِرَا. أَوَّلًا، الطَّقْسُ هُنَا بَارِدٌ فِي الشِّتَاءِ، وَتَسْقُطُ الأَمْطَارُ كَثِيرًا، لٰكِنَّ الصَّيْفَ دَافِئٌ وَجَمِيلٌ. فِي مَدِينَتِي تُوجَدُ حَدَائِقُ كَبِيرَةٌ، وَيُوجَدُ مَرْكَزٌ تِجَارِيٌّ حَدِيثٌ، وَمَحَطَّةُ قِطَارٍ مَشْهُورَةٌ.
بِالإِضَافَةِ إِلَى ذٰلِكَ، أَسْتَخْدِمُ التِّكْنُولُوجْيَا كُلَّ يَوْمٍ. أَدْرُسُ عَلَى الإِنْتَرْنِتِ، وَأَتَوَاصَلُ مَعَ جَدَّتِي فِي مِصْرَ بِالفِيدْيُو. أُحِبُّ هٰذَا، لِأَنِّي أَرَاهَا كُلَّ أُسْبُوعٍ. لٰكِنِّي لَا أَسْتَخْدِمُ هَاتِفِي قَبْلَ النَّوْمِ.
فِي السَّنَةِ المَاضِيَةِ شَارَكْتُ مَعَ مَدْرَسَتِي فِي يَوْمٍ لِتَنْظِيفِ الحَدِيقَةِ. كَانَ الجَوُّ بَارِدًا، لٰكِنَّنَا جَمَعْنَا عِشْرِينَ كِيسًا مِنَ النُّفَايَاتِ. بَعْدَ ذٰلِكَ أَصْبَحَتِ الحَدِيقَةُ نَظِيفَةً، وَكُنَّا سُعَدَاءَ جِدًّا، وَعَادَتِ الطُّيُورُ إِلَيْهَا.
فِي رَأْيِي، مَدِينَتِي جَمِيلَةٌ، لٰكِنَّ الهَوَاءَ مُلَوَّثٌ بِسَبَبِ السَّيَّارَاتِ. لِذٰلِكَ سَأَذْهَبُ إِلَى المَدْرَسَةِ بِالدَّرَّاجَةِ، وَسَأَزْرَعُ شَجَرَةً فِي حَدِيقَةِ بَيْتِنَا فِي الرَّبِيعِ القَادِمِ.`;
const Q3A_FULL = `لَوْ سَأَلْتَنِي قَبْلَ سَنَوَاتٍ عَنْ مَدِينَتِي، لَقُلْتُ إِنَّهَا رَمَادِيَّةٌ مُمْطِرَةٌ لَا جَدِيدَ فِيهَا. أَمَّا اليَوْمَ، فَأَرَاهَا مُخْتَلِفَةً تَمَامًا؛ فَقَدْ تَحَوَّلَتِ المَصَانِعُ القَدِيمَةُ إِلَى مَرَاكِزَ ثَقَافِيَّةٍ، وَانْتَشَرَتْ مَمَرَّاتُ الدَّرَّاجَاتِ وَالحَدَائِقُ الصَّغِيرَةُ فِي الأَحْيَاءِ، وَأَصْبَحَ وَسَطُ المَدِينَةِ مَكَانًا يَجْتَمِعُ فِيهِ الشَّبَابُ.
وَمَعَ ذٰلِكَ، مَا زَالَ الطَّقْسُ يَتَحَكَّمُ فِي حَيَاتِنَا؛ فَفِي الشِّتَاءِ المَاضِي فَاضَ النَّهْرُ بَعْدَ أُسْبُوعٍ مِنَ الأَمْطَارِ المُتَوَاصِلَةِ، فَأُغْلِقَتِ الطُّرُقُ، وَانْتَقَلَتْ دُرُوسُنَا إِلَى الإِنْتَرْنِتِ أَيَّامًا. عِنْدَهَا أَدْرَكْتُ كَيْفَ تَرْتَبِطُ البِيئَةُ وَالتِّكْنُولُوجْيَا وَالمَدِينَةُ بِبَعْضِهَا: فَلَوْلَا الحَوَاسِيبُ، لَتَوَقَّفَ تَعَلُّمُنَا تَمَامًا.
بِالإِضَافَةِ إِلَى ذٰلِكَ، تَطَوَّعْتُ بَعْدَ الفَيَضَانِ مَعَ جِيرَانِي لِتَنْظِيفِ ضِفَّةِ النَّهْرِ، فَتَعَرَّفْتُ إِلَى أَشْخَاصٍ مِنْ حَيِّي لَمْ أُكَلِّمْهُمْ قَطُّ مِنْ قَبْلُ، وَأَنْشَأْنَا مَعًا مَجْمُوعَةً عَلَى الإِنْتَرْنِتِ لِتَنْظِيمِ حَمَلَاتٍ أُخْرَى.
صَحِيحٌ أَنَّ مَدِينَتِي لَيْسَتْ مِثَالِيَّةً، غَيْرَ أَنَّهَا تَتَعَلَّمُ مِنْ أَخْطَائِهَا. وَإِذَا اسْتَمَرَّتْ فِي زِرَاعَةِ الأَشْجَارِ وَتَشْجِيعِ المُوَاصَلَاتِ النَّظِيفَةِ، فَسَتُصْبِحُ مِنْ أَفْضَلِ المُدُنِ لِلشَّبَابِ خِلَالَ عَشْرِ سَنَوَاتٍ.`;
const Q3B_FULL = `يَعِيشُ جِيلُنَا فِي عَالَمٍ يَتَغَيَّرُ بِسُرْعَةٍ لَمْ يَعْرِفْهَا أَحَدٌ مِنْ قَبْلُ؛ فَالمُنَاخُ يَزْدَادُ حَرَارَةً، وَالمُدُنُ تَكْبُرُ، وَالشَّاشَاتُ تَدْخُلُ كُلَّ لَحْظَةٍ مِنْ حَيَاتِنَا. فَهَلْ نَحْنُ ضَحَايَا هٰذِهِ التَّغَيُّرَاتِ، أَمْ قَادِرُونَ عَلَى تَوْجِيهِهَا؟
مِنْ نَاحِيَةٍ، وَرِثْنَا مَشَاكِلَ لَمْ نَصْنَعْهَا: هَوَاءً مُلَوَّثًا، وَبِحَارًا مَمْلُوءَةً بِالبْلَاسْتِيكِ، وَعَادَاتٍ اسْتِهْلَاكِيَّةً تُرْهِقُ الكَوْكَبَ. وَمِنْ نَاحِيَةٍ أُخْرَى، نَمْلِكُ أَدَوَاتٍ لَمْ تَكُنْ عِنْدَ أَجْدَادِنَا؛ فَبِضَغْطَةِ زِرٍّ نَسْتَطِيعُ أَنْ نُنَظِّمَ حَمْلَةً، أَوْ نُوَقِّعَ عَرِيضَةً، أَوْ نَتَعَلَّمَ مِنْ تَجَارِبِ شَبَابٍ فِي قَارَّاتٍ أُخْرَى.
وَقَدْ رَأَيْتُ قُوَّةَ هٰذِهِ الأَدَوَاتِ بِنَفْسِي؛ فَفِي العَامِ المَاضِي أَطْلَقَ طُلَّابُ مَدْرَسَتِي عَرِيضَةً إِلِكْتْرُونِيَّةً لِإِنْشَاءِ مَمَرٍّ آمِنٍ لِلدَّرَّاجَاتِ، فَجَمَعْنَا ثَلَاثَةَ آلَافِ تَوْقِيعٍ فِي أُسْبُوعَيْنِ، وَوَافَقَتِ البَلَدِيَّةُ عَلَى المَشْرُوعِ، وَبَدَأَ العَمَلُ فِيهِ هٰذَا الصَّيْفَ.
صَحِيحٌ أَنَّ التَّحَدِّيَاتِ كَبِيرَةٌ، غَيْرَ أَنَّ اليَأْسَ لَيْسَ خِيَارًا، وَالمُسْتَقْبَلُ يُصْنَعُ بِأَيْدِينَا نَحْنُ. وَلَوْ جَمَعْنَا بَيْنَ وَعْيِنَا البِيئِيِّ وَمَهَارَاتِنَا الرَّقْمِيَّةِ، لَصَنَعْنَا مُدُنًا أَنْظَفَ وَمُسْتَقْبَلًا أَعْدَلَ لِلْجَمِيعِ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice mixing all of Topic C: fill in a youth-exchange form, write an email from a city trip (weather, town, technology, environment), and write a cohesive extended piece about your town or about your generation and the changing world.',
  lift: [
    { ar: 'أَوَّلًا … بِالإِضَافَةِ إِلَى ذٰلِكَ … لِذٰلِكَ …', en: 'firstly … in addition … therefore …' },
    { ar: 'وَمَعَ أَنَّ الجَوَّ أَبْرَدُ، فَإِنَّنِي أَحْبَبْتُ …', en: 'and although the weather is colder, I loved …' },
    { ar: 'لَوْلَا الحَوَاسِيبُ، لَتَوَقَّفَ تَعَلُّمُنَا', en: 'were it not for computers, our learning would have stopped' },
  ],
  checkTip: 'Check cohesion: at least four different linkers; one paragraph per idea; tenses that match the time words (amsi → past, ghadan → sa-); every theme sentence still agrees (tūjadu matāḥif, al-jawwu abradu, al-hawāʾu mulawwath).',
  FORM: {
    title: 'Youth-exchange application form', ar: 'اسْتِمَارَةُ بَرْنَامَجِ تَبَادُلِ الشَّبَابِ',
    fields: [
      { core: true, ar: 'الاسْمُ وَالعُمْرُ', en: 'Name and age', model: 'عَلِيٌّ حَسَنٌ، خَمْسَ عَشْرَةَ سَنَةً', modelEn: 'Ali Hassan, fifteen' },
      { core: true, ar: 'المَدِينَةُ', en: 'Your town', model: 'لِيدْز', modelEn: 'Leeds' },
      { core: true, ar: 'الطَّقْسُ فِي مَدِينَتِكَ', en: 'Weather in your town', model: 'بَارِدٌ وَمُمْطِرٌ', modelEn: 'cold and rainy' },
      { core: true, ar: 'مَكَانٌ مَشْهُورٌ فِي مَدِينَتِكَ', en: 'A famous place in your town', model: 'السُّوقُ القَدِيمُ', modelEn: 'the old market' },
      { core: true, ar: 'التَّطْبِيقُ الَّذِي تَسْتَخْدِمُهُ أَكْثَرَ', en: 'The app you use most', model: 'تَطْبِيقُ الخَرَائِطِ', modelEn: 'a maps app' },
      { core: true, ar: 'نَشَاطٌ بِيئِيٌّ تُمَارِسُهُ', en: 'An environmental activity you do', model: 'إِعَادَةُ التَّدْوِيرِ', modelEn: 'recycling' },
      { ar: 'البَلَدُ الَّذِي تُرِيدُ زِيَارَتَهُ', en: 'The country you want to visit', model: 'المَغْرِبُ', modelEn: 'Morocco' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُرِيدُ المُشَارَكَةَ؟', en: 'ONE sentence: why you want to take part', model: 'أُرِيدُ أَنْ أُشَارِكَ لِكَيْ أَتَعَرَّفَ عَلَى ثَقَافَةٍ جَدِيدَةٍ، وَأُقَارِنَ بَيْنَ حَيَاةِ الشَّبَابِ هُنَا وَهُنَاكَ.', modelEn: 'I want to take part to discover a new culture and compare young people’s lives here and there.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with li-kay and two subjunctive verbs.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. The boxes cover all four Topic C themes: weather (3), town (4), tech (5), environment (6). Box 8: li-kay ataʿarrafa … wa-uqārina.',
  },
  Q2: {
    short: 'an email from a city trip', title: 'Question 2: postcard from a city', ar: 'رِسَالَةٌ مِنْ مَدِينَةٍ جَدِيدَةٍ',
    task: 'You are on a school trip to a city. Write an email in Arabic to a friend of about 80–90 words. You must include: • what the city is like (buildings, places) • the weather and how it affected your plans • something you did yesterday (use technology or the environment in your answer) • your opinion and your plans for tomorrow.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'At least three linking words.', 'A past AND a future sentence.', 'About 80–90 words.'],
    phrases: [['أَوَّلًا، المَدِينَةُ … فِيهَا … وَتُوجَدُ …', 'firstly, the city is … it has … and there are …'], ['لٰكِنَّ الجَوَّ … لِذٰلِكَ …', 'but the weather is … so …'], ['أَمْسِ زُرْنَا … وَأَخَذْتُ صُوَرًا بِهَاتِفِي', 'yesterday we visited … and I took photos on my phone'], ['غَدًا سَنَصْعَدُ … إِذَا …', 'tomorrow we will climb … if …']],
    rubric: [
      ['task', 'أَنْتَ فِي رِحْلَةٍ مَدْرَسِيَّةٍ إِلَى مَدِينَةٍ. اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ (٨٠–٩٠ كَلِمَةً).', 'You are on a school city trip: write to your friend (80–90 words).'],
      ['1', 'صِفِ المَدِينَةَ: المَبَانِي وَالأَمَاكِنَ.', 'Describe the city: buildings and places'],
      ['2', 'كَيْفَ الطَّقْسُ؟ وَكَيْفَ أَثَّرَ فِي خِطَطِكُمْ؟', 'The weather and how it affected your plans'],
      ['3', 'مَاذَا فَعَلْتَ أَمْسِ؟', 'What you did yesterday'],
      ['4', 'مَا رَأْيُكَ؟ وَمَاذَا سَتَفْعَلُ غَدًا؟', 'Your opinion and tomorrow’s plans'],
    ],
    qwords: 'صِفْ (describe!) · كَيْفَ (how) · أَثَّرَ (affected — PAST) · مَاذَا فَعَلْتَ (what did you do — PAST) · سَتَفْعَلُ (will do — FUTURE)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', 'Hello …, how are you?'],
      ['1', 'وَصَلْتُ أَمْسِ إِلَى ______ . أَوَّلًا، المَدِينَةُ ______ ؛ فِيهَا ______ .', 'I arrived in … yesterday. Firstly, the city is …; it has …'],
      ['2', 'لٰكِنَّ الجَوَّ ______ ، وَهُوَ أَ______ مِنْ جَوِّ ______ .', 'But the weather is …, …er than in …'],
      ['3', 'أَمْسِ زُرْنَا ______ ، وَ______ بِهَاتِفِي.', 'Yesterday we visited …, and I … on my phone.'],
      ['4', 'فِي رَأْيِي ______ . غَدًا سَنَ______ إِذَا ______ .', 'In my opinion … Tomorrow we will … if …'],
      ['end', 'إِلَى اللِّقَاءِ، ______', 'See you, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Yusuf, how are you? I arrived in Edinburgh yesterday with my class. Firstly, the city is very beautiful: there’s an old castle on a hill and lots of museums. But the weather is cold and rainy — colder than London. Yesterday we visited the National Museum and I took lots of photos on my phone. In addition, the city is clean, with recycling bins in every street. In my opinion it’s a wonderful city. Tomorrow we’ll climb up to the castle if the rain stops. See you, Ali.”',
      find: ['أَوَّلًا', 'أَبْرَدُ مِنْ جَوِّ لَنْدَنَ', 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'إِذَا تَوَقَّفَ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Yusuf, greetings from Edinburgh! We arrived yesterday by train — faster and cleaner than flying. The first thing I noticed is that the city mixes old and new: its stone castle overlooks streets full of cafés and e-bike stations. As for the weather, it is very changeable: sun in the morning, then heavy rain after midday, so we spent two hours in the National Museum. Although it is colder than London, I loved its calm. If the weather improves tomorrow, we’ll climb Arthur’s Seat, and I’ll send you the photos straight away from my phone. Best wishes, Ali.”',
      find: ['أَوَّلُ مَا لَفَتَ نَظَرِي', 'أَمَّا الطَّقْسُ فَمُتَقَلِّبٌ', 'مَعَ أَنَّ … فَإِنَّنِي', 'إِذَا تَحَسَّنَ … فَسَنَصْعَدُ'],
    },
  },
  Q3: {
    a: { title: 'مَدِينَتِي: الطَّقْسُ وَالبِيئَةُ وَالحَيَاةُ الرَّقْمِيَّةُ', en: 'My town: weather, environment and digital life', bullets: 'مَدِينَتُكَ وَطَقْسُهَا · التِّكْنُولُوجْيَا فِي حَيَاتِكَ · حَدَثٌ بِيئِيٌّ عِشْتَهُ · رَأْيُكَ وَخِطَطُكَ', bulletsEn: 'Your town and its weather · technology in your life · an environmental event you experienced · your opinion and plans' },
    b: { title: 'جِيلُنَا وَالعَالَمُ المُتَغَيِّرُ', en: 'Our generation and the changing world', bullets: 'التَّغَيُّرَاتُ حَوْلَنَا · التَّحَدِّيَاتُ وَالفُرَصُ · مِثَالٌ مِنْ تَجْرِبَتِكَ · رَأْيُكَ', bulletsEn: 'The changes around us · challenges and opportunities · an example from your experience · your opinion' },
    plan: [
      'Town + weather — awwalan, tūjadu …, tasquṭu al-amṭār …; present tense.',
      'Technology — bi-l-iḍāfati ilā dhālika, adrusu / atawāṣalu maʿa …; a reason.',
      'Past event — shāraktu, jamaʿnā; kāna al-jawwu …, baʿda dhālika aṣbaḥat …',
      'Opinion + future — lākinna … bi-sababi …, li-dhālika sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, idhā … fa-sa-.',
    ],
    frames: [
      { ar: 'أَوَّلًا، تَسْقُطُ الأَمْطَارُ كَثِيرًا، لٰكِنَّ الصَّيْفَ دَافِئٌ.', en: 'present: firstly, it rains a lot, but summer is warm.' },
      { ar: 'كَانَ الجَوُّ بَارِدًا، لٰكِنَّنَا جَمَعْنَا عِشْرِينَ كِيسًا.', en: 'past: it was cold, but we collected twenty bags.' },
      { ar: 'لِذٰلِكَ سَأَذْهَبُ إِلَى المَدْرَسَةِ بِالدَّرَّاجَةِ.', en: 'future: so I will cycle to school.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'I live in Leeds: firstly, winters are cold and rainy but summer is warm; there are big parks, a modern shopping centre and a famous station → in addition, I use technology daily: I study online and video-call my grandmother in Egypt every week, but I don’t use my phone before bed → last year I joined a school park clean-up: it was cold but we collected twenty bags, and afterwards the park was clean and the birds came back → my town is nice but the air is polluted by cars, so I’ll cycle to school and plant a tree in our garden next spring.', find: ['أَوَّلًا', 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'كَانَ الجَوُّ بَارِدًا', 'لِذٰلِكَ سَأَذْهَبُ'], notes: 'Core model: all four Topic C themes, one per paragraph, joined by awwalan, bi-l-iḍāfati ilā dhālika, baʿda dhālika and li-dhālika, in three time frames.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Years ago I’d have called my town grey, rainy and dull; today it is completely different: old factories have become cultural centres, and cycle lanes and small parks have spread through the neighbourhoods, and the centre has become a place where young people gather → yet the weather still rules our lives: last winter the river flooded after a week of rain, roads closed and lessons moved online for days; I realised how environment, technology and town are linked — without computers our learning would have stopped → in addition, after the flood I volunteered with neighbours to clean the riverbank and met people from my area I had never spoken to, and together we set up an online group to organise more campaigns → my town isn’t perfect, but it learns from its mistakes; “if it keeps planting trees and encouraging clean transport, it will be one of the best towns for young people within ten years”.', find: ['لَوْ سَأَلْتَنِي … لَقُلْتُ', 'مَعَ ذٰلِكَ، مَا زَالَ', 'لَوْلَا الحَوَاسِيبُ، لَتَوَقَّفَ', 'إِذَا اسْتَمَرَّتْ … فَسَتُصْبِحُ'], notes: 'Full-mark model: an opening law … la-, ammā … fa-qad, wa-maʿa dhālika, a passive in a narrative (ughliqat), lawlā … la-, bi-l-iḍāfati ilā dhālika, lam … qaṭṭu, a concession and idhā … fa-sa- — four themes in one cohesive piece.' },
      { which: 'ب', level: 'Full', subtitle: 'a changing world', text: Q3B_FULL, en: 'Our generation lives in a world changing faster than ever: the climate is warming, cities growing and screens entering every moment — are we victims of these changes or able to steer them? → on one hand, we inherited problems we didn’t make: polluted air, seas full of plastic, consumer habits exhausting the planet; on the other, we have tools our grandparents lacked — at the click of a button we can organise a campaign, sign a petition or learn from young people on other continents → I saw this myself: last year students at my school launched an online petition for a safe cycle lane; we gathered 3,000 signatures in two weeks and the council approved it, with work starting this summer → the challenges are big, but despair is not an option — the future is made by our own hands; “if we combined our environmental awareness with our digital skills, we would build cleaner cities and a fairer future for all”.', find: ['لَمْ يَعْرِفْهَا أَحَدٌ', 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى', 'فَجَمَعْنَا ثَلَاثَةَ آلَافِ', 'لَوْ جَمَعْنَا … لَصَنَعْنَا'], notes: 'Full-mark model for the Stretch title: a triple present-tense hook, a rhetorical question, a balanced view with lists, a past example with numbers (thalāthata ālāfi tawqīʿin), a concession and law … la-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic, across all four themes.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: three linking words and a comparison.' },
    { route: 'develop', text: 'Q3: four paragraphs, one theme each, in three time frames.' },
    { route: 'stretch', text: 'Q3: four or more linkers, a concession and a conditional.' },
  ],
};

module.exports = { speak, write };
