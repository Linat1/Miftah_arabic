'use strict';
/* GM-CP-05 · Clause Linkers and Paragraph Cohesion — website: Mastery & Revision › Grammar › Conjunctions and Prepositions › Lesson 5
 * (content clauses with anna after aʿtaqidu, aẓunnu, aʿrifu, min al-wāḍiḥ — the subject after anna is accusative; ammā … fa- topic
 * frame; ḥaythu = where (not “whereas”); illā = except; baynamā = whereas / while; time clauses baʿdamā / baʿda an + past, qabla an +
 * subjunctive, mundhu an; paragraph jobs and signals; Cambridge Paper 4: range and accuracy across the response, not a connector
 * checklist; clinic). Quizzes are the website’s (Entry, Content Clause, Specific Link, Time Clause, Final Mastery) plus the website game;
 * items whose options carry “only”, “as house form” or unvowelled notes are skipped. Sorter, I-do, frames, reading and model are
 * teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__08-conjunctions-prepositions__grammar-mastery-05-clause-linkers-cohesion';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-CP-05', fileTitle: 'Clause_Linkers_Cohesion', title: 'Clause Linkers and Paragraph Cohesion', arabic: 'رَوَابِطُ الْجُمَلِ وَتَمَاسُكُ الْفِقْرَةِ',
  focus: 'Build a paragraph, not a list: aʿtaqidu anna (I think that), ammā … fa- (as for … ), baynamā (whereas), illā (except), baʿdamā / qabla an (after / before). Each link must do a real job.',
  icon: 'FaDiagramProject',
});

const slides = G.gmLesson({
  code: 'GM-CP-05', site: KEY,
  support: `• Core: أَعْتَقِدُ أَنَّ + opinion, and time clauses بَعْدَمَا + past, قَبْلَ أَنْ + subjunctive, مُنْذُ أَنْ. Develop: أَمَّا … فَـ (topic shift), حَيْثُ (where), إِلَّا (except), بَيْنَمَا (whereas). Stretch: plan a 130–140-word paragraph with five paragraph jobs (view, reason, contrast, development, result).
• Website (Cambridge Paper 4): there are no automatic marks for “advanced” linkers. One accurate complex sentence beats several memorised linkers placed unnaturally.
• Website translation correction: ḥaythu = where (in the place where) — use baynamā for “whereas”.`,
  teach: 'anna clauses; ammā … fa-, ḥaythu, illā, baynamā; time clauses; paragraph jobs.',
  wedo: 'Choose the clause linker; sort paragraph jobs; repair.',
  next: { nextCode: 'GM-NUM-01', nextTitle: 'Numbers', nextAr: 'الْأَرْقَامُ' },
  doNow: {
    pick: [0, 1, 3, 4, 5],
    fb: { 0: 'Anna introduces the content of the belief.', 1: 'Ammā introduces a topic and fa- the comment.', 2: 'Qabla an + subjunctive is the formal form.', 3: 'Mundhu an introduces a starting action.', 4: 'Range and accuracy are judged across the whole answer.' },
    keyIdea: { text: 'Every link has a job: view (anna), topic (ammā … fa-), contrast (baynamā), exception (illā), time (baʿdamā, qabla an).', ar: 'أَعْتَقِدُ {k|أَنَّ} … ‖ {e|أَمَّا} … {e|فَـ} …' },
    retrieves: 'The website Entry Check (questions 1, 2, 4, 5 and 6) — the GM-CP-04 prep words ʿindamā, qabla an, baʿda an, baynamā.',
  },
  objectives: ['Give an opinion with aʿtaqidu anna.', 'Shift topic with ammā … fa-.', 'Use ḥaythu, illā and baynamā correctly.', 'Link actions in time with baʿdamā, qabla an and mundhu an.'],
  routes: {
    core: ['I give my opinion with aʿtaqidu anna.', 'I say after I … and before I …'],
    develop: ['I use ammā … fa- with both halves.', 'I use baynamā for “whereas”.'],
    stretch: ['I plan five paragraph jobs before writing.', 'I write 130–140 linked words.'],
  },
  terms: {
    items: [
      { ar: 'التَّمَاسُكُ', en: 'cohesion', note: 'رَوَابِطُ الْفِقْرَةِ' },
      { ar: 'أَنَّ', en: 'that (+ noun / pronoun)', note: 'أَعْتَقِدُ أَنَّ' },
      { ar: 'أَمَّا … فَـ', en: 'as for … (then)', note: 'أَمَّا الْقِطَارُ فَهُوَ' },
      { ar: 'بَيْنَمَا', en: 'whereas / while', note: 'بَيْنَمَا يُفَضِّلُ أَخِي' },
      { ar: 'إِلَّا', en: 'except', note: 'كُلَّ الْمَوَادِّ إِلَّا' },
      { ar: 'حَيْثُ', en: 'where (place)', note: 'حَيْثُ تُوجَدُ الْخِدْمَاتُ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · content clauses with anna (website table)', title: 'I think that …', ar: 'أَعْتَقِدُ أَنَّ', ltr: true,
      cols: [{ label: 'Frame', w: 3.0, size: 22 }, { label: 'Model (website)', w: 6.2, size: 22 }, { label: 'Meaning', w: 3.13 }],
      rows: [
        { core: true, cells: ['أَعْتَقِدُ أَنَّ', 'أَعْتَقِدُ أَنَّ التَّعَلُّمَ عَنْ بُعْدٍ مُفِيدٌ.', 'I think that …'] },
        { core: true, cells: ['أَظُنُّ أَنَّ', 'أَظُنُّ أَنَّ الطَّقْسَ سَيَتَحَسَّنُ.', 'I suppose that …'] },
        { cells: ['أَعْرِفُ أَنَّ', 'أَعْرِفُ أَنَّ الِامْتِحَانَ صَعْبٌ.', 'I know that …'] },
        { cells: ['ذَكَرَ أَنَّ', 'ذَكَرَ الْكَاتِبُ أَنَّ التِّقْنِيَّةَ مُهِمَّةٌ.', 'The writer stated that …'] },
        { cells: ['مِنَ الْوَاضِحِ أَنَّ', 'مِنَ الْوَاضِحِ أَنَّ الْخِدْمَةَ تَحَسَّنَتْ.', 'It is clear that …'] },
      ],
      foot: 'Website: in fully marked models the subject after anna is accusative — anna ṭ-ṭaqsa, anna d-dirāsata. With a pronoun: annahu, annanī. Full inna-family analysis comes in GM-NVS.',
      notes: 'PART 1 (3 min) — website “Content clauses with anna”. Qāla takes inna (not anna) — a Stretch note.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 2 · specific links (website table)', title: 'Each link has its own job', ar: 'أَمَّا · حَيْثُ · إِلَّا · بَيْنَمَا', ltr: true,
      cols: [{ label: 'Structure', w: 2.6, size: 24 }, { label: 'Function', w: 3.3 }, { label: 'Model (website)', w: 6.43, size: 22 }],
      rows: [
        { core: true, cells: ['أَمَّا … فَـ', 'introduce a topic, then comment', 'أَمَّا الْقِطَارُ فَهُوَ أَسْرَعُ.'] },
        { cells: ['حَيْثُ', 'where / in the place where', 'أُفَضِّلُ السَّكَنَ حَيْثُ تُوجَدُ الْخِدْمَاتُ.'] },
        { core: true, cells: ['إِلَّا', 'except', 'أُحِبُّ كُلَّ الْمَوَادِّ إِلَّا الرِّيَاضِيَّاتِ.'] },
        { core: true, cells: ['بَيْنَمَا', 'whereas / while', 'أُفَضِّلُ الْمَدِينَةَ، بَيْنَمَا يُفَضِّلُ أَخِي الرِّيفَ.'] },
      ],
      foot: 'Website: ammā … fa- is a pair — never leave out the fa-. Ḥaythu means “where”; do not use it for English “whereas” — baynamā is the clearer contrast linker.',
      notes: 'PART 2 (3 min) — website “Specific links”.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 3 · time clauses (website table) · Develop / Stretch', title: 'After, before, since — with a verb', ar: 'رَوَابِطُ الزَّمَنِ', ltr: true,
      cols: [{ label: 'Linker', w: 2.6, size: 24 }, { label: 'Core use', w: 3.6 }, { label: 'Model (website)', w: 6.13, size: 22 }],
      rows: [
        { core: true, cells: ['بَعْدَمَا', '+ past: after an action was done', 'بَعْدَمَا أَنْهَيْتُ وَاجِبِي، خَرَجْتُ.'] },
        { cells: ['بَعْدَ أَنْ', '+ verb: after doing', 'خَرَجْتُ بَعْدَ أَنْ أَنْهَيْتُ وَاجِبِي.'] },
        { core: true, cells: ['قَبْلَ أَنْ', '+ subjunctive: before doing', 'رَاجِعْ عَمَلَكَ قَبْلَ أَنْ تُسَلِّمَهُ.'] },
        { cells: ['مُنْذُ', '+ noun: since / for', 'أَعْمَلُ هُنَا مُنْذُ عَامٍ.'] },
        { core: true, cells: ['مُنْذُ أَنْ', '+ past: since an action began', 'تَحَسَّنَتْ لُغَتِي مُنْذُ أَنْ بَدَأْتُ التَّدَرُّبَ.'] },
      ],
      foot: 'Website house form: use baʿdamā / baʿda an and qabla an in formal writing (not spoken qabl mā). After qabla an the verb is subjunctive: qabla an adhhaba (GM-V-10).',
      notes: 'PART 3 (3 min) — website “Time clauses”. Compare GM-CP-02: qabla d-dars (noun) vs qabla an adrusa (verb).',
    },
  ],
  quick: [
    W(/Content Clause/, 0, { prompt: 'I believe that sport is important.', feedback: 'Anna introduces the content of the belief.' }),
    W(/Content Clause/, 3, { prompt: 'Choose the fully marked form.', feedback: 'The subject after anna is accusative.' }),
    W(/Specific Link/, 0, { prompt: 'As for online learning, it is flexible.', feedback: 'Ammā … fa- organises a topic and comment.' }),
    W(/Specific Link/, 3, { prompt: 'I prefer the city, whereas my brother prefers the countryside.', feedback: 'Baynamā expresses the contrast.' }),
  ],
  quickNote: 'website Content Clause and Specific Link checks.',
  ido: {
    title: 'Watch me build a paragraph, job by job',
    steps: [
      { head: 'View', ar: 'أَعْتَقِدُ أَنَّ', think: 'My opinion.' },
      { head: 'Reason', ar: 'لِأَنَّهُ', think: 'Why?' },
      { head: 'Topic shift + contrast', ar: 'أَمَّا … فَـ · وَلَكِنَّهُ', think: 'Plane: fast but costly.' },
      { head: 'Result', ar: 'لِذَلِكَ', think: 'So I prefer the train.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'VIEW · RESULT', e: 'TOPIC · CONTRAST' },
    model: '{k|أَعْتَقِدُ أَنَّ} السَّفَرَ مُفِيدٌ {k|لِأَنَّهُ} يُعَرِّفُنَا بِثَقَافَاتٍ جَدِيدَةٍ. {e|أَمَّا} السَّفَرُ بِالطَّائِرَةِ {e|فَهُوَ} سَرِيعٌ، {e|وَلَكِنَّهُ} مُكْلِفٌ. {k|لِذَلِكَ} أُفَضِّلُ الْقِطَارَ عِنْدَمَا يَكُونُ ذَلِكَ مُمْكِنًا.',
    modelEn: 'I believe that travel is useful because it introduces us to new cultures. As for travelling by plane, it is fast, but it is expensive. So I prefer the train when that is possible.',
    notes: 'Website “Build a cohesive paragraph” model.',
  },
  models: [
    { ar: 'بَعْدَمَا وَصَلْنَا إِلَى الْمَدِينَةِ، ذَهَبْنَا إِلَى الْفُنْدُقِ.', en: 'After we arrived in the city, we went to the hotel.', tip: 'Website.' },
    { ar: 'ثُمَّ خَرَجْنَا حَيْثُ تُوجَدُ الْمَطَاعِمُ الشَّهِيرَةُ.', en: 'Then we went out to where the famous restaurants are.', tip: 'ḥaythu = where.' },
    { ar: 'آكُلُ كُلَّ الْفَوَاكِهِ إِلَّا الْمَوْزَ.', en: 'I eat all fruit except bananas.', tip: 'illā.' },
    { ar: 'رَاجِعِ الْإِجَابَةَ قَبْلَ أَنْ تُسَلِّمَهَا.', en: 'Check the answer before you hand it in.', tip: 'qabla an + subj.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · make the relationship precise (website game)', title: 'Which clause linker?', ar: 'اِخْتَرِ الرَّابِطَ الْمُنَاسِبَ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Sentence', w: 6.0, size: 22 }, { label: 'Linker', w: 2.6, size: 24 }, { label: 'Job', w: 3.73 }],
      rows: [
        { core: true, cells: ['أَعْتَقِدُ … الدِّرَاسَةَ مُفِيدَةٌ.', 'أَنَّ', 'content of a belief'] },
        { core: true, cells: ['… الْقِطَارُ … هُوَ مُرِيحٌ.', 'أَمَّا … فَـ', 'topic + comment'] },
        { cells: ['أَسْكُنُ … تَتَوَفَّرُ الْخِدْمَاتُ.', 'حَيْثُ', 'place'] },
        { core: true, cells: ['أُحِبُّ كُلَّ الْمَوَادِّ … الرِّيَاضِيَّاتِ.', 'إِلَّا', 'exception'] },
        { cells: ['… أَنْهَيْتُ وَاجِبِي، خَرَجْتُ.', 'بَعْدَمَا', 'after (completed)'] },
        { cells: ['رَاجِعْ عَمَلَكَ … تُسَلِّمَهُ.', 'قَبْلَ أَنْ', 'before (subjunctive)'] },
      ],
      foot: 'Website game: choose the clause linker that makes the paragraph relationship precise.',
      notes: 'WE DO (3 min) — website game items. Cover column 2.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · paragraph jobs (website table)', title: 'What job does each signal do?', ar: 'وَظِيفَةُ الرَّابِطِ',
      categories: ['View / reason', 'Contrast / balance', 'Development / result'],
      items: [['أَعْتَقِدُ أَنَّ', 0], ['مِنْ وَجْهَةِ نَظَرِي', 0], ['بِسَبَبِ', 0], ['بَيْنَمَا', 1], ['عَلَى الرَّغْمِ مِنْ ذَلِكَ', 1], ['بِالْإِضَافَةِ إِلَى ذَلِكَ', 2], ['لِذَلِكَ', 2], ['وَمِنْ ثَمَّ', 2]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min) — website “Build a cohesive paragraph” signal table. Students type 1, 2 or 3.',
    },
  ],
  mistakes: [
    { wrong: 'أَعْتَقِدُ لِأَنَّ التَّعَلُّمُ مُهِمٌّ', right: 'أَعْتَقِدُ أَنَّ التَّعَلُّمَ مُهِمٌّ', why: 'Belief content uses anna, with an accusative subject (website clinic).' },
    { wrong: 'أَمَّا الْقِطَارُ هُوَ سَرِيعٌ', right: 'أَمَّا الْقِطَارُ فَهُوَ سَرِيعٌ', why: 'Ammā pairs with fa- (website clinic).' },
    { wrong: 'أُفَضِّلُ الْمَدِينَةَ حَيْثُ أَخِي يُفَضِّلُ الرِّيفَ', right: 'أُفَضِّلُ الْمَدِينَةَ، بَيْنَمَا يُفَضِّلُ أَخِي الرِّيفَ', why: 'Contrast is baynamā, not ḥaythu (website clinic).' },
  ],
  hints: ['Because or that?', 'Where is the fa-?', 'Place or contrast?'],
  practice: [
    W(/Content Clause/, 1, { prompt: 'It is clear that prices increased.', feedback: 'Min al-wāḍiḥ anna is a useful formal frame.' }),
    W(/Specific Link/, 2, { prompt: 'I eat all fruit except bananas.', feedback: 'Illā introduces the exception.' }),
    W(/Time Clause/, 1, { prompt: 'Check the answer before you submit it.', feedback: 'Qabla an + subjunctive.' }),
    W(/Time Clause/, 3, { prompt: 'Formal form for “before I leave”.', feedback: 'Qabla an + subjunctive is the formal target.' }),
  ],
  practiceLabel: 'website Content Clause, Specific Link and Time Clause checks',
  read: {
    title: 'Holidays at home or abroad?', label: 'website skills workshop (teacher-written paragraph)',
    text: 'أَعْتَقِدُ أَنَّ الْعُطْلَةَ ضَرُورِيَّةٌ لِلرَّاحَةِ. بَعْضُ النَّاسِ يُسَافِرُونَ إِلَى الْخَارِجِ، بَيْنَمَا يَبْقَى آخَرُونَ فِي بِلَادِهِمْ. أَمَّا أُسْرَتِي فَتُفَضِّلُ الرِّيفَ، حَيْثُ الْهَوَاءُ نَقِيٌّ وَالْحَيَاةُ هَادِئَةٌ. نَحْجِزُ كُلَّ شَيْءٍ قَبْلَ أَنْ نُسَافِرَ بِشَهْرٍ، وَبَعْدَمَا نَصِلُ نُطْفِئُ الْهَوَاتِفَ إِلَّا هَاتِفَ أَبِي. مُنْذُ أَنْ بَدَأْنَا هَذِهِ الْعَادَةَ، أَصْبَحَتْ عُطْلَاتُنَا أَجْمَلَ، لِذَلِكَ لَنْ نُغَيِّرَهَا.',
    glossary: [['ضَرُورِيَّةٌ', 'necessary'], ['نَقِيٌّ', 'pure / clean'], ['نَحْجِزُ', 'we book'], ['نُطْفِئُ', 'we switch off'], ['الْعَادَةَ', 'the habit']],
    task: 'Website: label each connector by function, then reconstruct the paragraph plan (view, contrast, topic, time, result).',
    questions: [
      q('Which linker shows a contrast between two groups?', ['بَيْنَمَا', 'حَيْثُ', 'إِلَّا'], 'Some travel abroad, whereas others stay.'),
      q('Why does the family prefer the countryside?', ['the air is clean and life is calm', 'it is cheap', 'it is near'], 'Ḥaythu l-hawāʾu naqiyy.'),
      q('Whose phone stays on?', ['the father’s', 'the writer’s', 'nobody’s'], 'Illā hātifa abī.'),
      q('When do they book?', ['a month before they travel', 'after they arrive', 'on the day'], 'Qabla an nusāfira bi-shahr.'),
    ],
    qNote: 'Teacher-written paragraph for the website skills workshop; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: one extended, linked answer', source: 'website skills workshop',
    prompts: [
      { route: 'core', ar: 'مَا رَأْيُكَ فِي التَّعَلُّمِ عَنْ بُعْدٍ؟' },
      { route: 'develop', ar: 'مَاذَا تَفْعَلُ قَبْلَ أَنْ تَنَامَ، وَبَعْدَمَا تَسْتَيْقِظُ؟' },
      { route: 'stretch', ar: 'قَارِنْ بَيْنَ السَّكَنِ فِي الْمَدِينَةِ وَالسَّكَنِ فِي الرِّيفِ.' },
    ],
    stems: [
      { route: 'core', ar: 'أَعْتَقِدُ أَنَّ ______ لِأَنَّ ______ .' },
      { route: 'develop', ar: 'قَبْلَ أَنْ أَنَامَ ______ ، وَبَعْدَمَا أَسْتَيْقِظُ ______ .' },
      { route: 'stretch', ar: 'أَمَّا الْمَدِينَةُ فَهِيَ ______ ، بَيْنَمَا الرِّيفُ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَا رَأْيُكِ فِي الْمُوَاصَلَاتِ فِي مَدِينَتِكِ؟', en: 'What do you think of the transport in your city? (to a girl)' },
      { who: 'B', ar: 'أَعْتَقِدُ أَنَّهَا جَيِّدَةٌ. أَمَّا الْحَافِلَاتُ فَهِيَ رَخِيصَةٌ، بَيْنَمَا الْقِطَارُ أَسْرَعُ. مُنْذُ أَنْ فُتِحَ خَطٌّ جَدِيدٌ، أَصِلُ إِلَى الْمَدْرَسَةِ فِي عِشْرِينَ دَقِيقَةً.', en: 'I think it is good. As for the buses, they are cheap, whereas the train is faster. Since a new line opened, I get to school in twenty minutes.' },
    ],
    notes: 'Website: extend spoken answers with precise links — view, topic shift, contrast, time.',
  },
  write: {
    siteTask: 'Write 130–140 Arabic words on one topic: online learning, transport, holidays, technology or the environment. Organise the response into a clear sequence of ideas rather than a list of sentences.',
    core: { amount: '6 sentences', task: 'My view on one topic with a reason.', how: 'aʿtaqidu anna · li-anna · baʿdamā.' },
    develop: { amount: '9 sentences', task: 'Add a topic shift and a contrast.', how: 'ammā … fa- · baynamā · illā.' },
    stretch: { amount: '130–140 words', task: 'Website task with five planned paragraph jobs.', how: 'Label every connector by function.' },
  },
  frames: {
    core: [
      { en: 'I think that … because …', ar: 'أَعْتَقِدُ أَنَّ ______ لِأَنَّ ______ .' },
      { en: 'After I finished …, I …', ar: 'بَعْدَمَا أَنْهَيْتُ ______ ، ______ .' },
      { en: 'Before I travel, I …', ar: 'قَبْلَ أَنْ أُسَافِرَ ______ .' },
      { en: 'Since I started …', ar: 'مُنْذُ أَنْ بَدَأْتُ ______ .' },
    ],
    develop: [
      { en: 'As for …, it is …', ar: 'أَمَّا ______ فَهُوَ ______ .' },
      { en: 'I like everything except …', ar: 'أُحِبُّ كُلَّ شَيْءٍ إِلَّا ______ .' },
      { en: 'I prefer …, whereas …', ar: 'أُفَضِّلُ ______ ، بَيْنَمَا ______ .' },
      { en: 'It is clear that …', ar: 'مِنَ الْوَاضِحِ أَنَّ ______ .' },
    ],
    bank: ['أَعْتَقِدُ أَنَّ', 'أَظُنُّ أَنَّ', 'مِنَ الْوَاضِحِ أَنَّ', 'أَمَّا … فَـ', 'حَيْثُ', 'إِلَّا', 'بَيْنَمَا', 'بَعْدَمَا', 'قَبْلَ أَنْ', 'مُنْذُ أَنْ', 'بِالْإِضَافَةِ إِلَى ذَلِكَ', 'لِذَلِكَ'],
  },
  stretchTask: {
    task: 'Website extended cohesive response: 130–140 words on one topic, planned as five paragraph jobs.',
    checklist: ['aʿtaqidu anna + accusative subject.', 'One reason → result chain.', 'One ammā … fa- topic shift.', 'One contrast (baynamā / lākin).', 'One time clause (baʿdamā / qabla an + subj. / mundhu an).'],
    phrases: [['مِنْ وَجْهَةِ نَظَرِي', 'from my point of view'], ['بِالْإِضَافَةِ إِلَى ذَلِكَ', 'in addition'], ['عَلَى الرَّغْمِ مِنْ ذَلِكَ', 'despite that'], ['وَمِنْ ثَمَّ', 'and consequently'], ['مِنْ نَاحِيَةٍ أُخْرَى', 'on the other hand'], ['فِي الْخِتَامِ', 'in conclusion']],
  },
  model: {
    text: 'أَعْتَقِدُ أَنَّ حِمَايَةَ الْبِيئَةِ مَسْؤُولِيَّةُ الْجَمِيعِ، لِأَنَّنَا نَعِيشُ عَلَى كَوْكَبٍ وَاحِدٍ. أَمَّا الْحُكُومَاتُ فَعَلَيْهَا أَنْ تَضَعَ قَوَانِينَ قَوِيَّةً، بَيْنَمَا يَسْتَطِيعُ كُلُّ فَرْدٍ أَنْ يُغَيِّرَ عَادَاتِهِ الْيَوْمِيَّةَ. مُنْذُ أَنْ بَدَأَتْ مَدْرَسَتُنَا بِرْنَامَجَ إِعَادَةِ التَّدْوِيرِ، قَلَّتِ النُّفَايَاتُ كَثِيرًا. بِالْإِضَافَةِ إِلَى ذَلِكَ، أَصْبَحْنَا نَمْشِي إِلَى الْمَدْرَسَةِ إِلَّا فِي الْأَيَّامِ الْمُمْطِرَةِ. قَبْلَ أَنْ نَشْتَرِيَ شَيْئًا جَدِيدًا، نَسْأَلُ: هَلْ نَحْتَاجُهُ حَقًّا؟ عَلَى الرَّغْمِ مِنْ ذَلِكَ، مَا زَالَ أَمَامَنَا عَمَلٌ كَثِيرٌ، لِذَلِكَ يَجِبُ أَنْ نَتَعَاوَنَ جَمِيعًا.',
    en: 'I believe that protecting the environment is everyone’s responsibility, because we live on one planet. As for governments, they must make strong laws, whereas every individual can change their daily habits. Since our school started a recycling programme, waste has fallen a lot. In addition, we now walk to school except on rainy days. Before we buy something new, we ask: do we really need it? Despite that, we still have a lot of work ahead, so we must all cooperate.',
    find: ['view (anna)', 'topic shift (ammā … fa-)', 'contrast / exception', 'time clause'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'I gave my view with aʿtaqidu anna.' },
    { route: 'core', text: 'I used one time clause correctly.' },
    { route: 'develop', text: 'My ammā has its fa-.' },
    { route: 'develop', text: 'I used baynamā (not ḥaythu) for contrast.' },
    { route: 'stretch', text: 'Each connector does a real job — no random links.' },
  ],
  exit: [
    W(/Final Mastery/, 1, { prompt: 'Complete the pair: ammā l-ḥāfila ___ hiya arkhaṣ.', feedback: 'Ammā pairs with fa-.' }),
    W(/Final Mastery/, 7, { prompt: 'Which is the clear “whereas” contrast?', feedback: 'Baynamā is the clearer contrast linker.' }),
    W(/Final Mastery/, 9, { prompt: 'Best final editing question?', feedback: 'Logical accuracy is the foundation of cohesion.' }),
  ],
  mastery: false,
  prep: {
    words: [['وَاحِدٌ', 'one', '١'], ['خَمْسَةٌ', 'five', '٥'], ['عَشَرَةٌ', 'ten', '١٠'], ['عِشْرُونَ', 'twenty', '٢٠'], ['مِئَةٌ', 'a hundred', '١٠٠']],
    questionEn: 'Can you count to ten in Arabic? Which number words do you already know?',
    questionAr: 'وَاحِدٌ · اثْنَانِ · ______',
    homework: {
      core: 'Write five opinion sentences with aʿtaqidu anna.',
      develop: 'Write a short paragraph with ammā … fa-, baynamā and illā.',
      stretch: 'Website extended response (130–140 words).',
    },
    wordsSource: 'The five words prepare GM-NUM-01 (website Numeracy Mastery 01: numbers).',
  },
  remember: 'Remember: aʿtaqidu anna + accusative · ammā … fa- (both halves) · ḥaythu = where · baynamā = whereas · illā = except · qabla an + subjunctive · every link must do a job.',
});

module.exports = { meta, slides };
