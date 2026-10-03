'use strict';
/* GM-ART-03 · Where the Article Belongs — website: Mastery & Revision › Grammar › Articles › Lesson 3 (five routes to a definite expression;
 * possessive suffixes block الـ; the protected first noun of iḍāfa; attached particles وَالـ · بِالـ · لِلـ vs pronunciation elision; names and
 * titles; generic and fixed expressions; Cambridge article editor). All quizzes are the website’s; explanation slides, sorter and model are
 * teacher-made on the website rules. End of the Articles area. */
const G = require('./gm-common');

const s = G.site('grammar__02-articles__grammar-mastery-03-article-boundaries');
const meta = G.meta({
  code: 'GM-ART-03', fileTitle: 'Where_the_Article_Belongs', title: 'Where the Article Belongs', arabic: 'مَوَاضِعُ «الـ» وَحُدُودُ اسْتِعْمَالِهَا',
  focus: 'Move beyond “add الـ for the”: five routes make a noun definite (الْكِتَابُ · مَرْيَمُ · كِتَابُهَا · كِتَابُ الطَّالِبَةِ · هٰذَا الْكِتَابُ) — and الـ is never added to a suffixed noun or the first noun of an iḍāfa.',
  icon: 'FaBorderAll',
});

const slides = G.gmLesson({
  code: 'GM-ART-03', site: 'grammar__02-articles__grammar-mastery-03-article-boundaries',
  support: `• Core: possessive suffixes block الـ; the first noun of an iḍāfa never takes الـ; spell connected speech in full. Develop: two- and three-noun chains; وَالـ · بِالـ · لِلـ; names and titles. Stretch: adjective targets after iḍāfa; pronunciation elision vs written contraction; fixed expressions.
• Mastery question (website): WHAT is making this expression definite — and does that route allow the visible article on this noun?
• This lesson completes the Articles area (GM-ART-01 to 03). The Cambridge article editor at the end is a good assessment piece.`,
  teach: 'Five routes to definiteness; suffix and iḍāfa boundaries; particles; names; fixed expressions.',
  wedo: 'Name the route, edit a draft, test spelling vs pronunciation.',
  next: { nextCode: 'GM-N-01', nextTitle: 'Noun Gender', nextAr: 'جِنْسُ الِاسْمِ: الْمُذَكَّرُ وَالْمُؤَنَّثُ' },
  doNow: {
    keyIdea: { text: 'Ask: HOW does the listener know which one? Article · name · suffix · iḍāfa · demonstrative.', ar: 'الْكِتَابُ · مَرْيَمُ · {k|كِتَابُهَا} · كِتَابُ الطَّالِبَةِ · هٰذَا الْكِتَابُ' },
    retrieves: 'The website Boundary Entry Check (questions 1–5) — it mixes correct forms that look different, retrieving GM-ART-01 and GM-ART-02.',
  },
  objectives: ['Identify the five routes to a definite expression.', 'Never add الـ to a suffixed noun or the first noun of an iḍāfa.', 'Write attached particles (وَالـ · بِالـ · لِلـ) in standard spelling.', 'Use names, titles and fixed expressions in their established form.'],
  routes: {
    core: ['I write كِتَابِي, never الْكِتَابِي.', 'I write بَابُ الْمَدْرَسَةِ, never الْبَابُ الْمَدْرَسَةِ.'],
    develop: ['I can build a three-noun iḍāfa chain.', 'I can combine لِـ + الْبَيْتِ = لِلْبَيْتِ.'],
    stretch: ['I can name the route for every definite noun.', 'I can edit a paragraph for article errors.'],
  },
  terms: {
    flexRest: true,
    items: [
      { ar: 'مُضَافٌ', en: 'first noun of an iḍāfa', note: 'no الـ, no tanwīn: بَابُ' },
      { ar: 'مُضَافٌ إِلَيْهِ', en: 'second noun of an iḍāfa', note: 'genitive: الْمَدْرَسَةِ' },
      { ar: 'ضَمِيرٌ مُتَّصِلٌ', en: 'attached (possessive) pronoun', note: 'ـِي · ـُكَ · ـُهَا · ـُنَا' },
      { ar: 'اِسْمُ عَلَمٍ', en: 'a proper name', note: 'مَرْيَمُ · الْقَاهِرَةُ' },
      { ar: 'لَقَبٌ', en: 'a title', note: 'الْأُسْتَاذُ · الدُّكْتُورَةُ' },
      { ar: 'حَرْفُ جَرٍّ', en: 'a preposition', note: 'بِـ · لِـ · فِي · مَعَ' },
      { ar: 'حَرْفُ عَطْفٍ', en: 'a conjunction', note: 'وَ · فَـ' },
      { ar: 'تَعْبِيرٌ ثَابِتٌ', en: 'a fixed expression', note: 'أُحِبُّ الْقِرَاءَةَ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · five routes to a definite expression (website section)', title: 'Five ways a noun becomes definite', ar: 'خَمْسُ طُرُقٍ إِلَى الْمَعْرِفَةِ', ltr: true,
      cols: [{ label: 'Route', w: 2.6 }, { label: 'Example', w: 4.0, size: 26 }, { label: 'Meaning', w: 2.6 }, { label: 'How do we know which one?', w: 3.13 }],
      rows: [
        { core: true, cells: ['1 · the article', 'الْكِتَابُ', 'the book', 'visibly marked by الـ'] },
        { core: true, cells: ['2 · a proper name', 'مَرْيَمُ', 'Maryam', 'one named person'] },
        { core: true, cells: ['3 · a suffix', 'كِتَابُهَا', 'her book', 'the owner is specified'] },
        { cells: ['4 · definite iḍāfa', 'كِتَابُ الطَّالِبَةِ', 'the student’s book', 'the last noun is definite'] },
        { cells: ['5 · demonstrative', 'هٰذَا الْكِتَابُ', 'this book', 'هٰذَا points to it'] },
        { cells: ['not definite', 'كِتَابُ طَالِبَةٍ', 'a student’s book', 'last noun indefinite'] },
      ],
      foot: 'Definiteness test (website): can the expression identify a specific person, object, place or idea? Then ask which route does it.',
      notes: 'PART 1 (3 min) — website section “Five routes to a definite expression”. Website: “Do not ask only, ‘Can I see الـ?’ Ask, ‘How is the listener able to identify this noun?’”',
    },
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 2 · possessive suffixes block the article (website section)', title: 'A suffix and الـ never share a noun', ar: 'الضَّمَائِرُ الْمُتَّصِلَةُ وَ«الـ»',
      points: [
        'A possessive suffix (my, your, her, our …) already makes the noun definite — first example.',
        'So the noun cannot ALSO take الـ: the two compete for the same job.',
        'The adjective still needs its own decision: an attributive adjective is definite (second example).',
        'A predicate adjective stays indefinite (third example).',
        'Website warning: do not repair one error by creating another — removing الـ from the noun does not remove it from the adjective.',
      ],
      examples: [
        { ar: 'كِتَابِي · كِتَابُكَ · كِتَابُهَا · كِتَابُنَا', en: 'my · your · her · our book' },
        { ar: 'كِتَابِي الْجَدِيدُ', en: 'my new book', note: 'phrase' },
        { ar: 'كِتَابِي جَدِيدٌ.', en: 'My book is new.', note: 'sentence' },
        { ar: 'مَدْرَسَتُنَا الْحَدِيثَةُ', en: 'our modern school', note: 'not الْمَدْرَسَتُنَا' },
      ],
      callout: { kind: 'warn', text: 'Forms to reject (website): الْكِتَابِي · الْبَيْتُنَا · الْمَدْرَسَتُهُمْ — never put الـ before a noun that already carries a possessive ending.' },
      notes: 'PART 2 (3 min) — website section “Possessive suffixes block the article”.',
    },
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 3 · iḍāfa has a protected first position (website section)', title: 'The first noun of an iḍāfa', ar: 'الْمُضَافُ وَالْمُضَافُ إِلَيْهِ',
      points: [
        'An iḍāfa joins two nouns to show possession or association (first example: the school door).',
        'Rule 1: the first noun (muḍāf) takes NO الـ.',
        'Rule 2: the first noun takes NO tanwīn either.',
        'The LAST noun decides: definite last noun = definite chain; indefinite last noun = indefinite chain.',
        'In longer chains, only the final noun can carry الـ (third example).',
      ],
      examples: [
        { ar: 'بَابُ الْمَدْرَسَةِ', en: 'the school door' },
        { ar: 'بَابُ مَدْرَسَةٍ', en: 'a school door' },
        { ar: 'مَكْتَبُ مُدِيرِ الْمَدْرَسَةِ', en: 'the school headteacher’s office' },
        { ar: 'بَابُ الْمَدْرَسَةِ الْجَدِيدُ', en: 'the school’s new door', note: 'masculine → the door' },
      ],
      callout: { text: 'Editing sequence (website): find the chain → protect the first noun → check the last noun → find which noun each adjective describes.' },
      notes: 'PART 3 (3 min) — website section “Idāfa has a protected first position”. Compare بَابُ الْمَدْرَسَةِ الْجَدِيدَةِ = the door of the NEW SCHOOL.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 4 · attached particles: spelling or pronunciation? (website table) · Develop', title: 'Particles that join the article', ar: 'الْحُرُوفُ الْمُتَّصِلَةُ', ltr: true,
      cols: [{ label: 'Combination', w: 2.6 }, { label: 'Written form', w: 3.0, size: 26 }, { label: 'Meaning', w: 2.6 }, { label: 'What happens?', w: 4.13 }],
      rows: [
        { core: true, cells: ['wa + al-bayt', 'وَالْبَيْتُ', 'and the house', 'attaches; الـ stays in full'] },
        { cells: ['fa + al-bayt', 'فَالْبَيْتُ', 'so / as for the house', 'attaches; الـ stays in full'] },
        { core: true, cells: ['bi + al-bayt', 'بِالْبَيْتِ', 'in / by the house', 'attaches; الـ stays in full'] },
        { core: true, cells: ['li + al-bayt', 'لِلْبَيْتِ', 'for the house', 'the alif of الـ is DROPPED'] },
        { cells: ['fī + al-bayt', 'فِي الْبَيْتِ', 'in the house', 'two words; vowel dropped only in speech'] },
      ],
      foot: 'Three separate processes (website): a particle may attach in writing · hamzat al-waṣl loses its vowel in speech · the lām may assimilate before a sun letter.',
      notes: 'PART 4 (2 min) — website table “Attached particles, spelling and pronunciation”. Only لِـ + الـ changes the spelling: لِلطَّالِبِ · لِلشَّمْسِ.',
    },
    {
      type: 'ruleCards', min: 2, eyebrow: 'Grammar · part 5 · names, titles and fixed expressions (website sections) · Stretch', title: 'Established forms and fixed chunks', ar: 'الْأَعْلَامُ وَالتَّعَابِيرُ الثَّابِتَةُ',
      cards: [
        { chip: 'NO الـ', color: '1E6B52', head: 'أَسْمَاءٌ بِدُونِ «الـ»', big: 'مَرْيَمُ · أَحْمَدُ · دِمَشْقُ', en: 'never الْمَرْيَمُ or الْأَحْمَدُ', clue: 'Also: لَيْلَى · لَنْدَنُ.' },
        { chip: 'WITH الـ', color: '1D5FBF', head: 'أَسْمَاءٌ بِـ«الـ»', big: 'الْقَاهِرَةُ · الْجَزَائِرُ', en: 'never remove the article from these names', clue: 'Also: الْمَغْرِبُ · السُّودَانُ.' },
        { chip: 'FIXED CHUNKS', color: '6B4C9A', head: 'تَعَابِيرُ ثَابِتَةٌ', big: 'أُحِبُّ الْقِرَاءَةَ', en: 'I like reading — Arabic uses الـ here', clue: 'أُمَارِسُ الرِّيَاضَةَ · أَتَكَلَّمُ الْعَرَبِيَّةَ.' },
      ],
      error: { text: 'Titles take الـ; the personal name does not change.', pairs: [['الْأُسْتَاذُ أَحْمَدُ', 'الْأُسْتَاذُ الْأَحْمَدُ']] },
      notes: 'PART 5 (2 min) — website sections “Proper names and titles” and “Generic and fixed expressions”. Safe exam practice: copy the spelling of a name from the question. Avoid word-for-word transfer from English “the”.',
    },
  ],
  quickQuiz: /Name the Route/i, quickPick: [0, 1, 2, 3], quickNote: 'website mini-check 1 “Name the route”.',
  ido: {
    title: 'Watch me label every definite noun',
    steps: [
      { head: 'Name', ar: 'سَلْمَى', think: 'Route: NAME — no الـ.' },
      { head: 'City', ar: 'الْقَاهِرَةِ', think: 'Established name WITH الـ.' },
      { head: 'Suffix', ar: 'بَيْتُنَا الْجَدِيدُ', think: 'SUFFIX: noun without الـ; adjective with.' },
      { head: 'Iḍāfa', ar: 'مَحَطَّةِ الْحَافِلَاتِ', think: 'First noun protected.' },
    ],
    legend: ['k', 'w'], legendLabels: { k: 'SUFFIX / NAME', w: 'IḌĀFA' },
    model: 'اِسْمِي {k|سَلْمَى}، وَأَسْكُنُ فِي الْقَاهِرَةِ. {k|بَيْتُنَا} الْجَدِيدُ قَرِيبٌ مِنْ {w|مَحَطَّةِ الْحَافِلَاتِ}.',
    modelEn: 'My name is Salma, and I live in Cairo. Our new house is near the bus station.',
    notes: 'From the website reading workshop. Label each noun aloud: ART · NAME · SUFFIX · IḌĀFA · DEMONSTRATIVE (website paper-route labels).',
  },
  models: [
    { ar: 'هٰذِهِ حَقِيبَتِي الزَّرْقَاءُ.', en: 'This is my blue bag.', tip: 'Suffix + definite adjective.' },
    { ar: 'هَلْ هٰذَا كِتَابُكِ؟', en: 'Is this your book? (to a girl)', tip: 'Demonstrative + suffixed noun.' },
    { ar: 'هٰذَا قَلَمُ صَدِيقَتِي.', en: 'This is my friend’s pen.', tip: 'Iḍāfa ending in a suffix.' },
    { ar: 'أُمَارِسُ الرِّيَاضَةَ فِي مَلْعَبِ الْحَيِّ.', en: 'I do sport at the neighbourhood pitch.', tip: 'Fixed chunk + iḍāfa.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · name the route', title: 'What makes it definite?', ar: 'صَنِّفْ',
      categories: ['the article', 'a suffix', 'a name', 'iḍāfa'],
      items: [['الْمَنْزِلُ', 0], ['مَدْرَسَتُنَا', 1], ['لَيْلَى', 2], ['بَابُ الْفَصْلِ', 3], ['الْحَدِيقَةُ', 0], ['قَلَمُكَ', 1], ['أَحْمَدُ', 2], ['مَكْتَبَةُ الْمَدْرَسَةِ', 3]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min) — website game “Boundary Patrol” as a whole-class sort. Students type A, S, N or I for each card.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · website “Cambridge article editor”', title: 'Edit the draft: five article errors', ar: 'مُرَاجِعُ «الـ»', ltr: true,
      cols: [{ label: 'Error in the draft', w: 3.2, size: 22 }, { label: 'Repair', w: 3.2, size: 22 }, { label: 'Reason (website)', w: 5.93 }],
      rows: [
        { core: true, cells: ['الْمَرْيَمُ', 'مَرْيَمُ', 'A personal name does not take the article.'] },
        { core: true, cells: ['فِي قَاهِرَةَ', 'فِي الْقَاهِرَةِ', 'The city name includes الـ; genitive after فِي.'] },
        { core: true, cells: ['هٰذَا الْبَيْتِي', 'هٰذَا بَيْتِي', 'A suffix blocks the article.'] },
        { cells: ['إِلَى لْمَدْرَسَةِ', 'إِلَى الْمَدْرَسَةِ', 'Write the article in full.'] },
        { cells: ['الْمَكْتَبَةَ الْمَدْرَسَةِ', 'مَكْتَبَةَ الْمَدْرَسَةِ', 'The first iḍāfa noun takes no الـ.'] },
        { cells: ['الْكِتَابِي الْمُفَضَّلَ', 'كِتَابِي الْمُفَضَّلَ', 'Suffix on the noun; الـ stays on the adjective.'] },
      ],
      foot: 'Five-question editing scan (website): Is it specific? → What makes it definite? → Is الـ allowed? → Does the adjective match? → Is the spelling standard?',
      notes: `WE DO (3 min) — website article editor. Show the draft first (cover the table): اِسْمِي الْمَرْيَمُ، وَأَسْكُنُ فِي قَاهِرَةَ. هٰذَا الْبَيْتِي الْجَدِيدُ. فِي الصَّبَاحِ أَذْهَبُ إِلَى لْمَدْرَسَةِ. أُحِبُّ الْمَكْتَبَةَ الْمَدْرَسَةِ الْكَبِيرَةُ، وَأَقْرَأُ فِيهَا الْكِتَابِي الْمُفَضَّلَ.
Students find the errors in pairs (chat DM), then reveal the table. Website corrected version: اِسْمِي مَرْيَمُ، وَأَسْكُنُ فِي الْقَاهِرَةِ. هٰذَا بَيْتِي الْجَدِيدُ. فِي الصَّبَاحِ أَذْهَبُ إِلَى الْمَدْرَسَةِ. أُحِبُّ مَكْتَبَةَ الْمَدْرَسَةِ الْكَبِيرَةَ، وَأَقْرَأُ فِيهَا كِتَابِي الْمُفَضَّلَ.`,
    },
  ],
  mistakes: [
    { wrong: 'الْمَدْرَسَتُنَا الْحَدِيثَةُ', right: 'مَدْرَسَتُنَا الْحَدِيثَةُ', why: 'Remove الـ from the suffixed noun — keep it on the adjective.' },
    { wrong: 'الْغُرْفَةُ الْفُنْدُقِ', right: 'غُرْفَةُ الْفُنْدُقِ', why: 'The first noun of an iḍāfa takes no الـ.' },
    { wrong: 'لِالْمُعَلِّمِ', right: 'لِلْمُعَلِّمِ', why: 'After li-, the alif of al- is dropped in writing.' },
  ],
  hints: ['Suffix AND الـ?', 'First noun of an iḍāfa?', 'li- plus al- = ?'],
  practiceQuiz: /Spelling or Pronunciation/i, practicePick: [0, 1, 2, 3], practiceLabel: 'website mini-check 4 “Spelling or pronunciation?”',
  read: {
    title: 'A message from Cairo', label: 'website reading workshop',
    text: 'اِسْمِي سَلْمَى، وَأَسْكُنُ فِي الْقَاهِرَةِ مَعَ أُسْرَتِي. بَيْتُنَا الْجَدِيدُ قَرِيبٌ مِنْ مَحَطَّةِ الْحَافِلَاتِ. فِي الصَّبَاحِ أَذْهَبُ إِلَى مَدْرَسَةِ الْبَنَاتِ مَعَ صَدِيقَتِي. أُحِبُّ مَكْتَبَةَ الْمَدْرَسَةِ؛ فَهِيَ هَادِئَةٌ وَفِيهَا كُتُبٌ مُفِيدَةٌ. بَعْدَ الدِّرَاسَةِ أُمَارِسُ الرِّيَاضَةَ فِي مَلْعَبِ الْحَيِّ.',
    glossary: [['أُسْرَتِي', 'my family'], ['مَحَطَّةِ الْحَافِلَاتِ', 'the bus station'], ['مَدْرَسَةِ الْبَنَاتِ', 'the girls’ school'], ['صَدِيقَتِي', 'my friend (f.)'], ['مَكْتَبَةَ الْمَدْرَسَةِ', 'the school library'], ['بَعْدَ الدِّرَاسَةِ', 'after studying'], ['مَلْعَبِ الْحَيِّ', 'the local pitch']],
    task: 'Website: circle every visible article, box every possessive suffix, and bracket each iḍāfa chain.',
    questions: G.pick(G.quiz(s, /Reading and Listening/i), [0, 1, 2, 3, 5]),
    qNote: 'Website reading and listening evidence questions 1, 2, 3, 4 and 6 (the listening items use the lost-property script below).',
    notes: 'Website listening — read twice: الطَّالِبَةُ: هٰذِهِ حَقِيبَتِي الزَّرْقَاءُ، وَلٰكِنَّ كِتَابَ الْعَرَبِيَّةِ لَيْسَ فِيهَا. الْمُوَظَّفَةُ: هَلْ هٰذَا كِتَابُكِ؟ الطَّالِبَةُ: نَعَمْ، هٰذَا كِتَابِي الْجَدِيدُ. وَهٰذَا قَلَمُ صَدِيقَتِي. (questions 4 and 5 on the next slide refer to it).',
  },
  speak: {
    title: 'Speaking: the school property desk', source: 'website speaking studio',
    prompts: [
      { route: 'core', ar: 'هَلْ هٰذِهِ حَقِيبَتُكَ؟' },
      { route: 'develop', ar: 'هَلْ هٰذَا كِتَابُ الطَّالِبَةِ؟' },
      { route: 'stretch', ar: 'صِفْ شَيْئًا ضَائِعًا: لِمَنْ هُوَ؟ وَمَا لَوْنُهُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'نَعَمْ، هٰذِهِ حَقِيبَتِي. / لَا، لَيْسَتْ حَقِيبَتِي.' },
      { route: 'develop', ar: 'لَا، هٰذَا كِتَابُ ______ .' },
      { route: 'stretch', ar: 'هٰذَا ______ صَدِيقِي، وَلَوْنُهُ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'هَلْ هٰذَا كِتَابُكِ؟', en: 'Is this your book? (to a girl)' },
      { who: 'B', ar: 'نَعَمْ، هٰذَا كِتَابِي الْجَدِيدُ، وَهٰذَا قَلَمُ صَدِيقَتِي.', en: 'Yes, this is my new book, and this is my friend’s pen.' },
    ],
    notes: 'Website role-play: finding and returning objects. Include a demonstrative (هٰذِهِ الْحَقِيبَةُ), a possessive suffix (حَقِيبَتِي), an iḍāfa (كِتَابُ الطَّالِبَةِ), a question (هَلْ هٰذَا قَلَمُكِ؟) and one corrected misunderstanding. Use real objects on camera. To a boy: كِتَابُكَ · قَلَمُكَ.',
  },
  write: {
    siteTask: 'My day and my places (80–90 words): three nouns with الـ; three possessive suffixes without الـ; two iḍāfa; one proper name with an established article and one without; one attached particle (وَالـ · بِالـ · لِلـ); two fixed expressions.',
    core: { amount: '6 sentences', task: 'Three sentences with my / our (suffix) and three with الـ.', how: 'Check: no الـ on any noun with ـِي · ـُنَا.' },
    develop: { amount: '50–60 words', task: 'Add two iḍāfa and one particle (بِالـ or لِلـ).', how: 'Protect the first noun; drop the alif only after لِـ.' },
    stretch: { amount: '80–90 words', task: 'The website writing workshop with all six features.', how: 'Label every noun: ART · NAME · SUFFIX · IḌĀFA · DEM.' },
  },
  frames: {
    core: [
      { en: 'My name is …', ar: 'اِسْمِي ______ .' },
      { en: 'I live in …', ar: 'أَسْكُنُ فِي ______ .' },
      { en: 'Our house is …', ar: 'بَيْتُنَا ______ .' },
      { en: 'I go to school with …', ar: 'أَذْهَبُ إِلَى الْمَدْرَسَةِ مَعَ ______ .' },
    ],
    develop: [
      { en: 'near the … station', ar: 'قَرِيبٌ مِنْ مَحَطَّةِ ______ .' },
      { en: 'I like the school library …', ar: 'أُحِبُّ مَكْتَبَةَ الْمَدْرَسَةِ ______ .' },
      { en: 'I go by bus …', ar: 'أَذْهَبُ بِالْحَافِلَةِ ______ .' },
      { en: 'This book is for the teacher.', ar: 'هٰذَا الْكِتَابُ ______ .' },
    ],
    bank: ['بَيْتِي', 'بَيْتُنَا', 'أُسْرَتِي', 'صَدِيقَتِي', 'مَدْرَسَةُ الْبَنَاتِ', 'مَكْتَبَةُ الْمَدْرَسَةِ', 'بِالْحَافِلَةِ', 'لِلْمُعَلِّمِ', 'وَالْمَكْتَبَةُ', 'الْقَاهِرَةُ', 'أُحِبُّ الْقِرَاءَةَ', 'أُمَارِسُ الرِّيَاضَةَ'],
  },
  stretchTask: {
    task: 'Website writing workshop — My day and my places (80–90 words).',
    checklist: ['Three ordinary nouns with الـ.', 'Three possessive suffixes without الـ.', 'Two iḍāfa constructions.', 'One name with an established الـ and one without.', 'One attached particle (وَالـ · بِالـ · لِلـ) and two fixed expressions.'],
    phrases: [['مَحَطَّةُ الْحَافِلَاتِ', 'the bus station'], ['مَدْرَسَةُ الْبَنَاتِ', 'the girls’ school'], ['بِالْحَافِلَةِ', 'by bus'], ['لِلْمُعَلِّمِ', 'for the teacher'], ['أُحِبُّ الْقِرَاءَةَ', 'I like reading'], ['أَتَكَلَّمُ الْعَرَبِيَّةَ', 'I speak Arabic']],
  },
  model: {
    text: 'اِسْمِي يُوسُفُ، وَأَسْكُنُ فِي الْمَغْرِبِ مَعَ أُسْرَتِي. بَيْتُنَا قَرِيبٌ مِنْ مَسْجِدِ الْحَيِّ. فِي الصَّبَاحِ أَذْهَبُ بِالْحَافِلَةِ إِلَى الْمَدْرَسَةِ مَعَ أَخِي. مُعَلِّمِي هُوَ الْأُسْتَاذُ أَحْمَدُ، وَأُحِبُّ دَرْسَهُ. بَعْدَ الدِّرَاسَةِ أَذْهَبُ إِلَى مَكْتَبَةِ الْمَدِينَةِ، وَأَقْرَأُ الْكُتُبَ وَالْقِصَصَ. فِي الْمَسَاءِ أُمَارِسُ الرِّيَاضَةَ، ثُمَّ أَكْتُبُ رِسَالَةً لِلْمُعَلِّمِ.',
    en: 'My name is Yusuf, and I live in Morocco with my family. Our house is near the neighbourhood mosque. In the morning I go to school by bus with my brother. My teacher is Mr Ahmad, and I like his lesson. After school I go to the city library and read books and stories. In the evening I do sport, then I write a message for the teacher.',
    find: ['suffixes: no الـ', 'iḍāfa', 'names', 'بِالـ · لِلـ · وَالـ'],
    source: 'teacher model on the website writing workshop (≈ 70 words)',
    notes: 'Suffix: أُسْرَتِي · بَيْتُنَا · أَخِي · مُعَلِّمِي · دَرْسَهُ. Iḍāfa: مَسْجِدِ الْحَيِّ · مَكْتَبَةِ الْمَدِينَةِ. Names: يُوسُفُ (no الـ) · الْمَغْرِبِ (with الـ) · الْأُسْتَاذُ أَحْمَدُ. Particles: بِالْحَافِلَةِ · وَالْقِصَصَ · لِلْمُعَلِّمِ. Fixed: أُمَارِسُ الرِّيَاضَةَ.',
  },
  selfCheck: [
    { route: 'core', text: 'No noun has both الـ and a suffix.' },
    { route: 'core', text: 'The first noun of each iḍāfa has no الـ.' },
    { route: 'develop', text: 'I dropped the alif only after لِـ.' },
    { route: 'develop', text: 'My names are in their established form.' },
    { route: 'stretch', text: 'I can label every definite noun by route.' },
  ],
  exitPick: [0, 3, 5],
  prep: {
    words: [['مُذَكَّرٌ', 'masculine', '—'], ['مُؤَنَّثٌ', 'feminine', '—'], ['تَاءٌ مَرْبُوطَةٌ', 'tāʾ marbūṭa (ة)', '—'], ['أَلِفٌ مَقْصُورَةٌ', 'final alif (ى)', '—'], ['مُؤَنَّثٌ مَعْنَوِيٌّ', 'feminine by meaning', '—']],
    questionEn: 'Sort these into masculine and feminine: مَدْرَسَةٌ · بَيْتٌ · أُمٌّ · شَمْسٌ · كِتَابٌ.',
    questionAr: 'مُذَكَّرٌ: ______ · مُؤَنَّثٌ: ______',
    homework: {
      core: 'Write five suffixed nouns + adjective (كِتَابِي الْجَدِيدُ).',
      develop: 'Redo website mini-checks 3 and 5; write three iḍāfa chains.',
      stretch: 'Website writing workshop (80–90 words) and the Articles mastery check.',
    },
    wordsSource: 'The five words prepare GM-N-01 (website Nouns lesson 1: noun gender).',
  },
  remember: 'Remember: five routes to definite · suffix or الـ — never both · the first noun of an iḍāfa is protected · only لِـ drops the alif of الـ.',
});

module.exports = { meta, slides };
