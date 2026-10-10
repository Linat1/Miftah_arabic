'use strict';
/*
 * P5-L12 · Review and Unit Assessment: Social Issues and Opinions (60 marks: listening 20 · reading 10 · writing 20 · speaking 10)
 * Website: Pathways › Progression › P5 › Lesson 12. Twelve-question grammar spine (revision, not counted), Part A listening (three texts:
 * an academic on social inequality 8 · Karim and Huda on digital regulation — who said what 6 · a young activist on youth empowerment 6), Part B1
 * reading (a social-mobility argument: 10), Part B2 writing (five-field argument form 5 + 150–165-word argumentative essay 15: task / range / accuracy),
 * Part C speaking (role play at a social-justice conference 4 + topic conversation 6) and the P5 profile / P6 target. Scripts, texts, questions, tasks
 * and marks are the website’s, with waṣl alif shown without a kasra, لِكَيْ always written with its sukūn, and these fixes: يَصِرُّ / نَصِرُّ → يُصِرُّ / نُصِرُّ
 * (grammar spine, listening text 3, mark scheme — as in P5-L03) and عَلَاوَةً → عِلَاوَةً (grammar spine, as in P4-L06); the R-labels on the reading
 * prompts are kept in the teacher notes rather than on the slide; two long reading options are shortened; Arabic inside English task lines is shown in
 * transliteration.
 */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P5')({
  n: 12, fileTitle: 'Review_and_Unit_Assessment_Social_Issues', chip: 'P5 Assessment',
  title: 'Review and Unit Assessment: Social Issues and Opinions', arabic: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ',
  focus: 'Show what you can understand and produce about social issues — ṣaḥīḥun anna + -u … ghayra anna, the extended triggers + -a (yuṣirru ʿalā · yuṭālibu bi- · yamnaʿu · yarfuḍu an), an vs anna, law … la-, kānat qad and wa-bināʾan ʿalā mā sabaqa — then choose one precise target for P6, the IGCSE Bridge.',
  icon: 'FaClipboardCheck', iconSet: 'fa6', level: 'Progression · end of unit P5',
});
const NEXT = { nextCode: 'P6-L01', nextTitle: 'Bridge Launch — Mapping the IGCSE and Setting Personal Targets', nextAr: 'إِطْلَاقُ الجِسْرِ' };
const SITE = 'Pathways › Progression › P5 Social Issues and Opinions › P5-L12';
const A = JSON.parse(JSON.stringify(D.waslFix(require('../site-data/p5-l12-assessment.json'))).replace(/لِكَي(?!ْ)/g, 'لِكَيْ').replace(/يَصِرُّ/g, 'يُصِرُّ').replace(/نَصِرُّ/g, 'نُصِرُّ').replace(/عَلَاوَةً/g, 'عِلَاوَةً'));
const T1 = A.listening.one.script;
const T2 = A.listening.two.script;
const T3 = A.listening.three.script;
const READ = A.reading.text;
const RO = { 3: ['ṣaḥīḥun anna: concedes, then refutes', 'yushāru ilā anna: a thesis', 'law wujjiha: a conditional'], 4: ['Balanced: concedes, then refutes', 'One-sided: only praises the state', 'One-sided: only attacks the state'] };
const RQ = A.reading.questions.map((x, i) => (RO[i] ? { ...x, options: RO[i] } : x));
const G = A.grammar;
const TR = [
  ['(صَحِيحٌ أَنَّ)', '(ṣaḥīḥun anna)'], ['(غَيْرَ أَنَّ)', '(ghayra anna)'], ['(وَبِنَاءً عَلَى مَا سَبَقَ)', '(wa-bināʾan ʿalā mā sabaqa)'],
  ['صَحِيحٌ أَنَّ / بِالرَّغْمِ مِنْ', 'ṣaḥīḥun anna / bi-l-raghmi min'], ['(يَتَطَلَّبُ / يُطَالِبُ / يُصِرُّ / يَمْنَعُ / يَرْفُضُ أَنْ …)', '(yataṭallabu / yuṭālibu / yuṣirru / yamnaʿu / yarfuḍu an …)'],
  ['other than قَالَ', 'other than qāla'], ['ـَ marker', '-a marker'], ['أَنْ vs أَنَّ', 'an vs anna'], ['The Type 2 لَـ prefix', 'The Type 2 la- prefix'],
  ['after صَحِيحٌ أَنَّ', 'after ṣaḥīḥun anna'], ['opens with لَوْ', 'opens with law'], ['answers with إِذَا', 'answers with idhā'], ['spontaneous صَحِيحٌ أَنَّ / غَيْرَ أَنَّ', 'spontaneous ṣaḥīḥun anna / ghayra anna'],
  ['using صَحِيحٌ أَنَّ + indicative', 'using ṣaḥīḥun anna + a verb in -u'], ['using غَيْرَ أَنَّ', 'using ghayra anna'], ['using وَبِنَاءً عَلَى مَا سَبَقَ', 'using wa-bināʾan ʿalā mā sabaqa'],
  ['using صَحِيحٌ أَنَّ', 'using ṣaḥīḥun anna'], ['using يَتَطَلَّبُ أَنْ + subjunctive', 'using yataṭallabu an + a verb in -a'],
  ['(صَحِيحٌ أَنَّ / غَيْرَ أَنَّ expected)', '(ṣaḥīḥun anna / ghayra anna expected)'],
];
const tr = (s) => TR.reduce((t, [a, b]) => t.split(a).join(b), s);

const lmcq = (label, title, qs, script, seed, marks, tip) => ({
  type: 'mcq', stage: 'ido', min: 4, eyebrow: `Listening · ${label} · 1 mark each (website)`, title, ar: 'الاسْتِمَاعُ',
  seed, questions: qs,
  answerSlide: { min: 0, eyebrow: `Listening · ${label} · answers`, title: `${title}: answers`, ar: 'الإِجَابَاتُ' },
  notes: `LISTENING ${label.toUpperCase()} (website Part A, 20 marks). Before listening: label each question with the signal you expect (أُطْرُوحَتِي · صَحِيحٌ أَنَّ · غَيْرَ أَنَّ · يَتَطَلَّبُ / يَمْنَعُ / يَرْفُضُ أَنْ · سَـ / لَـ · كَانَ قَدْ) — P5-L10: follow the shape, and remember the point after صَحِيحٌ أَنَّ belongs to the OTHER side. ${tip} Each recording may be played twice; students answer after the second reading.\nSCRIPT: ${script}\nPrivate chat: ${marks} letters.`,
  answerNotes: `Mark /${marks}. Reveal the script only after the attempt; ask which signal (ṣaḥīḥun anna · ghayra anna · an + -a · sa- / la- · kāna qad · a speaker’s name) proved each answer.`,
});
const rmcq = (part, qs, seed, labels) => ({
  type: 'mcq', stage: 'wedo', min: 5, eyebrow: `Reading · questions ${part} · 1 mark each (website)`, title: `Reading questions ${part}`, ar: 'أَسْئِلَةُ القِرَاءَةِ', seed, questions: qs,
  answerSlide: { min: 0, eyebrow: 'Reading · answers · show AFTER the section', title: `Questions ${part}: answers`, ar: 'الإِجَابَاتُ' },
  notes: `READING (website Part B1: R1 thesis · R2 evidence and the past perfect · R3 concession, balance and the purpose of the Type 2 · R4 the -u / -a gap-fill, the bi- of yuṭālibu and the purpose of the text). Website skill labels for these questions: ${labels}. Keep the text on the previous slide available.`,
  answerNotes: 'Mark /5. Ask one student to read the evidence phrase aloud (by invitation).',
});
const strip = (s) => s.replace(/^R\d — /, '').replace(/ Which (form|particle)\?$/, '');

const slides = [
  D.titleSlide({
    n: 12, siteRef: SITE,
    plan: '0–1 Welcome · 1–2 Map · 2–6 Grammar spine (not marked) · 6–7 Assessment map · 7–21 Listening (20) · 21–29 Reading (10) · 29–46 Writing (20) · 46–56 Speaking (10, one-to-one or trusted pairs) · 56–60 Profile and P6 target.',
    source: 'The website P5-L12 is a four-skill, 60-mark unit assessment: a twelve-question grammar spine (revision, not counted), Part A listening (three texts — an academic on social inequality 8 · Karim and Huda on digital regulation: who said what 6 · a young activist on youth empowerment 6 = 20), Part B1 reading (a social-mobility argument: 10), Part B2 writing (five-field argument form 5 + 150–165-word argumentative essay 15, marked task / range / accuracy) and Part C speaking (role play at a social-justice conference 4 + topic conversation 6), then a P6 target.',
    support: `• Everyone sits the same 60 marks. Access arrangements: extra time, questions read aloud in English, one section on screen at a time; speaking one-to-one or in trusted pairs (it can move to the next lesson).
• If time is short: listening + reading in class; writing and speaking next lesson.
• Social issues (poverty, migration, inequality) may touch students’ own lives — let them choose the issue they write and speak about, and keep the focus on argument and language, not on personal disclosure.
• Accuracy focus today (the website mark scheme): the indicative after ṣaḥīḥun anna (the PRIMARY P5 criterion) · an vs anna and the -a after every trigger · the la- of the Type 2 result — and in speaking, a real concession in role-play prompt 2 and a law answer to topic question 3.`,
  }),
  D.welcomeSlide(),
  {
    type: 'journey', stage: 'welcome', eyebrow: 'Today’s lesson map', title: 'Our assessment, step by step', ar: 'خَرِيطَةُ الدَّرْسِ',
    steps: [
      { stage: 'donow', min: 4, text: 'Grammar spine (not marked).', ar: 'تَهْيِئَةٌ' },
      { stage: 'teach', min: 2, text: 'The P5 checklist and the 60-mark map.', ar: 'خُطَّةُ التَّقْيِيمِ' },
      { stage: 'ido', min: 14, text: 'Listening: three texts, 20 marks.', ar: 'الاسْتِمَاعُ' },
      { stage: 'wedo', min: 8, text: 'Reading: 10 marks.', ar: 'القِرَاءَةُ' },
      { stage: 'youdo', min: 27, text: 'Writing 20 + speaking 10.', ar: 'الكِتَابَةُ وَالتَّحَدُّثُ' },
      { stage: 'feedback', min: 3, text: 'My profile and one P6 target.', ar: 'الهَدَفُ' },
      { stage: 'prep', min: 2, text: 'Get ready for P6: the IGCSE Bridge.', ar: 'اسْتَعِدَّ' },
    ],
    support: 'Start each section with the questions you find easiest. Leave a blank and come back. The grammar spine does not count.',
    notes: 'LESSON MAP. Website sections: grammar spine · Part A listening · Part B1 reading · Part B2 writing · Part C speaking · mark scheme · reflection.',
  },
  D.doNow({
    questions: [
      q('What does المَوْقِفُ المُضَادُّ mean?', ['the opposing position', 'the main thesis', 'a balanced view'], 'Prepared at home (P5-L11).'),
      ...[0, 3, 5, 8].map((i) => q(G[i].prompt.replace('(صَحِيحٌ أَنَّ + indicative)', '(ṣaḥīḥun anna + -u)'), G[i].options, `Website grammar spine ${i + 1}.`)),
    ],
    keyIdea: { text: 'This warm-up does NOT count. Use it to choose ONE thing to check in your writing today.', ar: 'صَحِيحٌ أَنَّ … يَتَطَلَّبُ · بِأَنْ تُوَقِّعَ · أَنْ تَسْتَمِرَّ · لَوْ … لَتَحَسَّنَ' },
    retrieves: 'Question 1 tests one of the words prepared at home at the end of P5-L11. Questions 2–5 are from the website twelve-question grammar spine (used diagnostically; the full spine is reviewed on the next slide).',
  }),
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Review · the P5 grammar spine (website)', title: 'The P5 accuracy checklist', ar: 'مُرَاجَعَةُ القَوَاعِدِ', ltr: true,
    cols: [{ label: 'Check', w: 3.0 }, { label: 'Model', w: 6.6, size: 18 }, { label: 'Lesson', w: 2.73 }],
    rows: [
      { core: true, cells: ['concession -u + refutation', { ar: 'صَحِيحٌ أَنَّ التَّعْلِيمَ يَتَطَلَّبُ مَوَارِدَ، غَيْرَ أَنَّ العَائِدَ أَكْبَرُ' }, 'P5-L01 · L07'] },
      { core: true, cells: ['triggers + -a', { ar: 'يُصِرُّ عَلَى أَنْ تَحْصُلَ · يُطَالِبُ بِأَنْ تُوَقِّعَ · يَمْنَعُ أَنْ تُبَاعَ · يَرْفُضُ أَنْ تَسْتَمِرَّ' }, 'P5-L03–L05'] },
      { core: true, cells: ['an vs anna', { ar: 'يُطَالِبُ بِأَنْ تُوَقِّعَ · أَكَّدَ أَنَّ الوَقْتَ يَنْفَدُ' }, 'P5-L11'] },
      { cells: ['Type 2 · passive', { ar: 'لَوْ عُولِجَ التَّفَاوُتُ مُبَكِّرًا، لَتَحَسَّنَ الوَضْعُ · يُهَجَّرُ' }, 'P5-L02 · L05'] },
      { cells: ['formal conclusion', { ar: 'وَبِنَاءً عَلَى مَا سَبَقَ … أَنْ تَتَحَرَّكَ · وَخُلَاصَةُ القَوْلِ' }, 'P5-L05 · L09'] },
    ],
    foot: 'And one habit for every part today: what comes next — a verb (an + -a) or a noun (anna)?',
    notes: 'REVIEW (website twelve-question grammar spine, correct answers): صَحِيحٌ أَنَّ … يَتَطَلَّبُ · غَيْرَ أَنَّ · يُصِرُّ … عَلَى أَنْ تَحْصُلَ · يُطَالِبُ … بِأَنْ تُوَقِّعَ · يَمْنَعُ … أَنْ تُبَاعَ · يَرْفُضُ … أَنْ تَسْتَمِرَّ · وَبِنَاءً عَلَى مَا سَبَقَ · وَخُلَاصَةُ القَوْلِ · لَوْ عُولِجَ … لَتَحَسَّنَ · يُهَجَّرُ · بِأَنْ تُوَقِّعَ / أَنَّ الوَقْتَ · أَنْ تَتَحَرَّكَ. Close the vocabulary vault during each section.',
  },
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Assessment map (website) · 60 marks in total', title: 'Four skills, sixty marks', ltr: true, ar: 'خُطَّةُ التَّقْيِيمِ',
    cols: [{ label: 'Marks', w: 1.4 }, { label: 'What you do', w: 7.2 }, { label: 'Section', w: 3.73 }],
    rows: [
      { core: true, cells: ['20', 'Three texts (each heard twice): an academic on inequality (8) · Karim and Huda on digital regulation (6) · a young activist on youth (6)', 'A · Listening'] },
      { core: true, cells: ['10', 'A social-mobility argument: thesis, evidence, concession and balance, gap-fills, purpose', 'B1 · Reading'] },
      { core: true, cells: ['20', 'A five-field argument form (5) + a 150–165-word argumentative essay (15)', 'B2 · Writing'] },
      { core: true, cells: ['10', 'A role play at a social-justice conference (4) + a topic conversation (6)', 'C · Speaking'] },
    ],
    notes: 'ASSESSMENT MAP (website: sixty marks across listening, reading, writing and speaking).',
  },
  lmcq('Text 1 · questions 1–4', 'An academic on social inequality (1)', A.listening.one.questions.slice(0, 4).map((x) => q(x.prompt.replace(' (صَحِيحٌ أَنَّ)', '').replace(' (غَيْرَ أَنَّ)', ''), x.options, x.feedback)), T1, 121, 4, 'Question 1: uṭrūḥatī anna = the thesis. Question 3: ṣaḥīḥun anna = the point conceded to the other side. Question 4: ghayra anna = the speaker’s real position.'),
  lmcq('Text 1 · questions 5–8', 'An academic on social inequality (2)', A.listening.one.questions.slice(4, 8).map((x) => q(x.prompt.replace(' (يَتَطَلَّبُ)', ''), x.options, x.feedback)), T1, 122, 4, 'Question 5: the sa- result = a real recommendation. Question 6: the la- result = it did NOT happen. Question 7: yataṭallabu an = the demand. Question 8: a concession + refutation = balanced.'),
  lmcq('Text 2 · 6 questions', 'Karim and Huda: who said what', A.listening.two.questions.map((x) => q(x.prompt.replace(' (يَمْنَعُ)', '').replace(' (يَرْفُضُ)', '').replace(' (وَبِنَاءً عَلَى مَا سَبَقَ)', ''), x.options, x.feedback)), T2, 123, 6, 'Attribution: write K / H / both beside each question while listening — listen for the name before each line, then the signal (yamnaʿu · arfuḍu an · ṣaḥīḥun anna · law … la-).'),
  lmcq('Text 3 · 6 questions', 'A young activist on youth empowerment', A.listening.three.questions.map((x) => q(x.prompt.replace(' (يُعِيدُ تَعْرِيفَ)', ' (yuʿīdu taʿrīfa)'), x.options, x.feedback)), T3, 124, 6, 'Each question names the structure it tests: listen for kānat qad, yuʿīdu taʿrīfa, ṣaḥīḥun anna … ghayra anna, nuṭālibu bi-an / nuṣirru ʿalā an, law … la- and wa-bināʾan ʿalā mā sabaqa.'),
  { type: 'passage', stage: 'wedo', min: 3, eyebrow: 'Reading · Part B1 · 10 marks (website)', title: 'Social mobility and justice', ar: 'التَّنَقُّلُ الاجْتِمَاعِيُّ وَالعَدَالَةُ', text: READ, notes: 'READING TEXT (website Part B1). No English support on assessment texts. Strategy (P5-L08): underline the thesis, box ṣaḥīḥun anna and circle ghayra anna, mark kānat … qad, and check every verb after an / li-kay for -a; then ask: is the argument balanced?' },
  rmcq('1–5', RQ.slice(0, 5).map((x) => q(strip(x.prompt), x.options, x.feedback)), 125, 'R1 · R2 · R2 · R3 · R3'),
  rmcq('6–10', RQ.slice(5, 10).map((x) => q(strip(x.prompt), x.options, x.feedback)), 126, 'R3 · R4 · R4 · R4 · R4'),
  {
    type: 'formsTable', stage: 'youdo', min: 5, eyebrow: 'Writing · Question 1 · argument form · 5 marks (website)', title: 'Complete the argument form', ltr: true, ar: 'اسْتِمَارَةُ الحُجَّةِ',
    cols: [{ label: 'Field', w: 3.9 }, { label: 'Arabic label', w: 4.6, size: 16 }, { label: 'Your answer in Arabic', w: 3.83 }],
    rows: A.writing_form.map(([ar, en], i) => ({ core: true, cells: [`${i + 1} · ${tr(en)}`, { ar: ar.replace(/ \(.*\)$/, '').replace(/ بِاسْتِعْمَالِ .*$/, '').replace(/ بِكَلَامٍ مَنْقُولٍ.*$/, ' بِكَلَامٍ مَنْقُولٍ') }, '______________'] })),
    foot: 'Example: الفَجْوَةُ الرَّقْمِيَّةُ · أَكَّدَتِ الدِّرَاسَاتُ أَنَّ … · صَحِيحٌ أَنَّ التِّقْنِيَّةَ تُوَفِّرُ فُرَصًا · غَيْرَ أَنَّهَا تُعَمِّقُ الفَجْوَةَ · وَبِنَاءً عَلَى مَا سَبَقَ، يَتَطَلَّبُ الأَمْرُ أَنْ نَسْتَثْمِرَ …',
    notes: 'WRITING QUESTION 1 (website, 5 marks): one mark per field completed accurately in Arabic (a phrase is enough). Field 2 must use reported speech (أَكَّدَ … أَنَّ + noun); field 3 صَحِيحٌ أَنَّ + a verb in -u; field 4 غَيْرَ أَنَّ; field 5 وَبِنَاءً عَلَى مَا سَبَقَ + a verb in -a. Check anna vs an.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 13, eyebrow: 'Writing · Question 2 · 150–165 words · 15 marks (website)', title: 'An argumentative essay', ltr: true, ar: 'مَقَالٌ حِجَاجِيٌّ',
    cols: [{ label: 'Website mark scheme', w: 7.6 }, { label: 'Marks', w: 4.73 }],
    rows: A.mark_scheme.writing_q2.map(([name, m, items]) => ({ core: true, cells: [tr(items.join(' · ')), `${name} /${m}`] })),
    foot: 'Independent evidence: no translation software or AI. Plan the four paragraphs (P5-L09): thesis · evidence · concession + refutation · conclusion — and tick the nine Range markers.',
    notes: 'WRITING QUESTION 2 (website, 15 marks): a 150–165-word argumentative essay on a social issue of the student’s choice (P5-L01 to L06). Required: a thesis (a position, not just a topic), statistical evidence with reported speech, a genuine concession (ṣaḥīḥun anna + -u) and a refutation (ghayra anna), a Type 2, a P4/P5 subjunctive trigger and a formal conclusion + a verb in -a. Mark scheme exactly as on the website (Accuracy: the -a after every trigger and an vs anna 2 · the Type 2 la- 2 · the indicative after ṣaḥīḥun anna 1 — the primary P5 criterion). The P5-L09 website model is a full-mark exemplar — show it ONLY after writing.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 4, eyebrow: 'Speaking · Part C · role play · 4 marks (website)', title: 'Role play: a social-justice conference', ltr: true, ar: 'فِي مُؤْتَمَرِ العَدَالَةِ الاجْتِمَاعِيَّةِ',
    cols: [{ label: 'Prompt (website)', w: 6.6, size: 17 }, { label: 'What is assessed', w: 5.73 }],
    rows: A.roleplay.map(([ar, en]) => ({ cells: [{ ar: ar.replace(/ \(.*\)\.$/, '.') }, tr(en)] })),
    foot: 'Marks (website): communication 2 · accuracy 2 (a genuine concession with ṣaḥīḥun anna in prompt 2 · a refutation with ghayra anna in prompt 3).',
    notes: `ROLE PLAY (website, 4 marks). Teacher plays the chair of a social-justice conference: أَهْلًا بِكَ فِي مُؤْتَمَرِ العَدَالَةِ الاجْتِمَاعِيَّةِ. مَا القَضِيَّةُ الَّتِي تُعَالِجُهَا؟ Model answers: أُعَالِجُ قَضِيَّةَ الفَجْوَةِ الرَّقْمِيَّةِ؛ فَقَدْ أَكَّدَتِ الدِّرَاسَاتُ أَنَّ مَلَايِينَ الشَّبَابِ بِلَا إِنْتِرْنِتٍ · صَحِيحٌ أَنَّ الحُكُومَاتِ تَبْذُلُ جُهُودًا · غَيْرَ أَنَّ هٰذِهِ الجُهُودَ لَا تَصِلُ إِلَى المَنَاطِقِ النَّائِيَةِ · يَتَطَلَّبُ الحَلُّ أَنْ نُوَفِّرَ بُنْيَةً تَحْتِيَّةً رَقْمِيَّةً لِلْجَمِيعِ. Website mark scheme: ${tr(A.mark_scheme.speaking[0][2].join(' '))} To a girl: قَدِّمِي · قُولِي · اعْرِضِي · اذْكُرِي.`,
  },
  {
    type: 'formsTable', stage: 'youdo', min: 5, eyebrow: 'Speaking · Part C · topic conversation · 6 marks (website)', title: 'Topic conversation', ltr: true, ar: 'المُحَادَثَةُ',
    cols: [{ label: 'Question (website)', w: 6.3, size: 16 }, { label: 'Meaning → required', w: 6.03 }],
    rows: A.topic.map(([ar, en]) => ({ cells: [{ ar: ar.replace(/ \(.*\)$/, '') }, `${en.replace(/ \(.*\)\.?$/, '')} → ${tr((en.match(/\((.*)\)\.?$/) || ['', ''])[1])}`] })),
    foot: 'Marks (website): communication 3 · quality of language 3 — the examiner records whether the concession–refutation (Q2) and the Type 2 (Q3) are produced or avoided.',
    notes: `TOPIC CONVERSATION (website, 6 marks): structure · reason · example (P5-L11). Model openings: يُشَكِّلُ التَّفَاوُتُ الاجْتِمَاعِيُّ أَكْبَرَ تَحَدٍّ، إِذْ أَكَّدَتِ الدِّرَاسَاتُ أَنَّ … · صَحِيحٌ أَنَّ التِّكْنُولُوجِيَا تُوَفِّرُ فُرَصًا، غَيْرَ أَنَّهَا تُعَمِّقُ الفَجْوَةَ … · لَوْ كُنْتُ فِي مَوْقِعِ السُّلْطَةِ، لَاسْتَثْمَرْتُ فِي التَّعْلِيمِ المُبَكِّرِ أَوَّلًا. Website mark scheme: ${tr(A.mark_scheme.speaking[1][2].join(' '))} Allow time-buying and repair phrases (سُؤَالٌ مُهِمٌّ · دَعْنِي أُفَكِّرُ · عَفْوًا، أَقْصِدُ). To a girl: تَعْتَقِدِينَ · كُنْتِ · سَتُغَيِّرِينَ. ORGANISATION: one-to-one while others finish writing, or trusted pairs with the teacher as examiner.`,
  },
  {
    type: 'formsTable', stage: 'feedback', min: 3, eyebrow: 'Results · your P5 four-skills profile (website)', title: 'My P5 score profile', ltr: true, ar: 'مِلَفُّ المَهَارَاتِ',
    cols: [{ label: 'Teacher guide (total /60)', w: 6.93 }, { label: 'My score', w: 2.0 }, { label: 'Section', w: 3.4 }],
    rows: [
      { core: true, cells: ['54–60 Excellent — balanced, accurate argument about social issues', '/20', 'A · Listening'] },
      { core: true, cells: ['42–53 Good — secure, with a few focused gaps', '/10', 'B1 · Reading'] },
      { core: true, cells: ['30–41 Satisfactory — core communication in place', '/20', 'B2 · Writing'] },
      { core: true, cells: ['Below 30 — revisit P5-L01, L03 and L07 with guided practice', '/10', 'C · Speaking'] },
    ],
    foot: 'Website: My writing improvement target … · My speaking improvement target …',
    notes: 'PROFILE (website: complete the four components to generate targeted guidance). The bands are a teacher guide in line with the P1–P4 assessments. Return each student’s P5-L11 “priority error” note next to their score — it becomes their first P6 target.',
  },
  D.selfCheckSlide([
    { route: 'core', text: 'I can concede with ṣaḥīḥun anna + a verb in -u and answer with ghayra anna.' },
    { route: 'core', text: 'I can use an + a verb in -a after a trigger, and anna + a noun after a reporting verb.' },
    { route: 'develop', text: 'I can insist, demand, prohibit and refuse (yuṣirru ʿalā · yuṭālibu bi- · yamnaʿu · yarfuḍu an).' },
    { route: 'develop', text: 'I can regret with law … la- and close with wa-bināʾan ʿalā mā sabaqa + -a.' },
    { route: 'stretch', text: 'I can write a 150–165-word argumentative essay with all nine Range markers.' },
  ]),
  D.prepSlide({
    ...NEXT,
    words: [['وَرَقَةُ الامْتِحَانِ', 'the exam paper', 'pl. أَوْرَاقُ'], ['مَعَايِيرُ التَّقْيِيمِ', 'assessment criteria', 'sg. مِعْيَارٌ'], ['جَاهِزِيَّةُ الامْتِحَانِ', 'exam readiness', '—'], ['نُقْطَةُ قُوَّةٍ', 'a strength', 'pl. نِقَاطُ قُوَّةٍ'], ['مَجَالُ تَحْسِينٍ', 'an area for improvement', 'pl. مَجَالَاتُ']],
    questionEn: 'Which of the four skills is your strongest — and which one needs the most work before the IGCSE?',
    questionAr: 'نُقْطَةُ قُوَّتِي ______ ، وَمَجَالُ تَحْسِينِي ______ .',
    homework: {
      core: 'Redo the website P5-L12 section with your lowest score; learn the five P6 words.',
      develop: 'Improve one paragraph of your assessed essay (add the missing marker), then learn the five P6 words.',
      stretch: 'Write three sentences about your exam readiness with ṣaḥīḥun anna … ghayra anna and yataṭallabu an.',
    },
    wordsSource: 'P6 is the IGCSE Bridge (website P6-L01 “Bridge Launch — Mapping the IGCSE and Setting Personal Targets”): the five words come from its exam-terminology vault.',
  }),
  D.closeSlide({ ...NEXT, remember: 'P5 complete — well done! Carry the P5 checklist into the IGCSE Bridge: ṣaḥīḥun anna + -u … ghayra anna · an + -a vs anna + noun · law … la- · kānat qad · wa-bināʾan ʿalā mā sabaqa.' }),
];

module.exports = { meta, slides };
