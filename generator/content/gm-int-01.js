'use strict';
/* GM-INT-01 · Yes / No Questions — website: Mastery & Revision › Grammar › Interrogatives › Lesson 1 (hal before a complete nominal
 * or verbal sentence — no English inversion, no “do”; the interrogative hamza a- attached to the next word; a- … am for alternatives;
 * tense and agreement unchanged; answering the meaning: naʿam / lā + a complete sentence; negative questions and balā; clinic).
 * Website vowelling corrected in the time-frame table: تَقْرَأِينَ → تَقْرَئِينَ and زُرْتُمْ الْمَتْحَفَ → زُرْتُمُ الْمَتْحَفَ;
 * Mastery item 5 (سَتَسَافِرُونَ, for سَتُسَافِرُونَ) is not used. Quizzes are the website’s (Starter, Mini-checks: add hal, hamza or
 * hal, Repair lab, Mastery); items with English words inside Arabic options or “only” options are skipped. Colour code: teal = question
 * marker. I-do, statement → question drill, answer sorter, reading, frames and the model interview are teacher-made on the website
 * content (the drill uses the website game items). */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__14-interrogatives__grammar-mastery-01-yes-no-questions';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-INT-01', fileTitle: 'Yes_No_Questions', title: 'Yes / No Questions', arabic: 'أَسْئِلَةُ نَعَمْ وَلَا بِـ«هَلْ» وَهَمْزَةِ الِاسْتِفْهَامِ',
  focus: 'Put hal in front of any statement and add a question mark: anta mustaʿiddun → hal anta mustaʿiddun? No word swap, no “do”. The hamza a- does the same job attached to the next word, and a- … am asks “this or that?”.',
  icon: 'FaCircleQuestion',
});

const slides = G.gmLesson({
  code: 'GM-INT-01', site: KEY,
  support: `• Core: hal + a complete statement (hal tadrusīna l-ʿarabiyyata?) and full answers with naʿam / lā (naʿam, alʿabuhā kulla usbūʿin). Develop: the attached hamza (a-taskunu …?), a- … am for choices, questions in past, present and future with correct agreement. Stretch: negative questions (a-laysa …? a-lam …?) answered with balā; dialogue editing.
• Website house rule: hal is the dependable neutral form; use a- confidently with familiar models, especially a- … am. Never use both together (hal a-tadrusu ✗).
• Colour code: teal = question marker. Recycles GM-VS-04 (hal with VSO / SVO), GM-NVS-04 (laysa) and GM-POS-03 (hal ʿindaka …?).`,
  teach: 'hal; the hamza and am; tense and agreement; answers; balā.',
  wedo: 'Statement → question; answer types; repair.',
  next: { nextCode: 'GM-INT-02', nextTitle: 'Which? Gender and Case Agreement', nextAr: 'أَيّ وَأَيَّة: التَّذْكِيرُ وَالتَّأْنِيثُ وَالْإِعْرَابُ' },
  doNow: {
    questions: [
      W(/Yes\/No Starter/, 0, { feedback: 'Hal turns a statement into a yes / no question.' }),
      W(/Yes\/No Starter/, 1, { feedback: 'The hamza joins the next word.' }),
      W(/Yes\/No Starter/, 3, { prompt: 'Choose “Is this your bag?” (to one female).', feedback: 'Hādhihi + ḥaqībatuki.' }),
      W(/Yes\/No Starter/, 4, { feedback: 'Naʿam = yes.' }),
      W(/Yes\/No Starter/, 5, { prompt: 'Which structure asks an either / or question?', feedback: 'a- … am = this or that?' }),
    ],
    keyIdea: { text: 'hal + statement + question mark — keep the Arabic order. a- … am = this or that? Answer with a full sentence.', ar: '{k|هَلْ} أَنْتَ مُسْتَعِدٌّ؟ ‖ {k|أَتُفَضِّلُ} الشَّايَ {k|أَمِ} الْقَهْوَةَ؟' },
    retrieves: 'The website Starter — GM-VS-04 hal questions and GM-POS-03 hal ʿindaka …?',
  },
  objectives: ['Turn a statement into a question with hal.', 'Attach the question hamza correctly.', 'Ask “this or that?” with a- … am.', 'Answer in full sentences — and with balā.'],
  routes: {
    core: ['I put hal in front of a statement.', 'I answer naʿam / lā with a full sentence.'],
    develop: ['I write a-tadhhabu? as one word.', 'I ask a- … am questions in all tenses.'],
    stretch: ['I answer negative questions with balā.', 'I write a ten-question interview with answers.'],
  },
  terms: {
    items: [
      { ar: 'الِاسْتِفْهَامُ', en: 'asking questions', note: 'هَلْ · أَ' },
      { ar: 'هَلْ', en: 'yes / no question word', note: 'هَلْ أَنْتَ جَاهِزٌ؟' },
      { ar: 'هَمْزَةُ الِاسْتِفْهَامِ', en: 'question hamza (attached)', note: 'أَتَذْهَبُ؟' },
      { ar: 'أَمْ', en: 'or (in a question)', note: 'أَشَايٌ أَمْ قَهْوَةٌ؟' },
      { ar: 'نَعَمْ · لَا', en: 'yes · no', note: 'نَعَمْ، أَذْهَبُ.' },
      { ar: 'بَلَى', en: 'yes (after a negative question)', note: 'بَلَى، ذَهَبْتُ.' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · hal: the reliable question marker (website table)', title: 'Add hal — change nothing else', ar: 'هَلْ + الْجُمْلَةُ', ltr: true,
      cols: [{ label: 'Statement', w: 3.9, size: 22 }, { label: 'Question', w: 4.4, size: 22 }, { label: 'What stayed the same', w: 4.03 }],
      rows: [
        { core: true, cells: ['أَنْتَ مُسْتَعِدٌّ.', 'هَلْ أَنْتَ مُسْتَعِدٌّ؟', 'nominal order and agreement'] },
        { core: true, cells: ['تَذْهَبُ إِلَى الْمَدْرَسَةِ.', 'هَلْ تَذْهَبُ إِلَى الْمَدْرَسَةِ؟', 'present verb, hidden “you”'] },
        { cells: ['زَارَتْ سَلْمَى جَدَّتَهَا.', 'هَلْ زَارَتْ سَلْمَى جَدَّتَهَا؟', 'past tense, feminine verb'] },
        { cells: ['سَتُسَافِرُونَ غَدًا.', 'هَلْ سَتُسَافِرُونَ غَدًا؟', 'future sa- and plural'] },
      ],
      foot: 'Website: place hal before the complete sentence — do not rebuild it in English order and never add a word for “do”. Use the Arabic question mark and a rising voice.',
      notes: 'PART 1 (3 min) — website “hal: the reliable neutral question marker”. Read each pair aloud: flat statement, rising question.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · the interrogative hamza (website models) · Develop', title: 'a- joins the next word', ar: 'هَمْزَةُ الِاسْتِفْهَامِ', ltr: true,
      cols: [{ label: 'Question', w: 5.4, size: 22 }, { label: 'Meaning', w: 4.4 }, { label: 'Type', w: 2.53 }],
      rows: [
        { core: true, cells: ['أَتَعْمَلُ فِي الْمُسْتَشْفَى؟', 'Do you work in the hospital?', 'confirm'] },
        { cells: ['أَهَذِهِ سَيَّارَتُكِ؟', 'Is this your car? (to a girl)', 'confirm'] },
        { core: true, cells: ['أَتُفَضِّلُ الشَّايَ أَمِ الْقَهْوَةَ؟', 'Do you prefer tea or coffee?', 'choice: a- … am'] },
        { cells: ['أَسَتَذْهَبُ الْيَوْمَ أَمْ غَدًا؟', 'Will you go today or tomorrow?', 'choice: a- … am'] },
      ],
      foot: 'Website spelling: write a-tadhhabu as ONE word, never with a space. A- is especially useful with am to offer two real alternatives.',
      notes: 'PART 2 (3 min) — website “The interrogative hamza”. Am + al- → ami l- (helping kasra): ami l-qahwata.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 3 · word order, tense and agreement (website table) · Develop', title: 'The particle asks — the verb still tells', ar: 'الزَّمَنُ وَالْمُطَابَقَةُ', ltr: true,
      cols: [{ label: 'Time', w: 2.4 }, { label: 'Question', w: 5.6, size: 22 }, { label: 'Evidence', w: 4.33 }],
      rows: [
        { core: true, cells: ['past', 'هَلْ زُرْتُمُ الْمَتْحَفَ أَمْسِ؟', 'zurtum + amsi'] },
        { core: true, cells: ['present / habit', 'هَلْ تَقْرَئِينَ كُلَّ يَوْمٍ؟', 'taqraʾīna + kulla yawm'] },
        { cells: ['future', 'هَلْ سَيَصِلُ الْقِطَارُ قَرِيبًا؟', 'sa- + present'] },
        { cells: ['state (no verb)', 'هَلْ أَنْتُنَّ مُسْتَعِدَّاتٌ؟', 'f. plural subject and predicate'] },
      ],
      foot: 'Website editing routine: cover the question marker. If what is left is a correct statement, the question is correct too.',
      notes: 'PART 3 (2 min) — website “Word order, tense and agreement” (website vowelling corrected: zurtumu l-, taqraʾīna).',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 4 · answer the meaning (website models)', title: 'Yes or no — plus a full sentence', ar: 'أَجِبْ بِجُمْلَةٍ كَامِلَةٍ', ltr: true,
      cols: [{ label: 'Question', w: 4.4, size: 22 }, { label: 'Answer', w: 4.6, size: 22 }, { label: 'Meaning', w: 3.33 }],
      rows: [
        { core: true, cells: ['هَلْ تَلْعَبُ كُرَةَ الْقَدَمِ؟', 'نَعَمْ، أَلْعَبُهَا كُلَّ أُسْبُوعٍ.', 'Yes, I play it every week.'] },
        { core: true, cells: ['هَلْ ذَهَبْتِ إِلَى السُّوقِ؟', 'لَا، لَمْ أَذْهَبْ إِلَيْهِ.', 'No, I did not go there.'] },
        { cells: ['أَتُفَضِّلُ الْقِرَاءَةَ أَمِ السِّبَاحَةَ؟', 'أُفَضِّلُ الْقِرَاءَةَ لِأَنَّهَا هَادِئَةٌ.', 'Reading — it is calm.'] },
        { cells: ['هَلْ قَرَأْتَ الْكِتَابَ؟', 'نَعَمْ، قَرَأْتُهُ أَمْسِ.', 'Yes, I read it yesterday.'] },
      ],
      foot: 'Website: a choice question (a- … am) is NOT answered with naʿam or lā — choose one option. Extend: add a reason, a time phrase or a contrast.',
      notes: 'PART 4 (3 min) — website “Answer the meaning — not only the particle”. Past negative answers use lam + present form (GM-VS-04).',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 5 · negative questions and balā (website table) · Stretch', title: '“Isn’t it …?” — answer with balā', ar: 'بَلَى', ltr: true,
      cols: [{ label: 'Negative question', w: 4.2, size: 22 }, { label: 'Answer', w: 3.8, size: 22 }, { label: 'Meaning', w: 4.33 }],
      rows: [
        { cells: ['أَلَيْسَ الْجَوُّ جَمِيلًا؟', 'بَلَى، هُوَ جَمِيلٌ.', 'Yes — it IS beautiful.'] },
        { cells: ['أَلَمْ تَزُرِ الْمَتْحَفَ؟', 'بَلَى، زُرْتُهُ.', 'Yes — I DID visit it.'] },
        { cells: ['أَلَمْ تَذْهَبِي؟', 'بَلَى، ذَهَبْتُ.', 'Yes — I DID go.'] },
        { cells: ['أَلَيْسَ الطَّرِيقُ طَوِيلًا؟', 'نَعَمْ، لَيْسَ قَصِيرًا.', 'Right — it is not short.'] },
      ],
      foot: 'Website Stretch: balā CANCELS the negative idea; naʿam CONFIRMS it. In everyday IGCSE answers, avoid confusion by giving a complete positive or negative sentence.',
      notes: 'PART 5 (2 min) — website “Negative questions and balā” (row 3 from the website Repair lab).',
    },
  ],
  quick: [
    W(/add هَلْ/, 0, { prompt: 'Make it a question: أَنْتِ مُتْعَبَةٌ.', feedback: 'Add hal; keep the feminine.' }),
    W(/add هَلْ/, 1, { prompt: 'Make it a question: وَصَلَتِ الْحَافِلَةُ.', feedback: 'Same verb, same order.' }),
    W(/add هَلْ/, 2, { feedback: 'Sa- + present = future.' }),
    W(/hamza or هَلْ/, 0, { feedback: 'Attached: a-tadhhabīna.' }),
  ],
  quickNote: 'website mini-checks: add hal; hamza or hal.',
  ido: {
    title: 'Watch me interview a new student',
    steps: [
      { head: 'Statement', ar: 'أَنْتِ جَدِيدَةٌ', think: 'Check it is correct.' },
      { head: 'Add hal', ar: 'هَلْ أَنْتِ جَدِيدَةٌ؟', think: 'Same order + ?' },
      { head: 'Choice', ar: 'أَمْ', think: 'Two options: a- … am.' },
      { head: 'Answer', ar: 'نَعَمْ، وَصَلْتُ أَمْسِ', think: 'A full answer.' },
    ],
    legend: ['k'], legendLabels: { k: 'QUESTION MARKER' },
    model: '{k|هَلْ} أَنْتِ جَدِيدَةٌ فِي الْمَدْرَسَةِ؟ — نَعَمْ، وَصَلْتُ يَوْمَ الْأَحَدِ. {k|هَلْ} تَسْكُنِينَ قَرِيبًا؟ — لَا، أَسْكُنُ بَعِيدًا قَلِيلًا. {k|أَتُفَضِّلِينَ} الرِّيَاضِيَّاتِ {k|أَمِ} الْعُلُومَ؟ — أُفَضِّلُ الْعُلُومَ لِأَنَّهَا مُمْتِعَةٌ. {k|هَلْ} سَتَنْضَمِّينَ إِلَى نَادِي الْقِرَاءَةِ؟ — نَعَمْ، إِنْ شَاءَ اللَّهُ.',
    modelEn: 'Are you new at the school? — Yes, I arrived on Sunday. Do you live nearby? — No, I live a little far away. Do you prefer maths or science? — I prefer science because it is interesting. Will you join the reading club? — Yes, in shāʾ Allāh.',
    notes: 'Website speaking-survey model. The choice question is answered by choosing, not with naʿam.',
  },
  models: [
    { ar: 'هَلْ تَدْرُسِينَ الْعَرَبِيَّةَ؟', en: 'Do you study Arabic? (to a girl)', tip: 'hal + statement.' },
    { ar: 'أَتَسْكُنُ قَرِيبًا مِنَ الْمَدْرَسَةِ؟', en: 'Do you live near the school?', tip: 'Hamza attached.' },
    { ar: 'هَلْ هَذَا كِتَابُكَ؟', en: 'Is this your book?', tip: 'No “is” needed.' },
    { ar: 'أَذَهَبْتَ إِلَى الطَّبِيبِ أَمْ بَقِيتَ فِي الْبَيْتِ؟', en: 'Did you go to the doctor or stay at home?', tip: 'a- … am.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · statement → question (website game)', title: 'Make it a question', ar: 'حَوِّلْ إِلَى سُؤَالٍ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Statement', w: 3.9, size: 22 }, { label: 'Question', w: 5.0, size: 22 }, { label: 'Watch', w: 3.43 }],
      rows: [
        { core: true, cells: ['أَنْتِ مُعَلِّمَةٌ.', 'هَلْ أَنْتِ مُعَلِّمَةٌ؟', 'hal + question mark'] },
        { core: true, cells: ['تَذْهَبُ الْيَوْمَ.', 'أَتَذْهَبُ الْيَوْمَ؟', 'hamza attached'] },
        { core: true, cells: ['وَصَلُوا.', 'هَلْ وَصَلُوا؟', 'past plural'] },
        { cells: ['سَتُسَافِرُ غَدًا.', 'هَلْ سَتُسَافِرُ غَدًا؟', 'future'] },
        { cells: ['تُفَضِّلُ الشَّايَ.', 'أَتُفَضِّلُ الشَّايَ أَمِ الْقَهْوَةَ؟', 'choice: a- … am'] },
        { cells: ['أَنْتُمْ مُسْتَعِدُّونَ.', 'هَلْ أَنْتُمْ مُسْتَعِدُّونَ؟', 'plural; mark at the end'] },
      ],
      foot: 'Website check: no “do”, no word swap, one question marker, and the Arabic question mark at the end.',
      notes: 'WE DO (3 min) — website game items. Cover column 2; students ask the question aloud with rising intonation, a partner answers.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · what kind of answer?', title: 'Yes, no, or balā?', ar: 'نَعَمْ أَمْ لَا أَمْ بَلَى؟',
      categories: ['Yes', 'No', 'Balā (cancels a negative)'],
      items: [['نَعَمْ، أَلْعَبُهَا كُلَّ أُسْبُوعٍ.', 0], ['نَعَمْ، قَرَأْتُهُ أَمْسِ.', 0], ['لَا، لَمْ أَذْهَبْ إِلَيْهِ.', 1], ['لَا، لَمْ أَزُرْهُ.', 1], ['بَلَى، هُوَ سَهْلٌ.', 2], ['بَلَى، ذَهَبْتُ.', 2]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Then students write the question for each answer: hal talʿabu kurata l-qadami? … a-laysa d-darsu sahlan?',
    },
  ],
  mistakes: [
    { wrong: 'هَلْ أَتَدْرُسُ الْعَرَبِيَّةَ؟', right: 'هَلْ تَدْرُسُ الْعَرَبِيَّةَ؟', why: 'One question marker only (website repair lab).' },
    { wrong: 'أَ تَسْكُنِينَ هُنَا؟', right: 'أَتَسْكُنِينَ هُنَا؟', why: 'The hamza joins the verb (website repair lab).' },
    { wrong: 'هَلْ تَفْعَلُ تَعْمَلُ هُنَا؟', right: 'هَلْ تَعْمَلُ هُنَا؟', why: 'Arabic has no “do” in questions (website clinic).' },
  ],
  hints: ['How many question markers?', 'Space after the hamza?', 'Do we need “do”?'],
  practice: [
    W(/hamza or هَلْ/, 1, { prompt: 'Choose the best “this or that?” question.', feedback: 'a- … am: two real options.' }),
    W(/hamza or هَلْ/, 3, { prompt: 'Choose “Is this your teacher?” (to one male).', feedback: 'a-hādhā + muʿallimuka.' }),
    W(/Repair lab/, 0, { prompt: 'Repair: هَلْ أَتَدْرُسُ الْعَرَبِيَّةَ؟', feedback: 'Keep one marker.' }),
    W(/Repair lab/, 1, { prompt: 'Repair: أَ تَسْكُنِينَ هُنَا؟', feedback: 'Attach the hamza.' }),
  ],
  practiceLabel: 'website mini-check and Repair lab',
  read: {
    title: 'Message check', label: 'website reading: message check (extended)',
    text: 'مَرْيَمُ، هَلْ وَصَلْتِ إِلَى الْمَحَطَّةِ؟ أَعِنْدَكِ التَّذْكِرَةُ؟ هَلْ سَيَصِلُ الْقِطَارُ فِي الْمَوْعِدِ؟ أَتُرِيدِينَ أَنْ آتِيَ إِلَيْكِ أَمْ تَأْخُذِينَ سَيَّارَةَ أُجْرَةٍ؟ هَلْ أَكَلْتِ شَيْئًا؟ أُمِّي طَبَخَتِ الْمَقْلُوبَةَ، وَهِيَ تَنْتَظِرُكِ. أَرْسِلِي لِي رِسَالَةً عِنْدَمَا تَرْكَبِينَ الْقِطَارَ!',
    glossary: [['الْمَحَطَّةِ', 'the station'], ['التَّذْكِرَةُ', 'the ticket'], ['فِي الْمَوْعِدِ', 'on time'], ['سَيَّارَةَ أُجْرَةٍ', 'a taxi'], ['تَرْكَبِينَ', 'you (f.) get on']],
    task: 'Website: identify the pieces of information the sender wants confirmed. Underline every question marker.',
    questions: [
      q('Where should Maryam be now?', ['at the station', 'at home', 'on the plane'], 'Hal waṣalti ilā l-maḥaṭṭati?'),
      q('Which question offers a choice?', ['أَتُرِيدِينَ أَنْ آتِيَ إِلَيْكِ أَمْ …', 'هَلْ أَكَلْتِ شَيْئًا؟', 'أَعِنْدَكِ التَّذْكِرَةُ؟'], 'a- … am.'),
      q('Who cooked the maqlūba?', ['the writer’s mother', 'Maryam', 'the writer'], 'Ummī ṭabakhati l-maqlūbata.'),
      q('What should Maryam do when she gets on the train?', ['send a message', 'call a taxi', 'buy a ticket'], 'Arsilī lī risālatan.'),
    ],
    qNote: 'Website message-check lines, extended by the teacher; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: class survey', source: 'website speaking survey',
    prompts: [
      { route: 'core', ar: 'هَلْ تُحِبُّ الرِّيَاضَةَ؟' },
      { route: 'develop', ar: 'اِسْأَلْ زَمِيلَكَ سِتَّةَ أَسْئِلَةٍ بِـ«هَلْ».' },
      { route: 'stretch', ar: 'اِسْأَلْ سُؤَالَ اخْتِيَارٍ، ثُمَّ أَجِبْ مَعَ سَبَبٍ.' },
    ],
    stems: [
      { route: 'core', ar: 'نَعَمْ، أُحِبُّ ______ ، لِأَنَّ ______ .' },
      { route: 'develop', ar: 'هَلْ ______ فِي الْعُطْلَةِ؟' },
      { route: 'stretch', ar: 'أَتُفَضِّلُ ______ أَمْ ______ ؟' },
    ],
    model: [
      { who: 'A', ar: 'أَلَمْ تُشَاهِدِي الْمُبَارَاةَ أَمْسِ؟', en: 'Didn’t you watch the match yesterday? (to a girl)' },
      { who: 'B', ar: 'بَلَى، شَاهَدْتُهَا مَعَ أَبِي! هَلْ شَاهَدْتَهَا أَنْتَ؟', en: 'Yes, I did — I watched it with my father! Did you watch it?' },
    ],
    notes: 'Website survey: six questions across school, hobbies, travel and future plans; hal at least four times and one a- … am. Then report back in the third person.',
  },
  write: {
    siteTask: 'Write a ten-question Arabic interview for a new student, visitor or classmate, then add model answers.',
    core: { amount: '6 questions', task: 'hal questions for a new student, with yes / no answers.', how: 'hal anta …? · naʿam, …' },
    develop: { amount: '8 questions', task: 'Add past, future and one a- … am question.', how: 'hal zurta …? · hal sa-…?' },
    stretch: { amount: '10 questions', task: 'Website interview with extended model answers.', how: 'Include one negative question + balā.' },
  },
  frames: {
    core: [
      { en: 'Are you …?', ar: 'هَلْ أَنْتَ ______ ؟' },
      { en: 'Do you live in …?', ar: 'هَلْ تَسْكُنُ فِي ______ ؟' },
      { en: 'Do you have a …?', ar: 'هَلْ عِنْدَكَ ______ ؟' },
      { en: 'Yes, I …', ar: 'نَعَمْ، ______ .' },
    ],
    develop: [
      { en: 'Did you visit …?', ar: 'هَلْ زُرْتَ ______ ؟' },
      { en: 'Will you travel …?', ar: 'هَلْ سَتُسَافِرُ ______ ؟' },
      { en: 'Do you prefer … or …?', ar: 'أَتُفَضِّلُ ______ أَمْ ______ ؟' },
      { en: 'No, I did not …', ar: 'لَا، لَمْ ______ .' },
    ],
    bank: ['هَلْ', 'أَمْ', 'نَعَمْ', 'لَا', 'بَلَى', 'لَمْ', 'لِأَنَّ', 'أَمْسِ', 'غَدًا', 'كُلَّ يَوْمٍ', 'أُفَضِّلُ', 'أَسْكُنُ', 'زُرْتُ'],
  },
  stretchTask: {
    task: 'Website mini-interview: ten questions for a new student, visitor or classmate, with model answers.',
    checklist: ['Six hal questions and two hamza questions.', 'One a- … am alternative.', 'Past, present and future questions.', 'Accurate agreement in every question.', 'Extended answers with reasons (and one balā).'],
    phrases: [['هَلْ أَنْتَ جَدِيدٌ؟', 'are you new?'], ['مُنْذُ مَتَى', 'since when'], ['إِنْ شَاءَ اللَّهُ', 'God willing'], ['بَعْدُ', 'yet'], ['لِأَنَّ', 'because'], ['الْجَمِيعُ', 'everyone']],
  },
  model: {
    text: 'هَلْ أَنْتَ جَدِيدٌ فِي مَدْرَسَتِنَا؟ نَعَمْ، وَصَلْتُ هَذَا الشَّهْرَ مِنْ مِصْرَ. هَلْ تَتَكَلَّمُ الْإِنْجِلِيزِيَّةَ؟ نَعَمْ، وَلَكِنِّي أَتَعَلَّمُهَا بِجِدٍّ. أَتَسْكُنُ قَرِيبًا أَمْ بَعِيدًا؟ أَسْكُنُ قَرِيبًا، فِي الشَّارِعِ الثَّانِي. هَلْ زُرْتَ مَكْتَبَةَ الْمَدْرَسَةِ؟ لَا، لَمْ أَزُرْهَا بَعْدُ. هَلْ تُحِبُّ الرِّيَاضَةَ؟ نَعَمْ، أَلْعَبُ كُرَةَ السَّلَّةِ كُلَّ سَبْتٍ. أَتُفَضِّلُ الرِّيَاضِيَّاتِ أَمِ الْعُلُومَ؟ أُفَضِّلُ الْعُلُومَ لِأَنَّ تَجَارِبَهَا مُمْتِعَةٌ. هَلْ سَتَنْضَمُّ إِلَى نَادِي الشِّطْرَنْجِ؟ نَعَمْ، إِنْ شَاءَ اللَّهُ. أَلَيْسَ الْجَوُّ هُنَا بَارِدًا؟ بَلَى، هُوَ بَارِدٌ جِدًّا! هَلْ عِنْدَكَ إِخْوَةٌ؟ نَعَمْ، عِنْدِي أُخْتَانِ. هَلْ أَنْتَ سَعِيدٌ هُنَا؟ نَعَمْ، الْجَمِيعُ لُطَفَاءُ.',
    en: 'Are you new at our school? Yes, I arrived this month from Egypt. Do you speak English? Yes, but I am working hard to learn it. Do you live near or far? I live near, in the second street. Have you visited the school library? No, I have not visited it yet. Do you like sport? Yes, I play basketball every Saturday. Do you prefer maths or science? I prefer science because its experiments are interesting. Will you join the chess club? Yes, in shāʾ Allāh. Isn’t the weather cold here? Yes, it is very cold! Do you have brothers and sisters? Yes, I have two sisters. Are you happy here? Yes, everyone is kind.',
    find: ['hal question', 'hamza question with am', 'past question + lam answer', 'negative question + balā'],
    source: 'teacher model on the website interview task',
  },
  selfCheck: [
    { route: 'core', text: 'Each question starts with hal or a- and ends with a question mark.' },
    { route: 'core', text: 'My answers are full sentences.' },
    { route: 'develop', text: 'The hamza is joined to the next word.' },
    { route: 'develop', text: 'I never used hal and a- together.' },
    { route: 'stretch', text: 'I answered a negative question with balā.' },
  ],
  exit: [
    W(/Repair lab/, 3, { prompt: 'Best answer to أَلَمْ تَذْهَبِي؟ if you DID go:', feedback: 'Balā cancels the negative.' }),
    W(/Yes\/No Mastery/, 3, { prompt: 'Choose the past question to one female.', feedback: 'Zurti = you (f.) visited.' }),
    W(/Yes\/No Mastery/, 7, { prompt: 'Best negative answer to هَلْ ذَهَبْتَ؟', feedback: 'Lam + present form.' }),
  ],
  mastery: false,
  prep: {
    words: [['أَيُّ', 'which? (with masculine nouns)', '—'], ['أَيَّةُ', 'which? (with feminine nouns)', '—'], ['أَيُّ كِتَابٍ؟', 'which book?', '—'], ['أَيَّةُ مَدِينَةٍ؟', 'which city?', '—'], ['فِي أَيِّ', 'in which', '—']],
    questionEn: 'Ayy (which) is followed by an indefinite noun ending in -in: ayyu kitābin? How would you ask “Which colour do you like?” (lawn = colour)',
    questionAr: 'أَيُّ ______ تُحِبُّ؟',
    homework: {
      core: 'Write six hal questions about school and answer them in full.',
      develop: 'Write two a- … am questions and four questions in different tenses.',
      stretch: 'Website ten-question interview with model answers.',
    },
    wordsSource: 'The five words prepare GM-INT-02 (website: which? — ayy and ayya).',
  },
  remember: 'Remember: hal + statement + question mark (no word swap, no “do”) · the hamza joins the next word: a-tadhhabu? · a- … am = this or that? (choose, don’t say naʿam) · answer with a full sentence · negative question → balā cancels it.',
});

module.exports = { meta, slides };
