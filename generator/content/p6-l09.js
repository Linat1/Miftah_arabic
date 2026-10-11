'use strict';
/* P6-L09 · Mock Examination — Papers 2 and 4 (Reading and Writing) — website: Pathways › Progression › P6 › P6-L09 (exam conditions, Paper 2:
 * three texts — notices · R1–R4 + Q4 gap-fill · R3 + Q5 cross-text — then Paper 4: Q1 directed writing (formal email) and Q2 extended writing
 * (three essay titles), the score record and the reflection). Website panel, texts, questions, tasks, checklists, models, fields and exit frames
 * used as published, with waṣl alif shown without a kasra and لِكَيْ always written with its sukūn. Teacher-made: the Do Now, the short Arabic
 * gap-fill options (the website mixes English labels and a split لَـ into them), the English translations of the models, the timing plan for a
 * 60-minute lesson and the routes. */
const P = require('./p6-common');
const { q } = P;

const meta = P.meta('P6')({
  n: 9, fileTitle: 'Mock_Papers_2_and_4', chip: 'IGCSE Bridge',
  title: 'Mock Examination — Papers 2 and 4 (Reading and Writing)', arabic: 'امْتِحَانُ المُحَاكَاةِ — الوَرَقَتَانِ الثَّانِيَةُ وَالرَّابِعَةُ',
  focus: 'Sit the mock Paper 2 Reading and Paper 4 Writing under exam conditions: prove every reading answer from the text, write Q1 in the right register in under 20 minutes, and give Q2 its full architecture.',
  icon: 'FaFilePen', iconSet: 'fa6',
});

const s = P.site('P6-L09');
const B = s.blocks;
const NEXT = { nextCode: 'P6-L10', nextTitle: 'Mock Examination — Paper 3 Speaking (Full IGCSE Format)', nextAr: 'امْتِحَانُ المُحَاكَاةِ — الوَرَقَةُ الثَّالِثَةُ: التَّحَدُّثُ' };

const EXAM = 'MOCK — EXAM CONDITIONS: cameras on, mics muted, chat closed, no notes or dictionaries. Reading answers on paper (1A, 2C …); writing on paper or in a blank document with spell-check OFF. Photograph / upload at the end.';
const noAns = (arr) => arr.map((x) => ({ ...x, answers: false }));
const R = { stage: 'youdo', mock: true, label: 'Mock', readMin: 2 };
const T1 = noAns(P.quiz(B[1], { ...R, min: 4, seed: 91, notes: `${EXAM}\nTEXT 1 (website) — notices, 4 factual questions.` }));
const T2 = noAns(P.quiz(B[2], {
  ...R, min: 7, seed: 93,
  options: {
    'R4 gap-fill — صَحِيحٌ أَنَّ الحَيَاةَ ___ . Which form?': ['مَشْغُولَةٌ', 'تَكُونَ مَشْغُولَةً', 'كَانَتْ مَشْغُولَةً'],
    'R4 gap-fill — يَتَطَلَّبُ الأَمْرُ أَنْ ___ الأُسَرُ وَقْتًا. Which form?': ['تُخَصِّصَ', 'تُخَصِّصُ', 'خَصَّصَتْ'],
    'R4 gap-fill — لَوْ قَرَأَ كُلُّ طِفْلٍ كِتَابًا، ___ مَدَارِكُهُ. Which form?': ['لَاتَّسَعَتْ', 'سَتَتَّسِعُ', 'تَتَّسِعُ'],
  },
  notes: `${EXAM}\nTEXT 2 (website) — R1–R3 and three Q4-style gap-fills, 6 marks. The gap-fill options are shortened to the Arabic forms only (the website adds English labels inside them).`,
}));
const T3 = noAns(P.quiz(B[3], { ...R, min: 7, seed: 95, notes: `${EXAM}\nTEXT 3 (website) — R3 analysis and Q5 cross-text matching across all three texts, 6 marks.` }));

const [Q1, Q1M] = P.writing(B[4], {
  min: 20, chip: 'MOCK · PAPER 4 · Q1', eyebrow: 'Mock · Paper 4 · Q1 — directed writing (15 marks) · 20 minutes', title: 'Q1: a formal email to the principal', ar: 'الكِتَابَةُ المُوَجَّهَةُ',
  task: 'Write a formal email (130–140 words) to your school principal proposing a new after-school club. Include: the idea, why it is needed, what it requires, and a request for approval. Register: formal.',
  phrases: [['حَضْرَةَ مُدِيرِ المَدْرَسَةِ المُحْتَرَمِ،', 'Dear Principal, (formal opening)'], ['أَتَشَرَّفُ بِأَنْ أَقْتَرِحَ …', 'I am honoured to propose …'], ['وَتَفَضَّلُوا بِقَبُولِ الاحْتِرَامِ.', 'Yours respectfully (formal closing)']],
  bankHead: 'EXAM FORMULAS (ALLOWED — LEARNT IN P6-L04)',
  notes: `${EXAM}\nQ1 — 20 minutes, then move on even if unfinished. Core students may keep the three formulas on screen (they were learnt in P6-L04); Develop / Stretch: hide them.`,
  modelEyebrow: 'Feedback · Paper 4 Q1 · the website model', modelTitle: 'Q1: what the examiner wants to see',
  en: '“Dear Principal, I am honoured to propose setting up a coding club after school. It is noted that digital skills have become essential. It is true that time is limited; however, one hour a week is enough. It is necessary that the school provides a room and a supervisor. If you agree, many students will benefit. I hope you will kindly approve; please accept my respect.”',
  find: ['أَتَشَرَّفُ بِأَنْ', 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ', 'يَتَطَلَّبُ الأَمْرُ أَنْ', 'إِذَا وَافَقْتُمْ'],
  modelNotes: 'The website model is about 60 words — it shows the ARCHITECTURE (formal opening · idea · need · requirement · request · formal close). A full answer needs 130–140 words: develop the need and the requirement with one more sentence each.',
});
const [Q2, Q2M] = P.writing(B[5], {
  min: 35, chip: 'MOCK · PAPER 4 · Q2', eyebrow: 'Mock · Paper 4 · Q2 — extended writing (15 marks) · 35 minutes', title: 'Q2: an argumentative essay — choose ONE title', ar: 'الكِتَابَةُ المُمْتَدَّةُ',
  task: 'Choose ONE title and write an argumentative essay of 130–150 words. Plan for 4 minutes, write for 26, check for 5.',
  phrases: [['السَّفَرُ أَفْضَلُ مُعَلِّمٍ — هَلْ تُوَافِقُ؟', '(A) Travel is the best teacher — do you agree?'], ['المُدُنُ الكُبْرَى أَفْضَلُ لِلْعَيْشِ مِنَ القُرَى — هَلْ تُوَافِقُ؟', '(B) Big cities are better to live in than villages — do you agree?'], ['عَلَى الشَّبَابِ أَنْ يَخْدُمُوا مُجْتَمَعَهُمْ قَبْلَ أَنْفُسِهِمْ — هَلْ تُوَافِقُ؟', '(C) Young people should serve their community before themselves — do you agree?']],
  bankHead: 'THE THREE TITLES (WEBSITE)',
  notes: `${EXAM}\nQ2 — 35 minutes. TIMING IN A 60-MINUTE LESSON: Paper 2 (≈20 min) + Q1 (20 min) fit in the lesson; Q2 is sat as TIMED HOMEWORK under the same conditions (camera-on study session, or a 35-minute timer at home) — or run this as a double lesson. The Q2 model is shown in P6-L10’s Do Now or when the essays are returned.`,
  modelEyebrow: 'Feedback · Paper 4 Q2 · the website model (title A)', modelTitle: 'Q2: the full essay architecture',
  en: '“It is noted that travel is one of the greatest sources of learning. Educators have stressed that contact with cultures develops awareness. It is true that books teach a great deal; however, direct experience leaves a deeper mark. If every student travelled once, their view of the world would change. If opportunities are provided, young people will learn tolerance. Based on the above, we should encourage educational travel so that we build an open-minded generation.”',
  find: ['أَكَّدَ التَّرْبَوِيُّونَ أَنَّ', 'لَوْ سَافَرَ … لَتَغَيَّرَتْ', 'إِذَا أُتِيحَتِ الفُرَصُ', 'وَبِنَاءً عَلَى مَا سَبَقَ'],
  modelNotes: 'The website model is about 65 words: thesis · cited evidence · concession-refutation · Type 2 and Type 1 conditionals · conclusion with a subjunctive and لِكَيْ. A full answer (130–150 words) adds one example to each body point.',
});

const slides = P.bridgeLesson('P6-L09', {
  site: s, next: NEXT,
  plan: '0–1 Welcome · 1–2 Map · 2–6 Do Now + answers · 6–7 Objectives · 7–9 Exam conditions · 9–29 Paper 2: Text 1 · Text 2 · Text 3 · 29–49 Paper 4 Q1 (20 min) · 49–55 Mark Paper 2 + the Q1 model · 55–57 Scores, reflection · 57–58 Preparation. Paper 4 Q2 (35 min) is timed homework — or use a double lesson.',
  source: 'The website P6-L09: the panel “Before you begin”, Paper 2 Text 1 (notices, 4 marks), Text 2 (R1–R4 + gap-fill, 6 marks), Text 3 (R3 + Q5 cross-text, 6 marks), Paper 4 Q1 (formal email, 15 marks) and Q2 (essay, three titles, 15 marks) with checklists and models, the score record and the reflection.',
  support: `• MOCK EXAM under full conditions: no glossary, no English support during the papers; the routes set the TARGET, not a different paper.
• TIMING: the website timings (Paper 2 ≈ 45 min · Paper 4 = 60 min) are longer than one lesson. This deck runs Paper 2 (the 16-mark version, ≈ 20 min) and Q1 (20 min) in class; Q2 (35 min) is timed homework or the second half of a double lesson.
• Answers and models come TOGETHER at the end, as in a real exam. Students mark Paper 2 in a different colour; Paper 4 is teacher-marked (15 + 15).
• Access arrangements: follow each student’s plan (extra time, a reader for the rubric).`,
  steps: [
    ['donow', 4, 'Retrieval: reading words and register.', 'اِبْدَأِ الآنَ'],
    ['teach', 2, 'Exam conditions and timing.', 'ظُرُوفُ الامْتِحَانِ'],
    ['youdo', 20, 'Paper 2 Reading: three texts.', 'القِرَاءَةُ'],
    ['youdo', 20, 'Paper 4 Q1: a formal email.', 'الكِتَابَةُ'],
    ['feedback', 8, 'Mark Paper 2, the Q1 model, scores.', 'صَحِّحْ'],
    ['prep', 2, 'Q2 as timed homework; get ready for speaking.', 'اِسْتَعِدَّ'],
  ],
  doNow: {
    min: 3,
    questions: [
      q('What does الأَدِلَّةُ النَّصِّيَّةُ mean?', ['textual evidence', 'text messages', 'the final text'], 'Prepared at home (P6-L08, from P6-L03).'),
      q('What does اسْتِنْتَاجُ الكَلِمَاتِ المَجْهُولَةِ mean?', ['deducing unknown words', 'looking up words', 'learning new words'], 'Prepared at home (P6-L08, from P6-L03).'),
      q('What does المَعْنَى العَامُّ mean?', ['general meaning (R1)', 'factual details (R2)', 'the writer’s style (R3)'], 'Prepared at home (P6-L08, from P6-L03).'),
      q('Which opening suits a formal email to a principal?', ['حَضْرَةَ مُدِيرِ المَدْرَسَةِ المُحْتَرَمِ،', 'مَرْحَبًا يَا صَدِيقِي!', 'أَهْلًا وَسَهْلًا،'], 'Register from the first line (P6-L04).'),
      q('How long should Q1 take, so that Q2 has enough time?', ['about 20 minutes', 'about 40 minutes', 'about 5 minutes'], 'Q1 ≈ 20 · Q2 ≈ 35 · check 5.'),
    ],
    keyIdea: { text: 'Prove every reading answer from the text; write in the right register from the first line.', ar: 'أَثْبِتْ إِجَابَتَكَ مِنَ النَّصِّ.' },
    retrieves: 'Questions 1–3 test three of the five reading words revised at the end of P6-L08. Questions 4–5 retrieve Paper 4 register and timing (P6-L04 / P6-L05).',
  },
  routes: {
    core: ['I can answer every reading question — no blanks.', 'I can open and close Q1 formally.'],
    develop: ['I can prove every reading answer from the text.', 'I can finish Q1 in 20 minutes.'],
    stretch: ['I can choose the right form in every gap-fill.', 'I can give Q2 its full architecture.'],
  },
  body: [
    P.panel(B[0], {
      min: 2, eyebrow: 'Teach · exam conditions (website) · timing', ar: 'ظُرُوفُ الامْتِحَانِ',
      points: [...B[0].body.map(P.flat), 'Today: Paper 2 and Q1 in class; Q2 is timed homework (35 minutes) under the same conditions.'],
      exHead: 'THE TIMING',
      examples: [
        { ar: 'القِرَاءَةُ: ٢٠ دَقِيقَةً', en: 'Paper 2 — 3 texts · 16 marks' },
        { ar: 'السُّؤَالُ الأَوَّلُ: ٢٠ دَقِيقَةً', en: 'Paper 4 Q1 — a formal email · 15 marks' },
        { ar: 'السُّؤَالُ الثَّانِي: ٣٥ دَقِيقَةً', en: 'Paper 4 Q2 — an essay · 15 marks (homework)' },
      ],
      notes: 'TEACH (2 min) — the website panel plus the timing plan. Students write the three timings at the top of their paper.',
    }),
    T1, T2, T3, Q1,
    P.mockAnswers([...T1, ...T2, ...T3]),
    Q1M, Q2, Q2M,
    P.fields(B[6], {
      min: 2, stage: 'feedback', eyebrow: 'Feedback · score · target (website)', ar: 'سَجِّلْ نَتِيجَتَكَ', head: 'Record', ex: 'Example', lw: 5.2, ew: 3.2,
      examples: ['12/16 → 33.75/45', '10/15', '(after marking)', 'Q1 ran over → plan in 2 minutes'],
      core: [0, 1],
      foot: 'Convert Paper 2: raw × 2.8125 (e.g. 12/16 → 33.75 ≈ 34/45). Paper 4 scores come back after teacher marking. Bring this record to P6-L11.',
      notes: 'SCORES (2 min) — website fields. Paper 2 raw is out of 16 (4 + 6 + 6); the conversion to /45 is ×45/16 = ×2.8125. Collect scores privately.',
    }),
    P.reflect(B[7], {
      min: 2, eyebrow: 'Feedback · Papers 2 and 4 done (website)', ar: 'التَّأَمُّلُ', can: 'where my register / architecture was strongest', next: 'what I will improve for the real exam',
      modelCan: 'the formal opening and closing of Q1', modelNext: 'timing — Q1 under 20 minutes',
      foot: 'Papers 2 and 4 done — well done for sitting them under real conditions.',
      notes: 'REFLECTION (2 min) — website frames.',
    }),
  ],
  selfCheck: s.success.map((t, i) => ({ route: ['core', 'develop', 'stretch', 'develop'][i], text: t })),
  prep: {
    words: [['تَمْثِيلُ الدَّوْرِ', 'role play', '—'], ['المُحَادَثَةُ المَوْضُوعِيَّةُ', 'topic conversation', '—'], ['التَّوْسِيعُ فِي الإِجَابَةِ', 'extending the answer', '—'], ['لُغَةُ التَّوَقُّفِ وَالتَّفْكِيرِ', 'pause-and-think language', '—'], ['التَّحَدُّثُ بِثِقَةٍ', 'speaking with confidence', '—']],
    questionEn: 'Write three emergency sentences you will use in the speaking mock.',
    questionAr: 'يُشَارُ إِلَى أَنَّ ______ ، وَإِذَا ______ ، سَوْفَ ______ .',
    homework: {
      core: 'Sit Q2 in 35 minutes (title A or C); revise the five speaking words.',
      develop: 'Sit Q2 in 35 minutes with the full checklist; revise the five speaking words.',
      stretch: 'Sit Q2 in 35 minutes, then check it against the four model chips; revise the five speaking words.',
    },
    wordsSource: 'P6-L10 is a speaking mock with no new vocabulary: these five words are revised from the website P6-L06 and P6-L07.',
  },
  remember: 'Remember: prove every reading answer from the text; write in the right register from the first line; Q1 under 20 minutes so that Q2 gets its full architecture.',
});

module.exports = { meta, slides };
