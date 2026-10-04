'use strict';
/* GM-VF-08 · Form VIII: Meeting, Choosing and Acquiring — website: Mastery & Revision › Grammar › Arabic Verb Forms › Form VIII (-t-
 * inserted after the first root letter: iftaʿala; present yaftaʿilu; kasaba “earn” vs iktasaba “acquire”; family ijtamaʿa, ikhtāra,
 * ihtamma; some roots show weak-letter or doubling changes; clinic: not every verb starting ista- is Form VIII — istaʿmala is Form X;
 * apply: choosing a course). Website self-check items used via W. Pattern extras, conjugation, contrast, sorter (VIII vs VII / X
 * look-alikes: istamaʿa, intaẓara), reading and model are teacher-written on the website content. */
const G = require('./gm-common');
const V = require('./gm-vf-common');
const { q } = G;

const KEY = 'grammar__07a-verb-forms__form-08';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-VF-08', fileTitle: 'Form_VIII', title: 'Form VIII: Meeting, Choosing and Acquiring', arabic: 'الْوَزْنُ الثَّامِنُ',
  focus: 'Form VIII slips a t inside the root, after the first letter: kasaba (earn) → iktasaba (acquire), jamaʿa (collect) → ijtamaʿa (meet). Present: yaktasibu. Find the t to find the form.',
  icon: 'FaUsers',
});

const slides = G.gmLesson({
  code: 'GM-VF-08', site: KEY,
  support: `• Core: اِكْتَسَبَ · يَكْتَسِبُ and the family اِجْتَمَعَ · اِخْتَارَ · اِحْتَرَمَ for choosing a course and meeting classmates. Develop: present forms (أَخْتَارُ · نَجْتَمِعُ · تَحْتَرِمِينَ) and the verbal noun اِفْتِعَالٌ (اِجْتِمَاعٌ · اِحْتِرَامٌ · اِخْتِيَارٌ). Stretch: look-alikes — اِسْتَمَعَ (VIII: s-m-ʿ + t) vs اِسْتَعْمَلَ (X), اِنْتَظَرَ (VIII: n-ẓ-r + t) vs اِنْكَسَرَ (VII).
• Website: some roots hide the pattern — ikhtāra (hollow) and ihtamma (doubled). Learn them as full past–present pairs.
• Very high-frequency nouns: اِجْتِمَاعٌ (meeting), اِمْتِحَانٌ (exam), اِحْتِرَامٌ (respect), اِخْتِيَارٌ (choice).`,
  teach: 'Pattern card; family; conjugation; Form I vs VIII; look-alikes.',
  wedo: 'Collect → meet; sort VIII / VII-X look-alikes; repair.',
  next: { nextCode: 'GM-VF-09', nextTitle: 'Form IX: Colours and Physical States', nextAr: 'الْوَزْنُ التَّاسِعُ' },
  doNow: {
    questions: [
      q('Which verb is Form VII?', ['اِنْكَسَرَ', 'كَسَّرَ', 'كُسِرَ'], 'in- before the root (GM-VF-07).'),
      q('Kasaba = to earn. Iktasaba = …', ['to acquire', 'to break', 'to write'], 'The prep question.'),
      q('Which letter was added inside اِكْتَسَبَ?', ['t', 'n', 's'], 'k-t-s-b: t after the first root letter.'),
      q('Ijtamaʿa means …', ['to meet / gather', 'to collect', 'to share'], 'Prep word.'),
      q('Ikhtāra means …', ['to choose', 'to test', 'to go out'], 'Prep word.'),
    ],
    keyIdea: { text: 'Form VIII = i- + first root letter + t + the rest (iftaʿala). Present = ya- … (yaftaʿilu).', ar: '{k|كَسَبَ} ‖ {e|اِكْتَسَبَ} · {e|يَكْتَسِبُ}' },
    retrieves: 'Teacher-written retrieval from GM-VF-07 and its prep words (iktasaba, ijtamaʿa, ikhtāra, ihtamma).',
  },
  objectives: ['Recognise Form VIII by the t after the first root letter.', 'Form the present with ya- … -i-.', 'Talk about choices, meetings and skills.', 'Tell Form VIII from Form VII and Form X look-alikes.'],
  routes: {
    core: ['I say I choose and we meet.', 'I write about skills I acquire.'],
    develop: ['I conjugate ijtamaʿa in past and present.', 'I use ijtimāʿ and iḥtirām.'],
    stretch: ['I explain why istamaʿa is Form VIII, not X.', 'I use ikhtāra and ihtamma correctly.'],
  },
  terms: {
    items: [
      { ar: 'الْوَزْنُ الثَّامِنُ', en: 'Form VIII', note: 'اِفْتَعَلَ' },
      { ar: 'تَاءُ الِافْتِعَالِ', en: 'the inserted t', note: 'اِجْتَمَعَ' },
      { ar: 'اِفْتِعَالٌ', en: 'Form VIII verbal noun', note: 'اِجْتِمَاعٌ' },
      { ar: 'مُفْتَعِلٌ', en: 'Form VIII doer', note: 'مُسْتَمِعٌ' },
      { ar: 'اِهْتَمَّ بِـ', en: 'to be interested in', note: 'أَهْتَمُّ بِاللُّغَاتِ' },
      { ar: 'اِسْتَمَعَ إِلَى', en: 'to listen to', note: 'أَسْتَمِعُ إِلَى' },
    ],
  },
  explain: [
    V.patternCard({
      roman: 'VIII', title: 'A t inside the root', ar: 'اِفْتَعَلَ · يَفْتَعِلُ',
      template: ['اِفْتَعَلَ', 'يَفْتَعِلُ', 'اِفْتِعَالٌ', 'مُفْتَعِلٌ', 'اِفْتَعِلْ'],
      model: ['اِكْتَسَبَ', 'يَكْتَسِبُ', 'اِكْتِسَابٌ', 'مُكْتَسِبٌ', 'اِكْتَسِبْ'], meaning: 'to acquire',
      more: [['to meet / gather', 'اِجْتَمَعَ', 'يَجْتَمِعُ', 'اِجْتِمَاعٌ', 'مُجْتَمِعٌ', 'اِجْتَمِعْ'], ['to listen', 'اِسْتَمَعَ', 'يَسْتَمِعُ', 'اِسْتِمَاعٌ', 'مُسْتَمِعٌ', 'اِسْتَمِعْ'], ['to respect', 'اِحْتَرَمَ', 'يَحْتَرِمُ', 'اِحْتِرَامٌ', 'مُحْتَرِمٌ', 'اِحْتَرِمْ']],
      foot: 'Website: for a regular root, Form VIII inserts t after the first root consonant: iftaʿala / yaftaʿilu. Some roots show assimilation or weak-letter changes.',
      notes: 'PART 1 (3 min) — website “Root and pattern”. Istamaʿa = s-m-ʿ + t: Form VIII, even though it starts ist-.',
    }),
    V.familyTable({
      roman: 'VIII', title: 'The Form VIII family', ar: 'أُسْرَةُ الْوَزْنِ الثَّامِنِ',
      rows: [
        ['اِكْتَسَبَ · يَكْتَسِبُ', 'to acquire', 'أَكْتَسِبُ مَهَارَاتٍ جَدِيدَةً مِنَ الْمُمَارَسَةِ.'],
        ['اِجْتَمَعَ · يَجْتَمِعُ', 'to meet / gather', 'اِجْتَمَعَ الطُّلَّابُ بَعْدَ الدَّرْسِ.'],
        ['اِخْتَارَ · يَخْتَارُ', 'to choose', 'أَخْتَارُ كِتَابًا جَدِيدًا لِلْقِرَاءَةِ.'],
        ['اِهْتَمَّ · يَهْتَمُّ', 'to be interested (in)', 'أَهْتَمُّ بِالْعُلُومِ.'],
        ['اِحْتَرَمَ · يَحْتَرِمُ', 'to respect', 'نَحْتَرِمُ آرَاءَ الْآخَرِينَ.'],
        ['اِنْتَظَرَ · يَنْتَظِرُ', 'to wait (for)', 'اِنْتَظَرْتُ الْحَافِلَةَ عِشْرِينَ دَقِيقَةً.'],
      ],
      foot: 'Website: in iktasaba the t is clearly visible. In ihtamma and ikhtāra, root-specific changes make the surface form less transparent — learn the full pairs.',
      notes: 'PART 2 (4 min) — website “Learn the family” (first three examples are the website sentences).',
    }),
    V.conjTable({
      roman: 'VIII', verb: 'ijtamaʿa', title: 'The i- goes; the t stays', ar: 'تَصْرِيفُ «اِجْتَمَعَ»',
      rows: [
        ['نَحْنُ', 'اِجْتَمَعْنَا', 'نَجْتَمِعُ', 'na- + j-t-m-ʿ'],
        ['هُمْ', 'اِجْتَمَعُوا', 'يَجْتَمِعُونَ', 'ya- … -ūna'],
        ['أَنَا', 'اِجْتَمَعْتُ', 'أَجْتَمِعُ', '+ maʿa'],
        ['هِيَ', 'اِجْتَمَعَتْ', 'تَجْتَمِعُ', 'ta-'],
        ['أَنْتِ', 'اِخْتَرْتِ', 'تَخْتَارِينَ', 'hollow: short in the past'],
        ['هُوَ', 'اِهْتَمَّ', 'يَهْتَمُّ', 'doubled'],
      ],
      foot: 'Website self-check: akhtāru is the first-person present (I choose); ikhtartu is the past (I chose). Like Form VII, the linking i- disappears in the present.',
      notes: 'PART 3 (3 min). Last two rows (Stretch) show the website’s “less transparent” verbs.',
    }),
  ],
  quick: [
    W(/Self-check/, 0, { prompt: 'Which pair is the regular Form VIII model?', feedback: 'Form VIII inserts t after the first root letter.' }),
    W(/Self-check/, 1, { prompt: 'Which form means “I choose”?', feedback: 'Akhtāru is the first-person present; ikhtartu is the past.' }),
    q('Choose “we met after school”.', ['اِجْتَمَعْنَا بَعْدَ الْمَدْرَسَةِ', 'جَمَعْنَا بَعْدَ الْمَدْرَسَةِ', 'اِسْتَجْمَعْنَا بَعْدَ الْمَدْرَسَةِ'], 'Form VIII past + -nā.'),
    q('Choose “I listen to the teacher”.', ['أَسْتَمِعُ إِلَى الْمُعَلِّمِ', 'أَسْمَعُ إِلَى الْمُعَلِّمِ', 'أَسْتَمِعُ الْمُعَلِّمَ'], 'istamaʿa + ilā.'),
  ],
  quickNote: 'website Self-check items, plus two teacher items.',
  ido: {
    title: 'Watch me explain a choice with Form VIII',
    steps: [
      { head: 'Choose', ar: 'أَخْتَارُ', think: 'Hollow Form VIII.' },
      { head: 'Interested', ar: 'أَهْتَمُّ', think: 'Doubled; + bi- (in).' },
      { head: 'Acquire', ar: 'أَكْتَسِبُ', think: 'k-t-s-b.' },
      { head: 'Meet', ar: 'أَجْتَمِعُ', think: 'j-t-m-ʿ.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'FORM VIII', e: 'OTHER' },
    model: '{k|أَخْتَارُ} دَرْسَ الْعَرَبِيَّةِ لِأَنَّنِي {k|أَهْتَمُّ} بِاللُّغَاتِ. {k|أَكْتَسِبُ} مَهَارَاتٍ جَدِيدَةً مِنَ الْمُمَارَسَةِ، وَ{k|أَجْتَمِعُ} مَعَ زُمَلَائِي كُلَّ أُسْبُوعٍ.',
    modelEn: 'I choose Arabic lessons because I am interested in languages. I acquire new skills through practice, and I meet my classmates every week.',
    notes: 'Website “Apply the form” model answer.',
  },
  models: [
    { ar: 'اِجْتَمَعَ الطُّلَّابُ بَعْدَ الدَّرْسِ.', en: 'The students met after the lesson.', tip: 'Website.' },
    { ar: 'أَخْتَارُ كِتَابًا جَدِيدًا لِلْقِرَاءَةِ.', en: 'I choose a new book to read.', tip: 'Website.' },
    { ar: 'نَحْتَرِمُ آرَاءَ الْآخَرِينَ.', en: 'We respect other people’s opinions.', tip: 'iḥtarama.' },
    { ar: 'أَسْتَمِعُ إِلَى الْقُرْآنِ كُلَّ صَبَاحٍ.', en: 'I listen to the Qur’an every morning.', tip: 'istamaʿa + ilā.' },
  ],
  wedoSlides: [
    V.contrastTable({
      roman: 'VIII', title: 'What the inner t adds', ar: 'مِنَ الْأَوَّلِ إِلَى الثَّامِنِ',
      rows: [
        ['كَسَبَ', 'to earn', 'اِكْتَسَبَ', 'to acquire'],
        ['جَمَعَ', 'to collect', 'اِجْتَمَعَ', 'to gather / meet'],
        ['سَمِعَ', 'to hear', 'اِسْتَمَعَ', 'to listen (to)'],
        ['نَظَرَ', 'to look', 'اِنْتَظَرَ', 'to wait (for)'],
        ['فَتَحَ', 'to open', 'اِفْتَتَحَ', 'to inaugurate / open officially'],
      ],
      foot: 'Website: the related meaning is useful, but Form VIII cannot be translated by one fixed English prefix. Hear → listen; look → wait.',
      notes: 'WE DO (3 min). Cover column 3; students insert the t after the first letter.',
    }),
    {
      type: 'sorter', min: 2, eyebrow: 'We do · website clinic · find the t after the first root letter', title: 'Form VIII, or a look-alike?', ar: 'ثَامِنٌ أَمْ شَبِيهٌ؟',
      categories: ['Form VIII (root + t)', 'Not VIII (VII in- / X ista-)'],
      items: [['اِسْتَمَعَ', 0], ['اِنْتَظَرَ', 0], ['اِكْتَسَبَ', 0], ['اِجْتَمَعَ', 0], ['اِسْتَعْمَلَ', 1], ['اِنْكَسَرَ', 1], ['اِسْتَقْبَلَ', 1], ['اِنْصَرَفَ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Istamaʿa: root s-m-ʿ, t after s → VIII. Istaʿmala: root ʿ-m-l, ista- before it → X. Intaẓara: root n-ẓ-r, t after n → VIII.',
    },
  ],
  mistakes: [
    { wrong: 'أَخْتَرْتُ هَذَا الْكِتَابَ', right: 'اِخْتَرْتُ هَذَا الْكِتَابَ', why: 'The past starts with i- (ikhtartu); akhtāru is the present.' },
    { wrong: 'يَجْمَعُ الطُّلَّابُ بَعْدَ الدَّرْسِ', right: 'يَجْتَمِعُ الطُّلَّابُ بَعْدَ الدَّرْسِ', why: 'To gather / meet (no object) = Form VIII.' },
    { wrong: 'اِسْتَمَعْتُ الْمُعَلِّمَ', right: 'اِسْتَمَعْتُ إِلَى الْمُعَلِّمِ', why: 'Istamaʿa takes ilā.' },
  ],
  hints: ['Past or present?', 'Collect or meet?', 'Which preposition?'],
  practice: [
    W(/Self-check/, 2, { prompt: 'Why can ihtamma be difficult to recognise?', feedback: 'Doubling can change the visible pattern.' }),
    q('What is the verbal noun of اِحْتَرَمَ?', ['اِحْتِرَامٌ', 'حُرْمَةٌ', 'مُحْتَرَمٌ'], 'iftiʿāl.'),
    q('Choose “she is interested in science”.', ['تَهْتَمُّ بِالْعُلُومِ', 'تُهِمُّ الْعُلُومَ', 'اِهْتَمَّتِ الْعُلُومُ'], 'ihtamma + bi-.'),
    q('Which is Form VIII?', ['اِنْتَظَرَ', 'اِنْكَسَرَ', 'اِسْتَخْدَمَ'], 'n-ẓ-r with t after n.'),
  ],
  practiceLabel: 'website Self-check item and teacher-written questions',
  read: {
    title: 'Choosing my options', label: 'reading for Form VIII (teacher-written)',
    text: 'هَذِهِ السَّنَةَ اخْتَرْتُ ثَلَاثَ مَوَادَّ جَدِيدَةً. أَهْتَمُّ بِالتَّارِيخِ، لِذَلِكَ اخْتَرْتُهُ أَوَّلًا. اِجْتَمَعْتُ مَعَ الْمُرْشِدَةِ، وَاسْتَمَعْتُ إِلَى نَصَائِحِهَا. قَالَتْ: «سَتَكْتَسِبِينَ مَهَارَاتٍ مُهِمَّةً، وَلَكِنْ لَا تَنْسَيِ الِامْتِحَانَاتِ!». الْآنَ أَنْتَظِرُ بِدَايَةَ الْفَصْلِ بِشَوْقٍ، وَأَحْتَرِمُ رَأْيَ وَالِدَيَّ أَيْضًا.',
    glossary: [['مَوَادَّ', 'subjects'], ['الْمُرْشِدَةِ', 'the careers adviser (f.)'], ['نَصَائِحِهَا', 'her advice'], ['بِشَوْقٍ', 'eagerly'], ['وَالِدَيَّ', 'my parents']],
    task: 'Website: write about choosing a course. First, underline every Form VIII verb here.',
    questions: [
      q('Why did the writer choose history first?', ['she is interested in it', 'her parents chose it', 'it is easy'], 'Ahtammu bi-t-tārīkh.'),
      q('Who did she meet?', ['the careers adviser', 'her teacher', 'her parents'], 'Ijtamaʿtu maʿa l-murshida.'),
      q('What is she waiting for eagerly?', ['the start of term', 'the exams', 'the results'], 'Antaẓiru bidāyata l-faṣl.'),
      q('Which verb is Form VIII + ilā?', ['اِسْتَمَعْتُ', 'اِخْتَرْتُ', 'أَحْتَرِمُ'], 'istamaʿtu ilā.'),
    ],
    qNote: 'Teacher-written text for the website “Apply the form” task; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: my choices and interests', source: 'website “Apply the form”',
    prompts: [
      { route: 'core', ar: 'بِمَاذَا تَهْتَمُّ؟' },
      { route: 'develop', ar: 'أَيَّ مَوَادَّ اخْتَرْتَ هَذِهِ السَّنَةَ؟ وَلِمَاذَا؟' },
      { route: 'stretch', ar: 'مَا الْمَهَارَاتُ الَّتِي تَكْتَسِبُهَا؟ وَمَتَى تَجْتَمِعُ مَعَ زُمَلَائِكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَهْتَمُّ ______ .' },
      { route: 'develop', ar: 'اِخْتَرْتُ ______ لِأَنَّنِي ______ .' },
      { route: 'stretch', ar: 'أَكْتَسِبُ ______ ، وَنَجْتَمِعُ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'بِمَاذَا تَهْتَمِّينَ؟', en: 'What are you interested in? (to a girl)' },
      { who: 'B', ar: 'أَهْتَمُّ بِالْفَنِّ وَالتَّصْمِيمِ. اِخْتَرْتُ دَرْسَ الرَّسْمِ، وَأَكْتَسِبُ مَهَارَاتٍ جَدِيدَةً كُلَّ أُسْبُوعٍ.', en: 'I am interested in art and design. I chose the drawing course, and I acquire new skills every week.' },
    ],
    notes: 'Website: explain your choice, the skills you acquire and why the subject interests you.',
  },
  write: {
    siteTask: 'Write a short paragraph about choosing a course or activity. Explain your choice, the skills you acquire and why the subject interests you.',
    core: { amount: '3 sentences', task: 'Website task.', how: 'akhtāru · ahtammu bi- · aktasibu.' },
    develop: { amount: '6 sentences', task: 'Add ijtamaʿa, istamaʿa ilā and a verbal noun.', how: 'Past and present.' },
    stretch: { amount: '8 sentences', task: 'An options choice with five Form VIII verbs, including intaẓara and iḥtarama.', how: 'One look-alike explained.' },
  },
  frames: {
    core: [
      { en: 'I choose … because …', ar: 'أَخْتَارُ ______ لِأَنَّ ______ .' },
      { en: 'I am interested in …', ar: 'أَهْتَمُّ ______ .' },
      { en: 'I acquire … skills', ar: 'أَكْتَسِبُ مَهَارَاتٍ ______ .' },
      { en: 'We meet every …', ar: 'نَجْتَمِعُ كُلَّ ______ .' },
    ],
    develop: [
      { en: 'I chose … this year', ar: 'اِخْتَرْتُ ______ هَذِهِ السَّنَةَ.' },
      { en: 'I listened to …', ar: 'اِسْتَمَعْتُ إِلَى ______ .' },
      { en: 'I am waiting for …', ar: 'أَنْتَظِرُ ______ .' },
      { en: 'Respect for … is important', ar: 'اِحْتِرَامُ ______ مُهِمٌّ.' },
    ],
    bank: ['اِخْتَارَ · يَخْتَارُ', 'اِهْتَمَّ · يَهْتَمُّ', 'اِكْتَسَبَ · يَكْتَسِبُ', 'اِجْتَمَعَ · يَجْتَمِعُ', 'اِسْتَمَعَ · يَسْتَمِعُ', 'اِنْتَظَرَ · يَنْتَظِرُ', 'اِحْتَرَمَ · يَحْتَرِمُ', 'اِجْتِمَاعٌ', 'اِخْتِيَارٌ'],
  },
  stretchTask: {
    task: 'Write about choosing your options with five Form VIII verbs, including intaẓara and iḥtarama.',
    checklist: ['Five Form VIII verbs (t after the first root letter).', 'Past with i-, present without it.', 'ihtamma + bi- and istamaʿa + ilā.', 'One verbal noun (ijtimāʿ, ikhtiyār).', 'One look-alike explained (istamaʿa vs istaʿmala).'],
    phrases: [['لِذَلِكَ', 'so / therefore'], ['فِي الْمُسْتَقْبَلِ', 'in the future'], ['مَهَارَاتٌ جَدِيدَةٌ', 'new skills'], ['نَصِيحَةٌ', 'advice'], ['بِشَوْقٍ', 'eagerly'], ['رَأْيُ', 'the opinion of']],
  },
  model: {
    text: 'فِي الشَّهْرِ الْمَاضِي اخْتَرْتُ مَوَادَّ السَّنَةِ الْقَادِمَةِ. أَهْتَمُّ بِالْحَاسُوبِ وَالرِّيَاضِيَّاتِ، لِذَلِكَ اخْتَرْتُ الْبَرْمَجَةَ. اِجْتَمَعْتُ مَعَ مُعَلِّمِي، وَاسْتَمَعْتُ إِلَى رَأْيِهِ بِاهْتِمَامٍ. قَالَ إِنَّنِي سَأَكْتَسِبُ مَهَارَاتٍ مُفِيدَةً لِلْمُسْتَقْبَلِ. أَحْتَرِمُ رَأْيَ أُسْرَتِي أَيْضًا، وَقَدِ اتَّفَقْنَا عَلَى اخْتِيَارِي. الْآنَ أَنْتَظِرُ الِامْتِحَانَاتِ، وَأَسْتَعْمِلُ الْحَاسُوبَ لِلْمُرَاجَعَةِ.',
    en: 'Last month I chose next year’s subjects. I am interested in computers and maths, so I chose programming. I met my teacher and listened to his opinion carefully. He said I will acquire useful skills for the future. I respect my family’s opinion too, and we agreed on my choice. Now I am waiting for the exams, and I use the computer for revision.',
    find: ['Form VIII past', 'Form VIII present', 'iftiʿāl noun', 'Form X verb'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'My Form VIII verbs have a t after the first root letter.' },
    { route: 'core', text: 'Past starts with i-; present with ya- / a- / na-.' },
    { route: 'develop', text: 'I used ihtamma bi- and istamaʿa ilā.' },
    { route: 'develop', text: 'I used a verbal noun like ijtimāʿ.' },
    { route: 'stretch', text: 'I did not confuse VIII with VII or X.' },
  ],
  exit: [
    q('Choose “I chose”.', ['اِخْتَرْتُ', 'أَخْتَارُ', 'خِرْتُ'], 'Past of ikhtāra.'),
    q('Which is Form VIII?', ['اِسْتَمَعَ', 'اِسْتَعْمَلَ', 'اِسْتَقْبَلَ'], 's-m-ʿ + t.'),
    q('Choose “they meet every Friday”.', ['يَجْتَمِعُونَ كُلَّ جُمُعَةٍ', 'يَجْمَعُونَ كُلَّ جُمُعَةٍ', 'اِجْتَمِعُوا كُلَّ جُمُعَةٍ'], 'Form VIII present + -ūna.'),
  ],
  mastery: false,
  prep: {
    words: [['اِحْمَرَّ · يَحْمَرُّ', 'to turn red', '—'], ['اِصْفَرَّ · يَصْفَرُّ', 'to turn yellow', '—'], ['اِخْضَرَّ · يَخْضَرُّ', 'to turn green', '—'], ['أَحْمَرُ', 'red', '—'], ['الْأَلْوَانُ', 'colours', '—']],
    questionEn: 'Aḥmar = red. Iḥmarra = ? What do you notice at the end of the verb?',
    questionAr: 'أَحْمَرُ · اِحْمَرَّ',
    homework: {
      core: 'Write five sentences with ikhtāra, ijtamaʿa and iktasaba.',
      develop: 'Conjugate intaẓara in past and present for six persons.',
      stretch: 'An options choice with five Form VIII verbs.',
    },
    wordsSource: 'The five words prepare GM-VF-09 (website Verb Forms: Form IX).',
  },
  remember: 'Remember: Form VIII = t after the first root letter (iftaʿala) · present yaftaʿilu · noun iftiʿāl (ijtimāʿ, imtiḥān) · istamaʿa and intaẓara are VIII — not X or VII.',
});

module.exports = { meta, slides };
