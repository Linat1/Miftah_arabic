'use strict';
/* F6-L02 · Locating Places: Maps, Distance and Position — website: Pathways › Foundation › F6 › F6-L02 (أَيْنَ + definite place, place prepositions + kasrah, بَيْنَ … وَ …, قَرِيبٌ مِنْ / بَعِيدٌ عَنْ agreement, cardinal directions, map language). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F6')({
  n: 2, fileTitle: 'Locating_Places_Maps_Distance_Position', chip: 'Maps and Position',
  title: 'Locating Places: Maps, Distance and Position', arabic: 'تَحْدِيدُ الأَمَاكِنِ',
  focus: 'Ask أَيْنَ …؟ and describe exact positions on a map: next to, opposite, between, right and left, near and far — with accurate agreement.',
  icon: 'FaMapLocationDot', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('F6-L02', {
  support: `• Core: four basic prepositions with a labelled map (بِجَانِبِ، أَمَامَ، خَلْفَ، بَيْنَ).
• Develop: eight positions and near / far agreement (المَحَطَّةُ قَرِيبَةٌ مِنَ …).
• Stretch: an information-gap map (unlabelled) and a precise guide with north / south / east / west.
• Website: “A map answer should name the place and provide a reference point; isolated words do not show full control.”
• Online: share a simple town map (draw one in the whiteboard app) — students annotate or answer in the chat.
• The reference noun after a preposition ends in -i (kasrah) — say it, praise it, don’t over-correct Core.`,
  teach: 'Position words and map language, then where is …? · it is next to / between …',
  wedo: 'Picture match, sort near / far / exact, fix the map sentences and follow a spoken map.',
  next: { nextCode: 'F6-L03', nextTitle: 'Transport: Types and How We Travel', nextAr: 'المُوَاصَلَاتُ' },
  doNow: {
    questions: [
      q('What does خَرِيطَةٌ mean?', ['a map', 'a street', 'a station'], 'Prepared at home (F6-L01).'),
      q('What does بَيْنَ mean?', ['between', 'behind', 'near'], 'Prepared at home (F6-L01).'),
      q('Choose “There is a school.”', ['تُوجَدُ مَدْرَسَةٌ.', 'يُوجَدُ مَدْرَسَةٌ.', 'هُنَاكَ المَدْرَسَةُ.'], 'F6-L01: a feminine place → tūjadu.'),
      q('Which word never changes for gender?', ['هُنَاكَ', 'يُوجَدُ', 'تُوجَدُ'], 'F6-L01: hunāka.'),
      q('What does مَكْتَبَةٌ mean?', ['a library', 'an office', 'a school'], 'F6-L01 places.'),
    ],
    keyIdea: { text: 'A map answer = the place + a position word + a reference point.', ar: 'المَكْتَبَةُ {k|بِجَانِبِ} المَدْرَسَةِ.' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F6-L01. Questions 3–5 retrieve F6-L01 (yūjadu / tūjadu / hunāka, places).',
  },
  routes: {
    core: ['I can ask where four places are.', 'I can use four position words.'],
    develop: ['I can locate places with six expressions.', 'I can make near / far agree.'],
    stretch: ['I can use north, south, east and west.', 'I can write a precise map guide.'],
  },
  bridge: [
    { ar: 'مَوْقِعٌ', urdu: 'موقع', tr: 'mauqaʿ', en: 'Urdu: occasion · Arabic: location' },
    { ar: 'شَمَالٌ', urdu: 'شمال', tr: 'shumāl', en: 'north' },
    { ar: 'جَنُوبٌ', urdu: 'جنوب', tr: 'janūb', en: 'south' },
    { ar: 'مَشْرِقٌ · مَغْرِبٌ', urdu: 'مشرق · مغرب', tr: 'mashriq · maghrib', en: 'east · west' },
    { ar: 'خَارِجَ', urdu: 'خارج', tr: 'khārij', en: 'outside (Urdu: expelled)' },
  ],
  bridgeNotes: 'URDU BRIDGE: شمال، جنوب، مشرق، مغرب are shared (think of نمازِ مغرب at sunset, in the west). Urdu موقع means “occasion, opportunity”; in Arabic مَوْقِعٌ is a location (and a website!). خارج in Urdu (expelled, “outside”) → خَارِجَ المَدِينَةِ = outside the city.',
  core: ['أَيْنَ؟', 'قَرِيبٌ مِنْ', 'بَعِيدٌ عَنْ', 'بِجَانِبِ', 'أَمَامَ', 'خَلْفَ', 'بَيْنَ', 'مُقَابِلَ', 'عَلَى يَمِينِ', 'عَلَى يَسَارِ', 'فِي وَسَطِ', 'خَارِجَ'],
  forms: {
    'قَرِيبٌ مِنْ': { tag: 'm · f · pl', forms: [{ l: 'm.', ar: 'قَرِيبٌ' }, { l: 'f.', ar: 'قَرِيبَةٌ' }, { l: 'nearest', ar: 'أَقْرَبُ' }] },
    'بَعِيدٌ عَنْ': { tag: 'm · f · pl', forms: [{ l: 'm.', ar: 'بَعِيدٌ' }, { l: 'f.', ar: 'بَعِيدَةٌ' }, { l: 'furthest', ar: 'أَبْعَدُ' }] },
    'خَرِيطَةٌ': { tag: 'sg · pl', forms: [{ l: 'one', ar: 'خَرِيطَةٌ' }, { l: 'pl.', ar: 'خَرَائِطُ' }] },
    'طَرِيقٌ': { tag: 'sg · pl', forms: [{ l: 'one', ar: 'طَرِيقٌ' }, { l: 'pl.', ar: 'طُرُقٌ' }] },
  },
  vocabSlides: 3,
  vocabNotes: {
    0: 'Position words (website group 1, 19 words over several cards). Mime them on camera: hand beside / in front of / behind the other hand.',
    1: 'Directions: فِي شَمَالِ / جَنُوبِ (in the north / south of), شَرْقَ / غَرْبَ (east / west of) — Stretch.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · where is …? (website rules 1–3)', title: 'Where is the station?', ar: 'أَيْنَ …؟',
      cols: [{ label: 'Question', w: 4.0, size: 24 }, { label: 'Answer', w: 5.6, size: 24 }, { label: 'English', w: 2.73 }],
      rows: [
        { core: true, cells: [P('{k|أَيْنَ} المَكْتَبَةُ؟', ''), P('المَكْتَبَةُ {w|بِجَانِبِ} المَدْرَسَةِ.', ''), 'next to the school'] },
        { core: true, cells: [P('{k|أَيْنَ} المَطْعَمُ؟', ''), P('المَطْعَمُ {w|مُقَابِلَ} المَتْحَفِ.', ''), 'opposite the museum'] },
        { core: true, cells: [P('{k|أَيْنَ} الحَدِيقَةُ؟', ''), P('الحَدِيقَةُ {w|خَلْفَ} المَسْجِدِ.', ''), 'behind the mosque'] },
        { core: true, cells: [P('{k|أَيْنَ} البَنْكُ؟', ''), P('البَنْكُ {w|بَيْنَ} السُّوقِ {w|وَ}المَقْهَى.', ''), 'between the market and the café'] },
        { cells: [P('{k|أَيْنَ} أَقْرَبُ صَيْدَلِيَّةٍ؟', ''), P('عَلَى يَمِينِ المَحَطَّةِ.', ''), 'to the right of the station'] },
      ],
      ltr: true,
      foot: 'Ask with al- (a place both speakers know). After the position word the reference noun ends in -i: al-madrasati, al-matḥafi.',
      notes: `GRAMMAR PART 1 — website rules “Ask where a definite place is” (أَيْنَ + الـ), “Answer with a place preposition” (the reference noun takes kasrah) and “Use بَيْنَ with two reference points”.
Website mistakes: أَيْنَ مَحَطَّةٌ؟ ✗ → أَيْنَ المَحَطَّةُ؟ ✓ · البَنْكُ بَيْنَ السُّوقِ ✗ → بَيْنَ السُّوقِ وَالمَقْهَى ✓.
Website teaching note: “After a place preposition, listen for and write the kasrah on the reference noun when the text is fully vowelled.”`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · near and far agree (website rule 4)', title: 'Near to · far from', ar: 'قَرِيبٌ مِنْ · بَعِيدٌ عَنْ',
      cards: [
        { chip: 'MASCULINE PLACE', color: '1D5FBF', head: 'بَعِيدٌ عَنْ', big: 'المَطَارُ بَعِيدٌ عَنِ المَرْكَزِ.', en: 'The airport is far from the centre.', clue: 'Airport = m.' },
        { chip: 'FEMININE PLACE', color: 'C0386B', head: 'قَرِيبَةٌ مِنْ', big: 'المَحَطَّةُ قَرِيبَةٌ مِنَ البَيْتِ.', en: 'The station is near the house.', clue: 'Station = f. → -a.' },
        { chip: 'THE FIRST PLACE DECIDES', color: '1E7B4F', head: '… مِنَ البَنْكِ', big: 'المَحَطَّةُ قَرِيبَةٌ مِنَ البَنْكِ.', en: 'The station is near the bank.', clue: 'Agree with the station, not the bank.' },
      ],
      error: { text: 'Website common error: the station is feminine.', pairs: [['المَحَطَّةُ قَرِيبَةٌ مِنَ البَيْتِ.', 'المَحَطَّةُ قَرِيبٌ مِنَ البَيْتِ.']] },
      notes: `GRAMMAR PART 2 — website rule “Make near and far agree”: “The adjective agrees with the place being described, not the reference place.”
Website common error: “Do not make قَرِيبٌ agree with the noun after مِنْ.”
Pronunciation: مِنْ + الـ → مِنَ الـ; عَنْ + الـ → عَنِ الـ (mina l-bayti, ʿani l-markazi).`,
    },
  ],
  quick: [0, 2, 3, 5],
  rest: [7],
  ido: {
    title: 'Watch me describe a town map',
    steps: [
      { head: '1 · Centre', ar: 'فِي وَسَطِ الخَرِيطَةِ تُوجَدُ مَدْرَسَةٌ كَبِيرَةٌ.', think: 'Start from the middle.' },
      { head: '2 · Around it', ar: 'المَكْتَبَةُ {w|بِجَانِبِ} المَدْرَسَةِ، وَالحَدِيقَةُ {w|خَلْفَهَا}.', think: 'khalfahā = behind it (the school).' },
      { head: '3 · Question', ar: '{k|أَيْنَ} السُّوقُ؟ السُّوقُ {w|بَيْنَ} البَنْكِ {w|وَ}المَقْهَى.', think: 'Two reference points.' },
      { head: '4 · Near / far', ar: 'المَحَطَّةُ {e|قَرِيبَةٌ} مِنَ المَيْدَانِ، أَمَّا المَطَارُ فَهُوَ {e|بَعِيدٌ} عَنِ المَرْكَزِ.', think: 'Station f., airport m.' },
    ],
    legend: ['w', 'k', 'e'], legendLabels: { w: 'POSITION', k: 'QUESTION', e: 'AGREEMENT' },
    model: 'فِي وَسَطِ الخَرِيطَةِ تُوجَدُ مَدْرَسَةٌ كَبِيرَةٌ. المَكْتَبَةُ {w|بِجَانِبِ} المَدْرَسَةِ، وَالحَدِيقَةُ {w|خَلْفَهَا}. {w|أَمَامَ} المَدْرَسَةِ يُوجَدُ مَسْجِدٌ صَغِيرٌ. {k|أَيْنَ} السُّوقُ؟ السُّوقُ {w|بَيْنَ} البَنْكِ وَالمَقْهَى. المَحَطَّةُ {e|قَرِيبَةٌ} مِنَ المَيْدَانِ، أَمَّا المَطَارُ فَهُوَ {e|بَعِيدٌ} عَنِ المَرْكَزِ وَخَارِجَ المَدِينَةِ.',
    modelEn: 'In the middle of the map there is a big school. The library is next to the school, and the park is behind it. In front of the school there is a small mosque. Where is the market? The market is between the bank and the café. The station is near the square, while the airport is far from the centre and outside the city.',
    notes: 'I DO (3 min) — the website writing model, drawn live: sketch each place on the whiteboard as you say the sentence. Students copy the model and draw the map.',
  },
  game: {
    title: 'Where is it? Match the picture',
    pick: [0, 4, 5],
    en: ['The bank is next to the hospital.', 'The house is near the school.', 'The hospital is far from the house.'],
    icons: [[['fa6', 'FaBuildingColumns', '1D5FBF'], ['fa6', 'FaHospital', 'C0392B']], [['fa6', 'FaHouse', 'C77700'], ['fa6', 'FaSchool', '1E7B4F']], [['fa6', 'FaHospital', 'C0392B'], ['fa6', 'FaHouse', 'C77700']]],
    labels: ['bank beside hospital', 'house · school (near)', 'hospital · house (far)'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Items 2 and 3 differ only in near / far — ask students to explain their choice with قَرِيبٌ / بَعِيدٌ. Other website items: opposite the shop, on / under the chair (عَلَى، تَحْتَ).',
  },
  sorterNotes: 'Most words are “exact position” — the point: قَرِيبٌ / بَعِيدٌ tell distance, the others tell exact place.',
  hints: ['Station is m. or f.?', 'Between needs how many places?', 'Known place: al- or -un?'],
  coreTip: 'Listen twice and draw the map.\nStart from the school.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5, then draw the whole map.',
  gloss: [
    ['اِبْدَأْ مِنَ المَدْرَسَةِ. المَكْتَبَةُ عَلَى يَمِينِ المَدْرَسَةِ، وَالمَسْجِدُ عَلَى يَسَارِهَا.', 'Start from the school. The library is to the right of the school, and the mosque to its left.'],
    ['أَمَامَ المَدْرَسَةِ حَدِيقَةٌ، وَخَلْفَ الحَدِيقَةِ مَقْهًى صَغِيرٌ.', 'In front of the school there is a park, and behind the park a small café.'],
    ['البَنْكُ بَيْنَ المَقْهَى وَالسُّوقِ.', 'The bank is between the café and the market.'],
    ['المَحَطَّةُ بَعِيدَةٌ عَنِ المَدْرَسَةِ، وَلَكِنَّهَا قَرِيبَةٌ مِنَ المَطْعَمِ.', 'The station is far from the school, but it is near the restaurant.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'أَيْنَ أَقْرَبُ مَحَطَّةٍ؟' },
      { route: 'develop', ar: 'مَاذَا يُوجَدُ مُقَابِلَ المَتْحَفِ؟' },
      { route: 'develop', ar: 'هَلِ المَطَارُ قَرِيبٌ أَمْ بَعِيدٌ؟' },
      { route: 'stretch', ar: 'صِفْ مَوْقِعَ المَكْتَبَةِ بِدِقَّةٍ.' },
    ],
    stems: [
      { route: 'core', ar: 'المَحَطَّةُ بِجَانِبِ / أَمَامَ / خَلْفَ ______ .' },
      { route: 'develop', ar: 'مُقَابِلَ المَتْحَفِ يُوجَدُ ______ .' },
      { route: 'develop', ar: 'المَطَارُ بَعِيدٌ عَنْ / قَرِيبٌ مِنْ ______ .' },
      { route: 'stretch', ar: 'المَكْتَبَةُ غَرْبَ … وَبَيْنَ … وَ …' },
    ],
    modelEn: ['Where is the nearest station?', 'The station is between the bank and the post office.'],
    notes: 'Website “Map detective role-play” — all four prompts are the website’s. Information gap: A has a labelled map, B an empty one; B asks أَيْنَ …؟ and draws. Website model: أَيْنَ أَقْرَبُ مَحَطَّةٍ؟ — المَحَطَّةُ بَيْنَ البَنْكِ وَمَكْتَبِ البَرِيدِ. — هَلْ هِيَ بَعِيدَةٌ؟ — لَا، هِيَ قَرِيبَةٌ مِنَ المَيْدَانِ.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Four places on a labelled map with four position words + one question.' },
    develop: { amount: '60–80 words', how: 'Website task: six location expressions, one where? question, near / far agreement.' },
    stretch: { amount: '80–100 words', how: 'An information-gap guide with north / south / east / west and ammā … fa-.' },
  },
  frames: {
    core: [
      { en: 'Where is the …?', ar: 'أَيْنَ الـ ______ ؟' },
      { en: 'The library is next to the school.', ar: 'المَكْتَبَةُ بِجَانِبِ المَدْرَسَةِ.' },
      { en: 'The park is behind the mosque.', ar: 'الحَدِيقَةُ خَلْفَ المَسْجِدِ.' },
      { en: 'The restaurant is in front of the museum.', ar: 'المَطْعَمُ أَمَامَ المَتْحَفِ.' },
      { en: 'The bank is between … and …', ar: 'البَنْكُ بَيْنَ ______ وَ ______ .' },
    ],
    develop: [
      { en: 'The station (f.) is near the …', ar: 'المَحَطَّةُ قَرِيبَةٌ مِنَ ______ .' },
      { en: 'The airport (m.) is far from the centre.', ar: 'المَطَارُ بَعِيدٌ عَنِ المَرْكَزِ.' },
      { en: 'Opposite the museum there is …', ar: 'مُقَابِلَ المَتْحَفِ يُوجَدُ ______ .' },
      { en: 'To the right of … / to the left of …', ar: 'عَلَى يَمِينِ ______ / عَلَى يَسَارِ ______' },
      { en: 'In the middle of the map there is …', ar: 'فِي وَسَطِ الخَرِيطَةِ ______ .' },
    ],
    bank: ['أَيْنَ', 'بِجَانِبِ', 'أَمَامَ', 'خَلْفَ', 'بَيْنَ … وَ …', 'مُقَابِلَ', 'عَلَى يَمِينِ', 'عَلَى يَسَارِ', 'قَرِيبٌ / قَرِيبَةٌ مِنْ', 'بَعِيدٌ / بَعِيدَةٌ عَنْ', 'فِي وَسَطِ', 'خَارِجَ'],
  },
  stretch: [
    ['شَرْقَ المَيْدَانِ · غَرْبَهُ', 'east of the square · west of it'],
    ['فِي شَمَالِ المَدِينَةِ', 'in the north of the city'],
    ['أَمَّا المَطَارُ فَهُوَ …', 'as for the airport, it is …'],
    ['أَقْرَبُ مَحَطَّةٍ إِلَى …', 'the nearest station to …'],
    ['عَلَى زَاوِيَةِ الشَّارِعِ', 'on the corner of the street'],
  ],
  modelEn: 'In the middle of the map there is a big school. The library is next to the school, and the park is behind it. In front of the school there is a small mosque. Where is the market? The market is between the bank and the café. The station is near the square, while the airport is far from the centre and outside the city.',
  find: ['next to', 'between', 'a where? question', 'near / far'],
  modelNotes: 'Evidence: بِجَانِبِ المَدْرَسَةِ · بَيْنَ البَنْكِ وَالمَقْهَى · أَيْنَ السُّوقُ؟ · قَرِيبَةٌ مِنَ المَيْدَانِ / بَعِيدٌ عَنِ المَرْكَزِ.',
  selfCheck: [
    { route: 'core', text: 'I used four position words.' },
    { route: 'core', text: 'My where? question uses al-.' },
    { route: 'develop', text: 'Between has two reference points.' },
    { route: 'develop', text: 'Near / far agree with the first place.' },
    { route: 'stretch', text: 'I used compass directions.' },
  ],
  exit: [0, 1, 4],
  glossary: [
    ['فِي وَسَطِ', 'in the middle of'], ['مَيْدَانٌ', 'a square'], ['شَرْقَ', 'east of'], ['غَرْبَهُ', 'west of it'], ['المَسْرَحُ', 'the theatre'],
    ['مُقَابِلَ', 'opposite'], ['فِي شَمَالِ', 'in the north of'], ['أَمَّا … فَهُوَ', 'as for …, it is'], ['خَارِجَ', 'outside'], ['أَقْرَبُ مَحَطَّةٍ', 'the nearest station'],
  ],
  prep: {
    words: [['حَافِلَةٌ', 'a bus', 'pl. حَافِلَاتٌ'], ['قِطَارٌ', 'a train', 'pl. قِطَارَاتٌ'], ['سَيَّارَةٌ', 'a car', 'pl. سَيَّارَاتٌ'], ['دَرَّاجَةٌ', 'a bicycle', 'pl. دَرَّاجَاتٌ'], ['مَشْيًا عَلَى الأَقْدَامِ', 'on foot', '—']],
    questionEn: 'How do you usually travel to school?',
    questionAr: 'أَذْهَبُ إِلَى المَدْرَسَةِ بِـ …',
    homework: {
      core: 'Website F6-L02: the vocabulary tab and the “Near, far or exact position?” sorter.',
      develop: 'Website writing task: describe a simple town map in 60–80 words.',
      stretch: 'Make an unlabelled information-gap map and write a precise guide with compass directions.',
    },
    wordsSource: 'The five words come from the website F6-L03 lesson (transport).',
  },
  remember: 'Remember: أَيْنَ + al- place? · position word + reference noun (-i) · near / far agree with the first place.',
});

module.exports = { meta, slides };
