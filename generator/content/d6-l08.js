'use strict';
/* D6-L08 · Reading — Countries, Culture and Celebration Texts — website: Pathways › Development › D6 › D6-L08 (attitude from word choice نَابِضٌ بِالحَيَاةِ vs
 * مُزْدَحِمٌ وَصَاخِبٌ; tense as a signal — ازْدَهَرَتْ قَدِيمًا = completed, تَزْدَهِرُ اليَوْمَ = ongoing; naming the tone; what a text leaves out; يُشِيرُ إِلَى).
 * Reading-skills lesson: the website travel article is the main You Do task. Website vocabulary, rules, quiz, sorter, listening, reading, speaking and writing
 * used as published; مُوَضُوعِيٌّ shown as مَوْضُوعِيٌّ and «احْتِفَالِيَّةٌ أَكْثَرُ مِنْهَا» as «أَكْثَرَ مِنْهَا» (as in the reading text); two website mistakes are
 * English descriptions, so they are replaced with Arabic slips and their point moved to the teacher notes; English added to the patterns and speaking model.
 * The website visual game repeats D6-L02, so it is skipped. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D6')({
  n: 8, fileTitle: 'Reading_Countries_Culture_Celebration_Texts', chip: 'Reading Skills',
  title: 'Reading — Countries, Culture and Celebration Texts', arabic: 'القِرَاءَةُ — نُصُوصُ الدُّوَلِ وَالثَّقَافَةِ وَالاحْتِفَالَاتِ',
  focus: 'Read cultural texts for what the writer IMPLIES: the attitude in the words chosen (نَابِضٌ بِالحَيَاةِ vs مُزْدَحِمٌ وَصَاخِبٌ), what the tense signals (ازْدَهَرَتْ قَدِيمًا = finished history · تَزْدَهِرُ اليَوْمَ = true now), the overall tone — and what the text leaves out.',
  icon: 'FaMagnifyingGlass', iconSet: 'fa6',
});

const fix = (v) => (typeof v === 'string' ? v.replace(/مُوَضُوعِي/g, 'مَوْضُوعِي').replace(/احْتِفَالِيَّةٌ أَكْثَرُ مِنْهَا/g, 'احْتِفَالِيَّةٌ أَكْثَرَ مِنْهَا')
  : Array.isArray(v) ? v.map(fix) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, fix(x)])) : v);
const site = fix(D.site('D6-L08'));
site.grammar = { ...site.grammar, rules: site.grammar.rules.map((r) => ({ ...r, examples: r.examples.map((e) => e.replace(/ — [a-z]+$/, '')) })) };
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D6-L08', {
  support: `• This is a READING-SKILLS lesson: the website travel article is the main You Do task (5 questions, R1 → R3).
• Core: R1–R2 questions (where · what the tense signals) and one admiring phrase. Develop: name the tone and quote the evidence. Stretch: the website ~70-word analysis — tone, quote, tense, omission.
• Reading routine: (1) Circle the adjectives — positive or reserved? (2) Underline the verbs — past (finished) or present (now)? (3) Ask: what is NOT mentioned?
• Key exam habit (website mistake): an attitude question asks what the WRITER thinks — answering “the city is beautiful” is the reader’s opinion, not evidence. Always quote the writer’s Arabic.`,
  teach: 'Word choice → attitude; tense → time; tone; omission.',
  wedo: 'Sort tone words, fix slips, then two travellers in one city.',
  next: { nextCode: 'D6-L09', nextTitle: 'Writing — Countries, Culture and Identity (Paper 4)', nextAr: 'الكِتَابَةُ — الدُّوَلُ وَالثَّقَافَةُ وَالهُوِيَّةُ' },
  objectives: ['Identify a writer’s attitude from word choice and tone.', 'Separate a stated fact from an implied attitude.', 'Explain what a tense choice signals in a cultural text.', 'Notice what a text leaves out and compare two texts.'],
  rulesAr: 'القِرَاءَةُ لِاسْتِخْرَاجِ المَوْقِفِ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does نَبْرَةُ الكَاتِبِ mean?', ['the writer’s tone', 'the writer’s name', 'the writer’s country'], 'Prepared at home (D6-L07).'),
      q('What does دَلِيلٌ مِنَ النَّصِّ mean?', ['evidence from the text', 'a title for the text', 'a summary of the text'], 'Prepared at home (D6-L07).'),
      q('What does تَحَيُّزٌ mean?', ['bias', 'neutrality', 'admiration'], 'Prepared at home (D6-L07).'),
      q('Choose the accurate sentence.', ['المَدِينَةُ الَّتِي زُرْتُهَا جَمِيلَةٌ.', 'المَدِينَةُ الَّذِي زُرْتُهَا جَمِيلَةٌ.', 'مَدِينَةٌ الَّتِي زُرْتُهَا جَمِيلَةٌ.'], 'D6-L07: the relative pronoun looks backwards.'),
      q('Which verb describes something that is still true now?', ['تَزْدَهِرُ', 'ازْدَهَرَتْ', 'كَانَتْ تَزْدَهِرُ'], 'D6-L07: present = now.'),
    ],
    keyIdea: { text: 'Same fact, different words — different attitude. Quote the word, and you have your evidence.', ar: 'سُوقٌ {k|نَابِضٌ بِالحَيَاةِ} ‖ سُوقٌ {w|مُزْدَحِمٌ وَصَاخِبٌ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D6-L07. Questions 4–5 retrieve D6-L07 (relative agreement · present = ongoing).',
  },
  routes: {
    core: ['I can find an admiring or reserved word.', 'I can say if a verb is past or present.'],
    develop: ['I can name the tone and quote the evidence.', 'I can separate a fact from an attitude.'],
    stretch: ['I can explain what a tense choice signals.', 'I can identify a significant omission.'],
  },
  bridge: [
    { ar: 'دَلِيلٌ', urdu: 'دلیل', tr: 'dalīl', en: 'evidence, proof' },
    { ar: 'تَفْسِيرٌ', urdu: 'تفسیر', tr: 'tafsīr', en: 'interpretation (Urdu: Qur’an commentary)' },
    { ar: 'مَوْضُوعِيٌّ', urdu: 'موضوع', tr: 'mauzū', en: 'Urdu موضوع = topic · Arabic مَوْضُوعِيٌّ = objective' },
    { ar: 'إِعْجَابٌ', urdu: 'عجیب', tr: 'ʿajīb', en: 'same root ʿ-j-b: Arabic = admiration · Urdu عجیب = strange' },
    { ar: 'شَخْصِيٌّ', urdu: 'شخصی', tr: 'shakhṣī', en: 'personal' },
  ],
  bridgeNotes: 'URDU BRIDGE: دلیل، تفسیر، شخصی are shared — students know تفسیر from the Qur’an: it means explaining what the text means, exactly today’s skill. CAREFUL: Urdu موضوع = topic; Arabic مَوْضُوعِيٌّ = objective, factual. And the root of عجیب (strange) gives Arabic إِعْجَابٌ (admiration).',
  core: ['مَنْظُورٌ ثَقَافِيٌّ', 'مَوْقِفٌ ضِمْنِيٌّ', 'نَبْرَةُ الكَاتِبِ', 'حِيَادٌ', 'تَحَيُّزٌ', 'إِعْجَابٌ', 'الفِكْرَةُ الرَّئِيسِيَّةُ', 'دَلِيلٌ مِنَ النَّصِّ', 'يُشِيرُ إِلَى', 'مَا أُغْفِلَ', 'نَبْرَةٌ احْتِفَالِيَّةٌ', 'نَبْرَةٌ مُحَايِدَةٌ'],
  forms: {
    'مُتَحَمِّسٌ': { tag: 'm · f · pl', forms: [{ l: 'f.', ar: 'مُتَحَمِّسَةٌ' }, { l: 'pl.', ar: 'مُتَحَمِّسُونَ' }] },
    'مُتَحَفِّظٌ': { tag: 'm · f · pl', forms: [{ l: 'f.', ar: 'مُتَحَفِّظَةٌ' }, { l: 'pl.', ar: 'مُتَحَفِّظُونَ' }] },
    'مَوْضُوعِيٌّ': { tag: 'm · f', forms: [{ l: 'f.', ar: 'مَوْضُوعِيَّةٌ' }] },
    'شَخْصِيٌّ': { tag: 'm · f', forms: [{ l: 'f.', ar: 'شَخْصِيَّةٌ' }] },
    'دَلِيلٌ مِنَ النَّصِّ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'أَدِلَّةٌ' }] },
    'يُشِيرُ إِلَى': { tag: 'IV · past', forms: [{ l: 'past', ar: 'أَشَارَ' }, { l: 'she', ar: 'تُشِيرُ' }] },
    'يَسْتَنْتِجُ': { tag: 'X · past', forms: [{ l: 'past', ar: 'اِسْتَنْتَجَ' }, { l: 'we', ar: 'نَسْتَنْتِجُ' }] },
  },
  vocabNotes: {
    0: 'Perspective and tone: the words for talking ABOUT a writer — attitude (مَوْقِفٌ), tone (نَبْرَةٌ), bias (تَحَيُّزٌ) and selectivity (انْتِقَائِيَّةٌ).',
    1: 'Reading strategy: the verbs for explaining an answer. يُشِيرُ إِلَى and يُلَمِّحُ إِلَى both take إِلَى. مَا أُغْفِلَ = what was left out (passive).',
    2: 'Judging the tone: adjectives agree with نَبْرَةٌ (feminine): نَبْرَةٌ احْتِفَالِيَّةٌ · نَقْدِيَّةٌ · مُحَايِدَةٌ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · word choice and tense as evidence (website rules 1–2)', title: 'Same place — different signals', ar: 'اخْتِيَارُ الكَلِمَاتِ وَالزَّمَنُ',
      cols: [{ label: 'Signal', w: 2.8, size: 22 }, { label: 'Example (website)', w: 6.8, size: 22 }, { label: 'What it shows', w: 2.73 }],
      rows: [
        { core: true, cells: ['{k|نَابِضٌ بِالحَيَاةِ}', P('سُوقٌ {k|نَابِضٌ بِالحَيَاةِ}', 'a market full of life'), 'admiring'] },
        { core: true, cells: ['{w|مُزْدَحِمٌ وَصَاخِبٌ}', P('سُوقٌ {w|مُزْدَحِمٌ وَصَاخِبٌ}', 'a crowded, noisy market'), 'reserved'] },
        { core: true, cells: ['{e|ازْدَهَرَتْ}', P('{e|ازْدَهَرَتِ} المَدِينَةُ قَدِيمًا', 'the city flourished in the old days'), 'finished history'] },
        { cells: ['{e|تَزْدَهِرُ}', P('{e|تَزْدَهِرُ} المَدِينَةُ اليَوْمَ', 'the city flourishes today'), 'true now'] },
        { cells: ['{k|يُشِيرُ إِلَى}', P('{k|يُشِيرُ} الكَاتِبُ {k|إِلَى} أَهَمِّيَّةِ التُّرَاثِ', 'the writer refers to the importance of heritage'), 'stating a point'] },
      ],
      ltr: true,
      foot: 'The fact is the same; the attitude is in the adjective. Quote it.',
      notes: `GRAMMAR PART 1 — website rules “Word choice signals attitude” (same fact + different adjective = different attitude; positive and negative colouring is carried by adjectives and the nouns a writer selects) and “Tense signals time and completion” (past = completed, presented as history · present = ongoing, a current reality).
Website teaching point: “Two writers can report the same festival. One writes مُزْدَحِمٌ, another writes نَابِضٌ بِالحَيَاةِ … Quote the adjective, and you have your evidence.”`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · tone, omission and two texts (website rules 3–4) · Develop / Stretch', title: 'The whole text, and what is missing', ar: 'النَّبْرَةُ وَمَا أُغْفِلَ',
      cards: [
        { chip: 'TONE · CORE', color: '1E6B52', head: 'نَبْرَةٌ احْتِفَالِيَّةٌ', big: 'نَبْرَةُ الكَاتِبِ احْتِفَالِيَّةٌ.', en: 'The writer’s tone is celebratory.', clue: 'Many choices, not one.' },
        { chip: 'OMISSION · DEVELOP', color: '1D5FBF', head: 'مَا أُغْفِلَ', big: 'لَا يَذْكُرُ النَّصُّ الأَحْيَاءَ الحَدِيثَةَ.', en: 'The text does not mention the modern districts.', clue: 'What is missing?' },
        { chip: 'TWO TEXTS · STRETCH', color: '6B4C9A', head: 'يَتَّفِقُ النَّصَّانِ', big: 'يَتَّفِقُ النَّصَّانِ عَلَى أَهَمِّيَّةِ التُّرَاثِ.', en: 'The two texts agree on the importance of heritage.', clue: 'Check each text.' },
      ],
      error: { text: 'Website mistake: يُشِيرُ is fixed with إِلَى.', pairs: [['يُشِيرُ الكَاتِبُ إِلَى أَهَمِّيَّةِ التُّرَاثِ', 'يُشِيرُ الكَاتِبُ عَنْ أَهَمِّيَّةِ التُّرَاثِ']] },
      notes: `GRAMMAR PART 2 — website rules “Naming the tone” (judge the tone from the accumulation of choices across the text, not from one word alone) and “Comparing two texts” (check each statement against each text separately before deciding: Text A / Text B / both — the Paper 2 Question 5 format).
Website teaching point: “What is left out is evidence too … Noticing an omission is a high-level reading skill, and it is exactly what an R3 question rewards.”`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  mistakes: [
    { wrong: 'يُشِيرُ الكَاتِبُ عَنْ أَهَمِّيَّةِ التُّرَاثِ.', right: 'يُشِيرُ الكَاتِبُ إِلَى أَهَمِّيَّةِ التُّرَاثِ.', why: 'yushīru requires ilā.' },
    { wrong: 'نَبْرَةُ الكَاتِبِ احْتِفَالِيٌّ.', right: 'نَبْرَةُ الكَاتِبِ احْتِفَالِيَّةٌ.', why: 'nabra is feminine, so its adjective is too.' },
    { wrong: 'يُلَمِّحُ الكَاتِبُ عَلَى المُشْكِلَاتِ.', right: 'يُلَمِّحُ الكَاتِبُ إِلَى المُشْكِلَاتِ.', why: 'yulammiḥu, like yushīru, takes ilā.' },
  ],
  ido: {
    title: 'Watch me read a travel article for attitude',
    steps: [
      { head: 'Adjectives', ar: 'حِرَفٌ {k|نَابِضَةٌ بِالحَيَاةِ}', think: 'Admiring.' },
      { head: 'Tense', ar: '{e|ازْدَهَرَتْ} قَدِيمًا · {e|تَزْدَهِرُ} اليَوْمَ', think: 'Then and now.' },
      { head: 'Omission', ar: '{w|لَا يَذْكُرُ} الأَحْيَاءَ الحَدِيثَةَ', think: 'A choice.' },
      { head: 'Tone', ar: 'نَبْرَتُهُ {k|احْتِفَالِيَّةٌ}', think: 'Judge the whole.' },
    ],
    legend: ['k', 'e', 'w'], legendLabels: { k: 'ATTITUDE', e: 'TENSE', w: 'OMISSION' },
    model: 'نَبْرَةُ الكَاتِبِ {k|احْتِفَالِيَّةٌ}، وَالدَّلِيلُ قَوْلُهُ: حِرَفٌ تَقْلِيدِيَّةٌ {k|نَابِضَةٌ بِالحَيَاةِ}. وَاسْتَعْمَلَ المَاضِيَ فِي {e|ازْدَهَرَتْ قَدِيمًا} لِيَصِفَ فَتْرَةً مُنْتَهِيَةً. وَلٰكِنَّهُ {w|لَمْ يَذْكُرِ} الأَحْيَاءَ الحَدِيثَةَ، وَهٰذَا اخْتِيَارٌ لَهُ دَلَالَتُهُ.',
    modelEn: 'The writer’s tone is celebratory, and the evidence is the phrase “traditional crafts full of life”. He used the past in “flourished in the old days” to describe a finished period. But he did not mention the modern districts, and that choice is significant.',
    notes: 'I DO (3 min) — think aloud on the website reading text: circle adjectives → underline verbs → ask what is missing → name the tone. Model the language of the answer: وَالدَّلِيلُ قَوْلُهُ … · لِيَصِفَ … · لَمْ يَذْكُرْ …',
  },
  patternEn: ['a market full of life (admiring)', 'the city flourished long ago (finished history)', 'the writer refers to …'],
  sorterNotes: 'Then say one word that would move each phrase to a different column.',
  patch: {
    vocab: site.vocab, grammar: site.grammar, sorter: site.sorter, listening: site.listening, reading: site.reading, writing: site.writing, final: site.final, patterns: site.patterns,
    speaking: {
      ...site.speaking,
      model: [
        ['A', 'مَا نَبْرَةُ الكَاتِبِ؟', 'What is the writer’s tone?'],
        ['B', 'نَبْرَتُهُ احْتِفَالِيَّةٌ، وَالدَّلِيلُ قَوْلُهُ: حِرَفٌ نَابِضَةٌ بِالحَيَاةِ.', 'His tone is celebratory; the evidence is his phrase “crafts full of life”.'],
        ['A', 'وَهَلْ هُنَاكَ مَا أُغْفِلَ؟', 'And is anything left out?'],
        ['B', 'نَعَمْ، لَمْ يَذْكُرِ الأَحْيَاءَ الحَدِيثَةَ وَلَا المُشْكِلَاتِ، وَهٰذَا اخْتِيَارٌ لَهُ دَلَالَتُهُ.', 'Yes — he did not mention the modern districts or the problems, and that choice is significant.'],
      ],
    },
  },
  patchNote: 'مُوَضُوعِيٌّ shown as مَوْضُوعِيٌّ, two English-description mistakes replaced with Arabic slips, and English added to the patterns and speaking model; the website visual game repeats D6-L02 and is skipped.',
  hints: ['yushīru + which preposition?', 'nabra is m. or f.?', 'yulammiḥu + which preposition?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nTwo speakers — same market.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write the adjective each speaker uses.',
  gloss: [
    ['المُتَحَدِّثُ الأَوَّلُ: زُرْتُ المَدِينَةَ القَدِيمَةَ وَأَعْجَبَنِي سُوقُهَا النَّابِضُ بِالحَيَاةِ. كُلُّ زَاوِيَةٍ فِيهِ تَحْكِي قِصَّةً، وَقَدِ اسْتَقْبَلَنَا النَّاسُ بِكَرَمٍ كَبِيرٍ.', 'First speaker: I visited the old city, and I loved its market, full of life. Every corner tells a story, and the people welcomed us very generously.'],
    ['المُتَحَدِّثُ الثَّانِي: أَنَا زُرْتُ السُّوقَ نَفْسَهُ، وَوَجَدْتُهُ مُزْدَحِمًا وَصَاخِبًا قَلِيلًا، وَلٰكِنَّ المَبَانِيَ التَّارِيخِيَّةَ كَانَتْ مُثِيرَةً لِلاهْتِمَامِ.', 'Second speaker: I visited the same market and found it a little crowded and noisy, but the historic buildings were interesting.'],
    ['لَمْ أَذْكُرِ المَطَاعِمَ لِأَنَّنِي لَمْ أُجَرِّبْهَا.', 'I did not mention the restaurants because I did not try them.'],
    ['يُشَارُ إِلَى أَنَّ النَّصَّيْنِ يَصِفَانِ المَكَانَ نَفْسَهُ،', 'It is noted that the two texts describe the same place,'],
    ['وَلٰكِنَّ نَبْرَةَ الأَوَّلِ احْتِفَالِيَّةٌ، بَيْنَمَا نَبْرَةُ الثَّانِي أَقْرَبُ إِلَى الحِيَادِ.', 'but the first one’s tone is celebratory, whereas the second one’s is closer to neutral.'],
  ],
  readingCore: {
    readMin: 4, qMin: 6,
    notes: 'YOU DO — READING (main task): the website travel article. Before reading: circle every adjective and underline every verb.\nCore: questions 1–3 (R1–R2). Develop: all 5 + one quoted phrase. Stretch: then the written analysis — tone, quote, tense, omission.',
  },
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا نَبْرَةُ الكَاتِبِ فِي هٰذَا النَّصِّ؟ وَمَا الدَّلِيلُ؟' },
      { route: 'develop', ar: 'مَاذَا ذَكَرَ النَّصُّ؟ وَمَاذَا أُغْفِلَ؟' },
      { route: 'stretch', ar: 'مَاذَا تَدُلُّ عَلَيْهِ الأَزْمِنَةُ المُسْتَعْمَلَةُ فِي النَّصِّ؟' },
    ],
    stems: [
      { route: 'core', ar: 'نَبْرَةُ الكَاتِبِ ______ ، وَالدَّلِيلُ قَوْلُهُ: « ______ ».' },
      { route: 'develop', ar: 'ذَكَرَ النَّصُّ ______ ، وَلٰكِنَّهُ لَمْ يَذْكُرْ ______ .' },
      { route: 'stretch', ar: 'اسْتَعْمَلَ الكَاتِبُ المَاضِيَ فِي « ______ » لِيَصِفَ ______ .' },
    ],
    modelEn: ['What is the writer’s tone?', 'His tone is celebratory; the evidence is his phrase “crafts full of life”.'],
    notes: 'Website prompts and model: students explain the WRITER’S view, never their own. Core may answer with the quoted Arabic + English. To a girl: no change (the questions are about the text).',
  },
  write: {
    core: { amount: '4 sentences', how: 'The tone + one quoted phrase + one past and one present verb from the text.' },
    develop: { amount: '50 words', how: 'Tone with evidence, and what one tense choice signals.' },
    stretch: { amount: '≈ 70 words', how: 'Website task: tone · quote · tense · one significant omission.' },
  },
  frames: {
    core: [
      { en: 'The writer’s tone is …', ar: 'نَبْرَةُ الكَاتِبِ ______ .' },
      { en: 'The evidence is his phrase: …', ar: 'وَالدَّلِيلُ قَوْلُهُ: « ______ ».' },
      { en: 'The text refers to …', ar: 'يُشِيرُ النَّصُّ إِلَى ______ .' },
      { en: 'The city flourished / flourishes …', ar: 'ازْدَهَرَتِ / تَزْدَهِرُ المَدِينَةُ ______ .' },
    ],
    develop: [
      { en: 'He used the past to describe …', ar: 'اسْتَعْمَلَ المَاضِيَ لِيَصِفَ ______ .' },
      { en: 'He used the present to describe …', ar: 'اسْتَعْمَلَ المُضَارِعَ لِيَصِفَ ______ .' },
      { en: 'But he did not mention …', ar: 'وَلٰكِنَّهُ لَمْ يَذْكُرْ ______ .' },
      { en: '… and that choice is significant.', ar: 'وَهٰذَا اخْتِيَارٌ لَهُ دَلَالَتُهُ.' },
    ],
    bank: ['نَبْرَةٌ احْتِفَالِيَّةٌ', 'نَبْرَةٌ نَقْدِيَّةٌ', 'نَبْرَةٌ مُحَايِدَةٌ', 'إِعْجَابٌ', 'تَحَفُّظٌ', 'نَابِضٌ بِالحَيَاةِ', 'مُزْدَحِمٌ', 'دَلِيلٌ مِنَ النَّصِّ', 'يُشِيرُ إِلَى', 'لِيَصِفَ', 'فَتْرَةٌ مُنْتَهِيَةٌ', 'وَاقِعٌ مُسْتَمِرٌّ'],
  },
  stretch: [
    ['أَكْثَرَ مِنْهَا مُحَايِدَةً', 'more … than neutral'],
    ['وَهٰذَا اخْتِيَارٌ فِيهِ إِعْجَابٌ وَاضِحٌ', 'and this is a choice showing clear admiration'],
    ['لِيَصِفَ وَاقِعًا مُسْتَمِرًّا', 'to describe an ongoing reality'],
    ['وَهٰذَا الإِغْفَالُ لَهُ دَلَالَتُهُ', 'and this omission is significant'],
    ['يُلَاحِظُ مَا ذُكِرَ وَمَا أُغْفِلَ مَعًا', 'notices what was said and what was left out'],
  ],
  modelEn: 'The writer’s tone in this text is more celebratory than neutral. The evidence from the text is his phrase “traditional crafts full of life”, a choice that shows clear admiration. He used the past in “flourished in the old days” to describe a finished period, and the present in “flourishes today” to describe an ongoing reality. However, he did not mention the modern districts or everyday problems, and this omission is significant. A good reader notices what is said and what is left out together.',
  find: ['the tone named', 'a quoted phrase', 'past = finished · present = ongoing', 'one omission'],
  modelNotes: 'Website writing model. Evidence: نَبْرَةُ الكَاتِبِ … احْتِفَالِيَّةٌ · وَالدَّلِيلُ مِنَ النَّصِّ قَوْلُهُ … · المَاضِيَ فِي ازْدَهَرَتْ قَدِيمًا لِيَصِفَ فَتْرَةً مُنْتَهِيَةً · المُضَارِعَ فِي تَزْدَهِرُ اليَوْمَ … وَاقِعًا مُسْتَمِرًّا · لَمْ يَذْكُرِ الأَحْيَاءَ الحَدِيثَةَ … · الإِغْفَالُ لَهُ دَلَالَتُهُ.',
  selfCheck: [
    { route: 'core', text: 'I named the tone with a feminine adjective (نَبْرَةٌ … ـَةٌ).' },
    { route: 'core', text: 'I quoted the writer’s own Arabic, not my opinion.' },
    { route: 'develop', text: 'I explained what a past or present verb signals.' },
    { route: 'develop', text: 'I used يُشِيرُ إِلَى correctly.' },
    { route: 'stretch', text: 'I named something the text leaves out.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['السَّاحِلِ', 'the coast'], ['بِفَضْلِ التِّجَارَةِ', 'thanks to trade'], ['مَا زَالَتْ', 'are still'], ['حِرَفٌ تَقْلِيدِيَّةٌ', 'traditional crafts'], ['بِكَرَمٍ', 'generously'],
    ['تُنَوِّعُ', 'add variety to'], ['مَحْفُوظٌ بِعِنَايَةٍ', 'carefully preserved'], ['الأَحْيَاءَ الحَدِيثَةَ', 'the modern districts'], ['المُشْكِلَاتِ اليَوْمِيَّةَ', 'everyday problems'], ['دَلَالَتُهُ', 'its significance'],
  ],
  prep: {
    words: [['أَعْتَزُّ بِـ', 'I take pride in', 'اِعْتَزَّ past'], ['لَا يُمْكِنُ إِنْكَارُ أَنَّ', 'it cannot be denied that', '—'], ['مِنْ وِجْهَةِ نَظَرِي', 'from my point of view', '—'], ['إِنْجَازُ المُهِمَّةِ', 'task completion', '—'], ['الدِّقَّةُ', 'accuracy', '—']],
    questionEn: 'What part of your culture or identity are you most proud of? Note two reasons.',
    questionAr: 'أَعْتَزُّ بِـ ______ ، لِأَنَّ ______ .',
    homework: {
      core: 'Learn the tone words; redo reading questions 1–3 with a quoted phrase.',
      develop: 'A 50-word analysis: tone, evidence, one tense.',
      stretch: 'Website writing task: a ≈ 70-word analysis of a cultural text.',
    },
    wordsSource: 'The five words come from the website D6-L09 vocabulary (writing about identity and the mark scheme).',
  },
  remember: 'Remember: adjectives → attitude · past = finished, present = now · judge the whole tone · notice what is missing · quote the writer, not yourself.',
});

module.exports = { meta, slides };
