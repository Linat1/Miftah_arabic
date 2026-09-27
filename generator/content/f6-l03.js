'use strict';
/* F6-L03 · Transport: Types and How We Travel — website: Pathways › Foundation › F6 › F6-L03 (transport types, بِـ / عَلَى / مَشْيًا, journey verbs يَسْتَقِلُّ / يَرْكَبُ / يَقُودُ, كَيْفَ تَذْهَبُ / تَذْهَبِينَ؟). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F6')({
  n: 3, fileTitle: 'Transport_Types_and_How_We_Travel', chip: 'Transport',
  title: 'Transport: Types and How We Travel', arabic: 'المُوَاصَلَاتُ — أَنْوَاعُ النَّقْلِ',
  focus: 'Name twelve kinds of transport and say how people travel with the right pattern: بِالحَافِلَةِ · عَلَى الدَّرَّاجَةِ · مَشْيًا — then ask a boy or a girl how they travel.',
  icon: 'FaBus', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const gp = (one, pl) => ({ tag: 'sg · pl', forms: [{ l: 'one', ar: one }, { l: 'pl.', ar: pl }] });
const who = (he, she, youf) => ({ tag: 'he · she · you f.', forms: [{ l: 'he', ar: he }, { l: 'she', ar: she }, { l: 'you f.', ar: youf }] });
const slides = D.devLesson('F6-L03', {
  support: `• Core: six transport words and four journey sentences: أَذْهَبُ إِلَى … بِالحَافِلَةِ / مَشْيًا.
• Develop: compare three journeys with the correct pattern and a reason (لِأَنَّ بَيْتِي بَعِيدٌ).
• Stretch: a transport survey report with يَسْتَقِلُّ، يَقُودُ and varied person forms (he / she / we).
• Three patterns only: بِـ + motor transport · عَلَى + something you sit ON (bike, motorbike) · مَشْيًا with nothing before it.
• Website teaching note: “Learn the transport noun together with its normal preposition; this prevents word-for-word translation from English.”
• Note: the website picture game says بِالدَّرَّاجَةِ — also heard in everyday Arabic; the lesson teaches عَلَى الدَّرَّاجَةِ.`,
  teach: 'Transport and journey words, then by / on / on foot and how do you travel?',
  wedo: 'Picture match, sort the three patterns, fix the mistakes and listen: how does each person travel?',
  next: { nextCode: 'F6-L04', nextTitle: 'Tickets, Timetables and Journey Duration', nextAr: 'التَّذَاكِرُ وَجَدَاوِلُ الرِّحْلَاتِ' },
  doNow: {
    questions: [
      q('What does حَافِلَةٌ mean?', ['a bus', 'a train', 'a car'], 'Prepared at home (F6-L02).'),
      q('What does مَشْيًا عَلَى الأَقْدَامِ mean?', ['on foot', 'by bicycle', 'by car'], 'Prepared at home (F6-L02).'),
      q('Choose “Where is the station?”', ['أَيْنَ المَحَطَّةُ؟', 'أَيْنَ مَحَطَّةٌ؟', 'مَاذَا المَحَطَّةُ؟'], 'F6-L02: ayna + al- place.'),
      q('Choose the accurate sentence.', ['المَحَطَّةُ قَرِيبَةٌ مِنَ البَيْتِ.', 'المَحَطَّةُ قَرِيبٌ مِنَ البَيْتِ.', 'المَحَطَّةُ قَرِيبُونَ مِنَ البَيْتِ.'], 'F6-L02: agree with the station.'),
      q('What does مُقَابِلَ mean?', ['opposite', 'behind', 'between'], 'F6-L02 position words.'),
    ],
    keyIdea: { text: 'Three ways to travel: BY (bi-) a bus, ON (ʿalā) a bike, ON FOOT (mashyan).', ar: 'أَذْهَبُ {w|بِ}الحَافِلَةِ · {m|عَلَى} الدَّرَّاجَةِ · {k|مَشْيًا}' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F6-L02. Questions 3–5 retrieve F6-L02 (where?, near / far agreement, position).',
  },
  routes: {
    core: ['I can name twelve kinds of transport.', 'I can say how I go to school.'],
    develop: ['I can choose بِـ, عَلَى or مَشْيًا.', 'I can ask a boy or a girl how they travel.'],
    stretch: ['I can compare three journeys with reasons.', 'I can report a transport survey.'],
  },
  bridge: [
    { ar: 'سَفَرٌ', urdu: 'سفر', tr: 'safar', en: 'journey / travel' },
    { ar: 'مُسَافِرٌ', urdu: 'مسافر', tr: 'musāfir', en: 'traveller' },
    { ar: 'رِحْلَةٌ', urdu: 'رحلت', tr: 'rehlat', en: 'Urdu: passing away · Arabic: a trip' },
    { ar: 'سَائِقٌ', urdu: 'سواری', tr: 'sawārī', en: 'Urdu: a ride / passenger → Arabic driver is sāʼiq' },
    { ar: 'طَيَّارَةٌ · طَائِرَةٌ', urdu: 'طیارہ', tr: 'tayyāra', en: 'aeroplane' },
  ],
  bridgeNotes: 'URDU BRIDGE: سفر and مسافر are identical (يُسَافِرُ = he travels). طیارہ is the Arabic طَيَّارَةٌ (plane — the formal word in the lesson is طَائِرَةٌ, both from طَارَ “to fly”). Careful: Urdu رحلت means “passing away (the final journey)”; Arabic رِحْلَةٌ is simply a trip. سواری (Urdu: a ride) is Persian — the Arabic driver is سَائِقٌ and a passenger رَاكِبٌ.',
  core: ['حَافِلَةٌ', 'قِطَارٌ', 'مِتْرُو', 'سَيَّارَةٌ', 'سَيَّارَةُ أُجْرَةٍ', 'دَرَّاجَةٌ', 'طَائِرَةٌ', 'سَفِينَةٌ', 'يَرْكَبُ', 'يَقُودُ', 'يَسِيرُ مَشْيًا', 'يُسَافِرُ'],
  forms: {
    'حَافِلَةٌ': gp('حَافِلَةٌ', 'حَافِلَاتٌ'),
    'قِطَارٌ': gp('قِطَارٌ', 'قِطَارَاتٌ'),
    'سَيَّارَةٌ': gp('سَيَّارَةٌ', 'سَيَّارَاتٌ'),
    'دَرَّاجَةٌ': gp('دَرَّاجَةٌ', 'دَرَّاجَاتٌ'),
    'طَائِرَةٌ': gp('طَائِرَةٌ', 'طَائِرَاتٌ'),
    'سَفِينَةٌ': gp('سَفِينَةٌ', 'سُفُنٌ'),
    'يَرْكَبُ': who('يَرْكَبُ', 'تَرْكَبُ', 'تَرْكَبِينَ'),
    'يَقُودُ': who('يَقُودُ', 'تَقُودُ', 'تَقُودِينَ'),
    'يُسَافِرُ': who('يُسَافِرُ', 'تُسَافِرُ', 'تُسَافِرِينَ'),
    'سَائِقٌ': { tag: 'm · f · pl', forms: [{ l: 'm.', ar: 'سَائِقٌ' }, { l: 'f.', ar: 'سَائِقَةٌ' }, { l: 'pl.', ar: 'سَائِقُونَ' }] },
    'رَاكِبٌ / رَاكِبَةٌ': { tag: 'm · f · pl', forms: [{ l: 'm.', ar: 'رَاكِبٌ' }, { l: 'f.', ar: 'رَاكِبَةٌ' }, { l: 'pl.', ar: 'رُكَّابٌ' }] },
  },
  flexGroups: [2],
  vocabNotes: {
    0: 'Transport nouns with plurals. سَيَّارَةُ أُجْرَةٍ = “a car of hire” (taxi); مِتْرُو and تِرَامٌ are borrowed words.',
    1: 'Verbs in the he-form; the cards show she / you (f.). يَسْتَقِلُّ (takes transport) is formal — Stretch.',
    2: 'FLEX: tickets and stations are the focus of F6-L04 (next lesson).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · three travel patterns (website rules 1–3)', title: 'By bus · on a bike · on foot', ar: 'بِـ · عَلَى · مَشْيًا',
      cols: [{ label: 'Pattern', w: 3.0 }, { label: 'Sentence', w: 6.3, size: 24 }, { label: 'English', w: 3.03 }],
      rows: [
        { core: true, cells: ['bi- + motor transport', P('أَذْهَبُ إِلَى المَدْرَسَةِ {w|بِ}الحَافِلَةِ.', ''), 'I go to school by bus.'] },
        { core: true, cells: ['bi- + motor transport', P('أُسَافِرُ إِلَى لَنْدَنَ {w|بِ}القِطَارِ.', ''), 'I travel to London by train.'] },
        { cells: ['bi- + indefinite', P('نَذْهَبُ إِلَى المَطَارِ {w|بِ}سَيَّارَةِ أُجْرَةٍ.', ''), 'We go to the airport by taxi.'] },
        { core: true, cells: ['ʿalā + ride on', P('أَذْهَبُ إِلَى الحَدِيقَةِ {m|عَلَى} الدَّرَّاجَةِ.', ''), 'I go to the park by bike.'] },
        { core: true, cells: ['mashyan (nothing before)', P('أَذْهَبُ إِلَى المَكْتَبَةِ {k|مَشْيًا}.', ''), 'I walk to the library.'] },
      ],
      ltr: true,
      foot: 'bi- joins the word: bi + al-ḥāfila → bil-ḥāfilati. Never write bi-mashyan.',
      notes: `GRAMMAR PART 1 — website rules “Travel by most motorised transport” (بِـ joins the definite noun: بِالحَافِلَةِ), “Ride on a bicycle or motorbike” (عَلَى — you sit on top) and “Say ‘on foot’” (مَشْيًا is an adverb: no بِـ, no عَلَى).
Website common error: أُسَافِرُ عَلَى الحَافِلَةِ ✗ → بِالحَافِلَةِ ✓ · أَذْهَبُ بِمَشْيًا ✗ → مَشْيًا ✓.
Also possible: أَرْكَبُ الدَّرَّاجَةَ (I ride the bike) — the bike is the object, no preposition.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · how do you travel? (website rule 4)', title: 'How do you go to school?', ar: 'كَيْفَ تَذْهَبُ؟',
      cards: [
        { chip: 'TO A BOY', color: '1D5FBF', head: 'كَيْفَ تَذْهَبُ؟', big: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟', en: 'How do you (m.) go to school?', clue: 'ta-dh-ha-bu' },
        { chip: 'TO A GIRL', color: 'C0386B', head: 'كَيْفَ تَذْهَبِينَ؟', big: 'كَيْفَ تَذْهَبِينَ إِلَى المَدْرَسَةِ؟', en: 'How do you (f.) go to school?', clue: 'add -īna' },
        { chip: 'ANSWER + REASON', color: '1E7B4F', head: 'أَذْهَبُ … لِأَنَّ …', big: 'أَذْهَبُ بِالحَافِلَةِ لِأَنَّ بَيْتِي بَعِيدٌ.', en: 'I go by bus because my house is far.', clue: 'a- for I.' },
      ],
      error: { text: 'Website common error: to a girl the verb ends in -īna.', pairs: [['كَيْفَ تَذْهَبِينَ؟', 'كَيْفَ تَذْهَبُ؟']] },
      notes: `GRAMMAR PART 2 — website rule “Ask and answer how someone travels”: تُـ / تَـ for one male listener, تُـ…ينَ / تَـ…ينَ for one female listener, أَـ / أُـ in the first-person answer.
Website teaching note: “Transport descriptions become stronger when they add destination, frequency, duration and a reason.”
Reporting (listening): تَذْهَبُ سَارَةُ بِالحَافِلَةِ · أَمَّا عَلِيٌّ فَيَذْهَبُ عَلَى الدَّرَّاجَةِ.`,
    },
  ],
  quick: [0, 1, 3, 4],
  rest: [5, 6, 7],
  ido: {
    title: 'Watch me compare three journeys',
    steps: [
      { head: '1 · Me', ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ {w|بِ}الحَافِلَةِ كُلَّ يَوْمٍ لِأَنَّ بَيْتِي بَعِيدٌ.', think: 'Bus = bi- · + reason.' },
      { head: '2 · My sister', ar: 'أَمَّا أُخْتِي فَتَذْهَبُ {m|عَلَى} الدَّرَّاجَةِ لِأَنَّ مَدْرَسَتَهَا قَرِيبَةٌ.', think: 'She → ta- · bike = ʿalā.' },
      { head: '3 · My father', ar: 'أَبِي يَقُودُ السَّيَّارَةَ إِلَى العَمَلِ، ثُمَّ يَسْتَقِلُّ القِطَارَ …', think: 'He → ya- · drives the car.' },
      { head: '4 · Opinion', ar: 'أُفَضِّلُ القِطَارَ لِأَنَّهُ سَرِيعٌ، وَلَكِنِّي أَسِيرُ {k|مَشْيًا} فِي الحَيِّ.', think: 'Walking: mashyan.' },
    ],
    legend: ['w', 'm', 'k'], legendLabels: { w: 'BY (BI-)', m: 'ON (ʿALĀ)', k: 'ON FOOT' },
    model: 'أَذْهَبُ إِلَى المَدْرَسَةِ {w|بِ}الحَافِلَةِ كُلَّ يَوْمٍ لِأَنَّ بَيْتِي بَعِيدٌ. أَمَّا أُخْتِي فَتَذْهَبُ {m|عَلَى} الدَّرَّاجَةِ لِأَنَّ مَدْرَسَتَهَا قَرِيبَةٌ. أَبِي يَقُودُ السَّيَّارَةَ إِلَى العَمَلِ، ثُمَّ يَسْتَقِلُّ القِطَارَ عِنْدَمَا يَزُورُ مَدِينَةً أُخْرَى. أُفَضِّلُ القِطَارَ لِأَنَّهُ سَرِيعٌ وَمُرِيحٌ، وَلَكِنِّي أَسِيرُ {k|مَشْيًا} فِي الحَيِّ لِأَنَّ المَشْيَ صِحِّيٌّ.',
    modelEn: 'I go to school by bus every day because my house is far. As for my sister, she goes by bike because her school is near. My father drives the car to work, then takes the train when he visits another city. I prefer the train because it is fast and comfortable, but I walk around the neighbourhood because walking is healthy.',
    notes: 'I DO (3 min) — the website writing model built step by step. Students copy it and change the three people and their transport.',
  },
  game: {
    title: 'How do they travel? Match the picture',
    pick: [0, 1, 4],
    en: ['I go by bus.', 'I travel by train.', 'I travel by plane.'],
    icons: [[['fa6', 'FaBus', 'C77700']], [['fa6', 'FaTrain', '1D5FBF']], [['fa6', 'FaPlane', '6B4C9A']]],
    labels: ['bus', 'train', 'plane'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). All three use بِـ. Other website items: by car, by bike (the website game uses بِالدَّرَّاجَةِ — everyday usage; the lesson teaches عَلَى الدَّرَّاجَةِ) and on foot (مَاشِيًا — another way to say مَشْيًا).',
  },
  sorterNotes: 'Say the full sentence for each card: أَذْهَبُ بِالقِطَارِ · أَذْهَبُ عَلَى الدَّرَّاجَةِ · أَذْهَبُ مَشْيًا.',
  hints: ['A train: by or on?', 'What comes before mashyan?', 'Talking to a girl: which ending?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 4.\nListen for: بِـ · عَلَى · لِأَنَّ.',
  listenRoutes: 'Core: questions 1, 3 and 4. Develop / Stretch: all 5, then give the father’s reason too.',
  gloss: [
    ['تَذْهَبُ سَارَةُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ لِأَنَّ بَيْتَهَا بَعِيدٌ.', 'Sarah goes to school by bus because her house is far.'],
    ['أَمَّا أَخُوهَا عَلِيٌّ فَيَذْهَبُ عَلَى الدَّرَّاجَةِ لِأَنَّ المَدْرَسَةَ قَرِيبَةٌ مِنْ بَيْتِهِ.', 'As for her brother Ali, he goes by bike because the school is near his house.'],
    ['فِي نِهَايَةِ الأُسْبُوعِ تُسَافِرُ الأُسْرَةُ إِلَى المَدِينَةِ بِالقِطَارِ.', 'At the weekend the family travels to the city by train.'],
    ['يُفَضِّلُ الأَبُ القِطَارَ لِأَنَّهُ سَرِيعٌ، وَلَكِنَّ الأُمَّ تُفَضِّلُ السَّيَّارَةَ لِأَنَّهَا مُرِيحَةٌ.', 'The father prefers the train because it is fast, but the mother prefers the car because it is comfortable.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟' },
      { route: 'develop', ar: 'كَيْفَ تُسَافِرُ إِلَى مَدِينَةٍ أُخْرَى؟' },
      { route: 'develop', ar: 'مَا وَسِيلَةُ النَّقْلِ الَّتِي تُفَضِّلُهَا؟ وَلِمَاذَا؟' },
      { route: 'stretch', ar: 'مَنْ يَقُودُ السَّيَّارَةَ فِي أُسْرَتِكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ بِـ ______ / مَشْيًا.' },
      { route: 'develop', ar: 'أُسَافِرُ بِالقِطَارِ / بِالسَّيَّارَةِ …' },
      { route: 'develop', ar: 'أُفَضِّلُ ______ لِأَنَّهُ / لِأَنَّهَا ______ .' },
      { route: 'stretch', ar: '______ يَقُودُ / تَقُودُ السَّيَّارَةَ، وَ …' },
    ],
    modelEn: ['How do you (f.) go to school?', 'I go by bus, but sometimes I come back on foot.'],
    notes: 'Website “Transport survey and journey comparison” — all four prompts are the website’s. Survey five classmates, then report: ثَلَاثَةُ طُلَّابٍ يَذْهَبُونَ بِالحَافِلَةِ (Stretch). Website model: كَيْفَ تَذْهَبِينَ إِلَى المَدْرَسَةِ؟ — أَذْهَبُ بِالحَافِلَةِ، وَلَكِنِّي أَعُودُ مَشْيًا أَحْيَانًا. — لِمَاذَا تُفَضِّلِينَ الحَافِلَةَ؟ — لِأَنَّهَا رَخِيصَةٌ وَسَرِيعَةٌ.',
  },
  write: {
    core: { amount: '4 sentences', how: 'How you and three family members travel, with the three patterns.' },
    develop: { amount: '70–90 words', how: 'Website task: compare how three people travel, with two reasons.' },
    stretch: { amount: '90–110 words', how: 'A transport survey report: yastaqillu, yaqūdu, plural verbs and numbers.' },
  },
  frames: {
    core: [
      { en: 'I go to school by bus.', ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ.' },
      { en: 'I go to the park by bike.', ar: 'أَذْهَبُ إِلَى الحَدِيقَةِ عَلَى الدَّرَّاجَةِ.' },
      { en: 'I walk to the mosque.', ar: 'أَذْهَبُ إِلَى المَسْجِدِ مَشْيًا.' },
      { en: 'My father goes by car.', ar: 'أَبِي يَذْهَبُ بِالسَّيَّارَةِ.' },
      { en: 'My mother goes by train.', ar: 'أُمِّي تَذْهَبُ بِالقِطَارِ.' },
    ],
    develop: [
      { en: '… because my house is far / near.', ar: 'لِأَنَّ بَيْتِي بَعِيدٌ / قَرِيبٌ.' },
      { en: 'As for my sister, she goes …', ar: 'أَمَّا أُخْتِي فَتَذْهَبُ ______ .' },
      { en: 'My father drives the car to work.', ar: 'أَبِي يَقُودُ السَّيَّارَةَ إِلَى العَمَلِ.' },
      { en: 'I prefer the train because it is fast.', ar: 'أُفَضِّلُ القِطَارَ لِأَنَّهُ سَرِيعٌ.' },
      { en: 'How do you (f.) go to school?', ar: 'كَيْفَ تَذْهَبِينَ إِلَى المَدْرَسَةِ؟' },
    ],
    bank: ['بِالحَافِلَةِ', 'بِالقِطَارِ', 'بِالسَّيَّارَةِ', 'بِالطَّائِرَةِ', 'عَلَى الدَّرَّاجَةِ', 'مَشْيًا', 'يَقُودُ', 'يَرْكَبُ', 'يُسَافِرُ', 'سَرِيعٌ', 'مُرِيحٌ', 'رَخِيصٌ'],
  },
  stretch: [
    ['أَسْتَقِلُّ الحَافِلَةَ إِلَى …', 'I take the bus to …'],
    ['عِنْدَمَا يُسَافِرُ إِلَى مَدِينَةٍ أُخْرَى', 'when he travels to another city'],
    ['ثَلَاثَةُ طُلَّابٍ يَذْهَبُونَ …', 'three students go …'],
    ['المَوَاصَلَاتُ العَامَّةُ أَرْخَصُ', 'public transport is cheaper'],
    ['لِأَنَّ المَشْيَ صِحِّيٌّ', 'because walking is healthy'],
  ],
  modelEn: 'I go to school by bus every day because my house is far. As for my sister, she goes by bike because her school is near. My father drives the car to work, then takes the train when he visits another city. I prefer the train because it is fast and comfortable, but I walk around the neighbourhood because walking is healthy.',
  find: ['by (bi-)', 'on (ʿalā)', 'on foot', 'a reason'],
  modelNotes: 'Evidence: بِالحَافِلَةِ · عَلَى الدَّرَّاجَةِ · مَشْيًا · لِأَنَّ بَيْتِي بَعِيدٌ / لِأَنَّهُ سَرِيعٌ. Persons: I (أَذْهَبُ), she (تَذْهَبُ), he (يَقُودُ).',
  selfCheck: [
    { route: 'core', text: 'I used three kinds of transport.' },
    { route: 'core', text: 'bi- / ʿalā / mashyan are correct.' },
    { route: 'develop', text: 'He → ya-, she → ta-.' },
    { route: 'develop', text: 'Two journeys have a reason.' },
    { route: 'stretch', text: 'I reported a survey with numbers.' },
  ],
  exit: [0, 3, 5],
  glossary: [
    ['خَارِجَ المَدِينَةِ', 'outside the city'], ['أَسِيرُ مَشْيًا', 'I walk'], ['مَحَطَّةِ الحَافِلَاتِ', 'the bus station'], ['أَسْتَقِلُّ', 'I take (transport)'], ['تَدْرُسُ فِي الجَامِعَةِ', 'she studies at university'],
    ['بِالمِتْرُو', 'by metro'], ['يَقُودُ', 'he drives'], ['العَمَلِ', 'work'], ['عِنْدَمَا يُسَافِرُ', 'when he travels'], ['بِالعَبَّارَةِ', 'by ferry'],
  ],
  prep: {
    words: [['تَذْكِرَةٌ', 'a ticket', 'pl. تَذَاكِرُ'], ['جَدْوَلٌ', 'a timetable', 'pl. جَدَاوِلُ'], ['يُغَادِرُ', 'departs / leaves', 'she: تُغَادِرُ'], ['يَصِلُ', 'arrives', 'she: تَصِلُ'], ['تَسْتَغْرِقُ الرِّحْلَةُ', 'the journey takes', '—']],
    questionEn: 'How long does your journey to school take?',
    questionAr: 'تَسْتَغْرِقُ الرِّحْلَةُ … دَقِيقَةً',
    homework: {
      core: 'Website F6-L03: the vocabulary tab and the “Which travel pattern?” sorter.',
      develop: 'Website writing task: compare how three people travel (70–90 words).',
      stretch: 'Survey five people and write a transport report with numbers and plural verbs.',
    },
    wordsSource: 'The five words come from the website F6-L04 lesson (tickets, timetables and duration).',
  },
  remember: 'Remember: بِـ + bus / train / car · عَلَى + bike · مَشْيًا alone · to a girl: -īna.',
});

module.exports = { meta, slides };
