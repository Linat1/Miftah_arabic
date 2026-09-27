'use strict';
/* D2-L05 · Comparing People and Clothes — More, Less and Better — website: Pathways › Development › D2 › D2-L05 (أَفْعَلُ + مِنْ, أَكْثَرُ / أَقَلُّ + noun, preference أُفَضِّلُ … عَلَى, superlative الأَفْضَلُ, similarity). */
const D = require('./d-common');
const X = require('./d2-lex');
const { q } = D;

const meta = D.meta('D2')({
  n: 5, fileTitle: 'Comparing_People_and_Clothes', chip: 'Comparing',
  title: 'Comparing People and Clothes — More, Less and Better', arabic: 'المُقَارَنَةُ بَيْنَ النَّاسِ وَالمَلَابِسِ — أَكْثَرُ وَأَقَلُّ وَأَفْضَلُ',
  focus: 'Compare people and clothes: أَفْعَلُ + مِنْ (أَطْوَلُ مِنْ، أَرْخَصُ مِنْ), أَكْثَرُ / أَقَلُّ + a noun (أَكْثَرُ ثِقَةً), preference (أُفَضِّلُ … عَلَى …) and the best (الأَفْضَلُ).',
  icon: 'FaScaleBalanced', iconSet: 'fa6',
});

const cmp = (adj, sup) => ({ tag: 'adj · than · the most', forms: [{ l: 'the …-est', ar: sup }, { l: 'adjective', ar: adj }] });
const P = (a, b) => ({ ar: a, sub: b });
const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });

const slides = D.devLesson('D2-L05', {
  support: `• Core: four comparatives as chunks (أَطْوَلُ مِنْ، أَقْصَرُ مِنْ، أَرْخَصُ مِنْ، أَغْلَى مِنْ) in “A is …-er than B”. Develop: أَكْثَرُ / أَقَلُّ + noun for adjectives with no short comparative (أَكْثَرُ ثِقَةً، أَقَلُّ رَسْمِيَّةً) and preference. Stretch: superlatives, similarity and a fair conclusion (neither is simply “better”).
• Good news for weak students: the comparative does NOT change for feminine — سَلْمَى أَطْوَلُ مِنْ أُخْتِهَا.
• Kind comparisons only: compare clothes, invented people, or qualities positively (“more patient”, not “uglier”).
• Urdu bridge: افضل، اکثر، اقل (اقلیت)، احسن, مقابلہ ≠ مُقَارَنَةٌ.`,
  teach: '…-er than, more / less + noun, prefer … to …, the best.',
  wedo: 'Picture match, accurate or not, fix and listen.',
  next: { nextCode: 'D2-L06', nextTitle: 'Describing Appearance — A Full Physical Portrait', nextAr: 'وَصْفُ المَظْهَرِ' },
  flexGroups: [1, 2],
  doNow: {
    questions: [
      q('What does أَرْخَصُ مِنْ mean?', ['cheaper than', 'more expensive than', 'better than'], 'Prepared at home.'),
      q('What does أَفْضَلُ مِنْ mean?', ['better than', 'less than', 'taller than'], 'Prepared at home.'),
      q('Which adds a contrast?', ['وَلٰكِنَّنِي', 'لِأَنَّنِي', 'فِي رَأْيِي'], 'D2-L04: but.'),
      q('Choose the concession.', ['عَلَى الرَّغْمِ مِنْ أَنَّهُ غَالٍ، فَإِنَّهُ جَيِّدٌ.', 'لِأَنَّهُ غَالٍ فَإِنَّهُ.', 'هُوَ غَالٍ ثُمَّ.'], 'D2-L04: although … (fa-inna) …'),
      q('Choose “this blue shirt”.', ['هٰذَا القَمِيصُ الأَزْرَقُ', 'هٰذِهِ القَمِيصُ الزَّرْقَاءُ', 'هٰذَا القَمِيصُ الزَّرْقَاءُ'], 'D2-L03: masculine item.'),
    ],
    keyIdea: { text: 'Adjective → comparative: ṭawīl → aṭwal min (taller than). Same form for boys, girls and things.', ar: 'طَوِيلٌ ← {k|أَطْوَلُ مِنْ} ← {w|الأَطْوَلُ}' },
    retrieves: 'Questions 1–2 test two of the five comparatives prepared at home. Questions 3–5 retrieve D2-L04 (contrast, concession) and D2-L03 (agreement).',
  },
  routes: {
    core: ['I can compare two things with …-er than.', 'I can say which I prefer.'],
    develop: ['I can use more / less + a noun (more confident).', 'I can give a reason for my preference.'],
    stretch: ['I can use the superlative (the best, the most suitable).', 'I can express similarity and a fair conclusion.'],
  },
  bridge: [
    { ar: 'أَفْضَلُ', urdu: 'افضل', tr: 'afzal', en: 'better, best' },
    { ar: 'أَكْثَرُ', urdu: 'اکثر', tr: 'aksar', en: 'Urdu: often · Arabic: more' },
    { ar: 'أَقَلُّ', urdu: 'اقلیت', tr: 'aqalliyat', en: 'minority → less' },
    { ar: 'أَحْسَنُ', urdu: 'احسن', tr: 'ahsan', en: 'better (as in ahsan)' },
    { ar: 'مُقَارَنَةٌ', urdu: 'مقابلہ', tr: 'muqābla', en: 'Urdu: contest · Arabic: comparison' },
  ],
  bridgeNotes: 'URDU BRIDGE: افضل → أَفْضَلُ (better / the best). CAREFUL: Urdu اکثر = often, Arabic أَكْثَرُ = more. اقلیت (minority) comes from أَقَلُّ (less). احسن (as in “ahsan”) is also an Arabic comparative: أَحْسَنُ = better. مقابلہ (competition) ≠ مُقَارَنَةٌ (comparison).',
  core: ['أَكْثَرُ ... مِنْ', 'أَقَلُّ ... مِنْ', 'أَفْضَلُ مِنْ', 'أَرْخَصُ مِنْ', 'أَغْلَى مِنْ', 'أَطْوَلُ مِنْ', 'أَقْصَرُ مِنْ', 'الأَفْضَلُ'],
  forms: X.formsFor('D2-L05', {
    'أَفْضَلُ مِنْ': cmp('جَيِّدٌ', 'الأَفْضَلُ'), 'أَجْمَلُ مِنْ': cmp('جَمِيلٌ', 'الأَجْمَلُ'), 'أَرْخَصُ مِنْ': cmp('رَخِيصٌ', 'الأَرْخَصُ'),
    'أَغْلَى مِنْ': cmp('غَالٍ', 'الأَغْلَى'), 'أَطْوَلُ مِنْ': cmp('طَوِيلٌ', 'الأَطْوَلُ'), 'أَقْصَرُ مِنْ': cmp('قَصِيرٌ', 'الأَقْصَرُ'),
  }),
  vocabNotes: { 0: 'Each comparative card shows its adjective and its superlative (the …-est). The comparative has ONE form for m. and f.: هُوَ / هِيَ أَطْوَلُ مِنِّي.', 1: 'People and qualities (FLEX) — the D2-L01 adjectives, now for comparing with أَكْثَرُ + noun: أَكْثَرُ صَبْرًا، أَكْثَرُ ثِقَةً، أَكْثَرُ هُدُوءًا.', 2: 'Clothes and evaluation (FLEX) — the D2-L03/L04 style words: أَكْثَرُ أَنَاقَةً، أَقَلُّ رَسْمِيَّةً.' },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · adjective → …-er than → the …-est (website rules)', title: 'Tall · taller than · the tallest', ar: 'أَفْعَلُ التَّفْضِيلِ',
      cols: [{ label: 'Adjective', w: 2.7, size: 26 }, { label: '…-er than', w: 3.0, size: 26 }, { label: 'the …-est', w: 2.8, size: 26 }, { label: 'Meaning', w: 3.83 }],
      rows: [
        { core: true, cells: [{ ar: 'طَوِيلٌ' }, { ar: '{k|أَطْوَلُ مِنْ}' }, { ar: '{w|الأَطْوَلُ}' }, 'tall · taller · the tallest'] },
        { core: true, cells: [{ ar: 'قَصِيرٌ' }, { ar: '{k|أَقْصَرُ مِنْ}' }, { ar: '{w|الأَقْصَرُ}' }, 'short · shorter · the shortest'] },
        { core: true, cells: [{ ar: 'رَخِيصٌ' }, { ar: '{k|أَرْخَصُ مِنْ}' }, { ar: '{w|الأَرْخَصُ}' }, 'cheap · cheaper · the cheapest'] },
        { core: true, cells: [{ ar: 'غَالٍ' }, { ar: '{k|أَغْلَى مِنْ}' }, { ar: '{w|الأَغْلَى}' }, 'expensive · more expensive · the most expensive'] },
        { cells: [{ ar: 'جَيِّدٌ' }, { ar: '{k|أَفْضَلُ مِنْ}' }, { ar: '{w|الأَفْضَلُ}' }, 'good · better · the best'] },
      ],
      foot: 'Pattern a-C-C-a-C: ṭawīl → aṭwal. One form for everyone: Salmā aṭwalu min ukhtihā (Salma is taller than her sister).',
      notes: `GRAMMAR PART 1 — website rules “Basic comparison” (use the comparative form before مِنْ) and “Superlative” (the definite form for the highest degree) and the website table.
Website common error: “Do not place مِنْ before the comparative or force a regular adjective ending onto أَفْعَلُ” — سَارَةُ طَوِيلَةٌ مِنْ أُخْتِهَا ✗ → سَارَةُ أَطْوَلُ مِنْ أُخْتِهَا ✓.
Quick-fire: teacher names two things (القِطَارُ / الحَافِلَةُ); students make a comparison.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · more / less + noun, preference, similarity (website rules) · Develop / Stretch', title: 'More confident · I prefer … to … · alike', ar: 'أَكْثَرُ ثِقَةً · أُفَضِّلُ … عَلَى',
      cards: [
        { chip: 'MORE / LESS + NOUN · DEVELOP', color: '1D5FBF', head: 'أَكْثَرُ / أَقَلُّ + ـًا', big: 'هُوَ أَكْثَرُ ثِقَةً مِنْ أَخِيهِ. هٰذَا الأُسْلُوبُ أَقَلُّ رَسْمِيَّةً.', en: 'He is more confident than his brother. This style is less formal.', clue: 'Noun ends in -an.' },
        { chip: 'PREFERENCE · CORE', color: '1E7B4F', head: 'أُفَضِّلُ … عَلَى …', big: 'أُفَضِّلُ الحِذَاءَ الأَسْوَدَ عَلَى البُنِّيِّ.', en: 'I prefer the black shoes to the brown ones.', clue: 'Prefer A ʿalā B.' },
        { chip: 'SIMILARITY · STRETCH', color: '6B4C9A', head: 'مِثْلُ · مُتَشَابِهَانِ', big: 'هُمَا مُتَشَابِهَانِ فِي الأَنَاقَةِ.', en: 'They (two) are alike in elegance.', clue: 'Not every comparison has a winner.' },
      ],
      error: { text: 'Website common error: “more confident” needs a noun.', pairs: [['هُوَ أَكْثَرُ ثِقَةً.', 'هُوَ أَكْثَرُ وَاثِقٌ.']] },
      notes: `GRAMMAR PART 2 — website rules “More/less with a noun” (when no simple comparative is natural: أَكْثَرُ + noun in -an) and “Preference” (أُفَضِّلُ … عَلَى …). Similarity from website quiz Q8.
Useful nouns: ثِقَةٌ (confidence) · صَبْرٌ (patience) · هُدُوءٌ (calm) · مَرَحٌ (cheerfulness) · أَنَاقَةٌ (elegance) · رَاحَةٌ (comfort) · رَسْمِيَّةٌ (formality).`,
    },
  ],
  quick: [0, 1, 2, 3],
  ido: {
    title: 'Watch me compare two shirts',
    steps: [
      { head: 'Cheaper', ar: 'القَمِيصُ الأَزْرَقُ {k|أَرْخَصُ مِنَ} الأَسْوَدِ.', think: 'Short comparative + min.' },
      { head: 'More + noun', ar: 'وَلٰكِنَّ الأَسْوَدَ {w|أَكْثَرُ أَنَاقَةً}.', think: 'Elegant → more elegance.' },
      { head: 'Preference', ar: '{e|أُفَضِّلُ} الأَزْرَقَ {e|عَلَى} الأَسْوَدِ.', think: 'Prefer A ʿalā B.' },
      { head: 'The best', ar: 'لِأَنَّهُ {k|الأَكْثَرُ مُنَاسَبَةً} لِلْمَدْرَسَةِ.', think: 'The most suitable.' },
    ],
    legend: ['k', 'w', 'e'], legendLabels: { k: '-ER THAN / THE MOST', w: 'MORE + NOUN', e: 'PREFERENCE' },
    model: 'القَمِيصُ الأَزْرَقُ {k|أَرْخَصُ مِنَ} الأَسْوَدِ، وَلٰكِنَّ الأَسْوَدَ {w|أَكْثَرُ أَنَاقَةً}. الأَزْرَقُ أَيْضًا {w|أَكْثَرُ رَاحَةً} لِأَنَّهُ مِنَ القُطْنِ. {e|أُفَضِّلُ} الأَزْرَقَ {e|عَلَى} الأَسْوَدِ لِأَنَّهُ {k|الأَكْثَرُ مُنَاسَبَةً} لِلْمَدْرَسَةِ.',
    modelEn: 'The blue shirt is cheaper than the black one, but the black one is more elegant. The blue one is also more comfortable because it is cotton. I prefer the blue one to the black one because it is the most suitable for school.',
    notes: 'I DO (3 min) — the website listening scene (Hasan compares two shirts) as a think-aloud. Show two real items on camera if possible.',
  },
  game: {
    title: 'Which is …-er? Match the picture',
    pick: [1, 3, 4],
    en: ['The bicycle is cheaper than the car.', 'This shirt is more beautiful than that one.', 'Reading is better for me than games.'],
    icons: [[['fa6', 'FaBicycle', '1E7B4F'], ['fa6', 'FaCarSide', 'B83227']], [['fa6', 'FaShirt', '1D5FBF'], ['fa6', 'FaStar', 'C77700']], [['fa6', 'FaBookOpen', '6B4C9A'], ['fa6', 'FaGamepad', '5A6472']]],
    labels: ['bicycle vs car', 'this shirt vs that one', 'reading vs games'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Ask students to reverse each sentence: السَّيَّارَةُ أَغْلَى مِنَ الدَّرَّاجَةِ. Other cards: القِطَارُ أَسْرَعُ مِنَ الحَافِلَةِ · المَدِينَةُ أَكْثَرُ اِزْدِحَامًا مِنَ القَرْيَةِ · الحَدِيقَةُ أَهْدَأُ …',
  },
  patch: {
    patterns: [
      { ar: 'هٰذَا القَمِيصُ أَرْخَصُ مِنْ ذٰلِكَ.', en: 'This shirt is cheaper than that one.', tip: 'Comparative + min.' },
      { ar: 'هُوَ أَكْثَرُ ثِقَةً مِنْ أَخِيهِ.', en: 'He is more confident than his brother.', tip: 'More + noun.' },
      { ar: 'أُفَضِّلُ الحِذَاءَ الأَسْوَدَ عَلَى البُنِّيِّ.', en: 'I prefer the black shoes to the brown ones.', tip: 'Preference.' },
      { ar: 'هٰذَا هُوَ الخِيَارُ الأَفْضَلُ.', en: 'This is the best choice.', tip: 'Superlative.' },
    ],
    mistakes: [
      { wrong: 'هٰذَا المِعْطَفُ غَالٍ مِنْ ذٰلِكَ.', right: 'هٰذَا المِعْطَفُ أَغْلَى مِنْ ذٰلِكَ.', why: 'Use the comparative form before مِنْ.' },
      { wrong: 'سَارَةُ طَوِيلَةٌ مِنْ أُخْتِهَا.', right: 'سَارَةُ أَطْوَلُ مِنْ أُخْتِهَا.', why: 'The comparative has one form, even for a girl.' },
      { wrong: 'هُوَ أَكْثَرُ وَاثِقٌ مِنْ أَخِيهِ.', right: 'هُوَ أَكْثَرُ ثِقَةً مِنْ أَخِيهِ.', why: 'أَكْثَرُ + a noun ending in -an.' },
    ],
    sorter: {
      title: 'Accurate comparison?', instructions: 'Decide whether each comparison is accurate.',
      categories: ['Accurate', 'Inaccurate'],
      items: [
        { label: 'هٰذَا أَرْخَصُ مِنْ ذٰلِكَ.', answer: 0 }, { label: 'هِيَ أَكْثَرُ ثِقَةً مِنْهُ.', answer: 0 }, { label: 'أُفَضِّلُ الأَزْرَقَ عَلَى الأَسْوَدِ.', answer: 0 }, { label: 'هٰذَا الخِيَارُ الأَفْضَلُ.', answer: 0 },
        { label: 'هٰذَا غَالٍ مِنْ ذٰلِكَ.', answer: 1 }, { label: 'هِيَ طَوِيلَةٌ مِنْ أُخْتِهَا.', answer: 1 }, { label: 'هُوَ أَكْثَرُ وَاثِقٌ.', answer: 1 }, { label: 'مِنْ أَطْوَلُ أَخِي.', answer: 1 },
      ],
    },
    listening: {
      questions: [
        L('What is Hasan comparing?', ['two shirts', 'two jackets', 'two friends'], 'يُقَارِنُ حَسَنٌ بَيْنَ قَمِيصَيْنِ.'),
        L('Which shirt is cheaper?', ['the blue one', 'the black one', 'they cost the same'], 'القَمِيصُ الأَزْرَقُ أَرْخَصُ مِنَ الأَسْوَدِ.'),
        L('Which is more elegant?', ['the black one', 'the blue one', 'neither'], 'الأَسْوَدَ أَكْثَرُ أَنَاقَةً.'),
        L('Why is the blue shirt more comfortable?', ['it is made of cotton', 'it is bigger', 'it is new'], 'لِأَنَّهُ مَصْنُوعٌ مِنَ القُطْنِ.'),
        L('Which shirt does he choose?', ['the blue one', 'the black one', 'neither'], 'يَخْتَارُ حَسَنٌ القَمِيصَ الأَزْرَقَ.'),
        L('Why?', ['it is the most suitable for everyday use', 'it is the most elegant', 'his friend has one'], 'الأَكْثَرُ مُنَاسَبَةً لِلاِسْتِعْمَالِ اليَوْمِيِّ.'),
      ],
    },
    reading: {
      questions: [
        L('Whom does the writer compare?', ['two sisters', 'two friends', 'two brothers'], 'تُقَارِنُ كَاتِبَةٌ بَيْنَ أُخْتَيْنِ.'),
        L('Who is taller?', ['Layla', 'Maryam', 'they are the same'], 'لَيْلَى أَطْوَلُ مِنْ مَرْيَمَ.'),
        L('Who is more confident when speaking?', ['Maryam', 'Layla', 'neither'], 'مَرْيَمَ أَكْثَرُ ثِقَةً عِنْدَ التَّحَدُّثِ.'),
        L('How is Layla described?', ['calmer and more patient', 'more cheerful and sociable', 'more elegant'], 'لَيْلَى أَهْدَأُ وَأَكْثَرُ صَبْرًا.'),
        L('Whose style is less formal?', ['Layla’s', 'Maryam’s', 'both'], 'أُسْلُوبُ لَيْلَى أَقَلُّ رَسْمِيَّةً.'),
        L('What does the writer conclude?', ['each sister has different strengths', 'Layla is better', 'Maryam is better'], 'كُلَّ وَاحِدَةٍ لَهَا نِقَاطُ قُوَّةٍ مُخْتَلِفَةٌ.'),
      ],
    },
  },
  sorterCats: ['Accurate', 'Inaccurate'],
  hints: ['Expensive → which comparative?', 'For a girl, does aṭwal change?', 'More + adjective or + noun?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 5.\nListen for: أَرْخَصُ · أَكْثَرُ أَنَاقَةً · يَخْتَارُ.',
  listenRoutes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 6. (Questions are teacher-written: the website questions for this script are generic.)',
  gloss: [
    ['يُقَارِنُ حَسَنٌ بَيْنَ قَمِيصَيْنِ.', 'Hasan is comparing two shirts.'],
    ['القَمِيصُ الأَزْرَقُ أَرْخَصُ مِنَ الأَسْوَدِ، وَلٰكِنَّ الأَسْوَدَ أَكْثَرُ أَنَاقَةً.', 'The blue shirt is cheaper than the black one, but the black one is more elegant.'],
    ['الأَزْرَقُ أَيْضًا أَكْثَرُ رَاحَةً لِأَنَّهُ مَصْنُوعٌ مِنَ القُطْنِ.', 'The blue one is also more comfortable because it is made of cotton.'],
    ['فِي النِّهَايَةِ يَخْتَارُ حَسَنٌ القَمِيصَ الأَزْرَقَ', 'In the end Hasan chooses the blue shirt'],
    ['لِأَنَّهُ الأَكْثَرُ مُنَاسَبَةً لِلاِسْتِعْمَالِ اليَوْمِيِّ.', 'because it is the most suitable for everyday use.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'قَارِنْ بَيْنَ نَوْعَيْنِ مِنَ المَلَابِسِ.' },
      { route: 'develop', ar: 'قَارِنْ بَيْنَ شَخْصَيْنِ تَعْرِفُهُمَا.' },
      { route: 'develop', ar: 'مَا الخِيَارُ الأَفْضَلُ لِلْمَدْرَسَةِ؟' },
      { route: 'stretch', ar: 'هَلِ السِّعْرُ الأَهَمُّ عِنْدَ الشِّرَاءِ؟' },
    ],
    stems: [
      { route: 'core', ar: '______ أَرْخَصُ / أَغْلَى مِنْ ______ .' },
      { route: 'develop', ar: '______ أَكْثَرُ ثِقَةً / صَبْرًا مِنْ ______ .' },
      { route: 'develop', ar: 'أُفَضِّلُ ______ عَلَى ______ لِأَنَّهُ ______ .' },
      { route: 'stretch', ar: 'السِّعْرُ مُهِمٌّ ، وَلٰكِنَّ ______ أَهَمُّ .' },
    ],
    modelEn: ['Which of the two shirts is better?', 'The blue one is cheaper, but the black one is more elegant.'],
    notes: 'Website prompts (order changed for routes). Website model continues: A: أَيَّهُمَا تُفَضِّلُ؟ (Which do you prefer?) B: أُفَضِّلُ الأَزْرَقَ لِأَنَّهُ أَكْثَرُ رَاحَةً. (I prefer the blue one because it is more comfortable.)',
  },
  write: {
    core: { amount: '5 sentences', how: 'Compare two items of clothing: price, length, colour and which you prefer.' },
    develop: { amount: '8 sentences', how: 'Compare two people with more / less + noun, and give your preference with a reason.' },
    stretch: { amount: '100–120 words', how: 'Website task: two people or two clothing choices — five comparisons, one similarity, one preference and reasons.' },
  },
  frames: {
    core: [
      { en: '… is cheaper than …', ar: '______ أَرْخَصُ مِنْ ______ .' },
      { en: '… is more expensive than …', ar: '______ أَغْلَى مِنْ ______ .' },
      { en: '… is longer / taller than …', ar: '______ أَطْوَلُ مِنْ ______ .' },
      { en: 'I prefer … to …', ar: 'أُفَضِّلُ ______ عَلَى ______ .' },
      { en: 'This is the best.', ar: 'هٰذَا هُوَ الأَفْضَلُ.' },
    ],
    develop: [
      { en: 'He is more confident than …', ar: 'هُوَ أَكْثَرُ ثِقَةً مِنْ ______ .' },
      { en: 'She is calmer and more patient.', ar: 'هِيَ أَهْدَأُ وَأَكْثَرُ صَبْرًا.' },
      { en: 'This style is less formal.', ar: 'هٰذَا الأُسْلُوبُ أَقَلُّ رَسْمِيَّةً.' },
      { en: 'They are alike in …', ar: 'هُمَا مُتَشَابِهَانِ فِي ______ .' },
      { en: '… is the most suitable for …', ar: '______ الأَكْثَرُ مُنَاسَبَةً لِـ ______ .' },
    ],
    bank: ['أَطْوَلُ', 'أَقْصَرُ', 'أَرْخَصُ', 'أَغْلَى', 'أَجْمَلُ', 'أَفْضَلُ', 'أَكْثَرُ ثِقَةً', 'أَكْثَرُ صَبْرًا', 'أَقَلُّ رَسْمِيَّةً', 'مِنْ', 'أُفَضِّلُ … عَلَى', 'الأَفْضَلُ'],
  },
  stretch: [
    ['سَأُقَارِنُ بَيْنَ …', 'I will compare …'],
    ['أَكْثَرُ ثِقَةً عِنْدَ التَّحَدُّثِ', 'more confident when speaking'],
    ['هُمَا مُتَشَابِهَانِ فِي الكَرَمِ', 'they are alike in generosity'],
    ['لَا يُمْكِنُ القَوْلُ إِنَّ أَحَدَهُمَا أَفْضَلُ', 'you cannot say that one of them is better'],
    ['لِكُلٍّ مِنْهُمَا صِفَاتٌ مُمَيَّزَةٌ', 'each of them has special qualities'],
  ],
  modelEn: 'I will compare two friends of mine, Omar and Yusuf. Omar is taller than Yusuf, but Yusuf is more confident when speaking. Omar is calmer and more patient, whereas Yusuf is more cheerful. Omar’s style is less formal, and he prefers practical clothes. As for Yusuf, he chooses more elegant clothes. They are alike in generosity and helpfulness. In my opinion, you cannot say that one of them is better than the other, because each of them has special qualities.',
  find: ['a short comparative + مِنْ', 'أَكْثَرُ / أَقَلُّ + noun', 'a similarity', 'the fair conclusion'],
  modelNotes: 'Evidence: أَطْوَلُ مِنْ يُوسُفَ · أَكْثَرُ ثِقَةً، أَكْثَرُ صَبْرًا، أَكْثَرُ مَرَحًا، أَقَلُّ رَسْمِيَّةً · هُمَا مُتَشَابِهَانِ فِي الكَرَمِ · لَا يُمْكِنُ القَوْلُ إِنَّ أَحَدَهُمَا أَفْضَلُ.',
  selfCheck: [
    { route: 'core', text: 'I used …-er than (min) correctly.' },
    { route: 'core', text: 'I said what I prefer.' },
    { route: 'develop', text: 'I used more / less + a noun (-an).' },
    { route: 'develop', text: 'I gave a reason for my preference.' },
    { route: 'stretch', text: 'I used a superlative or a similarity.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['تُقَارِنُ', 'compares (f.)'], ['كَاتِبَةٌ', 'a (female) writer'], ['أُخْتَيْنِ', 'two sisters'], ['عِنْدَ التَّحَدُّثِ', 'when speaking'], ['أَهْدَأُ', 'calmer'],
    ['أَكْثَرُ مَرَحًا', 'more cheerful'], ['اجْتِمَاعِيَّةً', 'sociable (-ness)'], ['أَقَلُّ رَسْمِيَّةً', 'less formal'], ['تَرَى أَنَّ', 'she thinks that'], ['نِقَاطُ قُوَّةٍ', 'strengths'],
  ],
  prep: {
    words: [['طَوِيلُ / طَوِيلَةُ القَامَةِ', 'tall (m. / f.)', ''], ['قَصِيرُ / قَصِيرَةُ القَامَةِ', 'short (m. / f.)', ''], ['شَعْرٌ مُجَعَّدٌ', 'curly hair', 'straight: مُسْتَقِيمٌ'], ['عَيْنَانِ بُنِّيَّتَانِ', 'brown eyes', 'one eye: عَيْنٌ'], ['يَرْتَدِي / تَرْتَدِي نَظَّارَةً', 'he / she wears glasses', '']],
    questionEn: 'Think of a famous person or a character from a book. How would you describe their appearance?',
    questionAr: 'كَيْفَ شَكْلُهُ؟ كَيْفَ شَكْلُهَا؟',
    homework: {
      core: 'Website D2-L05: the picture game and the comparatives on the vocabulary tab.',
      develop: 'Write 8 comparisons between two people or two outfits.',
      stretch: 'Website writing task: 100–120 words comparing two people or two clothing choices.',
    },
    wordsSource: 'The five words come from the website D2-L06 vocabulary (height, hair and eyes).',
  },
  remember: 'Remember: aṭwalu min — one form for everyone; more + noun ends in -an.',
});

module.exports = { meta, slides };
