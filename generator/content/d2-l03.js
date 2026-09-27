'use strict';
/* D2-L03 · Clothes and Accessories — Vocabulary and Shopping — website: Pathways › Development › D2 › D2-L03 (هٰذَا / هٰذِهِ, colour agreement, كَمْ ثَمَنُهُ / ثَمَنُهَا؟, polite requests أُرِيدُ أَنْ أُجَرِّبَ). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D2')({
  n: 3, fileTitle: 'Clothes_and_Shopping', chip: 'Clothes and Shopping',
  title: 'Clothes and Accessories — Vocabulary and Shopping', arabic: 'المَلَابِسُ وَالإِكْسِسْوَارَاتُ — المُفْرَدَاتُ وَالتَّسَوُّقُ',
  focus: 'Name clothes and accessories, choose هٰذَا or هٰذِهِ, make the colour agree (أَزْرَقُ / زَرْقَاءُ), and shop politely: ask for a size, try something on and ask the price.',
  icon: 'FaShirt', iconSet: 'fa6',
});

const itm = (g, pl, dem) => ({ tag: `${g} · pl`, forms: [{ l: 'pl.', ar: pl }, { l: 'this', ar: dem }, { l: g, ar: g === 'm.' ? 'مُذَكَّرٌ' : 'مُؤَنَّثٌ' }] });
const mf = (m, f, pl) => ({ tag: 'm · f · pl', forms: [{ l: 'pl.', ar: pl }, { l: 'f.', ar: f }, { l: 'm.', ar: m }] });
const P = (a, b) => ({ ar: a, sub: b });
const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });

const slides = D.devLesson('D2-L03', {
  support: `• Core: 8 clothes words with هٰذَا / هٰذِهِ + three colours + two shop phrases (كَمْ ثَمَنُهُ؟ · أُرِيدُ أَنْ أُجَرِّبَ …). Develop: colour agreement with feminine items and size problems (ضَيِّقٌ / وَاسِعٌ). Stretch: a full shop role-play and a written shopping trip in the past.
• Decision routine for every item: masculine or feminine? (ـةٌ → feminine) → هٰذَا / هٰذِهِ → colour form → ثَمَنُهُ / ثَمَنُهَا.
• حِجَابٌ, مُحْتَشِمٌ: modest dress is a normal topic here — keep the focus on vocabulary and personal preference, never on judging others.
• Urdu bridge: قمیص، جراب / حجاب، کوٹ (→ coat is مِعْطَفٌ), قیمت (≠ ثَمَنٌ), رنگ (colour is لَوْنٌ).`,
  teach: 'This / this (f.) + colour agreement, then shop phrases.',
  wedo: 'Picture match, accurate or not, fix and listen.',
  next: { nextCode: 'D2-L04', nextTitle: 'Fashion and Identity — Opinions on Style and Dress', nextAr: 'المَوْضَةُ وَالهُوِيَّةُ' },
  doNow: {
    questions: [
      q('What does فُسْتَانٌ mean?', ['a dress', 'a coat', 'a shirt'], 'Prepared at home.'),
      q('What does حِذَاءٌ mean?', ['shoes', 'trousers', 'a belt'], 'Prepared at home.'),
      q('What does يَدْعَمُنِي mean?', ['he supports me', 'I support him', 'she supports us'], 'D2-L02: -nī = me.'),
      q('Choose “She is elegant and calm.”', ['هِيَ أَنِيقَةٌ وَهَادِئَةٌ.', 'هِيَ أَنِيقٌ وَهَادِئٌ.', 'هُوَ أَنِيقَةٌ وَهَادِئَةٌ.'], 'D2-L01: she → -a(tun).'),
      q('Choose “I get on with my brother.”', ['أَتَفَاهَمُ مَعَ أَخِي.', 'أَتَفَاهَمُ أَخِي.', 'يَتَفَاهَمُ مَعَ أَخِي.'], 'D2-L02: with = maʿa.'),
    ],
    keyIdea: { text: 'Masculine item → هٰذَا + masculine colour. Feminine item (ـةٌ) → هٰذِهِ + feminine colour.', ar: '{w|هٰذَا} القَمِيصُ {w|الأَزْرَقُ}  ·  {e|هٰذِهِ} السُّتْرَةُ {e|الزَّرْقَاءُ}' },
    retrieves: 'Questions 1–2 test two of the five clothes words prepared at home. Questions 3–5 retrieve D2-L02 (object endings, مَعَ) and D2-L01 (agreement).',
  },
  routes: {
    core: ['I can name eight clothes and accessories.', 'I can ask “How much is it?” and “Can I try it on?”'],
    develop: ['I can use هٰذَا / هٰذِهِ and make colours agree.', 'I can say something is too tight or too loose.'],
    stretch: ['I can run a complete shop conversation.', 'I can describe a shopping trip in the past and explain my choice.'],
  },
  bridge: [
    { ar: 'قَمِيصٌ', urdu: 'قمیص', tr: 'qamīz', en: 'shirt, tunic' },
    { ar: 'حِجَابٌ', urdu: 'حجاب', tr: 'hijāb', en: 'headscarf' },
    { ar: 'ثَمَنٌ', urdu: 'قیمت', tr: 'qīmat', en: 'price (Arabic qīma = value)' },
    { ar: 'لَوْنٌ', urdu: 'رنگ', tr: 'rang', en: 'colour (meaning only)' },
    { ar: 'مُنَاسِبٌ', urdu: 'مناسب', tr: 'munāsib', en: 'suitable' },
  ],
  bridgeNotes: 'URDU BRIDGE: قمیص (as in shalwar qamīz) → قَمِيصٌ (shirt). حجاب → حِجَابٌ. مناسب → مُنَاسِبٌ (suitable / fits). قیمت is Arabic قِيمَةٌ (value); for “price” Arabic prefers ثَمَنٌ → كَمْ ثَمَنُهُ؟ Colours: Urdu رنگ is Persian — the Arabic is لَوْنٌ.',
  core: ['قَمِيصٌ', 'سِرْوَالٌ', 'تَنُّورَةٌ', 'فُسْتَانٌ', 'مِعْطَفٌ', 'سُتْرَةٌ', 'حِذَاءٌ', 'حَقِيبَةٌ', 'مَقَاسٌ', 'ثَمَنٌ', 'أُرِيدُ أَنْ أُجَرِّبَ', 'كَمْ ثَمَنُهُ / ثَمَنُهَا؟'],
  forms: {
    'قَمِيصٌ': itm('m.', 'قُمْصَانٌ', 'هٰذَا القَمِيصُ'),
    'قَمِيصَةٌ': itm('f.', 'قَمِيصَاتٌ', 'هٰذِهِ القَمِيصَةُ'),
    'سِرْوَالٌ': itm('m.', 'سَرَاوِيلُ', 'هٰذَا السِّرْوَالُ'),
    'تَنُّورَةٌ': itm('f.', 'تَنَانِيرُ', 'هٰذِهِ التَّنُّورَةُ'),
    'فُسْتَانٌ': itm('m.', 'فَسَاتِينُ', 'هٰذَا الفُسْتَانُ'),
    'مِعْطَفٌ': itm('m.', 'مَعَاطِفُ', 'هٰذَا المِعْطَفُ'),
    'سُتْرَةٌ': itm('f.', 'سُتَرٌ', 'هٰذِهِ السُّتْرَةُ'),
    'حِذَاءٌ': itm('m.', 'أَحْذِيَةٌ', 'هٰذَا الحِذَاءُ'),
    'حِجَابٌ': itm('m.', 'أَحْجِبَةٌ', 'هٰذَا الحِجَابُ'),
    'قُبَّعَةٌ': itm('f.', 'قُبَّعَاتٌ', 'هٰذِهِ القُبَّعَةُ'),
    'حِزَامٌ': itm('m.', 'أَحْزِمَةٌ', 'هٰذَا الحِزَامُ'),
    'حَقِيبَةٌ': itm('f.', 'حَقَائِبُ', 'هٰذِهِ الحَقِيبَةُ'),
    'مُنَاسِبٌ / مُنَاسِبَةٌ': mf('مُنَاسِبٌ', 'مُنَاسِبَةٌ', 'مُنَاسِبُونَ'),
    'وَاسِعٌ / وَاسِعَةٌ': mf('وَاسِعٌ', 'وَاسِعَةٌ', 'مَلَابِسُ وَاسِعَةٌ'),
    'ضَيِّقٌ / ضَيِّقَةٌ': mf('ضَيِّقٌ', 'ضَيِّقَةٌ', 'مَلَابِسُ ضَيِّقَةٌ'),
    'أَنِيقٌ / أَنِيقَةٌ': mf('أَنِيقٌ', 'أَنِيقَةٌ', 'أَنِيقُونَ'),
    'عَصْرِيٌّ / عَصْرِيَّةٌ': mf('عَصْرِيٌّ', 'عَصْرِيَّةٌ', 'عَصْرِيُّونَ'),
    'تَقْلِيدِيٌّ / تَقْلِيدِيَّةٌ': mf('تَقْلِيدِيٌّ', 'تَقْلِيدِيَّةٌ', 'تَقْلِيدِيُّونَ'),
    'رَسْمِيٌّ / رَسْمِيَّةٌ': mf('رَسْمِيٌّ', 'رَسْمِيَّةٌ', 'رَسْمِيُّونَ'),
    'مُحْتَشِمٌ / مُحْتَشِمَةٌ': mf('مُحْتَشِمٌ', 'مُحْتَشِمَةٌ', 'مُحْتَشِمُونَ'),
    'مُلَوَّنٌ / مُلَوَّنَةٌ': mf('مُلَوَّنٌ', 'مُلَوَّنَةٌ', 'مَلَابِسُ مُلَوَّنَةٌ'),
    'بَسِيطٌ / بَسِيطَةٌ': mf('بَسِيطٌ', 'بَسِيطَةٌ', 'بُسَطَاءُ'),
  },
  vocabNotes: { 0: 'Each card shows the plural and the demonstrative (this). Words ending in ـةٌ are feminine → هٰذِهِ. Note: فُسْتَانٌ (dress) is MASCULINE → هٰذَا الفُسْتَانُ.', 1: 'Shop language: learn كَمْ ثَمَنُهُ؟ (masc. item) and كَمْ ثَمَنُهَا؟ (fem. item) as a pair. Plurals of THINGS take a feminine singular adjective: أَحْذِيَةٌ وَاسِعَةٌ.', 2: 'Style adjectives (FLEX here — taught fully in D2-L04).' },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · this + colour agreement (website rules)', title: 'This blue shirt · this blue jacket', ar: 'هٰذَا · هٰذِهِ · الأَلْوَانُ',
      cols: [{ label: 'Masculine item', w: 4.3, size: 24 }, { label: 'Feminine item', w: 4.6, size: 24 }, { label: 'Colour', w: 3.43 }],
      rows: [
        { core: true, cells: [{ ar: '{w|هٰذَا} القَمِيصُ {w|الأَزْرَقُ}' }, { ar: '{e|هٰذِهِ} السُّتْرَةُ {e|الزَّرْقَاءُ}' }, 'blue'] },
        { core: true, cells: [{ ar: '{w|هٰذَا} المِعْطَفُ {w|الأَسْوَدُ}' }, { ar: '{e|هٰذِهِ} الحَقِيبَةُ {e|السَّوْدَاءُ}' }, 'black'] },
        { core: true, cells: [{ ar: '{w|هٰذَا} الحِذَاءُ {w|الأَبْيَضُ}' }, { ar: '{e|هٰذِهِ} التَّنُّورَةُ {e|البَيْضَاءُ}' }, 'white'] },
        { cells: [{ ar: '{w|هٰذَا} الفُسْتَانُ {w|الأَحْمَرُ}' }, { ar: '{e|هٰذِهِ} القُبَّعَةُ {e|الحَمْرَاءُ}' }, 'red'] },
        { cells: [{ ar: '{w|هٰذَا} الحِزَامُ {w|البُنِّيُّ}' }, { ar: '{e|هٰذِهِ} الحَقِيبَةُ {e|البُنِّيَّةُ}' }, 'brown (+ -a)'] },
      ],
      foot: 'Main colours change shape for feminine: aḥmar → ḥamrāʾ. Other colours just add -a: bunnī → bunniyya.',
      notes: `GRAMMAR PART 1 — website rules “This item” (the demonstrative agrees with the noun) and “Colour and size agreement” (adjectives follow the noun and agree in gender and definiteness). Colours from the website quiz and picture game.
Website common error: هٰذَا السُّتْرَةُ ✗ → هٰذِهِ السُّتْرَةُ ✓.
Colour pattern (Stretch): أَفْعَلُ → فَعْلَاءُ (أَزْرَقُ / زَرْقَاءُ, أَخْضَرُ / خَضْرَاءُ, أَصْفَرُ / صَفْرَاءُ).
Quick-fire: show an item on camera; students say هٰذَا / هٰذِهِ + the item + its colour.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · polite shopping (website rules)', title: 'In the shop', ar: 'فِي المَتْجَرِ',
      cards: [
        { chip: 'TRY ON · CORE', color: '1D5FBF', head: 'أُرِيدُ أَنْ أُجَرِّبَ', big: 'أُرِيدُ أَنْ أُجَرِّبَ هٰذَا المِعْطَفَ.', en: 'I would like to try on this coat.', clue: 'an + fatḥa (D1-L04).' },
        { chip: 'SIZE · DEVELOP', color: '1E7B4F', head: 'هَلْ لَدَيْكُمْ …؟', big: 'هَلْ لَدَيْكُمْ مَقَاسٌ أَكْبَرُ؟ هٰذِهِ السُّتْرَةُ ضَيِّقَةٌ.', en: 'Do you have a bigger size? This jacket is tight.', clue: 'Tight / loose agree too.' },
        { chip: 'PRICE · CORE', color: 'B83227', head: 'كَمْ ثَمَنُهُ / ثَمَنُهَا؟', big: 'كَمْ ثَمَنُهَا؟ — الحَقِيبَةُ بِأَرْبَعِينَ جُنَيْهًا.', en: 'How much is it? — The bag is forty pounds.', clue: '-hu for m., -hā for f.' },
      ],
      error: { text: 'Website common error: ask the price with the right ending.', pairs: [['الحَقِيبَةُ: كَمْ ثَمَنُهَا؟', 'الحَقِيبَةُ: كَمْ ثَمَنُهُ؟']] },
      notes: `GRAMMAR PART 2 — website rules “Ask price with pronoun” (the suffix refers back to the item) and “Polite request” (أُرِيدُ أَنْ أُجَرِّبَ / هَلْ لَدَيْكُمْ …؟). أَنْ + subjunctive recycles D1-L04.
Prices: the website uses جُنَيْهًا (pound) — students may use جُنَيْهًا إِسْتَرْلِينِيًّا or just the number.`,
    },
  ],
  quick: [0, 1, 2, 3],
  ido: {
    title: 'Watch me buy a jacket',
    steps: [
      { head: 'Ask', ar: 'هَلْ لَدَيْكُمْ {e|هٰذِهِ} السُّتْرَةُ {e|الزَّرْقَاءُ}؟', think: 'Sutra ends in -a → hādhihi.' },
      { head: 'Try on', ar: 'أُرِيدُ أَنْ أُجَرِّبَ{w|هَا}.', think: 'an + fatḥa; -hā = it (f.).' },
      { head: 'Problem', ar: '{e|هِيَ} ضَيِّقَ{e|ةٌ} نَوْعًا مَا؛ هَلْ لَدَيْكُمْ مَقَاسٌ أَكْبَرُ؟', think: 'Tight agrees too.' },
      { head: 'Price', ar: 'كَمْ ثَمَنُ{e|هَا}؟ — خَمْسَةٌ وَثَلَاثُونَ جُنَيْهًا.', think: 'Feminine item → thamanuhā.' },
    ],
    legend: ['e', 'w'], legendLabels: { e: 'FEMININE ITEM', w: 'OBJECT (-HĀ = IT)' },
    model: 'هَلْ لَدَيْكُمْ {e|هٰذِهِ} السُّتْرَةُ {e|الزَّرْقَاءُ}؟ أُرِيدُ أَنْ أُجَرِّبَ{w|هَا}. … {e|هِيَ} ضَيِّقَ{e|ةٌ} نَوْعًا مَا؛ هَلْ لَدَيْكُمْ مَقَاسٌ أَكْبَرُ؟ … الآنَ هِيَ مُنَاسِبَ{e|ةٌ} وَمُرِيحَ{e|ةٌ}. كَمْ ثَمَنُ{e|هَا}؟',
    modelEn: 'Do you have this blue jacket? I would like to try it on. … It is somewhat tight; do you have a bigger size? … Now it fits and is comfortable. How much is it?',
    notes: 'I DO (3 min) — the teacher plays the customer (website listening scene: Sara buys a jacket), thinking aloud about gender at every step. Then repeat with a masculine item (مِعْطَفٌ أَسْوَدُ) and students call out the changes.',
  },
  game: {
    title: 'What are they wearing? Match the picture',
    pick: [0, 1, 5],
    en: ['He is wearing a blue shirt.', 'She is wearing a red dress.', 'This is a brown bag.'],
    icons: [[['fa6', 'FaShirt', '1D5FBF'], ['fa6', 'FaPerson', '5A6472']], [['fa6', 'FaPersonDress', 'B83227'], ['fa6', 'FaStar', 'C77700']], [['fa6', 'FaBagShopping', '8A5A2B'], ['fa6', 'FaHandPointRight', '5A6472']]],
    labels: ['blue shirt', 'red dress', 'brown bag'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). After يَلْبَسُ the item takes -an (accusative): قَمِيصًا أَزْرَقَ, فُسْتَانًا أَحْمَرَ — recognition only. Other cards for homework: سِرْوَالًا أَسْوَدَ, مِعْطَفًا أَخْضَرَ, حِذَاءً رِيَاضِيًّا أَبْيَضَ.',
  },
  patch: {
    patterns: [
      { ar: 'هٰذَا القَمِيصُ جَمِيلٌ.', en: 'This shirt is beautiful.', tip: 'hādhā + masculine item.' },
      { ar: 'القَمِيصُ الأَبْيَضُ', en: 'the white shirt', tip: 'Colour after the noun, with al-.' },
      { ar: 'كَمْ ثَمَنُهُ؟ القَمِيصُ بِثَلَاثِينَ جُنَيْهًا.', en: 'How much is it? The shirt is thirty pounds.', tip: 'thamanuhu for a masculine item.' },
      { ar: 'أُرِيدُ أَنْ أُجَرِّبَ هٰذَا المِعْطَفَ.', en: 'I would like to try on this coat.', tip: 'Polite request: an + fatḥa.' },
    ],
    mistakes: [
      { wrong: 'هٰذَا السُّتْرَةُ', right: 'هٰذِهِ السُّتْرَةُ', why: 'سُتْرَةٌ is feminine.' },
      { wrong: 'القَمِيصُ الزَّرْقَاءُ', right: 'القَمِيصُ الأَزْرَقُ', why: 'A masculine item takes the masculine colour.' },
      { wrong: 'الحَقِيبَةُ: كَمْ ثَمَنُهُ؟', right: 'الحَقِيبَةُ: كَمْ ثَمَنُهَا؟', why: 'حَقِيبَةٌ is feminine → ثَمَنُهَا.' },
    ],
    sorter: {
      title: 'Accurate or not?', instructions: 'Check the demonstrative, the colour and the price question against the item.',
      categories: ['Accurate', 'Inaccurate'],
      items: [
        { label: 'هٰذِهِ السُّتْرَةُ', answer: 0 }, { label: 'القَمِيصُ الأَزْرَقُ', answer: 0 }, { label: 'الحَقِيبَةُ: كَمْ ثَمَنُهَا؟', answer: 0 }, { label: 'أُرِيدُ أَنْ أُجَرِّبَ هٰذَا الحِذَاءَ.', answer: 0 },
        { label: 'هٰذَا السُّتْرَةُ', answer: 1 }, { label: 'القَمِيصُ الزَّرْقَاءُ', answer: 1 }, { label: 'الحَقِيبَةُ: كَمْ ثَمَنُهُ؟', answer: 1 }, { label: 'أُرِيدُ أُجَرِّبُ هٰذَا.', answer: 1 },
      ],
    },
    listening: {
      questions: [
        L('What does Sara want to try on?', ['a blue jacket', 'a black coat', 'a red dress'], 'أُرِيدُ أَنْ أُجَرِّبَ هٰذِهِ السُّتْرَةَ الزَّرْقَاءَ.'),
        L('What was the problem?', ['it was somewhat tight', 'it was too long', 'it was the wrong colour'], 'كَانَتْ ضَيِّقَةً نَوْعًا مَا.'),
        L('What did the shop assistant bring?', ['a bigger size', 'a different colour', 'a cheaper jacket'], 'أَحْضَرَتِ البَائِعَةُ مَقَاسًا أَكْبَرَ.'),
        L('How was the new jacket?', ['suitable and comfortable', 'still tight', 'too big'], 'مُنَاسِبَةً وَمُرِيحَةً.'),
        L('Why was it cheaper?', ['it had a discount', 'it was second-hand', 'it was a small size'], 'عَلَيْهَا تَخْفِيضًا.'),
        L('How much did it cost?', ['35 pounds', '53 pounds', '30 pounds'], 'خَمْسَةٌ وَثَلَاثُونَ جُنَيْهًا.'),
      ],
    },
    reading: {
      questions: [
        L('What kind of text is this?', ['an advert from a new shop', 'a letter from a friend', 'a school timetable'], 'إِعْلَانٌ مِنْ مَتْجَرٍ جَدِيدٍ.'),
        L('What clothes does the shop sell?', ['modern, modest clothes for young people', 'only formal suits', 'only sports clothes'], 'مَلَابِسُ عَصْرِيَّةٌ وَمُحْتَشِمَةٌ لِلشَّبَابِ.'),
        L('What is said about the cotton shirts?', ['they come in different colours', 'they are all white', 'they are very expensive'], 'مُتَوَفِّرَةٌ بِأَلْوَانٍ مُخْتَلِفَةٍ.'),
        L('How are the trousers described?', ['comfortable and practical', 'tight and formal', 'colourful and cheap'], 'مُرِيحَةٌ وَعَمَلِيَّةٌ.'),
        L('What has a special discount until the end of the week?', ['coats and bags', 'shirts and trousers', 'shoes'], 'تَخْفِيضٌ خَاصٌّ عَلَى المَعَاطِفِ وَالحَقَائِبِ.'),
        L('What can customers do within a week?', ['exchange the size', 'return everything for free', 'order online'], 'يُمْكِنُ اسْتِبْدَالُ المَقَاسِ خِلَالَ أُسْبُوعٍ.'),
      ],
    },
  },
  sorterCats: ['Accurate', 'Inaccurate'],
  hints: ['Sutra ends in -a: this (m.) or this (f.)?', 'Shirt is masculine: which colour form?', 'Bag is feminine: which price question?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 6.\nListen for: الزَّرْقَاءَ · ضَيِّقَةً · خَمْسَةٌ وَثَلَاثُونَ.',
  listenRoutes: 'Core: questions 1, 2 and 6. Develop / Stretch: all 6. (Questions are teacher-written: the website questions for this script are generic.)',
  gloss: [
    ['دَخَلَتْ سَارَةُ مَتْجَرَ المَلَابِسِ وَقَالَتْ: أُرِيدُ أَنْ أُجَرِّبَ هٰذِهِ السُّتْرَةَ الزَّرْقَاءَ.', 'Sara went into the clothes shop and said: I would like to try on this blue jacket.'],
    ['سَأَلَتْ عَنِ المَقَاسِ لِأَنَّهَا كَانَتْ ضَيِّقَةً نَوْعًا مَا.', 'She asked about the size because it was somewhat tight.'],
    ['أَحْضَرَتِ البَائِعَةُ مَقَاسًا أَكْبَرَ، وَكَانَتِ السُّتْرَةُ مُنَاسِبَةً وَمُرِيحَةً.', 'The shop assistant brought a bigger size, and the jacket fitted and was comfortable.'],
    ['سَأَلَتْ سَارَةُ: كَمْ ثَمَنُهَا؟', 'Sara asked: How much is it?'],
    ['فَقَالَتِ البَائِعَةُ إِنَّ عَلَيْهَا تَخْفِيضًا وَثَمَنَهَا خَمْسَةٌ وَثَلَاثُونَ جُنَيْهًا.', 'The assistant said it was reduced and its price was thirty-five pounds.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا لَوْنُكَ وَمَقَاسُكَ المُفَضَّلَانِ؟' },
      { route: 'develop', ar: 'مَاذَا تَلْبَسُ فِي مُنَاسَبَةٍ خَاصَّةٍ؟' },
      { route: 'develop', ar: 'صِفْ آخِرَ رِحْلَةٍ إِلَى مَتْجَرِ المَلَابِسِ.' },
      { route: 'stretch', ar: 'هَلْ تُفَضِّلُ الشِّرَاءَ مِنَ المَتْجَرِ أَمْ عَبْرَ الإِنْتَرْنِتِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'لَوْنِي المُفَضَّلُ ______ ، وَمَقَاسِي ______ .' },
      { route: 'develop', ar: 'فِي مُنَاسَبَةٍ خَاصَّةٍ أَلْبَسُ ______ .' },
      { route: 'develop', ar: 'ذَهَبْتُ إِلَى المَتْجَرِ وَجَرَّبْتُ ______ .' },
      { route: 'stretch', ar: 'أُفَضِّلُ الشِّرَاءَ ______ لِأَنَّ ______ .' },
    ],
    modelEn: ['What are you looking for?', 'I am looking for a black coat.'],
    notes: 'Website prompts (order changed for routes). Website model continues: A: هَلْ تُرِيدُ أَنْ تُجَرِّبَهُ؟ (Do you want to try it on?) B: نَعَمْ، وَأُرِيدُ مَقَاسًا أَكْبَرَ. (Yes, and I want a bigger size.) — pairs can extend it into a full shop role-play (customer + assistant).',
  },
  write: {
    core: { amount: '5 sentences', how: 'Describe an outfit: five items with this / this (f.) and a colour each.' },
    develop: { amount: '8 sentences', how: 'A shop conversation: what you are looking for, size, trying on, price.' },
    stretch: { amount: '100–120 words', how: 'Website task: a shopping trip — what you needed, colours, sizes, prices, what you tried, what you bought and why.' },
  },
  frames: {
    core: [
      { en: 'This shirt is …', ar: 'هٰذَا القَمِيصُ ______ .' },
      { en: 'This jacket is …', ar: 'هٰذِهِ السُّتْرَةُ ______ .' },
      { en: 'I am looking for …', ar: 'أَبْحَثُ عَنْ ______ .' },
      { en: 'I would like to try on …', ar: 'أُرِيدُ أَنْ أُجَرِّبَ ______ .' },
      { en: 'How much is it? (m. / f.)', ar: 'كَمْ ثَمَنُهُ؟ / كَمْ ثَمَنُهَا؟' },
    ],
    develop: [
      { en: 'Do you have … in a bigger size?', ar: 'هَلْ لَدَيْكُمْ ______ بِمَقَاسٍ أَكْبَرَ؟' },
      { en: 'It is somewhat tight / loose.', ar: 'هُوَ / هِيَ ضَيِّقٌ / وَاسِعٌ نَوْعًا مَا.' },
      { en: 'Where is the changing room?', ar: 'أَيْنَ غُرْفَةُ القِيَاسِ؟' },
      { en: 'I will buy … because …', ar: 'سَأَشْتَرِي ______ لِأَنَّ ______ .' },
      { en: 'It is suitable and comfortable.', ar: 'هُوَ مُنَاسِبٌ وَمُرِيحٌ. / هِيَ مُنَاسِبَةٌ وَمُرِيحَةٌ.' },
    ],
    bank: ['هٰذَا', 'هٰذِهِ', 'قَمِيصٌ', 'سُتْرَةٌ', 'فُسْتَانٌ', 'حِذَاءٌ', 'حَقِيبَةٌ', 'مَقَاسٌ', 'ضَيِّقٌ / ضَيِّقَةٌ', 'وَاسِعٌ / وَاسِعَةٌ', 'كَمْ ثَمَنُهُ؟', 'تَخْفِيضٌ'],
  },
  stretch: [
    ['كُنْتُ أَبْحَثُ عَنْ مِعْطَفٍ جَدِيدٍ لِلشِّتَاءِ', 'I was looking for a new winter coat'],
    ['وَلٰكِنَّهُ كَانَ ضَيِّقًا', 'but it was tight'],
    ['أَحْضَرَ لِي مِعْطَفًا آخَرَ', 'he brought me another coat'],
    ['كَانَ عَلَيْهِ تَخْفِيضٌ', 'it was reduced'],
    ['اشْتَرَيْتُهُمَا لِأَنَّهُمَا عَمَلِيَّانِ', 'I bought them (two) because they are practical'],
  ],
  modelEn: 'I went to the shop because I was looking for a new winter coat. I saw an elegant black coat, but it was tight. I said to the shop assistant: Do you have this coat in a bigger size? He brought me another coat and it was comfortable and fitted. I asked: How much is it? Its price was sixty pounds, but it was reduced. I also tried on brown shoes and a small bag. In the end I bought the coat and the shoes because they are practical.',
  find: ['a polite question in the shop', 'two colour adjectives', 'a price question', 'the reason for the choice'],
  modelNotes: 'Evidence: هَلْ لَدَيْكُمْ هٰذَا المِعْطَفُ بِمَقَاسٍ أَكْبَرَ؟ · أَسْوَدَ، بُنِّيًّا · كَمْ ثَمَنُهُ؟ · اشْتَرَيْتُ … لِأَنَّهُمَا عَمَلِيَّانِ. Stretch: the model is in the PAST (ذَهَبْتُ، رَأَيْتُ، جَرَّبْتُ، اشْتَرَيْتُ) — a good challenge for confident writers.',
  selfCheck: [
    { route: 'core', text: 'I used this (hādhā) and this (hādhihi) correctly.' },
    { route: 'core', text: 'I asked the price and asked to try something on.' },
    { route: 'develop', text: 'My colours agree with the item.' },
    { route: 'develop', text: 'I described the size (tight / loose / fits).' },
    { route: 'stretch', text: 'I explained what I bought and why.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['إِعْلَانٌ', 'an advert'], ['مَتْجَرٍ جَدِيدٍ', 'a new shop'], ['لِلشَّبَابِ', 'for young people'], ['القُمُصُ القُطْنِيَّةُ', 'the cotton shirts'], ['مُتَوَفِّرَةٌ', 'available'],
    ['السَّرَاوِيلُ', 'the trousers'], ['مُرِيحَةٌ وَعَمَلِيَّةٌ', 'comfortable and practical'], ['تَخْفِيضٌ خَاصٌّ', 'a special discount'], ['تَجْرِبَةُ', 'trying on'], ['اسْتِبْدَالُ المَقَاسِ', 'exchanging the size'],
  ],
  prep: {
    words: [['أَنِيقٌ / أَنِيقَةٌ', 'elegant', 'm. / f.'], ['عَصْرِيٌّ / عَصْرِيَّةٌ', 'modern', 'm. / f.'], ['تَقْلِيدِيٌّ / تَقْلِيدِيَّةٌ', 'traditional', 'm. / f.'], ['رَسْمِيٌّ / رَسْمِيَّةٌ', 'formal', 'm. / f.'], ['مُحْتَشِمٌ / مُحْتَشِمَةٌ', 'modest', 'm. / f.']],
    questionEn: 'What do your clothes say about you? Think of one outfit and two words to describe its style.',
    questionAr: 'مَا أُسْلُوبُكَ فِي اللِّبَاسِ؟',
    homework: {
      core: 'Website D2-L03: the picture game and the vocabulary tab (clothes and accessories).',
      develop: 'Write a shop conversation of 8 lines (customer + assistant).',
      stretch: 'Website writing task: 100–120 words about a shopping trip.',
    },
    wordsSource: 'The five words come from the website D2-L04 vocabulary (style adjectives).',
  },
  remember: 'Remember: feminine item → hādhihi + feminine colour + thamanuhā.',
});

module.exports = { meta, slides };
