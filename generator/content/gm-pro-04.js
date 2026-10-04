'use strict';
/* GM-PRO-04 · Demonstrative Pronouns — website: Mastery & Revision › Grammar › Pronouns › Lesson 4 (near هَذَا · هَذِهِ · هَؤُلَاءِ; far ذَلِكَ ·
 * تِلْكَ · أُولَئِكَ; choose by grammatical gender; non-human plurals take هَذِهِ / تِلْكَ — هَذِهِ كُتُبٌ مُفِيدَةٌ; dual demonstratives with case:
 * هَذَانِ / هَذَيْنِ · هَاتَانِ / هَاتَيْنِ · ذَانِكَ / ذَيْنِكَ · تَانِكَ / تَيْنِكَ; the ten translation sentences; museum description; clinic).
 * The website writes هٰذَا / ذٰلِكَ with dagger alif; this deck keeps the spelling used in GM-ADJ-07 (هَذَا · ذَلِكَ) and explains the hidden ā.
 * GM-ADJ-07 taught demonstratives BEFORE a definite noun (“this book”); this lesson focuses on the demonstrative as the SUBJECT
 * pronoun (“This is a book”). The website checks are JS-driven and did not extract, so questions are teacher-written. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-PRO-04', fileTitle: 'Demonstrative_Pronouns', title: 'Demonstrative Pronouns', arabic: 'أَسْمَاءُ الْإِشَارَةِ',
  focus: 'Point and identify: hādhā kitābun = This is a book. Choose the demonstrative by distance (near / far), gender and number — and remember that plural things take hādhihi / tilka.',
  icon: 'FaHandPointer',
});

const slides = G.gmLesson({
  code: 'GM-PRO-04', site: 'grammar__06-pronouns__grammar-mastery-04-demonstrative-pronouns',
  support: `• Core: هَذَا · هَذِهِ · هَؤُلَاءِ in identification sentences (هَذَا طَالِبٌ · هَذِهِ طَالِبَةٌ · هَؤُلَاءِ طُلَّابٌ). Develop: far forms ذَلِكَ · تِلْكَ · أُولَئِكَ; human vs non-human plurals (هَذِهِ كُتُبٌ). Stretch: dual demonstratives and their case forms (هَذَانِ / هَذَيْنِ · هَاتَانِ / هَاتَيْنِ); “This is a book” vs “this book”.
• Revisits GM-ADJ-07 (demonstrative + al-noun). Here the demonstrative is the PRONOUN subject of a sentence.
• Website pronunciation note: هَذَا · ذَلِكَ · هَؤُلَاءِ · أُولَئِكَ contain a long ā that is not written with a normal alif (the website shows a small dagger alif: هٰذَا).`,
  teach: 'Near and far; human vs non-human plural; duals; phrase vs sentence.',
  wedo: 'Point and say; translate; repair.',
  next: { nextCode: 'GM-PRO-05', nextTitle: 'Relative Pronouns', nextAr: 'الْأَسْمَاءُ الْمَوْصُولَةُ' },
  doNow: {
    questions: [
      q('Choose “this school” (from GM-ADJ-07).', ['هَذِهِ الْمَدْرَسَةُ', 'هَذَا الْمَدْرَسَةُ', 'هَؤُلَاءِ الْمَدْرَسَةُ'], 'School is feminine.'),
      q('Choose “those men”.', ['أُولَئِكَ الرِّجَالُ', 'تِلْكَ الرِّجَالُ', 'ذَلِكَ الرِّجَالُ'], 'People, far → ulāʾika.'),
      q('Choose “these books”.', ['هَذِهِ الْكُتُبُ', 'هَؤُلَاءِ الْكُتُبُ', 'هَذَا الْكُتُبُ'], 'Plural things → hādhihi.'),
      q('Choose “I saw him.”', ['رَأَيْتُهُ.', 'رَأَيْتُهَا.', 'رَأَيْتُكَ.'], 'Retrieval from GM-PRO-03.'),
      q('What does هَذَا كِتَابٌ mean?', ['This is a book.', 'this book', 'that book'], 'No al- → a full sentence.'),
    ],
    keyIdea: { text: 'A demonstrative can BE the subject: “This is …”. Choose it by distance, gender and number.', ar: '{k|هَذَا} كِتَابٌ ‖ {e|تِلْكَ} سَيَّارَةٌ' },
    retrieves: 'Teacher-written retrieval of GM-ADJ-07 (demonstratives) and GM-PRO-03.',
  },
  objectives: ['Identify people and things with near demonstratives.', 'Use far demonstratives for things further away.', 'Choose hādhihi / tilka for plural things and hāʾulāʾi / ulāʾika for people.', 'Recognise the dual demonstratives.'],
  routes: {
    core: ['I say This is a … with hādhā / hādhihi.', 'I say These are … for people.'],
    develop: ['I use that / those correctly.', 'I say These are useful books with hādhihi.'],
    stretch: ['I use these two (m. / f.).', 'I tell “This is a book” from “this book”.'],
  },
  terms: {
    items: [
      { ar: 'اسْمُ الْإِشَارَةِ', en: 'demonstrative', note: 'this / that / these / those' },
      { ar: 'الْقَرِيبُ', en: 'near', note: 'هَذَا · هَذِهِ · هَؤُلَاءِ' },
      { ar: 'الْبَعِيدُ', en: 'far', note: 'ذَلِكَ · تِلْكَ · أُولَئِكَ' },
      { ar: 'هَذَانِ · هَاتَانِ', en: 'these two (m. · f.)', note: 'dual' },
      { ar: 'الْعَاقِلُ', en: 'human', note: 'هَؤُلَاءِ طُلَّابٌ' },
      { ar: 'غَيْرُ الْعَاقِلِ', en: 'non-human', note: 'هَذِهِ كُتُبٌ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · near and far (website tables)', title: 'This, that, these, those', ar: 'الْقَرِيبُ وَالْبَعِيدُ', ltr: true,
      cols: [{ label: 'Use', w: 3.2 }, { label: 'Near', w: 2.4, size: 24 }, { label: 'Example', w: 2.9, size: 22 }, { label: 'Far', w: 2.0, size: 24 }, { label: 'Example', w: 1.83, size: 20 }],
      rows: [
        { core: true, cells: ['masculine singular', 'هَذَا', 'هَذَا طَالِبٌ.', 'ذَلِكَ', 'ذَلِكَ بَيْتٌ.'] },
        { core: true, cells: ['feminine singular', 'هَذِهِ', 'هَذِهِ طَالِبَةٌ.', 'تِلْكَ', 'تِلْكَ مَدْرَسَةٌ.'] },
        { core: true, cells: ['human plural (m., f. or mixed)', 'هَؤُلَاءِ', 'هَؤُلَاءِ طُلَّابٌ.', 'أُولَئِكَ', 'أُولَئِكَ مُعَلِّمُونَ.'] },
        { cells: ['non-human plural', 'هَذِهِ', 'هَذِهِ كُتُبٌ.', 'تِلْكَ', 'تِلْكَ سَيَّارَاتٌ.'] },
      ],
      foot: 'Website key point: Arabic has no single word for “this” — choose by the grammatical gender of the noun. The long ā in hādhā / dhālika is not written as a normal alif.',
      notes: 'PART 1 (3 min) — website tables “Near demonstratives” and “Far demonstratives”. Gesture: hand on the desk (near) / point out of the window (far).',
    },
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 2 · gender, number and human reference (website)', title: 'People or things?', ar: 'الْعَاقِلُ وَغَيْرُ الْعَاقِلِ',
      points: [
        'Hādhā + masculine noun; hādhihi + feminine noun (website).',
        'Hāʾulāʾi / ulāʾika are for HUMAN plurals — male, female or mixed (website).',
        'Non-human plurals are treated as feminine singular, so they take hādhihi / tilka (website).',
        'In “This is a …” the noun has NO al-: hādhā kitābun.',
        'With al-, it becomes a phrase: hādhā l-kitābu = this book … (needs more).',
      ],
      examples: [
        { ar: 'هَذَا كِتَابٌ جَدِيدٌ.', en: 'This is a new book.', note: 'website' },
        { ar: 'هَذِهِ حَقِيبَةٌ جَدِيدَةٌ.', en: 'This is a new bag.', note: 'website' },
        { ar: 'هَؤُلَاءِ طَالِبَاتٌ مُجْتَهِدَاتٌ.', en: 'These are hardworking female students.', note: 'website · people' },
        { ar: 'هَذِهِ كُتُبٌ مُفِيدَةٌ.', en: 'These are useful books.', note: 'website · things' },
      ],
      callout: { kind: 'warn', head: 'WEBSITE RULE', text: 'Do not use hāʾulāʾi with things: “hāʾulāʾi kutubun” is wrong — say hādhihi kutubun.' },
      notes: 'PART 2 (3 min) — website “Gender, number and human reference”.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · dual demonstratives (website table) · Stretch', title: 'These two, those two — and their case forms', ar: 'أَسْمَاءُ الْإِشَارَةِ لِلْمُثَنَّى', ltr: true,
      cols: [{ label: 'Meaning', w: 3.2 }, { label: 'Subject', w: 2.6, size: 24 }, { label: 'Object / after a preposition', w: 3.0, size: 24 }, { label: 'Example (website)', w: 3.53, size: 22 }],
      rows: [
        { cells: ['these two (m.)', 'هَذَانِ', 'هَذَيْنِ', 'هَذَانِ طَالِبَانِ.'] },
        { cells: ['these two (f.)', 'هَاتَانِ', 'هَاتَيْنِ', 'هَاتَانِ طَالِبَتَانِ.'] },
        { cells: ['those two (m.)', 'ذَانِكَ', 'ذَيْنِكَ', 'ذَانِكَ طَالِبَانِ.'] },
        { cells: ['those two (f.)', 'تَانِكَ', 'تَيْنِكَ', 'تَانِكَ طَالِبَتَانِ.'] },
      ],
      foot: 'Website revision boundary: secure the singular and plural forms first; the dual is extra support. Like dual nouns, -āni becomes -ayni as object or after a preposition.',
      notes: 'PART 3 (3 min) — website “Dual demonstratives”. Stretch only; link to GM-N-02 (-āni / -ayni).',
    },
  ],
  quick: [
    q('Choose “This is a car.”', ['هَذِهِ سَيَّارَةٌ.', 'هَذَا سَيَّارَةٌ.', 'هَؤُلَاءِ سَيَّارَةٌ.'], 'Car is feminine.'),
    q('Choose “Those are teachers (m.).”', ['أُولَئِكَ مُعَلِّمُونَ.', 'تِلْكَ مُعَلِّمُونَ.', 'ذَلِكَ مُعَلِّمُونَ.'], 'People, far → ulāʾika.'),
    q('Choose “Those are fast cars.”', ['تِلْكَ سَيَّارَاتٌ سَرِيعَةٌ.', 'أُولَئِكَ سَيَّارَاتٌ سَرِيعَةٌ.', 'تِلْكَ سَيَّارَاتٌ سَرِيعَاتٌ.'], 'Plural things → tilka + feminine singular.'),
    q('Choose “These two are female students.”', ['هَاتَانِ طَالِبَتَانِ.', 'هَذَانِ طَالِبَتَانِ.', 'هَؤُلَاءِ طَالِبَتَانِ.'], 'Feminine dual → hātāni.'),
  ],
  quickNote: 'teacher-written hinge questions from the website translation sentences.',
  ido: {
    title: 'Watch me describe a museum',
    steps: [
      { head: 'Near, m.', ar: 'هَذَا مَتْحَفٌ', think: 'Museum, here.' },
      { head: 'Near, f.', ar: 'هَذِهِ قَاعَةٌ', think: 'Hall is feminine.' },
      { head: 'People', ar: 'هَؤُلَاءِ زُوَّارٌ', think: 'Visitors are people.' },
      { head: 'Far things', ar: 'تِلْكَ صُوَرٌ', think: 'Pictures → tilka.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'NEAR', e: 'FAR' },
    model: '{k|هَذَا} مَتْحَفٌ جَدِيدٌ، وَ{k|هَذِهِ} قَاعَةٌ كَبِيرَةٌ. {k|هَؤُلَاءِ} زُوَّارٌ مِنْ بِلَادٍ مُخْتَلِفَةٍ. {e|تِلْكَ} صُوَرٌ قَدِيمَةٌ، وَ{e|ذَلِكَ} تِمْثَالٌ مَشْهُورٌ.',
    modelEn: 'This is a new museum, and this is a large hall. These are visitors from different countries. Those are old pictures, and that is a famous statue.',
    notes: 'Website reading text. Share a picture of a museum on screen and point as you speak.',
  },
  models: [
    { ar: 'هَذَا مُعَلِّمٌ.', en: 'This is a teacher (m.).', tip: 'Website translation 1.' },
    { ar: 'ذَلِكَ بَيْتٌ.', en: 'That is a house.', tip: 'Website translation 4.' },
    { ar: 'هَذِهِ الْمَكْتَبَةُ الْجَدِيدَةُ كَبِيرَةٌ.', en: 'This new library is large.', tip: 'Website translation 10: phrase + predicate.' },
    { ar: 'مَا هَذَا؟ — هَذَا هَاتِفِي.', en: 'What is this? — This is my phone.', tip: 'With a possessive (GM-PRO-02).' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · translate accurately (website) · say it aloud', title: 'Ten sentences', ar: 'تَرْجِمْ بِدِقَّةٍ', ltr: true, stage: 'wedo',
      cols: [{ label: 'English (website)', w: 6.0 }, { label: 'Model translation (website)', w: 6.33, size: 24 }],
      rows: [
        { core: true, cells: ['This is a school.', 'هَذِهِ مَدْرَسَةٌ.'] },
        { core: true, cells: ['These are students.', 'هَؤُلَاءِ طُلَّابٌ.'] },
        { core: true, cells: ['Those are teachers.', 'أُولَئِكَ مُعَلِّمُونَ.'] },
        { cells: ['These are useful books.', 'هَذِهِ كُتُبٌ مُفِيدَةٌ.'] },
        { cells: ['Those two are male teachers.', 'ذَانِكَ مُعَلِّمَانِ.'] },
      ],
      foot: 'Website: check distance, gender, number and definiteness; write first, then reveal the model and correct in a different colour.',
      notes: 'WE DO (3 min) — five of the website’s ten translation sentences (the rest appear elsewhere in the deck). Cover the right column.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · which “these”?', title: 'hādhihi or hāʾulāʾi?', ar: 'هَذِهِ أَمْ هَؤُلَاءِ؟',
      categories: ['hādhihi (f. sing. / things)', 'hāʾulāʾi (people)'],
      items: [['سَيَّارَاتٌ', 0], ['مُهَنْدِسُونَ', 1], ['حَقِيبَةٌ', 0], ['زُوَّارٌ', 1], ['صُوَرٌ', 0], ['أَطْفَالٌ', 1], ['مَدِينَةٌ', 0], ['مُرْشِدُونَ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type 1 or 2, then say the full sentence.',
    },
  ],
  mistakes: [
    { wrong: 'هَذَا سَيَّارَةٌ.', right: 'هَذِهِ سَيَّارَةٌ.', why: 'Car is feminine (website clinic).' },
    { wrong: 'هَؤُلَاءِ كُتُبٌ.', right: 'هَذِهِ كُتُبٌ.', why: 'Plural things → hādhihi (website clinic).' },
    { wrong: 'هَذَانِ طَالِبَتَانِ.', right: 'هَاتَانِ طَالِبَتَانِ.', why: 'Feminine dual uses hātāni (website clinic).' },
  ],
  hints: ['Is car feminine?', 'Are books people?', 'Two girls?'],
  practice: [
    q('The object is next to you. Choose “This is a pen.”', ['هَذَا قَلَمٌ.', 'ذَلِكَ قَلَمٌ.', 'تِلْكَ قَلَمٌ.'], 'Near → hādhā (website clinic: don’t use the far form for something close).'),
    q('Choose “That is a hospital.”', ['ذَلِكَ مُسْتَشْفًى.', 'تِلْكَ مُسْتَشْفًى.', 'أُولَئِكَ مُسْتَشْفًى.'], 'Hospital is masculine → dhālika.'),
    q('Choose “These are my friends.”', ['هَؤُلَاءِ أَصْدِقَائِي.', 'هَذِهِ أَصْدِقَائِي.', 'هَذَا أَصْدِقَائِي.'], 'People → hāʾulāʾi.'),
    q('What does هَذَا الْكِتَابُ جَدِيدٌ mean?', ['This book is new.', 'This is a new book.', 'This is the book.'], 'Phrase + predicate.'),
  ],
  practiceLabel: 'teacher-written practice on the website content',
  read: {
    title: 'At the museum', label: 'website reading text',
    text: 'هَذَا مَتْحَفٌ جَدِيدٌ، وَهَذِهِ قَاعَةٌ كَبِيرَةٌ. هَؤُلَاءِ زُوَّارٌ مِنْ بِلَادٍ مُخْتَلِفَةٍ. فِي آخِرِ الْقَاعَةِ تِلْكَ صُوَرٌ قَدِيمَةٌ، وَذَلِكَ تِمْثَالٌ مَشْهُورٌ. أُولَئِكَ مُرْشِدُونَ يَشْرَحُونَ تَارِيخَ الْمَكَانِ.',
    glossary: [['مَتْحَفٌ', 'museum'], ['قَاعَةٌ', 'hall'], ['زُوَّارٌ', 'visitors'], ['صُوَرٌ', 'pictures'], ['تِمْثَالٌ', 'statue'], ['مُرْشِدُونَ', 'guides'], ['يَشْرَحُونَ', 'they explain']],
    task: 'Website: follow the demonstratives — mark each one near or far, and person or thing.',
    questions: [
      q('Why is it هَذِهِ before the hall?', ['Hall is feminine.', 'Hall is plural.', 'Hall is far away.'], 'Feminine singular.'),
      q('Why is it تِلْكَ before the pictures?', ['Pictures are plural things, far away.', 'Pictures are people.', 'It is a mistake.'], 'Non-human plural → tilka.'),
      q('Who are أُولَئِكَ?', ['the guides', 'the visitors', 'the pictures'], 'Far, people.'),
      q('Which demonstrative refers to the statue?', ['ذَلِكَ', 'هَذِهِ', 'هَؤُلَاءِ'], 'Masculine, far.'),
    ],
    qNote: 'Website reading text (dagger-alif spelling normalised); questions teacher-written.',
  },
  speak: {
    title: 'Speaking: a picture or room tour', source: 'website picture-description practice',
    prompts: [
      { route: 'core', ar: 'مَا هَذَا؟ مَا هَذِهِ؟ (أَشْيَاءُ حَوْلَكَ)' },
      { route: 'develop', ar: 'صِفْ صُورَةً لِمَدْرَسَتِكَ: هَذَا … ذَلِكَ … هَؤُلَاءِ …' },
      { route: 'stretch', ar: 'صِفْ صُورَةً لِأُسْرَتِكَ مَعَ الْمُثَنَّى: هَذَانِ … هَاتَانِ …' },
    ],
    stems: [
      { route: 'core', ar: 'هَذَا ______ ، وَهَذِهِ ______ .' },
      { route: 'develop', ar: 'تِلْكَ ______ ، وَأُولَئِكَ ______ .' },
      { route: 'stretch', ar: 'هَذَانِ ______ ، وَهَاتَانِ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَنْ هَؤُلَاءِ فِي الصُّورَةِ؟', en: 'Who are these people in the photo?' },
      { who: 'B', ar: 'هَؤُلَاءِ أَبْنَاءُ عَمِّي. هَذَانِ أَخَوَانِ، وَهَاتَانِ أُخْتَاهُمَا. وَتِلْكَ حَدِيقَةُ بَيْتِهِمْ.', en: 'These are my cousins. These two are brothers, and these two are their sisters. And that is their garden.' },
    ],
    notes: 'Students share a picture and point as they speak. Check people vs things and the dual (Stretch).',
  },
  write: {
    siteTask: 'Write the website’s ten translation sentences, then a short description of a picture or place using demonstratives.',
    core: { amount: '6 sentences', task: 'Identify six things around you: This is … / That is …', how: 'Choose by gender and distance.' },
    develop: { amount: '8 sentences', task: 'Add people and plural things.', how: 'hāʾulāʾi for people; hādhihi for things.' },
    stretch: { amount: '8–10 sentences', task: 'Describe a picture with near, far and dual forms.', how: 'Add one “this … is …” phrase sentence.' },
  },
  frames: {
    core: [
      { en: 'This is a …', ar: 'هَذَا ______ .' },
      { en: 'This is a … (f.)', ar: 'هَذِهِ ______ .' },
      { en: 'That is a …', ar: 'ذَلِكَ ______ .' },
      { en: 'These are … (people)', ar: 'هَؤُلَاءِ ______ .' },
    ],
    develop: [
      { en: 'Those are … (people)', ar: 'أُولَئِكَ ______ .' },
      { en: 'These are … books.', ar: 'هَذِهِ كُتُبٌ ______ .' },
      { en: 'Those are … cars.', ar: 'تِلْكَ سَيَّارَاتٌ ______ .' },
      { en: 'This new car is …', ar: 'هَذِهِ السَّيَّارَةُ الْجَدِيدَةُ ______ .' },
    ],
    bank: ['هَذَا', 'هَذِهِ', 'هَؤُلَاءِ', 'ذَلِكَ', 'تِلْكَ', 'أُولَئِكَ', 'هَذَانِ', 'هَاتَانِ', 'طَالِبٌ', 'مَدْرَسَةٌ', 'طُلَّابٌ', 'كُتُبٌ', 'مُفِيدَةٌ', 'سَرِيعَةٌ'],
  },
  stretchTask: {
    task: 'Describe a picture or place in 8–10 sentences using demonstrative pronouns.',
    checklist: ['Two near singular (m. and f.).', 'Two far singular (m. and f.).', 'One human plural (hāʾulāʾi or ulāʾika).', 'One non-human plural with hādhihi or tilka.', 'One dual demonstrative.'],
    phrases: [['هَذَا مَسْجِدٌ', 'this is a mosque'], ['تِلْكَ حَدِيقَةٌ', 'that is a garden'], ['أُولَئِكَ زُوَّارٌ', 'those are visitors'], ['هَذِهِ مَحَلَّاتٌ', 'these are shops'], ['هَاتَانِ أُخْتَايَ', 'these two are my sisters'], ['مَا ذَلِكَ؟', 'what is that?']],
  },
  model: {
    text: 'هَذِهِ صُورَةٌ لِمَدِينَتِي. هَذَا مَسْجِدٌ كَبِيرٌ، وَتِلْكَ مَدْرَسَتِي. هَؤُلَاءِ طُلَّابٌ يَلْعَبُونَ فِي السَّاحَةِ، وَأُولَئِكَ مُعَلِّمُونَ يَتَحَدَّثُونَ. هَذِهِ مَحَلَّاتٌ صَغِيرَةٌ، وَتِلْكَ سَيَّارَاتٌ كَثِيرَةٌ. هَذَانِ أَخَوَايَ، وَهَاتَانِ صَدِيقَتَانِ لِأُخْتِي. ذَلِكَ الْمَبْنَى الْعَالِي مُسْتَشْفًى.',
    en: 'This is a picture of my city. This is a big mosque, and that is my school. These are students playing in the playground, and those are teachers talking. These are small shops, and those are many cars. These two are my brothers, and these two are friends of my sister. That tall building is a hospital.',
    find: ['near', 'far', 'people / things', 'dual'],
    source: 'teacher model on the website picture-description task',
  },
  selfCheck: [
    { route: 'core', text: 'My demonstratives match the noun’s gender.' },
    { route: 'core', text: '“This is a …” sentences have no al- on the noun.' },
    { route: 'develop', text: 'Hāʾulāʾi / ulāʾika only for people.' },
    { route: 'develop', text: 'Plural things take hādhihi / tilka.' },
    { route: 'stretch', text: 'I used a dual demonstrative correctly.' },
  ],
  exit: [
    q('Choose “That is a garden.”', ['تِلْكَ حَدِيقَةٌ.', 'ذَلِكَ حَدِيقَةٌ.', 'أُولَئِكَ حَدِيقَةٌ.'], 'Garden is feminine.'),
    q('Choose “These are visitors.”', ['هَؤُلَاءِ زُوَّارٌ.', 'هَذِهِ زُوَّارٌ.', 'هَذَا زُوَّارٌ.'], 'People → hāʾulāʾi.'),
    q('Choose “These are old pictures.”', ['هَذِهِ صُوَرٌ قَدِيمَةٌ.', 'هَؤُلَاءِ صُوَرٌ قَدِيمَةٌ.', 'هَذِهِ صُوَرٌ قَدِيمَاتٌ.'], 'Plural things → hādhihi + f. sing.'),
  ],
  mastery: false,
  prep: {
    words: [['الَّذِي', 'who / which (m.)', '—'], ['الَّتِي', 'who / which (f.)', '—'], ['الَّذِينَ', 'who (m. pl., people)', '—'], ['مَنْ', 'whoever, the one who', '—'], ['مَا', 'what, that which', '—']],
    questionEn: 'How would you join these: “This is the student. He won the prize.” Which word means “who”?',
    questionAr: 'هَذَا الطَّالِبُ ______ فَازَ بِالْجَائِزَةِ.',
    homework: {
      core: 'Label ten things at home: This is … / That is …',
      develop: 'Complete the website’s ten translation sentences.',
      stretch: 'Describe a family photo with dual forms.',
    },
    wordsSource: 'The five words prepare GM-PRO-05 (website Pronouns lesson 5: relative pronouns).',
  },
  remember: 'Remember: near hādhā / hādhihi / hāʾulāʾi · far dhālika / tilka / ulāʾika · people plural vs things (hādhihi) · two → hādhāni / hātāni · “This is a …” = no al-.',
});

module.exports = { meta, slides };
