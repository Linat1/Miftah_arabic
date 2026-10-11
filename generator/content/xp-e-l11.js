'use strict';
/* Exam-practice data · TE-L11 · Topic E Integrated Communication Workshop (origins → languages → customs → festivals → travel → global life; mixed tenses; register; cohesion). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'E', n: 11, short: 'Integrated Communication Workshop', arShort: 'وَرْشَةُ التَّوَاصُلِ المُتَكَامِلِ', fileTitle: 'Topic_E_Integrated_Communication_Workshop', title: 'Topic E Integrated Communication Workshop', ar: 'وَرْشَةُ التَّوَاصُلِ المُتَكَامِلِ لِلْمِحْوَرِ الخَامِسِ', icon: 'FaPeopleGroup', grammar: 'mixed tenses in one answer (kuntu … ammā al-āna fa- … sa-); register (informal ahlan vs formal ḥaḍratuka / yasurrunī); cohesion (awwalan, bi-l-iḍāfati ilā dhālika, maʿa dhālika, li-dhālika, mimmā)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms, mixing all of Topic E: countries and languages, identity, customs and hospitality, faith and national celebrations, travel and exchange, comparing cultures and global life. Move between past, present and future, switch between informal and formal Arabic, and link ideas (أَوَّلًا · بِالإِضَافَةِ إِلَى ذٰلِكَ · مَعَ ذٰلِكَ · لِذٰلِكَ).',
  words: [
    w(1, 'أَوَّلًا · ثُمَّ · أَخِيرًا', 'firstly · then · finally', [['after that', 'بَعْدَ ذٰلِكَ'], ['before that', 'قَبْلَ ذٰلِكَ']], { tag: 'sequence' }),
    w(2, 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'in addition', [['also', 'كَمَا أَنَّ'], ['moreover', 'فَضْلًا عَنْ ذٰلِكَ']], { tag: 'adding' }),
    w(3, 'مَعَ ذٰلِكَ · غَيْرَ أَنَّ', 'nevertheless · however', [['although', 'مَعَ أَنَّ'], ['whereas', 'بَيْنَمَا']], { tag: 'contrast' }),
    w(4, 'لِذٰلِكَ · مِمَّا', 'therefore · which (result)', [['because of', 'بِسَبَبِ'], ['so that', 'لِكَيْ']], { tag: 'cause / result' }),
    w(5, 'كُنَّا نَحْتَفِلُ', 'we used to celebrate', [['now we celebrate', 'الآنَ نَحْتَفِلُ'], ['we will celebrate', 'سَنَحْتَفِلُ']], { tag: 'three tenses' }),
    w(6, 'حَضْرَتُكَ · حَضْرَتُكِ', 'you (formal m. · f.)', [['informal', 'أَنْتَ · أَنْتِ'], ['I am pleased to', 'يَسُرُّنِي أَنْ']], { tag: 'register' }),
    w(7, 'جِنْسِيَّةٌ · لُغَةٌ', 'nationality · language', [['bilingual', 'ثُنَائِيُّ اللُّغَةِ'], ['origin', 'أَصْلٌ']], { tag: 'identity' }),
    w(8, 'عَادَاتٌ · تَقَالِيدُ', 'customs · traditions', [['hospitality', 'الضِّيَافَةُ'], ['manners', 'آدَابٌ']], { tag: 'culture' }),
    w(9, 'عِيدٌ · مِهْرَجَانٌ', 'festival (religious) · festival (event)', [['national day', 'اليَوْمُ الوَطَنِيُّ'], ['is celebrated', 'يُحْتَفَلُ بِهِ']], { tag: 'celebrations' }),
    w(10, 'تَبَادُلٌ ثَقَافِيٌّ', 'a cultural exchange', [['host family', 'العَائِلَةُ المُضِيفَةُ'], ['I travelled', 'سَافَرْتُ']], { tag: 'travel' }),
    w(11, 'مُخْتَلِفٌ لَا أَفْضَلُ', 'different, not better', [['more … than', 'أَكْثَرُ … مِنْ'], ['usually', 'غَالِبًا']], { tag: 'comparison' }),
    w(12, 'لَوْ … لَـ … · إِذَا … فَسَـ …', 'if … would · if … will', [['if I were', 'لَوْ كُنْتُ … لَاخْتَرْتُ'], ['if I go', 'إِذَا سَافَرْتُ فَسَأَزُورُ']], { tag: 'conditions' }),
  ],
  words1: { eyebrow: 'Language bank · cohesion and tenses', title: 'Link it, then time it', ar: 'أَدَوَاتُ الرَّبْطِ وَالأَزْمِنَةُ', notes: 'LANGUAGE BANK (2 min) — the Topic E story in three tenses: كُنَّا نَحْتَفِلُ فِي … أَمَّا الآنَ فَنَحْتَفِلُ هُنَا … وَسَنُسَافِرُ … Link with أَوَّلًا · بِالإِضَافَةِ إِلَى ذٰلِكَ · مَعَ ذٰلِكَ · لِذٰلِكَ. Target: three linkers and three tenses in every developed answer.' },
  words2: { eyebrow: 'Language bank · the Topic E journey and register', title: 'Roots → customs → festivals → the world', ar: 'رِحْلَةُ المِحْوَرِ الخَامِسِ', notes: 'LANGUAGE BANK (2 min) — the examiner may jump from languages to festivals to travel: have one sentence ready for each. Register: with a friend أَهْلًا · كَيْفَ حَالُكَ؟; with an official حَضْرَتُكَ · يَسُرُّنِي أَنْ · شُكْرًا عَلَى وَقْتِكُمْ.' },
  checkCore: 'answered on languages, customs, festivals and travel in full sentences',
  checkDevelop: 'used three tenses and three linking words in one answer',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'International Evening at school', title: 'Role play A — At the International Evening', ar: 'فِي الأُمْسِيَةِ الدُّوَلِيَّةِ', you: 'a student running a stall', them: 'a parent visiting the stalls',
      tasks: [
        { core: true, ex: 'مَسَاءَ الخَيْرِ! لِأَيِّ بَلَدٍ هٰذَا الجَنَاحُ؟', task: 'Name the country.', help: 'هٰذَا الجَنَاحُ لِـ …', model: 'مَسَاءَ النُّورِ! هٰذَا الجَنَاحُ لِلْجَزَائِرِ.', modelEn: 'Good evening! This stall is for Algeria.' },
        { core: true, ex: 'مَا اللُّغَاتُ الَّتِي يَتَكَلَّمُهَا النَّاسُ هُنَاكَ؟', task: 'Name two languages.', help: 'يَتَكَلَّمُونَ … وَ…', model: 'يَتَكَلَّمُونَ العَرَبِيَّةَ وَالأَمَازِيغِيَّةَ، وَكَثِيرٌ مِنْهُمْ يَتَكَلَّمُ الفَرَنْسِيَّةَ.', modelEn: 'Arabic and Amazigh, and many speak French.' },
        { core: true, ex: 'وَمَا هٰذَا الطَّعَامُ؟', task: 'Name and describe a dish.', help: 'هٰذَا … ، وَهُوَ …', model: 'هٰذَا الكُسْكُسُ، وَهُوَ أَكْلَةٌ شَعْبِيَّةٌ لَذِيذَةٌ.', modelEn: 'This is couscous, a delicious traditional dish.' },
        { core: true, ex: 'شُكْرًا! هَلْ عِنْدَكُمْ رَقْصٌ؟', task: 'Say what time the dance is.', help: 'نَعَمْ، فِي السَّاعَةِ …', model: 'نَعَمْ، فِي السَّاعَةِ السَّابِعَةِ عَلَى المَسْرَحِ.', modelEn: 'Yes, at seven on the stage.' },
        { core: true, unexpected: true, ex: 'مَا أَهَمُّ عِيدٍ فِي الجَزَائِرِ؟', task: 'Answer the unexpected question.', help: 'أَهَمُّ عِيدٍ … ، وَ…', model: 'أَهَمُّ عِيدٍ عِيدُ الفِطْرِ، وَالنَّاسُ يَزُورُونَ أَقَارِبَهُمْ فِيهِ.', modelEn: 'Eid al-Fitr — people visit relatives.' },
      ],
      girl: '(answers unchanged for a girl)',
      notes: 'Core: four Topic E themes in one card — countries and languages (L01–L02), food (L04), festivals (L06–L07); li- + a country, a relative clause in the question, fī as-sāʿati as-sābiʿa.',
    },
    {
      id: 'B', level: 'Core+', setting: 'two registers', title: 'Role play B — Telling a friend, then the director', ar: 'مَعَ صَدِيقٍ ثُمَّ مَعَ المُدِيرِ', you: 'a student back from Jordan', them: 'a friend (tasks 1–2), then the director of the Arab cultural centre (tasks 3–5)',
      tasks: [
        { core: true, ex: '(صَدِيقٌ) أَهْلًا! كَيْفَ كَانَتْ رِحْلَتُكَ إِلَى الأُرْدُنِّ؟', task: 'Tell your friend (informal).', help: 'كَانَتْ رَائِعَةً! زُرْتُ …', model: 'كَانَتْ رَائِعَةً! زُرْتُ البَتْرَاءَ وَالبَحْرَ المَيِّتَ.', modelEn: 'Amazing! I visited Petra and the Dead Sea.' },
        { core: true, ex: 'وَالأَكْلُ؟', task: 'Give your opinion (informal).', help: 'الأَكْلُ … لٰكِنَّ …', model: 'الأَكْلُ لَذِيذٌ جِدًّا، لٰكِنَّهُمْ يُعْطُونَكَ كَمِّيَّاتٍ كَبِيرَةً!', modelEn: 'Delicious — but they give you huge portions!' },
        { ex: '(المُدِيرُ) مَسَاءَ الخَيْرِ. سَمِعْتُ أَنَّكَ تُرِيدُ أَنْ تَتَطَوَّعَ مَعَنَا.', task: 'Answer the director formally.', help: 'مَسَاءَ النُّورِ يَا حَضْرَةَ المُدِيرِ. يَسُرُّنِي …', model: 'مَسَاءَ النُّورِ. نَعَمْ، يَسُرُّنِي أَنْ أُسَاعِدَ فِي احْتِفَالِ العِيدِ القَادِمِ.', modelEn: 'Good evening. Yes, I’d be glad to help at the coming Eid celebration.' },
        { ex: 'مَا الَّذِي تَسْتَطِيعُ أَنْ تُقَدِّمَهُ؟', task: 'Offer skills, then ASK politely.', help: 'أَسْتَطِيعُ أَنْ … ؛ هَلْ يُمْكِنُنِي أَنْ …؟', model: 'أَسْتَطِيعُ أَنْ أُتَرْجِمَ لِلضُّيُوفِ وَأُسَاعِدَ فِي التَّنْظِيمِ. هَلْ يُمْكِنُنِي أَنْ أُحْضِرَ صَدِيقًا أَيْضًا؟', modelEn: 'I can interpret for guests and help organise. May I bring a friend too?' },
        { unexpected: true, ex: 'طَبْعًا. لِمَاذَا يُهِمُّكَ هٰذَا العَمَلُ؟', task: 'Answer the unexpected question (reason + future).', help: 'لِأَنَّ … ؛ وَسَـ…', model: 'لِأَنَّ الاحْتِفَالَ يَجْمَعُ النَّاسَ مِنْ ثَقَافَاتٍ مُخْتَلِفَةٍ؛ وَسَأَطْلُبُ مِنْ أُسْرَتِي أَنْ تَطْبُخَ طَبَقًا أُرْدُنِيًّا.', modelEn: 'It brings people of different cultures together — and I’ll ask my family to cook a Jordanian dish.' },
      ],
      girl: 'رِحْلَتُكِ · أَنَّكِ تُرِيدِينَ · تَسْتَطِيعِينَ · يُهِمُّكِ · صَدِيقَةً',
      notes: 'Core+: register switch (ahlan / masāʾa an-nūr … yasurrunī), past travel (L08), food (L04), the CANDIDATE asks formally (hal yumkinunī an …?), a reason + sa- (L06–L07, L10).',
    },
    {
      id: 'C', level: 'Develop', setting: 'a mentoring session', title: 'Role play C — My cultural journey', ar: 'رِحْلَتِي الثَّقَافِيَّةُ', you: 'a Year 12 student', them: 'a mentor from a community organisation',
      tasks: [
        { ex: 'حَدِّثْنِي عَنْ أَصْلِكَ وَلُغَاتِكَ.', task: 'Past → present with linkers.', help: 'وُلِدْتُ فِي … ، وَكُنْتُ … أَمَّا الآنَ فَـ…', model: 'وُلِدْتُ فِي الجَزَائِرِ، وَكُنْتُ أَتَكَلَّمُ العَرَبِيَّةَ وَالفَرَنْسِيَّةَ فَقَطْ، أَمَّا الآنَ فَأَتَكَلَّمُ الإِنْجْلِيزِيَّةَ بِطَلَاقَةٍ أَيْضًا.', modelEn: 'I was born in Algeria and spoke only Arabic and French; now I speak fluent English too.' },
        { ex: 'كَيْفَ تَحْتَفِلُونَ بِالأَعْيَادِ هُنَا؟', task: 'Compare then and now with a passive.', help: 'كُنَّا … أَمَّا هُنَا فَـ… ؛ وَيُحْتَفَلُ …', model: 'كُنَّا نَحْتَفِلُ مَعَ كُلِّ العَائِلَةِ فِي قَسَنْطِينَةَ، أَمَّا هُنَا فَنَحْتَفِلُ مَعَ الجِيرَانِ؛ وَيُحْتَفَلُ بِالعِيدِ فِي حَدِيقَةِ المَدِينَةِ.', modelEn: 'We celebrated with the whole family in Constantine; here with neighbours — Eid is celebrated in the city park.' },
        { ex: 'مَا الشَّيْءُ الَّذِي صَعُبَ عَلَيْكَ فِي البِدَايَةِ؟', task: 'Name a difficulty with its cause and result.', help: 'أَصْعَبُ شَيْءٍ … بِسَبَبِ … ، مِمَّا …', model: 'أَصْعَبُ شَيْءٍ كَانَ اخْتِلَافَ العَادَاتِ بِسَبَبِ اللُّغَةِ وَالطَّقْسِ، مِمَّا جَعَلَنِي أَشْعُرُ بِالوَحْدَةِ أَشْهُرًا.', modelEn: 'The different customs — because of language and weather — which made me feel lonely for months.' },
        { ex: 'وَكَيْفَ تَغَيَّرَ ذٰلِكَ؟', task: 'Narrate a turning point.', help: 'عِنْدَمَا … ، فَـ… ؛ وَمَعَ ذٰلِكَ …', model: 'عِنْدَمَا شَارَكْتُ فِي نَادِي الثَّقَافَاتِ، تَعَرَّفْتُ عَلَى أَصْدِقَاءَ مِنْ عِشْرِينَ بَلَدًا، وَمَعَ ذٰلِكَ لَمْ أَنْسَ جُذُورِي.', modelEn: 'Joining the culture club, I met friends from twenty countries — yet I didn’t forget my roots.' },
        { unexpected: true, ex: 'وَإِذَا سَافَرْتَ إِلَى الجَزَائِرِ هٰذَا الصَّيْفَ؟', task: 'Answer the unexpected question (conditional).', help: 'إِذَا سَافَرْتُ، فَسَـ… لِكَيْ …', model: 'إِذَا سَافَرْتُ، فَسَأَصْطَحِبُ صَدِيقِي الإِنْجْلِيزِيَّ، لِكَيْ يَرَى بِنَفْسِهِ كَرَمَ أَهْلِنَا.', modelEn: 'If I go, I’ll take my English friend so he sees our people’s generosity for himself.' },
      ],
      girl: 'حَدِّثِينِي · أَصْلِكِ · لُغَاتِكِ · عَلَيْكِ · سَافَرْتِ · صَدِيقَتِي الإِنْجْلِيزِيَّةَ · لِكَيْ تَرَى',
      notes: 'Develop: kuntu + present vs ammā al-āna fa- (L01–L02), kunnā naḥtafilu + passive yuḥtafalu (L06–L07), bi-sababi + mimmā (L08), a turning point + wa-maʿa dhālika (L03), idhā … fa-sa- + li-kay (L10).',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a final interview', title: 'Role play D — The youth ambassador scholarship', ar: 'مِنْحَةُ سَفِيرِ الشَّبَابِ', you: 'a scholarship candidate', them: 'the head of the selection panel',
      tasks: [
        { ex: 'لِمَاذَا تَسْتَحِقُّ أَنْ تَكُونَ سَفِيرًا لِلشَّبَابِ؟', task: 'Make a formal, evidenced case.', help: 'يَسُرُّنِي أَنْ … ؛ وَالدَّلِيلُ أَنَّ …', model: 'يَسُرُّنِي أَنْ أَكُونَ هُنَا. أَرَى أَنَّنِي أَجْمَعُ بَيْنَ ثَلَاثِ ثَقَافَاتٍ وَثَلَاثِ لُغَاتٍ؛ وَالدَّلِيلُ أَنَّنِي أَسَّسْتُ نَادِيًا لِلتَّبَادُلِ اللُّغَوِيِّ يَضُمُّ اليَوْمَ أَرْبَعِينَ طَالِبًا.', modelEn: 'I bring together three cultures and three languages — I founded a language-exchange club that now has forty members.' },
        { ex: 'كَيْفَ تَصِفُ هُوِيَّتَكَ؟', task: 'Define identity with laysa … bal.', help: 'هُوِيَّتِي لَيْسَتْ … بَلْ …', model: 'هُوِيَّتِي لَيْسَتْ صُنْدُوقًا وَاحِدًا، بَلْ شَجَرَةٌ جُذُورُهَا فِي الجَزَائِرِ، وَأَغْصَانُهَا فِي بَرِيطَانْيَا، وَثِمَارُهَا لِلْجَمِيعِ.', modelEn: 'Not a single box but a tree: roots in Algeria, branches in Britain, fruit for everyone.' },
        { ex: 'أَلَا تُهَدِّدُ العَوْلَمَةُ هُوِيَّاتِ الشُّعُوبِ؟', task: 'Concede and balance.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ … لِذٰلِكَ …', model: 'صَحِيحٌ أَنَّهَا تَنْشُرُ ثَقَافَةً وَاحِدَةً أَحْيَانًا، غَيْرَ أَنَّهَا تُتِيحُ لَنَا أَيْضًا أَنْ نُعَرِّفَ العَالَمَ بِتُرَاثِنَا؛ لِذٰلِكَ المُهِمُّ أَنْ نَكُونَ مُنْتِجِينَ لِلثَّقَافَةِ لَا مُسْتَهْلِكِينَ فَقَطْ.', modelEn: 'It sometimes spreads one culture, but also lets us share our heritage — so we must produce culture, not just consume it.' },
        { ex: 'مَاذَا سَتَفْعَلُ إِذَا حَصَلْتَ عَلَى المِنْحَةِ؟', task: 'Plan with purpose and a conditional.', help: 'إِذَا حَصَلْتُ عَلَيْهَا، فَسَـ… لِكَيْ …', model: 'إِذَا حَصَلْتُ عَلَيْهَا، فَسَأُنَظِّمُ تَبَادُلًا بَيْنَ مَدْرَسَتِي وَمَدْرَسَةٍ فِي وَهْرَانَ، لِكَيْ يَكْتَشِفَ الطُّلَّابُ أَنَّ مَا يَجْمَعُهُمْ أَكْثَرُ مِمَّا يُفَرِّقُهُمْ.', modelEn: 'I’ll set up an exchange with a school in Oran so students discover that what unites them outweighs what divides them.' },
        { unexpected: true, ex: 'لَوْ لَمْ تَحْصُلْ عَلَيْهَا، هَلْ سَتَتَوَقَّفُ؟', task: 'Answer the unexpected question (law lam … la-).', help: 'لَوْ لَمْ أَحْصُلْ …، لَـ… لٰكِنَّ …', model: 'لَوْ لَمْ أَحْصُلْ عَلَيْهَا، لَبَدَأْتُ بِمَشْرُوعٍ أَصْغَرَ عَلَى الإِنْتَرْنِتِ؛ فَالطَّرِيقُ سَيَكُونُ أَبْطَأَ، لٰكِنَّ الهَدَفَ لَنْ يَتَغَيَّرَ.', modelEn: 'I’d start a smaller online project — slower, but the goal wouldn’t change.' },
      ],
      girl: 'تَسْتَحِقِّينَ · سَفِيرَةً · هُوِيَّتَكِ · سَتَفْعَلِينَ · حَصَلْتِ · تَحْصُلِي · سَتَتَوَقَّفِينَ',
      notes: 'Stretch: formal register (yasurrunī, arā annanī, wa-d-dalīlu anna), an extended metaphor with laysa … bal (L03), a concession + li-dhālika + lā … faqaṭ (L09–L10), idhā … fa-sa- + li-kay + akthar mimmā, law lam … la- with lan.',
      modelFoot: 'Stretch: the whole Topic E journey — identity, languages, globalisation and an exchange plan — in formal Arabic.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'أَنَا وَالعَالَمُ', aim: 'one full sentence per question',
      qs: [
        { q: 'مِنْ أَيْنَ أُسْرَتُكَ؟', en: 'Where is your family from?', start: 'أُسْرَتِي مِنْ …', model: 'أُسْرَتِي مِنَ الجَزَائِرِ.', modelEn: 'Algeria.' },
        { q: 'كَمْ لُغَةً تَتَكَلَّمُ؟', en: 'How many languages do you speak?', start: 'أَتَكَلَّمُ … لُغَاتٍ', model: 'أَتَكَلَّمُ ثَلَاثَ لُغَاتٍ.', modelEn: 'Three.' },
        { q: 'مَا أَكْلَتُكُمُ الشَّعْبِيَّةُ؟', en: 'What is your traditional dish?', start: 'أَكْلَتُنَا الشَّعْبِيَّةُ …', model: 'أَكْلَتُنَا الشَّعْبِيَّةُ الكُسْكُسُ.', modelEn: 'Couscous.' },
        { q: 'مَا عِيدُكَ المُفَضَّلُ؟', en: 'What is your favourite festival?', start: 'عِيدِي المُفَضَّلُ … لِأَنَّ …', model: 'عِيدِيَ المُفَضَّلُ عِيدُ الأَضْحَى، لِأَنَّ العَائِلَةَ تَجْتَمِعُ.', modelEn: 'Eid al-Adha — the family gets together.' },
        { q: 'أَيْنَ تُرِيدُ أَنْ تُسَافِرَ؟', en: 'Where do you want to travel?', start: 'أُرِيدُ أَنْ أُسَافِرَ إِلَى …', model: 'أُرِيدُ أَنْ أُسَافِرَ إِلَى اليَابَانِ.', modelEn: 'Japan.' },
      ],
      foot: 'Core: one full sentence for every question — each comes from a different Topic E lesson. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a reason = a secure Core answer on any Topic E theme.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'ثَقَافَتِي وَالعَالَمُ', aim: 'two or three sentences, with linkers and two or three time frames',
      qs: [
        { q: 'كَيْفَ تَغَيَّرَتْ لُغَاتُكَ مُنْذُ طُفُولَتِكَ؟', en: 'How have your languages changed since childhood?', start: 'كُنْتُ … أَمَّا الآنَ فَـ… وَسَـ…', model: 'كُنْتُ أَتَكَلَّمُ العَرَبِيَّةَ فِي البَيْتِ فَقَطْ، أَمَّا الآنَ فَأَدْرُسُ بِالإِنْجْلِيزِيَّةِ، وَسَأَتَعَلَّمُ الإِسْبَانِيَّةَ فِي الجَامِعَةِ.', modelEn: 'I spoke Arabic only at home; now I study in English, and I’ll learn Spanish at university.' },
        { q: 'صِفْ عَادَةً مِنْ عَادَاتِ الضِّيَافَةِ فِي ثَقَافَتِكَ.', en: 'Describe a hospitality custom in your culture.', start: 'أَوَّلًا … بِالإِضَافَةِ إِلَى ذٰلِكَ …', model: 'أَوَّلًا، نُقَدِّمُ القَهْوَةَ وَالتَّمْرَ لِكُلِّ ضَيْفٍ؛ بِالإِضَافَةِ إِلَى ذٰلِكَ، لَا يَخْرُجُ الضَّيْفُ قَبْلَ أَنْ يَأْكُلَ.', modelEn: 'We offer coffee and dates to every guest; also no guest leaves before eating.' },
        { q: 'حَدِّثْنِي عَنْ رِحْلَةٍ تَعَلَّمْتَ مِنْهَا شَيْئًا.', en: 'Tell me about a trip you learnt from.', start: 'زُرْتُ … ؛ فَتَعَلَّمْتُ … وَمَعَ ذٰلِكَ …', model: 'زُرْتُ المَغْرِبَ فِي تَبَادُلٍ ثَقَافِيٍّ، فَتَعَلَّمْتُ أَنَّ الكَرَمَ لُغَةٌ عَالَمِيَّةٌ، وَمَعَ ذٰلِكَ كَانَتِ اللَّهْجَةُ صَعْبَةً جِدًّا.', modelEn: 'Morocco on an exchange: generosity is a universal language — though the dialect was very hard.' },
        { q: 'قَارِنْ بَيْنَ احْتِفَالٍ هُنَا وَاحْتِفَالٍ فِي بَلَدِ أُسْرَتِكَ.', en: 'Compare a celebration here and in your family’s country.', start: '… أَكْبَرُ مِنْ … بَيْنَمَا …', model: 'العِيدُ فِي الجَزَائِرِ أَكْبَرُ مِنْ هُنَا، بَيْنَمَا يُحْتَفَلُ هُنَا بِلَيْلَةِ الأَلْعَابِ النَّارِيَّةِ فِي الشِّتَاءِ؛ وَكِلَاهُمَا يَجْمَعُ النَّاسَ.', modelEn: 'Eid in Algeria is bigger than here, whereas here Bonfire Night is celebrated in winter — both bring people together.' },
        { q: 'كَيْفَ تَرَى مُسْتَقْبَلَكَ فِي عَالَمٍ مُتَّصِلٍ؟', en: 'How do you see your future in a connected world?', start: 'أَطْمَحُ إِلَى أَنْ … وَإِذَا …', model: 'أَطْمَحُ إِلَى أَنْ أَعْمَلَ فِي مُنَظَّمَةٍ دُوَلِيَّةٍ، وَإِذَا نَجَحْتُ فِي ذٰلِكَ، فَسَأَسْتَخْدِمُ لُغَاتِي لِلتَّقْرِيبِ بَيْنَ النَّاسِ.', modelEn: 'I aspire to work for an international organisation — and if I do, I’ll use my languages to bring people together.' },
      ],
      foot: 'Develop: two or three sentences — at least two linkers and two time frames per answer.',
      modelFoot: 'Linkers + several time frames = a strong Develop answer on any Topic E theme.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الهُوِيَّةُ وَالثَّقَافَةُ وَالعَالَمُ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ يُمْكِنُ أَنْ نَكُونَ مُوَاطِنِينَ عَالَمِيِّينَ وَنَحْتَفِظَ بِهُوِيَّتِنَا؟', en: 'Can we be global citizens and keep our identity?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ العَالَمَ يَدْفَعُنَا نَحْوَ التَّشَابُهِ، غَيْرَ أَنَّ الهُوِيَّةَ القَوِيَّةَ هِيَ الَّتِي تَجْعَلُ مُشَارَكَتَنَا فِي العَالَمِ ذَاتَ قِيمَةٍ؛ فَالجِذْرُ لَا يَمْنَعُ الشَّجَرَةَ مِنَ النُّمُوِّ.', modelEn: 'The world pushes us towards sameness, but a strong identity gives our global contribution value — roots don’t stop a tree growing.' },
        { q: 'مَا دَوْرُ اللُّغَاتِ فِي التَّفَاهُمِ بَيْنَ الشُّعُوبِ؟', en: 'What role do languages play in understanding between peoples?', start: 'إِنَّ اللُّغَةَ … ؛ فَإِذَا … فَـ…', model: 'إِنَّ اللُّغَةَ مِفْتَاحُ القَلْبِ لَا العَقْلِ فَقَطْ؛ فَإِذَا كَلَّمْتَ إِنْسَانًا بِلُغَتِهِ، شَعَرَ بِأَنَّكَ تَحْتَرِمُهُ قَبْلَ أَنْ يَسْمَعَ أَفْكَارَكَ.', modelEn: 'Language is the key to the heart, not just the mind: speak to someone in their language and they feel respected before hearing your ideas.' },
        { q: 'كَيْفَ اخْتَلَفَتْ تَجْرِبَةُ جِيلِكَ عَنْ تَجْرِبَةِ أَجْدَادِكَ؟', en: 'How does your generation’s experience differ from your grandparents’?', start: 'كَانَ أَجْدَادِي … أَمَّا جِيلُنَا فَـ… مِمَّا …', model: 'كَانَ أَجْدَادِي يَعِيشُونَ فِي قَرْيَةٍ وَاحِدَةٍ طُولَ حَيَاتِهِمْ، أَمَّا جِيلُنَا فَيَعِيشُ بَيْنَ بُلْدَانٍ وَلُغَاتٍ، مِمَّا يُعْطِينَا فُرَصًا أَكْثَرَ وَأَسْئِلَةً أَصْعَبَ عَنِ الانْتِمَاءِ.', modelEn: 'My grandparents lived in one village all their lives; our generation lives between countries and languages, giving us more chances and harder questions about belonging.' },
        { q: 'مَا أَهَمُّ دَرْسٍ تَعَلَّمْتَهُ مِنَ العَيْشِ بَيْنَ ثَقَافَتَيْنِ؟', en: 'What is the most important lesson from living between two cultures?', start: 'تَعَلَّمْتُ أَنَّ … ؛ فَعِنْدَمَا …', model: 'تَعَلَّمْتُ أَنَّ "مُخْتَلِفٌ" لَا تَعْنِي "أَسْوَأَ"؛ فَعِنْدَمَا ضَحِكْتُ مِنْ عَادَةٍ إِنْجْلِيزِيَّةٍ، ضَحِكَ زُمَلَائِي مِنْ عَادَةٍ عِنْدَنَا، فَفَهِمْنَا مَعًا أَنَّ لِكُلِّ عَادَةٍ سَبَبًا.', modelEn: '“Different” doesn’t mean “worse”: when I laughed at an English custom, my classmates laughed at one of ours — and together we understood every custom has a reason.' },
        { q: 'لَوْ كَتَبْتَ رِسَالَةً إِلَى طِفْلٍ يَصِلُ إِلَى بَرِيطَانْيَا اليَوْمَ، مَاذَا تَقُولُ؟', en: 'If you wrote to a child arriving in Britain today, what would you say?', start: 'لَوْ كَتَبْتُ لَهُ، لَقُلْتُ …', model: 'لَوْ كَتَبْتُ لَهُ، لَقُلْتُ: "تَعَلَّمْ لُغَتَهُمْ، وَلَا تَنْسَ لُغَتَكَ؛ وَاحْمِلْ عَادَاتِكَ مَعَكَ كَهَدِيَّةٍ لَا كَحِمْلٍ ثَقِيلٍ".', modelEn: '“Learn their language and don’t forget yours; carry your customs as a gift, not a heavy load.”' },
      ],
      foot: 'Stretch: link identity, languages and the world — a concession, inna + idhā, past vs present with mimmā, a turning point and law … la-.',
      modelFoot: 'Stretch: ṣaḥīḥun anna … ghayra anna, inna … lā … faqaṭ, mimmā, laysat … bal, imperatives and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I answered on languages, food, festivals and travel.' },
    { route: 'core', text: 'I gave a reason in every answer.' },
    { route: 'develop', text: 'I used three different linking words.' },
    { route: 'develop', text: 'I used past, present and future in one answer.' },
    { route: 'stretch', text: 'I switched register correctly and used a concession or law … la-.' },
  ],
};
speak.RP[0].tasks[0].help = 'هٰذَا الجَنَاحُ لِلْجَزَائِرِ / لِمِصْرَ …';
speak.RP[2].tasks[0].help = 'وُلِدْتُ فِي … ، وَكُنْتُ … أَمَّا الآنَ فَأَتَكَلَّمُ …';
speak.RP[2].tasks[1].help = 'كُنَّا … أَمَّا هُنَا فَنَحْتَفِلُ … ؛ وَيُحْتَفَلُ …';
speak.RP[2].tasks[3].help = 'عِنْدَمَا … ، تَعَرَّفْتُ … ؛ وَمَعَ ذٰلِكَ …';
speak.RP[2].tasks[4].help = 'إِذَا سَافَرْتُ، فَسَأَصْطَحِبُ … لِكَيْ …';
speak.RP[1].tasks[4].help = 'لِأَنَّ … ؛ وَسَأَطْلُبُ …';
speak.RP[3].tasks[3].help = 'إِذَا حَصَلْتُ عَلَيْهَا، فَسَأُنَظِّمُ … لِكَيْ …';
speak.RP[3].tasks[4].help = 'لَوْ لَمْ أَحْصُلْ …، لَبَدَأْتُ … لٰكِنَّ …';
speak.CONV[1].qs[0].start = 'كُنْتُ … أَمَّا الآنَ فَأَدْرُسُ … وَسَأَتَعَلَّمُ …';
speak.CONV[1].qs[3].start = '… أَكْبَرُ مِنْ … بَيْنَمَا يُحْتَفَلُ …';
speak.CONV[2].qs[1].start = 'إِنَّ اللُّغَةَ … ؛ فَإِذَا … شَعَرَ …';
speak.CONV[2].qs[2].start = 'كَانَ أَجْدَادِي … أَمَّا جِيلُنَا فَيَعِيشُ … مِمَّا …';
speak.CONV[2].qs[3].start = 'تَعَلَّمْتُ أَنَّ … ؛ فَعِنْدَمَا …';
speak.CONV[2].qs[4].start = 'لَوْ كَتَبْتُ لَهُ، لَقُلْتُ …';
speak.words[11] = w(12, 'لَوْ … لَاخْتَرْتُ · إِذَا … فَسَأَزُورُ', 'if … would · if … will', [['if I were', 'لَوْ كُنْتُ … لَاخْتَرْتُ'], ['if I go', 'إِذَا سَافَرْتُ فَسَأَزُورُ']], { tag: 'conditions' });

const Q2_CORE = `مَرْحَبًا يَا أَيْمَنُ،
كَيْفَ حَالُكَ؟ أَمْسِ نَظَّمْنَا "الأُمْسِيَةَ الدُّوَلِيَّةَ" فِي مَدْرَسَتِي، وَكَانَتْ رَائِعَةً! أَوَّلًا، كَانَ هُنَاكَ أَجْنِحَةٌ لِخَمْسَةَ عَشَرَ بَلَدًا. أَنَا كُنْتُ فِي جَنَاحِ الجَزَائِرِ مَعَ أُخْتِي. قَدَّمْنَا الكُسْكُسَ وَالشَّايَ بِالنَّعْنَاعِ، وَشَرَحْنَا عَادَاتِ الضِّيَافَةِ عِنْدَنَا. بِالإِضَافَةِ إِلَى ذٰلِكَ، رَقَصَ الطُّلَّابُ رَقَصَاتٍ شَعْبِيَّةً عَلَى المَسْرَحِ. الأُمْسِيَةُ كَانَتْ مُتْعِبَةً، وَمَعَ ذٰلِكَ أَحْبَبْتُهَا كَثِيرًا، لِأَنِّي تَعَلَّمْتُ عَنْ ثَقَافَاتٍ جَدِيدَةٍ. لِذٰلِكَ سَأُشَارِكُ فِي السَّنَةِ القَادِمَةِ أَيْضًا. وَأَنْتَ، هَلْ عِنْدَكُمْ أُمْسِيَةٌ مِثْلُهَا فِي مَدْرَسَتِكَ؟
إِلَى اللِّقَاءِ،
يَاسِينُ`;
const Q2_FULL = `عَزِيزِي أَيْمَنُ،
مَا زِلْتُ أَشُمُّ رَائِحَةَ الكُسْكُسِ فِي مَلَابِسِي بَعْدَ "الأُمْسِيَةِ الدُّوَلِيَّةِ" الَّتِي نَظَّمْنَاهَا أَمْسِ، وَشَارَكَ فِيهَا طُلَّابٌ مِنْ خَمْسَةَ عَشَرَ بَلَدًا. كُنْتُ مَسْؤُولًا عَنْ جَنَاحِ الجَزَائِرِ، فَقَدَّمْتُ لِلزُّوَّارِ الشَّايَ بِالنَّعْنَاعِ كَمَا تُقَدِّمُهُ جَدَّتِي، وَشَرَحْتُ لَهُمْ لِمَاذَا لَا يَخْرُجُ الضَّيْفُ عِنْدَنَا قَبْلَ أَنْ يَأْكُلَ. وَأَكْثَرُ مَا أَدْهَشَنِي أَنَّ الجَنَاحَ اليَابَانِيَّ كَانَ يُشْبِهُ جَنَاحَنَا فِي احْتِرَامِ الكِبَارِ، مَعَ أَنَّ الثَّقَافَتَيْنِ بَعِيدَتَانِ جِدًّا. صَحِيحٌ أَنَّنِي وَقَفْتُ خَمْسَ سَاعَاتٍ، غَيْرَ أَنَّ ابْتِسَامَاتِ الزُّوَّارِ أَنْسَتْنِي التَّعَبَ. لِذٰلِكَ اقْتَرَحْتُ عَلَى المُدِيرِ أَنْ نَدْعُوَ مَدْرَسَتَكُمْ فِي العَامِ القَادِمِ. هَلْ تَقْبَلُ؟
مَعَ تَحِيَّاتِي،
يَاسِينُ`;
const Q3A_CORE = `أَوَّلًا، اسْمِي يَاسِينُ، وَوُلِدْتُ فِي مَدِينَةِ قَسَنْطِينَةَ فِي الجَزَائِرِ. عِنْدَمَا كُنْتُ فِي العَاشِرَةِ، انْتَقَلَتْ أُسْرَتِي إِلَى بِرْمِنْغْهَامَ. فِي البِدَايَةِ كُنْتُ أَتَكَلَّمُ العَرَبِيَّةَ وَالفَرَنْسِيَّةَ فَقَطْ، أَمَّا الآنَ فَأَتَكَلَّمُ الإِنْجْلِيزِيَّةَ بِطَلَاقَةٍ.
فِي البَيْتِ نُحَافِظُ عَلَى عَادَاتِنَا. مَثَلًا، نُقَدِّمُ الشَّايَ بِالنَّعْنَاعِ لِكُلِّ ضَيْفٍ، وَنَأْكُلُ الكُسْكُسَ يَوْمَ الجُمُعَةِ. فِي العِيدِ نُصَلِّي فِي الحَدِيقَةِ، ثُمَّ نَزُورُ أَصْدِقَاءَنَا الجَزَائِرِيِّينَ وَجِيرَانَنَا الإِنْجْلِيزَ أَيْضًا.
بِالإِضَافَةِ إِلَى ذٰلِكَ، أُحِبُّ السَّفَرَ كَثِيرًا. فِي الصَّيْفِ المَاضِي شَارَكْتُ فِي تَبَادُلٍ ثَقَافِيٍّ فِي المَغْرِبِ، وَأَقَمْتُ عِنْدَ عَائِلَةٍ لَطِيفَةٍ ثَلَاثَةَ أَسَابِيعَ. كَانَتِ اللَّهْجَةُ صَعْبَةً، وَمَعَ ذٰلِكَ فَهِمْتُ النَّاسَ جَيِّدًا، وَصَارُوا أَصْدِقَائِي.
تَعَلَّمْتُ أَنَّ الثَّقَافَاتِ مُخْتَلِفَةٌ، لٰكِنْ لَيْسَتْ إِحْدَاهَا أَفْضَلَ مِنَ الأُخْرَى. لِذٰلِكَ أَطْمَحُ إِلَى أَنْ أَعْمَلَ فِي مُنَظَّمَةٍ دُوَلِيَّةٍ. إِذَا نَجَحْتُ فِي ذٰلِكَ، فَسَأُسَاعِدُ النَّاسَ عَلَى التَّفَاهُمِ وَالاحْتِرَامِ.`;
const Q3A_FULL = `حِينَ وَصَلْتُ إِلَى بِرْمِنْغْهَامَ وَأَنَا فِي العَاشِرَةِ، كُنْتُ أَحْمِلُ حَقِيبَةً صَغِيرَةً زَرْقَاءَ وَثَلَاثَ كَلِمَاتٍ إِنْجْلِيزِيَّةٍ فَقَطْ. أَمَّا اليَوْمَ، فَأَحْمِلُ ثَلَاثَ لُغَاتٍ وَثَقَافَتَيْنِ، وَأَسْئِلَةً كَثِيرَةً عَنْ مَعْنَى الانْتِمَاءِ وَالوَطَنِ.
فَفِي بَيْتِنَا مَا زَالَتِ الجَزَائِرُ حَاضِرَةً: الشَّايُ بِالنَّعْنَاعِ الَّذِي يُقَدَّمُ لِكُلِّ زَائِرٍ، وَالكُسْكُسُ الَّذِي يَجْمَعُنَا كُلَّ جُمُعَةٍ، وَصَلَاةُ العِيدِ الَّتِي نُؤَدِّيهَا فِي حَدِيقَةِ المَدِينَةِ مَعَ آلَافِ المُسْلِمِينَ مِنْ عَشَرَاتِ البُلْدَانِ، يَتَبَادَلُونَ التَّهَانِيَ بِلُغَاتٍ مُخْتَلِفَةٍ.
غَيْرَ أَنَّ الرِّحْلَةَ لَمْ تَكُنْ سَهْلَةً؛ فَقَدْ كُنْتُ أَخْجَلُ مِنْ لَهْجَتِي، وَأُخْفِي طَعَامِي عَنْ زُمَلَائِي خَوْفًا مِنْ أَسْئِلَتِهِمْ. وَحِينَ شَارَكْتُ فِي تَبَادُلٍ ثَقَافِيٍّ فِي المَغْرِبِ، أَدْرَكْتُ أَنَّ الاخْتِلَافَ لَيْسَ عَيْبًا، بَلْ نَافِذَةٌ نَرَى مِنْهَا العَالَمَ بِعُيُونٍ جَدِيدَةٍ، وَيَرَانَا مِنْهَا الآخَرُونَ أَيْضًا.
لِذٰلِكَ أَطْمَحُ إِلَى أَنْ أَعْمَلَ فِي مُنَظَّمَةٍ دُوَلِيَّةٍ، لِأَبْنِيَ جُسُورًا بَيْنَ الشُّعُوبِ وَالثَّقَافَاتِ. وَلَوْ رَآنِي ذٰلِكَ الطِّفْلُ الخَائِفُ فِي المَطَارِ اليَوْمَ، لَقُلْتُ لَهُ: "لَا تَخَفْ؛ فَحَقِيبَتُكَ الصَّغِيرَةُ سَتَتَّسِعُ لِلْعَالَمِ كُلِّهِ".`;
const Q3B_FULL = `يَعِيشُ كَثِيرٌ مِنَ الشَّبَابِ فِي المُدُنِ الكَبِيرَةِ اليَوْمَ بَيْنَ عَالَمَيْنِ: عَالَمِ الأُسْرَةِ بِلُغَتِهَا وَأَعْيَادِهَا وَعَادَاتِهَا، وَعَالَمٍ مُتَّصِلٍ لَا يَعْرِفُ الحُدُودَ وَلَا يَنَامُ. فَهَلْ يُمْكِنُ أَنْ نَكُونَ مُوَاطِنِينَ عَالَمِيِّينَ وَنَحْتَفِظَ بِهُوِيَّتِنَا فِي الوَقْتِ نَفْسِهِ؟
مِنْ نَاحِيَةٍ، تَدْفَعُنَا العَوْلَمَةُ نَحْوَ التَّشَابُهِ؛ فَنَلْبَسُ المَلَابِسَ نَفْسَهَا، وَنَسْمَعُ الأَغَانِيَ نَفْسَهَا، وَنُشَاهِدُ المُسَلْسَلَاتِ نَفْسَهَا، مِمَّا قَدْ يُضْعِفُ لُغَاتِنَا وَتَقَالِيدَنَا. وَمِنْ نَاحِيَةٍ أُخْرَى، تُتِيحُ لَنَا الوَسَائِلُ نَفْسُهَا أَنْ نُعَرِّفَ العَالَمَ بِثَقَافَتِنَا، وَأَنْ نَتَعَلَّمَ مِنْ ثَقَافَاتٍ أُخْرَى دُونَ أَنْ نُغَادِرَ بُيُوتَنَا.
وَقَدْ عِشْتُ ذٰلِكَ بِنَفْسِي؛ فَحِينَ نَشَرْتُ فِيدْيُو عَنْ عَادَاتِ العِيدِ فِي الجَزَائِرِ، شَاهَدَهُ آلَافُ الشَّبَابِ مِنْ بُلْدَانٍ مُخْتَلِفَةٍ، وَسَأَلَنِي كَثِيرُونَ عَنْ لُغَتِي وَطَعَامِنَا، فَشَعَرْتُ بِأَنَّ هُوِيَّتِي صَارَتْ جِسْرًا لَا جِدَارًا، وَأَنَّ لُغَتِي كَنْزٌ يَسْتَحِقُّ المُشَارَكَةَ.
لِذٰلِكَ أَرَى أَنَّ الهُوِيَّةَ وَالمُوَاطَنَةَ العَالَمِيَّةَ لَا تَتَنَاقَضَانِ، بَلْ تُكْمِلُ إِحْدَاهُمَا الأُخْرَى، كَمَا تُكْمِلُ الجُذُورُ الأَغْصَانَ. فَإِذَا عَرَفْنَا جُذُورَنَا جَيِّدًا، فَسَنَمُدُّ أَغْصَانَنَا إِلَى العَالَمِ دُونَ خَوْفٍ أَوْ خَجَلٍ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice mixing all of Topic E: fill in a profile form for an international youth forum, write an email about your school’s International Evening, and write a cohesive extended piece about your own cultural journey or about whether we can be global citizens and keep our identity.',
  lift: [
    { ar: 'كَانَتِ الأُمْسِيَةُ مُتْعِبَةً، وَمَعَ ذٰلِكَ أَحْبَبْتُهَا كَثِيرًا', en: 'the evening was tiring; nevertheless I loved it' },
    { ar: 'كُنْتُ أَتَكَلَّمُ … أَمَّا الآنَ فَأَتَكَلَّمُ …', en: 'I used to speak … now I speak …' },
    { ar: 'إِذَا نَجَحْتُ فِي ذٰلِكَ، فَسَأُسَاعِدُ …', en: 'if I succeed in that, I will help …' },
  ],
  checkTip: 'Check cohesion and time across Topic E: at least four linkers (awwalan, bi-l-iḍāfati ilā dhālika, maʿa dhālika, li-dhālika); a past paragraph (wulidtu, kuntu + present, shāraktu), a present one (nuḥāfiẓu, nuqaddimu) and a future one (aṭmaḥu ilā an, idhā … fa-sa-); nisba and agreement (jazāʾiriyyīna); one register throughout.',
  FORM: {
    title: 'International youth forum profile', ar: 'اسْتِمَارَةُ المُلْتَقَى الدُّوَلِيِّ لِلشَّبَابِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'يَاسِينُ بَلْقَاسِمَ', modelEn: 'Yassine Belkacem' },
      { core: true, ar: 'الجِنْسِيَّةُ', en: 'Nationality', model: 'جَزَائِرِيٌّ وَبَرِيطَانِيٌّ', modelEn: 'Algerian and British' },
      { core: true, ar: 'اللُّغَاتُ', en: 'Languages', model: 'العَرَبِيَّةُ وَالفَرَنْسِيَّةُ وَالإِنْجْلِيزِيَّةُ', modelEn: 'Arabic, French and English' },
      { core: true, ar: 'عَادَةٌ مِنْ ثَقَافَتِكَ', en: 'A custom from your culture', model: 'تَقْدِيمُ الشَّايِ بِالنَّعْنَاعِ', modelEn: 'serving mint tea' },
      { core: true, ar: 'عِيدٌ تُحِبُّهُ', en: 'A festival you love', model: 'عِيدُ الأَضْحَى', modelEn: 'Eid al-Adha' },
      { core: true, ar: 'بَلَدٌ زُرْتَهُ', en: 'A country you visited', model: 'المَغْرِبُ', modelEn: 'Morocco' },
      { ar: 'قَضِيَّةٌ عَالَمِيَّةٌ تُهِمُّكَ', en: 'A global issue you care about', model: 'التَّعْلِيمُ لِلَّاجِئِينَ', modelEn: 'education for refugees' },
      { ar: 'جُمْلَةٌ: مَاذَا تَعَلَّمْتَ مِنَ العَيْشِ بَيْنَ ثَقَافَتَيْنِ؟', en: 'ONE sentence: what living between two cultures taught you', model: 'كُنْتُ أَخْجَلُ مِنِ اخْتِلَافِي، أَمَّا الآنَ فَأَرَاهُ جِسْرًا بَيْنَ النَّاسِ.', modelEn: 'I used to be ashamed of being different; now I see it as a bridge between people.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence moving from past to present (kuntu … ammā al-āna fa-).',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. The boxes recycle Topic E: nationality (L01), languages (L02), customs (L04), festivals (L06), travel (L08), global issues (L10). Box 2: two nisbas.',
  },
  Q2: {
    short: 'an email about the International Evening', title: 'Question 2: our International Evening', ar: 'الأُمْسِيَةُ الدُّوَلِيَّةُ',
    task: 'Write an email in Arabic to a friend of about 80–90 words. You must include: • what the event was and who took part • what you did at your stall (food, customs) • something else that happened and your opinion • your plans for next year, and a question for your friend.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'At least three linking words.', 'Past, present AND future.', 'About 80–90 words.'],
    phrases: [['أَمْسِ نَظَّمْنَا … فِي مَدْرَسَتِي', 'yesterday we organised … at my school'], ['قَدَّمْنَا … وَشَرَحْنَا …', 'we served … and explained …'], ['… مُتْعِبَةً، وَمَعَ ذٰلِكَ …', '… tiring; nevertheless …'], ['لِذٰلِكَ سَأُشَارِكُ …', 'so I will take part …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنِ الأُمْسِيَةِ الدُّوَلِيَّةِ فِي مَدْرَسَتِكَ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about your school’s International Evening (80–90 words).'],
      ['1', 'مَا الحَدَثُ؟ وَمَنْ شَارَكَ فِيهِ؟', 'What the event was; who took part'],
      ['2', 'مَاذَا فَعَلْتَ فِي جَنَاحِكَ؟', 'What you did at your stall'],
      ['3', 'مَاذَا حَدَثَ أَيْضًا؟ وَمَا رَأْيُكَ؟', 'What else happened; your opinion'],
      ['4', 'مَا خِطَطُكَ لِلسَّنَةِ القَادِمَةِ؟ وَاسْأَلْ صَدِيقَكَ سُؤَالًا.', 'Next year’s plans; a question'],
    ],
    qwords: 'مَنْ شَارَكَ (who took part — PAST) · مَاذَا فَعَلْتَ (what did you do) · مَا رَأْيُكَ (your opinion) · خِطَطُكَ (your plans — FUTURE)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', 'Hello …, how are you?'],
      ['1', 'أَمْسِ نَظَّمْنَا ______ ، وَكَانَ هُنَاكَ ______ .', 'Yesterday we organised …; there were …'],
      ['2', 'كُنْتُ فِي جَنَاحِ ______ ، وَقَدَّمْنَا ______ .', 'I was at the … stall; we served …'],
      ['3', 'كَانَتِ الأُمْسِيَةُ ______ ، وَمَعَ ذٰلِكَ ______ .', 'The evening was …; nevertheless …'],
      ['4', 'لِذٰلِكَ سَأُشَارِكُ ______ . وَأَنْتَ، ______ ؟', 'So I’ll take part … And you, …?'],
      ['end', 'إِلَى اللِّقَاءِ، ______', 'See you, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Ayman, how are you? Yesterday we organised the ‘International Evening’ at my school, and it was amazing! Firstly, there were stalls for fifteen countries. I was at the Algeria stall with my sister. We served couscous and mint tea and explained our hospitality customs. In addition, students performed folk dances on stage. The evening was tiring; nevertheless I loved it, because I learnt about new cultures. So I’ll take part next year too. And you, do you have an evening like this at your school? See you, Yassine.”',
      find: ['أَوَّلًا', 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'وَمَعَ ذٰلِكَ', 'لِذٰلِكَ سَأُشَارِكُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Ayman, I can still smell couscous on my clothes after the ‘International Evening’ we organised yesterday, with students from fifteen countries. I was in charge of the Algeria stall, serving visitors mint tea the way my grandmother does and explaining why a guest never leaves our home before eating. What amazed me most was that the Japanese stall resembled ours in respect for elders, although the two cultures are so far apart. I stood for five hours, but the visitors’ smiles made me forget the tiredness. So I suggested to the head that we invite your school next year. Will you accept? Best wishes, Yassine.”',
      find: ['مَا زِلْتُ أَشُمُّ', 'كَمَا تُقَدِّمُهُ جَدَّتِي', 'مَعَ أَنَّ … بَعِيدَتَانِ', 'أَنْسَتْنِي التَّعَبَ'],
    },
  },
  Q3: {
    a: { title: 'أَنَا وَالعَالَمُ: رِحْلَتِي الثَّقَافِيَّةُ', en: 'Me and the world: my cultural journey', bullets: 'أَصْلُكَ وَلُغَاتُكَ فِي المَاضِي وَالآنَ · عَادَاتُكَ وَأَعْيَادُكَ · تَجْرِبَةُ سَفَرٍ أَوْ تَبَادُلٍ · مَا تَعَلَّمْتَهُ وَطُمُوحَاتُكَ', bulletsEn: 'Your origins and languages, then and now · your customs and festivals · a travel or exchange experience · what you learnt and your ambitions' },
    b: { title: 'هَلْ يُمْكِنُ أَنْ نَكُونَ مُوَاطِنِينَ عَالَمِيِّينَ وَنَحْتَفِظَ بِهُوِيَّتِنَا؟', en: 'Can we be global citizens and keep our identity?', bullets: 'المَوْضُوعُ · تَأْثِيرُ العَوْلَمَةِ عَلَى الهُوِيَّةِ · مِثَالٌ مِنْ تَجْرِبَتِكَ · رَأْيُكَ', bulletsEn: 'The issue · the effect of globalisation on identity · an example from your experience · your opinion' },
    plan: [
      'Origins — awwalan, wulidtu fī …; ʿindamā kuntu fī …, intaqalat usratī …; kuntu atakallamu … ammā al-āna fa- …',
      'Customs + festivals — fī al-bayti nuḥāfiẓu ʿalā …; mathalan, nuqaddimu …; fī al-ʿīdi nuṣallī …, thumma …',
      'Travel — bi-l-iḍāfati ilā dhālika …; shāraktu fī tabādulin …; kānat …, wa-maʿa dhālika …',
      'Lesson + ambition — taʿallamtu anna …; li-dhālika aṭmaḥu ilā an …; idhā najaḥtu fa-sa- …; Stretch: laysa … bal, law … la-.',
    ],
    frames: [
      { ar: 'كُنْتُ أَتَكَلَّمُ العَرَبِيَّةَ فَقَطْ.', en: 'past: I only spoke Arabic.' },
      { ar: 'نُقَدِّمُ الشَّايَ بِالنَّعْنَاعِ لِكُلِّ ضَيْفٍ.', en: 'present: we serve mint tea to every guest.' },
      { ar: 'إِذَا نَجَحْتُ، فَسَأُسَاعِدُ النَّاسَ.', en: 'future: if I succeed, I’ll help people.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Born in Constantine, moved to Birmingham at ten; I spoke Arabic and French, now fluent English → at home we keep our customs: mint tea for guests, couscous on Fridays, Eid prayer in the park → I love travel: an exchange in Morocco with a kind family; the dialect was hard, yet I understood people → cultures differ but none is better; I aspire to work for an international organisation.', find: ['أَوَّلًا', 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'وَمَعَ ذٰلِكَ', 'لِذٰلِكَ أَطْمَحُ'], notes: 'Core model: the whole Topic E journey — origins and languages (L01–L02), customs and festivals (L04, L06), travel (L08), comparing cultures (L09) and global ambitions (L10) — with four linkers and three tenses.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Arriving in Birmingham at ten I carried a small bag and three English words; today I carry three languages, two cultures and many questions about belonging and home → Algeria is still present at home: mint tea served to every visitor, Friday couscous, Eid prayer in the city park with thousands of Muslims from dozens of countries exchanging greetings in many languages → it wasn’t easy: I was ashamed of my dialect and hid my food, fearing questions; on an exchange in Morocco I realised difference isn’t a flaw but a window onto the world — and for the world onto us → so I aspire to work for an international organisation to build bridges between peoples and cultures; “if that frightened child at the airport saw me today, I’d tell him: don’t be afraid — your little bag will grow big enough for the whole world”.', find: ['وَأَنَا فِي العَاشِرَةِ', 'الَّذِي يُقَدَّمُ', 'لَيْسَ عَيْبًا، بَلْ نَافِذَةٌ', 'لَوْ رَآنِي … لَقُلْتُ'], notes: 'Full-mark model: a ḥāl clause, a then-vs-now parallel (aḥmilu ×2), three relative clauses (one passive yuqaddamu), ghayra anna + kuntu + present, laysa … bal + a relative clause, li- of purpose and law … la- with a negative imperative — five Topic E lessons woven together.' },
      { which: 'ب', level: 'Full', subtitle: 'global and rooted?', text: Q3B_FULL, en: 'Many young people in big cities live between two worlds: the family’s, with its language, festivals and customs, and a connected world without borders or sleep — can we be global citizens and keep our identity? → globalisation pushes us towards sameness — the same clothes, songs and series — which may weaken our languages and traditions; yet the same tools let us introduce our culture to the world and learn from others without leaving home → I lived this: when I posted a video on Eid customs in Algeria, thousands of young people watched it and many asked about my language and food — my identity became a bridge, not a wall, and my language a treasure worth sharing → identity and global citizenship don’t contradict but complete each other, as roots complete branches; “if we know our roots well, we will reach our branches out to the world without fear or shame”.', find: ['بَيْنَ عَالَمَيْنِ', 'مِمَّا قَدْ يُضْعِفُ', 'جِسْرًا لَا جِدَارًا', 'لَا تَتَنَاقَضَانِ، بَلْ'], notes: 'Full-mark model for the Stretch title: an appositive hook (ʿālamayni: ʿālami … wa-ʿālamin …), hal yumkinu an … wa-nahtafiẓa, a balanced view with mimmā qad, al-wasāʾilu nafsuhā, a narrated example with fa-, jisran lā jidāran, a dual verb (lā tatanāqaḍāni) with bal tukmilu iḥdāhumā al-ukhrā and idhā … fa-sa-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic, across all of Topic E.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: three linking words and past, present and future.' },
    { route: 'develop', text: 'Q3: four paragraphs, from roots to customs to travel to the future.' },
    { route: 'stretch', text: 'Q3: four or more linkers, a concession and a conditional.' },
  ],
};

module.exports = { speak, write };
