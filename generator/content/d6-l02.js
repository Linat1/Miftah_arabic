'use strict';
/* D6-L02 · Cultural Customs — Traditions, Greetings and Social Norms — website: Pathways › Development › D6 › D6-L02 (cultural verbs with fixed prepositions
 * يَعْتَادُ عَلَى · يَتَمَسَّكُ بِـ · يَنْتَمِي إِلَى · يَتَكَيَّفُ مَعَ · يَحْتَفِلُ بِـ, contrast with بَيْنَمَا, مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى, hedging).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing and visual game used as published. Gender-agreement slips on
 * the website corrected throughout (الشَّايُ is masculine: يُقَدَّمُ الشَّايُ; القَهْوَةُ is feminine: تُقَدَّمُ القَهْوَةُ); English added to the patterns and speaking model. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D6')({
  n: 2, fileTitle: 'Cultural_Customs_Traditions_Greetings', chip: 'Culture',
  title: 'Cultural Customs — Traditions, Greetings and Social Norms', arabic: 'العَادَاتُ الثَّقَافِيَّةُ — التَّقَالِيدُ وَالتَّحِيَّاتُ',
  focus: 'Describe customs — hospitality, family ties, respect for elders — with the right verb + preposition (يَعْتَادُ عَلَى · يَتَمَسَّكُ بِـ · يَحْتَفِلُ بِـ), compare with بَيْنَمَا, and keep every claim accurate: فِي بَعْضِ العَائِلَاتِ, not كُلُّ العَرَبِ.',
  icon: 'FaMugHot', iconSet: 'fa6',
});

const fix = (v) => (typeof v === 'string' ? v.replace(/تُقَدَّمُ الشَّايُ/g, 'يُقَدَّمُ الشَّايُ').replace(/يُقَدَّمُ القَهْوَةُ/g, 'تُقَدَّمُ القَهْوَةُ')
  : Array.isArray(v) ? v.map(fix) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, fix(x)])) : v);
const site = fix(D.site('D6-L02'));
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D6-L02', {
  support: `• Core: 10 customs words + five sentences, each cultural verb with its preposition (يَعْتَادُ النَّاسُ عَلَى الضِّيَافَةِ). Develop: a contrast with بَيْنَمَا and one hedge. Stretch: the website 80–90-word comparison with مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى and an explicit rejection of the stereotype.
• This lesson connects directly to adab: hospitality (الضِّيَافَةُ), respect for elders and صِلَةُ الرَّحِمِ are values students know from home and from Islamic Studies — invite their own family examples.
• Website accuracy rule: describe what you observed (فِي بَعْضِ العَائِلَاتِ), not what “all Arabs” do. Note: two website texts say تُقَدَّمُ الشَّايُ — الشَّايُ is masculine, so the decks show يُقَدَّمُ الشَّايُ.`,
  teach: 'Cultural verbs + prepositions, بَيْنَمَا, and the honest hedge.',
  wedo: 'Sort verbs by preposition, fix slips, then two students compare customs.',
  next: { nextCode: 'D6-L03', nextTitle: 'Islamic Celebrations — Eid, Ramadan and Religious Occasions', nextAr: 'المُنَاسَبَاتُ الإِسْلَامِيَّةُ — العِيدَانِ وَرَمَضَانُ' },
  objectives: ['Name customs and values (ضِيَافَةٌ · كَرَمٌ · صِلَةُ الرَّحِمِ · احْتِرَامُ الكِبَارِ).', 'Use cultural verbs with their fixed prepositions.', 'Contrast two customs with بَيْنَمَا and balance two sides.', 'Hedge cultural claims (فِي بَعْضِ العَائِلَاتِ · لَيْسَ دَائِمًا).'],
  rulesAr: 'أَفْعَالُ الثَّقَافَةِ وَالمُقَارَنَةُ وَالتَّحَفُّظُ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does ضِيَافَةٌ mean?', ['hospitality', 'a tradition', 'a custom'], 'Prepared at home (D6-L01).'),
      q('What does احْتِرَامُ الكِبَارِ mean?', ['respect for elders', 'family ties', 'generosity'], 'Prepared at home (D6-L01).'),
      q('What does يَحْتَفِلُ بِـ mean?', ['he celebrates', 'he holds on to', 'he belongs to'], 'Prepared at home (D6-L01).'),
      q('Complete: أَنَا مِنْ ___.', ['لُبْنَانَ', 'لُبْنَانٍ', 'لُبْنَانِيٌّ'], 'D6-L01: diptotes.'),
      q('Which statement avoids a generalisation?', ['فِي بَعْضِ البُلْدَانِ يُفَضِّلُ النَّاسُ التُّرَاثَ.', 'كُلُّ العَرَبِ يُفَضِّلُونَ التُّرَاثَ.', 'العَرَبُ دَائِمًا يُفَضِّلُونَ التُّرَاثَ.'], 'D5-L06 / D6-L01: hedging.'),
    ],
    keyIdea: { text: 'Customs differ by country, region and family — so describe what you saw, and hedge.', ar: '{e|فِي بَعْضِ العَائِلَاتِ} {k|يَعْتَادُ} النَّاسُ {k|عَلَى} الضِّيَافَةِ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D6-L01. Questions 4–5 retrieve D6-L01 (diptotes) and the hedging language from D5-L06 / D6-L01.',
  },
  routes: {
    core: ['I can name 10 customs and values.', 'I can use one cultural verb with its preposition.'],
    develop: ['I can contrast two customs with بَيْنَمَا.', 'I can hedge a cultural claim.'],
    stretch: ['I can balance two sides (مِنْ نَاحِيَةٍ …).', 'I can name and avoid a stereotype.'],
  },
  bridge: [
    { ar: 'عَادَةٌ', urdu: 'عادت', tr: 'ʿādat', en: 'Urdu: a habit · Arabic: a custom (also a habit)' },
    { ar: 'تَقْلِيدٌ', urdu: 'تقلید', tr: 'taqlīd', en: 'Urdu: imitation, following · Arabic: a tradition' },
    { ar: 'ضِيَافَةٌ / ضَيْفٌ', urdu: 'ضیافت / مہمان', tr: 'ẓiyāfat', en: 'hospitality / a guest' },
    { ar: 'كَرَمٌ', urdu: 'کرم', tr: 'karam', en: 'generosity, kindness' },
    { ar: 'صِلَةُ الرَّحِمِ', urdu: 'صلہ رحمی', tr: 'ṣila-e-raḥmī', en: 'keeping family ties' },
  ],
  bridgeNotes: 'URDU BRIDGE: ضیافت، کرم، صلہ رحمی are shared — and صلہ رحمی is taught in Islamic Studies. CAREFUL: Urdu تقلید = imitation / following (a madhhab); Arabic تَقْلِيدٌ also means a tradition (تَقَالِيدُ = traditions).',
  core: ['عَادَةٌ / عَادَاتٌ', 'تَقْلِيدٌ / تَقَالِيدُ', 'ضِيَافَةٌ', 'كَرَمٌ', 'احْتِرَامُ الكِبَارِ', 'صِلَةُ الرَّحِمِ', 'يَعْتَادُ عَلَى', 'يَتَمَسَّكُ بِـ', 'يَحْتَفِلُ بِـ', 'يَنْتَمِي إِلَى', 'بَيْنَمَا', 'فِي بَعْضِ العَائِلَاتِ'],
  forms: {
    'يَعْتَادُ عَلَى': { tag: 'she · past', forms: [{ l: 'past', ar: 'اِعْتَادَ' }, { l: 'she', ar: 'تَعْتَادُ' }] },
    'يَتَمَسَّكُ بِـ': { tag: 'she · past', forms: [{ l: 'past', ar: 'تَمَسَّكَ' }, { l: 'she', ar: 'تَتَمَسَّكُ' }] },
    'يَحْتَفِلُ بِـ': { tag: 'she · past', forms: [{ l: 'past', ar: 'اِحْتَفَلَ' }, { l: 'she', ar: 'تَحْتَفِلُ' }] },
    'يَنْتَمِي إِلَى': { tag: 'she · past', forms: [{ l: 'past', ar: 'اِنْتَمَى' }, { l: 'she', ar: 'تَنْتَمِي' }] },
    'يَتَكَيَّفُ مَعَ': { tag: 'she · past', forms: [{ l: 'past', ar: 'تَكَيَّفَ' }, { l: 'she', ar: 'تَتَكَيَّفُ' }] },
    'يَحْتَفِظُ بِـ': { tag: 'she · past', forms: [{ l: 'past', ar: 'اِحْتَفَظَ' }, { l: 'she', ar: 'تَحْتَفِظُ' }] },
  },
  vocabNotes: {
    0: 'Customs and values. Plurals with -āt or broken plurals (تَقَالِيدُ · مَعَايِيرُ are diptotes: no tanwīn).',
    1: 'Cultural verbs: each card shows she / past. Learn verb + preposition as ONE unit.',
    2: 'Comparing and qualifying: the language that keeps a cultural comparison accurate and fair.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · cultural verbs and their prepositions (website rule 1)', title: 'One verb, one preposition', ar: 'الفِعْلُ وَحَرْفُ الجَرِّ',
      cols: [{ label: 'Verb + preposition', w: 3.0, size: 22 }, { label: 'Example (website)', w: 6.6, size: 22 }, { label: 'Meaning', w: 2.73 }],
      rows: [
        { core: true, cells: ['يَعْتَادُ {k|عَلَى}', P('يَعْتَادُ النَّاسُ {k|عَلَى} الضِّيَافَةِ.', 'People are used to hospitality.'), 'is used to'] },
        { core: true, cells: ['يَتَمَسَّكُ {e|بِـ}', P('تَتَمَسَّكُ الأُسْرَةُ {e|بِتَقَالِيدِهَا}.', 'The family holds on to its traditions.'), 'holds on to'] },
        { core: true, cells: ['يَحْتَفِلُ {e|بِـ}', P('تَحْتَفِلُ العَائِلَةُ {e|بِالمُنَاسَبَةِ}.', 'The family celebrates the occasion.'), 'celebrates'] },
        { cells: ['يَنْتَمِي {w|إِلَى}', P('يَنْتَمِي {w|إِلَى} ثَقَافَتَيْنِ.', 'He belongs to two cultures.'), 'belongs to'] },
        { cells: ['يَتَكَيَّفُ {w|مَعَ}', P('يَتَكَيَّفُ المُهَاجِرُ {w|مَعَ} الحَيَاةِ الجَدِيدَةِ.', 'The migrant adapts to the new life.'), 'adapts to'] },
      ],
      ltr: true,
      foot: 'After the preposition the noun is genitive (-i): عَلَى الضِّيَافَةِ · بِالمُنَاسَبَةِ.',
      notes: `GRAMMAR PART 1 — website rule “Cultural verbs and their prepositions” (each preposition is fixed, and the noun after it is genitive). Website teaching point: “Each cultural verb keeps its own preposition … swapping them is the most common error in this topic.”
Website mistakes: يَعْتَادُ النَّاسُ بِالضِّيَافَةِ ✗ · تَحْتَفِلُ العَائِلَةُ المُنَاسَبَةَ ✗. Many students “belong to two cultures” — يَنْتَمِي إِلَى ثَقَافَتَيْنِ is a lovely personal sentence for them.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · contrast, balance, hedge (website rules 2–4) · Develop / Stretch', title: 'Compare fairly', ar: 'قَارِنْ بِدِقَّةٍ',
      cards: [
        { chip: 'CONTRAST · DEVELOP', color: '1D5FBF', head: 'بَيْنَمَا', big: 'تُقَدَّمُ القَهْوَةُ أَوَّلًا فِي بَعْضِ البُلْدَانِ، بَيْنَمَا يُقَدَّمُ الشَّايُ فِي غَيْرِهَا.', en: 'In some countries coffee is served first, whereas tea is served in others.', clue: 'Two full clauses.' },
        { chip: 'BALANCE · STRETCH', color: '6B4C9A', head: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى', big: 'مِنْ نَاحِيَةٍ تَتَغَيَّرُ العَادَاتُ، وَمِنْ نَاحِيَةٍ أُخْرَى تَبْقَى القِيَمُ.', en: 'On one hand customs change; on the other, values remain.', clue: 'Two sides.' },
        { chip: 'HEDGE · CORE', color: '1E6B52', head: 'فِي بَعْضِ العَائِلَاتِ', big: 'فِي بَعْضِ العَائِلَاتِ يُقَبِّلُ الأَبْنَاءُ رَأْسَ الجَدِّ.', en: 'In some families children kiss their grandfather’s head.', clue: 'Not “all Arabs”.' },
      ],
      error: { text: 'Website mistake: a universal claim is a generalisation.', pairs: [['فِي بَعْضِ العَائِلَاتِ', 'كُلُّ العَرَبِ']] },
      notes: `GRAMMAR PART 2 — website rules “Contrast with بَيْنَمَا” (joins two full clauses that genuinely differ), “Two-sided comparison” and “Hedging a cultural claim” (a hedge turns a false universal into an accurate observation). Website teaching point: “Describe what you observed, not what everyone does.”
Agreement check in card 1: القَهْوَةُ is feminine → تُقَدَّمُ; الشَّايُ is masculine → يُقَدَّمُ.`,
    },
  ],
  quick: [0, 1, 4, 6],
  rest: [2, 3, 5, 7],
  ido: {
    title: 'Watch me compare two customs fairly',
    steps: [
      { head: 'Hedge', ar: '{e|فِي بَعْضِ العَائِلَاتِ}', think: 'Not everyone.' },
      { head: 'Verb + prep', ar: '{k|يَعْتَادُ} النَّاسُ {k|عَلَى} الضِّيَافَةِ', think: 'iʿtāda + ʿalā.' },
      { head: 'Contrast', ar: '{w|بَيْنَمَا} نُقَدِّمُ نَحْنُ الشَّايَ', think: 'Two clauses.' },
      { head: 'Balance', ar: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', think: 'Two sides.' },
    ],
    legend: ['e', 'k', 'w'], legendLabels: { e: 'HEDGE', k: 'VERB + PREPOSITION', w: 'CONTRAST' },
    model: 'تَخْتَلِفُ العَادَاتُ بَيْنَ البُلْدَانِ اخْتِلَافًا وَاضِحًا. {e|فِي بَعْضِ العَائِلَاتِ} العَرَبِيَّةِ {k|يَعْتَادُ} النَّاسُ {k|عَلَى} اسْتِقْبَالِ الضَّيْفِ بِالقَهْوَةِ وَالتَّمْرِ، {w|بَيْنَمَا} نُقَدِّمُ نَحْنُ الشَّايَ عَادَةً. وَ{k|يَتَمَسَّكُ} كَثِيرٌ مِنَ الأُسَرِ {k|بِصِلَةِ} الرَّحِمِ.',
    modelEn: 'Customs clearly differ between countries. In some Arab families people are used to receiving a guest with coffee and dates, whereas we usually serve tea. Many families hold on to family ties.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Which preposition does this verb take? Am I describing everyone, or what I saw? Is this a contrast of two full clauses?” Then ask students for their own family’s guest custom.',
  },
  patternEn: ['he is used to hospitality', 'she holds on to her traditions', 'in some families …'],
  game: {
    title: 'Which custom? Match the picture',
    pick: [0, 1, 2],
    en: ['It is important to respect customs of hospitality.', 'Ways of greeting differ from place to place.', 'The family gathers on special occasions.'],
    icons: [[['fa6', 'FaMugHot', '8B5A2B'], ['fa6', 'FaHandshake', 'C77700']], [['fa6', 'FaHand', '1D5FBF']], [['fa6', 'FaPeopleRoof', '1E6B52'], ['fa6', 'FaUtensils', 'C0386B']]],
    labels: ['coffee and handshake', 'a greeting wave', 'family meal'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Then add a hedge to each: فِي بَعْضِ البُلْدَانِ … Other website cards: architecture, traditional clothes, traditional dishes.',
  },
  sorterNotes: 'Then say one sentence for each column with a custom from YOUR family.',
  patch: {
    grammar: site.grammar, listening: site.listening, reading: site.reading, writing: site.writing, mistakes: site.mistakes, final: site.final, patterns: site.patterns,
    speaking: {
      ...site.speaking,
      model: [
        ['A', 'صِفْ عَادَةً تَعْرِفُهَا.', 'Describe a custom you know.'],
        ['B', 'فِي بَعْضِ العَائِلَاتِ يَعْتَادُ النَّاسُ عَلَى تَقْدِيمِ القَهْوَةِ لِلضَّيْفِ أَوَّلًا.', 'In some families people are used to serving the guest coffee first.'],
        ['A', 'وَهَلِ الأَمْرُ نَفْسُهُ فِي كُلِّ مَكَانٍ؟', 'And is it the same everywhere?'],
        ['B', 'لَيْسَ دَائِمًا؛ بَيْنَمَا يُقَدَّمُ الشَّايُ فِي بُلْدَانٍ أُخْرَى، وَالأَمْرُ يَخْتَلِفُ مِنْ أُسْرَةٍ إِلَى أُسْرَةٍ.', 'Not always — tea is served in other countries, and it differs from family to family.'],
      ],
    },
  },
  patchNote: 'gender-agreement slips corrected throughout (يُقَدَّمُ الشَّايُ · تُقَدَّمُ القَهْوَةُ), and English added to the patterns and speaking model.',
  hints: ['iʿtāda + which preposition?', 'iḥtafala + which preposition?', 'All Arabs? Hedge it!'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 5.\nTwo speakers: Nur · Sami.',
  listenRoutes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 5 — and note every hedge you hear.',
  gloss: [
    ['نُورُ: فِي بَعْضِ العَائِلَاتِ عِنْدَنَا يَعْتَادُ النَّاسُ عَلَى تَقْدِيمِ القَهْوَةِ لِلضَّيْفِ أَوَّلًا، بَيْنَمَا يُقَدَّمُ الشَّايُ فِي بُلْدَانٍ أُخْرَى.', 'Nur: In some families here people are used to serving the guest coffee first, whereas tea is served in other countries.'],
    ['سَامِي: وَعِنْدَنَا يَتَمَسَّكُ الكِبَارُ بِصِلَةِ الرَّحِمِ، فَنَزُورُ الأَقَارِبَ كُلَّ أُسْبُوعٍ تَقْرِيبًا.', 'Sami: With us, the elders hold on to family ties, so we visit relatives almost every week.'],
    ['نُورُ: وَهَلْ تَحْتَفِلُونَ بِالمُنَاسَبَاتِ فِي البَيْتِ؟', 'Nur: And do you celebrate occasions at home?'],
    ['سَامِي: أَحْيَانًا، وَلَيْسَ دَائِمًا؛ فَالأَمْرُ يَخْتَلِفُ مِنْ أُسْرَةٍ إِلَى أُسْرَةٍ.', 'Sami: Sometimes, not always — it differs from family to family.'],
    ['نُورُ: هٰذَا صَحِيحٌ. لَا يَجُوزُ أَنْ نَقُولَ إِنَّ كُلَّ العَرَبِ يَفْعَلُونَ الشَّيْءَ نَفْسَهُ.', 'Nur: That’s right. We can’t say that all Arabs do the same thing.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ عَادَةً تَعْرِفُهَا. مَنْ يَعْتَادُ عَلَيْهَا؟' },
      { route: 'develop', ar: 'قَارِنْ بَيْنَ عَادَتَيْنِ مُسْتَعْمِلًا بَيْنَمَا.' },
      { route: 'stretch', ar: 'كَيْفَ تَتَجَنَّبُ التَّعْمِيمَ عِنْدَ الحَدِيثِ عَنِ الثَّقَافَاتِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'فِي عَائِلَتِي نَعْتَادُ عَلَى ______ .' },
      { route: 'develop', ar: 'فِي بَعْضِ العَائِلَاتِ ______ ، بَيْنَمَا ______ .' },
      { route: 'stretch', ar: 'لَا أَقُولُ « كُلُّ … » ، بَلْ أَقُولُ « فِي بَعْضِ … » لِأَنَّ ______ .' },
    ],
    modelEn: ['Describe a custom you know.', 'In some families people are used to serving the guest coffee first.'],
    notes: 'Website prompts and model. Students describe a REAL custom from their own family (guests, Eid visits, greeting elders). To a girl: صِفِي · قَارِنِي · تَتَجَنَّبِينَ.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Five customs, each cultural verb with its preposition.' },
    develop: { amount: '60–70 words', how: 'A comparison with بَيْنَمَا and one hedge.' },
    stretch: { amount: '80–90 words', how: 'Website task: two cultural verbs, بَيْنَمَا, مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى and a hedge.' },
  },
  frames: {
    core: [
      { en: 'In my family we are used to …', ar: 'فِي عَائِلَتِي نَعْتَادُ عَلَى ______ .' },
      { en: 'We hold on to …', ar: 'نَتَمَسَّكُ بِـ ______ .' },
      { en: 'We celebrate …', ar: 'نَحْتَفِلُ بِـ ______ .' },
      { en: 'We respect …', ar: 'نَحْتَرِمُ ______ .' },
    ],
    develop: [
      { en: 'In some Arab families …, whereas …', ar: 'فِي بَعْضِ العَائِلَاتِ العَرَبِيَّةِ ______ ، بَيْنَمَا ______ .' },
      { en: 'On one hand …, on the other hand …', ar: 'مِنْ نَاحِيَةٍ ______ ، وَمِنْ نَاحِيَةٍ أُخْرَى ______ .' },
      { en: 'It differs from family to family.', ar: 'يَخْتَلِفُ الأَمْرُ مِنْ أُسْرَةٍ إِلَى أُسْرَةٍ.' },
      { en: 'Not everyone behaves the same way.', ar: 'لَيْسَ دَائِمًا يَتَصَرَّفُ الجَمِيعُ بِالطَّرِيقَةِ نَفْسِهَا.' },
    ],
    bank: ['يَعْتَادُ عَلَى', 'يَتَمَسَّكُ بِـ', 'يَحْتَفِلُ بِـ', 'يَنْتَمِي إِلَى', 'يَتَكَيَّفُ مَعَ', 'الضِّيَافَةُ', 'صِلَةُ الرَّحِمِ', 'احْتِرَامُ الكِبَارِ', 'بَيْنَمَا', 'مِنْ نَاحِيَةٍ', 'فِي بَعْضِ العَائِلَاتِ', 'لَيْسَ دَائِمًا'],
  },
  stretch: [
    ['اسْتِقْبَالُ الضَّيْفِ بِالقَهْوَةِ وَالتَّمْرِ', 'receiving a guest with coffee and dates'],
    ['يَزُورُونَ الأَقَارِبَ بِانْتِظَامٍ', 'they visit relatives regularly'],
    ['تَبْقَى قِيَمُ الكَرَمِ حَاضِرَةً', 'the values of generosity remain present'],
    ['الأَفْضَلُ أَنْ نَصِفَ مَا رَأَيْنَاهُ بِدِقَّةٍ', 'it is better to describe what we saw accurately'],
    ['مِنَ الخَطَأِ أَنْ نَقُولَ إِنَّ …', 'it is wrong to say that …'],
  ],
  modelEn: 'Customs clearly differ between countries. In some Arab families people are used to receiving a guest with coffee and dates, whereas we usually serve tea. Many families hold on to family ties, so they visit relatives regularly. On one hand some traditions change with new generations; on the other, the values of generosity remain present. Not everyone always behaves the same way — it is better to describe what we saw accurately.',
  find: ['two verbs with their prepositions', 'a contrast with بَيْنَمَا', 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى', 'a hedge'],
  modelNotes: 'Website writing model. Evidence: يَعْتَادُ … عَلَى · بَيْنَمَا نُقَدِّمُ … · يَتَمَسَّكُ … بِصِلَةِ الرَّحِمِ · مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى · فِي بَعْضِ العَائِلَاتِ · لَيْسَ دَائِمًا.',
  selfCheck: [
    { route: 'core', text: 'Each cultural verb has its preposition.' },
    { route: 'core', text: 'The noun after the preposition ends in -i.' },
    { route: 'develop', text: 'My بَيْنَمَا joins two full clauses.' },
    { route: 'develop', text: 'I hedged at least one claim.' },
    { route: 'stretch', text: 'I balanced two sides and avoided “all Arabs”.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['تَتَنَوَّعُ', 'vary'], ['اسْتِقْبَالِ الضَّيْفِ', 'receiving the guest'], ['التَّمْرِ', 'dates'], ['الشَّايُ بِالنَّعْنَاعِ', 'mint tea'], ['طَرِيقَةَ التَّعْبِيرِ', 'the way of expressing'],
    ['الأَجْيَالِ الجَدِيدَةِ', 'the new generations'], ['قِيَمُ الكَرَمِ', 'the values of generosity'], ['التَّضَامُنِ', 'solidarity'], ['يَتَصَرَّفُونَ', 'behave'], ['بِدِقَّةٍ', 'accurately'],
  ],
  prep: {
    words: [['رَمَضَانُ', 'Ramadan', '—'], ['الصِّيَامُ', 'fasting', '—'], ['الإِفْطَارُ', 'iftar', '—'], ['عِيدُ الفِطْرِ', 'Eid al-Fitr', '—'], ['عِيدِيَّةٌ', 'Eid money', 'pl. عِيدِيَّاتٌ']],
    questionEn: 'What does your family do on the morning of Eid? Note two things.',
    questionAr: 'فِي صَبَاحِ العِيدِ نَذْهَبُ إِلَى … ثُمَّ …',
    homework: {
      core: 'Learn 12 customs words with their prepositions; write five sentences.',
      develop: 'A 60–70-word comparison with بَيْنَمَا and a hedge.',
      stretch: 'Website writing task: 80–90 words with a balanced, hedged comparison.',
    },
    wordsSource: 'The five words come from the website D6-L03 vocabulary (Ramadan and the two Eids).',
  },
  remember: 'Remember: يَعْتَادُ عَلَى · يَتَمَسَّكُ بِـ · يَحْتَفِلُ بِـ — compare with بَيْنَمَا — and describe what you saw, not what “all Arabs” do.',
});

module.exports = { meta, slides };
