'use strict';
/* Exam-practice data · TC-L07 · Documents, Texts and Digital Information (booking in all tenses; form imperatives; passive; relative pronouns). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'C', n: 7, short: 'Documents and Digital Information', arShort: 'الوَثَائِقُ وَالمَعْلُومَاتُ', fileTitle: 'Documents_Texts_Digital_Information', title: 'Documents, Texts and Digital Information', ar: 'الوَثَائِقُ وَالنُّصُوصُ وَالمَعْلُومَاتُ الرَّقْمِيَّةُ', icon: 'FaFileLines', grammar: 'booking in all tenses (aḥjizu · ḥajaztu · sa-aḥjizu · uqīmu fī); form imperatives (aḥḍir, sajjil, imlaʾ); the passive (yursalu, tuqbalu); relative pronouns (alladhī · allatī · alladhīna)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: book hotels, tickets and courses, ask for and give personal details, understand instructions on forms and websites (أَحْضِرْ · سَجِّلْ · امْلَأْ) and talk about bookings in the past, present and future.',
  words: [
    w(1, 'أَحْجِزُ', 'I book', [['past', 'حَجَزْتُ'], ['future', 'سَأَحْجِزُ'], ['a booking', 'حَجْزٌ · حُجُوزَاتٌ']], { tag: 'all tenses' }),
    w(2, 'أُقِيمُ فِي …', 'I stay in …', [['past', 'أَقَمْتُ'], ['future', 'سَأُقِيمُ'], ['a stay', 'إِقَامَةٌ']], { tag: 'verb + fī' }),
    w(3, 'تَذْكِرَةٌ', 'a ticket', [['pl.', 'تَذَاكِرُ'], ['return', 'ذَهَابٌ وَإِيَابٌ']]),
    w(4, 'جَوَازُ السَّفَرِ', 'a passport', [['pl.', 'جَوَازَاتُ السَّفَرِ'], ['an ID card', 'بِطَاقَةُ الهُوِيَّةِ']]),
    w(5, 'اسْتِمَارَةٌ', 'a form', [['pl.', 'اسْتِمَارَاتٌ'], ['fill in! (m. · f.)', 'امْلَأْ · امْلَئِي']]),
    w(6, 'سَجِّلْ', 'register! (m.)', [['f.', 'سَجِّلِي'], ['pl.', 'سَجِّلُوا'], ['registration', 'التَّسْجِيلُ']], { tag: 'imperative' }),
    w(7, 'أَحْضِرْ', 'bring! (m.)', [['f.', 'أَحْضِرِي'], ['pl.', 'أَحْضِرُوا']], { tag: 'imperative' }),
    w(8, 'البَرِيدُ الإِلِكْتْرُونِيُّ', 'email', [['an email message', 'رِسَالَةٌ إِلِكْتْرُونِيَّةٌ'], ['the address', 'العُنْوَانُ']]),
    w(9, 'رَقْمُ الهَاتِفِ', 'phone number', [['date of birth', 'تَارِيخُ المِيلَادِ'], ['nationality', 'الجِنْسِيَّةُ']]),
    w(10, 'يُرْسَلُ · تُرْسَلُ', 'is sent (m. · f.)', [['active', 'يُرْسِلُ'], ['is accepted (f.)', 'تُقْبَلُ']], { tag: 'passive' }),
    w(11, 'مُؤَكَّدٌ', 'confirmed', [['f.', 'مُؤَكَّدَةٌ'], ['confirmation', 'تَأْكِيدٌ']]),
    w(12, 'الَّذِي · الَّتِي · الَّذِينَ', 'who / which (m. · f. · pl.)', [['the room which I booked', 'الغُرْفَةُ الَّتِي حَجَزْتُهَا']], { tag: 'relatives' }),
  ],
  words1: { eyebrow: 'Language bank · booking in all tenses', title: 'Book, stay, ticket', ar: 'الحَجْزُ وَالإِقَامَةُ', notes: 'LANGUAGE BANK (2 min) — the same verb across three tenses: أَحْجِزُ (now) · حَجَزْتُ (past) · سَأَحْجِزُ (future). أُقِيمُ فِي فُنْدُقٍ · أَقَمْتُ فِي … · سَأُقِيمُ فِي …' },
  words2: { eyebrow: 'Language bank · forms, instructions and the passive', title: 'Fill in, register, bring', ar: 'التَّعْلِيمَاتُ', notes: 'LANGUAGE BANK (2 min) — instructions on forms are imperatives: امْلَأْ · سَجِّلْ · أَحْضِرْ · اكْتُبْ. Passive: تُرْسَلُ التَّذَاكِرُ بِالبَرِيدِ الإِلِكْتْرُونِيِّ (the tickets are sent by email).' },
  checkCore: 'gave personal details clearly and booked something',
  checkDevelop: 'used booking verbs in two tenses and a relative pronoun',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a hotel reception', title: 'Role play A — Checking in at a hotel', ar: 'فِي اسْتِقْبَالِ الفُنْدُقِ', you: 'a guest', them: 'the receptionist',
      tasks: [
        { core: true, ex: 'مَسَاءَ الخَيْرِ! كَيْفَ أُسَاعِدُكَ؟', task: 'Say you have a booking.', help: 'عِنْدِي حَجْزٌ بِاسْمِ …', model: 'عِنْدِي حَجْزٌ بِاسْمِ يُوسُفَ أَحْمَدَ.', modelEn: 'I have a booking in the name of Yusuf Ahmed.' },
        { core: true, ex: 'كَمْ لَيْلَةً سَتُقِيمُ عِنْدَنَا؟', task: 'Say how many nights.', help: 'سَأُقِيمُ … لَيَالٍ', model: 'سَأُقِيمُ ثَلَاثَ لَيَالٍ.', modelEn: 'I will stay three nights.' },
        { core: true, ex: 'جَوَازَ السَّفَرِ مِنْ فَضْلِكَ.', task: 'Hand it over politely.', help: 'تَفَضَّلْ، هٰذَا …', model: 'تَفَضَّلْ، هٰذَا جَوَازُ سَفَرِي.', modelEn: 'Here you are, this is my passport.' },
        { core: true, ex: 'غُرْفَتُكَ فِي الطَّابِقِ الرَّابِعِ.', task: 'Ask about breakfast.', help: 'مَتَى …؟', model: 'مَتَى الفُطُورُ مِنْ فَضْلِكَ؟', modelEn: 'When is breakfast, please?' },
        { core: true, unexpected: true, ex: 'مَا رَقْمُ هَاتِفِكَ؟', task: 'Answer the unexpected question.', help: 'رَقْمُ هَاتِفِي …', model: 'رَقْمُ هَاتِفِي صِفْرٌ سَبْعَةٌ سَبْعَةٌ، ثَلَاثَةٌ أَرْبَعَةٌ خَمْسَةٌ.', modelEn: 'My number is 077 345 …' },
      ],
      girl: 'أُسَاعِدُكِ · سَتُقِيمِينَ · غُرْفَتُكِ · هَاتِفِكِ',
      notes: 'Core: ḥajzun bi-smi …, sa-uqīmu, thalātha layālin (3–10 + plural), tafaḍḍal / tafaḍḍalī, digits read one by one.',
    },
    {
      id: 'B', level: 'Core+', setting: 'a phone booking', title: 'Role play B — Booking train tickets by phone', ar: 'حَجْزُ تَذَاكِرِ القِطَارِ', you: 'a traveller', them: 'a ticket-office employee',
      tasks: [
        { core: true, ex: 'أَهْلًا، إِلَى أَيْنَ تُرِيدُ أَنْ تُسَافِرَ؟', task: 'Say where and when.', help: 'أُرِيدُ أَنْ أُسَافِرَ إِلَى … يَوْمَ …', model: 'أُرِيدُ أَنْ أُسَافِرَ إِلَى الإِسْكَنْدَرِيَّةِ يَوْمَ الخَمِيسِ.', modelEn: 'I want to travel to Alexandria on Thursday.' },
        { core: true, ex: 'ذَهَابٌ فَقَطْ؟', task: 'Say return and how many tickets.', help: 'لَا، ذَهَابٌ وَإِيَابٌ، … تَذَاكِرَ', model: 'لَا، ذَهَابٌ وَإِيَابٌ، وَأُرِيدُ أَرْبَعَ تَذَاكِرَ لِأُسْرَتِي.', modelEn: 'No, return, and I want four tickets for my family.' },
        { ex: 'هُنَاكَ قِطَارٌ فِي السَّاعَةِ الثَّامِنَةِ، وَقِطَارٌ فِي الظُّهْرِ.', task: 'ASK about the difference.', help: 'مَا الفَرْقُ …؟', model: 'مَا الفَرْقُ بَيْنَهُمَا فِي السِّعْرِ وَالمُدَّةِ؟', modelEn: 'What’s the difference between them in price and journey time?' },
        { ex: 'قِطَارُ الثَّامِنَةِ أَسْرَعُ، لٰكِنَّهُ أَغْلَى.', task: 'Choose and give a reason.', help: 'سَأَحْجِزُ … لِأَنَّ …', model: 'سَأَحْجِزُ قِطَارَ الظُّهْرِ، لِأَنَّهُ أَرْخَصُ، وَلَسْنَا مُسْتَعْجِلِينَ.', modelEn: 'I’ll book the midday train, because it is cheaper and we’re not in a hurry.' },
        { unexpected: true, ex: 'كَيْفَ تُرِيدُ أَنْ تَسْتَلِمَ التَّذَاكِرَ؟', task: 'Answer the unexpected question.', help: 'أَرْجُو أَنْ تُرْسَلَ …', model: 'أَرْجُو أَنْ تُرْسَلَ التَّذَاكِرُ إِلَى بَرِيدِي الإِلِكْتْرُونِيِّ.', modelEn: 'Please send the tickets to my email (lit. I hope the tickets are sent …).' },
      ],
      girl: 'تُرِيدِينَ · تُسَافِرِي · تَسْتَلِمِي',
      notes: 'Core+: arbaʿa tadhākira (diptote), the CANDIDATE asks (mā al-farq …?), sa-aḥjizu + a comparative reason, a passive subjunctive (an turshala).',
    },
    {
      id: 'C', level: 'Develop', setting: 'a booking problem', title: 'Role play C — There is a problem with my booking', ar: 'مُشْكِلَةٌ فِي الحَجْزِ', you: 'a hotel guest', them: 'the hotel manager',
      tasks: [
        { ex: 'تَفَضَّلْ، مَا المُشْكِلَةُ؟', task: 'Explain what you booked (past) and the problem.', help: 'حَجَزْتُ … لٰكِنَّ …', model: 'حَجَزْتُ غُرْفَةً مُطِلَّةً عَلَى البَحْرِ، لٰكِنَّ الغُرْفَةَ الَّتِي أَعْطَيْتُمُونِي إِيَّاهَا تُطِلُّ عَلَى المَوْقِفِ.', modelEn: 'I booked a sea-view room, but the room you gave me overlooks the car park.' },
        { ex: 'هَلْ عِنْدَكَ تَأْكِيدُ الحَجْزِ؟', task: 'Say how and when you received it.', help: 'نَعَمْ، أُرْسِلَ إِلَيَّ … قَبْلَ …', model: 'نَعَمْ، أُرْسِلَ إِلَيَّ التَّأْكِيدُ بِالبَرِيدِ الإِلِكْتْرُونِيِّ قَبْلَ أُسْبُوعَيْنِ، وَهُوَ عَلَى هَاتِفِي.', modelEn: 'Yes, the confirmation was emailed to me two weeks ago; it’s on my phone.' },
        { ex: 'أَعْتَذِرُ جِدًّا. الفُنْدُقُ مُمْتَلِئٌ اللَّيْلَةَ.', task: 'Propose a solution.', help: 'إِذَنْ هَلْ يُمْكِنُ أَنْ … ؟', model: 'إِذَنْ هَلْ يُمْكِنُ أَنْ أَنْتَقِلَ إِلَى الغُرْفَةِ الصَّحِيحَةِ غَدًا صَبَاحًا؟', modelEn: 'Then could I move to the right room tomorrow morning?' },
        { ex: 'طَبْعًا، وَسَنُقَدِّمُ لَكَ عَشَاءً مَجَّانِيًّا.', task: 'Accept and add a request.', help: 'شُكْرًا … وَأَرْجُو أَنْ …', model: 'شُكْرًا جَزِيلًا، وَأَرْجُو أَنْ تُنْقَلَ حَقَائِبِي إِلَى الغُرْفَةِ الجَدِيدَةِ.', modelEn: 'Thank you very much, and please could my bags be moved to the new room.' },
        { unexpected: true, ex: 'هَلْ سَتَحْجِزُ عِنْدَنَا مَرَّةً أُخْرَى؟', task: 'Answer the unexpected question (future).', help: 'نَعَمْ / رُبَّمَا، سَأَحْجِزُ … إِذَا …', model: 'رُبَّمَا، سَأَحْجِزُ عِنْدَكُمْ مَرَّةً أُخْرَى إِذَا كَانَتِ الخِدْمَةُ مُمْتَازَةً بَقِيَّةَ الأُسْبُوعِ.', modelEn: 'Maybe — I’ll book with you again if the service is excellent for the rest of the week.' },
      ],
      girl: 'عِنْدَكِ · لَكِ · سَتَحْجِزِينَ',
      notes: 'Develop: ḥajaztu (past) vs sa-aḥjizu (future), allatī + a resumptive pronoun, passives (ursila, tunqala), hal yumkinu an, a condition with idhā.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a summer course application', title: 'Role play D — Interview for a summer Arabic course', ar: 'مُقَابَلَةُ القَبُولِ', you: 'an applicant', them: 'the course director',
      tasks: [
        { ex: 'هَلْ مَلَأْتَ الاسْتِمَارَةَ كُلَّهَا؟', task: 'Confirm and say what is missing.', help: 'نَعَمْ، مَلَأْتُهَا … مَا عَدَا …', model: 'نَعَمْ، مَلَأْتُهَا كُلَّهَا مَا عَدَا رَقْمِ جَوَازِ السَّفَرِ، لِأَنَّ جَوَازِي الجَدِيدَ لَمْ يَصِلْ بَعْدُ.', modelEn: 'Yes, all of it except the passport number, because my new passport hasn’t arrived yet.' },
        { ex: 'لِمَاذَا اخْتَرْتَ هٰذِهِ الدَّوْرَةَ بِالذَّاتِ؟', task: 'Explain with a relative clause.', help: 'لِأَنَّهَا الدَّوْرَةُ الوَحِيدَةُ الَّتِي …', model: 'لِأَنَّهَا الدَّوْرَةُ الوَحِيدَةُ الَّتِي تَجْمَعُ بَيْنَ دُرُوسِ اللُّغَةِ وَالإِقَامَةِ مَعَ عَائِلَةٍ عَرَبِيَّةٍ.', modelEn: 'Because it is the only course that combines language lessons with staying with an Arab family.' },
        { ex: 'هَلْ دَرَسْتَ فِي الخَارِجِ مِنْ قَبْلُ؟', task: 'Describe a past experience and what you learnt.', help: 'نَعَمْ، فِي … حَيْثُ … فَتَعَلَّمْتُ …', model: 'نَعَمْ، فِي الصَّيْفِ المَاضِي أَقَمْتُ أُسْبُوعَيْنِ فِي عَمَّانَ، حَيْثُ حَضَرْتُ دَوْرَةً قَصِيرَةً، فَتَعَلَّمْتُ أَنْ أَعْتَمِدَ عَلَى نَفْسِي.', modelEn: 'Yes, last summer I stayed two weeks in Amman, where I took a short course, and learnt to rely on myself.' },
        { ex: 'يُشْتَرَطُ أَنْ يَتَكَلَّمَ الطَّالِبُ العَرَبِيَّةَ فَقَطْ.', task: 'Concede and reassure.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنِّي …', model: 'صَحِيحٌ أَنَّ ذٰلِكَ سَيَكُونُ صَعْبًا فِي البِدَايَةِ، غَيْرَ أَنِّي أَعْتَقِدُ أَنَّهُ أَسْرَعُ طَرِيقَةٍ لِلتَّحَسُّنِ.', modelEn: 'That will be hard at first, but I believe it is the fastest way to improve.' },
        { unexpected: true, ex: 'لَوْ لَمْ تُقْبَلْ هٰذِهِ السَّنَةَ، مَاذَا تَفْعَلُ؟', task: 'Answer the unexpected question (conditional).', help: 'لَوْ لَمْ أُقْبَلْ، لَـ…', model: 'لَوْ لَمْ أُقْبَلْ، لَدَرَسْتُ عَلَى الإِنْتَرْنِتِ طُوالَ السَّنَةِ، وَلَقَدَّمْتُ طَلَبًا جَدِيدًا فِي السَّنَةِ القَادِمَةِ.', modelEn: 'If I weren’t accepted, I’d study online all year and apply again next year.' },
      ],
      girl: 'مَلَأْتِ · اخْتَرْتِ · دَرَسْتِ · تُقْبَلِي',
      notes: 'Stretch: mā ʿadā, lam … baʿdu, al-waḥīda allatī, ḥaythu, passives (yushtaraṭu, tuqbal / uqbal), a concession and law lam … la-.',
      modelFoot: 'Stretch: precise detail, a relative clause, a past experience with ḥaythu, a concession and a passive conditional.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'الحَجْزُ وَالمَعْلُومَاتُ', aim: 'one full sentence per question',
      qs: [
        { q: 'مَا اسْمُكَ الكَامِلُ؟ وَمَا جِنْسِيَّتُكَ؟', en: 'What is your full name and nationality?', start: 'اسْمِي … وَأَنَا …', model: 'اسْمِي سَارَةُ عَلِيٌّ، وَأَنَا بَرِيطَانِيَّةٌ.', modelEn: 'My name is Sara Ali, and I am British.' },
        { q: 'مَتَى وُلِدْتَ؟', en: 'When were you born?', start: 'وُلِدْتُ فِي …', model: 'وُلِدْتُ فِي العَاشِرِ مِنْ مَايُو سَنَةَ أَلْفَيْنِ وَعَشْرَةٍ.', modelEn: 'I was born on 10 May 2010.' },
        { q: 'هَلْ تَحْجِزُ التَّذَاكِرَ عَلَى الإِنْتَرْنِتِ؟', en: 'Do you book tickets online?', start: 'نَعَمْ، أَحْجِزُ …', model: 'نَعَمْ، أَحْجِزُ تَذَاكِرَ السِّينَمَا عَلَى الإِنْتَرْنِتِ.', modelEn: 'Yes, I book cinema tickets online.' },
        { q: 'أَيْنَ أَقَمْتَ فِي العُطْلَةِ المَاضِيَةِ؟', en: 'Where did you stay last holiday?', start: 'أَقَمْتُ فِي …', model: 'أَقَمْتُ فِي فُنْدُقٍ صَغِيرٍ قُرْبَ البَحْرِ.', modelEn: 'I stayed in a small hotel near the sea.' },
        { q: 'مَا عُنْوَانُ بَرِيدِكَ الإِلِكْتْرُونِيِّ؟', en: 'What is your email address?', start: 'عُنْوَانِي …', model: 'عُنْوَانِي: سَارَة، نُقْطَة، عَلِي، فِي جِيمِيل.', modelEn: 'My address is sara.ali at gmail.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + clear personal details = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'الوَثَائِقُ فِي حَيَاتِي', aim: 'two or three sentences, with two tenses and a relative clause',
      qs: [
        { q: 'صِفْ آخِرَ مَرَّةٍ حَجَزْتَ فِيهَا شَيْئًا.', en: 'Describe the last time you booked something.', start: 'آخِرَ مَرَّةٍ حَجَزْتُ …', model: 'آخِرَ مَرَّةٍ حَجَزْتُ تَذَاكِرَ لِمُبَارَاةِ كُرَةِ القَدَمِ عَلَى تَطْبِيقِ النَّادِي، وَأُرْسِلَتِ التَّذَاكِرُ إِلَى هَاتِفِي فَوْرًا.', modelEn: 'Last time I booked football tickets on the club app, and the tickets were sent to my phone straight away.' },
        { q: 'هَلْ تُفَضِّلُ الحَجْزَ عَلَى الإِنْتَرْنِتِ أَمْ فِي المَكْتَبِ؟', en: 'Do you prefer booking online or at the office?', start: 'أُفَضِّلُ … لِأَنَّ …', model: 'أُفَضِّلُ الحَجْزَ عَلَى الإِنْتَرْنِتِ، لِأَنَّهُ أَسْرَعُ، وَأَسْتَطِيعُ أَنْ أُقَارِنَ الأَسْعَارَ.', modelEn: 'I prefer booking online, because it is faster and I can compare prices.' },
        { q: 'مَا الوَثَائِقُ الَّتِي تَحْتَاجُ إِلَيْهَا لِلسَّفَرِ؟', en: 'Which documents do you need to travel?', start: 'أَحْتَاجُ إِلَى … وَ…', model: 'أَحْتَاجُ إِلَى جَوَازِ السَّفَرِ، وَتَذْكِرَةِ الطَّائِرَةِ، وَأَحْيَانًا إِلَى تَأْشِيرَةٍ.', modelEn: 'I need my passport, a plane ticket, and sometimes a visa.' },
        { q: 'هَلْ مَلَأْتَ اسْتِمَارَةً مُهِمَّةً مِنْ قَبْلُ؟', en: 'Have you ever filled in an important form?', start: 'نَعَمْ، مَلَأْتُ … لِـ…', model: 'نَعَمْ، مَلَأْتُ اسْتِمَارَةً لِلتَّسْجِيلِ فِي نَادِي السِّبَاحَةِ، وَكَتَبْتُ فِيهَا مَعْلُومَاتٍ عَنْ صِحَّتِي.', modelEn: 'Yes, a form to register at the swimming club, with information about my health.' },
        { q: 'أَيْنَ سَتُقِيمُ فِي العُطْلَةِ القَادِمَةِ؟', en: 'Where will you stay next holiday?', start: 'سَأُقِيمُ فِي … الَّذِي / الَّتِي …', model: 'سَأُقِيمُ فِي شَقَّةٍ صَغِيرَةٍ حَجَزَهَا أَبِي فِي إِسْطَنْبُولَ، وَهِيَ قَرِيبَةٌ مِنَ المَسْجِدِ الأَزْرَقِ.', modelEn: 'I’ll stay in a small flat my dad booked in Istanbul, near the Blue Mosque.' },
      ],
      foot: 'Develop: two or three sentences — booking verbs in two tenses, a passive or a relative clause.',
      modelFoot: 'Two tenses + a relative or passive = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'المَعْلُومَاتُ الرَّقْمِيَّةُ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ مِنَ الآمِنِ أَنْ نُعْطِيَ مَعْلُومَاتِنَا الشَّخْصِيَّةَ عَلَى الإِنْتَرْنِتِ؟', en: 'Is it safe to give our personal details online?', start: 'يَعْتَمِدُ ذٰلِكَ عَلَى … فَإِذَا …', model: 'يَعْتَمِدُ ذٰلِكَ عَلَى المَوْقِعِ؛ فَإِذَا كَانَ رَسْمِيًّا وَمَوْثُوقًا، فَلَا بَأْسَ، أَمَّا المَوَاقِعُ المَجْهُولَةُ فَقَدْ تَسْرِقُ بَيَانَاتِنَا.', modelEn: 'It depends on the site: if it is official and trusted, fine; but unknown sites may steal our data.' },
        { q: 'هَلْ سَتَخْتَفِي الوَثَائِقُ الوَرَقِيَّةُ؟', en: 'Will paper documents disappear?', start: 'أَعْتَقِدُ أَنَّ … لٰكِنَّ …', model: 'أَعْتَقِدُ أَنَّ مُعْظَمَهَا سَيُصْبِحُ رَقْمِيًّا، لٰكِنَّ بَعْضَ النَّاسِ، كَكِبَارِ السِّنِّ، سَيَظَلُّونَ يُفَضِّلُونَ الوَرَقَ.', modelEn: 'Most will become digital, but some people, like the elderly, will still prefer paper.' },
        { q: 'مَا مَزَايَا التَّذَاكِرِ الإِلِكْتْرُونِيَّةِ وَعُيُوبُهَا؟', en: 'What are the pros and cons of e-tickets?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، لَا تَضِيعُ وَتُوَفِّرُ الوَرَقَ، وَمِنْ نَاحِيَةٍ أُخْرَى، إِذَا نَفِدَتْ بَطَّارِيَّةُ الهَاتِفِ، فَلَنْ تَسْتَطِيعَ الدُّخُولَ!', modelEn: 'They don’t get lost and save paper, but if your phone battery dies, you can’t get in!' },
        { q: 'هَلْ حَدَثَتْ لَكَ مُشْكِلَةٌ فِي حَجْزٍ؟', en: 'Have you had a problem with a booking?', start: 'نَعَمْ، مَرَّةً … فَـ…', model: 'نَعَمْ، مَرَّةً أُلْغِيَتْ رِحْلَتُنَا بِسَبَبِ العَاصِفَةِ، فَقَضَيْنَا اللَّيْلَةَ فِي المَطَارِ، ثُمَّ أُعِيدَ إِلَيْنَا ثَمَنُ التَّذَاكِرِ.', modelEn: 'Yes, once our flight was cancelled because of a storm, so we spent the night at the airport; later the ticket money was refunded.' },
        { q: 'لَوْ سُرِقَتْ بَيَانَاتُكَ، مَاذَا تَفْعَلُ؟', en: 'If your data were stolen, what would you do?', start: 'لَوْ سُرِقَتْ …، لَغَيَّرْتُ …', model: 'لَوْ سُرِقَتْ بَيَانَاتِي، لَغَيَّرْتُ كُلَّ كَلِمَاتِ السِّرِّ فَوْرًا، وَلَأَبْلَغْتُ البَنْكَ وَالشُّرْطَةَ.', modelEn: 'If my data were stolen, I’d change all my passwords at once and report it to the bank and police.' },
      ],
      foot: 'Stretch: a conditional, a prediction, a balanced view, passive verbs (ulghiyat, uʿīda, suriqat) and law … la-.',
      modelFoot: 'Stretch: yaʿtamidu ʿalā, ammā … fa-qad, balance, passives in a narrative and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I gave my personal details clearly (name, date, number).' },
    { route: 'core', text: 'I booked something politely (urīdu … min faḍlik).' },
    { route: 'develop', text: 'I used booking verbs in two tenses (ḥajaztu / sa-aḥjizu).' },
    { route: 'develop', text: 'I used a relative pronoun (alladhī / allatī) or a passive.' },
    { route: 'stretch', text: 'I solved a problem, made a concession or used law … la-.' },
  ],
};
speak.CONV[1].qs[3].start = 'نَعَمْ، مَلَأْتُ اسْتِمَارَةً لِلتَّسْجِيلِ فِي …';
speak.CONV[2].qs[3].start = 'نَعَمْ، مَرَّةً أُلْغِيَتْ … فَقَضَيْنَا …';
speak.RP[3].tasks[4].help = 'لَوْ لَمْ أُقْبَلْ، لَدَرَسْتُ …';

const Q2_CORE = `السَّلَامُ عَلَيْكُمْ،
أُرِيدُ أَنْ أَحْجِزَ غُرْفَةً فِي فُنْدُقِكُمْ لِي وَلِأُسْرَتِي. نَحْنُ أَرْبَعَةُ أَشْخَاصٍ: أَنَا وَأَبِي وَأُمِّي وَأَخِي الصَّغِيرُ. سَنَصِلُ يَوْمَ السَّبْتِ العَاشِرِ مِنْ يُولْيُو، وَسَنُقِيمُ خَمْسَ لَيَالٍ. نُرِيدُ غُرْفَتَيْنِ مُطِلَّتَيْنِ عَلَى البَحْرِ، مَعَ الفُطُورِ. فِي السَّنَةِ المَاضِيَةِ أَقَمْنَا فِي فُنْدُقِكُمْ، وَكَانَتِ الخِدْمَةُ مُمْتَازَةً. هَلْ عِنْدَكُمْ مَوْقِفٌ لِلسَّيَّارَاتِ؟ وَكَمْ سِعْرُ اللَّيْلَةِ؟ أَرْجُو أَنْ تُرْسِلُوا التَّأْكِيدَ إِلَى بَرِيدِي الإِلِكْتْرُونِيِّ.
مَعَ الشُّكْرِ،
يُوسُفُ أَحْمَدُ`;
const Q2_FULL = `حَضْرَةَ مُدِيرِ فُنْدُقِ النَّخِيلِ المُحْتَرَمِ،
تَحِيَّةً طَيِّبَةً، وَبَعْدُ، فَأَوَدُّ أَنْ أَحْجِزَ غُرْفَتَيْنِ لِأُسْرَتِي المُكَوَّنَةِ مِنْ أَرْبَعَةِ أَفْرَادٍ، مِنَ العَاشِرِ إِلَى الخَامِسَ عَشَرَ مِنْ يُولْيُو. وَنُفَضِّلُ الغُرَفَ الَّتِي تُطِلُّ عَلَى البَحْرِ، مَعَ وَجْبَةِ الفُطُورِ. وَقَدْ أَقَمْنَا عِنْدَكُمْ فِي الصَّيْفِ المَاضِي، وَأَعْجَبَتْنَا نَظَافَةُ الغُرَفِ وَلُطْفُ المُوَظَّفِينَ، لِذٰلِكَ لَمْ نُفَكِّرْ فِي فُنْدُقٍ آخَرَ. وَأَرْجُو أَنْ تُخْبِرُونِي بِسِعْرِ اللَّيْلَةِ، وَهَلْ تُوجَدُ خِدْمَةُ النَّقْلِ مِنَ المَطَارِ، لِأَنَّ طَائِرَتَنَا تَصِلُ فِي مُنْتَصَفِ اللَّيْلِ. وَبَعْدَ تَأْكِيدِ الحَجْزِ، سَأُرْسِلُ صُورَةً مِنْ جَوَازَاتِ السَّفَرِ كَمَا تَطْلُبُونَ.
وَتَفَضَّلُوا بِقَبُولِ فَائِقِ الاحْتِرَامِ،
يُوسُفُ أَحْمَدُ`;
const Q3A_CORE = `فِي الصَّيْفِ المَاضِي سَافَرْتُ مَعَ أُسْرَتِي إِلَى المَغْرِبِ. قَبْلَ السَّفَرِ حَجَزْنَا تَذَاكِرَ الطَّائِرَةِ عَلَى الإِنْتَرْنِتِ، وَحَجَزْنَا شَقَّةً جَمِيلَةً فِي مَرَّاكُشَ. كَانَ الحَجْزُ سَهْلًا وَسَرِيعًا، وَأُرْسِلَ التَّأْكِيدُ إِلَى هَاتِفِ أَبِي.
فِي المَطَارِ أَظْهَرْنَا جَوَازَاتِ السَّفَرِ وَالتَّذَاكِرَ الإِلِكْتْرُونِيَّةَ. ثُمَّ رَكِبْنَا الطَّائِرَةَ، وَوَصَلْنَا بَعْدَ ثَلَاثِ سَاعَاتٍ. أَقَمْنَا فِي الشَّقَّةِ أُسْبُوعًا كَامِلًا. كَانَتْ نَظِيفَةً وَقَرِيبَةً مِنَ السُّوقِ القَدِيمِ، وَكَانَ صَاحِبُهَا لَطِيفًا جِدًّا.
لٰكِنْ حَدَثَتْ مُشْكِلَةٌ صَغِيرَةٌ: نَسِيَ أَخِي جَوَازَ سَفَرِهِ فِي الشَّقَّةِ يَوْمَ الرُّجُوعِ! رَجَعَ أَبِي بِسُرْعَةٍ بِسَيَّارَةِ أُجْرَةٍ، وَوَصَلْنَا إِلَى المَطَارِ فِي آخِرِ دَقِيقَةٍ.
فِي رَأْيِي، الحَجْزُ عَلَى الإِنْتَرْنِتِ مُفِيدٌ جِدًّا، لِأَنَّهُ أَرْخَصُ وَأَسْرَعُ. لٰكِنْ يَجِبُ أَنْ نَحْفَظَ الوَثَائِقَ فِي مَكَانٍ آمِنٍ. فِي الصَّيْفِ القَادِمِ سَأَحْجِزُ أَنَا الرِّحْلَةَ إِلَى إِسْبَانْيَا، وَسَأَصْنَعُ قَائِمَةً بِكُلِّ الوَثَائِقِ.`;
const Q3A_FULL = `يَظُنُّ كَثِيرُونَ أَنَّ السَّفَرَ يَبْدَأُ فِي المَطَارِ، لٰكِنِّي تَعَلَّمْتُ أَنَّ الرِّحْلَةَ الحَقِيقِيَّةَ تَبْدَأُ أَمَامَ شَاشَةِ الحَاسُوبِ؛ فَفِي الصَّيْفِ المَاضِي كُلِّفْتُ لِأَوَّلِ مَرَّةٍ بِتَنْظِيمِ رِحْلَةِ أُسْرَتِي إِلَى الأُرْدُنِّ كُلِّهَا.
قَارَنْتُ أَسْعَارَ الرِّحْلَاتِ عَلَى عِدَّةِ مَوَاقِعَ، ثُمَّ حَجَزْتُ تَذَاكِرَ ذَهَابٍ وَإِيَابٍ، وَشَقَّةً فِي عَمَّانَ قَرَأْتُ عَنْهَا عَشَرَاتِ التَّعْلِيقَاتِ الإِيجَابِيَّةِ. كَمَا مَلَأْتُ اسْتِمَارَةَ التَّأْشِيرَةِ الإِلِكْتْرُونِيَّةِ بِدِقَّةٍ، لِأَنَّ أَيَّ خَطَأٍ فِي الأَسْمَاءِ أَوِ الأَرْقَامِ قَدْ يُسَبِّبُ رَفْضَ الطَّلَبِ. وَبَعْدَ يَوْمَيْنِ، وَصَلَتْ إِلَى بَرِيدِي رِسَالَةٌ تُؤَكِّدُ أَنَّ الطَّلَبَ قُبِلَ.
غَيْرَ أَنَّ المُفَاجَأَةَ جَاءَتْ عِنْدَ الوُصُولِ؛ فَقَدِ اكْتَشَفْنَا أَنَّ صَاحِبَ الشَّقَّةِ أَلْغَى الحَجْزَ دُونَ أَنْ يُخْبِرَنَا! وَبَعْدَ سَاعَةٍ مِنَ القَلَقِ، تَوَاصَلْتُ مَعَ المَوْقِعِ الَّذِي حَجَزْنَا عَنْ طَرِيقِهِ، فَوَجَدُوا لَنَا فُنْدُقًا أَفْضَلَ بِالسِّعْرِ نَفْسِهِ.
صَحِيحٌ أَنَّ الحَجْزَ الإِلِكْتْرُونِيَّ سَهَّلَ حَيَاتَنَا، غَيْرَ أَنَّهُ يَحْتَاجُ إِلَى انْتِبَاهٍ وَصَبْرٍ. وَلَوْ لَمْ أَحْتَفِظْ بِرِسَالَةِ التَّأْكِيدِ عَلَى هَاتِفِي، لَبَقِينَا فِي الشَّارِعِ تِلْكَ اللَّيْلَةَ.`;
const Q3B_FULL = `لَمْ يَعُدْ أَحَدٌ يَحْمِلُ تَذْكِرَةً وَرَقِيَّةً أَوْ خَرِيطَةً مَطْبُوعَةً؛ فَالهَاتِفُ أَصْبَحَ مَحْفَظَةً تَحْتَوِي عَلَى بِطَاقَاتِنَا وَتَذَاكِرِنَا وَوَثَائِقِنَا. فَهَلْ هٰذَا التَّحَوُّلُ نِعْمَةٌ أَمْ خَطَرٌ؟
فِي المَاضِي كَانَ المُسَافِرُ يَقِفُ سَاعَاتٍ فِي طَوَابِيرِ المَكَاتِبِ لِيَحْجِزَ تَذْكِرَةً أَوْ يُجَدِّدَ جَوَازَهُ، أَمَّا اليَوْمَ فَتُنْجَزُ هٰذِهِ المُعَامَلَاتُ فِي دَقَائِقَ، وَتُرْسَلُ الوَثَائِقُ إِلَى بَرِيدِهِ الإِلِكْتْرُونِيِّ فَوْرًا، مِمَّا يُوَفِّرُ الوَقْتَ وَالوَرَقَ مَعًا. بَلْ إِنَّ جَدِّي نَفْسَهُ جَدَّدَ جَوَازَهُ العَامَ المَاضِي دُونَ أَنْ يُغَادِرَ بَيْتَهُ.
لٰكِنَّ لِهٰذِهِ السُّهُولَةِ ثَمَنًا؛ فَقَدْ تَلَقَّى خَالِي العَامَ المَاضِي رِسَالَةً تَبْدُو رَسْمِيَّةً تَطْلُبُ مِنْهُ أَنْ يُسَجِّلَ بَيَانَاتِهِ البَنْكِيَّةَ لِتَأْكِيدِ حَجْزِ طَيَرَانٍ، وَبَعْدَ سَاعَاتٍ سُرِقَ مِنْ حِسَابِهِ مَبْلَغٌ كَبِيرٌ، وَلَمْ يَسْتَرْجِعْهُ إِلَّا بَعْدَ أَسَابِيعَ.
صَحِيحٌ أَنَّ الوَثَائِقَ الرَّقْمِيَّةَ أَسْرَعُ وَأَنْظَفُ لِلْبِيئَةِ، غَيْرَ أَنَّ حِمَايَتَهَا مَسْؤُولِيَّتُنَا جَمِيعًا. وَإِذَا تَعَلَّمْنَا كَيْفَ نَتَأَكَّدُ مِنَ المَوَاقِعِ وَنَسْتَخْدِمُ كَلِمَاتِ سِرٍّ قَوِيَّةً، فَسَنَسْتَفِيدُ مِنْ هٰذَا العَالَمِ الرَّقْمِيِّ دُونَ أَنْ نَقَعَ ضَحَايَا لَهُ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a hotel registration form, write a booking email to a hotel, and write an extended piece about organising a trip or about digital documents.',
  lift: [
    { ar: 'أَوَدُّ أَنْ أَحْجِزَ غُرْفَتَيْنِ', en: 'I would like to book two rooms' },
    { ar: 'الغُرَفُ الَّتِي تُطِلُّ عَلَى البَحْرِ', en: 'the rooms which overlook the sea' },
    { ar: 'أُرْسِلَ التَّأْكِيدُ إِلَى هَاتِفِي', en: 'the confirmation was sent to my phone' },
  ],
  checkTip: 'Check: the right tense for each booking verb (ḥajaztu / aḥjizu / sa-aḥjizu); passive verbs agree with the new subject (ursilat at-tadhākir); alladhī / allatī agree with the noun and need a pronoun when it is the object (allatī ḥajaztuhā).',
  FORM: {
    title: 'Hotel registration card', ar: 'بِطَاقَةُ تَسْجِيلِ النُّزَلَاءِ',
    fields: [
      { core: true, ar: 'الاسْمُ الكَامِلُ', en: 'Full name', model: 'يُوسُفُ أَحْمَدُ', modelEn: 'Yusuf Ahmed' },
      { core: true, ar: 'الجِنْسِيَّةُ', en: 'Nationality', model: 'بَرِيطَانِيٌّ', modelEn: 'British' },
      { core: true, ar: 'تَارِيخُ المِيلَادِ', en: 'Date of birth', model: '٣ مَارِس ٢٠٠٩', modelEn: '3 March 2009' },
      { core: true, ar: 'رَقْمُ جَوَازِ السَّفَرِ', en: 'Passport number', model: '٥٤٨٢٩١٧٣٦', modelEn: '548291736' },
      { core: true, ar: 'تَارِيخُ الوُصُولِ وَالمُغَادَرَةِ', en: 'Arrival and departure dates', model: 'مِنْ ١٠ إِلَى ١٥ يُولْيُو', modelEn: '10 to 15 July' },
      { core: true, ar: 'نَوْعُ الغُرْفَةِ', en: 'Room type', model: 'غُرْفَةٌ مُزْدَوَجَةٌ', modelEn: 'a double room' },
      { ar: 'طَلَبٌ خَاصٌّ', en: 'A special request', model: 'غُرْفَةٌ هَادِئَةٌ بَعِيدَةٌ عَنِ المِصْعَدِ', modelEn: 'a quiet room away from the lift' },
      { ar: 'جُمْلَةٌ: كَيْفَ عَرَفْتَ الفُنْدُقَ؟', en: 'ONE sentence: how you heard about the hotel', model: 'قَرَأْتُ عَنْهُ تَعْلِيقَاتٍ مُمْتَازَةً عَلَى المَوْقِعِ الَّذِي حَجَزْتُ مِنْهُ.', modelEn: 'I read excellent reviews of it on the website I booked through.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with a relative clause (alladhī).',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 2: nisba adjective (m. / f.). Box 8: al-mawqiʿ alladhī ḥajaztu minhu (relative + resumptive pronoun).',
  },
  Q2: {
    short: 'a hotel booking email', title: 'Question 2: email to a hotel', ar: 'رِسَالَةُ حَجْزٍ إِلَى فُنْدُقٍ',
    task: 'You want to book a hotel for your family holiday. Write an email in Arabic to the hotel of about 80–90 words. You must include: • who you are and how many people • the dates and the room(s) you want • why you chose this hotel (a past stay or reviews) • two questions about the hotel or services.',
    checklist: ['All four bullet points, in order.', 'A polite greeting and closing.', 'Dates, numbers and the room type.', 'A past AND a future sentence.', 'About 80–90 words.'],
    phrases: [['أُرِيدُ أَنْ أَحْجِزَ … لِأَرْبَعَةِ أَشْخَاصٍ', 'I want to book … for four people'], ['سَنَصِلُ يَوْمَ … وَسَنُقِيمُ … لَيَالٍ', 'we will arrive on … and stay … nights'], ['فِي السَّنَةِ المَاضِيَةِ أَقَمْنَا …', 'last year we stayed …'], ['هَلْ عِنْدَكُمْ …؟ وَكَمْ سِعْرُ …؟', 'do you have …? and how much is …?']],
    rubric: [
      ['task', 'تُرِيدُ أَنْ تَحْجِزَ فُنْدُقًا لِعُطْلَةِ أُسْرَتِكَ. اكْتُبْ رِسَالَةً إِلَى الفُنْدُقِ (٨٠–٩٠ كَلِمَةً).', 'Book a hotel for your family holiday: write to the hotel (80–90 words).'],
      ['1', 'مَنْ أَنْتَ؟ وَكَمْ شَخْصًا؟', 'Who you are and how many people'],
      ['2', 'مَا التَّوَارِيخُ؟ وَأَيُّ غُرْفَةٍ تُرِيدُ؟', 'The dates and the room(s) you want'],
      ['3', 'لِمَاذَا اخْتَرْتَ هٰذَا الفُنْدُقَ؟', 'Why you chose this hotel'],
      ['4', 'اسْأَلْ سُؤَالَيْنِ عَنِ الفُنْدُقِ أَوِ الخِدْمَاتِ.', 'Two questions about the hotel or services'],
    ],
    qwords: 'مَنْ (who) · كَمْ (how many) · أَيُّ (which) · لِمَاذَا (why) · اسْأَلْ (ask!) — bullet 3 can be PAST; bullet 4 needs two QUESTIONS',
    frames: [
      ['start', 'السَّلَامُ عَلَيْكُمْ،', 'Peace be upon you (formal greeting),'],
      ['1', 'أُرِيدُ أَنْ أَحْجِزَ غُرْفَةً لِي وَلِأُسْرَتِي. نَحْنُ ______ أَشْخَاصٍ.', 'I want to book a room for me and my family. We are … people.'],
      ['2', 'سَنَصِلُ يَوْمَ ______ ، وَسَنُقِيمُ ______ لَيَالٍ. نُرِيدُ ______ .', 'We arrive on … and stay … nights. We want …'],
      ['3', 'فِي السَّنَةِ المَاضِيَةِ ______ ، وَكَانَتِ الخِدْمَةُ ______ .', 'Last year …, and the service was …'],
      ['4', 'هَلْ عِنْدَكُمْ ______ ؟ وَكَمْ سِعْرُ ______ ؟', 'Do you have …? How much is …?'],
      ['end', 'مَعَ الشُّكْرِ، ______', 'With thanks, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Peace be upon you. I want to book a room in your hotel for me and my family. We are four people: me, my father, my mother and my little brother. We will arrive on Saturday 10 July and stay five nights. We want two sea-view rooms with breakfast. Last year we stayed in your hotel and the service was excellent. Do you have a car park? And how much is a night? Please send the confirmation to my email. With thanks, Yusuf Ahmed.”',
      find: ['أُرِيدُ أَنْ أَحْجِزَ', 'سَنُقِيمُ خَمْسَ لَيَالٍ', 'أَقَمْنَا فِي فُنْدُقِكُمْ', 'هَلْ عِنْدَكُمْ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Manager of the Palm Hotel, I would like to book two rooms for my family of four, from 10 to 15 July. We prefer rooms that overlook the sea, with breakfast. We stayed with you last summer and loved the clean rooms and friendly staff, so we didn’t consider another hotel. Please tell me the price per night, and whether there is an airport transfer service, as our plane lands at midnight. Once the booking is confirmed, I will send a copy of our passports as you require. Yours respectfully, Yusuf Ahmed.”',
      find: ['أَوَدُّ أَنْ أَحْجِزَ', 'الغُرَفَ الَّتِي تُطِلُّ', 'أَعْجَبَتْنَا نَظَافَةُ', 'بَعْدَ تَأْكِيدِ الحَجْزِ، سَأُرْسِلُ'],
    },
  },
  Q3: {
    a: { title: 'رِحْلَةٌ نَظَّمْتُهَا بِنَفْسِي', en: 'A trip I organised myself', bullets: 'الحَجْزُ قَبْلَ السَّفَرِ · الوَثَائِقُ وَالإِجْرَاءَاتُ · مُشْكِلَةٌ حَدَثَتْ وَكَيْفَ حُلَّتْ · رَأْيُكَ وَخِطَطُكَ', bulletsEn: 'Booking before travelling · documents and procedures · a problem and how it was solved · your opinion and plans' },
    b: { title: 'الوَثَائِقُ الرَّقْمِيَّةُ: سُهُولَةٌ أَمْ خَطَرٌ؟', en: 'Digital documents: convenience or danger?', bullets: 'التَّحَوُّلُ إِلَى الرَّقْمِيِّ · المَاضِي وَالحَاضِرُ · مِثَالٌ مِنَ الوَاقِعِ · رَأْيُكَ وَنَصِيحَتُكَ', bulletsEn: 'The move to digital · past and present · a real example · your opinion and advice' },
    plan: [
      'Booking — ḥajaznā tadhākir … wa-shaqqa; a passive (ursila at-taʾkīd).',
      'Documents and the journey — jawāzāt as-safar, at-tadhākir al-iliktrūniyya; sequence (thumma, baʿda).',
      'A problem — ḥadathat mushkila: nasiya … / alghā …; how it was solved (fa-).',
      'Opinion + future — al-ḥajz ʿalā al-intarnit mufīd li-anna …, sa-aḥjizu …; Stretch: ṣaḥīḥun anna … ghayra anna, law lam … la-.',
    ],
    frames: [
      { ar: 'أُفَضِّلُ الحَجْزَ عَلَى الإِنْتَرْنِتِ، لِأَنَّهُ أَسْرَعُ.', en: 'present: I prefer booking online, because it is faster.' },
      { ar: 'حَجَزْنَا شَقَّةً، وَأُرْسِلَ التَّأْكِيدُ إِلَى هَاتِفِ أَبِي.', en: 'past: we booked a flat, and the confirmation was sent to Dad’s phone.' },
      { ar: 'سَأَحْجِزُ أَنَا الرِّحْلَةَ فِي الصَّيْفِ القَادِمِ.', en: 'future: I will book the trip myself next summer.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Last summer my family went to Morocco: before travelling we booked plane tickets online and a lovely flat in Marrakech; booking was quick and easy and the confirmation was sent to Dad’s phone → at the airport we showed our passports and e-tickets, flew three hours and stayed a whole week in the flat — clean and near the old market, with a very kind owner → a small problem: my brother forgot his passport in the flat on the way home! Dad went back by taxi and we reached the airport at the last minute → online booking is very useful — cheaper and faster — but we must keep documents somewhere safe; next summer I’ll book the trip to Spain myself and make a list of all the documents.', find: ['حَجَزْنَا تَذَاكِرَ', 'أُرْسِلَ التَّأْكِيدُ', 'أَقَمْنَا فِي الشَّقَّةِ', 'سَأَحْجِزُ أَنَا'], notes: 'Core model: booking verbs in three tenses, a passive (ursila), thalāthi sāʿātin, a problem → solution, a comparative opinion and a future plan.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Many think travel starts at the airport, but I learnt the real trip starts at a computer screen: last summer I was put in charge of organising my family’s whole trip to Jordan for the first time → I compared prices on several sites, then booked return tickets and a flat in Amman with dozens of positive reviews; I also filled in the e-visa form carefully, since any mistake in names or numbers could get the application rejected; two days later an email confirmed it had been accepted → the surprise came on arrival: the owner had cancelled without telling us! After an anxious hour I contacted the site we booked through, and they found us a better hotel for the same price → online booking has made life easier, but it needs attention and patience; “if I hadn’t kept the confirmation on my phone, we’d have been on the street that night”.', find: ['كُلِّفْتُ لِأَوَّلِ مَرَّةٍ', 'قَرَأْتُ عَنْهَا', 'دُونَ أَنْ يُخْبِرَنَا', 'لَوْ لَمْ أَحْتَفِظْ … لَبَقِينَا'], notes: 'Full-mark model: a hook that challenges a belief, a passive (kullif-tu), a relative clause without alladhī (shaqqa qaraʾtu ʿanhā), a reason with qad, ghayra anna as a turn, alladhī ḥajaznā ʿan ṭarīqihi, a concession and law lam … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'convenience or danger?', text: Q3B_FULL, en: 'Nobody carries a paper ticket or printed map any more: the phone has become a wallet holding our cards, tickets and documents — so is this change a blessing or a danger? → in the past travellers queued for hours at offices to book a ticket or renew a passport; today these transactions are done in minutes and documents are emailed instantly, saving time and paper — my grandfather even renewed his passport last year without leaving home → but convenience has a price: last year my uncle got an official-looking message asking him to enter his bank details to confirm a flight booking, and hours later a large sum was stolen from his account, and he only got it back weeks later → digital documents are faster and greener, but protecting them is everyone’s responsibility; “if we learn to check websites and use strong passwords, we will benefit from this digital world without becoming its victims”.', find: ['لَمْ يَعُدْ أَحَدٌ', 'أَمَّا اليَوْمَ فَتُنْجَزُ', 'سُرِقَ مِنْ حِسَابِهِ', 'إِذَا تَعَلَّمْنَا … فَسَنَسْتَفِيدُ'], notes: 'Full-mark model for the Stretch title: lam yaʿud, a metaphor, a rhetorical question, kāna + present vs ammā … fa-, passives (tunjazu, tursalu, suriqa), mimmā, a concession and idhā … fa-sa- … dūna an.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; dates and numbers are clear.' },
    { route: 'core', text: 'Q2: all four bullet points, including two questions.' },
    { route: 'develop', text: 'Q2: booking verbs in two tenses and a polite request (arjū an …).' },
    { route: 'develop', text: 'Q3: a passive verb and a relative clause.' },
    { route: 'stretch', text: 'Q3: a problem solved, a concession and law lam … la-.' },
  ],
};

module.exports = { speak, write };
