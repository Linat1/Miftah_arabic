'use strict';
/* P4-L08 · Reading — Built and Natural World Texts — website: Pathways › Progression › P4 › P4-L08 (reading-skills lesson: identify a subjunctive by its
 * final fatḥa, name its trigger — purpose, volition, necessity — read its force as “required but not yet done” (R3), and choose subjunctive or indicative
 * in a gap). The website reading (a water-policy opinion) is the main You Do task. Website vocabulary, rules, quiz, sorter, mistakes, listening, reading,
 * speaking, writing, live builder and mission used as published, with waṣl alif shown without a kasra, لِكَيْ always written with its sukūn, rule
 * examples shown without their English labels and the Arabic label inside the wrong sentence of mistake 2 removed. The website visual game (forest,
 * mountain, sea …) is beginner-level and not used. Sorter headings in transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P4')({
  n: 8, fileTitle: 'Reading_Built_and_Natural_World_Texts', chip: 'Reading Skills',
  title: 'Reading — Built and Natural World Texts', arabic: 'القِرَاءَةُ — نُصُوصُ العَالَمِ المَبْنِيِّ وَالطَّبِيعِيِّ',
  focus: 'Read environmental texts like an examiner: spot the verb in -a, name its trigger (purpose, volition, necessity), read it as “required but not yet done”, and in a gap choose -a after a trigger and -u everywhere else.',
  icon: 'FaBookOpenReader', iconSet: 'fa6',
});

const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const hs = (she) => ({ tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: she }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ').replace(' (بِلَا مُحَفِّزٍ)', ''));
const site = fix(D.site('P4-L08'));
const RH = [['Identify by the ending', 'final -a = subjunctive'], ['Name the trigger', 'purpose · volition · necessity'], ['Read the force (R3)', 'subjunctive → not yet done'], ['Gap-fill choice', 'trigger → -a · no trigger → -u']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1], examples: r.examples.map((e) => e.replace(/ → .*$/, '').replace(/ \((fatḥa|ḍamma)\)$/, '')) }));
const LB = site.live_builder.groups;
const TR = [[': لِكَيْ', ': li-kay'], [': يَتَطَلَّبُ أَنْ', ': yataṭallabu an'], [': يَنْبَغِي أَنْ', ': yanbaghī an']];

const slides = D.devLesson('P4-L08', {
  support: `• READING-SKILLS LESSON: the website text “a water-policy opinion” is the main You Do task. The grammar slides are a reading toolkit built on the subjunctive system students have used since P4-L01.
• Core: classify six verbs as subjunctive (-a) or indicative (-u) by their ending (website Core). Develop: name each trigger type. Stretch: an R3 answer inferring the writer’s stance from a necessity subjunctive.
• Exam link: R3 asks what the writer implies. A verb in -a after a trigger is evidence that something is REQUIRED BUT NOT YET DONE — quote it and name it: «… أَنْ تَتَعَاوَنَ» فِعْلٌ مَنْصُوبٌ بَعْدَ مُحَفِّزِ إِرَادَةٍ.
• Teacher note: the website classes يَتَطَلَّبُ أَنْ as volition (P4-L03, L04, L08) but lists it under necessity in P4-L09. Accept either if the student justifies it — the reading point is the same: required, not yet done.
• Grammar links: li-kay (P4-L01) · volition (P4-L03) · necessity (P4-L04) · intention (P4-L06) · reading conditionals for attitude (P3-L08).`,
  teach: 'Ending → mood, trigger → type → force, R1–R4 on the website text, the gap-fill strategy.',
  wedo: 'Annotate the four key sentences of the text, build an analysis, sort purpose / volition / necessity.',
  next: { nextCode: 'P4-L09', nextTitle: 'Writing — The Built and Natural World (Paper 4 Extended Writing)', nextAr: 'الكِتَابَةُ — العَالَمُ المَبْنِيُّ وَالطَّبِيعِيُّ' },
  objectives: ['Answer R1–R4 questions on a built / natural world text.', 'Identify a subjunctive by its final -a and name its trigger.', 'Explain what the trigger reveals about the writer’s argument (R3).', 'Choose subjunctive or indicative in a gap by spotting the trigger.'],
  rulesAr: 'قِرَاءَةُ المَنْصُوبِ لِفَهْمِ الحُجَّةِ',
  ruleEx: [['يَنْبَغِي أَنْ تُطَوِّرَ', 'تُطَوِّرُ الدُّوَلُ'], ['لِكَيْ تُقَلِّلَ', 'يَتَطَلَّبُ أَنْ تَتَعَاوَنَ'], ['يَتَطَلَّبُ أَنْ …'], ['يَنْبَغِي أَنْ تُطَوِّرَ', 'تُطَوِّرُ الدُّوَلُ']],
  doNow: {
    questions: [
      q('What does نَصٌّ تَحْلِيلِيٌّ mean?', ['an analytical text', 'a short story', 'a text message'], 'Prepared at home (P4-L07).'),
      q('What does مَوْقِفُ الكَاتِبِ mean?', ['the writer’s stance', 'the writer’s address', 'the writer’s name'], 'Prepared at home (P4-L07).'),
      q('What does مُحَفِّزُ النَّصْبِ mean?', ['the subjunctive trigger', 'the past tense', 'a grammar book'], 'Prepared at home (P4-L07).'),
      q('Complete: ___ الأَجْيَالُ السَّابِقَةُ قَدْ بَنَتْ هٰذِهِ المَعَالِمَ.', ['كَانَتِ', 'سَوْفَ', 'لَوْ'], 'P4-L07: kānat … qad + past.'),
      q('Which means “the site should NOT be destroyed”?', ['يَنْبَغِي أَلَّا يُدَمَّرَ المَوْقِعُ.', 'يَنْبَغِي أَنْ يُدَمَّرَ المَوْقِعُ.', 'دُمِّرَ المَوْقِعُ.'], 'P4-L07: allā = an + lā.'),
    ],
    keyIdea: { text: 'A verb in -a after a trigger means “wanted, required or aimed at — but not done yet”. That is the writer’s argument.', ar: 'يَتَطَلَّبُ الوَضْعُ أَنْ {e|تَتَعَاوَنَ} = مَطْلُوبٌ لَا مُنْجَزٌ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P4-L07. Questions 4–5 retrieve the past perfect and allā (P4-L07) — today students read the grammar instead of writing it.',
  },
  routes: {
    core: ['I can tell a verb in -a (subjunctive) from a verb in -u (indicative).', 'I can find the phrase that proves my answer.'],
    develop: ['I can name the trigger: purpose, volition or necessity.', 'I can choose -a or -u in a gap.'],
    stretch: ['I can explain what a subjunctive reveals (R3).', 'I can write an R3 answer with yadull ʿalā.'],
  },
  bridge: [
    { ar: 'تَحْلِيلٌ', urdu: 'تحلیل', tr: 'tahlīl', en: 'analysis' },
    { ar: 'مَوْقِفٌ', urdu: 'موقف', tr: 'mauqif', en: 'a stance, a position' },
    { ar: 'مَطْلُوبٌ', urdu: 'مطلوب', tr: 'matlūb', en: 'required, wanted' },
    { ar: 'صِيغَةٌ', urdu: 'صیغہ', tr: 'sīgha', en: 'a (grammatical) form' },
    { ar: 'نَحْوٌ · نَحْوِيٌّ', urdu: 'نحو', tr: 'nahw', en: 'grammar · grammatical' },
  ],
  bridgeNotes: 'URDU BRIDGE: تحلیل، موقف، مطلوب، صیغہ and نحو are all shared — Urdu-speaking students who studied ʿarabī grammar may already know صیغہ for a verb form. Today’s key phrase: مَطْلُوبٌ لَا مُنْجَزٌ — required, not (yet) done.',
  core: ['نَصٌّ تَحْلِيلِيٌّ', 'مَوْقِفُ الكَاتِبِ', 'الغَرَضُ مِنَ الكِتَابَةِ', 'يَسْتَنْتِجُ', 'يُمَيِّزُ بَيْنَ', 'المُضَارِعُ المَنْصُوبُ', 'المُضَارِعُ المَرْفُوعُ', 'مُحَفِّزُ النَّصْبِ', 'مَطْلُوبٌ لَا مُنْجَزٌ', 'يَسْتَنْفِدُ', 'التَّنْمِيَةُ المُسْتَدَامَةُ', 'الأَجْيَالُ القَادِمَةُ'],
  forms: {
    'نَصٌّ تَحْلِيلِيٌّ': sp('نُصُوصٌ تَحْلِيلِيَّةٌ'), 'مَوْقِفُ الكَاتِبِ': { tag: 'm · f', forms: [{ l: 'f.', ar: 'مَوْقِفُ الكَاتِبَةِ' }] },
    'يَسْتَنْتِجُ': ihs('أَسْتَنْتِجُ', 'تَسْتَنْتِجُ'), 'يُمَيِّزُ بَيْنَ': ihs('أُمَيِّزُ بَيْنَ', 'تُمَيِّزُ بَيْنَ'), 'يَسْتَنْفِدُ': hs('تَسْتَنْفِدُ'), 'يَتَنَاقَصُ': hs('تَتَنَاقَصُ'),
  },
  vocabNotes: {
    0: 'Text and analysis terms — the words of an exam answer. يَسْتَنْتِجُ takes an object or أَنَّ (أَسْتَنْتِجُ أَنَّ …); يُمَيِّزُ بَيْنَ … وَ … (distinguishes between … and …).',
    1: 'Subjunctive-reading skills: المَنْصُوبُ ends in -a (تُطَوِّرَ); المَرْفُوعُ ends in -u (تُطَوِّرُ). مُحَفِّزُ النَّصْبِ is the word that causes the -a. مَطْلُوبٌ لَا مُنْجَزٌ = required, not done — the R3 key phrase.',
    2: 'Built and natural content — the topic words of P4 that appear in reading texts: scarcity, conservation, urban development, depletion, sustainable development, future generations.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · identify by the ending (website rules 1 and 4, mistakes 1–2 and patterns) · Core', title: 'Is it -a or -u?', ar: 'المَنْصُوبُ أَمِ المَرْفُوعُ؟',
      cols: [{ label: 'Sentence', w: 5.6, size: 18 }, { label: 'Ending', w: 1.4 }, { label: 'Mood', w: 2.0 }, { label: 'Why', w: 3.33 }],
      rows: [
        { core: true, cells: ['يَنْبَغِي أَنْ {e|تُطَوِّرَ} الدُّوَلُ التَّحْلِيَةَ.', '-a', 'subjunctive', 'after yanbaghī an'] },
        { core: true, cells: ['{m|تُطَوِّرُ} الدُّوَلُ سِيَاسَاتِهَا حَالِيًّا.', '-u', 'indicative', 'no trigger — a fact'] },
        { cells: ['تَعْتَمِدُ الدُّوَلُ الرِّيَّ الحَدِيثَ لِكَيْ {e|تُقَلِّلَ} الهَدْرَ.', '-a', 'subjunctive', 'after li-kay'] },
        { cells: ['فَالمِنْطَقَةُ {m|تَسْتَنْفِدُ} مِيَاهَهَا الجَوْفِيَّةَ بِسُرْعَةٍ.', '-u', 'indicative', 'happening now'] },
        { cells: ['لِكَيْ {e|يَبْقَى} التُّرَاثُ حَيًّا', '(-ā)', 'subjunctive', 'hidden ending — the trigger tells you'] },
      ],
      ltr: true,
      foot: 'Look at the LAST vowel of the verb — then look LEFT for a trigger. Row 5: a verb ending in -ā cannot show the -a, but it is still subjunctive.',
      notes: `GRAMMAR PART 1 — website rules “Identify by the fatḥa” and “Gap-fill choice”, mistakes 1–2, the website patterns and the website reading (rows 3–4).
Two checks for every verb: (1) the last vowel: ـَ or ـُ? (2) is there a trigger before it (لِكَيْ · أَنْ)?
Row 5 (from the website sorter): verbs ending in alif maqṣūra (يَبْقَى · يَخْشَى) show no change — the TRIGGER proves it is subjunctive. Verbs in -ī / -ū DO show it: نَبْنِيَ · يَرْجُوَ.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · name the trigger, read the force (website rules 2–3, teaching point 1 and table) · Develop', title: 'Trigger → type → what it reveals', ar: 'المُحَفِّزُ وَدَلَالَتُهُ',
      cols: [{ label: 'Trigger', w: 2.6, size: 18 }, { label: 'Type', w: 1.7 }, { label: 'What it reveals', w: 2.6 }, { label: 'Example (website reading)', w: 5.43, size: 17 }],
      rows: [
        { core: true, cells: ['{e|لِكَيْ}', 'purpose', 'the goal of an action', 'تَعْتَمِدُ بَعْضُ الدُّوَلِ الرِّيَّ الحَدِيثَ لِكَيْ {e|تُقَلِّلَ} الهَدْرَ.'] },
        { core: true, cells: ['{w|يَتَطَلَّبُ أَنْ}', 'volition', 'needed — not yet happening', 'يَتَطَلَّبُ الوَضْعُ أَنْ {w|تَتَعَاوَنَ} الدُّوَلُ.'] },
        { core: true, cells: ['{k|مِنَ الضَّرُورِيِّ أَنْ}', 'necessity', 'urgent and missing', 'مِنَ الضَّرُورِيِّ أَنْ {k|تَسْتَثْمِرَ} الحُكُومَاتُ فِي التَّحْلِيَةِ.'] },
        { cells: ['{w|يَهْدِفُ إِلَى أَنْ}', 'volition (aim)', 'a plan, not a result', 'تَهْدِفُ الرُّؤْيَةُ إِلَى أَنْ {w|تُنَوِّعَ} الاقْتِصَادَ.'] },
        { cells: ['{p|غَيْرَ أَنَّ}', 'not a trigger', 'confirms the gap', 'غَيْرَ أَنَّ هٰذِهِ الجُهُودَ {p|مَا زَالَتْ مَحْدُودَةً}.'] },
      ],
      ltr: true,
      foot: 'Website teaching point: “The subjunctive signals what is not yet done” — the writer is telling you what is MISSING.',
      notes: `GRAMMAR PART 2 — website rules “Name the trigger” and “Read the force (R3)”, teaching point 1, the website table and the website reading (rows 1–3, 5).
The argument hides in the triggers: the writer never says “governments have failed” — but يَتَطَلَّبُ … أَنْ تَتَعَاوَنَ and مِنَ الضَّرُورِيِّ أَنْ تَسْتَثْمِرَ tell us cooperation and investment are NOT happening enough. Row 5 then confirms it openly.
Row 4 is from the website sorter (P4-L06 intention).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · the four question types on the website reading (R1–R4) · Develop', title: 'Know what the question wants', ar: 'أَنْوَاعُ الأَسْئِلَةِ',
      cols: [{ label: 'Question', w: 1.5 }, { label: 'It asks for …', w: 2.3 }, { label: 'Evidence in the website text', w: 5.9, size: 17 }, { label: 'Answer frame', w: 2.63, size: 16 }],
      rows: [
        { core: true, cells: ['R1', 'the main view', 'يَرَى الكَاتِبُ أَنَّ الأَزْمَةَ {p|أَخْطَرُ مِمَّا يَظُنُّ كَثِيرُونَ}.', 'يَرَى الكَاتِبُ أَنَّ …'] },
        { core: true, cells: ['R2', 'a word / detail', 'فَالمِنْطَقَةُ {m|تَسْتَنْفِدُ} مِيَاهَهَا الجَوْفِيَّةَ.', '«…» تَعْنِي …'] },
        { cells: ['R3', 'a trigger', 'يَتَطَلَّبُ الوَضْعُ أَنْ {w|تَتَعَاوَنَ} الدُّوَلُ.', 'المُحَفِّزُ … وَهُوَ …'] },
        { cells: ['R3', 'the force', 'مِنَ الضَّرُورِيِّ أَنْ {k|تَسْتَثْمِرَ} الحُكُومَاتُ …', 'يَدُلُّ … عَلَى …'] },
        { cells: ['R4', 'the purpose', '{e|وَالغَرَضُ مِنَ النَّصِّ} إِقْنَاعُ القَارِئِ …', 'الغَرَضُ مِنَ النَّصِّ …'] },
      ],
      ltr: true,
      foot: 'R1–R2: find it. R3–R4: work it out — and quote the words that prove it.',
      notes: `GRAMMAR PART 3 — the website reading labels its five questions R1–R4; this table shows what each type needs, using the website text.
R1: أَخْطَرُ مِمَّا يَظُنُّ كَثِيرُونَ = more serious than many think (comparative + mimmā). R2: تَسْتَنْفِدُ = depletes (Form X, from نَفِدَ = run out, P4-L04).
Exam habit for R3: name the MOOD (فِعْلٌ مَنْصُوبٌ), the TRIGGER (يَتَطَلَّبُ أَنْ) and the FORCE (مَطْلُوبٌ لَا مُنْجَزٌ). The reading also has a Type 2 (لَوْ أُدِيرَتْ … لَمَا) — an implicit criticism, as in P3-L08.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the gap-fill strategy (website rule 4, teaching point 2 and mistakes) · Core / Stretch', title: 'Find the trigger, then the ending', ar: 'ابْحَثْ عَنِ المُحَفِّزِ أَوَّلًا',
      cards: [
        { chip: 'TRIGGER → -A · CORE', color: '1D5FBF', head: 'أَنْ / لِكَيْ ← فَتْحَةٌ', big: 'يَنْبَغِي أَنْ تُطَوِّرَ الدُّوَلُ التَّحْلِيَةَ.', en: 'States should develop desalination.', clue: 'Trigger → fatḥa.' },
        { chip: 'NO TRIGGER → -U · CORE', color: '1E6B52', head: 'لَا مُحَفِّزَ ← ضَمَّةٌ', big: 'تُطَوِّرُ الدُّوَلُ سِيَاسَاتِهَا حَالِيًّا.', en: 'States are currently developing their policies.', clue: 'No trigger → ḍamma.' },
        { chip: 'TRAP · STRETCH', color: 'C0386B', head: 'أَنَّ ≠ أَنْ', big: 'يَرَى الكَاتِبُ أَنَّ الأَزْمَةَ أَخْطَرُ.', en: 'The writer believes that the crisis is more serious.', clue: 'anna + noun: no verb in -a.' },
      ],
      error: { text: 'Website mistake 2: no trigger — so the verb ends in -u.', pairs: [['تُطَوِّرُ الدُّوَلُ سِيَاسَاتِهَا حَالِيًّا', 'تُطَوِّرَ الدُّوَلُ سِيَاسَاتِهَا حَالِيًّا']] },
      notes: `GRAMMAR PART 4 — website rule “Gap-fill choice”, teaching point 2 (“In a gap-fill, find the trigger first”), quiz 6–7 and mistakes 1–2.
Strategy: cover the options. Look LEFT of the gap. أَنْ / لِكَيْ / لِـ / لَنْ / أَلَّا → -a. Nothing → -u. Only then look at the options.
Card 3 trap: أَنَّ (shadda, fatḥa) is followed by a NOUN, not a verb in -a — يَرَى أَنَّ الأَزْمَةَ … . And a past-tense option (طَوَّرَتْ) is never right after أَنْ in these texts.`,
    },
  ],
  quick: [0, 1, 2, 5],
  rest: [3, 4, 6, 7],
  ido: {
    title: 'Watch me analyse the grammar of an argument',
    steps: [
      { head: 'Identify', ar: '«{e|تَتَعَاوَنَ}» مَنْصُوبٌ — الفَتْحَةُ', think: 'The ending.' },
      { head: 'Trigger', ar: '{w|«يَتَطَلَّبُ أَنْ»} = إِرَادَةٌ', think: 'Look left.' },
      { head: 'Force', ar: '{k|يَدُلُّ عَلَى} … مَطْلُوبًا لَا مُنْجَزًا', think: 'Not done yet.' },
      { head: 'Contrast', ar: '«تَسْتَنْفِدُ» {m|مَرْفُوعٌ}', think: 'A fact.' },
    ],
    legend: ['e', 'w', 'k', 'm'], legendLabels: { e: 'SUBJUNCTIVE', w: 'TRIGGER', k: 'INFERENCE', m: 'INDICATIVE' },
    model: '{k|يَكْشِفُ} النَّصُّ {k|عَنْ} حُجَّةِ كَاتِبِهِ مِنْ خِلَالِ صِيَغِ الأَفْعَالِ. فَجُمْلَةُ «يَتَطَلَّبُ الوَضْعُ أَنْ {e|تَتَعَاوَنَ} الدُّوَلُ» تَحْمِلُ فِعْلًا مَنْصُوبًا عَرَفْتُهُ مِنَ الفَتْحَةِ، وَمُحَفِّزُهُ {w|«يَتَطَلَّبُ أَنْ»}، وَهُوَ مُحَفِّزُ إِرَادَةٍ. {k|وَهٰذَا يَدُلُّ عَلَى} أَنَّ الكَاتِبَ يَرَى التَّعَاوُنَ مَطْلُوبًا لَا مُنْجَزًا. أَمَّا «تَسْتَنْفِدُ المِنْطَقَةُ مِيَاهَهَا» فَفِعْلُهَا {m|مَرْفُوعٌ}، لِأَنَّهُ يَصِفُ فِعْلًا وَاقِعًا بِلَا مُحَفِّزٍ.',
    modelEn: 'The text reveals its writer’s argument through its verb forms. The sentence “the situation requires states to cooperate” contains a subjunctive verb, which I recognised from the fatḥa; its trigger is “yataṭallabu an”, a volition trigger. This shows that the writer sees cooperation as required, not yet achieved. “The region is depleting its water”, by contrast, has an indicative verb, because it describes a real action with no trigger.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Step 1: the last vowel — tataʿāwanA → subjunctive. Step 2: look left — yataṭallabu an → volition. Step 3: so what? It is NEEDED, not done — that is the writer’s point. Step 4: contrast — tastanfiDU, no trigger, a fact. Four steps, one R3 answer.”',
  },
  patternEn: ['states should develop water policies', 'states invest in the sun so that they reduce emissions', 'states are currently developing their policies'],
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · annotate the key sentences (preparing the website reading)', title: 'Four sentences, four jobs', ar: 'حَلِّلِ الجُمَلَ الأَرْبَعَ',
      cols: [{ label: 'Sentence from the reading', w: 6.4, size: 17 }, { label: 'Verb · mood', w: 2.5 }, { label: 'What it reveals', w: 3.43 }],
      rows: [
        { core: true, cells: ['فَالمِنْطَقَةُ {m|تَسْتَنْفِدُ} مِيَاهَهَا الجَوْفِيَّةَ بِسُرْعَةٍ.', 'tastanfidu · indicative', 'a fact happening now'] },
        { core: true, cells: ['يَتَطَلَّبُ الوَضْعُ أَنْ {e|تَتَعَاوَنَ} الدُّوَلُ فِي إِدَارَةِ المَوَارِدِ المُشْتَرَكَةِ.', 'tataʿāwana · volition', 'cooperation is needed — not yet happening'] },
        { cells: ['وَمِنَ الضَّرُورِيِّ أَنْ {e|تَسْتَثْمِرَ} الحُكُومَاتُ فِي التَّحْلِيَةِ.', 'tastathmira · necessity', 'the writer urges investment'] },
        { cells: ['غَيْرَ أَنَّ هٰذِهِ الجُهُودَ مَا زَالَتْ مَحْدُودَةً.', 'no verb in -a', 'confirms: efforts are not enough'] },
      ],
      ltr: true,
      foot: 'The website reading uses exactly these sentences — this table is the plan for answering its R1–R4 questions.',
      notes: `WE DO (3 min) — built from the website reading “a water-policy opinion”. Read the text aloud first, then fill columns 2–3 together, covering them.
Core: rows 1–2 (-u or -a?). Develop: row 3 — name the trigger type. Stretch: row 4 — how does غَيْرَ أَنَّ support the reading of rows 2–3? Then: يَدُلُّ المَنْصُوبُ عَلَى أَنَّ … .
Vocabulary: مَا زَالَتْ مَحْدُودَةً = are still limited · مِمَّا يَظُنُّ كَثِيرُونَ = than many think.`,
    },
    {
      type: 'formsTable', stage: 'wedo', min: 2, flex: true, eyebrow: 'We do · build a grammar analysis (website live builder)', title: 'Identify + trigger + force', ar: 'ابْنِ تَحْلِيلَكَ',
      cols: [{ label: '1 · Identify', w: 4.0, size: 16 }, { label: '2 · Name the trigger', w: 4.0, size: 16 }, { label: '3 · Read the force', w: 4.33, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Say it, then write three different versions.',
      notes: `WE DO (flex) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Use it as oral rehearsal for the website writing task. Stretch: match each column-1 verb with its REAL trigger in the reading (تَتَعَاوَنَ ← يَتَطَلَّبُ أَنْ · تُقَلِّلَ ← لِكَيْ).`,
    },
  ],
  sorterTitle: 'Purpose, volition — or necessity?',
  sorterCats: ['purpose (li-kay)', 'volition (yataṭallabu / yahdifu)', 'necessity (yanbaghī / min al-ḍarūrī)'],
  sorterNotes: 'Then say what each card reveals: purpose → the goal · volition → what is wanted · necessity → what is missing and urgent.',
  patch: { vocab: site.vocab.map((g) => ({ ...g, items: g.items.map((it) => ({ ...it, en: TR.reduce((s, [a, b]) => s.replace(a, b), it.en) })) })), grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns, final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; لِكَيْ always written with its sukūn; the Arabic label inside the wrong sentence of mistake 2 removed; rule headings and formulas in English and transliteration; rule examples shown without their English labels; trigger-word glosses and sorter headings in transliteration; the ending, trigger and R1–R4 tables and the annotation table are teacher-built from the website texts; the website visual game is beginner-level and not used. All other website items are used as published.',
  hints: ['an tuṭawwiru?', 'no trigger + -a?', 'li-kay = a done action?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: fatḥa · li-kay · yataṭallabu an · yanbaghī an.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write down the three triggers and what each one is “for”.',
  gloss: [
    ['عِنْدَمَا تَقْرَأُ نَصًّا بِيئِيًّا أَوْ تُرَاثِيًّا، لَا تَنْظُرْ إِلَى المَعْلُومَةِ فَقَطْ، بَلْ إِلَى صِيغَةِ الفِعْلِ.', 'When you read an environmental or heritage text, do not look only at the information, but at the form of the verb.'],
    ['فَالفِعْلُ المَنْصُوبُ يَنْتَهِي بِفَتْحَةٍ، وَيَأْتِي بَعْدَ مُحَفِّزٍ: «لِكَيْ» لِلْغَرَضِ، وَ«يَتَطَلَّبُ أَنْ» لِلْإِرَادَةِ، وَ«يَنْبَغِي أَنْ» لِلضَّرُورَةِ.', 'The subjunctive verb ends in a fatḥa and comes after a trigger: “li-kay” for purpose, “yataṭallabu an” for volition, and “yanbaghī an” for necessity.'],
    ['وَهٰذَا يُخْبِرُكَ بِعَلَاقَةِ الكَاتِبِ بِالفِعْلِ: هَلْ يَصِفُ غَرَضًا، أَمْ يُعَبِّرُ عَنْ حَاجَةٍ، أَمْ يُقَرِّرُ ضَرُورَةً؟', 'This tells you the writer’s relationship to the action: is he describing a goal, expressing a need, or stating a necessity?'],
    ['فَالمَنْصُوبُ يَدُلُّ عَلَى أَنَّ الفِعْلَ مَطْلُوبٌ وَلٰكِنْ لَمْ يَحْدُثْ بَعْدُ. أَمَّا الفِعْلُ المَرْفُوعُ فَيَنْتَهِي بِضَمَّةٍ وَيَصِفُ فِعْلًا وَاقِعًا.', 'The subjunctive shows that the action is required but has not happened yet. The indicative verb, however, ends in a ḍamma and describes a real action.'],
    ['وَفِي مِلْءِ الفَرَاغِ، ابْحَثْ عَنِ المُحَفِّزِ أَوَّلًا، ثُمَّ اخْتَرِ العَلَامَةَ.', 'And in a gap-fill, look for the trigger first, then choose the ending.'],
  ],
  readingCore: {
    readMin: 5, qMin: 6,
    notes: 'YOU DO — READING (main task): the website text “a water-policy opinion”. Before reading: circle every verb ending in -a and box the trigger to its left (لِكَيْ · أَنْ); underline verbs in -u.\nCore: questions 1, 2 and 3 (R1–R3). Develop: all 5 + quote the words that prove each answer. Stretch: then write an R3 answer in Arabic: «يَدُلُّ الفِعْلُ المَنْصُوبُ … عَلَى أَنَّ …، لِأَنَّ …» (website Stretch).',
  },
  glossary: [
    ['أَخْطَرُ مِمَّا يَظُنُّ كَثِيرُونَ', 'more serious than many think'], ['تَسْتَنْفِدُ', 'depletes'], ['بِسُرْعَةٍ', 'quickly'], ['المَوَارِدِ المُشْتَرَكَةِ', 'shared resources'], ['التَّحْلِيَةِ', 'desalination'],
    ['الهَدْرَ', 'waste'], ['الجُهُودَ', 'the efforts'], ['مَا زَالَتْ مَحْدُودَةً', 'are still limited'], ['الإِصْلَاحَ', 'reform'], ['عَاجِلٌ', 'urgent'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'أَيُّ فِعْلٍ فِي الجُمْلَةِ مَنْصُوبٌ؟ وَكَيْفَ عَرَفْتَ؟' },
      { route: 'develop', ar: 'مَا مُحَفِّزُ النَّصْبِ؟ غَرَضٌ أَمْ إِرَادَةٌ أَمْ ضَرُورَةٌ؟' },
      { route: 'stretch', ar: 'مَاذَا يَكْشِفُ ذٰلِكَ عَنْ حُجَّةِ الكَاتِبِ؟' },
    ],
    stems: [
      { route: 'core', ar: '« ______ » مَنْصُوبٌ؛ عَرَفْتُهُ مِنَ الفَتْحَةِ فِي آخِرِهِ.' },
      { route: 'develop', ar: 'المُحَفِّزُ « ______ »، وَهُوَ ______ .' },
      { route: 'stretch', ar: 'يَكْشِفُ أَنَّ الكَاتِبَ يَرَى ______ مَطْلُوبًا لَا مُنْجَزًا.' },
    ],
    modelEn: ['Which verb is subjunctive?', '“tataʿāwana” is subjunctive; I recognised it from the fatḥa at the end.', 'And what is its trigger?', 'The trigger is “yataṭallabu an”, a volition trigger; it reveals that the writer sees cooperation as required, not achieved.'],
    notes: 'Website prompts and model. Pairs take one sentence from the reading each and analyse it aloud with the three questions (identify · trigger · force). To a girl: عَرَفْتِ.',
  },
  write: {
    core: { amount: '6 verbs', how: 'Website Core: classify six verbs as subjunctive or indicative by their ending.' },
    develop: { amount: '40–50 words', how: 'Website Develop: for each subjunctive, name the trigger type.' },
    stretch: { amount: '80–90 words', how: 'Website task: analyse a short text — one subjunctive and its trigger, what it reveals, and one indicative by contrast.' },
  },
  frames: {
    core: [
      { en: '“…” is subjunctive; I recognised it from the fatḥa.', ar: '« ______ » مَنْصُوبٌ؛ عَرَفْتُهُ مِنَ الفَتْحَةِ.' },
      { en: '“…” is indicative, because there is no trigger.', ar: '« ______ » مَرْفُوعٌ، لِأَنَّهُ بِلَا مُحَفِّزٍ.' },
      { en: 'The writer’s main view is that …', ar: 'يَرَى الكَاتِبُ أَنَّ ______ .' },
      { en: 'The word “…” means …', ar: 'كَلِمَةُ « ______ » تَعْنِي ______ .' },
    ],
    develop: [
      { en: 'Its trigger is “…”, a … trigger.', ar: 'مُحَفِّزُهُ « ______ »، وَهُوَ مُحَفِّزُ ______ .' },
      { en: 'This shows that the writer sees … as required, not achieved.', ar: 'وَهٰذَا يَدُلُّ عَلَى أَنَّ الكَاتِبَ يَرَى ______ مَطْلُوبًا لَا مُنْجَزًا.' },
      { en: 'By contrast, the verb “…” is indicative, because …', ar: 'أَمَّا « ______ » فَفِعْلُهُ مَرْفُوعٌ، لِأَنَّهُ ______ .' },
      { en: 'The purpose of the text is …', ar: 'الغَرَضُ مِنَ النَّصِّ ______ .' },
    ],
    bank: ['تَتَعَاوَنَ', 'تَسْتَثْمِرَ', 'تُقَلِّلَ', 'تَسْتَنْفِدُ', 'يَتَطَلَّبُ أَنْ', 'مِنَ الضَّرُورِيِّ أَنْ', 'لِكَيْ', 'غَرَضٍ', 'إِرَادَةٍ', 'ضَرُورَةٍ', 'يَصِفُ فِعْلًا وَاقِعًا', 'إِقْنَاعُ القَارِئِ'],
  },
  stretch: [
    ['مِنْ خِلَالِ صِيَغِ الأَفْعَالِ', 'through its verb forms'],
    ['عَرَفْتُهُ مِنَ الفَتْحَةِ', 'I recognised it from the fatḥa'],
    ['مَطْلُوبًا لَا مُنْجَزًا بَعْدُ', 'required, not yet achieved'],
    ['يَصِفُ فِعْلًا وَاقِعًا بِلَا مُحَفِّزٍ', 'describes a real action, with no trigger'],
    ['أَقْرَأُ النَّصَّ بِوَعْيٍ بِالصِّيَغِ النَّحْوِيَّةِ', 'I read the text aware of its grammatical forms'],
  ],
  modelEn: 'The text reveals its writer’s argument through its verb forms. The sentence “the situation requires states to cooperate” contains a subjunctive verb, which I recognised from the fatḥa; its trigger is “yataṭallabu an”, a volition trigger. This shows that the writer sees cooperation as required, not yet achieved. The sentence “the region is depleting its water”, by contrast, has an indicative verb ending in a ḍamma, because it describes a real action with no trigger. So I read the text aware of its grammatical forms, because they reveal the writer’s stance.',
  find: ['subjunctive (tataʿāwana)', 'trigger (yataṭallabu an)', 'the force (maṭlūban lā munjazan)', 'an indicative contrast (tastanfidu)'],
  modelNotes: 'Website writing model. Evidence: يَكْشِفُ النَّصُّ عَنْ حُجَّةِ كَاتِبِهِ · فِعْلًا مَنْصُوبًا عَرَفْتُهُ مِنَ الفَتْحَةِ · وَمُحَفِّزُهُ «يَتَطَلَّبُ أَنْ» · مُحَفِّزُ إِرَادَةٍ · يَدُلُّ عَلَى أَنَّ … مَطْلُوبًا لَا مُنْجَزًا · أَمَّا … فَفِعْلُهَا مَرْفُوعٌ · بِلَا مُحَفِّزٍ.',
  selfCheck: [
    { route: 'core', text: 'I checked the last vowel of each verb: -a or -u.' },
    { route: 'core', text: 'I quoted the exact words that prove my answer.' },
    { route: 'develop', text: 'I named each trigger: purpose, volition or necessity.' },
    { route: 'develop', text: 'In a gap, I looked left for a trigger before choosing.' },
    { route: 'stretch', text: 'I explained the force: required, not yet done (yadull ʿalā … li-anna …).' },
  ],
  exit: [0, 1, 2],
  prep: {
    words: [['الحُجَّةُ البِيئِيَّةُ', 'the environmental argument', '—'], ['التَّشْخِيصُ', 'diagnosis', '—'], ['الحَلُّ المُقْتَرَحُ', 'the proposed solution', 'pl. الحُلُولُ المُقْتَرَحَةُ'], ['وَمِنْ ثَمَّ', 'and thus', 'connector'], ['الاسْتِدَامَةُ', 'sustainability', '—']],
    questionEn: 'What is the biggest environmental problem where you live — and your solution?',
    questionAr: 'المُشْكِلَةُ هِيَ ______ ، وَالحَلُّ المُقْتَرَحُ ______ .',
    homework: {
      core: 'Find six verbs in an Arabic text and classify them: -a (subjunctive) or -u (indicative).',
      develop: 'For each subjunctive, name the trigger type (40–50 words).',
      stretch: 'Website writing task: an 80–90-word grammar analysis of a short text.',
    },
    wordsSource: 'The five words come from the website P4-L09 vocabulary (extended writing on the built and natural world).',
  },
  remember: 'Remember: check the last vowel, then look left — a trigger (li-kay, an) → -a = wanted or required but NOT yet done; no trigger → -u = a real action. Name it: mood, trigger, force.',
});

module.exports = { meta, slides };
