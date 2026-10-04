'use strict';
/* GM-NUM-04 · Money — website: Mastery & Revision › Numeracy Mastery 04 (bi-kam hādhā? · kam thamanu …? · kam siʿru …?; bi- as the price
 * tag; currencies junayh, riyāl, dirham, dīnār, dūlār — all masculine, so the Age Ladder mirrors: khamsatu junayhātin, khamsata ʿashara
 * junayhan; the over-correction trap; ghālin / rakhīṣ, aghlā / arkhaṣ min, takhfīḍ, al-bāqī; the five-move souq dialogue; hundreds and
 * subunits as Stretch). The website quizzes are interactive and not stored, so all questions are teacher-written on the website content.
 * Spelling: the deck uses مِئَة (website: مِائَة). */
const G = require('./gm-common');
const { q } = G;

const KEY = 'numeracy__numbers__numeracy-mastery-04-money';

const meta = G.meta({
  code: 'GM-NUM-04', fileTitle: 'Money', title: 'Money', arabic: 'الْمَالُ',
  focus: 'Bi-kam hādhā? — How much is this? Currencies are masculine, so prices MIRROR ages: khamsu sanawātin but khamsatu junayhātin; khamsa ʿashrata sanatan but khamsata ʿashara junayhan. React, haggle, pay and get your change.',
  icon: 'FaCoins',
});

const slides = G.gmLesson({
  code: 'GM-NUM-04', site: KEY,
  support: `• Core: بِكَمْ هَذَا؟ · كَمْ ثَمَنُ …؟ and prices 1–99 with جُنَيْهٌ and رِيَالٌ. Develop: shop words (غَالٍ · رَخِيصٌ · تَخْفِيضٌ · الْبَاقِي) and the five-move souq dialogue with a calculation. Stretch: the Age–Money mirror explained, hundreds (مِئَتَانِ وَخَمْسُونَ) and subunits (قِرْشًا).
• Website over-correction trap: after the Age lesson students write ✗ خَمْسُ جُنَيْهَاتٍ. Junayh is masculine → the number KEEPS its ة: خَمْسَةُ جُنَيْهَاتٍ. The rule was never “drop the ة” — it was always “flip”.
• Heritage link (website): haggling (al-musāwama) is friendly theatre in a souq — and in the bazaars of Lahore and Karachi.`,
  teach: 'Price questions; currencies and the mirror; shop words; the souq dialogue.',
  wedo: 'Read the prices; sort age / money; repair.',
  next: { nextCode: 'GM-NUM-05', nextTitle: 'Measurements', nextAr: 'الْوَزْنُ وَالْقِيَاسُ' },
  doNow: {
    questions: [
      q('Choose “I am 5”.', ['عُمْرِي خَمْسُ سَنَوَاتٍ', 'عُمْرِي خَمْسَةُ سَنَوَاتٍ', 'عُمْرِي خَمْسُ سَنَةً'], 'GM-NUM-03: sana is feminine.'),
      q('Is جُنَيْهٌ masculine or feminine?', ['masculine', 'feminine', 'both'], 'No tāʾ marbūṭa.'),
      q('What does بِكَمْ؟ mean?', ['how much (does it cost)?', 'how many?', 'when?'], 'Prep word.'),
      q('What does السِّعْرُ mean?', ['the price', 'the money', 'the shop'], 'Prep word.'),
      q('Choose “cheaper than”.', ['أَرْخَصُ مِنْ', 'أَكْبَرُ مِنْ', 'أَغْلَى مِنْ'], 'afʿal pattern (GM-NUM-03).'),
    ],
    keyIdea: { text: 'Currencies are masculine → 3–10 keep the ة; 11–99 take a singular noun with -an. Prices mirror ages.', ar: '{e|خَمْسُ سَنَوَاتٍ} ‖ {k|خَمْسَةُ جُنَيْهَاتٍ}' },
    retrieves: 'Teacher-written retrieval from GM-NUM-03 (the Age Ladder) and the prep words.',
  },
  objectives: ['Ask and understand prices.', 'Say prices 1–99 with masculine currencies.', 'React to prices, ask for a discount and get change.', 'Perform a complete souq dialogue.'],
  routes: {
    core: ['I ask bi-kam hādhā? and understand the answer.', 'I say prices with junayh and riyāl.'],
    develop: ['I haggle: hādhā ghālin! ʿindaka takhfīḍ?', 'I calculate al-bāqī (the change).'],
    stretch: ['I explain the Age–Money mirror.', 'I say 250 and 12.50 in Arabic.'],
  },
  terms: {
    items: [
      { ar: 'بِكَمْ؟', en: 'how much? (for how much)', note: 'بِكَمْ هَذَا؟' },
      { ar: 'الثَّمَنُ · السِّعْرُ', en: 'the price', note: 'كَمْ ثَمَنُ الْكِتَابِ؟' },
      { ar: 'الْعُمْلَةُ', en: 'currency', note: 'جُنَيْهٌ · رِيَالٌ' },
      { ar: 'غَالٍ · رَخِيصٌ', en: 'expensive · cheap', note: 'هَذَا غَالٍ!' },
      { ar: 'التَّخْفِيضُ', en: 'discount', note: 'عِنْدَكَ تَخْفِيضٌ؟' },
      { ar: 'الْبَاقِي', en: 'the change', note: 'وَهَذَا الْبَاقِي' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Money · part 1 · asking the price (website table)', title: 'Bi-kam hādhā?', ar: 'بِكَمْ هَذَا؟', ltr: true,
      cols: [{ label: 'Arabic', w: 5.0, size: 22 }, { label: 'Meaning', w: 3.6 }, { label: 'Note', w: 3.73 }],
      rows: [
        { core: true, cells: ['بِكَمْ هَذَا؟', 'How much is this? (m. item)', 'everyday favourite'] },
        { core: true, cells: ['بِكَمْ هَذِهِ الْحَقِيبَةُ؟', 'How much is this bag?', 'hādhihi for f. items'] },
        { cells: ['كَمْ ثَمَنُ الْكِتَابِ؟', 'What is the price of the book?', 'thaman = price'] },
        { cells: ['كَمْ سِعْرُ الْقَلَمِ؟', 'What is the price of the pen?', 'siʿr = price'] },
        { core: true, cells: ['الْقَلَمُ بِثَلَاثَةِ جُنَيْهَاتٍ.', 'The pen is three pounds.', 'answer with bi-'] },
      ],
      foot: 'Website: bi- is the sticky price tag — ask with it (bi-kam?) and answer with it (bi-ʿasharati junayhātin). After bi- the number takes kasra.',
      notes: 'PART 1 (3 min) — website “Asking the price”. Same kam as kami s-sāʿa and kam ʿumruka.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Money · part 2 · currencies and the mirror (website tables)', title: 'Money mirrors age', ar: 'الْعُمْلَاتُ وَالْمِرْآةُ', ltr: true,
      cols: [{ label: 'Amount', w: 1.6 }, { label: 'Age (sana · fem.)', w: 4.6, size: 22 }, { label: 'Money (junayh · masc.)', w: 6.13, size: 22 }],
      rows: [
        { core: true, cells: ['1', 'سَنَةٌ وَاحِدَةٌ', 'جُنَيْهٌ وَاحِدٌ'] },
        { core: true, cells: ['2', 'سَنَتَانِ', 'جُنَيْهَانِ'] },
        { core: true, cells: ['5', 'خَمْسُ سَنَوَاتٍ', 'خَمْسَةُ جُنَيْهَاتٍ'] },
        { core: true, cells: ['15', 'خَمْسَ عَشْرَةَ سَنَةً', 'خَمْسَةَ عَشَرَ جُنَيْهًا'] },
        { cells: ['25', 'خَمْسٌ وَعِشْرُونَ سَنَةً', 'خَمْسَةٌ وَعِشْرُونَ جُنَيْهًا'] },
        { cells: ['100', 'مِئَةُ سَنَةٍ', 'مِئَةُ جُنَيْهٍ'] },
      ],
      foot: 'Website: other masculine currencies — riyāl (Saudi Arabia, Qatar), dirham (UAE, Morocco), dīnār (Kuwait, Jordan), dūlār. Junayh istirlīnī = the British pound £. Same rungs, opposite clothes.',
      notes: 'PART 2 (4 min) — website “Currencies — and the Mirror”. Ask the GM-NUM-01 question: singular? gender? then flip.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Money · part 3 · shopping words and the five moves (website) · Develop / Stretch', title: 'React, haggle, pay', ar: 'مُفْرَدَاتُ التَّسَوُّقِ', ltr: true,
      cols: [{ label: 'Move', w: 2.6 }, { label: 'Arabic', w: 5.8, size: 22 }, { label: 'Meaning', w: 3.93 }],
      rows: [
        { core: true, cells: ['① greet', 'السَّلَامُ عَلَيْكُمْ.', 'Peace be upon you.'] },
        { core: true, cells: ['② ask', 'بِكَمْ هَذِهِ الْحَقِيبَةُ؟', 'How much is this bag?'] },
        { core: true, cells: ['③ react / haggle', 'هَذَا غَالٍ جِدًّا! عِنْدَكَ تَخْفِيضٌ؟', 'Too expensive! A discount?'] },
        { cells: ['④ agree / pay', 'سَآخُذُهَا. تَفَضَّلْ.', 'I’ll take it. Here you are.'] },
        { cells: ['⑤ change / thanks', 'وَهَذَا الْبَاقِي. شُكْرًا!', 'And here is the change. Thanks!'] },
        { cells: ['compare', 'هَذَا أَغْلَى مِنْ ذَلِكَ · أَرْخَصُ مِنْ', 'more expensive · cheaper than'] },
      ],
      foot: 'Website: ghālin is a “defective” adjective — learn the chunk hādhā ghālin! as it is (al-ghālī, ghāliya behave normally). Stretch: 250 = miʾatāni wa-khamsūna junayhan; 12.50 = ithnā ʿashara junayhan wa-khamsūna qirshan.',
      notes: 'PART 3 (3 min) — website “Shopping words” and “The souq dialogue” five-move script.',
    },
  ],
  quick: [
    q('Choose “five pounds”.', ['خَمْسَةُ جُنَيْهَاتٍ', 'خَمْسُ جُنَيْهَاتٍ', 'خَمْسَةُ جُنَيْهًا'], 'Masculine → number keeps ة.'),
    q('Choose “twenty riyals”.', ['عِشْرُونَ رِيَالًا', 'عِشْرُونَ رِيَالَاتٍ', 'عِشْرُونَ رِيَالٌ'], '11–99: singular -an.'),
    q('Choose “How much is this bag?”', ['بِكَمْ هَذِهِ الْحَقِيبَةُ؟', 'بِكَمْ هَذَا الْحَقِيبَةُ؟', 'كَمْ هَذِهِ الْحَقِيبَةَ؟'], 'Feminine item: hādhihi.'),
    q('A shirt is 70; you pay 100. The change is …', ['ثَلَاثُونَ جُنَيْهًا', 'ثَلَاثُ جُنَيْهَاتٍ', 'سَبْعُونَ جُنَيْهًا'], '100 − 70 = 30.'),
  ],
  quickNote: 'teacher-written hinge questions on the website rules.',
  ido: {
    title: 'Watch me haggle for a shirt',
    steps: [
      { head: 'Ask', ar: 'بِكَمْ هَذَا الْقَمِيصُ؟', think: 'qamīṣ masc.: hādhā.' },
      { head: 'React', ar: 'هَذَا غَالٍ جِدًّا!', think: 'The chunk.' },
      { head: 'Pay', ar: 'مِئَةُ جُنَيْهٍ', think: '100 + genitive singular.' },
      { head: 'Change', ar: 'ثَلَاثُونَ جُنَيْهًا', think: '11–99: -an.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'PRICE', e: 'SHOP PHRASE' },
    model: 'الزَّبُونُ: {e|بِكَمْ} هَذَا الْقَمِيصُ؟ الْبَائِعُ: {k|بِثَمَانِينَ جُنَيْهًا}. الزَّبُونُ: {e|هَذَا غَالٍ جِدًّا! عِنْدَكَ تَخْفِيضٌ؟} الْبَائِعُ: حَسَنًا، {k|سَبْعُونَ جُنَيْهًا} لَكَ. الزَّبُونُ: سَآخُذُهُ. تَفَضَّلْ، {k|مِئَةُ جُنَيْهٍ}. الْبَائِعُ: وَهَذَا {e|الْبَاقِي}: {k|ثَلَاثُونَ جُنَيْهًا}.',
    modelEn: 'Customer: How much is this shirt? Seller: Eighty pounds. Customer: That’s very expensive! Do you have a discount? Seller: All right — seventy pounds for you. Customer: I’ll take it. Here you are, a hundred pounds. Seller: And here is your change: thirty pounds.',
    notes: 'Website listening “Shop transaction” (80 → 70 · paid 100 · change 30).',
  },
  models: [
    { ar: 'كَمْ ثَمَنُ الْكِتَابِ؟', en: 'What is the price of the book?', tip: 'thaman.' },
    { ar: 'الْقَلَمُ بِثَلَاثَةِ جُنَيْهَاتٍ.', en: 'The pen is three pounds.', tip: 'bi- + flip.' },
    { ar: 'هَذَا رَخِيصٌ — سَآخُذُهُ!', en: 'This is cheap — I’ll take it!', tip: 'React.' },
    { ar: 'الْحَقِيبَةُ أَغْلَى مِنَ الْقَمِيصِ.', en: 'The bag is more expensive than the shirt.', tip: 'Compare.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · the sale advert (website Task A) · say it aloud', title: 'Was … now …', ar: 'مَكْتَبَةُ الْأَمَلِ — تَنْزِيلَاتٌ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Item', w: 2.2, size: 24 }, { label: 'Was', w: 4.4, size: 22 }, { label: 'Now', w: 5.73, size: 22 }],
      rows: [
        { core: true, cells: ['قَلَمٌ', 'بِسِتَّةِ جُنَيْهَاتٍ', 'بِأَرْبَعَةِ جُنَيْهَاتٍ (4)'] },
        { core: true, cells: ['دَفْتَرٌ', 'بِعَشَرَةِ جُنَيْهَاتٍ', 'بِسَبْعَةِ جُنَيْهَاتٍ (7)'] },
        { core: true, cells: ['حَقِيبَةٌ', 'بِسِتِّينَ جُنَيْهًا', 'بِخَمْسَةٍ وَأَرْبَعِينَ جُنَيْهًا (45)'] },
        { cells: ['قَامُوسٌ', 'بِمِئَةِ جُنَيْهٍ', 'بِنِصْفِ الثَّمَنِ (50)'] },
        { cells: ['قَلَمٌ + دَفْتَرٌ', '—', 'أَحَدَ عَشَرَ جُنَيْهًا (11)'] },
      ],
      foot: 'Website Task A: the dictionary price is never written — bi-niṣfi th-thaman means you must calculate it. The pen is the cheapest: al-qalamu arkhaṣu shayʾ!',
      notes: 'WE DO (3 min) — website Task A. Ask: how much do you save on the bag? (15 pounds).',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · the mirror · age or money?', title: 'Feminine sana, or masculine junayh?', ar: 'سَنَةٌ أَمْ جُنَيْهٌ؟',
      categories: ['Age (number without ة)', 'Money (number with ة)'],
      items: [['ثَلَاثُ سَنَوَاتٍ', 0], ['سَبْعُ سَنَوَاتٍ', 0], ['تِسْعُ سَنَوَاتٍ', 0], ['أَرْبَعُ سَنَوَاتٍ', 0], ['ثَلَاثَةُ جُنَيْهَاتٍ', 1], ['سَبْعَةُ رِيَالَاتٍ', 1], ['تِسْعَةُ دَرَاهِمَ', 1], ['أَرْبَعَةُ دَنَانِيرَ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Website Mirror: same rungs, opposite clothes. Dirham → darāhim, dīnār → danānīr (broken plurals).',
    },
  ],
  mistakes: [
    { wrong: 'خَمْسُ جُنَيْهَاتٍ', right: 'خَمْسَةُ جُنَيْهَاتٍ', why: 'Junayh is masculine → keep the ة (website over-correction trap).' },
    { wrong: 'عِشْرُونَ جُنَيْهَاتٍ', right: 'عِشْرُونَ جُنَيْهًا', why: '11–99: singular noun with -an.' },
    { wrong: 'هَذَا غَالِي جِدًّا', right: 'هَذَا غَالٍ جِدًّا', why: 'Learn the chunk ghālin (website).' },
  ],
  hints: ['Is junayh feminine?', 'Which rung for 20?', 'Which ending on ghālin?'],
  practice: [
    q('Choose “fifteen pounds”.', ['خَمْسَةَ عَشَرَ جُنَيْهًا', 'خَمْسَ عَشْرَةَ جُنَيْهًا', 'خَمْسَةَ عَشَرَ جُنَيْهَاتٍ'], 'Masculine teen + singular.'),
    q('Choose “two dirhams”.', ['دِرْهَمَانِ', 'اثْنَانِ دِرْهَمًا', 'دِرْهَمَيْنِ اثْنَيْنِ'], 'The dual.'),
    q('Choose “Do you have a discount?”', ['عِنْدَكَ تَخْفِيضٌ؟', 'عِنْدَكَ الْبَاقِي؟', 'بِكَمْ تَخْفِيضٌ؟'], 'takhfīḍ = discount.'),
    q('Choose 250 pounds (Stretch).', ['مِئَتَانِ وَخَمْسُونَ جُنَيْهًا', 'مِئَتَا وَخَمْسُونَ جُنَيْهٌ', 'خَمْسُونَ وَمِئَتَانِ جُنَيْهًا'], 'Dual hundred + ten.'),
  ],
  practiceLabel: 'teacher-written questions on the website rules',
  read: {
    title: 'Today’s sale', label: 'website reading “Sale notice”',
    text: 'تَخْفِيضَاتُ الْيَوْمِ: الْقَمِيصُ بِخَمْسَةٍ وَثَلَاثِينَ جُنَيْهًا، وَالْحِذَاءُ بِثَمَانِيَةٍ وَخَمْسِينَ جُنَيْهًا، وَالْحَقِيبَةُ بِاثْنَيْنِ وَسَبْعِينَ جُنَيْهًا. إِذَا اشْتَرَيْتَ قِطْعَتَيْنِ فَالتَّخْفِيضُ عَشَرَةُ جُنَيْهَاتٍ. الْمَحَلُّ مَفْتُوحٌ مِنَ السَّاعَةِ التَّاسِعَةِ صَبَاحًا حَتَّى الْعَاشِرَةِ مَسَاءً.',
    glossary: [['تَخْفِيضَاتُ', 'discounts / sale'], ['الْحِذَاءُ', 'the shoes'], ['قِطْعَتَيْنِ', 'two items'], ['الْمَحَلُّ', 'the shop']],
    task: 'Website: read the prices in words, then calculate.',
    questions: [
      q('How much is the shirt?', ['35 pounds', '53 pounds', '58 pounds'], 'Khamsatin wa-thalāthīna (unit first).'),
      q('Which item is the most expensive?', ['the bag', 'the shoes', 'the shirt'], '72 pounds.'),
      q('Shirt + shoes before the discount cost …', ['93', '83', '72'], '35 + 58.'),
      q('… and after the discount?', ['83', '93', '73'], '93 − 10 (two items).'),
    ],
    qNote: 'Website “Sale notice” with an added opening-times line; questions from the website.',
  },
  speak: {
    title: 'Speaking: your turn in the souq', source: 'website role-play card',
    prompts: [
      { route: 'core', ar: 'اِسْأَلْ عَنْ ثَمَنِ ثَلَاثَةِ أَشْيَاءَ فِي الصَّفِّ.' },
      { route: 'develop', ar: 'أَنْتَ فِي سُوقِ الْقَاهِرَةِ: اِشْتَرِ هَدِيَّةً لِأُخْتِكَ.' },
      { route: 'stretch', ar: 'سَاوِمِ الْبَائِعَ، وَادْفَعْ، وَاحْسُبِ الْبَاقِي.' },
    ],
    stems: [
      { route: 'core', ar: 'بِكَمْ ______ ؟ — ثَمَنُهُ ______ .' },
      { route: 'develop', ar: 'هَذَا غَالٍ! عِنْدَكَ تَخْفِيضٌ؟ — ______ لَكَ.' },
      { route: 'stretch', ar: 'تَفَضَّلْ ______ . — وَهَذَا الْبَاقِي: ______ .' },
    ],
    model: [
      { who: 'A', ar: 'السَّلَامُ عَلَيْكُمْ. بِكَمْ هَذِهِ الْحَقِيبَةُ؟', en: 'Peace be upon you. How much is this bag?' },
      { who: 'B', ar: 'وَعَلَيْكُمُ السَّلَامُ. بِخَمْسِينَ جُنَيْهًا. — هَذَا غَالٍ! — حَسَنًا، أَرْبَعُونَ لَكِ. — سَآخُذُهَا، شُكْرًا!', en: 'And upon you peace. Fifty pounds. — That’s expensive! — All right, forty for you. — I’ll take it, thank you!' },
    ],
    notes: 'Website five moves: greet → ask → react & haggle → agree & pay → change & farewell. Challenge: one currency other than pounds and one compound price.',
  },
  write: {
    siteTask: 'Write 7–9 Arabic sentences describing a shopping trip. Include at least three items, prices, a total, a discount and the change.',
    core: { amount: '4 sentences', task: 'Three items and their prices.', how: 'al-… bi- + price.' },
    develop: { amount: '6 sentences', task: 'Add a haggle, a total and the change.', how: 'ghālin · takhfīḍ · al-bāqī.' },
    stretch: { amount: '7–9 sentences', task: 'Website “Hot”: «ذَهَبْتُ إِلَى السُّوقِ» with two comparisons.', how: 'aghlā min · arkhaṣu min.' },
  },
  frames: {
    core: [
      { en: 'How much is …?', ar: 'بِكَمْ ______ ؟' },
      { en: 'The … costs … pounds', ar: 'ثَمَنُ ______ ______ جُنَيْهًا.' },
      { en: 'This is too expensive!', ar: 'هَذَا غَالٍ جِدًّا!' },
      { en: 'I’ll take it', ar: 'سَآخُذُ ______ .' },
    ],
    develop: [
      { en: 'Do you have a discount on …?', ar: 'عِنْدَكَ تَخْفِيضٌ عَلَى ______ ؟' },
      { en: 'The total is …', ar: 'الْمَجْمُوعُ ______ .' },
      { en: 'The change is …', ar: 'الْبَاقِي ______ .' },
      { en: '… is cheaper than …', ar: '______ أَرْخَصُ مِنْ ______ .' },
    ],
    bank: ['جُنَيْهٌ وَاحِدٌ', 'جُنَيْهَانِ', 'خَمْسَةُ جُنَيْهَاتٍ', 'عَشَرَةُ رِيَالَاتٍ', 'عِشْرُونَ جُنَيْهًا', 'مِئَةُ جُنَيْهٍ', 'بِكَمْ؟', 'غَالٍ', 'رَخِيصٌ', 'تَخْفِيضٌ', 'الْبَاقِي', 'أَغْلَى مِنْ'],
  },
  stretchTask: {
    task: 'Website “Hot” task: «ذَهَبْتُ إِلَى السُّوقِ» — what you bought, prices in words, a haggle, your change and two comparisons.',
    checklist: ['Three prices in words with correct masculine forms.', 'One price 11–99 with a singular noun.', 'A haggle (ghālin! takhfīḍ?).', 'A correct calculation of al-bāqī.', 'Two comparisons (aghlā / arkhaṣu min).'],
    phrases: [['اِشْتَرَيْتُ', 'I bought'], ['دَفَعْتُ', 'I paid'], ['الْمَجْمُوعُ', 'the total'], ['بِنِصْفِ الثَّمَنِ', 'at half price'], ['قِرْشٌ · قُرُوشٌ', 'piastre(s)'], ['تَفَضَّلْ', 'here you are']],
  },
  model: {
    text: 'ذَهَبْتُ إِلَى السُّوقِ مَعَ أُمِّي يَوْمَ السَّبْتِ. اِشْتَرَيْتُ قَلَمًا بِخَمْسَةِ جُنَيْهَاتٍ، وَدَفْتَرًا بِاثْنَيْ عَشَرَ جُنَيْهًا. ثُمَّ رَأَيْتُ حَقِيبَةً جَمِيلَةً، فَسَأَلْتُ: «بِكَمْ هَذِهِ الْحَقِيبَةُ؟». قَالَ الْبَائِعُ: «بِسِتِّينَ جُنَيْهًا». قُلْتُ: «هَذَا غَالٍ جِدًّا! عِنْدَكَ تَخْفِيضٌ؟». فَقَالَ: «خَمْسُونَ لَكِ». كَانَ الْمَجْمُوعُ سَبْعَةً وَسِتِّينَ جُنَيْهًا، فَدَفَعْتُ مِئَةَ جُنَيْهٍ، وَكَانَ الْبَاقِي ثَلَاثَةً وَثَلَاثِينَ جُنَيْهًا. الْحَقِيبَةُ أَغْلَى مِنَ الدَّفْتَرِ، لَكِنَّ الْقَلَمَ أَرْخَصُ شَيْءٍ.',
    en: 'I went to the market with my mother on Saturday. I bought a pen for five pounds and a notebook for twelve pounds. Then I saw a beautiful bag, so I asked: “How much is this bag?” The seller said: “Sixty pounds.” I said: “That’s very expensive! Do you have a discount?” He said: “Fifty for you.” The total was sixty-seven pounds, so I paid a hundred pounds, and the change was thirty-three pounds. The bag is more expensive than the notebook, but the pen is the cheapest thing.',
    find: ['3–10 price (ة on)', '11–99 price (-an)', 'haggle phrase', 'comparison'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'I asked bi-kam? with hādhā / hādhihi correctly.' },
    { route: 'core', text: 'My 3–10 prices keep the ة (masculine currency).' },
    { route: 'develop', text: 'My 11–99 prices use a singular noun with -an.' },
    { route: 'develop', text: 'I calculated the change correctly.' },
    { route: 'stretch', text: 'I can explain why money mirrors age.' },
  ],
  exit: [
    q('Choose “three riyals”.', ['ثَلَاثَةُ رِيَالَاتٍ', 'ثَلَاثُ رِيَالَاتٍ', 'ثَلَاثَةُ رِيَالًا'], 'Masculine currency → ة on.'),
    q('Choose “a hundred pounds”.', ['مِئَةُ جُنَيْهٍ', 'مِئَةُ جُنَيْهَاتٍ', 'مِئَةٌ جُنَيْهًا'], '100 + genitive singular.'),
    q('Choose “That is cheap”.', ['هَذَا رَخِيصٌ', 'هَذَا غَالٍ', 'هَذَا تَخْفِيضٌ'], 'rakhīṣ = cheap.'),
  ],
  mastery: false,
  prep: {
    words: [['كِيلُو', 'kilo', 'كِيلُو تُفَّاحٍ'], ['لِتْرٌ', 'litre', 'لِتْرُ حَلِيبٍ'], ['مِتْرٌ', 'metre', '—'], ['نِصْفٌ · رُبْعٌ', 'half · quarter', 'نِصْفُ كِيلُو'], ['وَزْنٌ', 'weight', '—']],
    questionEn: 'How would you ask for “a kilo of apples” in a shop?',
    questionAr: 'أُرِيدُ ______ تُفَّاحٍ.',
    homework: {
      core: 'Website “Mild”: eight price labels in Hindi digits and words.',
      develop: 'Website “Spicy”: an eight-line souq dialogue with the change calculated.',
      stretch: 'Website “Hot”: «ذَهَبْتُ إِلَى السُّوقِ».',
    },
    wordsSource: 'The five words prepare GM-NUM-05 (website Numeracy Mastery 05: measurements).',
  },
  remember: 'Remember: bi-kam hādhā? · answer with bi- · currencies are masculine: khamsatu junayhātin · 11–99 junayhan · 100 miʾatu junayhin · hādhā ghālin! · ʿindaka takhfīḍ? · al-bāqī.',
});

module.exports = { meta, slides };
