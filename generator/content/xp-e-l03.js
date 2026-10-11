'use strict';
/* Exam-practice data · TE-L03 · Culture and Personal Identity (possessive suffixes; inna / anna + accusative; reasons and examples: li-anna, bi-sababi, mathalan, mithla). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'E', n: 3, short: 'Culture and Personal Identity', arShort: 'الثَّقَافَةُ وَالهُوِيَّةُ', fileTitle: 'Culture_and_Personal_Identity', title: 'Culture and Personal Identity', ar: 'الثَّقَافَةُ وَالهُوِيَّةُ الشَّخْصِيَّةُ', icon: 'FaLayerGroup', grammar: 'possessive suffixes (thaqāfatī, lughatunā, ajdāduhum); inna / anna + accusative (inna al-huwiyyata …); reasons and examples (li-anna, bi-sababi, mathalan, mithla)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: describe your culture and what makes you who you are — food, clothes, language, faith, family traditions — with possessive endings (ثَقَافَتِي · عَادَاتُنَا), إِنَّ / أَنَّ + accusative, and a reason plus an example in every answer (لِأَنَّ · مَثَلًا · مِثْلُ).',
  words: [
    w(1, 'ثَقَافَةٌ', 'culture', [['cultures', 'ثَقَافَاتٌ'], ['my culture', 'ثَقَافَتِي']], { tag: 'noun' }),
    w(2, 'هُوِيَّةٌ', 'identity', [['our identity', 'هُوِيَّتُنَا'], ['identities', 'هُوِيَّاتٌ']], { tag: 'noun' }),
    w(3, 'عَادَةٌ', 'a custom / habit', [['customs', 'عَادَاتٌ'], ['our customs', 'عَادَاتُنَا']], { tag: 'noun' }),
    w(4, 'تَقْلِيدٌ', 'a tradition', [['traditions', 'تَقَالِيدُ'], ['traditional (f.)', 'تَقْلِيدِيَّةٌ']], { tag: 'noun' }),
    w(5, 'جُذُورٌ', 'roots', [['ancestors', 'أَجْدَادٌ'], ['heritage', 'تُرَاثٌ']], { tag: 'noun' }),
    w(6, 'أَعْتَزُّ بِثَقَافَتِي', 'I take pride in …', [['proud (m. · f.)', 'فَخُورٌ · فَخُورَةٌ'], ['I belong to', 'أَنْتَمِي إِلَى']], { tag: 'verb' }),
    w(7, 'إِنَّ … · أَنَّ …', 'indeed … · that …', [['inna + acc.', 'إِنَّ الهُوِيَّةَ مُهِمَّةٌ'], ['I think that', 'أَظُنُّ أَنَّ']], { tag: 'grammar' }),
    w(8, 'مَثَلًا · مِثْلُ', 'for example · such as', [['because', 'لِأَنَّ'], ['because of', 'بِسَبَبِ']], { tag: 'linkers' }),
    w(9, 'زِيٌّ تَقْلِيدِيٌّ', 'traditional dress', [['clothes', 'مَلَابِسُ'], ['I wear', 'أَلْبَسُ']], { tag: 'noun' }),
    w(10, 'أَكْلَةٌ شَعْبِيَّةٌ', 'a traditional dish', [['dishes', 'أَكَلَاتٌ'], ['my grandmother’s', 'أَكْلَةُ جَدَّتِي']], { tag: 'noun' }),
    w(11, 'قِيَمٌ', 'values', [['respect', 'الاحْتِرَامُ'], ['generosity', 'الكَرَمُ']], { tag: 'noun' }),
    w(12, 'مُخْتَلِفٌ عَنْ', 'different from', [['similar to', 'يُشْبِهُ'], ['mixture', 'مَزِيجٌ']], { tag: 'adjective' }),
  ],
  words1: { eyebrow: 'Language bank · culture and possessives', title: 'My culture · our customs', ar: 'ثَقَافَتِي وَعَادَاتُنَا', notes: 'LANGUAGE BANK (2 min) — possessive suffixes: ـِي my, ـُنَا our, ـُهُمْ their, ـُكَ / ـُكِ your. Drill: ثَقَافَتِي · ثَقَافَتُنَا · ثَقَافَتُهُمْ. Reminder: the noun loses al- when a suffix is added.' },
  words2: { eyebrow: 'Language bank · inna, reasons and examples', title: 'Make a claim, then prove it', ar: 'الرَّأْيُ وَالسَّبَبُ وَالمِثَالُ', notes: 'LANGUAGE BANK (2 min) — the pattern: إِنَّ + noun (acc.) + claim → لِأَنَّ + reason → مَثَلًا + example. E.g. إِنَّ الطَّعَامَ جُزْءٌ مِنْ هُوِيَّتِي، لِأَنَّهُ يُذَكِّرُنِي بِأَجْدَادِي؛ مَثَلًا …' },
  checkCore: 'described their culture with possessive endings (thaqāfatī, ʿādātunā)',
  checkDevelop: 'gave a reason AND an example (li-anna … mathalan …)',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a school culture club', title: 'Role play A — Joining the culture club', ar: 'نَادِي الثَّقَافَاتِ', you: 'a student', them: 'the club leader',
      tasks: [
        { core: true, ex: 'أَهْلًا! مَا ثَقَافَتُكَ؟', task: 'Say your culture / origin.', help: 'ثَقَافَتِي … لِأَنَّ أُسْرَتِي مِنْ …', model: 'ثَقَافَتِي فِلَسْطِينِيَّةٌ وَبَرِيطَانِيَّةٌ، لِأَنَّ أُسْرَتِي مِنْ فِلَسْطِينَ.', modelEn: 'My culture is Palestinian and British, because my family is from Palestine.' },
        { core: true, ex: 'مَا أَكْلَتُكُمُ الشَّعْبِيَّةُ؟', task: 'Name a traditional dish.', help: 'أَكْلَتُنَا الشَّعْبِيَّةُ …', model: 'أَكْلَتُنَا الشَّعْبِيَّةُ المَقْلُوبَةُ، وَهِيَ لَذِيذَةٌ جِدًّا.', modelEn: 'Our traditional dish is maqluba; it’s delicious.' },
        { core: true, ex: 'وَهَلْ عِنْدَكُمْ زِيٌّ تَقْلِيدِيٌّ؟', task: 'Describe traditional dress.', help: 'نَعَمْ، … مِثْلُ …', model: 'نَعَمْ، مِثْلُ الثَّوْبِ المُطَرَّزِ الَّذِي تَلْبَسُهُ جَدَّتِي.', modelEn: 'Yes, such as the embroidered dress my grandmother wears.' },
        { core: true, ex: 'نَلْتَقِي كُلَّ أُسْبُوعٍ.', task: 'Ask which day.', help: 'فِي أَيِّ يَوْمٍ …؟', model: 'فِي أَيِّ يَوْمٍ نَلْتَقِي؟', modelEn: 'Which day do we meet?' },
        { core: true, unexpected: true, ex: 'يَوْمَ الخَمِيسِ. مَا أَهَمُّ شَيْءٍ فِي ثَقَافَتِكَ؟', task: 'Answer the unexpected question.', help: 'أَهَمُّ شَيْءٍ … لِأَنَّ …', model: 'أَهَمُّ شَيْءٍ الأُسْرَةُ، لِأَنَّنَا نَجْتَمِعُ كُلَّ جُمُعَةٍ.', modelEn: 'Family — we get together every Friday.' },
      ],
      girl: 'ثَقَافَتُكِ · ثَقَافَتِكِ · فِلَسْطِينِيَّةٌ (same)',
      notes: 'Core: possessives (thaqāfatī, aklatunā, -kum in the question), nisba in the feminine to agree with thaqāfa, mithla + relative clause, fī ayyi yawmin?, li-annanā.',
    },
    {
      id: 'B', level: 'Core+', setting: 'International Day at school', title: 'Role play B — Preparing for International Day', ar: 'التَّحْضِيرُ لِلْيَوْمِ الدُّوَلِيِّ', you: 'a student', them: 'the teacher organising the day',
      tasks: [
        { core: true, ex: 'مَاذَا سَتُحْضِرُ إِلَى اليَوْمِ الدُّوَلِيِّ؟', task: 'Say what you will bring.', help: 'سَأُحْضِرُ … وَ…', model: 'سَأُحْضِرُ كَعْكًا بِالتَّمْرِ وَصُوَرًا لِقَرْيَةِ أَجْدَادِي.', modelEn: 'I’ll bring date biscuits and photos of my grandparents’ village.' },
        { core: true, ex: 'وَمَاذَا سَتَلْبَسُ؟', task: 'Describe what you will wear.', help: 'سَأَلْبَسُ … لَوْنُهُ …', model: 'سَأَلْبَسُ الكُوفِيَّةَ، وَلَوْنُهَا أَبْيَضُ وَأَسْوَدُ.', modelEn: 'I’ll wear the keffiyeh; it is black and white.' },
        { ex: 'لِمَاذَا اخْتَرْتَ هٰذِهِ الأَشْيَاءَ؟', task: 'Give a reason with inna.', help: 'لِأَنَّ … ؛ إِنَّ … جُزْءٌ مِنْ …', model: 'لِأَنَّهَا تُمَثِّلُ تُرَاثَنَا؛ إِنَّ الكُوفِيَّةَ جُزْءٌ مِنْ هُوِيَّتِنَا.', modelEn: 'Because they represent our heritage — the keffiyeh is part of our identity.' },
        { ex: 'سَيَكُونُ هُنَاكَ طُلَّابٌ مِنْ ثَلَاثِينَ بَلَدًا.', task: 'ASK two questions about the day.', help: 'هَلْ …؟ وَمَتَى …؟', model: 'رَائِعٌ! هَلْ سَيَكُونُ هُنَاكَ عَرْضُ أَزْيَاءٍ؟ وَمَتَى يَبْدَأُ الحَفْلُ؟', modelEn: 'Great! Will there be a fashion show? And when does it start?' },
        { unexpected: true, ex: 'نَعَمْ، فِي الثَّانِيَةِ. هَلْ أَنْتَ فَخُورٌ بِثَقَافَتِكَ؟', task: 'Answer the unexpected question (reason + example).', help: 'نَعَمْ، أَعْتَزُّ بِـهَا لِأَنَّ … مَثَلًا …', model: 'نَعَمْ، أَعْتَزُّ بِهَا كَثِيرًا، لِأَنَّهَا تُعَلِّمُنَا الكَرَمَ؛ مَثَلًا، نُقَدِّمُ القَهْوَةَ لِكُلِّ ضَيْفٍ.', modelEn: 'Yes, very — it teaches us generosity; for example, we offer coffee to every guest.' },
      ],
      girl: 'سَتُحْضِرِينَ · سَتَلْبَسِينَ · اخْتَرْتِ · أَنْتِ فَخُورَةٌ · بِثَقَافَتِكِ',
      notes: 'Core+: sa- + objects, lawnuhā (possessive), li-annahā + inna al-kūfiyyata (acc.), the CANDIDATE asks two questions, aʿtazzu bihā + li-annahā + mathalan.',
    },
    {
      id: 'C', level: 'Develop', setting: 'a youth podcast', title: 'Role play C — What makes me “me”?', ar: 'مَا الَّذِي يَصْنَعُ هُوِيَّتِي؟', you: 'a teenage guest', them: 'the podcast host',
      tasks: [
        { ex: 'مَا الَّذِي يُكَوِّنُ هُوِيَّتَكَ؟', task: 'Name three elements with possessives.', help: 'هُوِيَّتِي مَزِيجٌ مِنْ: … وَ… وَ…', model: 'هُوِيَّتِي مَزِيجٌ مِنْ ثَلَاثَةِ أَشْيَاءَ: دِينِي، وَلُغَةِ أَجْدَادِي، وَالمَدِينَةِ الَّتِي نَشَأْتُ فِيهَا.', modelEn: 'A mix of three things: my faith, my grandparents’ language and the city I grew up in.' },
        { ex: 'أَعْطِنَا مِثَالًا عَلَى تَقْلِيدٍ فِي أُسْرَتِكَ.', task: 'Give an example and explain it.', help: 'مَثَلًا، كُلَّ … نَـ… لِأَنَّ …', model: 'مَثَلًا، كُلَّ لَيْلَةِ جُمُعَةٍ نَجْتَمِعُ عِنْدَ جَدِّي، فَيَحْكِي لَنَا قِصَصًا عَنْ قَرْيَتِهِ، لِأَنَّهُ يُرِيدُ أَنْ نَعْرِفَ جُذُورَنَا.', modelEn: 'Every Thursday night we gather at grandpa’s and he tells stories of his village, because he wants us to know our roots.' },
        { ex: 'هَلْ تَغَيَّرَتْ نَظْرَتُكَ إِلَى ثَقَافَتِكَ؟', task: 'Contrast past and present.', help: 'عِنْدَمَا كُنْتُ صَغِيرًا كُنْتُ … أَمَّا الآنَ فَـ…', model: 'عِنْدَمَا كُنْتُ صَغِيرًا كُنْتُ أَخْجَلُ مِنْ طَعَامِنَا فِي المَدْرَسَةِ، أَمَّا الآنَ فَأُشَارِكُهُ مَعَ أَصْدِقَائِي بِفَخْرٍ.', modelEn: 'As a child I was embarrassed by our food at school; now I share it proudly with friends.' },
        { ex: 'مَا الشَّيْءُ الَّذِي تُرِيدُ أَنْ يَفْهَمَهُ النَّاسُ عَنْ ثَقَافَتِكَ؟', task: 'Make a claim with inna + an example.', help: 'إِنَّ … ؛ مَثَلًا …', model: 'إِنَّ ثَقَافَتَنَا تَقُومُ عَلَى احْتِرَامِ الكِبَارِ؛ مَثَلًا، لَا نَجْلِسُ قَبْلَ أَنْ يَجْلِسَ جَدُّنَا.', modelEn: 'Our culture rests on respecting elders: for example, we don’t sit before grandpa sits.' },
        { unexpected: true, ex: 'هَلْ تَشْعُرُ بِأَنَّكَ بَرِيطَانِيٌّ أَمْ عَرَبِيٌّ؟', task: 'Answer the unexpected question (balanced).', help: 'أَشْعُرُ بِأَنَّنِي … وَ… مَعًا، لِأَنَّ …', model: 'أَشْعُرُ بِأَنَّنِي الاثْنَانِ مَعًا، لِأَنَّ الهُوِيَّةَ لَيْسَتْ صُنْدُوقًا وَاحِدًا، بَلْ بَيْتٌ فِيهِ غُرَفٌ كَثِيرَةٌ.', modelEn: 'Both at once — identity isn’t one box but a house with many rooms.' },
      ],
      girl: 'هُوِيَّتَكِ · أَعْطِينَا · أُسْرَتِكِ · نَظْرَتُكِ · ثَقَافَتِكِ · تَشْعُرِينَ · بَرِيطَانِيَّةٌ أَمْ عَرَبِيَّةٌ',
      notes: 'Develop: mazīj min + three possessives, mathalan + present habit + li-annahu, kuntu + present vs ammā al-āna fa-, inna thaqāfatanā (acc.) + qabla an, ashʿuru bi-annanī + laysat … bal.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a televised debate', title: 'Role play D — Does globalisation threaten identity?', ar: 'العَوْلَمَةُ وَالهُوِيَّةُ', you: 'a student speaker', them: 'the debate moderator',
      tasks: [
        { ex: 'هَلْ تُهَدِّدُ العَوْلَمَةُ هُوِيَّاتِ الشُّعُوبِ؟', task: 'Open with a balanced thesis.', help: 'لَا شَكَّ أَنَّ … غَيْرَ أَنَّنِي أَرَى أَنَّ …', model: 'لَا شَكَّ أَنَّ العَوْلَمَةَ قَرَّبَتِ الثَّقَافَاتِ، غَيْرَ أَنَّنِي أَرَى أَنَّهَا تُهَدِّدُ اللُّغَاتِ وَالعَادَاتِ الصَّغِيرَةَ إِذَا لَمْ نَحْمِهَا.', modelEn: 'Globalisation has brought cultures closer, but it threatens small languages and customs if we don’t protect them.' },
        { ex: 'أَعْطِنَا دَلِيلًا.', task: 'Give evidence with an example.', help: 'مَثَلًا، … بِسَبَبِ … مِمَّا …', model: 'مَثَلًا، أَصْبَحَ الشَّبَابُ فِي كُلِّ مَكَانٍ يَأْكُلُونَ الطَّعَامَ نَفْسَهُ وَيَلْبَسُونَ المَلَابِسَ نَفْسَهَا بِسَبَبِ الإِعْلَانَاتِ، مِمَّا يُنْسِيهِمْ أَكَلَاتِ أَجْدَادِهِمْ.', modelEn: 'Young people everywhere now eat the same food and wear the same clothes because of adverts, making them forget their grandparents’ dishes.' },
        { ex: 'لٰكِنَّ الإِنْتَرْنِتَ يُسَاعِدُ عَلَى نَشْرِ الثَّقَافَاتِ أَيْضًا.', task: 'Concede and refine.', help: 'صَحِيحٌ أَنَّ … وَمَعَ ذٰلِكَ فَإِنَّ …', model: 'صَحِيحٌ أَنَّ الإِنْتَرْنِتَ نَشَرَ مَوْسِيقَانَا وَمَطْبَخَنَا، وَمَعَ ذٰلِكَ فَإِنَّ مَا يَنْتَشِرُ هُوَ الشَّكْلُ لَا المَعْنَى العَمِيقُ.', modelEn: 'True, it spread our music and cuisine — yet what spreads is the surface, not the deep meaning.' },
        { ex: 'كَيْفَ تُحَافِظُ أَنْتَ عَلَى هُوِيَّتِكَ؟', task: 'Describe personal action (present + past).', help: 'أُحَافِظُ عَلَيْهَا بِـ… ؛ فَقَدْ …', model: 'أُحَافِظُ عَلَيْهَا بِالقِرَاءَةِ بِلُغَتِي، وَبِتَعَلُّمِ الطَّبْخِ مِنْ جَدَّتِي؛ فَقَدْ سَجَّلْتُ وَصَفَاتِهَا كُلَّهَا فِي دَفْتَرٍ خَاصٍّ.', modelEn: 'By reading in my language and learning to cook from grandma — I’ve recorded all her recipes in a special notebook.' },
        { unexpected: true, ex: 'لَوْ كَانَ لَكَ أَنْ تَحْفَظَ شَيْئًا وَاحِدًا مِنْ ثَقَافَتِكَ لِلْمُسْتَقْبَلِ، فَمَا هُوَ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ كَانَ لِي ذٰلِكَ، لَاخْتَرْتُ … لِأَنَّ …', model: 'لَوْ كَانَ لِي ذٰلِكَ، لَاخْتَرْتُ لُغَتَنَا، لِأَنَّ اللُّغَةَ هِيَ الوِعَاءُ الَّذِي يَحْمِلُ القِصَصَ وَالقِيَمَ وَالأَمْثَالَ مَعًا.', modelEn: 'Our language — it is the vessel that carries the stories, values and proverbs together.' },
      ],
      girl: 'أَعْطِينَا · تُحَافِظِينَ · أَنْتِ · هُوِيَّتِكِ · لَكِ · ثَقَافَتِكِ',
      notes: 'Stretch: lā shakka anna … ghayra annanī arā anna, idhā lam + jussive (naḥmihā), bi-sababi + mimmā (yunsīhim), ṣaḥīḥun anna … wa-maʿa dhālika fa-inna, bi- + verbal nouns, law … la- with a relative clause.',
      modelFoot: 'Stretch: thesis, evidence, concession, personal action and law … la- — a complete debate speech in formal Arabic.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'ثَقَافَتِي', aim: 'one full sentence per question',
      qs: [
        { q: 'صِفْ ثَقَافَتَكَ بِكَلِمَتَيْنِ.', en: 'Describe your culture in two words.', start: 'ثَقَافَتِي … وَ…', model: 'ثَقَافَتِي غَنِيَّةٌ وَجَمِيلَةٌ.', modelEn: 'Rich and beautiful.' },
        { q: 'مَا أَكْلَتُكَ المُفَضَّلَةُ مِنْ ثَقَافَتِكَ؟', en: 'Your favourite dish from your culture?', start: 'أَكْلَتِي المُفَضَّلَةُ …', model: 'أَكْلَتِيَ المُفَضَّلَةُ الكُسْكُسُ، لِأَنَّ أُمِّي تَطْبُخُهُ يَوْمَ الجُمُعَةِ.', modelEn: 'Couscous — mum cooks it on Fridays.' },
        { q: 'هَلْ تَلْبَسُ مَلَابِسَ تَقْلِيدِيَّةً؟', en: 'Do you wear traditional clothes?', start: 'نَعَمْ، أَلْبَسُ … فِي …', model: 'نَعَمْ، أَلْبَسُ الجَلَّابِيَّةَ فِي العِيدِ.', modelEn: 'Yes, a jellaba at Eid.' },
        { q: 'مَا لُغَةُ أَجْدَادِكَ؟', en: 'What is your grandparents’ language?', start: 'لُغَةُ أَجْدَادِي …', model: 'لُغَةُ أَجْدَادِي العَرَبِيَّةُ.', modelEn: 'Arabic.' },
        { q: 'هَلْ أَنْتَ فَخُورٌ بِثَقَافَتِكَ؟', en: 'Are you proud of your culture?', start: 'نَعَمْ، أَنَا فَخُورٌ … لِأَنَّ …', model: 'نَعَمْ، أَنَا فَخُورٌ بِهَا، لِأَنَّهَا جُزْءٌ مِنِّي.', modelEn: 'Yes — it’s part of me.' },
      ],
      foot: 'Core: one full sentence for every question — use my / our endings (ـِي · ـُنَا). If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + possessive + a reason = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'هُوِيَّتِي وَعَادَاتُنَا', aim: 'two or three sentences, with a reason and an example',
      qs: [
        { q: 'مَا التَّقَالِيدُ الَّتِي تُحِبُّهَا فِي أُسْرَتِكَ؟', en: 'Which family traditions do you love?', start: 'أُحِبُّ … لِأَنَّ … مَثَلًا …', model: 'أُحِبُّ اجْتِمَاعَنَا فِي بَيْتِ جَدَّتِي، لِأَنَّهُ يُقَرِّبُنَا؛ مَثَلًا، نَطْبُخُ مَعًا وَنَحْكِي القِصَصَ.', modelEn: 'Gathering at grandma’s — it brings us close: we cook together and tell stories.' },
        { q: 'كَيْفَ تَخْتَلِفُ ثَقَافَتُكَ عَنْ ثَقَافَةِ أَصْدِقَائِكَ؟', en: 'How does your culture differ from your friends’?', start: 'فِي ثَقَافَتِنَا … بَيْنَمَا فِي ثَقَافَتِهِمْ …', model: 'فِي ثَقَافَتِنَا نَأْكُلُ العَشَاءَ مُتَأَخِّرِينَ مَعَ كُلِّ الأُسْرَةِ، بَيْنَمَا يَأْكُلُ أَصْدِقَائِي مُبَكِّرًا، وَأَحْيَانًا أَمَامَ التِّلْفَازِ.', modelEn: 'We eat dinner late as a whole family; my friends eat early, sometimes in front of the TV.' },
        { q: 'هَلْ تَغَيَّرَتْ عَلَاقَتُكَ بِثَقَافَتِكَ؟', en: 'Has your relationship with your culture changed?', start: 'كُنْتُ … أَمَّا الآنَ فَـ…', model: 'كُنْتُ لَا أَهْتَمُّ بِهَا، أَمَّا الآنَ فَأَقْرَأُ عَنْ تَارِيخِ بَلَدِ أَجْدَادِي، لِأَنَّنِي أُرِيدُ أَنْ أَفْهَمَ جُذُورِي.', modelEn: 'I didn’t care; now I read about my grandparents’ country’s history to understand my roots.' },
        { q: 'مَا القِيَمُ الَّتِي تَعَلَّمْتَهَا مِنْ وَالِدَيْكَ؟', en: 'What values did you learn from your parents?', start: 'تَعَلَّمْتُ مِنْهُمَا … مِثْلَ …', model: 'تَعَلَّمْتُ مِنْهُمَا قِيَمًا كَثِيرَةً، مِثْلَ احْتِرَامِ الكِبَارِ وَمُسَاعَدَةِ الجِيرَانِ وَالصِّدْقِ.', modelEn: 'Many values, such as respecting elders, helping neighbours and honesty.' },
        { q: 'كَيْفَ سَتَنْقُلُ ثَقَافَتَكَ إِلَى أَوْلَادِكَ؟', en: 'How will you pass your culture on to your children?', start: 'سَأُعَلِّمُهُمْ … وَسَـ…', model: 'سَأُعَلِّمُهُمْ لُغَتَنَا وَأَكَلَاتِنَا، وَسَآخُذُهُمْ إِلَى بَلَدِ أَجْدَادِهِمْ كُلَّ صَيْفٍ.', modelEn: 'I’ll teach them our language and dishes, and take them to their ancestors’ country every summer.' },
      ],
      foot: 'Develop: two or three sentences — a reason AND an example, with possessive endings.',
      modelFoot: 'Possessives + li-anna + mathalan / mithla = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الهُوِيَّةُ فِي عَالَمٍ مُتَغَيِّرٍ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ يُمْكِنُ أَنْ يَكُونَ لِلْإِنْسَانِ أَكْثَرُ مِنْ هُوِيَّةٍ؟', en: 'Can a person have more than one identity?', start: 'إِنَّ الهُوِيَّةَ … ؛ فَمَثَلًا …', model: 'إِنَّ الهُوِيَّةَ لَيْسَتْ وَاحِدَةً، بَلْ طَبَقَاتٌ؛ فَمَثَلًا، أَنَا مُسْلِمٌ وَعَرَبِيٌّ وَبَرِيطَانِيٌّ وَمُحِبٌّ لِكُرَةِ القَدَمِ فِي الوَقْتِ نَفْسِهِ.', modelEn: 'Identity isn’t single but layered: I’m Muslim, Arab, British and a football fan at once.' },
        { q: 'مَا الَّذِي يُهَدِّدُ الثَّقَافَاتِ التَّقْلِيدِيَّةَ؟', en: 'What threatens traditional cultures?', start: 'أَظُنُّ أَنَّ … بِسَبَبِ … مِمَّا …', model: 'أَظُنُّ أَنَّ السُّرْعَةَ هِيَ الخَطَرُ الأَكْبَرُ؛ فَبِسَبَبِ ضَغْطِ الحَيَاةِ لَا يَجِدُ النَّاسُ وَقْتًا لِلطَّبْخِ وَالزِّيَارَاتِ، مِمَّا يُضْعِفُ العَادَاتِ.', modelEn: 'Speed — under life’s pressure people have no time to cook or visit, which weakens customs.' },
        { q: 'هَلْ يَجِبُ أَنْ يَتَخَلَّى المُهَاجِرُ عَنْ ثَقَافَتِهِ؟', en: 'Should an immigrant give up their culture?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ عَلَيْهِ أَنْ يَحْتَرِمَ قَوَانِينَ البَلَدِ الجَدِيدِ وَيَتَعَلَّمَ لُغَتَهُ، غَيْرَ أَنَّ التَّخَلِّيَ عَنِ الجُذُورِ يَجْعَلُهُ شَجَرَةً بِلَا أَصْلٍ.', modelEn: 'They should respect the new country’s laws and learn its language, but abandoning roots makes them a tree without a base.' },
        { q: 'كَيْفَ تُؤَثِّرُ ثَقَافَتُكَ فِي قَرَارَاتِكَ؟', en: 'How does your culture affect your decisions?', start: 'تُؤَثِّرُ … ؛ مَثَلًا، عِنْدَمَا …', model: 'تُؤَثِّرُ كَثِيرًا؛ مَثَلًا، عِنْدَمَا اخْتَرْتُ مَوَادِّي، فَكَّرْتُ فِي رَأْيِ أُسْرَتِي، لِأَنَّ القَرَارَ عِنْدَنَا عَائِلِيٌّ أَكْثَرَ مِنْهُ فَرْدِيٌّ.', modelEn: 'A lot: choosing my subjects, I considered my family’s view, because decisions with us are more collective than individual.' },
        { q: 'لَوْ عِشْتَ فِي بَلَدِ أَجْدَادِكَ، هَلْ سَتَكُونُ شَخْصًا مُخْتَلِفًا؟', en: 'If you lived in your grandparents’ country, would you be different?', start: 'لَوْ عِشْتُ هُنَاكَ، لَـ… لٰكِنَّ …', model: 'لَوْ عِشْتُ هُنَاكَ، لَكَانَتْ لُغَتِيَ العَرَبِيَّةُ أَقْوَى، وَلَعَرَفْتُ أَقَارِبِي أَكْثَرَ، لٰكِنَّ قِيَمِي سَتَبْقَى كَمَا هِيَ.', modelEn: 'My Arabic would be stronger and I’d know relatives better, but my values would stay the same.' },
      ],
      foot: 'Stretch: inna + laysa … bal, bi-sababi + mimmā, a concession, a narrated example and law … la-.',
      modelFoot: 'Stretch: inna, layered identity, mimmā yuḍʿifu, ṣaḥīḥun anna … ghayra anna, akthara minhu and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I described my culture: food, clothes, language.' },
    { route: 'core', text: 'I used my / our endings (thaqāfatī, ʿādātunā).' },
    { route: 'develop', text: 'I gave a reason AND an example in one answer.' },
    { route: 'develop', text: 'I used inna or anna with the accusative.' },
    { route: 'stretch', text: 'I discussed identity with a concession or law … la-.' },
  ],
};
speak.RP[1].tasks[4].help = 'نَعَمْ، أَعْتَزُّ بِهَا لِأَنَّ … مَثَلًا …';
speak.RP[2].tasks[1].help = 'مَثَلًا، كُلَّ … نَجْتَمِعُ … لِأَنَّ …';
speak.RP[2].tasks[2].help = 'عِنْدَمَا كُنْتُ صَغِيرًا كُنْتُ … أَمَّا الآنَ فَأُشَارِكُ …';
speak.RP[3].tasks[3].help = 'أُحَافِظُ عَلَيْهَا بِالقِرَاءَةِ … ؛ فَقَدْ …';
speak.RP[3].tasks[4].help = 'لَوْ كَانَ لِي ذٰلِكَ، لَاخْتَرْتُ … لِأَنَّ …';
speak.CONV[1].qs[2].start = 'كُنْتُ … أَمَّا الآنَ فَأَقْرَأُ …';
speak.CONV[1].qs[4].start = 'سَأُعَلِّمُهُمْ … وَسَآخُذُهُمْ …';
speak.CONV[2].qs[4].start = 'لَوْ عِشْتُ هُنَاكَ، لَكَانَتْ … لٰكِنَّ …';

const Q2_CORE = `مَرْحَبًا يَا آدَمُ،
كَيْفَ حَالُكَ؟ فِي المَدْرَسَةِ طَلَبَتْ مِنَّا المُعَلِّمَةُ مَشْرُوعًا اسْمُهُ "صُنْدُوقُ هُوِيَّتِي". فِي صُنْدُوقِي وَضَعْتُ ثَلَاثَةَ أَشْيَاءَ. أَوَّلًا، صُورَةً لِبَيْتِ جَدِّي فِي فِلَسْطِينَ. ثَانِيًا، الكُوفِيَّةَ الَّتِي أَعْطَانِي إِيَّاهَا أَبِي. ثَالِثًا، وَصْفَةَ المَقْلُوبَةِ، وَهِيَ أَكْلَتُنَا الشَّعْبِيَّةُ. اخْتَرْتُ هٰذِهِ الأَشْيَاءَ لِأَنَّهَا جُزْءٌ مِنْ ثَقَافَتِي. إِنَّ المَشْرُوعَ كَانَ مُمْتِعًا جِدًّا، لِأَنِّي تَعَلَّمْتُ عَنْ ثَقَافَاتِ زُمَلَائِي أَيْضًا. فِي الأُسْبُوعِ القَادِمِ سَأُقَدِّمُهُ أَمَامَ الصَّفِّ. وَأَنْتَ، مَاذَا تَضَعُ فِي صُنْدُوقِكَ؟
مَعَ السَّلَامَةِ،
إِبْرَاهِيمُ`;
const Q2_FULL = `عَزِيزِي آدَمُ،
أَكْتُبُ إِلَيْكَ وَأَنَا مُتَحَمِّسٌ لِمَشْرُوعٍ جَدِيدٍ فِي المَدْرَسَةِ اسْمُهُ "صُنْدُوقُ هُوِيَّتِي"؛ إِذْ طَلَبَتْ مِنَّا المُعَلِّمَةُ أَنْ نَضَعَ فِي صُنْدُوقٍ ثَلَاثَةَ أَشْيَاءَ تُعَبِّرُ عَنَّا. فَاخْتَرْتُ مِفْتَاحَ بَيْتِ جَدِّي القَدِيمِ فِي يَافَا، وَالكُوفِيَّةَ الَّتِي أَهْدَانِي إِيَّاهَا أَبِي، وَوَصْفَةَ المَقْلُوبَةِ بِخَطِّ جَدَّتِي. إِنَّ كُلَّ شَيْءٍ مِنْهَا يَحْمِلُ قِصَّةً؛ فَالمِفْتَاحُ مَثَلًا يُذَكِّرُنَا بِأَنَّ جُذُورَنَا عَمِيقَةٌ مَهْمَا ابْتَعَدْنَا. وَقَدْ أَعْجَبَنِي المَشْرُوعُ لِأَنَّهُ جَعَلَنِي أَسْأَلُ أَهْلِي أَسْئِلَةً لَمْ أَطْرَحْهَا مِنْ قَبْلُ. وَعِنْدَمَا أُقَدِّمُهُ أَمَامَ الصَّفِّ الأُسْبُوعَ القَادِمَ، سَأَطْبُخُ المَقْلُوبَةَ لِزُمَلَائِي! وَأَنْتَ، مَا الشَّيْءُ الَّذِي يُعَبِّرُ عَنْكَ أَكْثَرَ؟
مَعَ تَحِيَّاتِي،
إِبْرَاهِيمُ`;
const Q3A_CORE = `اسْمِي إِبْرَاهِيمُ، وَعُمْرِي سِتَّ عَشْرَةَ سَنَةً. وُلِدْتُ فِي لَنْدَنَ، لٰكِنَّ أَبِي وَأُمِّي مِنْ فِلَسْطِينَ. لِذٰلِكَ هُوِيَّتِي مَزِيجٌ مِنْ ثَقَافَتَيْنِ: الثَّقَافَةِ البَرِيطَانِيَّةِ وَالثَّقَافَةِ الفِلَسْطِينِيَّةِ.
إِنَّ أُسْرَتِي مُهِمَّةٌ جِدًّا فِي ثَقَافَتِنَا. مَثَلًا، نَجْتَمِعُ كُلَّ يَوْمِ جُمُعَةٍ فِي بَيْتِ جَدِّي، وَنَأْكُلُ المَقْلُوبَةَ مَعًا. جَدَّتِي تَطْبُخُهَا، وَأَنَا أُسَاعِدُهَا فِي المَطْبَخِ، لِأَنِّي أُرِيدُ أَنْ أَتَعَلَّمَ الوَصْفَةَ. فِي العِيدِ أَلْبَسُ الكُوفِيَّةَ، وَنَزُورُ كُلَّ أَقَارِبِنَا، وَنَتَبَادَلُ الهَدَايَا وَالحَلَوِيَّاتِ.
فِي المَدْرَسَةِ أَتَكَلَّمُ الإِنْجْلِيزِيَّةَ، وَأُحِبُّ كُرَةَ القَدَمِ مِثْلَ أَصْدِقَائِي. أَمَّا فِي البَيْتِ فَنَتَكَلَّمُ العَرَبِيَّةَ. عِنْدَمَا كُنْتُ صَغِيرًا، كُنْتُ أَخْجَلُ مِنْ طَعَامِنَا فِي المَدْرَسَةِ، لٰكِنِّي الآنَ أُشَارِكُهُ مَعَ زُمَلَائِي، وَهُمْ يُحِبُّونَهُ كَثِيرًا.
أَنَا فَخُورٌ بِثَقَافَتِي، لِأَنَّهَا تُعَلِّمُنِي قِيَمًا جَمِيلَةً، مِثْلَ الكَرَمِ وَاحْتِرَامِ الكِبَارِ وَمُسَاعَدَةِ الجِيرَانِ. فِي المُسْتَقْبَلِ سَأُعَلِّمُ أَوْلَادِي لُغَتَنَا وَعَادَاتِنَا، لِأَنِّي أُرِيدُ أَنْ يَعْرِفُوا جُذُورَهُمْ.`;
const Q3A_FULL = `يَحْتَفِظُ جَدِّي فِي دُرْجِ مَكْتَبِهِ بِمِفْتَاحٍ حَدِيدِيٍّ قَدِيمٍ، هُوَ مِفْتَاحُ بَيْتِهِ فِي يَافَا. وَكُلَّمَا سَأَلْتُ نَفْسِي: "مَنْ أَنَا؟"، تَذَكَّرْتُ ذٰلِكَ المِفْتَاحَ، لِأَنَّهُ يَفْتَحُ بَابًا عَلَى جُزْءٍ كَبِيرٍ مِنْ هُوِيَّتِي.
فَأَنَا وُلِدْتُ فِي لَنْدَنَ، وَأُحِبُّ مَطَرَهَا وَحَافِلَاتِهَا الحَمْرَاءَ وَمَتَاحِفَهَا، غَيْرَ أَنَّ بَيْتَنَا فِلَسْطِينِيٌّ بِامْتِيَازٍ: رَائِحَةُ الزَّعْتَرِ وَزَيْتِ الزَّيْتُونِ فِي الصَّبَاحِ، وَحِكَايَاتُ جَدَّتِي فِي المَسَاءِ، وَالعَرَبِيَّةُ الَّتِي لَا نَتَكَلَّمُ غَيْرَهَا عَلَى المَائِدَةِ.
وَلَمْ يَكُنْ هٰذَا المَزِيجُ سَهْلًا دَائِمًا؛ فَعِنْدَمَا كُنْتُ فِي الابْتِدَائِيَّةِ، كُنْتُ أُخْفِي طَعَامِي عَنْ زُمَلَائِي خَوْفًا مِنْ سُخْرِيَتِهِمْ وَنَظَرَاتِهِمْ. أَمَّا اليَوْمَ، فَقَدْ أَدْرَكْتُ أَنَّ الاخْتِلَافَ لَيْسَ عَيْبًا، بَلْ ثَرْوَةٌ؛ وَالدَّلِيلُ أَنَّ زُمَلَائِي صَارُوا يَطْلُبُونَ مِنِّي أَنْ أُحْضِرَ لَهُمْ كَعْكَ جَدَّتِي فِي كُلِّ مُنَاسَبَةٍ!
إِنَّ هُوِيَّتِي، فِي رَأْيِي، لَيْسَتْ صُنْدُوقًا مُغْلَقًا، بَلْ بَيْتٌ بِغُرَفٍ كَثِيرَةٍ، لِكُلِّ غُرْفَةٍ مِنْهَا لُغَتُهَا وَذِكْرَيَاتُهَا. وَلَوْ أَعْطَانِي جَدِّي ذٰلِكَ المِفْتَاحَ يَوْمًا، لَحَفِظْتُهُ لِأَوْلَادِي، لِكَيْ يَعْرِفُوا أَنَّ لَهُمْ بَيْتًا هُنَاكَ أَيْضًا.`;
const Q3B_FULL = `فِي أَيِّ مَدِينَةٍ كَبِيرَةٍ فِي العَالَمِ، تَرَى الشَّبَابَ يَلْبَسُونَ المَلَابِسَ نَفْسَهَا، وَيَسْمَعُونَ الأَغَانِيَ نَفْسَهَا، وَيَأْكُلُونَ فِي المَطَاعِمِ نَفْسِهَا. فَهَلْ تُهَدِّدُ العَوْلَمَةُ هُوِيَّاتِ الشُّعُوبِ؟
لَا شَكَّ أَنَّ لِلْعَوْلَمَةِ فَوَائِدَ؛ فَهِيَ تُتِيحُ لَنَا أَنْ نَتَعَرَّفَ عَلَى ثَقَافَاتٍ بَعِيدَةٍ، مِثْلَ الطَّبْخِ اليَابَانِيِّ وَالمُوسِيقَى الإِفْرِيقِيَّةِ وَالأَفْلَامِ الهِنْدِيَّةِ، دُونَ أَنْ نُغَادِرَ بُيُوتَنَا. وَمَعَ ذٰلِكَ، فَإِنَّ الثَّقَافَاتِ الكَبِيرَةَ تَنْتَشِرُ بِسَبَبِ قُوَّةِ الإِعْلَانَاتِ، مِمَّا يَدْفَعُ اللُّغَاتِ وَالعَادَاتِ الصَّغِيرَةَ إِلَى الاخْتِفَاءِ شَيْئًا فَشَيْئًا.
وَقَدْ لَاحَظْتُ ذٰلِكَ فِي أُسْرَتِي؛ فَأَبْنَاءُ عَمِّي فِي عَمَّانَ لَا يَعْرِفُونَ الأَغَانِيَ الشَّعْبِيَّةَ الَّتِي كَانَ جَدِّي يُغَنِّيهَا، لٰكِنَّهُمْ يَحْفَظُونَ أَغَانِيَ أَمْرِيكِيَّةً كَثِيرَةً. وَعِنْدَمَا سَجَّلْنَا جَدِّي وَهُوَ يُغَنِّي، وَنَشَرْنَا التَّسْجِيلَ، أُعْجِبَ بِهِ آلَافُ الشَّبَابِ، وَطَلَبَ مِنْهُ أَحْفَادُهُ أَنْ يُعَلِّمَهُمْ إِيَّاهَا.
لِذٰلِكَ أَرَى أَنَّ العَوْلَمَةَ لَيْسَتْ عَدُوًّا، بَلْ أَدَاةٌ؛ فَهِيَ تُهَدِّدُ مَنْ يَنْسَى ثَقَافَتَهُ، وَتَخْدُمُ مَنْ يَعْتَزُّ بِهَا. وَإِذَا اسْتَخْدَمَ الشَّبَابُ وَسَائِلَهَا لِنَشْرِ تُرَاثِهِمْ، فَسَتُصْبِحُ جِسْرًا بَدَلًا مِنْ أَنْ تَكُونَ خَطَرًا عَلَى هُوِيَّاتِنَا.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a cultural-profile form for a twinning project, write an email about an “identity box” school project, and write an extended piece about your culture and identity or about whether globalisation threatens identity.',
  lift: [
    { ar: 'هُوِيَّتِي مَزِيجٌ مِنْ ثَقَافَتَيْنِ', en: 'my identity is a mix of two cultures' },
    { ar: 'إِنَّ أُسْرَتِي مُهِمَّةٌ جِدًّا فِي ثَقَافَتِنَا؛ مَثَلًا …', en: 'family is very important in our culture; for example …' },
    { ar: 'أَنَا فَخُورٌ بِثَقَافَتِي، لِأَنَّهَا تُعَلِّمُنِي …', en: 'I am proud of my culture, because it teaches me …' },
  ],
  checkTip: 'Check possessive endings and al-: thaqāfatī (not al-thaqāfatī), ʿādātunā, ajdāduhum; inna / anna + accusative (inna usratī muhimmatun — the noun after inna is manṣūb); one reason (li-anna) AND one example (mathalan / mithla) per paragraph; the feminine for non-human plurals (al-ʿādātu jamīlatun).',
  FORM: {
    title: 'Cultural-profile form (school twinning)', ar: 'اسْتِمَارَةُ المَلَفِّ الثَّقَافِيِّ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'إِبْرَاهِيمُ خَلِيلٌ', modelEn: 'Ibrahim Khalil' },
      { core: true, ar: 'أَصْلُ الأُسْرَةِ', en: 'Family origin', model: 'فِلَسْطِينُ', modelEn: 'Palestine' },
      { core: true, ar: 'لُغَةُ البَيْتِ', en: 'Home language', model: 'العَرَبِيَّةُ', modelEn: 'Arabic' },
      { core: true, ar: 'أَكْلَةٌ شَعْبِيَّةٌ', en: 'A traditional dish', model: 'المَقْلُوبَةُ', modelEn: 'maqluba' },
      { core: true, ar: 'زِيٌّ تَقْلِيدِيٌّ', en: 'Traditional dress', model: 'الكُوفِيَّةُ', modelEn: 'the keffiyeh' },
      { core: true, ar: 'مُنَاسَبَةٌ مُهِمَّةٌ', en: 'An important occasion', model: 'عِيدُ الفِطْرِ', modelEn: 'Eid al-Fitr' },
      { ar: 'قِيمَةٌ مُهِمَّةٌ فِي ثَقَافَتِكَ', en: 'An important value in your culture', model: 'الكَرَمُ', modelEn: 'generosity' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تَعْتَزُّ بِثَقَافَتِكَ؟', en: 'ONE sentence: why you are proud of your culture', model: 'أَعْتَزُّ بِثَقَافَتِي لِأَنَّهَا تَجْمَعُ أُسْرَتِي؛ مَثَلًا، نَلْتَقِي كُلَّ جُمُعَةٍ.', modelEn: 'Because it brings my family together — e.g. we meet every Friday.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with a reason AND an example.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 8 recycles the lesson pattern: claim + li-anna + mathalan. Watch the possessive in thaqāfatī.',
  },
  Q2: {
    short: 'an email about an “identity box” project', title: 'Question 2: my identity box', ar: 'صُنْدُوقُ هُوِيَّتِي',
    task: 'Write an email in Arabic to a friend of about 80–90 words. You must include: • the school project and what it is • the objects you chose • why you chose them (a reason and an example) • your opinion of the project and what you will do next, and a question for your friend.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Possessive endings (ثَقَافَتِي · أَكْلَتُنَا).', 'Past, present AND future.', 'About 80–90 words.'],
    phrases: [['طَلَبَتْ مِنَّا المُعَلِّمَةُ مَشْرُوعًا اسْمُهُ …', 'the teacher set us a project called …'], ['فِي صُنْدُوقِي وَضَعْتُ …', 'in my box I put …'], ['اخْتَرْتُهَا لِأَنَّهَا جُزْءٌ مِنْ ثَقَافَتِي', 'I chose them because they are part of my culture'], ['إِنَّ المَشْرُوعَ كَانَ …', 'the project was (indeed) …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنْ مَشْرُوعِ "صُنْدُوقِ الهُوِيَّةِ" (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about the “identity box” project (80–90 words).'],
      ['1', 'مَا المَشْرُوعُ؟', 'What the project is'],
      ['2', 'مَاذَا وَضَعْتَ فِي صُنْدُوقِكَ؟', 'What you put in your box'],
      ['3', 'لِمَاذَا اخْتَرْتَ هٰذِهِ الأَشْيَاءَ؟', 'Why you chose them (reason + example)'],
      ['4', 'مَا رَأْيُكَ فِي المَشْرُوعِ؟ وَمَاذَا سَتَفْعَلُ؟ وَاسْأَلْ صَدِيقَكَ سُؤَالًا.', 'Your opinion; what next; a question'],
    ],
    qwords: 'مَا (what) · وَضَعْتَ (you put — PAST) · لِمَاذَا (why → لِأَنَّ + مَثَلًا) · سَتَفْعَلُ (you will do — FUTURE)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', 'Hello …, how are you?'],
      ['1', 'طَلَبَتْ مِنَّا المُعَلِّمَةُ مَشْرُوعًا اسْمُهُ ______ .', 'The teacher set a project called …'],
      ['2', 'فِي صُنْدُوقِي وَضَعْتُ ______ وَ______ .', 'In my box I put … and …'],
      ['3', 'اخْتَرْتُهَا لِأَنَّ ______ ؛ مَثَلًا، ______ .', 'I chose them because …; e.g. …'],
      ['4', 'إِنَّ المَشْرُوعَ ______ . سَأُقَدِّمُهُ ______ .', 'The project was … I’ll present it …'],
      ['end', 'وَأَنْتَ، ______ ؟ مَعَ السَّلَامَةِ.', 'And you, …? Goodbye.'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Adam, how are you? At school our teacher set us a project called ‘My identity box’. In my box I put three things. First, a photo of my grandfather’s house in Palestine. Second, the keffiyeh my father gave me. Third, the recipe for maqluba, our traditional dish. I chose these things because they are part of my culture. The project was really enjoyable, because I learnt about my classmates’ cultures too. Next week I’ll present it to the class. And you, what would you put in your box? Goodbye, Ibrahim.”',
      find: ['صُنْدُوقُ هُوِيَّتِي', 'أَكْلَتُنَا الشَّعْبِيَّةُ', 'جُزْءٌ مِنْ ثَقَافَتِي', 'إِنَّ المَشْرُوعَ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Adam, I’m writing excited about a new school project called ‘My identity box’: our teacher asked us to put three things that express who we are into a box. I chose the key to my grandfather’s old house in Jaffa, the keffiyeh my father gave me, and the maqluba recipe in my grandmother’s handwriting. Each one carries a story — the key, for example, reminds us our roots are deep however far we go. I liked the project because it made me ask my family questions I had never asked. When I present it next week, I’ll cook maqluba for my classmates! And you, what expresses you best? Best wishes, Ibrahim.”',
      find: ['تُعَبِّرُ عَنَّا', 'أَهْدَانِي إِيَّاهَا', 'إِنَّ كُلَّ شَيْءٍ … مَثَلًا', 'لَمْ أَطْرَحْهَا مِنْ قَبْلُ'],
    },
  },
  Q3: {
    a: { title: 'مَنْ أَنَا؟ ثَقَافَتِي وَهُوِيَّتِي', en: 'Who am I? My culture and identity', bullets: 'أَصْلُكَ وَثَقَافَتُكَ · عَادَاتُ أُسْرَتِكَ (مَعَ مِثَالٍ) · حَيَاتُكَ بَيْنَ البَيْتِ وَالمَدْرَسَةِ · لِمَاذَا تَعْتَزُّ بِثَقَافَتِكَ وَخُطَطُكَ', bulletsEn: 'Your origin and culture · your family’s customs (with an example) · life between home and school · why you are proud and your plans' },
    b: { title: 'هَلْ تُهَدِّدُ العَوْلَمَةُ هُوِيَّةَ الشُّعُوبِ؟', en: 'Does globalisation threaten peoples’ identity?', bullets: 'المَوْضُوعُ · الفَوَائِدُ وَالمَخَاطِرُ · مِثَالٌ مِنْ تَجْرِبَتِكَ · رَأْيُكَ', bulletsEn: 'The issue · benefits and dangers · an example from your experience · your opinion' },
    plan: [
      'Origin — wulidtu fī … lākinna abī wa-ummī min …; li-dhālika huwiyyatī mazījun min thaqāfatayni',
      'Customs — inna usratī muhimmatun …; mathalan, najtamiʿu …; fī al-ʿīdi albasu …',
      'Two worlds — fī al-madrasati … ammā fī al-bayti fa- …; ʿindamā kuntu ṣaghīran kuntu …',
      'Pride + future — anā fakhūrun bi-thaqāfatī li-annahā …, mithla …; sa-uʿallimu awlādī …; Stretch: laysa … bal, law … la-.',
    ],
    frames: [
      { ar: 'إِنَّ أُسْرَتِي مُهِمَّةٌ جِدًّا فِي ثَقَافَتِنَا.', en: 'inna: family matters a lot in our culture.' },
      { ar: 'مَثَلًا، نَجْتَمِعُ كُلَّ جُمُعَةٍ فِي بَيْتِ جَدِّي.', en: 'example: we meet every Friday at grandpa’s.' },
      { ar: 'سَأُعَلِّمُ أَوْلَادِي لُغَتَنَا وَعَادَاتِنَا.', en: 'future: I’ll teach my children our ways.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Born in London to Palestinian parents, so my identity mixes two cultures → family is central: every Friday we eat maqluba at grandpa’s; I wear the keffiyeh at Eid and we visit relatives → English and football at school, Arabic at home; as a child I was shy of our food, now I share it → I’m proud of my culture’s values, like generosity, and will teach my children our language and customs.', find: ['هُوِيَّتِي مَزِيجٌ', 'إِنَّ أُسْرَتِي', 'مَثَلًا، نَجْتَمِعُ', 'لِأَنَّهَا تُعَلِّمُنِي'], notes: 'Core model: possessives throughout (huwiyyatī, thaqāfatinā, aqāribinā, ʿādātinā), inna usratī (acc.), mathalan + present habits, mithla + examples, kuntu + present vs al-āna, sa- + li-annī.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'My grandfather keeps an old iron key in his desk drawer — the key to his house in Jaffa; whenever I ask “who am I?” I think of it, because it opens a door onto a large part of my identity → I was born in London and love its rain and red buses, yet our home is thoroughly Palestinian: thyme and olive oil in the morning, grandma’s tales at night, Arabic at the table → the mix wasn’t always easy: in primary I hid my food from classmates, fearing mockery; today I know difference isn’t a flaw but a treasure — my classmates now ask for grandma’s biscuits at every occasion! → identity is not a closed box but a house with many rooms, each with its own language and memories; “if grandpa gave me that key one day, I’d keep it for my children, so they know they have a home there too”.', find: ['كُلَّمَا … تَذَكَّرْتُ', 'لَا نَتَكَلَّمُ غَيْرَهَا', 'لَيْسَ عَيْبًا، بَلْ ثَرْوَةٌ', 'لَوْ أَعْطَانِي … لَحَفِظْتُهُ'], notes: 'Full-mark model: a concrete-object hook, kullamā … tadhakkartu, ghayra anna, bi-imtiyāz, a relative clause with lā … ghayrahā, khawfan min (mafʿūl li-ajlih), laysa … bal, wa-d-dalīlu anna, inna + laysat … bal and law … la- + li-kay.' },
      { which: 'ب', level: 'Full', subtitle: 'is globalisation a threat?', text: Q3B_FULL, en: 'In any big city young people wear the same clothes, hear the same songs and eat in the same restaurants — does globalisation threaten peoples’ identities? → it has benefits, letting us discover distant cultures such as Japanese cooking African music and Indian films without leaving home; yet big cultures spread through advertising power, pushing small languages and customs gradually towards disappearance → I noticed this in my family: my cousins in Amman don’t know the folk songs grandpa used to sing but know many American ones; when we recorded grandpa singing and posted it, thousands of young people loved it, and his grandchildren asked him to teach them → globalisation is not an enemy but a tool: it threatens those who forget their culture and serves those proud of it; “if young people use its means to spread their heritage, it will become a bridge instead of a danger to our identities”.', find: ['لَا شَكَّ أَنَّ لِلْعَوْلَمَةِ', 'مِمَّا يَدْفَعُ', 'وَهُوَ يُغَنِّي', 'لَيْسَتْ عَدُوًّا، بَلْ أَدَاةٌ'], notes: 'Full-mark model for the Stretch title: a tricolon hook (nafsahā ×3), lā shakka anna li- …, tutīḥu lanā an, mithla, wa-maʿa dhālika fa-inna, bi-sababi + mimmā, kāna + present in a relative clause, a ḥāl clause (wa-huwa yughannī), man … man contrast and idhā … fa-sa- + badalan min an.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic, with a full sentence in box 8.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: possessive endings and a reason with an example.' },
    { route: 'develop', text: 'Q3: inna + accusative and mathalan in at least two paragraphs.' },
    { route: 'stretch', text: 'Q3: laysa … bal, a concession and a conditional.' },
  ],
};

module.exports = { speak, write };
