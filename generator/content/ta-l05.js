'use strict';
/* AT-A-L05 · Eating Out — Café, Menu and Prices — website: Advanced Topics › Topic A › Lesson 5 (lesson engine F5-L05 “Ordering Food Politely”).
   Topic layer: requests, attached pronouns (فَضْلُكَ / فَضْلُكِ · عِنْدَكُمْ) and prices within a budget. */
const T = require('./topic-common');
const D = require('./d-common');
const { q } = D;

const meta = T.meta('A', 5, { fileTitle: 'Eating_Out_Cafe_Menu_and_Prices', chip: 'Eating Out', icon: 'FaMugSaucer' });
const nx = T.nextOf('A', 5);

const forms = {
  'نَادِلٌ / نَادِلَةٌ': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'نُدُلٌ' }, { l: 'f.', ar: 'نَادِلَةٌ' }, { l: 'm.', ar: 'نَادِلٌ' }] },
  'زَبُونٌ / زَبُونَةٌ': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'زَبَائِنُ' }, { l: 'f.', ar: 'زَبُونَةٌ' }, { l: 'm.', ar: 'زَبُونٌ' }] },
  'مَطْعَمٌ': { tag: 'm.', forms: [{ l: 'pl.', ar: 'مَطَاعِمُ' }, { l: 'm.', ar: 'مَطْعَمٌ' }] },
  'مَقْهًى': { tag: 'm.', forms: [{ l: 'pl.', ar: 'مَقَاهٍ' }, { l: 'm.', ar: 'مَقْهًى' }] },
  'طَاوِلَةٌ': { tag: 'f.', forms: [{ l: 'pl.', ar: 'طَاوِلَاتٌ' }, { l: 'f.', ar: 'طَاوِلَةٌ' }] },
  'طَلَبٌ': { tag: 'm.', forms: [{ l: 'pl.', ar: 'طَلَبَاتٌ' }, { l: 'm.', ar: 'طَلَبٌ' }] },
  'مِنْ فَضْلِكَ / مِنْ فَضْلِكِ': { tag: 'to m · f · pl', forms: [{ l: 'to pl.', ar: 'مِنْ فَضْلِكُمْ' }, { l: 'to f.', ar: 'مِنْ فَضْلِكِ' }, { l: 'to m.', ar: 'مِنْ فَضْلِكَ' }] },
  'لَوْ سَمَحْتَ / لَوْ سَمَحْتِ': { tag: 'to m · f · pl', forms: [{ l: 'to pl.', ar: 'لَوْ سَمَحْتُمْ' }, { l: 'to f.', ar: 'لَوْ سَمَحْتِ' }, { l: 'to m.', ar: 'لَوْ سَمَحْتَ' }] },
  'مَاذَا تُرِيدُ؟ / تُرِيدِينَ؟': { tag: 'to m · f · pl', forms: [{ l: 'to pl.', ar: 'تُرِيدُونَ؟' }, { l: 'to f.', ar: 'تُرِيدِينَ؟' }, { l: 'to m.', ar: 'تُرِيدُ؟' }] },
};

const raw = D.devLesson('F5-L05', {
  siteRef: 'Advanced Topics › Topic A › Lesson 5 (AT-A-L05), lesson engine Pathways › Foundation › F5 › F5-L05',
  support: `• A transactional lesson: success = the order works. Core: 4-turn exchange with cards (greeting → أُرِيدُ … مِنْ فَضْلِكَ → answer one question → الحِسَابُ). Develop: 6 turns with هَلْ عِنْدَكُمْ …؟ and كَمْ سِعْرُ …؟. Stretch: an unavailable item, an alternative and a change or special request (the Topic A “menu budget” challenge).
• The ending of “please” changes with the listener — the attached pronoun ـكَ (man) / ـكِ (woman) / ـكُمْ (the café). This is the Topic A grammar point “attached pronouns”.
• The item after أُرِيدُ takes -an (accusative): أُرِيدُ شَايًا، سَلَطَةً — Develop/Stretch notice it; Core can copy it from the cards.
• Link to AT-A-L04: all the food words come back; the five restaurant words were prepared at home.
• Urdu bridge: طلب (demand, order), حساب (account, bill), فضل (grace, kindness), شکریہ ← شُكْرًا, میز is not Arabic (table = طَاوِلَةٌ).`,
  teach: 'Polite requests, “please” to a man / woman, price questions.',
  wedo: 'Picture match, build the transaction, fix and listen.',
  next: nx,
  flexGroups: [1],
  kwText: '21 café words from the website in 3 groups. Restaurant nouns (group 2) were prepared at home — quick check only. Core: polite requests and useful questions.',
  doNow: {
    questions: [
      q('What does الحِسَابُ mean?', ['the bill', 'the menu', 'the table'], 'Prepared at home (AT-A-L04).'),
      q('What does نَادِلٌ mean?', ['waiter', 'customer', 'cook'], 'Prepared at home (AT-A-L04).'),
      q('Choose “I don’t like coffee.”', ['لَا أُحِبُّ القَهْوَةَ.', 'لَا القَهْوَةَ أُحِبُّ.', 'أُحِبُّ لَا القَهْوَةَ.'], 'AT-A-L04: negative.'),
      q('Ask a GIRL “Do you like salad?”', ['هَلْ تُحِبِّينَ السَّلَطَةَ؟', 'هَلْ تُحِبُّ السَّلَطَةَ؟', 'هَلْ يُحِبُّ السَّلَطَةَ؟'], 'AT-A-L04: girl → -īna.'),
      q('Which is a drink?', ['عَصِيرٌ', 'أَرُزٌّ', 'دَجَاجٌ'], 'AT-A-L04 vocabulary.'),
    ],
    keyIdea: { text: 'Please changes with the listener: to a man -ka, to a woman -ki, to everyone -kum.', ar: 'مِنْ فَضْلِ{w|كَ}  ·  مِنْ فَضْلِ{e|كِ}  ·  هَلْ عِنْدَ{k|كُمْ} …؟' },
    retrieves: 'Questions 1–2 test two of the five restaurant words prepared at home at the end of AT-A-L04. Questions 3–5 retrieve AT-A-L04 (negative, asking a girl, food or drink).',
  },
  routes: {
    core: ['I can order two items politely.', 'I can ask for the bill.'],
    develop: ['I can ask if an item is available and its price.', 'I can answer a waiter’s question (small or large?).'],
    stretch: ['I can handle an unavailable item and ask for an alternative.', 'I can order a full meal within a budget.'],
  },
  bridge: [
    { ar: 'طَلَبٌ', urdu: 'طلب', tr: 'ṭalab', en: 'an order, a request' },
    { ar: 'الحِسَابُ', urdu: 'حساب', tr: 'ḥisāb', en: 'the bill (Urdu: account)' },
    { ar: 'مِنْ فَضْلِكَ', urdu: 'فضل', tr: 'faḍl', en: 'kindness → please' },
    { ar: 'شُكْرًا', urdu: 'شکریہ', tr: 'shukran', en: 'thank you' },
    { ar: 'طَاوِلَةٌ', urdu: 'میز', tr: 'ṭāwila', en: 'table (not cognate)' },
  ],
  bridgeNotes: 'URDU BRIDGE: طلب، حساب، فضل and شکریہ are all Arabic words students use in Urdu. مِنْ فَضْلِكَ is literally “from your kindness” — that helps students remember why the ending changes (YOUR kindness: -ka / -ki). CAREFUL: Urdu میز is Persian — the Arabic is طَاوِلَةٌ.',
  core: ['مِنْ فَضْلِكَ / مِنْ فَضْلِكِ', 'أُرِيدُ ...', 'لَوْ سَمَحْتَ / لَوْ سَمَحْتِ', 'شُكْرًا', 'هَلْ عِنْدَكُمْ ...؟', 'كَمِ السِّعْرُ؟', 'الحِسَابُ مِنْ فَضْلِكَ', 'مَاذَا تُرِيدُ؟ / تُرِيدِينَ؟'],
  forms,
  vocabNotes: {
    0: 'Every “you” phrase has three forms: to a man, to a woman, to a group (-ka / -ki / -kum). The café is addressed as a group: هَلْ عِنْدَكُمْ؟',
    1: 'FLEX: prepared at home — check with a 30-second chant. Note the plurals: نَادِلٌ → نُدُلٌ، زَبُونٌ → زَبَائِنُ.',
    2: 'Questions the waiter asks and questions the customer asks — sort them aloud: who says it?',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · the ending changes with the listener (website table + Topic A attached pronouns)', title: 'To a man, a woman, a group', ar: 'ـكَ · ـكِ · ـكُمْ',
      cols: [{ label: 'To a man', w: 3.1, size: 24 }, { label: 'To a woman', w: 3.1, size: 24 }, { label: 'To a group / a café', w: 3.3, size: 24 }, { label: 'Meaning', w: 2.83 }],
      rows: [
        { core: true, cells: [{ ar: 'مِنْ فَضْلِ{w|كَ}' }, { ar: 'مِنْ فَضْلِ{e|كِ}' }, { ar: 'مِنْ فَضْلِ{k|كُمْ}' }, 'please'] },
        { core: true, cells: [{ ar: 'لَوْ سَمَحْ{w|تَ}' }, { ar: 'لَوْ سَمَحْ{e|تِ}' }, { ar: 'لَوْ سَمَحْ{k|تُمْ}' }, 'excuse me'] },
        { cells: [{ ar: 'مَاذَا تُرِيدُ؟' }, { ar: 'مَاذَا تُرِيدِ{e|ينَ}؟' }, { ar: 'مَاذَا تُرِيدُ{k|ونَ}؟' }, 'what would you like?'] },
        { cells: [{ ar: 'هَلْ عِنْدَ{w|كَ} …؟' }, { ar: 'هَلْ عِنْدَ{e|كِ} …؟' }, { ar: 'هَلْ عِنْدَ{k|كُمْ} …؟' }, 'do you have …?'] },
      ],
      foot: 'Listen for the last sound: -ka = a man, -ki = a woman, -kum = the café or a group.',
      notes: `GRAMMAR PART 1 — website rule “Order an item politely” (مِنْ فَضْلِكَ to a man, مِنْ فَضْلِكِ to a woman) and the website table (please / I would like / the bill to a man and a woman). The group column is teacher-added: the Topic A page lists “attached pronouns” for this lesson, and هَلْ عِنْدَكُمْ is the website’s availability question.
Website common error: do not use a bare command (أَعْطِنِي) — use أُرِيدُ … مِنْ فَضْلِكَ / كِ.
Quick-fire: show a picture of a waiter or a waitress; students say the right “please”.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · order, check, pay (website rules)', title: 'Three questions that make the order work', ar: 'أُرِيدُ · هَلْ عِنْدَكُمْ؟ · كَمْ سِعْرُ؟',
      cards: [
        { chip: 'ORDER · CORE', color: '1D5FBF', head: 'أُرِيدُ + item', big: 'أُرِيدُ شَايًا، مِنْ فَضْلِكَ.', en: 'I would like tea, please.', clue: 'The item ends in -an.' },
        { chip: 'AVAILABLE? · DEVELOP', color: '1E7B4F', head: 'هَلْ عِنْدَكُمْ …؟', big: 'هَلْ عِنْدَكُمْ طَعَامٌ نَبَاتِيٌّ؟', en: 'Do you have vegetarian food?', clue: 'Ask the café: -kum.' },
        { chip: 'PRICE · DEVELOP', color: 'C77700', head: 'كَمْ سِعْرُ …؟', big: 'كَمْ سِعْرُ الحَسَاءِ؟', en: 'How much is the soup?', clue: 'The price OF the soup (iḍāfa).' },
      ],
      error: { text: 'Website common mistake: the item after “I would like” ends in -an.', pairs: [['أُرِيدُ سَلَطَةً، مِنْ فَضْلِكَ.', 'أُرِيدُ مِنْ فَضْلِكَ سَلَطَةٌ.']] },
      notes: `GRAMMAR PART 2 — website rules “Ask whether something is available” (هَلْ عِنْدَكُمْ…؟), “Ask the price” (كَمْ سِعْرُ…؟ / كَمْ ثَمَنُ…؟ — an iḍāfa: the price of the item) and “Close the exchange” (الحِسَابُ، مِنْ فَضْلِكَ · شُكْرًا).
أَمْ = “or” in a choice question: صَغِيرٌ أَمْ كَبِيرٌ؟ (website quiz). Stretch: a special request with بِدُونِ (without) — بِدُونِ سُكَّرٍ، مِنْ فَضْلِكَ (website game card: بِدُونِ مُكَسَّرَاتٍ).`,
    },
  ],
  quick: [0, 2, 5, 7],
  rest: [1, 3, 4, 6],
  ido: {
    title: 'Watch me order in a café',
    steps: [
      { head: 'Attention', ar: 'لَوْ سَمَحْ{w|تَ}، هَلْ عِنْدَ{k|كُمْ} حَسَاءٌ؟', think: 'Waiter = man → -ta. Café → -kum.' },
      { head: 'Order', ar: 'أُرِيدُ حَسَاءَ العَدَسِ وَسَلَطَةً، مِنْ فَضْلِ{w|كَ}.', think: 'Items end in -an.' },
      { head: 'Answer', ar: 'صَغِيرٌ، شُكْرًا.', think: 'Small or large? One word + thanks.' },
      { head: 'Pay', ar: 'كَمْ سِعْرُ الوَجْبَةِ؟ الحِسَابُ، مِنْ فَضْلِ{w|كَ}.', think: 'Price, then the bill.' },
    ],
    legend: ['w', 'e', 'k'], legendLabels: { w: 'TO A MAN', e: 'TO A WOMAN', k: 'TO THE CAFÉ' },
    model: 'مَسَاءُ الخَيْرِ. لَوْ سَمَحْ{w|تَ}، هَلْ عِنْدَ{k|كُمْ} حَسَاءٌ؟ أُرِيدُ حَسَاءَ العَدَسِ وَسَلَطَةً، مِنْ فَضْلِ{w|كَ}. وَعَصِيرَ بُرْتُقَالٍ صَغِيرًا. كَمْ سِعْرُ الوَجْبَةِ؟ الحِسَابُ، مِنْ فَضْلِ{w|كَ}. شُكْرًا جَزِيلًا.',
    modelEn: 'Good evening. Excuse me, do you have soup? I would like lentil soup and a salad, please. And a small orange juice. How much is the meal? The bill, please. Thank you very much.',
    notes: 'I DO (3 min) — website patterns and listening lines built into one customer turn sequence. Think aloud: “who am I talking to — a waiter or a waitress? then -ka or -ki”. Then re-say it to a waitress (-ti, -ki) with the class.',
  },
  game: {
    title: 'Who says it? Match the picture',
    pick: [0, 1, 3],
    en: ['I would like coffee, please (to a man).', 'I would like juice, please (to a woman).', 'How much is the bill?'],
    icons: [[['fa6', 'FaMugHot', '8A5A2B'], ['fa6', 'FaPerson', '1D5FBF']], [['fa6', 'FaGlassWater', 'C77700'], ['fa6', 'FaPersonDress', 'B83280']], [['fa6', 'FaCreditCard', '1E7B4F'], ['fa6', 'FaCircleQuestion', '6B4C9A']]],
    labels: ['coffee · to a waiter', 'juice · to a waitress', 'card · a question'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Ask: which card is to a woman — how do you know? (the -ki in فَضْلِكِ). Other cards for homework: مَاذَا تُوصِي؟ (what do you recommend?), بِدُونِ مُكَسَّرَاتٍ (without nuts), كَانَ الطَّعَامُ لَذِيذًا.',
  },
  sorterCats: ['Opening', 'Ordering', 'Closing'],
  sorterNotes: 'Then put the six lines in order as one dialogue and read it with a partner on the mic (A = customer, B = waiter).',
  hints: ['Is a bare command polite?', 'The item after “I would like” ends in …?', 'Asking a café or restaurant: -ka or -kum?'],
  coreTip: 'Listen twice. Core: questions 1 and 2.\nListen for: سَلَطَةً · عَصِيرَ بُرْتُقَالٍ · صَغِيرٌ.',
  listenRoutes: 'Core: questions 1 and 2. Develop / Stretch: all 4.',
  gloss: [
    ['النَّادِلُ: مَسَاءُ الخَيْرِ. مَاذَا تُرِيدِينَ؟', 'Waiter: Good evening. What would you (f.) like?'],
    ['الزَّبُونَةُ: أُرِيدُ سَلَطَةً وَسَانْدَوِيتْشَ جُبْنٍ، مِنْ فَضْلِكَ.', 'Customer: I would like a salad and a cheese sandwich, please.'],
    ['النَّادِلُ: هَلْ تُرِيدِينَ شَيْئًا لِلشُّرْبِ؟', 'Waiter: Would you like something to drink?'],
    ['الزَّبُونَةُ: نَعَمْ، عَصِيرَ بُرْتُقَالٍ.', 'Customer: Yes, orange juice.'],
    ['النَّادِلُ: عَصِيرٌ صَغِيرٌ أَمْ كَبِيرٌ؟ الزَّبُونَةُ: صَغِيرٌ، شُكْرًا.', 'Waiter: A small or a large juice? Customer: Small, thanks.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'أُرِيدُ … ، مِنْ فَضْلِكَ.', en: 'Order one starter and one main dish.' },
      { route: 'develop', ar: 'هَلْ عِنْدَكُمْ طَعَامٌ نَبَاتِيٌّ؟', en: 'Ask whether a vegetarian option is available.' },
      { route: 'develop', ar: 'صَغِيرٌ أَمْ كَبِيرٌ؟', en: 'Choose a drink and answer a size / type question.' },
      { route: 'stretch', ar: 'الحِسَابُ، لَوْ سَمَحْتَ.', en: 'Ask for the bill and close politely.' },
    ],
    stems: [
      { route: 'core', ar: 'أُرِيدُ ______ وَ ______ ، مِنْ فَضْلِكَ.' },
      { route: 'develop', ar: 'هَلْ عِنْدَكُمْ ______ ؟ كَمْ سِعْرُ ______ ؟' },
      { route: 'develop', ar: '______ ، شُكْرًا. / ______ ، مِنْ فَضْلِكِ.' },
      { route: 'stretch', ar: 'الحِسَابُ مِنْ فَضْلِكَ. كَانَ الطَّعَامُ ______ .' },
    ],
    modelEn: ['Good evening. What would you (f.) like?', 'I would like lentil soup and a salad, please.'],
    notes: 'The website prompts are in English (role-play steps); the Arabic lines here are the key phrase for each step.',
  },
  write: {
    core: { amount: '4 lines', task: 'A four-line café exchange with the sentence cards.', how: 'Greeting → order two items with please → answer “small or large?” → the bill.' },
    develop: { amount: '6–8 lines', task: 'Website task: an 8-line dialogue between a waiter and a customer.', how: 'Order food and a drink, answer one clarification, ask one price, ask for the bill.' },
    stretch: { amount: '8–10 lines', task: 'Website Stretch: an item is not available.', how: 'Ask for an alternative, add a special request (without …), check the bill against your budget.' },
  },
  frames: {
    core: [
      { en: 'Good evening.', ar: 'مَسَاءُ الخَيْرِ.' },
      { en: 'I would like …, please.', ar: 'أُرِيدُ ______ ، مِنْ فَضْلِكَ.' },
      { en: 'Small, thank you.', ar: 'صَغِيرٌ، شُكْرًا.' },
      { en: 'The bill, please.', ar: 'الحِسَابُ، مِنْ فَضْلِكَ.' },
      { en: 'Thank you very much.', ar: 'شُكْرًا جَزِيلًا.' },
    ],
    develop: [
      { en: 'Excuse me, do you have …?', ar: 'لَوْ سَمَحْتَ، هَلْ عِنْدَكُمْ ______ ؟' },
      { en: 'How much is the …?', ar: 'كَمْ سِعْرُ ______ ؟' },
      { en: 'May I order …?', ar: 'هَلْ يُمْكِنُنِي أَنْ أَطْلُبَ ______ ؟' },
      { en: 'Without …, please.', ar: 'بِدُونِ ______ ، مِنْ فَضْلِكِ.' },
      { en: 'Would you like anything else?', ar: 'هَلْ تُرِيدُ شَيْئًا آخَرَ؟' },
    ],
    bank: ['مِنْ فَضْلِكَ', 'مِنْ فَضْلِكِ', 'أُرِيدُ', 'هَلْ عِنْدَكُمْ', 'كَمْ سِعْرُ', 'الحِسَابُ', 'شَايًا', 'قَهْوَةً', 'عَصِيرًا', 'سَلَطَةً', 'حَسَاءً', 'صَغِيرٌ / كَبِيرٌ'],
  },
  stretch: [
    ['لَا يُوجَدُ سَمَكٌ اليَوْمَ', 'there is no fish today'],
    ['إِذَنْ، أُرِيدُ الدَّجَاجَ بَدَلًا مِنْهُ', 'then I would like chicken instead'],
    ['بِدُونِ سُكَّرٍ، مِنْ فَضْلِكَ', 'without sugar, please'],
    ['مَاذَا تُوصِي؟', 'what do you recommend?'],
    ['كَانَ الطَّعَامُ لَذِيذًا', 'the food was delicious'],
  ],
  modelEn: 'Waiter: Hello. What would you like? · Customer: I would like soup and a sandwich, please. · Waiter: Would you like something to drink? · Customer: Yes, apple juice. · Waiter: Small or large? · Customer: Small, thank you. · Waiter: Anything else? · Customer: No, the bill please.',
  find: ['a greeting', 'an order with please', 'a choice question with “or”', 'the bill'],
  modelNotes: 'Evidence: مَرْحَبًا · أُرِيدُ حَسَاءً وَسَانْدَوِيتْشًا، مِنْ فَضْلِكَ · صَغِيرًا أَمْ كَبِيرًا؟ · الحِسَابُ مِنْ فَضْلِكَ. Stretch: make the waiter a woman (نَادِلَةٌ) — which words change? (تُرِيدِينَ is not needed; the customer says فَضْلِكِ).',
  selfCheck: [
    { route: 'core', text: 'Every request has please (-ka or -ki).' },
    { route: 'core', text: 'My order ends with the bill and thanks.' },
    { route: 'develop', text: 'I asked “do you have …?” with -kum.' },
    { route: 'develop', text: 'I asked a price: kam si‘ru …?' },
    { route: 'stretch', text: 'I handled a missing item or a special request.' },
  ],
  exit: [1, 2, 3],
  glossary: [
    ['مَرْحَبًا بِكُمْ', 'welcome'], ['نُقَدِّمُ', 'we serve'], ['الفُطُورَ', 'breakfast'], ['مِنَ … إِلَى …', 'from … to …'], ['نَبَاتِيَّةً', 'vegetarian'],
    ['لَا يُوجَدُ', 'there is no'], ['المَشْرُوبَاتُ', 'the drinks'], ['اُطْلُبُوا', 'order! (to all)'], ['عِنْدَ الطَّاوِلَةِ', 'at the table'], ['وَادْفَعُوا', 'and pay (to all)'],
  ],
  prep: {
    words: [['صِحِّيٌّ', 'healthy', 'f. صِحِّيَّةٌ'], ['بُرُوتِينٌ', 'protein', ''], ['فِيتَامِينَاتٌ', 'vitamins', ''], ['أَلْيَافٌ', 'fibre', 'sing. لِيفٌ'], ['مُتَوَازِنٌ', 'balanced', 'f. مُتَوَازِنَةٌ']],
    questionEn: 'Name one healthy food and one unhealthy food you ate this week.',
    questionAr: 'مَا الطَّعَامُ الصِّحِّيُّ؟',
    homework: {
      core: 'Website F5-L05: picture game and useful questions — practise a 4-line order aloud.',
      develop: 'Website writing task: an 8-line café dialogue.',
      stretch: 'Write a café dialogue in which an item is missing, with an alternative and a special request.',
    },
    wordsSource: 'Four words come from the website P1-L01 vocabulary (the AT-A-L06 lesson engine); صِحِّيٌّ is from the website F5 food lessons.',
  },
  remember: 'Remember: 5 healthy-eating words + one healthy food.',
});
const slides = T.wrap('A', 5, 'F5-L05', raw, {
  challenge: {
    steps: [
      'Budget: £10 per person. The menu is on the right.',
      'Pairs choose a full meal (food + drink) and add up the price.',
      'Role-play on the mic: ask one price, order, make one change or special request.',
      'The class checks: under budget? polite? right “please”?',
    ],
    routes: {
      core: 'Choose 2 items under £10. Order with “urīdu …, min faḍlika” and ask for the bill.',
      develop: 'Ask “kam si‘ru …?” before ordering, then order a full meal with a drink.',
      stretch: 'The fish is not available: ask for an alternative and add “without …” — stay under budget.',
    },
    phrases: [['حَسَاءُ العَدَسِ', 'lentil soup · £3'], ['دَجَاجٌ مَعَ أَرُزٍّ', 'chicken with rice · £6'], ['سَمَكٌ مَعَ سَلَطَةٍ', 'fish with salad · £7'], ['سَانْدَوِيتْشُ جُبْنٍ', 'cheese sandwich · £4'], ['عَصِيرٌ / شَايٌ', 'juice £2 · tea £1']],
    notes: 'Teacher-made menu for the website budget challenge. Prices in Arabic for Stretch: ثَلَاثَةُ جُنَيْهَاتٍ (£3), سِتَّةُ جُنَيْهَاتٍ (£6), عَشَرَةُ جُنَيْهَاتٍ (£10). Core may say the price in English — the goal is the polite order.',
  },
});
module.exports = { meta, slides };
