'use strict';
/* GM-NVS-04 · Negation with Laysa — website: Mastery & Revision › Grammar › Non-Verbal Sentences › Lesson 4 (laysa negates a present
 * nominal sentence and works like kāna: noun -u, one-word predicate -an, place phrases unchanged; conjugating laysa: lastu … lasna;
 * verb-first vs subject-first with human plurals; state negation (laysa) vs action negation (lā, mā / lam, lan); negative states across
 * time: lam yakun (past), lan yakūna (future); Stretch: the extra bi- (laysa l-amru bi-ṣaʿbin); clinic). Quizzes are the website’s
 * (Entry, Agreement, Final Mastery). Colour code: teal = negative word, blue = noun (-u), orange = predicate (-an). I-do, positive →
 * negative drill, “which system?” sorter, reading, frames and the extended model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__11-non-verbal-sentences__grammar-mastery-04-laysa-negation';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-NVS-04', fileTitle: 'Laysa_Negation', title: 'Negation with Laysa', arabic: 'نَفْيُ الْجُمْلَةِ الِاسْمِيَّةِ بِـلَيْسَ',
  focus: 'Laysa = “is not”: laysa Aḥmadu ṭabīban (Aḥmad is not a doctor), lastu fī l-bayt (I am not at home). It works like kāna. For actions use lā (lā adhhabu); for past and future states use lam yakun and lan yakūna.',
  icon: 'FaBan',
});

const slides = G.gmLesson({
  code: 'GM-NVS-04', site: KEY,
  support: `• Core: laysa / laysat / lastu with identity, description and location (lastu fī l-bayt, laysat mutʿabatan). Develop: the full laysa table (lasnā, laysū, lasna) and human plural order (laysa ṭ-ṭullābu vs aṭ-ṭullābu laysū). Stretch: choose the right negative system — laysa (state) vs lā (action), lam yakun (past state), lan yakūna (future state).
• Website key contrast: laysa akhī fī l-maktab denies a LOCATION; lā yaʿmalu akhī fī l-maktab denies an ACTION. Never laysa + verb (laysa adhhabu).
• Colour code: teal = negative word, blue = noun (-u), orange = predicate (-an). Final lesson of the area: revises GM-NVS-01 to 03 and GM-VS-04 negation (mā, lam, lan).`,
  teach: 'Laysa like kāna; conjugation; state or action?; across time.',
  wedo: 'Make it negative; which system?; repair.',
  next: { nextCode: 'GM-CASE-01', nextTitle: 'The Nominative Case', nextAr: 'حَالَةُ الرَّفْعِ' },
  doNow: {
    questions: [
      W(/Entry Check/, 0, { prompt: 'Choose “He is not a doctor.”', feedback: 'Laysa + ṭabīban (-an).' }),
      W(/Entry Check/, 1, { prompt: 'Choose “She is not tired.”', feedback: 'Laysat + mutʿabatan.' }),
      W(/Entry Check/, 2, { prompt: 'Choose “I am not at home.”', feedback: 'I am not = lastu.' }),
      W(/Entry Check/, 4, { feedback: 'Lā + present verb = action.' }),
      W(/Entry Check/, 5, { prompt: 'Choose “He was not at school.”', feedback: 'Past state: lam yakun.' }),
    ],
    keyIdea: { text: 'Laysa works like kāna: noun -u, predicate -an. State → laysa; action → lā.', ar: '{k|لَيْسَ} {w|الْجَوُّ} {p|بَارِدًا} ‖ {k|لَا} أَذْهَبُ' },
    retrieves: 'The website Entry Check — GM-NVS-03 kāna pattern (-an predicates) and GM-VS-04 negatives (lā, lam, lan).',
  },
  objectives: ['Say what someone or something is not.', 'Use the right form of laysa.', 'Choose laysa for states and lā for actions.', 'Negate states in the past and future.'],
  routes: {
    core: ['I write laysa … -an and lastu fī …', 'I use laysa, laysat, lastu.'],
    develop: ['I use lasnā, laysū, lasna.', 'I choose laysa or lā.'],
    stretch: ['I use lam yakun and lan yakūna.', 'I correct three myths in 100–120 words.'],
  },
  terms: {
    items: [
      { ar: 'النَّفْيُ', en: 'negation', note: 'لَيْسَ · لَا · لَمْ · لَنْ' },
      { ar: 'لَيْسَ', en: 'is not (state)', note: 'لَيْسَ طَبِيبًا' },
      { ar: 'نَفْيُ الْحَالَةِ', en: 'negating a state', note: 'لَسْتُ مُتْعَبًا' },
      { ar: 'نَفْيُ الْفِعْلِ', en: 'negating an action', note: 'لَا أَذْهَبُ' },
      { ar: 'لَمْ يَكُنْ', en: 'was not (past state)', note: 'لَمْ يَكُنْ مُتْعَبًا' },
      { ar: 'لَنْ يَكُونَ', en: 'will not be (future state)', note: 'لَنْ يَكُونَ بَارِدًا' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · negating the present nominal sentence (website table)', title: 'Laysa works like kāna', ar: 'لَيْسَ + اسْمُهَا الْمَرْفُوعُ + خَبَرُهَا الْمَنْصُوبُ', ltr: true,
      cols: [{ label: 'Positive', w: 3.8, size: 24 }, { label: 'Negative', w: 4.6, size: 24 }, { label: 'Meaning', w: 3.93 }],
      rows: [
        { core: true, cells: ['أَحْمَدُ طَبِيبٌ.', 'لَيْسَ أَحْمَدُ طَبِيبًا.', 'Aḥmad is not a doctor.'] },
        { core: true, cells: ['الْغُرْفَةُ كَبِيرَةٌ.', 'لَيْسَتِ الْغُرْفَةُ كَبِيرَةً.', 'The room is not large.'] },
        { core: true, cells: ['مَرْيَمُ فِي الْبَيْتِ.', 'لَيْسَتْ مَرْيَمُ فِي الْبَيْتِ.', 'Maryam is not at home.'] },
        { cells: ['الْجَوُّ بَارِدٌ.', 'لَيْسَ الْجَوُّ بَارِدًا.', 'The weather is not cold.'] },
        { cells: ['الطُّلَّابُ مُسْتَعِدُّونَ.', 'لَيْسَ الطُّلَّابُ مُسْتَعِدِّينَ.', 'The students are not ready.'] },
      ],
      foot: 'Website case-aware pattern: laysa is a negative member of the kāna family — the noun stays -u, a one-word predicate becomes -an. A place phrase keeps its own case: laysat Maryamu fī l-bayti.',
      notes: 'PART 1 (3 min) — website “Negating the present nominal sentence” (rows 4–5 teacher-added). Same change as kāna, but the meaning is present + not.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · conjugating laysa (website table)', title: 'Laysa changes with the person', ar: 'تَصْرِيفُ لَيْسَ', ltr: true,
      cols: [{ label: 'Person', w: 2.8 }, { label: 'Form', w: 3.2, size: 26 }, { label: 'Website model', w: 6.33, size: 24 }],
      rows: [
        { core: true, cells: ['I', 'لَسْتُ', 'لَسْتُ مُتْعَبَةً.'] },
        { cells: ['you (m. · f.)', 'لَسْتَ · لَسْتِ', 'لَسْتِ مُتَأَخِّرَةً.'] },
        { core: true, cells: ['he / it (m.)', 'لَيْسَ', 'لَيْسَ مَشْغُولًا.'] },
        { core: true, cells: ['she / it (f.)', 'لَيْسَتْ', 'لَيْسَتْ مَشْغُولَةً.'] },
        { cells: ['we', 'لَسْنَا', 'لَسْنَا فِي الْبَيْتِ.'] },
        { cells: ['they (m. · f.)', 'لَيْسُوا · لَسْنَ', 'لَيْسُوا مُسْتَعِدِّينَ.'] },
      ],
      foot: 'Website: order matters with human plurals — laysa ṭ-ṭullābu fī l-faṣl (verb first, singular) but aṭ-ṭullābu laysū fī l-faṣl (subject first, full agreement). The pronoun disappears: lastu, never laysa anā.',
      notes: 'PART 2 (3 min) — website “Conjugating laysa”. Like kāna, the long vowel shortens before an ending: laysa → lastu, lasnā. Female group: lasna mustaʿiddātin.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · state negation vs action negation (website table) · Develop', title: 'A state or an action? Choose the tool', ar: 'نَفْيُ الْحَالَةِ وَنَفْيُ الْفِعْلِ', ltr: true,
      cols: [{ label: 'What is negated?', w: 3.2 }, { label: 'Tool', w: 2.6 }, { label: 'Website model', w: 6.53, size: 22 }],
      rows: [
        { core: true, cells: ['present identity / description', 'laysa', 'لَيْسَ أَخِي طَبِيبًا.'] },
        { core: true, cells: ['present location', 'laysa', 'لَيْسَ أَخِي فِي الْمَكْتَبِ.'] },
        { core: true, cells: ['present / habitual action', 'lā + present verb', 'لَا يَعْمَلُ أَخِي يَوْمَ الْجُمُعَةِ.'] },
        { cells: ['past action', 'lam + present form', 'لَمْ يَعْمَلْ أَخِي أَمْسِ.'] },
        { cells: ['future action', 'lan + present form', 'لَنْ يَعْمَلَ أَخِي غَدًا.'] },
      ],
      foot: 'Website key contrast: laysa akhī fī l-maktab denies where he is; lā yaʿmalu akhī fī l-maktab denies what he does. Rule of thumb: if there is a verb, do not use laysa.',
      notes: 'PART 3 (3 min) — website “State negation versus action negation”. Past action can also use mā + past (mā ʿamila) — GM-VS-04.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 4 · negative states across time (website table) · Stretch', title: 'Was not · is not · will not be', ar: 'النَّفْيُ عَبْرَ الزَّمَنِ', ltr: true,
      cols: [{ label: 'Time', w: 2.0 }, { label: 'Model', w: 6.6, size: 22 }, { label: 'Meaning', w: 3.73 }],
      rows: [
        { core: true, cells: ['present', 'لَيْسَ الطَّرِيقُ مُزْدَحِمًا.', 'The road is not crowded.'] },
        { cells: ['past', 'لَمْ يَكُنِ الطَّرِيقُ مُزْدَحِمًا أَمْسِ.', 'The road was not crowded yesterday.'] },
        { cells: ['future', 'لَنْ يَكُونَ الطَّرِيقُ مُزْدَحِمًا غَدًا.', 'The road will not be crowded tomorrow.'] },
        { cells: ['past (f.)', 'لَمْ تَكُنِ الْغُرْفَةُ نَظِيفَةً.', 'The room was not clean.'] },
        { cells: ['future (f.)', 'لَنْ تَكُونَ الْمُشْكِلَةُ صَعْبَةً.', 'The problem will not be difficult.'] },
      ],
      foot: 'Website: laysa is for the PRESENT only — never laysa … amsi. Website Stretch: formal Arabic may add bi- to the predicate: laysa l-amru bi-ṣaʿbin. The core target stays laysa l-amru ṣaʿban.',
      notes: 'PART 4 (2 min) — website “Negative states across time” (rows 4–5 teacher-added). Lam yakun / lan yakūna use the present of kāna, so the predicate is still -an.',
    },
  ],
  quick: [
    W(/Agreement Check/, 0, { prompt: 'Choose “The room is not large.”', feedback: 'Laysat + al-ghurfatu + kabīratan.' }),
    W(/Agreement Check/, 1, { prompt: 'Choose “The students are not in the classroom.”', feedback: 'Verb first → laysa; place phrase unchanged.' }),
    W(/Agreement Check/, 2, { feedback: 'Students first → laysū.' }),
    W(/Agreement Check/, 3, { prompt: 'Choose “You (f.) are not late.”', feedback: 'You (f.) = lasti + mutaʾakhkhiratan.' }),
  ],
  quickNote: 'website Agreement Check.',
  ido: {
    title: 'Watch me correct a myth',
    steps: [
      { head: 'Myth', ar: 'الْمَدِينَةُ صَاخِبَةٌ', think: 'Some people think…' },
      { head: 'State or action?', ar: 'حَالَةٌ', think: 'A description: state.' },
      { head: 'Form', ar: 'لَيْسَتْ', think: 'City: feminine.' },
      { head: 'Predicate', ar: 'صَاخِبَةً', think: '-un becomes -an.' },
    ],
    legend: ['k', 'w', 'p'], legendLabels: { k: 'NEGATIVE', w: 'NOUN -u', p: 'PRED. -an' },
    model: 'يَظُنُّ بَعْضُ النَّاسِ أَنَّ الْمَدِينَةَ صَاخِبَةٌ دَائِمًا، لَكِنَّهَا {k|لَيْسَتْ} {p|صَاخِبَةً} فِي الصَّبَاحِ الْبَاكِرِ. {k|لَيْسَ} {w|السُّوقُ} {p|بَعِيدًا}. {k|لَمْ يَكُنِ} {w|الطَّقْسُ} {p|جَمِيلًا} أَمْسِ، لَكِنَّهُ {k|لَنْ يَكُونَ} {p|بَارِدًا} غَدًا. {k|لَا} يَفْتَحُ الْمَتْحَفُ أَبْوَابَهُ يَوْمَ الِاثْنَيْنِ.',
    modelEn: 'Some people think the city is always noisy, but it is not noisy early in the morning. The market is not far. The weather was not nice yesterday, but it will not be cold tomorrow. The museum does not open on Mondays.',
    notes: 'Website skills-workshop lines, extended. Last sentence: an action → lā, not laysa.',
  },
  models: [
    { ar: 'لَيْسَ أَحْمَدُ طَبِيبًا.', en: 'Aḥmad is not a doctor.', tip: 'Identity: -an.' },
    { ar: 'لَسْتُ فِي الْبَيْتِ.', en: 'I am not at home.', tip: 'Place: no change.' },
    { ar: 'لَا يَعْمَلُ أَخِي يَوْمَ الْجُمُعَةِ.', en: 'My brother does not work on Fridays.', tip: 'Action: lā.' },
    { ar: 'لَمْ يَكُنِ الطَّرِيقُ مُزْدَحِمًا.', en: 'The road was not crowded.', tip: 'Past state.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · make it negative (website game)', title: 'Positive → negative', ar: 'اِنْفِ الْجُمْلَةَ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Positive', w: 4.3, size: 22 }, { label: 'Negative', w: 4.6, size: 22 }, { label: 'Watch', w: 3.43 }],
      rows: [
        { core: true, cells: ['هُوَ طَبِيبٌ.', 'لَيْسَ طَبِيبًا.', '-un becomes -an'] },
        { core: true, cells: ['هِيَ فِي الْبَيْتِ.', 'لَيْسَتْ فِي الْبَيْتِ.', 'place: no change'] },
        { core: true, cells: ['أَنَا مَشْغُولَةٌ.', 'لَسْتُ مَشْغُولَةً.', 'I: lastu'] },
        { cells: ['نَحْنُ مُتَأَخِّرُونَ.', 'لَسْنَا مُتَأَخِّرِينَ.', '-ūna becomes -īna'] },
        { cells: ['الطُّلَّابُ فِي الْمَكْتَبَةِ.', 'الطُّلَّابُ لَيْسُوا فِي الْمَكْتَبَةِ.', 'subject first: laysū'] },
        { cells: ['كَانَ مُتْعَبًا.', 'لَمْ يَكُنْ مُتْعَبًا.', 'past: lam yakun'] },
      ],
      foot: 'The pronoun disappears into laysa: huwa → laysa, hiya → laysat, anā → lastu, naḥnu → lasnā.',
      notes: 'WE DO (3 min) — website game items. Cover column 2.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · website game · which negative system?', title: 'State, action, past or future?', ar: 'أَيُّ أَدَاةِ نَفْيٍ؟',
      categories: ['Present state', 'Action', 'Past state', 'Future state'],
      items: [['لَيْسَ الطَّقْسُ جَمِيلًا.', 0], ['لَسْتُ فِي الْمَدْرَسَةِ.', 0], ['لَا أَذْهَبُ الْيَوْمَ.', 1], ['لَا يَعْمَلُ الْمَكْتَبُ يَوْمَ الْجُمُعَةِ.', 1], ['لَمْ يَكُنْ مُتْعَبًا.', 2], ['لَمْ يَكُنِ الطَّرِيقُ مُزْدَحِمًا.', 2], ['لَنْ يَكُونَ الطَّقْسُ بَارِدًا.', 3], ['لَنْ تَكُونَ الْمُشْكِلَةُ صَعْبَةً.', 3]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min) — website Entry and Final Mastery items. Website: first decide state or action, then choose the tool.',
    },
  ],
  mistakes: [
    { wrong: 'لَيْسَ هِيَ مُتْعَبَةٌ.', right: 'لَيْسَتْ مُتْعَبَةً.', why: 'Conjugate laysa; predicate -an (website clinic).' },
    { wrong: 'لَيْسَ أَذْهَبُ الْيَوْمَ.', right: 'لَا أَذْهَبُ الْيَوْمَ.', why: 'An action needs lā (website clinic).' },
    { wrong: 'لَيْسَ الطَّقْسُ بَارِدًا أَمْسِ.', right: 'لَمْ يَكُنِ الطَّقْسُ بَارِدًا أَمْسِ.', why: 'Past state: lam yakun (website clinic).' },
  ],
  hints: ['Which form for “she”?', 'Is there a verb?', 'Present or past?'],
  practice: [
    W(/Final Mastery/, 1, { feedback: 'Noun -u, predicate -an.' }),
    W(/Final Mastery/, 2, { feedback: 'Laysati s-sayyāratu sarīʿatan.' }),
    W(/Final Mastery/, 4, { prompt: 'Choose “They (f.) are not ready.”', feedback: 'Lasna + mustaʿiddātin.' }),
    W(/Final Mastery/, 6, { feedback: 'Lā + present verb.' }),
  ],
  practiceLabel: 'website Final Mastery check',
  read: {
    title: 'Myths about our city', label: 'website skills workshop (teacher-written myth-buster)',
    text: 'يَعْتَقِدُ كَثِيرٌ مِنَ السُّيَّاحِ أَنَّ مَدِينَتَنَا حَارَّةٌ طُولَ السَّنَةِ، لَكِنَّهَا لَيْسَتْ حَارَّةً فِي الشِّتَاءِ؛ الْجَوُّ لَطِيفٌ وَبَارِدٌ أَحْيَانًا. يَظُنُّونَ أَيْضًا أَنَّ الْأَسْوَاقَ غَالِيَةٌ، وَلَكِنَّ الْأَسْعَارَ لَيْسَتْ مُرْتَفِعَةً فِي السُّوقِ الْقَدِيمِ. الْمَتَاحِفُ لَيْسَتْ مُمِلَّةً، فَهِيَ مَلِيئَةٌ بِالْقِصَصِ. لَا تَفْتَحُ الْمَحَلَّاتُ يَوْمَ الْجُمُعَةِ صَبَاحًا. لَمْ يَكُنِ الْمَطَارُ كَبِيرًا قَبْلَ عَشْرِ سَنَوَاتٍ، لَكِنَّهُ الْآنَ ضَخْمٌ. فِي الْمُسْتَقْبَلِ لَنْ يَكُونَ الطَّرِيقُ إِلَى الْمَطَارِ مُزْدَحِمًا، لِأَنَّ الْقِطَارَ الْجَدِيدَ سَيَصِلُ إِلَيْهِ.',
    glossary: [['السُّيَّاحِ', 'tourists'], ['طُولَ السَّنَةِ', 'all year'], ['مُمِلَّةً', 'boring'], ['الْمَحَلَّاتُ', 'the shops'], ['ضَخْمٌ', 'huge']],
    task: 'Website paper route: underline each negative and label it state, action, past or future.',
    questions: [
      q('Is the city hot in winter?', ['no — it is mild, sometimes cold', 'yes, very hot', 'we are not told'], 'Laysat ḥārratan fī sh-shitāʾ.'),
      q('Which sentence negates an action?', ['لَا تَفْتَحُ الْمَحَلَّاتُ', 'لَيْسَتْ مُمِلَّةً', 'لَمْ يَكُنِ الْمَطَارُ كَبِيرًا'], 'Lā + present verb.'),
      q('What was the airport like ten years ago?', ['not big', 'very big', 'closed'], 'Lam yakun kabīran.'),
      q('Why will the road to the airport not be crowded?', ['a new train will reach the airport', 'the airport will close', 'there will be fewer tourists'], 'Li-anna l-qiṭāra l-jadīda sa-yaṣilu ilayh.'),
    ],
    qNote: 'Teacher-written text for the website “correct three misconceptions” task; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: set the record straight', source: 'website skills workshop',
    prompts: [
      { route: 'core', ar: 'هَلْ أَنْتَ مُتْعَبٌ الْيَوْمَ؟' },
      { route: 'develop', ar: 'هَلْ مَدِينَتُكَ كَبِيرَةٌ وَمُزْدَحِمَةٌ؟' },
      { route: 'stretch', ar: 'صَحِّحْ فِكْرَةً خَاطِئَةً عَنْ بَلَدِكَ.' },
    ],
    stems: [
      { route: 'core', ar: 'لَا، لَسْتُ ______ .' },
      { route: 'develop', ar: 'مَدِينَتِي لَيْسَتْ ______ ، لَكِنَّهَا ______ .' },
      { route: 'stretch', ar: 'يَظُنُّ النَّاسُ أَنَّ ______ ، لَكِنَّهُ لَيْسَ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'هَلِ الِامْتِحَانُ صَعْبٌ؟', en: 'Is the exam hard?' },
      { who: 'B', ar: 'لَا، لَيْسَ صَعْبًا، لَكِنَّهُ طَوِيلٌ. لَمْ يَكُنِ الِامْتِحَانُ الْمَاضِي سَهْلًا، وَلَكِنَّ هَذَا لَنْ يَكُونَ مُشْكِلَةً.', en: 'No, it is not hard, but it is long. The last exam was not easy, but this one will not be a problem.' },
    ],
    notes: 'Website: say clearly what someone or something is not, where it is not and how the negative state changes across time.',
  },
  write: {
    siteTask: 'Write 100–120 Arabic words about a place, person or activity. State three things that are true and correct three things that are not true.',
    core: { amount: '5 sentences', task: 'Three things you or your school are NOT.', how: 'lastu … · laysat madrasatī …' },
    develop: { amount: '8 sentences', task: 'Add one action negative and one past state.', how: 'lā adhhabu · lam yakun …' },
    stretch: { amount: '100–120 words', task: 'Website myth-buster with the full checklist.', how: 'Truth / myth table first.' },
  },
  frames: {
    core: [
      { en: 'I am not …', ar: 'لَسْتُ ______ .' },
      { en: 'My school is not …', ar: 'لَيْسَتْ مَدْرَسَتِي ______ .' },
      { en: 'My brother is not in …', ar: 'لَيْسَ أَخِي فِي ______ .' },
      { en: 'We are not …', ar: 'لَسْنَا ______ .' },
    ],
    develop: [
      { en: 'I don’t go to … on Friday', ar: 'لَا أَذْهَبُ إِلَى ______ يَوْمَ الْجُمُعَةِ.' },
      { en: 'The weather was not … yesterday', ar: 'لَمْ يَكُنِ الطَّقْسُ ______ أَمْسِ.' },
      { en: 'The exam will not be …', ar: 'لَنْ يَكُونَ الِامْتِحَانُ ______ .' },
      { en: 'People think …, but it is not …', ar: 'يَظُنُّ النَّاسُ أَنَّ ______ ، لَكِنَّهُ لَيْسَ ______ .' },
    ],
    bank: ['لَيْسَ', 'لَيْسَتْ', 'لَسْتُ', 'لَسْنَا', 'لَيْسُوا', 'لَا', 'لَمْ يَكُنْ', 'لَنْ يَكُونَ', 'صَعْبًا', 'بَعِيدًا', 'مُزْدَحِمًا', 'مُمِلًّا', 'غَالِيًا'],
  },
  stretchTask: {
    task: 'Website task (100–120 words): a place, person or activity — three truths and three corrected myths.',
    checklist: ['At least three forms of laysa.', 'One present action negative with lā.', 'One lam yakun (past state).', 'One lan yakūna (future state).', 'Every one-word predicate after laysa in -an.'],
    phrases: [['يَظُنُّ النَّاسُ أَنَّ', 'people think that'], ['فِي الْحَقِيقَةِ', 'in fact'], ['لَيْسَ صَحِيحًا', 'it is not true'], ['أَبَدًا', 'not at all / never'], ['لَكِنَّهُ', 'but it / he'], ['دَائِمًا', 'always']],
  },
  model: {
    text: 'يَظُنُّ بَعْضُ النَّاسِ أَنَّ الْمَدْرَسَةَ عَلَى الْإِنْتَرْنِتِ سَهْلَةٌ وَمُمِلَّةٌ، لَكِنَّهَا لَيْسَتْ سَهْلَةً وَلَيْسَتْ مُمِلَّةً أَبَدًا. أَنَا طَالِبَةٌ فِي مَدْرَسَةٍ عَلَى الْإِنْتَرْنِتِ مُنْذُ سَنَتَيْنِ. لَسْتُ وَحِيدَةً، فَصَفِّي مَلِيءٌ بِطَالِبَاتٍ مِنْ بُلْدَانٍ كَثِيرَةٍ. الدُّرُوسُ لَيْسَتْ قَصِيرَةً، وَالْوَاجِبَاتُ كَثِيرَةٌ. لَا نَجْلِسُ أَمَامَ الشَّاشَةِ طُولَ الْيَوْمِ، لِأَنَّ الْمُعَلِّمَاتِ يُعْطِينَنَا اسْتِرَاحَاتٍ. فِي الْبِدَايَةِ لَمْ يَكُنِ الْأَمْرُ سَهْلًا؛ لَمْ تَكُنِ التِّقْنِيَّةُ وَاضِحَةً لِي، وَكُنْتُ أَخْجَلُ مِنَ الْكَلَامِ. الْآنَ لَسْتُ خَجُولَةً، وَأُشَارِكُ فِي كُلِّ دَرْسٍ. صَدِيقَاتِي لَسْنَ بَعِيدَاتٍ عَنِّي فِي الْحَقِيقَةِ، فَنَتَكَلَّمُ كُلَّ يَوْمٍ. فِي السَّنَةِ الْقَادِمَةِ لَنْ تَكُونَ الِامْتِحَانَاتُ سَهْلَةً، لَكِنَّنِي لَنْ أَكُونَ خَائِفَةً، لِأَنَّنِي مُسْتَعِدَّةٌ.',
    en: 'Some people think that online school is easy and boring, but it is not easy and not boring at all. I have been a student at an online school for two years. I am not lonely: my class is full of girls from many countries. The lessons are not short, and there is a lot of homework. We do not sit in front of the screen all day, because the teachers give us breaks. At the beginning it was not easy; the technology was not clear to me, and I used to be shy about speaking. Now I am not shy, and I take part in every lesson. My friends are not really far from me — we talk every day. Next year the exams will not be easy, but I will not be afraid, because I am ready.',
    find: ['laysat + -an', 'lastu', 'lā + present (action)', 'lam yakun / lan yakūna'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'After laysa, my one-word predicates end in -an.' },
    { route: 'core', text: 'I used the right form: lastu, laysa, laysat.' },
    { route: 'develop', text: 'I used lā (not laysa) before verbs.' },
    { route: 'develop', text: 'Place phrases after laysa did not change.' },
    { route: 'stretch', text: 'Past state → lam yakun; future state → lan yakūna.' },
  ],
  exit: [
    W(/Final Mastery/, 5, { feedback: 'Laysa + place phrase (no change).' }),
    W(/Final Mastery/, 7, { feedback: 'Past state: lam yakun.' }),
    W(/Final Mastery/, 8, { feedback: 'Future state: lan yakūna.' }),
  ],
  mastery: false,
  prep: {
    words: [['الضَّمَّةُ', 'ḍamma: the -u ending', '—'], ['الرَّفْعُ', 'the nominative case', '—'], ['الْفَاعِلُ', 'the subject (doer)', '—'], ['الْمُبْتَدَأُ', 'the topic', '—'], ['الْخَبَرُ', 'the predicate', '—']],
    questionEn: 'Look back at this unit: which words always ended in -u? (Hint: the doer of a verb, the topic, the noun of kāna and laysa.)',
    questionAr: 'الطَّالِبُ مُجْتَهِدٌ — أَيْنَ الضَّمَّةُ؟',
    homework: {
      core: 'Write five laysa sentences about yourself and your school.',
      develop: 'Write three state negatives (laysa) and three action negatives (lā).',
      stretch: 'Website myth-buster (100–120 words).',
    },
    wordsSource: 'The five words prepare GM-CASE-01 (website: the nominative case).',
  },
  remember: 'Remember: laysa = is not (present state) and works like kāna: noun -u, predicate -an · lastu, lasta, lasti, laysa, laysat, lasnā, laysū, lasna · actions → lā + present · past state → lam yakun · future state → lan yakūna.',
});

module.exports = { meta, slides };
