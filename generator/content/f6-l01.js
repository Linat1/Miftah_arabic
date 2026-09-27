'use strict';
/* F6-L01 · Places in Town: Buildings and Public Spaces — website: Pathways › Foundation › F6 › F6-L01 (town places, gender of place nouns, يُوجَدُ / تُوجَدُ / هُنَاكَ, locating with prepositions). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F6')({
  n: 1, fileTitle: 'Places_in_Town', chip: 'Places in Town',
  title: 'Places in Town: Buildings and Public Spaces', arabic: 'الأَمَاكِنُ فِي المَدِينَةِ',
  focus: 'Name the essential places in a town and say what there is with يُوجَدُ (masculine), تُوجَدُ (feminine) and هُنَاكَ, then locate places with a preposition.',
  icon: 'FaCity', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const gp = (g, one, pl) => ({ tag: g, forms: [{ l: 'one', ar: one }, { l: 'pl.', ar: pl }] });
const slides = D.devLesson('F6-L01', {
  support: `• Core: name eight places and write three هُنَاكَ sentences (هُنَاكَ never changes).
• Develop: choose يُوجَدُ / تُوجَدُ from the gender of the place and locate four places (بِجَانِبِ، أَمَامَ، خَلْفَ، فِي).
• Stretch: a connected guide with formal existence forms, varied prepositions and a balanced opinion (… وَلَكِنَّ …).
• Website teaching note: “Learn place nouns as usable chunks, including their gender and a model adjective.” (مَدْرَسَةٌ كَبِيرَةٌ · مَسْجِدٌ قَرِيبٌ).
• Places of worship: the website list includes mosque, church and temple — present them respectfully as places found in many towns.
• Students may describe their real area or an invented town (safeguarding: no home addresses).`,
  teach: 'Places in three groups, then there is (m. / f.) and where it is.',
  wedo: 'Picture match, sort masculine / feminine, fix the sentences and listen to Salma’s town.',
  next: { nextCode: 'F6-L02', nextTitle: 'Locating Places: Maps, Distance and Position', nextAr: 'تَحْدِيدُ الأَمَاكِنِ' },
  doNow: {
    questions: [
      q('What does شَارِعٌ mean?', ['a street', 'a village', 'a city'], 'Prepared at home (F5-L12).'),
      q('What does مَرْكَزُ المَدِينَةِ mean?', ['the city centre', 'the neighbourhood', 'the village'], 'Prepared at home (F5-L12).'),
      q('Where do you buy medicine?', ['صَيْدَلِيَّةٌ', 'مَطْعَمٌ', 'مَدْرَسَةٌ'], 'F5-L09 places.'),
      q('Which body noun is feminine?', ['يَدٌ', 'رَأْسٌ', 'أَنْفٌ'], 'F5-L07: gender without ة.'),
      q('Which adjective agrees with مَدِينَةٌ?', ['جَمِيلَةٌ', 'جَمِيلٌ', 'جَمِيلُونَ'], 'F3–F5: feminine noun → feminine adjective.'),
    ],
    keyIdea: { text: 'There is: يُوجَدُ with a masculine place, تُوجَدُ with a feminine place — or simply هُنَاكَ.', ar: '{w|يُوجَدُ} مَسْجِدٌ · {e|تُوجَدُ} مَدْرَسَةٌ · {k|هُنَاكَ} سُوقٌ' },
    retrieves: 'Questions 1–2 test two of the five town words prepared at home at the end of F5-L12. Questions 3–5 retrieve F5 (places, noun gender, agreement).',
  },
  routes: {
    core: ['I can name sixteen places in town.', 'I can say there is … with هُنَاكَ.'],
    develop: ['I can choose يُوجَدُ or تُوجَدُ.', 'I can locate a place with a preposition.'],
    stretch: ['I can write a connected town guide.', 'I can give a balanced opinion with وَلَكِنَّ.'],
  },
  bridge: [
    { ar: 'شَارِعٌ', urdu: 'شارع', tr: 'shāriʿ', en: 'street (Shahrah-e …)' },
    { ar: 'مَسْجِدٌ', urdu: 'مسجد', tr: 'masjid', en: 'mosque' },
    { ar: 'مَكْتَبٌ', urdu: 'مکتب', tr: 'maktab', en: 'Urdu: school · Arabic: office / desk' },
    { ar: 'بَلْدَةٌ', urdu: 'بلدیہ', tr: 'baldiya', en: 'municipality → town' },
    { ar: 'مَيْدَانٌ', urdu: 'میدان', tr: 'maidān', en: 'field / ground → square' },
  ],
  bridgeNotes: 'URDU BRIDGE: شارع (as in “Shahrah-e-Faisal” / شارع فیصل) and مسجد are identical. مکتب in Urdu is a (Qur’an) school; in Arabic مَكْتَبٌ is an office or desk, and مَكْتَبَةٌ a library — all from “writing” (كَتَبَ). بلدیہ (municipality) → بَلْدَةٌ (town). میدان (a field, ground) → مَيْدَانٌ (a town square).',
  core: ['مَدِينَةٌ', 'قَرْيَةٌ', 'شَارِعٌ', 'مَدْرَسَةٌ', 'مَكْتَبَةٌ', 'مَتْحَفٌ', 'مَسْجِدٌ', 'مُسْتَشْفًى', 'صَيْدَلِيَّةٌ', 'بَنْكٌ', 'مَحَطَّةٌ', 'مَطَارٌ', 'سُوقٌ', 'مَرْكَزٌ تِجَارِيٌّ', 'مَطْعَمٌ', 'حَدِيقَةٌ عَامَّةٌ'],
  forms: {
    'مَدِينَةٌ': gp('f.', 'مَدِينَةٌ', 'مُدُنٌ'),
    'قَرْيَةٌ': gp('f.', 'قَرْيَةٌ', 'قُرًى'),
    'شَارِعٌ': gp('m.', 'شَارِعٌ', 'شَوَارِعُ'),
    'مَدْرَسَةٌ': gp('f.', 'مَدْرَسَةٌ', 'مَدَارِسُ'),
    'مَسْجِدٌ': gp('m.', 'مَسْجِدٌ', 'مَسَاجِدُ'),
    'مَتْحَفٌ': gp('m.', 'مَتْحَفٌ', 'مَتَاحِفُ'),
    'سُوقٌ': gp('m.', 'سُوقٌ', 'أَسْوَاقٌ'),
    'مَحَطَّةٌ': gp('f.', 'مَحَطَّةٌ', 'مَحَطَّاتٌ'),
    'حَدِيقَةٌ عَامَّةٌ': gp('f.', 'حَدِيقَةٌ عَامَّةٌ', 'حَدَائِقُ عَامَّةٌ'),
  },
  vocabSlides: 4,
  vocabNotes: {
    0: 'Settlement words: مَدِينَةٌ (city) > بَلْدَةٌ (town) > قَرْيَةٌ (village). The cards show gender (m. / f.) and the plural.',
    1: 'Many places start with مَـ = “a place of …”: مَدْرَسَةٌ (studying), مَكْتَبَةٌ (books), مَتْحَفٌ (treasures), مَسْجِدٌ (prostration), مَسْرَحٌ (stage).',
    2: 'FLEX: services. مُسْتَشْفًى (hospital) and مَقْهًى (café) are masculine despite the ending -an: يُوجَدُ مُسْتَشْفًى.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · there is (website rules 1–3)', title: 'There is a mosque · there is a school', ar: 'يُوجَدُ · تُوجَدُ · هُنَاكَ',
      cols: [{ label: 'Masculine place · يُوجَدُ', w: 6.1, size: 24 }, { label: 'Feminine place · تُوجَدُ', w: 6.23, size: 24 }],
      rows: [
        { core: true, cells: [P('{w|يُوجَدُ} مَسْجِدٌ قَرِيبٌ.', 'There is a nearby mosque.'), P('{e|تُوجَدُ} مَدْرَسَةٌ كَبِيرَةٌ.', 'There is a big school.')] },
        { core: true, cells: [P('{w|يُوجَدُ} بَنْكٌ فِي المَرْكَزِ.', 'There is a bank in the centre.'), P('{e|تُوجَدُ} مَكْتَبَةٌ حَدِيثَةٌ.', 'There is a modern library.')] },
        { cells: [P('{w|يُوجَدُ} مَطَارٌ خَارِجَ المَدِينَةِ.', 'There is an airport outside the city.'), P('{e|تُوجَدُ} جَامِعَةٌ حَدِيثَةٌ.', 'There is a modern university.')] },
        { cells: [P('{w|يُوجَدُ} مُسْتَشْفًى قَرِيبٌ.', 'There is a nearby hospital.'), P('{e|تُوجَدُ} حَدِيقَةٌ عَامَّةٌ جَمِيلَةٌ.', 'There is a beautiful park.')] },
        { core: true, cells: [P('{k|هُنَاكَ} سُوقٌ وَمَكْتَبَةٌ.', 'There is a market and a library.'), P('فِي حَيِّي {k|هُنَاكَ} مَطْعَمٌ صَغِيرٌ.', 'In my area there is a small restaurant.')] },
      ],
      foot: 'The place is new information, so it is indefinite (-un): hunāka sūqun, not as-sūqu. Hunāka never changes.',
      notes: `GRAMMAR PART 1 — website rules: “Use يُوجَدُ with a masculine place” (يُـ because the noun is masculine; indefinite when introduced), “Use تُوجَدُ with a feminine place” (many places ending in ـة), “Use هُنَاكَ for a simpler existence statement” (never changes).
Website common error: يُوجَدُ مَدْرَسَةٌ ✗ → تُوجَدُ مَدْرَسَةٌ ✓. Also: هُنَاكَ المَكْتَبَةُ ✗ → هُنَاكَ مَكْتَبَةٌ ✓.
Core students may use هُنَاكَ throughout — it is always correct.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · place + adjective + where (website rule 4)', title: 'A complete town sentence', ar: 'مَكَانٌ + صِفَةٌ + مَوْقِعٌ',
      cards: [
        { chip: 'NEXT TO', color: '1D5FBF', head: 'بِجَانِبِ', big: 'تُوجَدُ صَيْدَلِيَّةٌ صَغِيرَةٌ بِجَانِبِ المُسْتَشْفَى.', en: 'There is a small pharmacy next to the hospital.', clue: 'Place + adjective + where.' },
        { chip: 'IN FRONT · BEHIND', color: '6B4C9A', head: 'أَمَامَ · خَلْفَ', big: 'المَطْعَمُ أَمَامَ المَتْحَفِ، وَالحَدِيقَةُ خَلْفَ المَكْتَبَةِ.', en: 'The restaurant is in front of the museum; the park is behind the library.', clue: 'Known places: al- + noun.' },
        { chip: 'NOT THERE', color: 'C0386B', head: 'لَا يُوجَدُ', big: 'لَا يُوجَدُ مَطَارٌ فِي المَدِينَةِ.', en: 'There is no airport in the city.', clue: 'lā + yūjadu / tūjadu.' },
      ],
      error: { text: 'Website common error: an airport is masculine.', pairs: [['يُوجَدُ مَطَارٌ.', 'تُوجَدُ مَطَارٌ.']] },
      notes: `GRAMMAR PART 2 — website rule “Join places and add precise location”: a complete description names the place, adds an adjective and locates it: يُوجَدُ مَتْحَفٌ قَدِيمٌ فِي مَرْكَزِ المَدِينَةِ.
Prepositions from F3 (home): بِجَانِبِ، أَمَامَ، خَلْفَ، بَيْنَ، قُرْبَ. After them the noun ends in -i.
Negative (website reading): لَا يُوجَدُ مَطَارٌ … وَلَكِنْ تُوجَدُ مَحَطَّةُ حَافِلَاتٍ قَرِيبَةٌ.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6],
  ido: {
    title: 'Watch me describe my town',
    steps: [
      { head: '1 · Settlement', ar: 'أَسْكُنُ فِي مَدِينَةٍ مُتَوَسِّطَةٍ وَجَمِيلَةٍ.', think: 'City = f. → -a adjectives.' },
      { head: '2 · There is (m.)', ar: 'فِي مَرْكَزِ المَدِينَةِ {w|يُوجَدُ} سُوقٌ كَبِيرٌ وَمَتْحَفٌ قَدِيمٌ.', think: 'Market, museum: m.' },
      { head: '3 · There is (f.) + where', ar: '{e|تُوجَدُ} مَكْتَبَةٌ حَدِيثَةٌ بِجَانِبِ الجَامِعَةِ.', think: 'Library: f. + location.' },
      { head: '4 · Opinion', ar: 'أُحِبُّ مَدِينَتِي لِأَنَّهَا نَظِيفَةٌ، وَلَكِنَّ المَطَارَ بَعِيدٌ.', think: 'Reason + contrast.' },
    ],
    legend: ['w', 'e'], legendLabels: { w: 'MASCULINE', e: 'FEMININE' },
    model: 'أَسْكُنُ فِي مَدِينَةٍ مُتَوَسِّطَةٍ وَجَمِيلَةٍ. فِي مَرْكَزِ المَدِينَةِ {w|يُوجَدُ} سُوقٌ كَبِيرٌ وَمَتْحَفٌ قَدِيمٌ. {e|تُوجَدُ} مَكْتَبَةٌ حَدِيثَةٌ بِجَانِبِ الجَامِعَةِ، وَخَلْفَهَا حَدِيقَةٌ عَامَّةٌ. كَمَا {w|يُوجَدُ} مُسْتَشْفًى قَرِيبٌ مِنْ بَيْتِي. أُحِبُّ مَدِينَتِي لِأَنَّهَا نَظِيفَةٌ وَفِيهَا خِدْمَاتٌ كَثِيرَةٌ، وَلَكِنَّ المَطَارَ بَعِيدٌ.',
    modelEn: 'I live in a medium-sized, beautiful city. In the city centre there is a big market and an old museum. There is a modern library next to the university, and behind it a public park. There is also a hospital near my house. I like my city because it is clean and has many services, but the airport is far away.',
    notes: 'I DO (3 min) — the website writing model built step by step. Before each place ask “m. or f.?” — the class chooses يُوجَدُ / تُوجَدُ first.',
  },
  game: {
    title: 'Places in town: match the picture',
    pick: [0, 2, 4],
    en: ['This is a hospital.', 'This is a post office.', 'This is a public park.'],
    icons: [[['fa6', 'FaHospital', 'C0392B']], [['fa6', 'FaEnvelope', '1D5FBF']], [['fa6', 'FaTree', '1E7B4F']]],
    labels: ['hospital', 'post office', 'park'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). The clue: هٰذَا (m.) for hospital and post office, هٰذِهِ (f.) for the park. Other website items: مَصْرِفٌ (bank — another word for بَنْكٌ), مَتْجَرٌ (shop), مَكْتَبَةٌ.',
  },
  sorterNotes: 'Say each place with يُوجَدُ or تُوجَدُ aloud before sorting.',
  hints: ['Is a school m. or f.?', 'Is an airport m. or f.?', 'New place: al- or -un?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 4.\nListen for: فِي مَرْكَزِ · بِجَانِبِ · بَعِيدٌ · قَرِيبَةٌ.',
  listenRoutes: 'Core: questions 1, 3 and 4. Develop / Stretch: all 5.',
  gloss: [
    ['أَسْكُنُ فِي مَدِينَةٍ مُتَوَسِّطَةٍ.', 'I live in a medium-sized city.'],
    ['فِي مَرْكَزِ المَدِينَةِ يُوجَدُ سُوقٌ قَدِيمٌ وَمَتْحَفٌ جَمِيلٌ.', 'In the city centre there is an old market and a beautiful museum.'],
    ['تُوجَدُ مَكْتَبَةٌ حَدِيثَةٌ بِجَانِبِ الجَامِعَةِ.', 'There is a modern library next to the university.'],
    ['المَطَارُ بَعِيدٌ عَنِ المَرْكَزِ، وَلَكِنَّ مَحَطَّةَ القِطَارِ قَرِيبَةٌ مِنْ بَيْتِي.', 'The airport is far from the centre, but the train station is close to my house.'],
    ['أُحِبُّ الحَدِيقَةَ العَامَّةَ لِأَنَّهَا هَادِئَةٌ.', 'I like the public park because it is quiet.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَاذَا يُوجَدُ فِي مَدِينَتِكَ؟' },
      { route: 'develop', ar: 'هَلْ تُوجَدُ جَامِعَةٌ قَرِيبَةٌ؟' },
      { route: 'develop', ar: 'أَيْنَ المَكْتَبَةُ؟' },
      { route: 'stretch', ar: 'مَا مَكَانُكَ المُفَضَّلُ فِي المَدِينَةِ؟ وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'هُنَاكَ ______ وَ ______ .' },
      { route: 'develop', ar: 'نَعَمْ، تُوجَدُ … / لَا، لَا تُوجَدُ …' },
      { route: 'develop', ar: 'هِيَ بِجَانِبِ / أَمَامَ / خَلْفَ ______ .' },
      { route: 'stretch', ar: 'مَكَانِي المُفَضَّلُ هُوَ ______ لِأَنَّهُ / لِأَنَّهَا …' },
    ],
    modelEn: ['What is there in your neighbourhood?', 'In my neighbourhood there is a mosque and a small library.'],
    notes: 'Website “Town-place information exchange” — all four prompts are the website’s. Website model: مَاذَا يُوجَدُ فِي حَيِّكَ؟ — فِي حَيِّي يُوجَدُ مَسْجِدٌ، وَتُوجَدُ مَكْتَبَةٌ صَغِيرَةٌ. — أَيْنَ المَكْتَبَةُ؟ — هِيَ بِجَانِبِ المَدْرَسَةِ. To a girl: مَدِينَتِكِ، مَكَانُكِ.',
  },
  write: {
    core: { amount: '4 sentences', how: 'Where you live + three hunāka sentences with two places each.' },
    develop: { amount: '60–80 words', how: 'Website task: size of the town, two yūjadu / tūjadu, two locations, one opinion.' },
    stretch: { amount: '80–100 words', how: 'A town guide: varied prepositions, a negative (lā yūjadu) and a balanced opinion.' },
  },
  frames: {
    core: [
      { en: 'I live in a big city / small village.', ar: 'أَسْكُنُ فِي مَدِينَةٍ كَبِيرَةٍ / قَرْيَةٍ صَغِيرَةٍ.' },
      { en: 'There is a … and a …', ar: 'هُنَاكَ ______ وَ ______ .' },
      { en: 'In my neighbourhood there is …', ar: 'فِي حَيِّي هُنَاكَ ______ .' },
      { en: 'There is a mosque near my house.', ar: 'يُوجَدُ مَسْجِدٌ قَرِيبٌ مِنْ بَيْتِي.' },
      { en: 'There is a school next to …', ar: 'تُوجَدُ مَدْرَسَةٌ بِجَانِبِ ______ .' },
    ],
    develop: [
      { en: 'In the city centre there is …', ar: 'فِي مَرْكَزِ المَدِينَةِ يُوجَدُ ______ .' },
      { en: 'There is a modern library behind …', ar: 'تُوجَدُ مَكْتَبَةٌ حَدِيثَةٌ خَلْفَ ______ .' },
      { en: 'There is no airport in my town.', ar: 'لَا يُوجَدُ مَطَارٌ فِي مَدِينَتِي.' },
      { en: 'I like my town because it is …', ar: 'أُحِبُّ مَدِينَتِي لِأَنَّهَا ______ .' },
      { en: '… but the … is far.', ar: 'وَلَكِنَّ ______ بَعِيدٌ.' },
    ],
    bank: ['يُوجَدُ', 'تُوجَدُ', 'هُنَاكَ', 'لَا يُوجَدُ', 'بِجَانِبِ', 'أَمَامَ', 'خَلْفَ', 'قَرِيبٌ مِنْ', 'بَعِيدٌ عَنْ', 'فِي مَرْكَزِ المَدِينَةِ', 'كَبِيرٌ / كَبِيرَةٌ', 'حَدِيثٌ / حَدِيثَةٌ'],
  },
  stretch: [
    ['مَدِينَةٌ صَغِيرَةٌ وَلَكِنَّهَا نَشِيطَةٌ', 'a small but lively city'],
    ['لَا يُوجَدُ … وَلَكِنْ تُوجَدُ …', 'there is no … but there is …'],
    ['فِيهَا خِدْمَاتٌ كَثِيرَةٌ', 'it has many services'],
    ['كَمَا يُوجَدُ …', 'there is also …'],
    ['مِنْ مَزَايَا مَدِينَتِي …', 'one advantage of my town is …'],
  ],
  modelEn: 'I live in a medium-sized, beautiful city. In the city centre there is a big market and an old museum. There is a modern library next to the university, and behind it a public park. There is also a hospital near my house. I like my city because it is clean and has many services, but the airport is far away.',
  find: ['yūjadu (m.)', 'tūjadu (f.)', 'a location', 'an opinion'],
  modelNotes: 'Evidence: يُوجَدُ سُوقٌ · تُوجَدُ مَكْتَبَةٌ · بِجَانِبِ الجَامِعَةِ، خَلْفَهَا · أُحِبُّ مَدِينَتِي لِأَنَّهَا … وَلَكِنَّ …',
  selfCheck: [
    { route: 'core', text: 'I named at least eight places.' },
    { route: 'core', text: 'After هُنَاكَ the place ends in -un.' },
    { route: 'develop', text: 'يُوجَدُ with m. places, تُوجَدُ with f.' },
    { route: 'develop', text: 'I located two places with a preposition.' },
    { route: 'stretch', text: 'I gave a balanced opinion with وَلَكِنَّ.' },
  ],
  exit: [0, 2, 3],
  glossary: [
    ['مَدِينَةُ النُّورِ', 'Nūr City'], ['نَشِيطَةٌ', 'lively'], ['المَرْكَزِ', 'the centre'], ['مَرْكَزٌ تِجَارِيٌّ', 'a shopping centre'], ['حَدِيثٌ', 'modern'],
    ['بِجَانِبِ', 'next to'], ['خَلْفَ', 'behind'], ['أَمَامَ', 'in front of'], ['لَا يُوجَدُ', 'there is no'], ['مَحَطَّةُ حَافِلَاتٍ', 'a bus station'],
  ],
  prep: {
    words: [['خَرِيطَةٌ', 'a map', 'pl. خَرَائِطُ'], ['قَرِيبٌ مِنْ', 'near to', 'f. قَرِيبَةٌ'], ['بَعِيدٌ عَنْ', 'far from', 'f. بَعِيدَةٌ'], ['بَيْنَ', 'between', '—'], ['كِيلُومِتْرٌ', 'a kilometre', 'pl. كِيلُومِتْرَاتٌ']],
    questionEn: 'How far is your school from your home? Guess in kilometres.',
    questionAr: 'المَدْرَسَةُ بَعِيدَةٌ عَنْ بَيْتِي …',
    homework: {
      core: 'Website F6-L01: the vocabulary tab and the “Masculine or feminine place?” sorter.',
      develop: 'Website writing task: 60–80 words introducing your (real or invented) town.',
      stretch: 'Write an 80–100-word town guide with a negative and a balanced opinion.',
    },
    wordsSource: 'The five words come from the website F6-L02 lesson (maps, distance and position).',
  },
  remember: 'Remember: يُوجَدُ + m. · تُوجَدُ + f. · هُنَاكَ never changes · new place = -un.',
});

module.exports = { meta, slides };
