'use strict';
/* GM-ADV-02 · Time Frames with Adverbs — website: Mastery & Revision › Grammar › Adverbs › Lesson 2 (the time expression does not replace
 * the tense: verb form, future marker and context work together; past table أَمْسِ · أَوَّلَ أَمْسِ · فِي الْأُسْبُوعِ الْمَاضِي · مُنْذُ سَنَةٍ
 * and past habit كُنْتُ أَدْرُسُ; present now vs habitual — الآنَ · فِي الْوَقْتِ الْحَالِيِّ · كُلَّ يَوْمٍ · مَرَّتَيْنِ فِي الْأُسْبُوعِ; future
 * سَـ · سَوْفَ · لَنْ + subjunctive; IGCSE clarity: سَأُسَافِرُ غَدًا is safer than أُسَافِرُ غَدًا). Quizzes are the website’s (Entry, Past,
 * Present, Future and Three-Time-Frame Mastery); Arabic-in-English feedback lines are rewritten in English. Sorter, timeline table,
 * repair, reading questions, frames and model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__05-adverbs__grammar-mastery-02-time-frames';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-ADV-02', fileTitle: 'Time_Frames_with_Adverbs', title: 'Time Frames with Adverbs', arabic: 'الظُّرُوفُ وَالْأُطُرُ الزَّمَنِيَّةُ',
  focus: 'A time word does not replace the tense — the verb and the time word must match. Past verb + yesterday; present verb + now / every day; sa- or sawfa + present verb + tomorrow; lan + verb for “will not”.',
  icon: 'FaTimeline',
});

const slides = G.gmLesson({
  code: 'GM-ADV-02', site: KEY,
  support: `• Core: match past / present / future verbs with أَمْسِ · الآنَ · غَدًا. Develop: habitual present (كُلَّ يَوْمٍ · مَرَّتَيْنِ فِي الْأُسْبُوعِ) and three time frames in one answer. Stretch: past habit (كُنْتُ أَدْرُسُ), سَوْفَ and future negative لَنْ + subjunctive (لَنْ أَتَأَخَّرَ).
• Website key principle: the time expression does NOT replace the tense. Students often write سَأَدْرُسُ أَمْسِ — use the repair routine.
• Exam value: Cambridge speaking questions switch frames (“What did you do last weekend? What will you do next weekend?”) — this lesson trains that switch.`,
  teach: 'Past, present / habitual, future; tense and time together.',
  wedo: 'Sort by time frame; repair mismatches.',
  next: { nextCode: 'GM-ADV-03', nextTitle: 'Adverb + Noun: Prepositional Phrases', nextAr: 'التَّرَاكِيبُ الظَّرْفِيَّةُ بِالْجَارِّ وَالْمَجْرُورِ' },
  doNow: {
    pick: [0, 1, 2, 3, 5],
    fb: {
      0: 'Past verb + yesterday creates a clear past frame.',
      1: 'Sa- + present verb + tomorrow gives a clear future.',
      2: 'The phrase places the action in the present period.',
      3: 'Future sa- clashes with “yesterday”.',
      5: 'Sa- makes the future explicit and unambiguous.',
    },
    keyIdea: { text: 'The verb and the time word work TOGETHER: past + yesterday, present + now, sa- + verb + tomorrow.', ar: '{k|دَرَسْتُ} أَمْسِ ‖ {e|سَأَدْرُسُ} غَدًا' },
    retrieves: 'The website Entry Check (questions 1–4 and 6) — it uses the time words prepared at the end of GM-ADV-01.',
  },
  objectives: ['Match past, present and future verbs with suitable time expressions.', 'Tell “happening now” from “happens regularly”.', 'Express the future with sa-, sawfa and lan.', 'Move between three time frames in one answer.'],
  routes: {
    core: ['I match yesterday, now and tomorrow to the right verb.', 'I write I will travel tomorrow with sa-.'],
    develop: ['I describe habits with every day / twice a week.', 'I answer in three time frames.'],
    stretch: ['I say I used to … with kuntu + present.', 'I say I will not … with lan.'],
  },
  terms: {
    items: [
      { ar: 'الْمَاضِي', en: 'past', note: 'دَرَسْتُ أَمْسِ' },
      { ar: 'الْمُضَارِعُ', en: 'present (verb form)', note: 'أَدْرُسُ الآنَ' },
      { ar: 'الْمُسْتَقْبَلُ', en: 'future', note: 'سَأَدْرُسُ غَدًا' },
      { ar: 'سَـ · سَوْفَ', en: 'will (future markers)', tr: 'sa- · sawfa', note: 'سَوْفَ نَبْدَأُ' },
      { ar: 'لَنْ', en: 'will not', tr: 'lan', note: 'لَنْ أَتَأَخَّرَ' },
      { ar: 'الْعَادَةُ', en: 'habit, routine', note: 'كُلَّ يَوْمٍ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · past time frame (website table)', title: 'Completed — and used to', ar: 'الزَّمَنُ الْمَاضِي', ltr: true,
      cols: [{ label: 'Expression', w: 3.6, size: 22 }, { label: 'Meaning', w: 3.0 }, { label: 'Model (website)', w: 5.73, size: 22 }],
      rows: [
        { core: true, cells: ['أَمْسِ', 'yesterday', 'لَعِبْتُ كُرَةَ الْقَدَمِ أَمْسِ.'] },
        { core: true, cells: ['أَوَّلَ أَمْسِ', 'the day before yesterday', 'وَصَلَتِ الرِّسَالَةُ أَوَّلَ أَمْسِ.'] },
        { core: true, cells: ['فِي الْأُسْبُوعِ الْمَاضِي', 'last week', 'زُرْنَا الْمَتْحَفَ فِي الْأُسْبُوعِ الْمَاضِي.'] },
        { cells: ['مُنْذُ سَنَةٍ', 'a year ago / for a year', 'انْتَقَلْنَا إِلَى هُنَا مُنْذُ سَنَةٍ.'] },
        { cells: ['كُنْتُ + present verb', 'I used to …', 'كُنْتُ أَدْرُسُ فِي الْمَسَاءِ.'] },
      ],
      foot: 'Past expressions confirm that an event is completed (website). Stretch: kuntu + present verb = a past habit.',
      notes: 'PART 1 (3 min) — website “Past time frame”. Develop / Stretch: كُنْتُ أَدْرُسُ = “I used to study”.',
    },
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 2 · present and habitual time (website)', title: 'Now — or every day?', ar: 'الْحَاضِرُ وَالْعَادَةُ',
      points: [
        'The Arabic present form can mean what is happening NOW or what happens REGULARLY (website).',
        'The time words make the meaning clear: now, currently → happening now.',
        'Every day, twice a week, often, sometimes → a habit.',
        'So the same verb can mean “I study” or “I am studying” (website).',
        'In speaking, add a time phrase to turn a one-word answer into a developed one.',
      ],
      examples: [
        { ar: 'أَكْتُبُ الآنَ.', en: 'I am writing now.', note: 'website · now' },
        { ar: 'فِي الْوَقْتِ الْحَالِيِّ أَعْمَلُ مِنَ الْمَنْزِلِ.', en: 'Currently I work from home.', note: 'website · now' },
        { ar: 'أَذْهَبُ إِلَى الْمَدْرَسَةِ كُلَّ يَوْمٍ.', en: 'I go to school every day.', note: 'website · habit' },
        { ar: 'أَتَدَرَّبُ مَرَّتَيْنِ فِي الْأُسْبُوعِ.', en: 'I train twice a week.', note: 'website · habit' },
      ],
      notes: 'PART 2 (3 min) — website “Present and habitual time”.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · future time frame (website table) · Develop / Stretch', title: 'Will — and will not', ar: 'زَمَنُ الْمُسْتَقْبَلِ', ltr: true,
      cols: [{ label: 'Pattern', w: 3.6 }, { label: 'Use (website)', w: 3.8 }, { label: 'Example (website)', w: 4.93, size: 24 }],
      rows: [
        { core: true, cells: ['sa- + present verb', 'common, near or neutral future', 'سَأُسَافِرُ غَدًا.'] },
        { core: true, cells: ['sawfa + present verb', 'separate, formal or emphatic future', 'سَوْفَ نَبْدَأُ قَرِيبًا.'] },
        { cells: ['lan + present verb (-a ending)', 'future negative: will not', 'لَنْ أَتَأَخَّرَ غَدًا.'] },
        { cells: ['present verb + future time', 'possible for a plan, less explicit', 'أُسَافِرُ غَدًا.'] },
      ],
      foot: 'Website IGCSE clarity: “usāfiru ghadan” can be natural for a plan, but “sa-usāfiru ghadan” is clearer and safer in the exam.',
      notes: 'PART 3 (3 min) — website “Future time frame”. Stretch: after lan, the verb ends in fatḥa (atakhkhara), never ḍamma.',
    },
  ],
  quick: [
    W(/Past Check/, 0, { feedback: 'Yesterday provides past context.' }),
    W(/Present Check/, 0, { feedback: 'Present verb + now gives a current action.' }),
    W(/Future Check/, 0, { feedback: 'Sa- + present verb + soon gives a clear future.' }),
    W(/Future Check/, 2, { feedback: 'Lan + verb ending in -a negates the future.' }),
  ],
  quickNote: 'website Past, Present and Future checks.',
  ido: {
    title: 'Watch me move through three time frames',
    steps: [
      { head: 'Past', ar: 'أَمْسِ دَرَسْتُ', think: 'Past verb + yesterday.' },
      { head: 'Present', ar: 'الْيَوْمَ أُرَاجِعُ', think: 'Present verb + today.' },
      { head: 'Future', ar: 'غَدًا سَأَكْتُبُ', think: 'sa- + verb + tomorrow.' },
      { head: 'Negative', ar: 'لَنْ أَتَأَخَّرَ', think: 'lan + -a.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'TIME WORD', e: 'MATCHING VERB' },
    model: '{k|أَمْسِ} {e|دَرَسْتُ} فِي الْمَكْتَبَةِ. {k|الْيَوْمَ} {e|أُرَاجِعُ} فِي الْبَيْتِ، وَ{k|غَدًا} {e|سَأَكْتُبُ} الْمَشْرُوعَ.',
    modelEn: 'Yesterday I studied in the library. Today I am revising at home, and tomorrow I will write the project.',
    notes: 'This is the website reading timeline. Draw three columns (past / present / future) and place each verb with its time word.',
  },
  models: [
    { ar: 'زُرْنَا الْمَتْحَفَ فِي الْأُسْبُوعِ الْمَاضِي.', en: 'We visited the museum last week.', tip: 'Website: past period.' },
    { ar: 'أَقْرَأُ غَالِبًا قَبْلَ النَّوْمِ.', en: 'I often read before sleeping.', tip: 'Website: habit.' },
    { ar: 'سَأَدْرُسُ فِي الْخَارِجِ فِي السَّنَةِ الْقَادِمَةِ.', en: 'I will study abroad next year.', tip: 'Website game: future period.' },
    { ar: 'لَنْ أَنْسَى الْمَوْعِدَ غَدًا.', en: 'I will not forget the appointment tomorrow.', tip: 'Website: future negative.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · which time frame?', title: 'Past, present or future?', ar: 'مَاضٍ أَمْ حَاضِرٌ أَمْ مُسْتَقْبَلٌ؟',
      categories: ['Past', 'Present / habit', 'Future'],
      items: [['أَمْسِ', 0], ['الآنَ', 1], ['غَدًا', 2], ['فِي الْأُسْبُوعِ الْمَاضِي', 0], ['كُلَّ يَوْمٍ', 1], ['فِي السَّنَةِ الْقَادِمَةِ', 2], ['أَوَّلَ أَمْسِ', 0], ['فِي الْوَقْتِ الْحَالِيِّ', 1], ['بَعْدَ غَدٍ', 2]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min) — website “listening switch” as a sort: students type PAST, NOW or FUTURE, then say one verb that matches.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'We do · tense–time repair (website) · say it aloud', title: 'Fix the mismatch — two ways', ar: 'أَصْلِحِ التَّعَارُضَ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Mismatch', w: 3.8, size: 22 }, { label: 'Fix the verb', w: 4.2, size: 22 }, { label: 'Fix the time word', w: 4.33, size: 22 }],
      rows: [
        { core: true, cells: ['زُرْتُهُ غَدًا.', 'سَأَزُورُهُ غَدًا.', 'زُرْتُهُ أَمْسِ.'] },
        { core: true, cells: ['سَأَكْتُبُ الرِّسَالَةَ أَمْسِ.', 'كَتَبْتُ الرِّسَالَةَ أَمْسِ.', 'سَأَكْتُبُ الرِّسَالَةَ غَدًا.'] },
        { core: true, cells: ['سَافَرْنَا الْأُسْبُوعَ الْقَادِمَ.', 'سَنُسَافِرُ الْأُسْبُوعَ الْقَادِمَ.', 'سَافَرْنَا الْأُسْبُوعَ الْمَاضِيَ.'] },
        { cells: ['أَدْرُسُ أَمْسِ.', 'دَرَسْتُ أَمْسِ.', 'أَدْرُسُ الآنَ.'] },
      ],
      foot: 'Website: repair EITHER the verb OR the time expression — it depends on what you meant.',
      notes: 'WE DO (2 min) — website “tense-time repair”. Cover columns 2–3; students offer both repairs.',
    },
  ],
  mistakes: [
    { wrong: 'سَأُشَاهِدُ الْفِيلْمَ أَمْسِ.', right: 'شَاهَدْتُ الْفِيلْمَ أَمْسِ.', why: 'Yesterday needs a past verb.' },
    { wrong: 'لَنْ أَتَأَخَّرُ غَدًا.', right: 'لَنْ أَتَأَخَّرَ غَدًا.', why: 'After lan the verb ends in -a (Stretch).' },
    { wrong: 'كَتَبْتُ الآنَ.', right: 'أَكْتُبُ الآنَ.', why: 'Now needs a present verb.' },
  ],
  hints: ['Past verb for yesterday?', 'What follows lan?', 'Which verb for now?'],
  practice: [
    W(/Mastery/, 2, { feedback: 'The phrase signals a repeated routine.' }),
    W(/Mastery/, 4, { feedback: 'Lan + present form ending in -a.' }),
    W(/Mastery/, 5, { feedback: 'Until now: from earlier time up to the present.' }),
    W(/Mastery/, 7),
  ],
  practiceLabel: 'website three-time-frame mastery questions 3, 5, 6 and 8',
  read: {
    title: 'Past, present, future', label: 'website reading timeline, extended by the teacher',
    text: 'أَمْسِ دَرَسْتُ فِي الْمَكْتَبَةِ. الْيَوْمَ أُرَاجِعُ فِي الْبَيْتِ، وَغَدًا سَأَكْتُبُ الْمَشْرُوعَ. كُنْتُ أَدْرُسُ فِي الْمَسَاءِ، وَلَكِنِّي الْآنَ أَدْرُسُ فِي الصَّبَاحِ كُلَّ يَوْمٍ. فِي الْأُسْبُوعِ الْقَادِمِ سَأُقَدِّمُ الِاخْتِبَارَ، وَلَنْ أَتَأَخَّرَ.',
    glossary: [['أُرَاجِعُ', 'I revise'], ['الْمَشْرُوعَ', 'the project'], ['كُنْتُ أَدْرُسُ', 'I used to study'], ['لَكِنِّي', 'but I'], ['سَأُقَدِّمُ الِاخْتِبَارَ', 'I will sit the exam'], ['لَنْ أَتَأَخَّرَ', 'I will not be late']],
    task: 'Website: build a three-column timeline and copy each verb with its time expression.',
    questions: [
      q('Where did the writer study yesterday?', ['in the library', 'at home', 'at school'], 'أَمْسِ دَرَسْتُ فِي الْمَكْتَبَةِ.'),
      q('When does the writer study now?', ['in the morning every day', 'in the evening', 'never'], 'الْآنَ أَدْرُسُ فِي الصَّبَاحِ كُلَّ يَوْمٍ.'),
      q('What does كُنْتُ أَدْرُسُ express?', ['a past habit', 'a future plan', 'a present action'], 'kuntu + present = used to.'),
      q('Which phrase is a future negative?', ['لَنْ أَتَأَخَّرَ', 'سَأُقَدِّمُ', 'أُرَاجِعُ'], 'lan + verb.'),
    ],
    qNote: 'The first two sentences are the website text; the rest is teacher-written. Questions teacher-written.',
  },
  speak: {
    title: 'Topic conversation: last, usually, next', source: 'website topic conversation',
    prompts: [
      { route: 'core', ar: 'مَاذَا فَعَلْتَ فِي عُطْلَةِ نِهَايَةِ الْأُسْبُوعِ الْمَاضِيَةِ؟' },
      { route: 'develop', ar: 'مَاذَا تَفْعَلُ عَادَةً بَعْدَ الْمَدْرَسَةِ؟' },
      { route: 'stretch', ar: 'مَاذَا سَتَفْعَلُ فِي عُطْلَةِ نِهَايَةِ الْأُسْبُوعِ الْقَادِمَةِ؟ وَمَاذَا لَنْ تَفْعَلَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'فِي الْأُسْبُوعِ الْمَاضِي ______ .' },
      { route: 'develop', ar: 'عَادَةً ______ بَعْدَ الْمَدْرَسَةِ.' },
      { route: 'stretch', ar: 'غَدًا ______ ، وَلَنْ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَاذَا فَعَلْتِ فِي الْأُسْبُوعِ الْمَاضِي؟', en: 'What did you do last week? (to a girl)' },
      { who: 'B', ar: 'زُرْتُ جَدَّتِي. عَادَةً أَزُورُهَا كُلَّ شَهْرٍ، وَفِي الْأُسْبُوعِ الْقَادِمِ سَنَذْهَبُ مَعًا إِلَى السُّوقِ.', en: 'I visited my grandmother. I usually visit her every month, and next week we will go to the market together.' },
    ],
    notes: 'Website: answer the three questions with two developed sentences each. Listen for verb–time matching in each frame.',
  },
  write: {
    siteTask: 'Write 100–120 words about your learning, leisure or travel: a completed past event, a present routine and at least two future plans.',
    core: { amount: '6 sentences', task: 'Two past, two present, two future sentences.', how: 'yesterday / now / tomorrow + matching verb.' },
    develop: { amount: '8 sentences', task: 'Add habits and longer time phrases.', how: 'every day, last week, next year.' },
    stretch: { amount: '100–120 words', task: 'Website paragraph with a past habit and a future negative.', how: 'kuntu + verb · lan + verb (-a).' },
  },
  frames: {
    core: [
      { en: 'Yesterday I …', ar: 'أَمْسِ ______ .' },
      { en: 'Now I am …', ar: 'الْآنَ ______ .' },
      { en: 'Tomorrow I will …', ar: 'غَدًا ______ .' },
      { en: 'Every day I …', ar: 'كُلَّ يَوْمٍ ______ .' },
    ],
    develop: [
      { en: 'Last week we …', ar: 'فِي الْأُسْبُوعِ الْمَاضِي ______ .' },
      { en: 'Currently I live …', ar: 'فِي الْوَقْتِ الْحَالِيِّ أَسْكُنُ ______ .' },
      { en: 'Next year I will …', ar: 'فِي السَّنَةِ الْقَادِمَةِ ______ .' },
      { en: 'I will not … tomorrow.', ar: 'لَنْ ______ غَدًا.' },
    ],
    bank: ['أَمْسِ', 'أَوَّلَ أَمْسِ', 'الْآنَ', 'كُلَّ يَوْمٍ', 'عَادَةً', 'غَدًا', 'بَعْدَ غَدٍ', 'قَرِيبًا', 'سَـ', 'سَوْفَ', 'لَنْ', 'كُنْتُ'],
  },
  stretchTask: {
    task: 'Website paragraph: 100–120 words about your learning, leisure or travel across three time frames.',
    checklist: ['Three past time expressions with past verbs.', 'Three present / habitual expressions with present verbs.', 'Three future expressions with sa- or sawfa.', 'One past habit with kuntu + present verb.', 'One future negative with lan (verb ending in -a).'],
    phrases: [['فِي الْعُطْلَةِ الْمَاضِيَةِ', 'last holiday'], ['كُنْتُ أَلْعَبُ', 'I used to play'], ['عَادَةً', 'usually'], ['مَرَّتَيْنِ فِي الْأُسْبُوعِ', 'twice a week'], ['فِي الْمُسْتَقْبَلِ', 'in the future'], ['لَنْ أَنْسَى', 'I will not forget']],
  },
  model: {
    text: 'عِنْدَمَا كُنْتُ صَغِيرًا، كُنْتُ أَلْعَبُ كُرَةَ الْقَدَمِ كُلَّ يَوْمٍ. فِي الصَّيْفِ الْمَاضِي سَافَرْتُ إِلَى الْمَغْرِبِ وَزُرْتُ مُدُنًا جَمِيلَةً. فِي الْوَقْتِ الْحَالِيِّ أَدْرُسُ كَثِيرًا لِأَنَّ الِاخْتِبَارَاتِ قَرِيبَةٌ، وَأَتَدَرَّبُ مَرَّتَيْنِ فِي الْأُسْبُوعِ فَقَطْ. فِي الْعُطْلَةِ الْقَادِمَةِ سَأَزُورُ جَدِّي، وَسَوْفَ أَتَعَلَّمُ السِّبَاحَةَ. لَنْ أُضَيِّعَ وَقْتِي!',
    en: 'When I was little, I used to play football every day. Last summer I travelled to Morocco and visited beautiful cities. Currently I study a lot because the exams are near, and I train only twice a week. Next holiday I will visit my grandfather, and I will learn to swim. I will not waste my time!',
    find: ['past habit', 'completed past', 'present / habit', 'future + negative'],
    source: 'teacher model on the website paragraph task',
  },
  selfCheck: [
    { route: 'core', text: 'Every time word matches its verb.' },
    { route: 'core', text: 'My future verbs have sa- or sawfa.' },
    { route: 'develop', text: 'I used habit phrases with present verbs.' },
    { route: 'develop', text: 'My answer moves through three time frames.' },
    { route: 'stretch', text: 'I used kuntu + verb and lan + verb (-a).' },
  ],
  exit: [
    W(/Mastery/, 0, { feedback: 'Past verb agrees with yesterday.' }),
    W(/Mastery/, 1, { feedback: 'Present verb + now.' }),
    W(/Mastery/, 3, { feedback: 'Future marker and future adverb match.' }),
  ],
  mastery: false,
  prep: {
    words: [['بِـ', 'with, by', 'بِسُرْعَةٍ = quickly'], ['بِسُرْعَةٍ', 'quickly', '—'], ['بِهُدُوءٍ', 'calmly', '—'], ['فِي الْبَيْتِ', 'at home', '—'], ['فِي الصَّبَاحِ', 'in the morning', '—']],
    questionEn: 'Bi-surʿatin literally means “with speed”. What do you think bi-hudūʾin and bi-ʿināyatin mean?',
    questionAr: 'بِسُرْعَةٍ = quickly · بِهُدُوءٍ = ______',
    homework: {
      core: 'Write six sentences: two past, two present, two future.',
      develop: 'Answer the three topic-conversation questions in writing.',
      stretch: 'Website paragraph (100–120 words) with kuntu and lan.',
    },
    wordsSource: 'The five words prepare GM-ADV-03 (website Adverbs lesson 3: prepositional phrases).',
  },
  remember: 'Remember: the time word does not replace the tense · past + yesterday · present + now / every day · sa- / sawfa + verb + tomorrow · lan + verb (-a) = will not.',
});

module.exports = { meta, slides };
