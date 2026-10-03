'use strict';
/* GM-ADJ-08 · Defective Adjectives such as غَالٍ and رَاضٍ — website: Mastery & Revision › Grammar › Adjectives › Lesson 8 (final yāʾ dropped
 * in the indefinite nominative and genitive singular, leaving kasra tanwīn — كِتَابٌ غَالٍ · مَرَرْتُ بِكِتَابٍ غَالٍ · هُوَ رَاضٍ; the yāʾ returns
 * in the definite form and the indefinite accusative — الْكِتَابُ الْغَالِي · كِتَابًا غَالِيًا · رَجُلًا رَاضِيًا; feminine shows the yāʾ —
 * حَقِيبَةٌ غَالِيَةٌ · طَالِبَةٌ رَاضِيَةٌ; clinic: غَالِيٌ ✗, dropping ي in the definite). The website Entry Check is the Do Now (feedback in
 * English); guided and mastery checks repeat it, so quick check, practice and exit are teacher-written. Teacher-added: the same pattern
 * in everyday nouns (نَادٍ / النَّادِي · وَادٍ / الْوَادِي) and the masculine plural رَاضُونَ for Stretch. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-ADJ-08', fileTitle: 'Defective_Adjectives', title: 'Defective Adjectives', arabic: 'الصِّفَاتُ الْمَنْقُوصَةُ مِثْلُ غَالٍ وَرَاضٍ',
  focus: 'Some adjectives end in a hidden -ī: expensive is ghālin (no yāʾ) in “a … book”, but al-ghālī with al-, ghāliyan as an object, and ghāliya for a feminine noun. The yāʾ hides only in -un and -in positions.',
  icon: 'FaTag',
});

const slides = G.gmLesson({
  code: 'GM-ADJ-08', site: 'grammar__04-adjectives__grammar-mastery-08-defective-adjectives',
  support: `• Core: three shapes of one word — غَالٍ (a … , subject or after a preposition) · الْغَالِي (with al-) · غَالِيَةٌ (feminine). Develop: the accusative brings the yāʾ back (كِتَابًا غَالِيًا). Stretch: the same pattern in nouns (نَادٍ / النَّادِي · وَادٍ / الْوَادِي · الْمَاضِي) and the masculine plural (رَاضُونَ).
• Pronunciation first: say ghālin with a clear -in; then al-ghālī with a long -ī. Students hear the difference before they write it.
• Common vocabulary: غَالٍ expensive · رَاضٍ satisfied · عَالٍ high · مَاضٍ past · بَاقٍ remaining · هَادٍ guiding (recognition).`,
  teach: 'What “defective” means; when the yāʾ returns; feminine forms.',
  wedo: 'Sort hidden / visible yāʾ, complete, repair.',
  next: { nextCode: 'GM-ADJ-09', nextTitle: 'Nisba Adjectives', nextAr: 'صِفَاتُ النِّسْبَةِ' },
  doNow: {
    fb: { 0: 'The indefinite nominative drops the yāʾ.', 1: 'The definite form restores the yāʾ.', 2: 'The indefinite accusative keeps the yāʾ.', 3: 'The feminine ending follows the yāʾ.' },
    keyIdea: { text: 'The final yāʾ hides in “a … ” (subject or after a preposition): ghālin. It comes back with al-, in the object, and before tāʾ marbūṭa.', ar: 'كِتَابٌ {k|غَالٍ} ‖ الْكِتَابُ {e|الْغَالِي}' },
    retrieves: 'The website Entry Check (all five questions) — it uses the defective words prepared at the end of GM-ADJ-07.',
  },
  objectives: ['Recognise a defective adjective (hidden final yāʾ).', 'Write the indefinite form with -in and no yāʾ.', 'Bring the yāʾ back with al-, in the accusative and in the feminine.', 'Spot the same pattern in common nouns.'],
  routes: {
    core: ['I say and write an expensive book and the expensive book.', 'I write the feminine with the yāʾ.'],
    develop: ['I write the object with the yāʾ: ghāliyan.', 'I explain when the yāʾ hides.'],
    stretch: ['I read nādin / an-nādī and wādin / al-wādī.', 'I use the plural rāḍūna.'],
  },
  terms: {
    items: [
      { ar: 'الْمَنْقُوصُ', en: 'defective (hidden final yāʾ)', note: 'غَالٍ · رَاضٍ' },
      { ar: 'غَالٍ', en: 'expensive', tr: 'ghālin', note: 'الْغَالِي · غَالِيَةٌ' },
      { ar: 'رَاضٍ', en: 'satisfied, pleased', tr: 'rāḍin', note: 'رَاضٍ عَنْ …' },
      { ar: 'عَالٍ', en: 'high', tr: 'ʿālin', note: 'جَبَلٌ عَالٍ' },
      { ar: 'مَاضٍ', en: 'past, last', tr: 'māḍin', note: 'الْأُسْبُوعُ الْمَاضِي' },
      { ar: 'تَنْوِينُ الْكَسْرِ', en: 'kasra tanwīn (-in)', note: 'what is left: ـٍ' },
    ],
  },
  explain: [
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · step 1 · what is a defective adjective? (website)', title: 'A yāʾ that hides', ar: 'مَا الْمَنْقُوصُ؟',
      points: [
        'Some adjectives end in an unstressed yāʾ (website).',
        'In the INDEFINITE nominative and genitive singular, the yāʾ is dropped in writing and speech (website).',
        'Only kasra tanwīn is left: ghālin, rāḍin, ʿālin.',
        'So “an expensive book” is kitābun ghālin — not “ghāliyun”.',
        'It is the same word; only the spelling of the ending changes.',
      ],
      examples: [
        { ar: 'هَذَا كِتَابٌ غَالٍ.', en: 'This is an expensive book.', note: 'website · nominative' },
        { ar: 'مَرَرْتُ بِكِتَابٍ غَالٍ.', en: 'I passed an expensive book.', note: 'website · genitive' },
        { ar: 'هُوَ رَاضٍ عَنِ النَّتِيجَةِ.', en: 'He is satisfied with the result.', note: 'website' },
        { ar: 'هَذَا جَبَلٌ عَالٍ.', en: 'This is a high mountain.' },
      ],
      callout: { kind: 'warn', head: 'WEBSITE CLINIC', text: 'In full formal Arabic, never write ghāliyun with the yāʾ in the indefinite nominative: write ghālin.' },
      notes: 'STEP 1 (3 min) — website “What is a defective adjective?”. Say ghālin / rāḍin / ʿālin aloud with a strong final -in before writing.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · step 2 · when the yāʾ returns (website)', title: 'Hidden or visible? Four positions', ar: 'مَتَى تَعُودُ الْيَاءُ؟', ltr: true,
      cols: [{ label: 'Position', w: 3.4 }, { label: 'Arabic (website)', w: 5.0, size: 24 }, { label: 'yāʾ?', w: 3.93 }],
      rows: [
        { core: true, cells: ['indefinite, subject / predicate', 'كِتَابٌ غَالٍ', 'hidden: -in'] },
        { core: true, cells: ['indefinite, after a preposition', 'بِكِتَابٍ غَالٍ', 'hidden: -in'] },
        { core: true, cells: ['definite (al-)', 'الْكِتَابُ الْغَالِي', 'VISIBLE: -ī'] },
        { core: true, cells: ['indefinite object', 'اشْتَرَيْتُ كِتَابًا غَالِيًا.', 'VISIBLE: -iyan'] },
        { cells: ['indefinite object (person)', 'رَأَيْتُ رَجُلًا رَاضِيًا.', 'VISIBLE: -iyan'] },
      ],
      foot: 'Memory rule: the yāʾ hides only behind -un and -in. With al- or -an, it comes back.',
      notes: 'STEP 2 (4 min) — website “When the yāʾ returns”. Gesture: hand covering the yāʾ for rows 1–2, hand lifting away for rows 3–5.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · step 3 · feminine forms (website) · and the same pattern in nouns · Stretch', title: 'Feminine — and nouns that behave the same', ar: 'الْمُؤَنَّثُ وَأَسْمَاءٌ مِثْلُهُ', ltr: true,
      cols: [{ label: 'Meaning', w: 3.4 }, { label: 'Arabic', w: 5.0, size: 24 }, { label: 'Notice', w: 3.93 }],
      rows: [
        { core: true, cells: ['an expensive bag', 'حَقِيبَةٌ غَالِيَةٌ', 'feminine: yāʾ always visible (website)'] },
        { core: true, cells: ['a satisfied student (f.)', 'طَالِبَةٌ رَاضِيَةٌ', 'website'] },
        { core: true, cells: ['last week', 'الْأُسْبُوعُ الْمَاضِي', 'definite → -ī'] },
        { cells: ['a club / the club', 'نَادٍ · النَّادِي', 'a noun with the same pattern'] },
        { cells: ['a valley / the valley', 'وَادٍ · الْوَادِي', 'a noun with the same pattern'] },
        { cells: ['satisfied (people, plural)', 'رَاضُونَ', 'the yāʾ disappears before -ūna'] },
      ],
      foot: 'Website: the feminine shows the yāʾ clearly before tāʾ marbūṭa — ghāliya, rāḍiya, ʿāliya.',
      notes: 'STEP 3 (3 min) — website “Feminine forms”, plus teacher-added nouns and the plural for Stretch recognition.',
    },
  ],
  quick: [
    q('Choose “a high building”.', ['مَبْنًى عَالٍ', 'مَبْنًى عَالِيٌ', 'مَبْنًى الْعَالِي'], 'Indefinite nominative → hidden yāʾ.'),
    q('Choose “the high building”.', ['الْمَبْنَى الْعَالِي', 'الْمَبْنَى الْعَالِ', 'الْمَبْنَى عَالٍ'], 'Definite → yāʾ returns.'),
    q('Choose “I bought an expensive watch (f.)”.', ['اشْتَرَيْتُ سَاعَةً غَالِيَةً.', 'اشْتَرَيْتُ سَاعَةً غَالٍ.', 'اشْتَرَيْتُ سَاعَةً غَالِيًا.'], 'Feminine: yāʾ + ة.'),
    q('Choose “I saw a satisfied customer (m.)”.', ['رَأَيْتُ زَبُونًا رَاضِيًا.', 'رَأَيْتُ زَبُونًا رَاضٍ.', 'رَأَيْتُ زَبُونًا رَاضِيٌ.'], 'Accusative → yāʾ returns.'),
  ],
  quickNote: 'teacher-written hinge questions on the website’s three steps.',
  ido: {
    title: 'Watch me follow the yāʾ',
    steps: [
      { head: 'Indefinite', ar: 'هَاتِفٌ غَالٍ', think: 'subject → -in, no yāʾ.' },
      { head: 'Definite', ar: 'الْهَاتِفُ الْغَالِي', think: 'al- → -ī.' },
      { head: 'Object', ar: 'اشْتَرَى هَاتِفًا غَالِيًا', think: '-an → yāʾ back.' },
      { head: 'Feminine', ar: 'سَاعَةٌ غَالِيَةٌ', think: 'yāʾ + ة.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'YĀʾ HIDDEN', e: 'YĀʾ VISIBLE' },
    model: 'هَذَا هَاتِفٌ {k|غَالٍ}، لَكِنَّ أَخِي اشْتَرَى هَاتِفًا {e|غَالِيًا} أَيْضًا. الْهَاتِفُ {e|الْغَالِي} لَيْسَ دَائِمًا الْأَفْضَلَ، وَأَنَا {k|رَاضٍ} عَنْ هَاتِفِي الْقَدِيمِ.',
    modelEn: 'This is an expensive phone, but my brother bought an expensive phone too. The expensive phone is not always the best, and I am satisfied with my old phone.',
    notes: 'Colour-code hidden (teal) vs visible (pink). Ask each time: “-un / -in, or al- / -an?”',
  },
  models: [
    { ar: 'الْكِتَابُ الْغَالِي مُفِيدٌ.', en: 'The expensive book is useful.', tip: 'Website model bank: definite.' },
    { ar: 'أُمِّي رَاضِيَةٌ عَنْ نَتِيجَتِي.', en: 'My mother is pleased with my result.', tip: 'Feminine: yāʾ visible.' },
    { ar: 'سَافَرْنَا فِي الشَّهْرِ الْمَاضِي.', en: 'We travelled last month.', tip: 'al-māḍī: definite.' },
    { ar: 'نَزَلْنَا مِنْ جَبَلٍ عَالٍ.', en: 'We came down from a high mountain.', tip: 'After a preposition: hidden.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · is the yāʾ written?', title: 'Hidden or visible yāʾ?', ar: 'الْيَاءُ ظَاهِرَةٌ أَمْ مَحْذُوفَةٌ؟',
      categories: ['yāʾ hidden (-in)', 'yāʾ visible'],
      items: [['ثَمَنٌ غَالٍ', 0], ['الثَّمَنُ الْغَالِي', 1], ['صَوْتٌ عَالٍ', 0], ['صَوْتًا عَالِيًا', 1], ['فِي نَادٍ', 0], ['فِي النَّادِي', 1], ['رَجُلٌ رَاضٍ', 0], ['امْرَأَةٌ رَاضِيَةٌ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type H or V and give the reason: -un/-in → hidden; al-, -an or ة → visible.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'We do · one word, four shapes · say it aloud', title: 'Complete the family', ar: 'أَكْمِلِ الْأَشْكَالَ', ltr: true, stage: 'wedo',
      cols: [{ label: 'a … (subject)', w: 3.1, size: 24 }, { label: 'the …', w: 3.1, size: 24 }, { label: 'a … (object)', w: 3.1, size: 24 }, { label: 'feminine', w: 3.03, size: 24 }],
      rows: [
        { core: true, cells: ['غَالٍ', 'الْغَالِي', 'غَالِيًا', 'غَالِيَةٌ'] },
        { core: true, cells: ['رَاضٍ', 'الرَّاضِي', 'رَاضِيًا', 'رَاضِيَةٌ'] },
        { core: true, cells: ['عَالٍ', 'الْعَالِي', 'عَالِيًا', 'عَالِيَةٌ'] },
        { cells: ['مَاضٍ', 'الْمَاضِي', 'مَاضِيًا', 'مَاضِيَةٌ'] },
        { cells: ['بَاقٍ', 'الْبَاقِي', 'بَاقِيًا', 'بَاقِيَةٌ'] },
      ],
      foot: 'Cover all but the first column. Students build the other three, saying each aloud.',
      notes: 'WE DO (2 min). Row 5: bāqin = remaining (الْوَقْتُ الْبَاقِي = the remaining time) — useful for exams.',
    },
  ],
  mistakes: [
    { wrong: 'هَذَا قَمِيصٌ غَالِيٌ.', right: 'هَذَا قَمِيصٌ غَالٍ.', why: 'Indefinite nominative → hidden yāʾ (website clinic).' },
    { wrong: 'الْجَبَلُ الْعَالِ', right: 'الْجَبَلُ الْعَالِي', why: 'Definite → the yāʾ returns (website clinic).' },
    { wrong: 'اشْتَرَيْتُ قَمِيصًا غَالٍ.', right: 'اشْتَرَيْتُ قَمِيصًا غَالِيًا.', why: 'Accusative → the yāʾ returns.' },
  ],
  hints: ['-un or -in?', 'Is there al-?', 'Is it an object?'],
  practice: [
    q('Choose “in an expensive hotel”.', ['فِي فُنْدُقٍ غَالٍ', 'فِي فُنْدُقٍ غَالِي', 'فِي فُنْدُقٍ غَالِيٍ'], 'Genitive indefinite → hidden.'),
    q('Choose “the past year”.', ['السَّنَةُ الْمَاضِيَةُ', 'السَّنَةُ الْمَاضِي', 'السَّنَةُ مَاضٍ'], 'Feminine + definite.'),
    q('Choose “He is satisfied.”', ['هُوَ رَاضٍ.', 'هُوَ رَاضِيٌ.', 'هُوَ الرَّاضِي.'], 'Indefinite predicate → hidden.'),
    q('Choose “I heard a loud (high) voice.”', ['سَمِعْتُ صَوْتًا عَالِيًا.', 'سَمِعْتُ صَوْتًا عَالٍ.', 'سَمِعْتُ صَوْتٌ عَالٍ.'], 'Object → yāʾ returns.'),
  ],
  practiceLabel: 'teacher-written practice on the website rules',
  read: {
    title: 'Shopping in my city', label: 'website reading text, extended by the teacher',
    text: 'فِي مَدِينَتِي أَمَاكِنُ جَمِيلَةٌ وَشَوَارِعُ وَاسِعَةٌ. هَذِهِ الْمَدْرَسَةُ الْجَدِيدَةُ قَرِيبَةٌ، وَذَلِكَ الْمَتْحَفُ الْقَدِيمُ مُثِيرٌ لِلِاهْتِمَامِ. فِي السُّوقِ مَحَلٌّ غَالٍ، وَفِيهِ الْمَلَابِسُ الْغَالِيَةُ. فِي الشَّهْرِ الْمَاضِي اشْتَرَيْتُ مِنْهُ قَمِيصًا غَالِيًا، لَكِنِّي لَسْتُ رَاضِيًا عَنْهُ!',
    glossary: [['أَمَاكِنُ', 'places'], ['مُثِيرٌ لِلِاهْتِمَامِ', 'interesting'], ['مَحَلٌّ', 'shop'], ['الْمَلَابِسُ', 'the clothes'], ['اشْتَرَيْتُ', 'I bought'], ['لَسْتُ', 'I am not'], ['عَنْهُ', 'with it']],
    task: 'Website: underline every defective adjective and say whether its yāʾ is hidden or visible — and why.',
    questions: [
      q('Why is the yāʾ hidden in the shop phrase?', ['It is indefinite and nominative.', 'It is feminine.', 'It has al-.'], 'kitābun ghālin pattern.'),
      q('Why is the yāʾ visible in the clothes phrase?', ['It is feminine (and definite).', 'It is an object.', 'It is plural people.'], 'Feminine: yāʾ + ة.'),
      q('Why is it قَمِيصًا غَالِيًا?', ['It is the object of “I bought”.', 'It is after a preposition.', 'It is definite.'], 'Accusative → yāʾ visible.'),
      q('Why is it رَاضِيًا after لَسْتُ?', ['Laysa makes its predicate accusative.', 'It is feminine.', 'It is definite.'], 'Stretch: laysa + -an → yāʾ visible.'),
    ],
    qNote: 'The first two sentences are the website text; the rest is teacher-written. Questions teacher-written.',
  },
  speak: {
    title: 'Speaking: prices and opinions', source: 'website speaking task (45–60 seconds)',
    prompts: [
      { route: 'core', ar: 'مَا الشَّيْءُ الْغَالِي فِي بَيْتِكُمْ؟' },
      { route: 'develop', ar: 'مَاذَا اشْتَرَيْتَ فِي الشَّهْرِ الْمَاضِي؟ هَلْ كَانَ غَالِيًا؟' },
      { route: 'stretch', ar: 'هَلْ أَنْتَ رَاضٍ عَنْ مُسْتَوَاكَ فِي الْعَرَبِيَّةِ؟ لِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'الشَّيْءُ الْغَالِي فِي بَيْتِنَا ______ .' },
      { route: 'develop', ar: 'فِي الشَّهْرِ الْمَاضِي اشْتَرَيْتُ ______ غَالِيًا.' },
      { route: 'stretch', ar: 'أَنَا رَاضٍ / رَاضِيَةٌ عَنْ ______ لِأَنَّ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'هَلْ أَنْتِ رَاضِيَةٌ عَنْ نَتِيجَتِكِ؟', en: 'Are you pleased with your result? (to a girl)' },
      { who: 'B', ar: 'نَعَمْ، أَنَا رَاضِيَةٌ، لَكِنَّ أَبِي يُرِيدُ دَرَجَةً عَالِيَةً جِدًّا!', en: 'Yes, I am pleased, but my father wants a very high mark!' },
    ],
    notes: 'Website: 45–60 seconds with six accurate structures. Boys: أَنَا رَاضٍ (rāḍin); girls: أَنَا رَاضِيَةٌ.',
  },
  write: {
    siteTask: 'Write 90–120 words describing a person, place, object or experience, with at least eight target adjective structures, underlined.',
    core: { amount: '6 sentences', task: 'Describe expensive and high things with ghālin / al-ghālī / ʿālin.', how: 'Indefinite → -in; with al- → -ī.' },
    develop: { amount: '8 sentences', task: 'Add objects (ghāliyan) and feminine nouns (ghāliya).', how: 'Use the four-shape table.' },
    stretch: { amount: '90–120 words', task: 'Website task: a shopping trip last month, with māḍin / al-māḍī and rāḍin.', how: 'Am I satisfied? Was it expensive?' },
  },
  frames: {
    core: [
      { en: 'This is an expensive phone.', ar: 'هَذَا هَاتِفٌ ______ .' },
      { en: 'The expensive phone is …', ar: 'الْهَاتِفُ ______ جَمِيلٌ.' },
      { en: 'This is an expensive bag.', ar: 'هَذِهِ حَقِيبَةٌ ______ .' },
      { en: 'That is a high mountain.', ar: 'ذَلِكَ جَبَلٌ ______ .' },
    ],
    develop: [
      { en: 'Last week I …', ar: 'فِي الْأُسْبُوعِ ______ ______ .' },
      { en: 'I bought an expensive …', ar: 'اشْتَرَيْتُ ______ غَالِيًا.' },
      { en: 'I am satisfied with …', ar: 'أَنَا رَاضٍ عَنْ ______ .' },
      { en: 'My mother is satisfied with …', ar: 'أُمِّي رَاضِيَةٌ عَنْ ______ .' },
    ],
    bank: ['غَالٍ', 'الْغَالِي', 'غَالِيًا', 'غَالِيَةٌ', 'عَالٍ', 'الْعَالِي', 'عَالِيَةٌ', 'رَاضٍ', 'رَاضِيَةٌ', 'الْمَاضِي', 'الْمَاضِيَةِ', 'رَخِيصٌ'],
  },
  stretchTask: {
    task: 'Website extended writing workshop: 90–120 words about a shopping trip or a special purchase, with at least eight target adjective structures.',
    checklist: ['Two indefinite defective adjectives with hidden yāʾ (-in).', 'Two definite forms with -ī.', 'One indefinite object with -iyan.', 'Two feminine forms with -iya.', 'Last week / last month with al-māḍī / al-māḍiya.'],
    phrases: [['فِي الشَّهْرِ الْمَاضِي', 'last month'], ['فِي السَّنَةِ الْمَاضِيَةِ', 'last year'], ['كَانَ الثَّمَنُ غَالِيًا', 'the price was expensive'], ['أَنَا رَاضٍ عَنْ …', 'I am satisfied with …'], ['بِصَوْتٍ عَالٍ', 'in a loud voice'], ['الْوَقْتُ الْبَاقِي', 'the remaining time']],
  },
  model: {
    text: 'فِي الشَّهْرِ الْمَاضِي ذَهَبْتُ مَعَ أُمِّي إِلَى مَرْكَزِ تَسَوُّقٍ كَبِيرٍ. كُلُّ شَيْءٍ هُنَاكَ غَالٍ! رَأَيْتُ حِذَاءً رِيَاضِيًّا غَالِيًا جِدًّا، وَحَقِيبَةً غَالِيَةً لِأُخْتِي. فِي النِّهَايَةِ اشْتَرَيْتُ الْقَمِيصَ الْأَرْخَصَ، لَا الْقَمِيصَ الْغَالِي. أُمِّي كَانَتْ رَاضِيَةً، وَأَنَا رَاضٍ أَيْضًا.',
    en: 'Last month I went with my mother to a big shopping centre. Everything there is expensive! I saw some very expensive trainers and an expensive bag for my sister. In the end I bought the cheaper shirt, not the expensive shirt. My mother was pleased, and I am pleased too.',
    find: ['hidden yāʾ (-in)', 'visible -ī', '-iyan object', 'feminine -iya'],
    source: 'teacher model on the website writing workshop',
  },
  selfCheck: [
    { route: 'core', text: 'Indefinite subject / after a preposition: -in, no yāʾ.' },
    { route: 'core', text: 'With al-: the yāʾ is written.' },
    { route: 'develop', text: 'Indefinite object: -iyan.' },
    { route: 'develop', text: 'Feminine: -iya with tāʾ marbūṭa.' },
    { route: 'stretch', text: 'I used al-māḍī or a noun like an-nādī.' },
  ],
  exit: [
    q('Choose “an expensive car (f.)”.', ['سَيَّارَةٌ غَالِيَةٌ', 'سَيَّارَةٌ غَالٍ', 'سَيَّارَةٌ غَالِيٌ'], 'Feminine: yāʾ + ة.'),
    q('Choose “the high mountain”.', ['الْجَبَلُ الْعَالِي', 'الْجَبَلُ الْعَالِ', 'الْجَبَلُ عَالٍ'], 'Definite → -ī.'),
    q('Choose “This is an expensive book.”', ['هَذَا كِتَابٌ غَالٍ.', 'هَذَا كِتَابٌ غَالِيٌ.', 'هَذَا كِتَابٌ غَالِيًا.'], 'Indefinite nominative → hidden yāʾ.'),
  ],
  mastery: false,
  prep: {
    words: [['مِصْرِيٌّ', 'Egyptian (m.)', 'f. مِصْرِيَّةٌ'], ['عَرَبِيٌّ', 'Arab, Arabic (m.)', 'f. عَرَبِيَّةٌ'], ['بِرِيطَانِيٌّ', 'British (m.)', 'f. بِرِيطَانِيَّةٌ'], ['شَمَالِيٌّ', 'northern', 'from شَمَالٌ'], ['تَارِيخِيٌّ', 'historical', 'from تَارِيخٌ']],
    questionEn: 'From Miṣr (Egypt) we get miṣriyy (Egyptian). What is the ending? How would you say “Pakistani” or “Moroccan”?',
    questionAr: 'مِصْرُ · مِصْرِيٌّ — بَاكِسْتَانُ · ______',
    homework: {
      core: 'Write the four shapes of ghālin, rāḍin and ʿālin.',
      develop: 'Write eight sentences using the four shapes.',
      stretch: 'Website writing workshop about a shopping trip.',
    },
    wordsSource: 'The five words prepare GM-ADJ-09 (website Adjectives lesson 9: nisba adjectives).',
  },
  remember: 'Remember: the yāʾ hides behind -un / -in (ghālin) · it comes back with al- (al-ghālī), with -an (ghāliyan) and before ة (ghāliya).',
});

module.exports = { meta, slides };
