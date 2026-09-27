'use strict';
/* F5-L05 · Ordering Food Politely — website: Pathways › Foundation › F5 › F5-L05 (أُرِيدُ … مِنْ فَضْلِكَ / مِنْ فَضْلِكِ, هَلْ عِنْدَكُمْ …؟, كَمْ سِعْرُ …؟, the five-stage café transaction). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F5')({
  n: 5, fileTitle: 'Ordering_Food_Politely', chip: 'Ordering Politely',
  title: 'Ordering Food Politely', arabic: 'طَلَبُ الطَّعَامِ بِأَدَبٍ',
  focus: 'Complete a café transaction: greet, order with أُرِيدُ … مِنْ فَضْلِكَ, ask هَلْ عِنْدَكُمْ …؟ and كَمْ سِعْرُ …؟, answer the waiter and ask for the bill.',
  icon: 'FaMugSaucer', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const mfp = (m, f, pl) => ({ tag: 'm · f · pl', forms: [{ l: 'm.', ar: m }, { l: 'f.', ar: f }, { l: 'pl.', ar: pl }] });
const slides = D.devLesson('F5-L05', {
  support: `• Core: a four-turn exchange from cards — greet · أُرِيدُ … مِنْ فَضْلِكَ · answer one question · الحِسَابُ، لَوْ سَمَحْتَ.
• Develop: a six-turn role play with one unexpected clarification (صَغِيرٌ أَمْ كَبِيرٌ؟ عَادِيٌّ أَمْ غَازِيٌّ؟).
• Stretch: an unavailable item → ask for an alternative (هَلْ عِنْدَكُمْ … بَدَلًا مِنْ …؟) and query the bill — without the model.
• Website: “Transactional speaking rewards successful communication. Listen to the whole question, answer the detail asked, and add one polite expression.”
• Two genders at once again: مِنْ فَضْلِكَ to a waiter, مِنْ فَضْلِكِ to a waitress; مَاذَا تُرِيدُ / تُرِيدِينَ؟ to a male / female customer.
• Diets and allergies are a real reason to ask questions (نَبَاتِيٌّ، بِدُونِ مُكَسَّرَاتٍ) — model them positively.`,
  teach: 'Polite requests and café words, then order · ask · pay.',
  wedo: 'Picture match, build the transaction, fix rude or wrong orders and listen at Café Miftah.',
  next: { nextCode: 'F5-L06', nextTitle: 'Menus, Prices and Dishes', nextAr: 'قَوَائِمُ الطَّعَامِ وَالأَسْعَارُ وَالأَطْبَاقُ' },
  doNow: {
    questions: [
      q('What does أُرِيدُ mean?', ['I want / I would like', 'I prefer', 'I drink'], 'Prepared at home (F5-L04).'),
      q('What does الحِسَابُ mean?', ['the bill', 'the menu', 'the waiter'], 'Prepared at home (F5-L04).'),
      q('Complete: أُحِبُّ السَّلَطَةَ ____ صِحِّيَّةٌ.', ['لِأَنَّهَا', 'لِأَنَّهُ', 'لَكِنْ'], 'F5-L04: salad is feminine.'),
      q('Which sentence has correct agreement?', ['الخُبْزُ طَازَجٌ.', 'الخُبْزُ طَازَجَةٌ.', 'الخُبْزُ طَازَجُونَ.'], 'F5-L04: bread is masculine.'),
      q('Which word means “bitter”?', ['مُرٌّ', 'حُلْوٌ', 'مَالِحٌ'], 'F5-L04 taste words.'),
    ],
    keyIdea: { text: 'A polite order = what you want + please. Five stages: greet · order · answer · pay · thank.', ar: 'أُرِيدُ شَايًا، {e|مِنْ فَضْلِكَ}.' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F5-L04. Questions 3–5 retrieve F5-L04 (reason agreement, adjective agreement, taste).',
  },
  routes: {
    core: ['I can order three items politely.', 'I can ask for the bill.'],
    develop: ['I can ask هَلْ عِنْدَكُمْ …؟ and the price.', 'I can answer a waiter’s question.'],
    stretch: ['I can deal with an item that is not available.', 'I can perform the role play without the model.'],
  },
  bridge: [
    { ar: 'حِسَابٌ', urdu: 'حساب', tr: 'hisāb', en: 'account → the bill' },
    { ar: 'طَلَبٌ', urdu: 'طلب', tr: 'talab', en: 'demand → an order' },
    { ar: 'شُكْرًا', urdu: 'شکریہ', tr: 'shukriya', en: 'thank you' },
    { ar: 'فَضْلٌ', urdu: 'فضل', tr: 'fazl', en: 'grace → min faḍlika, please' },
    { ar: 'مَطْعَمٌ', urdu: 'طعام', tr: 'taʿām', en: 'food → restaurant (place of food)' },
  ],
  bridgeNotes: 'URDU BRIDGE: حساب (account, calculation) → الحِسَابُ (the bill). طلب (demand, call) → طَلَبٌ (an order), أَطْلُبُ (I order). شکریہ ↔ شُكْرًا. فضل (grace, kindness) → مِنْ فَضْلِكَ literally “from your kindness”. طعام (food) → مَطْعَمٌ “the place of food” — the مَـ pattern makes a place (like مَكْتَبٌ, مَلْعَبٌ).',
  core: ['مِنْ فَضْلِكَ / مِنْ فَضْلِكِ', 'أُرِيدُ ...', 'لَوْ سَمَحْتَ / لَوْ سَمَحْتِ', 'شُكْرًا', 'مَطْعَمٌ', 'مَقْهًى', 'نَادِلٌ / نَادِلَةٌ', 'قَائِمَةُ الطَّعَامِ', 'الحِسَابُ', 'هَلْ عِنْدَكُمْ ...؟', 'كَمِ السِّعْرُ؟', 'الحِسَابُ مِنْ فَضْلِكَ'],
  forms: {
    'أُرِيدُ ...': { tag: 'I · he · she', forms: [{ l: 'he', ar: 'يُرِيدُ' }, { l: 'she', ar: 'تُرِيدُ' }, { l: 'you f.', ar: 'تُرِيدِينَ' }] },
    'نَادِلٌ / نَادِلَةٌ': mfp('نَادِلٌ', 'نَادِلَةٌ', 'نُدُلٌ'),
    'زَبُونٌ / زَبُونَةٌ': mfp('زَبُونٌ', 'زَبُونَةٌ', 'زَبَائِنُ'),
    'مَطْعَمٌ': { tag: 'sg · pl', forms: [{ l: 'one', ar: 'مَطْعَمٌ' }, { l: 'pl.', ar: 'مَطَاعِمُ' }] },
    'طَاوِلَةٌ': { tag: 'sg · pl', forms: [{ l: 'one', ar: 'طَاوِلَةٌ' }, { l: 'pl.', ar: 'طَاوِلَاتٌ' }] },
  },
  vocabNotes: {
    0: 'مِنْ فَضْلِكَ / لَوْ سَمَحْتَ to a man, مِنْ فَضْلِكِ / لَوْ سَمَحْتِ to a woman. Website: “أَعْطِنِي ‘give me’ can sound too abrupt” — keep to أُرِيدُ … مِنْ فَضْلِكَ.',
    2: 'FLEX: the questions are on the grammar slide too. مَاءٌ عَادِيٌّ أَمْ غَازِيٌّ؟ (still or sparkling?) is the waiter’s favourite clarification question.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · the café transaction (website rules 1–4)', title: 'Greet · order · ask · pay', ar: 'الطَّلَبُ المُهَذَّبُ',
      cols: [{ label: 'Stage', w: 2.3 }, { label: 'Customer says', w: 6.0, size: 24 }, { label: 'English', w: 4.03 }],
      rows: [
        { core: true, cells: ['1 · greet', P('مَسَاءُ الخَيْرِ. قَائِمَةُ الطَّعَامِ، {e|لَوْ سَمَحْتَ}.', ''), 'Good evening. The menu, please.'] },
        { core: true, cells: ['2 · order', P('{w|أُرِيدُ} حَسَاءً وَسَلَطَةً، {e|مِنْ فَضْلِكَ}.', ''), 'I would like soup and a salad, please.'] },
        { cells: ['3 · available?', P('{k|هَلْ عِنْدَكُمْ} طَعَامٌ نَبَاتِيٌّ؟', ''), 'Do you have vegetarian food?'] },
        { cells: ['4 · price', P('{k|كَمْ سِعْرُ} الحَسَاءِ؟', ''), 'How much is the soup?'] },
        { core: true, cells: ['5 · pay', P('الحِسَابُ، {e|مِنْ فَضْلِكَ}. شُكْرًا جَزِيلًا.', ''), 'The bill, please. Thank you very much.'] },
      ],
      ltr: true,
      foot: 'After urīdu the item takes -an: urīdu shāyan, salaṭatan, ḥasāʼan. To a waitress: min faḍliki, law samaḥti.',
      notes: `GRAMMAR PART 1 — website rules “Order an item politely” (أُرِيدُ + item, مِنْ فَضْلِكَ / مِنْ فَضْلِكِ), “Ask whether something is available” (هَلْ عِنْدَكُمْ …؟ — the polite business form), “Ask the price” (كَمْ سِعْرُ / ثَمَنُ + noun: an idāfa) and “Close the exchange”.
Website mistake: أُرِيدُ مِنْ فَضْلِكَ سَلَطَةٌ ✗ → أُرِيدُ سَلَطَةً، مِنْ فَضْلِكَ ✓ (the item is the object → -an; please at the end).
Website mistake: هَلْ عِنْدَكَ …؟ → هَلْ عِنْدَكُمْ …؟ (ask the business, not one person).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · the waiter’s questions (listen for them!)', title: 'What would you like?', ar: 'أَسْئِلَةُ النَّادِلِ',
      cards: [
        { chip: 'TO A MAN', color: '1D5FBF', head: 'مَاذَا تُرِيدُ؟', big: 'مَسَاءُ الخَيْرِ. مَاذَا تُرِيدُ؟', en: 'Good evening. What would you like?', clue: 'tu-rī-du' },
        { chip: 'TO A WOMAN', color: 'C0386B', head: 'مَاذَا تُرِيدِينَ؟', big: 'هَلْ تُرِيدِينَ شَيْئًا لِلشُّرْبِ؟', en: 'Would you like something to drink?', clue: 'tu-rī-dī-na: add -īna.' },
        { chip: 'A OR B?', color: '6B4C9A', head: '… أَمْ …؟', big: 'عَصِيرٌ صَغِيرٌ أَمْ كَبِيرٌ؟', en: 'A small or a large juice?', clue: 'Answer with one word + thanks.' },
      ],
      error: { text: 'Website: a bare command sounds rude in a café.', pairs: [['أُرِيدُ شَايًا، مِنْ فَضْلِكَ.', 'أَعْطِنِي شَايًا.']] },
      notes: `GRAMMAR PART 2 — the waiter’s questions from the website vocabulary and listening: مَاذَا تُرِيدُ / تُرِيدِينَ؟ · هَلْ تُرِيدُ شَيْئًا آخَرَ؟ · مَاءٌ عَادِيٌّ أَمْ غَازِيٌّ؟ · صَغِيرٌ أَمْ كَبِيرٌ؟
Website pattern: “Short transactional replies can still be complete and polite”: مَاءٌ عَادِيٌّ، مِنْ فَضْلِكِ.
Reporting (Stretch, website pattern 5): يَطْلُبُ الزَّبُونُ الحَسَاءَ، وَتَطْلُبُ الزَّبُونَةُ السَّلَطَةَ.`,
    },
  ],
  quick: [0, 1, 2, 5],
  rest: [3, 4, 7],
  ido: {
    title: 'Watch me order at the café',
    steps: [
      { head: '1 · Waiter asks', ar: 'النَّادِلُ: مَرْحَبًا. مَاذَا تُرِيدُ؟', think: 'Listen for the question word.' },
      { head: '2 · Order', ar: 'الزَّبُونُ: {w|أُرِيدُ} حَسَاءً وَسَانْدَوِيتْشًا، {e|مِنْ فَضْلِكَ}.', think: 'Item + -an, then please.' },
      { head: '3 · Clarify', ar: 'النَّادِلُ: عَصِيرٌ صَغِيرٌ {k|أَمْ} كَبِيرٌ؟ — الزَّبُونُ: صَغِيرٌ، شُكْرًا.', think: 'Answer the detail asked.' },
      { head: '4 · Close', ar: 'الزَّبُونُ: لَا، شُكْرًا. الحِسَابُ، {e|مِنْ فَضْلِكَ}.', think: 'Bill + please.' },
    ],
    legend: ['w', 'e', 'k'], legendLabels: { w: 'REQUEST', e: 'POLITE', k: 'CHOICE' },
    model: 'النَّادِلُ: مَرْحَبًا. مَاذَا تُرِيدُ؟ — الزَّبُونُ: {w|أُرِيدُ} حَسَاءً وَسَانْدَوِيتْشًا، {e|مِنْ فَضْلِكَ}. — النَّادِلُ: هَلْ تُرِيدُ شَيْئًا لِلشُّرْبِ؟ — الزَّبُونُ: نَعَمْ، عَصِيرَ تُفَّاحٍ. — النَّادِلُ: صَغِيرًا {k|أَمْ} كَبِيرًا؟ — الزَّبُونُ: صَغِيرًا، شُكْرًا. — النَّادِلُ: شَيْءٌ آخَرُ؟ — الزَّبُونُ: لَا، الحِسَابُ {e|مِنْ فَضْلِكَ}.',
    modelEn: 'Waiter: Hello. What would you like? — Customer: I would like soup and a sandwich, please. — Would you like something to drink? — Yes, apple juice. — Small or large? — Small, thank you. — Anything else? — No, the bill please.',
    notes: 'I DO (3 min) — the website 8-line model dialogue. Perform it with a confident student (you are the waiter), then swap roles. Students copy it into their books.',
  },
  game: {
    title: 'At the café: match the picture',
    pick: [0, 1, 3],
    en: ['I would like coffee, please (to a man).', 'I would like juice, please (to a woman).', 'How much is the bill?'],
    icons: [[['fa6', 'FaMugHot', '8A5A2B'], ['fa6', 'FaPerson', '1D5FBF']], [['fa6', 'FaGlassWater', 'C77700'], ['fa6', 'FaPersonDress', 'C0386B']], [['fa6', 'FaCreditCard', '1E7B4F'], ['fa6', 'FaCircleQuestion', '6B4C9A']]],
    labels: ['coffee · waiter', 'juice · waitress', 'the bill?'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). The clue in items 1 and 2 is the last vowel of مِنْ فَضْلِكَ / مِنْ فَضْلِكِ. Other website items: مَاذَا تُوصِي؟ (what do you recommend?), بِدُونِ مُكَسَّرَاتٍ (without nuts), شُكْرًا، كَانَ الطَّعَامُ لَذِيذًا — great Stretch phrases.',
  },
  sorterNotes: 'After sorting, pairs put the six lines in a logical order and perform them as a mini-dialogue.',
  hints: ['Is a bare command polite?', 'Where does “please” go? Which ending on the item?', 'Asking a business: one person or “you all”?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nListen for: أُرِيدُ · عَصِيرَ · صَغِيرٌ أَمْ كَبِيرٌ.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 4, then act it out.',
  gloss: [
    ['النَّادِلُ: مَسَاءُ الخَيْرِ. مَاذَا تُرِيدِينَ؟', 'Waiter: Good evening. What would you (f.) like?'],
    ['الزَّبُونَةُ: أُرِيدُ سَلَطَةً وَسَانْدَوِيتْشَ جُبْنٍ، مِنْ فَضْلِكَ.', 'Customer: I would like a salad and a cheese sandwich, please.'],
    ['النَّادِلُ: هَلْ تُرِيدِينَ شَيْئًا لِلشُّرْبِ؟ الزَّبُونَةُ: نَعَمْ، عَصِيرَ بُرْتُقَالٍ.', 'Would you like something to drink? — Yes, orange juice.'],
    ['النَّادِلُ: عَصِيرٌ صَغِيرٌ أَمْ كَبِيرٌ؟ الزَّبُونَةُ: صَغِيرٌ، شُكْرًا.', 'A small or large juice? — Small, thank you.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'سَلِّمْ عَلَى النَّادِلِ وَاطْلُبْ قَائِمَةَ الطَّعَامِ.' },
      { route: 'core', ar: 'اُطْلُبْ طَبَقًا وَمَشْرُوبًا.' },
      { route: 'develop', ar: 'اِسْأَلْ: هَلْ عِنْدَهُمْ طَعَامٌ نَبَاتِيٌّ؟ وَأَجِبْ عَنْ سُؤَالِ النَّادِلِ.' },
      { route: 'stretch', ar: 'الطَّبَقُ غَيْرُ مَوْجُودٍ: اُطْلُبْ بَدِيلًا، ثُمَّ اُطْلُبِ الحِسَابَ.' },
    ],
    stems: [
      { route: 'core', ar: 'مَسَاءُ الخَيْرِ. قَائِمَةُ الطَّعَامِ، لَوْ سَمَحْتَ.' },
      { route: 'core', ar: 'أُرِيدُ ______ وَ ______ ، مِنْ فَضْلِكَ.' },
      { route: 'develop', ar: 'هَلْ عِنْدَكُمْ ______ ؟ · صَغِيرًا، شُكْرًا.' },
      { route: 'stretch', ar: 'إِذَنْ، أُرِيدُ ______ بَدَلًا مِنْهُ. الحِسَابُ، مِنْ فَضْلِكَ.' },
    ],
    modelEn: ['Good evening. What would you (f.) like?', 'I would like lentil soup and a salad, please.'],
    notes: `Website “Restaurant role play” — the five website prompts (English on the website) are given in Arabic here: greet and ask for the menu · order a starter and a main · ask about a vegetarian option · choose a drink and answer a size/type question · ask for the bill and close.
Website model: مَسَاءُ الخَيْرِ. مَاذَا تُرِيدِينَ؟ — أُرِيدُ حَسَاءَ العَدَسِ وَسَلَطَةً، مِنْ فَضْلِكَ. — هَلْ تُرِيدِينَ شَيْئًا لِلشُّرْبِ؟ — نَعَمْ، مَاءً عَادِيًّا، ثُمَّ الحِسَابَ مِنْ فَضْلِكَ.
The instructions are in the masculine imperative; say them to girls as سَلِّمِي، اُطْلُبِي، اِسْأَلِي.`,
  },
  write: {
    core: { amount: '4 lines', how: 'Greet, order with please, answer one question, ask for the bill.' },
    develop: { amount: '8 lines', how: 'Website task: waiter and customer; food, a drink, one clarification and the bill.' },
    stretch: { amount: '10–12 lines', how: 'Add an unavailable dish, an alternative and a question about the price.' },
  },
  frames: {
    core: [
      { en: 'Good evening.', ar: 'مَسَاءُ الخَيْرِ.' },
      { en: 'I would like …, please.', ar: 'أُرِيدُ ______ ، مِنْ فَضْلِكَ.' },
      { en: 'Yes, … please. / No, thank you.', ar: 'نَعَمْ، ______ مِنْ فَضْلِكَ. / لَا، شُكْرًا.' },
      { en: 'The bill, please.', ar: 'الحِسَابُ، مِنْ فَضْلِكَ.' },
      { en: 'Thank you very much.', ar: 'شُكْرًا جَزِيلًا.' },
    ],
    develop: [
      { en: 'Do you have …?', ar: 'هَلْ عِنْدَكُمْ ______ ؟' },
      { en: 'How much is the …?', ar: 'كَمْ سِعْرُ ______ ؟' },
      { en: 'May I order …?', ar: 'هَلْ يُمْكِنُنِي أَنْ أَطْلُبَ ______ ؟' },
      { en: 'Small / large, thank you.', ar: 'صَغِيرًا / كَبِيرًا، شُكْرًا.' },
      { en: 'Still water, please (to a woman).', ar: 'مَاءً عَادِيًّا، مِنْ فَضْلِكِ.' },
    ],
    bank: ['أُرِيدُ', 'مِنْ فَضْلِكَ', 'مِنْ فَضْلِكِ', 'لَوْ سَمَحْتَ', 'هَلْ عِنْدَكُمْ', 'كَمْ سِعْرُ', 'الحِسَابُ', 'قَائِمَةُ الطَّعَامِ', 'نَادِلٌ', 'صَغِيرٌ', 'كَبِيرٌ', 'شُكْرًا جَزِيلًا'],
  },
  stretch: [
    ['آسِفٌ، لَا يُوجَدُ سَمَكٌ اليَوْمَ', 'sorry, there is no fish today'],
    ['إِذَنْ، أُرِيدُ … بَدَلًا مِنْهُ', 'then I would like … instead'],
    ['مَاذَا تُوصِي؟', 'what do you recommend?'],
    ['بِدُونِ مُكَسَّرَاتٍ، مِنْ فَضْلِكَ', 'without nuts, please'],
    ['كَانَ الطَّعَامُ لَذِيذًا', 'the food was delicious'],
  ],
  modelEn: 'Waiter: Hello. What would you like? Customer: I would like soup and a sandwich, please. Waiter: Would you like something to drink? Customer: Yes, apple juice. Waiter: Small or large? Customer: Small, thank you. Waiter: Anything else? Customer: No, the bill please.',
  find: ['a greeting', 'an order', 'a clarification', 'the bill'],
  modelNotes: 'Evidence: مَرْحَبًا · أُرِيدُ حَسَاءً … مِنْ فَضْلِكَ · صَغِيرًا أَمْ كَبِيرًا؟ · الحِسَابُ مِنْ فَضْلِكَ. Notice صَغِيرًا (-an): it answers “Do you want a small or a large one?”.',
  selfCheck: [
    { route: 'core', text: 'I greeted and closed politely.' },
    { route: 'core', text: 'Every request has مِنْ فَضْلِكَ / مِنْ فَضْلِكِ.' },
    { route: 'develop', text: 'The item after أُرِيدُ ends in -an.' },
    { route: 'develop', text: 'I answered the waiter’s question.' },
    { route: 'stretch', text: 'I handled a missing item without the model.' },
  ],
  exit: [1, 2, 3],
  glossary: [
    ['مَرْحَبًا بِكُمْ', 'welcome'], ['نُقَدِّمُ', 'we serve'], ['مِنَ … إِلَى …', 'from … to …'], ['الحَادِيَةَ عَشْرَةَ', 'eleven'], ['حَسَاءَ العَدَسِ', 'lentil soup'],
    ['نَبَاتِيَّةً', 'vegetarian'], ['لَا يُوجَدُ', 'there is no'], ['المَشْرُوبَاتُ', 'drinks'], ['اُطْلُبُوا', 'order (you all)'], ['ادْفَعُوا', 'pay (you all)'],
  ],
  prep: {
    words: [['سِعْرٌ', 'a price', 'pl. أَسْعَارٌ'], ['طَبَقٌ', 'a dish / plate', 'pl. أَطْبَاقٌ'], ['رِيَالٌ / جُنَيْهٌ', 'a riyal / a pound', '—'], ['مُقَبِّلَاتٌ', 'starters', '—'], ['حَلْوَى', 'dessert / sweets', '—']],
    questionEn: 'What is your favourite dish from any country? Write its name.',
    questionAr: 'طَبَقِي المُفَضَّلُ هُوَ …',
    homework: {
      core: 'Website F5-L05: the vocabulary tab and the “Build the transaction” sorter.',
      develop: 'Website writing task: an 8-line café dialogue with one clarification.',
      stretch: 'Write a 10–12-line dialogue with an unavailable dish and an alternative.',
    },
    wordsSource: 'The five words come from the website F5-L06 lesson (menus, prices and dishes).',
  },
  remember: 'Remember: أُرِيدُ + item (-an) + مِنْ فَضْلِكَ / مِنْ فَضْلِكِ · هَلْ عِنْدَكُمْ …؟',
});

module.exports = { meta, slides };
