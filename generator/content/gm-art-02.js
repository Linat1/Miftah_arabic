'use strict';
/* GM-ART-02 · Definiteness and Adjective Agreement — website: Mastery & Revision › Grammar › Articles › Lesson 2 (the four agreement decisions:
 * gender, number, definiteness, case; phrase vs sentence; demonstratives; human and non-human plurals; definite without الـ — suffix, name,
 * iḍāfa; reading, listening, speaking and writing workshops; error clinic). All quizzes are the website’s; explanation slides, sorter and
 * model are teacher-made on the website rules. */
const G = require('./gm-common');
const { q } = G;

const s = G.site('grammar__02-articles__grammar-mastery-02-adjective-agreement');
const meta = G.meta({
  code: 'GM-ART-02', fileTitle: 'Definiteness_and_Adjective_Agreement', title: 'Definiteness and Adjective Agreement', arabic: 'مُطَابَقَةُ النَّعْتِ فِي التَّعْرِيفِ وَالتَّنْكِيرِ',
  focus: 'Make an adjective mirror its noun in gender, number, definiteness (and case) — and use definiteness to tell a phrase from a sentence: الْمَدْرَسَةُ الْجَدِيدَةُ (the new school) · الْمَدْرَسَةُ جَدِيدَةٌ (The school is new).',
  icon: 'FaScaleBalanced',
});

const slides = G.gmLesson({
  code: 'GM-ART-02', site: 'grammar__02-articles__grammar-mastery-02-adjective-agreement',
  support: `• Core: gender and definiteness agreement; phrase vs sentence. Develop: demonstratives; human vs non-human plurals; two adjectives. Stretch: definite without الـ (كِتَابِي · names · iḍāfa) and matching case endings.
• The one question for the whole lesson (website “mastery question”): is the adjective INSIDE the phrase (it copies الـ) or is it SAYING something new about the noun (predicate, no الـ)?
• Arabic has no written “is” in the present: definiteness does the job. English speakers (and Urdu speakers, who add “hai”) often look for a missing verb — reassure them.`,
  teach: 'Four agreement decisions; phrase or sentence; demonstratives; plurals; definite without الـ.',
  wedo: 'Sort phrase or sentence, fix agreement errors, test plurals and demonstratives.',
  next: { nextCode: 'GM-ART-03', nextTitle: 'Where the Article Belongs', nextAr: 'مَوَاضِعُ «الـ» وَحُدُودُ اسْتِعْمَالِهَا' },
  doNow: {
    keyIdea: { text: 'Both definite = one phrase (the small house). Definite + indefinite = a sentence (The house is small).', ar: '{k|الْبَيْتُ الصَّغِيرُ} ‖ الْبَيْتُ {e|صَغِيرٌ}' },
    retrieves: 'The website Agreement Entry Check (questions 1–5). Questions 1–3 retrieve GM-ART-01 (phrase vs sentence).',
  },
  objectives: ['Make an adjective agree with its noun in gender, number and definiteness.', 'Tell a noun phrase from a complete nominal sentence.', 'Use demonstratives and plural agreement accurately.', 'Recognise nouns that are definite without الـ.'],
  routes: {
    core: ['I can match an adjective in gender and definiteness.', 'I can tell الْبَيْتُ الْكَبِيرُ from الْبَيْتُ كَبِيرٌ.'],
    develop: ['I can use هٰذَا / هٰذِهِ with and without الـ.', 'I can choose the adjective for human and non-human plurals.'],
    stretch: ['I can match adjectives after كِتَابِي, names and iḍāfa.', 'I can match case endings (فِي الْبَيْتِ الْكَبِيرِ).'],
  },
  terms: {
    flexRest: true,
    items: [
      { ar: 'نَعْتٌ', en: 'adjective (describing word)', note: 'also صِفَةٌ', forms: [{ l: 'pl.', ar: 'نُعُوتٌ' }] },
      { ar: 'مَنْعُوتٌ', en: 'the noun being described', note: 'الْبَيْتُ in الْبَيْتُ الْكَبِيرُ' },
      { ar: 'مُطَابَقَةٌ', en: 'agreement (matching)', note: 'gender · number · definiteness · case' },
      { ar: 'مُبْتَدَأٌ', en: 'subject of a nominal sentence', note: 'usually definite' },
      { ar: 'خَبَرٌ', en: 'predicate (what is said about it)', note: 'usually indefinite' },
      { ar: 'اِسْمُ الْإِشَارَةِ', en: 'demonstrative (this / these)', note: 'هٰذَا · هٰذِهِ · هٰؤُلَاءِ' },
      { ar: 'عَاقِلٌ', en: 'human (rational)', note: 'طُلَّابٌ · مُعَلِّمَاتٌ' },
      { ar: 'غَيْرُ عَاقِلٍ', en: 'non-human (things, animals)', note: 'كُتُبٌ · مَدَارِسُ' },
    ],
    notes: 'Use مَنْعُوتٌ / نَعْتٌ and مُبْتَدَأٌ / خَبَرٌ in pairs: “In the phrase, the naʿt copies the manʿūt. In the sentence, the khabar tells us about the mubtadaʾ.”',
  },
  explain: [
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 1 · the four agreement decisions (website section)', title: 'The adjective is a mirror', ar: 'أَرْبَعَةُ أَوْجُهٍ لِلْمُطَابَقَةِ',
      points: [
        'An Arabic adjective normally comes AFTER its noun and copies key information from it.',
        'Gender: a masculine noun takes a masculine adjective; a feminine noun takes a feminine adjective.',
        'Number: for people, the adjective matches singular, dual or plural.',
        'Definiteness: inside one phrase, an indefinite noun takes an indefinite adjective; a definite noun takes a definite adjective.',
        'Case (Stretch): when endings are shown, noun and adjective share -u, -a or -i.',
      ],
      examples: [
        { ar: 'وَلَدٌ مُجْتَهِدٌ · بِنْتٌ مُجْتَهِدَةٌ', en: 'gender' },
        { ar: 'طَالِبَانِ مُجْتَهِدَانِ · طُلَّابٌ مُجْتَهِدُونَ', en: 'number (people)' },
        { ar: 'كِتَابٌ مُفِيدٌ · الْكِتَابُ الْمُفِيدُ', en: 'definiteness' },
        { ar: 'فِي الْبَيْتِ الْكَبِيرِ', en: 'case: both genitive after فِي', note: 'Stretch' },
      ],
      callout: { text: 'Order of thought (website): identify the noun → decide its meaning and form → make the adjective copy the relevant features.' },
      notes: 'PART 1 (3 min) — website section “The four agreement decisions”. Hold up a mirror metaphor: whatever the noun “wears” (ة, الـ, plural ending), the adjective wears too.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 1 · what matches? (website table)', title: 'Noun + adjective: every feature matches', ar: 'مَاذَا يَتَطَابَقُ؟', ltr: true,
      cols: [{ label: 'Meaning', w: 3.0 }, { label: 'Noun', w: 2.4, size: 24 }, { label: 'Adjective', w: 2.6, size: 24 }, { label: 'What matches?', w: 4.33 }],
      rows: [
        { core: true, cells: ['a tall boy', 'وَلَدٌ', 'طَوِيلٌ', 'masculine · singular · indefinite'] },
        { core: true, cells: ['the tall girl', 'الْبِنْتُ', 'الطَّوِيلَةُ', 'feminine · singular · definite'] },
        { cells: ['two useful books', 'كِتَابَانِ', 'مُفِيدَانِ', 'masculine · dual · indefinite'] },
        { cells: ['the hardworking female students', 'الطَّالِبَاتُ', 'الْمُجْتَهِدَاتُ', 'feminine · plural (human) · definite'] },
      ],
      foot: 'Read the table right to left in Arabic: noun first, then the adjective copies it.',
      notes: 'PART 1b (2 min) — website table. Cover the adjective column: students predict it from the noun.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · phrase or complete sentence? (website section)', title: 'Definiteness decides: phrase or sentence', ar: 'تَرْكِيبٌ أَمْ جُمْلَةٌ؟', ltr: true,
      cols: [{ label: 'Meaning', w: 3.6 }, { label: 'Arabic', w: 4.6, size: 24 }, { label: 'Why?', w: 4.13 }],
      rows: [
        { core: true, cells: ['a large house', 'بَيْتٌ كَبِيرٌ', 'Phrase: both indefinite.'] },
        { core: true, cells: ['the large house', 'الْبَيْتُ الْكَبِيرُ', 'Phrase: both definite.'] },
        { core: true, cells: ['The house is large.', 'الْبَيْتُ كَبِيرٌ.', 'Sentence: definite + indefinite.'] },
        { cells: ['a large and beautiful house', 'بَيْتٌ كَبِيرٌ وَجَمِيلٌ', 'Two adjectives, both matching.'] },
        { cells: ['the large new school', 'الْمَدْرَسَةُ الْجَدِيدَةُ الْكَبِيرَةُ', 'Each adjective matches the noun.'] },
        { cells: ['The school is new and large.', 'الْمَدْرَسَةُ جَدِيدَةٌ وَكَبِيرَةٌ.', 'Both predicates stay indefinite.'] },
      ],
      foot: 'Website warning: do not use the full stop as your only clue — analyse definiteness first.',
      notes: 'PART 2 (3 min) — website section “Phrase or complete sentence?”. Arabic creates the contrast without a written “is”.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 3 · demonstratives change the pattern (website section) · Develop', title: '“This is a house” or “this house”?', ar: 'أَسْمَاءُ الْإِشَارَةِ وَالتَّعْرِيفُ', ltr: true,
      cols: [{ label: 'Meaning', w: 3.6 }, { label: 'Arabic', w: 4.6, size: 26 }, { label: 'What follows هٰذَا?', w: 4.13 }],
      rows: [
        { core: true, cells: ['This is a house.', 'هٰذَا بَيْتٌ.', 'an indefinite noun → a sentence'] },
        { core: true, cells: ['this house', 'هٰذَا الْبَيْتُ', 'a definite noun → a phrase'] },
        { cells: ['this large house', 'هٰذَا الْبَيْتُ الْكَبِيرُ', 'phrase + attributive adjective'] },
        { cells: ['This house is large.', 'هٰذَا الْبَيْتُ كَبِيرٌ.', 'phrase + predicate adjective'] },
        { cells: ['This is a beautiful city.', 'هٰذِهِ مَدِينَةٌ جَمِيلَةٌ.', 'the whole indefinite phrase is the predicate'] },
      ],
      foot: 'Three-step reading strategy (website): find the demonstrative → does the noun have الـ? → does the adjective have الـ?',
      notes: 'PART 3 (2 min) — website section “Demonstratives change the pattern”.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 4 · human and non-human plurals (website table) · Develop', title: 'People or things?', ar: 'الْعَاقِلُ وَغَيْرُ الْعَاقِلِ', ltr: true,
      cols: [{ label: 'Type', w: 3.0 }, { label: 'Plural noun', w: 2.8, size: 24 }, { label: 'Adjective', w: 2.8, size: 24 }, { label: 'Rule', w: 3.73 }],
      rows: [
        { core: true, cells: ['human · masculine / mixed', 'الْمُعَلِّمُونَ', 'الْمَاهِرُونَ', 'plural adjective'] },
        { core: true, cells: ['human · feminine', 'الْمُعَلِّمَاتُ', 'الْمَاهِرَاتُ', 'feminine plural adjective'] },
        { core: true, cells: ['non-human', 'السَّيَّارَاتُ', 'السَّرِيعَةُ', 'feminine SINGULAR adjective'] },
        { cells: ['non-human (broken plural)', 'الْمَدَارِسُ', 'الْكَبِيرَةُ', 'feminine singular adjective'] },
        { cells: ['human (broken plural)', 'أَطْفَالٌ', 'صِغَارٌ', 'plural adjective for people'] },
      ],
      foot: 'Do not confuse form with meaning (website): أَطْفَالٌ are people; مَدَارِسُ are things.',
      notes: 'PART 4 (2 min) — website section “Human and non-human plurals”. Definiteness still matches in every row.',
    },
    {
      type: 'ruleCards', min: 2, eyebrow: 'Grammar · part 5 · definite without الـ (website section) · Stretch', title: 'Definite — but no الـ', ar: 'الْمَعْرِفَةُ بِغَيْرِ «الـ»',
      cards: [
        { chip: 'SUFFIX', color: '1E6B52', head: 'كِتَابِي', big: 'كِتَابِي الْجَدِيدُ', en: 'my new book — ـِي makes the noun definite', clue: 'كِتَابِي جَدِيدٌ = My book is new.' },
        { chip: 'NAME', color: '1D5FBF', head: 'مَرْيَمُ', big: 'مَرْيَمُ الْمُجْتَهِدَةُ', en: 'hardworking Maryam — a name is definite', clue: 'مَرْيَمُ مُجْتَهِدَةٌ = Maryam is hardworking.' },
        { chip: 'IḌĀFA', color: '6B4C9A', head: 'بَابُ الْمَدْرَسَةِ', big: 'بَابُ الْمَدْرَسَةِ الْجَدِيدُ', en: 'the school’s new door — masculine → describes بَابُ', clue: 'الْجَدِيدَةِ would describe the school.' },
      ],
      error: { text: 'Website error clinic: a suffix and الـ never sit on the same noun.', pairs: [['كِتَابِي الْمُفِيدُ', 'الْكِتَابِي الْمُفِيدُ']] },
      notes: 'PART 5 (2 min) — website section “A noun can be definite without الـ”. The adjective matches GRAMMATICAL definiteness, not just the letters at the start.',
    },
  ],
  quickQuiz: /Make Every Feature Match/i, quickPick: [0, 1, 2, 4], quickNote: 'website mini-check 1 “Make every feature match”, questions 1, 2, 3 and 5.',
  ido: {
    title: 'Watch me build a phrase, then a sentence',
    steps: [
      { head: 'Noun', ar: 'مَدْرَسَةٌ', think: 'Feminine, singular, indefinite.' },
      { head: 'Make it known', ar: 'الْمَدْرَسَةُ', think: 'The particular school.' },
      { head: 'Phrase', ar: 'الْمَدْرَسَةُ الْجَدِيدَةُ', think: 'Adjective copies: f + الـ.' },
      { head: 'Sentence', ar: 'الْمَدْرَسَةُ الْجَدِيدَةُ كَبِيرَةٌ.', think: 'Predicate: no الـ.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'PHRASE (both definite)', e: 'PREDICATE (indefinite)' },
    model: 'هٰذِهِ {k|مَدْرَسَتِي الْجَدِيدَةُ}. الْمَدْرَسَةُ {e|كَبِيرَةٌ} {e|وَحَدِيثَةٌ}، وَفِيهَا {k|مَكْتَبَةٌ هَادِئَةٌ}.',
    modelEn: 'This is my new school. The school is big and modern, and it has a quiet library.',
    notes: 'From the website reading workshop. Point out مَكْتَبَةٌ هَادِئَةٌ: an INDEFINITE phrase (both indefinite) — still a phrase, because both match.',
  },
  models: [
    { ar: 'هٰذَا الْكِتَابُ الْمُفِيدُ', en: 'this useful book', tip: 'Demonstrative phrase + attributive adjective.' },
    { ar: 'هٰذَا الْكِتَابُ مُفِيدٌ.', en: 'This book is useful.', tip: 'Website speaking studio: now a sentence.' },
    { ar: 'الْكُتُبُ الْجَدِيدَةُ', en: 'the new books', tip: 'Non-human plural: feminine singular.' },
    { ar: 'الطُّلَّابُ الْمُجْتَهِدُونَ', en: 'the hardworking students', tip: 'Human plural: plural adjective.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · phrase or sentence?', title: 'Noun phrase or complete sentence?', ar: 'صَنِّفْ',
      categories: ['Noun phrase', 'Complete sentence'],
      items: [['الْبَيْتُ الْكَبِيرُ', 0], ['الْبَيْتُ كَبِيرٌ', 1], ['هٰذَا كِتَابٌ', 1], ['هٰذَا الْكِتَابُ', 0], ['كِتَابِي جَدِيدٌ', 1], ['كِتَابِي الْجَدِيدُ', 0], ['مَدِينَةٌ جَمِيلَةٌ', 0], ['الْمَدِينَةُ جَمِيلَةٌ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type P or S for each card. Ask for each: “Do noun and adjective match in definiteness?” (website mini-check 2).',
    },
    {
      type: 'mcq', min: 3, eyebrow: 'We do · listening · website listening workshop', title: 'Listening: hear the relationship', ar: 'الِاسْتِمَاعُ',
      seed: 1, questions: G.pick(G.quiz(s, /Reading and Listening/i), [3, 4, 5]),
      side: { kind: 'core', label: 'CORE', text: 'Listen twice.\nAsk: does the adjective IDENTIFY the noun, or COMPLETE a statement?' },
      answerSlide: { min: 0, eyebrow: 'We do · listening answers', title: 'Listening: answers', ar: 'إِجَابَاتُ الِاسْتِمَاعِ' },
      between: {
        type: 'glossed', stage: 'wedo', eyebrow: 'We do · listening support · read along (Core)', title: 'The script — read along with English', ar: 'نَصُّ الِاسْتِمَاعِ',
        lines: [
          ['أَسْكُنُ فِي شَقَّةٍ صَغِيرَةٍ، وَلٰكِنَّ الشَّقَّةَ مُرِيحَةٌ.', 'I live in a small flat, but the flat is comfortable.'],
          ['غُرْفَتِي الْجَدِيدَةُ مُضِيئَةٌ،', 'My new room is bright,'],
          ['وَنَوَافِذُهَا الْكَبِيرَةُ تُطِلُّ عَلَى حَدِيقَةٍ جَمِيلَةٍ.', 'and its large windows overlook a beautiful garden.'],
          ['فِي الْحَدِيقَةِ أَشْجَارٌ طَوِيلَةٌ وَزُهُورٌ مُلَوَّنَةٌ.', 'In the garden there are tall trees and colourful flowers.'],
        ],
        notes: 'READ-ALONG (Core support) — show after the second listening. Website script; teacher translation.',
      },
      notes: `LISTENING (3 min) — website listening workshop. Read the script aloud twice; students answer the website evidence questions 4–6.
SCRIPT: أَسْكُنُ فِي شَقَّةٍ صَغِيرَةٍ، وَلٰكِنَّ الشَّقَّةَ مُرِيحَةٌ. غُرْفَتِي الْجَدِيدَةُ مُضِيئَةٌ، وَنَوَافِذُهَا الْكَبِيرَةُ تُطِلُّ عَلَى حَدِيقَةٍ جَمِيلَةٍ. فِي الْحَدِيقَةِ أَشْجَارٌ طَوِيلَةٌ وَزُهُورٌ مُلَوَّنَةٌ.`,
      answerNotes: 'Go through each: phrase (identifies) or sentence (completes a statement)?',
    },
  ],
  mistakes: [
    { wrong: 'مَدْرَسَةٌ الْجَدِيدَةُ', right: 'الْمَدْرَسَةُ الْجَدِيدَةُ', why: 'Noun and adjective cannot disagree in definiteness.' },
    { wrong: 'الْكِتَابِي الْمُفِيدُ', right: 'كِتَابِي الْمُفِيدُ', why: 'A suffix and الـ never sit on the same noun.' },
    { wrong: 'الْكُتُبُ الْجَدِيدَاتُ', right: 'الْكُتُبُ الْجَدِيدَةُ', why: 'Non-human plural: feminine singular adjective.' },
  ],
  hints: ['Both definite?', 'الـ AND a suffix?', 'People or things?'],
  practiceQuiz: /Plural Agreement/i, practicePick: [0, 1, 2, 3], practiceLabel: 'website mini-check 4 “Plural agreement”',
  read: {
    title: 'A new school', label: 'website reading workshop',
    text: 'هٰذِهِ مَدْرَسَتِي الْجَدِيدَةُ. الْمَدْرَسَةُ كَبِيرَةٌ وَحَدِيثَةٌ. فِيهَا فُصُولٌ وَاسِعَةٌ وَمَكْتَبَةٌ هَادِئَةٌ. أُحِبُّ الْمُعَلِّمَاتِ الْمُتَعَاوِنَاتِ، وَأَسْتَعْمِلُ الْحَوَاسِيبَ الْجَدِيدَةَ فِي دَرْسِ التِّقْنِيَةِ. هٰذِهِ الْفُصُولُ نَظِيفَةٌ، وَالْمَلْعَبُ الْكَبِيرُ قَرِيبٌ مِنَ الْمَبْنَى الرَّئِيسِيِّ.',
    glossary: [['حَدِيثَةٌ', 'modern'], ['فُصُولٌ وَاسِعَةٌ', 'spacious classrooms'], ['هَادِئَةٌ', 'quiet'], ['الْمُتَعَاوِنَاتِ', 'cooperative (f. pl.)'], ['الْحَوَاسِيبَ', 'the computers'], ['الْمَلْعَبُ', 'the playground'], ['الْمَبْنَى الرَّئِيسِيِّ', 'the main building']],
    task: 'Website: underline complete noun phrases once and predicate adjectives twice before answering.',
    questions: [...G.pick(G.quiz(s, /Reading and Listening/i), [0, 1, 2]), q('Which is a HUMAN plural with a plural adjective?', ['الْمُعَلِّمَاتِ الْمُتَعَاوِنَاتِ', 'الْحَوَاسِيبَ الْجَدِيدَةَ', 'فُصُولٌ وَاسِعَةٌ'], 'Teachers are people: feminine plural adjective.')],
    qNote: 'Website reading evidence questions 1–3, plus one teacher-written question.',
  },
  speak: {
    title: 'Speaking: point, identify, describe', source: 'website speaking studio',
    prompts: [
      { route: 'core', ar: 'مَا هٰذَا؟ (هٰذَا كِتَابٌ.)' },
      { route: 'develop', ar: 'صِفْ هٰذَا الشَّيْءَ: هٰذَا الْكِتَابُ … / هٰذَا الْكِتَابُ …' },
      { route: 'stretch', ar: 'صِفْ ثَلَاثَةَ أَشْيَاءَ، وَأَضِفْ سَبَبًا أَوْ رَأْيًا.' },
    ],
    stems: [
      { route: 'core', ar: 'هٰذَا ______ . / هٰذِهِ ______ .' },
      { route: 'develop', ar: 'هٰذَا الْكِتَابُ الْمُفِيدُ ______ .' },
      { route: 'stretch', ar: 'هٰذِهِ الْغُرْفَةُ ______ ، لِأَنَّ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَا هٰذَا؟', en: 'What is this?' },
      { who: 'B', ar: 'هٰذَا الْكِتَابُ الْمُفِيدُ. هٰذَا الْكِتَابُ مُفِيدٌ، لِأَنَّ فِيهِ صُوَرًا.', en: 'This is the useful book. This book is useful because it has pictures.' },
    ],
    notes: 'Website studio: choose three objects or places; identify with a demonstrative (هٰذَا الْكِتَابُ); add an attributive adjective (هٰذَا الْكِتَابُ الْمُفِيدُ); then make a sentence (هٰذَا الْكِتَابُ مُفِيدٌ); extend with a reason. Use real objects on camera.',
  },
  write: {
    siteTask: 'Describe a place (80–90 words): three definite noun–adjective phrases; three nominal sentences with indefinite predicate adjectives; one demonstrative contrast; one human and one non-human plural; one noun made definite by a suffix or iḍāfa.',
    core: { amount: '6 sentences', task: 'Three phrase / sentence pairs about your room or school.', how: 'الْبَيْتُ الْكَبِيرُ … · الْبَيْتُ كَبِيرٌ. Check: does the adjective copy الـ and ة?' },
    develop: { amount: '50–60 words', task: 'Add a demonstrative contrast and one plural (human or non-human).', how: 'هٰذَا كِتَابٌ / هٰذَا الْكِتَابُ … · الْكُتُبُ الْجَدِيدَةُ.' },
    stretch: { amount: '80–90 words', task: 'The website writing workshop “Describe a place” with all five features.', how: 'Underline nouns once and their adjectives twice (website paper route).' },
  },
  frames: {
    core: [
      { en: 'My room is …', ar: 'غُرْفَتِي ______ .' },
      { en: 'the big window', ar: 'النَّافِذَةُ ______ .' },
      { en: 'This is a …', ar: 'هٰذَا ______ .' },
      { en: 'The school is …', ar: 'الْمَدْرَسَةُ ______ .' },
    ],
    develop: [
      { en: 'This … is useful.', ar: 'هٰذَا ______ مُفِيدٌ.' },
      { en: 'the new books', ar: 'الْكُتُبُ ______ .' },
      { en: 'the hardworking teachers (f.)', ar: 'الْمُعَلِّمَاتُ ______ .' },
      { en: 'my new … (noun + my)', ar: '______ الْجَدِيدُ / الْجَدِيدَةُ' },
    ],
    bank: ['كَبِيرٌ / كَبِيرَةٌ', 'صَغِيرٌ / صَغِيرَةٌ', 'جَدِيدٌ / جَدِيدَةٌ', 'حَدِيثٌ / حَدِيثَةٌ', 'هَادِئٌ / هَادِئَةٌ', 'نَظِيفٌ / نَظِيفَةٌ', 'وَاسِعٌ / وَاسِعَةٌ', 'مُفِيدٌ / مُفِيدَةٌ', 'هٰذَا', 'هٰذِهِ', 'هٰؤُلَاءِ', 'مُجْتَهِدُونَ'],
  },
  stretchTask: {
    task: 'Website writing workshop — Describe a place (80–90 words): your school, home, town or an imagined place.',
    checklist: ['Three definite noun–adjective phrases.', 'Three nominal sentences with indefinite predicate adjectives.', 'One demonstrative contrast (هٰذَا كِتَابٌ / هٰذَا الْكِتَابُ).', 'One human plural and one non-human plural.', 'One noun made definite by a suffix or iḍāfa.'],
    phrases: [['مَدْرَسَتِي الْجَدِيدَةُ', 'my new school'], ['فُصُولٌ وَاسِعَةٌ', 'spacious classrooms'], ['الْمُعَلِّمَاتُ الْمُتَعَاوِنَاتُ', 'the cooperative teachers'], ['الْحَوَاسِيبُ الْجَدِيدَةُ', 'the new computers'], ['الْمَلْعَبُ الْكَبِيرُ', 'the big playground'], ['بَابُ الْمَدْرَسَةِ الْكَبِيرُ', 'the school’s big door']],
  },
  model: {
    text: 'هٰذِهِ مَدِينَتِي الْجَمِيلَةُ. الْمَدِينَةُ كَبِيرَةٌ وَهَادِئَةٌ. فِي الْمَدِينَةِ مَدَارِسُ حَدِيثَةٌ وَحَدَائِقُ وَاسِعَةٌ. أُحِبُّ الْمَكْتَبَةَ الْعَامَّةَ، وَالْمُوَظَّفُونَ الْمُتَعَاوِنُونَ يُسَاعِدُونَ الطُّلَّابَ. هٰذَا الشَّارِعُ طَوِيلٌ، وَهٰذَا الْمَسْجِدُ الْكَبِيرُ قَرِيبٌ مِنْ بَيْتِي. بَابُ الْمَسْجِدِ الْقَدِيمُ جَمِيلٌ جِدًّا. الْأَسْوَاقُ مُزْدَحِمَةٌ يَوْمَ الْجُمُعَةِ، وَلٰكِنَّ النَّاسَ لُطَفَاءُ.',
    en: 'This is my beautiful city. The city is big and quiet. In the city there are modern schools and spacious gardens. I love the public library, and the cooperative staff help the students. This street is long, and this big mosque is near my house. The mosque’s old door is very beautiful. The markets are crowded on Friday, but the people are kind.',
    find: ['definite phrases', 'predicate sentences', 'هٰذَا contrast', 'human + non-human plural'],
    source: 'teacher model for the website writing workshop (≈ 70 words)',
    notes: 'Non-human plural: مَدَارِسُ حَدِيثَةٌ · حَدَائِقُ وَاسِعَةٌ · الْأَسْوَاقُ مُزْدَحِمَةٌ. Human plural: الْمُوَظَّفُونَ الْمُتَعَاوِنُونَ. Suffix: مَدِينَتِي الْجَمِيلَةُ. Iḍāfa: بَابُ الْمَسْجِدِ الْقَدِيمُ (masculine → the door).',
  },
  selfCheck: [
    { route: 'core', text: 'Every adjective copies its noun’s gender.' },
    { route: 'core', text: 'My phrases are both definite or both indefinite.' },
    { route: 'develop', text: 'My predicate adjectives have no الـ.' },
    { route: 'develop', text: 'Non-human plurals take a feminine singular adjective.' },
    { route: 'stretch', text: 'I matched adjectives after a suffix, a name or iḍāfa.' },
  ],
  exitPick: [1, 2, 6],
  prep: {
    words: [['مُضَافٌ', 'first noun of an iḍāfa', '—'], ['مُضَافٌ إِلَيْهِ', 'second noun of an iḍāfa', '—'], ['اِسْمُ عَلَمٍ', 'a proper name', 'pl. أَسْمَاءُ أَعْلَامٍ'], ['ضَمِيرٌ مُتَّصِلٌ', 'an attached pronoun (ـِي · ـُنَا)', '—'], ['حَرْفُ جَرٍّ', 'a preposition', 'pl. حُرُوفُ جَرٍّ']],
    questionEn: 'Translate: “my book”, “the student’s book”, “Maryam’s book”. Which ones have الـ?',
    questionAr: 'كِتَابِي · كِتَابُ الطَّالِبِ · كِتَابُ مَرْيَمَ',
    homework: {
      core: 'Write five phrase / sentence pairs (الْبَيْتُ الْكَبِيرُ · الْبَيْتُ كَبِيرٌ).',
      develop: 'Redo website mini-checks 3 and 4; write four plural phrases.',
      stretch: 'Finish the website writing workshop (80–90 words) and the mastery check.',
    },
    wordsSource: 'The five words prepare GM-ART-03 (website Articles lesson 3: where the article belongs).',
  },
  remember: 'Remember: the adjective is a mirror · both definite = a phrase · definite + indefinite = a sentence · things in the plural take a feminine singular adjective.',
});

module.exports = { meta, slides };
