'use strict';
/* AT-A-L04 · Food and Drink — Meals and Preferences — website: Advanced Topics › Topic A › Lesson 4 (lesson engine F5-L01 “Food and Drinks”).
   Topic layer: adjective agreement with food nouns (الخُبْزُ طَازَجٌ / القَهْوَةُ مُرَّةٌ) and collective / one / plural forms. */
const T = require('./topic-common');
const D = require('./d-common');
const { q } = D;

const meta = T.meta('A', 4, { fileTitle: 'Food_and_Drink_Meals_and_Preferences', chip: 'Food and Drink', icon: 'FaBowlFood' });
const nx = T.nextOf('A', 4);

// collective noun · one (unit noun) · plural — the website teach point تُفَّاحٌ / تُفَّاحَةٌ
const F = (one, pl) => ({ tag: 'coll. · one · pl', forms: [{ l: 'pl.', ar: pl }, { l: 'one', ar: one }] });
const forms = {
  'بَيْضٌ': F('بَيْضَةٌ', 'بَيْضَاتٌ'), 'دَجَاجٌ': F('دَجَاجَةٌ', 'دَجَاجَاتٌ'), 'سَمَكٌ': F('سَمَكَةٌ', 'أَسْمَاكٌ'),
  'تُفَّاحٌ': F('تُفَّاحَةٌ', 'تُفَّاحَاتٌ'), 'مَوْزٌ': F('مَوْزَةٌ', 'مَوْزَاتٌ'), 'بُرْتُقَالٌ': F('بُرْتُقَالَةٌ', 'بُرْتُقَالَاتٌ'), 'عِنَبٌ': F('عِنَبَةٌ', 'أَعْنَابٌ'), 'تَمْرٌ': F('تَمْرَةٌ', 'تُمُورٌ'),
  'خُبْزٌ': { tag: 'm.', forms: [{ l: 'pl.', ar: 'أَخْبَازٌ' }, { l: 'a loaf', ar: 'رَغِيفٌ' }] },
  'قَهْوَةٌ': { tag: 'f.', forms: [{ l: 'adj. (f.)', ar: 'مُرَّةٌ' }, { l: 'f.', ar: 'قَهْوَةٌ' }] },
  'عَصِيرٌ': { tag: 'm.', forms: [{ l: 'pl.', ar: 'عَصَائِرُ' }, { l: 'm.', ar: 'عَصِيرٌ' }] },
  'مَاءٌ': { tag: 'm.', forms: [{ l: 'pl.', ar: 'مِيَاهٌ' }, { l: 'm.', ar: 'مَاءٌ' }] },
  'شَايٌ': { tag: 'm.', forms: [{ l: 'adj. (m.)', ar: 'سَاخِنٌ' }, { l: 'm.', ar: 'شَايٌ' }] },
  'حَلِيبٌ': { tag: 'm.', forms: [{ l: 'adj. (m.)', ar: 'بَارِدٌ' }, { l: 'm.', ar: 'حَلِيبٌ' }] },
  'حَسَاءٌ': { tag: 'm.', forms: [{ l: 'adj. (m.)', ar: 'سَاخِنٌ' }, { l: 'm.', ar: 'حَسَاءٌ' }] },
};

const raw = D.devLesson('F5-L01', {
  siteRef: 'Advanced Topics › Topic A › Lesson 4 (AT-A-L04), lesson engine Pathways › Foundation › F5 › F5-L01',
  support: `• Topic A moves from the day (AT-A-L01–L03) to meals. Core: 10 food and drink words + أُحِبُّ / لَا أُحِبُّ + آكُلُ / أَشْرَبُ. Develop: ask a partner (هَلْ تُحِبُّ؟ / هَلْ تُحِبِّينَ؟) and report (هُوَ يُحِبُّ … / هِيَ تُحِبُّ …). Stretch (Topic A grammar): adjective agreement — الخُبْزُ طَازَجٌ، القَهْوَةُ مُرَّةٌ — and collective / one forms (تُفَّاحٌ / تُفَّاحَةٌ).
• The engine is a Foundation lesson, so most of the class can succeed; the Topic challenge (food survey) is where Develop and Stretch move up to B1 reporting.
• Link to AT-A-L03: frequency words come straight back (دَائِمًا آكُلُ … · لَا أَشْرَبُ القَهْوَةَ أَبَدًا).
• Urdu bridge: many food words are shared — چاول is not, but گوشت / لحم, دودھ / حلیب (no), چائے ← شَايٌ, قہوہ ← قَهْوَةٌ, شکر ← سُكَّرٌ, نمک / مِلْحٌ (no), سلاد ← سَلَطَةٌ.`,
  teach: 'Food and drink words, then I like / I don’t like + I eat / I drink.',
  wedo: 'Picture match, sort food and drink, fix and listen.',
  next: nx,
  flexGroups: [1, 3],
  kwText: '40 food and drink words from the website in 4 groups. Today: staples and drinks (CORE). Fruit, vegetables and ingredients are FLEX / homework.',
  doNow: {
    questions: [
      q('What does أَرُزٌّ mean?', ['rice', 'bread', 'chicken'], 'Prepared at home (AT-A-L03).'),
      q('What does عَصِيرٌ mean?', ['juice', 'water', 'milk'], 'Prepared at home (AT-A-L03).'),
      q('Choose “I always wake up early.”', ['أَسْتَيْقِظُ مُبَكِّرًا دَائِمًا.', 'أَسْتَيْقِظُ مُبَكِّرًا أَبَدًا.', 'يَسْتَيْقِظُ مُبَكِّرًا دَائِمًا.'], 'AT-A-L03: frequency.'),
      q('What does أَتَنَاوَلُ الإِفْطَارَ mean?', ['I have breakfast', 'I get dressed', 'I go to school'], 'AT-A-L01: routine verbs.'),
      q('السَّاعَةُ السَّابِعَةُ وَالنِّصْفُ = ?', ['7:30', '7:15', '6:45'], 'AT-A-L02: clock time.'),
    ],
    keyIdea: { text: 'Food follows the verb directly — no “to”: I like bread = uḥibbu l-khubza. Drinks take “I drink”, food takes “I eat”.', ar: '{w|أُحِبُّ} الخُبْزَ  ·  {w|آكُلُ} الأَرُزَّ  ·  {w|أَشْرَبُ} المَاءَ' },
    retrieves: 'Questions 1–2 test two of the five food and drink words prepared at home at the end of AT-A-L03. Questions 3–5 retrieve AT-A-L03 (frequency), AT-A-L01 (routine) and AT-A-L02 (clock time).',
  },
  routes: {
    core: ['I can name 10 foods and drinks.', 'I can say what I like and don’t like.'],
    develop: ['I can ask a boy or a girl what they like.', 'I can report a partner’s answers (he likes … / she likes …).'],
    stretch: ['I can describe food with an agreeing adjective.', 'I can use collective and “one” forms (tuffāḥ / tuffāḥa).'],
  },
  bridge: [
    { ar: 'شَايٌ', urdu: 'چائے', tr: 'shāy', en: 'tea' },
    { ar: 'قَهْوَةٌ', urdu: 'قہوہ', tr: 'qahwa', en: 'coffee' },
    { ar: 'سُكَّرٌ', urdu: 'شکر', tr: 'sukkar', en: 'sugar' },
    { ar: 'سَلَطَةٌ', urdu: 'سلاد', tr: 'salaṭa', en: 'salad' },
    { ar: 'لَحْمٌ', urdu: 'لحم (گوشت)', tr: 'laḥm', en: 'meat' },
  ],
  bridgeNotes: 'URDU BRIDGE: چائے، قہوہ، شکر and سلاد sound almost the same. لحم is known from Urdu religious vocabulary (لحم حلال); everyday Urdu uses گوشت. CAREFUL: حلیب is not used in Urdu — milk is دودھ.',
  core: ['خُبْزٌ', 'أَرُزٌّ', 'بَيْضٌ', 'دَجَاجٌ', 'سَمَكٌ', 'لَحْمٌ', 'مَاءٌ', 'حَلِيبٌ', 'عَصِيرٌ', 'شَايٌ', 'قَهْوَةٌ'],
  forms,
  vocabNotes: {
    0: 'Collective nouns: دَجَاجٌ (chicken as food), دَجَاجَةٌ (one chicken). Core just learns the food word; Stretch notes the “one” form.',
    1: 'FLEX. Fruit are collective too: تُفَّاحٌ (apples) → تُفَّاحَةٌ (one apple). طَمَاطِمُ and بَطَاطِسُ are plural-looking words.',
    2: 'Drinks go with أَشْرَبُ. قَهْوَةٌ is feminine (ـةٌ) — its adjective will be feminine too: قَهْوَةٌ مُرَّةٌ.',
    3: 'FLEX: ingredients and snacks — they appear in the reading text (the shopping note).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · like, eat, drink (website rules)', title: 'I like … He likes … She likes …', ar: 'أُحِبُّ · يُحِبُّ · تُحِبُّ',
      cols: [{ label: 'I · أَنَا', w: 2.5, size: 24 }, { label: 'He · هُوَ', w: 2.5, size: 24 }, { label: 'She · هِيَ', w: 2.5, size: 24 }, { label: 'We · نَحْنُ', w: 2.5, size: 24 }, { label: 'Meaning', w: 2.33 }],
      rows: [
        { core: true, cells: [{ ar: '{w|أُ}حِبُّ' }, { ar: '{w|يُ}حِبُّ' }, { ar: '{e|تُ}حِبُّ' }, { ar: '{w|نُ}حِبُّ' }, 'like'] },
        { core: true, cells: [{ ar: '{w|آ}كُلُ' }, { ar: '{w|يَ}أْكُلُ' }, { ar: '{e|تَ}أْكُلُ' }, { ar: '{w|نَ}أْكُلُ' }, 'eat'] },
        { core: true, cells: [{ ar: '{w|أَ}شْرَبُ' }, { ar: '{w|يَ}شْرَبُ' }, { ar: '{e|تَ}شْرَبُ' }, { ar: '{w|نَ}شْرَبُ' }, 'drink'] },
        { cells: [{ ar: '{k|لَا} أُحِبُّ' }, { ar: '{k|لَا} يُحِبُّ' }, { ar: '{k|لَا} تُحِبُّ' }, { ar: '{k|لَا} نُحِبُّ' }, 'don’t like'] },
      ],
      foot: 'The food comes straight after the verb: uḥibbu l-khubza (no “to”). Negative: put lā before the verb.',
      notes: `GRAMMAR PART 1 — website rules “Say what you like” (أُحِبُّ + food, no preposition) and “Make the opinion negative” (لَا + أُحِبُّ). The he / she / we columns are the D1 person-prefix skill (AT-A-L01) applied to food verbs — Develop needs them for the survey report.
Website common error: أُحِبُّ إِلَى الخُبْزِ ✗ → أُحِبُّ الخُبْزَ ✓. Note آكُلُ starts with a long ā (آ).
Quick-fire: say a food; students answer with the right verb: خُبْزٌ → آكُلُ الخُبْزَ · مَاءٌ → أَشْرَبُ المَاءَ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · asking and describing (website rules + Topic A agreement)', title: 'Do you like …? What is it like?', ar: 'هَلْ تُحِبُّ؟ · صِفَةٌ',
      cards: [
        { chip: 'ASK A BOY · CORE', color: '1D5FBF', head: 'هَلْ تُحِبُّ …؟', big: 'هَلْ تُحِبُّ السَّمَكَ؟', en: 'Do you (m.) like fish?', clue: 'hal = yes / no question.' },
        { chip: 'ASK A GIRL · DEVELOP', color: 'B83280', head: 'هَلْ تُحِبِّينَ …؟', big: 'هَلْ تُحِبِّينَ السَّلَطَةَ؟', en: 'Do you (f.) like salad?', clue: 'Girl → -īna.' },
        { chip: 'STRETCH', color: '6B4C9A', head: 'm. · f.', big: 'الخُبْزُ طَازَجٌ. القَهْوَةُ مُرَّةٌ.', en: 'The bread is fresh. The coffee is bitter.', clue: 'Feminine food → -a adjective.' },
      ],
      error: { text: 'Website rule: notice noun gender — the adjective must agree.', pairs: [['السَّلَطَةُ صِحِّيَّةٌ.', 'السَّلَطَةُ صِحِّيٌّ.']] },
      notes: `GRAMMAR PART 2 — website rules “Ask another person” (تُحِبُّ to a boy, تُحِبِّينَ to a girl) and “Notice noun gender” (الخُبْزُ طَازَجٌ · القَهْوَةُ مُرَّةٌ · السَّلَطَةُ صِحِّيَّةٌ). The Topic A page lists adjective agreement and plurals as this lesson’s grammar — Stretch students use them in the survey report.
Useful adjectives (teacher list, for Stretch): لَذِيذٌ / لَذِيذَةٌ (delicious), صِحِّيٌّ / صِحِّيَّةٌ (healthy), طَازَجٌ / طَازَجَةٌ (fresh), حُلْوٌ / حُلْوَةٌ (sweet), مُرٌّ / مُرَّةٌ (bitter), سَاخِنٌ / سَاخِنَةٌ (hot), بَارِدٌ / بَارِدَةٌ (cold).`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me build a food profile',
    steps: [
      { head: 'Like', ar: '{w|أُ}حِبُّ الخُبْزَ وَالجُبْنَ.', think: 'Food straight after the verb.' },
      { head: 'Eat / drink', ar: '{w|آ}كُلُ الأَرُزَّ، وَ{w|أَ}شْرَبُ المَاءَ.', think: 'Food → eat. Drink → drink.' },
      { head: 'Don’t like', ar: '{k|لَا} أُحِبُّ القَهْوَةَ لِأَنَّهَا مُرَّ{e|ةٌ}.', think: 'Coffee is feminine → murra.' },
      { head: 'How often', ar: '{k|دَائِمًا} آكُلُ الفَاكِهَةَ فِي المَسَاءِ.', think: 'AT-A-L03 frequency.' },
    ],
    legend: ['w', 'e', 'k'], legendLabels: { w: 'WHO (I)', e: 'FEMININE', k: 'NEGATIVE / FREQUENCY' },
    model: '{w|أُ}حِبُّ الخُبْزَ وَالجُبْنَ، وَ{w|آ}كُلُ الأَرُزَّ كَثِيرًا. {w|أَ}شْرَبُ المَاءَ وَالعَصِيرَ كُلَّ يَوْمٍ. {k|لَا} أُحِبُّ القَهْوَةَ لِأَنَّهَا مُرَّ{e|ةٌ}، وَلٰكِنِّي {k|دَائِمًا} آكُلُ الفَاكِهَةَ فِي المَسَاءِ.',
    modelEn: 'I like bread and cheese, and I eat rice a lot. I drink water and juice every day. I don’t like coffee because it is bitter, but I always eat fruit in the evening.',
    notes: 'I DO (3 min) — website patterns (أُحِبُّ الخُبْزَ وَالجُبْنَ · لَا أُحِبُّ القَهْوَةَ · أَشْرَبُ المَاءَ وَالعَصِيرَ) joined into a profile, with AT-A-L03 frequency added. Think aloud: “food or drink? which verb? masculine or feminine?”',
  },
  game: {
    title: 'What is it? Match the picture',
    pick: [0, 2, 5],
    en: ['This is an apple.', 'This is milk.', 'This is a salad.'],
    icons: [[['fa6', 'FaAppleWhole', 'B83227']], [['fa6', 'FaGlassWater', '1D5FBF'], ['fa6', 'FaCow', '5A6472']], [['fa6', 'FaLeaf', '1E7B4F'], ['fa6', 'FaBowlFood', 'C77700']]],
    labels: ['an apple', 'a glass of milk', 'a bowl of salad'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Ask: why هٰذِهِ for the apple and the salad but هٰذَا for milk? (تُفَّاحَةٌ and سَلَطَةٌ are feminine.) Other cards for homework: هٰذَا خُبْزٌ، هٰذَا أَرُزٌّ، هٰذَا سَمَكٌ.',
  },
  sorterCats: ['Food · طَعَامٌ', 'Drink · شَرَابٌ'],
  sorterNotes: 'Then: say the right verb for each card — آكُلُ or أَشْرَبُ.',
  hints: ['Like + food: is a preposition needed?', 'Which vowel starts “I like”?', '“I eat” starts with which letter?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 4.\nListen for: الخُبْزَ وَالجُبْنَ · القَهْوَةَ · المَاءَ.',
  listenRoutes: 'Core: questions 1, 3 and 4. Develop / Stretch: all 5.',
  gloss: [
    ['اِسْمِي هُدَى.', 'My name is Huda.'],
    ['أُحِبُّ الخُبْزَ وَالجُبْنَ وَالتُّفَّاحَ.', 'I like bread, cheese and apples.'],
    ['فِي الوَجْبَةِ الخَفِيفَةِ آكُلُ المُكَسَّرَاتِ أَوِ البِسْكُوِيتَ.', 'For a snack I eat nuts or biscuits.'],
    ['لَا أُحِبُّ السَّمَكَ، وَلَا أَشْرَبُ القَهْوَةَ.', 'I don’t like fish, and I don’t drink coffee.'],
    ['أَشْرَبُ المَاءَ وَعَصِيرَ البُرْتُقَالِ كُلَّ يَوْمٍ.', 'I drink water and orange juice every day.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'هَلْ تُحِبُّ السَّمَكَ؟' },
      { route: 'develop', ar: 'مَاذَا تَشْرَبُ كُلَّ يَوْمٍ؟' },
      { route: 'develop', ar: 'مَا الطَّعَامُ الَّذِي لَا تُحِبُّهُ؟' },
      { route: 'stretch', ar: 'مَا طَعَامُكَ المُفَضَّلُ؟ / مَا طَعَامُكِ المُفَضَّلُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'نَعَمْ، أُحِبُّ ______ . / لَا، لَا أُحِبُّ ______ .' },
      { route: 'develop', ar: 'أَشْرَبُ ______ وَ ______ كُلَّ يَوْمٍ.' },
      { route: 'develop', ar: 'لَا أُحِبُّ ______ لِأَنَّهُ / لِأَنَّهَا ______ .' },
      { route: 'stretch', ar: 'طَعَامِي المُفَضَّلُ ______ لِأَنَّهُ ______ جِدًّا.' },
    ],
    modelEn: ['Do you (f.) like salad?', 'Yes, I like salad a lot.'],
    notes: 'Website prompts (order changed so Core starts with a yes/no question).',
  },
  write: {
    core: { amount: '4 sentences', task: 'Say what you like, don’t like and drink — with the word bank.', how: 'Two things you like, one thing you don’t like, one thing you drink every day.' },
    develop: { amount: '6 sentences', task: 'Likes and dislikes, then report one partner’s answers.', how: 'Website task: four food words, two drinks, wa (and) and one negative — plus one sentence about a partner (he / she likes …).' },
    stretch: { amount: '8 sentences', task: 'An 8-sentence food profile with adjectives and “one” forms.', how: 'Website Stretch: a food profile with agreeing adjectives, a frequency word and collective / one forms (tuffāḥ / tuffāḥa).' },
  },
  frames: {
    core: [
      { en: 'I like … and …', ar: 'أُحِبُّ ______ وَ ______ .' },
      { en: 'I don’t like …', ar: 'لَا أُحِبُّ ______ .' },
      { en: 'I eat … every day.', ar: 'آكُلُ ______ كُلَّ يَوْمٍ.' },
      { en: 'I drink …', ar: 'أَشْرَبُ ______ .' },
      { en: 'Do you like …?', ar: 'هَلْ تُحِبُّ ______ ؟' },
    ],
    develop: [
      { en: 'My partner (m.) likes …', ar: 'صَدِيقِي يُحِبُّ ______ .' },
      { en: 'My partner (f.) doesn’t like …', ar: 'صَدِيقَتِي لَا تُحِبُّ ______ .' },
      { en: '… because it is delicious.', ar: '______ لِأَنَّهُ لَذِيذٌ / لِأَنَّهَا لَذِيذَةٌ.' },
      { en: 'I always / sometimes eat …', ar: 'دَائِمًا / أَحْيَانًا آكُلُ ______ .' },
      { en: 'I like …, but I don’t like …', ar: 'أُحِبُّ ______ ، وَلٰكِنِّي لَا أُحِبُّ ______ .' },
    ],
    bank: ['خُبْزٌ', 'أَرُزٌّ', 'دَجَاجٌ', 'سَمَكٌ', 'بَيْضٌ', 'جُبْنٌ', 'مَاءٌ', 'حَلِيبٌ', 'عَصِيرٌ', 'شَايٌ', 'قَهْوَةٌ', 'لَذِيذٌ / لَذِيذَةٌ'],
  },
  stretch: [
    ['أُحِبُّ التُّفَّاحَ، وَآكُلُ تُفَّاحَةً كُلَّ يَوْمٍ', 'I like apples, and I eat an apple every day'],
    ['القَهْوَةُ مُرَّةٌ، وَلٰكِنَّ الشَّايَ حُلْوٌ', 'coffee is bitter, but tea is sweet'],
    ['السَّلَطَةُ صِحِّيَّةٌ وَطَازَجَةٌ', 'salad is healthy and fresh'],
    ['فِي الوَجْبَةِ الخَفِيفَةِ آكُلُ …', 'for a snack I eat …'],
    ['لَا أَشْرَبُ القَهْوَةَ أَبَدًا', 'I never drink coffee'],
  ],
  modelEn: 'I like bread and cheese, and I also like apples. I don’t like fish, but I like chicken. I eat rice a lot, and I drink water and juice every day.',
  find: ['two “I like” sentences', 'one negative sentence', 'a sentence with “I eat” or “I drink”', 'a drink'],
  modelNotes: 'Evidence: أُحِبُّ الخُبْزَ وَالجُبْنَ · لَا أُحِبُّ السَّمَكَ · آكُلُ الأَرُزَّ / أَشْرَبُ المَاءَ · وَلٰكِنِّي. Stretch: rewrite one sentence with an adjective (الدَّجَاجُ لَذِيذٌ) and one with a “one” form (آكُلُ تُفَّاحَةً).',
  selfCheck: [
    { route: 'core', text: 'The food comes straight after I like / I eat.' },
    { route: 'core', text: 'I used “lā” before the verb for “don’t”.' },
    { route: 'develop', text: 'I used he likes / she likes for my partner.' },
    { route: 'develop', text: 'Food → I eat; drink → I drink.' },
    { route: 'stretch', text: 'My adjective agrees with a feminine food (-a).' },
  ],
  exit: [0, 1, 4],
  glossary: [
    ['نَشْتَرِي', 'we buy'], ['لِلْعَشَاءِ', 'for dinner'], ['نَحْتَاجُ إِلَى', 'we need'], ['قَلِيلٍ مِنَ', 'a little'], ['أُمِّي', 'my mother'],
    ['أَبِي', 'my father'], ['أَخِي', 'my brother'], ['خُصُوصًا', 'especially'], ['أَحْيَانًا', 'sometimes'], ['أَيْضًا', 'also'],
  ],
  prep: {
    words: [['مَطْعَمٌ', 'restaurant', 'pl. مَطَاعِمُ'], ['نَادِلٌ', 'waiter', 'f. نَادِلَةٌ'], ['قَائِمَةُ الطَّعَامِ', 'the menu', ''], ['الحِسَابُ', 'the bill', ''], ['مِنْ فَضْلِكَ', 'please (to a man)', 'f. مِنْ فَضْلِكِ']],
    questionEn: 'Write how you would ask for water politely in Arabic.',
    questionAr: 'مَاذَا تَطْلُبُ فِي المَطْعَمِ؟',
    homework: {
      core: 'Website F5-L01: the picture game and the vocabulary tab — learn 10 foods and drinks.',
      develop: 'Website writing task: 5–6 sentences about foods and drinks you like and dislike.',
      stretch: 'Write an 8-sentence food profile of a family member, with adjectives and frequency words.',
    },
    wordsSource: 'The five words come from the website F5-L05 vocabulary (the AT-A-L05 lesson engine).',
  },
  remember: 'Remember: 5 café words + one polite request.',
});
const slides = T.wrap('A', 4, 'F5-L01', raw, {
  challenge: {
    steps: [
      'Teacher pairs students (A interviews B, then swap).',
      'Ask three questions from the useful-language panel; note answers in English.',
      'Report back on the mic: he likes … / she doesn’t like …',
      'Class tallies the most popular food in the chat.',
    ],
    routes: {
      core: 'Ask “hal tuḥibbu …?” about 3 foods. Report: “he likes …” or “she likes …”.',
      develop: 'Ask about meals and drinks, record a reason, report with because (li’annahu / li’annahā).',
      stretch: 'Report the results with agreeing adjectives: the salad is fresh (f.), the bread is delicious (m.).',
    },
    phrases: [['هَلْ تُحِبُّ الأَرُزَّ؟', 'do you (m.) like rice?'], ['هَلْ تُحِبِّينَ الأَرُزَّ؟', 'do you (f.) like rice?'], ['مَاذَا تَأْكُلُ فِي الغَدَاءِ؟', 'what do you eat for lunch?'], ['هُوَ يُحِبُّ الدَّجَاجَ', 'he likes chicken'], ['لِأَنَّهُ لَذِيذٌ', 'because it is delicious']],
    notes: 'Meal words for the survey (teacher-added, recycled in AT-A-L06): الفُطُورُ / الإِفْطَارُ (breakfast), الغَدَاءُ (lunch), العَشَاءُ (dinner). Core students may report in English plus the Arabic food word.',
  },
});
module.exports = { meta, slides };
