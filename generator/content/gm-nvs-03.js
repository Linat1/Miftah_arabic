'use strict';
/* GM-NVS-03 · Kāna and Its Sisters — website: Mastery & Revision › Grammar › Non-Verbal Sentences › Lesson 3 (kāna puts a nominal
 * sentence in the past: noun stays -u, one-word predicate becomes -an; place phrases keep their own case; conjugating kāna; VSO / SVO
 * link: kāna ṭ-ṭullābu vs aṭ-ṭullābu kānū; kāna + present = past habit / ongoing action — never kuntu darastu; the sisters aṣbaḥa,
 * ṣāra, ẓalla, mā zāla; clinic). Quizzes are the website’s (Entry, Conjugation, Final Mastery). Colour code: teal = kāna-family
 * verb, blue = its noun (-u), orange = predicate (-an). I-do, now / then drill, meaning sorter, reading, frames and the extended model
 * are teacher-made on the website content (the drill uses the website game items). */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__11-non-verbal-sentences__grammar-mastery-03-kana-sisters';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-NVS-03', fileTitle: 'Kana_Sisters', title: 'Kāna and Its Sisters', arabic: 'كَانَ وَأَخَوَاتُهَا',
  focus: 'Kāna moves a sentence into the past: al-jawwu bāridun → kāna l-jawwu bāridan (the weather was cold). The noun keeps -u; the predicate takes -an. Kuntu aqraʾu = I used to read; ṣāra = became; mā zāla = still.',
  icon: 'FaClockRotateLeft',
});

const slides = G.gmLesson({
  code: 'GM-NVS-03', site: KEY,
  support: `• Core: kāna / kānat / kuntu with description and location (kāna l-jawwu bāridan, kuntu fī l-bayt). Develop: the full kāna table (kunnā, kānū, kunna) and kāna + present for habits (kuntu aqraʾu kulla yawm). Stretch: ṣāra / aṣbaḥa (became), ẓalla (remained), mā zāla (still) with full case control.
• This is the mirror image of inna (GM-NVS-02): inna changes the NOUN to -a; kāna changes the PREDICATE to -an. Place phrases (fī l-bayt) never change.
• Colour code: teal = kāna-family verb, blue = noun (-u), orange = predicate (-an). Recycles GM-VS-02/03 agreement: kāna ṭ-ṭullābu (verb first) vs aṭ-ṭullābu kānū (subject first).`,
  teach: 'Present → past; conjugation; kāna + present; the sisters.',
  wedo: 'Now → then; sort by meaning; repair.',
  next: { nextCode: 'GM-NVS-04', nextTitle: 'Negation with Laysa', nextAr: 'نَفْيُ الْجُمْلَةِ الِاسْمِيَّةِ بِـلَيْسَ' },
  doNow: {
    questions: [
      W(/Entry Check/, 0, { prompt: 'Put “The weather is beautiful” in the past.', feedback: 'Noun -u, predicate -an: jamīlan.' }),
      W(/Entry Check/, 1, { feedback: 'I was = kuntu.' }),
      W(/Entry Check/, 2, { feedback: 'She was = kānat + mutʿabatan.' }),
      W(/Entry Check/, 3, { feedback: 'Kuntu + present = used to.' }),
      W(/Entry Check/, 4, { feedback: 'Ṣāra = became.' }),
    ],
    keyIdea: { text: 'Kāna + noun in -u + predicate in -an. Kāna + present verb = “used to”.', ar: '{k|كَانَ} {w|الْجَوُّ} {p|بَارِدًا} ‖ {k|كُنْتُ} {p|أَقْرَأُ}' },
    retrieves: 'The website Entry Check — GM-NVS-01 nominal sentences, GM-NVS-02 case change and GM-V past endings (-tu, -nā, -ū).',
  },
  objectives: ['Put a nominal sentence in the past with kāna.', 'Use the right form of kāna.', 'Say what I used to do.', 'Say what became and what is still.'],
  routes: {
    core: ['I write kāna l-jawwu bāridan.', 'I use kuntu, kāna, kānat.'],
    develop: ['I use kunnā, kānū, kunna.', 'I write kuntu + present for habits.'],
    stretch: ['I use ṣāra, ẓalla and mā zāla.', 'I write a then-and-now account of 110–130 words.'],
  },
  terms: {
    items: [
      { ar: 'كَانَ وَأَخَوَاتُهَا', en: 'kāna and its sisters', note: 'كَانَ · صَارَ · مَا زَالَ' },
      { ar: 'اسْمُ كَانَ', en: 'the noun of kāna (-u)', note: 'كَانَ الْجَوُّ' },
      { ar: 'خَبَرُ كَانَ', en: 'the predicate of kāna (-an)', note: 'بَارِدًا' },
      { ar: 'الْعَادَةُ فِي الْمَاضِي', en: 'past habit (“used to”)', note: 'كُنْتُ أَقْرَأُ' },
      { ar: 'التَّحَوُّلُ', en: 'change (“became”)', note: 'صَارَ · أَصْبَحَ' },
      { ar: 'الِاسْتِمْرَارُ', en: 'continuing (“still”)', note: 'مَا زَالَ · ظَلَّ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · from present state to past state (website table)', title: 'Kāna changes the predicate: -un becomes -an', ar: 'كَانَ + اسْمُهَا الْمَرْفُوعُ + خَبَرُهَا الْمَنْصُوبُ', ltr: true,
      cols: [{ label: 'Present', w: 3.8, size: 24 }, { label: 'Past with kāna', w: 4.6, size: 24 }, { label: 'Meaning', w: 3.93 }],
      rows: [
        { core: true, cells: ['الْجَوُّ بَارِدٌ.', 'كَانَ الْجَوُّ بَارِدًا.', 'The weather was cold.'] },
        { core: true, cells: ['أَحْمَدُ طَالِبٌ.', 'كَانَ أَحْمَدُ طَالِبًا.', 'Aḥmad was a student.'] },
        { core: true, cells: ['مَرْيَمُ فِي الْبَيْتِ.', 'كَانَتْ مَرْيَمُ فِي الْبَيْتِ.', 'Maryam was at home.'] },
        { cells: ['الْغُرْفَةُ نَظِيفَةٌ.', 'كَانَتِ الْغُرْفَةُ نَظِيفَةً.', 'The room was clean.'] },
        { cells: ['الطُّلَّابُ مُسْتَعِدُّونَ.', 'كَانَ الطُّلَّابُ مُسْتَعِدِّينَ.', 'The students were ready.'] },
      ],
      foot: 'Website case-aware pattern: the noun stays -u; a one-word predicate becomes -an (or -īna for -ūna plurals). A place phrase keeps its own case: kānat Maryamu fī l-bayti — no change.',
      notes: 'PART 1 (3 min) — website “From present state to past state” (rows 4–5 teacher-added). Compare with inna: inna changes the first word, kāna changes the second.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · conjugating kāna (website table)', title: 'Kāna changes with the person', ar: 'تَصْرِيفُ كَانَ', ltr: true,
      cols: [{ label: 'Person', w: 2.8 }, { label: 'Form', w: 3.2, size: 26 }, { label: 'Website model', w: 6.33, size: 24 }],
      rows: [
        { core: true, cells: ['I', 'كُنْتُ', 'كُنْتُ مُتْعَبَةً.'] },
        { cells: ['you (m. · f.)', 'كُنْتَ · كُنْتِ', 'كُنْتِ فِي الْمَدْرَسَةِ.'] },
        { core: true, cells: ['he / it (m.)', 'كَانَ', 'كَانَ مُسْتَعِدًّا.'] },
        { core: true, cells: ['she / it (f.)', 'كَانَتْ', 'كَانَتْ مُسْتَعِدَّةً.'] },
        { cells: ['we', 'كُنَّا', 'كُنَّا فِي الْمَكْتَبَةِ.'] },
        { cells: ['they (m. · f.)', 'كَانُوا · كُنَّ', 'كَانُوا مُجْتَهِدِينَ.'] },
      ],
      foot: 'Website word-order link: kāna ṭ-ṭullābu mustaʿiddīna (verb first → singular) and aṭ-ṭullābu kānū mustaʿiddīna (subject first → full agreement) — exactly like GM-VS-02/03.',
      notes: 'PART 2 (3 min) — website “Conjugating kāna”. The long ā shortens when an ending is added: kāna → kuntu, kunnā. Female group: kunna mujtahidātin.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · kāna + present = “used to” / “was …ing” (website table) · Develop', title: 'Past habits and background actions', ar: 'كَانَ + الْمُضَارِعُ', ltr: true,
      cols: [{ label: 'Frame', w: 2.6 }, { label: 'Model', w: 6.0, size: 22 }, { label: 'Meaning', w: 3.73 }],
      rows: [
        { core: true, cells: ['past habit', 'كُنْتُ أَقْرَأُ كُلَّ يَوْمٍ.', 'I used to read every day.'] },
        { core: true, cells: ['past habit (we)', 'كُنَّا نَلْعَبُ بَعْدَ الْمَدْرَسَةِ.', 'We used to play after school.'] },
        { cells: ['past ongoing', 'كَانَتْ تَدْرُسُ عِنْدَمَا اتَّصَلْتُ.', 'She was studying when I called.'] },
        { cells: ['background scene', 'كَانَ الْجَوُّ جَمِيلًا، وَكَانَ الْأَطْفَالُ يَلْعَبُونَ.', 'The weather was beautiful and the children were playing.'] },
        { cells: ['family habit', 'كَانُوا يَزُورُونَ جَدَّتَهُمْ كُلَّ جُمُعَةٍ.', 'They used to visit their grandmother every Friday.'] },
      ],
      foot: 'Website warning: do not double the past. Kuntu darastu kulla yawm does not mean “I used to study”. Use kuntu adrusu — kāna + present.',
      notes: 'PART 3 (3 min) — website “kāna + present” (rows 2 and 5 teacher-added). Both verbs agree with the subject: kunnā nalʿabu, kānū yazūrūna.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 4 · sisters for change and continuation (website table) · Stretch', title: 'Became, remained, still', ar: 'أَخَوَاتُ كَانَ', ltr: true,
      cols: [{ label: 'Verb', w: 2.4, size: 26 }, { label: 'Meaning', w: 3.6 }, { label: 'Website model', w: 6.33, size: 24 }],
      rows: [
        { cells: ['أَصْبَحَ', 'became (often: by morning)', 'أَصْبَحَ الْجَوُّ دَافِئًا.'] },
        { core: true, cells: ['صَارَ', 'became / turned into', 'صَارَ الطَّرِيقُ مُزْدَحِمًا.'] },
        { cells: ['ظَلَّ', 'remained / kept on', 'ظَلَّ الْبَابُ مَفْتُوحًا.'] },
        { core: true, cells: ['مَا زَالَ', 'is still', 'مَا زَالَتِ الْمَدْرَسَةُ مَفْتُوحَةً.'] },
      ],
      foot: 'Website: choose the sister for its meaning — past state, change or continuation — not to look advanced. Mā zāla needs its mā: zālat alone means the opposite (“ceased”).',
      notes: 'PART 4 (2 min) — website “Core sisters for change and continuation”. Same pattern as kāna: noun -u, predicate -an. Mā ziltu = I am still.',
    },
  ],
  quick: [
    W(/Conjugation Check/, 0, { prompt: 'Choose “We were ready.”', feedback: 'Kunnā + mustaʿiddīna (-īna).' }),
    W(/Conjugation Check/, 1, { prompt: 'Choose “The teachers (f.) were in the hall.”', feedback: 'Verb first → kānat; place phrase unchanged.' }),
    W(/Conjugation Check/, 2, { feedback: 'Female group first → kunna.' }),
    W(/Conjugation Check/, 3, { prompt: 'Choose “He continued to be calm.”', feedback: 'Ẓalla + hādiʾan.' }),
  ],
  quickNote: 'website Conjugation Check.',
  ido: {
    title: 'Watch me describe then and now',
    steps: [
      { head: 'Now', ar: 'الطَّرِيقُ هَادِئٌ', think: 'Present: -un.' },
      { head: 'Then', ar: 'كَانَ', think: 'Past frame.' },
      { head: 'Predicate', ar: 'هَادِئًا', think: '-un becomes -an.' },
      { head: 'Still', ar: 'مَا زَالَ جَمِيلًا', think: 'It continues.' },
    ],
    legend: ['k', 'w', 'p'], legendLabels: { k: 'KĀNA FAMILY', w: 'NOUN -u', p: 'PRED. -an' },
    model: 'عِنْدَمَا {k|كُنْتُ} {p|صَغِيرَةً}، {k|كُنْتُ} {p|أَسْكُنُ} قُرْبَ الْمَدْرَسَةِ. {k|كَانَ} {w|الطَّرِيقُ} {p|هَادِئًا}. بَعْدَ بِنَاءِ الْمَحَطَّةِ، {k|صَارَ} {w|الْحَيُّ} {p|مُزْدَحِمًا}، لَكِنَّهُ {k|مَا زَالَ} {p|جَمِيلًا}.',
    modelEn: 'When I was little, I used to live near the school. The road was quiet. After the station was built, the neighbourhood became crowded, but it is still beautiful.',
    notes: 'Website skills-workshop lines. Kuntu aqsunu = “I used to live” (kāna + present).',
  },
  models: [
    { ar: 'كَانَ الْجَوُّ بَارِدًا.', en: 'The weather was cold.', tip: 'Past state: -an.' },
    { ar: 'كُنْتُ أَقْرَأُ كُلَّ يَوْمٍ.', en: 'I used to read every day.', tip: 'Past habit.' },
    { ar: 'صَارَ الطَّرِيقُ مُزْدَحِمًا.', en: 'The road became crowded.', tip: 'Change.' },
    { ar: 'مَا زَالَتِ الْمَدْرَسَةُ مَفْتُوحَةً.', en: 'The school is still open.', tip: 'Continuation.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · now → then (website game)', title: 'Put it in the past', ar: 'حَوِّلْ إِلَى الْمَاضِي', ltr: true, stage: 'wedo',
      cols: [{ label: 'Now', w: 4.3, size: 22 }, { label: 'Then', w: 4.6, size: 22 }, { label: 'Watch', w: 3.43 }],
      rows: [
        { core: true, cells: ['الطَّقْسُ جَمِيلٌ.', 'كَانَ الطَّقْسُ جَمِيلًا.', '-un becomes -an'] },
        { core: true, cells: ['أَنَا فِي الْمَدْرَسَةِ.', 'كُنْتُ فِي الْمَدْرَسَةِ.', 'place: no change'] },
        { core: true, cells: ['هِيَ سَعِيدَةٌ.', 'كَانَتْ سَعِيدَةً.', 'kānat for she'] },
        { cells: ['نَحْنُ نَلْعَبُ بَعْدَ الْمَدْرَسَةِ.', 'كُنَّا نَلْعَبُ بَعْدَ الْمَدْرَسَةِ.', 'used to'] },
        { cells: ['الطُّلَّابُ فِي الْمَكْتَبَةِ.', 'كَانَ الطُّلَّابُ فِي الْمَكْتَبَةِ.', 'verb first: kāna'] },
        { cells: ['هُمْ مُتْعَبُونَ.', 'كَانُوا مُتْعَبِينَ.', '-ūna becomes -īna'] },
      ],
      foot: 'The pronoun disappears into kāna: anā → kuntu, hiya → kānat, hum → kānū. Do not write kāna anā.',
      notes: 'WE DO (3 min) — website game items. Cover column 2.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · what does the sentence tell us?', title: 'Was, used to, became or still?', ar: 'مَاذَا تُضِيفُ الْكَلِمَةُ؟',
      categories: ['Was', 'Used to', 'Became', 'Still'],
      items: [['كَانَ الْبَيْتُ هَادِئًا.', 0], ['كَانَتْ مَرْيَمُ فِي الْبَيْتِ.', 0], ['كُنْتُ أَقْرَأُ كُلَّ يَوْمٍ.', 1], ['كُنَّا نَلْعَبُ بَعْدَ الْمَدْرَسَةِ.', 1], ['صَارَ الشَّارِعُ مُزْدَحِمًا.', 2], ['أَصْبَحَ الْجَوُّ دَافِئًا.', 2], ['مَا زَالَتِ الْمُشْكِلَةُ خَطِيرَةً.', 3], ['مَا زَالَ الْبَابُ مَفْتُوحًا.', 3]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min) — website models and game items. Ask for the English meaning of each card.',
    },
  ],
  mistakes: [
    { wrong: 'كَانَ الطَّقْسَ جَمِيلٌ.', right: 'كَانَ الطَّقْسُ جَمِيلًا.', why: 'Noun -u, predicate -an (website clinic).' },
    { wrong: 'كُنْتُ دَرَسْتُ كُلَّ يَوْمٍ.', right: 'كُنْتُ أَدْرُسُ كُلَّ يَوْمٍ.', why: 'Habit: kāna + present (website clinic).' },
    { wrong: 'زَالَتِ الْمُشْكِلَةُ صَعْبَةً.', right: 'مَا زَالَتِ الْمُشْكِلَةُ صَعْبَةً.', why: '“Still” needs mā (website clinic).' },
  ],
  hints: ['Which word takes -an?', 'Habit: past or present verb after kuntu?', 'What is missing before zālat?'],
  practice: [
    W(/Final Mastery/, 1, { feedback: 'Noun -u, predicate -an.' }),
    W(/Final Mastery/, 2, { prompt: 'Choose “I was a student.”', feedback: 'Kuntu ṭāliban.' }),
    W(/Final Mastery/, 3, { prompt: 'Choose “They were tired.” (m. / mixed)', feedback: 'Kānū mutʿabīna.' }),
    W(/Final Mastery/, 5, { prompt: 'Which means “I used to study in the evening”?', feedback: 'Kuntu + present.' }),
  ],
  practiceLabel: 'website Final Mastery check',
  read: {
    title: 'My grandfather’s village', label: 'website skills workshop (teacher-written then-and-now)',
    text: 'قَبْلَ عَشْرِ سَنَوَاتٍ كَانَتْ قَرْيَةُ جَدِّي صَغِيرَةً وَهَادِئَةً. كَانَ النَّاسُ يَعْمَلُونَ فِي الْمَزَارِعِ، وَكَانَ الْأَطْفَالُ يَلْعَبُونَ قُرْبَ النَّهْرِ. كَانَتِ الطُّرُقُ تُرَابِيَّةً، وَكَانَ السُّوقُ بَعِيدًا. ثُمَّ بَنَتِ الْحُكُومَةُ مَدْرَسَةً وَمُسْتَشْفًى، فَصَارَتِ الْقَرْيَةُ أَكْبَرَ، وَأَصْبَحَتِ الطُّرُقُ وَاسِعَةً. الْيَوْمَ الْقَرْيَةُ مُزْدَحِمَةٌ، لَكِنَّهَا مَا زَالَتْ جَمِيلَةً، وَمَا زَالَ جَدِّي يَسْكُنُ فِي بَيْتِهِ الْقَدِيمِ.',
    glossary: [['قَرْيَةُ', 'village'], ['الْمَزَارِعِ', 'the farms'], ['تُرَابِيَّةً', 'dirt (unpaved)'], ['الْحُكُومَةُ', 'the government'], ['وَاسِعَةً', 'wide']],
    task: 'Website paper route: make a then / now plan from the text and underline every form from the kāna family.',
    questions: [
      q('Where did the children use to play?', ['near the river', 'in the school', 'in the market'], 'Kāna l-aṭfālu yalʿabūna qurba n-nahr.'),
      q('What changed the village?', ['a new school and hospital', 'the river dried up', 'people left'], 'Banati l-ḥukūmatu madrasatan wa-mustashfan.'),
      q('What does mā zāla tell us about the grandfather?', ['he still lives in his old house', 'he moved away', 'he works on a farm'], 'Mā zāla = still.'),
      q('Why kānati ṭ-ṭuruqu (feminine singular)?', ['roads are things', 'it is a mistake', 'only one road'], 'Non-human plural → feminine singular.'),
    ],
    qNote: 'Teacher-written account for the website then-and-now task; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: then and now', source: 'website skills workshop',
    prompts: [
      { route: 'core', ar: 'كَيْفَ كُنْتَ عِنْدَمَا كُنْتَ صَغِيرًا؟' },
      { route: 'develop', ar: 'مَاذَا كُنْتَ تَفْعَلُ فِي الْعُطْلَةِ؟' },
      { route: 'stretch', ar: 'كَيْفَ تَغَيَّرَتْ مَدِينَتُكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'عِنْدَمَا كُنْتُ صَغِيرًا، كُنْتُ ______ .' },
      { route: 'develop', ar: 'كُنْتُ ______ كُلَّ يَوْمٍ، وَكَانَ أَخِي ______ .' },
      { route: 'stretch', ar: 'كَانَتْ مَدِينَتِي ______ ، ثُمَّ صَارَتْ ______ ، لَكِنَّهَا مَا زَالَتْ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'كَيْفَ كَانَتْ مَدْرَسَتُكِ الْقَدِيمَةُ؟', en: 'What was your old school like? (to a girl)' },
      { who: 'B', ar: 'كَانَتْ صَغِيرَةً، وَكُنَّا نَلْعَبُ فِي سَاحَةٍ ضَيِّقَةٍ. الْآنَ صَارَتْ أَكْبَرَ، لَكِنَّ الْمُعَلِّمِينَ مَا زَالُوا لُطَفَاءَ.', en: 'It was small, and we used to play in a narrow yard. Now it has become bigger, but the teachers are still kind.' },
    ],
    notes: 'Website: describe how people, places and routines were in the past and how situations changed or continued.',
  },
  write: {
    siteTask: 'Write 110–130 Arabic words comparing a place, routine or period in your life in the past and now.',
    core: { amount: '5 sentences', task: 'When I was little: four kāna sentences.', how: 'kuntu ṣaghīran · kāna baytunā …' },
    develop: { amount: '8 sentences', task: 'Add two habits and one change.', how: 'kuntu alʿabu · ṣāra …' },
    stretch: { amount: '110–130 words', task: 'Website then-and-now account with the full checklist.', how: 'Include mā zāla.' },
  },
  frames: {
    core: [
      { en: 'When I was little, I was …', ar: 'عِنْدَمَا كُنْتُ صَغِيرًا، كُنْتُ ______ .' },
      { en: 'Our house was …', ar: 'كَانَ بَيْتُنَا ______ .' },
      { en: 'My school was …', ar: 'كَانَتْ مَدْرَسَتِي ______ .' },
      { en: 'We were in …', ar: 'كُنَّا فِي ______ .' },
    ],
    develop: [
      { en: 'I used to play …', ar: 'كُنْتُ أَلْعَبُ ______ .' },
      { en: 'My friends were …', ar: 'أَصْدِقَائِي كَانُوا ______ .' },
      { en: 'The street became …', ar: 'صَارَ الشَّارِعُ ______ .' },
      { en: 'My grandmother is still …', ar: 'مَا زَالَتْ جَدَّتِي ______ .' },
    ],
    bank: ['كَانَ', 'كَانَتْ', 'كُنْتُ', 'كُنَّا', 'كَانُوا', 'صَارَ', 'أَصْبَحَ', 'مَا زَالَ', 'هَادِئًا', 'مُزْدَحِمًا', 'صَغِيرًا', 'كَبِيرًا', 'جَمِيلًا'],
  },
  stretchTask: {
    task: 'Website then-and-now account (110–130 words): a place, routine or period in your life.',
    checklist: ['Four different forms of kāna.', 'One kāna + present habit.', 'One ṣāra or aṣbaḥa.', 'One mā zāla.', 'Accurate time expressions (qabla …, al-yawma, ʿindamā).'],
    phrases: [['عِنْدَمَا كُنْتُ صَغِيرًا', 'when I was little'], ['قَبْلَ … سَنَوَاتٍ', '… years ago'], ['فِي الْمَاضِي', 'in the past'], ['الْيَوْمَ', 'today'], ['بَعْدَ ذَلِكَ', 'after that'], ['رَغْمَ', 'despite']],
  },
  model: {
    text: 'عِنْدَمَا كُنْتُ فِي الْمَدْرَسَةِ الِابْتِدَائِيَّةِ، كُنَّا نَسْكُنُ فِي شَقَّةٍ صَغِيرَةٍ وَسَطَ الْمَدِينَةِ. كَانَتِ الشَّقَّةُ قَدِيمَةً، لَكِنَّهَا كَانَتْ دَافِئَةً وَمُرِيحَةً. كُنْتُ أَمْشِي إِلَى الْمَدْرَسَةِ كُلَّ صَبَاحٍ مَعَ أَخِي، وَكَانَ الطَّرِيقُ قَصِيرًا وَهَادِئًا. كَانَ جِيرَانُنَا لُطَفَاءَ، وَكَانُوا يَزُورُونَنَا فِي الْأَعْيَادِ. قَبْلَ ثَلَاثِ سَنَوَاتٍ انْتَقَلْنَا إِلَى بَيْتٍ جَدِيدٍ خَارِجَ الْمَدِينَةِ. أَصْبَحَتْ غُرْفَتِي أَكْبَرَ، وَصَارَتِ الْحَدِيقَةُ مَكَانِي الْمُفَضَّلَ. لَكِنَّ الطَّرِيقَ إِلَى الْمَدْرَسَةِ صَارَ طَوِيلًا، فَأَصْبَحْتُ أَرْكَبُ الْحَافِلَةَ. مَا زِلْتُ أَتَذَكَّرُ الشَّقَّةَ الْقَدِيمَةَ، وَمَا زَالَ أَبِي يَزُورُ جِيرَانَنَا الْقُدَمَاءَ كُلَّ شَهْرٍ. ظَلَّتْ صَدَاقَتُنَا قَوِيَّةً رَغْمَ الْمَسَافَةِ.',
    en: 'When I was in primary school, we lived in a small flat in the city centre. The flat was old, but it was warm and comfortable. I used to walk to school every morning with my brother, and the road was short and quiet. Our neighbours were kind, and they used to visit us at Eid. Three years ago we moved to a new house outside the city. My room became bigger, and the garden became my favourite place. But the road to school became long, so I started taking the bus. I still remember the old flat, and my father still visits our old neighbours every month. Our friendship has remained strong despite the distance.',
    find: ['kāna + -an predicate', 'kāna + present (habit)', 'ṣāra / aṣbaḥa', 'mā zāla'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'After kāna, my one-word predicates end in -an.' },
    { route: 'core', text: 'I used the right form: kuntu, kāna, kānat.' },
    { route: 'develop', text: 'My habits use kāna + present (kuntu alʿabu).' },
    { route: 'develop', text: 'Place phrases after kāna did not change.' },
    { route: 'stretch', text: 'I used ṣāra and mā zāla with the right meaning.' },
  ],
  exit: [
    W(/Final Mastery/, 6, { prompt: 'Which means “The room became quiet”?', feedback: 'Ṣārati l-ghurfatu hādiʾatan.' }),
    W(/Final Mastery/, 7, { prompt: 'Which means “The student remained active”?', feedback: 'Ẓalla + nashīṭan.' }),
    W(/Final Mastery/, 8, { prompt: 'Which means “The school is still open”?', feedback: 'Mā zālat + maftūḥatan.' }),
  ],
  mastery: false,
  prep: {
    words: [['لَيْسَ', 'is not (he / it)', '—'], ['لَيْسَتْ', 'is not (she / it f.)', '—'], ['لَسْتُ', 'I am not', '—'], ['لَسْنَا', 'we are not', '—'], ['لَيْسُوا', 'they are not', '—']],
    questionEn: 'Laysa works like kāna: the predicate takes -an. How would you say “The exam is not difficult”?',
    questionAr: 'لَيْسَ الِامْتِحَانُ ______ .',
    homework: {
      core: 'Write five sentences about when you were little with kuntu / kāna / kānat.',
      develop: 'Write four “used to” sentences and one with ṣāra.',
      stretch: 'Website then-and-now account (110–130 words).',
    },
    wordsSource: 'The five words prepare GM-NVS-04 (website: negation with laysa).',
  },
  remember: 'Remember: kāna + noun in -u + predicate in -an (kāna l-jawwu bāridan) · place phrases do not change · kuntu, kunnā, kāna, kānat, kānū, kunna · kāna + present = used to · ṣāra / aṣbaḥa = became · ẓalla = remained · mā zāla = still.',
});

module.exports = { meta, slides };
