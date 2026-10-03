'use strict';
/* D5-L11 · D5 Consolidation — Past Tense Mastery and Speaking Preparation — website: Pathways › Development › D5 › D5-L11 (answer in the tense of the question,
 * stem before suffix, extend every answer, move between tenses; time-buying and repair phrases دَعْنِي أُفَكِّرُ · عَفْوًا، أَقْصِدُ).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking and writing used as published; one vowel-only distractor and one
 * “…” option replaced; English added to the patterns and speaking model. The website visual game repeats D5-L01, so it is skipped. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D5')({
  n: 11, fileTitle: 'D5_Consolidation_Past_Tense_Mastery', chip: 'Unit Review',
  title: 'D5 Consolidation — Past Tense Mastery and Speaking Preparation', arabic: 'تَرْسِيخُ الوَحْدَةِ — إِتْقَانُ الفِعْلِ المَاضِي وَإِعْدَادُ التَّحَدُّثِ',
  focus: 'Get ready for the D5 speaking: answer a past question in the past (كَيْفَ بَدَأْتَ؟ — بَدَأْتُ …), fix the stem before the suffix, extend every answer with a reason, and buy time or repair a slip in Arabic (دَعْنِي أُفَكِّرُ · عَفْوًا، أَقْصِدُ).',
  icon: 'FaListCheck', iconSet: 'fa6',
});

const site = D.site('D5-L11');
const quiz = site.grammar.quiz.map((it, i) => {
  if (i === 0) return { ...it, prompt: 'The examiner asks “How did you start this hobby?” Which answer is appropriate?' };
  if (i === 1) return { ...it, prompt: 'The examiner asks a girl “What did you do yesterday?” Which answer is appropriate?' };
  if (i === 3) return { ...it, options: [it.options[0], it.options[1], 'لَا شَيْءَ'] };
  if (i === 5) return { ...it, options: [it.options[0], it.options[1], 'زَوَرْتُ'] };
  return it;
});
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D5-L11', {
  support: `• No new grammar today: this is the D5 review and speaking rehearsal before the D5-L12 assessment.
• Core: answer four past questions aloud with frames, each with an accurate suffix. Develop: add a reason to each answer and use one time-buying phrase naturally. Stretch: a full topic answer past → present → future with no avoidance + the website 80-word self-review.
• THE trap (website): answering a past question in the present because it is easier. Train students to hear the tense of the question and MIRROR it.
• Use the Do Now and quick-check results to choose each student’s route for the final You Do.`,
  teach: 'Mirror the tense, fix the stem, extend, buy time, repair.',
  wedo: 'Sort strategies, fix three classic slips, then hear a candidate under pressure.',
  next: { nextCode: 'D5-L12', nextTitle: 'D5 Review and Unit Assessment', nextAr: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ' },
  objectives: ['Answer a past question in the past tense (mirror the question).', 'Fix the stem of irregular verbs before the suffix.', 'Extend every answer with a reason, a frequency or a connector.', 'Buy time and repair slips in Arabic.'],
  rulesAr: 'دِقَّةُ الفِعْلِ المَاضِي تَحْتَ الضَّغْطِ',
  flexGroups: [2],
  doNow: {
    questions: [
      q('What does دَعْنِي أُفَكِّرُ mean?', ['let me think', 'I mean', 'I agree'], 'Prepared at home (D5-L10).'),
      q('What does الطَّلَاقَةُ mean?', ['fluency', 'accuracy', 'hesitation'], 'Prepared at home (D5-L10).'),
      q('What does عَفْوًا، أَقْصِدُ mean?', ['sorry, I mean', 'let me think', 'good question'], 'Prepared at home (D5-L10).'),
      q('Choose the “I” past of زَارَ.', ['زُرْتُ', 'زَارْتُ', 'زَوَرْتُ'], 'D5-L07: hollow verbs.'),
      q('Which is a past habit?', ['كُنْتُ أَلْعَبُ', 'سَأَلْعَبُ', 'أَلْعَبُ الآنَ'], 'D5-L05.'),
    ],
    keyIdea: { text: 'Hear the tense of the question — then MIRROR it in your answer.', ar: 'كَيْفَ {k|بَدَأْتَ}؟ — {k|بَدَأْتُ} فِي الطُّفُولَةِ {e|لِأَنَّ} …' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D5-L10. Questions 4–5 retrieve D5-L07 (hollow verbs) and D5-L05 (كَانَ + present). Note which each student gets wrong: it is their priority for the speaking rehearsal.',
  },
  routes: {
    core: ['I can answer four past questions in the past.', 'I can use one time-buying phrase.'],
    develop: ['I can add a reason to every answer.', 'I can repair a slip with عَفْوًا، أَقْصِدُ.'],
    stretch: ['I can answer past → present → future.', 'I can review my own progress in 80 words.'],
  },
  bridge: [
    { ar: 'طَلَاقَةٌ', urdu: 'طلاقت / روانی', tr: 'ṭalāqat', en: 'fluency' },
    { ar: 'تَرَدُّدٌ', urdu: 'تردد', tr: 'taraddud', en: 'hesitation' },
    { ar: 'صَرَاحَةٌ', urdu: 'صراحت', tr: 'ṣarāḥat', en: 'frankness, clarity' },
    { ar: 'حَقِيقَةٌ', urdu: 'حقیقت', tr: 'ḥaqīqat', en: 'truth, fact' },
    { ar: 'عَفْوًا', urdu: 'معاف کیجیے', tr: 'muʿāf', en: 'sorry, excuse me (same root ʿ-f-w)' },
  ],
  bridgeNotes: 'URDU BRIDGE: طلاقت، تردد، صراحت، حقیقت are shared. عَفْوًا shares the root of Urdu معافی / معاف کیجیے (forgiveness, excuse me) — in Arabic it also means “you’re welcome” after شُكْرًا.',
  core: ['الحَدِيثُ بِالفِعْلِ المَاضِي', 'الدِّقَّةُ', 'الطَّلَاقَةُ', 'التَّرَدُّدُ', 'عَلَى سَبِيلِ المِثَالِ', 'فِي الحَقِيقَةِ', 'عَفْوًا، أَقْصِدُ', 'دَعْنِي أُفَكِّرُ', 'سُؤَالٌ جَيِّدٌ', 'كَمَا قُلْتُ', 'هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟', 'لَسْتُ مُتَأَكِّدًا'],
  forms: {
    'لَسْتُ مُتَأَكِّدًا': { tag: 'm · f', forms: [{ l: 'f.', ar: 'لَسْتُ مُتَأَكِّدَةً' }] },
    'أَتَّفِقُ مَعَكَ': { tag: 'm · f', forms: [{ l: 'to a girl', ar: 'أَتَّفِقُ مَعَكِ' }] },
    'هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟': { tag: 'm · f', forms: [{ l: 'to a woman', ar: 'هَلْ يُمْكِنُ أَنْ تُعِيدِي السُّؤَالَ؟' }] },
  },
  vocabNotes: {
    0: 'Speaking under pressure: the words examiners use (accuracy · fluency · hesitation).',
    1: 'Repair and hesitation phrases: learn three of these by heart — they keep you speaking Arabic while you think.',
    2: 'D5 revision anchors (FLEX): the six D5 topics, as headings for your revision.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · mirror the question (website rules 1–2)', title: 'A past question needs a past answer', ar: 'سُؤَالٌ مَاضٍ، جَوَابٌ مَاضٍ',
      cols: [{ label: 'Examiner asks', w: 4.4, size: 22 }, { label: 'You answer', w: 5.2, size: 22 }, { label: 'Check', w: 2.73 }],
      rows: [
        { core: true, cells: [P('كَيْفَ {k|بَدَأْتَ} هٰذِهِ الهِوَايَةَ؟', 'How did you start this hobby?'), P('{k|بَدَأْتُ} فِي الطُّفُولَةِ مَعَ أَخِي.', 'I started in childhood with my brother.'), '-ta → -tu'] },
        { core: true, cells: [P('مَاذَا {k|فَعَلْتِ} أَمْسِ؟', 'What did you (f.) do yesterday?'), P('{k|شَاهَدْتُ} مُبَارَاةً مَعَ أُسْرَتِي.', 'I watched a match with my family.'), 'I = -tu (boy or girl)'] },
        { cells: [P('أَيْنَ {e|زُرْتُمْ}؟', 'Where did you (all) visit?'), P('{e|زُرْنَا} المَتْحَفَ.', 'We visited the museum.'), 'hollow: zur-'] },
        { cells: [P('مَاذَا {e|رَأَيْتَ}؟', 'What did you see?'), P('{e|رَأَيْتُ} مَنْظَرًا جَمِيلًا.', 'I saw a beautiful view.'), 'weak: raʾay-'] },
        { core: true, cells: [P('وَمَا {w|خُطَطُكَ}؟', 'And what are your plans?'), P('{w|سَأَشْتَرِكُ} فِي بُطُولَةٍ.', 'I will take part in a championship.'), 'future question → sa-'] },
      ],
      ltr: true,
      foot: 'A girl answering “What did you do?” still says -tu: شَاهَدْتُ (I watched), not شَاهَدْتِ.',
      notes: `GRAMMAR PART 1 — website rules “Answer in the tense of the question” (if the examiner uses a past verb or a past time phrase, mirror it — answering in the present is the most common avoidance pattern) and “Check the stem before the suffix” (قَالَ → قُلْـ, مَشَى → مَشَيْـ, then the suffix). Website teaching point: “The avoidance trap.”
Watch out (website quiz 2): girls often answer شَاهَدْتِ because they hear it in the question — the answer is about “I”: شَاهَدْتُ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · extend, buy time, repair (website rules 3–4) · Develop / Stretch', title: 'Never just “yes”', ar: 'وَسِّعْ إِجَابَتَكَ',
      cards: [
        { chip: 'EXTEND · CORE', color: '1E6B52', head: 'فِعْلٌ + سَبَبٌ', big: 'لَعِبْتُ كُرَةَ السَّلَّةِ لِأَنَّهَا مُمْتِعَةٌ.', en: 'I played basketball because it is fun.', clue: 'Action + reason.' },
        { chip: 'BUY TIME · DEVELOP', color: '1D5FBF', head: 'دَعْنِي أُفَكِّرُ · سُؤَالٌ جَيِّدٌ', big: 'سُؤَالٌ جَيِّدٌ. دَعْنِي أُفَكِّرُ …', en: 'Good question. Let me think …', clue: 'Arabic, not silence.' },
        { chip: 'REPAIR · STRETCH', color: '6B4C9A', head: 'عَفْوًا، أَقْصِدُ', big: 'خَسِرْنَا … عَفْوًا، أَقْصِدُ تَعَادَلْنَا.', en: 'We lost … sorry, I mean we drew.', clue: 'Fix it aloud.' },
      ],
      error: { text: 'Website mistake: a one-word answer shows no range.', pairs: [['نَعَمْ، لَعِبْتُ لِأَنَّهَا مُمْتِعَةٌ.', 'نَعَمْ.']] },
      notes: `GRAMMAR PART 2 — website rules “Extend every answer” (a bare verb scores little — add لِأَنَّ, a frequency phrase or a connector) and “Move between tenses deliberately” (narrate, describe the habit now, state a plan). Website teaching point: “Buy time in Arabic, not in silence.”
All three phrases appear in the website listening — students will hear them used naturally.`,
    },
  ],
  quick: [0, 1, 2, 5],
  rest: [3, 4, 6, 7],
  ido: {
    title: 'Watch me answer under pressure',
    steps: [
      { head: 'Buy time', ar: '{e|سُؤَالٌ جَيِّدٌ}.', think: 'Arabic, not silence.' },
      { head: 'Mirror', ar: '{k|بَدَأْتُ} فِي الطُّفُولَةِ', think: 'Past question: past.' },
      { head: 'Extend', ar: 'لِأَنَّ أَخِي {k|كَانَ يَلْعَبُ}', think: 'Reason + habit.' },
      { head: 'Repair', ar: '{w|عَفْوًا، أَقْصِدُ} تَعَادَلْنَا', think: 'Fix the slip.' },
    ],
    legend: ['e', 'k', 'w'], legendLabels: { e: 'TIME-BUYER', k: 'PAST', w: 'REPAIR' },
    model: '{e|سُؤَالٌ جَيِّدٌ}. {k|بَدَأْتُ} فِي الطُّفُولَةِ، لِأَنَّ أَخِي {k|كَانَ يَلْعَبُ} كُرَةَ السَّلَّةِ كُلَّ مَسَاءٍ. {e|دَعْنِي أُفَكِّرُ}. {k|تَدَرَّبْتُ} مَرَّتَيْنِ، ثُمَّ {k|شَارَكْتُ} فِي مُبَارَاةٍ وَدِّيَّةٍ، وَلِلْأَسَفِ خَسِرْنَا. {w|عَفْوًا، أَقْصِدُ} تَعَادَلْنَا.',
    modelEn: 'Good question. I started in childhood, because my brother used to play basketball every evening. Let me think. I trained twice, then took part in a friendly match, and unfortunately we lost. Sorry, I mean we drew.',
    notes: 'I DO (3 min) — from the website listening (a candidate under pressure). Play the candidate yourself, with real pauses; let students spot each time-buyer and the repair. Then ask: which tense was each question in? Did the answers mirror it?',
  },
  patternEn: ['I started in childhood', 'let me think', 'I played because it is fun'],
  sorterNotes: 'Then each student chooses ONE item from each column to use in the speaking rehearsal.',
  patch: {
    grammar: { ...site.grammar, quiz },
    speaking: {
      model: [
        ['A', 'مَا هِوَايَتُكَ المُفَضَّلَةُ؟ وَكَيْفَ بَدَأْتَ بِهَا؟', 'What is your favourite hobby, and how did you start it?'],
        ['B', 'هِوَايَتِي المُفَضَّلَةُ كُرَةُ السَّلَّةِ. بَدَأْتُ فِي الطُّفُولَةِ لِأَنَّ أَخِي كَانَ يَلْعَبُهَا.', 'My favourite hobby is basketball. I started in childhood because my brother used to play it.'],
        ['A', 'صِفْ تَجْرِبَةً رِيَاضِيَّةً مَرَرْتَ بِهَا.', 'Describe a sporting experience you have had.'],
        ['B', 'الأُسْبُوعَ المَاضِيَ شَارَكْتُ فِي مُبَارَاةٍ، وَفَجْأَةً أُصِبْتُ، وَلٰكِنْ لِحُسْنِ الحَظِّ أَكْمَلْتُ اللَّعِبَ، وَسَأُشَارِكُ مَرَّةً أُخْرَى.', 'Last week I took part in a match, and suddenly I got injured, but luckily I finished the game, and I will take part again.'],
      ],
    },
  },
  patchNote: 'one vowel-only distractor and one “…” option replaced, and English added to the patterns and speaking model; the website visual game repeats D5-L01 and is skipped.',
  hints: ['Past question → past answer!', 'zāra + -tu: which stem?', 'Add a reason!'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nCount the time-buying phrases.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and note the tense of each examiner question.',
  gloss: [
    ['المُمْتَحِنُ: كَيْفَ بَدَأْتَ هٰذِهِ الهِوَايَةَ؟', 'Examiner: How did you start this hobby?'],
    ['الطَّالِبُ: سُؤَالٌ جَيِّدٌ. بَدَأْتُ فِي الطُّفُولَةِ، لِأَنَّ أَخِي كَانَ يَلْعَبُ كُرَةَ السَّلَّةِ كُلَّ مَسَاءٍ.', 'Student: Good question. I started in childhood, because my brother used to play basketball every evening.'],
    ['المُمْتَحِنُ: وَمَاذَا فَعَلْتَ الأُسْبُوعَ المَاضِيَ؟', 'Examiner: And what did you do last week?'],
    ['الطَّالِبُ: دَعْنِي أُفَكِّرُ. تَدَرَّبْتُ مَرَّتَيْنِ، ثُمَّ شَارَكْتُ فِي مُبَارَاةٍ وَدِّيَّةٍ، وَلِلْأَسَفِ خَسِرْنَا. عَفْوًا، أَقْصِدُ تَعَادَلْنَا.', 'Student: Let me think. I trained twice, then took part in a friendly match, and unfortunately we lost. Sorry, I mean we drew.'],
    ['المُمْتَحِنُ: وَمَا خُطَطُكَ؟ الطَّالِبُ: فِي الحَقِيقَةِ، سَأَشْتَرِكُ فِي بُطُولَةٍ مَدْرَسِيَّةٍ، وَأَنْوِي أَنْ أَتَدَرَّبَ أَكْثَرَ.', 'Examiner: And what are your plans? Student: In fact, I will take part in a school championship, and I intend to train more.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا هِوَايَتُكَ المُفَضَّلَةُ؟ وَكَيْفَ بَدَأْتَ بِهَا؟' },
      { route: 'develop', ar: 'صِفْ تَجْرِبَةً رِيَاضِيَّةً مَرَرْتَ بِهَا.' },
      { route: 'stretch', ar: 'مَا خُطَطُكَ لِلْإِجَازَةِ القَادِمَةِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'هِوَايَتِي ______ . بَدَأْتُ ______ لِأَنَّ ______ .' },
      { route: 'develop', ar: 'الأُسْبُوعَ المَاضِيَ ______ ، وَفَجْأَةً ______ .' },
      { route: 'stretch', ar: 'فِي الحَقِيقَةِ، سَـ ______ ، وَأَنْوِي أَنْ ______ .' },
    ],
    modelEn: ['What is your favourite hobby, and how did you start it?', 'My favourite hobby is basketball. I started in childhood because my brother used to play it.'],
    notes: 'FULL REHEARSAL (website: “full topic conversation”). Pairs: A is the examiner (reads the three questions), B answers for 1 minute; A ticks: mirrored tense? reason? time-buyer? Then swap. To a girl: هِوَايَتُكِ · بَدَأْتِ · مَرَرْتِ · خُطَطُكِ.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Answer four past questions in writing + one future plan (frames).' },
    develop: { amount: '60–70 words', how: 'A self-review with past verbs, كَانَ + present and أَمَّا الآنَ فَـ.' },
    stretch: { amount: '≈ 80 words', how: 'Website task: your D5 progress — difficulty · practice · improvement · next focus.' },
  },
  frames: {
    core: [
      { en: 'I started … in childhood because …', ar: 'بَدَأْتُ ______ فِي الطُّفُولَةِ لِأَنَّ ______ .' },
      { en: 'Yesterday I watched / played …', ar: 'أَمْسِ ______ .' },
      { en: 'Last week we visited …', ar: 'الأُسْبُوعَ المَاضِيَ زُرْنَا ______ .' },
      { en: 'Next holiday I will …', ar: 'فِي الإِجَازَةِ القَادِمَةِ سَـ ______ .' },
    ],
    develop: [
      { en: 'At first I used to …', ar: 'فِي البِدَايَةِ كُنْتُ ______ .' },
      { en: 'Then I practised …', ar: 'ثُمَّ تَدَرَّبْتُ عَلَى ______ .' },
      { en: 'As for now, I …', ar: 'أَمَّا الآنَ فَـ ______ .' },
      { en: 'In the future I will focus on …', ar: 'وَفِي المُسْتَقْبَلِ سَأُرَكِّزُ عَلَى ______ .' },
    ],
    bank: ['بَدَأْتُ', 'تَدَرَّبْتُ', 'شَارَكْتُ', 'زُرْتُ', 'قُلْتُ', 'كُنْتُ أَسْتَعْمِلُ', 'أَمَّا الآنَ فَـ', 'سَأُرَكِّزُ عَلَى', 'دَعْنِي أُفَكِّرُ', 'سُؤَالٌ جَيِّدٌ', 'عَفْوًا، أَقْصِدُ', 'فِي الحَقِيقَةِ'],
  },
  stretch: [
    ['كُنْتُ أَسْتَعْمِلُ المُضَارِعَ عِنْدَمَا …', 'I used to use the present when …'],
    ['رَكَّزْتُ عَلَى الأَفْعَالِ الشَّاذَّةِ', 'I focused on irregular verbs'],
    ['تَحَسَّنَتْ دِقَّتِي كَثِيرًا', 'my accuracy improved a lot'],
    ['بَدَلَ الصَّمْتِ', 'instead of silence'],
    ['أُضِيفُ سَبَبًا فِي كُلِّ إِجَابَةٍ', 'I add a reason to every answer'],
  ],
  modelEn: 'At the beginning I used to use the present when the teacher asked me about the past, and that was a common mistake. Then I practised ten verbs every day and focused on irregular verbs like qāla, zāra and mashā. Luckily my accuracy improved a lot. As for now, I use short phrases instead of silence, and I add a reason to every answer. In the future I will focus on tense variety, and I intend to practise speaking every day.',
  find: ['four past verbs', 'كُنْتُ + present', 'أَمَّا الآنَ فَـ', 'a future focus'],
  modelNotes: 'Website writing model (self-review). Evidence: كُنْتُ أَسْتَعْمِلُ · كَانَ ذٰلِكَ خَطَأً · تَدَرَّبْتُ · رَكَّزْتُ · تَحَسَّنَتْ · أَمَّا الآنَ فَأَسْتَعْمِلُ · سَأُرَكِّزُ · أَنْوِي أَنْ أَتَدَرَّبَ.',
  selfCheck: [
    { route: 'core', text: 'I answered past questions in the past.' },
    { route: 'core', text: 'My “I” verbs end in -tu (boys AND girls).' },
    { route: 'develop', text: 'Every answer has a reason or a detail.' },
    { route: 'develop', text: 'I used a time-buying phrase instead of silence.' },
    { route: 'stretch', text: 'My answer moved past → present → future.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['رَاجَعْتُ', 'I reviewed'], ['نُقَاطَ ضَعْفِي', 'my weak points'], ['المُضَارِعَ', 'the present tense'], ['خَطَأٌ شَائِعٌ', 'a common mistake'], ['رَكَّزْتُ عَلَى', 'I focused on'],
    ['تَحَسَّنَتْ دِقَّتِي', 'my accuracy improved'], ['مِنْ سِتَّةٍ إِلَى تِسْعَةٍ', 'from six to nine'], ['بَدَلَ الصَّمْتِ', 'instead of silence'], ['سَأُرَكِّزُ', 'I will focus'], ['إِضَافَةِ سَبَبٍ', 'adding a reason'],
  ],
  prep: {
    words: [['تَقْيِيمٌ', 'an assessment', 'pl. تَقْيِيمَاتٌ'], ['فَهْمُ المَسْمُوعِ', 'listening comprehension', '—'], ['فَهْمُ المَقْرُوءِ', 'reading comprehension', '—'], ['المُحَادَثَةُ', 'the conversation', '—'], ['أُرَاجِعُ إِجَابَتِي', 'I check my answer', 'تُرَاجِعُ she']],
    questionEn: 'Prepare three past-tense answers about your hobbies, each with a reason, for the speaking assessment.',
    questionAr: 'بَدَأْتُ … لِأَنَّ … · الأُسْبُوعَ المَاضِيَ … · سَـ …',
    homework: {
      core: 'Practise four past questions aloud; learn the five assessment words.',
      develop: 'A 60–70-word self-review; learn three time-buying phrases.',
      stretch: 'Website writing task (≈ 80 words) + a recorded 1-minute topic answer.',
    },
    wordsSource: 'The five words are the instruction words of the D5-L12 assessment (listening, reading and conversation).',
  },
  remember: 'Remember: mirror the tense — fix the stem — add a reason — and buy time in Arabic, never in silence.',
});

module.exports = { meta, slides };
