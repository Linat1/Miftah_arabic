'use strict';
/* D4-L04 · Environmental Solutions — What Can Be Done? — website: Pathways › Development › D4 › D4-L04 (solution nouns, “we” action verbs, advice يَنْبَغِي أَنْ, obligation يَجِبُ عَلَى … أَنْ, purpose لِكَيْ, subjunctive -a and the five verbs losing -na). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D4')({
  n: 4, fileTitle: 'Environmental_Solutions_What_Can_Be_Done', chip: 'Solutions',
  title: 'Environmental Solutions — What Can Be Done?', arabic: 'الحُلُولُ البِيئِيَّةُ — مَاذَا يُمْكِنُ أَنْ نَفْعَلَ؟',
  focus: 'Propose and justify solutions: what we should do (يَنْبَغِي أَنْ نُقَلِّلَ), who must act (يَجِبُ عَلَى الحُكُومَةِ أَنْ …), why (لِكَيْ …) — with the verb in -a after أَنْ / لِكَيْ, and the -ūna → -ū change for “they / you all”.',
  icon: 'FaSeedling', iconSet: 'fa6',
});

const site = D.site('D4-L04');
const quiz = site.grammar.quiz.map((it, i) => {
  if (i === 0) return { ...it, options: ['يَنْبَغِي أَنْ نُقَلِّلَ اسْتِخْدَامَ البِلَاسْتِيكِ.', 'يَنْبَغِي أَنْ قَلَّلْنَا اسْتِخْدَامَ البِلَاسْتِيكِ.', 'يَنْبَغِي نُقَلِّلَ اسْتِخْدَامَ البِلَاسْتِيكِ.'], answer: 0 };
  if (i === 3) return { ...it, options: ['نَزْرَعُ الأَشْجَارَ لِكَيْ نُحَسِّنَ جَوْدَةَ الهَوَاءِ.', 'نَزْرَعُ الأَشْجَارَ لِكَيْ حَسَّنَّا جَوْدَةَ الهَوَاءِ.', 'نَزْرَعُ الأَشْجَارَ لِكَيْ تَحْسِينُ الهَوَاءِ.'], answer: 0 };
  if (i === 4) return { ...it, options: ['أَنْ يُعِيدُوا التَّدْوِيرَ', 'أَنْ يُعِيدُونَ التَّدْوِيرَ', 'أَنْ أَعَادُوا التَّدْوِيرَ'], answer: 0 };
  return it;
});
const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const P = (a, b) => ({ ar: a, sub: b });
const we = (we1, i, they) => ({ tag: 'we · I · they', forms: [{ l: 'they', ar: they }, { l: 'I', ar: i }, { l: 'we', ar: we1 }] });
const slides = D.devLesson('D4-L04', {
  support: `• Core: 8 solution words + “we should …” with the verb in -a (يَنْبَغِي أَنْ نُقَلِّلَ / نَزْرَعَ / نُعِيدَ التَّدْوِيرَ). Develop: who must act (يَجِبُ عَلَى الحُكُومَةِ / المَدَارِسِ أَنْ …) and a purpose with لِكَيْ. Stretch: individual + government responsibility, a limitation, and the five verbs (أَنْ يُعِيدُوا).
• The -a after أَنْ is familiar (F4-L06, F5-L10, D3-L03 / L04). NEW: “they / you all” verbs drop -na: يُعِيدُونَ → أَنْ يُعِيدُوا.
• Positive lesson after D4-L03: the class makes a real “green pledge” for the school in the You Do.
• Islamic Studies link (teacher choice): stewardship of the earth (الأَرْضُ أَمَانَةٌ) and the Prophetic teaching against waste even at a flowing river.`,
  teach: 'Solutions, “we” verbs, should / must / in order to — and the -a ending.',
  wedo: 'Picture match, sort the words, fix and listen: practical solutions.',
  next: { nextCode: 'D4-L05', nextTitle: 'The Digital World — Technology and Social Media', nextAr: 'العَالَمُ الرَّقْمِيُّ' },
  objectives: ['Name practical environmental solutions in Arabic.', 'Give advice with يَنْبَغِي أَنْ + verb in -a.', 'Say who must act with يَجِبُ عَلَى … أَنْ and why with لِكَيْ.', 'Propose and evaluate solutions to one problem.'],
  rulesTitle: 'Advice, obligation and purpose',
  rulesAr: 'النُّصْحُ وَالوُجُوبُ وَالغَرَضُ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does إِعَادَةُ التَّدْوِيرِ mean?', ['recycling', 'renewable energy', 'tree planting'], 'Prepared at home (D4-L03).'),
      q('What does يَنْبَغِي أَنْ mean?', ['should', 'leads to', 'because of'], 'Prepared at home (D4-L03).'),
      q('Complete: يُؤَدِّي التَّلَوُّثُ ___ أَمْرَاضٍ.', ['إِلَى', 'فِي', 'مِنْ'], 'D4-L03.'),
      q('Which is passive?', ['تُقْطَعُ الأَشْجَارُ.', 'يَقْطَعُونَ الأَشْجَارَ.', 'قَطَعْنَا الأَشْجَارَ.'], 'D4-L03: tu-…-a-.'),
      q('Complete: سَأَدْرُسُ بِجِدٍّ لِكَيْ ___ .', ['أَنْجَحَ', 'نَجَحْتُ', 'سَأَنْجَحُ'], 'D3-L04: li-kay + verb in -a.'),
    ],
    keyIdea: { text: 'Problem → solution: we should …, the government must …, in order to … — verb in -a every time.', ar: 'يَنْبَغِي أَنْ {w|نُقَلِّلَ} · يَجِبُ عَلَى الحُكُومَةِ أَنْ {e|تَسْتَثْمِرَ} · لِكَيْ {k|نَحْمِيَ} البِيئَةَ' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of D4-L03. Questions 3–4 retrieve D4-L03; question 5 retrieves D3-L04 (li-kay + -a).',
  },
  routes: {
    core: ['I can name eight solutions.', 'I can say what we should do.'],
    develop: ['I can say who must act and why.', 'I can use li-kay with the verb in -a.'],
    stretch: ['I can share responsibility between people and government.', 'I can evaluate a limitation of a solution.'],
  },
  bridge: [
    { ar: 'طَاقَةٌ', urdu: 'طاقت', tr: 'tāqat', en: 'Urdu: strength · Arabic: energy' },
    { ar: 'حَلٌّ', urdu: 'حل', tr: 'hal', en: 'solution' },
    { ar: 'حُكُومَةٌ', urdu: 'حکومت', tr: 'hukūmat', en: 'government' },
    { ar: 'ضَرُورِيٌّ', urdu: 'ضروری', tr: 'zarūrī', en: 'necessary' },
    { ar: 'اسْتِعْمَالٌ', urdu: 'استعمال', tr: 'istiʿmāl', en: 'use' },
  ],
  bridgeNotes: 'URDU BRIDGE: حل، حکومت، ضروری، استعمال are shared. طاقت in Urdu means strength or power; in Arabic طَاقَةٌ is energy (الطَّاقَةُ الشَّمْسِيَّةُ = solar energy).',
  core: ['إِعَادَةُ التَّدْوِيرِ', 'الطَّاقَةُ المُتَجَدِّدَةُ', 'الطَّاقَةُ الشَّمْسِيَّةُ', 'التَّشْجِيرُ', 'تَرْشِيدُ المِيَاهِ', 'النَّقْلُ العَامُّ', 'نُقَلِّلُ مِنْ', 'نَزْرَعُ', 'نُعِيدُ التَّدْوِيرَ', 'يَنْبَغِي أَنْ', 'يَجِبُ عَلَى ... أَنْ', 'لِكَيْ'],
  forms: {
    'نُقَلِّلُ مِنْ': we('نُقَلِّلُ', 'أُقَلِّلُ', 'يُقَلِّلُونَ'), 'نُوَفِّرُ': we('نُوَفِّرُ', 'أُوَفِّرُ', 'يُوَفِّرُونَ'), 'نَزْرَعُ': we('نَزْرَعُ', 'أَزْرَعُ', 'يَزْرَعُونَ'),
    'نُعِيدُ التَّدْوِيرَ': we('نُعِيدُ', 'أُعِيدُ', 'يُعِيدُونَ'), 'نَسْتَخْدِمُ': we('نَسْتَخْدِمُ', 'أَسْتَخْدِمُ', 'يَسْتَخْدِمُونَ'), 'نَسْتَثْمِرُ فِي': we('نَسْتَثْمِرُ', 'أَسْتَثْمِرُ', 'يَسْتَثْمِرُونَ'),
  },
  vocabNotes: {
    0: 'Solutions: noun phrases (verbal nouns): إِعَادَةُ التَّدْوِيرِ = the re-doing of recycling, تَرْشِيدُ المِيَاهِ = rationalising water.',
    1: 'Action verbs in the “we” form (na- / nu-). Cards show we · I · they — the “they” form ends in -ūna (it loses -na after أَنْ!).',
    2: 'Advice, obligation and purpose: every one is followed by أَنْ / لِكَيْ + a verb in -a.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · should / must / in order to (website rules 1–3)', title: 'After an and li-kay: the verb ends in -a', ar: 'أَنْ · لِكَيْ + المُضَارِعُ المَنْصُوبُ',
      cols: [{ label: 'Example', w: 7.6, size: 22 }, { label: 'Pattern', w: 4.73 }],
      rows: [
        { core: true, cells: [P('يَنْبَغِي أَنْ {w|نُقَلِّلَ} اسْتِخْدَامَ البِلَاسْتِيكِ.', 'We should reduce plastic use.'), 'should: yanbaghī an + -a'] },
        { core: true, cells: [P('يَجِبُ {e|عَلَى الحُكُومَةِ} أَنْ {w|تَسْتَثْمِرَ} فِي الطَّاقَةِ المُتَجَدِّدَةِ.', 'The government must invest in renewable energy.'), 'must: yajibu ʿalā + WHO + an'] },
        { core: true, cells: [P('نَسْتَخْدِمُ النَّقْلَ العَامَّ {k|لِكَيْ} {w|نُقَلِّلَ} الانْبِعَاثَاتِ.', 'We use public transport to reduce emissions.'), 'purpose: li-kay + -a'] },
        { cells: [P('يُمْكِنُ أَنْ {w|نَسْتَخْدِمَ} الطَّاقَةَ الشَّمْسِيَّةَ.', 'We can use solar energy.'), 'possible: yumkinu an'] },
      ],
      ltr: true,
      foot: 'nuqallilu → an nuqallila: only the final vowel changes (-u → -a).',
      notes: `GRAMMAR PART 1 — website rules “Advice with يَنْبَغِي أَنْ” (a sound-ending present verb changes its final ḍamma to fatḥa after أَنْ), “Obligation for a person or group” (name the responsible person or group after عَلَى) and “Purpose with لِكَيْ”. Website examples as shown.
Agreement reminder: يَجِبُ عَلَى الحُكُومَةِ أَنْ تَـ… (the government = she); عَلَى المَدَارِسِ أَنْ تُعِيدَ (non-human plural = she).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · the five verbs (website rule 4) · Develop / Stretch', title: 'They / you all: -ūna → -ū', ar: 'الأَفْعَالُ الخَمْسَةُ',
      cards: [
        { chip: 'WE · CORE', color: '1D5FBF', head: 'نُعِيدُ → أَنْ نُعِيدَ', big: 'يَجِبُ أَنْ نُعِيدَ التَّدْوِيرَ.', en: 'We must recycle.', clue: 'Only -u → -a.' },
        { chip: 'THEY · DEVELOP', color: '6B4C9A', head: 'يُعِيدُونَ → أَنْ يُعِيدُوا', big: 'يَجِبُ عَلَى النَّاسِ أَنْ يُعِيدُوا التَّدْوِيرَ.', en: 'People must recycle.', clue: '-na drops; alif is written.' },
        { chip: 'YOU ALL · STRETCH', color: 'B83227', head: 'تُقَلِّلُونَ → أَنْ تُقَلِّلُوا', big: 'يَجِبُ عَلَيْكُمْ أَنْ تُقَلِّلُوا النُّفَايَاتِ.', en: 'You (all) must reduce waste.', clue: 'Same rule for “you all”.' },
      ],
      error: { text: 'Website mistake: the five verbs lose -na after an.', pairs: [['أَنْ يُعِيدُوا التَّدْوِيرَ', 'أَنْ يُعِيدُونَ التَّدْوِيرَ']] },
      notes: `GRAMMAR PART 2 — website rule “The five verbs after أَنْ” (only the five verbs lose their final nūn: يُعِيدُونَ → أَنْ يُعِيدُوا; ordinary forms such as نُقَلِّلُ do not contain that nūn). Website common error: “Do not say that every subjunctive verb ‘loses nūn’. Only the five verbs lose their nūn. A form such as نُقَلِّلَ is marked by final fatḥa.”
The five verbs: يَفْعَلُونَ، تَفْعَلُونَ، يَفْعَلَانِ، تَفْعَلَانِ، تَفْعَلِينَ (Stretch: تَفْعَلِينَ → أَنْ تَفْعَلِي, as in F5 advice to a girl).`,
    },
  ],
  quick: [0, 2, 3, 5],
  rest: [1, 4, 6, 7],
  ido: {
    title: 'Watch me propose solutions to a school problem',
    steps: [
      { head: 'Problem', ar: 'تُعَانِي مَدْرَسَتُنَا مِنْ زِيَادَةِ النُّفَايَاتِ.', think: 'One sentence only.' },
      { head: 'We should', ar: 'يَنْبَغِي أَنْ {w|نُقَلِّلَ} الأَكْيَاسَ البِلَاسْتِيكِيَّةَ.', think: 'an + -a.' },
      { head: 'Who must', ar: 'يَجِبُ عَلَى الطُّلَّابِ أَنْ {e|يُعِيدُوا} التَّدْوِيرَ.', think: 'They: -ū (no -na).' },
      { head: 'Why', ar: 'نَسْتَخْدِمُ زُجَاجَاتٍ {k|لِكَيْ} {w|نُقَلِّلَ} النُّفَايَاتِ.', think: 'Purpose.' },
    ],
    legend: ['w', 'e', 'k'], legendLabels: { w: 'VERB IN -a', e: 'FIVE VERBS', k: 'PURPOSE' },
    model: 'تُعَانِي مَدْرَسَتُنَا مِنْ زِيَادَةِ النُّفَايَاتِ البِلَاسْتِيكِيَّةِ. لِحَلِّ هٰذِهِ المُشْكِلَةِ، يَنْبَغِي أَنْ {w|نُقَلِّلَ} اسْتِخْدَامَ الأَكْوَابِ وَالأَكْيَاسِ. وَيَجِبُ عَلَى الطُّلَّابِ أَنْ {e|يُعِيدُوا} التَّدْوِيرَ، كَمَا يَجِبُ عَلَى الإِدَارَةِ أَنْ {w|تُوَفِّرَ} حَاوِيَاتٍ مُنَاسِبَةً. وَيُمْكِنُ أَنْ نَسْتَخْدِمَ زُجَاجَاتٍ قَابِلَةً لِإِعَادَةِ الاسْتِخْدَامِ {k|لِكَيْ} {w|نُقَلِّلَ} كَمِّيَّةَ البِلَاسْتِيكِ.',
    modelEn: 'Our school suffers from increasing plastic waste. To solve this problem, we should reduce the use of cups and bags. Students must recycle, and the administration must provide suitable bins. We can use reusable bottles in order to reduce the amount of plastic.',
    notes: 'I DO (3 min) — the website writing model (first part), built step by step: problem → we should → who must → why. Highlight every verb after أَنْ / لِكَيْ.',
  },
  patternEn: ['We should reduce the use of plastic.', 'The government must invest in renewable energy.', 'We use public transport to reduce emissions.'],
  game: {
    title: 'What should we do? Match the picture',
    pick: [0, 1, 4],
    en: ['We must recycle.', 'We should use public transport.', 'We should save water.'],
    icons: [[['fa6', 'FaRecycle', '1E7B4F'], ['fa6', 'FaBottleWater', '1D5FBF']], [['fa6', 'FaBus', 'C77700'], ['fa6', 'FaPeopleGroup', '5A6472']], [['fa6', 'FaShower', '1D5FBF'], ['fa6', 'FaFaucetDrip', '6B9BD1']]],
    labels: ['recycling', 'bus · people', 'shower · tap'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Ask: what happens to the verb after أَنْ? (-a). Other cards: يَجِبُ أَنْ نَزْرَعَ أَشْجَارًا أَكْثَرَ · يَجِبُ أَنْ نُقَلِّلَ اسْتِهْلَاكَ الطَّاقَةِ · يُمْكِنُ أَنْ نَسْتَخْدِمَ الطَّاقَةَ الشَّمْسِيَّةَ.',
  },
  sorterNotes: 'Then build a solution sentence with one item from each group: يَنْبَغِي أَنْ نُعِيدَ التَّدْوِيرَ …',
  patch: {
    grammar: { quiz },
    speaking: {
      model: [
        ['A', 'مَاذَا يَجِبُ عَلَى المَدْرَسَةِ أَنْ تَفْعَلَ؟', 'What must the school do?'],
        ['B', 'يَجِبُ عَلَى المَدْرَسَةِ أَنْ تَضَعَ حَاوِيَاتٍ لِإِعَادَةِ التَّدْوِيرِ، وَأَنْ تُنَظِّمَ حَمْلَةً لِكَيْ تُقَلِّلَ النُّفَايَاتِ.', 'The school must put out recycling bins and organise a campaign in order to reduce waste.'],
      ],
    },
  },
  patchNote: 'three website quiz items had options differing only in final vowels (distractors replaced with meaningful errors); English added to the website speaking model.',
  hints: ['After an: -u or -a?', 'yuʿīdūna after an?', 'After li-kay: -u or -a?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: البِلَاسْتِيكِ · الوَرَقِ · الطَّاقَةِ.',
  listenRoutes: 'Core: questions 1–3. Develop / Stretch: all 6.',
  gloss: [
    ['هُنَاكَ حُلُولٌ عَمَلِيَّةٌ لِحِمَايَةِ البِيئَةِ.', 'There are practical solutions to protect the environment.'],
    ['يَنْبَغِي أَنْ نُقَلِّلَ اسْتِخْدَامَ البِلَاسْتِيكِ،', 'We should reduce the use of plastic,'],
    ['وَيَجِبُ عَلَى المَدَارِسِ أَنْ تُعِيدَ تَدْوِيرَ الوَرَقِ.', 'and schools must recycle paper.'],
    ['كَمَا يَجِبُ عَلَى الحُكُومَاتِ أَنْ تَسْتَثْمِرَ فِي الطَّاقَةِ الشَّمْسِيَّةِ وَطَاقَةِ الرِّيَاحِ.', 'Governments must also invest in solar and wind energy.'],
    ['وَيُمْكِنُ لِلأُسَرِ أَنْ تُرَشِّدَ المَاءَ لِكَيْ تَحْمِيَ المَوَارِدَ الطَّبِيعِيَّةَ.', 'And families can save water in order to protect natural resources.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَاذَا يَنْبَغِي أَنْ نَفْعَلَ؟' },
      { route: 'develop', ar: 'مَاذَا يَجِبُ عَلَى الحُكُومَةِ أَنْ تَفْعَلَ؟' },
      { route: 'stretch', ar: 'أَيُّ حَلٍّ أَكْثَرُ فَعَالِيَّةً وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'يَنْبَغِي أَنْ نُقَلِّلَ / نَزْرَعَ / نُعِيدَ ______ .' },
      { route: 'develop', ar: 'يَجِبُ عَلَى الحُكُومَةِ أَنْ ______ لِكَيْ ______ .' },
      { route: 'stretch', ar: 'فِي رَأْيِي، ______ أَكْثَرُ فَعَالِيَّةً لِأَنَّ ______ ، وَلٰكِنَّ ______ .' },
    ],
    modelEn: ['What must the school do?', 'The school must put out recycling bins and organise a campaign in order to reduce waste.'],
    notes: 'Website prompts and model. Class “green pledge”: each student says one يَنْبَغِي أَنْ … for the school; the teacher writes the best five on a slide for the next lesson.',
  },
  write: {
    core: { amount: '5 sentences', how: 'One problem + three solutions with yanbaghī an / yajibu an + verb in -a.' },
    develop: { amount: '100–120 words', how: 'Solutions with who must act (ʿalā …) and why (li-kay).' },
    stretch: { amount: '120–140 words', how: 'Website task: individual + government responsibility, a limitation, and a conclusion.' },
  },
  frames: {
    core: [
      { en: 'Our school / town suffers from …', ar: 'تُعَانِي مَدْرَسَتُنَا / مَدِينَتُنَا مِنْ ______ .' },
      { en: 'We should reduce …', ar: 'يَنْبَغِي أَنْ نُقَلِّلَ ______ .' },
      { en: 'We must plant …', ar: 'يَجِبُ أَنْ نَزْرَعَ ______ .' },
      { en: 'We can use …', ar: 'يُمْكِنُ أَنْ نَسْتَخْدِمَ ______ .' },
    ],
    develop: [
      { en: 'The government must …', ar: 'يَجِبُ عَلَى الحُكُومَةِ أَنْ ______ .' },
      { en: 'Students must recycle.', ar: 'يَجِبُ عَلَى الطُّلَّابِ أَنْ يُعِيدُوا التَّدْوِيرَ.' },
      { en: '… in order to protect …', ar: '______ لِكَيْ نَحْمِيَ ______ .' },
      { en: 'However, one limitation is that …', ar: 'وَلٰكِنْ مِنْ عُيُوبِ هٰذَا الحَلِّ أَنَّ ______ .' },
    ],
    bank: ['إِعَادَةُ التَّدْوِيرِ', 'الطَّاقَةُ الشَّمْسِيَّةُ', 'التَّشْجِيرُ', 'النَّقْلُ العَامُّ', 'نُقَلِّلَ', 'نَزْرَعَ', 'نُعِيدَ', 'نَسْتَخْدِمَ', 'يَنْبَغِي أَنْ', 'يَجِبُ عَلَى … أَنْ', 'لِكَيْ', 'مِنَ الضَّرُورِيِّ أَنْ'],
  },
  stretch: [
    ['لِحَلِّ هٰذِهِ المُشْكِلَةِ', 'to solve this problem'],
    ['حَمْلَةُ تَوْعِيَةٍ', 'an awareness campaign'],
    ['قَابِلَةٌ لِإِعَادَةِ الاسْتِخْدَامِ', 'reusable'],
    ['عَلَاوَةً عَلَى ذٰلِكَ', 'moreover'],
    ['عَمَلِيَّةٌ وَقَابِلَةٌ لِلتَّطْبِيقِ', 'practical and feasible'],
  ],
  modelEn: 'Our school suffers from increasing plastic waste. To solve this problem, we should reduce the use of single-use cups and bags. Students must recycle, and the administration must provide suitable bins. We can use reusable bottles in order to reduce the amount of plastic. Moreover, it is necessary to spread environmental awareness. In my opinion, these steps are practical and feasible.',
  find: ['yanbaghī an + -a', 'yajibu ʿalā … an', 'li-kay + -a', 'a five-verb form (-ū)'],
  modelNotes: 'Website writing model. Evidence: يَنْبَغِي أَنْ نُقَلِّلَ · يَجِبُ عَلَى الطُّلَّابِ أَنْ يُعِيدُوا (five verbs) · يَجِبُ عَلَى الإِدَارَةِ أَنْ تُوَفِّرَ · لِكَيْ نُقَلِّلَ · مِنَ الضَّرُورِيِّ أَنْ نَنْشُرَ · فِي رَأْيِي … قَابِلَةٌ لِلتَّطْبِيقِ.',
  selfCheck: [
    { route: 'core', text: 'After an / li-kay my verbs end in -a.' },
    { route: 'core', text: 'I gave three solutions.' },
    { route: 'develop', text: 'I named who must act (ʿalā …).' },
    { route: 'develop', text: 'They / you all: -ū without -na.' },
    { route: 'stretch', text: 'I evaluated a limitation.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['لِحَلِّ', 'to solve'], ['الأَغْلِفَةَ البِلَاسْتِيكِيَّةَ', 'plastic packaging'], ['نَضَعَ', 'we put'], ['حَاوِيَاتٍ', 'bins, containers'], ['يَفْصِلُوا … عَنِ', 'separate … from'],
    ['الإِدَارَةِ', 'the administration'], ['حَمْلَةَ تَوْعِيَةٍ', 'an awareness campaign'], ['زُجَاجَاتٍ', 'bottles'], ['قَابِلَةً لِإِعَادَةِ الاسْتِخْدَامِ', 'reusable'], ['كَمِّيَّةَ', 'the amount'],
  ],
  prep: {
    words: [['تَطْبِيقٌ', 'an app', 'pl. تَطْبِيقَاتٌ'], ['مِنَصَّةٌ', 'a platform', 'pl. مِنَصَّاتٌ'], ['يَنْشُرُ', 'posts, publishes', 'أَنْشُرُ I'], ['الخُصُوصِيَّةُ', 'privacy', '—'], ['الذَّكَاءُ الاصْطِنَاعِيُّ', 'artificial intelligence', '—']],
    questionEn: 'Which app do you use most? Write one sentence.',
    questionAr: 'أَسْتَخْدِمُ تَطْبِيقَ …',
    homework: {
      core: 'Learn 8 solution words; write 5 sentences with yanbaghī an + -a.',
      develop: 'Solutions to one problem in 100–120 words with yajibu ʿalā and li-kay.',
      stretch: 'Website writing task: solutions with responsibility and a limitation (120–140 words).',
    },
    wordsSource: 'The five words come from the website D4-L05 vocabulary (the digital world).',
  },
  remember: 'Remember: should / must / can / in order to + verb in -a — they & you all: -ūna → -ū.',
});

module.exports = { meta, slides };
