'use strict';
/* F6-L07 · The Built Environment — website: Pathways › Foundation › F6 › F6-L07 (building materials, مَبْنِيٌّ / مَبْنِيَّةٌ مِنْ, يَتَمَيَّزُ / تَتَمَيَّزُ بِـ, urban vs rural with بَيْنَمَا, heritage and contemporary architecture). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F6')({
  n: 7, fileTitle: 'The_Built_Environment', chip: 'Built Environment',
  title: 'The Built Environment: Buildings, Materials and Urban Life', arabic: 'البِيئَةُ المَبْنِيَّةُ',
  focus: 'Say what buildings are made of with مَبْنِيٌّ / مَبْنِيَّةٌ مِنْ, describe their special features and compare old and new, city and countryside with بَيْنَمَا.',
  icon: 'FaBuilding', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('F6-L07', {
  support: `• Core: match four buildings to their materials — البَيْتُ مَبْنِيٌّ مِنَ الحَجَرِ.
• Develop: an accurate comparison with agreement (مَبْنِيٌّ / مَبْنِيَّةٌ) and بَيْنَمَا.
• Stretch: analyse how a contemporary building can respect heritage and propose one design feature.
• Website: “Cultural comparison should notice diversity within the Arab world and avoid presenting one building style as universal.”
• Link: the same agreement rule as F6-L05 — the building decides: m. building → مَبْنِيٌّ, f. building → مَبْنِيَّةٌ.
• Invite examples students know: mosques with domes (قُبَّةٌ) and minarets (مِئْذَنَةٌ), skyscrapers in the Gulf, mud-brick towns (e.g. Shibam in Yemen).`,
  teach: 'Materials, buildings and architecture words, then built of … · distinguished by … · whereas …',
  wedo: 'Picture match, sort material / building, fix the agreement and listen to two neighbourhoods.',
  next: { nextCode: 'F6-L08', nextTitle: 'Giving Directions: Signs, Streets and Maps', nextAr: 'إِعْطَاءُ الاِتِّجَاهَاتِ' },
  doNow: {
    questions: [
      q('What does حَجَرٌ mean?', ['stone', 'glass', 'a tower'], 'Prepared at home (F6-L06).'),
      q('What does زُجَاجٌ mean?', ['glass', 'wood', 'a building'], 'Prepared at home (F6-L06).'),
      q('Ask the price of a bag.', ['كَمْ ثَمَنُهَا؟', 'كَمْ ثَمَنُهُ؟', 'مَتَى ثَمَنُهَا؟'], 'F6-L06: a bag is feminine.'),
      q('Which sentence is accurate?', ['الحَقِيبَةُ أَغْلَى مِنَ الكِتَابِ.', 'الحَقِيبَةُ أَغْلَيَةٌ مِنَ الكِتَابِ.', 'الحَقِيبَةُ غَالِيَةٌ مِنَ الكِتَابِ.'], 'F6-L06: the comparative never changes.'),
      q('Complete: ____ المَدِينَةُ بِأَسْوَاقِهَا.', ['تَتَمَيَّزُ', 'يَتَمَيَّزُ', 'أَتَمَيَّزُ'], 'F6-L05: city is feminine.'),
    ],
    keyIdea: { text: 'The building decides the ending: a house is مَبْنِيٌّ, a school is مَبْنِيَّةٌ.', ar: 'البَيْتُ {w|مَبْنِيٌّ} مِنَ الحَجَرِ · المَدْرَسَةُ {e|مَبْنِيَّةٌ} مِنَ الطُّوبِ' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F6-L06. Questions 3–5 retrieve F6-L06 (price suffix, comparative) and F6-L05 (tatamayyazu).',
  },
  routes: {
    core: ['I can name eight materials.', 'I can say what a building is made of.'],
    develop: ['I can make مَبْنِيٌّ / مَبْنِيَّةٌ agree.', 'I can compare with بَيْنَمَا.'],
    stretch: ['I can describe architectural heritage.', 'I can write a respectful cultural comparison.'],
  },
  bridge: [
    { ar: 'عِمَارَةٌ', urdu: 'عمارت', tr: 'imārat', en: 'a building / block' },
    { ar: 'مِعْمَارٌ', urdu: 'معمار', tr: 'meʿmār', en: 'Urdu: builder · Arabic: architecture' },
    { ar: 'تُرَاثٌ', urdu: 'ورثہ / میراث', tr: 'wirsa', en: 'inheritance → heritage' },
    { ar: 'قَلْعَةٌ', urdu: 'قلعہ', tr: 'qilʿa', en: 'fort / castle' },
    { ar: 'مَعْدِنٌ', urdu: 'معدنیات', tr: 'maʿdaniyāt', en: 'minerals → metal' },
  ],
  bridgeNotes: 'URDU BRIDGE: عمارت (a building) = Arabic عِمَارَةٌ (an apartment block). معمار (Urdu: builder, mason) → مِعْمَارٌ (architecture). قلعہ (as in Lahore Fort) = قَلْعَةٌ. ورثہ / میراث (inheritance) share the root of تُرَاثٌ (heritage). معدنیات (minerals) → مَعْدِنٌ (metal).',
  core: ['مَبْنِيٌّ مِنْ', 'حَجَرٌ', 'طُوبٌ', 'خَرَسَانَةٌ', 'خَشَبٌ', 'زُجَاجٌ', 'مَعْدِنٌ', 'طِينٌ', 'نَاطِحَةُ سَحَابٍ', 'عِمَارَةٌ', 'بَيْتٌ تَقْلِيدِيٌّ', 'مَبْنًى تَارِيخِيٌّ'],
  forms: {
    'مَبْنِيٌّ مِنْ': { tag: 'm · f · pl', forms: [{ l: 'm.', ar: 'مَبْنِيٌّ' }, { l: 'f.', ar: 'مَبْنِيَّةٌ' }, { l: 'buildings', ar: 'مَبَانٍ مَبْنِيَّةٌ' }] },
    'نَاطِحَةُ سَحَابٍ': { tag: 'sg · pl', forms: [{ l: 'one', ar: 'نَاطِحَةُ سَحَابٍ' }, { l: 'pl.', ar: 'نَاطِحَاتُ سَحَابٍ' }] },
    'عِمَارَةٌ': { tag: 'f. · pl', forms: [{ l: 'one', ar: 'عِمَارَةٌ' }, { l: 'pl.', ar: 'عِمَارَاتٌ' }] },
    'مَبْنًى تَارِيخِيٌّ': { tag: 'm. · pl', forms: [{ l: 'one', ar: 'مَبْنًى تَارِيخِيٌّ' }, { l: 'pl.', ar: 'مَبَانٍ تَارِيخِيَّةٌ' }] },
  },
  vocabSlides: 4,
  vocabNotes: {
    0: 'Materials: after مِنْ + الـ they end in -i: مِنَ الحَجَرِ، مِنَ الطُّوبِ، مِنَ الزُّجَاجِ.',
    1: 'نَاطِحَةُ سَحَابٍ = “cloud-butter” (skyscraper) — students enjoy the image. Detached / semi-detached are useful for UK homes.',
    2: 'FLEX: architecture adjectives with m. / f. — the same agreement rule as F6-L05.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · built of … (website rules 1 and 2)', title: 'The house is built of stone', ar: 'مَبْنِيٌّ / مَبْنِيَّةٌ مِنْ',
      cols: [{ label: 'Masculine building', w: 6.1, size: 24 }, { label: 'Feminine building', w: 6.23, size: 24 }],
      rows: [
        { core: true, cells: [P('البَيْتُ {w|مَبْنِيٌّ} مِنَ الحَجَرِ.', 'The house is built of stone.'), P('المَدْرَسَةُ {e|مَبْنِيَّةٌ} مِنَ الطُّوبِ.', 'The school is built of brick.')] },
        { core: true, cells: [P('الجِسْرُ {w|مَبْنِيٌّ} مِنَ المَعْدِنِ.', 'The bridge is built of metal.'), P('العِمَارَةُ {e|مَبْنِيَّةٌ} مِنَ الخَرَسَانَةِ.', 'The block is built of concrete.')] },
        { cells: [P('المَسْجِدُ {w|مَبْنِيٌّ} مِنَ الحَجَرِ وَالخَشَبِ.', 'The mosque is built of stone and wood.'), P('نَاطِحَةُ السَّحَابِ {e|مَبْنِيَّةٌ} مِنَ الزُّجَاجِ.', 'The skyscraper is built of glass.')] },
        { cells: [P('مِمَّ بُنِيَ هٰذَا البَيْتُ؟', 'What is this house built from?'), P('البُيُوتُ {e|مَبْنِيَّةٌ} مِنَ الطِّينِ.', 'The houses are built of mud.')] },
      ],
      foot: 'The building decides the ending. Plural buildings take mabniyya (like F6-L05: ash-shawāriʿu muktaẓẓa).',
      notes: `GRAMMAR PART 1 — website rules “Describe a masculine building material” (بَيْتٌ، مَسْجِدٌ، جِسْرٌ → مَبْنِيٌّ مِنْ) and “… a feminine building material” (مَدْرَسَةٌ، عِمَارَةٌ → مَبْنِيَّةٌ مِنْ).
Website overview: “The passive participle agrees with the building noun.”
Website common error: العِمَارَةُ مَبْنِيٌّ ✗ → مَبْنِيَّةٌ ✓. Question (website speaking): مِمَّ بُنِيَ …؟ (= مِنْ + مَا).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · features and contrast (website rules 3 and 4)', title: 'Known for … whereas …', ar: 'تَتَمَيَّزُ بِـ · بَيْنَمَا',
      cards: [
        { chip: 'FEATURE · m.', color: '1D5FBF', head: 'يَتَمَيَّزُ بِـ', big: 'يَتَمَيَّزُ المَسْجِدُ بِمِئْذَنَتِهِ التَّارِيخِيَّةِ.', en: 'The mosque is known for its historic minaret.', clue: 'Mosque m. → ya-.' },
        { chip: 'FEATURE · f.', color: 'C0386B', head: 'تَتَمَيَّزُ بِـ', big: 'تَتَمَيَّزُ القَرْيَةُ بِبُيُوتِهَا الطِّينِيَّةِ.', en: 'The village is known for its mud houses.', clue: 'Village f. → ta-.' },
        { chip: 'WHEREAS', color: '6B4C9A', head: '… بَيْنَمَا …', big: 'المَدِينَةُ مُكْتَظَّةٌ، بَيْنَمَا القَرْيَةُ هَادِئَةٌ.', en: 'The city is crowded, whereas the village is quiet.', clue: 'Two complete, different ideas.' },
      ],
      error: { text: 'Website common error: whereas needs two complete ideas.', pairs: [['المَدِينَةُ مُكْتَظَّةٌ، بَيْنَمَا القَرْيَةُ هَادِئَةٌ.', 'المَدِينَةُ مُكْتَظَّةٌ بَيْنَمَا مُكْتَظَّةٌ.']] },
      notes: `GRAMMAR PART 2 — website rules “Describe architectural identity” (يَتَمَيَّزُ / تَتَمَيَّزُ بِـ from the subject’s gender) and “Contrast city and countryside” (…، بَيْنَمَا … — each side a complete idea that creates a meaningful contrast).
Website example: تَكْثُرُ نَاطِحَاتُ السَّحَابِ فِي المَدِينَةِ، بَيْنَمَا تَكْثُرُ البُيُوتُ الفَسِيحَةُ فِي الرِّيفِ.`,
    },
  ],
  quick: [0, 1, 2, 4],
  rest: [5, 6, 7],
  ido: {
    title: 'Watch me compare two buildings',
    steps: [
      { head: '1 · Introduce', ar: 'فِي مَدِينَتِي مَسْجِدٌ تَارِيخِيٌّ وَمَرْكَزٌ ثَقَافِيٌّ حَدِيثٌ.', think: 'Two buildings: both m.' },
      { head: '2 · Old one', ar: 'المَسْجِدُ {w|مَبْنِيٌّ} مِنَ الحَجَرِ، وَ{w|يَتَمَيَّزُ} بِقُبَّتِهِ.', think: 'Material + feature.' },
      { head: '3 · New one', ar: 'أَمَّا المَرْكَزُ فَهُوَ {w|مَبْنِيٌّ} مِنَ الزُّجَاجِ وَالمَعْدِنِ.', think: 'As for …' },
      { head: '4 · Contrast + opinion', ar: 'المَسْجِدُ هَادِئٌ وَتَقْلِيدِيٌّ، {m|بَيْنَمَا} المَرْكَزُ نَشِيطٌ وَمُعَاصِرٌ.', think: 'Whereas + two ideas.' },
    ],
    legend: ['w', 'm'], legendLabels: { w: 'BUILT · FEATURE', m: 'WHEREAS' },
    model: 'فِي مَدِينَتِي مَسْجِدٌ تَارِيخِيٌّ وَمَرْكَزٌ ثَقَافِيٌّ حَدِيثٌ. المَسْجِدُ {w|مَبْنِيٌّ} مِنَ الحَجَرِ، وَ{w|يَتَمَيَّزُ} بِقُبَّتِهِ وَأَبْوَابِهِ الخَشَبِيَّةِ. أَمَّا المَرْكَزُ فَهُوَ {w|مَبْنِيٌّ} مِنَ الزُّجَاجِ وَالمَعْدِنِ، وَفِيهِ قَاعَاتٌ فَسِيحَةٌ. المَسْجِدُ هَادِئٌ وَتَقْلِيدِيٌّ، {m|بَيْنَمَا} المَرْكَزُ نَشِيطٌ وَمُعَاصِرٌ. أُحِبُّ المَبْنَيَيْنِ لِأَنَّ الأَوَّلَ يَحْمِي التُّرَاثَ وَالثَّانِيَ يُقَدِّمُ خِدْمَاتٍ جَدِيدَةً.',
    modelEn: 'In my city there is a historic mosque and a modern cultural centre. The mosque is built of stone and is known for its dome and wooden doors. As for the centre, it is built of glass and metal and has spacious halls. The mosque is quiet and traditional, whereas the centre is lively and contemporary. I like both buildings because the first protects heritage and the second offers new services.',
    notes: 'I DO (3 min) — the website writing model built step by step (both buildings are masculine; ask how sentence 2 would change for مَدْرَسَةٌ → مَبْنِيَّةٌ، تَتَمَيَّزُ).',
  },
  game: {
    title: 'Materials: match the picture',
    pick: [0, 2, 3],
    en: ['The building is built of brick.', 'The house is built of wood.', 'The old building is built of stone.'],
    icons: [[['fa6', 'FaBuilding', 'C0392B'], ['fa6', 'FaCubes', 'C77700']], [['fa6', 'FaHouse', '8A5A2B'], ['fa6', 'FaTree', '1E7B4F']], [['fa6', 'FaLandmark', '6B6B6B'], ['fa6', 'FaMountain', '5C4033']]],
    labels: ['brick', 'wood', 'stone'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). All three buildings are masculine → مَبْنِيٌّ. Stretch: make item 1 feminine (العِمَارَةُ مَبْنِيَّةٌ مِنَ الطُّوبِ). Other website items: glass, a building project (مَشْرُوعُ بِنَاءٍ), urban life.',
  },
  sorterNotes: 'After sorting, pair each building with a material in a sentence (… مَبْنِيٌّ / مَبْنِيَّةٌ مِنْ …).',
  hints: ['Block (عِمَارَةٌ): m. or f.?', 'Village: which verb form?', 'Does whereas have two ideas?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 4.\nListen for: مَبْنِيَّةٌ مِنَ … · أَمَّا … · بَيْنَمَا.',
  listenRoutes: 'Core: questions 1, 3 and 4. Develop / Stretch: all 5, then give your own preference.',
  gloss: [
    ['فِي الحَيِّ القَدِيمِ بُيُوتٌ تَقْلِيدِيَّةٌ مَبْنِيَّةٌ مِنَ الحَجَرِ وَالطِّينِ.', 'In the old neighbourhood there are traditional houses built of stone and clay.'],
    ['تَتَمَيَّزُ البُيُوتُ بِأَبْوَابِهَا الخَشَبِيَّةِ وَسَاحَاتِهَا الدَّاخِلِيَّةِ.', 'The houses are known for their wooden doors and inner courtyards.'],
    ['أَمَّا فِي الحَيِّ الجَدِيدِ فَتُوجَدُ عِمَارَاتٌ مُعَاصِرَةٌ مَبْنِيَّةٌ مِنَ الخَرَسَانَةِ وَالزُّجَاجِ.', 'As for the new neighbourhood, there are contemporary blocks built of concrete and glass.'],
    ['الحَيُّ الجَدِيدُ مُكْتَنِزٌ، بَيْنَمَا الحَيُّ القَدِيمُ أَكْثَرُ هُدُوءًا.', 'The new neighbourhood is dense, whereas the old one is quieter.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مِمَّ بُنِيَ هٰذَا المَبْنَى؟' },
      { route: 'develop', ar: 'صِفْ مَبْنًى تَارِيخِيًّا فِي مَدِينَتِكَ.' },
      { route: 'develop', ar: 'مَا الفَرْقُ بَيْنَ الحَيِّ القَدِيمِ وَالجَدِيدِ؟' },
      { route: 'stretch', ar: 'أَيُّ نَوْعٍ مِنَ العُمْرَانِ تُفَضِّلُ؟ وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'هُوَ مَبْنِيٌّ / هِيَ مَبْنِيَّةٌ مِنَ ______ .' },
      { route: 'develop', ar: 'يَتَمَيَّزُ / تَتَمَيَّزُ بِـ ______ .' },
      { route: 'develop', ar: 'الحَيُّ القَدِيمُ ______ ، بَيْنَمَا الحَيُّ الجَدِيدُ ______ .' },
      { route: 'stretch', ar: 'أُفَضِّلُ … لِأَنَّهُ يَحْمِي التُّرَاثَ / يُقَدِّمُ …' },
    ],
    modelEn: ['What is this house built from?', 'It is built of stone and wood.'],
    notes: 'Website “Architecture comparison” — all four prompts are the website’s. Show two photos (an old and a new building). Website model: مِمَّ بُنِيَ هٰذَا البَيْتُ؟ — هُوَ مَبْنِيٌّ مِنَ الحَجَرِ وَالخَشَبِ. — كَيْفَ يَخْتَلِفُ عَنِ العِمَارَةِ الحَدِيثَةِ؟ — البَيْتُ تَقْلِيدِيٌّ وَفَسِيحٌ، بَيْنَمَا العِمَارَةُ مُعَاصِرَةٌ وَمُكْتَنِزَةٌ.',
  },
  write: {
    core: { amount: '4 sentences', how: 'Four buildings with their materials (built of …).' },
    develop: { amount: '60–80 words', how: 'An old and a new building with agreement and whereas.' },
    stretch: { amount: '80–100 words', how: 'Website task + how a modern building can respect heritage (one design idea).' },
  },
  frames: {
    core: [
      { en: 'The house is built of stone.', ar: 'البَيْتُ مَبْنِيٌّ مِنَ الحَجَرِ.' },
      { en: 'The school is built of brick.', ar: 'المَدْرَسَةُ مَبْنِيَّةٌ مِنَ الطُّوبِ.' },
      { en: 'The bridge is built of metal.', ar: 'الجِسْرُ مَبْنِيٌّ مِنَ المَعْدِنِ.' },
      { en: 'The tower is built of glass.', ar: 'البُرْجُ مَبْنِيٌّ مِنَ الزُّجَاجِ.' },
      { en: 'In my town there is a historic building.', ar: 'فِي مَدِينَتِي مَبْنًى تَارِيخِيٌّ.' },
    ],
    develop: [
      { en: 'It is known for its …', ar: 'يَتَمَيَّزُ / تَتَمَيَّزُ بِـ ______ .' },
      { en: 'As for the new building, it is …', ar: 'أَمَّا المَبْنَى الجَدِيدُ فَهُوَ ______ .' },
      { en: 'The old area is quiet, whereas the new one is lively.', ar: 'الحَيُّ القَدِيمُ هَادِئٌ، بَيْنَمَا الجَدِيدُ نَشِيطٌ.' },
      { en: 'The city is dense, whereas the countryside is spacious.', ar: 'المَدِينَةُ مُكْتَنِزَةٌ، بَيْنَمَا الرِّيفُ فَسِيحٌ.' },
      { en: 'I prefer … because …', ar: 'أُفَضِّلُ ______ لِأَنَّ ______ .' },
    ],
    bank: ['مَبْنِيٌّ', 'مَبْنِيَّةٌ', 'مِنَ الحَجَرِ', 'مِنَ الطُّوبِ', 'مِنَ الزُّجَاجِ', 'مِنَ الخَشَبِ', 'يَتَمَيَّزُ بِـ', 'تَتَمَيَّزُ بِـ', 'بَيْنَمَا', 'تَقْلِيدِيٌّ', 'مُعَاصِرٌ', 'فَسِيحٌ'],
  },
  stretch: [
    ['تَجْمَعُ المَدِينَةُ بَيْنَ التُّرَاثِ وَالحَدَاثَةِ', 'the city combines heritage and modernity'],
    ['يَحْتَرِمُ تَصْمِيمُهُ المِعْمَارَ القَدِيمَ', 'its design respects the old architecture'],
    ['يُوَفِّرُ مَسَاحَاتٍ فَسِيحَةً', 'it provides spacious areas'],
    ['يَحْمِي التُّرَاثَ وَيُطَوِّرُ المَدِينَةَ', 'it protects heritage and develops the city'],
    ['أَقْتَرِحُ أَنْ …', 'I suggest that …'],
  ],
  modelEn: 'In my city there is a historic mosque and a modern cultural centre. The mosque is built of stone and is known for its dome and wooden doors. As for the centre, it is built of glass and metal and has spacious halls. The mosque is quiet and traditional, whereas the centre is lively and contemporary. I like both buildings because the first protects heritage and the second offers new services.',
  find: ['built of', 'known for', 'whereas', 'an opinion'],
  modelNotes: 'Evidence: مَبْنِيٌّ مِنَ الحَجَرِ · يَتَمَيَّزُ بِقُبَّتِهِ · بَيْنَمَا المَرْكَزُ نَشِيطٌ · أُحِبُّ المَبْنَيَيْنِ لِأَنَّ …',
  selfCheck: [
    { route: 'core', text: 'I named four materials.' },
    { route: 'core', text: 'مِنَ + material (-i).' },
    { route: 'develop', text: 'مَبْنِيٌّ / مَبْنِيَّةٌ agree with the building.' },
    { route: 'develop', text: 'بَيْنَمَا joins two complete ideas.' },
    { route: 'stretch', text: 'Heritage + a design suggestion.' },
  ],
  exit: [0, 1, 4],
  glossary: [
    ['تَجْمَعُ بَيْنَ', 'combines'], ['العُمْرَانِ المُعَاصِرِ', 'contemporary development'], ['القَلْعَةِ', 'the citadel'], ['نَوَافِذِهَا', 'its windows'], ['أَقْوَاسِهَا', 'its arches'],
    ['مَرْكَزٌ ثَقَافِيٌّ', 'a cultural centre'], ['تَصْمِيمُهُ', 'its design'], ['يُوَفِّرُ', 'provides'], ['لِلزُّوَّارِ', 'for visitors'], ['السُّكَّانُ', 'the residents'],
  ],
  prep: {
    words: [['اِتِّجَاهٌ', 'a direction', 'pl. اِتِّجَاهَاتٌ'], ['اِذْهَبْ / اِذْهَبِي', 'go! (m. / f.)', '—'], ['اِنْعَطِفْ / اِنْعَطِفِي', 'turn! (m. / f.)', '—'], ['يَمِينًا · يَسَارًا', 'right · left', '—'], ['إِشَارَةُ المُرُورِ', 'traffic lights', '—']],
    questionEn: 'How do you get from your front door to the nearest shop? Think of two directions.',
    questionAr: 'اِذْهَبْ … ثُمَّ اِنْعَطِفْ …',
    homework: {
      core: 'Website F6-L07: the vocabulary tab and the “Material or building?” sorter.',
      develop: 'Compare an old and a new building (60–80 words) with agreement and whereas.',
      stretch: 'Website writing task (80–100 words) + one design idea that respects heritage.',
    },
    wordsSource: 'The five words come from the website F6-L08 lesson (giving directions).',
  },
  remember: 'Remember: m. building → مَبْنِيٌّ · f. building → مَبْنِيَّةٌ · بَيْنَمَا + two complete ideas.',
});

module.exports = { meta, slides };
