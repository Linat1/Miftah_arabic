'use strict';
/* GM-ADV-03 · Adverb + Noun: Prepositional Phrases — website: Mastery & Revision › Grammar › Adverbs › Lesson 3 (Arabic often expresses
 * English -ly with a short prepositional phrase; بِـ + genitive noun for manner — بِسُرْعَةٍ · بِبُطْءٍ · بِسُهُولَةٍ · بِصُعُوبَةٍ · بِهُدُوءٍ ·
 * بِوُضُوحٍ · بِعِنَايَةٍ · بِأَمَانٍ; do not build from the adjective: بِسُرْعَةٍ not بِسَرِيعٍ; فِي + noun for time and place; spelling: فِي stays
 * separate, بِـ attaches; position and layering: أَكْمَلْتُ الْوَاجِبَ بِسُرْعَةٍ فِي الْمَكْتَبَةِ أَمْسِ; means vs manner بِالْحَافِلَةِ /
 * بِسُرْعَةٍ). Quizzes are the website’s (Entry, بِـ check, فِي check, Phrase Mastery); Arabic-in-English feedback is rewritten in
 * English. Adjective → noun table, sorter, repair, reading questions, frames and model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__05-adverbs__grammar-mastery-03-prepositional-phrases';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-ADV-03', fileTitle: 'Prepositional_Phrases', title: 'Adverb + Noun: Prepositional Phrases', arabic: 'التَّرَاكِيبُ الظَّرْفِيَّةُ بِالْجَارِّ وَالْمَجْرُورِ',
  focus: 'Arabic often says “-ly” with bi- + a NOUN: bi-surʿatin = with speed = quickly. Fī + noun gives time and place: in the morning, at school. After both, the noun is genitive (-in / -i).',
  icon: 'FaPersonRunning',
});

const slides = G.gmLesson({
  code: 'GM-ADV-03', site: KEY,
  support: `• Core: eight high-frequency manner chunks with بِـ (بِسُرْعَةٍ · بِبُطْءٍ · بِسُهُولَةٍ · بِصُعُوبَةٍ · بِهُدُوءٍ · بِوُضُوحٍ · بِعِنَايَةٍ · بِأَمَانٍ) and فِي + place / time. Develop: genitive endings; spelling (بِـ attaches, فِي stays separate; بِالْـ). Stretch: means vs manner (بِالْحَافِلَةِ / بِسُرْعَةٍ); choosing direct adverb vs phrase (سَرِيعًا / بِسُرْعَةٍ); layering manner + place + time.
• Website warning: do not attach بِـ to the ADJECTIVE (بِسَرِيعٍ ✗) — the chunk uses the NOUN (سُرْعَةٌ).
• Chunk learning: teach each phrase as a single vocabulary item with a gesture (fast hands, slow hands, finger on lips for calmly…).`,
  teach: 'bi- + noun for manner; fī + noun for time and place; position.',
  wedo: 'Adjective → noun → phrase; sort; repair.',
  next: { nextCode: 'GM-ADV-04', nextTitle: 'Common Adverbial Phrases for Fluency', nextAr: 'عِبَارَاتٌ ظَرْفِيَّةٌ شَائِعَةٌ لِلطَّلَاقَةِ' },
  doNow: {
    pick: [0, 1, 2, 4, 5],
    fb: {
      0: 'Bi- + the noun surʿa (speed) forms the manner phrase.',
      1: 'The noun suhūla becomes genitive after bi-.',
      2: 'Fī + a place noun creates a location phrase.',
      4: 'The noun after bi- is genitive: -in.',
    },
    keyIdea: { text: 'bi- + NOUN (genitive) = “-ly”: with speed = quickly. fī + noun = in / at (time or place).', ar: '{k|بِ}{e|سُرْعَةٍ} ‖ {k|فِي} {e|الصَّبَاحِ}' },
    retrieves: 'The website Entry Check (questions 1–3, 5 and 6) — it uses the bi- phrases prepared at the end of GM-ADV-02.',
  },
  objectives: ['Use common bi- + noun phrases for manner.', 'Use fī + noun for time and place.', 'Put the noun after a preposition in the genitive.', 'Choose a natural chunk instead of translating word by word.'],
  routes: {
    core: ['I use quickly, slowly, carefully, clearly.', 'I say in the morning and at school.'],
    develop: ['I write -in / -i after every preposition.', 'I attach bi- but keep fī separate.'],
    stretch: ['I tell means (by bus) from manner (quickly).', 'I layer manner, place and time in one sentence.'],
  },
  terms: {
    items: [
      { ar: 'حَرْفُ الْجَرِّ', en: 'preposition', note: 'بِـ · فِي' },
      { ar: 'الْمَجْرُورُ', en: 'genitive noun after it', note: 'بِسُرْعَةٍ' },
      { ar: 'بِـ', en: 'with, by (attached)', tr: 'bi-', note: 'بِعِنَايَةٍ · بِالْحَافِلَةِ' },
      { ar: 'فِي', en: 'in, at (separate)', tr: 'fī', note: 'فِي الْمَدْرَسَةِ' },
      { ar: 'سُرْعَةٌ', en: 'speed (noun)', note: 'بِسُرْعَةٍ = quickly' },
      { ar: 'الْوَسِيلَةُ', en: 'means (how you travel)', note: 'بِالسَّيَّارَةِ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 1 · bi- + noun: expressing manner (website table)', title: 'Eight -ly chunks', ar: 'بِـ + اسْمٍ', ltr: true,
      cols: [{ label: 'Phrase', w: 3.0, size: 24 }, { label: 'Meaning', w: 2.8 }, { label: 'Natural model (website)', w: 6.53, size: 22 }],
      rows: [
        { core: true, cells: ['بِسُرْعَةٍ', 'quickly', 'أَكْمَلْتُ الْعَمَلَ بِسُرْعَةٍ.'] },
        { core: true, cells: ['بِبُطْءٍ', 'slowly', 'تَحَدَّثَ بِبُطْءٍ.'] },
        { core: true, cells: ['بِسُهُولَةٍ', 'easily', 'فَهِمْتُ الدَّرْسَ بِسُهُولَةٍ.'] },
        { core: true, cells: ['بِصُعُوبَةٍ', 'with difficulty', 'وَجَدْنَا الْمَكَانَ بِصُعُوبَةٍ.'] },
        { cells: ['بِهُدُوءٍ · بِوُضُوحٍ', 'calmly · clearly', 'أَجَابَتْ بِهُدُوءٍ وَبِوُضُوحٍ.'] },
        { cells: ['بِعِنَايَةٍ · بِأَمَانٍ', 'carefully · safely', 'قُدْ بِعِنَايَةٍ وَبِأَمَانٍ.'] },
      ],
      foot: 'Website: bi- means “with / by / in a manner of”; the noun after it is genitive — surʿatun → bi-surʿatin.',
      notes: 'PART 1 (4 min) — website table “bi- + noun: expressing manner”. Teach each chunk with a gesture; chant noun → phrase: سُرْعَةٌ → بِسُرْعَةٍ.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · use the NOUN, not the adjective (website warning) · Develop', title: 'Adjective → noun → phrase', ar: 'مِنَ الصِّفَةِ إِلَى الْعِبَارَةِ', ltr: true,
      cols: [{ label: 'Adjective', w: 3.0, size: 24 }, { label: 'Noun', w: 3.0, size: 24 }, { label: 'Phrase', w: 3.0, size: 24 }, { label: 'Meaning', w: 3.33 }],
      rows: [
        { core: true, cells: ['سَرِيعٌ', 'سُرْعَةٌ', 'بِسُرْعَةٍ', 'fast → quickly'] },
        { core: true, cells: ['سَهْلٌ', 'سُهُولَةٌ', 'بِسُهُولَةٍ', 'easy → easily'] },
        { core: true, cells: ['وَاضِحٌ', 'وُضُوحٌ', 'بِوُضُوحٍ', 'clear → clearly'] },
        { cells: ['هَادِئٌ', 'هُدُوءٌ', 'بِهُدُوءٍ', 'calm → calmly'] },
        { cells: ['آمِنٌ', 'أَمَانٌ', 'بِأَمَانٍ', 'safe → safely'] },
      ],
      foot: 'Website: never attach bi- to the adjective (bi-sarīʿin ✗). Learn the common noun-based chunk.',
      notes: 'PART 2 (3 min) — the website “transformation drill” words (سَرِيعٌ، سَهْلٌ، وَاضِحٌ، هَادِئٌ، آمِنٌ) as a teaching table.',
    },
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 3 · fī + noun, spelling and position (website) · Stretch', title: 'In, at — and where the phrase goes', ar: 'فِي + اسْمٍ وَالتَّرْتِيبُ',
      points: [
        'Fī + noun creates everyday place and time expressions (website).',
        'Spelling: fī stays SEPARATE; bi- ATTACHES — bi-surʿatin, bi-l-ḥāfila (website).',
        'A manner phrase usually follows the verb or its object (website).',
        'Time and place phrases can move to the front for emphasis (website).',
        'Means vs manner: by bus answers “how did you travel?”; quickly answers “in what way?”',
      ],
      examples: [
        { ar: 'فِي الْبَيْتِ · فِي الْخَارِجِ', en: 'at home · abroad', note: 'website · place' },
        { ar: 'فِي الصَّبَاحِ · فِي الشِّتَاءِ', en: 'in the morning · in winter', note: 'website · time' },
        { ar: 'قَرَأْتُ النَّصَّ بِعِنَايَةٍ.', en: 'I read the text carefully.', note: 'website · manner after object' },
        { ar: 'أَكْمَلْتُ الْوَاجِبَ بِسُرْعَةٍ فِي الْمَكْتَبَةِ أَمْسِ.', en: 'I finished the homework quickly in the library yesterday.', note: 'website · layering' },
      ],
      callout: { text: 'Website: use only as much detail as the message needs — manner, place and time can all be layered, but clarity comes first.' },
      notes: 'PART 3 (3 min) — website “fī + noun” and “Position and sentence rhythm”.',
    },
  ],
  quick: [
    W(/بِـ Check/, 0, { feedback: 'Bi- + genitive noun.' }),
    W(/بِـ Check/, 3, { feedback: 'Bi-hudūʾin describes the manner of answering.' }),
    W(/فِي Check/, 0, { feedback: 'Fī + a definite genitive noun.' }),
    W(/فِي Check/, 2, { feedback: 'In the evening is a time phrase.' }),
  ],
  quickNote: 'website bi- and fī checks.',
  ido: {
    title: 'Watch me add manner, place and time',
    steps: [
      { head: 'Verb + object', ar: 'أَكْمَلْتُ الْوَاجِبَ', think: 'What happened?' },
      { head: 'Manner', ar: 'بِسُرْعَةٍ', think: 'bi- + noun, -in.' },
      { head: 'Place', ar: 'فِي الْمَكْتَبَةِ', think: 'fī + noun, -i.' },
      { head: 'Time', ar: 'أَمْسِ', think: 'When?' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'MANNER (bi-)', e: 'PLACE / TIME (fī)' },
    model: 'أَكْمَلْتُ الْوَاجِبَ {k|بِسُرْعَةٍ} {e|فِي الْمَكْتَبَةِ} أَمْسِ، ثُمَّ رَجَعْتُ {k|بِالْحَافِلَةِ} وَوَصَلْتُ {k|بِأَمَانٍ}.',
    modelEn: 'I finished the homework quickly in the library yesterday, then I went back by bus and arrived safely.',
    notes: 'Website layering model plus a means phrase (بِالْحَافِلَةِ). Ask: “Is ‘by bus’ the same kind of information as ‘quickly’?” — means vs manner.',
  },
  models: [
    { ar: 'فَهِمْتُ الدَّرْسَ بِسُهُولَةٍ.', en: 'I understood the lesson easily.', tip: 'Website model.' },
    { ar: 'فِي الْمَسَاءِ أَدْرُسُ فِي غُرْفَتِي.', en: 'In the evening I study in my room.', tip: 'Website model: time + place.' },
    { ar: 'أَكْتُبُ إِجَابَاتِي بِوُضُوحٍ.', en: 'I write my answers clearly.', tip: 'Website model: manner.' },
    { ar: 'ذَهَبْتُ إِلَى الْمَدْرَسَةِ بِالْحَافِلَةِ.', en: 'I went to school by bus.', tip: 'Website reading: means.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · what does the phrase tell us?', title: 'Manner, place, time or means?', ar: 'كَيْفَ؟ أَيْنَ؟ مَتَى؟ بِمَاذَا؟',
      categories: ['Manner', 'Place', 'Time', 'Means'],
      items: [['بِعِنَايَةٍ', 0], ['فِي السُّوقِ', 1], ['فِي اللَّيْلِ', 2], ['بِالْقِطَارِ', 3], ['بِبُطْءٍ', 0], ['فِي الْخَارِجِ', 1], ['فِي الشِّتَاءِ', 2], ['بِالسَّيَّارَةِ', 3]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min) — website reading task “label each phrase as time, place, means or manner”. Students type 1–4.',
    },
  ],
  mistakes: [
    { wrong: 'كَتَبْتُ بِعِنَايَةٌ.', right: 'كَتَبْتُ بِعِنَايَةٍ.', why: 'The noun after bi- is genitive (website).' },
    { wrong: 'أَجَابَ بِسَرِيعٍ.', right: 'أَجَابَ بِسُرْعَةٍ.', why: 'Use the noun, not the adjective (website warning).' },
    { wrong: 'نَلْعَبُ فِي الْحَدِيقَةُ.', right: 'نَلْعَبُ فِي الْحَدِيقَةِ.', why: 'Genitive after fī.' },
  ],
  hints: ['Which ending after bi-?', 'Adjective or noun?', 'Which ending after fī?'],
  practice: [
    W(/Mastery/, 3, { feedback: 'The manner phrase is bi-wuḍūḥin.' }),
    W(/Mastery/, 4, { feedback: 'Fī introduces place.' }),
    W(/Mastery/, 6, { feedback: 'Genitive after bi-.' }),
    W(/Mastery/, 8),
  ],
  practiceLabel: 'website phrase mastery questions 4, 5, 7 and 9',
  read: {
    title: 'A busy school day', label: 'website reading text, extended by the teacher',
    text: 'فِي الصَّبَاحِ ذَهَبْتُ إِلَى الْمَدْرَسَةِ بِالْحَافِلَةِ. أَجَبْتُ عَنِ الْأَسْئِلَةِ بِعِنَايَةٍ، وَلَكِنِّي أَكْمَلْتُ التَّمْرِينَ الْأَخِيرَ بِصُعُوبَةٍ. فِي الِاسْتِرَاحَةِ أَكَلْتُ بِسُرْعَةٍ وَلَعِبْتُ فِي السَّاحَةِ. فِي الْمَسَاءِ رَجَعْتُ إِلَى الْبَيْتِ بِأَمَانٍ.',
    glossary: [['بِالْحَافِلَةِ', 'by bus'], ['أَجَبْتُ عَنْ', 'I answered'], ['التَّمْرِينَ الْأَخِيرَ', 'the last exercise'], ['الِاسْتِرَاحَةِ', 'the break'], ['السَّاحَةِ', 'the playground'], ['رَجَعْتُ', 'I returned']],
    task: 'Website: label each phrase as time, place, means or manner.',
    questions: [
      q('How did the writer travel to school?', ['by bus', 'by car', 'on foot'], 'بِالْحَافِلَةِ = means.'),
      q('How did the writer finish the last exercise?', ['with difficulty', 'easily', 'quickly'], 'بِصُعُوبَةٍ.'),
      q('Where did the writer play?', ['in the playground', 'at home', 'in the library'], 'فِي السَّاحَةِ.'),
      q('Which phrase is a time phrase?', ['فِي الْمَسَاءِ', 'بِأَمَانٍ', 'بِعِنَايَةٍ'], 'Fī + a time noun.'),
    ],
    qNote: 'The first two sentences are the website text; the rest is teacher-written. Questions teacher-written.',
  },
  speak: {
    title: 'Instruction challenge: how to do it', source: 'website instruction challenge',
    prompts: [
      { route: 'core', ar: 'كَيْفَ تَكْتُبُ وَاجِبَكَ؟' },
      { route: 'develop', ar: 'كَيْفَ تَسْتَعِدُّ لِلِاخْتِبَارِ؟ مَتَى؟ أَيْنَ؟' },
      { route: 'stretch', ar: 'اشْرَحْ لِصَدِيقٍ كَيْفَ يَقْطَعُ الشَّارِعَ بِأَمَانٍ.' },
    ],
    stems: [
      { route: 'core', ar: 'أَكْتُبُ وَاجِبِي ______ .' },
      { route: 'develop', ar: 'فِي ______ أَدْرُسُ فِي ______ ______ .' },
      { route: 'stretch', ar: 'انْظُرْ ______ ، ثُمَّ امْشِ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'كَيْفَ تُرَاجِعُ لِلِاخْتِبَارِ؟', en: 'How do you revise for the test?' },
      { who: 'B', ar: 'فِي الْمَسَاءِ أُرَاجِعُ فِي غُرْفَتِي بِهُدُوءٍ. أَقْرَأُ الْمُلَاحَظَاتِ بِعِنَايَةٍ، ثُمَّ أَكْتُبُ الْكَلِمَاتِ بِسُرْعَةٍ.', en: 'In the evening I revise in my room calmly. I read the notes carefully, then I write the words quickly.' },
    ],
    notes: 'Website: explain how to complete a school task using carefully, clearly, quickly and one time / place phrase. Listening cloze (website): partner omits each phrase; listener supplies it from the bank.',
  },
  write: {
    siteTask: 'Write 90–110 words explaining how you study, cook, travel, exercise or use technology, with at least six bi- manner phrases and four fī time / place phrases.',
    core: { amount: '6 sentences', task: 'Explain how you study using bi- phrases.', how: 'carefully, quickly, calmly …' },
    develop: { amount: '8 sentences', task: 'Add fī time and place phrases.', how: 'in the evening, in my room …' },
    stretch: { amount: '90–110 words', task: 'Website task: how I complete a task.', how: 'Include one means phrase and one layered sentence.' },
  },
  frames: {
    core: [
      { en: 'I read the instructions carefully.', ar: 'أَقْرَأُ التَّعْلِيمَاتِ ______ .' },
      { en: 'I write my answers clearly.', ar: 'أَكْتُبُ إِجَابَاتِي ______ .' },
      { en: 'I eat breakfast quickly.', ar: 'آكُلُ الْفَطُورَ ______ .' },
      { en: 'I go to school by …', ar: 'أَذْهَبُ إِلَى الْمَدْرَسَةِ ______ .' },
    ],
    develop: [
      { en: 'In the morning I …', ar: 'فِي الصَّبَاحِ ______ .' },
      { en: 'I study in …', ar: 'أَدْرُسُ فِي ______ .' },
      { en: 'I understood the lesson easily.', ar: 'فَهِمْتُ الدَّرْسَ ______ .' },
      { en: 'In winter we …', ar: 'فِي الشِّتَاءِ ______ .' },
    ],
    bank: ['بِسُرْعَةٍ', 'بِبُطْءٍ', 'بِسُهُولَةٍ', 'بِصُعُوبَةٍ', 'بِهُدُوءٍ', 'بِوُضُوحٍ', 'بِعِنَايَةٍ', 'بِأَمَانٍ', 'بِالْحَافِلَةِ', 'فِي الْبَيْتِ', 'فِي الْمَسَاءِ', 'فِي غُرْفَتِي'],
  },
  stretchTask: {
    task: 'Website writing task: 90–110 words on how you study, cook, travel, exercise or use technology.',
    checklist: ['Six bi- manner phrases with genitive nouns.', 'Four fī time or place phrases.', 'One means phrase (by bus / by car).', 'One layered sentence: manner + place + time.', 'No bi- attached to an adjective.'],
    phrases: [['بِعِنَايَةٍ', 'carefully'], ['بِوُضُوحٍ', 'clearly'], ['بِالسَّيَّارَةِ', 'by car'], ['فِي الْمَطْبَخِ', 'in the kitchen'], ['فِي نِهَايَةِ الْأُسْبُوعِ', 'at the weekend'], ['بِأَمَانٍ', 'safely']],
  },
  model: {
    text: 'أُحِبُّ الطَّبْخَ فِي نِهَايَةِ الْأُسْبُوعِ. فِي الصَّبَاحِ أَذْهَبُ إِلَى السُّوقِ بِالدَّرَّاجَةِ، وَأَخْتَارُ الْخُضَارَ بِعِنَايَةٍ. فِي الْمَطْبَخِ أَغْسِلُ يَدَيَّ جَيِّدًا، ثُمَّ أَقْطَعُ الْخُضَارَ بِبُطْءٍ وَبِأَمَانٍ. أَقْرَأُ الْوَصْفَةَ بِوُضُوحٍ لِأُخْتِي، وَهِيَ تُسَاعِدُنِي بِسُرْعَةٍ. فِي الْمَسَاءِ نَأْكُلُ مَعًا بِسَعَادَةٍ.',
    en: 'I love cooking at the weekend. In the morning I go to the market by bike, and I choose the vegetables carefully. In the kitchen I wash my hands well, then I cut the vegetables slowly and safely. I read the recipe clearly to my sister, and she helps me quickly. In the evening we eat together happily.',
    find: ['bi- manner', 'fī time', 'fī place', 'means'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'I used six bi- phrases.' },
    { route: 'core', text: 'Every noun after bi- ends in -in or -i.' },
    { route: 'develop', text: 'I used fī for time and place.' },
    { route: 'develop', text: 'Bi- is attached; fī is separate.' },
    { route: 'stretch', text: 'I used a means phrase and a layered sentence.' },
  ],
  exit: [
    W(/بِـ Check/, 4, { feedback: 'Bi-amānin is a natural manner phrase.' }),
    W(/فِي Check/, 3, { feedback: 'Fī + a genitive definite noun.' }),
    W(/Mastery/, 7, { feedback: 'The school is definite and genitive after fī.' }),
  ],
  mastery: false,
  prep: {
    words: [['عَادَةً', 'usually', '—'], ['أَوَّلًا', 'first', '—'], ['بَعْدَ ذَلِكَ', 'after that', '—'], ['أَخِيرًا', 'finally', '—'], ['فِي الْبِدَايَةِ', 'at the beginning', '—']],
    questionEn: 'Put these in order to tell a story: finally, first, after that. Which word starts the story?',
    questionAr: 'أَوَّلًا … ثُمَّ … ______',
    homework: {
      core: 'Learn the eight bi- chunks with their meanings.',
      develop: 'Write eight sentences: four bi- and four fī phrases.',
      stretch: 'Website writing task: how I complete a task.',
    },
    wordsSource: 'The five words prepare GM-ADV-04 (website Adverbs lesson 4: common adverbial phrases for fluency).',
  },
  remember: 'Remember: bi- + noun (genitive) = “-ly” · use the noun, not the adjective · fī + noun for time and place · bi- attaches, fī stays separate.',
});

module.exports = { meta, slides };
