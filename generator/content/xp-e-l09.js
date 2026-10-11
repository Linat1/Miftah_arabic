'use strict';
/* Exam-practice data · TE-L09 · Comparing Cultures with Respect (comparatives afʿal min / akthar … min; baynamā; ammā … fa-; respectful hedging: ghāliban, baʿḍu, fī raʾyī, mukhtalif lā afḍal). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'E', n: 9, short: 'Comparing Cultures with Respect', arShort: 'المُقَارَنَةُ بَيْنَ الثَّقَافَاتِ بِاحْتِرَامٍ', fileTitle: 'Comparing_Cultures_with_Respect', title: 'Comparing Cultures with Respect', ar: 'المُقَارَنَةُ بَيْنَ الثَّقَافَاتِ بِاحْتِرَامٍ', icon: 'FaScaleBalanced', grammar: 'comparatives (afʿal min, akthar / aqall + noun); baynamā for contrast; ammā … fa- for topic switch; respectful hedging (ghāliban, baʿḍu an-nās, fī raʾyī, mukhtalifun lā afḍal)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: compare daily life, school, family, food and customs between cultures — fairly and respectfully — with comparatives (أَطْوَلُ مِنْ · أَكْثَرُ … مِنْ), contrast (بَيْنَمَا · أَمَّا … فَإِنَّ) and careful hedging (غَالِبًا · بَعْضُ النَّاسِ · مُخْتَلِفٌ لَا أَفْضَلُ).',
  words: [
    w(1, 'أَطْوَلُ مِنْ', 'longer than', [['shorter than', 'أَقْصَرُ مِنْ'], ['earlier than', 'أَبْكَرُ مِنْ']], { tag: 'comparative' }),
    w(2, 'أَكْثَرُ … مِنْ', 'more … than', [['less … than', 'أَقَلُّ … مِنْ'], ['more formal', 'أَكْثَرُ رَسْمِيَّةً']], { tag: 'comparative' }),
    w(3, 'بَيْنَمَا', 'whereas / while', [['on the other hand', 'فِي المُقَابِلِ'], ['unlike', 'بِعَكْسِ']], { tag: 'contrast' }),
    w(4, 'أَمَّا … فَإِنَّ …', 'as for … (then) …', [['as for us', 'أَمَّا نَحْنُ فَنَأْكُلُ'], ['as for school', 'أَمَّا المَدْرَسَةُ فَهِيَ …']], { tag: 'contrast' }),
    w(5, 'يَتَشَابَهُ', 'is similar', [['similarity', 'تَشَابُهٌ'], ['both', 'كِلَاهُمَا']], { tag: 'similarity' }),
    w(6, 'مُخْتَلِفٌ لَا أَفْضَلُ', 'different, not better', [['each has', 'لِكُلٍّ مِنْهُمَا'], ['its advantages', 'مَزَايَاهُ']], { tag: 'respect' }),
    w(7, 'غَالِبًا', 'usually / mostly', [['some people', 'بَعْضُ النَّاسِ'], ['not everyone', 'لَيْسَ الجَمِيعُ']], { tag: 'hedging' }),
    w(8, 'تَعْمِيمٌ', 'a generalisation', [['stereotype', 'صُورَةٌ نَمَطِيَّةٌ'], ['to judge', 'يَحْكُمُ عَلَى']], { tag: 'respect' }),
    w(9, 'عُطْلَةُ نِهَايَةِ الأُسْبُوعِ', 'the weekend', [['Friday and Saturday', 'الجُمُعَةُ وَالسَّبْتُ'], ['Saturday and Sunday', 'السَّبْتُ وَالأَحَدُ']], { tag: 'daily life' }),
    w(10, 'زِيٌّ مَدْرَسِيٌّ', 'school uniform', [['compulsory', 'إِلْزَامِيٌّ'], ['optional', 'اخْتِيَارِيٌّ']], { tag: 'school' }),
    w(11, 'العَائِلَةُ المُمْتَدَّةُ', 'the extended family', [['nuclear family', 'الأُسْرَةُ الصَّغِيرَةُ'], ['relatives', 'الأَقَارِبُ']], { tag: 'family' }),
    w(12, 'أَحْتَرِمُ', 'I respect', [['respect (n.)', 'الاحْتِرَامُ'], ['I appreciate', 'أُقَدِّرُ']], { tag: 'respect' }),
  ],
  words1: { eyebrow: 'Language bank · comparing', title: 'Longer, earlier, more formal', ar: 'أَدَوَاتُ المُقَارَنَةِ', notes: 'LANGUAGE BANK (2 min) — afʿal min for simple adjectives (أَطْوَلُ مِنْ · أَبْكَرُ مِنْ); akthar / aqall + noun (acc.) for longer ones (أَكْثَرُ رَسْمِيَّةً · أَقَلُّ ازْدِحَامًا). Contrast: بَيْنَمَا + sentence; أَمَّا X فَهُوَ / فَهِيَ + comment.' },
  words2: { eyebrow: 'Language bank · comparing with respect', title: 'Different — not better or worse', ar: 'المُقَارَنَةُ بِاحْتِرَامٍ', notes: 'LANGUAGE BANK (2 min) — soften claims: غَالِبًا · بَعْضُ النَّاسِ · فِي رَأْيِي · لَيْسَ الجَمِيعُ. Avoid "they are all …". Close with balance: مُخْتَلِفٌ لَا أَفْضَلُ · لِكُلٍّ مِنْهُمَا مَزَايَاهُ. Teacher note: reward hedging as top-band precision.' },
  checkCore: 'compared two cultures with a comparative (afʿal min)',
  checkDevelop: 'used baynamā or ammā … fa- AND a hedge (ghāliban / baʿḍu)',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a video call', title: 'Role play A — Comparing school days with a penfriend in Qatar', ar: 'مُقَارَنَةُ اليَوْمِ الدِّرَاسِيِّ', you: 'a student in Britain', them: 'your penfriend in Doha',
      tasks: [
        { core: true, ex: 'مَتَى يَبْدَأُ يَوْمُكَ الدِّرَاسِيُّ؟', task: 'Say when school starts.', help: 'يَبْدَأُ فِي …', model: 'يَبْدَأُ فِي السَّاعَةِ الثَّامِنَةِ وَالنِّصْفِ.', modelEn: 'It starts at 8.30.' },
        { core: true, ex: 'نَحْنُ نَبْدَأُ فِي السَّابِعَةِ!', task: 'Compare (afʿal min).', help: 'يَوْمُكُمْ أَبْكَرُ مِنْ …', model: 'يَوْمُكُمْ أَبْكَرُ مِنْ يَوْمِنَا!', modelEn: 'Your day starts earlier than ours!' },
        { core: true, ex: 'مَا أَيَّامُ العُطْلَةِ عِنْدَكُمْ؟', task: 'Name your weekend.', help: 'السَّبْتُ وَ…', model: 'السَّبْتُ وَالأَحَدُ.', modelEn: 'Saturday and Sunday.' },
        { core: true, ex: 'عُطْلَتُنَا الجُمُعَةُ وَالسَّبْتُ.', task: 'Ask about school uniform.', help: 'هَلْ … ؟', model: 'هَلْ تَلْبَسُونَ زِيًّا مَدْرَسِيًّا؟', modelEn: 'Do you wear a school uniform?' },
        { core: true, unexpected: true, ex: 'نَعَمْ. مَا الشَّيْءُ الَّذِي تُحِبُّهُ فِي مَدْرَسَتِكَ؟', task: 'Answer the unexpected question.', help: 'أُحِبُّ … لِأَنَّ …', model: 'أُحِبُّ النَّوَادِيَ بَعْدَ المَدْرَسَةِ، لِأَنَّهَا مُمْتِعَةٌ.', modelEn: 'The after-school clubs, because they’re fun.' },
      ],
      girl: 'يَوْمُكِ · تَلْبَسْنَ / تَلْبَسُونَ (same) · تُحِبِّينَهُ · مَدْرَسَتِكِ',
      notes: 'Core: telling the time, afʿal min (abkaru min) with possessives (yawmukum / yawminā), days of the week, hal …?, li-annahā.',
    },
    {
      id: 'B', level: 'Core+', setting: 'a new classmate', title: 'Role play B — Welcoming a classmate from Syria', ar: 'زَمِيلٌ جَدِيدٌ مِنْ سُورِيَا', you: 'a British student', them: 'a new classmate who arrived from Syria',
      tasks: [
        { core: true, ex: 'المَدْرَسَةُ هُنَا مُخْتَلِفَةٌ جِدًّا!', task: 'Ask how it is different.', help: 'كَيْفَ …؟', model: 'كَيْفَ هِيَ مُخْتَلِفَةٌ؟', modelEn: 'How is it different?' },
        { core: true, ex: 'الصُّفُوفُ هُنَا أَصْغَرُ، وَالمُعَلِّمُونَ يَمْشُونَ بَيْنَ الطُّلَّابِ.', task: 'Respond and compare one thing.', help: 'صَحِيحٌ، وَ… أَكْثَرُ … مِنْ …', model: 'صَحِيحٌ، وَالدُّرُوسُ هُنَا أَقْصَرُ مِنْ دُرُوسِ سُورِيَا كَمَا سَمِعْتُ.', modelEn: 'True — and I hear lessons here are shorter than in Syria.' },
        { ex: 'وَالطُّلَّابُ يُنَادُونَ المُعَلِّمَ بِاسْمِهِ!', task: 'Explain the custom respectfully (baynamā).', help: 'نَعَمْ، هُنَا … بَيْنَمَا عِنْدَكُمْ …', model: 'نَعَمْ، هُنَا نَقُولُ "مِسْتَر" مَعَ الاسْمِ، بَيْنَمَا تَقُولُونَ "أُسْتَاذ"؛ وَكِلَاهُمَا احْتِرَامٌ.', modelEn: 'Here we say “Mr” plus the name, while you say “ustādh” — both are respect.' },
        { ex: 'هَلْ يُمْكِنُكَ أَنْ تُسَاعِدَنِي؟', task: 'Offer help and ASK a question.', help: 'طَبْعًا! سَأُرِيكَ … ؛ وَمَا …؟', model: 'طَبْعًا! سَأُرِيكَ المَكْتَبَةَ وَالمَطْعَمَ. وَمَا المَادَّةُ الَّتِي تُحِبُّهَا أَكْثَرَ؟', modelEn: 'Of course! I’ll show you the library and canteen. And which subject do you like most?' },
        { unexpected: true, ex: 'الرِّيَاضِيَّاتُ. هَلِ النَّاسُ هُنَا بَارِدُونَ كَمَا يُقَالُ؟', task: 'Answer the unexpected question (avoid a stereotype).', help: 'لَيْسَ الجَمِيعُ … ؛ غَالِبًا …', model: 'لَيْسَ الجَمِيعُ هٰكَذَا؛ غَالِبًا يَحْتَاجُ النَّاسُ هُنَا إِلَى وَقْتٍ، لٰكِنَّهُمْ أَصْدِقَاءُ أَوْفِيَاءُ بَعْدَ ذٰلِكَ.', modelEn: 'Not everyone — people here often need time, but then they’re loyal friends.' },
      ],
      girl: '(to a female classmate) يُمْكِنُكِ · سَأُرِيكِ · تُحِبِّينَهَا',
      notes: 'Core+: kayfa …?, aqṣaru min + kamā samiʿtu, baynamā + kilāhumā, sa- + an offer, the CANDIDATE asks with allatī, and hedging (laysa al-jamīʿu, ghāliban) against a stereotype.',
    },
    {
      id: 'C', level: 'Develop', setting: 'a class discussion', title: 'Role play C — Family life in two cultures', ar: 'الحَيَاةُ العَائِلِيَّةُ فِي ثَقَافَتَيْنِ', you: 'a student with Somali and British heritage', them: 'your Citizenship teacher',
      tasks: [
        { ex: 'كَيْفَ تَخْتَلِفُ الأُسْرَةُ الصُّومَالِيَّةُ عَنِ البَرِيطَانِيَّةِ؟', task: 'Compare with ammā … fa-.', help: 'الأُسْرَةُ … غَالِبًا … أَمَّا … فَـ…', model: 'الأُسْرَةُ الصُّومَالِيَّةُ غَالِبًا أَكْبَرُ، وَيَسْكُنُ الأَجْدَادُ مَعَ أَحْفَادِهِمْ، أَمَّا الأُسْرَةُ البَرِيطَانِيَّةُ فَأَصْغَرُ عَادَةً، وَيَعِيشُ الأَجْدَادُ وَحْدَهُمْ.', modelEn: 'Somali families are usually bigger, with grandparents living with grandchildren; British families are usually smaller, grandparents living alone.' },
        { ex: 'وَالوَجَبَاتُ؟', task: 'Contrast with baynamā + a hedge.', help: 'فِي بَيْتِنَا … بَيْنَمَا بَعْضُ أَصْدِقَائِي …', model: 'فِي بَيْتِنَا نَأْكُلُ العَشَاءَ مَعًا دَائِمًا، بَيْنَمَا يَأْكُلُ بَعْضُ أَصْدِقَائِي فِي أَوْقَاتٍ مُخْتَلِفَةٍ بِسَبَبِ عَمَلِ وَالِدِيهِمْ.', modelEn: 'We always eat dinner together, while some friends eat at different times because of their parents’ work.' },
        { ex: 'أَيُّهُمَا أَفْضَلُ فِي رَأْيِكَ؟', task: 'Refuse to rank; give advantages of each.', help: 'لَا أَقُولُ إِنَّ … ؛ لِكُلٍّ مِنْهُمَا …', model: 'لَا أَقُولُ إِنَّ إِحْدَاهُمَا أَفْضَلُ؛ فَالأُسْرَةُ الكَبِيرَةُ تُعْطِي دَعْمًا أَكْثَرَ، وَالصَّغِيرَةُ تُعْطِي حُرِّيَّةً أَكْبَرَ.', modelEn: 'I won’t say one is better: the big family gives more support, the small one more freedom.' },
        { ex: 'هَلْ تَغَيَّرَتْ أُسْرَتُكَ بَعْدَ الهِجْرَةِ؟', task: 'Past vs present.', help: 'كَانَ … أَمَّا الآنَ فَـ…', model: 'كَانَ جَدِّي يَعِيشُ مَعَ ثَلَاثِينَ قَرِيبًا فِي بَيْتٍ وَاحِدٍ، أَمَّا الآنَ فَنَسْكُنُ فِي شُقَّةٍ صَغِيرَةٍ، لٰكِنَّنَا نَجْتَمِعُ كُلَّ عُطْلَةٍ.', modelEn: 'Grandpa lived with thirty relatives in one house; now we live in a small flat but gather every holiday.' },
        { unexpected: true, ex: 'مَا الشَّيْءُ الَّذِي تَأْخُذُهُ مِنْ كُلِّ ثَقَافَةٍ؟', task: 'Answer the unexpected question (balanced).', help: 'آخُذُ مِنَ … ، وَمِنَ … ', model: 'آخُذُ مِنَ الثَّقَافَةِ الصُّومَالِيَّةِ الكَرَمَ وَقُرْبَ العَائِلَةِ، وَمِنَ البَرِيطَانِيَّةِ احْتِرَامَ الوَقْتِ وَالطَّابُورِ!', modelEn: 'From Somali culture generosity and closeness of family; from British, respect for time — and queues!' },
      ],
      girl: 'رَأْيِكِ · أُسْرَتُكِ · تَأْخُذِينَهُ',
      notes: 'Develop: ghāliban / ʿādatan + akbar / aṣghar, ammā … fa-, baynamā + baʿḍu, lā aqūlu inna iḥdāhumā afḍal + akthar / akbar + noun, kāna + present vs ammā al-āna fa-, a balanced ākhudhu min … wa-min.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a school debate', title: 'Role play D — Is any culture “better” than another?', ar: 'هَلْ هُنَاكَ ثَقَافَةٌ أَفْضَلُ مِنْ غَيْرِهَا؟', you: 'the opening speaker', them: 'the debate chair',
      tasks: [
        { ex: 'هَلْ يُمْكِنُ أَنْ نَقُولَ إِنَّ ثَقَافَةً أَفْضَلُ مِنْ أُخْرَى؟', task: 'Give a nuanced thesis.', help: 'أَرَى أَنَّ … غَيْرَ أَنَّ …', model: 'أَرَى أَنَّ الثَّقَافَاتِ مُخْتَلِفَةٌ لَا مُتَفَاضِلَةٌ، غَيْرَ أَنَّ بَعْضَ القِيَمِ، كَالعَدْلِ وَالرَّحْمَةِ، يَجِبُ أَنْ تَكُونَ مِعْيَارًا لِلْجَمِيعِ.', modelEn: 'Cultures are different, not ranked — though some values, like justice and mercy, should be a standard for all.' },
        { ex: 'أَعْطِنَا مِثَالًا عَلَى سُوءِ مُقَارَنَةٍ.', task: 'Show how comparison goes wrong.', help: 'مَثَلًا، … يَظُنُّ … بَيْنَمَا الحَقِيقَةُ …', model: 'مَثَلًا، قَدْ يَظُنُّ زَائِرٌ أَنَّ النَّاسَ فِي بَلَدٍ عَرَبِيٍّ غَيْرُ مُنَظَّمِينَ لِأَنَّ المَوَاعِيدَ مَرِنَةٌ، بَيْنَمَا الحَقِيقَةُ أَنَّهُمْ يُقَدِّمُونَ العَلَاقَاتِ عَلَى السَّاعَةِ.', modelEn: 'A visitor may think people somewhere are disorganised because appointments are flexible, whereas they put relationships before the clock.' },
        { ex: 'لٰكِنَّ المُقَارَنَةَ تُسَاعِدُنَا عَلَى التَّعَلُّمِ.', task: 'Concede and set conditions.', help: 'صَحِيحٌ أَنَّ … بِشَرْطِ أَنْ …', model: 'صَحِيحٌ أَنَّهَا مُفِيدَةٌ، بِشَرْطِ أَنْ نُقَارِنَ لِنَفْهَمَ لَا لِنَحْكُمَ، وَأَنْ نَسْأَلَ أَهْلَ الثَّقَافَةِ أَنْفُسَهُمْ قَبْلَ أَنْ نَسْتَنْتِجَ.', modelEn: 'It is useful — provided we compare to understand, not to judge, and ask the people of that culture before concluding.' },
        { ex: 'كَيْفَ تُطَبِّقُ هٰذَا فِي حَيَاتِكَ؟', task: 'Narrate a personal example.', help: 'عِنْدَمَا … كُنْتُ أَظُنُّ … ثُمَّ …', model: 'عِنْدَمَا زَارَنِي صَدِيقٌ يَابَانِيٌّ، كُنْتُ أَظُنُّ أَنَّهُ بَارِدٌ لِأَنَّهُ لَا يُعَانِقُ، ثُمَّ فَهِمْتُ أَنَّ الانْحِنَاءَ عِنْدَهُمْ تَعْبِيرٌ أَعْمَقُ عَنِ الاحْتِرَامِ.', modelEn: 'When a Japanese friend visited, I thought him cold because he didn’t hug — then I understood bowing is a deeper sign of respect for them.' },
        { unexpected: true, ex: 'لَوْ كَتَبْتَ قَاعِدَةً وَاحِدَةً لِلْمُقَارَنَةِ بَيْنَ الثَّقَافَاتِ، فَمَا هِيَ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ كَتَبْتُ قَاعِدَةً، لَكَانَتْ: "…"', model: 'لَوْ كَتَبْتُ قَاعِدَةً وَاحِدَةً، لَكَانَتْ: "قَبْلَ أَنْ تَقُولَ: غَرِيبٌ، اسْأَلْ: لِمَاذَا؟"', modelEn: '“Before you say ‘strange’, ask ‘why?’”' },
      ],
      girl: 'أَعْطِينَا · تُطَبِّقِينَ · حَيَاتِكِ · زَارَتْنِي صَدِيقَةٌ يَابَانِيَّةٌ · كَتَبْتِ',
      notes: 'Stretch: mukhtalifa lā mutafāḍila, ghayra anna + ka- examples, qad yaẓunnu … baynamā al-ḥaqīqatu anna, bi-sharṭi an + li- … lā li-, qabla an, kuntu aẓunnu … thumma fahimtu, aʿmaqu, law … la-kānat with imperatives.',
      modelFoot: 'Stretch: a nuanced thesis, a misjudgement example, conditions for fair comparison, a personal turning point and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'هُنَا وَهُنَاكَ', aim: 'one full sentence per question',
      qs: [
        { q: 'أَيُّهُمَا أَكْبَرُ: مَدِينَتُكَ أَمْ مَدِينَةُ أَجْدَادِكَ؟', en: 'Which is bigger: your town or your grandparents’?', start: '… أَكْبَرُ مِنْ …', model: 'مَدِينَتِي أَكْبَرُ مِنْ مَدِينَةِ أَجْدَادِي.', modelEn: 'My town is bigger than my grandparents’.' },
        { q: 'أَيْنَ الطَّقْسُ أَحَرُّ؟', en: 'Where is the weather hotter?', start: 'الطَّقْسُ فِي … أَحَرُّ مِنْ …', model: 'الطَّقْسُ فِي مِصْرَ أَحَرُّ مِنْ بَرِيطَانْيَا.', modelEn: 'Egypt is hotter than Britain.' },
        { q: 'هَلْ تَأْكُلُونَ مَعًا فِي البَيْتِ؟', en: 'Do you eat together at home?', start: 'نَعَمْ / غَالِبًا …', model: 'نَعَمْ، غَالِبًا نَأْكُلُ العَشَاءَ مَعًا.', modelEn: 'Yes, usually dinner together.' },
        { q: 'مَا أَيَّامُ العُطْلَةِ فِي بَلَدِ أَجْدَادِكَ؟', en: 'What are the weekend days in your grandparents’ country?', start: 'العُطْلَةُ …', model: 'العُطْلَةُ هُنَاكَ الجُمُعَةُ وَالسَّبْتُ.', modelEn: 'Friday and Saturday there.' },
        { q: 'هَلِ الثَّقَافَتَانِ مُخْتَلِفَتَانِ جِدًّا؟', en: 'Are the two cultures very different?', start: 'فِيهِمَا … وَ…', model: 'فِيهِمَا اخْتِلَافَاتٌ، لٰكِنْ فِيهِمَا تَشَابُهٌ أَيْضًا.', modelEn: 'There are differences, but similarities too.' },
      ],
      foot: 'Core: one full sentence for every question — use afʿal min (أَكْبَرُ مِنْ · أَحَرُّ مِنْ). If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + afʿal min = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'مُقَارَنَاتٌ مِنْ حَيَاتِي', aim: 'two or three sentences, with baynamā or ammā … fa- and a hedge',
      qs: [
        { q: 'قَارِنْ بَيْنَ المَدْرَسَةِ هُنَا وَفِي بَلَدٍ عَرَبِيٍّ.', en: 'Compare school here and in an Arab country.', start: 'هُنَا … بَيْنَمَا هُنَاكَ …', model: 'هُنَا نَدْرُسُ فِي مَجْمُوعَاتٍ صَغِيرَةٍ، بَيْنَمَا الصُّفُوفُ هُنَاكَ غَالِبًا أَكْبَرُ، وَالطُّلَّابُ يَقِفُونَ عِنْدَمَا يَدْخُلُ المُعَلِّمُ.', modelEn: 'Here we study in small groups; there classes are often bigger and students stand when the teacher enters.' },
        { q: 'كَيْفَ يَخْتَلِفُ الطَّعَامُ؟', en: 'How does food differ?', start: 'أَمَّا الطَّعَامُ فَـ… ؛ مَثَلًا …', model: 'أَمَّا الطَّعَامُ فَهُوَ أَكْثَرُ تَوَابِلَ عِنْدَنَا؛ مَثَلًا، نَضَعُ الكَمُّونَ فِي كُلِّ شَيْءٍ تَقْرِيبًا!', modelEn: 'Our food is spicier — we put cumin in almost everything!' },
        { q: 'هَلْ هُنَاكَ أَشْيَاءُ مُتَشَابِهَةٌ؟', en: 'Are there similar things?', start: 'نَعَمْ، فِي كِلْتَا الثَّقَافَتَيْنِ …', model: 'نَعَمْ، فِي كِلْتَا الثَّقَافَتَيْنِ يُحِبُّ النَّاسُ كُرَةَ القَدَمِ، وَيَحْتَرِمُونَ كِبَارَ السِّنِّ.', modelEn: 'In both, people love football and respect the elderly.' },
        { q: 'هَلْ غَيَّرْتَ رَأْيَكَ فِي ثَقَافَةٍ مَا؟', en: 'Have you changed your mind about a culture?', start: 'كُنْتُ أَظُنُّ أَنَّ … أَمَّا الآنَ فَـ…', model: 'كُنْتُ أَظُنُّ أَنَّ الإِنْجْلِيزَ لَا يُحِبُّونَ الضُّيُوفَ، أَمَّا الآنَ فَأَعْرِفُ أَنَّهُمْ يُحِبُّونَ الدَّعَوَاتِ المُخَطَّطَ لَهَا مُسْبَقًا.', modelEn: 'I thought the English didn’t like guests; now I know they like invitations planned ahead.' },
        { q: 'أَيْنَ تُفَضِّلُ أَنْ تَعِيشَ فِي المُسْتَقْبَلِ؟', en: 'Where would you prefer to live in future?', start: 'أُفَضِّلُ … لِأَنَّ … مَعَ أَنَّ …', model: 'أُفَضِّلُ بَرِيطَانْيَا لِلدِّرَاسَةِ، مَعَ أَنَّ الطَّقْسَ أَبْرَدُ، لٰكِنَّنِي سَأَقْضِي الصَّيْفَ دَائِمًا مَعَ أَقَارِبِي فِي السُّودَانِ.', modelEn: 'Britain for study, though it’s colder — but I’ll always spend summers with relatives in Sudan.' },
      ],
      foot: 'Develop: two or three sentences — baynamā or ammā … fa-, a hedge (ghāliban, baʿḍu) and a reason.',
      modelFoot: 'Comparison + contrast + hedging = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'المُقَارَنَةُ وَالاحْتِرَامُ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'لِمَاذَا تَقُودُ بَعْضُ المُقَارَنَاتِ إِلَى سُوءِ الفَهْمِ؟', en: 'Why do some comparisons lead to misunderstanding?', start: 'لِأَنَّنَا … ؛ فَمَثَلًا …', model: 'لِأَنَّنَا نَحْكُمُ عَلَى الآخَرِينَ بِمَقَايِيسِنَا نَحْنُ؛ فَمَثَلًا، مَا نَرَاهُ "صَوْتًا عَالِيًا" قَدْ يَكُونُ عِنْدَهُمْ تَعْبِيرًا عَنِ الحَمَاسِ لَا الغَضَبِ.', modelEn: 'We judge others by our own standards: what we call “loud” may be enthusiasm, not anger, for them.' },
        { q: 'هَلْ يَجِبُ أَنْ يَتَكَيَّفَ المُهَاجِرُ مَعَ ثَقَافَةِ البَلَدِ الجَدِيدِ؟', en: 'Should an immigrant adapt to the new country’s culture?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ عَلَيْهِ أَنْ يَحْتَرِمَ القَوَانِينَ وَالعَادَاتِ العَامَّةَ، غَيْرَ أَنَّ التَّكَيُّفَ لَا يَعْنِي أَنْ يَنْسَى ثَقَافَتَهُ، بَلْ أَنْ يَبْنِيَ جِسْرًا بَيْنَهُمَا.', modelEn: 'They should respect laws and public customs, but adapting doesn’t mean forgetting their culture — it means building a bridge.' },
        { q: 'هَلِ العَالَمُ اليَوْمَ أَكْثَرُ تَسَامُحًا مِمَّا كَانَ؟', en: 'Is the world more tolerant than it was?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، نَعْرِفُ عَنْ بَعْضِنَا أَكْثَرَ بِفَضْلِ الإِنْتَرْنِتِ، وَمِنْ نَاحِيَةٍ أُخْرَى، تَنْتَشِرُ الصُّوَرُ النَّمَطِيَّةُ أَسْرَعَ مِنْ أَيِّ وَقْتٍ مَضَى.', modelEn: 'We know more about each other thanks to the internet, but stereotypes spread faster than ever.' },
        { q: 'مَا الَّذِي يَجْمَعُ الثَّقَافَاتِ كُلَّهَا؟', en: 'What do all cultures share?', start: 'رَغْمَ … فَإِنَّ …', model: 'رَغْمَ اخْتِلَافِ اللُّغَاتِ وَالأَطْعِمَةِ، فَإِنَّ كُلَّ الثَّقَافَاتِ تُحِبُّ الأَطْفَالَ، وَتُكْرِمُ الضَّيْفَ، وَتَحْزَنُ عَلَى الفَقْدِ.', modelEn: 'Despite different languages and food, all cultures love children, honour guests and grieve loss.' },
        { q: 'لَوْ عِشْتَ يَوْمًا فِي ثَقَافَةٍ مُخْتَلِفَةٍ تَمَامًا، مَاذَا تَتَعَلَّمُ؟', en: 'If you lived a day in a totally different culture, what would you learn?', start: 'لَوْ عِشْتُ …، لَـ…', model: 'لَوْ عِشْتُ يَوْمًا مَعَ عَائِلَةٍ فِي قَرْيَةٍ يَابَانِيَّةٍ، لَتَعَلَّمْتُ الصَّمْتَ وَالدِّقَّةَ، وَلَأَدْرَكْتُ أَنَّ عَادَاتِي لَيْسَتِ الطَّرِيقَةَ الوَحِيدَةَ لِلْحَيَاةِ.', modelEn: 'With a family in a Japanese village I’d learn silence and precision, and realise my habits aren’t the only way to live.' },
      ],
      foot: 'Stretch: a reason with mathalan, a concession with lā yaʿnī … bal, a balanced view, raghma … fa-inna and law … la-.',
      modelFoot: 'Stretch: maqāyīsunā naḥnu, lā al-ghaḍab, lā yaʿnī … bal an, asraʿ min ayyi waqtin, raghma … fa-inna and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I compared with afʿal min (akbaru min, abkaru min).' },
    { route: 'core', text: 'I named one difference and one similarity.' },
    { route: 'develop', text: 'I used baynamā or ammā … fa-.' },
    { route: 'develop', text: 'I hedged (ghāliban, baʿḍu an-nās, laysa al-jamīʿ).' },
    { route: 'stretch', text: 'I said “different, not better” with a concession and law … la-.' },
  ],
};
speak.RP[2].tasks[0].help = 'الأُسْرَةُ … غَالِبًا … أَمَّا … فَأَصْغَرُ …';
speak.RP[2].tasks[3].help = 'كَانَ … أَمَّا الآنَ فَنَسْكُنُ …';
speak.RP[3].tasks[4].help = 'لَوْ كَتَبْتُ قَاعِدَةً، لَكَانَتْ: "…"';
speak.CONV[1].qs[1].start = 'أَمَّا الطَّعَامُ فَهُوَ … ؛ مَثَلًا …';
speak.CONV[1].qs[3].start = 'كُنْتُ أَظُنُّ أَنَّ … أَمَّا الآنَ فَأَعْرِفُ …';
speak.CONV[2].qs[4].start = 'لَوْ عِشْتُ …، لَتَعَلَّمْتُ …';

const Q2_CORE = `مَرْحَبًا يَا عَلِيُّ،
كَيْفَ حَالُكَ؟ شُكْرًا عَلَى رِسَالَتِكَ عَنْ مَدْرَسَتِكَ فِي الدَّوْحَةِ. مَدْرَسَتِي فِي مَانْشِسْتَرَ مُخْتَلِفَةٌ قَلِيلًا. يَبْدَأُ يَوْمِي فِي الثَّامِنَةِ وَالنِّصْفِ، بَيْنَمَا يَبْدَأُ يَوْمُكَ فِي السَّابِعَةِ، لِذٰلِكَ يَوْمُكَ أَبْكَرُ مِنْ يَوْمِي. عُطْلَتُنَا السَّبْتُ وَالأَحَدُ، أَمَّا عُطْلَتُكُمْ فَالجُمُعَةُ وَالسَّبْتُ. نَأْكُلُ الغَدَاءَ فِي المَدْرَسَةِ، وَهُوَ غَالِبًا سَنْدَوِيشٌ أَوْ بِيتْزَا. أَظُنُّ أَنَّ المَدْرَسَتَيْنِ مُخْتَلِفَتَانِ، لٰكِنْ لَيْسَتْ إِحْدَاهُمَا أَفْضَلَ مِنَ الأُخْرَى. فِي الصَّيْفِ سَأَزُورُ قَطَرَ إِنْ شَاءَ اللّٰهُ. وَأَنْتَ، مَاذَا تَأْكُلُ فِي المَدْرَسَةِ؟
مَعَ السَّلَامَةِ،
حَمْزَةُ`;
const Q2_FULL = `عَزِيزِي عَلِيُّ،
قَرَأْتُ رِسَالَتَكَ بِاهْتِمَامٍ، وَلَاحَظْتُ أَنَّ أُسْبُوعَيْنَا الدِّرَاسِيَّيْنِ يَخْتَلِفَانِ فِي أَشْيَاءَ كَثِيرَةٍ. فَيَوْمُكَ يَبْدَأُ فِي السَّابِعَةِ لِتَتَجَنَّبُوا حَرَّ الظُّهْرِ، بَيْنَمَا يَبْدَأُ يَوْمِي فِي الثَّامِنَةِ وَالنِّصْفِ، وَيَنْتَهِي مُتَأَخِّرًا لِأَنَّنَا نَبْقَى لِلنَّوَادِي. أَمَّا العُطْلَةُ، فَعُطْلَتُكُمُ الجُمُعَةُ وَالسَّبْتُ لِأَنَّ الجُمُعَةَ يَوْمُ الصَّلَاةِ الجَامِعَةِ، وَعُطْلَتُنَا السَّبْتُ وَالأَحَدُ. وَأَكْثَرُ مَا أَعْجَبَنِي فِي مَدْرَسَتِكَ أَنَّ الطُّلَّابَ يُسَاعِدُونَ فِي تَنْظِيفِ الصَّفِّ، مِمَّا يُعَلِّمُ المَسْؤُولِيَّةَ. صَحِيحٌ أَنَّ النِّظَامَيْنِ مُخْتَلِفَانِ، غَيْرَ أَنَّ لِكُلٍّ مِنْهُمَا مَزَايَاهُ. وَإِذَا زُرْتُ الدَّوْحَةَ فِي الصَّيْفِ، فَهَلْ يُمْكِنُنِي أَنْ أَحْضُرَ يَوْمًا فِي مَدْرَسَتِكَ؟
مَعَ أَطْيَبِ التَّحِيَّاتِ،
حَمْزَةُ`;
const Q3A_CORE = `أَنَا حَمْزَةُ، وَأَعِيشُ فِي مَانْشِسْتَرَ، لٰكِنَّ أَصْلَ أُسْرَتِي مِنَ السُّودَانِ. أَزُورُ السُّودَانَ كُلَّ صَيْفٍ، لِذٰلِكَ أَعْرِفُ الثَّقَافَتَيْنِ جَيِّدًا، وَأُحِبُّهُمَا مَعًا.
أَوَّلًا، الطَّقْسُ مُخْتَلِفٌ جِدًّا. فِي السُّودَانِ الطَّقْسُ أَحَرُّ بِكَثِيرٍ، بَيْنَمَا الطَّقْسُ فِي مَانْشِسْتَرَ بَارِدٌ وَمُمْطِرٌ غَالِبًا. لِذٰلِكَ يَخْرُجُ النَّاسُ هُنَاكَ فِي المَسَاءِ، أَمَّا هُنَا فَيَخْرُجُونَ فِي النَّهَارِ.
ثَانِيًا، العَائِلَةُ فِي السُّودَانِ أَكْبَرُ. يَسْكُنُ جَدِّي مَعَ أَعْمَامِي وَأَوْلَادِهِمْ فِي بَيْتٍ وَاحِدٍ، بَيْنَمَا نَسْكُنُ هُنَا فِي بَيْتٍ صَغِيرٍ مَعَ وَالِدَيَّ وَأُخْتِي. كَذٰلِكَ يَزُورُ النَّاسُ هُنَاكَ بَعْضَهُمْ بِدُونِ مَوْعِدٍ، أَمَّا هُنَا فَنَتَّصِلُ قَبْلَ الزِّيَارَةِ بِيَوْمٍ أَوْ يَوْمَيْنِ غَالِبًا.
وَلٰكِنْ هُنَاكَ أَشْيَاءُ مُتَشَابِهَةٌ أَيْضًا؛ مَثَلًا، فِي البَلَدَيْنِ يُحِبُّ النَّاسُ كُرَةَ القَدَمِ وَالشَّايَ بِالحَلِيبِ! فِي رَأْيِي، الثَّقَافَتَانِ مُخْتَلِفَتَانِ، لٰكِنْ لَيْسَتْ إِحْدَاهُمَا أَفْضَلَ مِنَ الأُخْرَى. فِي المُسْتَقْبَلِ سَأَعِيشُ هُنَا، وَسَأَزُورُ السُّودَانَ دَائِمًا مَعَ أَوْلَادِي.`;
const Q3A_FULL = `حِينَ أَهْبِطُ فِي مَطَارِ الخُرْطُومِ كُلَّ صَيْفٍ، أَشْعُرُ بِأَنَّنِي أَنْتَقِلُ مِنْ عَالَمٍ إِلَى آخَرَ فِي سَاعَاتٍ قَلِيلَةٍ؛ فَالحَرُّ يُعَانِقُنِي، وَالأَصْوَاتُ أَعْلَى، وَالزَّمَنُ نَفْسُهُ يَبْدُو أَبْطَأَ.
فَفِي مَانْشِسْتَرَ تُدِيرُ السَّاعَةُ حَيَاتَنَا: مَوَاعِيدُ دَقِيقَةٌ، وَزِيَارَاتٌ مُخَطَّطٌ لَهَا مُسْبَقًا، وَعَشَاءٌ فِي السَّادِسَةِ تَمَامًا، وَهُدُوءٌ فِي الشَّوَارِعِ بَعْدَ العَاشِرَةِ. أَمَّا فِي الخُرْطُومِ، فَالعَلَاقَاتُ هِيَ الَّتِي تُدِيرُ السَّاعَةَ؛ إِذْ يُمْكِنُ أَنْ يَطْرُقَ قَرِيبٌ البَابَ فِي أَيِّ وَقْتٍ، فَيُسْتَقْبَلَ كَأَنَّهُ كَانَ مُنْتَظَرًا مُنْذُ أَيَّامٍ.
وَقَدْ كُنْتُ فِي صِغَرِي أُقَارِنُ بَيْنَ البَلَدَيْنِ بِطَرِيقَةٍ ظَالِمَةٍ، فَأَرَى هٰذَا "مُنَظَّمًا" وَذَاكَ "فَوْضَوِيًّا". غَيْرَ أَنَّنِي أَدْرَكْتُ مَعَ الوَقْتِ أَنَّ لِكُلِّ نِظَامٍ مَنْطِقَهُ؛ فَالمُرُونَةُ السُّودَانِيَّةُ تَصْنَعُ دِفْئًا لَا تَصْنَعُهُ الجَدَاوِلُ، وَالدِّقَّةُ البَرِيطَانِيَّةُ تَحْمِي وَقْتَ الإِنْسَانِ وَخُصُوصِيَّتَهُ وَرَاحَتَهُ.
لِذٰلِكَ لَا أَقُولُ إِنَّ إِحْدَى الثَّقَافَتَيْنِ أَفْضَلُ مِنَ الأُخْرَى، بَلْ إِنَّنِي مَحْظُوظٌ لِأَنَّنِي أَعِيشُ بَيْنَهُمَا. وَلَوْ جَمَعْتُ أَجْمَلَ مَا فِيهِمَا، لَصَنَعْتُ ثَقَافَةً ثَالِثَةً: دَقِيقَةً فِي المَوَاعِيدِ، وَكَرِيمَةً فِي القُلُوبِ.`;
const Q3B_FULL = `نُقَارِنُ كُلَّ يَوْمٍ بَيْنَ الثَّقَافَاتِ دُونَ أَنْ نَشْعُرَ بِذٰلِكَ: هٰذَا الطَّعَامُ أَلَذُّ، وَتِلْكَ العَادَاتُ أَغْرَبُ، وَأُولٰئِكَ النَّاسُ أَكْثَرُ بُرُودًا. فَكَيْفَ نُقَارِنُ بَيْنَ الثَّقَافَاتِ دُونَ أَنْ نَحْكُمَ عَلَيْهَا؟
أَوَّلًا، يَجِبُ أَنْ نَتَجَنَّبَ التَّعْمِيمَ؛ فَلَيْسَ كُلُّ الإِنْجْلِيزِ بَارِدِينَ، وَلَيْسَ كُلُّ العَرَبِ مُتَأَخِّرِينَ. لِذٰلِكَ مِنَ الأَدَقِّ أَنْ نَقُولَ "غَالِبًا" أَوْ "بَعْضُ النَّاسِ". ثَانِيًا، عَلَيْنَا أَنْ نَسْأَلَ عَنِ السَّبَبِ قَبْلَ أَنْ نَحْكُمَ؛ فَالعَادَةُ الَّتِي تَبْدُو غَرِيبَةً لَهَا غَالِبًا تَفْسِيرٌ مَنْطِقِيٌّ يَرْتَبِطُ بِالطَّقْسِ أَوِ الدِّينِ أَوِ التَّارِيخِ.
وَقَدْ تَعَلَّمْتُ ذٰلِكَ عِنْدَمَا ضَحِكْتُ مِنْ صَدِيقٍ يَابَانِيٍّ يَخْلَعُ حِذَاءَهُ فِي المَدْرَسَةِ، ثُمَّ تَذَكَّرْتُ أَنَّنَا نَخْلَعُ أَحْذِيَتَنَا فِي المَسْجِدِ لِلسَّبَبِ نَفْسِهِ تَقْرِيبًا: النَّظَافَةُ وَالاحْتِرَامُ. فَخَجِلْتُ مِنْ نَفْسِي، وَاعْتَذَرْتُ لَهُ، فَصَارَ مِنْ أَقْرَبِ أَصْدِقَائِي.
صَحِيحٌ أَنَّ المُقَارَنَةَ طَبِيعِيَّةٌ وَمُفِيدَةٌ أَحْيَانًا، غَيْرَ أَنَّ هَدَفَهَا يَنْبَغِي أَنْ يَكُونَ الفَهْمَ لَا التَّفْضِيلَ. فَإِذَا قُلْنَا "مُخْتَلِفٌ" بَدَلًا مِنْ "أَسْوَأَ"، فَسَيُصْبِحُ العَالَمُ أَوْسَعَ لِلْجَمِيعِ، وَأَكْثَرَ دِفْئًا وَأَقَلَّ خَوْفًا.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a twinning-project comparison form, write an email comparing your school week with a penfriend’s in Qatar, and write an extended piece comparing life in two cultures or about how to compare cultures without judging them.',
  lift: [
    { ar: 'يَبْدَأُ يَوْمِي فِي الثَّامِنَةِ، بَيْنَمَا يَبْدَأُ يَوْمُكَ فِي السَّابِعَةِ', en: 'my day starts at eight, whereas yours starts at seven' },
    { ar: 'عُطْلَتُنَا السَّبْتُ وَالأَحَدُ، أَمَّا عُطْلَتُكُمْ فَالجُمُعَةُ وَالسَّبْتُ', en: 'our weekend is Saturday–Sunday; as for yours, it is Friday–Saturday' },
    { ar: 'مُخْتَلِفَتَانِ، لٰكِنْ لَيْسَتْ إِحْدَاهُمَا أَفْضَلَ مِنَ الأُخْرَى', en: 'different, but neither is better than the other' },
  ],
  checkTip: 'Check comparison and contrast: afʿal min never changes (al-madrasatu akbaru min …); akthar + accusative (akthar burūdan); baynamā + a full sentence; ammā X fa- + comment (don’t forget fa-); dual agreement (mukhtalifatāni, iḥdāhumā); and hedge every generalisation (ghāliban, baʿḍu, laysa kullu).',
  FORM: {
    title: 'Twinning-project comparison form', ar: 'اسْتِمَارَةُ مُقَارَنَةٍ لِمَشْرُوعِ التَّوْأَمَةِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'حَمْزَةُ أَحْمَدُ', modelEn: 'Hamza Ahmed' },
      { core: true, ar: 'مَدِينَتُكَ', en: 'Your city', model: 'مَانْشِسْتَرُ', modelEn: 'Manchester' },
      { core: true, ar: 'مَدِينَةُ صَدِيقِكَ', en: 'Your partner’s city', model: 'الدَّوْحَةُ', modelEn: 'Doha' },
      { core: true, ar: 'بِدَايَةُ اليَوْمِ الدِّرَاسِيِّ عِنْدَكَ', en: 'Your school start time', model: 'الثَّامِنَةُ وَالنِّصْفُ', modelEn: '8.30' },
      { core: true, ar: 'بِدَايَةُ اليَوْمِ الدِّرَاسِيِّ عِنْدَهُ', en: 'His school start time', model: 'السَّابِعَةُ', modelEn: '7.00' },
      { core: true, ar: 'أَيَّامُ العُطْلَةِ عِنْدَكَ', en: 'Your weekend', model: 'السَّبْتُ وَالأَحَدُ', modelEn: 'Saturday and Sunday' },
      { ar: 'تَشَابُهٌ وَاحِدٌ', en: 'One similarity', model: 'حُبُّ كُرَةِ القَدَمِ', modelEn: 'love of football' },
      { ar: 'جُمْلَةٌ: قَارِنْ بَيْنَ المَدْرَسَتَيْنِ', en: 'ONE sentence: compare the two schools', model: 'يَوْمُهُ أَبْكَرُ مِنْ يَوْمِي، بَيْنَمَا يَوْمِي أَطْوَلُ بِسَبَبِ النَّوَادِي.', modelEn: 'His day starts earlier than mine, whereas mine is longer because of clubs.' },
    ],
    foot: 'One word or a short phrase for each box — boxes 4–5 are times; the last box is a full sentence with afʿal min AND baynamā.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 7 takes a verbal noun (ḥubb). Box 8: two comparatives linked by baynamā. A girl writes صَدِيقَتِكِ / عِنْدَهَا in the headings.',
  },
  Q2: {
    short: 'an email comparing two school weeks', title: 'Question 2: my school and yours', ar: 'مَدْرَسَتِي وَمَدْرَسَتُكَ',
    task: 'Write an email in Arabic to a penfriend in Qatar of about 80–90 words. You must include: • when your school day starts and ends, compared with his • your weekend compared with his • lunch or another difference at school • your opinion of the two schools and your plans, and a question for your friend.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'afʿal min, baynamā AND ammā … fa-.', 'A respectful conclusion (different, not better).', 'About 80–90 words.'],
    phrases: [['يَبْدَأُ يَوْمِي فِي … بَيْنَمَا يَبْدَأُ يَوْمُكَ …', 'my day starts at … whereas yours …'], ['يَوْمُكَ أَبْكَرُ مِنْ يَوْمِي', 'your day is earlier than mine'], ['عُطْلَتُنَا … أَمَّا عُطْلَتُكُمْ فَالجُمُعَةُ …', 'our weekend … as for yours …'], ['لَيْسَتْ إِحْدَاهُمَا أَفْضَلَ مِنَ الأُخْرَى', 'neither is better than the other']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ فِي قَطَرَ تُقَارِنُ فِيهَا بَيْنَ مَدْرَسَتَيْكُمَا (٨٠–٩٠ كَلِمَةً).', 'Write to your friend in Qatar comparing your schools (80–90 words).'],
      ['1', 'مَتَى يَبْدَأُ يَوْمُكَ وَيَنْتَهِي؟ قَارِنْ بِيَوْمِهِ.', 'Your school day vs his'],
      ['2', 'مَا أَيَّامُ عُطْلَتِكَ؟ قَارِنْ بِعُطْلَتِهِ.', 'Your weekend vs his'],
      ['3', 'صِفِ الغَدَاءَ أَوْ فَرْقًا آخَرَ فِي المَدْرَسَةِ.', 'Lunch or another difference'],
      ['4', 'مَا رَأْيُكَ فِي المَدْرَسَتَيْنِ؟ وَمَا خِطَطُكَ؟ وَاسْأَلْ صَدِيقَكَ سُؤَالًا.', 'Your opinion; plans; a question'],
    ],
    qwords: 'قَارِنْ (compare! → أَكْثَرُ / أَبْكَرُ مِنْ · بَيْنَمَا) · صِفْ (describe!) · المَدْرَسَتَيْنِ (the two schools — dual) · خِطَطُكَ (plans — FUTURE)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، شُكْرًا عَلَى رِسَالَتِكَ.', 'Hello …, thanks for your letter.'],
      ['1', 'يَبْدَأُ يَوْمِي فِي ______ ، بَيْنَمَا يَبْدَأُ يَوْمُكَ فِي ______ .', 'My day starts at …, whereas yours …'],
      ['2', 'عُطْلَتُنَا ______ ، أَمَّا عُطْلَتُكُمْ فَهِيَ ______ .', 'Our weekend …; as for yours, …'],
      ['3', 'نَأْكُلُ الغَدَاءَ ______ ، وَهُوَ غَالِبًا ______ .', 'We eat lunch …; it is usually …'],
      ['4', 'المَدْرَسَتَانِ مُخْتَلِفَتَانِ، لٰكِنْ ______ .', 'The schools differ, but …'],
      ['end', 'وَأَنْتَ، ______ ؟ مَعَ السَّلَامَةِ.', 'And you, …? Goodbye.'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Ali, how are you? Thanks for your letter about your school in Doha. My school in Manchester is a bit different. My day starts at 8.30, whereas yours starts at seven, so your day is earlier than mine. Our weekend is Saturday and Sunday; as for yours, it’s Friday and Saturday. We eat lunch at school — usually a sandwich or pizza. I think the two schools are different, but neither is better than the other. In the summer I’ll visit Qatar, God willing. And you, what do you eat at school? Goodbye, Hamza.”',
      find: ['بَيْنَمَا يَبْدَأُ', 'أَبْكَرُ مِنْ', 'أَمَّا عُطْلَتُكُمْ فَالجُمُعَةُ', 'لَيْسَتْ إِحْدَاهُمَا أَفْضَلَ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Ali, I read your letter with interest and noticed our school weeks differ in many ways. Your day starts at seven to avoid the midday heat, whereas mine starts at 8.30 and ends late because we stay for clubs. As for the weekend, yours is Friday and Saturday because Friday is the day of congregational prayer, and ours is Saturday and Sunday. What I liked most about your school is that students help clean the classroom, which teaches responsibility. The two systems are different, but each has its advantages. If I visit Doha in the summer, could I attend a day at your school? Best wishes, Hamza.”',
      find: ['أُسْبُوعَيْنَا الدِّرَاسِيَّيْنِ يَخْتَلِفَانِ', 'لِتَتَجَنَّبُوا … بَيْنَمَا', 'مِمَّا يُعَلِّمُ', 'لِكُلٍّ مِنْهُمَا مَزَايَاهُ'],
    },
  },
  Q3: {
    a: { title: 'بَيْنَ ثَقَافَتَيْنِ: هُنَا وَهُنَاكَ', en: 'Between two cultures: here and there', bullets: 'مَنْ أَنْتَ وَمَا الثَّقَافَتَانِ · اخْتِلَافٌ فِي الحَيَاةِ اليَوْمِيَّةِ · اخْتِلَافٌ فِي العَائِلَةِ أَوِ الزِّيَارَاتِ · تَشَابُهٌ وَرَأْيُكَ وَخُطَطُكَ', bulletsEn: 'Who you are and the two cultures · a daily-life difference · a family or visiting difference · a similarity, your opinion and plans' },
    b: { title: 'كَيْفَ نُقَارِنُ بَيْنَ الثَّقَافَاتِ دُونَ أَنْ نَحْكُمَ عَلَيْهَا؟', en: 'How can we compare cultures without judging them?', bullets: 'المَوْضُوعُ · تَجَنُّبُ التَّعْمِيمِ وَالسُّؤَالُ عَنِ السَّبَبِ · مِثَالٌ مِنْ تَجْرِبَتِكَ · رَأْيُكَ', bulletsEn: 'The issue · avoiding generalisations and asking why · an example from your experience · your opinion' },
    plan: [
      'The two cultures — anā …, aʿīshu fī …, lākinna aṣla usratī min …; azūru … kulla ṣayfin',
      'Daily life — awwalan … aḥarru bi-kathīr, baynamā … ghāliban; li-dhālika …, ammā hunā fa- …',
      'Family / visits — thāniyan al-ʿāʾila … akbar; baynamā naskunu …; ammā hunā fa-nattaṣilu …',
      'Similarity + opinion — mathalan, fī al-baladayni …; mukhtalifatāni lākin laysat iḥdāhumā afḍala; sa- …; Stretch: lā aqūlu inna … bal, law … la-.',
    ],
    frames: [
      { ar: 'الطَّقْسُ هُنَاكَ أَحَرُّ بِكَثِيرٍ مِنْ هُنَا.', en: 'comparative: much hotter there than here.' },
      { ar: 'نَتَّصِلُ قَبْلَ الزِّيَارَةِ، بَيْنَمَا يَزُورُونَ بِدُونِ مَوْعِدٍ.', en: 'baynamā: we call; they just visit.' },
      { ar: 'لَيْسَتْ إِحْدَاهُمَا أَفْضَلَ مِنَ الأُخْرَى.', en: 'respect: neither is better.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Hamza in Manchester, family from Sudan, visiting every summer → much hotter there, whereas Manchester is usually cold and rainy; so people there go out in the evening, here in the day → families there are bigger: grandpa lives with uncles and cousins, whereas we live in a small house; they visit without appointments, here we call first → similarities too, like football and tea; different, but neither is better.', find: ['أَحَرُّ بِكَثِيرٍ', 'بَيْنَمَا الطَّقْسُ', 'أَمَّا هُنَا فَيَخْرُجُونَ', 'لَيْسَتْ إِحْدَاهُمَا'], notes: 'Core model: afʿal min + bi-kathīr, baynamā ×2, ammā hunā fa- ×2, hedging (ghāliban), awwalan / thāniyan, a similarity with mathalan and a respectful conclusion with the dual (ath-thaqāfatāni mukhtalifatāni).' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Landing in Khartoum each summer I feel I move between worlds in a few hours: the heat embraces me, voices are louder, time itself seems slower → in Manchester the clock runs our lives: precise appointments, planned visits, dinner at six sharp, quiet streets after ten; in Khartoum relationships run the clock: a relative may knock any time and be welcomed as if expected for days → as a child I compared unfairly — “organised” vs “chaotic”; but I realised each system has its logic: Sudanese flexibility creates a warmth timetables can’t, British precision protects people’s time, privacy and rest → I won’t say one culture is better; I’m lucky to live between them; “if I combined the best of both, I’d make a third culture: precise in appointments, generous in heart”.', find: ['يَبْدُو أَبْطَأَ', 'أَمَّا فِي الخُرْطُومِ، فَالعَلَاقَاتُ', 'لِكُلِّ نِظَامٍ مَنْطِقَهُ', 'لَوْ جَمَعْتُ … لَصَنَعْتُ'], notes: 'Full-mark model: a sensory hook with three short clauses and abṭaʾ, a colon list, ammā … fa- with a reversed image, a passive yustaqbala + kaʾannahu, kuntu + present (compared unfairly), ghayra annanī adraktu, a relative-free lā taṣnaʿuhu, lā aqūlu inna … bal inna and law … la- with paired adjectives.' },
      { which: 'ب', level: 'Full', subtitle: 'comparing without judging', text: Q3B_FULL, en: 'Every day we compare cultures without noticing: this food is tastier, those customs stranger, those people colder — how can we compare without judging? → first, avoid generalising: not all English people are cold, not all Arabs late; it’s more accurate to say “usually” or “some people”; second, ask why before judging — a strange custom usually has a logical explanation linked to climate, faith or history → I learnt this when I laughed at a Japanese friend taking off his shoes at school, then remembered we take ours off in the mosque for almost the same reason: cleanliness and respect; I felt ashamed and apologised, and he became one of my closest friends → comparison is natural and sometimes useful, but its aim should be understanding, not ranking; “if we say ‘different’ instead of ‘worse’, the world will become wider for everyone, warmer and less afraid”.', find: ['أَلَذُّ … أَغْرَبُ … أَكْثَرُ بُرُودًا', 'لَيْسَ كُلُّ … وَلَيْسَ كُلُّ', 'لِلسَّبَبِ نَفْسِهِ', 'الفَهْمَ لَا التَّفْضِيلَ'], notes: 'Full-mark model for the Stretch title: three comparatives in the hook (aladhdh, aghrab, akthar burūdan), dūna an ×2, laysa kullu … wa-laysa kullu, min al-adaqqi an, qabla an, a narrated turning point with fa-khajiltu, al-fahma lā at-tafḍīla, and idhā … fa-sa- with badalan min and awsaʿ.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic, with a comparison in box 8.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: afʿal min, baynamā and ammā … fa-.' },
    { route: 'develop', text: 'Q3: hedging (ghāliban, baʿḍu) and a similarity as well as differences.' },
    { route: 'stretch', text: 'Q3: “different, not better”, a concession and a conditional.' },
  ],
};

module.exports = { speak, write };
