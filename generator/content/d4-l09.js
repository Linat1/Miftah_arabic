'use strict';
/* D4-L09 · Writing — Environment and Technology Article — website: Pathways › Development › D4 › D4-L09 (paragraph logic claim → explanation → evidence → link,
 * concession عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …, purpose لِكَيْ + subjunctive inside an argument, no “feature dumping”; 130–140 words).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading model and writing model used as published; English added to the model sentences
 * and speaking model. The website lesson has no picture game. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D4')({
  n: 9, fileTitle: 'Writing_Environment_and_Technology_Article', chip: 'Extended Writing',
  title: 'Writing — Environment and Technology Article', arabic: 'الكِتَابَةُ — مَقَالٌ عَنِ البِيئَةِ وَالتِّقْنِيَّةِ',
  focus: 'Plan and write a 130–140-word article with a clear position: introduction + thesis · argument + example · counterargument · conclusion that synthesises — using connectors and range features only where they add meaning.',
  icon: 'FaPenNib', iconSet: 'fa6',
});

const site = D.site('D4-L09');
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D4-L09', {
  support: `• Core: a supported 70–90-word article with one frame per paragraph (question · argument + example · “however” · conclusion). Develop: 130–140 words, four paragraphs, one concession and one purpose clause. Stretch: a balanced argument with a qualified judgement (شَرِيطَةَ أَنْ …) and a self-audit against the website checklist.
• Key message from the website: a range feature earns marks ONLY when it adds meaning — no “feature dumping”.
• Builds on D3-L09 (four-paragraph career text) and the D4 language: passive reporting (L03/L06/L08), conditions (L07), statistics (L08).`,
  teach: 'Paragraph logic, concession, purpose and meaningful range.',
  wedo: 'Sort the toolkit, fix stacked connectors, then hear how to structure an article.',
  next: { nextCode: 'D4-L10', nextTitle: 'Listening — Environment and Technology News', nextAr: 'الاسْتِمَاعُ — أَخْبَارُ البِيئَةِ وَالتِّقْنِيَّةِ' },
  objectives: ['Build a paragraph: claim → explanation → evidence → link.', 'Use a genuine concession: عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …', 'Use purpose (لِكَيْ + subjunctive) where it adds meaning.', 'Write a 130–140-word article with a clear position and a conclusion that synthesises.'],
  rulesTitle: 'Cohesion, range and accuracy in extended writing',
  rulesAr: 'التَّرَابُطُ وَالتَّنَوُّعُ وَالدِّقَّةُ فِي الكِتَابَةِ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does حُجَّةٌ مُضَادَّةٌ mean?', ['a counterargument', 'a conclusion', 'an introduction'], 'Prepared at home (D4-L08).'),
      q('What does عَلَاوَةً عَلَى ذٰلِكَ mean?', ['in addition, moreover', 'however', 'in conclusion'], 'Prepared at home (D4-L08).'),
      q('What does خَاتِمَةٌ mean?', ['a conclusion', 'a paragraph', 'evidence'], 'Prepared at home (D4-L08).'),
      q('Which phrase gives a SOURCE?', ['وَفْقًا لِلتَّقْرِيرِ', 'نَتِيجَةً لِذٰلِكَ', 'فِي الخِتَامِ'], 'D4-L08.'),
      q('Complete: نَزْرَعُ الأَشْجَارَ لِكَيْ ___ الهَوَاءَ.', ['نُحَسِّنَ', 'نُحَسِّنُ', 'حَسَّنَّا'], 'D4-L04: after li-kay the verb ends in -a.'),
    ],
    keyIdea: { text: 'Every paragraph does ONE job, and every connector must do a job too.', ar: '{k|مِنْ نَاحِيَةٍ} … {w|عَلَاوَةً عَلَى ذٰلِكَ} … {e|مِنْ نَاحِيَةٍ أُخْرَى} … فِي الخِتَامِ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D4-L08. Question 4 retrieves D4-L08 (source); question 5 retrieves purpose + subjunctive.',
  },
  routes: {
    core: ['I can write four short paragraphs with frames.', 'I can state my opinion with a reason.'],
    develop: ['I can build a paragraph with an example.', 'I can use a concession and a purpose clause.'],
    stretch: ['I can write a balanced, qualified argument.', 'I can audit my draft and improve it.'],
  },
  bridge: [
    { ar: 'مُقَدِّمَةٌ', urdu: 'مقدمہ', tr: 'muqaddama', en: 'Urdu: preface / lawsuit · Arabic: introduction' },
    { ar: 'دَلِيلٌ', urdu: 'دلیل', tr: 'dalīl', en: 'Urdu: argument · Arabic: evidence, proof' },
    { ar: 'حُجَّةٌ', urdu: 'حجت', tr: 'ḥujjat', en: 'argument, proof' },
    { ar: 'خَاتِمَةٌ', urdu: 'خاتمہ', tr: 'khātima', en: 'conclusion, ending' },
    { ar: 'مِثَالٌ', urdu: 'مثال', tr: 'misāl', en: 'example' },
  ],
  bridgeNotes: 'URDU BRIDGE: مثال، خاتمہ، حجت are shared. CAREFUL: Urdu مقدمہ often means a court case — Arabic مُقَدِّمَةٌ is an introduction. Urdu دلیل = an argument you make; Arabic دَلِيلٌ = the proof / evidence that supports it (the argument is حُجَّةٌ).',
  core: ['مُقَدِّمَةٌ', 'فِقْرَةٌ', 'حُجَّةٌ رَئِيسِيَّةٌ', 'دَلِيلٌ', 'مِثَالٌ مُحَدَّدٌ', 'حُجَّةٌ مُضَادَّةٌ', 'خَاتِمَةٌ', 'عَلَاوَةً عَلَى ذٰلِكَ', 'مَعَ ذٰلِكَ', 'عَلَى الرَّغْمِ مِنْ أَنَّ', 'نَتِيجَةً لِذٰلِكَ', 'فِي الخِتَامِ'],
  vocabNotes: {
    0: 'Academic organisation: the words examiners use about an article. التَّرَابُطُ (cohesion), التَّنَوُّعُ اللُّغَوِيُّ (range) and الدِّقَّةُ (accuracy) are the three things they mark.',
    1: 'Formal connectors: each one has ONE job — add (عَلَاوَةً عَلَى ذٰلِكَ), contrast (مَعَ ذٰلِكَ), concede (عَلَى الرَّغْمِ مِنْ أَنَّ), result (نَتِيجَةً لِذٰلِكَ), end (فِي الخِتَامِ).',
    2: 'Range features: a checklist of structures to include — but only where they add meaning (the website warns against “feature dumping”).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · the article plan (website listening + reading model)', title: 'Four paragraphs, four jobs', ar: 'أَرْبَعُ فِقَرٍ',
      cols: [{ label: 'Paragraph', w: 2.4 }, { label: 'Model sentence (website)', w: 7.2, size: 20 }, { label: 'Connector', w: 2.73, size: 20 }],
      rows: [
        { core: true, cells: ['1 · question + thesis', P('هَلْ يُمْكِنُ لِلذَّكَاءِ الاصْطِنَاعِيِّ أَنْ يُسَاعِدَ البِيئَةَ؟', 'Can AI help the environment?'), 'فِي البِدَايَةِ'] },
        { core: true, cells: ['2 · argument + example', P('يُسْتَخْدَمُ لِرَصْدِ تَلَوُّثِ الهَوَاءِ. فَمَثَلًا، …', 'It is used to monitor air pollution. For example, …'), 'مِنْ نَاحِيَةٍ'] },
        { cells: ['2 · extra point', P('تُسَاعِدُ الأَنْظِمَةُ الذَّكِيَّةُ عَلَى تَقْلِيلِ هَدْرِ الطَّاقَةِ.', 'Smart systems help reduce energy waste.'), 'عَلَاوَةً عَلَى ذٰلِكَ'] },
        { cells: ['3 · counterargument', P('قَدْ تَكُونُ التَّكْلِفَةُ مُرْتَفِعَةً.', 'The cost may be high.'), 'مِنْ نَاحِيَةٍ أُخْرَى'] },
        { core: true, cells: ['4 · conclusion', P('هِيَ جُزْءٌ مِنَ الحَلِّ، وَلٰكِنَّهَا لَا تَكْفِي وَحْدَهَا.', 'It is part of the solution, but not enough on its own.'), 'فِي الخِتَامِ'] },
      ],
      ltr: true,
      foot: 'Website rule: a paragraph develops ONE idea: claim → explanation → evidence → link.',
      notes: `GRAMMAR PART 1 — website rule “Paragraph logic” and the website listening (“decide your position, organise your ideas in three paragraphs … the conclusion must answer the question and bring together the main points without literal repetition”). Model sentences are from the website writing model.
Core: rows 1, 2 and 5 are enough for a supported article.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · range that adds meaning (website rules 2–4) · Develop / Stretch', title: 'Concede, give purpose, report — with a reason', ar: 'التَّنَوُّعُ المُفِيدُ',
      cards: [
        { chip: 'CONCESSION · DEVELOP', color: '1D5FBF', head: 'عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ', big: 'عَلَى الرَّغْمِ مِنْ أَنَّ التِّقْنِيَّةَ مُكَلِّفَةٌ، فَإِنَّهَا تُوَفِّرُ الطَّاقَةَ.', en: 'Although the technology is expensive, it saves energy.', clue: 'A real contrast.' },
        { chip: 'PURPOSE · DEVELOP', color: 'C0386B', head: 'لِكَيْ + مَنْصُوبٌ', big: 'نَسْتَثْمِرُ فِي النَّقْلِ العَامِّ لِكَيْ نُقَلِّلَ الانْبِعَاثَاتِ.', en: 'We invest in public transport to reduce emissions.', clue: 'A logical aim.' },
        { chip: 'REPORT + LINK · STRETCH', color: '6B4C9A', head: 'يُشَارُ إِلَى أَنَّ … لِذٰلِكَ', big: 'يُشَارُ إِلَى أَنَّ شُحَّ المِيَاهِ يَزْدَادُ، لِذٰلِكَ يَجِبُ تَرْشِيدُ الاسْتِهْلَاكِ.', en: 'Water scarcity is reported to be rising, so consumption must be rationalised.', clue: 'Feature + meaning.' },
      ],
      error: { text: 'Website mistake: a concession must create a real contrast.', pairs: [['عَلَى الرَّغْمِ مِنْ أَنَّهَا مُكَلِّفَةٌ، فَإِنَّهَا مُوَفِّرَةٌ.', 'عَلَى الرَّغْمِ مِنْ أَنَّهَا مُفِيدَةٌ، فَهِيَ مُفِيدَةٌ.']] },
      notes: `GRAMMAR PART 2 — website rules “Concession and response” (the response should genuinely contrast with the concession), “Purpose within an argument” (use purpose where the second action is genuinely intended by the first) and “Avoid feature dumping” (a correct range feature earns value only when it contributes to the topic and sentence meaning). All three examples are the website’s.
Ask: what would be WRONG with …لِكَيْ نَزِيدَ الانْبِعَاثَاتِ؟ (the purpose is illogical — website mistake 2).`,
    },
  ],
  quick: [0, 1, 2, 4],
  rest: [3, 5, 6, 7],
  ido: {
    title: 'Watch me plan, draft and improve one paragraph',
    steps: [
      { head: 'Plan · notes', ar: 'الذَّكَاءُ الاصْطِنَاعِيُّ · رَصْدُ التَّلَوُّثِ', think: 'Notes, not sentences.' },
      { head: 'Draft', ar: 'الذَّكَاءُ الاصْطِنَاعِيُّ مُفِيدٌ. هُوَ مُفِيدٌ جِدًّا.', think: 'No evidence, repeats.' },
      { head: 'Claim + example', ar: '{k|مِنْ نَاحِيَةٍ}، يُسْتَخْدَمُ لِرَصْدِ التَّلَوُّثِ. {e|فَمَثَلًا}، يَتَنَبَّأُ بِشُحِّ المِيَاهِ.', think: 'Claim, then proof.' },
      { head: 'Link', ar: '{w|نَتِيجَةً لِذٰلِكَ}، نَسْتَطِيعُ أَنْ نَتَصَرَّفَ مُبَكِّرًا.', think: 'Back to the question.' },
    ],
    legend: ['k', 'e', 'w'], legendLabels: { k: 'CLAIM', e: 'EXAMPLE', w: 'LINK' },
    model: 'هَلْ يُمْكِنُ لِلذَّكَاءِ الاصْطِنَاعِيِّ أَنْ يُسَاعِدَ البِيئَةَ؟ {k|مِنْ نَاحِيَةٍ}، يُسْتَخْدَمُ لِرَصْدِ تَلَوُّثِ الهَوَاءِ وَالتَّنَبُّؤِ بِشُحِّ المِيَاهِ. وَعَلَاوَةً عَلَى ذٰلِكَ، تُسَاعِدُ الأَنْظِمَةُ الذَّكِيَّةُ عَلَى تَقْلِيلِ هَدْرِ الطَّاقَةِ. {e|فَمَثَلًا}، يُمْكِنُهَا أَنْ تُطْفِئَ الإِضَاءَةَ فِي الغُرَفِ الفَارِغَةِ.',
    modelEn: 'Can AI help the environment? On the one hand, it is used to monitor air pollution and predict water scarcity. Moreover, smart systems help reduce energy waste; for example, they can turn off lights in empty rooms.',
    notes: 'I DO (3 min) — the plan → draft → improve cycle on paragraph 2, then the opening of the website model article in the copy box (the full model is on the Write slides: ≈ 85 words, a strong Develop model; students add one more example or a concession to reach 130–140). Students label: thesis question · argument · example · counterargument · judgement · conclusion.',
  },
  patternEn: ['Smart cities help reduce waste; for example, systems turn off lights in empty rooms.', 'Although the technology is expensive at first, it saves energy in the long term.', 'We invest in public transport in order to reduce emissions.'],
  sorterNotes: 'Then pick one item from each column and use it in a sentence about smart cities.',
  patch: {
    vocab: site.vocab.map((g) => ({ ...g, items: g.items.filter((it) => !it.ar.includes('٢٠٢٨')) })),
    speaking: {
      model: [
        ['A', 'هَلِ التِّقْنِيَّةُ وَحْدَهَا كَافِيَةٌ لِحِمَايَةِ البِيئَةِ؟', 'Is technology alone enough to protect the environment?'],
        ['B', 'لَا، فَهِيَ تُقَلِّلُ الهَدْرَ وَتُحَسِّنُ الرَّصْدَ، لٰكِنَّ نَجَاحَهَا يَعْتَمِدُ عَلَى القَوَانِينِ وَسُلُوكِ الأَفْرَادِ أَيْضًا.', 'No — it reduces waste and improves monitoring, but its success also depends on laws and individual behaviour.'],
      ],
    },
  },
  patchNote: 'English added to the website model sentences and speaking model.',
  hints: ['Is this a real contrast?', 'Is the aim logical?', 'One connector, one job.'],
  coreTip: 'Listen twice and fill a plan:\nposition · argument + example · evidence · counterargument · conclusion.',
  listenRoutes: 'Core: questions 1, 2 and 6. Develop / Stretch: all 6, then use the advice as your own plan.',
  gloss: [
    ['قَبْلَ أَنْ تَكْتُبَ مَقَالًا، حَدِّدْ مَوْقِفَكَ وَنَظِّمْ أَفْكَارَكَ فِي ثَلَاثِ فِقَرٍ.', 'Before you write an article, decide your position and organise your ideas in three paragraphs.'],
    ['فِي الفِقْرَةِ الأُولَى، قَدِّمْ حُجَّتَكَ الرَّئِيسِيَّةَ مَعَ مِثَالٍ مُحَدَّدٍ.', 'In the first paragraph, present your main argument with a specific example.'],
    ['وَفِي الثَّانِيَةِ، أَضِفْ دَلِيلًا أَوْ نَتِيجَةً،', 'In the second, add evidence or a result,'],
    ['ثُمَّ اعْرِضْ حُجَّةً مُضَادَّةً بِاسْتِخْدَامِ مَعَ ذٰلِكَ أَوْ عَلَى الرَّغْمِ مِنْ أَنَّ.', 'then present a counterargument using “nevertheless” or “although”.'],
    ['أَمَّا الخَاتِمَةُ فَيَجِبُ أَنْ تُجِيبَ عَنِ السُّؤَالِ وَتَجْمَعَ بَيْنَ أَهَمِّ النِّقَاطِ دُونَ تَكْرَارٍ حَرْفِيٍّ.', 'As for the conclusion, it must answer the question and bring together the main points without word-for-word repetition.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا مَوْقِفُكَ الرَّئِيسِيُّ؟' },
      { route: 'develop', ar: 'مَا الدَّلِيلُ الَّذِي سَتَسْتَخْدِمُهُ؟' },
      { route: 'stretch', ar: 'مَا الحُجَّةُ المُضَادَّةُ؟ وَكَيْفَ تَرُدُّ عَلَيْهَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَرَى أَنَّ ______ لِأَنَّ ______ .' },
      { route: 'develop', ar: 'الدَّلِيلُ عَلَى ذٰلِكَ أَنَّ ______ ؛ فَمَثَلًا، ______ .' },
      { route: 'stretch', ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّ ______ .' },
    ],
    modelEn: ['Is technology alone enough to protect the environment?', 'No — it reduces waste and improves monitoring, but its success also depends on laws and individual behaviour.'],
    notes: 'Website prompts and model: rehearse and defend a thesis aloud before drafting. Pairs: 60 seconds each; the partner asks the counterargument question. To a girl: مَا مَوْقِفُكِ؟',
  },
  write: {
    core: { amount: '70–90 words', how: 'One frame per paragraph: question · argument + example · “however” · conclusion.' },
    develop: { amount: '130–140 words', how: 'Website task: four paragraphs with one concession and one purpose clause.' },
    stretch: { amount: '140 words', how: 'A balanced, qualified judgement (شَرِيطَةَ أَنْ …) + a self-audit with the website checklist.' },
  },
  frames: {
    core: [
      { en: 'Can … help the environment?', ar: 'هَلْ يُمْكِنُ لِـ ______ أَنْ يُسَاعِدَ البِيئَةَ؟' },
      { en: 'On one hand, it helps … For example, …', ar: 'مِنْ نَاحِيَةٍ، يُسَاعِدُ عَلَى ______ . فَمَثَلًا، ______ .' },
      { en: 'However, the problem is that …', ar: 'مَعَ ذٰلِكَ، المُشْكِلَةُ أَنَّ ______ .' },
      { en: 'In conclusion, I think that …', ar: 'فِي الخِتَامِ، أَرَى أَنَّ ______ .' },
    ],
    develop: [
      { en: 'Moreover, …', ar: 'عَلَاوَةً عَلَى ذٰلِكَ، ______ .' },
      { en: 'We use it in order to …', ar: 'نَسْتَخْدِمُهُ لِكَيْ ______ .' },
      { en: 'Although … , …', ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّ ______ .' },
      { en: 'It is indicated that … , so …', ar: 'يُشَارُ إِلَى أَنَّ ______ ، لِذٰلِكَ ______ .' },
    ],
    bank: ['فِي البِدَايَةِ', 'مِنْ نَاحِيَةٍ', 'مِنْ نَاحِيَةٍ أُخْرَى', 'عَلَاوَةً عَلَى ذٰلِكَ', 'فَضْلًا عَنْ ذٰلِكَ', 'فَمَثَلًا', 'مَعَ ذٰلِكَ', 'عَلَى الرَّغْمِ مِنْ أَنَّ', 'لِكَيْ', 'نَتِيجَةً لِذٰلِكَ', 'يُشَارُ إِلَى أَنَّ', 'فِي الخِتَامِ'],
  },
  stretch: [
    ['شَرِيطَةَ أَنْ تُحْمَى الخُصُوصِيَّةُ', 'provided that privacy is protected'],
    ['جُزْءٌ قَوِيٌّ مِنَ الحَلِّ', 'a strong part of the solution'],
    ['لَا تَسْتَبْدِلُ السِّيَاسَاتِ', 'does not replace policies'],
    ['لَا يَكْفِي … وَحْدَهُ؛ بَلْ يَجِبُ …', '… alone is not enough; rather, … must …'],
    ['عَلَى المَدَى البَعِيدِ', 'in the long term'],
  ],
  modelEn: 'Can AI help the environment? On the one hand, it is used to monitor air pollution and predict water scarcity. Moreover, smart systems help reduce energy waste; for example, they can turn off lights in empty rooms. On the other hand, the cost may be high and personal data may be collected. Despite these challenges, I think investing in this technology is important, provided that privacy is protected. In conclusion, it is a strong part of the solution, but it does not replace policies and responsible behaviour.',
  find: ['a thesis question', 'an argument + example', 'a counterargument', 'a conclusion that synthesises'],
  modelNotes: 'Website writing model. Evidence: هَلْ يُمْكِنُ …؟ · مِنْ نَاحِيَةٍ، يُسْتَخْدَمُ لِـ … · وَعَلَاوَةً عَلَى ذٰلِكَ · فَمَثَلًا · مِنْ نَاحِيَةٍ أُخْرَى · عَلَى الرَّغْمِ مِنْ هٰذِهِ التَّحَدِّيَاتِ، أَرَى أَنَّ … شَرِيطَةَ أَنْ … · فِي الخِتَامِ … وَلٰكِنَّهَا لَا تَسْتَبْدِلُ …',
  selfCheck: [
    { route: 'core', text: 'I answered the question with a clear position.' },
    { route: 'core', text: 'I gave at least one specific example.' },
    { route: 'develop', text: 'Each paragraph develops ONE idea.' },
    { route: 'develop', text: 'My concession is a real contrast; my purpose is logical.' },
    { route: 'stretch', text: 'My conclusion synthesises — it does not repeat.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['المُشْكِلَاتِ البِيئِيَّةِ', 'environmental problems'], ['لِرَصْدِ التَّلَوُّثِ', 'to monitor pollution'], ['التَّنَبُّؤِ بِـ', 'predicting'], ['الشَّبَكَاتُ الذَّكِيَّةُ', 'smart grids'], ['الهَدْرَ', 'waste'],
    ['مُكَلِّفَةٌ', 'expensive'], ['بَيَانَاتٍ شَخْصِيَّةً', 'personal data'], ['ضَوَابِطَ', 'rules, controls'], ['سُلُوكِ المُسْتَخْدِمِينَ', 'users’ behaviour'], ['الحَلَّ كُلَّهُ', 'the whole solution'],
  ],
  prep: {
    words: [['نَشْرَةٌ إِخْبَارِيَّةٌ', 'a news bulletin', 'pl. نَشَرَاتٌ إِخْبَارِيَّةٌ'], ['مُرَاسِلٌ / مُرَاسِلَةٌ', 'a correspondent (m / f)', 'pl. مُرَاسِلُونَ'], ['أَعْلَنَ أَنَّ', 'announced that', 'يُعْلِنُ'], ['حَذَّرَ مِنْ', 'warned against', 'يُحَذِّرُ'], ['كِلَاهُمَا', 'both of them', '—']],
    questionEn: 'Finish your final draft. Then: where do you hear news about the environment?',
    questionAr: 'أَسْمَعُ الأَخْبَارَ عَنِ البِيئَةِ فِي …',
    homework: {
      core: 'Final 70–90-word article from the frames; learn the five news words.',
      develop: 'Website writing task: final 130–140-word article, checklist ticked.',
      stretch: 'Final 140-word version + a self-audit naming three improvements.',
    },
    wordsSource: 'The five words come from the website D4-L10 vocabulary (news and reporting language).',
  },
  remember: 'Remember: one idea per paragraph — every connector has a job — concede, then answer — conclude by synthesising.',
});

module.exports = { meta, slides };
