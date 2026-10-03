'use strict';
/* GM-N-01 · Noun Gender — website: Mastery & Revision › Grammar › Nouns › Lesson 1 (masculine by default; feminine markers ة · اء · ى; lexical
 * feminines شَمْسٌ · أَرْضٌ · نَفْسٌ; masculine names in ة; natural gender in professions; tāʾ marbūṭa → ت before a suffix; agreement of
 * adjectives, demonstratives, pronouns and verbs). Entry check, gender check and mastery check are the website’s; explanation slides,
 * examples, sorter, repair, reading questions, frames and model are teacher-made on the website rules. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-N-01', fileTitle: 'Noun_Gender', title: 'Noun Gender', arabic: 'جِنْسُ الِاسْمِ: الْمُذَكَّرُ وَالْمُؤَنَّثُ',
  focus: 'Every Arabic noun is masculine or feminine. Recognise the feminine markers (ة · اء · ى), learn the important exceptions (شَمْسٌ is feminine; حَمْزَةُ is masculine) — and make every word that refers back agree (هٰذِهِ الْمَدْرَسَةُ … هِيَ كَبِيرَةٌ).',
  icon: 'FaVenusMars',
});

const slides = G.gmLesson({
  code: 'GM-N-01', site: 'grammar__03-nouns__grammar-mastery-01-gender',
  support: `• Core: the ة clue and natural gender (مُعَلِّمٌ / مُعَلِّمَةٌ); adjective agreement. Develop: demonstratives, pronouns and verbs agree too; professions. Stretch: lexical feminines without ة, masculine names in ة, tāʾ marbūṭa → ت before a suffix.
• URDU BRIDGE: Urdu also has grammatical gender (کتاب is feminine in Urdu!). Warn students: Urdu gender does NOT transfer — Arabic كِتَابٌ is masculine. Also, Urdu words like ساعت / ساعة keep the Arabic ة as ت.
• The habit to build (website “meaning-first strategy”): find the head noun → decide its gender → check EVERY word that refers back to it.`,
  teach: 'Masculine by default; feminine markers; exceptions; agreement across the sentence.',
  wedo: 'Sort masculine and feminine, repair agreement slips, practise ة → ت.',
  next: { nextCode: 'GM-N-02', nextTitle: 'Singular, Dual and Plural', nextAr: 'الْمُفْرَدُ وَالْمُثَنَّى وَالْجَمْعُ' },
  doNow: {
    keyIdea: { text: 'ة is a strong feminine clue — but learn the exceptions: شَمْسٌ, أَرْضٌ are feminine; حَمْزَةُ is a man.', ar: 'مَدْرَسَةٌ · {k|شَمْسٌ} ‖ كِتَابٌ · {w|حَمْزَةُ}' },
    retrieves: 'The website Entry Check (questions 1–5). Note which students choose “every noun ending ة is feminine” — that misconception is today’s Stretch focus.',
  },
  objectives: ['Recognise masculine nouns and the feminine markers ة · اء · ى.', 'Learn common exceptions: feminines without ة and masculine names with ة.', 'Make adjectives, demonstratives, pronouns and verbs agree in gender.', 'Change ة to ت before a possessive suffix.'],
  routes: {
    core: ['I can sort nouns by the ة clue.', 'I can make an adjective agree: سَيَّارَةٌ سَرِيعَةٌ.'],
    develop: ['I can choose هٰذَا / هٰذِهِ and هُوَ / هِيَ correctly.', 'I can make masculine and feminine professions.'],
    stretch: ['I know shams, arḍ, nafs, ḥarb are feminine.', 'I write مَدْرَسَتِي, not مَدْرَسَةِي.'],
  },
  terms: {
    flexRest: true,
    items: [
      { ar: 'مُذَكَّرٌ', en: 'masculine', note: 'كِتَابٌ · بَيْتٌ · قَلَمٌ' },
      { ar: 'مُؤَنَّثٌ', en: 'feminine', note: 'مَدْرَسَةٌ · سَيَّارَةٌ' },
      { ar: 'تَاءٌ مَرْبُوطَةٌ', en: 'tāʾ marbūṭa (ة)', note: 'the commonest feminine marker' },
      { ar: 'مُؤَنَّثٌ مَعْنَوِيٌّ', en: 'feminine by meaning / usage', note: 'شَمْسٌ · أَرْضٌ · أُمٌّ' },
      { ar: 'جِنْسٌ', en: 'gender', note: 'جِنْسُ الِاسْمِ' },
      { ar: 'مُطَابَقَةٌ', en: 'agreement', note: 'adjective · demonstrative · pronoun · verb' },
      { ar: 'أَلِفٌ مَقْصُورَةٌ', en: 'final alif ى', note: 'ذِكْرَى · كُبْرَى' },
      { ar: 'أَلِفٌ مَمْدُودَةٌ', en: 'final ـاء', note: 'صَحْرَاءُ · حَمْرَاءُ' },
    ],
  },
  explain: [
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 1 · recognising gender (website section)', title: 'Masculine or feminine?', ar: 'الْمُذَكَّرُ وَالْمُؤَنَّثُ',
      points: [
        'Every Arabic noun is grammatically masculine or feminine — even objects, places and ideas.',
        'Many nouns with no feminine marker are masculine: book, house, pen, restaurant (first example).',
        'The commonest feminine marker is ة (tāʾ marbūṭa): school, car.',
        'Two more feminine endings: ـاء (desert) and ى (memory, the greatest — f.).',
        'Shape is a clue, not a rule: some feminines have no ة, and some male names end in ة.',
      ],
      examples: [
        { ar: 'كِتَابٌ · بَيْتٌ · قَلَمٌ · مَطْعَمٌ', en: 'masculine — no marker' },
        { ar: 'مَدْرَسَةٌ · سَيَّارَةٌ', en: 'feminine — ة' },
        { ar: 'صَحْرَاءُ · حَمْرَاءُ', en: 'feminine — ـاء' },
        { ar: 'ذِكْرَى · كُبْرَى', en: 'feminine — ى' },
      ],
      callout: { kind: 'warn', text: 'Do not classify by shape alone (website): Ḥamza is a man’s name ending in ة, while shams, arḍ, nafs and ḥarb are feminine without it.' },
      notes: 'PART 1 (3 min) — website section “Recognising gender”. Website: “This is a useful starting clue, not an infallible rule.”',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 2 · four kinds of gender (website table)', title: 'How do we know a noun’s gender?', ar: 'أَنْوَاعُ الْمُؤَنَّثِ', ltr: true,
      cols: [{ label: 'Type', w: 3.0 }, { label: 'Examples', w: 4.8, size: 24 }, { label: 'How to learn it (website)', w: 4.53 }],
      rows: [
        { core: true, cells: ['natural gender', 'أَبٌ / أُمٌّ · مُعَلِّمٌ / مُعَلِّمَةٌ', 'meaning and form'] },
        { core: true, cells: ['marked feminine', 'غُرْفَةٌ · جَامِعَةٌ', 'notice the ending ة'] },
        { cells: ['lexical feminine (no ة)', 'شَمْسٌ · دَارٌ · رِيحٌ · أَرْضٌ', 'memorise WITH its agreement'] },
        { cells: ['masculine name in ة', 'حَمْزَةُ · أُسَامَةُ', 'recognise the names'] },
        { cells: ['body parts in pairs (Stretch)', 'عَيْنٌ · يَدٌ · رِجْلٌ · أُذُنٌ', 'feminine without ة'] },
      ],
      foot: 'Learn lexical feminines in a phrase, never alone: الشَّمْسُ حَارَّةٌ · الْأَرْضُ وَاسِعَةٌ.',
      notes: 'PART 2 (2 min) — website table, plus a Stretch row (paired body parts are feminine: عَيْنٌ جَمِيلَةٌ).',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · gender agreement across the sentence (website section)', title: 'Everything that refers back agrees', ar: 'الْمُطَابَقَةُ فِي الْجُمْلَةِ', ltr: true,
      cols: [{ label: 'Word that agrees', w: 2.8 }, { label: 'Masculine noun', w: 4.6, size: 24 }, { label: 'Feminine noun', w: 4.93, size: 24 }],
      rows: [
        { core: true, cells: ['adjective', 'بَيْتٌ كَبِيرٌ', 'مَدْرَسَةٌ كَبِيرَةٌ'] },
        { core: true, cells: ['demonstrative', 'هٰذَا الْبَيْتُ', 'هٰذِهِ الْمَدْرَسَةُ'] },
        { core: true, cells: ['pronoun', 'هُوَ قَرِيبٌ.', 'هِيَ قَرِيبَةٌ.'] },
        { cells: ['past verb', 'وَصَلَ الْقِطَارُ.', 'وَصَلَتِ الْحَافِلَةُ.'] },
        { cells: ['present verb', 'يَبْدَأُ الدَّرْسُ.', 'تَبْدَأُ الْمُبَارَاةُ.'] },
      ],
      foot: 'Meaning-first strategy (website): identify the head noun → decide its gender → check every word that refers back to it.',
      notes: 'PART 3 (3 min) — website section “Gender agreement across the sentence”. Verbs are previewed only: past ـَتْ, present تَـ for a feminine subject.',
    },
    {
      type: 'ruleCards', min: 2, eyebrow: 'Grammar · part 4 · professions and tāʾ marbūṭa · Develop / Stretch', title: 'Add ة — and open it to ت', ar: 'التَّاءُ الْمَرْبُوطَةُ',
      cards: [
        { chip: 'PROFESSIONS', color: '1E6B52', head: 'مُعَلِّمٌ ← مُعَلِّمَةٌ', big: 'طَبِيبٌ · طَبِيبَةٌ', en: 'doctor (m.) · doctor (f.)', clue: 'Also: مُهَنْدِسٌ / مُهَنْدِسَةٌ · طَالِبٌ / طَالِبَةٌ.' },
        { chip: 'ة BEFORE A SUFFIX', color: '1D5FBF', head: 'مَدْرَسَةٌ + ي', big: 'مَدْرَسَتِي', en: 'my school — ة becomes ت', clue: 'غُرْفَتِي · سَيَّارَتُنَا · جَامِعَتُهَا.' },
        { chip: 'ة IN IḌĀFA', color: '6B4C9A', head: 'مَدْرَسَةُ الْبَنَاتِ', big: 'حَقِيبَةُ الطَّالِبِ', en: 'the student’s bag — ة is said as t', clue: 'ḥaqībatu ṭ-ṭālib.' },
      ],
      error: { text: 'Website mini-check: ة opens to ت before a suffix.', pairs: [['غُرْفَتِي', 'غُرْفَةِي']] },
      notes: 'PART 4 (2 min). Tāʾ marbūṭa “opens” (becomes an ordinary ت) whenever something is attached after it, and is pronounced t when the word is joined to the next one.',
    },
  ],
  quickQuiz: /Gender check/i, quickPick: [0, 1, 2, 3], quickNote: 'website gender check, questions 1–4.',
  ido: {
    title: 'Watch me check every word that agrees',
    steps: [
      { head: 'Head noun', ar: 'الْمَدْرَسَةُ', think: 'ة → feminine.' },
      { head: 'Demonstrative', ar: 'هٰذِهِ الْمَدْرَسَةُ', think: 'Feminine: هٰذِهِ.' },
      { head: 'Pronoun + adj.', ar: 'هِيَ كَبِيرَةٌ', think: 'هِيَ + ة on the adjective.' },
      { head: 'Exception', ar: 'الشَّمْسُ حَارَّةٌ', think: 'No ة — but feminine!' },
    ],
    legend: ['w', 'e'], legendLabels: { w: 'MASCULINE', e: 'FEMININE' },
    model: '{e|هٰذِهِ} {e|مَدْرَسَتِي}. {e|هِيَ} {e|كَبِيرَةٌ} {e|وَجَمِيلَةٌ}. فِيهَا {w|مُعَلِّمٌ} {w|جَدِيدٌ} وَمُعَلِّمَةٌ خَبِيرَةٌ.',
    modelEn: 'This is my school. It is big and beautiful. In it there is a new (male) teacher and an expert (female) teacher.',
    notes: 'Website reading text. Draw arrows from each coloured word back to its noun (website task).',
  },
  models: [
    { ar: 'هٰذَا بَيْتِي. هُوَ كَبِيرٌ.', en: 'This is my house. It is big.', tip: 'Masculine: hādhā · huwa · no tāʾ marbūṭa.' },
    { ar: 'هٰذِهِ غُرْفَتِي. هِيَ صَغِيرَةٌ.', en: 'This is my room. It is small.', tip: 'Feminine: hādhihi · hiya · tāʾ marbūṭa.' },
    { ar: 'الشَّمْسُ حَارَّةٌ الْيَوْمَ.', en: 'The sun is hot today.', tip: 'Lexical feminine.' },
    { ar: 'وَصَلَتِ الْحَافِلَةُ.', en: 'The bus arrived.', tip: 'Feminine subject → ـَتْ on the verb.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · masculine or feminine?', title: 'Masculine or feminine?', ar: 'صَنِّفْ',
      categories: ['Masculine', 'Feminine'],
      items: [['كِتَابٌ', 0], ['مَدْرَسَةٌ', 1], ['شَمْسٌ', 1], ['قَمَرٌ', 0], ['حَمْزَةُ', 0], ['أَرْضٌ', 1], ['بَابٌ', 0], ['صَحْرَاءُ', 1], ['مُعَلِّمٌ', 0], ['أُمٌّ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type M or F for each card. Traps: شَمْسٌ · أَرْضٌ · أُمٌّ (feminine, no ة) and حَمْزَةُ (masculine, with ة).',
    },
  ],
  mistakes: [
    { wrong: 'سَيَّارَةٌ سَرِيعٌ', right: 'سَيَّارَةٌ سَرِيعَةٌ', why: 'A feminine noun takes a feminine adjective.' },
    { wrong: 'هٰذَا الْمَدْرَسَةُ', right: 'هٰذِهِ الْمَدْرَسَةُ', why: 'Feminine noun → هٰذِهِ.' },
    { wrong: 'الشَّمْسُ حَارٌّ', right: 'الشَّمْسُ حَارَّةٌ', why: 'shams is feminine, even without ة.' },
  ],
  hints: ['Is the noun feminine?', 'Which demonstrative?', 'ة or not — what is its gender?'],
  practiceQuiz: /Mastery/i, practicePick: [2, 4, 5, 6], practiceLabel: 'website mastery check questions 3, 5, 6 and 7',
  read: {
    title: 'My school and my teachers', label: 'website reading text, extended by the teacher',
    text: 'هٰذِهِ مَدْرَسَتِي. هِيَ كَبِيرَةٌ وَجَمِيلَةٌ. فِيهَا مُعَلِّمٌ جَدِيدٌ وَمُعَلِّمَةٌ خَبِيرَةٌ. الْمُعَلِّمُ مِصْرِيٌّ، وَهُوَ لَطِيفٌ. الْمُعَلِّمَةُ مِنَ الْمَغْرِبِ، وَهِيَ نَشِيطَةٌ. فِي الصَّبَاحِ تَصِلُ الْحَافِلَةُ، وَالشَّمْسُ حَارَّةٌ.',
    glossary: [['كَبِيرَةٌ', 'big (f.)'], ['خَبِيرَةٌ', 'expert (f.)'], ['مِصْرِيٌّ', 'Egyptian (m.)'], ['لَطِيفٌ', 'kind (m.)'], ['نَشِيطَةٌ', 'active (f.)'], ['تَصِلُ', 'arrives (f.)'], ['حَارَّةٌ', 'hot (f.)']],
    task: 'Website: underline every word that signals gender and draw an arrow to the noun it describes.',
    questions: [
      q('Why is it هِيَ in the second sentence?', ['It refers back to مَدْرَسَتِي (feminine).', 'Every sentence starts with هِيَ.', 'It refers to the teacher.'], 'Pronoun agrees with the head noun.'),
      q('Which adjective describes the MALE teacher?', ['جَدِيدٌ', 'خَبِيرَةٌ', 'نَشِيطَةٌ'], 'No ة: masculine.'),
      q('Why is the verb تَصِلُ (not يَصِلُ)?', ['الْحَافِلَةُ is feminine.', 'It is in the past.', 'It is plural.'], 'Feminine subject → تَـ.'),
      q('Why is it حَارَّةٌ?', ['شَمْسٌ is feminine.', 'All adjectives end in ة.', 'It is plural.'], 'A lexical feminine.'),
    ],
    qNote: 'The first three sentences are the website reading text; the last three are teacher-written to add pronouns, verbs and a lexical feminine. Questions teacher-written.',
  },
  speak: {
    title: 'Speaking: one masculine, one feminine', source: 'website speaking task',
    prompts: [
      { route: 'core', ar: 'صِفْ بَيْتَكَ وَمَدْرَسَتَكَ.' },
      { route: 'develop', ar: 'صِفْ شَخْصًا (رَجُلًا) وَشَخْصًا (امْرَأَةً) تَعْرِفُهُمَا.' },
      { route: 'stretch', ar: 'صِفِ الشَّمْسَ وَالْأَرْضَ وَالْقَمَرَ.' },
    ],
    stems: [
      { route: 'core', ar: 'هٰذَا بَيْتِي، هُوَ ______ . هٰذِهِ مَدْرَسَتِي، هِيَ ______ .' },
      { route: 'develop', ar: 'هٰذَا ______ ، هُوَ ______ . هٰذِهِ ______ ، هِيَ ______ .' },
      { route: 'stretch', ar: 'الشَّمْسُ ______ ، وَالْقَمَرُ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'صِفْ مُعَلِّمَكَ وَمُعَلِّمَتَكَ.', en: 'Describe your male and female teacher.' },
      { who: 'B', ar: 'هٰذَا مُعَلِّمِي، هُوَ لَطِيفٌ وَذَكِيٌّ. وَهٰذِهِ مُعَلِّمَتِي، هِيَ نَشِيطَةٌ وَصَبُورَةٌ.', en: 'This is my teacher; he is kind and clever. This is my (female) teacher; she is active and patient.' },
    ],
    notes: 'Website: describe one masculine and one feminine person or place with a demonstrative, a pronoun and two adjectives each. To a girl: صِفِي · بَيْتَكِ · مَدْرَسَتَكِ.',
  },
  write: {
    siteTask: 'Write 8–10 sentences describing your home, school or family. Include at least four masculine nouns and four feminine nouns.',
    core: { amount: '6 sentences', task: 'Three masculine and three feminine nouns, each with an adjective.', how: 'Masculine: no ة on the adjective. Feminine: add ة.' },
    develop: { amount: '8 sentences', task: 'Add هٰذَا / هٰذِهِ and هُوَ / هِيَ for each noun.', how: 'Check every word that refers back.' },
    stretch: { amount: '8–10 sentences', task: 'Website task: four masculine + four feminine nouns, including one lexical feminine and one ة → ت (غُرْفَتِي).', how: 'Draw arrows from each agreeing word to its noun.' },
  },
  frames: {
    core: [
      { en: 'This is my house. It is …', ar: 'هٰذَا بَيْتِي. هُوَ ______ .' },
      { en: 'This is my room. It is …', ar: 'هٰذِهِ غُرْفَتِي. هِيَ ______ .' },
      { en: 'My car is … (fast)', ar: 'سَيَّارَتُنَا ______ .' },
      { en: 'My book is … (new)', ar: 'كِتَابِي ______ .' },
    ],
    develop: [
      { en: 'My (male) teacher is …', ar: 'مُعَلِّمِي ______ .' },
      { en: 'My (female) teacher is …', ar: 'مُعَلِّمَتِي ______ .' },
      { en: 'The sun is …', ar: 'الشَّمْسُ ______ .' },
      { en: 'The bus arrived at …', ar: 'وَصَلَتِ الْحَافِلَةُ ______ .' },
    ],
    bank: ['كَبِيرٌ / كَبِيرَةٌ', 'صَغِيرٌ / صَغِيرَةٌ', 'جَمِيلٌ / جَمِيلَةٌ', 'نَظِيفٌ / نَظِيفَةٌ', 'سَرِيعٌ / سَرِيعَةٌ', 'لَطِيفٌ / لَطِيفَةٌ', 'حَارٌّ / حَارَّةٌ', 'هٰذَا', 'هٰذِهِ', 'هُوَ', 'هِيَ', 'مُرَتَّبٌ / مُرَتَّبَةٌ'],
  },
  stretchTask: {
    task: 'Website writing workshop: 8–10 sentences about your home, school or family with at least four masculine and four feminine nouns.',
    checklist: ['Four masculine nouns, each with an agreeing word.', 'Four feminine nouns, each with an agreeing word.', 'One lexical feminine (شَمْسٌ · أَرْضٌ · دَارٌ).', 'One ة → ت before a suffix (غُرْفَتِي).', 'A verb that agrees with a feminine subject.'],
    phrases: [['هٰذَا بَيْتِي', 'this is my house'], ['هٰذِهِ غُرْفَتِي', 'this is my room'], ['هِيَ مُرَتَّبَةٌ', 'it is tidy (f.)'], ['وَلٰكِنَّهَا صَغِيرَةٌ', 'but it is small'], ['الشَّمْسُ حَارَّةٌ', 'the sun is hot'], ['تَعْمَلُ أُمِّي طَبِيبَةً', 'my mother works as a doctor']],
  },
  model: {
    text: 'هٰذَا بَيْتِي. هُوَ كَبِيرٌ وَقَرِيبٌ مِنَ الْمَدْرَسَةِ. وَهٰذِهِ غُرْفَتِي. هِيَ صَغِيرَةٌ وَلٰكِنَّهَا مُرَتَّبَةٌ. أَبِي مُهَنْدِسٌ، وَهُوَ مَشْغُولٌ دَائِمًا. أُمِّي طَبِيبَةٌ، وَهِيَ تَعْمَلُ فِي مُسْتَشْفًى كَبِيرٍ. فِي حَدِيقَتِنَا شَجَرَةٌ عَالِيَةٌ، وَالشَّمْسُ حَارَّةٌ فِي الصَّيْفِ.',
    en: 'This is my house. It is big and near the school. And this is my room. It is small but tidy. My father is an engineer, and he is always busy. My mother is a doctor; she works in a big hospital. In our garden there is a tall tree, and the sun is hot in summer.',
    find: ['هٰذَا / هٰذِهِ', 'هُوَ / هِيَ', 'ة → ت', 'a feminine without ة'],
    source: 'teacher model built on the website model sentence',
    notes: 'Website model start: هٰذَا بَيْتِي. هُوَ كَبِيرٌ، وَهٰذِهِ غُرْفَتِي. هِيَ صَغِيرَةٌ وَلٰكِنَّهَا مُرَتَّبَةٌ. ة → ت: غُرْفَتِي · حَدِيقَتِنَا. Lexical feminine: الشَّمْسُ حَارَّةٌ.',
  },
  selfCheck: [
    { route: 'core', text: 'Each adjective matches its noun’s gender.' },
    { route: 'core', text: 'I used هٰذَا for masculine and هٰذِهِ for feminine.' },
    { route: 'develop', text: 'My pronouns (هُوَ / هِيَ) refer back correctly.' },
    { route: 'develop', text: 'My verbs agree with feminine subjects (ـَتْ · تَـ).' },
    { route: 'stretch', text: 'I wrote ة as ت before every suffix.' },
  ],
  exitPick: [0, 1, 3],
  masteryPick: [7],
  prep: {
    words: [['مُفْرَدٌ', 'singular (one)', '—'], ['مُثَنًّى', 'dual (exactly two)', '—'], ['جَمْعٌ', 'plural (three or more)', 'pl. جُمُوعٌ'], ['كِتَابَانِ', 'two books', 'كِتَابَيْنِ after فِي'], ['طَالِبَتَانِ', 'two female students', '—']],
    questionEn: 'How do you say “two books” and “two schools” in Arabic? Guess before next lesson!',
    questionAr: 'كِتَابٌ ← ______ · مَدْرَسَةٌ ← ______',
    homework: {
      core: 'Learn ten nouns with their gender; write each with an adjective.',
      develop: 'Write five pairs: هٰذَا … هُوَ … / هٰذِهِ … هِيَ …',
      stretch: 'Website writing workshop (8–10 sentences) and the website mastery check.',
    },
    wordsSource: 'The five words prepare GM-N-02 (website Nouns lesson 2: singular, dual and plural).',
  },
  remember: 'Remember: ة is a clue, not a rule · shams and arḍ are feminine · check EVERY word that refers back · ة becomes ت before a suffix.',
});

module.exports = { meta, slides };
