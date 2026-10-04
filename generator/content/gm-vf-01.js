'use strict';
/* GM-VF-01 · Form I: The Basic Verb — website: Mastery & Revision › Grammar › Arabic Verb Forms › Form I (no added letters; past and
 * present vowels vary — kataba / yaktubu, fahima / yafhamu, kabura / yakburu — so learn each pair; family darasa, fahima, jalasa; clinic:
 * not every present has u; apply: three school sentences). The website gives three self-check items (used via W, re-keyed by the site’s
 * own answer index). Vowel-group table, conjugation, contrast, sorter, reading and model are teacher-written on the website content. */
const G = require('./gm-common');
const V = require('./gm-vf-common');
const { q } = G;

const KEY = 'grammar__07a-verb-forms__form-01';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-VF-01', fileTitle: 'Form_I', title: 'Form I: The Basic Verb', arabic: 'الْفِعْلُ الثُّلَاثِيُّ الْمُجَرَّدُ',
  focus: 'Form I is the root with nothing added: kataba, darasa, fahima. Its vowels are NOT fixed — yaktubu, yajlisu, yafhamu — so always learn the past and present as a pair.',
  icon: 'FaCube',
});

const slides = G.gmLesson({
  code: 'GM-VF-01', site: KEY,
  support: `• Core: the model pair كَتَبَ · يَكْتُبُ and the family دَرَسَ · فَهِمَ · جَلَسَ in sentences. Develop: the five vowel groups (يَكْتُبُ · يَجْلِسُ · يَفْتَحُ · يَفْهَمُ · يَكْبُرُ) and conjugation of فَهِمَ. Stretch: Form I vs derived forms from the same root (عَلِمَ / عَلَّمَ · خَرَجَ / أَخْرَجَ).
• Website clinic: do NOT assume every Form I present has u. Learn the actual past–present pair rather than guessing.
• Vocabulary habit: every new Form I verb goes in the book as three items — past · present · verbal noun (كَتَبَ · يَكْتُبُ · كِتَابَةٌ).`,
  teach: 'Pattern card; vowel groups; conjugation; Form I as the base.',
  wedo: 'Base vs derived; sort Form I / derived; repair.',
  next: { nextCode: 'GM-VF-02', nextTitle: 'Form II: Teaching and Intensifying', nextAr: 'الْوَزْنُ الثَّانِي' },
  doNow: {
    questions: [
      q('What is the root of يَكْتُبُ?', ['ك ت ب', 'ي ك ت', 'ت ب ك'], 'Remove the prefix ya-.'),
      q('Which verb has NO added letters?', ['دَرَسَ', 'دَرَّسَ', 'تَعَلَّمَ'], 'Darasa is the bare root = Form I.'),
      q('Choose the present of دَرَسَ.', ['يَدْرُسُ', 'يُدَرِّسُ', 'يَتَدَرَّسُ'], 'Form I present: ya- + root.'),
      q('Which word is the PAST?', ['جَلَسَ', 'يَجْلِسُ', 'اِجْلِسْ'], 'Jalasa = he sat.'),
      q('“I understand” is …', ['أَفْهَمُ', 'فَهِمْتُ', 'يَفْهَمُ'], 'a- = I, present (GM-V-05).'),
    ],
    keyIdea: { text: 'Form I = root only. The present vowel changes from verb to verb — learn every pair.', ar: '{k|كَتَبَ} · {k|يَكْتُبُ} ‖ {e|فَهِمَ} · {e|يَفْهَمُ}' },
    retrieves: 'Teacher-written retrieval from GM-VF-00 (roots) and the prep pairs fahima, jalasa, darasa.',
  },
  objectives: ['Recognise Form I: the root with no added letters.', 'Learn past and present as a pair.', 'Conjugate a Form I verb in past and present.', 'Tell Form I from a derived form of the same root.'],
  routes: {
    core: ['I use kataba / yaktubu and darasa / yadrusu.', 'I write a Form I sentence about school.'],
    develop: ['I know yaktubu, yajlisu and yafhamu have different vowels.', 'I conjugate fahima for six persons.'],
    stretch: ['I compare ʿalima with ʿallama.', 'I explain why Form I pairs must be learned.'],
  },
  terms: {
    items: [
      { ar: 'الْمُجَرَّدُ', en: 'basic (no added letters)', note: 'كَتَبَ' },
      { ar: 'الْمَاضِي', en: 'past', note: 'فَهِمَ' },
      { ar: 'الْمُضَارِعُ', en: 'present', note: 'يَفْهَمُ' },
      { ar: 'حَرَكَةُ الْعَيْنِ', en: 'the middle vowel', note: 'يَكْتُبُ · يَجْلِسُ' },
      { ar: 'الْمَصْدَرُ', en: 'verbal noun', note: 'كِتَابَةٌ' },
      { ar: 'فَاعِلٌ', en: 'the doer pattern', note: 'كَاتِبٌ' },
    ],
  },
  explain: [
    V.patternCard({
      roman: 'I', title: 'The root — nothing added', ar: 'فَعَلَ · يَفْعُلُ',
      template: ['فَعَلَ', 'يَفْعُلُ', 'سَمَاعِيٌّ', 'فَاعِلٌ', 'اُفْعُلْ'],
      model: ['كَتَبَ', 'يَكْتُبُ', 'كِتَابَةٌ', 'كَاتِبٌ', 'اُكْتُبْ'], meaning: 'to write',
      more: [['to sit', 'جَلَسَ', 'يَجْلِسُ', 'جُلُوسٌ', 'جَالِسٌ', 'اِجْلِسْ'], ['to open', 'فَتَحَ', 'يَفْتَحُ', 'فَتْحٌ', 'فَاتِحٌ', 'اِفْتَحْ'], ['to understand', 'فَهِمَ', 'يَفْهَمُ', 'فَهْمٌ', 'فَاهِمٌ', 'اِفْهَمْ']],
      foot: 'Website: Form I has no added derivational letters. The verbal noun of Form I is “heard” (samāʿī) — it must be learned with the verb (GM-V-12).',
      notes: 'PART 1 (3 min) — website “Root and pattern”. Template row = the f-ʿ-l model; second row = the real verb.',
    }),
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 2 · the vowels vary (website) · learn the pair', title: 'Five vowel groups', ar: 'حَرَكَاتُ الْفِعْلِ الْمُجَرَّدِ', ltr: true,
      cols: [{ label: 'Past · present', w: 3.4, size: 24 }, { label: 'Meaning', w: 2.4 }, { label: 'Vowels', w: 2.0 }, { label: 'Example (website)', w: 4.53, size: 20 }],
      rows: [
        { core: true, cells: ['كَتَبَ · يَكْتُبُ', 'to write', 'a → u', 'أَكْتُبُ رِسَالَةً إِلَى صَدِيقِي.'] },
        { core: true, cells: ['دَرَسَ · يَدْرُسُ', 'to study', 'a → u', 'دَرَسْتُ الْعَرَبِيَّةَ أَمْسِ.'] },
        { core: true, cells: ['جَلَسَ · يَجْلِسُ', 'to sit', 'a → i', 'يَجْلِسُ الطُّلَّابُ فِي الصَّفِّ.'] },
        { cells: ['فَتَحَ · يَفْتَحُ', 'to open', 'a → a', 'يَفْتَحُ الْمُعَلِّمُ الْبَابَ.'] },
        { cells: ['فَهِمَ · يَفْهَمُ', 'to understand', 'i → a', 'يَفْهَمُ الطَّالِبُ السُّؤَالَ.'] },
        { cells: ['كَبُرَ · يَكْبُرُ', 'to grow up', 'u → u', 'يَكْبُرُ الطِّفْلُ بِسُرْعَةٍ.'] },
      ],
      foot: 'Website: “Form I has several past / present vowel patterns. The displayed pattern is one common model, not a rule for every verb.”',
      notes: 'PART 2 (4 min) — website “Learn the family” + the vowel groups named in the website pattern note (fataḥa added as a common a → a example).',
    },
    V.conjTable({
      roman: 'I', verb: 'fahima', title: 'Past and present together', ar: 'تَصْرِيفُ «فَهِمَ»',
      rows: [
        ['أَنَا', 'فَهِمْتُ', 'أَفْهَمُ', '-tu · a-'],
        ['هُوَ', 'فَهِمَ', 'يَفْهَمُ', 'base · ya-'],
        ['هِيَ', 'فَهِمَتْ', 'تَفْهَمُ', '-at · ta-'],
        ['أَنْتَ', 'فَهِمْتَ', 'تَفْهَمُ', '-ta · ta-'],
        ['نَحْنُ', 'فَهِمْنَا', 'نَفْهَمُ', '-nā · na-'],
        ['هُمْ', 'فَهِمُوا', 'يَفْهَمُونَ', '-ū · ya- … -ūna'],
      ],
      foot: 'Website “Look closely”: the present prefix and the inner vowel belong to the conjugation (GM-V-04, V-05) — they do not create a new numbered form.',
      notes: 'PART 3 (3 min). Chant the column pairs. Stretch: conjugate jalasa in the same way.',
    }),
  ],
  quick: [
    W(/Self-check/, 1, { prompt: 'Which form means “I write”?', feedback: 'Aktubu is first-person singular present.' }),
    W(/Self-check/, 2, { prompt: 'Which statement is accurate?', feedback: 'Learn the root and the real past–present pair.' }),
    q('Choose the correct pair for “to sit”.', ['جَلَسَ · يَجْلِسُ', 'جَلَسَ · يَجْلُسُ', 'جَلَّسَ · يُجَلِّسُ'], 'a → i.'),
    q('Which verb is Form I?', ['فَهِمَ', 'فَهَّمَ', 'تَفَاهَمَ'], 'No added letters.'),
  ],
  quickNote: 'website Self-check items, plus two teacher items.',
  ido: {
    title: 'Watch me look up and use a Form I verb',
    steps: [
      { head: 'Root', ar: 'د ر س', think: 'Three letters, nothing added.' },
      { head: 'Past', ar: 'دَرَسَ', think: 'He studied.' },
      { head: 'Present', ar: 'يَدْرُسُ', think: 'Middle vowel u — learned.' },
      { head: 'My sentence', ar: 'أَدْرُسُ', think: 'a- for I.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'PRESENT', e: 'PAST' },
    model: '{k|أَدْرُسُ} الْعَرَبِيَّةَ كُلَّ يَوْمٍ. وَ{e|كَتَبْتُ} رِسَالَةً أَمْسِ. وَ{k|يَفْهَمُ} صَدِيقِي الدَّرْسَ.',
    modelEn: 'I study Arabic every day. I wrote a message yesterday. My friend understands the lesson.',
    notes: 'Website “Apply the form” model answer: one present, one past, a different subject in the third sentence.',
  },
  models: [
    { ar: 'أَكْتُبُ رِسَالَةً إِلَى صَدِيقِي.', en: 'I am writing a message to my friend.', tip: 'kataba · yaktubu.' },
    { ar: 'دَرَسْتُ الْعَرَبِيَّةَ أَمْسِ.', en: 'I studied Arabic yesterday.', tip: 'Past.' },
    { ar: 'يَفْهَمُ الطَّالِبُ السُّؤَالَ.', en: 'The student understands the question.', tip: 'i → a.' },
    { ar: 'جَلَسْنَا فِي الْحَدِيقَةِ.', en: 'We sat in the garden.', tip: 'jalasa.' },
  ],
  wedoSlides: [
    V.contrastTable({
      roman: 'II–X', title: 'Form I is the base', ar: 'الْمُجَرَّدُ وَالْمَزِيدُ',
      rows: [
        ['عَلِمَ', 'to know', 'عَلَّمَ', 'to teach (II)'],
        ['دَرَسَ', 'to study', 'دَرَّسَ', 'to teach a subject (II)'],
        ['خَرَجَ', 'to go out', 'أَخْرَجَ', 'to take out (IV)'],
        ['كَسَرَ', 'to break (something)', 'اِنْكَسَرَ', 'to become broken (VII)'],
        ['عَمِلَ', 'to work', 'اِسْتَعْمَلَ', 'to use (X)'],
      ],
      foot: 'The Form I verb is the starting point; added letters build new, related meanings (website: “a starting point for recognising roots”).',
      notes: 'WE DO (3 min). Cover column 3; students guess the derived verb from the meaning.',
    }),
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · root only, or letters added?', title: 'Form I or derived?', ar: 'مُجَرَّدٌ أَمْ مَزِيدٌ؟',
      categories: ['Form I (root only)', 'Derived (letters added)'],
      items: [['كَتَبَ', 0], ['فَهِمَ', 0], ['جَلَسَ', 0], ['كَبُرَ', 0], ['عَلَّمَ', 1], ['سَاعَدَ', 1], ['تَعَلَّمَ', 1], ['اِسْتَعْمَلَ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type 1 or 2 and name the added letter (shadda, ā, ta-, ista-).',
    },
  ],
  mistakes: [
    { wrong: 'هُوَ يَفْهُمُ', right: 'هُوَ يَفْهَمُ', why: 'Not every Form I present has u — learn the pair (website clinic).' },
    { wrong: 'أَنَا أَجْلُسُ', right: 'أَنَا أَجْلِسُ', why: 'Jalasa · yajlisu: the middle vowel is i.' },
    { wrong: 'هِيَ يَكْتُبُ', right: 'هِيَ تَكْتُبُ', why: 'The prefix still follows the person (GM-V-05).' },
  ],
  hints: ['u or a in yafhamu?', 'u or i in yajlisu?', 'ya- or ta- for she?'],
  practice: [
    q('Choose the present of فَتَحَ.', ['يَفْتَحُ', 'يَفْتُحُ', 'يُفَتِّحُ'], 'a → a.'),
    q('Choose “we understood”.', ['فَهِمْنَا', 'نَفْهَمُ', 'فَهِمُوا'], 'Past + -nā.'),
    q('Choose “they (m.) sit”.', ['يَجْلِسُونَ', 'جَلَسُوا', 'تَجْلِسُونَ'], 'ya- … -ūna.'),
    q('Why must Form I pairs be learned?', ['the present vowel is not predictable', 'Form I has no present', 'all Form I verbs are irregular'], 'Website: learn the actual pair.'),
  ],
  practiceLabel: 'teacher-written pair and conjugation questions',
  read: {
    title: 'My school day', label: 'reading for Form I verbs (teacher-written)',
    text: 'أَخْرُجُ مِنَ الْبَيْتِ فِي السَّابِعَةِ. أَصِلُ إِلَى الْمَدْرَسَةِ وَأَجْلِسُ فِي الصَّفِّ. نَدْرُسُ الْعَرَبِيَّةَ أَوَّلًا، وَنَكْتُبُ جُمَلًا جَدِيدَةً. أَمْسِ فَهِمْتُ دَرْسًا صَعْبًا، وَفَرِحَتِ الْمُعَلِّمَةُ. بَعْدَ الدَّرْسِ لَعِبْنَا فِي الْمَلْعَبِ، ثُمَّ رَجَعْتُ إِلَى الْبَيْتِ.',
    glossary: [['أَخْرُجُ', 'I go out'], ['أَصِلُ', 'I arrive'], ['فَرِحَتْ', 'she was happy'], ['الْمَلْعَبِ', 'the playground'], ['رَجَعْتُ', 'I returned']],
    task: 'Underline every Form I verb, then sort them into past and present.',
    questions: [
      q('Which verb is PAST?', ['فَهِمْتُ', 'أَجْلِسُ', 'نَكْتُبُ'], 'fahimtu = I understood.'),
      q('What is the present of رَجَعْتُ (I returned)?', ['أَرْجِعُ', 'أَرْجُعُ', 'أُرَجِّعُ'], 'rajaʿa · yarjiʿu — a → i.'),
      q('What do they study first?', ['Arabic', 'maths', 'science'], 'Nadrusu l-ʿarabiyyata awwalan.'),
      q('Why was the teacher happy?', ['the writer understood a hard lesson', 'they played football', 'the writer arrived early'], 'Fahimtu darsan ṣaʿban.'),
    ],
    qNote: 'Teacher-written text with Form I verbs; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: what I do at school', source: 'website “Apply the form”',
    prompts: [
      { route: 'core', ar: 'مَاذَا تَدْرُسُ الْيَوْمَ؟' },
      { route: 'develop', ar: 'مَاذَا كَتَبْتَ أَمْسِ؟ وَمَاذَا يَفْهَمُ صَدِيقُكَ؟' },
      { route: 'stretch', ar: 'صِفْ يَوْمَكَ الدِّرَاسِيَّ بِخَمْسَةِ أَفْعَالٍ مُجَرَّدَةٍ.' },
    ],
    stems: [
      { route: 'core', ar: 'الْيَوْمَ أَدْرُسُ ______ .' },
      { route: 'develop', ar: 'أَمْسِ كَتَبْتُ ______ ، وَصَدِيقِي يَفْهَمُ ______ .' },
      { route: 'stretch', ar: 'أَخْرُجُ ______ ، وَأَجْلِسُ ______ ، ثُمَّ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَاذَا تَدْرُسِينَ الْيَوْمَ؟', en: 'What are you studying today? (to a girl)' },
      { who: 'B', ar: 'أَدْرُسُ الْعُلُومَ وَالْعَرَبِيَّةَ. أَمْسِ كَتَبْتُ قِصَّةً قَصِيرَةً، وَفَهِمَتْ أُخْتِي كُلَّ كَلِمَةٍ!', en: 'I am studying science and Arabic. Yesterday I wrote a short story, and my sister understood every word!' },
    ],
    notes: 'Website: one present verb, one past verb and a different subject. Students check each pair aloud.',
  },
  write: {
    siteTask: 'Write three sentences about what you do at school. Use one present verb, one past verb and a different subject in the third sentence.',
    core: { amount: '3 sentences', task: 'Website task.', how: 'Copy the pair from the table.' },
    develop: { amount: '6 sentences', task: 'Add three more verbs from the vowel groups.', how: 'Check each present vowel.' },
    stretch: { amount: '8 sentences', task: 'A school day with six different Form I verbs and four persons.', how: 'Past and present.' },
  },
  frames: {
    core: [
      { en: 'I study … every day', ar: 'أَدْرُسُ ______ كُلَّ يَوْمٍ.' },
      { en: 'Yesterday I wrote …', ar: 'أَمْسِ كَتَبْتُ ______ .' },
      { en: 'My friend understands …', ar: 'يَفْهَمُ صَدِيقِي ______ .' },
      { en: 'We sit in …', ar: 'نَجْلِسُ فِي ______ .' },
    ],
    develop: [
      { en: 'The teacher opens …', ar: 'يَفْتَحُ الْمُعَلِّمُ ______ .' },
      { en: 'We went out to …', ar: 'خَرَجْنَا إِلَى ______ .' },
      { en: 'My sister understood …', ar: 'فَهِمَتْ أُخْتِي ______ .' },
      { en: 'They play in …', ar: 'يَلْعَبُونَ فِي ______ .' },
    ],
    bank: ['كَتَبَ · يَكْتُبُ', 'دَرَسَ · يَدْرُسُ', 'جَلَسَ · يَجْلِسُ', 'فَتَحَ · يَفْتَحُ', 'فَهِمَ · يَفْهَمُ', 'لَعِبَ · يَلْعَبُ', 'خَرَجَ · يَخْرُجُ', 'رَجَعَ · يَرْجِعُ'],
  },
  stretchTask: {
    task: 'Write a school day with six different Form I verbs and four different persons.',
    checklist: ['Six Form I verbs.', 'Past and present forms.', 'Four persons (I, he, she, we, they).', 'Each present vowel checked against the pair.', 'Time words: yesterday, every day.'],
    phrases: [['كُلَّ يَوْمٍ', 'every day'], ['أَمْسِ', 'yesterday'], ['أَوَّلًا', 'first'], ['بَعْدَ ذَلِكَ', 'after that'], ['ثُمَّ', 'then'], ['فِي الْمَسَاءِ', 'in the evening']],
  },
  model: {
    text: 'كُلَّ يَوْمٍ أَخْرُجُ مِنَ الْبَيْتِ مُبَكِّرًا، وَأَجْلِسُ فِي الْحَافِلَةِ مَعَ أَخِي. فِي الْمَدْرَسَةِ نَدْرُسُ مَوَادَّ كَثِيرَةً، وَأُحِبُّ الْعَرَبِيَّةَ أَكْثَرَ. أَمْسِ كَتَبْتُ قِصَّةً عَنْ جَدِّي، وَفَهِمَهَا كُلُّ الطُّلَّابِ. فِي الِاسْتِرَاحَةِ يَلْعَبُ أَصْدِقَائِي كُرَةَ الْقَدَمِ، وَأُخْتِي تَقْرَأُ فِي الْمَكْتَبَةِ. فِي الْمَسَاءِ رَجَعْنَا إِلَى الْبَيْتِ وَفَتَحْنَا كُتُبَنَا.',
    en: 'Every day I leave the house early, and I sit on the bus with my brother. At school we study many subjects, and I love Arabic most. Yesterday I wrote a story about my grandfather, and all the students understood it. At break my friends play football, and my sister reads in the library. In the evening we went home and opened our books.',
    find: ['Form I past', 'Form I present', 'a → i verb', 'different person'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'My Form I verbs have no added letters.' },
    { route: 'core', text: 'I used one past and one present verb.' },
    { route: 'develop', text: 'I checked every present vowel against the pair.' },
    { route: 'develop', text: 'My prefixes match the person.' },
    { route: 'stretch', text: 'I used four persons and six verbs.' },
  ],
  exit: [
    W(/Quick pattern/, 0, { prompt: 'Which pair correctly means “to understand”?', feedback: 'fahima pairs with yafhamu.' }),
    q('Which is Form I?', ['خَرَجَ', 'أَخْرَجَ', 'تَخَرَّجَ'], 'No added letters.'),
    q('“She sat” is …', ['جَلَسَتْ', 'تَجْلِسُ', 'جَلَسْتُ'], 'Past + -at.'),
  ],
  mastery: false,
  prep: {
    words: [['عَلَّمَ · يُعَلِّمُ', 'to teach', '—'], ['دَرَّسَ · يُدَرِّسُ', 'to teach a subject', '—'], ['نَظَّمَ · يُنَظِّمُ', 'to organise', '—'], ['حَضَّرَ · يُحَضِّرُ', 'to prepare', '—'], ['الشَّدَّةُ', 'shadda (doubling)', 'ـّ']],
    questionEn: 'Look at the four verbs: what do they all have on the middle letter?',
    questionAr: 'عَلَّمَ · دَرَّسَ · نَظَّمَ',
    homework: {
      core: 'Write ten Form I pairs (past · present) from your vocabulary.',
      develop: 'Conjugate jalasa in past and present for six persons.',
      stretch: 'A school day with six Form I verbs and four persons.',
    },
    wordsSource: 'The five words prepare GM-VF-02 (website Verb Forms: Form II).',
  },
  remember: 'Remember: Form I = root only · the present vowel varies (yaktubu, yajlisu, yafhamu) · learn every past–present pair · Form I is the base for Forms II–X.',
});

module.exports = { meta, slides };
