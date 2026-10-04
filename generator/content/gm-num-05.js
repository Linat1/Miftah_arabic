'use strict';
/* GM-NUM-05 · Measurements — website: Mastery & Revision › Numeracy Mastery 05 (units kīlū, ghrām, niṣfu / rubuʿu kīlū, litr, mitr and
 * containers; conversions niṣfu kīlū = 500 g, rubuʿu kīlū = 250 g; gram hundreds miʾatu / miʾatā / thalāthumiʾati / khamsumiʾati ghrāmin;
 * ghrām is masculine like junayh; ordering pattern quantity + min + food (kīlū mina ṭ-ṭamāṭim); market foods; the six-move grocer
 * script with kami l-ḥisāb?; measurements in the real world). The website quizzes are interactive and not stored, so all questions are
 * teacher-written on the website content. Spelling: the deck uses مِئَة (website: مِائَة). */
const G = require('./gm-common');
const { q } = G;

const KEY = 'numeracy__numbers__numeracy-mastery-05-measurements';

const meta = G.meta({
  code: 'GM-NUM-05', fileTitle: 'Measurements', title: 'Measurements', arabic: 'الْوَزْنُ وَالْقِيَاسُ',
  focus: 'Order like a local: urīdu kīlū mina ṭ-ṭamāṭim (a kilo of tomatoes), niṣfu kīlū = 500 g, rubuʿu kīlū = 250 g, miʾatā ghrāmin = 200 g. Then ask kami l-ḥisāb? and check your change.',
  icon: 'FaScaleBalanced',
});

const slides = G.gmLesson({
  code: 'GM-NUM-05', site: KEY,
  support: `• Core: كِيلُو · نِصْفُ كِيلُو · رُبُعُ كِيلُو · لِتْرٌ with market foods, and the pattern أُرِيدُ … مِنَ … . Develop: conversions (500 g, 250 g), the gram hundreds (مِئَةُ · مِئَتَا · خَمْسُمِئَةِ غْرَامٍ) and containers (زُجَاجَةٌ · عُلْبَةٌ). Stretch: the six-move grocer dialogue with كَمِ الْحِسَابُ؟ and multi-step quantity–price problems.
• Website link: niṣf and rubuʿ are the SAME fraction words as in telling the time (GM-NUM-02). Ghrām is masculine, so it follows the money rules (GM-NUM-04).
• Heritage link (website): a family biryani list is a measurements lesson — kīlū mina l-aruzz, niṣfu kīlū mina l-baṣal …`,
  teach: 'Units; conversions and hundreds; ordering; the grocer.',
  wedo: 'Convert; sort the unit; repair.',
  next: { nextCode: 'GM-NUM-06', nextTitle: 'Dates and Calendars', nextAr: 'التَّارِيخُ وَالتَّقْوِيمُ' },
  doNow: {
    questions: [
      q('Choose “five pounds”.', ['خَمْسَةُ جُنَيْهَاتٍ', 'خَمْسُ جُنَيْهَاتٍ', 'خَمْسَةُ جُنَيْهًا'], 'GM-NUM-04: masculine currency.'),
      q('What does نِصْفٌ mean?', ['half', 'quarter', 'third'], 'GM-NUM-02.'),
      q('What does رُبُعٌ mean?', ['quarter', 'half', 'kilo'], 'GM-NUM-02.'),
      q('What is a لِتْرٌ?', ['a litre', 'a metre', 'a kilo'], 'Prep word.'),
      q('Choose “How much is this?”', ['بِكَمْ هَذَا؟', 'كَمْ عُمْرُكَ؟', 'كَمِ السَّاعَةُ؟'], 'GM-NUM-04.'),
    ],
    keyIdea: { text: 'Quantity + min + food: kīlū mina ṭ-ṭamāṭim. Half a kilo = 500 g; a quarter = 250 g.', ar: '{k|نِصْفُ كِيلُو} {e|مِنَ الْجُبْنِ} ‖ {k|مِئَتَا غْرَامٍ} {e|مِنَ الزَّيْتُونِ}' },
    retrieves: 'Teacher-written retrieval from GM-NUM-02 (fractions) and GM-NUM-04 (money, bi-kam?).',
  },
  objectives: ['Use common units of weight, capacity and length.', 'Convert kilos and grams.', 'Order quantities with the min pattern.', 'Complete a grocer’s transaction with the bill and change.'],
  routes: {
    core: ['I ask for a kilo or half a kilo of a food.', 'I say a litre of milk.'],
    develop: ['I convert: niṣfu kīlū = 500 g.', 'I say miʾatā ghrāmin (200 g).'],
    stretch: ['I run the six-move grocer dialogue.', 'I solve a two-step quantity–price problem.'],
  },
  terms: {
    items: [
      { ar: 'الْوَزْنُ', en: 'weight', note: 'مَا وَزْنُهُ؟' },
      { ar: 'كِيلُو · غْرَامٌ', en: 'kilo · gram', note: 'كِيلُو تُفَّاحٍ' },
      { ar: 'نِصْفُ كِيلُو', en: 'half a kilo (500 g)', note: 'نِصْفُ كِيلُو مِنَ الْجُبْنِ' },
      { ar: 'رُبُعُ كِيلُو', en: 'quarter of a kilo (250 g)', note: 'رُبُعُ كِيلُو زَيْتُونٍ' },
      { ar: 'لِتْرٌ · مِتْرٌ', en: 'litre · metre', note: 'لِتْرٌ مِنَ الْحَلِيبِ' },
      { ar: 'كَمِ الْحِسَابُ؟', en: 'How much is the bill?', note: 'الْمَجْمُوعُ …' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Measures · part 1 · the units (website table)', title: 'Weights, measures and containers', ar: 'وَحَدَاتُ الْوَزْنِ وَالْقِيَاسِ', ltr: true,
      cols: [{ label: 'Word', w: 3.2, size: 24 }, { label: 'Meaning', w: 3.2 }, { label: 'Typical use', w: 5.93, size: 20 }],
      rows: [
        { core: true, cells: ['كِيلُو', 'kilo(gram)', 'كِيلُو مِنَ الطَّمَاطِمِ'] },
        { core: true, cells: ['نِصْفُ كِيلُو', 'half a kilo', 'نِصْفُ كِيلُو مِنَ الْجُبْنِ'] },
        { core: true, cells: ['رُبُعُ كِيلُو', 'quarter of a kilo', 'رُبُعُ كِيلُو مِنَ الزَّيْتُونِ'] },
        { cells: ['غْرَامٌ', 'gram', 'مِئَةُ غْرَامٍ مِنَ الْمُكَسَّرَاتِ'] },
        { core: true, cells: ['لِتْرٌ', 'litre', 'لِتْرٌ مِنَ الْحَلِيبِ'] },
        { cells: ['زُجَاجَةٌ · عُلْبَةٌ', 'bottle · tin / pot', 'زُجَاجَةُ زَيْتٍ · عُلْبَةُ زَبَادِي'] },
        { cells: ['مِتْرٌ · كِيلُومِتْرٌ', 'metre · kilometre', 'لَنْدَن ١٥ كِيلُومِتْرًا'] },
      ],
      foot: 'Website: kilo, gram, litre and metre travelled into Arabic just as into English. The stars are the fractions you already own from telling the time: niṣf and rubuʿ.',
      notes: 'PART 1 (3 min) — website “The units”. Short form without min is also heard: kīlū ṭamāṭima, zujājatu zaytin.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Measures · part 2 · numbers meet units (website)', title: 'Conversions and the gram hundreds', ar: 'الْأَعْدَادُ مَعَ الْوَحَدَاتِ', ltr: true,
      cols: [{ label: 'Amount', w: 1.8 }, { label: 'Arabic', w: 5.4, size: 24 }, { label: 'Note', w: 5.13 }],
      rows: [
        { core: true, cells: ['1000 g', 'كِيلُو وَاحِدٌ', 'one kilo'] },
        { core: true, cells: ['500 g', 'نِصْفُ كِيلُو · خَمْسُمِئَةِ غْرَامٍ', 'half a kilo'] },
        { core: true, cells: ['250 g', 'رُبُعُ كِيلُو', 'quarter of a kilo'] },
        { cells: ['100 g', 'مِئَةُ غْرَامٍ', '100 + genitive singular'] },
        { cells: ['200 g', 'مِئَتَا غْرَامٍ', 'dual hundred (like sanatān)'] },
        { cells: ['300 g', 'ثَلَاثُمِئَةِ غْرَامٍ', 'unit + miʾa as one word'] },
        { cells: ['50 g', 'خَمْسُونَ غْرَامًا', 'ghrām masc. → money rules'] },
      ],
      foot: 'Website: ghrām is masculine, so it mirrors junayh exactly — thalāthatu ghrāmātin, khamsūna ghrāman, miʾatu ghrāmin. If you can count money, you can weigh gold.',
      notes: 'PART 2 (4 min) — website “Numbers meet units”. Kilo itself does not change for number: kīlū wāḥid, kīlūghrāmāni (two kilos).',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Measures · part 3 · at the grocer’s (website six-move script) · Develop / Stretch', title: 'Order, add, pay, check', ar: 'عِنْدَ الْبَقَّالِ', ltr: true,
      cols: [{ label: 'Move', w: 2.4 }, { label: 'Arabic', w: 6.2, size: 22 }, { label: 'Meaning', w: 3.73 }],
      rows: [
        { core: true, cells: ['① greet', 'السَّلَامُ عَلَيْكُمْ. مَاذَا تُرِيدُ؟', 'What would you like?'] },
        { core: true, cells: ['② order', 'أُرِيدُ كِيلُو مِنَ الطَّمَاطِمِ، مِنْ فَضْلِكَ.', 'A kilo of tomatoes, please.'] },
        { cells: ['③ add', 'شَيْءٌ آخَرُ؟ — نَعَمْ، زُجَاجَةُ زَيْتٍ.', 'Anything else? — Yes, a bottle of oil.'] },
        { core: true, cells: ['④ the bill', 'هَذَا كُلُّ شَيْءٍ. كَمِ الْحِسَابُ؟', 'That’s all. How much is it?'] },
        { cells: ['⑤ pay', 'الْمَجْمُوعُ أَرْبَعُونَ جُنَيْهًا. — تَفَضَّلْ.', 'The total is 40. — Here you are.'] },
        { cells: ['⑥ change', 'وَهَذَا الْبَاقِي: عَشَرَةُ جُنَيْهَاتٍ.', 'And your change: ten pounds.'] },
      ],
      foot: 'Website: GM-NUM-04’s five moves plus one extra — the order with quantities. To a woman: mādhā turīdīna?',
      notes: 'PART 3 (3 min) — website “At the grocer’s” power phrases and six-move script.',
    },
  ],
  quick: [
    q('Half a kilo is …', ['500 g', '250 g', '50 g'], 'niṣfu kīlū.'),
    q('Choose “200 grams”.', ['مِئَتَا غْرَامٍ', 'مِئَتَانِ غْرَامَاتٍ', 'اثْنَانِ مِئَةُ غْرَامٍ'], 'Dual hundred.'),
    q('Choose “a litre of milk”.', ['لِتْرٌ مِنَ الْحَلِيبِ', 'لِتْرٌ مَعَ الْحَلِيبِ', 'كِيلُو مِنَ الْحَلِيبِ'], 'Quantity + min + food; milk by the litre.'),
    q('Choose “How much is the bill?”', ['كَمِ الْحِسَابُ؟', 'كَمِ السَّاعَةُ؟', 'كَمْ عُمْرُكَ؟'], 'al-ḥisāb = the bill.'),
  ],
  quickNote: 'teacher-written hinge questions on the website units and script.',
  ido: {
    title: 'Watch me read Mum’s shopping list',
    steps: [
      { head: 'Rice', ar: 'كِيلُو مِنَ الْأَرُزِّ', think: '1 kg.' },
      { head: 'Meat', ar: 'نِصْفَ كِيلُو مِنَ اللَّحْمِ', think: '½ kg = 500 g.' },
      { head: 'Olives', ar: 'مِئَتَيْ غْرَامٍ', think: '200 g (dual, -ay).' },
      { head: 'Change', ar: 'عَشَرَةُ جُنَيْهَاتٍ', think: '70 − 60 = 10.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'QUANTITY', e: 'MONEY' },
    model: 'يَا أَحْمَدُ، اذْهَبْ إِلَى الْبَقَّالِ مِنْ فَضْلِكَ. أُرِيدُ {k|كِيلُو} مِنَ الْأَرُزِّ، وَ{k|نِصْفَ كِيلُو} مِنَ اللَّحْمِ، وَ{k|مِئَتَيْ غْرَامٍ} مِنَ الزَّيْتُونِ، وَ{k|لِتْرَيْنِ} مِنَ الْحَلِيبِ. الْمَجْمُوعُ {e|سِتُّونَ جُنَيْهًا} — خُذْ مَعَكَ {e|سَبْعِينَ جُنَيْهًا}.',
    modelEn: 'Aḥmad, please go to the grocer’s. I want a kilo of rice, half a kilo of meat, two hundred grams of olives and two litres of milk. The total is sixty pounds — take seventy pounds with you.',
    notes: 'Website listening “Market order” (answer: change = 10 pounds). Objects after urīdu take -a: niṣfa kīlū, miʾatay ghrāmin.',
  },
  models: [
    { ar: 'الْحَقِيبَةُ ٢٣ كِيلُوغْرَامًا.', en: 'The suitcase is 23 kilograms.', tip: 'Airport (website).' },
    { ar: 'لَنْدَن ١٥ كِيلُومِتْرًا.', en: 'London 15 km.', tip: 'Road sign (website).' },
    { ar: 'أُرِيدُ رُبُعَ كِيلُو مِنَ الزَّيْتُونِ.', en: 'I want a quarter of a kilo of olives.', tip: 'Order.' },
    { ar: 'مَا وَزْنُ هَذَا الصُّنْدُوقِ؟', en: 'What does this box weigh?', tip: 'wazn.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · the fruit-salad recipe (website Task A) · convert aloud', title: 'Read the recipe — then double it', ar: 'سَلَطَةُ الْفَوَاكِهِ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Ingredient (for 6)', w: 5.0, size: 22 }, { label: 'In grams / units', w: 3.0 }, { label: 'For 12 people', w: 4.33, size: 22 }],
      rows: [
        { core: true, cells: ['نِصْفُ كِيلُو مِنَ التُّفَّاحِ', '500 g', 'كِيلُو مِنَ التُّفَّاحِ'] },
        { core: true, cells: ['رُبُعُ كِيلُو مِنَ الْعِنَبِ', '250 g', 'نِصْفُ كِيلُو مِنَ الْعِنَبِ'] },
        { cells: ['ثَلَاثُ مَوْزَاتٍ', '3 bananas', 'سِتُّ مَوْزَاتٍ'] },
        { cells: ['لِتْرٌ مِنْ عَصِيرِ الْبُرْتُقَالِ', '1 litre', 'لِتْرَانِ'] },
        { cells: ['مِئَةُ غْرَامٍ مِنَ السُّكَّرِ', '100 g', 'مِئَتَا غْرَامٍ'] },
      ],
      foot: 'Website: why thalāthu mawzātin? Mawza (one banana) is feminine → the number drops ة (GM-NUM-01). Doubling the sugar needs the dual hundred: miʾatā ghrāmin.',
      notes: 'WE DO (3 min) — website Task A. Cover column 3; students double each line.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · the website unit families · sensible unit?', title: 'By the kilo, or by the litre?', ar: 'بِالْكِيلُو أَمْ بِاللِّتْرِ؟',
      categories: ['by weight (kilo / gram)', 'by volume (litre)'],
      items: [['طَمَاطِمُ', 0], ['أَرُزٌّ', 0], ['جُبْنٌ', 0], ['زَيْتُونٌ', 0], ['حَلِيبٌ', 1], ['عَصِيرٌ', 1], ['مَاءٌ', 1], ['زَيْتٌ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students order each item with a quantity: kīlū mina ṭ-ṭamāṭim, litr mina l-ḥalīb …',
    },
  ],
  mistakes: [
    { wrong: 'لِتْرٌ مِنَ الطَّمَاطِمِ', right: 'كِيلُو مِنَ الطَّمَاطِمِ', why: 'Tomatoes are sold by weight, not volume.' },
    { wrong: 'مِئَتَانِ غْرَامَاتٍ', right: 'مِئَتَا غْرَامٍ', why: 'Dual hundred + genitive singular (the nūn drops).' },
    { wrong: 'خَمْسُونَ غْرَامَاتٍ', right: 'خَمْسُونَ غْرَامًا', why: '11–99: singular with -an (money rules).' },
  ],
  hints: ['Weight or volume?', 'Nūn or no nūn?', 'Which rung for 50?'],
  practice: [
    q('A quarter of a kilo is …', ['250 g', '25 g', '400 g'], '1000 ÷ 4.'),
    q('Choose “half a kilo of cheese”.', ['نِصْفُ كِيلُو مِنَ الْجُبْنِ', 'نِصْفُ لِتْرٍ مِنَ الْجُبْنِ', 'رُبُعُ كِيلُو مِنَ الْجُبْنِ'], 'niṣf = half.'),
    q('Choose “500 grams”.', ['خَمْسُمِئَةِ غْرَامٍ', 'خَمْسُ مِئَاتٍ غْرَامًا', 'خَمْسُونَ غْرَامًا'], 'One word + genitive singular.'),
    q('Rice is 20 a kilo. Two kilos cost …', ['أَرْبَعُونَ جُنَيْهًا', 'عِشْرُونَ جُنَيْهًا', 'أَرْبَعَةُ جُنَيْهَاتٍ'], '2 × 20 = 40.'),
  ],
  practiceLabel: 'teacher-written questions on the website conversions',
  read: {
    title: 'Today’s supermarket offers', label: 'website reading “Supermarket offers”',
    text: 'عُرُوضُ الْيَوْمِ: كِيلُوغْرَامَانِ مِنَ التُّفَّاحِ بِاثْنَيْ عَشَرَ جُنَيْهًا. لِتْرٌ مِنَ الْحَلِيبِ بِثَلَاثَةِ جُنَيْهَاتٍ. نِصْفُ كِيلُو مِنَ الْجُبْنِ بِثَمَانِيَةَ عَشَرَ جُنَيْهًا. زُجَاجَةُ زَيْتِ الزَّيْتُونِ بِخَمْسَةٍ وَعِشْرِينَ جُنَيْهًا. الْعُرُوضُ صَالِحَةٌ حَتَّى نِهَايَةِ الْأُسْبُوعِ.',
    glossary: [['عُرُوضُ', 'offers'], ['كِيلُوغْرَامَانِ', 'two kilograms'], ['زُجَاجَةُ', 'bottle'], ['صَالِحَةٌ', 'valid']],
    task: 'Website: read the offers, then answer — item, quantity and price.',
    questions: [
      q('Which item is sold as two kilograms?', ['apples', 'cheese', 'milk'], 'Kīlūghrāmāni mina t-tuffāḥ.'),
      q('How much is the milk?', ['3 pounds', '13 pounds', '30 pounds'], 'Bi-thalāthati junayhātin.'),
      q('How much cheese do you get for 18 pounds?', ['500 g', '250 g', '1 kg'], 'Niṣfu kīlū.'),
      q('Which item is most expensive?', ['olive oil (25)', 'cheese (18)', 'apples (12)'], 'Bi-khamsatin wa-ʿishrīna.'),
    ],
    qNote: 'Website “Supermarket offers” with an added olive-oil line; questions adapted from the website.',
  },
  speak: {
    title: 'Speaking: your turn at the grocer’s', source: 'website role-play card (Amman)',
    prompts: [
      { route: 'core', ar: 'اُطْلُبْ كِيلُو مِنَ الطَّمَاطِمِ وَنِصْفَ كِيلُو مِنَ الْجُبْنِ.' },
      { route: 'develop', ar: 'أَضِفْ زُجَاجَةَ زَيْتٍ، وَاسْأَلْ عَنِ الْحِسَابِ.' },
      { route: 'stretch', ar: 'اِدْفَعْ، وَاحْسُبِ الْبَاقِي، وَاشْكُرِ الْبَقَّالَ.' },
    ],
    stems: [
      { route: 'core', ar: 'أُرِيدُ ______ مِنَ ______ ، مِنْ فَضْلِكَ.' },
      { route: 'develop', ar: 'نَعَمْ، ______ أَيْضًا. هَذَا كُلُّ شَيْءٍ. كَمِ الْحِسَابُ؟' },
      { route: 'stretch', ar: 'تَفَضَّلْ ______ . — وَهَذَا الْبَاقِي: ______ .' },
    ],
    model: [
      { who: 'A', ar: 'أَهْلًا! مَاذَا تُرِيدِينَ؟', en: 'Hello! What would you like? (to a woman)' },
      { who: 'B', ar: 'أُرِيدُ كِيلُو مِنَ الطَّمَاطِمِ وَنِصْفَ كِيلُو مِنَ الْجُبْنِ، وَزُجَاجَةَ زَيْتٍ. كَمِ الْحِسَابُ؟', en: 'I’d like a kilo of tomatoes, half a kilo of cheese and a bottle of oil. How much is the bill?' },
    ],
    notes: 'Website six moves. Challenge: three quantities, two unit families, total, change and a polite close. Listening (website): Mum’s shopping list.',
  },
  write: {
    siteTask: 'Website: write your shopping list with quantities in words, then a grocer dialogue.',
    core: { amount: '5 items', task: 'A shopping list with quantities.', how: 'kīlū · niṣfu kīlū · litr · min.' },
    develop: { amount: '8 items', task: 'Website “Spicy”: weekly list; convert two fractions into grams.', how: 'niṣfu kīlū = 500 g.' },
    stretch: { amount: 'list + dialogue', task: 'Website “Hot”: a family dish list and a six-move dialogue.', how: 'kami l-ḥisāb? · al-bāqī.' },
  },
  frames: {
    core: [
      { en: 'I want a kilo of …', ar: 'أُرِيدُ كِيلُو مِنَ ______ .' },
      { en: 'Half a kilo of …, please', ar: 'نِصْفَ كِيلُو مِنَ ______ ، مِنْ فَضْلِكَ.' },
      { en: 'A litre of …', ar: 'لِتْرٌ مِنَ ______ .' },
      { en: 'A bottle of …', ar: 'زُجَاجَةُ ______ .' },
    ],
    develop: [
      { en: '… grams of …', ar: '______ غْرَامٍ مِنَ ______ .' },
      { en: 'Anything else? — Yes, …', ar: 'شَيْءٌ آخَرُ؟ — نَعَمْ، ______ .' },
      { en: 'The total is …', ar: 'الْمَجْمُوعُ ______ .' },
      { en: 'The change is …', ar: 'الْبَاقِي ______ .' },
    ],
    bank: ['كِيلُو', 'نِصْفُ كِيلُو', 'رُبُعُ كِيلُو', 'مِئَةُ غْرَامٍ', 'مِئَتَا غْرَامٍ', 'لِتْرٌ', 'زُجَاجَةٌ', 'عُلْبَةٌ', 'طَمَاطِمُ', 'أَرُزٌّ', 'جُبْنٌ', 'حَلِيبٌ', 'كَمِ الْحِسَابُ؟'],
  },
  stretchTask: {
    task: 'Website “Hot” task: the shopping list for your family’s signature dish, then a six-move grocer dialogue buying three items.',
    checklist: ['At least six items with quantities in words.', 'Kīlū, a fraction, a gram amount and a litre.', 'The pattern quantity + min + food.', 'kami l-ḥisāb? and a total.', 'A correctly calculated al-bāqī.'],
    phrases: [['الْبَقَّالُ', 'the grocer'], ['مِنْ فَضْلِكَ', 'please'], ['شَيْءٌ آخَرُ؟', 'anything else?'], ['هَذَا كُلُّ شَيْءٍ', 'that’s everything'], ['الْمَجْمُوعُ', 'the total'], ['تَفَضَّلْ', 'here you are']],
  },
  model: {
    text: 'قَائِمَةُ الْبِرْيَانِي لِعَائِلَتِي: كِيلُو مِنَ الْأَرُزِّ، وَكِيلُو مِنَ الدَّجَاجِ، وَنِصْفُ كِيلُو مِنَ الْبَصَلِ، وَرُبُعُ كِيلُو مِنَ الطَّمَاطِمِ، وَعُلْبَةُ زَبَادِي، وَمِئَةُ غْرَامٍ مِنَ الْمُكَسَّرَاتِ. ذَهَبْتُ إِلَى الْبَقَّالِ وَقُلْتُ: «السَّلَامُ عَلَيْكُمْ، أُرِيدُ كِيلُو مِنَ الْأَرُزِّ وَنِصْفَ كِيلُو مِنَ الْبَصَلِ، مِنْ فَضْلِكَ». سَأَلَنِي: «شَيْءٌ آخَرُ؟». قُلْتُ: «نَعَمْ، عُلْبَةُ زَبَادِي. هَذَا كُلُّ شَيْءٍ. كَمِ الْحِسَابُ؟». كَانَ الْمَجْمُوعُ خَمْسَةً وَثَلَاثِينَ جُنَيْهًا، فَدَفَعْتُ خَمْسِينَ، وَكَانَ الْبَاقِي خَمْسَةَ عَشَرَ جُنَيْهًا.',
    en: 'My family’s biryani list: a kilo of rice, a kilo of chicken, half a kilo of onions, a quarter of a kilo of tomatoes, a pot of yoghurt and a hundred grams of nuts. I went to the grocer and said: “Peace be upon you, I would like a kilo of rice and half a kilo of onions, please.” He asked me: “Anything else?” I said: “Yes, a pot of yoghurt. That’s everything. How much is the bill?” The total was thirty-five pounds, so I paid fifty, and the change was fifteen pounds.',
    find: ['quantity + min', 'fraction of a kilo', 'gram amount', 'bill and change'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'I ordered with quantity + min + food.' },
    { route: 'core', text: 'I chose a sensible unit for each food.' },
    { route: 'develop', text: 'I converted fractions into grams.' },
    { route: 'develop', text: 'My gram amounts follow the money rules.' },
    { route: 'stretch', text: 'I asked kami l-ḥisāb? and checked the change.' },
  ],
  exit: [
    q('Choose “a quarter of a kilo of olives”.', ['رُبُعُ كِيلُو مِنَ الزَّيْتُونِ', 'نِصْفُ كِيلُو مِنَ الزَّيْتُونِ', 'رُبُعُ لِتْرٍ مِنَ الزَّيْتُونِ'], '250 g, by weight.'),
    q('100 g is …', ['مِئَةُ غْرَامٍ', 'عَشَرَةُ غْرَامَاتٍ', 'أَلْفُ غْرَامٍ'], 'miʾa + genitive.'),
    q('Choose “That’s everything”.', ['هَذَا كُلُّ شَيْءٍ', 'شَيْءٌ آخَرُ', 'كَمِ الْحِسَابُ'], 'Closing the order.'),
  ],
  mastery: false,
  prep: {
    words: [['التَّارِيخُ', 'the date', 'مَا تَارِيخُ الْيَوْمِ؟'], ['يَنَايِرُ · فِبْرَايِرُ', 'January · February', '—'], ['رَمَضَانُ', 'Ramaḍān (Hijri month)', '—'], ['السَّبْتُ · الْأَحَدُ', 'Saturday · Sunday', '—'], ['عِيدُ مِيلَادِي', 'my birthday', '—']],
    questionEn: 'How do you think you say “the fifth of May”? (Hint: ordinal + min + month)',
    questionAr: 'الْخَامِسُ مِنْ ______',
    homework: {
      core: 'Website “Mild”: label eight market foods with quantities.',
      develop: 'Website “Spicy”: weekly shopping list with two conversions.',
      stretch: 'Website “Hot”: family-dish list and a six-move grocer dialogue.',
    },
    wordsSource: 'The five words prepare GM-NUM-06 (website Numeracy Mastery 06: dates and calendars).',
  },
  remember: 'Remember: quantity + min + food (kīlū mina ṭ-ṭamāṭim) · niṣfu kīlū = 500 g · rubuʿu kīlū = 250 g · miʾatā ghrāmin = 200 g · ghrām follows the money rules · kami l-ḥisāb? · al-bāqī.',
});

module.exports = { meta, slides };
