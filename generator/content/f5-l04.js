'use strict';
/* F5-L04 · Giving Reasons: Taste and Health — website: Pathways › Foundation › F5 › F5-L04 (لِأَنَّهُ / لِأَنَّهَا, taste and health adjectives, m/f agreement chain, فِي رَأْيِي … وَلَكِنْ). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F5')({
  n: 4, fileTitle: 'Giving_Reasons_Taste_and_Health', chip: 'Taste and Health',
  title: 'Giving Reasons: Taste and Health', arabic: 'إِبْدَاءُ الأَسْبَابِ وَوَصْفُ المَذَاقِ',
  focus: 'Justify food opinions with لِأَنَّهُ / لِأَنَّهَا and make taste and health adjectives agree with masculine and feminine food nouns.',
  icon: 'FaPepperHot', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('F5-L04', {
  support: `• Core: six reason sentences choosing the masculine or feminine chain: أُحِبُّ الخُبْزَ لِأَنَّهُ طَازَجٌ · أُحِبُّ السَّلَطَةَ لِأَنَّهَا طَازَجَةٌ.
• Develop: justify four food opinions without a frame, two adjectives per reason (لِأَنَّهُ لَذِيذٌ وَخَفِيفٌ).
• Stretch: a balanced café review (taste, health, value) with فِي رَأْيِي … وَلَكِنْ … — the website reading text is the model.
• The whole lesson rests on ONE question: is the food masculine or feminine? Then the pronoun AND the adjective follow.
• Website: “‘Healthy’ and ‘unhealthy’ describe nutritional patterns, not a person’s worth.” Keep the discussion free of judgement about anyone’s diet or body.`,
  teach: 'Taste and health adjectives (m / f), then the agreement chain: noun → لِأَنَّهُ / لِأَنَّهَا → adjective.',
  wedo: 'Picture match, sort masculine or feminine, fix the chains and listen for the reasons.',
  next: { nextCode: 'F5-L05', nextTitle: 'Ordering Food Politely', nextAr: 'طَلَبُ الطَّعَامِ بِأَدَبٍ' },
  doNow: {
    questions: [
      q('What does مَالِحٌ mean?', ['salty', 'sweet', 'spicy'], 'Prepared at home (F5-L03).'),
      q('What does صِحِّيٌّ mean?', ['healthy', 'delicious', 'fresh'], 'Prepared at home (F5-L03).'),
      q('Complete: أُفَضِّلُ السَّمَكَ ____ اللَّحْمِ.', ['أَكْثَرَ مِنَ', 'لِأَنَّ', 'فِي'], 'F5-L03: the whole comparison chunk.'),
      q('Choose “She prefers juice.”', ['هِيَ تُفَضِّلُ العَصِيرَ.', 'هِيَ يُفَضِّلُ العَصِيرَ.', 'هِيَ أُفَضِّلُ العَصِيرَ.'], 'F5-L03: she → tu-.'),
      q('Which noun is feminine?', ['القَهْوَةُ', 'الخُبْزُ', 'العَصِيرُ'], 'F5-L01: ة usually marks a feminine noun.'),
    ],
    keyIdea: { text: 'The FOOD decides everything: its gender chooses the pronoun AND the adjective.', ar: 'أُحِبُّ السَّلَطَةَ لِأَنَّ{e|هَا} صِحِّيَّ{e|ةٌ}' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F5-L03. Questions 3–5 retrieve F5-L03 (comparison, she prefers) and F5-L01 (noun gender).',
  },
  routes: {
    core: ['I can give a reason with لِأَنَّهُ or لِأَنَّهَا.', 'I can use four taste words.'],
    develop: ['I can make two adjectives agree in one reason.', 'I can repair an agreement error.'],
    stretch: ['I can write a balanced review with وَلَكِنْ.', 'I can judge taste, health and value.'],
  },
  bridge: [
    { ar: 'لَذِيذٌ', urdu: 'لذیذ', tr: 'lazīz', en: 'delicious' },
    { ar: 'مُفِيدٌ', urdu: 'مفید', tr: 'mufīd', en: 'beneficial' },
    { ar: 'ضَارٌّ', urdu: 'مضر', tr: 'muzir', en: 'harmful' },
    { ar: 'صِحِّيٌّ', urdu: 'صحت', tr: 'sehat', en: 'health → healthy' },
    { ar: 'طَازَجٌ', urdu: 'تازہ', tr: 'tāza', en: 'fresh' },
  ],
  bridgeNotes: 'URDU BRIDGE: لذیذ and مفید are identical. مضر (harmful — مضرِ صحت “harmful to health”) shares the root of ضَارٌّ. صحت → صِحِّيٌّ (healthy). تازہ (Persian) was borrowed into Arabic as طَازَجٌ — the same word travelling in the other direction!',
  core: ['لَذِيذٌ / لَذِيذَةٌ', 'حُلْوٌ / حُلْوَةٌ', 'مَالِحٌ / مَالِحَةٌ', 'مُرٌّ / مُرَّةٌ', 'حَارٌّ / حَارَّةٌ', 'طَازَجٌ / طَازَجَةٌ', 'صِحِّيٌّ / صِحِّيَّةٌ', 'مُفِيدٌ / مُفِيدَةٌ', 'لِأَنَّهُ', 'لِأَنَّهَا', 'فِي رَأْيِي', 'وَلٰكِنْ'],
  vocabNotes: {
    0: 'Every card shows masculine / feminine. Say both aloud and clap on the ة. Plural (Stretch): food plurals take the FEMININE singular adjective — الفَوَاكِهُ لَذِيذَةٌ، الخَضْرَوَاتُ طَازَجَةٌ.',
    1: 'غَيْرُ صِحِّيٍّ = “not healthy” — gentler than ضَارٌّ (harmful). مُغَذٍّ / مُغَذِّيَةٌ (nutritious) is a Stretch word.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · the agreement chain (website rules 1 and 2)', title: 'Noun → because it → adjective', ar: 'لِأَنَّهُ · لِأَنَّهَا',
      cols: [{ label: 'Food', w: 2.4, size: 24 }, { label: 'Gender', w: 1.6 }, { label: 'Reason sentence', w: 5.6, size: 24 }, { label: 'English', w: 2.73 }],
      rows: [
        { core: true, cells: [{ ar: 'الخُبْزُ' }, 'm.', P('أُحِبُّ الخُبْزَ لِأَنَّ{w|هُ} طَازَجٌ.', ''), 'because it is fresh'] },
        { core: true, cells: [{ ar: 'السَّلَطَةُ' }, 'f.', P('أُحِبُّ السَّلَطَةَ لِأَنَّ{e|هَا} صِحِّيَّ{e|ةٌ}.', ''), 'because it is healthy'] },
        { core: true, cells: [{ ar: 'الحَسَاءُ' }, 'm.', P('أُحِبُّ الحَسَاءَ لِأَنَّ{w|هُ} لَذِيذٌ وَخَفِيفٌ.', ''), 'delicious and light'] },
        { core: true, cells: [{ ar: 'القَهْوَةُ' }, 'f.', P('لَا أُحِبُّ القَهْوَةَ لِأَنَّ{e|هَا} مُرَّ{e|ةٌ}.', ''), 'because it is bitter'] },
        { cells: [{ ar: 'السُّكَّرُ' }, 'm.', P('لَا آكُلُ السُّكَّرَ كَثِيرًا لِأَنَّ{w|هُ} ضَارٌّ.', ''), 'because it is harmful'] },
        { cells: [{ ar: 'الفَاكِهَةُ' }, 'f.', P('أُحِبُّ الفَاكِهَةَ لِأَنَّ{e|هَا} حُلْوَ{e|ةٌ} وَمُفِيدَ{e|ةٌ}.', ''), 'sweet and beneficial'] },
      ],
      ltr: true,
      foot: 'Step 1: is the food m. or f.? Step 2: li-annahu or li-annahā. Step 3: the adjective matches (add ة for f.).',
      notes: `GRAMMAR PART 1 — website rules “Give a reason for a masculine noun” (لِأَنَّهُ + masculine adjective) and “… for a feminine noun” (لِأَنَّهَا + feminine adjective).
Website overview: “a complete agreement chain: the reason pronoun and the adjective both agree with the food noun being described.”
Website teaching note: “First identify whether the noun is masculine or feminine; then select both the correct pronoun in the reason and the matching adjective form.”
Blue = masculine chain, pink = feminine chain. Core students copy rows 1–4.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · agreement follows the noun (website rules 3 and 4)', title: 'Two reasons, one opinion', ar: 'المُطَابَقَةُ مَعَ الاِسْمِ',
      cards: [
        { chip: 'TWO REASONS · m.', color: '1D5FBF', head: 'لِأَنَّهُ … وَ …', big: 'أُفَضِّلُ السَّمَكَ لِأَنَّهُ لَذِيذٌ وَصِحِّيٌّ.', en: 'I prefer fish because it is delicious and healthy.', clue: 'Both adjectives masculine.' },
        { chip: 'NOT THE SPEAKER!', color: 'C0386B', head: 'مَرْيَمُ: الخُبْزُ …', big: 'تَقُولُ مَرْيَمُ: الخُبْزُ طَازَجٌ.', en: 'Maryam says: the bread is fresh.', clue: 'A girl speaks — the bread is still m.' },
        { chip: 'BALANCED OPINION', color: '1E7B4F', head: 'فِي رَأْيِي … وَلَكِنْ …', big: 'فِي رَأْيِي، الفَاكِهَةُ مُغَذِّيَةٌ، وَلَكِنَّ الكَعْكَ حُلْوٌ جِدًّا.', en: 'In my opinion, fruit is nutritious, but cake is very sweet.', clue: 'Opinion + contrast.' },
      ],
      error: { text: 'Website common error: bread is masculine, so the adjective has no ة.', pairs: [['الخُبْزُ طَازَجٌ.', 'الخُبْزُ طَازَجَةٌ.']] },
      notes: `GRAMMAR PART 2 — website rules “Describe taste accurately” (the adjective changes with the noun’s gender) and “Join two reasons” (one reason sentence, two agreeing adjectives).
Website common error: “Agreement follows the noun, not the speaker” — the most frequent slip is a girl writing الخُبْزُ طَازَجَةٌ about herself.
Pattern 4 (website): فِي رَأْيِي، الفَاكِهَةُ مُغَذِّيَةٌ، وَلَكِنَّ الكَعْكَ حُلْوٌ جِدًّا — use contrast to make a balanced opinion.`,
    },
  ],
  quick: [0, 1, 2, 4],
  rest: [3, 5, 7],
  ido: {
    title: 'Watch me write a mini food review',
    steps: [
      { head: '1 · Opinion (m.)', ar: 'فِي رَأْيِي، الحَسَاءُ لَذِيذٌ لِأَنَّ{w|هُ} دَافِئٌ وَخَفِيفٌ.', think: 'Soup = m. → -hu, no ة.' },
      { head: '2 · Like (f.)', ar: 'أُحِبُّ السَّلَطَةَ لِأَنَّ{e|هَا} طَازَجَ{e|ةٌ} وَصِحِّيَّ{e|ةٌ}.', think: 'Salad = f. → -hā + ة.' },
      { head: '3 · Dislike (f.)', ar: 'لَا أُحِبُّ القَهْوَةَ لِأَنَّ{e|هَا} مُرَّ{e|ةٌ}.', think: 'Coffee = f.' },
      { head: '4 · But (m.)', ar: '{k|وَلَكِنِّي} أُحِبُّ عَصِيرَ اللَّيْمُونِ لِأَنَّ{w|هُ} مُنْعِشٌ.', think: 'Contrast · juice = m.' },
    ],
    legend: ['w', 'e', 'k'], legendLabels: { w: 'MASCULINE', e: 'FEMININE', k: 'CONTRAST' },
    model: 'فِي رَأْيِي، الحَسَاءُ لَذِيذٌ لِأَنَّ{w|هُ} دَافِئٌ وَخَفِيفٌ. أُحِبُّ السَّلَطَةَ لِأَنَّ{e|هَا} طَازَجَ{e|ةٌ} وَصِحِّيَّ{e|ةٌ}. لَا أُحِبُّ القَهْوَةَ لِأَنَّ{e|هَا} مُرَّ{e|ةٌ}، {k|وَلَكِنِّي} أُحِبُّ عَصِيرَ اللَّيْمُونِ لِأَنَّ{w|هُ} مُنْعِشٌ.',
    modelEn: 'In my opinion, the soup is delicious because it is warm and light. I like salad because it is fresh and healthy. I don’t like coffee because it is bitter, but I like lemon juice because it is refreshing.',
    notes: 'I DO (3 min) — the website writing model built step by step. Before each sentence ask: “m. or f.?” — the class answers first, then I write.',
  },
  game: {
    title: 'Reasons: match the picture',
    pick: [0, 1, 5],
    en: ['I like salad because it is healthy.', 'I like reading because it is useful.', 'I don’t eat chips a lot because they are unhealthy.'],
    icons: [[['fa6', 'FaLeaf', '1E7B4F'], ['fa6', 'FaHeart', 'C0392B']], [['fa6', 'FaBookOpen', '6B4C9A'], ['fa6', 'FaCircleCheck', '1E7B4F']], [['fa6', 'FaBan', '6B6B6B'], ['fa6', 'FaBurger', 'C77700']]],
    labels: ['salad · healthy', 'reading · useful', 'chips · not healthy'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). All three sentences use لِأَنَّهَا — ask why (السَّلَطَةُ، القِرَاءَةُ، البَطَاطَا are all feminine). Stretch: rewrite item 3 about bread (لِأَنَّهُ …).',
  },
  sorterNotes: 'After sorting, students give one reason sentence for two of the foods (one from each column).',
  hints: ['Is salad m. or f.?', 'Coffee is feminine: which ending?', 'Is bread m. or f.?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: لِأَنَّهَا / لِأَنَّهُ + the adjective.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 4, then say which foods are masculine.',
  gloss: [
    ['أُحِبُّ السَّلَطَةَ لِأَنَّهَا طَازَجَةٌ وَصِحِّيَّةٌ.', 'I like salad because it is fresh and healthy.'],
    ['أُفَضِّلُ الحَسَاءَ لِأَنَّهُ دَافِئٌ وَخَفِيفٌ.', 'I prefer soup because it is warm and light.'],
    ['لَا أُحِبُّ القَهْوَةَ لِأَنَّهَا مُرَّةٌ.', 'I don’t like coffee because it is bitter.'],
    ['أُحِبُّ التَّمْرَ لِأَنَّهُ حُلْوٌ وَمُغَذٍّ.', 'I like dates because they are sweet and nutritious.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'لِمَاذَا تُحِبُّ هٰذَا الطَّعَامَ؟' },
      { route: 'develop', ar: 'هَلْ هٰذِهِ الوَجْبَةُ صِحِّيَّةٌ؟ لِمَاذَا؟' },
      { route: 'develop', ar: 'كَيْفَ مَذَاقُ القَهْوَةِ / العَصِيرِ؟' },
      { route: 'stretch', ar: 'أَيُّهُمَا أَخَفُّ: الحَسَاءُ أَمِ البِيتْزَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'أُحِبُّ ______ لِأَنَّهُ / لِأَنَّهَا ______ .' },
      { route: 'develop', ar: 'نَعَمْ / لَا، لِأَنَّهَا ______ وَ ______ .' },
      { route: 'develop', ar: 'القَهْوَةُ مُرَّةٌ · العَصِيرُ حُلْوٌ …' },
      { route: 'stretch', ar: 'فِي رَأْيِي، ______ أَخَفُّ لِأَنَّ ______ .' },
    ],
    modelEn: ['Why do you (f.) prefer salad?', 'Because it is fresh and healthy.'],
    notes: 'Website “Food critic challenge” — all four prompts are the website’s. Show a picture of a meal for prompts 1–2. Website model: لِمَاذَا تُفَضِّلِينَ السَّلَطَةَ؟ — لِأَنَّهَا طَازَجَةٌ وَصِحِّيَّةٌ. — وَهَلْ تُحِبِّينَ القَهْوَةَ؟ — لَا، لِأَنَّهَا مُرَّةٌ.',
  },
  write: {
    core: { amount: '3 sentences', how: 'Three foods, one reason each: choose li-annahu or li-annahā from the table.' },
    develop: { amount: '4–5 sentences', how: 'Website task: review three foods or drinks with one reason each, one positive and one negative.' },
    stretch: { amount: '6–8 sentences', how: 'A balanced café review: taste, health and value, with in my opinion … but …' },
  },
  frames: {
    core: [
      { en: 'I like … because it (m.) is …', ar: 'أُحِبُّ ______ لِأَنَّهُ ______ .' },
      { en: 'I like … because it (f.) is …', ar: 'أُحِبُّ ______ لِأَنَّهَا ______ .' },
      { en: 'I don’t like coffee because it is bitter.', ar: 'لَا أُحِبُّ القَهْوَةَ لِأَنَّهَا مُرَّةٌ.' },
      { en: 'The bread is fresh.', ar: 'الخُبْزُ طَازَجٌ.' },
      { en: 'The salad is healthy.', ar: 'السَّلَطَةُ صِحِّيَّةٌ.' },
    ],
    develop: [
      { en: 'In my opinion, … is delicious.', ar: 'فِي رَأْيِي، ______ لَذِيذٌ / لَذِيذَةٌ.' },
      { en: '… because it is … and …', ar: 'لِأَنَّهُ ______ وَ ______ .' },
      { en: '… but I like …', ar: 'وَلَكِنِّي أُحِبُّ ______ .' },
      { en: 'The juice is very sweet.', ar: 'العَصِيرُ حُلْوٌ جِدًّا.' },
      { en: 'I don’t eat … a lot because it is not healthy.', ar: 'لَا آكُلُ ______ كَثِيرًا لِأَنَّهُ غَيْرُ صِحِّيٍّ.' },
    ],
    bank: ['لِأَنَّهُ', 'لِأَنَّهَا', 'لَذِيذٌ', 'لَذِيذَةٌ', 'حُلْوٌ', 'حُلْوَةٌ', 'مَالِحٌ', 'مُرَّةٌ', 'طَازَجٌ', 'صِحِّيَّةٌ', 'فِي رَأْيِي', 'وَلَكِنْ'],
  },
  stretch: [
    ['زُرْتُ مَقْهًى صَغِيرًا', 'I visited a small café'],
    ['أَكَلْتُ حَسَاءَ العَدَسِ', 'I ate lentil soup'],
    ['كَانَ العَصِيرُ حُلْوًا جِدًّا', 'the juice was very sweet'],
    ['بَارِدًا وَمُنْعِشًا', 'cold and refreshing'],
    ['الوَجْبَةُ جَيِّدَةٌ وَمُتَوَازِنَةٌ', 'the meal is good and balanced'],
  ],
  modelEn: 'In my opinion, the soup is delicious because it is warm and light. I like salad because it is fresh and healthy. I don’t like coffee because it is bitter, but I like lemon juice because it is refreshing.',
  find: ['in my opinion', 'a masculine reason', 'a feminine reason', 'but'],
  modelNotes: 'Evidence: فِي رَأْيِي · لِأَنَّهُ دَافِئٌ وَخَفِيفٌ · لِأَنَّهَا طَازَجَةٌ وَصِحِّيَّةٌ · وَلَكِنِّي.',
  selfCheck: [
    { route: 'core', text: 'Every opinion has a reason.' },
    { route: 'core', text: 'I checked: is the food m. or f.?' },
    { route: 'develop', text: 'Pronoun and adjective BOTH agree.' },
    { route: 'develop', text: 'One positive and one negative judgement.' },
    { route: 'stretch', text: 'I used in my opinion … but … to balance.' },
  ],
  exit: [1, 4, 5],
  glossary: [
    ['زُرْتُ', 'I visited'], ['مَقْهًى', 'a café'], ['أَكَلْتُ', 'I ate'], ['حَسَاءَ العَدَسِ', 'lentil soup'], ['أَحْبَبْتُهُ', 'I liked it'],
    ['أَخَذَتْ أُخْتِي', 'my sister took'], ['كَانَ … حُلْوًا', 'was … sweet'], ['بَارِدًا', 'cold'], ['مُنْعِشًا', 'refreshing'], ['مُتَوَازِنَةٌ', 'balanced'],
  ],
  prep: {
    words: [['أُرِيدُ', 'I want', 'she: تُرِيدُ'], ['مِنْ فَضْلِكَ / مِنْ فَضْلِكِ', 'please (m. / f.)', '—'], ['قَائِمَةُ الطَّعَامِ', 'the menu', 'pl. قَوَائِمُ'], ['نَادِلٌ', 'a waiter', 'f. نَادِلَةٌ · pl. نُدُلٌ'], ['الحِسَابُ', 'the bill', '—']],
    questionEn: 'You are in a café. How would you ask for water politely?',
    questionAr: 'أُرِيدُ … مِنْ فَضْلِكَ',
    homework: {
      core: 'Website F5-L04: the vocabulary tab and the “Masculine or feminine reason?” sorter.',
      develop: 'Website writing task: review three foods or drinks with one reason each.',
      stretch: 'Write a balanced café review (taste, health, value) in 6–8 sentences.',
    },
    wordsSource: 'The five words come from the website F5-L05 lesson (ordering food politely).',
  },
  remember: 'Remember: food m. → لِأَنَّهُ + no ة · food f. → لِأَنَّهَا + ة.',
});

module.exports = { meta, slides };
