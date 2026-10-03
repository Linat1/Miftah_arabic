'use strict';
/* D5-L07 · Holidays and Travel — Past and Future — website: Pathways › Development › D5 › D5-L07 (hollow travel verbs زُرْتُ · أَقَمْتُ · عُدْنَا, fixed prepositions
 * سَافَرَ إِلَى · أَقَامَ فِي · اسْتَمْتَعَ بِـ, the future with سَـ / سَوْفَ, evaluation كَانَتْ مِنْ أَجْمَلِ الرِّحْلَاتِ).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing and visual game used as published; six quiz distractors
 * that differed only in vowels replaced; English added to the patterns and speaking model. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D5')({
  n: 7, fileTitle: 'Holidays_and_Travel_Past_and_Future', chip: 'Vocabulary',
  title: 'Holidays and Travel — Past and Future', arabic: 'الإِجَازَاتُ وَالسَّفَرُ — المَاضِي وَالمُسْتَقْبَلُ',
  focus: 'Tell the story of a trip — where you went, stayed and what you visited (سَافَرْتُ إِلَى · أَقَمْتُ فِي · زُرْتُ) — judge it (كَانَتْ مِنْ أَجْمَلِ الرِّحْلَاتِ) and switch cleanly to the future (سَأَزُورُ · سَوْفَ نَحْجِزُ).',
  icon: 'FaSuitcaseRolling', iconSet: 'fa6',
});

const site = D.site('D5-L07');
const swap = {
  0: [null, null, 'زَوَرْتُ'], 1: [null, null, 'أَقْوَمْنَا'], 3: [null, 'حَجَزْنَا عَلَى التَّذَاكِرِ قَبْلَ شَهْرٍ.', null],
  4: [null, null, 'سَوْفَ زُرْتُ هٰذِهِ المَدِينَةَ مَرَّةً أُخْرَى.'], 5: [null, 'كَانَتْ أَجْمَلَ مِنَ الرِّحْلَاتِ.', 'كَانَتْ مِنْ جَمِيلِ الرِّحْلَاتِ.'], 7: [null, 'لِكَيْ', null],
};
const quiz = site.grammar.quiz.map((it, i) => (swap[i] ? { ...it, options: it.options.map((o, k) => swap[i][k] || o) } : it));
const vf = (i, she) => ({ tag: 'I · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D5-L07', {
  support: `• Core: travel words + six past sentences with the right preposition (سَافَرْتُ إِلَى · أَقَمْتُ فِي). Develop: hollow verbs (زُرْتُ · أَقَمْتُ · عُدْنَا), an evaluation and ONE future sentence with سَـ. Stretch: the website 90–100-word account with a past habit (كُنَّا نَمْشِي …) and a clean switch to the future.
• Exam skill: “one account, two tenses” — past narrative, then future plan. Examiners reward the switch only when each tense stays where it belongs.
• Builds on D5-L03 / L04 (past endings, hollow verbs), D5-L05 (كَانَ + habit). Travel / Umrah / visiting family abroad all work as topics.`,
  teach: 'Hollow travel verbs, fixed prepositions, then the future.',
  wedo: 'Sort past / future / evaluation, fix tense slips, then last summer’s trip.',
  next: { nextCode: 'D5-L08', nextTitle: 'Reading — Leisure, Sport and Past Experience Texts', nextAr: 'القِرَاءَةُ — نُصُوصُ التَّرْفِيهِ وَالرِّيَاضَةِ' },
  objectives: ['Narrate a trip with travel verbs and their prepositions.', 'Shorten hollow travel verbs (زَارَ → زُرْتُ · أَقَامَ → أَقَمْتُ).', 'Evaluate with كَانَ مِنْ أَجْمَلِ … / رِحْلَةٌ لَا تُنْسَى.', 'Switch to the future with سَـ / سَوْفَ.'],
  rulesAr: 'سَرْدُ المَاضِي وَخُطَطُ المُسْتَقْبَلِ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does سَافَرَ إِلَى mean?', ['he travelled to', 'he visited', 'he stayed in'], 'Prepared at home (D5-L06).'),
      q('What does الفُنْدُقُ mean?', ['the hotel', 'the airport', 'the station'], 'Prepared at home (D5-L06).'),
      q('What does زُرْتُ mean?', ['I visited', 'I returned', 'I booked'], 'Prepared at home (D5-L06).'),
      q('Choose the “we” form of قَالَ.', ['قُلْنَا', 'قَالْنَا', 'قَوَلْنَا'], 'D5-L04: hollow verbs.'),
      q('Complete: تُعَبِّرُ المُوسِيقَى ___ المَشَاعِرِ.', ['عَنِ', 'فِي', 'إِلَى'], 'D5-L06.'),
    ],
    keyIdea: { text: 'Past first, then the future — and keep each tense in its place.', ar: '{k|زُرْتُ} المَدِينَةَ العَامَ المَاضِيَ، وَ{e|سَأَعُودُ} إِلَيْهَا' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D5-L06. Question 4 retrieves the D5-L04 hollow-verb rule (زَارَ works the same way); question 5 retrieves D5-L06.',
  },
  routes: {
    core: ['I can say where I travelled and stayed.', 'I can use 10 travel words.'],
    develop: ['I can use زُرْتُ · أَقَمْتُ · عُدْنَا.', 'I can add one future plan with سَـ.'],
    stretch: ['I can evaluate the trip (كَانَتْ مِنْ أَجْمَلِ …).', 'I can switch cleanly between past and future.'],
  },
  bridge: [
    { ar: 'سَفَرٌ / مُسَافِرٌ', urdu: 'سفر / مسافر', tr: 'safar / musāfir', en: 'travel / traveller' },
    { ar: 'زِيَارَةٌ', urdu: 'زیارت', tr: 'ziyārat', en: 'Urdu: visit to a holy place · Arabic: any visit' },
    { ar: 'مَحَطَّةٌ', urdu: 'اسٹیشن', tr: 'station', en: 'station' },
    { ar: 'رِحْلَةٌ', urdu: 'رحلت', tr: 'riḥlat', en: 'Urdu: passing away · Arabic: a trip' },
    { ar: 'تَذْكِرَةٌ', urdu: 'تذکرہ / ٹکٹ', tr: 'tazkira', en: 'Urdu تذکرہ: mention · Arabic: a ticket' },
  ],
  bridgeNotes: 'URDU BRIDGE: سفر، مسافر are shared. CAREFUL: Urdu زیارت often means visiting a shrine; Arabic زِيَارَةٌ is any visit (زُرْتُ صَدِيقِي). Urdu رحلت = death (a polite word), but Arabic رِحْلَةٌ = a trip! Urdu تذکرہ = mention / biography; Arabic تَذْكِرَةٌ = a ticket.',
  core: ['سَافَرَ إِلَى', 'زَارَ / زُرْتُ', 'أَقَامَ فِي / أَقَمْتُ فِي', 'حَجَزَ', 'اسْتَمْتَعَ بِـ', 'عَادَ / عُدْتُ', 'المَطَارُ', 'الفُنْدُقُ', 'الشَّاطِئُ', 'رِحْلَةٌ', 'سَأَزُورُ مَرَّةً أُخْرَى', 'رِحْلَةٌ لَا تُنْسَى'],
  forms: {
    'سَافَرَ إِلَى': vf('سَافَرْتُ', 'سَافَرَتْ'), 'زَارَ / زُرْتُ': vf('زُرْتُ', 'زَارَتْ'), 'أَقَامَ فِي / أَقَمْتُ فِي': vf('أَقَمْتُ', 'أَقَامَتْ'),
    'حَجَزَ': vf('حَجَزْتُ', 'حَجَزَتْ'), 'اسْتَمْتَعَ بِـ': vf('اسْتَمْتَعْتُ', 'اسْتَمْتَعَتْ'), 'عَادَ / عُدْتُ': vf('عُدْتُ', 'عَادَتْ'), 'رَكِبَ': vf('رَكِبْتُ', 'رَكِبَتْ'),
    'الفُنْدُقُ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'الفَنَادِقُ' }] }, 'رِحْلَةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'رِحْلَاتٌ' }] }, 'تَذْكِرَةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'تَذَاكِرُ' }] },
  },
  vocabNotes: {
    0: 'Travel verbs in the past: cards show I / she. HOLLOW verbs keep the long ā for he / she (زَارَ · زَارَتْ) but shorten it for I / we (زُرْتُ · زُرْنَا).',
    1: 'Places and travel items. Plurals on the cards where useful (فَنَادِقُ · تَذَاكِرُ).',
    2: 'Evaluating and looking ahead: سَـ is attached to the verb, سَوْفَ is a separate word.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · hollow travel verbs and prepositions (website rules 1–2)', title: 'Where did you go, stay and visit?', ar: 'أَيْنَ سَافَرْتَ؟',
      cols: [{ label: 'he', w: 2.2, size: 24 }, { label: 'I / we', w: 2.6, size: 24 }, { label: 'Example (website)', w: 7.53, size: 22 }],
      rows: [
        { core: true, cells: ['سَافَرَ إِلَى', 'سَافَرْتُ · سَافَرْنَا', P('سَافَرْنَا {k|إِلَى} مَدِينَةٍ سَاحِلِيَّةٍ.', 'We travelled to a coastal city.')] },
        { core: true, cells: ['زَارَ', '{e|زُرْتُ} · {e|زُرْنَا}', P('زُرْنَا المَعَالِمَ السِّيَاحِيَّةَ.', 'We visited the tourist sights.')] },
        { core: true, cells: ['أَقَامَ فِي', '{e|أَقَمْتُ} · {e|أَقَمْنَا}', P('أَقَمْنَا {k|فِي} فُنْدُقٍ صَغِيرٍ.', 'We stayed in a small hotel.')] },
        { cells: ['عَادَ', '{e|عُدْتُ} · {e|عُدْنَا}', P('عُدْنَا إِلَى البَيْتِ مُتْعَبِينَ.', 'We returned home tired.')] },
        { cells: ['اسْتَمْتَعَ بِـ', 'اسْتَمْتَعْتُ', P('اسْتَمْتَعْتُ {k|بِالرِّحْلَةِ} كَثِيرًا.', 'I really enjoyed the trip.')] },
      ],
      ltr: true,
      foot: 'Hollow verbs: zāra → zur-tu, aqāma → aqam-tu, ʿāda → ʿud-nā (the long ā shortens, as with qāla → qul-nā).',
      notes: `GRAMMAR PART 1 — website rules “Hollow verbs in the past” (before a consonant suffix the long middle vowel shortens; the bare هُوَ form keeps the long vowel) and “Fixed prepositions on travel verbs” (each verb keeps its own preposition; the noun after it is genitive). Website teaching point: “the same rule you met with قَالَ in Lesson 4.”
Website mistakes: زَارْتُ ✗ → زُرْتُ · اسْتَمْتَعْتُ الرِّحْلَةَ ✗ → بِالرِّحْلَةِ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · judge it, then look ahead (website rules 3–4) · Develop / Stretch', title: 'How was it — and what next?', ar: 'التَّقْيِيمُ وَالمُسْتَقْبَلُ',
      cards: [
        { chip: 'EVALUATE · DEVELOP', color: '6B4C9A', head: 'كَانَتْ مِنْ أَجْمَلِ …', big: 'كَانَتْ مِنْ أَجْمَلِ الرِّحْلَاتِ.', en: 'It was one of the most beautiful trips.', clue: 'min + superlative + plural.' },
        { chip: 'FUTURE · CORE', color: '1E6B52', head: 'سَأَزُورُ', big: 'سَأَزُورُ المَدِينَةَ مَرَّةً أُخْرَى.', en: 'I will visit the city again.', clue: 'sa- is attached.' },
        { chip: 'FUTURE · STRETCH', color: '1D5FBF', head: 'سَوْفَ · أَتَمَنَّى أَنْ', big: 'سَوْفَ نَحْجِزُ مُبَكِّرًا، وَأَتَمَنَّى أَنْ أَعُودَ.', en: 'We will book early, and I hope to return.', clue: 'an + -a.' },
      ],
      error: { text: 'Website mistake: sa- goes on a PRESENT verb only.', pairs: [['سَأَزُورُ المَدِينَةَ غَدًا.', 'سَزُرْتُ المَدِينَةَ غَدًا.']] },
      notes: `GRAMMAR PART 2 — website rules “Marking the future” (سَـ attaches directly; سَوْفَ stands separately and is slightly more emphatic) and “Evaluating the trip” (مِنْ + a superlative introduces the group; the noun after it is genitive). Website teaching point: “One account, two tenses.”
Hope to return to Makkah / Madinah is a natural Stretch sentence: أَتَمَنَّى أَنْ أَزُورَ المَدِينَةَ المُنَوَّرَةَ مَرَّةً أُخْرَى.`,
    },
  ],
  quick: [0, 2, 4, 6],
  rest: [1, 3, 5, 7],
  ido: {
    title: 'Watch me tell the story of a trip',
    steps: [
      { head: 'Go', ar: 'سَافَرْنَا {k|إِلَى} مَدِينَةٍ سَاحِلِيَّةٍ', think: 'safara + ilā.' },
      { head: 'Stay', ar: '{e|أَقَمْنَا} فِي فُنْدُقٍ', think: 'Hollow: aqam-nā.' },
      { head: 'Judge', ar: 'كَانَتْ {w|مِنْ أَجْمَلِ} الرِّحْلَاتِ', think: 'One of the best.' },
      { head: 'Next', ar: '{e|سَأَزُورُ} تِلْكَ المَدِينَةَ', think: 'Switch to future.' },
    ],
    legend: ['k', 'e', 'w'], legendLabels: { k: 'PREPOSITION', e: 'VERB FORM', w: 'EVALUATION' },
    model: 'فِي الصَّيْفِ المَاضِي سَافَرْنَا {k|إِلَى} مَدِينَةٍ سَاحِلِيَّةٍ. حَجَزْنَا التَّذَاكِرَ قَبْلَ شَهْرٍ، ثُمَّ رَكِبْنَا القِطَارَ. {e|أَقَمْنَا} {k|فِي} فُنْدُقٍ صَغِيرٍ، وَ{e|زُرْنَا} المَعَالِمَ السِّيَاحِيَّةَ. كَانَتْ {w|مِنْ أَجْمَلِ} الرِّحْلَاتِ. فِي المُسْتَقْبَلِ {e|سَأَزُورُ} تِلْكَ المَدِينَةَ مَرَّةً أُخْرَى.',
    modelEn: 'Last summer we travelled to a coastal city. We booked the tickets a month before, then took the train. We stayed in a small hotel and visited the tourist sights. It was one of the most beautiful trips. In the future I will visit that city again.',
    notes: 'I DO (3 min) — built from the website listening. Think aloud: “Which preposition does this verb need? Is it hollow? Past or future here?” Students copy and draw a line where the tense switches.',
  },
  patternEn: ['I visited the tourist sights', 'we stayed in a small hotel', 'I will visit again'],
  game: {
    title: 'Where did I go? Match the picture',
    pick: [0, 3, 4],
    en: ['I spent the holiday on the beach.', 'I travelled by plane.', 'I stayed in a hotel.'],
    icons: [[['fa6', 'FaUmbrellaBeach', 'C77700'], ['fa6', 'FaSun', 'E0A100']], [['fa6', 'FaPlane', '1D5FBF'], ['fa6', 'FaSuitcaseRolling', '5A6472']], [['fa6', 'FaHotel', '6B4C9A'], ['fa6', 'FaBed', 'C0386B']]],
    labels: ['beach and sun', 'plane and suitcase', 'hotel and bed'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Then switch each to the future: سَأَقْضِي العُطْلَةَ … · سَأُسَافِرُ بِالطَّائِرَةِ · سَأُقِيمُ فِي فُنْدُقٍ. Other website cards: mountains, a new city, tourist places.',
  },
  sorterNotes: 'Then build a three-sentence account aloud: one past, one evaluation, one future.',
  patch: {
    grammar: { ...site.grammar, quiz },
    speaking: {
      model: [
        ['A', 'أَيْنَ سَافَرْتَ فِي الإِجَازَةِ المَاضِيَةِ؟', 'Where did you travel last holiday?'],
        ['B', 'سَافَرْتُ إِلَى مَدِينَةٍ سَاحِلِيَّةٍ، وَأَقَمْتُ فِي فُنْدُقٍ صَغِيرٍ.', 'I travelled to a coastal city and stayed in a small hotel.'],
        ['A', 'وَبِمَاذَا اسْتَمْتَعْتَ هُنَاكَ؟', 'And what did you enjoy there?'],
        ['B', 'اسْتَمْتَعْتُ بِالشَّاطِئِ وَالسُّوقِ القَدِيمِ، وَفِي المُسْتَقْبَلِ سَأَزُورُهَا مَرَّةً أُخْرَى.', 'I enjoyed the beach and the old market, and in the future I will visit it again.'],
      ],
    },
  },
  patchNote: 'six quiz distractors that differed only in vowels replaced, and English added to the patterns and speaking model.',
  hints: ['zāra + -tu: shorten!', 'istamtaʿa + which preposition?', 'sa- + past or present?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 5.\nPast first … then “fī al-mustaqbal”.',
  listenRoutes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 5 — and note where the speaker switches to the future.',
  gloss: [
    ['فِي الصَّيْفِ المَاضِي سَافَرْنَا إِلَى مَدِينَةٍ سَاحِلِيَّةٍ. حَجَزْنَا التَّذَاكِرَ قَبْلَ شَهْرٍ، ثُمَّ رَكِبْنَا القِطَارَ مِنَ المَحَطَّةِ.', 'Last summer we travelled to a coastal city. We booked the tickets a month before, then took the train from the station.'],
    ['أَقَمْنَا فِي فُنْدُقٍ صَغِيرٍ قَرِيبٍ مِنَ الشَّاطِئِ. فِي اليَوْمِ الأَوَّلِ زُرْنَا المَعَالِمَ السِّيَاحِيَّةَ وَاكْتَشَفْنَا سُوقًا قَدِيمًا جَمِيلًا.', 'We stayed in a small hotel near the beach. On the first day we visited the sights and discovered a beautiful old market.'],
    ['اسْتَمْتَعْتُ بِالرِّحْلَةِ كَثِيرًا، وَكَانَتْ مِنْ أَجْمَلِ الرِّحْلَاتِ.', 'I really enjoyed the trip, and it was one of the most beautiful trips.'],
    ['لِلْأَسَفِ نَسِيتُ حَقِيبَةَ السَّفَرِ فِي المَحَطَّةِ، وَلٰكِنْ لِحُسْنِ الحَظِّ وَجَدْنَاهَا.', 'Unfortunately I forgot my suitcase at the station, but luckily we found it.'],
    ['فِي المُسْتَقْبَلِ سَأَزُورُ تِلْكَ المَدِينَةَ مَرَّةً أُخْرَى، وَسَوْفَ نَحْجِزُ مُبَكِّرًا.', 'In the future I will visit that city again, and we will book early.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'أَيْنَ سَافَرْتَ فِي الإِجَازَةِ المَاضِيَةِ؟ وَأَيْنَ أَقَمْتَ؟' },
      { route: 'develop', ar: 'مَاذَا زُرْتَ هُنَاكَ؟ وَبِمَاذَا اسْتَمْتَعْتَ؟' },
      { route: 'stretch', ar: 'أَيْنَ سَتُسَافِرُ فِي المُسْتَقْبَلِ؟ وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'سَافَرْتُ إِلَى ______ ، وَأَقَمْتُ فِي ______ .' },
      { route: 'develop', ar: 'زُرْتُ ______ ، وَاسْتَمْتَعْتُ بِـ ______ .' },
      { route: 'stretch', ar: 'فِي المُسْتَقْبَلِ سَأُسَافِرُ إِلَى ______ لِأَنَّ ______ .' },
    ],
    modelEn: ['Where did you travel last holiday?', 'I travelled to a coastal city and stayed in a small hotel.'],
    notes: 'Website prompts and model (past question → hollow verb + preposition → follow-up with بِـ → evaluation and future switch). To a girl: سَافَرْتِ · أَقَمْتِ · زُرْتِ · اسْتَمْتَعْتِ · سَتُسَافِرِينَ.',
  },
  write: {
    core: { amount: '6 sentences', how: 'Six past sentences about a trip, each travel verb with its preposition.' },
    develop: { amount: '70–90 words', how: 'Add an evaluation and one future sentence with سَـ.' },
    stretch: { amount: '90–100 words', how: 'Website task: booked · stayed · visited · enjoyed · evaluation · future plan, with a past habit.' },
  },
  frames: {
    core: [
      { en: 'Last summer I travelled to …', ar: 'فِي الصَّيْفِ المَاضِي سَافَرْتُ إِلَى ______ .' },
      { en: 'We booked … a month before.', ar: 'حَجَزْنَا ______ قَبْلَ شَهْرٍ.' },
      { en: 'We stayed in …', ar: 'أَقَمْنَا فِي ______ .' },
      { en: 'I visited …', ar: 'زُرْتُ ______ .' },
    ],
    develop: [
      { en: 'I really enjoyed …', ar: 'اسْتَمْتَعْتُ بِـ ______ كَثِيرًا.' },
      { en: 'It was one of the most beautiful …', ar: 'كَانَتْ مِنْ أَجْمَلِ ______ .' },
      { en: 'In the future I will …', ar: 'فِي المُسْتَقْبَلِ سَـ ______ .' },
      { en: 'I hope to …', ar: 'أَتَمَنَّى أَنْ ______ .' },
    ],
    bank: ['سَافَرْتُ إِلَى', 'زُرْتُ', 'أَقَمْتُ فِي', 'حَجَزْنَا', 'رَكِبْنَا', 'اسْتَمْتَعْتُ بِـ', 'عُدْنَا', 'كَانَتْ مِنْ أَجْمَلِ', 'رِحْلَةٌ لَا تُنْسَى', 'سَأَزُورُ', 'سَوْفَ', 'أَتَمَنَّى أَنْ'],
  },
  stretch: [
    ['فِي كُلِّ صَبَاحٍ كُنَّا نَمْشِي عَلَى الشَّاطِئِ', 'every morning we used to walk on the beach'],
    ['اكْتَشَفْنَا سُوقًا قَدِيمًا', 'we discovered an old market'],
    ['أَنْصَحُ بِزِيَارَتِهَا فِي الرَّبِيعِ', 'I recommend visiting it in spring'],
    ['سَوْفَ أُقِيمُ هُنَاكَ أُسْبُوعَيْنِ', 'I will stay there for two weeks'],
    ['كَانَتْ رِحْلَةً لَا تُنْسَى', 'it was an unforgettable trip'],
  ],
  modelEn: 'Last summer I travelled with my family to a beautiful coastal city. We booked the tickets and the hotel a month before, then took the train from the station. We stayed in a simple hotel near the beach. Every morning we used to walk on the beach, and in the evening we visited the sights and discovered an old market. I really enjoyed the trip, and it was one of the most beautiful trips. Unfortunately I forgot my bag on the train, but luckily I found it. In the future I will return to that city, and I will stay there for two weeks.',
  find: ['two hollow verbs (أَقَمْنَا · زُرْنَا)', 'three verb + preposition pairs', 'an evaluation', 'a future switch (سَـ / سَوْفَ)'],
  modelNotes: 'Website writing model. Evidence: سَافَرْتُ إِلَى · حَجَزْنَا · رَكِبْنَا · أَقَمْنَا فِي · كُنَّا نَمْشِي (habit) · زُرْنَا · اكْتَشَفْنَا · اسْتَمْتَعْتُ بِـ · كَانَتْ مِنْ أَجْمَلِ الرِّحْلَاتِ · سَأَعُودُ · سَوْفَ أُقِيمُ.',
  selfCheck: [
    { route: 'core', text: 'Each travel verb has its preposition (إِلَى · فِي · بِـ).' },
    { route: 'core', text: 'My past verbs have the right ending.' },
    { route: 'develop', text: 'My hollow verbs are shortened (زُرْتُ · أَقَمْتُ).' },
    { route: 'develop', text: 'I added an evaluation.' },
    { route: 'stretch', text: 'I switched cleanly to the future with سَـ / سَوْفَ.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['الرَّبِيعِ المَاضِي', 'last spring'], ['صَدِيقَيْنِ', 'two friends'], ['عَبْرَ الإِنْتِرْنِتْ', 'online'], ['نَزَلْنَا فِي', 'we stayed in'], ['غُرْفَةٍ بَسِيطَةٍ', 'a simple room'],
    ['بَعِيدًا قَلِيلًا', 'a little far'], ['رَخِيصًا', 'cheap'], ['كُنَّا نَتَنَاوَلُ', 'we used to have'], ['الجَوِّ الهَادِئِ', 'the calm atmosphere'], ['أَنْصَحُ بِـ', 'I recommend'],
  ],
  prep: {
    words: [['سِيرَةٌ ذَاتِيَّةٌ', 'a biography, life story', 'pl. سِيَرٌ'], ['مُرَاجَعَةٌ', 'a review', 'pl. مُرَاجَعَاتٌ'], ['تَسَلْسُلُ الأَحْدَاثِ', 'the order of events', '—'], ['دَلِيلٌ مِنَ النَّصِّ', 'evidence from the text', '—'], ['يَسْتَنْتِجُ', 'he deduces', 'أَسْتَنْتِجُ I deduce']],
    questionEn: 'Think of a famous athlete or traveller. Note three things that happened in their life, in order.',
    questionAr: 'أَوَّلًا … ثُمَّ … فِي النِّهَايَةِ …',
    homework: {
      core: 'Learn 12 travel words; write six past sentences from the frames.',
      develop: 'A 70–90-word trip account with an evaluation and one future sentence.',
      stretch: 'Website writing task: 90–100 words, past habit + future switch.',
    },
    wordsSource: 'The five words come from the website D5-L08 vocabulary (reading text types and strategy).',
  },
  remember: 'Remember: zur-tu · aqam-tu · ʿud-nā; safara ilā · aqāma fī · istamtaʿa bi- — then switch cleanly: سَأَزُورُ مَرَّةً أُخْرَى.',
});

module.exports = { meta, slides };
