'use strict';
/*
 * F4-L11 · Speaking and Writing About School
 * Website: Pathways › Foundation › F4 › Lesson 11. One message · two modes: speak 45–60 seconds and write 6–8 connected
 * sentences. Ten-question synthesis retrieval, the productive toolkit (six functions), the eight-sentence model text with
 * purpose labels, the six-box plan, the eight-question purpose match, the two-sentence dictation, the 60-second talk,
 * the connected paragraph with live counters, the ten-point review and the 16-question checkpoint.
 */
const F = require('./f4-common');
const { q, bank } = F;

const meta = F.meta({
  n: 11, fileTitle: 'Speaking_and_Writing_About_School', chip: 'Speak and Write',
  title: 'Speaking and Writing About School', arabic: 'التَّحَدُّثُ وَالكِتَابَةُ عَنِ المَدْرَسَةِ',
  focus: 'Bring the complete F4 language system together: plan, deliver a one-minute school talk, then write and improve a connected 6–8 sentence paragraph.',
  icon: 'FaPenToSquare', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F4-L12', nextTitle: 'Review and Unit Assessment', nextAr: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ' };

const M = [
  'أَدْرُسُ فِي مَدْرَسَةٍ مُتَوَسِّطَةِ الحَجْمِ فِي لَنْدَنَ، وَفِيهَا مَكْتَبَةٌ جَمِيلَةٌ وَمَلْعَبٌ كَبِيرٌ.',
  'أَدْرُسُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ وَالرِّيَاضِيَّاتِ وَالعُلُومَ وَالتَّارِيخَ.',
  'أُفَضِّلُ اللُّغَةَ العَرَبِيَّةَ لِأَنَّهَا مُهِمَّةٌ وَمُمْتِعَةٌ، وَلَكِنَّ الرِّيَاضِيَّاتِ صَعْبَةٌ أَحْيَانًا.',
  'فِي يَوْمِ الاِثْنَيْنِ أَدْرُسُ العُلُومَ فِي الحِصَّةِ الأُولَى، ثُمَّ أَدْرُسُ التَّارِيخَ بَعْدَ الفُسْحَةِ.',
  'أَبْدَأُ الدِّرَاسَةَ فِي السَّاعَةِ التَّاسِعَةِ وَأَنْتَهِي فِي السَّاعَةِ الثَّالِثَةِ، وَبَعْدَ ذَلِكَ أَرْجِعُ إِلَى البَيْتِ.',
  'فِي مَدْرَسَتِي يَجِبُ أَنْ نَحْتَرِمَ المُعَلِّمِينَ، وَلَا يَجُوزُ أَنْ نَسْتَعْمِلَ الهَاتِفَ فِي الدَّرْسِ.',
  'مُعَلِّمَتِي مُسَاعِدَةٌ وَزُمَلَائِي وَدُودُونَ.',
  'فِي رَأْيِي، الحَيَاةُ المَدْرَسِيَّةُ مُفِيدَةٌ لِأَنَّنِي أَتَعَلَّمُ أَشْيَاءَ جَدِيدَةً كُلَّ يَوْمٍ.',
];
const purpose = bank(11, 'purpose');

const site = {
  speaking: {
    context: '60-second school talk',
    model: [
      ['1', M[0], 'I study in a medium-sized school in London; it has a beautiful library and a big playground.'],
      ['2', M[2], 'I prefer Arabic because it is important and enjoyable, but maths is sometimes difficult.'],
    ],
  },
  writing: {
    prompt: 'Website writing task: write 6–8 connected Arabic sentences about your school and school life — school description, subjects, a justified opinion, timetable or routine detail, a rule and a concluding view.',
    checklist: ['All six content areas are included.', 'At least three connectives (ثُمَّ، وَلَكِنَّ، أَيْضًا، بَعْدَ ذَلِكَ).', 'لِأَنَّهُ / لِأَنَّهَا and the adjective agree.', 'Rule structures include أَنْ.'],
    model: M.join(' '),
  },
  differentiation: {
    core: 'Six sentences, one per plan box, using the toolkit frames.',
    develop: 'Seven sentences with three connectives and one contrast.',
    stretch: 'Eight sentences, varied openings and a developed conclusion with a reason.',
  },
  mistakes: [
    { wrong: 'أُحِبُّ التَّارِيخَ لِأَنَّهَا مُفِيدَةٌ.', right: 'أُحِبُّ التَّارِيخَ لِأَنَّهُ مُفِيدٌ.', why: 'التَّارِيخُ is masculine: li-annahu + mufīd.' },
    { wrong: 'يَجِبُ نَحْتَرِمَ المُعَلِّمِينَ.', right: 'يَجِبُ أَنْ نَحْتَرِمَ المُعَلِّمِينَ.', why: 'A rule needs an before the verb.' },
    { wrong: 'مُعَلِّمَتِي مُسَاعِدٌ.', right: 'مُعَلِّمَتِي مُسَاعِدَةٌ.', why: 'A female teacher: the adjective takes ة.' },
  ],
  listening: {
    title: 'Dictation and a model talk',
    script: `${M[0]} ${M[3]} ${M[4]} ${M[5]} — إِمْلَاءٌ: أُفَضِّلُ اللُّغَةَ العَرَبِيَّةَ لِأَنَّهَا مُفِيدَةٌ وَمُمْتِعَةٌ. فِي يَوْمِ الخَمِيسِ أَدْرُسُ العُلُومَ، ثُمَّ أَذْهَبُ إِلَى المَكْتَبَةِ.`,
    questions: [
      q('Where is the school?', ['in London', 'in Cairo', 'in Birmingham'], 'فِي لَنْدَنَ'),
      q('What is studied in the first lesson on Monday?', ['science', 'history', 'Arabic'], 'أَدْرُسُ العُلُومَ فِي الحِصَّةِ الأُولَى'),
      q('When does the school day end?', ['at three o’clock', 'at nine o’clock', 'at eleven o’clock'], 'أَنْتَهِي فِي السَّاعَةِ الثَّالِثَةِ'),
      q('What is NOT allowed in the lesson?', ['using the phone', 'asking questions', 'reading'], 'لَا يَجُوزُ أَنْ نَسْتَعْمِلَ الهَاتِفَ'),
      q('Dictation 2: where does the student go after science?', ['to the library', 'home', 'to the canteen'], 'ثُمَّ أَذْهَبُ إِلَى المَكْتَبَةِ'),
    ],
  },
};

const slides = [
  F.titleSlide({
    n: 11,
    source: 'Website sections used: the outcome cards (speak 45–60 seconds · write 6–8 sentences), the ten-question synthesis retrieval, the productive toolkit (open · sequence · opinion · justify · rule · contrast and conclude) with the accuracy checkpoint, the eight-sentence model text with purpose labels and the meaning / range / accuracy questions, the six-box plan, the eight-question purpose match, the two-sentence dictation, the 60-second talk with five evidence points, the connected paragraph, the ten-point review with a before/after rewrite and the 16-question checkpoint.',
    support: `• Website principle: “This lesson does not add a new grammar system. It helps you select, organise and control language already learned across F4.”
• Core: six sentences, one per plan box, using the toolkit frames. Develop: seven sentences, three connectives and a contrast. Stretch: eight sentences with varied openings and a developed conclusion.
• Plans are NOTES, not scripts — insist on this before the talk, or students read aloud instead of speaking.
• Keep today’s paragraph and self-assessment: they are the evidence students bring to F4-L12.
• Online: the talk in breakout pairs (60 s each, partner ticks the five evidence points); the paragraph on screen or lined paper.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'The productive toolkit, then the purpose of each sentence in a model.', wedo: 'Purpose match, dictation, model talk and evidence questions.', next: 'F4-L12' }),
  F.doNow({
    questions: [
      q('What does خُطَّةٌ mean?', ['a plan', 'a conclusion', 'a presentation'], 'Prepared at home (F4-L10).'),
      q('What does خَاتِمَةٌ mean?', ['a conclusion', 'a purpose', 'feedback'], 'Prepared at home (F4-L10).'),
      ...bank(11, 'retrieval', [1, 3, 5]),
    ],
    keyIdea: { text: 'One message, two modes: speak for a minute, then write 6–8 connected sentences.', ar: 'أَتَحَدَّثُ عَنْ مَدْرَسَتِي، ثُمَّ أَكْتُبُ فِقْرَةً مُتَرَابِطَةً.' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F4-L10. Questions 3–5 are from the website ten-question synthesis retrieval (reason agreement, sequence connective, prohibition).',
  }),
  F.objectivesSlide([
    'Speak for up to one minute about school life.',
    'Plan and write a connected 6–8 sentence paragraph.',
    'Combine subjects, opinions, reasons, days, routines and rules.',
    'Check meaning, agreement, spelling and connective choice.',
  ], {
    core: ['I can name subjects and give a preference.', 'I can describe my timetable or my day.'],
    develop: ['I can use at least three connectives.', 'I can give an accurate reason.'],
    stretch: ['I can improve one sentence after checking it.', 'I can vary my sentence openings.'],
  }, 2, 'Website learning objectives (left) and success criteria (right).'),
  F.keywordsSlide({
    text: 'No new grammar today: select, organise and control the whole F4 system. Core: the six plan boxes.',
    groups: [
      { head: 'FUNCTION 1–2', name: 'Open · name and sequence' },
      { head: 'FUNCTION 3–4', name: 'Opinion · justify' },
      { head: 'FUNCTION 5–6', name: 'Rule · contrast and conclude' },
    ],
    bridge: [
      { ar: 'رَأْيٌ', urdu: 'رائے', tr: 'ra’y', en: 'opinion' },
      { ar: 'ضَرُورِيٌّ', urdu: 'ضروری', tr: 'ḍarūrī', en: 'necessary' },
      { ar: 'مُفِيدٌ', urdu: 'مفید', tr: 'mufīd', en: 'useful' },
      { ar: 'حَيَاةٌ', urdu: 'حیات', tr: 'ḥayāh', en: 'life' },
      { ar: 'نِهَايَةٌ', urdu: 'نہایت', tr: 'nihāya', en: 'end' },
    ],
    notes: 'URDU BRIDGE: رائے، ضروری، مفید، حیات are shared words. Urdu نہایت means “extremely” (literally “to the end”) — Arabic نِهَايَةٌ is “the end”: فِي النِّهَايَةِ = finally.',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · the productive toolkit (website)', title: 'Connect and conclude', ar: 'أَدَوَاتُ الرَّبْطِ',
    items: [
      { n: 1, ar: 'ثُمَّ / بَعْدَ ذَلِكَ', en: 'then / after that', tr: 'thum-ma / ba‘-da dhā-lik', core: true, tag: 'sequence' },
      { n: 2, ar: 'أَيْضًا', en: 'also', tr: 'ay-ḍan', core: true, tag: 'add' },
      { n: 3, ar: 'وَلَكِنَّ', en: 'but (+ noun)', tr: 'wa-lā-kin-na', core: true, tag: 'contrast' },
      { n: 4, ar: 'لِأَنَّهُ / لِأَنَّهَا', en: 'because it (m. / f.)', tr: 'li-an-na-hu / li-an-na-hā', core: true, tag: 'reason' },
      { n: 5, ar: 'مِنَ الضَّرُورِيِّ أَنْ', en: 'it is important that …', tr: 'mi-na ḍ-ḍa-rū-riy-yi an', tag: 'rule' },
      { n: 6, ar: 'فِي النِّهَايَةِ', en: 'finally / in the end', tr: 'fi n-ni-hā-ya', tag: 'conclude' },
    ],
    notes: 'TOOLKIT (website “Build a productive language toolkit”): Open and locate — أَدْرُسُ فِي… · تَقَعُ مَدْرَسَتِي فِي… · فِي مَدْرَسَتِي… Name and sequence — أَدْرُسُ… · فِي الحِصَّةِ الأُولَى… · ثُمَّ / بَعْدَ ذَلِكَ… Opinion — أُحِبُّ… · أُفَضِّلُ… · فِي رَأْيِي… Justify — لِأَنَّهُ مُفِيدٌ · لِأَنَّهَا مُمْتِعَةٌ · لِأَنَّنِي أَتَعَلَّمُ… Rule — يَجِبُ أَنْ… · لَا يَجُوزُ أَنْ… · مِنَ الضَّرُورِيِّ أَنْ… Website: “Do not try to use every phrase. Select the language that helps the listener or reader follow your message.”',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · six plan boxes, six frames (website)', title: 'Your six-box plan', ar: 'خُطَّةُ التَّحَدُّثِ وَالكِتَابَةِ',
    cols: [{ label: 'Plan box', w: 3.2 }, { label: 'Frame', w: 4.6, size: 22 }, { label: 'Example', w: 4.53, size: 20 }],
    rows: [
      { core: true, cells: ['1 · School and facilities', { ar: 'مَدْرَسَتِي … وَفِيهَا …' }, { ar: 'مَدْرَسَتِي كَبِيرَةٌ، وَفِيهَا مَكْتَبَةٌ.' }] },
      { core: true, cells: ['2 · Subjects and timetable', { ar: 'أَدْرُسُ … فِي يَوْمِ …' }, { ar: 'أَدْرُسُ العُلُومَ فِي يَوْمِ الاِثْنَيْنِ.' }] },
      { core: true, cells: ['3 · Opinion and reason', { ar: 'أُفَضِّلُ … لِأَنَّ …' }, { ar: 'أُفَضِّلُ الفَنَّ لِأَنَّهُ مُمْتِعٌ.' }] },
      { cells: ['4 · Routine and times', { ar: 'أَبْدَأُ … ثُمَّ …' }, { ar: 'أَبْدَأُ فِي السَّاعَةِ التَّاسِعَةِ، ثُمَّ …' }] },
      { cells: ['5 · Rule and people', { ar: 'يَجِبُ أَنْ … وَمُعَلِّمِي …' }, { ar: 'يَجِبُ أَنْ نَصِلَ مُبَكِّرًا.' }] },
      { cells: ['6 · Overall conclusion', { ar: 'فِي رَأْيِي، …' }, { ar: 'فِي رَأْيِي، مَدْرَسَتِي مُفِيدَةٌ.' }] },
    ],
    ltr: true,
    foot: 'Website: write notes, not complete sentences. The plan helps you speak naturally and write independently.',
    notes: 'GRAMMAR PART 1 — the website “Build your speaking and writing plan” (six boxes with frames). Students fill the six boxes with NOTES (2–4 words each) before the talk. The examples in column 3 are teacher models; students choose their own details.',
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · the accuracy checkpoint (website)', title: 'Three high-risk structures', ar: 'نِقَاطُ الدِّقَّةِ',
    cards: [
      { chip: 'MASCULINE REASON', color: '1D5FBF', head: 'لِأَنَّهُ مُفِيدٌ', big: 'أُحِبُّ التَّارِيخَ لِأَنَّهُ مُفِيدٌ.', en: 'I like history because it is useful.', clue: 'Masculine subject: li-annahu + mufīd.' },
      { chip: 'FEMININE REASON', color: 'C0386B', head: 'لِأَنَّهَا مُمْتِعَةٌ', big: 'أُحِبُّ الرِّيَاضِيَّاتِ لِأَنَّهَا مُمْتِعَةٌ.', en: 'I like maths because it is enjoyable.', clue: 'Feminine subject: li-annahā + ة.' },
      { chip: 'RULE + أَنْ', color: '1E6B52', head: 'يَجِبُ أَنْ / لَا يَجُوزُ أَنْ', big: 'لَا يَجُوزُ أَنْ نَسْتَعْمِلَ الهَاتِفَ.', en: 'We must not use the phone.', clue: 'An before the verb, every time.' },
    ],
    error: { text: 'Website: a rule structure always includes an.', pairs: [['يَجِبُ أَنْ نَحْتَرِمَ المُعَلِّمِينَ.', 'يَجِبُ نَحْتَرِمَ المُعَلِّمِينَ.']] },
    notes: `GRAMMAR PART 2 — website accuracy checkpoint: “Choose لِأَنَّهُ for a masculine subject such as التَّارِيخُ, and لِأَنَّهَا for a feminine subject such as الرِّيَاضِيَّاتُ or اللُّغَةُ العَرَبِيَّةُ. The reason adjective must agree too.”
Website review list (accuracy): subject names and days spelled accurately · reason pronouns and adjectives agree · rule structures include أَنْ · verbs match the intended person.`,
  },
  F.quickCheck(bank(11, 'finalQuiz', [2, 3, 5, 6]), 'website final-checkpoint questions 3, 4, 6 and 7.'),
  {
    type: 'glossed', stage: 'ido', min: 4, eyebrow: 'I do · read and label the website model (1)', title: 'My school and school life', ar: 'مَدْرَسَتِي وَحَيَاتِي المَدْرَسِيَّةُ',
    lines: [
      [M[0], 'SCHOOL · size, place + two facilities'],
      [M[1], 'SUBJECTS · a list of five'],
      [M[2], 'OPINION + REASON · with a contrast (wa-lākinna)'],
      [M[3], 'TIMETABLE · day, lesson, sequence (thumma)'],
    ],
    notes: `I DO (4 min) — read the website model aloud, labelling the job of each sentence. Website: “A strong paragraph is not a list: every sentence develops the message.”
Meaning: does every sentence add information? Range: which structures are varied (present verbs, opinions, reasons, times, sequence, rule, description, conclusion)? Accuracy: where could errors occur (subject spelling, adjective agreement, reason pronouns, verb forms, days and times)?`,
  },
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · finish labelling the model (2)', title: 'Routine, rule, people, conclusion', ar: 'تَتِمَّةُ النَّمُوذَجِ',
    lines: [
      [M[4], 'ROUTINE · start, finish, after that'],
      [M[5], 'RULE · one obligation + one prohibition'],
      [M[6], 'PEOPLE · feminine and plural agreement'],
      [M[7], 'CONCLUSION · overall view + reason'],
    ],
    notes: 'WE DO — students give the label before you reveal it (chat: one word). Ask: which three connectives does the whole model use? (وَلَكِنَّ، ثُمَّ، بَعْدَ ذَلِكَ). Why دُودُونَ with -ūna? (زُمَلَائِي is a group of people).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website eight-question purpose match', title: 'What job does each sentence do?', ar: 'صِلْ كُلَّ جُمْلَةٍ بِهَدَفِهَا',
    seed: 17,
    questions: [purpose[2], purpose[3], purpose[4], purpose[5], purpose[7]],
    side: { kind: 'core', label: 'CORE', text: 'Find the key word first:\nأُفَضِّلُ · فِي يَوْمِ · ثُمَّ\nلَا يَجُوزُ · فِي رَأْيِي' },
    answerSlide: { min: 0, eyebrow: 'We do · purpose-match answers', title: 'Purpose match: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 8 purpose-match questions. The other 3 are homework.',
    answerNotes: 'Ask: which key word gave the purpose away?',
  },
  F.repairSlide(site, ['Is التَّارِيخُ masculine or feminine?', 'What is missing after يَجِبُ?', 'The teacher is a woman: which ending?']),
  F.listening(site, {
    coreTip: 'Listen twice.\n1st: listen only. 2nd: place, lesson, time, rule, next place.',
    routes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5, then write the two dictation sentences.',
    gloss: [
      [M[0], 'I study in a medium-sized school in London; it has a beautiful library and a big playground.'],
      [M[3], 'On Monday I study science in the first lesson, then I study history after break.'],
      [M[4], 'I start at nine and finish at three, and after that I go back home.'],
      [M[5], 'In my school we must respect the teachers, and we must not use the phone in the lesson.'],
      ['أُفَضِّلُ اللُّغَةَ العَرَبِيَّةَ لِأَنَّهَا مُفِيدَةٌ وَمُمْتِعَةٌ. فِي يَوْمِ الخَمِيسِ أَدْرُسُ العُلُومَ، ثُمَّ أَذْهَبُ إِلَى المَكْتَبَةِ.', 'DICTATION · I prefer Arabic because it is useful and enjoyable. On Thursday I study science, then I go to the library.'],
    ],
  }),
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · model evidence questions', title: 'Find the evidence in the model', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 9,
    questions: [
      q('Which subject is sometimes difficult?', ['maths', 'Arabic', 'history'], 'وَلَكِنَّ الرِّيَاضِيَّاتِ صَعْبَةٌ أَحْيَانًا'),
      q('Which two facilities does the school have?', ['a library and a playground', 'a lab and a canteen', 'a hall and a pool'], 'مَكْتَبَةٌ جَمِيلَةٌ وَمَلْعَبٌ كَبِيرٌ'),
      q('When is history studied on Monday?', ['after break', 'in the first lesson', 'at three o’clock'], 'ثُمَّ أَدْرُسُ التَّارِيخَ بَعْدَ الفُسْحَةِ'),
      q('How are the classmates described?', ['friendly', 'helpful', 'strict'], 'زُمَلَائِي وَدُودُونَ'),
      q('Why is school life useful, in the writer’s opinion?', ['they learn new things every day', 'the lessons are short', 'they have many friends'], 'لِأَنَّنِي أَتَعَلَّمُ أَشْيَاءَ جَدِيدَةً كُلَّ يَوْمٍ'),
    ],
    side: { kind: 'info', head: 'EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Find the sentence by its label\n(subjects, timetable, people …).' },
    answerSlide: { min: 0, eyebrow: 'We do · evidence answers', title: 'Evidence: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Teacher-written evidence questions on the website model text (the website offers the model for reading and labelling rather than questions).',
    answerNotes: 'A student reads aloud the evidence phrase (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'كَيْفَ مَدْرَسَتُكَ؟ مَا المَوَادُّ الَّتِي تَدْرُسُهَا؟' },
      { route: 'core', ar: 'أَيُّ مَادَّةٍ تُفَضِّلُ؟ وَلِمَاذَا؟' },
      { route: 'develop', ar: 'صِفْ يَوْمًا وَاحِدًا أَوْ جُزْءًا مِنْ رُوتِينِكَ.' },
      { route: 'stretch', ar: 'اُذْكُرْ قَاعِدَةً وَاحِدَةً وَرَأْيَكَ فِي الحَيَاةِ المَدْرَسِيَّةِ.' },
    ],
    stems: [
      { route: 'core', ar: 'أَدْرُسُ فِي مَدْرَسَةٍ … وَفِيهَا …' },
      { route: 'core', ar: 'أُفَضِّلُ … لِأَنَّهُ / لِأَنَّهَا …' },
      { route: 'develop', ar: 'أَبْدَأُ فِي السَّاعَةِ … ثُمَّ … وَبَعْدَ ذَلِكَ …' },
      { route: 'stretch', ar: 'يَجِبُ أَنْ … · فِي رَأْيِي، …' },
    ],
    modelEn: ['I study in a medium-sized school in London; it has a library and a playground.', 'I prefer Arabic because it is important and enjoyable, but maths is sometimes difficult.'],
    notes: `WEBSITE 60-SECOND TALK — “Use your plan as a prompt, not a script. Aim for clear, connected meaning rather than speed.”
Partner ticks the five website evidence points: answered every part · at least three connectives · an accurate reason · a time, day or sequence · understandable message.
Core aim 45 seconds, Develop / Stretch 60 seconds.`,
  }),
  F.routesSlide(site, {
    core: { amount: '6 sentences', how: 'One sentence per plan box, using the frames.' },
    develop: { amount: '7 sentences', how: 'Three connectives, one contrast with وَلَكِنَّ.' },
    stretch: { amount: '8 sentences', how: 'Varied openings, a developed conclusion, then a before/after rewrite.' },
  }),
  F.framesSlide({
    core: [
      { en: 'I study in a big school in …', ar: 'أَدْرُسُ فِي مَدْرَسَةٍ كَبِيرَةٍ فِي …' },
      { en: 'I study Arabic, science and history.', ar: 'أَدْرُسُ العَرَبِيَّةَ وَالعُلُومَ وَالتَّارِيخَ.' },
      { en: 'I prefer art because it is fun.', ar: 'أُفَضِّلُ الفَنَّ لِأَنَّهُ مُمْتِعٌ.' },
      { en: 'We must respect the teachers.', ar: 'يَجِبُ أَنْ نَحْتَرِمَ المُعَلِّمِينَ.' },
      { en: 'In my opinion, my school is useful.', ar: 'فِي رَأْيِي، مَدْرَسَتِي مُفِيدَةٌ.' },
    ],
    develop: [
      { en: 'It has a library and a big playground.', ar: 'وَفِيهَا مَكْتَبَةٌ وَمَلْعَبٌ كَبِيرٌ.' },
      { en: 'On Monday, in the first lesson …', ar: 'فِي يَوْمِ الاِثْنَيْنِ، فِي الحِصَّةِ الأُولَى …' },
      { en: '… but maths is sometimes difficult.', ar: 'وَلَكِنَّ الرِّيَاضِيَّاتِ صَعْبَةٌ أَحْيَانًا.' },
      { en: 'We must not use the phone.', ar: 'لَا يَجُوزُ أَنْ نَسْتَعْمِلَ الهَاتِفَ.' },
      { en: 'After that I go back home.', ar: 'وَبَعْدَ ذَلِكَ أَرْجِعُ إِلَى البَيْتِ.' },
    ],
    bank: ['ثُمَّ', 'بَعْدَ ذَلِكَ', 'أَيْضًا', 'وَلَكِنَّ', 'لِأَنَّهُ', 'لِأَنَّهَا', 'لِأَنَّنِي', 'فِي رَأْيِي', 'يَجِبُ أَنْ', 'لَا يَجُوزُ أَنْ', 'فِي النِّهَايَةِ', 'أُفَضِّلُ'],
  }),
  F.modelSlide(site,
    'I study in a medium-sized school in London, and it has a beautiful library and a big playground. I study Arabic, English, maths, science and history. I prefer Arabic because it is important and enjoyable, but maths is sometimes difficult. On Monday I study science in the first lesson, then history after break. I start at nine and finish at three, and after that I go home. In my school we must respect the teachers, and we must not use the phone in the lesson. My teacher is helpful and my classmates are friendly. In my opinion, school life is useful because I learn new things every day.',
    ['school', 'subjects', 'reason', 'rule'],
    'The website model text “My school and school life” (8 sentences).'),
  F.selfCheckSlide([
    { route: 'core', text: 'All six content areas are included.' },
    { route: 'core', text: 'Subject names and days are spelled accurately.' },
    { route: 'develop', text: 'At least three connectives are used.' },
    { route: 'develop', text: 'Reason pronouns and adjectives agree.' },
    { route: 'stretch', text: 'Sentence openings are not all identical.' },
  ]),
  F.exitTicket(bank(11, 'finalQuiz', [4, 9, 12]), 16),
  F.prepSlide({
    ...NEXT,
    words: [['مُرَاجَعَةٌ', 'a review / revision', '—'], ['اِخْتِبَارٌ', 'a test', 'pl. اِخْتِبَارَاتٌ'], ['سُؤَالٌ', 'a question', 'pl. أَسْئِلَةٌ'], ['إِجَابَةٌ', 'an answer', 'pl. إِجَابَاتٌ'], ['تَعْلِيمَاتٌ', 'instructions', 'sing. تَعْلِيمَةٌ']],
    questionEn: 'Which part of F4 is hardest for you? Write it in Arabic.',
    questionAr: 'أَصْعَبُ جُزْءٍ',
    homework: {
      core: 'Website F4-L11: the purpose match (8) and the final checkpoint (16).',
      develop: 'Finish your 7-sentence paragraph and underline three connectives.',
      stretch: 'Write a before/after rewrite of one sentence and explain the improvement.',
    },
    wordsSource: 'Teacher-chosen assessment words for the F4-L12 review and unit assessment.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: plan in notes · connect your ideas · check لِأَنَّهُ / لِأَنَّهَا and أَنْ.' }),
];

module.exports = { meta, slides };
