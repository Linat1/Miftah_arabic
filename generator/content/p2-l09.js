'use strict';
/* P2-L09 · Writing — Education and Future Plans (Paper 4 Extended Writing) — website: Pathways › Progression › P2 › P2-L09 (assembling the full P2 Range in a
 * 140–155-word article: a four-move plan — background كَانَ قَدْ · reality with reported speech · analysis with إِذَا AND لَوْ · future conclusion — formal
 * connectors, and the triple-structure sentence). Website vocabulary, rules, quiz, sorter, mistakes, listening, annotated reading model, speaking, writing, live
 * builder and mission used as published, with small spelling fixes: the connector spelt عِلَاوَةً (the website has عَلَاوَةً), waṣl alif without a kasra, and
 * one sorter card corrected (كَانَتْ قَدِ اهْتَمَمْتُ → كُنْتُ قَدِ اهْتَمَمْتُ). The website visual game repeats the P2-L01 / P2-L03 education-path cards, so it
 * is not used. English added to the patterns. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P2')({
  n: 9, fileTitle: 'Writing_Education_and_Future_Plans_Paper_4', chip: 'Writing Skills',
  title: 'Writing — Education and Future Plans (Paper 4 Extended Writing)', arabic: 'الكِتَابَةُ — التَّعْلِيمُ وَخُطَطُ المُسْتَقْبَلِ',
  focus: 'Plan and write a 140–155-word article that carries all five P2 structures — a past-perfect background, reported speech, a Type 1 AND a Type 2 conditional, and the future — joined with formal connectors, then self-mark it against the nine Range criteria.',
  icon: 'FaPenNib', iconSet: 'fa6',
});

const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/عَلَاوَةً/g, 'عِلَاوَةً').replace(/كَانَتْ قَدِ اهْتَمَمْتُ/g, 'كُنْتُ قَدِ اهْتَمَمْتُ'));
const site = fix(D.site('P2-L09'));
const RH = [['Background: past perfect', 'kuntu qad + past'], ['Reality: reported speech', 'qāla inna · ashāra ilā anna'], ['Analysis: both conditionals', 'idhā … sa- · law … la-'], ['Register: formal connectors', 'ʿilāwatan ʿalā dhālika · sharīṭata an']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P2-L09', {
  support: `• WRITING-SKILLS LESSON (IGCSE Paper 4, Q3 style): the website task is a 140–155-word article on education and future plans. It brings together P2-L01 to P2-L08 — the P2 writing assessment rehearsal.
• Core: the four-paragraph plan with one sentence per structure. Develop: 140 words with the five structures labelled. Stretch: 155 words, two connectors and ONE sentence that combines three structures.
• Marking (website listening): Paper 4 Q3 rewards CONTENT, RANGE and ACCURACY. At P2, Range means the five structures — and one law sentence beside one idhā sentence shows the examiner you can tell the possible from the hypothetical.
• Be sensitive: students who have not chosen a career can write as a persona (“a student who wants to study medicine / engineering”) — the grammar is what is being assessed.
• Timing: a strict 15 minutes of silent writing in You Do; collect drafts for the P2-L12 assessment feedback.`,
  teach: 'The four-move plan, the five P2 structures, formal connectors, the triple sentence.',
  wedo: 'Upgrade plain sentences, build an article line, sort by paragraph.',
  next: { nextCode: 'P2-L10', nextTitle: 'Listening — Education and Future Plans Texts', nextAr: 'الاسْتِمَاعُ — نُصُوصُ التَّعْلِيمِ وَخُطَطِ المُسْتَقْبَلِ' },
  objectives: ['Plan a four-paragraph education article carrying every P2 structure.', 'Combine past perfect, reported speech and both conditional types in one text.', 'Raise the register with formal connectors and academic vocabulary.', 'Self-assess against the nine P2 Range criteria.'],
  rulesAr: 'تَرْكِيبُ النِّطَاقِ الكَامِلِ',
  doNow: {
    questions: [
      q('What does عِلَاوَةً عَلَى ذٰلِكَ mean?', ['moreover', 'despite that', 'as a result'], 'Prepared at home (P2-L08).'),
      q('What does شَرِيطَةَ أَنْ mean?', ['provided that', 'in order that', 'before'], 'Prepared at home (P2-L08).'),
      q('What does بِنَاءً عَلَى مَا سَبَقَ mean?', ['based on the above', 'on the other hand', 'in addition to'], 'Prepared at home (P2-L08).'),
      q('Which reporting verb signals the writer’s doubt?', ['ادَّعَى', 'أَكَّدَ', 'أَوْضَحَ'], 'P2-L08: iddaʿā = doubt.'),
      q('Choose the accurate reported speech.', ['قَالَ أُسْتَاذِي إِنَّنِي مُجْتَهِدٌ.', 'قَالَ أُسْتَاذِي أَنَّنِي مُجْتَهِدٌ.', 'قَالَ أُسْتَاذِي إِنَّ أَنَا مُجْتَهِدٌ.'], 'P2-L02: qāla + inna + pronoun.'),
    ],
    keyIdea: { text: 'P2 Range = five structures in one text — and one idhā beside one law.', ar: '{e|كُنْتُ قَدْ} · {m|أَشَارَ … إِلَى أَنَّ} · {k|إِذَا … سَـ} · {p|لَوْ … لَـ} · {w|سَوْفَ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P2-L08. Question 4 retrieves the certainty of reporting verbs (P2-L08); question 5 the qāla inna rule (P2-L02) — website mistake 2 shows this is an Accuracy trap in extended writing.',
  },
  routes: {
    core: ['I can plan four paragraphs, one structure each.', 'I can write a past perfect and a reported clause.'],
    develop: ['I can use one idhā AND one law conditional.', 'I can join ideas with two formal connectors.'],
    stretch: ['I can write one sentence with three structures.', 'I can self-mark against the nine criteria.'],
  },
  bridge: [
    { ar: 'عِلَاوَةً عَلَى', urdu: 'علاوہ ازیں', tr: 'ʿalāwa azīn', en: 'moreover, besides' },
    { ar: 'نَتِيجَةٌ', urdu: 'نتیجہ', tr: 'natīja', en: 'a result' },
    { ar: 'شَرْطٌ', urdu: 'شرط', tr: 'shart', en: 'a condition' },
    { ar: 'خُلَاصَةٌ', urdu: 'خلاصہ', tr: 'khulāsa', en: 'a summary, conclusion' },
    { ar: 'بِنَاءً عَلَى', urdu: 'بنا بریں', tr: 'binā barīn', en: 'based on, therefore' },
  ],
  bridgeNotes: 'URDU BRIDGE: formal Urdu connectors come from Arabic — علاوہ ازیں، نتیجتاً، بنا بریں، شرط. CAREFUL with spelling: Urdu says ʿalāwa, but in Arabic it is عِلَاوَةً (ʿilāwatan, with a kasra) — some websites copy the Urdu-style vowel by mistake.',
  core: ['المَاضِي التَّامُّ', 'الكَلَامُ المَنْقُولُ', 'شَرْطٌ مِنَ النَّوْعِ الأَوَّلِ', 'شَرْطٌ مِنَ النَّوْعِ الثَّانِي', 'رَابِطٌ رَسْمِيٌّ', 'عِلَاوَةً عَلَى ذٰلِكَ', 'عَلَى الرَّغْمِ مِنْ ذٰلِكَ', 'شَرِيطَةَ أَنْ', 'نَتِيجَةً لِذٰلِكَ', 'وَخِتَامًا', 'خَلْفِيَّةٌ', 'اسْتِنْتَاجٌ'],
  forms: {
    'رَابِطٌ رَسْمِيٌّ': sp('رَوَابِطُ رَسْمِيَّةٌ'), 'خَلْفِيَّةٌ': sp('خَلْفِيَّاتٌ'), 'اسْتِنْتَاجٌ': sp('اسْتِنْتَاجَاتٌ'), 'تَحْلِيلٌ': sp('تَحْلِيلَاتٌ'),
    'يَدْمُجُ': { tag: 'I · he · she', forms: [{ l: 'she', ar: 'تَدْمُجُ' }, { l: 'I', ar: 'أَدْمُجُ' }] }, 'يُوَازِنُ': { tag: 'I · he · she', forms: [{ l: 'she', ar: 'تُوَازِنُ' }, { l: 'I', ar: 'أُوَازِنُ' }] },
  },
  vocabNotes: {
    0: 'The nine P2 Range criteria — today’s checklist: past perfect · reported speech · Type 1 · Type 2 · formal connector · comparative · integration · analytical depth · the full range.',
    1: 'Formal connectors: each sits at the START of a sentence, followed by a comma. شَرِيطَةَ أَنْ (provided that) is followed by a subjunctive verb (-a): شَرِيطَةَ أَنْ أَجْتَهِدَ.',
    2: 'Structuring the argument: خَلْفِيَّةٌ (background) → وَاقِعٌ حَالِيٌّ (current reality) → تَحْلِيلٌ (analysis) → اسْتِنْتَاجٌ (conclusion) — the four moves of today’s article.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the four-move plan (website table + teaching point 2) · Core', title: 'Four paragraphs, five structures', ar: 'خُطَّةُ المَقَالَةِ',
      cols: [{ label: 'Paragraph', w: 1.9 }, { label: 'Structure', w: 2.7 }, { label: 'Model sentence (website model)', w: 7.73, size: 19 }],
      rows: [
        { core: true, cells: ['1 · background', 'past perfect', '{e|كُنْتُ قَدْ قَرَّرْتُ} دِرَاسَةَ الطِّبِّ مُنْذُ المَرْحَلَةِ الإِعْدَادِيَّةِ.'] },
        { core: true, cells: ['2 · reality', 'present + reported speech', 'أَدْرُسُ الآنَ فِي السَّنَةِ الأَخِيرَةِ، وَ{m|قَدْ أَشَارَ} أُسْتَاذِي {m|إِلَى أَنَّنِي} مُؤَهَّلٌ لِلْمُنَافَسَةِ.'] },
        { core: true, cells: ['3 · analysis', 'Type 1 + Type 2', '{k|إِذَا قُبِلْتُ}، {k|سَأُكَرِّسُ} جُهْدِي لِلْبَحْثِ … {p|لَوْ تَوَافَرَتْ} لِي مَوَارِدُ أَفْضَلُ، {p|لَكُنْتُ} قَدْ تَقَدَّمْتُ أَكْثَرَ.'] },
        { core: true, cells: ['4 · conclusion', 'future + connector', '{w|وَخِتَامًا، سَوْفَ} أَسْعَى إِلَى خِدْمَةِ مُجْتَمَعِي.'] },
      ],
      ltr: true,
      foot: 'Website teaching point: “The plan is what turns five structures into a coherent article.”',
      notes: `GRAMMAR PART 1 — website teaching point “Map a structure to each paragraph” (P1 background with كَانَ قَدْ; P2 current reality in the present with reported speech; P3 analysis with a Type 1 and a Type 2 conditional; P4 a forward look with the future and a formal connector), the website table and the listening (افْتَحْ بِخَلْفِيَّةٍ فِي المَاضِي التَّامِّ، ثُمَّ اعْرِضِ الوَاقِعَ الحَالِيَّ بِالكَلَامِ المَنْقُولِ، ثُمَّ حَلِّلْ بِالشَّرْطَيْنِ، وَاخْتِمْ بِالمُسْتَقْبَلِ).
Each paragraph recycles an earlier P2 lesson: background (P2-L03) · reality (P2-L02) · analysis (P1-L03 + P2-L06) · conclusion (P2-L05 future + P2-L09 connectors).
Core students write ONLY the four model-style sentences — one per paragraph — and still have a complete, organised text.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · lift the register with connectors (website rule 4 + vocabulary) · Develop', title: 'Replace the bare wa', ar: 'الرَّوَابِطُ الرَّسْمِيَّةُ',
      cols: [{ label: 'Job', w: 1.8 }, { label: 'Plain', w: 2.0, size: 22 }, { label: 'Formal', w: 3.2, size: 21 }, { label: 'Example', w: 5.33, size: 18 }],
      rows: [
        { cells: ['addition', 'وَ · أَيْضًا', '{w|عِلَاوَةً عَلَى ذٰلِكَ}', 'عِلَاوَةً عَلَى ذٰلِكَ، أَطْمَحُ إِلَى البَحْثِ العِلْمِيِّ.'] },
        { cells: ['contrast', 'لٰكِنْ', '{e|عَلَى الرَّغْمِ مِنْ ذٰلِكَ}', 'عَلَى الرَّغْمِ مِنْ ذٰلِكَ، لَوْ بَدَأْتُ مُبَكِّرًا، لَكُنْتُ أَفْضَلَ.'] },
        { cells: ['other side', 'لٰكِنْ', '{e|مِنْ جِهَةٍ أُخْرَى}', 'مِنْ جِهَةٍ أُخْرَى، تَبْقَى المُنَافَسَةُ شَدِيدَةً.'] },
        { cells: ['condition', 'إِذَا', '{k|شَرِيطَةَ أَنْ}', 'سَأَنْجَحُ شَرِيطَةَ أَنْ {k|أَجْتَهِدَ}.'] },
        { cells: ['result', 'لِذٰلِكَ', '{m|نَتِيجَةً لِذٰلِكَ}', 'نَتِيجَةً لِذٰلِكَ، قُبِلْتُ فِي بَرْنَامَجٍ بَحْثِيٍّ.'] },
        { cells: ['conclusion', 'فِي النِّهَايَةِ', '{m|بِنَاءً عَلَى مَا سَبَقَ}', 'بِنَاءً عَلَى مَا سَبَقَ، التَّعْلِيمُ اسْتِثْمَارٌ فِي المُسْتَقْبَلِ.'] },
      ],
      ltr: true,
      foot: 'sharīṭata an + subjunctive (-a): sharīṭata an ajtahida. Rule of thumb: at least TWO formal connectors in 140 words.',
      notes: `GRAMMAR PART 2 — website rule “Lift register with connectors” (عِلَاوَةً عَلَى ذٰلِكَ · شَرِيطَةَ أَنْ) and the website vocabulary group “Formal connectors”.
Spelling: عِلَاوَةً (ʿilāwatan) — the website writes عَلَاوَةً; the kasra is correct (cf. Urdu علاوہ).
بِالإِضَافَةِ إِلَى + genitive noun (not a sentence): بِالإِضَافَةِ إِلَى الدِّرَاسَةِ، أَعْمَلُ مُتَطَوِّعًا.
Website quiz 4 and 7: a formal connector (عِلَاوَةً عَلَى ذٰلِكَ · وَخِتَامًا) rather than وَ / ثُمَّ / وَأَيْضًا.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · one idhā and one law (website rule 3 + common error) · Develop', title: 'The possible and the hypothetical, side by side', ar: 'إِذَا وَلَوْ مَعًا',
      cards: [
        { chip: 'TYPE 1 · REAL · CORE', color: '1E6B52', head: 'إِذَا … سَـ', big: 'إِذَا قُبِلْتُ فِي كُلِّيَّةِ الطِّبِّ، سَأُكَرِّسُ جُهْدِي لِلْبَحْثِ.', en: 'If I am accepted into medical school, I will devote myself to research.', clue: 'Still possible.' },
        { chip: 'TYPE 2 · HYPOTHETICAL · DEVELOP', color: 'C0386B', head: 'لَوْ … لَـ', big: 'لَوْ تَوَافَرَتِ المَوَارِدُ، لَتَفَوَّقْتُ أَكْثَرَ.', en: 'Had the resources been available, I would have excelled more.', clue: 'It did not happen.' },
        { chip: 'TYPE 2 + PAST PERFECT · STRETCH', color: '6B4C9A', head: 'لَوْ … لَكُنْتُ قَدْ', big: 'لَوْ تَوَافَرَتْ لِي مَوَارِدُ أَفْضَلُ مُبَكِّرًا، لَكُنْتُ قَدْ تَقَدَّمْتُ أَكْثَرَ.', en: 'If better resources had been available early, I would have progressed further.', clue: '2 structures.' },
      ],
      error: { text: 'Website mistake 3: kāna must agree with “I” — kuntu.', pairs: [['كُنْتُ قَدْ قَرَّرْتُ تَخَصُّصِي', 'كَانَ قَدْ قَرَّرْتُ تَخَصُّصِي']] },
      notes: `GRAMMAR PART 3 — website rule “Both conditionals in analysis” and common error: “using two Type 1 conditionals instead of one of each type. Range rewards variety and the real / hypothetical contrast.”
Website mistake 1: إِذَا قُبِلْتُ سَأَدْرُسُ؛ وَإِذَا تَوَافَرَ الدَّعْمُ سَأَتَفَوَّقُ ✗ (two Type 1) → … وَلَوْ تَوَافَرَ الدَّعْمُ لَتَفَوَّقْتُ.
Card 3 is from the website model: لَكُنْتُ قَدْ تَقَدَّمْتُ = Type 2 result + past perfect (“I would have progressed”) — a two-marker clause.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · one sentence, three structures (website teaching point 1 + challenge) · Stretch', title: 'Build the triple sentence', ar: 'جُمْلَةٌ وَاحِدَةٌ، ثَلَاثُ بُنًى',
      cols: [{ label: 'Step', w: 1.6 }, { label: 'Sentence', w: 8.3, size: 18 }, { label: 'Structures', w: 2.43 }],
      rows: [
        { core: true, cells: ['1', '{e|كَانَ} مُرْشِدِي {e|قَدْ نَصَحَنِي}.', 'past perfect'] },
        { core: true, cells: ['2', '{e|كَانَ} مُرْشِدِي {e|قَدْ} {m|أَشَارَ إِلَى أَنَّنِي} {w|سَأَنْجَحُ}.', '+ reported + future'] },
        { cells: ['3', '{e|كَانَ} مُرْشِدِي {e|قَدْ} {m|أَشَارَ إِلَى أَنَّنِي} {w|سَأَنْجَحُ}، {p|وَلَوْ تَوَافَرَتِ} المَوَارِدُ، {p|لَتَفَوَّقْتُ} أَكْثَرَ.', '+ Type 2 = 4'] },
        { cells: ['4', '{w|عِلَاوَةً عَلَى ذٰلِكَ}، {m|أَكَّدَ أَنَّ} اجْتِهَادِي {w|سَيُثْمِرُ} {k|إِذَا} وَاصَلْتُ.', 'connector + reported + Type 1'] },
      ],
      ltr: true,
      foot: 'Website teaching point: “That density of range is what a top Paper 4 answer looks like.” One such sentence per article is enough.',
      notes: `GRAMMAR PART 4 — website teaching point “One sentence can carry three structures” (كَانَ مُرْشِدِي قَدْ أَشَارَ إِلَى أَنَّنِي سَأَنْجَحُ، وَلَوْ تَوَافَرَتِ المَوَارِدُ، لَتَفَوَّقْتُ أَكْثَرَ) and the website challenge “Draft one sentence that combines a past perfect, reported speech and a Type 2 conditional”.
Build it live, adding one structure per step. Row 4 is teacher-built (connector + reported + Type 1, with idhā at the end — also correct).
Warn: accuracy first. A triple sentence with a wrong particle (qāla anna) loses more than it gains.`,
    },
  ],
  quick: [0, 1, 2, 4],
  rest: [3, 5, 6, 7],
  ido: {
    title: 'Watch me build the article',
    steps: [
      { head: 'Background', ar: '{e|كُنْتُ قَدْ قَرَّرْتُ} …', think: 'Past perfect.' },
      { head: 'Reality', ar: '{m|أَشَارَ} أُسْتَاذِي {m|إِلَى أَنَّنِي} …', think: 'Reported.' },
      { head: 'Analysis', ar: '{k|إِذَا قُبِلْتُ} … {p|لَوْ تَوَافَرَتْ} …', think: 'Both types.' },
      { head: 'Conclusion', ar: '{w|وَخِتَامًا، سَوْفَ} …', think: 'Future + connector.' },
    ],
    legend: ['e', 'm', 'k', 'p', 'w'], legendLabels: { e: 'PAST PERFECT', m: 'REPORTED', k: 'TYPE 1', p: 'TYPE 2', w: 'FUTURE + CONNECTOR' },
    model: '{e|كُنْتُ قَدْ قَرَّرْتُ} دِرَاسَةَ الطِّبِّ مُنْذُ المَرْحَلَةِ الإِعْدَادِيَّةِ. أَدْرُسُ الآنَ فِي السَّنَةِ الأَخِيرَةِ، وَقَدْ {m|أَشَارَ} أُسْتَاذِي {m|إِلَى أَنَّنِي} مُؤَهَّلٌ لِلْمُنَافَسَةِ. {k|إِذَا قُبِلْتُ} فِي كُلِّيَّةِ الطِّبِّ، {k|سَأُكَرِّسُ} جُهْدِي لِلْبَحْثِ العِلْمِيِّ. عَلَى الرَّغْمِ مِنْ ذٰلِكَ، {p|لَوْ تَوَافَرَتْ} لِي مَوَارِدُ أَفْضَلُ مُبَكِّرًا، {p|لَكُنْتُ} قَدْ تَقَدَّمْتُ أَكْثَرَ. {w|وَخِتَامًا، سَوْفَ} أَسْعَى إِلَى خِدْمَةِ مُجْتَمَعِي.',
    modelEn: 'I had decided to study medicine since middle school. I am now in my final year, and my teacher has pointed out that I am qualified to compete. If I am accepted into medical school, I will devote my effort to scientific research. Despite that, if better resources had been available to me early, I would have progressed further. In conclusion, I will strive to serve my community.',
    notes: 'I DO (3 min) — the skeleton of the website model. Build it paragraph by paragraph, counting structures aloud: past perfect (1) · reported speech (2) · Type 1 (3) · connector + Type 2 (4–5) · connector + future (6–7). “Five paragraphs’ worth of Range in five sentences.”',
  },
  patternEn: ['I had decided on my specialism before secondary school', 'if I am accepted I will devote my effort, and had the resources been available I would have excelled', 'moreover, my adviser pointed out that I am qualified'],
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · upgrade the sentence (website model and mistakes)', title: 'From plain to Paper 4', ar: 'حَسِّنِ الجُمْلَةَ',
      cols: [{ label: 'Plain sentence', w: 3.4, size: 20 }, { label: 'Paper 4 sentence', w: 6.6, size: 18 }, { label: 'Structure', w: 2.33 }],
      rows: [
        { core: true, cells: ['قَرَّرْتُ دِرَاسَةَ الطِّبِّ.', 'كُنْتُ قَدْ قَرَّرْتُ دِرَاسَةَ الطِّبِّ مُنْذُ المَرْحَلَةِ الإِعْدَادِيَّةِ.', 'past perfect'] },
        { core: true, cells: ['أُسْتَاذِي يَقُولُ: أَنْتَ مُؤَهَّلٌ.', 'أَشَارَ أُسْتَاذِي إِلَى أَنَّنِي مُؤَهَّلٌ لِلْمُنَافَسَةِ.', 'reported speech'] },
        { cells: ['أُرِيدُ كُلِّيَّةَ الطِّبِّ.', 'إِذَا قُبِلْتُ فِي كُلِّيَّةِ الطِّبِّ، سَأُكَرِّسُ جُهْدِي لِلْبَحْثِ.', 'Type 1'] },
        { cells: ['مَا كَانَ عِنْدِي مَوَارِدُ.', 'لَوْ تَوَافَرَتْ لِي مَوَارِدُ أَفْضَلُ، لَكُنْتُ قَدْ تَقَدَّمْتُ أَكْثَرَ.', 'Type 2'] },
        { cells: ['أُرِيدُ أَنْ أُسَاعِدَ النَّاسَ.', 'وَخِتَامًا، سَوْفَ أَسْعَى إِلَى خِدْمَةِ مُجْتَمَعِي.', 'future + connector'] },
      ],
      ltr: true,
      foot: 'Cover the middle column: upgrade each plain sentence, then compare with the website model.',
      notes: `WE DO (3 min) — an upgrade drill built from the website model. The left-hand sentences are accurate but show almost no Range — that is the point.
Core: rows 1–2. Develop: rows 1–4. Stretch: all five, then join rows 2 and 4 into one triple sentence (Part 4).
Row 2: «أَنْتَ مُؤَهَّلٌ» → إِلَى أَنَّنِي مُؤَهَّلٌ — the pronoun switches to “I” (P2-L02).`,
    },
    {
      type: 'formsTable', stage: 'wedo', min: 2, flex: true, eyebrow: 'We do · build an article line (website live builder)', title: 'Background + analysis + conclusion', ar: 'ابْنِ سَطْرًا غَنِيًّا',
      cols: [{ label: '1 · Background', w: 3.9, size: 16 }, { label: '2 · Analysis (idhā · law)', w: 4.2, size: 16 }, { label: '3 · Conclusion', w: 4.23, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Say it, then write three different versions.',
      notes: `WE DO (flex) — the website live builder: “Build a range-rich article line from a background, an analysis and a conclusion.” Website feedback: any three different combinations work.
Ask: which combination has the MOST structures? (e.g. row 2 + row 2 + row 3: past perfect + reported + Type 2 + connector + reported).`,
    },
  ],
  sorterTitle: 'Background, analysis or conclusion?',
  sorterNotes: 'Then pick one card from each column and join them into a three-sentence mini-article with a connector between each.',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns, final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'the connector spelt عِلَاوَةً (website: عَلَاوَةً); waṣl alif shown without a kasra; one sorter card corrected (كَانَتْ قَدِ اهْتَمَمْتُ → كُنْتُ قَدِ اهْتَمَمْتُ); rule headings and formulas in English and transliteration; the upgrade drill and triple-sentence build are teacher-built from the website model and teaching points; the website visual game repeats the P2-L01 / P2-L03 cards and is not used. All other website items are used as published.',
  hints: ['Two idhā = Range?', 'qāla + anna?', 'kāna qad + qarrartu?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nListen for: the three things Q3 marks.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5 — and write down the order of the four moves.',
  gloss: [
    ['فِي الوَرَقَةِ الرَّابِعَةِ، يُقَيِّمُ المُصَحِّحُ ثَلَاثَةَ أَشْيَاءَ: المُحْتَوَى، وَالنِّطَاقَ، وَالدِّقَّةَ.', 'In Paper 4, the examiner assesses three things: content, range and accuracy.'],
    ['وَفِي السَّنَةِ العَاشِرَةِ، النِّطَاقُ يَعْنِي دَمْجَ خَمْسِ بُنًى: المَاضِي التَّامِّ، وَالكَلَامِ المَنْقُولِ، وَالشَّرْطِ بِنَوْعَيْهِ، وَالمُسْتَقْبَلِ.', 'At this level, range means integrating five structures: the past perfect, reported speech, both types of conditional, and the future.'],
    ['النَّصُّ الَّذِي يَحْمِلُ «إِذَا» وَ«لَوْ» مَعًا يُظْهِرُ أَنَّ الكَاتِبَ يُمَيِّزُ بَيْنَ المُمْكِنِ وَالافْتِرَاضِيِّ.', 'A text that carries both idhā and law shows that the writer distinguishes the possible from the hypothetical.'],
    ['افْتَحْ بِخَلْفِيَّةٍ فِي المَاضِي التَّامِّ، ثُمَّ اعْرِضِ الوَاقِعَ الحَالِيَّ بِالكَلَامِ المَنْقُولِ، ثُمَّ حَلِّلْ بِالشَّرْطَيْنِ،', 'Open with a background in the past perfect, then present the current reality with reported speech, then analyse with both conditionals,'],
    ['وَاخْتِمْ بِالمُسْتَقْبَلِ وَرَابِطٍ رَسْمِيٍّ. اُكْتُبْ مِئَةً وَأَرْبَعِينَ إِلَى مِئَةٍ وَخَمْسِينَ كَلِمَةً.', 'and close with the future and a formal connector. Write 140 to 150 words.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا خَلْفِيَّتُكَ فِي المَاضِي التَّامِّ؟' },
      { route: 'develop', ar: 'مَاذَا قَالَ مُعَلِّمُوكَ عَنْكَ؟' },
      { route: 'stretch', ar: 'مَا جُمْلَتُكَ الشَّرْطِيَّةُ مِنَ النَّوْعِ الثَّانِي؟' },
    ],
    stems: [
      { route: 'core', ar: 'كُنْتُ قَدْ قَرَّرْتُ ______ مُنْذُ ______ .' },
      { route: 'develop', ar: 'أَشَارَ أُسْتَاذِي إِلَى أَنَّنِي ______ .' },
      { route: 'stretch', ar: 'لَوْ تَوَافَرَتْ لِي ______ ، ______ أَكْثَرَ.' },
    ],
    modelEn: ['What is your background?', 'I had decided on my field early, and I had completed a research project.', 'And your Type 2 sentence?', 'If better resources had been available to me, I would have excelled more — but if I work hard, I will achieve my ambition.'],
    notes: 'Website prompts and model: students TALK THROUGH their plan with a partner before writing (2 min each). The partner counts the five structures on their fingers. Stretch result needs la-: لَتَفَوَّقْتُ · لَكُنْتُ قَدْ تَقَدَّمْتُ. To a girl: خَلْفِيَّتُكِ · مُعَلِّمُوكِ · عَنْكِ · جُمْلَتُكِ.',
  },
  write: {
    core: { amount: '4 paragraphs', how: 'Website Core: the four-paragraph plan with one sentence per structure.' },
    develop: { amount: '140 words', how: 'Website Develop: expand to 140 words with the five structures labelled.' },
    stretch: { amount: '140–155 words', how: 'Website task: all five P2 structures, two formal connectors and one sentence combining three structures.' },
  },
  frames: {
    core: [
      { en: 'I had decided … since …', ar: 'كُنْتُ قَدْ قَرَّرْتُ ______ مُنْذُ ______ .' },
      { en: 'My teacher pointed out that I …', ar: 'أَشَارَ أُسْتَاذِي إِلَى أَنَّنِي ______ .' },
      { en: 'If I am accepted at …, I will …', ar: 'إِذَا قُبِلْتُ فِي ______ ، ______ .' },
      { en: 'In conclusion, I will strive to …', ar: 'وَخِتَامًا، سَوْفَ أَسْعَى إِلَى ______ .' },
    ],
    develop: [
      { en: 'If better resources had been available to me, …', ar: 'لَوْ تَوَافَرَتْ لِي مَوَارِدُ أَفْضَلُ، ______ .' },
      { en: 'Moreover, I believe that …', ar: 'عِلَاوَةً عَلَى ذٰلِكَ، أَرَى أَنَّ ______ .' },
      { en: 'Despite that, …', ar: 'عَلَى الرَّغْمِ مِنْ ذٰلِكَ، ______ .' },
      { en: 'I will succeed, provided that I …', ar: 'سَأَنْجَحُ شَرِيطَةَ أَنْ ______ .' },
    ],
    bank: ['لَكُنْتُ قَدْ تَقَدَّمْتُ أَكْثَرَ', 'لَتَفَوَّقْتُ', 'سَأُكَرِّسُ جُهْدِي', 'مُؤَهَّلٌ لِلْمُنَافَسَةِ', 'وَأَكَّدَ أَنَّ', 'كُلِّيَّةُ الطِّبِّ', 'مَشْرُوعًا بَحْثِيًّا', 'خِدْمَةِ مُجْتَمَعِي', 'التَّعْلِيمُ اسْتِثْمَارٌ', 'أَقْوَى أَدَاةٍ لِلتَّغْيِيرِ', 'أَجْتَهِدَ', 'مُوَاكَبَةِ التَّغْيِيرِ'],
  },
  stretch: [
    ['وَحَصَلْتُ عَلَى خِبْرَةٍ فِي مُسْتَشْفًى', 'and I gained experience in a hospital'],
    ['وَأَكَّدَ أَنَّ اجْتِهَادِي سَيُثْمِرُ', 'and he stressed that my hard work will pay off'],
    ['لَكُنْتُ قَدْ تَقَدَّمْتُ أَكْثَرَ', 'I would have progressed further'],
    ['أَقْوَى مِنَ المَالِ فِي تَغْيِيرِ حَيَاةِ الفَرْدِ', 'stronger than money in changing a person’s life'],
    ['فَالتَّعْلِيمُ اسْتِثْمَارٌ فِي المُسْتَقْبَلِ', 'for education is an investment in the future'],
  ],
  modelEn: 'I had decided to study medicine since middle school, and by secondary school I had completed a research project and gained experience in a hospital. I am now in my final year, and my teacher has pointed out that I am qualified to compete, and stressed that my hard work will pay off. If I am accepted into medical school, I will devote my effort to scientific research. Despite that, if better resources had been available to me early, I would have progressed further. Moreover, I believe that good education is stronger than money in changing a person’s life. In conclusion, I will strive to serve my community, for education is an investment in the future.',
  find: ['two past perfects (kuntu qad)', 'two reported clauses (ashāra ilā anna · akkada anna)', 'one idhā AND one law conditional', 'three formal connectors + sawfa'],
  modelNotes: 'Website writing model (≈ 145 words). Range: كُنْتُ قَدْ قَرَّرْتُ · كُنْتُ قَدْ أَنْجَزْتُ (past perfect) · أَشَارَ … إِلَى أَنَّنِي · أَكَّدَ أَنَّ … سَيُثْمِرُ (reported + future) · إِذَا قُبِلْتُ … سَأُكَرِّسُ (Type 1) · لَوْ تَوَافَرَتْ … لَكُنْتُ قَدْ تَقَدَّمْتُ (Type 2 + past perfect) · عَلَى الرَّغْمِ مِنْ ذٰلِكَ · عِلَاوَةً عَلَى ذٰلِكَ · وَخِتَامًا (connectors) · أَقْوَى مِنَ (comparative) · سَوْفَ أَسْعَى (future).',
  selfCheck: [
    { route: 'core', text: 'Background: kuntu qad + past (kāna agrees with “I”).' },
    { route: 'core', text: 'Reported speech with a verb other than qāla (ashāra ilā anna · akkada anna).' },
    { route: 'develop', text: 'One idhā … sa- AND one law … la- (not two idhā).' },
    { route: 'develop', text: 'Two formal connectors and a sawfa conclusion; 140–155 words.' },
    { route: 'stretch', text: 'One sentence carries three structures — and it is accurate.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['المَرْحَلَةِ الإِعْدَادِيَّةِ', 'middle school'], ['أَنْجَزْتُ', 'I completed'], ['مَشْرُوعًا بَحْثِيًّا', 'a research project'], ['مُؤَهَّلٌ لِلْمُنَافَسَةِ', 'qualified to compete'], ['سَيُثْمِرُ', 'will bear fruit'],
    ['كُلِّيَّةِ الطِّبِّ', 'medical school'], ['سَأُكَرِّسُ جُهْدِي', 'I will devote my effort'], ['تَوَافَرَتْ', 'were available'], ['مَوَارِدُ', 'resources'], ['خِدْمَةِ مُجْتَمَعِي', 'serving my community'],
  ],
  prep: {
    words: [['مُشَتِّتٌ', 'a distractor (in a test)', 'pl. مُشَتِّتَاتٌ'], ['كَلِمَةٌ مِفْتَاحِيَّةٌ', 'a key word', 'pl. كَلِمَاتٌ'], ['مَنْحَةٌ دِرَاسِيَّةٌ', 'a scholarship', 'pl. مِنَحٌ'], ['نِسْبَةُ القَبُولِ', 'the acceptance rate', '—'], ['ضَغْطُ الامْتِحَانَاتِ', 'exam pressure', '—']],
    questionEn: 'When you listen, how can you tell a real condition from a hypothetical one?',
    questionAr: 'أَعْرِفُ أَنَّ الشَّرْطَ افْتِرَاضِيٌّ عِنْدَمَا أَسْمَعُ « ______ » فِي البِدَايَةِ وَ« ______ » فِي الجَوَابِ.',
    homework: {
      core: 'Finish the four-paragraph plan with one sentence per structure.',
      develop: 'Write the 140-word version and label the five structures in colour.',
      stretch: 'Website writing task: the full 140–155-word article, with one triple-structure sentence.',
    },
    wordsSource: 'The five words come from the website P2-L10 vocabulary (listening for structure).',
  },
  remember: 'Remember: four moves — background (kuntu qad) · reality (ashāra ilā anna) · analysis (idhā … sa- AND law … la-) · conclusion (wa-khitāman, sawfa) — at least two formal connectors, and one sentence that does three jobs.',
});

module.exports = { meta, slides };
