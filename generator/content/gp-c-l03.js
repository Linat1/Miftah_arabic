'use strict';
/* Guided Practice Rooms · TC-L03 · Climate, seasons and weather. New tasks. Teacher-made. */
const XP = require('./xp-c-l03');

const base = { topic: 'C', n: 3, short: 'Climate, Seasons and Weather', arShort: 'المُنَاخُ وَالفُصُولُ وَالطَّقْسُ', fileTitle: 'Climate_Seasons_Weather', title: 'Climate, seasons and weather', icon: 'FaCloudSun', grammar: 'weather adjectives (m. / f.); tasquṭu al-amṭār · tahubbu riyāḥ; temperatures (daraja + numbers); comparatives (aḥarru, abradu); kāna + past weather; idhā … fa-' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up on weather and seasons, the answer ladder, two new role plays (a radio weather report, planning a trip around the weather), a topic conversation with A-R-E-T, and a one-minute talk about their favourite season.',
  words: XP.speak.words,
  words1: { title: 'Weather words', ar: 'كَلِمَاتُ الطَّقْسِ' },
  words2: { title: 'Seasons, temperatures and forecasts', ar: 'الفُصُولُ وَالحَرَارَةُ وَالنَّشْرَةُ' },
  ladder: {
    q: 'مَا فَصْلُكَ المُفَضَّلُ؟', qEn: 'What is your favourite season?',
    rungs: [
      { ar: 'فَصْلِي المُفَضَّلُ هُوَ الرَّبِيعُ.', en: 'My favourite season is spring.' },
      { ar: 'فَصْلِي المُفَضَّلُ هُوَ الرَّبِيعُ، لِأَنَّ الجَوَّ مُعْتَدِلٌ وَمُشْمِسٌ.', en: '… because the weather is mild and sunny.' },
      { ar: '… تَكُونُ دَرَجَةُ الحَرَارَةِ حَوَالَيْ ثَمَانِي عَشْرَةَ دَرَجَةً، فَأَلْعَبُ فِي الحَدِيقَةِ بَعْدَ المَدْرَسَةِ.', en: '… the temperature is about 18 degrees, so I play in the park after school.' },
      { ar: '… أَمَّا الشِّتَاءُ فَبَارِدٌ وَمُظْلِمٌ؛ وَلَوْ كَانَ الرَّبِيعُ طُولَ السَّنَةِ، لَكُنْتُ أَسْعَدَ!', en: '… winter, though, is cold and dark — if it were spring all year, I would be happier!' },
    ],
  },
  ladderQs: [
    { q: 'كَيْفَ الطَّقْسُ اليَوْمَ؟', l1: 'الجَوُّ اليَوْمَ …', l2: '… وَدَرَجَةُ الحَرَارَةِ …', l3: '… وَغَدًا سَيَكُونُ …' },
    { q: 'مَاذَا تَلْبَسُ عِنْدَمَا تَسْقُطُ الأَمْطَارُ؟', l1: 'أَلْبَسُ …', l2: '… لِأَنَّ …', l3: '… وَأَمْسِ نَسِيتُ …' },
    { q: 'كَيْفَ المُنَاخُ فِي بَلَدِ عَائِلَتِكَ؟', l1: 'المُنَاخُ هُنَاكَ …', l2: '… أَحَرُّ مِنْ …', l3: '… وَفِي الشِّتَاءِ …' },
    { q: 'مَاذَا تَفْعَلُ عِنْدَمَا يَكُونُ الجَوُّ سَيِّئًا؟', l1: 'أَبْقَى فِي البَيْتِ وَ…', l2: '… لِأَنَّ …', l3: '… مَثَلًا يَوْمَ السَّبْتِ المَاضِي …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'the school radio station', title: 'Role play 1 — The school weather report', ar: 'النَّشْرَةُ الجَوِّيَّةُ فِي إِذَاعَةِ المَدْرَسَةِ', you: 'the weather presenter', them: 'the radio host',
      tasks: [
        { ex: 'صَبَاحَ الخَيْرِ! كَيْفَ الجَوُّ اليَوْمَ؟', task: 'Describe today’s weather.', plan: 'كَيْفَ ← الجَوُّ اليَوْمَ … وَ…', model: 'صَبَاحَ النُّورِ! الجَوُّ اليَوْمَ غَائِمٌ وَبَارِدٌ.', modelEn: 'Good morning! Today it is cloudy and cold.' },
        { ex: 'كَمْ دَرَجَةُ الحَرَارَةِ؟', task: 'Give the temperature.', plan: 'كَمْ ← دَرَجَةُ الحَرَارَةِ … دَرَجَاتٍ', model: 'دَرَجَةُ الحَرَارَةِ خَمْسُ دَرَجَاتٍ فَقَطْ.', modelEn: 'The temperature is only five degrees.' },
        { ex: 'هَلْ سَتَسْقُطُ الأَمْطَارُ؟', task: 'Forecast the afternoon.', plan: 'هَلْ ← نَعَمْ، سَتَسْقُطُ … بَعْدَ الظُّهْرِ', model: 'نَعَمْ، سَتَسْقُطُ الأَمْطَارُ بَعْدَ الظُّهْرِ، وَسَتَهُبُّ رِيَاحٌ قَوِيَّةٌ.', modelEn: 'Yes, it will rain in the afternoon, and strong winds will blow.' },
        { ex: 'مَاذَا تَنْصَحُ الطُّلَّابَ؟', task: 'Give advice.', plan: 'تَنْصَحُ ← أَنْصَحُكُمْ بِأَنْ تَلْبَسُوا …', model: 'أَنْصَحُكُمْ بِأَنْ تَلْبَسُوا مِعْطَفًا وَتَأْخُذُوا مِظَلَّةً.', modelEn: 'I advise you to wear a coat and take an umbrella.' },
        { unexpected: true, ex: 'وَكَيْفَ سَيَكُونُ الجَوُّ فِي نِهَايَةِ الأُسْبُوعِ؟', task: 'Answer the unexpected question.', plan: 'نِهَايَةُ الأُسْبُوعِ ← سَيَكُونُ الجَوُّ …', model: 'سَيَكُونُ الجَوُّ مُشْمِسًا وَأَدْفَأَ قَلِيلًا.', modelEn: 'It will be sunny and a little warmer.' },
      ],
      girl: 'تَنْصَحِينَ — and the Speaker stays the same (weather words don’t change)',
      notes: 'Language: weather adjectives (ghāʾimun, bāridun) · numbers 3–10 + plural (khamsu darajātin) · future sa- + tasquṭu / tahubbu · anṣaḥukum bi-an · sa-yakūnu + accusative (mushmisan).',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'planning a family trip', title: 'Role play 2 — Choosing when to visit', ar: 'مَتَى نُسَافِرُ؟', you: 'a teenager helping to plan', them: 'your cousin in Jordan (on a video call)',
      tasks: [
        { ex: 'مَتَى تُرِيدُونَ أَنْ تَزُورُونَا؟', task: 'Suggest a season and give a reason.', model: 'نُرِيدُ أَنْ نَزُورَكُمْ فِي الرَّبِيعِ، لِأَنَّ الجَوَّ يَكُونُ مُعْتَدِلًا، وَلَيْسَ حَارًّا مِثْلَ الصَّيْفِ.', modelEn: 'We want to visit in spring, because the weather is mild and not hot like summer.' },
        { ex: 'كَيْفَ الطَّقْسُ عِنْدَكُمُ الآنَ؟', task: 'Describe the weather in Britain now and compare.', model: 'الجَوُّ مُمْطِرٌ كَالعَادَةِ! دَرَجَةُ الحَرَارَةِ عَشْرُ دَرَجَاتٍ، أَيْ أَبْرَدُ مِنْ عِنْدِكُمْ بِكَثِيرٍ.', modelEn: 'It is rainy as usual! It is ten degrees — much colder than with you.' },
        { ex: 'هَلْ زُرْتَ الأُرْدُنَّ فِي الصَّيْفِ مِنْ قَبْلُ؟', task: 'Tell a past experience of the weather.', model: 'نَعَمْ، قَبْلَ سَنَتَيْنِ، وَكَانَتِ الحَرَارَةُ أَرْبَعِينَ دَرَجَةً، فَلَمْ نَسْتَطِعْ أَنْ نَخْرُجَ فِي الظُّهْرِ.', modelEn: 'Yes, two years ago — it was forty degrees, so we couldn’t go out at midday.' },
        { ex: 'فِي الشِّتَاءِ يَسْقُطُ الثَّلْجُ أَحْيَانًا فِي عَمَّانَ.', task: 'React with surprise and ASK a question.', model: 'حَقًّا؟ لَمْ أَعْرِفْ ذٰلِكَ! هَلْ تُغْلَقُ المَدَارِسُ عِنْدَمَا يَسْقُطُ الثَّلْجُ؟', modelEn: 'Really? I didn’t know that! Do schools close when it snows?' },
        { unexpected: true, ex: 'لَوْ كَانَ الجَوُّ فِي بِرِيطَانِيَا حَارًّا دَائِمًا، هَلْ تَكُونُ سَعِيدًا؟', task: 'Answer the unexpected question (law … la- + concession).', model: 'صَحِيحٌ أَنِّي أَتْعَبُ مِنَ المَطَرِ، غَيْرَ أَنِّي لَوْ عِشْتُ فِي الحَرِّ دَائِمًا، لَاشْتَقْتُ إِلَى الخَرِيفِ وَأَلْوَانِهِ.', modelEn: 'It’s true I get tired of the rain, but if I lived in the heat all the time, I would miss autumn and its colours.' },
      ],
      girl: 'زُرْتِ · تَكُونِينَ سَعِيدَةً — and the Speaker says أَتْعَبُ · اشْتَقْتُ (no change)',
      notes: 'Stretch language: yakūnu + accusative (muʿtadilan) · comparatives + bi-kathīrin · kānat al-ḥarāratu + lam nastaṭiʿ · passive tughlaqu · ṣaḥīḥun anna … ghayra anna + law … la-.',
    },
  ],
  convAr: 'الطَّقْسُ وَالمُنَاخُ',
  conv: [
    { route: 'Core', q: 'مَا الفَصْلُ الَّذِي لَا تُحِبُّهُ؟', en: 'Which season don’t you like?', push: 'لِمَاذَا؟' },
    { route: 'Core', q: 'كَيْفَ كَانَ الطَّقْسُ أَمْسِ؟', en: 'What was the weather like yesterday?', push: 'وَمَاذَا فَعَلْتَ؟' },
    { route: 'Develop', q: 'مَاذَا تَفْعَلُ فِي الصَّيْفِ عِنْدَمَا يَكُونُ الجَوُّ حَارًّا؟', en: 'What do you do in summer when it is hot?', push: 'وَالصَّيْفُ المَاضِي؟' },
    { route: 'Develop', q: 'قَارِنِ الطَّقْسَ فِي بِرِيطَانِيَا بِالطَّقْسِ فِي بَلَدٍ عَرَبِيٍّ.', en: 'Compare the weather in Britain with an Arab country.', push: 'أَيُّهُمَا تُفَضِّلُ؟' },
    { route: 'Stretch', q: 'هَلْ يُؤَثِّرُ الطَّقْسُ فِي مِزَاجِ النَّاسِ؟', en: 'Does the weather affect people’s mood?', push: 'مَثَلًا؟' },
    { route: 'Stretch', q: 'هَلْ تَغَيَّرَ المُنَاخُ فِي السَّنَوَاتِ الأَخِيرَةِ؟', en: 'Has the climate changed in recent years?', push: 'وَمَا السَّبَبُ؟' },
  ],
  convModels: [
    { q: 'مَاذَا تَفْعَلُ فِي الصَّيْفِ عِنْدَمَا يَكُونُ الجَوُّ حَارًّا؟', model: 'عِنْدَمَا يَكُونُ الجَوُّ حَارًّا، أَذْهَبُ إِلَى المَسْبَحِ مَعَ أَصْدِقَائِي، لِأَنَّ بَيْتَنَا لَيْسَ فِيهِ مُكَيِّفٌ؛ فِي الصَّيْفِ المَاضِي وَصَلَتِ الحَرَارَةُ إِلَى خَمْسٍ وَثَلَاثِينَ دَرَجَةً، فَسَبَحْنَا كُلَّ يَوْمٍ.', modelEn: 'A: I go to the pool with friends · R: our house has no air-conditioning · E: last summer it reached 35 degrees, so we swam every day.' },
    { q: 'قَارِنِ الطَّقْسَ فِي بِرِيطَانِيَا بِالطَّقْسِ فِي بَلَدٍ عَرَبِيٍّ.', model: 'فِي بِرِيطَانِيَا تَسْقُطُ الأَمْطَارُ كَثِيرًا، وَالشِّتَاءُ بَارِدٌ وَطَوِيلٌ؛ أَمَّا فِي السُّعُودِيَّةِ فَالجَوُّ أَحَرُّ وَأَجَفُّ، لِذٰلِكَ يَخْرُجُ النَّاسُ فِي المَسَاءِ، وَأَنَا أُفَضِّلُ الشِّتَاءَ هُنَاكَ.', modelEn: 'A: in Britain lots of rain, long cold winter · contrast: in Saudi it is hotter and drier · R/E: so people go out in the evening · I prefer winter there.' },
    { q: 'هَلْ يُؤَثِّرُ الطَّقْسُ فِي مِزَاجِ النَّاسِ؟', model: 'فِي رَأْيِي نَعَمْ، لِأَنَّ الشَّمْسَ تَجْعَلُنَا أَكْثَرَ نَشَاطًا؛ مَثَلًا، فِي الشِّتَاءِ يَكُونُ الجَوُّ مُظْلِمًا فِي الرَّابِعَةِ، فَأَشْعُرُ بِالتَّعَبِ، أَمَّا فِي الصَّيْفِ فَأَخْرُجُ وَأَضْحَكُ أَكْثَرَ.', modelEn: 'Opinion: yes · R: the sun makes us more active · E: in winter it’s dark at four and I feel tired, but in summer I go out and laugh more.' },
  ],
  talk: {
    title: 'One minute: my favourite season', ar: 'فَصْلِي المُفَضَّلُ',
    text: 'Talk for one minute about your favourite season: what the weather is like, the temperature, what you wear and do — a memory from last year — and a comparison with another season or country.',
    routes: {
      core: '30 seconds: the season, two weather words, what you wear.',
      develop: '60 seconds: add the temperature, an activity and a past memory.',
      stretch: '90 seconds: add a comparison, an opinion on climate change and a لَوْ … sentence.',
    },
  },
  checkCore: 'used weather adjectives with the right gender (مُشْمِسٌ · مُشْمِسَةٌ)',
  checkDevelop: 'used past (كَانَ الجَوُّ …) and future (سَيَكُونُ …) weather',
};

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up form, decoding a new Q2 task (an email about the weather on a trip), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Holiday weather diary', ar: 'مُذَكِّرَةُ الطَّقْسِ فِي العُطْلَةِ',
    fields: [
      { core: true, ar: 'المَدِينَةُ', en: 'City', tip: 'دُبَيُّ · إِدِنْبَرَةُ' },
      { core: true, ar: 'الفَصْلُ', en: 'Season', tip: 'الصَّيْفُ · الشِّتَاءُ' },
      { core: true, ar: 'الطَّقْسُ', en: 'Weather', tip: 'مُشْمِسٌ · مُمْطِرٌ' },
      { core: true, ar: 'دَرَجَةُ الحَرَارَةِ', en: 'Temperature', tip: 'ثَلَاثُونَ دَرَجَةً' },
      { core: true, ar: 'المَلَابِسُ', en: 'Clothes', tip: 'قُبَّعَةٌ · مِعْطَفٌ' },
      { ar: 'جُمْلَةٌ: نَشَاطٌ مُنَاسِبٌ لِهٰذَا الطَّقْسِ', en: 'ONE sentence: an activity that suits this weather', tip: 'عِنْدَمَا يَكُونُ الجَوُّ … أَذْهَبُ …' },
    ],
  },
  Q2: {
    title: 'Question 2: the weather on my trip', ar: 'الطَّقْسُ فِي رِحْلَتِي',
    task: 'You are on a trip to another country. Write an email in Arabic to your family of about 80–90 words. You must include: • where you are and what the weather is like • a comparison with the weather at home • what you did yesterday because of the weather • what the weather will be like tomorrow and your plans.',
    phrases: [['أَنَا الآنَ فِي … ، وَالجَوُّ …', 'I am now in …, and the weather is …'], ['الجَوُّ هُنَا أَحَرُّ / أَبْرَدُ مِنْ …', 'the weather here is hotter / colder than …'], ['أَمْسِ كَانَ الجَوُّ … ، لِذٰلِكَ …', 'yesterday it was …, so …'], ['غَدًا سَيَكُونُ الجَوُّ … ، فَسَـنَذْهَبُ …', 'tomorrow it will be …, so we will go …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى عَائِلَتِكَ مِنْ رِحْلَتِكَ (٨٠–٩٠ كَلِمَةً).', 'Write to your family from your trip (80–90 words).'],
      ['1', 'أَيْنَ أَنْتَ؟ وَكَيْفَ الطَّقْسُ؟', 'Where you are; the weather'],
      ['2', 'قَارِنْ بِالطَّقْسِ فِي بَلَدِكَ.', 'Compare with home'],
      ['3', 'مَاذَا فَعَلْتَ أَمْسِ بِسَبَبِ الطَّقْسِ؟', 'Yesterday, because of the weather'],
      ['4', 'كَيْفَ سَيَكُونُ الطَّقْسُ غَدًا؟ وَمَا خُطَطُكَ؟', 'Tomorrow’s weather and plans'],
    ],
    decode: ['an email to your FAMILY → informal greeting and closing', 'أَيْنَ أَنْتَ · كَيْفَ الطَّقْسُ → PRESENT + weather adjectives', 'قَارِنْ → comparative + مِنْ (أَحَرُّ مِنْ · أَبْرَدُ مِنْ)', 'مَاذَا فَعَلْتَ أَمْسِ → PAST (كَانَ الجَوُّ … ، لِذٰلِكَ …)', 'كَيْفَ سَيَكُونُ · خُطَطُكَ → FUTURE (سَيَكُونُ + accusative)'],
    coreFrames: [
      { ar: 'عَائِلَتِي العَزِيزَةُ،', en: 'My dear family,' },
      { ar: 'أَنَا الآنَ فِي ______ ، وَالجَوُّ ______ وَ ______ .', en: '1 · I am now in …, and the weather is … and …' },
      { ar: 'الجَوُّ هُنَا ______ مِنَ الجَوِّ فِي بِرِيطَانِيَا.', en: '2 · The weather here is … than in Britain.' },
      { ar: 'أَمْسِ كَانَ الجَوُّ ______ ، لِذٰلِكَ ______ .', en: '3 · Yesterday it was …, so …' },
      { ar: 'غَدًا سَيَكُونُ الجَوُّ ______ ، وَسَنَذْهَبُ إِلَى ______ .', en: '4 · Tomorrow it will be …, and we will go to …' },
    ],
    developFrames: [
      { ar: 'دَرَجَةُ الحَرَارَةِ ______ دَرَجَةً، وَ ______ .', en: '1 · The temperature is … degrees, and …' },
      { ar: 'صَحِيحٌ أَنَّ ______ ، غَيْرَ أَنَّ ______ .', en: '2 · It is true that …, but …' },
      { ar: 'بِسَبَبِ ______ ، قَرَّرْنَا أَنْ ______ .', en: '3 · Because of …, we decided to …' },
      { ar: 'إِذَا كَانَ الجَوُّ ______ غَدًا، فَسَنَذْهَبُ ______ .', en: '4 · If the weather is … tomorrow, we will go …' },
    ],
    bank: ['مُشْمِسٌ · غَائِمٌ', 'تَسْقُطُ الأَمْطَارُ', 'تَهُبُّ رِيَاحٌ', 'دَرَجَةُ الحَرَارَةِ', 'أَحَرُّ · أَبْرَدُ مِنْ', 'رُطُوبَةٌ', 'سَيَكُونُ', 'بِسَبَبِ'],
    model: {
      text: `عَائِلَتِي العَزِيزَةُ،
السَّلَامُ عَلَيْكُمْ! أَنَا الآنَ فِي مَدِينَةِ دُبَيَّ، وَالجَوُّ حَارٌّ وَمُشْمِسٌ جِدًّا، وَدَرَجَةُ الحَرَارَةِ أَرْبَعُونَ دَرَجَةً فِي الظُّهْرِ. الجَوُّ هُنَا أَحَرُّ بِكَثِيرٍ مِنْ مَانْشِسْتَرَ، وَلَا تَسْقُطُ الأَمْطَارُ أَبَدًا، لٰكِنَّ الرُّطُوبَةَ عَالِيَةٌ. أَمْسِ هَبَّتْ رِيَاحٌ قَوِيَّةٌ مَعَ الغُبَارِ، لِذٰلِكَ بَقِينَا فِي المَرْكَزِ التِّجَارِيِّ طُولَ اليَوْمِ، وَزُرْنَا حَدِيقَةَ الأَسْمَاكِ هُنَاكَ، وَرَأَيْنَا أَسْمَاكَ القِرْشِ الكَبِيرَةَ. تَقُولُ النَّشْرَةُ الجَوِّيَّةُ إِنَّ الجَوَّ سَيَكُونُ أَهْدَأَ غَدًا، فَإِذَا كَانَ الجَوُّ صَافِيًا، فَسَنَذْهَبُ إِلَى الشَّاطِئِ فِي الصَّبَاحِ البَاكِرِ، ثُمَّ إِلَى الصَّحْرَاءِ فِي المَسَاءِ.
أَشْتَاقُ إِلَيْكُمْ،
خَالِدٌ`,
      en: '“My dear family, peace be upon you! I am now in Dubai, and the weather is very hot and sunny — forty degrees at midday. The weather here is much hotter than Manchester and it never rains, but the humidity is high. Yesterday strong winds blew with dust, so we stayed in the shopping centre all day and visited the aquarium there, where we saw the big sharks. The forecast says the weather will be calmer tomorrow, so if it is clear, we will go to the beach early in the morning, then to the desert in the evening. I miss you, Khalid.”',
      find: ['وَدَرَجَةُ الحَرَارَةِ أَرْبَعُونَ دَرَجَةً', 'أَحَرُّ بِكَثِيرٍ مِنْ', 'هَبَّتْ رِيَاحٌ قَوِيَّةٌ … لِذٰلِكَ', 'سَيَكُونُ أَهْدَأَ غَدًا'],
    },
  },
  upgrade: [
    { ar: 'الجَوُّ بَارِدٌ.', en: 'It is cold.' },
    { ar: 'الجَوُّ بَارِدٌ وَغَائِمٌ، وَدَرَجَةُ الحَرَارَةِ ثَلَاثُ دَرَجَاتٍ فَقَطْ.', en: 'It is cold and cloudy, and only three degrees.' },
    { ar: 'الجَوُّ بَارِدٌ وَغَائِمٌ، لِذٰلِكَ لَبِسْتُ مِعْطَفِي الثَّقِيلَ وَقُفَّازَيْنِ.', en: '… so I wore my heavy coat and gloves.' },
    { ar: '… وَإِذَا سَقَطَ الثَّلْجُ غَدًا، فَسَنَصْنَعُ رَجُلَ ثَلْجٍ فِي الحَدِيقَةِ!', en: '… and if it snows tomorrow, we will make a snowman in the garden!' },
  ],
  builder: [
    { en: 'Strong winds blew yesterday.', cols: [['هَبَّتْ', 'تَهُبُّ'], ['رِيَاحٌ قَوِيَّةٌ', 'رِيَاحٌ قَوِيٌّ'], ['أَمْسِ', 'غَدًا']], key: [0, 0, 0], why: 'Yesterday → past هَبَّتْ; رِيَاحٌ (non-human plural) → feminine قَوِيَّةٌ.' },
    { en: 'Tomorrow the weather will be sunny.', cols: [['غَدًا', 'أَمْسِ'], ['سَيَكُونُ الجَوُّ', 'كَانَ الجَوُّ'], ['مُشْمِسًا', 'مُشْمِسٌ']], key: [0, 0, 0], why: 'After يَكُونُ / سَيَكُونُ the adjective is accusative: مُشْمِسًا.' },
    { en: 'Winter in Scotland is colder than in London.', cols: [['الشِّتَاءُ فِي اسْكُتْلَنْدَا', 'فِي الشِّتَاءِ اسْكُتْلَنْدَا'], ['أَبْرَدُ', 'بَارِدٌ'], ['مِنْهُ فِي لَنْدَنَ', 'لَنْدَنَ']], key: [0, 0, 0], why: 'Comparative أَبْرَدُ + مِنْ.' },
  ],
  errors: [
    { wrong: 'السَّمَاءُ غَائِمٌ.', hint: 'السَّمَاءُ is feminine.', right: 'السَّمَاءُ غَائِمَةٌ.', why: 'Feminine noun → feminine adjective.' },
    { wrong: 'أَمْسِ الجَوُّ كَانَ مُمْطِرٌ.', hint: 'Look after كَانَ.', right: 'أَمْسِ كَانَ الجَوُّ مُمْطِرًا.', why: 'After كَانَ → accusative: مُمْطِرًا.' },
    { wrong: 'دَرَجَةُ الحَرَارَةِ خَمْسَةُ دَرَجَةٍ.', hint: 'Numbers 3–10 + which form?', right: 'دَرَجَةُ الحَرَارَةِ خَمْسُ دَرَجَاتٍ.', why: '3–10 + plural, and the number takes the opposite gender: خَمْسُ دَرَجَاتٍ.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a day the weather changed my plans', ar: 'يَوْمٌ غَيَّرَ فِيهِ الطَّقْسُ خُطَطِي',
    task: 'Full Q3 title: “Weather and the seasons”. Today write ONLY the past paragraph: a day the weather changed your plans — what you planned, what the weather did, what you did instead, and how you felt.',
    formula: [
      { ar: 'فِي الشِّتَاءِ المَاضِي، غَيَّرَ الثَّلْجُ كُلَّ خُطَطِنَا.', en: 'T · Last winter the snow changed all our plans.' },
      { ar: 'كُنَّا سَنُسَافِرُ، لٰكِنْ سَقَطَ الثَّلْجُ طُولَ اللَّيْلِ.', en: 'D · We were going to travel, but it snowed all night.' },
      { ar: 'بَقِينَا فِي البَيْتِ لِأَنَّ الطُّرُقَ أُغْلِقَتْ.', en: 'R · We stayed at home because the roads were closed.' },
      { ar: 'فِي النِّهَايَةِ كَانَ يَوْمًا جَمِيلًا.', en: 'F · In the end it was a lovely day.' },
    ],
    phrases: [['كُنَّا نُرِيدُ أَنْ …', 'we wanted to …'], ['فَجْأَةً تَغَيَّرَ الجَوُّ', 'suddenly the weather changed'], ['بِسَبَبِ المَطَرِ / الثَّلْجِ …', 'because of the rain / snow …'], ['بَدَلًا مِنْ ذٰلِكَ …', 'instead …'], ['فِي النِّهَايَةِ …', 'in the end …']],
    model: {
      text: 'فِي الصَّيْفِ المَاضِي، كُنَّا نُرِيدُ أَنْ نَقْضِيَ يَوْمًا كَامِلًا عَلَى شَاطِئِ بْرَايْتُونَ، لِأَنَّ النَّشْرَةَ الجَوِّيَّةَ قَالَتْ إِنَّ الجَوَّ سَيَكُونُ مُشْمِسًا. لٰكِنْ بَعْدَ سَاعَةٍ تَغَيَّرَ الجَوُّ فَجْأَةً، فَأَصْبَحَتِ السَّمَاءُ رَمَادِيَّةً، وَهَبَّتْ رِيَاحٌ بَارِدَةٌ، ثُمَّ سَقَطَتِ الأَمْطَارُ بِغَزَارَةٍ. بَدَلًا مِنْ ذٰلِكَ، دَخَلْنَا مَقْهًى صَغِيرًا، وَشَرِبْنَا الشُّوكُولَاتَةَ السَّاخِنَةَ، وَلَعِبْنَا الوَرَقَ سَاعَتَيْنِ. فِي النِّهَايَةِ ضَحِكْنَا كَثِيرًا، وَكَانَ يَوْمًا أَجْمَلَ مِمَّا تَوَقَّعْتُ.',
      en: 'T: last summer we wanted to spend a whole day on Brighton beach, because the forecast said it would be sunny · D: an hour later the weather suddenly changed — the sky turned grey, cold winds blew and then it poured; instead we went into a small café, drank hot chocolate and played cards for two hours · F: in the end we laughed a lot, and it was a nicer day than I expected.',
      find: ['كُنَّا نُرِيدُ أَنْ', 'سَيَكُونُ مُشْمِسًا', 'تَغَيَّرَ الجَوُّ فَجْأَةً', 'بَدَلًا مِنْ ذٰلِكَ'],
    },
  },
};
write.Q2.phrases[3] = ['غَدًا سَيَكُونُ الجَوُّ … ، فَسَنَذْهَبُ …', 'tomorrow it will be …, so we will go …'];

module.exports = { speak, write };
