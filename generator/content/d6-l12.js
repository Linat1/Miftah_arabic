'use strict';
/*
 * D6-L12 · Review and Unit Assessment: Countries, Cultures and Celebrations (60 marks: listening 20 · reading 10 · writing 20 · speaking 10)
 * Website: Pathways › Development › D6 › Lesson 12. Twelve-question grammar spine (revision, not counted), Part A listening (three texts:
 * a celebration across three tenses 8 · Nūr and Sami, who said what 6 · Arabic and the Arab world 6), Part B1 reading (a festival city: 10),
 * Part B2 writing (five-field cultural profile 5 + 130–140-word article 15: task / range / accuracy), Part C speaking (role play: meeting someone
 * from another culture 4 + topic conversation 6) and the D6 reflection / P1 target. Scripts, texts, questions, tasks and marks are the website’s;
 * one reading option that mixed English and Arabic is reworded (the Arabic evidence stays in its feedback); the per-prompt marks on the role play
 * are shown as the website mark scheme (communication 2 · accuracy 2).
 */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D6')({
  n: 12, fileTitle: 'Review_and_Unit_Assessment_Countries_Cultures_Celebrations', chip: 'D6 Assessment',
  title: 'Review and Unit Assessment: Countries, Cultures and Celebrations', arabic: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ',
  focus: 'Show what you can understand and produce about countries, culture, celebration and identity — every tense accurate, every cultural verb with its preposition, every claim fair — then choose one precise next step for Progression P1.',
  icon: 'FaClipboardCheck', iconSet: 'fa6', level: 'Development · end of unit D6',
});
const NEXT = { nextCode: 'P1-L01', nextTitle: 'Diet and Nutrition — Reviewing and Extending Food Vocabulary', nextAr: 'الغِذَاءُ وَالتَّغْذِيَةُ' };
const SITE = 'Pathways › Development › D6 Countries, Cultures and Celebrations › D6-L12';
const A = require('../site-data/d6-l12-assessment.json');
const T1 = A.listening.one.script;
const T2 = A.listening.two.script;
const T3 = A.listening.three.script;
const READ = A.reading.text;
const RQ = A.reading.questions.map((x, i) => (i === 5 ? { ...x, options: ['Yes — the writer calls this diversity a real richness.', x.options[1], x.options[2]], feedback: 'لَا يُمْكِنُ إِنْكَارُ أَنَّ هٰذَا التَّنَوُّعَ ثَرْوَةٌ حَقِيقِيَّةٌ.' } : x));

const lmcq = (label, title, qs, script, seed, marks) => ({
  type: 'mcq', stage: 'ido', min: 4, eyebrow: `Listening · ${label} · 1 mark each (website)`, title, ar: 'الاِسْتِمَاعُ',
  seed, questions: qs,
  answerSlide: { min: 0, eyebrow: `Listening · ${label} · answers`, title: `${title}: answers`, ar: 'الإِجَابَاتُ' },
  notes: `LISTENING ${label.toUpperCase()} (website Part A, 20 marks). Before listening: mark each question P / N / F and circle “who” and “all / some” questions (D6-L10). Each recording may be played twice; students answer after the second reading.\nSCRIPT: ${script}\nPrivate chat: ${marks} letters.`,
  answerNotes: `Mark /${marks}. Reveal the script only after the attempt; ask which verb, speaker or hedge proved each answer.`,
});
const rmcq = (part, qs, seed) => ({
  type: 'mcq', stage: 'wedo', min: 5, eyebrow: `Reading · questions ${part} · 1 mark each (website)`, title: `Reading questions ${part}`, ar: 'أَسْئِلَةُ القِرَاءَةِ', seed, questions: qs,
  answerSlide: { min: 0, eyebrow: 'Reading · answers · show AFTER the section', title: `Questions ${part}: answers`, ar: 'الإِجَابَاتُ' },
  notes: 'READING (website Part B1: R1 main idea · R2 detail · R3 attitude, omission and tense signal · R4 tense gap-fill and aspiration). Keep the text on the previous slide available.',
  answerNotes: 'Mark /5. Ask one student to read the evidence phrase aloud (by invitation).',
});
const strip = (s) => s.replace(/^R\d( gap-fill)?: /, (m) => (m.includes('gap') ? 'Gap-fill: ' : ''));

const slides = [
  D.titleSlide({
    n: 12, siteRef: SITE,
    plan: '0–1 Welcome · 1–2 Map · 2–6 Grammar spine (not marked) · 6–7 Assessment map · 7–21 Listening (20) · 21–29 Reading (10) · 29–46 Writing (20) · 46–56 Speaking (10, one-to-one or trusted pairs) · 56–60 Profile and P1 target.',
    source: 'The website D6-L12 is a four-skill, 60-mark unit assessment: a twelve-question grammar spine (revision, not counted), Part A listening (three texts — one family’s celebration across three tenses 8 · Nūr and Sami: who said what 6 · Arabic and the Arab world 6 = 20), Part B1 reading (a festival city: 10), Part B2 writing (five-field cultural profile 5 + 130–140-word article 15, marked task / range / accuracy) and Part C speaking (role play: meeting someone from another culture 4 + topic conversation 6), then a P1 target.',
    support: `• Everyone sits the same 60 marks. Access arrangements: extra time, questions read aloud in English, one section on screen at a time; speaking one-to-one or in trusted pairs (it can move to the next lesson).
• If time is short: listening + reading in class; writing and speaking next lesson.
• Identity is personal: the profile, article and role play may be about a fictional family. The reading text describes several communities (including a church service) — read it as describing others respectfully (al-Ḥujurāt 49:13); no participation is implied.
• Accuracy focus today: tense matches its time phrase · cultural verb + preposition · passive subject in -u · أَنَّ + accusative · a fair, qualified claim.`,
  }),
  D.welcomeSlide(),
  {
    type: 'journey', stage: 'welcome', eyebrow: 'Today’s lesson map', title: 'Our assessment, step by step', ar: 'خَرِيطَةُ الدَّرْسِ',
    steps: [
      { stage: 'donow', min: 4, text: 'Grammar spine (not marked).', ar: 'تَهْيِئَةٌ' },
      { stage: 'teach', min: 2, text: 'The D6 checklist and the 60-mark map.', ar: 'خُطَّةُ التَّقْيِيمِ' },
      { stage: 'ido', min: 14, text: 'Listening: three texts, 20 marks.', ar: 'الاِسْتِمَاعُ' },
      { stage: 'wedo', min: 8, text: 'Reading: 10 marks.', ar: 'القِرَاءَةُ' },
      { stage: 'youdo', min: 27, text: 'Writing 20 + speaking 10.', ar: 'الكِتَابَةُ وَالتَّحَدُّثُ' },
      { stage: 'feedback', min: 3, text: 'My profile and one P1 target.', ar: 'الهَدَفُ' },
      { stage: 'prep', min: 2, text: 'Get ready for Progression P1: diet and nutrition.', ar: 'اِسْتَعِدَّ' },
    ],
    support: 'Start each section with the questions you find easiest. Leave a blank and come back. The grammar spine does not count.',
    notes: 'LESSON MAP. Website sections: grammar spine · Part A listening · Part B1 reading · Part B2 writing · Part C speaking · mark scheme · reflection.',
  },
  D.doNow({
    questions: [
      q('What does فَهْمُ المَسْمُوعِ mean?', ['listening comprehension', 'reading comprehension', 'the conversation'], 'Prepared at home (D6-L11).'),
      q('Choose the “we” form of زَارَ.', ['زُرْنَا', 'زَارْنَا', 'زَارُوا'], 'Website grammar spine 1.'),
      q('Complete: ___ نَتَخَلَّى عَنْ لُغَتِنَا.', ['لَنْ', 'لَمْ', 'سَـ'], 'Website grammar spine 4.'),
      q('Complete: يَتَكَيَّفُ ___ الحَيَاةِ الجَدِيدَةِ.', ['مَعَ', 'عَلَى', 'إِلَى'], 'Website grammar spine 7.'),
      q('Choose the accurate sentence.', ['المَدِينَةُ الَّتِي زُرْتُهَا جَمِيلَةٌ.', 'المَدِينَةُ الَّذِي زُرْتُهَا جَمِيلَةٌ.', 'المَدِينَةُ الَّذِينَ زُرْتُهَا جَمِيلَةٌ.'], 'Website grammar spine 9.'),
    ],
    keyIdea: { text: 'This warm-up does NOT count. Use it to choose ONE thing to check in your writing today.', ar: 'الزَّمَنُ · حَرْفُ الجَرِّ · المَجْهُولُ · أَنَّ · التَّحَفُّظُ' },
    retrieves: 'Question 1 tests one of the words prepared at home at the end of D6-L11. Questions 2–5 are from the website twelve-question grammar spine (used diagnostically; the items that differ only in vowel endings are reviewed on the next slide).',
  }),
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Review · the D6 grammar spine (website)', title: 'The D6 accuracy checklist', ar: 'مُرَاجَعَةُ القَوَاعِدِ', ltr: true,
    cols: [{ label: 'Check', w: 3.0 }, { label: 'Model', w: 6.6, size: 22 }, { label: 'Lesson', w: 2.73 }],
    rows: [
      { core: true, cells: ['tense + time', { ar: 'زُرْنَا · كَانَتْ تُعِدُّ · سَنُنَظِّمُ · لَنْ نَتَخَلَّى' }, 'D6-L07 · L10'] },
      { core: true, cells: ['verb + preposition', { ar: 'نَحْتَفِلُ بِالعِيدِ · أَنْتَمِي إِلَى · يَتَكَيَّفُ مَعَ' }, 'D6-L02 · L05'] },
      { cells: ['passive', { ar: 'تُزَيَّنُ القَاعَةُ بِالأَضْوَاءِ' }, 'D6-L03'] },
      { cells: ['relative · comparative', { ar: 'المَدِينَةُ الَّتِي زُرْتُهَا · أَكْبَرُ مِنَ السَّابِقِ' }, 'D6-L05 · L07'] },
      { core: true, cells: ['case after a word', { ar: 'إِلَى لُبْنَانَ · أَنَّ التَّنَوُّعَ ثَرْوَةٌ' }, 'D6-L01 · L09'] },
    ],
    foot: 'And one habit for every part today: a fair, qualified claim — فِي بَعْضِ … · عَلَى حَدِّ عِلْمِي.',
    notes: 'REVIEW (website twelve-question grammar spine, correct answers): زُرْنَا · كَانَتْ تُعِدُّ · سَنُنَظِّمُ · لَنْ · بِـ · إِلَى · مَعَ · تُزَيَّنُ القَاعَةُ · الَّتِي · أَكْبَرُ مِنَ السَّابِقِ · لُبْنَانَ (diptote) · أَنَّ التَّنَوُّعَ. Close the vocabulary vault during each section.',
  },
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Assessment map (website) · 60 marks in total', title: 'Four skills, sixty marks', ltr: true, ar: 'خُطَّةُ التَّقْيِيمِ',
    cols: [{ label: 'Marks', w: 1.4 }, { label: 'What you do', w: 7.2 }, { label: 'Section', w: 3.73 }],
    rows: [
      { core: true, cells: ['20', 'Three texts (each heard twice): a celebration across three tenses (8) · Nūr and Sami (6) · Arabic and the Arab world (6)', 'A · Listening'] },
      { core: true, cells: ['10', 'A festival city: main idea, detail, attitude, omission and a tense gap-fill', 'B1 · Reading'] },
      { core: true, cells: ['20', 'A five-field cultural profile (5) + a 130–140-word article (15)', 'B2 · Writing'] },
      { core: true, cells: ['10', 'A role play: meeting someone from another culture (4) + a topic conversation (6)', 'C · Speaking'] },
    ],
    notes: 'ASSESSMENT MAP (website: sixty marks across listening, reading, writing and speaking).',
  },
  lmcq('Text 1 · questions 1–4', 'A celebration across three tenses (1)', A.listening.one.questions.slice(0, 4).map((x) => q(x.prompt.replace('Text 1: ', ''), x.options, x.feedback)), T1, 61, 4),
  lmcq('Text 1 · questions 5–8', 'A celebration across three tenses (2)', A.listening.one.questions.slice(4, 8).map((x) => q(x.prompt.replace('Text 1: ', ''), x.options, x.feedback)), T1, 62, 4),
  lmcq('Text 2 · 6 questions', 'Nūr and Sami: who said what?', A.listening.two.questions.map((x) => q(x.prompt.replace('Text 2: ', ''), x.options, x.feedback)), T2, 63, 6),
  lmcq('Text 3 · 6 questions', 'Arabic and the Arab world', A.listening.three.questions.map((x) => q(x.prompt.replace('Text 3: Select a correct statement — ', 'Correct statement: ').replace('Text 3: ', ''), x.options, x.feedback)), T3, 64, 6),
  { type: 'passage', stage: 'wedo', min: 3, eyebrow: 'Reading · Part B1 · 10 marks (website)', title: 'A festival city', ar: 'مَدِينَةُ المِهْرَجَانَاتِ', text: READ, notes: 'READING TEXT (website Part B1). No English support on assessment texts. Strategy: adjectives → attitude · past = completed · what is left out (D6-L08). The text describes several communities, including a church service — describing others respectfully.' },
  rmcq('1–5', RQ.slice(0, 5).map((x) => q(strip(x.prompt), x.options, x.feedback)), 65),
  rmcq('6–10', RQ.slice(5, 10).map((x) => q(strip(x.prompt), x.options, x.feedback)), 66),
  {
    type: 'formsTable', stage: 'youdo', min: 5, eyebrow: 'Writing · Question 1 · cultural profile · 5 marks (website)', title: 'Complete the cultural profile', ltr: true, ar: 'المِلَفُّ الثَّقَافِيُّ',
    cols: [{ label: 'Field', w: 3.6 }, { label: 'Arabic label', w: 4.0, size: 20 }, { label: 'Your answer in Arabic', w: 4.73 }],
    rows: A.writing_form.map(([ar, en], i) => ({ core: true, cells: [`${i + 1} · ${en.replace(/ — use .*$/, ' (with bi-)')}`, { ar: ar.replace(/ \(.*\)$/, '') }, '______________'] })),
    foot: 'Example: إِرْثِي ثَقَافِيٌّ مِصْرِيٌّ · تُتَبَادَلُ التَّهَانِي فِي العِيدِ · نَحْتَفِلُ بِعِيدِ الفِطْرِ · أَتَحَدَّثُ الأُرْدِيَّةَ · أَطْمَحُ إِلَى أَنْ أُتْقِنَ الفُصْحَى',
    notes: 'WRITING QUESTION 1 (website, 5 marks): one mark per field completed accurately in Arabic (a phrase is enough). Field 3 must use يَحْتَفِلُ بِـ with the preposition for the mark; field 5 rewards أَطْمَحُ إِلَى / أَتَمَنَّى أَنْ.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 13, eyebrow: 'Writing · Question 2 · 130–140 words · 15 marks (website)', title: 'My culture and my identity', ltr: true, ar: 'ثَقَافَتِي وَهُوِيَّتِي',
    cols: [{ label: 'Website mark scheme', w: 6.6 }, { label: 'Marks', w: 5.73 }],
    rows: A.mark_scheme.writing_q2.map(([name, m, items]) => ({ core: true, cells: [items.join(' · ').replace('سَـ or سَوْفَ', 'sa- or sawfa'), `${name} /${m}`] })),
    foot: 'Independent evidence: no translation software or AI. Plan past · present · opinion · future (D6-L09), then check every ending and preposition.',
    notes: 'WRITING QUESTION 2 (website, 15 marks): write 130–140 words on ثَقَافَتِي وَهُوِيَّتِي — describe your background, narrate a past cultural experience (3+ events), give an opinion and state a future aspiration. Mark scheme exactly as on the website. The D6-L09 website model is a full-mark exemplar — show it ONLY after writing.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 4, eyebrow: 'Speaking · Part C · role play · 4 marks (website)', title: 'Role play: meeting someone from another culture', ltr: true, ar: 'لِقَاءٌ ثَقَافِيٌّ',
    cols: [{ label: 'Prompt (website)', w: 6.6, size: 20 }, { label: 'What is assessed', w: 5.73 }],
    rows: A.roleplay.map(([ar, en]) => ({ core: true, cells: [{ ar }, en.replace(/ — \d marks?\.$/, '.')] })),
    foot: 'Marks (website): communication 2 · accuracy, including cultural verb prepositions 2.',
    notes: `ROLE PLAY (website, 4 marks). Teacher plays a visitor from another culture: مَرْحَبًا! أَنَا مِنْ اليَابَانِ، وَأَنْتَ؟ Answers to model: أَنَا مِنَ الجِيلِ الثَّانِي، وَأَنْتَمِي إِلَى ثَقَافَتَيْنِ … · فِي العِيدِ تُتَبَادَلُ التَّهَانِي … · وَأَنْتَ، كَيْفَ تَحْتَفِلُونَ فِي بَلَدِكَ؟ · تَعَلَّمْتُ مِنْ صَدِيقِي أَنَّ … Listen for the preposition on every cultural verb. To a girl: عَرِّفِي · صِفِي · اِسْأَلِي · اُذْكُرِي.`,
  },
  {
    type: 'formsTable', stage: 'youdo', min: 5, eyebrow: 'Speaking · Part C · topic conversation · 6 marks (website)', title: 'Topic conversation', ltr: true, ar: 'المُحَادَثَةُ',
    cols: [{ label: 'Question (website)', w: 6.6, size: 20 }, { label: 'Required', w: 5.73 }],
    rows: A.topic.map(([ar, en]) => ({ core: true, cells: [{ ar }, en] })),
    foot: 'Marks (website): communication 3 · quality of language 3 (cultural vocabulary range, tense accuracy, opinion structures).',
    notes: 'TOPIC CONVERSATION (website, 6 marks): mirror the tense of each question and qualify cultural claims (D6-L11). Allow time-buying and repair phrases (دَعْنِي أُفَكِّرُ · عَفْوًا، أَقْصِدُ). To a girl: تُرِيدِينَ · مَرَرْتِ · حَيَاتِكِ. ORGANISATION: one-to-one while others finish writing, or trusted pairs with the teacher as examiner.',
  },
  {
    type: 'formsTable', stage: 'feedback', min: 3, eyebrow: 'Results · your D6 four-skills profile (website)', title: 'My D6 score profile', ltr: true, ar: 'مِلَفُّ المَهَارَاتِ',
    cols: [{ label: 'Teacher guide (total /60)', w: 6.93 }, { label: 'My score', w: 2.0 }, { label: 'Section', w: 3.4 }],
    rows: [
      { core: true, cells: ['54–60 Excellent — accurate, fair and varied cultural Arabic', '/20', 'A · Listening'] },
      { core: true, cells: ['42–53 Good — secure, with a few focused gaps', '/10', 'B1 · Reading'] },
      { core: true, cells: ['30–41 Satisfactory — core communication in place', '/20', 'B2 · Writing'] },
      { core: true, cells: ['Below 30 — revisit D6-L02, L07 and L09 with guided practice', '/10', 'C · Speaking'] },
    ],
    foot: 'Website: My writing improvement target … · My speaking improvement target …',
    notes: 'PROFILE (website: complete the four components to generate targeted guidance). The bands are a teacher guide in line with the D1–D5 assessments. Development is now complete — celebrate it before setting the P1 target.',
  },
  D.selfCheckSlide([
    { route: 'core', text: 'I can talk about countries, nationalities and celebrations.' },
    { route: 'core', text: 'I can use cultural verbs with the right preposition.' },
    { route: 'develop', text: 'I can use the cultural passive (تُزَيَّنُ · تُتَبَادَلُ).' },
    { route: 'develop', text: 'I can move between past, present and future accurately.' },
    { route: 'stretch', text: 'I can give a supported opinion and qualify cultural claims fairly.' },
  ]),
  D.prepSlide({
    ...NEXT,
    words: [['بُرُوتِينٌ', 'protein', '—'], ['كَرْبُوهِيدْرَاتٌ', 'carbohydrates', '—'], ['أَلْيَافٌ', 'fibre', 'sing. لِيفٌ'], ['فِيتَامِينَاتٌ', 'vitamins', 'sing. فِيتَامِينٌ'], ['مَصْدَرُ طَاقَةٍ', 'an energy source', 'pl. مَصَادِرُ طَاقَةٍ']],
    questionEn: 'Think of your favourite meal. Which nutrients does it give you?',
    questionAr: 'وَجْبَتِي المُفَضَّلَةُ … وَفِيهَا …',
    homework: {
      core: 'Redo the website D6-L12 section with your lowest score; learn the five P1 words.',
      develop: 'Improve one paragraph of your assessed article, then learn the five P1 words.',
      stretch: 'Write three sentences about a healthy meal, using the five words.',
    },
    wordsSource: 'Progression begins with healthy lifestyles (website P1-L01 “Diet and Nutrition — Reviewing and Extending Food Vocabulary”).',
  }),
  D.closeSlide({ ...NEXT, remember: 'Development complete — well done! Carry the D6 checklist into Progression: tense + time · verb + preposition · passive -u · أَنَّ + -a · a fair claim.' }),
];

module.exports = { meta, slides };
