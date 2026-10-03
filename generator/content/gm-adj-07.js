'use strict';
/* GM-ADJ-07 · Demonstratives and Agreement — website: Mastery & Revision › Grammar › Adjectives › Lesson 7 (near: هَذَا / هَذِهِ; far:
 * ذَلِكَ / تِلْكَ; the noun after a demonstrative in “this/that noun” is definite; هَؤُلَاءِ / أُولَئِكَ mainly for human plurals; non-human
 * plurals take هَذِهِ / تِلْكَ — هَذِهِ الْكُتُبُ · تِلْكَ السَّيَّارَاتُ; clinic: هؤلاء for every plural; indefinite noun after the
 * demonstrative). The website Entry Check is the Do Now (feedback in English); guided and mastery checks repeat it, so quick check,
 * practice and exit are teacher-written. Teacher-added: phrase vs sentence (هَذَا كِتَابٌ / هَذَا الْكِتَابُ / هَذَا هُوَ الْكِتَابُ), the
 * dual هَذَانِ / هَاتَانِ, and the demonstrative after a possessive noun (كِتَابِي هَذَا) for Stretch. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-ADJ-07', fileTitle: 'Demonstratives_and_Agreement', title: 'Demonstratives and Agreement', arabic: 'أَسْمَاءُ الْإِشَارَةِ وَالْمُطَابَقَةُ',
  focus: 'This / that / these / those must match the noun: hādhā (m.), hādhihi (f.), dhālika, tilka — and hāʾulāʾi / ulāʾika for people only. Things in the plural take hādhihi / tilka. “This book” needs al-; “This is a book” does not.',
  icon: 'FaHandPointRight',
});

const slides = G.gmLesson({
  code: 'GM-ADJ-07', site: 'grammar__04-adjectives__grammar-mastery-07-demonstratives',
  support: `• Core: هَذَا / هَذِهِ with singular nouns; the noun after it takes al- for “this …” (هَذَا الْبَيْتُ). Develop: far forms ذَلِكَ / تِلْكَ; people plurals هَؤُلَاءِ / أُولَئِكَ; things plurals هَذِهِ / تِلْكَ. Stretch: phrase vs sentence (هَذَا كِتَابٌ · هَذَا الْكِتَابُ · هَذَا هُوَ الْكِتَابُ); dual هَذَانِ / هَاتَانِ; demonstrative after a possessive (كِتَابِي هَذَا).
• Spelling note: هَذَا, هَذِهِ, ذَلِكَ, هَؤُلَاءِ and أُولَئِكَ hide a long ā that is not written (hādhā, hādhihi, dhālika, hāʾulāʾi, ulāʾika). Say it, don’t write it.
• Links: GM-N-06 (non-human plurals → هَذِهِ) and GM-ADJ-01/04 (phrase vs sentence).`,
  teach: 'Near and far; the plural decision; phrase or sentence.',
  wedo: 'Point and say; sort; repair.',
  next: { nextCode: 'GM-ADJ-08', nextTitle: 'Defective Adjectives', nextAr: 'الصِّفَاتُ الْمَنْقُوصَةُ مِثْلُ غَالٍ وَرَاضٍ' },
  doNow: {
    fb: { 0: 'School is feminine singular.', 1: 'People, plural, far away → ulāʾika.', 2: 'A non-human plural acts as feminine singular.', 3: 'Car is feminine singular, far away.' },
    keyIdea: { text: 'Match the noun: hādhā / hādhihi near, dhālika / tilka far. Hāʾulāʾi / ulāʾika are for PEOPLE; plural things take hādhihi / tilka.', ar: '{k|هَذِهِ} الْكُتُبُ ‖ {e|هَؤُلَاءِ} الطُّلَّابُ' },
    retrieves: 'The website Entry Check (all five questions) — it uses the five demonstratives prepared at the end of GM-ADJ-06.',
  },
  objectives: ['Choose this / that for masculine and feminine nouns.', 'Use these / those for people and for things correctly.', 'Put al- on the noun after a demonstrative for “this …”.', 'Tell “this book” from “This is a book.”'],
  routes: {
    core: ['I say this house and this school.', 'I put al- after hādhā for “this …”.'],
    develop: ['I use that (m. / f.) and those for people.', 'I use hādhihi for plural things.'],
    stretch: ['I tell “this book” from “This is a book.”', 'I use the dual and “my book, this one”.'],
  },
  terms: {
    items: [
      { ar: 'اسْمُ الْإِشَارَةِ', en: 'demonstrative (this / that)', note: 'هَذَا · تِلْكَ' },
      { ar: 'هَذَا · هَذِهِ', en: 'this (m. · f.)', tr: 'hādhā · hādhihi', note: 'near' },
      { ar: 'ذَلِكَ · تِلْكَ', en: 'that (m. · f.)', tr: 'dhālika · tilka', note: 'far' },
      { ar: 'هَؤُلَاءِ', en: 'these (people)', tr: 'hāʾulāʾi', note: 'هَؤُلَاءِ الطُّلَّابُ' },
      { ar: 'أُولَئِكَ', en: 'those (people)', tr: 'ulāʾika', note: 'أُولَئِكَ الْمُعَلِّمَاتُ' },
      { ar: 'الْمُشَارُ إِلَيْهِ', en: 'the noun pointed at', note: 'needs al- in a phrase' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · steps 1–2 · near and far (website)', title: 'This and that — masculine and feminine', ar: 'الْقَرِيبُ وَالْبَعِيدُ', ltr: true,
      cols: [{ label: '', w: 2.4 }, { label: 'Near · this', w: 3.4, size: 24 }, { label: 'Far · that', w: 3.4, size: 24 }, { label: 'Note', w: 3.13 }],
      rows: [
        { core: true, cells: ['masculine', 'هَذَا الْبَيْتُ', 'ذَلِكَ الشَّارِعُ', 'website examples'] },
        { core: true, cells: ['feminine', 'هَذِهِ الْمَدْرَسَةُ', 'تِلْكَ السَّيَّارَةُ', 'website examples'] },
        { core: true, cells: ['people (plural)', 'هَؤُلَاءِ الطُّلَّابُ', 'أُولَئِكَ الْمُعَلِّمَاتُ', 'men or women'] },
        { core: true, cells: ['things (plural)', 'هَذِهِ الْكُتُبُ', 'تِلْكَ السَّيَّارَاتُ', 'feminine singular!'] },
        { cells: ['dual (Stretch)', 'هَذَانِ الْكِتَابَانِ · هَاتَانِ الْبِنْتَانِ', '—', 'recognition'] },
      ],
      foot: 'Website: the noun after a demonstrative in “this / that noun” is definite — it takes al-.',
      notes: 'STEPS 1–2 (3 min) — website “Near singular” and “Far singular”, plus the plural row from step 3. Gesture near (hand on desk) and far (point to the window).',
    },
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · step 3 · the plural decision (website)', title: 'People or things? Choose the demonstrative', ar: 'قَرَارُ الْجَمْعِ',
      points: [
        'Hāʾulāʾi (these) and ulāʾika (those) are mainly for HUMAN plurals (website).',
        'They work for men and women alike.',
        'Non-human plurals are grammatically feminine singular, so use hādhihi / tilka (website).',
        'Website clinic: do not use hāʾulāʾi for every plural.',
        'Ask the same question as GM-N-06: “Is it a person?”',
      ],
      examples: [
        { ar: 'هَؤُلَاءِ الطُّلَّابُ مُجْتَهِدُونَ.', en: 'These students are hard-working.', note: 'people' },
        { ar: 'أُولَئِكَ الْمُعَلِّمَاتُ لَطِيفَاتٌ.', en: 'Those teachers (f.) are kind.', note: 'people' },
        { ar: 'هَذِهِ الْكُتُبُ مُفِيدَةٌ.', en: 'These books are useful.', note: 'things' },
        { ar: 'تِلْكَ الْقِطَطُ صَغِيرَةٌ.', en: 'Those cats are small.', note: 'animals' },
      ],
      callout: { kind: 'warn', head: 'WEBSITE CLINIC', text: 'Two common errors: hāʾulāʾi with things (hāʾulāʾi l-kutub ✗), and forgetting al- after the demonstrative.' },
      notes: 'STEP 3 (3 min) — website “Plural decision”. Thumbs up (person) / down (thing) routine from ADJ-02.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · step 4 · phrase or sentence? · Develop / Stretch', title: '“This book” or “This is a book”?', ar: 'عِبَارَةٌ أَمْ جُمْلَةٌ؟', ltr: true,
      cols: [{ label: 'Arabic', w: 4.6, size: 26 }, { label: 'Meaning', w: 3.6 }, { label: 'Why', w: 4.13 }],
      rows: [
        { core: true, cells: ['هَذَا كِتَابٌ.', 'This is a book.', 'noun without al- → sentence'] },
        { core: true, cells: ['هَذَا الْكِتَابُ …', 'this book …', 'al- → phrase; it needs more'] },
        { core: true, cells: ['هَذَا الْكِتَابُ مُفِيدٌ.', 'This book is useful.', 'phrase + adjective → sentence'] },
        { cells: ['هَذَا هُوَ الْكِتَابُ.', 'This is THE book.', 'add huwa / hiya to keep it a sentence'] },
        { cells: ['كِتَابِي هَذَا', 'this book of mine', 'possessive noun → demonstrative goes after'] },
      ],
      foot: 'Stretch: hādhā + al-noun is only “this …” — add a predicate, or a pronoun, to make a full sentence.',
      notes: 'STEP 4 (3 min) — teacher-added, building on the website rule “the noun after a demonstrative is definite”. This links to ADJ-01 step 3.',
    },
  ],
  quick: [
    q('Choose “this garden (f.)”.', ['هَذِهِ الْحَدِيقَةُ', 'هَذَا الْحَدِيقَةُ', 'هَذِهِ حَدِيقَةٌ'], 'Feminine + al-.'),
    q('Choose “those men”.', ['أُولَئِكَ الرِّجَالُ', 'تِلْكَ الرِّجَالُ', 'ذَلِكَ الرِّجَالُ'], 'People, far → ulāʾika.'),
    q('Choose “these houses”.', ['هَذِهِ الْبُيُوتُ', 'هَؤُلَاءِ الْبُيُوتُ', 'هَذَا الْبُيُوتُ'], 'Plural things → hādhihi.'),
    q('What does هَذِهِ سَيَّارَةٌ mean?', ['This is a car.', 'this car', 'these cars'], 'No al- → a sentence.'),
  ],
  quickNote: 'teacher-written hinge questions on the website’s steps.',
  ido: {
    title: 'Watch me point and choose',
    steps: [
      { head: 'Near, m.', ar: 'هَذَا الْقَلَمُ', think: 'Masculine, here.' },
      { head: 'Far, f.', ar: 'تِلْكَ النَّافِذَةُ', think: 'Feminine, there.' },
      { head: 'People', ar: 'هَؤُلَاءِ الطُّلَّابُ', think: 'Human plural.' },
      { head: 'Things', ar: 'هَذِهِ الْكَرَاسِيُّ', think: 'Plural things → hādhihi.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'DEMONSTRATIVE', e: 'NOUN WITH AL-' },
    model: '{k|هَذَا} {e|الْقَلَمُ} لِي، وَ{k|تِلْكَ} {e|الْحَقِيبَةُ} لِأُخْتِي. {k|هَؤُلَاءِ} {e|الطُّلَّابُ} أَصْدِقَائِي، وَ{k|هَذِهِ} {e|الْكُتُبُ} لَهُمْ.',
    modelEn: 'This pen is mine, and that bag is my sister’s. These students are my friends, and these books are theirs.',
    notes: 'Use real objects on camera. For each: “Near or far? Masculine, feminine, people or things?” Then say the phrase.',
  },
  models: [
    { ar: 'هَذَا الْبَيْتُ كَبِيرٌ.', en: 'This house is big.', tip: 'Website model bank + predicate.' },
    { ar: 'تِلْكَ الْكُتُبُ قَدِيمَةٌ.', en: 'Those books are old.', tip: 'Website model bank: things.' },
    { ar: 'هَؤُلَاءِ اللَّاعِبُونَ مَشْهُورُونَ.', en: 'These players are famous.', tip: 'People: plural adjective.' },
    { ar: 'مَنْ ذَلِكَ الرَّجُلُ؟', en: 'Who is that man?', tip: 'Questions with demonstratives.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · hādhihi or hāʾulāʾi?', title: 'Which “these”?', ar: 'هَذِهِ أَمْ هَؤُلَاءِ؟',
      categories: ['hādhihi (f. sing. / things)', 'hāʾulāʾi (people)'],
      items: [['الطَّاوِلَاتُ', 0], ['الْمُمَرِّضَاتُ', 1], ['الْغُرْفَةُ', 0], ['الْأَطْفَالُ', 1], ['الْأَشْجَارُ', 0], ['الْجِيرَانُ', 1], ['الْقِطَطُ', 0], ['اللَّاعِبَاتُ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type 1 or 2. Traps: tables and nurses both end in -āt; cats are animals.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'We do · near to far · say it aloud', title: 'Change “this” to “that”', ar: 'مِنَ الْقَرِيبِ إِلَى الْبَعِيدِ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Near', w: 4.2, size: 24 }, { label: 'Far', w: 4.2, size: 24 }, { label: 'Meaning', w: 3.93 }],
      rows: [
        { core: true, cells: ['هَذَا الْمَسْجِدُ', 'ذَلِكَ الْمَسْجِدُ', 'this / that mosque'] },
        { core: true, cells: ['هَذِهِ الْمَكْتَبَةُ', 'تِلْكَ الْمَكْتَبَةُ', 'this / that library'] },
        { core: true, cells: ['هَؤُلَاءِ الْأَطِبَّاءُ', 'أُولَئِكَ الْأَطِبَّاءُ', 'these / those doctors'] },
        { cells: ['هَذِهِ الْحَافِلَاتُ', 'تِلْكَ الْحَافِلَاتُ', 'these / those buses'] },
        { cells: ['هَذِهِ الْجِبَالُ', 'تِلْكَ الْجِبَالُ', 'these / those mountains'] },
      ],
      foot: 'Cover the “Far” column. Students say it, then make one full sentence with an adjective.',
      notes: 'WE DO (2 min). Extension: add an adjective with the right agreement (تِلْكَ الْجِبَالُ عَالِيَةٌ · أُولَئِكَ الْأَطِبَّاءُ مَشْغُولُونَ).',
    },
  ],
  mistakes: [
    { wrong: 'هَؤُلَاءِ الْكُتُبُ', right: 'هَذِهِ الْكُتُبُ', why: 'Plural things → hādhihi (website clinic).' },
    { wrong: 'هَذَا الْمَدِينَةُ', right: 'هَذِهِ الْمَدِينَةُ', why: 'City is feminine.' },
    { wrong: 'ذَلِكَ رَجُلٌ طَوِيلٌ.', right: 'ذَلِكَ الرَّجُلُ طَوِيلٌ.', why: 'For “that man is tall”, the noun needs al- (website clinic).' },
  ],
  hints: ['People or things?', 'Is city feminine?', 'Phrase or sentence?'],
  practice: [
    q('Choose “that city”.', ['تِلْكَ الْمَدِينَةُ', 'ذَلِكَ الْمَدِينَةُ', 'تِلْكَ مَدِينَةٌ'], 'Feminine, far, al-.'),
    q('Choose “These girls are clever.”', ['هَؤُلَاءِ الْبَنَاتُ ذَكِيَّاتٌ.', 'هَذِهِ الْبَنَاتُ ذَكِيَّةٌ.', 'هَؤُلَاءِ الْبَنَاتُ ذَكِيَّةٌ.'], 'People: hāʾulāʾi + plural adjective.'),
    q('Choose “Those trees are tall.”', ['تِلْكَ الْأَشْجَارُ عَالِيَةٌ.', 'أُولَئِكَ الْأَشْجَارُ عَالِيَةٌ.', 'تِلْكَ الْأَشْجَارُ عَالِيَاتٌ.'], 'Things: tilka + feminine singular.'),
    q('Choose “This is the right answer.”', ['هَذَا هُوَ الْجَوَابُ الصَّحِيحُ.', 'هَذَا الْجَوَابُ الصَّحِيحُ.', 'هَذَا جَوَابٌ الصَّحِيحُ.'], 'Add huwa to make a sentence.'),
  ],
  practiceLabel: 'teacher-written practice on the website rules',
  read: {
    title: 'A tour of my city', label: 'website reading text, extended by the teacher',
    text: 'فِي مَدِينَتِي أَمَاكِنُ جَمِيلَةٌ وَشَوَارِعُ وَاسِعَةٌ. هَذِهِ الْمَدْرَسَةُ الْجَدِيدَةُ قَرِيبَةٌ، وَذَلِكَ الْمَتْحَفُ الْقَدِيمُ مُثِيرٌ لِلِاهْتِمَامِ. هَؤُلَاءِ الْأَطْفَالُ يَلْعَبُونَ فِي تِلْكَ الْحَدِيقَةِ، وَأُولَئِكَ الرِّجَالُ يَعْمَلُونَ فِي السُّوقِ. هَذِهِ الْمَحَلَّاتُ رَخِيصَةٌ.',
    glossary: [['أَمَاكِنُ', 'places'], ['الْمَتْحَفُ', 'the museum'], ['مُثِيرٌ لِلِاهْتِمَامِ', 'interesting'], ['يَلْعَبُونَ', 'are playing'], ['يَعْمَلُونَ', 'are working'], ['الْمَحَلَّاتُ', 'the shops'], ['رَخِيصَةٌ', 'cheap']],
    task: 'Website: underline each demonstrative, draw an arrow to its noun, and label near/far and m./f./people/things.',
    questions: [
      q('Why is it ذَلِكَ before the museum?', ['Museum is masculine and far.', 'Museum is feminine.', 'Museum is plural.'], 'Masculine, far.'),
      q('Why is it هَؤُلَاءِ before the children?', ['Children are people.', 'Children are things.', 'Children are feminine.'], 'Human plural.'),
      q('Why is it هَذِهِ before the shops?', ['Shops are plural things.', 'Shops are people.', 'It is a mistake.'], 'Non-human plural → hādhihi.'),
      q('Which demonstrative means “those (people)”?', ['أُولَئِكَ', 'تِلْكَ', 'ذَلِكَ'], 'Far human plural.'),
    ],
    qNote: 'The first two sentences are the website text; the rest is teacher-written. Questions teacher-written.',
  },
  speak: {
    title: 'Speaking: a photo tour', source: 'website speaking task (45–60 seconds)',
    prompts: [
      { route: 'core', ar: 'مَا هَذَا؟ مَا هَذِهِ؟ (أَشْيَاءُ فِي غُرْفَتِكَ)' },
      { route: 'develop', ar: 'صِفْ صُورَةً لِعَائِلَتِكَ: مَنْ هَؤُلَاءِ؟' },
      { route: 'stretch', ar: 'صِفْ مَدِينَتَكَ لِزَائِرٍ: هَذَا … وَتِلْكَ …' },
    ],
    stems: [
      { route: 'core', ar: 'هَذَا ______ ، وَهَذِهِ ______ .' },
      { route: 'develop', ar: 'هَؤُلَاءِ ______ ، وَأُولَئِكَ ______ .' },
      { route: 'stretch', ar: 'هَذَا ______ قَدِيمٌ، وَتِلْكَ ______ حَدِيثَةٌ.' },
    ],
    model: [
      { who: 'A', ar: 'مَنْ هَؤُلَاءِ فِي الصُّورَةِ؟', en: 'Who are these people in the photo?' },
      { who: 'B', ar: 'هَؤُلَاءِ أَبْنَاءُ عَمِّي، وَتِلْكَ جَدَّتِي، وَهَذَا بَيْتُهَا الْقَدِيمُ.', en: 'These are my cousins, that is my grandmother, and this is her old house.' },
    ],
    notes: 'Website: 45–60 seconds with six accurate structures. Students share a photo on screen (or describe their room) and point as they speak.',
  },
  write: {
    siteTask: 'Write 90–120 words describing a person, place, object or experience, with at least eight target adjective structures, underlined.',
    core: { amount: '6 sentences', task: 'Describe six objects in your room with this / that.', how: 'This X is …; that Y is …' },
    develop: { amount: '8 sentences', task: 'Add people and plural things.', how: 'People: hāʾulāʾi / ulāʾika; things: hādhihi / tilka.' },
    stretch: { amount: '90–120 words', task: 'Website task: a guided tour of your town for a visitor.', how: 'Mix phrases, sentences and “this is the …”.' },
  },
  frames: {
    core: [
      { en: 'This room is …', ar: 'هَذِهِ الْغُرْفَةُ ______ .' },
      { en: 'This bed is …', ar: 'هَذَا السَّرِيرُ ______ .' },
      { en: 'That window is …', ar: 'تِلْكَ النَّافِذَةُ ______ .' },
      { en: 'That cupboard is …', ar: 'ذَلِكَ الدُّولَابُ ______ .' },
    ],
    develop: [
      { en: 'These books are …', ar: 'هَذِهِ الْكُتُبُ ______ .' },
      { en: 'These people are my …', ar: 'هَؤُلَاءِ ______ .' },
      { en: 'Those shops are …', ar: 'تِلْكَ الْمَحَلَّاتُ ______ .' },
      { en: 'This is the best …', ar: 'هَذَا هُوَ ______ الْأَفْضَلُ.' },
    ],
    bank: ['هَذَا', 'هَذِهِ', 'ذَلِكَ', 'تِلْكَ', 'هَؤُلَاءِ', 'أُولَئِكَ', 'هُوَ', 'هِيَ', 'كَبِيرٌ', 'جَمِيلَةٌ', 'قَدِيمَةٌ', 'مُفِيدَةٌ', 'لُطَفَاءُ'],
  },
  stretchTask: {
    task: 'Website extended writing workshop: a 90–120-word guided tour of your town or school, with at least eight target structures.',
    checklist: ['Two near and two far singular demonstratives (m. and f.).', 'One hāʾulāʾi / ulāʾika with people.', 'One hādhihi / tilka with plural things.', 'One “This is a …” sentence and one “this … is …” sentence.', 'One “this is the …” sentence with huwa / hiya.'],
    phrases: [['هَذَا هُوَ الْمَسْجِدُ الْكَبِيرُ', 'this is the big mosque'], ['تِلْكَ الْمَدْرَسَةُ', 'that school'], ['أُولَئِكَ الرِّجَالُ', 'those men'], ['هَذِهِ الْمَحَلَّاتُ', 'these shops'], ['ذَلِكَ الشَّارِعُ طَوِيلٌ', 'that street is long'], ['هَذِهِ سُوقٌ قَدِيمَةٌ', 'this is an old market']],
  },
  model: {
    text: 'مَرْحَبًا بِكَ فِي مَدِينَتِي! هَذَا هُوَ الْمَسْجِدُ الْكَبِيرُ، وَتِلْكَ الْمَدْرَسَةُ هِيَ مَدْرَسَتِي. هَذَا الشَّارِعُ طَوِيلٌ، وَهَذِهِ الْمَحَلَّاتُ رَخِيصَةٌ. هَؤُلَاءِ الْبَاعَةُ لُطَفَاءُ جِدًّا. انْظُرْ! ذَلِكَ الْجِسْرُ قَدِيمٌ، وَتِلْكَ الْأَشْجَارُ عُمْرُهَا مِئَةُ سَنَةٍ. هَذِهِ مَدِينَةٌ صَغِيرَةٌ، لَكِنَّهَا جَمِيلَةٌ.',
    en: 'Welcome to my city! This is the big mosque, and that school is my school. This street is long, and these shops are cheap. These sellers are very kind. Look! That bridge is old, and those trees are a hundred years old. This is a small city, but it is beautiful.',
    find: ['near / far', 'people plurals', 'things plurals', '“this is a …”'],
    source: 'teacher model on the website writing workshop',
  },
  selfCheck: [
    { route: 'core', text: 'My demonstratives match masculine / feminine.' },
    { route: 'core', text: 'The noun after “this / that …” has al-.' },
    { route: 'develop', text: 'Hāʾulāʾi / ulāʾika only with people.' },
    { route: 'develop', text: 'Plural things take hādhihi / tilka.' },
    { route: 'stretch', text: 'I used huwa / hiya for “this is the …”.' },
  ],
  exit: [
    q('Choose “this window (f.)”.', ['هَذِهِ النَّافِذَةُ', 'هَذَا النَّافِذَةُ', 'هَؤُلَاءِ النَّافِذَةُ'], 'Feminine singular.'),
    q('Choose “those cars”.', ['تِلْكَ السَّيَّارَاتُ', 'أُولَئِكَ السَّيَّارَاتُ', 'ذَلِكَ السَّيَّارَاتُ'], 'Plural things → tilka.'),
    q('Choose “these teachers (m.)”.', ['هَؤُلَاءِ الْمُعَلِّمُونَ', 'هَذِهِ الْمُعَلِّمُونَ', 'هَذَا الْمُعَلِّمُونَ'], 'People → hāʾulāʾi.'),
  ],
  mastery: false,
  prep: {
    words: [['غَالٍ', 'expensive', 'الْغَالِي = the expensive'], ['رَاضٍ', 'satisfied', 'f. رَاضِيَةٌ'], ['عَالٍ', 'high', 'f. عَالِيَةٌ'], ['هَادِئٌ', 'calm (compare)', '—'], ['مَاضٍ', 'past', 'الْأُسْبُوعُ الْمَاضِي']],
    questionEn: 'You know “al-usbūʿ al-māḍī” (last week). Where is the final -ī in māḍin? Why might it disappear?',
    questionAr: 'الْأُسْبُوعُ الْمَاضِي · أُسْبُوعٌ ______',
    homework: {
      core: 'Label ten objects at home: this / that + noun.',
      develop: 'Describe a family photo with these / those.',
      stretch: 'Website writing workshop: a guided tour of your town.',
    },
    wordsSource: 'The five words prepare GM-ADJ-08 (website Adjectives lesson 8: defective adjectives).',
  },
  remember: 'Remember: hādhā / hādhihi near, dhālika / tilka far · hāʾulāʾi / ulāʾika for people · plural things → hādhihi / tilka · “this book” needs al-; “This is a book” does not.',
});

module.exports = { meta, slides };
