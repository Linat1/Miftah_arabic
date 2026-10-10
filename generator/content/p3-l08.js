'use strict';
/* P3-L08 · Reading — Travel and Tourism Texts — website: Pathways › Progression › P3 › P3-L08 (reading-skills lesson: classify a conditional by its
 * particle, read the writer’s attitude from its type — إِذَا = a real recommendation, لَوْ = an implicit criticism — match the result marker in a gap, and
 * name the inference with يَدُلُّ عَلَى / يَكْشِفُ عَنْ). The website reading (a sustainable-tourism opinion piece) is the main You Do task. Website
 * vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live builder and mission used as published, with waṣl alif shown without
 * a kasra and two grammar fixes: إِذَا زُرْتَ الأُرْدُنَّ، لَنْ تَنْدَمَ → فَلَنْ تَنْدَمَ (a لَنْ result needs فَـ) and لَوْ اهْتَمَّتِ → لَوِ اهْتَمَّتِ. The website
 * visual game repeats the P3-L04 tourism cards, so it is not used. Rule examples shown without their English glosses; sorter headings in transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P3')({
  n: 8, fileTitle: 'Reading_Travel_and_Tourism_Texts', chip: 'Reading Skills',
  title: 'Reading — Travel and Tourism Texts', arabic: 'القِرَاءَةُ — نُصُوصُ السَّفَرِ وَالسِّيَاحَةِ',
  focus: 'Read travel texts like an examiner: idhā signals a real recommendation, law signals an implicit criticism; match sa- to idhā and la- to law in a gap; and name your inference with yadull ʿalā and yakshif ʿan.',
  icon: 'FaBookOpenReader', iconSet: 'fa6',
});

const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const hs = (she) => ({ tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: she }] });
const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/، لَنْ تَنْدَمَ/g, '، فَلَنْ تَنْدَمَ').replace(/لَوْ اهْتَمَّتِ/g, 'لَوِ اهْتَمَّتِ'));
const site = fix(D.site('P3-L08'));
const RH = [['Classify by particle', 'idhā (real) · law (hypothetical)'], ['Read the attitude (R3)', 'Type 2 → implicit criticism'], ['Match the result marker', 'idhā … sa- · law … la-'], ['Reading verbs', 'yadull ʿalā · yakshif ʿan']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1], examples: r.examples.map((e) => e.replace(/ → .*$/, '')) }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P3-L08', {
  support: `• READING-SKILLS LESSON: the website text “a sustainable-tourism opinion” is the main You Do task. The grammar slides are a reading toolkit built on conditionals students already use (P3-L05 to P3-L07).
• Core: classify six conditionals as real (idhā) or hypothetical (law) (website Core). Develop: match the result marker for two gaps. Stretch: an R3 answer inferring the writer’s attitude from a Type 2.
• Exam link: R3 questions ask what the writer implies. A law sentence is evidence of criticism — train students to QUOTE it and name it: «لَوْ … لَـ» شَرْطٌ افْتِرَاضِيٌّ.
• Website correction: إِذَا زُرْتَ الأُرْدُنَّ، لَنْ تَنْدَمَ needs fa- before lan: فَلَنْ تَنْدَمَ. Use it to show that a real result can be sa-, fa-lan, or fa- + a command.
• Grammar links: Type 1 and Type 2 (P3-L05) · reported speech and stance verbs (P2-L08).`,
  teach: 'Particle → type → attitude, matching the result marker, R1–R4 questions, the verbs of an answer.',
  wedo: 'Annotate the four key sentences of the text, build an analysis, sort real / hypothetical / terms.',
  next: { nextCode: 'P3-L09', nextTitle: 'Writing — Travel and Tourism (Paper 4 Extended Writing)', nextAr: 'الكِتَابَةُ — السَّفَرُ وَالسِّيَاحَةُ' },
  objectives: ['Answer R1–R4 questions on a travel text.', 'Classify a conditional as real (idhā) or hypothetical (law).', 'Infer the writer’s attitude from a Type 2 conditional.', 'Write a short analysis with yadull ʿalā and yakshif ʿan.'],
  rulesAr: 'قِرَاءَةُ الشَّرْطِ لِفَهْمِ المَوْقِفِ',
  ruleEx: [['إِذَا زُرْتَ الأُرْدُنَّ، فَلَنْ تَنْدَمَ', 'لَوْ نُظِّمَتِ الزِّيَارَاتُ، لَكَانَ أَفْضَلَ'], ['لَوِ اهْتَمَّتِ الدَّوْلَةُ بِالتُّرَاثِ، لَمَا تَدَهْوَرَ'], ['إِذَا حَجَزْتَ مُبَكِّرًا، سَتُوَفِّرُ', 'لَوْ حَجَزْتَ مُبَكِّرًا، لَوَفَّرْتَ'], ['يَدُلُّ اخْتِيَارُ «لَوْ» عَلَى نَقْدٍ ضِمْنِيٍّ', 'يَكْشِفُ النَّصُّ عَنْ مَوْقِفٍ نَاقِدٍ']],
  doNow: {
    questions: [
      q('What does نَصٌّ سِيَاحِيٌّ mean?', ['a tourism text', 'a tour guide', 'a travel ticket'], 'Prepared at home (P3-L07).'),
      q('What does مُرَاجَعَةُ فُنْدُقٍ mean?', ['a hotel review', 'a hotel booking', 'a hotel manager'], 'Prepared at home (P3-L07).'),
      q('What does نَقْدٌ ضِمْنِيٌّ mean?', ['implicit criticism', 'open praise', 'a final decision'], 'Prepared at home (P3-L07).'),
      q('Complete: يُسْتَحْسَنُ أَنْ ___ الزَّائِرُ مَلَابِسَ مُحْتَشِمَةً.', ['يَرْتَدِيَ', 'يَرْتَدِي', 'ارْتَدَى'], 'P3-L07: after an, -a (yartadiya).'),
      q('Complete: يَحْظُرُ المَوْقِعُ ___ .', ['التَّصْوِيرَ', 'بِالتَّصْوِيرِ', 'عَلَى التَّصْوِيرِ'], 'P3-L07: yaḥẓur + direct object.'),
    ],
    keyIdea: { text: 'The particle tells you the writer’s attitude: idhā recommends, law criticises what did not happen.', ar: '{w|إِذَا} … {w|سَـ} = تَوْصِيَةٌ · {e|لَوْ} … {e|لَـ} = نَقْدٌ ضِمْنِيٌّ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P3-L07. Questions 4–5 retrieve the subjunctive and yaḥẓur + object (P3-L07) — today students read the grammar instead of writing it.',
  },
  routes: {
    core: ['I can classify a conditional as real or hypothetical.', 'I can find the phrase that proves my answer.'],
    develop: ['I can match sa- to idhā and la- to law.', 'I can name a text’s purpose.'],
    stretch: ['I can infer the writer’s attitude from a law sentence.', 'I can write an R3 answer with yadull ʿalā.'],
  },
  bridge: [
    { ar: 'غَرَضٌ', urdu: 'غرض', tr: 'gharaz', en: 'purpose, aim' },
    { ar: 'نَقْدٌ · انْتِقَادٌ', urdu: 'تنقید', tr: 'tanqīd', en: 'criticism' },
    { ar: 'دَلِيلٌ · يَدُلُّ', urdu: 'دلیل', tr: 'dalīl', en: 'evidence · it indicates' },
    { ar: 'إِشَارَةٌ', urdu: 'اشارہ', tr: 'ishāra', en: 'a sign, a hint' },
    { ar: 'نَتِيجَةٌ · يَسْتَنْتِجُ', urdu: 'نتیجہ', tr: 'natīja', en: 'a result · he infers' },
  ],
  bridgeNotes: 'URDU BRIDGE: غرض، تنقید، دلیل، اشارہ and نتیجہ are all shared. Note that Arabic دَلِيلٌ has two meanings in this unit: “evidence” (in a reading answer) and “a guide” (دَلِيلٌ سِيَاحِيٌّ) — both come from “to point the way”.',
  core: ['نَصٌّ سِيَاحِيٌّ', 'تَقْرِيرُ سَفَرٍ', 'مُرَاجَعَةُ فُنْدُقٍ', 'دَلِيلٌ سِيَاحِيٌّ', 'الغَرَضُ مِنَ الكِتَابَةِ', 'شَرْطٌ حَقِيقِيٌّ', 'شَرْطٌ افْتِرَاضِيٌّ', 'مَوْقِفُ الكَاتِبِ', 'نَقْدٌ ضِمْنِيٌّ', 'يَسْتَنْتِجُ', 'يَدُلُّ عَلَى', 'يَكْشِفُ عَنْ'],
  forms: {
    'نَصٌّ سِيَاحِيٌّ': sp('نُصُوصٌ سِيَاحِيَّةٌ'), 'تَقْرِيرُ سَفَرٍ': sp('تَقَارِيرُ سَفَرٍ'), 'مُرَاجَعَةُ فُنْدُقٍ': sp('مُرَاجَعَاتُ فَنَادِقَ'), 'دَلِيلٌ سِيَاحِيٌّ': sp('أَدِلَّةٌ سِيَاحِيَّةٌ'),
    'مَنْشُورٌ سِيَاحِيٌّ': sp('مَنْشُورَاتٌ سِيَاحِيَّةٌ'), 'مُؤَلِّفُ النَّصِّ': { tag: 'm · f', forms: [{ l: 'f.', ar: 'مُؤَلِّفَةُ النَّصِّ' }] }, 'تَوْصِيَةٌ': sp('تَوْصِيَاتٌ'),
    'يَسْتَنْتِجُ': ihs('أَسْتَنْتِجُ', 'تَسْتَنْتِجُ'), 'يُمَيِّزُ بَيْنَ': ihs('أُمَيِّزُ بَيْنَ', 'تُمَيِّزُ بَيْنَ'), 'يَقْتَرِحُ': ihs('أَقْتَرِحُ', 'تَقْتَرِحُ'),
    'يَدُلُّ عَلَى': hs('تَدُلُّ عَلَى'), 'يَكْشِفُ عَنْ': hs('تَكْشِفُ عَنْ'),
  },
  vocabNotes: {
    0: 'Text types: an examiner’s first question is “what kind of text is this, and why was it written?” — a brochure (مَنْشُورٌ) persuades, a travel report (تَقْرِيرُ سَفَرٍ) informs and narrates, a hotel review (مُرَاجَعَةٌ) judges.',
    1: 'Conditional-type reading: إِذَا = شَرْطٌ حَقِيقِيٌّ (real) → result with سَـ (or فَـ + لَنْ / a command); لَوْ = شَرْطٌ افْتِرَاضِيٌّ (counterfactual) → result with لَـ / لَمَا. A law sentence often hides a نَقْدٌ ضِمْنِيٌّ.',
    2: 'Reading verbs — the verbs of an exam answer, each with its partner: يَدُلُّ عَلَى · يَكْشِفُ عَنْ · يُمَيِّزُ بَيْنَ … وَ … · يَسْتَنْتِجُ + object · يَقْتَرِحُ + object.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · particle → type → attitude (website rules 1–2 + table) · Core', title: 'What does the conditional tell you?', ar: 'الأَدَاةُ · النَّوْعُ · المَوْقِفُ',
      cols: [{ label: 'Sentence from a travel text', w: 6.4, size: 18 }, { label: 'Type', w: 2.1 }, { label: 'The writer’s attitude', w: 3.83 }],
      rows: [
        { core: true, cells: ['{w|إِذَا} زُرْتَ الأُرْدُنَّ، {w|فَلَنْ} تَنْدَمَ.', 'real (idhā)', 'recommends the visit'] },
        { core: true, cells: ['{w|إِذَا} احْتَرَمَ السُّيَّاحُ القَوَاعِدَ، {w|سَتَبْقَى} المَوَاقِعُ.', 'real (idhā)', 'believes it is possible'] },
        { core: true, cells: ['{e|لَوْ} نُظِّمَتِ الزِّيَارَاتُ مُبَكِّرًا، {e|لَكَانَتِ} المَوَاقِعُ أَفْضَلَ.', 'hypothetical (law)', 'criticises: visits were NOT regulated'] },
        { cells: ['{e|لَوِ} اهْتَمَّتِ الدَّوْلَةُ بِالتُّرَاثِ، {e|لَمَا} تَدَهْوَرَ.', 'hypothetical (law)', 'current care is inadequate'] },
      ],
      ltr: true,
      foot: 'law hides a criticism: it tells the reader what did NOT happen. Website common error: reading law as a recommendation.',
      notes: `GRAMMAR PART 1 — website rules “Classify by particle” and “Read the attitude (R3)”, the website table and teaching point 1.
Ask two questions of every conditional: (1) idhā or law? (2) So is the writer recommending — or regretting / criticising?
Website correction (row 1): when the result begins with لَنْ, it needs فَـ — إِذَا زُرْتَ الأُرْدُنَّ، فَلَنْ تَنْدَمَ. (Also with a command: إِذَا زُرْتَ الأُرْدُنَّ، فَزُرِ البَتْرَاءَ.)
Row 4: لَوْ takes a kasra before a waṣl alif — لَوِ اهْتَمَّتِ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · match the result marker in a gap (website rule 3 + teaching point 2) · Core / Develop', title: 'Read the particle, then fill the gap', ar: 'طَابِقِ العَلَامَةَ مَعَ الأَدَاةِ',
      cards: [
        { chip: 'IDHĀ → SA- · CORE', color: '1D5FBF', head: 'إِذَا … سَـ', big: 'إِذَا حَجَزْتَ مُبَكِّرًا، سَتُوَفِّرُ المَالَ.', en: 'If you book early, you will save money.', clue: 'Real → future.' },
        { chip: 'LAW → LA- · CORE', color: 'C0386B', head: 'لَوْ … لَـ', big: 'لَوْ حَجَزْتَ مُبَكِّرًا، لَوَفَّرْتَ المَالَ.', en: 'Had you booked early, you would have saved money.', clue: 'Unreal → past.' },
        { chip: 'IDHĀ → FA- · DEVELOP', color: 'C77700', head: 'إِذَا … فَلَنْ / فَـ', big: 'إِذَا زُرْتَ الأُرْدُنَّ، فَلَنْ تَنْدَمَ.', en: 'If you visit Jordan, you will not regret it.', clue: 'fa- before lan.' },
      ],
      error: { text: 'Website mistake 2: a law conditional takes a la- result.', pairs: [['لَوْ حَجَزْتَ مُبَكِّرًا، لَوَفَّرْتَ المَالَ', 'لَوْ حَجَزْتَ مُبَكِّرًا، سَتُوَفِّرُ المَالَ']] },
      notes: `GRAMMAR PART 2 — website rule “Match the result marker”, teaching point 2 and mistakes 1–2.
Gap-fill strategy: look LEFT to the particle first. إِذَا → choose the سَـ (future) option; لَوْ → choose the لَـ + past option.
Website mistake 1: إِذَا حَجَزْتَ مُبَكِّرًا، لَوَفَّرْتَ ✗ → سَتُوَفِّرُ ✓.
Card 3 (teacher addition): a real result can also be فَلَنْ + subjunctive or فَـ + a command — never لَـ.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · the four question types on the website reading (R1–R4) · Develop', title: 'Know what the question wants', ar: 'أَنْوَاعُ الأَسْئِلَةِ',
      cols: [{ label: 'Question', w: 1.6 }, { label: 'It asks for …', w: 2.6 }, { label: 'Evidence in the website text', w: 5.6, size: 18 }, { label: 'Answer frame', w: 2.53, size: 16 }],
      rows: [
        { core: true, cells: ['R1', 'the main view', 'السِّيَاحَةُ {p|نِعْمَةٌ وَنِقْمَةٌ} فِي آنٍ وَاحِدٍ.', 'يَرَى الكَاتِبُ أَنَّ …'] },
        { core: true, cells: ['R2', 'a detail / quote', '{w|إِذَا} احْتَرَمَ السُّيَّاحُ القَوَاعِدَ، {w|سَتَبْقَى} المَوَاقِعُ.', 'يَقُولُ الكَاتِبُ: «…»'] },
        { cells: ['R3', 'an inference', '{e|لَوِ} اهْتَمَّتِ الحُكُومَاتُ … {e|لَمَا} وَصَلَتْ …', 'يَدُلُّ … عَلَى …'] },
        { cells: ['R4', 'the purpose', '{m|الغَرَضُ مِنَ النَّصِّ} إِقْنَاعُ القَارِئِ.', 'الغَرَضُ مِنَ النَّصِّ …'] },
      ],
      ltr: true,
      foot: 'R1–R2: find it. R3–R4: work it out — and quote the words that prove it.',
      notes: `GRAMMAR PART 3 — the website reading labels its five questions R1–R4; this table shows what each type needs, using the website text.
Purposes to know: إِخْبَارٌ (informing) · إِقْنَاعٌ (persuading) · سَرْدٌ (narrating) — from the P3-L09 vocabulary.
Exam habit: for R3 always name the TYPE first (شَرْطٌ افْتِرَاضِيٌّ), then the INFERENCE (نَقْدٌ ضِمْنِيٌّ), then the REASON (لِأَنَّ الشَّرْطَ لَمْ يَتَحَقَّقْ).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the verbs of an answer (website rule 4 + vocabulary) · Stretch', title: 'Say what the text shows', ar: 'أَفْعَالُ التَّحْلِيلِ',
      cols: [{ label: 'Verb + partner', w: 2.9, size: 20 }, { label: 'Example (website texts)', w: 6.3, size: 19 }, { label: 'Use it to …', w: 3.13 }],
      rows: [
        { core: true, cells: ['{k|يَدُلُّ عَلَى}', 'يَدُلُّ اخْتِيَارُ «لَوْ» {k|عَلَى} نَقْدٍ ضِمْنِيٍّ.', 'state an inference'] },
        { core: true, cells: ['{k|يَكْشِفُ عَنْ}', 'يَكْشِفُ النَّصُّ {k|عَنْ} مَوْقِفٍ نَاقِدٍ.', 'reveal an attitude'] },
        { cells: ['{m|يُمَيِّزُ بَيْنَ}', 'أُمَيِّزُ {m|بَيْنَ} التَّوْصِيَةِ {m|وَ}النَّقْدِ.', 'contrast two things'] },
        { cells: ['{w|يَسْتَنْتِجُ}', 'أَسْتَنْتِجُ {w|أَنَّ} الكَاتِبَ يَرَى السِّيَاسَةَ غَيْرَ كَافِيَةٍ.', 'draw a conclusion'] },
        { cells: ['{w|يُوصِي بِـ}', 'يُوصِي الكَاتِبُ {w|بِسِيَاحَةٍ} مُسْتَدَامَةٍ.', 'name a recommendation'] },
      ],
      ltr: true,
      foot: 'Website mistake 3: yadull bi-naqdin ✗ → yadull ʿalā naqdin ✓.',
      notes: `GRAMMAR PART 4 — website rule “Reading verbs”, the vocabulary notes (يَدُلُّ عَلَى · يَكْشِفُ عَنْ · يَسْتَنْتِجُ + object · يَقْتَرِحُ + object) and mistake 3.
Row 4: يَسْتَنْتِجُ can take a noun or أَنَّ + sentence. Row 5 (يُوصِي بِـ) is from the website reading.
Stretch: write one sentence with each verb about the website reading.`,
    },
  ],
  quick: [0, 1, 3, 4],
  rest: [2, 5, 6, 7],
  ido: {
    title: 'Watch me analyse a travel text',
    steps: [
      { head: 'Name the real one', ar: '«{w|إِذَا} … {w|سَـ}» شَرْطٌ حَقِيقِيٌّ', think: 'Recommends.' },
      { head: 'Name the unreal one', ar: '«{e|لَوِ} … {e|لَمَا}» شَرْطٌ افْتِرَاضِيٌّ', think: 'Did not happen.' },
      { head: 'Infer', ar: '{k|يَدُلُّ} اخْتِيَارُ «لَوْ» {k|عَلَى} نَقْدٍ', think: 'Why?' },
      { head: 'Purpose', ar: '{m|الغَرَضُ مِنَ النَّصِّ} …', think: 'R4.' },
    ],
    legend: ['w', 'e', 'k', 'm'], legendLabels: { w: 'REAL · IDHĀ', e: 'HYPOTHETICAL · LAW', k: 'INFERENCE', m: 'PURPOSE' },
    model: '{k|يَكْشِفُ} النَّصُّ {k|عَنْ} مَوْقِفِ كَاتِبِهِ مِنْ خِلَالِ نَوْعِ الشَّرْطِ. فَجُمْلَةُ «{w|إِذَا} احْتَرَمَ السُّيَّاحُ القَوَاعِدَ، {w|سَتَبْقَى} المَوَاقِعُ» شَرْطٌ حَقِيقِيٌّ يَنْصَحُ بِهِ الكَاتِبُ. أَمَّا جُمْلَةُ «{e|لَوِ} اهْتَمَّتِ الحُكُومَاتُ مُبَكِّرًا، {e|لَمَا} تَدَهْوَرَتِ المَوَاقِعُ» فَشَرْطٌ افْتِرَاضِيٌّ. {k|وَيَدُلُّ} اخْتِيَارُ «لَوْ» {k|عَلَى} نَقْدٍ ضِمْنِيٍّ، لِأَنَّ الشَّرْطَ لَمْ يَتَحَقَّقْ. {m|وَالغَرَضُ مِنَ النَّصِّ} إِقْنَاعُ القَارِئِ بِأَنَّ التَّنْظِيمَ ضَرُورِيٌّ.',
    modelEn: 'The text reveals its writer’s attitude through the type of conditional. The sentence “if tourists respect the rules, the sites will remain” is a real conditional that the writer recommends. The sentence “had governments cared earlier, the sites would not have deteriorated”, however, is a hypothetical conditional. The choice of “law” indicates implicit criticism, because the condition was not met. The purpose of the text is to persuade the reader that regulation is necessary.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Find the conditionals and box the particle. idhā … sa- → real: the writer believes it and recommends it. law … lamā → unreal: governments did NOT care early — that is a hidden criticism. I name it with yadullu ʿalā. Last, R4: why was this written? To persuade.”',
  },
  patternEn: ['if you visit Jordan, you will not regret it', 'had the state cared for heritage, it would not have deteriorated', 'the choice of “law” indicates a critical attitude'],
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · annotate the key sentences (preparing the website reading)', title: 'Four sentences, four jobs', ar: 'حَلِّلِ الجُمَلَ الأَرْبَعَ',
      cols: [{ label: 'Sentence from the reading', w: 6.6, size: 17 }, { label: 'Type / job', w: 2.3 }, { label: 'What it reveals', w: 3.43 }],
      rows: [
        { core: true, cells: ['السِّيَاحَةُ نِعْمَةٌ وَنِقْمَةٌ فِي آنٍ وَاحِدٍ.', 'main view (R1)', 'a balanced opinion'] },
        { core: true, cells: ['{w|إِذَا} احْتَرَمَ السُّيَّاحُ القَوَاعِدَ، {w|سَتَبْقَى} المَوَاقِعُ لِلْأَجْيَالِ القَادِمَةِ.', 'real (idhā)', 'a genuine recommendation'] },
        { cells: ['{e|لَوِ} اهْتَمَّتِ الحُكُومَاتُ بِالتَّنْظِيمِ مُنْذُ البِدَايَةِ، {e|لَمَا} وَصَلَتْ كَثِيرٌ مِنَ المَوَاقِعِ إِلَى هٰذَا التَّدَهْوُرِ.', 'hypothetical (law)', 'implicit criticism of governments'] },
        { cells: ['يُوصِي بِسِيَاحَةٍ مُسْتَدَامَةٍ تُوَازِنُ بَيْنَ الفَائِدَةِ وَالحِمَايَةِ.', 'recommendation', 'purpose: to persuade (R4)'] },
      ],
      ltr: true,
      foot: 'The website reading uses exactly these sentences — this table is the plan for answering its R1–R4 questions.',
      notes: `WE DO (3 min) — built from the website reading “a sustainable-tourism opinion”. Read the text aloud first, then fill columns 2–3 together, covering them.
Core: rows 1–2. Develop: row 3 — ask “Did governments care early? No → so what is the writer saying about them?” Stretch: row 4 and a sentence: يَدُلُّ اخْتِيَارُ «لَوْ» عَلَى أَنَّ الكَاتِبَ … .
Vocabulary: نِعْمَةٌ وَنِقْمَةٌ = a blessing and a curse · فِي آنٍ وَاحِدٍ = at the same time.`,
    },
    {
      type: 'formsTable', stage: 'wedo', min: 2, flex: true, eyebrow: 'We do · build a critical reading (website live builder)', title: 'Type + attitude + purpose', ar: 'ابْنِ تَحْلِيلَكَ',
      cols: [{ label: '1 · Classify the type', w: 4.0, size: 16 }, { label: '2 · Read the attitude', w: 4.0, size: 16 }, { label: '3 · Purpose / reading habit', w: 4.33, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Say it, then write three different versions.',
      notes: `WE DO (flex) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Use it as oral rehearsal for the website writing task.`,
    },
  ],
  sorterTitle: 'Real, hypothetical — or a reading-skill term?',
  sorterCats: ['real (idhā … sa-)', 'hypothetical (law … la-)', 'reading-skill terms'],
  sorterNotes: 'Then say what each conditional reveals: إِذَا … → يَنْصَحُ الكَاتِبُ بِـ … · لَوْ … → يَنْتَقِدُ الكَاتِبُ … .',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns, final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; grammar fixes إِذَا زُرْتَ الأُرْدُنَّ، لَنْ تَنْدَمَ → فَلَنْ تَنْدَمَ and لَوْ اهْتَمَّتِ → لَوِ اهْتَمَّتِ; rule headings and formulas in English and transliteration; rule examples shown without their English glosses; sorter headings in transliteration; the annotation table is teacher-built from the website reading; the website visual game repeats the P3-L04 cards and is not used. All other website items are used as published.',
  hints: ['idhā … la-?', 'law … sa-?', 'yadull + bi-?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: idhā · law · naqd.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write down the two conditionals the speaker quotes.',
  gloss: [
    ['عِنْدَمَا تَقْرَأُ نَصًّا سِيَاحِيًّا، لَا تَنْظُرْ إِلَى المَعْلُومَةِ فَقَطْ، بَلْ إِلَى نَوْعِ الشَّرْطِ.', 'When you read a tourism text, do not look only at the information, but at the type of conditional.'],
    ['فَحِينَ يَكْتُبُ الكَاتِبُ «إِذَا زُرْتَ الأُرْدُنَّ، فَلَنْ تَنْدَمَ»، فَهُوَ يَرَى الزِّيَارَةَ إِمْكَانًا حَقِيقِيًّا وَيَنْصَحُ بِهَا.', 'When the writer writes “if you visit Jordan, you will not regret it”, he sees the visit as a real possibility and recommends it.'],
    ['أَمَّا حِينَ يَكْتُبُ «لَوْ نُظِّمَتِ الزِّيَارَاتُ مُبَكِّرًا، لَكَانَتِ المَوَاقِعُ أَفْضَلَ»، فَهُوَ يَصِفُ أَمْرًا لَمْ يَحْدُثْ، وَيُلَمِّحُ إِلَى نَقْدٍ لِلسِّيَاسَةِ الحَالِيَّةِ.', 'But when he writes “had visits been regulated early, the sites would be better”, he describes something that did not happen, and hints at criticism of current policy.'],
    ['هٰذَا التَّمْيِيزُ بَيْنَ إِذَا الحَقِيقِيَّةِ وَلَوِ الافْتِرَاضِيَّةِ مِنْ أَهَمِّ مَهَارَاتِ القِرَاءَةِ المُتَقَدِّمَةِ.', 'This distinction between real idhā and hypothetical law is one of the most important advanced reading skills.'],
    ['وَفِي أَسْئِلَةِ مِلْءِ الفَرَاغِ، طَابِقِ العَلَامَةَ مَعَ الأَدَاةِ: سَـ مَعَ إِذَا، وَلَـ مَعَ لَوْ.', 'And in gap-fill questions, match the marker with the particle: sa- with idhā, and la- with law.'],
  ],
  readingCore: {
    readMin: 5, qMin: 6,
    notes: 'YOU DO — READING (main task): the website text “a sustainable-tourism opinion”. Before reading: box every إِذَا and every لَوْ, and underline the result marker (سَـ / لَـ / لَمَا).\nCore: questions 1, 2 and 3 (R1–R2). Develop: all 5 + quote the words that prove each answer. Stretch: then write an R3 answer in Arabic: «يَدُلُّ اخْتِيَارُ لَوْ عَلَى …، لِأَنَّ …» (website Stretch).',
  },
  glossary: [
    ['نِعْمَةٌ وَنِقْمَةٌ', 'a blessing and a curse'], ['فِي آنٍ وَاحِدٍ', 'at the same time'], ['الهَشَّةِ', 'fragile'], ['سَتَبْقَى', 'will remain'], ['لِلْأَجْيَالِ القَادِمَةِ', 'for future generations'],
    ['بِالتَّنْظِيمِ', 'with regulation'], ['التَّدَهْوُرِ', 'deterioration'], ['السِّيَاسَاتِ الحَالِيَّةِ', 'current policies'], ['إِقْنَاعُ', 'persuading'], ['سُلُوكِهِ', 'his behaviour'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا نَوْعُ الشَّرْطِ فِي هٰذِهِ الجُمْلَةِ؟ حَقِيقِيٌّ أَمِ افْتِرَاضِيٌّ؟' },
      { route: 'develop', ar: 'مَاذَا يَكْشِفُ اخْتِيَارُ «لَوْ» عَنْ مَوْقِفِ الكَاتِبِ؟' },
      { route: 'stretch', ar: 'مَا الغَرَضُ مِنَ النَّصِّ؟' },
    ],
    stems: [
      { route: 'core', ar: 'هٰذَا شَرْطٌ ______ ، لِأَنَّ الكَاتِبَ يَسْتَعْمِلُ « ______ ».' },
      { route: 'develop', ar: 'يَكْشِفُ اخْتِيَارُ «لَوْ» عَنْ ______ .' },
      { route: 'stretch', ar: 'الغَرَضُ مِنَ النَّصِّ ______ .' },
    ],
    modelEn: ['What type of conditional is “had visits been regulated, it would have been better”?', 'A hypothetical, Type 2 conditional: “law … la-” describes something that did not happen.', 'And what does that reveal?', 'It reveals implicit criticism of current policy, because the condition was not met.'],
    notes: 'Website prompts and model. Pairs take one conditional from the reading each and analyse it aloud with the three questions. To a girl: تَسْتَعْمِلِينَ.',
  },
  write: {
    core: { amount: '6 sentences', how: 'Website Core: classify six conditionals as real (idhā) or hypothetical (law).' },
    develop: { amount: '40–50 words', how: 'Website Develop: for two gaps, choose the result marker (sa- / la-) and explain why.' },
    stretch: { amount: '80–90 words', how: 'Website task: analyse a short travel text — one real and one hypothetical conditional, the implicit criticism, and the purpose.' },
  },
  frames: {
    core: [
      { en: 'This is a real conditional, because the writer uses “idhā”.', ar: 'هٰذَا شَرْطٌ حَقِيقِيٌّ، لِأَنَّ الكَاتِبَ يَسْتَعْمِلُ «إِذَا».' },
      { en: 'This is a hypothetical conditional, because …', ar: 'هٰذَا شَرْطٌ افْتِرَاضِيٌّ، لِأَنَّ ______ .' },
      { en: 'The writer recommends …', ar: 'يَنْصَحُ الكَاتِبُ بِـ ______ .' },
      { en: 'The writer’s main view is that …', ar: 'يَرَى الكَاتِبُ أَنَّ ______ .' },
    ],
    develop: [
      { en: 'The choice of “law” indicates …', ar: 'يَدُلُّ اخْتِيَارُ «لَوْ» عَلَى ______ .' },
      { en: '… because the condition was not met.', ar: '______ ، لِأَنَّ الشَّرْطَ لَمْ يَتَحَقَّقْ.' },
      { en: 'The text reveals a … attitude.', ar: 'يَكْشِفُ النَّصُّ عَنْ مَوْقِفٍ ______ .' },
      { en: 'The purpose of the text is …', ar: 'الغَرَضُ مِنَ النَّصِّ ______ .' },
    ],
    bank: ['شَرْطٌ حَقِيقِيٌّ', 'شَرْطٌ افْتِرَاضِيٌّ', 'تَوْصِيَةٌ', 'نَقْدٌ ضِمْنِيٌّ', 'مَوْقِفٌ نَاقِدٌ', 'مَوْقِفٌ إِيجَابِيٌّ', 'إِقْنَاعُ القَارِئِ', 'إِخْبَارُ القَارِئِ', 'السِّيَاسَةُ الحَالِيَّةُ', 'غَيْرُ كَافِيَةٍ', 'لَمْ يَتَحَقَّقْ', 'إِمْكَانٌ حَقِيقِيٌّ'],
  },
  stretch: [
    ['مِنْ خِلَالِ نَوْعِ الشَّرْطِ', 'through the type of conditional'],
    ['شَرْطٌ حَقِيقِيٌّ يَنْصَحُ بِهِ الكَاتِبُ وَيَرَاهُ مُمْكِنًا', 'a real conditional the writer recommends and sees as possible'],
    ['فَالكَاتِبُ يَرَى السِّيَاسَةَ الحَالِيَّةَ غَيْرَ كَافِيَةٍ', 'so the writer sees current policy as inadequate'],
    ['إِقْنَاعُ القَارِئِ بِأَنَّ التَّنْظِيمَ ضَرُورِيٌّ', 'persuading the reader that regulation is necessary'],
    ['أَقْرَأُ النَّصَّ بِوَعْيٍ بِنَوْعِ الشَّرْطِ وَمَوْقِفِ الكَاتِبِ', 'I read the text aware of the conditional type and the writer’s attitude'],
  ],
  modelEn: 'The text reveals its writer’s attitude through the type of conditional. The sentence “if tourists respect the rules, the sites will remain” is a real conditional that the writer recommends and sees as possible. The sentence “had governments cared early, the sites would not have deteriorated”, however, is a hypothetical, Type 2 conditional. The choice of “law” indicates implicit criticism, because the condition was not met, so the writer sees current policy as inadequate. The purpose of the text is to persuade the reader that regulation is necessary. So I read the text aware of the conditional type and the writer’s attitude.',
  find: ['a real conditional named (idhā … sa-)', 'a hypothetical conditional named (law … lamā)', 'yadull ʿalā naqdin ḍimniyyin', 'the purpose (al-gharaḍ … iqnāʿ)'],
  modelNotes: 'Website writing model. Evidence: يَكْشِفُ النَّصُّ عَنْ مَوْقِفِ كَاتِبِهِ · «إِذَا احْتَرَمَ … سَتَبْقَى» شَرْطٌ حَقِيقِيٌّ · «لَوِ اهْتَمَّتِ … لَمَا تَدَهْوَرَتِ» فَشَرْطٌ افْتِرَاضِيٌّ · يَدُلُّ اخْتِيَارُ «لَوْ» عَلَى نَقْدٍ ضِمْنِيٍّ · لِأَنَّ الشَّرْطَ لَمْ يَتَحَقَّقْ · وَالغَرَضُ مِنَ النَّصِّ إِقْنَاعُ القَارِئِ.',
  selfCheck: [
    { route: 'core', text: 'I named each conditional: idhā = real, law = hypothetical.' },
    { route: 'core', text: 'I quoted the exact words that prove my answer.' },
    { route: 'develop', text: 'I matched sa- with idhā and la- with law.' },
    { route: 'develop', text: 'I stated the purpose of the text.' },
    { route: 'stretch', text: 'I explained the implicit criticism with yadull ʿalā … li-anna …' },
  ],
  exit: [0, 1, 2],
  prep: {
    words: [['الصَّوْتُ السِّيَاحِيُّ', 'the travel-writing voice', '—'], ['التَّفْصِيلُ الحِسِّيُّ', 'sensory detail', 'pl. التَّفَاصِيلُ الحِسِّيَّةُ'], ['ذِكْرَى لَا تُنْسَى', 'an unforgettable memory', 'pl. ذِكْرَيَاتٌ'], ['خَلْفِيَّةٌ سَرْدِيَّةٌ', 'a narrative background', '—'], ['بِنَاءً عَلَى ذٰلِكَ', 'based on that', '—']],
    questionEn: 'Plan a travel article: where will you write about, and what is your one unforgettable detail?',
    questionAr: 'سَأَكْتُبُ عَنْ ______ ، وَذِكْرَى لَا تُنْسَى هِيَ ______ .',
    homework: {
      core: 'Classify six conditionals from travel texts as real (idhā) or hypothetical (law).',
      develop: 'For two of them, explain the result marker and what it shows (40–50 words).',
      stretch: 'Website writing task: an 80–90-word analysis of a short travel text.',
    },
    wordsSource: 'The five words come from the website P3-L09 vocabulary (travel writing).',
  },
  remember: 'Remember: box the particle first — idhā (+ sa- / fa-lan) = a real recommendation, law (+ la- / lamā) = something that did not happen, often an implicit criticism — and name it: yadullu ʿalā …',
});

module.exports = { meta, slides };
