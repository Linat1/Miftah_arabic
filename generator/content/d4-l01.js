'use strict';
/* D4-L01 · The Natural World — Environment and Climate Vocabulary — website: Pathways › Development › D4 › D4-L01 (natural features, climate and resources, formal description يَسُودُ / يَتَّسِمُ بِـ / يَتَمَيَّزُ بِـ / يَقَعُ فِي / غَنِيٌّ بِـ, noun–adjective and subject–verb agreement). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D4')({
  n: 1, fileTitle: 'The_Natural_World_Environment_and_Climate', chip: 'Natural World',
  title: 'The Natural World — Environment and Climate Vocabulary', arabic: 'العَالَمُ الطَّبِيعِيُّ — مُفْرَدَاتُ البِيئَةِ وَالمَنَاخِ',
  focus: 'Describe the landscape and climate of a country formally: natural features, agreeing adjectives, and the formal verbs يَسُودُ (prevails), يَتَّسِمُ بِـ (is characterised by) and تَتَمَيَّزُ بِـ (is distinguished by).',
  icon: 'FaMountainSun', iconSet: 'fa6',
});

const site = D.site('D4-L01');
// two website quiz items have options that differ only in a final vowel: replace one distractor in each
const quiz = site.grammar.quiz.map((it, i) => (i === 0 ? { ...it, options: ['صَحْرَاءُ وَاسِعَةٌ', 'صَحْرَاءُ وَاسِعٌ', 'صَحَارِي وَاسِعُونَ'], answer: 0 }
  : i === 3 ? { ...it, options: ['تَتَمَيَّزُ المِنْطَقَةُ بِجِبَالٍ عَالِيَةٍ.', 'يَتَمَيَّزُ المِنْطَقَةُ بِجِبَالٍ عَالِيَةٍ.', 'تَتَمَيَّزُ المِنْطَقَةُ إِلَى جِبَالٍ عَالِيَةٍ.'], answer: 0 } : it));
const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D4-L01', {
  support: `• NEW UNIT (D4 · Environment, Weather and Technology). Core: 12 landscape words + “There is … / The climate is …” with agreeing adjectives (صَحْرَاءُ وَاسِعَةٌ · مَنَاخٌ جَافٌّ). Develop: the formal verbs يَسُودُ / يَتَّسِمُ بِـ / تَتَمَيَّزُ بِـ. Stretch: contrast two regions (أَمَّا … فَـ / بَيْنَمَا) and end with an environmental comment.
• Grammar link: تَتَمَيَّزُ بِـ is from F6-L05 (towns) and يَقَعُ فِي from F6; agreement is the D2 / D3 habit.
• Map idea: show a physical map of Morocco and Oman (the two website texts) and label north / south / coast / desert in Arabic.
• Careful: country names are mostly feminine (عُمَانُ، مِصْرُ) but some are masculine (المَغْرِبُ، العِرَاقُ، الأُرْدُنُّ) — check the verb!`,
  teach: 'Landscape words, agreement and three formal verbs.',
  wedo: 'Picture match, sort the words, fix and listen: the nature of Morocco.',
  next: { nextCode: 'D4-L02', nextTitle: 'Weather Patterns — Describing and Comparing Weather', nextAr: 'أَنْمَاطُ الطَّقْسِ' },
  objectives: ['Name natural features and climate types in Arabic.', 'Make adjectives agree with the noun (صَحْرَاءُ وَاسِعَةٌ).', 'Describe a climate formally with يَسُودُ and يَتَّسِمُ بِـ.', 'Contrast two regions of a country in connected Arabic.'],
  rulesAr: 'قَوَاعِدُ وَصْفِ العَالَمِ الطَّبِيعِيِّ',
  rulesTitle: 'Grammar for the natural world',
  flexGroups: [2],
  doNow: {
    questions: [
      q('What does المَنَاخُ mean?', ['the climate', 'the weather', 'the environment'], 'Prepared at home (D3-L12).'),
      q('What does الغَابَةُ mean?', ['the forest', 'the desert', 'the island'], 'Prepared at home (D3-L12).'),
      q('Choose the accurate sentence.', ['تَتَمَيَّزُ المَدِينَةُ بِحَدَائِقِهَا.', 'تَتَمَيَّزُ المَدِينَةُ إِلَى حَدَائِقِهَا.', 'يَتَمَيَّزُ المَدِينَةُ بِحَدَائِقِهَا.'], 'F6-L05: tatamayyazu bi-.'),
      q('Which adjective agrees with مَدِينَةٌ?', ['كَبِيرَةٌ', 'كَبِيرٌ', 'كِبَارٌ'], 'D2 / D3: feminine noun → -atun.'),
      q('Complete: أَطْمَحُ إِلَى أَنْ أُصْبِحَ مُهَنْدِسَةَ ___ .', ['بِيئَةٍ', 'بِيئَةٌ', 'بِيئَةً'], 'D3: environmental engineer — today’s topic!'),
    ],
    keyIdea: { text: 'Formal Arabic describes a climate with a verb: the climate PREVAILS, the coast IS CHARACTERISED BY …', ar: '{w|يَسُودُ} المَنَاخُ الصَّحْرَاوِيُّ · {k|يَتَّسِمُ} السَّاحِلُ {k|بِـ}مَنَاخٍ مُعْتَدِلٍ' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of D3-L12. Questions 3–4 retrieve F6-L05 and the agreement habit; question 5 links D3 (Amal, environmental engineer) to D4.',
  },
  routes: {
    core: ['I can name twelve natural features.', 'I can describe a place with an agreeing adjective.'],
    develop: ['I can use yasūdu and yattasimu bi- accurately.', 'I can say what a country is rich in.'],
    stretch: ['I can contrast two regions of a country.', 'I can add a justified environmental comment.'],
  },
  bridge: [
    { ar: 'بِيئَةٌ', urdu: 'ماحول', tr: 'māhaul', en: 'environment (meaning only)' },
    { ar: 'صَحْرَاءُ', urdu: 'صحرا', tr: 'sahrā', en: 'desert' },
    { ar: 'جَزِيرَةٌ', urdu: 'جزیرہ', tr: 'jazīra', en: 'island' },
    { ar: 'سَاحِلٌ', urdu: 'ساحل', tr: 'sāhil', en: 'coast' },
    { ar: 'مُعْتَدِلٌ', urdu: 'معتدل', tr: 'muʿtadil', en: 'moderate → mild' },
  ],
  bridgeNotes: 'URDU BRIDGE: صحرا، جزیرہ، ساحل، معتدل are shared (and دریا ≠ Arabic: Arabic نَهْرٌ = river). بِيئَةٌ has no Urdu cognate: link it to ماحول — but note Urdu ماحول comes from Arabic مُحِيطٌ (surroundings).',
  core: ['البِيئَةُ', 'المَنَاخُ', 'الطَّقْسُ', 'الصَّحْرَاءُ', 'الغَابَةُ', 'الجَبَلُ / الجِبَالُ', 'البَحْرُ', 'النَّهْرُ / الأَنْهَارُ', 'السَّاحِلُ', 'الجَزِيرَةُ', 'جَافٌّ / جَافَّةٌ', 'رَطْبٌ / رَطْبَةٌ'],
  forms: {
    'الصَّحْرَاءُ': sp('الصَّحَارِي / الصَّحَارَى'), 'الغَابَةُ': sp('الغَابَاتُ'), 'البَحْرُ': sp('البِحَارُ'), 'البُحَيْرَةُ': sp('البُحَيْرَاتُ'), 'السَّاحِلُ': sp('السَّوَاحِلُ'), 'الجَزِيرَةُ': sp('الجُزُرُ'),
  },
  vocabNotes: {
    0: 'Natural features. Cards show the plural where useful. الصَّحْرَاءُ is FEMININE (no ة, but -āʾ): صَحْرَاءُ وَاسِعَةٌ.',
    1: 'Climate and resources. The adjectives show m. / f.: مَنَاخٌ جَافٌّ but مِنْطَقَةٌ جَافَّةٌ. Non-human plurals take a feminine singular adjective: جِبَالٌ عَالِيَةٌ.',
    2: 'Formal description (FLEX for Core): six formal verbs / phrases. Each one controls a preposition: يَتَّسِمُ بِـ، يَتَمَيَّزُ بِـ، يَقَعُ فِي، غَنِيٌّ بِـ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · agreement (website rules 1 and 4)', title: 'The adjective and the verb follow the noun', ar: 'المُطَابَقَةُ',
      cols: [{ label: 'Masculine noun', w: 4.4, size: 23 }, { label: 'Feminine noun', w: 4.4, size: 23 }, { label: 'Non-human plural', w: 3.53, size: 23 }],
      rows: [
        { core: true, cells: [P('مَنَاخٌ {w|جَافٌّ}', 'a dry climate'), P('صَحْرَاءُ {e|وَاسِعَةٌ}', 'a vast desert'), P('جِبَالٌ {e|عَالِيَةٌ}', 'high mountains')] },
        { core: true, cells: [P('سَاحِلٌ {w|طَوِيلٌ}', 'a long coast'), P('غَابَةٌ {e|كَثِيفَةٌ}', 'a dense forest'), P('سُهُولٌ {e|خَصْبَةٌ}', 'fertile plains')] },
        { cells: [P('{w|يَتَمَيَّزُ} البَلَدُ بِجِبَالِهِ.', 'The country is known for its mountains.'), P('{e|تَتَمَيَّزُ} المِنْطَقَةُ بِسُهُولٍ.', 'The region is known for plains.'), P('تَتَمَيَّزُ الجُزُرُ بِشَوَاطِئِهَا.', 'The islands …')] },
      ],
      ltr: true,
      foot: 'Non-human plurals (mountains, plains, islands) take a FEMININE SINGULAR adjective and verb: jibālun ʿāliyatun.',
      notes: `GRAMMAR PART 1 — website rules “Adjective agreement” (a feminine noun normally takes a feminine adjective; a masculine noun a masculine adjective) and “تَتَمَيَّزُ بِـ with a feminine subject”. Website examples: صَحْرَاءُ وَاسِعَةٌ · مَنَاخٌ جَافٌّ · تَتَمَيَّزُ المِنْطَقَةُ بِسُهُولٍ خَصْبَةٍ.
The non-human plural column is the website quiz item 6 (جِبَالٌ عَالِيَةٌ) made explicit. Core: rows 1–2.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · formal climate verbs (website rules 2–3) · Develop / Stretch', title: 'Prevails · is characterised by · is rich in', ar: 'يَسُودُ · يَتَّسِمُ بِـ · غَنِيٌّ بِـ',
      cards: [
        { chip: 'PREVAILS · DEVELOP', color: '1D5FBF', head: 'يَسُودُ + المَنَاخُ', big: 'يَسُودُ المَنَاخُ الصَّحْرَاوِيُّ فِي دَاخِلِ البِلَادِ.', en: 'A desert climate prevails in the interior.', clue: 'The climate is the subject.' },
        { chip: 'CHARACTERISED · DEVELOP', color: '6B4C9A', head: 'يَتَّسِمُ بِـ', big: 'يَتَّسِمُ السَّاحِلُ بِمَنَاخٍ مُعْتَدِلٍ.', en: 'The coast has a mild climate.', clue: 'bi- + noun in -in.' },
        { chip: 'RICH IN · CORE', color: '1E7B4F', head: 'غَنِيٌّ بِـ', big: 'البَلَدُ غَنِيٌّ بِالمَوَارِدِ الطَّبِيعِيَّةِ.', en: 'The country is rich in natural resources.', clue: 'ghaniyyun bi-, not min.' },
      ],
      error: { text: 'Website mistake: yattasimu needs bi-.', pairs: [['يَتَّسِمُ السَّاحِلُ بِمَنَاخٍ مُعْتَدِلٍ.', 'يَتَّسِمُ السَّاحِلُ مَنَاخٍ مُعْتَدِلٍ.']] },
      notes: `GRAMMAR PART 2 — website rules “يَسُودُ for a prevailing climate” (the climate or weather feature is the subject after يَسُودُ) and “يَتَّسِمُ بِـ” (the preposition بِـ introduces the characteristic and makes the following noun genitive). غَنِيٌّ بِـ is from the vocabulary and quiz item 5.
Website common error: “Do not select a sentence merely because its words are familiar. Check meaning, agreement, governing prepositions and verb endings.”`,
    },
  ],
  quick: [0, 2, 3, 4],
  rest: [5, 6, 7], // quiz 2 (yasūda / yasūdu) differs only in the final vowel — covered by the yasūdu card
  ido: {
    title: 'Watch me describe a country’s landscape and climate',
    steps: [
      { head: 'Location', ar: 'يَقَعُ المَغْرِبُ فِي شَمَالِ إِفْرِيقِيَا.', think: 'al-Maghrib is masculine → yaqaʿu.' },
      { head: 'Features', ar: '{w|يَتَمَيَّزُ} بِجِبَالٍ {e|عَالِيَةٍ} وَسَوَاحِلَ {e|طَوِيلَةٍ}.', think: 'Non-human plurals → -a.' },
      { head: 'Region 1', ar: '{k|يَتَّسِمُ} السَّاحِلُ {k|بِمَنَاخٍ} مُعْتَدِلٍ وَرَطْبٍ.', think: 'yattasimu + bi-.' },
      { head: 'Region 2', ar: 'أَمَّا فِي الجَنُوبِ فَ{w|يَسُودُ} المَنَاخُ الصَّحْرَاوِيُّ.', think: 'Contrast: ammā … fa-.' },
    ],
    legend: ['w', 'e', 'k'], legendLabels: { w: 'FORMAL VERB', e: 'AGREEMENT', k: 'yattasimu bi-' },
    model: 'يَقَعُ المَغْرِبُ فِي شَمَالِ إِفْرِيقِيَا، وَ{w|يَتَمَيَّزُ} بِتَنَوُّعٍ طَبِيعِيٍّ كَبِيرٍ: جِبَالٌ {e|عَالِيَةٌ} وَسَوَاحِلُ {e|طَوِيلَةٌ} وَسُهُولٌ {e|خَصْبَةٌ}. {k|يَتَّسِمُ} السَّاحِلُ {k|بِمَنَاخٍ} مُعْتَدِلٍ وَرَطْبٍ، أَمَّا فِي الجَنُوبِ فَ{w|يَسُودُ} المَنَاخُ الصَّحْرَاوِيُّ الجَافُّ.',
    modelEn: 'Morocco lies in North Africa and is known for great natural variety: high mountains, long coasts and fertile plains. The coast has a mild, humid climate, whereas in the south a dry desert climate prevails.',
    notes: 'I DO (3 min) — built from the website listening and writing model (Morocco). Think aloud: “Is the country masculine or feminine? Is the noun a non-human plural? Which preposition does the verb need?”',
  },
  patternEn: ['a vast desert', 'A desert climate prevails in the interior of the country.', 'The coast is characterised by a mild climate.'],
  game: {
    title: 'What is this? Match the picture',
    pick: [0, 2, 3],
    en: ['This is a forest.', 'This is a desert.', 'This is a sea.'],
    icons: [[['fa6', 'FaTree', '1E7B4F'], ['fa6', 'FaTree', '2E8B57']], [['fa6', 'FaSun', 'C77700'], ['fa6', 'FaWind', 'B08D57']], [['fa6', 'FaWater', '1D5FBF'], ['fa6', 'FaShip', '5A6472']]],
    labels: ['trees', 'sun and sand', 'water and ship'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Ask: why هٰذِهِ for forest and desert but هٰذَا for sea? (feminine / masculine — الصَّحْرَاءُ is feminine without ة). Other website cards: هٰذَا جَبَلٌ · هٰذَا وَادٍ · يَجِبُ أَنْ نَحْمِيَ البِيئَةَ.',
  },
  sorterNotes: 'Then pick one word from each group and make one formal sentence: يَتَّسِمُ السَّاحِلُ بِـ … / البَلَدُ غَنِيٌّ بِـ …',
  hints: ['ṣaḥrāʾ: masculine or feminine?', 'Which preposition after yattasimu?', 'al-minṭaqa is feminine: ya- or ta-?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: الشَّمَالِ · السَّاحِلُ · الجَنُوبِ.',
  listenRoutes: 'Core: questions 1–3. Develop / Stretch: all 6.',
  gloss: [
    ['تَتَنَوَّعُ الطَّبِيعَةُ فِي المَغْرِبِ.', 'Nature in Morocco is varied.'],
    ['فِي الشَّمَالِ تَمْتَدُّ جِبَالٌ عَالِيَةٌ،', 'In the north, high mountains stretch out,'],
    ['وَيَتَّسِمُ السَّاحِلُ بِمَنَاخٍ مُعْتَدِلٍ وَرَطْبٍ.', 'and the coast has a mild, humid climate.'],
    ['أَمَّا فِي الجَنُوبِ فَيَسُودُ المَنَاخُ الصَّحْرَاوِيُّ الجَافُّ.', 'As for the south, a dry desert climate prevails.'],
    ['وَتَقَعُ بَعْضُ الوَاحَاتِ قُرْبَ الأَوْدِيَةِ، حَيْثُ تَتَوَفَّرُ المِيَاهُ الجَوْفِيَّةُ.', 'Some oases lie near the valleys, where groundwater is available.'],
  ],
  patch: {
    grammar: { quiz },
    speaking: {
      model: [
        ['A', 'كَيْفَ تَصِفُ الطَّبِيعَةَ فِي بَلَدٍ عَرَبِيٍّ؟', 'How would you describe nature in an Arab country?'],
        ['B', 'تَتَمَيَّزُ عُمَانُ بِسَوَاحِلَ طَوِيلَةٍ وَجِبَالٍ عَالِيَةٍ، وَيَسُودُ فِيهَا مَنَاخٌ حَارٌّ وَجَافٌّ فِي مُعْظَمِ السَّنَةِ.', 'Oman is known for long coasts and high mountains, and a hot, dry climate prevails for most of the year.'],
      ],
    },
    writing: {
      model: 'يَتَمَيَّزُ المَغْرِبُ بِتَنَوُّعٍ طَبِيعِيٍّ كَبِيرٍ. فِي الشَّمَالِ تَمْتَدُّ جِبَالُ الرِّيفِ، وَيَتَّسِمُ السَّاحِلُ بِمَنَاخٍ مُعْتَدِلٍ وَرَطْبٍ. أَمَّا فِي الدَّاخِلِ فَتُوجَدُ سُهُولٌ خَصْبَةٌ تُسَاعِدُ عَلَى الزِّرَاعَةِ. وَفِي الجَنُوبِ يَسُودُ المَنَاخُ الصَّحْرَاوِيُّ الجَافُّ، وَتَقَعُ وَاحَاتٌ قُرْبَ بَعْضِ الأَوْدِيَةِ. كَمَا أَنَّ البِلَادَ غَنِيَّةٌ بِمَوَارِدَ طَبِيعِيَّةٍ مُتَنَوِّعَةٍ. فِي رَأْيِي، يَجِبُ حِمَايَةُ هٰذِهِ البِيئَاتِ لِأَنَّهَا مُهِمَّةٌ لِلنَّاسِ وَالحَيَوَانَاتِ وَالاقْتِصَادِ.',
    },
  },
  patchNote: 'two website quiz items had options differing only in a final vowel (one distractor replaced in each); one vowel / gender slip in the website writing model is corrected (website: تَتَمَيَّزُ المَغْرِبُ — al-Maghrib is masculine: يَتَمَيَّزُ), and English is added to the website speaking model.',
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ مَنَاخَ بَلَدٍ عَرَبِيٍّ.' },
      { route: 'develop', ar: 'مَا أَهَمُّ المَعَالِمِ الطَّبِيعِيَّةِ فِيهِ؟' },
      { route: 'stretch', ar: 'كَيْفَ تَخْتَلِفُ المَنَاطِقُ دَاخِلَ البَلَدِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'يَسُودُ فِي ______ مَنَاخٌ ______ .' },
      { route: 'develop', ar: 'يَتَمَيَّزُ / تَتَمَيَّزُ ______ بِـ ______ .' },
      { route: 'stretch', ar: 'فِي الشَّمَالِ ______ ، أَمَّا فِي الجَنُوبِ فَـ ______ .' },
    ],
    modelEn: ['How would you describe nature in an Arab country?', 'Oman is known for long coasts and high mountains, and a hot, dry climate prevails for most of the year.'],
    notes: 'Website prompts and model. Choose a country: Morocco and Oman are in today’s texts; students with family in Pakistan, Bangladesh, Somalia etc. may describe that country instead (great for engagement).',
  },
  write: {
    core: { amount: '5 sentences', how: 'Four natural features with agreeing adjectives + one climate sentence (yasūdu …).' },
    develop: { amount: '80–100 words', how: 'A country’s landscape and climate with yasūdu, yattasimu bi- and one contrast.' },
    stretch: { amount: '100–120 words', how: 'Website task: four features, two regions contrasted, and a justified environmental comment.' },
  },
  frames: {
    core: [
      { en: '… lies in …', ar: 'يَقَعُ / تَقَعُ ______ فِي ______ .' },
      { en: 'There are high mountains and a long coast.', ar: 'فِيهَا جِبَالٌ ______ وَسَاحِلٌ ______ .' },
      { en: 'A … climate prevails in …', ar: 'يَسُودُ مَنَاخٌ ______ فِي ______ .' },
      { en: 'The country is rich in …', ar: 'البَلَدُ غَنِيٌّ بِـ ______ .' },
    ],
    develop: [
      { en: 'The coast is characterised by …', ar: 'يَتَّسِمُ السَّاحِلُ بِـ ______ .' },
      { en: 'The region is known for …', ar: 'تَتَمَيَّزُ المِنْطَقَةُ بِـ ______ .' },
      { en: 'As for the south, …', ar: 'أَمَّا فِي الجَنُوبِ فَـ ______ .' },
      { en: 'In my opinion, we must protect … because …', ar: 'فِي رَأْيِي، يَجِبُ حِمَايَةُ ______ لِأَنَّ ______ .' },
    ],
    bank: ['جِبَالٌ عَالِيَةٌ', 'صَحْرَاءُ وَاسِعَةٌ', 'سُهُولٌ خَصْبَةٌ', 'سَاحِلٌ طَوِيلٌ', 'مَنَاخٌ جَافٌّ', 'مَنَاخٌ مُعْتَدِلٌ', 'رَطْبٌ', 'يَسُودُ', 'يَتَّسِمُ بِـ', 'يَتَمَيَّزُ بِـ', 'يَقَعُ فِي', 'غَنِيٌّ بِـ'],
  },
  stretch: [
    ['تَتَنَوَّعُ الطَّبِيعَةُ فِي …', 'nature is varied in …'],
    ['تَتَوَفَّرُ المِيَاهُ الجَوْفِيَّةُ', 'groundwater is available'],
    ['تُعَدُّ المِيَاهُ العَذْبَةُ مَوْرِدًا مَحْدُودًا', 'fresh water is considered a limited resource'],
    ['تَحْتَاجُ البِلَادُ إِلَى إِدَارَتِهَا بِعِنَايَةٍ', 'the country needs to manage it carefully'],
    ['يَجِبُ حِمَايَةُ هٰذِهِ البِيئَاتِ', 'these environments must be protected'],
  ],
  modelEn: 'Morocco is known for great natural variety. In the north the Rif mountains stretch out, and the coast has a mild, humid climate. In the interior there are fertile plains that help farming. In the south a dry desert climate prevails, and there are oases near some valleys. The country is also rich in varied natural resources. In my opinion, these environments must be protected because they are important for people, animals and the economy.',
  find: ['four natural features', 'yasūdu', 'yattasimu bi-', 'a contrast and a comment'],
  modelNotes: 'Website writing model (one gender slip corrected: يَتَمَيَّزُ المَغْرِبُ). Evidence: جِبَالُ الرِّيفِ، السَّاحِلُ، سُهُولٌ، وَاحَاتٌ · يَسُودُ المَنَاخُ الصَّحْرَاوِيُّ · يَتَّسِمُ السَّاحِلُ بِمَنَاخٍ · أَمَّا فِي الدَّاخِلِ فَـ … · فِي رَأْيِي، يَجِبُ حِمَايَةُ …',
  selfCheck: [
    { route: 'core', text: 'My adjectives agree (incl. non-human plurals).' },
    { route: 'core', text: 'I named four natural features.' },
    { route: 'develop', text: 'I used yasūdu and yattasimu bi-.' },
    { route: 'develop', text: 'The verb agrees with the country / region.' },
    { route: 'stretch', text: 'I contrasted two regions and added a comment.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['تَقَعُ', 'lies, is located'], ['شِبْهِ الجَزِيرَةِ العَرَبِيَّةِ', 'the Arabian Peninsula'], ['سَوَاحِلَ طَوِيلَةٍ', 'long coasts'], ['صَحَارَى وَاسِعَةٍ', 'vast deserts'], ['الحَارُّ وَالجَافُّ', 'hot and dry'],
    ['مُعْظَمِ المَنَاطِقِ', 'most regions'], ['بِرُطُوبَةٍ مُرْتَفِعَةٍ', 'with high humidity'], ['تُعَدُّ', 'is considered'], ['مَوْرِدًا مَحْدُودًا', 'a limited resource'], ['بِعِنَايَةٍ', 'carefully'],
  ],
  prep: {
    words: [['المَطَرُ', 'rain', 'pl. الأَمْطَارُ'], ['الرِّيَاحُ', 'winds', 'sing. الرِّيحُ'], ['السُّحُبُ', 'clouds', 'sing. السَّحَابَةُ'], ['العَاصِفَةُ', 'a storm', 'pl. العَوَاصِفُ'], ['دَرَجَةُ الحَرَارَةِ', 'the temperature', 'pl. دَرَجَاتُ الحَرَارَةِ']],
    questionEn: 'What is the weather like today where you live? Use two of the words.',
    questionAr: 'اليَوْمَ …',
    homework: {
      core: 'Learn 12 landscape words (with plurals); write 5 sentences from the frames.',
      develop: 'Describe a country’s landscape and climate in 80–100 words with yasūdu and yattasimu bi-.',
      stretch: 'Website writing task: 100–120 words with a regional contrast and an environmental comment.',
    },
    wordsSource: 'The five words come from the website D4-L02 vocabulary (weather phenomena and forecasts).',
  },
  remember: 'Remember: the adjective follows the noun’s gender (non-human plurals → feminine) — yasūdu + climate — yattasimu / yatamayyazu bi-.',
});

module.exports = { meta, slides };
