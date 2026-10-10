'use strict';
/* GM-INT-03 · Common Question Words — website: Mastery & Revision › Grammar › Interrogatives › Lesson 3 (a question word opens an
 * information gap; the question-word map with answer shapes; mā for identity / name / category vs mādhā + verb for actions;
 * man in different roles — who, whom, with whom, whose; ayna, min ayna, ilā ayna; matā and kayfa; limādhā → li-anna; question
 * words after prepositions and compact forms bima, fīma, lima, mimma, ʿamma; clinic). Quizzes are the website’s (Starter,
 * Mini-checks: mā or mādhā, place; Repair lab; Mastery); items with “only” options are skipped. Colour code: teal = question word.
 * I-do, answer → question drill, category sorter, reading, frames and the model interview are teacher-made on the website content
 * (the drill uses the website game items). */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__14-interrogatives__grammar-mastery-03-question-words';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-INT-03', fileTitle: 'Question_Words', title: 'Common Question Words', arabic: 'أَدَوَاتُ الِاسْتِفْهَامِ الشَّائِعَةُ',
  focus: 'Ask for exactly what is missing: man (who), mā / mādhā (what), ayna (where), matā (when), kayfa (how), limādhā (why). Then give the answer the question asks for — a person, a place, a time or a reason.',
  icon: 'FaClipboardQuestion',
});

const slides = G.gmLesson({
  code: 'GM-INT-03', site: KEY,
  support: `• Core: man, mā, mādhā, ayna, matā — each matched with the right kind of answer (man hādhā? → hādhā akhī). Develop: kayfa, limādhā (answer with li-anna), min ayna / ilā ayna, follow-up questions and reporting. Stretch: question words after prepositions (maʿa man? li-man?) and the compact forms bima, fīma, lima, mimma, ʿamma.
• Website house pattern: mā for identity, names and categories (mā smuka?); mādhā before a verb (mādhā taqraʾu?). Some overlap is possible in Arabic — this is a reliable learner rule, not the only option.
• Colour code: teal = question word. Recycles GM-INT-01/02 (hal, ayy), GM-POS-03 (li-man) and GM-CP prepositions.`,
  teach: 'The map; mā or mādhā; man; place, time, manner, reason; with prepositions.',
  wedo: 'Answer → question; what does it answer?; repair.',
  next: { nextCode: 'GM-INT-04', nextTitle: 'How Many? The Kam Rule', nextAr: 'كَمْ وَالْمُفْرَدُ الْمَنْصُوبُ' },
  doNow: {
    questions: [
      W(/Question-word Starter/, 0, { feedback: 'Man = who.' }),
      W(/Question-word Starter/, 1, { feedback: 'Ayna = where.' }),
      W(/Question-word Starter/, 2, { feedback: 'Mādhā + verb = what … doing?' }),
      W(/Question-word Starter/, 3, { feedback: 'Matā = when.' }),
      W(/Question-word Starter/, 4, { feedback: 'Limādhā → answer with li-anna.' }),
    ],
    keyIdea: { text: 'Choose the word for the missing information — and answer with that kind of information.', ar: '{k|مَنْ} هَذَا؟ ‖ {k|أَيْنَ} تَسْكُنُ؟ ‖ {k|لِمَاذَا} تَدْرُسُ؟' },
    retrieves: 'The website Starter — GM-INT-01 hal questions and question intonation.',
  },
  objectives: ['Ask about people, things, places and times.', 'Use mā for names and mādhā before verbs.', 'Ask where from and where to.', 'Ask how and why — and answer with a reason.'],
  routes: {
    core: ['I use man, mā, mādhā, ayna, matā.', 'My answer gives the right kind of information.'],
    develop: ['I use kayfa, limādhā, min ayna, ilā ayna.', 'I ask a follow-up question.'],
    stretch: ['I use maʿa man?, li-man?, fīma?', 'I write a twelve-question interview.'],
  },
  terms: {
    items: [
      { ar: 'مَنْ', en: 'who?', note: 'مَنْ هَذَا؟' },
      { ar: 'مَا · مَاذَا', en: 'what? (name · action)', note: 'مَا اسْمُكَ؟ · مَاذَا تَفْعَلُ؟' },
      { ar: 'أَيْنَ', en: 'where?', note: 'مِنْ أَيْنَ · إِلَى أَيْنَ' },
      { ar: 'مَتَى', en: 'when?', note: 'مَتَى تَبْدَأُ الْحِصَّةُ؟' },
      { ar: 'كَيْفَ', en: 'how?', note: 'كَيْفَ حَالُكَ؟' },
      { ar: 'لِمَاذَا', en: 'why?', note: 'لِأَنَّ …' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · the question-word map (website table)', title: 'Each word opens a different gap', ar: 'خَرِيطَةُ أَدَوَاتِ الِاسْتِفْهَامِ', ltr: true,
      cols: [{ label: 'Word', w: 2.0, size: 26 }, { label: 'Asks about', w: 2.6 }, { label: 'Model question', w: 3.9, size: 22 }, { label: 'Model answer', w: 3.83, size: 22 }],
      rows: [
        { core: true, cells: ['مَنْ', 'a person', 'مَنْ هَذَا؟', 'هَذَا أَخِي.'] },
        { core: true, cells: ['مَا', 'a thing / a name', 'مَا اسْمُكَ؟', 'اِسْمِي آدَمُ.'] },
        { core: true, cells: ['مَاذَا', 'an action / object', 'مَاذَا تَقْرَأُ؟', 'أَقْرَأُ رِوَايَةً.'] },
        { core: true, cells: ['أَيْنَ', 'a place', 'أَيْنَ تَسْكُنُ؟', 'أَسْكُنُ فِي لَنْدَنَ.'] },
        { core: true, cells: ['مَتَى', 'a time', 'مَتَى تَبْدَأُ الْحِصَّةُ؟', 'فِي السَّاعَةِ الثَّامِنَةِ.'] },
        { cells: ['كَيْفَ', 'manner / state', 'كَيْفَ تَذْهَبُ؟', 'أَذْهَبُ بِالْحَافِلَةِ.'] },
        { cells: ['لِمَاذَا', 'a reason', 'لِمَاذَا تُحِبُّهُ؟', 'لِأَنَّهُ مُفِيدٌ.'] },
      ],
      foot: 'Website answer alignment: if the answer gives the wrong kind of information, communication fails — even when every word is correct. Kam (how many?) has its own rule: GM-INT-04.',
      notes: 'PART 1 (3 min) — website “The question-word map” (answers from the website game). Gesture for each word: person, object, action, place, clock, method, “because”.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · mā and mādhā (website lists)', title: 'What is it? · What are you doing?', ar: 'مَا وَمَاذَا', ltr: true,
      cols: [{ label: 'Question', w: 4.2, size: 24 }, { label: 'Meaning', w: 4.4 }, { label: 'Pattern', w: 3.73 }],
      rows: [
        { core: true, cells: ['مَا هَذَا؟', 'What is this?', 'mā + noun'] },
        { core: true, cells: ['مَا اسْمُكِ؟', 'What is your name? (to a girl)', 'mā + noun'] },
        { cells: ['مَا لَوْنُ السَّيَّارَةِ؟', 'What colour is the car?', 'mā + noun'] },
        { core: true, cells: ['مَاذَا تَفْعَلُ؟', 'What are you doing?', 'mādhā + verb'] },
        { cells: ['مَاذَا قَرَأْتِ؟', 'What did you read? (to a girl)', 'mādhā + verb'] },
        { cells: ['مَاذَا سَتَشْتَرُونَ؟', 'What will you (all) buy?', 'mādhā + verb'] },
      ],
      foot: 'Website accuracy note: Arabic allows some overlap between mā and mādhā. The reliable learner rule: mā before a noun, mādhā before a verb.',
      notes: 'PART 2 (3 min) — website “mā and mādhā”. Also mā raʾyuka? (What is your opinion?).',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 3 · man in different roles (website table) · Develop', title: 'Who, whom, with whom, whose', ar: 'مَنْ', ltr: true,
      cols: [{ label: 'Role', w: 2.8 }, { label: 'Question', w: 4.6, size: 24 }, { label: 'Answer', w: 4.93, size: 24 }],
      rows: [
        { core: true, cells: ['identity', 'مَنْ هَذِهِ؟', 'هَذِهِ مُعَلِّمَتِي.'] },
        { core: true, cells: ['doer', 'مَنْ فَتَحَ الْبَابَ؟', 'فَتَحَهُ الْمُدِيرُ.'] },
        { cells: ['object (whom)', 'مَنْ زُرْتَ؟', 'زُرْتُ جَدِّي.'] },
        { cells: ['with whom', 'مَعَ مَنْ ذَهَبْتِ؟', 'ذَهَبْتُ مَعَ أُخْتِي.'] },
        { cells: ['whose / for whom', 'لِمَنْ هَذَا الْكِتَابُ؟', 'هُوَ لِي.'] },
      ],
      foot: 'Website: man can ask who does the action, who receives it, who accompanies, or who owns. A preposition in the question usually comes back in the answer: maʿa man? → maʿa ukhtī.',
      notes: 'PART 3 (2 min) — website “man: people in different sentence roles”. Li-man recycles GM-POS-03.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 4 · place, time, manner, reason (website models) · Develop', title: 'Keep the preposition — give the right answer', ar: 'أَيْنَ · مَتَى · كَيْفَ · لِمَاذَا', ltr: true,
      cols: [{ label: 'Question', w: 4.4, size: 22 }, { label: 'Answer', w: 4.8, size: 22 }, { label: 'Asks for', w: 3.13 }],
      rows: [
        { core: true, cells: ['أَيْنَ تَسْكُنُ؟', 'أَسْكُنُ فِي لَنْدَنَ.', 'location'] },
        { core: true, cells: ['مِنْ أَيْنَ أَنْتِ؟', 'أَنَا مِنْ سُورِيَا.', 'origin (from)'] },
        { cells: ['إِلَى أَيْنَ سَتَذْهَبُ؟', 'سَأَذْهَبُ إِلَى الْمَطَارِ.', 'destination (to)'] },
        { core: true, cells: ['مَتَى بَدَأَ الدَّرْسُ؟', 'بَدَأَ فِي السَّاعَةِ التَّاسِعَةِ.', 'time'] },
        { cells: ['كَيْفَ تَذْهَبُ إِلَى الْعَمَلِ؟', 'أَذْهَبُ بِالْحَافِلَةِ.', 'method'] },
        { core: true, cells: ['لِمَاذَا لَمْ تَذْهَبْ؟', 'لِأَنَّنِي كُنْتُ مَرِيضًا.', 'reason'] },
      ],
      foot: 'Website warning: do not answer ayna, min ayna and ilā ayna with the same bare place name — keep fī, min or ilā. A why-question needs a reason (li-anna …), not another fact.',
      notes: 'PART 4 (3 min) — website “ayna, min ayna and ilā ayna”, “matā and kayfa”, “limādhā”. Extend: kuntu marīḍan, li-dhālika baqītu fī l-bayti.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 5 · question words with prepositions (website table) · Stretch', title: 'Full forms and compact forms', ar: 'بِمَ · فِيمَ · لِمَ', ltr: true,
      cols: [{ label: 'Full form', w: 3.0, size: 24 }, { label: 'Compact form', w: 2.8, size: 24 }, { label: 'Example', w: 6.53, size: 22 }],
      rows: [
        { cells: ['بِمَاذَا', 'بِمَ', 'بِمَ تَكْتُبُ؟'] },
        { cells: ['فِي مَاذَا', 'فِيمَ', 'فِيمَ تُفَكِّرُ؟'] },
        { cells: ['لِمَاذَا', 'لِمَ', 'لِمَ تَأَخَّرْتَ؟'] },
        { cells: ['مِنْ مَاذَا', 'مِمَّ', 'مِمَّ تَخَافُ؟'] },
        { cells: ['عَنْ مَاذَا', 'عَمَّ', 'عَمَّ تَبْحَثُ؟'] },
      ],
      foot: 'Website: the full forms are clear and safe for Core. Stretch learners recognise the compact spellings in formal reading — and use them when secure.',
      notes: 'PART 5 (2 min) — website “Question words with prepositions”. bima taktubu? = what do you write with? fīma tufakkiru? = what are you thinking about?',
    },
  ],
  quick: [
    W(/مَا or مَاذَا/, 0, { prompt: 'Ask “What is your name?”', feedback: 'Mā + noun.' }),
    W(/مَا or مَاذَا/, 1, { prompt: 'Ask “What did you write?”', feedback: 'Mādhā + verb.' }),
    W(/مَا or مَاذَا/, 2, { prompt: 'Ask “What colour is the bag?”', feedback: 'Mā + lawnu …' }),
    W(/مَا or مَاذَا/, 3, { prompt: 'Ask “What will they buy?”', feedback: 'Mādhā + verb.' }),
  ],
  quickNote: 'website mini-check: mā or mādhā.',
  ido: {
    title: 'Watch me fill in a visitor form',
    steps: [
      { head: 'Name', ar: 'مَا اسْمُكَ؟', think: 'mā + noun.' },
      { head: 'Origin', ar: 'مِنْ أَيْنَ', think: 'min = from.' },
      { head: 'Time', ar: 'مَتَى', think: 'Answer with a time.' },
      { head: 'Reason', ar: 'لِمَاذَا', think: 'Answer with li-anna.' },
    ],
    legend: ['k'], legendLabels: { k: 'QUESTION WORD' },
    model: '{k|مَا} اسْمُكَ؟ اِسْمِي آدَمُ. {k|مِنْ أَيْنَ} أَنْتَ؟ أَنَا مِنْ مَالِيزِيَا. {k|أَيْنَ} تَسْكُنُ؟ أَسْكُنُ فِي فُنْدُقٍ قُرْبَ الْمَسْجِدِ. {k|مَتَى} وَصَلْتَ؟ وَصَلْتُ أَمْسِ. {k|كَيْفَ} سَافَرْتَ؟ سَافَرْتُ بِالطَّائِرَةِ. {k|لِمَاذَا} زُرْتَ الْمَدِينَةَ؟ لِأَنَّنِي أُحِبُّ تَارِيخَهَا.',
    modelEn: 'What is your name? My name is Ādam. Where are you from? I am from Malaysia. Where are you staying? In a hotel near the mosque. When did you arrive? I arrived yesterday. How did you travel? I travelled by plane. Why did you visit the city? Because I love its history.',
    notes: 'Website “Reading: visitor form” questions with teacher answers. Website task: match each question to a field on a visitor form.',
  },
  models: [
    { ar: 'مَنْ هَذِهِ؟', en: 'Who is this (f.)?', tip: 'Person.' },
    { ar: 'مَاذَا تَفْعَلُ؟', en: 'What are you doing?', tip: 'mādhā + verb.' },
    { ar: 'إِلَى أَيْنَ سَتُسَافِرِينَ؟', en: 'Where will you travel to? (to a girl)', tip: 'Destination.' },
    { ar: 'لِمَاذَا تَتَعَلَّمُ الْعَرَبِيَّةَ؟', en: 'Why are you learning Arabic?', tip: 'Reason.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · answer → question (website game)', title: 'What was the question?', ar: 'مَا السُّؤَالُ؟', ltr: true, stage: 'wedo',
      cols: [{ label: 'Answer', w: 4.4, size: 22 }, { label: 'Question', w: 4.6, size: 22 }, { label: 'Category', w: 3.33 }],
      rows: [
        { core: true, cells: ['هَذَا أَخِي.', 'مَنْ هَذَا؟', 'person'] },
        { core: true, cells: ['أَقْرَأُ رِوَايَةً.', 'مَاذَا تَقْرَأُ؟', 'action / object'] },
        { core: true, cells: ['أَنَا مِنْ سُورِيَا.', 'مِنْ أَيْنَ أَنْتَ؟', 'origin'] },
        { cells: ['سَأَذْهَبُ إِلَى الْمَطَارِ.', 'إِلَى أَيْنَ سَتَذْهَبُ؟', 'destination'] },
        { cells: ['أَذْهَبُ بِالْحَافِلَةِ.', 'كَيْفَ تَذْهَبُ؟', 'method'] },
        { cells: ['لِأَنَّهُ مُفِيدٌ.', 'لِمَاذَا تُحِبُّهُ؟', 'reason'] },
      ],
      foot: 'Website question-to-answer match: the answer tells you which question word was used.',
      notes: 'WE DO (3 min) — website game items. Cover column 2. Point out: the person in the question changes (taqraʾu → aqraʾu).',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · which question does it answer?', title: 'Who, where, when or why?', ar: 'مَنْ · أَيْنَ · مَتَى · لِمَاذَا',
      categories: ['Who?', 'Where?', 'When?', 'Why?'],
      items: [['أَخِي', 0], ['الْمُدِيرُ', 0], ['فِي لَنْدَنَ', 1], ['إِلَى الْمَطَارِ', 1], ['غَدًا', 2], ['فِي السَّاعَةِ الثَّامِنَةِ', 2], ['لِأَنَّهُ مُفِيدٌ', 3], ['لِأَنَّنِي مَرِيضٌ', 3]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min) — website listening-grid categories. Then students make a full question for one card in each column.',
    },
  ],
  mistakes: [
    { wrong: 'أَيْنَ أَنْتَ مِنْ؟', right: 'مِنْ أَيْنَ أَنْتَ؟', why: 'The preposition goes before ayna (website repair lab).' },
    { wrong: 'مَنْ اسْمُكَ؟', right: 'مَا اسْمُكَ؟', why: 'A name is information, not a person: mā (website clinic).' },
    { wrong: 'لِمَاذَا تَدْرُسُ؟ — فِي الْمَكْتَبَةِ.', right: 'لِمَاذَا تَدْرُسُ؟ — لِأَنَّ الِامْتِحَانَ قَرِيبٌ.', why: 'Why → a reason, not a place (website clinic).' },
  ],
  hints: ['Where does min go?', 'Is a name a person?', 'Does the answer give a reason?'],
  practice: [
    W(/Mini-check: place/, 0, { prompt: 'Ask where someone lives.', feedback: 'Ayna = location.' }),
    W(/Mini-check: place/, 1, { prompt: 'Ask where someone is from.', feedback: 'Min ayna = origin.' }),
    W(/Mini-check: place/, 2, { prompt: 'Ask where the bus is going.', feedback: 'Ilā ayna = destination.' }),
    W(/Mini-check: place/, 3, { prompt: 'Choose the answer to مِنْ أَيْنَ أَنْتَ؟', feedback: 'Keep min in the answer.' }),
  ],
  practiceLabel: 'website mini-check: place',
  read: {
    title: 'The new neighbour', label: 'website reading (teacher-written account)',
    text: 'جَاءَتْ جَارَةٌ جَدِيدَةٌ إِلَى عِمَارَتِنَا، فَسَأَلَتْهَا أُمِّي أَسْئِلَةً كَثِيرَةً. سَأَلَتْهَا: مِنْ أَيْنَ أَنْتِ؟ فَقَالَتْ: مِنْ تُونِسَ. ثُمَّ سَأَلَتْهَا: مَتَى وَصَلْتِ؟ فَقَالَتْ: قَبْلَ أُسْبُوعٍ. سَأَلَتْهَا أَيْضًا: مَاذَا تَعْمَلِينَ؟ فَأَجَابَتْ: أَنَا مُمَرِّضَةٌ فِي الْمُسْتَشْفَى الْقَرِيبِ. وَعِنْدَمَا سَأَلَتْهَا: لِمَاذَا اخْتَرْتِ هَذَا الْحَيَّ؟ قَالَتْ: لِأَنَّهُ هَادِئٌ وَقَرِيبٌ مِنْ عَمَلِي. فِي النِّهَايَةِ سَأَلَتْهَا: كَيْفَ نُسَاعِدُكِ؟ فَضَحِكَتِ الْجَارَةُ وَقَالَتْ: بِفِنْجَانِ قَهْوَةٍ!',
    glossary: [['جَارَةٌ', 'a neighbour (f.)'], ['عِمَارَتِنَا', 'our building'], ['مُمَرِّضَةٌ', 'a nurse (f.)'], ['اخْتَرْتِ', 'you (f.) chose'], ['فِنْجَانِ', 'a cup']],
    task: 'Website: underline each question word and say what kind of information the answer gives.',
    questions: [
      q('Where is the neighbour from?', ['Tunisia', 'Syria', 'Morocco'], 'Min ayna anti? — min Tūnisa.'),
      q('What is her job?', ['a nurse', 'a teacher', 'a doctor'], 'Mādhā taʿmalīna? — mumarriḍa.'),
      q('Why did she choose the neighbourhood?', ['it is quiet and near her work', 'it is cheap', 'her family lives there'], 'Li-annahu hādiʾun wa-qarībun.'),
      q('Which question asks about manner?', ['كَيْفَ نُسَاعِدُكِ؟', 'مَتَى وَصَلْتِ؟', 'مِنْ أَيْنَ أَنْتِ؟'], 'Kayfa = how.'),
    ],
    qNote: 'Teacher-written account for the website reading task; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: ask, answer, follow up', source: 'website speaking follow-ups',
    prompts: [
      { route: 'core', ar: 'مَا اسْمُكَ؟ وَأَيْنَ تَسْكُنُ؟' },
      { route: 'develop', ar: 'مَاذَا فَعَلْتَ فِي الْعُطْلَةِ؟ وَمَعَ مَنْ؟' },
      { route: 'stretch', ar: 'لِمَاذَا تَتَعَلَّمُ الْعَرَبِيَّةَ؟ وَكَيْفَ تُذَاكِرُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'اِسْمِي ______ ، وَأَسْكُنُ فِي ______ .' },
      { route: 'develop', ar: 'زُرْتُ ______ مَعَ ______ .' },
      { route: 'stretch', ar: 'أَتَعَلَّمُهَا لِأَنَّ ______ ، وَأُذَاكِرُ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'إِلَى أَيْنَ سَافَرْتِ فِي الصَّيْفِ؟', en: 'Where did you travel to in the summer? (to a girl)' },
      { who: 'B', ar: 'سَافَرْتُ إِلَى الْأُرْدُنِّ مَعَ عَائِلَتِي، وَزُرْنَا الْبَتْرَاءَ. وَأَنْتَ، أَيْنَ قَضَيْتَ الصَّيْفَ؟', en: 'I travelled to Jordan with my family, and we visited Petra. And you — where did you spend the summer?' },
    ],
    notes: 'Website: ask one question from each category; after every answer, ask a second question on the same topic. Then report the answers in the third person.',
  },
  write: {
    siteTask: 'Write a twelve-question interview about daily life, family, school, leisure, travel and future plans, then provide model answers.',
    core: { amount: '6 questions', task: 'man, mā, mādhā, ayna, matā — with answers.', how: 'One question per word.' },
    develop: { amount: '9 questions', task: 'Add kayfa, limādhā and min / ilā ayna.', how: 'Answer why with li-anna.' },
    stretch: { amount: '12 questions', task: 'Website interview with model answers.', how: 'Past, present and future; four reasons.' },
  },
  frames: {
    core: [
      { en: 'Who is …?', ar: 'مَنْ ______ ؟' },
      { en: 'What is the name of …?', ar: 'مَا اسْمُ ______ ؟' },
      { en: 'Where do you …?', ar: 'أَيْنَ ______ ؟' },
      { en: 'When does … start?', ar: 'مَتَى يَبْدَأُ ______ ؟' },
    ],
    develop: [
      { en: 'Where is … from?', ar: 'مِنْ أَيْنَ ______ ؟' },
      { en: 'How do you get to …?', ar: 'كَيْفَ تَذْهَبُ إِلَى ______ ؟' },
      { en: 'Why do you like …?', ar: 'لِمَاذَا تُحِبُّ ______ ؟' },
      { en: 'Who did you … with?', ar: 'مَعَ مَنْ ______ ؟' },
    ],
    bank: ['مَنْ', 'مَا', 'مَاذَا', 'أَيْنَ', 'مِنْ أَيْنَ', 'إِلَى أَيْنَ', 'مَتَى', 'كَيْفَ', 'لِمَاذَا', 'لِأَنَّ', 'مَعَ مَنْ', 'لِمَنْ', 'بِالْحَافِلَةِ'],
  },
  stretchTask: {
    task: 'Website topic interview: twelve questions about daily life, family, school, leisure, travel and future plans — with model answers.',
    checklist: ['man, mā, mādhā, ayna, min ayna, ilā ayna.', 'matā, kayfa, limādhā and kam.', 'Past, present and future answers.', 'At least four reasons with li-anna.', 'Every answer matches its question word.'],
    phrases: [['وُلِدْتُ فِي', 'I was born in'], ['بَعْدَ الْمَدْرَسَةِ', 'after school'], ['آخِرَ مَرَّةٍ', 'last time'], ['الْمُفَضَّلُ', 'favourite'], ['إِنْ شَاءَ اللَّهُ', 'God willing'], ['لِذَلِكَ', 'so / therefore']],
  },
  model: {
    text: 'مَا اسْمُكِ؟ اِسْمِي نُورٌ. مِنْ أَيْنَ أَنْتِ؟ أَنَا مِنَ الْعِرَاقِ، وَلَكِنِّي وُلِدْتُ فِي بِرِيطَانِيَا. أَيْنَ تَسْكُنِينَ؟ أَسْكُنُ فِي مَانْشِسْتَرَ. مَنْ يَسْكُنُ مَعَكِ؟ وَالِدَايَ وَأَخِي الصَّغِيرُ. مَاذَا تَفْعَلِينَ بَعْدَ الْمَدْرَسَةِ؟ أَقْرَأُ الْقُرْآنَ ثُمَّ أَلْعَبُ التِّنِسَ. مَتَى تَنَامِينَ؟ فِي السَّاعَةِ الْعَاشِرَةِ. كَيْفَ تَذْهَبِينَ إِلَى الْمَدْرَسَةِ؟ أَدْرُسُ فِي مَدْرَسَةٍ عَلَى الْإِنْتَرْنِتِ، فَلَا أَذْهَبُ إِلَى أَيِّ مَكَانٍ! مَا مَادَّتُكِ الْمُفَضَّلَةُ؟ الْعَرَبِيَّةُ. لِمَاذَا؟ لِأَنَّهَا لُغَةُ الْقُرْآنِ. إِلَى أَيْنَ سَافَرْتِ آخِرَ مَرَّةٍ؟ إِلَى الْمَغْرِبِ. كَمْ يَوْمًا بَقِيتِ هُنَاكَ؟ عَشَرَةَ أَيَّامٍ. مَاذَا سَتَدْرُسِينَ فِي الْجَامِعَةِ؟ سَأَدْرُسُ الطِّبَّ، إِنْ شَاءَ اللَّهُ.',
    en: 'What is your name? My name is Nūr. Where are you from? I am from Iraq, but I was born in Britain. Where do you live? I live in Manchester. Who lives with you? My parents and my little brother. What do you do after school? I read the Qur’an, then I play tennis. When do you go to sleep? At ten o’clock. How do you get to school? I study at an online school, so I don’t go anywhere! What is your favourite subject? Arabic. Why? Because it is the language of the Qur’an. Where did you travel to last time? To Morocco. How many days did you stay there? Ten days. What will you study at university? I will study medicine, in shāʾ Allāh.',
    find: ['mā + noun', 'mādhā + verb', 'min ayna / ilā ayna', 'limādhā → li-anna'],
    source: 'teacher model on the website interview task',
  },
  selfCheck: [
    { route: 'core', text: 'I chose the word for the missing information.' },
    { route: 'core', text: 'Each answer gives that kind of information.' },
    { route: 'develop', text: 'mā before nouns, mādhā before verbs.' },
    { route: 'develop', text: 'I kept min / ilā in place questions and answers.' },
    { route: 'stretch', text: 'Every why-question has a li-anna answer.' },
  ],
  exit: [
    W(/Question-word Mastery/, 5, { prompt: 'Choose “When will the lesson begin?”', feedback: 'Matā = time.' }),
    W(/Repair lab/, 2, { prompt: 'Which question fits the answer لِأَنَّنِي أُحِبُّ اللُّغَاتِ؟', feedback: 'A reason → limādhā.' }),
    W(/Question-word Mastery/, 8, { prompt: 'Choose the accurate compact question.', feedback: 'Fīma = fī mādhā.' }),
  ],
  mastery: false,
  prep: {
    words: [['كَمْ', 'how many? / how much?', '—'], ['كَمْ كِتَابًا؟', 'how many books?', '—'], ['كَمْ عُمْرُكَ؟', 'how old are you?', '—'], ['كَمْ سَاعَةً؟', 'how many hours?', '—'], ['بِكَمْ؟', 'how much (price)?', '—']],
    questionEn: 'After kam the noun is SINGULAR and ends in -an: kam kitāban? (not kutub). How would you ask “How many brothers do you have?” (akh = brother)',
    questionAr: 'كَمْ ______ عِنْدَكَ؟',
    homework: {
      core: 'Write one question for each of man, mā, mādhā, ayna, matā — with answers.',
      develop: 'Write four questions with kayfa, limādhā, min ayna, ilā ayna — with answers.',
      stretch: 'Website twelve-question interview.',
    },
    wordsSource: 'The five phrases prepare GM-INT-04 (website: how many? — the kam rule).',
  },
  remember: 'Remember: man = who · mā + noun / mādhā + verb = what · ayna = where (min ayna = from where, ilā ayna = to where) · matā = when · kayfa = how · limādhā = why → li-anna … · the answer must give the information the question asks for.',
});

module.exports = { meta, slides };
