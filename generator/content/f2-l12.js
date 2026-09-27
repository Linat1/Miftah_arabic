'use strict';
/*
 * F2-L12 · Review and Unit Assessment (60 marks: listening 15 · reading 15 · speaking 15 · writing 15)
 * Website: Pathways › Foundation › F2 › Lesson 12. The F2 language vault, five revision stations, the four-skill
 * assessment (all items, scripts and texts are the website’s), score profile, one strength and one F3 target.
 */
const F = require('./f2-common');
const { q, bank, banks } = F;

const meta = F.meta({
  n: 12, fileTitle: 'Review_Assessment', chip: 'F2 Assessment',
  title: 'Show What You Can Say: F2 Review & Assessment', arabic: 'مُرَاجَعَةُ الوَحْدَةِ الثَّانِيَةِ وَتَقْيِيمُهَا',
  focus: 'Bring the whole F2 language system together, revise deliberately, then show what you understand and produce across listening, reading, speaking and writing — and set one precise target for F3.',
  icon: 'FaClipboardCheck', level: 'Foundation · end of unit F2',
});
const NEXT = { nextCode: 'F3-L01', nextTitle: 'My Family: Members and Relationships', nextAr: 'أُسْرَتِي' };
const st = banks.l12.stations.map((s) => s.items);
const S = (i, j) => F.w(st[i][j]);

const slides = [
  F.titleSlide({
    n: 12,
    plan: '0–1 Welcome · 1–2 Lesson map · 2–8 Revision stations (not marked) · 8–9 Assessment map · 9–20 Listening (15) · 20–30 Reading (15) · 30–40 Speaking (15, pairs / one-to-one) · 40–52 Writing (15) · 52–56 Score profile, strength and F3 target.',
    source: 'The website F2-L12 is a four-skill, 60-mark unit assessment (not an external exam paper): listening 15 (Part A four phrases · Part B Nour’s introduction · Part C six items) · reading 15 (Karim’s profile · phrase matching · Salma’s profile true/false) · speaking 15 (warm-up 5 + role-play 10) · writing 15 (form 5 + guided introduction 10). Every item, script, text, mark allocation and the full-mark writing model are the website’s. The revision stations are the website’s five-station “F2 Revision Arcade”.',
    support: `• Everyone sits the same 60 marks. Access arrangements: extra time, questions read aloud in English, one section on screen at a time; the speaking assessment is one-to-one or in trusted pairs with the teacher listening (it can move to the start of the next lesson).
• The website allows the assessment “over one or more study sessions” — if time is short: listening + reading in class; speaking and writing next lesson.
• Scripts are read by the teacher (the website audio is marked “recorded”; if unavailable, read at natural pace, twice). Do NOT show the read-along until the section is submitted.
• Answer slides follow each part — mark live or hide them and mark later.
• Privacy (website): a sensible invented identity is acceptable in speaking and writing.`,
  }),
  F.welcomeSlide(),
  {
    type: 'journey', stage: 'welcome', eyebrow: 'Today’s lesson map', title: 'Our assessment, step by step', ar: 'خَرِيطَةُ الدَّرْسِ',
    steps: [
      { stage: 'donow', min: 6, text: 'Revision stations (not marked).', ar: 'المُرَاجَعَةُ' },
      { stage: 'teach', min: 1, text: 'The 60-mark map.', ar: 'خُطَّةُ التَّقْيِيمِ' },
      { stage: 'ido', min: 11, text: 'Listening: 15 marks.', ar: 'الاِسْتِمَاعُ' },
      { stage: 'wedo', min: 10, text: 'Reading: 15 marks.', ar: 'القِرَاءَةُ' },
      { stage: 'youdo', min: 22, text: 'Speaking and writing: 15 + 15.', ar: 'التَّحَدُّثُ وَالكِتَابَةُ' },
      { stage: 'feedback', min: 4, text: 'My score, my strength, my F3 target.', ar: 'الهَدَفُ' },
      { stage: 'prep', min: 2, text: 'Get ready for F3: family.', ar: 'اِسْتَعِدَّ' },
    ],
    support: 'Each section starts with the easiest questions. Leave a blank and come back. The revision stations do not count.',
    notes: 'LESSON MAP. Website four-step plan: 1 Review (language vault + five stations) · 2 Listening + Reading (no transcripts early) · 3 Speaking + Writing (visible criteria) · 4 Reflect (total, one strength, one F3 target).',
  },
  F.doNow({
    seed: 5,
    questions: [S(0, 1), S(1, 5), S(2, 2), S(3, 4), S(4, 6)],
    keyIdea: { text: 'This warm-up does NOT count. It samples all five revision stations: greetings · questions · identity · agreement · forms and links.', ar: 'مُرَاجَعَةٌ ثُمَّ تَقْيِيمٌ' },
    retrieves: 'One question from each website revision station (1 greetings · 2 questions · 3 identity · 4 agreement · 5 forms and assessment language). Website advice: repeat the station with the lowest score before the assessment (homework if needed).',
  }),
  {
    type: 'mcq', stage: 'donow', flex: true, eyebrow: 'Revision · website “F2 Revision Arcade” · FLEX', title: 'Five more revision questions', ar: 'مَحَطَّاتُ المُرَاجَعَةِ',
    seed: 24,
    questions: [S(0, 2), S(1, 6), S(2, 4), S(3, 1), S(4, 5)],
    side: { kind: 'info', head: 'NOT MARKED', text: 'Revision only.\nWhich station was hardest for you?\nType its number (1–5) in the chat.' },
    answerSlide: { min: 0, eyebrow: 'Revision · answers', title: 'Revision: answers', ar: 'الإِجَابَاتُ' },
    notes: 'FLEX — more questions from the website’s five stations (one per station). Use the chat poll to decide which vault section to show again before the assessment.',
  },
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Assessment map (website) · 60 marks in total', title: 'Four skills, fifteen marks each', ar: 'خُطَّةُ التَّقْيِيمِ',
    cols: [{ label: 'Marks', w: 1.4 }, { label: 'What you do', w: 7.2 }, { label: 'Skill', w: 3.73 }],
    rows: [
      { core: true, cells: ['15', 'A: four short phrases (4) · B: Nour’s introduction (5) · C: six short items (6)', '🎧 Listening · الاِسْتِمَاعُ'] },
      { core: true, cells: ['15', 'A: Karim’s profile (4) · B: match phrases to meanings (5) · C: Salma — true or false (6)', '📖 Reading · القِرَاءَةُ'] },
      { core: true, cells: ['15', 'Warm-up questions (5) · role-play with a new classmate (10)', '🎙️ Speaking · التَّحَدُّثُ'] },
      { core: true, cells: ['15', 'Form: five fields (5) · a guided introduction of five or six lines (10)', '✍️ Writing · الكِتَابَةُ'] },
    ],
    notes: 'ASSESSMENT MAP (website). Website vocabulary for today: مُرَاجَعَةٌ review · تَقْيِيمٌ assessment · دَرَجَةٌ mark · نُقْطَةُ قُوَّةٍ strength · هَدَفٌ target.',
  },
  {
    type: 'mcq', stage: 'ido', min: 3, eyebrow: 'Listening · Part A · 4 marks · choose the phrase heard (website)', title: 'Listening A · Four short phrases', ar: 'الاِسْتِمَاعُ (أ)',
    seed: 25,
    questions: bank(12, 'listeningA').map((x, i) => ({ ...x, prompt: `Item ${i + 1}: which phrase did you hear?` })),
    answerSlide: { min: 0, eyebrow: 'Listening · Part A · answers', title: 'Listening A · Answers', ar: 'الإِجَابَاتُ' },
    notes: `LISTENING PART A (website, 4 marks). Read each item twice, with a pause.
SCRIPT: ١ صَبَاحُ الخَيْرِ. · ٢ شُكْرًا. · ٣ أَهْلًا وَسَهْلًا. · ٤ مَعَ السَّلَامَةِ.
Private chat: A: 1_ 2_ 3_ 4_`,
    answerNotes: 'Mark /4.',
  },
  {
    type: 'mcq', stage: 'ido', min: 3, eyebrow: 'Listening · Part B · 5 marks · Nour introduces herself (website)', title: 'Listening B · Nour’s introduction', ar: 'الاِسْتِمَاعُ (ب)',
    seed: 26,
    questions: bank(12, 'listeningB'),
    side: { kind: 'info', head: 'LISTEN TWICE', text: 'Listen 1: who and which facts?\nListen 2: the exact details.\nChat: B: 1_ 2_ 3_ 4_ 5_' },
    answerSlide: { min: 0, eyebrow: 'Listening · Part B · answers', title: 'Listening B · Answers', ar: 'الإِجَابَاتُ' },
    notes: `LISTENING PART B (website, 5 marks). Read twice at natural pace.
SCRIPT: مَرْحَبًا! اِسْمِي نُورُ. عُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً. أَنَا مِنْ مِصْرَ، وَأَسْكُنُ فِي القَاهِرَةِ.`,
    answerNotes: 'Mark /5.',
  },
  {
    type: 'mcq', stage: 'ido', min: 4, eyebrow: 'Listening · Part C · 6 marks · match the six meanings (website)', title: 'Listening C · Six short items', ar: 'الاِسْتِمَاعُ (ج)',
    seed: 27,
    questions: bank(12, 'listeningC').map((x, i) => ({ ...x, prompt: `Item ${i + 1}: what does it mean?` })),
    answerSlide: { min: 0, eyebrow: 'Listening · Part C · answers', title: 'Listening C · Answers', ar: 'الإِجَابَاتُ' },
    notes: `LISTENING PART C (website, 6 marks). Read each item twice.
SCRIPT: ١ مِنْ أَيْنَ أَنْتَ؟ · ٢ كَمْ عُمْرُكِ؟ · ٣ أَسْكُنُ فِي لَنْدَنَ. · ٤ اِسْمِي عُمَرُ. · ٥ مِنْ فَضْلِكَ. · ٦ أَنَا مِنْ بَاكِسْتَانَ.
Private chat: C: 1_ 2_ 3_ 4_ 5_ 6_. Listening total /15.`,
    answerNotes: 'Mark /6. Students add up Listening /15.',
  },
  {
    type: 'passage', stage: 'wedo', min: 1, eyebrow: 'Reading · Text 1 · Karim’s profile (website)', title: 'Reading · Text 1', ar: 'النَّصُّ الأَوَّلُ',
    text: 'أَهْلًا وَسَهْلًا! اِسْمِي كَرِيمٌ. عُمْرِي خَمْسَ عَشْرَةَ سَنَةً. أَنَا مِنْ سُورِيَا، وَأَسْكُنُ فِي حَلَبَ. أَنَا طَالِبٌ.',
    notes: 'READING TEXT 1 (website). Website instruction: “Read each text carefully. Locate the evidence before selecting an answer.” No English support on assessment texts.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'Reading · Part A · 4 marks · profile comprehension (website)', title: 'Reading A · Karim’s profile', ar: 'القِرَاءَةُ (أ)',
    seed: 28,
    questions: bank(12, 'readingA'),
    side: { kind: 'info', head: 'TEXT 1', text: 'أَهْلًا وَسَهْلًا! اِسْمِي كَرِيمٌ. عُمْرِي خَمْسَ عَشْرَةَ سَنَةً. أَنَا مِنْ سُورِيَا، وَأَسْكُنُ فِي حَلَبَ. أَنَا طَالِبٌ.' },
    answerSlide: { min: 0, eyebrow: 'Reading · Part A · answers', title: 'Reading A · Answers', ar: 'الإِجَابَاتُ' },
    notes: 'READING PART A (website, 4 marks). The text stays visible on the side panel.',
    answerNotes: 'Mark /4.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'Reading · Part B · 5 marks · match phrases to meanings (website)', title: 'Reading B · What does it mean?', ar: 'القِرَاءَةُ (ب)',
    seed: 29,
    questions: bank(12, 'readingB').map((x) => ({ ...x, prompt: 'Choose the meaning.' })),
    side: { kind: 'info', head: 'READING B', text: 'Look at the ending: -ka (boy) or -ki (girl).\nChat: B: 1_ 2_ 3_ 4_ 5_' },
    answerSlide: { min: 0, eyebrow: 'Reading · Part B · answers', title: 'Reading B · Answers', ar: 'الإِجَابَاتُ' },
    notes: 'READING PART B (website, 5 marks): five phrases — مَا اسْمُكِ؟ · كَمْ عُمْرُكَ؟ · أَيْنَ تَسْكُنُ؟ · عَفْوًا · إِلَى اللِّقَاءِ.',
    answerNotes: 'Mark /5.',
  },
  {
    type: 'passage', stage: 'wedo', min: 1, eyebrow: 'Reading · Text 3 · Salma’s profile (website) · keep on screen for Part C', title: 'Reading · Text 3', ar: 'النَّصُّ الثَّالِثُ',
    text: 'اِسْمُهَا سَلْمَى. هِيَ مِنَ المَغْرِبِ، وَتَسْكُنُ فِي الرِّبَاطِ. عُمْرُهَا ثَلَاثَ عَشْرَةَ سَنَةً. هِيَ طَالِبَةٌ.',
    notes: 'READING TEXT 3 (website). Show this slide first; the text is repeated on the Part C slide. Third-person text: هِيَ · ـهَا · تَـ (F2-L08).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'Reading · Part C · 6 marks · Salma’s profile · true or false (website)', title: 'Reading C · True or false?', ar: 'القِرَاءَةُ (ج)',
    seed: 30,
    questions: bank(12, 'readingC'),
    side: { kind: 'info', head: 'TEXT 3', text: 'اِسْمُهَا سَلْمَى. هِيَ مِنَ المَغْرِبِ، وَتَسْكُنُ فِي الرِّبَاطِ. عُمْرُهَا ثَلَاثَ عَشْرَةَ سَنَةً. هِيَ طَالِبَةٌ.' },
    answerSlide: { min: 0, eyebrow: 'Reading · Part C · answers', title: 'Reading C · Answers', ar: 'الإِجَابَاتُ' },
    notes: `READING PART C (website, 6 marks). Text 3 is on the previous slide and in the side panel:
اِسْمُهَا سَلْمَى. هِيَ مِنَ المَغْرِبِ، وَتَسْكُنُ فِي الرِّبَاطِ. عُمْرُهَا ثَلَاثَ عَشْرَةَ سَنَةً. هِيَ طَالِبَةٌ.
Reading total /15.`,
    answerNotes: 'Mark /6. Students add up Reading /15.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 10, eyebrow: 'Speaking · 15 marks · warm-up (5) + role-play (10) (website)', title: 'Speaking assessment', ar: 'تَقْيِيمُ التَّحَدُّثِ',
    cols: [{ label: 'Part 1 · warm-up questions (1 mark each)', w: 6.2, size: 20 }, { label: 'Part 2 · role-play with a new classmate (10)', w: 6.13 }],
    rows: [
      { core: true, cells: [{ ar: 'مَا اسْمُكَ؟ / مَا اسْمُكِ؟' }, '1 · Greet the new classmate.'] },
      { core: true, cells: [{ ar: 'كَمْ عُمْرُكَ؟ / كَمْ عُمْرُكِ؟' }, '2 · Say your name.   3 · Say your age.'] },
      { core: true, cells: [{ ar: 'مِنْ أَيْنَ أَنْتَ؟ / أَنْتِ؟' }, '4 · Say where you are from and where you live.'] },
      { core: true, cells: [{ ar: 'أَيْنَ تَسْكُنُ؟ / تَسْكُنِينَ؟' }, '5 · Ask one personal-information question.'] },
      { core: true, cells: ['Say “thank you” in Arabic.', '6 · Close politely.'] },
    ],
    foot: 'Prepare cue words only: greeting · name · age · country · city · question · closing.',
    notes: `SPEAKING (website). “Prepare briefly, then answer aloud without reading a full script.” Cue words only (Core may write a full script if still needed).
MARK SCHEME (website): Warm-up /5 — one mark for each relevant, understandable answer. Role-play /10 (0 · 2 · 4 · 6 · 8 · 10) — reward completion, relevance, accuracy, clear pronunciation and independence.
ORGANISATION: one-to-one with the teacher (others start the writing), or in trusted pairs with the teacher listening. Independent learners may record themselves (website).`,
  },
  {
    type: 'formsTable', stage: 'youdo', min: 12, eyebrow: 'Writing · 15 marks · form (5) + guided introduction (10) (website)', title: 'Writing assessment', ar: 'تَقْيِيمُ الكِتَابَةِ',
    cols: [{ label: 'Part A · complete five fields (5)', w: 4.6, size: 22 }, { label: 'Part B · five or six connected lines (10)', w: 7.73 }],
    rows: [
      { core: true, cells: [{ ar: 'الاِسْمُ: ______' }, 'Include: a greeting · your name · your age'] },
      { core: true, cells: [{ ar: 'العُمْرُ: ______' }, 'where you are from · where you live'] },
      { core: true, cells: [{ ar: 'الجِنْسِيَّةُ: ______' }, 'one polite phrase · join ideas with وَ'] },
      { core: true, cells: [{ ar: 'البَلَدُ: ______' }, 'Develop / Stretch: add nationality, languages,'] },
      { core: true, cells: [{ ar: 'مَكَانُ السَّكَنِ: ______' }, 'an interest (+ لِأَنَّ) and another connective.'] },
      { cells: [{ ar: 'التَّوْقِيعُ: ______' }, 'Signature: optional practice — not marked.'] },
    ],
    notes: `WRITING (website). Use true information or a sensible invented identity.
MARK SCHEME (website): Form /5 — one mark for each completed meaningful field (the signature line is optional and does not change the total). Guided introduction /10 (0 · 2 · 4 · 6 · 8 · 10) — reward required content, connection, accuracy, organisation and a polite opening / close.
Website full-mark model (show ONLY after students have finished — next slide).`,
  },
  {
    type: 'glossed', stage: 'feedback', min: 1, eyebrow: 'Writing · the website full-mark model · show AFTER writing', title: 'A full-mark introduction', ar: 'نَمُوذَجُ الدَّرَجَةِ الكَامِلَةِ',
    lines: [
      ['السَّلَامُ عَلَيْكُمْ! اِسْمِي يُوسُفُ، وَعُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً.', 'greeting · name · age (joined with وَ)'],
      ['أَنَا مِنْ بَرِيطَانِيَا، وَأَسْكُنُ فِي لَنْدَنَ.', 'origin (مِنْ) · residence (فِي)'],
      ['أَنَا طَالِبٌ، وَأَتَكَلَّمُ الإِنْجِلِيزِيَّةَ وَالعَرَبِيَّةَ أَيْضًا.', 'description · languages · أَيْضًا'],
      ['أُحِبُّ القِرَاءَةَ لِأَنَّهَا مُفِيدَةٌ.', 'interest + reason (لِأَنَّ)'],
      ['شُكْرًا، وَإِلَى اللِّقَاءِ!', 'polite close'],
    ],
    notes: 'WEBSITE FULL-MARK MODEL. Students compare with their own writing and find ONE thing to add in green pen (self-assessment only — the mark stands).',
  },
  {
    type: 'formsTable', stage: 'feedback', min: 3, eyebrow: 'Results · record your score and set one F3 target (website)', title: 'My F2 score profile', ar: 'سَجِّلْ دَرَجَتَكَ',
    cols: [{ label: 'Skill', w: 3.4 }, { label: 'My score', w: 2.0 }, { label: 'Guide (total /60) · teacher guide, not an exam grade', w: 6.93 }],
    rows: [
      { core: true, cells: ['🎧 Listening', '/15', '54–60 Excellent — secure F2 foundation'] },
      { core: true, cells: ['📖 Reading', '/15', '42–53 Good — ready for F3 with one practice target'] },
      { core: true, cells: ['🎙️ Speaking', '/15', '30–41 Satisfactory — targeted F2 retrieval early in F3'] },
      { core: true, cells: ['✍️ Writing', '/15', 'Below 30 — catch-up on the lowest skill before F3'] },
    ],
    foot: 'Write in your book: My strength (نُقْطَةُ قُوَّتِي) … · My F3 target (هَدَفِي) …',
    notes: `SCORE PROFILE (website “Record your result and set one useful F3 target”): “A score shows where you are today. The target decides what you will improve next.” Use evidence from the four scores.
The bands are a teacher guide in line with the F1 assessment (the website totals the four scores but does not print bands).
A strong target is precise: one skill + one repeated action + a check date (e.g. “Listening: I will play the F2-L09 tasks twice a week; check in F3-L03”).`,
  },
  F.selfCheckSlide([
    { route: 'core', text: 'I can greet, give my name and age, and close politely.' },
    { route: 'core', text: 'I can ask a boy or a girl a personal question with the right ending.' },
    { route: 'develop', text: 'I can say where I am from and where I live, and my languages.' },
    { route: 'develop', text: 'I can read a profile and find exact information.' },
    { route: 'stretch', text: 'I can write a connected introduction with a reason.' },
  ]),
  F.prepSlide({
    ...NEXT,
    words: [['أُسْرَةٌ', 'family', 'my: أُسْرَتِي'], ['أَبٌ', 'father', ''], ['أُمٌّ', 'mother', ''], ['أَخٌ', 'brother', 'pl. إِخْوَةٌ'], ['أُخْتٌ', 'sister', 'pl. أَخَوَاتٌ']],
    questionEn: 'Write your F3 target: one skill, one repeated action, one check date.',
    questionAr: 'هَدَفِي …',
    homework: {
      core: 'Repeat the website revision station with your lowest score; learn the five family words.',
      develop: 'Redo the assessment section with your lowest score on the website; then learn the family words.',
      stretch: 'Write a short profile of a family member (he / she forms from F2-L08) using the new family words.',
    },
    wordsSource: 'F3 begins with the family (website F3-L01 “My Family: Members and Relationships”). أُمٌّ، أَخٌ، أُخْتٌ were already met in F2-L05.',
  }),
  F.closeSlide({ ...NEXT, remember: 'F2 complete — well done! Learn 5 family words for F3.' }),
];

module.exports = { meta, slides };
