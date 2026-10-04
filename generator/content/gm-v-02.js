'use strict';
/* GM-V-02 · Hollow, Doubled and Weak Verb Patterns — website: Mastery & Revision › Grammar › Verbs › Lesson 2 (hollow: long stem with
 * vowel-led endings قَالَ · قَالَتْ · قَالُوا, short stem before consonant-led endings قُلْتُ · قُلْنَا; doubled: shadda stays before vowel-led
 * endings مَرَّتْ, opens before consonant-led endings مَرَرْتُ; initial weak وَصَلَ / يَصِلُ; final ي-family مَشَى / مَشَيْتُ; final و-family
 * دَعَا / دَعَوْتُ; retrieval lines; clinic). Quizzes are the website’s (Entry, Hollow, Doubled, Initial and Final Weak, Mixed, Mastery)
 * plus the website repair game sentences. Sorter, I-do, frames and model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__07-verbs__grammar-mastery-02-weak-hollow-doubled';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-V-02', fileTitle: 'Hollow_Doubled_Weak_Verbs', title: 'Hollow, Doubled and Weak Verb Patterns', arabic: 'الْأَفْعَالُ الْجَوْفَاءُ وَالْمُضَعَّفَةُ وَالْمُعْتَلَّةُ',
  focus: 'Weak and doubled verbs change shape with their endings: qāla → qultu (I said), marra → marartu (I passed), mashā → mashaytu (I walked), waṣala → yaṣilu (he arrives). One simple question decides most changes: does the ending start with a vowel or a consonant?',
  icon: 'FaShuffle',
});

const slides = G.gmLesson({
  code: 'GM-V-02', site: KEY,
  support: `• Core: the high-frequency forms قُلْتُ · زُرْنَا · مَرَرْتُ · مَشَيْتُ · يَصِلُ. Develop: explain WHEN the long vowel shortens (hollow) and the shadda opens (doubled): before endings that start with a consonant (-tu, -ta, -nā, -tum). Stretch: compare final ي-family (مَشَى / مَشَيْتُ) and final و-family (دَعَا / دَعَوْتُ); plural رَمَوْا.
• The key question for students: “Does the ending begin with a VOWEL (‑at, ‑ū) or a CONSONANT (‑tu, ‑nā)?”
• Website warning: patterns guide, but high-frequency verbs must still be learned as pairs (وَصَلَ / يَصِلُ · وَجَدَ / يَجِدُ).`,
  teach: 'Hollow; doubled; initial and final weak; retrieval lines.',
  wedo: 'Sort by ending; complete the lines; repair.',
  next: { nextCode: 'GM-V-03', nextTitle: 'Unusual High-Frequency Verbs', nextAr: 'أَفْعَالٌ شَائِعَةٌ غَيْرُ مَأْلُوفَةٍ' },
  doNow: {
    fb: {
      0: 'Before a consonant-led ending, the hollow stem shortens: qultu.',
      1: 'The long middle vowel shortens before -nā.',
      2: 'The doubled consonants separate before -tu.',
      3: 'Final alif maqṣūra appears as yāʾ before the ending.',
      4: 'The first wāw drops in this common present.',
    },
    keyIdea: { text: 'Ask: does the ending start with a VOWEL or a CONSONANT? Before a consonant, hollow verbs shorten and doubled verbs open.', ar: 'قَالَ · {k|قُلْتُ} ‖ مَرَّ · {e|مَرَرْتُ}' },
    retrieves: 'The website Entry Check (questions 1–5) — it uses the five forms prepared at the end of GM-V-01.',
  },
  objectives: ['Shorten hollow verbs before consonant-led endings.', 'Open doubled verbs before consonant-led endings.', 'Form common initial-weak and final-weak verbs.', 'Use weak verbs in a connected account.'],
  routes: {
    core: ['I say I said, we visited, I passed, I walked.', 'I say he arrives as yaṣilu.'],
    develop: ['I explain why the vowel shortens or the shadda opens.', 'I use she passed vs I passed.'],
    stretch: ['I compare mashaytu and daʿawtu.', 'I write they threw: ramaw.'],
  },
  terms: {
    items: [
      { ar: 'الْأَجْوَفُ', en: 'hollow (weak middle)', note: 'قَالَ · زَارَ · قَامَ' },
      { ar: 'الْمُضَعَّفُ', en: 'doubled', note: 'مَرَّ · رَدَّ · أَحَبَّ' },
      { ar: 'الْمِثَالُ', en: 'initial weak', note: 'وَصَلَ / يَصِلُ' },
      { ar: 'النَّاقِصُ', en: 'final weak', note: 'مَشَى · دَعَا' },
      { ar: 'لَاحِقَةٌ تَبْدَأُ بِسَاكِنٍ', en: 'consonant-led ending', note: '-tu · -nā · -tum' },
      { ar: 'لَاحِقَةٌ تَبْدَأُ بِحَرَكَةٍ', en: 'vowel-led ending', note: '-at · -ū' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 1 · hollow verbs: the middle changes shape (website table)', title: 'Long with vowel endings, short with consonant endings', ar: 'الْأَجْوَفُ', ltr: true,
      cols: [{ label: 'Verb (root)', w: 2.2 }, { label: 'Long stem (he · she · they)', w: 3.8, size: 22 }, { label: 'Short stem (I · we)', w: 3.4, size: 22 }, { label: 'Present', w: 2.93, size: 22 }],
      rows: [
        { core: true, cells: ['say (q-w-l)', 'قَالَ · قَالَتْ · قَالُوا', 'قُلْتُ · قُلْنَا', 'يَقُولُ'] },
        { core: true, cells: ['visit (z-w-r)', 'زَارَ · زَارَتْ · زَارُوا', 'زُرْتُ · زُرْنَا', 'يَزُورُ'] },
        { core: true, cells: ['stand (q-w-m)', 'قَامَ · قَامَتْ · قَامُوا', 'قُمْتُ · قُمْنَا', 'يَقُومُ'] },
      ],
      foot: 'Website: the long vowel appears with vowel-led endings; it shortens when the ending begins with a consonant: qultu, qulnā, qultum.',
      notes: 'PART 1 (4 min) — website “Hollow verbs”. Model the website pair: huwa qāla l-ḥaqqa · naḥnu qulnā l-ḥaqqa. Chant the memory line: qāla — qālat — qālū — qultu — qulnā.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 2 · doubled verbs: merge and separate (website table)', title: 'The shadda opens before a consonant', ar: 'الْمُضَعَّفُ', ltr: true,
      cols: [{ label: 'Verb (root)', w: 2.2 }, { label: 'Vowel-led ending', w: 3.6, size: 22 }, { label: 'Consonant-led ending', w: 3.6, size: 22 }, { label: 'Present', w: 2.93, size: 22 }],
      rows: [
        { core: true, cells: ['pass (m-r-r)', 'مَرَّتْ · مَرُّوا', 'مَرَرْتُ · مَرَرْنَا', 'يَمُرُّ'] },
        { core: true, cells: ['reply (r-d-d)', 'رَدَّتْ · رَدُّوا', 'رَدَدْتُ · رَدَدْنَا', 'يَرُدُّ'] },
        { cells: ['love (ḥ-b-b)', 'أَحَبَّتْ · أَحَبُّوا', 'أَحْبَبْتُ · أَحْبَبْنَا', 'يُحِبُّ'] },
      ],
      foot: 'Website: a shadda is two consonants. Before a consonant-led ending Arabic shows both: marartu, not “marrattu”.',
      notes: 'PART 2 (4 min) — website “Doubled verbs”. Memory line: marra — marrat — marrū — marartu — mararnā.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 3 · initial and final weak verbs (website table) · Develop / Stretch', title: 'Edges that drop, return or change', ar: 'الْمِثَالُ وَالنَّاقِصُ', ltr: true,
      cols: [{ label: 'Type', w: 2.6 }, { label: 'Past / present', w: 3.2, size: 22 }, { label: 'Key change (website)', w: 3.8 }, { label: 'Useful forms', w: 2.73, size: 22 }],
      rows: [
        { core: true, cells: ['initial weak', 'وَصَلَ / يَصِلُ', 'first wāw drops in the present', 'وَصَلْتُ · نَصِلُ'] },
        { core: true, cells: ['final yāʾ family', 'مَشَى / يَمْشِي', 'final alif becomes yāʾ before endings', 'مَشَيْتُ · مَشَيْنَا'] },
        { cells: ['final wāw family', 'دَعَا / يَدْعُو', 'final alif returns as wāw', 'دَعَوْتُ · دَعَوْنَا'] },
        { cells: ['final weak: they', 'مَشَى · رَمَى', 'plural past ends in -aw', 'مَشَوْا · رَمَوْا'] },
      ],
      foot: 'Website warning: do not turn the rule into guessing. Some initial-wāw verbs keep their wāw — learn the real pair (wajada / yajidu).',
      notes: 'PART 3 (4 min) — website “Initial and final weak verbs”. Memory line: mashā — mashat — mashaw — mashaytu — mashaynā.',
    },
  ],
  quick: [
    W(/Hollow Verb/, 0, { feedback: 'The short stem qul- comes before -ta.' }),
    W(/Hollow Verb/, 1, { feedback: 'The long vowel stays before -ū.' }),
    W(/Doubled Verb/, 1, { feedback: 'The shadda stays before the vowel-led ending -at.' }),
    W(/Initial and Final/, 1, { feedback: 'Final alif becomes yāʾ before -nā.' }),
  ],
  quickNote: 'website Hollow, Doubled and Initial / Final Weak checks.',
  ido: {
    title: 'Watch me decide: vowel or consonant?',
    steps: [
      { head: 'Verb', ar: 'زَارَ', think: 'Hollow: z-w-r.' },
      { head: 'Ending', ar: 'ـنَا', think: 'Starts with a consonant.' },
      { head: 'Shorten', ar: 'زُرْنَا', think: 'zur- + nā.' },
      { head: 'Compare', ar: 'زَارُوا', think: '-ū is a vowel: long stays.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'SHORT / OPEN', e: 'LONG / MERGED' },
    model: 'أَمْسِ {k|زُرْنَا} مَدِينَةً قَرِيبَةً. {k|قُلْنَا} إِنَّنَا سَنَمْشِي إِلَى الْمَتْحَفِ، وَلَكِنَّنَا {k|مَرَرْنَا} بِسُوقٍ جَمِيلٍ أَوَّلًا، وَ{e|مَرَّتْ} سَاعَةٌ بِسُرْعَةٍ!',
    modelEn: 'Yesterday we visited a nearby town. We said we would walk to the museum, but we passed a beautiful market first, and an hour passed quickly!',
    notes: 'Website model, extended with marrat (vowel-led ending, shadda stays). Ask the key question at every verb.',
  },
  models: [
    { ar: 'هُوَ قَالَ الْحَقَّ، وَنَحْنُ قُلْنَا الْحَقَّ.', en: 'He told the truth, and we told the truth.', tip: 'Website: long vs short stem.' },
    { ar: 'رَدَدْتُ عَلَى الرِّسَالَةِ.', en: 'I replied to the message.', tip: 'Doubled: opens before -tu.' },
    { ar: 'دَعَوْتُ صَدِيقِي إِلَى الْبَيْتِ.', en: 'I invited my friend home.', tip: 'Final wāw family.' },
    { ar: 'يَصِلُ الْقِطَارُ مُبَكِّرًا.', en: 'The train arrives early.', tip: 'Initial weak present.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · what happened to the stem?', title: 'Shortened, opened, or changed?', ar: 'مَاذَا تَغَيَّرَ؟',
      categories: ['hollow: shortened', 'doubled: opened', 'final weak: changed'],
      items: [['قُلْتُ', 0], ['مَرَرْتُ', 1], ['مَشَيْتُ', 2], ['زُرْنَا', 0], ['رَدَدْنَا', 1], ['دَعَوْتُ', 2], ['قُمْتُ', 0], ['أَحْبَبْتُ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min) — website editing workshop categories. Students type 1–3 and give the dictionary pair for each.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'We do · retrieval lines (website) · say them aloud', title: 'Complete the memory line', ar: 'سَلَاسِلُ الِاسْتِرْجَاعِ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Family', w: 2.2 }, { label: 'he · she · they', w: 4.8, size: 22 }, { label: 'I · we', w: 3.6, size: 22 }, { label: 'Rule', w: 1.73 }],
      rows: [
        { core: true, cells: ['hollow', 'قَالَ · قَالَتْ · قَالُوا', 'قُلْتُ · قُلْنَا', 'shortens'] },
        { core: true, cells: ['doubled', 'مَرَّ · مَرَّتْ · مَرُّوا', 'مَرَرْتُ · مَرَرْنَا', 'opens'] },
        { core: true, cells: ['final weak', 'مَشَى · مَشَتْ · مَشَوْا', 'مَشَيْتُ · مَشَيْنَا', 'changes'] },
        { cells: ['hollow', 'زَارَ · زَارَتْ · زَارُوا', 'زُرْتُ · زُرْنَا', 'shortens'] },
        { cells: ['final weak', 'دَعَا · دَعَتْ · دَعَوْا', 'دَعَوْتُ · دَعَوْنَا', 'wāw returns'] },
      ],
      foot: 'Website: short oral chains make the changes automatic — say each line three times, faster each time.',
      notes: 'WE DO (2 min). Cover column 3; students complete aloud. Stretch: notice daʿat (she called) loses the alif too.',
    },
  ],
  mistakes: [
    { wrong: 'أَنَا قَالْتُ', right: 'أَنَا قُلْتُ', why: 'The long vowel shortens before -tu (website clinic).' },
    { wrong: 'نَحْنُ مَرَّنَا', right: 'نَحْنُ مَرَرْنَا', why: 'The two rāʾs separate before -nā (website clinic).' },
    { wrong: 'هُوَ يَوْصَلُ إِلَى الْمَدْرَسَةِ', right: 'هُوَ يَصِلُ إِلَى الْمَدْرَسَةِ', why: 'The pair is waṣala / yaṣilu (website clinic).' },
  ],
  hints: ['Vowel or consonant ending?', 'Two rāʾs?', 'What is the real pair?'],
  practice: [
    W(/Mastery/, 3, { prompt: 'Choose “I passed”.', feedback: 'Two consonants open before -tu.' }),
    W(/Mastery/, 5, { prompt: 'Choose “I called / invited”.', feedback: 'Final wāw family: daʿawtu.' }),
    W(/Mastery/, 7, { prompt: 'Choose “they threw”.', feedback: 'The plural past is ramaw.' }),
    W(/Initial and Final/, 0, { prompt: 'Choose the present of wajada (to find).', feedback: 'The first wāw drops: yajidu.' }),
  ],
  practiceLabel: 'website mastery and Initial / Final Weak checks',
  read: {
    title: 'A journey blog', label: 'website reading workshop (teacher-written blog)',
    text: 'فِي الْعُطْلَةِ زُرْنَا مَدِينَةَ فَاسَ. وَصَلْنَا فِي الصَّبَاحِ، وَمَشَيْنَا فِي الْأَسْوَاقِ الْقَدِيمَةِ. مَرَرْنَا بِمَسْجِدٍ جَمِيلٍ، فَقَالَ أَبِي: «لِنُصَلِّ هُنَا». بَعْدَ الصَّلَاةِ دَعَوْنَا صَدِيقًا مَغْرِبِيًّا إِلَى الْغَدَاءِ. قُلْتُ لَهُ: «أَحْبَبْتُ مَدِينَتَكُمْ كَثِيرًا!» وَرَدَّ قَائِلًا: «أَهْلًا بِكُمْ دَائِمًا».',
    size: 22,
    glossary: [['الْأَسْوَاقِ', 'the markets'], ['لِنُصَلِّ', 'let us pray'], ['الْغَدَاءِ', 'lunch'], ['أَحْبَبْتُ', 'I loved'], ['قَائِلًا', 'saying']],
    task: 'Website: highlight every hollow, doubled, initial-weak and final-weak verb, and rebuild its dictionary pair.',
    questions: [
      q('Which verb is a shortened hollow form?', ['زُرْنَا', 'مَرَرْنَا', 'مَشَيْنَا'], 'zāra → zurnā.'),
      q('Which verb shows an opened shadda?', ['أَحْبَبْتُ', 'قَالَ', 'وَصَلْنَا'], 'aḥabba → aḥbabtu.'),
      q('Which verb shows a returning wāw?', ['دَعَوْنَا', 'مَشَيْنَا', 'زُرْنَا'], 'daʿā → daʿawnā.'),
      q('Why is it رَدَّ (shadda) at the end?', ['The subject is “he” — no consonant ending.', 'It is a mistake.', 'It is plural.'], 'No consonant-led ending → shadda stays.'),
    ],
    qNote: 'Teacher-written journey blog for the website reading workshop; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: retell a journey', source: 'website speaking workshop',
    prompts: [
      { route: 'core', ar: 'أَيْنَ زُرْتَ فِي الْعُطْلَةِ؟' },
      { route: 'develop', ar: 'صِفْ رِحْلَةً: زُرْنَا … مَشَيْنَا … مَرَرْنَا …' },
      { route: 'stretch', ar: 'أَعِدِ الْقِصَّةَ مَعَ «هُمْ»: زَارُوا … مَشَوْا … مَرُّوا …' },
    ],
    stems: [
      { route: 'core', ar: 'زُرْتُ ______ ، وَقُلْتُ ______ .' },
      { route: 'develop', ar: 'مَشَيْنَا إِلَى ______ ، وَمَرَرْنَا ______ .' },
      { route: 'stretch', ar: 'زَارُوا ______ ، وَمَشَوْا ______ ، وَمَرُّوا ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَاذَا فَعَلْتُمْ فِي الرِّحْلَةِ؟', en: 'What did you (all) do on the trip?' },
      { who: 'B', ar: 'زُرْنَا الْمَتْحَفَ، وَمَشَيْنَا فِي الْحَدِيقَةِ، وَمَرَرْنَا بِالسُّوقِ. وَصَلْنَا إِلَى الْبَيْتِ مُتْعَبِينَ!', en: 'We visited the museum, walked in the park and passed by the market. We arrived home tired!' },
    ],
    notes: 'Website: retell a past journey with qāla, zāra, marra, mashā and waṣala; then retell it with a different subject. Listening (website): note each new form when the speaker changes from I to we to they.',
  },
  write: {
    siteTask: 'Write a 100–120-word account of a visit or journey with at least six weak or doubled verbs, including singular and plural subjects.',
    core: { amount: '6 sentences', task: 'A visit in the first person: I visited, I said, I walked …', how: 'Use the memory lines.' },
    develop: { amount: '8 sentences', task: 'Switch between I, we and they.', how: 'Vowel ending or consonant ending?' },
    stretch: { amount: '100–120 words', task: 'Website task with a dictionary-pair annotation for each verb.', how: 'Two hollow, one doubled, two final weak, one initial weak.' },
  },
  frames: {
    core: [
      { en: 'Yesterday I visited …', ar: 'أَمْسِ زُرْتُ ______ .' },
      { en: 'I said to my friend …', ar: 'قُلْتُ لِصَدِيقِي ______ .' },
      { en: 'We walked to …', ar: 'مَشَيْنَا إِلَى ______ .' },
      { en: 'I passed by the market.', ar: 'مَرَرْتُ ______ .' },
    ],
    develop: [
      { en: 'We arrived at …', ar: 'وَصَلْنَا إِلَى ______ .' },
      { en: 'I invited …', ar: 'دَعَوْتُ ______ .' },
      { en: 'They visited …', ar: 'زَارُوا ______ .' },
      { en: 'She passed by the school.', ar: 'مَرَّتْ ______ .' },
    ],
    bank: ['قُلْتُ', 'قُلْنَا', 'زُرْتُ', 'زُرْنَا', 'مَرَرْتُ', 'مَرَرْنَا', 'مَرَّتْ', 'مَشَيْتُ', 'مَشَيْنَا', 'دَعَوْتُ', 'وَصَلْنَا', 'يَصِلُ'],
  },
  stretchTask: {
    task: 'Website integrated production task: a 100–120-word account of a visit or journey.',
    checklist: ['Two hollow verbs (one long, one short stem).', 'One doubled verb before a consonant ending.', 'Two final-weak forms.', 'One initial-weak present or past pair.', 'Singular and plural subjects.'],
    phrases: [['زُرْنَا', 'we visited'], ['قُلْتُ', 'I said'], ['مَرَرْنَا بِـ', 'we passed by'], ['مَشَيْنَا', 'we walked'], ['دَعَوْنَا', 'we invited'], ['وَصَلْنَا', 'we arrived']],
  },
  model: {
    text: 'فِي الْأُسْبُوعِ الْمَاضِي زُرْتُ جَدِّي فِي الرِّيفِ مَعَ أُسْرَتِي. وَصَلْنَا ظُهْرًا، فَقَالَ جَدِّي: «أَهْلًا بِكُمْ!». بَعْدَ الْغَدَاءِ مَشَيْنَا فِي الْحُقُولِ، وَمَرَرْنَا بِنَهْرٍ صَغِيرٍ. قُلْتُ لِأَخِي: «هَذَا أَجْمَلُ مَكَانٍ!». فِي الْمَسَاءِ دَعَوْنَا الْجِيرَانَ إِلَى الْعَشَاءِ، وَقَامُوا بِمُسَاعَدَتِنَا. أَحْبَبْتُ تِلْكَ الرِّحْلَةَ كَثِيرًا.',
    en: 'Last week I visited my grandfather in the countryside with my family. We arrived at noon, and my grandfather said: “Welcome!”. After lunch we walked in the fields and passed a small river. I said to my brother: “This is the most beautiful place!”. In the evening we invited the neighbours to dinner, and they helped us. I loved that trip very much.',
    find: ['hollow', 'doubled', 'final weak', 'initial weak'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'Hollow verbs shorten before -tu / -nā.' },
    { route: 'core', text: 'Doubled verbs open before -tu / -nā.' },
    { route: 'develop', text: 'Final-weak verbs show yāʾ or wāw before endings.' },
    { route: 'develop', text: 'I used waṣala / yaṣilu correctly.' },
    { route: 'stretch', text: 'I wrote the dictionary pair for each verb.' },
  ],
  exit: [
    W(/Mastery/, 0, { prompt: 'Choose “I said”.', feedback: 'Hollow shortening: qultu.' }),
    W(/Mastery/, 2, { prompt: 'Choose “she passed”.', feedback: 'Vowel-led ending: the shadda stays.' }),
    W(/Mastery/, 4, { prompt: 'Choose “we walked”.', feedback: 'Final yāʾ family: mashaynā.' }),
  ],
  mastery: false,
  prep: {
    words: [['رَأَى / يَرَى', 'to see', '—'], ['جَاءَ / يَجِيءُ', 'to come', '—'], ['أَتَى / يَأْتِي', 'to come', '—'], ['كَانَ / يَكُونُ', 'to be', '—'], ['أَخَذَ / يَأْخُذُ', 'to take', '—']],
    questionEn: 'Raʾā means “he saw”. How might you say “I saw”? (Clue: mashā → mashaytu.)',
    questionAr: 'مَشَى · مَشَيْتُ — رَأَى · ______',
    homework: {
      core: 'Learn the three memory lines by heart.',
      develop: 'Correct eight weak-verb forms and name each change.',
      stretch: 'Website task: an account of a visit or journey.',
    },
    wordsSource: 'The five verbs prepare GM-V-03 (website Verbs lesson 3: unusual high-frequency verbs).',
  },
  remember: 'Remember: vowel-led ending → long / merged (qālat, marrat) · consonant-led ending → short / open (qultu, marartu) · mashā → mashaytu · daʿā → daʿawtu · waṣala / yaṣilu.',
});

module.exports = { meta, slides };
