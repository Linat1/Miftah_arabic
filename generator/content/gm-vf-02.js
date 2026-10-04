'use strict';
/* GM-VF-02 · Form II: Teaching and Intensifying — website: Mastery & Revision › Grammar › Arabic Verb Forms › Form II (the middle root
 * letter doubled with shadda; present yufaʿʿilu; ʿalima “know” vs ʿallama “teach” — a useful causative link, not a guarantee; family
 * darrasa, naẓẓama, ḥaḍḍara; clinic: a shadda does not automatically mean Form II — doubled Form I verbs like marra also have one;
 * apply: an instruction to a new student). Website self-check items used via W. Conjugation, contrast, sorter, reading and model are
 * teacher-written on the website content. */
const G = require('./gm-common');
const V = require('./gm-vf-common');
const { q } = G;

const KEY = 'grammar__07a-verb-forms__form-02';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-VF-02', fileTitle: 'Form_II', title: 'Form II: Teaching and Intensifying', arabic: 'الْوَزْنُ الثَّانِي',
  focus: 'Form II doubles the middle root letter with a shadda: ʿalima (know) → ʿallama (teach). The present starts with u-: yuʿallimu. It often means “make someone do” or “do a lot” — but each verb must be learned.',
  icon: 'FaChalkboardUser',
});

const slides = G.gmLesson({
  code: 'GM-VF-02', site: KEY,
  support: `• Core: عَلَّمَ · يُعَلِّمُ and the family دَرَّسَ · نَظَّمَ · حَضَّرَ in sentences about school. Develop: the present with u- (أُنَظِّمُ · تُعَلِّمُ · يُدَرِّسُونَ) and the verbal noun تَفْعِيلٌ (تَعْلِيمٌ · تَنْظِيمٌ). Stretch: Form I vs Form II meaning (فَهِمَ / فَهَّمَ · كَسَرَ / كَسَّرَ) and the clinic: doubled Form I verbs (مَرَّ · رَدَّ).
• Pronunciation: hold the doubled letter — ʿal-la-ma, not ʿa-la-ma. The shadda changes the meaning.
• Present prefix vowel is u (yu-, tu-, u-, nu-) in Form II — a key difference from Form I.`,
  teach: 'Pattern card; family; conjugation with u-; Form I vs II.',
  wedo: 'Same root, Form II; sort real Form II / doubled Form I; repair.',
  next: { nextCode: 'GM-VF-03', nextTitle: 'Form III: Participation and Interaction', nextAr: 'الْوَزْنُ الثَّالِثُ' },
  doNow: {
    questions: [
      q('Which verb is Form I?', ['عَلِمَ', 'عَلَّمَ', 'تَعَلَّمَ'], 'No added letters (GM-VF-01).'),
      q('What is on the middle letter of عَلَّمَ?', ['a shadda', 'a sukūn', 'nothing'], 'The prep word: shadda.'),
      q('Darrasa means …', ['to teach a subject', 'to study', 'to write'], 'Prep word from GM-VF-01.'),
      q('Choose the present of عَلَّمَ.', ['يُعَلِّمُ', 'يَعْلَمُ', 'يَتَعَلَّمُ'], 'Form II present: yu- … -i-.'),
      q('Naẓẓama means …', ['to organise', 'to look', 'to clean'], 'Prep word.'),
    ],
    keyIdea: { text: 'Form II = double the middle letter (shadda). Present = yu- + kasra before the last letter.', ar: '{k|عَلِمَ} ‖ {e|عَلَّمَ} · {e|يُعَلِّمُ}' },
    retrieves: 'Teacher-written retrieval from GM-VF-01 and its prep words (ʿallama, darrasa, naẓẓama, ḥaḍḍara).',
  },
  objectives: ['Recognise Form II by the shadda on the middle letter.', 'Form the present with yu-.', 'Use Form II verbs about teaching and organising.', 'Explain how Form II changes a Form I meaning.'],
  routes: {
    core: ['I use ʿallama and naẓẓama in sentences.', 'I say the shadda clearly.'],
    develop: ['I conjugate naẓẓama in past and present.', 'I use the verbal noun tanẓīm.'],
    stretch: ['I compare fahima and fahhama.', 'I explain why marra is not Form II.'],
  },
  terms: {
    items: [
      { ar: 'الْوَزْنُ الثَّانِي', en: 'Form II', note: 'فَعَّلَ' },
      { ar: 'الشَّدَّةُ', en: 'shadda (doubling)', note: 'عَلَّمَ' },
      { ar: 'التَّعْدِيَةُ', en: 'making someone do (causative)', note: 'فَهَّمَ' },
      { ar: 'التَّكْثِيرُ', en: 'doing a lot (intensive)', note: 'كَسَّرَ' },
      { ar: 'تَفْعِيلٌ', en: 'Form II verbal noun', note: 'تَعْلِيمٌ' },
      { ar: 'مُفَعِّلٌ', en: 'Form II doer', note: 'مُعَلِّمٌ' },
    ],
  },
  explain: [
    V.patternCard({
      roman: 'II', title: 'Double the middle letter', ar: 'فَعَّلَ · يُفَعِّلُ',
      template: ['فَعَّلَ', 'يُفَعِّلُ', 'تَفْعِيلٌ', 'مُفَعِّلٌ', 'فَعِّلْ'],
      model: ['عَلَّمَ', 'يُعَلِّمُ', 'تَعْلِيمٌ', 'مُعَلِّمٌ', 'عَلِّمْ'], meaning: 'to teach',
      more: [['to organise', 'نَظَّمَ', 'يُنَظِّمُ', 'تَنْظِيمٌ', 'مُنَظِّمٌ', 'نَظِّمْ'], ['to prepare', 'حَضَّرَ', 'يُحَضِّرُ', 'تَحْضِيرٌ', 'مُحَضِّرٌ', 'حَضِّرْ'], ['to teach a subject', 'دَرَّسَ', 'يُدَرِّسُ', 'تَدْرِيسٌ', 'مُدَرِّسٌ', 'دَرِّسْ']],
      foot: 'Website: the middle root consonant is doubled, written with shadda. In the present the usual pattern is yufaʿʿilu. The shadda is part of the verb stem, not decoration.',
      notes: 'PART 1 (3 min) — website “Root and pattern”. Verbal noun, doer and command added from GM-V-12 / V-07 patterns.',
    }),
    V.familyTable({
      roman: 'II', title: 'The Form II family', ar: 'أُسْرَةُ الْوَزْنِ الثَّانِي',
      rows: [
        ['عَلَّمَ · يُعَلِّمُ', 'to teach', 'تُعَلِّمُ الْمُعَلِّمَةُ الطُّلَّابَ الْعَرَبِيَّةَ.'],
        ['نَظَّمَ · يُنَظِّمُ', 'to organise', 'نَظَّمْنَا وَقْتَنَا قَبْلَ الِامْتِحَانِ.'],
        ['حَضَّرَ · يُحَضِّرُ', 'to prepare', 'أُحَضِّرُ وَجْبَةَ الْغَدَاءِ.'],
        ['دَرَّسَ · يُدَرِّسُ', 'to teach a subject', 'يُدَرِّسُ أَبِي الرِّيَاضِيَّاتِ.'],
        ['غَيَّرَ · يُغَيِّرُ', 'to change', 'غَيَّرْتُ رَأْيِي.'],
        ['صَحَّحَ · يُصَحِّحُ', 'to correct', 'تُصَحِّحُ الْمُعَلِّمَةُ الْوَاجِبَ.'],
      ],
      foot: 'Website: ʿalima means to know, while ʿallama means to teach — to make someone know. A useful causative link, but not every Form II verb has a predictable meaning.',
      notes: 'PART 2 (4 min) — website “Learn the family” (first three examples are the website sentences).',
    }),
    V.conjTable({
      roman: 'II', verb: 'naẓẓama', title: 'The present starts with u-', ar: 'تَصْرِيفُ «نَظَّمَ»',
      rows: [
        ['أَنَا', 'نَظَّمْتُ', 'أُنَظِّمُ', 'u- not a-'],
        ['هُوَ', 'نَظَّمَ', 'يُنَظِّمُ', 'yu-'],
        ['هِيَ', 'نَظَّمَتْ', 'تُنَظِّمُ', 'tu-'],
        ['أَنْتِ', 'نَظَّمْتِ', 'تُنَظِّمِينَ', 'tu- … -īna'],
        ['نَحْنُ', 'نَظَّمْنَا', 'نُنَظِّمُ', 'nu-'],
        ['هُمْ', 'نَظَّمُوا', 'يُنَظِّمُونَ', 'yu- … -ūna'],
      ],
      foot: 'Website “Look closely”: yaʿlamu (he knows) belongs to Form I; yuʿallimu (he teaches) belongs to Form II. Listen for u- and the shadda.',
      notes: 'PART 3 (3 min). Contrast a- (Form I aktubu) with u- (Form II unaẓẓimu).',
    }),
  ],
  quick: [
    W(/Self-check/, 0, { feedback: 'ʿAllama is Form II, with a doubled middle letter.' }),
    W(/Self-check/, 1, { prompt: 'Choose the correct present of naẓẓama.', feedback: 'Form II present: yufaʿʿilu.' }),
    q('Choose “I prepare”.', ['أُحَضِّرُ', 'أَحْضُرُ', 'حَضَّرْتُ'], 'Form II present: u-.'),
    q('Which verb is Form II?', ['حَضَّرَ', 'حَضَرَ', 'حَاضَرَ'], 'Shadda on the middle root letter ḍ (ḥaḍara = to attend, Form I).'),
  ],
  quickNote: 'website Self-check items, plus two teacher items.',
  ido: {
    title: 'Watch me explain my study routine with Form II',
    steps: [
      { head: 'Form I', ar: 'نَظَمَ', think: 'Root n-ẓ-m.' },
      { head: 'Form II', ar: 'نَظَّمَ', think: 'Double the middle: organise.' },
      { head: 'Present', ar: 'أُنَظِّمُ', think: 'u- for I.' },
      { head: 'Noun', ar: 'تَنْظِيمٌ', think: 'tafʿīl: organisation.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'FORM II PRESENT', e: 'OTHER' },
    model: '{k|أُنَظِّمُ} وَقْتِي كُلَّ مَسَاءٍ، وَ{k|تُعَلِّمُنِي} الْمُعَلِّمَةُ الْعَرَبِيَّةَ. {k|أُحَضِّرُ} دُرُوسِي قَبْلَ النَّوْمِ.',
    modelEn: 'I organise my time every evening, and the teacher teaches me Arabic. I prepare my lessons before sleeping.',
    notes: 'Website “Apply the form” model answer.',
  },
  models: [
    { ar: 'تُعَلِّمُ الْمُعَلِّمَةُ الطُّلَّابَ الْعَرَبِيَّةَ.', en: 'The teacher teaches the students Arabic.', tip: 'Website.' },
    { ar: 'نَظَّمْنَا وَقْتَنَا قَبْلَ الِامْتِحَانِ.', en: 'We organised our time before the exam.', tip: 'Past.' },
    { ar: 'أُحَضِّرُ وَجْبَةَ الْغَدَاءِ.', en: 'I am preparing lunch.', tip: 'u-.' },
    { ar: 'فَهَّمَنِي أَخِي الدَّرْسَ.', en: 'My brother explained the lesson to me.', tip: 'Made me understand.' },
  ],
  wedoSlides: [
    V.contrastTable({
      roman: 'II', title: 'Know → teach: what the shadda adds', ar: 'مِنَ الْأَوَّلِ إِلَى الثَّانِي',
      rows: [
        ['عَلِمَ', 'to know', 'عَلَّمَ', 'to teach (make know)'],
        ['دَرَسَ', 'to study', 'دَرَّسَ', 'to teach a subject'],
        ['فَهِمَ', 'to understand', 'فَهَّمَ', 'to explain (make understand)'],
        ['كَسَرَ', 'to break', 'كَسَّرَ', 'to smash (break a lot)'],
        ['قَطَعَ', 'to cut', 'قَطَّعَ', 'to cut into pieces'],
      ],
      foot: 'Two common ideas: causative (make someone …) and intensive (… a lot). Clues, not rules — check each verb.',
      notes: 'WE DO (3 min). Cover column 3; students add the shadda and guess the meaning.',
    }),
    {
      type: 'sorter', min: 2, eyebrow: 'We do · website clinic · not every shadda is Form II', title: 'Form II, or a doubled Form I?', ar: 'وَزْنٌ ثَانٍ أَمْ مُضَعَّفٌ؟',
      categories: ['Form II (3 root letters + shadda)', 'Doubled Form I (root ends in a pair)'],
      items: [['عَلَّمَ', 0], ['نَظَّمَ', 0], ['حَضَّرَ', 0], ['غَيَّرَ', 0], ['مَرَّ', 1], ['رَدَّ', 1], ['شَدَّ', 1], ['عَدَّ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Website clinic: marra (m-r-r) has a shadda but is Form I (GM-V-02 doubled verbs). Count the letters!',
    },
  ],
  mistakes: [
    { wrong: 'هُوَ يَنْظُمُ وَقْتَهُ', right: 'هُوَ يُنَظِّمُ وَقْتَهُ', why: 'Form II present: yu- and the shadda.' },
    { wrong: 'أَنَا أَعْلَمُ أَخِي الْقِرَاءَةَ', right: 'أَنَا أُعَلِّمُ أَخِي الْقِرَاءَةَ', why: 'Aʿlamu = I know (Form I); uʿallimu = I teach.' },
    { wrong: 'مَرَّ: الْوَزْنُ الثَّانِي', right: 'مَرَّ: الْوَزْنُ الْأَوَّلُ', why: 'A shadda alone does not make Form II (website clinic).' },
  ],
  hints: ['ya- or yu-?', 'Know or teach?', 'How many root letters?'],
  practice: [
    W(/Self-check/, 2, { prompt: 'Which statement is correct?', feedback: 'Patterns provide clues, not a complete dictionary.' }),
    q('Choose “she teaches”.', ['تُعَلِّمُ', 'تَعْلَمُ', 'عَلَّمَتْ'], 'tu- + shadda.'),
    q('What is the verbal noun of نَظَّمَ?', ['تَنْظِيمٌ', 'نِظَامٌ', 'مُنَظِّمٌ'], 'tafʿīl.'),
    q('Choose “we prepared”.', ['حَضَّرْنَا', 'نُحَضِّرُ', 'حَضَرْنَا'], 'Past + -nā; ḥaḍarnā (no shadda) = we attended.'),
  ],
  practiceLabel: 'website Self-check item and teacher-written questions',
  read: {
    title: 'Welcome, new student!', label: 'reading for Form II (teacher-written note)',
    text: 'أَهْلًا بِكِ فِي صَفِّنَا! تُعَلِّمُنَا الْأُسْتَاذَةُ مَرْيَمُ الْعَرَبِيَّةَ، وَيُدَرِّسُنَا الْأُسْتَاذُ عُمَرُ الْعُلُومَ. كُلَّ صَبَاحٍ نُنَظِّمُ الطَّاوِلَاتِ، وَنُحَضِّرُ كُتُبَنَا. تُصَحِّحُ الْمُعَلِّمَةُ الْوَاجِبَ يَوْمَ الْخَمِيسِ. إِذَا لَمْ تَفْهَمِي شَيْئًا، فَسَأُفَهِّمُكِ الدَّرْسَ!',
    glossary: [['الطَّاوِلَاتِ', 'the tables'], ['الْوَاجِبَ', 'the homework'], ['شَيْئًا', 'something'], ['سَأُفَهِّمُكِ', 'I will explain to you']],
    task: 'Website: write a short instruction to a new student. First, underline every Form II verb in this one.',
    questions: [
      q('Who teaches science?', ['Mr ʿUmar', 'Miss Maryam', 'the new student'], 'Yudarrisunā l-ustādhu ʿUmar.'),
      q('What do the students do every morning?', ['organise the tables and prepare their books', 'correct homework', 'teach Arabic'], 'Nunaẓẓimu · nuḥaḍḍiru.'),
      q('When is homework corrected?', ['on Thursday', 'every morning', 'on Sunday'], 'Yawma l-khamīs.'),
      q('Which word means “I will explain to you”?', ['سَأُفَهِّمُكِ', 'تَفْهَمِي', 'تُعَلِّمُنَا'], 'Form II of fahima + sa-.'),
    ],
    qNote: 'Teacher-written note modelled on the website “Apply the form” task; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: how I organise my study', source: 'website “Apply the form”',
    prompts: [
      { route: 'core', ar: 'مَنْ يُعَلِّمُكَ الْعَرَبِيَّةَ؟' },
      { route: 'develop', ar: 'كَيْفَ تُنَظِّمُ وَقْتَكَ قَبْلَ الِامْتِحَانِ؟' },
      { route: 'stretch', ar: 'مَاذَا تُحَضِّرُ قَبْلَ الْمَدْرَسَةِ؟ وَمَنْ يُصَحِّحُ وَاجِبَكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'يُعَلِّمُنِي ______ .' },
      { route: 'develop', ar: 'أُنَظِّمُ وَقْتِي ______ .' },
      { route: 'stretch', ar: 'أُحَضِّرُ ______ ، وَيُصَحِّحُ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'كَيْفَ تُنَظِّمِينَ وَقْتَكِ؟', en: 'How do you organise your time? (to a girl)' },
      { who: 'B', ar: 'أُنَظِّمُ وَقْتِي بِجَدْوَلٍ. أُحَضِّرُ دُرُوسِي مَسَاءً، وَتُعَلِّمُنِي أُخْتِي الرِّيَاضِيَّاتِ.', en: 'I organise my time with a timetable. I prepare my lessons in the evening, and my sister teaches me maths.' },
    ],
    notes: 'Website: explain how you organise your study and who teaches you, with two Form II verbs and a time expression. Hold the shadda when speaking.',
  },
  write: {
    siteTask: 'Write a short instruction to a new student. Explain how you organise your study and who teaches you. Include two Form II verbs and one time expression.',
    core: { amount: '3 sentences', task: 'Website task.', how: 'ʿallama and naẓẓama.' },
    develop: { amount: '5 sentences', task: 'Add ḥaḍḍara, ṣaḥḥaḥa and a verbal noun.', how: 'Present with u-.' },
    stretch: { amount: '8 sentences', task: 'A welcome guide with four Form II verbs and one Form I / II contrast.', how: 'e.g. darasa / darrasa.' },
  },
  frames: {
    core: [
      { en: '… teaches me …', ar: 'يُعَلِّمُنِي ______ .' },
      { en: 'I organise my time …', ar: 'أُنَظِّمُ وَقْتِي ______ .' },
      { en: 'I prepare … every evening', ar: 'أُحَضِّرُ ______ كُلَّ مَسَاءٍ.' },
      { en: 'The teacher corrects …', ar: 'تُصَحِّحُ الْمُعَلِّمَةُ ______ .' },
    ],
    develop: [
      { en: 'My father teaches …', ar: 'يُدَرِّسُ أَبِي ______ .' },
      { en: 'Organisation helps me …', ar: 'التَّنْظِيمُ يُسَاعِدُنِي ______ .' },
      { en: 'I changed …', ar: 'غَيَّرْتُ ______ .' },
      { en: 'My friend explained … to me', ar: 'فَهَّمَنِي صَدِيقِي ______ .' },
    ],
    bank: ['عَلَّمَ · يُعَلِّمُ', 'دَرَّسَ · يُدَرِّسُ', 'نَظَّمَ · يُنَظِّمُ', 'حَضَّرَ · يُحَضِّرُ', 'غَيَّرَ · يُغَيِّرُ', 'صَحَّحَ · يُصَحِّحُ', 'تَعْلِيمٌ', 'تَنْظِيمٌ', 'مُعَلِّمٌ'],
  },
  stretchTask: {
    task: 'Write a welcome guide for a new student with four Form II verbs and one Form I / Form II contrast.',
    checklist: ['Four Form II verbs with the shadda.', 'Present forms with u-.', 'One verbal noun (tafʿīl).', 'One Form I / Form II pair.', 'A time expression.'],
    phrases: [['أَهْلًا بِكَ', 'welcome'], ['كُلَّ صَبَاحٍ', 'every morning'], ['قَبْلَ الِامْتِحَانِ', 'before the exam'], ['بِجَدْوَلٍ', 'with a timetable'], ['إِذَا احْتَجْتَ', 'if you need'], ['لَا تَقْلَقْ', 'don’t worry']],
  },
  model: {
    text: 'أَهْلًا بِكَ فِي مَدْرَسَتِنَا! أَنَا أَدْرُسُ هُنَا مُنْذُ سَنَتَيْنِ. يُدَرِّسُنَا الْأُسْتَاذُ أَحْمَدُ الْعَرَبِيَّةَ، وَهُوَ يُعَلِّمُنَا بِصَبْرٍ. كُلَّ يَوْمٍ أُنَظِّمُ وَقْتِي بِجَدْوَلٍ، لِأَنَّ التَّنْظِيمَ مُهِمٌّ جِدًّا. أُحَضِّرُ حَقِيبَتِي فِي الْمَسَاءِ، وَتُصَحِّحُ أُمِّي إِمْلَائِي. إِذَا لَمْ تَفْهَمْ دَرْسًا، فَسَأُفَهِّمُكَ إِيَّاهُ. لَا تَقْلَقْ، سَتَتَعَلَّمُ بِسُرْعَةٍ!',
    en: 'Welcome to our school! I have studied here for two years. Mr Aḥmad teaches us Arabic, and he teaches us patiently. Every day I organise my time with a timetable, because organisation is very important. I prepare my bag in the evening, and my mother corrects my spelling. If you don’t understand a lesson, I will explain it to you. Don’t worry, you will learn quickly!',
    find: ['Form I verb', 'Form II verb', 'tafʿīl noun', 'u- present'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'My Form II verbs have a shadda on the middle letter.' },
    { route: 'core', text: 'I used ʿallama or naẓẓama correctly.' },
    { route: 'develop', text: 'My present forms start with u- (yu-, tu-, nu-).' },
    { route: 'develop', text: 'I used a verbal noun like tanẓīm.' },
    { route: 'stretch', text: 'I contrasted a Form I and a Form II verb.' },
  ],
  exit: [
    W(/Quick pattern/, 0, { prompt: 'Which pair is Form II?', feedback: 'The doubled middle letter and the present vowels identify the Form II pair.' }),
    q('Choose “we organise”.', ['نُنَظِّمُ', 'نَنْظُمُ', 'نَظَّمْنَا'], 'nu- + shadda.'),
    q('Which is NOT Form II?', ['مَرَّ', 'غَيَّرَ', 'صَحَّحَ'], 'marra is a doubled Form I verb.'),
  ],
  mastery: false,
  prep: {
    words: [['شَارَكَ · يُشَارِكُ', 'to participate', '—'], ['سَاعَدَ · يُسَاعِدُ', 'to help', '—'], ['حَاوَلَ · يُحَاوِلُ', 'to try', '—'], ['سَافَرَ · يُسَافِرُ', 'to travel', '—'], ['الْأَلِفُ', 'long ā', 'ـا']],
    questionEn: 'What do the four verbs have after the first letter?',
    questionAr: 'شَارَكَ · سَاعَدَ · حَاوَلَ',
    homework: {
      core: 'Write five sentences with ʿallama, naẓẓama and ḥaḍḍara.',
      develop: 'Conjugate ḥaḍḍara in past and present for six persons.',
      stretch: 'Welcome guide with four Form II verbs.',
    },
    wordsSource: 'The five words prepare GM-VF-03 (website Verb Forms: Form III).',
  },
  remember: 'Remember: Form II = shadda on the middle letter (faʿʿala) · present yu- … -i- (yuʿallimu) · noun tafʿīl, doer mufaʿʿil · often “make do” or “do a lot” · not every shadda is Form II.',
});

module.exports = { meta, slides };
