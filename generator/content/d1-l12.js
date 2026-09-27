'use strict';
/*
 * D1-L12 · Review and Unit Assessment (60 marks: listening 20 · reading 10 · writing 20 · speaking 10)
 * Website: Pathways › Development › D1 › D1-L12 (PHP page; data extracted to site-data/d1-l12.json).
 * Readiness check and grammar laboratory (practice, not marked), the four-skill 60-mark profile, reflection and D2 readiness.
 */
const D = require('./d-common');
const { q, fromSite, splitPrompt } = D;
const A = require('../site-data/d1-l12.json');

const meta = D.meta('D1')({
  n: 12, fileTitle: 'Review_and_Unit_Assessment', chip: 'D1 Assessment',
  title: 'Review and Unit Assessment', arabic: 'مُرَاجَعَةُ D1 وَتَقْيِيمُ الوَحْدَةِ',
  focus: 'Retrieve and repair the whole D1 language system, then show it across a 60-mark profile — listening, reading, writing and speaking — and set one precise target for D2.',
  icon: 'FaFlagCheckered', iconSet: 'fa6', level: 'Development · end of unit D1',
});
const NEXT = { nextCode: 'D2-L01', nextTitle: 'Personality Adjectives — What Is He / She Like?', nextAr: 'الصِّفَاتُ الشَّخْصِيَّةُ' };
const [LP1, LP2, LP3] = A.listeningParts;
const sp = (x) => splitPrompt(x);
const TXT = A.readingText;

const slides = [
  D.titleSlide({
    n: 12,
    siteRef: 'Pathways › Development › D1 Daily Routine and Time › D1-L12',
    plan: '0–1 Welcome · 1–2 Lesson map · 2–7 Readiness check (not marked) · 7–8 Assessment map · 8–22 Listening (20: three texts) · 22–31 Reading (10) · 31–44 Writing (20: form + article) · 44–53 Speaking (10: role-play + topic conversation, pairs / one-to-one) · 53–56 Score profile, strength and D2 target.',
    source: 'The website D1-L12 is a 60-mark Development profile (not an external exam paper): listening 20 (Maryam’s school day 8 · Yusuf and Huda 6 · interview with Samir 6) · reading 10 (a school-day and weekend routine) · writing 20 (routine form 5 + article or email 15, marked for task, range and accuracy) · speaking 10 (role-play 4 + topic conversation 6). The readiness check (12) and grammar laboratory (12) are practice and do not count. Every item, script, text and mark allocation is the website’s.',
    support: `• Everyone sits the same 60 marks. Access arrangements: extra time, questions read aloud in English, one section on screen at a time; speaking is one-to-one or in trusted pairs with the teacher listening (it can move to the start of the next lesson).
• The website allows the assessment over more than one session — if time is short: listening + reading in class; writing and speaking next lesson.
• Scripts: the website has recorded audio; if it is unavailable, read each text twice at natural pace. The scripts are in the notes of each listening slide — do NOT show them until the section is submitted.
• Answer slides follow each part — mark live, or hide them and mark later.
• The readiness check is the warm-up: students who score below 8/12 revise the D1 grammar vault (D1-L11) before writing.`,
  }),
  D.welcomeSlide(),
  {
    type: 'journey', stage: 'welcome', eyebrow: 'Today’s lesson map', title: 'Our assessment, step by step', ar: 'خَرِيطَةُ الدَّرْسِ',
    steps: [
      { stage: 'donow', min: 5, text: 'Readiness check (not marked).', ar: 'الاِسْتِعْدَادُ' },
      { stage: 'teach', min: 1, text: 'The 60-mark map.', ar: 'خُطَّةُ التَّقْيِيمِ' },
      { stage: 'ido', min: 14, text: 'Listening: 20 marks.', ar: 'الاِسْتِمَاعُ' },
      { stage: 'wedo', min: 9, text: 'Reading: 10 marks.', ar: 'القِرَاءَةُ' },
      { stage: 'youdo', min: 22, text: 'Writing 20 + speaking 10.', ar: 'الكِتَابَةُ وَالتَّحَدُّثُ' },
      { stage: 'feedback', min: 3, text: 'My profile, my strength, my D2 target.', ar: 'الهَدَفُ' },
      { stage: 'prep', min: 2, text: 'Get ready for D2: personality.', ar: 'اِسْتَعِدَّ' },
    ],
    support: 'Each section starts with the easier questions. Leave a blank and come back. The readiness check does not count.',
    notes: 'LESSON MAP. Website structure: 01 Readiness check · 02 Language vault · 03 Grammar laboratory · 04 60-mark profile · 05 Listening · 06 Reading · 07 Writing · 08 Speaking · 09 Reflection and D2 readiness.',
  },
  D.doNow({
    seed: 12,
    questions: [0, 1, 2, 5, 6].map((i) => sp(A.diagnostic[i])),
    keyIdea: { text: 'This warm-up does NOT count. It samples the D1 system: person · time · before/after · asking a girl · as for … fa-.', ar: 'مُرَاجَعَةٌ ثُمَّ تَقْيِيمٌ' },
    retrieves: 'Five of the twelve website readiness-check questions (1 person prefix · 2 time with إِلَّا · 3 قَبْلَ أَنْ · 6 asking a girl · 7 أَمَّا … فَـ). Website: “This diagnostic is practice, not part of the 60 assessment marks.”',
  }),
  {
    type: 'mcq', stage: 'donow', flex: true, eyebrow: 'Revision · website grammar laboratory · FLEX (not marked)', title: 'Grammar laboratory', ar: 'مُخْتَبَرُ القَوَاعِدِ',
    seed: 24,
    questions: [0, 2, 4, 9, 10, 11].map((i) => sp(A.grammar[i])),
    side: undefined,
    answerSlide: { min: 0, eyebrow: 'Revision · answers', title: 'Grammar laboratory: answers', ar: 'الإِجَابَاتُ' },
    notes: 'FLEX — six of the twelve website grammar-laboratory questions (person · after أَنْ · he / she · أَمَّا … فَـ · asking a girl · reference). Use it if the readiness check showed gaps; otherwise it is homework on the website.',
  },
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Assessment map (website) · 60 marks in total', title: 'Your 60-mark D1 profile', ar: 'خُطَّةُ التَّقْيِيمِ',
    cols: [{ label: 'Marks', w: 1.4 }, { label: 'What you do', w: 7.2 }, { label: 'Skill', w: 3.73 }],
    rows: [
      { core: true, cells: ['20', 'Three texts, each heard twice: Maryam’s school day (8) · Yusuf and Huda (6) · an interview with Samir (6)', '🎧 Listening · الاِسْتِمَاعُ'] },
      { core: true, cells: ['10', 'A school-day and weekend routine: ten questions — locate, interpret, prove', '📖 Reading · القِرَاءَةُ'] },
      { core: true, cells: ['20', 'Routine form: five fields (5) · article or email, 100–120 words (15)', '✍️ Writing · الكِتَابَةُ'] },
      { core: true, cells: ['10', 'Role-play (4) · topic conversation (6) — prepare cue words only', '🎙️ Speaking · التَّحَدُّثُ'] },
    ],
    notes: 'ASSESSMENT MAP (website “Your 60-mark D1 profile”). The website saves marks per skill and generates guidance once all four components are complete.',
  },
  {
    type: 'mcq', stage: 'ido', min: 5, eyebrow: 'Listening · Text 1 · 8 marks · heard twice (website)', title: 'Text 1 · Maryam describes a school day', ar: 'الاِسْتِمَاعُ (١)',
    seed: 31,
    questions: A.listen1.map((x) => fromSite(x)),
    answerSlide: { min: 0, eyebrow: 'Listening · Text 1 · answers', title: 'Text 1 · Answers', ar: 'الإِجَابَاتُ' },
    notes: `LISTENING TEXT 1 (website, 8 marks). Students read the questions (30 s). Read the script twice at natural pace.
SCRIPT: ${LP1.script}
Private chat: 1_ 2_ 3_ 4_ 5_ 6_ 7_ 8_`,
    answerNotes: 'Mark /8. Watch Q3: الثَّامِنَةِ إِلَّا الرُّبْعَ = 7:45 (not 8:15). Q5: الثَّامِنَةِ وَالثُّلُثِ = 8:20.',
  },
  {
    type: 'mcq', stage: 'ido', min: 4, eyebrow: 'Listening · Text 2 · 6 marks · heard twice (website)', title: 'Text 2 · Yusuf and Huda compare their routines', ar: 'الاِسْتِمَاعُ (٢)',
    seed: 32,
    questions: A.listen2.map((x) => fromSite(x)),
    side: { kind: 'info', head: 'TWO PEOPLE', text: 'Listen for ya- (Yusuf) and ta- (Huda).\nChat: 1_ 2_ 3_ 4_ 5_ 6_' },
    answerSlide: { min: 0, eyebrow: 'Listening · Text 2 · answers', title: 'Text 2 · Answers', ar: 'الإِجَابَاتُ' },
    notes: `LISTENING TEXT 2 (website, 6 marks). Read twice.
SCRIPT: ${LP2.script}`,
    answerNotes: 'Mark /6.',
  },
  {
    type: 'mcq', stage: 'ido', min: 4, eyebrow: 'Listening · Text 3 · 6 marks · heard twice (website)', title: 'Text 3 · Interview about routine and time', ar: 'الاِسْتِمَاعُ (٣)',
    seed: 33,
    questions: A.listen3.map((x) => fromSite(x)),
    side: { kind: 'info', head: 'AN INTERVIEW', text: 'Keep listening after “as for …”.\nChat: 1_ 2_ 3_ 4_ 5_ 6_' },
    answerSlide: { min: 0, eyebrow: 'Listening · Text 3 · answers', title: 'Text 3 · Answers', ar: 'الإِجَابَاتُ' },
    notes: `LISTENING TEXT 3 (website, 6 marks). Read twice; use two voices if possible.
SCRIPT: ${LP3.script}
Listening total /20.`,
    answerNotes: 'Mark /6. Students add up Listening /20.',
  },
  {
    type: 'passage', stage: 'wedo', min: 3, eyebrow: 'Reading · 10 marks · read once for the pattern, then for exact details (website)', title: 'Reading · A school-day and weekend routine', ar: 'نَصُّ القِرَاءَةِ',
    text: TXT,
    notes: 'READING TEXT (website). Website instruction: “Read once for the overall pattern, then return to exact details, time expressions, references and contrasts.” No English support on assessment texts (access arrangement: questions may be read aloud in English).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'Reading · questions 1–5 · 5 marks (website)', title: 'Reading · Questions 1–5', ar: 'القِرَاءَةُ (١–٥)',
    seed: 34,
    questions: A.reading.slice(0, 5).map((x) => fromSite(x)),
    side: { kind: 'info', head: 'FIND THE EVIDENCE', text: 'Go back to the text for every answer.\nChat: 1_ 2_ 3_ 4_ 5_' },
    answerSlide: { min: 0, eyebrow: 'Reading · questions 1–5 · answers', title: 'Reading 1–5 · Answers', ar: 'الإِجَابَاتُ' },
    notes: 'READING QUESTIONS 1–5 (website). Show the text slide again whenever students ask.',
    answerNotes: 'Mark /5. Q2: السَّادِسَةِ وَخَمْسٍ وَعِشْرِينَ دَقِيقَةً = 6:25.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'Reading · questions 6–10 · 5 marks (website)', title: 'Reading · Questions 6–10', ar: 'القِرَاءَةُ (٦–١٠)',
    seed: 35,
    questions: A.reading.slice(5).map((x, i) => fromSite(x, { n: i + 6 })),
    side: { kind: 'info', head: 'FIND THE EVIDENCE', text: 'Q9: what does “this” refer to?\nChat: 6_ 7_ 8_ 9_ 10_' },
    answerSlide: { min: 0, eyebrow: 'Reading · questions 6–10 · answers', title: 'Reading 6–10 · Answers', ar: 'الإِجَابَاتُ' },
    notes: 'READING QUESTIONS 6–10 (website). Reading total /10.',
    answerNotes: 'Mark /5. Students add up Reading /10.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 13, eyebrow: 'Writing · 20 marks · form (5) + article or email (15) (website)', title: 'Writing assessment', ar: 'تَقْيِيمُ الكِتَابَةِ',
    cols: [{ label: 'Question 1 · routine form (5)', w: 4.8, size: 22 }, { label: 'Question 2 · article or email, 100–120 words (15)', w: 7.53 }],
    rows: [
      { core: true, cells: [{ ar: 'وَقْتُ الاِسْتِيقَاظِ: ______' }, 'For a young Arabic-speaking reader, include: 1 a school-day routine'] },
      { core: true, cells: [{ ar: 'مَاذَا تَفْعَلُ قَبْلَ الإِفْطَارِ؟ ______' }, '2 exact times and frequency · 3 before and after school'] },
      { core: true, cells: [{ ar: 'كَمْ مَرَّةً تَتَمَرَّنُ؟ ______' }, '4 another person’s routine · 5 a weekend comparison'] },
      { core: true, cells: [{ ar: 'مَاذَا تَفْعَلُ بَعْدَ المَدْرَسَةِ؟ ______' }, '6 a reasoned opinion'] },
      { core: true, cells: [{ ar: 'وَقْتُ النَّوْمِ: ______' }, 'Marked for Task (5) · Range (5) · Accuracy (5)'] },
    ],
    foot: 'Check before you finish: I / he / she prefixes · she → -hā · verb after “an” · past / to the hour.',
    notes: `WRITING (website, 20 marks). Three routes (website): type, write or draw on screen, or on paper.
MARK SCHEME (website): Form /5 — one mark for each field completed in Arabic with a precise word, phrase or sentence. Article /15 — Task 5 (all six content points with relevant detail) · Range 5 (time, frequency, sequence, questions or answers, person change, contrast) · Accuracy 5 (present-tense prefixes, feminine forms, possessive reference, verbs after أَنْ).
Core access: the D1-L11 sentence frames may be used for Question 1 only; Question 2 is independent. Teacher model on the next slide — show ONLY after writing.`,
  },
  {
    type: 'glossed', stage: 'feedback', min: 1, eyebrow: 'Writing · a strong answer (teacher model, as in D1-L11) · show AFTER writing', title: 'What a strong article includes', ar: 'نَمُوذَجُ إِجَابَةٍ قَوِيَّةٍ',
    lines: [
      ['أَسْتَيْقِظُ فِي أَيَّامِ الدِّرَاسَةِ فِي السَّادِسَةِ وَالنِّصْفِ، وَأَتَنَاوَلُ الإِفْطَارَ قَبْلَ أَنْ أَخْرُجَ فِي السَّابِعَةِ وَالرُّبْعِ.', '1–2 school-day routine · exact times · before + verb'],
      ['أَسْتَقِلُّ الحَافِلَةَ لِأَنَّ المَدْرَسَةَ بَعِيدَةٌ. بَعْدَ أَنْ أَعُودَ، أَسْتَرِيحُ نِصْفَ سَاعَةٍ، ثُمَّ أُكْمِلُ وَاجِبِي.', '3 after school · reason · after + verb'],
      ['أَتَمَرَّنُ مَرَّتَيْنِ فِي الأُسْبُوعِ، بَيْنَمَا تَتَمَرَّنُ أُخْتِي كُلَّ يَوْمٍ تَقْرِيبًا.', '2 frequency · 4 another person (ta-)'],
      ['أَمَّا فِي نِهَايَةِ الأُسْبُوعِ فَأَنَامُ وَقْتًا أَطْوَلَ، وَغَالِبًا مَا أَزُورُ أَقَارِبِي.', '5 weekend comparison'],
      ['فِي رَأْيِي، رُوتِينِي مُتَوَازِنٌ، وَلٰكِنَّنِي أُرِيدُ أَنْ أَنَامَ مُبَكِّرًا.', '6 reasoned opinion'],
    ],
    notes: 'TEACHER MODEL (the website does not print a model for this task; this is the D1-L11 model, shortened). Students compare with their own writing and find ONE thing to add in green pen (self-assessment only — the mark stands).',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 9, eyebrow: 'Speaking · 10 marks · role-play (4) + topic conversation (6) (website)', title: 'Speaking assessment', ar: 'تَقْيِيمُ التَّحَدُّثِ',
    cols: [{ label: 'Topic conversation · possible questions (6)', w: 7.1, size: 20 }, { label: 'Role-play (4) · ask and answer about …', w: 5.23 }],
    rows: [
      { core: true, cells: [{ ar: 'صِفْ رُوتِينَكَ فِي يَوْمٍ دِرَاسِيٍّ، وَاذْكُرْ أَوْقَاتًا دَقِيقَةً.' }, '1 · wake-up time'] },
      { core: true, cells: [{ ar: 'مَاذَا يَفْعَلُ شَخْصٌ آخَرُ فِي أُسْرَتِكَ بَعْدَ المَدْرَسَةِ أَوِ العَمَلِ؟' }, '2 · an after-school activity'] },
      { core: true, cells: [{ ar: 'كَمْ مَرَّةً تَقُومُ بِنَشَاطٍ مُعَيَّنٍ فِي الأُسْبُوعِ، وَلِمَاذَا؟' }, '3 · how often'] },
      { core: true, cells: [{ ar: 'قَارِنْ بَيْنَ رُوتِينِكَ فِي أَيَّامِ الدِّرَاسَةِ وَرُوتِينِكَ فِي نِهَايَةِ الأُسْبُوعِ.' }, '4 · a changed timetable detail'] },
    ],
    foot: 'Prepare cue words only (website): direct answer + exact time · frequency + reason or example · another person + weekend contrast.',
    notes: `SPEAKING (website, 10 marks). “Prepare key words only; do not memorise a full script.”
Development standard (website): respond directly, then add a precise time or frequency, reason, example and contrast where useful.
MARK SCHEME: Role-play /4 (one mark per task completed intelligibly). Topic conversation /6 — reward direct answers, precise detail, reasons/examples, a contrast and accuracy of person and time.
ORGANISATION: one-to-one with the teacher (others finish writing), or in trusted pairs with the teacher listening. Ask ONE unseen follow-up to Stretch students (وَلِمَاذَا؟ / أَعْطِ مِثَالًا).`,
  },
  {
    type: 'formsTable', stage: 'feedback', min: 2, eyebrow: 'Results · record your profile and set one D2 target (website)', title: 'My D1 score profile', ar: 'سَجِّلْ دَرَجَتَكَ',
    cols: [{ label: 'Guide (total /60) · teacher guide, not an exam grade', w: 6.93 }, { label: 'My score', w: 2.0 }, { label: 'Skill', w: 3.4 }],
    rows: [
      { core: true, cells: ['54–60 Excellent — secure D1 foundation', '/20', '🎧 Listening'] },
      { core: true, cells: ['42–53 Good — ready for D2 with one practice target', '/10', '📖 Reading'] },
      { core: true, cells: ['30–41 Satisfactory — targeted D1 retrieval early in D2', '/20', '✍️ Writing'] },
      { core: true, cells: ['Below 30 — catch-up on the lowest skill before D2', '/10', '🎙️ Speaking'] },
    ],
    foot: 'Write in your book (website reflection): My strongest D1 evidence was … · My precise next action is …',
    notes: `SCORE PROFILE (website “Evidence · priority · next action — D1 reflection and D2 readiness”): “Use a result, sentence or speaking example — not a general feeling.”
The bands are a teacher guide in line with the F1 / F2 assessments (the website totals the four scores but does not print bands).
A precise action = rule + task + frequency (D1-L11), e.g. “Verb after an: five sentences every two days; check in D2-L03.”`,
  },
  D.selfCheckSlide([
    { route: 'core', text: 'I can describe my school day with exact times.' },
    { route: 'core', text: 'I can use I / he / she verbs correctly.' },
    { route: 'develop', text: 'I can use before/after + a verb with the correct ending.' },
    { route: 'develop', text: 'I can ask a boy or a girl about their routine.' },
    { route: 'stretch', text: 'I can compare school days and the weekend with a reason.' },
  ]),
  D.prepSlide({
    ...NEXT,
    words: [['وَدُودٌ / وَدُودَةٌ', 'friendly', 'm. / f.'], ['صَادِقٌ / صَادِقَةٌ', 'honest', 'm. / f.'], ['صَبُورٌ / صَبُورَةٌ', 'patient', 'm. / f.'], ['مُجْتَهِدٌ / مُجْتَهِدَةٌ', 'hard-working', 'm. / f.'], ['هَادِئٌ / هَادِئَةٌ', 'calm', 'm. / f.']],
    questionEn: 'Think of a friend or family member. Which two words describe their personality, and why?',
    questionAr: 'كَيْفَ هُوَ؟ كَيْفَ هِيَ؟',
    homework: {
      core: 'Redo the D1-L12 readiness check on the website; learn the five D2 words (both forms).',
      develop: 'Redo the assessment section with your lowest score on the website; then learn the D2 words.',
      stretch: 'Write your D1 reflection (strongest evidence + precise next action) and describe one person with the D2 words.',
    },
    wordsSource: 'D2 begins with personality (website D2-L01 “Personality Adjectives — What Is He / She Like?”). Adjectives have m. and f. forms — the he/she skill from D1-L06 carries straight over.',
  }),
  D.closeSlide({ ...NEXT, remember: 'D1 complete — well done! Learn 5 personality words for D2.' }),
];

module.exports = { meta, slides };
