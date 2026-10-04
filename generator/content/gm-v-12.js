'use strict';
/* GM-V-12 · Verbal Nouns and Participles — website: Mastery & Revision › Grammar › Verbs › Lesson 12 (maṣdar names the action —
 * Form I maṣdars are learned with the verb; active participle fāʿil names / describes the doer — qāʾil, qāriʾ spelling; passive participle
 * mafʿūl describes the affected thing and agrees like an adjective; derived families (II, III, V, VIII, X) as Stretch: mu- + kasra = doer,
 * mu- + fatḥa = affected; clinic). Quizzes are the website’s (Entry, Verbal Noun, Active, Passive, Derived, Mastery) plus the website
 * classification game (used as the sorter); one item with “only” options is skipped. I-do, frames, reading and model are teacher-made. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__07-verbs__grammar-mastery-12-verbal-nouns-participles';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-V-12', fileTitle: 'Verbal_Nouns_Participles', title: 'Verbal Nouns and Participles', arabic: 'الْمَصْدَرُ وَاسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُولِ',
  focus: 'One root, three nouns: the ACTION (kitāba — writing), the DOER (kātib — writer), the AFFECTED thing (maktūb — written). Participles agree like adjectives.',
  icon: 'FaSitemap',
});

const slides = G.gmLesson({
  code: 'GM-V-12', site: KEY,
  support: `• Core: the k-t-b family كِتَابَةٌ · كَاتِبٌ · مَكْتُوبٌ and the patterns فَاعِلٌ / مَفْعُولٌ (لَاعِبٌ · مَكْسُورٌ · مَفْتُوحٌ). Develop: agreement (رِسَالَةٌ مَكْتُوبَةٌ · الْكُتُبُ مَوْجُودَةٌ) and maṣdars in phrases (أُحِبُّ الْقِرَاءَةَ). Stretch: derived families — تَعَلُّمٌ · مُتَعَلِّمٌ · اِسْتِعْمَالٌ · مُسْتَعْمِلٌ · مُسْتَعْمَلٌ.
• Website caution: Form I maṣdars are NOT predictable — store each verb with its maṣdar (زَارَ · يَزُورُ · زِيَارَةٌ).
• Stretch shortcut for derived forms: mu- … kasra = the doer (mustaʿmil); mu- … fatḥa = the thing affected (mustaʿmal). Links straight into the Verb Forms unit (GM-VF).`,
  teach: 'Maṣdar; active participle; passive participle; derived families.',
  wedo: 'Build the family; sort action / doer / affected; repair.',
  next: { nextCode: 'GM-VF-00', nextTitle: 'What Are Arabic Verb Forms?', nextAr: 'مَا الْأَوْزَانُ الصَّرْفِيَّةُ؟' },
  doNow: {
    pick: [0, 1, 2, 3, 4],
    fb: { 0: 'Kitāba names the action of writing.', 1: 'Kātib identifies the doer: writer.', 2: 'Maktūb describes what has been written.', 3: 'Ziyāra is the action noun “visit / visiting”.', 4: 'The Form I active participle follows fāʿil: lāʿib.' },
    keyIdea: { text: 'One root, three jobs: action (maṣdar) · doer (fāʿil) · affected (mafʿūl).', ar: '{k|كِتَابَةٌ} · {e|كَاتِبٌ} · {k|مَكْتُوبٌ}' },
    retrieves: 'The website Entry Check (questions 1–5) — the GM-V-11 prep words kitāba, kātib, maktūb, dirāsa and madrūs.',
  },
  objectives: ['Name an action with a verbal noun.', 'Name or describe the doer with an active participle.', 'Describe the affected thing with a passive participle.', 'Make participles agree like adjectives.'],
  routes: {
    core: ['I tell kitāba, kātib and maktūb apart.', 'I make fāʿil and mafʿūl from a Form I verb.'],
    develop: ['I make participles agree: risāla maktūba.', 'I use maṣdars: uḥibbu l-qirāʾa.'],
    stretch: ['I use derived families: mutaʿallim, mustaʿmal.', 'I spot mu- + kasra vs mu- + fatḥa.'],
  },
  terms: {
    items: [
      { ar: 'الْمَصْدَرُ', en: 'verbal noun (the action)', note: 'كِتَابَةٌ' },
      { ar: 'اسْمُ الْفَاعِلِ', en: 'active participle (the doer)', note: 'كَاتِبٌ' },
      { ar: 'اسْمُ الْمَفْعُولِ', en: 'passive participle (affected)', note: 'مَكْتُوبٌ' },
      { ar: 'الْجَذْرُ', en: 'root', note: 'ك ت ب' },
      { ar: 'فَاعِلٌ', en: 'doer pattern (Form I)', note: 'لَاعِبٌ' },
      { ar: 'مَفْعُولٌ', en: 'affected pattern (Form I)', note: 'مَكْسُورٌ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · verbal nouns: naming the action (website table)', title: 'The maṣdar names the action', ar: 'الْمَصْدَرُ', ltr: true,
      cols: [{ label: 'Verb', w: 3.2, size: 24 }, { label: 'Verbal noun', w: 2.8, size: 26 }, { label: 'Useful phrase (website)', w: 6.33, size: 22 }],
      rows: [
        { core: true, cells: ['كَتَبَ · يَكْتُبُ', 'كِتَابَةٌ', 'أُحِبُّ الْكِتَابَةَ.'] },
        { core: true, cells: ['قَرَأَ · يَقْرَأُ', 'قِرَاءَةٌ', 'الْقِرَاءَةُ مُفِيدَةٌ.'] },
        { cells: ['دَرَسَ · يَدْرُسُ', 'دِرَاسَةٌ', 'بَعْدَ دِرَاسَةِ النَّصِّ …'] },
        { cells: ['سَافَرَ · يُسَافِرُ', 'سَفَرٌ', 'أَسْتَمْتِعُ بِالسَّفَرِ.'] },
        { cells: ['زَارَ · يَزُورُ', 'زِيَارَةٌ', 'قُمْنَا بِزِيَارَةِ الْمَتْحَفِ.'] },
      ],
      foot: 'Website caution: Form I verbal nouns are often unpredictable — learn kataba / kitāba, qaraʾa / qirāʾa, zāra / ziyāra as pairs. A maṣdar can be a subject, an object or part of an iḍāfa.',
      notes: 'PART 1 (3 min) — website “Verbal nouns: naming the action”.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 2 · active and passive participles (website tables)', title: 'The doer — and the thing done to', ar: 'اسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُولِ', ltr: true,
      cols: [{ label: 'Verb', w: 2.2, size: 24 }, { label: 'Doer · fāʿil', w: 3.4, size: 24 }, { label: 'Affected · mafʿūl', w: 3.2, size: 24 }, { label: 'Example', w: 3.53, size: 20 }],
      rows: [
        { core: true, cells: ['كَتَبَ', 'كَاتِبٌ · كَاتِبَةٌ', 'مَكْتُوبٌ', 'رِسَالَةٌ مَكْتُوبَةٌ'] },
        { core: true, cells: ['لَعِبَ', 'لَاعِبٌ · لَاعِبَةٌ', 'مَلْعُوبٌ', 'لَاعِبَةٌ مَاهِرَةٌ'] },
        { core: true, cells: ['فَتَحَ', 'فَاتِحٌ', 'مَفْتُوحٌ', 'الْبَابُ مَفْتُوحٌ'] },
        { cells: ['كَسَرَ', 'كَاسِرٌ', 'مَكْسُورٌ', 'هَاتِفٌ مَكْسُورٌ'] },
        { cells: ['قَرَأَ', 'قَارِئٌ', 'مَقْرُوءٌ', 'كِتَابٌ مَقْرُوءٌ'] },
        { cells: ['قَالَ', 'قَائِلٌ', 'مَقُولٌ', 'قَائِلُ هَذَا الْكَلَامِ'] },
      ],
      foot: 'Website: participles agree like adjectives — kitābun maktūbun, risālatun maktūbatun, al-kutubu mawjūdatun (non-human plural → feminine singular).',
      notes: 'PART 2 (4 min) — website “Active participles” and “Passive participles”.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · derived families (website table) · Stretch', title: 'mu- + kasra = doer · mu- + fatḥa = affected', ar: 'الْأَوْزَانُ الْمَزِيدَةُ', ltr: true,
      cols: [{ label: 'Verb (Forms II · III · V · VIII · X)', w: 2.6, size: 24 }, { label: 'Verbal noun', w: 3.0, size: 24 }, { label: 'Doer', w: 3.0, size: 24 }, { label: 'Affected', w: 3.73, size: 24 }],
      rows: [
        { cells: ['دَرَّسَ', 'تَدْرِيسٌ', 'مُدَرِّسٌ', 'مُدَرَّسٌ'] },
        { cells: ['شَاهَدَ', 'مُشَاهَدَةٌ', 'مُشَاهِدٌ', 'مُشَاهَدٌ'] },
        { core: true, cells: ['تَعَلَّمَ', 'تَعَلُّمٌ', 'مُتَعَلِّمٌ', 'مُتَعَلَّمٌ'] },
        { cells: ['اِحْتَرَمَ', 'اِحْتِرَامٌ', 'مُحْتَرِمٌ', 'مُحْتَرَمٌ'] },
        { core: true, cells: ['اِسْتَعْمَلَ', 'اِسْتِعْمَالٌ', 'مُسْتَعْمِلٌ', 'مُسْتَعْمَلٌ'] },
      ],
      foot: 'Website: derived forms are more predictable than Form I, but meet them through useful words. Example: the student is a user (mustaʿmil); the computer is used (mustaʿmal).',
      notes: 'PART 3 (3 min) — website “Derived forms” (examples chosen from the website patterns II, III, V, VIII, X). Full detail in GM-VF.',
    },
  ],
  quick: [
    W(/Verbal Noun Check/, 0, { prompt: 'Choose “reading” (the activity).', feedback: 'Action noun: qirāʾa.' }),
    W(/Active Participle/, 2, { prompt: 'Choose “one who says / speaker”.', feedback: 'Hollow active participle: qāʾil.' }),
    W(/Passive Participle/, 1, { prompt: 'Choose “a written letter”.', feedback: 'Passive participle + feminine agreement.' }),
    W(/Passive Participle/, 3, { prompt: 'Choose “The books are available”.', feedback: 'Non-human plural: feminine singular.' }),
  ],
  quickNote: 'website Verbal Noun, Active and Passive Participle checks.',
  ido: {
    title: 'Watch me build a root family',
    steps: [
      { head: 'Verb', ar: 'قَرَأَ', think: 'Root q-r-ʾ.' },
      { head: 'Action', ar: 'قِرَاءَةٌ', think: 'Learn with the verb.' },
      { head: 'Doer', ar: 'قَارِئٌ', think: 'fāʿil pattern.' },
      { head: 'Affected', ar: 'مَقْرُوءٌ', think: 'mafʿūl pattern.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'ACTION (MAṢDAR)', e: 'PARTICIPLE' },
    model: '{k|تَعَلُّمُ} اللُّغَاتِ نَشَاطٌ مُفِيدٌ. أَنَا {e|مُتَعَلِّمَةٌ} مُجْتَهِدَةٌ، وَأُحِبُّ {k|الْقِرَاءَةَ} وَ{k|الْكِتَابَةَ}. فِي مَكْتَبَتِنَا كُتُبٌ {e|مَعْرُوفَةٌ} وَنُصُوصٌ {e|مَقْرُوءَةٌ} بِعِنَايَةٍ.',
    modelEn: 'Learning languages is a useful activity. I am a hard-working learner, and I love reading and writing. In our library there are well-known books and carefully read texts.',
    notes: 'Website model. Website routine: circle maṣdars, underline active participles, box passive participles.',
  },
  models: [
    { ar: 'أَسْتَمْتِعُ بِالسَّفَرِ.', en: 'I enjoy travelling.', tip: 'Maṣdar after a preposition.' },
    { ar: 'أُخْتِي لَاعِبَةٌ مَاهِرَةٌ.', en: 'My sister is a skilful player.', tip: 'Active, feminine.' },
    { ar: 'الْمَتْجَرُ مُغْلَقٌ الْيَوْمَ.', en: 'The shop is closed today.', tip: 'Form IV affected: mughlaq.' },
    { ar: 'هَذَا شَخْصٌ مَعْرُوفٌ.', en: 'This is a well-known person.', tip: 'Passive participle as adjective.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · build the family · say it aloud', title: 'Action, doer, affected', ar: 'أُسْرَةُ الْجَذْرِ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Verb', w: 2.6, size: 24 }, { label: 'Action', w: 3.0, size: 24 }, { label: 'Doer', w: 3.0, size: 24 }, { label: 'Affected', w: 3.73, size: 24 }],
      rows: [
        { core: true, cells: ['كَتَبَ', 'كِتَابَةٌ', 'كَاتِبٌ', 'مَكْتُوبٌ'] },
        { core: true, cells: ['قَرَأَ', 'قِرَاءَةٌ', 'قَارِئٌ', 'مَقْرُوءٌ'] },
        { cells: ['دَرَسَ', 'دِرَاسَةٌ', 'دَارِسٌ', 'مَدْرُوسٌ'] },
        { cells: ['عَرَفَ', 'مَعْرِفَةٌ', 'عَارِفٌ', 'مَعْرُوفٌ'] },
        { cells: ['تَعَلَّمَ', 'تَعَلُّمٌ', 'مُتَعَلِّمٌ', 'مُتَعَلَّمٌ'] },
        { cells: ['اِسْتَعْمَلَ', 'اِسْتِعْمَالٌ', 'مُسْتَعْمِلٌ', 'مُسْتَعْمَلٌ'] },
      ],
      foot: 'Cover a column and rebuild it. Columns 3 and 4 follow patterns; column 2 (Form I) must be learned.',
      notes: 'WE DO (3 min) — website quiz items arranged as families. Cover one column at a time.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · classification (website game)', title: 'Action, doer or affected?', ar: 'حَدَثٌ أَمْ فَاعِلٌ أَمْ مَفْعُولٌ؟',
      categories: ['Action', 'Doer', 'Affected'],
      items: [['كِتَابَةٌ', 0], ['قِرَاءَةٌ', 0], ['اِسْتِعْمَالٌ', 0], ['كَاتِبٌ', 1], ['قَارِئٌ', 1], ['مُتَعَلِّمٌ', 1], ['مَكْتُوبٌ', 2], ['مُسْتَعْمَلٌ', 2]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min) — website classification game. Students type 1, 2 or 3.',
    },
  ],
  mistakes: [
    { wrong: 'أُحِبُّ الْكَاتِبَ', right: 'أُحِبُّ الْكِتَابَةَ', why: 'For “I love writing”, use the maṣdar; al-kātib is a writer (website clinic).' },
    { wrong: 'هَذَا رِسَالَةٌ كَاتِبَةٌ', right: 'هَذِهِ رِسَالَةٌ مَكْتُوبَةٌ', why: 'The letter is affected, and feminine (website clinic).' },
    { wrong: 'الْكُتُبُ مَكْتُوبُونَ', right: 'الْكُتُبُ مَكْتُوبَةٌ', why: 'Non-human plural → feminine singular (website clinic).' },
  ],
  hints: ['Activity or person?', 'Doer or done-to?', 'Human or non-human plural?'],
  practice: [
    W(/Verbal Noun Check/, 1, { prompt: 'Choose “learning” (the activity).', feedback: 'Form V verbal noun.' }),
    W(/Active Participle/, 3, { prompt: 'Choose “female player”.', feedback: 'Active participle, feminine.' }),
    W(/Passive Participle/, 2, { prompt: 'Choose “The door is open”.', feedback: 'Passive participle as predicate.' }),
    W(/Derived Nominal/, 3, { prompt: 'Passive participle of istaʿmala (used)?', feedback: 'mu- + fatḥa = affected: mustaʿmal.' }),
  ],
  practiceLabel: 'website Verbal Noun, Participle and Derived checks',
  read: {
    title: 'Profile: a young writer', label: 'website reading workshop (teacher-written profile)',
    text: 'سَلْمَى كَاتِبَةٌ شَابَّةٌ وَقَارِئَةٌ نَشِيطَةٌ. تَقُولُ: «الْقِرَاءَةُ وَالْكِتَابَةُ هِوَايَتَايَ الْمُفَضَّلَتَانِ». قِصَصُهَا مَكْتُوبَةٌ بِلُغَةٍ سَهْلَةٍ، وَهِيَ مَعْرُوفَةٌ فِي مَدِينَتِهَا. تَعْمَلُ مُدَرِّسَةً فِي الصَّبَاحِ، وَفِي الْمَسَاءِ تُسَاعِدُ الْمُتَعَلِّمِينَ الصِّغَارَ. مَكْتَبُهَا مَفْتُوحٌ لِكُلِّ الزُّوَّارِ، وَلَكِنَّ اسْتِعْمَالَ الْهَوَاتِفِ مَمْنُوعٌ فِيهِ!',
    glossary: [['شَابَّةٌ', 'young (f.)'], ['هِوَايَتَايَ', 'my two hobbies'], ['الْمُفَضَّلَتَانِ', 'favourite (dual)'], ['الزُّوَّارِ', 'visitors'], ['مَمْنُوعٌ', 'forbidden']],
    task: 'Website: classify every nominal derivative as action, doer or affected state.',
    questions: [
      q('Which word names an ACTION?', ['الْقِرَاءَةُ', 'قَارِئَةٌ', 'مَكْتُوبَةٌ'], 'Maṣdar.'),
      q('Which word describes something AFFECTED?', ['مَكْتُوبَةٌ', 'كَاتِبَةٌ', 'الْكِتَابَةُ'], 'Her stories are written.'),
      q('Who does Salmā help in the evening?', ['young learners', 'other writers', 'visitors'], 'Al-mutaʿallimīna ṣ-ṣighār.'),
      q('What is forbidden in her office?', ['using phones', 'reading', 'visiting'], 'Istiʿmāl al-hawātif mamnūʿ.'),
    ],
    qNote: 'Teacher-written profile for the website reading workshop; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: me as a learner', source: 'website speaking workshop',
    prompts: [
      { route: 'core', ar: 'مَا هِوَايَتُكَ الْمُفَضَّلَةُ؟' },
      { route: 'develop', ar: 'هَلْ أَنْتَ قَارِئٌ جَيِّدٌ؟ مَاذَا تَقْرَأُ؟' },
      { route: 'stretch', ar: 'صِفْ نَفْسَكَ مُتَعَلِّمًا. مَا الْمُفِيدُ فِي تَعَلُّمِ اللُّغَاتِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أُحِبُّ ______ وَ ______ .' },
      { route: 'develop', ar: 'أَنَا ______ ، وَأَقْرَأُ كُتُبًا ______ .' },
      { route: 'stretch', ar: 'أَنَا مُتَعَلِّمٌ ______ ، وَ ______ مُفِيدٌ لِأَنَّ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَا هِوَايَتُكِ الْمُفَضَّلَةُ؟', en: 'What is your favourite hobby? (to a girl)' },
      { who: 'B', ar: 'أُحِبُّ الرَّسْمَ وَالسِّبَاحَةَ. أَنَا سَبَّاحَةٌ فِي فَرِيقِ الْمَدْرَسَةِ، وَرُسُومِي مَعْرُوفَةٌ فِي صَفِّي!', en: 'I love drawing and swimming. I am a swimmer in the school team, and my drawings are well known in my class!' },
    ],
    notes: 'Website: describe yourself as a learner using verbal nouns and participles. Listening (website): kitāba / kātib / maktūb — which meaning is intended?',
  },
  write: {
    siteTask: 'Write 130–140 words about learning, reading, sport or technology. Use at least four verbal nouns, four active participles and four passive participles.',
    core: { amount: '5 sentences', task: 'Activities I love (maṣdars).', how: 'uḥibbu + maṣdar.' },
    develop: { amount: '7 sentences', task: 'Add people (doers) and things (affected).', how: 'fāʿil / mafʿūl with agreement.' },
    stretch: { amount: '130–140 words', task: 'Website task on learning or technology.', how: 'One derived family (mutaʿallim / mustaʿmal).' },
  },
  frames: {
    core: [
      { en: 'I love …ing', ar: 'أُحِبُّ ______ .' },
      { en: '… is useful', ar: '______ مُفِيدَةٌ.' },
      { en: 'My brother is a player in …', ar: 'أَخِي لَاعِبٌ فِي ______ .' },
      { en: 'The door is …', ar: 'الْبَابُ ______ .' },
    ],
    develop: [
      { en: 'This letter is written in …', ar: 'هَذِهِ الرِّسَالَةُ مَكْتُوبَةٌ ______ .' },
      { en: 'My sister is a good …', ar: 'أُخْتِي ______ جَيِّدَةٌ.' },
      { en: 'The books are …', ar: 'الْكُتُبُ ______ .' },
      { en: 'Learning … is important', ar: 'تَعَلُّمُ ______ مُهِمٌّ.' },
    ],
    bank: ['الْقِرَاءَةَ', 'الْكِتَابَةَ', 'السَّفَرَ', 'السِّبَاحَةَ', 'كَاتِبٌ', 'قَارِئَةٌ', 'لَاعِبٌ', 'مُتَعَلِّمٌ', 'مَكْتُوبَةٌ', 'مَفْتُوحٌ', 'مَعْرُوفَةٌ', 'مُسْتَعْمَلَةٌ'],
  },
  stretchTask: {
    task: 'Website integrated production task: 130–140 words about learning, reading, sport or technology.',
    checklist: ['Four verbal nouns (actions).', 'Four active participles (doers).', 'Four passive participles (affected).', 'Gender and non-human plural agreement.', 'One Form I and one derived family.'],
    phrases: [['تَعَلُّمُ اللُّغَاتِ', 'learning languages'], ['مُتَعَلِّمٌ مُجْتَهِدٌ', 'a hard-working learner'], ['اِسْتِعْمَالُ التِّقْنِيَّةِ', 'using technology'], ['مَعْرُوفٌ', 'well known'], ['مَمْنُوعٌ', 'forbidden'], ['مُفِيدٌ', 'useful']],
  },
  model: {
    text: 'اِسْتِعْمَالُ التِّقْنِيَّةِ جُزْءٌ مِنْ حَيَاتِنَا. أَنَا مُسْتَعْمِلٌ نَشِيطٌ لِلْحَاسُوبِ، وَأُحِبُّ الْبَرْمَجَةَ وَالْقِرَاءَةَ عَنِ الْعُلُومِ. أَخِي لَاعِبٌ فِي فَرِيقِ الْمَدْرَسَةِ، وَأُخْتِي كَاتِبَةٌ تَنْشُرُ مَقَالَاتٍ مَقْرُوءَةً عَلَى الْإِنْتَرْنِتِ. فِي مَدْرَسَتِنَا الْأَجْهِزَةُ مُسْتَعْمَلَةٌ فِي كُلِّ الدُّرُوسِ، وَلَكِنَّ الْأَلْعَابَ مَمْنُوعَةٌ فِي الصَّفِّ. الْمُدَرِّسُونَ مُتَعَاوِنُونَ، وَالْبَرَامِجُ مَعْرُوفَةٌ وَسَهْلَةٌ. أَظُنُّ أَنَّ تَعَلُّمَ التِّقْنِيَّةِ مُفِيدٌ، وَلَكِنَّ الْقِرَاءَةَ مِنَ الْكُتُبِ مُهِمَّةٌ أَيْضًا.',
    en: 'Using technology is part of our lives. I am an active computer user, and I love programming and reading about science. My brother is a player in the school team, and my sister is a writer who publishes widely read articles online. At our school devices are used in every lesson, but games are forbidden in class. The teachers are cooperative, and the programs are well known and easy. I think learning technology is useful, but reading from books is important too.',
    find: ['action (maṣdar)', 'doer (active)', 'affected (passive)', 'non-human plural'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'I used maṣdars for activities.' },
    { route: 'core', text: 'I used fāʿil for people and mafʿūl for things.' },
    { route: 'develop', text: 'My participles agree with their nouns.' },
    { route: 'develop', text: 'Non-human plurals take feminine singular.' },
    { route: 'stretch', text: 'I used a derived family (mu- + kasra / fatḥa).' },
  ],
  exit: [
    W(/Participle Mastery/, 2, { prompt: 'Choose “written”.', feedback: 'Passive participle.' }),
    W(/Participle Mastery/, 4, { prompt: 'Choose “reader”.', feedback: 'Active participle.' }),
    W(/Participle Mastery/, 7, { prompt: 'Choose “learner”.', feedback: 'Active participle (Form V).' }),
  ],
  mastery: false,
  prep: {
    words: [['الْوَزْنُ', 'pattern / form', 'فَعَلَ'], ['الْجَذْرُ', 'root', 'ك ت ب'], ['دَرَسَ', 'to study (Form I)', '—'], ['دَرَّسَ', 'to teach (Form II)', '—'], ['تَعَلَّمَ', 'to learn (Form V)', '—']],
    questionEn: 'Darasa = to study; darrasa = to teach. What one change made the new meaning?',
    questionAr: 'دَرَسَ · دَرَّسَ',
    homework: {
      core: 'Make the action, doer and affected words for kataba, qaraʾa and fataḥa.',
      develop: 'Write six sentences with participles that agree with their nouns.',
      stretch: 'Website task on learning, reading, sport or technology.',
    },
    wordsSource: 'The five words prepare GM-VF-00 (website Verb Forms: what are Arabic verb forms?).',
  },
  remember: 'Remember: maṣdar = the action (kitāba) · fāʿil = the doer (kātib) · mafʿūl = the affected (maktūb) · participles agree like adjectives · derived: mu- + kasra doer, mu- + fatḥa affected.',
});

module.exports = { meta, slides };
