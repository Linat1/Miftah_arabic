'use strict';
/* F5-L01 · Food and Drinks — website: Pathways › Foundation › F5 › F5-L01 (food and drink nouns, أُحِبُّ / لَا أُحِبُّ, آكُلُ / أَشْرَبُ, هَلْ تُحِبُّ / تُحِبِّينَ, noun gender). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F5')({
  n: 1, fileTitle: 'Food_and_Drinks', chip: 'Food and Drinks',
  title: 'Food and Drinks', arabic: 'الطَّعَامُ وَالشَّرَابُ',
  focus: 'Name a broad range of foods and drinks, sort them, and say what you like and do not like with أُحِبُّ / لَا أُحِبُّ, آكُلُ and أَشْرَبُ.',
  icon: 'FaUtensils', iconSet: 'fa6',
});

const one = (s, en) => ({ tag: 'food · one', forms: [{ l: 'food', ar: s[0] }, { l: `one ${en}`, ar: s[1] }] });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('F5-L01', {
  support: `• Core: learn the 12 CORE words (6 staples, 6 fruit and vegetables) and the drinks on the grammar slide; say one like and one dislike with أُحِبُّ / لَا أُحِبُّ.
• Develop: ask and answer (هَلْ تُحِبُّ / تُحِبِّينَ …؟) and report a classmate (هُوَ يُحِبُّ … / هِيَ تُحِبُّ …).
• Stretch: collective vs one item (تُفَّاحٌ / تُفَّاحَةٌ) and an 8-sentence food profile with وَلَكِنْ.
• Two verbs: آكُلُ for food, أَشْرَبُ for drinks — the website’s common slip is آكُلُ الحَلِيبَ.
• Urdu bridge is very strong here: چائے، قہوہ، شکر، نمک، زیتون … students already know many of these words.
• Be sensitive to diets (halal, vegetarian, allergies): students may always choose other foods or invent a “food character”.`,
  teach: 'Food and drink words in three groups, then like / don’t like, eat / drink.',
  wedo: 'Picture match, food or drink sorter, fix the mistakes and listen to Huda.',
  next: { nextCode: 'F5-L02', nextTitle: 'Meals and Eating Routines', nextAr: 'وَجَبَاتُ اليَوْمِ وَعَادَاتُ الأَكْلِ' },
  doNow: {
    questions: [
      q('What does خُبْزٌ mean?', ['bread', 'rice', 'water'], 'Prepared at home (F4-L12).'),
      q('What does دَجَاجٌ mean?', ['chicken', 'apples', 'water'], 'Prepared at home (F4-L12).'),
      q('Complete: أُحِبُّ العَرَبِيَّةَ ____ مُمْتِعَةٌ.', ['لِأَنَّهَا', 'لِأَنَّهُ', 'ثُمَّ'], 'F4: a feminine subject → li-annahā.'),
      q('Which sentence says “I do not like history”?', ['لَا أُحِبُّ التَّارِيخَ.', 'أُحِبُّ التَّارِيخَ.', 'هَلْ تُحِبُّ التَّارِيخَ؟'], 'F4-L04: lā directly before the verb.'),
      q('What does أُفَضِّلُ mean?', ['I prefer', 'I study', 'I drink'], 'F4-L04: preferences.'),
    ],
    keyIdea: { text: 'The same opinion verbs from F4 now work with food: I like / I do not like.', ar: 'أُحِبُّ الخُبْزَ · {e|لَا} أُحِبُّ السَّمَكَ' },
    retrieves: 'Questions 1–2 test two of the five food words prepared at home at the end of F4-L12. Questions 3–5 retrieve F4 opinion language (reason agreement, negative opinion, prefer).',
  },
  routes: {
    core: ['I can name twelve foods and four drinks.', 'I can say one like and one dislike.'],
    develop: ['I can ask a boy or a girl what they like.', 'I can report what a classmate likes.'],
    stretch: ['I can explain تُفَّاحٌ / تُفَّاحَةٌ.', 'I can write an 8-sentence food profile.'],
  },
  bridge: [
    { ar: 'شَايٌ', urdu: 'چائے', tr: 'chāy', en: 'tea' },
    { ar: 'قَهْوَةٌ', urdu: 'قہوہ', tr: 'qahwa', en: 'coffee (Urdu: green tea)' },
    { ar: 'سُكَّرٌ', urdu: 'شکر', tr: 'shakar', en: 'sugar' },
    { ar: 'مِلْحٌ', urdu: 'نمک', tr: 'namak', en: 'salt — a false friend' },
    { ar: 'تَمْرٌ', urdu: 'تمر ہندی', tr: 'tamar-hindī', en: 'dates (Urdu: tamarind “Indian date”)' },
  ],
  bridgeNotes: 'URDU BRIDGE: چائے ↔ شَايٌ (same word, different sound). قہوہ in Urdu is green tea — in Arabic قَهْوَةٌ is coffee. شکر / سُكَّرٌ (and English “sugar”) share one root. Warn: Urdu نمک is Persian — the Arabic is مِلْحٌ (compare ملیح “salty, attractive”). تمر ہندی (tamarind) literally means “Indian date” — from Arabic تَمْرٌ.',
  core: ['خُبْزٌ', 'أَرُزٌّ', 'بَيْضٌ', 'جُبْنٌ', 'دَجَاجٌ', 'سَمَكٌ', 'تُفَّاحٌ', 'مَوْزٌ', 'بُرْتُقَالٌ', 'طَمَاطِمُ', 'بَطَاطِسُ', 'سَلَطَةٌ', 'مَاءٌ', 'حَلِيبٌ', 'عَصِيرٌ', 'شَايٌ'],
  forms: {
    'بَيْضٌ': one(['بَيْضٌ', 'بَيْضَةٌ'], 'egg'),
    'تُفَّاحٌ': one(['تُفَّاحٌ', 'تُفَّاحَةٌ'], 'apple'),
    'مَوْزٌ': one(['مَوْزٌ', 'مَوْزَةٌ'], 'banana'),
    'بُرْتُقَالٌ': one(['بُرْتُقَالٌ', 'بُرْتُقَالَةٌ'], 'orange'),
    'تَمْرٌ': one(['تَمْرٌ', 'تَمْرَةٌ'], 'date'),
    'سَمَكٌ': one(['سَمَكٌ', 'سَمَكَةٌ'], 'fish'),
  },
  skipGroups: [3],
  flexGroups: [2],
  vocabNotes: {
    0: 'COLLECTIVE NOUNS (website teaching note): بَيْضٌ / سَمَكٌ = the food in general; add ة for ONE item (بَيْضَةٌ، سَمَكَةٌ). Core students only need the first form.',
    1: 'Same pattern: تُفَّاحٌ → تُفَّاحَةٌ (one apple), مَوْزٌ → مَوْزَةٌ. طَمَاطِمُ and بَطَاطِسُ are borrowed words (tomato, potato) — students love spotting them.',
    2: 'FLEX: drinks are also on the grammar slide. Group 4 (ingredients, snacks and seafood) is on the website vocabulary tab for homework — it appears again in the reading text.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · like and don’t like (website rules 1, 2 and 4)', title: 'I like · I don’t like · do you like?', ar: 'أُحِبُّ · لَا أُحِبُّ · هَلْ تُحِبُّ؟',
      cols: [{ label: 'Who', w: 2.0, size: 24 }, { label: 'Like', w: 3.6, size: 26 }, { label: 'Don’t like', w: 3.8, size: 26 }, { label: 'Meaning', w: 2.93 }],
      rows: [
        { core: true, cells: [{ ar: 'أَنَا' }, P('{w|أُ}حِبُّ الخُبْزَ', 'I like bread'), P('{e|لَا} {w|أُ}حِبُّ السَّمَكَ', 'I don’t like fish'), 'I'] },
        { core: true, cells: [{ ar: 'أَنْتَ' }, P('هَلْ {w|تُ}حِبُّ الجُبْنَ؟', 'do you (m.) like cheese?'), P('{e|لَا} {w|تُ}حِبُّ الشَّايَ', 'you (m.) don’t like tea'), 'you (m.)'] },
        { cells: [{ ar: 'أَنْتِ' }, P('هَلْ {w|تُ}حِبِّ{w|ينَ} السَّلَطَةَ؟', 'do you (f.) like salad?'), P('{e|لَا} {w|تُ}حِبِّ{w|ينَ} القَهْوَةَ', 'you (f.) don’t like coffee'), 'you (f.)'] },
        { cells: [{ ar: 'هُوَ' }, P('{w|يُ}حِبُّ الدَّجَاجَ', 'he likes chicken'), P('{e|لَا} {w|يُ}حِبُّ الخَضْرَوَاتِ', 'he doesn’t like vegetables'), 'he'] },
        { cells: [{ ar: 'هِيَ' }, P('{w|تُ}حِبُّ التُّفَّاحَ', 'she likes apples'), P('{e|لَا} {w|تُ}حِبُّ الحَلِيبَ', 'she doesn’t like milk'), 'she'] },
        { cells: [{ ar: 'نَحْنُ' }, P('{w|نُ}حِبُّ الأَرُزَّ', 'we like rice'), P('{e|لَا} {w|نُ}حِبُّ البَصَلَ', 'we don’t like onions'), 'we'] },
      ],
      foot: 'The food comes straight after the verb — no “to”, no “of”. Lā goes directly before the verb.',
      notes: `GRAMMAR PART 1 — website rules “Say what you like” (أُحِبُّ + food), “Make the opinion negative” (لَا + أُحِبُّ) and “Ask another person” (تُحِبُّ to a boy, تُحِبِّينَ to a girl).
Website common error: أُحِبُّ إِلَى الخُبْزِ ✗ → أُحِبُّ الخُبْزَ ✓.
Teacher script: “Blue = who. Pink = not.” Core students need rows 1 and 2 only; Develop add the girl form and he / she for reporting a classmate.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · eat or drink? and noun gender (website rule 3)', title: 'Eat, drink — and he or she?', ar: 'آكُلُ · أَشْرَبُ · المُذَكَّرُ وَالمُؤَنَّثُ',
      cards: [
        { chip: 'FOOD · I EAT', color: '1D5FBF', head: 'آكُلُ', big: 'آكُلُ الأَرُزَّ وَالدَّجَاجَ.', en: 'I eat rice and chicken.', clue: 'ā-ku-lu: long ā, written آ.' },
        { chip: 'DRINKS · I DRINK', color: '1E7B4F', head: 'أَشْرَبُ', big: 'أَشْرَبُ المَاءَ وَالعَصِيرَ.', en: 'I drink water and juice.', clue: 'Never with bread or rice!' },
        { chip: 'GENDER · Ta marbūṭa', color: 'C0386B', head: 'قَهْوَةٌ · سَلَطَةٌ', big: 'القَهْوَةُ مُرَّةٌ، وَالخُبْزُ طَازَجٌ.', en: 'The coffee is bitter, and the bread is fresh.', clue: 'Words ending in ة are usually feminine.' },
      ],
      error: { text: 'Website quiz: milk is a drink, so it takes ashrabu.', pairs: [['أَشْرَبُ الحَلِيبَ.', 'آكُلُ الحَلِيبَ.']] },
      notes: `GRAMMAR PART 2 — the verbs آكُلُ / أَشْرَبُ (website patterns and mistakes) and website rule “Notice noun gender”: many food words are masculine (خُبْزٌ), some feminine (قَهْوَةٌ، سَلَطَةٌ). Learn the gender now — adjectives in F5-L04 will agree with it.
Website mistake: أَكُلُ الخُبْزَ ✗ → آكُلُ الخُبْزَ ✓ (the first-person form begins with a long ā).
Quick-fire: teacher says a food or drink; students say آكُلُ or أَشْرَبُ. Soup (حَسَاءٌ) is a good debate: Arabic usually says أَشْرَبُ الحَسَاءَ!`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6],
  ido: {
    title: 'Watch me build my food sentences',
    steps: [
      { head: '1 · Like', ar: '{w|أُحِبُّ} الخُبْزَ وَالجُبْنَ.', think: 'Verb + food. No preposition.' },
      { head: '2 · Add', ar: 'وَ{w|أُحِبُّ} التُّفَّاحَ أَيْضًا.', think: 'وَ joins, أَيْضًا = also.' },
      { head: '3 · Don’t like', ar: '{e|لَا} أُحِبُّ السَّمَكَ، وَلَكِنِّي أُحِبُّ الدَّجَاجَ.', think: 'Lā before the verb; but I …' },
      { head: '4 · Drink', ar: '{k|أَشْرَبُ} المَاءَ وَالعَصِيرَ كُلَّ يَوْمٍ.', think: 'Drinks → ashrabu.' },
    ],
    legend: ['w', 'e', 'k'], legendLabels: { w: 'LIKE', e: 'NOT', k: 'DRINK' },
    model: '{w|أُحِبُّ} الخُبْزَ وَالجُبْنَ، وَ{w|أُحِبُّ} التُّفَّاحَ أَيْضًا. {e|لَا} أُحِبُّ السَّمَكَ، وَلَكِنِّي أُحِبُّ الدَّجَاجَ. آكُلُ الأَرُزَّ كَثِيرًا، وَ{k|أَشْرَبُ} المَاءَ وَالعَصِيرَ كُلَّ يَوْمٍ.',
    modelEn: 'I like bread and cheese, and I like apples too. I don’t like fish, but I like chicken. I eat rice a lot, and I drink water and juice every day.',
    notes: 'I DO (3 min) — the website writing model built step by step with a think-aloud. Students copy it and swap TWO foods for their own.',
  },
  game: {
    title: 'Food pictures: match the sentence',
    pick: [0, 2, 5],
    en: ['This is an apple.', 'This is milk.', 'This is a salad.'],
    icons: [[['fa6', 'FaAppleWhole', 'C0392B']], [['fa6', 'FaBottleWater', '1D5FBF'], ['fa6', 'FaCow', '5C4033']], [['fa6', 'FaLeaf', '1E7B4F'], ['fa6', 'FaBowlFood', 'C77700']]],
    labels: ['apple', 'milk', 'salad'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Point out هٰذِهِ with the feminine words (تُفَّاحَةٌ، سَلَطَةٌ) and هٰذَا with the masculine (حَلِيبٌ) — a preview of noun gender. Other website items: خُبْزٌ، أَرُزٌّ، سَمَكٌ.',
  },
  sorterNotes: 'Ask “آكُلُ or أَشْرَبُ?” for each item as it is sorted — the sorter doubles as verb practice.',
  hints: ['Does أُحِبُّ need a preposition?', 'Which vowel starts “I like”?', 'How is “I eat” spelt?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: أُحِبُّ · لَا · أَشْرَبُ.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5.',
  gloss: [
    ['اِسْمِي هُدَى. أُحِبُّ الخُبْزَ وَالجُبْنَ وَالتُّفَّاحَ.', 'My name is Huda. I like bread, cheese and apples.'],
    ['فِي الوَجْبَةِ الخَفِيفَةِ آكُلُ المُكَسَّرَاتِ أَوِ البِسْكُوِيتَ.', 'For a snack I eat nuts or biscuits.'],
    ['لَا أُحِبُّ السَّمَكَ، وَلَا أَشْرَبُ القَهْوَةَ.', 'I don’t like fish, and I don’t drink coffee.'],
    ['أَشْرَبُ المَاءَ وَعَصِيرَ البُرْتُقَالِ كُلَّ يَوْمٍ.', 'I drink water and orange juice every day.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا طَعَامُكَ المُفَضَّلُ؟ / مَا طَعَامُكِ المُفَضَّلُ؟' },
      { route: 'core', ar: 'هَلْ تُحِبُّ السَّمَكَ؟' },
      { route: 'develop', ar: 'مَاذَا تَشْرَبُ كُلَّ يَوْمٍ؟' },
      { route: 'stretch', ar: 'مَا الطَّعَامُ الَّذِي لَا تُحِبُّهُ؟ وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'طَعَامِي المُفَضَّلُ هُوَ ______ .' },
      { route: 'core', ar: 'نَعَمْ، أُحِبُّ … / لَا، لَا أُحِبُّ …' },
      { route: 'develop', ar: 'أَشْرَبُ ______ وَ ______ كُلَّ يَوْمٍ.' },
      { route: 'stretch', ar: 'لَا أُحِبُّ ______ ، وَلَكِنِّي أُحِبُّ ______ .' },
    ],
    modelEn: ['Do you (f.) like salad?', 'Yes, I like salad a lot.'],
    notes: 'Website food survey — all four prompts are the website’s (Stretch adds “and why?”). Website model: هَلْ تُحِبِّينَ السَّلَطَةَ؟ — نَعَمْ، أُحِبُّ السَّلَطَةَ كَثِيرًا. — وَمَاذَا تَشْرَبِينَ؟ — أَشْرَبُ المَاءَ وَالعَصِيرَ. Develop: after the survey, report one classmate: هُوَ يُحِبُّ … / هِيَ تُحِبُّ …',
  },
  diff: { stretch: 'Add one-item forms (tuffāḥa = one apple) and produce an 8-sentence food profile.' },
  write: {
    core: { amount: '4 sentences', how: 'Two likes, one dislike, one drink. Use the Core frames and the word bank.' },
    develop: { amount: '5–6 sentences', how: 'Website task: four foods, two drinks, وَ and one negative sentence.' },
    stretch: { amount: '8 sentences', how: 'A food profile with وَلَكِنْ, one / many (تُفَّاحَةٌ) and a family member’s likes.' },
  },
  frames: {
    core: [
      { en: 'I like … and …', ar: 'أُحِبُّ ______ وَ ______ .' },
      { en: 'I don’t like …', ar: 'لَا أُحِبُّ ______ .' },
      { en: 'I eat … a lot.', ar: 'آكُلُ ______ كَثِيرًا.' },
      { en: 'I drink … every day.', ar: 'أَشْرَبُ ______ كُلَّ يَوْمٍ.' },
      { en: 'My favourite food is …', ar: 'طَعَامِي المُفَضَّلُ هُوَ ______ .' },
    ],
    develop: [
      { en: 'I don’t like fish, but I like chicken.', ar: 'لَا أُحِبُّ السَّمَكَ، وَلَكِنِّي أُحِبُّ الدَّجَاجَ.' },
      { en: 'I like apples too.', ar: 'أُحِبُّ التُّفَّاحَ أَيْضًا.' },
      { en: 'My brother likes …', ar: 'أَخِي يُحِبُّ ______ .' },
      { en: 'My sister doesn’t like …', ar: 'أُخْتِي لَا تُحِبُّ ______ .' },
      { en: 'I don’t drink coffee.', ar: 'لَا أَشْرَبُ القَهْوَةَ.' },
    ],
    bank: ['خُبْزٌ', 'أَرُزٌّ', 'دَجَاجٌ', 'سَمَكٌ', 'جُبْنٌ', 'تُفَّاحٌ', 'مَوْزٌ', 'سَلَطَةٌ', 'مَاءٌ', 'حَلِيبٌ', 'عَصِيرٌ', 'شَايٌ'],
  },
  stretch: [
    ['آكُلُ تُفَّاحَةً كُلَّ صَبَاحٍ', 'I eat an apple every morning'],
    ['خُصُوصًا المَوْزَ وَالعِنَبَ', 'especially bananas and grapes'],
    ['أُحِبُّ الفَاكِهَةَ أَكْثَرَ مِنَ الحَلْوَى', 'I like fruit more than sweets'],
    ['أُمِّي تُحِبُّ السَّلَطَةَ، وَأَبِي يُحِبُّ الحَسَاءَ', 'my mother likes salad, and my father likes soup'],
    ['لَا آكُلُ ... وَلَا أَشْرَبُ ...', 'I neither eat … nor drink …'],
  ],
  modelEn: 'I like bread and cheese, and I like apples too. I don’t like fish, but I like chicken. I eat rice a lot, and I drink water and juice every day.',
  find: ['a like', 'a dislike', 'a drink', 'but'],
  modelNotes: 'Evidence: أُحِبُّ الخُبْزَ · لَا أُحِبُّ السَّمَكَ · أَشْرَبُ المَاءَ · وَلَكِنِّي. The website model has 3 long sentences (≈ 6 ideas) — Develop students split theirs into 5–6 sentences.',
  selfCheck: [
    { route: 'core', text: 'I used أُحِبُّ and لَا أُحِبُّ.' },
    { route: 'core', text: 'Food with آكُلُ, drinks with أَشْرَبُ.' },
    { route: 'develop', text: 'No preposition after أُحِبُّ.' },
    { route: 'develop', text: 'I joined ideas with وَ or وَلَكِنْ.' },
    { route: 'stretch', text: 'I used one item: تُفَّاحَةٌ، مَوْزَةٌ …' },
  ],
  exit: [0, 4, 6],
  glossary: [
    ['نَشْتَرِي', 'we buy'], ['لِلْعَشَاءِ', 'for dinner'], ['نَحْتَاجُ إِلَى', 'we need'], ['زَيْتٍ · مِلْحٍ', 'oil · salt'], ['قَلِيلٍ مِنَ السُّكَّرِ', 'a little sugar'],
    ['الخَسِّ · البَصَلِ', 'lettuce · onions'], ['الحَسَاءَ', 'soup'], ['وَلَكِنَّهُ', 'but he'], ['خُصُوصًا', 'especially'], ['الرُّوبِيَانَ', 'prawns'],
  ],
  prep: {
    words: [['فَطُورٌ', 'breakfast', '—'], ['غَدَاءٌ', 'lunch', '—'], ['عَشَاءٌ', 'dinner', '—'], ['وَجْبَةٌ', 'a meal', 'pl. وَجَبَاتٌ'], ['عَادَةً', 'usually', '—']],
    questionEn: 'What do you usually eat for breakfast? Write two food words in Arabic.',
    questionAr: 'فِي الفَطُورِ آكُلُ …',
    homework: {
      core: 'Website F5-L01: the vocabulary tab and the “Food or drink?” sorter.',
      develop: 'Survey two people at home and write what they like and don’t like.',
      stretch: 'Website writing task: an 8-sentence food profile with “but” and one-item forms (tuffāḥa).',
    },
    wordsSource: 'The five words come from the website F5-L02 vocabulary (meals and routines).',
  },
  remember: 'Remember: أُحِبُّ + food · لَا before the verb · آكُلُ food · أَشْرَبُ drinks.',
});

module.exports = { meta, slides };
