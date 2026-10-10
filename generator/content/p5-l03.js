'use strict';
/* P5-L03 · Gender Equality — Rights, Progress and Challenges — website: Pathways › Progression › P5 › P5-L03 (the extended subjunctive after verbs of
 * insistence, demand and call — يُصِرُّ عَلَى أَنْ / يُطَالِبُ بِأَنْ / يَدْعُو إِلَى أَنْ — each with its fixed preposition; passive subjunctives; a balanced
 * concession–refutation argument). Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live builder, mission and
 * visual game used as published, with waṣl alif shown without a kasra, لِكَيْ always written with its sukūn and one important fix throughout: يَصِرُّ →
 * يُصِرُّ (Form IV أَصَرَّ / يُصِرُّ عَلَى; يَصِرُّ is a different verb, “to creak”), plus the speaking question بِمَ يُصِرُّ → عَلَامَ يُصِرُّ (insist takes ʿalā).
 * Game cards 1, 2 and 3 not used. Sorter headings in transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P5')({
  n: 3, fileTitle: 'Gender_Equality', chip: 'Advocacy',
  title: 'Gender Equality — Rights, Progress and Challenges', arabic: 'المُسَاوَاةُ بَيْنَ الجِنْسَيْنِ — الحُقُوقُ وَالتَّقَدُّمُ وَالتَّحَدِّيَاتُ',
  focus: 'Speak the language of rights advocacy — yuṣirru ʿalā an (insists), yuṭālibu bi-an (demands), yadʿū ilā an (calls for), each with its own preposition and a verb in -a — inside a balanced argument: ṣaḥīḥun anna … ghayra anna … law … la-.',
  icon: 'FaScaleBalanced', iconSet: 'fa6',
});

const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const sp = (p) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: p }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ').replace(/بِمَ يَصِرُّ/g, 'عَلَامَ يُصِرُّ').replace(/يَصِرُّ/g, 'يُصِرُّ'));
const site = fix(D.site('P5-L03'));
const RH = [['Insistence', 'yuṣirru ʿalā an + verb in -a'], ['Demand', 'yuṭālibu bi-an + verb in -a'], ['Call', 'yadʿū ilā an + verb in -a'], ['Balance the argument', 'ṣaḥīḥun anna … ghayra anna …']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P5-L03', {
  support: `• Core: one sentence for each demand trigger with the correct preposition (website Core). Develop: add a concession–refutation pair (100 words). Stretch: 110 words with all three triggers, a passive and a Type 2.
• Framing (Islamic school): present this as a discussion of rights, dignity and opportunity. Faith link: «مَنْ عَمِلَ صَالِحًا مِنْ ذَكَرٍ أَوْ أُنْثَىٰ وَهُوَ مُؤْمِنٌ فَلَنُحْيِيَنَّهُ حَيَاةً طَيِّبَةً» (al-Naḥl 16:97) — equal dignity and reward. Khadīja (raḍiya Allāhu ʿanhā) ran a successful trade; ʿĀʾisha was a leading scholar. Keep debate respectful; some terms (e.g. النِّظَامُ الأَبَوِيُّ) are academic labels, not lesson content to dwell on.
• WEBSITE CORRECTION (important): the website spells “insists” يَصِرُّ throughout. The verb is Form IV: أَصَرَّ / يُصِرُّ عَلَى (with ḍamma). يَصِرُّ is a different word (to creak). All slides use يُصِرُّ.
• Sensitivity: the vocabulary includes العُنْفُ الأُسَرِيُّ (domestic violence). Mention it only as a policy term; follow safeguarding procedures if a student discloses anything.
• Grammar links: an + -a (P4) · fixed prepositions (P4-L06 / L09) · passives (P4-L02, P5-L02) · concession–refutation (P5-L01).`,
  teach: 'Three new triggers with their prepositions, verbs in -a incl. passives, a balanced argument.',
  wedo: 'Match pictures of equality, build an advocacy line, sort insist / demand / call.',
  next: { nextCode: 'P5-L04', nextTitle: 'Digital Society — Social Media, Privacy and the Digital Divide', nextAr: 'المُجْتَمَعُ الرَّقْمِيُّ' },
  objectives: ['Discuss gender equality with formal rights vocabulary and a balanced argument.', 'Use yuṣirru ʿalā an, yuṭālibu bi-an and yadʿū ilā an + a verb in -a.', 'Balance conceded progress against remaining challenges.', 'Keep each trigger’s preposition and every verb’s final -a.'],
  rulesAr: 'المَنْصُوبُ المُوَسَّعُ: الإِصْرَارُ وَالمُطَالَبَةُ وَالدَّعْوَةُ',
  ruleEx: [['يُصِرُّ المُدَافِعُونَ عَلَى أَنْ تَحْصُلَ المَرْأَةُ عَلَى حُقُوقٍ مُتَسَاوِيَةٍ'], ['يُطَالِبُ النَّاشِطُونَ بِأَنْ تُوَقِّعَ الحُكُومَاتُ اتِّفَاقِيَّاتِ المُسَاوَاةِ'], ['تَدْعُو المُنَظَّمَاتُ إِلَى أَنْ يَنْتَهِيَ العُنْفُ الأُسَرِيُّ'], ['صَحِيحٌ أَنَّ التَّمْكِينَ تَقَدَّمَ، غَيْرَ أَنَّ المُعِيقَاتِ لَا تَزَالُ قَائِمَةً']],
  doNow: {
    questions: [
      q('What does المُسَاوَاةُ بَيْنَ الجِنْسَيْنِ mean?', ['gender equality', 'a mixed school', 'two sexes'], 'Prepared at home (P5-L02).'),
      q('What does فَجْوَةُ الأُجُورِ mean?', ['the pay gap', 'a salary increase', 'a work break'], 'Prepared at home (P5-L02).'),
      q('What does يُطَالِبُ بِأَنْ mean?', ['demands that', 'hopes that', 'fears that'], 'Prepared at home (P5-L02).'),
      q('Which is the humanitarian passive “is displaced”?', ['يُهَجَّرُ', 'يُهَاجِرُ', 'هَجَّرَ'], 'P5-L02: the person first.'),
      q('Complete: لَوْ لَمْ تَنْدَلِعِ الحُرُوبُ، ___ المَلَايِينُ إِلَى الفِرَارِ.', ['لَمَا اضْطُرَّ', 'سَيَضْطَرُّ', 'اضْطُرَّ'], 'P5-L02: law lam … la-mā.'),
    ],
    keyIdea: { text: 'Every trigger has its own preposition — and after the an, the verb ends in -a.', ar: 'يُصِرُّ {w|عَلَى} أَنْ {k|تَحْصُلَ} · يُطَالِبُ {w|بِـ}أَنْ {k|تُوَقِّعَ} · يَدْعُو {w|إِلَى} أَنْ {k|يَنْتَهِيَ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P5-L02. Questions 4–5 retrieve the humanitarian passive and the negative Type 2 (P5-L02) — passives return today in -a: an tufaʿʿala.',
  },
  routes: {
    core: ['I can name 8 rights words.', 'I can use each trigger with its preposition.'],
    develop: ['I can keep the verb after an in -a — even a passive.', 'I can balance progress and challenges.'],
    stretch: ['I can use all three triggers and a Type 2.', 'I can write a balanced 110-word argument.'],
  },
  bridge: [
    { ar: 'حُقُوقٌ', urdu: 'حقوق', tr: 'huqūq', en: 'rights (ḥuqūq al-ʿibād)' },
    { ar: 'مُطَالَبَةٌ · يُطَالِبُ', urdu: 'مطالبہ', tr: 'mutālaba', en: 'a demand · demands' },
    { ar: 'إِصْرَارٌ · يُصِرُّ', urdu: 'اصرار', tr: 'isrār', en: 'insistence · insists' },
    { ar: 'دَعْوَةٌ · يَدْعُو', urdu: 'دعوت', tr: 'dāwat', en: 'Arabic: a call · Urdu: an invitation, a feast' },
    { ar: 'تَمْثِيلٌ', urdu: 'تمثیل', tr: 'tamsīl', en: 'Arabic: representation · Urdu: an allegory, a parable' },
  ],
  bridgeNotes: 'URDU BRIDGE: حقوق، مطالبہ and اصرار are shared — note اصرار has a ṣād, so the verb is يُصِرُّ (Form IV). Careful: Urdu دعوت is usually an invitation to a meal; Arabic يَدْعُو إِلَى = calls for. Urdu تمثیل is an allegory; Arabic التَّمْثِيلُ السِّيَاسِيُّ = political representation.',
  core: ['يُصِرُّ عَلَى أَنْ', 'يُطَالِبُ بِأَنْ', 'يَدْعُو إِلَى أَنْ', 'يُنَاضِلُ مِنْ أَجْلِ', 'المُسَاوَاةُ بَيْنَ الجِنْسَيْنِ', 'تَمْكِينُ المَرْأَةِ', 'فَجْوَةُ الأُجُورِ', 'التَّمْثِيلُ السِّيَاسِيُّ', 'القَوَالِبُ النَّمَطِيَّةُ', 'حُقُوقُ المَرْأَةِ', 'تَكَافُؤُ الفُرَصِ', 'التَّقَدُّمُ التَّدْرِيجِيُّ'],
  forms: {
    'يُصِرُّ عَلَى أَنْ': ihs('أُصِرُّ عَلَى أَنْ', 'تُصِرُّ عَلَى أَنْ'), 'يُطَالِبُ بِأَنْ': ihs('أُطَالِبُ بِأَنْ', 'تُطَالِبُ بِأَنْ'), 'يَدْعُو إِلَى أَنْ': ihs('أَدْعُو إِلَى أَنْ', 'تَدْعُو إِلَى أَنْ'),
    'يُنَاضِلُ مِنْ أَجْلِ': ihs('أُنَاضِلُ مِنْ أَجْلِ', 'تُنَاضِلُ مِنْ أَجْلِ'), 'نَاشِطَةُ حُقُوقٍ': { tag: 'm · f · pl', forms: [{ l: 'f. pl.', ar: 'نَاشِطَاتٌ' }, { l: 'm.', ar: 'نَاشِطُ حُقُوقٍ' }] },
    'القَوَالِبُ النَّمَطِيَّةُ': { tag: 'sg · pl', forms: [{ l: 'sg.', ar: 'قَالَبٌ نَمَطِيٌّ' }] }, 'حُقُوقُ المَرْأَةِ': { tag: 'sg · pl', forms: [{ l: 'sg.', ar: 'حَقٌّ' }] },
  },
  vocabNotes: {
    0: 'Insistence, demand and call: each verb has a FIXED preposition before أَنْ — يُصِرُّ عَلَى · يُطَالِبُ بِـ · يَدْعُو إِلَى. They can also take a noun: يُطَالِبُ بِحُقُوقِهِ · يَدْعُو إِلَى المُسَاوَاةِ. Spelling: يُصِرُّ (ḍamma) — the website prints يَصِرُّ.',
    1: 'Gender equality: academic vocabulary for a policy discussion. تَمْكِينٌ = empowerment (making able). القَوَالِبُ النَّمَطِيَّةُ = stereotypes (literally “pattern moulds”). المُعِيقَاتُ = obstacles, barriers.',
    2: 'Progress and struggle: إِنْجَازَاتٌ (achievements) and التَّقَدُّمُ التَّدْرِيجِيُّ (gradual progress) for the concession; العَمَلُ غَيْرُ المَأْجُورِ (unpaid work, e.g. caring at home) for the challenges.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · three new triggers (website rules 1–3, table and teaching point 1) · Core', title: 'Insist, demand, call', ar: 'الإِصْرَارُ وَالمُطَالَبَةُ وَالدَّعْوَةُ',
      cols: [{ label: 'Trigger', w: 2.2, size: 20 }, { label: 'Preposition', w: 1.6, size: 20 }, { label: 'Meaning', w: 1.7 }, { label: 'Example (website)', w: 6.83, size: 17 }],
      rows: [
        { core: true, cells: ['{e|يُصِرُّ}', '{w|عَلَى} أَنْ', 'insists', 'يُصِرُّ المُدَافِعُونَ {w|عَلَى} أَنْ {k|تَحْصُلَ} المَرْأَةُ عَلَى حُقُوقٍ مُتَسَاوِيَةٍ.'] },
        { core: true, cells: ['{e|يُطَالِبُ}', '{w|بِـ}أَنْ', 'demands', 'يُطَالِبُ النَّاشِطُونَ {w|بِ}أَنْ {k|تُوَقِّعَ} الحُكُومَاتُ اتِّفَاقِيَّاتِ المُسَاوَاةِ.'] },
        { core: true, cells: ['{e|يَدْعُو}', '{w|إِلَى} أَنْ', 'calls for', 'تَدْعُو المُنَظَّمَاتُ {w|إِلَى} أَنْ {k|يَنْتَهِيَ} العُنْفُ الأُسَرِيُّ.'] },
        { cells: ['يُطَالِبُ / يَدْعُو', '+ noun', 'no an', 'يُطَالِبُ {w|بِ}حُقُوقِهِ · تَدْعُو {w|إِلَى} المُسَاوَاةِ'] },
        { cells: ['{e|يُنَاضِلُ}', '{w|مِنْ أَجْلِ}', 'fights for', 'تُنَاضِلُ النَّاشِطَاتُ {w|مِنْ أَجْلِ} تَكَافُؤِ الفُرَصِ.'] },
      ],
      ltr: true,
      foot: 'Website teaching point: the subjunctive is the mood of every DESIRED or REQUIRED action — so it extends to insisting, demanding and calling.',
      notes: `GRAMMAR PART 1 — website rules “Insistence”, “Demand”, “Call”, the website table and teaching point 1. Rows 4–5 are teacher-built from the vocabulary (يُنَاضِلُ مِنْ أَجْلِ).
SPELLING: يُصِرُّ (yuṣirru), Form IV of صَرَّ — past أَصَرَّ, maṣdar إِصْرَارٌ (Urdu اصرار). The website writes يَصِرُّ, which is a different verb (to creak/squeak); we correct it everywhere.
Row 2: بِـ joins أَنْ in writing: بِأَنْ. Row 3: يَنْتَهِيَ — weak -ī shows the -a clearly.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · the right preposition (website teaching point 2, mistakes 2–3 and common error) · Core / Develop', title: 'Each verb has its partner', ar: 'لِكُلِّ فِعْلٍ حَرْفُهُ',
      cards: [
        { chip: 'ʿALĀ · CORE', color: '1D5FBF', head: 'يُصِرُّ عَلَى', big: 'يُصِرُّ المُجْتَمَعُ عَلَى أَنْ يَنْتَهِيَ التَّمْيِيزُ.', en: 'Society insists that discrimination end.', clue: 'Firm ON your point.' },
        { chip: 'BI- · CORE', color: '1E6B52', head: 'يُطَالِبُ بِـ', big: 'تُطَالِبُ النَّاشِطَاتُ بِأَنْ تُغَيَّرَ القَوَانِينُ.', en: 'Activists demand that the laws be changed.', clue: 'Demand WITH a claim.' },
        { chip: 'ILĀ · CORE', color: 'C77700', head: 'يَدْعُو إِلَى', big: 'تَدْعُو الحَمْلَةُ إِلَى أَنْ تُكْسَرَ القَوَالِبُ النَّمَطِيَّةُ.', en: 'The campaign calls for stereotypes to be broken.', clue: 'Call TOWARDS a goal.' },
      ],
      error: { text: 'Website mistakes 2–3: yuṭālibu takes bi-, yadʿū takes ilā.', pairs: [['يُطَالِبُ النَّاشِطُونَ بِأَنْ تُوَقِّعَ', 'يُطَالِبُ النَّاشِطُونَ عَلَى أَنْ تُوَقِّعَ']] },
      notes: `GRAMMAR PART 2 — website teaching point 2 (“Mind the fixed preposition on each trigger”), mistakes 2–3 and the common error (يُصِرُّ بِأَنْ ✗ → يُصِرُّ عَلَى أَنْ ✓).
Memory hooks: insist ON (ʿalā) · demand WITH / FOR (bi-) · call TO (ilā). The website says getting the preposition right is part of the accuracy mark.
Cards 2–3 have PASSIVE verbs after an: تُغَيَّرَ (be changed) · تُكْسَرَ (be broken) — yu/tu-faʿʿal-a.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · the verb after the trigger, active and passive (website sorter, live builder and texts) · Develop', title: 'Every verb in -a — even passives', ar: 'المَنْصُوبُ المَبْنِيُّ لِلْمَعْلُومِ وَلِلْمَجْهُولِ',
      cols: [{ label: 'Normal (-u)', w: 2.1, size: 20 }, { label: 'After an (-a)', w: 2.3, size: 20 }, { label: 'Type', w: 1.9 }, { label: 'Example (website texts)', w: 6.03, size: 17 }],
      rows: [
        { core: true, cells: ['تَحْصُلُ', '{k|تَحْصُلَ}', 'active', 'عَلَى أَنْ {k|تَحْصُلَ} المَرْأَةُ عَلَى فُرَصٍ مُتَسَاوِيَةٍ'] },
        { core: true, cells: ['تُفَعَّلُ', '{m|تُفَعَّلَ}', 'passive', 'بِأَنْ {m|تُفَعَّلَ} قَوَانِينُ المُسَاوَاةِ'] },
        { cells: ['يَنْتَهِي', '{k|يَنْتَهِيَ}', 'weak -ī', 'إِلَى أَنْ {k|يَنْتَهِيَ} التَّمْيِيزُ القَائِمُ عَلَى النَّوْعِ'] },
        { cells: ['تُسَدُّ', '{m|تُسَدَّ}', 'passive, doubled', 'بِأَنْ {m|تُسَدَّ} فَجْوَةُ الأُجُورِ'] },
        { cells: ['يُعَاقَبُ', '{m|يُعَاقَبَ}', 'impersonal passive', 'بِأَنْ {m|يُعَاقَبَ} عَلَى التَّمْيِيزِ'] },
      ],
      ltr: true,
      foot: 'Website mistake 1: an taḥṣulu ✗ → an taḥṣula ✓. Passive or active, the verb after an ends in -a.',
      notes: `GRAMMAR PART 3 — website mistake 1, the sorter and the live builder (rows 2, 4, 5) and mission round 13 (يُعَاقَبَ, not يُعَاقِبَ — passive).
Row 2: تُفَعَّلَ = be activated (Form II passive). Row 4: تُسَدَّ = be closed (doubled verb سَدَّ). Row 5: يُعَاقَبَ عَلَى التَّمْيِيزِ = discrimination be punished (impersonal: “it be punished for discrimination”).
Stretch: change two active examples into passives: أَنْ تُطَبِّقَ الحُكُومَاتُ القَوَانِينَ → أَنْ تُطَبَّقَ القَوَانِينُ.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the balanced argument (website rule 4, listening, reading and writing model) · Stretch', title: 'Progress — and what remains', ar: 'التَّوَازُنُ فِي الحُجَّةِ',
      cols: [{ label: 'Move', w: 1.9 }, { label: 'Example (website texts)', w: 7.9, size: 17 }, { label: 'Tool', w: 2.53 }],
      rows: [
        { core: true, cells: ['concede', '{w|صَحِيحٌ أَنَّ} نِسْبَةَ المَرْأَةِ فِي البَرْلَمَانَاتِ ارْتَفَعَتْ،', 'ṣaḥīḥun anna'] },
        { core: true, cells: ['refute', '{e|غَيْرَ أَنَّ} فَجْوَةَ الأُجُورِ وَالعُنْفَ الأُسَرِيَّ {e|لَا يَزَالَانِ يُعِيقَانِ} التَّقَدُّمَ.', 'dual verb!'] },
        { cells: ['passive fact', '{m|تُحْرَمُ} كَثِيرٌ مِنَ النِّسَاءِ مِنْ مَوَاقِعِ القِيَادَةِ', 'passive'] },
        { cells: ['advocacy', 'يُصِرُّ … عَلَى أَنْ … · يُطَالِبُ … بِأَنْ … · تَدْعُو … إِلَى أَنْ …', 'three triggers'] },
        { cells: ['analyse', '{p|لَوْ} طُبِّقَتِ القَوَانِينُ بِالتَّسَاوِي، {p|لَضَاقَتْ} فَجْوَةُ الأُجُورِ.', 'Type 2 + passive'] },
      ],
      ltr: true,
      foot: 'A balanced argument earns trust: name the real progress first — then the challenges, the demands and what could be different.',
      notes: `GRAMMAR PART 4 — website rule “Balance the argument”, the listening, reading and writing model.
Row 2: two subjects (the pay gap AND violence) → a DUAL verb: لَا يَزَالَانِ يُعِيقَانِ (they both still hinder). Nice Stretch detail.
Row 5: لَوْ + a passive (طُبِّقَتْ = were applied) → لَـ + past (لَضَاقَتْ = would have narrowed).`,
    },
  ],
  quick: [0, 1, 2, 4],
  rest: [3, 5, 6, 7],
  ido: {
    title: 'Watch me write a balanced argument',
    steps: [
      { head: 'Concede', ar: '{w|صَحِيحٌ أَنَّ} المَرْأَةَ حَقَّقَتْ …', think: 'Real progress.' },
      { head: 'Refute', ar: '{e|غَيْرَ أَنَّ} … لَا يَزَالَانِ …', think: 'However.' },
      { head: 'Advocate', ar: 'يُصِرُّ … عَلَى أَنْ {k|تَنْعَمَ} · بِأَنْ {k|تُفَعَّلَ}', think: 'Preposition + -a.' },
      { head: 'Analyse', ar: '{p|لَوْ} طُبِّقَتْ … {p|لَضَاقَتْ}', think: 'Type 2.' },
    ],
    legend: ['w', 'e', 'k', 'p'], legendLabels: { w: 'CONCEDE', e: 'REFUTE', k: 'TRIGGER + -A', p: 'TYPE 2' },
    model: '{w|صَحِيحٌ أَنَّ} المَرْأَةَ العَرَبِيَّةَ حَقَّقَتْ إِنْجَازَاتٍ فِي التَّعْلِيمِ وَالعَمَلِ، {e|غَيْرَ أَنَّ} فَجْوَةَ الأُجُورِ لَا تَزَالُ قَائِمَةً. يُصِرُّ المُدَافِعُونَ عَلَى أَنْ {k|تَنْعَمَ} المَرْأَةُ بِحُقُوقِهَا كَامِلَةً، وَيُطَالِبُ المُجْتَمَعُ المَدَنِيُّ بِأَنْ {k|تُفَعَّلَ} قَوَانِينُ المُسَاوَاةِ. {p|وَلَوْ} طُبِّقَتِ القَوَانِينُ بِالتَّسَاوِي، {p|لَضَاقَتْ} فَجْوَةُ الأُجُورِ كَثِيرًا.',
    modelEn: 'It is true that Arab women have achieved gains in education and work; however, the pay gap still remains. Advocates insist that women enjoy their full rights, and civil society demands that equality laws be put into effect. Had the laws been applied equally, the pay gap would have narrowed greatly.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Concede: ṣaḥīḥun anna … ḥaqqaqat — real, no -a. Refute: ghayra anna. Insist ON: yuṣirru ʿALĀ an tanʿamA. Demand WITH: yuṭālibu BI-an tufaʿʿalA — passive, still -a. Could it be different? law ṭubbiqat … LA-ḍāqat.”',
  },
  patternEn: ['advocates insist that women obtain equal rights', 'activists demand that governments sign equality agreements', 'organisations call for gender-based discrimination to end'],
  gameKey: 'P5-L03',
  game: {
    title: 'Equal rights: match the picture',
    pick: [0, 4, 5],
    en: ['Educational opportunities must be equal.', 'Household responsibilities can be shared.', 'Progress has been made, but challenges remain.'],
    icons: [[['fa6', 'FaGraduationCap', '1D5FBF'], ['fa6', 'FaScaleBalanced', '6B4C9A']], [['fa6', 'FaHouseUser', '1E6B52'], ['fa6', 'FaHandshake', 'C77700']], [['fa6', 'FaChartLine', '1E6B52'], ['fa6', 'FaTriangleExclamation', 'C0386B']]],
    labels: ['equal education', 'sharing at home', 'progress and challenges'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Card 3 is a concession–refutation in simple form (تَحَقَّقَ تَقَدُّمٌ وَلٰكِنْ …) — upgrade it together: صَحِيحٌ أَنَّ تَقَدُّمًا تَحَقَّقَ، غَيْرَ أَنَّ التَّحَدِّيَاتِ لَا تَزَالُ قَائِمَةً. Card 1: أَنْ تَتَسَاوَى — the -a is hidden on a final alif maqṣūra.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build an advocacy line (website live builder)', title: 'Insist + demand + call', ar: 'ابْنِ سَطْرًا حُقُوقِيًّا',
      cols: [{ label: '1 · Insistence (ʿalā an)', w: 4.1, size: 16 }, { label: '2 · Demand (bi-an)', w: 4.0, size: 16 }, { label: '3 · Call (ilā an)', w: 4.23, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Then circle each preposition and each verb in -a — which ones are passive?',
      notes: `WE DO (3 min) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Core: read row 1 across. Develop: find the four PASSIVE verbs in -a (تُطَبَّقَ · تُفَعَّلَ · تُسَدَّ · يُعَاقَبَ · تُكْسَرَ). Stretch: add a concession before the line (P5-L01).`,
    },
  ],
  sorterTitle: 'Insistence, demand — or call?',
  sorterCats: ['insistence (yuṣirru ʿalā)', 'demand (yuṭālibu bi-)', 'call (yadʿū ilā)'],
  sorterNotes: 'Then cover the triggers and read only the endings: can partners name the trigger from the preposition alone (ʿalā · bi- · ilā)?',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: { ...site.writing, prompt: 'Write a 100–110-word balanced gender-equality argument. Concede progress with ṣaḥīḥun anna, refute with ghayra anna, then use all three demand triggers — yuṣirru ʿalā an, yuṭālibu bi-an, yadʿū ilā an — and add a Type 2 counterfactual.', checklist: ['A concession (ṣaḥīḥun anna) balanced by a refutation (ghayra anna).', 'All three demand triggers, each with the correct preposition and a verb in -a.', 'A passive (tuḥramu / yuʿāqabu) and a Type 2 counterfactual.', 'A balanced argument covering both progress and challenges; 100–110 words.'] }, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('Insistence: يُصِرُّ عَلَى أَنْ.', 'Insistence: yuṣirru ʿalā an.').replace('Demand: يُطَالِبُ بِأَنْ.', 'Demand: yuṭālibu bi-an.').replace('Call: يَدْعُو إِلَى أَنْ.', 'Call: yadʿū ilā an.') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; لِكَيْ always written with its sukūn; spelling fix يَصِرُّ → يُصِرُّ throughout (Form IV); speaking question بِمَ يَصِرُّ → عَلَامَ يُصِرُّ; rule formulas, pattern tips, writing prompt and checklist in transliteration; sorter headings in transliteration; game cards 1, 2 and 3 not used; the trigger, preposition, -a and balance tables are teacher-built from the website texts. All other website items are used as published.',
  hints: ['an taḥṣulu?', 'yuṭālibu ʿalā?', 'tadʿū bi-?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 4.\nListen for: ṣaḥīḥun anna · yuṣirru ʿalā · yuṭālibu bi- · tadʿū ilā.',
  listenRoutes: 'Core: questions 1, 3 and 4. Develop / Stretch: all 5 — and write down each trigger with its preposition.',
  gloss: [
    ['تَقُولُ النَّاشِطَةُ: تُشِيرُ التَّقَارِيرُ الدَّوْلِيَّةُ إِلَى أَنَّ تَمْكِينَ المَرْأَةِ العَرَبِيَّةِ شَهِدَ تَقَدُّمًا مَلْحُوظًا.', 'The activist says: international reports indicate that the empowerment of Arab women has seen notable progress.'],
    ['صَحِيحٌ أَنَّ نِسْبَةَ المَرْأَةِ فِي البَرْلَمَانَاتِ ارْتَفَعَتْ، غَيْرَ أَنَّ تَحَدِّيَاتٍ جَوْهَرِيَّةً لَا تَزَالُ قَائِمَةً. تُحْرَمُ كَثِيرٌ مِنَ النِّسَاءِ مِنْ فُرَصِ القِيَادَةِ بِسَبَبِ المُعِيقَاتِ البِنْيَوِيَّةِ.', 'It is true that the share of women in parliaments has risen; however, fundamental challenges remain. Many women are deprived of leadership opportunities because of structural barriers.'],
    ['يُصِرُّ المُدَافِعُونَ عَلَى أَنْ تَحْصُلَ المَرْأَةُ عَلَى فُرَصٍ مُتَسَاوِيَةٍ، وَيُطَالِبُ النَّاشِطُونَ بِأَنْ تُفَعَّلَ قَوَانِينُ المُسَاوَاةِ.', 'Advocates insist that women obtain equal opportunities, and activists demand that equality laws be put into effect.'],
    ['وَتَدْعُو المُنَظَّمَاتُ إِلَى أَنْ يَنْتَهِيَ التَّمْيِيزُ القَائِمُ عَلَى النَّوْعِ.', 'And organisations call for gender-based discrimination to end.'],
    ['وَلَوْ طُبِّقَتِ القَوَانِينُ بِالتَّسَاوِي، لَضَاقَتْ فَجْوَةُ الأُجُورِ.', 'Had the laws been applied equally, the pay gap would have narrowed.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'عَلَامَ يُصِرُّ المُدَافِعُونَ عَنِ المُسَاوَاةِ؟' },
      { route: 'develop', ar: 'بِمَ يُطَالِبُ النَّاشِطُونَ؟' },
      { route: 'stretch', ar: 'إِلَامَ تَدْعُو المُنَظَّمَاتُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'يُصِرُّونَ عَلَى أَنْ تَحْصُلَ المَرْأَةُ عَلَى ______ .' },
      { route: 'develop', ar: 'يُطَالِبُونَ بِأَنْ ______ .' },
      { route: 'stretch', ar: 'تَدْعُو المُنَظَّمَاتُ إِلَى أَنْ ______ وَأَنْ ______ .' },
    ],
    modelEn: ['What do the advocates insist on?', 'They insist that women obtain equal opportunities.', 'And what do the organisations call for?', 'They call for domestic violence to end and for both genders to share in decisions.'],
    notes: 'Website prompts and model. Note the question words carry the preposition too: عَلَامَ (= عَلَى + مَا) · بِمَ (= بِـ + مَا) · إِلَامَ (= إِلَى + مَا) — the answer repeats it! Pair task: a “rights conference” — each partner makes one insistence, one demand, one call. To a girl: تُصِرِّينَ · تُطَالِبِينَ · تَدْعِينَ.',
  },
  write: {
    core: { amount: '3 sentences', how: 'Website Core: one sentence for each demand trigger with the correct preposition.' },
    develop: { amount: '100 words', how: 'Website Develop: add a concession–refutation pair.' },
    stretch: { amount: '100–110 words', how: 'Website task: all three triggers, a passive and a Type 2 in a balanced argument.' },
  },
  frames: {
    core: [
      { en: 'Advocates insist that women obtain …', ar: 'يُصِرُّ المُدَافِعُونَ عَلَى أَنْ تَحْصُلَ المَرْأَةُ عَلَى ______ .' },
      { en: 'Activists demand that …', ar: 'يُطَالِبُ النَّاشِطُونَ بِأَنْ ______ .' },
      { en: 'Organisations call for … to end.', ar: 'تَدْعُو المُنَظَّمَاتُ إِلَى أَنْ يَنْتَهِيَ ______ .' },
      { en: 'Many women are deprived of …', ar: 'تُحْرَمُ كَثِيرٌ مِنَ النِّسَاءِ مِنْ ______ .' },
    ],
    develop: [
      { en: 'It is true that women have achieved …', ar: 'صَحِيحٌ أَنَّ المَرْأَةَ حَقَّقَتْ ______ ،' },
      { en: '… however, … still remains.', ar: 'غَيْرَ أَنَّ ______ لَا تَزَالُ قَائِمَةً.' },
      { en: 'Had the laws been applied equally, …', ar: 'لَوْ طُبِّقَتِ القَوَانِينُ بِالتَّسَاوِي، لَضَاقَتْ ______ .' },
      { en: '… demand that the laws be put into effect.', ar: 'يُطَالِبُ المُجْتَمَعُ المَدَنِيُّ بِأَنْ تُفَعَّلَ ______ .' },
    ],
    bank: ['حُقُوقٍ مُتَسَاوِيَةٍ', 'فُرَصٍ مُتَسَاوِيَةٍ', 'تُوَقِّعَ الحُكُومَاتُ الاتِّفَاقِيَّاتِ', 'تُسَدَّ فَجْوَةُ الأُجُورِ', 'العُنْفُ الأُسَرِيُّ', 'التَّمْيِيزُ القَائِمُ عَلَى النَّوْعِ', 'مَوَاقِعِ القِيَادَةِ', 'إِنْجَازَاتٍ فِي التَّعْلِيمِ وَالعَمَلِ', 'فَجْوَةَ الأُجُورِ', 'قَوَانِينُ المُسَاوَاةِ', 'يُشَارِكَ الجِنْسَانِ فِي صُنْعِ القَرَارِ', 'تُكْسَرَ القَوَالِبُ النَّمَطِيَّةُ'],
  },
  stretch: [
    ['شَهِدَ تَقَدُّمًا مَلْحُوظًا', 'has seen notable progress'],
    ['لَا يَزَالَانِ قَائِمَيْنِ', 'both still remain'],
    ['بِسَبَبِ المُعِيقَاتِ البِنْيَوِيَّةِ', 'because of structural barriers'],
    ['أَنْ تَنْعَمَ المَرْأَةُ بِحُقُوقِهَا كَامِلَةً', 'that women enjoy their full rights'],
    ['أَنْ يُشَارِكَ الجِنْسَانِ فِي صُنْعِ القَرَارِ', 'that both genders share in decision-making'],
  ],
  modelEn: 'International reports indicate that the empowerment of Arab women has seen notable progress in recent decades. It is true that women have achieved gains in education and political representation; however, the pay gap and domestic violence both still remain. Many women are deprived of leadership positions because of structural barriers. Advocates insist that women enjoy their full rights, civil society demands that equality laws be put into effect, and organisations call for both genders to share in decision-making. Had the laws been applied equally, the pay gap would have narrowed greatly.',
  find: ['ṣaḥīḥun anna … ghayra anna', 'yuṣirru ʿalā an tanʿama', 'bi-an tufaʿʿala · ilā an yushārika', 'law ṭubbiqat … la-ḍāqat'],
  modelNotes: 'Website writing model. Evidence: تُشِيرُ … إِلَى أَنَّ · صَحِيحٌ أَنَّ … غَيْرَ أَنَّ … لَا يَزَالَانِ قَائِمَيْنِ · تُحْرَمُ … مِنْ · يُصِرُّ … عَلَى أَنْ تَنْعَمَ · يُطَالِبُ … بِأَنْ تُفَعَّلَ · تَدْعُو … إِلَى أَنْ يُشَارِكَ · لَوْ طُبِّقَتِ … لَضَاقَتْ.',
  selfCheck: [
    { route: 'core', text: 'Each trigger has its preposition: yuṣirru ʿalā · yuṭālibu bi- · yadʿū ilā.' },
    { route: 'core', text: 'Every verb after an ends in -a.' },
    { route: 'develop', text: 'I balanced progress (ṣaḥīḥun anna) with challenges (ghayra anna).' },
    { route: 'develop', text: 'My passive verbs after an also end in -a (an tufaʿʿala).' },
    { route: 'stretch', text: 'I used all three triggers and a Type 2 with la-.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['أَبْرَزِ قَضَايَا', 'the most prominent issues'], ['التَّنْمِيَةِ', 'development'], ['يُعِيقَانِ', 'they both hinder'], ['مَوَاقِعِ القِيَادَةِ', 'leadership positions'], ['تَنْعَمَ بِـ', 'enjoy'],
    ['كَامِلَةً', 'in full'], ['يُعَاقَبَ', 'be punished'], ['الجِنْسَانِ', 'both genders'], ['ضَمِنَتْ', 'guaranteed'], ['لَارْتَفَعَ', 'would have risen'],
  ],
  prep: {
    words: [['الفَجْوَةُ الرَّقْمِيَّةُ', 'the digital divide', '—'], ['خُصُوصِيَّةُ البَيَانَاتِ', 'data privacy', '—'], ['التَّنَمُّرُ الإِلِكْتُرُونِيُّ', 'cyberbullying', '—'], ['مَعْلُومَاتٌ مُضَلِّلَةٌ', 'misinformation', '—'], ['يَمْنَعُ أَنْ', 'prohibits that', '+ verb in -a']],
    questionEn: 'How many hours a day do you spend online? Is it too much?',
    questionAr: 'أَقْضِي ______ سَاعَاتٍ يَوْمِيًّا عَلَى الإِنْتَرْنِتْ، وَأَرَى أَنَّ ______ .',
    homework: {
      core: 'Write one sentence for each trigger: yuṣirru ʿalā an · yuṭālibu bi-an · yadʿū ilā an.',
      develop: 'Add a concession–refutation pair (100 words).',
      stretch: 'Website writing task: a 100–110-word balanced gender-equality argument.',
    },
    wordsSource: 'The five words come from the website P5-L04 vocabulary (digital society).',
  },
  remember: 'Remember: insist ON (yuṣirru ʿalā an) · demand WITH (yuṭālibu bi-an) · call TO (yadʿū ilā an) — then a verb in -A, active or passive (an tufaʿʿalA) — and balance it: ṣaḥīḥun anna … ghayra anna.',
});

module.exports = { meta, slides };
