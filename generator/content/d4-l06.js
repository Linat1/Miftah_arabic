'use strict';
/* D4-L06 · Green Technology — AI, Solar Energy and Smart Cities — website: Pathways › Development › D4 › D4-L06 (green-tech nouns, process verbs تُحَوِّلُ / تُوَلِّدُ / تَرْصُدُ, passive of use يُسْتَخْدَمُ / تُسْتَخْدَمُ … لِـ, تُسَاعِدُ عَلَى + verbal noun, evaluation مِنْ أَهَمِّ الفَوَائِدِ أَنَّ / مِنْ أَبْرَزِ التَّحَدِّيَاتِ أَنَّ; writing-model slip corrected: تُمَكِّنُ). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D4')({
  n: 6, fileTitle: 'Green_Technology_AI_Solar_Smart_Cities', chip: 'Green Tech',
  title: 'Green Technology — AI, Solar Energy and Smart Cities', arabic: 'التِّقْنِيَّةُ الخَضْرَاءُ — الذَّكَاءُ الاصْطِنَاعِيُّ وَالطَّاقَةُ الشَّمْسِيَّةُ وَالمُدُنُ الذَّكِيَّةُ',
  focus: 'Explain how a green technology works (تُحَوِّلُ الأَلْوَاحُ الشَّمْسِيَّةُ ضَوْءَ الشَّمْسِ إِلَى كَهْرَبَاءَ), what it is used for (يُسْتَخْدَمُ … لِـ), what it helps with (تُسَاعِدُ عَلَى …) and evaluate it (مِنْ أَهَمِّ الفَوَائِدِ أَنَّ … / مِنْ أَبْرَزِ التَّحَدِّيَاتِ أَنَّ …).',
  icon: 'FaSolarPanel', iconSet: 'fa6',
});

const site = D.site('D4-L06');
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D4-L06', {
  support: `• Core: 8 green-tech words + one “how it works” sentence with a ta- verb (تُحَوِّلُ / تُوَلِّدُ) and one benefit. Develop: the passive of use (يُسْتَخْدَمُ / تُسْتَخْدَمُ … لِـ) and تُسَاعِدُ عَلَى + verbal noun. Stretch: a balanced evaluation (benefit + challenge) and a long-term judgement.
• Builds on D4-L03 (passive yu-…-a-), D4-L04 (solutions), D4-L05 (balance) and D3-L02 (مِنْ مَزَايَا … أَنَّ — now مِنْ أَهَمِّ الفَوَائِدِ أَنَّ).
• Real example: Masdar City (Abu Dhabi) is in the reading — a short video or photo hooks students.
• Agreement focus: most subjects today are feminine or non-human plurals → ta- verbs; الذَّكَاءُ الاصْطِنَاعِيُّ is masculine → ya-.`,
  teach: 'Green-tech words, how it works, what it is used for, and evaluation.',
  wedo: 'Picture match, sort the words, fix and listen: a smart energy system.',
  next: { nextCode: 'D4-L07', nextTitle: 'Resources and Sustainability — When Resources Run Out', nextAr: 'المَوَارِدُ وَالاسْتِدَامَةُ' },
  objectives: ['Name green technologies and smart-city features.', 'Explain how a technology works with agreeing verbs.', 'Describe its use with يُسْتَخْدَمُ / تُسْتَخْدَمُ … لِـ and تُسَاعِدُ عَلَى.', 'Evaluate benefits and challenges with a long-term judgement.'],
  rulesTitle: 'Active, passive and evaluative language for green technology',
  rulesAr: 'لُغَةُ التِّقْنِيَّةِ الخَضْرَاءِ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does الأَلْوَاحُ الشَّمْسِيَّةُ mean?', ['solar panels', 'wind turbines', 'a smart city'], 'Prepared at home (D4-L05).'),
      q('What does مُكَلِّفٌ mean?', ['expensive, costly', 'effective', 'feasible'], 'Prepared at home (D4-L05).'),
      q('Choose the passive.', ['يُلَوَّثُ الهَوَاءُ.', 'تُلَوِّثُ المَصَانِعُ الهَوَاءَ.', 'لَوَّثَتِ المَصَانِعُ الهَوَاءَ.'], 'D4-L03: yu-…-a-.'),
      q('Complete: يَتَفَاعَلُ الطُّلَّابُ ___ المُعَلِّمِ.', ['مَعَ', 'عَلَى', 'عَنْ'], 'D4-L05.'),
      q('Which introduces an advantage?', ['مِنْ مَزَايَا … أَنَّ', 'بِسَبَبِ', 'لِكَيْ'], 'D3-L02 / F6-L05.'),
    ],
    keyIdea: { text: 'Say what the technology DOES, what it is USED for, and whether it is WORTH it.', ar: '{e|تُحَوِّلُ} الأَلْوَاحُ … · {w|يُسْتَخْدَمُ} الذَّكَاءُ الاصْطِنَاعِيُّ لِـ … · {k|مِنْ أَهَمِّ الفَوَائِدِ أَنَّ} …' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of D4-L05. Questions 3–5 retrieve D4-L03 (passive), D4-L05 (verb + preposition) and the D3 advantage frame.',
  },
  routes: {
    core: ['I can name eight green technologies.', 'I can say what one technology does.'],
    develop: ['I can say what it is used for (passive).', 'I can say what it helps with.'],
    stretch: ['I can weigh a benefit against a challenge.', 'I can give a long-term judgement.'],
  },
  bridge: [
    { ar: 'كَهْرَبَاءُ', urdu: 'کہربا / بجلی', tr: 'kahrubā', en: 'electricity (Urdu: amber!)' },
    { ar: 'نِظَامٌ', urdu: 'نظام', tr: 'nizām', en: 'system' },
    { ar: 'فَائِدَةٌ', urdu: 'فائدہ', tr: 'fāʾida', en: 'benefit' },
    { ar: 'تَحَدٍّ', urdu: 'چیلنج', tr: 'chailenj', en: 'challenge (meaning only)' },
    { ar: 'مُسْتَدَامٌ', urdu: 'مستقل / دائم', tr: 'dāʾim', en: 'lasting → sustainable' },
  ],
  bridgeNotes: 'URDU BRIDGE: نظام، فائدہ are shared. Fun fact: کہربا in Urdu is amber (rubbed amber makes static) — Arabic كَهْرَبَاءُ took the same word for electricity; everyday Urdu says بجلی. مُسْتَدَامٌ shares the root of دائم (lasting).',
  core: ['التِّقْنِيَّةُ الخَضْرَاءُ', 'الأَلْوَاحُ الشَّمْسِيَّةُ', 'تُورْبِينَاتُ الرِّيَاحِ', 'مَدِينَةٌ ذَكِيَّةٌ', 'مَبْنًى مُسْتَدَامٌ', 'بَصْمَةٌ كَرْبُونِيَّةٌ', 'تُحَوِّلُ', 'تُوَلِّدُ', 'تُخَفِّضُ', 'تُسَاعِدُ عَلَى', 'يُسْتَخْدَمُ', 'فَعَّالٌ / فَعَّالَةٌ'],
  vocabNotes: {
    0: 'Green technology: compound nouns. Most are feminine or non-human plurals — the verb will start with ta-.',
    1: 'Processes: the cards are in the ta- form because the subjects (panels, the city, the grid) are feminine. يُسْتَخْدَمُ / تُسْتَخْدَمُ = is used (passive: yu-…-a-).',
    2: 'Evaluation: مِنْ أَهَمِّ الفَوَائِدِ أَنَّ … (one of the main benefits is that …) / مِنْ أَبْرَزِ التَّحَدِّيَاتِ أَنَّ … (one of the biggest challenges is that …).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · what it does · what it is used for (website rules 1–2)', title: 'Does (active) · is used for (passive)', ar: 'تُحَوِّلُ · يُسْتَخْدَمُ لِـ',
      cols: [{ label: 'Sentence', w: 7.4, size: 22 }, { label: 'Why', w: 4.93 }],
      rows: [
        { core: true, cells: [P('{e|تُحَوِّلُ} الأَلْوَاحُ الشَّمْسِيَّةُ ضَوْءَ الشَّمْسِ إِلَى كَهْرَبَاءَ.', 'Solar panels convert sunlight into electricity.'), 'active · non-human plural → ta-'] },
        { core: true, cells: [P('{e|تُخَفِّضُ} المَدِينَةُ الذَّكِيَّةُ الانْبِعَاثَاتِ.', 'The smart city reduces emissions.'), 'active · feminine → ta-'] },
        { cells: [P('{w|يُسْتَخْدَمُ} الذَّكَاءُ الاصْطِنَاعِيُّ {k|لِرَصْدِ} التَّلَوُّثِ.', 'AI is used to monitor pollution.'), 'passive · al-dhakāʾ (m.) → yu-'] },
        { cells: [P('{e|تُسْتَخْدَمُ} الأَقْمَارُ الصِّنَاعِيَّةُ {k|لِمُرَاقَبَةِ} الجَفَافِ.', 'Satellites are used to monitor drought.'), 'passive · non-human plural → tu-'] },
      ],
      ltr: true,
      foot: 'Purpose after the passive: li- + a verbal noun (li-raṣdi = for monitoring).',
      notes: `GRAMMAR PART 1 — website rules “Active technology processes” (many technology nouns are feminine plurals or singular feminine nouns, so the verb commonly begins with تـ) and “Passive use descriptions” (choose يُسْتَخْدَمُ / تُسْتَخْدَمُ according to the gender of the subject). Website examples as shown.
Website mistakes: يُحَوِّلُ الأَلْوَاحُ ✗ → تُحَوِّلُ ✓ · تُسْتَخْدَمُ الذَّكَاءُ ✗ → يُسْتَخْدَمُ ✓.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · helps to · benefits · challenges (website rules 3–4) · Develop / Stretch', title: 'Helps to … · the main benefit … · the biggest challenge …', ar: 'تُسَاعِدُ عَلَى · مِنْ أَهَمِّ · مِنْ أَبْرَزِ',
      cards: [
        { chip: 'HELPS TO · DEVELOP', color: '1D5FBF', head: 'تُسَاعِدُ عَلَى + مَصْدَرٍ', big: 'تُسَاعِدُ الشَّبَكَاتُ الذَّكِيَّةُ عَلَى تَقْلِيلِ هَدْرِ الطَّاقَةِ.', en: 'Smart grids help to reduce energy waste.', clue: 'ʿalā + a verbal noun.' },
        { chip: 'BENEFIT · CORE', color: '1E7B4F', head: 'مِنْ أَهَمِّ الفَوَائِدِ أَنَّ', big: 'مِنْ أَهَمِّ الفَوَائِدِ أَنَّ الطَّاقَةَ الشَّمْسِيَّةَ تُخَفِّضُ الانْبِعَاثَاتِ.', en: 'One of the main benefits is that solar energy cuts emissions.', clue: 'anna + full clause.' },
        { chip: 'CHALLENGE · STRETCH', color: 'B83227', head: 'مِنْ أَبْرَزِ التَّحَدِّيَاتِ أَنَّ', big: 'مِنْ أَبْرَزِ التَّحَدِّيَاتِ أَنَّ التَّكْلِفَةَ الأُولَى مُرْتَفِعَةٌ.', en: 'One of the biggest challenges is that the initial cost is high.', clue: 'Balance the benefit.' },
      ],
      error: { text: 'Website mistake: tusāʿidu takes ʿalā.', pairs: [['تُسَاعِدُ الشَّبَكَةُ عَلَى تَقْلِيلِ الهَدْرِ.', 'تُسَاعِدُ الشَّبَكَةُ إِلَى تَقْلِيلِ الهَدْرِ.']] },
      notes: `GRAMMAR PART 2 — website rules “Helping to achieve an outcome” (after تُسَاعِدُ عَلَى use a verbal noun or a noun phrase) and “Measured evaluation” (use أَنَّ to turn a full clause into the stated benefit or challenge). Website examples as shown.
After أَنَّ the subject takes -a: أَنَّ الطَّاقَةَ، أَنَّ التَّكْلِفَةَ (D3-L02 / D4-L05).`,
    },
  ],
  quick: [0, 2, 3, 4],
  rest: [1, 5, 6, 7],
  ido: {
    title: 'Watch me evaluate a smart energy system',
    steps: [
      { head: 'How it works', ar: '{e|تُوَلِّدُ} الأَلْوَاحُ الشَّمْسِيَّةُ الكَهْرَبَاءَ.', think: 'Non-human plural → tu-.' },
      { head: 'Used for', ar: '{w|يُسْتَخْدَمُ} الذَّكَاءُ الاصْطِنَاعِيُّ لِلتَّنَبُّؤِ بِالطَّلَبِ.', think: 'Passive · masculine.' },
      { head: 'Benefit', ar: '{k|مِنْ أَهَمِّ الفَوَائِدِ أَنَّ} النِّظَامَ يُقَلِّلُ الهَدْرَ.', think: 'anna + clause.' },
      { head: 'Challenge', ar: 'لٰكِنَّ التَّكْلِفَةَ الأُولَى مُرْتَفِعَةٌ.', think: 'The other side.' },
    ],
    legend: ['e', 'w', 'k'], legendLabels: { e: 'ACTIVE (ta-)', w: 'PASSIVE', k: 'EVALUATION' },
    model: 'تَسْتَخْدِمُ مَدِينَةٌ ذَكِيَّةٌ شَبَكَةً كَهْرَبَائِيَّةً تَرْصُدُ الاسْتِهْلَاكَ كُلَّ سَاعَةٍ. وَ{w|يُسْتَخْدَمُ} الذَّكَاءُ الاصْطِنَاعِيُّ لِلتَّنَبُّؤِ بِالطَّلَبِ عَلَى الطَّاقَةِ، بَيْنَمَا {e|تُوَلِّدُ} الأَلْوَاحُ الشَّمْسِيَّةُ وَتُورْبِينَاتُ الرِّيَاحِ جُزْءًا كَبِيرًا مِنَ الكَهْرَبَاءِ. {k|مِنْ أَهَمِّ الفَوَائِدِ أَنَّ} النِّظَامَ يُقَلِّلُ الهَدْرَ، لٰكِنَّ التَّكْلِفَةَ الأُولَى لِبِنَاءِ الشَّبَكَةِ مُرْتَفِعَةٌ.',
    modelEn: 'A smart city uses an electricity grid that monitors consumption every hour. AI is used to predict energy demand, while solar panels and wind turbines generate a large part of the electricity. One of the main benefits is that the system reduces waste, but the initial cost of building the grid is high.',
    notes: 'I DO (3 min) — the website listening script as a model, colour-coded: active (ta-), passive, evaluation. Ask: why يُسْتَخْدَمُ (ya-) but تُوَلِّدُ (ta-)?',
  },
  patternEn: ['Solar panels convert sunlight into electricity.', 'Artificial intelligence is used to monitor pollution.', 'Smart grids help to reduce energy waste.'],
  game: {
    title: 'Green technology: match the picture',
    pick: [0, 1, 4],
    en: ['Homes use solar energy.', 'The car is electric.', 'Wind energy is renewable.'],
    icons: [[['fa6', 'FaSolarPanel', 'C77700'], ['fa6', 'FaHouse', '1D5FBF']], [['fa6', 'FaCarSide', '5A6472'], ['fa6', 'FaBolt', 'C77700']], [['fa6', 'FaWind', '6B9BD1'], ['fa6', 'FaFan', '1E7B4F']]],
    labels: ['solar panels · home', 'car · electricity', 'wind · turbine'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Other cards: المَدِينَةُ الذَّكِيَّةُ تَسْتَخْدِمُ التِّقْنِيَّةَ لِتَوْفِيرِ الطَّاقَةِ · يُمْكِنُ لِلذَّكَاءِ الاصْطِنَاعِيِّ أَنْ يُسَاعِدَ فِي حِمَايَةِ البِيئَةِ · تُشَجِّعُ المَدِينَةُ الخَضْرَاءُ رُكُوبَ الدَّرَّاجَاتِ.',
  },
  sorterNotes: 'Then build a three-part sentence: a technology + a process verb + an evaluation word (تُوَلِّدُ تُورْبِينَاتُ الرِّيَاحِ طَاقَةً نَظِيفَةً، وَهِيَ فَعَّالَةٌ).',
  patch: {
    writing: { model: site.writing.model.replace('تُمْكِنُ التِّقْنِيَّةُ', 'تُمَكِّنُ التِّقْنِيَّةُ') },
    speaking: {
      model: [
        ['A', 'هَلِ المُدُنُ الذَّكِيَّةُ حَلٌّ وَاقِعِيٌّ؟', 'Are smart cities a realistic solution?'],
        ['B', 'مِنْ أَهَمِّ فَوَائِدِهَا أَنَّهَا تُقَلِّلُ هَدْرَ الطَّاقَةِ وَالانْبِعَاثَاتِ، لٰكِنَّ بِنَاءَ البِنْيَةِ التَّحْتِيَّةِ مُكَلِّفٌ. أَرَى أَنَّهَا حَلٌّ وَاقِعِيٌّ عَلَى المَدَى البَعِيدِ.', 'One of their main benefits is that they reduce energy waste and emissions, but building the infrastructure is expensive. I think they are a realistic solution in the long term.'],
      ],
    },
  },
  patchNote: 'one vowel slip in the website writing model corrected (تُمْكِنُ → تُمَكِّنُ, “enables”) and English added to the website speaking model.',
  hints: ['al-alwāḥ is a non-human plural: ya- or ta-?', 'al-dhakāʾ is masculine: yustakhdamu or tustakhdamu?', 'tusāʿidu + which preposition?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: كُلَّ سَاعَةٍ · الذَّكَاءُ الاصْطِنَاعِيُّ · الأَلْوَاحُ.',
  listenRoutes: 'Core: questions 1–3. Develop / Stretch: all 6.',
  gloss: [
    ['تَسْتَخْدِمُ مَدِينَةٌ ذَكِيَّةٌ شَبَكَةً كَهْرَبَائِيَّةً تَرْصُدُ الاسْتِهْلَاكَ كُلَّ سَاعَةٍ.', 'A smart city uses an electricity grid that monitors consumption every hour.'],
    ['وَيُسْتَخْدَمُ الذَّكَاءُ الاصْطِنَاعِيُّ لِلتَّنَبُّؤِ بِالطَّلَبِ عَلَى الطَّاقَةِ،', 'And AI is used to predict demand for energy,'],
    ['بَيْنَمَا تُوَلِّدُ الأَلْوَاحُ الشَّمْسِيَّةُ وَتُورْبِينَاتُ الرِّيَاحِ جُزْءًا كَبِيرًا مِنَ الكَهْرَبَاءِ.', 'while solar panels and wind turbines generate a large part of the electricity.'],
    ['مِنْ أَهَمِّ الفَوَائِدِ أَنَّ النِّظَامَ يُقَلِّلُ الهَدْرَ،', 'One of the main benefits is that the system reduces waste,'],
    ['لٰكِنَّ التَّكْلِفَةَ الأُولَى لِبِنَاءِ الشَّبَكَةِ مُرْتَفِعَةٌ.', 'but the initial cost of building the grid is high.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'كَيْفَ تَعْمَلُ تِقْنِيَّةٌ خَضْرَاءُ؟' },
      { route: 'develop', ar: 'مَا أَهَمُّ فَوَائِدِهَا؟' },
      { route: 'stretch', ar: 'مَا التَّحَدِّيَاتُ الَّتِي تُوَاجِهُ تَطْبِيقَهَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'تُحَوِّلُ / تُوَلِّدُ ______ ______ .' },
      { route: 'develop', ar: 'مِنْ أَهَمِّ الفَوَائِدِ أَنَّ ______ .' },
      { route: 'stretch', ar: 'مِنْ أَبْرَزِ التَّحَدِّيَاتِ أَنَّ ______ ، وَلٰكِنْ عَلَى المَدَى البَعِيدِ ______ .' },
    ],
    modelEn: ['Are smart cities a realistic solution?', 'One of their main benefits is that they reduce energy waste and emissions, but building the infrastructure is expensive. I think they are a realistic solution in the long term.'],
    notes: 'Website prompts and model. Mini-debate: half the class argues the benefits (مِنْ أَهَمِّ الفَوَائِدِ …), half the challenges (مِنْ أَبْرَزِ التَّحَدِّيَاتِ …); the teacher gives the final long-term judgement.',
  },
  write: {
    core: { amount: '5 sentences', how: 'One technology: what it is, how it works (ta- verb), one benefit.' },
    develop: { amount: '100–120 words', how: 'How it works, what it is used for (passive), one benefit and one challenge.' },
    stretch: { amount: '130–140 words', how: 'Website task: evaluate one green technology or smart-city project with a long-term judgement.' },
  },
  frames: {
    core: [
      { en: 'Solar panels convert … into …', ar: 'تُحَوِّلُ الأَلْوَاحُ الشَّمْسِيَّةُ ______ إِلَى ______ .' },
      { en: 'Wind turbines generate …', ar: 'تُوَلِّدُ تُورْبِينَاتُ الرِّيَاحِ ______ .' },
      { en: 'It is effective because …', ar: 'هِيَ فَعَّالَةٌ لِأَنَّ ______ .' },
      { en: 'One of the main benefits is that …', ar: 'مِنْ أَهَمِّ الفَوَائِدِ أَنَّ ______ .' },
    ],
    develop: [
      { en: '… is used to …', ar: 'يُسْتَخْدَمُ / تُسْتَخْدَمُ ______ لِـ ______ .' },
      { en: '… helps to …', ar: 'تُسَاعِدُ ______ عَلَى ______ .' },
      { en: 'One of the biggest challenges is that …', ar: 'مِنْ أَبْرَزِ التَّحَدِّيَاتِ أَنَّ ______ .' },
      { en: 'In the long term, …', ar: 'عَلَى المَدَى البَعِيدِ، ______ .' },
    ],
    bank: ['الأَلْوَاحُ الشَّمْسِيَّةُ', 'تُورْبِينَاتُ الرِّيَاحِ', 'مَدِينَةٌ ذَكِيَّةٌ', 'تُحَوِّلُ', 'تُوَلِّدُ', 'تُخَفِّضُ', 'تَرْصُدُ', 'يُسْتَخْدَمُ', 'تُسَاعِدُ عَلَى', 'فَعَّالٌ', 'مُكَلِّفٌ', 'مِنْ أَهَمِّ الفَوَائِدِ أَنَّ'],
  },
  stretch: [
    ['تُعَدُّ … مِثَالًا عَلَى', '… is considered an example of'],
    ['المَبَانِي مُصَمَّمَةٌ لِتَقْلِيلِ …', 'buildings are designed to reduce …'],
    ['يَحْتَاجُ تَعْمِيمُ هٰذِهِ الحُلُولِ إِلَى …', 'spreading these solutions needs …'],
    ['اسْتِثْمَارٌ كَبِيرٌ وَتَخْطِيطٌ طَوِيلُ المَدَى', 'major investment and long-term planning'],
    ['أَرَى أَنَّ الاسْتِثْمَارَ فِيهَا مُهِمٌّ', 'I think investing in it is important'],
  ],
  modelEn: 'Green technology enables cities to reduce energy consumption and emissions. Solar panels convert sunlight into electricity, and wind turbines generate clean energy. AI is also used to monitor consumption and predict demand. One of the main benefits is that these systems reduce waste. The biggest challenge, however, is the high initial cost. Nevertheless, I think investing in them is important because they save money and energy in the long term.',
  find: ['how it works (active ta- verb)', 'a passive (yustakhdamu)', 'a benefit and a challenge', 'a long-term judgement'],
  modelNotes: 'Website writing model (one vowel slip corrected: تُمَكِّنُ). Evidence: تُحَوِّلُ، تُوَلِّدُ (active) · يُسْتَخْدَمُ الذَّكَاءُ الاصْطِنَاعِيُّ لِرَصْدِ … (passive) · مِنْ أَهَمِّ الفَوَائِدِ أَنَّ … · أَمَّا أَبْرَزُ التَّحَدِّيَاتِ فَهُوَ … · وَمَعَ ذٰلِكَ، أَرَى أَنَّ … عَلَى المَدَى البَعِيدِ.',
  selfCheck: [
    { route: 'core', text: 'My process verbs agree (ta- for feminine / non-human plural).' },
    { route: 'core', text: 'I explained how one technology works.' },
    { route: 'develop', text: 'I used a passive: yustakhdamu / tustakhdamu … li-.' },
    { route: 'develop', text: 'tusāʿidu ʿalā + a verbal noun.' },
    { route: 'stretch', text: 'Benefit + challenge + long-term judgement.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['تُعَدُّ', 'is considered'], ['مِثَالًا عَلَى', 'an example of'], ['التَّخْطِيطِ المُسْتَدَامِ', 'sustainable planning'], ['مُصَمَّمَةٌ', 'designed'], ['لِتَوْلِيدِ', 'to generate'],
    ['وَسَائِلُ النَّقْلِ النَّظِيفَةُ', 'clean transport'], ['خَفْضِ الانْبِعَاثَاتِ', 'reducing emissions'], ['تَعْمِيمُ', 'spreading, generalising'], ['اسْتِثْمَارٍ كَبِيرٍ', 'major investment'], ['طَوِيلِ المَدَى', 'long-term'],
  ],
  prep: {
    words: [['المَوَارِدُ', 'resources', 'sing. مَوْرِدٌ'], ['الاسْتِدَامَةُ', 'sustainability', '—'], ['شُحُّ المِيَاهِ', 'water scarcity', '—'], ['يَنْضَبُ', 'runs out', 'تَنْضَبُ she / it (f.)'], ['يَهْدِرُ', 'wastes', 'أَهْدِرُ I']],
    questionEn: 'Which resource do we waste most at home? Write one sentence.',
    questionAr: 'نَهْدِرُ … فِي البَيْتِ.',
    homework: {
      core: 'Learn 12 green-tech words; write 5 sentences about one technology.',
      develop: 'Evaluate one technology in 100–120 words with a passive and tusāʿidu ʿalā.',
      stretch: 'Website writing task: evaluate a green technology or smart-city project (130–140 words).',
    },
    wordsSource: 'The five words come from the website D4-L07 vocabulary (resources and sustainability).',
  },
  remember: 'Remember: ta- for feminine / non-human plural subjects — yustakhdamu … li- — tusāʿidu ʿalā — benefit, challenge, long-term view.',
});

module.exports = { meta, slides };
