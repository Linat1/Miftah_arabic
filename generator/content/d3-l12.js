'use strict';
/*
 * D3-L12 · Review and Unit Assessment: Work and Careers (60 marks: listening 20 · reading 10 · writing 20 · speaking 10)
 * Website: Pathways › Development › D3 › Lesson 12. The complete D3 language vault, a ten-question cumulative grammar laboratory,
 * Part A listening (a summer-training advert from Al-Nour Technology Company: 10 questions × 2 marks), Part B reading (Amal’s
 * career-plan article: 10 questions), Part C writing (five-field application profile 5 + 120–140-word career article or formal
 * email 15: task / range / accuracy), Part D speaking (interview + topic conversation 10) and the D3 reflection / D4 target.
 * All scripts, texts, questions, tasks and marks are the website’s.
 */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D3')({
  n: 12, fileTitle: 'Review_and_Unit_Assessment_Work_and_Careers', chip: 'D3 Assessment',
  title: 'Review and Unit Assessment: Work and Careers', arabic: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ',
  focus: 'Show what you can understand and produce about jobs, workplaces, skills, future plans, training routes, applications and work values — then choose one precise next step for D4.',
  icon: 'FaClipboardCheck', iconSet: 'fa6', level: 'Development · end of unit D3',
});
const NEXT = { nextCode: 'D4-L01', nextTitle: 'The Natural World — Environment and Climate', nextAr: 'العَالَمُ الطَّبِيعِيُّ' };
const SITE = 'Pathways › Development › D3 Work and Careers › D3-L12';
const LIS = 'تُعْلِنُ شَرِكَةُ النُّورِ التِّقْنِيَّةُ عَنْ فُرْصَةِ تَدْرِيبٍ صَيْفِيٍّ لِلطُّلَّابِ. يُشْتَرَطُ إِجَادَةُ الحَاسُوبِ وَالقُدْرَةُ عَلَى العَمَلِ ضِمْنَ فَرِيقٍ. سَتَبْدَأُ الفُرْصَةُ فِي الثَّانِي مِنْ أَغُسْطُسَ، لَا فِي الثَّانِي عَشَرَ مِنْهُ، وَسَتَسْتَمِرُّ أَرْبَعَةَ أَسَابِيعَ. تُقَدِّمُ الشَّرِكَةُ تَدْرِيبًا وَشَهَادَةً، وَلٰكِنَّهَا لَا تُقَدِّمُ رَاتِبًا. عَلَى المُتَقَدِّمِينَ إِرْسَالُ سِيرَةٍ ذَاتِيَّةٍ قَبْلَ يَوْمِ الخَمِيسِ، وَيَنْبَغِي أَنْ يَكُونُوا مَسْؤُولِينَ وَمُسْتَعِدِّينَ لِلتَّعَلُّمِ.';
const READ = 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ مُهَنْدِسَةَ بِيئَةٍ لِأَنَّنِي أُرِيدُ أَنْ أُسَاهِمَ فِي حَلِّ مُشْكِلَاتِ التَّلَوُّثِ. أَنَا جَيِّدَةٌ فِي العُلُومِ وَالعَمَلِ الجَمَاعِيِّ، وَالدَّلِيلُ عَلَى ذٰلِكَ أَنَّنِي قُدْتُ مَشْرُوعًا مَدْرَسِيًّا عَنْ إِعَادَةِ التَّدْوِيرِ. بَعْدَ التَّخَرُّجِ سَأَدْرُسُ الهَنْدَسَةَ، ثُمَّ سَأَبْحَثُ عَنْ تَدْرِيبٍ عَمَلِيٍّ. عَلَى الرَّغْمِ مِنْ أَنَّ الطَّرِيقَ طَوِيلٌ، فَإِنَّنِي مُسْتَعِدَّةٌ لِلْعَمَلِ بِجِدٍّ.';

const lmcq = (part, qs, seed) => ({
  type: 'mcq', stage: 'ido', min: 5, eyebrow: `Listening · questions ${part} · 2 marks each (website)`, title: `The summer-training advert (${part})`, ar: 'الاِسْتِمَاعُ',
  seed, questions: qs,
  answerSlide: { min: 0, eyebrow: `Listening · questions ${part} · answers`, title: `Questions ${part}: answers`, ar: 'الإِجَابَاتُ' },
  notes: `LISTENING (website Part A, 20 marks: 10 questions × 2). Read the advert twice at natural pace; students answer after the second reading (website: “three listens · final details” — a third listening is allowed).\nSCRIPT: ${LIS}\nPrivate chat: five letters.`,
  answerNotes: 'Mark 2 per correct answer. Website: reveal the script only after the attempt; ask which corrected detail (“the 2nd, not the 12th”) caught people out.',
});
const rmcq = (part, qs, seed) => ({
  type: 'mcq', stage: 'wedo', min: 5, eyebrow: `Reading · questions ${part} · 1 mark each (website)`, title: `Reading questions ${part}`, ar: 'أَسْئِلَةُ القِرَاءَةِ', seed, questions: qs,
  answerSlide: { min: 0, eyebrow: 'Reading · answers · show AFTER the section', title: `Questions ${part}: answers`, ar: 'الإِجَابَاتُ' },
  notes: 'READING (website Part B: “locate · infer · prove”). Keep the text on the previous slide available (flick back or share it in the chat).',
  answerNotes: 'Mark /5. Ask one student to read the evidence phrase aloud (by invitation).',
});

const slides = [
  D.titleSlide({
    n: 12, siteRef: SITE,
    plan: '0–1 Welcome · 1–2 Map · 2–6 Grammar laboratory (not marked) · 6–7 Assessment map · 7–19 Listening (20) · 19–27 Reading (10) · 27–45 Writing (20) · 45–55 Speaking (10, one-to-one or trusted pairs) · 55–60 Profile and D4 target.',
    source: 'The website D3-L12 is a four-skill, 60-mark unit assessment: the complete D3 language vault (all eleven lessons), a ten-question cumulative grammar laboratory (agreement · patterns · future · evidence), Part A listening (Al-Nour Technology summer-training advert: 10 questions × 2 = 20), Part B reading (Amal’s career-plan article: 10), Part C writing (five-field application profile 5 + 120–140-word article or formal email 15, marked task / range / accuracy) and Part D speaking (interview + topic conversation: 10), then an evidence-based D4 target.',
    support: `• Everyone sits the same 60 marks. Access arrangements: extra time, questions read aloud in English, one section on screen at a time; speaking one-to-one or in trusted pairs (it can move to the next lesson).
• If time is short: listening + reading in class; writing and speaking next lesson.
• NOTE: the reading text is the D3-L09 model email (Amal) — students who studied it closely have an advantage; that is fine (it rewards revision), but mark the WRITING strictly for originality.
• Website: “Complete each section independently, then record a precise D4 target.”`,
  }),
  D.welcomeSlide(),
  {
    type: 'journey', stage: 'welcome', eyebrow: 'Today’s lesson map', title: 'Our assessment, step by step', ar: 'خَرِيطَةُ الدَّرْسِ',
    steps: [
      { stage: 'donow', min: 4, text: 'Grammar laboratory (not marked).', ar: 'تَهْيِئَةٌ' },
      { stage: 'teach', min: 2, text: 'The four audits and the 60-mark map.', ar: 'خُطَّةُ التَّقْيِيمِ' },
      { stage: 'ido', min: 12, text: 'Listening: 20 marks.', ar: 'الاِسْتِمَاعُ' },
      { stage: 'wedo', min: 8, text: 'Reading: 10 marks.', ar: 'القِرَاءَةُ' },
      { stage: 'youdo', min: 28, text: 'Writing 20 + speaking 10.', ar: 'الكِتَابَةُ وَالتَّحَدُّثُ' },
      { stage: 'feedback', min: 4, text: 'My profile and one D4 target.', ar: 'الهَدَفُ' },
      { stage: 'prep', min: 2, text: 'Get ready for D4: environment.', ar: 'اِسْتَعِدَّ' },
    ],
    support: 'Start each section with the questions you find easiest. Leave a blank and come back. The grammar laboratory does not count.',
    notes: 'LESSON MAP. Website sections: 01 complete D3 language vault · 02 cumulative grammar laboratory · 03 Part A listening · 04 Part B reading · 05 Part C writing · 06 Part D speaking · 07 reflection and D4 readiness.',
  },
  D.doNow({
    questions: [
      q('What does تَقْيِيمٌ mean?', ['an assessment', 'a skill', 'instructions'], 'Prepared at home (D3-L11).'),
      q('Complete: يَحْتَاجُ المُدَرِّسُ ___ الصَّبْرِ.', ['إِلَى', 'فِي', 'مِنْ'], 'Website grammar laboratory 2.'),
      q('Choose the accurate future.', ['سَأَتَدَرَّبُ', 'سَوْفَ تَدَرَّبْتُ', 'سَتَدَرَّبْتُ'], 'Website grammar laboratory 3.'),
      q('Complete: سَأَدْرُسُ بِجِدٍّ ___ أَنْجَحَ.', ['لِكَيْ', 'مَعَ', 'بَيْنَمَا'], 'Website grammar laboratory 5.'),
      q('Which sentence is fully controlled?', ['أُخْتِي مُحَاسِبَةٌ وَسَتَعْمَلُ فِي شَرِكَةٍ.', 'أُخْتِي مُحَاسِبٌ وَسَوْفَ عَمِلَتْ.', 'أُخْتِي فِي مُحَاسِبَةٍ.'], 'Website grammar laboratory 10.'),
    ],
    keyIdea: { text: 'This warm-up does NOT count. Use it to find ONE audit to check in your writing today.', ar: 'المُطَابَقَةُ · حَرْفُ الجَرِّ · المُسْتَقْبَلُ · الدَّلِيلُ' },
    retrieves: 'Question 1 tests one of the words prepared at home at the end of D3-L11. Questions 2–5 are from the website ten-question cumulative grammar laboratory (used diagnostically).',
  }),
  {
    type: 'ruleCards', stage: 'teach', min: 1, eyebrow: 'Review · the D3 grammar system (website grammar laboratory)', title: 'Four audits before you write', ar: 'مُرَاجَعَةُ القَوَاعِدِ',
    cards: [
      { chip: 'AGREEMENT', color: 'C0386B', head: 'مُهَنْدِسَةٌ · تَعْمَلُ', big: 'أُخْتِي مُحَاسِبَةٌ وَسَتَعْمَلُ فِي شَرِكَةٍ.', en: 'My sister is an accountant and will work in a company.', clue: 'Person, verb and job match.' },
      { chip: 'PATTERNS', color: '6B4C9A', head: 'إِلَى · لِـ · الَّتِي', big: 'الشَّرِكَةُ الَّتِي تُقَدِّمُ تَدْرِيبًا', en: 'the company which offers training', clue: 'Whole phrases, right relative.' },
      { chip: 'FUTURE + EVIDENCE', color: '1E6B52', head: 'سَـ · لِكَيْ · الدَّلِيلُ', big: 'أَنَا مُنَظَّمٌ، وَالدَّلِيلُ أَنَّنِي أَحْتَرِمُ المَوَاعِيدَ.', en: 'I am organised; the proof is that I respect deadlines.', clue: 'Claim + proof.' },
    ],
    error: { text: 'Website grammar laboratory: a condition needs idhā + past, then fa-sa-.', pairs: [['إِذَا نَجَحْتُ فَسَأَدْرُسُ فِي الجَامِعَةِ.', 'إِذَا أَنْجَحُ سَوْفَ دَرَسْتُ.']] },
    notes: `REVIEW (website “Cumulative grammar laboratory”, correct answers): مُهَنْدِسَةٌ · يَحْتَاجُ … إِلَى · سَأَتَدَرَّبُ · يَسُرُّنِي أَنْ أَتَقَدَّمَ لِـ · لِكَيْ أَنْجَحَ · أَنَا مُنَظَّمٌ، وَالدَّلِيلُ … · إِذَا نَجَحْتُ فَسَأَدْرُسُ … · الشَّرِكَةُ الَّتِي تُقَدِّمُ تَدْرِيبًا · مَنْ جَدَّ وَجَدَ (effort) · أُخْتِي مُحَاسِبَةٌ وَسَتَعْمَلُ فِي شَرِكَةٍ.
The website language vault (all D3 vocabulary by lesson) is for revision BEFORE the assessment — close it during each section.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Assessment map (website) · 60 marks in total', title: 'Four skills, sixty marks', ltr: true, ar: 'خُطَّةُ التَّقْيِيمِ',
    cols: [{ label: 'Marks', w: 1.4 }, { label: 'What you do', w: 7.2 }, { label: 'Section', w: 3.73 }],
    rows: [
      { core: true, cells: ['20', 'A summer-training advert (heard up to three times): 10 questions, 2 marks each — listen for the FINAL details', 'A · Listening'] },
      { core: true, cells: ['10', 'Amal’s career-plan article: locate, infer and prove — 10 questions', 'B · Reading'] },
      { core: true, cells: ['20', 'A five-field application profile (5) + a 120–140-word career article or formal email (15)', 'C · Writing'] },
      { core: true, cells: ['10', 'An interview + a topic conversation about your career plan', 'D · Speaking'] },
    ],
    notes: 'ASSESSMENT MAP (website: “Four skills · one evidence profile”).',
  },
  lmcq('1–5', [
    q('Which opportunity is described?', ['summer training', 'a university course', 'a permanent director role'], 'فُرْصَةِ تَدْرِيبٍ صَيْفِيٍّ'),
    q('Which skill is essential?', ['teamwork', 'driving', 'cooking'], 'العَمَلِ ضِمْنَ فَرِيقٍ'),
    q('What is the corrected start date?', ['2 August', '12 August', '20 August'], 'فِي الثَّانِي مِنْ أَغُسْطُسَ، لَا فِي الثَّانِي عَشَرَ'),
    q('How long does it last?', ['four weeks', 'four months', 'two days'], 'أَرْبَعَةَ أَسَابِيعَ'),
    q('What is provided?', ['training and a certificate', 'free accommodation', 'a high salary'], 'تَدْرِيبًا وَشَهَادَةً'),
  ], 31),
  lmcq('6–10', [
    q('What is not provided?', ['a salary', 'computer access', 'a reference'], 'لَا تُقَدِّمُ رَاتِبًا'),
    q('What must applicants send?', ['a CV', 'an essay', 'a passport'], 'إِرْسَالُ سِيرَةٍ ذَاتِيَّةٍ'),
    q('When is the deadline?', ['Thursday', 'Friday', 'Monday'], 'قَبْلَ يَوْمِ الخَمِيسِ'),
    q('What attitude is encouraged?', ['responsibility', 'carelessness', 'silence'], 'مَسْؤُولِينَ وَمُسْتَعِدِّينَ لِلتَّعَلُّمِ'),
    q('What is the overall purpose?', ['to recruit trainees', 'to advertise a shop', 'to cancel a course'], 'تُعْلِنُ … عَنْ فُرْصَةِ تَدْرِيبٍ'),
  ], 32),
  { type: 'passage', stage: 'wedo', min: 3, eyebrow: 'Reading · Part B · 10 marks (website)', title: 'Amal’s career plan', ar: 'خُطَّتِي المِهَنِيَّةُ', text: READ, notes: 'READING TEXT (website Part B). No English support on assessment texts. Website strategy: “Locate · infer · prove”.' },
  rmcq('1–5', [
    q('What job does Amal want?', ['environmental engineer', 'accountant', 'journalist'], 'مُهَنْدِسَةَ بِيئَةٍ'),
    q('Why does she choose it?', ['to solve pollution problems', 'to work fewer hours', 'to travel for free'], 'حَلِّ مُشْكِلَاتِ التَّلَوُّثِ'),
    q('Which strength does she name?', ['science and teamwork', 'driving and sales', 'drawing and cooking'], 'العُلُومِ وَالعَمَلِ الجَمَاعِيِّ'),
    q('What evidence does she give?', ['she led a recycling project', 'she watched a video', 'she bought a book'], 'قُدْتُ مَشْرُوعًا … إِعَادَةِ التَّدْوِيرِ'),
    q('What will she study?', ['engineering', 'law', 'medicine'], 'سَأَدْرُسُ الهَنْدَسَةَ'),
  ], 33),
  rmcq('6–10', [
    q('What practical step will follow?', ['a work placement', 'a holiday', 'a sports course'], 'تَدْرِيبٍ عَمَلِيٍّ'),
    q('What challenge does she acknowledge?', ['the route is long', 'the job has no value', 'the subject is easy'], 'الطَّرِيقَ طَوِيلٌ'),
    q('What is her attitude?', ['determined', 'indifferent', 'uncertain and unwilling'], 'مُسْتَعِدَّةٌ لِلْعَمَلِ بِجِدٍّ'),
    q('Which connector introduces concession?', ['عَلَى الرَّغْمِ مِنْ أَنَّ', 'ثُمَّ', 'لِكَيْ'], 'although'),
    q('What is the text type?', ['a career-plan article', 'a shopping list', 'a weather report'], 'أَطْمَحُ … سَأَدْرُسُ …'),
  ], 34),
  {
    type: 'formsTable', stage: 'youdo', min: 5, eyebrow: 'Writing · Question 1 · application profile · 5 marks (website)', title: 'Complete the application profile', ltr: true, ar: 'مِلَفُّ الطَّلَبِ',
    cols: [{ label: 'Field', w: 3.6 }, { label: 'Arabic label', w: 4.0, size: 22 }, { label: 'Your answer in Arabic', w: 4.73 }],
    rows: [
      { core: true, cells: ['1 · Chosen job', { ar: 'الوَظِيفَةُ المُخْتَارَةُ' }, '______________'] },
      { core: true, cells: ['2 · Two skills', { ar: 'مَهَارَتَانِ' }, '______________'] },
      { core: true, cells: ['3 · Evidence for a skill', { ar: 'دَلِيلٌ عَلَى مَهَارَةٍ' }, '______________'] },
      { core: true, cells: ['4 · Previous experience', { ar: 'خِبْرَةٌ سَابِقَةٌ' }, '______________'] },
      { core: true, cells: ['5 · Future plan', { ar: 'خُطَّةٌ مُسْتَقْبَلِيَّةٌ' }, '______________'] },
    ],
    foot: 'Example: مُبَرْمِجٌ · حَلُّ المُشْكِلَاتِ وَالعَمَلُ الجَمَاعِيُّ · قُدْتُ فَرِيقًا فِي مَشْرُوعٍ · تَطَوَّعْتُ فِي المَكْتَبَةِ · سَأَدْرُسُ عُلُومَ الحَاسُوبِ',
    notes: 'WRITING QUESTION 1 (website, 5 marks): one mark per field completed accurately in Arabic (a phrase is enough; spelling and agreement must be correct for the mark).',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 13, eyebrow: 'Writing · Question 2 · 120–140 words · 15 marks (website)', title: 'Career article or formal email', ltr: true, ar: 'مَقَالٌ أَوْ رِسَالَةٌ رَسْمِيَّةٌ',
    cols: [{ label: 'Include all five points', w: 6.6 }, { label: 'Marked for (website)', w: 5.73 }],
    rows: [
      { core: true, cells: ['1 · Your career choice and why', 'Task /5 — all points developed'] },
      { core: true, cells: ['2 · The skills it needs', 'Range /5 — varied grammar and vocabulary'] },
      { core: true, cells: ['3 · Evidence that you have them', 'Accuracy /5 — agreement, patterns, spelling'] },
      { core: true, cells: ['4 · Your education / training route', 'sa- / sawfa · li-kay · idhā'] },
      { core: true, cells: ['5 · One challenge (and how you will face it)', 'ʿalā al-raghmi min anna … fa-inna'] },
    ],
    foot: 'Independent evidence: no translation software or AI. Four paragraphs, four jobs (D3-L09) — then run the four audits (D3-L11).',
    notes: 'WRITING QUESTION 2 (website, 15 marks: Task 5 · Range 5 · Accuracy 5): 120–140 words explaining a career choice, required skills, evidence, the education / training route and one challenge. The D3-L11 teacher model (lawyer) is a full-mark exemplar — show it ONLY after writing.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 8, eyebrow: 'Speaking · Part D · 10 marks (website)', title: 'Interview and topic conversation', ltr: true, ar: 'التَّحَدُّثُ',
    cols: [{ label: 'Cue (website)', w: 7.6 }, { label: 'Useful language', w: 4.73 }],
    rows: [
      { core: true, cells: ['1 · State the career and why it interests you.', 'aṭmaḥu ilā an uṣbiḥa … li-annanī …'] },
      { core: true, cells: ['2 · Name two skills and evidence.', 'wa-l-dalīlu annanī …'] },
      { core: true, cells: ['3 · Explain the education or training route.', 'awwalan … thumma … li-kay …'] },
      { core: true, cells: ['4 · Answer an interview question about strengths.', 'min niqāṭi quwwatī …'] },
      { core: true, cells: ['5 · Discuss one challenge and solution.', 'ʿalā al-raghmi min anna …'] },
    ],
    foot: 'Website: prepare concise cues, not a script. Be ready for natural follow-up questions.',
    notes: `SPEAKING (website, 10 marks). Teacher questions (the D3-L11 conversation): مَا المِهْنَةُ الَّتِي تُرِيدُهَا؟ وَلِمَاذَا؟ · مَا مَهَارَاتُكَ؟ وَمَا الدَّلِيلُ؟ · مَا خُطَّتُكَ بَعْدَ المَدْرَسَةِ؟ · مَا نُقْطَةُ قُوَّتِكَ؟ · مَا الصُّعُوبَةُ المُحْتَمَلَةُ؟ وَكَيْفَ سَتَتَغَلَّبُ عَلَيْهَا؟
To a girl: تُرِيدِينَهَا · مَهَارَاتُكِ · خُطَّتُكِ · قُوَّتِكِ · سَتَتَغَلَّبِينَ.
Suggested marking: communication and development 4 · range 3 · accuracy and pronunciation 3. ORGANISATION: one-to-one while others finish writing, or trusted pairs with the teacher as interviewer.`,
  },
  {
    type: 'formsTable', stage: 'feedback', min: 3, eyebrow: 'Results · your D3 four-skills profile (website)', title: 'My D3 score profile', ltr: true, ar: 'مِلَفُّ المَهَارَاتِ',
    cols: [{ label: 'Teacher guide (total /60)', w: 6.93 }, { label: 'My score', w: 2.0 }, { label: 'Section', w: 3.4 }],
    rows: [
      { core: true, cells: ['54–60 Excellent — confident career communication', '/20', 'A · Listening'] },
      { core: true, cells: ['42–53 Good — secure, with a few focused gaps', '/10', 'B · Reading'] },
      { core: true, cells: ['30–41 Satisfactory — core communication in place', '/20', 'C · Writing'] },
      { core: true, cells: ['Below 30 — revisit selected D3 lessons with guided practice', '/10', 'D · Speaking'] },
    ],
    foot: 'Website reflection: My strongest D3 evidence was … · My precise next action is …',
    notes: 'PROFILE (website “D3 reflection and D4 readiness”: “Record one secure language feature and one precise next action.”). The bands are a teacher guide in line with the D1 and D2 assessments.',
  },
  D.selfCheckSlide([
    { route: 'core', text: 'I can name jobs for a man and a woman and say where they work.' },
    { route: 'core', text: 'I can say what I will study (sa- / sawfa).' },
    { route: 'develop', text: 'I can describe skills with evidence.' },
    { route: 'develop', text: 'I can write a formal application.' },
    { route: 'stretch', text: 'I can write a 120–140-word career plan with a concession.' },
  ]),
  D.prepSlide({
    ...NEXT,
    words: [['البِيئَةُ', 'the environment', '—'], ['المَنَاخُ', 'the climate', '—'], ['الطَّقْسُ', 'the weather', '—'], ['الصَّحْرَاءُ', 'the desert', 'pl. الصَّحَارِي'], ['الغَابَةُ', 'the forest', 'pl. الغَابَاتُ']],
    questionEn: 'Describe the weather where you live today in one Arabic sentence.',
    questionAr: 'الطَّقْسُ اليَوْمَ …',
    homework: {
      core: 'Redo the website D3-L12 section with your lowest score; learn the five environment words.',
      develop: 'Improve one paragraph of your assessed article, then learn the five environment words.',
      stretch: 'Write three sentences about the climate of a country you know, using the five words.',
    },
    wordsSource: 'D4 begins with the natural world (website D4-L01 “The Natural World — Environment and Climate Vocabulary”).',
  }),
  D.closeSlide({ ...NEXT, remember: 'D3 complete — well done! Carry the four audits into D4: agreement, patterns, tense, evidence.' }),
];

module.exports = { meta, slides };
