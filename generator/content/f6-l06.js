'use strict';
/* F6-L06 · Shopping in Town: Prices and Comparisons — website: Pathways › Foundation › F6 › F6-L06 (shops and goods, كَمْ ثَمَنُهُ / ثَمَنُهَا؟, أَرْخَصُ / أَغْلَى مِنْ, أُرِيدُ أَنْ أَشْتَرِيَ, payment and discounts). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F6')({
  n: 6, fileTitle: 'Shopping_in_Town_Prices_and_Comparisons', chip: 'Shopping in Town',
  title: 'Shopping in Town: Prices and Comparisons', arabic: 'التَّسَوُّقُ فِي المَدِينَةِ — الأَسْعَارُ وَالمُقَارَنَةُ',
  focus: 'Buy something in town: ask كَمْ ثَمَنُهُ / ثَمَنُهَا؟ for the right item, compare prices with أَرْخَصُ / أَغْلَى مِنْ, and ask for a discount or to pay by card.',
  icon: 'FaBagShopping', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const mfp = (m, f, pl) => ({ tag: 'm · f · pl', forms: [{ l: 'm.', ar: m }, { l: 'f.', ar: f }, { l: 'pl.', ar: pl }] });
const slides = D.devLesson('F6-L06', {
  support: `• Core: ask the price of four items and complete a supported purchase (هٰذَا … كَمْ ثَمَنُهُ؟ · هٰذِهِ … كَمْ ثَمَنُهَا؟).
• Develop: compare three items and justify a decision (… أَرْخَصُ مِنْ … لِذَلِكَ أَشْتَرِي …).
• Stretch: a spontaneous role play with availability, discount, payment and receipt.
• Website teaching note: “A price question is also a pronoun task: the suffix must refer accurately to the item.” (F5-L06 thamanuhu / thamanuhā again.)
• أَرْخَصُ / أَغْلَى never change for gender: الحَقِيبَةُ أَغْلَى (not أَغْلَيَةٌ).
• Money: dinars are used on the website; students may use pounds (جُنَيْهَاتٌ) — the website game does.`,
  teach: 'Shop and price words, then how much is it (m. / f.)? and cheaper / dearer than.',
  wedo: 'Comparison picture match, sort ـهُ / ـهَا, fix the mistakes and listen at the city market.',
  next: { nextCode: 'F6-L07', nextTitle: 'The Built Environment: Buildings, Materials and Urban Life', nextAr: 'البِيئَةُ المَبْنِيَّةُ' },
  doNow: {
    questions: [
      q('What does مَتْجَرٌ mean?', ['a shop', 'a discount', 'a receipt'], 'Prepared at home (F6-L05). The lesson also uses مَحَلٌّ.'),
      q('What does خَصْمٌ mean?', ['a discount', 'a price', 'a gift'], 'Prepared at home (F6-L05).'),
      q('Choose the accurate city description.', ['مَدِينَتِي جَمِيلَةٌ وَحَدِيثَةٌ.', 'مَدِينَتِي جَمِيلٌ وَحَدِيثٌ.', 'مَدِينَتِي جَمِيلَاتٌ.'], 'F6-L05: city is feminine.'),
      q('Complete: مِنْ مَزَايَا مَدِينَتِي ____ المَوَاصَلَاتِ جَيِّدَةٌ.', ['أَنَّ', 'لَكِنَّ', 'إِلَى'], 'F6-L05: anna + clause.'),
      q('Ask “How much is the soup?”', ['كَمْ ثَمَنُ الحَسَاءِ؟', 'أَيْنَ الحَسَاءُ؟', 'مَا الحَسَاءُ؟'], 'F5-L06: kam thamanu + item.'),
    ],
    keyIdea: { text: 'The ending tells us WHICH item: -hu for a masculine thing, -hā for a feminine thing.', ar: 'هٰذَا هَاتِفٌ، كَمْ ثَمَنُ{w|هُ}؟ · هٰذِهِ حَقِيبَةٌ، كَمْ ثَمَنُ{e|هَا}؟' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F6-L05. Questions 3–5 retrieve F6-L05 (agreement, anna) and F5-L06 (price question).',
  },
  routes: {
    core: ['I can ask the price of four items.', 'I can say I want to buy something.'],
    develop: ['I can compare two prices.', 'I can ask to pay by card or cash.'],
    stretch: ['I can ask for a discount and a receipt.', 'I can justify a purchase decision.'],
  },
  bridge: [
    { ar: 'سُوقٌ', urdu: 'سودا / بازار', tr: 'saudā', en: 'market (sūq)' },
    { ar: 'هَدِيَّةٌ', urdu: 'ہدیہ', tr: 'hadiya', en: 'a gift' },
    { ar: 'نَقْدًا', urdu: 'نقد', tr: 'naqd', en: 'cash' },
    { ar: 'قِيمَةٌ · ثَمَنٌ', urdu: 'قیمت', tr: 'qīmat', en: 'price / value' },
    { ar: 'خَاصٌّ', urdu: 'خاص', tr: 'khās', en: 'special (ʿarḍ khāṣṣ = special offer)' },
  ],
  bridgeNotes: 'URDU BRIDGE: ہدیہ، نقد، خاص are identical. قیمت (price) is Arabic قِيمَةٌ (value) — the lesson uses ثَمَنٌ and سِعْرٌ. سوق appears in Urdu poetry and in place names (سوق … in the Gulf). عرض (offer, request — عرض ہے) → عَرْضٌ خَاصٌّ (a special offer).',
  core: ['ثَمَنٌ', 'كَمْ ثَمَنُهُ؟', 'كَمْ ثَمَنُهَا؟', 'رَخِيصٌ / رَخِيصَةٌ', 'غَالٍ / غَالِيَةٌ', 'أَرْخَصُ مِنْ', 'أَغْلَى مِنْ', 'خَصْمٌ', 'نَقْدًا', 'بِالبِطَاقَةِ', 'أُرِيدُ أَنْ أَشْتَرِيَ', 'هَلْ عِنْدَكُمْ...؟'],
  forms: {
    'بَائِعٌ / بَائِعَةٌ': mfp('بَائِعٌ', 'بَائِعَةٌ', 'بَائِعُونَ'),
    'زَبُونٌ / زَبُونَةٌ': mfp('زَبُونٌ', 'زَبُونَةٌ', 'زَبَائِنُ'),
    'حَقِيبَةٌ': { tag: 'f. · pl', forms: [{ l: 'one', ar: 'حَقِيبَةٌ' }, { l: 'pl.', ar: 'حَقَائِبُ' }] },
    'هَدِيَّةٌ': { tag: 'f. · pl', forms: [{ l: 'one', ar: 'هَدِيَّةٌ' }, { l: 'pl.', ar: 'هَدَايَا' }] },
    'رَخِيصٌ / رَخِيصَةٌ': { tag: 'm · f · more', forms: [{ l: 'm.', ar: 'رَخِيصٌ' }, { l: 'f.', ar: 'رَخِيصَةٌ' }, { l: 'cheaper', ar: 'أَرْخَصُ' }] },
    'غَالٍ / غَالِيَةٌ': { tag: 'm · f · more', forms: [{ l: 'm.', ar: 'غَالٍ' }, { l: 'f.', ar: 'غَالِيَةٌ' }, { l: 'dearer', ar: 'أَغْلَى' }] },
  },
  flexGroups: [0],
  vocabNotes: {
    0: 'FLEX: shops and goods (many are revision: كِتَابٌ، حَقِيبَةٌ، هَاتِفٌ). Note the gender — it decides ثَمَنُهُ / ثَمَنُهَا.',
    1: 'Price words. The cards show m. / f. / comparative. The comparative (أَرْخَصُ، أَغْلَى) never takes ة.',
    2: 'Polite transaction chunks from F5-L05 (café) reused in a shop.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · how much is it? (website rules 1 and 2)', title: 'How much is it — this one or that one?', ar: 'كَمْ ثَمَنُهُ؟ · كَمْ ثَمَنُهَا؟',
      cols: [{ label: 'Masculine item · ـهُ', w: 6.1, size: 24 }, { label: 'Feminine item · ـهَا', w: 6.23, size: 24 }],
      rows: [
        { core: true, cells: [P('هٰذَا كِتَابٌ. كَمْ ثَمَنُ{w|هُ}؟', 'This is a book. How much is it?'), P('هٰذِهِ حَقِيبَةٌ. كَمْ ثَمَنُ{e|هَا}؟', 'This is a bag. How much is it?')] },
        { core: true, cells: [P('هٰذَا هَاتِفٌ. كَمْ ثَمَنُ{w|هُ}؟', 'This is a phone. How much is it?'), P('هٰذِهِ هَدِيَّةٌ. كَمْ ثَمَنُ{e|هَا}؟', 'This is a gift. How much is it?')] },
        { cells: [P('ثَمَنُ{w|هُ} عِشْرُونَ دِينَارًا.', 'It costs twenty dinars.'), P('ثَمَنُ{e|هَا} خَمْسُونَ دِينَارًا.', 'It costs fifty dinars.')] },
        { cells: [P('كَمْ ثَمَنُ الحِذَاءِ؟', 'How much are the shoes?'), P('كَمْ ثَمَنُ التَّذْكِرَةِ؟', 'How much is the ticket?')] },
      ],
      foot: 'With the item named: kam thamanu + item (-i). With a pronoun: -hu (m.) or -hā (f.).',
      notes: `GRAMMAR PART 1 — website rules “Ask the price of a masculine item” (كَمْ ثَمَنُهُ؟ — ـهُ refers back to كِتَابٌ، هَاتِفٌ) and “… a feminine item” (كَمْ ثَمَنُهَا؟ — حَقِيبَةٌ، تَذْكِرَةٌ).
Website common error: “Do not use ثَمَنُهُ for a feminine item. For حَقِيبَةٌ, ask كَمْ ثَمَنُهَا؟”
Quick-fire: hold up (or show) an object; students answer هٰذَا … كَمْ ثَمَنُهُ؟ or هٰذِهِ … كَمْ ثَمَنُهَا؟`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · compare and buy (website rules 3 and 4)', title: 'Cheaper, dearer — and buy it', ar: 'أَرْخَصُ · أَغْلَى · أَشْتَرِي',
      cards: [
        { chip: 'CHEAPER THAN', color: '1E7B4F', head: 'أَرْخَصُ مِنْ', big: 'الحَافِلَةُ أَرْخَصُ مِنْ سَيَّارَةِ الأُجْرَةِ.', en: 'The bus is cheaper than the taxi.', clue: 'No ة — never changes.' },
        { chip: 'DEARER THAN', color: 'C0386B', head: 'أَغْلَى مِنْ', big: 'الهَاتِفُ أَغْلَى مِنَ الكِتَابِ.', en: 'The phone is more expensive than the book.', clue: 'Same for m. and f.' },
        { chip: 'BUY + PAY', color: '1D5FBF', head: 'أُرِيدُ أَنْ أَشْتَرِيَ', big: 'أُرِيدُ أَنْ أَشْتَرِيَ هَدِيَّةً. هَلْ يُمْكِنُ أَنْ أَدْفَعَ بِالبِطَاقَةِ؟', en: 'I want to buy a gift. Can I pay by card?', clue: 'an + verb (-a).' },
      ],
      error: { text: 'Website common error: the comparative takes no ة.', pairs: [['الحَافِلَةُ أَرْخَصُ مِنَ التَّاكْسِي.', 'الحَافِلَةُ أَرْخَصَةٌ مِنَ التَّاكْسِي.']] },
      notes: `GRAMMAR PART 2 — website rules “Compare two prices” (أَرْخَصُ مِنْ / أَغْلَى مِنْ — irregular comparatives that do not change for gender) and “Make a polite purchase” (أُرِيدُ أَنْ أَشْتَرِيَ + item).
Website teaching note: “Comparatives are most useful when they support a decision”: … أَرْخَصُ، لِذَلِكَ أَشْتَرِيهِ.
Website mistake: أُرِيدُ يَشْتَرِي ✗ → أُرِيدُ أَنْ أَشْتَرِيَ ✓ (F6-L04: أُرِيدُ أَنْ أَحْجُزَ).`,
    },
  ],
  quick: [0, 1, 2, 4],
  rest: [3, 5, 7],
  ido: {
    title: 'Watch me shop for a gift',
    steps: [
      { head: '1 · Available?', ar: 'الزَّبُونُ: هَلْ عِنْدَكُمْ هَدَايَا مَحَلِّيَّةٌ؟', think: 'hal ʿindakum (F5-L05).' },
      { head: '2 · Two items', ar: 'البَائِعَةُ: هٰذَا كِتَابٌ عَنِ المَدِينَةِ، وَهٰذِهِ حَقِيبَةٌ صَغِيرَةٌ.', think: 'Book m., bag f.' },
      { head: '3 · Prices', ar: 'كَمْ ثَمَنُ{w|هُ}؟ وَكَمْ ثَمَنُ{e|هَا}؟', think: 'The ending = which item.' },
      { head: '4 · Decide', ar: 'الكِتَابُ {k|أَرْخَصُ} وَأَنْسَبُ. هَلْ يُمْكِنُ أَنْ أَدْفَعَ بِالبِطَاقَةِ؟', think: 'Compare → decide → pay.' },
    ],
    legend: ['w', 'e', 'k'], legendLabels: { w: 'MASC. -HU', e: 'FEM. -HĀ', k: 'COMPARE' },
    model: 'الزَّبُونُ: هَلْ عِنْدَكُمْ هَدَايَا مَحَلِّيَّةٌ؟ — البَائِعَةُ: نَعَمْ، هٰذَا كِتَابٌ عَنِ المَدِينَةِ، وَهٰذِهِ حَقِيبَةٌ صَغِيرَةٌ. — الزَّبُونُ: كَمْ ثَمَنُ{w|هُ}؟ وَكَمْ ثَمَنُ{e|هَا}؟ — البَائِعَةُ: ثَمَنُ الكِتَابِ عِشْرُونَ دِينَارًا، وَالحَقِيبَةُ {k|أَغْلَى} مِنْهُ بِخَمْسَةِ دَنَانِيرَ. — الزَّبُونُ: الكِتَابُ {k|أَرْخَصُ} وَأَنْسَبُ. هَلْ هُنَاكَ خَصْمٌ؟ وَهَلْ يُمْكِنُ أَنْ أَدْفَعَ بِالبِطَاقَةِ؟',
    modelEn: 'Customer: Do you have local gifts? — Seller: Yes, this is a book about the city, and this is a small bag. — How much is it (the book)? And how much is it (the bag)? — The book costs twenty dinars, and the bag is five dinars more expensive. — The book is cheaper and more suitable. Is there a discount? And can I pay by card?',
    notes: 'I DO (3 min) — the website model dialogue. Hold up two real objects (a book and a bag) to make the -hu / -hā choice visible.',
  },
  game: {
    title: 'Comparisons: match the picture',
    pick: [0, 1, 3],
    en: ['The train is faster than the bus.', 'The bicycle is cheaper than the car.', 'This shirt is more beautiful than that one.'],
    icons: [[['fa6', 'FaTrain', '1D5FBF'], ['fa6', 'FaBolt', 'E0A800']], [['fa6', 'FaBicycle', '1E7B4F'], ['fa6', 'FaSterlingSign', '1F3A5F']], [['fa6', 'FaShirt', 'C0386B'], ['fa6', 'FaStar', 'E0A800']]],
    labels: ['train > bus', 'bike < car (£)', 'this shirt > that one'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6) — all comparatives on the أَفْعَلُ pattern: أَسْرَعُ، أَرْخَصُ، أَجْمَلُ. None of them take ة. Other website items: أَكْثَرُ اِزْدِحَامًا، أَفْضَلُ، أَهْدَأُ.',
  },
  sorterNotes: 'For each card say the full question: كِتَابٌ → كَمْ ثَمَنُهُ؟ · هَدِيَّةٌ → كَمْ ثَمَنُهَا؟',
  hints: ['A bag is m. or f.?', 'Does the comparative take ة?', 'What joins urīdu to the next verb?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for the numbers and أَرْخَصُ.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5, then calculate the final price (50 − 10 = 40).',
  gloss: [
    ['الزَّبُونَةُ: السَّلَامُ عَلَيْكُمْ. هَلْ عِنْدَكُمْ حَقَائِبُ صَغِيرَةٌ؟', 'Customer: Hello. Do you have small bags?'],
    ['البَائِعُ: نَعَمْ، هٰذِهِ حَقِيبَةٌ زَرْقَاءُ وَثَمَنُهَا خَمْسُونَ دِينَارًا. وَهٰذِهِ حَقِيبَةٌ سَوْدَاءُ بِأَرْبَعِينَ.', 'Seller: Yes, this blue bag costs fifty dinars, and this black bag is forty.'],
    ['الزَّبُونَةُ: السَّوْدَاءُ أَرْخَصُ، وَلَكِنَّ الزَّرْقَاءَ أَجْمَلُ. هَلْ هُنَاكَ خَصْمٌ؟', 'The black one is cheaper, but the blue one is nicer. Is there a discount?'],
    ['البَائِعُ: نَعَمْ، خَصْمٌ عَشَرَةُ دَنَانِيرَ.', 'Seller: Yes, a ten-dinar discount.'],
    ['الزَّبُونَةُ: جَيِّدٌ. أُرِيدُ الزَّرْقَاءَ. هَلْ يُمْكِنُ أَنْ أَدْفَعَ بِالبِطَاقَةِ؟', 'Good. I want the blue one. Can I pay by card?'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'هَلْ عِنْدَكُمْ …؟' },
      { route: 'core', ar: 'كَمْ ثَمَنُهُ / ثَمَنُهَا؟' },
      { route: 'develop', ar: 'هَلْ هُنَاكَ خَصْمٌ؟' },
      { route: 'stretch', ar: 'هَلْ يُمْكِنُ أَنْ أَدْفَعَ بِالبِطَاقَةِ؟ وَأُرِيدُ الفَاتُورَةَ.' },
    ],
    stems: [
      { route: 'core', ar: 'نَعَمْ، هٰذَا … / هٰذِهِ …' },
      { route: 'core', ar: 'ثَمَنُهُ / ثَمَنُهَا ______ دِينَارًا.' },
      { route: 'develop', ar: '… أَرْخَصُ / أَغْلَى مِنْ … · نَعَمْ، خَصْمٌ …' },
      { route: 'stretch', ar: 'يُمْكِنُكَ الدَّفْعُ نَقْدًا أَوْ بِالبِطَاقَةِ.' },
    ],
    modelEn: ['Do you have a small souvenir?', 'Yes, this is a nice souvenir and it costs fifteen dinars.'],
    notes: 'Website “Market bargaining and payment role play” — all four prompts are the website’s. Give sellers a price card for three items (one m., two f.). Website model: هَلْ عِنْدَكُمْ تَذْكَارٌ صَغِيرٌ؟ — نَعَمْ، هٰذَا تَذْكَارٌ جَمِيلٌ وَثَمَنُهُ خَمْسَةَ عَشَرَ دِينَارًا. — هَلْ هُنَاكَ خَصْمٌ؟ — نَعَمْ، وَيُمْكِنُكَ الدَّفْعُ نَقْدًا أَوْ بِالبِطَاقَةِ.',
  },
  write: {
    core: { amount: '6 lines', how: 'A supported purchase: available? · price (-hu / -hā) · I want to buy · thanks.' },
    develop: { amount: '6–8 lines', how: 'Website task: a shopping dialogue comparing two items with arkhaṣu / aghlā.' },
    stretch: { amount: '10+ lines', how: 'Add a discount, a payment method, a receipt and a justified decision.' },
  },
  frames: {
    core: [
      { en: 'Do you have …?', ar: 'هَلْ عِنْدَكُمْ ______ ؟' },
      { en: 'This is a book. How much is it?', ar: 'هٰذَا كِتَابٌ. كَمْ ثَمَنُهُ؟' },
      { en: 'This is a bag. How much is it?', ar: 'هٰذِهِ حَقِيبَةٌ. كَمْ ثَمَنُهَا؟' },
      { en: 'I want to buy …', ar: 'أُرِيدُ أَنْ أَشْتَرِيَ ______ .' },
      { en: 'Thank you very much.', ar: 'شُكْرًا جَزِيلًا.' },
    ],
    develop: [
      { en: 'The … is cheaper than the …', ar: '______ أَرْخَصُ مِنْ ______ .' },
      { en: 'The … is more expensive than the …', ar: '______ أَغْلَى مِنْ ______ .' },
      { en: 'Is there a discount?', ar: 'هَلْ هُنَاكَ خَصْمٌ؟' },
      { en: 'Can I pay by card?', ar: 'هَلْ يُمْكِنُ أَنْ أَدْفَعَ بِالبِطَاقَةِ؟' },
      { en: '… so I will buy it.', ar: 'لِذَلِكَ أَشْتَرِيهِ / أَشْتَرِيهَا.' },
    ],
    bank: ['هَلْ عِنْدَكُمْ', 'كَمْ ثَمَنُهُ؟', 'كَمْ ثَمَنُهَا؟', 'رَخِيصٌ', 'غَالٍ', 'أَرْخَصُ مِنْ', 'أَغْلَى مِنْ', 'خَصْمٌ', 'نَقْدًا', 'بِالبِطَاقَةِ', 'فَاتُورَةٌ', 'أُرِيدُ أَنْ أَشْتَرِيَ'],
  },
  stretch: [
    ['بِخَصْمِ عِشْرِينَ فِي المِئَةِ', 'with a 20% discount'],
    ['أَرْخَصُ مِنْهَا بِعَشَرَةِ دَنَانِيرَ', 'ten dinars cheaper than it'],
    ['سَمَّاعَاتٌ مَجَّانِيَّةٌ', 'free headphones'],
    ['اِحْتَفِظْ بِالفَاتُورَةِ', 'keep the receipt'],
    ['… أَنْسَبُ لِي', '… is more suitable for me'],
  ],
  modelEn: 'Customer: Do you have local gifts? Seller: Yes, this is a book about the city, and this is a small bag. Customer: How much is it (the book)? And how much is it (the bag)? Seller: The book costs twenty dinars, and the bag is five dinars more expensive. Customer: The book is cheaper and more suitable. Is there a discount? And can I pay by card?',
  find: ['thamanuhu', 'thamanuhā', 'a comparative', 'a payment question'],
  modelNotes: 'Evidence: كَمْ ثَمَنُهُ؟ (the book) · كَمْ ثَمَنُهَا؟ (the bag) · أَغْلَى / أَرْخَصُ · هَلْ يُمْكِنُ أَنْ أَدْفَعَ بِالبِطَاقَةِ؟',
  selfCheck: [
    { route: 'core', text: 'I asked the price with the right ending.' },
    { route: 'core', text: 'I used أُرِيدُ أَنْ أَشْتَرِيَ.' },
    { route: 'develop', text: 'I compared two items.' },
    { route: 'develop', text: 'The comparative has no ة.' },
    { route: 'stretch', text: 'Discount, payment and receipt.' },
  ],
  exit: [0, 1, 5],
  glossary: [
    ['عُرُوضُ اليَوْمِ', 'today’s offers'], ['بِخَصْمِ', 'with a discount of'], ['فِي المِئَةِ', 'per cent'], ['حَقِيبَةُ السَّفَرِ', 'a suitcase'], ['أَرْخَصُ مِنْهَا', 'cheaper than it'],
    ['الجَدِيدُ', 'new'], ['سَمَّاعَاتٌ', 'headphones'], ['مَجَّانِيَّةٌ', 'free'], ['يُمْكِنُ الدَّفْعُ', 'payment is possible'], ['اِحْتَفِظْ بِـ', 'keep'],
  ],
  prep: {
    words: [['مَبْنًى', 'a building', 'pl. مَبَانٍ'], ['بُرْجٌ', 'a tower', 'pl. أَبْرَاجٌ'], ['حَجَرٌ', 'stone', 'pl. أَحْجَارٌ'], ['زُجَاجٌ', 'glass', '—'], ['قَدِيمٌ / حَدِيثٌ', 'old / modern', 'f. قَدِيمَةٌ / حَدِيثَةٌ']],
    questionEn: 'Name one famous building in your town or country.',
    questionAr: 'مَبْنًى مَشْهُورٌ فِي مَدِينَتِي …',
    homework: {
      core: 'Website F6-L06: the vocabulary tab and the “Masculine or feminine price reference?” sorter.',
      develop: 'Website writing task: a 6–8-line shopping dialogue comparing two purchases.',
      stretch: 'Write a spontaneous-style dialogue with discount, payment and receipt.',
    },
    wordsSource: 'The five words come from the website F6-L07 lesson (the built environment).',
  },
  remember: 'Remember: كَمْ ثَمَنُهُ؟ (m.) · كَمْ ثَمَنُهَا؟ (f.) · أَرْخَصُ / أَغْلَى never change.',
});

module.exports = { meta, slides };
