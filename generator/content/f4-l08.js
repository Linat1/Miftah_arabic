'use strict';
/*
 * F4-L08 · Reading School Texts and Timetables
 * Website: Pathways › Foundation › F4 › Lesson 8. The F4 reading bridge and the central principle (you do not need
 * every word), eight school text types (16), the five-step reading route + reading language vault + purpose verbs (12),
 * the evidence finder (question word → evidence type → answer frame; 14), the authentic-style timetable (day → time →
 * subject; 14), the Reading Detective Mission (14), the reading-project announcement (listening), the reading workshop
 * (newsletter · unvowelled notice · message; 18), speaking like a reading detective, the 50–70-word notice and the
 * 16-question checkpoint.
 */
const F = require('./f4-common');
const { q, bank, banks } = F;

const meta = F.meta({
  n: 8, fileTitle: 'Reading_School_Texts_and_Timetables', chip: 'Reading School Texts',
  title: 'Reading School Texts and Timetables', arabic: 'القِرَاءَةُ — نُصُوصٌ وَجَدَاوِلُ مَدْرَسِيَّةٌ',
  focus: 'Read like a detective, not a translator: recognise the text type, use the question word to predict the evidence, scan a timetable day → time → subject, and answer with exact evidence.',
  icon: 'FaMagnifyingGlass', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F4-L09', nextTitle: 'Extended Writing: My School', nextAr: 'الكِتَابَةُ المُطَوَّلَةُ — مَدْرَسَتِي' };
const AR = /[؀-ۿ]/;
const rounds = banks.l08.rounds.map((r) => F.w({ ...r, q: AR.test(r.prompt) ? r.prompt : `${r.title}: ${r.prompt}` }));
const prompts = banks.l08.prompts;
const T = (x) => ({ ar: x });

const site = {
  speaking: {
    context: 'Speak like a reading detective',
    model: [
      ['A', 'مَتَى يَبْدَأُ المَشْرُوعُ؟ كَيْفَ تَعْرِفُ؟', 'When does the project begin? How do you know?'],
      ['B', 'الإِجَابَةُ هِيَ يَوْمَ الأَرْبِعَاءِ، وَأَعْرِفُ ذَلِكَ لِأَنَّ النَّصَّ يَقُولُ «يَبْدَأُ يَوْمَ الأَرْبِعَاءِ».', 'The answer is Wednesday, and I know because the text says “it begins on Wednesday”.'],
    ],
  },
  writing: {
    prompt: 'Website writing task: a 50–70-word school notice whose layout and language make its purpose obvious — a concise heading, the audience, a date and time, a place, one required action, one reason or extra detail and at least one rule or instruction structure.',
    checklist: ['Heading: إِعْلَانٌ مُهِمٌّ …', 'Audience: لِطُلَّابِ الصَّفِّ السَّابِعِ', 'When + where: يَوْمَ … فِي السَّاعَةِ … فِي …', 'Action: يَجِبُ أَنْ … / لَا يَجُوزُ … + a reason.'],
    model: 'إِعْلَانٌ مُهِمٌّ لِطُلَّابِ الصَّفِّ السَّابِعِ: سَيُقَامُ مَعْرِضُ الكُتُبِ يَوْمَ الثُّلَاثَاءِ فِي السَّاعَةِ الثَّانِيَةِ فِي قَاعَةِ المَدْرَسَةِ. يَجِبُ عَلَى كُلِّ طَالِبٍ وَطَالِبَةٍ أَنْ يُحْضِرَ كِتَابًا وَاحِدًا لِلمُبَادَلَةِ. لَا يَجُوزُ إِحْضَارُ كُتُبٍ مُمَزَّقَةٍ. نُنَظِّمُ المَعْرِضَ لِأَنَّنَا نُرِيدُ تَشْجِيعَ القِرَاءَةِ بَيْنَ الطُّلَّابِ.',
  },
  differentiation: {
    core: 'Heading, audience, day and time, place and one action.',
    develop: '50–70 words with a rule structure and a reason.',
    stretch: 'Add a deadline, a contact person and an optional extra.',
  },
  mistakes: [
    { wrong: 'مَتَى يَبْدَأُ المَشْرُوعُ؟ — فِي المَكْتَبَةِ.', right: 'مَتَى يَبْدَأُ المَشْرُوعُ؟ — يَوْمَ الأَرْبِعَاءِ.', why: 'Matā asks WHEN: find a time or a day, not a place.' },
    { wrong: 'لِمَنْ الإِعْلَانُ؟ — يَوْمَ الثُّلَاثَاءِ.', right: 'لِمَنْ الإِعْلَانُ؟ — لِطُلَّابِ الصَّفِّ السَّابِعِ.', why: 'Li-man asks for the audience.' },
    { wrong: 'أَيْنَ يَجْتَمِعُونَ؟ — يَجْتَمِعُ طُلَّابُ الصَّفِّ السَّابِعِ فِي المَكْتَبَةِ يَوْمَ الأَحَدِ وَالثُّلَاثَاءِ.', right: 'أَيْنَ يَجْتَمِعُونَ؟ — فِي المَكْتَبَةِ.', why: 'Answer ONLY what is asked — concisely.' },
  ],
  listening: {
    title: 'The reading-project announcement',
    script: 'إِعْلَانٌ لِجَمِيعِ طُلَّابِ الصَّفِّ السَّابِعِ: يَبْدَأُ مَشْرُوعُ القِرَاءَةِ الجَدِيدُ يَوْمَ الأَرْبِعَاءِ فِي السَّاعَةِ الوَاحِدَةِ بَعْدَ الظُّهْرِ فِي مَكْتَبَةِ المَدْرَسَةِ. يَجِبُ عَلَى كُلِّ طَالِبٍ وَطَالِبَةٍ أَنْ يُحْضِرَ كِتَابًا قَصِيرًا بِاللُّغَةِ العَرَبِيَّةِ. سَيَقْرَأُ الطُّلَّابُ فِي مَجْمُوعَاتٍ، ثُمَّ يَكْتُبُونَ تَلْخِيصًا قَصِيرًا. المَشْرُوعُ لِلطُّلَّابِ فَقَطْ، وَلَكِنْ يَسْتَطِيعُ الآبَاءُ وَالأُمَّهَاتُ إِرْسَالَ اقْتِرَاحَاتٍ لِلكُتُبِ قَبْلَ يَوْمِ الثُّلَاثَاءِ.',
    questions: bank(8, 'listening', [0, 2, 4, 5, 9]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 8,
    source: 'Website sections used: the eight-question F4 reading bridge and the central principle, school text types (8, with the 16-question check), the five-step reading route, the reading language vault and purpose verbs (12), the evidence finder (14), the authentic-style timetable and the 14-question scan, the Reading Detective Mission (14), the reading-project announcement (listening, 10), the reading workshop — Text A newsletter, Text B unvowelled notice, Text C message (18), speaking like a reading detective (4 prompts), the 50–70-word school notice and the 16-question checkpoint.',
    support: `• A READING-LED lesson: the aim is strategy, not new topic vocabulary. Website central principle: لَا تَحْتَاجُ إِلَى فَهْمِ كُلِّ كَلِمَةٍ — you do not need to understand every word.
• Core: the five-step route + question words مَتَى / أَيْنَ / كَمْ + timetable scanning. Develop: purpose and audience, concise answers with evidence. Stretch: inference from context (e.g. اِسْتِعَارَةٌ = borrowing) and the unvowelled Text B.
• Text B is UNVOWELLED on the website (reading challenge). It is shown fully vowelled on the slide; Stretch reads the unvowelled version on the website.
• The timetable is fictional (website): school-week patterns vary by country and institution.
• No picture-match slide: the website game for this lesson repeats the F4-L01 subject cards.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Text types, the five-step reading route and question words.', wedo: 'Scan a timetable, detective mission, the announcement, three school texts.', next: 'F4-L09' }),
  F.doNow({
    questions: [
      q('What does إِعْلَانٌ mean?', ['an announcement / notice', 'a letter', 'a timetable'], 'Prepared at home (F4-L07).'),
      q('What does دَلِيلٌ mean?', ['evidence', 'a title', 'a text'], 'Prepared at home (F4-L07).'),
      ...bank(8, 'retrieval', [1, 3, 6]),
    ],
    keyIdea: { text: 'Read like a detective, not a translator: text type → question word → key word → evidence → answer only what is asked.', ar: 'لَا تَحْتَاجُ إِلَى فَهْمِ كُلِّ كَلِمَةٍ.' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F4-L07. Questions 3–5 are the website “F4 reading bridge” (9:30, must bring, how many periods?).',
  }),
  F.objectivesSlide([
    'Recognise at least eight common school text types.',
    'Use question words to predict the evidence I need.',
    'Scan a timetable accurately by day, time and subject.',
    'Identify purpose and audience, and answer with concise evidence.',
  ], {
    core: ['I can name the text type from its layout.', 'I can find a day or time in a timetable.'],
    develop: ['I can say who a text is for and why.', 'I can answer with evidence from the text.'],
    stretch: ['I can guess a new word from context.', 'I can read the unvowelled notice.'],
  }, 2, 'Website “By the end, I can…” (left) and the lesson routes (right).'),
  F.keywordsSlide({
    text: 'Text types, reading-strategy words and question words. Core: timetable, notice, letter, when, where, evidence.',
    groups: [
      { head: 'GROUP 1', name: 'School text types · 8' },
      { head: 'GROUP 2', name: 'Reading language · 16' },
      { head: 'GROUP 3', name: 'Question words → evidence' },
    ],
    bridge: [
      { ar: 'إِعْلَانٌ', urdu: 'اعلان', tr: 'i‘lān', en: 'announcement' },
      { ar: 'مَعْلُومَةٌ', urdu: 'معلومات', tr: 'ma‘lūma', en: 'information' },
      { ar: 'تَفْصِيلٌ', urdu: 'تفصیل', tr: 'tafṣīl', en: 'detail' },
      { ar: 'عُنْوَانٌ', urdu: 'عنوان', tr: '‘unwān', en: 'title / heading' },
      { ar: 'دَلِيلٌ', urdu: 'دلیل', tr: 'dalīl', en: 'evidence / proof' },
    ],
    notes: 'URDU BRIDGE: اعلان، معلومات، تفصیل، عنوان، دلیل، مقصد (≈ هَدَفٌ) are shared words — Urdu speakers already know most of the reading-strategy vocabulary.',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · school text types (website)', title: 'Timetable, notice, newsletter …', ar: 'أَنْوَاعُ النُّصُوصِ المَدْرَسِيَّةِ',
    items: [
      { n: 1, ar: 'جَدْوَلٌ دِرَاسِيٌّ', en: 'school timetable', tr: 'jad-wal di-rā-siyy', core: true, tag: 'rows · columns' },
      { n: 2, ar: 'إِعْلَانٌ', en: 'announcement / notice', tr: 'i‘-lān', core: true, tag: 'heading · date' },
      { n: 3, ar: 'نَشْرَةٌ مَدْرَسِيَّةٌ', en: 'school newsletter', tr: 'nash-ra mad-ra-siy-ya', core: true, tag: 'news paragraphs' },
      { n: 4, ar: 'رِسَالَةٌ', en: 'letter / message', tr: 'ri-sā-la', core: true, tag: 'greeting · closing' },
      { n: 5, ar: 'لَافِتَةٌ', en: 'sign', tr: 'lā-fi-ta', tag: 'very short · symbol' },
      { n: 6, ar: 'مَنْشُورٌ', en: 'circular / leaflet', tr: 'man-shūr', tag: 'short information' },
    ],
    notes: 'TEXT TYPES (website, 6 of 8). Also: قَوَاعِدُ مَدْرَسِيَّةٌ (school rules — a list of obligations and prohibitions) and وَاجِبٌ مَنْزِلِيٌّ (homework task — subject, instruction and deadline). Website: layout, headings, dates, tables, bullet points and greetings reveal what kind of text you are looking at.',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · the evidence finder (website)', title: 'The question word tells you what to find', ar: 'نِظَامُ العُثُورِ عَلَى الدَّلِيلِ',
    cols: [{ label: 'Question', w: 2.9, size: 24 }, { label: 'Search for', w: 3.2 }, { label: 'Answer frame', w: 6.23, size: 22 }],
    rows: [
      { core: true, cells: [T('مَتَى…؟'), 'a time or date', T('فِي السَّاعَةِ… / يَوْمَ…')] },
      { core: true, cells: [T('فِي أَيِّ يَوْمٍ…؟'), 'a particular day', T('فِي يَوْمِ…')] },
      { core: true, cells: [T('أَيْنَ…؟'), 'a place', T('فِي… / إِلَى…')] },
      { cells: [T('كَمْ حِصَّةً…؟'), 'a number', T('… حِصَصٍ')] },
      { cells: [T('لِمَنْ…؟'), 'the audience', T('لِلطُّلَّابِ / لِلْآبَاءِ وَالأُمَّهَاتِ')] },
      { cells: [T('لِمَاذَا…؟ · كَيْفَ تَعْرِفُ؟'), 'a reason · proof', T('لِأَنَّ… · لِأَنَّ النَّصَّ يَقُولُ…')] },
    ],
    foot: 'Five-step route: 1 identify the text type · 2 circle the question word · 3 scan for key words · 4 extract the evidence · 5 answer only what was asked.',
    notes: `GRAMMAR PART 1 — website sections 3 “Use the five-step reading route” and 4 “Build an evidence-finding system”.
Five steps (website, Arabic): ١ حَدِّدْ نَوْعَ النَّصِّ · ٢ ضَعْ دَائِرَةً حَوْلَ كَلِمَةِ السُّؤَالِ · ٣ ابْحَثْ عَنِ الكَلِمَاتِ المِفْتَاحِيَّةِ · ٤ اِسْتَخْرِجِ الدَّلِيلَ · ٥ أَجِبْ عَمَّا طَلَبَهُ السُّؤَالُ فَقَطْ.
Reading language vault (website): مَعْلُومَةٌ، تَفْصِيلٌ، عُنْوَانٌ، تَارِيخٌ، وَقْتٌ، مَكَانٌ، هَدَفُ النَّصِّ، الجُمْهُورُ المُسْتَهْدَفُ، السِّيَاقُ، دَلِيلٌ، الفِكْرَةُ الرَّئِيسِيَّةُ، كَلِمَةٌ مِفْتَاحِيَّةٌ، يَسْتَخْرِجُ، يُلَاحِظُ، يُقَارِنُ، يَفْهَمُ مِنَ السِّيَاقِ.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · purpose and audience (website)', title: 'Why was it written — and for whom?', ar: 'هَدَفُ النَّصِّ وَجُمْهُورُهُ',
    cards: [
      { chip: 'INFORM · ANNOUNCE', color: '1D5FBF', head: 'يُخْبِرُ · يُعْلِنُ', big: 'إِعْلَانٌ لِجَمِيعِ طُلَّابِ الصَّفِّ السَّابِعِ', en: 'A notice for all Year 7 students.', clue: 'Audience after li-.' },
      { chip: 'INSTRUCT · REMIND', color: 'C77700', head: 'يُوَجِّهُ · يُذَكِّرُ', big: 'لَا تَنْسَوْا إِحْضَارَ دَفْتَرِ التَّجَارِبِ.', en: 'Don’t forget to bring the experiment notebook.', clue: 'Commands, deadlines.' },
      { chip: 'CONTEXT · STRETCH', color: '6B4C9A', head: 'يَفْهَمُ مِنَ السِّيَاقِ', big: 'مَكْتَبَةٌ · كُتُبٌ · اِسْتِعَارَةٌ', en: 'library · books · borrowing?', clue: 'Clues around a new word.' },
    ],
    error: { text: 'Website: answer only what the question asks — concisely.', pairs: [['أَيْنَ؟ — فِي المَكْتَبَةِ.', 'أَيْنَ؟ — يَوْمَ الأَحَدِ فِي السَّاعَةِ الثَّانِيَةِ.']] },
    notes: `GRAMMAR PART 2 — website “Purpose language”: inform يُخْبِرُ · لِلإِخْبَارِ · announce يُعْلِنُ · لِلإِعْلَانِ · instruct يُوَجِّهُ · لِلتَّوْجِيهِ · remind يُذَكِّرُ · لِلتَّذْكِيرِ · describe يَصِفُ · لِلوَصْفِ · request يَطْلُبُ · لِلطَّلَبِ.
Inference (website): a sentence containing “library”, “books” and اِسْتِعَارَة → most likely “borrowing”.`,
  },
  F.quickCheck([...bank(8, 'types', [1, 4]), q('What kind of answer does this question need?', ['the audience', 'the time', 'the subject studied'], 'Li-man asks for whom.', { ar: 'لِمَنْ هٰذَا الإِعْلَانُ؟', arBig: true }), q('What kind of answer does this question need?', ['a reason', 'a place', 'a number'], 'Li-mādhā asks why.', { ar: 'لِمَاذَا تُغْلَقُ المَكْتَبَةُ؟', arBig: true })], 'website text-type check questions 2 and 5, and evidence finder questions 4–5.'),
  {
    type: 'formsTable', stage: 'ido', min: 3, eyebrow: 'I do · scan the website timetable with me · day → time → subject', title: 'Find the day column first', ar: 'اِقْرَأْ جَدْوَلًا مَدْرَسِيًّا',
    cols: [{ label: 'Time', w: 1.4, size: 16 }, { label: 'Sunday', w: 2.2, size: 16 }, { label: 'Monday', w: 2.2, size: 16 }, { label: 'Tuesday', w: 2.2, size: 16 }, { label: 'Wednesday', w: 2.2, size: 16 }, { label: 'Thursday', w: 2.13, size: 16 }],
    ltr: true,
    rows: [
      { cells: ['8:30', T('العَرَبِيَّةُ'), T('الإِنْجِلِيزِيَّةُ'), T('الجُغْرَافِيَا'), T('العُلُومُ'), T('الرِّيَاضِيَّاتُ')] },
      { cells: ['9:30', T('الرِّيَاضِيَّاتُ'), T('التَّارِيخُ'), T('عِلْمُ الحَاسُوبِ'), T('الفَنُّ'), T('العَرَبِيَّةُ')] },
      { cells: ['10:30', T('العُلُومُ'), T('العَرَبِيَّةُ'), T('التَّرْبِيَةُ البَدَنِيَّةُ'), T('التَّرْبِيَةُ الدِّينِيَّةُ'), T('المُوسِيقَى')] },
      { cells: ['11:00', T('الاِسْتِرَاحَةُ'), T('الاِسْتِرَاحَةُ'), T('الاِسْتِرَاحَةُ'), T('الاِسْتِرَاحَةُ'), T('الاِسْتِرَاحَةُ')] },
      { cells: ['11:30', T('التَّارِيخُ'), T('العُلُومُ'), T('الإِنْجِلِيزِيَّةُ'), T('الرِّيَاضِيَّاتُ'), T('الجُغْرَافِيَا')] },
      { cells: ['12:30', T('الفَنُّ'), T('المُوسِيقَى'), T('العَرَبِيَّةُ'), T('عِلْمُ الحَاسُوبِ'), T('التَّرْبِيَةُ البَدَنِيَّةُ')] },
    ],
    foot: 'Think aloud: “Tuesday column → 9:30 row → computer science. The answer: ‘ilm al-ḥāsūb.”',
    notes: `I DO (3 min) — the website fictional timetable (العَرَبِيَّةُ / الإِنْجِلِيزِيَّةُ = اللُّغَةُ العَرَبِيَّةُ / الإِنْجِلِيزِيَّةُ). Model two website scan questions aloud:
• What subject is on Tuesday at 9:30? → عِلْمُ الحَاسُوبِ
• Which day has history at 9:30? → الاِثْنَيْنُ
Website: locate the DAY column first and the TIME row second — this prevents choosing the right time from the wrong day.`,
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · timetable scan (website)', title: 'Scan the timetable', ar: 'مَسْحُ الجَدْوَلِ',
    seed: 8,
    questions: bank(8, 'timetable', [1, 4, 6, 9, 10]),
    side: { kind: 'info', head: 'DAY → TIME', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: '1 find the day column\n2 find the time row\n3 read the cell\nFlick back to the timetable.' },
    answerSlide: { min: 0, eyebrow: 'We do · timetable answers', title: 'Timetable: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website timetable scan questions 2, 5, 7, 10 and 11. Keep the previous slide handy (or paste the timetable into the chat).',
    answerNotes: 'A student explains the scan order for one answer.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website “Reading Detective Mission”', title: 'Complete the detective mission', ar: 'مُهِمَّةُ مُحَقِّقِ القِرَاءَةِ',
    seed: 19,
    questions: [rounds[2], rounds[5], rounds[6], rounds[9], rounds[11]],
    side: { kind: 'core', label: 'CORE', text: 'Use the clue, not guesswork.\nType → question word → evidence.' },
    answerSlide: { min: 0, eyebrow: 'We do · Mission answers', title: 'Mission: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 14 Reading Detective rounds (greeting clue, audience, purpose, evidence, concise answer). The other 9 are homework.',
    answerNotes: 'Ask: which clue proved it?',
  },
  F.repairSlide(site, ['Matā: time or place?', 'Li-man: what must you find?', 'Is the answer concise?']),
  F.listening(site, {
    coreTip: 'Listen twice.\nSix boxes: purpose · date · time · place · audience · action.',
    routes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5.',
    gloss: [
      ['إِعْلَانٌ لِجَمِيعِ طُلَّابِ الصَّفِّ السَّابِعِ:', 'An announcement for all Year 7 students:'],
      ['يَبْدَأُ مَشْرُوعُ القِرَاءَةِ الجَدِيدُ يَوْمَ الأَرْبِعَاءِ فِي السَّاعَةِ الوَاحِدَةِ بَعْدَ الظُّهْرِ فِي مَكْتَبَةِ المَدْرَسَةِ.', 'The new reading project begins on Wednesday at 1 pm in the school library.'],
      ['يَجِبُ عَلَى كُلِّ طَالِبٍ وَطَالِبَةٍ أَنْ يُحْضِرَ كِتَابًا قَصِيرًا بِاللُّغَةِ العَرَبِيَّةِ.', 'Every student must bring a short book in Arabic.'],
      ['سَيَقْرَأُ الطُّلَّابُ فِي مَجْمُوعَاتٍ، ثُمَّ يَكْتُبُونَ تَلْخِيصًا قَصِيرًا.', 'Students will read in groups, then write a short summary.'],
      ['المَشْرُوعُ لِلطُّلَّابِ فَقَطْ، وَلَكِنْ يَسْتَطِيعُ الآبَاءُ وَالأُمَّهَاتُ إِرْسَالَ اقْتِرَاحَاتٍ لِلكُتُبِ قَبْلَ يَوْمِ الثُّلَاثَاءِ.', 'The project is for students only, but parents can send book suggestions before Tuesday.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · Text A · school newsletter (website)', title: 'Reading week', ar: 'نَشْرَةُ المَدْرَسَةِ — أُسْبُوعُ القِرَاءَةِ',
    lines: [
      ['فِي هٰذَا الأُسْبُوعِ تَبْدَأُ مَدْرَسَتُنَا مَشْرُوعًا جَدِيدًا عَنِ القِرَاءَةِ.', 'Main idea: a new reading project'],
      ['يَجْتَمِعُ طُلَّابُ الصَّفِّ السَّابِعِ فِي المَكْتَبَةِ يَوْمَ الأَحَدِ وَالثُّلَاثَاءِ فِي السَّاعَةِ الثَّانِيَةِ.', 'Year 7 · library · Sun + Tue · 2:00'],
      ['يَقْرَأُ كُلُّ طَالِبٍ قِصَّةً قَصِيرَةً، ثُمَّ يُقَدِّمُ فِكْرَتَهُ الرَّئِيسِيَّةَ لِمَجْمُوعَتِهِ. نَرْجُو مِنَ الآبَاءِ وَالأُمَّهَاتِ مُسَاعَدَةَ أَبْنَائِهِمْ فِي اخْتِيَارِ كِتَابٍ مُنَاسِبٍ.', 'Present the main idea · parents: help choose a book'],
      ['وَيَسْتَطِيعُ الطُّلَّابُ أَيْضًا أَنْ يَسْتَعِيرُوا كِتَابَيْنِ مِنَ المَكْتَبَةِ لِمُدَّةِ أُسْبُوعَيْنِ.', 'Borrow two books for two weeks'],
      ['وَفِي يَوْمِ الخَمِيسِ سَيَشْتَرِكُونَ فِي مُسَابَقَةٍ قَصِيرَةٍ لِفَهْمِ المَقْرُوءِ، وَسَيَحْصُلُ الفَائِزُونَ عَلَى جَوَائِزَ. سَنَنْشُرُ أَفْضَلَ التَّلْخِيصَاتِ فِي نَشْرَةِ الشَّهْرِ القَادِمِ.', 'Thursday: a reading quiz with prizes · best summaries next month'],
    ],
    notes: 'TEXT A (website, partly vowelled — shown fully vowelled here). Purpose: to inform (students and parents). Stretch inference: يَسْتَعِيرُوا — library + books → “borrow”.',
  },
  {
    type: 'glossed', stage: 'wedo', flex: true, eyebrow: 'We do · reading · Text B notice (unvowelled on the website) + Text C message · FLEX / Stretch', title: 'A notice and a message', ar: 'إِعْلَانٌ وَرِسَالَةٌ',
    lines: [
      ['تُغْلَقُ مَكْتَبَةُ المَدْرَسَةِ يَوْمَ الخَمِيسِ بَعْدَ الحِصَّةِ الرَّابِعَةِ بِسَبَبِ اجْتِمَاعِ المُعَلِّمِينَ.', 'B · library closes Thu after P4 — teachers’ meeting'],
      ['يُرْجَى مِنَ الطُّلَّابِ إِعَادَةُ الكُتُبِ قَبْلَ السَّاعَةِ الثَّانِيَةَ عَشْرَةَ. يُمْكِنُ اسْتِعَارَةُ الكُتُبِ مَرَّةً أُخْرَى صَبَاحَ يَوْمِ الأَحَدِ.', 'B · return books before 12 · borrow again Sun morning'],
      ['لِلاِسْتِفْسَارِ تَحَدَّثُوا مَعَ أَمِينَةِ المَكْتَبَةِ.', 'B · questions: the librarian'],
      ['أَعِزَّائِي الطُّلَّابَ، لَا تَنْسَوْا إِحْضَارَ دَفْتَرِ التَّجَارِبِ وَمِسْطَرَةٍ يَوْمَ الاِثْنَيْنِ.', 'C · bring the experiment notebook + ruler on Mon'],
      ['سَنَعْمَلُ فِي المَخْتَبَرِ خِلَالَ الحِصَّةِ الثَّالِثَةِ، وَلِذَلِكَ يَجِبُ أَنْ تَصِلُوا فِي الوَقْتِ. شُكْرًا لَكُمْ.', 'C · lab in P3 · arrive on time'],
    ],
    notes: 'TEXT B is UNVOWELLED on the website (Stretch challenge) — vowelled here. TEXT C is a message from the science teacher (greeting + direct address = a letter / message). Compare purposes: B instructs / informs; C reminds.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading workshop questions (website)', title: 'Newsletter, notice or message?', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 3,
    questions: bank(8, 'reading', [2, 4, 6, 9, 13]),
    side: { kind: 'info', head: 'EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Which text? Then which\nquestion word? Then scan.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading workshop questions 3, 5, 7, 10 and 14 (Core: 3 and 5 on Text A). The other 13 are homework.',
    answerNotes: 'Students answer with the frame: أَعْرِفُ ذَلِكَ لِأَنَّ النَّصَّ يَقُولُ…',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'مَا نَوْعُ هٰذَا النَّصِّ؟ كَيْفَ تَعْرِفُ؟' },
      { route: 'develop', ar: 'مَتَى يَبْدَأُ المَشْرُوعُ؟ كَيْفَ تَعْرِفُ؟' },
      { route: 'develop', ar: 'لِمَنْ هٰذَا الإِعْلَانُ؟ وَمَا هَدَفُهُ؟' },
      { route: 'stretch', ar: 'مَا مَعْنَى «اِسْتِعَارَةٌ»؟ مَا الدَّلِيلُ فِي السِّيَاقِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'هٰذَا النَّصُّ ______ لِأَنَّ فِيهِ ______ .' },
      { route: 'develop', ar: 'الإِجَابَةُ هِيَ … وَأَعْرِفُ ذَلِكَ لِأَنَّ النَّصَّ يَقُولُ …' },
      { route: 'develop', ar: 'هٰذَا الإِعْلَانُ لِـ ______ ، وَهَدَفُهُ ______ .' },
      { route: 'stretch', ar: 'أُلَاحِظُ كَلِمَةَ … ، لِذَلِكَ أَفْهَمُ أَنَّ …' },
    ],
    modelEn: ['When does the project begin? How do you know?', 'The answer is Wednesday, and I know because the text says “it begins on Wednesday”.'],
    notes: `WEBSITE SPEAKING “Speak like a reading detective” (45-second timer) — explain not only the answer but how the text proves it. Prompts (website):
${prompts.map((r) => `• ${r.title}: ${r.detail}`).join('\n')}
Website checklist: name the text type · answer the exact question · cite evidence (لِأَنَّ النَّصَّ يَقُولُ…) · explain one inference.`,
  }),
  F.routesSlide(site, {
    core: { amount: 'notice · 5 parts', how: 'Heading, audience, day and time, place and one action.' },
    develop: { amount: '50–70 words', how: 'Add a rule structure (yajibu / lā yajūzu) and a reason.' },
    stretch: { amount: '70 words', how: 'Add a deadline, a contact person and an optional extra.' },
  }),
  F.framesSlide({
    core: [
      { en: 'Important announcement', ar: 'إِعْلَانٌ مُهِمٌّ' },
      { en: 'for Year 7 students', ar: 'لِطُلَّابِ الصَّفِّ السَّابِعِ' },
      { en: 'on Tuesday at two o’clock', ar: 'يَوْمَ الثُّلَاثَاءِ فِي السَّاعَةِ الثَّانِيَةِ' },
      { en: 'in the school hall', ar: 'فِي قَاعَةِ المَدْرَسَةِ' },
      { en: 'Every student must bring one book.', ar: 'يَجِبُ عَلَى كُلِّ طَالِبٍ أَنْ يُحْضِرَ كِتَابًا وَاحِدًا.' },
    ],
    develop: [
      { en: 'Bringing torn books is not allowed.', ar: 'لَا يَجُوزُ إِحْضَارُ كُتُبٍ مُمَزَّقَةٍ.' },
      { en: 'because we want to encourage reading', ar: 'لِأَنَّنَا نُرِيدُ تَشْجِيعَ القِرَاءَةِ' },
      { en: 'before Monday', ar: 'قَبْلَ يَوْمِ الاِثْنَيْنِ' },
      { en: 'For more information, speak to the librarian.', ar: 'لِمَزِيدٍ مِنَ المَعْلُومَاتِ تَحَدَّثُوا مَعَ أَمِينَةِ المَكْتَبَةِ.' },
      { en: 'The answer is … because the text says …', ar: 'الإِجَابَةُ هِيَ … لِأَنَّ النَّصَّ يَقُولُ …' },
    ],
    bank: ['إِعْلَانٌ', 'نَشْرَةٌ', 'رِسَالَةٌ', 'جَدْوَلٌ', 'لِـ', 'يَوْمَ', 'فِي السَّاعَةِ', 'فِي', 'يَجِبُ', 'لَا يَجُوزُ', 'لِأَنَّ', 'قَبْلَ'],
  }),
  F.modelSlide(site,
    'Important announcement for Year 7 students: a book fair will be held on Tuesday at two o’clock in the school hall. Every student must bring one book to exchange. Bringing torn books is not allowed. We are organising the fair because we want to encourage reading among students.',
    ['heading + audience', 'when + where', 'rule structures', 'reason'],
    'The website model notice (shortened). Stretch: add its last two sentences (visitors can choose a new book · speak to the librarian before Monday).'),
  F.selfCheckSlide([
    { route: 'core', text: 'I identified the text type first.' },
    { route: 'core', text: 'I scanned the timetable day → time → subject.' },
    { route: 'develop', text: 'I answered only what was asked.' },
    { route: 'develop', text: 'I gave evidence: li’anna n-naṣṣa yaqūlu …' },
    { route: 'stretch', text: 'I inferred a new word from context.' },
  ]),
  F.exitTicket(bank(8, 'finalCheck', [3, 4, 7]), 16),
  F.prepSlide({
    ...NEXT,
    words: [['مَقَالٌ', 'an article', 'pl. مَقَالَاتٌ'], ['بَرِيدٌ إِلِكْتُرُونِيٌّ', 'an email', '—'], ['فِقْرَةٌ', 'a paragraph', 'pl. فِقْرَاتٌ'], ['مَرَافِقُ', 'facilities', 'sg. مِرْفَقٌ'], ['حَدِيثٌ', 'modern', 'f. حَدِيثَةٌ']],
    questionEn: 'Describe your school in English in three facts: type, size, one facility.',
    questionAr: 'مَدْرَسَتِي …',
    homework: {
      core: 'Website F4-L08: the Reading Detective Mission (14) and the timetable scan.',
      develop: 'Website evidence notebook: three questions → key word → evidence → answer.',
      stretch: 'Write your 50–70-word school notice; read the unvowelled Text B on the website.',
    },
    wordsSource: 'The five words come from the website F4-L09 writing-format and school-description language.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: type → question word → key word → evidence → answer only what is asked.' }),
];

module.exports = { meta, slides };
