'use strict';
/* P6-L08 · Mock Examination — Paper 1 Listening (Full Exam Conditions) — website: Pathways › Progression › P6 › P6-L08 (exam conditions, three
 * listening texts in the three Paper 1 formats — multiple choice 8 · matching 6 · select the supported statement 6 — the score record and the
 * post-mock reflection). Website panel, scripts, questions, fields and exit frames used as published, with waṣl alif shown without a kasra and
 * لِكَيْ always written with its sukūn. Teacher-made: the Do Now, the strategy checklist, the exam-room routine, the routes, and the order of the
 * deck (all three texts first, the answers together at the end, as in a real paper). */
const P = require('./p6-common');
const { q } = P;

const meta = P.meta('P6')({
  n: 8, fileTitle: 'Mock_Paper_1_Listening', chip: 'IGCSE Bridge',
  title: 'Mock Examination — Paper 1 Listening (Full Exam Conditions)', arabic: 'امْتِحَانُ المُحَاكَاةِ — الوَرَقَةُ الأُولَى: الاسْتِمَاعُ',
  focus: 'Sit a full mock Paper 1 under exam conditions — three texts, three formats, every listening strategy at once — then mark it, convert the score to /45 and choose one priority for the real exam.',
  icon: 'FaHeadphones', iconSet: 'fa6',
});

const s = P.site('P6-L08');
const B = s.blocks;
const NEXT = { nextCode: 'P6-L09', nextTitle: 'Mock Examination — Papers 2 and 4 (Reading and Writing)', nextAr: 'امْتِحَانُ المُحَاكَاةِ — الوَرَقَتَانِ الثَّانِيَةُ وَالرَّابِعَةُ' };

const EXAM = 'MOCK — EXAM CONDITIONS: cameras on, mics muted, chat closed, no notes. Students write answers on paper (1A, 2C …) and photograph the sheet into the assignment at the end. Read the script twice at a steady pace with a short pause between readings; no further repetition.';
const noAns = (arr) => arr.map((x) => ({ ...x, answers: false }));
const T1 = noAns(P.quiz(B[1], { per: 8, min: 8, mock: true, stage: 'youdo', label: 'Mock · Paper 1', seed: 81, notes: `${EXAM}\nTEXT 1 (website) — multiple choice, 8 marks. Two minutes to read the questions first.` }));
const T2 = noAns(P.quiz(B[2], { min: 6, mock: true, stage: 'youdo', label: 'Mock · Paper 1', seed: 83, tip: 'Write N / Z / both beside each question.\nListen for the NAME before each line.', notes: `${EXAM}\nTEXT 2 (website) — matching: who says it? 6 marks. Use a different voice for نُورٌ and زَيْدٌ, and say each name clearly.` }));
const T3 = noAns(P.quiz(B[3], { min: 6, mock: true, stage: 'youdo', label: 'Mock · Paper 1', seed: 85, notes: `${EXAM}\nTEXT 3 (website) — select the statement the text supports, 6 marks. Distractors use words from the text but change the meaning.` }));
const ANS = P.mockAnswers([...T1, ...T2, ...T3]);

const slides = P.bridgeLesson('P6-L08', {
  site: s, next: NEXT,
  plan: '0–1 Welcome · 1–2 Map · 2–8 Do Now + answers · 8–9 Objectives · 9–12 Exam conditions + the six strategies · 12–40 THE MOCK: Text 1 · Text 2 · Text 3 (each read twice) · 40–48 Mark together · 48–53 Score and convert · 53–56 Reflection + self-check · 56–58 Preparation.',
  source: 'The website P6-L08: the panel “Before you begin”, three listening texts with scripts (a doctor on a balanced life — 8 multiple-choice questions · two friends on future plans — 6 matching questions · an official on a social programme — 6 select-the-statement questions), the score record (raw /20 → /45) and the post-mock reflection.',
  support: `• MOCK EXAM: the website asks for full exam conditions — no glossary, no read-along and no English support during the paper. The scripts are in the speaker notes; the teacher reads each one TWICE.
• Routes apply to the TARGET, not the paper: everyone sits the same mock. Core — answer every question (a guess is better than a blank) · Develop — annotate every question before the script · Stretch — use the second reading only to verify.
• Answers are shown TOGETHER after Text 3, as in a real exam. Students mark in a different colour.
• Extra time / access arrangements: follow each student’s plan (e.g. a third reading for a student with a listening-access arrangement).`,
  steps: [
    ['donow', 6, 'Retrieval: the listening strategies.', 'اِبْدَأِ الآنَ'],
    ['teach', 3, 'Exam conditions and the six strategies.', 'ظُرُوفُ الامْتِحَانِ'],
    ['youdo', 28, 'The mock: three texts, each read twice.', 'الامْتِحَانُ'],
    ['feedback', 13, 'Mark together, score and convert.', 'صَحِّحْ'],
    ['feedback', 3, 'Reflection and self-check.', 'قَيِّمْ'],
    ['prep', 2, 'Get ready for the reading and writing mock.', 'اِسْتَعِدَّ'],
  ],
  doNow: {
    questions: [
      q('What does قِرَاءَةُ الأَسْئِلَةِ مُسْبَقًا mean?', ['reading the questions in advance', 'reading the answers aloud', 'asking a question'], 'Prepared at home (P6-L07, from P6-L02).'),
      q('What does مُشَتِّتَاتُ الاسْتِمَاعِ mean?', ['listening distractors', 'listening strategies', 'listening texts'], 'Prepared at home (P6-L07, from P6-L02).'),
      q('What does التَّحَقُّقُ فِي الاسْتِمَاعِ الثَّانِي mean?', ['verifying on the second listen', 'listening a second time for fun', 'a second question'], 'Prepared at home (P6-L07, from P6-L02).'),
      q('You hear صَحِيحٌ أَنَّ … غَيْرَ أَنَّ … Where is the speaker’s real view?', ['after غَيْرَ أَنَّ', 'after صَحِيحٌ أَنَّ', 'in neither part'], 'The concession comes first; the view follows ghayra anna.'),
      q('You hear لَوْ دَرَسْتُ … لَنَجَحْتُ — what kind of sentence is it?', ['an unreal (Type 2) conditional', 'a real (Type 1) conditional', 'a question'], 'lau + past, la- + past = unreal.'),
    ],
    keyIdea: { text: 'Read, label, listen for gist, listen to verify — and never leave a blank.', ar: 'اقْرَأْ ← تَنَبَّأْ ← اسْتَمِعْ ← تَحَقَّقْ' },
    retrieves: 'Questions 1–3 test three of the five listening words revised at the end of P6-L07. Questions 4–5 retrieve the two signals that most often decide a Paper 1 answer: the concession (the view comes after ghayra anna) and the unreal conditional.',
  },
  routes: {
    core: ['I can answer every question — no blanks.', 'I can record my raw score.'],
    develop: ['I can annotate each question before the script.', 'I can convert my score to /45.'],
    stretch: ['I can use the second reading to verify, not to over-change.', 'I can name my priority format and a strategy to fix it.'],
  },
  body: [
    P.panel(B[0], {
      min: 3, eyebrow: 'Teach · exam conditions (website) · the six strategies', ar: 'ظُرُوفُ الامْتِحَانِ',
      points: [...B[0].body.map(P.flat), 'Never leave a blank: a guess may score; a blank never does.'],
      exHead: 'THE SIX STRATEGIES (P6-L02)',
      examples: [
        { ar: 'قِرَاءَةُ الأَسْئِلَةِ مُسْبَقًا · التَّنَبُّؤُ بِالمُحْتَوَى', en: '1–2: read the questions first · predict the content' },
        { ar: 'الاسْتِمَاعُ الأَوَّلُ لِلْفَهْمِ العَامِّ · التَّرْكِيزُ عَلَى الإِشَارَاتِ', en: '3–4: first listen for gist · listen for the signals (لَوْ · غَيْرَ أَنَّ)' },
        { ar: 'الحَذَرُ مِنَ المُشَتِّتَاتِ · التَّحَقُّقُ فِي الاسْتِمَاعِ الثَّانِي', en: '5–6: beware of distractors · verify on the second listen' },
      ],
      notes: 'TEACH (3 min) — the website panel plus the six strategies from P6-L02. Then set up the exam room: paper ready, numbers 1–20 written down the margin, cameras on, chat closed.',
    }),
    T1, T2, T3,
    ANS,
    P.fields(B[4], {
      min: 5, stage: 'feedback', eyebrow: 'Feedback · score · convert · target (website)', ar: 'سَجِّلْ نَتِيجَتَكَ', head: 'Record', ex: 'Example', lw: 4.8, ew: 3.6,
      examples: ['6/8', '4/6', '5/6', '15/20 → 33.75/45', 'matching — listen for the names'],
      core: [0, 1, 2, 3],
      foot: 'Convert: raw × 2.25. Example: 15 × 2.25 = 33.75 ≈ 34/45. Bring this record to P6-L11.',
      notes: 'SCORE (5 min) — website fields. Core students may use a calculator for the conversion. Collect the scores privately (form or private chat); do not compare publicly.',
    }),
    P.reflect(B[5], {
      min: 2, eyebrow: 'Feedback · Paper 1 done (website)', ar: 'التَّأَمُّلُ', can: 'my strongest format today', next: 'what I will improve before the real exam',
      modelCan: 'multiple choice', modelNext: 'matching — write the names first',
      extra: [['الاسْتِرَاتِيجِيَّةُ الَّتِي سَاعَدَتْنِي أَكْثَرَ هِيَ ______ .', 'The strategy that helped me most was …', 'قِرَاءَةُ الأَسْئِلَةِ مُسْبَقًا']],
      foot: 'Paper 1 done — well done for sitting it under real conditions.',
      notes: 'REFLECTION (2 min) — website frames. Praise the effort of sitting a full paper; the score is information, not a judgement.',
    }),
  ],
  selfCheck: [
    { route: 'core', text: 'I answered every question — no blanks.' },
    { route: 'core', text: 'I know my raw score out of 20.' },
    { route: 'develop', text: 'I annotated each question before the script.' },
    { route: 'stretch', text: 'I used the second reading to verify, not to over-change.' },
    { route: 'stretch', text: 'I know my priority format for the real exam.' },
  ],
  prep: {
    words: [['المَعْنَى العَامُّ', 'general meaning (R1)', '—'], ['التَّفَاصِيلُ الوَاقِعِيَّةُ', 'factual details (R2)', 'sg. تَفْصِيلٌ'], ['الأَدِلَّةُ النَّصِّيَّةُ', 'textual evidence', 'sg. دَلِيلٌ'], ['اسْتِنْتَاجُ الكَلِمَاتِ المَجْهُولَةِ', 'deducing unknown words', '—'], ['الدِّقَّةُ فِي الاخْتِيَارِ', 'accuracy in selection', '—']],
    questionEn: 'What will you do first when you open the reading paper?',
    questionAr: 'سَأَقْرَأُ ______ أَوَّلًا، ثُمَّ سَأَبْحَثُ عَنْ ______ .',
    homework: {
      core: 'Re-listen to Text 1 (teacher recording) and correct your answers; revise the five reading words.',
      develop: 'Rewrite the three scripts’ signal phrases (لَوْ · غَيْرَ أَنَّ · يَتَطَلَّبُ) in your book; revise the five reading words.',
      stretch: 'Explain in writing why each wrong answer was wrong; revise the five reading words.',
    },
    wordsSource: 'P6-L09 is a mock with no new vocabulary: these five words are revised from the website P6-L03 (reading strategies).',
  },
  remember: 'Remember: the score is information, not a judgement. Read, label, listen for gist, verify — and never leave a blank.',
});

module.exports = { meta, slides };
