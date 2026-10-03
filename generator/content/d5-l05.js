'use strict';
/* D5-L05 · Storytelling — Narrative Connectors and كَانَ Description — website: Pathways › Development › D5 › D5-L05 (كَانَ + nominative subject + accusative predicate,
 * كَانَ + present verb = past habit, hollow كُنْتُ / كُنَّا, the narrative arc فِي البِدَايَةِ → ثُمَّ → فَجْأَةً → فِي النِّهَايَةِ, reflection مَا زِلْتُ أَتَذَكَّرُ · لَنْ أَنْسَى).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking and writing used as published. The case-ending distractor that IS the
 * lesson’s key error (جَمِيلٌ for جَمِيلًا) is kept; two other vowel-only distractors replaced. The website visual game repeats D5-L03, so it is skipped. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D5')({
  n: 5, fileTitle: 'Storytelling_Narrative_Connectors_and_Kana', chip: 'Grammar',
  title: 'Storytelling — Narrative Connectors and كَانَ Description', arabic: 'رِوَايَةُ القِصَصِ — رَوَابِطُ السَّرْدِ وَكَانَ',
  focus: 'Tell a story with a shape — set the scene (كَانَ الطَّقْسُ جَمِيلًا), say what used to happen (كَانَ يَلْعَبُ), mark the turn (فَجْأَةً) and close with a reflection (مَا زِلْتُ أَتَذَكَّرُ).',
  icon: 'FaBookOpenReader', iconSet: 'fa6',
});

const site = D.site('D5-L05');
const quiz = site.grammar.quiz.map((it, i) => {
  if (i === 0) return { ...it, options: [it.options[0], it.options[1], 'كَانَ الطَّقْسُ يَكُونُ جَمِيلًا.'] };
  if (i === 7) return { ...it, options: [it.options[0], 'لَنْ أَنْسَى عَنْ هٰذِهِ التَّجْرِبَةِ.', it.options[2]] };
  return it;
});
const kf = (f, pl) => ({ tag: 'm · f · pl', forms: [{ l: 'pl.', ar: pl }, { l: 'f.', ar: f }] });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D5-L05', {
  support: `• Core: a six-sentence story with the frame — فِي البِدَايَةِ كَانَ … · ثُمَّ … · فَجْأَةً … · فِي النِّهَايَةِ … — and كَانَ + adjective with -an (جَمِيلًا). Develop: add a past habit (كَانَ يَلْعَبُ · كُنَّا نَتَدَرَّبُ) and كُنْتُ / كُنَّا. Stretch: the website 90–100-word anecdote with four connectors and a reflective close.
• THE accuracy point of the lesson: after كَانَ the describing word ends in -an / -a (accusative). Students circle كَانَ and check the word after the subject.
• Builds on D5-L03 / L04 (past endings, hollow verbs: كَانَ works like قَالَ → كُنْتُ). D5-L06 uses these narratives for music and art.`,
  teach: 'كَانَ + description, كَانَ + habit, and the story arc.',
  wedo: 'Sort connectors by stage, fix كَانَ slips, then the final-match anecdote.',
  next: { nextCode: 'D5-L06', nextTitle: 'Music, Arts and Arabic Culture', nextAr: 'المُوسِيقَى وَالفُنُونُ وَالثَّقَافَةُ العَرَبِيَّةُ' },
  objectives: ['Describe a past scene with كَانَ + accusative (كَانَ الطَّقْسُ جَمِيلًا).', 'Express a past habit with كَانَ + present verb (كَانَ يَلْعَبُ).', 'Use كُنْتُ / كُنَّا (hollow, like قُلْتُ).', 'Shape a story with connectors and close with a reflection.'],
  rulesAr: 'كَانَ وَالعَادَةُ المَاضِيَةُ وَبِنَاءُ السَّرْدِ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does فِي النِّهَايَةِ mean?', ['in the end', 'at the beginning', 'at that moment'], 'Prepared at home (D5-L04).'),
      q('What does ذِكْرَى mean?', ['a memory', 'a story', 'an experience'], 'Prepared at home (D5-L04).'),
      q('What does كَانَتْ mean?', ['she was', 'she is', 'she will be'], 'Prepared at home (D5-L04).'),
      q('Choose the “we” form of قَالَ.', ['قُلْنَا', 'قَالْنَا', 'قَوَلْنَا'], 'D5-L04: hollow verbs.'),
      q('Which connector means “fortunately”?', ['لِحُسْنِ الحَظِّ', 'لِلْأَسَفِ', 'فَجْأَةً'], 'D5-L04.'),
    ],
    keyIdea: { text: 'After كَانَ, the describing word changes its ending: -un becomes -an.', ar: 'الطَّقْسُ {k|جَمِيلٌ} · كَانَ الطَّقْسُ {e|جَمِيلًا}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D5-L04. Questions 4–5 retrieve D5-L04 (hollow verbs — كَانَ works the same way — and connectors).',
  },
  routes: {
    core: ['I can set the scene with كَانَ + -an.', 'I can tell a story with four connectors.'],
    develop: ['I can say what used to happen (كَانَ يَلْعَبُ).', 'I can use كُنْتُ and كُنَّا.'],
    stretch: ['I can write a 90–100-word anecdote.', 'I can close with a reflection (لَنْ أَنْسَى).'],
  },
  bridge: [
    { ar: 'قِصَّةٌ', urdu: 'قصہ', tr: 'qissa', en: 'story' },
    { ar: 'حِكَايَةٌ', urdu: 'حکایت', tr: 'ḥikāyat', en: 'tale, anecdote' },
    { ar: 'تَجْرِبَةٌ', urdu: 'تجربہ', tr: 'tajriba', en: 'experience' },
    { ar: 'ذِكْرَى', urdu: 'ذکر / یاد', tr: 'zikr', en: 'Urdu ذکر: mention · Arabic ذِكْرَى: memory' },
    { ar: 'آخِرًا → أَخِيرًا', urdu: 'آخر', tr: 'ākhir', en: 'finally (Arabic أَخِيرًا)' },
  ],
  bridgeNotes: 'URDU BRIDGE: قصہ، حکایت، تجربہ are shared. CAREFUL: Urdu ذکر = mention / remembrance of Allah; Arabic ذِكْرَى = a memory (ذِكْرَيَاتٌ = memories). Urdu آخر = last / finally; Arabic says أَخِيرًا for “finally”.',
  core: ['فِي البِدَايَةِ', 'ثُمَّ', 'فَجْأَةً', 'فِي تِلْكَ اللَّحْظَةِ', 'لِلْأَسَفِ', 'فِي النِّهَايَةِ', 'كَانَ', 'كَانَتْ', 'كُنْتُ', 'كَانَ يَلْعَبُ', 'ذِكْرَى / ذِكْرَيَاتٌ', 'مَا زِلْتُ أَتَذَكَّرُ'],
  forms: {
    'كَانَ': kf('كَانَتْ', 'كَانُوا'), 'كُنْتُ': { tag: 'I · we', forms: [{ l: 'we', ar: 'كُنَّا' }] },
    'كَانَ يَلْعَبُ': kf('كَانَتْ تَلْعَبُ', 'كَانُوا يَلْعَبُونَ'),
  },
  vocabNotes: {
    0: 'Narrative connectors: one for each stage of the story — beginning · next · turn · feelings · end.',
    1: 'كَانَ and its forms. Cards show he / she / they. كَانَ is HOLLOW: كُنْتُ · كُنَّا (like قُلْتُ · قُلْنَا). كَانَ + present verb = “used to”.',
    2: 'Telling and remembering: words for the closing reflection. لَنْ + subjunctive (لَنْ أَنْسَى = I will never forget).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · kāna (website rules 1–3)', title: 'Was, used to, I was', ar: 'كَانَ وَأَخَوَاتُهَا فِي القِصَّةِ',
      cols: [{ label: 'Use', w: 2.4 }, { label: 'Example (website)', w: 7.2, size: 22 }, { label: 'Check', w: 2.73 }],
      rows: [
        { core: true, cells: ['description', P('كَانَ الطَّقْسُ {e|جَمِيلًا}.', 'The weather was beautiful.'), 'predicate: -an'] },
        { core: true, cells: ['description (f.)', P('كَانَتِ المُبَارَاةُ {e|صَعْبَةً}.', 'The match was difficult.'), 'kānat + -atan'] },
        { cells: ['past habit', P('كَانَ {k|يَلْعَبُ} كُرَةَ القَدَمِ كُلَّ يَوْمٍ.', 'He used to play football every day.'), 'kāna + present'] },
        { cells: ['past habit (f.)', P('كَانَتْ {k|تُشَاهِدُ} التِّلْفَازَ كُلَّ مَسَاءٍ.', 'She used to watch TV every evening.'), 'both verbs agree'] },
        { core: true, cells: ['I / we were', P('{w|كُنْتُ} سَعِيدًا · {w|كُنَّا} مُتَحَمِّسِينَ', 'I was happy · we were excited'), 'kāna → kun-'] },
      ],
      ltr: true,
      foot: 'kāna / kānat + noun (-u) + description (-an): the most common accuracy mark in a story.',
      notes: `GRAMMAR PART 1 — website rules “كَانَ with a description” (the predicate takes the accusative — adjectives and nouns), “كَانَ with a present verb” (a repeated or ongoing past action; only كَانَ carries the past) and “كَانَ is a hollow verb” (كُنْتُ / كُنَّا, exactly as قُلْتُ / قُلْنَا). Website teaching point: “كَانَ changes the ending of what follows.”
Website mistakes: كَانَ الطَّقْسُ جَمِيلٌ ✗ · كَانَ لَعِبَ كُلَّ يَوْمٍ ✗ · كَانْتُ سَعِيدًا ✗.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · the narrative arc (website rule 4) · all routes', title: 'The shape of a story', ar: 'بِنَاءُ القِصَّةِ',
      cards: [
        { chip: '1 · SCENE · CORE', color: '1E6B52', head: 'فِي البِدَايَةِ', big: 'فِي البِدَايَةِ كَانَ كُلُّ شَيْءٍ هَادِئًا.', en: 'At the beginning everything was calm.', clue: 'kāna + -an.' },
        { chip: '2 · TURN · CORE', color: 'C0386B', head: 'فَجْأَةً · فِي تِلْكَ اللَّحْظَةِ', big: 'فَجْأَةً تَغَيَّرَ كُلُّ شَيْءٍ.', en: 'Suddenly everything changed.', clue: 'The turning point.' },
        { chip: '3 · END · DEVELOP / STRETCH', color: '6B4C9A', head: 'فِي النِّهَايَةِ · لَنْ أَنْسَى', big: 'فِي النِّهَايَةِ فُزْنَا، وَلَنْ أَنْسَى ذٰلِكَ اليَوْمَ.', en: 'In the end we won, and I will never forget that day.', clue: 'Resolve + reflect.' },
      ],
      error: { text: 'Website mistake: the predicate of kāna is accusative.', pairs: [['كَانَ جَمِيلًا', 'كَانَ جَمِيلٌ']] },
      notes: `GRAMMAR PART 2 — website rule “The narrative arc” (setting → events → turn → resolution: فِي البِدَايَةِ opens, ثُمَّ continues, فَجْأَةً / فِي تِلْكَ اللَّحْظَةِ marks the turn, فِي النِّهَايَةِ / أَخِيرًا closes). Website teaching point: “Connectors carry the shape of the story.”
فُزْنَا = we won (فَازَ is hollow: فُزْتُ · فُزْنَا).`,
    },
  ],
  quick: [0, 2, 3, 4],
  rest: [1, 5, 6, 7],
  ido: {
    title: 'Watch me tell the story of a match',
    steps: [
      { head: 'Scene', ar: '{k|فِي البِدَايَةِ} كَانَ الطَّقْسُ {e|جَمِيلًا}', think: 'kāna + -an.' },
      { head: 'Habit', ar: 'كَانَ فَرِيقُنَا {w|يَتَدَرَّبُ}', think: 'Used to: present.' },
      { head: 'Turn', ar: '{k|فَجْأَةً} سَقَطَ لَاعِبُنَا', think: 'The surprise.' },
      { head: 'End', ar: '{k|فِي النِّهَايَةِ} فُزْنَا', think: 'Resolve.' },
    ],
    legend: ['k', 'e', 'w'], legendLabels: { k: 'CONNECTOR', e: 'KĀNA + -AN', w: 'HABIT' },
    model: '{k|فِي البِدَايَةِ} كَانَ اليَوْمُ {e|عَادِيًّا}، وَكَانَ الطَّقْسُ {e|جَمِيلًا}. فِي المَاضِي كَانَ فَرِيقُنَا {w|يَتَدَرَّبُ} ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ. {k|ثُمَّ} بَدَأَتِ المُبَارَاةُ، وَكَانَتْ {e|صَعْبَةً} جِدًّا. {k|فَجْأَةً} سَقَطَ لَاعِبُنَا. {k|فِي النِّهَايَةِ} فُزْنَا بِالمُبَارَاةِ.',
    modelEn: 'At the beginning the day was ordinary, and the weather was beautiful. In the past our team used to train three times a week. Then the match started, and it was very difficult. Suddenly our player fell. In the end we won the match.',
    notes: 'I DO (3 min) — built from the website listening anecdote. Think aloud at each كَانَ: “Is the next word a description? Then -an.” Students copy and circle every كَانَ / كَانَتْ.',
  },
  patternEn: ['The weather was beautiful.', 'He used to play every day.', 'Suddenly everything changed.'],
  sorterNotes: 'Then build a mini-story aloud: one item from each column, in order.',
  patch: {
    grammar: { ...site.grammar, quiz },
    speaking: {
      model: [
        ['A', 'اِحْكِ لِي عَنْ يَوْمٍ لَا تَنْسَاهُ.', 'Tell me about a day you will never forget.'],
        ['B', 'فِي البِدَايَةِ كَانَ اليَوْمُ عَادِيًّا، وَكَانَ الطَّقْسُ جَمِيلًا.', 'At the beginning the day was ordinary, and the weather was beautiful.'],
        ['A', 'وَمَاذَا حَدَثَ بَعْدَ ذٰلِكَ؟', 'And what happened after that?'],
        ['B', 'فَجْأَةً سَقَطَ لَاعِبُنَا، وَلٰكِنْ لِحُسْنِ الحَظِّ فُزْنَا فِي النِّهَايَةِ، وَمَا زِلْتُ أَتَذَكَّرُ ذٰلِكَ اليَوْمَ.', 'Suddenly our player fell, but luckily we won in the end, and I still remember that day.'],
      ],
    },
  },
  patchNote: 'two vowel-only quiz distractors replaced (the key case-ending error is kept on purpose), English added to the patterns and speaking model; the website visual game repeats D5-L03 and is skipped.',
  hints: ['After kāna: -un or -an?', 'Used to: past or present verb?', 'kāna + -tu: which stem?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 5.\nListen for: البِدَايَةِ · فَجْأَةً · النِّهَايَةِ.',
  listenRoutes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 5 — and write down every connector you hear in order.',
  gloss: [
    ['فِي البِدَايَةِ كَانَ اليَوْمُ عَادِيًّا، وَكَانَ الطَّقْسُ جَمِيلًا. كُنَّا مُتَحَمِّسِينَ لِأَنَّهَا المُبَارَاةُ النِّهَائِيَّةُ.', 'At the beginning the day was ordinary and the weather was beautiful. We were excited because it was the final.'],
    ['فِي المَاضِي كَانَ فَرِيقُنَا يَتَدَرَّبُ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ. ثُمَّ بَدَأَتِ المُبَارَاةُ، وَكَانَتْ صَعْبَةً جِدًّا.', 'In the past our team used to train three times a week. Then the match started, and it was very difficult.'],
    ['فَجْأَةً سَقَطَ لَاعِبُنَا وَأُصِيبَ، وَلِلْأَسَفِ خَرَجَ مِنَ المَلْعَبِ.', 'Suddenly our player fell and was injured, and unfortunately he left the pitch.'],
    ['فِي تِلْكَ اللَّحْظَةِ ظَنَنَّا أَنَّنَا سَنَخْسَرُ. لٰكِنْ لِحُسْنِ الحَظِّ سَجَّلَ زَمِيلُهُ هَدَفًا رَائِعًا.', 'At that moment we thought we would lose. But luckily his teammate scored a wonderful goal.'],
    ['وَفِي النِّهَايَةِ فُزْنَا بِالمُبَارَاةِ، وَمَا زِلْتُ أَتَذَكَّرُ ذٰلِكَ اليَوْمَ.', 'In the end we won the match, and I still remember that day.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'اِحْكِ لِي عَنْ يَوْمٍ لَا تَنْسَاهُ. كَيْفَ كَانَ الطَّقْسُ؟' },
      { route: 'develop', ar: 'مَاذَا كُنْتَ تَفْعَلُ فِي طُفُولَتِكَ فِي وَقْتِ فَرَاغِكَ؟' },
      { route: 'stretch', ar: 'كَيْفَ انْتَهَتِ القِصَّةُ؟ وَهَلْ مَا زِلْتَ تَتَذَكَّرُهَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'فِي البِدَايَةِ كَانَ الطَّقْسُ ______ ، وَفَجْأَةً ______ .' },
      { route: 'develop', ar: 'فِي طُفُولَتِي كُنْتُ ______ كُلَّ ______ .' },
      { route: 'stretch', ar: 'فِي النِّهَايَةِ ______ ، وَلَنْ أَنْسَى ______ .' },
    ],
    modelEn: ['Tell me about a day you will never forget.', 'At the beginning the day was ordinary, and the weather was beautiful.'],
    notes: 'Website prompts and model (four lines: question → setting with كَانَ → “what happened next?” → turn, resolution and reflection). Partner listens for كَانَ + -an and claps once when they hear it. To a girl: اِحْكِي لِي · كُنْتِ تَفْعَلِينَ · طُفُولَتِكِ · مَا زِلْتِ.',
  },
  write: {
    core: { amount: '6 sentences', how: 'The frame: a setting with كَانَ, three events, a resolution.' },
    develop: { amount: '70–90 words', how: 'Add a past habit (كَانَ + present) and two feeling connectors.' },
    stretch: { amount: '90–100 words', how: 'Website task: scene · habit · فَجْأَةً · فِي النِّهَايَةِ · reflection.' },
  },
  frames: {
    core: [
      { en: 'At the beginning the weather was … (end in -an)', ar: 'فِي البِدَايَةِ كَانَ الطَّقْسُ ______ .' },
      { en: 'Then we …', ar: 'ثُمَّ ______ .' },
      { en: 'Suddenly …', ar: 'فَجْأَةً ______ .' },
      { en: 'In the end …', ar: 'فِي النِّهَايَةِ ______ .' },
    ],
    develop: [
      { en: 'In the past we used to …', ar: 'فِي المَاضِي كُنَّا نَـ ______ .' },
      { en: 'The match was very … (end in -atan)', ar: 'كَانَتِ المُبَارَاةُ ______ جِدًّا.' },
      { en: 'At that moment I felt …', ar: 'فِي تِلْكَ اللَّحْظَةِ شَعَرْتُ بِـ ______ .' },
      { en: 'I still remember that day.', ar: 'مَا زِلْتُ أَتَذَكَّرُ ذٰلِكَ اليَوْمَ.' },
    ],
    bank: ['فِي البِدَايَةِ', 'ثُمَّ', 'فَجْأَةً', 'فِي تِلْكَ اللَّحْظَةِ', 'لِحُسْنِ الحَظِّ', 'لِلْأَسَفِ', 'فِي النِّهَايَةِ', 'كَانَ', 'كَانَتْ', 'كُنْتُ', 'كُنَّا', 'لَنْ أَنْسَى'],
  },
  stretch: [
    ['كُنَّا مُتَحَمِّسِينَ لِأَنَّهَا كَانَتْ أَوَّلَ مُبَارَاةٍ لَنَا', 'we were excited because it was our first match'],
    ['قَالَ لَنَا المُدَرِّبُ: لَا تَسْتَسْلِمُوا', 'the coach told us: don’t give up'],
    ['شَعَرْنَا بِالحُزْنِ', 'we felt sad'],
    ['يَوْمٌ لَا يُنْسَى', 'an unforgettable day'],
    ['حَتَّى الآنَ', 'until now'],
  ],
  modelEn: 'At the beginning the day was ordinary, and the weather was hot. We were excited because it was our first match. In the past we used to train only twice a week. Then the match started, and it was very difficult. Suddenly the other team scored a goal, and unfortunately we felt sad. At that moment the coach told us: “Don’t give up.” Luckily we scored two goals. In the end we won the match, and I still remember that day even now.',
  find: ['كَانَ + -an (twice)', 'a past habit (كُنَّا نَتَدَرَّبُ)', 'four connectors', 'a reflective close'],
  modelNotes: 'Website writing model. Evidence: كَانَ اليَوْمُ عَادِيًّا · كَانَ الطَّقْسُ حَارًّا · كَانَتْ صَعْبَةً · كُنَّا مُتَحَمِّسِينَ · كُنَّا نَتَدَرَّبُ · فِي البِدَايَةِ · ثُمَّ · فَجْأَةً · لِلْأَسَفِ · فِي تِلْكَ اللَّحْظَةِ · لِحُسْنِ الحَظِّ · فِي النِّهَايَةِ · مَا زِلْتُ أَتَذَكَّرُ.',
  selfCheck: [
    { route: 'core', text: 'After كَانَ my description ends in -an.' },
    { route: 'core', text: 'My story has a beginning, a turn and an end.' },
    { route: 'develop', text: 'I used كَانَ + a present verb for a habit.' },
    { route: 'develop', text: 'I used كُنْتُ or كُنَّا correctly.' },
    { route: 'stretch', text: 'I closed with مَا زِلْتُ أَتَذَكَّرُ or لَنْ أَنْسَى.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['خَائِفًا', 'afraid'], ['حَفْلَةٍ مُوسِيقِيَّةٍ', 'a concert'], ['المَسْرَحُ', 'the stage'], ['الجُمْهُورُ', 'the audience'], ['الطُّفُولَةِ', 'childhood'],
    ['يَسْتَمِعُ إِلَيَّ', 'listened to me'], ['الفِرْقَةُ', 'the band'], ['نَسِيتُ الخَوْفَ', 'I forgot my fear'], ['شَعَرْتُ بِسَعَادَةٍ', 'I felt happy'], ['صَفَّقَ', 'clapped'],
  ],
  prep: {
    words: [['العُودُ', 'the oud', '—'], ['فِرْقَةٌ', 'a band, ensemble', 'pl. فِرَقٌ'], ['فَنَّانٌ / فَنَّانَةٌ', 'an artist (m / f)', 'pl. فَنَّانُونَ'], ['الخَطُّ العَرَبِيُّ', 'Arabic calligraphy', '—'], ['يُعَبِّرُ عَنْ', 'he expresses', 'تُعَبِّرُ she']],
    questionEn: 'Do you know an Arabic or Islamic art form (calligraphy, nasheed, the oud)? Note one thing about it.',
    questionAr: 'أَعْرِفُ … ، وَهُوَ / هِيَ …',
    homework: {
      core: 'Learn the 8 connectors in story order; write the six-sentence frame story.',
      develop: 'A 70–90-word story with a past habit and كُنْتُ / كُنَّا.',
      stretch: 'Website writing task: a 90–100-word anecdote with four connectors and a reflection.',
    },
    wordsSource: 'The five words come from the website D5-L06 vocabulary (music, arts and Arabic culture).',
  },
  remember: 'Remember: كَانَ + description = -an · كَانَ + present = used to · and give your story a shape: beginning → turn → end → reflection.',
});

module.exports = { meta, slides };
