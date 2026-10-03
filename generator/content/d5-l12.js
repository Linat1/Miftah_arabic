'use strict';
/*
 * D5-L12 · Review and Unit Assessment: Hobbies, Sport and Leisure (60 marks: listening 20 · reading 10 · writing 20 · speaking 10)
 * Website: Pathways › Development › D5 › Lesson 12. Twelve-question grammar spine (revision, not counted), Part A listening (three texts:
 * a sporting life 8 · Sami and Layla’s holidays 6 · a cultural evening 6), Part B1 reading (a leisure life story: 10), Part B2 writing (five-field
 * leisure profile 5 + 130–140-word article 15: task / range / accuracy), Part C speaking (role play at the leisure centre 4 + topic conversation 6)
 * and the D5 reflection / D6 target. Scripts, texts, questions, tasks and marks are the website’s; one vowel slip corrected (أُعْجِبْتُ).
 */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D5')({
  n: 12, fileTitle: 'Review_and_Unit_Assessment_Hobbies_Sport_Leisure', chip: 'D5 Assessment',
  title: 'Review and Unit Assessment: Hobbies, Sport and Leisure', arabic: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ',
  focus: 'Show what you can understand and produce about hobbies, sport, holidays and culture — with the past tense accurate in every skill — then choose one precise next step for D6.',
  icon: 'FaClipboardCheck', iconSet: 'fa6', level: 'Development · end of unit D5',
});
const NEXT = { nextCode: 'D6-L01', nextTitle: 'Countries, Nationalities and Languages of the Arab World', nextAr: 'دُوَلُ العَالَمِ العَرَبِيِّ وَجِنْسِيَّاتُهَا وَلُغَاتُهَا' };
const SITE = 'Pathways › Development › D5 Hobbies, Sport and Leisure › D5-L12';
const A = require('../site-data/d5-l12-assessment.json');
const T1 = A.listening.one.script.replace('وَأُعْجَبْتُ', 'وَأُعْجِبْتُ');
const T2 = A.listening.two.script;
const T3 = A.listening.three.script;
const READ = A.reading.text;

const lmcq = (label, title, qs, script, seed, marks) => ({
  type: 'mcq', stage: 'ido', min: 4, eyebrow: `Listening · ${label} · 1 mark each (website)`, title, ar: 'الاِسْتِمَاعُ',
  seed, questions: qs,
  answerSlide: { min: 0, eyebrow: `Listening · ${label} · answers`, title: `${title}: answers`, ar: 'الإِجَابَاتُ' },
  notes: `LISTENING ${label.toUpperCase()} (website Part A, 20 marks). Website: “Read the questions first, decide which tense each one targets.” Each recording may be played twice; students answer after the second reading.\nSCRIPT: ${script}\nPrivate chat: ${marks} letters.`,
  answerNotes: `Mark /${marks}. Reveal the script only after the attempt; ask which tense each question targeted.`,
});
const rmcq = (part, qs, seed) => ({
  type: 'mcq', stage: 'wedo', min: 5, eyebrow: `Reading · questions ${part} · 1 mark each (website)`, title: `Reading questions ${part}`, ar: 'أَسْئِلَةُ القِرَاءَةِ', seed, questions: qs,
  answerSlide: { min: 0, eyebrow: 'Reading · answers · show AFTER the section', title: `Questions ${part}: answers`, ar: 'الإِجَابَاتُ' },
  notes: 'READING (website Part B1: R1 main idea · R2 detail · R3 evidence · R4 tense gap-fill). Keep the text on the previous slide available.',
  answerNotes: 'Mark /5. Ask one student to read the evidence phrase aloud (by invitation).',
});

const slides = [
  D.titleSlide({
    n: 12, siteRef: SITE,
    plan: '0–1 Welcome · 1–2 Map · 2–6 Grammar spine (not marked) · 6–7 Assessment map · 7–21 Listening (20) · 21–29 Reading (10) · 29–46 Writing (20) · 46–56 Speaking (10, one-to-one or trusted pairs) · 56–60 Profile and D6 target.',
    source: 'The website D5-L12 is a four-skill, 60-mark unit assessment: a twelve-question grammar spine (revision, not counted), Part A listening (three texts — a sporting life 8 · two friends’ holidays 6 · a cultural evening 6 = 20), Part B1 reading (a leisure life story: 10), Part B2 writing (five-field leisure profile 5 + 130–140-word article 15, marked task / range / accuracy) and Part C speaking (role play at the leisure centre 4 + topic conversation 6), then a D6 target. Website: “Past-tense suffix accuracy is the primary Accuracy criterion in every component.”',
    support: `• Everyone sits the same 60 marks. Access arrangements: extra time, questions read aloud in English, one section on screen at a time; speaking one-to-one or in trusted pairs (it can move to the next lesson).
• If time is short: listening + reading in class; writing and speaking next lesson.
• Text 3 (a heritage concert) and the cultural field of the profile can be answered about a nasheed evening or a calligraphy exhibition instead (see D5-L06).
• Website: “Past-tense suffix accuracy is the primary Accuracy criterion in every component.”`,
  }),
  D.welcomeSlide(),
  {
    type: 'journey', stage: 'welcome', eyebrow: 'Today’s lesson map', title: 'Our assessment, step by step', ar: 'خَرِيطَةُ الدَّرْسِ',
    steps: [
      { stage: 'donow', min: 4, text: 'Grammar spine (not marked).', ar: 'تَهْيِئَةٌ' },
      { stage: 'teach', min: 2, text: 'The D5 checklist and the 60-mark map.', ar: 'خُطَّةُ التَّقْيِيمِ' },
      { stage: 'ido', min: 14, text: 'Listening: three texts, 20 marks.', ar: 'الاِسْتِمَاعُ' },
      { stage: 'wedo', min: 8, text: 'Reading: 10 marks.', ar: 'القِرَاءَةُ' },
      { stage: 'youdo', min: 27, text: 'Writing 20 + speaking 10.', ar: 'الكِتَابَةُ وَالتَّحَدُّثُ' },
      { stage: 'feedback', min: 3, text: 'My profile and one D6 target.', ar: 'الهَدَفُ' },
      { stage: 'prep', min: 2, text: 'Get ready for D6: the Arab world.', ar: 'اِسْتَعِدَّ' },
    ],
    support: 'Start each section with the questions you find easiest. Leave a blank and come back. The grammar spine does not count.',
    notes: 'LESSON MAP. Website sections: grammar spine · Part A listening · Part B1 reading · Part B2 writing · Part C speaking · mark scheme · reflection.',
  },
  D.doNow({
    questions: [
      q('What does فَهْمُ المَسْمُوعِ mean?', ['listening comprehension', 'reading comprehension', 'the conversation'], 'Prepared at home (D5-L11).'),
      q('Choose the “we” form of قَالَ.', ['قُلْنَا', 'قَالْنَا', 'قَوَلْنَا'], 'Website grammar spine 5.'),
      q('Which sentence means “she used to watch”?', ['كَانَتْ تُشَاهِدُ', 'كَانَتْ شَاهَدَتْ', 'سَتُشَاهِدُ'], 'Website grammar spine 9.'),
      q('Choose the accurate sentence.', ['أُمَارِسُ السِّبَاحَةَ مَرَّتَيْنِ فِي الأُسْبُوعِ.', 'أَلْعَبُ السِّبَاحَةَ مَرَّتَيْنِ فِي الأُسْبُوعِ.', 'أَعْزِفُ السِّبَاحَةَ مَرَّتَيْنِ فِي الأُسْبُوعِ.'], 'Website grammar spine 10.'),
      q('Choose the accurate sentence.', ['فَجْأَةً بَدَأَ المَطَرُ، وَفِي المُسْتَقْبَلِ سَأَعُودُ.', 'فَجْأَةً بَدَأَ المَطَرُ، وَفِي المُسْتَقْبَلِ عُدْتُ.', 'فَجْأَةً سَيَبْدَأُ المَطَرُ، وَأَمْسِ عُدْتُ.'], 'Website grammar spine 12.'),
    ],
    keyIdea: { text: 'This warm-up does NOT count. Use it to choose ONE thing to check in your writing today.', ar: 'اللَّاحِقَةُ · الجَذْرُ الشَّاذُّ · كَانَ · التَّلَازُمُ · الزَّمَنُ' },
    retrieves: 'Question 1 tests one of the words prepared at home at the end of D5-L11. Questions 2–5 are from the website twelve-question grammar spine (used diagnostically; the items that differ only in vowel endings are reviewed on the next slide).',
  }),
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Review · the D5 grammar spine (website)', title: 'The past-tense checklist', ar: 'مُرَاجَعَةُ القَوَاعِدِ', ltr: true,
    cols: [{ label: 'Check', w: 3.0 }, { label: 'Model', w: 6.6, size: 22 }, { label: 'Lesson', w: 2.73 }],
    rows: [
      { core: true, cells: ['person ending', { ar: 'لَعِبْتُ · رَسَمَتْ · ذَهَبُوا · شَاهَدْنَا' }, 'D5-L03 · L04'] },
      { core: true, cells: ['irregular stem', { ar: 'قُلْنَا · زُرْتُ · مَشَيْنَا' }, 'D5-L04 · L07'] },
      { cells: ['kāna', { ar: 'كَانَ الطَّقْسُ جَمِيلًا · كَانَتْ تُشَاهِدُ' }, 'D5-L05'] },
      { cells: ['collocation', { ar: 'أُمَارِسُ السِّبَاحَةَ · فَازَ بِالبُطُولَةِ · أُعْجِبْتُ بِـ' }, 'D5-L01 · L02'] },
      { core: true, cells: ['tense switch', { ar: 'فَجْأَةً بَدَأَ … وَفِي المُسْتَقْبَلِ سَأَعُودُ' }, 'D5-L07 · L09'] },
    ],
    foot: 'Website: past-tense suffix accuracy is the main Accuracy criterion in EVERY part today.',
    notes: 'REVIEW (website twelve-question grammar spine, correct answers): لَعِبْتُ · رَسَمَتْ · ذَهَبُوا · شَاهَدْنَا · قُلْنَا · زُرْتُ · مَشَيْنَا · كَانَ الطَّقْسُ جَمِيلًا · كَانَتْ تُشَاهِدُ · أُمَارِسُ السِّبَاحَةَ مَرَّتَيْنِ · فَازَ … بِـ / أُعْجِبْتُ بِـ · فَجْأَةً بَدَأَ … سَأَعُودُ. Close the vocabulary vault during each section.',
  },
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Assessment map (website) · 60 marks in total', title: 'Four skills, sixty marks', ltr: true, ar: 'خُطَّةُ التَّقْيِيمِ',
    cols: [{ label: 'Marks', w: 1.4 }, { label: 'What you do', w: 7.2 }, { label: 'Section', w: 3.73 }],
    rows: [
      { core: true, cells: ['20', 'Three texts (each heard twice): a sporting life (8) · two friends’ holidays (6) · a cultural evening (6)', 'A · Listening'] },
      { core: true, cells: ['10', 'A leisure life story: main idea, detail, evidence and a tense gap-fill', 'B1 · Reading'] },
      { core: true, cells: ['20', 'A five-field leisure profile (5) + a 130–140-word article (15)', 'B2 · Writing'] },
      { core: true, cells: ['10', 'A role play at the leisure centre (4) + a topic conversation (6)', 'C · Speaking'] },
    ],
    notes: 'ASSESSMENT MAP (website: “Sixty marks across listening, reading, writing and speaking”).',
  },
  lmcq('Text 1 · questions 1–4', 'A sporting life (1)', A.listening.one.questions.slice(0, 4).map((x) => q(x.prompt.replace('Text 1: ', ''), x.options, x.feedback)), T1, 51, 4),
  lmcq('Text 1 · questions 5–8', 'A sporting life (2)', A.listening.one.questions.slice(4, 8).map((x) => q(x.prompt.replace('Text 1: ', ''), x.options, x.feedback.replace('أُعْجِبْتُ', 'أُعْجِبْتُ'))), T1, 52, 4),
  lmcq('Text 2 · 6 questions', 'Sami and Layla’s holidays', A.listening.two.questions.map((x) => q(x.prompt.replace('Text 2: ', ''), x.options, x.feedback)), T2, 53, 6),
  lmcq('Text 3 · 6 questions', 'A cultural evening', A.listening.three.questions.map((x) => q(x.prompt.replace('Text 3: Select a correct statement — ', 'Correct statement: ').replace('Text 3: ', ''), x.options, x.feedback)), T3, 54, 6),
  { type: 'passage', stage: 'wedo', min: 3, eyebrow: 'Reading · Part B1 · 10 marks (website)', title: 'My leisure year', ar: 'سَنَةٌ مِنْ حَيَاتِي', text: READ, notes: 'READING TEXT (website Part B1). No English support on assessment texts. Strategy: read the question, decide the tense it targets, find the time marker.' },
  rmcq('1–5', A.reading.questions.slice(0, 5).map((x) => q(x.prompt.replace(/^R\d( gap-fill)?: /, (m) => (m.includes('gap') ? 'Gap-fill: ' : '')), x.options, x.feedback)), 55),
  rmcq('6–10', A.reading.questions.slice(5, 10).map((x) => q(x.prompt.replace(/^R\d( gap-fill)?: /, (m) => (m.includes('gap') ? 'Gap-fill: ' : '')), x.options, x.feedback)), 56),
  {
    type: 'formsTable', stage: 'youdo', min: 5, eyebrow: 'Writing · Question 1 · leisure profile · 5 marks (website)', title: 'Complete the leisure profile', ltr: true, ar: 'مِلَفُّ التَّرْفِيهِ',
    cols: [{ label: 'Field', w: 3.6 }, { label: 'Arabic label', w: 4.0, size: 20 }, { label: 'Your answer in Arabic', w: 4.73 }],
    rows: A.writing_form.map(([ar, en], i) => ({ core: true, cells: [`${i + 1} · ${en.replace(/use .*$/, 'use ḥajaza or aqāma')}`, { ar }, '______________'] })),
    foot: 'Example: أُمَارِسُ السِّبَاحَةَ · كُرَةُ السَّلَّةِ · أَقَمْتُ فِي فُنْدُقٍ فِي عَمَّانَ · حَضَرْتُ مَعْرِضًا لِلْخَطِّ العَرَبِيِّ · سَأَتَعَلَّمُ العَزْفَ عَلَى العُودِ',
    notes: 'WRITING QUESTION 1 (website, 5 marks): one mark per field completed accurately in Arabic (a phrase is enough; the collocation verb, the hollow stem أَقَمْتُ and the suffix must be correct for the mark).',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 13, eyebrow: 'Writing · Question 2 · 130–140 words · 15 marks (website)', title: 'My free time: past, present and future', ltr: true, ar: 'المَاضِي وَالحَاضِرُ وَالمُسْتَقْبَلُ',
    cols: [{ label: 'Website mark scheme', w: 6.6 }, { label: 'Marks', w: 5.73 }],
    rows: [
      { core: true, cells: ['Task: hobby / sport with its collocation · a past experience (3+ events) · a future plan · an opinion', 'Task Completion /5'] },
      { core: true, cells: ['Range: 6+ different past verbs · sa- / sawfa · a narrative connector · kāna or a cultural verb', 'Range /5'] },
      { core: true, cells: ['Accuracy: past suffixes across 6+ verbs · collocation preposition · agreement', 'Accuracy /5'] },
    ],
    foot: 'Independent evidence: no translation software or AI. Plan past · present · future (D5-L09), then check every ending.',
    notes: 'WRITING QUESTION 2 (website, 15 marks): “Write 130–140 words. Narrate a past experience, describe your present habit, state a future plan and give an opinion.” Mark scheme exactly as on the website. The D5-L09 website model is a full-mark exemplar — show it ONLY after writing.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 4, eyebrow: 'Speaking · Part C · role play · 4 marks (website)', title: 'Role play: at the leisure centre', ltr: true, ar: 'فِي المَرْكَزِ التَّرْفِيهِيِّ',
    cols: [{ label: 'Prompt (website)', w: 6.6, size: 20 }, { label: 'Tense / what is assessed', w: 5.73 }],
    rows: A.roleplay.map(([ar, en]) => ({ core: true, cells: [{ ar }, en] })),
    foot: 'Marks: communication 2 · accuracy 2 (the past suffix in prompt 3).',
    notes: `ROLE PLAY (website, 4 marks). Teacher plays the receptionist: أَهْلًا وَسَهْلًا فِي المَرْكَزِ. كَيْفَ أُسَاعِدُكَ؟ Answers to model: عِنْدَنَا سِبَاحَةٌ وَكُرَةُ سَلَّةٍ وَيُوغَا. · نَفْتَحُ مِنَ التَّاسِعَةِ صَبَاحًا إِلَى التَّاسِعَةِ مَسَاءً. Then listen for prompt 3 (e.g. فِي المَرَّةِ المَاضِيَةِ سَبَحْتُ وَلَعِبْتُ …) and prompt 4 (سَأَتَدَرَّبُ / أَنْوِي أَنْ …). To a girl: فَعَلْتِ · تَنْوِينَ.`,
  },
  {
    type: 'formsTable', stage: 'youdo', min: 5, eyebrow: 'Speaking · Part C · topic conversation · 6 marks (website)', title: 'Topic conversation', ltr: true, ar: 'المُحَادَثَةُ',
    cols: [{ label: 'Question (website)', w: 6.6, size: 20 }, { label: 'Required', w: 5.73 }],
    rows: A.topic.map(([ar, en]) => ({ core: true, cells: [{ ar }, en] })),
    foot: 'Marks: communication 3 · quality of language 3 (past suffix accuracy, collocation, tense variety).',
    notes: 'TOPIC CONVERSATION (website, 6 marks): mirror the tense of each question (D5-L11). Allow time-buying phrases (دَعْنِي أُفَكِّرُ). To a girl: هِوَايَتُكِ · بَدَأْتِ · مَرَرْتِ · خُطَطُكِ. ORGANISATION: one-to-one while others finish writing, or trusted pairs with the teacher as examiner.',
  },
  {
    type: 'formsTable', stage: 'feedback', min: 3, eyebrow: 'Results · your D5 four-skills profile (website)', title: 'My D5 score profile', ltr: true, ar: 'مِلَفُّ المَهَارَاتِ',
    cols: [{ label: 'Teacher guide (total /60)', w: 6.93 }, { label: 'My score', w: 2.0 }, { label: 'Section', w: 3.4 }],
    rows: [
      { core: true, cells: ['54–60 Excellent — accurate past-tense storytelling', '/20', 'A · Listening'] },
      { core: true, cells: ['42–53 Good — secure, with a few focused gaps', '/10', 'B1 · Reading'] },
      { core: true, cells: ['30–41 Satisfactory — core communication in place', '/20', 'B2 · Writing'] },
      { core: true, cells: ['Below 30 — revisit D5-L03 to L05 with guided practice', '/10', 'C · Speaking'] },
    ],
    foot: 'Website: My writing improvement target … · My speaking improvement target …',
    notes: 'PROFILE (website: “Complete the four components to generate targeted guidance”). The bands are a teacher guide in line with the D1–D4 assessments.',
  },
  D.selfCheckSlide([
    { route: 'core', text: 'I can name hobbies and sports with the right verb.' },
    { route: 'core', text: 'I can say what I did with the right past ending.' },
    { route: 'develop', text: 'I can use irregular verbs (زُرْتُ · قُلْنَا · مَشَيْنَا).' },
    { route: 'develop', text: 'I can tell a story with كَانَ and connectors.' },
    { route: 'stretch', text: 'I can write 130–140 words across three tenses.' },
  ]),
  D.prepSlide({
    ...NEXT,
    words: [['دَوْلَةٌ', 'a country, state', 'pl. دُوَلٌ'], ['جِنْسِيَّةٌ', 'a nationality', 'pl. جِنْسِيَّاتٌ'], ['لُغَةٌ رَسْمِيَّةٌ', 'an official language', 'pl. لُغَاتٌ رَسْمِيَّةٌ'], ['العَرَبِيَّةُ الفُصْحَى', 'Standard Arabic', '—'], ['اللَّهَجَاتُ', 'dialects', 'sing. لَهْجَةٌ']],
    questionEn: 'Name three Arab countries and the country your family comes from. Which languages are spoken there?',
    questionAr: 'عَائِلَتِي مِنْ … وَاللُّغَةُ الرَّسْمِيَّةُ …',
    homework: {
      core: 'Redo the website D5-L12 section with your lowest score; learn the five D6 words.',
      develop: 'Improve one paragraph of your assessed article, then learn the five D6 words.',
      stretch: 'Write three sentences about Arab countries and their languages, using the five words.',
    },
    wordsSource: 'D6 begins with the Arab world (website D6-L01 “Countries, Nationalities and Languages of the Arab World”).',
  }),
  D.closeSlide({ ...NEXT, remember: 'D5 complete — well done! Carry the past-tense checklist into D6: person ending · stem · kāna · collocation · tense.' }),
];

module.exports = { meta, slides };
