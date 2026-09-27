'use strict';
/*
 * TC-L10 · Measurements, Shapes and Materials
 * Website: Advanced Topics › Topic C › Lesson 10 (reuses F6-L07 “The Built Environment: Buildings, Materials and Urban
 * Life”; Topic C focus “Describe size, form, composition, use and suitability precisely”; grammar: measurement
 * expressions; agreement; passive participles) + the Topic C Measurements and Materials banks.
 * Picture match: website lesson game “Measure & Material”.
 */
const C = require('./common');
const site = require('../site-data/f6-content.json').lessons.find((l) => l.code === 'F6-L07');
const game = require('../site-data/advanced-topic-visual-games.json').c10;
const G = site.grammar;
const { q, fromSite } = C;

const meta = C.meta({
  n: 10, fileTitle: 'Measurements_Shapes_Materials', chip: 'Measure, Shape, Material',
  title: 'Measurements, Shapes and Materials', arabic: 'القِيَاسَاتُ وَالأَشْكَالُ وَالمَوَادُّ',
  focus: 'Describe an object or a building precisely: its shape, its size (طُولُهُ مِتْرَانِ), what it is made of (مَصْنُوعٌ مِنْ · مَبْنِيٌّ مِنْ), what it is for and why it is suitable.',
  icon: 'FaRulerCombined',
});
const NEXT = { nextCode: 'TC-L11', nextTitle: 'Topic C Integrated Communication Workshop', nextAr: 'وَرْشَةُ التَّوَاصُلِ المُتَكَامِلِ' };
const mat = (n, ar, en, tr, adjM, adjF, core, note) => ({ n, ar, en, tr, tag: 'material', core, note, forms: [{ l: 'm. adj.', ar: adjM }, { l: 'f. adj.', ar: adjF }] });

const productCard = [
  'بِطَاقَةُ المُنْتَجِ: مَكْتَبُ دِرَاسَةٍ',
  'الشَّكْلُ: مُسْتَطِيلٌ',
  'الطُّولُ: مِئَةٌ وَعِشْرُونَ سَنْتِيمِتْرًا · العَرْضُ: سِتُّونَ سَنْتِيمِتْرًا',
  'الوَزْنُ: خَمْسَةَ عَشَرَ كِيلُوغْرَامًا',
  'المَادَّةُ: المَكْتَبُ مَصْنُوعٌ مِنَ الخَشَبِ، وَالأَرْجُلُ مِنَ المَعْدِنِ.',
  'الاِسْتِعْمَالُ: مُنَاسِبٌ لِلدِّرَاسَةِ فِي غُرْفَةٍ صَغِيرَةٍ.',
  'تَنْبِيهٌ: لَا تَضَعِ المَكْتَبَ قُرْبَ المَاءِ.',
];

const slides = [
  C.titleSlide({
    n: 10,
    source: 'The website lesson reuses F6-L07 (The Built Environment: Buildings, Materials and Urban Life) with the Topic C focus “Describe size, form, composition, use and suitability precisely” (grammar: measurement expressions; agreement; passive participles). Core vocabulary also comes from the Topic C Measurements and Materials banks; the picture match is the website lesson game “Measure & Material”; the product card is teacher-made for the website application “Shape and material lab”.',
    support: `• F6-L07 is accessible (A2–B1). CORE: everyday materials + shapes + size words + “it is made of” (مَصْنُوعٌ / مَصْنُوعَةٌ مِنْ) + one measurement (طُولُهُ …). DEVELOP: the website’s building materials, مَبْنِيٌّ / مَبْنِيَّةٌ agreement and يَتَمَيَّزُ بِـ. STRETCH: بَيْنَمَا contrasts and judging suitability (مُنَاسِبٌ لِـ … لِأَنَّ).
• Colour: pink = the ending that agrees (مَصْنُوعٌ / مَصْنُوعَةٌ), m./f. adjective forms on every material card, a product card to read, a read-along listening with English and a “guess my object” speaking game.
• Urdu bridge words (شکل، وزن، مربع، مادہ، تاریخی).`,
  }),
  C.welcomeSlide(),
  C.journeySlide({ teach: 'Materials, shapes, sizes, “made of”.', wedo: 'Picture match, product card, build, fix and listen.', next: 'TC-L11' }),
  C.doNow({
    questions: [
      q('What does طُوبٌ mean?', ['brick', 'metal', 'concrete'], 'Prepared at home: طُوبٌ = brick · مَعْدِنٌ = metal · خَرَسَانَةٌ = concrete.'),
      q('Which word means “metre”?', ['مِتْرٌ', 'طُولٌ', 'لِتْرٌ'], 'Prepared at home: مِتْرٌ = metre · طُولٌ = length.'),
      q('This is a bag. How much is it?', ['هٰذِهِ حَقِيبَةٌ. كَمْ ثَمَنُهَا؟', 'هٰذَا حَقِيبَةٌ. كَمْ ثَمَنُهُ؟', 'هٰذِهِ حَقِيبَةٌ. كَمْ ثَمَنُهُ؟'], 'TC-L09: feminine → هٰذِهِ … ثَمَنُهَا.'),
      q('Which means “cheaper than”?', ['أَرْخَصُ مِنْ', 'أَغْلَى مِنْ', 'أَكْبَرُ مِنْ'], 'TC-L09: أَرْخَصُ مِنْ.'),
      q('Complete: ___ مَكْتَبَةٌ فِي مَدِينَتِي.', ['تُوجَدُ', 'يُوجَدُ', 'تُوجَدِينَ'], 'TC-L08: feminine → تُوجَدُ.'),
    ],
    keyIdea: { text: 'Today the ending tells you about the thing: made of … changes with masculine and feminine, just like ثَمَنُهُ / ثَمَنُهَا.', ar: 'الكُرْسِيُّ مَصْنُوعٌ  ·  الطَّاوِلَةُ مَصْنُوعَ{e|ةٌ}' },
    retrieves: 'Questions 1–2 test the words prepared at home (Flipped Learning follow-up). Questions 3–5 retrieve TC-L09 and TC-L08 — the masculine / feminine agreement that runs through today.',
  }),
  C.objectivesSlide(site.objectives, {
    core: ['I can name 6 materials and 6 shape and size words.', 'I can say what an object is made of and give one measurement (طُولُهُ مِتْرَانِ).'],
    develop: ['I can use مَبْنِيٌّ / مَبْنِيَّةٌ مِنْ with the right ending.', 'I can say what an object is for and why it is suitable.'],
    stretch: ['I can contrast two buildings with بَيْنَمَا.', 'I can write an 80–100-word comparison of an old and a modern building.'],
  }, 1, 'The Core statements carry the Topic C focus (size, form, composition, use and suitability; measurement expressions, agreement, passive participles). The website objectives on the left are the F6-L07 objectives.'),
  C.keywordsSlide({
    text: '34 words in 5 groups (Topic C banks + website F6-L07). Learn the CORE words first. Hear it → say it → see it → use it.',
    groups: [
      { head: 'GROUP 1', name: 'Materials · 6' },
      { head: 'GROUP 2', name: 'Shape and size · 6' },
      { head: 'GROUP 3', name: 'Measuring · 6' },
      { head: 'GROUP 4', name: 'Building materials · 6' },
      { head: 'GROUP 5', name: 'Buildings · 6' },
    ],
    bridge: [
      { ar: 'شَكْلٌ', urdu: 'شکل', tr: 'shakl', en: 'shape, form' },
      { ar: 'وَزْنٌ', urdu: 'وزن', tr: 'wazn', en: 'weight' },
      { ar: 'مُرَبَّعٌ', urdu: 'مربع', tr: 'murabbaʿ', en: 'square' },
      { ar: 'مَادَّةٌ', urdu: 'مادہ', tr: 'māddah', en: 'material, matter' },
      { ar: 'تَارِيخِيٌّ', urdu: 'تاریخی', tr: 'tārīkhī', en: 'historic' },
    ],
    notes: `URDU BRIDGE: شکل (shape — the same word), وزن (weight — TC-L07 وَزْنُ الأَمْتِعَةِ), مربع (a square — Urdu maths), مادہ (matter — Arabic مَادَّةٌ = material), تاریخی (historic — تَارِيخٌ = history, date).
Groups 1–3 are the Topic C Materials and Measurements banks; Groups 4–5 are the website F6-L07 vocabulary.`,
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · Topic C materials bank', title: 'What is it made of?', ar: 'المَوَادُّ',
    items: [
      mat(1, 'خَشَبٌ', 'wood', 'kha-shab', 'خَشَبِيٌّ', 'خَشَبِيَّةٌ', true, 'Bank: تُصْنَعُ الطَّاوِلَةُ مِنَ الخَشَبِ.'),
      mat(2, 'حَجَرٌ', 'stone', 'ḥa-jar · pl. ḥi-jā-ra', 'حَجَرِيٌّ', 'حَجَرِيَّةٌ', true),
      mat(3, 'زُجَاجٌ', 'glass', 'zu-jāj', 'زُجَاجِيٌّ', 'زُجَاجِيَّةٌ', true),
      mat(4, 'مَعْدِنٌ', 'metal', 'maʿ-din · pl. ma-ʿā-din', 'مَعْدِنِيٌّ', 'مَعْدِنِيَّةٌ', true),
      mat(5, 'بِلَاسْتِيكٌ', 'plastic', 'bi-lās-tīk', 'بِلَاسْتِيكِيٌّ', 'بِلَاسْتِيكِيَّةٌ', true),
      mat(6, 'وَرَقٌ', 'paper', 'wa-raq', 'وَرَقِيٌّ', 'وَرَقِيَّةٌ', true),
    ],
    notes: `KEY WORDS — materials (Topic C Materials bank). Hear → Say → See → Use. Hold up or point to real objects around you on camera: a wooden table, a glass, a metal pen, a plastic bottle, paper.
The small boxes show the ADJECTIVE made from each material with ـِيٌّ (m.) / ـِيَّةٌ (f.) — the nisba ending from TC-L02: بَابٌ خَشَبِيٌّ (a wooden door), زُجَاجَةٌ بِلَاسْتِيكِيَّةٌ (a plastic bottle).
Stretch: the website listening says أَبْوَابُهَا الخَشَبِيَّةُ = its wooden doors (plural of things → feminine).`,
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 2 · Topic C measurements bank', title: 'Shape and size', ar: 'الشَّكْلُ وَالحَجْمُ',
    items: [
      { n: 7, ar: 'دَائِرِيٌّ', en: 'round, circular', tr: 'dā-ʾi-riyy', tag: 'shape', core: true, forms: [{ l: 'm.', ar: 'دَائِرِيٌّ' }, { l: 'f.', ar: 'دَائِرِيَّةٌ' }], note: 'دَائِرَةٌ = a circle.' },
      { n: 8, ar: 'مُرَبَّعٌ', en: 'square', tr: 'mu-rab-baʿ', tag: 'shape', core: true, forms: [{ l: 'm.', ar: 'مُرَبَّعٌ' }, { l: 'f.', ar: 'مُرَبَّعَةٌ' }] },
      { n: 9, ar: 'مُسْتَطِيلٌ', en: 'rectangular', tr: 'mus-ta-ṭīl', tag: 'shape', core: true, forms: [{ l: 'm.', ar: 'مُسْتَطِيلٌ' }, { l: 'f.', ar: 'مُسْتَطِيلَةٌ' }] },
      { n: 10, ar: 'طَوِيلٌ', en: 'long, tall', tr: 'ṭa-wīl', tag: 'size', core: true, forms: [{ l: 'm.', ar: 'طَوِيلٌ' }, { l: 'f.', ar: 'طَوِيلَةٌ' }] },
      { n: 11, ar: 'قَصِيرٌ', en: 'short', tr: 'qa-ṣīr', tag: 'size', core: true, forms: [{ l: 'm.', ar: 'قَصِيرٌ' }, { l: 'f.', ar: 'قَصِيرَةٌ' }] },
      { n: 12, ar: 'ضَخْمٌ', en: 'huge', tr: 'ḍakhm', tag: 'size', forms: [{ l: 'm.', ar: 'ضَخْمٌ' }, { l: 'f.', ar: 'ضَخْمَةٌ' }], note: 'Also: مُتَوَسِّطُ الحَجْمِ = medium-sized.' },
    ],
    notes: `KEY WORDS — shapes and sizes (Topic C Measurements bank). Draw the shapes in the air: a circle, a square, a rectangle; hands wide apart (long), close together (short), arms open (huge).
Bank example: الفِيلُ كَبِيرٌ وَالفَأْرُ صَغِيرٌ = The elephant is big and the mouse is small. Every adjective adds ـة for a feminine thing: طَاوِلَةٌ مُسْتَطِيلَةٌ · صَحْنٌ دَائِرِيٌّ.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Key words · Group 3 · grammar part 1 · measurement expressions', title: 'Its length is two metres', ar: 'طُولُهُ مِتْرَانِ',
    cols: [{ label: 'Measure', w: 1.9 }, { label: 'The word', w: 2.2, size: 22 }, { label: 'its … (m. thing)', w: 2.5, size: 22 }, { label: 'its … (f. thing)', w: 2.5, size: 22 }, { label: 'Example', w: 3.23, size: 18 }],
    rows: [
      { core: true, cells: ['length', { ar: 'الطُّولُ', sub: 'aṭ-ṭūl' }, { ar: 'طُولُ{e|هُ}', sub: 'ṭū-lu-hu' }, { ar: 'طُولُ{e|هَا}', sub: 'ṭū-lu-hā' }, 'طُولُهُ مِتْرَانِ (game)'] },
      { core: true, cells: ['width', { ar: 'العَرْضُ', sub: 'al-ʿarḍ' }, { ar: 'عَرْضُ{e|هُ}', sub: 'ʿar-ḍu-hu' }, { ar: 'عَرْضُ{e|هَا}', sub: 'ʿar-ḍu-hā' }, 'عَرْضُهَا مِتْرٌ وَاحِدٌ'] },
      { core: true, cells: ['weight', { ar: 'الوَزْنُ', sub: 'al-wazn' }, { ar: 'وَزْنُ{e|هُ}', sub: 'waz-nu-hu' }, { ar: 'وَزْنُ{e|هَا}', sub: 'waz-nu-hā' }, 'وَزْنُهُ كِيلُوغْرَامَانِ'] },
      { cells: ['capacity', { ar: 'السِّعَةُ', sub: 'as-si-ʿa' }, { ar: 'سِعَتُ{e|هُ}', sub: 'si-ʿa-tu-hu' }, { ar: 'سِعَتُ{e|هَا}', sub: 'si-ʿa-tu-hā' }, 'سِعَةُ الزُّجَاجَةِ لِتْرٌ (game)'] },
      { cells: ['diameter', { ar: 'القُطْرُ', sub: 'al-quṭr' }, { ar: 'قُطْرُ{e|هُ}', sub: 'quṭ-ru-hu' }, { ar: 'قُطْرُ{e|هَا}', sub: 'quṭ-ru-hā' }, 'قُطْرُهُ عَشَرَةُ سَنْتِيمِتْرَاتٍ (game)'] },
    ],
    notes: `GRAMMAR PART 1 — measurement expressions (Topic C grammar focus). Pattern: MEASURE + “its” + NUMBER + UNIT. The pink ending is the same attached pronoun as TC-L09 (ثَمَنُهُ / ثَمَنُهَا): ـهُ for a masculine object, ـهَا for a feminine object.
Units (Topic C bank): مِتْرٌ (metre), سَنْتِيمِتْرٌ (cm), كِيلُومِتْرٌ (km), غِرَامٌ (gram), كِيلُوغْرَامٌ (kg), لِتْرٌ (litre).
Two of anything: add ـَانِ → مِتْرَانِ (two metres), كِيلُوغْرَامَانِ (two kilos) — no number word needed!
Core: rows 1–3 (length, width, weight). Rows 4–5 are the website game sentences (Develop / Stretch).`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · passive participles + agreement · website table', title: 'Made of … / built of …', ar: 'مَصْنُوعٌ مِنْ · مَبْنِيٌّ مِنْ',
    cols: [{ label: 'The thing', w: 2.4 }, { label: 'Masculine thing', w: 4.9, size: 22 }, { label: 'Feminine thing (or plural of things)', w: 5.03, size: 22 }],
    rows: [
      { core: true, cells: ['an object: made of', { ar: 'الكُرْسِيُّ {m|مَصْنُوعٌ} {k|مِنَ} الخَشَبِ', sub: 'the chair is made of wood' }, { ar: 'الطَّاوِلَةُ {m|مَصْنُوعَ}{e|ةٌ} {k|مِنَ} الخَشَبِ', sub: 'the table is made of wood' }] },
      { core: true, cells: ['an object: made of', { ar: 'القَلَمُ {m|مَصْنُوعٌ} {k|مِنَ} المَعْدِنِ', sub: 'the pen is made of metal' }, { ar: 'الزُّجَاجَةُ {m|مَصْنُوعَ}{e|ةٌ} {k|مِنَ} البِلَاسْتِيكِ', sub: 'the bottle is made of plastic' }] },
      { cells: ['a building: built of', { ar: 'البَيْتُ {m|مَبْنِيٌّ} {k|مِنَ} الحَجَرِ', sub: 'the house is built of stone (website)' }, { ar: 'المَدْرَسَةُ {m|مَبْنِيَّ}{e|ةٌ} {k|مِنَ} الطُّوبِ', sub: 'the school is built of brick (website)' }] },
      { cells: ['plural of things', { ar: 'الجِسْرُ {m|مَبْنِيٌّ} {k|مِنَ} المَعْدِنِ', sub: 'the bridge is built of metal (website)' }, { ar: 'المَبَانِي {m|مَبْنِيَّ}{e|ةٌ} {k|مِنَ} الخَرَسَانَةِ', sub: 'the buildings are built of concrete (website)' }] },
    ],
    notes: `GRAMMAR PART 2 — passive participles and agreement (Topic C grammar focus), built on the website table “Subject · Participle · Example”.
Purple = the participle (a describing word made from a verb: يَصْنَعُ → مَصْنُوعٌ “made”; يَبْنِي → مَبْنِيٌّ “built”). Pink = the ـة it adds for a feminine thing — and for plurals of THINGS (المَبَانِي … مَبْنِيَّةٌ, website). Teal = مِنْ, which never changes.
Core: rows 1–2 (objects, مَصْنُوعٌ / مَصْنُوعَةٌ). Develop: rows 3–4 (buildings, the website’s مَبْنِيٌّ / مَبْنِيَّةٌ).
Website common error: “${G.common_error}”
Remember TC-L08: مَبْنِيٌّ always takes مِنْ, never بِـ.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 3 · use and suitability (Topic C focus)', title: 'What is it for? Is it suitable?', ar: 'الاِسْتِعْمَالُ وَالمُلَاءَمَةُ',
    cards: [
      { chip: 'CORE · USED FOR', color: '2E8B57', head: 'نَسْتَعْمِلُهُ لِـ', big: 'نَسْتَعْمِلُ الزُّجَاجَةَ لِلْمَاءِ', en: 'We use the bottle for water.', clue: 'لِـ + the = لِلْـ: لِلْمَاءِ · لِلدِّرَاسَةِ.' },
      { chip: 'DEVELOP · SUITABLE FOR', color: 'C9780A', head: 'مُنَاسِبٌ لِـ', big: 'الخَشَبُ مُنَاسِبٌ لِلْأَثَاثِ لِأَنَّهُ قَوِيٌّ', en: 'Wood is suitable for furniture because it is strong.', clue: 'مُنَاسِبٌ / مُنَاسِبَةٌ agrees too; add a reason with لِأَنَّ.' },
      { chip: 'DEVELOP · KNOWN FOR', color: '0E7C86', head: 'يَتَمَيَّزُ / تَتَمَيَّزُ بِـ', big: 'تَتَمَيَّزُ القَرْيَةُ بِبُيُوتِهَا التَّقْلِيدِيَّةِ', en: 'The village is known for its traditional houses.', clue: 'Feminine subject → تَتَمَيَّزُ; the feature always after بِـ (website).' },
    ],
    error: { text: 'The website’s common mistakes: the verb or the participle not agreeing with a feminine noun.', pairs: [['العِمَارَةُ مَبْنِيَّةٌ', 'العِمَارَةُ مَبْنِيٌّ'], ['تَتَمَيَّزُ القَرْيَةُ', 'يَتَمَيَّزُ القَرْيَةُ']] },
    notes: `GRAMMAR PART 3 — use and suitability (Topic C focus “composition, use and suitability”). Cards 1–2 are teacher-made; card 3 is the website rule and pattern.
Useful describing words for suitability: قَوِيٌّ (strong), خَفِيفٌ (light), ثَقِيلٌ (heavy), رَخِيصٌ (cheap — TC-L09), جَمِيلٌ (beautiful), فَسِيحٌ (spacious — website).
Website teaching point: “${site.teach[0]}”`,
  },
  {
    type: 'formula', stage: 'teach', flex: true, eyebrow: 'Grammar focus · Part 4 · FLEX · contrast (website)', title: 'Old and new: whereas …', ar: 'بَيْنَمَا',
    cols: [
      { label: 'idea 1 (complete)', ar: 'الفِكْرَةُ الأُولَى', color: '1B3B6F', pale: 'EEF3FA' },
      { label: 'whereas (key word)', ar: 'بَيْنَمَا', color: '0E7C86', pale: 'E3F2F3' },
      { label: 'idea 2 (complete, different)', ar: 'الفِكْرَةُ الثَّانِيَةُ', color: '8A6D1E', pale: 'F8F0DC' },
    ],
    rows: [
      { en: 'The city is crowded, whereas the village is quiet.', cells: ['المَدِينَةُ مُكْتَظَّةٌ،', '{k|بَيْنَمَا}', 'القَرْيَةُ هَادِئَةٌ'] },
      { en: 'The city is dense, whereas the countryside is spacious.', cells: ['المَدِينَةُ مُكْتَظَّةٌ،', '{k|بَيْنَمَا}', 'الرِّيفُ فَسِيحٌ'] },
      { en: 'The house is traditional, whereas the block is modern.', cells: ['البَيْتُ تَقْلِيدِيٌّ،', '{k|بَيْنَمَا}', 'العِمَارَةُ مُعَاصِرَةٌ'] },
      { en: 'The old district is built of stone, whereas the new one is built of glass.', cells: ['الحَيُّ القَدِيمُ مَبْنِيٌّ مِنَ الحَجَرِ،', '{k|بَيْنَمَا}', 'الجَدِيدُ مَبْنِيٌّ مِنَ الزُّجَاجِ'] },
    ],
    foot: 'Both sides must be complete ideas that really contrast (website rule).',
    notes: `GRAMMAR PART 4 — contrast (FLEX — Develop / Stretch). Rows 1–3 are website examples (quiz, pattern and speaking model); row 4 is from the website listening.
Website rule: “Each side should contain a complete idea that creates a meaningful contrast.” Website teaching point: “${site.teach[1]}”`,
  },
  {
    type: 'ruleRows', stage: 'teach', flex: true, eyebrow: 'Grammar focus · Part 5 · website examples · FLEX', title: 'The four website rules with examples', ar: 'أَمْثِلَةُ القَوَاعِدِ',
    rows: G.rules.map((r) => ({ title: r.heading, formula: r.formula, examples: r.examples })),
    notes: `WEBSITE GRAMMAR RULES AND EXAMPLES (FLEX — revision or homework). Website overview: “${G.overview}”`,
  },
  C.quickCheck([
    q('Complete:', ['مَصْنُوعَةٌ', 'مَصْنُوعٌ', 'مَصْنُوعَانِ'], 'الطَّاوِلَةُ is feminine → مَصْنُوعَةٌ.', { ar: 'الطَّاوِلَةُ ___ مِنَ الخَشَبِ.' }),
    q('Which means “Its length is two metres”?', ['طُولُهُ مِتْرَانِ.', 'وَزْنُهُ مِتْرَانِ.', 'عَرْضُهُ لِتْرَانِ.'], 'طُولٌ = length; مِتْرَانِ = two metres (website game).'),
    fromSite(G.quiz[0]),
    fromSite(G.quiz[1]),
  ], 'questions 1–2 teacher-made (Topic C grammar focus); questions 3–4 are website grammar quiz questions 1–2.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me describe my desk', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'What and shape', ar: 'هٰذِهِ طَاوِلَةٌ مُسْتَطِيلَ{e|ةٌ}', think: 'طَاوِلَةٌ is feminine → مُسْتَطِيلَةٌ.' },
      { head: 'Size', ar: 'طُولُ{e|هَا} مِتْرَانِ', think: 'ـهَا = its (the table, f.).' },
      { head: 'Made of', ar: 'هِيَ {m|مَصْنُوعَ}{e|ةٌ} {k|مِنَ} الخَشَبِ', think: 'Feminine → مَصْنُوعَةٌ + مِنَ.' },
      { head: 'Suitable because', ar: 'الخَشَبُ مُنَاسِبٌ {k|لِأَنَّهُ} قَوِيٌّ', think: 'A reason: لِأَنَّهُ …' },
    ],
    legend: ['m', 'e', 'k'], legendLabels: { m: 'PARTICIPLE', e: 'ENDING', k: 'KEY WORD' },
    model: 'هٰذِهِ طَاوِلَةٌ مُسْتَطِيلَ{e|ةٌ}. طُولُ{e|هَا} مِتْرَانِ، وَعَرْضُ{e|هَا} مِتْرٌ وَاحِدٌ. هِيَ {m|مَصْنُوعَ}{e|ةٌ} {k|مِنَ} الخَشَبِ، وَالخَشَبُ مُنَاسِبٌ لِلدِّرَاسَةِ {k|لِأَنَّهُ} قَوِيٌّ وَجَمِيلٌ.',
    modelEn: 'This is a rectangular table. Its length is two metres and its width is one metre. It is made of wood, and wood is suitable for studying because it is strong and beautiful.',
    notes: `I DO (3 min) — teacher models with a think-aloud, ideally holding or pointing to a real table or desk on camera. Students COPY the description into their books.
Step 1 — “طَاوِلَةٌ ends in ـة, so the shape adjective adds ـة: مُسْتَطِيلَةٌ.”
Step 2 — “Its length: طُولُهَا — ـهَا because it’s the table. Two metres: just مِتْرَانِ.”
Step 3 — “Made of: مَصْنُوعَةٌ مِنَ الخَشَبِ — pink ـة again.”
Step 4 — “Why is wood good? لِأَنَّهُ قَوِيٌّ — because it is strong.”
Teacher-made from the Topic C banks and the website game (طُولُهُ مِتْرَانِ وَهُوَ مَصْنُوعٌ مِنَ الخَشَبِ).`,
  },
  {
    type: 'models', stage: 'ido', min: 1, eyebrow: 'I do · model sentences from the website', title: 'Four sentences to borrow', ar: 'جُمَلٌ نَمُوذَجِيَّةٌ',
    rows: site.patterns.map((p) => ({ ar: p.ar, en: p.en, tip: p.tip })),
    notes: `MODEL SENTENCES (1 min) — the website patterns. Students copy TWO that are useful for them.
• Core: copy 1 and 2 and change the material (البَيْتُ مَبْنِيٌّ مِنَ الطُّوبِ …). • Develop: copy 3 about a place you know. • Stretch: copy 4 and write your own بَيْنَمَا contrast.`,
  },
  C.gameSlide(game, {
    en: ['Its length is two metres and it is made of wood.', 'It is round and its diameter is ten centimetres.', 'The capacity of the bottle is one litre.'],
    icons: [[['fa6', 'FaRuler', '1B3B6F'], ['fa6', 'FaTree', '8A5A2B']], [['fa6', 'FaCircle', 'C77700'], ['fa6', 'FaRulerHorizontal', '5A6472']], [['fa6', 'FaBottleWater', '1D5FBF']]],
    labels: ['2 m · wood', '10 cm', '1 L'],
    order: [2, 0, 1],
    notes: 'Key words to spot: مِتْرَانِ + الخَشَبِ (two metres, wood), دَائِرِيُّ (round) + سَنْتِيمِتْرَاتٍ (cm), سِعَةُ … لِتْرٌ (capacity … litre). Stretch: explain طُولُهُ vs طُولُهَا in the sentences.',
  }),
  {
    type: 'passage', stage: 'wedo', min: 2, eyebrow: 'We do · read a product card (Topic C focus)', title: 'Product card: a study desk', ar: 'بِطَاقَةُ المُنْتَجِ',
    docLines: productCard,
    glossaryHead: 'KEY WORDS',
    glossary: [
      ['بِطَاقَةُ المُنْتَجِ', 'product card'], ['مَكْتَبُ دِرَاسَةٍ', 'study desk'], ['الشَّكْلُ', 'the shape'], ['الطُّولُ', 'length'], ['العَرْضُ', 'width'],
      ['الوَزْنُ', 'weight'], ['الأَرْجُلُ', 'the legs'], ['الاِسْتِعْمَالُ', 'use'], ['تَنْبِيهٌ', 'warning'], ['لَا تَضَعْ', 'don’t put'],
    ],
    notes: `READ A PRODUCT CARD (2 min) — Topic C focus “Describe size, form, composition, use and suitability precisely”, set out like a real online product listing. Teacher-made from the Topic C banks and website F6-L07 vocabulary.
Read it aloud once while students follow. SEND: cover the text and uncover one line at a time; Core students use the glossary.
Notice: each line is one of today’s five questions — shape, size, weight, material, use. لَا تَضَعْ = a negative instruction (TC-L07 imperatives).
Translation for the teacher: Product card: study desk. Shape: rectangular. Length: 120 cm · Width: 60 cm. Weight: 15 kg. Material: the desk is made of wood, and the legs of metal. Use: suitable for studying in a small room. Warning: do not put the desk near water.`,
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · product card questions', title: 'Find the facts', ar: 'اِسْتَخْرِجِ المَعْلُومَاتِ',
    seed: 6,
    questions: [
      q('What shape is the desk?', ['Rectangular', 'Round', 'Square'], 'الشَّكْلُ: مُسْتَطِيلٌ.'),
      q('How long is it?', ['120 cm', '60 cm', '15 cm'], 'الطُّولُ: مِئَةٌ وَعِشْرُونَ سَنْتِيمِتْرًا.'),
      q('How heavy is it?', ['15 kg', '12 kg', '50 kg'], 'الوَزْنُ: خَمْسَةَ عَشَرَ كِيلُوغْرَامًا.'),
      q('What are the legs made of?', ['Metal', 'Wood', 'Plastic'], 'وَالأَرْجُلُ مِنَ المَعْدِنِ.'),
      q('Where must you NOT put it?', ['Near water', 'In a small room', 'Near a window'], 'لَا تَضَعِ المَكْتَبَ قُرْبَ المَاءِ.'),
    ],
    side: { kind: 'core', label: 'CORE', text: 'Find the KEY WORD first.\nshape? الشَّكْل\nlong? الطُّول\nheavy? الوَزْن\nmade of? مِنَ' },
    answerSlide: { eyebrow: 'We do · product card answers', title: 'Product card: answers', ar: 'الإِجَابَاتُ' },
    notes: 'PRODUCT CARD questions (teacher-made). Students type five letters in the chat. Core: questions 1, 4 and 5 with the key-word clues. Stretch: is this desk suitable for a big family room? Answer with مُنَاسِبٌ لِـ … لِأَنَّ …',
    answerNotes: 'Reveal. For each answer, a student reads the exact line from the card (by invitation).',
  },
  {
    type: 'builder', stage: 'wedo', min: 3, eyebrow: 'We do · guided practice · sentence builder', title: 'Build the sentence', ar: 'اِبْنِ الجُمْلَةَ',
    rows: [
      { en: 'The table is made of wood.', cols: [['الطَّاوِلَةُ', 'الكُرْسِيُّ'], ['مَصْنُوعٌ', 'مَصْنُوعَةٌ'], ['بِالخَشَبِ.', 'مِنَ الخَشَبِ.']], key: [0, 1, 1], why: 'Feminine الطَّاوِلَةُ → مَصْنُوعَةٌ; always مِنْ.' },
      { en: 'Its (the bottle’s) capacity is one litre.', cols: [['سِعَتُهَا', 'سِعَتُهُ'], ['لِتْرٌ', 'مِتْرٌ'], ['وَاحِدٌ.', 'وَاحِدَةٌ.']], key: [0, 0, 0], why: 'الزُّجَاجَةُ is feminine → سِعَتُهَا; لِتْرٌ is masculine → وَاحِدٌ.' },
      { en: 'The city is crowded, whereas the village is quiet.', cols: [['المَدِينَةُ مُكْتَظَّةٌ،', 'القَرْيَةُ مُكْتَظَّةٌ،'], ['لِأَنَّ', 'بَيْنَمَا'], ['المَدِينَةُ مُكْتَظَّةٌ.', 'القَرْيَةُ هَادِئَةٌ.']], key: [0, 1, 1], why: 'بَيْنَمَا + a complete, different idea (website).' },
    ],
    answerSlide: { min: 0, eyebrow: 'We do · sentence builder answers', title: 'Check your sentences', ar: 'تَحَقَّقْ مِنْ جُمَلِكَ' },
    notes: `WE DO — sentence builder (3 min). Rows 1–2 teacher-made (Topic C grammar focus: agreement, participles, measurements); row 3 from the website quiz.
Students choose ONE box per column (start from Column 1 on the right) and type the letters, e.g. “1: A B B”. ↔ Rehearse 30s first.
Core: sentences 1 and 2. Develop / Stretch: sentence 3 and explain the wrong options.`,
  },
  {
    type: 'sorter', stage: 'wedo', min: 2, eyebrow: 'We do · website sorter', title: 'Material or building?', ar: 'مَادَّةٌ أَمْ مَبْنًى؟',
    categories: ['Material', 'Building'],
    items: [
      { ar: 'حَجَرٌ', cat: 0 }, { ar: 'عِمَارَةٌ', cat: 1 }, { ar: 'زُجَاجٌ', cat: 0 }, { ar: 'نَاطِحَةُ سَحَابٍ', cat: 1 },
      { ar: 'خَرَسَانَةٌ', cat: 0 }, { ar: 'مَنْزِلٌ مُسْتَقِلٌّ', cat: 1 }, { ar: 'طِينٌ', cat: 0 }, { ar: 'مَبْنًى تَارِيخِيٌّ', cat: 1 },
    ],
    answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
    notes: `WE DO — website sorter “${site.sorter.title}” (2 min, all students). New website words: عِمَارَةٌ (apartment block), نَاطِحَةُ سَحَابٍ (skyscraper — “cloud-scraper”!), مَنْزِلٌ مُسْتَقِلٌّ (detached house), مَبْنًى تَارِيخِيٌّ (historic building), خَرَسَانَةٌ (concrete), طِينٌ (clay, mud).
Then: each student makes ONE sentence joining a building and a material with مَبْنِيٌّ / مَبْنِيَّةٌ مِنْ.`,
  },
  C.morePractice([fromSite(G.quiz[3], { n: 5 }), fromSite(G.quiz[4], { n: 6 }), fromSite(G.quiz[5], { n: 7 }), fromSite(G.quiz[7], { n: 8 })], 'website quiz 4, 5, 6, 8'),
  C.repairSlide(site, [
    'What is wrong? Is العِمَارَةُ masculine or feminine?',
    'What is wrong? Is القَرْيَةُ masculine or feminine?',
    'What is wrong? Is the second idea really different?',
  ]),
  C.listening(site, {
    coreTip: 'Listen twice. Core: questions 1, 3 and 4 — listen for الحَجَرِ وَالطِّينِ (stone and clay), عِمَارَاتٌ (blocks) and الخَرَسَانَةِ وَالزُّجَاجِ (concrete and glass).',
    routes: 'Core: questions 1, 3, 4. Develop / Stretch: all 5.',
    gloss: [
      ['فِي الحَيِّ القَدِيمِ بُيُوتٌ تَقْلِيدِيَّةٌ مَبْنِيَّةٌ مِنَ الحَجَرِ وَالطِّينِ.', 'In the old district there are traditional houses built of stone and clay.'],
      ['تَتَمَيَّزُ البُيُوتُ بِأَبْوَابِهَا الخَشَبِيَّةِ وَسَاحَاتِهَا الدَّاخِلِيَّةِ.', 'The houses are known for their wooden doors and inner courtyards.'],
      ['أَمَّا فِي الحَيِّ الجَدِيدِ فَتُوجَدُ عِمَارَاتٌ مُعَاصِرَةٌ مَبْنِيَّةٌ مِنَ الخَرَسَانَةِ وَالزُّجَاجِ.', 'As for the new district, there are modern blocks built of concrete and glass.'],
      ['الحَيُّ الجَدِيدُ مُكْتَنِزٌ، بَيْنَمَا الحَيُّ القَدِيمُ أَكْثَرُ هُدُوءًا.', 'The new district is dense, whereas the old district is quieter.'],
    ],
  }),
  C.speakingSlide(site, {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'مَا هٰذَا الشَّيْءُ؟ صِفْ شَكْلَهُ وَمَادَّتَهُ.' },
      { route: 'core', ar: site.speaking.prompts[0] },
      { route: 'develop', ar: site.speaking.prompts[2] },
      { route: 'stretch', ar: site.speaking.prompts[3] },
    ],
    stems: [
      { route: 'core', ar: 'هُوَ مَصْنُوعٌ / هِيَ مَصْنُوعَةٌ مِنَ ______ .' },
      { route: 'develop', ar: 'طُولُهُ / طُولُهَا ______ ، وَشَكْلُهُ ______ .' },
      { route: 'stretch', ar: '______ ، بَيْنَمَا ______ .' },
      { route: 'sum', ar: 'يَقُولُ / تَقُولُ إِنَّ ______ .' },
    ],
    modelEn: ['What is this house built from?', 'It is built of stone and wood.'],
    notes: `SHAPE AND MATERIAL LAB (website application): “Describe objects by measurement, shape and material. Partners identify the object, then improve the description with a precise property or comparison.”
Game: A describes an object in the room WITHOUT naming it (shape + material + one measurement); B guesses: هَلْ هُوَ … ؟ Then B adds one more precise detail. Core prompt 1 is teacher-made for this game.`,
  }),
  C.routesSlide(site, {
    core: { amount: '4 sentences', task: 'Describe one object at home: what it is, its shape, one measurement and what it is made of.', how: 'Use the frames and word bank on the next slide — copy the I do model and change the words.' },
    develop: { amount: '6–8 sentences', how: 'Describe two buildings with the right ending (built of …), one feature (known for …) and one contrast (whereas …).' },
    stretch: { amount: '80–100 words', how: 'Website writing task: compare an old and a modern building; checklist and phrase bank on the Stretch slide.' },
  }),
  C.framesSlide({
    core: [
      { en: 'This (m.) is a … / This (f.) is a …', ar: 'هٰذَا ______ / هٰذِهِ ______ .' },
      { en: 'Its shape is …', ar: 'شَكْلُهُ / شَكْلُهَا ______ .' },
      { en: 'Its length is …', ar: 'طُولُهُ / طُولُهَا ______ .' },
      { en: 'It (m.) is made of …', ar: 'هُوَ مَصْنُوعٌ مِنَ ______ .' },
      { en: 'It (f.) is made of …', ar: 'هِيَ مَصْنُوعَةٌ مِنَ ______ .' },
    ],
    develop: [
      { en: 'The … (m.) is built of …', ar: '______ مَبْنِيٌّ مِنَ ______ .' },
      { en: 'The … (f.) is built of …', ar: '______ مَبْنِيَّةٌ مِنَ ______ .' },
      { en: 'It is known for …', ar: 'يَتَمَيَّزُ / تَتَمَيَّزُ بِـ ______ .' },
      { en: 'It is suitable for … because …', ar: 'مُنَاسِبٌ لِـ ______ لِأَنَّ ______ .' },
      { en: '…, whereas …', ar: '______ ، بَيْنَمَا ______ .' },
    ],
    bank: ['خَشَبٌ', 'حَجَرٌ', 'زُجَاجٌ', 'مَعْدِنٌ', 'بِلَاسْتِيكٌ', 'طُوبٌ', 'مُسْتَطِيلٌ', 'دَائِرِيٌّ', 'مِتْرَانِ', 'كِيلُوغْرَامٌ', 'قَوِيٌّ', 'خَفِيفٌ'],
  }),
  C.stretchSlide(site, [
    ['فِي مَدِينَتِي مَسْجِدٌ تَارِيخِيٌّ وَمَرْكَزٌ ثَقَافِيٌّ حَدِيثٌ', 'in my city there is a historic mosque and a modern cultural centre'],
    ['المَسْجِدُ مَبْنِيٌّ مِنَ …', 'the mosque is built of …'],
    ['وَيَتَمَيَّزُ بِقُبَّتِهِ وَأَبْوَابِهِ الخَشَبِيَّةِ', 'and it is known for its dome and wooden doors'],
    ['أَمَّا المَرْكَزُ فَـ …', 'as for the centre, …'],
    ['… هَادِئٌ وَتَقْلِيدِيٌّ، بَيْنَمَا … مُعَاصِرٌ', '… is calm and traditional, whereas … is modern'],
    ['أُحِبُّ المَبْنَيَيْنِ لِأَنَّ …', 'I like both buildings because …'],
  ]),
  C.modelSlide(site,
    'In my city there is a historic mosque and a modern cultural centre. The mosque is built of stone, and it is known for its dome and its wooden doors. As for the centre, it is built of glass and metal, and it has spacious halls. The mosque is calm and traditional, whereas the centre is lively and modern. I like both buildings, because the first protects our heritage and the second offers new services.',
    ['مَبْنِيٌّ مِنَ', 'يَتَمَيَّزُ بِـ', 'أَمَّا … فَـ', 'بَيْنَمَا'],
    'Core students find the materials after مِنَ; Stretch find the contrast and explain why الأَوَّلَ / الثَّانِيَ refer to the two buildings.'),
  C.selfCheckSlide([
    { route: 'core', text: 'I can name 6 materials and 6 shape or size words.' },
    { route: 'core', text: 'I can say what an object is made of and give its length (طُولُهُ / طُولُهَا).' },
    { route: 'develop', text: site.success[1] },
    { route: 'develop', text: 'I can say what something is for and why it is suitable (مُنَاسِبٌ لِـ … لِأَنَّ).' },
    { route: 'stretch', text: site.success[2] },
  ]),
  C.exitTicket([fromSite(site.final[0]), fromSite(site.final[1]), fromSite(site.final[4])], site.final.length),
  ...C.readingSlides(site, [
    ['تَجْمَعُ بَيْنَ', 'combines'], ['العُمْرَانُ المُعَاصِرُ', 'modern development'], ['القَلْعَةُ', 'the castle'], ['نَوَافِذُهَا', 'its windows'], ['أَقْوَاسُهَا', 'its arches'],
    ['مَرْكَزٌ ثَقَافِيٌّ', 'a cultural centre'], ['يَحْتَرِمُ', 'respects'], ['يُوَفِّرُ', 'provides'], ['الزُّوَّارُ', 'visitors'], ['يَحْمِي', 'protects'], ['يُطَوِّرُ', 'develops'],
  ]),
  C.prepSlide({
    ...NEXT,
    words: [['مِنْ وَجْهَةِ نَظَرِي', 'from my point of view', ''], ['بِعِبَارَةٍ أُخْرَى', 'in other words', ''], ['سَأُعْطِي مِثَالًا', 'I will give an example', ''], ['أَقْصِدُ أَنَّ', 'what I mean is', ''], ['إِلَى حَدٍّ مَا', 'to some extent', '']],
    questionEn: 'Write one Arabic sentence: which Topic C topic interests you most, and why?',
    questionAr: 'أَيُّ مَوْضُوعٍ فِي المِحْوَرِ ج يُهِمُّكَ أَكْثَرَ؟ وَلِمَاذَا؟',
    homework: {
      core: 'Website · TC-L10 · play “Measure & Material”, then the vocabulary mission.',
      develop: 'Photograph (or draw) three objects at home and write two sentences for each: shape or size + material.',
      stretch: 'Website · TC-L10 · the reading “Old and new architecture”, then write your own 80–100-word comparison.',
    },
    wordsSource: 'The five phrases come from the website lesson (D4-L11 “Speaking and self-correction” vocabulary) — you will use them in next lesson’s workshop.',
  }),
  C.closeSlide(NEXT),
];

module.exports = { meta, slides };
