'use strict';
/* P1-L08 · Reading — Health and Wellbeing Texts — website: Pathways › Progression › P1 › P1-L08 (reading-skills lesson: spotting passives and conditionals in
 * context, fact vs opinion from the signal phrase تُظْهِرُ الدِّرَاسَةُ أَنَّ / يَرَى أَنَّ / يَبْدُو أَنَّ, weighing a source مَنْ قَالَ؟ بِأَيِّ دَلِيلٍ؟, inferring an implicit attitude R3).
 * The website reading (two claims about screens) is the main You Do task. Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking and
 * writing used as published; English added to the patterns. The website visual game is a Foundation symptoms match (headache, fever …), unrelated to reading
 * skills, so it is not used. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P1')({
  n: 8, fileTitle: 'Reading_Health_and_Wellbeing_Texts', chip: 'Reading Skills',
  title: 'Reading — Health and Wellbeing Texts', arabic: 'القِرَاءَةُ — نُصُوصُ الصِّحَّةِ وَالعَافِيَةِ',
  focus: 'Read health texts like a critic: spot passives and conditionals in context, separate fact (تُظْهِرُ الدِّرَاسَةُ أَنَّ …) from opinion (يَرَى الكَاتِبُ أَنَّ …), ask “who says so, and on what evidence?”, and infer the attitude hidden in word choice.',
  icon: 'FaMagnifyingGlass', iconSet: 'fa6',
});

const he3 = (she, they) => ({ tag: 'he · she · they', forms: [{ l: 'they', ar: they }, { l: 'she', ar: she }] });

const site = D.site('P1-L08');
const RH = [['Structure in context', 'passive · conditional'], ['Fact vs opinion', 'signal phrase → category'], ['Weighing a source', 'man qāla? · bi-ayyi dalīl?'], ['Inferring attitude (R3)', 'word choice → implicit stance']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));

const slides = D.devLesson('P1-L08', {
  support: `• READING-SKILLS LESSON: the website text “two claims about screens” is the main You Do task (slides after the speaking stage). The grammar slides are a reading toolkit, not one new rule.
• Core: sort sentences into fact / opinion with the signal phrase (website Core). Develop: judge the source of two claims. Stretch: infer an implicit attitude from word choice and justify it (R3 — IGCSE Paper 1 higher questions).
• Media literacy link: students meet health claims on social media daily. Practise “who says so, and on what evidence?” — a habit that also protects them from misinformation.
• Grammar links: passives (P1-L06) · conditionals (P1-L03) · anna reports (P1-L04, P1-L07).`,
  teach: 'Read for structure, fact vs opinion, the source and the hidden attitude.',
  wedo: 'Sort signal phrases, compare two claims, hear a critical-reading guide.',
  next: { nextCode: 'P1-L09', nextTitle: 'Writing — Healthy Lifestyles (Paper 4 Extended Writing)', nextAr: 'الكِتَابَةُ — أَسَالِيبُ الحَيَاةِ الصِّحِّيَّةِ' },
  objectives: site.objectives,
  rulesAr: 'القِرَاءَةُ الفَاحِصَةُ',
  ruleEx: [['يُعَالَجُ المَرْضَى مَجَّانًا', 'إِذَا نَامَ الطِّفْلُ مُبَكِّرًا، سَيَنْشَطُ'], ['تُظْهِرُ الدِّرَاسَةُ أَنَّ …', 'أَرَى أَنَّ …'], ['تَعْتَمِدُ المَقَالَةُ عَلَى دِرَاسَةٍ عِلْمِيَّةٍ', 'ادِّعَاءٌ بِلَا دَلِيلٍ'], ['وَصْفُ الوَضْعِ بِأَنَّهُ أَزْمَةٌ', 'لِحُسْنِ الحَظِّ']],
  doNow: {
    questions: [
      q('What does المَصْدَرُ mean?', ['the source', 'the result', 'the study'], 'Prepared at home (P1-L07).'),
      q('What does دَلِيلٌ mean?', ['evidence', 'a claim', 'an opinion'], 'Prepared at home (P1-L07).'),
      q('What does رَأْيٌ mean?', ['an opinion', 'a fact', 'a source'], 'Prepared at home (P1-L07).'),
      q('Complete: هَلْ تَعْلَمُ أَنَّ ___ يُقَوِّي المَنَاعَةَ؟', ['النَّوْمَ', 'النَّوْمُ', 'النَّوْمِ'], 'P1-L07: anna + accusative.'),
      q('In يُشَخَّصُ المَرِيضُ, the verb is …', ['passive', 'active', 'a command'], 'P1-L06: the medical passive.'),
    ],
    keyIdea: { text: 'A fact can be checked; an opinion is held. The signal phrase tells you which.', ar: '{w|تُظْهِرُ الدِّرَاسَةُ أَنَّ} … · {e|يَرَى الكَاتِبُ أَنَّ} …' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P1-L07. Questions 4–5 retrieve anna (P1-L07) and the passive (P1-L06) — today students spot them inside real texts.',
  },
  routes: {
    core: ['I can sort a sentence: fact or opinion?', 'I can name the signal phrase.'],
    develop: ['I can judge a source (who? what evidence?).', 'I can spot bias and exaggeration.'],
    stretch: ['I can infer an implicit attitude (R3).', 'I can justify it with a quoted word.'],
  },
  bridge: [
    { ar: 'حَقِيقَةٌ', urdu: 'حقیقت', tr: 'haqīqat', en: 'fact, reality' },
    { ar: 'رَأْيٌ', urdu: 'رائے', tr: 'rāy', en: 'opinion' },
    { ar: 'دَلِيلٌ', urdu: 'دلیل', tr: 'dalīl', en: 'evidence, argument' },
    { ar: 'مُبَالَغَةٌ', urdu: 'مبالغہ', tr: 'mubālagha', en: 'exaggeration' },
    { ar: 'مَوْقِفٌ', urdu: 'موقف', tr: 'mauqif', en: 'stance, position' },
  ],
  bridgeNotes: 'URDU BRIDGE: حقیقت، رائے، دلیل، مبالغہ and موقف are all shared — the key vocabulary of critical reading is already familiar. Focus the lesson on the SIGNAL PHRASES (يَرَى أَنَّ · تُظْهِرُ الدِّرَاسَةُ أَنَّ · يَبْدُو أَنَّ).',
  core: ['المَصْدَرُ', 'مَوْثُوقِيَّةٌ', 'تَحَيُّزٌ', 'دَلِيلٌ', 'ادِّعَاءٌ', 'مُبَالَغَةٌ', 'حَقِيقَةٌ', 'رَأْيٌ', 'مَوْقِفٌ', 'يَرَى أَنَّ', 'يَبْدُو أَنَّ', 'ضِمْنِيٌّ'],
  forms: {
    'المَصْدَرُ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'المَصَادِرُ' }] }, 'دَلِيلٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'أَدِلَّةٌ' }] },
    'حَقِيقَةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'حَقَائِقُ' }] }, 'رَأْيٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'آرَاءٌ' }] },
    'خَبِيرٌ': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'خُبَرَاءُ' }, { l: 'f.', ar: 'خَبِيرَةٌ' }] },
    'ضِمْنِيٌّ': { tag: 'm · f', forms: [{ l: 'f.', ar: 'ضِمْنِيَّةٌ' }] }, 'صَرِيحٌ': { tag: 'm · f', forms: [{ l: 'f.', ar: 'صَرِيحَةٌ' }] },
    'يَرَى أَنَّ': he3('تَرَى أَنَّ', 'يَرَوْنَ أَنَّ'), 'يَسْتَنْتِجُ': he3('تَسْتَنْتِجُ', 'يَسْتَنْتِجُونَ'), 'يُقَيِّمُ': he3('تُقَيِّمُ', 'يُقَيِّمُونَ'),
    'يَشُكُّ فِي': he3('تَشُكُّ', 'يَشُكُّونَ'), 'يُبَالِغُ فِي': he3('تُبَالِغُ', 'يُبَالِغُونَ'),
  },
  vocabNotes: {
    0: 'Evaluating a text: the five questions of a critical reader — the SOURCE (المَصْدَرُ), its RELIABILITY (مَوْثُوقِيَّةٌ), the EVIDENCE (دَلِيلٌ), any BIAS (تَحَيُّزٌ) and any EXAGGERATION (مُبَالَغَةٌ).',
    1: 'Fact and opinion. Each phrase is a signal: يَرَى أَنَّ = opinion · مِنَ المُؤَكَّدِ أَنَّ = stated as certain · يَبْدُو أَنَّ = hedged · يُشِيرُ إِلَى أَنَّ = reported evidence. After every anna the noun takes -a.',
    2: 'Reading verbs — the verbs of an exam answer: يَسْتَنْتِجُ (infers) · يُمَيِّزُ بَيْنَ (distinguishes) · يُقَيِّمُ (evaluates). Prepositions: يَشُكُّ فِي · يُبَالِغُ فِي · يَعْتَمِدُ عَلَى · يَتَحَيَّزُ لِـ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · structure in context (website rule 1) · Core', title: 'What is this sentence doing?', ar: 'البِنْيَةُ فِي السِّيَاقِ',
      cols: [{ label: 'Sentence from a health text', w: 6.0, size: 20 }, { label: 'Structure', w: 2.9 }, { label: 'What it tells the reader', w: 3.43 }],
      rows: [
        { core: true, cells: ['{k|يُعَالَجُ} المَرْضَى مَجَّانًا.', 'passive (P1-L06)', 'what is done — no doer named'] },
        { core: true, cells: ['{e|إِذَا نَامَ} الطِّفْلُ مُبَكِّرًا، {e|سَيَنْشَطُ}.', 'conditional (P1-L03)', 'a real consequence'] },
        { cells: ['{w|تُشِيرُ دِرَاسَةٌ إِلَى أَنَّ} الشَّاشَاتِ تُؤَخِّرُ النَّوْمَ.', 'reported evidence', 'someone else’s finding'] },
        { cells: ['{m|يَبْدُو أَنَّ} النَّتَائِجَ إِيجَابِيَّةٌ.', 'hedge', 'the writer is not certain'] },
        { cells: ['{p|أَرَى أَنَّ} السَّهَرَ مُمْتِعٌ.', 'opinion', 'a personal judgement'] },
      ],
      ltr: true,
      foot: 'Website rule: spot the passive and the idhā … sa- inside a running text, and say what each one DOES.',
      notes: `GRAMMAR PART 1 — website rule “Structure in context” (spot يُشَخَّصُ / يُعَالَجُ and إِذَا … سَـ inside a running text and say what each does).
This is the bridge from P1 grammar to IGCSE reading: a passive hides the doer; a conditional states a consequence; anna-phrases report or hedge.
Quiz item 3 asks exactly this: “In يُعَالَجُ المَرْضَى مَجَّانًا, what is the structure?” → a passive with no named doer.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 2 · fact or opinion? Signal phrases (website rule 2 + table) · Core / Develop', title: 'Let the signal phrase decide', ar: 'الحَقِيقَةُ وَالرَّأْيُ',
      cols: [{ label: 'Signal phrase', w: 3.2, size: 21 }, { label: 'She · they', w: 3.3, size: 19 }, { label: 'Reading as', w: 2.5 }, { label: 'Why', w: 3.33 }],
      rows: [
        { core: true, cells: ['{w|تُظْهِرُ الدِّرَاسَةُ أَنَّ}', 'تُظْهِرُ الدِّرَاسَاتُ أَنَّ', 'reported evidence', 'tied to a study'] },
        { cells: ['{w|أَثْبَتَتِ الإِحْصَائِيَّاتُ أَنَّ}', '—', 'evidence (proved)', 'numbers can be checked'] },
        { core: true, cells: ['{e|يَرَى الكَاتِبُ أَنَّ}', 'تَرَى · يَرَوْنَ أَنَّ', 'opinion', 'a personal stance'] },
        { cells: ['{e|أَعْتَقِدُ أَنَّ}', 'تَعْتَقِدُ · يَعْتَقِدُونَ', 'opinion', 'a belief'] },
        { cells: ['{m|يَبْدُو أَنَّ}', '—', 'hedged claim', 'tentative'] },
        { core: true, cells: ['{k|مِنَ المُؤَكَّدِ أَنَّ}', '—', 'asserted as certain', 'still check the evidence!'] },
      ],
      ltr: true,
      foot: 'Website common error: a confident tone is NOT evidence — check the source and the framing verb.',
      notes: `GRAMMAR PART 2 — website rule “Fact vs opinion” (let the framing verb tell you which you are reading), the website table and teaching point “A fact can be checked; an opinion is held”.
Website mistake 1: «أَرَى أَنَّ الرِّيَاضَةَ مُمِلَّةٌ» حَقِيقَةٌ ✗ → رَأْيٌ.
Row 6 is the trap: مِنَ المُؤَكَّدِ أَنَّ SOUNDS like a fact, but a writer can assert anything with confidence. Ask: is there a study, a number, a source?
Column 2 gives the forms for a feminine or plural subject: تَرَى الطَّبِيبَةُ أَنَّ … · يَرَى الخُبَرَاءُ أَنَّ … (verb first stays singular) · الخُبَرَاءُ يَرَوْنَ أَنَّ …`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · weighing a source (website rule 3) · Develop', title: 'Who says so — and on what evidence?', ar: 'مَنْ قَالَ؟ · بِأَيِّ دَلِيلٍ؟',
      cards: [
        { chip: 'SOURCE · CORE', color: '1D5FBF', head: 'مَنْ قَالَ؟', big: 'تَعْتَمِدُ المَقَالَةُ عَلَى دِرَاسَةٍ عِلْمِيَّةٍ.', en: 'The article relies on a scientific study.', clue: 'More reliable.' },
        { chip: 'EVIDENCE · DEVELOP', color: 'C0386B', head: 'بِأَيِّ دَلِيلٍ؟', big: 'ادِّعَاءٌ بِلَا دَلِيلٍ ضَعِيفُ المَوْثُوقِيَّةِ.', en: 'A claim without evidence is weak in reliability.', clue: 'Weaker.' },
        { chip: 'BIAS · STRETCH', color: '6B4C9A', head: 'هَلْ هُنَاكَ تَحَيُّزٌ؟', big: 'يُبَالِغُ الكَاتِبُ فِي وَصْفِ الخَطَرِ.', en: 'The writer exaggerates the danger.', clue: 'Doubt it.' },
      ],
      error: { text: 'Website mistake 2: a claim with no source is NOT reliable.', pairs: [['الادِّعَاءُ بِلَا مَصْدَرٍ ضَعِيفُ المَوْثُوقِيَّةِ', 'الادِّعَاءُ بِلَا مَصْدَرٍ مَوْثُوقٌ']] },
      notes: `GRAMMAR PART 3 — website rule “Weighing a source” (ask who makes the claim and on what evidence; note bias and exaggeration) and listening (فَالجُمْلَةُ الَّتِي تَبْدَأُ بِـ«تُظْهِرُ دِرَاسَةٌ عِلْمِيَّةٌ» أَقْوَى مِنْ جُمْلَةٍ تَبْدَأُ بِـ«يَقُولُ النَّاسُ»).
Prepositions to drill: يَعْتَمِدُ عَلَى · يُبَالِغُ فِي · يَشُكُّ فِي · يَتَحَيَّزُ لِـ.
Real-life link: ask students where they last read a health tip (TikTok, a parent’s WhatsApp group, the NHS website) and rank the sources.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · inferring attitude from word choice (website rule 4 · R3) · Stretch', title: 'Read the attitude behind the words', ar: 'المَوْقِفُ الضِّمْنِيُّ',
      cols: [{ label: 'The writer says …', w: 5.0, size: 20 }, { label: 'Attitude', w: 2.6 }, { label: 'Explicit or implicit?', w: 2.4 }, { label: 'Clue', w: 2.33 }],
      rows: [
        { core: true, cells: ['أَصْبَحَتِ السِّمْنَةُ {e|أَزْمَةً مُتَفَاقِمَةً}.', 'concern', 'implicit', 'a loaded noun'] },
        { core: true, cells: ['تُمَثِّلُ الشَّاشَاتُ {e|خَطَرًا مُتَزَايِدًا}.', 'concern', 'implicit', 'growing danger'] },
        { cells: ['الشَّاشَاتُ {p|كَارِثَةٌ تُدَمِّرُ} جِيلًا.', 'alarm, bias', 'implicit', 'exaggeration'] },
        { cells: ['{k|لِحُسْنِ الحَظِّ} انْخَفَضَتْ نِسْبَةُ التَّدْخِينِ.', 'relief', 'implicit', 'fortunately'] },
        { cells: ['{w|أَنَا قَلِقٌ} مِنْ قِلَّةِ النَّوْمِ.', 'concern', 'explicit', 'stated directly'] },
      ],
      ltr: true,
      foot: 'Website teaching point: a writer rarely says “I am worried” — the word choice carries the attitude (R3).',
      notes: `GRAMMAR PART 4 — website rule “Inferring attitude (R3)” (read tone from loaded words, not only explicit statements) and teaching point “Attitude is often implicit”.
Website mistake 3: النَّبْرَةُ القَلِقَةُ تَظْهَرُ دَائِمًا بِشَكْلٍ صَرِيحٍ ✗ → قَدْ تَظْهَرُ بِشَكْلٍ ضِمْنِيٍّ.
Exam phrasing for answers: يَكْشِفُ اخْتِيَارُ كَلِمَةِ «…» عَنْ مَوْقِفٍ قَلِقٍ (the choice of the word … reveals a worried stance).
Stretch: students quote ONE word as evidence, every time.`,
    },
  ],
  quick: [0, 1, 2, 4],
  rest: [3, 5, 6, 7],
  ido: {
    title: 'Watch me read a claim critically',
    steps: [
      { head: 'Signal', ar: '{w|تُظْهِرُ الدِّرَاسَةُ أَنَّ} …', think: 'Evidence or opinion?' },
      { head: 'Source', ar: 'مَنْ قَالَ؟ بِأَيِّ دَلِيلٍ؟', think: 'A study? A number?' },
      { head: 'Words', ar: '«{e|خَطَرٌ مُتَزَايِدٌ}»', think: 'Loaded words.' },
      { head: 'Attitude', ar: 'مَوْقِفٌ قَلِقٌ — {m|ضِمْنِيٌّ}', think: 'Not stated directly.' },
    ],
    legend: ['w', 'e', 'm'], legendLabels: { w: 'EVIDENCE SIGNAL', e: 'LOADED WORDS', m: 'IMPLICIT' },
    model: 'يَجْمَعُ النَّصُّ بَيْنَ الحَقِيقَةِ وَالرَّأْيِ. فَجُمْلَةُ «{w|تُظْهِرُ الدِّرَاسَةُ أَنَّ} النَّوْمَ يُنَظِّمُ الذَّاكِرَةَ» حَقِيقَةٌ مَدْعُومَةٌ بِمَصْدَرٍ. وَمَعَ ذٰلِكَ تَكْشِفُ كَلِمَاتُ الكَاتِبِ مَوْقِفًا قَلِقًا، إِذْ يَصِفُ الوَضْعَ بِأَنَّهُ «{e|خَطَرٌ مُتَزَايِدٌ}». هٰذَا المَوْقِفُ {m|ضِمْنِيٌّ}، لِأَنَّهُ لَمْ يُصَرِّحْ بِقَلَقِهِ.',
    modelEn: 'The text combines fact and opinion. The sentence “the study shows that sleep organises memory” is a fact supported by a source. Even so, the writer’s words reveal a worried stance, as he describes the situation as “a growing danger”. This stance is implicit, because he did not state his worry directly.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “What is the signal phrase? A study → reported evidence. Who said it, with what evidence? Now the words: ‘growing danger’ is loaded. Did the writer SAY he is worried? No — so the attitude is implicit.”',
  },
  patternEn: ['the study shows that sleep organises memory', 'the writer holds that staying up late is beneficial', 'the writer described the situation as a crisis'],
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · compare two claims (preparing the website reading)', title: 'Claim A or claim B — which do you trust?', ar: 'قَارِنْ بَيْنَ ادِّعَاءَيْنِ',
      cols: [{ label: 'Test', w: 2.6 }, { label: 'Claim A: “a recent study …”', w: 4.9, size: 19 }, { label: 'Claim B: “screens are a catastrophe …”', w: 4.83, size: 19 }],
      rows: [
        { core: true, cells: ['Source?', 'دِرَاسَةٌ حَدِيثَةٌ فِي مَجَلَّةٍ عِلْمِيَّةٍ', 'لَا مَصْدَرَ'] },
        { core: true, cells: ['Number / evidence?', 'نَحْوَ عِشْرِينَ دَقِيقَةً فِي المُتَوَسِّطِ', 'لَا دَلِيلَ'] },
        { cells: ['Loaded words?', 'لَا', '«كَارِثَةٌ» · «تُدَمِّرُ» · «تَمَامًا»'] },
        { cells: ['Attitude', 'مَوْضُوعِيٌّ', 'مُتَحَيِّزٌ وَمُبَالِغٌ'] },
        { cells: ['Verdict', 'أَقْرَبُ إِلَى الحَقِيقَةِ — نَثِقُ بِهِ', 'رَأْيٌ مُتَحَيِّزٌ — نَشُكُّ فِيهِ'] },
      ],
      ltr: true,
      foot: 'The website reading uses exactly these two claims — this table is the plan for answering its questions.',
      notes: `WE DO (3 min) — built from the website reading “two claims about screens”. Read both claims aloud first (they are quoted at the top of the reading text), then fill the table together, covering columns 2–3.
Core: rows 1–2 (source and evidence). Develop: add row 3 (loaded words — quote them). Stretch: rows 4–5 with a sentence: نَثِقُ بِالأُولَى أَكْثَرَ لِأَنَّ … وَنَشُكُّ فِي الثَّانِيَةِ لِأَنَّ …
Vocabulary: مَوْضُوعِيٌّ = objective · مُتَحَيِّزٌ = biased · نَحْوَ = about · فِي المُتَوَسِّطِ = on average.`,
    },
  ],
  sorterTitle: 'Fact, opinion — or a source check?',
  sorterNotes: 'Then turn each “source check” card into a real question about a claim students have seen online: مَنْ مَصْدَرُ هٰذَا الخَبَرِ؟',
  patch: { grammar: { ...site.grammar, rules } },
  patchNote: 'website rule headings and formulas shown in English and transliteration; the two-claims comparison table is teacher-built from the website reading; the website visual game (a Foundation symptoms match) is not used. All other website items are used as published.',
  hints: ['arā anna → fact or opinion?', 'No source → reliable?', 'Attitude: always explicit?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nListen for: two questions to ask.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5 — and note the two questions a critical reader asks.',
  gloss: [
    ['عِنْدَمَا تَقْرَأُ خَبَرًا صِحِّيًّا، لَا تُصَدِّقْ كُلَّ ادِّعَاءٍ فَوْرًا. اِسْأَلْ أَوَّلًا: مَنْ قَالَ هٰذَا؟ وَبِأَيِّ دَلِيلٍ؟', 'When you read health news, do not believe every claim straight away. Ask first: who said this, and on what evidence?'],
    ['فَالجُمْلَةُ الَّتِي تَبْدَأُ بِـ«تُظْهِرُ دِرَاسَةٌ عِلْمِيَّةٌ» أَقْوَى مِنْ جُمْلَةٍ تَبْدَأُ بِـ«يَقُولُ النَّاسُ».', 'A sentence that begins “a scientific study shows” is stronger than one that begins “people say”.'],
    ['وَمَيِّزْ بَيْنَ الحَقِيقَةِ وَالرَّأْيِ: «يُنَظِّمُ النَّوْمُ الذَّاكِرَةَ» حَقِيقَةٌ مَدْعُومَةٌ، أَمَّا «السَّهَرُ مُمْتِعٌ» فَرَأْيٌ.', 'Distinguish fact from opinion: “sleep organises memory” is a supported fact, whereas “staying up late is fun” is an opinion.'],
    ['وَانْتَبِهْ لِلْمُبَالَغَةِ وَالتَّحَيُّزِ.', 'And watch out for exaggeration and bias.'],
    ['وَأَحْيَانًا يُخْفِي الكَاتِبُ مَوْقِفَهُ فِي اخْتِيَارِ الكَلِمَاتِ، فَوَصْفُ الوَضْعِ بِأَنَّهُ «أَزْمَةٌ» يَكْشِفُ قَلَقَهُ دُونَ أَنْ يُصَرِّحَ بِهِ.', 'Sometimes the writer hides his stance in his choice of words: describing the situation as a “crisis” reveals his worry without his stating it.'],
  ],
  readingCore: {
    readMin: 5, qMin: 6,
    notes: 'YOU DO — READING (main task): the website text “two claims about screens”. Before reading: underline every signal phrase (تُشِيرُ · تُقَدِّمُ · تَعْتَمِدُ) and circle every loaded word.\nCore: questions 1, 2 and 4 (R1–R2). Develop: all 5 + quote one loaded word. Stretch: then the written analysis — fact, opinion, source and implicit attitude.',
  },
  glossary: [
    ['حَدِيثَةٌ', 'recent'], ['نُشِرَتْ', 'was published'], ['مَجَلَّةٍ عِلْمِيَّةٍ', 'a scientific journal'], ['يُؤَخِّرُ', 'delays'], ['فِي المُتَوَسِّطِ', 'on average'],
    ['كَارِثَةٌ', 'a catastrophe'], ['تُدَمِّرُ', 'destroys'], ['جِيلًا بِأَكْمَلِهِ', 'a whole generation'], ['إِنْقَاذُهُ', 'saving it'], ['القَارِئُ النَّاقِدُ', 'the critical reader'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'اِقْرَأِ ادِّعَاءً صِحِّيًّا. هَلْ هُوَ حَقِيقَةٌ أَمْ رَأْيٌ؟ كَيْفَ عَرَفْتَ؟' },
      { route: 'develop', ar: 'مَا الأَسْئِلَةُ الَّتِي تَطْرَحُهَا عَنِ المَصْدَرِ؟' },
      { route: 'stretch', ar: 'كَيْفَ تَسْتَنْتِجُ مَوْقِفَ الكَاتِبِ إِذَا لَمْ يُصَرِّحْ بِهِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'هٰذِهِ الجُمْلَةُ ______ ، لِأَنَّهَا تَبْدَأُ بِعِبَارَةِ « ______ ».' },
      { route: 'develop', ar: 'أَسْأَلُ: مَنْ ______ ؟ وَبِأَيِّ ______ ؟' },
      { route: 'stretch', ar: 'تَكْشِفُ كَلِمَةُ « ______ » عَنْ مَوْقِفٍ ______ .' },
    ],
    modelEn: ['Is this sentence a fact or an opinion: “screens are a catastrophe”?', 'A biased opinion; the word “catastrophe” is an exaggeration with no evidence.', 'And how do you judge a source?', 'I ask who the writer is and on what evidence, and I trust a scientific study with a clear source more.'],
    notes: 'Website prompts and model. Give each pair two printed claims (one from a study, one from a social-media post) to judge aloud. Check: the signal phrase is quoted as evidence. To a girl: عَرَفْتِ · تَطْرَحِينَهَا · تَسْتَنْتِجِينَ.',
  },
  write: {
    core: { amount: '6 sentences', how: 'Website Core: sort six health sentences into fact and opinion using the signal phrases.' },
    develop: { amount: '50–60 words', how: 'Website Develop: add a source judgement for two of them.' },
    stretch: { amount: '80–90 words', how: 'Website task: analyse a short health text — fact, opinion, source and the writer’s implicit attitude.' },
  },
  frames: {
    core: [
      { en: 'This sentence is a fact, because it begins with …', ar: 'هٰذِهِ الجُمْلَةُ حَقِيقَةٌ، لِأَنَّهَا تَبْدَأُ بِعِبَارَةِ « ______ ».' },
      { en: 'This sentence is an opinion, because …', ar: 'هٰذِهِ الجُمْلَةُ رَأْيٌ، لِأَنَّ ______ .' },
      { en: 'The text combines fact and opinion.', ar: 'يَجْمَعُ النَّصُّ بَيْنَ ______ وَ ______ .' },
      { en: 'The source is …', ar: 'مَصْدَرُ الادِّعَاءِ ______ .' },
    ],
    develop: [
      { en: 'The writer relies on …, so its reliability increases.', ar: 'يَعْتَمِدُ الكَاتِبُ عَلَى ______ ، فَتَزْدَادُ مَوْثُوقِيَّتُهُ.' },
      { en: 'This is a claim without evidence, so I doubt it.', ar: 'هٰذَا ادِّعَاءٌ بِلَا ______ ، فَأَشُكُّ فِيهِ.' },
      { en: 'The word “…” reveals a … stance.', ar: 'تَكْشِفُ كَلِمَةُ « ______ » عَنْ مَوْقِفٍ ______ .' },
      { en: 'This stance is implicit, because …', ar: 'هٰذَا المَوْقِفُ ضِمْنِيٌّ، لِأَنَّ ______ .' },
    ],
    bank: ['حَقِيقَةٌ مَدْعُومَةٌ', 'رَأْيٌ شَخْصِيٌّ', 'دِرَاسَةٌ عِلْمِيَّةٌ', 'دَلِيلٌ', 'مَصْدَرٌ وَاضِحٌ', 'تَحَيُّزٌ', 'مُبَالَغَةٌ', 'قَلِقٌ', 'مُتَحَيِّزٌ', 'مَوْضُوعِيٌّ', 'ضِمْنِيٌّ', 'صَرِيحٌ'],
  },
  stretch: [
    ['حَقِيقَةٌ مَدْعُومَةٌ بِمَصْدَرٍ', 'a fact supported by a source'],
    ['رَأْيٌ شَخْصِيٌّ يَبْدَأُ بِـ«أَرَى أَنَّ»', 'a personal opinion beginning “I think that”'],
    ['فَتَزْدَادُ مَوْثُوقِيَّتُهُ', 'so its reliability increases'],
    ['لَمْ يُصَرِّحْ بِقَلَقِهِ، بَلْ تَرَكَ الكَلِمَاتِ تَكْشِفُهُ', 'he did not state his worry, but let the words reveal it'],
    ['أَقْرَأُ النَّصَّ بِثِقَةٍ حَذِرَةٍ', 'I read the text with cautious trust'],
  ],
  modelEn: 'The text combines fact and opinion. The sentence “the study shows that sleep organises memory” is a fact supported by a source, whereas “staying up late is fun” is a personal opinion beginning “I think that”. When evaluating the source, I find that the writer relies on a clear scientific study, so his reliability increases. Even so, his words reveal a worried stance, as he describes the situation as “a growing danger”. This stance is implicit, because he did not state his worry, but let the words reveal it. So I read the text with cautious trust.',
  find: ['a fact with its signal phrase', 'an opinion with its signal phrase', 'a source judgement (maṣdar · mawthūqiyya)', 'an implicit attitude with a quoted word'],
  modelNotes: 'Website writing model. Evidence: «تُظْهِرُ الدِّرَاسَةُ أَنَّ …» حَقِيقَةٌ مَدْعُومَةٌ بِمَصْدَرٍ · «السَّهَرُ مُمْتِعٌ» رَأْيٌ … يَبْدَأُ بِـ«أَرَى أَنَّ» · يَعْتَمِدُ عَلَى دِرَاسَةٍ عِلْمِيَّةٍ · تَزْدَادُ مَوْثُوقِيَّتُهُ · «خَطَرٌ مُتَزَايِدٌ» · هٰذَا المَوْقِفُ ضِمْنِيٌّ.',
  selfCheck: [
    { route: 'core', text: 'I named a fact and an opinion with their signal phrases.' },
    { route: 'core', text: 'I did not call a confident sentence a fact without evidence.' },
    { route: 'develop', text: 'I judged the source (who? what evidence?).' },
    { route: 'develop', text: 'I used yaʿtamid ʿalā / yashukk fī correctly.' },
    { route: 'stretch', text: 'I inferred an implicit attitude and quoted the word.' },
  ],
  exit: [0, 1, 2],
  prep: {
    words: [['عِلَاوَةً عَلَى ذٰلِكَ', 'moreover', '—'], ['عَلَى الرَّغْمِ مِنْ', 'despite', '—'], ['نَتِيجَةً لِذٰلِكَ', 'as a result', '—'], ['خِتَامًا', 'in conclusion', '—'], ['نِسْبَةٌ', 'a proportion, rate', 'pl. نِسَبٌ']],
    questionEn: 'Plan an essay: what are the three most important habits for a healthy life?',
    questionAr: 'أَهَمُّ ثَلَاثِ عَادَاتٍ صِحِّيَّةٍ: أَوَّلًا ______ ، ثَانِيًا ______ ، وَخِتَامًا ______ .',
    homework: {
      core: 'Learn the 12 core words; sort six health sentences into fact and opinion.',
      develop: 'Judge the source of two health claims you find online (50–60 words).',
      stretch: 'Website writing task: an 80–90-word critical analysis of a short health text.',
    },
    wordsSource: 'The five words come from the website P1-L09 vocabulary (connectors and statistics for extended writing).',
  },
  remember: 'Remember: the signal phrase decides — tuẓhir al-dirāsa anna = evidence · yarā anna = opinion · yabdū anna = hedge — ask “who says so, on what evidence?” — and read the attitude hidden in the words.',
});

module.exports = { meta, slides };
