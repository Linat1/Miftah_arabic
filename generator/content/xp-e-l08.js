'use strict';
/* Exam-practice data · TE-L08 · Travel, Cultural Exchange and Understanding (past experience: zurtu, qaḍaytu, kuntu; future: sa-, aʾmulu an; cause and result: li-anna, bi-sababi, li-dhālika, mimmā, natījatan li-dhālika). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'E', n: 8, short: 'Travel, Cultural Exchange and Understanding', arShort: 'السَّفَرُ وَالتَّبَادُلُ الثَّقَافِيُّ', fileTitle: 'Travel_Cultural_Exchange_and_Understanding', title: 'Travel, Cultural Exchange and Understanding', ar: 'السَّفَرُ وَالتَّبَادُلُ الثَّقَافِيُّ وَالتَّفَاهُمُ', icon: 'FaSuitcaseRolling', grammar: 'past experience (zurtu, qaḍaytu, kuntu + present); the future (sa-, sawfa, aʾmulu an); cause and result (li-anna, bi-sababi, li-dhālika, mimmā, natījatan li-dhālika)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: talk about trips and cultural exchanges — what you experienced (past), what you will do (future) — and explain causes and results (لِأَنَّ · بِسَبَبِ · لِذٰلِكَ · مِمَّا · نَتِيجَةً لِذٰلِكَ) to show how travel changes the way we understand others.',
  words: [
    w(1, 'رِحْلَةٌ', 'a trip', [['trips', 'رِحْلَاتٌ'], ['travel (v.n.)', 'السَّفَرُ']], { tag: 'noun' }),
    w(2, 'تَبَادُلٌ ثَقَافِيٌّ', 'a cultural exchange', [['exchange student (m. · f.)', 'طَالِبُ تَبَادُلٍ · طَالِبَةُ تَبَادُلٍ'], ['programme', 'بَرْنَامَجٌ']], { tag: 'noun' }),
    w(3, 'العَائِلَةُ المُضِيفَةُ', 'the host family', [['I stayed with', 'أَقَمْتُ عِنْدَ'], ['accommodation', 'سَكَنٌ']], { tag: 'noun' }),
    w(4, 'زُرْتُ · قَضَيْتُ', 'I visited · I spent (time)', [['I stayed', 'أَقَمْتُ'], ['I travelled', 'سَافَرْتُ']], { tag: 'past' }),
    w(5, 'سَأُسَافِرُ', 'I will travel', [['I hope to', 'آمُلُ أَنْ'], ['I plan to', 'أَنْوِي أَنْ']], { tag: 'future' }),
    w(6, 'بِسَبَبِ', 'because of (+ noun)', [['because (+ clause)', 'لِأَنَّ'], ['so', 'لِذٰلِكَ']], { tag: 'cause' }),
    w(7, 'مِمَّا', 'which (result)', [['as a result', 'نَتِيجَةً لِذٰلِكَ'], ['led to', 'أَدَّى إِلَى']], { tag: 'result' }),
    w(8, 'تَفَاهُمٌ', 'mutual understanding', [['I understood', 'فَهِمْتُ'], ['a stereotype', 'صُورَةٌ نَمَطِيَّةٌ']], { tag: 'noun' }),
    w(9, 'اخْتِلَافٌ', 'a difference', [['differences', 'اخْتِلَافَاتٌ'], ['a similarity', 'تَشَابُهٌ']], { tag: 'noun' }),
    w(10, 'تَغَيَّرَتْ نَظْرَتِي', 'my view changed', [['I discovered', 'اكْتَشَفْتُ'], ['I realised', 'أَدْرَكْتُ']], { tag: 'reflection' }),
    w(11, 'جَوَازُ السَّفَرِ', 'passport', [['visa', 'تَأْشِيرَةٌ'], ['luggage', 'حَقِيبَةُ السَّفَرِ']], { tag: 'travel' }),
    w(12, 'سَائِحٌ · مُسَافِرٌ', 'tourist · traveller', [['f.', 'سَائِحَةٌ · مُسَافِرَةٌ'], ['pl.', 'سُيَّاحٌ · مُسَافِرُونَ']], { tag: 'people' }),
  ],
  words1: { eyebrow: 'Language bank · travel and exchange', title: 'Where I went · what I will do', ar: 'السَّفَرُ بَيْنَ المَاضِي وَالمُسْتَقْبَلِ', notes: 'LANGUAGE BANK (2 min) — past experience: زُرْتُ · قَضَيْتُ · أَقَمْتُ عِنْدَ; habits on the trip: كُنْتُ أَسْتَيْقِظُ …; future: سَأُسَافِرُ · آمُلُ أَنْ أَزُورَ. One trip, three tenses.' },
  words2: { eyebrow: 'Language bank · cause and result', title: 'Why it happened · what it led to', ar: 'السَّبَبُ وَالنَّتِيجَةُ', notes: 'LANGUAGE BANK (2 min) — bi-sababi + NOUN (بِسَبَبِ الزِّحَامِ); li-anna + SENTENCE (لِأَنَّ الطَّرِيقَ مُزْدَحِمٌ). Result: لِذٰلِكَ · مِمَّا جَعَلَنِي · نَتِيجَةً لِذٰلِكَ. Target: one cause and one result in each developed answer.' },
  checkCore: 'described a trip in the past with a reason (li-anna)',
  checkDevelop: 'linked a cause and a result (bi-sababi … mimmā / li-dhālika)',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'arriving at a host family in Fes', title: 'Role play A — Meeting the host family', ar: 'مَعَ العَائِلَةِ المُضِيفَةِ', you: 'an exchange student', them: 'the host mother',
      tasks: [
        { core: true, ex: 'أَهْلًا وَسَهْلًا فِي فَاسَ! كَيْفَ كَانَتِ الرِّحْلَةُ؟', task: 'Say how the journey was.', help: 'كَانَتِ الرِّحْلَةُ … لٰكِنَّ …', model: 'كَانَتِ الرِّحْلَةُ طَوِيلَةً، لٰكِنَّهَا مُرِيحَةٌ.', modelEn: 'The journey was long, but comfortable.' },
        { core: true, ex: 'كَيْفَ جِئْتَ؟', task: 'Say how you travelled.', help: 'سَافَرْتُ بِـالطَّائِرَةِ / بِالقِطَارِ …', model: 'سَافَرْتُ بِالطَّائِرَةِ إِلَى مُرَّاكُشَ، ثُمَّ بِالقِطَارِ إِلَى فَاسَ.', modelEn: 'I flew to Marrakesh, then took the train to Fes.' },
        { core: true, ex: 'هٰذِهِ غُرْفَتُكَ. هَلْ تُعْجِبُكَ؟', task: 'Thank her and give an opinion.', help: 'شُكْرًا، الغُرْفَةُ …', model: 'شُكْرًا جَزِيلًا، الغُرْفَةُ جَمِيلَةٌ وَوَاسِعَةٌ.', modelEn: 'Thank you so much, the room is lovely and spacious.' },
        { core: true, ex: 'نَتَعَشَّى فِي السَّاعَةِ التَّاسِعَةِ.', task: 'Ask about breakfast.', help: 'وَمَتَى …؟', model: 'وَمَتَى نَتَنَاوَلُ الفُطُورَ؟', modelEn: 'And when do we have breakfast?' },
        { core: true, unexpected: true, ex: 'فِي السَّابِعَةِ. مَاذَا تُرِيدُ أَنْ تَرَى فِي فَاسَ؟', task: 'Answer the unexpected question (future + reason).', help: 'أُرِيدُ أَنْ أَزُورَ … لِأَنَّ …', model: 'أُرِيدُ أَنْ أَزُورَ المَدِينَةَ القَدِيمَةَ، لِأَنَّهَا مَشْهُورَةٌ جِدًّا.', modelEn: 'I want to visit the old city, because it’s very famous.' },
      ],
      girl: 'جِئْتِ · غُرْفَتُكِ · تُعْجِبُكِ · تُرِيدِينَ',
      notes: 'Core: kānat ar-riḥla + lākinnahā, safartu bi- + thumma, polite thanks, matā …?, urīdu an azūra + li-annahā.',
    },
    {
      id: 'B', level: 'Core+', setting: 'the school exchange office', title: 'Role play B — Applying for an exchange to Jordan', ar: 'التَّقَدُّمُ لِتَبَادُلٍ إِلَى الأُرْدُنِّ', you: 'a student applying', them: 'the exchange coordinator',
      tasks: [
        { core: true, ex: 'لِمَاذَا تُرِيدُ أَنْ تُشَارِكَ فِي التَّبَادُلِ؟', task: 'Give a reason.', help: 'لِأَنِّي أُرِيدُ أَنْ …', model: 'لِأَنِّي أُرِيدُ أَنْ أُحَسِّنَ لُغَتِيَ العَرَبِيَّةَ.', modelEn: 'Because I want to improve my Arabic.' },
        { core: true, ex: 'هَلْ سَافَرْتَ إِلَى بَلَدٍ عَرَبِيٍّ مِنْ قَبْلُ؟', task: 'Describe a past trip briefly.', help: 'نَعَمْ، زُرْتُ … فِي …', model: 'نَعَمْ، زُرْتُ مِصْرَ مَعَ أُسْرَتِي فِي الصَّيْفِ المَاضِي.', modelEn: 'Yes, I visited Egypt with my family last summer.' },
        { ex: 'مَاذَا تَعَلَّمْتَ مِنْ تِلْكَ الرِّحْلَةِ؟', task: 'Give a result with li-dhālika.', help: 'تَعَلَّمْتُ … ؛ لِذٰلِكَ …', model: 'تَعَلَّمْتُ أَنَّ اللَّهَجَاتِ مُخْتَلِفَةٌ جِدًّا؛ لِذٰلِكَ أُرِيدُ أَنْ أَعِيشَ مَعَ عَائِلَةٍ هَذِهِ المَرَّةَ.', modelEn: 'That dialects are very different — so this time I want to live with a family.' },
        { ex: 'سَتَسْكُنُ مَعَ عَائِلَةٍ فِي عَمَّانَ ثَلَاثَةَ أَسَابِيعَ.', task: 'ASK two questions about the stay.', help: 'هَلْ …؟ وَكَيْفَ …؟', model: 'هَلْ سَأَذْهَبُ إِلَى مَدْرَسَةٍ هُنَاكَ؟ وَكَيْفَ سَأَتَنَقَّلُ فِي المَدِينَةِ؟', modelEn: 'Will I attend a school there? And how will I get around the city?' },
        { unexpected: true, ex: 'نَعَمْ، وَبِالحَافِلَةِ. مَا الصُّعُوبَةُ الَّتِي تَتَوَقَّعُهَا؟', task: 'Answer the unexpected question (cause + solution).', help: 'أَتَوَقَّعُ … بِسَبَبِ … ، لِذٰلِكَ …', model: 'أَتَوَقَّعُ صُعُوبَةً فِي الفَهْمِ بِسَبَبِ سُرْعَةِ الكَلَامِ، لِذٰلِكَ سَأَطْلُبُ مِنْهُمْ أَنْ يَتَكَلَّمُوا بِبُطْءٍ.', modelEn: 'Understanding, because of how fast people talk — so I’ll ask them to speak slowly.' },
      ],
      girl: 'تُرِيدِينَ · تُشَارِكِي · سَافَرْتِ · تَعَلَّمْتِ · سَتَسْكُنِينَ · تَتَوَقَّعِينَهَا',
      notes: 'Core+: li-annī urīdu an, zurtu + time phrase, taʿallamtu anna + li-dhālika, the CANDIDATE asks with sa- (hal sa-adhhabu …?), bi-sababi + noun vs li-anna + clause.',
    },
    {
      id: 'C', level: 'Develop', setting: 'an exchange debrief', title: 'Role play C — After the exchange', ar: 'بَعْدَ التَّبَادُلِ', you: 'a student back from three weeks in Jordan', them: 'your Arabic teacher',
      tasks: [
        { ex: 'حَدِّثْنِي عَنْ حَيَاتِكَ مَعَ العَائِلَةِ.', task: 'Describe daily life there (kuntu + present).', help: 'كُنْتُ أَسْتَيْقِظُ … وَكُنْتُ …', model: 'كُنْتُ أَسْتَيْقِظُ عَلَى صَوْتِ الأَذَانِ، وَأَذْهَبُ إِلَى المَدْرَسَةِ مَعَ ابْنِ العَائِلَةِ، وَفِي المَسَاءِ كُنَّا نَزُورُ الأَقَارِبَ.', modelEn: 'I woke to the call to prayer, went to school with the family’s son, and in the evenings we visited relatives.' },
        { ex: 'مَا أَكْبَرُ اخْتِلَافٍ لَاحَظْتَهُ؟', task: 'Explain a difference with its cause.', help: 'لَاحَظْتُ أَنَّ … بِسَبَبِ / لِأَنَّ …', model: 'لَاحَظْتُ أَنَّ النَّاسَ يَسْهَرُونَ أَكْثَرَ مِنَّا، لِأَنَّ الجَوَّ حَارٌّ فِي النَّهَارِ، فَتَبْدَأُ الحَيَاةُ الاجْتِمَاعِيَّةُ بَعْدَ الغُرُوبِ.', modelEn: 'People stay up later than us because it’s hot in the day, so social life starts after sunset.' },
        { ex: 'هَلْ وَاجَهْتَ مُشْكِلَةً؟', task: 'Narrate a problem and its result.', help: 'نَعَمْ، فِي … ؛ مِمَّا … ، لٰكِنَّ …', model: 'نَعَمْ، فِي الأُسْبُوعِ الأَوَّلِ رَكِبْتُ الحَافِلَةَ الخَطَأَ، مِمَّا جَعَلَنِي أَتَأَخَّرُ سَاعَةً، لٰكِنَّ سَائِقًا لَطِيفًا أَوْصَلَنِي إِلَى البَيْتِ.', modelEn: 'In week one I took the wrong bus, which made me an hour late — but a kind driver took me home.' },
        { ex: 'كَيْفَ غَيَّرَتْكَ هٰذِهِ التَّجْرِبَةُ؟', task: 'Reflect: before and after.', help: 'قَبْلَ الرِّحْلَةِ كُنْتُ … أَمَّا الآنَ فَـ…', model: 'قَبْلَ الرِّحْلَةِ كُنْتُ أَخْجَلُ مِنَ الكَلَامِ بِالعَرَبِيَّةِ، أَمَّا الآنَ فَأَتَكَلَّمُ بِثِقَةٍ؛ نَتِيجَةً لِذٰلِكَ تَحَسَّنَتْ دَرَجَاتِي.', modelEn: 'I was shy of speaking Arabic; now I speak confidently — as a result my marks improved.' },
        { unexpected: true, ex: 'هَلْ سَتَبْقَى عَلَى اتِّصَالٍ بِالعَائِلَةِ؟', task: 'Answer the unexpected question (future + purpose).', help: 'نَعَمْ، سَـ… وَآمُلُ أَنْ …', model: 'نَعَمْ، سَنَتَكَلَّمُ بِالفِيدْيُو كُلَّ شَهْرٍ، وَآمُلُ أَنْ يَزُورَنِي ابْنُهُمْ فِي لَنْدَنَ الصَّيْفَ القَادِمَ.', modelEn: 'Yes — monthly video calls, and I hope their son visits me in London next summer.' },
      ],
      girl: 'حَيَاتِكِ · لَاحَظْتِهِ · وَاجَهْتِ · غَيَّرَتْكِ · سَتَبْقَيْنَ · ابْنَةُ العَائِلَةِ (if relevant)',
      notes: 'Develop: kuntu + present for life on the trip, akthar minnā + li-anna + fa- result, a narrated problem with mimmā jaʿalanī, qabla … kuntu … ammā al-āna fa- + natījatan li-dhālika, sa- + āmulu an.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a youth conference panel', title: 'Role play D — Does travel really build understanding?', ar: 'هَلْ يَبْنِي السَّفَرُ التَّفَاهُمَ حَقًّا؟', you: 'a student panellist', them: 'the panel moderator',
      tasks: [
        { ex: 'هَلْ يَكْفِي السَّفَرُ لِنَفْهَمَ الشُّعُوبَ الأُخْرَى؟', task: 'Distinguish tourism from exchange.', help: 'لَا يَكْفِي … ؛ فَالسَّائِحُ … أَمَّا … فَـ…', model: 'لَا يَكْفِي وَحْدَهُ؛ فَالسَّائِحُ الَّذِي يَبْقَى فِي فُنْدُقٍ فَخْمٍ يَرَى الوَاجِهَةَ فَقَطْ، أَمَّا مَنْ يَعِيشُ مَعَ عَائِلَةٍ فَيَرَى الحَيَاةَ الحَقِيقِيَّةَ.', modelEn: 'Not alone: a tourist in a luxury hotel sees only the façade; someone living with a family sees real life.' },
        { ex: 'أَعْطِنَا مِثَالًا مِنْ تَجْرِبَتِكَ.', task: 'Narrate a stereotype that changed.', help: 'كُنْتُ أَظُنُّ أَنَّ … ، لٰكِنَّنِي عِنْدَمَا … اكْتَشَفْتُ …', model: 'كُنْتُ أَظُنُّ أَنَّ المُجْتَمَعَ هُنَاكَ مُغْلَقٌ، لٰكِنَّنِي عِنْدَمَا عِشْتُ مَعَ عَائِلَةٍ أُرْدُنِيَّةٍ، اكْتَشَفْتُ نِقَاشَاتٍ حُرَّةً عَلَى العَشَاءِ حَوْلَ كُلِّ شَيْءٍ.', modelEn: 'I thought society there was closed, but living with a Jordanian family I found open dinner debates about everything.' },
        { ex: 'لٰكِنَّ السَّفَرَ مُكْلِفٌ وَيَضُرُّ البِيئَةَ.', task: 'Concede and propose alternatives.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ … ؛ لِذٰلِكَ أَقْتَرِحُ …', model: 'صَحِيحٌ أَنَّهُ مُكْلِفٌ وَيُلَوِّثُ الجَوَّ، غَيْرَ أَنَّ التَّبَادُلَ يُمْكِنُ أَنْ يَبْدَأَ بِالإِنْتَرْنِتِ؛ لِذٰلِكَ أَقْتَرِحُ أَنْ تُرْبَطَ المَدَارِسُ بِمَدَارِسَ فِي بُلْدَانٍ أُخْرَى.', modelEn: 'It’s costly and polluting, but exchange can start online — so I propose twinning schools with schools abroad.' },
        { ex: 'وَمَا مَسْؤُولِيَّةُ المُسَافِرِ؟', task: 'Give advice with cause → result.', help: 'يَجِبُ عَلَى المُسَافِرِ أَنْ … ؛ لِأَنَّ … مِمَّا …', model: 'يَجِبُ عَلَيْهِ أَنْ يَتَعَلَّمَ كَلِمَاتٍ مِنْ لُغَةِ البَلَدِ وَيَحْتَرِمَ عَادَاتِهِ، لِأَنَّ ذٰلِكَ يَفْتَحُ القُلُوبَ، مِمَّا يُحَوِّلُ الرِّحْلَةَ إِلَى صَدَاقَةٍ.', modelEn: 'Learn some of the language and respect customs — it opens hearts, turning a trip into a friendship.' },
        { unexpected: true, ex: 'لَوْ اسْتَطَعْتَ أَنْ تُرْسِلَ كُلَّ طَالِبٍ فِي بَرِيطَانْيَا إِلَى بَلَدٍ وَاحِدٍ، فَأَيُّ بَلَدٍ تَخْتَارُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوِ اسْتَطَعْتُ، لَاخْتَرْتُ … لِأَنَّ …', model: 'لَوِ اسْتَطَعْتُ، لَاخْتَرْتُ بَلَدًا يَخْتَلِفُ عَنْهُمْ كَثِيرًا، كَالمَغْرِبِ أَوِ اليَابَانِ، لِأَنَّنَا نَتَعَلَّمُ أَكْثَرَ مِمَّا يُفَاجِئُنَا.', modelEn: 'A very different country, like Morocco or Japan — we learn most from what surprises us.' },
      ],
      girl: 'أَعْطِينَا · تَجْرِبَتِكِ · اسْتَطَعْتِ · تُرْسِلِي · تَخْتَارِينَ',
      notes: 'Stretch: lā yakfī waḥdahu, alladhī + a contrast with ammā man … fa-, kuntu aẓunnu anna … lākinnanī ʿindamā … iktashaftu, a concession + aqtariḥu an + passive (turbaṭa), cause → result with mimmā, law … la- + akthar mimmā.',
      modelFoot: 'Stretch: tourism vs exchange, a changed stereotype, a concession with a proposal, responsibility and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'السَّفَرُ وَالرِّحْلَاتُ', aim: 'one full sentence per question',
      qs: [
        { q: 'إِلَى أَيْنَ سَافَرْتَ آخِرَ مَرَّةٍ؟', en: 'Where did you last travel to?', start: 'سَافَرْتُ إِلَى …', model: 'سَافَرْتُ إِلَى تُرْكِيَا فِي الصَّيْفِ.', modelEn: 'To Turkey in the summer.' },
        { q: 'مَعَ مَنْ سَافَرْتَ؟', en: 'Who did you travel with?', start: 'سَافَرْتُ مَعَ …', model: 'سَافَرْتُ مَعَ أُسْرَتِي.', modelEn: 'With my family.' },
        { q: 'هَلْ تُحِبُّ السَّفَرَ؟ لِمَاذَا؟', en: 'Do you like travelling? Why?', start: 'نَعَمْ، أُحِبُّهُ لِأَنَّ …', model: 'نَعَمْ، أُحِبُّهُ لِأَنِّي أَرَى أَمَاكِنَ جَدِيدَةً.', modelEn: 'Yes — I see new places.' },
        { q: 'مَا البَلَدُ الَّذِي تُرِيدُ أَنْ تَزُورَهُ؟', en: 'Which country do you want to visit?', start: 'أُرِيدُ أَنْ أَزُورَ …', model: 'أُرِيدُ أَنْ أَزُورَ اليَابَانَ.', modelEn: 'Japan.' },
        { q: 'مَاذَا تَحْمِلُ فِي حَقِيبَةِ السَّفَرِ؟', en: 'What do you pack in your suitcase?', start: 'أَحْمِلُ …', model: 'أَحْمِلُ جَوَازَ السَّفَرِ وَمَلَابِسِي وَشَاحِنَ الهَاتِفِ.', modelEn: 'My passport, clothes and phone charger.' },
      ],
      foot: 'Core: one full sentence for every question — past for trips you made, present for what you like. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + the right tense + a reason = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'تَجَارِبُ السَّفَرِ', aim: 'two or three sentences, with a cause and a result',
      qs: [
        { q: 'صِفْ رِحْلَةً لَا تَنْسَاهَا.', en: 'Describe a trip you won’t forget.', start: 'زُرْتُ … ؛ وَكَانَ … لِأَنَّ …', model: 'زُرْتُ إِسْطَنْبُولَ مَعَ عَمِّي؛ وَكَانَتِ الرِّحْلَةُ رَائِعَةً، لِأَنَّ المَدِينَةَ تَجْمَعُ بَيْنَ آسْيَا وَأُورُوبَّا.', modelEn: 'Istanbul with my uncle — wonderful, because the city joins Asia and Europe.' },
        { q: 'مَا الاخْتِلَافُ الثَّقَافِيُّ الَّذِي لَاحَظْتَهُ فِي بَلَدٍ آخَرَ؟', en: 'What cultural difference did you notice abroad?', start: 'لَاحَظْتُ أَنَّ … بِسَبَبِ …', model: 'لَاحَظْتُ أَنَّ المَحَلَّاتِ تُغْلَقُ وَقْتَ الظُّهْرِ فِي إِسْبَانْيَا بِسَبَبِ الحَرَارَةِ، لِذٰلِكَ يَتَسَوَّقُ النَّاسُ مَسَاءً.', modelEn: 'Spanish shops close at midday because of the heat, so people shop in the evening.' },
        { q: 'هَلْ وَاجَهْتَ مُشْكِلَةً فِي السَّفَرِ؟', en: 'Did you face a problem when travelling?', start: 'نَعَمْ، … مِمَّا …', model: 'نَعَمْ، ضَاعَتْ حَقِيبَتِي فِي المَطَارِ، مِمَّا جَعَلَنِي أَشْتَرِي مَلَابِسَ جَدِيدَةً فِي اليَوْمِ الأَوَّلِ.', modelEn: 'My bag was lost at the airport, so I had to buy new clothes on day one.' },
        { q: 'مَا الفَرْقُ بَيْنَ السِّيَاحَةِ وَالتَّبَادُلِ الثَّقَافِيِّ؟', en: 'What’s the difference between tourism and cultural exchange?', start: 'السَّائِحُ … أَمَّا طَالِبُ التَّبَادُلِ فَـ…', model: 'السَّائِحُ يَرَى الأَمَاكِنَ، أَمَّا طَالِبُ التَّبَادُلِ فَيَعِيشُ مَعَ النَّاسِ، لِذٰلِكَ يَفْهَمُهُمْ أَكْثَرَ.', modelEn: 'A tourist sees places; an exchange student lives with people, so understands them more.' },
        { q: 'أَيْنَ سَتُسَافِرُ فِي المُسْتَقْبَلِ؟ وَلِمَاذَا؟', en: 'Where will you travel in future, and why?', start: 'سَأُسَافِرُ / آمُلُ أَنْ … لِكَيْ …', model: 'آمُلُ أَنْ أُسَافِرَ إِلَى عُمَانَ لِكَيْ أَرَى الصَّحْرَاءَ وَالجِبَالَ، وَأَتَدَرَّبَ عَلَى العَرَبِيَّةِ مَعَ النَّاسِ.', modelEn: 'I hope to go to Oman to see the desert and mountains and practise Arabic with people.' },
      ],
      foot: 'Develop: two or three sentences — a cause (li-anna / bi-sababi) and a result (li-dhālika / mimmā).',
      modelFoot: 'Past experience + cause + result = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'السَّفَرُ وَالتَّفَاهُمُ بَيْنَ الشُّعُوبِ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ يُسَاعِدُ السَّفَرُ عَلَى مُحَارَبَةِ الصُّوَرِ النَّمَطِيَّةِ؟', en: 'Does travel help fight stereotypes?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ بَعْضَ المُسَافِرِينَ يَعُودُونَ بِالأَفْكَارِ نَفْسِهَا، غَيْرَ أَنَّ مَنْ يُصْغِي وَيَسْأَلُ يَعُودُ بِعَقْلٍ أَوْسَعَ؛ فَالسَّفَرُ فُرْصَةٌ لَا ضَمَانٌ.', modelEn: 'Some return with the same ideas, but those who listen and ask return wiser — travel is a chance, not a guarantee.' },
        { q: 'هَلْ تُؤَثِّرُ السِّيَاحَةُ سَلْبًا عَلَى المُدُنِ القَدِيمَةِ؟', en: 'Does tourism harm old cities?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، تُوَفِّرُ فُرَصَ عَمَلٍ وَتَحْمِي الآثَارَ، وَمِنْ نَاحِيَةٍ أُخْرَى، تَرْفَعُ الأَسْعَارَ، مِمَّا يَدْفَعُ السُّكَّانَ الأَصْلِيِّينَ إِلَى الرَّحِيلِ.', modelEn: 'It creates jobs and protects monuments, but raises prices, which pushes original residents out.' },
        { q: 'كَيْفَ تَغَيَّرَ السَّفَرُ مُنْذُ أَيَّامِ ابْنِ بَطُّوطَةَ؟', en: 'How has travel changed since Ibn Battuta’s day?', start: 'كَانَ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَ ابْنُ بَطُّوطَةَ يُسَافِرُ سَنَوَاتٍ عَلَى الجِمَالِ وَالسُّفُنِ، أَمَّا اليَوْمَ فَنَصِلُ إِلَى أَيِّ قَارَّةٍ فِي سَاعَاتٍ؛ لٰكِنَّنَا نَرَى أَقَلَّ لِأَنَّنَا نَسْتَعْجِلُ.', modelEn: 'Ibn Battuta travelled years by camel and ship; we reach any continent in hours — yet see less because we rush.' },
        { q: 'مَا الَّذِي تَعَلَّمْتَهُ عَنْ ثَقَافَتِكَ أَنْتَ مِنَ السَّفَرِ؟', en: 'What did travel teach you about your own culture?', start: 'أَدْرَكْتُ أَنَّ … عِنْدَمَا …', model: 'أَدْرَكْتُ أَنَّ كَثِيرًا مِنْ عَادَاتِنَا لَيْسَتْ "طَبِيعِيَّةً" لِلْجَمِيعِ، عِنْدَمَا ضَحِكَتْ عَائِلَتِي المُضِيفَةُ مِنْ شُرْبِي الشَّايَ بِالحَلِيبِ!', modelEn: 'That many of our habits aren’t “normal” for everyone — my host family laughed at me drinking tea with milk!' },
        { q: 'لَوْ قَضَيْتَ سَنَةً كَامِلَةً فِي بَلَدٍ عَرَبِيٍّ، كَيْفَ تَتَغَيَّرُ؟', en: 'If you spent a whole year in an Arab country, how would you change?', start: 'لَوْ قَضَيْتُ سَنَةً، لَـ…', model: 'لَوْ قَضَيْتُ سَنَةً هُنَاكَ، لَأَصْبَحْتُ أُفَكِّرُ بِالعَرَبِيَّةِ، وَلَفَهِمْتُ النُّكَتَ وَالأَمْثَالَ، وَلَعُدْتُ جِسْرًا بَيْنَ عَالَمَيْنِ.', modelEn: 'I’d think in Arabic, understand jokes and proverbs, and come back a bridge between two worlds.' },
      ],
      foot: 'Stretch: a concession, a balanced view with mimmā, kāna … ammā al-yawma fa-, a self-reflection and law … la-.',
      modelFoot: 'Stretch: man yuṣghī, furṣatun lā ḍamān, mimmā yadfaʿu, aqall li-anna and law … la- ×3 — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I described a trip in the past tense.' },
    { route: 'core', text: 'I gave a reason with li-anna.' },
    { route: 'develop', text: 'I linked a cause and a result (bi-sababi … li-dhālika / mimmā).' },
    { route: 'develop', text: 'I used past, present and future in one answer.' },
    { route: 'stretch', text: 'I discussed what travel teaches with a concession and law … la-.' },
  ],
};
speak.RP[0].tasks[1].help = 'سَافَرْتُ بِالطَّائِرَةِ / بِالقِطَارِ …';
speak.RP[2].tasks[3].help = 'قَبْلَ الرِّحْلَةِ كُنْتُ … أَمَّا الآنَ فَأَتَكَلَّمُ …';
speak.RP[2].tasks[4].help = 'نَعَمْ، سَنَتَكَلَّمُ … وَآمُلُ أَنْ …';
speak.RP[3].tasks[0].help = 'لَا يَكْفِي … ؛ فَالسَّائِحُ … أَمَّا مَنْ … فَيَرَى …';
speak.CONV[1].qs[3].start = 'السَّائِحُ … أَمَّا طَالِبُ التَّبَادُلِ فَيَعِيشُ …';
speak.CONV[2].qs[2].start = 'كَانَ … أَمَّا اليَوْمَ فَنَصِلُ …';
speak.CONV[2].qs[4].start = 'لَوْ قَضَيْتُ سَنَةً، لَأَصْبَحْتُ …';

const Q2_CORE = `مَرْحَبًا يَا سَارَةُ،
كَيْفَ حَالُكِ؟ أَنَا الآنَ فِي مَدِينَةِ فَاسَ فِي المَغْرِبِ، فِي بَرْنَامَجِ تَبَادُلٍ ثَقَافِيٍّ. أُقِيمُ عِنْدَ عَائِلَةٍ مَغْرِبِيَّةٍ لَطِيفَةٍ، وَعِنْدَهُمْ بِنْتٌ فِي عُمْرِي اسْمُهَا سُكَيْنَةُ. فِي الأُسْبُوعِ الأَوَّلِ زُرْتُ المَدِينَةَ القَدِيمَةَ، وَذَهَبْتُ إِلَى المَدْرَسَةِ مَعَ سُكَيْنَةَ. لَاحَظْتُ أَنَّ النَّاسَ يَتَعَشَّوْنَ مُتَأَخِّرِينَ، لِأَنَّ الجَوَّ حَارٌّ فِي النَّهَارِ. فِي البِدَايَةِ كُنْتُ جَائِعَةً، لِذٰلِكَ آكُلُ وَجْبَةً صَغِيرَةً فِي العَصْرِ الآنَ! أَنَا سَعِيدَةٌ جِدًّا هُنَا. فِي الأُسْبُوعِ القَادِمِ سَنُسَافِرُ إِلَى الصَّحْرَاءِ. وَأَنْتِ، هَلْ تُرِيدِينَ أَنْ تُشَارِكِي فِي التَّبَادُلِ؟
مَعَ السَّلَامَةِ،
لَيْلَى`;
const Q2_FULL = `عَزِيزَتِي سَارَةُ،
مَضَى أُسْبُوعِيَ الأَوَّلُ فِي فَاسَ أَسْرَعَ مِمَّا تَوَقَّعْتُ! أُقِيمُ عِنْدَ عَائِلَةٍ مَغْرِبِيَّةٍ كَرِيمَةٍ، وَابْنَتُهُمْ سُكَيْنَةُ تُرَافِقُنِي إِلَى المَدْرَسَةِ كُلَّ صَبَاحٍ، وَتُعَلِّمُنِي كَلِمَاتٍ مِنَ الدَّارِجَةِ لَا تُوجَدُ فِي كُتُبِنَا. وَقَدْ أَدْهَشَتْنِي المَدِينَةُ القَدِيمَةُ بِأَزِقَّتِهَا الضَّيِّقَةِ الَّتِي لَا تَدْخُلُهَا السَّيَّارَاتُ، مِمَّا جَعَلَنِي أَضِيعُ فِيهَا مَرَّتَيْنِ! أَمَّا أَكْبَرُ اخْتِلَافٍ لَاحَظْتُهُ فَهُوَ مَوْعِدُ العَشَاءِ؛ إِذْ يَتَأَخَّرُ إِلَى العَاشِرَةِ بِسَبَبِ حَرَارَةِ النَّهَارِ. صَحِيحٌ أَنَّنِي تَعِبْتُ فِي البِدَايَةِ، غَيْرَ أَنَّنِي صِرْتُ أُحِبُّ هٰذِهِ السَّهَرَاتِ العَائِلِيَّةَ. وَإِذَا سَارَ كُلُّ شَيْءٍ كَمَا خُطِّطَ لَهُ، فَسَنَقْضِي لَيْلَةً فِي الصَّحْرَاءِ الأُسْبُوعَ القَادِمَ. مَتَى سَتُشَارِكِينَ أَنْتِ فِي تَبَادُلٍ كَهٰذَا؟
بِمَحَبَّةٍ،
لَيْلَى`;
const Q3A_CORE = `فِي الصَّيْفِ المَاضِي شَارَكْتُ فِي بَرْنَامَجِ تَبَادُلٍ ثَقَافِيٍّ، وَقَضَيْتُ ثَلَاثَةَ أَسَابِيعَ فِي مَدِينَةِ فَاسَ فِي المَغْرِبِ. سَافَرْتُ بِالطَّائِرَةِ مِنْ لَنْدَنَ إِلَى مُرَّاكُشَ، ثُمَّ بِالقِطَارِ إِلَى فَاسَ، وَكَانَتِ الرِّحْلَةُ طَوِيلَةً.
أَقَمْتُ عِنْدَ عَائِلَةٍ مَغْرِبِيَّةٍ لَطِيفَةٍ جِدًّا. كُنْتُ أَسْتَيْقِظُ فِي السَّابِعَةِ، وَأَذْهَبُ إِلَى المَدْرَسَةِ مَعَ ابْنَتِهِمْ سُكَيْنَةَ. فِي المَسَاءِ كُنَّا نَزُورُ الأَقَارِبَ، أَوْ نَمْشِي فِي المَدِينَةِ القَدِيمَةِ، وَنَشْتَرِي الحَلَوِيَّاتِ مِنَ السُّوقِ.
لَاحَظْتُ اخْتِلَافَاتٍ كَثِيرَةً. مَثَلًا، النَّاسُ يَتَعَشَّوْنَ مُتَأَخِّرِينَ بِسَبَبِ الحَرِّ، وَيَتَكَلَّمُونَ الدَّارِجَةَ وَالفَرَنْسِيَّةَ، وَيَشْرَبُونَ الشَّايَ بِالنَّعْنَاعِ بَعْدَ كُلِّ وَجْبَةٍ. فِي البِدَايَةِ لَمْ أَفْهَمْ كَثِيرًا، لِذٰلِكَ كُنْتُ أَطْلُبُ مِنْهُمْ أَنْ يَتَكَلَّمُوا بِبُطْءٍ.
هٰذِهِ الرِّحْلَةُ غَيَّرَتْ نَظْرَتِي، لِأَنِّي فَهِمْتُ أَنَّ النَّاسَ فِي كُلِّ مَكَانٍ كُرَمَاءُ. الآنَ أَتَكَلَّمُ العَرَبِيَّةَ بِثِقَةٍ أَكْبَرَ مِنْ قَبْلُ. فِي المُسْتَقْبَلِ سَأَعُودُ إِلَى المَغْرِبِ، وَآمُلُ أَنْ تَزُورَنِي سُكَيْنَةُ فِي لَنْدَنَ.`;
const Q3A_FULL = `قَبْلَ أَنْ أُسَافِرَ إِلَى فَاسَ، كُنْتُ أَظُنُّ أَنَّنِي أَعْرِفُ المَغْرِبَ؛ فَقَدْ رَأَيْتُ صُوَرَهُ عَلَى الإِنْتَرْنِتِ مِئَاتِ المَرَّاتِ، وَقَرَأْتُ عَنْ تَارِيخِهِ فِي الكُتُبِ. غَيْرَ أَنَّ ثَلَاثَةَ أَسَابِيعَ مَعَ عَائِلَةٍ مَغْرِبِيَّةٍ عَلَّمَتْنِي أَنَّ الصُّورَةَ شَيْءٌ، وَالحَيَاةَ شَيْءٌ آخَرُ.
فَمُنْذُ اليَوْمِ الأَوَّلِ، اسْتَقْبَلَتْنِي "أُمِّي المَغْرِبِيَّةُ" بِالحَلِيبِ وَالتَّمْرِ، وَصَارَتِ ابْنَتُهَا سُكَيْنَةُ دَلِيلِي فِي أَزِقَّةِ المَدِينَةِ القَدِيمَةِ الَّتِي لَا يَعْرِفُ أَسْرَارَهَا إِلَّا أَهْلُهَا، فَكُنَّا نَضِيعُ وَنَضْحَكُ مَعًا. وَكُنْتُ أَقْضِي المَسَاءَ فِي سَهَرَاتٍ عَائِلِيَّةٍ لَا تَبْدَأُ إِلَّا بَعْدَ العَاشِرَةِ بِسَبَبِ حَرَارَةِ النَّهَارِ.
وَلَمْ تَكُنِ التَّجْرِبَةُ سَهْلَةً دَائِمًا؛ فَالدَّارِجَةُ سَرِيعَةٌ، مِمَّا جَعَلَنِي أَشْعُرُ بِالعُزْلَةِ فِي الأَيَّامِ الأُولَى. وَلٰكِنْ حِينَ بَدَأْتُ أَسْأَلُ بَدَلًا مِنْ أَنْ أَصْمُتَ، انْفَتَحَتْ لِي الأَبْوَابُ وَالقُلُوبُ، وَصَارَ الجِيرَانُ يُنَادُونَنِي بِاسْمِي فِي السُّوقِ.
وَنَتِيجَةً لِذٰلِكَ، عُدْتُ بِثِقَةٍ أَكْبَرَ وَصُوَرٍ نَمَطِيَّةٍ أَقَلَّ، وَبِصَدَاقَاتٍ سَتَدُومُ طَوِيلًا. وَلَوْ سَأَلَنِي أَحَدٌ عَنْ أَهَمِّ مَا تَعَلَّمْتُهُ، لَقُلْتُ: "لَا تَعْرِفُ بَلَدًا حَتَّى تَأْكُلَ عَلَى مَائِدَةِ أَهْلِهِ".`;
const Q3B_FULL = `يُسَافِرُ اليَوْمَ مِئَاتُ المَلَايِينِ مِنَ البَشَرِ كُلَّ عَامٍ، وَيُقَالُ إِنَّ السَّفَرَ يُقَرِّبُ الشُّعُوبَ. وَلٰكِنْ هَلْ يُسَاعِدُنَا السَّفَرُ حَقًّا عَلَى فَهْمِ الآخَرِينَ، أَمْ أَنَّنَا نَرَى مَا نُرِيدُ أَنْ نَرَاهُ فَقَطْ؟
مِنْ نَاحِيَةٍ، يَكْسِرُ السَّفَرُ الصُّوَرَ النَّمَطِيَّةَ، لِأَنَّنَا نَلْتَقِي بِأُنَاسٍ حَقِيقِيِّينَ بَدَلًا مِنْ صُوَرِ الأَخْبَارِ وَالأَفْلَامِ. وَمِنْ نَاحِيَةٍ أُخْرَى، يَقْضِي كَثِيرٌ مِنَ السُّيَّاحِ عُطْلَتَهُمْ فِي فَنَادِقَ مُغْلَقَةٍ، فَلَا يَتَحَدَّثُونَ إِلَّا مَعَ مُوَظَّفِي الاسْتِقْبَالِ، مِمَّا يَجْعَلُهُمْ يَعُودُونَ بِالأَفْكَارِ نَفْسِهَا.
وَقَدْ رَأَيْتُ الفَرْقَ بِنَفْسِي؛ فَفِي رِحْلَتِي الأُولَى إِلَى تُونِسَ، بَقِيتُ فِي مُنْتَجَعٍ عَلَى الشَّاطِئِ، وَلَمْ أَتَعَلَّمْ شَيْئًا عَنْ حَيَاةِ التُّونِسِيِّينَ الحَقِيقِيَّةِ. أَمَّا فِي بَرْنَامَجِ التَّبَادُلِ فِي فَاسَ، فَقَدْ عِشْتُ مَعَ عَائِلَةٍ، وَتَعَلَّمْتُ مِنْهَا مَا لَا تُعَلِّمُهُ الكُتُبُ: الكَرَمَ وَالصَّبْرَ وَحُبَّ العَائِلَةِ.
لِذٰلِكَ أَرَى أَنَّ السَّفَرَ وَحْدَهُ لَا يَكْفِي، بَلِ المُهِمُّ كَيْفَ نُسَافِرُ. فَإِذَا خَرَجْنَا مِنَ الفُنْدُقِ إِلَى البُيُوتِ وَالأَسْوَاقِ وَالمَقَاهِي، فَسَيُصْبِحُ كُلُّ سَفَرٍ دَرْسًا فِي التَّفَاهُمِ وَالاحْتِرَامِ المُتَبَادَلِ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a cultural-exchange application form, write an email from your exchange in Morocco, and write an extended piece about a trip that changed your view or about whether travel really helps us understand other peoples — with causes and results.',
  lift: [
    { ar: 'يَتَعَشَّوْنَ مُتَأَخِّرِينَ، لِأَنَّ الجَوَّ حَارٌّ فِي النَّهَارِ', en: 'they have dinner late, because it is hot in the day' },
    { ar: 'لَمْ أَفْهَمْ كَثِيرًا، لِذٰلِكَ كُنْتُ أَطْلُبُ …', en: 'I didn’t understand much, so I used to ask …' },
    { ar: 'هٰذِهِ الرِّحْلَةُ غَيَّرَتْ نَظْرَتِي، لِأَنِّي فَهِمْتُ أَنَّ …', en: 'this trip changed my view, because I understood that …' },
  ],
  checkTip: 'Check cause and result: bi-sababi + NOUN (bi-sababi al-ḥarri), li-anna + SENTENCE (li-anna al-jawwa ḥārrun); li-dhālika / mimmā / natījatan li-dhālika for results; kuntu + present for life during the trip; sa- or āmulu an + subjunctive for the future; feminine forms for a female writer (jāʾiʿa, saʿīda).',
  FORM: {
    title: 'Cultural-exchange application form', ar: 'اسْتِمَارَةُ طَلَبِ التَّبَادُلِ الثَّقَافِيِّ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'لَيْلَى مُحَمَّدٌ', modelEn: 'Layla Mohammed' },
      { core: true, ar: 'العُمْرُ', en: 'Age', model: 'سِتَّ عَشْرَةَ سَنَةً', modelEn: 'sixteen' },
      { core: true, ar: 'البَلَدُ المَطْلُوبُ', en: 'Country requested', model: 'المَغْرِبُ', modelEn: 'Morocco' },
      { core: true, ar: 'مُدَّةُ الإِقَامَةِ', en: 'Length of stay', model: 'ثَلَاثَةُ أَسَابِيعَ', modelEn: 'three weeks' },
      { core: true, ar: 'نَوْعُ السَّكَنِ', en: 'Type of accommodation', model: 'عِنْدَ عَائِلَةٍ مُضِيفَةٍ', modelEn: 'with a host family' },
      { core: true, ar: 'رِحْلَةٌ سَابِقَةٌ', en: 'A previous trip', model: 'مِصْرُ، الصَّيْفَ المَاضِيَ', modelEn: 'Egypt, last summer' },
      { ar: 'صُعُوبَةٌ تَتَوَقَّعِينَهَا', en: 'A difficulty you expect', model: 'فَهْمُ الدَّارِجَةِ', modelEn: 'understanding the dialect' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُرِيدِينَ المُشَارَكَةَ؟', en: 'ONE sentence: why you want to take part', model: 'أُرِيدُ أَنْ أَعِيشَ مَعَ عَائِلَةٍ عَرَبِيَّةٍ، لِأَنَّ ذٰلِكَ سَيُحَسِّنُ لُغَتِي أَكْثَرَ مِنَ الكُتُبِ.', modelEn: 'I want to live with an Arab family, because it will improve my language more than books.' },
    ],
    foot: 'One word or a short phrase for each box — box 7 is a verbal noun phrase; the last box is a full sentence with li-anna and a future verb.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Headings are feminine (tatawaqqaʿīnahā, turīdīna) — a boy reads تَتَوَقَّعُهَا · تُرِيدُ. Box 6 combines a country and a time phrase.',
  },
  Q2: {
    short: 'an email from a cultural exchange', title: 'Question 2: my exchange in Fes', ar: 'تَبَادُلِي فِي فَاسَ',
    task: 'Write an email in Arabic to a friend of about 80–90 words. You must include: • where you are and who you are staying with • what you did in the first week • a cultural difference you noticed and why • your feelings and plans, and a question for your friend.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'A cause (li-anna / bi-sababi) and a result (li-dhālika).', 'Past, present AND future.', 'About 80–90 words.'],
    phrases: [['أُقِيمُ عِنْدَ عَائِلَةٍ …', 'I am staying with a … family'], ['فِي الأُسْبُوعِ الأَوَّلِ زُرْتُ …', 'in the first week I visited …'], ['لَاحَظْتُ أَنَّ … لِأَنَّ …', 'I noticed that … because …'], ['فِي الأُسْبُوعِ القَادِمِ سَنُسَافِرُ …', 'next week we will travel …']],
    rubric: [
      ['task', 'اكْتُبِي رِسَالَةً إِلَى صَدِيقَتِكِ مِنْ بَرْنَامَجِ التَّبَادُلِ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend from your exchange programme (80–90 words).'],
      ['1', 'أَيْنَ أَنْتِ؟ وَعِنْدَ مَنْ تُقِيمِينَ؟', 'Where you are; who you are staying with'],
      ['2', 'مَاذَا فَعَلْتِ فِي الأُسْبُوعِ الأَوَّلِ؟', 'What you did in the first week'],
      ['3', 'مَا الاخْتِلَافُ الثَّقَافِيُّ الَّذِي لَاحَظْتِهِ؟ وَلِمَاذَا؟', 'A cultural difference; why'],
      ['4', 'مَا شُعُورُكِ؟ وَمَا خِطَطُكِ؟ وَاسْأَلِي صَدِيقَتَكِ سُؤَالًا.', 'Your feelings; plans; a question'],
    ],
    qwords: 'عِنْدَ مَنْ (with whom) · فَعَلْتِ (you did — PAST) · لِمَاذَا (why → لِأَنَّ / بِسَبَبِ) · خِطَطُكِ (plans — FUTURE)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، أَنَا الآنَ فِي ______ .', 'Hello …, I’m now in …'],
      ['1', 'أُقِيمُ عِنْدَ عَائِلَةٍ ______ ، وَعِنْدَهُمْ ______ .', 'I’m staying with a … family; they have …'],
      ['2', 'فِي الأُسْبُوعِ الأَوَّلِ زُرْتُ ______ وَ______ .', 'In week one I visited … and …'],
      ['3', 'لَاحَظْتُ أَنَّ ______ ، لِأَنَّ ______ .', 'I noticed that …, because …'],
      ['4', 'أَنَا ______ . سَنُسَافِرُ إِلَى ______ .', 'I feel … We’ll travel to …'],
      ['end', 'وَأَنْتِ، ______ ؟ مَعَ السَّلَامَةِ.', 'And you, …? Goodbye.'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Sarah, how are you? I’m now in Fes in Morocco on a cultural exchange. I’m staying with a lovely Moroccan family, and they have a daughter my age called Soukaina. In the first week I visited the old city and went to school with Soukaina. I noticed people have dinner late, because it’s hot in the day. At first I was hungry, so now I eat a small meal in the afternoon! I’m very happy here. Next week we’ll travel to the desert. And you, do you want to take part in the exchange? Goodbye, Layla.”',
      find: ['أُقِيمُ عِنْدَ', 'زُرْتُ المَدِينَةَ', 'لِأَنَّ الجَوَّ حَارٌّ', 'لِذٰلِكَ آكُلُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Sarah, my first week in Fes went faster than I expected! I’m staying with a generous Moroccan family, and their daughter Soukaina takes me to school every morning and teaches me dialect words that aren’t in our books. The old city amazed me with its narrow lanes no car can enter — which made me get lost twice! The biggest difference I noticed is dinner time: it’s as late as ten because of the daytime heat. I was tired at first, but I’ve come to love these family evenings. If all goes as planned, we’ll spend a night in the desert next week. When will you do an exchange like this? With love, Layla.”',
      find: ['أَسْرَعَ مِمَّا تَوَقَّعْتُ', 'مِمَّا جَعَلَنِي', 'بِسَبَبِ حَرَارَةِ النَّهَارِ', 'إِذَا سَارَ … فَسَنَقْضِي'],
    },
  },
  Q3: {
    a: { title: 'رِحْلَةٌ غَيَّرَتْ نَظْرَتِي', en: 'A trip that changed my view', bullets: 'أَيْنَ ذَهَبْتَ وَكَيْفَ · حَيَاتُكَ هُنَاكَ · اخْتِلَافَاتٌ لَاحَظْتَهَا وَأَسْبَابُهَا · كَيْفَ تَغَيَّرْتَ وَخُطَطُكَ', bulletsEn: 'Where you went and how · your life there · differences you noticed and their causes · how you changed and your plans' },
    b: { title: 'هَلْ يُسَاعِدُ السَّفَرُ عَلَى فَهْمِ الشُّعُوبِ الأُخْرَى؟', en: 'Does travel help us understand other peoples?', bullets: 'المَوْضُوعُ · السَّائِحُ وَالمُسَافِرُ الحَقِيقِيُّ · مِثَالٌ مِنْ تَجْرِبَتِكَ · رَأْيُكَ', bulletsEn: 'The issue · the tourist and the real traveller · an example from your experience · your opinion' },
    plan: [
      'The trip — fī aṣ-ṣayfi al-māḍī shāraktu fī …; qaḍaytu … fī …; sāfartu bi- … thumma …',
      'Life there — aqamtu ʿinda …; kuntu astayqiẓu … wa-adhhabu …; fī al-masāʾi kunnā …',
      'Differences + causes — lāḥaẓtu …; mathalan … bi-sababi …; lam afham …, li-dhālika …',
      'Change + future — hādhihi ar-riḥla ghayyarat naẓratī li-annī …; sa-aʿūdu …; āmulu an …; Stretch: mimmā, natījatan li-dhālika, law … la-.',
    ],
    frames: [
      { ar: 'كُنْتُ أَسْتَيْقِظُ فِي السَّابِعَةِ.', en: 'past habit: I used to wake at seven.' },
      { ar: 'يَتَعَشَّوْنَ مُتَأَخِّرِينَ بِسَبَبِ الحَرِّ.', en: 'cause: they dine late because of the heat.' },
      { ar: 'آمُلُ أَنْ تَزُورَنِي سُكَيْنَةُ فِي لَنْدَنَ.', en: 'future: I hope Soukaina visits me.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Three weeks in Fes on an exchange: a flight to Marrakesh, then the train → a kind host family: up at seven, school with their daughter, evenings with relatives or in the old city → late dinners because of the heat, dialect, French, mint tea; I didn’t understand much, so I asked them to speak slowly → the trip changed my view; I’m more confident in Arabic and will return.', find: ['قَضَيْتُ ثَلَاثَةَ أَسَابِيعَ', 'كُنْتُ أَسْتَيْقِظُ', 'بِسَبَبِ الحَرِّ', 'لِذٰلِكَ كُنْتُ أَطْلُبُ'], notes: 'Core model: past narrative (shāraktu, qaḍaytu, sāfartu, aqamtu), kuntu / kunnā + present for life there, bi-sababi + noun vs li-annī + clause, li-dhālika, and sa- + āmulu an for the future.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Before going to Fes I thought I knew Morocco — I’d seen hundreds of photos online and read its history; but three weeks with a Moroccan family taught me a picture is one thing and life another → from day one my “Moroccan mother” welcomed me with milk and dates, and her daughter became my guide through old-city lanes whose secrets only locals know — we got lost and laughed together; evenings were family gatherings that only began after ten because of the heat → it wasn’t always easy: fast dialect made me feel isolated at first; but when I started asking instead of staying silent, doors and hearts opened and neighbours called me by name in the market → as a result I came back more confident with fewer stereotypes and lasting friendships; “you don’t know a country until you eat at its people’s table”.', find: ['قَبْلَ أَنْ أُسَافِرَ', 'لَا يَعْرِفُ … إِلَّا', 'مِمَّا جَعَلَنِي', 'نَتِيجَةً لِذٰلِكَ'], notes: 'Full-mark model: qabla an + kuntu aẓunnu, ghayra anna, ash-shayʾ … wa-sh-shayʾ ākhar, a relative clause with lā … illā, lā tabdaʾu illā baʿda, bi-sababi, mimmā jaʿalanī, badalan min an, natījatan li-dhālika with comparatives, and law … la-qultu + a proverb-like close.' },
      { which: 'ب', level: 'Full', subtitle: 'travel and understanding', text: Q3B_FULL, en: 'Hundreds of millions travel every year, and it is said travel brings peoples closer — but does it really help us understand others, or do we only see what we want to see? → travel breaks stereotypes because we meet real people instead of news and film images; yet many tourists stay in closed hotels and speak only to receptionists, so they return with the same ideas → I saw the difference myself: on my first trip to Tunisia I stayed in a beach resort and learnt nothing about real Tunisian life; on the exchange in Fes I lived with a family and learnt what books can’t teach: generosity, patience and love of family → travel alone isn’t enough; what matters is how we travel; “if we leave the hotel for homes, markets and cafés, every journey will become a lesson in understanding and mutual respect”.', find: ['يُقَالُ إِنَّ', 'هَلْ … أَمْ أَنَّنَا', 'مِمَّا يَجْعَلُهُمْ', 'لَا يَكْفِي، بَلِ'], notes: 'Full-mark model for the Stretch title: a statistic hook with the passive yuqālu inna, hal … am annanā, li-annanā + badalan min, lā … illā + mimmā, a contrasting pair of trips with ammā … fa-qad, mā lā tuʿallimuhu, lā yakfī … bal and idhā … fa-sa-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic, with a reason in box 8.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: a cause and a result.' },
    { route: 'develop', text: 'Q3: kuntu + present for life on the trip, and a future plan.' },
    { route: 'stretch', text: 'Q3: mimmā / natījatan li-dhālika, a concession and a conditional.' },
  ],
};

module.exports = { speak, write };
