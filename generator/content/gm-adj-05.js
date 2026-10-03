'use strict';
/* GM-ADJ-05 · Negative Description with غَيْر — website: Mastery & Revision › Grammar › Adjectives › Lesson 5 (غَيْر = “not / non- / other
 * than”, followed by a genitive word in an iḍāfa-like structure — غَيْرُ مُمْكِنٍ · غَيْرُ مُنَاسِبٍ · غَيْرُ صَحِيحٍ; definiteness comes from the
 * following word — غَيْرُ الْمُمْكِنِ; case belongs to غَيْر: جَوَابٌ غَيْرُ صَحِيحٍ · جَوَابًا غَيْرَ صَحِيحٍ · فِي جَوَابٍ غَيْرِ صَحِيحٍ; clinic:
 * غَيْر is not frozen; the next word is never nominative). The website Entry Check is the Do Now (feedback in English); guided and mastery
 * checks repeat it, so quick check, practice and exit are teacher-written. Teacher-added: the word after غَيْر still matches the noun
 * in gender and number (فِكْرَةٌ غَيْرُ وَاضِحَةٍ · طُلَّابٌ غَيْرُ مُجْتَهِدِينَ), and the contrast with لَيْسَ. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-ADJ-05', fileTitle: 'Negative_Description_with_Ghayr', title: 'Negative Description with ghayr', arabic: 'النَّفْيُ الوَصْفِيُّ بِـ«غَيْر»',
  focus: 'Ghayr works like English “un-”, “in-” or “not”: ghayru mumkin = impossible. The word after ghayr is ALWAYS genitive (-in); ghayr itself takes the case of the noun it describes.',
  icon: 'FaBan',
});

const slides = G.gmLesson({
  code: 'GM-ADJ-05', site: 'grammar__04-adjectives__grammar-mastery-05-ghayr',
  support: `• Core: غَيْرُ + adjective in -in = “un- / not” (غَيْرُ مُمْكِنٍ · غَيْرُ صَحِيحٍ · غَيْرُ مُنَاسِبٍ). Develop: the adjective after غَيْر still matches the noun in gender (فِكْرَةٌ غَيْرُ وَاضِحَةٍ). Stretch: case on غَيْر changes with its position (‑u / ‑a / ‑i); definite contexts (غَيْرُ الصَّحِيحِ).
• Link to GM-N-07: “ghayr + word” is built like an iḍāfa — first word without tanwīn, second word genitive.
• Very high value for exams and opinions: غَيْرُ مُمْكِنٍ · غَيْرُ صِحِّيٍّ · غَيْرُ مُرِيحٍ · غَيْرُ مَسْمُوحٍ.`,
  teach: 'Meaning and structure; agreement; case on ghayr.',
  wedo: 'Build opposites, sort, repair.',
  next: { nextCode: 'GM-ADJ-06', nextTitle: 'Comparative and Superlative', nextAr: 'اِسْمُ التَّفْضِيلِ: أَفْعَلُ وَالْأَفْعَلُ' },
  doNow: {
    fb: { 0: 'The word after ghayr is genitive.', 1: 'Ghayr begins an iḍāfa-like negative description.', 2: 'After fī the whole description is genitive.', 3: 'Ghayr negates the description after it.' },
    keyIdea: { text: 'Ghayr = un- / not. The word after it is always genitive (-in).', ar: '{k|غَيْرُ} {e|مُمْكِنٍ} ‖ {k|غَيْرُ} {e|صَحِيحٍ}' },
    retrieves: 'The website Entry Check (all five questions) — it uses the ghayr words prepared at the end of GM-ADJ-04.',
  },
  objectives: ['Use ghayr to make negative descriptions (un-, in-, not).', 'Put the word after ghayr in the genitive.', 'Keep gender and number agreement after ghayr.', 'Change the case of ghayr with its position.'],
  routes: {
    core: ['I can say impossible, incorrect and unsuitable.', 'I put -in on the word after ghayr.'],
    develop: ['I write an unclear idea with a feminine adjective.', 'I use ghayr in sentences about opinions.'],
    stretch: ['I change ghayru / ghayra / ghayri by position.', 'I use ghayr in a definite phrase.'],
  },
  terms: {
    items: [
      { ar: 'غَيْرُ', en: 'not, un-, non-, other than', tr: 'ghayru', note: 'غَيْرُ مُمْكِنٍ' },
      { ar: 'مَجْرُورٌ', en: 'genitive (-i / -in)', note: 'the word after ghayr' },
      { ar: 'مُمْكِنٌ', en: 'possible', note: 'غَيْرُ مُمْكِنٍ = impossible' },
      { ar: 'صَحِيحٌ', en: 'correct', note: 'غَيْرُ صَحِيحٍ = incorrect' },
      { ar: 'مُنَاسِبٌ', en: 'suitable', note: 'غَيْرُ مُنَاسِبٍ = unsuitable' },
      { ar: 'وَاضِحٌ', en: 'clear', note: 'غَيْرُ وَاضِحٍ = unclear' },
    ],
  },
  explain: [
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · step 1 · meaning and structure (website)', title: 'Ghayr + genitive = “un- / not”', ar: 'الْمَعْنَى وَالتَّرْكِيبُ',
      points: [
        'Ghayr means “other than”, “not” or “non-” in adjective-like expressions (website).',
        'It is followed by a GENITIVE word, because the structure behaves like an iḍāfa (website).',
        'So ghayr itself has no tanwīn, and the word after it ends in -in.',
        'Arabic has no prefix “un-”: ghayr does that job.',
        'Use it after a noun, like an adjective, or as the predicate: “This is …”.',
      ],
      examples: [
        { ar: 'غَيْرُ مُمْكِنٍ', en: 'impossible / not possible', note: 'website' },
        { ar: 'غَيْرُ مُنَاسِبٍ', en: 'unsuitable', note: 'website' },
        { ar: 'غَيْرُ صَحِيحٍ', en: 'incorrect', note: 'website' },
        { ar: 'هَذَا الْحَلُّ غَيْرُ مُنَاسِبٍ.', en: 'This solution is unsuitable.', note: 'website · predicate' },
      ],
      callout: { kind: 'warn', head: 'WEBSITE CLINIC', text: 'Never put the word after ghayr in the nominative: ghayru mumkinin, not ghayru mumkinun.' },
      notes: 'STEP 1 (3 min) — website “Meaning and structure”. Link to iḍāfa (GM-N-07): ghayr is the first word, so no al- and no tanwīn; the second word is genitive.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · step 2 · ghayr after a noun · agreement · Develop', title: 'The word after ghayr still matches the noun', ar: 'الْمُطَابَقَةُ بَعْدَ «غَيْر»', ltr: true,
      cols: [{ label: 'Meaning', w: 3.4 }, { label: 'Arabic', w: 4.6, size: 24 }, { label: 'Notice', w: 4.33 }],
      rows: [
        { core: true, cells: ['unhealthy food', 'طَعَامٌ غَيْرُ صِحِّيٍّ', 'masculine (website)'] },
        { core: true, cells: ['an unclear idea', 'فِكْرَةٌ غَيْرُ وَاضِحَةٍ', 'feminine: + ة, still -in (website)'] },
        { core: true, cells: ['an uncomfortable chair', 'كُرْسِيٌّ غَيْرُ مُرِيحٍ', 'masculine'] },
        { cells: ['lazy (not hard-working) students', 'طُلَّابٌ غَيْرُ مُجْتَهِدِينَ', 'people, plural: genitive -īna'] },
        { cells: ['unsafe roads', 'طُرُقٌ غَيْرُ آمِنَةٍ', 'things → feminine singular'] },
      ],
      foot: 'Ghayr copies the CASE of the noun; the word after it copies the GENDER and NUMBER of the noun but stays genitive.',
      notes: 'STEP 2 (3 min) — website model bank, plus teacher-added rows. All the ADJ-01 and ADJ-02 agreement rules still apply to the word after ghayr.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · step 3 · case belongs to ghayr (website) · Stretch', title: 'Ghayr changes; the next word stays genitive', ar: 'الْإِعْرَابُ عَلَى «غَيْر»', ltr: true,
      cols: [{ label: 'Position', w: 3.0 }, { label: 'Arabic (website)', w: 5.4, size: 24 }, { label: 'Ending on ghayr', w: 3.93 }],
      rows: [
        { core: true, cells: ['describing a subject / predicate', 'هَذَا جَوَابٌ غَيْرُ صَحِيحٍ.', 'ghayru (-u)'] },
        { cells: ['describing an object', 'رَأَيْتُ جَوَابًا غَيْرَ صَحِيحٍ.', 'ghayra (-a)'] },
        { cells: ['after a preposition', 'فَكَّرْتُ فِي جَوَابٍ غَيْرِ صَحِيحٍ.', 'ghayri (-i)'] },
        { cells: ['definite context', 'قَرَأْتُ الْخَبَرَ غَيْرَ الصَّحِيحِ.', 'the next word takes al-'] },
      ],
      foot: 'Website: the position changes the ending on ghayr; the word after it remains genitive in every row.',
      notes: 'STEP 3 (3 min) — website “Case belongs to ghayr” and “Definiteness”. Stretch focus; Core needs only the first row. Contrast with laysa: لَيْسَ الْجَوَابُ صَحِيحًا (“the answer is not correct”) is a verb sentence; غَيْرُ صَحِيحٍ is a description.',
    },
  ],
  quick: [
    q('How do you say “unclear”?', ['غَيْرُ وَاضِحٍ', 'غَيْرُ وَاضِحٌ', 'غَيْرٌ وَاضِحٌ'], 'Ghayr + genitive.'),
    q('Choose “an unhealthy drink”.', ['مَشْرُوبٌ غَيْرُ صِحِّيٍّ', 'مَشْرُوبٌ غَيْرُ صِحِّيٌّ', 'غَيْرُ مَشْرُوبٍ صِحِّيٍّ'], 'Noun first, then ghayr + genitive.'),
    q('Choose “an uncomfortable bed (m.)”.', ['سَرِيرٌ غَيْرُ مُرِيحٍ', 'سَرِيرٌ غَيْرُ مُرِيحَةٍ', 'سَرِيرٌ غَيْرَ مُرِيحٌ'], 'Masculine noun → masculine word after ghayr.'),
    q('Choose “an incorrect answer (f.)”.', ['إِجَابَةٌ غَيْرُ صَحِيحَةٍ', 'إِجَابَةٌ غَيْرُ صَحِيحٍ', 'إِجَابَةٌ غَيْرُ صَحِيحَةٌ'], 'Feminine and genitive.'),
  ],
  quickNote: 'teacher-written hinge questions on the website’s three steps.',
  ido: {
    title: 'Watch me build a negative description',
    steps: [
      { head: 'Positive', ar: 'الطَّرِيقُ آمِنٌ', think: 'The road is safe.' },
      { head: 'Add ghayr', ar: 'غَيْرُ', think: 'Ghayr takes -u here.' },
      { head: 'Genitive', ar: 'غَيْرُ آمِنٍ', think: 'Next word → -in.' },
      { head: 'Sentence', ar: 'الطَّرِيقُ غَيْرُ آمِنٍ', think: 'The road is unsafe.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'GHAYR', e: 'GENITIVE WORD' },
    model: 'الطَّرِيقُ إِلَى الْمَدْرَسَةِ {k|غَيْرُ} {e|آمِنٍ} فِي الشِّتَاءِ، وَالْحَافِلَةُ {k|غَيْرُ} {e|مُرِيحَةٍ}، لَكِنَّ الرِّحْلَةَ لَيْسَتْ طَوِيلَةً.',
    modelEn: 'The road to school is unsafe in winter, and the bus is uncomfortable, but the journey is not long.',
    notes: 'Show the change from positive to negative. Point to مُرِيحَةٍ: feminine (the bus is feminine) and genitive. The final clause uses laysa — contrast it briefly.',
  },
  models: [
    { ar: 'هَذَا غَيْرُ مُمْكِنٍ!', en: 'This is impossible!', tip: 'Website model bank.' },
    { ar: 'الطَّعَامُ السَّرِيعُ غَيْرُ صِحِّيٍّ.', en: 'Fast food is unhealthy.', tip: 'Great for opinions.' },
    { ar: 'هَذِهِ فِكْرَةٌ غَيْرُ وَاضِحَةٍ.', en: 'This is an unclear idea.', tip: 'Website model bank: feminine.' },
    { ar: 'التَّدْخِينُ غَيْرُ مَسْمُوحٍ هُنَا.', en: 'Smoking is not allowed here.', tip: 'Signs and rules.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 2, eyebrow: 'We do · build the opposite · say it aloud', title: 'Make it negative with ghayr', ar: 'اعْكِسِ الْمَعْنَى', ltr: true, stage: 'wedo',
      cols: [{ label: 'Positive', w: 3.4, size: 24 }, { label: 'Meaning', w: 3.0 }, { label: 'Negative', w: 5.93, size: 24 }],
      rows: [
        { core: true, cells: ['مُمْكِنٌ', 'possible', 'غَيْرُ مُمْكِنٍ'] },
        { core: true, cells: ['مُهِمٌّ', 'important', 'غَيْرُ مُهِمٍّ'] },
        { core: true, cells: ['مُفِيدٌ', 'useful', 'غَيْرُ مُفِيدٍ'] },
        { cells: ['قِصَّةٌ مُمْتِعَةٌ', 'an enjoyable story', 'قِصَّةٌ غَيْرُ مُمْتِعَةٍ'] },
        { cells: ['لَاعِبُونَ مَشْهُورُونَ', 'famous players', 'لَاعِبُونَ غَيْرُ مَشْهُورِينَ'] },
      ],
      foot: 'Every word after ghayr ends in -in (or -īna for a masculine plural) — and still matches the noun’s gender and number.',
      notes: 'WE DO (2 min). Cover the last column; students say it first. The last row (Stretch) shows the genitive plural -īna.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · correct or not?', title: 'Is the ghayr phrase correct?', ar: 'صَحِيحٌ أَمْ خَطَأٌ؟',
      categories: ['Correct', 'Wrong'],
      items: [['غَيْرُ صَحِيحٍ', 0], ['غَيْرُ صَحِيحٌ', 1], ['فِكْرَةٌ غَيْرُ جَيِّدَةٍ', 0], ['فِكْرَةٌ غَيْرُ جَيِّدٍ', 1], ['غَيْرُ مُنَاسِبٍ', 0], ['غَيْرٌ مُنَاسِبٌ', 1], ['يَوْمٌ غَيْرُ عَادِيٍّ', 0], ['الْغَيْرُ مُمْكِنٍ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type C or W, then explain each wrong one: nominative after ghayr; wrong gender; tanwīn on ghayr; al- on ghayr.',
    },
  ],
  mistakes: [
    { wrong: 'هَذَا غَيْرُ مُمْكِنٌ.', right: 'هَذَا غَيْرُ مُمْكِنٍ.', why: 'The word after ghayr is genitive (website clinic).' },
    { wrong: 'لُغَةٌ غَيْرُ سَهْلٍ', right: 'لُغَةٌ غَيْرُ سَهْلَةٍ', why: 'Language is feminine — match the gender.' },
    { wrong: 'قَرَأْتُ قِصَّةً غَيْرُ مُمْتِعَةٍ.', right: 'قَرَأْتُ قِصَّةً غَيْرَ مُمْتِعَةٍ.', why: 'Describing an object → ghayra (Stretch).' },
  ],
  hints: ['Genitive after ghayr?', 'Is the noun feminine?', 'What case is the noun?'],
  practice: [
    q('Choose “The weather is unsuitable for a picnic.”', ['الْجَوُّ غَيْرُ مُنَاسِبٍ لِلنُّزْهَةِ.', 'الْجَوُّ غَيْرُ مُنَاسِبٌ لِلنُّزْهَةِ.', 'الْجَوُّ غَيْرٌ مُنَاسِبٌ لِلنُّزْهَةِ.'], 'Ghayr + genitive.'),
    q('Choose “an unimportant question (m.)”.', ['سُؤَالٌ غَيْرُ مُهِمٍّ', 'سُؤَالٌ غَيْرُ مُهِمَّةٍ', 'غَيْرُ سُؤَالٍ مُهِمٍّ'], 'Masculine; noun first.'),
    q('Choose “unsafe streets”.', ['شَوَارِعُ غَيْرُ آمِنَةٍ', 'شَوَارِعُ غَيْرُ آمِنِينَ', 'شَوَارِعُ غَيْرُ آمِنَةٌ'], 'Things → feminine singular, genitive.'),
    q('Choose “I bought an unhealthy meal.”', ['اشْتَرَيْتُ وَجْبَةً غَيْرَ صِحِّيَّةٍ.', 'اشْتَرَيْتُ وَجْبَةً غَيْرُ صِحِّيَّةٍ.', 'اشْتَرَيْتُ وَجْبَةً غَيْرَ صِحِّيَّةً.'], 'Object → ghayra; next word genitive.'),
  ],
  practiceLabel: 'teacher-written practice on the website rules',
  read: {
    title: 'Not everything is perfect', label: 'website reading text, extended by the teacher',
    text: 'فِي مَدِينَتِي أَمَاكِنُ جَمِيلَةٌ وَشَوَارِعُ وَاسِعَةٌ. هَذِهِ الْمَدْرَسَةُ الْجَدِيدَةُ قَرِيبَةٌ، وَذَلِكَ الْمَتْحَفُ الْقَدِيمُ مُثِيرٌ لِلِاهْتِمَامِ. لَكِنَّ الْمَوَاصَلَاتِ غَيْرُ مُرِيحَةٍ، وَمَوْقِفَ السَّيَّارَاتِ غَيْرُ كَافٍ. الطَّعَامُ فِي السُّوقِ لَذِيذٌ، لَكِنَّهُ غَيْرُ صِحِّيٍّ أَحْيَانًا.',
    glossary: [['أَمَاكِنُ', 'places'], ['مُثِيرٌ لِلِاهْتِمَامِ', 'interesting'], ['الْمَوَاصَلَاتِ', 'transport'], ['مُرِيحَةٍ', 'comfortable'], ['مَوْقِفَ السَّيَّارَاتِ', 'car park'], ['كَافٍ', 'enough'], ['صِحِّيٍّ', 'healthy']],
    task: 'Website: underline each adjective and every ghayr phrase; label the agreement and the genitive.',
    questions: [
      q('What does the transport sentence mean?', ['The transport is uncomfortable.', 'The transport is comfortable.', 'There is no transport.'], 'Ghayr = un-.'),
      q('Why is the word after ghayr feminine in the transport sentence?', ['Transport here is a non-human plural.', 'It is always feminine.', 'It is a mistake.'], 'Non-human plural → feminine singular.'),
      q('What does غَيْرُ كَافٍ mean?', ['not enough', 'very enough', 'other places'], 'Ghayr + kāfin.'),
      q('What is true about the food?', ['It is tasty but sometimes unhealthy.', 'It is never tasty.', 'It is always healthy.'], 'لَذِيذٌ … غَيْرُ صِحِّيٍّ أَحْيَانًا.'),
    ],
    qNote: 'The first two sentences are the website text; the rest is teacher-written. Questions teacher-written.',
  },
  speak: {
    title: 'Speaking: what is not good?', source: 'website speaking task (45–60 seconds)',
    prompts: [
      { route: 'core', ar: 'مَا الطَّعَامُ غَيْرُ الصِّحِّيِّ فِي رَأْيِكَ؟' },
      { route: 'develop', ar: 'مَاذَا فِي مَدِينَتِكَ غَيْرُ مُنَاسِبٍ لِلشَّبَابِ؟' },
      { route: 'stretch', ar: 'هَلِ الْهَاتِفُ فِي الصَّفِّ مُفِيدٌ أَمْ غَيْرُ مُفِيدٍ؟ لِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'فِي رَأْيِي، ______ غَيْرُ صِحِّيٍّ.' },
      { route: 'develop', ar: 'فِي مَدِينَتِي ______ غَيْرُ ______ .' },
      { route: 'stretch', ar: 'أَعْتَقِدُ أَنَّ الْهَاتِفَ غَيْرُ ______ لِأَنَّ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'هَلِ الْوَجَبَاتُ السَّرِيعَةُ صِحِّيَّةٌ؟', en: 'Are fast-food meals healthy?' },
      { who: 'B', ar: 'لَا، هِيَ غَيْرُ صِحِّيَّةٍ لِأَنَّ فِيهَا دُهُونًا كَثِيرَةً، لَكِنَّهَا لَذِيذَةٌ!', en: 'No, they are unhealthy because they have a lot of fat — but they are tasty!' },
    ],
    notes: 'Website: 45–60 seconds with six accurate structures. Excellent for IGCSE opinion questions — insist on the genitive after ghayr.',
  },
  write: {
    siteTask: 'Write 90–120 words describing a person, place, object or experience, with at least eight target adjective structures, underlined.',
    core: { amount: '6 sentences', task: 'Six sentences with ghayr + a genitive adjective.', how: 'impossible · incorrect · unhealthy …' },
    develop: { amount: '8 sentences', task: 'Use ghayr after masculine, feminine and plural nouns.', how: 'Match gender; keep -in.' },
    stretch: { amount: '90–120 words', task: 'Website task: the good and bad sides of your town or school, with ghayr as subject, object and after a preposition.', how: 'ghayru · ghayra · ghayri.' },
  },
  frames: {
    core: [
      { en: 'This is impossible.', ar: 'هَذَا غَيْرُ ______ .' },
      { en: '… is unhealthy.', ar: '______ غَيْرُ صِحِّيٍّ.' },
      { en: 'The answer is incorrect.', ar: 'الْجَوَابُ غَيْرُ ______ .' },
      { en: 'My chair is uncomfortable.', ar: 'كُرْسِيِّي غَيْرُ ______ .' },
    ],
    develop: [
      { en: 'The bus is uncomfortable.', ar: 'الْحَافِلَةُ غَيْرُ ______ .' },
      { en: 'This is an unclear idea.', ar: 'هَذِهِ فِكْرَةٌ غَيْرُ ______ .' },
      { en: 'The streets are unsafe.', ar: 'الشَّوَارِعُ غَيْرُ ______ .' },
      { en: '… is not allowed in school.', ar: '______ غَيْرُ مَسْمُوحٍ فِي الْمَدْرَسَةِ.' },
    ],
    bank: ['مُمْكِنٍ', 'صَحِيحٍ', 'صِحِّيٍّ', 'مُرِيحٍ', 'مُرِيحَةٍ', 'وَاضِحَةٍ', 'آمِنَةٍ', 'مُفِيدٍ', 'مُهِمٍّ', 'مَسْمُوحٍ', 'كَافٍ', 'مُنَاسِبٍ'],
  },
  stretchTask: {
    task: 'Website extended writing workshop: 90–120 words on the good and bad sides of a place or experience, with at least eight target adjective structures.',
    checklist: ['Four ghayr phrases with a genitive word.', 'One ghayr phrase after a feminine noun.', 'One after a plural (people or things).', 'One ghayr describing an object (ghayra).', 'One sentence with laysa for contrast.'],
    phrases: [['غَيْرُ مُمْكِنٍ', 'impossible'], ['غَيْرُ صِحِّيٍّ', 'unhealthy'], ['فِكْرَةٌ غَيْرُ وَاضِحَةٍ', 'an unclear idea'], ['شَوَارِعُ غَيْرُ آمِنَةٍ', 'unsafe streets'], ['غَيْرُ مَسْمُوحٍ', 'not allowed'], ['لَيْسَ … صَحِيحًا', 'is not correct']],
  },
  model: {
    text: 'أُحِبُّ مَدْرَسَتِي، لَكِنَّ بَعْضَ الْأَشْيَاءِ غَيْرُ مُنَاسِبَةٍ. الْكَرَاسِيُّ فِي الصَّفِّ غَيْرُ مُرِيحَةٍ، وَالْمَقْصَفُ يَبِيعُ طَعَامًا غَيْرَ صِحِّيٍّ. اسْتِخْدَامُ الْهَاتِفِ فِي الصَّفِّ غَيْرُ مَسْمُوحٍ، وَهَذَا قَرَارٌ صَحِيحٌ فِي رَأْيِي. مَعَ ذَلِكَ، الْمُعَلِّمُونَ لُطَفَاءُ، وَالدُّرُوسُ لَيْسَتْ صَعْبَةً.',
    en: 'I love my school, but some things are unsuitable. The chairs in class are uncomfortable, and the tuck shop sells unhealthy food. Using a phone in class is not allowed, and in my opinion that is a correct decision. Even so, the teachers are kind, and the lessons are not difficult.',
    find: ['ghayr + genitive', 'feminine after ghayr', 'ghayra (object)', 'laysa contrast'],
    source: 'teacher model on the website writing workshop',
  },
  selfCheck: [
    { route: 'core', text: 'Every word after ghayr ends in -in (or -īna).' },
    { route: 'core', text: 'Ghayr has no al- and no tanwīn.' },
    { route: 'develop', text: 'The word after ghayr matches the noun’s gender.' },
    { route: 'develop', text: 'Plural things use the feminine singular form.' },
    { route: 'stretch', text: 'Ghayr takes -u, -a or -i from its position.' },
  ],
  exit: [
    q('How do you say “incorrect”?', ['غَيْرُ صَحِيحٍ', 'غَيْرُ صَحِيحٌ', 'لَا صَحِيحٌ'], 'Ghayr + genitive.'),
    q('Choose “an unclear picture (f.)”.', ['صُورَةٌ غَيْرُ وَاضِحَةٍ', 'صُورَةٌ غَيْرُ وَاضِحٍ', 'صُورَةٌ غَيْرُ وَاضِحَةٌ'], 'Feminine and genitive.'),
    q('Choose “This is not allowed.”', ['هَذَا غَيْرُ مَسْمُوحٍ.', 'هَذَا غَيْرٌ مَسْمُوحٌ.', 'هَذَا الْغَيْرُ مَسْمُوحٍ.'], 'No tanwīn or al- on ghayr.'),
  ],
  mastery: false,
  prep: {
    words: [['أَكْبَرُ', 'bigger', 'from كَبِيرٌ'], ['أَصْغَرُ', 'smaller', 'from صَغِيرٌ'], ['أَطْوَلُ', 'taller, longer', 'from طَوِيلٌ'], ['مِنْ', 'than', 'أَكْبَرُ مِنْ'], ['الْأَكْبَرُ', 'the biggest', '—']],
    questionEn: 'From kabīr we get akbar (bigger). What do you think comes from ṭawīl and ṣaghīr?',
    questionAr: 'كَبِيرٌ · أَكْبَرُ — طَوِيلٌ · ______',
    homework: {
      core: 'Write ten ghayr expressions with their English meaning.',
      develop: 'Write eight opinion sentences using ghayr with different nouns.',
      stretch: 'Website writing workshop on the good and bad sides of your town.',
    },
    wordsSource: 'The five words prepare GM-ADJ-06 (website Adjectives lesson 6: comparative and superlative).',
  },
  remember: 'Remember: ghayr = un- / not · the word after it is always genitive · it still matches the noun’s gender and number · ghayr takes the noun’s case · no al-, no tanwīn on ghayr.',
});

module.exports = { meta, slides };
