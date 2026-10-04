'use strict';
/* GM-CASE-03 · The Genitive Case — website: Mastery & Revision › Grammar › Case Endings › Lesson 3 (two triggers: a preposition and
 * the second noun of an iḍāfa; the muḍāf takes no al- and no tanwīn; adjective scope in an iḍāfa — bābu l-madrasati l-kabīru vs
 * l-kabīrati; genitive markers across number types: -i, -in, -ayni, -īna, -āti; locators contain two case decisions: amāma (-a) +
 * l-masjidi (-i); attached pronouns as genitive complements; clinic). Final Mastery item 6 (fī l-madrasāti) is not used: the
 * plural of madrasa is madāris. Quizzes are the website’s (Readiness, Mini-check: prepositions, Mini-check: iḍāfa and scope, Final
 * Mastery); the Readiness item with bare vowel-mark options is skipped. Colour code: teal = genitive trigger, purple = genitive
 * words. I-do, meaning → phrase drill, trigger sorter, reading, frames and the extended model are teacher-made on the website
 * content (the drill uses the website game items). */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__12-case-endings__grammar-mastery-03-genitive';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-CASE-03', fileTitle: 'Genitive', title: 'The Genitive Case', arabic: 'حَالَةُ الْجَرِّ',
  focus: 'The genitive (-i / -in) follows two triggers: a preposition (fī l-bayti, maʿa ṣadīqin) and the first noun of an iḍāfa (kitābu ṭ-ṭālibi). Look left for the trigger — then carry the -i through the adjective.',
  icon: 'FaLink',
});

const slides = G.gmLesson({
  code: 'GM-CASE-03', site: KEY,
  support: `• Core: the noun after fī, ilā, min, ʿalā, maʿa takes -i / -in; the second noun of an iḍāfa takes -i (kitābu ṭ-ṭālibi). Develop: adjectives copy the genitive (maʿa ṣadīqin qadīmin), dual -ayni, plural -īna / -āti, and locators (amāma l-masjidi). Stretch: adjective scope in an iḍāfa (bābu l-madrasati l-kabīru vs l-kabīrati) and pronoun complements (fīhi, kitābuhu).
• Website: look LEFT for the trigger. The first noun of an iḍāfa never takes al- or tanwīn (bābu l-madrasati, not al-bābu l-madrasati).
• Colour code: teal = trigger, purple = genitive words. Completes the case trilogy with GM-CASE-01/02; leads into GM-POS (possessives).`,
  teach: 'Prepositions; iḍāfa; adjective scope; number forms; locators.',
  wedo: 'Meaning → phrase; which trigger?; repair.',
  next: { nextCode: 'GM-POS-01', nextTitle: 'Possessive Endings', nextAr: 'ضَمَائِرُ الْمِلْكِيَّةِ الْمُتَّصِلَةُ' },
  doNow: {
    questions: [
      W(/Readiness Check/, 0, { prompt: 'Which word is genitive: فِي الْمَدْرَسَةِ', feedback: 'The noun after fī: -i.' }),
      W(/Readiness Check/, 2, { prompt: 'Choose the indefinite genitive of kitāb.', feedback: 'Kitābin: -in.' }),
      W(/Readiness Check/, 3, { prompt: 'Which word is the second noun of the iḍāfa: بَابُ الْمَدْرَسَةِ', feedback: 'Al-madrasati completes it: -i.' }),
      W(/Readiness Check/, 4, { feedback: 'Both -in.' }),
      W(/Readiness Check/, 5, { feedback: 'Dual genitive: -ayni.' }),
    ],
    keyIdea: { text: 'Look left for the trigger: a preposition or a noun before it (iḍāfa) → genitive (-i / -in).', ar: '{k|فِي} {m|الْبَيْتِ} ‖ {k|كِتَابُ} {m|الطَّالِبِ}' },
    retrieves: 'The website Readiness Check — GM-CASE-01/02 endings and GM-CP-01/02 prepositions.',
  },
  objectives: ['Use -i after prepositions.', 'Build an iḍāfa correctly.', 'Make adjectives copy the genitive.', 'Use locators like amāma l-masjidi.'],
  routes: {
    core: ['I write fī l-bayti and maʿa ṣadīqin.', 'I build kitābu ṭ-ṭālibi.'],
    develop: ['I use -ayni, -īna and -āti.', 'I use amāma, khalfa, bayna.'],
    stretch: ['I show adjective scope in an iḍāfa.', 'I describe a place in 110–130 words.'],
  },
  terms: {
    items: [
      { ar: 'الْجَرُّ', en: 'the genitive case', note: 'الْبَيْتِ · بَيْتٍ' },
      { ar: 'الْكَسْرَةُ', en: 'kasra: -i', note: 'فِي الْبَيْتِ' },
      { ar: 'حَرْفُ الْجَرِّ', en: 'preposition (trigger 1)', note: 'فِي · إِلَى · مِنْ' },
      { ar: 'الْإِضَافَةُ', en: 'iḍāfa: noun + noun (trigger 2)', note: 'كِتَابُ الطَّالِبِ' },
      { ar: 'الْمُضَافُ إِلَيْهِ', en: 'second noun of an iḍāfa', note: 'الطَّالِبِ' },
      { ar: 'ظَرْفُ الْمَكَانِ', en: 'locator', note: 'أَمَامَ الْمَسْجِدِ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · after prepositions (website table)', title: 'Trigger 1: a preposition', ar: 'بَعْدَ حُرُوفِ الْجَرِّ', ltr: true,
      cols: [{ label: 'Preposition', w: 2.4, size: 26 }, { label: 'Meaning', w: 3.0 }, { label: 'Website model', w: 3.4, size: 24 }, { label: 'Plus', w: 3.53, size: 22 }],
      rows: [
        { core: true, cells: ['فِي', 'in', 'فِي الْبَيْتِ', 'فِي بَيْتٍ كَبِيرٍ'] },
        { core: true, cells: ['إِلَى', 'to', 'إِلَى الْمَدْرَسَةِ', 'إِلَى مَدْرَسَتَيْنِ'] },
        { core: true, cells: ['مِنْ', 'from', 'مِنَ الْمَكْتَبِ', 'مِنْ بَلَدٍ جَمِيلٍ'] },
        { cells: ['عَلَى', 'on', 'عَلَى الطَّاوِلَةِ', 'عَلَى الطَّاوِلَةِ الْجَدِيدَةِ'] },
        { cells: ['عَنْ', 'about / away from', 'عَنِ الرِّحْلَةِ', 'عَنْ رِحْلَةٍ طَوِيلَةٍ'] },
        { cells: ['بِـ · لِـ', 'with / by · for', 'بِالْحَافِلَةِ', 'لِلطَّالِبِ'] },
        { core: true, cells: ['مَعَ', 'with (someone)', 'مَعَ صَدِيقٍ', 'مَعَ الْمُعَلِّمِينَ'] },
      ],
      foot: 'Website: the noun governed by a preposition is genitive — and its adjective follows: maʿa ṣadīqin qadīmin, ilā madrasatayni jadīdatayni.',
      notes: 'PART 1 (3 min) — website “After prepositions” (column 4 from the website models and Final Mastery). Linking vowels: mina l-, ʿani r-.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · the second noun of an iḍāfa (website table)', title: 'Trigger 2: a noun before it', ar: 'الْمُضَافُ إِلَيْهِ', ltr: true,
      cols: [{ label: 'Meaning', w: 3.6 }, { label: 'Correct iḍāfa', w: 4.4, size: 24 }, { label: 'Error to avoid', w: 4.33, size: 22 }],
      rows: [
        { core: true, cells: ['the teacher’s house', 'بَيْتُ الْمُعَلِّمِ', 'الْبَيْتُ الْمُعَلِّمِ'] },
        { core: true, cells: ['a teacher’s house', 'بَيْتُ مُعَلِّمٍ', 'بَيْتٌ مُعَلِّمٌ'] },
        { cells: ['the two pupils’ books', 'كُتُبُ الطَّالِبَيْنِ', 'كُتُبُ الطَّالِبَانِ'] },
        { cells: ['the female pupils’ classroom', 'فَصْلُ الطَّالِبَاتِ', 'فَصْلُ الطَّالِبَاتُ'] },
        { cells: ['the head of the girls’ school', 'مُدِيرُ مَدْرَسَةِ الْبَنَاتِ', 'chain: each noun completes the one before'] },
      ],
      foot: 'Website warning: the first noun (muḍāf) takes NO al- and NO tanwīn. It becomes definite through the noun after it. The first noun’s case depends on its job in the sentence.',
      notes: 'PART 2 (3 min) — website “The second noun of an iḍāfa”. Column 3 shows the website’s own error column — read it as “never write this”.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 3 · adjective scope in an iḍāfa (website models) · Stretch', title: 'Which noun does the adjective describe?', ar: 'لِمَنِ الصِّفَةُ؟', ltr: true,
      cols: [{ label: 'Phrase', w: 4.8, size: 24 }, { label: 'Describes', w: 3.2 }, { label: 'Meaning', w: 4.33 }],
      rows: [
        { core: true, cells: ['بَابُ الْمَدْرَسَةِ الْكَبِيرُ', 'the door (-u, m.)', 'the school’s big door'] },
        { core: true, cells: ['بَابُ الْمَدْرَسَةِ الْكَبِيرَةِ', 'the school (-i, f.)', 'the door of the big school'] },
        { cells: ['سَاحَةُ الْمَدْرَسَةِ الْوَاسِعَةُ', 'the yard (-u)', 'the school’s spacious yard'] },
        { cells: ['بَيْتُ الْمُعَلِّمِ الْجَدِيدُ', 'the house (-u)', 'the teacher’s new house'] },
        { cells: ['بَيْتُ الْمُعَلِّمِ الْجَدِيدِ', 'the teacher (-i)', 'the new teacher’s house'] },
      ],
      foot: 'Website: do not guess from closeness. The adjective comes at the END of the iḍāfa, and its gender and case show which noun it belongs to.',
      notes: 'PART 3 (2 min) — website “Adjective scope” (rows 4–5 teacher-added). Ask: -u or -i? masculine or feminine?',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 4 · genitive markers across number types (website table) · Develop', title: 'Same job, different shapes', ar: 'عَلَامَاتُ الْجَرِّ', ltr: true,
      cols: [{ label: 'Noun type', w: 3.6 }, { label: 'Definite', w: 4.2, size: 26 }, { label: 'Indefinite', w: 4.53, size: 26 }],
      rows: [
        { core: true, cells: ['singular', 'الطَّالِبِ', 'طَالِبٍ'] },
        { cells: ['dual', 'الطَّالِبَيْنِ', 'طَالِبَيْنِ'] },
        { cells: ['sound masculine plural', 'الْمُعَلِّمِينَ', 'مُعَلِّمِينَ'] },
        { cells: ['sound feminine plural', 'الطَّالِبَاتِ', 'طَالِبَاتٍ'] },
      ],
      foot: 'Website: duals and sound masculine plurals use the same ending for accusative and genitive (-ayni, -īna); the sound feminine plural uses kasra in both. Find the trigger to know which case it is.',
      notes: 'PART 4 (2 min) — website “Genitive markers across number types”. Even unvowelled, -ayni / -īna tell you: not nominative.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 5 · locators contain two case decisions (website table) · Develop', title: 'Locator (-a) + genitive (-i)', ar: 'ظَرْفٌ + مُضَافٌ إِلَيْهِ', ltr: true,
      cols: [{ label: 'Expression', w: 4.4, size: 24 }, { label: 'Locator', w: 3.4 }, { label: 'Complement', w: 4.53 }],
      rows: [
        { core: true, cells: ['أَمَامَ الْمَسْجِدِ', 'amāma: -a', 'al-masjidi: -i'] },
        { core: true, cells: ['خَلْفَ الْمَدْرَسَةِ', 'khalfa: -a', 'al-madrasati: -i'] },
        { cells: ['بَيْنَ الْبَيْتِ وَالْمَتْجَرِ', 'bayna: -a', 'both nouns: -i'] },
        { cells: ['قُرْبَ مَحَطَّةٍ كَبِيرَةٍ', 'qurba: -a', 'noun + adjective: -in'] },
      ],
      foot: 'Website: a whole phrase cannot be called “genitive” — different words have different jobs. Stretch: pronouns can replace the genitive noun — fī l-bayti → fīhi; kitābu ṭ-ṭālibi → kitābuhu.',
      notes: 'PART 5 (2 min) — website “Locators” + “Attached pronouns as complements” (fīhi, ilayhā, kitābuhu, maʿahunna). Pronoun endings lead into GM-POS-01.',
    },
  ],
  quick: [
    W(/prepositions/, 0, { feedback: 'After ilā: -i.' }),
    W(/prepositions/, 1, { feedback: 'Noun and adjective: both -in.' }),
    W(/prepositions/, 2, { feedback: 'Dual after a preposition: -ayni.' }),
    W(/prepositions/, 3, { feedback: 'Li- + plural: -īna.' }),
  ],
  quickNote: 'website mini-check: prepositions.',
  ido: {
    title: 'Watch me follow the triggers in a place description',
    steps: [
      { head: 'Trigger', ar: 'قُرْبَ', think: 'Locator: next noun -i.' },
      { head: 'Genitive', ar: 'مَدْرَسَةٍ كَبِيرَةٍ', think: 'Noun + adjective: -in.' },
      { head: 'Iḍāfa', ar: 'حَدِيقَةُ الْحَيِّ', think: 'Second noun: -i.' },
      { head: 'Scope', ar: 'الْجَمِيلَةُ', think: '-u, f.: the garden.' },
    ],
    legend: ['k', 'm'], legendLabels: { k: 'TRIGGER', m: 'GENITIVE' },
    model: 'يَقَعُ {k|بَيْتُ} {m|عَائِلَتِي} {k|قُرْبَ} {m|مَدْرَسَةٍ كَبِيرَةٍ}. {k|أَمَامَ} {m|الْبَيْتِ} {k|حَدِيقَةُ} {m|الْحَيِّ} الْجَمِيلَةُ. أَمْشِي كُلَّ صَبَاحٍ {k|إِلَى} {m|الْمَدْرَسَةِ} {k|مَعَ} {m|صَدِيقَيْنِ قَدِيمَيْنِ}.',
    modelEn: 'My family’s house is near a big school. In front of the house is the neighbourhood’s beautiful garden. Every morning I walk to school with two old friends.',
    notes: 'Website reading-map line, extended. Website question: which noun does al-jamīlatu describe? (-u → ḥadīqatu, the garden.)',
  },
  models: [
    { ar: 'ذَهَبْتُ إِلَى الْمَكْتَبَةِ.', en: 'I went to the library.', tip: 'After ilā: -i.' },
    { ar: 'هَذَا كِتَابُ الطَّالِبِ.', en: 'This is the student’s book.', tip: 'Iḍāfa: -i.' },
    { ar: 'سَافَرْتُ مَعَ صَدِيقٍ قَدِيمٍ.', en: 'I travelled with an old friend.', tip: '-in + -in.' },
    { ar: 'تَحَدَّثْتُ مَعَ الْمُعَلِّمِينَ.', en: 'I talked with the teachers.', tip: 'Plural: -īna.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · meaning → genitive phrase (website game)', title: 'Find the trigger, add the -i', ar: 'قُلْهَا بِالْجَرِّ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Meaning', w: 3.6 }, { label: 'Arabic', w: 5.2, size: 24 }, { label: 'Trigger', w: 3.53 }],
      rows: [
        { core: true, cells: ['in the large school', 'فِي الْمَدْرَسَةِ الْكَبِيرَةِ', 'fī'] },
        { core: true, cells: ['with an old friend', 'مَعَ صَدِيقٍ قَدِيمٍ', 'maʿa'] },
        { cells: ['to two schools', 'إِلَى مَدْرَسَتَيْنِ', 'ilā (dual -ayni)'] },
        { cells: ['with the teachers', 'مَعَ الْمُعَلِّمِينَ', 'maʿa (plural -īna)'] },
        { core: true, cells: ['the pupil’s book', 'كِتَابُ الطَّالِبِ', 'iḍāfa'] },
        { cells: ['in front of the mosque', 'أَمَامَ الْمَسْجِدِ', 'locator'] },
      ],
      foot: 'Website editing strategy: find the trigger, then follow the noun–adjective chain.',
      notes: 'WE DO (3 min) — website game items. Cover column 2.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · which trigger?', title: 'Preposition or iḍāfa?', ar: 'حَرْفُ جَرٍّ أَمْ إِضَافَةٌ؟',
      categories: ['Preposition trigger', 'Iḍāfa trigger'],
      items: [['فِي الْبَيْتِ', 0], ['إِلَى الْمَدْرَسَةِ', 0], ['مَعَ صَدِيقٍ', 0], ['عَلَى الطَّاوِلَةِ', 0], ['كِتَابُ الطَّالِبِ', 1], ['بَابُ الْفَصْلِ', 1], ['مُدِيرُ مَدْرَسَةٍ', 1], ['بَيْتُ الْمُعَلِّمِ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). For each iḍāfa card: no al- on the first word. Then add an adjective to two cards.',
    },
  ],
  mistakes: [
    { wrong: 'فِي الْمَدْرَسَةُ', right: 'فِي الْمَدْرَسَةِ', why: 'After a preposition: -i (website clinic).' },
    { wrong: 'الْبَابُ الْمَدْرَسَةِ', right: 'بَابُ الْمَدْرَسَةِ', why: 'The first noun of an iḍāfa has no al- (website clinic).' },
    { wrong: 'إِلَى الطَّالِبَانِ', right: 'إِلَى الطَّالِبَيْنِ', why: 'Dual genitive: -ayni (website clinic).' },
  ],
  hints: ['What comes before it?', 'Can the first noun of an iḍāfa take al-?', 'Dual after ilā?'],
  practice: [
    W(/iḍāfa and scope/, 0, { prompt: 'Choose “the school’s large door”.', feedback: 'Al-kabīru (-u, m.) describes bābu.' }),
    W(/iḍāfa and scope/, 1, { prompt: 'Choose “the door of the large school”.', feedback: 'Al-kabīrati (-i, f.) describes al-madrasati.' }),
    W(/iḍāfa and scope/, 2, { prompt: 'Choose the iḍāfa with an indefinite second noun.', feedback: 'Bābu madrasatin jadīdatin.' }),
    W(/iḍāfa and scope/, 3, { prompt: 'Choose the correct iḍāfa chain.', feedback: 'Each noun completes the one before.' }),
  ],
  practiceLabel: 'website mini-check: iḍāfa and scope',
  read: {
    title: 'Where I live', label: 'website reading map (teacher-written description)',
    text: 'أَسْكُنُ فِي شَقَّةٍ صَغِيرَةٍ فِي الطَّابِقِ الثَّالِثِ. تَقَعُ الْعِمَارَةُ فِي شَارِعٍ هَادِئٍ بَيْنَ الْمَسْجِدِ وَالسُّوقِ. أَمَامَ الْعِمَارَةِ مَوْقِفُ الْحَافِلَاتِ، وَخَلْفَهَا حَدِيقَةٌ وَاسِعَةٌ. غُرْفَتِي بِجَانِبِ غُرْفَةِ أَخَوَيَّ، وَنَافِذَتُهَا عَلَى الشَّارِعِ. فِي نِهَايَةِ الشَّارِعِ مَدْرَسَةُ الْبَنَاتِ الْكَبِيرَةُ، وَقُرْبَهَا مَكْتَبَةٌ صَغِيرَةٌ لِلطُّلَّابِ. أَذْهَبُ إِلَى الْمَكْتَبَةِ مَعَ صَدِيقَتَيْنِ مِنْ صَفِّي كُلَّ أُسْبُوعٍ.',
    glossary: [['شَقَّةٍ', 'a flat'], ['الْعِمَارَةُ', 'the building'], ['مَوْقِفُ الْحَافِلَاتِ', 'the bus stop'], ['نَافِذَتُهَا', 'its window'], ['صَدِيقَتَيْنِ', 'two friends (f.)']],
    task: 'Website: circle every genitive trigger, underline the genitive nouns and their adjectives, and decide which noun al-kabīratu describes.',
    questions: [
      q('Where is the building?', ['between the mosque and the market', 'behind the school', 'next to the river'], 'Bayna l-masjidi wa-s-sūqi.'),
      q('What is in front of the building?', ['the bus stop', 'a garden', 'a library'], 'Amāma l-ʿimārati mawqifu l-ḥāfilāti.'),
      q('In madrasatu l-banāti l-kabīratu, what does al-kabīratu describe?', ['the school', 'the girls', 'the street'], '-u: it matches madrasatu.'),
      q('Who does the writer go to the library with?', ['two friends from her class', 'her brothers', 'her mother'], 'Maʿa ṣadīqatayni: dual -ayni.'),
    ],
    qNote: 'Teacher-written description for the website reading-map task; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: give directions', source: 'website speaking route',
    prompts: [
      { route: 'core', ar: 'أَيْنَ بَيْتُكَ؟' },
      { route: 'develop', ar: 'مَاذَا يُوجَدُ أَمَامَ مَدْرَسَتِكَ وَخَلْفَهَا؟' },
      { route: 'stretch', ar: 'كَيْفَ أَذْهَبُ مِنْ بَيْتِكَ إِلَى الْمَسْجِدِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'بَيْتِي فِي ______ ، قُرْبَ ______ .' },
      { route: 'develop', ar: 'أَمَامَ الْمَدْرَسَةِ ______ ، وَخَلْفَهَا ______ .' },
      { route: 'stretch', ar: 'اِمْشِ مِنْ ______ إِلَى ______ ، ثُمَّ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'أَيْنَ مَكْتَبَةُ الْحَيِّ؟', en: 'Where is the neighbourhood library?' },
      { who: 'B', ar: 'هِيَ فِي شَارِعِ الْمَدْرَسَةِ، بَيْنَ الْبَنْكِ وَالْمَخْبَزِ. اِمْشِ إِلَى نِهَايَةِ الشَّارِعِ، وَسَتَجِدُهَا أَمَامَ مَوْقِفِ الْحَافِلَاتِ.', en: 'It is on School Street, between the bank and the bakery. Walk to the end of the street and you will find it in front of the bus stop.' },
    ],
    notes: 'Website route: four prepositions, three locators, two iḍāfa phrases, one dual or sound plural genitive.',
  },
  write: {
    siteTask: 'Write 110–130 Arabic words describing a room, school, route or neighbourhood.',
    core: { amount: '5 sentences', task: 'Your room: where things are.', how: 'fī … · ʿalā … · bi-jānibi …' },
    develop: { amount: '8 sentences', task: 'Add three iḍāfa phrases and one dual or plural.', how: 'bābu l-ghurfati · maʿa ukhtayya.' },
    stretch: { amount: '110–130 words', task: 'Website place description with the full checklist.', how: 'Sketch the place first.' },
  },
  frames: {
    core: [
      { en: 'My house is in …', ar: 'بَيْتِي فِي ______ .' },
      { en: 'I go to … with …', ar: 'أَذْهَبُ إِلَى ______ مَعَ ______ .' },
      { en: 'This is my brother’s …', ar: 'هَذَا ______ أَخِي.' },
      { en: 'The book is on the …', ar: 'الْكِتَابُ عَلَى ______ .' },
    ],
    develop: [
      { en: 'In front of the school is …', ar: 'أَمَامَ الْمَدْرَسَةِ ______ .' },
      { en: 'The mosque is between … and …', ar: 'الْمَسْجِدُ بَيْنَ ______ وَ______ .' },
      { en: 'I live near a …', ar: 'أَسْكُنُ قُرْبَ ______ .' },
      { en: 'I talked with the …', ar: 'تَحَدَّثْتُ مَعَ ______ .' },
    ],
    bank: ['فِي', 'إِلَى', 'مِنْ', 'عَلَى', 'مَعَ', 'أَمَامَ', 'خَلْفَ', 'بَيْنَ', 'قُرْبَ', 'بِجَانِبِ', 'الْبَيْتِ', 'الْمَدْرَسَةِ', 'كَبِيرٍ'],
  },
  stretchTask: {
    task: 'Website place description (110–130 words): a room, school, route or neighbourhood.',
    checklist: ['Six prepositional phrases.', 'Three locators (amāma, khalfa, bayna …).', 'Three iḍāfa structures.', 'One dual or plural genitive.', 'Adjective scope correct in your iḍāfa phrases.'],
    phrases: [['عَلَى يَمِينِ', 'on the right of'], ['عَلَى يَسَارِ', 'on the left of'], ['فِي وَسَطِ', 'in the middle of'], ['فَوْقَ', 'above'], ['تَحْتَ', 'under'], ['فِي نِهَايَةِ', 'at the end of']],
  },
  model: {
    text: 'غُرْفَتِي فِي الطَّابِقِ الْعُلْوِيِّ مِنْ بَيْتِنَا، وَهِيَ مَكَانِي الْمُفَضَّلُ. عَلَى يَمِينِ الْبَابِ مَكْتَبٌ خَشَبِيٌّ، وَفَوْقَ الْمَكْتَبِ رَفُّ الْكُتُبِ الْقَدِيمُ. أَضَعُ كُتُبَ الْمَدْرَسَةِ عَلَى الرَّفِّ، وَأَضَعُ دَفَاتِرِي فِي دُرْجِ الْمَكْتَبِ. بَيْنَ السَّرِيرِ وَالنَّافِذَةِ كُرْسِيٌّ مُرِيحٌ لِلْقِرَاءَةِ. نَافِذَةُ الْغُرْفَةِ الْكَبِيرَةُ عَلَى حَدِيقَةِ الْجِيرَانِ، فَأَرَى أَشْجَارَ الْحَدِيقَةِ كُلَّ صَبَاحٍ. تَحْتَ السَّرِيرِ صُنْدُوقٌ فِيهِ أَلْعَابُ طُفُولَتِي. عَلَى الْجِدَارِ صُورَةُ جَدِّي وَجَدَّتِي فِي يَوْمِ زِفَافِهِمَا. فِي الْمَسَاءِ أَجْلِسُ مَعَ أُخْتَيَّ الصَّغِيرَتَيْنِ فِي غُرْفَتِي، وَنَتَحَدَّثُ عَنْ أَحْدَاثِ الْيَوْمِ.',
    en: 'My room is on the top floor of our house, and it is my favourite place. To the right of the door is a wooden desk, and above the desk is the old bookshelf. I put my school books on the shelf and my exercise books in the desk drawer. Between the bed and the window is a comfortable reading chair. The room’s big window looks onto the neighbours’ garden, so I see the garden’s trees every morning. Under the bed is a box with my childhood toys in it. On the wall is a picture of my grandfather and grandmother on their wedding day. In the evening I sit with my two little sisters in my room, and we talk about the day’s events.',
    find: ['preposition + -i', 'locator + -i', 'iḍāfa', 'adjective scope (-u or -i)'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'Every noun after a preposition ends in -i / -in.' },
    { route: 'core', text: 'The first noun of my iḍāfa has no al- and no tanwīn.' },
    { route: 'develop', text: 'My adjectives carry the -i too.' },
    { route: 'develop', text: 'Duals and plurals: -ayni, -īna, -āti.' },
    { route: 'stretch', text: 'My adjective ending shows which noun it describes.' },
  ],
  exit: [
    W(/Final Mastery/, 3, { feedback: 'Feminine dual after ilā: -atayni.' }),
    W(/Final Mastery/, 6, { feedback: 'No al- on the first noun; second noun -i.' }),
    W(/Final Mastery/, 8, { prompt: 'In أَمَامَ الْمَسْجِدِ, why is al-masjidi genitive?', feedback: 'It completes the locator.' }),
  ],
  mastery: false,
  prep: {
    words: [['كِتَابِي', 'my book', '—'], ['كِتَابُكَ', 'your (m.) book', '—'], ['كِتَابُكِ', 'your (f.) book', '—'], ['كِتَابُهُ', 'his book', '—'], ['كِتَابُهَا', 'her book', '—']],
    questionEn: 'Today kitābuhu (his book) replaced kitābu ṭ-ṭālibi. How do you think you say “the girl’s bag” with a pronoun?',
    questionAr: 'كِتَابُ الطَّالِبِ = كِتَابُهُ · حَقِيبَةُ الطَّالِبَةِ = ؟',
    homework: {
      core: 'Write six prepositional phrases about your room.',
      develop: 'Write four iḍāfa phrases with adjectives.',
      stretch: 'Website place description (110–130 words).',
    },
    wordsSource: 'The five words prepare GM-POS-01 (website: possessive endings).',
  },
  remember: 'Remember: genitive (-i / -in) after a preposition and on the second noun of an iḍāfa · the first noun of an iḍāfa: no al-, no tanwīn · adjectives copy the -i · dual -ayni, plural -īna / -āti · amāma (-a) + l-masjidi (-i).',
});

module.exports = { meta, slides };
