'use strict';
/* D6-L04 · Cultural Celebrations Beyond Islam in the Arab World — website: Pathways › Development › D6 › D6-L04 (يَتَسَامَحُ مَعَ, يُنَوِّعُ + direct object,
 * past tense for a festival attended, the balanced paragraph مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى … عَلَاوَةً عَلَى ذٰلِكَ … يُشَارُ إِلَى أَنَّ; precise names for places of worship).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking and writing used as published; the connector spelled عِلَاوَةً on the website
 * is shown as عَلَاوَةً (as in D4); English added to the patterns and speaking model. The website visual game repeats D6-L03, so it is skipped. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D6')({
  n: 4, fileTitle: 'Cultural_Celebrations_Beyond_Islam', chip: 'Culture',
  title: 'Cultural Celebrations Beyond Islam in the Arab World', arabic: 'الاحْتِفَالَاتُ الثَّقَافِيَّةُ فِي العَالَمِ العَرَبِيِّ',
  focus: 'Describe the Arab world accurately as a multi-faith region — Christian and Jewish communities, cultural festivals — with precise vocabulary (كَنِيسَةٌ · كَنِيسٌ يَهُودِيٌّ · قُدَّاسٌ), a festival you attended in the past, and a balanced paragraph (مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى … عَلَاوَةً عَلَى ذٰلِكَ).',
  icon: 'FaMasksTheater', iconSet: 'fa6',
});

const fix = (v) => (typeof v === 'string' ? v.replace(/عِلَاوَةً/g, 'عَلَاوَةً')
  : Array.isArray(v) ? v.map(fix) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, fix(x)])) : v);
const site = fix(D.site('D6-L04'));
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D6-L04', {
  support: `• Core: name five celebrations and three places of worship accurately. Develop: a past-tense account of a cultural festival with accusative objects (شَاهَدْتُ عُرُوضًا رَائِعَةً). Stretch: the website 80–90-word balanced paragraph closing with يُشَارُ إِلَى أَنَّ.
• FRAMING (teacher): this is a lesson about DESCRIBING the region accurately and respectfully — knowing our neighbours (لِتَعَارَفُوا, al-Ḥujurāt 49:13). Students describe what other communities do; they are not asked to take part in anything. The Stretch focus is the skill of balance and precision.
• Builds on D6-L01 (no generalising), D6-L03 (passive: يُقَامُ القُدَّاسُ), D4 (عَلَاوَةً عَلَى ذٰلِكَ · يُشَارُ إِلَى أَنَّ).`,
  teach: 'Precise names, two verbs, a past festival, a balanced paragraph.',
  wedo: 'Sort places / celebrations / festival words, fix slips, then a summer of festivals.',
  next: { nextCode: 'D6-L05', nextTitle: 'Comparing Countries — Global Connections and the Arab Diaspora', nextAr: 'مُقَارَنَةُ الدُّوَلِ — الرَّوَابِطُ العَالَمِيَّةُ وَالجَالِيَةُ العَرَبِيَّةُ' },
  objectives: ['Name places of worship and celebrations of different communities precisely.', 'Use يَتَسَامَحُ مَعَ and يُنَوِّعُ + direct object.', 'Narrate a cultural festival in the past with accusative objects.', 'Build a balanced paragraph with مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى.'],
  rulesAr: 'وَصْفُ التَّنَوُّعِ بِدِقَّةٍ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does مِهْرَجَانٌ mean?', ['a festival', 'a church', 'a minority'], 'Prepared at home (D6-L03).'),
      q('What does العَيْشُ المُشْتَرَكُ mean?', ['coexistence', 'religious diversity', 'a public holiday'], 'Prepared at home (D6-L03).'),
      q('What does كَنِيسَةٌ mean?', ['a church', 'a synagogue', 'a temple'], 'Prepared at home (D6-L03).'),
      q('Choose the accurate passive.', ['تُقَامُ صَلَاةُ العِيدِ صَبَاحًا.', 'تُقَامُ صَلَاةَ العِيدِ صَبَاحًا.', 'تُقِيمُ صَلَاةُ العِيدِ صَبَاحًا.'], 'D6-L03: passive + nominative.'),
      q('Which statement avoids a generalisation?', ['تَخْتَلِفُ العَادَاتُ مِنْ بَلَدٍ إِلَى بَلَدٍ.', 'كُلُّ العَرَبِ يَحْتَفِلُونَ بِالطَّرِيقَةِ نَفْسِهَا.', 'العَادَاتُ وَاحِدَةٌ فِي كُلِّ مَكَانٍ.'], 'D6-L02: hedging.'),
    ],
    keyIdea: { text: 'The Arab world is multi-faith: describe each community precisely — and balance your paragraph.', ar: '{k|مِنْ نَاحِيَةٍ} … {k|وَمِنْ نَاحِيَةٍ أُخْرَى} … {e|عَلَاوَةً عَلَى ذٰلِكَ} …' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D6-L03. Questions 4–5 retrieve D6-L03 (passive) and D6-L02 (hedging).',
  },
  routes: {
    core: ['I can name five celebrations and three places of worship.', 'I can tell church, synagogue and mosque apart in Arabic.'],
    develop: ['I can narrate a festival I attended.', 'I can use يَتَسَامَحُ مَعَ / يُنَوِّعُ.'],
    stretch: ['I can write a balanced paragraph.', 'I can close with يُشَارُ إِلَى أَنَّ and a qualification.'],
  },
  bridge: [
    { ar: 'كَنِيسَةٌ', urdu: 'کلیسا / گرجا', tr: 'kalīsā', en: 'a church (Urdu girjā)' },
    { ar: 'مِهْرَجَانٌ', urdu: 'میلہ / جشن', tr: 'mela', en: 'a festival (Arabic from Persian mihragān)' },
    { ar: 'أَقَلِّيَّةٌ', urdu: 'اقلیت', tr: 'aqalliyat', en: 'a minority' },
    { ar: 'تَسَامُحٌ', urdu: 'رواداری', tr: 'rawādārī', en: 'tolerance' },
    { ar: 'طَائِفَةٌ', urdu: 'طائفہ / فرقہ', tr: 'ṭāʾifa', en: 'a community, denomination' },
  ],
  bridgeNotes: 'URDU BRIDGE: اقلیت (minority) is shared; اکثریت = Arabic أَغْلَبِيَّةٌ / أَكْثَرِيَّةٌ (majority). CAREFUL: Urdu طائفہ can mean a sect or group; in this lesson Arabic طَائِفَةٌ means a religious community (طَوَائِفُ مَسِيحِيَّةٌ).',
  core: ['عِيدُ المِيلَادِ', 'كَنِيسَةٌ', 'كَنِيسٌ يَهُودِيٌّ', 'قُدَّاسٌ', 'أَقَلِّيَّةٌ', 'طَائِفَةٌ', 'مِهْرَجَانٌ / مَهْرَجَانَاتٌ', 'عُرُوضٌ', 'زِيٌّ تَقْلِيدِيٌّ', 'التَّنَوُّعُ الدِّينِيُّ', 'العَيْشُ المُشْتَرَكُ', 'يَتَسَامَحُ مَعَ'],
  forms: {
    'كَنِيسَةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'كَنَائِسُ' }] }, 'مَعْبَدٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'مَعَابِدُ' }] },
    'طَائِفَةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'طَوَائِفُ' }] }, 'أَقَلِّيَّةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'أَقَلِّيَّاتٌ' }] },
    'زِيٌّ تَقْلِيدِيٌّ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'أَزْيَاءٌ تَقْلِيدِيَّةٌ' }] },
  },
  vocabNotes: {
    0: 'Celebrations and communities. Look-alikes: كَنِيسَةٌ (church) ≠ كَنِيسٌ (synagogue) · قُدَّاسٌ (mass) ≠ قِدِّيسٌ (saint). Plurals كَنَائِسُ · مَعَابِدُ · طَوَائِفُ are diptotes.',
    1: 'Cultural festivals: words for performances, music, dress and heritage.',
    2: 'Diversity and coexistence: the verbs and connectors for a balanced paragraph.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · precise words and two verbs (website rules 1–2 + teaching point)', title: 'Name it precisely', ar: 'التَّسْمِيَةُ الدَّقِيقَةُ',
      cols: [{ label: 'Word', w: 3.0, size: 22 }, { label: 'Example (website)', w: 6.6, size: 22 }, { label: 'Means', w: 2.73 }],
      rows: [
        { core: true, cells: ['كَنِيسَةٌ', P('يُقَامُ القُدَّاسُ فِي {k|الكَنِيسَةِ}.', 'Mass is held in the church.'), 'church'] },
        { core: true, cells: ['كَنِيسٌ يَهُودِيٌّ', P('فِي المَغْرِبِ وَتُونُسَ {e|مَعَابِدُ يَهُودِيَّةٌ} قَدِيمَةٌ.', 'In Morocco and Tunisia there are old synagogues.'), 'synagogue'] },
        { cells: ['قُدَّاسٌ ≠ قِدِّيسٌ', P('ذَهَبُوا إِلَى الكَنِيسَةِ لِحُضُورِ {k|القُدَّاسِ}.', 'They went to church to attend mass.'), 'mass ≠ saint'] },
        { core: true, cells: ['يَتَسَامَحُ {w|مَعَ}', P('يَتَسَامَحُ المُجْتَمَعُ {w|مَعَ} الاخْتِلَافِ.', 'Society is tolerant of difference.'), 'is tolerant of'] },
        { cells: ['يُنَوِّعُ', P('تُنَوِّعُ المَهْرَجَانَاتُ {w|الحَيَاةَ} الثَّقَافِيَّةَ.', 'Festivals diversify cultural life.'), 'diversifies'] },
      ],
      ltr: true,
      foot: 'Christian communities: Egypt, Lebanon, Syria, Jordan, Palestine, Iraq · old Jewish communities: Morocco, Tunisia (website).',
      notes: `GRAMMAR PART 1 — website rules “يَتَسَامَحُ مَعَ” (Form VI, a reciprocal attitude; مَعَ fixed) and “يُنَوِّعُ with a direct object” (Form II, no preposition), with the website teaching point “The Arab world is not religiously uniform … naming places of worship precisely is part of describing the region accurately.”
Website common error: confusing قُدَّاسٌ / قِدِّيسٌ and كَنِيسَةٌ / كَنِيسٌ يَهُودِيٌّ. Islamic link: the Qur’an names these places too (صَوَامِعُ وَبِيَعٌ وَصَلَوَاتٌ وَمَسَاجِدُ, al-Ḥajj 22:40) — useful context for Stretch.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · narrate, balance, report (website rules 3–4) · Develop / Stretch', title: 'Hold two ideas at once', ar: 'الفِقْرَةُ المُتَوَازِنَةُ',
      cards: [
        { chip: 'PAST · DEVELOP', color: '1D5FBF', head: 'حَضَرْتُ · شَاهَدْنَا', big: 'حَضَرْتُ مِهْرَجَانًا وَشَاهَدْتُ عُرُوضًا رَائِعَةً.', en: 'I attended a festival and watched wonderful performances.', clue: 'Objects in -an.' },
        { chip: 'BALANCE · STRETCH', color: '6B4C9A', head: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى', big: 'مِنْ نَاحِيَةٍ تَتَنَوَّعُ الأَعْيَادُ، وَمِنْ نَاحِيَةٍ أُخْرَى تَجْمَعُ النَّاسَ.', en: 'On one hand festivals vary; on the other, they bring people together.', clue: 'Both halves.' },
        { chip: 'REPORT · STRETCH', color: '1E6B52', head: 'عَلَاوَةً عَلَى ذٰلِكَ · يُشَارُ إِلَى أَنَّ', big: 'يُشَارُ إِلَى أَنَّ التَّنَوُّعَ قَدِيمٌ فِي المِنْطَقَةِ.', en: 'It is noted that diversity is long-standing in the region.', clue: 'anna + -a.' },
      ],
      error: { text: 'Website mistake: yatasāmaḥu takes maʿa.', pairs: [['يَتَسَامَحُ مَعَ الاخْتِلَافِ', 'يَتَسَامَحُ بِالاخْتِلَافِ']] },
      notes: `GRAMMAR PART 2 — website rules “Past tense for a festival you attended” (keep the objects accusative) and “Building a balanced paragraph” (two balanced sides plus an added point; يُشَارُ إِلَى أَنَّ introduces a fact impersonally). Website teaching point: “A balanced paragraph needs both halves.”`,
    },
  ],
  quick: [0, 2, 3, 6],
  rest: [1, 4, 5, 7],
  ido: {
    title: 'Watch me build a balanced paragraph',
    steps: [
      { head: 'Fact', ar: 'لَا يَقْتَصِرُ الاحْتِفَالُ عَلَى …', think: 'Open accurately.' },
      { head: 'Add', ar: '{e|عَلَاوَةً عَلَى ذٰلِكَ} تُنَوِّعُ المَهْرَجَانَاتُ …', think: 'One more point.' },
      { head: 'Balance', ar: '{k|مِنْ نَاحِيَةٍ} … {k|وَمِنْ نَاحِيَةٍ أُخْرَى} …', think: 'Both halves.' },
      { head: 'Report', ar: '{w|يُشَارُ إِلَى أَنَّ} العَيْشَ المُشْتَرَكَ قَدِيمٌ', think: 'anna + -a.' },
    ],
    legend: ['e', 'k', 'w'], legendLabels: { e: 'ADD', k: 'BALANCE', w: 'REPORT' },
    model: 'لَا يَقْتَصِرُ الاحْتِفَالُ فِي العَالَمِ العَرَبِيِّ عَلَى الأَعْيَادِ الإِسْلَامِيَّةِ. {e|عَلَاوَةً عَلَى ذٰلِكَ} تُنَوِّعُ المَهْرَجَانَاتُ الثَّقَافِيَّةُ الحَيَاةَ الفَنِّيَّةَ. {k|مِنْ نَاحِيَةٍ} تَخْتَلِفُ الأَعْيَادُ بِاخْتِلَافِ الطَّوَائِفِ، {k|وَمِنْ نَاحِيَةٍ أُخْرَى} تَجْمَعُ النَّاسَ حَوْلَ المَائِدَةِ نَفْسِهَا. وَ{w|يُشَارُ إِلَى أَنَّ} العَيْشَ المُشْتَرَكَ قَدِيمٌ.',
    modelEn: 'Celebration in the Arab world is not limited to Islamic festivals. Moreover, cultural festivals diversify artistic life. On one hand festivals differ between communities; on the other, they gather people around the same table. It is noted that coexistence is long-standing.',
    notes: 'I DO (3 min) — the skeleton of the website writing model. Think aloud on structure: “Fact → add → balance → report + qualify.” This four-move paragraph is reusable for ANY balanced topic (D6-L05, L09, assessment).',
  },
  patternEn: ['society is tolerant of difference', 'festivals diversify cultural life', 'it is noted that diversity is long-standing'],
  sorterNotes: 'Then make one precise sentence for each column (e.g. يُقَامُ القُدَّاسُ فِي الكَنِيسَةِ).',
  patch: {
    vocab: site.vocab, grammar: site.grammar, listening: site.listening, reading: site.reading, writing: site.writing, mistakes: site.mistakes, final: site.final, patterns: site.patterns,
    speaking: {
      ...site.speaking,
      model: [
        ['A', 'صِفْ مِهْرَجَانًا حَضَرْتَهُ.', 'Describe a festival you attended.'],
        ['B', 'حَضَرْتُ مِهْرَجَانًا ثَقَافِيًّا فِي مَسْرَحٍ أَثَرِيٍّ، وَشَاهَدْتُ عُرُوضًا رَائِعَةً.', 'I attended a cultural festival in an ancient theatre, and I watched wonderful performances.'],
        ['A', 'وَمَاذَا عَنِ الأَعْيَادِ الأُخْرَى؟', 'And what about other festivals?'],
        ['B', 'تَحْتَفِلُ طَوَائِفُ مَسِيحِيَّةٌ بِعِيدِ المِيلَادِ، وَيُشَارُ إِلَى أَنَّ التَّنَوُّعَ قَدِيمٌ، وَلٰكِنَّ الأَمْرَ يَخْتَلِفُ مِنْ بَلَدٍ إِلَى بَلَدٍ.', 'Christian communities celebrate Christmas; diversity is said to be long-standing, but it differs from country to country.'],
      ],
    },
  },
  patchNote: 'the connector عِلَاوَةً (website spelling) shown as عَلَاوَةً, and English added to the patterns and speaking model; the website visual game repeats D6-L03 and is skipped.',
  hints: ['yatasāmaḥu + which preposition?', 'Church or synagogue?', 'All residents? Qualify it!'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nPlaces: a theatre · a church · a mosque.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and note the qualification at the end.',
  gloss: [
    ['فِي الصَّيْفِ المَاضِي حَضَرْتُ مِهْرَجَانًا ثَقَافِيًّا فِي مَسْرَحٍ أَثَرِيٍّ.', 'Last summer I attended a cultural festival in an ancient theatre.'],
    ['شَاهَدْنَا عُرُوضًا رَائِعَةً مِنْ رَقْصٍ شَعْبِيٍّ وَمُوسِيقَى تَقْلِيدِيَّةٍ، وَلَبِسَ المُمَثِّلُونَ أَزْيَاءً تَقْلِيدِيَّةً جَمِيلَةً.', 'We watched wonderful performances of folk dance and traditional music, and the performers wore beautiful traditional dress.'],
    ['وَفِي المَدِينَةِ نَفْسِهَا تُوجَدُ كَنِيسَةٌ قَدِيمَةٌ وَمَسْجِدٌ كَبِيرٌ فِي الشَّارِعِ نَفْسِهِ.', 'In the same city there is an old church and a large mosque on the same street.'],
    ['وَفِي عِيدِ المِيلَادِ يَحْتَفِلُ الجِيرَانُ المَسِيحِيُّونَ، وَيُقَامُ القُدَّاسُ فِي الكَنِيسَةِ، وَيُشَارِكُهُمْ بَعْضُ الأَصْدِقَاءِ فِي التَّهْنِئَةِ.', 'At Christmas the Christian neighbours celebrate, mass is held in the church, and some friends join them in offering greetings.'],
    ['يُشَارُ إِلَى أَنَّ التَّنَوُّعَ الدِّينِيَّ قَدِيمٌ فِي المِنْطَقَةِ، وَلٰكِنَّ الأَمْرَ يَخْتَلِفُ مِنْ بَلَدٍ إِلَى بَلَدٍ.', 'It is noted that religious diversity is long-standing in the region, but it differs from country to country.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ مِهْرَجَانًا أَوْ مُنَاسَبَةً حَضَرْتَهَا. مَاذَا شَاهَدْتَ؟' },
      { route: 'develop', ar: 'مَا الأَعْيَادُ غَيْرُ الإِسْلَامِيَّةِ الَّتِي تُحْتَفَلُ بِهَا فِي العَالَمِ العَرَبِيِّ؟' },
      { route: 'stretch', ar: 'كَيْفَ تَصِفُ التَّنَوُّعَ الدِّينِيَّ دُونَ تَعْمِيمٍ؟' },
    ],
    stems: [
      { route: 'core', ar: 'حَضَرْتُ ______ ، وَشَاهَدْتُ ______ .' },
      { route: 'develop', ar: 'تَحْتَفِلُ طَوَائِفُ مَسِيحِيَّةٌ بِـ ______ وَ ______ .' },
      { route: 'stretch', ar: 'مِنْ نَاحِيَةٍ ______ ، وَمِنْ نَاحِيَةٍ أُخْرَى ______ .' },
    ],
    modelEn: ['Describe a festival you attended.', 'I attended a cultural festival in an ancient theatre, and I watched wonderful performances.'],
    notes: 'Website prompts and model. The Core prompt can be ANY festival or occasion (a school Eid fair, a heritage day, a calligraphy exhibition). To a girl: صِفِي · حَضَرْتِهَا · شَاهَدْتِ · تَصِفِينَ.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Five celebrations / places of worship, named and spelled accurately.' },
    develop: { amount: '60–70 words', how: 'Add a past account of a festival with accusative objects.' },
    stretch: { amount: '80–90 words', how: 'Website task: two celebrations · a festival · balanced pair · a qualification.' },
  },
  frames: {
    core: [
      { en: 'Christian communities celebrate …', ar: 'تَحْتَفِلُ طَوَائِفُ مَسِيحِيَّةٌ بِـ ______ .' },
      { en: 'Mass is held in …', ar: 'يُقَامُ القُدَّاسُ فِي ______ .' },
      { en: 'In Morocco there are …', ar: 'فِي المَغْرِبِ ______ .' },
      { en: 'In our street there is a mosque and …', ar: 'فِي شَارِعِنَا مَسْجِدٌ وَ ______ .' },
    ],
    develop: [
      { en: 'Last summer I attended …', ar: 'فِي الصَّيْفِ المَاضِي حَضَرْتُ ______ .' },
      { en: 'We watched wonderful …', ar: 'شَاهَدْنَا ______ رَائِعَةً.' },
      { en: 'Moreover, …', ar: 'عَلَاوَةً عَلَى ذٰلِكَ، ______ .' },
      { en: 'It is noted that …', ar: 'يُشَارُ إِلَى أَنَّ ______ .' },
    ],
    bank: ['عِيدُ المِيلَادِ', 'عِيدُ القِيَامَةِ', 'كَنِيسَةٌ', 'كَنِيسٌ يَهُودِيٌّ', 'قُدَّاسٌ', 'طَوَائِفُ', 'مِهْرَجَانٌ ثَقَافِيٌّ', 'عُرُوضٌ', 'يَتَسَامَحُ مَعَ', 'تُنَوِّعُ', 'مِنْ نَاحِيَةٍ', 'عَلَاوَةً عَلَى ذٰلِكَ'],
  },
  stretch: [
    ['لَا يَقْتَصِرُ … عَلَى …', '… is not limited to …'],
    ['مَا زَالَتْ قَائِمَةً', 'still standing'],
    ['تَجْمَعُ النَّاسَ حَوْلَ المَائِدَةِ نَفْسِهَا', 'gather people around the same table'],
    ['وَإِنْ كَانَ يَخْتَلِفُ مِنْ بَلَدٍ إِلَى بَلَدٍ', 'even if it differs from country to country'],
    ['يَحْتَرِمُ الاخْتِلَافَ', 'respects difference'],
  ],
  modelEn: 'Celebration in the Arab world is not limited to Islamic festivals. Long-established Christian communities celebrate Christmas and Easter, and mass is held in churches. Moreover, cultural festivals diversify artistic life. Last summer I attended a festival in an ancient theatre and watched wonderful performances of folk dance. On one hand festivals differ between communities; on the other, they gather people around the same table. It is noted that coexistence is long-standing, even if it differs from country to country.',
  find: ['two non-Islamic celebrations', 'a past festival with objects in -an', 'both halves of مِنْ نَاحِيَةٍ', 'a qualification'],
  modelNotes: 'Website writing model. Evidence: عِيدُ المِيلَادِ وَعِيدُ القِيَامَةِ · يُقَامُ القُدَّاسُ · عَلَاوَةً عَلَى ذٰلِكَ تُنَوِّعُ … الحَيَاةَ · حَضَرْتُ مِهْرَجَانًا … شَاهَدْتُ عُرُوضًا · مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى · يُشَارُ إِلَى أَنَّ … وَإِنْ كَانَ يَخْتَلِفُ …',
  selfCheck: [
    { route: 'core', text: 'I named places of worship precisely.' },
    { route: 'core', text: 'My celebration names are spelled accurately.' },
    { route: 'develop', text: 'My past objects end in -an (عُرُوضًا).' },
    { route: 'develop', text: 'I used مَعَ after يَتَسَامَحُ.' },
    { route: 'stretch', text: 'My paragraph has both halves and a qualification.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['لَا يَقْتَصِرُ … عَلَى', 'is not limited to'], ['طَوَائِفُ مَسِيحِيَّةٌ', 'Christian communities'], ['عِيدِ القِيَامَةِ', 'Easter'], ['الكَنَائِسِ', 'churches'], ['مَعَابِدُ يَهُودِيَّةٌ', 'synagogues'],
    ['مَا زَالَتْ قَائِمَةً', 'still stand'], ['الحَيَاةَ الفَنِّيَّةَ', 'artistic life'], ['مَسَارِحَ أَثَرِيَّةٍ', 'ancient theatres'], ['بِاخْتِلَافِ', 'according to the difference of'], ['وَإِنْ كَانَ', 'even if it is'],
  ],
  prep: {
    words: [['جَالِيَةٌ عَرَبِيَّةٌ', 'an Arab community abroad', 'pl. جَالِيَاتٌ'], ['مُهَاجِرٌ / مُهَاجِرَةٌ', 'a migrant (m / f)', 'pl. مُهَاجِرُونَ'], ['الجِيلُ الثَّانِي', 'the second generation', '—'], ['هُوِيَّةٌ مُزْدَوَجَةٌ', 'dual identity', '—'], ['جُذُورٌ', 'roots', 'sing. جِذْرٌ']],
    questionEn: 'Where did your family’s roots begin, and how does your family keep its language and culture here?',
    questionAr: 'جُذُورُ عَائِلَتِي فِي … وَنَحْتَفِظُ بِـ …',
    homework: {
      core: 'Learn 12 diversity words (church / synagogue / mass …); write five accurate sentences.',
      develop: 'A 60–70-word account of a festival or occasion you attended.',
      stretch: 'Website writing task: 80–90 words with a balanced paragraph.',
    },
    wordsSource: 'The five words come from the website D6-L05 vocabulary (the Arab diaspora and identity).',
  },
  remember: 'Remember: name it precisely (كَنِيسَةٌ ≠ كَنِيسٌ · قُدَّاسٌ ≠ قِدِّيسٌ) — يَتَسَامَحُ مَعَ — and balance: مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى.',
});

module.exports = { meta, slides };
