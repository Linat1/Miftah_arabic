'use strict';
/* D4-L02 · Weather Patterns — Describing and Comparing Weather — website: Pathways › Development › D4 › D4-L02 (weather phenomena as verb subjects يَسْقُطُ المَطَرُ / تَسْقُطُ الثُّلُوجُ / تَهُبُّ الرِّيَاحُ, temperature تَرْتَفِعُ / تَنْخَفِضُ, comparison أَكْثَرُ حَرَارَةً مِنْ, forecasting مِنَ المُتَوَقَّعِ أَنْ + subjunctive). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D4')({
  n: 2, fileTitle: 'Weather_Patterns_Describing_and_Comparing', chip: 'Weather',
  title: 'Weather Patterns — Describing and Comparing Weather', arabic: 'أَنْمَاطُ الطَّقْسِ — وَصْفُ الطَّقْسِ وَالمُقَارَنَةُ',
  focus: 'Give a weather forecast and compare places: the weather word is the subject of the verb (يَسْقُطُ المَطَرُ · تَهُبُّ الرِّيَاحُ), temperatures rise and fall, one city is “hotter than” another, and “it is expected that …”.',
  icon: 'FaCloudSunRain', iconSet: 'fa6',
});

const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D4-L02', {
  support: `• Core: 10 weather words + four forecast verbs with the right first letter (يَسْقُطُ المَطَرُ but تَسْقُطُ الثُّلُوجُ / تَهُبُّ الرِّيَاحُ / تُشْرِقُ الشَّمْسُ) and one temperature. Develop: comparison (أَكْثَرُ حَرَارَةً مِنْ) and a range (تَتَرَاوَحُ بَيْنَ … وَ …). Stretch: a forecast with مِنَ المُتَوَقَّعِ أَنْ + verb in -a and a practical conclusion.
• Builds on D4-L01 (agreement: non-human plurals are feminine → الثُّلُوجُ / الرِّيَاحُ take ta-) and D3-L05 (comparison with min).
• UK link: compare London with Cairo / Amman / Dubai — students know UK weather well!
• Numbers: keep temperatures in digits on the board; say them in Arabic only for Stretch.`,
  teach: 'Weather verbs that agree, rising and falling temperatures, comparison and forecasts.',
  wedo: 'Picture match, sort the words, fix and listen to a weather bulletin.',
  next: { nextCode: 'D4-L03', nextTitle: 'Environmental Problems — Causes and Effects', nextAr: 'المُشْكِلَاتُ البِيئِيَّةُ' },
  objectives: ['Name weather phenomena and describe the weather.', 'Make the weather verb agree with its subject.', 'Compare the weather in two places (أَكْثَرُ … مِنْ).', 'Give a forecast with مِنَ المُتَوَقَّعِ أَنْ.'],
  rulesTitle: 'Grammar for weather patterns',
  rulesAr: 'قَوَاعِدُ وَصْفِ الطَّقْسِ',
  flexGroups: [2],
  doNow: {
    questions: [
      q('What does العَاصِفَةُ mean?', ['a storm', 'a cloud', 'rain'], 'Prepared at home (D4-L01).'),
      q('What does دَرَجَةُ الحَرَارَةِ mean?', ['the temperature', 'the climate', 'the humidity'], 'Prepared at home (D4-L01).'),
      q('Which adjective agrees: جِبَالٌ ___', ['عَالِيَةٌ', 'عَالٍ', 'عَالِيُونَ'], 'D4-L01: non-human plural → feminine singular.'),
      q('Complete: يَتَّسِمُ السَّاحِلُ ___ مَنَاخٍ مُعْتَدِلٍ.', ['بِـ', 'فِي', 'مِنْ'], 'D4-L01.'),
      q('Complete: الجَامِعَةُ أَفْضَلُ ___ الدَّوْرَةِ.', ['مِنَ', 'عَلَى', 'إِلَى'], 'D3-L05: comparative + min.'),
    ],
    keyIdea: { text: 'The weather is the SUBJECT: “falls the rain”, “blow the winds” — and the verb agrees with it.', ar: '{w|يَسْقُطُ} المَطَرُ · {e|تَهُبُّ} الرِّيَاحُ · {e|تَرْتَفِعُ} دَرَجَةُ الحَرَارَةِ' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of D4-L01. Questions 3–4 retrieve D4-L01 (agreement, yattasimu bi-); question 5 retrieves D3-L05 (comparison with min).',
  },
  routes: {
    core: ['I can describe today’s weather.', 'I can make the weather verb agree.'],
    develop: ['I can compare the weather in two cities.', 'I can give a temperature range.'],
    stretch: ['I can give a forecast with “it is expected that …”.', 'I can give practical advice from a forecast.'],
  },
  bridge: [
    { ar: 'مَطَرٌ', urdu: 'مینہ / بارش', tr: 'bārish', en: 'rain (meaning only)' },
    { ar: 'حَرَارَةٌ', urdu: 'حرارت', tr: 'harārat', en: 'heat → temperature' },
    { ar: 'رُطُوبَةٌ', urdu: 'رطوبت', tr: 'rutūbat', en: 'humidity' },
    { ar: 'مَوْسِمٌ', urdu: 'موسم', tr: 'mausam', en: 'Urdu: weather · Arabic: season' },
    { ar: 'بَرْقٌ', urdu: 'برق', tr: 'barq', en: 'lightning (and Urdu “electricity”)' },
  ],
  bridgeNotes: 'URDU BRIDGE: حرارت، رطوبت، برق are shared. CAREFUL: Urdu موسم means “the weather”; Arabic مَوْسِمٌ means a SEASON — Arabic weather is الطَّقْسُ or الجَوُّ.',
  core: ['المَطَرُ', 'الثُّلُوجُ', 'الرِّيَاحُ', 'الشَّمْسُ', 'السُّحُبُ / الغُيُومُ', 'العَاصِفَةُ', 'يَسْقُطُ المَطَرُ', 'تَسْقُطُ الثُّلُوجُ', 'تَهُبُّ الرِّيَاحُ', 'تُشْرِقُ الشَّمْسُ', 'تَرْتَفِعُ دَرَجَةُ الحَرَارَةِ', 'تَنْخَفِضُ دَرَجَةُ الحَرَارَةِ'],
  vocabNotes: {
    0: 'Weather phenomena. الشَّمْسُ is feminine (a natural feminine); الرِّيَاحُ / الثُّلُوجُ / السُّحُبُ are non-human plurals → feminine verbs.',
    1: 'Forecast language: say each one with a hand action (rain falling, wind blowing, temperature up / down). Notice the first letter: ya- only for المَطَرُ.',
    2: 'Comparison and measurement (FLEX for Core). أَكْثَرُ / أَقَلُّ + a noun in -an: أَكْثَرُ حَرَارَةً، أَقَلُّ رُطُوبَةً.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · the weather is the subject (website rules 1–2)', title: 'ya- or ta-? Check the weather word', ar: 'الفِعْلُ وَالفَاعِلُ',
      cols: [{ label: 'Forecast', w: 5.6, size: 24 }, { label: 'Subject', w: 3.4 }, { label: 'Why', w: 3.33 }],
      rows: [
        { core: true, cells: [P('{w|يَسْقُطُ} المَطَرُ.', 'It rains.'), 'al-maṭar', 'masculine → ya-'] },
        { core: true, cells: [P('{e|تَسْقُطُ} الثُّلُوجُ.', 'It snows.'), 'al-thulūj (pl.)', 'non-human plural → ta-'] },
        { core: true, cells: [P('{e|تَهُبُّ} الرِّيَاحُ.', 'The winds blow.'), 'al-riyāḥ (pl.)', 'non-human plural → ta-'] },
        { cells: [P('{e|تُشْرِقُ} الشَّمْسُ.', 'The sun shines.'), 'al-shams', 'feminine → ta-'] },
        { cells: [P('{e|تَرْتَفِعُ} دَرَجَةُ الحَرَارَةِ إِلَى ٣٠ دَرَجَةً.', 'The temperature rises to 30°.'), 'darajatu …', 'daraja (f.) → ta-'] },
      ],
      ltr: true,
      foot: 'The verb comes FIRST and agrees with the weather word after it. tanẖafiḍu = falls · tartafiʿu = rises.',
      notes: `GRAMMAR PART 1 — website rules “Natural phenomena are grammatical subjects” (the verb agrees with the named phenomenon: المطر masculine; الثلوج and الرياح treated as feminine) and “Temperature changes” (درجة الحرارة is feminine, so use ترتفع and تنخفض). Website examples as shown.
Website mistakes: يَسْقُطُ الثُّلُوجُ ✗ → تَسْقُطُ الثُّلُوجُ ✓ · يَرْتَفِعُ دَرَجَةُ الحَرَارَةِ ✗ → تَرْتَفِعُ ✓.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · compare and forecast (website rules 3–4) · Develop / Stretch', title: 'Hotter than … · it is expected that …', ar: 'أَكْثَرُ حَرَارَةً · مِنَ المُتَوَقَّعِ أَنْ',
      cards: [
        { chip: 'COMPARE · DEVELOP', color: '1D5FBF', head: 'أَكْثَرُ حَرَارَةً مِنْ', big: 'القَاهِرَةُ أَكْثَرُ حَرَارَةً مِنْ لَنْدَنَ.', en: 'Cairo is hotter than London.', clue: 'akthar + noun in -an + min.' },
        { chip: 'RANGE · DEVELOP', color: '6B4C9A', head: 'تَتَرَاوَحُ بَيْنَ … وَ …', big: 'تَتَرَاوَحُ دَرَجَةُ الحَرَارَةِ بَيْنَ ١٨ وَ٢٥ دَرَجَةً.', en: 'The temperature ranges between 18 and 25 degrees.', clue: 'bayna … wa …' },
        { chip: 'FORECAST · STRETCH', color: '1E7B4F', head: 'مِنَ المُتَوَقَّعِ أَنْ', big: 'مِنَ المُتَوَقَّعِ أَنْ تَنْخَفِضَ دَرَجَةُ الحَرَارَةِ لَيْلًا.', en: 'The temperature is expected to fall at night.', clue: 'an + verb in -a.' },
      ],
      error: { text: 'Website mistake: akthar + a NOUN, not an adjective.', pairs: [['القَاهِرَةُ أَكْثَرُ حَرَارَةً مِنْ لَنْدَنَ.', 'القَاهِرَةُ أَكْثَرُ حَارٌّ مِنْ لَنْدَنَ.']] },
      notes: `GRAMMAR PART 2 — website rules “Comparing weather” (أَكْثَرُ / أَقَلُّ + verbal noun + مِنْ: use a comparison noun such as حَرَارَةً، بُرُودَةً، رُطُوبَةً) and “Forecasting” (مِنَ المُتَوَقَّعِ أَنْ + subjunctive present). Website examples as shown; the range is from the vocabulary and reading text.
Short future (D3-L04) also works in a forecast: سَتُشْرِقُ الشَّمْسُ، سَيَسْقُطُ المَطَرُ (from the listening).`,
    },
  ],
  quick: [0, 1, 2, 4],
  rest: [3, 5, 6, 7],
  ido: {
    title: 'Watch me read a weather forecast',
    steps: [
      { head: 'City 1', ar: 'فِي القَاهِرَةِ {e|سَتُشْرِقُ} الشَّمْسُ.', think: 'shams (f.) → ta-.' },
      { head: 'Temperature', ar: 'وَ{e|سَتَرْتَفِعُ} دَرَجَةُ الحَرَارَةِ إِلَى ٣٣ دَرَجَةً.', think: 'daraja (f.) → ta-.' },
      { head: 'City 2 + rain', ar: 'وَفِي الرِّبَاطِ {w|سَيَسْقُطُ} المَطَرُ صَبَاحًا.', think: 'maṭar (m.) → ya-.' },
      { head: 'Compare', ar: 'القَاهِرَةُ {k|أَكْثَرُ حَرَارَةً مِنَ} الرِّبَاطِ.', think: 'akthar + -an + min.' },
    ],
    legend: ['w', 'e', 'k'], legendLabels: { w: 'ya- (m.)', e: 'ta- (f.)', k: 'COMPARISON' },
    model: 'مَرْحَبًا بِكُمْ فِي النَّشْرَةِ الجَوِّيَّةِ. فِي القَاهِرَةِ {e|سَتُشْرِقُ} الشَّمْسُ، وَ{e|سَتَرْتَفِعُ} دَرَجَةُ الحَرَارَةِ إِلَى ٣٣ دَرَجَةً. وَفِي الرِّبَاطِ {w|سَيَسْقُطُ} المَطَرُ صَبَاحًا، ثُمَّ {e|تَهُبُّ} رِيَاحٌ قَوِيَّةٌ مَسَاءً. إِذَنْ، القَاهِرَةُ {k|أَكْثَرُ حَرَارَةً مِنَ} الرِّبَاطِ اليَوْمَ.',
    modelEn: 'Welcome to the weather forecast. In Cairo the sun will shine and the temperature will rise to 33 degrees. In Rabat rain will fall in the morning, then strong winds will blow in the evening. So Cairo is hotter than Rabat today.',
    notes: 'I DO (3 min) — the website listening script read as a model, plus one comparison sentence. Think aloud: “Which weather word is the subject — masculine or feminine?”',
  },
  patternEn: ['It rains (rain falls).', 'The temperature rises to thirty degrees.', 'Cairo is hotter than London.'],
  game: {
    title: 'What is the weather like? Match the picture',
    pick: [0, 1, 4],
    en: ['The weather is sunny.', 'The weather is rainy.', 'The weather is cold and snowy.'],
    icons: [[['fa6', 'FaSun', 'C77700'], ['fa6', 'FaTemperatureHigh', 'B83227']], [['fa6', 'FaCloudRain', '1D5FBF'], ['fa6', 'FaUmbrella', '5A6472']], [['fa6', 'FaSnowflake', '6B9BD1'], ['fa6', 'FaTemperatureLow', '1D5FBF']]],
    labels: ['sun · heat', 'rain · umbrella', 'snow · cold'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Other cards: الجَوُّ غَائِمٌ (cloudy) · الجَوُّ عَاصِفٌ (stormy / windy) · دَرَجَةُ الحَرَارَةِ مُرْتَفِعَةٌ. Stretch: turn each card into a verb sentence (تُشْرِقُ الشَّمْسُ، يَسْقُطُ المَطَرُ، تَسْقُطُ الثُّلُوجُ).',
  },
  sorterNotes: 'Then match each phenomenon to its verb: المَطَرُ → يَسْقُطُ · الثُّلُوجُ → تَسْقُطُ · الرِّيَاحُ → تَهُبُّ.',
  patch: {
    grammar: {
      quiz: [
        L('Choose the accurate sentence.', ['يَسْقُطُ المَطَرُ غَزِيرًا.', 'تَسْقُطُ المَطَرُ غَزِيرًا.', 'يَسْقُطُ المَطَرُ فِي غَزِيرٍ.'], 'al-maṭar is masculine → ya-.'),
        L('Choose the accurate sentence about snow.', ['تَسْقُطُ الثُّلُوجُ فِي الشِّتَاءِ.', 'يَسْقُطُ الثُّلُوجُ فِي الشِّتَاءِ.', 'تَسْقُطُ الثُّلُوجُ إِلَى الشِّتَاءِ.'], 'Non-human plural → ta-.'),
        L('Complete: ___ الرِّيَاحُ بِقُوَّةٍ.', ['تَهُبُّ', 'يَهُبُّ', 'يَهُبُّونَ'], 'al-riyāḥ → ta-.'),
        L('Choose the accurate temperature sentence.', ['تَرْتَفِعُ دَرَجَةُ الحَرَارَةِ إِلَى ٣٢ دَرَجَةً.', 'يَرْتَفِعُ دَرَجَةُ الحَرَارَةِ إِلَى ٣٢ دَرَجَةً.', 'تَرْتَفِعُ دَرَجَةُ الحَرَارَةِ فِي ٣٢ دَرَجَةً.'], 'daraja (f.) + ilā.'),
        L('Which sentence means “Amman is colder than Dubai”?', ['عَمَّانُ أَكْثَرُ بُرُودَةً مِنْ دُبَيَّ.', 'عَمَّانُ أَقَلُّ بُرُودَةً مِنْ دُبَيَّ.', 'عَمَّانُ أَكْثَرُ بَارِدٌ مِنْ دُبَيَّ.'], 'akthar + noun (-an) + min.'),
        L('Complete: مِنَ المُتَوَقَّعِ أَنْ ___ دَرَجَةُ الحَرَارَةِ.', ['تَنْخَفِضَ', 'انْخَفَضَتْ', 'سَتَنْخَفِضُ'], 'an + present verb in -a.'),
        L('Choose the accurate range.', ['تَتَرَاوَحُ دَرَجَةُ الحَرَارَةِ بَيْنَ ١٨ وَ٢٥ دَرَجَةً.', 'تَتَرَاوَحُ دَرَجَةُ الحَرَارَةِ مِنْ ١٨ إِلَى بَيْنَ ٢٥.', 'يَتَرَاوَحُ دَرَجَةُ الحَرَارَةِ بَيْنَ ١٨ وَ٢٥.'], 'bayna … wa …; daraja → ta-.'),
        L('Which phrase means “less humid than”?', ['أَقَلُّ رُطُوبَةً مِنْ', 'أَكْثَرُ رُطُوبَةً مِنْ', 'أَصْغَرُ رَطْبٌ مِنْ'], 'aqall = less.'),
      ],
    },
    speaking: {
      model: [
        ['A', 'كَيْفَ يَخْتَلِفُ الطَّقْسُ بَيْنَ مَدِينَتَيْنِ؟', 'How does the weather differ between two cities?'],
        ['B', 'دُبَيُّ أَكْثَرُ حَرَارَةً مِنْ عَمَّانَ، بَيْنَمَا عَمَّانُ أَقَلُّ رُطُوبَةً فِي فَصْلِ الشِّتَاءِ.', 'Dubai is hotter than Amman, whereas Amman is less humid in winter.'],
      ],
    },
  },
  patchNote: 'several website quiz items had options differing only in final vowels (distractors replaced with meaningful errors); English added to the website speaking model.',
  hints: ['al-thulūj is a non-human plural: ya- or ta-?', 'daraja is feminine: ya- or ta-?', 'akthar + adjective or noun?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 5.\nListen for: القَاهِرَةِ · ثَلَاثٍ وَثَلَاثِينَ · الرِّبَاطِ.',
  listenRoutes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 6.',
  gloss: [
    ['مَرْحَبًا بِكُمْ فِي النَّشْرَةِ الجَوِّيَّةِ.', 'Welcome to the weather forecast.'],
    ['فِي القَاهِرَةِ سَتُشْرِقُ الشَّمْسُ، وَسَتَرْتَفِعُ دَرَجَةُ الحَرَارَةِ إِلَى ثَلَاثٍ وَثَلَاثِينَ دَرَجَةً.', 'In Cairo the sun will shine, and the temperature will rise to 33 degrees.'],
    ['أَمَّا فِي عَمَّانَ فَمِنَ المُتَوَقَّعِ أَنْ تَنْخَفِضَ دَرَجَةُ الحَرَارَةِ لَيْلًا', 'As for Amman, the temperature is expected to fall at night'],
    ['إِلَى اثْنَتَيْ عَشْرَةَ دَرَجَةً.', 'to 12 degrees.'],
    ['وَفِي الرِّبَاطِ سَيَسْقُطُ المَطَرُ صَبَاحًا، ثُمَّ تَهُبُّ رِيَاحٌ قَوِيَّةٌ مَسَاءً.', 'And in Rabat rain will fall in the morning, then strong winds will blow in the evening.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'كَيْفَ الطَّقْسُ اليَوْمَ؟' },
      { route: 'develop', ar: 'قَارِنْ بَيْنَ الطَّقْسِ فِي مَدِينَتَيْنِ.' },
      { route: 'develop', ar: 'مَا الطَّقْسُ المُتَوَقَّعُ غَدًا؟' },
      { route: 'stretch', ar: 'أَيُّ فَصْلٍ تُفَضِّلُ وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'اليَوْمَ تُشْرِقُ الشَّمْسُ / يَسْقُطُ المَطَرُ ، وَدَرَجَةُ الحَرَارَةِ ______ .' },
      { route: 'develop', ar: '______ أَكْثَرُ حَرَارَةً مِنْ ______ .' },
      { route: 'develop', ar: 'مِنَ المُتَوَقَّعِ أَنْ ______ غَدًا.' },
      { route: 'stretch', ar: 'أُفَضِّلُ فَصْلَ ______ لِأَنَّ ______ .' },
    ],
    modelEn: ['How does the weather differ between two cities?', 'Dubai is hotter than Amman, whereas Amman is less humid in winter.'],
    notes: 'Website prompts (Core prompt teacher-added) and website model. Fun task: one student is the TV weather presenter (Stretch) and reads a 30-second forecast for London and an Arab capital. To a girl: أَيُّ فَصْلٍ تُفَضِّلِينَ؟',
  },
  write: {
    core: { amount: '5 sentences', how: 'Today’s weather in two cities: three weather verbs and one temperature.' },
    develop: { amount: '80–100 words', how: 'Compare two cities with akthar / aqall … min and a temperature range.' },
    stretch: { amount: '100–120 words', how: 'Website task: compare two cities, add a forecast (min al-mutawaqqaʿ an) and practical advice.' },
  },
  frames: {
    core: [
      { en: 'In … the sun shines.', ar: 'فِي ______ تُشْرِقُ الشَّمْسُ.' },
      { en: 'In … it rains.', ar: 'فِي ______ يَسْقُطُ المَطَرُ.' },
      { en: 'The winds blow strongly.', ar: 'تَهُبُّ الرِّيَاحُ بِقُوَّةٍ.' },
      { en: 'The temperature rises to … degrees.', ar: 'تَرْتَفِعُ دَرَجَةُ الحَرَارَةِ إِلَى ______ دَرَجَةً.' },
    ],
    develop: [
      { en: '… is hotter than …', ar: '______ أَكْثَرُ حَرَارَةً مِنْ ______ .' },
      { en: '… is less humid than …', ar: '______ أَقَلُّ رُطُوبَةً مِنْ ______ .' },
      { en: 'The temperature ranges between … and …', ar: 'تَتَرَاوَحُ دَرَجَةُ الحَرَارَةِ بَيْنَ ______ وَ ______ دَرَجَةً.' },
      { en: 'It is expected that … tomorrow.', ar: 'مِنَ المُتَوَقَّعِ أَنْ ______ غَدًا.' },
    ],
    bank: ['يَسْقُطُ المَطَرُ', 'تَسْقُطُ الثُّلُوجُ', 'تَهُبُّ الرِّيَاحُ', 'تُشْرِقُ الشَّمْسُ', 'تَرْتَفِعُ', 'تَنْخَفِضُ', 'دَرَجَةُ الحَرَارَةِ', 'أَكْثَرُ حَرَارَةً مِنْ', 'أَقَلُّ رُطُوبَةً مِنْ', 'أَكْثَرُ بُرُودَةً', 'تَتَرَاوَحُ بَيْنَ', 'مِنَ المُتَوَقَّعِ أَنْ'],
  },
  stretch: [
    ['تَخْتَلِفُ أَحْوَالُ الطَّقْسِ مِنْ مَنْطِقَةٍ إِلَى أُخْرَى', 'weather conditions differ from one region to another'],
    ['قَدْ تَتَجَاوَزُ أَرْبَعِينَ دَرَجَةً', 'it may exceed forty degrees'],
    ['تَكُونُ الرُّطُوبَةُ مُرْتَفِعَةً', 'the humidity is high'],
    ['يَجِبُ عَلَى المُسَافِرِ أَنْ …', 'the traveller must …'],
    ['قَبْلَ الرِّحْلَةِ', 'before the trip'],
  ],
  modelEn: 'Weather conditions in the Arab world differ from one region to another. In Dubai the temperature rises in summer and may exceed forty degrees Celsius. In Amman the weather is colder in winter, and snow is expected to fall on some days. In Rabat it rains more than in Dubai, and winds blow on the coast. So a traveller should read the weather forecast before the trip.',
  find: ['three weather verbs that agree', 'a temperature', 'a comparison', 'a forecast and advice'],
  modelNotes: 'Website writing model. Evidence: تَرْتَفِعُ دَرَجَةُ الحَرَارَةِ، تَسْقُطَ الثُّلُوجُ، يَسْقُطُ المَطَرُ، تَهُبُّ الرِّيَاحُ · أَرْبَعِينَ دَرَجَةً مِئَوِيَّةً · أَكْثَرُ بُرُودَةً · مِنَ المُتَوَقَّعِ أَنْ تَسْقُطَ · يَجِبُ عَلَى المُسَافِرِ أَنْ يَقْرَأَ …',
  selfCheck: [
    { route: 'core', text: 'My weather verbs agree (ya- / ta-).' },
    { route: 'core', text: 'I gave a temperature.' },
    { route: 'develop', text: 'akthar / aqall + noun in -an + min.' },
    { route: 'develop', text: 'I gave a temperature range.' },
    { route: 'stretch', text: 'Forecast: min al-mutawaqqaʿ an + verb in -a.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['تُشِيرُ … إِلَى', 'indicates'], ['اخْتِلَافٍ كَبِيرٍ', 'a big difference'], ['مَنَاطِقِ البِلَادِ', 'the country’s regions'], ['تَتَرَاوَحُ', 'ranges'], ['ثَمَانِيَ عَشْرَةَ', 'eighteen'],
    ['خَمْسٍ وَعِشْرِينَ', 'twenty-five'], ['مُرْتَفِعَةً', 'high'], ['الجَوُّ', 'the weather'], ['أَقَلُّ رُطُوبَةً', 'less humid'], ['الجَنُوبِيَّةِ', 'southern'],
  ],
  prep: {
    words: [['التَّلَوُّثُ', 'pollution', '—'], ['النُّفَايَاتُ', 'waste, rubbish', 'sing. نُفَايَةٌ'], ['المَصَانِعُ', 'factories', 'sing. مَصْنَعٌ'], ['بِسَبَبِ', 'because of', '—'], ['يُؤَدِّي إِلَى', 'leads to', 'تُؤَدِّي she / it (f.)']],
    questionEn: 'Name one environmental problem in your town and one cause.',
    questionAr: 'مِنَ المُشْكِلَاتِ فِي مَدِينَتِي … بِسَبَبِ …',
    homework: {
      core: 'Learn the 12 weather words and verbs; write a 5-sentence forecast for tomorrow.',
      develop: 'Compare London and an Arab city in 80–100 words.',
      stretch: 'Website writing task: compare two cities with a forecast and advice (100–120 words).',
    },
    wordsSource: 'The five words come from the website D4-L03 vocabulary (environmental problems, cause and effect).',
  },
  remember: 'Remember: the weather word is the subject — ya- for al-maṭar, ta- for al-shams, al-riyāḥ, al-thulūj, darajat al-ḥarāra.',
});

module.exports = { meta, slides };
