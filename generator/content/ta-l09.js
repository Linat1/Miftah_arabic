'use strict';
/* AT-A-L09 · Travel and Transport for Everyday Journeys — website: Advanced Topics › Topic A › Lesson 9 (lesson engine F6-L03 “Transport: Types and How We Travel”).
   Topic layer: timetables (departure / arrival times from AT-A-L02) and comparison (أَسْرَعُ مِنْ …) for the “journey planner” challenge.
   Preparation points to AT-A-L10 (engine D1-L10): the five listening-strategy words from the website D1-L10 vocabulary. */
const T = require('./topic-common');
const D = require('./d-common');
const { q } = D;

const meta = T.meta('A', 9, { fileTitle: 'Travel_and_Transport_for_Everyday_Journeys', chip: 'Travel and Transport', icon: 'FaBus' });
const nx = T.nextOf('A', 9);

const by = (sing, pl, prep, g = 'f.') => ({ tag: `${g} · pl`, forms: [{ l: 'pl.', ar: pl }, { l: 'by / on', ar: prep }] });
const forms = {
  'حَافِلَةٌ': by('حَافِلَةٌ', 'حَافِلَاتٌ', 'بِالحَافِلَةِ'),
  'قِطَارٌ': by('قِطَارٌ', 'قِطَارَاتٌ', 'بِالقِطَارِ', 'm.'),
  'سَيَّارَةٌ': by('سَيَّارَةٌ', 'سَيَّارَاتٌ', 'بِالسَّيَّارَةِ'),
  'سَيَّارَةُ أُجْرَةٍ': by('', 'سَيَّارَاتُ أُجْرَةٍ', 'بِسَيَّارَةِ أُجْرَةٍ'),
  'دَرَّاجَةٌ': by('دَرَّاجَةٌ', 'دَرَّاجَاتٌ', 'عَلَى الدَّرَّاجَةِ'),
  'دَرَّاجَةٌ نَارِيَّةٌ': by('', 'دَرَّاجَاتٌ نَارِيَّةٌ', 'عَلَى الدَّرَّاجَةِ النَّارِيَّةِ'),
  'طَائِرَةٌ': by('طَائِرَةٌ', 'طَائِرَاتٌ', 'بِالطَّائِرَةِ'),
  'سَفِينَةٌ': by('سَفِينَةٌ', 'سُفُنٌ', 'بِالسَّفِينَةِ'),
  'رَاكِبٌ / رَاكِبَةٌ': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'رُكَّابٌ' }, { l: 'f.', ar: 'رَاكِبَةٌ' }, { l: 'm.', ar: 'رَاكِبٌ' }] },
  'سَائِقٌ': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'سَائِقُونَ' }, { l: 'f.', ar: 'سَائِقَةٌ' }, { l: 'm.', ar: 'سَائِقٌ' }] },
};

const raw = D.devLesson('F6-L03', {
  siteRef: 'Advanced Topics › Topic A › Lesson 9 (AT-A-L09), lesson engine Pathways › Foundation › F6 › F6-L03',
  support: `• Core: 6 transport words + “I go to … by …” with بِـ, عَلَى or مَشْيًا (the website’s one big idea). Develop: ask a boy / a girl (تَذْهَبُ / تَذْهَبِينَ), give a reason (لِأَنَّهُ سَرِيعٌ), use departure / arrival times. Stretch (Topic A): compare two options (أَسْرَعُ مِنْ، أَرْخَصُ مِنْ) and plan a route from a timetable.
• Three patterns only: بِالحَافِلَةِ (motorised) · عَلَى الدَّرَّاجَةِ (ride on) · مَشْيًا (on foot, no preposition).
• Links: AT-A-L01 (going to school), AT-A-L02 (clock times for the timetable), AT-A-L03 (frequency: كُلَّ يَوْمٍ، أَحْيَانًا).
• Urdu bridge: سفر، مسافر، سواری (not Arabic), ٹکٹ ← تَذْكِرَةٌ (not cognate), راستہ / طَرِيقٌ (طریقہ = method).`,
  teach: 'Transport words, then by / on / on foot, then asking a boy or a girl.',
  wedo: 'Picture match, sort by pattern, fix and listen.',
  next: nx,
  flexGroups: [1, 2],
  kwText: '31 travel words from the website in 3 groups. Core: public transport (12). Journey actions and stations / tickets are FLEX — they return in the challenge.',
  doNow: {
    questions: [
      q('What does قِطَارٌ mean?', ['train', 'bus', 'plane'], 'Prepared at home (AT-A-L08).'),
      q('What does مَشْيًا mean?', ['on foot', 'by car', 'by bike'], 'Prepared at home (AT-A-L08).'),
      q('Choose the advice.', ['يَجِبُ أَنْ تَسْتَرِيحَ.', 'يَجِبُ أَنْ تَسْتَرِيحُ.', 'يَجِبُ تَسْتَرِيحَ.'], 'AT-A-L08: -a after “an”.'),
      q('“Drink!” to a girl =', ['اِشْرَبِي', 'اِشْرَبْ', 'اِشْرَبُوا'], 'AT-A-L08: imperative -ī.'),
      q('السَّاعَةُ الثَّامِنَةُ إِلَّا الرُّبْعَ = ?', ['7:45', '8:15', '8:45'], 'AT-A-L02: quarter to.'),
    ],
    keyIdea: { text: 'By bus / train / car → bi-. On a bike → ‘alā. On foot → mashyan (no little word).', ar: 'أَذْهَبُ {k|بِـ}الحَافِلَةِ · {k|عَلَى} الدَّرَّاجَةِ · {k|مَشْيًا}' },
    retrieves: 'Questions 1–2 test two of the five transport words prepared at home at the end of AT-A-L08. Questions 3–5 retrieve AT-A-L08 (advice, imperative) and AT-A-L02 (time — needed for today’s timetable).',
  },
  routes: {
    core: ['I can name 6 kinds of transport.', 'I can say how I go to school (by / on / on foot).'],
    develop: ['I can ask a boy or a girl how they travel.', 'I can give a reason and a time.'],
    stretch: ['I can compare two ways to travel (faster than …).', 'I can plan and explain a journey from a timetable.'],
  },
  bridge: [
    { ar: 'سَفَرٌ', urdu: 'سفر', tr: 'safar', en: 'travel, a journey' },
    { ar: 'مُسَافِرٌ', urdu: 'مسافر', tr: 'musāfir', en: 'a traveller' },
    { ar: 'طَرِيقٌ', urdu: 'طریقہ', tr: 'ṭarīq', en: 'route, way (Urdu: method)' },
    { ar: 'رِحْلَةٌ', urdu: 'رحلت', tr: 'riḥla', en: 'journey (Urdu: passing away!)' },
    { ar: 'تَذْكِرَةٌ', urdu: 'ٹکٹ', tr: 'tadhkira', en: 'ticket (not cognate)' },
  ],
  bridgeNotes: 'URDU BRIDGE: سفر and مسافر are identical. CAREFUL: طریقہ in Urdu is “method”, Arabic طَرِيقٌ is a road / route; رحلت in Urdu means death — Arabic رِحْلَةٌ is simply a trip. Urdu تذکرہ is a mention / biography; Arabic تَذْكِرَةٌ is a ticket.',
  core: ['حَافِلَةٌ', 'قِطَارٌ', 'سَيَّارَةٌ', 'سَيَّارَةُ أُجْرَةٍ', 'دَرَّاجَةٌ', 'طَائِرَةٌ'],
  forms,
  vocabNotes: {
    0: 'Every card shows the plural and the travel phrase (by … / on …). Most take بِـ; bicycles and motorbikes take عَلَى.',
    1: 'FLEX: journey verbs. يَسْتَقِلُّ (takes / boards) and يَقُودُ (drives) are in the reading.',
    2: 'FLEX: stations and tickets — needed for the journey planner (departure / arrival time).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · three ways to travel (website rules + table)', title: 'By bus, on a bike, on foot', ar: 'بِـ · عَلَى · مَشْيًا',
      cols: [{ label: 'Pattern', w: 2.0, size: 24 }, { label: 'I go … / to a boy', w: 4.0, size: 24 }, { label: 'She goes … / to a girl', w: 4.0, size: 24 }, { label: 'Meaning', w: 2.33 }],
      rows: [
        { core: true, cells: [{ ar: '{k|بِـ}' }, { ar: 'أَذْهَبُ {k|بِـ}الحَافِلَةِ' }, { ar: '{e|تَ}ذْهَبُ {k|بِـ}القِطَارِ' }, 'by'] },
        { core: true, cells: [{ ar: '{k|عَلَى}' }, { ar: 'أَذْهَبُ {k|عَلَى} الدَّرَّاجَةِ' }, { ar: '{e|تَ}ذْهَبُ {k|عَلَى} الدَّرَّاجَةِ' }, 'on'] },
        { core: true, cells: [{ ar: '{k|مَشْيًا}' }, { ar: 'أَذْهَبُ {k|مَشْيًا}' }, { ar: '{e|تَ}ذْهَبُ {k|مَشْيًا}' }, 'on foot'] },
        { cells: [{ ar: 'كَيْفَ …؟' }, { ar: 'كَيْفَ تَذْهَبُ؟' }, { ar: 'كَيْفَ تَذْهَبِ{e|ينَ}؟' }, 'how? (to m. · to f.)'] },
      ],
      foot: 'bi + al-ḥāfila = bil-ḥāfila. Never bi before mashyan.',
      notes: `GRAMMAR PART 1 — website rules “Travel by most motorised transport” (بِـ), “Ride on a bicycle or motorbike” (عَلَى), “Say on foot” (مَشْيًا, no preposition) and “Ask and answer how someone travels” (تَذْهَبُ / تَذْهَبِينَ), with the website table.
Website common error: أُسَافِرُ عَلَى الحَافِلَةِ ✗ → أُسَافِرُ بِالحَافِلَةِ ✓ · أَذْهَبُ بِمَشْيًا ✗ → أَذْهَبُ مَشْيًا ✓.
Quick-fire: say a vehicle; students type بِـ / عَلَى / مَشْيًا.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · why, when and which is better (Topic A: time and comparison)', title: 'Because … at … faster than …', ar: 'لِأَنَّ · فِي السَّاعَةِ · أَسْرَعُ مِنْ',
      cards: [
        { chip: 'WHY · CORE', color: '1E7B4F', head: 'لِأَنَّهُ / لِأَنَّهَا', big: 'أُفَضِّلُ القِطَارَ لِأَنَّهُ سَرِيعٌ.', en: 'I prefer the train because it is fast.', clue: 'Train m. → li’annahu.' },
        { chip: 'WHEN · DEVELOP', color: '1D5FBF', head: 'يُغَادِرُ · يَصِلُ', big: 'يُغَادِرُ القِطَارُ فِي السَّاعَةِ الثَّامِنَةِ.', en: 'The train leaves at eight o’clock.', clue: 'Time from AT-A-L02.' },
        { chip: 'COMPARE · STRETCH', color: 'B83227', head: 'أَفْعَلُ مِنْ', big: 'القِطَارُ أَسْرَعُ مِنَ الحَافِلَةِ.', en: 'The train is faster than the bus.', clue: 'Same form for m. and f.' },
      ],
      error: { text: 'The reason pronoun matches the vehicle: the car is feminine.', pairs: [['أُفَضِّلُ السَّيَّارَةَ لِأَنَّهَا مُرِيحَةٌ.', 'أُفَضِّلُ السَّيَّارَةَ لِأَنَّهُ مُرِيحٌ.']] },
      notes: `GRAMMAR PART 2 — the Topic A page lists “travel verbs; prepositions; time; comparison; directions” for this lesson. The reason pattern is from the website listening (يُفَضِّلُ الأَبُ القِطَارَ لِأَنَّهُ سَرِيعٌ … الأُمُّ تُفَضِّلُ السَّيَّارَةَ لِأَنَّهَا مُرِيحَةٌ). Departure / arrival come from the website vocabulary (مَوْعِدُ المُغَادَرَةِ / مَوْعِدُ الوُصُولِ).
Comparatives (teacher layer, Stretch): أَسْرَعُ (faster), أَبْطَأُ (slower), أَرْخَصُ (cheaper), أَغْلَى (more expensive), أَقْرَبُ (nearer), أَرْيَحُ (more comfortable) + مِنْ. The comparative does not change for feminine: السَّيَّارَةُ أَسْرَعُ مِنَ الدَّرَّاجَةِ.
Directions (FLEX): اِذْهَبْ مُسْتَقِيمًا · اِنْعَطِفْ يَمِينًا / يَسَارًا — imperatives from AT-A-L08.`,
    },
  ],
  quick: [0, 1, 2, 4],
  rest: [3, 5, 6, 7],
  ido: {
    title: 'Watch me explain a journey',
    steps: [
      { head: 'How', ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ {k|بِـ}الحَافِلَةِ.', think: 'Bus → bi-.' },
      { head: 'When', ar: 'تُغَادِرُ الحَافِلَةُ فِي السَّاعَةِ السَّابِعَةِ وَالنِّصْفِ.', think: 'Bus is f. → tughādiru.' },
      { head: 'Someone else', ar: 'أَمَّا أَخِي فَيَذْهَبُ {k|عَلَى} الدَّرَّاجَةِ.', think: 'Bike → ‘alā.' },
      { head: 'Compare', ar: 'الحَافِلَةُ {p|أَسْرَعُ مِنَ} الدَّرَّاجَةِ، وَلٰكِنَّ الدَّرَّاجَةَ أَرْخَصُ.', think: 'faster than … cheaper.' },
    ],
    legend: ['k', 'p'], legendLabels: { k: 'BY / ON', p: 'COMPARE' },
    model: 'أَذْهَبُ إِلَى المَدْرَسَةِ {k|بِـ}الحَافِلَةِ لِأَنَّ بَيْتِي بَعِيدٌ. تُغَادِرُ الحَافِلَةُ فِي السَّاعَةِ السَّابِعَةِ وَالنِّصْفِ. أَمَّا أَخِي فَيَذْهَبُ {k|عَلَى} الدَّرَّاجَةِ، وَأُخْتِي تَذْهَبُ {k|مَشْيًا}. الحَافِلَةُ {p|أَسْرَعُ مِنَ} الدَّرَّاجَةِ، وَلٰكِنَّ الدَّرَّاجَةَ أَرْخَصُ.',
    modelEn: 'I go to school by bus because my house is far. The bus leaves at half past seven. As for my brother, he goes by bike, and my sister walks. The bus is faster than the bike, but the bike is cheaper.',
    notes: 'I DO (3 min) — website patterns (بِالحَافِلَةِ · عَلَى الدَّرَّاجَةِ · مَشْيًا) and the website model (لِأَنَّ بَيْتِي بَعِيدٌ · أَمَّا أُخْتِي فَـ…) with a Topic A time and a comparison added.',
  },
  game: {
    title: 'How do they travel? Match the picture',
    pick: [0, 2, 5],
    en: ['I go by bus.', 'I go by bicycle.', 'I go on foot.'],
    icons: [[['fa6', 'FaBus', 'C77700']], [['fa6', 'FaBicycle', '1E7B4F']], [['fa6', 'FaPersonWalking', '1D5FBF']]],
    labels: ['a bus', 'a bicycle', 'walking'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Note: the website game card says أَذْهَبُ بِالدَّرَّاجَةِ — also heard in everyday Arabic; the lesson rule teaches عَلَى الدَّرَّاجَةِ (both are understood). Other cards for homework: أُسَافِرُ بِالقِطَارِ، أَذْهَبُ بِالسَّيَّارَةِ، أُسَافِرُ بِالطَّائِرَةِ.',
  },
  sorterCats: ['بِـ · by', 'عَلَى · on', 'مَشْيًا · on foot'],
  sorterNotes: 'Then: make one “I go to … by …” sentence from each column.',
  hints: ['Train: which little word?', 'On foot: is a preposition needed?', 'Asking a girl: which ending?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 4.\nListen for: بِالحَافِلَةِ · عَلَى الدَّرَّاجَةِ · بِالقِطَارِ.',
  listenRoutes: 'Core: questions 1, 3 and 4. Develop / Stretch: all 5.',
  gloss: [
    ['تَذْهَبُ سَارَةُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ لِأَنَّ بَيْتَهَا بَعِيدٌ.', 'Sarah goes to school by bus because her house is far.'],
    ['أَمَّا أَخُوهَا عَلِيٌّ فَيَذْهَبُ عَلَى الدَّرَّاجَةِ', 'As for her brother Ali, he goes by bike'],
    ['لِأَنَّ المَدْرَسَةَ قَرِيبَةٌ مِنْ بَيْتِهِ.', 'because the school is near his house.'],
    ['فِي نِهَايَةِ الأُسْبُوعِ تُسَافِرُ الأُسْرَةُ إِلَى المَدِينَةِ بِالقِطَارِ.', 'At the weekend the family travels to the city by train.'],
    ['يُفَضِّلُ الأَبُ القِطَارَ لِأَنَّهُ سَرِيعٌ، وَلٰكِنَّ الأُمَّ تُفَضِّلُ السَّيَّارَةَ لِأَنَّهَا مُرِيحَةٌ.', 'The father prefers the train because it is fast, but the mother prefers the car because it is comfortable.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟' },
      { route: 'develop', ar: 'كَيْفَ تُسَافِرُ إِلَى مَدِينَةٍ أُخْرَى؟' },
      { route: 'develop', ar: 'مَنْ يَقُودُ السَّيَّارَةَ فِي أُسْرَتِكَ؟' },
      { route: 'stretch', ar: 'مَا وَسِيلَةُ النَّقْلِ الَّتِي تُفَضِّلُهَا؟ وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ بِـ ______ / مَشْيًا.' },
      { route: 'develop', ar: 'أُسَافِرُ بِـ ______ لِأَنَّهُ / لِأَنَّهَا ______ .' },
      { route: 'develop', ar: '______ يَقُودُ السَّيَّارَةَ.' },
      { route: 'stretch', ar: 'أُفَضِّلُ ______ لِأَنَّهُ أَسْرَعُ / أَرْخَصُ مِنْ ______ .' },
    ],
    modelEn: ['How do you (f.) go to school?', 'I go by bus, but sometimes I come back on foot.'],
    notes: 'Website prompts (order changed so Core starts with the simplest). Website model continues: A: لِمَاذَا تُفَضِّلِينَ الحَافِلَةَ؟ B: لِأَنَّهَا رَخِيصَةٌ وَسَرِيعَةٌ.',
  },
  write: {
    core: { amount: '4 sentences', task: 'Website Core: four accurate journey sentences.', how: 'How you, a brother and a sister go to school — one with bi-, one with ‘alā, one with mashyan.' },
    develop: { amount: '6–8 sentences', task: 'Website Develop: compare three journeys with reasons.', how: 'Add a departure time and one “because it is …”.' },
    stretch: { amount: '70–90 words', task: 'Website task: compare how three people travel.', how: 'Use yastaqillu or yaqūdu, a he and a she verb, a comparison (asra‘u min …) and a time.' },
  },
  frames: {
    core: [
      { en: 'I go to school by bus.', ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ.' },
      { en: 'I go by bike.', ar: 'أَذْهَبُ عَلَى الدَّرَّاجَةِ.' },
      { en: 'I go on foot.', ar: 'أَذْهَبُ مَشْيًا.' },
      { en: 'My brother goes by …', ar: 'أَخِي يَذْهَبُ بِـ ______ .' },
      { en: 'My sister goes by …', ar: 'أُخْتِي تَذْهَبُ بِـ ______ .' },
    ],
    develop: [
      { en: 'How do you (f.) go to school?', ar: 'كَيْفَ تَذْهَبِينَ إِلَى المَدْرَسَةِ؟' },
      { en: '… because it is fast / cheap.', ar: '______ لِأَنَّهُ سَرِيعٌ / لِأَنَّهَا رَخِيصَةٌ.' },
      { en: 'The train leaves at …', ar: 'يُغَادِرُ القِطَارُ فِي السَّاعَةِ ______ .' },
      { en: 'It arrives at …', ar: 'يَصِلُ فِي السَّاعَةِ ______ .' },
      { en: 'The train is faster than the bus.', ar: 'القِطَارُ أَسْرَعُ مِنَ الحَافِلَةِ.' },
    ],
    bank: ['حَافِلَةٌ', 'قِطَارٌ', 'سَيَّارَةٌ', 'دَرَّاجَةٌ', 'طَائِرَةٌ', 'مِتْرُو', 'بِـ', 'عَلَى', 'مَشْيًا', 'سَرِيعٌ', 'رَخِيصٌ', 'مُرِيحٌ'],
  },
  stretch: [
    ['أَسْكُنُ خَارِجَ المَدِينَةِ', 'I live outside the city'],
    ['أَسْتَقِلُّ الحَافِلَةَ', 'I take the bus'],
    ['أَبِي يَقُودُ السَّيَّارَةَ إِلَى العَمَلِ', 'my father drives the car to work'],
    ['عِنْدَمَا يُسَافِرُ إِلَى مَدِينَةٍ أُخْرَى', 'when he travels to another city'],
    ['لِأَنَّ المَشْيَ صِحِّيٌّ', 'because walking is healthy'],
  ],
  modelEn: 'I go to school by bus every day because my house is far. As for my sister, she goes by bike because her school is near. My father drives the car to work, then takes the train when he visits another city. I prefer the train because it is fast and comfortable, but I walk in the neighbourhood because walking is healthy.',
  find: ['bi- with a vehicle', '‘alā with a bike', 'a she-verb', 'a reason with because'],
  modelNotes: 'Evidence: بِالحَافِلَةِ · عَلَى الدَّرَّاجَةِ · فَتَذْهَبُ · لِأَنَّ بَيْتِي بَعِيدٌ / لِأَنَّهُ سَرِيعٌ. Link to AT-A-L06: لِأَنَّ المَشْيَ صِحِّيٌّ.',
  selfCheck: [
    { route: 'core', text: 'Vehicles take bi-; bikes take ‘alā.' },
    { route: 'core', text: 'No little word before mashyan.' },
    { route: 'develop', text: 'My reason pronoun matches the vehicle (-hu / -hā).' },
    { route: 'develop', text: 'I gave a time (leaves / arrives at …).' },
    { route: 'stretch', text: 'I compared two options with … min.' },
  ],
  exit: [1, 2, 5],
  glossary: [
    ['أَسْكُنُ', 'I live'], ['خَارِجَ المَدِينَةِ', 'outside the city'], ['كُلَّ صَبَاحٍ', 'every morning'], ['أَسِيرُ مَشْيًا', 'I walk'], ['مَحَطَّةِ الحَافِلَاتِ', 'the bus station'],
    ['أَسْتَقِلُّ', 'I take (transport)'], ['الجَامِعَةِ', 'the university'], ['يَقُودُ', 'he drives'], ['العُطْلَةِ', 'the holiday'], ['بِالعَبَّارَةِ', 'by ferry'],
  ],
  prep: {
    words: [['أَتَوَقَّعُ', 'I predict', 'he: يَتَوَقَّعُ'], ['كَلِمَةٌ مِفْتَاحِيَّةٌ', 'a key word', 'pl.: كَلِمَاتٌ مِفْتَاحِيَّةٌ'], ['أُرَكِّزُ عَلَى', 'I focus on', 'he: يُرَكِّزُ'], ['مُشَتِّتٌ', 'a distractor', 'pl.: مُشَتِّتَاتٌ'], ['التَّفْصِيلُ الدَّقِيقُ', 'the precise detail', '']],
    questionEn: 'When you listen to Arabic, what helps you most? Think of two strategies.',
    questionAr: 'مَاذَا يُسَاعِدُكَ فِي الاِسْتِمَاعِ؟',
    homework: {
      core: 'Website F6-L03: the picture game and the sorter “Which travel pattern?”.',
      develop: 'Write 6 sentences about how your family travels, with reasons and a time.',
      stretch: 'Website writing task: 70–90 words comparing how three people travel.',
    },
    wordsSource: 'The five words come from the website D1-L10 vocabulary (the AT-A-L10 lesson engine: listening strategies).',
  },
  remember: 'Remember: 5 exam-strategy words + your best listening tip.',
});
const slides = T.wrap('A', 9, 'F6-L03', raw, {
  challenge: {
    steps: [
      'Goal: school to the city library before 10:00. Timetable on the right.',
      'Pairs choose a route and a transport option.',
      'Compare two options: faster / cheaper / more comfortable.',
      'Explain the journey on the mic: transport, times, “then”, and why.',
    ],
    routes: {
      core: 'Choose one option. Say: “adhhabu bil-… · fī s-sā‘a …”.',
      develop: 'Give the departure and arrival time and one reason (li’annahu …).',
      stretch: 'Compare two options (asra‘u min … / arkhaṣu min …) and add walking from the station.',
    },
    phrases: [['بِالحَافِلَةِ', 'bus · £2 · leaves 8:30, arrives 9:20'], ['بِالقِطَارِ', 'train · £5 · leaves 9:00, arrives 9:25'], ['عَلَى الدَّرَّاجَةِ', 'bike · free · 8:15 to 9:45'], ['مَشْيًا مِنَ المَحَطَّةِ', 'walk from the station: 10 min']],
    notes: 'Teacher-made timetable for the website “journey planner”. Model answer (Develop): أَذْهَبُ بِالقِطَارِ. يُغَادِرُ فِي السَّاعَةِ التَّاسِعَةِ وَيَصِلُ قَبْلَ التَّاسِعَةِ وَالنِّصْفِ، ثُمَّ أَذْهَبُ مَشْيًا عَشْرَ دَقَائِقَ. Stretch: القِطَارُ أَسْرَعُ مِنَ الحَافِلَةِ، وَلٰكِنَّ الحَافِلَةَ أَرْخَصُ. Check: the train arrives 9:25 + 10 min walk = 9:35 — before 10:00 ✓; the bike arrives 9:45 ✓ but the class may argue it is tiring.',
  },
});
module.exports = { meta, slides };
