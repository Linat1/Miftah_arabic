'use strict';
/* GM-VF-05 · Form V: Learning and Developing — website: Mastery & Revision › Grammar › Arabic Verb Forms › Form V (ta- + doubled middle
 * letter: tafaʿʿala; present yatafaʿʿalu — ya-, not yu-; ʿallama “teach” vs taʿallama “learn”: a useful II–V link, not always reflexive;
 * family tadhakkara, taḥassana, taṭawwara; clinic: the initial ta- of taʿallama is part of the stem, not the she / you prefix; apply:
 * a learning journal). Website self-check items used via W. Pattern extras, conjugation, contrast, sorter, reading and model are
 * teacher-written on the website content. */
const G = require('./gm-common');
const V = require('./gm-vf-common');
const { q } = G;

const KEY = 'grammar__07a-verb-forms__form-05';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-VF-05', fileTitle: 'Form_V', title: 'Form V: Learning and Developing', arabic: 'الْوَزْنُ الْخَامِسُ',
  focus: 'Form V = ta- + Form II: ʿallama (teach) → taʿallama (learn). The present starts with ya- (not yu-): yataʿallamu. It often shows a process happening to the subject — learning, improving, developing.',
  icon: 'FaSeedling',
});

const slides = G.gmLesson({
  code: 'GM-VF-05', site: KEY,
  support: `• Core: تَعَلَّمَ · يَتَعَلَّمُ and the family تَذَكَّرَ · تَحَسَّنَ · تَطَوَّرَ for a learning journal. Develop: conjugation with TWO ta- for she / you (تَتَعَلَّمُ) and the verbal noun تَفَعُّلٌ (تَعَلُّمٌ · تَحَسُّنٌ). Stretch: Form II → V pairs (عَلَّمَ / تَعَلَّمَ · ذَكَّرَ / تَذَكَّرَ · غَيَّرَ / تَغَيَّرَ) — doing something to others vs it happening to you.
• Website clinic: the ta- at the start of taʿallama belongs to the stem — it is NOT the she / you prefix. So “she learns” = tataʿallamu.
• Present prefix vowel goes back to a (ya-, ta-, a-, na-) — unlike Forms II–IV.`,
  teach: 'Pattern card; family; conjugation (two ta-); Form II vs V.',
  wedo: 'Teach → learn; sort stem ta- / prefix ta-; repair.',
  next: { nextCode: 'GM-VF-06', nextTitle: 'Form VI: Cooperation and Mutual Action', nextAr: 'الْوَزْنُ السَّادِسُ' },
  doNow: {
    questions: [
      q('Which verb is Form IV?', ['أَرْسَلَ', 'أَرْسُمُ', 'رَاسَلَ'], 'a- before the root in the past (GM-VF-04).'),
      q('ʿAllama = to teach. Taʿallama = …', ['to learn', 'to know', 'to teach again'], 'The prep question.'),
      q('Tadhakkara means …', ['to remember', 'to forget', 'to mention'], 'Prep word.'),
      q('Choose the present of تَعَلَّمَ.', ['يَتَعَلَّمُ', 'يُتَعَلِّمُ', 'يُعَلِّمُ'], 'Form V present: ya- + ta-.'),
      q('Taḥassana means …', ['to improve', 'to be good at', 'to make better'], 'Prep word.'),
    ],
    keyIdea: { text: 'Form V = ta- + doubled middle letter (tafaʿʿala). Present = ya- + ta- … (yatafaʿʿalu).', ar: '{k|عَلَّمَ} ‖ {e|تَعَلَّمَ} · {e|يَتَعَلَّمُ}' },
    retrieves: 'Teacher-written retrieval from GM-VF-04 and its prep words (taʿallama, tadhakkara, taḥassana, taṭawwara).',
  },
  objectives: ['Recognise Form V: ta- + shadda on the middle letter.', 'Form the present with ya- + ta-.', 'Write about learning and progress with Form V.', 'Explain the Form II / Form V link.'],
  routes: {
    core: ['I say I learn and I remember.', 'I write one sentence about my progress.'],
    develop: ['I say she learns (tataʿallamu) correctly.', 'I use taʿallum and taḥassun.'],
    stretch: ['I contrast ʿallama / taʿallama and ghayyara / taghayyara.', 'I explain why the ta- is part of the stem.'],
  },
  terms: {
    items: [
      { ar: 'الْوَزْنُ الْخَامِسُ', en: 'Form V', note: 'تَفَعَّلَ' },
      { ar: 'التَّاءُ الزَّائِدَةُ', en: 'the added ta- (part of the stem)', note: 'تَعَلَّمَ' },
      { ar: 'الْمُطَاوَعَةُ', en: 'it happens to the subject', note: 'تَحَسَّنَ' },
      { ar: 'التَّطَوُّرُ', en: 'development', note: 'تَطَوَّرَ' },
      { ar: 'تَفَعُّلٌ', en: 'Form V verbal noun', note: 'تَعَلُّمٌ' },
      { ar: 'مُتَفَعِّلٌ', en: 'Form V doer', note: 'مُتَعَلِّمٌ' },
    ],
  },
  explain: [
    V.patternCard({
      roman: 'V', title: 'ta- + a doubled middle letter', ar: 'تَفَعَّلَ · يَتَفَعَّلُ',
      template: ['تَفَعَّلَ', 'يَتَفَعَّلُ', 'تَفَعُّلٌ', 'مُتَفَعِّلٌ', 'تَفَعَّلْ'],
      model: ['تَعَلَّمَ', 'يَتَعَلَّمُ', 'تَعَلُّمٌ', 'مُتَعَلِّمٌ', 'تَعَلَّمْ'], meaning: 'to learn',
      more: [['to remember', 'تَذَكَّرَ', 'يَتَذَكَّرُ', 'تَذَكُّرٌ', 'مُتَذَكِّرٌ', 'تَذَكَّرْ'], ['to improve', 'تَحَسَّنَ', 'يَتَحَسَّنُ', 'تَحَسُّنٌ', 'مُتَحَسِّنٌ', 'تَحَسَّنْ'], ['to speak', 'تَكَلَّمَ', 'يَتَكَلَّمُ', 'تَكَلُّمٌ', 'مُتَكَلِّمٌ', 'تَكَلَّمْ']],
      foot: 'Website: Form V combines an initial ta- with a doubled middle root letter. Its present is yatafaʿʿalu — it begins with ya-, not yu- as in Form II.',
      notes: 'PART 1 (3 min) — website “Root and pattern”. The command keeps the ta-: taʿallam! (no helping vowel needed).',
    }),
    V.familyTable({
      roman: 'V', title: 'The Form V family', ar: 'أُسْرَةُ الْوَزْنِ الْخَامِسِ',
      rows: [
        ['تَعَلَّمَ · يَتَعَلَّمُ', 'to learn', 'أَتَعَلَّمُ الْعَرَبِيَّةَ لِأَنَّنِي أُحِبُّ اللُّغَاتِ.'],
        ['تَحَسَّنَ · يَتَحَسَّنُ', 'to improve', 'تَحَسَّنَ مُسْتَوَايَ بَعْدَ الْمُمَارَسَةِ.'],
        ['تَذَكَّرَ · يَتَذَكَّرُ', 'to remember', 'يَتَذَكَّرُ الطَّالِبُ الْكَلِمَاتِ الْجَدِيدَةَ.'],
        ['تَطَوَّرَ · يَتَطَوَّرُ', 'to develop', 'تَتَطَوَّرُ التِّقْنِيَّةُ بِسُرْعَةٍ.'],
        ['تَكَلَّمَ · يَتَكَلَّمُ', 'to speak', 'أَتَكَلَّمُ ثَلَاثَ لُغَاتٍ.'],
        ['تَحَدَّثَ · يَتَحَدَّثُ', 'to talk', 'تَحَدَّثْنَا عَنِ الرِّحْلَةِ.'],
      ],
      foot: 'Website: ʿallama means to teach; taʿallama means to learn — a useful Form II–V relationship, but not every Form V is reflexive in the English sense.',
      notes: 'PART 2 (4 min) — website “Learn the family” (first three examples are the website sentences).',
    }),
    V.conjTable({
      roman: 'V', verb: 'taʿallama', title: 'She learns = two ta-', ar: 'تَصْرِيفُ «تَعَلَّمَ»',
      rows: [
        ['أَنَا', 'تَعَلَّمْتُ', 'أَتَعَلَّمُ', 'a- (back to a)'],
        ['هُوَ', 'تَعَلَّمَ', 'يَتَعَلَّمُ', 'ya- + ta-'],
        ['هِيَ', 'تَعَلَّمَتْ', 'تَتَعَلَّمُ', 'ta- (she) + ta- (stem)'],
        ['أَنْتِ', 'تَعَلَّمْتِ', 'تَتَعَلَّمِينَ', 'ta- + ta- … -īna'],
        ['نَحْنُ', 'تَعَلَّمْنَا', 'نَتَعَلَّمُ', 'na-'],
        ['هُمْ', 'تَعَلَّمُوا', 'يَتَعَلَّمُونَ', 'ya- … -ūna'],
      ],
      foot: 'Website “Look closely”: taʿallama → yataʿallamu → ataʿallamu. The initial ta- belongs to the stem; the a- or ya- before it identifies the person.',
      notes: 'PART 3 (3 min). Drill hiya tataʿallamu — the most common error.',
    }),
  ],
  quick: [
    W(/Self-check/, 0, { feedback: 'Form V taʿallama means to learn.' }),
    W(/Self-check/, 1, { prompt: 'Choose the correct present of taḥassana.', feedback: 'Form V keeps the stem ta- and the doubled middle letter.' }),
    q('Choose “she remembers”.', ['تَتَذَكَّرُ', 'تَذَكَّرُ', 'تُذَكِّرُ'], 'ta- (she) + ta- (stem).'),
    q('Choose “I learned”.', ['تَعَلَّمْتُ', 'أَتَعَلَّمُ', 'عَلَّمْتُ'], 'Past + -tu; ʿallamtu = I taught.'),
  ],
  quickNote: 'website Self-check items, plus two teacher items.',
  ido: {
    title: 'Watch me write a learning journal with Form V',
    steps: [
      { head: 'Form II', ar: 'عَلَّمَ', think: 'Teach.' },
      { head: 'Form V', ar: 'تَعَلَّمَ', think: 'Add ta-: learn.' },
      { head: 'Present', ar: 'أَتَعَلَّمُ', think: 'a- for I.' },
      { head: 'Noun', ar: 'تَعَلُّمٌ', think: 'tafaʿʿul.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'FORM V', e: 'OTHER' },
    model: '{k|أَتَعَلَّمُ} الْعَرَبِيَّةَ كُلَّ يَوْمٍ. {k|تَحَسَّنَ} مُسْتَوَايَ بِسَبَبِ الْمُمَارَسَةِ، وَ{k|أَتَذَكَّرُ} كَلِمَاتٍ جَدِيدَةً. {e|أُرِيدُ} أَنْ {k|أَتَطَوَّرَ} أَكْثَرَ.',
    modelEn: 'I learn Arabic every day. My level improved because of practice, and I remember new words. I want to develop further.',
    notes: 'Website “Apply the form” model answer. Ataṭawwara: subjunctive after an (GM-V-10).',
  },
  models: [
    { ar: 'أَتَعَلَّمُ الْعَرَبِيَّةَ لِأَنَّنِي أُحِبُّ اللُّغَاتِ.', en: 'I am learning Arabic because I love languages.', tip: 'Website.' },
    { ar: 'تَحَسَّنَ مُسْتَوَايَ بَعْدَ الْمُمَارَسَةِ.', en: 'My level improved after practice.', tip: 'Process.' },
    { ar: 'أُخْتِي تَتَكَلَّمُ الْفَرَنْسِيَّةَ.', en: 'My sister speaks French.', tip: 'Two ta-.' },
    { ar: 'تَغَيَّرَ الْجَوُّ فَجْأَةً.', en: 'The weather changed suddenly.', tip: 'It changed (itself).' },
  ],
  wedoSlides: [
    V.contrastTable({
      roman: 'V', title: 'Do it to others → it happens to you', ar: 'مِنَ الثَّانِي إِلَى الْخَامِسِ',
      rows: [
        ['عَلَّمَ', 'to teach (II)', 'تَعَلَّمَ', 'to learn'],
        ['ذَكَّرَ', 'to remind (II)', 'تَذَكَّرَ', 'to remember'],
        ['حَسَّنَ', 'to improve something (II)', 'تَحَسَّنَ', 'to improve / get better'],
        ['غَيَّرَ', 'to change something (II)', 'تَغَيَّرَ', 'to change / become different'],
        ['كَلَّمَ', 'to speak to someone (II)', 'تَكَلَّمَ', 'to speak'],
      ],
      foot: 'Form II acts on someone or something else; Form V often shows the result happening to the subject (website “useful II–V relationship”).',
      notes: 'WE DO (3 min). Students make a pair of sentences: The teacher taught me. → I learned.',
    }),
    {
      type: 'sorter', min: 2, eyebrow: 'We do · website clinic · stem ta- or prefix ta-?', title: 'Part of the stem, or “she / you”?', ar: 'تَاءُ الْوَزْنِ أَمْ تَاءُ الْمُضَارَعَةِ؟',
      categories: ['Form V past (ta- in the stem)', 'Form I present (ta- = she / you)'],
      items: [['تَعَلَّمَ', 0], ['تَذَكَّرَ', 0], ['تَحَسَّنَ', 0], ['تَكَلَّمَ', 0], ['تَكْتُبُ', 1], ['تَدْرُسُ', 1], ['تَفْهَمُ', 1], ['تَجْلِسُ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Clue: Form V past has a shadda and ends in -a; the Form I present ends in -u.',
    },
  ],
  mistakes: [
    { wrong: 'هِيَ تَعَلَّمُ الْعَرَبِيَّةَ', right: 'هِيَ تَتَعَلَّمُ الْعَرَبِيَّةَ', why: 'She = ta- prefix + ta- stem (website clinic).' },
    { wrong: 'هُوَ يُتَعَلَّمُ', right: 'هُوَ يَتَعَلَّمُ', why: 'Form V present starts with ya-, not yu- (website).' },
    { wrong: 'أَنَا طَالِبٌ، أُعَلِّمُ الْعَرَبِيَّةَ', right: 'أَنَا طَالِبٌ، أَتَعَلَّمُ الْعَرَبِيَّةَ', why: 'A student learns (V); a teacher teaches (II).' },
  ],
  hints: ['How many ta-?', 'ya- or yu-?', 'Teach or learn?'],
  practice: [
    W(/Self-check/, 2, { prompt: 'Which description is most accurate?', feedback: 'The pattern can suggest meaning; usage decides.' }),
    q('What is the verbal noun of تَحَسَّنَ?', ['تَحَسُّنٌ', 'تَحْسِينٌ', 'حُسْنٌ'], 'tafaʿʿul (taḥsīn is Form II).'),
    q('Choose “we speak”.', ['نَتَكَلَّمُ', 'نُكَلِّمُ', 'تَكَلَّمْنَا'], 'na- + ta-.'),
    q('Choose “The weather changed”.', ['تَغَيَّرَ الْجَوُّ', 'غَيَّرَ الْجَوُّ', 'يُغَيِّرُ الْجَوُّ'], 'It changed itself: Form V.'),
  ],
  practiceLabel: 'website Self-check item and teacher-written questions',
  read: {
    title: 'My learning journal', label: 'reading for Form V (teacher-written journal)',
    text: 'الْأُسْبُوعُ الْأَوَّلُ: تَعَلَّمْتُ عِشْرِينَ كَلِمَةً جَدِيدَةً، وَلَكِنِّي لَمْ أَتَذَكَّرْ كُلَّهَا. الْأُسْبُوعُ الثَّانِي: تَكَلَّمْتُ مَعَ جَدَّتِي بِالْعَرَبِيَّةِ، وَتَحَسَّنَ نُطْقِي. الْأُسْبُوعُ الثَّالِثُ: تَتَعَلَّمُ أُخْتِي مَعِي الْآنَ، وَنَتَحَدَّثُ كُلَّ مَسَاءٍ. أَشْعُرُ أَنَّ لُغَتِي تَتَطَوَّرُ بِسُرْعَةٍ!',
    glossary: [['كُلَّهَا', 'all of them'], ['جَدَّتِي', 'my grandmother'], ['نُطْقِي', 'my pronunciation'], ['أَشْعُرُ', 'I feel']],
    task: 'Website: write a learning journal entry. First, underline every Form V verb here.',
    questions: [
      q('What happened in week two?', ['the writer spoke with grandmother and pronunciation improved', 'the writer learned 20 words', 'the sister started learning'], 'Takallamtu … wa-taḥassana nuṭqī.'),
      q('Who learns with the writer now?', ['the sister', 'the grandmother', 'the teacher'], 'Tataʿallamu ukhtī maʿī.'),
      q('Why is it lam atadhakkar, not atadhakkaru?', ['jussive after lam', 'it is future', 'it is Form II'], 'GM-V-08.'),
      q('Which verb has TWO ta- at the start?', ['تَتَعَلَّمُ', 'تَعَلَّمْتُ', 'نَتَحَدَّثُ'], 'ta- (she) + ta- (stem).'),
    ],
    qNote: 'Teacher-written journal for the website “Apply the form” task; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: how I am improving', source: 'website “Apply the form”',
    prompts: [
      { route: 'core', ar: 'مَاذَا تَتَعَلَّمُ هَذِهِ السَّنَةَ؟' },
      { route: 'develop', ar: 'كَيْفَ تَحَسَّنَتْ لُغَتُكَ؟ وَمَا الْكَلِمَاتُ الَّتِي تَتَذَكَّرُهَا؟' },
      { route: 'stretch', ar: 'كَيْفَ تَتَطَوَّرُ التِّقْنِيَّةُ؟ وَكَيْفَ تُسَاعِدُكَ فِي التَّعَلُّمِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَتَعَلَّمُ ______ .' },
      { route: 'develop', ar: 'تَحَسَّنَتْ لُغَتِي لِأَنَّ ______ ، وَأَتَذَكَّرُ ______ .' },
      { route: 'stretch', ar: 'تَتَطَوَّرُ التِّقْنِيَّةُ ______ ، وَ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَاذَا تَتَعَلَّمِينَ هَذِهِ السَّنَةَ؟', en: 'What are you learning this year? (to a girl)' },
      { who: 'B', ar: 'أَتَعَلَّمُ الْعَرَبِيَّةَ وَالْبَرْمَجَةَ. تَحَسَّنَتْ قِرَاءَتِي كَثِيرًا، وَأَتَذَكَّرُ الْآنَ كَلِمَاتٍ أَكْثَرَ.', en: 'I am learning Arabic and programming. My reading has improved a lot, and I now remember more words.' },
    ],
    notes: 'Website: what you are learning, how you have improved and which words you remember.',
  },
  write: {
    siteTask: 'Write a short learning journal entry explaining what you are learning, how you have improved and which words you remember.',
    core: { amount: '3 sentences', task: 'Website task.', how: 'ataʿallamu · taḥassana · atadhakkaru.' },
    develop: { amount: '6 sentences', task: 'Add she / they forms and a verbal noun.', how: 'tataʿallamu · yataḥaddathūna.' },
    stretch: { amount: '8 sentences', task: 'A weekly journal with four Form V verbs and a Form II / V pair.', how: 'ʿallamanī … fa-taʿallamtu.' },
  },
  frames: {
    core: [
      { en: 'I learn … every day', ar: 'أَتَعَلَّمُ ______ كُلَّ يَوْمٍ.' },
      { en: 'My … improved', ar: 'تَحَسَّنَ ______ .' },
      { en: 'I remember …', ar: 'أَتَذَكَّرُ ______ .' },
      { en: 'I speak …', ar: 'أَتَكَلَّمُ ______ .' },
    ],
    develop: [
      { en: 'My sister learns …', ar: 'أُخْتِي تَتَعَلَّمُ ______ .' },
      { en: 'We talked about …', ar: 'تَحَدَّثْنَا عَنْ ______ .' },
      { en: 'Learning … is useful', ar: 'تَعَلُّمُ ______ مُفِيدٌ.' },
      { en: '… taught me, so I learned …', ar: 'عَلَّمَنِي ______ فَتَعَلَّمْتُ ______ .' },
    ],
    bank: ['تَعَلَّمَ · يَتَعَلَّمُ', 'تَذَكَّرَ · يَتَذَكَّرُ', 'تَحَسَّنَ · يَتَحَسَّنُ', 'تَطَوَّرَ · يَتَطَوَّرُ', 'تَكَلَّمَ · يَتَكَلَّمُ', 'تَحَدَّثَ · يَتَحَدَّثُ', 'تَغَيَّرَ · يَتَغَيَّرُ', 'تَعَلُّمٌ', 'مُتَعَلِّمٌ'],
  },
  stretchTask: {
    task: 'Write a weekly learning journal with four Form V verbs and one Form II / Form V pair.',
    checklist: ['Four Form V verbs.', 'She / you forms with two ta-.', 'Present with ya- (not yu-).', 'One verbal noun (taʿallum, taḥassun).', 'One Form II / V pair.'],
    phrases: [['فِي الْأُسْبُوعِ الْأَوَّلِ', 'in the first week'], ['بِسَبَبِ الْمُمَارَسَةِ', 'because of practice'], ['مُسْتَوَايَ', 'my level'], ['نُطْقِي', 'my pronunciation'], ['أَكْثَرَ فَأَكْثَرَ', 'more and more'], ['بِسُرْعَةٍ', 'quickly']],
  },
  model: {
    text: 'بَدَأْتُ أَتَعَلَّمُ الْخَطَّ الْعَرَبِيَّ قَبْلَ شَهْرَيْنِ. فِي الْبِدَايَةِ كَانَ صَعْبًا، وَلَمْ أَتَذَكَّرْ أَشْكَالَ الْحُرُوفِ. عَلَّمَنِي أُسْتَاذِي بِصَبْرٍ، فَتَعَلَّمْتُ الْقَوَاعِدَ خُطْوَةً خُطْوَةً. الْآنَ تَحَسَّنَ خَطِّي كَثِيرًا، وَأَتَكَلَّمُ عَنْ هِوَايَتِي بِثِقَةٍ. أُخْتِي أَيْضًا تَتَعَلَّمُ مَعِي، وَنَتَحَدَّثُ عَنْ تَقَدُّمِنَا كُلَّ أُسْبُوعٍ. أَتَمَنَّى أَنْ أَتَطَوَّرَ أَكْثَرَ فَأَكْثَرَ.',
    en: 'I started learning Arabic calligraphy two months ago. At first it was difficult, and I did not remember the letter shapes. My teacher taught me patiently, so I learned the rules step by step. Now my handwriting has improved a lot, and I talk about my hobby with confidence. My sister is also learning with me, and we talk about our progress every week. I hope to develop more and more.',
    find: ['Form V present', 'Form V past', 'Form II / V pair', 'two ta-'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'My Form V verbs start with ta- and have a shadda.' },
    { route: 'core', text: 'My present forms start with ya- / a- / na- (not yu-).' },
    { route: 'develop', text: 'I wrote she / you forms with two ta-.' },
    { route: 'develop', text: 'I used a verbal noun like taʿallum.' },
    { route: 'stretch', text: 'I used a Form II / Form V pair.' },
  ],
  exit: [
    q('Choose “she learns”.', ['تَتَعَلَّمُ', 'تَعَلَّمُ', 'تُعَلِّمُ'], 'Two ta-; tuʿallimu = she teaches.'),
    q('Which is Form V?', ['تَذَكَّرَ', 'ذَكَّرَ', 'ذَكَرَ'], 'ta- + shadda.'),
    q('Choose “they improve”.', ['يَتَحَسَّنُونَ', 'يُحَسِّنُونَ', 'تَحَسَّنُوا'], 'ya- + ta- … -ūna.'),
  ],
  mastery: false,
  prep: {
    words: [['تَعَاوَنَ · يَتَعَاوَنُ', 'to cooperate', '—'], ['تَنَاقَشَ · يَتَنَاقَشُ', 'to discuss together', '—'], ['تَبَادَلَ · يَتَبَادَلُ', 'to exchange', '—'], ['تَقَابَلَ · يَتَقَابَلُ', 'to meet each other', '—'], ['بَعْضُنَا بَعْضًا', 'each other', '—']],
    questionEn: 'Shāraka (III) = to participate. What might tashāraka mean?',
    questionAr: 'شَارَكَ · تَشَارَكَ',
    homework: {
      core: 'Write five sentences with taʿallama, tadhakkara and taḥassana.',
      develop: 'Conjugate takallama in past and present for six persons.',
      stretch: 'A weekly learning journal with four Form V verbs.',
    },
    wordsSource: 'The five words prepare GM-VF-06 (website Verb Forms: Form VI).',
  },
  remember: 'Remember: Form V = ta- + shadda (tafaʿʿala) · present ya- + ta- (yataʿallamu) · she = tataʿallamu · noun tafaʿʿul · Form II does it to others, Form V often happens to you.',
});

module.exports = { meta, slides };
