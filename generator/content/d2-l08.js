'use strict';
/* D2-L08 · Reading — Personality, Relationships and Fashion Texts — website: Pathways › Development › D2 › D2-L08 (reading skills: reference, the writer’s view, examples and contrast, conclusion — the article is the main task). */
const D = require('./d-common');
const X = require('./d2-lex');
const { q } = D;

const meta = D.meta('D2')({
  n: 8, fileTitle: 'Reading_Personality_and_Fashion', chip: 'Reading Skills',
  title: 'Reading — Personality, Relationships and Fashion Texts', arabic: 'القِرَاءَةُ — نُصُوصُ الشَّخْصِيَّةِ وَالعَلَاقَاتِ وَالمَوْضَةِ',
  focus: 'Read an opinion article like an examiner: find the writer’s view (يَرَى أَنَّ), the examples (يَذْكُرُ مِثَالًا), the contrast (بَيْنَمَا، وَلٰكِنَّ) and the conclusion (يَخْلُصُ إِلَى أَنَّ) — then agree or disagree with evidence.',
  icon: 'FaBookOpenReader', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });

const slides = D.devLesson('D2-L08', {
  support: `• READING-SKILLS lesson: the website article (“How do we judge people and style?”) is the main You Do task. Teaching focuses on the language of an argument text: the writer’s view, examples, contrast, conclusion.
• Core: questions 1–3 (the writer’s view and the first example) with the key-words panel. Develop: all 6. Stretch: the written response (agree / disagree with evidence).
• The grammar quiz on the website repeats D2-L07 — here it is used as retrieval (quick check) only.
• Urdu bridge: مضمون ≠ مَقَالٌ, مثال، خلاصہ، رائے، ثبوت / دلیل.`,
  teach: 'The writer thinks … gives an example … but … concludes that …',
  wedo: 'Find the writer’s moves, sort, fix and listen.',
  next: { nextCode: 'D2-L09', nextTitle: 'Speaking — People, Relationships and Style Topic Conversation', nextAr: 'المُحَادَثَةُ' },
  flexGroups: [1, 2],
  doNow: {
    questions: [
      q('What does يُعَبِّرُ عَنْ mean?', ['expresses', 'compares', 'buys'], 'Prepared at home.'),
      q('What does صَدِيقٌ مُقَرَّبٌ mean?', ['a close friend', 'a new friend', 'a classmate'], 'Prepared at home.'),
      q('Which is an opinion?', ['أَرَى أَنَّ أُسْلُوبَهُ مُنَاسِبٌ.', 'لَهُ شَعْرٌ قَصِيرٌ.', 'يَرْتَدِي قَمِيصًا أَسْوَدَ.'], 'D2-L07: opinion signal.'),
      q('Choose the best inference.', ['هُوَ مُتَعَاوِنٌ لِأَنَّهُ يُسَاعِدُ زُمَلَاءَهُ.', 'هُوَ مُتَعَاوِنٌ لِأَنَّ قَمِيصَهُ أَزْرَقُ.', 'هُوَ مُتَعَاوِنٌ بِلَا دَلِيلٍ.'], 'D2-L07: behaviour = evidence.'),
      q('Choose “She has brown eyes.”', ['لَهَا عَيْنَانِ بُنِّيَّتَانِ.', 'لَهَا عَيْنَانِ بُنِّيٌّ.', 'لَهُ عَيْنٌ بُنِّيَّتَانِ.'], 'D2-L06: dual agreement.'),
    ],
    keyIdea: { text: 'An opinion article has four moves: the view → an example → a contrast → the conclusion. Find each one.', ar: '{k|يَرَى الكَاتِبُ أَنَّ} … {w|يَذْكُرُ مِثَالًا} … {e|بَيْنَمَا} … {k|يَخْلُصُ إِلَى أَنَّ} …' },
    retrieves: 'Questions 1–2 test two of the five revision words prepared at home. Questions 3–5 retrieve D2-L07 (fact, opinion, inference) and D2-L06 (appearance agreement).',
  },
  routes: {
    core: ['I can find the writer’s main view.', 'I can find one example in the text.'],
    develop: ['I can explain a contrast and what a pronoun refers to.', 'I can answer all six reading questions with evidence.'],
    stretch: ['I can summarise the article in my own words.', 'I can agree or disagree, with evidence.'],
  },
  bridge: [
    { ar: 'مَقَالٌ', urdu: 'مقالہ', tr: 'maqāla', en: 'article, essay' },
    { ar: 'مِثَالٌ', urdu: 'مثال', tr: 'misāl', en: 'example' },
    { ar: 'خُلَاصَةٌ', urdu: 'خلاصہ', tr: 'khulāsa', en: 'summary, conclusion' },
    { ar: 'الكَاتِبُ', urdu: 'کاتب', tr: 'kātib', en: 'Urdu: scribe · Arabic: writer' },
    { ar: 'اِنْطِبَاعٌ', urdu: 'تاثر', tr: 'tāssur', en: 'impression (meaning only)' },
  ],
  bridgeNotes: 'URDU BRIDGE: مقالہ (article, thesis) → مَقَالٌ; مثال → مِثَالٌ; خلاصہ (summary) shares the root of يَخْلُصُ إِلَى (he concludes) and خُلَاصَةٌ; کاتب (a scribe) → الكَاتِبُ (the writer). اِنْطِبَاعٌ (impression) has no Urdu cognate: الاِنْطِبَاعُ الأَوَّلُ = first impression.',
  core: ['لِأَنَّ', 'لِذٰلِكَ', 'وَلٰكِنَّ', 'بَيْنَمَا', 'عَلَى الرَّغْمِ مِنْ أَنَّ', 'فِي رَأْيِي'],
  forms: X.formsFor('D2-L08'),
  vocabNotes: { 0: 'Reading evidence signals (revision). In a READING text, they show the writer’s structure: لِأَنَّ = reason · وَلٰكِنَّ / بَيْنَمَا = contrast · لِذٰلِكَ = result · فِي رَأْيِي = view.', 1: 'People and relationships (FLEX) — D2-L01/L02 revision.', 2: 'Fashion and evaluation (FLEX) — D2-L03/L04 revision.' },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · the four moves of an opinion article (from the website article)', title: 'How the writer builds the argument', ar: 'حَرَكَاتُ الكَاتِبِ',
      cols: [{ label: 'Signal', w: 3.2, size: 24 }, { label: 'In the article', w: 5.6, size: 20 }, { label: 'Move', w: 3.53 }],
      rows: [
        { core: true, cells: [{ ar: 'يَرَى الكَاتِبُ أَنَّ' }, P('يَرَى الكَاتِبُ أَنَّ المَظْهَرَ يُقَدِّمُ مَعْلُومَاتٍ عَنِ الذَّوْقِ …', 'The writer thinks appearance gives information about taste …'), '1 · the VIEW'] },
        { core: true, cells: [{ ar: 'وَلٰكِنَّهُ' }, P('وَلٰكِنَّهُ لَا يَكْشِفُ الشَّخْصِيَّةَ كُلَّهَا.', 'but it does not reveal the whole personality.'), '1 · the limit'] },
        { cells: [{ ar: 'يَذْكُرُ مِثَالًا' }, P('يَذْكُرُ مِثَالًا لِشَابٍّ يَرْتَدِي مَلَابِسَ بَسِيطَةً …', 'He gives the example of a young man who wears simple clothes …'), '2 · an EXAMPLE'] },
        { cells: [{ ar: 'بَيْنَمَا' }, P('تُفَضِّلُ الأُسْلُوبَ الرَّسْمِيَّ، بَيْنَمَا هِيَ مَرِحَةٌ …', 'she prefers a formal style, whereas she is cheerful …'), '3 · a CONTRAST'] },
        { cells: [{ ar: 'يَخْلُصُ إِلَى أَنَّ' }, P('يَخْلُصُ الكَاتِبُ إِلَى أَنَّ السُّلُوكَ … أَقْوَى مِنَ المَلَابِسِ.', 'The writer concludes that behaviour … is stronger than clothes.'), '4 · the CONCLUSION'] },
      ],
      foot: 'Exam tip: the answer to “What is the writer’s view?” is usually in the first and the last sentence.',
      notes: `GRAMMAR PART 1 — teacher-built from the website article, applying the website rules “Distinguish fact and opinion” and “Follow comparison and contrast”. Teacher script: “Articles are built like a sandwich: view – examples – conclusion. Find the bread first.”
Core: highlight rows 1 and 5 in the article (view and conclusion) before reading anything else.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · reference and agreement in a text (website rules) · Develop / Stretch', title: 'What does it refer to? Do I agree?', ar: 'المَرْجِعُ · أَتَّفِقُ',
      cards: [
        { chip: 'REFERENCE · DEVELOP', color: '1D5FBF', head: 'ـهُ / ـهَا / هِيَ', big: 'يَصِفُ فَتَاةً … بَيْنَمَا هِيَ مَرِحَةٌ مَعَ أَصْدِقَائِهَا.', en: 'He describes a girl … whereas she is cheerful with her friends.', clue: 'hiya / -hā = the girl.' },
        { chip: 'AGREE · CORE', color: '1E7B4F', head: 'أَتَّفِقُ مَعَ', big: 'أَتَّفِقُ مَعَ الكَاتِبِ لِأَنَّ السُّلُوكَ أَقْوَى دَلِيلٍ.', en: 'I agree with the writer because behaviour is the strongest evidence.', clue: 'Agree + because.' },
        { chip: 'DISAGREE · STRETCH', color: 'B83227', head: 'لَا أَتَّفِقُ تَمَامًا', big: 'لَا أَتَّفِقُ تَمَامًا، لِأَنَّ المَلَابِسَ تُعَبِّرُ أَحْيَانًا عَنِ الشَّخْصِيَّةِ.', en: 'I don’t fully agree, because clothes sometimes express personality.', clue: 'Qualify with “sometimes”.' },
      ],
      error: { text: 'Website warning: never answer from one familiar word.', pairs: [['أَقْرَأُ الجُمْلَةَ كُلَّهَا وَأَتَأَكَّدُ مِنَ المَرْجِعِ.', 'أَخْتَارُ أَوَّلَ كَلِمَةٍ أَعْرِفُهَا.']] },
      notes: `GRAMMAR PART 2 — website rules “Track reference” and “Infer from evidence”, plus the response language needed for the website writing task (summarise the view, use evidence, give your conclusion).
Website common error: “Do not choose an answer from one familiar word; verify the complete clause and its reference.”`,
    },
  ],
  quick: [0, 2, 3, 7],
  rest: [],
  ido: {
    title: 'Watch me find the writer’s view',
    steps: [
      { head: '1 · Question', ar: 'مَا رَأْيُ الكَاتِبِ فِي المَظْهَرِ؟', think: 'Look for “the writer thinks”.' },
      { head: '2 · First sentence', ar: '{k|يَرَى الكَاتِبُ أَنَّ} المَظْهَرَ يُقَدِّمُ مَعْلُومَاتٍ عَنِ الذَّوْقِ،', think: 'Half the view …' },
      { head: '3 · After “but”', ar: '{e|وَلٰكِنَّهُ} لَا يَكْشِفُ الشَّخْصِيَّةَ كُلَّهَا.', think: '… and its limit.' },
      { head: '4 · Answer', ar: '{w|المَظْهَرُ لَا يَكْفِي لِلْحُكْمِ عَلَى الشَّخْصِيَّةِ.}', think: 'In my own words.' },
    ],
    legend: ['k', 'e', 'w'], legendLabels: { k: 'THE VIEW', e: 'THE LIMIT', w: 'MY ANSWER' },
    model: 'السُّؤَالُ: مَا رَأْيُ الكَاتِبِ؟ ← {k|يَرَى الكَاتِبُ أَنَّ} المَظْهَرَ يُقَدِّمُ مَعْلُومَاتٍ عَنِ الذَّوْقِ، {e|وَلٰكِنَّهُ} لَا يَكْشِفُ الشَّخْصِيَّةَ كُلَّهَا. ← الجَوَابُ: {w|المَظْهَرُ لَا يَكْفِي لِلْحُكْمِ عَلَى الشَّخْصِيَّةِ.}',
    modelEn: 'Question: What is the writer’s view? → The writer thinks appearance gives information about taste, but it does not reveal the whole personality. → Answer: appearance is not enough to judge personality.',
    notes: 'I DO (3 min) — the teacher reads the first sentence of the website article and thinks aloud; the answer matches the website speaking model (يَرَى أَنَّ المَظْهَرَ لَا يَكْفِي لِلْحُكْمِ عَلَى الشَّخْصِيَّةِ).',
  },
  modelsNotes: '• Core: copy sentence 4 (the inference). • Develop: copy sentences 2–3 and change the people. • Stretch: write one sentence with يَرَى الكَاتِبُ أَنَّ about the article.',
  sorterCats: ['Fact', 'Opinion', 'Inference'],
  patch: {
    patterns: [
      { ar: 'مَرْيَمُ تَرْتَدِي مِعْطَفًا، وَهُوَ أَزْرَقُ.', en: 'Maryam is wearing a coat, and it is blue.', tip: 'Reference: huwa = the coat.' },
      { ar: 'فِي رَأْيِي، أُسْلُوبُهُ أَنِيقٌ.', en: 'In my opinion, his style is elegant.', tip: 'Opinion signal.' },
      { ar: 'هُوَ هَادِئٌ، بَيْنَمَا هِيَ مَرِحَةٌ.', en: 'He is calm, whereas she is cheerful.', tip: 'Contrast.' },
      { ar: 'يُسَاعِدُ الجَمِيعَ؛ لِذٰلِكَ يَبْدُو مُتَعَاوِنًا.', en: 'He helps everyone, so he seems helpful.', tip: 'Inference from evidence.' },
    ],
    mistakes: [
      { wrong: 'يَرَى الكَاتِبُ أَنَّ المَلَابِسَ تَكْشِفُ الشَّخْصِيَّةَ كُلَّهَا.', right: 'يَرَى الكَاتِبُ أَنَّ المَلَابِسَ لَا تَكْشِفُ الشَّخْصِيَّةَ كُلَّهَا.', why: 'Read the whole clause — the verb is negative.' },
      { wrong: 'يَصِفُ فَتَاةً … بَيْنَمَا هُوَ مَرِحٌ.', right: 'يَصِفُ فَتَاةً … بَيْنَمَا هِيَ مَرِحَةٌ.', why: 'The pronoun refers to the girl.' },
      { wrong: 'الشَّابُّ مُبْدِعٌ لِأَنَّهُ يَرْتَدِي مَلَابِسَ بَسِيطَةً.', right: 'الشَّابُّ يَرْتَدِي مَلَابِسَ بَسِيطَةً، وَلٰكِنَّهُ مُبْدِعٌ.', why: 'The text shows a contrast, not a reason.' },
    ],
    sorter: {
      title: 'Fact, opinion or inference?', instructions: 'Decide what kind of statement each sentence from the texts is.',
      categories: ['Fact', 'Opinion', 'Inference'],
      items: [
        { label: 'يَرْتَدِي مَلَابِسَ بَسِيطَةً.', answer: 0 }, { label: 'تُفَضِّلُ الأُسْلُوبَ الرَّسْمِيَّ.', answer: 0 }, { label: 'تُقْرَأُ ثَلَاثُ رِسَالَاتٍ.', answer: 0 },
        { label: 'يَرَى الكَاتِبُ أَنَّ المَظْهَرَ لَا يَكْفِي.', answer: 1 }, { label: 'الاِحْتِرَامُ أَهَمُّ مِنَ التَّشَابُهِ.', answer: 1 },
        { label: 'يُسَاعِدُ الجَمِيعَ؛ لِذٰلِكَ يَبْدُو مُتَعَاوِنًا.', answer: 2 }, { label: 'تَضْحَكُ مَعَ صَدِيقَاتِهَا؛ فَهِيَ مَرِحَةٌ.', answer: 2 },
      ],
    },
    listening: {
      questions: [
        L('How many messages are read?', ['three', 'two', 'four'], 'تُقْرَأُ ثَلَاثُ رِسَالَاتٍ قَصِيرَةٍ.'),
        L('Who writes the first message?', ['a (female) student', 'a teacher', 'a young man'], 'الأُولَى مِنْ طَالِبَةٍ.'),
        L('How does she describe her friend?', ['helpful', 'shy', 'elegant'], 'صَدِيقَتَهَا المُتَعَاوِنَةَ.'),
        L('What does the young man explain?', ['why he prefers practical clothes', 'why he likes fashion', 'why he argues with his brother'], 'يَشْرَحُ لِمَاذَا يُفَضِّلُ المَلَابِسَ العَمَلِيَّةَ.'),
        L('What does the third message compare?', ['two relationships', 'two shirts', 'two schools'], 'تُقَارِنُ بَيْنَ عَلَاقَتَيْنِ.'),
        L('What is more important than being exactly alike?', ['respect', 'clothes', 'money'], 'الاِحْتِرَامَ أَهَمُّ مِنَ التَّشَابُهِ التَّامِّ.'),
      ],
    },
    reading: {
      questions: [
        L('What does appearance give information about, according to the writer?', ['taste and the occasion', 'the whole personality', 'money'], 'يُقَدِّمُ مَعْلُومَاتٍ عَنِ الذَّوْقِ وَالمُنَاسَبَةِ.'),
        L('What can appearance NOT do?', ['reveal the whole personality', 'show taste', 'suit an occasion'], 'لَا يَكْشِفُ الشَّخْصِيَّةَ كُلَّهَا.'),
        L('What is the young man in the example like?', ['simple clothes, but confident and creative', 'formal clothes and shy', 'expensive clothes and selfish'], 'مَلَابِسَ بَسِيطَةً وَلٰكِنَّهُ وَاثِقٌ وَمُبْدِعٌ.'),
        L('What style does the girl prefer?', ['formal', 'colourful', 'sporty'], 'تُفَضِّلُ الأُسْلُوبَ الرَّسْمِيَّ.'),
        L('In بَيْنَمَا هِيَ مَرِحَةٌ, who is cheerful?', ['the girl', 'the young man', 'the writer'], 'هِيَ = the girl.'),
        L('What does the writer conclude?', ['behaviour and relationships are stronger evidence than clothes', 'clothes show everything', 'formal clothes are best'], 'السُّلُوكَ وَالعَلَاقَاتِ يُقَدِّمَانِ دَلِيلًا أَقْوَى مِنَ المَلَابِسِ.'),
      ],
    },
  },
  hints: ['Read to the end: is the verb positive or negative?', 'Who is hiya?', 'Contrast or reason in the text?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 6.\nListen for: ثَلَاثُ · طَالِبَةٍ · الاِحْتِرَامَ.',
  listenRoutes: 'Core: questions 1, 2 and 6. Develop / Stretch: all 6. (Questions are teacher-written: the website questions for this script are generic.)',
  gloss: [
    ['تُقْرَأُ ثَلَاثُ رِسَالَاتٍ قَصِيرَةٍ.', 'Three short messages are read.'],
    ['الأُولَى مِنْ طَالِبَةٍ تَصِفُ صَدِيقَتَهَا المُتَعَاوِنَةَ.', 'The first is from a student describing her helpful friend.'],
    ['الثَّانِيَةُ مِنْ شَابٍّ يَشْرَحُ لِمَاذَا يُفَضِّلُ المَلَابِسَ العَمَلِيَّةَ.', 'The second is from a young man explaining why he prefers practical clothes.'],
    ['الثَّالِثَةُ تُقَارِنُ بَيْنَ عِلَاقَتَيْنِ', 'The third compares two relationships'],
    ['وَتَذْكُرُ أَنَّ الاِحْتِرَامَ أَهَمُّ مِنَ التَّشَابُهِ التَّامِّ.', 'and says that respect is more important than being exactly alike.'],
  ],
  readingCore: {
    readMin: 4, qMin: 6,
    notes: 'YOU DO — READING (main task). The website article “How do we judge people and style?”. First read: underline the VIEW (يَرَى) and the CONCLUSION (يَخْلُصُ). Second read: the two examples and the contrast.\nCore: questions 1–3. Develop: all 6. Stretch: then the written response.\n(Questions are teacher-written: the website questions for this text are generic.)',
  },
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا غَرَضُ النَّصِّ؟' },
      { route: 'develop', ar: 'مَا الدَّلِيلُ الَّذِي يُقَدِّمُهُ الكَاتِبُ؟' },
      { route: 'develop', ar: 'إِلَى مَنْ يَعُودُ الضَّمِيرُ «هِيَ»؟' },
      { route: 'stretch', ar: 'هَلْ تَتَّفِقُ مَعَ خُلَاصَةِ النَّصِّ؟' },
    ],
    stems: [
      { route: 'core', ar: 'النَّصُّ عَنْ ______ .' },
      { route: 'develop', ar: 'يَذْكُرُ الكَاتِبُ مِثَالًا لِـ ______ .' },
      { route: 'develop', ar: 'يَعُودُ الضَّمِيرُ «هِيَ» إِلَى ______ .' },
      { route: 'stretch', ar: 'أَتَّفِقُ / لَا أَتَّفِقُ تَمَامًا لِأَنَّ ______ .' },
    ],
    modelEn: ['What is the writer’s view?', 'He thinks that appearance is not enough to judge personality.'],
    notes: 'Website prompts (prompt 3 adapted to the article). Website model continues: A: مَا الدَّلِيلُ؟ (What is the evidence?) B: يُقَدِّمُ مِثَالَيْنِ يُخَالِفُ فِيهِمَا المَظْهَرُ الشَّخْصِيَّةَ. (He gives two examples in which appearance differs from personality.)',
  },
  write: {
    core: { amount: '5 sentences', how: 'Summarise the article: the view, the young man, the girl, the conclusion (use the Core frames).' },
    develop: { amount: '8 sentences', how: 'Summary + compare the two examples + say whether you agree, with one reason.' },
    stretch: { amount: '100–120 words', how: 'Website task: respond to the article — summarise the view, use evidence, compare two examples and give your own conclusion.' },
  },
  frames: {
    core: [
      { en: 'I read an article about …', ar: 'قَرَأْتُ مَقَالًا عَنْ ______ .' },
      { en: 'The writer thinks that …', ar: 'يَرَى الكَاتِبُ أَنَّ ______ .' },
      { en: 'He gives the example of a young man who …', ar: 'يَذْكُرُ مِثَالًا لِشَابٍّ ______ .' },
      { en: 'He describes a girl who …', ar: 'يَصِفُ فَتَاةً ______ .' },
      { en: 'The writer concludes that …', ar: 'يَخْلُصُ الكَاتِبُ إِلَى أَنَّ ______ .' },
    ],
    develop: [
      { en: '…, but he is confident.', ar: '______ ، وَلٰكِنَّهُ وَاثِقٌ.' },
      { en: '…, whereas she is cheerful.', ar: '______ ، بَيْنَمَا هِيَ مَرِحَةٌ.' },
      { en: 'I agree with the writer because …', ar: 'أَتَّفِقُ مَعَ الكَاتِبِ لِأَنَّ ______ .' },
      { en: 'I don’t fully agree because …', ar: 'لَا أَتَّفِقُ تَمَامًا لِأَنَّ ______ .' },
      { en: 'So we must not rely on first impressions.', ar: 'لِذٰلِكَ لَا نَعْتَمِدُ عَلَى الاِنْطِبَاعِ الأَوَّلِ.' },
    ],
    bank: ['مَقَالٌ', 'الكَاتِبُ', 'يَرَى أَنَّ', 'يَذْكُرُ مِثَالًا', 'يَصِفُ', 'بَيْنَمَا', 'وَلٰكِنَّهُ', 'يَخْلُصُ إِلَى أَنَّ', 'أَتَّفِقُ', 'السُّلُوكُ', 'المَظْهَرُ', 'الدَّلِيلُ'],
  },
  stretch: [
    ['مَعَ أَنَّهُ وَاثِقٌ وَمُبْدِعٌ', 'even though he is confident and creative'],
    ['كَمَا يَصِفُ فَتَاةً أُسْلُوبُهَا رَسْمِيٌّ', 'he also describes a girl whose style is formal'],
    ['السُّلُوكُ أَقْوَى دَلِيلٍ عَلَى الشَّخْصِيَّةِ', 'behaviour is the strongest evidence of personality'],
    ['نَقْرَأُ المَعْلُومَاتِ بِدِقَّةٍ', 'we read the information carefully'],
    ['لَا نَعْتَمِدُ عَلَى الاِنْطِبَاعِ الأَوَّلِ', 'we do not rely on the first impression'],
  ],
  modelEn: 'I read an article about the relationship between appearance and personality. The writer thinks that clothes may express taste, but they are not enough to judge anyone. He gives the example of a young man who wears simple clothes, even though he is confident and creative. He also describes a girl whose style is formal, whereas she is cheerful with her friends. I agree with the writer, because behaviour is the strongest evidence of personality. So we must read information carefully and not rely on first impressions.',
  find: ['the writer’s view', 'the two examples', 'a contrast', 'the student’s agreement and reason'],
  modelNotes: 'Evidence: يَرَى الكَاتِبُ أَنَّ … وَلٰكِنَّهَا لَا تَكْفِي · مِثَالًا لِشَابٍّ … / يَصِفُ فَتَاةً … · مَعَ أَنَّهُ / بَيْنَمَا هِيَ · أَتَّفِقُ مَعَ الكَاتِبِ لِأَنَّ … (Spelling note: the website model writes عَنْ العَلَاقَةِ; standard Arabic joins it as عَنِ العَلَاقَةِ.)',
  selfCheck: [
    { route: 'core', text: 'I found the writer’s view and the conclusion.' },
    { route: 'core', text: 'I gave one example from the text.' },
    { route: 'develop', text: 'My pronouns refer to the right person.' },
    { route: 'develop', text: 'I explained the contrast.' },
    { route: 'stretch', text: 'I agreed or disagreed with evidence.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['نُقَيِّمُ', 'we judge, evaluate'], ['يُقَدِّمُ مَعْلُومَاتٍ', 'gives information'], ['المُنَاسَبَةِ', 'the occasion'], ['لَا يَكْشِفُ', 'does not reveal'], ['كُلَّهَا', 'all of it'],
    ['يَذْكُرُ مِثَالًا', 'he gives an example'], ['مُبْدِعٌ', 'creative'], ['يَخْلُصُ إِلَى أَنَّ', 'he concludes that'], ['السُّلُوكَ', 'behaviour'], ['وَحْدَهَا', 'alone'],
  ],
  prep: {
    words: [['كَيْفَ هُوَ؟ / كَيْفَ هِيَ؟', 'What is he / she like?', 'D2-L01'], ['مَنْ يَدْعَمُكَ؟', 'Who supports you?', 'D2-L02'], ['مَا أُسْلُوبُكَ؟', 'What is your style?', 'D2-L04'], ['أَيُّهُمَا تُفَضِّلُ؟', 'Which of the two do you prefer?', 'D2-L05'], ['هَلْ تَتَّفِقُ؟', 'Do you agree?', 'D2-L08']],
    questionEn: 'D2-L09 is a conversation lesson. Prepare 3–5 cue words (not a script) for: “Describe a person who is important to you.”',
    questionAr: 'صِفْ شَخْصًا مُهِمًّا لَكَ.',
    homework: {
      core: 'Website D2-L08: re-read the article and answer the six questions.',
      develop: 'Write an 8-sentence summary of the article with your opinion.',
      stretch: 'Website writing task: a 100–120-word response to the article.',
    },
    wordsSource: 'D2-L09 is a topic conversation across the whole unit: these five questions (one from each key lesson) are the conversation starters.',
  },
  remember: 'Remember: view → example → contrast → conclusion. Find the moves first.',
});

module.exports = { meta, slides };
