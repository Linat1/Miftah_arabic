'use strict';
/* GM-PRO-05 · Relative Pronouns — website: Mastery & Revision › Grammar › Pronouns › Lesson 5 (relative pronouns join ideas: أَعْرِفُ الْوَلَدَ
 * الَّذِي يَسْكُنُ هُنَا; the family الَّذِي · الَّتِي · اللَّذَانِ · اللَّتَانِ · الَّذِينَ · اللَّاتِي (house form; اللَّائِي also correct); three-part
 * structure antecedent + relative pronoun + relative clause; agreement with the antecedent then verb agreement inside the clause;
 * definite antecedents take a relative pronoun, indefinite ones link directly — جَاءَ طَالِبٌ فَازَ; resumptive pronoun — الْكِتَابُ الَّذِي
 * قَرَأْتُهُ · الْمَدْرَسَةُ الَّتِي أَدْرُسُ فِيهَا; links to Lessons 1–4; clinic). The website checks are JS-driven and did not extract, so all
 * questions are teacher-written. The reading text (Samer and Layla) is the website’s, with dagger-alif spellings normalised. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-PRO-05', fileTitle: 'Relative_Pronouns', title: 'Relative Pronouns', arabic: 'الْأَسْمَاءُ الْمَوْصُولَةُ',
  focus: 'Join two ideas with “who / which / that”: alladhī for a masculine noun, allatī for a feminine one, alladhīna for a group of men. Use them after a DEFINITE noun — and point back to the noun with a pronoun when needed: the book that I read it.',
  icon: 'FaLink',
});

const slides = G.gmLesson({
  code: 'GM-PRO-05', site: 'grammar__06-pronouns__grammar-mastery-05-relative-pronouns',
  support: `• Core: الَّذِي and الَّتِي after a definite noun; joining two short ideas (أَعْرِفُ الْوَلَدَ الَّذِي يَسْكُنُ هُنَا). Develop: plural forms الَّذِينَ · اللَّاتِي; verb agreement inside the clause; tracking relative pronouns in reading. Stretch: the dual (اللَّذَانِ / اللَّذَيْنِ · اللَّتَانِ / اللَّتَيْنِ); resumptive pronouns (قَرَأْتُهُ · فِيهَا); no relative pronoun after an indefinite noun (جَاءَ طَالِبٌ فَازَ).
• This lesson pulls together Lessons 1–4: subject pronouns, possessive and object endings, and demonstratives all appear inside relative clauses.
• Non-human plural trap (website game): things in the plural take الَّتِي — الْكُتُبُ الَّتِي قَرَأْتُهَا.`,
  teach: 'The family; three-part structure; agreement; definite vs indefinite; resumptive pronoun.',
  wedo: 'Build the bridge; join sentences; repair.',
  next: { nextCode: 'GM-PRO-06', nextTitle: 'Pronouns with li and bi', nextAr: 'الضَّمَائِرُ مَعَ اللَّامِ وَالْبَاءِ' },
  doNow: {
    questions: [
      q('Choose “This is a book.”', ['هَذَا كِتَابٌ.', 'هَذِهِ كِتَابٌ.', 'هَؤُلَاءِ كِتَابٌ.'], 'Retrieval from GM-PRO-04.'),
      q('Choose “I read it” (the book).', ['قَرَأْتُهُ.', 'قَرَأْتُهَا.', 'قَرَأْتُكَ.'], 'Book is masculine → -hu (GM-PRO-03).'),
      q('Choose “his book”.', ['كِتَابُهُ', 'كِتَابُهَا', 'كِتَابِي'], '-hu = his (GM-PRO-02).'),
      q('Choose “the female students”.', ['الطَّالِبَاتُ', 'الطُّلَّابُ', 'الطَّالِبَتَانِ'], 'Feminine plural -āt.'),
      q('Two ideas: “I know the boy. The boy lives here.” What word would join them in English?', ['who', 'and', 'but'], 'A relative pronoun: who.'),
    ],
    keyIdea: { text: 'Join two ideas with who / which / that. The relative pronoun agrees with the noun before it.', ar: 'الْوَلَدُ {k|الَّذِي} يَسْكُنُ هُنَا ‖ الْبِنْتُ {e|الَّتِي} تَسْكُنُ هُنَا' },
    retrieves: 'Teacher-written retrieval of GM-PRO-02, 03 and 04 (all reappear inside relative clauses).',
  },
  objectives: ['Join two ideas with a relative pronoun.', 'Choose the relative pronoun that agrees with the antecedent.', 'Make the verb inside the clause agree.', 'Use a resumptive pronoun and know when no relative pronoun is needed.'],
  routes: {
    core: ['I use alladhī and allatī after a definite noun.', 'I join two short sentences.'],
    develop: ['I use alladhīna and allātī for groups of people.', 'I make the verb in the clause agree.'],
    stretch: ['I write the book that I read it (qaraʾtuhu).', 'I link an indefinite noun directly, with no alladhī.'],
  },
  terms: {
    items: [
      { ar: 'الِاسْمُ الْمَوْصُولُ', en: 'relative pronoun', note: 'الَّذِي · الَّتِي' },
      { ar: 'الَّذِي', en: 'who / which (m. sing.)', tr: 'alladhī', note: 'الطَّالِبُ الَّذِي فَازَ' },
      { ar: 'الَّتِي', en: 'who / which (f. sing. & things)', tr: 'allatī', note: 'الطَّالِبَةُ الَّتِي فَازَتْ' },
      { ar: 'الَّذِينَ', en: 'who (m. / mixed people)', tr: 'alladhīna', note: 'الطُّلَّابُ الَّذِينَ حَضَرُوا' },
      { ar: 'جُمْلَةُ الصِّلَةِ', en: 'relative clause', note: 'the extra information' },
      { ar: 'الضَّمِيرُ الْعَائِدُ', en: 'resumptive pronoun (refers back)', note: 'قَرَأْتُهُ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 1 · the relative-pronoun family (website table)', title: 'Who, which, that', ar: 'الْأَسْمَاءُ الْمَوْصُولَةُ', ltr: true,
      cols: [{ label: 'Used with', w: 3.6 }, { label: 'Form', w: 2.6, size: 24 }, { label: 'Example (website)', w: 6.13, size: 22 }],
      rows: [
        { core: true, cells: ['masculine singular', 'الَّذِي', 'الطَّالِبُ الَّذِي فَازَ'] },
        { core: true, cells: ['feminine singular (and plural things)', 'الَّتِي', 'الطَّالِبَةُ الَّتِي فَازَتْ'] },
        { core: true, cells: ['masculine or mixed human plural', 'الَّذِينَ', 'الطُّلَّابُ الَّذِينَ حَضَرُوا'] },
        { cells: ['feminine human plural', 'اللَّاتِي', 'الطَّالِبَاتُ اللَّاتِي حَضَرْنَ'] },
        { cells: ['masculine dual (subject)', 'اللَّذَانِ', 'الطَّالِبَانِ اللَّذَانِ نَجَحَا'] },
        { cells: ['feminine dual (subject)', 'اللَّتَانِ', 'الطَّالِبَتَانِ اللَّتَانِ نَجَحَتَا'] },
      ],
      foot: 'Website house form: allātī for the feminine plural; allāʾī is also correct. Dual forms become alladhayni / allatayni as object or after a preposition (Stretch).',
      notes: 'PART 1 (4 min) — website “The relative-pronoun family”. Core: rows 1–3. The non-human plural uses allatī (website game trap).',
    },
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 2 · three-part structure and agreement (website)', title: 'Noun + who + extra information', ar: 'الْمَوْصُوفُ · الْمَوْصُولُ · الصِّلَةُ',
      points: [
        'The noun being described is the ANTECEDENT; the words after the relative pronoun are the RELATIVE CLAUSE (website).',
        'Step 1: check the antecedent — masculine or feminine? one, two or a group? person or thing?',
        'Step 2: choose the relative pronoun that matches it.',
        'Step 3: make the verb inside the clause agree with its subject (website: agreement is cumulative).',
        'Do not repeat the noun — the relative pronoun replaces it.',
      ],
      examples: [
        { ar: 'أَعْرِفُ الْوَلَدَ الَّذِي يَسْكُنُ هُنَا.', en: 'I know the boy who lives here.', note: 'website · joining two ideas' },
        { ar: 'الطَّالِبُ الَّذِي يَدْرُسُ كَثِيرًا مُجْتَهِدٌ.', en: 'The student who studies a lot is hardworking.', note: 'website · three parts' },
        { ar: 'الطَّالِبَةُ الَّتِي تَكْتُبُ', en: 'the student (f.) who writes', note: 'website' },
        { ar: 'الطَّالِبَاتُ اللَّاتِي يَكْتُبْنَ', en: 'the students (f.) who write', note: 'website' },
      ],
      notes: 'PART 2 (3 min) — website “The three-part structure” and “agreement”. Underline the antecedent, circle the relative pronoun, box the clause (website mastery routine).',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 3 · definite vs indefinite · the resumptive pronoun (website) · Stretch', title: 'When to use it — and pointing back', ar: 'التَّعْرِيفُ وَالضَّمِيرُ الْعَائِدُ', ltr: true,
      cols: [{ label: 'Point', w: 3.4 }, { label: 'Arabic (website)', w: 5.2, size: 22 }, { label: 'Meaning', w: 3.73 }],
      rows: [
        { core: true, cells: ['definite noun → relative pronoun', 'جَاءَ الطَّالِبُ الَّذِي فَازَ.', 'The student who won came.'] },
        { cells: ['indefinite noun → linked directly', 'جَاءَ طَالِبٌ فَازَ فِي الْمُسَابَقَةِ.', 'A student who won the competition came.'] },
        { cells: ['refers back as an object', 'هَذَا هُوَ الْكِتَابُ الَّذِي قَرَأْتُهُ.', 'This is the book that I read.'] },
        { cells: ['refers back after a preposition', 'هَذِهِ هِيَ الْمَدْرَسَةُ الَّتِي أَدْرُسُ فِيهَا.', 'This is the school in which I study.'] },
        { cells: ['possessive inside the clause', 'الطَّالِبُ الَّذِي كِتَابُهُ جَدِيدٌ', 'the student whose book is new'] },
      ],
      foot: 'Website: in qaraʾtuhu, -hu refers back to the book; in fīhā, -hā refers back to the school. English “who / which / that” works after any noun — Arabic does not.',
      notes: 'PART 3 (4 min) — website “Definite nouns normally take a relative pronoun”, “The resumptive pronoun” and the link to Lesson 2.',
    },
  ],
  quick: [
    q('Choose “the teacher (f.) who helped me”.', ['الْمُعَلِّمَةُ الَّتِي سَاعَدَتْنِي', 'الْمُعَلِّمَةُ الَّذِي سَاعَدَتْنِي', 'الْمُعَلِّمَةُ الَّذِينَ سَاعَدُونِي'], 'Feminine singular → allatī.'),
    q('Choose “the players who won”.', ['اللَّاعِبُونَ الَّذِينَ فَازُوا', 'اللَّاعِبُونَ الَّذِي فَازُوا', 'اللَّاعِبُونَ الَّتِي فَازُوا'], 'Masculine human plural → alladhīna.'),
    q('Choose “the books that I bought”.', ['الْكُتُبُ الَّتِي اشْتَرَيْتُهَا', 'الْكُتُبُ الَّذِينَ اشْتَرَيْتُهُمْ', 'الْكُتُبُ الَّذِي اشْتَرَيْتُهُ'], 'Plural things → allatī + -hā.'),
    q('Choose “A girl who speaks Arabic came.”', ['جَاءَتْ بِنْتٌ تَتَكَلَّمُ الْعَرَبِيَّةَ.', 'جَاءَتْ بِنْتٌ الَّتِي تَتَكَلَّمُ الْعَرَبِيَّةَ.', 'جَاءَتْ الْبِنْتُ الَّذِي تَتَكَلَّمُ الْعَرَبِيَّةَ.'], 'Indefinite noun → no relative pronoun.'),
  ],
  quickNote: 'teacher-written hinge questions on the website’s three parts.',
  ido: {
    title: 'Watch me join two sentences',
    steps: [
      { head: 'Idea 1', ar: 'هَذَا هُوَ الْكِتَابُ.', think: 'Antecedent: the book (m.).' },
      { head: 'Idea 2', ar: 'قَرَأْتُ الْكِتَابَ.', think: 'Same book.' },
      { head: 'Bridge', ar: 'الَّذِي', think: 'Masculine singular.' },
      { head: 'Point back', ar: 'الْكِتَابُ الَّذِي قَرَأْتُهُ', think: '-hu = the book.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'RELATIVE PRONOUN', e: 'POINTS BACK' },
    model: 'هَذَا هُوَ الْكِتَابُ {k|الَّذِي} {e|قَرَأْتُهُ}، وَهَذِهِ هِيَ الْمَكْتَبَةُ {k|الَّتِي} أَقْرَأُ {e|فِيهَا}.',
    modelEn: 'This is the book that I read, and this is the library in which I read.',
    notes: 'Website resumptive-pronoun examples. Cross out the repeated noun in idea 2 and replace it with the bridge + the pointing-back pronoun.',
  },
  models: [
    { ar: 'أَعْرِفُ الْوَلَدَ الَّذِي يَسْكُنُ هُنَا.', en: 'I know the boy who lives here.', tip: 'Website.' },
    { ar: 'هَذِهِ هِيَ الْمُعَلِّمَةُ الَّتِي تُدَرِّسُنَا.', en: 'This is the teacher who teaches us.', tip: 'Website: with a demonstrative.' },
    { ar: 'شَكَرْنَا الطُّلَّابَ الَّذِينَ سَاعَدُونَا.', en: 'We thanked the students who helped us.', tip: 'Plural + object ending.' },
    { ar: 'الْمَشْرُوعُ الَّذِي أَعْلَنَتْهُ الْمَدْرَسَةُ مُفِيدٌ.', en: 'The project that the school announced is useful.', tip: 'Website: news style.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · build the bridge (website game) · which relative pronoun?', title: 'alladhī, allatī or alladhīna?', ar: 'ابْنِ الْجِسْرَ',
      categories: ['alladhī (m. sing.)', 'allatī (f. sing. / things)', 'alladhīna (people, pl.)'],
      items: [['الْمُدِيرُ', 0], ['الْجَامِعَةُ', 1], ['الْمُهَنْدِسُونَ', 2], ['الْبَابُ', 0], ['السَّيَّارَاتُ', 1], ['الْأَصْدِقَاءُ', 2], ['الْفِيلْمُ', 0], ['الْقِصَّةُ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min) — website game “The Connector”. Students type 1–3. Trap: cars are a non-human plural → allatī.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'We do · join the two ideas · say it aloud', title: 'Two sentences → one', ar: 'اجْمَعِ الْجُمْلَتَيْنِ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Two ideas', w: 5.6, size: 20 }, { label: 'One sentence', w: 6.73, size: 22 }],
      rows: [
        { core: true, cells: ['هَذَا الطَّالِبُ. الطَّالِبُ فَازَ.', 'هَذَا الطَّالِبُ الَّذِي فَازَ.'] },
        { core: true, cells: ['أُحِبُّ الْمُعَلِّمَةَ. الْمُعَلِّمَةُ تُسَاعِدُنَا.', 'أُحِبُّ الْمُعَلِّمَةَ الَّتِي تُسَاعِدُنَا.'] },
        { cells: ['رَأَيْتُ الطُّلَّابَ. الطُّلَّابُ حَضَرُوا.', 'رَأَيْتُ الطُّلَّابَ الَّذِينَ حَضَرُوا.'] },
        { cells: ['هَذِهِ الْقِصَّةُ. كَتَبْتُ الْقِصَّةَ.', 'هَذِهِ الْقِصَّةُ الَّتِي كَتَبْتُهَا.'] },
      ],
      foot: 'Replace the repeated noun with the relative pronoun; if the noun was an object, point back with an ending (-hā).',
      notes: 'WE DO (2 min). Cover the right column; students join the ideas aloud. Row 4 is Stretch (resumptive pronoun).',
    },
  ],
  mistakes: [
    { wrong: 'الطَّالِبَةُ الَّذِي فَازَتْ', right: 'الطَّالِبَةُ الَّتِي فَازَتْ', why: 'The antecedent is feminine singular (website).' },
    { wrong: 'الطُّلَّابُ الَّذِي حَضَرُوا', right: 'الطُّلَّابُ الَّذِينَ حَضَرُوا', why: 'Masculine or mixed human plural → alladhīna (website).' },
    { wrong: 'الْكِتَابُ الَّذِي قَرَأْتُ', right: 'الْكِتَابُ الَّذِي قَرَأْتُهُ', why: 'The object ending refers back to the book (website).' },
  ],
  hints: ['Is the student female?', 'One or many?', 'What refers back?'],
  practice: [
    q('Choose “the two students who succeeded” (m.).', ['الطَّالِبَانِ اللَّذَانِ نَجَحَا', 'الطَّالِبَانِ الَّذِينَ نَجَحُوا', 'الطَّالِبَانِ الَّذِي نَجَحَ'], 'Masculine dual → alladhāni (website).'),
    q('Choose “the girls who attended”.', ['الْبَنَاتُ اللَّاتِي حَضَرْنَ', 'الْبَنَاتُ الَّذِينَ حَضَرُوا', 'الْبَنَاتُ الَّتِي حَضَرَتْ'], 'Feminine human plural → allātī.'),
    q('Choose “the house in which I live”.', ['الْبَيْتُ الَّذِي أَسْكُنُ فِيهِ', 'الْبَيْتُ الَّذِي أَسْكُنُ', 'الْبَيْتُ الَّتِي أَسْكُنُ فِيهَا'], 'Masculine + fīhi points back.'),
    q('Which sentence is correct?', ['جَاءَ طَالِبٌ فَازَ فِي الْمُسَابَقَةِ.', 'جَاءَ طَالِبٌ الَّذِي فَازَ.', 'جَاءَ الطَّالِبُ فَازَ الَّذِي.'], 'Indefinite antecedent → link directly (website clinic).'),
  ],
  practiceLabel: 'teacher-written practice on the website content',
  read: {
    title: 'Our school stars', label: 'website reading text',
    text: 'فِي مَدْرَسَتِنَا طُلَّابٌ كَثِيرُونَ. الطَّالِبُ الَّذِي فَازَ فِي الْمُسَابَقَةِ اسْمُهُ سَامِرٌ. وَالطَّالِبَةُ الَّتِي كَتَبَتِ الْقِصَّةَ اسْمُهَا لَيْلَى. هَؤُلَاءِ هُمُ الطُّلَّابُ الَّذِينَ يُسَاعِدُونَ زُمَلَاءَهُمْ، وَتِلْكَ هِيَ الْمُعَلِّمَةُ الَّتِي تُشَجِّعُهُمْ دَائِمًا. أُحِبُّ الْمَكْتَبَةَ الَّتِي أَقْرَأُ فِيهَا، وَهَذَا هُوَ الْكِتَابُ الَّذِي قَرَأْتُهُ فِي الْأُسْبُوعِ الْمَاضِي.',
    size: 22,
    glossary: [['الْمُسَابَقَةِ', 'the competition'], ['زُمَلَاءَهُمْ', 'their classmates'], ['تُشَجِّعُهُمْ', 'encourages them'], ['دَائِمًا', 'always'], ['فِيهَا', 'in it']],
    task: 'Website: underline each antecedent, circle each relative pronoun and find the extra information.',
    questions: [
      q('Who won the competition?', ['Samer', 'Layla', 'the teacher'], 'الطَّالِبُ الَّذِي فَازَ … سَامِرٌ.'),
      q('What did Layla do?', ['She wrote the story.', 'She won the competition.', 'She helps the students.'], 'الَّتِي كَتَبَتِ الْقِصَّةَ.'),
      q('Why is it الَّذِينَ before “help their classmates”?', ['The students are a group of people.', 'They are things.', 'It is dual.'], 'Human plural.'),
      q('What does فِيهَا refer back to?', ['the library', 'the story', 'the teacher'], 'Resumptive pronoun.'),
    ],
    qNote: 'Website reading text (spelling normalised); questions teacher-written.',
  },
  speak: {
    title: 'Speaking: describe people and places precisely', source: 'website supported speaking',
    prompts: [
      { route: 'core', ar: 'مَنْ صَدِيقُكَ؟ صِفْهُ بِـ «الَّذِي».' },
      { route: 'develop', ar: 'صِفْ مُعَلِّمَةً وَمَكَانًا تُحِبُّهُمَا.' },
      { route: 'stretch', ar: 'صِفْ كِتَابًا أَوْ فِيلْمًا أَعْجَبَكَ: الْكِتَابُ الَّذِي قَرَأْتُهُ …' },
    ],
    stems: [
      { route: 'core', ar: 'صَدِيقِي هُوَ الشَّخْصُ الَّذِي ______ .' },
      { route: 'develop', ar: 'مُعَلِّمَتِي هِيَ الَّتِي ______ .' },
      { route: 'stretch', ar: 'مَدْرَسَتِي هِيَ الْمَكَانُ الَّذِي ______ فِيهِ.' },
    ],
    model: [
      { who: 'A', ar: 'مَنْ هُوَ صَدِيقُكَ الْمُفَضَّلُ؟', en: 'Who is your best friend?' },
      { who: 'B', ar: 'صَدِيقِي هُوَ الشَّخْصُ الَّذِي يُسَاعِدُنِي دَائِمًا، وَأُمُّهُ هِيَ الَّتِي تَطْبُخُ لَنَا الْكَعْكَ!', en: 'My friend is the person who always helps me, and his mother is the one who bakes us cakes!' },
    ],
    notes: 'Website stems. Final performance: one masculine, one feminine and one plural relative pronoun, one resumptive pronoun, and one link to a demonstrative or possessive.',
  },
  write: {
    siteTask: 'Write 8–10 sentences about your school, family, a person you admire or a book you enjoyed, with at least six relative pronouns.',
    core: { amount: '6 sentences', task: 'Six sentences with alladhī or allatī.', how: 'Definite noun + relative pronoun + clause.' },
    develop: { amount: '8 sentences', task: 'Add plural forms and check verb agreement.', how: 'alladhīna + -ūna; allātī + -na.' },
    stretch: { amount: '8–10 sentences', task: 'Website task with resumptive pronouns.', how: 'the book that I read it · the school in which I study.' },
  },
  frames: {
    core: [
      { en: 'My friend is the person who …', ar: 'صَدِيقِي هُوَ الشَّخْصُ الَّذِي ______ .' },
      { en: 'My mother is the one who …', ar: 'أُمِّي هِيَ الَّتِي ______ .' },
      { en: 'I like the teacher who …', ar: 'أُحِبُّ الْمُعَلِّمَ الَّذِي ______ .' },
      { en: 'This is the city that …', ar: 'هَذِهِ هِيَ الْمَدِينَةُ الَّتِي ______ .' },
    ],
    develop: [
      { en: 'The students who …', ar: 'الطُّلَّابُ الَّذِينَ ______ .' },
      { en: 'The book that I read …', ar: 'الْكِتَابُ الَّذِي قَرَأْتُهُ ______ .' },
      { en: 'The school in which I study …', ar: 'الْمَدْرَسَةُ الَّتِي أَدْرُسُ فِيهَا ______ .' },
      { en: 'The girls who …', ar: 'الْبَنَاتُ اللَّاتِي ______ .' },
    ],
    bank: ['الَّذِي', 'الَّتِي', 'الَّذِينَ', 'اللَّاتِي', 'اللَّذَانِ', 'اللَّتَانِ', 'يُسَاعِدُنِي', 'فَازَ', 'كَتَبَتْ', 'قَرَأْتُهُ', 'فِيهَا', 'فِيهِ'],
  },
  stretchTask: {
    task: 'Website writing task: a connected description (8–10 sentences) with at least six relative pronouns.',
    checklist: ['One alladhī and one allatī.', 'One plural relative pronoun (alladhīna or allātī).', 'One resumptive pronoun (an ending that points back).', 'One indefinite noun linked without a relative pronoun.', 'Varied sentence patterns — not the same short sentence repeated.'],
    phrases: [['الشَّخْصُ الَّذِي أُعْجِبُ بِهِ', 'the person I admire'], ['الْكِتَابُ الَّذِي قَرَأْتُهُ', 'the book that I read'], ['الْمَدِينَةُ الَّتِي وُلِدْتُ فِيهَا', 'the city in which I was born'], ['الْأَصْدِقَاءُ الَّذِينَ …', 'the friends who …'], ['الْمُعَلِّمَاتُ اللَّاتِي …', 'the teachers (f.) who …'], ['هُوَ الَّذِي …', 'he is the one who …']],
  },
  model: {
    text: 'الشَّخْصُ الَّذِي أُعْجِبُ بِهِ كَثِيرًا هُوَ جَدِّي. جَدِّي هُوَ الَّذِي عَلَّمَنِي الْقُرْآنَ، وَجَدَّتِي هِيَ الَّتِي تَحْكِي لَنَا الْقِصَصَ. أُحِبُّ الْبَيْتَ الَّذِي يَسْكُنَانِ فِيهِ، لِأَنَّ فِيهِ حَدِيقَةً كَبِيرَةً. أَبْنَاءُ عَمِّي الَّذِينَ يَزُورُونَهُمَا كُلَّ أُسْبُوعٍ أَصْدِقَائِي. وَالْكِتَابُ الَّذِي أَهْدَانِي جَدِّي هُوَ أَغْلَى كِتَابٍ عِنْدِي.',
    en: 'The person I admire most is my grandfather. My grandfather is the one who taught me the Qur’an, and my grandmother is the one who tells us stories. I love the house in which they live, because it has a big garden. My cousins, who visit them every week, are my friends. And the book that my grandfather gave me is the most precious book I have.',
    find: ['alladhī', 'allatī', 'alladhīna', 'points back'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'Each relative pronoun agrees with its antecedent.' },
    { route: 'core', text: 'I used relative pronouns after definite nouns.' },
    { route: 'develop', text: 'The verb inside each clause agrees.' },
    { route: 'develop', text: 'I used a plural relative pronoun.' },
    { route: 'stretch', text: 'I used a resumptive pronoun where needed.' },
  ],
  exit: [
    q('Choose “the man who came”.', ['الرَّجُلُ الَّذِي جَاءَ', 'الرَّجُلُ الَّتِي جَاءَ', 'الرَّجُلُ الَّذِينَ جَاءُوا'], 'Masculine singular → alladhī.'),
    q('Choose “the mothers who cooked”.', ['الْأُمَّهَاتُ اللَّاتِي طَبَخْنَ', 'الْأُمَّهَاتُ الَّذِينَ طَبَخُوا', 'الْأُمَّهَاتُ الَّذِي طَبَخَ'], 'Feminine human plural → allātī.'),
    q('Choose “the film that I watched”.', ['الْفِيلْمُ الَّذِي شَاهَدْتُهُ', 'الْفِيلْمُ الَّذِي شَاهَدْتُ هُوَ', 'الْفِيلْمُ الَّتِي شَاهَدْتُهَا'], 'Masculine + -hu points back.'),
  ],
  mastery: false,
  prep: {
    words: [['لِي', 'for me, I have', 'li + -ī'], ['لَكَ · لَكِ', 'for you (m. · f.)', '—'], ['لَهُ · لَهَا', 'for him · her', '—'], ['بِهِ', 'with it / him', 'bi + -hi'], ['مَعِي', 'with me', '—']],
    questionEn: 'You know li- (for) and bi- (with). What happens when an ending like -ī or -hu is added to them?',
    questionAr: 'لِي · لَكَ · لَكِ · ______',
    homework: {
      core: 'Write six sentences with alladhī and allatī.',
      develop: 'Join ten pairs of sentences with relative pronouns.',
      stretch: 'Website writing task: a person you admire.',
    },
    wordsSource: 'The five words prepare GM-PRO-06 (website Pronouns lesson 6: pronouns with li and bi).',
  },
  remember: 'Remember: antecedent → matching relative pronoun → agreeing verb · alladhī / allatī / alladhīna / allātī · plural things → allatī · point back with an ending · indefinite noun → no relative pronoun.',
});

module.exports = { meta, slides };
