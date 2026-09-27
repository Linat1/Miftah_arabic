'use strict';
/* F5-L06 · Menus, Prices and Dishes — website: Pathways › Foundation › F5 › F5-L06 (menu sections, كَمْ ثَمَنُ / سِعْرُ …؟, ثَمَنُهُ / ثَمَنُهَا + number + currency, يَتَكَوَّنُ / تَتَكَوَّنُ مِنْ, يُقَدَّمُ / تُقَدَّمُ مَعَ, regional dishes). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F5')({
  n: 6, fileTitle: 'Menus_Prices_and_Dishes', chip: 'Menus and Prices',
  title: 'Menus, Prices and Dishes', arabic: 'قَوَائِمُ الطَّعَامِ وَالأَسْعَارُ وَالأَطْبَاقُ',
  focus: 'Read an Arabic menu, ask and answer about prices, total a small order and describe a dish from an Arabic-speaking community with يَتَكَوَّنُ / تَتَكَوَّنُ مِنْ.',
  icon: 'FaReceipt', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('F5-L06', {
  support: `• Core: find an item and its price on the menu and answer كَمْ ثَمَنُ …؟ with a number (numerals are fine) + دَنَانِيرُ.
• Develop: total three orders and describe one dish with يَتَكَوَّنُ / تَتَكَوَّنُ مِنْ.
• Stretch: compare two menus (price, variety, vegetarian options) and recommend one — أَرْخَصُ / أَغْلَى.
• Numbers: accept numerals (٤ or 4) for Core. Develop say 3–10 + plural (خَمْسَةُ دَنَانِيرَ); 11+ take a singular (اثْنَا عَشَرَ دِينَارًا) — say it, don’t drill it.
• Website: “Arabic-speaking communities have diverse cuisines … present examples as specific rather than universal.” Invite students to share family dishes (Pakistani, Somali, Bangladeshi, Arab …) — every cuisine is welcome.
• Website teaching note: “Use a calculator only after identifying the correct items and prices.”`,
  teach: 'Menu words and dishes, then how much? · its price is … · it consists of …',
  wedo: 'Price picture match, sort the menu, fix the questions and listen to a family order.',
  next: { nextCode: 'F5-L07', nextTitle: 'The Body and Its Parts', nextAr: 'الجِسْمُ وَأَعْضَاؤُهُ' },
  doNow: {
    questions: [
      q('What does سِعْرٌ mean?', ['a price', 'a dish', 'a menu'], 'Prepared at home (F5-L05).'),
      q('What does طَبَقٌ mean?', ['a dish / plate', 'a waiter', 'a starter'], 'Prepared at home (F5-L05).'),
      q('Choose the complete polite order.', ['أُرِيدُ حَسَاءً، مِنْ فَضْلِكَ.', 'أَعْطِنِي حَسَاءً.', 'حَسَاءٌ.'], 'F5-L05: I would like + please.'),
      q('Ask a café “Do you have vegetarian food?”', ['هَلْ عِنْدَكُمْ طَعَامٌ نَبَاتِيٌّ؟', 'هَلْ عِنْدَكَ طَعَامٌ نَبَاتِيٌّ؟', 'أَيْنَ طَعَامٌ نَبَاتِيٌّ؟'], 'F5-L05: ʿindakum for a business.'),
      q('What does الحِسَابُ mean?', ['the bill', 'the price', 'the menu'], 'F5-L05 vocabulary.'),
    ],
    keyIdea: { text: 'Ask the price with “how much is the price OF …”, answer with its price + number + currency.', ar: '{k|كَمْ ثَمَنُ} الكَبْسَةِ؟ — {w|ثَمَنُهَا} اثْنَا عَشَرَ دِينَارًا.' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F5-L05. Questions 3–5 retrieve F5-L05 (polite order, availability, the bill).',
  },
  routes: {
    core: ['I can find an item and its price on a menu.', 'I can ask كَمْ ثَمَنُ …؟'],
    develop: ['I can total a small order.', 'I can describe a dish with يَتَكَوَّنُ مِنْ.'],
    stretch: ['I can compare two menus with أَرْخَصُ / أَغْلَى.', 'I can recommend a menu with reasons.'],
  },
  bridge: [
    { ar: 'قَائِمَةٌ', urdu: 'قائمہ', tr: 'qāʼima', en: 'Urdu: a list / established → a menu' },
    { ar: 'مَجْمُوعٌ', urdu: 'مجموعی / مجموعہ', tr: 'majmūʿa', en: 'collection → the total' },
    { ar: 'حَلَالٌ', urdu: 'حلال', tr: 'halāl', en: 'halal' },
    { ar: 'تَقْلِيدِيٌّ', urdu: 'تقلید', tr: 'taqlīd', en: 'imitation → traditional' },
    { ar: 'حَلْوَيَاتٌ', urdu: 'حلوہ', tr: 'halwa', en: 'a sweet → desserts' },
  ],
  bridgeNotes: 'URDU BRIDGE: قائمہ (established; also a list) → قَائِمَةُ الطَّعَامِ (menu, literally “the list of food”). مجموعی (in total) → المَجْمُوعُ. حلال is identical. تقلید (following, imitation) → تَقْلِيدِيٌّ (traditional — “followed from before”). حلوہ (halwa!) shares its root with حَلْوَيَاتٌ (desserts) and حُلْوٌ (sweet, F5-L04).',
  core: ['قَائِمَةٌ', 'مُقَبِّلَاتٌ', 'طَبَقٌ رَئِيسِيٌّ', 'حَلْوَيَاتٌ', 'مَشْرُوبَاتٌ', 'سِعْرٌ / أَسْعَارٌ', 'ثَمَنٌ', 'رَخِيصٌ / غَالٍ', 'المَجْمُوعُ', 'حُمُّصٌ', 'فَلَافِلُ', 'كَبْسَةٌ'],
  forms: {
    'رَخِيصٌ / غَالٍ': { tag: 'm · f · pl', forms: [{ l: 'cheap m. / f.', ar: 'رَخِيصٌ / رَخِيصَةٌ' }, { l: 'dear m. / f.', ar: 'غَالٍ / غَالِيَةٌ' }, { l: 'cheaper · dearer', ar: 'أَرْخَصُ · أَغْلَى' }] },
    'قَائِمَةٌ': { tag: 'sg · pl', forms: [{ l: 'one', ar: 'قَائِمَةٌ' }, { l: 'pl.', ar: 'قَوَائِمُ' }] },
    'طَبَقٌ رَئِيسِيٌّ': { tag: 'sg · pl', forms: [{ l: 'one', ar: 'طَبَقٌ رَئِيسِيٌّ' }, { l: 'pl.', ar: 'أَطْبَاقٌ رَئِيسِيَّةٌ' }] },
  },
  skipGroups: [3],
  flexGroups: [2],
  vocabNotes: {
    1: 'DISHES (website): حُمُّصٌ، فَلَافِلُ، تَبُّولَةٌ (Levant) · كُسْكُسٌ، حَرِيرَةٌ (North Africa) · كَبْسَةٌ (Gulf) · مَنْسَفٌ (Jordan) · مُلُوخِيَّةٌ (Egypt and beyond) · مَحْشِيٌّ، مَقْلُوبَةٌ (many regions). Website: a dish may have several names or versions. Ask: which dishes do YOUR families cook? (بِرْيَانِي، سَمُوسَا …)',
    2: 'FLEX: the describing verbs are taught on the grammar slides. Group 4 (tableware: fork, knife, spoon, cup, glass …) is on the website vocabulary tab and in the reading menu.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · ask and state a price (website rules 1 and 2)', title: 'How much is it?', ar: 'كَمْ ثَمَنُ …؟',
      cols: [{ label: 'Item', w: 2.4, size: 24 }, { label: 'Question', w: 4.2, size: 24 }, { label: 'Answer', w: 5.73, size: 24 }],
      rows: [
        { core: true, cells: [P('الحُمُّصُ', 'm. · 4'), P('{k|كَمْ ثَمَنُ} الحُمُّصِ؟', 'How much is the hummus?'), P('{w|ثَمَنُهُ} أَرْبَعَةُ دَنَانِيرَ.', 'It costs four dinars.')] },
        { core: true, cells: [P('السَّلَطَةُ', 'f. · 5'), P('{k|كَمْ سِعْرُ} السَّلَطَةِ؟', 'How much is the salad?'), P('{e|ثَمَنُهَا} خَمْسَةُ دَنَانِيرَ.', 'It costs five dinars.')] },
        { core: true, cells: [P('الكَبْسَةُ', 'f. · 12'), P('{k|كَمْ ثَمَنُ} الكَبْسَةِ؟', 'How much is the kabsa?'), P('{e|ثَمَنُهَا} اثْنَا عَشَرَ دِينَارًا.', 'It costs twelve dinars.')] },
        { cells: [P('المَاءُ', 'm. · 2'), P('{k|كَمْ ثَمَنُ} المَاءِ؟', 'How much is the water?'), P('{w|ثَمَنُهُ} دِينَارَانِ.', 'It costs two dinars.')] },
        { cells: [P('المَجْمُوعُ', 'total'), P('{k|كَمِ} المَجْمُوعُ؟', 'What is the total?'), P('المَجْمُوعُ أَرْبَعَةَ عَشَرَ دِينَارًا.', 'The total is fourteen dinars.')] },
      ],
      foot: 'kam thamanu + item (ending -i). Its price: thamanuhu (m.) · thamanuhā (f.) + number + currency.',
      notes: `GRAMMAR PART 1 — website rules “Ask the price” (كَمْ سِعْرُ / ثَمَنُ + item: an idāfa, so the item ends in kasra) and “State a price” (ثَمَنُهُ for a masculine item, ثَمَنُهَا for a feminine one — the F5-L04 -hu / -hā choice again).
Website common error: كَمْ السِّعْرُ الحَسَاءُ؟ ✗ → كَمْ سِعْرُ الحَسَاءِ؟ ✓
Numbers (teacher guide): 2 = دِينَارَانِ · 3–10 = number + plural (خَمْسَةُ دَنَانِيرَ) · 11–99 = number + singular -an (اثْنَا عَشَرَ دِينَارًا). Core may simply write the numeral: ثَمَنُهُ ٤ دَنَانِيرَ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · describe a dish (website rules 3 and 4)', title: 'It consists of … it is served with …', ar: 'يَتَكَوَّنُ مِنْ · يُقَدَّمُ مَعَ',
      cards: [
        { chip: 'MASCULINE DISH', color: '1D5FBF', head: 'يَتَكَوَّنُ مِنْ', big: 'الحُمُّصُ يَتَكَوَّنُ مِنَ الحُمُّصِ وَالطَّحِينَةِ.', en: 'Hummus consists of chickpeas and tahini.', clue: 'yata-: m. dish.' },
        { chip: 'FEMININE DISH', color: 'C0386B', head: 'تَتَكَوَّنُ مِنْ', big: 'المَقْلُوبَةُ تَتَكَوَّنُ مِنَ الأَرُزِّ وَالخَضْرَوَاتِ.', en: 'Maqluba consists of rice and vegetables.', clue: 'tata-: f. dish (ة).' },
        { chip: 'SERVED WITH', color: '1E7B4F', head: 'يُقَدَّمُ / تُقَدَّمُ مَعَ', big: 'الكَبْسَةُ تُقَدَّمُ مَعَ السَّلَطَةِ.', en: 'Kabsa is served with salad.', clue: 'Same m. / f. choice.' },
      ],
      error: { text: 'Website common error: a feminine dish takes tatakawwanu.', pairs: [['المَقْلُوبَةُ تَتَكَوَّنُ مِنَ الأَرُزِّ.', 'المَقْلُوبَةُ يَتَكَوَّنُ مِنَ الأَرُزِّ.']] },
      notes: `GRAMMAR PART 2 — website rules “Describe ingredients” (يَتَكَوَّنُ / تَتَكَوَّنُ مِنْ agrees with the dish name) and “Say what accompanies a dish” (يُقَدَّمُ / تُقَدَّمُ مَعَ).
Also: يَحْتَوِي عَلَى (contains): يَحْتَوِي الحَسَاءُ عَلَى العَدَسِ وَالخَضْرَوَاتِ.
Value (website pattern): الحُمُّصُ رَخِيصٌ، وَلَكِنَّ الطَّبَقَ الرَّئِيسِيَّ غَالٍ. Stretch: المَاءُ أَرْخَصُ مِنَ العَصِيرِ.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 7],
  ido: {
    title: 'Watch me read the menu and order',
    steps: [
      { head: '1 · Find', ar: 'المُقَبِّلَاتُ: حُمُّصٌ ٤، تَبُّولَةٌ ٥، فَلَافِلُ ٦.', think: 'Section → item → price.' },
      { head: '2 · Ask', ar: '{k|كَمْ ثَمَنُ} الكَبْسَةِ؟ — {e|ثَمَنُهَا} اثْنَا عَشَرَ دِينَارًا.', think: 'Kabsa is f. → -hā.' },
      { head: '3 · Describe', ar: 'الكَبْسَةُ {e|تَتَكَوَّنُ مِنَ} الأَرُزِّ وَالدَّجَاجِ.', think: 'F. dish → tata-.' },
      { head: '4 · Total', ar: 'كَبْسَةٌ ١٢ وَمَاءٌ ٢ · المَجْمُوعُ ١٤', think: 'Items first, then add.' },
    ],
    legend: ['k', 'w', 'e'], legendLabels: { k: 'QUESTION', w: 'MASCULINE', e: 'FEMININE' },
    model: 'أُرِيدُ كَبْسَةَ الدَّجَاجِ وَمَاءً، مِنْ فَضْلِكَ. {k|كَمْ ثَمَنُ} الكَبْسَةِ؟ — {e|ثَمَنُهَا} اثْنَا عَشَرَ دِينَارًا، وَ{w|ثَمَنُ} المَاءِ دِينَارَانِ. الكَبْسَةُ {e|تَتَكَوَّنُ مِنَ} الأَرُزِّ وَالدَّجَاجِ وَالتَّوَابِلِ، وَ{e|تُقَدَّمُ مَعَ} السَّلَطَةِ. المَجْمُوعُ أَرْبَعَةَ عَشَرَ دِينَارًا.',
    modelEn: 'I would like chicken kabsa and water, please. How much is the kabsa? — It costs twelve dinars, and the water costs two dinars. Kabsa consists of rice, chicken and spices, and it is served with salad. The total is fourteen dinars.',
    notes: 'I DO (3 min) — the website menu (reading section) and patterns combined. Share the menu on screen first; think aloud as you find the section, the item and the price. Students copy the model and change the dish.',
  },
  game: {
    title: 'How much is it? Match the picture',
    pick: [1, 2, 4],
    en: ['The salad costs six pounds.', 'The coffee costs three pounds.', 'The juice costs two pounds.'],
    icons: [[['fa6', 'FaLeaf', '1E7B4F'], ['fa6', 'FaSterlingSign', '1F3A5F']], [['fa6', 'FaMugHot', '8A5A2B'], ['fa6', 'FaSterlingSign', '1F3A5F']], [['fa6', 'FaGlassWater', 'C77700'], ['fa6', 'FaSterlingSign', '1F3A5F']]],
    labels: ['salad · £6', 'coffee · £3', 'juice · £2'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6) in pounds (جُنَيْهَاتٌ): the clue is the NUMBER word — سِتَّةُ، ثَلَاثَةُ، جُنَيْهَانِ (two pounds: the dual). Other website items: pizza £8, soup £7, cake £5.',
  },
  sorterNotes: 'Before sorting, ask: which of these dishes has anyone tasted? Accept that some dishes can be a starter OR a main in different places.',
  hints: ['“The price of the soup”: which structure?', 'Maqluba is feminine: which verb?', 'After five: singular or plural?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for the number BEFORE دَنَانِيرَ.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5, then calculate the whole bill (4 + 5 + 12 + 10 + 6 = 37).',
  gloss: [
    ['طَلَبَتِ الأُسْرَةُ حُمُّصًا بِأَرْبَعَةِ دَنَانِيرَ، وَسَلَطَةً بِخَمْسَةِ دَنَانِيرَ.', 'The family ordered hummus for four dinars and a salad for five dinars.'],
    ['طَلَبَ الأَبُ كَبْسَةً بِاثْنَيْ عَشَرَ دِينَارًا،', 'The father ordered kabsa for twelve dinars,'],
    ['وَطَلَبَتِ الأُمُّ مَقْلُوبَةً بِعَشَرَةِ دَنَانِيرَ.', 'and the mother ordered maqluba for ten dinars.'],
    ['شَرِبَ الطِّفْلَانِ عَصِيرَيْنِ، ثَمَنُ كُلِّ وَاحِدٍ ثَلَاثَةُ دَنَانِيرَ.', 'The two children drank two juices; each one cost three dinars.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'كَمْ ثَمَنُ الحُمُّصِ / الكَبْسَةِ / الشَّايِ؟' },
      { route: 'develop', ar: 'أَيُّ طَبَقٍ أَرْخَصُ؟' },
      { route: 'develop', ar: 'مِمَّ يَتَكَوَّنُ هٰذَا الطَّبَقُ؟' },
      { route: 'stretch', ar: 'هَلْ يُوجَدُ طَبَقٌ نَبَاتِيٌّ؟ مَاذَا تَطْلُبُ وَكَمِ المَجْمُوعُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'ثَمَنُهُ / ثَمَنُهَا ______ دَنَانِيرَ.' },
      { route: 'develop', ar: '______ أَرْخَصُ مِنْ ______ .' },
      { route: 'develop', ar: 'يَتَكَوَّنُ / تَتَكَوَّنُ مِنَ ______ وَ ______ .' },
      { route: 'stretch', ar: 'نَعَمْ، ______ طَبَقٌ نَبَاتِيٌّ. أَطْلُبُ … المَجْمُوعُ …' },
    ],
    modelEn: ['How much is the kabsa?', 'It costs twelve dinars.'],
    notes: 'Website “Menu decision” — the four prompts are the website’s; use the reading-section menu on screen. Website model: كَمْ ثَمَنُ الكَبْسَةِ؟ — ثَمَنُهَا اثْنَا عَشَرَ دِينَارًا. — وَمِمَّ تَتَكَوَّنُ؟ — تَتَكَوَّنُ مِنَ الأَرُزِّ وَالدَّجَاجِ وَالتَّوَابِلِ.',
  },
  write: {
    core: { amount: 'a menu', how: 'Four headings, two items under each with a price (numerals).' },
    develop: { amount: 'menu + 4 sentences', how: 'Website task: full menu, then describe value and ingredients (yatakawwanu min twice).' },
    stretch: { amount: 'menu + 6–8 sentences', how: 'Add a comparison (arkhaṣu / aghlā), a vegetarian option and a recommendation.' },
  },
  frames: {
    core: [
      { en: 'Starters: …', ar: 'المُقَبِّلَاتُ: ______ ٤ ، ______ ٥' },
      { en: 'Main dishes: …', ar: 'الأَطْبَاقُ الرَّئِيسِيَّةُ: ______' },
      { en: 'Desserts: …', ar: 'الحَلْوَيَاتُ: ______' },
      { en: 'Drinks: …', ar: 'المَشْرُوبَاتُ: ______' },
      { en: 'It (m.) costs … dinars.', ar: 'ثَمَنُهُ ______ دَنَانِيرَ.' },
    ],
    develop: [
      { en: 'Kabsa consists of rice and chicken.', ar: 'الكَبْسَةُ تَتَكَوَّنُ مِنَ الأَرُزِّ وَالدَّجَاجِ.' },
      { en: 'Hummus consists of …', ar: 'الحُمُّصُ يَتَكَوَّنُ مِنَ ______ .' },
      { en: '… is served with salad.', ar: '______ يُقَدَّمُ / تُقَدَّمُ مَعَ السَّلَطَةِ.' },
      { en: 'Water is cheaper than juice.', ar: 'المَاءُ أَرْخَصُ مِنَ العَصِيرِ.' },
      { en: 'The main dish is expensive.', ar: 'الطَّبَقُ الرَّئِيسِيُّ غَالٍ.' },
    ],
    bank: ['قَائِمَةُ الطَّعَامِ', 'مُقَبِّلَاتٌ', 'طَبَقٌ رَئِيسِيٌّ', 'حَلْوَيَاتٌ', 'مَشْرُوبَاتٌ', 'كَمْ ثَمَنُ', 'ثَمَنُهُ', 'ثَمَنُهَا', 'دَنَانِيرُ', 'رَخِيصٌ', 'غَالٍ', 'المَجْمُوعُ'],
  },
  stretch: [
    ['المَاءُ أَرْخَصُ مِنَ العَصِيرِ', 'water is cheaper than juice'],
    ['المَنْسَفُ أَغْلَى طَبَقٍ', 'mansaf is the most expensive dish'],
    ['فِي القَائِمَةِ طَبَقٌ نَبَاتِيٌّ وَاحِدٌ', 'there is one vegetarian dish on the menu'],
    ['أَنْصَحُ بِـ … لِأَنَّهُ …', 'I recommend … because it …'],
    ['طَبَقٌ تَقْلِيدِيٌّ مِنْ …', 'a traditional dish from …'],
  ],
  modelEn: 'Starters: hummus 4, salad 5. Main dishes: kabsa 12, maqluba 10, couscous 11. Drinks: water 2, tea 3, juice 4. Kabsa consists of rice and chicken. The salad consists of fresh vegetables. Water is cheaper than juice.',
  find: ['a heading', 'a price', 'consists of', 'a comparison'],
  modelNotes: 'Evidence: المُقَبِّلَاتُ / الأَطْبَاقُ الرَّئِيسِيَّةُ / المَشْرُوبَاتُ · ٤، ١٢ … · تَتَكَوَّنُ مِنْ (×2) · أَرْخَصُ مِنَ.',
  selfCheck: [
    { route: 'core', text: 'My menu has headings and prices.' },
    { route: 'core', text: 'I asked كَمْ ثَمَنُ + item.' },
    { route: 'develop', text: 'ثَمَنُهُ / ثَمَنُهَا match the item.' },
    { route: 'develop', text: 'يَتَكَوَّنُ / تَتَكَوَّنُ match the dish.' },
    { route: 'stretch', text: 'I compared prices and recommended a dish.' },
  ],
  exit: [0, 3, 4],
  glossary: [
    ['بَيْتِ الضِّيَافَةِ', 'guest house'], ['بِالخَضْرَوَاتِ', 'with vegetables'], ['كَعْكٌ', 'cake'], ['مُلَاحَظَةٌ', 'a note'], ['شَوْكَةٌ · سِكِّينٌ', 'fork · knife'],
    ['مِلْعَقَةٌ', 'spoon'], ['مَنْدِيلٌ', 'napkin'], ['وِعَاءٍ', 'a bowl'], ['كُوبٍ · كَأْسٍ', 'a cup · a glass'], ['المَطْحُونِ', 'ground (crushed)'],
  ],
  prep: {
    words: [['رَأْسٌ', 'head', 'pl. رُؤُوسٌ'], ['يَدٌ', 'hand', 'pl. أَيْدٍ · f.'], ['عَيْنٌ', 'eye', 'pl. عُيُونٌ · f.'], ['رِجْلٌ', 'leg / foot', 'pl. أَرْجُلٌ · f.'], ['بَطْنٌ', 'stomach', 'pl. بُطُونٌ']],
    questionEn: 'Point to your head, hand and eye and say the Arabic word.',
    questionAr: 'هٰذَا رَأْسِي · هٰذِهِ يَدِي',
    homework: {
      core: 'Website F5-L06: the vocabulary tab and the “Which menu section?” sorter.',
      develop: 'Website writing task: design a menu and write four sentences about value and ingredients.',
      stretch: 'Compare two menus (price, variety, vegetarian options) and recommend one.',
    },
    wordsSource: 'The five words come from the website F5-L07 lesson (the body and its parts).',
  },
  remember: 'Remember: كَمْ ثَمَنُ + item? · ثَمَنُهُ / ثَمَنُهَا · يَتَكَوَّنُ / تَتَكَوَّنُ مِنْ.',
});

module.exports = { meta, slides };
