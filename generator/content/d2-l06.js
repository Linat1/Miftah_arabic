'use strict';
/* D2-L06 · Describing Appearance — A Full Physical Portrait — website: Pathways › Development › D2 › D2-L06 (لَهُ / لَهَا, شَعْرُهُ / شَعْرُهَا, dual eyes عَيْنَاهُ بُنِّيَّتَانِ, relative clauses الَّذِي / الَّتِي, respectful portrait order). */
const D = require('./d-common');
const X = require('./d2-lex');
const { q } = D;

const meta = D.meta('D2')({
  n: 6, fileTitle: 'Describing_Appearance', chip: 'Appearance',
  title: 'Describing Appearance — A Full Physical Portrait', arabic: 'وَصْفُ المَظْهَرِ — صُورَةٌ جِسْمِيَّةٌ كَامِلَةٌ',
  focus: 'Build a respectful portrait in order — height, hair, eyes, clothes: لَهُ / لَهَا (he / she has), hair is masculine, eyes are dual (عَيْنَاهَا بُنِّيَّتَانِ), and pick people out with الَّذِي / الَّتِي.',
  icon: 'FaUserPen', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });

const slides = D.devLesson('D2-L06', {
  support: `• Core: the portrait ORDER as four chunks — هُوَ / هِيَ طَوِيلُ / طَوِيلَةُ القَامَةِ · لَهُ / لَهَا شَعْرٌ … · عَيْنَاهُ / عَيْنَاهَا … · يَرْتَدِي / تَرْتَدِي … Develop: hair (masc.) and eyes (dual) agreement and الَّذِي / الَّتِي. Stretch: two people and a personality inference supported by behaviour (يَبْدُو … لِأَنَّهُ …).
• Respect is part of the success criteria (website rule 4 and quiz Q6): describe what you SEE, never judge (no “ugly / strange”). Use a picture, a character or a celebrity rather than a classmate.
• Two tricky points, taught visually: شَعْرٌ is masculine even for a girl (شَعْرُهَا طَوِيلٌ); eyes are TWO, feminine (عَيْنَانِ بُنِّيَّتَانِ).
• Urdu bridge: قد (height → القَامَةُ by meaning), شکل، عینک ≠ نَظَّارَةٌ, لباس، جسم.`,
  teach: 'He / she has …, hair and eyes agreement, who …',
  wedo: 'Picture match, accurate or not, fix and listen.',
  next: { nextCode: 'D2-L07', nextTitle: 'Listening — People, Personality and Style Descriptions', nextAr: 'الاِسْتِمَاعُ' },
  flexGroups: [1, 2],
  doNow: {
    questions: [
      q('What does شَعْرٌ مُجَعَّدٌ mean?', ['curly hair', 'straight hair', 'short hair'], 'Prepared at home.'),
      q('What does عَيْنَانِ بُنِّيَّتَانِ mean?', ['brown eyes', 'blue eyes', 'glasses'], 'Prepared at home.'),
      q('Complete: سَارَةُ ___ مِنْ أُخْتِهَا.', ['أَطْوَلُ', 'طَوِيلَةٌ', 'الأَطْوَلَ'], 'D2-L05: comparative + min.'),
      q('Choose “more confident”.', ['أَكْثَرُ ثِقَةً', 'أَكْثَرُ وَاثِقٌ', 'وَاثِقٌ مِنْ'], 'D2-L05: more + noun.'),
      q('Choose “this jacket”.', ['هٰذِهِ السُّتْرَةُ', 'هٰذَا السُّتْرَةُ', 'هٰذِهِ سُتْرَةٌ'], 'D2-L03: hādhihi.'),
    ],
    keyIdea: { text: 'He has → lahu. She has → lahā. Her hair is long → shaʿruhā ṭawīl (hair is masculine!).', ar: '{w|لَهُ} شَعْرٌ قَصِيرٌ · {e|لَهَا} شَعْرٌ طَوِيلٌ · عَيْنَا{e|هَا} بُنِّيَّتَانِ' },
    retrieves: 'Questions 1–2 test two of the five appearance words prepared at home. Questions 3–5 retrieve D2-L05 (comparatives) and D2-L03 (هٰذِهِ).',
  },
  routes: {
    core: ['I can describe height, hair and eyes in order.', 'I can say what he / she is wearing.'],
    develop: ['I can make hair and eyes agree correctly.', 'I can use الَّذِي / الَّتِي (the one who …).'],
    stretch: ['I can describe two people in a full, respectful portrait.', 'I can infer personality from behaviour (he seems … because …).'],
  },
  bridge: [
    { ar: 'القَامَةُ', urdu: 'قامت / قد', tr: 'qāmat', en: 'stature, height' },
    { ar: 'شَكْلٌ', urdu: 'شکل', tr: 'shakl', en: 'shape, appearance' },
    { ar: 'لِبَاسٌ', urdu: 'لباس', tr: 'libās', en: 'clothing' },
    { ar: 'نَظَّارَةٌ', urdu: 'عینک', tr: 'ainak', en: 'glasses (meaning only)' },
    { ar: 'جِسْمِيَّةٌ', urdu: 'جسم', tr: 'jism', en: 'body → physical' },
  ],
  bridgeNotes: 'URDU BRIDGE: قامت (as in قد و قامت) → طَوِيلُ القَامَةِ (tall). شکل → شَكْلٌ (كَيْفَ شَكْلُهُ؟ what does he look like?). لباس → لِبَاسٌ. جسم → جِسْمٌ / جِسْمِيَّةٌ. Urdu عینک is Persian; Arabic glasses = نَظَّارَةٌ (from نَظَرٌ, sight — Urdu نظر).',
  core: ['طَوِيلُ القَامَةِ / طَوِيلَةُ القَامَةِ', 'قَصِيرُ القَامَةِ / قَصِيرَةُ القَامَةِ', 'مُتَوَسِّطُ القَامَةِ / مُتَوَسِّطَةُ القَامَةِ', 'شَعْرٌ طَوِيلٌ', 'شَعْرٌ قَصِيرٌ', 'شَعْرٌ مُجَعَّدٌ', 'شَعْرٌ مُسْتَقِيمٌ', 'عَيْنَانِ بُنِّيَّتَانِ', 'يَرْتَدِي نَظَّارَةً', 'تَرْتَدِي نَظَّارَةً'],
  forms: X.formsFor('D2-L06', {
    'شَعْرٌ طَوِيلٌ': { tag: 'his · her', forms: [{ l: 'her', ar: 'شَعْرُهَا طَوِيلٌ' }, { l: 'his', ar: 'شَعْرُهُ طَوِيلٌ' }] },
    'شَعْرٌ قَصِيرٌ': { tag: 'his · her', forms: [{ l: 'her', ar: 'شَعْرُهَا قَصِيرٌ' }, { l: 'his', ar: 'شَعْرُهُ قَصِيرٌ' }] },
    'شَعْرٌ مُجَعَّدٌ': { tag: 'his · her', forms: [{ l: 'her', ar: 'شَعْرُهَا مُجَعَّدٌ' }, { l: 'his', ar: 'شَعْرُهُ مُجَعَّدٌ' }] },
    'شَعْرٌ مُسْتَقِيمٌ': { tag: 'his · her', forms: [{ l: 'her', ar: 'شَعْرُهَا مُسْتَقِيمٌ' }, { l: 'his', ar: 'شَعْرُهُ مُسْتَقِيمٌ' }] },
    'عَيْنَانِ بُنِّيَّتَانِ': { tag: 'one · two', forms: [{ l: 'her eyes', ar: 'عَيْنَاهَا' }, { l: 'blue (2)', ar: 'زَرْقَاوَانِ' }, { l: 'one', ar: 'عَيْنٌ بُنِّيَّةٌ' }] },
    'يَرْتَدِي نَظَّارَةً': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'نَظَّارَاتٌ' }, { l: 'glasses', ar: 'نَظَّارَةٌ' }, { l: 'she', ar: 'تَرْتَدِي' }] },
  }),
  vocabNotes: { 0: 'Hair cards show his / her: the ADJECTIVE never changes (hair is masculine). Eye card: two eyes = عَيْنَانِ + a dual adjective (-atāni). Height uses a compound: طَوِيلُ القَامَةِ (m.) / طَوِيلَةُ القَامَةِ (f.).', 1: 'Clothes in a portrait (FLEX) — D2-L03 words; after يَرْتَدِي the item takes -an: يَرْتَدِي قَمِيصًا أَبْيَضَ.', 2: 'Style and personality detail (FLEX).' },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the portrait in order: he vs she (website rules + table)', title: 'Height → hair → eyes → clothes', ar: 'القَامَةُ ← الشَّعْرُ ← العَيْنَانِ ← المَلَابِسُ',
      cols: [{ label: 'He', w: 4.3, size: 24 }, { label: 'She', w: 4.5, size: 24 }, { label: 'Step', w: 3.53 }],
      rows: [
        { core: true, cells: [{ ar: 'هُوَ طَوِيلُ القَامَةِ.' }, { ar: 'هِيَ طَوِيلَ{e|ةُ} القَامَةِ.' }, '1 · height'] },
        { core: true, cells: [{ ar: '{w|لَهُ} شَعْرٌ قَصِيرٌ وَمُجَعَّدٌ.' }, { ar: '{e|لَهَا} شَعْرٌ طَوِيلٌ مُسْتَقِيمٌ.' }, '2 · hair (he / she has)'] },
        { core: true, cells: [{ ar: 'شَعْرُ{w|هُ} قَصِيرٌ.' }, { ar: 'شَعْرُ{e|هَا} طَوِيلٌ.' }, '2 · his / her hair (masc. adjective!)'] },
        { cells: [{ ar: 'عَيْنَا{w|هُ} زَرْقَا{k|وَانِ}.' }, { ar: 'عَيْنَا{e|هَا} بُنِّيَّتَ{k|انِ}.' }, '3 · eyes (two, feminine)'] },
        { cells: [{ ar: 'يَرْتَدِي نَظَّارَةً وَقَمِيصًا أَبْيَضَ.' }, { ar: 'تَرْتَدِي حِجَابًا أَزْرَقَ.' }, '4 · clothes (-an after “wears”)'] },
      ],
      foot: 'Website rule: organise the details and avoid judgemental language — describe, don’t judge.',
      notes: `GRAMMAR PART 1 — website rules “Possession with لَهُ / لَهَا”, “Body-feature agreement” (hair is masculine; eyes are dual feminine) and “Respectful portrait order” (height → hair → eyes → clothes), with the website table (Reference · Possession · Relative pronoun).
Website common error: “Do not treat عَيْنَانِ as a singular masculine noun” — عَيْنَاهَا بُنِّيٌّ ✗ → عَيْنَاهَا بُنِّيَّتَانِ ✓.
Stretch: dual of colours — blue زَرْقَاوَانِ, green خَضْرَاوَانِ, brown بُنِّيَّتَانِ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · the one who … (website rule) · Develop / Stretch', title: 'Who is who in the picture?', ar: 'الَّذِي · الَّتِي',
      cards: [
        { chip: 'MASCULINE · DEVELOP', color: '1D5FBF', head: 'الَّذِي', big: 'هُوَ الشَّابُّ الَّذِي يَرْتَدِي نَظَّارَةً.', en: 'He is the young man who wears glasses.', clue: 'Man / boy → alladhī + ya-.' },
        { chip: 'FEMININE · DEVELOP', color: 'B83227', head: 'الَّتِي', big: 'هِيَ الفَتَاةُ الَّتِي لَهَا شَعْرٌ طَوِيلٌ.', en: 'She is the girl who has long hair.', clue: 'Woman / girl → allatī.' },
        { chip: 'INFERENCE · STRETCH', color: '6B4C9A', head: 'يَبْدُو / تَبْدُو', big: 'يَبْدُو هَادِئًا لِأَنَّهُ يَسْتَمِعُ إِلَى الآخَرِينَ.', en: 'He seems calm because he listens to others.', clue: 'Behaviour, not looks.' },
      ],
      error: { text: 'Website common error: a masculine person takes alladhī.', pairs: [['الوَلَدُ الَّذِي يَرْتَدِي نَظَّارَةً', 'الوَلَدُ الَّتِي تَرْتَدِي نَظَّارَةً']] },
      notes: `GRAMMAR PART 2 — website rule “Relative clause” (الَّذِي for masculine, الَّتِي for feminine antecedents) and the website model’s inference (يَبْدُو هَادِئًا لِأَنَّهُ …).
Game: show a class-picture (or a family photo from a textbook); students identify people: “مَنْ هِيَ؟ — هِيَ الفَتَاةُ الَّتِي تَرْتَدِي …”.`,
    },
  ],
  quick: [0, 1, 2, 3],
  ido: {
    title: 'Watch me describe a person in a picture',
    steps: [
      { head: 'Height', ar: 'هِيَ مُتَوَسِّطَ{e|ةُ} القَامَةِ.', think: 'She → -atu.' },
      { head: 'Hair', ar: '{e|لَهَا} شَعْرٌ طَوِيلٌ مُسْتَقِيمٌ.', think: 'She has … hair is masc.' },
      { head: 'Eyes', ar: 'عَيْنَا{e|هَا} بُنِّيَّتَ{k|انِ}.', think: 'Two eyes → dual.' },
      { head: 'Who + clothes', ar: 'هِيَ الفَتَاةُ {w|الَّتِي} تَرْتَدِي مِعْطَفًا أَزْرَقَ.', think: 'Girl → allatī.' },
    ],
    legend: ['e', 'k', 'w'], legendLabels: { e: 'SHE / HER', k: 'DUAL', w: 'WHO' },
    model: 'هِيَ مُتَوَسِّطَ{e|ةُ} القَامَةِ، وَ{e|لَهَا} شَعْرٌ طَوِيلٌ مُسْتَقِيمٌ، وَعَيْنَا{e|هَا} بُنِّيَّتَ{k|انِ}. هِيَ الفَتَاةُ {w|الَّتِي} تَرْتَدِي مِعْطَفًا أَزْرَقَ وَحَقِيبَةً سَوْدَاءَ. تَبْدُو وَاثِقَةً لِأَنَّهَا تَتَحَدَّثُ مَعَ الجَمِيعِ.',
    modelEn: 'She is of medium height, she has long straight hair, and her eyes are brown. She is the girl who is wearing a blue coat and a black bag. She seems confident because she talks to everyone.',
    notes: 'I DO (3 min) — the girl from the website listening, described in the website order with a think-aloud. Then students describe the young man from the same script aloud (tall, short curly hair, glasses, white shirt).',
  },
  game: {
    title: 'Who is it? Match the picture',
    pick: [0, 3, 4],
    en: ['He is tall.', 'His hair is curly.', 'She wears glasses.'],
    icons: [[['fa6', 'FaPerson', '1D5FBF'], ['fa6', 'FaArrowUp', '1E7B4F']], [['fa6', 'FaUser', '8A5A2B'], ['fa6', 'FaWind', '6B4C9A']], [['fa6', 'FaGlasses', '1F3A5F'], ['fa6', 'FaPersonDress', 'B83227']]],
    labels: ['tall', 'curly hair', 'glasses'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Other cards for homework: هِيَ قَصِيرَةٌ · شَعْرُهَا أَحْمَرُ (her hair is red — masc. colour!) · لَهُ عَيْنَانِ بُنِّيَّتَانِ.',
  },
  patch: {
    patterns: [
      { ar: 'لَهُ شَعْرٌ قَصِيرٌ.', en: 'He has short hair.', tip: 'lahu = he has.' },
      { ar: 'لَهَا عَيْنَانِ بُنِّيَّتَانِ.', en: 'She has brown eyes.', tip: 'Dual feminine agreement.' },
      { ar: 'هُوَ الشَّخْصُ الَّذِي يَرْتَدِي نَظَّارَةً.', en: 'He is the person who wears glasses.', tip: 'alladhī for a man.' },
      { ar: 'هِيَ مُتَوَسِّطَةُ القَامَةِ، وَلَهَا شَعْرٌ قَصِيرٌ، وَتَرْتَدِي مِعْطَفًا أَزْرَقَ.', en: 'She is of medium height, has short hair and wears a blue coat.', tip: 'Portrait order.' },
    ],
    mistakes: [
      { wrong: 'لَهَا شَعْرٌ طَوِيلَةٌ.', right: 'لَهَا شَعْرٌ طَوِيلٌ.', why: 'شَعْرٌ is masculine, even for a girl.' },
      { wrong: 'الوَلَدُ الَّتِي يَرْتَدِي نَظَّارَةً', right: 'الوَلَدُ الَّذِي يَرْتَدِي نَظَّارَةً', why: 'A masculine person takes الَّذِي.' },
      { wrong: 'عَيْنَاهَا بُنِّيٌّ.', right: 'عَيْنَاهَا بُنِّيَّتَانِ.', why: 'Two eyes → dual feminine.' },
    ],
    sorter: {
      title: 'Accurate portrait?', instructions: 'Check the person, the agreement and the relative pronoun.',
      categories: ['Accurate', 'Inaccurate'],
      items: [
        { label: 'لَهَا شَعْرٌ طَوِيلٌ.', answer: 0 }, { label: 'عَيْنَاهُ زَرْقَاوَانِ.', answer: 0 }, { label: 'الفَتَاةُ الَّتِي تَرْتَدِي حِجَابًا', answer: 0 }, { label: 'هِيَ طَوِيلَةُ القَامَةِ.', answer: 0 },
        { label: 'لَهُ شَعْرٌ طَوِيلَةٌ.', answer: 1 }, { label: 'عَيْنَاهَا بُنِّيٌّ.', answer: 1 }, { label: 'الوَلَدُ الَّتِي تَرْتَدِي', answer: 1 }, { label: 'هُوَ طَوِيلَةُ القَامَةِ.', answer: 1 },
      ],
    },
    listening: {
      questions: [
        L('How many people are described?', ['two', 'one', 'three'], 'يَصِفُ المُتَحَدِّثُ شَخْصَيْنِ.'),
        L('How tall is the young man?', ['tall', 'short', 'medium height'], 'شَابٌّ طَوِيلُ القَامَةِ.'),
        L('What is his hair like?', ['short and curly', 'long and straight', 'short and straight'], 'لَهُ شَعْرٌ قَصِيرٌ وَمُجَعَّدٌ.'),
        L('What does he wear?', ['glasses and a white shirt', 'a blue coat', 'a black bag'], 'يَرْتَدِي نَظَّارَةً وَقَمِيصًا أَبْيَضَ.'),
        L('What colour are the girl’s eyes?', ['brown', 'blue', 'green'], 'عَيْنَانِ بُنِّيَّتَانِ.'),
        L('How can you recognise the girl?', ['she wears a blue coat and a black bag', 'she wears glasses', 'she has short hair'], 'الَّتِي تَرْتَدِي مِعْطَفًا أَزْرَقَ وَحَقِيبَةً سَوْدَاءَ.'),
      ],
    },
    reading: {
      questions: [
        L('Where is the family standing?', ['in front of the house', 'in a park', 'at school'], 'تَقِفُ أَمَامَ البَيْتِ.'),
        L('How do we recognise the father?', ['a short beard and a grey jacket', 'glasses', 'a blue dress'], 'لَهُ لِحْيَةٌ قَصِيرَةٌ وَيَرْتَدِي سُتْرَةً رَمَادِيَّةً.'),
        L('How is the mother described?', ['medium height, long hair, a green headscarf', 'tall with short hair', 'short, wearing glasses'], 'مُتَوَسِّطَةُ القَامَةِ … حِجَابًا أَخْضَرَ.'),
        L('Where is the girl standing?', ['on the right', 'on the left', 'in the middle'], 'البِنْتُ الَّتِي تَقِفُ عَلَى اليَمِينِ.'),
        L('What is the girl wearing?', ['a blue dress', 'a green headscarf', 'a sports shirt'], 'تَرْتَدِي فُسْتَانًا أَزْرَقَ.'),
        L('How is the boy described?', ['short, wearing a sports shirt', 'tall with a beard', 'wearing a grey jacket'], 'قَصِيرُ القَامَةِ وَيَرْتَدِي قَمِيصًا رِيَاضِيًّا.'),
      ],
    },
  },
  sorterCats: ['Accurate', 'Inaccurate'],
  hints: ['Is hair masculine or feminine?', 'A boy → alladhī or allatī?', 'Two eyes → which ending?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 5.\nListen for: طَوِيلُ القَامَةِ · نَظَّارَةً · بُنِّيَّتَانِ.',
  listenRoutes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 6. (Questions are teacher-written: the website questions for this script are generic.)',
  gloss: [
    ['يَصِفُ المُتَحَدِّثُ شَخْصَيْنِ فِي صُورَةٍ.', 'The speaker describes two people in a picture.'],
    ['الأَوَّلُ شَابٌّ طَوِيلُ القَامَةِ، لَهُ شَعْرٌ قَصِيرٌ وَمُجَعَّدٌ،', 'The first is a tall young man; he has short, curly hair,'],
    ['وَيَرْتَدِي نَظَّارَةً وَقَمِيصًا أَبْيَضَ.', 'and he wears glasses and a white shirt.'],
    ['الثَّانِيَةُ فَتَاةٌ مُتَوَسِّطَةُ القَامَةِ، لَهَا شَعْرٌ طَوِيلٌ مُسْتَقِيمٌ وَعَيْنَانِ بُنِّيَّتَانِ.', 'The second is a girl of medium height; she has long straight hair and brown eyes.'],
    ['هِيَ الفَتَاةُ الَّتِي تَرْتَدِي مِعْطَفًا أَزْرَقَ وَحَقِيبَةً سَوْدَاءَ.', 'She is the girl who is wearing a blue coat and (has) a black bag.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ شَخْصًا فِي صُورَةٍ.' },
      { route: 'develop', ar: 'صِفْ مَلَابِسَ شَخْصٍ تَعْرِفُهُ.' },
      { route: 'develop', ar: 'اِسْتَعْمِلِ الَّذِي أَوِ الَّتِي فِي وَصْفٍ.' },
      { route: 'stretch', ar: 'مَا الفَرْقُ بَيْنَ وَصْفِ المَظْهَرِ وَالحُكْمِ عَلَى الشَّخْصِيَّةِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'هُوَ / هِيَ ______ القَامَةِ ، لَهُ / لَهَا شَعْرٌ ______ .' },
      { route: 'develop', ar: 'يَرْتَدِي / تَرْتَدِي ______ وَ ______ .' },
      { route: 'develop', ar: 'هُوَ الشَّخْصُ الَّذِي … / هِيَ الفَتَاةُ الَّتِي ______ .' },
      { route: 'stretch', ar: 'يَبْدُو / تَبْدُو ______ لِأَنَّهُ / لِأَنَّهَا ______ .' },
    ],
    modelEn: ['Who is your brother in the picture?', 'He is the young man who wears glasses.'],
    notes: 'Website prompts (order changed for routes). Website model continues: A: كَيْفَ مَظْهَرُهُ؟ (What does he look like?) B: هُوَ طَوِيلُ القَامَةِ وَلَهُ شَعْرٌ قَصِيرٌ. Use a picture on screen (a family photo from a textbook, or a famous person) — not a classmate.',
  },
  write: {
    core: { amount: '5 sentences', how: 'One person in order: height, hair, eyes, two items of clothing (use the Core frames).' },
    develop: { amount: '8 sentences', how: 'Two people with his / her, eyes (dual) and one “the one who …” sentence.' },
    stretch: { amount: '100–120 words', how: 'Website task: a respectful full portrait of two people — height, hair, eyes, features, clothes and one personality inference from behaviour.' },
  },
  frames: {
    core: [
      { en: 'He / she is tall / short / medium height.', ar: 'هُوَ / هِيَ ______ القَامَةِ.' },
      { en: 'He has … hair.', ar: 'لَهُ شَعْرٌ ______ .' },
      { en: 'She has … hair.', ar: 'لَهَا شَعْرٌ ______ .' },
      { en: 'His / her eyes are brown.', ar: 'عَيْنَاهُ / عَيْنَاهَا بُنِّيَّتَانِ.' },
      { en: 'He / she wears …', ar: 'يَرْتَدِي / تَرْتَدِي ______ .' },
    ],
    develop: [
      { en: 'His hair is short and curly.', ar: 'شَعْرُهُ قَصِيرٌ وَمُجَعَّدٌ.' },
      { en: 'Her hair is long and straight.', ar: 'شَعْرُهَا طَوِيلٌ وَمُسْتَقِيمٌ.' },
      { en: 'He is the person who …', ar: 'هُوَ الشَّخْصُ الَّذِي ______ .' },
      { en: 'She is the girl who …', ar: 'هِيَ الفَتَاةُ الَّتِي ______ .' },
      { en: 'He / she seems … because …', ar: 'يَبْدُو / تَبْدُو ______ لِأَنَّهُ / لِأَنَّهَا ______ .' },
    ],
    bank: ['طَوِيلُ القَامَةِ', 'قَصِيرُ القَامَةِ', 'مُتَوَسِّطُ القَامَةِ', 'لَهُ', 'لَهَا', 'شَعْرٌ مُجَعَّدٌ', 'شَعْرٌ مُسْتَقِيمٌ', 'عَيْنَانِ بُنِّيَّتَانِ', 'نَظَّارَةً', 'الَّذِي', 'الَّتِي', 'يَبْدُو'],
  },
  stretch: [
    ['فِي هٰذِهِ الصُّورَةِ شَخْصَانِ', 'in this picture there are two people'],
    ['يَبْدُو هَادِئًا لِأَنَّهُ يَسْتَمِعُ إِلَى الآخَرِينَ', 'he seems calm because he listens to others'],
    ['تَبْدُو وَاثِقَةً وَمَرِحَةً', 'she seems confident and cheerful'],
    ['لِأَنَّهَا تَتَحَدَّثُ مَعَ الجَمِيعِ', 'because she talks to everyone'],
    ['لَا يَحْكُمُ عَلَيْهِ مِنْ مَظْهَرِهِ فَقَطْ', 'does not judge him by his appearance alone'],
  ],
  modelEn: 'In this picture there are two people. The first is a tall young man; he has short, curly hair and brown eyes. He is the person who is wearing glasses, a white shirt and black trousers. He seems calm because he listens to others. As for the girl, she is of medium height and has long straight hair. She is the girl who is wearing a blue headscarf and a grey coat. She seems confident and cheerful because she talks to everyone. A precise description respects the person and does not judge them by their appearance alone.',
  find: ['the portrait order for the young man', 'الَّذِي and الَّتِي', 'an inference with يَبْدُو … لِأَنَّ', 'the respectful closing sentence'],
  modelNotes: 'Evidence: طَوِيلُ القَامَةِ ← لَهُ شَعْرٌ … ← عَيْنَانِ بُنِّيَّتَانِ ← يَرْتَدِي … · الشَّخْصُ الَّذِي / الفَتَاةُ الَّتِي · يَبْدُو هَادِئًا لِأَنَّهُ يَسْتَمِعُ · الوَصْفُ الدَّقِيقُ يَحْتَرِمُ الشَّخْصَ.',
  selfCheck: [
    { route: 'core', text: 'I described height, hair, eyes and clothes in order.' },
    { route: 'core', text: 'I used lahu for him and lahā for her.' },
    { route: 'develop', text: 'Hair adjectives are masculine; eyes are dual.' },
    { route: 'develop', text: 'I used alladhī / allatī correctly.' },
    { route: 'stretch', text: 'My inference is based on behaviour, not looks.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['فِي الصُّورَةِ', 'in the picture'], ['تَقِفُ أَمَامَ', 'standing in front of'], ['الرَّجُلُ', 'the man'], ['لِحْيَةٌ قَصِيرَةٌ', 'a short beard'], ['رَمَادِيَّةً', 'grey'],
    ['حِجَابًا أَخْضَرَ', 'a green headscarf'], ['البِنْتُ', 'the girl'], ['عَلَى اليَمِينِ', 'on the right'], ['الوَلَدُ', 'the boy'], ['قَمِيصًا رِيَاضِيًّا', 'a sports shirt'],
  ],
  prep: {
    words: [['لِذٰلِكَ', 'therefore, so', ''], ['بَيْنَمَا', 'whereas, while', ''], ['عَلَى الرَّغْمِ مِنْ أَنَّ', 'although', ''], ['مِنْ جِهَةٍ أُخْرَى', 'on the other hand', ''], ['خُصُوصًا', 'especially', '']],
    questionEn: 'When you listen to someone describe a person, which words help you most: names, pronouns (he / she) or connectors (but, whereas)?',
    questionAr: 'كَيْفَ تَسْتَمِعُ جَيِّدًا؟',
    homework: {
      core: 'Website D2-L06: the picture game and the vocabulary tab (height, hair and eyes).',
      develop: 'Describe two people from a photo in 8 sentences (use الَّذِي / الَّتِي).',
      stretch: 'Website writing task: a respectful full portrait of two people (100–120 words).',
    },
    wordsSource: 'The five words come from the website D2-L07 vocabulary (listening signals).',
  },
  remember: 'Remember: hair is masculine, eyes are two — and describe, don’t judge.',
});

module.exports = { meta, slides };
