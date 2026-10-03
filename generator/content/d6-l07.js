'use strict';
/* D6-L07 · D6 Grammar Consolidation — All Tenses Together — website: Pathways › Development › D6 › D6-L07 (past · present · future in one text, each clause
 * matching its own time phrase; الَّذِي / الَّتِي agreeing with the noun before them; لَنْ + subjunctive; one comparative at a time; passive with a nominative
 * subject; formal connectors عَلَى الرَّغْمِ مِنْ · لِكَيْ · شَرِيطَةَ أَنْ). Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking and
 * writing used as published; the connector عِلَاوَةً shown as عَلَاوَةً; English added to the patterns and speaking model. Website visual game used (3 of 6). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D6')({
  n: 7, fileTitle: 'Grammar_Consolidation_All_Tenses', chip: 'Grammar',
  title: 'D6 Grammar Consolidation — All Tenses Together', arabic: 'تَرْسِيخُ قَوَاعِدِ الوَحْدَةِ — جَمِيعُ الأَزْمِنَةِ مَعًا',
  focus: 'Bring the whole Development grammar system into one text: past (كَانَتْ تَحْتَفِلُ), present (نَحْتَفِلُ الآنَ) and future (سَنَحْتَفِلُ · لَنْ نَتَخَلَّى) — plus a relative clause, ONE comparative, a passive and a formal connector, each checked before you join it to the next.',
  icon: 'FaLayerGroup', iconSet: 'fa6',
});

const fix = (v) => (typeof v === 'string' ? v.replace(/عِلَاوَةً/g, 'عَلَاوَةً')
  : Array.isArray(v) ? v.map(fix) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, fix(x)])) : v);
const site = fix(D.site('D6-L07'));
const vf = (i, past) => ({ tag: 'I · past', forms: [{ l: 'past', ar: past }, { l: 'I', ar: i }] });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D6-L07', {
  support: `• Core: six sentences, two in each tense, each verb matching its time phrase (فِي المَاضِي · الآنَ · فِي العَامِ القَادِمِ). Develop: add a relative clause (الَّذِي / الَّتِي) and one comparative. Stretch: the website 90–100-word paragraph with a passive, لِكَيْ and شَرِيطَةَ أَنْ.
• This is a CONSOLIDATION lesson before the D6 assessment (D6-L12). No new grammar: the aim is accuracy when structures are combined. Teach the habit “write one clause → check it → join it”.
• End with each student naming ONE structure they still need to practise (مَجَالُ التَّحْسِينِ) — collect these to plan D6-L11.`,
  teach: 'Three tenses, relative agreement, لَنْ, one comparative, the passive.',
  wedo: 'Sort by tense, fix stacked structures, then one family across three tenses.',
  next: { nextCode: 'D6-L08', nextTitle: 'Reading — Countries, Culture and Celebration Texts', nextAr: 'القِرَاءَةُ — نُصُوصُ الدُّوَلِ وَالثَّقَافَةِ وَالاحْتِفَالَاتِ' },
  objectives: ['Write accurate past, present and future in one connected text.', 'Make الَّذِي / الَّتِي agree with the noun before them.', 'Combine a passive, a comparative and a formal connector accurately.', 'Name my own grammar target before the final assessment.'],
  rulesAr: 'النِّظَامُ كَامِلًا فِي نَصٍّ وَاحِدٍ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does مُرَاجَعَةٌ شَامِلَةٌ mean?', ['a comprehensive review', 'a short test', 'a new lesson'], 'Prepared at home (D6-L06).'),
      q('What does الاِسْمُ المَوْصُولُ mean?', ['the relative pronoun', 'the passive', 'the comparative'], 'Prepared at home (D6-L06).'),
      q('What does إِتْقَانٌ mean?', ['mastery', 'mistake', 'meaning'], 'Prepared at home (D6-L06).'),
      q('Choose the accurate sentence.', ['تُثْرِي العَرَبِيَّةُ تَفْكِيرَنَا.', 'تُثْرِي العَرَبِيَّةُ بِتَفْكِيرِنَا.', 'تُثْرِي العَرَبِيَّةُ إِلَى تَفْكِيرِنَا.'], 'D6-L06: a direct object, no preposition.'),
      q('Choose the accurate comparative.', ['مَدِينَتُنَا أَصْغَرُ مِنَ القَاهِرَةِ.', 'مَدِينَتُنَا أَكْثَرُ أَصْغَرُ مِنَ القَاهِرَةِ.', 'مَدِينَتُنَا الأَصْغَرُ مِنَ القَاهِرَةِ.'], 'D6-L05: one comparative at a time.'),
    ],
    keyIdea: { text: 'Each clause carries its own time — so the tense can change inside one sentence.', ar: '{w|فِي المَاضِي} احْتَفَلْنَا، وَ{k|الآنَ} نَحْتَفِلُ، وَ{e|سَنَحْتَفِلُ} غَدًا' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D6-L06. Questions 4–5 retrieve the direct-object verbs (D6-L06) and the single comparative (D6-L05).',
  },
  routes: {
    core: ['I can write two sentences in each tense.', 'Each verb matches its time phrase.'],
    develop: ['I can add a relative clause that agrees.', 'I can add one accurate comparative.'],
    stretch: ['I can combine a passive, لِكَيْ and شَرِيطَةَ أَنْ.', 'I can name my own grammar target.'],
  },
  bridge: [
    { ar: 'المَاضِي', urdu: 'ماضی', tr: 'māzī', en: 'the past (same word)' },
    { ar: 'المُسْتَقْبَلُ', urdu: 'مستقبل', tr: 'mustaqbil', en: 'the future (same word)' },
    { ar: 'الحَاضِرُ', urdu: 'حال / حاضر', tr: 'ḥāl / ḥāzir', en: 'the present · Urdu حاضر = present, in attendance' },
    { ar: 'زَمَنٌ', urdu: 'زمانہ', tr: 'zamāna', en: 'time, tense' },
    { ar: 'قُوَّةٌ', urdu: 'قوت', tr: 'quwwat', en: 'strength (نِقَاطُ القُوَّةِ = strengths)' },
  ],
  bridgeNotes: 'URDU BRIDGE: ماضی، مستقبل، زمانہ and قوت are shared with Arabic — Urdu grammar even uses فعل ماضی and فعل مستقبل. CAREFUL: Urdu usually says حال for the present tense; Arabic says الحَاضِرُ or المُضَارِعُ.',
  core: ['مُرَاجَعَةٌ شَامِلَةٌ', 'الزَّمَنُ المَاضِي', 'الزَّمَنُ الحَاضِرُ', 'الزَّمَنُ المُسْتَقْبَلُ', 'الاِسْمُ المَوْصُولُ', 'المَبْنِيُّ لِلْمَجْهُولِ', 'اسْمُ التَّفْضِيلِ', 'كَانَ + مُضَارِع', 'سَـ / سَوْفَ', 'لَنْ + مَنْصُوب', 'الَّذِي / الَّتِي', 'عَلَى الرَّغْمِ مِنْ'],
  forms: {
    'الَّذِي / الَّتِي': { tag: 'm · f · pl', forms: [{ l: 'm. pl.', ar: 'الَّذِينَ' }, { l: 'f. pl.', ar: 'اللَّوَاتِي' }] },
    'نِقَاطُ القُوَّةِ': { tag: 'sg · pl', forms: [{ l: 'sg.', ar: 'نُقْطَةُ قُوَّةٍ' }] },
    'مَجَالَاتُ التَّحْسِينِ': { tag: 'sg · pl', forms: [{ l: 'sg.', ar: 'مَجَالُ تَحْسِينٍ' }] },
    'يَحْتَفِلُ بِـ': vf('أَحْتَفِلُ', 'اِحْتَفَلَ'), 'يَنْتَمِي إِلَى': vf('أَنْتَمِي', 'اِنْتَمَى'), 'يَتَكَيَّفُ مَعَ': vf('أَتَكَيَّفُ', 'تَكَيَّفَ'),
    'يَحْتَفِظُ بِـ': vf('أَحْتَفِظُ', 'اِحْتَفَظَ'), 'يَتَمَسَّكُ بِـ': vf('أَتَمَسَّكُ', 'تَمَسَّكَ'),
  },
  vocabNotes: {
    0: 'Talking about grammar: the names of the tenses and structures, so students can say what they checked — and what they still need (مَجَالَاتُ التَّحْسِينِ).',
    1: 'Structures to combine: each one comes from an earlier unit (D2–D5). The note on each card says what it governs: لَنْ / لِكَيْ / شَرِيطَةَ أَنْ + subjunctive · عَلَى الرَّغْمِ مِنْ + genitive.',
    2: 'D6 cultural verbs to reuse: cards show I / past. Every one keeps its fixed preposition.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · three tenses, three markers (website rule 1)', title: 'Each clause carries its own time', ar: 'المَاضِي · الحَاضِرُ · المُسْتَقْبَلُ',
      cols: [{ label: 'Time phrase', w: 2.8, size: 22 }, { label: 'Example (website)', w: 6.8, size: 22 }, { label: 'Tense', w: 2.73 }],
      rows: [
        { core: true, cells: ['{w|فِي المَاضِي}', P('فِي المَاضِي {w|احْتَفَلْنَا} فِي البَيْتِ.', 'In the past we celebrated at home.'), 'past'] },
        { core: true, cells: ['{w|كَانَ + يَفْعَلُ}', P('كَانَتْ أُسْرَتِي {w|تَحْتَفِلُ} فِي القَرْيَةِ.', 'My family used to celebrate in the village.'), 'past habit'] },
        { core: true, cells: ['{k|الآنَ}', P('وَالآنَ {k|نَحْتَفِلُ} مَعَ الجِيرَانِ.', 'And now we celebrate with the neighbours.'), 'present'] },
        { core: true, cells: ['{e|سَـ / سَوْفَ}', P('{e|وَسَنَحْتَفِلُ} العَامَ القَادِمَ فِي المَرْكَزِ.', 'And we will celebrate next year at the centre.'), 'future'] },
        { cells: ['{e|لَنْ}', P('{e|لَنْ نَتَخَلَّى} عَنْ لُغَتِنَا.', 'We will not give up our language.'), 'future negative'] },
      ],
      ltr: true,
      foot: 'لَنْ replaces سَـ and makes the verb subjunctive (final -a): لَنْ نَنْسَى.',
      notes: `GRAMMAR PART 1 — website rule “Three tenses, three markers”: each clause carries its own time reference, so the tense can change from clause to clause within one sentence. Website rule “Negating the future”: لَنْ + subjunctive (the final ḍamma becomes a fatḥa).
Check routine for students: underline the time phrase → circle the verb → do they match?`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · combine without stacking (website rules 2 and 4) · Develop / Stretch', title: 'One structure at a time, then join', ar: 'الوَصْلُ وَالرَّبْطُ',
      cards: [
        { chip: 'RELATIVE · CORE', color: '1E6B52', head: 'المَدِينَةُ الَّتِي', big: 'المَدِينَةُ الَّتِي زُرْتُهَا جَمِيلَةٌ.', en: 'The city that I visited is beautiful.', clue: 'Looks backwards.' },
        { chip: 'PASSIVE · DEVELOP', color: '1D5FBF', head: 'تُزَيَّنُ الشَّوَارِعُ', big: 'تُزَيَّنُ الشَّوَارِعُ فِي العِيدِ.', en: 'The streets are decorated at Eid.', clue: 'Subject ends in -u.' },
        { chip: 'CONNECTOR · STRETCH', color: '6B4C9A', head: 'عَلَى الرَّغْمِ مِنْ', big: 'عَلَى الرَّغْمِ مِنْ بُعْدِ المَسَافَةِ، نَحْتَفِظُ بِعَادَاتِنَا.', en: 'Despite the distance, we keep our customs.', clue: 'Genitive after.' },
      ],
      error: { text: 'Website mistake: the pronoun agrees with the noun before it.', pairs: [['المَدِينَةُ الَّتِي زُرْتُهَا', 'المَدِينَةُ الَّذِي زُرْتُهَا']] },
      notes: `GRAMMAR PART 2 — website rules “Relative clauses” (definite noun + الَّذِي / الَّتِي; after an indefinite noun no pronoun: مَدِينَةٌ زُرْتُهَا) and “Formal connectors” (عَلَى الرَّغْمِ مِنْ + genitive · شَرِيطَةَ أَنْ + subjunctive · عَلَاوَةً عَلَى ذٰلِكَ simply adds a point).
Website teaching point: “Most errors at this level come from stacking: two comparatives, or a passive that keeps its object accusative. Write the clause with one structure, check it, then join it to the next with a connector.”`,
    },
  ],
  quick: [0, 1, 3, 4],
  rest: [2, 5, 6, 7],
  ido: {
    title: 'Watch me build one paragraph across three tenses',
    steps: [
      { head: 'Past', ar: '{w|كَانَتْ أُسْرَتِي تَحْتَفِلُ} فِي القَرْيَةِ', think: 'Past habit.' },
      { head: 'Relative', ar: 'القَرْيَةِ {k|الَّتِي} وُلِدَ فِيهَا جَدِّي', think: 'Feminine noun.' },
      { head: 'Present', ar: 'الآنَ {k|نَحْتَفِلُ} مَعَ الجَالِيَةِ', think: 'Now = present.' },
      { head: 'Future', ar: '{e|سَنَدْعُو} أَصْدِقَاءَنَا {e|لِكَيْ يَتَعَرَّفُوا}', think: 'Subjunctive after لِكَيْ.' },
    ],
    legend: ['w', 'k', 'e'], legendLabels: { w: 'PAST', k: 'PRESENT / RELATIVE', e: 'FUTURE' },
    model: 'فِي المَاضِي {w|كَانَتْ أُسْرَتِي تَحْتَفِلُ} بِالعِيدِ فِي القَرْيَةِ الَّتِي وُلِدَ فِيهَا جَدِّي. أَمَّا الآنَ {k|فَنَحْتَفِلُ} هُنَا مَعَ الجَالِيَةِ عَلَى الرَّغْمِ مِنْ بُعْدِ المَسَافَةِ. وَفِي العَامِ القَادِمِ {e|سَنَدْعُو} أَصْدِقَاءَنَا لِكَيْ يَتَعَرَّفُوا عَلَى ثَقَافَتِنَا.',
    modelEn: 'In the past my family used to celebrate Eid in the village where my grandfather was born. Now we celebrate here with the community, despite the distance. And next year we will invite our friends so that they get to know our culture.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud at each clause: “What is the time phrase? Does my verb match? Which noun does الَّتِي look back to? What does this connector govern?” Show the checking, not just the writing.',
  },
  patternEn: ['the city that I visited', 'I will not forget this experience', 'despite the long distance'],
  sorterNotes: 'Then add one more sentence to each column about your own family.',
  game: {
    title: 'When is it? Match the picture',
    pick: [2, 3, 5],
    en: ['I will read the book tomorrow.', 'We travelled last summer.', 'We will study at university in the future.'],
    icons: [[['fa6', 'FaBookOpen', '1D5FBF'], ['fa6', 'FaForward', '6B4C9A']], [['fa6', 'FaPlane', '1E7B9F'], ['fa6', 'FaClockRotateLeft', 'C0386B']], [['fa6', 'FaGraduationCap', '1E2B3C'], ['fa6', 'FaForward', '6B4C9A']]],
    labels: ['a book — later', 'a plane — before', 'graduation — later'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Then change each sentence into the other two tenses: سَأَقْرَأُ → قَرَأْتُ → أَقْرَأُ الآنَ. Other website cards: قَرَأْتُ الكِتَابَ أَمْسِ · أَقْرَأُ الكِتَابَ الآنَ · نَدْرُسُ فِي المَدْرَسَةِ الآنَ.',
  },
  patch: {
    vocab: site.vocab, grammar: site.grammar, listening: site.listening, reading: site.reading, writing: site.writing, mistakes: site.mistakes, final: site.final, patterns: site.patterns,
    speaking: {
      ...site.speaking,
      model: [
        ['A', 'كَيْفَ كَانَتْ أُسْرَتُكَ تَحْتَفِلُ فِي المَاضِي؟', 'How did your family use to celebrate in the past?'],
        ['B', 'كَانَتْ تَحْتَفِلُ فِي القَرْيَةِ الَّتِي وُلِدَ فِيهَا جَدِّي، وَكَانَتِ الشَّوَارِعُ تُزَيَّنُ.', 'It used to celebrate in the village where my grandfather was born, and the streets used to be decorated.'],
        ['A', 'وَمَا الفَرْقُ الآنَ؟', 'And what is the difference now?'],
        ['B', 'الاحْتِفَالُ اليَوْمَ أَصْغَرُ مِنَ السَّابِقِ وَلٰكِنَّهُ أَكْثَرُ تَنَوُّعًا، وَسَنَدْعُو أَصْدِقَاءَنَا لِكَيْ يَتَعَرَّفُوا عَلَيْنَا.', 'Today’s celebration is smaller than before but more varied, and we will invite our friends so they get to know us.'],
      ],
    },
  },
  patchNote: 'the connector عِلَاوَةً shown as عَلَاوَةً and English added to the patterns and speaking model; three of the six website visual-game cards are used.',
  hints: ['Which noun does the pronoun look back to?', 'After لَنْ: which ending?', 'Passive: is the subject -u?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nPast → present → future.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5 — and write down one verb from each tense.',
  gloss: [
    ['فِي المَاضِي كَانَتْ أُسْرَتِي تَحْتَفِلُ بِالعِيدِ فِي القَرْيَةِ الَّتِي وُلِدَ فِيهَا جَدِّي. وَكَانَتِ الشَّوَارِعُ تُزَيَّنُ، وَتُتَبَادَلُ التَّهَانِي بَيْنَ الجِيرَانِ.', 'In the past my family used to celebrate Eid in the village where my grandfather was born. The streets used to be decorated, and greetings were exchanged between neighbours.'],
    ['أَمَّا الآنَ فَنَحْتَفِلُ هُنَا مَعَ الجَالِيَةِ، وَنَحْتَفِظُ بِالعَادَاتِ نَفْسِهَا عَلَى الرَّغْمِ مِنْ بُعْدِ المَسَافَةِ.', 'Now we celebrate here with the community, and we keep the same customs despite the distance.'],
    ['وَالاحْتِفَالُ الَّذِي نُنَظِّمُهُ اليَوْمَ أَصْغَرُ مِنَ السَّابِقِ، وَلٰكِنَّهُ أَكْثَرُ تَنَوُّعًا.', 'The celebration we organise today is smaller than before, but it is more varied.'],
    ['وَفِي العَامِ القَادِمِ سَنَدْعُو أَصْدِقَاءَنَا لِكَيْ يَتَعَرَّفُوا عَلَى ثَقَافَتِنَا.', 'Next year we will invite our friends so that they get to know our culture.'],
    ['وَلَنْ نَتَخَلَّى عَنْ لُغَتِنَا، شَرِيطَةَ أَنْ نَسْتَمِرَّ فِي تَعْلِيمِهَا لِأَبْنَائِنَا.', 'And we will not give up our language, provided that we keep teaching it to our children.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'كَيْفَ كَانَتْ أُسْرَتُكَ تَحْتَفِلُ فِي المَاضِي؟' },
      { route: 'develop', ar: 'كَيْفَ تَحْتَفِلُونَ الآنَ؟ وَمَا الفَرْقُ؟' },
      { route: 'stretch', ar: 'مَاذَا سَتَفْعَلُونَ فِي العَامِ القَادِمِ؟ اِسْتَعْمِلْ لِكَيْ أَوْ شَرِيطَةَ أَنْ.' },
    ],
    stems: [
      { route: 'core', ar: 'فِي المَاضِي كَانَتْ أُسْرَتِي ______ .' },
      { route: 'develop', ar: 'الآنَ نَحْتَفِلُ ______ ، وَالاحْتِفَالُ أَكْثَرُ ______ مِنَ السَّابِقِ.' },
      { route: 'stretch', ar: 'سَنَدْعُو ______ لِكَيْ ______ ، شَرِيطَةَ أَنْ ______ .' },
    ],
    modelEn: ['How did your family use to celebrate in the past?', 'It used to celebrate in the village where my grandfather was born.'],
    notes: 'Website prompts and model. Any celebration works: Eid, a wedding, an ʿaqīqa, a family gathering. To a girl: أُسْرَتُكِ · اِسْتَعْمِلِي.',
  },
  write: {
    core: { amount: '6 sentences', how: 'Two in each tense, each verb matching its time phrase.' },
    develop: { amount: '60–70 words', how: 'Add a relative clause (الَّذِي / الَّتِي) and one comparative.' },
    stretch: { amount: '90–100 words', how: 'Website task: past → present → future with a relative clause, a comparative, a passive and a formal connector.' },
  },
  frames: {
    core: [
      { en: 'In the past my family used to …', ar: 'فِي المَاضِي كَانَتْ أُسْرَتِي ______ .' },
      { en: 'Now we celebrate …', ar: 'الآنَ نَحْتَفِلُ ______ .' },
      { en: 'Next year we will …', ar: 'فِي العَامِ القَادِمِ ______ .' },
      { en: 'We will not give up …', ar: 'لَنْ نَتَخَلَّى عَنْ ______ .' },
    ],
    develop: [
      { en: 'The village where … was born', ar: 'القَرْيَةُ الَّتِي وُلِدَ فِيهَا ______ .' },
      { en: 'The celebration that we organise …', ar: 'الاحْتِفَالُ الَّذِي نُنَظِّمُهُ ______ .' },
      { en: '… is smaller / more varied than before.', ar: '______ أَصْغَرُ / أَكْثَرُ تَنَوُّعًا مِنَ السَّابِقِ.' },
      { en: 'Despite … we keep …', ar: 'عَلَى الرَّغْمِ مِنْ ______ ، نَحْتَفِظُ بِـ ______ .' },
    ],
    bank: ['فِي المَاضِي', 'كَانَ + يَفْعَلُ', 'الآنَ', 'سَـ / سَوْفَ', 'لَنْ', 'الَّذِي', 'الَّتِي', 'أَصْغَرُ مِنْ', 'تُزَيَّنُ', 'عَلَى الرَّغْمِ مِنْ', 'لِكَيْ', 'شَرِيطَةَ أَنْ'],
  },
  stretch: [
    ['وَتُتَبَادَلُ التَّهَانِي', 'and greetings are exchanged'],
    ['وَهٰذَا يُؤَدِّي إِلَى فَهْمٍ أَفْضَلَ', 'and this leads to better understanding'],
    ['عَلَاوَةً عَلَى ذٰلِكَ', 'moreover'],
    ['شَرِيطَةَ أَنْ نَسْتَمِرَّ فِي تَعْلِيمِهَا', 'provided that we keep teaching it'],
    ['لَنْ نَتَخَلَّى عَنْ لُغَتِنَا', 'we will not give up our language'],
  ],
  modelEn: 'In the past my family used to celebrate Eid in the village where my grandfather was born; the streets were decorated and greetings were exchanged. Now we celebrate here with the community and keep the same customs despite the distance. The celebration we organise today is smaller than before but more varied, and this leads to better understanding between neighbours. Moreover, our children learn their language at the cultural centre. Next year we will invite our friends so they get to know our culture, and we will not give up our language, provided that we keep teaching it.',
  find: ['three tenses', 'الَّتِي and الَّذِي', 'one comparative and a passive', 'عَلَى الرَّغْمِ مِنْ · لِكَيْ · شَرِيطَةَ أَنْ'],
  modelNotes: 'Website writing model. Evidence: كَانَتْ … تَحْتَفِلُ · نَحْتَفِلُ · سَنَدْعُو · لَنْ نَتَخَلَّى · القَرْيَةِ الَّتِي · الاحْتِفَالُ الَّذِي · أَصْغَرُ مِنَ السَّابِقِ · أَكْثَرُ تَنَوُّعًا · تُزَيَّنُ / تُتَبَادَلُ · عَلَى الرَّغْمِ مِنْ بُعْدِ · لِكَيْ يَتَعَرَّفُوا · شَرِيطَةَ أَنْ نَسْتَمِرَّ.',
  selfCheck: [
    { route: 'core', text: 'Each verb matches the time phrase in its clause.' },
    { route: 'core', text: 'After لَنْ my verb ends in -a.' },
    { route: 'develop', text: 'My relative pronoun agrees with the noun before it.' },
    { route: 'develop', text: 'I used ONE comparative at a time.' },
    { route: 'stretch', text: 'My passive subject ends in -u, and I can name my grammar target.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['القَرْيَةِ', 'the village'], ['وُلِدَ', 'was born'], ['التَّهَانِي', 'greetings'], ['الجَالِيَةِ', 'the community'], ['بُعْدِ المَسَافَةِ', 'the long distance'],
    ['نُنَظِّمُهُ', 'we organise it'], ['السَّابِقِ', 'the previous one'], ['تَنَوُّعًا', 'variety'], ['يَتَعَرَّفُوا عَلَى', 'get to know'], ['نَتَخَلَّى عَنْ', 'give up'],
  ],
  prep: {
    words: [['نَبْرَةُ الكَاتِبِ', 'the writer’s tone', '—'], ['مَنْظُورٌ ثَقَافِيٌّ', 'a cultural perspective', 'pl. مَنَاظِيرُ'], ['الفِكْرَةُ الرَّئِيسِيَّةُ', 'the main idea', 'pl. الأَفْكَارُ الرَّئِيسِيَّةُ'], ['دَلِيلٌ مِنَ النَّصِّ', 'evidence from the text', 'pl. أَدِلَّةٌ'], ['تَحَيُّزٌ', 'bias', '—']],
    questionEn: 'Think of a news story or advert about a celebration. Was its tone positive, critical or neutral? Which words told you?',
    questionAr: 'كَانَتْ نَبْرَةُ النَّصِّ ______ ، وَالدَّلِيلُ كَلِمَةُ ______ .',
    homework: {
      core: 'Write six sentences, two in each tense, about a celebration in your family.',
      develop: 'A 60–70-word paragraph with a relative clause and a comparative.',
      stretch: 'Website writing task: 90–100 words across three tenses with a passive and a formal connector.',
    },
    wordsSource: 'The five words come from the website D6-L08 vocabulary (perspective, tone and reading strategy).',
  },
  remember: 'Remember: time phrase → matching verb · الَّذِي / الَّتِي look backwards · لَنْ + -a · one comparative · passive subject in -u.',
});

module.exports = { meta, slides };
