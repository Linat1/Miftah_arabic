'use strict';
/* GM-ADV-01 · Common Adverbs of Time, Place and Manner — website: Mastery & Revision › Grammar › Adverbs › Lesson 1 (adverbs answer
 * when? where? how?; time table الْيَوْمَ · أَمْسِ · غَدًا · الآنَ · قَرِيبًا · frequency; fronting for emphasis غَدًا سَأَذْهَبُ ⇄ سَأَذْهَبُ غَدًا;
 * place: stand-alone هُنَا · هُنَاكَ and place word + genitive noun فَوْقَ الطَّاوِلَةِ; manner: جَيِّدًا · سَرِيعًا · فَجْأَةً · مَعًا and phrases
 * بِبُطْءٍ · بِهُدُوءٍ; adjective vs adverb سَيَّارَةٌ سَرِيعَةٌ ≠ تَسِيرُ السَّيَّارَةُ سَرِيعًا). Quizzes are the website’s (Entry, Time, Place,
 * Manner and Mastery checks); Arabic-in-English feedback lines are rewritten in English for the slides. Sorter, repair (from the website
 * misconception clinic), reading questions, frames and model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__05-adverbs__grammar-mastery-01-common-adverbs';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-ADV-01', fileTitle: 'Adverbs_of_Time_Place_Manner', title: 'Common Adverbs of Time, Place and Manner', arabic: 'ظُرُوفُ الزَّمَانِ وَالْمَكَانِ وَالْحَالِ',
  focus: 'A verb says what happens; adverbs add WHEN (today, tomorrow), WHERE (here, under the table) and HOW (well, slowly). Many end in -an; place words take a genitive noun; manner can also be bi- + noun.',
  icon: 'FaClock',
});

const slides = G.gmLesson({
  code: 'GM-ADV-01', site: KEY,
  support: `• Core: high-frequency time (الْيَوْمَ · أَمْسِ · غَدًا · الآنَ), place (هُنَا · هُنَاكَ) and manner words (جَيِّدًا · سَرِيعًا · مَعًا). Develop: place word + genitive noun (فَوْقَ الطَّاوِلَةِ); adjective vs adverb (سَرِيعَةٌ / سَرِيعًا). Stretch: fronting for emphasis; manner phrases with بِـ (بِهُدُوءٍ · بِعِنَايَةٍ).
• Website communication test: after every sentence, ask “when? where? how?” — مَتَى؟ أَيْنَ؟ كَيْفَ؟
• Frequency words (دَائِمًا · غَالِبًا · أَحْيَانًا · نَادِرًا) are gold for IGCSE daily-routine writing.`,
  teach: 'Time, place and manner; adjective vs adverb.',
  wedo: 'Sort when / where / how; repair.',
  next: { nextCode: 'GM-ADV-02', nextTitle: 'Time Frames with Adverbs', nextAr: 'الظُّرُوفُ وَالْأُطُرُ الزَّمَنِيَّةُ' },
  doNow: {
    fb: {
      0: { prompt: 'Which word tells us WHEN: سَأَزُورُ جَدَّتِي غَدًا.', feedback: 'Ghadan (tomorrow) places the visit in the future.' },
      1: 'Hunā means here; hunāka means there.',
      2: 'Sarīʿan describes how the train moves.',
      3: 'Fawqa expresses place; the next noun is genitive.',
      4: 'Jayyidun agrees with “book”: it describes a noun.',
    },
    keyIdea: { text: 'Ask three questions of every verb: WHEN? WHERE? HOW? The answers are adverbs.', ar: '{k|غَدًا} أَدْرُسُ {e|هُنَا} {k|جَيِّدًا}' },
    retrieves: 'The website Entry Check (questions 1–5) — it uses the adverbs prepared at the end of GM-ADJ-09.',
  },
  objectives: ['Use common adverbs of time, place and manner.', 'Build place phrases with a genitive noun.', 'Tell an adjective (describes a noun) from an adverb (describes an action).', 'Move a time adverb for emphasis.'],
  routes: {
    core: ['I answer when / where / how with one word.', 'I use today, tomorrow, here, there, well.'],
    develop: ['I write under the chair with a genitive noun.', 'I choose a fast car vs it moves fast.'],
    stretch: ['I front a time word for emphasis.', 'I use bi- phrases: calmly, carefully.'],
  },
  terms: {
    items: [
      { ar: 'ظَرْفُ الزَّمَانِ', en: 'adverb of time (when?)', note: 'غَدًا · الْيَوْمَ' },
      { ar: 'ظَرْفُ الْمَكَانِ', en: 'adverb of place (where?)', note: 'هُنَا · فَوْقَ' },
      { ar: 'الْحَالُ', en: 'manner (how?)', note: 'جَيِّدًا · بِبُطْءٍ' },
      { ar: 'مَتَى؟', en: 'when?', tr: 'matā', note: 'مَتَى تَدْرُسُ؟' },
      { ar: 'أَيْنَ؟', en: 'where?', tr: 'ayna', note: 'أَيْنَ الْكِتَابُ؟' },
      { ar: 'كَيْفَ؟', en: 'how?', tr: 'kayfa', note: 'كَيْفَ تَكْتُبُ؟' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · adverbs of time (website table)', title: 'When? — time words', ar: 'ظُرُوفُ الزَّمَانِ', ltr: true,
      cols: [{ label: 'Arabic', w: 3.0, size: 24 }, { label: 'Meaning', w: 2.8 }, { label: 'Model in context (website)', w: 6.53, size: 22 }],
      rows: [
        { core: true, cells: ['الْيَوْمَ', 'today', 'أَدْرُسُ الْعَرَبِيَّةَ الْيَوْمَ.'] },
        { core: true, cells: ['أَمْسِ', 'yesterday', 'زُرْتُ صَدِيقِي أَمْسِ.'] },
        { core: true, cells: ['غَدًا', 'tomorrow', 'سَأَعْمَلُ غَدًا.'] },
        { core: true, cells: ['الآنَ', 'now', 'أَقْرَأُ الآنَ.'] },
        { cells: ['قَرِيبًا', 'soon', 'سَنَبْدَأُ قَرِيبًا.'] },
        { cells: ['دَائِمًا · غَالِبًا · أَحْيَانًا · نَادِرًا', 'always · often · sometimes · rarely', 'أُصَلِّي دَائِمًا فِي الْمَسْجِدِ.'] },
      ],
      foot: 'Website: both orders are possible — fronting the time word (tomorrow I will go …) highlights the time; putting it later sounds neutral.',
      notes: 'PART 1 (3 min) — website table “Adverbs of time”. Show the website pair: غَدًا سَأَذْهَبُ إِلَى السُّوقِ · سَأَذْهَبُ إِلَى السُّوقِ غَدًا.',
    },
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 2 · adverbs and expressions of place (website)', title: 'Where? — alone, or + a genitive noun', ar: 'ظُرُوفُ الْمَكَانِ',
      points: [
        'Some place words stand alone: here, there, inside, outside (website).',
        'Others need a noun to complete the location: on, under, in front of, behind, between (website).',
        'The noun after these place words is GENITIVE, like an iḍāfa (website).',
        'So: the bag is under the chair = taḥta l-kursiyyi, with -i.',
        'Website warning: not fawqa ṭ-ṭāwilatu, but fawqa ṭ-ṭāwilati.',
      ],
      examples: [
        { ar: 'أَسْكُنُ هُنَا، وَلَكِنَّ مَدْرَسَتِي هُنَاكَ.', en: 'I live here, but my school is there.', note: 'website · stand-alone' },
        { ar: 'فَوْقَ الطَّاوِلَةِ · تَحْتَ الْكُرْسِيِّ', en: 'on the table · under the chair', note: 'website' },
        { ar: 'أَمَامَ الْمَدْرَسَةِ · خَلْفَ الْبَيْتِ', en: 'in front of the school · behind the house', note: 'website' },
        { ar: 'بَيْنَ الْمَكْتَبَيْنِ', en: 'between the two desks', note: 'website · dual genitive' },
      ],
      notes: 'PART 2 (3 min) — website “Adverbs and expressions of place”. Use a pen and a book on camera: fawqa / taḥta / amāma / khalfa.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · adverbs of manner (website) · Develop / Stretch', title: 'How? — and adjective vs adverb', ar: 'كَيْفَ يَحْدُثُ الْفِعْلُ؟', ltr: true,
      cols: [{ label: 'Type', w: 3.0 }, { label: 'Arabic (website)', w: 5.0, size: 24 }, { label: 'Meaning', w: 4.33 }],
      rows: [
        { core: true, cells: ['single word in -an', 'جَيِّدًا · سَرِيعًا · فَجْأَةً · مَعًا', 'well · quickly · suddenly · together'] },
        { cells: ['bi- + noun', 'بِبُطْءٍ · بِهُدُوءٍ · بِوُضُوحٍ · بِعِنَايَةٍ', 'slowly · calmly · clearly · carefully'] },
        { cells: ['alone', 'وَحْدَهُ · وَحْدَهَا', 'alone (he / she)'] },
        { core: true, cells: ['ADJECTIVE (describes a noun)', 'سَيَّارَةٌ سَرِيعَةٌ', 'a fast car'] },
        { core: true, cells: ['ADVERB (describes an action)', 'تَسِيرُ السَّيَّارَةُ سَرِيعًا.', 'The car moves fast.'] },
      ],
      foot: 'Website: the adjective agrees with its noun; the adverb describes the verb and does not agree with anything.',
      notes: 'PART 3 (3 min) — website “Adverbs of manner”. The bi- phrases are developed in GM-ADV-03.',
    },
  ],
  quick: [
    W(/Time Check/, 0, { feedback: 'Al-āna (now) places the action in the present.' }),
    W(/Time Check/, 1, { feedback: 'Amsi (yesterday) goes with the past tense.' }),
    W(/Place Check/, 0, { feedback: 'Taḥta gives the location; the chair is genitive.' }),
    W(/Manner Check/, 0, { feedback: 'Jayyidan describes the reading action.' }),
  ],
  quickNote: 'website Time, Place and Manner checks.',
  ido: {
    title: 'Watch me answer when, where and how',
    steps: [
      { head: 'Verb', ar: 'أَدْرُسُ', think: 'What happens?' },
      { head: 'When?', ar: 'أَدْرُسُ مَسَاءً', think: 'Time: in the evening.' },
      { head: 'Where?', ar: 'فِي غُرْفَتِي', think: 'Place phrase.' },
      { head: 'How?', ar: 'بِهُدُوءٍ', think: 'Manner: calmly.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'WHEN / WHERE', e: 'HOW' },
    model: '{k|مَسَاءً} أَدْرُسُ {k|هُنَا فِي غُرْفَتِي} {e|بِهُدُوءٍ}، وَ{k|غَدًا} سَأَدْرُسُ {e|مَعَ صَدِيقِي} {k|فِي الْمَكْتَبَةِ}.',
    modelEn: 'In the evening I study here in my room calmly, and tomorrow I will study with my friend in the library.',
    notes: 'Start with the bare verb and keep asking متى؟ أين؟ كيف؟ — each answer adds an adverb. Note مَسَاءً (in the evening) ends in -an like many time adverbs.',
  },
  models: [
    { ar: 'أَسْتَيْقِظُ مُبَكِّرًا كُلَّ يَوْمٍ.', en: 'I wake up early every day.', tip: 'Website reading text.' },
    { ar: 'الْحَقِيبَةُ تَحْتَ الْكُرْسِيِّ.', en: 'The bag is under the chair.', tip: 'Place + genitive.' },
    { ar: 'تَكَلَّمَتِ الْمُعَلِّمَةُ بِوُضُوحٍ.', en: 'The teacher spoke clearly.', tip: 'Manner phrase.' },
    { ar: 'أَحْيَانًا نَأْكُلُ مَعًا فِي الْمَطْعَمِ.', en: 'Sometimes we eat together at the restaurant.', tip: 'Frequency + manner + place.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · when, where or how? (website game words)', title: 'Time, place or manner?', ar: 'مَتَى؟ أَيْنَ؟ كَيْفَ؟',
      categories: ['When? (time)', 'Where? (place)', 'How? (manner)'],
      items: [['غَدًا', 0], ['هُنَا', 1], ['بِهُدُوءٍ', 2], ['الآنَ', 0], ['تَحْتَ الْكُرْسِيِّ', 1], ['جَيِّدًا', 2], ['أَمْسِ', 0], ['فَوْقَ الْمَكْتَبِ', 1], ['مَعًا', 2]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Words from the website game. Students type T, P or M, then use one in a sentence.',
    },
  ],
  mistakes: [
    { wrong: 'هَذَا قِطَارٌ سَرِيعًا.', right: 'هَذَا قِطَارٌ سَرِيعٌ.', why: 'Describing a noun → adjective (website clinic).' },
    { wrong: 'الْحَقِيبَةُ تَحْتَ الْكُرْسِيُّ.', right: 'الْحَقِيبَةُ تَحْتَ الْكُرْسِيِّ.', why: 'Genitive after a place word (website clinic).' },
    { wrong: 'تَكَلَّمَ جَيِّدٌ.', right: 'تَكَلَّمَ جَيِّدًا.', why: 'Describing an action → adverb (website clinic).' },
  ],
  hints: ['Noun or action?', 'What follows taḥta?', 'How did he speak?'],
  practice: [
    W(/Mastery/, 3, { feedback: 'Use the manner form sarīʿan for “runs quickly”.' }),
    W(/Mastery/, 4),
    W(/Mastery/, 6, { feedback: 'Fawqa gives the location.' }),
    W(/Mastery/, 7),
  ],
  practiceLabel: 'website mastery check questions 4, 5, 7 and 8',
  read: {
    title: 'My study day', label: 'website reading detective, extended by the teacher',
    text: 'أَسْتَيْقِظُ مُبَكِّرًا كُلَّ يَوْمٍ. أَدْرُسُ هُنَا فِي غُرْفَتِي، وَأَكْتُبُ وَاجِبِي بِعِنَايَةٍ. غَدًا سَأَدْرُسُ مَعَ صَدِيقَتِي هُنَاكَ فِي الْمَكْتَبَةِ. أَحْيَانًا نَقْرَأُ بِصَوْتٍ عَالٍ، وَلَكِنَّ الْمَكْتَبَةَ هَادِئَةٌ دَائِمًا.',
    glossary: [['أَسْتَيْقِظُ', 'I wake up'], ['مُبَكِّرًا', 'early'], ['وَاجِبِي', 'my homework'], ['بِعِنَايَةٍ', 'carefully'], ['سَأَدْرُسُ', 'I will study'], ['بِصَوْتٍ عَالٍ', 'aloud'], ['هَادِئَةٌ', 'quiet']],
    task: 'Website: sort the adverbs into time, place and manner, then say which verb each one modifies.',
    questions: [
      q('When does the writer wake up?', ['early', 'late', 'at night'], 'مُبَكِّرًا = early.'),
      q('How does she write her homework?', ['carefully', 'quickly', 'together'], 'بِعِنَايَةٍ = carefully.'),
      q('Where will she study tomorrow?', ['in the library', 'in her room', 'at school'], 'هُنَاكَ فِي الْمَكْتَبَةِ.'),
      q('Which word is a frequency adverb?', ['أَحْيَانًا', 'هُنَاكَ', 'بِعِنَايَةٍ'], 'Sometimes.'),
    ],
    qNote: 'The first three sentences are the website text; the last sentence and the questions are teacher-written.',
  },
  speak: {
    title: 'Speaking grid: when, where, how?', source: 'website speaking grid',
    prompts: [
      { route: 'core', ar: 'مَتَى تَدْرُسُ؟ أَيْنَ تَدْرُسُ؟' },
      { route: 'develop', ar: 'كَيْفَ تَدْرُسُ؟ (بِسُرْعَةٍ، بِهُدُوءٍ، مَعَ صَدِيقٍ …)' },
      { route: 'stretch', ar: 'صِفْ ثَلَاثَةَ أَعْمَالٍ: مَتَى وَأَيْنَ وَكَيْفَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَدْرُسُ ______ فِي ______ .' },
      { route: 'develop', ar: 'أَدْرُسُ ______ ، وَأَكْتُبُ ______ .' },
      { route: 'stretch', ar: '______ أُصَلِّي ______ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَتَى وَأَيْنَ تَلْعَبُ كُرَةَ الْقَدَمِ؟', en: 'When and where do you play football?' },
      { who: 'B', ar: 'أَلْعَبُ أَحْيَانًا يَوْمَ السَّبْتِ فِي الْحَدِيقَةِ خَلْفَ الْبَيْتِ، وَأَلْعَبُ بِحَمَاسٍ!', en: 'I sometimes play on Saturday in the park behind the house, and I play enthusiastically!' },
    ],
    notes: 'Website speaking grid: describe three actions, each with one time, one place and one manner expression. Listening reconstruction (website): partner reads twice — verbs first, then when / where / how.',
  },
  write: {
    siteTask: 'Write 80–100 words about one ordinary day, with at least four time, three place and three manner expressions.',
    core: { amount: '6 sentences', task: 'Six sentences about your day, each with a time word.', how: 'today, now, always, sometimes …' },
    develop: { amount: '8 sentences', task: 'Add place phrases with a genitive noun.', how: 'in front of the school, behind the house …' },
    stretch: { amount: '80–100 words', task: 'Website task: one ordinary day.', how: 'Vary the position of two time words; use bi- manner phrases.' },
  },
  frames: {
    core: [
      { en: 'Today I …', ar: 'الْيَوْمَ ______ .' },
      { en: 'I always …', ar: 'أَنَا دَائِمًا ______ .' },
      { en: 'I live here, but my school is there.', ar: 'أَسْكُنُ ______ ، وَمَدْرَسَتِي ______ .' },
      { en: 'I write well.', ar: 'أَكْتُبُ ______ .' },
    ],
    develop: [
      { en: 'My bag is under …', ar: 'حَقِيبَتِي تَحْتَ ______ .' },
      { en: 'There is a garden behind …', ar: 'خَلْفَ ______ حَدِيقَةٌ.' },
      { en: 'I do my homework carefully.', ar: 'أَكْتُبُ وَاجِبِي ______ .' },
      { en: 'Tomorrow I will … (future verb)', ar: 'غَدًا ______ .' },
    ],
    bank: ['الْيَوْمَ', 'أَمْسِ', 'غَدًا', 'الآنَ', 'دَائِمًا', 'أَحْيَانًا', 'هُنَا', 'هُنَاكَ', 'أَمَامَ', 'خَلْفَ', 'تَحْتَ', 'فَوْقَ', 'جَيِّدًا', 'بِسُرْعَةٍ', 'بِعِنَايَةٍ', 'مَعًا'],
  },
  stretchTask: {
    task: 'Website writing task: 80–100 words about one ordinary day, with at least four time, three place and three manner expressions.',
    checklist: ['Four time expressions, two of them in different positions.', 'Three place expressions with correct genitive nouns.', 'Three manner expressions (one -an word, one bi- phrase).', 'No adjective used where an adverb is needed.', 'Accurate verb forms for past, present and future.'],
    phrases: [['فِي الصَّبَاحِ', 'in the morning'], ['بَعْدَ الْمَدْرَسَةِ', 'after school'], ['أَمَامَ الْبَيْتِ', 'in front of the house'], ['بِسُرْعَةٍ', 'quickly'], ['بِعِنَايَةٍ', 'carefully'], ['مَعَ عَائِلَتِي', 'with my family']],
  },
  model: {
    text: 'الْيَوْمَ أَسْتَيْقِظُ مُبَكِّرًا، ثُمَّ أُصَلِّي الْفَجْرَ مَعَ أَبِي فِي الْمَسْجِدِ أَمَامَ بَيْتِنَا. بَعْدَ ذَلِكَ آكُلُ الْفَطُورَ بِسُرْعَةٍ وَأَذْهَبُ إِلَى الْمَدْرَسَةِ. فِي الصَّفِّ أَجْلِسُ دَائِمًا قُرْبَ النَّافِذَةِ، وَأَسْتَمِعُ إِلَى الْمُعَلِّمِ بِهُدُوءٍ. مَسَاءً أَكْتُبُ وَاجِبِي بِعِنَايَةٍ هُنَا فِي غُرْفَتِي. غَدًا سَأَلْعَبُ مَعَ أَصْدِقَائِي خَلْفَ الْمَدْرَسَةِ.',
    en: 'Today I wake up early, then pray Fajr with my father in the mosque in front of our house. After that I eat breakfast quickly and go to school. In class I always sit near the window and listen to the teacher calmly. In the evening I write my homework carefully here in my room. Tomorrow I will play with my friends behind the school.',
    find: ['time', 'place + genitive', 'manner', 'fronted time word'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'I used four time words.' },
    { route: 'core', text: 'I used here / there correctly.' },
    { route: 'develop', text: 'Nouns after place words are genitive (-i).' },
    { route: 'develop', text: 'Adverbs describe verbs; adjectives describe nouns.' },
    { route: 'stretch', text: 'I moved a time word to the front for emphasis.' },
  ],
  exit: [
    W(/Mastery/, 0, { feedback: 'Qarīban means soon.' }),
    W(/Mastery/, 1, { feedback: 'The whole phrase tells where the key is.' }),
    W(/Mastery/, 2, { feedback: 'Bi-wuḍūḥin tells how she spoke.' }),
  ],
  mastery: false,
  prep: {
    words: [['الْأُسْبُوعَ الْمَاضِيَ', 'last week', '—'], ['الْآنَ', 'now', '—'], ['الْأُسْبُوعَ الْقَادِمَ', 'next week', '—'], ['سَـ / سَوْفَ', 'will (future)', 'سَأَدْرُسُ'], ['كُلَّ يَوْمٍ', 'every day', '—']],
    questionEn: 'Which tense goes with “last week”, “now” and “next week”? Write one verb for each.',
    questionAr: 'الْأُسْبُوعَ الْمَاضِيَ دَرَسْتُ — الْآنَ ______',
    homework: {
      core: 'Write ten sentences: one adverb in each.',
      develop: 'Draw your room and label five place phrases.',
      stretch: 'Website writing task: one ordinary day (80–100 words).',
    },
    wordsSource: 'The five words prepare GM-ADV-02 (website Adverbs lesson 2: time frames).',
  },
  remember: 'Remember: adverbs answer when, where and how · place word + genitive noun · adjective describes a noun, adverb describes an action · front a time word to stress it.',
});

module.exports = { meta, slides };
