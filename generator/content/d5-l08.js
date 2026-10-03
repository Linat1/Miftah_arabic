'use strict';
/* D5-L08 · Reading — Leisure, Sport and Past Experience Texts — website: Pathways › Development › D5 › D5-L08 (text type from verb clusters فَعَلَ / فَعَلَتْ vs فَعَلْتُ / فَعَلْنَا,
 * sequence markers, tense choice in a gap-fill from the nearest time marker, evidence and يُشِيرُ إِلَى).
 * Reading-skills lesson: the website sporting life story is the main You Do task. Website vocabulary, rules, quiz, sorter, mistakes, listening,
 * speaking and writing used as published; one vowel-only quiz distractor replaced; English added to the patterns and speaking model.
 * The website visual game repeats D5-L03, so it is skipped. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D5')({
  n: 8, fileTitle: 'Reading_Leisure_Sport_Past_Experience_Texts', chip: 'Reading Skills',
  title: 'Reading — Leisure, Sport and Past Experience Texts', arabic: 'القِرَاءَةُ — نُصُوصُ التَّرْفِيهِ وَالرِّيَاضَةِ',
  focus: 'Read past-tense texts like an examiner: let the verb endings tell you the text type (فَازَ / فَازَتْ = biography · حَجَزْتُ / أَقَمْنَا = personal review), follow the sequence markers, choose the tense from the nearest time marker, and prove every answer from the Arabic.',
  icon: 'FaBookOpen', iconSet: 'fa6',
});

const site = D.site('D5-L08');
const quiz = site.grammar.quiz.map((it, i) => (i === 7 ? { ...it, options: [it.options[0], it.options[1], 'قَرَأْتُ سِيرَةً ذَاتِيَّةً مُمْتِعِينَ.'] } : it));
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D5-L08', {
  support: `• This is a READING-SKILLS lesson: the website sporting life story is the main You Do task (6 questions).
• Core: questions 1–3 (where · at the beginning · last year) and the text type from the verbs. Develop: all questions + the sequence of events. Stretch: the website ~70-word summary with quoted evidence and يُشِيرُ إِلَى.
• Reading routine: (1) Look at the verb ENDINGS: who is it about? (2) Find the sequence markers. (3) For each answer, find the time marker and quote the Arabic.
• Builds on D5-L03–L05 (past endings, كَانَ + habit) and D5-L07 (past → future switch).`,
  teach: 'Text type from verbs, sequence, tense from time markers, evidence.',
  wedo: 'Sort text-type signals, fix tense slips, then a sports-club report.',
  next: { nextCode: 'D5-L09', nextTitle: 'Writing — My Leisure Life (Extended Writing)', nextAr: 'الكِتَابَةُ — حَيَاتِي التَّرْفِيهِيَّةُ' },
  objectives: ['Identify the text type from the verb endings.', 'Follow the sequence of events with markers.', 'Choose the right tense from the nearest time marker.', 'Prove answers with a quoted Arabic phrase (يُشِيرُ إِلَى …).'],
  rulesAr: 'قِرَاءَةُ النُّصُوصِ المَاضِيَةِ بِالدَّلِيلِ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does سِيرَةٌ ذَاتِيَّةٌ mean?', ['a biography, life story', 'a review', 'a report'], 'Prepared at home (D5-L07).'),
      q('What does تَسَلْسُلُ الأَحْدَاثِ mean?', ['the order of events', 'the main idea', 'the evidence'], 'Prepared at home (D5-L07).'),
      q('What does يَسْتَنْتِجُ mean?', ['he deduces', 'he refers to', 'he summarises'], 'Prepared at home (D5-L07).'),
      q('Choose the accurate sentence.', ['سَأَزُورُ المَدِينَةَ غَدًا.', 'سَزُرْتُ المَدِينَةَ غَدًا.', 'زُرْتُ المَدِينَةَ غَدًا.'], 'D5-L07: future.'),
      q('زُرْنَا المَعَالِمَ — who visited?', ['we', 'they', 'I'], 'D5-L04 / L07: -nā.'),
    ],
    keyIdea: { text: 'Read the verb endings first: they tell you WHO the text is about — and what kind of text it is.', ar: '{k|فَازَتْ} · {k|انْتَقَلَ} = سِيرَةٌ ‖ {e|حَجَزْتُ} · {e|أَقَمْنَا} = مُرَاجَعَةٌ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D5-L07. Questions 4–5 retrieve D5-L07 (future) and D5-L04 (-nā).',
  },
  routes: {
    core: ['I can say if a text is about “him / her” or “me / us”.', 'I can find a time marker and a past verb.'],
    develop: ['I can put the events in order.', 'I can quote one Arabic phrase as evidence.'],
    stretch: ['I can justify each tense choice.', 'I can summarise a text in 70 words with يُشِيرُ إِلَى.'],
  },
  bridge: [
    { ar: 'سِيرَةٌ', urdu: 'سیرت', tr: 'sīrat', en: 'life story (Urdu also: character, the Sīrah)' },
    { ar: 'دَلِيلٌ', urdu: 'دلیل', tr: 'dalīl', en: 'evidence, proof' },
    { ar: 'نَتِيجَةٌ / اسْتِنْتَاجٌ', urdu: 'نتیجہ', tr: 'natīja', en: 'result / conclusion' },
    { ar: 'تَفْصِيلٌ', urdu: 'تفصیل', tr: 'tafṣīl', en: 'detail' },
    { ar: 'تَقْرِيرٌ', urdu: 'تقریر', tr: 'taqrīr', en: 'Urdu: a speech · Arabic: a report' },
  ],
  bridgeNotes: 'URDU BRIDGE: سیرت (as in سیرت النبی ﷺ = the life of the Prophet), دلیل، تفصیل are shared. CAREFUL: Urdu تقریر = a speech; Arabic تَقْرِيرٌ = a written report (a speech is خِطَابٌ / كَلِمَةٌ).',
  core: ['سِيرَةٌ ذَاتِيَّةٌ', 'مُرَاجَعَةٌ', 'تَقْرِيرٌ', 'نَصٌّ', 'تَسَلْسُلُ الأَحْدَاثِ', 'دَلِيلٌ مِنَ النَّصِّ', 'يُشِيرُ إِلَى', 'الفِكْرَةُ الرَّئِيسِيَّةُ', 'فِي العَامِ المَاضِي', 'مُنْذُ سَنَوَاتٍ', 'بَعْدَ ذٰلِكَ', 'فِي النِّهَايَةِ'],
  vocabNotes: {
    0: 'Text types: the words exam questions use (“What type of text is this?”).',
    1: 'Reading strategy language: يُشِيرُ إِلَى (refers to) and يَسْتَنْتِجُ (deduces) are for explaining answers.',
    2: 'Past markers to scan for: these decide the tense of the verb in a gap-fill.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · what kind of text? (website rules 1–2)', title: 'The verb endings tell you the text type', ar: 'نَوْعُ النَّصِّ',
      cols: [{ label: 'Verb cluster', w: 3.0, size: 22 }, { label: 'Example (website)', w: 6.6, size: 22 }, { label: 'Text type', w: 2.73 }],
      rows: [
        { core: true, cells: ['فَعَلَ · فَعَلَتْ', P('{k|بَدَأَ} مَسِيرَتَهُ مُبَكِّرًا · {k|فَازَتْ} بِالمِيدَالِيَةِ', 'He began his career early · she won the medal'), 'biography / report'] },
        { cells: ['فَعَلُوا', P('{k|لَعِبُوا} ثَلَاثَ مُبَارَيَاتٍ', 'They played three matches'), 'report / news'] },
        { core: true, cells: ['فَعَلْتُ · فَعَلْنَا', P('{e|حَجَزْتُ} الفُنْدُقَ · {e|أَقَمْنَا} ثَلَاثَ لَيَالٍ', 'I booked the hotel · we stayed three nights'), 'personal review / diary'] },
        { cells: ['سَـ / سَوْفَ', P('{w|سَيُدَرِّبُ} الشَّبَابَ · {w|سَوْفَ} نَحْجِزُ', 'He will coach young people · we will book'), 'future plan'] },
      ],
      ltr: true,
      foot: 'Read the endings BEFORE the details: they tell you who and what kind of text.',
      notes: `GRAMMAR PART 1 — website rules “Third-person clusters” (a text built on third-person past verbs is usually about someone else: a biography, a report or a news item) and “First-person clusters” (a personal account, a review or a diary). Website teaching point: “Verb clusters name the text type.”`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · sequence, tense, evidence (website rules 3–4) · Develop / Stretch', title: 'Order, tense and proof', ar: 'التَّسَلْسُلُ وَالزَّمَنُ وَالدَّلِيلُ',
      cards: [
        { chip: 'SEQUENCE · CORE', color: '1E6B52', head: 'فِي البِدَايَةِ … ثُمَّ … فِي النِّهَايَةِ', big: 'ثُمَّ انْتَقَلَ إِلَى فَرِيقٍ آخَرَ.', en: 'Then he moved to another team.', clue: 'First or last?' },
        { chip: 'TENSE · DEVELOP', color: '1D5FBF', head: 'time marker = tense', big: 'فِي العَامِ المَاضِي انْتَقَلَ إِلَى نَادٍ جَدِيدٍ.', en: 'Last year he moved to a new club.', clue: 'Past marker → past verb.' },
        { chip: 'EVIDENCE · STRETCH', color: '6B4C9A', head: 'يُشِيرُ إِلَى', big: 'يُشِيرُ النَّصُّ إِلَى أَهَمِّيَّةِ التَّدْرِيبِ.', en: 'The text refers to the importance of training.', clue: 'ilā + genitive.' },
      ],
      error: { text: 'Website mistake: a future marker needs sa- + present.', pairs: [['فِي المُسْتَقْبَلِ سَيُدَرِّبُ الشَّبَابَ.', 'فِي المُسْتَقْبَلِ دَرَّبَ الشَّبَابَ.']] },
      notes: `GRAMMAR PART 2 — website rules “Sequence markers” (a question about what happened first or last is usually answered by locating one of them) and “Choosing the tense in a gap-fill” (find the nearest time expression: a past marker requires a past verb; فِي المُسْتَقْبَلِ / غَدًا requires سَـ + present). Website teaching point: “Time expressions confirm what the suffixes suggest.”
Website mistakes: فِي العَامِ المَاضِي يَنْتَقِلُ ✗ · يُشِيرُ النَّصُّ عَنْ ✗.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me read a life story like an examiner',
    steps: [
      { head: 'Endings', ar: 'بَدَأَ · تَدَرَّبَ · انْتَقَلَ', think: 'He → a biography.' },
      { head: 'Sequence', ar: '{k|فِي البِدَايَةِ} … {k|ثُمَّ} … {k|فِي النِّهَايَةِ}', think: 'Order of events.' },
      { head: 'Time', ar: '{e|فِي العَامِ المَاضِي} فَازَ', think: 'Past marker, past verb.' },
      { head: 'Proof', ar: '{w|أَثَّرَ فِي جِيلٍ كَامِلٍ}', think: 'Quote the Arabic.' },
    ],
    legend: ['k', 'e', 'w'], legendLabels: { k: 'SEQUENCE', e: 'TIME', w: 'EVIDENCE' },
    model: 'هٰذَا النَّصُّ سِيرَةٌ رِيَاضِيَّةٌ، لِأَنَّ الأَفْعَالَ بِصِيغَةِ الغَائِبِ. {k|فِي البِدَايَةِ} كَانَ يَتَدَرَّبُ فِي نَادٍ صَغِيرٍ، {k|ثُمَّ} انْتَقَلَ إِلَى فَرِيقٍ أَكْبَرَ، وَ{e|فِي العَامِ المَاضِي} فَازَ بِالمِيدَالِيَةِ الذَّهَبِيَّةِ. وَالدَّلِيلُ مِنَ النَّصِّ: {w|أَثَّرَ فِي جِيلٍ كَامِلٍ}.',
    modelEn: 'This text is a sporting biography, because the verbs are in the third person. At the beginning he used to train at a small club, then he moved to a bigger team, and last year he won the gold medal. The evidence from the text: “he influenced a whole generation”.',
    notes: 'I DO (3 min) — think aloud on the website reading text: endings → type; markers → order; time word → tense; quote. Students then answer the 6 questions themselves in the You Do.',
  },
  patternEn: ['she won the gold medal (biography)', 'we stayed three nights (personal review)', 'last year he moved (time confirms tense)'],
  sorterNotes: 'Then say how you know: “ـَتْ / ـَ = someone else” · “ـْتُ / ـْنَا = me / us” · “سَـ = future”.',
  patch: {
    grammar: { ...site.grammar, quiz },
    speaking: {
      model: [
        ['A', 'مَا نَوْعُ هٰذَا النَّصِّ؟', 'What type of text is this?'],
        ['B', 'أَظُنُّ أَنَّهُ سِيرَةٌ رِيَاضِيَّةٌ، لِأَنَّ الأَفْعَالَ كُلَّهَا بِصِيغَةِ الغَائِبِ.', 'I think it is a sporting biography, because all the verbs are in the third person.'],
        ['A', 'وَمَا الدَّلِيلُ عَلَى ذٰلِكَ؟', 'And what is the evidence for that?'],
        ['B', 'يَقُولُ النَّصُّ: فَازَ بِالمِيدَالِيَةِ الذَّهَبِيَّةِ، وَهٰذَا يُشِيرُ إِلَى إِنْجَازٍ فِي المَاضِي.', 'The text says: “he won the gold medal”, and this refers to an achievement in the past.'],
      ],
    },
  },
  patchNote: 'one vowel-only quiz distractor replaced and English added to the patterns and speaking model; the website visual game repeats D5-L03 and is skipped.',
  hints: ['Past marker → which tense?', 'yushīru + which preposition?', 'Future marker → sa- + ?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 5.\nWho is it about? Which verbs?',
  listenRoutes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 5 — and list the sequence markers in order.',
  gloss: [
    ['فِي البِدَايَةِ نَظَّمَ النَّادِي بُطُولَةً صَغِيرَةً لِلشَّبَابِ فِي العَامِ المَاضِي. شَارَكَ فِيهَا سِتُّونَ لَاعِبًا مِنْ مَدَارِسَ مُخْتَلِفَةٍ.', 'At the beginning the club organised a small tournament for young people last year. Sixty players from different schools took part.'],
    ['ثُمَّ لَعِبَتِ الفِرَقُ ثَلَاثَ مُبَارَيَاتٍ فِي كُلِّ أُسْبُوعٍ.', 'Then the teams played three matches every week.'],
    ['فَازَ فَرِيقُ المَدْرَسَةِ الشَّرْقِيَّةِ بِالمُبَارَاةِ النِّهَائِيَّةِ، وَتَعَادَلَ فَرِيقَانِ فِي المَرْكَزِ الثَّالِثِ.', 'The eastern school team won the final, and two teams drew for third place.'],
    ['بَعْدَ ذٰلِكَ وَزَّعَ المُدِيرُ المِيدَالِيَاتِ عَلَى اللَّاعِبِينَ. وَفِي النِّهَايَةِ شَكَرَ المُدَرِّبِينَ وَالأُسَرَ.', 'After that the director handed out the medals to the players. In the end he thanked the coaches and families.'],
    ['وَفِي المُسْتَقْبَلِ سَيُنَظِّمُ النَّادِي بُطُولَةً أَكْبَرَ.', 'In the future the club will organise a bigger tournament.'],
  ],
  readingCore: {
    readMin: 4, qMin: 6,
    notes: 'YOU DO — READING (main task): the website sporting life story. Before reading: underline every verb ending and every time marker.\nCore: questions 1–3. Develop: all questions + the order of events. Stretch: then the written summary with quoted evidence and يُشِيرُ إِلَى.',
  },
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا نَوْعُ هٰذَا النَّصِّ؟ وَكَيْفَ عَرَفْتَ ذٰلِكَ؟' },
      { route: 'develop', ar: 'مَا تَسَلْسُلُ الأَحْدَاثِ فِي النَّصِّ؟' },
      { route: 'stretch', ar: 'مَا الدَّلِيلُ مِنَ النَّصِّ عَلَى إِجَابَتِكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'هٰذَا النَّصُّ ______ ، لِأَنَّ الأَفْعَالَ ______ .' },
      { route: 'develop', ar: 'فِي البِدَايَةِ ______ ، ثُمَّ ______ ، وَفِي النِّهَايَةِ ______ .' },
      { route: 'stretch', ar: 'الدَّلِيلُ مِنَ النَّصِّ: « ______ » ، وَهٰذَا يُشِيرُ إِلَى ______ .' },
    ],
    modelEn: ['What type of text is this?', 'I think it is a sporting biography, because all the verbs are in the third person.'],
    notes: 'Website prompts and model: students explain HOW they read. Core may answer with one Arabic phrase + English. To a girl: عَرَفْتِ · إِجَابَتِكِ.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Text type + three events in order + one quote.' },
    develop: { amount: '50–60 words', how: 'A summary with two sequence markers and a quoted phrase.' },
    stretch: { amount: '≈ 70 words', how: 'Website task: type · sequence · quoted evidence · yushīru ilā.' },
  },
  frames: {
    core: [
      { en: 'I read a … about …', ar: 'قَرَأْتُ ______ عَنْ ______ .' },
      { en: 'At the beginning he used to …', ar: 'فِي البِدَايَةِ كَانَ ______ .' },
      { en: 'Then he moved to …', ar: 'ثُمَّ انْتَقَلَ إِلَى ______ .' },
      { en: 'Last year he won …', ar: 'فِي العَامِ المَاضِي فَازَ بِـ ______ .' },
    ],
    develop: [
      { en: 'After that …', ar: 'بَعْدَ ذٰلِكَ ______ .' },
      { en: 'In the end …', ar: 'فِي النِّهَايَةِ ______ .' },
      { en: 'The evidence from the text: …', ar: 'وَالدَّلِيلُ مِنَ النَّصِّ: « ______ ».' },
      { en: 'The text refers to …', ar: 'يُشِيرُ النَّصُّ إِلَى ______ .' },
    ],
    bank: ['سِيرَةٌ رِيَاضِيَّةٌ', 'مُرَاجَعَةٌ', 'تَقْرِيرٌ', 'فِي البِدَايَةِ', 'ثُمَّ', 'بَعْدَ ذٰلِكَ', 'فِي النِّهَايَةِ', 'فِي العَامِ المَاضِي', 'مُنْذُ سَنَوَاتٍ', 'الدَّلِيلُ مِنَ النَّصِّ', 'يُشِيرُ إِلَى', 'يَسْتَنْتِجُ'],
  },
  stretch: [
    ['لِأَنَّ الأَفْعَالَ بِصِيغَةِ الغَائِبِ', 'because the verbs are in the third person'],
    ['لَمْ يَكُنْ مَشْهُورًا', 'he was not famous'],
    ['تَدَرَّبَ يَوْمِيًّا وَلَمْ يَسْتَسْلِمْ', 'he trained daily and did not give up'],
    ['أَهَمِّيَّةُ الصَّبْرِ وَالتَّدْرِيبِ المُنْتَظِمِ', 'the importance of patience and regular training'],
    ['نَسْتَنْتِجُ أَنَّ …', 'we deduce that …'],
  ],
  modelEn: 'I read a short sporting biography about a famous player. At the beginning he used to train at a small club, and he was not famous. Then he moved to a bigger team, and last year he won the gold medal. After that he retired, and in the end he returned to his first club. The evidence from the text: “he influenced a whole generation”. The text refers to the importance of patience and regular training.',
  find: ['the text type', 'three sequence markers', 'a quoted phrase', 'يُشِيرُ إِلَى + genitive'],
  modelNotes: 'Website writing model. Evidence: سِيرَةً رِيَاضِيَّةً · فِي البِدَايَةِ · ثُمَّ · فِي العَامِ المَاضِي · بَعْدَ ذٰلِكَ · فِي النِّهَايَةِ · وَالدَّلِيلُ مِنَ النَّصِّ: … · يُشِيرُ النَّصُّ إِلَى أَهَمِّيَّةِ …',
  selfCheck: [
    { route: 'core', text: 'I named the text type from the verb endings.' },
    { route: 'core', text: 'My answers match the time markers.' },
    { route: 'develop', text: 'I put the events in the right order.' },
    { route: 'develop', text: 'I quoted one Arabic phrase as evidence.' },
    { route: 'stretch', text: 'I used يُشِيرُ إِلَى with the genitive.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['مَسِيرَتَهُ الرِّيَاضِيَّةَ', 'his sports career'], ['قُرْبَ بَيْتِهِ', 'near his home'], ['لَمْ يَكُنْ مَشْهُورًا', 'he was not famous'], ['لَمْ يَسْتَسْلِمْ', 'he did not give up'], ['انْتَقَلَ إِلَى', 'he moved to'],
    ['أَثَّرَ فِي', 'influenced'], ['جِيلٍ كَامِلٍ', 'a whole generation'], ['اعْتَزَلَ اللَّعِبَ', 'he retired from playing'], ['نَادِيهِ الأَوَّلِ', 'his first club'], ['سَيُدَرِّبُ', 'he will coach'],
  ],
  prep: {
    words: [['تَنَوُّعُ الأَزْمِنَةِ', 'tense variety', '—'], ['المُسَوَّدَةُ', 'the draft', 'pl. المُسَوَّدَاتُ'], ['أَمَّا الآنَ فَـ', 'as for now, …', '—'], ['أَنْوِي أَنْ', 'I intend to', 'يَنْوِي he'], ['بِصَرَاحَةٍ', 'frankly', '—']],
    questionEn: 'Plan your leisure life: one thing you did as a child, one thing you do now, one thing you will do.',
    questionAr: 'فِي الطُّفُولَةِ كُنْتُ … · أَمَّا الآنَ فَـ … · فِي المُسْتَقْبَلِ سَـ …',
    homework: {
      core: 'Learn the text-type and marker words; redo reading questions 1–3.',
      develop: 'A 50–60-word summary of the life story with two markers and a quote.',
      stretch: 'Website writing task: a ≈ 70-word evidence-based summary.',
    },
    wordsSource: 'The five words come from the website D5-L09 vocabulary (planning an extended piece of writing).',
  },
  remember: 'Remember: endings → text type · markers → order · time word → tense · and prove it with the Arabic.',
});

module.exports = { meta, slides };
