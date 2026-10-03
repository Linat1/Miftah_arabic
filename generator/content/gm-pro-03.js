'use strict';
/* GM-PRO-03 · Object Pronoun Suffixes — website: Mastery & Revision › Grammar › Pronouns › Lesson 3 (object endings attach to the verb and
 * replace the name: عَلِيٌّ سَاعَدَهَا; subject vs object — in سَاعَدَتْنِي, ـتْ = she, ـنِي = me; the 12 endings ـنِي · ـنَا · ـكَ · ـكِ · ـكُمَا ·
 * ـكُمْ · ـكُنَّ · ـهُ · ـهَا · ـهُمَا · ـهُمْ · ـهُنَّ; “me” is ـنِي on verbs but ـِي on nouns; three patterns: رَأَيْتُهُ · قَابَلْتُهُمَا / قَابَلْتُهُنَّ ·
 * things قَرَأْتُهُ / قَرَأْتُهَا by grammatical gender; clinic). The website checks this chapter through interactive games and JS quizzes
 * that do not extract, so every question here is teacher-written on the website content. Reading text (helpful day) is the website’s. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-PRO-03', fileTitle: 'Object_Pronoun_Suffixes', title: 'Object Pronoun Suffixes', arabic: 'ضَمَائِرُ الْمَفْعُولِ بِهِ',
  focus: 'Instead of repeating a name, Arabic attaches the person RECEIVING the action to the verb: Ali helped her = ʿAliyyun sāʿadahā. One verb can show who did it AND who received it: sāʿadatnī = she helped me.',
  icon: 'FaHandshake',
});

const slides = G.gmLesson({
  code: 'GM-PRO-03', site: 'grammar__06-pronouns__grammar-mastery-03-object-pronouns',
  support: `• Core: who receives the action; the singular endings ـنِي · ـكَ · ـكِ · ـهُ · ـهَا · ـنَا on common verbs (سَاعَدَ · رَأَى · قَابَلَ). Develop: dual and plural objects (ـهُمَا · ـهُمْ · ـهُنَّ · ـكُمْ); objects that are things (قَرَأْتُهُ / قَرَأْتُهَا). Stretch: two pronoun signals in one word (سَاعَدَتْنِي); “me” = ـنِي on a verb vs ـِي on a noun.
• Link to GM-PRO-02: the same family as the possessive endings — except “me” (ـنِي) instead of “my” (ـِي).
• Teaching routine from the website game “The Kindness Chain — who helped whom?”: draw arrows from the doer to the receiver.`,
  teach: 'Subject vs object; the 12 endings; three patterns.',
  wedo: 'Who helped whom? Replace the name; repair.',
  next: { nextCode: 'GM-PRO-04', nextTitle: 'Demonstrative Pronouns', nextAr: 'أَسْمَاءُ الْإِشَارَةِ' },
  doNow: {
    questions: [
      q('Which ending means “my” on a noun?', ['-ī, as in “my book”', '-nā, as in “our book”', '-hu, as in “his book”'], 'Retrieval from GM-PRO-02.'),
      q('Choose “her bag”.', ['حَقِيبَتُهَا', 'حَقِيبَتُهُ', 'حَقِيبَتُكِ'], '-hā = her.'),
      q('Choose “their house” (two owners).', ['بَيْتُهُمَا', 'بَيْتُهُمْ', 'بَيْتُكُمَا'], '-humā = two owners.'),
      q('In “Ali helped Maryam”, who RECEIVES the help?', ['Maryam', 'Ali', 'both'], 'The receiver is the object.'),
      q('Which word replaces “Maryam” as “her”?', ['ـهَا', 'ـهُ', 'ـهُمْ'], 'Maryam is one female → -hā.'),
    ],
    keyIdea: { text: 'The object ending names the person who RECEIVES the action — and saves you repeating their name.', ar: 'عَلِيٌّ سَاعَدَ مَرْيَمَ ‖ عَلِيٌّ {e|سَاعَدَهَا}' },
    retrieves: 'Teacher-written retrieval of GM-PRO-02 (possessive endings) plus a first look at the receiver of an action.',
  },
  objectives: ['Tell the doer (subject) from the receiver (object).', 'Recognise the 12 object endings on verbs.', 'Use singular, dual and plural object endings.', 'Replace things with -hu or -hā by grammatical gender.'],
  routes: {
    core: ['I find who receives the action.', 'I say he helped me / I saw him / I saw her.'],
    develop: ['I use them two, them (m.) and them (f.).', 'I replace a book with -hu and a car with -hā.'],
    stretch: ['I read sāʿadatnī as “she helped me”.', 'I explain -nī (me) vs -ī (my).'],
  },
  terms: {
    items: [
      { ar: 'الْفَاعِلُ', en: 'subject (the doer)', note: 'عَلِيٌّ سَاعَدَ' },
      { ar: 'الْمَفْعُولُ بِهِ', en: 'object (the receiver)', note: 'سَاعَدَ مَرْيَمَ' },
      { ar: 'ضَمِيرُ الْمَفْعُولِ', en: 'object pronoun (ending)', note: 'سَاعَدَهَا' },
      { ar: 'ـنِي', en: 'me (on a verb)', tr: '-nī', note: 'سَاعَدَنِي' },
      { ar: 'سَاعَدَ', en: 'he helped', note: 'يُسَاعِدُ = helps' },
      { ar: 'مَنْ سَاعَدَ مَنْ؟', en: 'Who helped whom?', note: 'website game' },
    ],
  },
  explain: [
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 1 · subject or object? (website)', title: 'The doer and the receiver', ar: 'الْفَاعِلُ وَالْمَفْعُولُ بِهِ',
      points: [
        'The SUBJECT performs the action; the OBJECT receives it (website).',
        'Arabic attaches the object to the verb as a short ending, instead of repeating the name.',
        'So Ali helped Maryam becomes Ali helped her: sāʿadahā.',
        'One verb can carry two signals: in sāʿadatnī, -at = she (doer) and -nī = me (receiver).',
        'Check both: does the verb show the right doer, and the ending the right receiver?',
      ],
      examples: [
        { ar: 'عَلِيٌّ سَاعَدَ مَرْيَمَ.', en: 'Ali helped Maryam.', note: 'website · name' },
        { ar: 'عَلِيٌّ سَاعَدَهَا.', en: 'Ali helped her.', note: 'website · ending' },
        { ar: 'هِيَ سَاعَدَتْنِي.', en: 'She helped me.', note: 'website · two signals' },
        { ar: 'رَأَيْتُهُ.', en: 'I saw him.', note: 'website · -tu = I, -hu = him' },
      ],
      notes: 'PART 1 (3 min) — website “Why object pronouns matter” and “Subject or object?”. Draw an arrow from doer to receiver for every example.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 2 · the complete object-pronoun family (website table)', title: 'Twelve endings on the verb', ar: 'ضَمَائِرُ الْمَفْعُولِ', ltr: true,
      cols: [{ label: 'Meaning', w: 3.2 }, { label: 'Ending', w: 2.6, size: 24 }, { label: 'Example', w: 3.2, size: 24 }, { label: 'Meaning', w: 3.33 }],
      rows: [
        { core: true, cells: ['me · us', 'ـنِي · ـنَا', 'سَاعَدَنِي · سَاعَدَنَا', 'he helped me · us'] },
        { core: true, cells: ['you (m.) · you (f.)', 'ـكَ · ـكِ', 'سَاعَدَكَ · سَاعَدَكِ', 'he helped you'] },
        { core: true, cells: ['him · her', 'ـهُ · ـهَا', 'سَاعَدَهُ · سَاعَدَهَا', 'he helped him · her'] },
        { cells: ['you two · them two', 'ـكُمَا · ـهُمَا', 'سَاعَدَكُمَا · سَاعَدَهُمَا', 'he helped you / them (two)'] },
        { cells: ['you · them (m. / mixed)', 'ـكُمْ · ـهُمْ', 'سَاعَدَكُمْ · سَاعَدَهُمْ', 'he helped you / them'] },
        { cells: ['you · them (all female)', 'ـكُنَّ · ـهُنَّ', 'سَاعَدَكُنَّ · سَاعَدَهُنَّ', 'he helped you / them'] },
      ],
      foot: 'Website contrast: “my” on a noun is -ī (kitābī), but “me” on a verb is -nī (sāʿadanī). All the other endings match the possessive family.',
      notes: 'PART 2 (4 min) — website table “The complete object-pronoun family”. Compare with the GM-PRO-02 grid — only the first row is different.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · three patterns students must see (website) · Develop / Stretch', title: 'People, groups — and things', ar: 'ثَلَاثَةُ أَنْمَاطٍ', ltr: true,
      cols: [{ label: 'Pattern', w: 3.2 }, { label: 'Arabic (website)', w: 3.6, size: 24 }, { label: 'Meaning', w: 5.53 }],
      rows: [
        { core: true, cells: ['verb + object', 'رَأَيْتُهُ.', 'I saw him. (-tu = I, -hu = him)'] },
        { cells: ['dual object', 'قَابَلْتُهُمَا.', 'I met them two.'] },
        { cells: ['feminine plural object', 'قَابَلْتُهُنَّ.', 'I met them (females).'] },
        { core: true, cells: ['thing — masculine noun', 'قَرَأْتُهُ.', 'I read it (the book).'] },
        { core: true, cells: ['thing — feminine noun', 'قَرَأْتُهَا.', 'I read it (the story).'] },
      ],
      foot: 'Website: for things, use -hu or -hā according to the GRAMMATICAL gender of the noun replaced — book → -hu, story / car → -hā.',
      notes: 'PART 3 (3 min) — website “Three patterns students must see”. Hold up a book (kitāb → qaraʾtuhu) and a story / car (qiṣṣa → qaraʾtuhā).',
    },
  ],
  quick: [
    q('Choose “He helped me.”', ['سَاعَدَنِي.', 'سَاعَدِي.', 'سَاعَدْتُهُ.'], 'Verbal “me” is -nī.'),
    q('Choose “I saw her.”', ['رَأَيْتُهَا.', 'رَأَيْتُهُ.', 'رَأَتْنِي.'], '-tu = I; -hā = her.'),
    q('Choose “I met them” (two students).', ['قَابَلْتُهُمَا.', 'قَابَلْتُهُمْ.', 'قَابَلْتُهُنَّ.'], 'Exactly two → dual -humā.'),
    q('The car? “I washed it.”', ['غَسَلْتُهَا.', 'غَسَلْتُهُ.', 'غَسَلْتُهُمْ.'], 'Car is feminine → -hā.'),
  ],
  quickNote: 'teacher-written hinge questions on the website’s three parts.',
  ido: {
    title: 'Watch me replace the name',
    steps: [
      { head: 'Full sentence', ar: 'قَابَلْتُ صَدِيقَيْنِ', think: 'I met two friends.' },
      { head: 'Receiver?', ar: 'صَدِيقَيْنِ', think: 'Two → dual.' },
      { head: 'Ending', ar: 'ـهُمَا', think: 'them two.' },
      { head: 'New sentence', ar: 'وَسَأَلْتُهُمَا', think: 'and I asked them.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'VERB', e: 'OBJECT ENDING' },
    model: 'فِي الْأَمْسِ {k|سَاعَدَتْنِي} مُعَلِّمَتِي. قَابَلْتُ صَدِيقَيْنِ {e|وَسَأَلْتُهُمَا} عَنِ الْعَمَلِ، ثُمَّ رَأَيْتُ طَالِبَاتٍ {e|وَدَعَوْتُهُنَّ} إِلَى فَرِيقِنَا.',
    modelEn: 'Yesterday my teacher helped me. I met two friends and asked them about the work, then I saw some female students and invited them to our team.',
    notes: 'From the website reading text. For each verb: “Who did it? Who received it?” — then point to the two signals.',
  },
  models: [
    { ar: 'عَلِيٌّ سَاعَدَهَا.', en: 'Ali helped her.', tip: 'Website.' },
    { ar: 'هِيَ سَاعَدَتْنِي.', en: 'She helped me.', tip: 'Website: two signals.' },
    { ar: 'أَيْنَ كِتَابُكَ؟ — قَرَأْتُهُ أَمْسِ.', en: 'Where is your book? — I read it yesterday.', tip: 'Thing (m.) → -hu.' },
    { ar: 'أُحِبُّكُمْ فِي اللَّهِ.', en: 'I love you (all) for the sake of Allah.', tip: 'A common phrase: -kum.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · who receives the action?', title: 'One person, two, or a group?', ar: 'مَنْ يَسْتَقْبِلُ الْفِعْلَ؟',
      categories: ['One person', 'Exactly two', 'A group'],
      items: [['سَاعَدَنِي', 0], ['سَاعَدَهُمَا', 1], ['سَاعَدَهُمْ', 2], ['رَأَيْتُكِ', 0], ['رَأَيْتُكُمَا', 1], ['رَأَيْتُهُنَّ', 2], ['شَكَرْتُهُ', 0], ['شَكَرْنَاهُمْ', 2]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type 1, 2 or 3, then translate. Note shakarnāhum: -nā = we (doer) + -hum = them (receiver).',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'We do · replace the name · say it aloud', title: 'Name → ending', ar: 'ضَعِ الضَّمِيرَ', ltr: true, stage: 'wedo',
      cols: [{ label: 'With a name', w: 4.6, size: 22 }, { label: 'Receiver', w: 2.8 }, { label: 'With an ending', w: 4.93, size: 24 }],
      rows: [
        { core: true, cells: ['سَاعَدْتُ أُمِّي.', 'one female', 'سَاعَدْتُهَا.'] },
        { core: true, cells: ['رَأَيْتُ أَحْمَدَ.', 'one male', 'رَأَيْتُهُ.'] },
        { core: true, cells: ['قَرَأْتُ الْكِتَابَ.', 'thing (m.)', 'قَرَأْتُهُ.'] },
        { cells: ['زُرْتُ جَدَّيَّ.', 'two people', 'زُرْتُهُمَا.'] },
        { cells: ['شَكَرْتُ الْمُعَلِّمَاتِ.', 'female group', 'شَكَرْتُهُنَّ.'] },
      ],
      foot: 'Decide the receiver first (one / two / group; male / female; person / thing), then choose the ending.',
      notes: 'WE DO (2 min). Cover the right column; students say the short version.',
    },
  ],
  mistakes: [
    { wrong: 'سَاعَدَِي', right: 'سَاعَدَنِي', why: 'Verbal “me” uses -nī (website clinic).' },
    { wrong: 'مَرْيَمُ؟ رَأَيْتُهُ.', right: 'مَرْيَمُ؟ رَأَيْتُهَا.', why: 'Maryam is feminine → -hā (website).' },
    { wrong: 'هِيَ سَاعَدَهَا.', right: 'هِيَ سَاعَدَتْنِي.', why: 'For “she helped me”: verb shows she, ending shows me (website).' },
  ],
  hints: ['Which ending means me?', 'Is Maryam male?', 'Doer and receiver?'],
  practice: [
    q('Choose “We thanked them all” (a mixed group).', ['شَكَرْنَاهُمْ جَمِيعًا.', 'شَكَرْنَاهُنَّ جَمِيعًا.', 'شَكَرْتُهُمْ جَمِيعًا.'], '-nā = we; -hum = them (mixed).'),
    q('Choose “She helped us.”', ['سَاعَدَتْنَا.', 'سَاعَدَنَا.', 'سَاعَدْنَاهَا.'], '-at = she; -nā = us.'),
    q('Choose “I invited you” (one female).', ['دَعَوْتُكِ.', 'دَعَوْتُكَ.', 'دَعَوْتُهَا.'], '-ki = you (one female).'),
    q('The story? “I wrote it.”', ['كَتَبْتُهَا.', 'كَتَبْتُهُ.', 'كَتَبْتُهُمَا.'], 'Story is feminine → -hā.'),
  ],
  practiceLabel: 'teacher-written practice on the website content',
  read: {
    title: 'A helpful day', label: 'website reading text',
    text: 'فِي الْأَمْسِ سَاعَدَتْنِي مُعَلِّمَتِي فِي الْمَشْرُوعِ. بَعْدَ ذَلِكَ قَابَلْتُ صَدِيقَيْنِ وَسَأَلْتُهُمَا عَنِ الْعَمَلِ. رَأَيْتُ طَالِبَاتٍ فِي الْمَكْتَبَةِ وَدَعَوْتُهُنَّ إِلَى فَرِيقِنَا. فِي النِّهَايَةِ شَكَرْنَاهُمْ جَمِيعًا.',
    glossary: [['الْمَشْرُوعِ', 'the project'], ['قَابَلْتُ', 'I met'], ['سَأَلْتُ', 'I asked'], ['دَعَوْتُ', 'I invited'], ['فَرِيقِنَا', 'our team'], ['شَكَرْنَا', 'we thanked']],
    task: 'Website: track who receives each action — draw an arrow from each object ending to the person.',
    questions: [
      q('Who helped the writer?', ['the teacher (f.)', 'two friends', 'the students'], 'Sāʿadatnī muʿallimatī.'),
      q('Who does the ending in “asked them” refer to?', ['the two friends', 'the female students', 'the teacher'], '-humā = two.'),
      q('Who does -hunna refer to?', ['the female students', 'the two friends', 'the team'], 'Feminine plural.'),
      q('What does شَكَرْنَاهُمْ mean?', ['we thanked them', 'they thanked us', 'I thanked him'], '-nā = we; -hum = them.'),
    ],
    qNote: 'Website reading text; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: describe a helpful day', source: 'website speaking task',
    prompts: [
      { route: 'core', ar: 'مَنْ سَاعَدَكَ هَذَا الْأُسْبُوعَ؟' },
      { route: 'develop', ar: 'مَنْ قَابَلْتَ فِي الْمَدْرَسَةِ؟ مَاذَا سَأَلْتَهُمْ؟' },
      { route: 'stretch', ar: 'صِفْ مَشْرُوعًا: مَنْ سَاعَدَكَ وَمَنْ سَاعَدْتَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'سَاعَدَنِي ______ .' },
      { route: 'develop', ar: 'قَابَلْتُ ______ وَسَأَلْتُهُ / سَأَلْتُهَا ______ .' },
      { route: 'stretch', ar: 'فِي النِّهَايَةِ شَكَرْنَا ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَنْ سَاعَدَكِ فِي الْوَاجِبِ؟', en: 'Who helped you with the homework? (to a girl)' },
      { who: 'B', ar: 'سَاعَدَنِي أَخِي، وَبَعْدَ ذَلِكَ سَاعَدْتُهُ فِي الرِّيَاضِيَّاتِ. شَكَرْتُهُ كَثِيرًا!', en: 'My brother helped me, and after that I helped him with maths. I thanked him a lot!' },
    ],
    notes: 'Website stems. Final performance: include “me” or “us”, one singular, one dual and one plural object, and one verb that shows both subject and object.',
  },
  write: {
    siteTask: 'Write 7–9 sentences about a school event or helpful experience, with at least five different object endings, underlined.',
    core: { amount: '6 sentences', task: 'Who helped you, and whom did you help?', how: 'sāʿadanī · sāʿadtuhu · sāʿadtuhā.' },
    develop: { amount: '8 sentences', task: 'Add dual and plural objects.', how: '-humā · -hum · -hunna.' },
    stretch: { amount: '7–9 sentences', task: 'Website writing task with five different endings.', how: 'Include a thing (-hu / -hā) and a two-signal verb.' },
  },
  frames: {
    core: [
      { en: '… helped me.', ar: 'سَاعَدَنِي ______ .' },
      { en: 'I helped him / her.', ar: '______ فِي الْوَاجِبِ.' },
      { en: 'I saw my friend and thanked him.', ar: 'رَأَيْتُ صَدِيقِي وَ______ .' },
      { en: 'Where is the book? I read it.', ar: 'أَيْنَ الْكِتَابُ؟ ______ .' },
    ],
    develop: [
      { en: 'I met two friends and asked them …', ar: 'قَابَلْتُ صَدِيقَيْنِ وَ______ .' },
      { en: 'We invited them (girls).', ar: '______ إِلَى الْحَفْلَةِ.' },
      { en: 'The teacher thanked us.', ar: 'الْمُعَلِّمُ ______ .' },
      { en: 'She helped me.', ar: 'هِيَ ______ .' },
    ],
    bank: ['سَاعَدَنِي', 'سَاعَدْتُهُ', 'سَاعَدْتُهَا', 'رَأَيْتُهُ', 'شَكَرْتُهُ', 'سَأَلْتُهُمَا', 'دَعَوْنَاهُنَّ', 'شَكَرَنَا', 'سَاعَدَتْنِي', 'قَرَأْتُهُ', 'قَرَأْتُهَا'],
  },
  stretchTask: {
    task: 'Website writing task: 7–9 sentences about a school event or helpful experience, with at least five different object endings.',
    checklist: ['One form meaning me or us.', 'One singular object (him / her / you).', 'One dual object (-humā or -kumā).', 'One plural object (-hum or -hunna).', 'One verb showing both doer and receiver (e.g. sāʿadatnī).'],
    phrases: [['سَاعَدَتْنِي', 'she helped me'], ['قَابَلْتُهُمَا', 'I met them two'], ['دَعَوْتُهُنَّ', 'I invited them (f.)'], ['شَكَرْنَاهُمْ', 'we thanked them'], ['زُرْنَاهُ', 'we visited him'], ['أَعْطَانِي', 'he gave me']],
  },
  model: {
    text: 'فِي الْأُسْبُوعِ الْمَاضِي نَظَّمْنَا يَوْمًا خَيْرِيًّا فِي الْمَدْرَسَةِ. سَاعَدَتْنِي أُمِّي فِي صُنْعِ الْكَعْكِ، وَحَمَلْتُهُ إِلَى الْمَدْرَسَةِ. قَابَلْتُ مُعَلِّمَيْنِ عِنْدَ الْبَابِ وَسَأَلْتُهُمَا عَنِ الطَّاوِلَاتِ. رَأَيْتُ صَدِيقَاتِي فِي السَّاحَةِ وَدَعَوْتُهُنَّ إِلَى الْمُسَاعَدَةِ. بِعْنَا الْكَعْكَ كُلَّهُ، وَفِي النِّهَايَةِ شَكَرَنَا الْمُدِيرُ، وَشَكَرْنَاهُ أَيْضًا.',
    en: 'Last week we organised a charity day at school. My mother helped me make cakes, and I carried them to school. I met two teachers at the door and asked them about the tables. I saw my friends in the playground and invited them to help. We sold all the cakes, and at the end the headteacher thanked us, and we thanked him too.',
    find: ['me / us', 'him / it', 'them two', 'them (f.)'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'Each ending refers to a person or thing already mentioned.' },
    { route: 'core', text: 'I used -nī for “me” on a verb.' },
    { route: 'develop', text: 'I distinguished dual, masculine and feminine plural.' },
    { route: 'develop', text: 'Things take -hu or -hā by grammatical gender.' },
    { route: 'stretch', text: 'The verb still shows the subject correctly.' },
  ],
  exit: [
    q('Choose “They helped me.”', ['سَاعَدُونِي.', 'سَاعَدَنِي.', 'سَاعَدْتُهُمْ.'], 'They (doer) + -nī (me).'),
    q('Choose “I saw them” (all female).', ['رَأَيْتُهُنَّ.', 'رَأَيْتُهُمْ.', 'رَأَيْتُهُمَا.'], 'Female group → -hunna.'),
    q('Which shows “my” and not “me”?', ['كِتَابِي', 'سَاعَدَنِي', 'رَأَتْنِي'], 'Nouns take -ī; verbs take -nī.'),
  ],
  mastery: false,
  prep: {
    words: [['هَذَا · هَذِهِ', 'this (m. · f.)', '—'], ['ذَلِكَ · تِلْكَ', 'that (m. · f.)', '—'], ['هَؤُلَاءِ', 'these (people)', '—'], ['هَذَانِ · هَاتَانِ', 'these two (m. · f.)', '—'], ['هُنَا · هُنَاكَ', 'here · there', '—']],
    questionEn: 'In GM-ADJ-07 you used this / that before nouns. Can hādhā stand alone as a pronoun? Try: “This is mine.”',
    questionAr: 'هَذَا كِتَابِي · ______ لِي',
    homework: {
      core: 'Write six sentences with -nī, -hu and -hā.',
      develop: 'Rewrite a paragraph replacing repeated names with endings.',
      stretch: 'Website writing task: a helpful experience.',
    },
    wordsSource: 'The five words prepare GM-PRO-04 (website Pronouns lesson 4: demonstrative pronouns).',
  },
  remember: 'Remember: the object ending = the receiver · “me” on a verb is -nī · two → -humā, group → -hum / -hunna · things take -hu or -hā by grammatical gender · check doer AND receiver.',
});

module.exports = { meta, slides };
