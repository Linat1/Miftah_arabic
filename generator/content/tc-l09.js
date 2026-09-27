'use strict';
/*
 * TC-L09 · Shopping, Prices and Consumer Choices
 * Website: Advanced Topics › Topic C › Lesson 9 (reuses F6-L06 “Shopping in Town: Prices and Comparisons”; Topic C
 * focus “Understand adverts and transactions, compare products and resolve problems”; grammar: numbers;
 * demonstratives; attached pronouns). Picture match: website lesson game “Best Buy”.
 */
const C = require('./common');
const site = require('../site-data/f6-content.json').lessons.find((l) => l.code === 'F6-L06');
const game = require('../site-data/advanced-topic-visual-games.json').c09;
const G = site.grammar;
const { q, fromSite } = C;

const meta = C.meta({
  n: 9, fileTitle: 'Shopping_Prices_Consumer_Choices', chip: 'Shopping & Prices',
  title: 'Shopping, Prices and Consumer Choices', arabic: 'التَّسَوُّقُ وَالأَسْعَارُ وَخِيَارَاتُ المُسْتَهْلِكِ',
  focus: 'Ask the price of this and that (هٰذَا · هٰذِهِ · ثَمَنُهُ · ثَمَنُهَا), read prices and adverts, compare products (أَرْخَصُ · أَغْلَى) and sort out a problem in a shop.',
  icon: 'FaCartShopping',
});
const NEXT = { nextCode: 'TC-L10', nextTitle: 'Measurements, Shapes and Materials', nextAr: 'القِيَاسَاتُ وَالأَشْكَالُ وَالمَوَادُّ' };
const item = (n, ar, en, tr, g, core, pl) => ({ n, ar, en, tr, tag: `noun · ${g}.`, core, forms: [{ l: g === 'm' ? 'ask (m.)' : 'ask (f.)', ar: g === 'm' ? 'كَمْ ثَمَنُهُ؟' : 'كَمْ ثَمَنُهَا؟' }, ...(pl ? [{ l: 'pl.', ar: pl }] : [])] });

// Site listening and reading, split for the read-along and the advert
const advert = [
  'عُرُوضُ اليَوْمِ فِي مَرْكَزِ النُّورِ التِّجَارِيِّ',
  'الكُتُبُ بِخَصْمِ عِشْرِينَ فِي المِئَةِ.',
  'حَقِيبَةُ السَّفَرِ الكَبِيرَةُ بِسِتِّينَ دِينَارًا،',
  'وَالحَقِيبَةُ الصَّغِيرَةُ أَرْخَصُ مِنْهَا بِعَشَرَةِ دَنَانِيرَ.',
  'الهَاتِفُ الجَدِيدُ غَالٍ وَلٰكِنْ مَعَهُ سَمَّاعَاتٌ مَجَّانِيَّةٌ.',
  'يُمْكِنُ الدَّفْعُ نَقْدًا أَوْ بِالبِطَاقَةِ.',
  'اِحْتَفِظْ بِالفَاتُورَةِ لِمُدَّةِ ثَلَاثِينَ يَوْمًا.',
];
const complaint = [
  'إِلَى: خِدْمَةِ الزَّبَائِنِ — مَرْكَزُ النُّورِ التِّجَارِيُّ',
  'اِشْتَرَيْتُ هٰذَا الهَاتِفَ يَوْمَ السَّبْتِ بِمِئَتَيْ دِينَارٍ.',
  'لٰكِنَّ الهَاتِفَ لَا يَعْمَلُ، وَالسَّمَّاعَاتُ لَيْسَتْ فِي العُلْبَةِ.',
  'عِنْدِي الفَاتُورَةُ، وَهٰذِهِ صُورَتُهَا.',
  'أُرِيدُ أَنْ أُبَدِّلَ الهَاتِفَ بِهَاتِفٍ جَدِيدٍ، أَوْ أَنْ تُرْجِعُوا لِي المَالَ.',
  'شُكْرًا لَكُمْ — سَارَةُ',
];

const slides = [
  C.titleSlide({
    n: 9,
    source: 'The website lesson reuses F6-L06 (Shopping in Town: Prices and Comparisons) with the Topic C focus “Understand adverts and transactions, compare products and resolve problems” (grammar: numbers; demonstratives; attached pronouns). The advert, listening, quizzes, builder, sorter and mistakes are the website’s; the picture match is the website lesson game “Best Buy”. The price table and the complaint email (resolve problems) are teacher-made from website vocabulary.',
    support: `• F6-L06 is accessible (A2–B1), so this lesson can push every student a little further. CORE: shop words + هٰذَا / هٰذِهِ + كَمْ ثَمَنُهُ / ثَمَنُهَا + prices in tens. DEVELOP: أَرْخَصُ / أَغْلَى مِنْ, discounts and polite payment requests. STRETCH: percentages, “better value” and a complaint (resolve a problem).
• Colour: pink = the “it” ending (ـهُ / ـهَا) that must match the item; price table with the counted-noun rule; an advert and a complaint to read; read-along listening with English.
• Urdu bridge words (قیمت، دکان، نقد، حساب، ہدیہ).`,
  }),
  C.welcomeSlide(),
  C.journeySlide({ teach: 'Shop words, “this”, “how much is it?”, prices.', wedo: 'Best buy, read an advert, build, fix and listen.', next: 'TC-L10' }),
  C.doNow({
    questions: [
      q('What does سُوقٌ mean?', ['market', 'price', 'discount'], 'Prepared at home: سُوقٌ = market (pl. أَسْوَاقٌ).'),
      q('Which word means “cheap”?', ['رَخِيصٌ', 'غَالٍ', 'خَصْمٌ'], 'Prepared at home: رَخِيصٌ = cheap · غَالٍ = expensive · خَصْمٌ = discount.'),
      q('Complete: ___ مَكْتَبَةٌ فِي حَيِّي.', ['تُوجَدُ', 'يُوجَدُ', 'يُوجَدُونَ'], 'TC-L08: مَكْتَبَةٌ is feminine → تُوجَدُ.'),
      q('What does المَقْهَى بِجَانِبِ البَنْكِ mean?', ['The café is next to the bank.', 'The café is opposite the bank.', 'The café is behind the bank.'], 'TC-L08: بِجَانِبِ = next to.'),
      q('Which means “bigger than”?', ['أَكْبَرُ مِنْ', 'كَبِيرٌ مِنْ', 'أَكْبَرُ عَنْ'], 'TC-L08: the أَفْعَلُ pattern + مِنْ.'),
    ],
    keyIdea: { text: 'The “it” ending must match the thing: a book (m.) → ـهُ, a bag (f.) → ـهَا.', ar: 'كِتَابٌ: كَمْ ثَمَنُ{e|هُ}؟  ·  حَقِيبَةٌ: كَمْ ثَمَنُ{e|هَا}؟' },
    retrieves: 'Questions 1–2 test the words prepared at home (Flipped Learning follow-up). Questions 3–5 retrieve TC-L08 — and question 5 leads straight into today’s أَرْخَصُ مِنْ.',
  }),
  C.objectivesSlide(site.objectives, {
    core: ['I can name 12 shop words and say هٰذَا / هٰذِهِ correctly.', 'I can ask كَمْ ثَمَنُهُ؟ / كَمْ ثَمَنُهَا؟ and understand a price.'],
    develop: ['I can compare two products with أَرْخَصُ مِنْ / أَغْلَى مِنْ.', 'I can read an advert and ask to pay politely.'],
    stretch: ['I can explain a problem and ask for an exchange or refund.', 'I can write a 6–8-line shop dialogue comparing two items.'],
  }, 3, 'The Core statements carry the Topic C focus (adverts and transactions, comparing products; numbers, demonstratives, attached pronouns). Stretch covers “resolve problems”. The website objectives on the left are the F6-L06 objectives.'),
  C.keywordsSlide({
    text: '32 words from the website in 5 groups. Learn the CORE words first. Hear it → say it → see it → use it.',
    groups: [
      { head: 'GROUP 1', name: 'In the shop · 6' },
      { head: 'GROUP 2', name: 'Things to buy · 6' },
      { head: 'GROUP 3', name: 'Price and paying · 6' },
      { head: 'GROUP 4', name: 'Prices · 7' },
      { head: 'GROUP 5', name: 'Polite phrases · 7' },
    ],
    bridge: [
      { ar: 'قِيمَةٌ', urdu: 'قیمت', tr: 'qīmat', en: 'value (Urdu: price)' },
      { ar: 'دُكَّانٌ', urdu: 'دکان', tr: 'dukān', en: 'shop' },
      { ar: 'نَقْدًا', urdu: 'نقد', tr: 'naqd', en: 'in cash' },
      { ar: 'حِسَابٌ', urdu: 'حساب', tr: 'ḥisāb', en: 'the bill, account' },
      { ar: 'هَدِيَّةٌ', urdu: 'ہدیہ', tr: 'hadiya', en: 'gift' },
    ],
    notes: `URDU BRIDGE: قیمت (Urdu “price”; Arabic قِيمَةٌ = value — the website game: أَفْضَلُ قِيمَةً = better value), دکان (shop — Arabic has دُكَّانٌ and مَحَلٌّ), نقد (cash — نَقْدًا), حساب (the bill), ہدیہ (a gift — هَدِيَّةٌ).
All five groups are website F6-L06 vocabulary; Group 4 (prices) adds the numbers needed to read the website advert and listening.`,
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1', title: 'In the shop', ar: 'فِي المَحَلِّ',
    items: [
      { n: 1, ar: 'مَحَلٌّ', en: 'shop', tr: 'ma-ḥall · pl. ma-ḥal-lāt', tag: 'noun · m.', core: true, forms: [{ l: 'sg.', ar: 'مَحَلٌّ' }, { l: 'pl.', ar: 'مَحَلَّاتٌ' }] },
      { n: 2, ar: 'سُوقٌ', en: 'market', tr: 'sūq · pl. as-wāq', tag: 'noun', core: true, forms: [{ l: 'sg.', ar: 'سُوقٌ' }, { l: 'pl.', ar: 'أَسْوَاقٌ' }] },
      { n: 3, ar: 'مَرْكَزٌ {m|تِجَارِ}{e|يٌّ}', en: 'shopping centre', tr: 'mar-ka-zun ti-jā-riyy', tag: 'noun + nisba', core: true },
      { n: 4, ar: 'بَائِعٌ', en: 'seller', tr: 'bā-ʾiʿ / bā-ʾi-ʿa', tag: 'person', core: true, forms: [{ l: 'm.', ar: 'بَائِعٌ' }, { l: 'f.', ar: 'بَائِعَةٌ' }] },
      { n: 5, ar: 'زَبُونٌ', en: 'customer', tr: 'za-būn / za-bū-na · pl. za-bā-ʾin', tag: 'person', core: true, forms: [{ l: 'm.', ar: 'زَبُونٌ' }, { l: 'f.', ar: 'زَبُونَةٌ' }, { l: 'pl.', ar: 'زَبَائِنُ' }] },
      { n: 6, ar: 'عَرْضٌ خَاصٌّ', en: 'special offer', tr: 'ʿar-ḍun khāṣṣ', tag: 'noun + adjective', forms: [{ l: 'sg.', ar: 'عَرْضٌ' }, { l: 'pl.', ar: 'عُرُوضٌ' }] },
    ],
    notes: `KEY WORDS — shopping places and people (website F6-L06). Hear → Say → See → Use.
Masculine / feminine / plural: بَائِعٌ / بَائِعَةٌ (the listening has a male seller — البَائِعُ — and a female customer — الزَّبُونَةُ).
Website reading headline: عُرُوضُ اليَوْمِ = today’s offers (plural of عَرْضٌ).`,
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 2 · the gender decides the question', title: 'Things to buy', ar: 'السِّلَعُ',
    items: [
      item(1, 'كِتَابٌ', 'book', 'ki-tāb', 'm', true, 'كُتُبٌ'),
      item(2, 'حَقِيبَةٌ', 'bag', 'ḥa-qī-ba', 'f', true, 'حَقَائِبُ'),
      item(3, 'هَاتِفٌ', 'phone', 'hā-tif', 'm', true, 'هَوَاتِفُ'),
      item(4, 'هَدِيَّةٌ', 'gift', 'ha-diy-ya', 'f', true, 'هَدَايَا'),
      item(5, 'حِذَاءٌ', 'shoe(s)', 'ḥi-dhāʾ', 'm', false, 'أَحْذِيَةٌ'),
      item(6, 'تَذْكَارٌ', 'souvenir', 'tadh-kār', 'm', false, 'تَذْكَارَاتٌ'),
    ],
    notes: `KEY WORDS — goods (website F6-L06). Each card shows the price question the item needs — this is today’s key grammar.
Core trick: look for ـة at the end. ـة → feminine → ثَمَنُهَا. No ـة → usually masculine → ثَمَنُهُ.
Stretch: مَلَابِسُ (clothes) is a plural — the website says ask with the noun: كَمْ ثَمَنُ المَلَابِسِ؟`,
  },
  {
    type: 'vocab', stage: 'teach', min: 1, eyebrow: 'Key words · Group 3', title: 'Price and paying', ar: 'الثَّمَنُ وَالدَّفْعُ',
    items: [
      { n: 1, ar: 'ثَمَنٌ', en: 'price', tr: 'tha-man · also سِعْرٌ', tag: 'noun · m.', core: true, note: 'سِعْرٌ = price / rate (pl. أَسْعَارٌ).' },
      { n: 2, ar: 'رَخِيصٌ', en: 'cheap', tr: 'ra-khīṣ / ra-khī-ṣa', tag: 'adjective', core: true, forms: [{ l: 'm.', ar: 'رَخِيصٌ' }, { l: 'f.', ar: 'رَخِيصَةٌ' }] },
      { n: 3, ar: 'غَالٍ', en: 'expensive', tr: 'ghā-lin / ghā-li-ya', tag: 'adjective', core: true, forms: [{ l: 'm.', ar: 'غَالٍ' }, { l: 'f.', ar: 'غَالِيَةٌ' }] },
      { n: 4, ar: 'خَصْمٌ', en: 'discount', tr: 'khaṣm', tag: 'noun · m.', core: true },
      { n: 5, ar: 'فَاتُورَةٌ', en: 'receipt, bill', tr: 'fā-tū-ra · pl. fa-wā-tīr', tag: 'noun · f.', forms: [{ l: 'sg.', ar: 'فَاتُورَةٌ' }, { l: 'pl.', ar: 'فَوَاتِيرُ' }] },
      { n: 6, ar: 'نَقْدًا · بِالبِطَاقَةِ', en: 'in cash · by card', tr: 'naq-dan · bil-bi-ṭā-qa', tag: 'how you pay', core: true },
    ],
    notes: 'KEY WORDS — price and comparison (website F6-L06). Gesture: rub fingers (price), thumbs down (cheap), thumbs up high (expensive), a scissor cut (discount), a card tap (بِالبِطَاقَةِ).',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · demonstratives + attached pronouns · website table', title: 'This … How much is it?', ar: 'كَمْ ثَمَنُهُ؟ كَمْ ثَمَنُهَا؟',
    cols: [{ label: 'The item', w: 2.2 }, { label: 'This is … (near)', w: 3.0, size: 22 }, { label: 'How much is it?', w: 3.0, size: 22 }, { label: 'The answer', w: 4.13, size: 20 }],
    rows: [
      { core: true, cells: ['masculine', { ar: '{k|هٰذَا} كِتَابٌ.', sub: 'hā-dhā ki-tāb · this is a book' }, { ar: 'كَمْ ثَمَنُ{e|هُ}؟', sub: 'kam tha-ma-nu-hu' }, { ar: 'ثَمَنُ{e|هُ} عِشْرُونَ دِينَارًا.', sub: 'it costs twenty dinars' }] },
      { core: true, cells: ['feminine (ـة)', { ar: '{k|هٰذِهِ} حَقِيبَةٌ.', sub: 'hā-dhi-hi ḥa-qī-ba · this is a bag' }, { ar: 'كَمْ ثَمَنُ{e|هَا}؟', sub: 'kam tha-ma-nu-hā' }, { ar: 'ثَمَنُ{e|هَا} خَمْسُونَ دِينَارًا.', sub: 'it costs fifty dinars' }] },
      { cells: ['plural goods', { ar: '{k|هٰذِهِ} مَلَابِسُ.', sub: 'these are clothes' }, { ar: 'كَمْ ثَمَنُ المَلَابِسِ؟', sub: 'use the noun (website)' }, { ar: 'بِأَرْبَعِينَ دِينَارًا.', sub: 'for forty dinars' }] },
      { cells: ['far: that', { ar: '{k|ذٰلِكَ} الهَاتِفُ · {k|تِلْكَ} الحَقِيبَةُ', sub: 'that phone · that bag' }, { ar: 'وَكَمْ ثَمَنُ{e|هَا}؟', sub: 'and how much is that one?' }, { ar: 'تِلْكَ أَرْخَصُ.', sub: 'that one is cheaper' }] },
    ],
    notes: `GRAMMAR PART 1 — demonstratives and attached pronouns (Topic C grammar focus), built on the website table “Item · Price suffix · Question”.
Teal = the demonstrative: هٰذَا (this, m.) / هٰذِهِ (this, f. and plural things). Row 4 (Develop): ذٰلِكَ / تِلْكَ = that.
Pink = the attached pronoun “it”: ـهُ for a masculine item, ـهَا for a feminine item. The demonstrative and the ending ALWAYS match: هٰذَا … ـهُ · هٰذِهِ … ـهَا.
Website teaching point: “${site.teach[0]}”
Website common error: “${G.common_error}”`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Key words · Group 4 · grammar part 2 · numbers and prices', title: 'Reading a price', ar: 'الأَسْعَارُ',
    cols: [{ label: 'Price', w: 1.6 }, { label: 'The number', w: 3.2, size: 22 }, { label: 'Say the price', w: 3.9, size: 22 }, { label: 'Rule', w: 3.63 }],
    rows: [
      { core: true, cells: ['10 dinars', { ar: 'عَشَرَةٌ', sub: 'ʿa-sha-ra' }, { ar: 'عَشَرَةُ {e|دَنَانِيرَ}', sub: 'ʿa-sha-ra-tu da-nā-nīr' }, '3–10 → plural: دَنَانِيرَ'] },
      { core: true, cells: ['20 dinars', { ar: 'عِشْرُونَ', sub: 'ʿish-rūn' }, { ar: 'عِشْرُونَ {e|دِينَارًا}', sub: 'ʿish-rū-na dī-nā-ran' }, '11–99 → singular + -an: دِينَارًا'] },
      { core: true, cells: ['40 dinars', { ar: 'أَرْبَعُونَ', sub: 'ar-ba-ʿūn' }, { ar: 'أَرْبَعُونَ {e|دِينَارًا}', sub: 'ar-ba-ʿū-na dī-nā-ran' }, 'listening: بِأَرْبَعِينَ = for forty'] },
      { core: true, cells: ['50 dinars', { ar: 'خَمْسُونَ', sub: 'kham-sūn' }, { ar: 'خَمْسُونَ {e|دِينَارًا}', sub: 'kham-sū-na dī-nā-ran' }, 'listening: ثَمَنُهَا خَمْسُونَ'] },
      { cells: ['60 dinars', { ar: 'سِتُّونَ', sub: 'sit-tūn' }, { ar: 'بِسِتِّينَ {e|دِينَارًا}', sub: 'bi-sit-tī-na dī-nā-ran' }, 'after بِـ: -ūn → -īn (advert)'] },
      { cells: ['£24.50', { ar: 'أَرْبَعَةٌ وَعِشْرُونَ', sub: 'four and twenty' }, { ar: 'جُنَيْهًا وَخَمْسُونَ بِنْسًا', sub: 'ju-nay-han wa kham-sū-na bin-san' }, 'units first: “four and twenty” (TC-L07 game)'] },
    ],
    notes: `GRAMMAR PART 2 — numbers for prices (Topic C grammar focus). Teacher-made table using the prices in the website listening, advert and games.
Pink = the ENDING of the currency word, which depends on the number:
• 3–10 → plural, genitive: عَشَرَةُ دَنَانِيرَ (website listening: خَصْمٌ عَشَرَةُ دَنَانِيرَ).
• 11–99 → singular with -an: عِشْرُونَ دِينَارًا · خَمْسُونَ دِينَارًا.
Core: rows 1–4 — the tens. Just say the number + دِينَارًا. Develop: row 5 (after بِـ the tens change -ūn → -īn). Stretch: row 6 — Arabic says units before tens: “four and twenty”.
Currency: دِينَارٌ (pl. دَنَانِيرُ), جُنَيْهٌ (pound), بِنْسٌ (penny), رِيَالٌ, دِرْهَمٌ.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 3 · compare and decide · website rules', title: 'Cheaper, dearer, better value', ar: 'المُقَارَنَةُ',
    cards: [
      { chip: 'CHEAPER · مِنْ', head: 'أَرْخَصُ مِنْ', big: 'الحَافِلَةُ أَرْخَصُ مِنَ التَّاكْسِي', en: 'The bus is cheaper than the taxi.', clue: 'أَرْخَصُ never changes: no ـة for a feminine noun (website rule).' },
      { chip: 'DEARER · مِنْ', color: 'B83227', head: 'أَغْلَى مِنْ', big: 'الهَاتِفُ أَغْلَى مِنَ الكِتَابِ', en: 'The phone is more expensive than the book.', clue: 'غَالٍ → أَغْلَى (irregular, like TC-L08’s أَفْضَلُ).' },
      { chip: 'BETTER VALUE', color: '7B3FA0', head: 'أَفْضَلُ قِيمَةً', big: 'العُبْوَةُ الكَبِيرَةُ أَفْضَلُ قِيمَةً', en: 'The big pack is better value.', clue: 'Website game “Best Buy”: compare price AND amount.' },
    ],
    error: { text: 'The website’s common mistakes: a feminine ending on the comparative, and the wrong “it” ending.', pairs: [['الحَافِلَةُ أَرْخَصُ', 'الحَافِلَةُ أَرْخَصَةٌ'], ['حَقِيبَةٌ … ثَمَنُهَا', 'حَقِيبَةٌ … ثَمَنُهُ']] },
    notes: `GRAMMAR PART 3 — comparing products (website rule “Compare two prices”: “These irregular comparative forms do not change for masculine and feminine nouns”). Card 3 is the website game sentence.
Website teaching point: “${site.teach[1]}” → always finish a comparison with a decision: لِذٰلِكَ سَأَشْتَرِي … (so I will buy …).`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 4 · polite transaction and problems', title: 'Buying, paying and fixing a problem', ar: 'الشِّرَاءُ وَحَلُّ المَشَاكِلِ',
    cards: [
      { chip: 'CORE · I WANT TO BUY', color: '2E8B57', head: 'أُرِيدُ أَنْ أَشْتَرِيَ', big: 'أُرِيدُ أَنْ أَشْتَرِيَ هَدِيَّةً، مِنْ فَضْلِكَ', en: 'I want to buy a gift, please.', clue: 'أَنْ + an I-verb ending in -a: أَشْتَرِيَ (website rule).' },
      { chip: 'DEVELOP · CAN I …?', color: 'C9780A', head: 'هَلْ يُمْكِنُ أَنْ …؟', big: 'هَلْ يُمْكِنُ أَنْ أَدْفَعَ بِالبِطَاقَةِ؟', en: 'Can I pay by card?', clue: 'Also: هَلْ عِنْدَكُمْ …؟ (Do you have …?) · هَلْ هُنَاكَ خَصْمٌ؟' },
      { chip: 'STRETCH · A PROBLEM', color: 'B83227', head: 'أُرِيدُ أَنْ أُبَدِّلَ', big: 'الهَاتِفُ لَا يَعْمَلُ، أُرِيدُ أَنْ أُبَدِّلَهُ', en: 'The phone doesn’t work; I want to exchange it.', clue: 'Say the problem, then what you want: exchange (أُبَدِّلَ) or a refund (أَنْ تُرْجِعُوا المَالَ).' },
    ],
    notes: `GRAMMAR PART 4 — the transaction. Cards 1–2 are the website rule “Make a polite purchase” and the website pattern. Card 3 is teacher-made for the Topic C focus “resolve problems” — used in the Stretch complaint email later in the lesson. Notice ـهُ again: أُبَدِّلَهُ = exchange IT (the phone, masculine).`,
  },
  {
    type: 'ruleRows', stage: 'teach', flex: true, eyebrow: 'Grammar focus · Part 5 · website examples · FLEX', title: 'The four website rules with examples', ar: 'أَمْثِلَةُ القَوَاعِدِ',
    rows: G.rules.map((r) => ({ title: r.heading, formula: r.formula, examples: r.examples })),
    notes: `WEBSITE GRAMMAR RULES AND EXAMPLES (FLEX — use for revision or homework). Website overview: “${G.overview}”`,
  },
  C.quickCheck([fromSite(G.quiz[0]), fromSite(G.quiz[1]), fromSite(G.quiz[2]), fromSite(G.quiz[3])], 'website grammar quiz questions 1–4.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me buy a bag', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Is it available?', ar: 'هَلْ عِنْدَكُمْ حَقَائِبُ صَغِيرَةٌ؟', think: 'Website listening: “Do you have …?”' },
      { head: 'This … how much?', ar: '{k|هٰذِهِ} حَقِيبَةٌ. كَمْ ثَمَنُ{e|هَا}؟', think: 'حَقِيبَةٌ has ـة → هٰذِهِ … ـهَا.' },
      { head: 'Compare', ar: 'السَّوْدَاءُ {p|أَ}رْخَصُ {k|مِنَ} الزَّرْقَاءِ', think: 'أَرْخَصُ مِنْ — no ـة.' },
      { head: 'Pay politely', ar: 'هَلْ يُمْكِنُ أَنْ أَدْفَعَ بِالبِطَاقَةِ؟', think: 'A full, polite request.' },
    ],
    legend: ['k', 'e', 'p'], legendLabels: { k: 'KEY WORD', e: 'ENDING', p: 'PATTERN' },
    model: 'هَلْ عِنْدَكُمْ حَقَائِبُ صَغِيرَةٌ؟ {k|هٰذِهِ} حَقِيبَةٌ جَمِيلَةٌ. كَمْ ثَمَنُ{e|هَا}؟ … السَّوْدَاءُ {p|أَ}رْخَصُ {k|مِنَ} الزَّرْقَاءِ، لِذٰلِكَ سَأَشْتَرِي السَّوْدَاءَ. هَلْ يُمْكِنُ أَنْ أَدْفَعَ بِالبِطَاقَةِ؟',
    modelEn: 'Do you have small bags? This is a nice bag. How much is it? … The black one is cheaper than the blue one, so I will buy the black one. Can I pay by card?',
    notes: `I DO (3 min) — teacher models with a think-aloud (play the customer; a confident student can read the seller). Students COPY the dialogue into their books.
Step 1 — “Ask if they have it: هَلْ عِنْدَكُمْ …؟”
Step 2 — “حَقِيبَةٌ ends in ـة, so: هٰذِهِ … and ثَمَنُهَا. They match!”
Step 3 — “Compare: أَرْخَصُ مِنَ … — the same for masculine and feminine. Then DECIDE: لِذٰلِكَ سَأَشْتَرِي …”
Step 4 — “Pay: هَلْ يُمْكِنُ أَنْ أَدْفَعَ بِالبِطَاقَةِ؟”
Built from the website listening (the blue and black bags) and website patterns.`,
  },
  {
    type: 'models', stage: 'ido', min: 1, eyebrow: 'I do · model sentences from the website', title: 'Four sentences to borrow', ar: 'جُمَلٌ نَمُوذَجِيَّةٌ',
    rows: site.patterns.map((p) => ({ ar: p.ar, en: p.en, tip: p.tip })),
    notes: `MODEL SENTENCES (1 min) — the website patterns. Students copy TWO that are useful for them.
• Core: copy 1 and 2 and change the item (هٰذَا تَذْكَارٌ … / هٰذِهِ هَدِيَّةٌ …). • Develop: copy 3 with two new items. • Stretch: copy 4 and add a discount question (هَلْ هُنَاكَ خَصْمٌ؟).`,
  },
  C.gameSlide(game, {
    en: ['The second shirt is cheaper than the first shirt.', 'The large pack is better value.', 'There is a discount of twenty-five per cent.'],
    icons: [[['fa6', 'FaShirt', '5A6472'], ['fa6', 'FaShirt', '2E8B57']], [['fa6', 'FaBoxOpen', 'C77700'], ['fa6', 'FaScaleBalanced', '1B3B6F']], [['fa6', 'FaTag', 'B83227']]],
    labels: ['£20 vs £15', '2 kg £6 vs 1 kg £4', '−25%'],
    order: [1, 2, 0],
    notes: 'Key words to spot: أَرْخَصُ مِنْ (cheaper than), أَفْضَلُ قِيمَةً (better value), خَصْمٌ (discount). Stretch: prove the big pack is better value (£3 a kilo vs £4 a kilo) — in Arabic if you can.',
  }),
  {
    type: 'passage', stage: 'wedo', min: 2, eyebrow: 'We do · read an advert · website reading', title: 'Today’s offers at the shopping centre', ar: 'عُرُوضُ اليَوْمِ',
    docLines: advert,
    glossaryHead: 'KEY WORDS',
    glossary: [
      ['عُرُوضُ اليَوْمِ', 'today’s offers'], ['بِخَصْمِ', 'with a discount of'], ['فِي المِئَةِ', 'per cent'], ['حَقِيبَةُ السَّفَرِ', 'travel bag'], ['أَرْخَصُ مِنْهَا', 'cheaper than it'],
      ['غَالٍ', 'expensive'], ['سَمَّاعَاتٌ', 'headphones'], ['مَجَّانِيَّةٌ', 'free'], ['يُمْكِنُ الدَّفْعُ', 'you can pay'], ['اِحْتَفِظْ بِـ', 'keep!'],
    ],
    notes: `READ AN ADVERT (2 min) — the website reading “Special offers in the shopping centre”, set out line by line like a real advert (Topic C focus “Understand adverts and transactions”).
Read it aloud once while students follow. SEND: cover the text and uncover one line at a time; Core students use the glossary.
Point out: أَرْخَصُ مِنْهَا = cheaper than IT (ـهَا = the big bag); اِحْتَفِظْ = an instruction, like TC-L07’s أَحْضِرْ.
Website note: the website text writes بِعِشْرَةِ دَنَانِيرَ; the number ten is عَشَرَة (with fatḥa on the shīn) — corrected here to بِعَشَرَةِ.
Translation for the teacher: Today’s offers at Al-Noor shopping centre: Books with a 20% discount. The large travel bag is 60 dinars, and the small bag is 10 dinars cheaper. The new phone is expensive, but it comes with free headphones. You can pay in cash or by card. Keep the receipt for 30 days.`,
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · advert questions · website', title: 'Find the facts in the advert', ar: 'أَسْئِلَةُ الإِعْلَانِ',
    seed: 4,
    questions: site.reading.questions.slice(0, 5).map((x) => fromSite(x)),
    side: { kind: 'core', label: 'CORE', text: 'Find the KEY WORD first.\ndiscount? خَصْم\nbag? حَقِيبَة\nfree? مَجَّانِيَّة\npay? الدَّفْع' },
    answerSlide: { eyebrow: 'We do · advert answers', title: 'Advert: answers', ar: 'الإِجَابَاتُ' },
    notes: 'ADVERT QUESTIONS — the website reading questions 1–5 (question 6 is in the teacher notes: How long should the receipt be kept? → 30 days, لِمُدَّةِ ثَلَاثِينَ يَوْمًا). Students type five letters in the chat. Core: questions 1, 2 and 5 with the key-word clues. Stretch: how much is the small bag? (60 − 10 = 50 dinars).',
    answerNotes: 'Reveal. For each answer, a student reads the exact line from the advert (by invitation). Ask: which offer is the best? Why?',
  },
  {
    type: 'builder', stage: 'wedo', min: 3, eyebrow: 'We do · guided practice · website sentence builder', title: 'Build the sentence', ar: 'اِبْنِ الجُمْلَةَ',
    rows: [
      { en: 'This is a bag. How much is it?', cols: [['هٰذَا كِتَابٌ.', 'هٰذِهِ حَقِيبَةٌ.'], ['أَيْنَ', 'كَمْ'], ['ثَمَنُهَا؟', 'ثَمَنُهُ؟']], key: [1, 1, 0], why: 'حَقِيبَةٌ is feminine → هٰذِهِ … ثَمَنُهَا.' },
      { en: 'The bus is cheaper than the taxi.', cols: [['الحَافِلَةُ', 'سَيَّارَةُ الأُجْرَةِ'], ['أَغْلَى مِنْ', 'أَرْخَصُ مِنْ'], ['سَيَّارَةِ الأُجْرَةِ.', 'الحَافِلَةِ.']], key: [0, 1, 0], why: 'أَرْخَصُ مِنْ = cheaper than.' },
      { en: 'I want to buy a gift, please.', cols: [['هَلْ', 'أُرِيدُ أَنْ'], ['أَشْتَرِيَ', 'يَشْتَرِي'], ['ثَمَنُهَا؟', 'هَدِيَّةً، مِنْ فَضْلِكَ.']], key: [1, 0, 1], why: 'أُرِيدُ أَنْ + أَشْتَرِيَ (I-verb).' },
    ],
    answerSlide: { min: 0, eyebrow: 'We do · sentence builder answers', title: 'Check your sentences', ar: 'تَحَقَّقْ مِنْ جُمَلِكَ' },
    notes: `WE DO — the website sentence builders (3 min), with the options reordered so the answers are not always A.
Students choose ONE box per column (start from Column 1 on the right) and type the letters, e.g. “1: B B A”. ↔ Rehearse 30s first.
Core: sentences 1 and 3. Develop / Stretch: sentence 2 and explain the wrong options.`,
  },
  {
    type: 'sorter', stage: 'wedo', min: 2, eyebrow: 'We do · website sorter', title: 'Masculine or feminine price question?', ar: 'ثَمَنُهُ أَمْ ثَمَنُهَا؟',
    categories: ['Masculine: ask “thamanuhu”', 'Feminine: ask “thamanuhā”'],
    items: [
      { ar: 'حَقِيبَةٌ', cat: 1 }, { ar: 'كِتَابٌ', cat: 0 }, { ar: 'هَدِيَّةٌ', cat: 1 }, { ar: 'هَاتِفٌ', cat: 0 },
      { ar: 'تَذْكَارٌ', cat: 0 }, { ar: 'فَاتُورَةٌ', cat: 1 }, { ar: 'حِذَاءٌ', cat: 0 }, { ar: 'تَذْكِرَةٌ', cat: 1 },
    ],
    answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
    notes: `WE DO — website sorter “${site.sorter.title}” (2 min, all students). Clue for Core: look at the LAST letter. ـة → feminine → ثَمَنُهَا.
Stretch trap: تَذْكَارٌ (souvenir) and تَذْكِرَةٌ (ticket) look alike — only one ends in ـة.`,
  },
  C.morePractice([fromSite(G.quiz[4], { n: 5 }), fromSite(G.quiz[5], { n: 6 }), fromSite(G.quiz[6], { n: 7 }), fromSite(G.quiz[7], { n: 8 })], 'website quiz 5–8'),
  C.repairSlide({
    ...site,
    mistakes: [
      { wrong: 'هٰذِهِ حَقِيبَةٌ. كَمْ ثَمَنُهُ؟', right: 'هٰذِهِ حَقِيبَةٌ. كَمْ ثَمَنُهَا؟', why: site.mistakes[0].why },
      site.mistakes[1],
      site.mistakes[2],
    ],
  }, [
    'What is wrong? Is حَقِيبَةٌ masculine or feminine?',
    'What is wrong? Does أَرْخَصُ change for a feminine noun?',
    'What is wrong? Which small word comes after أُرِيدُ?',
  ]),
  C.listening(site, {
    coreTip: 'Listen twice. Core: questions 1–3 — listen for حَقَائِبُ (bags), خَمْسُونَ (fifty) and أَرْخَصُ (cheaper).',
    routes: 'Core: questions 1–3. Develop / Stretch: all 5.',
    gloss: [
      ['الزَّبُونَةُ: السَّلَامُ عَلَيْكُمْ. هَلْ عِنْدَكُمْ حَقَائِبُ صَغِيرَةٌ؟', 'Customer: Hello. Do you have small bags?'],
      ['البَائِعُ: نَعَمْ، هٰذِهِ حَقِيبَةٌ زَرْقَاءُ وَثَمَنُهَا خَمْسُونَ دِينَارًا.', 'Seller: Yes, this is a blue bag and it costs fifty dinars.'],
      ['وَهٰذِهِ حَقِيبَةٌ سَوْدَاءُ بِأَرْبَعِينَ.', 'And this is a black bag for forty.'],
      ['الزَّبُونَةُ: السَّوْدَاءُ أَرْخَصُ، وَلٰكِنَّ الزَّرْقَاءَ أَجْمَلُ. هَلْ هُنَاكَ خَصْمٌ؟', 'Customer: The black one is cheaper, but the blue one is nicer. Is there a discount?'],
      ['البَائِعُ: نَعَمْ، خَصْمٌ عَشَرَةُ دَنَانِيرَ.', 'Seller: Yes, a discount of ten dinars.'],
      ['الزَّبُونَةُ: جَيِّدٌ. أُرِيدُ الزَّرْقَاءَ. هَلْ يُمْكِنُ أَنْ أَدْفَعَ بِالبِطَاقَةِ؟', 'Customer: Good. I want the blue one. Can I pay by card?'],
    ],
  }),
  C.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: site.speaking.prompts[0] },
      { route: 'core', ar: site.speaking.prompts[1] },
      { route: 'develop', ar: site.speaking.prompts[2] },
      { route: 'stretch', ar: site.speaking.prompts[3] },
    ],
    stems: [
      { route: 'core', ar: 'هٰذَا / هٰذِهِ ______ . كَمْ ثَمَنُهُ / ثَمَنُهَا؟' },
      { route: 'develop', ar: '______ أَرْخَصُ مِنْ ______ .' },
      { route: 'stretch', ar: 'لٰكِنَّ ______ لَا يَعْمَلُ، أُرِيدُ أَنْ ______ .' },
      { route: 'sum', ar: 'اِشْتَرَى / اِشْتَرَتْ ______ بِـ ______ .' },
    ],
    modelEn: ['Do you have a small souvenir?', 'Yes, this is a nice souvenir and it costs fifteen dinars.'],
    notes: 'ROLE PLAY (website “Market bargaining and payment role play”): A = customer, B = seller; swap after 45 s. Stretch pairs add a problem: the item does not work → exchange or refund (Part 4, card 3).',
  }),
  C.routesSlide(site, {
    core: { amount: '4 lines', how: 'Use the frames and word bank on the next slide: “this is …”, the price question and the price.' },
    develop: { amount: '6 lines', how: 'Add a comparison (cheaper / dearer than), a discount question and your decision (“so I will buy …”).' },
    stretch: { amount: '6–8 lines', how: 'Website writing task: a shop dialogue comparing two purchases, plus a problem to fix; checklist on the Stretch slide.' },
  }),
  C.framesSlide({
    core: [
      { en: 'Do you have …?', ar: 'هَلْ عِنْدَكُمْ ______ ؟' },
      { en: 'This (m.) is … How much is it?', ar: 'هٰذَا ______ . كَمْ ثَمَنُهُ؟' },
      { en: 'This (f.) is … How much is it?', ar: 'هٰذِهِ ______ . كَمْ ثَمَنُهَا؟' },
      { en: 'It costs … dinars.', ar: 'ثَمَنُهُ / ثَمَنُهَا ______ دِينَارًا .' },
      { en: 'I want to buy …, please.', ar: 'أُرِيدُ أَنْ أَشْتَرِيَ ______ ، مِنْ فَضْلِكَ .' },
    ],
    develop: [
      { en: '… is cheaper than …', ar: '______ أَرْخَصُ مِنْ ______ .' },
      { en: '… is more expensive than …', ar: '______ أَغْلَى مِنْ ______ .' },
      { en: 'Is there a discount?', ar: 'هَلْ هُنَاكَ خَصْمٌ؟' },
      { en: 'So I will buy …', ar: 'لِذٰلِكَ سَأَشْتَرِي ______ .' },
      { en: 'Can I pay by card?', ar: 'هَلْ يُمْكِنُ أَنْ أَدْفَعَ بِالبِطَاقَةِ؟' },
    ],
    bank: ['كِتَابٌ', 'حَقِيبَةٌ', 'هَاتِفٌ', 'هَدِيَّةٌ', 'تَذْكَارٌ', 'حِذَاءٌ', 'عَشَرَةُ دَنَانِيرَ', 'عِشْرُونَ', 'خَمْسُونَ', 'خَصْمٌ', 'نَقْدًا', 'بِالبِطَاقَةِ'],
  }),
  C.stretchSlide(site, [
    ['هَلْ عِنْدَكُمْ … مَحَلِّيَّةٌ؟', 'do you have local …?'],
    ['كَمْ ثَمَنُهُ؟ وَكَمْ ثَمَنُهَا؟', 'how much is it (m.)? and (f.)?'],
    ['… أَغْلَى مِنْهُ بِخَمْسَةِ دَنَانِيرَ', '… is five dinars dearer than it'],
    ['… أَرْخَصُ وَأَنْسَبُ', '… is cheaper and more suitable'],
    ['هَلْ هُنَاكَ خَصْمٌ؟', 'is there a discount?'],
    ['لٰكِنَّهُ لَا يَعْمَلُ، أُرِيدُ أَنْ أُبَدِّلَهُ', 'but it doesn’t work; I want to exchange it'],
  ]),
  C.modelSlide(site,
    'Customer: Do you have local gifts? · Seller: Yes, this is a book about the city, and this is a small bag. · Customer: How much is it (the book)? And how much is it (the bag)? · Seller: The book costs twenty dinars, and the bag is five dinars more expensive than it. · Customer: The book is cheaper and more suitable. Is there a discount? And can I pay by card?',
    ['هٰذَا · هٰذِهِ', 'ثَمَنُهُ · ثَمَنُهَا', 'أَغْلَى مِنْهُ', 'أَرْخَصُ'],
    'Core students find هٰذَا / هٰذِهِ and the two price questions; Stretch explain what مِنْهُ refers to (the book).'),
  C.selfCheckSlide([
    { route: 'core', text: 'I can choose هٰذَا or هٰذِهِ for an item.' },
    { route: 'core', text: site.success[0] },
    { route: 'develop', text: site.success[1] + ' (أَرْخَصُ / أَغْلَى مِنْ)' },
    { route: 'develop', text: site.success[2] },
    { route: 'stretch', text: 'I can explain a problem and ask for an exchange or a refund.' },
  ]),
  C.exitTicket([fromSite(site.final[5]), fromSite(site.final[1]), fromSite(site.final[3])], site.final.length),
  {
    type: 'passage', stage: 'youdo', flex: true, min: 0, eyebrow: 'Extension · fast finishers or homework · resolve a problem', title: 'A complaint to customer service', ar: 'شَكْوَى',
    docLines: complaint,
    glossaryHead: 'KEY WORDS',
    glossary: [
      ['خِدْمَةُ الزَّبَائِنِ', 'customer service'], ['اِشْتَرَيْتُ', 'I bought'], ['بِمِئَتَيْ دِينَارٍ', 'for 200 dinars'], ['لَا يَعْمَلُ', 'does not work'], ['لَيْسَتْ', 'are not'],
      ['العُلْبَةِ', 'the box'], ['صُورَتُهَا', 'a photo of it'], ['أُبَدِّلَ', 'exchange'], ['تُرْجِعُوا لِي المَالَ', 'give me a refund'],
    ],
    notes: `EXTENSION (FLEX — Stretch, fast finishers or homework) — Topic C focus “resolve problems”. A teacher-made complaint email linked to the website advert (the new phone with free headphones).
Translation for the teacher: To: Customer service — Al-Noor shopping centre. I bought this phone on Saturday for 200 dinars. But the phone does not work, and the headphones are not in the box. I have the receipt, and this is a photo of it. I want to exchange the phone for a new phone, or for you to give me my money back. Thank you — Sara.
Notice the attached pronouns: صُورَتُهَا (a photo of IT — the receipt, فَاتُورَةٌ, feminine).`,
  },
  {
    type: 'mcq', stage: 'youdo', flex: true, min: 0, eyebrow: 'Extension · complaint questions', title: 'What is the problem?', ar: 'مَا المُشْكِلَةُ؟',
    seed: 5,
    questions: [
      q('When did Sara buy the phone?', ['On Saturday', 'On Sunday', 'Yesterday'], 'اِشْتَرَيْتُ هٰذَا الهَاتِفَ يَوْمَ السَّبْتِ.'),
      q('How much did it cost?', ['200 dinars', '20 dinars', '100 dinars'], 'بِمِئَتَيْ دِينَارٍ (مِئَتَانِ = 200).'),
      q('What are the TWO problems?', ['It does not work and the headphones are missing.', 'It is too expensive and too big.', 'The receipt is lost and the box is broken.'], 'لَا يَعْمَلُ … وَالسَّمَّاعَاتُ لَيْسَتْ فِي العُلْبَةِ.'),
      q('What does صُورَتُهَا refer to?', ['the receipt', 'the phone', 'the box'], 'ـهَا = feminine: الفَاتُورَةُ.'),
      q('What does Sara want?', ['An exchange or a refund', 'A discount on a new phone', 'Free headphones only'], 'أُرِيدُ أَنْ أُبَدِّلَ … أَوْ أَنْ تُرْجِعُوا لِي المَالَ.'),
    ],
    side: { kind: 'info', head: 'READ LIKE A DETECTIVE', text: '1. Read the question first.\n2. Find ONE key word from the question in the text.\n3. Read only that sentence again, then choose.' },
    answerSlide: { eyebrow: 'Extension · complaint answers', title: 'Complaint: answers', ar: 'الإِجَابَاتُ' },
    notes: 'EXTENSION questions (teacher-made). Then write Sara’s reply from customer service: نَعْتَذِرُ … يُمْكِنُكِ أَنْ تُبَدِّلِي الهَاتِفَ … (We apologise … you can exchange the phone …).',
    answerNotes: 'Reveal and discuss question 4: the attached pronoun always points back to a noun — find it and check the gender.',
  },
  C.prepSlide({
    ...NEXT,
    words: [['طُوبٌ', 'brick', ''], ['خَرَسَانَةٌ', 'concrete', ''], ['مَعْدِنٌ', 'metal', 'pl. مَعَادِنُ'], ['مِتْرٌ', 'metre', 'pl. أَمْتَارٌ'], ['طُولٌ', 'length', '']],
    questionEn: 'Write one Arabic sentence: what is your house or school built of?',
    questionAr: 'مِنْ أَيِّ مَادَّةٍ بَيْتُكَ مَبْنِيٌّ؟',
    homework: {
      core: 'Website · TC-L09 · play “Best Buy”, then the vocabulary mission.',
      develop: 'Find a real advert (English is fine) and write 5 Arabic lines about it: this is …, it costs …, it is cheaper than …',
      stretch: 'Write customer service’s reply to Sara’s complaint (5–6 lines).',
    },
    wordsSource: 'The five words come from the website lesson (F6-L07 “The Built Environment”) and the Topic C “Measurements” bank.',
  }),
  C.closeSlide(NEXT),
];

module.exports = { meta, slides };
