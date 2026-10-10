'use strict';
/*
 * P4-L12 · Review and Unit Assessment: The Built and Natural World (60 marks: listening 20 · reading 10 · writing 20 · speaking 10)
 * Website: Pathways › Progression › P4 › Lesson 12. Twelve-question grammar spine (revision, not counted), Part A listening (three texts:
 * an environmental expert on water 8 · two architects, Sami and Layla, on heritage — who said what 6 · an urban planner on a smart city 6), Part B1
 * reading (an article on the environment in the Arab world: 10), Part B2 writing (five-field environmental form 5 + 145–160-word article 15:
 * task / range / accuracy), Part C speaking (role play: an environmental challenge 4 + topic conversation 6) and the P4 profile / P5 target. Scripts,
 * texts, questions, tasks and marks are the website’s, with waṣl alif shown without a kasra, لِكَيْ always written with its sukūn and one vowel fix in
 * listening text 2: مَعْمَارِيٌّ / مَعْمَارِيَّةٌ → مِعْمَارِيٌّ / مِعْمَارِيَّةٌ (architect); the R-labels on the reading prompts are kept in the teacher notes
 * rather than on the slide; Arabic inside English task lines is shown in transliteration.
 */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P4')({
  n: 12, fileTitle: 'Review_and_Unit_Assessment_Built_and_Natural_World', chip: 'P4 Assessment',
  title: 'Review and Unit Assessment: The Built and Natural World', arabic: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ',
  focus: 'Show what you can understand and produce about the built and natural world — li-kay, yataṭallabu an and yarjū an + a verb in -a, idhā … sa- and law … la-, kānat qad, dummirat and qāla inna — then choose one precise target for Progression P5.',
  icon: 'FaClipboardCheck', iconSet: 'fa6', level: 'Progression · end of unit P4',
});
const NEXT = { nextCode: 'P5-L01', nextTitle: 'Poverty and Inequality — Analysing Social Disparities', nextAr: 'الفَقْرُ وَعَدَمُ المُسَاوَاةِ' };
const SITE = 'Pathways › Progression › P4 The Built and Natural World › P4-L12';
const A = JSON.parse(JSON.stringify(D.waslFix(require('../site-data/p4-l12-assessment.json'))).replace(/لِكَي(?!ْ)/g, 'لِكَيْ').replace(/مَعْمَارِيٌّ/g, 'مِعْمَارِيٌّ').replace(/مَعْمَارِيَّةٌ/g, 'مِعْمَارِيَّةٌ'));
const T1 = A.listening.one.script;
const T2 = A.listening.two.script;
const T3 = A.listening.three.script;
const READ = A.reading.text;
const RQ = A.reading.questions;
const G = A.grammar;
const TR = [
  ['(يَنْبَغِي / يَتَطَلَّبُ / مِنَ الضَّرُورِيِّ أَنْ + subjunctive)', '(yanbaghī / yataṭallabu / min al-ḍarūrī an + a verb in -a)'],
  ['(يَهْدِفُ / يَخْشَى / يَرْجُو أَنْ + subjunctive)', '(yahdifu / yakhshā / yarjū an + a verb in -a)'],
  ['(يَتَطَلَّبُ أَنْ + fatḥa)', '(yataṭallabu an + -a)'], ['(ـَ)', '(-a)'], ['(دُمِّرَتْ / أُعْلِنَتْ)', '(dummirat / uʿlinat)'],
  ['يُشَكِّلُ / يُمَثِّلُ', 'yushakkilu / yumaththilu'], ['يُشَكِّلُ or يُمَثِّلُ', 'yushakkilu or yumaththilu'],
  ['يَتَطَلَّبُ أَنْ + subjunctive', 'yataṭallabu an + a verb in -a'], ['لِكَيْ + subjunctive', 'li-kay + a verb in -a'], ['يَرْجُو أَنْ + subjunctive', 'yarjū an + a verb in -a'],
  ['The Type 2 لَـ prefix', 'The Type 2 la- prefix'], ['opens with لَوْ', 'opens with law'], ['invites يَتَطَلَّبُ أَنْ', 'invites yataṭallabu an'],
];
const tr = (s) => TR.reduce((t, [a, b]) => t.split(a).join(b), s);

const lmcq = (label, title, qs, script, seed, marks, tip) => ({
  type: 'mcq', stage: 'ido', min: 4, eyebrow: `Listening · ${label} · 1 mark each (website)`, title, ar: 'الاسْتِمَاعُ',
  seed, questions: qs,
  answerSlide: { min: 0, eyebrow: `Listening · ${label} · answers`, title: `${title}: answers`, ar: 'الإِجَابَاتُ' },
  notes: `LISTENING ${label.toUpperCase()} (website Part A, 20 marks). Before listening: write the trigger you expect beside each question (لِكَيْ · يَتَطَلَّبُ أَنْ · يَخْشَى / يَرْجُو أَنْ · سَـ / لَـ · كَانَ قَدْ) — P4-L10: hear the trigger, not the final -a. ${tip} Each recording may be played twice; students answer after the second reading.\nSCRIPT: ${script}\nPrivate chat: ${marks} letters.`,
  answerNotes: `Mark /${marks}. Reveal the script only after the attempt; ask which trigger or marker (li-kay · an · sa- / la- · kāna qad · a passive · a speaker’s name) proved each answer.`,
});
const rmcq = (part, qs, seed, labels) => ({
  type: 'mcq', stage: 'wedo', min: 5, eyebrow: `Reading · questions ${part} · 1 mark each (website)`, title: `Reading questions ${part}`, ar: 'أَسْئِلَةُ القِرَاءَةِ', seed, questions: qs,
  answerSlide: { min: 0, eyebrow: 'Reading · answers · show AFTER the section', title: `Questions ${part}: answers`, ar: 'الإِجَابَاتُ' },
  notes: `READING (website Part B1: R1 main idea · R2 detail · R3 triggers and the past perfect · R4 subjunctive / result-marker gap-fill and purpose). Website skill labels for these questions: ${labels}. Keep the text on the previous slide available.`,
  answerNotes: 'Mark /5. Ask one student to read the evidence phrase aloud (by invitation).',
});
const strip = (s) => s.replace(/^R\d — /, '');

const slides = [
  D.titleSlide({
    n: 12, siteRef: SITE,
    plan: '0–1 Welcome · 1–2 Map · 2–6 Grammar spine (not marked) · 6–7 Assessment map · 7–21 Listening (20) · 21–29 Reading (10) · 29–46 Writing (20) · 46–56 Speaking (10, one-to-one or trusted pairs) · 56–60 Profile and P5 target.',
    source: 'The website P4-L12 is a four-skill, 60-mark unit assessment: a twelve-question grammar spine (revision, not counted), Part A listening (three texts — an environmental expert on water 8 · two architects, Sami and Layla, on heritage: who said what 6 · an urban planner on a smart city 6 = 20), Part B1 reading (an article on the environment in the Arab world: 10), Part B2 writing (five-field environmental form 5 + 145–160-word article 15, marked task / range / accuracy) and Part C speaking (role play: an environmental challenge 4 + topic conversation 6), then a P5 target.',
    support: `• Everyone sits the same 60 marks. Access arrangements: extra time, questions read aloud in English, one section on screen at a time; speaking one-to-one or in trusted pairs (it can move to the next lesson).
• If time is short: listening + reading in class; writing and speaking next lesson.
• Environmental topics can worry young people — keep the tone hopeful (the website texts all end on a hope or a solution). Disasters and conflict are not assessed here.
• Accuracy focus today (the website mark scheme): the final -a after every trigger (the PRIMARY criterion) · the la- of the Type 2 result · the passive shape (dummirat / uʿlinat) — and in speaking, the structure each question invites. In spontaneous speech, give credit for the trigger even if the final -a is not perfectly heard (website).`,
  }),
  D.welcomeSlide(),
  {
    type: 'journey', stage: 'welcome', eyebrow: 'Today’s lesson map', title: 'Our assessment, step by step', ar: 'خَرِيطَةُ الدَّرْسِ',
    steps: [
      { stage: 'donow', min: 4, text: 'Grammar spine (not marked).', ar: 'تَهْيِئَةٌ' },
      { stage: 'teach', min: 2, text: 'The P4 checklist and the 60-mark map.', ar: 'خُطَّةُ التَّقْيِيمِ' },
      { stage: 'ido', min: 14, text: 'Listening: three texts, 20 marks.', ar: 'الاسْتِمَاعُ' },
      { stage: 'wedo', min: 8, text: 'Reading: 10 marks.', ar: 'القِرَاءَةُ' },
      { stage: 'youdo', min: 27, text: 'Writing 20 + speaking 10.', ar: 'الكِتَابَةُ وَالتَّحَدُّثُ' },
      { stage: 'feedback', min: 3, text: 'My profile and one P5 target.', ar: 'الهَدَفُ' },
      { stage: 'prep', min: 2, text: 'Get ready for P5: society.', ar: 'اسْتَعِدَّ' },
    ],
    support: 'Start each section with the questions you find easiest. Leave a blank and come back. The grammar spine does not count.',
    notes: 'LESSON MAP. Website sections: grammar spine · Part A listening · Part B1 reading · Part B2 writing · Part C speaking · mark scheme · reflection.',
  },
  D.doNow({
    questions: [
      q('What does صَلَاحِيَّاتٌ mean?', ['powers, authority', 'repairs', 'prayers'], 'Prepared at home (P4-L11).'),
      ...[0, 3, 5, 8].map((i) => q(G[i].prompt, G[i].options, `Website grammar spine ${i + 1}.`)),
    ],
    keyIdea: { text: 'This warm-up does NOT count. Use it to choose ONE thing to check in your writing today.', ar: 'لِكَيْ نُنَقِّيَ · أَنْ نَسْتَثْمِرَ · لَوْ … لَنَجَحْنَا · دُمِّرَتْ' },
    retrieves: 'Question 1 tests one of the words prepared at home at the end of P4-L11. Questions 2–5 are from the website twelve-question grammar spine (used diagnostically; the full spine is reviewed on the next slide).',
  }),
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Review · the P4 grammar spine (website)', title: 'The P4 accuracy checklist', ar: 'مُرَاجَعَةُ القَوَاعِدِ', ltr: true,
    cols: [{ label: 'Check', w: 3.0 }, { label: 'Model', w: 6.6, size: 19 }, { label: 'Lesson', w: 2.73 }],
    rows: [
      { core: true, cells: ['three triggers + -a', { ar: 'لِكَيْ نُنَقِّيَ · يَتَطَلَّبُ أَنْ نُخَصِّصَ · نَخْشَى أَنْ يَتَفَاقَمَ' }, 'P4-L01–L06'] },
      { core: true, cells: ['Type 1 · Type 2', { ar: 'إِذَا اسْتَثْمَرْنَا، سَنَحْمِي الغَدَ · لَوْ بَدَأْنَا مُبَكِّرًا، لَنَجَحْنَا' }, 'P3-L05 · P4'] },
      { core: true, cells: ['passive', { ar: 'دُمِّرَتِ المَبَانِي · أُعْلِنَتْ حَالَةُ الطَّوَارِئِ' }, 'P4-L05'] },
      { cells: ['past perfect', { ar: 'كَانَتِ المَدِينَةُ قَدْ فَقَدَتْ حَدَائِقَهَا' }, 'P4-L07'] },
      { cells: ['partners · reported', { ar: 'يَهْدِفُ إِلَى أَنْ … · قَالَ الخَبِيرُ إِنَّ …' }, 'P4-L06 · L09 · P3-L06'] },
    ],
    foot: 'And one habit for every part today: find the trigger first — then the -a.',
    notes: 'REVIEW (website twelve-question grammar spine, correct answers): لِكَيْ نُنَقِّيَ · أَنْ نَسْتَثْمِرَ · أَنْ نُخَصِّصَ · يَهْدِفُ … إِلَى أَنْ · إِذَا اسْتَثْمَرْنَا، سَنَحْمِي · لَوْ بَدَأْنَا، لَنَجَحْنَا · لَوِ اسْتَثْمَرْنَا (past) · كَانَتِ … قَدْ فَقَدَتْ · دُمِّرَتْ · أُعْلِنَتْ · قَالَ … إِنَّ · نَخْشَى أَنْ يَتَفَاقَمَ. Close the vocabulary vault during each section.',
  },
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Assessment map (website) · 60 marks in total', title: 'Four skills, sixty marks', ltr: true, ar: 'خُطَّةُ التَّقْيِيمِ',
    cols: [{ label: 'Marks', w: 1.4 }, { label: 'What you do', w: 7.2 }, { label: 'Section', w: 3.73 }],
    rows: [
      { core: true, cells: ['20', 'Three texts (each heard twice): an environmental expert on water (8) · two architects on heritage (6) · an urban planner on a smart city (6)', 'A · Listening'] },
      { core: true, cells: ['10', 'An article on the environment in the Arab world: main idea, detail, triggers and the past perfect, gap-fills, purpose', 'B1 · Reading'] },
      { core: true, cells: ['20', 'A five-field environmental form (5) + a 145–160-word article (15)', 'B2 · Writing'] },
      { core: true, cells: ['10', 'A role play: an environmental challenge (4) + a topic conversation (6)', 'C · Speaking'] },
    ],
    notes: 'ASSESSMENT MAP (website: sixty marks across listening, reading, writing and speaking).',
  },
  lmcq('Text 1 · questions 1–4', 'An environmental expert on water (1)', A.listening.one.questions.slice(0, 4).map((x) => q(x.prompt, x.options, x.feedback)), T1, 101, 4, 'Question 2: yataṭallabu an = what is required. Question 3: nakhshā an = a FEAR. Question 4: the sa- result = a real recommendation.'),
  lmcq('Text 1 · questions 5–8', 'An environmental expert on water (2)', A.listening.one.questions.slice(4, 8).map((x) => q(x.prompt, x.options, x.feedback)), T1, 102, 4, 'Question 5: the la- result = a regret (kunnā qad istathmarnā). Questions 6–7: qāla taqrīrun umamiyyun inna … = a UN report. Question 8: narjū an = a HOPE.'),
  lmcq('Text 2 · 6 questions', 'Sami and Layla: who said what', A.listening.two.questions.map((x) => q(x.prompt, x.options, x.feedback)), T2, 103, 6, 'Attribution: write S / L / both beside each question while listening — listen for the name before each line, then the trigger.'),
  lmcq('Text 3 · 6 questions', 'An urban planner on a smart city', A.listening.three.questions.map((x) => q(x.prompt, x.options, x.feedback)), T3, 104, 6, 'Each question names the structure it tests: listen for kānat qad, the three passives (dummirat · ujliya · uʿlinat), li-kay, yataṭallabu an, idhā … sa- and narjū an.'),
  { type: 'passage', stage: 'wedo', min: 3, eyebrow: 'Reading · Part B1 · 10 marks (website)', title: 'The environment in the Arab world', ar: 'البِيئَةُ فِي العَالَمِ العَرَبِيِّ', text: READ, notes: 'READING TEXT (website Part B1). No English support on assessment texts. Strategy (P4-L08): circle every verb ending in -a and box its trigger (لِكَيْ · أَنْ); underline كَانَ … قَدْ and the result marker سَـ; then ask: what is REQUIRED but not yet done?' },
  rmcq('1–5', RQ.slice(0, 5).map((x) => q(strip(x.prompt), x.options, x.feedback)), 105, 'R1 · R2 · R2 · R3 · R3'),
  rmcq('6–10', RQ.slice(5, 10).map((x) => q(strip(x.prompt), x.options, x.feedback)), 106, 'R3 · R3 · R4 · R4 · R4'),
  {
    type: 'formsTable', stage: 'youdo', min: 5, eyebrow: 'Writing · Question 1 · environmental form · 5 marks (website)', title: 'Complete the environmental form', ltr: true, ar: 'اسْتِمَارَةٌ بِيئِيَّةٌ',
    cols: [{ label: 'Field', w: 3.9 }, { label: 'Arabic label', w: 4.6, size: 17 }, { label: 'Your answer in Arabic', w: 3.83 }],
    rows: A.writing_form.map(([ar, en], i) => ({ core: true, cells: [`${i + 1} · ${tr(en)}`, { ar: ar.replace(/ \(.*\)$/, '') }, '______________'] })),
    foot: 'Example: تُشَكِّلُ نُدْرَةُ المِيَاهِ أَكْبَرَ تَحَدٍّ · يَتَطَلَّبُ الأَمْرُ أَنْ نُخَصِّصَ مِيزَانِيَّةً · لِكَيْ نَحْمِيَ البِيئَةَ · أَرْجُو أَنْ يَتَغَيَّرَ السُّلُوكُ · إِذَا اسْتَثْمَرْنَا، سَنُقَلِّلُ التَّلَوُّثَ',
    notes: 'WRITING QUESTION 1 (website, 5 marks): one mark per field completed accurately in Arabic (a phrase is enough). Field 1 must use يُشَكِّلُ / يُمَثِّلُ; field 2 يَتَطَلَّبُ أَنْ + a verb in -a; field 3 لِكَيْ + a verb in -a; field 4 يَرْجُو أَنْ + a verb in -a; field 5 a Type 1 (إِذَا + past → سَـ). Check every final -a.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 13, eyebrow: 'Writing · Question 2 · 145–160 words · 15 marks (website)', title: 'An environmental article', ltr: true, ar: 'مَقَالَةٌ بِيئِيَّةٌ',
    cols: [{ label: 'Website mark scheme', w: 7.6 }, { label: 'Marks', w: 4.73 }],
    rows: A.mark_scheme.writing_q2.map(([name, m, items]) => ({ core: true, cells: [tr(items.join(' · ')), `${name} /${m}`] })),
    foot: 'Independent evidence: no translation software or AI. Plan the four paragraphs (P4-L09): the problem (kānat qad) · what must happen · why + evidence · future and close.',
    notes: 'WRITING QUESTION 2 (website, 15 marks): a 145–160-word article on a built or natural world challenge. Required: a challenge with يُشَكِّلُ / يُمَثِّلُ, a past-perfect background, one of EACH trigger (purpose · necessity · volition — separate Range marks), a Type 2 conditional, reported speech and a proposed solution. Mark scheme exactly as on the website (Accuracy: the final -a after every trigger 2 — the primary criterion · the Type 2 la- 2 · the passive 1). The P4-L09 website model is a full-mark exemplar — show it ONLY after writing.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 4, eyebrow: 'Speaking · Part C · role play · 4 marks (website)', title: 'Role play: an environmental challenge', ltr: true, ar: 'فِي المُؤْتَمَرِ البِيئِيِّ',
    cols: [{ label: 'Prompt (website)', w: 6.6, size: 18 }, { label: 'What is assessed', w: 5.73 }],
    rows: A.roleplay.map(([ar, en]) => ({ cells: [{ ar: ar.replace(/ \(.*\)\.$/, '.') }, tr(en)] })),
    foot: 'Marks (website): communication 2 · accuracy 2 (yataṭallabu an + -a in prompt 2 · an accurate Type 1 in prompt 3).',
    notes: `ROLE PLAY (website, 4 marks). Teacher plays the host of an environmental conference: أَهْلًا بِكَ فِي المُؤْتَمَرِ البِيئِيِّ. مَا التَّحَدِّي الَّذِي تُرِيدُ أَنْ تَتَحَدَّثَ عَنْهُ؟ Model answers: يُشَكِّلُ التَّلَوُّثُ تَحَدِّيًا كَبِيرًا فِي مَدِينَتِي · يَتَطَلَّبُ الحَلُّ أَنْ نُطَوِّرَ النَّقْلَ العَامَّ · إِذَا اسْتَعْمَلْنَا الحَافِلَاتِ الكَهْرَبَائِيَّةَ، سَيَقِلُّ التَّلَوُّثُ · أَرْجُو أَنْ تَعِيشَ الأَجْيَالُ القَادِمَةُ فِي هَوَاءٍ نَظِيفٍ. Website mark scheme: ${tr(A.mark_scheme.speaking[0][2].join(' '))} To a girl: صِفِي · اشْرَحِي · اقْتَرِحِي · عَبِّرِي.`,
  },
  {
    type: 'formsTable', stage: 'youdo', min: 5, eyebrow: 'Speaking · Part C · topic conversation · 6 marks (website)', title: 'Topic conversation', ltr: true, ar: 'المُحَادَثَةُ',
    cols: [{ label: 'Question (website)', w: 6.3, size: 17 }, { label: 'Meaning → required', w: 6.03 }],
    rows: A.topic.map(([ar, en]) => ({ cells: [{ ar: ar.replace(/ \(.*\)$/, '') }, `${en.replace(/ \(.*\)\.?$/, '')} → ${tr((en.match(/\((.*)\)\.?$/) || ['', ''])[1])}`] })),
    foot: 'Marks (website): communication 3 · quality of language 3 — the examiner records whether the Type 2 and the necessity subjunctive are produced or avoided.',
    notes: `TOPIC CONVERSATION (website, 6 marks): structure · reason · extra (P4-L11). Model openings: تُشَكِّلُ نُدْرَةُ المِيَاهِ أَكْبَرَ تَحَدٍّ، بِسَبَبِ قِلَّةِ الأَمْطَارِ … وَقَدْ أُهْمِلَتِ المَوَارِدُ · لَوْ كَانَتْ لَدَيَّ صَلَاحِيَّاتُهُ، لَأَطْلَقْتُ … · يَتَطَلَّبُ الأَمْرُ أَنْ نُخَصِّصَ مِيزَانِيَّاتٍ لِلتَّرْمِيمِ لِكَيْ نَصُونَ هُوِيَّتَنَا. Website mark scheme: ${tr(A.mark_scheme.speaking[1][2].join(' '))} Allow time-buying and repair phrases (سُؤَالٌ مُهِمٌّ · دَعْنِي أُفَكِّرُ · عَفْوًا، أَقْصِدُ). To a girl: صِفِي · لَدَيْكِ · كُنْتِ سَتُغَيِّرِينَ · رَأْيِكِ. ORGANISATION: one-to-one while others finish writing, or trusted pairs with the teacher as examiner.`,
  },
  {
    type: 'formsTable', stage: 'feedback', min: 3, eyebrow: 'Results · your P4 four-skills profile (website)', title: 'My P4 score profile', ltr: true, ar: 'مِلَفُّ المَهَارَاتِ',
    cols: [{ label: 'Teacher guide (total /60)', w: 6.93 }, { label: 'My score', w: 2.0 }, { label: 'Section', w: 3.4 }],
    rows: [
      { core: true, cells: ['54–60 Excellent — accurate, varied Arabic about the built and natural world', '/20', 'A · Listening'] },
      { core: true, cells: ['42–53 Good — secure, with a few focused gaps', '/10', 'B1 · Reading'] },
      { core: true, cells: ['30–41 Satisfactory — core communication in place', '/20', 'B2 · Writing'] },
      { core: true, cells: ['Below 30 — revisit P4-L01, L04 and L05 with guided practice', '/10', 'C · Speaking'] },
    ],
    foot: 'Website: My writing improvement target … · My speaking improvement target …',
    notes: 'PROFILE (website: complete the four components to generate targeted guidance). The bands are a teacher guide in line with the P1–P3 assessments. Return each student’s P4-L11 “priority error” note next to their score.',
  },
  D.selfCheckSlide([
    { route: 'core', text: 'I can describe an environmental challenge with yushakkilu and a passive.' },
    { route: 'core', text: 'I can give a purpose with li-kay + a verb in -a.' },
    { route: 'develop', text: 'I can say what is required (yataṭallabu an) and what I hope (yarjū an) — verb in -a.' },
    { route: 'develop', text: 'I can recommend with idhā … sa- and regret with law … la-.' },
    { route: 'stretch', text: 'I can write a 145–160-word article with all three triggers, kānat qad and a cited expert.' },
  ]),
  D.prepSlide({
    ...NEXT,
    words: [['صَحِيحٌ أَنَّ', 'it is true that', '+ noun in -a'], ['غَيْرَ أَنَّ', 'however, yet', '+ noun in -a'], ['فَقْرٌ مُدْقِعٌ', 'extreme poverty', '—'], ['البَطَالَةُ', 'unemployment', '—'], ['العَدَالَةُ الاجْتِمَاعِيَّةُ', 'social justice', '—']],
    questionEn: 'Is poverty only about money? Give one point and one “however”.',
    questionAr: 'صَحِيحٌ أَنَّ ______ ، غَيْرَ أَنَّ ______ .',
    homework: {
      core: 'Redo the website P4-L12 section with your lowest score; learn the five P5 words.',
      develop: 'Improve one paragraph of your assessed article (add a missing trigger), then learn the five P5 words.',
      stretch: 'Write three sentences with ṣaḥīḥun anna … ghayra anna … about a social issue you care about.',
    },
    wordsSource: 'Progression P5 begins with poverty and inequality (website P5-L01 “Poverty and Inequality — Analysing Social Disparities”). Teacher note: approach this topic with care — some students may have direct experience of hardship.',
  }),
  D.closeSlide({ ...NEXT, remember: 'P4 complete — well done! Carry the P4 checklist into P5: li-kay · an + a verb in -a · idhā … sa- · law … la- · kānat qad · dummirat · qāla inna.' }),
];

module.exports = { meta, slides };
