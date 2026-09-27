'use strict';
/* F5-L02 · Meals and Eating Routines — website: Pathways › Foundation › F5 › F5-L02 (meals, فِي + meal, آكُلُ / أَشْرَبُ / أَتَنَاوَلُ, time and frequency words, مَاذَا تَأْكُلُ / تَأْكُلِينَ). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F5')({
  n: 2, fileTitle: 'Meals_and_Eating_Routines', chip: 'Meals and Routines',
  title: 'Meals and Eating Routines', arabic: 'وَجَبَاتُ اليَوْمِ وَعَادَاتُ الأَكْلِ',
  focus: 'Describe breakfast, lunch, dinner and snacks with فِي + meal, time and frequency words, and the verbs آكُلُ، أَشْرَبُ and أَتَنَاوَلُ.',
  icon: 'FaBowlFood', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const who = (he, she, we) => ({ tag: 'I · he · she · we', forms: [{ l: 'he', ar: he }, { l: 'she', ar: she }, { l: 'we', ar: we }] });
const slides = D.devLesson('F5-L02', {
  support: `• Core: three meal sentences with a frame: فِي الفُطُورِ آكُلُ … وَأَشْرَبُ … (breakfast, lunch, dinner).
• Develop: add a time (فِي السَّاعَةِ …) and a frequency word (عَادَةً، أَحْيَانًا), then ask a partner مَاذَا تَأْكُلُ / تَأْكُلِينَ …؟
• Stretch: weekday vs weekend in 8–10 sentences with ثُمَّ and وَلَكِنْ; use أَتَنَاوَلُ to vary the verbs and report he / she.
• The website’s three slips: آكُلُ with a drink · أَتَنَاوَلُ without a meal · the vowel after فِي (فِي العَشَاءِ).
• Respect fasting and family routines — any real or invented day is fine (a Ramadan day with سُحُورٌ and إِفْطَارٌ is an excellent Stretch variation).`,
  teach: 'Meals and time words, then eat / drink / have + فِي + the meal.',
  wedo: 'Picture match, sort by time of day, fix the mistakes and listen to Rami.',
  next: { nextCode: 'F5-L03', nextTitle: 'Likes, Dislikes and Preferences', nextAr: 'الإِعْجَابُ وَالتَّفْضِيلُ' },
  doNow: {
    questions: [
      q('What does فَطُورٌ / فُطُورٌ mean?', ['breakfast', 'dinner', 'a snack'], 'Prepared at home (F5-L01).'),
      q('What does عَادَةً mean?', ['usually', 'always', 'never'], 'Prepared at home (F5-L01).'),
      q('Which verb goes with drinks?', ['أَشْرَبُ', 'آكُلُ', 'أُحِبُّ'], 'F5-L01: ashrabu with drinks.'),
      q('Ask a girl “Do you like salad?”', ['هَلْ تُحِبِّينَ السَّلَطَةَ؟', 'هَلْ تُحِبُّ السَّلَطَةَ؟', 'هَلْ أُحِبُّ السَّلَطَةَ؟'], 'F5-L01: a female listener → tuḥibbīna.'),
      q('Which word is a drink?', ['عَصِيرٌ', 'أَرُزٌّ', 'جُبْنٌ'], 'F5-L01 vocabulary.'),
    ],
    keyIdea: { text: 'A meal sentence has three parts: WHEN · VERB · FOOD.', ar: '{k|فِي الفُطُورِ} {w|آكُلُ} الخُبْزَ وَالبَيْضَ.' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F5-L01 (the website spells breakfast فُطُورٌ; فَطُورٌ is also correct). Questions 3–5 retrieve F5-L01 (eat / drink, asking a girl, food or drink).',
  },
  routes: {
    core: ['I can name the three meals and a snack.', 'I can say what I eat at each meal.'],
    develop: ['I can add a time and a frequency word.', 'I can ask a boy or a girl what they eat.'],
    stretch: ['I can use أَتَنَاوَلُ and he / she forms.', 'I can compare weekday and weekend meals.'],
  },
  bridge: [
    { ar: 'عَادَةً', urdu: 'عادت', tr: 'ādat', en: 'habit → usually' },
    { ar: 'دَائِمًا', urdu: 'دائم', tr: 'dāʼim', en: 'permanent → always' },
    { ar: 'وَجْبَةٌ', urdu: 'واجب', tr: 'wājib', en: 'Urdu: due · Arabic: a meal' },
    { ar: 'فُطُورٌ', urdu: 'افطار', tr: 'iftār', en: 'breaking the fast → breakfast' },
    { ar: 'نَادِرًا', urdu: 'نادر', tr: 'nādir', en: 'rare → rarely' },
  ],
  bridgeNotes: 'URDU BRIDGE: عادت (habit) → عَادَةً (usually, “as a habit”). دائم (permanent) → دَائِمًا. نادر (rare) → نَادِرًا. افطار (the meal that breaks the fast) shares its root with فُطُورٌ — breakfast literally “breaks the night’s fast”, just like the English word! وَجْبَةٌ and Urdu واجب share a root (what is due) — a nice memory hook: a meal is “due” three times a day.',
  core: ['فُطُورٌ', 'غَدَاءٌ', 'عَشَاءٌ', 'وَجْبَةٌ خَفِيفَةٌ', 'فِي الصَّبَاحِ', 'فِي المَسَاءِ', 'آكُلُ', 'أَشْرَبُ', 'أَتَنَاوَلُ', 'عَادَةً', 'أَحْيَانًا', 'كُلَّ يَوْمٍ'],
  forms: {
    'آكُلُ': who('يَأْكُلُ', 'تَأْكُلُ', 'نَأْكُلُ'),
    'أَشْرَبُ': who('يَشْرَبُ', 'تَشْرَبُ', 'نَشْرَبُ'),
    'أَتَنَاوَلُ': who('يَتَنَاوَلُ', 'تَتَنَاوَلُ', 'نَتَنَاوَلُ'),
    'وَجْبَةٌ': { tag: 'sg · pl', forms: [{ l: 'one', ar: 'وَجْبَةٌ' }, { l: 'pl.', ar: 'وَجَبَاتٌ' }] },
  },
  vocabNotes: {
    0: 'Meals: فُطُورٌ (the website; فَطُورٌ is also used), غَدَاءٌ، عَشَاءٌ. Time phrases: فِي الصَّبَاحِ، عِنْدَ الظُّهْرِ، فِي المَسَاءِ، بَعْدَ المَدْرَسَةِ.',
    1: 'The forms on the cards show he / she / we. Point at the first letter only: أَ = I, يَ = he, تَ = she (and you), نَ = we.',
    2: 'FLEX: frequency words appear in the I Do model and the writing task — teach them from there if time is short.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · when? + verb + food (website rules 1 and 2)', title: 'At breakfast I eat …', ar: 'فِي + الوَجْبَةِ',
      cols: [{ label: 'Meal', w: 2.5, size: 24 }, { label: 'When?', w: 3.0, size: 24 }, { label: 'Model sentence', w: 6.83, size: 24 }],
      rows: [
        { core: true, cells: [{ ar: 'الفُطُورُ' }, P('فِي الصَّبَاحِ', 'in the morning'), P('{k|فِي الفُطُورِ} {w|آكُلُ} الخُبْزَ وَالبَيْضَ.', 'At breakfast I eat bread and eggs.')] },
        { core: true, cells: [{ ar: 'الغَدَاءُ' }, P('عِنْدَ الظُّهْرِ', 'at midday'), P('{k|فِي الغَدَاءِ} {w|آكُلُ} الأَرُزَّ وَالدَّجَاجَ.', 'At lunch I eat rice and chicken.')] },
        { core: true, cells: [{ ar: 'العَشَاءُ' }, P('فِي المَسَاءِ', 'in the evening'), P('{k|فِي العَشَاءِ} {w|أَشْرَبُ} المَاءَ.', 'At dinner I drink water.')] },
        { cells: [{ ar: 'وَجْبَةٌ خَفِيفَةٌ' }, P('بَعْدَ المَدْرَسَةِ', 'after school'), P('{k|بَعْدَ المَدْرَسَةِ} {w|آكُلُ} تُفَّاحَةً.', 'After school I eat an apple.')] },
        { cells: [{ ar: 'الفُطُورُ' }, P('فِي السَّاعَةِ السَّابِعَةِ', 'at seven'), P('{w|أَتَنَاوَلُ} الفُطُورَ {k|فِي السَّاعَةِ السَّابِعَةِ}.', 'I have breakfast at seven.')] },
      ],
      ltr: false,
      foot: 'After fī the meal ends in -i: fi l-fuṭūri, fi l-ghadāʼi, fi l-ʿashāʼi.',
      notes: `GRAMMAR PART 1 — website rules “Choose the correct action” (آكُلُ food · أَشْرَبُ drink) and “Add the meal” (فِي الفُطُورِ / فِي الغَدَاءِ / فِي العَشَاءِ).
Website teaching note: “A meal description needs more than a food list. Add the meal, a verb and a time phrase.”
Website common error: مَاذَا تَأْكُلُ فِي العَشَاءَ؟ ✗ → فِي العَشَاءِ ✓ (kasra after فِي).
Teal = WHEN, blue = VERB. Core students copy rows 1–3 and change the food.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · have a meal · ask a boy or a girl (website rules 3 and 4)', title: 'Have a meal — and ask about it', ar: 'أَتَنَاوَلُ · مَاذَا تَأْكُلُ؟',
      cards: [
        { chip: 'HAVE A MEAL · FORMAL', color: '6B4C9A', head: 'أَتَنَاوَلُ + الوَجْبَةَ', big: 'أَتَنَاوَلُ الغَدَاءَ عِنْدَ الظُّهْرِ.', en: 'I have lunch at midday.', clue: 'The meal is the object: no fī.' },
        { chip: 'ASK A BOY', color: '1D5FBF', head: 'مَاذَا تَأْكُلُ؟', big: 'مَاذَا تَأْكُلُ فِي العَشَاءِ؟', en: 'What do you (m.) eat for dinner?', clue: 'ta-ʼku-lu' },
        { chip: 'ASK A GIRL', color: 'C0386B', head: 'مَاذَا تَأْكُلِينَ؟', big: 'مَاذَا تَأْكُلِينَ فِي الفُطُورِ؟', en: 'What do you (f.) eat for breakfast?', clue: 'ta-ʼku-lī-na: add -īna.' },
      ],
      error: { text: 'Website: the meal itself is the object of atanāwalu.', pairs: [['أَتَنَاوَلُ الغَدَاءَ.', 'أَتَنَاوَلُ فِي الغَدَاءِ.']] },
      notes: `GRAMMAR PART 2 — website rules “Ask what someone eats” (the ending changes for a female listener) and “Use أَتَنَاوَلُ for a whole meal” (more formal).
Website teaching note: “Keep آكُلُ and أَشْرَبُ secure first, then use أَتَنَاوَلُ to vary language.” — Core students may skip أَتَنَاوَلُ.
He / she: هُوَ يَتَنَاوَلُ · هِيَ تَتَنَاوَلُ الغَدَاءَ مَعَ أُسْرَتِهَا (website example).`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 7],
  ido: {
    title: 'Watch me build my meal routine',
    steps: [
      { head: '1 · Breakfast', ar: '{m|عَادَةً} {w|أَتَنَاوَلُ} الفُطُورَ {k|فِي السَّاعَةِ السَّابِعَةِ}.', think: 'Frequency + verb + meal + time.' },
      { head: '2 · Food + drink', ar: '{w|آكُلُ} الخُبْزَ وَالجُبْنَ، وَ{w|أَشْرَبُ} الحَلِيبَ.', think: 'Eat for food, drink for milk.' },
      { head: '3 · Lunch + snack', ar: '{k|عِنْدَ الظُّهْرِ} آكُلُ فِي المَدْرَسَةِ، وَ{m|أَحْيَانًا} آكُلُ وَجْبَةً خَفِيفَةً.', think: 'Sometimes = aḥyānan.' },
      { head: '4 · Dinner', ar: '{k|فِي المَسَاءِ} أَتَنَاوَلُ العَشَاءَ مَعَ عَائِلَتِي، ثُمَّ أَشْرَبُ المَاءَ.', think: 'Then = thumma.' },
    ],
    legend: ['k', 'w', 'm'], legendLabels: { k: 'WHEN', w: 'VERB', m: 'HOW OFTEN' },
    model: '{m|عَادَةً} أَتَنَاوَلُ الفُطُورَ {k|فِي السَّاعَةِ السَّابِعَةِ}. آكُلُ الخُبْزَ وَالجُبْنَ، وَأَشْرَبُ الحَلِيبَ. {k|عِنْدَ الظُّهْرِ} آكُلُ الغَدَاءَ فِي المَدْرَسَةِ. {k|بَعْدَ المَدْرَسَةِ} {m|أَحْيَانًا} آكُلُ وَجْبَةً خَفِيفَةً. {k|فِي المَسَاءِ} أَتَنَاوَلُ العَشَاءَ مَعَ عَائِلَتِي، ثُمَّ أَشْرَبُ المَاءَ.',
    modelEn: 'I usually have breakfast at seven. I eat bread and cheese and drink milk. At midday I eat lunch at school. After school I sometimes eat a snack. In the evening I have dinner with my family, then I drink water.',
    notes: 'I DO (3 min) — the website writing model built step by step with a think-aloud. Students copy it and change the foods and one time.',
  },
  game: {
    title: 'Meals of the day: match the picture',
    pick: [0, 1, 2],
    en: ['I have breakfast in the morning.', 'I have lunch at midday.', 'I have dinner in the evening.'],
    icons: [[['fa6', 'FaSun', 'E0A800'], ['fa6', 'FaMugHot', '8A5A2B']], [['fa6', 'FaBowlRice', 'C77700'], ['fa6', 'FaLeaf', '1E7B4F']], [['fa6', 'FaMoon', '1F3A5F'], ['fa6', 'FaBowlFood', 'C0392B']]],
    labels: ['morning', 'midday', 'evening'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Note: the game uses الإِفْطَارُ for breakfast and adverbs صَبَاحًا / ظُهْرًا / مَسَاءً (= in the morning / at midday / in the evening) — both styles are correct. Other website items: a school snack, eating together, “I don’t skip breakfast” (لَا أَتَخَطَّى الإِفْطَارَ).',
  },
  sorterNotes: 'Items 4–6 are full sentences: ask students to underline the clue word (قَبْلَ المَدْرَسَةِ، فِي المَدْرَسَةِ، بَعْدَ العَمَلِ).',
  hints: ['Is milk food or a drink?', 'What does atanāwalu need after it?', 'Which vowel comes after فِي?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 4.\nListen for: السَّابِعَةِ · فِي المَدْرَسَةِ · تُفَّاحَةً.',
  listenRoutes: 'Core: questions 1, 3 and 4. Develop / Stretch: all 5.',
  gloss: [
    ['فِي الصَّبَاحِ أَتَنَاوَلُ الفُطُورَ فِي السَّاعَةِ السَّابِعَةِ.', 'In the morning I have breakfast at seven o’clock.'],
    ['آكُلُ الخُبْزَ وَالجُبْنَ، وَأَشْرَبُ الحَلِيبَ.', 'I eat bread and cheese, and I drink milk.'],
    ['عِنْدَ الظُّهْرِ آكُلُ الأَرُزَّ وَالدَّجَاجَ فِي المَدْرَسَةِ.', 'At midday I eat rice and chicken at school.'],
    ['بَعْدَ المَدْرَسَةِ آكُلُ تُفَّاحَةً.', 'After school I eat an apple.'],
    ['فِي المَسَاءِ أَتَنَاوَلُ العَشَاءَ مَعَ عَائِلَتِي، وَأَشْرَبُ المَاءَ.', 'In the evening I have dinner with my family, and I drink water.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَاذَا تَأْكُلُ / تَأْكُلِينَ فِي الفُطُورِ؟' },
      { route: 'develop', ar: 'مَتَى تَتَنَاوَلُ / تَتَنَاوَلِينَ الغَدَاءَ؟' },
      { route: 'develop', ar: 'هَلْ تَأْكُلُ وَجْبَةً خَفِيفَةً؟' },
      { route: 'stretch', ar: 'مَعَ مَنْ تَتَنَاوَلُ العَشَاءَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'فِي الفُطُورِ آكُلُ ______ وَأَشْرَبُ ______ .' },
      { route: 'develop', ar: 'أَتَنَاوَلُ الغَدَاءَ فِي السَّاعَةِ ______ .' },
      { route: 'develop', ar: 'نَعَمْ، أَحْيَانًا آكُلُ ______ بَعْدَ المَدْرَسَةِ.' },
      { route: 'stretch', ar: 'أَتَنَاوَلُ العَشَاءَ مَعَ ______ ، ثُمَّ ______ .' },
    ],
    modelEn: ['What do you (f.) eat for breakfast?', 'I eat bread and eggs, and I drink tea.'],
    notes: 'Website “Compare meal routines” — all four prompts are the website’s. Website model: مَاذَا تَأْكُلِينَ فِي الفُطُورِ؟ — آكُلُ الخُبْزَ وَالبَيْضَ، وَأَشْرَبُ الشَّايَ. — وَمَتَى تَتَنَاوَلِينَ الغَدَاءَ؟ — أَتَنَاوَلُ الغَدَاءَ عِنْدَ السَّاعَةِ الوَاحِدَةِ.',
  },
  write: {
    core: { amount: '3–4 sentences', how: 'One sentence for each meal with the frame: at breakfast I eat … and drink …' },
    develop: { amount: '6–8 sentences', how: 'Website task: three meals, a snack, two times and one frequency word.' },
    stretch: { amount: '8–10 sentences', how: 'Compare a weekday and the weekend; explain one difference with but.' },
  },
  frames: {
    core: [
      { en: 'At breakfast I eat … and drink …', ar: 'فِي الفُطُورِ آكُلُ ______ وَأَشْرَبُ ______ .' },
      { en: 'At lunch I eat …', ar: 'فِي الغَدَاءِ آكُلُ ______ .' },
      { en: 'At dinner I eat …', ar: 'فِي العَشَاءِ آكُلُ ______ .' },
      { en: 'After school I eat a snack.', ar: 'بَعْدَ المَدْرَسَةِ آكُلُ وَجْبَةً خَفِيفَةً.' },
      { en: 'I drink water every day.', ar: 'أَشْرَبُ المَاءَ كُلَّ يَوْمٍ.' },
    ],
    develop: [
      { en: 'I usually have breakfast at …', ar: 'عَادَةً أَتَنَاوَلُ الفُطُورَ فِي السَّاعَةِ ______ .' },
      { en: 'Sometimes I eat …', ar: 'أَحْيَانًا آكُلُ ______ .' },
      { en: 'I have dinner with my family.', ar: 'أَتَنَاوَلُ العَشَاءَ مَعَ عَائِلَتِي.' },
      { en: '… then I drink …', ar: 'ثُمَّ أَشْرَبُ ______ .' },
      { en: 'At the weekend I eat …', ar: 'فِي نِهَايَةِ الأُسْبُوعِ آكُلُ ______ .' },
    ],
    bank: ['فُطُورٌ', 'غَدَاءٌ', 'عَشَاءٌ', 'وَجْبَةٌ خَفِيفَةٌ', 'آكُلُ', 'أَشْرَبُ', 'أَتَنَاوَلُ', 'عَادَةً', 'أَحْيَانًا', 'دَائِمًا', 'ثُمَّ', 'مَعَ عَائِلَتِي'],
  },
  stretch: [
    ['فِي أَيَّامِ الدِّرَاسَةِ', 'on school days'],
    ['فِي نِهَايَةِ الأُسْبُوعِ', 'at the weekend'],
    ['نَتَنَاوَلُ الفُطُورَ مَعًا', 'we have breakfast together'],
    ['لَا أَتَخَطَّى الفُطُورَ أَبَدًا', 'I never skip breakfast'],
    ['تَطْبُخُ أُمِّي …', 'my mother cooks …'],
  ],
  modelEn: 'I usually have breakfast at seven o’clock. I eat bread and cheese, and I drink milk. At midday I eat lunch at school. After school I sometimes eat a snack. In the evening I have dinner with my family, then I drink water.',
  find: ['three meals', 'two times', 'a frequency word', 'then'],
  modelNotes: 'Evidence: الفُطُورَ · الغَدَاءَ · العَشَاءَ · فِي السَّاعَةِ السَّابِعَةِ · عِنْدَ الظُّهْرِ · عَادَةً / أَحْيَانًا · ثُمَّ.',
  selfCheck: [
    { route: 'core', text: 'I described breakfast, lunch and dinner.' },
    { route: 'core', text: 'Food with آكُلُ, drinks with أَشْرَبُ.' },
    { route: 'develop', text: 'I added a time and a frequency word.' },
    { route: 'develop', text: 'After فِي the meal ends in -i.' },
    { route: 'stretch', text: 'I used أَتَنَاوَلُ and compared two days.' },
  ],
  exit: [0, 3, 7],
  glossary: [
    ['عَادَةً', 'usually'], ['فُطُورًا صِحِّيًّا', 'a healthy breakfast'], ['الزَّبَادِي', 'yoghurt'], ['الفَاكِهَةَ', 'fruit'], ['وَلَكِنِّي أَحْيَانًا', 'but sometimes I'],
    ['البِيتْزَا', 'pizza'], ['صَدِيقَاتِي', 'my (girl) friends'], ['تَطْبُخُ أُمِّي', 'my mother cooks'], ['الحَسَاءَ', 'soup'], ['نَأْكُلُ مَعًا', 'we eat together'],
  ],
  prep: {
    words: [['أُفَضِّلُ … عَلَى …', 'I prefer … to …', 'she: تُفَضِّلُ'], ['لَذِيذٌ', 'delicious', 'f. لَذِيذَةٌ'], ['كَثِيرًا', 'a lot', '—'], ['مَا رَأْيُكَ فِي …؟', 'what do you think of …?', 'f. رَأْيُكِ'], ['مُفَضَّلٌ', 'favourite', 'f. مُفَضَّلَةٌ']],
    questionEn: 'Which do you prefer: rice or pasta? Write one sentence.',
    questionAr: 'أُفَضِّلُ … عَلَى …',
    homework: {
      core: 'Website F5-L02: the vocabulary tab and the “Match the routine to the time” sorter.',
      develop: 'Write 6–8 sentences about your meals with two times and one frequency word.',
      stretch: 'Website Stretch: compare weekday and weekend meals in 8–10 sentences.',
    },
    wordsSource: 'The five words prepare the website F5-L03 lesson (likes, dislikes and preferences).',
  },
  remember: 'Remember: WHEN + VERB + FOOD · فِي + the meal · آكُلُ food, أَشْرَبُ drinks.',
});

module.exports = { meta, slides };
