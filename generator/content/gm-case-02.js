'use strict';
/* GM-CASE-02 · The Accusative Case — website: Mastery & Revision › Grammar › Case Endings › Lesson 2 (the direct object as the core
 * accusative role; accusative forms: -a, -an (+ supporting alif), -ayni, -īna, -āti; fatḥatān spelling — no extra alif after tāʾ
 * marbūṭa or alif + hamza; time, duration and place adverbials: ghadan, sāʿatan, amāma l-bayti, kulla yawmin — and the preposition
 * alternative fī ṣ-ṣabāḥi; links to inna and kāna; accusative adjective agreement; clinic). Website vowelling error noted (Readiness
 * item 4, not used): الْمُتْحَفَ → الْمَتْحَفَ. Quizzes are the website’s (Readiness, Mini-check: direct objects, Mini-check:
 * adverbials, Final Mastery); the Readiness item with bare vowel-mark options is skipped. Colour code: teal = verb, pink =
 * accusative words. I-do, meaning → sentence drill, role sorter, reading, frames and the extended model are teacher-made on the
 * website content (the drill uses the website game items). */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__12-case-endings__grammar-mastery-02-accusative';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-CASE-02', fileTitle: 'Accusative', title: 'The Accusative Case', arabic: 'حَالَةُ النَّصْبِ',
  focus: 'The accusative (-a / -an) marks what receives the action — qaraʾtu l-kitāba, ishtaraytu qalaman — and many time and place words: ghadan, ṣabāḥan, sāʿatan, amāma l-bayti. Duals show -ayni, sound plurals -īna.',
  icon: 'FaBullseye',
});

const slides = G.gmLesson({
  code: 'GM-CASE-02', site: KEY,
  support: `• Core: find the direct object and give it -a (definite) or -an (indefinite: kitāban, madrasatan); the adjective copies it. Develop: dual -ayni, sound masculine plural -īna, and time / place adverbials (ghadan, sāʿatan, amāma …, kulla yawmin). Stretch: supporting-alif spelling, the sound feminine plural (-āti, with kasra!) and the inna / kāna links.
• Website meaning test: ask “what did the subject act upon?” before choosing the ending. The accusative is a job, not “any noun after a verb”.
• Colour code: teal = verb, pink = accusative words. Builds on GM-CASE-01 (nominative), GM-VS-01 (roles) and GM-NVS-02/03 (inna, kāna).`,
  teach: 'Objects; forms; adjectives; time and place; inna and kāna.',
  wedo: 'Meaning → sentence; object or adverbial?; repair.',
  next: { nextCode: 'GM-CASE-03', nextTitle: 'The Genitive Case', nextAr: 'حَالَةُ الْجَرِّ' },
  doNow: {
    questions: [
      W(/Readiness Check/, 0, { prompt: 'Which word is the direct object: كَتَبَ الطَّالِبُ الرِّسَالَةَ', feedback: 'The letter receives the action: -a.' }),
      W(/Readiness Check/, 2, { prompt: 'Choose the indefinite accusative of kitāb.', feedback: 'Kitāban, with a supporting alif.' }),
      W(/Readiness Check/, 4, { feedback: 'Ṣabāḥan (-an) or fī ṣ-ṣabāḥi (-i).' }),
      W(/Readiness Check/, 5, { feedback: 'Dual accusative: -ayni.' }),
      W(/Final Mastery/, 1, { feedback: 'Doer -u, object -a.' }),
    ],
    keyIdea: { text: 'What received the action? → accusative (-a / -an). Time and place words often take -an too.', ar: '{k|قَرَأْتُ} {e|الْكِتَابَ} ‖ سَافَرْتُ {e|صَبَاحًا}' },
    retrieves: 'The website Readiness Check — GM-CASE-01 nominative and GM-VS-01 object role.',
  },
  objectives: ['Find the direct object.', 'Use -a and -an correctly (with the right spelling).', 'Use -ayni and -īna.', 'Say when and where with accusative words.'],
  routes: {
    core: ['I give the object -a or -an.', 'I make the adjective match.'],
    develop: ['I use -ayni and -īna.', 'I use ghadan, sāʿatan, amāma …'],
    stretch: ['I spell madrasatan and māʾan correctly.', 'I write a 100–120-word visit account.'],
  },
  terms: {
    items: [
      { ar: 'النَّصْبُ', en: 'the accusative case', note: 'الْكِتَابَ · كِتَابًا' },
      { ar: 'الْفَتْحَةُ', en: 'fatḥa: -a', note: 'الْبَابَ' },
      { ar: 'تَنْوِينُ الْفَتْحِ', en: 'fatḥatān: -an', note: 'قَلَمًا' },
      { ar: 'الْمَفْعُولُ بِهِ', en: 'the direct object', note: 'فَتَحَ الْبَابَ' },
      { ar: 'ظَرْفُ الزَّمَانِ', en: 'time word', note: 'غَدًا · صَبَاحًا' },
      { ar: 'ظَرْفُ الْمَكَانِ', en: 'place word', note: 'أَمَامَ الْبَيْتِ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · the direct object (website models)', title: 'What received the action?', ar: 'الْمَفْعُولُ بِهِ', ltr: true,
      cols: [{ label: 'Website model', w: 5.4, size: 24 }, { label: 'Object', w: 3.4, size: 22 }, { label: 'Meaning', w: 3.53 }],
      rows: [
        { core: true, cells: ['فَتَحَ الْحَارِسُ الْبَابَ.', 'الْبَابَ', 'The guard opened the door.'] },
        { core: true, cells: ['قَرَأَتْ مَرْيَمُ الْمَقَالَةَ.', 'الْمَقَالَةَ', 'Maryam read the article.'] },
        { core: true, cells: ['اِشْتَرَتْ لَيْلَى حَقِيبَةً جَدِيدَةً.', 'حَقِيبَةً جَدِيدَةً', 'Laylā bought a new bag.'] },
        { cells: ['قَابَلْتُ طَالِبَيْنِ مُجْتَهِدَيْنِ.', 'طَالِبَيْنِ مُجْتَهِدَيْنِ', 'I met two hardworking students.'] },
        { cells: ['شَكَرْتُ الْمُعَلِّمِينَ.', 'الْمُعَلِّمِينَ', 'I thanked the teachers.'] },
      ],
      foot: 'Website meaning test: ask “what did the subject act upon?” — the answer is the object, and it takes the accusative. The doer stays nominative (-u).',
      notes: 'PART 1 (3 min) — website “The direct object” (rows 2 and 5 from the website opening and game). Students point: doer (-u) or receiver (-a)?',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · the accusative forms (website table)', title: 'Six shapes of the accusative', ar: 'عَلَامَاتُ النَّصْبِ', ltr: true,
      cols: [{ label: 'Noun type', w: 4.0 }, { label: 'Accusative', w: 3.6, size: 26 }, { label: 'Signal', w: 4.73 }],
      rows: [
        { core: true, cells: ['definite singular', 'الْكِتَابَ', 'fatḥa: -a'] },
        { core: true, cells: ['indefinite singular', 'كِتَابًا', '-an + supporting alif'] },
        { core: true, cells: ['tāʾ marbūṭa (indefinite)', 'مَدْرَسَةً', '-an, NO extra alif'] },
        { cells: ['dual', 'طَالِبَيْنِ', '-ayni'] },
        { cells: ['sound masculine plural', 'مُعَلِّمِينَ', '-īna'] },
        { cells: ['sound feminine plural', 'الطَّالِبَاتِ', '-āti — kasra, not fatḥa!'] },
      ],
      foot: 'Website spelling: the extra alif belongs to the spelling of -an, not to the meaning. No extra alif after tāʾ marbūṭa (madrasatan) or alif + hamza (māʾan). Never write madrasatan with an alif.',
      notes: 'PART 2 (3 min) — website “Fatḥatan and the supporting alif” + forms table. The sound feminine plural is the Stretch trap: qābaltu ṭ-ṭālibāti.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 3 · accusative adjective agreement (website table) · Develop', title: 'The adjective follows — in its own way', ar: 'الصِّفَةُ الْمَنْصُوبَةُ', ltr: true,
      cols: [{ label: 'Pattern', w: 3.2 }, { label: 'Noun + adjective', w: 4.6, size: 24 }, { label: 'Notice', w: 4.53 }],
      rows: [
        { core: true, cells: ['definite', 'الْكِتَابَ الْجَدِيدَ', 'both -a'] },
        { core: true, cells: ['indefinite', 'كِتَابًا جَدِيدًا', 'both -an'] },
        { cells: ['dual', 'طَالِبَيْنِ جَدِيدَيْنِ', 'both -ayni'] },
        { cells: ['sound masculine plural', 'مُعَلِّمِينَ جُدُدًا', 'adjective: broken plural -an'] },
        { cells: ['non-human plural', 'السَّيَّارَاتِ الْجَدِيدَةَ', 'noun -āti, adjective f. sg. -a'] },
      ],
      foot: 'Website: agreement is not “copy the same symbol”. The adjective is accusative too, but its own word type decides how the case appears (as-sayyārāti l-jadīdata).',
      notes: 'PART 3 (2 min) — website “Accusative adjective agreement”. Core: rows 1–2.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 4 · time, duration and place (website models) · Develop', title: 'When? How long? Where?', ar: 'ظُرُوفُ الزَّمَانِ وَالْمَكَانِ', ltr: true,
      cols: [{ label: 'Answers', w: 2.6 }, { label: 'Website model', w: 5.6, size: 24 }, { label: 'Meaning', w: 4.13 }],
      rows: [
        { core: true, cells: ['when?', 'سَأَزُورُهُ غَدًا.', 'I will visit him tomorrow.'] },
        { core: true, cells: ['when?', 'سَافَرْنَا صَبَاحًا.', 'We travelled in the morning.'] },
        { cells: ['how long?', 'دَرَسْتُ سَاعَةً كَامِلَةً.', 'I studied for a whole hour.'] },
        { cells: ['where?', 'جَلَسْنَا أَمَامَ الْبَيْتِ.', 'We sat in front of the house.'] },
        { cells: ['how often?', 'أَتَدَرَّبُ كُلَّ يَوْمٍ.', 'I train every day.'] },
      ],
      foot: 'Website two valid routes: safartu ṣabāḥan (accusative adverb) = safartu fī ṣ-ṣabāḥi (preposition + -i). In amāma l-bayti and kulla yawmin, the first word is accusative and the second is genitive.',
      notes: 'PART 4 (3 min) — website “Time, duration and place adverbials”. Choose the natural phrase, not just the case you want to show.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 5 · links to inna and kāna (website table) · Stretch', title: 'The particle assigns the job', ar: 'مَعَ إِنَّ وَكَانَ', ltr: true,
      cols: [{ label: 'Base', w: 3.6, size: 22 }, { label: 'Changed', w: 4.6, size: 22 }, { label: 'Accusative word', w: 4.13 }],
      rows: [
        { core: true, cells: ['الدَّرْسُ مُفِيدٌ.', 'إِنَّ الدَّرْسَ مُفِيدٌ.', 'noun of inna: -a'] },
        { core: true, cells: ['الدَّرْسُ مُفِيدٌ.', 'كَانَ الدَّرْسُ مُفِيدًا.', 'predicate of kāna: -an'] },
        { cells: ['الطَّالِبَاتُ مُسْتَعِدَّاتٌ.', 'إِنَّ الطَّالِبَاتِ مُسْتَعِدَّاتٌ.', 'f. plural noun: -āti'] },
        { cells: ['الطُّلَّابُ مُسْتَعِدُّونَ.', 'كَانَ الطُّلَّابُ مُسْتَعِدِّينَ.', 'm. plural predicate: -īna'] },
      ],
      foot: 'Website: one sentence, two cases. Do not make every prominent noun match — the particle gives each word a different job.',
      notes: 'PART 5 (2 min) — website “High-value cross-links: inna and kāna”.',
    },
  ],
  quick: [
    W(/direct objects/, 0, { prompt: 'Choose the correct definite object.', feedback: 'Object and adjective: both -a.' }),
    W(/direct objects/, 1, { prompt: 'Choose the correct indefinite object.', feedback: 'Both -an.' }),
    W(/direct objects/, 2, { prompt: 'Choose the correct dual object.', feedback: 'Both -ayni.' }),
    W(/direct objects/, 3, { prompt: 'Choose the correct plural object.', feedback: 'Sound masculine plural object: -īna.' }),
  ],
  quickNote: 'website mini-check: direct objects.',
  ido: {
    title: 'Watch me mark the accusative in a visit account',
    steps: [
      { head: 'Verb', ar: 'زَارَتْ', think: 'What did she visit?' },
      { head: 'Object', ar: 'الْمَعْرِضَ', think: 'Receiver: -a.' },
      { head: 'Time', ar: 'صَبَاحًا', think: 'When? -an.' },
      { head: 'Dual object', ar: 'مُصَوِّرَيْنِ', think: 'Two: -ayni.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'VERB', e: 'ACCUSATIVE' },
    model: '{k|زَارَتْ} سَلْمَى {e|الْمَعْرِضَ} {e|صَبَاحًا}، وَشَاهَدَتْ {e|صُوَرًا جَمِيلَةً}. ثُمَّ {k|قَابَلَتْ} {e|مُصَوِّرَيْنِ مَشْهُورَيْنِ}. {k|اِشْتَرَتْ} {e|كِتَابًا} عَنِ الْفَنِّ، ثُمَّ {k|جَلَسَتْ} {e|سَاعَةً كَامِلَةً} فِي الْمَقْهَى.',
    modelEn: 'Salmā visited the exhibition in the morning and saw beautiful pictures. Then she met two famous photographers. She bought a book about art, then she sat for a whole hour in the café.',
    notes: 'Website reading-and-coding lines, extended. Website task: underline objects once and adverbials twice; explain the dual.',
  },
  models: [
    { ar: 'فَتَحَ الْحَارِسُ الْبَابَ.', en: 'The guard opened the door.', tip: 'Object: -a.' },
    { ar: 'اِشْتَرَيْتُ قَلَمًا جَدِيدًا.', en: 'I bought a new pen.', tip: 'Both -an.' },
    { ar: 'شَكَرْتُ الْمُعَلِّمِينَ.', en: 'I thanked the teachers.', tip: 'Plural: -īna.' },
    { ar: 'سَأَزُورُهُ غَدًا.', en: 'I will visit him tomorrow.', tip: 'Time: -an.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · meaning → accusative sentence (website game)', title: 'Say it with the right signals', ar: 'قُلْهَا بِالنَّصْبِ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Meaning', w: 3.6 }, { label: 'Arabic', w: 5.6, size: 22 }, { label: 'Signal', w: 3.13 }],
      rows: [
        { core: true, cells: ['I read the new book.', 'قَرَأْتُ الْكِتَابَ الْجَدِيدَ.', '-a + -a'] },
        { core: true, cells: ['I bought a new pen.', 'اِشْتَرَيْتُ قَلَمًا جَدِيدًا.', '-an + -an'] },
        { cells: ['I met two new pupils.', 'قَابَلْتُ طَالِبَيْنِ جَدِيدَيْنِ.', '-ayni + -ayni'] },
        { cells: ['I thanked the teachers.', 'شَكَرْتُ الْمُعَلِّمِينَ.', '-īna'] },
        { cells: ['I saw the new cars.', 'شَاهَدْتُ السَّيَّارَاتِ الْجَدِيدَةَ.', '-āti + -a'] },
        { core: true, cells: ['I travelled in the morning.', 'سَافَرْتُ صَبَاحًا.', 'time: -an'] },
      ],
      foot: 'Website correction process: identify the receiver or adverbial role first, then match the adjective and the number ending.',
      notes: 'WE DO (3 min) — website game items. Cover column 2.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · two accusative jobs', title: 'Object, or time / place word?', ar: 'مَفْعُولٌ بِهِ أَمْ ظَرْفٌ؟',
      categories: ['Object (what?)', 'Time / place (when? where?)'],
      items: [['الْكِتَابَ', 0], ['قَلَمًا', 0], ['الْمُعَلِّمِينَ', 0], ['طَالِبَيْنِ', 0], ['غَدًا', 1], ['صَبَاحًا', 1], ['سَاعَةً', 1], ['أَمَامَ الْبَيْتِ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Then students put one word from each column into a sentence: qaraʾtu l-kitāba ṣabāḥan.',
    },
  ],
  mistakes: [
    { wrong: 'قَرَأْتُ الْكِتَابُ.', right: 'قَرَأْتُ الْكِتَابَ.', why: 'The object takes -a (website clinic).' },
    { wrong: 'زُرْتُ مَدْرَسَةًا.', right: 'زُرْتُ مَدْرَسَةً.', why: 'No extra alif after tāʾ marbūṭa (website clinic).' },
    { wrong: 'قَابَلْتُ الطَّالِبَانِ.', right: 'قَابَلْتُ الطَّالِبَيْنِ.', why: 'Dual object: -ayni (website clinic).' },
  ],
  hints: ['What did I read?', 'Does tāʾ marbūṭa take an alif?', 'Dual object ending?'],
  practice: [
    W(/adverbials/, 0, { prompt: 'Choose “I studied for an hour.”', feedback: 'Duration: sāʿatan.' }),
    W(/adverbials/, 1, { prompt: 'Choose the accurate place phrase.', feedback: 'Amāma (-a) + al-madrasati (-i).' }),
    W(/adverbials/, 2, { prompt: 'Choose the correct phrase with kull.', feedback: 'Kulla (-a) + yawmin (-in).' }),
    W(/adverbials/, 3, { prompt: 'Choose the correct feminine plural object.', feedback: 'Noun -āti; adjective f. sg. -a.' }),
  ],
  practiceLabel: 'website mini-check: adverbials',
  read: {
    title: 'A morning at the market', label: 'website reading and coding (teacher-written account)',
    text: 'يَوْمَ السَّبْتِ زُرْتُ السُّوقَ الْقَدِيمَ مَعَ أُمِّي صَبَاحًا. اِشْتَرَتْ أُمِّي خُضَارًا طَازَجَةً وَفَوَاكِهَ لَذِيذَةً، وَاشْتَرَيْتُ أَنَا قَمِيصًا أَزْرَقَ وَحِذَاءً رِيَاضِيًّا. قَابَلْنَا جَارَيْنِ لَطِيفَيْنِ، وَسَأَلْنَاهُمَا عَنْ مَطْعَمٍ قَرِيبٍ. اِنْتَظَرْنَا أَمَامَ الْمَطْعَمِ دَقَائِقَ قَلِيلَةً، ثُمَّ أَكَلْنَا سَمَكًا مَشْوِيًّا. شَكَرْنَا الْعُمَّالَ عَلَى الْخِدْمَةِ الْمُمْتَازَةِ، وَرَجَعْنَا إِلَى الْبَيْتِ مَسَاءً.',
    glossary: [['خُضَارًا', 'vegetables'], ['طَازَجَةً', 'fresh'], ['حِذَاءً', 'shoes'], ['مَشْوِيًّا', 'grilled'], ['الْعُمَّالَ', 'the workers']],
    task: 'Website: underline the direct objects once and the time / place words twice. Explain the dual ending.',
    questions: [
      q('What did the writer buy?', ['a blue shirt and trainers', 'vegetables and fruit', 'grilled fish'], 'Qamīṣan azraqa wa-ḥidhāʾan riyāḍiyyan.'),
      q('Find a dual object.', ['جَارَيْنِ لَطِيفَيْنِ', 'الْعُمَّالَ', 'سَمَكًا'], 'Both words end in -ayni.'),
      q('Why is ḥidhāʾan written without an extra alif?', ['it ends in alif + hamza', 'it is definite', 'it is plural'], 'Website spelling rule.'),
      q('When did they go home?', ['in the evening', 'in the morning', 'at noon'], 'Masāʾan: a time word.'),
    ],
    qNote: 'Teacher-written account for the website reading-and-coding task; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: describe a visit or shopping trip', source: 'website speaking challenge',
    prompts: [
      { route: 'core', ar: 'مَاذَا اشْتَرَيْتَ آخِرَ مَرَّةٍ؟' },
      { route: 'develop', ar: 'مَنْ قَابَلْتَ فِي الْعُطْلَةِ؟' },
      { route: 'stretch', ar: 'صِفْ زِيَارَةً: مَاذَا رَأَيْتَ، وَمَتَى؟' },
    ],
    stems: [
      { route: 'core', ar: 'اِشْتَرَيْتُ ______ جَدِيدًا.' },
      { route: 'develop', ar: 'قَابَلْتُ ______ ، وَزُرْتُ ______ .' },
      { route: 'stretch', ar: 'زُرْتُ ______ صَبَاحًا، وَشَاهَدْتُ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَاذَا فَعَلْتِ فِي الْمَعْرِضِ؟', en: 'What did you do at the exhibition? (to a girl)' },
      { who: 'B', ar: 'شَاهَدْتُ لَوْحَاتٍ رَائِعَةً، وَقَابَلْتُ فَنَّانَيْنِ مَشْهُورَيْنِ. اِشْتَرَيْتُ كِتَابًا صَغِيرًا، وَبَقِيتُ هُنَاكَ سَاعَتَيْنِ.', en: 'I saw wonderful paintings, and I met two famous artists. I bought a small book, and I stayed there for two hours.' },
    ],
    notes: 'Website challenge: three direct objects, one indefinite object with an adjective, one time word, one dual or sound plural object.',
  },
  write: {
    siteTask: 'Write 100–120 Arabic words about a visit, journey, hobby session or shopping experience.',
    core: { amount: '5 sentences', task: 'A shopping trip: what you bought and saw.', how: 'ishtaraytu … · shāhadtu …' },
    develop: { amount: '8 sentences', task: 'Add a dual or plural object and two time / place words.', how: '-ayni · -īna · ghadan · amāma …' },
    stretch: { amount: '100–120 words', task: 'Website visit account with the full checklist.', how: 'Two columns: action / receiver.' },
  },
  frames: {
    core: [
      { en: 'I bought a new …', ar: 'اِشْتَرَيْتُ ______ جَدِيدًا.' },
      { en: 'I read the …', ar: 'قَرَأْتُ ______ .' },
      { en: 'I visited … in the morning', ar: 'زُرْتُ ______ صَبَاحًا.' },
      { en: 'I opened the …', ar: 'فَتَحْتُ ______ .' },
    ],
    develop: [
      { en: 'I met two … friends', ar: 'قَابَلْتُ صَدِيقَيْنِ ______ .' },
      { en: 'I thanked the …', ar: 'شَكَرْتُ ______ .' },
      { en: 'I waited in front of …', ar: 'اِنْتَظَرْتُ أَمَامَ ______ .' },
      { en: 'I practise every …', ar: 'أَتَدَرَّبُ كُلَّ ______ .' },
    ],
    bank: ['كِتَابًا', 'قَلَمًا', 'مَدْرَسَةً', 'هَدِيَّةً', 'جَمِيلًا', 'جَدِيدَيْنِ', 'الْمُعَلِّمِينَ', 'غَدًا', 'صَبَاحًا', 'مَسَاءً', 'سَاعَةً', 'أَمَامَ', 'خَلْفَ'],
  },
  stretchTask: {
    task: 'Website visit or activity account (100–120 words).',
    checklist: ['At least six direct objects.', 'Two accusative time / place words.', 'One dual or sound plural object.', 'Adjectives that agree with their objects.', 'Correct -an spelling (madrasatan, māʾan).'],
    phrases: [['زُرْتُ', 'I visited'], ['شَاهَدْتُ', 'I watched / saw'], ['اِشْتَرَيْتُ', 'I bought'], ['قَابَلْتُ', 'I met'], ['اِلْتَقَطْتُ صُوَرًا', 'I took photos'], ['مَرَّةً أُخْرَى', 'once more']],
  },
  model: {
    text: 'فِي الْعُطْلَةِ الْمَاضِيَةِ زُرْتُ مَدِينَةَ الْأُقْصُرِ مَعَ أُسْرَتِي. وَصَلْنَا مَسَاءً، وَاسْتَأْجَرْنَا غُرْفَتَيْنِ صَغِيرَتَيْنِ فِي فُنْدُقٍ قَرِيبٍ مِنَ النِّيلِ. فِي الْيَوْمِ التَّالِي زُرْنَا الْمَعَابِدَ الْقَدِيمَةَ صَبَاحًا، وَشَاهَدْنَا تَمَاثِيلَ ضَخْمَةً. شَرَحَ لَنَا الْمُرْشِدُ تَارِيخًا طَوِيلًا، وَشَكَرْنَا الْمُرْشِدِينَ عَلَى صَبْرِهِمْ. ثُمَّ رَكِبْنَا قَارِبًا شِرَاعِيًّا سَاعَةً كَامِلَةً، وَالْتَقَطْتُ صُوَرًا كَثِيرَةً. اِشْتَرَتْ أُخْتِي هَدَايَا جَمِيلَةً لِصَدِيقَاتِهَا، وَاشْتَرَيْتُ أَنَا كِتَابًا عَنِ الْفَرَاعِنَةِ. فِي الْمَسَاءِ جَلَسْنَا أَمَامَ النَّهْرِ، وَأَكَلْنَا طَعَامًا لَذِيذًا. سَأَزُورُ الْأُقْصُرَ مَرَّةً أُخْرَى، إِنْ شَاءَ اللَّهُ.',
    en: 'Last holiday I visited the city of Luxor with my family. We arrived in the evening and rented two small rooms in a hotel near the Nile. The next day we visited the ancient temples in the morning and saw huge statues. The guide explained a long history to us, and we thanked the guides for their patience. Then we rode a sailing boat for a whole hour, and I took many photos. My sister bought beautiful gifts for her friends, and I bought a book about the Pharaohs. In the evening we sat in front of the river and ate delicious food. I will visit Luxor again, in shāʾ Allāh.',
    find: ['indefinite object + adjective', 'dual object -ayni', 'plural object -īna', 'time / place word'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'My objects end in -a / -an.' },
    { route: 'core', text: 'My adjectives copy their objects.' },
    { route: 'develop', text: 'Dual objects: -ayni; plural objects: -īna.' },
    { route: 'develop', text: 'I used at least two time / place words.' },
    { route: 'stretch', text: 'No extra alif after tāʾ marbūṭa or hamza.' },
  ],
  exit: [
    W(/Final Mastery/, 3, { feedback: 'Tāʾ marbūṭa: madrasatan, no alif.' }),
    W(/Final Mastery/, 6, { feedback: 'Sound feminine plural object: -āti.' }),
    W(/Final Mastery/, 8, { feedback: 'Inna makes its noun accusative.' }),
  ],
  mastery: false,
  prep: {
    words: [['الْكَسْرَةُ', 'kasra: the -i ending', '—'], ['الْجَرُّ', 'the genitive case', '—'], ['حَرْفُ الْجَرِّ', 'preposition', '—'], ['الْمُضَافُ إِلَيْهِ', 'second noun of an iḍāfa', '—'], ['فِي الْبَيْتِ', 'in the house', '—']],
    questionEn: 'After fī, min and ilā the noun ends in -i: fī l-bayti. What else do you think can make a noun take -i?',
    questionAr: 'ذَهَبْتُ إِلَى الْمَدْرَسَةِ — لِمَاذَا «ـِ»؟',
    homework: {
      core: 'Write five sentences about things you bought; mark each object.',
      develop: 'Write one sentence each with -ayni, -īna and a time word.',
      stretch: 'Website visit account (100–120 words).',
    },
    wordsSource: 'The five words prepare GM-CASE-03 (website: the genitive case).',
  },
  remember: 'Remember: accusative (-a / -an) = the object, many time / place words, the noun of inna and the predicate of kāna · dual -ayni · plural -īna · feminine plural -āti (kasra!) · -an takes a supporting alif — but not after tāʾ marbūṭa or hamza.',
});

module.exports = { meta, slides };
