'use strict';
/* GM-N-05 · Broken Plurals — website: Mastery & Revision › Grammar › Nouns › Lesson 5 (the plural is made by reshaping the inside of the
 * word, not by one fixed ending; pattern table كِتَابٌ/كُتُبٌ (فُعُل) · قَلَمٌ/أَقْلَامٌ (أَفْعَال) · مَدْرَسَةٌ/مَدَارِسُ (مَفَاعِل) · حَقِيبَةٌ/حَقَائِبُ
 * (فَعَائِل) · رَجُلٌ/رِجَالٌ (فِعَال) · طَالِبٌ/طُلَّابٌ (فُعَّال); “patterns help recognition, not prediction”; human broken plural → plural
 * agreement, non-human → feminine singular). Entry check, guided mini-check and mastery check are the website’s; the extra families,
 * the no-tanwīn note on مَفَاعِل / فَعَائِل plurals, sorter, repair, reading questions, frames and model are teacher-made. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-N-05', fileTitle: 'Broken_Plurals', title: 'Broken Plurals', arabic: 'جَمْعُ التَّكْسِيرِ',
  focus: 'Most everyday Arabic nouns make their plural by reshaping the inside of the word (book → books, pen → pens, man → men), not by adding an ending. Learn each noun as a family: singular, plural and one example sentence.',
  icon: 'FaBookOpen',
});

const slides = G.gmLesson({
  code: 'GM-N-05', site: 'grammar__03-nouns__grammar-mastery-05-broken-plurals',
  support: `• Core: recognise 8–10 high-frequency families (كِتَابٌ كُتُبٌ · قَلَمٌ أَقْلَامٌ · وَلَدٌ أَوْلَادٌ · بَيْتٌ بُيُوتٌ · رَجُلٌ رِجَالٌ · طَالِبٌ طُلَّابٌ · مَدْرَسَةٌ مَدَارِسُ). Develop: agreement — people plural adjective, things feminine singular. Stretch: name the pattern (أَفْعَال · فُعُول · مَفَاعِل …) and notice that مَدَارِسُ / حَقَائِبُ take no tanwīn.
• “Broken” does NOT mean wrong — the singular is “broken open” and rebuilt. Students often think it is an error form; correct this early (website entry check question 6).
• Qur’an bridge: كُتُب (وَكُتُبِهِ وَرُسُلِهِ) · أَنْهَار · رِجَال · قُلُوب — all broken plurals students already recite.`,
  teach: 'What “broken” means; six pattern families; agreement.',
  wedo: 'Match families, sort human / non-human, repair.',
  next: { nextCode: 'GM-N-06', nextTitle: 'Non-Human Plural Agreement', nextAr: 'جَمْعُ غَيْرِ الْعَاقِلِ' },
  doNow: {
    keyIdea: { text: 'A broken plural changes the inside of the word. There is no single ending — learn singular and plural together.', ar: '{k|كِتَابٌ} · {e|كُتُبٌ} ‖ {k|قَلَمٌ} · {e|أَقْلَامٌ}' },
    retrieves: 'The website Entry Check (questions 1–5) — it uses the five prepared words from GM-N-04.',
  },
  objectives: ['Explain what a broken plural is.', 'Recognise six common broken plural patterns.', 'Learn nouns as singular-plural families.', 'Give people a plural adjective and things a feminine singular adjective.'],
  routes: {
    core: ['I know eight singular-plural families by heart.', 'I know “broken” means reshaped, not wrong.'],
    develop: ['I describe students with a plural adjective.', 'I describe books with a feminine singular adjective.'],
    stretch: ['I can name the pattern of a plural.', 'I know some patterns take no tanwīn.'],
  },
  terms: {
    items: [
      { ar: 'جَمْعُ التَّكْسِيرِ', en: 'broken plural', note: 'the inside of the word changes' },
      { ar: 'مُفْرَدٌ', en: 'singular', note: 'كِتَابٌ' },
      { ar: 'جَمْعٌ', en: 'plural', note: 'كُتُبٌ' },
      { ar: 'وَزْنٌ', en: 'pattern (shape)', tr: 'wazn', note: 'أَفْعَالٌ' },
      { ar: 'عَاقِلٌ', en: 'human', note: 'طُلَّابٌ · رِجَالٌ' },
      { ar: 'غَيْرُ عَاقِلٍ', en: 'non-human', note: 'كُتُبٌ · حَقَائِبُ' },
    ],
  },
  explain: [
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 1 · what “broken” means (website section)', title: 'The word is reshaped from the inside', ar: 'مَا مَعْنَى «التَّكْسِيرِ»؟',
      points: [
        'The plural is made by changing vowels, adding or removing letters, or reshaping the pattern (website definition).',
        'There is no single fixed ending — compare the sound plurals of GM-N-03 and GM-N-04.',
        '“Broken” does NOT mean incorrect: the singular is broken open and rebuilt.',
        'The three root letters stay in the same order — only the shape around them changes.',
        'It is the MOST common plural for everyday nouns, for people and for things.',
      ],
      examples: [
        { ar: 'كِتَابٌ · كُتُبٌ', en: 'book · books', note: 'root k-t-b' },
        { ar: 'قَلَمٌ · أَقْلَامٌ', en: 'pen · pens', note: 'a hamza is added' },
        { ar: 'وَلَدٌ · أَوْلَادٌ', en: 'boy · boys' },
        { ar: 'بَيْتٌ · بُيُوتٌ', en: 'house · houses' },
      ],
      callout: { kind: 'warn', head: 'WEBSITE WARNING', text: 'Patterns help recognition, not prediction in every case. Store each new noun as a family: singular, plural and an example sentence.' },
      notes: 'PART 1 (3 min) — website section “What broken means”. Write كِتَابٌ / كُتُبٌ and colour k-t-b in both: “the root is still there — only the vowels moved.”',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 2 · six pattern families (website table)', title: 'Common broken plural patterns', ar: 'أَوْزَانٌ شَائِعَةٌ', ltr: true,
      cols: [{ label: 'Meaning', w: 2.6 }, { label: 'Singular', w: 2.6, size: 24 }, { label: 'Plural', w: 2.6, size: 24 }, { label: 'Pattern', w: 2.0, size: 22 }, { label: 'More like it', w: 2.53, size: 18 }],
      rows: [
        { core: true, cells: ['book(s)', 'كِتَابٌ', 'كُتُبٌ', 'فُعُلٌ', 'مَدِينَةٌ مُدُنٌ'] },
        { core: true, cells: ['pen(s)', 'قَلَمٌ', 'أَقْلَامٌ', 'أَفْعَالٌ', 'وَلَدٌ أَوْلَادٌ'] },
        { core: true, cells: ['man / men', 'رَجُلٌ', 'رِجَالٌ', 'فِعَالٌ', 'جَبَلٌ جِبَالٌ'] },
        { core: true, cells: ['student(s)', 'طَالِبٌ', 'طُلَّابٌ', 'فُعَّالٌ', 'كَاتِبٌ كُتَّابٌ'] },
        { cells: ['school(s)', 'مَدْرَسَةٌ', 'مَدَارِسُ', 'مَفَاعِلُ', 'مَسْجِدٌ مَسَاجِدُ'] },
        { cells: ['bag(s)', 'حَقِيبَةٌ', 'حَقَائِبُ', 'فَعَائِلُ', 'حَدِيقَةٌ حَدَائِقُ'] },
      ],
      foot: 'Bonus pattern: house → houses and heart → hearts follow fuʿūl. Stretch: the last two patterns never take tanwīn (no -un).',
      notes: 'PART 2 (4 min) — website “Useful pattern clue” table, with a teacher-added column of words that share each pattern. Core: learn the first four rows. Stretch: مَدَارِسُ / حَقَائِبُ are diptotes — single ḍamma, no tanwīn.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 3 · broken plurals in sentences (website section) · Develop', title: 'People or things? The adjective tells you', ar: 'الْمُطَابَقَةُ', ltr: true,
      cols: [{ label: 'Meaning', w: 3.6 }, { label: 'Arabic (website)', w: 4.8, size: 24 }, { label: 'Agreement', w: 3.93 }],
      rows: [
        { core: true, cells: ['The students are hard-working.', 'الطُّلَّابُ مُجْتَهِدُونَ.', 'people → PLURAL adjective'] },
        { core: true, cells: ['The men are present.', 'الرِّجَالُ حَاضِرُونَ.', 'people → plural adjective'] },
        { core: true, cells: ['The books are useful.', 'الْكُتُبُ مُفِيدَةٌ.', 'things → feminine SINGULAR'] },
        { core: true, cells: ['The bags are heavy.', 'الْحَقَائِبُ ثَقِيلَةٌ.', 'things → feminine singular'] },
      ],
      foot: 'The plural looks the same kind for both — the MEANING (people or things) decides the adjective. GM-N-06 develops the non-human rule fully.',
      notes: 'PART 3 (2 min) — website section “Use broken plurals in sentences”.',
    },
  ],
  quickQuiz: /Guided/i, quickPick: [0, 1, 2, 3], quickNote: 'website guided mini-check, questions 1–4.',
  ido: {
    title: 'Watch me learn a word as a family',
    steps: [
      { head: 'Singular', ar: 'قَلَمٌ', think: 'pen — root q-l-m.' },
      { head: 'Plural', ar: 'أَقْلَامٌ', think: 'Pattern afʿāl.' },
      { head: 'People or thing?', ar: 'أَقْلَامٌ', think: 'A thing.' },
      { head: 'Sentence', ar: 'الْأَقْلَامُ جَدِيدَةٌ', think: 'Thing → feminine singular.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'SINGULAR', e: 'BROKEN PLURAL' },
    model: 'عِنْدِي {k|قَلَمٌ} وَاحِدٌ، وَعِنْدَ أَخِي {e|أَقْلَامٌ} كَثِيرَةٌ. فِي الصَّفِّ {e|طُلَّابٌ} مُجْتَهِدُونَ.',
    modelEn: 'I have one pen, and my brother has many pens. In the class there are hard-working students.',
    notes: 'Model the vocabulary-family habit: say “qalam — aqlām — al-aqlāmu jadīda”. Then contrast: طُلَّابٌ مُجْتَهِدُونَ (people → plural adjective).',
  },
  models: [
    { ar: 'الْكُتُبُ فِي الْمَكْتَبَةِ مُفِيدَةٌ.', en: 'The books in the library are useful.', tip: 'Website sentence: things → feminine singular.' },
    { ar: 'الطُّلَّابُ مُجْتَهِدُونَ.', en: 'The students are hard-working.', tip: 'Website sentence: people → plural.' },
    { ar: 'فِي مَدِينَتِنَا مَسَاجِدُ كَبِيرَةٌ.', en: 'In our city there are big mosques.', tip: 'No tanwīn on this plural.' },
    { ar: 'لَعِبَ الْأَوْلَادُ فِي الْحَدَائِقِ.', en: 'The boys played in the gardens.', tip: 'Two broken plurals in one sentence.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · people or things?', title: 'Human or non-human plural?', ar: 'عَاقِلٌ أَمْ غَيْرُ عَاقِلٍ؟',
      categories: ['People (plural adjective)', 'Things (feminine singular adjective)'],
      items: [['طُلَّابٌ', 0], ['كُتُبٌ', 1], ['رِجَالٌ', 0], ['أَقْلَامٌ', 1], ['أَوْلَادٌ', 0], ['بُيُوتٌ', 1], ['كُتَّابٌ', 0], ['حَقَائِبُ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type P or T. Trap: كُتُبٌ (books) vs كُتَّابٌ (writers) — same root, different pattern, different meaning!',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'We do · complete the family · say it aloud', title: 'Singular, plural, sentence', ar: 'أَكْمِلِ الْعَائِلَةَ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Meaning', w: 2.6 }, { label: 'Singular', w: 2.6, size: 24 }, { label: 'Plural', w: 2.6, size: 24 }, { label: 'Sentence', w: 4.53, size: 22 }],
      rows: [
        { core: true, cells: ['house', 'بَيْتٌ', 'بُيُوتٌ', 'الْبُيُوتُ قَدِيمَةٌ.'] },
        { core: true, cells: ['boy', 'وَلَدٌ', 'أَوْلَادٌ', 'الْأَوْلَادُ سُعَدَاءُ.'] },
        { core: true, cells: ['city', 'مَدِينَةٌ', 'مُدُنٌ', 'الْمُدُنُ كَبِيرَةٌ.'] },
        { cells: ['mosque', 'مَسْجِدٌ', 'مَسَاجِدُ', 'الْمَسَاجِدُ جَمِيلَةٌ.'] },
        { cells: ['mountain', 'جَبَلٌ', 'جِبَالٌ', 'الْجِبَالُ عَالِيَةٌ.'] },
      ],
      foot: 'Cover the plural column and test a partner: one says the singular, the other the plural, then the sentence.',
      notes: 'WE DO (2 min) — reveal the plural column one row at a time. Point to the adjectives: boys → plural (happy, suʿadāʾ); houses, cities, mosques, mountains → feminine singular.',
    },
  ],
  mistakes: [
    { wrong: 'كِتَابَاتٌ', right: 'كُتُبٌ', why: 'Book has a broken plural.' },
    { wrong: 'الْكُتُبُ مُفِيدُونَ.', right: 'الْكُتُبُ مُفِيدَةٌ.', why: 'Things → feminine singular.' },
    { wrong: 'الطُّلَّابُ مُجْتَهِدٌ.', right: 'الطُّلَّابُ مُجْتَهِدُونَ.', why: 'People → plural adjective.' },
  ],
  hints: ['Is this plural regular?', 'People or things?', 'Singular or plural adjective?'],
  practiceQuiz: /Mastery/i, practicePick: [4, 5, 6, 7], practiceLabel: 'website mastery check questions 5–8',
  read: {
    title: 'Our school library', label: 'website read-and-notice text, extended by the teacher',
    text: 'فِي مَدْرَسَتِنَا طَالِبَانِ جَدِيدَانِ وَمُعَلِّمَاتٌ خَبِيرَاتٌ. الْفُصُولُ وَاسِعَةٌ، وَمَكْتَبُ مُدِيرِ الْمَدْرَسَةِ قَرِيبٌ مِنَ الْمَدْخَلِ. فِي الْمَكْتَبَةِ كُتُبٌ كَثِيرَةٌ وَأَقْلَامٌ مُلَوَّنَةٌ. يَقْرَأُ الطُّلَّابُ هُنَاكَ، وَهُمْ هَادِئُونَ.',
    glossary: [['الْفُصُولُ', 'the classrooms'], ['وَاسِعَةٌ', 'spacious'], ['مَكْتَبُ', 'office of'], ['الْمَدْخَلِ', 'the entrance'], ['مُلَوَّنَةٌ', 'coloured'], ['هَادِئُونَ', 'quiet (m. pl.)']],
    task: 'Website: underline every plural and decide — broken or sound?',
    questions: [
      q('What kind of plural is الْفُصُولُ?', ['broken', 'sound masculine', 'sound feminine'], 'Singular فَصْلٌ, pattern fuʿūl.'),
      q('Why is the adjective وَاسِعَةٌ feminine singular?', ['Classrooms are things.', 'Classrooms are women.', 'It is a mistake.'], 'Non-human plural.'),
      q('Why is it هَادِئُونَ (plural)?', ['It describes students — people.', 'It describes books.', 'It is dual.'], 'Human plural → plural adjective.'),
      q('Which word is a SOUND plural?', ['مُعَلِّمَاتٌ', 'كُتُبٌ', 'أَقْلَامٌ'], 'It ends in -āt.'),
    ],
    qNote: 'The first two sentences are the website text; the rest is teacher-written to practise broken plurals. Questions teacher-written.',
  },
  speak: {
    title: 'Speaking: what is in your room?', source: 'website task “speak and transform”',
    prompts: [
      { route: 'core', ar: 'مَاذَا فِي حَقِيبَتِكَ؟' },
      { route: 'develop', ar: 'صِفِ الطُّلَّابَ وَالْكُتُبَ فِي صَفِّكَ.' },
      { route: 'stretch', ar: 'مَاذَا فِي مَدِينَتِكَ؟ (مَسَاجِدُ، حَدَائِقُ، شَوَارِعُ …)' },
    ],
    stems: [
      { route: 'core', ar: 'فِي حَقِيبَتِي كُتُبٌ وَ ______ .' },
      { route: 'develop', ar: 'الطُّلَّابُ ______ ، وَالْكُتُبُ ______ .' },
      { route: 'stretch', ar: 'فِي مَدِينَتِي ______ كَبِيرَةٌ.' },
    ],
    model: [
      { who: 'A', ar: 'مَاذَا فِي حَقِيبَتِكَ؟', en: 'What is in your bag?' },
      { who: 'B', ar: 'فِي حَقِيبَتِي كُتُبٌ وَدَفَاتِرُ وَأَقْلَامٌ. الْكُتُبُ ثَقِيلَةٌ!', en: 'In my bag there are books, exercise books and pens. The books are heavy!' },
    ],
    notes: 'Website: choose five nouns; say singular and plural, then use each in a sentence. Listen for the feminine singular adjective after the non-human plural (الْكُتُبُ ثَقِيلَةٌ).',
  },
  write: {
    siteTask: 'Write 8–12 connected sentences about your school, home or local area, using at least six target noun forms from this lesson.',
    core: { amount: '6 sentences', task: 'Six sentences, each with one broken plural from the family table.', how: 'Use the frames and word bank.' },
    develop: { amount: '8 sentences', task: 'Mix people and things; check every adjective.', how: 'People → plural adjective · things → feminine singular.' },
    stretch: { amount: '8–12 sentences', task: 'Website task, with at least two plurals that take no tanwīn.', how: 'Schools, mosques, gardens, bags …' },
  },
  frames: {
    core: [
      { en: 'In my bag there are books and …', ar: 'فِي حَقِيبَتِي كُتُبٌ وَ ______ .' },
      { en: 'The students are …', ar: 'الطُّلَّابُ ______ .' },
      { en: 'The houses in my street are …', ar: 'الْبُيُوتُ فِي شَارِعِي ______ .' },
      { en: 'The boys are playing in …', ar: 'يَلْعَبُ الْأَوْلَادُ فِي ______ .' },
    ],
    develop: [
      { en: 'In our city there are …', ar: 'فِي مَدِينَتِنَا ______ كَثِيرَةٌ.' },
      { en: 'The men in the mosque are …', ar: 'الرِّجَالُ فِي الْمَسْجِدِ ______ .' },
      { en: 'I read books …', ar: 'أَقْرَأُ كُتُبًا ______ .' },
      { en: 'The bags are …', ar: 'الْحَقَائِبُ ______ .' },
    ],
    bank: ['كُتُبٌ', 'أَقْلَامٌ', 'دَفَاتِرُ', 'بُيُوتٌ', 'مَدَارِسُ', 'مَسَاجِدُ', 'حَدَائِقُ', 'طُلَّابٌ', 'أَوْلَادٌ', 'رِجَالٌ', 'كَبِيرَةٌ', 'مُفِيدَةٌ', 'جَمِيلَةٌ', 'مُجْتَهِدُونَ', 'حَاضِرُونَ'],
  },
  stretchTask: {
    task: 'Website writing workshop: 8–12 connected sentences about your school, home or local area with at least six target noun forms.',
    checklist: ['Six different broken plurals.', 'At least two people plurals with a plural adjective.', 'At least two thing plurals with a feminine singular adjective.', 'Two plurals with no tanwīn (schools, mosques, gardens …).', 'One sound plural for contrast.'],
    phrases: [['الطُّلَّابُ مُجْتَهِدُونَ', 'the students are hard-working'], ['الْكُتُبُ مُفِيدَةٌ', 'the books are useful'], ['مَسَاجِدُ جَمِيلَةٌ', 'beautiful mosques'], ['حَدَائِقُ وَاسِعَةٌ', 'spacious gardens'], ['بُيُوتٌ قَدِيمَةٌ', 'old houses'], ['الرِّجَالُ حَاضِرُونَ', 'the men are present']],
  },
  model: {
    text: 'أَسْكُنُ فِي مَدِينَةٍ صَغِيرَةٍ. فِي مَدِينَتِي بُيُوتٌ قَدِيمَةٌ وَشَوَارِعُ هَادِئَةٌ وَمَسَاجِدُ جَمِيلَةٌ. فِي مَدْرَسَتِي طُلَّابٌ مُجْتَهِدُونَ وَمُعَلِّمُونَ لُطَفَاءُ. فِي الْمَكْتَبَةِ كُتُبٌ مُفِيدَةٌ، وَأَقْرَأُ كُتُبًا كَثِيرَةً كُلَّ أُسْبُوعٍ. يَلْعَبُ الْأَوْلَادُ فِي الْحَدَائِقِ.',
    en: 'I live in a small town. In my town there are old houses, quiet streets and beautiful mosques. In my school there are hard-working students and kind teachers. In the library there are useful books, and I read many books every week. The boys play in the gardens.',
    find: ['broken plurals', 'people: plural adj.', 'things: singular adj.', 'no tanwīn'],
    source: 'teacher model on the website writing workshop',
  },
  selfCheck: [
    { route: 'core', text: 'I used at least six broken plurals correctly.' },
    { route: 'core', text: 'I did not add -āt or -ūna to a broken-plural noun.' },
    { route: 'develop', text: 'People have a plural adjective.' },
    { route: 'develop', text: 'Things have a feminine singular adjective.' },
    { route: 'stretch', text: 'Schools, mosques and gardens have no tanwīn.' },
  ],
  exit: [
    q('Plural of وَلَدٌ?', ['أَوْلَادٌ', 'وَلَدُونَ', 'وَلَدَاتٌ'], 'Pattern afʿāl.'),
    q('Choose the correct sentence.', ['الْبُيُوتُ كَبِيرَةٌ.', 'الْبُيُوتُ كَبِيرُونَ.', 'الْبُيُوتُ كَبِيرٌ.'], 'Things → feminine singular.'),
    q('Choose the correct sentence.', ['الرِّجَالُ حَاضِرُونَ.', 'الرِّجَالُ حَاضِرَةٌ.', 'الرِّجَالُ حَاضِرٌ.'], 'People → plural adjective.'),
  ],
  mastery: false,
  prep: {
    words: [['غَيْرُ عَاقِلٍ', 'non-human', '—'], ['سَيَّارَاتٌ', 'cars', 'sing. سَيَّارَةٌ'], ['أَشْجَارٌ', 'trees', 'sing. شَجَرَةٌ'], ['شَوَارِعُ', 'streets', 'sing. شَارِعٌ'], ['هِيَ', 'she / it (for things)', '—']],
    questionEn: 'We say “the books are useful” with a FEMININE SINGULAR adjective. Which pronoun would you use for “they” (the books)?',
    questionAr: 'الْكُتُبُ مُفِيدَةٌ · ______ عَلَى الطَّاوِلَةِ.',
    homework: {
      core: 'Make a family card for ten nouns: singular, plural, meaning.',
      develop: 'Write eight sentences: four about people, four about things.',
      stretch: 'Website writing workshop and sort your ten nouns by pattern.',
    },
    wordsSource: 'The five words prepare GM-N-06 (website Nouns lesson 6: non-human plural agreement).',
  },
  remember: 'Remember: broken = reshaped, not wrong · learn singular + plural + sentence · people → plural adjective, things → feminine singular.',
});

module.exports = { meta, slides };
