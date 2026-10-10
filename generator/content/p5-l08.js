'use strict';
/* P5-L08 · Reading — Social Issues Texts — website: Pathways › Progression › P5 › P5-L08 (reading-skills lesson: locate the thesis (R1) and evidence (R2),
 * identify the concession–refutation architecture and its purpose (R3), judge balance vs one-sidedness, and choose the indicative after صَحِيحٌ أَنَّ vs
 * the subjunctive after a trigger in a gap (R4)). The website reading (a social-mobility argument) is the main You Do task. Website vocabulary, rules,
 * quiz, sorter, mistakes, listening, reading, speaking, writing, live builder and mission used as published, with waṣl alif shown without a kasra and
 * لِكَيْ always written with its sukūn. The website visual game (topic pictures) is beginner-level and not used. Sorter headings in transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P5')({
  n: 8, fileTitle: 'Reading_Social_Issues_Texts', chip: 'Reading Skills',
  title: 'Reading — Social Issues Texts', arabic: 'القِرَاءَةُ — نُصُوصُ القَضَايَا الاجْتِمَاعِيَّةِ',
  focus: 'Read an argument like an examiner: find the thesis (R1) and evidence (R2), spot ṣaḥīḥun anna … ghayra anna and explain what it does (R3), judge balanced vs one-sided, and in a gap choose -u after a concession and -a after a trigger (R4).',
  icon: 'FaBookOpenReader', iconSet: 'fa6',
});

const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ').replace(/ Which form\?/g, ''));
const site = fix(D.site('P5-L08'));
const RO = [['Upward mobility measures a society’s justice', 'Mobility is unimportant', 'Only wealth matters'], null, ['ṣaḥīḥun anna: concedes, then refutes', 'yushāru ilā anna: a thesis', 'law wujjiha: a conditional'], ['Balanced: concedes, then refutes', 'One-sided: only praises the state', 'One-sided: only attacks the state']];
site.reading.questions = site.reading.questions.map((x, i) => (RO[i] ? { ...x, options: RO[i] } : x));
const RH = [['Spot the concession', 'ṣaḥīḥun anna · lā yumkinu inkāru anna'], ['Spot the refutation', 'ghayra anna · maʿa dhālika'], ['Concession → indicative', 'ṣaḥīḥun anna + verb in -u'], ['Trigger → subjunctive', 'yataṭallabu / yanbaghī / li-kay + verb in -a']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P5-L08', {
  support: `• READING-SKILLS LESSON: the website text “a social-mobility argument” is the main You Do task. The grammar slides are a reading toolkit built on the concession–refutation and subjunctive work of P5-L01 to L07.
• Core: identify one concession and one refutation in the text (website Core). Develop: explain what each structure does for the argument. Stretch: a full R3 answer judging whether the argument is balanced, with two pieces of evidence.
• Exam link (Paper 2): R3 asks about the FUNCTION of a structure, not just its presence — «مَا الغَرَضُ مِنْ "صَحِيحٌ أَنَّ" هُنَا؟». Q4-style gap-fills hinge on the context: a conceded fact (-u) or a triggered aim (-a).
• Faith link (optional): «يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا» (al-Ḥujurāt 49:6) — check the source before you accept a claim: مَوْثُوقِيَّةُ المَصْدَرِ.
• Grammar links: ṣaḥīḥun anna … ghayra anna (P5-L01, L07) · anna + -u vs an + -a (P5-L07) · reading the subjunctive for meaning (P4-L08).`,
  teach: 'Markers and their jobs, the -u / -a gap-fill by context, R1–R4 on the website text, balanced vs one-sided.',
  wedo: 'Annotate the key sentences of the text, build an analysis, sort concession / refutation / trigger.',
  next: { nextCode: 'P5-L09', nextTitle: 'Writing — Social Issues and Opinions (Paper 4 Extended Writing)', nextAr: 'الكِتَابَةُ — القَضَايَا الاجْتِمَاعِيَّةُ وَالآرَاءُ' },
  objectives: ['Answer R1–R4 comprehension across social-issues texts.', 'Identify concession (ṣaḥīḥun anna) and refutation (ghayra anna) and their argumentative function.', 'Distinguish concession-indicative from subjunctive in a gap-fill.', 'Analyse whether an argument is balanced or one-sided.'],
  rulesAr: 'قِرَاءَةُ بِنْيَةِ الحُجَّةِ',
  ruleEx: [['صَحِيحٌ أَنَّ التِّقْنِيَّةَ تُوَفِّرُ فُرَصًا'], ['غَيْرَ أَنَّ الفَجْوَةَ الرَّقْمِيَّةَ تَحُولُ دُونَ ذٰلِكَ'], ['صَحِيحٌ أَنَّ الحُكُومَةَ تَتَّخِذُ إِجْرَاءَاتٍ'], ['مِنَ الضَّرُورِيِّ أَنْ تَتَّخِذَ الحُكُومَةُ إِجْرَاءَاتٍ']],
  doNow: {
    questions: [
      q('What does نَصٌّ جَدَلِيٌّ mean?', ['an argumentative text', 'a news report', 'a poem'], 'Prepared at home (P5-L07).'),
      q('What does التَّحَيُّزُ فِي الطَّرْحِ mean?', ['bias in presentation', 'a balanced view', 'a long introduction'], 'Prepared at home (P5-L07).'),
      q('What does مَوْثُوقِيَّةُ المَصْدَرِ mean?', ['source reliability', 'a famous author', 'a new source'], 'Prepared at home (P5-L07).'),
      q('Complete: صَحِيحٌ أَنَّ التَّطْوِيرَ ___ مَوَارِدَ ضَخْمَةً.', ['يَسْتَلْزِمُ', 'يَسْتَلْزِمَ', 'اسْتَلْزِمْ'], 'P5-L07: after anna (a fact) → -u.'),
      q('Complete: بِالرَّغْمِ مِنَ التَّكْلِفَةِ، ___ الاسْتِثْمَارَ لَا بَدِيلَ عَنْهُ.', ['فَإِنَّ', 'غَيْرَ أَنَّ', 'لِكَيْ'], 'P5-L07: bi-l-raghmi min … fa-inna.'),
    ],
    keyIdea: { text: 'Don’t just read WHAT the writer says — read HOW the argument is built.', ar: '{w|صَحِيحٌ أَنَّ} = يُسَلِّمُ · {e|غَيْرَ أَنَّ} = يَرُدُّ · {k|أَنْ + فَتْحَةٌ} = يَطْلُبُ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P5-L07. Questions 4–5 retrieve anna + -u and the bi-l-raghmi min correction (P5-L07) — today students read these structures instead of writing them.',
  },
  routes: {
    core: ['I can find the thesis (R1) and the evidence (R2).', 'I can spot one concession and one refutation.'],
    develop: ['I can explain what a concession does (R3).', 'I can choose -u or -a in a gap (R4).'],
    stretch: ['I can judge if an argument is balanced or one-sided.', 'I can write an 80–90-word R3 analysis.'],
  },
  bridge: [
    { ar: 'جَدَلٌ · جَدَلِيٌّ', urdu: 'جدل', tr: 'jadal', en: 'debate · argumentative' },
    { ar: 'مَنْطِقٌ · مَنْطِقِيٌّ', urdu: 'منطق', tr: 'mantiq', en: 'logic · logical' },
    { ar: 'بَلَاغَةٌ', urdu: 'بلاغت', tr: 'balāghat', en: 'eloquence, rhetoric' },
    { ar: 'مَصْدَرٌ', urdu: 'مصدر', tr: 'masdar', en: 'a source (also: a verbal noun)' },
    { ar: 'قَرِينَةٌ', urdu: 'قرینہ', tr: 'qarīna', en: 'Arabic: a contextual clue · Urdu: neatness, order' },
  ],
  bridgeNotes: 'URDU BRIDGE: جدل, منطق, بلاغت and مصدر are shared — students who studied Arabic grammar know مصدر as the verbal noun; here it also means a SOURCE (مَوْثُوقِيَّةُ المَصْدَرِ = source reliability). Careful: Urdu قرینہ = neatness / proper order, but Arabic القَرِينَةُ = the CLUE in the context that tells you which form to choose.',
  core: ['نَصٌّ جَدَلِيٌّ', 'حُجَّةٌ مَنْطِقِيَّةٌ', 'التَّسْلِيمُ بِالحُجَّةِ المُضَادَّةِ', 'التَّحَيُّزُ فِي الطَّرْحِ', 'مَوْثُوقِيَّةُ المَصْدَرِ', 'الاسْتِشْهَادُ بِالأَدِلَّةِ', 'الفِعْلُ المُثْبَتُ', 'الفِعْلُ المَنْصُوبُ', 'المَوْقِفُ المُتَوَازِنُ', 'الطَّرْحُ الأُحَادِيُّ', 'القَرِينَةُ', 'يَسْتَدْعِي'],
  forms: {
    'نَصٌّ جَدَلِيٌّ': sp('نُصُوصٌ جَدَلِيَّةٌ'), 'حُجَّةٌ مَنْطِقِيَّةٌ': sp('حُجَجٌ مَنْطِقِيَّةٌ'), 'القَرِينَةُ': sp('القَرَائِنُ'),
    'يَسْتَدْعِي': { tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: 'تَسْتَدْعِي' }] },
    'المَوْقِفُ المُتَوَازِنُ': sp('المَوَاقِفُ المُتَوَازِنَةُ'),
  },
  vocabNotes: {
    0: 'Reading for argument — the words of an R3 answer: التَّسْلِيمُ بِالحُجَّةِ المُضَادَّةِ (conceding the counter-argument), التَّحَيُّزُ (bias), مَوْثُوقِيَّةُ المَصْدَرِ (source reliability). يُسَلِّمُ بِـ = concedes, يَرُدُّ عَلَى = responds to.',
    1: 'Structure markers to SPOT: concession (صَحِيحٌ أَنَّ · لَا يُمْكِنُ إِنْكَارُ أَنَّ · بِالرَّغْمِ مِنْ) → refutation (غَيْرَ أَنَّ · مَعَ ذٰلِكَ) → triggers (يَتَطَلَّبُ أَنْ · يَنْبَغِي أَنْ · لِكَيْ) that take a verb in -a.',
    2: 'Gap-fill words: الفِعْلُ المُثْبَتُ (the indicative, -u) in سِيَاقُ التَّسْلِيمِ; الفِعْلُ المَنْصُوبُ (the subjunctive, -a) in سِيَاقُ النَّصْبِ. القَرِينَةُ = the clue. يَسْتَدْعِي = calls for — a word to deduce from context (website mission).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · spot the marker, name its job (website rules 1–2, teaching point 1 and table) · Core', title: 'Every marker has a job', ar: 'العَلَامَةُ وَوَظِيفَتُهَا',
      cols: [{ label: 'Marker', w: 2.9, size: 18 }, { label: 'Job', w: 1.8 }, { label: 'What the writer is doing', w: 2.6 }, { label: 'Example (website reading)', w: 5.03, size: 16 }],
      rows: [
        { core: true, cells: ['{p|يُشَارُ إِلَى أَنَّ}', 'thesis', 'states the claim', 'يُشَارُ إِلَى أَنَّ التَّنَقُّلَ الاجْتِمَاعِيَّ … مِقْيَاسٌ لِلْعَدَالَةِ'] },
        { cells: ['{m|أَكَّدَ البَاحِثُونَ أَنَّ}', 'evidence', 'cites an authority', 'أَكَّدَ البَاحِثُونَ أَنَّ التَّعْلِيمَ الجَيِّدَ يُفْضِي إِلَى فُرَصٍ'] },
        { core: true, cells: ['{w|صَحِيحٌ أَنَّ}', 'concession', 'admits the other side', 'صَحِيحٌ أَنَّ الدَّوْلَةَ تَتَّخِذُ إِجْرَاءَاتٍ لِدَعْمِ الفُقَرَاءِ'] },
        { core: true, cells: ['{e|غَيْرَ أَنَّ}', 'refutation', 'answers it', 'غَيْرَ أَنَّ المُعِيقَاتِ البِنْيَوِيَّةَ لَا تَزَالُ تَحُولُ دُونَ …'] },
        { cells: ['{k|يَتَطَلَّبُ … أَنْ}', 'trigger', 'demands an action', 'يَتَطَلَّبُ تَحْقِيقُ العَدَالَةِ أَنْ تُعِيدَ الدَّوْلَةُ تَوْزِيعَ الفُرَصِ'] },
      ],
      ltr: true,
      foot: 'Website teaching point: spotting the concession–refutation pair tells you HOW the argument is built, not just what it claims.',
      notes: `GRAMMAR PART 1 — website rules “Spot the concession” and “Spot the refutation”, teaching point 1, the website table and the website reading.
Reading routine before any question: underline the five markers in the text in five colours (thesis, evidence, concession, refutation, trigger). The text’s skeleton appears — exactly the P5-L07 essay architecture.
Vocabulary: التَّنَقُّلُ الاجْتِمَاعِيُّ الصَّاعِدُ = upward social mobility · المُعِيقَاتُ البِنْيَوِيَّةُ = structural barriers · تَحُولُ دُونَ = prevent.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · the gap-fill: read the clue (website rules 3–4, teaching point 2, mistakes 1–2) · Develop', title: 'A fact (-u) or an aim (-a)?', ar: 'سِيَاقُ التَّسْلِيمِ أَمْ سِيَاقُ النَّصْبِ؟',
      cols: [{ label: 'The clue (القَرِينَةُ)', w: 3.0, size: 18 }, { label: 'Context', w: 2.1 }, { label: 'Verb', w: 1.8, size: 19 }, { label: 'Example (website texts)', w: 5.43, size: 16 }],
      rows: [
        { core: true, cells: ['{w|صَحِيحٌ أَنَّ}', 'a real situation', '{w|تَتَّخِذُ}', 'صَحِيحٌ أَنَّ الحُكُومَةَ {w|تَتَّخِذُ} إِجْرَاءَاتٍ'] },
        { cells: ['{w|لَا يُمْكِنُ إِنْكَارُ أَنَّ}', 'a real situation', '{w|يَتَحَقَّقُ}', 'لَا يُمْكِنُ إِنْكَارُ أَنَّ التَّقَدُّمَ {w|يَتَحَقَّقُ}'] },
        { core: true, cells: ['{e|مِنَ الضَّرُورِيِّ أَنْ}', 'a needed action', '{e|تَتَّخِذَ}', 'مِنَ الضَّرُورِيِّ أَنْ {e|تَتَّخِذَ} الحُكُومَةُ إِجْرَاءَاتٍ'] },
        { cells: ['{e|يَتَطَلَّبُ … أَنْ}', 'a needed action', '{e|نُصْلِحَ}', 'يَتَطَلَّبُ الأَمْرُ أَنْ {e|نُصْلِحَ} النِّظَامَ'] },
        { cells: ['{e|لِكَيْ}', 'a purpose', '{e|تَتَحَقَّقَ}', 'لِكَيْ {e|تَتَحَقَّقَ} العَدَالَةُ، يَجِبُ الإِصْلَاحُ'] },
      ],
      ltr: true,
      foot: 'Website mistakes 1–2: ṣaḥīḥun anna … tattakhidha ✗ → tattakhidhu ✓ · an tattakhidhu ✗ → tattakhidha ✓. Find the clue FIRST.',
      notes: `GRAMMAR PART 2 — website rules “Concession → indicative” and “Trigger → subjunctive”, teaching point 2 (“Identify which context the gap sits in, then choose the form”), mistakes 1–2 and quiz 4–6.
Gap-fill routine: (1) cover the options; (2) look LEFT of the gap for the clue; (3) anna (shadda) + noun → the verb describes a FACT → -u; an / li-kay → an AIM or a demand → -a; (4) only now look at the options.
The same verb, two contexts: تَتَّخِذُ (the state IS taking measures) vs أَنْ تَتَّخِذَ (the state SHOULD take measures). The meaning tells you the mood.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · the four question types on the website reading (R1–R4) · Develop', title: 'Know what the question wants', ar: 'أَنْوَاعُ الأَسْئِلَةِ',
      cols: [{ label: 'Question', w: 1.5 }, { label: 'It asks for …', w: 2.3 }, { label: 'Evidence in the website text', w: 5.9, size: 16 }, { label: 'Answer frame', w: 2.63, size: 16 }],
      rows: [
        { core: true, cells: ['R1', 'the thesis', '{p|يُشَارُ إِلَى أَنَّ} التَّنَقُّلَ … يُعَدُّ مِقْيَاسًا لِعَدَالَةِ أَيِّ مُجْتَمَعٍ', 'يَرَى الكَاتِبُ أَنَّ …'] },
        { core: true, cells: ['R2', 'the evidence', '{m|أَكَّدَ البَاحِثُونَ أَنَّ} التَّعْلِيمَ الجَيِّدَ يُفْضِي إِلَى فُرَصٍ أَوْسَعَ', 'يَسْتَشْهِدُ بِـ …'] },
        { cells: ['R3', 'a structure’s purpose', '{w|صَحِيحٌ أَنَّ} الدَّوْلَةَ تَتَّخِذُ إِجْرَاءَاتٍ … {e|غَيْرَ أَنَّ} …', 'يُسَلِّمُ … ثُمَّ يَرُدُّ …'] },
        { cells: ['R3', 'balance', 'concession + refutation + a Type 2 (لَوْ وُجِّهَ … لَتَحَسَّنَتْ)', 'الحُجَّةُ مُتَوَازِنَةٌ لِأَنَّ …'] },
        { cells: ['R4', 'the verb form', '… أَنْ {k|تُعِيدَ} الدَّوْلَةُ تَوْزِيعَ الفُرَصِ لِكَيْ {k|يَصْعَدَ} الجَمِيعُ', 'trigger → -a'] },
      ],
      ltr: true,
      foot: 'R1–R2: find it. R3: explain what it DOES. R4: read the clue, then choose the form.',
      notes: `GRAMMAR PART 3 — the website reading labels its six questions R1–R4; this table shows what each type needs, using the website text.
Website quiz 7: an R3 question asks about the FUNCTION (“What argumentative purpose does ṣaḥīḥun anna serve here?”), not the presence (“Find the word ṣaḥīḥun”).
Row 4: the reading also has لَا يُمْكِنُ إِنْكَارُ أَنَّ … مَعَ ذٰلِكَ — a SECOND concession–refutation pair; two pairs make the balance even clearer.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · balanced or one-sided? (website quiz 1 / 8, mistake 3, mission) · Stretch', title: 'Judge the argument', ar: 'مُتَوَازِنَةٌ أَمْ أُحَادِيَّةٌ؟',
      cards: [
        { chip: 'BALANCED · CORE', color: '1E6B52', head: 'تَسْلِيمٌ + رَدٌّ', big: 'صَحِيحٌ أَنَّ الدَّوْلَةَ تَتَّخِذُ إِجْرَاءَاتٍ، غَيْرَ أَنَّ المُعِيقَاتِ قَائِمَةٌ.', en: 'Concedes the state’s action, then answers it.', clue: 'two sides → balanced' },
        { chip: 'ONE-SIDED · DEVELOP', color: 'C0386B', head: 'رَأْيٌ بِلَا تَسْلِيمٍ', big: 'الدَّوْلَةُ فَشِلَتْ تَمَامًا، وَلَا شَيْءَ تَغَيَّرَ.', en: 'The state failed completely; nothing changed.', clue: 'one side → one-sided' },
        { chip: 'R3 ANSWER · STRETCH', color: '1D5FBF', head: 'يَدُلُّ عَلَى …', big: '«صَحِيحٌ أَنَّ» يَدُلُّ عَلَى أَنَّ الكَاتِبَ يُسَلِّمُ بِالرَّأْيِ الآخَرِ.', en: '“ṣaḥīḥun anna” shows the writer concedes the other view.', clue: 'name it + its job' },
      ],
      error: { text: 'Website mistake 3: a concession ENGAGES with the other view — it does not ignore it.', pairs: [['يُسَلِّمُ بِالرَّأْيِ الآخَرِ', 'يَتَجَاهَلُ الرَّأْيَ الآخَرَ']] },
      notes: `GRAMMAR PART 4 — website quiz 1 and 8, mistake 3, the mission (“a balanced argument concedes the other side, then refutes it”) and the website writing task.
Card 2 is a teacher-built example of a one-sided claim (absolute words: تَمَامًا · لَا شَيْءَ). Bias clues: absolute words, no concession, no cited source (التَّحَيُّزُ فِي الطَّرْحِ).
Stretch: an R3 judgement needs (1) a verdict, (2) the quoted structure, (3) its job — «الحُجَّةُ مُتَوَازِنَةٌ، لِأَنَّ الكَاتِبَ يُسَلِّمُ بِـ"صَحِيحٌ أَنَّ" ثُمَّ يَرُدُّ بِـ"غَيْرَ أَنَّ"».`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me analyse the structure of an argument',
    steps: [
      { head: 'Verdict', ar: 'الحُجَّةُ {k|مُتَوَازِنَةٌ}', think: 'Judge first.' },
      { head: 'Concession', ar: '{w|يُسَلِّمُ} بِـ«صَحِيحٌ أَنَّ …»', think: 'Quote it.' },
      { head: 'Refutation', ar: 'ثُمَّ {e|يَرُدُّ} بِـ«غَيْرَ أَنَّ …»', think: 'Quote it.' },
      { head: 'Close', ar: '{m|وَبِنَاءً عَلَى مَا سَبَقَ}، أَعُدُّ …', think: 'Conclude.' },
    ],
    legend: ['k', 'w', 'e', 'm'], legendLabels: { k: 'VERDICT', w: 'CONCESSION', e: 'REFUTATION', m: 'CONCLUSION' },
    model: 'أَرَى أَنَّ حُجَّةَ الكَاتِبِ {k|مُتَوَازِنَةٌ}، وَلَيْسَتْ أُحَادِيَّةً. فَهُوَ {w|يُسَلِّمُ} أَوَّلًا بِرَأْيٍ حَقِيقِيٍّ حِينَ يَقُولُ «صَحِيحٌ أَنَّ الدَّوْلَةَ تَتَّخِذُ إِجْرَاءَاتٍ لِدَعْمِ الفُقَرَاءِ». ثُمَّ {e|يَرُدُّ} عَلَى هٰذَا التَّسْلِيمِ بِـ«غَيْرَ أَنَّ المُعِيقَاتِ البِنْيَوِيَّةَ لَا تَزَالُ تَحُولُ دُونَ تَكَافُؤِ الفُرَصِ». {m|وَبِنَاءً عَلَى مَا سَبَقَ}، أَعُدُّ النَّصَّ نَمُوذَجًا لِلْحُجَّةِ المُتَوَازِنَةِ.',
    modelEn: 'I think the writer’s argument is balanced, not one-sided. He first concedes a real point when he says “it is true that the state takes measures to support the poor”. Then he answers this concession with “however, structural barriers still prevent equal opportunities”. Based on the above, I consider the text a model of the balanced argument.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Verdict first: balanced or one-sided? Then prove it: quote the concession — the writer yusallimu bi- … Quote the refutation — yaruddu bi- ghayra anna … Then close with a conclusion connector. Verdict · quote · job · close.”',
  },
  patternEn: ['it is true that technology offers enormous opportunities', 'however, the digital divide prevents them being distributed equally', 'it is essential that the government take urgent measures'],
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · annotate the key sentences (preparing the website reading)', title: 'Five sentences, five jobs', ar: 'حَلِّلِ الجُمَلَ',
      cols: [{ label: 'Sentence from the reading', w: 6.6, size: 16 }, { label: 'Marker · job', w: 2.6 }, { label: 'Verb form', w: 3.13 }],
      rows: [
        { core: true, cells: ['{p|يُشَارُ إِلَى أَنَّ} التَّنَقُّلَ الاجْتِمَاعِيَّ الصَّاعِدَ يُعَدُّ مِقْيَاسًا لِعَدَالَةِ أَيِّ مُجْتَمَعٍ.', 'thesis (R1)', 'yuʿaddu · -u'] },
        { core: true, cells: ['{w|صَحِيحٌ أَنَّ} الدَّوْلَةَ تَتَّخِذُ إِجْرَاءَاتٍ لِدَعْمِ الفُقَرَاءِ،', 'concession (R3)', 'tattakhidhu · -u (fact)'] },
        { cells: ['{e|غَيْرَ أَنَّ} المُعِيقَاتِ البِنْيَوِيَّةَ لَا تَزَالُ تَحُولُ دُونَ تَكَافُؤِ الفُرَصِ.', 'refutation (R3)', 'taḥūlu · -u'] },
        { cells: ['{m|وَلَوْ} وُجِّهَ الدَّعْمُ إِلَى التَّعْلِيمِ المُبَكِّرِ، {m|لَتَحَسَّنَتْ} فُرَصُ الصُّعُودِ.', 'Type 2 (analysis)', 'past → la- + past'] },
        { cells: ['يَتَطَلَّبُ تَحْقِيقُ العَدَالَةِ {k|أَنْ تُعِيدَ} الدَّوْلَةُ تَوْزِيعَ الفُرَصِ.', 'trigger (R4)', 'tuʿīda · -a (aim)'] },
      ],
      ltr: true,
      foot: 'The website reading uses exactly these sentences — this table is the plan for answering its R1–R4 questions.',
      notes: `WE DO (3 min) — built from the website reading “a social-mobility argument”. Read the text aloud first, then fill columns 2–3 together, covering them.
Core: rows 1–3 (which job?). Develop: column 3 — why -u in row 2 but -a in row 5? Stretch: row 4 — how does the Type 2 add to the argument (an implied criticism: support was NOT directed early)?
Vocabulary: مِقْيَاسًا = a measure · تَكَافُؤِ الفُرَصِ = equal opportunities · الصُّعُودِ = rising, mobility.`,
    },
    {
      type: 'formsTable', stage: 'wedo', min: 2, flex: true, eyebrow: 'We do · build an analysis line (website live builder)', title: 'Concession + refutation + verdict', ar: 'ابْنِ تَحْلِيلَكَ',
      cols: [{ label: '1 · The concession', w: 4.1, size: 15 }, { label: '2 · The refutation', w: 4.1, size: 15 }, { label: '3 · The verdict', w: 4.13, size: 15 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Say it, then write three different versions.',
      notes: `WE DO (flex) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Use it as oral rehearsal for the website writing task. Stretch: which column-2 quotation is NOT in the reading text? (row 3 — وَعَلَى النَّقِيضِ مِنْ ذٰلِكَ is from the sorter.)`,
    },
  ],
  sorterTitle: 'Concession, refutation — or trigger?',
  sorterCats: ['concession → verb in -u', 'refutation', 'trigger → verb in -a'],
  sorterNotes: 'Then say the verb form in each card aloud: concession cards → -u (a real situation) · trigger cards → -a (a needed action).',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: { ...site.writing, prompt: 'Write an 80–90-word R3 analysis of the reading text. State whether the argument is balanced or one-sided, and support your judgement with at least two structures from the text (a concession, a refutation or a trigger).', checklist: ['A clear judgement: balanced or one-sided.', 'A named concession structure (ṣaḥīḥun anna / lā yumkinu inkāru anna).', 'A named refutation (ghayra anna / maʿa dhālika).', 'An explanation of what each structure does for the argument.'] }, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('Concession → indicative تُوَفِّرُ.', 'Concession → indicative (tuwaffiru).').replace('Refutation with غَيْرَ أَنَّ.', 'Refutation with ghayra anna.').replace('Trigger → subjunctive تَتَّخِذَ.', 'Trigger → subjunctive (tattakhidha).') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; لِكَيْ always written with its sukūn; long reading answer options shortened and “Which form?” dropped from gap-fill prompts; rule headings and formulas, pattern tips, writing prompt and checklist in transliteration; sorter headings in transliteration; the marker, gap-fill, R1–R4 and balance tables and the annotation table are teacher-built from the website texts; the website visual game is beginner-level and not used. All other website items are used as published.',
  hints: ['ṣaḥīḥun anna … tattakhidha?', 'an tattakhidhu?', 'ṣaḥīḥun anna = ignores?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: yusallimu · ghayra anna · muthbat (-u) · manṣūb (-a).',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write down the coach’s two-step gap-fill rule.',
  gloss: [
    ['تَقُولُ المُدَرِّبَةُ: قِرَاءَةُ النُّصُوصِ الجَدَلِيَّةِ تَتَطَلَّبُ أَنْ تُمَيِّزَ لَا مَا يَقُولُهُ الكَاتِبُ فَحَسْبُ، بَلْ كَيْفَ يَبْنِي حُجَّتَهُ.', 'The coach says: reading argumentative texts requires you to recognise not only what the writer says, but how he builds his argument.'],
    ['الكَاتِبُ الَّذِي يَسْتَعْمِلُ «صَحِيحٌ أَنَّ» يُسَلِّمُ بِالرَّأْيِ الآخَرِ قَبْلَ الرَّدِّ عَلَيْهِ، وَهٰذَا يَدُلُّ عَلَى نُضْجٍ فِكْرِيٍّ.', 'A writer who uses “ṣaḥīḥun anna” concedes the other view before answering it, and this shows intellectual maturity.'],
    ['ابْحَثْ عَنِ التَّسْلِيمِ ثُمَّ عَنِ الرَّدِّ بِـ«غَيْرَ أَنَّ».', 'Look for the concession, then for the response with “ghayra anna”.'],
    ['وَفِي مِلْءِ الفَرَاغِ، إِذَا جَاءَ الفِعْلُ بَعْدَ «صَحِيحٌ أَنَّ» فَهُوَ مُثْبَتٌ لِأَنَّهُ يَصِفُ وَاقِعًا، أَمَّا بَعْدَ «يَتَطَلَّبُ» أَوْ «لِكَيْ» فَهُوَ مَنْصُوبٌ.', 'In a gap-fill, if the verb comes after “ṣaḥīḥun anna” it is indicative, because it describes reality; after “yataṭallabu” or “li-kay” it is subjunctive.'],
    ['حَدِّدِ القَرِينَةَ أَوَّلًا، ثُمَّ اخْتَرِ الصِّيغَةَ.', 'Identify the clue first, then choose the form.'],
  ],
  readingCore: {
    readMin: 5, qMin: 6,
    notes: 'YOU DO — READING (main task): the website text “a social-mobility argument”. Before reading: underline the thesis, box ṣaḥīḥun anna and lā yumkinu inkāru anna, circle ghayra anna and maʿa dhālika, and mark every verb after an with -a.\nCore: questions 1, 2 and 3 (R1–R3). Develop: all 6 + quote the words that prove each answer. Stretch: then write the R3 judgement in Arabic: «الحُجَّةُ مُتَوَازِنَةٌ، لِأَنَّ الكَاتِبَ يُسَلِّمُ بِـ… ثُمَّ يَرُدُّ بِـ…» (website Stretch).',
  },
  glossary: [
    ['التَّنَقُّلَ الاجْتِمَاعِيَّ الصَّاعِدَ', 'upward social mobility'], ['مِقْيَاسًا', 'a measure'], ['يُفْضِي إِلَى', 'leads to'], ['إِجْرَاءَاتٍ', 'measures'], ['المُعِيقَاتِ البِنْيَوِيَّةَ', 'structural barriers'],
    ['تَحُولُ دُونَ', 'prevent'], ['تَكَافُؤِ الفُرَصِ', 'equal opportunities'], ['عَمِيقًا', 'deep'], ['الصُّعُودِ', 'rising, mobility'], ['نُضْجٍ فِكْرِيٍّ', 'intellectual maturity'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا الأُطْرُوحَةُ وَالدَّلِيلُ فِي النَّصِّ؟' },
      { route: 'develop', ar: 'أَيْنَ التَّسْلِيمُ وَأَيْنَ الرَّدُّ؟' },
      { route: 'stretch', ar: 'هَلِ الحُجَّةُ مُتَوَازِنَةٌ أَمْ أُحَادِيَّةٌ؟ وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'يَرَى الكَاتِبُ أَنَّ ______ ، وَيَسْتَشْهِدُ بِالبَاحِثِينَ.' },
      { route: 'develop', ar: 'التَّسْلِيمُ: «صَحِيحٌ أَنَّ ______ »، وَالرَّدُّ: «غَيْرَ أَنَّ ______ ».' },
      { route: 'stretch', ar: 'الحُجَّةُ ______ ، لِأَنَّهَا تُسَلِّمُ ثُمَّ تَرُدُّ عَلَى ______ .' },
    ],
    modelEn: ['Where is the concession?', '“It is true that the state takes measures” is a concession to a real point.', 'And is the argument balanced?', 'Yes, because it concedes and then responds with “however” on the structural barriers.'],
    notes: 'Website prompts and model. Pairs take the three prompts in turn about the reading text — A asks, B answers with a quotation, then swap. To a girl: بِرَأْيِكِ.',
  },
  write: {
    core: { amount: '2 sentences', how: 'Website Core: identify one concession and one refutation in the text.' },
    develop: { amount: '40–50 words', how: 'Website Develop: explain what each structure does for the argument.' },
    stretch: { amount: '80–90 words', how: 'Website task: a full R3 answer judging whether the argument is balanced, with two pieces of evidence.' },
  },
  frames: {
    core: [
      { en: 'The writer’s main view is that …', ar: 'يَرَى الكَاتِبُ أَنَّ ______ .' },
      { en: 'The concession is: “It is true that …”', ar: 'التَّسْلِيمُ: «صَحِيحٌ أَنَّ ______ ».' },
      { en: 'The refutation is: “However, …”', ar: 'الرَّدُّ: «غَيْرَ أَنَّ ______ ».' },
      { en: 'The verb “…” is indicative, because it describes reality.', ar: 'الفِعْلُ « ______ » مُثْبَتٌ لِأَنَّهُ يَصِفُ وَاقِعًا.' },
    ],
    develop: [
      { en: 'I think the argument is balanced, not one-sided.', ar: 'أَرَى أَنَّ الحُجَّةَ مُتَوَازِنَةٌ، وَلَيْسَتْ أُحَادِيَّةً.' },
      { en: 'He first concedes … when he says …', ar: 'فَهُوَ يُسَلِّمُ أَوَّلًا بِـ ______ حِينَ يَقُولُ « ______ ».' },
      { en: 'Then he answers this concession with …', ar: 'ثُمَّ يَرُدُّ عَلَى هٰذَا التَّسْلِيمِ بِـ« ______ ».' },
      { en: 'This shows …', ar: 'وَهٰذَا يَدُلُّ عَلَى ______ .' },
    ],
    bank: ['التَّنَقُّلَ الاجْتِمَاعِيَّ مِقْيَاسٌ لِلْعَدَالَةِ', 'الدَّوْلَةَ تَتَّخِذُ إِجْرَاءَاتٍ', 'المُعِيقَاتِ البِنْيَوِيَّةَ', 'بَعْضَ البَرَامِجِ نَجَحَتْ', 'يَبْقَى التَّفَاوُتُ عَمِيقًا', 'رَأْيٍ حَقِيقِيٍّ', 'نُضْجٍ فِكْرِيٍّ', 'مُتَوَازِنَةٌ', 'أُحَادِيَّةٌ', 'تَتَّخِذُ', 'تُعِيدَ', 'يَصْعَدَ'],
  },
  stretch: [
    ['وَلَيْسَتْ أُحَادِيَّةً', 'and not one-sided'],
    ['يُسَلِّمُ أَوَّلًا بِرَأْيٍ حَقِيقِيٍّ', 'he first concedes a real point'],
    ['يَدُلُّ عَلَى نُضْجٍ فِكْرِيٍّ', 'shows intellectual maturity'],
    ['فَيُوَازِنُ بَيْنَ الإِنْجَازِ وَالنَّقْصِ', 'so he balances achievement and shortfall'],
    ['نَمُوذَجًا لِلْحُجَّةِ المُتَوَازِنَةِ', 'a model of the balanced argument'],
  ],
  modelEn: 'I think the writer’s argument is balanced, not one-sided. He first concedes a real point when he says “it is true that the state takes measures to support the poor”, and this concession shows intellectual maturity. Then he answers it with “however, structural barriers still prevent equal opportunities”, balancing achievement and shortfall. He also cites researchers and closes with a conclusion connector and a subjunctive verb. Based on the above, I consider the text a model of the balanced argument.',
  find: ['verdict: mutawāzina', 'concession: ṣaḥīḥun anna', 'refutation: ghayra anna', 'its job: nuḍj fikrī'],
  modelNotes: 'Website writing model. Evidence: أَرَى أَنَّ حُجَّةَ الكَاتِبِ مُتَوَازِنَةٌ · يُسَلِّمُ أَوَّلًا … حِينَ يَقُولُ «صَحِيحٌ أَنَّ …» · يَدُلُّ عَلَى نُضْجٍ فِكْرِيٍّ · ثُمَّ يَرُدُّ … بِـ«غَيْرَ أَنَّ …» · فَيُوَازِنُ بَيْنَ … · يَسْتَشْهِدُ · وَبِنَاءً عَلَى مَا سَبَقَ، أَعُدُّ النَّصَّ ….',
  selfCheck: [
    { route: 'core', text: 'I found the thesis and the evidence and quoted them.' },
    { route: 'core', text: 'I named one concession and one refutation.' },
    { route: 'develop', text: 'I explained what each structure does, not just where it is.' },
    { route: 'develop', text: 'In a gap: after ṣaḥīḥun anna → -u; after an / li-kay → -a.' },
    { route: 'stretch', text: 'I gave a verdict (balanced / one-sided) with two quotations.' },
  ],
  exit: [0, 1, 2],
  prep: {
    words: [['الأُطْرُوحَةُ', 'the thesis', 'pl. الأُطْرُوحَاتُ'], ['بِنْيَةُ التَّسْلِيمِ', 'a concession structure', '—'], ['رَابِطُ الخِتَامِ', 'a conclusion connector', 'pl. رَوَابِطُ'], ['يُثْرِي', 'enriches', 'f. تُثْرِي'], ['يُهَدِّدُ الاسْتِقْرَارَ', 'threatens stability', 'f. تُهَدِّدُ']],
    questionEn: 'Which P5 social issue would you choose for an exam essay — and why?',
    questionAr: 'أَخْتَارُ قَضِيَّةَ ______ ، لِأَنَّ ______ .',
    homework: {
      core: 'Find one concession and one refutation in an Arabic opinion text and copy them.',
      develop: 'Explain what each structure does for the argument (40–50 words).',
      stretch: 'Website writing task: an 80–90-word R3 analysis of the reading text.',
    },
    wordsSource: 'The five words come from the website P5-L09 vocabulary (extended writing on social issues).',
  },
  remember: 'Remember: read HOW the argument is built — ṣaḥīḥun anna concedes, ghayra anna answers. In a gap, find the clue first: a conceded fact → -u; a trigger (an, li-kay) → -a. Balanced = both sides.',
});

module.exports = { meta, slides };
