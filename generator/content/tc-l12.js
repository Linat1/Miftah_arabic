'use strict';
/*
 * TC-L12 · Topic C Review and Four-Skills Assessment
 * Website: Advanced Topics › Topic C › Lesson 12 (reuses D4-L12 “Review and Unit Assessment”; Topic C focus
 * “Assess knowledge, inference, communication and accuracy across Topic C”; grammar: cumulative Topic C grammar).
 * The website assessment is B1–B2, so it is tiered: Core items are teacher-made from Topic C lessons 1–11;
 * Develop / Stretch items are the website's own assessment questions (site-data/d4-l12.json).
 * Picture match: website lesson game “Topic C Mixed Challenge”.
 */
const C = require('./common');
const A = require('../site-data/d4-l12.json');
// the website title “المِحْوَرِ ج” renders as one joined word in PowerPoint, so the unit is named in full
const game = { ...require('../site-data/advanced-topic-visual-games.json').c12, arabic: 'تَحَدِّي الوَحْدَةِ' };
const { q, fromSite } = C;

const meta = C.meta({
  n: 12, fileTitle: 'Review_Four_Skills_Assessment', chip: 'Topic C Assessment',
  title: 'Topic C Review and Four-Skills Assessment', arabic: 'مُرَاجَعَةُ الوَحْدَةِ وَتَقْيِيمُ المَهَارَاتِ الأَرْبَعِ',
  focus: 'Show what you know from Topic C: words and grammar, listening, reading, writing and speaking — each section with a Core part for everyone and a Stretch part to aim high.',
  icon: 'FaClipboardCheck',
});
const NEXT = { nextCode: 'Topic D', nextTitle: 'The World of Work', nextAr: 'عَالَمُ العَمَلِ' };
const W = (i, extra) => fromSite(A.grammar[i], extra);
const L = (i, extra) => fromSite(A.listening[i], extra);
const R = (i, extra) => fromSite(A.reading[i], extra);

// Core listening (teacher-made from Topic C language)
const coreListen = [
  ['مَرْحَبًا! أَنَا لَيْلَى، وَأَسْكُنُ فِي مَدِينَةٍ فِي شَمَالِ المَغْرِبِ.', 'Hello! I am Layla, and I live in a city in the north of Morocco.'],
  ['أَمْسِ كَانَ الطَّقْسُ حَارًّا، وَلٰكِنْ غَدًا سَيَكُونُ مُمْطِرًا.', 'Yesterday the weather was hot, but tomorrow it will be rainy.'],
  ['فِي مَدِينَتِي تُوجَدُ مَكْتَبَةٌ كَبِيرَةٌ بِجَانِبِ المَسْجِدِ.', 'In my city there is a big library next to the mosque.'],
  ['المُشْكِلَةُ هِيَ التَّلَوُّثُ بِسَبَبِ السَّيَّارَاتِ، لِذٰلِكَ أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ.', 'The problem is pollution because of cars, so I go to school by bus.'],
  ['اِشْتَرَيْتُ هَاتِفًا جَدِيدًا بِمِئَةِ دِينَارٍ، وَهُوَ أَرْخَصُ مِنْ هَاتِفِ أُخْتِي.', 'I bought a new phone for 100 dinars, and it is cheaper than my sister’s phone.'],
];
// Core reading (teacher-made email)
const coreRead = [
  'مِنْ: يُوسُفَ   إِلَى: صَدِيقِي آدَمَ',
  'السَّلَامُ عَلَيْكُمْ يَا آدَمُ،',
  'أَنَا الآنَ فِي عُمَانَ مَعَ عَائِلَتِي. نُقِيمُ فِي فُنْدُقٍ قُرْبَ البَحْرِ.',
  'الجَوُّ هُنَا حَارٌّ وَمُشْمِسٌ، وَدَرَجَةُ الحَرَارَةِ خَمْسٌ وَثَلَاثُونَ.',
  'أَمْسِ زُرْنَا قَلْعَةً قَدِيمَةً مَبْنِيَّةً مِنَ الحَجَرِ.',
  'فِي السُّوقِ اِشْتَرَيْتُ هَدِيَّةً لَكَ، ثَمَنُهَا عَشَرَةُ رِيَالَاتٍ.',
  'نَصِيحَتِي: لَا تَنْسَ أَنْ تُعِيدَ تَدْوِيرَ البِلَاسْتِيكِ! إِلَى اللِّقَاءِ.',
];
const stretchRead = 'يُشَارُ إِلَى أَنَّ تَغَيُّرَ المَنَاخِ يَزِيدُ شُحَّ المِيَاهِ فِي مَنَاطِقَ عَرَبِيَّةٍ عِدَّةٍ. فَبِسَبَبِ طُولِ فَتَرَاتِ الجَفَافِ، يَنْخَفِضُ المَخْزُونُ الجَوْفِيُّ وَتَتَضَرَّرُ الزِّرَاعَةُ. وَفِي المُدُنِ، يُلَوَّثُ الهَوَاءُ بِعَوَادِمِ السَّيَّارَاتِ. لِذٰلِكَ تَسْتَثْمِرُ بَعْضُ البَلَدِيَّاتِ فِي النَّقْلِ الكَهْرَبَائِيِّ وَالأَنْظِمَةِ الذَّكِيَّةِ. وَفْقًا لِبَيَانَاتِ إِحْدَى البَلَدِيَّاتِ، انْخَفَضَ اسْتِهْلَاكُ الكَهْرَبَاءِ فِي المَبَانِي العَامَّةِ بِنِسْبَةِ ١٨٪ بَعْدَ تَرْكِيبِ أَنْظِمَةٍ تُطْفِئُ الإِضَاءَةَ فِي الغُرَفِ الفَارِغَةِ. مَعَ ذٰلِكَ، هٰذِهِ الحُلُولُ مُكَلِّفَةٌ وَقَدْ تَجْمَعُ بَيَانَاتٍ شَخْصِيَّةً. فِي رَأْيِي، التِّقْنِيَّةُ جُزْءٌ مُهِمٌّ مِنَ الحَلِّ، شَرِيطَةَ أَنْ تُحْمَى الخُصُوصِيَّةُ وَأَنْ تَصْحَبَهَا سِيَاسَاتٌ وَسُلُوكٌ مَسْؤُولٌ.';
const stretchScripts = `Text 2 · Two views on technology: سَلْمَى: أُؤَيِّدُ الطَّاقَةَ الشَّمْسِيَّةَ وَالشَّبَكَاتِ الذَّكِيَّةَ لِأَنَّهَا تُقَلِّلُ الهَدْرَ. عُمَرُ: أُوَافِقُ عَلَى تَقْلِيلِ الهَدْرِ، وَلٰكِنِّي أَخْشَى ارْتِفَاعَ التَّكْلِفَةِ وَجَمْعَ البَيَانَاتِ الشَّخْصِيَّةِ. سَلْمَى: إِذَنْ نَحْنُ مُتَّفِقَانِ عَلَى الهَدَفِ، وَلٰكِنَّنَا نَخْتَلِفُ فِي طَرِيقَةِ التَّطْبِيقِ.
Text 3 · Smart-city report: تُمَثِّلُ الطَّاقَةُ المُتَجَدِّدَةُ خَمْسًا وَثَلَاثِينَ فِي المِئَةِ مِنْ إِنْتَاجِ الكَهْرَبَاءِ فِي المَدِينَةِ. وَكَانَ مِنَ المُقَرَّرِ اكْتِمَالُ شَبَكَةِ النَّقْلِ فِي عَامِ ٢٠٣٠، وَلٰكِنَّ المَوْعِدَ الجَدِيدَ هُوَ ٢٠٣٢. وَيُؤَكِّدُ الخَبِيرُ أَنَّ التِّقْنِيَّةَ وَحْدَهَا لَا تَكْفِي؛ بَلْ يَجِبُ أَنْ يَتَغَيَّرَ سُلُوكُ المُسْتَخْدِمِينَ أَيْضًا.`;

const writingSite = {
  differentiation: {
    core: 'Write 5 sentences about your town or a trip, with help from the word bank.',
    develop: 'Write 80–100 words: your town, its environment and technology in three tenses.',
    stretch: 'Website task: a 130–140-word environment and technology article.',
  },
  writing: {
    prompt: 'Write 130–140 Arabic words. Explain an environmental issue, causes and effects, a practical or technological solution, evidence and one limitation.',
    checklist: ['Task /5 — all points developed.', 'Range /5 — varied grammar and vocabulary.', 'Accuracy /5 — agreement, patterns and spelling.', 'Proofread before you finish.'],
    model: '',
  },
};
const speakSite = {
  speaking: {
    context: 'Section E · Speaking: a Topic C conversation',
    model: [
      ['A', 'صِفْ مَدِينَتَكَ.', 'Describe your town.'],
      ['B', 'أَسْكُنُ فِي مَدِينَةٍ كَبِيرَةٍ فِي شَمَالِ إِنْجِلْتِرَا. تُوجَدُ فِيهَا مَكْتَبَةٌ وَمُسْتَشْفًى، لٰكِنَّ المُشْكِلَةَ هِيَ الاِزْدِحَامُ.', 'I live in a big city in the north of England. It has a library and a hospital, but the problem is congestion.'],
      ['A', 'وَمَا الحَلُّ فِي رَأْيِكَ؟', 'And what is the solution, in your opinion?'],
      ['B', 'فِي رَأْيِي، يَجِبُ أَنْ نَسْتَعْمِلَ النَّقْلَ العَامَّ أَكْثَرَ لِكَيْ نُقَلِّلَ التَّلَوُّثَ.', 'In my opinion, we must use public transport more so that we reduce pollution.'],
    ],
  },
};

const slides = [
  C.titleSlide({
    n: 12,
    source: 'The website lesson reuses D4-L12 (Review and Unit Assessment: listening 20 · reading 10 · writing 20 · speaking 10) with the Topic C focus “Assess knowledge, inference, communication and accuracy across Topic C”. The website assessment is B1–B2, so each section here is TIERED: a Core part (teacher-made from Topic C lessons 1–11) that every student can access, then the website’s own questions for Develop / Stretch. The warm-up picture match is the website game “Topic C Mixed Challenge”.',
    support: `• 50 marks, 5 sections × 10: A words and grammar · B listening · C reading · D writing · E speaking. In every section the first half is Core; the second half is Develop / Stretch (website questions).
• Access arrangements: Core students may use the Topic C word bank for Section D only. SEND: extra time, reading of questions in English allowed, one section at a time on screen.
• Every section has an answer slide straight after — mark live and record scores on the Score profile slide, or hide the answer slides and mark later (teacher choice).`,
  }),
  C.welcomeSlide(),
  {
    type: 'journey', stage: 'welcome', eyebrow: 'Today’s lesson map', title: 'Our assessment today, step by step', ar: 'خَرِيطَةُ الدَّرْسِ',
    steps: [
      { stage: 'donow', min: 5, text: 'Warm-up quiz, then we check together.', ar: 'اِبْدَأِ الآنَ' },
      { stage: 'teach', min: 5, text: 'How the assessment works; picture match.', ar: 'كَيْفَ؟' },
      { stage: 'ido', min: 10, text: 'Section A: words and grammar.', ar: 'القِسْمُ أ' },
      { stage: 'wedo', min: 12, text: 'Sections B and C: listening and reading.', ar: 'ب · ج' },
      { stage: 'youdo', min: 18, text: 'Sections D and E: writing and speaking.', ar: 'د · هـ' },
      { stage: 'feedback', min: 7, text: 'Score profile and my target.', ar: 'نَتَائِجِي' },
      { stage: 'prep', min: 3, text: 'Get ready for Topic D.', ar: 'اِسْتَعِدَّ' },
    ],
    support: 'Every section starts with Core questions that everyone can answer. Do the Core part first, then go as far as you can. Read each question twice.',
    notes: `LESSON MAP (predictability — SEND). This lesson is an assessment, so the stages are the five sections. Timings are a guide for one 60-minute lesson; if time is short, Section E (speaking) can be done in the next lesson or as a 2-minute recording.
Reassure students: “Every section starts with questions everyone can answer. Do the Core part first, then go as far as you can.”`,
  },
  C.doNow({
    questions: [
      q('What does أُسْتَاذٌ mean?', ['teacher', 'student', 'school'], 'Prepared at home? This is next topic’s word — a free point for curious students! (Otherwise: pass.)'),
      q('Which word means “pollution”?', ['التَّلَوُّثُ', 'الطَّقْسُ', 'الشَّمَالُ'], 'TC-L04 / prepared at home.'),
      q('What does كَلِمَةُ مُرُورٍ mean?', ['password', 'message', 'website'], 'TC-L06 / prepared at home.'),
      q('Which word means “hospital”?', ['مُسْتَشْفًى', 'مَكْتَبَةٌ', 'مَقْهًى'], 'TC-L08 / prepared at home.'),
      q('Which linking word means “so, therefore”?', ['لِذٰلِكَ', 'لِأَنَّ', 'بَيْنَمَا'], 'TC-L11.'),
    ],
    keyIdea: { text: 'Do the Core part of every section first. Then aim higher. Read every question twice.', ar: 'اِقْرَأْ · فَكِّرْ · أَجِبْ' },
    retrieves: 'Warm-up only — not part of the 50 marks. Questions 2–4 are the five revision words prepared at home (Flipped Learning follow-up). Question 1 previews Topic D (teachers: accept “pass”).',
  }),
  C.objectivesSlide([
    'Understand and use the full Topic C vocabulary.',
    'Apply the Topic C grammar accurately.',
    'Extract exact information from listening and reading texts.',
    'Produce an organised spoken and written response.',
  ], {
    core: ['I can answer the Core questions in every section.', 'I can write 5 correct sentences about my town or a trip.'],
    develop: ['I can use three tenses and linking words in writing.', 'I can answer some website (B1) questions.'],
    stretch: ['I can answer the website listening and reading questions.', 'I can write the 130–140-word article.'],
  }, 3, 'The four objectives on the left summarise the website D4-L12 assessment aims for Topic C.'),
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'How the assessment works · 50 marks', title: 'Five sections, two levels', ar: 'أَقْسَامُ التَّقْيِيمِ',
    cols: [{ label: 'Section', w: 2.2 }, { label: 'Skill', w: 2.1 }, { label: 'Core part (everyone)', w: 3.3 }, { label: 'Develop / Stretch part', w: 3.43 }, { label: 'Marks', w: 1.3 }],
    rows: [
      { core: true, cells: ['A', 'Words and grammar', '5 questions from Topic C', '5 website grammar questions', '10'] },
      { core: true, cells: ['B', 'Listening', 'Layla’s message (5 questions)', 'Website texts 2 and 3 (5 questions)', '10'] },
      { core: true, cells: ['C', 'Reading', 'Yusuf’s email (5 questions)', 'Website article (5 questions)', '10'] },
      { core: true, cells: ['D', 'Writing', '5 sentences with the word bank', '80–100 words · or the 130–140-word article', '10'] },
      { core: true, cells: ['E', 'Speaking', 'Answer 3 questions about your town', 'Discuss a problem and a solution', '10'] },
    ],
    notes: `HOW THE ASSESSMENT WORKS (3 min). Tiered design so that weak and strong students are both assessed fairly on the same Topic C content.
Scoring: 1 mark per question in A–C (10 each). Writing and speaking: marked out of 10 with the mark scheme slide (Task 4 · Range 3 · Accuracy 3), adapted from the website’s Task /5 · Range /5 · Accuracy /5.
Rules: cameras on, mics muted, chat only for your answers (A–C: type e.g. “A: 1B 2A 3C …” privately to the teacher). Write sections D in books / OneNote, then photograph or upload.`,
  },
  C.gameSlide(game, {
    en: ['The climate differs from one region to another.', 'We can reduce pollution by recycling and using cleaner energy.', 'I use my phone to find shops and compare prices.'],
    icons: [[['fa6', 'FaEarthAfrica', '2E8B57'], ['fa6', 'FaCloudSun', 'C77700']], [['fa6', 'FaIndustry', '5A6472'], ['fa6', 'FaRecycle', '2E8B57']], [['fa6', 'FaCity', '1B3B6F'], ['fa6', 'FaBagShopping', 'B83227'], ['fa6', 'FaMobileScreen', '5A6472']]],
    labels: ['places + climate', 'problem + solution', 'town + shopping + phone'],
    order: [1, 2, 0],
    min: 2,
    notes: 'WARM-UP (not marked): each sentence joins two or three parts of Topic C. Key words: المُنَاخُ (climate), التَّلَوُّثِ + إِعَادَةِ التَّدْوِيرِ (pollution + recycling), المَتَاجِرِ + الأَسْعَارِ (shops + prices).',
  }),
  {
    type: 'mcq', stage: 'ido', min: 5, eyebrow: 'Section A · part 1 · Core · words and grammar · 5 marks', title: 'Section A: Topic C words and grammar', ar: 'القِسْمُ أ',
    seed: 11,
    questions: [
      q('Which word means “the weather”?', ['الطَّقْسُ', 'الشَّمَالُ', 'السُّوقُ'], 'TC-L03: الطَّقْسُ = the weather.'),
      q('Complete:', ['تُوجَدُ', 'يُوجَدُ', 'يُوجَدُونَ'], 'TC-L08: مَكْتَبَةٌ is feminine → تُوجَدُ.', { ar: '___ مَكْتَبَةٌ فِي مَدِينَتِي.' }),
      q('This is a bag. How much is it?', ['هٰذِهِ حَقِيبَةٌ. كَمْ ثَمَنُهَا؟', 'هٰذَا حَقِيبَةٌ. كَمْ ثَمَنُهُ؟', 'هٰذِهِ حَقِيبَةٌ. كَمْ ثَمَنُهُ؟'], 'TC-L09: feminine → هٰذِهِ … ثَمَنُهَا.'),
      q('Complete:', ['مَصْنُوعَةٌ', 'مَصْنُوعٌ', 'مَصْنُوعُونَ'], 'TC-L10: الطَّاوِلَةُ is feminine → مَصْنُوعَةٌ.', { ar: 'الطَّاوِلَةُ ___ مِنَ الخَشَبِ.' }),
      q('Which sentence is about the FUTURE?', ['سَأُرْسِلُ رِسَالَةً إِلَى صَدِيقِي.', 'أَرْسَلْتُ رِسَالَةً إِلَى صَدِيقِي.', 'أُرْسِلُ رِسَالَةً إِلَى صَدِيقِي.'], 'TC-L06 / L11: سَـ = will.'),
    ],
    side: { kind: 'info', head: 'HOW TO ANSWER', text: 'Work on your own in silence.\nPrivate chat to the teacher:\nA: 1_ 2_ 3_ 4_ 5_' },
    answerSlide: { min: 0, eyebrow: 'Section A · part 1 · answers', title: 'Section A part 1: answers', ar: 'الإِجَابَاتُ' },
    notes: 'SECTION A part 1 (Core — everyone, 3 min). Teacher-made from Topic C lessons 3, 6, 8, 9 and 10. 1 mark each. Read each question aloud in English once for SEND / EAL students (allowed: questions only, not answers).',
    answerNotes: 'Mark: 1 mark each (5). If marking live, students tick their own in a different colour. Note any question most students got wrong — it becomes a Do Now item in Topic D.',
  },
  {
    type: 'mcq', stage: 'ido', min: 5, eyebrow: 'Section A · part 2 · Develop / Stretch · website grammar · 5 marks', title: 'Section A: website grammar questions', ar: 'القِسْمُ أ · ٢',
    seed: 12,
    questions: [W(1, { n: 6 }), W(2, { n: 7 }), W(3, { n: 8 }), W(4, { n: 9 }), W(11, { n: 10 })],
    side: { kind: 'core', label: 'CORE', text: 'Try question 8 first: which word always comes before إِلَى?\nThen try the others — no penalty for trying.' },
    answerSlide: { min: 0, eyebrow: 'Section A · part 2 · answers', title: 'Section A part 2: answers', ar: 'الإِجَابَاتُ' },
    notes: `SECTION A part 2 (Develop / Stretch, 3 min) — five of the website’s 12 “cumulative grammar laboratory” questions (2, 3, 4, 5, 12). Core students attempt question 8 (يُؤَدِّي إِلَى, TC-L04) and any others they can.
The other website grammar questions (for Stretch revision later): ${A.grammar.filter((_, i) => ![1, 2, 3, 4, 11].includes(i)).map((x) => x.prompt).join(' · ')}`,
    answerNotes: 'Mark: 1 mark each (5). Section A total /10.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 5, eyebrow: 'Section B · part 1 · Core · listening · 5 marks', title: 'Section B: Layla’s voice message', ar: 'القِسْمُ ب · الاِسْتِمَاعُ',
    seed: 13,
    questions: [
      q('Where does Layla live?', ['In the north of Morocco', 'In the south of Morocco', 'In Oman'], 'فِي شَمَالِ المَغْرِبِ.', { n: 1 }),
      q('What will the weather be like tomorrow?', ['Rainy', 'Hot', 'Sunny'], 'غَدًا سَيَكُونُ مُمْطِرًا.', { n: 2 }),
      q('What is next to the mosque?', ['A big library', 'A hospital', 'A café'], 'تُوجَدُ مَكْتَبَةٌ كَبِيرَةٌ بِجَانِبِ المَسْجِدِ.', { n: 3 }),
      q('How does she go to school?', ['By bus', 'By car', 'On foot'], 'أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ.', { n: 4 }),
      q('What is true about her new phone?', ['It is cheaper than her sister’s.', 'It is more expensive than her sister’s.', 'It cost 10 dinars.'], 'وَهُوَ أَرْخَصُ مِنْ هَاتِفِ أُخْتِي.', { n: 5 }),
    ],
    side: { kind: 'info', head: 'LISTEN TWICE', text: '1. Read the questions (30 s).\n2. Listen once — just listen.\n3. Listen again — choose.\nChat: B: 1_ 2_ 3_ 4_ 5_' },
    answerSlide: { min: 0, eyebrow: 'Section B · part 1 · answers', title: 'Section B part 1: answers', ar: 'الإِجَابَاتُ' },
    between: {
      type: 'glossed', stage: 'wedo', eyebrow: 'Section B · after marking · read along', title: 'Layla’s message — read along with English', ar: 'نَصُّ الاِسْتِمَاعِ',
      lines: coreListen,
      notes: 'READ-ALONG — show ONLY AFTER Section B part 1 answers have been submitted. Teacher-made script using Topic C language (L01 place, L03 weather, L08 town, L04 problem, L09 price).',
    },
    notes: `SECTION B part 1 (Core — everyone, 4 min). Teacher-made script from Topic C lessons 1, 3, 4, 8, 9. Read it aloud twice at a calm pace.

SCRIPT (read aloud):
${coreListen.map((x) => x[0]).join(' ')}`,
    answerNotes: 'Mark: 1 mark each (5). Then show the read-along (next slide).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 5, eyebrow: 'Section B · part 2 · Develop / Stretch · website listening · 5 marks', title: 'Section B: two views and a city report', ar: 'القِسْمُ ب · ٢',
    seed: 14,
    questions: [L(8, { n: 6 }), L(9, { n: 7 }), L(10, { n: 8 }), L(14, { n: 9 }), L(15, { n: 10 })],
    side: { kind: 'core', label: 'CORE', text: 'Question 9: listen for the number (a percentage).\nQuestion 8: what do BOTH people want?' },
    answerSlide: { min: 0, eyebrow: 'Section B · part 2 · answers', title: 'Section B part 2: answers', ar: 'الإِجَابَاتُ' },
    notes: `SECTION B part 2 (Develop / Stretch, 4 min) — the website assessment listening texts 2 and 3 with five of the website questions (9, 10, 11, 15, 16). Read each text twice.

SCRIPTS (read aloud):
${stretchScripts}

Website text 1 (climate and water) and its 8 questions can be used for Stretch revision: ${A.listening.slice(0, 8).map((x) => x.prompt).join(' · ')}`,
    answerNotes: 'Mark: 1 mark each (5). Section B total /10.',
  },
  {
    type: 'passage', stage: 'wedo', min: 3, eyebrow: 'Section C · part 1 · Core · reading', title: 'Section C: Yusuf’s email', ar: 'القِسْمُ ج · القِرَاءَةُ',
    docLines: coreRead,
    glossaryHead: 'KEY WORDS',
    glossary: [
      ['عُمَانُ', 'Oman'], ['عَائِلَتِي', 'my family'], ['نُقِيمُ فِي', 'we are staying at'], ['قُرْبَ', 'near'], ['دَرَجَةُ الحَرَارَةِ', 'temperature'],
      ['زُرْنَا', 'we visited'], ['قَلْعَةٌ', 'castle'], ['رِيَالَاتٌ', 'riyals'], ['نَصِيحَتِي', 'my advice'], ['لَا تَنْسَ', 'don’t forget'],
    ],
    notes: `SECTION C part 1 (Core — everyone). Teacher-made email using Topic C language: L07 (نُقِيمُ فِي, travel), L03 (weather, temperature), L10 (مَبْنِيَّةٌ مِنَ الحَجَرِ), L09 (ثَمَنُهَا), L05 (recycling advice).
The glossary is allowed — this assesses reading for meaning, not vocabulary recall. Students read silently (3 min), then answer on the next slide.
Translation for the teacher: From Yusuf to my friend Adam. Peace be upon you, Adam. I am now in Oman with my family. We are staying in a hotel near the sea. The weather here is hot and sunny, and the temperature is 35. Yesterday we visited an old castle built of stone. In the market I bought you a present; it cost ten riyals. My advice: don’t forget to recycle plastic! Goodbye.`,
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'Section C · part 1 · Core · reading questions · 5 marks', title: 'Section C: email questions', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 15,
    questions: [
      q('Where is Yusuf staying?', ['In a hotel near the sea', 'In a flat in the city', 'With his grandparents'], 'نُقِيمُ فِي فُنْدُقٍ قُرْبَ البَحْرِ.', { n: 1 }),
      q('What is the weather like?', ['Hot and sunny', 'Cold and rainy', 'Windy'], 'الجَوُّ هُنَا حَارٌّ وَمُشْمِسٌ.', { n: 2 }),
      q('What is the castle built of?', ['Stone', 'Wood', 'Glass'], 'قَلْعَةً قَدِيمَةً مَبْنِيَّةً مِنَ الحَجَرِ.', { n: 3 }),
      q('How much did the present cost?', ['10 riyals', '35 riyals', '100 riyals'], 'ثَمَنُهَا عَشَرَةُ رِيَالَاتٍ.', { n: 4 }),
      q('What is Yusuf’s advice?', ['Recycle plastic', 'Visit the castle', 'Book a hotel early'], 'لَا تَنْسَ أَنْ تُعِيدَ تَدْوِيرَ البِلَاسْتِيكِ!', { n: 5 }),
    ],
    side: { kind: 'info', head: 'READ LIKE A DETECTIVE', text: '1. Read the question first.\n2. Find ONE key word in the email.\n3. Read that line again, then choose.\nChat: C: 1_ 2_ 3_ 4_ 5_' },
    answerSlide: { min: 0, eyebrow: 'Section C · part 1 · answers', title: 'Section C part 1: answers', ar: 'الإِجَابَاتُ' },
    notes: 'SECTION C part 1 questions (Core — everyone). 1 mark each.',
    answerNotes: 'Mark: 1 mark each (5).',
  },
  {
    type: 'passage', stage: 'wedo', min: 4, eyebrow: 'Section C · part 2 · Develop / Stretch · website article', title: 'Section C: water, cities and technology', ar: 'القِسْمُ ج · ٢',
    text: stretchRead,
    glossaryHead: 'KEY WORDS',
    glossary: [
      ['يُشَارُ إِلَى أَنَّ', 'it is reported that'], ['شُحُّ المِيَاهِ', 'water scarcity'], ['الجَفَافُ', 'drought'], ['المَخْزُونُ الجَوْفِيُّ', 'groundwater stock'], ['عَوَادِمُ', 'exhaust fumes'],
      ['البَلَدِيَّاتُ', 'town councils'], ['وَفْقًا لِـ', 'according to'], ['بِنِسْبَةِ', 'by (a percentage)'], ['مَعَ ذٰلِكَ', 'however'], ['الخُصُوصِيَّةُ', 'privacy'],
    ],
    notes: `SECTION C part 2 (Develop / Stretch) — the website assessment reading text (Part B), unchanged. Core students may read it for the extra challenge but are not expected to finish.
Translation for the teacher: It is reported that climate change is increasing water scarcity in several Arab regions. Because of longer droughts, groundwater stocks fall and agriculture suffers. In cities, the air is polluted by car exhaust. So some councils are investing in electric transport and smart systems. According to one council’s data, electricity use in public buildings fell by 18% after systems were installed that switch off the lights in empty rooms. However, these solutions are expensive and may collect personal data. In my opinion, technology is an important part of the solution, provided that privacy is protected and it is accompanied by responsible policies and behaviour.`,
  },
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'Section C · part 2 · Develop / Stretch · website questions · 5 marks', title: 'Section C: article questions', ar: 'أَسْئِلَةُ المَقَالَةِ',
    seed: 16,
    questions: [R(1, { n: 6 }), R(3, { n: 7 }), R(6, { n: 8 }), R(7, { n: 9 }), R(0, { n: 10 })],
    side: { kind: 'core', label: 'CORE', text: 'Question 6: find الجَفَافِ in the text.\nQuestion 7: find the number (١٨٪).' },
    answerSlide: { min: 0, eyebrow: 'Section C · part 2 · answers', title: 'Section C part 2: answers', ar: 'الإِجَابَاتُ' },
    notes: `SECTION C part 2 questions — five of the website’s 10 reading questions (2, 4, 7, 8, 1). The website’s other reading questions for Stretch revision: ${A.reading.filter((_, i) => ![0, 1, 3, 6, 7].includes(i)).map((x) => x.prompt).join(' · ')}`,
    answerNotes: 'Mark: 1 mark each (5). Section C total /10.',
  },
  C.routesSlide(writingSite, {
    core: { amount: '5 sentences', how: 'Write about your town or a trip: where, weather, what there is, one problem, your opinion. Word bank on the next slide allowed.' },
    develop: { amount: '80–100 words', how: 'Your town, its environment and technology: one sentence in the past, one now and one in the future, with linking words and an opinion.' },
    stretch: { amount: '130–140 words', how: 'The website article: issue, causes and effects, a solution, evidence and one limitation. Mark scheme on the next slide but one.' },
    notes: 'SECTION D — WRITING (12 min). Assessment conditions: silent, on your own. Core may use the word bank slide; Develop / Stretch without support. Photograph or upload at the end.',
  }),
  C.framesSlide({
    core: [
      { en: 'I live in … in the north / south of …', ar: 'أَسْكُنُ فِي ______ فِي ______ .' },
      { en: 'The weather is … / will be …', ar: 'الطَّقْسُ ______ / سَيَكُونُ ______ .' },
      { en: 'In my town there is …', ar: 'فِي مَدِينَتِي يُوجَدُ / تُوجَدُ ______ .' },
      { en: 'The problem is … because of …', ar: 'المُشْكِلَةُ هِيَ ______ بِسَبَبِ ______ .' },
      { en: 'In my opinion, … because …', ar: 'فِي رَأْيِي ______ لِأَنَّ ______ .' },
    ],
    develop: [
      { en: 'In the past …', ar: 'فِي المَاضِي كَانَ ______ .' },
      { en: 'We must … so that …', ar: 'يَجِبُ أَنْ ______ لِكَيْ ______ .' },
      { en: 'On the one hand … on the other …', ar: 'مِنْ نَاحِيَةٍ ______ ، وَمِنْ نَاحِيَةٍ أُخْرَى ______ .' },
      { en: '… is cheaper / bigger than …', ar: '______ أَرْخَصُ / أَكْبَرُ مِنْ ______ .' },
      { en: '… is built of …', ar: '______ مَبْنِيٌّ مِنَ ______ .' },
    ],
    bank: ['الطَّقْسُ', 'حَارٌّ', 'مُمْطِرٌ', 'مَكْتَبَةٌ', 'مُسْتَشْفًى', 'التَّلَوُّثُ', 'السَّيَّارَاتِ', 'إِعَادَةُ التَّدْوِيرِ', 'الحَافِلَةِ', 'هَاتِفِي', 'مُفِيدٌ', 'الشَّمَالِ'],
  }),
  {
    type: 'formsTable', stage: 'youdo', min: 1, eyebrow: 'Section D · writing mark scheme · 10 marks', title: 'How your writing is marked', ar: 'مِعْيَارُ التَّصْحِيحِ',
    cols: [{ label: 'Criterion', w: 2.2 }, { label: 'Marks', w: 1.2 }, { label: 'Core (5 sentences)', w: 3.0 }, { label: 'Develop (80–100 words)', w: 3.0 }, { label: 'Stretch (website article)', w: 2.93 }],
    rows: [
      { core: true, cells: ['Task', '/4', '5 sentences on the topic', 'town + environment + technology', 'issue, causes, solution, evidence, limitation'] },
      { core: true, cells: ['Range', '/3', 'Topic C words; one linking word', '3 tenses; 3 linking words; an opinion', 'passive, cause–effect, purpose, concession'] },
      { core: true, cells: ['Accuracy', '/3', 'there is (m./f.); “the”; spelling', 'agreement (m./f.), partner words', 'subjunctive after “an” and “likay”; case endings'] },
    ],
    notes: `WRITING MARK SCHEME (Section D, /10) — adapted from the website: Task /5 · Range /5 · Accuracy /5. Each route is marked against its OWN column, so a Core student can score full marks for 5 accurate sentences.
Band guide: 9–10 all points, accurate; 6–8 most points, some errors; 3–5 some points, errors affect meaning; 1–2 very limited.
Website Question 1 (environmental action profile — problem, two causes, evidence, a solution, expected result) can be used as a Develop scaffold before writing.`,
  },
  C.stretchSlide(writingSite, [
    ['يُشَارُ إِلَى أَنَّ …', 'it is reported that …'],
    ['بِسَبَبِ … ، مِمَّا يُؤَدِّي إِلَى …', 'because of …, which leads to …'],
    ['يَجِبُ عَلَى … أَنْ … لِكَيْ …', '… must … so that …'],
    ['وَفْقًا لِـ … ، انْخَفَضَ … بِنِسْبَةِ …', 'according to …, … fell by …'],
    ['مَعَ ذٰلِكَ، …', 'however, …'],
    ['عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ … شَرِيطَةَ أَنْ …', 'although …, … provided that …'],
  ]),
  C.speakingSlide(speakSite, {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'أَيْنَ تَسْكُنُ؟ وَمَاذَا يُوجَدُ فِي مَدِينَتِكَ؟' },
      { route: 'core', ar: 'كَيْفَ الطَّقْسُ اليَوْمَ؟ وَكَيْفَ سَيَكُونُ غَدًا؟' },
      { route: 'develop', ar: 'مَا أَهَمُّ مُشْكِلَةٍ بِيئِيَّةٍ فِي مَدِينَتِكَ؟ وَمَا الحَلُّ؟' },
      { route: 'stretch', ar: 'هَلِ التِّقْنِيَّةُ جُزْءٌ مِنَ الحَلِّ؟ لِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَسْكُنُ فِي ______ ، وَيُوجَدُ فِيهَا ______ .' },
      { route: 'develop', ar: 'المُشْكِلَةُ ______ ، لِذٰلِكَ يَجِبُ أَنْ ______ .' },
      { route: 'stretch', ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّ ______ .' },
      { route: 'sum', ar: 'يَسْكُنُ / تَسْكُنُ فِي ______ .' },
    ],
    notes: `SECTION E — SPEAKING (/10). Website Part D cues: identify one issue; explain causes and consequences; propose and evaluate one solution; use one example or statistic; respond to a follow-up question.
Online delivery: each student answers the Core questions and then their route question on open mic (1–2 minutes each), or records a short voice note if time is short. Mark: Communication /4 · Range /3 · Accuracy and pronunciation /3.
The stems are for the rehearsal minute only — remove them (next slide) for the assessed answer if you want a stricter test.`,
  }),
  {
    type: 'formsTable', stage: 'feedback', min: 3, eyebrow: 'Feedback · score profile · evidence and target', title: 'My Topic C score profile', ar: 'نَتَائِجِي',
    cols: [{ label: 'Section', w: 2.6 }, { label: 'Core part', w: 1.9 }, { label: 'Develop / Stretch part', w: 2.4 }, { label: 'Total', w: 1.5 }, { label: 'My next step', w: 3.93 }],
    rows: [
      { core: true, cells: ['A · words and grammar', '/5', '/5', '/10', 'Revise the Topic C map rows I got wrong'] },
      { core: true, cells: ['B · listening', '/5', '/5', '/10', 'Listen for key words and numbers'] },
      { core: true, cells: ['C · reading', '/5', '/5', '/10', 'Read the question first, then find ONE key word'] },
      { core: true, cells: ['D · writing', '—', '—', '/10', 'Add one linking word and one reason'] },
      { core: true, cells: ['E · speaking', '—', '—', '/10', 'Use a speaking phrase (مِنْ وَجْهَةِ نَظَرِي)'] },
    ],
    notes: `SCORE PROFILE (3 min) — website Section 07 “Evidence · target · transfer”. Students copy this table into their books and fill it in (/50 total).
Reflection (website): “My strongest Topic C evidence was …” · “My precise next action is …” — each student writes ONE of each in English or Arabic.
Guide: 40–50 → Stretch route in Topic D; 25–39 → Develop; below 25 → Core route with a Do Now check-in. Record results in the markbook and the Pastoral Tracker (Character: resilience for students who attempted every section).`,
  },
  C.selfCheckSlide([
    { route: 'core', text: 'I answered the Core questions in every section.' },
    { route: 'core', text: 'I wrote 5 correct sentences about my town or a trip.' },
    { route: 'develop', text: 'I used three tenses and linking words in my writing.' },
    { route: 'develop', text: 'I answered some of the website questions.' },
    { route: 'stretch', text: 'I wrote the 130–140-word article with a concession.' },
  ]),
  C.prepSlide({
    ...NEXT,
    words: [['مَدْرَسَةٌ ابْتِدَائِيَّةٌ', 'primary school', ''], ['مَدْرَسَةٌ ثَانَوِيَّةٌ', 'secondary school', ''], ['جَامِعَةٌ', 'university', 'pl. جَامِعَاتٌ'], ['أُسْتَاذٌ', 'teacher', 'pl. أَسَاتِذَةٌ'], ['تِلْمِيذٌ', 'pupil', 'pl. تَلَامِيذُ']],
    questionEn: 'Write one Arabic sentence: what kind of school do you go to?',
    questionAr: 'فِي أَيِّ مَدْرَسَةٍ تَدْرُسُ؟',
    homework: {
      core: 'Correct your Section A–C mistakes in your book (write the right answer and why).',
      develop: 'Rewrite your Section D paragraph, adding one linking word and one reason.',
      stretch: 'Website · TC-L12 · complete the website’s full grammar laboratory (12 questions) and listening text 1.',
    },
    wordsSource: 'Next: Topic D “The World of Work”, lesson TD-L01 “Learning Institutions and Stages of Education”. The five words come from the Topic D “School, Education & Training” bank.',
  }),
  C.closeSlide({ ...NEXT, remember: 'Topic C complete — well done! 5 words + 1 sentence before Topic D.' }),
];

module.exports = { meta, slides };
