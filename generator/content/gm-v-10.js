'use strict';
/* GM-V-10 · Subjunctive — website: Mastery & Revision › Grammar › Verbs › Lesson 10 (triggers an · lan · kay / li-kay · ḥattā; regular
 * singular ḍamma → fatḥa; the five verbs drop their nūn; the feminine plural -na never changes; weak verbs keep their final yāʾ / wāw with a
 * fatḥa (lan yarmiya · lan yadʿuwa) — unlike the jussive; final alif stays (an arā); functions: want, need, purpose, endpoint; clinic).
 * Website model corrected: أَحْقِّقَ → أُحَقِّقَ. Quizzes are the website’s (Entry, Particle and Purpose, Five-Verb, Weak Subjunctive,
 * Functional, Mastery) plus the website transformer game; items whose options carry “only” / “always” notes are skipped. Sorter, I-do,
 * frames, reading and model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__07-verbs__grammar-mastery-10-subjunctive';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-V-10', fileTitle: 'Subjunctive', title: 'Subjunctive', arabic: 'الْمُضَارِعُ الْمَنْصُوبُ',
  focus: 'After an (to), lan (will not), li-kay (in order to) and ḥattā (until / so that) the present verb changes: ḍamma → fatḥa, the five verbs drop their nūn, and weak verbs keep their last letter with a fatḥa.',
  icon: 'FaBullseye',
});

const slides = G.gmLesson({
  code: 'GM-V-10', site: KEY,
  support: `• Core: أَنْ and لَنْ with singular forms (أُرِيدُ أَنْ أَدْرُسَ · لَنْ أَتَأَخَّرَ). Develop: the five verbs (أَنْ تَكْتُبِي · أَنْ يَكْتُبُوا · أَنْ يَكْتُبَا) and purpose with لِكَيْ. Stretch: weak verbs (لَنْ يَرْمِيَ · لَنْ يَدْعُوَ) vs the jussive (لَمْ يَرْمِ · لَمْ يَدْعُ) and endpoint ḥattā.
• Website warning: do NOT remove the nūn of the feminine plural (يَكْتُبْنَ stays يَكْتُبْنَ) — it is not one of the five verbs.
• Links: lan was met in GM-V-06; the jussive in GM-V-07 and V-08. This lesson completes the three moods of the present.`,
  teach: 'Triggers; regular and five-verb endings; weak verbs; functions.',
  wedo: 'Transform; sort subjunctive / jussive; repair.',
  next: { nextCode: 'GM-V-11', nextTitle: 'Passive Voice', nextAr: 'الْمَبْنِيُّ لِلْمَجْهُولِ فِي الْمَاضِي وَالْمُضَارِعِ' },
  doNow: {
    pick: [0, 1, 2, 4, 5],
    fb: { 0: 'An governs the subjunctive present: fatḥa.', 1: 'Lan governs the subjunctive.', 2: 'Li-kay introduces purpose and a subjunctive verb.', 3: 'The nūn drops from the five-verb form after an.', 4: 'Meaning decides how ḥattā works; learn clear examples.' },
    keyIdea: { text: 'Trigger (an · lan · li-kay · ḥattā) → present verb in the subjunctive: fatḥa, or the nūn drops.', ar: 'أُرِيدُ {k|أَنْ أَدْرُسَ} ‖ أُرِيدُكِ {e|أَنْ تَكْتُبِي}' },
    retrieves: 'The website Entry Check (questions 1, 2, 3, 5 and 6) — the GM-V-09 prep words an, li-kay, yajibu and ḥattā.',
  },
  objectives: ['Recognise the four subjunctive triggers.', 'Change ḍamma to fatḥa after a trigger.', 'Drop the nūn of the five verbs.', 'Keep weak verbs whole in the subjunctive.'],
  routes: {
    core: ['I say I want to … with an + fatḥa.', 'I say I will not … with lan + fatḥa.'],
    develop: ['I drop the nūn: an taktubī, an yaktubū.', 'I give a purpose with li-kay.'],
    stretch: ['I write lan yarmiya and lam yarmi correctly.', 'I use ḥattā for an endpoint.'],
  },
  terms: {
    items: [
      { ar: 'الْمَنْصُوبُ', en: 'subjunctive', note: 'أَدْرُسَ' },
      { ar: 'أَنْ', en: 'to / that', note: 'أُرِيدُ أَنْ' },
      { ar: 'لِكَيْ', en: 'in order to', note: 'لِكَيْ أَنْجَحَ' },
      { ar: 'حَتَّى', en: 'until / so that', note: 'حَتَّى يَصِلَ' },
      { ar: 'يَجِبُ أَنْ', en: 'must / it is necessary to', note: 'يَجِبُ أَنْ نَحْمِيَ' },
      { ar: 'الْأَفْعَالُ الْخَمْسَةُ', en: 'the five verbs', note: 'ـَانِ · ـُونَ · ـِينَ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · the main subjunctive triggers (website table)', title: 'Four little words that change the verb', ar: 'أَدَوَاتُ النَّصْبِ', ltr: true,
      cols: [{ label: 'Particle', w: 2.2, size: 26 }, { label: 'Function', w: 4.0 }, { label: 'Model (website)', w: 6.13, size: 22 }],
      rows: [
        { core: true, cells: ['أَنْ', 'to / that — want, like, need, try', 'أُرِيدُ أَنْ أَدْرُسَ.'] },
        { core: true, cells: ['لَنْ', 'will not (GM-V-06)', 'لَنْ أَتَأَخَّرَ.'] },
        { cells: ['لِكَيْ', 'so that / in order to', 'أَتَدَرَّبُ لِكَيْ أَتَحَسَّنَ.'] },
        { cells: ['حَتَّى', 'until / so that — a clear endpoint', 'أَنْتَظِرُ حَتَّى يَصِلَ الْقِطَارُ.'] },
      ],
      foot: 'Website core sign: in regular singular forms the final ḍamma becomes fatḥa — adrusu → an adrusa.',
      notes: 'PART 1 (3 min) — website “The main subjunctive triggers”. Learn each particle with its model.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 2 · regular and five-verb endings (website table)', title: 'Fatḥa — or the nūn drops', ar: 'نِهَايَاتُ الْمَنْصُوبِ', ltr: true,
      cols: [{ label: 'Indicative', w: 3.0, size: 26 }, { label: 'Subjunctive', w: 3.6, size: 26 }, { label: 'Reason', w: 5.73 }],
      rows: [
        { core: true, cells: ['يَكْتُبُ', 'أَنْ يَكْتُبَ', 'regular singular: ḍamma → fatḥa'] },
        { core: true, cells: ['تَكْتُبِينَ', 'أَنْ تَكْتُبِي', 'five verbs: nūn drops'] },
        { cells: ['يَكْتُبَانِ', 'أَنْ يَكْتُبَا', 'dual: nūn drops'] },
        { core: true, cells: ['يَكْتُبُونَ', 'أَنْ يَكْتُبُوا', 'plural: nūn drops (+ silent alif)'] },
        { cells: ['يَكْتُبْنَ', 'أَنْ يَكْتُبْنَ', 'feminine plural: NO change'] },
      ],
      foot: 'Website: the “five verbs” end in -āni, -ūna, -īna and lose the nūn. The feminine plural -na is part of the verb — never remove it.',
      notes: 'PART 2 (4 min) — website “Regular and five-verb endings”.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · weak verbs: subjunctive vs jussive (website table) · Stretch', title: 'Don’t copy the jussive rule', ar: 'الْمُعْتَلُّ فِي النَّصْبِ', ltr: true,
      cols: [{ label: 'Indicative', w: 2.6, size: 24 }, { label: 'Subjunctive (lan / an)', w: 3.6, size: 24 }, { label: 'Jussive (lam)', w: 2.8, size: 24 }, { label: 'Note', w: 3.33 }],
      rows: [
        { core: true, cells: ['يَرْمِي', 'لَنْ يَرْمِيَ', 'لَمْ يَرْمِ', 'yāʾ stays + fatḥa'] },
        { cells: ['يَدْعُو', 'لَنْ يَدْعُوَ', 'لَمْ يَدْعُ', 'wāw stays + fatḥa'] },
        { cells: ['يَسْعَى', 'لَنْ يَسْعَى', 'لَمْ يَسْعَ', 'alif: no visible change'] },
        { cells: ['أَرَى', 'أَنْ أَرَى', 'لَمْ أَرَ', 'alif stays'] },
        { cells: ['يَمْشِي', 'لَنْ يَمْشِيَ', 'لَمْ يَمْشِ', 'subjunctive keeps the yāʾ'] },
      ],
      foot: 'Website: subjunctive KEEPS the weak letter (with fatḥa on yāʾ / wāw); the jussive DROPS it. Compare lam yarmi with lan yarmiya.',
      notes: 'PART 3 (3 min) — website “Weak verbs in the subjunctive” (jussive column added from GM-V-08 for contrast).',
    },
  ],
  quick: [
    W(/Particle and Purpose/, 0, { prompt: 'Choose “I like to read”.', feedback: 'An + subjunctive: fatḥa.' }),
    W(/Particle and Purpose/, 1, { prompt: 'Choose “I train so that I improve”.', feedback: 'Purpose: li-kay + fatḥa.' }),
    W(/Five-Verb Check/, 1, { prompt: 'Choose “We want them to write”.', feedback: 'The plural nūn drops.' }),
    W(/Five-Verb Check/, 3, { prompt: 'Choose “I want the girls to write”.', feedback: 'The feminine plural stays yaktubna.' }),
  ],
  quickNote: 'website Particle and Purpose and Five-Verb checks.',
  ido: {
    title: 'Watch me find the trigger, then fix the verb',
    steps: [
      { head: 'Trigger', ar: 'أُرِيدُ أَنْ', think: 'an → subjunctive.' },
      { head: 'Verb', ar: 'أُصْبِحَ', think: 'uṣbiḥu → fatḥa.' },
      { head: 'Trigger', ar: 'لِكَيْ', think: 'Purpose.' },
      { head: 'Verb', ar: 'أَتَحَسَّنَ', think: 'Fatḥa again.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'TRIGGER', e: 'SUBJUNCTIVE VERB' },
    model: 'أُرِيدُ {k|أَنْ} {e|أُصْبِحَ} مُهَنْدِسَةً، وَلِذَلِكَ يَجِبُ {k|أَنْ} {e|أَدْرُسَ} الرِّيَاضِيَّاتِ بِجِدٍّ. أَتَدَرَّبُ كُلَّ يَوْمٍ {k|لِكَيْ} {e|أَتَحَسَّنَ}، وَ{k|لَنْ} {e|أَتَوَقَّفَ} {k|حَتَّى} {e|أُحَقِّقَ} هَدَفِي.',
    modelEn: 'I want to become an engineer, so I must study maths seriously. I train every day so that I improve, and I will not stop until I achieve my goal.',
    notes: 'Website model (corrected: uḥaqqiqa). Website routine: draw an arrow from each trigger to its verb.',
  },
  models: [
    { ar: 'أُرِيدُ أَنْ أَعْمَلَ فِي الطِّبِّ.', en: 'I want to work in medicine.', tip: 'Want + an.' },
    { ar: 'يَجِبُ أَنْ نَحْمِيَ الْبِيئَةَ.', en: 'We must protect the environment.', tip: 'Need; yāʾ + fatḥa.' },
    { ar: 'أَتَعَلَّمُ الْعَرَبِيَّةَ لِكَيْ أَتَوَاصَلَ مَعَ الْآخَرِينَ.', en: 'I learn Arabic so that I can communicate with others.', tip: 'Purpose.' },
    { ar: 'سَأَنْتَظِرُ حَتَّى تَنْتَهِيَ الْحِصَّةُ.', en: 'I will wait until the lesson ends.', tip: 'Endpoint.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · the transformer (website game) · say it aloud', title: 'Change the verb after the trigger', ar: 'حَوِّلْ إِلَى الْمَنْصُوبِ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Frame', w: 4.0, size: 22 }, { label: 'Verb given', w: 2.8, size: 24 }, { label: 'Subjunctive', w: 2.8, size: 24 }, { label: 'Change', w: 2.73 }],
      rows: [
        { core: true, cells: ['أُرِيدُ أَنْ …', 'أَدْرُسُ', 'أَدْرُسَ', 'fatḥa'] },
        { core: true, cells: ['لِكَيْ …', 'أَنْجَحُ', 'أَنْجَحَ', 'fatḥa'] },
        { cells: ['أُرِيدُكِ أَنْ …', 'تَكْتُبِينَ', 'تَكْتُبِي', 'nūn drops'] },
        { cells: ['أُرِيدُهُمْ أَنْ …', 'يَصِلُونَ', 'يَصِلُوا', 'nūn drops'] },
        { cells: ['لَنْ …', 'يَرْمِي', 'يَرْمِيَ', 'yāʾ + fatḥa'] },
        { cells: ['حَتَّى … الْقِطَارُ', 'يَصِلُ', 'يَصِلَ', 'fatḥa'] },
      ],
      foot: 'Website transformer: change indicative forms into accurate subjunctives.',
      notes: 'WE DO (3 min) — website game items. Cover column 3.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · subjunctive or jussive?', title: 'Keep the letter, or drop it?', ar: 'مَنْصُوبٌ أَمْ مَجْزُومٌ؟',
      categories: ['Subjunctive (an / lan)', 'Jussive (lam / lā)'],
      items: [['لَنْ يَرْمِيَ', 0], ['أَنْ يَدْعُوَ', 0], ['لَنْ يَمْشِيَ', 0], ['أَنْ تَكْتُبَ', 0], ['لَمْ يَرْمِ', 1], ['لَمْ يَدْعُ', 1], ['لَمْ يَمْشِ', 1], ['لَا تَكْتُبْ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type 1 or 2. Rule: subjunctive keeps the weak letter; jussive drops it.',
    },
  ],
  mistakes: [
    { wrong: 'أُرِيدُ أَنْ أَدْرُسُ', right: 'أُرِيدُ أَنْ أَدْرُسَ', why: 'After an, the singular takes fatḥa (website clinic).' },
    { wrong: 'أُرِيدُكِ أَنْ تَكْتُبِينَ', right: 'أُرِيدُكِ أَنْ تَكْتُبِي', why: 'The five-verb nūn drops (website clinic).' },
    { wrong: 'لَنْ يَمْشِ', right: 'لَنْ يَمْشِيَ', why: 'The subjunctive keeps the yāʾ; the jussive drops it (website clinic).' },
  ],
  hints: ['Ḍamma after an?', 'Nūn after an?', 'Lan or lam pattern?'],
  practice: [
    W(/Five-Verb Check/, 2, { prompt: 'Choose “I want the two students to arrive”.', feedback: 'The dual nūn drops.' }),
    W(/Weak Subjunctive/, 0, { prompt: 'Choose “He will not throw”.', feedback: 'The subjunctive keeps the yāʾ.' }),
    W(/Weak Subjunctive/, 2, { prompt: 'Choose “I want to see”.', feedback: 'Final alif stays: an arā.' }),
    W(/Functional Subjunctive/, 2, { prompt: 'Which expresses purpose?', feedback: 'Li-kay usāfira.' }),
  ],
  practiceLabel: 'website Five-Verb, Weak Subjunctive and Functional checks',
  read: {
    title: 'Ambition profiles', label: 'website reading workshop (teacher-written profiles)',
    text: 'خَدِيجَةُ: أَطْمَحُ إِلَى أَنْ أُصْبِحَ طَبِيبَةً، وَلِذَلِكَ أَدْرُسُ الْعُلُومَ لِكَيْ أَفْهَمَ جِسْمَ الْإِنْسَانِ. حَمْزَةُ: يُحِبُّ أَصْدِقَائِي أَنْ يَلْعَبُوا كُرَةَ الْقَدَمِ، أَمَّا أَنَا فَأُرِيدُ أَنْ أَكْتُبَ قِصَصًا. لَنْ أَتَوَقَّفَ حَتَّى أَنْشُرَ كِتَابِي الْأَوَّلَ. الْمُعَلِّمَةُ: يَجِبُ أَنْ تَسْعَوْا إِلَى أَهْدَافِكُمْ، وَلَا تَنْسَوْا أَنْ تَرْتَاحُوا!',
    glossary: [['أَطْمَحُ إِلَى', 'I aspire to'], ['جِسْمَ الْإِنْسَانِ', 'the human body'], ['أَنْشُرَ', 'publish'], ['تَسْعَوْا', 'strive (pl.)'], ['تَرْتَاحُوا', 'rest (pl.)']],
    task: 'Website: underline the triggers and match each subjunctive verb to the word that governs it.',
    questions: [
      q('Why does Khadīja study science?', ['to understand the human body', 'to write stories', 'to play football'], 'Li-kay afhama.'),
      q('Which trigger governs anshura?', ['حَتَّى', 'لَنْ', 'أَنْ'], 'Ḥattā anshura — until I publish.'),
      q('Why is it an yalʿabū, not yalʿabūna?', ['the nūn drops after an', 'it is past', 'it is feminine'], 'Five-verb form.'),
      q('What does the teacher remind the class not to forget?', ['to rest', 'to publish a book', 'to study science'], 'An tartāḥū.'),
    ],
    qNote: 'Teacher-written profiles for the website reading workshop; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: my goal in one minute', source: 'website speaking workshop',
    prompts: [
      { route: 'core', ar: 'مَاذَا تُرِيدُ أَنْ تَفْعَلَ فِي الْمُسْتَقْبَلِ؟' },
      { route: 'develop', ar: 'لِمَاذَا تَتَعَلَّمُ الْعَرَبِيَّةَ؟' },
      { route: 'stretch', ar: 'مَا هَدَفُكَ، وَمَاذَا يَجِبُ أَنْ تَفْعَلَ لِكَيْ تُحَقِّقَهُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أُرِيدُ أَنْ ______ .' },
      { route: 'develop', ar: 'أَتَعَلَّمُ الْعَرَبِيَّةَ لِكَيْ ______ .' },
      { route: 'stretch', ar: 'يَجِبُ أَنْ ______ ، وَلَنْ ______ حَتَّى ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَا هَدَفُكِ فِي الْحَيَاةِ؟', en: 'What is your goal in life? (to a girl)' },
      { who: 'B', ar: 'أُرِيدُ أَنْ أُصْبِحَ مُعَلِّمَةً لِكَيْ أُسَاعِدَ الْأَطْفَالَ. يَجِبُ أَنْ أَدْرُسَ كَثِيرًا، وَلَنْ أَسْتَسْلِمَ حَتَّى أَنْجَحَ.', en: 'I want to become a teacher so that I can help children. I must study a lot, and I will not give up until I succeed.' },
    ],
    notes: 'Website: a one-minute answer using urīdu an, yajibu an, li-kay, lan and ḥattā. Listening (website): yaktubūna / an yaktubū and yamshī / lan yamshiya.',
  },
  write: {
    siteTask: 'Write 130–140 words about your ambitions and what you do to achieve them. Include intention, necessity, purpose, future negation and an endpoint.',
    core: { amount: '5 sentences', task: 'What I want to do.', how: 'urīdu an + fatḥa.' },
    develop: { amount: '7 sentences', task: 'Add purpose and what my friends want.', how: 'li-kay; an yaktubū.' },
    stretch: { amount: '130–140 words', task: 'Website ambition task.', how: 'Four triggers, two five-verb forms, one weak verb.' },
  },
  frames: {
    core: [
      { en: 'I want to …', ar: 'أُرِيدُ أَنْ ______ .' },
      { en: 'I like to …', ar: 'أُحِبُّ أَنْ ______ .' },
      { en: 'I will not …', ar: 'لَنْ ______ .' },
      { en: 'We must …', ar: 'يَجِبُ أَنْ ______ .' },
    ],
    develop: [
      { en: 'I study so that …', ar: 'أَدْرُسُ لِكَيْ ______ .' },
      { en: 'My friends want to …', ar: 'يُرِيدُ أَصْدِقَائِي أَنْ ______ .' },
      { en: 'I will wait until …', ar: 'سَأَنْتَظِرُ حَتَّى ______ .' },
      { en: 'It is important to …', ar: 'مِنَ الْمُهِمِّ أَنْ ______ .' },
    ],
    bank: ['أَدْرُسَ', 'أَعْمَلَ', 'أُصْبِحَ', 'أُسَافِرَ', 'أَنْجَحَ', 'أَتَحَسَّنَ', 'أَتَوَقَّفَ', 'يَكْتُبُوا', 'تَكْتُبِي', 'نَحْمِيَ', 'أَرَى', 'يَصِلَ'],
  },
  stretchTask: {
    task: 'Website integrated production task: 130–140 words about your ambitions and how you will achieve them.',
    checklist: ['Four different triggers.', 'Intention, necessity, purpose, lan and an endpoint.', 'Two five-verb forms with the nūn dropped.', 'One weak verb in the subjunctive.', 'A checked ending after every trigger.'],
    phrases: [['أَطْمَحُ إِلَى أَنْ', 'I aspire to'], ['أُخَطِّطُ لِأَنْ', 'I plan to'], ['مِنَ الْمُهِمِّ أَنْ', 'it is important to'], ['لِكَيْ', 'so that'], ['حَتَّى أُحَقِّقَ', 'until I achieve'], ['لَنْ أَسْتَسْلِمَ', 'I will not give up']],
  },
  model: {
    text: 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ صَحَفِيًّا، لِأَنَّنِي أُحِبُّ أَنْ أَكْتُبَ عَنِ النَّاسِ. يَجِبُ أَنْ أُحَسِّنَ لُغَتِي، فَأَقْرَأُ الصُّحُفَ كُلَّ يَوْمٍ لِكَيْ أَتَعَلَّمَ كَلِمَاتٍ جَدِيدَةً. يُرِيدُ وَالِدَايَ أَنْ أَدْرُسَ الطِّبَّ، وَلَكِنَّهُمَا يُرِيدَانِ أَنْ أَكُونَ سَعِيدًا. أَطْلُبُ مِنْ أَصْدِقَائِي أَنْ يَقْرَؤُوا مَقَالَاتِي وَأَنْ يُعْطُونِي رَأْيَهُمْ. لَنْ أَنْسَى أَنْ أَسْعَى إِلَى الْحَقِيقَةِ، وَلَنْ أَتَوَقَّفَ حَتَّى أَنْشُرَ أَوَّلَ تَقْرِيرٍ لِي.',
    en: 'I aspire to become a journalist, because I love writing about people. I must improve my language, so I read newspapers every day in order to learn new words. My parents want me to study medicine, but they want me to be happy. I ask my friends to read my articles and to give me their opinion. I will not forget to pursue the truth, and I will not stop until I publish my first report.',
    find: ['an + fatḥa', 'nūn dropped', 'li-kay', 'lan / ḥattā'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'After an and lan my singular verbs end in fatḥa.' },
    { route: 'core', text: 'I used at least two triggers.' },
    { route: 'develop', text: 'I dropped the nūn of the five verbs.' },
    { route: 'develop', text: 'I did not change the feminine plural -na.' },
    { route: 'stretch', text: 'My weak verbs keep their last letter.' },
  ],
  exit: [
    W(/Subjunctive Mastery/, 4, { prompt: '“They …” after an', feedback: 'The nūn drops: an yaktubū.' }),
    W(/Subjunctive Mastery/, 6, { prompt: 'Feminine plural after an', feedback: 'The form stays: an yaktubna.' }),
    W(/Subjunctive Mastery/, 8, { prompt: 'Final-wāw verb after lan', feedback: 'The subjunctive keeps the wāw: lan yadʿuwa.' }),
  ],
  mastery: false,
  prep: {
    words: [['كُتِبَ', 'was written', 'كُتِبَ الدَّرْسُ'], ['يُكْتَبُ', 'is written', 'يُكْتَبُ الدَّرْسُ'], ['صُنِعَ', 'was made', 'صُنِعَ فِي الصِّينِ'], ['يُقَالُ', 'it is said', '—'], ['الْفَاعِلُ', 'the doer (subject)', '—']],
    questionEn: 'Kataba = he wrote. Kutiba = it was written. What changed in the vowels?',
    questionAr: 'كَتَبَ ← ______',
    homework: {
      core: 'Write five sentences with urīdu an and lan.',
      develop: 'Rewrite five sentences for they and you (f.), dropping the nūn.',
      stretch: 'Website ambition task (130–140 words).',
    },
    wordsSource: 'The five words prepare GM-V-11 (website Verbs lesson 11: the passive voice).',
  },
  remember: 'Remember: an · lan · li-kay · ḥattā → subjunctive · ḍamma → fatḥa · five verbs drop the nūn · -na stays · weak verbs keep their letter (lan yarmiya, not lan yarmi).',
});

module.exports = { meta, slides };
