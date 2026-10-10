'use strict';
/*
 * P2-L12 · Review and Unit Assessment: Education and Future Plans (60 marks: listening 20 · reading 10 · writing 20 · speaking 10)
 * Website: Pathways › Progression › P2 › Lesson 12. Twelve-question grammar spine (revision, not counted), Part A listening (three texts:
 * a student’s educational journey 8 · Sami and Layla, who said what 6 · a ministry official on reform 6), Part B1 reading (a university
 * application statement: 10), Part B2 writing (five-field application form 5 + 140–155-word article 15: task / range / accuracy),
 * Part C speaking (role play: a university admissions interview 4 + topic conversation 6) and the P2 profile / P3 target. Scripts, texts,
 * questions, tasks and marks are the website’s, with waṣl alif shown without a kasra; the R-labels on the reading prompts are kept in the
 * teacher notes rather than on the slide.
 */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P2')({
  n: 12, fileTitle: 'Review_and_Unit_Assessment_Education_and_Future_Plans', chip: 'P2 Assessment',
  title: 'Review and Unit Assessment: Education and Future Plans', arabic: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ',
  focus: 'Show what you can understand and produce about education and the future — qāla inna but akkada anna, kāna qad with full agreement, idhā … sa- for real plans and law … la- for the road not taken — then choose one precise target for Progression P3.',
  icon: 'FaClipboardCheck', iconSet: 'fa6', level: 'Progression · end of unit P2',
});
const NEXT = { nextCode: 'P3-L01', nextTitle: 'Modes of Transport — Advanced Vocabulary and Formal Descriptions', nextAr: 'وَسَائِلُ النَّقْلِ — المُفْرَدَاتُ المُتَقَدِّمَةُ' };
const SITE = 'Pathways › Progression › P2 Education and Future Plans › P2-L12';
const A = D.waslFix(require('../site-data/p2-l12-assessment.json'));
const T1 = A.listening.one.script;
const T2 = A.listening.two.script;
const T3 = A.listening.three.script;
const READ = A.reading.text;
const RQ = A.reading.questions;
const G = A.grammar;
const tr = (s) => s.replace(/\(إِذَا \+ past → سَـ\)/g, '(idhā + past → sa-)').replace(/\(لَوْ \+ past → لَـ \+ past\)/g, '(law + past → la- + past)').replace(/\(e\.g\. أَشَارَ إِلَى أَنَّ, أَكَّدَ أَنَّ\)/g, '(e.g. ashāra ilā anna, akkada anna)').replace(/إِنَّ after قَالَ, أَنَّ after/g, 'inna after qāla, anna after').replace(/كَانَ \/ كَانَتْ/g, 'kāna / kānat').replace(/كَانَ قَدْ/g, 'kāna qad').replace(/قَالَ إِنَّ/g, 'qāla inna').replace(/قَالَ/g, 'qāla').replace(/The لَـ prefix/g, 'The la- prefix');

const lmcq = (label, title, qs, script, seed, marks, tip) => ({
  type: 'mcq', stage: 'ido', min: 4, eyebrow: `Listening · ${label} · 1 mark each (website)`, title, ar: 'الاسْتِمَاعُ',
  seed, questions: qs,
  answerSlide: { min: 0, eyebrow: `Listening · ${label} · answers`, title: `${title}: answers`, ar: 'الإِجَابَاتُ' },
  notes: `LISTENING ${label.toUpperCase()} (website Part A, 20 marks). Before listening: label each question R / C / P / O and write the signal word (P2-L10). ${tip} Each recording may be played twice; students answer after the second reading.\nSCRIPT: ${script}\nPrivate chat: ${marks} letters.`,
  answerNotes: `Mark /${marks}. Reveal the script only after the attempt; ask which signal (a reporting verb + pronoun · كَانَ قَدْ · إِذَا / لَوْ · أَرَى أَنَّ · a speaker’s name) proved each answer.`,
});
const rmcq = (part, qs, seed, labels) => ({
  type: 'mcq', stage: 'wedo', min: 5, eyebrow: `Reading · questions ${part} · 1 mark each (website)`, title: `Reading questions ${part}`, ar: 'أَسْئِلَةُ القِرَاءَةِ', seed, questions: qs,
  answerSlide: { min: 0, eyebrow: 'Reading · answers · show AFTER the section', title: `Questions ${part}: answers`, ar: 'الإِجَابَاتُ' },
  notes: `READING (website Part B1: R1 main idea · R2 detail · R3 structure, source and argument · R4 reporting-verb gap-fill). Website skill labels for these questions: ${labels}. Keep the text on the previous slide available.`,
  answerNotes: 'Mark /5. Ask one student to read the evidence phrase aloud (by invitation).',
});
const strip = (s) => s.replace(/^R\d — /, '');

const slides = [
  D.titleSlide({
    n: 12, siteRef: SITE,
    plan: '0–1 Welcome · 1–2 Map · 2–6 Grammar spine (not marked) · 6–7 Assessment map · 7–21 Listening (20) · 21–29 Reading (10) · 29–46 Writing (20) · 46–56 Speaking (10, one-to-one or trusted pairs) · 56–60 Profile and P3 target.',
    source: 'The website P2-L12 is a four-skill, 60-mark unit assessment: a twelve-question grammar spine (revision, not counted), Part A listening (three texts — a student’s educational journey 8 · Sami and Layla: who said what 6 · a ministry official on reform 6 = 20), Part B1 reading (a university application statement: 10), Part B2 writing (five-field application form 5 + 140–155-word article 15, marked task / range / accuracy) and Part C speaking (role play: a university admissions interview 4 + topic conversation 6), then a P3 target.',
    support: `• Everyone sits the same 60 marks. Access arrangements: extra time, questions read aloud in English, one section on screen at a time; speaking one-to-one or in trusted pairs (it can move to the next lesson).
• If time is short: listening + reading in class; writing and speaking next lesson.
• Futures are personal: the application form, article and role play may describe a fictional applicant. Do not press anyone about grades, family plans or finances.
• Accuracy focus today (the website mark scheme): qāla inna · all other verbs anna · kāna / kānat agreement with a past verb after qad · la- in the Type 2 result.`,
  }),
  D.welcomeSlide(),
  {
    type: 'journey', stage: 'welcome', eyebrow: 'Today’s lesson map', title: 'Our assessment, step by step', ar: 'خَرِيطَةُ الدَّرْسِ',
    steps: [
      { stage: 'donow', min: 4, text: 'Grammar spine (not marked).', ar: 'تَهْيِئَةٌ' },
      { stage: 'teach', min: 2, text: 'The P2 checklist and the 60-mark map.', ar: 'خُطَّةُ التَّقْيِيمِ' },
      { stage: 'ido', min: 14, text: 'Listening: three texts, 20 marks.', ar: 'الاسْتِمَاعُ' },
      { stage: 'wedo', min: 8, text: 'Reading: 10 marks.', ar: 'القِرَاءَةُ' },
      { stage: 'youdo', min: 27, text: 'Writing 20 + speaking 10.', ar: 'الكِتَابَةُ وَالتَّحَدُّثُ' },
      { stage: 'feedback', min: 3, text: 'My profile and one P3 target.', ar: 'الهَدَفُ' },
      { stage: 'prep', min: 2, text: 'Get ready for P3: transport.', ar: 'اسْتَعِدَّ' },
    ],
    support: 'Start each section with the questions you find easiest. Leave a blank and come back. The grammar spine does not count.',
    notes: 'LESSON MAP. Website sections: grammar spine · Part A listening · Part B1 reading · Part B2 writing · Part C speaking · mark scheme · reflection.',
  },
  D.doNow({
    questions: [
      q('What does فَهْمُ المَسْمُوعِ mean?', ['listening comprehension', 'reading comprehension', 'a role play'], 'Prepared at home (P2-L11).'),
      ...[0, 3, 6, 9].map((i) => q(G[i].prompt, G[i].options, `Website grammar spine ${i + 1}.`)),
    ],
    keyIdea: { text: 'This warm-up does NOT count. Use it to choose ONE thing to check in your writing today.', ar: 'قَالَ إِنَّ · كَانَتْ قَدْ … · إِذَا … سَـ · لَوْ … لَـ' },
    retrieves: 'Question 1 tests one of the words prepared at home at the end of P2-L11. Questions 2–5 are from the website twelve-question grammar spine (used diagnostically; the full spine is reviewed on the next slide).',
  }),
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Review · the P2 grammar spine (website)', title: 'The P2 accuracy checklist', ar: 'مُرَاجَعَةُ القَوَاعِدِ', ltr: true,
    cols: [{ label: 'Check', w: 3.0 }, { label: 'Model', w: 6.6, size: 21 }, { label: 'Lesson', w: 2.73 }],
    rows: [
      { core: true, cells: ['reported speech', { ar: 'قَالَ إِنَّهُ سَيَدْرُسُ الطِّبَّ · أَكَّدَ أَنَّ المَنَاهِجَ تَتَطَوَّرُ' }, 'P2-L02'] },
      { core: true, cells: ['past perfect', { ar: 'كَانَتْ قَدْ حَصَلَتْ عَلَى مِنْحَةٍ · كُنْتُ قَدْ أَنْهَيْتُ بَحْثِي' }, 'P2-L03'] },
      { core: true, cells: ['Type 1 · Type 2', { ar: 'إِذَا دَرَسْتَ، سَتَنْجَحُ · لَوْ دَرَسَ، لَنَجَحَ' }, 'P1-L03 · P2-L06'] },
      { cells: ['verb + partner', { ar: 'أَشَارَ إِلَى أَنَّ · يَتَفَوَّقُ فِي · يُؤَهِّلُ لِـ' }, 'P2-L01 · L05'] },
      { cells: ['case after anna', { ar: 'أَنَّ التَّحْصِيلَ يَتَحَسَّنُ' }, 'P2-L02'] },
    ],
    foot: 'And one habit for every part today: name the structure the question needs before you answer.',
    notes: 'REVIEW (website twelve-question grammar spine, correct answers): إِنَّ · أَنَّ · قَالَ إِنَّهُ سَيَدْرُسُ الطِّبَّ · كَانَتْ قَدْ حَصَلَتْ · أَنْهَيْتُ · إِذَا دَرَسْتَ، سَتَنْجَحُ · لَوْ دَرَسَ، لَنَجَحَ · دَرَسَ · إِلَى · فِي · لِـ · أَنَّ التَّحْصِيلَ. Close the vocabulary vault during each section.',
  },
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Assessment map (website) · 60 marks in total', title: 'Four skills, sixty marks', ltr: true, ar: 'خُطَّةُ التَّقْيِيمِ',
    cols: [{ label: 'Marks', w: 1.4 }, { label: 'What you do', w: 7.2 }, { label: 'Section', w: 3.73 }],
    rows: [
      { core: true, cells: ['20', 'Three texts (each heard twice): a student’s educational journey (8) · Sami and Layla (6) · a ministry official on reform (6)', 'A · Listening'] },
      { core: true, cells: ['10', 'A university application statement: main idea, detail, structure, source and reporting-verb gap-fills', 'B1 · Reading'] },
      { core: true, cells: ['20', 'A five-field application form (5) + a 140–155-word article (15)', 'B2 · Writing'] },
      { core: true, cells: ['10', 'A role play: a university admissions interview (4) + a topic conversation (6)', 'C · Speaking'] },
    ],
    notes: 'ASSESSMENT MAP (website: sixty marks across listening, reading, writing and speaking).',
  },
  lmcq('Text 1 · questions 1–4', 'A student’s educational journey (1)', A.listening.one.questions.slice(0, 4).map((x) => q(x.prompt, x.options, x.feedback)), T1, 81, 4, 'Question 2: إِنَّنِي = the speaker. Questions 3–4: idhā (real plan) vs law (counterfactual).'),
  lmcq('Text 1 · questions 5–8', 'A student’s educational journey (2)', A.listening.one.questions.slice(4, 8).map((x) => q(x.prompt, x.options, x.feedback)), T1, 82, 4, 'Question 5 is a statistic: سِتِّينَ بِالْمِئَةِ = 60%. Question 7 asks for the speaker’s OWN view (أَرَى أَنَّ).'),
  lmcq('Text 2 · 6 questions', 'Sami and Layla: who said what', A.listening.two.questions.map((x) => q(x.prompt, x.options, x.feedback)), T2, 83, 6, 'Attribution: write S / L / both beside each question while listening — listen for the name before each line.'),
  lmcq('Text 3 · 6 questions', 'A ministry official on reform', A.listening.three.questions.map((x) => q(x.prompt.replace('Which statement is supported by the text?', 'Which statement is supported?'), x.options, x.feedback)), T3, 84, 6, 'Listen for the reporting verbs (أَكَّدَ · أَشَارَ إِلَى · قَالَ إِنَّ · اعْتَرَفَ بِـ) and the two conditionals.'),
  { type: 'passage', stage: 'wedo', min: 3, eyebrow: 'Reading · Part B1 · 10 marks (website)', title: 'A university application', ar: 'طَلَبُ الالْتِحَاقِ بِالجَامِعَةِ', text: READ, notes: 'READING TEXT (website Part B1). No English support on assessment texts. Strategy (P2-L08): the reporting verb tells you whose view it is · kāna qad = the background · idhā = a real plan · law = a counterfactual.' },
  rmcq('1–5', RQ.slice(0, 5).map((x) => q(strip(x.prompt), x.options, x.feedback)), 85, 'R1 · R2 · R2 · R2 · R3'),
  rmcq('6–10', RQ.slice(5, 10).map((x) => q(strip(x.prompt), x.options, x.feedback)), 86, 'R3 · R3 · R3 · R4 · R4'),
  {
    type: 'formsTable', stage: 'youdo', min: 5, eyebrow: 'Writing · Question 1 · application form · 5 marks (website)', title: 'Complete the application form', ltr: true, ar: 'اسْتِمَارَةُ الالْتِحَاقِ',
    cols: [{ label: 'Field', w: 3.6 }, { label: 'Arabic label', w: 4.4, size: 19 }, { label: 'Your answer in Arabic', w: 4.33 }],
    rows: A.writing_form.map(([ar, en], i) => ({ core: true, cells: [`${i + 1} · ${en.replace(/ \(.*\)$/, '').replace('(كُنْتُ قَدْ …)', '')}`, { ar: ar.replace(/ \(.*\)$/, '') }, '______________'] })),
    foot: 'Example: بَكَالُورْيُوسُ الهَنْدَسَةِ · كُنْتُ قَدْ أَنْجَزْتُ مَشْرُوعًا · قَالَ أُسْتَاذِي إِنَّنِي مُؤَهَّلٌ · إِذَا قُبِلْتُ، سَأَتَخَصَّصُ … · أَطْمَحُ إِلَى …',
    notes: 'WRITING QUESTION 1 (website, 5 marks): one mark per field completed accurately in Arabic (a phrase is enough). Field 2 must use كُنْتُ قَدْ + past; field 3 قَالَ إِنَّ (+ إِنَّنِي); field 4 a Type 1 conditional (إِذَا + past → سَـ). Students may describe a fictional applicant.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 13, eyebrow: 'Writing · Question 2 · 140–155 words · 15 marks (website)', title: 'Education and my future', ltr: true, ar: 'التَّعْلِيمُ وَمُسْتَقْبَلِي',
    cols: [{ label: 'Website mark scheme', w: 7.6 }, { label: 'Marks', w: 4.73 }],
    rows: A.mark_scheme.writing_q2.map(([name, m, items]) => ({ core: true, cells: [tr(items.join(' · ')), `${name} /${m}`] })),
    foot: 'Independent evidence: no translation software or AI. Plan the four moves (P2-L09): background · reality · analysis (idhā AND law) · conclusion.',
    notes: 'WRITING QUESTION 2 (website, 15 marks): a 140–155-word article on education and future plans. Required: a past perfect, reported speech with a verb other than قَالَ, a Type 1 and a Type 2 conditional; formal connectors add credit. Mark scheme exactly as on the website (Accuracy: إِنَّ / أَنَّ 2 · كَانَ agreement 2 · the لَـ of the Type 2 result 1). The P2-L09 website model is a full-mark exemplar — show it ONLY after writing.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 4, eyebrow: 'Speaking · Part C · role play · 4 marks (website)', title: 'Role play: a university admissions interview', ltr: true, ar: 'مُقَابَلَةُ القَبُولِ',
    cols: [{ label: 'Prompt (website)', w: 6.6, size: 19 }, { label: 'What is assessed', w: 5.73 }],
    rows: A.roleplay.map(([ar, en]) => ({ core: true, cells: [{ ar }, en] })),
    foot: 'Marks (website): communication 2 · accuracy 2 (prompt 1 past perfect · prompt 2 qāla inna · prompt 3 an accurate Type 1).',
    notes: `ROLE PLAY (website, 4 marks). Teacher plays a university admissions tutor: أَهْلًا وَسَهْلًا. حَدِّثْنِي عَنْ نَفْسِكَ وَعَنْ خَلْفِيَّتِكَ التَّعْلِيمِيَّةِ. Model answers: كُنْتُ قَدْ حَصَلْتُ عَلَى خِبْرَةٍ فِي البَرْمَجَةِ … · قَالَ أُسْتَاذِي إِنَّنِي مُجْتَهِدٌ … · إِذَا قُبِلْتُ، سَأَدْرُسُ الهَنْدَسَةَ … · مَا التَّخَصُّصُ الأَنْسَبُ لِطُمُوحِي؟ Website mark scheme: ${A.mark_scheme.speaking[0][2].join(' ')} To a girl: عَرِّفِي · صِفِي · قُولِي · اطْلُبِي · قُبِلْتِ.`,
  },
  {
    type: 'formsTable', stage: 'youdo', min: 5, eyebrow: 'Speaking · Part C · topic conversation · 6 marks (website)', title: 'Topic conversation', ltr: true, ar: 'المُحَادَثَةُ',
    cols: [{ label: 'Question (website)', w: 6.3, size: 19 }, { label: 'Meaning → required', w: 6.03 }],
    rows: A.topic.map(([ar, en]) => ({ cells: [{ ar: ar.replace(/ \(.*\)$/, '') }, `${en.replace(/ \(.*\)$/, '')} → ${(en.match(/\((.*)\)$/) || ['', ''])[1]}`] })),
    foot: 'Marks (website): communication 3 · quality of language 3 — the examiner records whether the Type 2 is produced spontaneously or avoided.',
    notes: `TOPIC CONVERSATION (website, 6 marks): structure · reason · extra (P2-L11). Website mark scheme: ${A.mark_scheme.speaking[1][2].join(' ')} Allow time-buying and repair phrases (سُؤَالٌ مُهِمٌّ · دَعْنِي أُفَكِّرُ · عَفْوًا، أَقْصِدُ). To a girl: كُنْتِ قَدْ قَرَّرْتِهِ · مُسْتَقْبَلِكِ · مُعَلِّمُوكِ · طُمُوحَاتِكِ · لَدَيْكِ · سَتَخْتَارِينَ. ORGANISATION: one-to-one while others finish writing, or trusted pairs with the teacher as examiner.`,
  },
  {
    type: 'formsTable', stage: 'feedback', min: 3, eyebrow: 'Results · your P2 four-skills profile (website)', title: 'My P2 score profile', ltr: true, ar: 'مِلَفُّ المَهَارَاتِ',
    cols: [{ label: 'Teacher guide (total /60)', w: 6.93 }, { label: 'My score', w: 2.0 }, { label: 'Section', w: 3.4 }],
    rows: [
      { core: true, cells: ['54–60 Excellent — accurate, varied, academic Arabic about education', '/20', 'A · Listening'] },
      { core: true, cells: ['42–53 Good — secure, with a few focused gaps', '/10', 'B1 · Reading'] },
      { core: true, cells: ['30–41 Satisfactory — core communication in place', '/20', 'B2 · Writing'] },
      { core: true, cells: ['Below 30 — revisit P2-L02, L03 and L06 with guided practice', '/10', 'C · Speaking'] },
    ],
    foot: 'Website: My writing improvement target … · My speaking improvement target …',
    notes: 'PROFILE (website: complete the four components to generate targeted guidance). The bands are a teacher guide in line with the P1 and D-unit assessments. Return each student’s P2-L11 “priority error” sticky note next to their score.',
  },
  D.selfCheckSlide([
    { route: 'core', text: 'I can report speech accurately (qāla inna · akkada anna · the right pronoun).' },
    { route: 'core', text: 'I can describe my background with kuntu qad + past.' },
    { route: 'develop', text: 'I can make a real plan with idhā … sa-.' },
    { route: 'develop', text: 'I can imagine the road not taken with law … la-.' },
    { route: 'stretch', text: 'I can write an article with all five P2 structures and two formal connectors.' },
  ]),
  D.prepSlide({
    ...NEXT,
    words: [['الخَطُّ الحَدِيدِيُّ السَّرِيعُ', 'high-speed rail', '—'], ['مِتْرُو الأَنْفَاقِ', 'the underground metro', '—'], ['يَسْتَغْرِقُ', 'it takes (time)', 'تَسْتَغْرِقُ she / it (f.)'], ['يَقْطَعُ مَسَافَةً', 'it covers a distance', 'تَقْطَعُ she / it (f.)'], ['انْبِعَاثَاتُ الكَرْبُونِ', 'carbon emissions', 'sg. انْبِعَاثٌ']],
    questionEn: 'How do you travel to school or to the city, and how long does the journey take?',
    questionAr: 'أُسَافِرُ إِلَى ______ بِوَاسِطَةِ ______ ، وَتَسْتَغْرِقُ الرِّحْلَةُ ______ .',
    homework: {
      core: 'Redo the website P2-L12 section with your lowest score; learn the five P3 words.',
      develop: 'Improve one paragraph of your assessed article (add a missing structure), then learn the five P3 words.',
      stretch: 'Write three sentences comparing two ways to travel in your city, using the five words.',
    },
    wordsSource: 'Progression P3 begins with transport (website P3-L01 “Modes of Transport — Advanced Vocabulary and Formal Descriptions”).',
  }),
  D.closeSlide({ ...NEXT, remember: 'P2 complete — well done! Carry the P2 checklist into P3: qāla inna · others anna · kāna agrees, past after qad · idhā … sa- · law … la-.' }),
];

module.exports = { meta, slides };
