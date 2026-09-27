'use strict';
/* D2-L07 · Listening — People, Personality and Style Descriptions — website: Pathways › Development › D2 › D2-L07 (listening skills: reference, fact vs opinion, contrast = changed detail, inference from evidence). */
const D = require('./d-common');
const X = require('./d2-lex');
const { q } = D;

const meta = D.meta('D2')({
  n: 7, fileTitle: 'Listening_People_and_Style', chip: 'Listening Skills',
  title: 'Listening — People, Personality and Style Descriptions', arabic: 'الاِسْتِمَاعُ — وَصْفُ الأَشْخَاصِ وَالشَّخْصِيَّةِ وَالأُسْلُوبِ',
  focus: 'Listen to descriptions of people like a detective: track who “he / she / who” refers to, notice what changes after “but”, and separate facts, opinions and inferences backed by evidence.',
  icon: 'FaHeadphones', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const site = D.site('D2-L07');
const cut = site.listening.script.indexOf('فِي الحِوَارِ الثَّانِي');
const T1 = site.listening.script.slice(0, cut).trim(); const T2 = site.listening.script.slice(cut).trim();

const slides = D.devLesson('D2-L07', {
  support: `• LISTENING-SKILLS lesson: the website script has two short dialogues — each is done as its own cycle (predict → listen twice → read the script → answers).
• Core: predict WHO and WHAT for each question, then answer the appearance and clothes questions. Develop: all questions + the changed detail after “but”. Stretch: fact / opinion / inference and the written summary.
• All vocabulary is D2 revision (signals, descriptions, style) — use the vocab slides quickly as a warm-up game (“say the feminine / the plural”).
• Urdu bridge: حقیقت، رائے، دلیل، نتیجہ (→ اِسْتِنْتَاجٌ), تبدیلی.`,
  teach: 'Who is it? What changed? Fact or opinion?',
  wedo: 'Two short listening cycles with the script.',
  next: { nextCode: 'D2-L08', nextTitle: 'Reading — Personality, Relationships and Fashion Texts', nextAr: 'القِرَاءَةُ' },
  flexGroups: [1, 2],
  doNow: {
    questions: [
      q('What does خُصُوصًا mean?', ['especially', 'usually', 'therefore'], 'Prepared at home.'),
      q('What does مِنْ جِهَةٍ أُخْرَى mean?', ['on the other hand', 'on one hand', 'although'], 'Prepared at home.'),
      q('Choose “She has long hair.”', ['لَهَا شَعْرٌ طَوِيلٌ.', 'لَهُ شَعْرٌ طَوِيلَةٌ.', 'هِيَ شَعْرُهَا طَوِيلَةٌ.'], 'D2-L06: hair is masculine.'),
      q('Choose “the girl who wears a headscarf”.', ['الفَتَاةُ الَّتِي تَرْتَدِي حِجَابًا', 'الفَتَاةُ الَّذِي يَرْتَدِي حِجَابًا', 'الوَلَدُ الَّتِي تَرْتَدِي'], 'D2-L06: allatī.'),
      q('Choose “more confident than”.', ['أَكْثَرُ ثِقَةً مِنْ', 'أَكْثَرُ وَاثِقٌ مِنْ', 'وَاثِقٌ مِنْ'], 'D2-L05.'),
    ],
    keyIdea: { text: 'After “but” the answer often CHANGES. Keep listening until the end of the sentence.', ar: 'كَانَ يَرْتَدِي مَلَابِسَ رَسْمِيَّةً، {k|وَلٰكِنَّهُ الآنَ} يُفَضِّلُ أُسْلُوبًا أَكْثَرَ رَاحَةً.' },
    retrieves: 'Questions 1–2 test two of the five listening signals prepared at home. Questions 3–5 retrieve D2-L06 (appearance, الَّتِي) and D2-L05 (comparatives).',
  },
  routes: {
    core: ['I can say who is being described.', 'I can pick out appearance and clothes details.'],
    develop: ['I can catch a detail that changes after “but”.', 'I can say who a pronoun refers to.'],
    stretch: ['I can separate fact, opinion and inference.', 'I can summarise two spoken descriptions with evidence.'],
  },
  bridge: [
    { ar: 'حَقِيقَةٌ', urdu: 'حقیقت', tr: 'haqīqat', en: 'fact, truth' },
    { ar: 'رَأْيٌ', urdu: 'رائے', tr: 'rāy', en: 'opinion' },
    { ar: 'دَلِيلٌ', urdu: 'دلیل', tr: 'dalīl', en: 'evidence' },
    { ar: 'اِسْتِنْتَاجٌ', urdu: 'نتیجہ', tr: 'natīja', en: 'result → inference' },
    { ar: 'تَغْيِيرٌ', urdu: 'تغیر', tr: 'taghayyur', en: 'change' },
  ],
  bridgeNotes: 'URDU BRIDGE: حقیقت → حَقِيقَةٌ (fact); رائے → رَأْيٌ (opinion); دلیل → دَلِيلٌ (evidence); نتیجہ shares the root of اِسْتِنْتَاجٌ (inference, conclusion); تغیر / تبدیلی → تَغْيِيرٌ (change). Students already have the key concepts of this lesson in Urdu.',
  core: ['لِأَنَّ', 'لِذٰلِكَ', 'وَلٰكِنَّ', 'بَيْنَمَا', 'عَلَى الرَّغْمِ مِنْ أَنَّ', 'فِي رَأْيِي'],
  forms: X.formsFor('D2-L07'),
  vocabNotes: { 0: 'Listening signals: sort them live into REASON (لِأَنَّ، لِذٰلِكَ) · CHANGE / CONTRAST (وَلٰكِنَّ، بَيْنَمَا، مِنْ جِهَةٍ أُخْرَى) · OPINION (فِي رَأْيِي) · FREQUENCY (عَادَةً، أَحْيَانًا). In listening, contrast words warn you: the answer may change.', 1: 'Description bank (FLEX) — revision game: teacher says the m. form, students say f. and pl.', 2: 'Style and comparison (FLEX).' },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · listening signals (website table)', title: 'What each signal tells the listener', ar: 'عَلَامَاتُ الاِسْتِمَاعِ',
      cols: [{ label: 'Signal', w: 3.0, size: 24 }, { label: 'Example', w: 4.8, size: 22 }, { label: 'Track …', w: 2.2 }, { label: 'Question it answers', w: 2.33 }],
      rows: [
        { core: true, cells: [{ ar: 'هُوَ / هِيَ · ـهُ / ـهَا' }, P('مَرْيَمُ تَرْتَدِي مِعْطَفًا، وَ{k|هُوَ} أَزْرَقُ.', 'Maryam wears a coat, and it (the coat) is blue.'), 'reference', 'Who / what is it?'] },
        { core: true, cells: [{ ar: 'الَّذِي / الَّتِي' }, P('أَحْمَدُ هُوَ {k|الَّذِي} يَتَحَدَّثُ.', 'Ahmad is the one who is speaking.'), 'the person', 'Which person?'] },
        { cells: [{ ar: 'وَلٰكِنَّ / بَيْنَمَا' }, P('كَانَ رَسْمِيًّا، {k|وَلٰكِنَّهُ} الآنَ …', 'He used to be formal, but now …'), 'a changed detail', 'What changed?'] },
        { cells: [{ ar: 'فِي رَأْيِي / أَرَى أَنَّ' }, P('{k|أَرَى أَنَّ} أُسْلُوبَهُ مُنَاسِبٌ.', 'I think his style is suitable.'), 'an opinion', 'What does he / she think?'] },
      ],
      foot: 'Website warning: never choose an answer from one familiar word — check the whole clause and who it refers to.',
      notes: `GRAMMAR PART 1 — website rules “Track reference” (identify exactly who each pronoun or relative clause refers to) and “Follow comparison and contrast” (contrast words often signal that the answer has changed), with the website table (Signal · What to track · Example).
Note row 1: هُوَ can refer to a THING (the coat, masculine) — not only a person.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · fact, opinion, inference (website rules) · Develop / Stretch', title: 'Fact · opinion · inference', ar: 'حَقِيقَةٌ · رَأْيٌ · اِسْتِنْتَاجٌ',
      cards: [
        { chip: 'FACT · CORE', color: '1D5FBF', head: 'دَلِيلٌ صَرِيحٌ', big: 'يَرْتَدِي قَمِيصًا أَبْيَضَ.', en: 'He is wearing a white shirt.', clue: 'You can see / hear it.' },
        { chip: 'OPINION · DEVELOP', color: '6B4C9A', head: 'رَأْيٌ', big: 'فِي رَأْيِي، أُسْلُوبُهُ أَنِيقٌ.', en: 'In my opinion, his style is elegant.', clue: 'Signal: in my opinion / I think.' },
        { chip: 'INFERENCE · STRETCH', color: '1E7B4F', head: 'اِسْتِنْتَاجٌ', big: 'يُسَاعِدُ الجَمِيعَ؛ لِذٰلِكَ يَبْدُو مُتَعَاوِنًا.', en: 'He helps everyone, so he seems helpful.', clue: 'Behaviour → probable quality.' },
      ],
      error: { text: 'Website rule: an inference needs a stated action.', pairs: [['هِيَ مُتَعَاوِنَةٌ لِأَنَّهَا تُسَاعِدُ زَمِيلَاتِهَا.', 'هِيَ مُتَعَاوِنَةٌ لِأَنَّ قَمِيصَهَا أَزْرَقُ.']] },
      notes: `GRAMMAR PART 2 — website rules “Distinguish fact and opinion” (use the language signal and supporting detail, not a guess) and “Infer from evidence” (an inference must be supported by a stated action or attitude). Links to D2-L04 (don’t judge by clothes) and D2-L06 (يَبْدُو).`,
    },
  ],
  quick: [0, 2, 3, 7],
  rest: [1, 4, 5, 6],
  ido: {
    title: 'Watch me catch the changed detail',
    steps: [
      { head: '1 · Predict', ar: 'مَاذَا يُفَضِّلُ أَخُو عَلِيٍّ الآنَ؟', think: 'Answer type: a STYLE — and “now”.' },
      { head: '2 · Listen', ar: 'كَانَ يَرْتَدِي {e|مَلَابِسَ رَسْمِيَّةً}،', think: 'Trap! That was BEFORE.' },
      { head: '3 · After “but”', ar: '{k|وَلٰكِنَّهُ الآنَ} يُفَضِّلُ {w|أُسْلُوبًا أَكْثَرَ رَاحَةً}.', think: '“Now” → the answer.' },
      { head: '4 · Evidence', ar: 'الجَوَابُ: أُسْلُوبٌ أَكْثَرُ رَاحَةً (بَعْدَ «وَلٰكِنَّهُ الآنَ»).', think: 'Quote the words.' },
    ],
    legend: ['e', 'k', 'w'], legendLabels: { e: 'DISTRACTOR (BEFORE)', k: 'SIGNAL', w: 'ANSWER (NOW)' },
    model: 'السُّؤَالُ: مَاذَا يُفَضِّلُ أَخُو عَلِيٍّ الآنَ؟ ← سَمِعْتُ: كَانَ يَرْتَدِي {e|مَلَابِسَ رَسْمِيَّةً}، {k|وَلٰكِنَّهُ الآنَ} يُفَضِّلُ {w|أُسْلُوبًا أَكْثَرَ رَاحَةً}. ← الجَوَابُ: {w|أُسْلُوبٌ أَكْثَرُ رَاحَةً}.',
    modelEn: 'Question: What does Ali’s brother prefer now? → I heard: he used to wear formal clothes, but now he prefers a more comfortable style. → Answer: a more comfortable style.',
    notes: 'I DO (3 min) — the teacher thinks aloud through the key question of dialogue 2 (the website speaking model calls it “the important change”). “Formal clothes” is the distractor: it was true BEFORE.',
  },
  modelsNotes: '• Core: copy sentence 1 and change the colour. • Develop: copy sentences 2–3. • Stretch: write your own inference with لِذٰلِكَ يَبْدُو …',
  sorterCats: ['Fact', 'Opinion', 'Inference'],
  patch: {
    patterns: [
      { ar: 'مَرْيَمُ تَرْتَدِي مِعْطَفًا، وَهُوَ أَزْرَقُ.', en: 'Maryam is wearing a coat, and it is blue.', tip: 'Reference: huwa = the coat.' },
      { ar: 'فِي رَأْيِي، أُسْلُوبُهُ أَنِيقٌ.', en: 'In my opinion, his style is elegant.', tip: 'Opinion signal.' },
      { ar: 'هُوَ هَادِئٌ، بَيْنَمَا هِيَ مَرِحَةٌ.', en: 'He is calm, whereas she is cheerful.', tip: 'Contrast.' },
      { ar: 'يُسَاعِدُ الجَمِيعَ؛ لِذٰلِكَ يَبْدُو مُتَعَاوِنًا.', en: 'He helps everyone, so he seems helpful.', tip: 'Inference from evidence.' },
    ],
    mistakes: [
      { wrong: 'مَرْيَمُ تَرْتَدِي مِعْطَفًا، وَهِيَ أَزْرَقُ.', right: 'مَرْيَمُ تَرْتَدِي مِعْطَفًا، وَهُوَ أَزْرَقُ.', why: 'The coat is masculine → هُوَ.' },
      { wrong: 'هُوَ هَادِئٌ، لِأَنَّ هِيَ مَرِحَةٌ.', right: 'هُوَ هَادِئٌ، بَيْنَمَا هِيَ مَرِحَةٌ.', why: 'A contrast needs بَيْنَمَا, not a reason.' },
      { wrong: 'هِيَ مُتَعَاوِنَةٌ لِأَنَّ قَمِيصَهَا أَزْرَقُ.', right: 'هِيَ مُتَعَاوِنَةٌ لِأَنَّهَا تُسَاعِدُ زَمِيلَاتِهَا.', why: 'An inference needs behaviour as evidence.' },
    ],
    sorter: {
      title: 'Fact, opinion or inference?', instructions: 'Decide what kind of statement each sentence is.',
      categories: ['Fact', 'Opinion', 'Inference'],
      items: [
        { label: 'يَرْتَدِي قَمِيصًا أَسْوَدَ.', answer: 0 }, { label: 'لَهَا شَعْرٌ قَصِيرٌ.', answer: 0 }, { label: 'ثَمَنُهُ خَمْسُونَ جُنَيْهًا.', answer: 0 },
        { label: 'فِي رَأْيِي هُوَ أَنِيقٌ.', answer: 1 }, { label: 'أَرَى أَنَّ أُسْلُوبَهُ مُنَاسِبٌ.', answer: 1 },
        { label: 'يُسَاعِدُ الجَمِيعَ؛ لِذٰلِكَ يَبْدُو مُتَعَاوِنًا.', answer: 2 }, { label: 'لَا يَخَافُ مِنَ الجَدِيدِ؛ فَهُوَ وَاثِقٌ.', answer: 2 },
      ],
    },
    reading: {
      questions: [
        L('What is this text?', ['a summary of two interviews', 'an advert', 'a diary'], 'مُلَخَّصُ مُقَابَلَتَيْنِ.'),
        L('How does the first speaker describe her colleague?', ['calm and helpful', 'cheerful and loud', 'elegant and formal'], 'زَمِيلَةً هَادِئَةً وَمُتَعَاوِنَةً.'),
        L('What does the colleague wear at school?', ['practical clothes', 'formal clothes', 'colourful clothes'], 'مَلَابِسَ عَمَلِيَّةً فِي المَدْرَسَةِ.'),
        L('What is the young man interested in?', ['fashion', 'sport', 'travel'], 'شَابًّا يَهْتَمُّ بِالمَوْضَةِ.'),
        L('What does he choose when travelling?', ['comfortable clothes', 'elegant clothes', 'traditional clothes'], 'يَخْتَارُ المَلَابِسَ المُرِيحَةَ عِنْدَ السَّفَرِ.'),
        L('What do both texts do?', ['separate appearance from personality and give evidence first', 'judge people by their clothes', 'only describe clothes'], 'يَفْصِلُ بَيْنَ المَظْهَرِ وَالشَّخْصِيَّةِ وَيُقَدِّمُ دَلِيلًا.'),
      ],
    },
  },
  hints: ['The coat (miʿṭaf) is masculine: huwa or hiya?', 'Contrast or reason?', 'Is a colour evidence of character?'],
  listenParts: [
    {
      title: 'Dialogue 1: Samira describes Nadia', script: T1, q: [], min: 3,
      extra: [
        L('Whom does Samira describe?', ['her friend Nadia', 'her sister', 'her teacher'], 'تَصِفُ سَمِيرَةُ صَدِيقَتَهَا نَادِيَةَ.'),
        L('How is Nadia in class?', ['calm', 'cheerful', 'loud'], 'هَادِئَةٌ فِي الفَصْلِ.'),
        L('How is she with her friends?', ['cheerful', 'calm', 'serious'], 'وَلٰكِنَّهَا مَرِحَةٌ مَعَ أَصْدِقَائِهَا.'),
        L('What is she like and what does she wear?', ['medium height, short hair, simple clothes', 'tall, long hair, formal clothes', 'short, curly hair, colourful clothes'], 'مُتَوَسِّطَةُ القَامَةِ وَلَهَا شَعْرٌ قَصِيرٌ … مَلَابِسَ بَسِيطَةً.'),
      ],
      tip: 'Two answers change after “but” (calm → cheerful).\nListen for: هَادِئَةٌ · مَرِحَةٌ · بَسِيطَةً.',
      routes: 'Core: questions 1 and 4. Develop/Stretch: all four.',
      gloss: [
        ['فِي الحِوَارِ الأَوَّلِ تَصِفُ سَمِيرَةُ صَدِيقَتَهَا نَادِيَةَ.', 'In the first dialogue Samira describes her friend Nadia.'],
        ['تَقُولُ إِنَّهَا هَادِئَةٌ فِي الفَصْلِ، وَلٰكِنَّهَا مَرِحَةٌ مَعَ أَصْدِقَائِهَا.', 'She says that she is calm in class, but cheerful with her friends.'],
        ['نَادِيَةُ مُتَوَسِّطَةُ القَامَةِ وَلَهَا شَعْرٌ قَصِيرٌ، وَتَرْتَدِي عَادَةً مَلَابِسَ بَسِيطَةً.', 'Nadia is of medium height and has short hair, and she usually wears simple clothes.'],
      ],
    },
    {
      title: 'Dialogue 2: Ali talks about his brother', script: T2, q: [], min: 3,
      extra: [
        L('Whom does Ali talk about?', ['his brother', 'his friend', 'his father'], 'يَتَحَدَّثُ عَلِيٌّ عَنْ أَخِيهِ.'),
        L('What did his brother USED TO wear?', ['formal clothes', 'sports clothes', 'traditional clothes'], 'كَانَ أَخُوهُ يَرْتَدِي مَلَابِسَ رَسْمِيَّةً.'),
        L('What does he prefer NOW?', ['a more comfortable style', 'more formal clothes', 'the same style'], 'وَلٰكِنَّهُ الآنَ يُفَضِّلُ أُسْلُوبًا أَكْثَرَ رَاحَةً.'),
        L('Why does Ali think his brother is confident?', ['he is not afraid to try a new style', 'he is tall', 'he talks a lot'], 'لِأَنَّهُ لَا يَخَافُ مِنْ تَجْرِبَةِ أُسْلُوبٍ جَدِيدٍ.'),
      ],
      tip: 'كَانَ = before. الآنَ = now.\nQuestion 4 is an INFERENCE: find the evidence.',
      routes: 'Core: questions 1 and 3. Develop/Stretch: all four.',
      gloss: [
        ['فِي الحِوَارِ الثَّانِي يَتَحَدَّثُ عَلِيٌّ عَنْ أَخِيهِ.', 'In the second dialogue Ali talks about his brother.'],
        ['كَانَ أَخُوهُ يَرْتَدِي مَلَابِسَ رَسْمِيَّةً، وَلٰكِنَّهُ الآنَ يُفَضِّلُ أُسْلُوبًا أَكْثَرَ رَاحَةً.', 'His brother used to wear formal clothes, but now he prefers a more comfortable style.'],
        ['عَلِيٌّ يَرَى أَنَّ أَخَاهُ وَاثِقٌ لِأَنَّهُ لَا يَخَافُ مِنْ تَجْرِبَةِ أُسْلُوبٍ جَدِيدٍ.', 'Ali thinks his brother is confident because he is not afraid of trying a new style.'],
      ],
    },
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا الكَلِمَاتُ الَّتِي تُسَاعِدُكَ عَلَى تَتَبُّعِ المُتَحَدِّثِ؟' },
      { route: 'develop', ar: 'صِفْ تَغْيِيرًا سَمِعْتَهُ فِي النَّصِّ.' },
      { route: 'develop', ar: 'كَيْفَ تُفَرِّقُ بَيْنَ الحَقِيقَةِ وَالرَّأْيِ؟' },
      { route: 'stretch', ar: 'اذْكُرِ اسْتِنْتَاجًا وَدَلِيلَهُ.' },
    ],
    stems: [
      { route: 'core', ar: 'تُسَاعِدُنِي كَلِمَاتٌ مِثْلُ ______ .' },
      { route: 'develop', ar: 'كَانَ ______ ، وَلٰكِنَّهُ الآنَ ______ .' },
      { route: 'develop', ar: 'الحَقِيقَةُ: ______ . الرَّأْيُ: ______ .' },
      { route: 'stretch', ar: 'يَبْدُو ______ ؛ وَالدَّلِيلُ أَنَّهُ ______ .' },
    ],
    modelEn: ['Whom does Samira describe?', 'She describes her friend Nadia.'],
    notes: 'Website reflection prompts. Website model continues: A: مَا التَّغْيِيرُ المُهِمُّ؟ (What is the important change?) B: أَخُو عَلِيٍّ أَصْبَحَ يُفَضِّلُ مَلَابِسَ أَكْثَرَ رَاحَةً. (Ali’s brother now prefers more comfortable clothes.)',
  },
  write: {
    core: { amount: '5 sentences', how: 'Describe Nadia from dialogue 1: who she is, class vs friends, height, hair, clothes.' },
    develop: { amount: '8 sentences', how: 'Summarise both dialogues, including the change after “but”.' },
    stretch: { amount: '100–120 words', how: 'Website task: summarise both descriptions — speakers, people, appearance, personality, style, changes and your evidence.' },
  },
  frames: {
    core: [
      { en: 'Samira describes her friend Nadia.', ar: 'تَصِفُ سَمِيرَةُ صَدِيقَتَهَا نَادِيَةَ.' },
      { en: 'Nadia is calm in class, but …', ar: 'نَادِيَةُ هَادِئَةٌ فِي الفَصْلِ، وَلٰكِنَّهَا ______ .' },
      { en: 'She is of … height.', ar: 'هِيَ ______ القَامَةِ.' },
      { en: 'She has … hair.', ar: 'لَهَا شَعْرٌ ______ .' },
      { en: 'She usually wears …', ar: 'تَرْتَدِي عَادَةً ______ .' },
    ],
    develop: [
      { en: 'Ali talks about his brother.', ar: 'يَتَحَدَّثُ عَلِيٌّ عَنْ أَخِيهِ.' },
      { en: 'He used to wear …, but now …', ar: 'كَانَ يَرْتَدِي ______ ، وَلٰكِنَّهُ الآنَ ______ .' },
      { en: 'Ali thinks that his brother is …', ar: 'يَرَى عَلِيٌّ أَنَّ أَخَاهُ ______ .' },
      { en: 'The evidence is that …', ar: 'الدَّلِيلُ أَنَّهُ ______ .' },
      { en: 'Both texts …', ar: 'كِلَا النَّصَّيْنِ ______ .' },
    ],
    bank: ['تَصِفُ', 'يَتَحَدَّثُ عَنْ', 'هَادِئَةٌ', 'مَرِحَةٌ', 'مُتَوَسِّطَةُ القَامَةِ', 'بَسِيطَةً', 'رَسْمِيَّةً', 'أَكْثَرَ رَاحَةً', 'كَانَ', 'الآنَ', 'وَلٰكِنَّ', 'الدَّلِيلُ'],
  },
  stretch: [
    ['اِسْتَمَعْتُ إِلَى نَصَّيْنِ عَنْ شَخْصَيْنِ', 'I listened to two texts about two people'],
    ['الَّذِي غَيَّرَ أُسْلُوبَهُ', 'who changed his style'],
    ['مِنَ المَلَابِسِ الرَّسْمِيَّةِ إِلَى …', 'from formal clothes to …'],
    ['يُجَرِّبُ أَفْكَارًا جَدِيدَةً', 'he tries new ideas'],
    ['الدَّلِيلُ أَهَمُّ مِنَ التَّخْمِينِ', 'evidence is more important than guessing'],
  ],
  modelEn: 'I listened to two texts about two people. In the first text Samira describes her friend Nadia. Nadia is calm in class, but cheerful with her friends. She has short hair and wears simple clothes. In the second text Ali talks about his brother, who changed his style from formal clothes to more comfortable clothes. Ali believes his brother is confident because he tries new ideas. In every text, evidence is more important than guessing.',
  find: ['a contrast inside one description', 'the changed detail', 'an inference and its evidence', 'the relative clause'],
  modelNotes: 'Evidence: هَادِئَةٌ … وَلٰكِنَّهَا مَرِحَةٌ · مِنَ المَلَابِسِ الرَّسْمِيَّةِ إِلَى مَلَابِسَ أَكْثَرَ رَاحَةً · وَاثِقٌ لِأَنَّهُ يُجَرِّبُ أَفْكَارًا جَدِيدَةً · أَخِيهِ الَّذِي غَيَّرَ أُسْلُوبَهُ.',
  selfCheck: [
    { route: 'core', text: 'I said who each speaker describes.' },
    { route: 'core', text: 'My appearance details are exact.' },
    { route: 'develop', text: 'I included the change after “but”.' },
    { route: 'develop', text: 'My pronouns refer to the right person.' },
    { route: 'stretch', text: 'Every inference has evidence.' },
  ],
  exit: [0, 2, 4],
  glossary: [
    ['مُلَخَّصُ', 'a summary of'], ['مُقَابَلَتَيْنِ', 'two interviews'], ['المُتَحَدِّثَةُ الأُولَى', 'the first (female) speaker'], ['زَمِيلَةً', 'a (female) classmate'], ['تَذْكُرُ أَنَّ', 'she mentions that'],
    ['يَهْتَمُّ بِـ', 'is interested in'], ['عِنْدَ السَّفَرِ', 'when travelling'], ['كِلَا النَّصَّيْنِ', 'both texts'], ['يَفْصِلُ بَيْنَ', 'separates'], ['الاِسْتِنْتَاجِ', 'the conclusion, inference'],
  ],
  prep: {
    words: [['أَتَفَاهَمُ مَعَ', 'I get on with', 'D2-L02'], ['صَدِيقٌ مُقَرَّبٌ', 'a close friend', 'D2-L02'], ['الأُسْلُوبُ', 'style', 'D2-L04'], ['يُعَبِّرُ عَنْ', 'expresses', 'D2-L04'], ['عَلَى الرَّغْمِ مِنْ أَنَّ', 'although', 'D2-L04']],
    questionEn: 'D2-L08 is a reading lesson on personality, relationships and fashion. Which of these three topics do you find easiest to read about, and why?',
    questionAr: 'أَيُّ مَوْضُوعٍ أَسْهَلُ لَكَ؟',
    homework: {
      core: 'Website D2-L07: listen again to the website audio and answer the questions.',
      develop: 'Write 8 sentences summarising both dialogues.',
      stretch: 'Website writing task: a 100–120-word summary of the two descriptions.',
    },
    wordsSource: 'D2-L08 recycles the whole unit; these five high-value words (from D2-L02 and D2-L04) appear in its reading texts.',
  },
  remember: 'Remember: after “but”, the answer often changes — keep listening.',
});

module.exports = { meta, slides };
