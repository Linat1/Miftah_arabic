'use strict';
/* Exam-practice data · TB-L12 · Topic B Review and Four-Skills Assessment — a full Topic B mock: identity, family and friends,
   appearance and personality, home and furniture, colours and clothes, hobbies, invitations and past experiences. Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'B', n: 12, short: 'Topic B Mock Exam', arShort: 'امْتِحَانٌ تَجْرِيبِيٌّ', fileTitle: 'Topic_B_Review_and_Four_Skills_Assessment', title: 'Topic B Review — mock exam practice', ar: 'مُرَاجَعَةُ المِحْوَرِ ب', icon: 'FaClipboardCheck', grammar: 'all of Topic B: pronouns and agreement, iḍāfa and the dual, colours, comparatives, verbal nouns, past / future, polite responses' };

const speak = {
  ...base,
  focus: 'A full Paper 3 mock in breakout rooms: four role plays and a mixed topic conversation covering the whole of Topic B — personal life, family, home, clothes, hobbies and special occasions.',
  words: [
    w(1, 'أَنَا … وَأَصْلِي مِنْ …', 'I am … and my family is from …', [['f.', 'أَنَا بِرِيطَانِيَّةٌ'], ['m.', 'أَنَا بِرِيطَانِيٌّ']], { tag: 'L01 identity' }),
    w(2, 'عِنْدِي أُخْتَانِ', 'I have two sisters', [['brothers', 'أَخَوَانِ'], ['cousin', 'ابْنُ عَمِّي']], { tag: 'L02 family · dual' }),
    w(3, 'لَيْسَ … بَلْ …', 'not … but rather …', [['she', 'لَيْسَتْ'], ['I', 'لَسْتُ']], { tag: 'L03 personality' }),
    w(4, 'يُوجَدُ · تُوجَدُ', 'there is (m. · f.)', [['not', 'لَا يُوجَدُ']], { tag: 'L04 home' }),
    w(5, 'نَسْتَعْمِلُهُ · نَسْتَعْمِلُهَا', 'we use it (m. · f.)', null, { tag: 'L05 attached pronouns' }),
    w(6, 'أَحْمَرُ · حَمْرَاءُ', 'red (m. · f.)', [['blue', 'أَزْرَقُ · زَرْقَاءُ'], ['brown', 'بُنِّيٌّ · بُنِّيَّةٌ']], { tag: 'L06 colours' }),
    w(7, 'أَرْخَصُ مِنْ', 'cheaper than', [['dearer', 'أَغْلَى'], ['how much?', 'بِكَمْ؟']], { tag: 'L07 shopping' }),
    w(8, 'أَسْتَطِيعُ أَنْ …', 'I can … (+ verb in -a)', [['not', 'لَا أَسْتَطِيعُ']], { tag: 'L08 hobbies' }),
    w(9, 'أَدْعُوكَ إِلَى …', 'I invite you to …', [['f.', 'أَدْعُوكِ'], ['pl.', 'أَدْعُوكُمْ']], { tag: 'L09 invitations' }),
    w(10, 'آسِفٌ، لَا أَسْتَطِيعُ لِأَنَّ …', 'sorry, I can’t because …', [['f.', 'آسِفَةٌ']], { tag: 'L09 declining' }),
    w(11, 'أَوَّلًا · ثُمَّ · أَخِيرًا', 'first · then · finally', null, { tag: 'sequencing' }),
    w(12, 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', 'it is true that … but …', null, { tag: 'concession' }),
  ],
  words1: { eyebrow: 'Language bank · one key structure from each part of Topic B', title: 'Topic B in twelve structures', ar: 'المِحْوَرُ ب فِي اثْنَتَيْ عَشْرَةَ بِنْيَةً', notes: 'LANGUAGE BANK (2 min) — a revision map: each card is tagged with its lesson (L01–L09). Ask students to say one sentence with each card before the rooms.' },
  words2: { eyebrow: 'Language bank · structures that lift a mark', title: 'Precise, polite, developed', ar: 'بِنْيَاتٌ تَرْفَعُ الدَّرَجَةَ', notes: 'LANGUAGE BANK (2 min) — top-band answers are precise (agreement, colours, numbers), polite (invitations, apologies) and developed (sequencing, concession). Everyone should use at least one card from 9–12.' },
  checkCore: 'answered every task in full sentences with correct agreement',
  checkDevelop: 'used past, present and future, and linked ideas with reasons',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a youth hostel', title: 'Role play A — Checking in at a youth hostel', ar: 'فِي بَيْتِ الشَّبَابِ', you: 'a young traveller', them: 'the receptionist',
      tasks: [
        { core: true, ex: 'أَهْلًا! مَا اسْمُكَ؟ وَمَا جِنْسِيَّتُكَ؟', task: 'Give your name and nationality.', help: 'اسْمِي … وَأَنَا …', model: 'اسْمِي يُوسُفُ عَلِيٌّ، وَأَنَا بِرِيطَانِيٌّ.', modelEn: 'My name is Yusuf Ali, and I am British.' },
        { core: true, ex: 'مَعَ مَنْ أَنْتَ؟', task: 'Say who you are with.', help: 'أَنَا مَعَ …', model: 'أَنَا مَعَ ابْنِ عَمِّي، وَعُمْرُهُ سَبْعَ عَشْرَةَ سَنَةً.', modelEn: 'I’m with my cousin; he is seventeen.' },
        { core: true, ex: 'أَيَّ غُرْفَةٍ تُرِيدُ؟', task: 'Say which room you want.', help: 'غُرْفَةً … فِيهَا …', model: 'غُرْفَةً هَادِئَةً، فِيهَا سَرِيرَانِ وَحَمَّامٌ.', modelEn: 'A quiet room with two beds and a bathroom.' },
        { core: true, ex: 'كَيْفَ أَعْرِفُ حَقِيبَتَكَ فِي المَخْزَنِ؟', task: 'Describe your bag.', help: 'حَقِيبَتِي … وَعَلَيْهَا …', model: 'حَقِيبَتِي كَبِيرَةٌ وَزَرْقَاءُ، وَعَلَيْهَا شَرِيطٌ أَحْمَرُ.', modelEn: 'My bag is big and blue, with a red ribbon on it.' },
        { core: true, unexpected: true, ex: 'مَاذَا تُحِبُّ أَنْ تَفْعَلَ فِي المَدِينَةِ؟', task: 'Answer the unexpected question.', help: 'أُحِبُّ … لِأَنَّ …', model: 'أُحِبُّ أَنْ أَزُورَ المَتَاحِفَ، لِأَنِّي أُحِبُّ التَّارِيخَ.', modelEn: 'I like visiting museums, because I love history.' },
      ],
      girl: 'اسْمُكِ · جِنْسِيَّتُكِ · أَنْتِ · تُرِيدِينَ · حَقِيبَتَكِ · تُحِبِّينَ — she answers: أَنَا بِرِيطَانِيَّةٌ · مَعَ بِنْتِ عَمِّي',
      notes: 'Core: L01 identity (nisba), L02 family (iḍāfa), L04 home (dual sarīrāni), L06 colours that agree, L08 a hobby with a reason.',
    },
    {
      id: 'B', level: 'Core+', setting: 'buying a present', title: 'Role play B — A present for your sister', ar: 'هَدِيَّةٌ لِأُخْتِي', you: 'a customer', them: 'the shop assistant',
      tasks: [
        { core: true, ex: 'أَهْلًا، تَفَضَّلْ.', task: 'Say what you want and for whom.', help: 'أُرِيدُ هَدِيَّةً لِـ…', model: 'أُرِيدُ هَدِيَّةً لِأُخْتِي، لِأَنَّ عِيدَ مِيلَادِهَا غَدًا.', modelEn: 'I’d like a present for my sister, because her birthday is tomorrow.' },
        { core: true, ex: 'كَمْ عُمْرُهَا؟ وَمَاذَا تُحِبُّ؟', task: 'Give her age and a hobby.', help: 'عُمْرُهَا … وَتُحِبُّ …', model: 'عُمْرُهَا اثْنَتَا عَشْرَةَ سَنَةً، وَتُحِبُّ الرَّسْمَ وَالمُوضَةَ.', modelEn: 'She is twelve, and she loves drawing and fashion.' },
        { ex: 'عِنْدَنَا هٰذِهِ الحَقِيبَةُ الوَرْدِيَّةُ وَتِلْكَ الحَقِيبَةُ البَيْضَاءُ.', task: 'ASK about the prices, then compare.', help: 'بِكَمْ …؟ … أَرْخَصُ مِنْ …', model: 'بِكَمْ هٰذِهِ؟ وَبِكَمْ تِلْكَ؟ … إِذَنِ الوَرْدِيَّةُ أَرْخَصُ مِنَ البَيْضَاءِ.', modelEn: 'How much is this one? And that one? … So the pink one is cheaper than the white one.' },
        { ex: 'هَلْ تُرِيدُ أَنْ نُغَلِّفَهَا؟', task: 'Accept and choose a colour of paper.', help: 'نَعَمْ، مِنْ فَضْلِكَ، بِوَرَقٍ …', model: 'نَعَمْ، مِنْ فَضْلِكَ، بِوَرَقٍ أَزْرَقَ، لِأَنَّهُ لَوْنُهَا المُفَضَّلُ.', modelEn: 'Yes please, in blue paper, because it’s her favourite colour.' },
        { unexpected: true, ex: 'كَيْفَ سَتَحْتَفِلُونَ؟', task: 'Answer the unexpected question (future + sequence).', help: 'أَوَّلًا سَنَأْكُلُ … ثُمَّ …', model: 'أَوَّلًا سَنَأْكُلُ فِي مَطْعَمٍ، ثُمَّ سَنَرْجِعُ إِلَى البَيْتِ وَنَقْطَعُ الكَعْكَةَ.', modelEn: 'First we’ll eat at a restaurant, then go home and cut the cake.' },
      ],
      girl: 'تَفَضَّلِي · تُرِيدِينَ',
      notes: 'Core+: L07 shopping (hādhihi / tilka, prices, a comparative), L06 colours as feminine adjectives (al-wardiyya, al-bayḍāʾ), -hā (nughallifuhā), L09 sequencing.',
    },
    {
      id: 'C', level: 'Develop', setting: 'inviting a friend for the weekend', title: 'Role play C — A weekend at my house', ar: 'عُطْلَةُ نِهَايَةِ الأُسْبُوعِ عِنْدِي', you: 'a student', them: 'a friend from another town',
      tasks: [
        { ex: 'أَهْلًا! كَيْفَ حَالُكَ؟', task: 'Invite your friend for the weekend.', help: 'أَدْعُوكَ إِلَى … هَلْ تَسْتَطِيعُ …؟', model: 'أَهْلًا! أَدْعُوكَ إِلَى بَيْتِنَا فِي نِهَايَةِ الأُسْبُوعِ، فَهَلْ تَسْتَطِيعُ أَنْ تَأْتِيَ؟', modelEn: 'Hi! I’m inviting you to our house at the weekend — can you come?' },
        { ex: 'بِكُلِّ سُرُورٍ! أَيْنَ سَأَنَامُ؟', task: 'Describe where he will sleep.', help: 'سَتَنَامُ فِي … بِجَانِبِ … فِيهَا …', model: 'سَتَنَامُ فِي غُرْفَتِي، فِيهَا سَرِيرَانِ، وَهِيَ بِجَانِبِ الحَمَّامِ.', modelEn: 'You’ll sleep in my room — it has two beds and is next to the bathroom.' },
        { ex: 'وَمَاذَا سَنَفْعَلُ؟', task: 'Suggest two activities with reasons.', help: 'سَنَلْعَبُ … لِأَنَّ … وَسَنَذْهَبُ …', model: 'سَنَلْعَبُ كُرَةَ السَّلَّةِ فِي الحَدِيقَةِ، لِأَنَّكَ تُحِبُّهَا، ثُمَّ سَنَذْهَبُ إِلَى السِّينَمَا يَوْمَ السَّبْتِ.', modelEn: 'We’ll play basketball in the park because you love it, then go to the cinema on Saturday.' },
        { ex: '… هَلْ أُحْضِرُ شَيْئًا؟', task: 'Answer and describe your family briefly.', help: 'لَا تُحْضِرْ شَيْئًا … أُسْرَتِي …', model: 'لَا تُحْضِرْ شَيْئًا! أُسْرَتِي لَطِيفَةٌ جِدًّا، وَأُمِّي سَتَطْبُخُ لَنَا المَنْسَفَ.', modelEn: 'Don’t bring anything! My family is very kind, and my mum will cook mansaf for us.' },
        { unexpected: true, ex: 'مَتَى زُرْتَنِي آخِرَ مَرَّةٍ؟', task: 'Answer the unexpected question (past + memory).', help: 'زُرْتُكَ فِي … وَكَانَ …', model: 'زُرْتُكَ فِي العِيدِ المَاضِي، وَكَانَ يَوْمًا رَائِعًا، خُصُوصًا عِنْدَمَا ضِعْنَا فِي السُّوقِ القَدِيمِ!', modelEn: 'I visited you last Eid — a great day, especially when we got lost in the old market!' },
      ],
      girl: 'to a girl friend: أَدْعُوكِ · تَسْتَطِيعِينَ أَنْ تَأْتِي · سَتَنَامِينَ · لِأَنَّكِ تُحِبِّينَهَا · لَا تُحْضِرِي',
      notes: 'Develop: L09 inviting, L04 home (dual, prepositions), L08 hobbies + reasons, L02 family, a negative imperative (lā tuḥḍir), a past memory.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a youth debate', title: 'Role play D — Is family life changing?', ar: 'هَلْ تَتَغَيَّرُ الحَيَاةُ العَائِلِيَّةُ؟', you: 'a young speaker', them: 'the debate chair',
      tasks: [
        { ex: 'كَيْفَ تَغَيَّرَتِ العَائِلَةُ فِي رَأْيِكَ؟', task: 'Compare past and present.', help: 'كَانَتِ العَائِلَاتُ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَتِ العَائِلَاتُ كَبِيرَةً وَتَعِيشُ مَعًا، أَمَّا اليَوْمَ فَيَعِيشُ أَفْرَادُهَا فِي مُدُنٍ وَبُلْدَانٍ مُخْتَلِفَةٍ.', modelEn: 'Families used to be large and live together; today their members live in different towns and countries.' },
        { ex: 'هَلْ هٰذَا التَّغْيِيرُ سَلْبِيٌّ؟', task: 'Give a balanced view.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ نَفْتَقِدُ الأَجْدَادَ وَالأَقَارِبَ، وَمِنْ نَاحِيَةٍ أُخْرَى أَصْبَحَ الشَّبَابُ أَكْثَرَ اسْتِقْلَالًا.', modelEn: 'On one hand we miss grandparents and relatives; on the other, young people have become more independent.' },
        { ex: 'أَعْطِنَا مِثَالًا مِنْ عَائِلَتِكَ.', task: 'Give a personal example (past).', help: 'فِي عَائِلَتِي مَثَلًا … فَـ…', model: 'فِي عَائِلَتِي مَثَلًا هَاجَرَ خَالِي إِلَى كَنَدَا قَبْلَ عَشْرِ سَنَوَاتٍ، فَأَصْبَحْنَا نَلْتَقِي عَلَى الشَّاشَةِ كُلَّ جُمُعَةٍ.', modelEn: 'In my family, for example, my uncle emigrated to Canada ten years ago, so we now meet on screen every Friday.' },
        { ex: 'هَلْ تُقَرِّبُ التِّكْنُولُوجْيَا العَائِلَاتِ أَمْ تُبْعِدُهَا؟', task: 'Concede and give your view.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهَا تَجْمَعُ البَعِيدِينَ، غَيْرَ أَنَّهَا قَدْ تُبْعِدُ القَرِيبِينَ، فَنَجْلِسُ فِي غُرْفَةٍ وَاحِدَةٍ وَكُلٌّ عَلَى هَاتِفِهِ.', modelEn: 'It is true it brings distant people together, but it may push close people apart — we sit in one room, each on our phone.' },
        { unexpected: true, ex: 'لَوْ وَضَعْتَ قَانُونًا لِلْعَائِلَاتِ، مَاذَا يَكُونُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ وَضَعْتُ …، لَـ…', model: 'لَوْ وَضَعْتُ قَانُونًا، لَجَعَلْتُ يَوْمَ الجُمُعَةِ يَوْمًا عَائِلِيًّا، يَأْكُلُ فِيهِ الجَمِيعُ مَعًا بِلَا شَاشَاتٍ.', modelEn: 'If I made a law, I would make Friday a family day when everyone eats together with no screens.' },
      ],
      girl: 'رَأْيِكِ · عَائِلَتِكِ · وَضَعْتِ',
      notes: 'Stretch: kāna + present vs ammā … fa-, balanced views, a family example with fa-aṣbaḥnā, a concession, law … la- with a relative clause.',
      modelFoot: 'Stretch: past vs present, min nāḥiya …, an example, ṣaḥīḥun anna … ghayra anna and law … la- — all of Topic B.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'حَيَاتِي الشَّخْصِيَّةُ', aim: 'one full sentence per question',
      qs: [
        { q: 'عَرِّفْنَا بِنَفْسِكَ.', en: 'Introduce yourself.', start: 'اسْمِي … عُمْرِي … أَنَا …', model: 'اسْمِي آدَمُ، وَعُمْرِي خَمْسَ عَشْرَةَ سَنَةً، وَأَنَا بِرِيطَانِيٌّ.', modelEn: 'My name is Adam, I am fifteen and I am British.' },
        { q: 'صِفْ أَحَدَ أَفْرَادِ أُسْرَتِكَ.', en: 'Describe a family member.', start: '… طَوِيلٌ / قَصِيرَةٌ … وَهُوَ / هِيَ …', model: 'أُخْتِي قَصِيرَةٌ، وَشَعْرُهَا بُنِّيٌّ، وَهِيَ ذَكِيَّةٌ جِدًّا.', modelEn: 'My sister is short with brown hair, and she is very clever.' },
        { q: 'مَاذَا يُوجَدُ فِي غُرْفَتِكَ؟', en: 'What is in your room?', start: 'يُوجَدُ … وَتُوجَدُ …', model: 'يُوجَدُ سَرِيرٌ وَمَكْتَبٌ، وَتُوجَدُ خِزَانَةٌ بَيْضَاءُ.', modelEn: 'There is a bed and a desk, and a white wardrobe.' },
        { q: 'مَا مَلَابِسُكَ المُفَضَّلَةُ؟', en: 'What are your favourite clothes?', start: 'أُحِبُّ … لِأَنَّ …', model: 'أُحِبُّ سُتْرَتِيَ الزَّرْقَاءَ، لِأَنَّهَا مُرِيحَةٌ.', modelEn: 'I love my blue jacket, because it is comfortable.' },
        { q: 'مَاذَا تَفْعَلُ فِي نِهَايَةِ الأُسْبُوعِ؟', en: 'What do you do at the weekend?', start: 'أَلْعَبُ … / أَزُورُ …', model: 'أَلْعَبُ كُرَةَ القَدَمِ، وَأَزُورُ جَدِّي يَوْمَ الأَحَدِ.', modelEn: 'I play football and visit my grandfather on Sundays.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + correct agreement = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'أَنَا وَعَالَمِي', aim: 'two or three sentences, mixing time frames',
      qs: [
        { q: 'كَيْفَ تَعَرَّفْتَ عَلَى صَدِيقِكَ المُفَضَّلِ؟ صِفْهُ.', en: 'How did you meet your best friend? Describe him.', start: 'تَعَرَّفْتُ عَلَيْهِ عِنْدَمَا … هُوَ …', model: 'تَعَرَّفْتُ عَلَيْهِ عِنْدَمَا انْضَمَمْنَا إِلَى فَرِيقِ كُرَةِ القَدَمِ، وَهُوَ طَوِيلٌ وَمَرِحٌ وَكَرِيمٌ جِدًّا.', modelEn: 'I met him when we joined the football team; he is tall, funny and very generous.' },
        { q: 'صِفْ بَيْتَكَ، وَمَا الَّذِي تُرِيدُ أَنْ تُغَيِّرَهُ؟', en: 'Describe your home and what you would change.', start: 'بَيْتُنَا … لٰكِنْ أُرِيدُ أَنْ …', model: 'بَيْتُنَا مُرِيحٌ وَفِيهِ حَدِيقَةٌ صَغِيرَةٌ، لٰكِنْ أُرِيدُ أَنْ أُغَيِّرَ لَوْنَ غُرْفَتِي، لِأَنَّهُ مُمِلٌّ.', modelEn: 'Our house is comfortable with a small garden, but I want to change my room’s colour because it’s boring.' },
        { q: 'هَلْ تُحِبُّ التَّسَوُّقَ؟ صِفْ آخِرَ شَيْءٍ اشْتَرَيْتَهُ.', en: 'Do you like shopping? Describe the last thing you bought.', start: '… اشْتَرَيْتُ … بِـ… وَكَانَ …', model: 'لَا كَثِيرًا، لٰكِنِّي اشْتَرَيْتُ حِذَاءً رِيَاضِيًّا أَبْيَضَ فِي التَّخْفِيضَاتِ، وَكَانَ أَرْخَصَ بِعِشْرِينَ جُنَيْهًا.', modelEn: 'Not much, but I bought white trainers in the sales — twenty pounds cheaper.' },
        { q: 'كَيْفَ تَقْضِي وَقْتَ فَرَاغِكَ؟ وَلِمَاذَا؟', en: 'How do you spend free time, and why?', start: 'أَقْضِي … لِأَنَّ … بِالإِضَافَةِ إِلَى ذٰلِكَ …', model: 'أَقْضِيهِ فِي الرَّسْمِ لِأَنَّهُ يُرِيحُنِي، وَبِالإِضَافَةِ إِلَى ذٰلِكَ أَسْبَحُ مَرَّتَيْنِ فِي الأُسْبُوعِ.', modelEn: 'I spend it drawing because it relaxes me, and in addition I swim twice a week.' },
        { q: 'صِفْ مُنَاسَبَةً حَضَرْتَهَا مُؤَخَّرًا.', en: 'Describe an occasion you went to recently.', start: 'حَضَرْتُ … أَوَّلًا … ثُمَّ …', model: 'حَضَرْتُ زِفَافَ ابْنِ خَالِي؛ أَوَّلًا رَقَصْنَا الدَّبْكَةَ، ثُمَّ تَعَشَّيْنَا، وَأَخِيرًا أَخَذْنَا صُوَرًا مَعَ العَرُوسَيْنِ.', modelEn: 'I went to my cousin’s wedding: first we danced dabke, then had dinner, and finally took photos with the couple.' },
      ],
      foot: 'Develop: two or three sentences — description, a reason, a past event with sequencing, and linking words.',
      modelFoot: 'Description + reason + a sequenced past detail = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الحَيَاةُ الشَّخْصِيَّةُ وَالمُجْتَمَعُ', aim: 'a developed answer: opinion, comparison, concession and a conditional',
      qs: [
        { q: 'هَلْ تُحَدِّدُ المَلَابِسُ وَالمَظْهَرُ هُوِيَّتَنَا؟', en: 'Do clothes and appearance define our identity?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ المَلَابِسَ تُعَبِّرُ عَنْ ذَوْقِنَا، غَيْرَ أَنَّ هُوِيَّتَنَا الحَقِيقِيَّةَ فِي قِيَمِنَا وَطَرِيقَةِ تَعَامُلِنَا مَعَ النَّاسِ.', modelEn: 'It is true clothes express our taste, but our real identity lies in our values and how we treat people.' },
        { q: 'مَا الفَرْقُ بَيْنَ الصَّدَاقَةِ فِي الطُّفُولَةِ وَالصَّدَاقَةِ الآنَ؟', en: 'How does childhood friendship differ from friendship now?', start: 'كُنَّا … أَمَّا الآنَ فَـ…', model: 'كُنَّا نَخْتَارُ أَصْدِقَاءَنَا لِأَنَّهُمْ يَلْعَبُونَ مَعَنَا، أَمَّا الآنَ فَنَخْتَارُهُمْ لِأَنَّهُمْ يَفْهَمُونَنَا وَيُشَارِكُونَنَا القِيَمَ نَفْسَهَا.', modelEn: 'We used to choose friends because they played with us; now we choose them because they understand us and share our values.' },
        { q: 'هَلِ البَيْتُ الكَبِيرُ يَجْعَلُ الأُسْرَةَ أَسْعَدَ؟', en: 'Does a big house make a family happier?', start: 'لَا أَظُنُّ ذٰلِكَ، لِأَنَّ … فَمَثَلًا …', model: 'لَا أَظُنُّ ذٰلِكَ، لِأَنَّ السَّعَادَةَ فِي العَلَاقَاتِ لَا فِي الغُرَفِ؛ فَمَثَلًا بَيْتُ جَدَّتِي صَغِيرٌ، لٰكِنَّهُ أَدْفَأُ مَكَانٍ أَعْرِفُهُ.', modelEn: 'I don’t think so, because happiness lies in relationships, not rooms — my grandmother’s house is small but the warmest place I know.' },
        { q: 'صِفْ هِوَايَةً غَيَّرَتْ حَيَاتَكَ.', en: 'Describe a hobby that changed your life.', start: 'عِنْدَمَا بَدَأْتُ … تَغَيَّرَ … فَأَصْبَحْتُ …', model: 'عِنْدَمَا بَدَأْتُ تَعَلُّمَ العُودِ، تَغَيَّرَ رُوتِينِي كُلُّهُ، فَأَصْبَحْتُ أَنَامُ مُبَكِّرًا لِأَتَدَرَّبَ قَبْلَ المَدْرَسَةِ.', modelEn: 'When I started learning the oud, my whole routine changed — I now sleep early to practise before school.' },
        { q: 'لَوْ نَظَّمْتَ احْتِفَالًا لِعَائِلَتِكَ الكَبِيرَةِ، كَيْفَ يَكُونُ؟', en: 'If you organised a celebration for your extended family, what would it be like?', start: 'لَوْ نَظَّمْتُ …، لَـ… وَلَـ…', model: 'لَوْ نَظَّمْتُ احْتِفَالًا، لَجَمَعْتُ الأَقَارِبَ مِنْ كُلِّ البُلْدَانِ فِي قَرْيَةِ أَجْدَادِي، وَلَطَلَبْتُ مِنْ كُلِّ جِيلٍ أَنْ يَحْكِيَ قِصَّةً.', modelEn: 'If I organised one, I would gather relatives from every country in my grandparents’ village and ask each generation to tell a story.' },
      ],
      foot: 'Stretch: a concession, kunnā + present vs ammā … fa-, a superlative (adfaʾu makān), ʿindamā … fa-aṣbaḥtu, law … la- with ṭalabtu … an.',
      modelFoot: 'Stretch: ṣaḥīḥun anna … ghayra anna, past vs present, an example, a superlative, law … la- — the whole of Topic B.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I answered every role-play task in a full sentence.' },
    { route: 'core', text: 'Adjectives, colours and numbers agreed.' },
    { route: 'develop', text: 'I used past, present AND future.' },
    { route: 'develop', text: 'I invited / declined politely and gave reasons.' },
    { route: 'stretch', text: 'I compared past and present, conceded and used law … la-.' },
  ],
};
speak.RP[1].tasks[0].help = 'أُرِيدُ هَدِيَّةً لِأُخْتِي، لِأَنَّ …';
speak.RP[3].tasks[0].help = 'كَانَتِ العَائِلَاتُ … أَمَّا اليَوْمَ فَيَعِيشُ …';
speak.RP[3].tasks[2].help = 'فِي عَائِلَتِي مَثَلًا … فَأَصْبَحْنَا …';
speak.RP[3].tasks[4].help = 'لَوْ وَضَعْتُ قَانُونًا، لَجَعَلْتُ …';
speak.CONV[1].qs[2].start = '… اشْتَرَيْتُ … وَكَانَ أَرْخَصَ …';
speak.CONV[2].qs[1].start = 'كُنَّا … أَمَّا الآنَ فَنَخْتَارُهُمْ …';
speak.CONV[2].qs[3].start = 'عِنْدَمَا بَدَأْتُ … تَغَيَّرَ … فَأَصْبَحْتُ …';
speak.CONV[2].qs[4].start = 'لَوْ نَظَّمْتُ …، لَجَمَعْتُ … وَلَطَلَبْتُ …';
speak.words[0] = w(1, 'أَنَا بِرِيطَانِيٌّ وَأَصْلِي مِنْ مِصْرَ', 'I am British, from an Egyptian family', [['f.', 'أَنَا بِرِيطَانِيَّةٌ']], { tag: 'L01 identity' });
speak.words[1] = w(2, 'عِنْدِي أُخْتَانِ', 'I have two sisters', [['brothers', 'أَخَوَانِ'], ['cousin', 'ابْنُ عَمِّي']], { tag: 'L02 family · dual' });
speak.words[2] = w(3, 'لَيْسَ صَارِمًا، بَلْ لَطِيفٌ', 'he isn’t strict, but kind', [['she', 'لَيْسَتْ'], ['I', 'لَسْتُ']], { tag: 'L03 personality' });
speak.words[7] = w(8, 'أَسْتَطِيعُ أَنْ أَسْبَحَ', 'I can swim', [['not', 'لَا أَسْتَطِيعُ أَنْ أَعْزِفَ']], { tag: 'L08 hobbies' });
speak.words[8] = w(9, 'أَدْعُوكَ إِلَى حَفْلَتِي', 'I invite you to my party', [['f.', 'أَدْعُوكِ'], ['pl.', 'أَدْعُوكُمْ']], { tag: 'L09 invitations' });
speak.words[9] = w(10, 'آسِفٌ، لَا أَسْتَطِيعُ أَنْ آتِيَ', 'sorry, I can’t come', [['f.', 'آسِفَةٌ']], { tag: 'L09 declining' });

const Q2_CORE = `عَزِيزِي مَالِكٌ،
كَيْفَ حَالُكَ؟ أَدْعُوكَ إِلَى حَفْلَةِ عِيدِ مِيلَادِي السَّادِسَ عَشَرَ يَوْمَ السَّبْتِ فِي السَّاعَةِ الخَامِسَةِ. الحَفْلَةُ فِي بَيْتِنَا الجَدِيدِ، وَهُوَ بِجَانِبِ المَكْتَبَةِ العَامَّةِ. سَيَأْتِي أَصْدِقَائِي مِنَ المَدْرَسَةِ وَأَوْلَادُ عَمِّي أَيْضًا. سَنَأْكُلُ البِيتْزَا، ثُمَّ سَنَلْعَبُ كُرَةَ القَدَمِ فِي الحَدِيقَةِ. أَمْسِ اشْتَرَيْتُ قَمِيصًا أَزْرَقَ جَدِيدًا لِلْحَفْلَةِ. لَا تُحْضِرْ هَدِيَّةً، أُرِيدُ أَنْ تَأْتِيَ فَقَطْ! إِذَا لَمْ تَسْتَطِعْ، فَاتَّصِلْ بِي.
مَعَ السَّلَامَةِ،
يُوسُفُ`;
const Q2_FULL = `عَزِيزِي مَالِكٌ،
تَحِيَّةً طَيِّبَةً، وَبَعْدُ، فَيُسْعِدُنِي أَنْ أَدْعُوَكَ إِلَى حَفْلَةِ عِيدِ مِيلَادِيَ السَّادِسَ عَشَرَ، يَوْمَ السَّبْتِ القَادِمِ فِي السَّاعَةِ الخَامِسَةِ مَسَاءً. سَتَكُونُ الحَفْلَةُ فِي بَيْتِنَا الجَدِيدِ، الَّذِي يَقَعُ بِجَانِبِ المَكْتَبَةِ العَامَّةِ، وَفِيهِ حَدِيقَةٌ وَاسِعَةٌ تَكْفِي لِمُبَارَاةٍ صَغِيرَةٍ! سَيَحْضُرُ زُمَلَاؤُنَا فِي الصَّفِّ، بِالإِضَافَةِ إِلَى أَوْلَادِ عَمِّي القَادِمِينَ مِنْ لِيدْزَ. أَمْسِ قَضَيْتُ اليَوْمَ مَعَ أُمِّي فِي التَّسَوُّقِ، فَاشْتَرَيْنَا الزِّينَةَ وَالأَطْبَاقَ، وَاخْتَرْتُ قَمِيصًا أَزْرَقَ غَامِقًا لِلْحَفْلَةِ. أَرْجُو أَلَّا تُحْضِرَ هَدِيَّةً، فَحُضُورُكَ يَكْفِينِي، وَإِذَا لَمْ تَسْتَطِعِ المَجِيءَ، فَأَخْبِرْنِي قَبْلَ يَوْمِ الخَمِيسِ.
مَعَ أَطْيَبِ التَّحِيَّاتِ،
يُوسُفُ`;
const Q3A_CORE = `اسْمِي سَلْمَى، وَعُمْرِي خَمْسَ عَشْرَةَ سَنَةً. أَنَا بِرِيطَانِيَّةٌ، وَأَصْلِي مِنَ السُّودَانِ. أَنَا قَصِيرَةٌ، وَشَعْرِي أَسْوَدُ طَوِيلٌ. أَنَا هَادِئَةٌ وَمُجْتَهِدَةٌ، لٰكِنِّي مَرِحَةٌ مَعَ أَصْدِقَائِي. يَقُولُ أَصْدِقَائِي إِنِّي صَبُورَةٌ وَكَرِيمَةٌ.
أَسْكُنُ مَعَ أُسْرَتِي فِي شَقَّةٍ فِي الطَّابِقِ الثَّالِثِ. عِنْدِي أَخَوَانِ وَأُخْتٌ صَغِيرَةٌ. أُشَارِكُ غُرْفَتِي مَعَ أُخْتِي، وَغُرْفَتُنَا وَرْدِيَّةٌ، فِيهَا سَرِيرَانِ وَمَكْتَبٌ أَبْيَضُ. أُحِبُّ القِرَاءَةَ وَالرَّسْمَ، وَأَلْعَبُ كُرَةَ السَّلَّةِ مَرَّتَيْنِ فِي الأُسْبُوعِ.
فِي الصَّيْفِ المَاضِي سَافَرْتُ مَعَ أُسْرَتِي إِلَى الخُرْطُومِ لِحُضُورِ زِفَافِ خَالَتِي. أَوَّلًا اشْتَرَيْتُ فُسْتَانًا أَخْضَرَ جَمِيلًا، ثُمَّ سَافَرْنَا بِالطَّائِرَةِ. فِي الزِّفَافِ رَقَصْنَا وَأَكَلْنَا كَثِيرًا، وَتَعَرَّفْتُ عَلَى أَقَارِبَ جُدُدٍ. كَانَتْ أَجْمَلَ رِحْلَةٍ فِي حَيَاتِي.
فِي رَأْيِي، الأُسْرَةُ أَهَمُّ شَيْءٍ فِي الحَيَاةِ. فِي المُسْتَقْبَلِ أُرِيدُ أَنْ أَدْرُسَ الفَنَّ، وَسَأَزُورُ السُّودَانَ مَرَّةً أُخْرَى، لِأَنِّي أُحِبُّ جَدَّتِي كَثِيرًا.`;
const Q3A_FULL = `لَوْ طَلَبَ مِنِّي أَحَدٌ أَنْ أَصِفَ نَفْسِي بِثَلَاثِ كَلِمَاتٍ، لَقُلْتُ: بِنْتٌ، وَأُخْتٌ، وَفَنَّانَةٌ. اسْمِي سَلْمَى، وَأَنَا بِرِيطَانِيَّةٌ مِنْ أَصْلٍ سُودَانِيٍّ، أَعِيشُ مَعَ وَالِدَيَّ وَإِخْوَتِي الثَّلَاثَةِ فِي شَقَّةٍ صَغِيرَةٍ لٰكِنَّهَا مَلِيئَةٌ بِالضَّحِكِ وَرَائِحَةِ القَهْوَةِ السُّودَانِيَّةِ.
أُشَارِكُ غُرْفَتِي مَعَ أُخْتِي الصَّغِيرَةِ، وَقَدْ دَهَنَّاهَا مَعًا بِاللَّوْنِ الوَرْدِيِّ الفَاتِحِ، وَعَلَّقْنَا عَلَى جُدْرَانِهَا لَوْحَاتٍ رَسَمْتُهَا بِنَفْسِي. أَمَّا وَقْتُ فَرَاغِي فَأَقْضِيهِ بَيْنَ الرَّسْمِ وَكُرَةِ السَّلَّةِ، لِأَنَّ الأَوَّلَ يُرِيحُ عَقْلِي، وَالثَّانِيَةَ تُرِيحُ جِسْمِي، وَأَلْعَبُهَا مَعَ فَرِيقِ المَدْرَسَةِ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ.
أَجْمَلُ ذِكْرَى عِنْدِي هِيَ زِفَافُ خَالَتِي فِي الخُرْطُومِ فِي الصَّيْفِ المَاضِي. فَقَدْ رَأَيْتُ جَدَّتِي لِأَوَّلِ مَرَّةٍ مُنْذُ خَمْسِ سَنَوَاتٍ، وَعَلَّمَتْنِي أَغَانِيَ قَدِيمَةً، وَرَقَصْنَا حَتَّى الفَجْرِ تَحْتَ النُّجُومِ، وَلَبِسْتُ فُسْتَانًا أَخْضَرَ خَاطَتْهُ لِي بِيَدَيْهَا.
صَحِيحٌ أَنِّي أَعِيشُ بَيْنَ ثَقَافَتَيْنِ، غَيْرَ أَنِّي لَا أَشْعُرُ بِالحَيْرَةِ، بَلْ بِالغِنَى. وَفِي المُسْتَقْبَلِ سَأَدْرُسُ الفُنُونَ، وَأَحْلُمُ بِأَنْ أُقِيمَ مَعْرِضًا يَجْمَعُ أَلْوَانَ الخُرْطُومِ وَسَمَاءَ لَنْدَنَ.`;
const Q3B_FULL = `تَغَيَّرَتِ الحَيَاةُ العَائِلِيَّةُ كَثِيرًا فِي جِيلٍ وَاحِدٍ. فَالعَائِلَةُ الكَبِيرَةُ الَّتِي كَانَتْ تَعِيشُ فِي بَيْتٍ وَاحِدٍ، وَتَأْكُلُ مِنْ صَحْنٍ وَاحِدٍ، أَصْبَحَتْ مُوَزَّعَةً بَيْنَ مُدُنٍ وَبُلْدَانٍ، يَتَوَاصَلُ أَفْرَادُهَا عَبْرَ الهَوَاتِفِ، وَقَدْ لَا يَلْتَقُونَ إِلَّا مَرَّةً فِي السَّنَةِ.
فِي المَاضِي كَانَ الأَجْدَادُ يُرَبُّونَ الأَحْفَادَ، وَكَانَتِ المُنَاسَبَاتُ تَجْمَعُ الجَمِيعَ أَيَّامًا طَوِيلَةً، أَمَّا اليَوْمَ فَيَعْمَلُ الوَالِدَانِ سَاعَاتٍ طَوِيلَةً، وَيَقْضِي الأَبْنَاءُ وَقْتَهُمْ فِي غُرَفِهِمْ أَمَامَ الشَّاشَاتِ، حَتَّى إِنَّهُمْ يُرْسِلُونَ الرَّسَائِلَ لِبَعْضِهِمْ مِنْ غُرْفَةٍ إِلَى غُرْفَةٍ!
لَاحَظْتُ ذٰلِكَ فِي أُسْرَتِي؛ فَعِنْدَمَا انْتَقَلَتْ جَدَّتِي لِتَعِيشَ مَعَنَا فِي السَّنَةِ المَاضِيَةِ، تَغَيَّرَ البَيْتُ كُلُّهُ: أَصْبَحْنَا نَتَعَشَّى مَعًا كُلَّ مَسَاءٍ، وَنَسْمَعُ قِصَصَهَا عَنْ طُفُولَتِهَا، وَتَعَلَّمْتُ مِنْهَا الطَّبْخَ وَالصَّبْرَ، وَأَصْبَحَ أَخِي يَتْرُكُ هَاتِفَهُ لِيَلْعَبَ مَعَهَا الشِّطْرَنْجَ.
صَحِيحٌ أَنَّ الحَيَاةَ الحَدِيثَةَ أَعْطَتِ الشَّبَابَ حُرِّيَّةً وَفُرَصًا أَكْثَرَ، غَيْرَ أَنَّهَا أَخَذَتْ مِنَّا جُزْءًا مِنْ دِفْءِ العَائِلَةِ. وَلَوْ خَصَّصَتْ كُلُّ أُسْرَةٍ وَقْتًا يَوْمِيًّا تَجْتَمِعُ فِيهِ بِلَا شَاشَاتٍ، لَاسْتَعَادَتْ كَثِيرًا مِمَّا فَقَدَتْهُ.`;

const write = {
  ...base,
  focus: 'A full Paper 4 mock on the whole of Topic B: a personal profile form, an invitation email, and an extended piece about who you are or about how family life is changing.',
  lift: [
    { ar: 'يُسْعِدُنِي أَنْ أَدْعُوَكَ إِلَى …', en: 'I am delighted to invite you to …' },
    { ar: 'بَيْتُنَا الَّذِي يَقَعُ بِجَانِبِ …', en: 'our house, which is next to …' },
    { ar: 'أَرْجُو أَلَّا تُحْضِرَ هَدِيَّةً', en: 'please don’t bring a present' },
  ],
  checkTip: 'Check every Topic B structure you use: gender (nisba, colours, personality), the dual, iḍāfa, -hu / -hā, yūjadu / tūjadu, prices and comparatives, an / allā + verb in -a, sequencing and polite formulae.',
  FORM: {
    title: 'Pen-friend club profile', ar: 'مَلَفُّ نَادِي المُرَاسَلَةِ',
    fields: [
      { core: true, ar: 'الاسْمُ وَالعُمْرُ وَالجِنْسِيَّةُ', en: 'Name, age and nationality', model: 'سَلْمَى، خَمْسَ عَشْرَةَ سَنَةً، بِرِيطَانِيَّةٌ', modelEn: 'Salma, fifteen, British' },
      { core: true, ar: 'أَفْرَادُ الأُسْرَةِ', en: 'Family members', model: 'وَالِدَايَ وَأَخَوَانِ وَأُخْتٌ', modelEn: 'my parents, two brothers and a sister' },
      { core: true, ar: 'صِفَتَانِ لِشَكْلِكَ', en: 'Two words for your looks', model: 'قَصِيرَةٌ، شَعْرِي أَسْوَدُ', modelEn: 'short, black hair' },
      { core: true, ar: 'صِفَتَانِ لِشَخْصِيَّتِكَ', en: 'Two words for your personality', model: 'هَادِئَةٌ وَمَرِحَةٌ', modelEn: 'calm and cheerful' },
      { core: true, ar: 'لَوْنُكَ المُفَضَّلُ', en: 'Your favourite colour', model: 'الأَخْضَرُ', modelEn: 'green' },
      { core: true, ar: 'هِوَايَتَانِ', en: 'Two hobbies', model: 'الرَّسْمُ وَكُرَةُ السَّلَّةِ', modelEn: 'drawing and basketball' },
      { ar: 'وَصْفُ غُرْفَتِكَ', en: 'A description of your room', model: 'وَرْدِيَّةٌ، فِيهَا سَرِيرَانِ', modelEn: 'pink, with two beds' },
      { ar: 'جُمْلَةٌ: أَجْمَلُ مُنَاسَبَةٍ حَضَرْتَهَا', en: 'ONE sentence: the best occasion you have attended', model: 'أَجْمَلُ مُنَاسَبَةٍ كَانَتْ زِفَافَ خَالَتِي فِي الخُرْطُومِ فِي الصَّيْفِ المَاضِي.', modelEn: 'The best occasion was my aunt’s wedding in Khartoum last summer.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full past sentence. Every box recycles a Topic B lesson.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. A girl’s model (biriṭāniyya, qaṣīra, hādiʾa); box 2 and box 7 use duals.',
  },
  Q2: {
    short: 'an invitation email', title: 'Question 2: an invitation to my party', ar: 'رِسَالَةُ دَعْوَةٍ',
    task: 'You are having a birthday party. Write an email in Arabic to your friend of about 80–90 words. You must include: • the day, time and place (describe your home) • who will come and what you will do • what you did yesterday to prepare • a request, and what to do if your friend cannot come.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'A description with a preposition and a colour.', 'Past AND future sentences.', 'A polite request (allā / arjū an …).'],
    phrases: [['أَدْعُوكَ إِلَى … يَوْمَ … فِي السَّاعَةِ …', 'I invite you to … on … at …'], ['بَيْتُنَا بِجَانِبِ …', 'our house is next to …'], ['أَمْسِ اشْتَرَيْتُ …', 'yesterday I bought …'], ['إِذَا لَمْ تَسْتَطِعْ، فَأَخْبِرْنِي', 'if you can’t, let me know']],
    rubric: [
      ['task', 'عِنْدَكَ حَفْلَةُ عِيدِ مِيلَادٍ. اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ (٨٠–٩٠ كَلِمَةً).', 'You are having a birthday party: write to your friend (80–90 words).'],
      ['1', 'مَتَى وَأَيْنَ الحَفْلَةُ؟ صِفْ بَيْتَكَ.', 'Day, time, place; describe your home'],
      ['2', 'مَنْ سَيَحْضُرُ؟ وَمَاذَا سَتَفْعَلُونَ؟', 'Who will come; what you will do'],
      ['3', 'مَاذَا فَعَلْتَ أَمْسِ لِتَسْتَعِدَّ؟', 'What you did yesterday to prepare'],
      ['4', 'اطْلُبْ مِنْهُ طَلَبًا. وَمَاذَا يَفْعَلُ إِذَا لَمْ يَسْتَطِعِ الحُضُورَ؟', 'A request; what to do if he can’t come'],
    ],
    qwords: 'مَتَى (when) · أَيْنَ (where) · صِفْ (describe) · مَنْ (who) · مَاذَا (what) · اطْلُبْ (ask) — bullet 2 is FUTURE, bullet 3 is PAST',
    frames: [
      ['start', 'عَزِيزِي ______ ، كَيْفَ حَالُكَ؟', 'Dear …, how are you?'],
      ['1', 'أَدْعُوكَ إِلَى حَفْلَتِي يَوْمَ ______ فِي السَّاعَةِ ______ . بَيْتُنَا بِجَانِبِ ______ .', 'I invite you to my party on … at … Our house is next to …'],
      ['2', 'سَيَأْتِي ______ . سَنَأْكُلُ ______ ، ثُمَّ ______ .', '… will come. We will eat …, then …'],
      ['3', 'أَمْسِ اشْتَرَيْتُ ______ ______ لِلْحَفْلَةِ.', 'Yesterday I bought a … … for the party.'],
      ['4', 'لَا تُحْضِرْ ______ . إِذَا لَمْ تَسْتَطِعْ، فَاتَّصِلْ بِي.', 'Don’t bring … If you can’t, call me.'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Dear Malik, how are you? I’m inviting you to my sixteenth birthday party on Saturday at five. The party is at our new house, next to the public library. My school friends and my cousins will come too. We’ll eat pizza, then play football in the garden. Yesterday I bought a new blue shirt for the party. Don’t bring a present — I just want you to come! If you can’t, call me. Goodbye, Yusuf.”',
      find: ['أَدْعُوكَ إِلَى', 'بِجَانِبِ المَكْتَبَةِ', 'قَمِيصًا أَزْرَقَ', 'إِذَا لَمْ تَسْتَطِعْ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Malik, greetings. I am delighted to invite you to my sixteenth birthday party next Saturday at 5 p.m. It will be at our new house, which is next to the public library and has a garden big enough for a little match! Our classmates will come, as well as my cousins coming from Leeds. Yesterday I spent the day shopping with my mum: we bought decorations and plates, and I chose a dark blue shirt for the party. Please don’t bring a present — your being there is enough, and if you can’t come, let me know before Thursday. Best wishes, Yusuf.”',
      find: ['يُسْعِدُنِي أَنْ أَدْعُوَكَ', 'الَّذِي يَقَعُ بِجَانِبِ', 'بِالإِضَافَةِ إِلَى', 'أَرْجُو أَلَّا تُحْضِرَ'],
    },
  },
  Q3: {
    a: { title: 'هٰذِهِ أَنَا', en: 'This is me', bullets: 'مَعْلُومَاتُكَ وَشَكْلُكَ وَشَخْصِيَّتُكَ · أُسْرَتُكَ وَبَيْتُكَ وَهِوَايَاتُكَ · أَجْمَلُ ذِكْرَى · خُطَطُكَ وَأَحْلَامُكَ', bulletsEn: 'Your details, looks and personality · family, home and hobbies · your best memory · your plans and dreams' },
    b: { title: 'الحَيَاةُ العَائِلِيَّةُ تَتَغَيَّرُ', en: 'Family life is changing', bullets: 'كَيْفَ تَغَيَّرَتِ العَائِلَةُ؟ · المَاضِي وَالحَاضِرُ · تَجْرِبَةٌ مِنْ أُسْرَتِكَ · رَأْيُكَ وَاقْتِرَاحُكَ', bulletsEn: 'How the family has changed · past and present · an experience from your family · your opinion and suggestion' },
    plan: [
      'Who you are — identity, looks, personality (TB-L01, L03); agreement for a girl / a boy.',
      'Your world — family (dual, iḍāfa), home and room (yūjadu, colours), hobbies (TB-L02, L04–L08).',
      'Best memory — an occasion in the past with sequencing (TB-L09).',
      'Future + opinion — sa- / aḥlumu bi-an …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'أُشَارِكُ غُرْفَتِي مَعَ أُخْتِي الصَّغِيرَةِ.', en: 'present: I share my room with my little sister.' },
      { ar: 'أَوَّلًا اشْتَرَيْتُ فُسْتَانًا، ثُمَّ سَافَرْنَا.', en: 'past: first I bought a dress, then we travelled.' },
      { ar: 'سَأَدْرُسُ الفَنَّ فِي الجَامِعَةِ.', en: 'future: I will study art at university.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Salma, 15, British with Sudanese roots; short, long black hair; calm and hard-working but fun with friends, who say I’m patient and generous → a third-floor flat; two brothers and a little sister; I share a pink room with two beds and a white desk; reading, drawing, basketball twice a week → last summer to Khartoum for my aunt’s wedding: first a pretty green dress, then the flight; dancing, eating and new relatives — the best trip of my life → family matters most; I want to study art and will visit Sudan again because I love my grandmother.', find: ['أَنَا بِرِيطَانِيَّةٌ', 'عِنْدِي أَخَوَانِ', 'أَوَّلًا … ثُمَّ', 'سَأَزُورُ'], notes: 'Core model (a girl writing): every Topic B area — nisba, appearance, personality, home, a dual, colours, hobbies with frequency, a sequenced occasion, an opinion and future.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'If asked to describe myself in three words: daughter, sister, artist; Salma, British of Sudanese origin, living with my parents and three siblings in a small flat full of laughter and the smell of Sudanese coffee → I share my room with my little sister; we painted it light pink together and hung pictures I drew; as for free time, drawing and basketball — the first rests my mind, the second my body — school team three times a week → my best memory: my aunt’s wedding in Khartoum last summer; I saw my grandmother for the first time in five years; she taught me old songs and we danced till dawn under the stars, and I wore a green dress she sewed for me by hand → it is true I live between two cultures, but I feel not confusion but richness; I’ll study art and dream of an exhibition joining Khartoum’s colours and London’s sky.', find: ['لَوْ طَلَبَ … لَقُلْتُ', 'أَمَّا وَقْتُ فَرَاغِي فَأَقْضِيهِ', 'لِأَوَّلِ مَرَّةٍ مُنْذُ', 'لَا … بِالحَيْرَةِ، بَلْ'], notes: 'Full-mark model: law … la-, nisba, relative clauses, ammā … fa-, al-awwal / ath-thāniya, a vivid memory, a concession with lā … bal, aḥlumu bi-an.' },
      { which: 'ب', level: 'Full', subtitle: 'family life is changing', text: Q3B_FULL, en: 'Family life has changed within one generation: the big family that lived in one house and ate from one dish is now spread across towns and countries, keeping in touch by phone and perhaps meeting only once a year → in the past grandparents raised grandchildren and occasions gathered everyone for days; as for today, both parents work long hours and children spend their time in their rooms on screens, even messaging each other from room to room! → in my family: when my grandmother moved in last year, the whole house changed — dinner together every evening, her childhood stories, and I learned cooking and patience from her, and my brother now puts down his phone to play chess with her → it is true modern life gave young people more freedom and opportunity, but it took part of the family’s warmth; “if every family set aside daily time together without screens, it would regain much of what it has lost”.', find: ['الَّتِي كَانَتْ تَعِيشُ', 'أَمَّا اليَوْمَ فَيَعْمَلُ', 'عِنْدَمَا انْتَقَلَتْ … تَغَيَّرَ', 'لَوْ خَصَّصَتْ … لَاسْتَعَادَتْ'], notes: 'Full-mark model for the Stretch title: a relative clause with kāna + present, the dual (al-wālidāni), ammā … fa-, ʿindamā … li-taʿīsha, a concession and a conditional with mimmā.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic, using words from each Topic B lesson.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: a description, past and future sentences, a polite request.' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: ammā … fa-, a concession and law … la-.' },
  ],
};

module.exports = { speak, write };
