'use strict';
/* GM-ADJ-06 · Comparative and Superlative — website: Mastery & Revision › Grammar › Adjectives › Lesson 6 (أَفْعَلُ + مِنْ, fixed form —
 * أَحْمَدُ أَطْوَلُ مِنْ عَلِيٍّ · مَرْيَمُ أَطْوَلُ مِنْ سَلْمَى; superlative by definite form هُوَ الْأَفْضَلُ or iḍāfa أَفْضَلُ كِتَابٍ ·
 * أَسْرَعُ طَالِبَةٍ; analytical comparison with أَكْثَرُ / أَقَلُّ + noun in -an — أَكْثَرُ أَهَمِّيَّةً; clinic: no ة on the comparative,
 * don’t forget مِنْ). The website Entry Check is the Do Now (prompt 1 rewritten in English, feedback in English); guided and mastery
 * checks repeat it, so quick check, practice and exit are teacher-written. Teacher-added: the formation table (doubled and weak roots:
 * أَحَرُّ · أَقَلُّ · أَغْلَى), the “no tanwīn” note and the feminine superlative الْكُبْرَى for Stretch recognition. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-ADJ-06', fileTitle: 'Comparative_and_Superlative', title: 'Comparative and Superlative', arabic: 'اِسْمُ التَّفْضِيلِ: أَفْعَلُ وَالْأَفْعَلُ',
  focus: 'One pattern, afʿal, makes “bigger” and “biggest”. Bigger than = akbaru min (never changes for gender). The biggest = al-akbar, or akbaru + an indefinite noun: “the biggest city”.',
  icon: 'FaRankingStar',
});

const slides = G.gmLesson({
  code: 'GM-ADJ-06', site: 'grammar__04-adjectives__grammar-mastery-06-comparative-superlative',
  support: `• Core: build afʿal from common adjectives (كَبِيرٌ أَكْبَرُ · طَوِيلٌ أَطْوَلُ · سَرِيعٌ أَسْرَعُ) and compare with مِنْ. Develop: superlative — هُوَ الْأَفْضَلُ and أَفْضَلُ كِتَابٍ. Stretch: analytical comparison with أَكْثَرُ / أَقَلُّ + noun in -an (أَكْثَرُ أَهَمِّيَّةً); doubled and weak roots (أَحَرُّ · أَغْلَى); recognition of الْكُبْرَى.
• The comparative does NOT agree in gender: مَرْيَمُ أَطْوَلُ مِنْ سَلْمَى (website). Many students add ة — this is the website’s first clinic point.
• Afʿal is a diptote: no tanwīn (أَكْبَرُ, not أَكْبَرٌ) — the same shape as the colours in ADJ-03, but a different meaning.`,
  teach: 'Comparative + min; superlative routes; analytical comparison.',
  wedo: 'Build afʿal, compare, rank.',
  next: { nextCode: 'GM-ADJ-07', nextTitle: 'Demonstratives and Agreement', nextAr: 'أَسْمَاءُ الْإِشَارَةِ وَالْمُطَابَقَةُ' },
  doNow: {
    fb: {
      0: { prompt: 'Choose “The train is faster than the bus.”', options: ['الْقِطَارُ أَسْرَعَ الْحَافِلَةِ', 'الْقِطَارُ أَسْرَعُ مِنَ الْحَافِلَةِ', 'الْقِطَارُ السَّرِيعُ مِنَ الْحَافِلَةِ'], feedback: 'Comparative + min.' },
      1: 'The comparative stays afʿal, even for a woman.',
      2: 'The definite superlative.',
      3: 'Superlative as the first word of an iḍāfa.',
    },
    keyIdea: { text: 'Bigger than = akbaru min — the same for boys and girls. The biggest = al-akbar, or akbaru + an indefinite noun.', ar: 'أَكْبَرُ {k|مِنْ} ‖ {e|أَكْبَرُ مَدِينَةٍ}' },
    retrieves: 'The website Entry Check (all five questions) — it uses the five words prepared at the end of GM-ADJ-05.',
  },
  objectives: ['Form the comparative afʿal from common adjectives.', 'Compare two things with afʿal + min.', 'Express the superlative in two ways.', 'Use akthar / aqall for adjectives without a simple afʿal.'],
  routes: {
    core: ['I make bigger, taller, faster.', 'I compare two people or things with min.'],
    develop: ['I say the best and the best book.', 'I keep the comparative the same for girls.'],
    stretch: ['I use more important and more helpful.', 'I form hotter, less and more expensive.'],
  },
  terms: {
    items: [
      { ar: 'اسْمُ التَّفْضِيلِ', en: 'comparative / superlative', note: 'pattern أَفْعَلُ' },
      { ar: 'أَفْعَلُ', en: 'the afʿal pattern', tr: 'afʿal', note: 'أَكْبَرُ · أَسْرَعُ' },
      { ar: 'مِنْ', en: 'than', tr: 'min', note: 'أَكْبَرُ مِنْ' },
      { ar: 'الْأَفْضَلُ', en: 'the best', note: 'هُوَ الْأَفْضَلُ' },
      { ar: 'أَكْثَرُ', en: 'more (most)', note: 'أَكْثَرُ أَهَمِّيَّةً' },
      { ar: 'أَقَلُّ', en: 'less (least)', note: 'أَقَلُّ صُعُوبَةً' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · step 1 · building afʿal · Core', title: 'From adjective to comparative', ar: 'بِنَاءُ أَفْعَلَ', ltr: true,
      cols: [{ label: 'Adjective', w: 3.0, size: 24 }, { label: 'Meaning', w: 2.8 }, { label: 'Comparative', w: 3.0, size: 24 }, { label: 'Meaning', w: 3.53 }],
      rows: [
        { core: true, cells: ['كَبِيرٌ', 'big', 'أَكْبَرُ', 'bigger / older'] },
        { core: true, cells: ['صَغِيرٌ', 'small', 'أَصْغَرُ', 'smaller / younger'] },
        { core: true, cells: ['طَوِيلٌ', 'tall, long', 'أَطْوَلُ', 'taller, longer'] },
        { core: true, cells: ['سَرِيعٌ', 'fast', 'أَسْرَعُ', 'faster'] },
        { cells: ['جَيِّدٌ / حَسَنٌ', 'good', 'أَفْضَلُ / أَحْسَنُ', 'better'] },
        { cells: ['حَارٌّ · قَلِيلٌ · غَالٍ', 'hot · few · expensive', 'أَحَرُّ · أَقَلُّ · أَغْلَى', 'Stretch: doubled and weak roots'] },
      ],
      foot: 'Take the three root letters and put them into a-_-_-a-_: k-b-r → akbar. Afʿal never takes tanwīn.',
      notes: 'STEP 1 (3 min) — teacher-added formation table (the website assumes it). Root-letter colouring helps: k-b-r in both كَبِيرٌ and أَكْبَرُ. Good is irregular: afḍal (from faḍl).',
    },
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · step 2 · comparative with min (website)', title: 'Afʿal + min = “…er than”', ar: 'أَفْعَلُ مِنْ',
      points: [
        'Most comparisons use afʿal followed by min, “than” (website).',
        'The comparative is FIXED: it does not change for a feminine or plural subject (website).',
        'The noun after min is genitive (-i / -in).',
        'Do not forget min in a two-item comparison (website clinic).',
        'min + al- becomes mina l- for easy pronunciation.',
      ],
      examples: [
        { ar: 'أَحْمَدُ أَطْوَلُ مِنْ عَلِيٍّ.', en: 'Ahmad is taller than Ali.', note: 'website' },
        { ar: 'مَرْيَمُ أَطْوَلُ مِنْ سَلْمَى.', en: 'Maryam is taller than Salma.', note: 'website — no ة!' },
        { ar: 'الْقِطَارُ أَسْرَعُ مِنَ الْحَافِلَةِ.', en: 'The train is faster than the bus.', note: 'website' },
        { ar: 'السَّيَّارَاتُ أَغْلَى مِنَ الدَّرَّاجَاتِ.', en: 'Cars are more expensive than bikes.', note: 'plural — still fixed' },
      ],
      callout: { kind: 'warn', head: 'WEBSITE CLINIC', text: 'Never add tāʾ marbūṭa to the comparative because the subject is feminine: Maryam is aṭwalu, not “aṭwalatu”.' },
      notes: 'STEP 2 (3 min) — website “Comparative with min”.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · step 3 · superlative and analytical comparison (website) · Develop / Stretch', title: 'The best, the most — and “more …”', ar: 'الْأَفْضَلُ وَأَكْثَرُ', ltr: true,
      cols: [{ label: 'Route', w: 3.0 }, { label: 'Arabic (website)', w: 5.2, size: 24 }, { label: 'Meaning', w: 4.13 }],
      rows: [
        { core: true, cells: ['al- + afʿal', 'هَذَا الْكِتَابُ هُوَ الْأَفْضَلُ.', 'This book is the best.'] },
        { core: true, cells: ['afʿal + indefinite noun', 'هَذَا أَفْضَلُ كِتَابٍ.', 'This is the best book.'] },
        { core: true, cells: ['afʿal + indefinite noun', 'هِيَ أَسْرَعُ طَالِبَةٍ فِي الْفَرِيقِ.', 'She is the fastest student in the team.'] },
        { cells: ['more + noun in -an', 'هَذَا الْعَمَلُ أَكْثَرُ أَهَمِّيَّةً.', 'This work is more important.'] },
        { cells: ['more + noun in -an', 'هِيَ أَكْثَرُ تَعَاوُنًا مِنْ زَمِيلَتِهَا.', 'She is more cooperative than her colleague.'] },
        { cells: ['recognition: feminine', 'الْمُدُنُ الْكُبْرَى', 'the major cities (kubrā)'] },
      ],
      foot: 'Website: not every adjective has a simple afʿal (long adjectives, colours). Then use akthar / aqall + a noun ending in -an.',
      notes: 'STEP 3 (4 min) — website “Superlative routes” and “Analytical comparison”. The iḍāfa superlative (afḍalu kitābin) is the most useful for exams. Kubrā is for Stretch recognition only.',
    },
  ],
  quick: [
    q('Comparative of صَغِيرٌ?', ['أَصْغَرُ', 'صُغْرَى', 'أَصْغَرَةٌ'], 'Pattern afʿal.'),
    q('Choose “Fatima is older than Zainab.”', ['فَاطِمَةُ أَكْبَرُ مِنْ زَيْنَبَ.', 'فَاطِمَةُ أَكْبَرَةُ مِنْ زَيْنَبَ.', 'فَاطِمَةُ كَبِيرَةٌ زَيْنَبَ.'], 'Fixed form + min.'),
    q('Choose “the longest river”.', ['أَطْوَلُ نَهْرٍ', 'النَّهْرُ أَطْوَلُ', 'أَطْوَلُ مِنْ نَهْرٍ'], 'Afʿal + indefinite noun.'),
    q('Choose “more useful” (using akthar).', ['أَكْثَرُ فَائِدَةً', 'أَكْثَرُ مُفِيدٌ', 'أَمْفَدُ'], 'Akthar + noun in -an.'),
  ],
  quickNote: 'teacher-written hinge questions on the website’s three steps.',
  ido: {
    title: 'Watch me compare and rank',
    steps: [
      { head: 'Adjective', ar: 'سَرِيعٌ', think: 'root s-r-ʿ.' },
      { head: 'Comparative', ar: 'أَسْرَعُ', think: 'a-s-r-a-ʿ.' },
      { head: 'Compare', ar: 'الطَّائِرَةُ أَسْرَعُ مِنَ الْقِطَارِ', think: 'fixed + min.' },
      { head: 'Superlative', ar: 'الطَّائِرَةُ أَسْرَعُ وَسِيلَةٍ', think: 'afʿal + noun.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'COMPARATIVE', e: 'SUPERLATIVE' },
    model: 'الطَّائِرَةُ {k|أَسْرَعُ} مِنَ الْقِطَارِ، وَالْقِطَارُ {k|أَسْرَعُ} مِنَ الْحَافِلَةِ؛ إِذَنِ الطَّائِرَةُ {e|أَسْرَعُ وَسِيلَةِ} نَقْلٍ.',
    modelEn: 'The plane is faster than the train, and the train is faster than the bus; so the plane is the fastest means of transport.',
    notes: 'Write the three transport words on screen; students rank them in Arabic. Point out أَسْرَعُ never changes, even with الطَّائِرَةُ (feminine).',
  },
  models: [
    { ar: 'أَخِي أَكْبَرُ مِنِّي.', en: 'My brother is older than me.', tip: 'min + -nī = than me.' },
    { ar: 'لَنْدَن أَكْبَرُ مَدِينَةٍ فِي بِرِيطَانِيَا.', en: 'London is the biggest city in Britain.', tip: 'Afʿal + indefinite noun.' },
    { ar: 'الرِّيَاضِيَّاتُ هِيَ الْأَصْعَبُ.', en: 'Maths is the hardest.', tip: 'al- + afʿal.' },
    { ar: 'الْقِرَاءَةُ أَكْثَرُ فَائِدَةً مِنَ الْأَلْعَابِ.', en: 'Reading is more useful than games.', tip: 'akthar + noun in -an.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 2, eyebrow: 'We do · build afʿal · say it aloud', title: 'Make the comparative', ar: 'كَوِّنْ أَفْعَلَ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Adjective', w: 3.0, size: 24 }, { label: 'Meaning', w: 2.6 }, { label: 'Comparative', w: 3.0, size: 24 }, { label: 'Sentence', w: 3.73, size: 20 }],
      rows: [
        { core: true, cells: ['قَصِيرٌ', 'short', 'أَقْصَرُ', 'أَنَا أَقْصَرُ مِنْ أَبِي.'] },
        { core: true, cells: ['جَمِيلٌ', 'beautiful', 'أَجْمَلُ', 'الرَّبِيعُ أَجْمَلُ فَصْلٍ.'] },
        { core: true, cells: ['سَهْلٌ', 'easy', 'أَسْهَلُ', 'الْعَرَبِيَّةُ أَسْهَلُ مِمَّا أَظُنُّ!'] },
        { cells: ['قَرِيبٌ', 'near', 'أَقْرَبُ', 'الْمَسْجِدُ أَقْرَبُ مِنَ السُّوقِ.'] },
        { cells: ['جَدِيدٌ', 'new', 'أَحْدَثُ', 'هَاتِفِي أَحْدَثُ هَاتِفٍ.'] },
      ],
      foot: 'Cover columns 3 and 4; students say the comparative, then make their own sentence.',
      notes: 'WE DO (2 min). Last row: newer is usually aḥdath (from ḥadīth “modern”) — a useful Stretch vocabulary note.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · comparing two, or the most of all?', title: 'Comparative or superlative?', ar: 'مُقَارَنَةٌ أَمْ تَفْضِيلٌ؟',
      categories: ['Comparative (…er than)', 'Superlative (the …est)'],
      items: [['أَكْبَرُ مِنْ أَخِي', 0], ['أَكْبَرُ مَدِينَةٍ', 1], ['أَسْرَعُ مِنَ الْقِطَارِ', 0], ['هُوَ الْأَسْرَعُ', 1], ['أَطْوَلُ مِنِّي', 0], ['أَطْوَلُ نَهْرٍ', 1], ['أَفْضَلُ مِنْ أَمْسِ', 0], ['الْأَفْضَلُ فِي الصَّفِّ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type C or S. The clue: min → comparative; al- or a following indefinite noun → superlative.',
    },
  ],
  mistakes: [
    { wrong: 'أُخْتِي أَطْوَلَةُ مِنِّي.', right: 'أُخْتِي أَطْوَلُ مِنِّي.', why: 'The comparative never takes ة (website clinic).' },
    { wrong: 'الْقِطَارُ أَسْرَعُ الْحَافِلَةِ.', right: 'الْقِطَارُ أَسْرَعُ مِنَ الْحَافِلَةِ.', why: 'Two items → do not forget min (website clinic).' },
    { wrong: 'هَذَا أَفْضَلُ الْكِتَابِ.', right: 'هَذَا أَفْضَلُ كِتَابٍ.', why: 'The best + singular noun: indefinite.' },
  ],
  hints: ['Does afʿal take ة?', 'Where is “than”?', 'Definite or indefinite?'],
  practice: [
    q('Choose “The sea is bigger than the lake.”', ['الْبَحْرُ أَكْبَرُ مِنَ الْبُحَيْرَةِ.', 'الْبَحْرُ كَبِيرٌ مِنَ الْبُحَيْرَةِ.', 'الْبَحْرُ الْأَكْبَرُ الْبُحَيْرَةِ.'], 'Afʿal + min.'),
    q('Choose “She is the best student.”', ['هِيَ أَفْضَلُ طَالِبَةٍ.', 'هِيَ أَفْضَلَةُ طَالِبَةٍ.', 'هِيَ الطَّالِبَةُ أَفْضَلُ.'], 'Afʿal + indefinite noun — no ة on afʿal.'),
    q('Choose “Summer is hotter than spring.”', ['الصَّيْفُ أَحَرُّ مِنَ الرَّبِيعِ.', 'الصَّيْفُ أَحْرَرُ مِنَ الرَّبِيعِ.', 'الصَّيْفُ حَارٌّ مِنَ الرَّبِيعِ.'], 'Doubled root → aḥarr.'),
    q('Choose “English is less difficult.”', ['الْإِنْجِلِيزِيَّةُ أَقَلُّ صُعُوبَةً.', 'الْإِنْجِلِيزِيَّةُ أَقَلُّ صَعْبَةٌ.', 'الْإِنْجِلِيزِيَّةُ أَقَلَّةُ صُعُوبَةٍ.'], 'Aqall + noun in -an.'),
  ],
  practiceLabel: 'teacher-written practice on the website rules',
  read: {
    title: 'Which city is best?', label: 'website reading text, extended by the teacher',
    text: 'فِي مَدِينَتِي أَمَاكِنُ جَمِيلَةٌ وَشَوَارِعُ وَاسِعَةٌ. هَذِهِ الْمَدْرَسَةُ الْجَدِيدَةُ قَرِيبَةٌ، وَذَلِكَ الْمَتْحَفُ الْقَدِيمُ مُثِيرٌ لِلِاهْتِمَامِ. مَدِينَتِي أَصْغَرُ مِنَ الْعَاصِمَةِ، لَكِنَّهَا أَهْدَأُ وَأَنْظَفُ. الْحَيَاةُ فِي الْعَاصِمَةِ أَكْثَرُ إِثَارَةً، وَلَكِنَّ مَدِينَتِي أَجْمَلُ مَكَانٍ فِي رَأْيِي.',
    glossary: [['أَمَاكِنُ', 'places'], ['مُثِيرٌ لِلِاهْتِمَامِ', 'interesting'], ['الْعَاصِمَةِ', 'the capital'], ['أَهْدَأُ', 'quieter'], ['أَنْظَفُ', 'cleaner'], ['إِثَارَةً', 'excitement'], ['فِي رَأْيِي', 'in my opinion']],
    task: 'Website: underline each comparative and superlative, and label its type.',
    questions: [
      q('Which is bigger, the writer’s city or the capital?', ['the capital', 'the writer’s city', 'they are the same'], 'أَصْغَرُ مِنَ الْعَاصِمَةِ.'),
      q('Why is it أَصْغَرُ and not with ة, though city is feminine?', ['The comparative is fixed.', 'City is masculine.', 'It is a mistake.'], 'Website clinic.'),
      q('What does أَكْثَرُ إِثَارَةً mean?', ['more exciting', 'less exciting', 'the most exciting'], 'Analytical comparison.'),
      q('Which phrase is a superlative?', ['أَجْمَلُ مَكَانٍ', 'أَصْغَرُ مِنَ الْعَاصِمَةِ', 'أَهْدَأُ وَأَنْظَفُ'], 'Afʿal + indefinite noun.'),
    ],
    qNote: 'The first two sentences are the website text; the rest is teacher-written. Questions teacher-written.',
  },
  speak: {
    title: 'Speaking: compare and choose', source: 'website speaking task (45–60 seconds)',
    prompts: [
      { route: 'core', ar: 'قَارِنْ بَيْنَكَ وَبَيْنَ أَخِيكَ أَوْ صَدِيقِكَ.' },
      { route: 'develop', ar: 'مَا أَفْضَلُ مَادَّةٍ فِي رَأْيِكَ؟ لِمَاذَا؟' },
      { route: 'stretch', ar: 'الْمَدِينَةُ أَمِ الرِّيفُ: أَيُّهُمَا أَفْضَلُ لِلْعَيْشِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَنَا ______ مِنْ أَخِي، وَأَخِي ______ مِنِّي.' },
      { route: 'develop', ar: 'أَفْضَلُ مَادَّةٍ عِنْدِي ______ لِأَنَّهَا ______ .' },
      { route: 'stretch', ar: 'الرِّيفُ أَهْدَأُ، لَكِنَّ الْمَدِينَةَ أَكْثَرُ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَا أَفْضَلُ فَصْلٍ فِي رَأْيِكِ؟', en: 'What is the best season, in your opinion? (to a girl)' },
      { who: 'B', ar: 'الرَّبِيعُ أَفْضَلُ فَصْلٍ، لِأَنَّهُ أَجْمَلُ مِنَ الشِّتَاءِ وَأَقَلُّ حَرَارَةً مِنَ الصَّيْفِ.', en: 'Spring is the best season, because it is more beautiful than winter and less hot than summer.' },
    ],
    notes: 'Website: 45–60 seconds with six accurate structures. Great IGCSE opinion practice: “X is better than Y because …”.',
  },
  write: {
    siteTask: 'Write 90–120 words describing a person, place, object or experience, with at least eight target adjective structures, underlined.',
    core: { amount: '6 sentences', task: 'Compare members of your family.', how: 'afʿal + min; no ة on afʿal.' },
    develop: { amount: '8 sentences', task: 'Add two superlatives: al-afḍal and afḍalu + noun.', how: 'My best friend, the biggest room …' },
    stretch: { amount: '90–120 words', task: 'Website task: city or countryside? Use akthar / aqall + noun.', how: 'more peaceful, less expensive …' },
  },
  frames: {
    core: [
      { en: 'I am taller than …', ar: 'أَنَا أَطْوَلُ مِنْ ______ .' },
      { en: 'My sister is younger than me.', ar: 'أُخْتِي ______ مِنِّي.' },
      { en: 'The train is faster than …', ar: 'الْقِطَارُ أَسْرَعُ مِنَ ______ .' },
      { en: 'My father is older than …', ar: 'أَبِي أَكْبَرُ مِنْ ______ .' },
    ],
    develop: [
      { en: 'The best subject is …', ar: 'أَفْضَلُ مَادَّةٍ ______ .' },
      { en: '… is the biggest city in my country.', ar: '______ أَكْبَرُ مَدِينَةٍ فِي بَلَدِي.' },
      { en: '… is more important than …', ar: '______ أَكْثَرُ أَهَمِّيَّةً مِنْ ______ .' },
      { en: 'This is the best …', ar: 'هَذَا أَفْضَلُ ______ .' },
    ],
    bank: ['أَكْبَرُ', 'أَصْغَرُ', 'أَطْوَلُ', 'أَقْصَرُ', 'أَسْرَعُ', 'أَجْمَلُ', 'أَسْهَلُ', 'أَصْعَبُ', 'أَفْضَلُ', 'أَحَرُّ', 'أَغْلَى', 'أَكْثَرُ', 'أَقَلُّ', 'مِنْ'],
  },
  stretchTask: {
    task: 'Website extended writing workshop: 90–120 words comparing two places, people or experiences, with at least eight target adjective structures.',
    checklist: ['Four comparatives with min.', 'One comparative with a feminine subject (no ة).', 'One al-afʿal superlative.', 'One afʿal + indefinite noun superlative.', 'One akthar / aqall + noun in -an.'],
    phrases: [['أَكْبَرُ مِنْ', 'bigger than'], ['أَفْضَلُ مَكَانٍ', 'the best place'], ['هِيَ الْأَجْمَلُ', 'she / it is the most beautiful'], ['أَكْثَرُ هُدُوءًا', 'more peaceful'], ['أَقَلُّ ازْدِحَامًا', 'less crowded'], ['أَغْلَى مِنْ', 'more expensive than']],
  },
  model: {
    text: 'عِشْتُ فِي الْمَدِينَةِ وَفِي الرِّيفِ. الْمَدِينَةُ أَكْبَرُ وَأَسْرَعُ، وَالْمَحَلَّاتُ فِيهَا أَكْثَرُ. لَكِنَّ الرِّيفَ أَهْدَأُ وَأَنْظَفُ، وَالْهَوَاءُ فِيهِ أَنْقَى. الْحَيَاةُ فِي الرِّيفِ أَقَلُّ ازْدِحَامًا وَأَقَلُّ تَكْلِفَةً. فِي رَأْيِي، الرِّيفُ أَفْضَلُ مَكَانٍ لِلْعَائِلَاتِ، أَمَّا الْمَدِينَةُ فَهِيَ الْأَفْضَلُ لِلطُّلَّابِ.',
    en: 'I have lived in the city and in the countryside. The city is bigger and faster, and it has more shops. But the countryside is quieter and cleaner, and the air there is purer. Life in the countryside is less crowded and less expensive. In my opinion, the countryside is the best place for families, while the city is the best for students.',
    find: ['comparatives', 'fem. subject, no ة', 'superlatives', 'aqall + noun'],
    source: 'teacher model on the website writing workshop',
  },
  selfCheck: [
    { route: 'core', text: 'My comparatives use afʿal + min.' },
    { route: 'core', text: 'I never added ة to afʿal.' },
    { route: 'develop', text: 'I used both superlative routes.' },
    { route: 'develop', text: 'After afʿal in a superlative, the noun is indefinite.' },
    { route: 'stretch', text: 'I used akthar / aqall + a noun in -an.' },
  ],
  exit: [
    q('Comparative of قَرِيبٌ?', ['أَقْرَبُ', 'قُرْبَى', 'أَقْرَبَةٌ'], 'Pattern afʿal.'),
    q('Choose “Sara is faster than Huda.”', ['سَارَةُ أَسْرَعُ مِنْ هُدَى.', 'سَارَةُ أَسْرَعَةُ مِنْ هُدَى.', 'سَارَةُ سَرِيعَةٌ هُدَى.'], 'Fixed form + min.'),
    q('Choose “the most beautiful mosque”.', ['أَجْمَلُ مَسْجِدٍ', 'أَجْمَلُ الْمَسْجِدِ', 'الْمَسْجِدُ أَجْمَلُ'], 'Afʿal + indefinite noun.'),
  ],
  mastery: false,
  prep: {
    words: [['هَذَا', 'this (m.)', '—'], ['هَذِهِ', 'this (f.)', '—'], ['ذَلِكَ', 'that (m.)', '—'], ['تِلْكَ', 'that (f.)', '—'], ['هَؤُلَاءِ', 'these (people)', '—']],
    questionEn: 'What is the difference between “this book” and “This is a book”? Try both in Arabic.',
    questionAr: 'هَذَا كِتَابٌ · هَذَا ______',
    homework: {
      core: 'Write ten comparative sentences about your family.',
      develop: 'Write a top-five list of the best things in your town with superlatives.',
      stretch: 'Website writing workshop: city or countryside?',
    },
    wordsSource: 'The five words prepare GM-ADJ-07 (website Adjectives lesson 7: demonstratives).',
  },
  remember: 'Remember: afʿal + min = “…er than” · it never takes ة · the …est = al-afʿal or afʿalu + indefinite noun · long adjectives: akthar / aqall + noun in -an.',
});

module.exports = { meta, slides };
