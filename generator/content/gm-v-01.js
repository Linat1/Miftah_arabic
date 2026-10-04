'use strict';
/* GM-V-01 · Verb Foundations and the Conjugation Map — website: Mastery & Revision › Grammar › Verbs › Lesson 1 (five layers in a verb:
 * root, pattern, tense, person, context; families: sound السَّالِمُ · initial weak الْمِثَالُ · hollow الْأَجْوَفُ · final weak النَّاقِصُ ·
 * doubled الْمُضَعَّفُ; person table with كَتَبَ / يَكْتُبُ; learn verbs as four-part entries قَالَ / يَقُولُ / قَوْلٌ / قُلْ and with
 * collocations; misconception clinic: the weak letter is a root radical, a shadda counts twice, the present is not just “add ي”).
 * Quizzes are the website’s (Entry, Root and Pattern, Verb Family, Person, Mastery); English-only prompts and feedback are used where the
 * website mixes scripts. Sorter (website game words), I-do, frames and model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__07-verbs__grammar-mastery-01-foundations';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-V-01', fileTitle: 'Verb_Foundations', title: 'Verb Foundations and the Conjugation Map', arabic: 'أُسُسُ الْأَفْعَالِ وَخَرِيطَةُ التَّصْرِيفِ',
  focus: 'One Arabic verb packs in five layers: a three-letter root, a pattern, the time (past / present), the person, and the context. Katabnā already means “we wrote”. Learn each verb as a family: past · present · verbal noun · command.',
  icon: 'FaSitemap',
});

const slides = G.gmLesson({
  code: 'GM-V-01', site: KEY,
  support: `• Core: find the root (ك ت ب), tell past from present, and identify who acts (كَتَبْنَا = we wrote). Develop: classify the five families — sound, initial weak, hollow, final weak, doubled. Stretch: explain why a visible form changes while the root meaning stays (قَالَ ← ق و ل; مَرَّ ← م ر ر).
• Website scope: this lesson MAPS the territory; GM-V-02 teaches the actual weak-verb changes. Don’t drill weak conjugations yet.
• Learning habit to build from today: the four-part verb entry (قَالَ / يَقُولُ / قَوْلٌ / قُلْ) plus one collocation (زَارَ الْمَتْحَفَ).`,
  teach: 'Five layers; root and pattern; five families; person map.',
  wedo: 'Sort the families; build verb entries; repair.',
  next: { nextCode: 'GM-V-02', nextTitle: 'Hollow, Doubled and Weak Verb Patterns', nextAr: 'الْأَفْعَالُ الْجَوْفَاءُ وَالْمُضَعَّفَةُ وَالْمُعْتَلَّةُ' },
  doNow: {
    pick: [0, 1, 3, 4, 5],
    fb: {
      0: 'Kataba expresses an action and carries past-tense information.',
      3: 'Qāla has a weak middle root letter.',
      4: 'Marra: the second and third root letters are both rāʾ — the shadda shows two letters.',
    },
    keyIdea: { text: 'A verb = root + pattern + time + person. Katabnā already tells you “we wrote”.', ar: 'ك ت ب ‖ {k|كَتَبْنَا} ‖ {e|نَكْتُبُ}' },
    retrieves: 'The website Entry Check (questions 1, 2, 4, 5 and 6) — it uses the verb words prepared at the end of GM-PRO-06.',
  },
  objectives: ['Find the three-letter root of a verb.', 'Tell past from present and identify who acts.', 'Classify verbs into five families.', 'Learn verbs as connected entries, not single words.'],
  routes: {
    core: ['I find the root of kataba / yaktubu.', 'I know katabnā = we wrote and aktubu = I write.'],
    develop: ['I classify sound, hollow, doubled, initial and final weak.', 'I learn qāla / yaqūlu as a pair.'],
    stretch: ['I explain why qāla has the root q-w-l.', 'I explain why a shadda counts twice.'],
  },
  terms: {
    items: [
      { ar: 'الْجِذْرُ', en: 'root (core consonants)', note: 'ك ت ب' },
      { ar: 'الْمَاضِي', en: 'past (completed)', note: 'كَتَبَ' },
      { ar: 'الْمُضَارِعُ', en: 'present (ongoing / habitual)', note: 'يَكْتُبُ' },
      { ar: 'السَّالِمُ', en: 'sound verb', note: 'كَتَبَ · دَرَسَ' },
      { ar: 'الْمُعْتَلُّ', en: 'weak verb (wāw or yāʾ in the root)', note: 'قَالَ · وَصَلَ · مَشَى' },
      { ar: 'الْمُضَعَّفُ', en: 'doubled verb', note: 'مَرَّ · رَدَّ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · the five layers inside a verb (website table)', title: 'A verb is a compact information system', ar: 'طَبَقَاتُ الْفِعْلِ الْخَمْسُ', ltr: true,
      cols: [{ label: 'Layer', w: 2.6 }, { label: 'Question it answers (website)', w: 5.6 }, { label: 'Example', w: 4.13, size: 24 }],
      rows: [
        { core: true, cells: ['Root', 'Which consonants carry the main meaning?', 'ك ت ب'] },
        { core: true, cells: ['Pattern / stem', 'How is the root shaped?', 'كَتَبَ · يَكْتُبُ'] },
        { core: true, cells: ['Tense', 'Completed, or ongoing / habitual?', 'كَتَبَ · يَكْتُبُ'] },
        { core: true, cells: ['Person', 'Who performs the action?', 'كَتَبْتُ · كَتَبْنَا'] },
        { cells: ['Context', 'What completes the meaning?', 'كَتَبْنَا رِسَالَةً أَمْسِ.'] },
      ],
      foot: 'Website key idea: Arabic verbs package several pieces of information into one word — katabnā already tells us “we wrote”.',
      notes: 'PART 1 (3 min) — website “The five layers inside a verb”. Colour the root letters in every form of k-t-b: kataba, yaktubu, kitāb, maktab.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 2 · a map of sound and weak verb families (website table)', title: 'Five verb families', ar: 'خَرِيطَةُ عَائِلَاتِ الْأَفْعَالِ', ltr: true,
      cols: [{ label: 'Family', w: 2.4 }, { label: 'Arabic term', w: 2.4, size: 22 }, { label: 'Signal (website)', w: 4.2 }, { label: 'Examples', w: 3.33, size: 22 }],
      rows: [
        { core: true, cells: ['sound', 'السَّالِمُ', 'no weak letter, no doubled pair', 'كَتَبَ · دَرَسَ'] },
        { core: true, cells: ['initial weak', 'الْمِثَالُ', 'wāw or yāʾ is the FIRST root letter', 'وَصَلَ / يَصِلُ'] },
        { core: true, cells: ['hollow', 'الْأَجْوَفُ', 'wāw or yāʾ is the MIDDLE root letter', 'قَالَ · زَارَ · قَامَ'] },
        { core: true, cells: ['final weak', 'النَّاقِصُ', 'wāw or yāʾ is the LAST root letter', 'مَشَى · دَعَا'] },
        { core: true, cells: ['doubled', 'الْمُضَعَّفُ', 'last two root letters identical', 'مَرَّ · رَدَّ'] },
      ],
      foot: 'Website: the labels help you PREDICT what may change, but they do not replace learning real forms — learn pairs: qāla / yaqūlu, zāra / yazūru, mashā / yamshī.',
      notes: 'PART 2 (4 min) — website “A map of sound and weak verb families”. Scope: this lesson maps; GM-V-02 teaches the changes.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · person, number and gender (website table) · Develop', title: 'The verb tells you who acts', ar: 'مَنْ يَفْعَلُ؟', ltr: true,
      cols: [{ label: 'Pronoun', w: 2.6, size: 24 }, { label: 'Past · wrote', w: 3.4, size: 24 }, { label: 'Present · writes', w: 3.4, size: 24 }, { label: 'Signal', w: 2.93 }],
      rows: [
        { core: true, cells: ['أَنَا', 'كَتَبْتُ', 'أَكْتُبُ', '-tu · a-'] },
        { core: true, cells: ['أَنْتَ', 'كَتَبْتَ', 'تَكْتُبُ', '-ta · ta-'] },
        { core: true, cells: ['هُوَ', 'كَتَبَ', 'يَكْتُبُ', '— · ya-'] },
        { core: true, cells: ['هِيَ', 'كَتَبَتْ', 'تَكْتُبُ', '-at · ta-'] },
        { core: true, cells: ['نَحْنُ', 'كَتَبْنَا', 'نَكْتُبُ', '-nā · na-'] },
      ],
      foot: 'Website: the PAST shows the person mainly with suffixes; the PRESENT uses the prefixes a- · ta- · ya- · na- (and some suffixes). The full grids come in GM-V-04 and GM-V-05.',
      notes: 'PART 3 (3 min) — website “Person, number and gender”. Model the website pair: anā katabtu amsi · anā aktubu l-āna.',
    },
  ],
  quick: [
    W(/Root and Pattern/, 0, { prompt: 'Choose the root of darasa (to study).', feedback: 'The prefixes and vowels change; d-r-s remain.' }),
    W(/Root and Pattern/, 1, { feedback: '-nā marks “we” in the past.' }),
    W(/Verb Family/, 2, { prompt: 'Classify waṣala / yaṣilu (to arrive).', feedback: 'The first root letter is wāw, which drops in the present.' }),
    W(/Verb Family/, 3, { prompt: 'What does the shadda in marra represent?', feedback: 'Two identical consonants pronounced together.' }),
  ],
  quickNote: 'website Root and Pattern and Verb Family checks.',
  ido: {
    title: 'Watch me read a verb layer by layer',
    steps: [
      { head: 'Verb', ar: 'زُرْنَا', think: 'What is it?' },
      { head: 'Person', ar: 'ـنَا', think: '-nā → we.' },
      { head: 'Time', ar: 'زُرْنَا', think: 'Suffix → past.' },
      { head: 'Root', ar: 'ز و ر', think: 'Hollow: wāw in the middle.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'PAST', e: 'PRESENT' },
    model: '{e|أَسْتَيْقِظُ} مُبَكِّرًا كُلَّ يَوْمٍ، وَ{e|أَذْهَبُ} إِلَى الْمَدْرَسَةِ. أَمْسِ {k|زُرْتُ} الْمَكْتَبَةَ وَ{k|قَرَأْتُ} كِتَابًا.',
    modelEn: 'I wake up early every day, and I go to school. Yesterday I visited the library and read a book.',
    notes: 'Website model. For each verb: who acts? when? which root and family? Zurtu is hollow (z-w-r) — the wāw is hidden (GM-V-02).',
  },
  models: [
    { ar: 'قَالَ / يَقُولُ / قَوْلٌ / قُلْ', en: 'he said / he says / saying / say!', tip: 'Website: a four-part verb entry.' },
    { ar: 'زَارَ الْمَتْحَفَ', en: 'he visited the museum', tip: 'Website: learn with a collocation.' },
    { ar: 'مَرَّ بِالسُّوقِ', en: 'he passed by the market', tip: 'Website: verb + its preposition.' },
    { ar: 'أَنَا كَتَبْتُ أَمْسِ، وَأَكْتُبُ الْآنَ.', en: 'I wrote yesterday, and I am writing now.', tip: 'Website: past vs present.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · classify the verb (website pattern game)', title: 'Which family?', ar: 'إِلَى أَيِّ عَائِلَةٍ؟',
      categories: ['sound', 'hollow (weak middle)', 'weak at an end', 'doubled'],
      items: [['كَتَبَ', 0], ['قَالَ', 1], ['مَشَى', 2], ['مَرَّ', 3], ['دَرَسَ', 0], ['زَارَ', 1], ['وَصَلَ', 2], ['رَدَّ', 3], ['دَعَا', 2]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min) — the website game words. Category 3 groups initial weak (waṣala) and final weak (mashā, daʿā); ask which is which.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'We do · build a four-part verb entry (website)', title: 'Past · present · noun · command', ar: 'بِطَاقَةُ الْفِعْلِ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Meaning', w: 2.4 }, { label: 'Past', w: 2.4, size: 24 }, { label: 'Present', w: 2.4, size: 24 }, { label: 'Verbal noun', w: 2.6, size: 24 }, { label: 'Command', w: 2.53, size: 24 }],
      rows: [
        { core: true, cells: ['write', 'كَتَبَ', 'يَكْتُبُ', 'كِتَابَةٌ', 'اُكْتُبْ'] },
        { core: true, cells: ['say', 'قَالَ', 'يَقُولُ', 'قَوْلٌ', 'قُلْ'] },
        { core: true, cells: ['visit', 'زَارَ', 'يَزُورُ', 'زِيَارَةٌ', 'زُرْ'] },
        { cells: ['arrive', 'وَصَلَ', 'يَصِلُ', 'وُصُولٌ', 'صِلْ'] },
        { cells: ['walk', 'مَشَى', 'يَمْشِي', 'مَشْيٌ', 'اِمْشِ'] },
      ],
      foot: 'Website: store each verb as a family, then add a useful phrase. Notice how the weak letter hides or changes — that is GM-V-02.',
      notes: 'WE DO (2 min). Cover columns 3–5; students recall what they can. Copy into vocabulary books.',
    },
  ],
  mistakes: [
    { wrong: 'قَالَ · ق ل', right: 'قَالَ · ق و ل', why: 'The weak letter is a root letter, even when hidden (website clinic).' },
    { wrong: 'مَرَّ · م ر', right: 'مَرَّ · م ر ر', why: 'A shadda counts twice (website clinic).' },
    { wrong: 'يَكَتَبَ', right: 'يَكْتُبُ', why: 'The present is not “add ya-”: the stem vowels change (website clinic).' },
  ],
  hints: ['What is the root of qāla?', 'How many rāʾs in marra?', 'Do the vowels change?'],
  practice: [
    W(/Person Check/, 0, { feedback: 'a- marks “I”.' }),
    W(/Person Check/, 1, { feedback: '-at marks “she” in the past.' }),
    W(/Person Check/, 2, { feedback: 'na- marks “we”.' }),
    W(/Mastery/, 1, { prompt: 'Marra (to pass) is …', feedback: 'The last two root letters match.' }),
  ],
  practiceLabel: 'website Person check and mastery check',
  read: {
    title: 'My routine', label: 'website reading workshop (teacher-written paragraph)',
    text: 'أَسْتَيْقِظُ مُبَكِّرًا كُلَّ يَوْمٍ، وَأَذْهَبُ إِلَى الْمَدْرَسَةِ. فِي الطَّرِيقِ أَمُرُّ بِالسُّوقِ. أَمْسِ زُرْتُ الْمَكْتَبَةَ وَقَرَأْتُ كِتَابًا، ثُمَّ مَشَيْتُ إِلَى الْبَيْتِ. وَصَلْتُ مُتَأَخِّرًا، فَقَالَتْ أُمِّي: «أَيْنَ كُنْتَ؟»',
    glossary: [['أَسْتَيْقِظُ', 'I wake up'], ['أَمُرُّ بِـ', 'I pass by'], ['زُرْتُ', 'I visited'], ['مَشَيْتُ', 'I walked'], ['وَصَلْتُ', 'I arrived'], ['مُتَأَخِّرًا', 'late']],
    task: 'Website: circle all the verbs and sort them by past / present and by family.',
    questions: [
      q('Which verb is doubled?', ['أَمُرُّ', 'أَذْهَبُ', 'قَرَأْتُ'], 'Root m-r-r.'),
      q('Which verb is hollow?', ['زُرْتُ', 'مَشَيْتُ', 'وَصَلْتُ'], 'Root z-w-r.'),
      q('Which verb is final weak?', ['مَشَيْتُ', 'زُرْتُ', 'قَرَأْتُ'], 'Root m-sh-y.'),
      q('Who said “Where were you?”', ['the mother', 'the writer', 'the teacher'], 'Qālat ummī — -at = she.'),
    ],
    qNote: 'Teacher-written paragraph for the website reading workshop (website model sentences extended); questions teacher-written.',
  },
  speak: {
    title: 'Speaking: usually, and yesterday', source: 'website speaking workshop (45 seconds)',
    prompts: [
      { route: 'core', ar: 'مَاذَا تَفْعَلُ كُلَّ يَوْمٍ؟' },
      { route: 'develop', ar: 'مَاذَا فَعَلْتَ أَمْسِ؟' },
      { route: 'stretch', ar: 'قَارِنْ: مَاذَا تَفْعَلُ عَادَةً، وَمَاذَا فَعَلْتَ أَمْسِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'كُلَّ يَوْمٍ ______ وَ ______ .' },
      { route: 'develop', ar: 'أَمْسِ ______ وَ ______ .' },
      { route: 'stretch', ar: 'عَادَةً ______ ، لَكِنْ أَمْسِ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَاذَا تَفْعَلُ بَعْدَ الْمَدْرَسَةِ عَادَةً؟', en: 'What do you usually do after school?' },
      { who: 'B', ar: 'عَادَةً أَدْرُسُ وَأَلْعَبُ، لَكِنْ أَمْسِ زُرْتُ جَدَّتِي وَقُلْتُ لَهَا: عِيدٌ مُبَارَكٌ!', en: 'Usually I study and play, but yesterday I visited my grandmother and said to her: Eid Mubarak!' },
    ],
    notes: 'Website: 45 seconds, at least four different verbs. Listening workshop (website): partner reads eight sentences; the listener notes only the verb, who acts and when.',
  },
  write: {
    siteTask: 'Write 80–100 words introducing your daily routine and one past experience; underline five verbs and annotate each with its root, time frame and subject.',
    core: { amount: '6 sentences', task: 'Three present and three past sentences.', how: 'I wake up / I go … · yesterday I visited …' },
    develop: { amount: '8 sentences', task: 'Use two persons and at least one weak verb.', how: 'Annotate: root · family · time.' },
    stretch: { amount: '80–100 words', task: 'Website task with a three-column verb audit.', how: 'verb form · root / family · why it fits.' },
  },
  frames: {
    core: [
      { en: 'Every day I wake up …', ar: 'كُلَّ يَوْمٍ أَسْتَيْقِظُ ______ .' },
      { en: 'I go to …', ar: 'أَذْهَبُ إِلَى ______ .' },
      { en: 'Yesterday I visited …', ar: 'أَمْسِ زُرْتُ ______ .' },
      { en: 'Yesterday I read …', ar: 'أَمْسِ قَرَأْتُ ______ .' },
    ],
    develop: [
      { en: 'We wrote …', ar: 'كَتَبْنَا ______ .' },
      { en: 'She said …', ar: 'قَالَتْ ______ .' },
      { en: 'I walked to …', ar: 'مَشَيْتُ إِلَى ______ .' },
      { en: 'Every day I pass by …', ar: 'كُلَّ يَوْمٍ أَمُرُّ ______ .' },
    ],
    bank: ['أَسْتَيْقِظُ', 'أَذْهَبُ', 'أَدْرُسُ', 'أَكْتُبُ', 'أَقُولُ', 'زُرْتُ', 'قَرَأْتُ', 'كَتَبْنَا', 'قَالَتْ', 'مَشَيْتُ', 'وَصَلْتُ', 'أَمُرُّ'],
  },
  stretchTask: {
    task: 'Website integrated production task: 80–100 words on your routine and one past experience, with a verb audit.',
    checklist: ['At least one sound verb.', 'At least one hollow or weak verb.', 'Two different persons (I, we, she …).', 'Two time frames (present and past).', 'Five verbs annotated: root · family · time · subject.'],
    phrases: [['أَسْتَيْقِظُ مُبَكِّرًا', 'I wake up early'], ['زُرْتُ', 'I visited (hollow)'], ['قُلْتُ', 'I said (hollow)'], ['مَشَيْتُ', 'I walked (final weak)'], ['وَصَلْتُ', 'I arrived (initial weak)'], ['مَرَرْتُ بِـ', 'I passed by (doubled)']],
  },
  model: {
    text: 'كُلَّ يَوْمٍ أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ وَأُصَلِّي الْفَجْرَ. ثُمَّ أَذْهَبُ إِلَى الْمَدْرَسَةِ وَأَدْرُسُ الْعَرَبِيَّةَ. فِي الْأُسْبُوعِ الْمَاضِي زُرْنَا الْمَتْحَفَ مَعَ الْمُعَلِّمَةِ. مَشَيْنَا فِي الْقَاعَاتِ، وَقَالَتِ الْمُعَلِّمَةُ: «اُكْتُبُوا مُلَاحَظَاتِكُمْ». كَتَبْتُ صَفْحَتَيْنِ، وَوَصَلْنَا إِلَى الْبَيْتِ مُتْعَبِينَ وَسُعَدَاءَ.',
    en: 'Every day I wake up at six and pray Fajr. Then I go to school and study Arabic. Last week we visited the museum with the teacher. We walked through the halls, and the teacher said: “Write your notes.” I wrote two pages, and we arrived home tired and happy.',
    find: ['present (routine)', 'past (experience)', 'hollow / weak verbs', 'different persons'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'My present verbs show the right person.' },
    { route: 'core', text: 'My past verbs show the right person.' },
    { route: 'develop', text: 'I used at least one weak or hollow verb.' },
    { route: 'develop', text: 'I wrote verbs as pairs in my vocabulary list.' },
    { route: 'stretch', text: 'I annotated root, family, time and subject.' },
  ],
  exit: [
    W(/Mastery/, 0, { prompt: 'The root of qāla (he said) is …', feedback: 'The hidden weak letter is wāw: q-w-l.' }),
    W(/Mastery/, 3, { prompt: 'Choose “we wrote”.', feedback: '-nā marks “we” in the past.' }),
    W(/Mastery/, 2, { prompt: 'Mashā (he walked) is …', feedback: 'The last root letter is weak.' }),
  ],
  mastery: false,
  prep: {
    words: [['قُلْتُ', 'I said', 'from قَالَ'], ['زُرْتُ', 'I visited', 'from زَارَ'], ['مَرَرْتُ', 'I passed', 'from مَرَّ'], ['مَشَيْتُ', 'I walked', 'from مَشَى'], ['يَصِلُ', 'he arrives', 'from وَصَلَ']],
    questionEn: 'Qāla → qultu (I said). Where has the long ā gone? Try zāra → “I visited”.',
    questionAr: 'قَالَ · قُلْتُ — زَارَ · ______',
    homework: {
      core: 'Make four-part entries for five verbs.',
      develop: 'Classify twenty verbs from your book into the five families.',
      stretch: 'Website task: routine + past experience, with a verb audit.',
    },
    wordsSource: 'The five words prepare GM-V-02 (website Verbs lesson 2: hollow, doubled and weak verbs).',
  },
  remember: 'Remember: root + pattern + time + person · five families: sound, initial weak, hollow, final weak, doubled · the hidden weak letter is still a root letter · learn verbs in families.',
});

module.exports = { meta, slides };
