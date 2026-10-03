'use strict';
/* D4-L03 · Environmental Problems — Causes and Effects — website: Pathways › Development › D4 › D4-L03 (problem nouns, active ↔ passive تُلَوِّثُ / يُلَوَّثُ / تُقْطَعُ, cause phrases بِسَبَبِ / نَتِيجَةً لِـ, result يُؤَدِّي إِلَى, clause link مِمَّا يُسَبِّبُ; vocabulary slip corrected: يُهَدِّدُ). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D4')({
  n: 3, fileTitle: 'Environmental_Problems_Causes_and_Effects', chip: 'Problems',
  title: 'Environmental Problems — Causes and Effects', arabic: 'المُشْكِلَاتُ البِيئِيَّةُ — الأَسْبَابُ وَالنَّتَائِجُ',
  focus: 'Explain environmental problems as cause → effect chains: name the problem, say who causes it (active) or what is affected (passive: يُلَوَّثُ الهَوَاءُ · تُقْطَعُ الأَشْجَارُ), and link with بِسَبَبِ · يُؤَدِّي إِلَى · مِمَّا يُسَبِّبُ.',
  icon: 'FaSmog', iconSet: 'fa6',
});

const site = D.site('D4-L03');
const vocab = site.vocab.map((g) => ({ ...g, items: g.items.map((it) => (it.ar === 'يَهْدِّدُ' ? { ...it, ar: 'يُهَدِّدُ' } : it)) }));
const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D4-L03', {
  support: `• Core: 8 problem nouns + cause → effect with بِسَبَبِ and يُؤَدِّي إِلَى (“X leads to Y”). Develop: active vs passive (تُلَوِّثُ المَصَانِعُ الهَوَاءَ → يُلَوَّثُ الهَوَاءُ) and مِمَّا يُسَبِّبُ. Stretch: two developed chains, one active and one passive sentence, and a justified judgement.
• NEW: the present passive — same letters, different vowels: yu-…-a-…-u (يُلَوَّثُ، تُقْطَعُ، تُرْمَى). Students already met يُشْتَرَطُ / يُطْلَبُ in D3-L08.
• Reuse: نَتِيجَةً لِذٰلِكَ / لِذٰلِكَ (D3), non-human plurals → ta- (D4-L01 / L02): تُقْطَعُ الأَشْجَارُ.
• Sensitivity: climate anxiety is real for some students — end with “we can act” and preview D4-L04 (solutions).`,
  teach: 'Problems, active vs passive, and cause → effect connectors.',
  wedo: 'Picture match, sort the words, fix and listen: pollution in the city.',
  next: { nextCode: 'D4-L04', nextTitle: 'Environmental Solutions — What Can Be Done?', nextAr: 'الحُلُولُ البِيئِيَّةُ' },
  objectives: ['Name the main environmental problems in Arabic.', 'Use active and passive sentences to describe what happens.', 'Link causes and effects with بِسَبَبِ / يُؤَدِّي إِلَى / مِمَّا يُسَبِّبُ.', 'Explain two problems as connected chains with a judgement.'],
  rulesTitle: 'Grammar of environmental causes and effects',
  rulesAr: 'قَوَاعِدُ الأَسْبَابِ وَالنَّتَائِجِ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does النُّفَايَاتُ mean?', ['waste, rubbish', 'factories', 'pollution'], 'Prepared at home (D4-L02).'),
      q('What does يُؤَدِّي إِلَى mean?', ['leads to', 'because of', 'is expected'], 'Prepared at home (D4-L02).'),
      q('Choose the accurate sentence.', ['تَسْقُطُ الثُّلُوجُ فِي الجِبَالِ.', 'يَسْقُطُ الثُّلُوجُ فِي الجِبَالِ.', 'تَسْقُطُ الثُّلُوجُ إِلَى الجِبَالِ.'], 'D4-L02: non-human plural → ta-.'),
      q('What does يُشْتَرَطُ mean?', ['is required', 'requires', 'required'], 'D3-L08: a passive verb (yu-…-a-).'),
      q('Which means “as a result”?', ['نَتِيجَةً لِذٰلِكَ', 'عَلَى سَبِيلِ المِثَالِ', 'مِنْ جِهَةٍ'], 'D3 connectors.'),
    ],
    keyIdea: { text: 'Active names who does it; passive focuses on what is harmed.', ar: '{w|تُلَوِّثُ} المَصَانِعُ الهَوَاءَ ← {e|يُلَوَّثُ} الهَوَاءُ' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of D4-L02. Question 3 retrieves D4-L02; question 4 retrieves the D3-L08 passive (يُشْتَرَطُ) — today’s new grammar; question 5 retrieves a D3 connector.',
  },
  routes: {
    core: ['I can name eight environmental problems.', 'I can link a cause to an effect.'],
    develop: ['I can turn an active sentence into a passive one.', 'I can link a whole idea with mimmā yusabbibu.'],
    stretch: ['I can build two developed cause–effect chains.', 'I can finish with a justified judgement.'],
  },
  bridge: [
    { ar: 'سَبَبٌ', urdu: 'سبب', tr: 'sabab', en: 'cause, reason' },
    { ar: 'نَتِيجَةٌ', urdu: 'نتیجہ', tr: 'natīja', en: 'result' },
    { ar: 'هَوَاءٌ', urdu: 'ہوا', tr: 'hawā', en: 'air (Urdu also: wind)' },
    { ar: 'خَطَرٌ', urdu: 'خطرہ', tr: 'khatra', en: 'danger' },
    { ar: 'حَيَوَانَاتٌ', urdu: 'حیوانات', tr: 'haiwānāt', en: 'animals' },
  ],
  bridgeNotes: 'URDU BRIDGE: سبب، نتیجہ، ہوا، خطرہ، حیوانات are all shared — students can build the whole cause → effect idea with familiar words. تَلَوُّثٌ (pollution) is آلودگی in Urdu (no cognate).',
  core: ['تَلَوُّثُ الهَوَاءِ', 'تَلَوُّثُ المِيَاهِ', 'النُّفَايَاتُ البِلَاسْتِيكِيَّةُ', 'إِزَالَةُ الغَابَاتِ', 'التَّصَحُّرُ', 'الاحْتِبَاسُ الحَرَارِيُّ', 'ذَوَبَانُ الجَلِيدِ', 'ارْتِفَاعُ مُسْتَوَى البَحْرِ', 'بِسَبَبِ', 'يُؤَدِّي إِلَى', 'مِمَّا يُسَبِّبُ', 'نَتِيجَةً لِذٰلِكَ'],
  vocabNotes: {
    0: 'Environmental problems: each one is a NOUN phrase (often a verbal noun + genitive: تَلَوُّثُ الهَوَاءِ = the pollution of the air).',
    1: 'Active and passive processes. Compare تُلَوِّثُ (pollutes, -wwi-) with يُلَوَّثُ (is polluted, -wwa-). يَنْبَعِثُ and يَتَرَاكَمُ are NOT passives — they are process verbs (emanates, accumulates).',
    2: 'Cause and effect: بِسَبَبِ / نَتِيجَةً لِـ + a NOUN; يُؤَدِّي إِلَى + a noun; مِمَّا يُسَبِّبُ after a whole clause.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · active and passive (website rule 1 + mistakes)', title: 'Who does it? What is affected?', ar: 'المَبْنِيُّ لِلْمَعْلُومِ وَالمَبْنِيُّ لِلْمَجْهُولِ',
      cols: [{ label: 'Active (names the agent)', w: 5.0, size: 22 }, { label: 'Passive (focus on what is harmed)', w: 5.0, size: 22 }, { label: 'Vowels', w: 2.33 }],
      rows: [
        { core: true, cells: [P('{w|تُلَوِّثُ} المَصَانِعُ الهَوَاءَ.', 'Factories pollute the air.'), P('{e|يُلَوَّثُ} الهَوَاءُ.', 'The air is polluted.'), 'tu-lawwi- → yu-lawwa-'] },
        { core: true, cells: [P('{w|يَقْطَعُ} النَّاسُ الأَشْجَارَ.', 'People cut down the trees.'), P('{e|تُقْطَعُ} الأَشْجَارُ.', 'The trees are cut down.'), 'ya-qṭa- → tu-qṭa-'] },
        { cells: [P('{w|يَرْمِي} النَّاسُ النُّفَايَاتِ.', 'People throw rubbish.'), P('{e|تُرْمَى} النُّفَايَاتُ فِي النَّهْرِ.', 'Rubbish is thrown in the river.'), 'yarmī → turmā'] },
        { cells: [P('يَنْبَعِثُ الدُّخَانُ.', 'Smoke is emitted.'), P('— (not a passive)', 'a process verb'), 'yanbaʿithu'] },
      ],
      ltr: true,
      foot: 'In the passive the affected thing becomes the subject (-u): al-hawāʾu, al-ashjāru. Non-human plurals → ta-: tuqṭaʿu.',
      notes: `GRAMMAR PART 1 — website rule “Active and passive” (the active sentence names the agent; the passive focuses on the affected thing; the passive subject is nominative). Website examples: تُلَوِّثُ المَصَانِعُ الهَوَاءَ · يُلَوَّثُ الهَوَاءُ بِدُخَانِ المَصَانِعِ. Rows 2–3 from the vocabulary; row 4 = the website common error (do not label يَنْبَعِثُ as a passive).
Website mistakes: يُلَوِّثُ الهَوَاءُ ✗ → يُلَوَّثُ الهَوَاءُ ✓ · يُقْطَعُ الأَشْجَارُ ✗ → تُقْطَعُ ✓.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · cause and effect (website rules 2–4)', title: 'Because of … leads to … which causes …', ar: 'بِسَبَبِ · يُؤَدِّي إِلَى · مِمَّا',
      cards: [
        { chip: 'CAUSE · CORE', color: '1D5FBF', head: 'بِسَبَبِ + اسْمٌ', big: 'يَتَلَوَّثُ البَحْرُ بِسَبَبِ النُّفَايَاتِ البِلَاسْتِيكِيَّةِ.', en: 'The sea is polluted because of plastic waste.', clue: 'A noun, not a clause.' },
        { chip: 'RESULT · CORE', color: '1E7B4F', head: 'يُؤَدِّي إِلَى', big: 'يُؤَدِّي قَطْعُ الأَشْجَارِ إِلَى فَقْدِ المَوَائِلِ.', en: 'Cutting down trees leads to habitat loss.', clue: 'Always ilā.' },
        { chip: 'CHAIN · DEVELOP', color: '6B4C9A', head: 'مِمَّا يُسَبِّبُ', big: 'تَرْتَفِعُ دَرَجَةُ الحَرَارَةِ، مِمَّا يُسَبِّبُ ذَوَبَانَ الجَلِيدِ.', en: 'The temperature rises, which causes the ice to melt.', clue: 'mimmā = the whole idea.' },
      ],
      error: { text: 'Website mistake: yuʾaddī takes ilā.', pairs: [['يُؤَدِّي التَّلَوُّثُ إِلَى أَمْرَاضٍ.', 'يُؤَدِّي التَّلَوُّثُ فِي أَمْرَاضٍ.']] },
      notes: `GRAMMAR PART 2 — website rules “Cause phrases” (بِسَبَبِ / نَتِيجَةً لِـ + genitive noun: followed by a noun phrase, not a complete finite clause), “Result with يُؤَدِّي إِلَى” and “Linking a whole clause to a consequence” (مِمَّا refers back to the whole previous idea). Website examples as shown.
Compare D3: لِأَنَّ + a clause (because + sentence) vs بِسَبَبِ + a noun (because of + noun).`,
    },
  ],
  quick: [0, 3, 4, 5],
  rest: [1, 2, 6, 7],
  ido: {
    title: 'Watch me build a cause–effect chain',
    steps: [
      { head: 'Cause', ar: '{k|بِسَبَبِ} حَرْقِ الوَقُودِ الأُحْفُورِيِّ', think: 'bi-sababi + noun.' },
      { head: 'Passive', ar: '{e|يُلَوَّثُ} الهَوَاءُ', think: 'Focus on the air.' },
      { head: 'Effect', ar: 'وَ{w|يُؤَدِّي} ذٰلِكَ {w|إِلَى} الاحْتِبَاسِ الحَرَارِيِّ', think: 'yuʾaddī ilā.' },
      { head: 'Chain', ar: '{k|مِمَّا يُسَبِّبُ} ذَوَبَانَ الجَلِيدِ', think: 'Whole idea → consequence.' },
    ],
    legend: ['k', 'e', 'w'], legendLabels: { k: 'CAUSE / CHAIN', e: 'PASSIVE', w: 'RESULT' },
    model: '{k|بِسَبَبِ} حَرْقِ الوَقُودِ الأُحْفُورِيِّ {e|يُلَوَّثُ} الهَوَاءُ، وَتَرْتَفِعُ نِسْبَةُ ثَانِي أُكْسِيدِ الكَرْبُونِ. {w|يُؤَدِّي} ذٰلِكَ {w|إِلَى} الاحْتِبَاسِ الحَرَارِيِّ، {k|مِمَّا يُسَبِّبُ} ذَوَبَانَ الجَلِيدِ وَارْتِفَاعَ مُسْتَوَى البَحْرِ. وَفِي مَنَاطِقَ أُخْرَى {e|تُقْطَعُ} الأَشْجَارُ، فَتَفْقِدُ الحَيَوَانَاتُ مَوَائِلَهَا.',
    modelEn: 'Because of burning fossil fuels, the air is polluted and the level of carbon dioxide rises. This leads to global warming, which causes ice to melt and sea levels to rise. In other areas trees are cut down, so animals lose their habitats.',
    notes: 'I DO (3 min) — built from the website reading text (a cause–effect chain). Draw the chain as arrows on the board: burning fuel → polluted air → global warming → melting ice → sea-level rise. Students copy and label each link.',
  },
  patternEn: ['Factories pollute the air.', 'The sea is polluted because of plastic waste.', 'Cutting down trees leads to habitat loss.'],
  game: {
    title: 'What causes what? Match the picture',
    pick: [0, 2, 4],
    en: ['Air pollution causes health problems.', 'Waste pollutes the water.', 'Global warming leads to melting ice.'],
    icons: [[['fa6', 'FaIndustry', '5A6472'], ['fa6', 'FaHeadSideMask', 'B83227']], [['fa6', 'FaTrashCan', '6B4C9A'], ['fa6', 'FaWater', '1D5FBF']], [['fa6', 'FaTemperatureArrowUp', 'C77700'], ['fa6', 'FaIcicles', '6B9BD1']]],
    labels: ['factory smoke · mask', 'rubbish · water', 'heat · melting ice'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Other cards: كَثْرَةُ السَّيَّارَاتِ تَزِيدُ تَلَوُّثَ الهَوَاءِ · قَطْعُ الأَشْجَارِ يُهَدِّدُ الحَيَوَانَاتِ · نَقْصُ المِيَاهِ يُؤَثِّرُ فِي الزِّرَاعَةِ. Stretch: rewrite one card with بِسَبَبِ.',
  },
  sorterNotes: 'Then build one chain using one word from each group: problem + process + connector.',
  patch: {
    vocab,
    grammar: { rules: site.grammar.rules.map((r, i) => (i === 0 ? { ...r, formula: 'تُلَوِّثُ المَصَانِعُ الهَوَاءَ · يُلَوَّثُ الهَوَاءُ' } : r)) },
    speaking: {
      model: [
        ['A', 'مَا أَخْطَرُ مُشْكِلَةٍ بِيئِيَّةٍ فِي رَأْيِكَ؟', 'What is the most serious environmental problem, in your opinion?'],
        ['B', 'فِي رَأْيِي، تَلَوُّثُ الهَوَاءِ خَطِيرٌ لِأَنَّ السَّيَّارَاتِ وَالمَصَانِعَ تُطْلِقُ دُخَانًا يُؤَدِّي إِلَى أَمْرَاضٍ تَنَفُّسِيَّةٍ.', 'In my opinion, air pollution is serious because cars and factories release smoke that leads to breathing illnesses.'],
      ],
    },
  },
  patchNote: 'one vocabulary slip corrected (website: يَهْدِّدُ → يُهَدِّدُ), and English added to the website speaking model.',
  hints: ['“is polluted”: -wwi- or -wwa-?', 'Which preposition after yuʾaddī?', 'al-ashjār is a non-human plural: ya- or ta-?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nListen for: تَلَوُّثُ الهَوَاءِ · السَّيَّارَاتُ · أَمْرَاضُ.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 6 — then draw the chain you heard.',
  gloss: [
    ['يُعَدُّ تَلَوُّثُ الهَوَاءِ مِنْ أَخْطَرِ المُشْكِلَاتِ فِي المَدِينَةِ.', 'Air pollution is considered one of the most serious problems in the city.'],
    ['تُلَوِّثُ السَّيَّارَاتُ وَالمَصَانِعُ الهَوَاءَ، وَيَنْبَعِثُ مِنْهَا دُخَانٌ كَثِيفٌ.', 'Cars and factories pollute the air, and thick smoke comes from them.'],
    ['نَتِيجَةً لِذٰلِكَ، تَزْدَادُ أَمْرَاضُ التَّنَفُّسِ.', 'As a result, breathing illnesses increase.'],
    ['كَمَا تُرْمَى نُفَايَاتٌ بِلَاسْتِيكِيَّةٌ فِي النَّهْرِ،', 'Plastic waste is also thrown into the river,'],
    ['مِمَّا يُؤَدِّي إِلَى تَلَوُّثِ المِيَاهِ وَنُفُوقِ بَعْضِ الأَسْمَاكِ.', 'which leads to water pollution and the death of some fish.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا أَخْطَرُ مُشْكِلَةٍ بِيئِيَّةٍ؟' },
      { route: 'develop', ar: 'مَا سَبَبُهَا؟' },
      { route: 'stretch', ar: 'مَا نَتَائِجُهَا عَلَى المَدَى الطَّوِيلِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'فِي رَأْيِي، أَخْطَرُ مُشْكِلَةٍ هِيَ ______ .' },
      { route: 'develop', ar: 'بِسَبَبِ ______ ، يُلَوَّثُ / تُقْطَعُ ______ .' },
      { route: 'stretch', ar: 'يُؤَدِّي ذٰلِكَ إِلَى ______ ، مِمَّا يُسَبِّبُ ______ .' },
    ],
    modelEn: ['What is the most serious environmental problem, in your opinion?', 'In my opinion, air pollution is serious because cars and factories release smoke that leads to breathing illnesses.'],
    notes: 'Website prompts and model. Chain game: student 1 says a cause, student 2 adds يُؤَدِّي ذٰلِكَ إِلَى …, student 3 adds مِمَّا يُسَبِّبُ … To a girl: فِي رَأْيِكِ.',
  },
  write: {
    core: { amount: '5 sentences', how: 'One problem: what it is, one cause (bi-sababi), one effect (yuʾaddī ilā).' },
    develop: { amount: '100–120 words', how: 'Two problems, each with cause and effect; one active and one passive sentence.' },
    stretch: { amount: '120–140 words', how: 'Website task: two developed chains, three different connectors and a justified judgement.' },
  },
  frames: {
    core: [
      { en: 'One of the most serious problems is …', ar: 'مِنْ أَخْطَرِ المُشْكِلَاتِ ______ .' },
      { en: 'The air is polluted because of …', ar: 'يُلَوَّثُ الهَوَاءُ بِسَبَبِ ______ .' },
      { en: 'This leads to …', ar: 'يُؤَدِّي ذٰلِكَ إِلَى ______ .' },
      { en: 'Trees are cut down in …', ar: 'تُقْطَعُ الأَشْجَارُ فِي ______ .' },
    ],
    develop: [
      { en: '… pollute(s) …', ar: 'تُلَوِّثُ ______ ______ .' },
      { en: '…, which causes …', ar: '______ ، مِمَّا يُسَبِّبُ ______ .' },
      { en: 'As a result of …', ar: 'نَتِيجَةً لِـ ______ ، ______ .' },
      { en: 'In the long term …', ar: 'عَلَى المَدَى الطَّوِيلِ ______ .' },
    ],
    bank: ['تَلَوُّثُ الهَوَاءِ', 'تَلَوُّثُ المِيَاهِ', 'النُّفَايَاتُ البِلَاسْتِيكِيَّةُ', 'إِزَالَةُ الغَابَاتِ', 'الاحْتِبَاسُ الحَرَارِيُّ', 'تُلَوِّثُ', 'يُلَوَّثُ', 'تُقْطَعُ', 'تُرْمَى', 'بِسَبَبِ', 'يُؤَدِّي إِلَى', 'مِمَّا يُسَبِّبُ'],
  },
  stretch: [
    ['يُعَدُّ … مِنْ أَخْطَرِ المُشْكِلَاتِ', '… is considered one of the most serious problems'],
    ['ثَانِي أُكْسِيدِ الكَرْبُونِ', 'carbon dioxide'],
    ['تَفْقِدُ الحَيَوَانَاتُ مَوَائِلَهَا', 'animals lose their habitats'],
    ['سَتَكُونُ نَتَائِجُهَا طَوِيلَةَ الأَمَدِ', 'its results will be long-term'],
    ['لَا بُدَّ مِنْ فَهْمِ الأَسْبَابِ', 'we must understand the causes'],
  ],
  modelEn: 'Many cities face connected environmental problems. Because of the large number of cars and the burning of fossil fuels, the air is polluted and breathing illnesses increase. Plastic waste is also thrown into the seas, which harms fish and birds. Trees are cut down in some regions, which leads to habitat loss and desertification. In the long term, these problems will affect people’s health and the economy. So we must understand the causes before choosing the solutions.',
  find: ['an active sentence', 'a passive sentence', 'three connectors', 'a judgement'],
  modelNotes: 'Website writing model. Evidence: يُلَوَّثُ الهَوَاءُ، تُرْمَى النُّفَايَاتُ، تُقْطَعُ الأَشْجَارُ (passives) · فَبِسَبَبِ … · مِمَّا يَضُرُّ · فَيُؤَدِّي ذٰلِكَ إِلَى · عَلَى المَدَى الطَّوِيلِ · لِذٰلِكَ، لَا بُدَّ مِنْ …',
  selfCheck: [
    { route: 'core', text: 'bi-sababi + a noun.' },
    { route: 'core', text: 'yuʾaddī + ilā.' },
    { route: 'develop', text: 'I used one active and one passive sentence.' },
    { route: 'develop', text: 'Non-human plurals take ta-.' },
    { route: 'stretch', text: 'Two chains, three connectors, a judgement.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['حَرْقِ الوَقُودِ الأُحْفُورِيِّ', 'burning fossil fuel'], ['نِسْبَةُ', 'the level / proportion'], ['ثَانِي أُكْسِيدِ الكَرْبُونِ', 'carbon dioxide'], ['الاحْتِبَاسِ الحَرَارِيِّ', 'global warming'], ['ذَوَبَانَ الجَلِيدِ', 'melting ice'],
    ['ارْتِفَاعَ مُسْتَوَى البَحْرِ', 'sea-level rise'], ['تُقْطَعُ', 'are cut down'], ['مَوَائِلَهَا', 'their habitats'], ['إِذَا اسْتَمَرَّتْ', 'if … continue'], ['طَوِيلَةَ الأَمَدِ', 'long-term'],
  ],
  prep: {
    words: [['إِعَادَةُ التَّدْوِيرِ', 'recycling', '—'], ['الطَّاقَةُ المُتَجَدِّدَةُ', 'renewable energy', '—'], ['الطَّاقَةُ الشَّمْسِيَّةُ', 'solar energy', '—'], ['يَنْبَغِي أَنْ', 'should', '—'], ['نُقَلِّلُ مِنْ', 'we reduce', 'أُقَلِّلُ I']],
    questionEn: 'What do you (or your family) already do to help the environment? Write one sentence.',
    questionAr: 'فِي بَيْتِنَا نُ… · أَنَا أُ…',
    homework: {
      core: 'Learn 8 problem nouns; write 5 sentences with bi-sababi and yuʾaddī ilā.',
      develop: 'Two problems in 100–120 words with one active and one passive sentence.',
      stretch: 'Website writing task: two developed chains and a judgement (120–140 words).',
    },
    wordsSource: 'The five words come from the website D4-L04 vocabulary (environmental solutions).',
  },
  remember: 'Remember: active names the agent, passive (yu-…-a-) the victim — bi-sababi + noun — yuʾaddī ilā — mimmā yusabbibu.',
});

module.exports = { meta, slides };
