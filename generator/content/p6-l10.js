'use strict';
/* P6-L10 · Mock Examination — Paper 3 Speaking (Full IGCSE Format) — website: Pathways › Progression › P6 › P6-L10 (the settling panel, the
 * Paper 3 mark scheme — role play 10 · topic conversation 20 — the role play at a cultural centre, the three-question topic conversation, two
 * models, the score record and the reflection). Website panel, mark scheme, prompts, models, fields and exit frames used as published, with
 * waṣl alif shown without a kasra. Teacher-made: the Do Now, the online exam routine (everyone records at once; the teacher examines a rota
 * live), the timing column, the English of the models, the self-marking grid and the routes. */
const P = require('./p6-common');
const { q } = P;

const meta = P.meta('P6')({
  n: 10, fileTitle: 'Mock_Paper_3_Speaking', chip: 'IGCSE Bridge',
  title: 'Mock Examination — Paper 3 Speaking (Full IGCSE Format)', arabic: 'امْتِحَانُ المُحَاكَاةِ — الوَرَقَةُ الثَّالِثَةُ: التَّحَدُّثُ',
  focus: 'Sit the mock Paper 3 in full IGCSE format — a role play (10) and a topic conversation (20) — recorded under exam conditions, then self-mark Communication, Accuracy and Quality of Language against the scheme.',
  icon: 'FaMicrophone', iconSet: 'fa6',
});

const s = P.site('P6-L10');
const B = s.blocks;
const NEXT = { nextCode: 'P6-L11', nextTitle: 'Mock Results, Targeted Revision and Final IGCSE Preparation', nextAr: 'نَتَائِجُ المُحَاكَاةِ وَالمُرَاجَعَةُ المُوَجَّهَةُ' };

const MODEL = (b) => b.model.find(([w]) => w === 'You')[1];

const slides = P.bridgeLesson('P6-L10', {
  site: s, next: NEXT,
  plan: '0–1 Welcome · 1–2 Map · 2–7 Do Now + answers · 7–8 Objectives · 8–11 Before you speak + the routine · 11–13 The mark scheme · 13–20 PART 1: role play (recorded) · 20–30 PART 2: topic conversation (recorded) · 30–44 Listen back and self-mark · 44–48 The two models · 48–54 Record scores, reflection · 54–58 Self-check + preparation. Live examining: the teacher examines 3–4 students in full during the lesson and the rest of the class across the following week.',
  source: 'The website P6-L10: the panel “Before you speak”, the Paper 3 mark scheme (role play 10 · topic conversation 20), Part 1 role play at a cultural centre (4 prompts, model for prompt 1), Part 2 topic conversation (3 questions, model for question 2), the score record and the reflection “All four mocks complete”.',
  support: `• THE ONLINE SPEAKING MOCK: everyone sits it at the SAME time. Students stay MUTED in Teams and record themselves on a phone or laptop voice recorder. The teacher reads each prompt aloud as the examiner; students answer into their own recording. Recordings are uploaded to the assignment.
• LIVE EXAMINING: during the self-marking time, the teacher examines 3–4 students one at a time with the full paper (camera on, others muted); set a rota for the rest of the class in the following week.
• Routes set the TARGET, not a different paper: Core — a full sentence for every prompt · Develop — opinion + reason + example in every answer · Stretch — a conditional, a subjunctive and a concession across the conversation.
• Anxiety: speaking mocks can be stressful. Remind students the recording is for them; allow a student to re-record once if they freeze completely.`,
  steps: [
    ['donow', 5, 'Retrieval: speaking words and Band 5 structures.', 'اِبْدَأِ الآنَ'],
    ['teach', 5, 'Settle, the routine and the mark scheme.', 'التَّهَيُّؤُ'],
    ['youdo', 17, 'The mock: role play + topic conversation (recorded).', 'الامْتِحَانُ'],
    ['feedback', 18, 'Listen back, self-mark, the two models.', 'صَحِّحْ'],
    ['feedback', 6, 'Scores, reflection, self-check.', 'قَيِّمْ'],
    ['prep', 2, 'Bring all four mock scores.', 'اِسْتَعِدَّ'],
  ],
  doNow: {
    questions: [
      q('What does التَّوْسِيعُ فِي الإِجَابَةِ mean?', ['extending the answer', 'a short answer', 'repeating the question'], 'Prepared at home (P6-L09, from P6-L07).'),
      q('What does لُغَةُ التَّوَقُّفِ وَالتَّفْكِيرِ mean?', ['pause-and-think language', 'silent reading', 'stopping the exam'], 'Prepared at home (P6-L09, from P6-L07).'),
      q('What does التَّحَدُّثُ بِثِقَةٍ mean?', ['speaking with confidence', 'speaking quickly', 'speaking quietly'], 'Prepared at home (P6-L09, from P6-L06).'),
      q('In the role play, one prompt is worth …', ['one Communication mark', 'five marks', 'nothing unless it is perfect'], 'Role play: Communication 6 = one per prompt (P6-L06).'),
      q('Which answer reaches Band 5 in the conversation?', ['opinion + reason + example + a conditional', 'one correct sentence', 'a list of words'], 'Development earns the band (P6-L07).'),
    ],
    keyIdea: { text: 'Role play: precise, not long. Conversation: develop, develop, develop.', ar: 'مُحَفِّزٌ وَاحِدٌ = دَرَجَةٌ · رَأْيٌ + سَبَبٌ + مِثَالٌ' },
    retrieves: 'Questions 1–3 test three of the five speaking words revised at the end of P6-L09. Questions 4–5 retrieve the two different rules of Paper 3: precision in the role play (P6-L06) and development in the conversation (P6-L07).',
  },
  routes: {
    core: ['I can answer every role-play prompt with a full sentence.', 'I can keep speaking for each conversation question.'],
    develop: ['I can develop each answer with opinion, reason and example.', 'I can recover from a pause with a pause-and-think phrase.'],
    stretch: ['I can use a conditional, a subjunctive and a concession.', 'I can self-mark accurately against the scheme.'],
  },
  body: [
    P.panel(B[0], {
      min: 3, eyebrow: 'Teach · before you speak (website) · the online routine', ar: 'التَّهَيُّؤُ الذِّهْنِيُّ',
      points: [...B[0].body.map(P.flat), 'Today: stay muted in Teams; record yourself on your phone or laptop; answer each prompt when I read it.'],
      exHead: 'THE ROUTINE (TEACHER)',
      examples: [
        { ar: '١. اِبْدَأِ التَّسْجِيلَ', en: '1. Start your recording — say your name and the date.' },
        { ar: '٢. اِسْتَمِعْ ثُمَّ أَجِبْ', en: '2. Listen to my prompt, then answer straight away.' },
        { ar: '٣. لَا صَمْتَ', en: '3. No silence: use a pause-and-think phrase.' },
      ],
      notes: 'SETTLE (3 min) — read the website panel slowly; give 20 seconds of quiet to recall “the Arabic sentence you are most proud of”. Test that every student can record before you begin.',
    }),
    P.markScheme(B[1], {
      min: 2, title: 'The Paper 3 mark scheme: 30 marks', ar: 'مِعْيَارُ الوَرَقَةِ الثَّالِثَةِ',
      foot: 'Role play: precise, not long. Topic conversation: develop every answer.',
      notes: 'TEACH (2 min) — the website mark scheme: Role play 10 (Communication 6 + Accuracy 4) · Topic conversation 20 (Communication 15 + Quality of Language 5).',
    }),
    P.speakTask(B[2], {
      min: 7, eyebrow: 'Mock · Paper 3 · Part 1 — role play (10 marks) · about 5 minutes', title: 'Part 1 — Role play at a cultural centre', ar: 'تَمْثِيلُ الدَّوْرِ', sHead: 'Time to answer',
      starts: ['30–40 seconds', '30–40 seconds', '30–40 seconds', '30–40 seconds'], ssize: 13,
      foot: 'Marks (website): Communication 6 · Accuracy 4. One prompt = one mark — a full, relevant sentence each time.',
      notes: 'EXAMINER SCRIPT — read each prompt as a question, then wait 30–40 seconds: (1) أَهْلًا بِكَ فِي المَرْكَزِ الثَّقَافِيِّ. عَرِّفْنَا بِنَفْسِكَ وَبِاهْتِمَامَاتِكَ. (2) مَاذَا تُرِيدُ أَنْ تَعْرِفَ عَنْ أَنْشِطَتِنَا؟ (3) هَلْ عِنْدَكَ اقْتِرَاحٌ لِنَشَاطٍ جَدِيدٍ؟ مَا فَائِدَتُهُ؟ (4) مَتَى تُرِيدُ أَنْ تُسَجِّلَ؟ Prompts 3 and 4 name the structure (a subjunctive trigger · a conditional).',
    }),
    P.speakTask(B[3], {
      min: 10, eyebrow: 'Mock · Paper 3 · Part 2 — topic conversation (20 marks) · about 7 minutes', title: 'Part 2 — Topic conversation', ar: 'المُحَادَثَةُ المَوْضُوعِيَّةُ', sHead: 'Time to answer',
      meanings: ['What is the biggest social challenge facing young people today, and why? (opinion · reason · example)', 'Does technology deepen isolation or reduce it? (concede, then refute)', 'If you were in charge of education, what would you change? (lau …)'],
      starts: ['about 2 minutes', 'about 2 minutes', 'about 2 minutes'], ssize: 13,
      foot: 'Marks (website): Communication 15 (5 per question) · Quality of Language 5. Develop every answer: four or five sentences.',
      notes: 'EXAMINER: read each question twice, then allow about 2 minutes. If a student stops early in a live examination, prompt once: لِمَاذَا؟ · هَلْ عِنْدَكَ مِثَالٌ؟ — as the real examiner may.',
    }),
    {
      type: 'formsTable', stage: 'feedback', min: 12, eyebrow: 'Feedback · listen back and self-mark', title: 'Listen to your recording and mark it', ar: 'قَيِّمْ تَسْجِيلَكَ', ltr: true,
      cols: [{ label: 'Listen for …', w: 5.6 }, { label: 'Marks', w: 1.6 }, { label: 'My mark', w: 1.6 }, { label: 'Evidence (a phrase I said)', w: 3.53 }],
      rows: [
        { core: true, cells: ['Role play — each prompt answered with a full, relevant sentence', '/6', '', ''] },
        { core: true, cells: ['Role play — accuracy across the four answers (4 = consistently accurate)', '/4', '', ''] },
        { cells: ['Conversation — each answer developed: opinion, reason, example (5 per question)', '/15', '', ''] },
        { cells: ['Conversation — complex structures: two tenses, a conditional, a subjunctive', '/5', '', ''] },
      ],
      foot: 'Give yourself credit for a correct trigger or conditional even if a vowel slipped — the website’s top-band standard is consistent use of complex structures.',
      notes: 'SELF-MARK (12 min) — students listen back to their own recording with headphones and complete the grid. Meanwhile the TEACHER examines 3–4 students live (one at a time, camera on). Website mark-scheme note: credit any correct trigger or conditional even with an imperfect vowel.',
    },
    {
      type: 'modelAnswer', stage: 'feedback', min: 3, eyebrow: 'Feedback · the website models', title: 'What full marks sound like', ar: 'نَمُوذَجُ الإِجَابَةِ',
      text: `${MODEL(B[2])}\n\n${MODEL(B[3])}`,
      en: 'Role play, prompt 1: “My name is Sami; I love reading and football, and I would like to learn new skills.” — a full sentence. Conversation, question 2: “It is true that technology brings the distant near; however, it may push the near away. If we used it consciously, we would achieve balance.” — concession-refutation + a Type 2 conditional.',
      find: ['وَأَرْغَبُ فِي', 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ', 'لَوِ اسْتَخْدَمْنَاهَا', 'لَحَقَّقْنَا'],
      notes: 'MODELS (3 min) — website models for role-play prompt 1 and conversation question 2. Note the elegant contrast تُقَرِّبُ البَعِيدَ … تُبْعِدُ القَرِيبَ (brings the far near … pushes the near away) — students may borrow it.',
    },
    P.fields(B[4], {
      min: 3, stage: 'feedback', eyebrow: 'Feedback · score · target (website)', ar: 'سَجِّلْ نَتِيجَتَكَ', head: 'Record', ex: 'Example', lw: 4.4, ew: 4.4,
      examples: ['7/10', '14/20', 'a conditional (lau) and a subjunctive (yataṭallabu an)', 'stopping after two sentences → ask myself “why?”'],
      core: [0, 1],
      foot: 'Paper 3 total: role play + conversation = …/30. The teacher confirms your mark from your recording. Bring all four mock scores to P6-L11.',
      notes: 'SCORES (3 min) — website fields; self-marks are moderated by the teacher from the uploaded recordings.',
    }),
    P.reflect(B[5], {
      min: 2, eyebrow: 'Feedback · all four mocks complete (website)', ar: 'التَّأَمُّلُ', can: 'where I developed my answers best', next: 'what I will practise before the real exam',
      modelCan: 'the question on technology', modelNext: 'the role play — negotiating',
      foot: 'All four mocks complete — that is a real achievement. Well done.',
      notes: 'REFLECTION (2 min) — website frames. Celebrate: the class has now sat every IGCSE paper under exam conditions.',
    }),
  ],
  selfCheck: s.success.map((t, i) => ({ route: ['core', 'core', 'stretch', 'develop'][i], text: t })),
  prep: {
    words: [['المُرَاجَعَةُ', 'revision', 'v. رَاجَعَ'], ['نِقَاطُ القُوَّةِ', 'strengths', 'sg. نُقْطَةُ قُوَّةٍ'], ['نِقَاطُ الضَّعْفِ', 'weaknesses', 'sg. نُقْطَةُ ضَعْفٍ'], ['الأَخْطَاءُ الشَّائِعَةُ', 'common errors', 'sg. خَطَأٌ شَائِعٌ'], ['خُطَّةُ المُرَاجَعَةِ', 'revision plan', 'pl. خُطَطٌ']],
    questionEn: 'Which of the four papers is your strongest, and which needs the most work?',
    questionAr: 'أَقْوَى وَرَقَةٍ عِنْدِي هِيَ ______ ، وَأَحْتَاجُ إِلَى مُرَاجَعَةِ ______ .',
    homework: {
      core: 'Collect your four mock scores in one place; learn the five words.',
      develop: 'Collect your scores and list your three most common errors; learn the five words.',
      stretch: 'Collect your scores, list your errors, and draft a two-week revision plan; learn the five words.',
    },
    wordsSource: 'P6-L11 has no vocabulary list: these five revision words are teacher-chosen for the results lesson.',
  },
  remember: 'Remember: role play — precise, not long; topic conversation — develop every answer. All four mocks are done: bring your scores to P6-L11.',
});

module.exports = { meta, slides };
