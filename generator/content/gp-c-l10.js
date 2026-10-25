'use strict';
/* Guided Practice Rooms · TC-L10 · Measurements, shapes and materials. New tasks. Teacher-made. */
const XP = require('./xp-c-l10');

const base = { topic: 'C', n: 10, short: 'Measurements, Shapes and Materials', arShort: 'المَقَايِيسُ وَالأَشْكَالُ وَالمَوَادُّ', fileTitle: 'Measurements_Shapes_Materials', title: 'Measurements, shapes and materials', icon: 'FaRulerCombined', grammar: 'maṣnūʿun min + material; ṭūluhu / ʿarḍuhā / waznuhu + number + unit (the dual mitrāni); shapes as adjectives (murabbaʿun · dāʾiriyyun · mustaṭīlun); comparatives athqalu / akhaffu; qābilun li-' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up on sizes, shapes and materials, the answer ladder, two new role plays (describing a lost suitcase, ordering custom furniture), a topic conversation with A-R-E-T, and a one-minute talk describing an object that matters to them.',
  words: XP.speak.words,
  words1: { title: 'Size, weight and shape', ar: 'الحَجْمُ وَالوَزْنُ وَالشَّكْلُ' },
  words2: { title: 'Materials and qualities', ar: 'المَوَادُّ وَالصِّفَاتُ' },
  ladder: {
    q: 'صِفْ شَيْئًا مُهِمًّا فِي غُرْفَتِكَ.', qEn: 'Describe an important object in your room.',
    rungs: [
      { ar: 'عِنْدِي صُنْدُوقٌ خَشَبِيٌّ.', en: 'I have a wooden box.' },
      { ar: 'عِنْدِي صُنْدُوقٌ خَشَبِيٌّ مُرَبَّعٌ، طُولُهُ ثَلَاثُونَ سَنْتِيمِتْرًا.', en: '… square, thirty centimetres long.' },
      { ar: '… هُوَ مَصْنُوعٌ مِنْ خَشَبِ الزَّيْتُونِ، وَعَلَيْهِ زَخَارِفُ مِنَ الصَّدَفِ، وَأَضَعُ فِيهِ رَسَائِلَ قَدِيمَةً.', en: '… made of olive wood with mother-of-pearl patterns, and I keep old letters in it.' },
      { ar: '… أَعْطَتْنِي إِيَّاهُ جَدَّتِي فِي دِمَشْقَ، لِذٰلِكَ هُوَ أَغْلَى شَيْءٍ عِنْدِي، وَإِنْ كَانَ ثَمَنُهُ رَخِيصًا.', en: '… my grandmother in Damascus gave it to me, so it’s my most precious thing, even if its price is cheap.' },
    ],
  },
  ladderQs: [
    { q: 'كَمْ طُولُكَ؟', l1: 'طُولِي مِتْرٌ وَ… سَنْتِيمِتْرًا', l2: '… وَأَنَا أَطْوَلُ / أَقْصَرُ مِنْ …', l3: '… وَعِنْدَمَا كُنْتُ صَغِيرًا …' },
    { q: 'مِمَّ صُنِعَتْ حَقِيبَتُكَ المَدْرَسِيَّةُ؟', l1: 'حَقِيبَتِي مَصْنُوعَةٌ مِنْ …', l2: '… وَهِيَ ثَقِيلَةٌ / خَفِيفَةٌ لِأَنَّ …', l3: '… وَأُرِيدُ حَقِيبَةً …' },
    { q: 'هَلْ تَشْتَرِي أَشْيَاءَ مُسْتَعْمَلَةً؟', l1: 'نَعَمْ / لَا، …', l2: '… لِأَنَّهَا …', l3: '… مَثَلًا اشْتَرَيْتُ مَرَّةً …' },
    { q: 'أَيُّهُمَا أَفْضَلُ: البْلَاسْتِيكُ أَمِ الزُّجَاجُ؟', l1: 'فِي رَأْيِي …', l2: '… لِأَنَّهُ قَابِلٌ لِ… ← لِإِعَادَةِ التَّدْوِيرِ', l3: '… صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'the lost-luggage desk at Dubai airport', title: 'Role play 1 — My suitcase didn’t arrive', ar: 'لَمْ تَصِلْ حَقِيبَتِي', you: 'a passenger', them: 'the airport employee',
      tasks: [
        { ex: 'مَا المُشْكِلَةُ؟', task: 'Say what is missing.', plan: 'المُشْكِلَةُ ← لَمْ تَصِلْ … مِنْ لَنْدَنَ', model: 'لَمْ تَصِلْ حَقِيبَتِي مِنْ لَنْدَنَ.', modelEn: 'My suitcase didn’t arrive from London.' },
        { ex: 'مَا لَوْنُهَا وَحَجْمُهَا؟', task: 'Give colour and size.', plan: 'لَوْنٌ وَحَجْمٌ ← هِيَ … وَكَبِيرَةٌ', model: 'هِيَ حَمْرَاءُ وَكَبِيرَةٌ، طُولُهَا حَوَالَيْ مِتْرٍ.', modelEn: 'It is red and big, about a metre long.' },
        { ex: 'مِمَّ هِيَ مَصْنُوعَةٌ؟', task: 'Say the material.', plan: 'مِمَّ ← هِيَ مَصْنُوعَةٌ مِنَ …', model: 'هِيَ مَصْنُوعَةٌ مِنَ البْلَاسْتِيكِ القَوِيِّ.', modelEn: 'It is made of strong plastic.' },
        { ex: 'كَمْ وَزْنُهَا؟', task: 'Give the weight.', plan: 'كَمْ ← وَزْنُهَا … كِيلُوغْرَامًا', model: 'وَزْنُهَا عِشْرُونَ كِيلُوغْرَامًا تَقْرِيبًا.', modelEn: 'It weighs about twenty kilos.' },
        { unexpected: true, ex: 'مَاذَا يُوجَدُ فِيهَا؟', task: 'Answer the unexpected question.', plan: 'مَاذَا ← فِيهَا … وَ…', model: 'فِيهَا مَلَابِسِي وَهَدَايَا لِعَائِلَتِي.', modelEn: 'My clothes and presents for my family are in it.' },
      ],
      girl: 'no change for the Speaker — the suitcase (حَقِيبَةٌ) is feminine, so keep -hā and -a endings',
      notes: 'Language: lam taṣil (jussive after lam) · colour + size agreement with a feminine noun · ṭūluhā ḥawālay mitrin · maṣnūʿatun min · 11–99 + singular accusative (kīlūghrāman).',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a carpenter’s workshop', title: 'Role play 2 — Ordering a custom desk', ar: 'أَطْلُبُ مَكْتَبًا خَاصًّا', you: 'a customer', them: 'the carpenter',
      tasks: [
        { ex: 'أَيَّ نَوْعٍ مِنَ المَكَاتِبِ تُرِيدُ؟', task: 'Describe the shape and size you want.', model: 'أُرِيدُ مَكْتَبًا مُسْتَطِيلًا، طُولُهُ مِتْرٌ وَنِصْفٌ، وَعَرْضُهُ سِتُّونَ سَنْتِيمِتْرًا.', modelEn: 'I want a rectangular desk, one and a half metres long and sixty centimetres wide.' },
        { ex: 'مِنْ أَيِّ مَادَّةٍ؟', task: 'Choose a material and give a reason.', model: 'مِنَ الخَشَبِ المُسْتَعْمَلِ، لِأَنَّهُ أَرْخَصُ، وَلِأَنِّي لَا أُرِيدُ أَنْ تُقْطَعَ أَشْجَارٌ جَدِيدَةٌ.', modelEn: 'From reclaimed wood, because it’s cheaper and I don’t want new trees cut down.' },
        { ex: 'لِمَاذَا تَحْتَاجُ مَكْتَبًا جَدِيدًا؟', task: 'Explain with a past problem.', model: 'مَكْتَبِي القَدِيمُ صَغِيرٌ جِدًّا، وَفِي الشَّهْرِ المَاضِي انْكَسَرَتْ رِجْلُهُ وَأَنَا أَدْرُسُ!', modelEn: 'My old desk is too small, and last month its leg broke while I was studying!' },
        { ex: 'هَلْ تُرِيدُ دُرْجًا؟', task: 'Answer and ASK about price and time.', model: 'نَعَمْ، دُرْجَيْنِ مِنْ فَضْلِكَ. كَمْ سَيَكُونُ الثَّمَنُ؟ وَمَتَى يَكُونُ جَاهِزًا؟', modelEn: 'Yes, two drawers please. What will the price be? And when will it be ready?' },
        { unexpected: true, ex: 'الخَشَبُ أَثْقَلُ مِنَ المَعْدِنِ. لِمَاذَا لَا تَخْتَارُ المَعْدِنَ؟', task: 'Answer the unexpected question (comparison + concession).', model: 'صَحِيحٌ أَنَّ المَعْدِنَ أَخَفُّ وَأَقْوَى، غَيْرَ أَنَّهُ بَارِدٌ وَشَكْلُهُ عَادِيٌّ، أَمَّا الخَشَبُ فَدَافِئٌ وَجَمِيلٌ، وَسَيَبْقَى سَنَوَاتٍ طَوِيلَةً.', modelEn: 'It’s true metal is lighter and stronger, but it’s cold and plain, whereas wood is warm and beautiful and will last many years.' },
      ],
      girl: 'تُرِيدِينَ · تَحْتَاجِينَ · تَخْتَارِينَ',
      notes: 'Stretch language: ṭūluhu mitrun wa-niṣfun · ʿarḍuhu sittūna · li-annahu … wa-li-annī lā urīdu an tuqṭaʿa (passive) · dual durjayni · ṣaḥīḥun anna … ghayra anna + ammā … fa-.',
    },
  ],
  convAr: 'الأَشْيَاءُ حَوْلَنَا',
  conv: [
    { route: 'Core', q: 'مَا لَوْنُ وَشَكْلُ طَاوِلَتِكَ؟', en: 'What colour and shape is your table?', push: 'وَمِمَّ هِيَ؟' },
    { route: 'Core', q: 'هَلْ هَاتِفُكَ ثَقِيلٌ أَمْ خَفِيفٌ؟', en: 'Is your phone heavy or light?', push: 'كَمْ وَزْنُهُ؟' },
    { route: 'Develop', q: 'صِفْ أَغْرَبَ شَيْءٍ اشْتَرَيْتَهُ.', en: 'Describe the strangest thing you have bought.', push: 'لِمَاذَا اشْتَرَيْتَهُ؟' },
    { route: 'Develop', q: 'مَا الفَرْقُ بَيْنَ المَلَابِسِ القُطْنِيَّةِ وَالصُّوفِيَّةِ؟', en: 'What is the difference between cotton and woollen clothes?', push: 'أَيُّهُمَا تُفَضِّلُ؟' },
    { route: 'Stretch', q: 'هَلْ يَجِبُ أَنْ نَمْنَعَ الأَشْيَاءَ الَّتِي تُسْتَعْمَلُ مَرَّةً وَاحِدَةً؟', en: 'Should we ban single-use items?', push: 'مَثَلًا؟' },
    { route: 'Stretch', q: 'هَلِ الأَشْيَاءُ القَدِيمَةُ أَقْوَى مِنَ الحَدِيثَةِ؟', en: 'Are old things stronger than modern ones?', push: 'لِمَاذَا؟' },
  ],
  convModels: [
    { q: 'صِفْ أَغْرَبَ شَيْءٍ اشْتَرَيْتَهُ.', model: 'أَغْرَبُ شَيْءٍ اشْتَرَيْتُهُ كُرَةٌ زُجَاجِيَّةٌ دَائِرِيَّةٌ فِيهَا ثَلْجٌ، لِأَنَّهَا ذَكَّرَتْنِي بِرِحْلَتِنَا إِلَى اسْكُتْلَنْدَا؛ قُطْرُهَا عَشَرَةُ سَنْتِيمِتْرَاتٍ فَقَطْ، وَسَأُعْطِيهَا لِأُخْتِي الصَّغِيرَةِ.', modelEn: 'A: a round glass snow globe · R: it reminded me of our trip to Scotland · E: only ten centimetres across · T: I’ll give it to my little sister.' },
    { q: 'مَا الفَرْقُ بَيْنَ المَلَابِسِ القُطْنِيَّةِ وَالصُّوفِيَّةِ؟', model: 'القُطْنُ أَخَفُّ وَأَبْرَدُ، لِذٰلِكَ نَلْبَسُهُ فِي الصَّيْفِ؛ أَمَّا الصُّوفُ فَأَثْقَلُ وَأَدْفَأُ، وَأُمِّي صَنَعَتْ لِي سُتْرَةً صُوفِيَّةً زَرْقَاءَ أَلْبَسُهَا كُلَّ شِتَاءٍ.', modelEn: 'A: cotton is lighter and cooler, so we wear it in summer · contrast: wool is heavier and warmer · E: mum made me a blue wool jumper I wear every winter.' },
    { q: 'هَلْ يَجِبُ أَنْ نَمْنَعَ الأَشْيَاءَ الَّتِي تُسْتَعْمَلُ مَرَّةً وَاحِدَةً؟', model: 'فِي رَأْيِي نَعَمْ، لِأَنَّ أَغْلَبَهَا مَصْنُوعٌ مِنَ البْلَاسْتِيكِ غَيْرِ القَابِلِ لِلتَّدْوِيرِ؛ مَثَلًا، مَنَعَتْ مَدْرَسَتِي الكُؤُوسَ البْلَاسْتِيكِيَّةَ، فَقَلَّتِ النُّفَايَاتُ كَثِيرًا.', modelEn: 'Opinion: yes · R: most are made of non-recyclable plastic · E: my school banned plastic cups and rubbish fell a lot.' },
  ],
  talk: {
    title: 'One minute: an object that matters to me', ar: 'شَيْءٌ لَهُ قِيمَةٌ عِنْدِي',
    text: 'Talk for one minute about an object that matters to you: what it is, its size, shape, weight and material, where it came from — and why it matters more than its price.',
    routes: {
      core: '30 seconds: what it is, its colour, shape and material (مَصْنُوعٌ مِنْ …).',
      develop: '60 seconds: add measurements (طُولُهُ · وَزْنُهُ) and its story.',
      stretch: '90 seconds: add a comparison with a newer object and a concession.',
    },
  },
  checkCore: 'used مَصْنُوعٌ / مَصْنُوعَةٌ مِنْ correctly',
  checkDevelop: 'gave measurements with طُولُهُ / عَرْضُهُ / وَزْنُهُ + number',
};
speak.ladderQs[3].l2 = '… لِأَنَّهُ قَابِلٌ لِإِعَادَةِ التَّدْوِيرِ';

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up form, decoding a new Q2 task (an advert to sell something second-hand), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Lost property form', ar: 'اسْتِمَارَةُ المَفْقُودَاتِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'الشَّيْءُ المَفْقُودُ', en: 'Lost item', tip: 'حَقِيبَةٌ · مِظَلَّةٌ' },
      { core: true, ar: 'اللَّوْنُ', en: 'Colour', tip: 'Agree: أَسْوَدُ / سَوْدَاءُ' },
      { core: true, ar: 'المَادَّةُ', en: 'Material', tip: 'جِلْدٌ · قُمَاشٌ' },
      { core: true, ar: 'الحَجْمُ', en: 'Size', tip: 'صَغِيرٌ · طُولُهُ …' },
      { ar: 'جُمْلَةٌ: أَيْنَ وَمَتَى فَقَدْتَهُ؟', en: 'ONE sentence: where and when you lost it', tip: 'فَقَدْتُهُ فِي … يَوْمَ …' },
    ],
  },
  Q2: {
    title: 'Question 2: an advert to sell something', ar: 'إِعْلَانٌ لِبَيْعِ شَيْءٍ مُسْتَعْمَلٍ',
    task: 'You want to sell something you no longer need on a second-hand website. Write an advert in Arabic of about 80–90 words. You must include: • what the object is and a full description (size, shape, material) • how long you have had it and why you bought it • why you are selling it now • the price, and why it is a good choice for the buyer.',
    phrases: [['لِلْبَيْعِ: … مُسْتَعْمَلٌ / مُسْتَعْمَلَةٌ', 'for sale: a used …'], ['طُولُهُ … وَعَرْضُهُ … ، وَهُوَ مَصْنُوعٌ مِنْ …', 'it is … long and … wide, and made of …'], ['اشْتَرَيْتُهُ قَبْلَ … لِأَنَّ …', 'I bought it … ago because …'], ['ثَمَنُهُ … فَقَطْ', 'its price is only …']],
    rubric: [
      ['task', 'اكْتُبْ إِعْلَانًا لِمَوْقِعِ الأَشْيَاءِ المُسْتَعْمَلَةِ (٨٠–٩٠ كَلِمَةً).', 'Write an advert for a second-hand website (80–90 words).'],
      ['1', 'مَا الشَّيْءُ؟ صِفْهُ (الحَجْمُ، الشَّكْلُ، المَادَّةُ).', 'What it is; describe it'],
      ['2', 'مُنْذُ مَتَى عِنْدَكَ؟ وَلِمَاذَا اشْتَرَيْتَهُ؟', 'How long you’ve had it; why you bought it'],
      ['3', 'لِمَاذَا تَبِيعُهُ الآنَ؟', 'Why you are selling it'],
      ['4', 'الثَّمَنُ، وَلِمَاذَا هُوَ اخْتِيَارٌ جَيِّدٌ؟', 'The price; why it’s a good buy'],
    ],
    decode: ['an ADVERT → a title (لِلْبَيْعِ), speak to the buyer', 'صِفْهُ → shape + material + measurements (طُولُهُ · وَزْنُهُ)', 'مُنْذُ مَتَى · لِمَاذَا اشْتَرَيْتَهُ → مُنْذُ + PAST + لِأَنَّ', 'لِمَاذَا تَبِيعُهُ الآنَ → PRESENT reason (لَمْ أَعُدْ أَحْتَاجُهُ)', 'الثَّمَنُ · اخْتِيَارٌ جَيِّدٌ → number + currency + comparative (أَرْخَصُ مِنْ)'],
    coreFrames: [
      { ar: 'لِلْبَيْعِ: ______ مُسْتَعْمَلٌ', en: 'Title: For sale: a used …' },
      { ar: 'هُوَ ______ وَ ______ ، وَمَصْنُوعٌ مِنَ ______ .', en: '1 · It is … and …, and made of …' },
      { ar: 'اشْتَرَيْتُهُ قَبْلَ ______ ، لِأَنَّ ______ .', en: '2 · I bought it … ago, because …' },
      { ar: 'أَبِيعُهُ الآنَ لِأَنَّ ______ .', en: '3 · I am selling it now because …' },
      { ar: 'ثَمَنُهُ ______ جُنَيْهًا فَقَطْ.', en: '4 · Its price is only £…' },
    ],
    developFrames: [
      { ar: 'طُولُهُ ______ ، وَعَرْضُهُ ______ ، وَوَزْنُهُ ______ .', en: '1 · It is … long, … wide and weighs …' },
      { ar: 'كَانَ هَدِيَّةً مِنْ ______ عِنْدَمَا ______ .', en: '2 · It was a present from … when …' },
      { ar: 'لَمْ أَعُدْ أَحْتَاجُهُ، لِأَنَّ ______ .', en: '3 · I no longer need it, because …' },
      { ar: 'هُوَ أَرْخَصُ مِنَ الجَدِيدِ بِ ______ ، وَ ______ .', en: '4 · It is … cheaper than a new one, and …' },
    ],
    bank: ['مُسْتَعْمَلٌ · بِحَالَةٍ جَيِّدَةٍ', 'طُولُهُ · عَرْضُهُ · وَزْنُهُ', 'مِتْرٌ · سَنْتِيمِتْرٌ', 'مُسْتَطِيلٌ · دَائِرِيٌّ', 'مَصْنُوعٌ مِنْ', 'خَشَبٌ · مَعْدِنٌ', 'خَفِيفٌ · ثَقِيلٌ', 'أَرْخَصُ مِنْ'],
    model: {
      text: `لِلْبَيْعِ: دَرَّاجَةٌ جَبَلِيَّةٌ زَرْقَاءُ
أَبِيعُ دَرَّاجَتِي الزَّرْقَاءَ، وَهِيَ بِحَالَةٍ مُمْتَازَةٍ. هِيَ مَصْنُوعَةٌ مِنَ المَعْدِنِ الخَفِيفِ، وَوَزْنُهَا اثْنَا عَشَرَ كِيلُوغْرَامًا فَقَطْ، وَطُولُهَا مِتْرٌ وَسَبْعُونَ سَنْتِيمِتْرًا، وَعَجَلَاتُهَا دَائِرِيَّةٌ كَبِيرَةٌ مَصْنُوعَةٌ مِنَ المَطَّاطِ القَوِيِّ. اشْتَرَيْتُهَا قَبْلَ ثَلَاثِ سَنَوَاتٍ، لِأَنِّي كُنْتُ أَذْهَبُ إِلَى المَدْرَسَةِ بِهَا كُلَّ يَوْمٍ. لٰكِنِّي الآنَ أَطْوَلُ بِكَثِيرٍ، وَالدَّرَّاجَةُ أَصْبَحَتْ صَغِيرَةً عَلَيَّ، لِذٰلِكَ لَمْ أَعُدْ أَسْتَعْمِلُهَا. ثَمَنُهَا مِئَةٌ وَعِشْرُونَ جُنَيْهًا فَقَطْ، أَيْ أَرْخَصُ مِنَ الجَدِيدَةِ بِالنِّصْفِ، وَهِيَ مُنَاسِبَةٌ لِطَالِبٍ عُمْرُهُ بَيْنَ عَشْرِ سَنَوَاتٍ وَثَلَاثَ عَشْرَةَ سَنَةً.
اتَّصِلُوا بِزَيْدٍ`,
      en: '“For sale: a blue mountain bike. I am selling my blue bike, which is in excellent condition. It is made of light metal, weighs only 12 kg and is 1.7 m long, and its wheels are big and round, made of strong rubber. I bought it three years ago, because I used to ride it to school every day. But now I am much taller and the bike has become too small for me, so I no longer use it. Its price is only £120 — half the price of a new one — and it suits a student aged between ten and thirteen. Contact Zaid.”',
      find: ['مَصْنُوعَةٌ مِنَ المَعْدِنِ الخَفِيفِ', 'وَوَزْنُهَا اثْنَا عَشَرَ كِيلُوغْرَامًا', 'اشْتَرَيْتُهَا قَبْلَ ثَلَاثِ سَنَوَاتٍ', 'أَرْخَصُ مِنَ الجَدِيدَةِ بِالنِّصْفِ'],
    },
  },
  upgrade: [
    { ar: 'عِنْدِي طَاوِلَةٌ.', en: 'I have a table.' },
    { ar: 'عِنْدِي طَاوِلَةٌ دَائِرِيَّةٌ مَصْنُوعَةٌ مِنَ الخَشَبِ.', en: 'I have a round table made of wood.' },
    { ar: '… قُطْرُهَا مِتْرٌ، وَهِيَ ثَقِيلَةٌ جِدًّا، لِذٰلِكَ لَا أَسْتَطِيعُ أَنْ أُحَرِّكَهَا وَحْدِي.', en: '… a metre across, and very heavy, so I can’t move it alone.' },
    { ar: '… صَنَعَهَا جَدِّي بِيَدَيْهِ قَبْلَ أَرْبَعِينَ سَنَةً، فَهِيَ أَقْوَى مِنْ أَيِّ طَاوِلَةٍ حَدِيثَةٍ.', en: '… my grandad made it by hand forty years ago, so it’s stronger than any modern table.' },
  ],
  builder: [
    { en: 'The box is made of metal.', cols: [['الصُّنْدُوقُ', 'الصُّنْدُوقَ'], ['مَصْنُوعٌ', 'مَصْنُوعَةٌ'], ['مِنَ المَعْدِنِ', 'بِالمَعْدِنِ']], key: [0, 0, 0], why: 'Masculine noun → مَصْنُوعٌ مِنْ + genitive.' },
    { en: 'The table is two metres long.', cols: [['طُولُ', 'طَوِيلٌ'], ['الطَّاوِلَةِ', 'الطَّاوِلَةُ'], ['مِتْرَانِ', 'اثْنَانِ مِتْرٌ']], key: [0, 0, 0], why: 'طُولُ + noun (iḍāfa); two metres = the dual مِتْرَانِ.' },
    { en: 'Glass is heavier than plastic.', cols: [['الزُّجَاجُ', 'زُجَاجٌ'], ['أَثْقَلُ', 'ثَقِيلٌ'], ['مِنَ البْلَاسْتِيكِ', 'البْلَاسْتِيكَ']], key: [0, 0, 0], why: 'Comparative أَثْقَلُ + مِنْ.' },
  ],
  errors: [
    { wrong: 'الحَقِيبَةُ مَصْنُوعٌ مِنَ الجِلْدِ.', hint: 'Agreement.', right: 'الحَقِيبَةُ مَصْنُوعَةٌ مِنَ الجِلْدِ.', why: 'Feminine noun → مَصْنُوعَةٌ.' },
    { wrong: 'طُولُهَا اثْنَانِ مِتْرٌ.', hint: 'Two of something → one word.', right: 'طُولُهَا مِتْرَانِ.', why: 'Two = the dual: مِتْرَانِ.' },
    { wrong: 'وَزْنُهُ خَمْسَةَ عَشَرَ كِيلُوغْرَامَاتٍ.', hint: '11–99 + which form?', right: 'وَزْنُهُ خَمْسَةَ عَشَرَ كِيلُوغْرَامًا.', why: '11–99 + singular accusative: كِيلُوغْرَامًا.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: something I made', ar: 'شَيْءٌ صَنَعْتُهُ بِيَدِي',
    task: 'Full Q3 title: “Objects in our lives”. Today write ONLY the past paragraph: something you made (in DT, art, at home…) — what it was, its size, shape and materials, how you made it, and how you felt about the result.',
    formula: [
      { ar: 'فِي السَّنَةِ المَاضِيَةِ صَنَعْتُ صُنْدُوقًا لِلطُّيُورِ.', en: 'T · Last year I made a bird box.' },
      { ar: 'كَانَ مَصْنُوعًا مِنَ الخَشَبِ، وَطُولُهُ ثَلَاثُونَ سَنْتِيمِتْرًا.', en: 'D · It was made of wood and 30 cm long.' },
      { ar: 'صَنَعْتُهُ لِأَنَّ الطُّيُورَ تَحْتَاجُ إِلَى بُيُوتٍ.', en: 'R · I made it because birds need homes.' },
      { ar: 'شَعَرْتُ بِالفَخْرِ عِنْدَمَا سَكَنَهُ طَائِرٌ.', en: 'F · I felt proud when a bird moved in.' },
    ],
    phrases: [['صَنَعْتُ … فِي حِصَّةِ …', 'I made … in … lesson'], ['كَانَ مَصْنُوعًا مِنْ …', 'it was made of …'], ['طُولُهُ … وَعَرْضُهُ …', 'it was … long and … wide'], ['أَوَّلًا قِسْتُ … ثُمَّ قَطَعْتُ …', 'first I measured … then I cut …'], ['شَعَرْتُ بِالفَخْرِ', 'I felt proud']],
    model: {
      text: 'فِي الفَصْلِ المَاضِي، صَنَعْتُ مِصْبَاحًا صَغِيرًا فِي حِصَّةِ التَّصْمِيمِ وَالتِّكْنُولُوجْيَا. كَانَ شَكْلُهُ أُسْطُوَانِيًّا، وَطُولُهُ خَمْسَةٌ وَعِشْرُونَ سَنْتِيمِتْرًا، وَكَانَ مَصْنُوعًا مِنَ الخَشَبِ وَالزُّجَاجِ المُعَادِ تَدْوِيرُهُ. أَوَّلًا رَسَمْتُ التَّصْمِيمَ، ثُمَّ قِسْتُ الخَشَبَ وَقَطَعْتُهُ بِحَذَرٍ، وَبَعْدَ ذٰلِكَ وَضَعْتُ زُجَاجَةً قَدِيمَةً فِي الوَسَطِ. كَانَ العَمَلُ صَعْبًا، لِأَنَّ الزُّجَاجَ قَابِلٌ لِلْكَسْرِ، فَكَسَرْتُ زُجَاجَتَيْنِ! فِي النِّهَايَةِ شَعَرْتُ بِالفَخْرِ، وَالمِصْبَاحُ الآنَ بِجَانِبِ سَرِيرِي.',
      en: 'T: last term I made a small lamp in Design and Technology · D: it was cylindrical, 25 cm tall, made of wood and recycled glass; first I drew the design, then measured and carefully cut the wood, then put an old bottle in the middle · R: the work was hard because glass breaks easily — I broke two bottles! · F: in the end I felt proud, and the lamp is now next to my bed.',
      find: ['كَانَ شَكْلُهُ أُسْطُوَانِيًّا', 'وَكَانَ مَصْنُوعًا مِنَ', 'أَوَّلًا رَسَمْتُ … ثُمَّ قِسْتُ', 'قَابِلٌ لِلْكَسْرِ'],
    },
  },
};
write.Q2.developFrames[3] = { ar: 'هُوَ أَرْخَصُ مِنَ الجَدِيدِ بِالنِّصْفِ، وَ ______ .', en: '4 · It is half the price of a new one, and …' };

module.exports = { speak, write };
