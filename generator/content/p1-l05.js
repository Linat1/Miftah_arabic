'use strict';
/* P1-L05 · Sleep, Rest and Digital Wellbeing — website: Pathways › Progression › P1 › P1-L05 (cause-effect verbs يُؤَثِّرُ عَلَى · يُعِيقُ + direct object ·
 * يَرْتَبِطُ بِـ · يُؤَدِّي إِلَى · يَحُدُّ مِنْ; Type 1 conditionals linking screens and sleep; a balanced view of technology).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing and visual game used as published, with one correction:
 * يَرْتَبِطُ قِلَّةُ النَّوْمِ (quiz item 4 and rule 4) → تَرْتَبِطُ (قِلَّةٌ is feminine). The website visual game repeats the P1-L03 set; three
 * different cards are used here (screens, sleep, friends). English added to the patterns. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P1')({
  n: 5, fileTitle: 'Sleep_Rest_and_Digital_Wellbeing', chip: 'Vocabulary',
  title: 'Sleep, Rest and Digital Wellbeing', arabic: 'النَّوْمُ وَالرَّاحَةُ وَالعَافِيَةُ الرَّقْمِيَّةُ',
  focus: 'Link screen use to sleep with the cause-effect verbs and their complements (يُؤَثِّرُ عَلَى النَّوْمِ · تُعِيقُ الإِشْعَارَاتُ النَّوْمَ · يَرْتَبِطُ بِـ · يُؤَدِّي إِلَى), state the link with إِذَا, and plan a balanced digital routine.',
  icon: 'FaBed', iconSet: 'fa6',
});

const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const fixQ = (t) => (typeof t === 'string' ? t.replace('يَرْتَبِطُ قِلَّةُ', 'تَرْتَبِطُ قِلَّةُ') : t);

const site = D.site('P1-L05');
const quiz = site.grammar.quiz.map((it) => ({ ...it, prompt: fixQ(it.prompt) }));
const RH = [['Conditional link', 'idhā + past form → sa- + present'], ['yuʾaththir ʿalā', 'yuʾaththir ʿalā + genitive'], ['yuʿīq with an object', 'yuʿīq + accusative'], ['Linking verbs', 'yartabiṭ bi- · yuʾaddī ilā']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1], examples: r.examples.map(fixQ) }));

const slides = D.devLesson('P1-L05', {
  support: `• Core: 10 sleep / screen words + five cause-effect sentences with the right complement. Develop: two conditionals linking screens and sleep. Stretch: the website ~80–90-word digital wellbeing plan with a balanced close and an impersonal recommendation.
• Tone: the website message is “technology is not the enemy — balance is what matters”. Avoid shaming students’ phone use; invite realistic small changes (notifications off, a quiet period before sleep). Islamic link (optional): sleeping early after ʿIshāʾ and rising for Fajr is a natural sleep routine many students already know.
• Grammar links: Type 1 conditional (P1-L03) · direct object vs preposition families (P1-L02 / P1-L04) · feminine and non-human plural subjects take a ta- / tu- verb (P1-L01).`,
  teach: 'Cause-effect verbs and their complements, conditionals for sleep, a balanced view.',
  wedo: 'Sort the verbs, build a sleep-and-screen chain, match the picture.',
  next: { nextCode: 'P1-L06', nextTitle: 'Healthcare Systems — Hospitals, Doctors and Treatment', nextAr: 'أَنْظِمَةُ الرِّعَايَةِ الصِّحِّيَّةِ' },
  objectives: ['Describe sleep quality and the sleep cycle with precise vocabulary.', 'Use Type 1 conditionals to link screen use and sleep.', 'Use yuʾaththir ʿalā and yuʿīq with their correct complements.', 'Write a digital wellbeing plan connecting screens to rest.'],
  objNotes: 'Website objectives (Arabic shown in transliteration on the slide so the lines read cleanly). The route statements turn them into this lesson’s concrete targets.',
  rulesAr: 'الشَّرْطُ وَالسَّبَبِيَّةُ',
  doNow: {
    questions: [
      q('What does جَوْدَةُ النَّوْمِ mean?', ['sleep quality', 'sleep time', 'a bedroom'], 'Prepared at home (P1-L04).'),
      q('What does الأَرَقُ mean?', ['insomnia', 'deep sleep', 'rest'], 'Prepared at home (P1-L04).'),
      q('What does الإِشْعَارَاتُ mean?', ['notifications', 'screens', 'lights'], 'Prepared at home (P1-L04).'),
      q('Complete: يُلْحِقُ التَّدْخِينُ الضَّرَرَ ___ الرِّئَتَيْنِ.', ['بِـ', 'عَلَى', 'مِنْ'], 'P1-L04: harm verbs.'),
      q('Complete: إِذَا ___ وَقْتَكَ، سَتَشْعُرُ بِتَحَسُّنٍ.', ['نَظَّمْتَ', 'تُنَظِّمُ', 'سَتُنَظِّمُ'], 'P1-L03: the Type 1 conditional.'),
    ],
    keyIdea: { text: 'Affects → ʿalā. Hinders → a direct object. Then link cause to effect.', ar: '{k|يُؤَثِّرُ عَلَى النَّوْمِ} · {w|يُعِيقُ النَّوْمَ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P1-L04. Question 4 retrieves the harm structure (P1-L04); question 5 the Type 1 conditional (P1-L03) — today both patterns move to a new topic.',
  },
  routes: {
    core: ['I can name 10 sleep and screen words.', 'I can say what affects sleep (yuʾaththir ʿalā).'],
    develop: ['I can link screens and sleep with idhā.', 'I can use yuʿīq with a direct object.'],
    stretch: ['I can chain cause → effect (yuʾaddī ilā).', 'I can give a balanced view of technology.'],
  },
  bridge: [
    { ar: 'أَثَرٌ · يُؤَثِّرُ', urdu: 'اثر / متاثر', tr: 'asar', en: 'effect · affects' },
    { ar: 'الرَّاحَةُ', urdu: 'راحت', tr: 'rāḥat', en: 'rest, comfort' },
    { ar: 'الأَرَقُ', urdu: 'بے خوابی', tr: 'be-khwābī', en: 'insomnia (Urdu uses a Persian word)' },
    { ar: 'هُدُوءٌ', urdu: 'سکون', tr: 'sukūn', en: 'calm, quiet (Urdu uses Arabic سُكُونٌ)' },
    { ar: 'الضَّوْءُ', urdu: 'روشنی', tr: 'raushanī', en: 'light' },
  ],
  bridgeNotes: 'URDU BRIDGE: اثر and راحت are shared (اثر انداز ہونا = يُؤَثِّرُ عَلَى). Urdu سکون comes from Arabic سُكُونٌ (stillness); in Arabic the everyday word for calm is الهُدُوءُ.',
  core: ['جَوْدَةُ النَّوْمِ', 'النَّوْمُ العَمِيقُ', 'الأَرَقُ', 'التَّعَبُ المُزْمِنُ', 'الرَّاحَةُ', 'وَقْتُ الشَّاشَةِ', 'الضَّوْءُ الأَزْرَقُ', 'الإِشْعَارَاتُ', 'يُؤَثِّرُ عَلَى', 'يُعِيقُ', 'يَرْتَبِطُ بِـ', 'يُؤَدِّي إِلَى'],
  forms: {
    'الإِشْعَارَاتُ': { tag: 'sg · pl', forms: [{ l: 'sg.', ar: 'إِشْعَارٌ' }] }, 'سَاعَاتُ النَّوْمِ': { tag: 'sg · pl', forms: [{ l: 'sg.', ar: 'سَاعَةُ نَوْمٍ' }] },
    'بِيئَةُ نَوْمٍ مُلَائِمَةٌ': { tag: 'f.', forms: [{ l: 'm. adj.', ar: 'مُلَائِمٌ' }] },
    'يُنَظِّمُ': ihs('أُنَظِّمُ', 'تُنَظِّمُ'), 'يَحُدُّ مِنْ': ihs('أَحُدُّ', 'تَحُدُّ'), 'يُؤَثِّرُ عَلَى': ihs('أُؤَثِّرُ', 'تُؤَثِّرُ'), 'يُعِيقُ': ihs('أُعِيقُ', 'تُعِيقُ'),
    'يَرْتَبِطُ بِـ': ihs('أَرْتَبِطُ', 'تَرْتَبِطُ'), 'يُؤَدِّي إِلَى': ihs('أُؤَدِّي', 'تُؤَدِّي'), 'يُسَاعِدُ عَلَى': ihs('أُسَاعِدُ', 'تُسَاعِدُ'),
  },
  vocabNotes: {
    0: 'Sleep and rest: many are iḍāfa pairs (جَوْدَةُ النَّوْمِ · دَوْرَةُ النَّوْمِ · سَاعَاتُ النَّوْمِ) — the second word is always genitive -i.',
    1: 'Screens and wellbeing. الإِشْعَارَاتُ and الشَّاشَاتُ are plurals of things → the verb is feminine: تُعِيقُ الإِشْعَارَاتُ النَّوْمَ.',
    2: 'Cause and effect: sort as you learn — ʿalā: يُؤَثِّرُ · يُسَاعِدُ | DIRECT OBJECT: يُعِيقُ · يُحَسِّنُ | bi-: يَرْتَبِطُ | ilā: يُؤَدِّي | min: يُقَلِّلُ · يَحُدُّ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · cause-effect verbs and their complements (website rules 2–4) · Core / Develop', title: 'Affects · hinders · is linked to · leads to', ar: 'أَفْعَالُ السَّبَبِ وَالنَّتِيجَةِ',
      cols: [{ label: 'Meaning', w: 2.3 }, { label: 'Verb', w: 2.8, size: 22 }, { label: 'Example', w: 5.6, size: 20 }, { label: 'Then', w: 1.63 }],
      rows: [
        { core: true, cells: ['affects', '{k|يُؤَثِّرُ عَلَى}', 'يُؤَثِّرُ الضَّوْءُ الأَزْرَقُ {k|عَلَى} دَوْرَةِ النَّوْمِ.', 'ʿalā'] },
        { core: true, cells: ['hinders', '{w|تُعِيقُ}', 'تُعِيقُ الإِشْعَارَاتُ {w|النَّوْمَ} العَمِيقَ.', 'object'] },
        { cells: ['is linked to', '{e|تَرْتَبِطُ بِـ}', 'تَرْتَبِطُ قِلَّةُ النَّوْمِ {e|بِالتَّعَبِ} المُزْمِنِ.', 'bi-'] },
        { cells: ['leads to', '{m|يُؤَدِّي إِلَى}', 'يُؤَدِّي الأَرَقُ {m|إِلَى} ضَعْفِ التَّرْكِيزِ.', 'ilā'] },
        { core: true, cells: ['limits', '{p|يَحُدُّ مِنْ}', 'يَحُدُّ التَّطْبِيقُ {p|مِنَ} الإِشْعَارَاتِ اللَّيْلِيَّةِ.', 'min'] },
      ],
      ltr: true,
      foot: 'Website teaching point: yuʾaththir is fixed with ʿalā, but yuʿīq takes a direct object — never yuʿīq ʿalā.',
      notes: `GRAMMAR PART 1 — website rules “يُؤَثِّرُ عَلَى” (Form II fixed with عَلَى), “يُعِيقُ with an object” (Form IV, hollow) and “Linking verbs” (يَرْتَبِطُ بِـ · يُؤَدِّي إِلَى). Website table and sorter add يَحُدُّ مِنْ.
Website mistakes: يُؤَثِّرُ الهَاتِفُ النَّوْمَ ✗ → عَلَى النَّوْمِ · تُعِيقُ الشَّاشَةُ عَلَى النَّوْمِ ✗ → تُعِيقُ الشَّاشَةُ النَّوْمَ.
Note: classical Arabic also says يُؤَثِّرُ فِي (P1-L04 game: تُؤَثِّرُ فِي التَّرْكِيزِ) — both are correct; the website lesson uses عَلَى, so we drill عَلَى.
Row 3: قِلَّةٌ (lack) is feminine, so the verb is تَرْتَبِطُ — the website quiz writes يَرْتَبِطُ قِلَّةُ النَّوْمِ; corrected here.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · who is the subject? Verb agreement · Core / Develop', title: 'He, she — or things?', ar: 'تَذْكِيرُ الفِعْلِ وَتَأْنِيثُهُ',
      cols: [{ label: 'Subject', w: 2.9 }, { label: 'Type', w: 2.3 }, { label: 'Verb + example', w: 7.13, size: 22 }],
      rows: [
        { core: true, cells: ['the phone (m.)', 'he', '{w|يُعِيقُ} الهَاتِفُ النَّوْمَ.'] },
        { core: true, cells: ['the screen (f.)', 'she', '{k|تُعِيقُ} الشَّاشَةُ النَّوْمَ.'] },
        { core: true, cells: ['notifications (things)', 'she', '{k|تُعِيقُ} الإِشْعَارَاتُ النَّوْمَ العَمِيقَ.'] },
        { cells: ['lack of sleep (f.)', 'she', '{k|تَرْتَبِطُ} قِلَّةُ النَّوْمِ بِالتَّعَبِ.'] },
        { cells: ['insomnia (m.)', 'he', '{w|يُؤَدِّي} الأَرَقُ إِلَى ضَعْفِ التَّرْكِيزِ.'] },
        { cells: ['teenagers (people)', 'they', '{e|يَنَامُ} المُرَاهِقُونَ أَقَلَّ مِنْ سَبْعِ سَاعَاتٍ.'] },
      ],
      ltr: true,
      foot: 'A verb before its subject stays singular — yanāmu al-murāhiqūn; things in the plural always take tu- / ta-.',
      notes: `GRAMMAR PART 2 — agreement check across the website examples. Ask: “Is the subject he, she, or things?” Things in the plural behave like she (P1-L01): تُعِيقُ الإِشْعَارَاتُ.
Row 6: verb-first sentences keep the verb singular even for a human plural (GM-VS-03): يَنَامُ المُرَاهِقُونَ — but المُرَاهِقُونَ يَنَامُونَ.
This is where the website quiz slipped (يَرْتَبِطُ قِلَّةُ النَّوْمِ): a good “teacher’s mistake” to show the class.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · conditionals for sleep (website rule 1) · Develop', title: 'If I change this habit …', ar: 'إِذَا … سَـ …',
      cols: [{ label: 'Who', w: 1.7 }, { label: 'Condition: idhā + past form', w: 4.9, size: 21 }, { label: 'Result: sa- + present', w: 5.73, size: 21 }],
      rows: [
        { core: true, cells: ['I', '{e|إِذَا قَلَّلْتُ} وَقْتَ الشَّاشَةِ،', '{k|سَأَنَامُ} أَفْضَلَ.'] },
        { core: true, cells: ['you (m.)', '{e|إِذَا قَلَّلْتَ} وَقْتَ الشَّاشَةِ،', '{k|سَتَتَحَسَّنُ} جَوْدَةُ نَوْمِكَ.'] },
        { cells: ['you (f.)', '{e|إِذَا أَطْفَأْتِ} الإِشْعَارَاتِ،', '{k|سَتَنَامِينَ} أَعْمَقَ.'] },
        { cells: ['you (pl.)', '{e|إِذَا خَصَّصْتُمْ} فَتْرَةَ هُدُوءٍ،', '{k|سَتَرْتَاحُونَ} أَكْثَرَ.'] },
        { cells: ['risk', '{e|إِذَا اسْتَعْمَلْتَ} الهَاتِفَ فِي السَّرِيرِ،', '{k|سَتَقِلُّ} جَوْدَةُ نَوْمِكَ.'] },
      ],
      ltr: true,
      foot: 'Website teaching point: link a habit to its result — worth more than naming screens and sleep as two separate facts.',
      notes: `GRAMMAR PART 3 — website rule “Conditional link” (state the sleep-health relationship as a real condition) and teaching point “Connect cause to effect, do not just list”.
Past forms today: قَلَّلْتُ (Form II) · أَطْفَأْتِ (Form IV, hamza) · خَصَّصْتُمْ (Form II) · اسْتَعْمَلْتَ (Form X). Results agree with the person: سَأَنَامُ / سَتَنَامِينَ / سَتَرْتَاحُونَ.
Website mistake 3: إِذَا تُقَلِّلُ ✗ → إِذَا قَلَّلْتَ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · chain and balance (website listening and writing) · Stretch', title: 'Cause → effect → balance', ar: 'السَّبَبُ · النَّتِيجَةُ · التَّوَازُنُ',
      cards: [
        { chip: 'CAUSE · DEVELOP', color: '1D5FBF', head: 'لِأَنَّ', big: 'يُؤَخِّرُ الضَّوْءُ الأَزْرَقُ هُرْمُونَ النَّوْمِ.', en: 'Blue light delays the sleep hormone.', clue: 'Say WHY.' },
        { chip: 'RESULT · STRETCH', color: '1E6B52', head: 'نَتِيجَةً لِذٰلِكَ', big: 'نَتِيجَةً لِذٰلِكَ يَتَحَسَّنُ المِزَاجُ وَالتَّرْكِيزُ.', en: 'As a result, mood and focus improve.', clue: 'Say WHAT follows.' },
        { chip: 'BALANCE · STRETCH', color: '6B4C9A', head: 'لَيْسَ … بَلْ …', big: 'لَيْسَ الحَلُّ مَنْعَ التِّقْنِيَّةِ، بَلْ تَنْظِيمَ اسْتِعْمَالِهَا.', en: 'The solution is not banning technology, but regulating its use.', clue: 'Not ban — balance.' },
      ],
      error: { text: 'Website common error: yuʿīq never takes ʿalā.', pairs: [['تُعِيقُ الشَّاشَةُ النَّوْمَ', 'تُعِيقُ الشَّاشَةُ عَلَى النَّوْمِ']] },
      notes: `GRAMMAR PART 4 — the website listening (نَتِيجَةً لِذٰلِكَ يَتَحَسَّنُ المِزَاجُ …) and reading (وَلَيْسَ الحَلُّ مَنْعَ التِّقْنِيَّةِ، بَلْ تَنْظِيمَ اسْتِعْمَالِهَا).
A Stretch paragraph = cause (لِأَنَّ …) + result (نَتِيجَةً لِذٰلِكَ …) + a balanced close (لَيْسَتِ التِّقْنِيَّةُ عَدُوًّا …).
Case note: after لَيْسَ the predicate is accusative (مَنْعَ), and بَلْ continues it (تَنْظِيمَ) — GM-NVS-04.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me plan my digital balance',
    steps: [
      { head: 'Affects', ar: '{k|يُؤَثِّرُ} اسْتِعْمَالُ الشَّاشَاتِ {k|عَلَى} نَوْمِي', think: 'ʿalā.' },
      { head: 'Hinders', ar: '{w|تُعِيقُ} الإِشْعَارَاتُ {w|نَوْمِي}', think: 'Object; things = she.' },
      { head: 'If …', ar: '{e|إِذَا خَصَّصْتُ} فَتْرَةَ هُدُوءٍ', think: 'Past form.' },
      { head: 'Balance', ar: 'لَيْسَتِ التِّقْنِيَّةُ عَدُوًّا', think: 'Not a ban.' },
    ],
    legend: ['k', 'w', 'e'], legendLabels: { k: 'ʿALĀ', w: 'DIRECT OBJECT', e: 'CONDITION' },
    model: '{k|يُؤَثِّرُ} اسْتِعْمَالُ الشَّاشَاتِ قَبْلَ النَّوْمِ {k|عَلَى} جَوْدَةِ نَوْمِي، {w|وَتُعِيقُ} الإِشْعَارَاتُ {w|نَوْمِي} العَمِيقَ. {e|إِذَا خَصَّصْتُ} فَتْرَةَ هُدُوءٍ بِلَا شَاشَاتٍ، سَأَنَامُ أَعْمَقَ. وَلَيْسَتِ التِّقْنِيَّةُ عَدُوًّا؛ فَالمُهِمُّ هُوَ التَّوَازُنُ الرَّقْمِيُّ.',
    modelEn: 'Using screens before bed affects the quality of my sleep, and notifications hinder my deep sleep. If I set aside a screen-free quiet period, I will sleep more deeply. Technology is not the enemy; what matters is digital balance.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Affects — ʿalā. Hinders — direct object, and notifications are things, so tuʿīq. Now the plan: idhā + past, then sa-. Last, a balanced close.”',
  },
  patternEn: ['blue light affects sleep', 'notifications hinder deep sleep', 'if you reduce screen time, you will sleep better'],
  game: {
    title: 'Which habit? Match the picture',
    pick: [4, 2, 5],
    en: ['I reduce screen time before sleep.', 'Good sleep is important for mental health.', 'Spending time with friends makes me happy.'],
    icons: [[['fa6', 'FaMobileScreen', '1D5FBF'], ['fa6', 'FaArrowDown', 'C0386B'], ['fa6', 'FaMoon', '6B4C9A']], [['fa6', 'FaBed', '6B4C9A'], ['fa6', 'FaMoon', '1D5FBF']], [['fa6', 'FaFaceSmile', 'C77700'], ['fa6', 'FaUserGroup', '1E6B52']]],
    labels: ['less screen time at night', 'sleep at night', 'time with friends'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6; the website reuses the P1-L03 cards). Then turn the first card into a conditional: إِذَا قَلَّلْتُ وَقْتَ الشَّاشَةِ قَبْلَ النَّوْمِ، سَأَنَامُ أَفْضَلَ.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build a cause-effect chain', title: 'Habit + effect + result', ar: 'اِبْنِ سِلْسِلَةً',
      cols: [{ label: '1 · Habit (idhā + past)', w: 4.0, size: 20 }, { label: '2 · Effect (sa- + present)', w: 4.0, size: 20 }, { label: '3 · Result / link', w: 4.33, size: 19 }],
      rows: [
        { core: true, cells: ['إِذَا اسْتَعْمَلْتَ الهَاتِفَ فِي السَّرِيرِ', 'سَتَقِلُّ جَوْدَةُ نَوْمِكَ', 'وَيُؤَدِّي ذٰلِكَ إِلَى ضَعْفِ التَّرْكِيزِ'] },
        { core: true, cells: ['إِذَا أَطْفَأْتَ الإِشْعَارَاتِ لَيْلًا', 'سَتَنَامُ أَعْمَقَ', 'وَنَتِيجَةً لِذٰلِكَ يَتَحَسَّنُ مِزَاجُكَ'] },
        { cells: ['إِذَا خَصَّصْتَ فَتْرَةَ هُدُوءٍ', 'سَتَرْتَاحُ أَكْثَرَ', 'لِأَنَّ الرَّاحَةَ تُحَسِّنُ التَّرْكِيزَ'] },
      ],
      foot: 'Built from the website listening and writing model: link each habit to an effect and a result.',
      notes: `WE DO (3 min) — the website lesson has no builder, so this chain is built from the website listening and writing model.
Pairs say three different chains (one box from each column; every combination is accurate). Core: columns 1 + 2. Develop: all three. Stretch: say it to a girl (اسْتَعْمَلْتِ … سَتَقِلُّ جَوْدَةُ نَوْمِكِ) and add a balanced close.
Translations: if you use the phone in bed / if you turn off notifications at night / if you set aside a quiet period — your sleep quality will drop / you will sleep more deeply / you will rest more — and that leads to weaker focus / as a result your mood improves / because rest improves focus.`,
    },
  ],
  sorterTitle: 'ʿalā, direct object — or another preposition?',
  sorterNotes: 'Then say a phrase for each verb: يُؤَثِّرُ عَلَى النَّوْمِ · يُسَاعِدُ عَلَى الرَّاحَةِ · يُحَافِظُ عَلَى التَّوَازُنِ · يُعِيقُ النَّوْمَ · يُنَظِّمُ السَّاعَاتِ · يُحَسِّنُ المِزَاجَ · يَرْتَبِطُ بِالتَّعَبِ · يُؤَدِّي إِلَى الأَرَقِ · يَحُدُّ مِنَ الإِشْعَارَاتِ.',
  patch: { grammar: { ...site.grammar, quiz, rules } },
  patchNote: 'website quiz item 4 and rule 4 corrected (يَرْتَبِطُ قِلَّةُ → تَرْتَبِطُ قِلَّةُ, a feminine subject); rule headings shown in English and transliteration; the cause-effect chain slide is teacher-built from the website listening and model. All other website items are used as published.',
  hints: ['yuʾaththir + which preposition?', 'yuʿīq: object or ʿalā?', 'After idhā: past or present?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 5.\nListen for: ʿalā · idhā.',
  listenRoutes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 5 — and write down one idhā sentence and one cause-effect verb.',
  gloss: [
    ['يُؤَثِّرُ الضَّوْءُ الأَزْرَقُ مِنَ الشَّاشَاتِ عَلَى دَوْرَةِ النَّوْمِ، وَتُعِيقُ الإِشْعَارَاتُ النَّوْمَ العَمِيقَ.', 'Blue light from screens affects the sleep cycle, and notifications hinder deep sleep.'],
    ['إِذَا اسْتَعْمَلْتَ الهَاتِفَ فِي السَّرِيرِ، سَتَقِلُّ جَوْدَةُ نَوْمِكَ.', 'If you use the phone in bed, your sleep quality will drop.'],
    ['وَإِذَا خَصَّصْتَ فَتْرَةَ هُدُوءٍ قَبْلَ النَّوْمِ بِلَا شَاشَاتٍ، سَتَنَامُ أَعْمَقَ. يَرْتَبِطُ الأَرَقُ بِالتَّعَبِ المُزْمِنِ وَضَعْفِ التَّرْكِيزِ.', 'If you set aside a screen-free quiet period before sleep, you will sleep more deeply. Insomnia is linked to chronic fatigue and poor focus.'],
    ['وَلَيْسَتِ التِّقْنِيَّةُ عَدُوًّا؛ فَالمُهِمُّ هُوَ التَّوَازُنُ. يُنْصَحُ بِإِطْفَاءِ الإِشْعَارَاتِ لَيْلًا وَبِتَنْظِيمِ سَاعَاتِ النَّوْمِ.', 'Technology is not the enemy; what matters is balance. It is advised to turn off notifications at night and to regulate sleep hours.'],
    ['نَتِيجَةً لِذٰلِكَ يَتَحَسَّنُ المِزَاجُ وَالتَّرْكِيزُ فِي اليَوْمِ التَّالِي.', 'As a result, mood and focus improve the next day.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'كَيْفَ يُؤَثِّرُ اسْتِعْمَالُ الشَّاشَةِ عَلَى نَوْمِكَ؟' },
      { route: 'develop', ar: 'مَاذَا سَيَحْدُثُ إِذَا خَصَّصْتَ فَتْرَةَ هُدُوءٍ قَبْلَ النَّوْمِ؟' },
      { route: 'stretch', ar: 'كَيْفَ تُنَظِّمُ تَوَازُنَكَ الرَّقْمِيَّ؟' },
    ],
    stems: [
      { route: 'core', ar: 'يُؤَثِّرُ اسْتِعْمَالُ الشَّاشَةِ عَلَى ______ .' },
      { route: 'develop', ar: 'إِذَا خَصَّصْتُ فَتْرَةَ هُدُوءٍ، ______ .' },
      { route: 'stretch', ar: 'أُطْفِئُ ______ لَيْلًا، وَنَتِيجَةً لِذٰلِكَ ______ .' },
    ],
    modelEn: ['How does screen use affect your sleep?', 'If I use the phone before sleep, my sleep quality drops and I feel tired.', 'And how do you regulate that?', 'I turn off notifications at night and limit screen time, and as a result my focus improves.'],
    notes: 'Website prompts and model. Accept honest answers without judgement — the goal is one realistic change. Check ʿalā after yuʾaththir and the past form after idhā. To a girl: نَوْمِكِ · خَصَّصْتِ · تُنَظِّمِينَ تَوَازُنَكِ.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Website Core: five cause-effect sentences using the verbs with their complements.' },
    develop: { amount: '60–70 words', how: 'Website Develop: add two conditionals linking screens and sleep.' },
    stretch: { amount: '80–90 words', how: 'Website task: close with a balanced view and one impersonal recommendation.' },
  },
  frames: {
    core: [
      { en: 'Blue light affects …', ar: 'يُؤَثِّرُ الضَّوْءُ الأَزْرَقُ عَلَى ______ .' },
      { en: 'Notifications hinder …', ar: 'تُعِيقُ الإِشْعَارَاتُ ______ .' },
      { en: 'Insomnia is linked to …', ar: 'يَرْتَبِطُ الأَرَقُ بِالتَّعَبِ وَ ______ .' },
      { en: 'Lack of sleep leads to …', ar: 'تُؤَدِّي قِلَّةُ النَّوْمِ إِلَى ______ .' },
    ],
    develop: [
      { en: 'If I use the phone in bed, …', ar: 'إِذَا اسْتَعْمَلْتُ الهَاتِفَ فِي السَّرِيرِ، ______ .' },
      { en: 'If I turn off notifications, I will …', ar: 'إِذَا أَطْفَأْتُ الإِشْعَارَاتِ، ______ .' },
      { en: 'As a result, … improves.', ar: 'نَتِيجَةً لِذٰلِكَ يَتَحَسَّنُ ______ .' },
      { en: 'Technology is not the enemy; what matters is …', ar: 'لَيْسَتِ التِّقْنِيَّةُ عَدُوًّا؛ فَالمُهِمُّ هُوَ ______ .' },
    ],
    bank: ['جَوْدَةُ النَّوْمِ', 'دَوْرَةُ النَّوْمِ', 'النَّوْمُ العَمِيقُ', 'الأَرَقُ', 'التَّعَبُ المُزْمِنُ', 'ضَعْفُ التَّرْكِيزِ', 'وَقْتُ الشَّاشَةِ', 'الإِشْعَارَاتُ', 'فَتْرَةُ هُدُوءٍ', 'التَّوَازُنُ الرَّقْمِيُّ', 'المِزَاجُ', 'سَأَنَامُ أَعْمَقَ'],
  },
  stretch: [
    ['سَتَقِلُّ سَاعَاتُ نَوْمِي', 'my hours of sleep will decrease'],
    ['فَتْرَةُ هُدُوءٍ بِلَا شَاشَاتٍ', 'a screen-free quiet period'],
    ['وَلِذٰلِكَ أَحُدُّ مِنَ الإِشْعَارَاتِ اللَّيْلِيَّةِ', 'so I limit night-time notifications'],
    ['لَيْسَتِ التِّقْنِيَّةُ عَدُوًّا', 'technology is not the enemy'],
    ['لِأَنَّ الرَّاحَةَ الجَيِّدَةَ تُحَسِّنُ المِزَاجَ', 'because good rest improves mood'],
  ],
  modelEn: 'Using screens before sleep affects the quality of my sleep, and notifications hinder my deep sleep. If I use the phone in bed, my hours of sleep will decrease and I will feel tired the next day. If I set aside a screen-free quiet period, I will sleep more deeply. Insomnia is linked to chronic fatigue, so I limit night-time notifications and regulate my sleep hours. Technology is not the enemy; what matters is digital balance, because good rest improves mood and focus.',
  find: ['yuʾaththir ʿalā', 'yuʿīq + a direct object', 'two idhā conditionals', 'a balanced close'],
  modelNotes: 'Website writing model. Evidence: يُؤَثِّرُ … عَلَى جَوْدَةِ نَوْمِي · تُعِيقُ الإِشْعَارَاتُ نَوْمِي · إِذَا اسْتَعْمَلْتُ … سَتَقِلُّ · إِذَا خَصَّصْتُ … سَأَنَامُ · يَرْتَبِطُ الأَرَقُ بِالتَّعَبِ · أَحُدُّ مِنَ الإِشْعَارَاتِ · لَيْسَتِ التِّقْنِيَّةُ عَدُوًّا.',
  selfCheck: [
    { route: 'core', text: 'ʿalā after yuʾaththir; no preposition after yuʿīq.' },
    { route: 'core', text: 'Things in the plural take a tu- / ta- verb.' },
    { route: 'develop', text: 'My idhā verbs are past; my results have sa-.' },
    { route: 'develop', text: 'I linked a cause to an effect (yuʾaddī ilā / yartabiṭ bi-).' },
    { route: 'stretch', text: 'I closed with a balanced view, not a ban.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['لَا يَقِلُّ أَهَمِّيَّةً عَنْ', 'is no less important than'], ['يُعِيدُ بِنَاءَ', 'rebuilds'], ['خَلَايَاهُ', 'its cells'], ['الذَّاكِرَةَ', 'the memory'], ['يُؤَخِّرُ', 'delays'],
    ['إِفْرَازَ هُرْمُونِ النَّوْمِ', 'the release of the sleep hormone'], ['المُرَاهِقُ', 'the teenager'], ['مَنْعَ', 'banning'], ['مُظْلِمَةٍ', 'dark'], ['يَخْتَلِفُ عَنْ غَيْرِهِ', 'differs from others'],
  ],
  prep: {
    words: [['المُسْتَشْفَى', 'the hospital', 'pl. المُسْتَشْفَيَاتُ'], ['العِيَادَةُ', 'the clinic', 'pl. العِيَادَاتُ'], ['مَوْعِدٌ', 'an appointment', 'pl. مَوَاعِيدُ'], ['يُعَالِجُ', 'he treats', 'تُعَالِجُ she'], ['وَصْفَةٌ طِبِّيَّةٌ', 'a prescription', '—']],
    questionEn: 'When did you last visit a doctor or a clinic, and why?',
    questionAr: 'زُرْتُ ______ قَبْلَ ______ ، لِأَنَّ ______ .',
    homework: {
      core: 'Learn 10 sleep and screen words; write five cause-effect sentences.',
      develop: 'A 60–70-word paragraph with two conditionals linking screens and sleep.',
      stretch: 'Website writing task: an 80–90-word digital wellbeing plan with a balanced close.',
    },
    wordsSource: 'The five words come from the website P1-L06 vocabulary (healthcare and treatment).',
  },
  remember: 'Remember: yuʾaththir ʿALĀ · yuʿīq + a direct object · yartabiṭ BI- · yuʾaddī ILĀ · yaḥudd MIN — things take a ta- verb (tuʿīq al-ishʿārāt) — and technology is not the enemy: balance is.',
});

module.exports = { meta, slides };
