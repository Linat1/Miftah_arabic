'use strict';
/* D4-L05 · The Digital World — Technology and Social Media — website: Pathways › Development › D4 › D4-L05 (digital vocabulary, verbs with fixed prepositions يَتَفَاعَلُ مَعَ / يُعَلِّقُ عَلَى / يَبْحَثُ عَنْ / يَعْتَمِدُ عَلَى, balanced contrast مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى, concession, pronoun reference عَلَيْهِ / عَلَيْهَا; two vowel slips corrected: يُتَابِعُ, مِنَصَّةً). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D4')({
  n: 5, fileTitle: 'The_Digital_World_Technology_and_Social_Media', chip: 'Digital World',
  title: 'The Digital World — Technology and Social Media', arabic: 'العَالَمُ الرَّقْمِيُّ — التِّقْنِيَّةُ وَوَسَائِلُ التَّوَاصُلِ',
  focus: 'Talk about how you use technology and evaluate it: digital verbs with the right preposition (يَتَفَاعَلُ مَعَ · يُعَلِّقُ عَلَى), benefits and risks, a balanced view (مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى) and a qualified judgement.',
  icon: 'FaMobileScreenButton', iconSet: 'fa6',
});

const site = D.site('D4-L05');
const vocab = site.vocab.map((g) => ({ ...g, items: g.items.map((it) => (it.ar === 'يَتَابِعُ' ? { ...it, ar: 'يُتَابِعُ' } : it)) }));
const P = (a, b) => ({ ar: a, sub: b });
const ihs = (i, he, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'he', ar: he }, { l: 'I', ar: i }] });
const slides = D.devLesson('D4-L05', {
  support: `• Core: 10 digital words + “I use … to …” and four verbs with their preposition (أَتَفَاعَلُ مَعَ · أُعَلِّقُ عَلَى · أَبْحَثُ عَنْ · أَعْتَمِدُ عَلَى). Develop: one benefit and one risk with مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى. Stretch: a concession (عَلَى الرَّغْمِ مِنْ أَنَّ …، فَـ …) and a qualified conclusion (شَرِيطَةَ أَنْ …).
• This is the “2028 vocabulary” lesson (website label): AI, passwords, brands, distance learning — words from the new GCSE / IGCSE lists.
• Safeguarding: cyberbullying (التَّنَمُّرُ الإِلِكْتُرُونِيُّ) appears — remind students of the school’s reporting route; examples stay general.
• Links: D3-L06 / L09 concession (عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ), D4-L03 يُؤَدِّي إِلَى.`,
  teach: 'Digital words, verbs + prepositions, and a balanced judgement.',
  wedo: 'Picture match, sort the words, fix and listen: a student’s digital routine.',
  next: { nextCode: 'D4-L06', nextTitle: 'Green Technology — AI, Solar Energy and Smart Cities', nextAr: 'التِّقْنِيَّةُ الخَضْرَاءُ' },
  objectives: ['Name digital tools, actions, benefits and risks.', 'Use digital verbs with their fixed prepositions.', 'Balance a benefit and a risk with مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى.', 'Give a qualified judgement about technology.'],
  rulesTitle: 'Grammar and collocations of the digital world',
  rulesAr: 'قَوَاعِدُ العَالَمِ الرَّقْمِيِّ وَمُتَلَازِمَاتُهُ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does تَطْبِيقٌ mean?', ['an app', 'a platform', 'a website'], 'Prepared at home (D4-L04).'),
      q('What does الخُصُوصِيَّةُ mean?', ['privacy', 'security', 'a password'], 'Prepared at home (D4-L04).'),
      q('Complete: يَنْبَغِي أَنْ ___ اسْتِخْدَامَ البِلَاسْتِيكِ.', ['نُقَلِّلَ', 'قَلَّلْنَا', 'سَنُقَلِّلُ'], 'D4-L04: an + -a.'),
      q('Which structure gives a concession?', ['عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …', 'لِكَيْ …', 'يُؤَدِّي إِلَى …'], 'D3-L09.'),
      q('Complete: يَتَّسِمُ السَّاحِلُ ___ مَنَاخٍ مُعْتَدِلٍ.', ['بِـ', 'مَعَ', 'عَنْ'], 'D4-L01: a verb with a fixed preposition.'),
    ],
    keyIdea: { text: 'Many digital verbs come with a fixed preposition — learn them as pairs.', ar: 'يَتَفَاعَلُ {w|مَعَ} · يُعَلِّقُ {e|عَلَى} · يَبْحَثُ {k|عَنْ} · يَعْتَمِدُ {e|عَلَى}' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of D4-L04. Question 3 retrieves D4-L04; question 4 D3-L09 (concession); question 5 D4-L01 (verb + fixed preposition).',
  },
  routes: {
    core: ['I can say how I use technology.', 'I can use four digital verbs with their preposition.'],
    develop: ['I can give a benefit and a risk.', 'I can balance them with min nāḥiya … ukhrā.'],
    stretch: ['I can make a concession.', 'I can give a qualified judgement (sharīṭata an …).'],
  },
  bridge: [
    { ar: 'مَعْلُومَاتٌ', urdu: 'معلومات', tr: 'maʿlūmāt', en: 'information' },
    { ar: 'رَقْمِيٌّ', urdu: 'رقم', tr: 'raqam', en: 'number / amount → digital' },
    { ar: 'إِدْمَانٌ', urdu: 'عادت / لت', tr: 'lat', en: 'addiction (meaning only)' },
    { ar: 'أَمَانٌ', urdu: 'امان', tr: 'amān', en: 'safety, security' },
    { ar: 'تَعْلِيقٌ / يُعَلِّقُ', urdu: 'تعلق', tr: 'taʿalluq', en: 'Urdu: connection · Arabic: comment' },
  ],
  bridgeNotes: 'URDU BRIDGE: معلومات، امان are shared; رقم (an amount of money) → رَقْمِيٌّ (digital: “of numbers”). CAREFUL: Urdu تعلق = a relationship / connection, but Arabic تَعْلِيقٌ / يُعَلِّقُ عَلَى = a comment / to comment on (a post).',
  core: ['الذَّكَاءُ الاصْطِنَاعِيُّ', 'كَلِمَةُ المُرُورِ / كَلِمَةُ السِّرِّ', 'التَّعَلُّمُ عَنْ بُعْدٍ', 'مَوْقِعٌ إِلِكْتُرُونِيٌّ', 'تَطْبِيقٌ', 'مِنَصَّةٌ', 'يَنْشُرُ', 'يَتَفَاعَلُ مَعَ', 'يُعَلِّقُ عَلَى', 'يَبْحَثُ عَنْ', 'الخُصُوصِيَّةُ', 'التَّنَمُّرُ الإِلِكْتُرُونِيُّ'],
  forms: {
    'يَنْشُرُ': ihs('أَنْشُرُ', 'يَنْشُرُ', 'تَنْشُرُ'), 'يُحَمِّلُ': ihs('أُحَمِّلُ', 'يُحَمِّلُ', 'تُحَمِّلُ'), 'يُنَزِّلُ': ihs('أُنَزِّلُ', 'يُنَزِّلُ', 'تُنَزِّلُ'),
    'يَتَفَاعَلُ مَعَ': ihs('أَتَفَاعَلُ', 'يَتَفَاعَلُ', 'تَتَفَاعَلُ'), 'يُعَلِّقُ عَلَى': ihs('أُعَلِّقُ', 'يُعَلِّقُ', 'تُعَلِّقُ'), 'يَبْحَثُ عَنْ': ihs('أَبْحَثُ', 'يَبْحَثُ', 'تَبْحَثُ'),
  },
  vocabNotes: {
    0: 'Digital tools: many are modern compounds (adjective + noun). تَطْبِيقٌ → pl. تَطْبِيقَاتٌ; مِنَصَّةٌ → pl. مِنَصَّاتٌ.',
    1: 'Online actions: the cards show I · he · she. Learn the preposition with the verb: مَعَ، عَلَى، عَنْ.',
    2: 'Benefits and risks: the last two cards (on the one hand … on the other hand) are the balance frame for today.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · verb + fixed preposition (website rules 1 and 4)', title: 'Learn the verb with its preposition', ar: 'الفِعْلُ وَحَرْفُ الجَرِّ',
      cols: [{ label: 'Verb + preposition', w: 3.6, size: 24 }, { label: 'Example', w: 6.0, size: 22 }, { label: 'Meaning', w: 2.73 }],
      rows: [
        { core: true, cells: [{ ar: 'يَتَفَاعَلُ {w|مَعَ}' }, P('يَتَفَاعَلُ الطُّلَّابُ {w|مَعَ} المُعَلِّمِ.', 'Students interact with the teacher.'), 'interacts with'] },
        { core: true, cells: [{ ar: 'يُعَلِّقُ {e|عَلَى}' }, P('يُعَلِّقُ المُسْتَخْدِمُ {e|عَلَى} المَنْشُورِ.', 'The user comments on the post.'), 'comments on'] },
        { core: true, cells: [{ ar: 'يَبْحَثُ {k|عَنْ}' }, P('أَبْحَثُ {k|عَنْ} مَعْلُومَاتٍ لِلْوَاجِبِ.', 'I search for information for homework.'), 'searches for'] },
        { cells: [{ ar: 'يَعْتَمِدُ {e|عَلَى}' }, P('لَا يَجِبُ أَنْ نَعْتَمِدَ {e|عَلَيْهِ} كُلِّيًّا.', 'We must not rely on it completely.'), 'relies on (+ -hi / -hā)'] },
      ],
      ltr: true,
      foot: 'Refer back with the right pronoun: ʿalayhi (m.: al-mawqiʿ) · fīhā / ʿalayhā (f.: al-minaṣṣa).',
      notes: `GRAMMAR PART 1 — website rules “Keep the verb with its required preposition” (Arabic digital verbs often govern a specific preposition; changing it makes the phrase inaccurate) and “Pronoun reference” (عَلَيْهِ for a masculine noun, عَلَيْهَا for a feminine noun). Website examples: يَتَفَاعَلُ الطُّلَّابُ مَعَ المُعَلِّمِ · يُعَلِّقُ المُسْتَخْدِمُ عَلَى المَنْشُورِ · المَوْقِعُ مُفِيدٌ، وَلٰكِنْ يَجِبُ التَّحَقُّقُ مِمَّا يُنْشَرُ عَلَيْهِ.
Website mistakes: يَتَفَاعَلُ … عَلَى ✗ → مَعَ ✓ · يُعَلِّقُ … مَعَ ✗ → عَلَى ✓.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · balance and concession (website rules 2–3) · Develop / Stretch', title: 'On one hand … on the other … — but …', ar: 'مِنْ نَاحِيَةٍ · عَلَى الرَّغْمِ مِنْ أَنَّ',
      cards: [
        { chip: 'BENEFIT · DEVELOP', color: '1E7B4F', head: 'مِنْ نَاحِيَةٍ', big: 'مِنْ نَاحِيَةٍ، يُسَهِّلُ التَّعَلُّمُ عَنْ بُعْدٍ الوُصُولَ إِلَى الدُّرُوسِ،', en: 'On the one hand, distance learning makes lessons easy to access,', clue: 'The first side.' },
        { chip: 'RISK · DEVELOP', color: 'B83227', head: 'وَمِنْ نَاحِيَةٍ أُخْرَى', big: 'وَمِنْ نَاحِيَةٍ أُخْرَى، قَدْ يَزِيدُ وَقْتَ الشَّاشَةِ.', en: 'on the other hand, it may increase screen time.', clue: 'The other side.' },
        { chip: 'CONCESSION · STRETCH', color: '6B4C9A', head: 'عَلَى الرَّغْمِ مِنْ أَنَّ … فَـ', big: 'عَلَى الرَّغْمِ مِنْ أَنَّ الذَّكَاءَ الاصْطِنَاعِيَّ مُفِيدٌ، فَلَا يَجِبُ أَنْ نَعْتَمِدَ عَلَيْهِ كُلِّيًّا.', en: 'Although AI is useful, we must not rely on it completely.', clue: 'The full connector.' },
      ],
      error: { text: 'Website mistake: the complete connector is ʿalā al-raghmi MIN anna.', pairs: [['عَلَى الرَّغْمِ مِنْ أَنَّ …', 'عَلَى الرَّغْمِ أَنَّ …']] },
      notes: `GRAMMAR PART 2 — website rules “Balanced contrast” (present a benefit and a limitation before reaching a judgement) and “Concession with عَلَى الرَّغْمِ مِنْ أَنَّ” (use أَنَّ with a noun or attached pronoun; the sentence that follows states the unexpected contrast). Website examples as shown.
Qualified judgement (Stretch, from the writing model): التِّقْنِيَّةُ إِيجَابِيَّةٌ شَرِيطَةَ أَنْ نَسْتَخْدِمَهَا بِمَسْؤُولِيَّةٍ (… provided that we use it responsibly).`,
    },
  ],
  quick: [0, 1, 3, 4],
  rest: [2, 5, 6, 7],
  ido: {
    title: 'Watch me evaluate distance learning',
    steps: [
      { head: 'How I use it', ar: 'أَسْتَخْدِمُ مِنَصَّةً وَ{w|أَتَفَاعَلُ مَعَ} المُعَلِّمِ.', think: 'Verb + its preposition.' },
      { head: 'Benefit', ar: '{k|مِنْ نَاحِيَةٍ}، تُسَاعِدُنِي عَلَى التَّعَلُّمِ فِي أَيِّ مَكَانٍ.', think: 'First side.' },
      { head: 'Risk', ar: '{k|وَمِنْ نَاحِيَةٍ أُخْرَى}، قَدْ تَزِيدُ وَقْتَ الشَّاشَةِ.', think: 'Other side.' },
      { head: 'Judgement', ar: 'أُؤَيِّدُهَا {e|شَرِيطَةَ أَنْ} نَسْتَخْدِمَهَا بِوَعْيٍ.', think: 'Qualified.' },
    ],
    legend: ['w', 'k', 'e'], legendLabels: { w: 'VERB + PREP.', k: 'BALANCE', e: 'CONDITION' },
    model: 'أَسْتَخْدِمُ مِنَصَّةً لِلتَّعَلُّمِ عَنْ بُعْدٍ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ. {w|أَتَفَاعَلُ مَعَ} المُعَلِّمِ، وَ{w|أُعَلِّقُ عَلَى} أَفْكَارِ زُمَلَائِي. {k|مِنْ نَاحِيَةٍ}، تُسَاعِدُنِي المِنَصَّةُ عَلَى التَّعَلُّمِ فِي أَيِّ مَكَانٍ، {k|وَمِنْ نَاحِيَةٍ أُخْرَى}، أَحْتَاجُ إِلَى تَقْلِيلِ وَقْتِ الشَّاشَةِ. فِي رَأْيِي، هِيَ مُفِيدَةٌ {e|شَرِيطَةَ أَنْ} نَسْتَخْدِمَهَا بِوَعْيٍ.',
    modelEn: 'I use a distance-learning platform three times a week. I interact with the teacher and comment on my classmates’ ideas. On the one hand, the platform helps me learn anywhere; on the other hand, I need to reduce my screen time. In my opinion, it is useful provided that we use it consciously.',
    notes: 'I DO (3 min) — built from the website listening (a student’s digital routine) + the website qualified judgement (شَرِيطَةَ أَنْ). Ask: why نَسْتَخْدِمَهَا and not نَسْتَخْدِمَهُ? (المِنَصَّةُ is feminine).',
  },
  patternEn: ['Students interact with the teacher.', 'On the one hand, distance learning makes lessons accessible; on the other hand, it may increase screen time.', 'Although artificial intelligence is useful, we must not rely on it completely.'],
  game: {
    title: 'How do we use technology? Match the picture',
    pick: [0, 2, 3],
    en: ['I use my phone to communicate.', 'We must protect our privacy online.', 'AI helps to solve some problems.'],
    icons: [[['fa6', 'FaMobileScreen', '1D5FBF'], ['fa6', 'FaComments', '1E7B4F']], [['fa6', 'FaLock', 'B83227'], ['fa6', 'FaUserShield', '5A6472']], [['fa6', 'FaRobot', '6B4C9A'], ['fa6', 'FaLightbulb', 'C77700']]],
    labels: ['phone · chatting', 'lock · protection', 'robot · idea'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Other cards: أَسْتَخْدِمُ الحَاسُوبَ لِلدِّرَاسَةِ · الاِسْتِخْدَامُ المُفْرِطُ لِلْهَاتِفِ يُؤَثِّرُ فِي النَّوْمِ · وَسَائِلُ التَّوَاصُلِ تَرْبِطُ النَّاسَ. Stretch: say each card as a benefit or a risk.',
  },
  sorterNotes: 'Then make one balanced sentence: مِنْ نَاحِيَةٍ + a benefit, وَمِنْ نَاحِيَةٍ أُخْرَى + a risk.',
  patch: {
    vocab,
    listening: { script: site.listening.script.replace('مَنْصَّةً', 'مِنَصَّةً') },
    speaking: {
      model: [
        ['A', 'مَا رَأْيُكَ فِي التَّعَلُّمِ عَنْ بُعْدٍ؟', 'What do you think of distance learning?'],
        ['B', 'مِنْ نَاحِيَةٍ، هُوَ مُرِنٌ وَيُسَهِّلُ الوُصُولَ إِلَى الدُّرُوسِ، وَمِنْ نَاحِيَةٍ أُخْرَى، قَدْ يُقَلِّلُ التَّفَاعُلَ المُبَاشِرَ. أُؤَيِّدُهُ شَرِيطَةَ أَنْ يَكُونَ آمِنًا وَتَفَاعُلِيًّا.', 'On one hand it is flexible and makes lessons accessible; on the other hand it may reduce direct interaction. I support it provided it is safe and interactive.'],
      ],
    },
  },
  patchNote: 'two vowel slips corrected (website: يَتَابِعُ → يُتَابِعُ, مَنْصَّةً → مِنَصَّةً) and English added to the website speaking model.',
  hints: ['yatafāʿalu + which preposition?', 'yuʿalliqu + which preposition?', 'ʿalā al-raghmi … what is missing?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: ثَلَاثَ مَرَّاتٍ · المُعَلِّمِ · وَاجِبَاتِي.',
  listenRoutes: 'Core: questions 1–3. Develop / Stretch: all 6.',
  gloss: [
    ['أَسْتَخْدِمُ مِنَصَّةً لِلتَّعَلُّمِ عَنْ بُعْدٍ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ.', 'I use a distance-learning platform three times a week.'],
    ['أَتَفَاعَلُ مَعَ المُعَلِّمِ، وَأُحَمِّلُ وَاجِبَاتِي، وَأُعَلِّقُ عَلَى أَفْكَارِ زُمَلَائِي.', 'I interact with the teacher, upload my homework and comment on my classmates’ ideas.'],
    ['مِنْ نَاحِيَةٍ، تُسَاعِدُنِي المِنَصَّةُ عَلَى التَّعَلُّمِ فِي أَيِّ مَكَانٍ.', 'On the one hand, the platform helps me learn anywhere.'],
    ['وَمِنْ نَاحِيَةٍ أُخْرَى، أَحْتَاجُ إِلَى تَقْلِيلِ وَقْتِ الشَّاشَةِ.', 'On the other hand, I need to reduce screen time.'],
    ['لِذٰلِكَ أَسْتَخْدِمُ كَلِمَةَ مُرُورٍ قَوِيَّةً وَأَتَوَقَّفُ عَنِ الاسْتِخْدَامِ قَبْلَ النَّوْمِ.', 'So I use a strong password and stop using it before sleep.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'كَيْفَ تَسْتَخْدِمُ التِّقْنِيَّةَ؟' },
      { route: 'develop', ar: 'مَا فَوَائِدُ التَّعَلُّمِ عَنْ بُعْدٍ؟' },
      { route: 'stretch', ar: 'مَا مَخَاطِرُ وَسَائِلِ التَّوَاصُلِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَسْتَخْدِمُ ______ لِـ ______ ، وَأَتَفَاعَلُ مَعَ ______ .' },
      { route: 'develop', ar: 'مِنْ نَاحِيَةٍ ______ ، وَمِنْ نَاحِيَةٍ أُخْرَى ______ .' },
      { route: 'stretch', ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَـ ______ شَرِيطَةَ أَنْ ______ .' },
    ],
    modelEn: ['What do you think of distance learning?', 'On one hand it is flexible and makes lessons accessible; on the other hand it may reduce direct interaction. I support it provided it is safe and interactive.'],
    notes: 'Website prompts and model. Students at an online school are experts on distance learning — invite real experiences (positive and negative). To a girl: كَيْفَ تَسْتَخْدِمِينَ التِّقْنِيَّةَ؟',
  },
  write: {
    core: { amount: '5 sentences', how: 'How you use technology: three verbs with their prepositions + one benefit.' },
    develop: { amount: '100–120 words', how: 'One benefit and one risk balanced with min nāḥiya … ukhrā.' },
    stretch: { amount: '120–140 words', how: 'Website task: evaluate technology or social media with a concession and a qualified conclusion.' },
  },
  frames: {
    core: [
      { en: 'I use … to …', ar: 'أَسْتَخْدِمُ ______ لِـ ______ .' },
      { en: 'I interact with …', ar: 'أَتَفَاعَلُ مَعَ ______ .' },
      { en: 'I search for … online.', ar: 'أَبْحَثُ عَنْ ______ عَلَى الإِنْتَرْنِتِ.' },
      { en: 'I use a strong password.', ar: 'أَسْتَخْدِمُ كَلِمَةَ مُرُورٍ قَوِيَّةً.' },
    ],
    develop: [
      { en: 'On the one hand, …', ar: 'مِنْ نَاحِيَةٍ، ______ ،' },
      { en: 'on the other hand, …', ar: 'وَمِنْ نَاحِيَةٍ أُخْرَى، ______ .' },
      { en: 'Although … is useful, …', ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ مُفِيدٌ، فَـ ______ .' },
      { en: '… provided that we use it responsibly.', ar: '______ شَرِيطَةَ أَنْ نَسْتَخْدِمَهُ بِمَسْؤُولِيَّةٍ.' },
    ],
    bank: ['الذَّكَاءُ الاصْطِنَاعِيُّ', 'التَّعَلُّمُ عَنْ بُعْدٍ', 'مِنَصَّةٌ', 'تَطْبِيقٌ', 'يَتَفَاعَلُ مَعَ', 'يُعَلِّقُ عَلَى', 'يَبْحَثُ عَنْ', 'يَعْتَمِدُ عَلَى', 'الخُصُوصِيَّةُ', 'إِدْمَانُ الشَّاشَاتِ', 'مِنْ نَاحِيَةٍ … أُخْرَى', 'شَرِيطَةَ أَنْ'],
  },
  stretch: [
    ['أَصْبَحَ … جُزْءًا مِنْ …', '… has become part of …'],
    ['يُسَاعِدُ عَلَى تَنْظِيمِ الأَفْكَارِ', 'helps organise ideas'],
    ['يَجِبُ التَّحَقُّقُ مِنَ المَصَادِرِ', 'sources must be checked'],
    ['قَدْ يَتَعَرَّضُ لِمَعْلُومَاتٍ مُضَلِّلَةٍ', 'may be exposed to misinformation'],
    ['شَرِيطَةَ أَنْ نَسْتَخْدِمَهَا بِمَسْؤُولِيَّةٍ', 'provided that we use it responsibly'],
  ],
  modelEn: 'Technology has become an essential part of our lives. On the one hand, distance learning makes lessons accessible, and AI helps organise ideas. On the other hand, heavy use may lead to screen addiction, and users may be exposed to misinformation. Although platforms are useful, we must protect our privacy and use strong passwords. In my opinion, technology is positive provided that we use it responsibly.',
  find: ['four 2028 digital terms', 'a benefit and a risk', 'a verb with its preposition', 'a qualified conclusion'],
  modelNotes: 'Website writing model. Evidence: التَّعَلُّمُ عَنْ بُعْدٍ، الذَّكَاءُ الاصْطِنَاعِيُّ، المِنَصَّاتِ، كَلِمَاتِ مُرُورٍ · مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى · يُسَاعِدُ عَلَى، تُؤَدِّي إِلَى · عَلَى الرَّغْمِ مِنْ أَنَّ … فَيَجِبُ · شَرِيطَةَ أَنْ نَسْتَخْدِمَهَا.',
  selfCheck: [
    { route: 'core', text: 'My digital verbs have the right preposition.' },
    { route: 'core', text: 'I used four digital words.' },
    { route: 'develop', text: 'I balanced a benefit and a risk.' },
    { route: 'develop', text: 'Pronouns match (-hu / -hā).' },
    { route: 'stretch', text: 'I made a concession and a qualified judgement.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['جُزْءًا مِنَ', 'part of'], ['المَفَاهِيمِ', 'concepts'], ['تَنْظِيمِ أَفْكَارِهِمْ', 'organising their ideas'], ['وَمَعَ ذٰلِكَ', 'however'], ['يُنْتِجُهَا', 'it produces'],
    ['دَقِيقَةً', 'accurate'], ['التَّحَقُّقُ مِنَ المَصَادِرِ', 'checking the sources'], ['إِدْخَالِ البَيَانَاتِ', 'entering data'], ['غَيْرِ آمِنَةٍ', 'unsafe'], ['بِوَعْيٍ', 'consciously'],
  ],
  prep: {
    words: [['الأَلْوَاحُ الشَّمْسِيَّةُ', 'solar panels', 'sing. لَوْحٌ'], ['مَدِينَةٌ ذَكِيَّةٌ', 'a smart city', 'pl. مُدُنٌ ذَكِيَّةٌ'], ['تُوَلِّدُ', 'generates', 'يُوَلِّدُ he / it (m.)'], ['فَعَّالٌ', 'effective', 'f. فَعَّالَةٌ'], ['مُكَلِّفٌ', 'expensive, costly', 'f. مُكَلِّفَةٌ']],
    questionEn: 'Have you seen solar panels near your home or school? Write one sentence.',
    questionAr: 'رَأَيْتُ أَلْوَاحًا شَمْسِيَّةً عَلَى …',
    homework: {
      core: 'Learn 12 digital words and 4 verb + preposition pairs; write 5 sentences.',
      develop: 'Benefit and risk of one technology in 100–120 words.',
      stretch: 'Website writing task: evaluate technology or social media (120–140 words).',
    },
    wordsSource: 'The five words come from the website D4-L06 vocabulary (green technology).',
  },
  remember: 'Remember: learn digital verbs with their preposition — balance both sides — qualify your judgement.',
});

module.exports = { meta, slides };
