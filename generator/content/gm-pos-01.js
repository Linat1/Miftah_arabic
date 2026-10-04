'use strict';
/* GM-POS-01 · Possessive Endings — website: Mastery & Revision › Grammar › Possessives › Lesson 1 (the complete possessive-suffix
 * family -ī … -hunna — the ending shows the OWNER, not the object; case vowel before the suffix: kitābuhu / kitābahu / kitābihi;
 * never al- + suffix; tāʾ marbūṭa opens to t; dual and sound masculine plural lose their nūn: kitābāhu, muʿallimūhum; sound
 * feminine plurals keep -āt: sayyārātuhunna / sayyārātihinna; possession makes the noun definite: kitābuhu l-jadīdu vs kitābuhu
 * jadīdun; clinic). Quizzes are the website’s (Possession Starter, Mini-checks: match the owner, open the tāʾ, remove the nūn,
 * retain -āt, Possessive Endings Mastery). Colour code: orange = noun + owner ending. I-do, owner grid, sorter, reading, frames and
 * the extended model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__13-possessives__grammar-mastery-01-possessive-endings';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-POS-01', fileTitle: 'Possessive_Endings', title: 'Possessive Endings', arabic: 'ضَمَائِرُ الْمِلْكِيَّةِ الْمُتَّصِلَةُ',
  focus: 'One word shows the thing and its owner: kitābī (my book), madrasatuhā (her school), baytunā (our house). The ending shows the OWNER. Tāʾ marbūṭa opens to t, and the noun never takes al- as well.',
  icon: 'FaKey',
});

const slides = G.gmLesson({
  code: 'GM-POS-01', site: KEY,
  support: `• Core: the singular owners -ī, -ka, -ki, -hu, -hā, -nā on regular and tāʾ marbūṭa nouns (madrasatī, ḥaqībatuki). Develop: the dual and plural owners (-kumā, -kum, -kunna, -humā, -hum, -hunna), the case vowel before the suffix (kitābuhu / kitābahu / kitābihi) and kitābuhu l-jadīdu vs kitābuhu jadīdun. Stretch: nūn deletion (kitābāhu, muʿallimūhum) and sound feminine plurals (sayyārātihinna).
• Website warning: do not confuse owner and object — sayyāratuhu = HIS car (the car is feminine, the owner is masculine).
• Colour code: orange = noun + owner ending. Recycles GM-PRO attached pronouns and GM-CASE-01 to 03 (the case vowel stays before the suffix).`,
  teach: 'Owners (singular); owners (plural); tāʾ marbūṭa; case and definiteness; nūn and -āt.',
  wedo: 'Whose is it?; one owner or more?; repair.',
  next: { nextCode: 'GM-POS-02', nextTitle: 'Possessive Iḍāfa Construction', nextAr: 'تَرْكِيبُ الْإِضَافَةِ لِلْمِلْكِيَّةِ وَالِارْتِبَاطِ' },
  doNow: {
    questions: [
      W(/Possession Starter/, 0, { feedback: '-ī = my.' }),
      W(/Possession Starter/, 1, { feedback: 'One girl: -ki.' }),
      W(/Possession Starter/, 2, { feedback: 'Madrasa → madrasatī.' }),
      W(/Possession Starter/, 3, { feedback: '-nā = our.' }),
      W(/Possession Starter/, 5, { prompt: 'Can a noun with a possessive ending also take al-?', feedback: 'No: the ending already makes it definite.' }),
    ],
    keyIdea: { text: 'Noun + owner ending = one word. The ending shows the owner; tāʾ marbūṭa opens to t; no al-.', ar: '{p|كِتَابِي} ‖ {p|مَدْرَسَتُهَا} ‖ {p|بَيْتُنَا}' },
    retrieves: 'The website Possession Starter — GM-PRO subject pronouns and attached endings.',
  },
  objectives: ['Match each ending to its owner.', 'Open tāʾ marbūṭa before an ending.', 'Keep the case vowel before the ending.', 'Tell “his new book” from “his book is new”.'],
  routes: {
    core: ['I use -ī, -ka, -ki, -hu, -hā, -nā.', 'I open the tāʾ marbūṭa: madrasatī.'],
    develop: ['I use -kum, -hum, -humā, -hunna.', 'I write qaraʾtu kitābahu (-a).'],
    stretch: ['I drop the nūn: kitābāhu, muʿallimūhum.', 'I write a 100–120-word belongings profile.'],
  },
  terms: {
    items: [
      { ar: 'ضَمِيرُ الْمِلْكِيَّةِ', en: 'possessive ending', note: 'ـِي · ـهُ · ـهَا' },
      { ar: 'الْمَالِكُ', en: 'the owner', note: 'كِتَابُهَا = her book' },
      { ar: 'التَّاءُ الْمَرْبُوطَةُ', en: 'tāʾ marbūṭa — opens to t', note: 'مَدْرَسَةٌ · مَدْرَسَتِي' },
      { ar: 'الْمَعْرِفَةُ', en: 'definite (the ending makes it so)', note: 'كِتَابُهُ الْجَدِيدُ' },
      { ar: 'حَذْفُ النُّونِ', en: 'dropping the nūn', note: 'كِتَابَاهُ · مُعَلِّمُوهُمْ' },
      { ar: 'جَمْعُ الْمُؤَنَّثِ السَّالِمُ', en: 'sound feminine plural (-āt)', note: 'سَيَّارَاتُهُنَّ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · the suffix family: one owner (website table)', title: 'My, your, his, her, our', ar: 'ضَمَائِرُ الْمِلْكِيَّةِ', ltr: true,
      cols: [{ label: 'Owner', w: 3.0 }, { label: 'Pronoun', w: 2.4, size: 24 }, { label: 'Ending', w: 2.4, size: 24 }, { label: 'With kitāb', w: 4.53, size: 26 }],
      rows: [
        { core: true, cells: ['my', 'أَنَا', 'ـِي', 'كِتَابِي'] },
        { core: true, cells: ['your (one male)', 'أَنْتَ', 'ـكَ', 'كِتَابُكَ'] },
        { core: true, cells: ['your (one female)', 'أَنْتِ', 'ـكِ', 'كِتَابُكِ'] },
        { core: true, cells: ['his / its (m.)', 'هُوَ', 'ـهُ', 'كِتَابُهُ'] },
        { core: true, cells: ['her / its (f.)', 'هِيَ', 'ـهَا', 'كِتَابُهَا'] },
        { core: true, cells: ['our', 'نَحْنُ', 'ـنَا', 'كِتَابُنَا'] },
      ],
      foot: 'Website: the ending identifies the OWNER, not the object. Sayyāratuhu = his car (the car is feminine; the owner is male). Kitābuhā = her book (the book is masculine; the owner is female).',
      notes: 'PART 1 (3 min) — website “The complete possessive-suffix family” (singular owners + our). Hold up objects and say whose they are.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 2 · the suffix family: two or more owners (website table) · Develop', title: 'Your (all of you) and their', ar: 'الْمُثَنَّى وَالْجَمْعُ', ltr: true,
      cols: [{ label: 'Owner', w: 3.4 }, { label: 'Pronoun', w: 2.4, size: 24 }, { label: 'Ending', w: 2.4, size: 24 }, { label: 'With kitāb', w: 4.13, size: 26 }],
      rows: [
        { cells: ['your (two)', 'أَنْتُمَا', 'ـكُمَا', 'كِتَابُكُمَا'] },
        { core: true, cells: ['your (group m. / mixed)', 'أَنْتُمْ', 'ـكُمْ', 'كِتَابُكُمْ'] },
        { cells: ['your (group f.)', 'أَنْتُنَّ', 'ـكُنَّ', 'كِتَابُكُنَّ'] },
        { cells: ['their (two)', 'هُمَا', 'ـهُمَا', 'كِتَابُهُمَا'] },
        { core: true, cells: ['their (m. / mixed)', 'هُمْ', 'ـهُمْ', 'كِتَابُهُمْ'] },
        { cells: ['their (f.)', 'هُنَّ', 'ـهُنَّ', 'كِتَابُهُنَّ'] },
      ],
      foot: 'After i or y, -hu / -hum / -hunna become -hi / -him / -hinna: fī kitābihi, fī baytihim. The meaning does not change.',
      notes: 'PART 2 (2 min) — website suffix table (dual and plural owners). Core learners need -kum and -hum only.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 3 · tāʾ marbūṭa opens before a suffix (website models)', title: 'Tāʾ marbūṭa opens to t', ar: 'التَّاءُ الْمَرْبُوطَةُ تُفْتَحُ', ltr: true,
      cols: [{ label: 'Noun', w: 3.2, size: 26 }, { label: 'With owner', w: 4.6, size: 24 }, { label: 'Meaning', w: 4.53 }],
      rows: [
        { core: true, cells: ['مَدْرَسَةٌ', 'مَدْرَسَتِي', 'my school'] },
        { core: true, cells: ['حَقِيبَةٌ', 'حَقِيبَتُكَ', 'your bag (m.)'] },
        { core: true, cells: ['عَائِلَةٌ', 'زُرْتُ عَائِلَتَهَا.', 'I visited her family.'] },
        { cells: ['غُرْفَةٌ', 'فِي غُرْفَتِنَا', 'in our room'] },
        { cells: ['سَيَّارَةٌ', 'سَيَّارَتُهُمْ', 'their car'] },
      ],
      foot: 'Website three-step method: (1) remove the tanwīn, (2) change the tāʾ marbūṭa to t, (3) attach the owner ending. Never keep the closed tāʾ marbūṭa in front of an ending.',
      notes: 'PART 3 (2 min) — website “Tāʾ marbūṭa opens before a suffix”. Model the three steps on the board with ghurfa.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 4 · case and definiteness (website tables) · Develop', title: 'The case vowel stays — and the noun is definite', ar: 'الْإِعْرَابُ وَالتَّعْرِيفُ', ltr: true,
      cols: [{ label: 'Meaning', w: 3.4 }, { label: 'Arabic', w: 5.0, size: 22 }, { label: 'Decision', w: 3.93 }],
      rows: [
        { core: true, cells: ['His book is new.', 'كِتَابُهُ جَدِيدٌ.', 'subject: -u + hu'] },
        { core: true, cells: ['I read his book.', 'قَرَأْتُ كِتَابَهُ.', 'object: -a + hu'] },
        { core: true, cells: ['I looked at his book.', 'نَظَرْتُ إِلَى كِتَابِهِ.', 'after ilā: -i + hi'] },
        { cells: ['his new book', 'كِتَابُهُ الْجَدِيدُ', 'adjective takes al-'] },
        { cells: ['I read his new book.', 'قَرَأْتُ كِتَابَهُ الْجَدِيدَ.', 'both -a'] },
        { cells: ['in his new book', 'فِي كِتَابِهِ الْجَدِيدِ', 'both -i'] },
      ],
      foot: 'Website warning: never add al- to the same noun — kitābuhu, never al-kitābuhu. The ending makes the noun definite, so an adjective describing it takes al-: kitābuhu l-jadīdu (phrase) vs kitābuhu jadīdun (sentence).',
      notes: 'PART 4 (3 min) — website “Regular nouns and case before the suffix” + “Possession makes the noun definite”. In unvowelled writing the forms look identical — the sentence role decides.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 5 · duals, sound plurals and -āt (website tables) · Stretch', title: 'Drop the nūn — keep the -āt', ar: 'حَذْفُ النُّونِ', ltr: true,
      cols: [{ label: 'Base form', w: 3.0, size: 24 }, { label: 'With owner', w: 3.6, size: 24 }, { label: 'What changed', w: 5.73 }],
      rows: [
        { cells: ['كِتَابَانِ', 'كِتَابَاهُ', 'nominative dual: -āni → -ā + hu'] },
        { cells: ['كِتَابَيْنِ', 'كِتَابَيْهِ', 'acc. / gen. dual: -ayni → -ay + hi'] },
        { cells: ['مُعَلِّمُونَ', 'مُعَلِّمُوهُمْ', 'nominative plural: -ūna → -ū + hum'] },
        { cells: ['مُعَلِّمِينَ', 'مُعَلِّمِيهِمْ', 'acc. / gen. plural: -īna → -ī + him'] },
        { cells: ['سَيَّارَاتٌ', 'سَيَّارَاتُهُنَّ', 'nominative: -ātu + hunna'] },
        { cells: ['سَيَّارَاتٍ', 'سَيَّارَاتِهِنَّ', 'acc. AND gen.: -āti + hinna'] },
      ],
      foot: 'Website why: an attached pronoun puts the noun in a construct (iḍāfa) relationship, and dual / sound masculine plural construct forms drop their nūn. Sound feminine plurals keep -āt; the vowel before the ending shows the case.',
      notes: 'PART 5 (2 min) — website “Dual and sound masculine plural: delete the nūn” + “Sound feminine plurals keep -āt”.',
    },
  ],
  quick: [
    W(/match the owner/, 0, { feedback: 'One male: -ka.' }),
    W(/match the owner/, 1, { feedback: 'Two people: -kumā.' }),
    W(/match the owner/, 2, { feedback: '-hā = her.' }),
    W(/match the owner/, 3, { prompt: 'Choose “their book” for female owners.', feedback: 'Female group: -hunna.' }),
  ],
  quickNote: 'website mini-check: match the owner.',
  ido: {
    title: 'Watch me track who owns what',
    steps: [
      { head: 'Owner', ar: 'لَيْلَى', think: 'Whose friend? -hā.' },
      { head: 'Open the tāʾ', ar: 'صَدِيقَتَهَا', think: 'ṣadīqa → ṣadīqatahā.' },
      { head: 'Two owners', ar: 'مَدْرَسَتِهِمَا', think: 'Both girls: -humā.' },
      { head: 'No al-', ar: 'حَقِيبَتَهَا', think: 'Ending = definite.' },
    ],
    legend: ['p'], legendLabels: { p: 'NOUN + OWNER' },
    model: 'زَارَتْ لَيْلَى {p|صَدِيقَتَهَا} سَلْمَى. {p|بَيْتُهَا} قَرِيبٌ مِنْ {p|مَدْرَسَتِهِمَا}. {p|غُرْفَتُهَا} مُرَتَّبَةٌ. وَضَعَتْ لَيْلَى {p|حَقِيبَتَهَا} بِجَانِبِ كُتُبِ سَلْمَى. قَالَتْ سَلْمَى: «هَذِهِ {p|كُتُبِي} الْجَدِيدَةُ».',
    modelEn: 'Laylā visited her friend Salmā. Her house is near their school. Her room is tidy. Laylā put her bag next to Salmā’s books. Salmā said: “These are my new books.”',
    notes: 'Website reading-and-reference lines, extended. Website question: why does madrasatihimā refer to two people?',
  },
  models: [
    { ar: 'هَذَا كِتَابِي.', en: 'This is my book.', tip: 'my: -ī.' },
    { ar: 'أَيْنَ حَقِيبَتُكِ؟', en: 'Where is your bag? (to a girl)', tip: 'Tāʾ marbūṭa opens: -atu-.' },
    { ar: 'مَدْرَسَتُهُمْ كَبِيرَةٌ.', en: 'Their school is big.', tip: 'their: -hum.' },
    { ar: 'قَرَأْتُ كِتَابَهُ الْجَدِيدَ.', en: 'I read his new book.', tip: 'Object -a; adjective al-.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · whose is it? (website speaking task)', title: 'My, her, our, their', ar: 'لِمَنْ هَذَا؟', ltr: true, stage: 'wedo',
      cols: [{ label: 'Noun', w: 2.33, size: 24 }, { label: 'my', w: 2.5, size: 24 }, { label: 'her', w: 2.5, size: 24 }, { label: 'our', w: 2.5, size: 24 }, { label: 'their (m.)', w: 2.5, size: 24 }],
      rows: [
        { core: true, cells: ['كِتَابٌ', 'كِتَابِي', 'كِتَابُهَا', 'كِتَابُنَا', 'كِتَابُهُمْ'] },
        { core: true, cells: ['بَيْتٌ', 'بَيْتِي', 'بَيْتُهَا', 'بَيْتُنَا', 'بَيْتُهُمْ'] },
        { core: true, cells: ['مَدْرَسَةٌ', 'مَدْرَسَتِي', 'مَدْرَسَتُهَا', 'مَدْرَسَتُنَا', 'مَدْرَسَتُهُمْ'] },
        { cells: ['سَيَّارَةٌ', 'سَيَّارَتِي', 'سَيَّارَتُهَا', 'سَيَّارَتُنَا', 'سَيَّارَتُهُمْ'] },
        { cells: ['غُرْفَةٌ', 'غُرْفَتِي', 'غُرْفَتُهَا', 'غُرْفَتُنَا', 'غُرْفَتُهُمْ'] },
        { cells: ['حَقِيبَةٌ', 'حَقِيبَتِي', 'حَقِيبَتُهَا', 'حَقِيبَتُنَا', 'حَقِيبَتُهُمْ'] },
      ],
      foot: 'Rows 3–6: remember to open the tāʾ marbūṭa to t before every ending.',
      notes: 'WE DO (3 min) — cover columns 2–5 and build them together. Then point to real objects: kitābī, ḥaqībatuhā …',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · read the OWNER, not the object', title: 'One owner or more?', ar: 'مَالِكٌ وَاحِدٌ أَمْ أَكْثَرُ؟',
      categories: ['One owner', 'Two or more owners'],
      items: [['كِتَابِي', 0], ['حَقِيبَتُكِ', 0], ['كُتُبُهُ', 0], ['سَيَّارَتُهَا', 0], ['كِتَابُنَا', 1], ['مَدْرَسَتُهُمْ', 1], ['غُرْفَتُهُمَا', 1], ['بَيْتُكُمْ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Trap card: kutubuhu — many books but ONE owner (his). The ending decides.',
    },
  ],
  mistakes: [
    { wrong: 'هَذِهِ مَدْرَسَةِي.', right: 'هَذِهِ مَدْرَسَتِي.', why: 'Open the tāʾ marbūṭa to t (website clinic).' },
    { wrong: 'هَذَا الْكِتَابُهُ.', right: 'هَذَا كِتَابُهُ.', why: 'No al- with a possessive ending (website clinic).' },
    { wrong: 'قَرَأْتُ كِتَابُهُ.', right: 'قَرَأْتُ كِتَابَهُ.', why: 'The object takes -a before the ending (website clinic).' },
  ],
  hints: ['What happens to the tāʾ marbūṭa?', 'Can it have al- AND an ending?', 'Is the book the doer or the object?'],
  practice: [
    W(/open the tāʾ/, 0, { feedback: 'Open the tāʾ; no al-.' }),
    W(/open the tāʾ/, 1, { prompt: 'Choose “his room” (as a subject).', feedback: 'Ghurfatu + hu.' }),
    W(/open the tāʾ/, 2, { prompt: 'Choose “I visited her school.”', feedback: 'Object: madrasatahā.' }),
    W(/open the tāʾ/, 3, { prompt: 'Choose “in their house”.', feedback: 'After fī: baytihim.' }),
  ],
  practiceLabel: 'website mini-check: open the tāʾ',
  read: {
    title: 'Hudā’s family', label: 'website belongings profile (teacher-written)',
    text: 'اِسْمِي هُدَى، وَهَذِهِ عَائِلَتِي. أَبِي طَبِيبٌ، وَعِيَادَتُهُ قَرِيبَةٌ مِنْ بَيْتِنَا. أُمِّي مُعَلِّمَةٌ، وَطَالِبَاتُهَا مُجْتَهِدَاتٌ. لِي أَخَوَانِ تَوْأَمَانِ، وَغُرْفَتُهُمَا بِجَانِبِ غُرْفَتِي؛ غُرْفَتُهُمَا مَلِيئَةٌ بِالْكُتُبِ وَالْأَلْعَابِ. جَدَّتِي تَسْكُنُ مَعَنَا، وَحَدِيقَتُهَا أَجْمَلُ مَكَانٍ فِي الْبَيْتِ. سَيَّارَتُنَا قَدِيمَةٌ، لَكِنَّ أَبِي يُحِبُّهَا. مَا اسْمُكَ؟ وَكَيْفَ عَائِلَتُكَ؟',
    glossary: [['عِيَادَتُهُ', 'his clinic'], ['طَالِبَاتُهَا', 'her students (f.)'], ['تَوْأَمَانِ', 'twins'], ['مَلِيئَةٌ', 'full'], ['حَدِيقَتُهَا', 'her garden']],
    task: 'Website: for each ending, name the owner. Explain why ghurfatuhumā refers to two people.',
    questions: [
      q('Where is the father’s clinic?', ['near our house', 'in the city centre', 'next to the school'], 'ʿIyādatuhu qarībatun min baytinā.'),
      q('Whose room is next to Hudā’s?', ['her two brothers’', 'her grandmother’s', 'her mother’s'], 'Ghurfatuhumā: -humā = their (two).'),
      q('What does -hā in ṭālibātuhā refer to?', ['the mother', 'Hudā', 'the grandmother'], 'The mother’s students.'),
      q('Whose garden is the most beautiful place?', ['the grandmother’s', 'the mother’s', 'the twins’'], 'Ḥadīqatuhā — jaddatī.'),
    ],
    qNote: 'Teacher-written profile for the website reading-and-reference task; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: whose is it?', source: 'website speaking task',
    prompts: [
      { route: 'core', ar: 'مَا هَذَا؟ لِمَنْ هَذَا؟' },
      { route: 'develop', ar: 'صِفْ أَغْرَاضَ صَدِيقِكَ.' },
      { route: 'stretch', ar: 'صِفْ بَيْتَ عَائِلَتِكَ وَأَغْرَاضَكُمْ.' },
    ],
    stems: [
      { route: 'core', ar: 'هَذَا كِتَابِي، وَهَذِهِ ______ .' },
      { route: 'develop', ar: 'حَقِيبَتُهُ ______ ، وَكُتُبُهُ ______ .' },
      { route: 'stretch', ar: 'بَيْتُنَا ______ ، وَغُرْفَتِي ______ ، وَسَيَّارَتُنَا ______ .' },
    ],
    model: [
      { who: 'A', ar: 'هَلْ هَذِهِ حَقِيبَتُكِ؟', en: 'Is this your bag? (to a girl)' },
      { who: 'B', ar: 'لَا، لَيْسَتْ حَقِيبَتِي؛ هَذِهِ حَقِيبَةُ أُخْتِي. حَقِيبَتِي زَرْقَاءُ، وَكُتُبِي فِيهَا.', en: 'No, it is not my bag; this is my sister’s bag. My bag is blue, and my books are in it.' },
    ],
    notes: 'Website: describe six objects, changing the owner each time (mine, yours, hers, ours, theirs); include one dual and one sound feminine plural.',
  },
  write: {
    siteTask: 'Write 100–120 Arabic words describing a family, group of friends, classroom or fictional household and their belongings.',
    core: { amount: '5 sentences', task: 'Your family: who they are and one thing each owns.', how: 'abī … · sayyāratuhu … · ummī …' },
    develop: { amount: '8 sentences', task: 'Add plural owners and two adjective contrasts.', how: 'baytunā l-jadīdu · baytunā jadīdun.' },
    stretch: { amount: '100–120 words', task: 'Website belongings profile with the full checklist.', how: 'Make an owner key first.' },
  },
  frames: {
    core: [
      { en: 'My name is …', ar: 'اِسْمِي ______ .' },
      { en: 'My school is …', ar: 'مَدْرَسَتِي ______ .' },
      { en: 'His room is …', ar: 'غُرْفَتُهُ ______ .' },
      { en: 'Our house is in …', ar: 'بَيْتُنَا فِي ______ .' },
    ],
    develop: [
      { en: 'Her bag is …', ar: 'حَقِيبَتُهَا ______ .' },
      { en: 'Their teacher is …', ar: 'مُعَلِّمُهُمْ ______ .' },
      { en: 'I put my books in …', ar: 'وَضَعْتُ كُتُبِي فِي ______ .' },
      { en: 'Your (f.) family is …', ar: 'عَائِلَتُكِ ______ .' },
    ],
    bank: ['كِتَابِي', 'بَيْتُنَا', 'غُرْفَتِي', 'سَيَّارَتُهُ', 'حَقِيبَتُهَا', 'مُعَلِّمُهُمْ', 'عَائِلَتُكِ', 'كَبِيرٌ', 'جَدِيدَةٌ', 'قَدِيمَةٌ', 'مُرَتَّبَةٌ', 'جَمِيلٌ', 'قَرِيبٌ'],
  },
  stretchTask: {
    task: 'Website belongings and relationships profile (100–120 words).',
    checklist: ['At least eight different possessive endings.', 'Three tāʾ marbūṭa nouns with endings.', 'One dual possessed form (nūn dropped).', 'One sound plural possessed form.', 'Two adjective contrasts (his new book / his book is new).'],
    phrases: [['هَذِهِ عَائِلَتِي', 'this is my family'], ['أَبِي', 'my father'], ['أُمِّي', 'my mother'], ['أَخَوَايَ', 'my two brothers'], ['جَارُنَا', 'our neighbour'], ['مَا رَأْيُكُمْ؟', 'what do you (all) think?']],
  },
  model: {
    text: 'فِي بَيْتِنَا خَمْسَةُ أَشْخَاصٍ. أَبِي مُهَنْدِسٌ، وَمَكْتَبُهُ فِي وَسَطِ الْمَدِينَةِ. أُمِّي خَيَّاطَةٌ، وَآلَةُ خِيَاطَتِهَا فِي غُرْفَةِ الْجُلُوسِ. أُخْتِي الْكَبِيرَةُ طَالِبَةٌ فِي الْجَامِعَةِ، وَكُتُبُهَا فِي كُلِّ مَكَانٍ! أَخَوَايَ الصَّغِيرَانِ يَلْعَبَانِ كُرَةَ الْقَدَمِ، وَكُرَتُهُمَا دَائِمًا فِي الْحَدِيقَةِ. أَمَّا أَنَا فَغُرْفَتِي صَغِيرَةٌ، لَكِنَّ نَافِذَتَهَا كَبِيرَةٌ. مَكْتَبِي بِجَانِبِ النَّافِذَةِ، وَعَلَيْهِ حَاسُوبِي وَدَفَاتِرِي. سَيَّارَتُنَا الْقَدِيمَةُ بَيْضَاءُ، وَجَارُنَا يُصْلِحُهَا لَنَا أَحْيَانًا. عَائِلَتُنَا صَغِيرَةٌ، لَكِنَّ قُلُوبَنَا كَبِيرَةٌ. مَا رَأْيُكُمْ فِي عَائِلَتِي؟',
    en: 'There are five people in our house. My father is an engineer, and his office is in the city centre. My mother is a dressmaker, and her sewing machine is in the living room. My older sister is a university student, and her books are everywhere! My two little brothers play football, and their ball is always in the garden. As for me, my room is small, but its window is big. My desk is next to the window, and on it are my computer and my exercise books. Our old car is white, and our neighbour sometimes repairs it for us. Our family is small, but our hearts are big. What do you think of my family?',
    find: ['-ī (my)', '-hā on a tāʾ marbūṭa noun', '-humā (their two)', 'possessed noun + al- adjective'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'Each ending matches the owner.' },
    { route: 'core', text: 'I opened every tāʾ marbūṭa before an ending.' },
    { route: 'develop', text: 'No noun has al- AND an ending.' },
    { route: 'develop', text: 'Objects: -a before the ending; after prepositions: -i.' },
    { route: 'stretch', text: 'I dropped the nūn: kitābāhu, muʿallimūhum.' },
  ],
  exit: [
    W(/Possessive Endings Mastery/, 1, { prompt: 'Choose “our house is new”.', feedback: 'Predicate: indefinite jadīdun.' }),
    W(/Possessive Endings Mastery/, 2, { prompt: 'Choose “your two bags” (to one female, as a subject).', feedback: 'Nūn dropped: ḥaqībatāki.' }),
    W(/Possessive Endings Mastery/, 7, { prompt: 'Choose “I looked at his book.”', feedback: 'After ilā: kitābihi.' }),
  ],
  mastery: false,
  prep: {
    words: [['كِتَابُ الطَّالِبِ', 'the student’s book', '—'], ['بَابُ الْبَيْتِ', 'the door of the house', '—'], ['مُدِيرُ الْمَدْرَسَةِ', 'the head of the school', '—'], ['سَيَّارَةُ أَبِي', 'my father’s car', '—'], ['مِفْتَاحُ السَّيَّارَةِ', 'the car key', '—']],
    questionEn: 'Kitābuhu = his book. How would you say “Aḥmad’s book” with two nouns side by side?',
    questionAr: 'كِتَابُهُ = كِتَابُ ______ .',
    homework: {
      core: 'Write my / her / our forms for six nouns (three with ة).',
      develop: 'Write four sentences: subject, object, after a preposition, with an adjective.',
      stretch: 'Website belongings profile (100–120 words).',
    },
    wordsSource: 'The five phrases prepare GM-POS-02 (website: possessive iḍāfa).',
  },
  remember: 'Remember: noun + owner ending = one word (kitābī, kitābuhā, kitābunā) · the ending shows the owner · tāʾ marbūṭa opens to t before an ending · never al- + ending · the case vowel stays: kitābuhu / kitābahu / kitābihi · duals and -ūna plurals drop the nūn.',
});

module.exports = { meta, slides };
