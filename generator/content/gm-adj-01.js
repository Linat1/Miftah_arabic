'use strict';
/* GM-ADJ-01 · Masculine and Feminine Singular — website: Mastery & Revision › Grammar › Adjectives › Lesson 1 (the adjective agrees with
 * its noun in gender; many feminine adjectives add ـَةٌ; do not add ة mechanically — أَحْمَرُ / حَمْرَاءُ; phrase or sentence:
 * بَيْتٌ كَبِيرٌ · الْبَيْتُ كَبِيرٌ · الْبَيْتُ الْكَبِيرُ; misconception clinic: ة on the noun instead of the adjective, feminine nouns
 * without ة such as شَمْسٌ, phrase vs sentence). The website’s Entry Check is used for the Do Now (feedback rewritten in English); its
 * guided and mastery checks repeat the same four items, so the quick check, practice and exit ticket are teacher-written on the website
 * rules. The -ān / -ā pair (عَطْشَانُ / عَطْشَى) is a teacher-added Stretch example of “not just ة”. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-ADJ-01', fileTitle: 'Masculine_and_Feminine_Singular', title: 'Masculine and Feminine Singular', arabic: 'مُطَابَقَةُ الصِّفَةِ فِي الْمُذَكَّرِ وَالْمُؤَنَّثِ',
  focus: 'An Arabic adjective comes AFTER its noun and matches it: masculine noun → masculine adjective, feminine noun → feminine adjective (usually + tāʾ marbūṭa). Check the noun first — and notice whether you have made a phrase or a sentence.',
  icon: 'FaVenusMars',
});

const slides = G.gmLesson({
  code: 'GM-ADJ-01', site: 'grammar__04-adjectives__grammar-mastery-01-gender-agreement',
  support: `• Core: noun first, then adjective; feminine noun → adjective + ة (وَلَدٌ صَغِيرٌ · بِنْتٌ صَغِيرَةٌ). Develop: phrase vs sentence (بَيْتٌ كَبِيرٌ / الْبَيْتُ كَبِيرٌ / الْبَيْتُ الْكَبِيرُ); feminine nouns without ة (شَمْسٌ · أُمٌّ · بِنْتٌ). Stretch: feminine forms that are not “+ ة” — أَحْمَرُ حَمْرَاءُ (taught fully in ADJ-03) and عَطْشَانُ عَطْشَى.
• Website “Why this matters”: adjective control affects every Cambridge topic — people, clothes, homes, school, travel, weather, work and opinions.
• This lesson revisits GM-N-01 (noun gender) and GM-ART-02 (definiteness agreement) — keep those links visible.`,
  teach: 'The agreement principle; not just ة; phrase or sentence.',
  wedo: 'Sort masculine / feminine, transform, repair.',
  next: { nextCode: 'GM-ADJ-02', nextTitle: 'Adjective Agreement with Plurals', nextAr: 'مُطَابَقَةُ الصِّفَةِ مَعَ الْجُمُوعِ' },
  doNow: {
    fb: { 0: 'Girl is feminine singular.', 1: 'Book is masculine singular.', 2: 'The predicate agrees with the feminine noun car.', 3: 'Both words are definite in the phrase.' },
    keyIdea: { text: 'Find the noun first. Masculine noun → masculine adjective; feminine noun → feminine adjective (usually + tāʾ marbūṭa).', ar: 'وَلَدٌ {k|صَغِيرٌ} ‖ بِنْتٌ {e|صَغِيرَةٌ}' },
    retrieves: 'The website Entry Check (all five questions) — it uses the five words prepared at the end of GM-N-07.',
  },
  objectives: ['Explain how an adjective agrees with its noun in gender.', 'Form the feminine adjective by adding tāʾ marbūṭa.', 'Recognise feminine nouns without tāʾ marbūṭa and adjectives that change shape.', 'Tell a noun phrase from a nominal sentence.'],
  routes: {
    core: ['I put the adjective after the noun.', 'I add tāʾ marbūṭa for a feminine noun.'],
    develop: ['I know sun, mother and girl are feminine.', 'I can say “a big house”, “the house is big”, “the big house”.'],
    stretch: ['I know some feminines change shape (red, thirsty).', 'I explain each agreement in grammar words.'],
  },
  terms: {
    items: [
      { ar: 'الصِّفَةُ', en: 'adjective', note: 'كَبِيرٌ · جَمِيلَةٌ' },
      { ar: 'الْمَوْصُوفُ', en: 'the noun described', note: 'بَيْتٌ كَبِيرٌ' },
      { ar: 'مُذَكَّرٌ', en: 'masculine', note: 'وَلَدٌ صَغِيرٌ' },
      { ar: 'مُؤَنَّثٌ', en: 'feminine', note: 'بِنْتٌ صَغِيرَةٌ' },
      { ar: 'الْمُطَابَقَةُ', en: 'agreement (matching)', note: 'gender · number · definiteness · case' },
      { ar: 'جُمْلَةٌ اسْمِيَّةٌ', en: 'nominal sentence', note: 'الْبَيْتُ كَبِيرٌ' },
    ],
  },
  explain: [
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · step 1 · the agreement principle (website)', title: 'The noun decides the adjective', ar: 'الصِّفَةُ تَتْبَعُ الْمَوْصُوفَ',
      points: [
        'An Arabic adjective describes a noun and normally agrees with it in gender (website).',
        'The adjective comes AFTER the noun — the opposite of English.',
        'Masculine noun → masculine adjective (no tāʾ marbūṭa).',
        'Feminine noun → feminine adjective: the classroom shortcut is to add -atun (tāʾ marbūṭa).',
        'The adjective also copies the case ending: -un · -an · -in, like its noun.',
      ],
      examples: [
        { ar: 'وَلَدٌ صَغِيرٌ · بِنْتٌ صَغِيرَةٌ', en: 'a small boy · a small girl', note: 'website' },
        { ar: 'بَيْتٌ كَبِيرٌ · مَدْرَسَةٌ كَبِيرَةٌ', en: 'a big house · a big school', note: 'website' },
        { ar: 'طَالِبٌ مُجْتَهِدٌ · طَالِبَةٌ مُجْتَهِدَةٌ', en: 'a hard-working student (m. · f.)', note: 'website' },
        { ar: 'رَأَيْتُ بِنْتًا ذَكِيَّةً.', en: 'I saw a clever girl.', note: 'case copied too' },
      ],
      callout: { text: 'Website quality check: identify the head noun FIRST, then check gender, number and definiteness.' },
      notes: 'STEP 1 (3 min) — website “The agreement principle”. Use the arrow routine: point at the noun, then draw an arrow to the adjective and say “matches”.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · step 2 · do not add tāʾ marbūṭa mechanically (website)', title: 'Masculine, feminine — and the traps', ar: 'لَا تُضِفِ التَّاءَ آلِيًّا', ltr: true,
      cols: [{ label: 'Meaning', w: 3.0 }, { label: 'Masculine', w: 3.0, size: 24 }, { label: 'Feminine', w: 3.0, size: 24 }, { label: 'Notice', w: 3.33 }],
      rows: [
        { core: true, cells: ['beautiful', 'جَمِيلٌ', 'جَمِيلَةٌ', 'regular: + ة (website)'] },
        { core: true, cells: ['fast', 'سَرِيعٌ', 'سَرِيعَةٌ', 'regular: + ة (website)'] },
        { core: true, cells: ['clever', 'ذَكِيٌّ', 'ذَكِيَّةٌ', 'keep the shadda'] },
        { cells: ['red', 'أَحْمَرُ', 'حَمْرَاءُ', 'shape changes — colours, ADJ-03'] },
        { cells: ['thirsty', 'عَطْشَانُ', 'عَطْشَى', '-ān → -ā (also hungry: jawʿān → jawʿā)'] },
      ],
      foot: 'The base rule works often, but always notice the REAL feminine form when you learn a new adjective (website).',
      notes: 'STEP 2 (3 min) — website “Do not add ة mechanically”. Core learns the first three rows; the last two rows are Stretch recognition only.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · step 3 · phrase or sentence? (website) · Develop', title: 'Same words, three meanings', ar: 'عِبَارَةٌ أَمْ جُمْلَةٌ؟', ltr: true,
      cols: [{ label: 'Arabic', w: 4.2, size: 26 }, { label: 'Meaning', w: 3.8 }, { label: 'Why', w: 4.33 }],
      rows: [
        { core: true, cells: ['بَيْتٌ كَبِيرٌ', 'a big house', 'both indefinite → phrase'] },
        { core: true, cells: ['الْبَيْتُ كَبِيرٌ.', 'The house is big.', 'definite noun + indefinite adjective → SENTENCE'] },
        { core: true, cells: ['الْبَيْتُ الْكَبِيرُ', 'the big house', 'both definite → phrase'] },
        { cells: ['السَّيَّارَةُ جَدِيدَةٌ.', 'The car is new.', 'sentence — still feminine agreement'] },
        { cells: ['السَّيَّارَةُ الْجَدِيدَةُ', 'the new car', 'phrase — al- on both'] },
      ],
      foot: 'Agreement in gender is the same in all three — only definiteness changes the meaning (website).',
      notes: 'STEP 3 (3 min) — website “Phrase or sentence?”. Ask: “Is there an is/are in English?” If yes, the adjective has NO al-.',
    },
  ],
  quick: [
    q('The sun is feminine. Choose its adjective.', ['حَارَّةٌ', 'حَارٌّ', 'حَارُّونَ'], 'Sun is feminine without ة — the adjective still takes ة.'),
    q('Choose “a fast car”.', ['سَيَّارَةٌ سَرِيعَةٌ', 'سَيَّارَةٌ سَرِيعٌ', 'سَيَّارَةٌ السَّرِيعَةُ'], 'Feminine and indefinite.'),
    q('What does الْوَلَدُ ذَكِيٌّ mean?', ['The boy is clever.', 'the clever boy', 'a clever boy'], 'Definite noun + indefinite adjective = sentence.'),
    q('Which pair is correct?', ['قَمِيصٌ جَمِيلٌ', 'قَمِيصَةٌ جَمِيلَةٌ', 'قَمِيصٌ جَمِيلَةٌ'], 'Add ة to the adjective only when the noun is feminine — never to the noun.'),
  ],
  quickNote: 'teacher-written hinge questions on the website’s three steps.',
  ido: {
    title: 'Watch me check the noun first',
    steps: [
      { head: 'Noun', ar: 'الْمَدِينَةُ', think: 'Ends in ة → feminine.' },
      { head: 'Definite?', ar: 'الْمَدِينَةُ', think: 'Yes — al-.' },
      { head: 'Phrase', ar: 'الْمَدِينَةُ الْجَمِيلَةُ', think: 'al- + ة on the adjective.' },
      { head: 'Sentence', ar: 'الْمَدِينَةُ جَمِيلَةٌ.', think: 'No al- → “is”.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'NOUN', e: 'ADJECTIVE' },
    model: 'أَسْكُنُ فِي {k|مَدِينَةٍ} {e|جَمِيلَةٍ}. {k|بَيْتِي} {e|صَغِيرٌ}، لَكِنَّ {k|الْحَدِيقَةَ} {e|كَبِيرَةٌ}.',
    modelEn: 'I live in a beautiful city. My house is small, but the garden is big.',
    notes: 'Narrate the checklist each time: “Noun? Gender? Definite? Case?” Point out مَدِينَةٍ جَمِيلَةٍ — the adjective copies the -in after fī.',
  },
  models: [
    { ar: 'وَلَدٌ ذَكِيٌّ وَبِنْتٌ ذَكِيَّةٌ', en: 'a clever boy and a clever girl', tip: 'Website model bank.' },
    { ar: 'سَيَّارَةٌ سَرِيعَةٌ', en: 'a fast car', tip: 'Website model bank.' },
    { ar: 'طَعَامٌ لَذِيذٌ', en: 'delicious food', tip: 'Website model bank.' },
    { ar: 'الشَّمْسُ حَارَّةٌ الْيَوْمَ.', en: 'The sun is hot today.', tip: 'Feminine noun without ة.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · masculine or feminine noun?', title: 'Which adjective form?', ar: 'مُذَكَّرٌ أَمْ مُؤَنَّثٌ؟',
      categories: ['Masculine adjective', 'Feminine adjective (+ ة)'],
      items: [['كِتَابٌ', 0], ['شَمْسٌ', 1], ['قَلَمٌ', 0], ['أُمٌّ', 1], ['بَابٌ', 0], ['مَدْرَسَةٌ', 1], ['يَوْمٌ', 0], ['بِنْتٌ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type M or F. Traps: sun, mother and girl are feminine without ة (GM-N-01).',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'We do · transformation drill (website) · say it aloud', title: 'Change the noun, change the adjective', ar: 'حَوِّلْ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Start', w: 4.0, size: 24 }, { label: 'Change', w: 3.2 }, { label: 'Result', w: 5.13, size: 24 }],
      rows: [
        { core: true, cells: ['طَالِبٌ نَشِيطٌ', '→ female student', 'طَالِبَةٌ نَشِيطَةٌ'] },
        { core: true, cells: ['مُعَلِّمَةٌ لَطِيفَةٌ', '→ male teacher', 'مُعَلِّمٌ لَطِيفٌ'] },
        { core: true, cells: ['بَيْتٌ جَدِيدٌ', '→ make it “the …”', 'الْبَيْتُ الْجَدِيدُ'] },
        { cells: ['الْغُرْفَةُ الْوَاسِعَةُ', '→ make it a sentence', 'الْغُرْفَةُ وَاسِعَةٌ.'] },
        { cells: ['قَمِيصٌ أَحْمَرُ', '→ a red bag (f.)', 'حَقِيبَةٌ حَمْرَاءُ'] },
      ],
      foot: 'Website drill: change one feature of the noun, then change EVERY adjective feature it controls — and explain the change in grammar words.',
      notes: 'WE DO (2 min) — reveal row by row. For each, ask a student to name the feature: gender / definiteness / phrase vs sentence.',
    },
  ],
  mistakes: [
    { wrong: 'بِنْتٌ جَمِيلٌ', right: 'بِنْتٌ جَمِيلَةٌ', why: 'Girl is feminine → feminine adjective.' },
    { wrong: 'الشَّمْسُ حَارٌّ.', right: 'الشَّمْسُ حَارَّةٌ.', why: 'Sun is feminine without ة.' },
    { wrong: 'قَلَمَةٌ جَدِيدَةٌ', right: 'قَلَمٌ جَدِيدٌ', why: 'Do not add ة to the noun (website clinic).' },
  ],
  hints: ['Is girl masculine?', 'Is sun feminine?', 'Did you change the noun?'],
  practice: [
    q('Choose “an old city”.', ['مَدِينَةٌ قَدِيمَةٌ', 'مَدِينَةٌ قَدِيمٌ', 'الْمَدِينَةُ قَدِيمَةٌ'], 'Feminine, indefinite.'),
    q('Choose “The food is delicious.”', ['الطَّعَامُ لَذِيذٌ.', 'الطَّعَامُ اللَّذِيذُ', 'طَعَامٌ لَذِيذٌ'], 'A sentence: no al- on the adjective.'),
    q('Choose the adjective for أُخْتِي.', ['طَوِيلَةٌ', 'طَوِيلٌ', 'طِوَالٌ'], 'Sister is feminine.'),
    q('Choose “I saw a big school.”', ['رَأَيْتُ مَدْرَسَةً كَبِيرَةً.', 'رَأَيْتُ مَدْرَسَةً كَبِيرٌ.', 'رَأَيْتُ مَدْرَسَةٌ كَبِيرَةٌ.'], 'Object: both words take -an.'),
  ],
  practiceLabel: 'teacher-written practice on the website rules',
  read: {
    title: 'My city', label: 'website reading text, extended by the teacher',
    text: 'فِي مَدِينَتِي أَمَاكِنُ جَمِيلَةٌ وَشَوَارِعُ وَاسِعَةٌ. هَذِهِ الْمَدْرَسَةُ الْجَدِيدَةُ قَرِيبَةٌ، وَذَلِكَ الْمَتْحَفُ الْقَدِيمُ مُثِيرٌ لِلِاهْتِمَامِ. فِي وَسَطِ الْمَدِينَةِ سُوقٌ كَبِيرٌ وَحَدِيقَةٌ هَادِئَةٌ. الْجَوُّ لَطِيفٌ، وَالشَّمْسُ دَافِئَةٌ.',
    glossary: [['أَمَاكِنُ', 'places'], ['وَاسِعَةٌ', 'wide'], ['الْمَتْحَفُ', 'the museum'], ['مُثِيرٌ لِلِاهْتِمَامِ', 'interesting'], ['وَسَطِ', 'centre'], ['هَادِئَةٌ', 'quiet'], ['دَافِئَةٌ', 'warm']],
    task: 'Website: underline each adjective, draw an arrow to its noun, and label the agreement feature.',
    questions: [
      q('Why does the adjective for museum have no tāʾ marbūṭa?', ['Museum is masculine.', 'Museum is feminine.', 'It is a sentence.'], 'Masculine noun → masculine adjective.'),
      q('Why is it حَدِيقَةٌ هَادِئَةٌ?', ['Garden is feminine.', 'Garden is masculine.', 'It is plural.'], 'Feminine noun → + ة.'),
      q('Why is it الشَّمْسُ دَافِئَةٌ?', ['Sun is feminine without ة.', 'Sun is masculine.', 'It is a mistake.'], 'A hidden feminine noun.'),
      q('Is الْجَوُّ لَطِيفٌ a phrase or a sentence?', ['a sentence: “The weather is pleasant.”', 'a phrase: “the pleasant weather”', 'a phrase: “a pleasant weather”'], 'Definite noun + indefinite adjective.'),
    ],
    qNote: 'The first two sentences are the website text; the rest is teacher-written. Questions teacher-written.',
  },
  speak: {
    title: 'Speaking: describe two people or places', source: 'website speaking task (45–60 seconds)',
    prompts: [
      { route: 'core', ar: 'صِفْ صَدِيقًا وَصَدِيقَةً.' },
      { route: 'develop', ar: 'صِفْ بَيْتَكَ وَغُرْفَتَكَ.' },
      { route: 'stretch', ar: 'صِفْ مَدِينَتَكَ فِي الصَّيْفِ وَالشِّتَاءِ.' },
    ],
    stems: [
      { route: 'core', ar: 'صَدِيقِي ______ ، وَصَدِيقَتِي ______ .' },
      { route: 'develop', ar: 'بَيْتِي ______ ، وَغُرْفَتِي ______ .' },
      { route: 'stretch', ar: 'فِي الصَّيْفِ الشَّمْسُ ______ ، وَالْجَوُّ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'صِفْ أُخْتَكَ.', en: 'Describe your sister.' },
      { who: 'B', ar: 'أُخْتِي طَوِيلَةٌ وَذَكِيَّةٌ، وَأَخِي قَصِيرٌ وَمَرِحٌ.', en: 'My sister is tall and clever, and my brother is short and cheerful.' },
    ],
    notes: 'Website: 45–60 seconds with at least six accurate adjective structures. Listening variant (website “listening without audio”): read the model twice; partners note nouns first, adjectives second, then rebuild the pairs.',
  },
  write: {
    siteTask: 'Write 90–120 words describing a person, place, object or experience, with at least eight target adjective structures, underlined.',
    core: { amount: '6 sentences', task: 'Describe three male and three female people or things.', how: 'Noun → adjective; + ة for feminine.' },
    develop: { amount: '8 sentences', task: 'Mix phrases (a / the …) and sentences (… is …).', how: 'No al- on the adjective in a sentence.' },
    stretch: { amount: '90–120 words', task: 'Website task, including a feminine noun without ة and one shape-changing adjective.', how: 'Sun, mother · red, thirsty.' },
  },
  frames: {
    core: [
      { en: 'My friend (m.) is …', ar: 'صَدِيقِي ______ .' },
      { en: 'My friend (f.) is …', ar: 'صَدِيقَتِي ______ .' },
      { en: 'I have a … bag.', ar: 'عِنْدِي حَقِيبَةٌ ______ .' },
      { en: 'I have a … book.', ar: 'عِنْدِي كِتَابٌ ______ .' },
    ],
    develop: [
      { en: 'I live in a … city.', ar: 'أَسْكُنُ فِي مَدِينَةٍ ______ .' },
      { en: 'The … school is near.', ar: 'الْمَدْرَسَةُ ______ قَرِيبَةٌ.' },
      { en: 'The sun today is …', ar: 'الشَّمْسُ الْيَوْمَ ______ .' },
      { en: 'My mother is …', ar: 'أُمِّي ______ .' },
    ],
    bank: ['كَبِيرٌ', 'صَغِيرٌ', 'جَمِيلٌ', 'جَدِيدٌ', 'قَدِيمٌ', 'طَوِيلٌ', 'قَصِيرٌ', 'ذَكِيٌّ', 'لَطِيفٌ', 'نَشِيطٌ', 'هَادِئٌ', 'حَارٌّ', '+ ة for feminine'],
  },
  stretchTask: {
    task: 'Website extended writing workshop: 90–120 words describing a person, place, object or experience with at least eight target adjective structures.',
    checklist: ['Four masculine and four feminine adjective structures.', 'At least two phrases with al- on both words.', 'At least two nominal sentences (“… is …”).', 'One feminine noun without ة (sun, mother, sister …).', 'One adjective whose feminine changes shape.'],
    phrases: [['أُمِّي لَطِيفَةٌ', 'my mother is kind'], ['الشَّمْسُ حَارَّةٌ', 'the sun is hot'], ['مَدِينَةٌ قَدِيمَةٌ', 'an old city'], ['الْمَتْحَفُ الْقَدِيمُ', 'the old museum'], ['حَقِيبَةٌ حَمْرَاءُ', 'a red bag'], ['أَنَا عَطْشَانُ / عَطْشَى', 'I am thirsty (m. / f.)']],
  },
  model: {
    text: 'أَسْكُنُ فِي مَدِينَةٍ قَدِيمَةٍ وَجَمِيلَةٍ. بَيْتُنَا صَغِيرٌ، لَكِنَّ الْحَدِيقَةَ كَبِيرَةٌ. أُمِّي طَبَّاخَةٌ مَاهِرَةٌ، وَطَعَامُهَا لَذِيذٌ. أَخِي الْكَبِيرُ طَالِبٌ مُجْتَهِدٌ، وَأُخْتِي الصَّغِيرَةُ مَرِحَةٌ. فِي الصَّيْفِ الشَّمْسُ حَارَّةٌ، فَتَلْبَسُ أُخْتِي قُبَّعَةً حَمْرَاءَ.',
    en: 'I live in an old and beautiful city. Our house is small, but the garden is big. My mother is a skilful cook, and her food is delicious. My older brother is a hard-working student, and my little sister is cheerful. In summer the sun is hot, so my sister wears a red hat.',
    find: ['masculine pairs', 'feminine pairs', 'phrase vs sentence', 'hidden feminine'],
    source: 'teacher model on the website writing workshop',
  },
  selfCheck: [
    { route: 'core', text: 'Every adjective comes after its noun.' },
    { route: 'core', text: 'Feminine nouns have feminine adjectives.' },
    { route: 'develop', text: 'My phrases and sentences mean what I intended.' },
    { route: 'develop', text: 'I spotted feminine nouns without ة.' },
    { route: 'stretch', text: 'I used one adjective that changes shape.' },
  ],
  exit: [
    q('Choose “a clever girl”.', ['بِنْتٌ ذَكِيَّةٌ', 'بِنْتٌ ذَكِيٌّ', 'بِنْتٌ الذَّكِيَّةُ'], 'Feminine, indefinite.'),
    q('Choose “The sun is hot.”', ['الشَّمْسُ حَارَّةٌ.', 'الشَّمْسُ حَارٌّ.', 'الشَّمْسُ الْحَارَّةُ'], 'Feminine noun; a sentence.'),
    q('Choose “the new book”.', ['الْكِتَابُ الْجَدِيدُ', 'الْكِتَابُ جَدِيدٌ', 'الْكِتَابُ الْجَدِيدَةُ'], 'Masculine; al- on both.'),
  ],
  mastery: false,
  prep: {
    words: [['جَمْعٌ', 'plural', '—'], ['مُجْتَهِدُونَ', 'hard-working (m. pl.)', 'sing. مُجْتَهِدٌ'], ['مُجْتَهِدَاتٌ', 'hard-working (f. pl.)', 'sing. مُجْتَهِدَةٌ'], ['كِبَارٌ', 'big (pl., people)', 'sing. كَبِيرٌ'], ['مُفِيدَةٌ', 'useful (for things in the plural)', '—']],
    questionEn: 'How would you say “the students are hard-working” for boys, and for girls?',
    questionAr: 'الطُّلَّابُ ______ · الطَّالِبَاتُ ______',
    homework: {
      core: 'Write ten adjective pairs: five masculine, five feminine.',
      develop: 'Write six sentences and six phrases with the same nouns.',
      stretch: 'Website writing workshop (90–120 words).',
    },
    wordsSource: 'The five words prepare GM-ADJ-02 (website Adjectives lesson 2: agreement with plurals).',
  },
  remember: 'Remember: noun first · feminine noun → adjective + ة · watch hidden feminines (sun, mother) and shape-changers (red) · al- on the adjective = phrase; no al- = “is”.',
});

module.exports = { meta, slides };
