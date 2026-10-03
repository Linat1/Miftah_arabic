'use strict';
/* GM-ADJ-02 · Adjective Agreement with Plurals — website: Mastery & Revision › Grammar › Adjectives › Lesson 2 (human plurals take plural
 * agreement that shows gender — طُلَّابٌ ذَكِيُّونَ · طَالِبَاتٌ مُجْتَهِدَاتٌ; non-human plurals (things, animals, abstract) take feminine
 * singular — كُتُبٌ جَدِيدَةٌ · كِلَابٌ صَغِيرَةٌ; dangerous misconception: طُلَّابٌ كَسُولَةٌ is wrong → طُلَّابٌ كُسَالَى; decision: human or
 * non-human first). The website Entry Check is the Do Now (feedback in English); its guided and mastery checks repeat the same items,
 * so quick check, practice and exit are teacher-written. The broken-plural adjective table (كِبَارٌ · صِغَارٌ · أَذْكِيَاءُ …) and the
 * mixed-group rule are teacher-added Stretch content built on the website’s كُسَالَى example. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-ADJ-02', fileTitle: 'Adjective_Agreement_with_Plurals', title: 'Adjective Agreement with Plurals', arabic: 'مُطَابَقَةُ الصِّفَةِ مَعَ الْجُمُوعِ',
  focus: 'First decide: people or not? People → plural adjective that shows gender (hard-working boys: -ūna; girls: -āt). Things and animals → feminine singular adjective. Never give people a feminine singular adjective.',
  icon: 'FaPeopleGroup',
});

const slides = G.gmLesson({
  code: 'GM-ADJ-02', site: 'grammar__04-adjectives__grammar-mastery-02-plural-agreement',
  support: `• Core: the decision tree — human or non-human first; then gender and number. Develop: plural adjectives for male and female groups; animals are non-human (الْكِلَابُ صَغِيرَةٌ). Stretch: broken-plural adjectives for people (كِبَارٌ · صِغَارٌ · طِوَالٌ · أَذْكِيَاءُ · كُسَالَى) and mixed groups (masculine plural).
• This consolidates GM-N-03 (‑ūna), GM-N-04 (‑āt) and GM-N-06 (non-human agreement). The NEW danger, flagged by the website: once students learn “plural → feminine singular”, they over-apply it to people (طُلَّابٌ كَسُولَةٌ ✗).
• Classroom routine: thumbs up = person, thumbs down = thing/animal — before every answer.`,
  teach: 'Human plurals; non-human plurals; the dangerous misconception.',
  wedo: 'Sort, transform, repair — people vs things.',
  next: { nextCode: 'GM-ADJ-03', nextTitle: 'Colour Adjectives', nextAr: 'أَلْوَانُ أَفْعَلَ وَفَعْلَاءَ' },
  doNow: {
    fb: { 0: 'Human masculine plural.', 1: 'Human feminine plural.', 2: 'Non-human plural → feminine singular.', 3: 'Animals are grammatically non-human.' },
    keyIdea: { text: 'Human or non-human FIRST. People → plural adjective (boys -ūna, girls -āt). Things and animals → feminine singular.', ar: 'الطُّلَّابُ {k|مُجْتَهِدُونَ} ‖ الْكُتُبُ {e|مُفِيدَةٌ}' },
    retrieves: 'The website Entry Check (all five questions) — it retrieves GM-N-06 and GM-ADJ-01.',
  },
  objectives: ['Decide whether a plural refers to people or not.', 'Use masculine and feminine plural adjectives for people.', 'Use feminine singular adjectives for things and animals.', 'Avoid feminine singular agreement with human plurals.'],
  routes: {
    core: ['I ask “people or not?” before choosing.', 'I write the students are hard-working for boys and girls.'],
    develop: ['I treat animals as non-human.', 'I use the right agreement in phrases and sentences.'],
    stretch: ['I use broken-plural adjectives for people.', 'I use masculine plural for mixed groups.'],
  },
  terms: {
    items: [
      { ar: 'جَمْعُ الْعَاقِلِ', en: 'human plural', note: 'طُلَّابٌ · طَالِبَاتٌ' },
      { ar: 'جَمْعُ غَيْرِ الْعَاقِلِ', en: 'non-human plural', note: 'كُتُبٌ · كِلَابٌ' },
      { ar: 'جَمْعٌ مُذَكَّرٌ', en: 'masculine plural', tr: '-ūna', note: 'مُجْتَهِدُونَ' },
      { ar: 'جَمْعٌ مُؤَنَّثٌ', en: 'feminine plural', tr: '-āt', note: 'مُجْتَهِدَاتٌ' },
      { ar: 'مُفْرَدٌ مُؤَنَّثٌ', en: 'feminine singular', note: 'مُفِيدَةٌ' },
      { ar: 'جَمْعُ تَكْسِيرٍ', en: 'broken plural (of an adjective)', note: 'كِبَارٌ · كُسَالَى' },
    ],
  },
  explain: [
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · step 1 · human plurals (website)', title: 'People: plural adjective that shows gender', ar: 'جَمْعُ الْعَاقِلِ',
      points: [
        'Human plurals take PLURAL agreement that reflects gender (website).',
        'Male group → masculine plural adjective, usually -ūna (-īna after a preposition or as object).',
        'Female group → feminine plural adjective, -āt.',
        'Mixed group of men and women → masculine plural.',
        'The adjective copies definiteness and case as well.',
      ],
      examples: [
        { ar: 'طُلَّابٌ ذَكِيُّونَ', en: 'clever (male) students', note: 'website' },
        { ar: 'مُعَلِّمُونَ مُخْلِصُونَ', en: 'devoted (male) teachers', note: 'website' },
        { ar: 'طَالِبَاتٌ مُجْتَهِدَاتٌ', en: 'hard-working (female) students', note: 'website' },
        { ar: 'رَأَيْتُ لَاعِبِينَ مَشْهُورِينَ.', en: 'I saw famous players.', note: 'object: -īna on both' },
      ],
      callout: { text: 'Website decision: human or non-human FIRST; then choose gender and number.' },
      notes: 'STEP 1 (3 min) — website “Human plurals”. Thumbs-up routine for every example: “People? Yes → plural.”',
    },
    {
      type: 'explain', min: 2, eyebrow: 'Grammar · step 2 · non-human plurals (website)', title: 'Things and animals: feminine singular', ar: 'جَمْعُ غَيْرِ الْعَاقِلِ',
      pointsHead: 'THE RULE',
      points: [
        'A plural of things, animals or abstract ideas is treated as feminine singular (website).',
        'It does not matter whether the plural is broken or sound -āt.',
        'Animals count as non-human — even pets you love!',
        'The same rule applies to “these”, “she” and the verb (GM-N-06).',
      ],
      examples: [
        { ar: 'كُتُبٌ جَدِيدَةٌ', en: 'new books', note: 'website' },
        { ar: 'مَدَارِسُ كَبِيرَةٌ', en: 'big schools', note: 'website' },
        { ar: 'حَقَائِبُ ثَقِيلَةٌ', en: 'heavy bags', note: 'website' },
        { ar: 'كِلَابٌ صَغِيرَةٌ', en: 'small dogs', note: 'website — animals' },
      ],
      notes: 'STEP 2 (2 min) — website “Non-human plurals”. Quick recall of GM-N-06: “two layers — plural noun, feminine singular agreement.”',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · step 3 · the dangerous misconception (website) · Stretch', title: 'People never take feminine singular', ar: 'خَطَأٌ خَطِيرٌ', ltr: true,
      cols: [{ label: 'Meaning', w: 3.4 }, { label: 'Wrong', w: 3.2, size: 22 }, { label: 'Right', w: 3.2, size: 24 }, { label: 'Note', w: 2.53 }],
      rows: [
        { core: true, cells: ['lazy (male) students', 'طُلَّابٌ كَسُولَةٌ', 'طُلَّابٌ كُسَالَى', 'website example'] },
        { core: true, cells: ['big (grown-up) men', 'رِجَالٌ كَبِيرَةٌ', 'رِجَالٌ كِبَارٌ', 'broken plural'] },
        { cells: ['small children', 'أَطْفَالٌ صَغِيرَةٌ', 'أَطْفَالٌ صِغَارٌ', 'broken plural'] },
        { cells: ['clever students', 'طُلَّابٌ ذَكِيَّةٌ', 'طُلَّابٌ أَذْكِيَاءُ', 'or ذَكِيُّونَ (website)'] },
        { cells: ['kind neighbours', 'جِيرَانٌ لَطِيفَةٌ', 'جِيرَانٌ لُطَفَاءُ', 'broken plural'] },
      ],
      foot: 'Many common adjectives have a broken plural used for people. If you are unsure, the sound plural (-ūna / -āt) is usually understood.',
      notes: 'STEP 3 (3 min) — website “Correcting a dangerous misconception”, with teacher-added rows. Core: learn rows 1–2. Stretch: learn the broken plurals as vocabulary families (كَبِيرٌ · كِبَارٌ).',
    },
  ],
  quick: [
    q('Complete: الْمُعَلِّمَاتُ ______ .', ['لَطِيفَاتٌ', 'لَطِيفَةٌ', 'لَطِيفُونَ'], 'Women → feminine plural.'),
    q('Complete: الْقِطَطُ ______ .', ['جَمِيلَةٌ', 'جَمِيلُونَ', 'جَمِيلَاتٌ'], 'Animals → feminine singular.'),
    q('A class of boys AND girls is …', ['مُجْتَهِدُونَ', 'مُجْتَهِدَاتٌ', 'مُجْتَهِدَةٌ'], 'Mixed group → masculine plural.'),
    q('Which is WRONG?', ['الرِّجَالُ قَوِيَّةٌ.', 'الرِّجَالُ أَقْوِيَاءُ.', 'الْجِبَالُ عَالِيَةٌ.'], 'People never take feminine singular.'),
  ],
  quickNote: 'teacher-written hinge questions on the website’s three steps.',
  ido: {
    title: 'Watch me decide: people or not?',
    steps: [
      { head: 'Noun', ar: 'الْمُهَنْدِسُونَ', think: 'Plural. People? Yes.' },
      { head: 'Gender', ar: 'الْمُهَنْدِسُونَ', think: 'Masculine → -ūna.' },
      { head: 'Adjective', ar: 'الْمُهَنْدِسُونَ مَاهِرُونَ', think: 'Plural, masculine.' },
      { head: 'Contrast', ar: 'الْآلَاتُ حَدِيثَةٌ', think: 'Machines: things → fem. sing.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'PEOPLE: PLURAL', e: 'THINGS: FEM. SING.' },
    model: 'فِي الْمَصْنَعِ مُهَنْدِسُونَ {k|مَاهِرُونَ} وَمُهَنْدِسَاتٌ {k|نَشِيطَاتٌ}، وَالْآلَاتُ {e|حَدِيثَةٌ} وَ{e|سَرِيعَةٌ}.',
    modelEn: 'In the factory there are skilful (male) engineers and active (female) engineers, and the machines are modern and fast.',
    notes: 'Narrate the thumbs routine aloud each time. Point out that مُهَنْدِسَاتٌ نَشِيطَاتٌ and الْآلَاتُ حَدِيثَةٌ both end in -āt nouns — but the agreement is different, because one is people.',
  },
  models: [
    { ar: 'الطُّلَّابُ مُجْتَهِدُونَ.', en: 'The (male) students are hard-working.', tip: 'Website model bank.' },
    { ar: 'الطَّالِبَاتُ مُجْتَهِدَاتٌ.', en: 'The (female) students are hard-working.', tip: 'Website model bank.' },
    { ar: 'السَّيَّارَاتُ سَرِيعَةٌ.', en: 'The cars are fast.', tip: 'Website model bank.' },
    { ar: 'أَوْلَادُ عَمِّي صِغَارٌ، وَقِطَطُهُمْ صَغِيرَةٌ أَيْضًا.', en: 'My cousins are little, and their cats are small too.', tip: 'Same adjective, two agreements.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · people, or things and animals?', title: 'Which agreement?', ar: 'صَنِّفْ',
      categories: ['Plural adjective (people)', 'Feminine singular (things / animals)'],
      items: [['الْأَطِبَّاءُ', 0], ['الْكِلَابُ', 1], ['الْمُمَرِّضَاتُ', 0], ['الْمَلَابِسُ', 1], ['اللَّاعِبُونَ', 0], ['الطُّيُورُ', 1], ['الْجِيرَانُ', 0], ['الْأَفْكَارُ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type P or T. Traps: birds and dogs are animals (non-human); ideas are abstract (non-human).',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'We do · transformation drill (website) · say it aloud', title: 'Make it plural — choose the agreement', ar: 'اجْمَعْ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Singular', w: 3.8, size: 24 }, { label: 'People?', w: 2.2 }, { label: 'Plural', w: 6.33, size: 24 }],
      rows: [
        { core: true, cells: ['الطَّبِيبُ مَشْغُولٌ.', 'yes (m.)', 'الْأَطِبَّاءُ مَشْغُولُونَ.'] },
        { core: true, cells: ['الْمُمَرِّضَةُ نَشِيطَةٌ.', 'yes (f.)', 'الْمُمَرِّضَاتُ نَشِيطَاتٌ.'] },
        { core: true, cells: ['الْقَمِيصُ نَظِيفٌ.', 'no', 'الْقُمْصَانُ نَظِيفَةٌ.'] },
        { cells: ['الطَّائِرُ جَمِيلٌ.', 'no (animal)', 'الطُّيُورُ جَمِيلَةٌ.'] },
        { cells: ['الطِّفْلُ صَغِيرٌ.', 'yes', 'الْأَطْفَالُ صِغَارٌ.'] },
      ],
      foot: 'Website drill: change the noun’s number, then change every adjective feature it controls — and say WHY in grammar words.',
      notes: 'WE DO (2 min). The last row uses a broken adjective plural (Stretch); accept صَغِيرُونَ from Core, then model صِغَارٌ.',
    },
  ],
  mistakes: [
    { wrong: 'الطُّلَّابُ كَسُولَةٌ.', right: 'الطُّلَّابُ كُسَالَى.', why: 'People never take feminine singular (website).' },
    { wrong: 'الْكِلَابُ صَغِيرُونَ.', right: 'الْكِلَابُ صَغِيرَةٌ.', why: 'Animals are non-human.' },
    { wrong: 'الْمُعَلِّمَاتُ لَطِيفُونَ.', right: 'الْمُعَلِّمَاتُ لَطِيفَاتٌ.', why: 'Women → feminine plural.' },
  ],
  hints: ['People or things?', 'Are dogs people?', 'Men or women?'],
  practice: [
    q('Choose “The players are famous.”', ['اللَّاعِبُونَ مَشْهُورُونَ.', 'اللَّاعِبُونَ مَشْهُورَةٌ.', 'اللَّاعِبُونَ مَشْهُورٌ.'], 'Human masculine plural.'),
    q('Choose “The clothes are new.”', ['الْمَلَابِسُ جَدِيدَةٌ.', 'الْمَلَابِسُ جُدُدٌ.', 'الْمَلَابِسُ جَدِيدُونَ.'], 'Things → feminine singular.'),
    q('Choose “The nurses are tired.”', ['الْمُمَرِّضَاتُ مُتْعَبَاتٌ.', 'الْمُمَرِّضَاتُ مُتْعَبَةٌ.', 'الْمُمَرِّضَاتُ مُتْعَبُونَ.'], 'Women → feminine plural.'),
    q('Choose “I visited kind neighbours.”', ['زُرْتُ جِيرَانًا لُطَفَاءَ.', 'زُرْتُ جِيرَانًا لَطِيفَةً.', 'زُرْتُ جِيرَانٌ لُطَفَاءُ.'], 'People: broken-plural adjective; object case.'),
  ],
  practiceLabel: 'teacher-written practice on the website rules',
  read: {
    title: 'My city and its people', label: 'website reading text, extended by the teacher',
    text: 'فِي مَدِينَتِي أَمَاكِنُ جَمِيلَةٌ وَشَوَارِعُ وَاسِعَةٌ. هَذِهِ الْمَدْرَسَةُ الْجَدِيدَةُ قَرِيبَةٌ، وَذَلِكَ الْمَتْحَفُ الْقَدِيمُ مُثِيرٌ لِلِاهْتِمَامِ. النَّاسُ فِي مَدِينَتِي لُطَفَاءُ، وَالْمُعَلِّمُونَ مُخْلِصُونَ. فِي الْحَدِيقَةِ طُيُورٌ مُلَوَّنَةٌ وَأَطْفَالٌ سُعَدَاءُ.',
    glossary: [['أَمَاكِنُ', 'places'], ['شَوَارِعُ', 'streets'], ['وَاسِعَةٌ', 'wide'], ['مُثِيرٌ لِلِاهْتِمَامِ', 'interesting'], ['النَّاسُ', 'people'], ['مُخْلِصُونَ', 'devoted'], ['مُلَوَّنَةٌ', 'colourful'], ['سُعَدَاءُ', 'happy (pl.)']],
    task: 'Website: underline each adjective, draw an arrow to its noun, and label the agreement (people / things).',
    questions: [
      q('Why is the adjective for streets feminine singular?', ['Streets are things.', 'Streets are women.', 'It is a mistake.'], 'Non-human plural.'),
      q('Why is it لُطَفَاءُ (plural)?', ['It describes people.', 'It describes places.', 'It describes birds.'], 'Human → plural.'),
      q('Why is the adjective for birds feminine singular?', ['Birds are animals — non-human.', 'Birds are feminine people.', 'It is singular.'], 'Animals are non-human.'),
      q('What kind of plural is سُعَدَاءُ?', ['a broken plural for people', 'a sound feminine plural', 'a feminine singular'], 'Stretch: broken adjective plural.'),
    ],
    qNote: 'The first two sentences are the website text; the rest is teacher-written. Questions teacher-written.',
  },
  speak: {
    title: 'Speaking: people and things in my school', source: 'website speaking task (45–60 seconds)',
    prompts: [
      { route: 'core', ar: 'صِفِ الْمُعَلِّمِينَ وَالْكُتُبَ فِي مَدْرَسَتِكَ.' },
      { route: 'develop', ar: 'صِفْ أَصْدِقَاءَكَ وَحَيَوَانَاتِهِمْ.' },
      { route: 'stretch', ar: 'صِفْ أُسْرَتَكَ الْكَبِيرَةَ: الْكِبَارُ وَالصِّغَارُ.' },
    ],
    stems: [
      { route: 'core', ar: 'الْمُعَلِّمُونَ ______ ، وَالْكُتُبُ ______ .' },
      { route: 'develop', ar: 'أَصْدِقَائِي ______ ، وَقِطَطُهُمْ ______ .' },
      { route: 'stretch', ar: 'الْكِبَارُ فِي أُسْرَتِي ______ ، وَالْأَطْفَالُ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'كَيْفَ الطُّلَّابُ فِي صَفِّكَ؟', en: 'What are the students in your class like?' },
      { who: 'B', ar: 'الطُّلَّابُ أَذْكِيَاءُ وَمَرِحُونَ، لَكِنَّ الْكُتُبَ ثَقِيلَةٌ جِدًّا!', en: 'The students are clever and cheerful, but the books are very heavy!' },
    ],
    notes: 'Website: 45–60 seconds, six accurate adjective structures. Editing clinic (website): pairs write four deliberately wrong plural phrases and swap to correct them.',
  },
  write: {
    siteTask: 'Write 90–120 words describing a person, place, object or experience, with at least eight target adjective structures, underlined.',
    core: { amount: '6 sentences', task: 'Three sentences about groups of people, three about things.', how: 'Thumbs up / down before every adjective.' },
    develop: { amount: '8 sentences', task: 'Add female groups and animals.', how: 'Women: -āt · animals: feminine singular.' },
    stretch: { amount: '90–120 words', task: 'Website task with two broken-plural adjectives for people.', how: 'kibār · ṣighār · luṭafāʾ · adhkiyāʾ.' },
  },
  frames: {
    core: [
      { en: 'The teachers (m.) are …', ar: 'الْمُعَلِّمُونَ ______ .' },
      { en: 'The teachers (f.) are …', ar: 'الْمُعَلِّمَاتُ ______ .' },
      { en: 'The books are …', ar: 'الْكُتُبُ ______ .' },
      { en: 'The classrooms are …', ar: 'الْفُصُولُ ______ .' },
    ],
    develop: [
      { en: 'My friends are …', ar: 'أَصْدِقَائِي ______ .' },
      { en: 'The cats are …', ar: 'الْقِطَطُ ______ .' },
      { en: 'I like … players.', ar: 'أُحِبُّ اللَّاعِبِينَ ______ .' },
      { en: 'The children are …', ar: 'الْأَطْفَالُ ______ .' },
    ],
    bank: ['مُجْتَهِدُونَ', 'مُجْتَهِدَاتٌ', 'لَطِيفُونَ', 'لَطِيفَاتٌ', 'نَشِيطُونَ', 'مَشْهُورِينَ', 'كِبَارٌ', 'صِغَارٌ', 'لُطَفَاءُ', 'جَدِيدَةٌ', 'ثَقِيلَةٌ', 'وَاسِعَةٌ', 'جَمِيلَةٌ'],
  },
  stretchTask: {
    task: 'Website extended writing workshop: 90–120 words describing people and places, with at least eight target adjective structures.',
    checklist: ['Two male-group plurals with -ūna / -īna adjectives.', 'Two female-group plurals with -āt adjectives.', 'Two thing plurals and one animal plural with feminine singular.', 'Two broken-plural adjectives for people.', 'No feminine singular adjective after a human plural.'],
    phrases: [['الْمُعَلِّمُونَ مُخْلِصُونَ', 'the teachers are devoted'], ['الطَّالِبَاتُ مُجْتَهِدَاتٌ', 'the students (f.) are hard-working'], ['الْكُتُبُ مُفِيدَةٌ', 'the books are useful'], ['طُيُورٌ مُلَوَّنَةٌ', 'colourful birds'], ['أَطْفَالٌ صِغَارٌ', 'small children'], ['جِيرَانٌ لُطَفَاءُ', 'kind neighbours']],
  },
  model: {
    text: 'مَدْرَسَتِي كَبِيرَةٌ وَجَمِيلَةٌ. الْمُعَلِّمُونَ مُخْلِصُونَ، وَالْمُعَلِّمَاتُ لَطِيفَاتٌ. الطُّلَّابُ أَذْكِيَاءُ، لَكِنَّ بَعْضَهُمْ كُسَالَى! الْفُصُولُ وَاسِعَةٌ، وَالْكُتُبُ جَدِيدَةٌ وَمُفِيدَةٌ. فِي حَدِيقَةِ الْمَدْرَسَةِ أَشْجَارٌ عَالِيَةٌ وَطُيُورٌ مُلَوَّنَةٌ. أُحِبُّ أَصْدِقَائِي لِأَنَّهُمْ مَرِحُونَ.',
    en: 'My school is big and beautiful. The (male) teachers are devoted, and the (female) teachers are kind. The students are clever, but some of them are lazy! The classrooms are spacious, and the books are new and useful. In the school garden there are tall trees and colourful birds. I love my friends because they are cheerful.',
    find: ['male people', 'female people', 'things: fem. sing.', 'animals'],
    source: 'teacher model on the website writing workshop',
  },
  selfCheck: [
    { route: 'core', text: 'I decided “people or not?” for every plural.' },
    { route: 'core', text: 'Things have feminine singular adjectives.' },
    { route: 'develop', text: 'Women have -āt adjectives; men have -ūna.' },
    { route: 'develop', text: 'Animals have feminine singular adjectives.' },
    { route: 'stretch', text: 'I used two broken-plural adjectives for people.' },
  ],
  exit: [
    q('Complete: الْأَطِبَّاءُ ______ .', ['مَشْغُولُونَ', 'مَشْغُولَةٌ', 'مَشْغُولَاتٌ'], 'Men → masculine plural.'),
    q('Complete: الْكِلَابُ ______ .', ['كَبِيرَةٌ', 'كِبَارٌ', 'كَبِيرُونَ'], 'Animals → feminine singular.'),
    q('Complete: الْبَنَاتُ ______ .', ['سَعِيدَاتٌ', 'سَعِيدَةٌ', 'سَعِيدُونَ'], 'Girls → feminine plural.'),
  ],
  mastery: false,
  prep: {
    words: [['أَحْمَرُ', 'red (m.)', 'f. حَمْرَاءُ'], ['أَزْرَقُ', 'blue (m.)', 'f. زَرْقَاءُ'], ['أَخْضَرُ', 'green (m.)', 'f. خَضْرَاءُ'], ['أَبْيَضُ', 'white (m.)', 'f. بَيْضَاءُ'], ['أَسْوَدُ', 'black (m.)', 'f. سَوْدَاءُ']],
    questionEn: 'Look at the pairs. What pattern do the feminine colour words follow?',
    questionAr: 'أَحْمَرُ · حَمْرَاءُ — أَصْفَرُ · ______',
    homework: {
      core: 'Write ten plural phrases: five people, five things.',
      develop: 'Write eight sentences including women and animals.',
      stretch: 'Website writing workshop with broken-plural adjectives.',
    },
    wordsSource: 'The five words prepare GM-ADJ-03 (website Adjectives lesson 3: colours).',
  },
  remember: 'Remember: people or not? · people → plural adjective (men -ūna, women -āt, mixed masculine) · things and animals → feminine singular · never feminine singular for people.',
});

module.exports = { meta, slides };
