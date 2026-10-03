'use strict';
/* D6-L10 · Listening — Culture, Celebration and Identity Texts — website: Pathways › Development › D6 › D6-L10 (tense from the verb shape — suffix · prefix · سَـ;
 * كَانَ + present = past habit vs a single past event; qualifiers أَحْيَانًا · لَيْسَ دَائِمًا · فِي بَعْضِ العَائِلَاتِ; attribution in a dialogue: who said what).
 * Listening-skills lesson. Website vocabulary, rules, quiz, sorter, listening, transcript reading (Nūr and Sami), speaking and writing used as published; the
 * website “common mistakes” are written as English listening habits, so the repair slide uses three Arabic sentence pairs built from the same three points;
 * English added to the patterns and speaking model. The website visual game repeats D6-L02, so it is skipped. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D6')({
  n: 10, fileTitle: 'Listening_Culture_Celebration_Identity', chip: 'Listening Skills',
  title: 'Listening — Culture, Celebration and Identity Texts', arabic: 'الاِسْتِمَاعُ — نُصُوصُ الثَّقَافَةِ وَالاحْتِفَالِ وَالهُوِيَّةِ',
  focus: 'Catch three things at speed: the TENSE in the verb shape (احْتَفَلْنَا · نَحْتَفِلُ · سَنَحْتَفِلُ · كُنَّا نَحْتَفِلُ), the HEDGE that narrows a claim (فِي بَعْضِ العَائِلَاتِ · لَيْسَ دَائِمًا) — and WHO said it in a dialogue.',
  icon: 'FaHeadphones', iconSet: 'fa6',
});

const raw = D.site('D6-L10');
const site = { ...raw, grammar: { ...raw.grammar, rules: raw.grammar.rules.map((r) => ({ ...r, examples: r.examples.map((e) => e.replace(/ — [a-z]+$/, '')) })) } };
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D6-L10', {
  support: `• This is a LISTENING-SKILLS lesson: the website text is one person’s identity across three tenses (childhood · last year · now · next year), with a hedge in the middle.
• Before listening, students mark every question P / N / F (past / now / future) and circle any question about “all / some / always”. Then they listen for the verb form and the qualifier, not the topic.
• Core: questions 1, 2 and 3 + sort ten verbs P / N / F. Develop: all questions, justifying two from the verb form. Stretch: the website ~70-word third-person summary that reports the hedge exactly.
• The transcript-reading task (Nūr and Sami) trains attribution: who said what. Read the listening text yourself at natural speed; do NOT show the script until after the second listening.`,
  teach: 'Verb shape = tense; hedges narrow claims; track the speaker.',
  wedo: 'Sort verbs by tense, fix hedge and speaker slips, then one identity across three tenses.',
  next: { nextCode: 'D6-L11', nextTitle: 'D6 Consolidation — Complete Review and Speaking Preparation', nextAr: 'تَرْسِيخُ الوَحْدَةِ — مُرَاجَعَةٌ شَامِلَةٌ وَإِعْدَادُ التَّحَدُّثِ' },
  objectives: ['Recognise cultural vocabulary at speed in connected Arabic.', 'Tell past, present and future apart from the verb shape.', 'Hear a hedge (أَحْيَانًا · لَيْسَ دَائِمًا) and what it changes.', 'Reject a distractor with the wrong speaker or the wrong tense.'],
  rulesAr: 'تَمْيِيزُ الزَّمَنِ وَالمُتَحَدِّثِ وَالتَّحَفُّظِ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does المُعْتَقَدَاتُ mean?', ['beliefs', 'traditions', 'values'], 'Prepared at home (D6-L09).'),
      q('What does لَيْسَ دَائِمًا mean?', ['not always', 'always', 'never'], 'Prepared at home (D6-L09).'),
      q('What does فِي بَعْضِ العَائِلَاتِ mean?', ['in some families', 'in all families', 'in my family'], 'Prepared at home (D6-L09).'),
      q('Complete: لَا يُمْكِنُ إِنْكَارُ أَنَّ ___ جُزْءٌ مِنَ الهُوِيَّةِ.', ['اللُّغَةَ', 'اللُّغَةُ', 'اللُّغَةِ'], 'D6-L09: the noun after anna ends in -a.'),
      q('Complete: أَطْمَحُ ___ أَنْ أُتْقِنَ الفُصْحَى.', ['إِلَى', 'بِـ', 'عَلَى'], 'D6-L09.'),
    ],
    keyIdea: { text: 'The topic does not tell you the tense — the verb shape does. And one small hedge can change the answer.', ar: '{k|احْتَفَلْنَا} · {e|نَحْتَفِلُ} · {w|سَنَحْتَفِلُ} ‖ {k|فِي بَعْضِ} العَائِلَاتِ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D6-L09. Questions 4–5 retrieve D6-L09 (أَنَّ + accusative · أَطْمَحُ إِلَى).',
  },
  routes: {
    core: ['I can mark each question past, now or future.', 'I can hear the tense from the verb shape.'],
    develop: ['I can hear كَانَ + present as “used to”.', 'I can justify an answer from the verb form.'],
    stretch: ['I can report a hedge exactly, without widening it.', 'I can track who said what in a dialogue.'],
  },
  bridge: [
    { ar: 'عَقِيدَةٌ / مُعْتَقَدٌ', urdu: 'عقیدہ', tr: 'ʿaqīda', en: 'belief (same root)' },
    { ar: 'تَقْلِيدٌ', urdu: 'تقلید', tr: 'taqlīd', en: 'Arabic: tradition · Urdu (fiqh): following a school' },
    { ar: 'وَطَنٌ', urdu: 'وطن', tr: 'waṭan', en: 'homeland (same word)' },
    { ar: 'عَادَةً', urdu: 'عادت', tr: 'ʿādat', en: 'Urdu: a habit · Arabic عَادَةً: usually' },
    { ar: 'مُنَاسَبَةٌ', urdu: 'مناسب', tr: 'munāsib', en: 'Urdu: suitable · Arabic: an occasion' },
  ],
  bridgeNotes: 'URDU BRIDGE: عقیدہ، وطن are shared. CAREFUL: Urdu تقلید is a fiqh term (following a madhhab); Arabic التَّقَالِيدُ = cultural traditions. Urdu مناسب = suitable; Arabic المُنَاسَبَةُ = an occasion (المُنَاسَبَاتُ = special occasions). Urdu عادت (habit) helps: Arabic عَادَةً = usually, a present-habit signal.',
  core: ['المُعْتَقَدَاتُ', 'القِيَمُ', 'التَّقَالِيدُ', 'المُنَاسَبَةُ', 'الاِنْتِمَاءُ', 'الجَالِيَةُ', 'فِي الطُّفُولَةِ', 'عَادَةً', 'العَامَ القَادِمَ', 'أَحْيَانًا', 'لَيْسَ دَائِمًا', 'فِي بَعْضِ العَائِلَاتِ'],
  forms: {
    'المُعْتَقَدَاتُ': { tag: 'pl · sg', forms: [{ l: 'sg.', ar: 'مُعْتَقَدٌ' }] },
    'القِيَمُ': { tag: 'pl · sg', forms: [{ l: 'sg.', ar: 'قِيمَةٌ' }] },
    'التَّقَالِيدُ': { tag: 'pl · sg', forms: [{ l: 'sg.', ar: 'تَقْلِيدٌ' }] },
    'المُنَاسَبَةُ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'المُنَاسَبَاتُ' }] },
    'الوَطَنُ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'الأَوْطَانُ' }] },
    'الجَالِيَةُ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'الجَالِيَاتُ' }] },
  },
  vocabNotes: {
    0: 'Listening for culture: the nouns that carry the topic. Cards show singular / plural — listen for both.',
    1: 'Tense signals in speech: each time phrase predicts the verb shape that follows (past · present habit · future).',
    2: 'Qualifiers to catch: each one NARROWS a claim. An option that says “all / always” after one of these is wrong.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · hear the tense in the verb shape (website rules 1–2)', title: 'Same celebration — four times', ar: 'شَكْلُ الفِعْلِ يُحَدِّدُ الزَّمَنَ',
      cols: [{ label: 'Verb shape', w: 2.8, size: 22 }, { label: 'Example (website)', w: 6.8, size: 22 }, { label: 'Time', w: 2.73 }],
      rows: [
        { core: true, cells: ['{k|احْتَفَلْنَا}', P('{k|احْتَفَلْنَا} فِي بَلَدِ أُسْرَتِي', 'we celebrated in my family’s country'), 'past · suffix'] },
        { core: true, cells: ['{w|كُنَّا نَحْتَفِلُ}', P('فِي الطُّفُولَةِ {w|كُنَّا نَحْتَفِلُ} بِالعِيدِ', 'in childhood we used to celebrate Eid'), 'past habit'] },
        { core: true, cells: ['{e|نَحْتَفِلُ}', P('{e|نَحْتَفِلُ} عَادَةً فِي المَرْكَزِ', 'we usually celebrate at the centre'), 'present · prefix'] },
        { core: true, cells: ['{w|سَنُنَظِّمُ}', P('العَامَ القَادِمَ {w|سَنُنَظِّمُ} حَفْلًا', 'next year we will organise a party'), 'future · sa-'] },
      ],
      ltr: true,
      foot: 'The سَـ is short but decisive — listen at the very start of the verb.',
      notes: `GRAMMAR PART 1 — website rules “Tense from the verb shape” (suffix = past · prefix = present · سَـ = future; the topic does not tell you the tense, the word shape does) and “Past habit versus single event” (كَانَ يَحْتَفِلُ = used to celebrate; احْتَفَلَ = celebrated once).
Before listening: mark each question P / N / F, then listen for that shape.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · hedges and speakers (website rules 3–4) · Develop / Stretch', title: 'Some, not all — and who said it?', ar: 'التَّحَفُّظُ وَالمُتَحَدِّثُ',
      cards: [
        { chip: 'HEDGE · CORE', color: '1E6B52', head: 'فِي بَعْضِ العَائِلَاتِ', big: 'فِي بَعْضِ العَائِلَاتِ تُوَزَّعُ العِيدِيَّةُ.', en: 'In some families Eid money is given out.', clue: 'Some — not all.' },
        { chip: 'HEDGE · DEVELOP', color: '1D5FBF', head: 'لَيْسَ دَائِمًا', big: 'لَيْسَ دَائِمًا يَتَشَابَهُ الاحْتِفَالُ.', en: 'The celebration is not always the same.', clue: 'Not always — not never.' },
        { chip: 'SPEAKER · STRETCH', color: '6B4C9A', head: 'قَالَتْ نُورُ إِنَّهَا', big: 'قَالَتْ نُورُ إِنَّهَا تَحْتَفِظُ بِلُغَتِهَا.', en: 'Nūr said that she keeps her language.', clue: 'Note A / B / both.' },
      ],
      error: { text: 'Website mistake: a hedge narrows the claim.', pairs: [['فِي بَعْضِ العَائِلَاتِ', 'فِي كُلِّ العَائِلَاتِ']] },
      notes: `GRAMMAR PART 2 — website rules “Qualified claims” (a qualifier narrows the claim; any option that widens it back to everyone is wrong) and “Attribution in a dialogue” (note each claim against its speaker as you listen; decide only afterwards).
Website teaching points: “A hedge changes the answer … Examiners build distractors from exactly this difference.” · “A distractor often reports something true, but attributes it to the wrong speaker.”`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me annotate, then listen',
    steps: [
      { head: 'Mark', ar: 'P · N · F', think: 'Past, now or future?' },
      { head: 'Shape', ar: '{w|كُنَّا نَحْتَفِلُ} · {e|نَحْتَفِلُ}', think: 'Used to vs now.' },
      { head: 'Hedge', ar: '{k|فِي بَعْضِ} العَائِلَاتِ', think: 'Some, not all.' },
      { head: 'Reject', ar: '{k|لَيْسَ دَائِمًا}', think: 'Cross out “always”.' },
    ],
    legend: ['w', 'e', 'k'], legendLabels: { w: 'PAST / FUTURE', e: 'PRESENT', k: 'HEDGE' },
    model: 'فِي الطُّفُولَةِ {w|كُنَّا نَحْتَفِلُ} بِالعِيدِ فِي بَلَدِ أُسْرَتِي. أَمَّا الآنَ {e|فَنَحْتَفِلُ} عَادَةً فِي المَرْكَزِ الثَّقَافِيِّ. وَ{k|فِي بَعْضِ العَائِلَاتِ} تُوَزَّعُ العِيدِيَّةُ عَلَى الأَطْفَالِ، وَلٰكِنْ {k|لَيْسَ دَائِمًا}. وَالعَامَ القَادِمَ {w|سَنُنَظِّمُ} حَفْلًا أَكْبَرَ.',
    modelEn: 'In childhood we used to celebrate Eid in my family’s country. Now we usually celebrate at the cultural centre. In some families Eid money is given to the children, but not always. And next year we will organise a bigger party.',
    notes: 'I DO (3 min) — model the annotate → predict → hear → reject routine on question 4 (the Eid-money hedge). The copy box shows the transcript AFTER annotation (show it only after the listening).',
  },
  patternEn: ['he used to celebrate every year', 'in some families', 'we will celebrate next year'],
  sorterNotes: 'Then say one sentence about your family in each column: كُنَّا … · عَادَةً … · سَـ …',
  mistakes: [
    { wrong: 'كُلُّ العَائِلَاتِ تُوَزِّعُ العِيدِيَّةَ.', right: 'فِي بَعْضِ العَائِلَاتِ تُوَزَّعُ العِيدِيَّةُ.', why: 'The speaker said some families, not all.' },
    { wrong: 'فِي الطُّفُولَةِ يَحْتَفِلُ بِالعِيدِ هُنَاكَ.', right: 'فِي الطُّفُولَةِ كَانَ يَحْتَفِلُ بِالعِيدِ هُنَاكَ.', why: 'Used to = kāna + present verb.' },
    { wrong: 'قَالَ سَامِي إِنَّهُ كَانَ يَتَحَدَّثُ العَرَبِيَّةَ فِي البَيْتِ فَقَطْ.', right: 'قَالَتْ نُورُ إِنَّهَا كَانَتْ تَتَحَدَّثُ العَرَبِيَّةَ فِي البَيْتِ فَقَطْ.', why: 'Nūr said this, not Sami.' },
  ],
  patch: {
    grammar: site.grammar,
    speaking: {
      model: [
        ['A', 'مَاذَا كَانَ يَفْعَلُ فِي الطُّفُولَةِ؟', 'What did he use to do in childhood?'],
        ['B', 'كَانَ يَحْتَفِلُ بِالعِيدِ فِي بَلَدِ أُسْرَتِهِ، وَكَانَتْ جَدَّتُهُ تُعِدُّ الحَلْوَى.', 'He used to celebrate Eid in his family’s country, and his grandmother used to make the sweets.'],
        ['A', 'وَهَلْ قَالَ إِنَّ كُلَّ العَائِلَاتِ تَفْعَلُ ذٰلِكَ؟', 'And did he say that all families do that?'],
        ['B', 'لَا، قَالَ فِي بَعْضِ العَائِلَاتِ وَلَيْسَ دَائِمًا، لِأَنَّ العَادَاتِ تَخْتَلِفُ.', 'No — he said in some families and not always, because customs differ.'],
      ],
    },
  },
  patchNote: 'the website common mistakes (English listening habits) rebuilt as Arabic sentence pairs on the same three points; English added to the patterns and speaking model; the website visual game repeats D6-L02 and is skipped.',
  hints: ['Some or all?', 'Used to → kāna + ?', 'Who said it — Nūr or Sami?'],
  coreTip: 'Mark P / N / F first.\nCore: questions 1, 2 and 3.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write the verb or hedge that proves each answer.',
  gloss: [
    ['فِي الطُّفُولَةِ كُنَّا نَحْتَفِلُ بِالعِيدِ فِي بَلَدِ أُسْرَتِي، وَكَانَتْ جَدَّتِي تُعِدُّ الحَلْوَى بِنَفْسِهَا.', 'In childhood we used to celebrate Eid in my family’s country, and my grandmother used to make the sweets herself.'],
    ['وَفِي العَامِ المَاضِي زُرْنَا الأَقَارِبَ هُنَاكَ بَعْدَ غِيَابٍ طَوِيلٍ.', 'Last year we visited our relatives there after a long absence.'],
    ['أَمَّا الآنَ فَنَحْتَفِلُ عَادَةً فِي المَرْكَزِ الثَّقَافِيِّ مَعَ الجَالِيَةِ، وَتُزَيَّنُ القَاعَةُ وَتُتَبَادَلُ التَّهَانِي.', 'Now we usually celebrate at the cultural centre with the community; the hall is decorated and greetings are exchanged.'],
    ['وَفِي بَعْضِ العَائِلَاتِ تُوَزَّعُ العِيدِيَّةُ عَلَى الأَطْفَالِ، وَلٰكِنْ لَيْسَ دَائِمًا؛ فَالعَادَاتُ تَخْتَلِفُ. فِي رَأْيِي الاِنْتِمَاءُ لَا يَعْنِي مَكَانًا وَاحِدًا.', 'In some families Eid money is given to the children, but not always — customs differ. In my opinion, belonging does not mean one place.'],
    ['وَالعَامَ القَادِمَ سَنُنَظِّمُ حَفْلًا أَكْبَرَ، وَسَنَدْعُو الجِيرَانَ لِكَيْ يَتَعَرَّفُوا عَلَى تَقَالِيدِنَا.', 'Next year we will organise a bigger party, and we will invite the neighbours so they get to know our traditions.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَاذَا كَانَ يَفْعَلُ المُتَحَدِّثُ فِي الطُّفُولَةِ؟' },
      { route: 'develop', ar: 'مَاذَا يَفْعَلُ الآنَ عَادَةً؟ وَهَلْ هُنَاكَ تَحَفُّظٌ فِي كَلَامِهِ؟' },
      { route: 'stretch', ar: 'مَا خُطَّتُهُ لِلْعَامِ القَادِمِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'فِي الطُّفُولَةِ كَانَ ______ ، وَكَانَتْ جَدَّتُهُ ______ .' },
      { route: 'develop', ar: 'الآنَ يَحْتَفِلُ عَادَةً ______ ، وَقَالَ: فِي بَعْضِ ______ .' },
      { route: 'stretch', ar: 'العَامَ القَادِمَ سَـ ______ لِكَيْ ______ .' },
    ],
    modelEn: ['What did he use to do in childhood?', 'He used to celebrate Eid in his family’s country, and his grandmother used to make the sweets.'],
    notes: 'Website prompts and model: retell in the THIRD person (we → he): كُنَّا نَحْتَفِلُ → كَانَ يَحْتَفِلُ · زُرْنَا → زَارَ · نَحْتَفِلُ → يَحْتَفِلُ · سَنُنَظِّمُ → سَيُنَظِّمُ. Report the hedge EXACTLY — never widen it.',
  },
  write: {
    core: { amount: '6 sentences', how: 'Two past, two present, two future sentences about the speaker (frames).' },
    develop: { amount: '50–60 words', how: 'A third-person summary with كَانَ + present and one reported hedge.' },
    stretch: { amount: '≈ 70 words', how: 'Website task: past habit · present custom · exact hedge · future plan.' },
  },
  frames: {
    core: [
      { en: 'In childhood he used to celebrate …', ar: 'فِي الطُّفُولَةِ كَانَ يَحْتَفِلُ بِـ ______ .' },
      { en: 'Last year he visited …', ar: 'فِي العَامِ المَاضِي زَارَ ______ .' },
      { en: 'Now he usually celebrates …', ar: 'أَمَّا الآنَ فَيَحْتَفِلُ عَادَةً ______ .' },
      { en: 'Next year he will organise …', ar: 'العَامَ القَادِمَ سَيُنَظِّمُ ______ .' },
    ],
    develop: [
      { en: 'His grandmother used to …', ar: 'كَانَتْ جَدَّتُهُ ______ .' },
      { en: '… is decorated and … are exchanged.', ar: 'تُزَيَّنُ ______ ، وَتُتَبَادَلُ ______ .' },
      { en: 'He said that in some families …', ar: 'وَقَالَ إِنَّهُ فِي بَعْضِ العَائِلَاتِ ______ .' },
      { en: '… but not always, because …', ar: 'وَلٰكِنْ لَيْسَ دَائِمًا، لِأَنَّ ______ .' },
    ],
    bank: ['كَانَ يَحْتَفِلُ', 'كَانَتْ تُعِدُّ', 'زَارَ', 'عَادَةً', 'يَحْتَفِلُ', 'تُزَيَّنُ', 'تُتَبَادَلُ', 'فِي بَعْضِ العَائِلَاتِ', 'لَيْسَ دَائِمًا', 'أَحْيَانًا', 'سَيُنَظِّمُ', 'سَيَدْعُو'],
  },
  stretch: [
    ['بَعْدَ غِيَابٍ طَوِيلٍ', 'after a long absence'],
    ['تُعِدُّ الحَلْوَى بِنَفْسِهَا', 'made the sweets herself'],
    ['لِأَنَّ العَادَاتِ تَخْتَلِفُ', 'because customs differ'],
    ['الاِنْتِمَاءُ لَا يَعْنِي مَكَانًا وَاحِدًا', 'belonging does not mean one place'],
    ['لِكَيْ يَتَعَرَّفُوا عَلَى تَقَالِيدِهِ', 'so they get to know his traditions'],
  ],
  modelEn: 'In childhood the speaker used to celebrate Eid in his family’s country, and his grandmother used to make the sweets herself. Last year he visited his relatives there. Now he usually celebrates at the cultural centre; the hall is decorated and greetings are exchanged. He said that Eid money is given out in some families, but not always, because customs differ. Next year he will organise a bigger party and invite the neighbours so they get to know his traditions.',
  find: ['كَانَ + present (twice)', 'a present habit with عَادَةً', 'the hedge reported exactly', 'two future verbs'],
  modelNotes: 'Website writing model. Evidence: كَانَ … يَحْتَفِلُ · كَانَتْ جَدَّتُهُ تُعِدُّ · زَارَ · يَحْتَفِلُ عَادَةً · تُزَيَّنُ · تُتَبَادَلُ · قَالَ إِنَّ … فِي بَعْضِ العَائِلَاتِ وَلَيْسَ دَائِمًا · سَيُنَظِّمُ · سَيَدْعُو.',
  selfCheck: [
    { route: 'core', text: 'I marked every question P / N / F before listening.' },
    { route: 'core', text: 'I took the tense from the verb shape, not the topic.' },
    { route: 'develop', text: 'I wrote كَانَ + present for “used to”.' },
    { route: 'develop', text: 'I switched “we” to “he” correctly.' },
    { route: 'stretch', text: 'I reported the hedge exactly, without widening it.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['تُعِدُّ', 'prepares'], ['الحَلْوَى', 'sweets'], ['بَعْدَ غِيَابٍ طَوِيلٍ', 'after a long absence'], ['القَاعَةُ', 'the hall'], ['التَّهَانِي', 'greetings'],
    ['العِيدِيَّةُ', 'Eid money'], ['تُوَزَّعُ', 'is distributed'], ['لَا يَعْنِي', 'does not mean'], ['حَفْلًا', 'a party'], ['تَقَالِيدِنَا', 'our traditions'],
  ],
  prep: {
    words: [['الطَّلَاقَةُ', 'fluency', '—'], ['دَعْنِي أُفَكِّرُ', 'let me think', '—'], ['عَفْوًا، أَقْصِدُ', 'sorry, I mean', '—'], ['عَلَى حَدِّ عِلْمِي', 'as far as I know', '—'], ['لَا أُعَمِّمُ', 'I do not generalise', 'يُعَمِّمُ he']],
    questionEn: 'Prepare a 30-second answer: “How does your family celebrate Eid?” — one past verb, one present verb and one hedge.',
    questionAr: 'فِي الطُّفُولَةِ كُنَّا … · الآنَ نَحْتَفِلُ … · وَفِي بَعْضِ العَائِلَاتِ …',
    homework: {
      core: 'Sort the ten transcript verbs into P / N / F; learn the five speaking words.',
      develop: 'A 50–60-word third-person summary of the listening.',
      stretch: 'Website writing task: a ≈ 70-word summary that reports the hedge exactly.',
    },
    wordsSource: 'The five words come from the website D6-L11 vocabulary (speaking with control and qualifying in real time).',
  },
  remember: 'Remember: mark P / N / F first — the verb shape gives the tense — some is not all, not always is not never — and note who said it.',
});

module.exports = { meta, slides };
