'use strict';
/*
 * P3-L12 · Review and Unit Assessment: Travel, Holidays and Transport (60 marks: listening 20 · reading 10 · writing 20 · speaking 10)
 * Website: Pathways › Progression › P3 › Lesson 12. Twelve-question grammar spine (revision, not counted), Part A listening (three texts:
 * a trip to Jordan 8 · Sami and Layla on tourism, who said what 6 · a transport official on high-speed rail 6), Part B1 reading (an article on
 * responsible tourism: 10), Part B2 writing (five-field travel form 5 + 145–160-word article 15: task / range / accuracy), Part C speaking
 * (role play: a travel-agency consultation 4 + topic conversation 6) and the P3 profile / P4 target. Scripts, texts, questions, tasks and marks are
 * the website’s, with waṣl alif shown without a kasra and one reading fix (وَقَدْ كَانَ الكَاتِبُ قَدْ زَارَ → وَكَانَ الكَاتِبُ قَدْ زَارَ: one qad is
 * enough); the R-labels on the reading prompts are kept in the teacher notes rather than on the slide; Arabic inside English task lines is shown in
 * transliteration.
 */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P3')({
  n: 12, fileTitle: 'Review_and_Unit_Assessment_Travel_Holidays_and_Transport', chip: 'P3 Assessment',
  title: 'Review and Unit Assessment: Travel, Holidays and Transport', arabic: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ',
  focus: 'Show what you can understand and produce about travel — kuntu qad for the background, idhā … sa- to recommend, law … la- to reflect, qāla inna for the guide, yustaḥsan an + a verb in -a — then choose one precise target for Progression P4.',
  icon: 'FaClipboardCheck', iconSet: 'fa6', level: 'Progression · end of unit P3',
});
const NEXT = { nextCode: 'P4-L01', nextTitle: 'The Natural World — Landscapes, Ecosystems and Biodiversity', nextAr: 'العَالَمُ الطَّبِيعِيُّ' };
const SITE = 'Pathways › Progression › P3 Travel, Holidays and Transport › P3-L12';
const A = JSON.parse(JSON.stringify(D.waslFix(require('../site-data/p3-l12-assessment.json'))).replace('وَقَدْ كَانَ الكَاتِبُ قَدْ زَارَ', 'وَكَانَ الكَاتِبُ قَدْ زَارَ'));
const T1 = A.listening.one.script;
const T2 = A.listening.two.script;
const T3 = A.listening.three.script;
const READ = A.reading.text;
const RQ = A.reading.questions;
const G = A.grammar;
const tr = (s) => s
  .replace(/\(إِذَا \+ past → سَـ\)/g, '(idhā + past → sa-)').replace(/\(لَوْ \+ past → لَـ\)/g, '(law + past → la-)').replace(/\(كَانَ قَدْ\)/g, '(kāna qad)')
  .replace(/\(يَسْتَقْطِبُ \/ يُبْهِرُ\)/g, '(yastaqṭib / yubhir)').replace(/يَحْجِزُ \/ يُقِيمُ/g, 'yaḥjiz / yuqīm').replace(/The Type 2 لَـ prefix/g, 'The Type 2 la- prefix')
  .replace(/كَانَ \/ كَانَتْ/g, 'kāna / kānat').replace(/إِنَّ after قَالَ, أَنَّ after/g, 'inna after qāla, anna after').replace(/قَالَ/g, 'qāla')
  .replace(/يَسْتَقْطِبُ or يَتَمَيَّزُ بِـ/g, 'yastaqṭib or yatamayyaz bi-').replace(/يُقِيمُ فِي/g, 'yuqīm fī').replace(/يَحْجِزُ and يُقِيمُ/g, 'yaḥjiz and yuqīm').replace(/يَحْجِزُ/g, 'yaḥjiz')
  .replace(/ \(إِذَا …\)/g, '').replace(/ \(لَوْ …\)/g, '').replace(/لَوْ/g, 'law').replace(/إِذَا/g, 'idhā');

const lmcq = (label, title, qs, script, seed, marks, tip) => ({
  type: 'mcq', stage: 'ido', min: 4, eyebrow: `Listening · ${label} · 1 mark each (website)`, title, ar: 'الاسْتِمَاعُ',
  seed, questions: qs,
  answerSlide: { min: 0, eyebrow: `Listening · ${label} · answers`, title: `${title}: answers`, ar: 'الإِجَابَاتُ' },
  notes: `LISTENING ${label.toUpperCase()} (website Part A, 20 marks). Before listening: label each question C / R / P / O and write the signal (سَـ / لَـ · قَالَ · كَانَ قَدْ · أَرَى) — P3-L10. ${tip} Each recording may be played twice; students answer after the second reading.\nSCRIPT: ${script}\nPrivate chat: ${marks} letters.`,
  answerNotes: `Mark /${marks}. Reveal the script only after the attempt; ask which signal (the result marker sa- / la- · كَانَ قَدْ · a reporting verb · أَرَى أَنَّ · a speaker’s name) proved each answer.`,
});
const rmcq = (part, qs, seed, labels) => ({
  type: 'mcq', stage: 'wedo', min: 5, eyebrow: `Reading · questions ${part} · 1 mark each (website)`, title: `Reading questions ${part}`, ar: 'أَسْئِلَةُ القِرَاءَةِ', seed, questions: qs,
  answerSlide: { min: 0, eyebrow: 'Reading · answers · show AFTER the section', title: `Questions ${part}: answers`, ar: 'الإِجَابَاتُ' },
  notes: `READING (website Part B1: R1 main idea · R2 detail · R3 conditionals, attitude and structure · R4 result-marker gap-fill and purpose). Website skill labels for these questions: ${labels}. Keep the text on the previous slide available.`,
  answerNotes: 'Mark /5. Ask one student to read the evidence phrase aloud (by invitation).',
});
const strip = (s) => s.replace(/^R\d — /, '');

const slides = [
  D.titleSlide({
    n: 12, siteRef: SITE,
    plan: '0–1 Welcome · 1–2 Map · 2–6 Grammar spine (not marked) · 6–7 Assessment map · 7–21 Listening (20) · 21–29 Reading (10) · 29–46 Writing (20) · 46–56 Speaking (10, one-to-one or trusted pairs) · 56–60 Profile and P4 target.',
    source: 'The website P3-L12 is a four-skill, 60-mark unit assessment: a twelve-question grammar spine (revision, not counted), Part A listening (three texts — a trip to Jordan 8 · Sami and Layla on tourism: who said what 6 · a transport official on high-speed rail 6 = 20), Part B1 reading (an article on responsible tourism: 10), Part B2 writing (five-field travel form 5 + 145–160-word article 15, marked task / range / accuracy) and Part C speaking (role play: a travel-agency consultation 4 + topic conversation 6), then a P4 target.',
    support: `• Everyone sits the same 60 marks. Access arrangements: extra time, questions read aloud in English, one section on screen at a time; speaking one-to-one or in trusted pairs (it can move to the next lesson).
• If time is short: listening + reading in class; writing and speaking next lesson.
• Holidays are personal: the travel form, article and role play may describe an imagined trip. Never press anyone about family travel or money.
• Accuracy focus today (the website mark scheme): the la- of the Type 2 result (the primary criterion) · kāna / kānat agreement · qāla inna, other verbs anna — and in speaking, a law answer to the law question.`,
  }),
  D.welcomeSlide(),
  {
    type: 'journey', stage: 'welcome', eyebrow: 'Today’s lesson map', title: 'Our assessment, step by step', ar: 'خَرِيطَةُ الدَّرْسِ',
    steps: [
      { stage: 'donow', min: 4, text: 'Grammar spine (not marked).', ar: 'تَهْيِئَةٌ' },
      { stage: 'teach', min: 2, text: 'The P3 checklist and the 60-mark map.', ar: 'خُطَّةُ التَّقْيِيمِ' },
      { stage: 'ido', min: 14, text: 'Listening: three texts, 20 marks.', ar: 'الاسْتِمَاعُ' },
      { stage: 'wedo', min: 8, text: 'Reading: 10 marks.', ar: 'القِرَاءَةُ' },
      { stage: 'youdo', min: 27, text: 'Writing 20 + speaking 10.', ar: 'الكِتَابَةُ وَالتَّحَدُّثُ' },
      { stage: 'feedback', min: 3, text: 'My profile and one P4 target.', ar: 'الهَدَفُ' },
      { stage: 'prep', min: 2, text: 'Get ready for P4: the natural world.', ar: 'اسْتَعِدَّ' },
    ],
    support: 'Start each section with the questions you find easiest. Leave a blank and come back. The grammar spine does not count.',
    notes: 'LESSON MAP. Website sections: grammar spine · Part A listening · Part B1 reading · Part B2 writing · Part C speaking · mark scheme · reflection.',
  },
  D.doNow({
    questions: [
      q('What does وَكِيلُ سَفَرٍ mean?', ['a travel agent', 'a travel insurance', 'a travel guidebook'], 'Prepared at home (P3-L11).'),
      ...[0, 3, 6, 9].map((i) => q(G[i].prompt, G[i].options, `Website grammar spine ${i + 1}.`)),
    ],
    keyIdea: { text: 'This warm-up does NOT count. Use it to choose ONE thing to check in your writing today.', ar: 'كُنْتُ قَدْ … · إِذَا … سَـ · لَوْ … لَـ · أَنْ يَتَعَلَّمَ' },
    retrieves: 'Question 1 tests one of the words prepared at home at the end of P3-L11. Questions 2–5 are from the website twelve-question grammar spine (used diagnostically; the full spine is reviewed on the next slide).',
  }),
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Review · the P3 grammar spine (website)', title: 'The P3 accuracy checklist', ar: 'مُرَاجَعَةُ القَوَاعِدِ', ltr: true,
    cols: [{ label: 'Check', w: 3.0 }, { label: 'Model', w: 6.6, size: 20 }, { label: 'Lesson', w: 2.73 }],
    rows: [
      { core: true, cells: ['Type 1 · Type 2', { ar: 'إِذَا زُرْتَ الأُرْدُنَّ، سَتَنْبَهِرُ · لَوْ حَجَزْتُ مُبَكِّرًا، لَوَفَّرْتُ' }, 'P3-L05'] },
      { core: true, cells: ['past perfect', { ar: 'كُنْتُ قَدْ حَجَزْتُ · كَانَتْ قَدْ أَقَامَتْ' }, 'P3-L02 · L03'] },
      { core: true, cells: ['reported speech', { ar: 'قَالَ الدَّلِيلُ إِنَّ … · أَشَارَ إِلَى أَنَّ …' }, 'P3-L06'] },
      { cells: ['an + verb in -a', { ar: 'يُسْتَحْسَنُ أَنْ يَتَعَلَّمَ الزَّائِرُ التَّحِيَّةَ' }, 'P3-L07'] },
      { cells: ['travel verbs', { ar: 'سَأُقِيمُ فِي … · تَسْتَقْطِبُ المَدِينَةُ السُّيَّاحَ · يَصِلُ بَيْنَ' }, 'P3-L01 · L02 · L04'] },
    ],
    foot: 'And one habit for every part today: name the structure the question needs before you answer.',
    notes: 'REVIEW (website twelve-question grammar spine, correct answers): إِذَا زُرْتَ الأُرْدُنَّ، سَتَنْبَهِرُ · لَوْ حَجَزْتُ مُبَكِّرًا، لَوَفَّرْتُ المَالَ · زُرْتُ · كُنْتُ قَدْ · سَأُقِيمُ · فِي · يَتَعَلَّمَ · قَالَ الدَّلِيلُ إِنَّ · إِلَى · تَسْتَقْطِبُ المَدِينَةُ السُّيَّاحَ · بَيْنَ · كَانَتْ قَدْ أَقَامَتْ. Close the vocabulary vault during each section.',
  },
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Assessment map (website) · 60 marks in total', title: 'Four skills, sixty marks', ltr: true, ar: 'خُطَّةُ التَّقْيِيمِ',
    cols: [{ label: 'Marks', w: 1.4 }, { label: 'What you do', w: 7.2 }, { label: 'Section', w: 3.73 }],
    rows: [
      { core: true, cells: ['20', 'Three texts (each heard twice): a trip to Jordan (8) · Sami and Layla on tourism (6) · a transport official on high-speed rail (6)', 'A · Listening'] },
      { core: true, cells: ['10', 'An article on responsible tourism: main idea, detail, conditionals and attitude, result-marker gap-fills, purpose', 'B1 · Reading'] },
      { core: true, cells: ['20', 'A five-field travel form (5) + a 145–160-word travel article (15)', 'B2 · Writing'] },
      { core: true, cells: ['10', 'A role play: a travel-agency consultation (4) + a topic conversation (6)', 'C · Speaking'] },
    ],
    notes: 'ASSESSMENT MAP (website: sixty marks across listening, reading, writing and speaking).',
  },
  lmcq('Text 1 · questions 1–4', 'A trip to Jordan (1)', A.listening.one.questions.slice(0, 4).map((x) => q(x.prompt, x.options, x.feedback)), T1, 91, 4, 'Question 1: two past perfects (كُنْتُ قَدْ). Question 2: whose view? The guide’s (قَالَ … إِنَّ). Question 4: the sa- result = a real plan.'),
  lmcq('Text 1 · questions 5–8', 'A trip to Jordan (2)', A.listening.one.questions.slice(4, 8).map((x) => q(x.prompt, x.options, x.feedback)), T1, 92, 4, 'Question 5: the la- result = a regret. Question 6 is a number: نَحْوَ مِلْيُونِ = about a million. Question 8 asks for the traveller’s OWN view (أَرَى أَنَّ).'),
  lmcq('Text 2 · 6 questions', 'Sami and Layla: who said what', A.listening.two.questions.map((x) => q(x.prompt, x.options, x.feedback)), T2, 93, 6, 'Attribution: write S / L / both beside each question while listening — listen for the name before each line.'),
  lmcq('Text 3 · 6 questions', 'A transport official on high-speed rail', A.listening.three.questions.map((x) => q(x.prompt, x.options, x.feedback)), T3, 94, 6, 'Listen for the reporting verbs (أَكَّدَ · أَشَارَ إِلَى · قَالَ إِنَّ · اعْتَرَفَ بِـ), كَانَتْ قَدْ and the two conditionals (sa- / la-).'),
  { type: 'passage', stage: 'wedo', min: 3, eyebrow: 'Reading · Part B1 · 10 marks (website)', title: 'Responsible tourism', ar: 'السِّيَاحَةُ المَسْؤُولَةُ', text: READ, notes: 'READING TEXT (website Part B1). No English support on assessment texts. Strategy (P3-L08): box every إِذَا and لَوْ, underline the result marker, and ask: does the writer recommend (idhā) or criticise (law)? Website text corrected: وَكَانَ الكَاتِبُ قَدْ زَارَ (the website has an extra قَدْ before كَانَ).' },
  rmcq('1–5', RQ.slice(0, 5).map((x) => q(strip(x.prompt), x.options, x.feedback)), 95, 'R1 · R2 · R2 · R3 · R3'),
  rmcq('6–10', RQ.slice(5, 10).map((x) => q(strip(x.prompt), x.options, x.feedback)), 96, 'R3 · R3 · R4 · R4 · R4'),
  {
    type: 'formsTable', stage: 'youdo', min: 5, eyebrow: 'Writing · Question 1 · travel form · 5 marks (website)', title: 'Complete the travel form', ltr: true, ar: 'اسْتِمَارَةُ السَّفَرِ',
    cols: [{ label: 'Field', w: 3.6 }, { label: 'Arabic label', w: 4.6, size: 18 }, { label: 'Your answer in Arabic', w: 4.13 }],
    rows: A.writing_form.map(([ar, en], i) => ({ core: true, cells: [`${i + 1} · ${tr(en)}`, { ar: ar.replace(/ \(.*\)$/, '') }, '______________'] })),
    foot: 'Example: سَأُقِيمُ فِي رِيَاضٍ فِي فَاسَ · حَجَزْتُ عَبْرَ الإِنْتَرْنِتْ · كُنْتُ قَدْ قَرَأْتُ عَنِ المَدِينَةِ · إِذَا زُرْتُهَا، سَأَبْقَى أُسْبُوعًا · لَوْ بَقِيتُ أَطْوَلَ، لَرَأَيْتُ المَزِيدَ',
    notes: 'WRITING QUESTION 1 (website, 5 marks): one mark per field completed accurately in Arabic (a phrase is enough). Field 1 must use يُقِيمُ فِي; field 2 يَحْجِزُ; field 3 كُنْتُ قَدْ + past; field 4 a Type 1 (إِذَا + past → سَـ); field 5 a Type 2 (لَوْ + past → لَـ). Students may describe an imagined trip.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 13, eyebrow: 'Writing · Question 2 · 145–160 words · 15 marks (website)', title: 'A travel article', ltr: true, ar: 'مَقَالَةُ سَفَرٍ',
    cols: [{ label: 'Website mark scheme', w: 7.6 }, { label: 'Marks', w: 4.73 }],
    rows: A.mark_scheme.writing_q2.map(([name, m, items]) => ({ core: true, cells: [tr(items.join(' · ')), `${name} /${m}`] })),
    foot: 'Independent evidence: no translation software or AI. Plan the four paragraphs (P3-L09): narrative (kuntu qad) · recommend (idhā) · reflect (law) · conclude.',
    notes: 'WRITING QUESTION 2 (website, 15 marks): a 145–160-word travel article. Required: a past-perfect background, yaḥjiz / yuqīm, a Type 1 recommendation AND a Type 2 reflection (two separate Range marks), reported speech with a verb other than قَالَ, and a tourism verb. Mark scheme exactly as on the website (Accuracy: the لَـ of the Type 2 result 2 · كَانَ / كَانَتْ agreement 2 · إِنَّ / أَنَّ 1). The P3-L09 website model is a full-mark exemplar — show it ONLY after writing.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 4, eyebrow: 'Speaking · Part C · role play · 4 marks (website)', title: 'Role play: a travel-agency consultation', ltr: true, ar: 'فِي وَكَالَةِ السَّفَرِ',
    cols: [{ label: 'Prompt (website)', w: 6.6, size: 18 }, { label: 'What is assessed', w: 5.73 }],
    rows: A.roleplay.map(([ar, en]) => ({ cells: [{ ar: ar.replace(/ \(.*\)\.$/, '.') }, tr(en)] })),
    foot: 'Marks (website): communication 2 · accuracy 2 (yaḥjiz / yuqīm past forms in prompt 3 · an accurate Type 1 recommendation).',
    notes: `ROLE PLAY (website, 4 marks). Teacher plays a travel agent: أَهْلًا وَسَهْلًا فِي وَكَالَتِنَا. كَيْفَ أُسَاعِدُكَ؟ Model answers: مَا الَّذِي تَتَمَيَّزُ بِهِ فَاسُ؟ (agent: تَتَمَيَّزُ بِأَزِقَّتِهَا وَتَسْتَقْطِبُ آلَافَ السُّيَّاحِ) · أُرِيدُ أَنْ أَحْجِزَ غُرْفَةً؛ أَيْنَ يُمْكِنُ أَنْ أُقِيمَ؟ · فِي رِحْلَتِي السَّابِقَةِ كُنْتُ قَدْ حَجَزْتُ فُنْدُقًا، لٰكِنِّي اكْتَشَفْتُ أَنَّ الحَجْزَ أُلْغِيَ … · إِذَا سَافَرْتُ فِي الرَّبِيعِ، مَاذَا تَنْصَحُنِي؟ Website mark scheme: ${tr(A.mark_scheme.speaking[0][2].join(' '))} To a girl: اسْأَلِي · صِفِي · وَاجَهْتِهَا · اطْلُبِي.`,
  },
  {
    type: 'formsTable', stage: 'youdo', min: 5, eyebrow: 'Speaking · Part C · topic conversation · 6 marks (website)', title: 'Topic conversation', ltr: true, ar: 'المُحَادَثَةُ',
    cols: [{ label: 'Question (website)', w: 6.3, size: 18 }, { label: 'Meaning → required', w: 6.03 }],
    rows: A.topic.map(([ar, en]) => ({ cells: [{ ar: ar.replace(/ \(.*\)$/, '') }, `${en.replace(/ \(.*\)$/, '')} → ${(en.match(/\((.*)\)$/) || ['', ''])[1]}`] })),
    foot: 'Marks (website): communication 3 · quality of language 3 — the examiner records whether the Type 2 is produced or avoided.',
    notes: `TOPIC CONVERSATION (website, 6 marks): structure · reason · extra (P3-L11). Website mark scheme: ${tr(A.mark_scheme.speaking[1][2].join(' '))} Allow time-buying and repair phrases (سُؤَالٌ جَمِيلٌ · دَعْنِي أُفَكِّرُ · عَفْوًا، أَقْصِدُ). To a girl: صِفِي · كُنْتِ قَدْ تَوَقَّعْتِهِ · رَأْيُكِ · لَدَيْكِ · سَتَذْهَبِينَ. ORGANISATION: one-to-one while others finish writing, or trusted pairs with the teacher as examiner.`,
  },
  {
    type: 'formsTable', stage: 'feedback', min: 3, eyebrow: 'Results · your P3 four-skills profile (website)', title: 'My P3 score profile', ltr: true, ar: 'مِلَفُّ المَهَارَاتِ',
    cols: [{ label: 'Teacher guide (total /60)', w: 6.93 }, { label: 'My score', w: 2.0 }, { label: 'Section', w: 3.4 }],
    rows: [
      { core: true, cells: ['54–60 Excellent — accurate, varied Arabic about travel and tourism', '/20', 'A · Listening'] },
      { core: true, cells: ['42–53 Good — secure, with a few focused gaps', '/10', 'B1 · Reading'] },
      { core: true, cells: ['30–41 Satisfactory — core communication in place', '/20', 'B2 · Writing'] },
      { core: true, cells: ['Below 30 — revisit P3-L03, L05 and L07 with guided practice', '/10', 'C · Speaking'] },
    ],
    foot: 'Website: My writing improvement target … · My speaking improvement target …',
    notes: 'PROFILE (website: complete the four components to generate targeted guidance). The bands are a teacher guide in line with the P1 and P2 assessments. Return each student’s P3-L11 “priority error” note next to their score.',
  },
  D.selfCheckSlide([
    { route: 'core', text: 'I can describe a trip with kuntu qad + past and yaḥjiz / yuqīm.' },
    { route: 'core', text: 'I can recommend with idhā … sa- (or fa-lā budda min).' },
    { route: 'develop', text: 'I can reflect with law … la- — and answer a law question with law.' },
    { route: 'develop', text: 'I can report a guide (qāla inna · ashāra ilā anna) and advise with yustaḥsan an.' },
    { route: 'stretch', text: 'I can write a 145–160-word travel article with eight Range markers.' },
  ]),
  D.prepSlide({
    ...NEXT,
    words: [['نِظَامٌ بِيئِيٌّ', 'an ecosystem', 'pl. أَنْظِمَةٌ بِيئِيَّةٌ'], ['تَنَوُّعٌ حَيَوِيٌّ', 'biodiversity', '—'], ['مَوْطِنٌ طَبِيعِيٌّ', 'a natural habitat', 'pl. مَوَاطِنُ'], ['يُهَدِّدُ', 'it threatens', 'تُهَدِّدُ she / it (f.)'], ['لِكَيْ', 'so that, in order to', '+ verb in -a']],
    questionEn: 'Which natural place would you most like to protect, and why?',
    questionAr: 'أُرِيدُ أَنْ أَحْمِيَ ______ لِكَيْ ______ .',
    homework: {
      core: 'Redo the website P3-L12 section with your lowest score; learn the five P4 words.',
      develop: 'Improve one paragraph of your assessed article (add a missing structure), then learn the five P4 words.',
      stretch: 'Write three sentences about a natural place you know, using the five words and one li-kay + a verb in -a.',
    },
    wordsSource: 'Progression P4 begins with the natural world (website P4-L01 “The Natural World — Landscapes, Ecosystems and Biodiversity”).',
  }),
  D.closeSlide({ ...NEXT, remember: 'P3 complete — well done! Carry the P3 checklist into P4: kuntu qad · idhā … sa- · law … la- · qāla inna · an + a verb in -a.' }),
];

module.exports = { meta, slides };
