'use strict';
/*
 * P1-L12 · Review and Unit Assessment: Healthy Lifestyles (60 marks: listening 20 · reading 10 · writing 20 · speaking 10)
 * Website: Pathways › Progression › P1 › Lesson 12. Twelve-question grammar spine (revision, not counted), Part A listening (three texts:
 * a nutritionist on healthy food 8 · Sami and Layla, who said what 6 · a health expert on smoking and screens 6), Part B1 reading (screens,
 * sleep and digital balance: 10), Part B2 writing (five-field health profile 5 + 140–150-word magazine article 15: task / range / accuracy),
 * Part C speaking (role play: a health consultation 4 + topic conversation 6) and the P1 profile / P2 target. Scripts, texts, questions, tasks
 * and marks are the website’s; the R-labels on the reading prompts are kept in the teacher notes rather than on the slide.
 */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P1')({
  n: 12, fileTitle: 'Review_and_Unit_Assessment_Healthy_Lifestyles', chip: 'P1 Assessment',
  title: 'Review and Unit Assessment: Healthy Lifestyles', arabic: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ',
  focus: 'Show what you can understand and produce about healthy lifestyles — every preposition fixed (ghaniyy bi- · yaftaqir ilā · yuʿānī min), every conditional built with idhā + past and sa-, every passive with a nominative subject — then choose one precise target for Progression P2.',
  icon: 'FaClipboardCheck', iconSet: 'fa6', level: 'Progression · end of unit P1',
});
const NEXT = { nextCode: 'P2-L01', nextTitle: 'School Systems and Academic Life', nextAr: 'المَنْظُومَاتُ التَّعْلِيمِيَّةُ وَالحَيَاةُ الأَكَادِيمِيَّةُ' };
const SITE = 'Pathways › Progression › P1 Healthy Lifestyles › P1-L12';
const A = require('../site-data/p1-l12-assessment.json');
const T1 = A.listening.one.script;
const T2 = A.listening.two.script;
const T3 = A.listening.three.script;
const READ = A.reading.text;
const RQ = A.reading.questions;

const lmcq = (label, title, qs, script, seed, marks, tip) => ({
  type: 'mcq', stage: 'ido', min: 4, eyebrow: `Listening · ${label} · 1 mark each (website)`, title, ar: 'الاِسْتِمَاعُ',
  seed, questions: qs,
  answerSlide: { min: 0, eyebrow: `Listening · ${label} · answers`, title: `${title}: answers`, ar: 'الإِجَابَاتُ' },
  notes: `LISTENING ${label.toUpperCase()} (website Part A, 20 marks). Before listening: label each question S / C / R / P / O and write the cue word (P1-L10). ${tip} Each recording may be played twice; students answer after the second reading.\nSCRIPT: ${script}\nPrivate chat: ${marks} letters.`,
  answerNotes: `Mark /${marks}. Reveal the script only after the attempt; ask which cue word (بِالْمِئَةِ · إِذَا · يُوصَى · a passive vowel · a speaker’s name) proved each answer.`,
});
const rmcq = (part, qs, seed, labels) => ({
  type: 'mcq', stage: 'wedo', min: 5, eyebrow: `Reading · questions ${part} · 1 mark each (website)`, title: `Reading questions ${part}`, ar: 'أَسْئِلَةُ القِرَاءَةِ', seed, questions: qs,
  answerSlide: { min: 0, eyebrow: 'Reading · answers · show AFTER the section', title: `Questions ${part}: answers`, ar: 'الإِجَابَاتُ' },
  notes: `READING (website Part B1: R1 main idea · R2 detail · R3 structure, relationship and attitude · R4 conditional gap-fill). Website skill labels for these questions: ${labels}. Keep the text on the previous slide available.`,
  answerNotes: 'Mark /5. Ask one student to read the evidence phrase aloud (by invitation).',
});
const strip = (s) => s.replace(/^R\d — /, '');

const slides = [
  D.titleSlide({
    n: 12, siteRef: SITE,
    plan: '0–1 Welcome · 1–2 Map · 2–6 Grammar spine (not marked) · 6–7 Assessment map · 7–21 Listening (20) · 21–29 Reading (10) · 29–46 Writing (20) · 46–56 Speaking (10, one-to-one or trusted pairs) · 56–60 Profile and P2 target.',
    source: 'The website P1-L12 is a four-skill, 60-mark unit assessment: a twelve-question grammar spine (revision, not counted), Part A listening (three texts — a nutritionist on healthy food 8 · Sami and Layla: who said what 6 · a health expert on smoking and screens 6 = 20), Part B1 reading (screens, sleep and digital balance: 10), Part B2 writing (five-field health profile 5 + 140–150-word youth-magazine article 15, marked task / range / accuracy) and Part C speaking (role play: a health consultation 4 + topic conversation 6), then a P2 target.',
    support: `• Everyone sits the same 60 marks. Access arrangements: extra time, questions read aloud in English, one section on screen at a time; speaking one-to-one or in trusted pairs (it can move to the next lesson).
• If time is short: listening + reading in class; writing and speaking next lesson.
• Health is personal: the profile, article and role play may describe a fictional student. Do not ask anyone to disclose real health conditions, weight or mental health (P1-L03 safeguarding note).
• Accuracy focus today: one verb, one preposition · idhā + past → sa- · passive subject in -u · anna + -a · things in the plural take -a.`,
  }),
  D.welcomeSlide(),
  {
    type: 'journey', stage: 'welcome', eyebrow: 'Today’s lesson map', title: 'Our assessment, step by step', ar: 'خَرِيطَةُ الدَّرْسِ',
    steps: [
      { stage: 'donow', min: 4, text: 'Grammar spine (not marked).', ar: 'تَهْيِئَةٌ' },
      { stage: 'teach', min: 2, text: 'The P1 checklist and the 60-mark map.', ar: 'خُطَّةُ التَّقْيِيمِ' },
      { stage: 'ido', min: 14, text: 'Listening: three texts, 20 marks.', ar: 'الاِسْتِمَاعُ' },
      { stage: 'wedo', min: 8, text: 'Reading: 10 marks.', ar: 'القِرَاءَةُ' },
      { stage: 'youdo', min: 27, text: 'Writing 20 + speaking 10.', ar: 'الكِتَابَةُ وَالتَّحَدُّثُ' },
      { stage: 'feedback', min: 3, text: 'My profile and one P2 target.', ar: 'الهَدَفُ' },
      { stage: 'prep', min: 2, text: 'Get ready for P2: school systems.', ar: 'اِسْتَعِدَّ' },
    ],
    support: 'Start each section with the questions you find easiest. Leave a blank and come back. The grammar spine does not count.',
    notes: 'LESSON MAP. Website sections: grammar spine · Part A listening · Part B1 reading · Part B2 writing · Part C speaking · mark scheme · reflection.',
  },
  D.doNow({
    questions: [
      q('What does فَهْمُ المَسْمُوعِ mean?', ['listening comprehension', 'reading comprehension', 'the conversation'], 'Prepared at home (P1-L11).'),
      q('Complete the conditional: إِذَا ___ الرِّيَاضَةَ، سَتَشْعُرُ بِتَحَسُّنٍ.', ['مَارَسْتَ', 'تُمَارِسُ', 'سَتُمَارِسُ'], 'Website grammar spine 1.'),
      q('Complete: يُوصَى ___ الخُضَارِ.', ['بِتَنَاوُلِ', 'أَنْ نَتَنَاوَلَ', 'تَنَاوُلَ'], 'Website grammar spine 4.'),
      q('Complete: الوَجْبَةُ تَفْتَقِرُ ___ الأَلْيَافِ.', ['إِلَى', 'بِـ', 'مِنْ'], 'Website grammar spine 6.'),
      q('Choose the correct agreement.', ['عَادَاتٌ صِحِّيَّةٌ', 'عَادَاتٌ صِحِّيُّونَ', 'عَادَاتٌ صِحِّيٌّ'], 'Website grammar spine 10.'),
    ],
    keyIdea: { text: 'This warm-up does NOT count. Use it to choose ONE thing to check in your writing today.', ar: 'حَرْفُ الجَرِّ · الشَّرْطُ · المَجْهُولُ · أَنَّ · المُطَابَقَةُ' },
    retrieves: 'Question 1 tests one of the words prepared at home at the end of P1-L11. Questions 2–5 are from the website twelve-question grammar spine (used diagnostically; the full spine is reviewed on the next slide).',
  }),
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Review · the P1 grammar spine (website)', title: 'The P1 accuracy checklist', ar: 'مُرَاجَعَةُ القَوَاعِدِ', ltr: true,
    cols: [{ label: 'Check', w: 3.0 }, { label: 'Model', w: 6.6, size: 22 }, { label: 'Lesson', w: 2.73 }],
    rows: [
      { core: true, cells: ['verb + preposition', { ar: 'غَنِيٌّ بِالبُرُوتِينِ · تَفْتَقِرُ إِلَى الأَلْيَافِ · أُعَانِي مِنَ التَّوَتُّرِ' }, 'P1-L01 · L03 · L05'] },
      { core: true, cells: ['conditional', { ar: 'إِذَا مَارَسْتَ الرِّيَاضَةَ، سَتَنْخَفِضُ نِسْبَةُ التَّوَتُّرِ' }, 'P1-L03'] },
      { core: true, cells: ['passive', { ar: 'يُشَخَّصُ المَرِيضُ · يُوصَى بِتَنَاوُلِ الخُضَارِ' }, 'P1-L01 · L06'] },
      { cells: ['Form II · comparative', { ar: 'النَّوْمُ يُقَوِّي التَّرْكِيزَ · النَّوْمُ أَنْفَعُ مِنَ السَّهَرِ' }, 'P1-L02 · L09'] },
      { cells: ['case and agreement', { ar: 'هَلْ تَعْلَمُ أَنَّ النَّوْمَ … · عَادَاتٌ صِحِّيَّةٌ' }, 'P1-L07 · L01'] },
    ],
    foot: 'And one habit for every part today: inform, do not judge — describe the habit, never the worth of people.',
    notes: 'REVIEW (website twelve-question grammar spine, correct answers): مَارَسْتَ · سَتَنْخَفِضُ نِسْبَةُ التَّوَتُّرِ · يُشَخَّصُ المَرِيضُ · بِتَنَاوُلِ · بِـ · إِلَى · مِنَ · عَلَى · أَنَّ النَّوْمَ · عَادَاتٌ صِحِّيَّةٌ · أَنْفَعُ · يُقَوِّي. Close the vocabulary vault during each section.',
  },
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Assessment map (website) · 60 marks in total', title: 'Four skills, sixty marks', ltr: true, ar: 'خُطَّةُ التَّقْيِيمِ',
    cols: [{ label: 'Marks', w: 1.4 }, { label: 'What you do', w: 7.2 }, { label: 'Section', w: 3.73 }],
    rows: [
      { core: true, cells: ['20', 'Three texts (each heard twice): a nutritionist on healthy food (8) · Sami and Layla (6) · a health expert on smoking and screens (6)', 'A · Listening'] },
      { core: true, cells: ['10', 'Screens, sleep and balance: main idea, detail, structure, attitude and a conditional gap-fill', 'B1 · Reading'] },
      { core: true, cells: ['20', 'A five-field health profile (5) + a 140–150-word magazine article (15)', 'B2 · Writing'] },
      { core: true, cells: ['10', 'A role play: a health consultation (4) + a topic conversation (6)', 'C · Speaking'] },
    ],
    notes: 'ASSESSMENT MAP (website: sixty marks across listening, reading, writing and speaking).',
  },
  lmcq('Text 1 · questions 1–4', 'A nutritionist on healthy food (1)', A.listening.one.questions.slice(0, 4).map((x) => q(x.prompt, x.options, x.feedback)), T1, 71, 4, 'Question 4 is a statistic: ثَلَاثِينَ بِالْمِئَةِ = 30%.'),
  lmcq('Text 1 · questions 5–8', 'A nutritionist on healthy food (2)', A.listening.one.questions.slice(4, 8).map((x) => q(x.prompt, x.options, x.feedback)), T1, 72, 4, 'Questions 5–6 are conditionals: listen for إِذَا and the sa- result.'),
  lmcq('Text 2 · 6 questions', 'Sami and Layla: who said what?', A.listening.two.questions.map((x) => q(x.prompt, x.options, x.feedback)), T2, 73, 6, 'Attribution: write S / L / both beside each question while listening.'),
  lmcq('Text 3 · 6 questions', 'A health expert on smoking and screens', A.listening.three.questions.map((x) => q(x.prompt.replace('Which statement is supported by the text?', 'Which statement is supported?'), x.options, x.feedback)), T3, 74, 6, 'Listen for the passive يُشَخَّصُ and the harm verbs يُلْحِقُ الضَّرَرَ بِـ · يُعِيقُ · يُضْعِفُ.'),
  { type: 'passage', stage: 'wedo', min: 3, eyebrow: 'Reading · Part B1 · 10 marks (website)', title: 'Screens, sleep and balance', ar: 'الشَّاشَاتُ وَالنَّوْمُ وَالتَّوَازُنُ', text: READ, notes: 'READING TEXT (website Part B1). No English support on assessment texts. Strategy: signal phrase → evidence or opinion (P1-L08) · idhā … sa- = cause and effect · a passive hides the doer · loaded words → attitude.' },
  rmcq('1–5', RQ.slice(0, 5).map((x) => q(strip(x.prompt), x.options, x.feedback)), 75, 'R1 · R2 · R2 · R2 · R3'),
  rmcq('6–10', RQ.slice(5, 10).map((x) => q(strip(x.prompt), x.options, x.feedback)), 76, 'R3 · R3 · R3 · R4 · R4'),
  {
    type: 'formsTable', stage: 'youdo', min: 5, eyebrow: 'Writing · Question 1 · health profile · 5 marks (website)', title: 'Complete the health profile', ltr: true, ar: 'المِلَفُّ الصِّحِّيُّ',
    cols: [{ label: 'Field', w: 3.6 }, { label: 'Arabic label', w: 4.0, size: 20 }, { label: 'Your answer in Arabic', w: 4.73 }],
    rows: A.writing_form.map(([ar, en], i) => ({ core: true, cells: [`${i + 1} · ${en}`, { ar: ar.replace(/ \(.*\)$/, '') }, '______________'] })),
    foot: 'Example: نِظَامٌ غَنِيٌّ بِالخُضَارِ · ثَلَاثَ مَرَّاتٍ · سَبْعُ سَاعَاتٍ · أُعَانِي مِنَ السَّهَرِ · إِذَا نِمْتُ مُبَكِّرًا، سَيَتَحَسَّنُ تَرْكِيزِي',
    notes: 'WRITING QUESTION 1 (website, 5 marks): one mark per field completed accurately in Arabic (a phrase is enough). Field 4 rewards يُعَانِي مِنْ; field 5 must be a Type 1 conditional (إِذَا + past → سَـ) for the mark. Students may describe a fictional student.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 13, eyebrow: 'Writing · Question 2 · 140–150 words · 15 marks (website)', title: 'Healthy lifestyles in the 21st century', ltr: true, ar: 'أَسَالِيبُ الحَيَاةِ الصِّحِّيَّةِ',
    cols: [{ label: 'Website mark scheme', w: 6.6 }, { label: 'Marks', w: 5.73 }],
    rows: A.mark_scheme.writing_q2.map(([name, m, items]) => ({ core: true, cells: [items.join(' · ').replace(/\(إِذَا … سَـ\)/, '(idhā … sa-)').replace(/\(يُعَالَجُ \/ يُوصَى بِـ\)/, '(yuʿālaj / yūṣā bi-)').replace(/\(غَنِيٌّ بِـ، يَفْتَقِرُ إِلَى، يُعَانِي مِنْ\)/, '(ghaniyy bi-, yaftaqir ilā, yuʿānī min)').replace('a past-form verb after إِذَا and سَـ in the result', 'a past-form verb after idhā and sa- in the result'), `${name} /${m}`] })),
    foot: 'Independent evidence: no translation software or AI. Plan the four moves (P1-L09), then count your Range markers and check every preposition.',
    notes: 'WRITING QUESTION 2 (website, 15 marks): a 140–150-word article for a youth health magazine on healthy lifestyles in the twenty-first century — diet, exercise, mental health and a clear opinion. Required: a Type 1 conditional and a medical passive; further Range markers add credit. Mark scheme exactly as on the website. The P1-L09 website model is a full-mark exemplar — show it ONLY after writing.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 4, eyebrow: 'Speaking · Part C · role play · 4 marks (website)', title: 'Role play: a health consultation', ltr: true, ar: 'اسْتِشَارَةٌ صِحِّيَّةٌ',
    cols: [{ label: 'Prompt (website)', w: 6.6, size: 20 }, { label: 'What is assessed', w: 5.73 }],
    rows: A.roleplay.map(([ar, en]) => ({ core: true, cells: [{ ar }, en.replace('غَنِيٌّ بِـ or يَحْتَوِي عَلَى', 'ghaniyy bi- or yaḥtawī ʿalā').replace('يُعَانِي مِنْ', 'yuʿānī min')] })),
    foot: 'Marks (website): communication 2 · accuracy 2 (prompt 3 uses yuʿānī min; prompt 4 asks a conditional question).',
    notes: `ROLE PLAY (website, 4 marks). Teacher plays a school health adviser: مَرْحَبًا، كَيْفَ يُمْكِنُنِي مُسَاعَدَتُكَ؟ صِفْ لِي نِظَامَكَ الغِذَائِيَّ. Model answers: طَعَامِي غَنِيٌّ بِالخُضَارِ وَيَحْتَوِي عَلَى بُرُوتِينٍ … · أَتَمَرَّنُ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ … · أُعَانِي مِنَ السَّهَرِ قَبْلَ الامْتِحَانَاتِ … · إِذَا نِمْتُ مُبَكِّرًا، هَلْ سَيَتَحَسَّنُ تَرْكِيزِي؟ Website mark scheme: ${A.mark_scheme.speaking[0][2].join(' ')} To a girl: صِفِي · قُولِي · اُطْلُبِي.`,
  },
  {
    type: 'formsTable', stage: 'youdo', min: 5, eyebrow: 'Speaking · Part C · topic conversation · 6 marks (website)', title: 'Topic conversation', ltr: true, ar: 'المُحَادَثَةُ',
    cols: [{ label: 'Question (website)', w: 6.6, size: 20 }, { label: 'Required', w: 5.73 }],
    rows: A.topic.map(([ar, en]) => ({ core: true, cells: [{ ar: ar.replace(/ \(.*\)$/, '') }, en.replace('(use يُعَانِي مِنْ and يَتَغَلَّبُ عَلَى)', '(use yuʿānī min and yataghallab ʿalā)')] })),
    foot: 'Marks (website): communication 3 · quality of language 3 — a Type 1 conditional should appear spontaneously.',
    notes: `TOPIC CONVERSATION (website, 6 marks): answer · reason · conditional (P1-L11). Website mark scheme: ${A.mark_scheme.speaking[1][2].join(' ')} Allow time-buying and repair phrases (دَعْنِي أُفَكِّرُ · عَفْوًا، أَقْصِدُ). To a girl: تَتَعَامَلِينَ · بِإِمْكَانِكِ · سَتَخْتَارِينَ · تُوصِينَ. ORGANISATION: one-to-one while others finish writing, or trusted pairs with the teacher as examiner.`,
  },
  {
    type: 'formsTable', stage: 'feedback', min: 3, eyebrow: 'Results · your P1 four-skills profile (website)', title: 'My P1 score profile', ltr: true, ar: 'مِلَفُّ المَهَارَاتِ',
    cols: [{ label: 'Teacher guide (total /60)', w: 6.93 }, { label: 'My score', w: 2.0 }, { label: 'Section', w: 3.4 }],
    rows: [
      { core: true, cells: ['54–60 Excellent — accurate, varied, academic health Arabic', '/20', 'A · Listening'] },
      { core: true, cells: ['42–53 Good — secure, with a few focused gaps', '/10', 'B1 · Reading'] },
      { core: true, cells: ['30–41 Satisfactory — core communication in place', '/20', 'B2 · Writing'] },
      { core: true, cells: ['Below 30 — revisit P1-L01, L03 and L06 with guided practice', '/10', 'C · Speaking'] },
    ],
    foot: 'Website: My writing improvement target … · My speaking improvement target …',
    notes: 'PROFILE (website: complete the four components to generate targeted guidance). The bands are a teacher guide in line with the D-unit assessments. Return each student’s P1-L11 “priority error” sticky note next to their score.',
  },
  D.selfCheckSlide([
    { route: 'core', text: 'I can describe a diet with the right prepositions (ghaniyy bi- · yaftaqir ilā).' },
    { route: 'core', text: 'I can talk about stress and coping (yuʿānī min · yataghallab ʿalā).' },
    { route: 'develop', text: 'I can build a Type 1 conditional (idhā + past → sa-).' },
    { route: 'develop', text: 'I can use the medical passive with a nominative subject.' },
    { route: 'stretch', text: 'I can write an article with 7+ Range markers and inform without judging.' },
  ]),
  D.prepSlide({
    ...NEXT,
    words: [['مَنْظُومَةٌ تَعْلِيمِيَّةٌ', 'an education system', 'pl. مَنْظُومَاتٌ'], ['مَرْحَلَةٌ ثَانَوِيَّةٌ', 'the secondary stage', 'pl. مَرَاحِلُ'], ['مَادَّةٌ إِلْزَامِيَّةٌ', 'a compulsory subject', 'pl. مَوَادُّ'], ['يَجْتَازُ', 'he passes (an exam)', 'تَجْتَازُ she'], ['يَتَفَوَّقُ فِي', 'he excels in', 'تَتَفَوَّقُ she']],
    questionEn: 'Which subject do you excel in, and which one is compulsory but hard for you?',
    questionAr: 'أَتَفَوَّقُ فِي ______ ، وَ ______ مَادَّةٌ إِلْزَامِيَّةٌ صَعْبَةٌ عَلَيَّ.',
    homework: {
      core: 'Redo the website P1-L12 section with your lowest score; learn the five P2 words.',
      develop: 'Improve one paragraph of your assessed article (add a Range marker), then learn the five P2 words.',
      stretch: 'Write three sentences comparing your school with another system, using the five words.',
    },
    wordsSource: 'Progression P2 begins with education (website P2-L01 “School Systems and Academic Life”).',
  }),
  D.closeSlide({ ...NEXT, remember: 'P1 complete — well done! Carry the P1 checklist into P2: one verb, one preposition · idhā + past → sa- · passive subject -u · anna + -a · things take -a.' }),
];

module.exports = { meta, slides };
