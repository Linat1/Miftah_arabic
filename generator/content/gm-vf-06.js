'use strict';
/* GM-VF-06 · Form VI: Cooperation and Mutual Action — website: Mastery & Revision › Grammar › Arabic Verb Forms › Form VI (ta- before the
 * root + long ā after the first letter: tafāʿala; present yatafāʿalu; sāʿada “help” vs tasāʿada “help one another”: a possible III–VI
 * link; family tashāraka, tabādala, tafāhama; clinic: taʿāwana is already Form VI — do not add another ta-; a singular subject is fine:
 * ataʿāwanu maʿa ṣadīqī; apply: four sentences about a group project). Website self-check items used via W. Pattern extras,
 * conjugation, contrast, sorter, reading and model are teacher-written on the website content. */
const G = require('./gm-common');
const V = require('./gm-vf-common');
const { q } = G;

const KEY = 'grammar__07a-verb-forms__form-06';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-VF-06', fileTitle: 'Form_VI', title: 'Form VI: Cooperation and Mutual Action', arabic: 'الْوَزْنُ السَّادِسُ',
  focus: 'Form VI = ta- + Form III: shāraka (participate) → tashāraka (share together). Present: yatashāraku. It often means doing something together or to each other — with a plural subject, or “with” someone.',
  icon: 'FaPeopleArrows',
});

const slides = G.gmLesson({
  code: 'GM-VF-06', site: KEY,
  support: `• Core: تَعَاوَنَ · يَتَعَاوَنُ and the family تَبَادَلَ · تَفَاهَمَ · تَشَارَكَ for a group project. Develop: plural and dual forms (نَتَعَاوَنُ · يَتَبَادَلُونَ · يَتَعَاوَنَانِ) and the verbal noun تَفَاعُلٌ (تَعَاوُنٌ · تَبَادُلٌ). Stretch: Form III → VI (شَارَكَ / تَشَارَكَ · قَابَلَ / تَقَابَلَ) and telling Form VI (ta- + ā) from Form V (ta- + shadda).
• Website clinic: taʿāwana is already Form VI — never add another ta-. A singular subject is fine with maʿa: أَتَعَاوَنُ مَعَ صَدِيقِي.
• Note: the vowel before the last letter of the present stays a: yataʿāwanu (not yataʿāwinu).`,
  teach: 'Pattern card; family; conjugation; Form III vs VI.',
  wedo: 'Help → help each other; sort Form V / Form VI; repair.',
  next: { nextCode: 'GM-VF-07', nextTitle: 'Form VII: Change of State', nextAr: 'الْوَزْنُ السَّابِعُ' },
  doNow: {
    questions: [
      q('Which verb is Form V?', ['تَعَلَّمَ', 'عَلَّمَ', 'عَالَمَ'], 'ta- + shadda (GM-VF-05).'),
      q('Taʿāwana means …', ['to cooperate', 'to help someone', 'to learn'], 'Prep word.'),
      q('Tabādala means …', ['to exchange', 'to change', 'to send'], 'Prep word.'),
      q('Choose the present of تَعَاوَنَ.', ['يَتَعَاوَنُ', 'يُعَاوِنُ', 'يَتَعَاوِنُ'], 'Form VI: ya- + ta- … a.'),
      q('Baʿḍunā baʿḍan means …', ['each other', 'some of us', 'every day'], 'Prep phrase.'),
    ],
    keyIdea: { text: 'Form VI = ta- + long ā after the first letter (tafāʿala). Present = ya- + ta- … with a before the last letter (yatafāʿalu).', ar: '{k|شَارَكَ} ‖ {e|تَشَارَكَ} · {e|يَتَشَارَكُ}' },
    retrieves: 'Teacher-written retrieval from GM-VF-05 and its prep words (taʿāwana, tanāqasha, tabādala, taqābala).',
  },
  objectives: ['Recognise Form VI: ta- + long ā.', 'Form the present with ya- + ta-.', 'Describe group work with Form VI verbs.', 'Tell Form VI from Form V.'],
  routes: {
    core: ['I say we cooperate and we exchange ideas.', 'I write one sentence about a group project.'],
    develop: ['I use plural and dual Form VI verbs.', 'I use taʿāwun and tabādul.'],
    stretch: ['I compare shāraka / tashāraka and qābala / taqābala.', 'I tell taʿāwana (VI) from taʿallama (V).'],
  },
  terms: {
    items: [
      { ar: 'الْوَزْنُ السَّادِسُ', en: 'Form VI', note: 'تَفَاعَلَ' },
      { ar: 'الْمُشَارَكَةُ بَيْنَ اثْنَيْنِ', en: 'mutual / shared action', note: 'تَبَادَلْنَا' },
      { ar: 'بَعْضُهُمْ بَعْضًا', en: 'each other', note: 'سَاعَدَ بَعْضُهُمْ بَعْضًا' },
      { ar: 'مَعَ', en: 'with (singular subject)', note: 'أَتَعَاوَنُ مَعَ' },
      { ar: 'تَفَاعُلٌ', en: 'Form VI verbal noun', note: 'تَعَاوُنٌ' },
      { ar: 'مُتَفَاعِلٌ', en: 'Form VI doer', note: 'مُتَعَاوِنٌ' },
    ],
  },
  explain: [
    V.patternCard({
      roman: 'VI', title: 'ta- + a long ā', ar: 'تَفَاعَلَ · يَتَفَاعَلُ',
      template: ['تَفَاعَلَ', 'يَتَفَاعَلُ', 'تَفَاعُلٌ', 'مُتَفَاعِلٌ', 'تَفَاعَلْ'],
      model: ['تَعَاوَنَ', 'يَتَعَاوَنُ', 'تَعَاوُنٌ', 'مُتَعَاوِنٌ', 'تَعَاوَنْ'], meaning: 'to cooperate',
      more: [['to exchange', 'تَبَادَلَ', 'يَتَبَادَلُ', 'تَبَادُلٌ', 'مُتَبَادِلٌ', 'تَبَادَلْ'], ['to understand each other', 'تَفَاهَمَ', 'يَتَفَاهَمُ', 'تَفَاهُمٌ', 'مُتَفَاهِمٌ', 'تَفَاهَمْ'], ['to share together', 'تَشَارَكَ', 'يَتَشَارَكُ', 'تَشَارُكٌ', 'مُتَشَارِكٌ', 'تَشَارَكْ']],
      foot: 'Website: Form VI adds ta- before the root and a long ā after the first root consonant. The present commonly follows yatafāʿalu.',
      notes: 'PART 1 (3 min) — website “Root and pattern”. Mutaʿāwin = cooperative (a useful adjective).',
    }),
    V.familyTable({
      roman: 'VI', title: 'The Form VI family', ar: 'أُسْرَةُ الْوَزْنِ السَّادِسِ',
      rows: [
        ['تَعَاوَنَ · يَتَعَاوَنُ', 'to cooperate', 'يَتَعَاوَنُ الطُّلَّابُ فِي الْمَشْرُوعِ.'],
        ['تَبَادَلَ · يَتَبَادَلُ', 'to exchange', 'تَبَادَلْنَا الْأَفْكَارَ فِي الِاجْتِمَاعِ.'],
        ['تَفَاهَمَ · يَتَفَاهَمُ', 'to get along / understand each other', 'أَتَفَاهَمُ مَعَ صَدِيقَتِي بِسُهُولَةٍ.'],
        ['تَشَارَكَ · يَتَشَارَكُ', 'to share together', 'تَشَارَكْنَا فِي كِتَابَةِ التَّقْرِيرِ.'],
        ['تَنَاقَشَ · يَتَنَاقَشُ', 'to discuss together', 'تَنَاقَشَ الْفَرِيقُ فِي الْخُطَّةِ.'],
        ['تَقَابَلَ · يَتَقَابَلُ', 'to meet each other', 'تَقَابَلْنَا أَمَامَ الْمَكْتَبَةِ.'],
      ],
      foot: 'Website: sāʿada means to help; tasāʿada can mean to help one another — a possible Form III–VI relationship, but meanings are not always predictable.',
      notes: 'PART 2 (4 min) — website “Learn the family” (first three examples are the website sentences).',
    }),
    V.conjTable({
      roman: 'VI', verb: 'taʿāwana', title: 'Often plural — but not always', ar: 'تَصْرِيفُ «تَعَاوَنَ»',
      rows: [
        ['نَحْنُ', 'تَعَاوَنَّا', 'نَتَعَاوَنُ', 'na- + ta-'],
        ['هُمْ', 'تَعَاوَنُوا', 'يَتَعَاوَنُونَ', 'ya- … -ūna'],
        ['أَنَا', 'تَعَاوَنْتُ', 'أَتَعَاوَنُ', '+ maʿa (with)'],
        ['هِيَ', 'تَعَاوَنَتْ', 'تَتَعَاوَنُ', 'two ta-'],
        ['هُمَا', 'تَعَاوَنَا', 'يَتَعَاوَنَانِ', 'dual'],
        ['أَنْتُمْ', 'تَعَاوَنْتُمْ', 'تَتَعَاوَنُونَ', 'ta- + ta- … -ūna'],
      ],
      foot: 'Website clinic: do not assume all Form VI verbs need a plural subject — ataʿāwanu maʿa ṣadīqī (I cooperate with my friend). Note taʿāwannā: the root n + -nā.',
      notes: 'PART 3 (3 min). Plural persons first, because Form VI is most often used for groups.',
    }),
  ],
  quick: [
    W(/Self-check/, 0, { feedback: 'Taʿāwana is Form VI and commonly means to cooperate.' }),
    W(/Self-check/, 1, { prompt: 'Choose the correct present of tabādala.', feedback: 'Form VI commonly follows yatafāʿalu.' }),
    q('Choose “they exchanged ideas”.', ['تَبَادَلُوا الْأَفْكَارَ', 'يَتَبَادَلُونَ الْأَفْكَارَ', 'تَبَدَّلُوا الْأَفْكَارَ'], 'Past + -ū.'),
    q('Choose “we understand each other”.', ['نَتَفَاهَمُ', 'نَفْهَمُ', 'نُفَهِّمُ'], 'Form VI: mutual.'),
  ],
  quickNote: 'website Self-check items, plus two teacher items.',
  ido: {
    title: 'Watch me describe a group project with Form VI',
    steps: [
      { head: 'Form III', ar: 'شَارَكَ', think: 'Participate.' },
      { head: 'Form VI', ar: 'تَشَارَكَ', think: 'Add ta-: share together.' },
      { head: 'Past (we)', ar: 'تَشَارَكْنَا', think: '-nā.' },
      { head: 'Present (we)', ar: 'نَتَعَاوَنُ', think: 'na- + ta-.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'FORM VI', e: 'OTHER' },
    model: '{k|نَتَعَاوَنُ} فِي مَشْرُوعِ الْمَدْرَسَةِ. أَمْسِ {k|تَبَادَلْنَا} الْأَفْكَارَ، ثُمَّ {k|تَشَارَكْنَا} فِي {e|كِتَابَةِ} التَّقْرِيرِ. {k|أَتَفَاهَمُ} مَعَ زُمَلَائِي بِسُهُولَةٍ.',
    modelEn: 'We cooperate on the school project. Yesterday we exchanged ideas, then shared in writing the report. I get along with my classmates easily.',
    notes: 'Website “Apply the form” model answer.',
  },
  models: [
    { ar: 'يَتَعَاوَنُ الطُّلَّابُ فِي الْمَشْرُوعِ.', en: 'The students cooperate on the project.', tip: 'Website.' },
    { ar: 'تَبَادَلْنَا الْأَفْكَارَ فِي الِاجْتِمَاعِ.', en: 'We exchanged ideas at the meeting.', tip: 'Website.' },
    { ar: 'أَتَفَاهَمُ مَعَ صَدِيقَتِي بِسُهُولَةٍ.', en: 'I get along with my friend easily.', tip: 'Singular + maʿa.' },
    { ar: 'تَرَاسَلَ الصَّدِيقَانِ سَنَوَاتٍ.', en: 'The two friends wrote to each other for years.', tip: 'Dual subject.' },
  ],
  wedoSlides: [
    V.contrastTable({
      roman: 'VI', title: 'Help → help each other', ar: 'مِنَ الثَّالِثِ إِلَى السَّادِسِ',
      rows: [
        ['شَارَكَ', 'to participate (III)', 'تَشَارَكَ', 'to share together'],
        ['سَاعَدَ', 'to help (III)', 'تَسَاعَدَ', 'to help one another'],
        ['قَابَلَ', 'to meet someone (III)', 'تَقَابَلَ', 'to meet each other'],
        ['نَاقَشَ', 'to discuss with (III)', 'تَنَاقَشَ', 'to discuss together'],
        ['رَاسَلَ', 'to write to (III)', 'تَرَاسَلَ', 'to write to each other'],
      ],
      foot: 'Website: “the added ta- can be associated with shared action when the lexical meaning permits it.” Form III: I → you; Form VI: we ↔ each other.',
      notes: 'WE DO (3 min). Pairs: “I met Sara” (qābaltu Sāra) → “We met each other” (taqābalnā).',
    }),
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · shadda or long ā after ta-?', title: 'Form V or Form VI?', ar: 'خَامِسٌ أَمْ سَادِسٌ؟',
      categories: ['Form V (ta- + shadda)', 'Form VI (ta- + ā)'],
      items: [['تَعَلَّمَ', 0], ['تَذَكَّرَ', 0], ['تَحَسَّنَ', 0], ['تَكَلَّمَ', 0], ['تَعَاوَنَ', 1], ['تَبَادَلَ', 1], ['تَفَاهَمَ', 1], ['تَقَابَلَ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type 1 or 2 and say the clue (shadda or ā).',
    },
  ],
  mistakes: [
    { wrong: 'نَتَتَعَاوَنُ فِي الْمَشْرُوعِ', right: 'نَتَعَاوَنُ فِي الْمَشْرُوعِ', why: 'Taʿāwana already has its ta- — do not add another (website clinic).' },
    { wrong: 'هُمْ يَتَعَاوِنُونَ', right: 'هُمْ يَتَعَاوَنُونَ', why: 'The vowel before the last root letter stays a: yatafāʿalu.' },
    { wrong: 'أَتَعَاوَنُ صَدِيقِي', right: 'أَتَعَاوَنُ مَعَ صَدِيقِي', why: 'A singular subject needs maʿa (website).' },
  ],
  hints: ['How many ta-?', 'a or i before the last letter?', 'With whom?'],
  practice: [
    W(/Self-check/, 2, { prompt: 'Can a singular subject use Form VI?', feedback: 'A person can cooperate with another while the subject stays singular.' }),
    q('What is the verbal noun of تَعَاوَنَ?', ['تَعَاوُنٌ', 'مُعَاوَنَةٌ', 'عَوْنٌ'], 'tafāʿul.'),
    q('Choose “the two girls met each other”.', ['تَقَابَلَتِ الْبِنْتَانِ', 'قَابَلَتِ الْبِنْتَانِ', 'تَقَبَّلَتِ الْبِنْتَانِ'], 'Form VI + dual subject.'),
    q('Which is Form VI?', ['تَنَاقَشَ', 'نَاقَشَ', 'تَنَقَّلَ'], 'ta- + ā.'),
  ],
  practiceLabel: 'website Self-check item and teacher-written questions',
  read: {
    title: 'Our science project', label: 'reading for Form VI (teacher-written report)',
    text: 'فِي هَذَا الْفَصْلِ تَعَاوَنَ فَرِيقُنَا فِي مَشْرُوعِ الطَّاقَةِ. فِي الْبِدَايَةِ تَنَاقَشْنَا وَتَبَادَلْنَا الْأَفْكَارَ، ثُمَّ تَشَارَكْنَا فِي الْبَحْثِ. كُنَّا نَتَقَابَلُ فِي الْمَكْتَبَةِ كُلَّ ثُلَاثَاءَ. أَحْيَانًا لَمْ نَتَفَاهَمْ، وَلَكِنَّنَا تَعَلَّمْنَا أَنْ نَحْتَرِمَ بَعْضُنَا بَعْضًا. التَّعَاوُنُ هُوَ سِرُّ نَجَاحِنَا!',
    glossary: [['الْفَصْلِ', 'term'], ['الطَّاقَةِ', 'energy'], ['الْبَحْثِ', 'research'], ['أَحْيَانًا', 'sometimes'], ['سِرُّ', 'the secret of']],
    task: 'Website: write about a group project. First, underline every Form VI verb here.',
    questions: [
      q('Where did the team meet?', ['in the library', 'in the lab', 'online'], 'Natqābalu fī l-maktaba.'),
      q('What did they do at the beginning?', ['discussed and exchanged ideas', 'wrote the report', 'met every Tuesday'], 'Tanāqashnā wa-tabādalnā.'),
      q('What is the secret of their success?', ['cooperation', 'research', 'energy'], 'At-taʿāwun.'),
      q('Which verb is Form V, not Form VI?', ['تَعَلَّمْنَا', 'تَنَاقَشْنَا', 'تَبَادَلْنَا'], 'Shadda, not ā.'),
    ],
    qNote: 'Teacher-written report for the website “Apply the form” task; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: working as a team', source: 'website “Apply the form”',
    prompts: [
      { route: 'core', ar: 'مَعَ مَنْ تَتَعَاوَنُ فِي الْمَدْرَسَةِ؟' },
      { route: 'develop', ar: 'كَيْفَ تَبَادَلْتُمُ الْأَفْكَارَ فِي آخِرِ مَشْرُوعٍ؟' },
      { route: 'stretch', ar: 'لِمَاذَا التَّعَاوُنُ مُهِمٌّ؟ وَمَاذَا تَفْعَلُونَ إِذَا لَمْ تَتَفَاهَمُوا؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَتَعَاوَنُ مَعَ ______ .' },
      { route: 'develop', ar: 'تَبَادَلْنَا ______ ، ثُمَّ ______ .' },
      { route: 'stretch', ar: 'التَّعَاوُنُ مُهِمٌّ لِأَنَّ ______ . إِذَا لَمْ نَتَفَاهَمْ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَعَ مَنْ تَتَعَاوَنِينَ فِي الْمَشَارِيعِ؟', en: 'Who do you cooperate with on projects? (to a girl)' },
      { who: 'B', ar: 'أَتَعَاوَنُ مَعَ صَدِيقَتِي هِنْدٍ. نَتَبَادَلُ الْأَفْكَارَ، وَنَتَفَاهَمُ بِسُهُولَةٍ، وَنَتَقَابَلُ بَعْدَ الْمَدْرَسَةِ.', en: 'I cooperate with my friend Hind. We exchange ideas, we get along easily, and we meet after school.' },
    ],
    notes: 'Website: cooperation, exchanging ideas and one past-tense action.',
  },
  write: {
    siteTask: 'Write four sentences about a group project. Include cooperation, exchanging ideas and one past-tense action.',
    core: { amount: '4 sentences', task: 'Website task.', how: 'nataʿāwanu · tabādalnā.' },
    develop: { amount: '6 sentences', task: 'Add a dual or they-form and a verbal noun.', how: 'yataʿāwanāni · at-taʿāwun.' },
    stretch: { amount: '8 sentences', task: 'A project report with five Form VI verbs and one Form III / VI pair.', how: 'qābaltu / taqābalnā.' },
  },
  frames: {
    core: [
      { en: 'We cooperate on …', ar: 'نَتَعَاوَنُ فِي ______ .' },
      { en: 'We exchanged …', ar: 'تَبَادَلْنَا ______ .' },
      { en: 'I get along with …', ar: 'أَتَفَاهَمُ مَعَ ______ .' },
      { en: 'We met each other in …', ar: 'تَقَابَلْنَا فِي ______ .' },
    ],
    develop: [
      { en: 'The team discussed …', ar: 'تَنَاقَشَ الْفَرِيقُ فِي ______ .' },
      { en: 'The students share …', ar: 'يَتَشَارَكُ الطُّلَّابُ ______ .' },
      { en: 'Cooperation helps us …', ar: 'التَّعَاوُنُ يُسَاعِدُنَا ______ .' },
      { en: 'The two friends …', ar: 'الصَّدِيقَانِ ______ .' },
    ],
    bank: ['تَعَاوَنَ · يَتَعَاوَنُ', 'تَبَادَلَ · يَتَبَادَلُ', 'تَفَاهَمَ · يَتَفَاهَمُ', 'تَشَارَكَ · يَتَشَارَكُ', 'تَنَاقَشَ · يَتَنَاقَشُ', 'تَقَابَلَ · يَتَقَابَلُ', 'تَعَاوُنٌ', 'مُتَعَاوِنٌ', 'بَعْضُنَا بَعْضًا'],
  },
  stretchTask: {
    task: 'Write a group-project report with five Form VI verbs and one Form III / Form VI pair.',
    checklist: ['Five Form VI verbs (ta- + ā).', 'Plural or dual subjects.', 'One singular subject + maʿa.', 'One verbal noun (taʿāwun, tabādul).', 'One Form III / VI pair.'],
    phrases: [['فِي الْبِدَايَةِ', 'at the beginning'], ['بَعْضُنَا بَعْضًا', 'each other'], ['كُلَّ أُسْبُوعٍ', 'every week'], ['سِرُّ النَّجَاحِ', 'the secret of success'], ['مَعَ زُمَلَائِي', 'with my classmates'], ['فِي النِّهَايَةِ', 'in the end']],
  },
  model: {
    text: 'فِي الشَّهْرِ الْمَاضِي شَارَكْتُ فِي مَشْرُوعٍ عَنِ الْبِيئَةِ مَعَ ثَلَاثِ زَمِيلَاتٍ. تَقَابَلْنَا فِي الْمَكْتَبَةِ، وَتَنَاقَشْنَا فِي الْفِكْرَةِ، ثُمَّ تَبَادَلْنَا الْمَعْلُومَاتِ عَبْرَ الْإِنْتَرْنِتِ. تَشَارَكْنَا فِي كِتَابَةِ التَّقْرِيرِ وَتَصْمِيمِ الْمُلْصَقِ. فِي الْبِدَايَةِ لَمْ نَتَفَاهَمْ دَائِمًا، وَلَكِنَّنَا تَعَاوَنَّا وَسَاعَدَ بَعْضُنَا بَعْضًا. تَعَلَّمْتُ أَنَّ التَّعَاوُنَ أَهَمُّ مِنَ الْفَوْزِ.',
    en: 'Last month I took part in a project about the environment with three classmates. We met in the library, discussed the idea, then exchanged information online. We shared in writing the report and designing the poster. At first we did not always understand each other, but we cooperated and helped one another. I learned that cooperation is more important than winning.',
    find: ['Form III verb', 'Form VI past', 'tafāʿul noun', 'Form V verb'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'My Form VI verbs have ta- and a long ā.' },
    { route: 'core', text: 'My present forms use ya- / na- + ta-.' },
    { route: 'develop', text: 'I used plural or dual subjects.' },
    { route: 'develop', text: 'I used maʿa with a singular subject.' },
    { route: 'stretch', text: 'I used a Form III / VI pair.' },
  ],
  exit: [
    q('Choose “we cooperated”.', ['تَعَاوَنَّا', 'نَتَعَاوَنُ', 'عَاوَنَّا'], 'Past + -nā.'),
    q('Which is Form VI?', ['تَبَادَلَ', 'تَبَدَّلَ', 'بَادَلَ'], 'ta- + ā; tabaddala is Form V.'),
    q('Choose “I cooperate with my friend”.', ['أَتَعَاوَنُ مَعَ صَدِيقِي', 'أَتَعَاوَنُ صَدِيقِي', 'أُعَاوِنُ مَعَ صَدِيقِي'], 'Singular + maʿa.'),
  ],
  mastery: false,
  prep: {
    words: [['اِنْكَسَرَ · يَنْكَسِرُ', 'to break (become broken)', '—'], ['اِنْفَتَحَ · يَنْفَتِحُ', 'to open (by itself)', '—'], ['اِنْقَطَعَ · يَنْقَطِعُ', 'to be cut off', '—'], ['اِنْصَرَفَ · يَنْصَرِفُ', 'to leave', '—'], ['كَسَرَ', 'to break something (Form I)', '—']],
    questionEn: 'Kasara l-waladu l-kaʾsa = the boy broke the glass. What happened in inkasara l-kaʾsu?',
    questionAr: 'كَسَرَ · اِنْكَسَرَ',
    homework: {
      core: 'Write five sentences with taʿāwana, tabādala and tafāhama.',
      develop: 'Conjugate tanāqasha in past and present (we, they, two, I + maʿa).',
      stretch: 'A group-project report with five Form VI verbs.',
    },
    wordsSource: 'The five words prepare GM-VF-07 (website Verb Forms: Form VII).',
  },
  remember: 'Remember: Form VI = ta- + ā (tafāʿala) · present yatafāʿalu (a before the last letter) · often “together / each other” · singular subject + maʿa · don’t add an extra ta-.',
});

module.exports = { meta, slides };
