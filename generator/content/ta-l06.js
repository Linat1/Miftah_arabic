'use strict';
/* AT-A-L06 · Healthy Eating and Lifestyle Choices — website: Advanced Topics › Topic A › Lesson 6 (lesson engine P1-L01 “Diet and Nutrition”).
   The engine is a Progression lesson (academic register), so Core works with غَنِيٌّ بِـ / صِحِّيٌّ and the three content structures are the
   Develop / Stretch target. On the website P1-L01 patterns have no English and the sorter has no title: both are teacher-written here. */
const T = require('./topic-common');
const D = require('./d-common');
const { q } = D;

const meta = T.meta('A', 6, { fileTitle: 'Healthy_Eating_and_Lifestyle_Choices', chip: 'Healthy Eating', icon: 'FaAppleWhole' });
const nx = T.nextOf('A', 6);

const A = (m, f, pl, plLabel = 'pl.') => ({ tag: 'm · f · pl', forms: [{ l: plLabel, ar: pl }, { l: 'f.', ar: f }, { l: 'm.', ar: m }] });
const forms = {
  'مُتَوَازِنٌ / مُتَوَازِنَةٌ': A('مُتَوَازِنٌ', 'مُتَوَازِنَةٌ', 'مُتَوَازِنُونَ'),
  'مُعَالَجٌ / مُعَالَجَةٌ': A('مُعَالَجٌ', 'مُعَالَجَةٌ', 'مُعَالَجَةٌ', 'things pl.'),
  'عُضْوِيٌّ / عُضْوِيَّةٌ': A('عُضْوِيٌّ', 'عُضْوِيَّةٌ', 'عُضْوِيَّةٌ', 'things pl.'),
  'غَنِيٌّ بِـ': A('غَنِيٌّ بِـ', 'غَنِيَّةٌ بِـ', 'غَنِيَّةٌ بِـ', 'things pl.'),
  'دُهُونٌ': { tag: 'pl. · sing.', forms: [{ l: 'sing.', ar: 'دُهْنٌ' }, { l: 'pl.', ar: 'دُهُونٌ' }] },
  'أَلْيَافٌ': { tag: 'pl. · sing.', forms: [{ l: 'sing.', ar: 'لِيفٌ' }, { l: 'pl.', ar: 'أَلْيَافٌ' }] },
  'مَعَادِنُ': { tag: 'pl. · sing.', forms: [{ l: 'sing.', ar: 'مَعْدِنٌ' }, { l: 'pl.', ar: 'مَعَادِنُ' }] },
  'فِيتَامِينَاتٌ': { tag: 'pl. · sing.', forms: [{ l: 'sing.', ar: 'فِيتَامِينٌ' }, { l: 'pl.', ar: 'فِيتَامِينَاتٌ' }] },
};

const raw = D.devLesson('P1-L01', {
  siteRef: 'Advanced Topics › Topic A › Lesson 6 (AT-A-L06), lesson engine Pathways › Progression › P1 › P1-L01',
  support: `• The website engine is a Progression (B1+) lesson in academic register. For this class: Core = “X is healthy / not healthy because it is rich in … / it contains …” with 6 nutrient words; Develop = all three content structures with the right preposition (يَحْتَوِي عَلَى · غَنِيٌّ بِـ · يَفْتَقِرُ إِلَى); Stretch = the impersonal advice يُوصَى بِـ / يُنْصَحُ بِـ and an effect (يُقَلِّلُ مِنْ).
• The Topic A challenge (healthy-choice sort) is accessible to everyone and is where Core students give practical advice.
• Agreement: plurals of THINGS take a feminine singular adjective (دُهُونٌ مُشْبَعَةٌ) — the same rule students met with food adjectives in AT-A-L04.
• Links: AT-A-L04 food words and AT-A-L05 menu items are the examples. Sensitivity: talk about foods and habits, never about bodies or weight.
• Urdu bridge: غذا، صحت، متوازن، معدنیات، پروٹین / وٹامن (English loans in both languages).`,
  teach: 'Nutrients, then contains / rich in / lacks, then advice.',
  wedo: 'Picture match, sort the prepositions, fix and listen.',
  next: nx,
  flexGroups: [2],
  kwText: '27 nutrition words from the website in 3 groups. Core: 6 nutrient words + healthy / balanced. Academic verbs (group 3) are FLEX for Stretch.',
  doNow: {
    questions: [
      q('What does أَلْيَافٌ mean?', ['fibre', 'fats', 'vitamins'], 'Prepared at home (AT-A-L05).'),
      q('What does مُتَوَازِنٌ mean?', ['balanced', 'healthy', 'processed'], 'Prepared at home (AT-A-L05).'),
      q('Choose the polite order (to a woman).', ['أُرِيدُ مَاءً، مِنْ فَضْلِكِ.', 'أُرِيدُ مَاءً، مِنْ فَضْلِكَ.', 'أَعْطِنِي مَاءً.'], 'AT-A-L05: -ki to a woman.'),
      q('Complete: كَمْ ___ الحَسَاءِ؟', ['سِعْرُ', 'عِنْدَكُمْ', 'فَضْلُكَ'], 'AT-A-L05: price question.'),
      q('Choose “The coffee is bitter.”', ['القَهْوَةُ مُرَّةٌ.', 'القَهْوَةُ مُرٌّ.', 'القَهْوَةُ مُرُّونَ.'], 'AT-A-L04: feminine agreement.'),
    ],
    keyIdea: { text: 'Each describing word has its own little word after it: contains → ‘alā · rich → bi- · lacks → ilā.', ar: 'يَحْتَوِي {k|عَلَى}  ·  غَنِيٌّ {k|بِـ}  ·  يَفْتَقِرُ {k|إِلَى}' },
    retrieves: 'Questions 1–2 test two of the five nutrition words prepared at home at the end of AT-A-L05. Questions 3–5 retrieve AT-A-L05 (polite request, price) and AT-A-L04 (feminine agreement).',
  },
  routes: {
    core: ['I can name 6 nutrients.', 'I can say a food is healthy because it is rich in …'],
    develop: ['I can use contains / rich in / lacks with the right preposition.', 'I can make a plural of things agree (duhūn mushba‘a).'],
    stretch: ['I can give impersonal advice: yūṣā bi- …', 'I can analyse a whole meal and its effect.'],
  },
  bridge: [
    { ar: 'غِذَاءٌ', urdu: 'غذا', tr: 'ghidhā’', en: 'food, nourishment' },
    { ar: 'صِحِّيٌّ', urdu: 'صحت', tr: 'ṣiḥḥī', en: 'healthy (Urdu: health)' },
    { ar: 'مُتَوَازِنٌ', urdu: 'متوازن', tr: 'mutawāzin', en: 'balanced' },
    { ar: 'مَعَادِنُ', urdu: 'معدنیات', tr: 'ma‘ādin', en: 'minerals' },
    { ar: 'بُرُوتِينٌ', urdu: 'پروٹین', tr: 'brūtīn', en: 'protein (loanword)' },
  ],
  bridgeNotes: 'URDU BRIDGE: غذا، صحت، متوازن and معدنیات come from the same Arabic roots. پروٹین / وٹامن are English loans in both languages — easy wins for Core.',
  core: ['بُرُوتِينٌ', 'كَرْبُوهِيدْرَاتٌ', 'دُهُونٌ', 'أَلْيَافٌ', 'فِيتَامِينَاتٌ', 'مَعَادِنُ', 'غَنِيٌّ بِـ', 'يَحْتَوِي عَلَى', 'مُتَوَازِنٌ / مُتَوَازِنَةٌ'],
  forms,
  vocabNotes: {
    0: 'Nutrient plurals are plurals of THINGS: the adjective is feminine singular — دُهُونٌ مُشْبَعَةٌ، سُعْرَاتٌ حَرَارِيَّةٌ.',
    1: 'Learn each describing word WITH its preposition: يَحْتَوِي عَلَى، غَنِيٌّ بِـ، يَفْتَقِرُ إِلَى.',
    2: 'FLEX (Stretch): academic verbs for advice and effects — يُوصَى بِـ is passive: “it is recommended to”.',
  },
  patch: {
    patterns: [
      { ar: 'يَحْتَوِي السَّمَكُ عَلَى بُرُوتِينٍ.', en: 'Fish contains protein.', tip: 'contains + ‘alā' },
      { ar: 'الخُضَرُ وَالفَوَاكِهُ غَنِيَّةٌ بِالفِيتَامِينَاتِ.', en: 'Vegetables and fruit are rich in vitamins.', tip: 'rich + bi-' },
      { ar: 'دُهُونٌ مُشْبَعَةٌ', en: 'saturated fats', tip: 'Plural of things → feminine singular adjective.' },
      { ar: 'يُوصَى بِتَنَاوُلِ الخُضَرِ يَوْمِيًّا.', en: 'It is recommended to eat vegetables daily.', tip: 'Advice without naming who gives it.' },
    ],
    sorter: {
      title: 'Which little word follows?', instructions: 'Sort each word by the preposition that always follows it.',
      categories: ['عَلَى', 'بِـ', 'إِلَى / مِنْ'],
      items: [{ label: 'يَحْتَوِي', category: 0 }, { label: 'يُحَافِظُ', category: 0 }, { label: 'غَنِيٌّ', category: 1 }, { label: 'يُوصَى', category: 1 }, { label: 'يُنْصَحُ', category: 1 }, { label: 'يَفْتَقِرُ', category: 2 }, { label: 'يُؤَدِّي', category: 2 }, { label: 'يُقَلِّلُ', category: 2 }],
    },
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · three ways to describe content (website table)', title: 'Contains · rich in · lacks', ar: 'يَحْتَوِي · غَنِيٌّ · يَفْتَقِرُ',
      cols: [{ label: 'Structure', w: 2.6, size: 24 }, { label: 'Preposition', w: 1.9, size: 24 }, { label: 'Example', w: 5.0, size: 22 }, { label: 'Meaning', w: 2.83 }],
      rows: [
        { core: true, cells: [{ ar: 'غَنِيٌّ / غَنِيَّةٌ' }, { ar: '{k|بِـ}' }, { ar: 'التَّمْرُ غَنِيٌّ {k|بِـ}الحَدِيدِ.' }, 'rich in — dates are rich in iron'] },
        { core: true, cells: [{ ar: 'يَحْتَوِي / تَحْتَوِي' }, { ar: '{k|عَلَى}' }, { ar: 'يَحْتَوِي السَّمَكُ {k|عَلَى} بُرُوتِينٍ.' }, 'contains — fish contains protein'] },
        { cells: [{ ar: 'يَفْتَقِرُ / تَفْتَقِرُ' }, { ar: '{k|إِلَى}' }, { ar: 'يَفْتَقِرُ الطَّعَامُ {k|إِلَى} الأَلْيَافِ.' }, 'lacks — the food lacks fibre'] },
        { cells: [{ ar: 'يُقَلِّلُ' }, { ar: '{k|مِنْ}' }, { ar: 'يُقَلِّلُ {k|مِنَ} الخَطَرِ.' }, 'reduces — it reduces the risk'] },
      ],
      foot: 'Feminine food → feminine verb or adjective: as-salaṭa ghaniyya bi- … · taḥtawī ‘alā …',
      notes: `GRAMMAR PART 1 — website rules “يَحْتَوِي عَلَى” and “غَنِيٌّ بِـ and يَفْتَقِرُ إِلَى” and the website structure/preposition table.
Website common error: swapping the prepositions (يَحْتَوِي الحَلِيبُ بِالكَالْسْيُومِ ✗ → عَلَى الكَالْسْيُومِ ✓).
Core: rows 1–2 only (rich in, contains). The noun after the preposition is genitive (-in) — Stretch.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · agreement and advice (website rules) · Develop / Stretch', title: 'Plurals of things, and advice', ar: 'دُهُونٌ مُشْبَعَةٌ · يُوصَى بِـ',
      cards: [
        { chip: 'HEALTHY? · CORE', color: '1E7B4F', head: 'صِحِّيٌّ / صِحِّيَّةٌ', big: 'السَّلَطَةُ صِحِّيَّةٌ لِأَنَّهَا غَنِيَّةٌ بِالفِيتَامِينَاتِ.', en: 'Salad is healthy because it is rich in vitamins.', clue: 'Salad is feminine → -iyya.' },
        { chip: 'THINGS PL. · DEVELOP', color: 'C77700', head: 'things → f. sing.', big: 'دُهُونٌ مُشْبَعَةٌ · مَعَادِنُ مُهِمَّةٌ', en: 'saturated fats · important minerals', clue: 'Not -ūna: that is for people.' },
        { chip: 'ADVICE · STRETCH', color: 'B83227', head: 'يُوصَى بِـ', big: 'يُوصَى بِتَقْلِيلِ السُّكَّرِ.', en: 'It is recommended to reduce sugar.', clue: 'No doer named: passive.' },
      ],
      error: { text: 'Website common error: a plural of things is not human.', pairs: [['دُهُونٌ مُشْبَعَةٌ', 'دُهُونٌ مُشْبَعُونَ']] },
      notes: `GRAMMAR PART 2 — website rules “Non-human plural agreement” (دُهُون، أَلْيَاف، مَعَادِن، سُعْرَات + feminine singular adjective) and “The impersonal recommendation” (يُوصَى بِـ + verbal noun: يُوصَى بِتَنَاوُلِ الخُضَرِ يَوْمِيًّا · يُنْصَحُ بِتَقْلِيلِ المِلْحِ).
The Core card (صِحِّيٌّ / صِحِّيَّةٌ + لِأَنَّهُ / لِأَنَّهَا) is teacher-added so every student has a complete sentence. Topic A grammar for this lesson: “modal advice; reasons and healthy habits” — Develop can also use يَجِبُ أَنْ (website game: يَجِبُ أَنْ نَأْكُلَ خُضْرَوَاتٍ).`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me analyse a meal',
    steps: [
      { head: 'The meal', ar: 'وَجْبَتِي: أَرُزٌّ وَدَجَاجٌ وَسَلَطَةٌ.', think: 'AT-A-L04 food words.' },
      { head: 'Contains', ar: 'تَحْتَوِي الوَجْبَةُ {k|عَلَى} بُرُوتِينٍ.', think: 'Meal is f. → taḥtawī.' },
      { head: 'Rich in', ar: 'السَّلَطَةُ غَنِيَّةٌ {k|بِـ}الأَلْيَافِ.', think: 'Salad f. → ghaniyya.' },
      { head: 'Lacks + advice', ar: 'تَفْتَقِرُ {k|إِلَى} الفَاكِهَةِ، فَ{p|يُوصَى بِـ}إِضَافَةِ تُفَّاحَةٍ.', think: 'Gap → advice.' },
    ],
    legend: ['k', 'p'], legendLabels: { k: 'PREPOSITION', p: 'ADVICE' },
    model: 'تَنَاوَلْتُ أَرُزًّا وَدَجَاجًا وَسَلَطَةً. تَحْتَوِي الوَجْبَةُ {k|عَلَى} بُرُوتِينٍ وَكَرْبُوهِيدْرَاتٍ، وَالسَّلَطَةُ غَنِيَّةٌ {k|بِـ}الأَلْيَافِ وَالفِيتَامِينَاتِ. وَلٰكِنَّهَا تَفْتَقِرُ {k|إِلَى} الفَاكِهَةِ، لِذٰلِكَ {p|يُوصَى بِـ}إِضَافَةِ تُفَّاحَةٍ.',
    modelEn: 'I ate rice, chicken and salad. The meal contains protein and carbohydrates, and the salad is rich in fibre and vitamins. But it lacks fruit, so it is recommended to add an apple.',
    notes: 'I DO (3 min) — the website speaking model and writing model (a meal of rice, chicken and salad) simplified to four steps. Think aloud: “which structure? which little word after it? is the subject feminine?”',
  },
  game: {
    title: 'Healthy or not? Match the picture',
    pick: [0, 1, 3],
    en: ['This is a healthy, balanced meal.', 'This meal is rich in sugar and fat.', 'It is important to drink enough water.'],
    icons: [[['fa6', 'FaLeaf', '1E7B4F'], ['fa6', 'FaAppleWhole', 'B83227']], [['fa6', 'FaBurger', 'C77700'], ['fa6', 'FaCakeCandles', 'B83280']], [['fa6', 'FaGlassWater', '1D5FBF'], ['fa6', 'FaDroplet', '1D5FBF']]],
    labels: ['salad, apple, water', 'burger, cake', 'water, water, water'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Ask: find the word “rich in” (غَنِيَّةٌ بِـ) — which card? Other cards for homework: يَجِبُ أَنْ نَأْكُلَ خُضْرَوَاتٍ وَفَوَاكِهَ كَثِيرَةً، التَّوَازُنُ فِي الغِذَاءِ مُهِمٌّ، يَنْبَغِي تَقْلِيلُ السُّكَّرِ.',
  },
  sorterCats: ['عَلَى', 'بِـ', 'إِلَى أَوْ مِنْ'],
  sorterNotes: 'The sorter categories are the website’s; the title and instruction are teacher-written (missing on the website page). Then: make one sentence with a word from each column.',
  hints: ['Contains + which preposition?', 'Fats are things: which adjective ending?', 'Lacks + which preposition?'],
  coreTip: 'Listen twice. Core: questions 2 and 4.\nListen for: غَنِيَّةٌ بِالفِيتَامِينَاتِ · خَمْسِ حِصَصٍ.',
  listenRoutes: 'Core: questions 2 and 4. Develop / Stretch: all 5.',
  gloss: [
    ['النِّظَامُ الغِذَائِيُّ المُتَوَازِنُ يَحْتَوِي عَلَى بُرُوتِينٍ وَكَرْبُوهِيدْرَاتٍ وَدُهُونٍ غَيْرِ مُشْبَعَةٍ.', 'A balanced diet contains protein, carbohydrates and unsaturated fats.'],
    ['الخُضَرُ وَالفَوَاكِهُ غَنِيَّةٌ بِالفِيتَامِينَاتِ وَالمَعَادِنِ، وَتَحْتَوِي عَلَى أَلْيَافٍ تُسَاعِدُ الهَضْمَ.', 'Vegetables and fruit are rich in vitamins and minerals, and contain fibre that helps digestion.'],
    ['أَمَّا الأَطْعِمَةُ المُعَالَجَةُ فَتَحْتَوِي عَادَةً عَلَى دُهُونٍ مُشْبَعَةٍ وَمِلْحٍ كَثِيرٍ، وَتَفْتَقِرُ إِلَى الأَلْيَافِ.', 'As for processed foods, they usually contain saturated fats and a lot of salt, and lack fibre.'],
    ['يُوصَى بِتَنَاوُلِ خَمْسِ حِصَصٍ مِنَ الخُضَرِ وَالفَوَاكِهِ يَوْمِيًّا، وَيُنْصَحُ بِتَقْلِيلِ السُّكَّرِ.', 'It is recommended to eat five portions of vegetables and fruit daily, and it is advised to reduce sugar.'],
    ['وَيُقَلِّلُ هٰذَا مِنْ خَطَرِ أَمْرَاضِ القَلْبِ، وَيَزِيدُ مِنَ الطَّاقَةِ اليَوْمِيَّةِ.', 'This reduces the risk of heart disease and increases daily energy.'],
  ],
  speak: {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'هَلْ وَجْبَتُكَ صِحِّيَّةٌ؟ لِمَاذَا؟' },
      { route: 'develop', ar: 'صِفْ وَجْبَةً تَنَاوَلْتَهَا. عَلَى مَاذَا تَحْتَوِي؟' },
      { route: 'develop', ar: 'بِمَاذَا هِيَ غَنِيَّةٌ؟ وَإِلَى مَاذَا تَفْتَقِرُ؟' },
      { route: 'stretch', ar: 'بِمَاذَا تُوصِي لِتَحْسِينِهَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'نَعَمْ، وَجْبَتِي صِحِّيَّةٌ لِأَنَّهَا غَنِيَّةٌ بِـ ______ .' },
      { route: 'develop', ar: 'تَحْتَوِي عَلَى ______ وَ ______ .' },
      { route: 'develop', ar: 'هِيَ غَنِيَّةٌ بِـ ______ ، وَلٰكِنَّهَا تَفْتَقِرُ إِلَى ______ .' },
      { route: 'stretch', ar: 'يُوصَى بِـ ______ لِأَنَّ ذٰلِكَ يُقَلِّلُ مِنْ ______ .' },
    ],
    modelEn: ['Describe a meal you ate. What does it contain?', 'It contains protein and carbohydrates, and it is rich in fibre.'],
    notes: 'Website prompts 1–3; the Core prompt is teacher-made. Website model continues: A: وَإِلَى مَاذَا تَفْتَقِرُ؟ B: تَفْتَقِرُ إِلَى الخُضَرِ، وَلِذٰلِكَ يُوصَى بِإِضَافَةِ سَلَطَةٍ.',
  },
  write: {
    core: { amount: '5 sentences', task: 'Website Core: five sentences naming nutrients with accurate agreement.', how: 'Two healthy foods + “rich in …”, one unhealthy food + “contains …”, one piece of advice (yajibu an …).' },
    develop: { amount: '6–8 sentences', task: 'Website Develop: add the three content structures with their correct prepositions.', how: 'Analyse your lunch: contains / rich in / lacks + one agreeing plural (duhūn mushba‘a).' },
    stretch: { amount: '80–90 words', task: 'Website task: analyse a meal in academic register.', how: 'All three structures, an impersonal recommendation (yūṣā bi-) and an effect (yuqallilu min …).' },
  },
  frames: {
    core: [
      { en: '… is healthy.', ar: '______ صِحِّيٌّ. / ______ صِحِّيَّةٌ.' },
      { en: '… is rich in vitamins.', ar: '______ غَنِيٌّ بِالفِيتَامِينَاتِ.' },
      { en: '… contains protein.', ar: 'يَحْتَوِي ______ عَلَى بُرُوتِينٍ.' },
      { en: '… is not healthy because …', ar: '______ لَيْسَ صِحِّيًّا لِأَنَّهُ ______ .' },
      { en: 'We must eat …', ar: 'يَجِبُ أَنْ نَأْكُلَ ______ .' },
    ],
    develop: [
      { en: 'The meal contains …', ar: 'تَحْتَوِي الوَجْبَةُ عَلَى ______ .' },
      { en: 'It is rich in …', ar: 'هِيَ غَنِيَّةٌ بِـ ______ .' },
      { en: 'But it lacks …', ar: 'وَلٰكِنَّهَا تَفْتَقِرُ إِلَى ______ .' },
      { en: 'Processed foods contain saturated fats.', ar: 'تَحْتَوِي الأَطْعِمَةُ المُعَالَجَةُ عَلَى دُهُونٍ مُشْبَعَةٍ.' },
      { en: 'It is recommended to …', ar: 'يُوصَى بِـ ______ .' },
    ],
    bank: ['بُرُوتِينٌ', 'كَرْبُوهِيدْرَاتٌ', 'دُهُونٌ', 'أَلْيَافٌ', 'فِيتَامِينَاتٌ', 'مَعَادِنُ', 'صِحِّيٌّ / صِحِّيَّةٌ', 'غَنِيٌّ بِـ', 'يَحْتَوِي عَلَى', 'يَفْتَقِرُ إِلَى', 'مُتَوَازِنٌ', 'يُوصَى بِـ'],
  },
  stretch: [
    ['يُوصَى بِإِضَافَةِ حِصَّةٍ مِنَ الفَاكِهَةِ', 'it is recommended to add a portion of fruit'],
    ['مِلْحٌ أَكْثَرُ مِمَّا يَنْبَغِي', 'more salt than it should'],
    ['يُقَلِّلُ مِنْ خَطَرِ ارْتِفَاعِ ضَغْطِ الدَّمِ', 'reduces the risk of high blood pressure'],
    ['يَزِيدُ مِنَ القِيمَةِ الغِذَائِيَّةِ', 'increases the nutritional value'],
    ['لَيْسَ الهَدَفُ الكَمَالَ، بَلْ عَادَةٌ مُسْتَدَامَةٌ', 'the goal is not perfection but a lasting habit'],
  ],
  modelEn: 'Yesterday I ate a simple meal of rice, chicken and salad. This meal contains high-quality protein and complex carbohydrates, and it is rich in fibre and some minerals. But it lacks fruit, and it contains more salt than it should. It is recommended to add a portion of fruit and to reduce salt, because that reduces the risk of high blood pressure and increases the nutritional value. The goal is not perfection, but a lasting habit.',
  find: ['“contains” with ‘alā', '“rich in” with bi-', '“lacks” with ilā', 'an impersonal recommendation'],
  modelNotes: 'Evidence: تَحْتَوِي … عَلَى بُرُوتِينٍ · غَنِيَّةٌ بِالأَلْيَافِ · تَفْتَقِرُ إِلَى الفَوَاكِهِ · يُوصَى بِإِضَافَةِ … Core: find just the first two.',
  selfCheck: [
    { route: 'core', text: 'I said why a food is healthy (rich in …).' },
    { route: 'core', text: 'Feminine food → feminine adjective (ṣiḥḥiyya).' },
    { route: 'develop', text: 'Each structure has its own preposition.' },
    { route: 'develop', text: 'Plurals of things → feminine singular adjective.' },
    { route: 'stretch', text: 'I used yūṣā bi- and an effect.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['يَعْتَمِدُ عَلَى', 'depends on'], ['التَّنَوُّعِ', 'variety'], ['الحِرْمَانِ', 'deprivation, going without'], ['لِبِنَاءِ العَضَلَاتِ', 'to build muscles'], ['مَصْدَرًا لِلطَّاقَةِ', 'as a source of energy'],
    ['لِوَظَائِفَ حَيَوِيَّةٍ', 'for vital functions'], ['القِيمَةِ الغِذَائِيَّةِ', 'nutritional value'], ['المُلْصَقَاتِ', 'the labels'], ['قَبْلَ الشِّرَاءِ', 'before buying'], ['عَادَاتٌ مُسْتَدَامَةٌ', 'lasting habits'],
  ],
  prep: {
    words: [['رَأْسٌ', 'head', 'pl. رُؤُوسٌ'], ['عَيْنٌ', 'eye', 'two: عَيْنَانِ'], ['يَدٌ', 'hand', 'two: يَدَانِ'], ['رِجْلٌ', 'leg', 'two: رِجْلَانِ'], ['مَعِدَةٌ', 'stomach', '']],
    questionEn: 'Point to and name three parts of your body in Arabic.',
    questionAr: 'مَا هٰذَا؟',
    homework: {
      core: 'Website P1-L01: vocabulary tab — learn 6 nutrients; write 3 “rich in” sentences.',
      develop: 'Analyse your lunch in 6 sentences with contains / rich in / lacks.',
      stretch: 'Website writing task: 80–90 words analysing a meal in academic register.',
    },
    wordsSource: 'The five words come from the website F5-L07 vocabulary (the AT-A-L07 lesson engine).',
  },
  remember: 'Remember: 5 body words — and the “two” form (‘aynāni).',
});
const slides = T.wrap('A', 6, 'P1-L01', raw, {
  challenge: {
    steps: [
      'Teacher shows the 4 habits on the right, then types 2 more in the chat.',
      'Everyone types H (helpful), U (unhelpful) or D (depends) in the chat.',
      'Two students justify one choice each with “because …”.',
      'Turn three habits into advice: yajibu an … / yūṣā bi- …',
    ],
    routes: {
      core: 'Sort all six. Say one: “… ṣiḥḥī li’annahu …” (… is healthy because …).',
      develop: 'Justify two decisions with contains / rich in, and give one piece of advice.',
      stretch: 'Explain a “depends” habit and give advice with yūṣā bi- plus an effect.',
    },
    phrases: [['شُرْبُ المَاءِ الكَافِي', 'drinking enough water'], ['النَّوْمُ ثَمَانِيَ سَاعَاتٍ', 'sleeping eight hours'], ['المَشْرُوبَاتُ الغَازِيَّةُ كُلَّ يَوْمٍ', 'fizzy drinks every day'], ['الوَجَبَاتُ السَّرِيعَةُ', 'fast food']],
    notes: 'Habits 5–6 for the chat: المَشْيُ إِلَى المَدْرَسَةِ (walking to school), العَصِيرُ مَعَ الإِفْطَارِ (juice with breakfast). Suggested answers: water H · sleep H · fizzy drinks every day U · walking to school H · fast food D (sometimes is fine; every day is not) · juice D (rich in vitamins but contains sugar). Accept any justified answer. Advice models: يَجِبُ أَنْ نَشْرَبَ مَاءً كَافِيًا · يُوصَى بِتَقْلِيلِ المَشْرُوبَاتِ الغَازِيَّةِ · يُنْصَحُ بِالمَشْيِ كُلَّ يَوْمٍ.',
  },
});
module.exports = { meta, slides };
