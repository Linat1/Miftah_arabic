'use strict';
/*
 * F4-L09 · Extended Writing: My School
 * Website: Pathways › Foundation › F4 › Lesson 9. The F4 retrieval bridge and three quality questions, email vs
 * article/blog formats (16 terms; 12), three purposeful paragraphs + task-coverage checklist (14), the F4 language vault
 * (14), the 83-word model email to Salma (12), repairing common errors (12), planning, the School Writer Mission (14),
 * Huda plans her article (listening), email vs article openings (reading), oral paragraph rehearsal, the 80–100-word
 * draft, the /10 review (task · range · accuracy) and the 16-question checkpoint.
 */
const F = require('./f4-common');
const { q, bank, banks } = F;

const meta = F.meta({
  n: 9, fileTitle: 'Extended_Writing_My_School', chip: 'Extended Writing',
  title: 'Extended Writing: My School', arabic: 'الكِتَابَةُ المُطَوَّلَةُ — مَدْرَسَتِي',
  focus: 'Choose an email or an article format, plan three purposeful paragraphs, write 80–100 connected words about your school using the whole F4 unit, then review and improve.',
  icon: 'FaPenNib', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F4-L10', nextTitle: 'Listening and Speaking: School Conversations', nextAr: 'الاِسْتِمَاعُ وَالتَّحَدُّثُ — مُحَادَثَاتٌ مَدْرَسِيَّةٌ' };
const AR = /[؀-ۿ]/;
const rounds = banks.l09.rounds.map((r) => F.w({ ...r, q: AR.test(r.prompt) ? r.prompt : `${r.title}: ${r.prompt}` }));
const prompts = banks.l09.prompts;
const P1 = 'أَهْلًا وَسَهْلًا! أَدْرُسُ فِي مَدْرَسَةٍ ثَانَوِيَّةٍ كَبِيرَةٍ وَمُنَظَّمَةٍ قَرِيبَةٍ مِنْ بَيْتِي. فِي مَدْرَسَتِي فُصُولٌ وَاسِعَةٌ، وَمَكْتَبَةٌ هَادِئَةٌ، وَمَخْتَبَرُ عُلُومٍ حَدِيثٌ.';
const P2 = 'أَدْرُسُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ وَالرِّيَاضِيَّاتِ وَالعُلُومَ. مَادَّتِي المُفَضَّلَةُ هِيَ العُلُومُ لِأَنَّهَا مُفِيدَةٌ وَمُثِيرَةٌ لِلاهْتِمَامِ. يَوْمَ الاِثْنَيْنِ تَبْدَأُ حِصَّةُ العُلُومِ عِنْدَ السَّاعَةِ التَّاسِعَةِ.';
const P3 = 'أَصِلُ إِلَى المَدْرَسَةِ صَبَاحًا، ثُمَّ أَدْخُلُ الفَصْلَ، وَبَعْدَ الاِسْتِرَاحَةِ أَذْهَبُ إِلَى المَكْتَبَةِ. يَجِبُ أَنْ نَحْضُرَ فِي المَوْعِدِ، وَلَا يَجُوزُ أَنْ نَسْتَعْمِلَ الهَوَاتِفَ فِي الفَصْلِ. فِي رَأْيِي، الحَيَاةُ المَدْرَسِيَّةُ مُمْتِعَةٌ لِأَنَّنِي أَتَعَلَّمُ أَشْيَاءَ جَدِيدَةً وَأَقْضِي وَقْتًا مَعَ صَدِيقَاتِي.';

const site = {
  speaking: {
    context: 'Rehearse each paragraph aloud',
    model: [
      ['A', 'صِفْ مَدْرَسَتَكَ.', 'Describe your school.'],
      ['B', 'أَدْرُسُ فِي مَدْرَسَةٍ ثَانَوِيَّةٍ كَبِيرَةٍ قَرِيبَةٍ مِنْ بَيْتِي، وَفِيهَا مَكْتَبَةٌ هَادِئَةٌ.', 'I study at a large secondary school near my house, and it has a quiet library.'],
    ],
  },
  writing: {
    prompt: 'Website task “My school and school life”: an email or an article/blog for a young Arabic-speaking reader — three organised paragraphs (school and a facility · subjects and timetable · rules, school day and opinion), 80–100 Arabic words.',
    checklist: ['One format, used consistently (email OR article).', '¶1 school + facility · ¶2 subjects + timetable · ¶3 rules + opinion.', 'Reasons: لِأَنَّهُ / لِأَنَّهَا / لِأَنَّنِي.', 'يَجِبُ أَنْ … وَلَا يَجُوزُ أَنْ …'],
    model: `عَزِيزَتِي سَلْمَى، ${P1} ${P2} ${P3} مَعَ تَحِيَّاتِي، مَرْيَمُ`,
  },
  differentiation: {
    core: 'Three paragraphs with the frames; at least 70 words.',
    develop: '80–100 words with varied openings, reasons and connectors.',
    stretch: 'Add a contrast (wa-lākin / ammā … fa-) and a concluding opinion.',
  },
  mistakes: [
    { wrong: 'العُلُومُ مُفِيدٌ.', right: 'العُلُومُ مُفِيدَةٌ.', why: 'Science takes the feminine pattern.' },
    { wrong: 'يَجِبُ نَحْضُرُ مُبَكِّرًا.', right: 'يَجِبُ أَنْ نَحْضُرَ مُبَكِّرًا.', why: 'yajibu needs an + the verb.' },
    { wrong: 'عَزِيزِي سَلْمَى،', right: 'عَزِيزَتِي سَلْمَى،', why: 'A female reader: ‘azīzatī.' },
  ],
  listening: {
    title: 'Huda plans her school article',
    script: 'سَأَكْتُبُ مَقَالًا قَصِيرًا عَنْ مَدْرَسَتِي لِمَجَلَّةِ الشَّبَابِ. سَأَضَعُ عُنْوَانًا وَاضِحًا: «يَوْمِي فِي المَدْرَسَةِ». فِي الفِقْرَةِ الأُولَى سَأَصِفُ المَدْرَسَةَ؛ هِيَ كَبِيرَةٌ وَحَدِيثَةٌ وَفِيهَا مَكْتَبَةٌ وَمَخْتَبَرٌ. فِي الفِقْرَةِ الثَّانِيَةِ سَأَذْكُرُ مَوَادِّي، وَمَادَّتِي المُفَضَّلَةُ هِيَ الرِّيَاضِيَّاتُ لِأَنَّهَا مُفِيدَةٌ. وَفِي الفِقْرَةِ الثَّالِثَةِ سَأَكْتُبُ قَاعِدَتَيْنِ: يَجِبُ أَنْ نَحْضُرَ فِي المَوْعِدِ، وَلَا يَجُوزُ أَنْ نَتَكَلَّمَ أَثْنَاءَ الشَّرْحِ. أَخِيرًا، سَأَقُولُ إِنَّنِي أُحِبُّ مَدْرَسَتِي لِأَنَّ المُعَلِّمِينَ مُشَجِّعُونَ.',
    questions: bank(9, 'listening', [0, 3, 4, 7, 8]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 9,
    source: 'Website sections used: the eight-question F4 retrieval bridge and the three quality questions, email vs article/blog formats (16 terms, 12 questions), three purposeful paragraphs + task-coverage checklist (14), the F4 language vault (14), the 83-word model email (12), the error-repair workshop (12), plan before you draft, the School Writer Mission (14), Huda plans her article (listening, 10), email vs article openings (reading, 12), oral paragraph rehearsal (5 prompts), the 80–100-word first version, the /10 review (task completion 3 · range 3 · accuracy 4) and the 16-question checkpoint.',
    support: `• This lesson introduces NO new topic: it teaches students to select and connect the whole F4 unit (school, subjects, timetable, reasons, rules, school day) in one text.
• Core: the three-paragraph frame + at least 70 words. Develop: 80–100 words, varied openings and reasons. Stretch: a contrast and a strong concluding opinion.
• Format decision (website): an email speaks to a named reader (greeting, closing, signature); an article/blog addresses a wider audience (title, introduction, concluding opinion — no greeting or signature). Never mix them.
• Real or invented schools are accepted; no names of real staff or pupils are needed.
• Multi-session: plan + draft today; the /10 review and final version can be the start of the next lesson.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Email or article, three purposeful paragraphs, the 83-word model.', wedo: 'Writer mission, listen to Huda’s plan, compare two openings.', next: 'F4-L10' }),
  F.doNow({
    questions: [
      q('What does مَقَالٌ mean?', ['an article', 'an email', 'a paragraph'], 'Prepared at home (F4-L08).'),
      q('What does مَرَافِقُ mean?', ['facilities', 'subjects', 'rules'], 'Prepared at home (F4-L08).'),
      ...bank(9, 'retrieval', [0, 2, 5]),
    ],
    keyIdea: { text: 'Three quality questions: Did I answer every point? Did I show a range? Is the Arabic accurate?', ar: 'إِتْمَامُ المَهَمَّةِ · التَّنَوُّعُ · الدِّقَّةُ' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F4-L08. Questions 3–5 are the website “F4 retrieval bridge” (feminine agreement, timetable sentence, prohibition).',
  }),
  F.objectivesSlide([
    'Recognise the features of an email and an article/blog.',
    'Plan a three-paragraph school response.',
    'Use subjects, timetable, rules, opinions and school-day language.',
    'Write 80–100 connected words, then review and improve.',
  ], {
    core: ['I can plan three paragraphs.', 'I can write at least 70 words.'],
    develop: ['I can keep one format consistent.', 'I can vary openings and reasons.'],
    stretch: ['I can add a contrast.', 'I can improve my draft with evidence.'],
  }, 2, 'Website “By the end” (left) and the lesson routes (right).'),
  F.keywordsSlide({
    text: 'Format words, paragraph words and the writing process. Core: email, article, paragraph, greeting, conclusion.',
    groups: [
      { head: 'GROUP 1', name: 'Email vs article · 8' },
      { head: 'GROUP 2', name: 'Paragraph language · 8' },
      { head: 'GROUP 3', name: 'The whole F4 vault' },
    ],
    bridge: [
      { ar: 'مَقَالٌ', urdu: 'مقالہ', tr: 'maqāl', en: 'article' },
      { ar: 'عُنْوَانٌ', urdu: 'عنوان', tr: '‘unwān', en: 'title' },
      { ar: 'مُقَدِّمَةٌ', urdu: 'مقدمہ', tr: 'muqaddima', en: 'introduction' },
      { ar: 'خَاتِمَةٌ', urdu: 'خاتمہ', tr: 'khātima', en: 'conclusion' },
      { ar: 'تَحِيَّةٌ', urdu: 'تحیہ', tr: 'taḥiyya', en: 'greeting' },
    ],
    notes: 'URDU BRIDGE: مقالہ، عنوان، مقدمہ، خاتمہ are shared words — Urdu speakers already know the language of essay structure.',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1–2 · formats and paragraphs (website)', title: 'Email, article, paragraph …', ar: 'صِيَغُ الكِتَابَةِ',
    items: [
      { n: 1, ar: 'رِسَالَةٌ إِلِكْتُرُونِيَّةٌ', en: 'email', tr: 'ri-sā-la i-lik-trū-niy-ya', core: true, tag: 'named reader' },
      { n: 2, ar: 'مَقَالٌ / مُدَوَّنَةٌ', en: 'article / blog', tr: 'ma-qāl / mu-daw-wa-na', core: true, tag: 'wider audience' },
      { n: 3, ar: 'عُنْوَانٌ', en: 'title', tr: '‘un-wān', core: true, tag: 'article' },
      { n: 4, ar: 'تَحِيَّةٌ · تَوْقِيعٌ', en: 'greeting · signature', tr: 'ta-ḥiy-ya · taw-qī‘', core: true, tag: 'email' },
      { n: 5, ar: 'مُقَدِّمَةٌ · خَاتِمَةٌ', en: 'introduction · conclusion', tr: 'mu-qad-di-ma · khā-ti-ma', tag: 'both' },
      { n: 6, ar: 'جُمْلَةٌ مِحْوَرِيَّةٌ', en: 'topic sentence', tr: 'jum-la miḥ-wa-riy-ya', tag: 'paragraph' },
    ],
    notes: 'FORMAT VOCABULARY (website, 16). Also: فِقْرَةٌ (paragraph), تَطْوِيرُ الفِكْرَةِ (development), خَاتِمَةُ رَأْيٍ (concluding opinion), مُسَوَّدَةٌ (draft), مُرَاجَعَةٌ (review), تَصْحِيحٌ (correction), تَحْسِينٌ (improvement), عَدَدُ الكَلِمَاتِ (word count). Email frames: عَزِيزِي … / عَزِيزَتِي … · أَكْتُبُ إِلَيْكَ / إِلَيْكِ عَنْ … · مَعَ تَحِيَّاتِي. Article frames: فِي هٰذَا المَقَالِ … · فِي الخِتَامِ …',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · three purposeful paragraphs (website)', title: 'One paragraph, one job', ar: 'ثَلَاثُ فِقَرٍ هَادِفَةٍ',
    cols: [{ label: 'Paragraph', w: 2.6 }, { label: 'Its job', w: 3.8 }, { label: 'Starter', w: 5.93, size: 22 }],
    rows: [
      { core: true, cells: ['1 · School', 'type, size, location, rooms, facilities', { ar: 'أَدْرُسُ فِي مَدْرَسَةٍ … وَفِيهَا …' }] },
      { core: true, cells: ['2 · Subjects', 'subjects, favourite + reason, day and time', { ar: 'مَادَّتِي المُفَضَّلَةُ … لِأَنَّهَا …' }] },
      { core: true, cells: ['3 · Rules + opinion', 'an obligation, a prohibition, routine, conclusion', { ar: 'يَجِبُ أَنْ … وَلَا يَجُوزُ أَنْ … فِي رَأْيِي …' }] },
      { cells: ['Email frame', 'named greeting · closing · signature', { ar: 'عَزِيزِي عُمَرُ، … مَعَ تَحِيَّاتِي، …' }] },
      { cells: ['Article frame', 'title · introduction · concluding opinion', { ar: 'فِي هٰذَا المَقَالِ سَأَصِفُ مَدْرَسَتِي …' }] },
    ],
    ltr: true,
    foot: 'Website: one clear job per paragraph reduces repetition and makes task completion visible.',
    notes: `GRAMMAR PART 1 — website sections 2 “Choose the right writing format” and 3 “Build three purposeful paragraphs”.
Task-coverage checklist (website): describe your school and one facility · name subjects and give a favourite with a reason · one day or timetable detail · one rule and one prohibition · a personal opinion and conclusion.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · repair common writing errors (website)', title: 'Find the decision behind the error', ar: 'صَحِّحْ أَخْطَاءَ الكِتَابَةِ',
    cards: [
      { chip: 'AGREEMENT', color: 'B83280', head: 'مَدْرَسَتِي كَبِيرَةٌ', big: 'مَدْرَسَةٌ حَدِيثَةٌ وَمُنَظَّمَةٌ', en: 'a modern, organised school', clue: 'School (f.) → every adjective -a.' },
      { chip: 'REASON PRONOUN', color: '1D5FBF', head: 'لِأَنَّهَا', big: 'أُحِبُّ العُلُومَ لِأَنَّهَا مُمْتِعَةٌ.', en: 'I like science because it is enjoyable.', clue: 'Science → -hā.' },
      { chip: 'RULE', color: '1E6B52', head: 'يَجِبُ أَنْ', big: 'يَجِبُ أَنْ نَحْضُرَ مُبَكِّرًا.', en: 'We must arrive early.', clue: 'Never drop an.' },
    ],
    error: { text: 'Website: use one format consistently — never an article title + a personal signature.', pairs: [['عَزِيزَتِي سَلْمَى، … مَعَ تَحِيَّاتِي، مَرْيَمُ', 'فِي هٰذَا المَقَالِ … مَعَ تَحِيَّاتِي، مَرْيَمُ']] },
    notes: `GRAMMAR PART 2 — website section 6 “Repair common writing errors”: accuracy improves when you identify the decision behind an error — gender, pronoun, verb form, rule structure or format.
Language vault (website): rooms and facilities (فَصْلٌ، مَكْتَبَةٌ، مَخْتَبَرُ العُلُومِ، مَعْمَلُ الحَاسُوبِ، مَلْعَبٌ، صَالَةٌ رِيَاضِيَّةٌ، مَقْصَفٌ، مَكْتَبُ المُدِيرِ، سَاحَةٌ، مَسْرَحٌ), subjects, timetable, opinions, rules, school-day sequence, email and article frames, connectors (أَمَّا … فَـ، لِذَلِكَ، مَعَ ذَلِكَ).`,
  },
  F.quickCheck([...bank(9, 'formats', [3, 10]), ...bank(9, 'architecture', [4]), q('You mean “must NOT”. Repair this sentence:', ['لَا يَجُوزُ أَنْ نَسْتَعْمِلَ الهَوَاتِفَ.', 'يَجِبُ أَنْ نَسْتَعْمِلَ الهَوَاتِفَ.', 'لَا نَسْتَعْمِلُ الهَوَاتِفَ أَنْ.'], 'Lā yajibu = not necessary; must not = lā yajūzu.', { ar: 'لَا يَجِبُ أَنْ نَسْتَعْمِلَ الهَوَاتِفَ.', arBig: true })], 'website format check questions 4 and 11, paragraph-architecture question 5 and repair question 5.'),
  {
    type: 'glossed', stage: 'ido', min: 4, eyebrow: 'I do · analyse the website model email (83 words)', title: 'To: Salma · Subject: My school', ar: 'رِسَالَةٌ نَمُوذَجِيَّةٌ',
    lines: [
      ['عَزِيزَتِي سَلْمَى،', 'FORMAT · named greeting (female reader)'],
      [P1, '¶1 · school type, size, location + three facilities'],
      [P2, '¶2 · subjects · favourite + REASON · timetable'],
      [P3, '¶3 · sequence · RULE + prohibition · OPINION + reason'],
      ['مَعَ تَحِيَّاتِي، مَرْيَمُ', 'FORMAT · closing + signature'],
    ],
    notes: 'I DO (4 min) — the website model email. Website annotation categories: FORMAT · REASON · CONNECTOR · RULE · OPINION. Read once for meaning, then again to find each category (students call them out). Point out agreement: مَدْرَسَةٍ ثَانَوِيَّةٍ كَبِيرَةٍ وَمُنَظَّمَةٍ · مَكْتَبَةٌ هَادِئَةٌ · مَخْتَبَرُ عُلُومٍ حَدِيثٌ.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website “School Writer Mission”', title: 'Complete the writer mission', ar: 'مَهَمَّةُ كَاتِبِ المَدْرَسَةِ',
    seed: 20,
    questions: [rounds[1], rounds[3], rounds[7], rounds[9], rounds[12]],
    side: { kind: 'core', label: 'CORE', text: 'email → greeting + signature\narticle → title + introduction\n¶1 school · ¶2 subjects · ¶3 rules' },
    answerSlide: { min: 0, eyebrow: 'We do · Mission answers', title: 'Mission: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 14 School Writer rounds (article feature, paragraph 2, reason, prohibition, agreement repair). The other 9 are homework.',
    answerNotes: 'Ask: which quality question does this round test — task, range or accuracy?',
  },
  F.repairSlide(site, ['Science: which ending?', 'What is missing after yajibu?', 'A female reader: which greeting?']),
  F.listening(site, {
    coreTip: 'Listen twice.\nThree boxes: paragraph 1 · paragraph 2 · paragraph 3.',
    routes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5.',
    gloss: [
      ['سَأَكْتُبُ مَقَالًا قَصِيرًا عَنْ مَدْرَسَتِي لِمَجَلَّةِ الشَّبَابِ. سَأَضَعُ عُنْوَانًا وَاضِحًا: «يَوْمِي فِي المَدْرَسَةِ».', 'I will write a short article about my school for the youth magazine, with a clear title: “My day at school”.'],
      ['فِي الفِقْرَةِ الأُولَى سَأَصِفُ المَدْرَسَةَ؛ هِيَ كَبِيرَةٌ وَحَدِيثَةٌ وَفِيهَا مَكْتَبَةٌ وَمَخْتَبَرٌ.', 'In paragraph 1 I will describe the school: big and modern, with a library and a lab.'],
      ['فِي الفِقْرَةِ الثَّانِيَةِ سَأَذْكُرُ مَوَادِّي، وَمَادَّتِي المُفَضَّلَةُ هِيَ الرِّيَاضِيَّاتُ لِأَنَّهَا مُفِيدَةٌ.', 'In paragraph 2 I will mention my subjects; my favourite is maths because it is useful.'],
      ['وَفِي الفِقْرَةِ الثَّالِثَةِ سَأَكْتُبُ قَاعِدَتَيْنِ: يَجِبُ أَنْ نَحْضُرَ فِي المَوْعِدِ، وَلَا يَجُوزُ أَنْ نَتَكَلَّمَ أَثْنَاءَ الشَّرْحِ.', 'In paragraph 3 I will write two rules: we must arrive on time, and we must not talk during the explanation.'],
      ['أَخِيرًا، سَأَقُولُ إِنَّنِي أُحِبُّ مَدْرَسَتِي لِأَنَّ المُعَلِّمِينَ مُشَجِّعُونَ.', 'Finally, I will say that I love my school because the teachers are encouraging.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · email vs article openings (website)', title: 'Which one is the email?', ar: 'بِدَايَةُ رِسَالَةٍ وَبِدَايَةُ مَقَالٍ',
    lines: [
      ['عَزِيزِي عُمَرُ،', 'Text A · greeting to one named reader'],
      ['أَهْلًا وَسَهْلًا! أَكْتُبُ إِلَيْكَ عَنْ مَدْرَسَتِي الجَدِيدَةِ.', 'A · I am writing to you about my new school'],
      ['هِيَ مَدْرَسَةٌ صَغِيرَةٌ وَلَكِنَّهَا مُنَظَّمَةٌ، وَفِيهَا مَكْتَبَةٌ جَمِيلَةٌ وَمَلْعَبٌ كَبِيرٌ…', 'A · small but organised · library + playground'],
      ['مَدْرَسَتِي فِي يَوْمٍ عَادِيٍّ', 'Text B · a TITLE'],
      ['تَلْعَبُ المَدْرَسَةُ دَوْرًا مُهِمًّا فِي حَيَاةِ الطَّالِبِ. فِي هٰذَا المَقَالِ سَأَصِفُ مَدْرَسَتِي وَمَوَادِّي وَبَعْضَ القَوَاعِدِ الَّتِي نَتَّبِعُهَا كُلَّ يَوْمٍ…', 'B · general introduction for a wide audience'],
    ],
    notes: 'TEXTS A and B (website openings, complete). Both describe school life but with a different relationship to the reader: A speaks directly to Omar; B addresses the public (suitable for a school website).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading comparison questions (website)', title: 'Email or article?', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 6,
    questions: bank(9, 'reading', [2, 3, 4, 7, 10]),
    side: { kind: 'info', head: 'EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Greeting → email.\nTitle + “in this article” → article.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading comparison questions 3, 4, 5, 8 and 11. The other 7 are homework.',
    answerNotes: 'A student reads aloud the evidence phrase (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'صِفْ مَدْرَسَتَكَ: النَّوْعُ، الحَجْمُ، مِرْفَقَانِ.' },
      { route: 'develop', ar: 'مَا مَوَادُّكَ؟ مَا مَادَّتُكَ المُفَضَّلَةُ؟ وَلِمَاذَا؟' },
      { route: 'develop', ar: 'قُلْ قَاعِدَةً وَمَمْنُوعًا فِي مَدْرَسَتِكَ.' },
      { route: 'stretch', ar: 'مَا رَأْيُكَ فِي حَيَاتِكَ المَدْرَسِيَّةِ؟ وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَدْرُسُ فِي مَدْرَسَةٍ ______ ، وَفِيهَا ______ .' },
      { route: 'develop', ar: 'مَادَّتِي المُفَضَّلَةُ هِيَ ______ لِأَنَّهَا ______ .' },
      { route: 'develop', ar: 'يَجِبُ أَنْ ______ ، وَلَا يَجُوزُ أَنْ ______ .' },
      { route: 'stretch', ar: 'فِي رَأْيِي، ______ لِأَنَّنِي ______ .' },
    ],
    modelEn: ['Describe your school.', 'I study at a large secondary school near my house, and it has a quiet library.'],
    notes: `WEBSITE ORAL REHEARSAL (60-second timer per paragraph) — rehearsal helps you hear missing details, repeated openings and unclear order before drafting. Prompts (website):
${prompts.map((r) => `• ${r.title}: ${r.detail}`).join('\n')}
Website targets: answered the paragraph purpose · a connector · a precise detail · accurate agreement or verb forms.`,
  }),
  F.routesSlide(site, {
    core: { amount: '70 words', how: 'Three paragraphs with the starters; one format.' },
    develop: { amount: '80–100 words', how: 'Varied openings, two reasons, a rule and a prohibition.' },
    stretch: { amount: '100 words', how: 'Add a contrast and a strong concluding opinion.' },
  }),
  F.framesSlide({
    core: [
      { en: 'Dear Omar, / Dear Salma,', ar: 'عَزِيزِي عُمَرُ، / عَزِيزَتِي سَلْمَى،' },
      { en: 'I study at a large school near my house.', ar: 'أَدْرُسُ فِي مَدْرَسَةٍ كَبِيرَةٍ قَرِيبَةٍ مِنْ بَيْتِي.' },
      { en: 'It has a quiet library.', ar: 'فِيهَا مَكْتَبَةٌ هَادِئَةٌ.' },
      { en: 'My favourite subject is science because it is useful.', ar: 'مَادَّتِي المُفَضَّلَةُ هِيَ العُلُومُ لِأَنَّهَا مُفِيدَةٌ.' },
      { en: 'Best wishes, (name)', ar: 'مَعَ تَحِيَّاتِي، ______' },
    ],
    develop: [
      { en: 'In this article I will describe my school.', ar: 'فِي هٰذَا المَقَالِ سَأَصِفُ مَدْرَسَتِي.' },
      { en: 'On Monday science begins at nine.', ar: 'يَوْمَ الاِثْنَيْنِ تَبْدَأُ حِصَّةُ العُلُومِ عِنْدَ السَّاعَةِ التَّاسِعَةِ.' },
      { en: 'We must arrive on time.', ar: 'يَجِبُ أَنْ نَحْضُرَ فِي المَوْعِدِ.' },
      { en: 'We must not use phones in class.', ar: 'لَا يَجُوزُ أَنْ نَسْتَعْمِلَ الهَوَاتِفَ فِي الفَصْلِ.' },
      { en: 'In conclusion, …', ar: 'فِي الخِتَامِ، …' },
    ],
    bank: ['عَزِيزِي', 'عَزِيزَتِي', 'فِي هٰذَا المَقَالِ', 'وَفِيهَا', 'لِأَنَّهَا', 'لِأَنَّنِي', 'يَجِبُ أَنْ', 'لَا يَجُوزُ أَنْ', 'ثُمَّ', 'وَلَكِنْ', 'فِي رَأْيِي', 'مَعَ تَحِيَّاتِي'],
  }),
  F.modelSlide(site,
    'Dear Salma, Welcome! I study at a large, organised secondary school near my house. My school has spacious classrooms, a quiet library and a modern science lab. I study Arabic, English, maths and science. My favourite subject is science because it is useful and interesting. On Monday the science lesson begins at nine. I arrive at school in the morning, then I enter the classroom, and after break I go to the library. We must arrive on time, and we must not use phones in class. In my opinion school life is enjoyable because I learn new things and spend time with my friends. Best wishes, Maryam',
    ['format', 'reasons', 'rules', 'opinion'],
    'The website 83-word model email. Stretch: rewrite paragraph 1 as the opening of an ARTICLE (title + فِي هٰذَا المَقَالِ …).'),
  F.selfCheckSlide([
    { route: 'core', text: 'Task: school, subjects, rules and opinion all included.' },
    { route: 'core', text: 'Three paragraphs, one job each.' },
    { route: 'develop', text: 'Range: varied openings, reasons and connectors.' },
    { route: 'develop', text: 'Accuracy: agreement, li’annahā, yajibu an.' },
    { route: 'stretch', text: 'One format used consistently from start to end.' },
  ]),
  F.exitTicket(bank(9, 'finalCheck', [0, 5, 9]), 16),
  F.prepSlide({
    ...NEXT,
    words: [['مُحَادَثَةٌ', 'a conversation', 'pl. مُحَادَثَاتٌ'], ['طَالِبٌ جَدِيدٌ', 'a new student', 'f. طَالِبَةٌ جَدِيدَةٌ'], ['آسِفٌ، لَمْ أَفْهَمْ.', 'Sorry, I didn’t understand.', 'f. آسِفَةٌ'], ['هَلْ يُمْكِنُ أَنْ تُعِيدَ؟', 'Could you repeat?', '—'], ['تَمْثِيلُ دَوْرٍ', 'a role play', '—']],
    questionEn: 'Imagine you are new at a school. Write one question to ask the teacher.',
    questionAr: 'سُؤَالٌ لِلْمُعَلِّمِ',
    homework: {
      core: 'Website F4-L09: the School Writer Mission (14) and the paragraph-architecture check.',
      develop: 'Finish your 80–100-word first version; count your connectors.',
      stretch: 'Complete the website /10 review and write the improved final version.',
    },
    wordsSource: 'The five phrases come from the website F4-L10 conversation toolkit.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: choose one format · one job per paragraph · task, range, accuracy.' }),
];

module.exports = { meta, slides };
