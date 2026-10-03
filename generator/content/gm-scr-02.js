'use strict';
/* GM-SCR-02 · Sun and Moon Letters — website: Mastery & Revision › Grammar › Arabic Script › Script Mastery 02 (one written article, two
 * pronunciation patterns; the 14 sun and 14 moon letters with example words; why the shadda matters; mixed reading; classify-the-word
 * listening; pronunciation chain; colour-code reading; mixed paragraph; common mistakes). The website checks this chapter through games,
 * so the quizzes are teacher-written on the website content. GM-SCR-02 = website Script Mastery 02. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-SCR-02', fileTitle: 'Sun_and_Moon_Letters', title: 'Sun and Moon Letters', arabic: 'الْحُرُوفُ الشَّمْسِيَّةُ وَالْقَمَرِيَّةُ',
  focus: 'One written article, two sounds: before a sun letter the lām disappears and the letter doubles (الشَّمْسُ = ash-shamsu); before a moon letter the lām is heard (الْقَمَرُ = al-qamaru). Read, hear and write both patterns — and keep the ل in the spelling.',
  icon: 'FaMoon',
});

const slides = G.gmLesson({
  code: 'GM-SCR-02', site: 'grammar__01-arabic-script__script-mastery-02-sun-moon-letters',
  source: 'The website chapter “Script Mastery 02”: the two pronunciation patterns, the 14 sun and 14 moon letters with example words, “why the shadda matters”, the mixed reading text, classify-the-word listening, pronunciation chain, colour-code reading, the mixed paragraph and the common-mistakes table. The website checks this chapter through eight games, so the quizzes are teacher-written on the website content.',
  support: `• Core: sort the 28 letters into sun and moon; pronounce common words. Develop: read words with the shadda without transliteration; sort unfamiliar words. Stretch: explain assimilation and analyse connected speech.
• QUR’AN BRIDGE: students already read الرَّحْمٰنِ الرَّحِيمِ, الصِّرَاطَ, النَّاسِ (sun) and الْحَمْدُ, الْعَالَمِينَ, الْكِتَابُ (moon) correctly. Start from Sūrat al-Fātiḥa: “which lām do you NOT say?”
• This lesson is the script side of GM-ART-01: the focus here is READING and WRITING the pattern (shadda, sukūn, spelling).`,
  teach: 'One article, two sounds; the 14 + 14 letters; why the shadda matters.',
  wedo: 'Sort words, add the missing shadda, repair pronunciation and spelling slips.',
  next: { nextCode: 'GM-SCR-03', nextTitle: 'Vowels and Phonetic Marks', nextAr: 'الْحَرَكَاتُ وَالْعَلَامَاتُ الصَّوْتِيَّةُ' },
  doNow: {
    questions: [
      q('Which letter never joins the next letter?', ['ر', 'ب', 'ع'], 'GM-SCR-01: أ د ذ ر ز و.'),
      q('Which is the MEDIAL form of ب?', ['ـبـ', 'بـ', 'ـب'], 'GM-SCR-01: joined on both sides.'),
      q('What does شَدَّةٌ (ـّ) show?', ['a doubled letter', 'a long vowel', 'no vowel'], 'Prepared at home (GM-SCR-01).'),
      q('What does سُكُونٌ (ـْ) show?', ['no vowel on the letter', 'a doubled letter', 'the letter a'], 'Prepared at home (GM-SCR-01).'),
      q('Which is pronounced al-qamaru?', ['الْقَمَرُ', 'الشَّمْسُ', 'النَّهْرُ'], 'Prepared at home: the lām is heard.'),
    ],
    keyIdea: { text: 'Same spelling, two sounds. Look at the letter AFTER الـ: shadda → sun (lām silent) · sukūn on the lām → moon (lām heard).', ar: 'الشَّمْسُ ‖ الْقَمَرُ' },
    retrieves: 'Questions 1–2 retrieve GM-SCR-01 (non-connectors, positions); questions 3–5 test the words prepared at home.',
  },
  objectives: ['Recognise the 14 sun letters and the 14 moon letters.', 'Pronounce الـ correctly before every letter.', 'Use the shadda to show assimilation.', 'Keep the ل of the article in the spelling.'],
  routes: {
    core: ['I can sort a word into sun or moon.', 'I can say الشَّمْسُ and الْقَمَرُ correctly.'],
    develop: ['I can read new words without transliteration.', 'I can add the shadda only where it is needed.'],
    stretch: ['I can explain what assimilation means.', 'I can repair pronunciation and spelling errors.'],
  },
  terms: {
    items: [
      { ar: 'الْحُرُوفُ الشَّمْسِيَّةُ', en: 'sun letters (14)', note: 'ت ث د ذ ر ز س ش ص ض ط ظ ل ن' },
      { ar: 'الْحُرُوفُ الْقَمَرِيَّةُ', en: 'moon letters (14)', note: 'أ ب ج ح خ ع غ ف ق ك م ه و ي' },
      { ar: 'شَدَّةٌ', en: 'shadda: the letter is doubled', note: 'الشَّمْسُ — shsh' },
      { ar: 'سُكُونٌ', en: 'sukūn: no vowel', note: 'الْقَمَرُ — the lām is heard' },
      { ar: 'إِدْغَامٌ', en: 'assimilation (one sound merges into the next)', note: 'ل + ش = شّ' },
      { ar: 'أَدَاةُ التَّعْرِيفِ', en: 'the definite article (al-)', note: 'always written in full' },
    ],
    notes: 'إِدْغَامٌ is the tajwīd word students may already know from Qur’an class — link it explicitly.',
  },
  explain: [
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 1 · one written article, two patterns (website section)', title: 'One spelling — two sounds', ar: 'كِتَابَةٌ وَاحِدَةٌ وَنُطْقَانِ',
      points: [
        'The definite article is ALWAYS written the same way: الـ.',
        'Sun pattern: the ل is not heard; the next (sun) letter is doubled and carries a shadda — الشَّمْسُ = ash-shamsu.',
        'Moon pattern: the ل is clearly pronounced and carries a sukūn — الْقَمَرُ = al-qamaru.',
        'Why? Sun letters are made near the tip of the tongue, like ل, so the ل merges into them (assimilation).',
        'The spelling never changes: the ل is always written, even when it is silent.',
      ],
      examples: [
        { ar: 'ال + شَمْس = الشَّمْسُ', en: 'ash-shamsu', note: 'sun pattern' },
        { ar: 'ل + ش = شّ', en: 'the lām merges into shīn' },
        { ar: 'ال + قَمَر = الْقَمَرُ', en: 'al-qamaru', note: 'moon pattern' },
        { ar: 'شَمْسٌ · الشَّمْسُ', en: 'shamsun → ash-shamsu', note: 'the shadda appears' },
      ],
      callout: { text: 'Essential distinction (website): the spelling still contains الـ in both cases. The difference is pronunciation — and the shadda placed on the sun letter.' },
      notes: 'PART 1 (3 min). Model slowly: al + shams → ash-shams. Students feel the tongue tip for ش, then for ق (back of the mouth).',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 2 · the 14 sun letters (website table)', title: 'Sun letters: the lām disappears', ar: 'الْحُرُوفُ الشَّمْسِيَّةُ', ltr: true,
      cols: [{ label: 'Pronounced', w: 3.0 }, { label: 'Word', w: 4.2, size: 28 }, { label: 'What to notice (website)', w: 5.13 }],
      rows: [
        { core: true, cells: ['at-tuffāḥ', 'التُّفَّاحُ', 'shadda on ت · the apples'] },
        { core: true, cells: ['ad-dars', 'الدَّرْسُ', 'shadda on د · the lesson'] },
        { cells: ['ar-rajul', 'الرَّجُلُ', 'shadda on ر · the man'] },
        { cells: ['ash-shāriʿ', 'الشَّارِعُ', 'shadda on ش · the street'] },
        { cells: ['an-nās', 'النَّاسُ', 'shadda on ن · the people'] },
        { cells: ['ath-thalj', 'الثَّلْجُ', 'shadda on ث · the snow'] },
      ],
      foot: 'Sun sequence (website): ت ث د ذ ر ز س ش ص ض ط ظ ل ن',
      notes: 'PART 2 (2 min). Choral reading. Cover the left column for Develop/Stretch.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 3 · the 14 moon letters (website table)', title: 'Moon letters: the lām is heard', ar: 'الْحُرُوفُ الْقَمَرِيَّةُ', ltr: true,
      cols: [{ label: 'Pronounced', w: 3.0 }, { label: 'Word', w: 4.2, size: 28 }, { label: 'What to notice (website)', w: 5.13 }],
      rows: [
        { core: true, cells: ['al-ab', 'الْأَبُ', 'the ل is heard · the father'] },
        { core: true, cells: ['al-bayt', 'الْبَيْتُ', 'no shadda on ب · the house'] },
        { cells: ['al-jabal', 'الْجَبَلُ', 'the ل remains clear · the mountain'] },
        { cells: ['al-qalam', 'الْقَلَمُ', 'Qāf is a moon letter · the pen'] },
        { cells: ['al-madrasah', 'الْمَدْرَسَةُ', 'Mīm is a moon letter · the school'] },
        { cells: ['al-yawm', 'الْيَوْمُ', 'Yāʾ is a moon letter · the day'] },
      ],
      foot: 'Moon sequence (website): أ ب ج ح خ ع غ ف ق ك م ه و ي',
      notes: 'PART 3 (2 min). Ask: “Where is the shadda?” — there is none after a moon letter.',
    },
    {
      type: 'explain', min: 2, eyebrow: 'Grammar · part 4 · why the shadda matters (website section)', title: 'Reading the marks', ar: 'لِمَاذَا الشَّدَّةُ؟',
      points: [
        'A shadda tells the reader that a consonant is doubled (said twice as long).',
        'With a sun letter, the shadda shows that the ل sound has merged into it.',
        'In fully vowelled text you can SEE the pattern: shadda after الـ = sun · sukūn on the ل = moon.',
        'Never put a shadda on a moon letter: the moon letter is said only once.',
        'Orthographic discipline (website): write the ل even though it is not pronounced.',
      ],
      examples: [
        { ar: 'شَمْسٌ', en: 'shamsun', note: 'without the article' },
        { ar: 'الشَّمْسُ', en: 'ash-shamsu', note: 'with the article: ش is doubled' },
        { ar: 'نُورٌ · النُّورُ', en: 'nūrun → an-nūru', note: 'sun' },
        { ar: 'كِتَابٌ · الْكِتَابُ', en: 'kitābun → al-kitābu', note: 'moon' },
      ],
      callout: { kind: 'warn', text: 'Website common mistakes: saying al-shams (say ash-shams) · dropping the ل in writing · a shadda on qāf · saying al-nās (say an-nās).' },
      notes: 'PART 4 (2 min). Website section “Why the shadda matters” and the website common-mistakes table.',
    },
  ],
  quick: [
    q('Which word begins with a SUN letter?', ['الرَّجُلُ', 'الْبَيْتُ', 'الْقَلَمُ'], 'ر is a sun letter: ar-rajul.'),
    q('Which word begins with a MOON letter?', ['الْجَبَلُ', 'النَّاسُ', 'الدَّرْسُ'], 'ج is a moon letter: al-jabal.'),
    q('How is النَّاسُ pronounced?', ['an-nās', 'al-nās', 'ā-nās'], 'Nūn is a sun letter.'),
    q('Which spelling is correct?', ['الشَّمْسُ', 'اشَّمْسُ', 'الشْمْسُ'], 'Write the ل; put the shadda on ش.'),
  ],
  quickNote: 'teacher-written on the website tables and common mistakes.',
  ido: {
    title: 'Watch me add the article and choose the sound',
    steps: [
      { head: 'Noun', ar: 'شَارِعٌ', think: 'First letter: ش.' },
      { head: 'Sun or moon?', ar: 'ش', think: 'Tongue tip → sun.' },
      { head: 'Add الـ', ar: 'الشَّارِعُ', think: 'Shadda on ش; say ash-shāriʿ.' },
      { head: 'Compare', ar: 'الْمَطْعَمُ', think: 'م = moon: al-maṭʿam.' },
    ],
    legend: [],
    model: 'الشَّارِعُ الطَّوِيلُ · الْقَلَمُ الْجَدِيدُ · النَّاسُ · الْبَيْتُ',
    modelEn: 'the long street · the new pen · the people · the house — website pronunciation chain: say each slowly, then naturally.',
    notes: 'Website section “Add the definite article and choose the pronunciation”: noun → first letter → sun or moon → article + shadda or sukūn.',
  },
  models: [
    { ar: 'فِي الصَّبَاحِ ذَهَبَ الطَّالِبُ إِلَى الْمَدْرَسَةِ.', en: 'In the morning the student went to school.', tip: 'aṣ-ṣabāḥ · aṭ-ṭālib (sun) · al-madrasa (moon)' },
    { ar: 'رَأَى الشَّمْسَ فَوْقَ الْجَبَلِ.', en: 'He saw the sun above the mountain.', tip: 'ash-shams (sun) · al-jabal (moon)' },
    { ar: 'كَتَبَ الدَّرْسَ بِالْقَلَمِ الْأَزْرَقِ.', en: 'He wrote the lesson with the blue pen.', tip: 'ad-dars (sun) · al-qalam · al-azraq (moon)' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · website listening “classify the word”', title: 'Sun or moon?', ar: 'صَنِّفْ',
      categories: ['Sun (lām silent)', 'Moon (lām heard)'],
      items: [['الشَّارِعُ', 0], ['الْبَيْتُ', 1], ['النَّاسُ', 0], ['الْقَمَرُ', 1], ['السَّمَاءُ', 0], ['الْمَطْعَمُ', 1], ['الرَّجُلُ', 0], ['الْكِتَابُ', 1], ['الطَّائِرَةُ', 0], ['الْوَلَدُ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min) — the website listening list. First as LISTENING: read each word twice with the slide hidden; students write S or M (website answer: Sun · Moon · Sun · Moon …). Then show the slide and check.',
    },
  ],
  mistakes: [
    { wrong: 'اشَّمْسُ', right: 'الشَّمْسُ', why: 'The ل stays in the spelling.' },
    { wrong: 'الْقَّمَرُ', right: 'الْقَمَرُ', why: 'Qāf is a moon letter: no shadda.' },
    { wrong: 'النَاسُ', right: 'النَّاسُ', why: 'Nūn is a sun letter: it needs a shadda.' },
  ],
  hints: ['Is a letter missing?', 'Sun or moon?', 'Is a mark missing?'],
  practice: [
    q('Which word needs a shadda after الـ?', ['السَّمَكُ', 'الْبَحْرُ', 'الْفَصْلُ'], 'س is a sun letter.'),
    q('Which is pronounced al-yawm?', ['الْيَوْمُ', 'النَّوْمُ', 'الصَّوْمُ'], 'ي is a moon letter.'),
    q('Which group contains ONLY sun letters?', ['ت د ن', 'ب ق م', 'ع ف ي'], 'ت, د and ن are sun letters.'),
    q('What is the correct pronunciation of الطَّالِبُ?', ['aṭ-ṭālib', 'al-ṭālib', 'a-ālib'], 'ط is a sun letter.'),
  ],
  practiceLabel: 'teacher-written on website games 3, 4, 6 and 7',
  read: {
    title: 'Read mixed sun and moon words', label: 'website reading text', size: 34,
    text: 'فِي الصَّبَاحِ ذَهَبَ الطَّالِبُ إِلَى الْمَدْرَسَةِ. رَأَى الشَّمْسَ فَوْقَ الْجَبَلِ، وَفِي الْفَصْلِ كَتَبَ الدَّرْسَ بِالْقَلَمِ الْأَزْرَقِ.',
    glossary: [['فِي الصَّبَاحِ', 'in the morning'], ['ذَهَبَ', 'he went'], ['الطَّالِبُ', 'the student'], ['رَأَى', 'he saw'], ['فَوْقَ الْجَبَلِ', 'above the mountain'], ['الْفَصْلِ', 'the classroom'], ['الْأَزْرَقِ', 'blue']],
    task: 'Website colour-code task: underline every الـ, circle the first root letter after it, and say whether it is sun or moon. Then read the text aloud with connected speech.',
    questions: [
      q('How many SUN-letter words are in the text?', ['four', 'two', 'six'], 'الصَّبَاحِ · الطَّالِبُ · الشَّمْسَ · الدَّرْسَ.'),
      q('Which word begins with a MOON letter?', ['الْجَبَلِ', 'الشَّمْسَ', 'الدَّرْسَ'], 'ج is a moon letter.'),
      q('How do we say بِالْقَلَمِ?', ['bil-qalami', 'bi-qalami', 'bi-l-qqalami'], 'Moon letter: the lām is heard.'),
      q('Why is there a shadda in الصَّبَاحِ?', ['ص is a sun letter', 'ص is a moon letter', 'it is plural'], 'The ل merges into ص.'),
    ],
    qNote: 'Teacher-written on the website mixed reading text.',
    detective: '1. Find every الـ.\n2. Look at the next letter.\n3. Shadda → sun · sukūn on ل → moon.',
  },
  speak: {
    title: 'Speaking: the pronunciation chain', source: 'website speaking task “pronunciation chain”',
    prompts: [
      { route: 'core', ar: 'اِقْرَأْ: الشَّمْسُ · الْقَمَرُ · الْبَيْتُ · النَّاسُ' },
      { route: 'develop', ar: 'اِقْرَأْ: الشَّارِعُ الطَّوِيلُ · الْقَلَمُ الْجَدِيدُ' },
      { route: 'stretch', ar: 'اِقْرَأِ النَّصَّ كُلَّهُ بِسُرْعَةٍ طَبِيعِيَّةٍ.' },
    ],
    stems: [
      { route: 'core', ar: 'كَلِمَةُ ______ شَمْسِيَّةٌ.' },
      { route: 'develop', ar: 'كَلِمَةُ ______ قَمَرِيَّةٌ.' },
      { route: 'stretch', ar: 'فِي كَلِمَةِ ______ يُدْغَمُ اللَّامُ.' },
    ],
    model: [
      { who: 'A', ar: 'كَيْفَ نَقْرَأُ «الشَّارِعُ»؟', en: 'How do we read “the street”?' },
      { who: 'B', ar: 'نَقُولُ: أَشْ-شَارِعُ، لِأَنَّ الشِّينَ حَرْفٌ شَمْسِيٌّ.', en: 'We say ash-shāriʿ, because shīn is a sun letter.' },
    ],
    notes: 'Website pronunciation chain: say each word twice — slowly and carefully, then naturally in a phrase. Pairs: A reads, B says “sun” or “moon”.',
  },
  write: {
    siteTask: 'Mixed paragraph: write 6–8 sentences using at least four sun-letter nouns and four moon-letter nouns.',
    core: { amount: '10 words', task: 'Copy ten nouns with الـ: five sun, five moon.', how: 'Underline the article; add a shadda only on the sun letters.' },
    develop: { amount: '4–5 sentences', task: 'Write sentences with at least three sun and three moon nouns.', how: 'Use the frames. Then read them aloud to a partner.' },
    stretch: { amount: '6–8 sentences', task: 'The website mixed paragraph: four sun and four moon nouns.', how: 'Mark each noun ☀ or ☾ and explain one assimilation in English.' },
  },
  frames: {
    core: [
      { en: 'the sun', ar: 'الشَّمْسُ · ______' },
      { en: 'the moon', ar: 'الْقَمَرُ · ______' },
      { en: 'the people', ar: 'النَّاسُ · ______' },
      { en: 'the house', ar: 'الْبَيْتُ · ______' },
    ],
    develop: [
      { en: 'In the morning I go to …', ar: 'فِي الصَّبَاحِ أَذْهَبُ إِلَى ______ .' },
      { en: 'I see the sun above …', ar: 'أَرَى الشَّمْسَ فَوْقَ ______ .' },
      { en: 'I write the lesson with …', ar: 'أَكْتُبُ الدَّرْسَ بِـ ______ .' },
      { en: 'The street is …', ar: 'الشَّارِعُ ______ .' },
    ],
    bank: ['الشَّمْسُ', 'السَّمَاءُ', 'الشَّارِعُ', 'الدَّرْسُ', 'النَّاسُ', 'الطَّالِبُ', 'الْقَمَرُ', 'الْبَيْتُ', 'الْجَبَلُ', 'الْقَلَمُ', 'الْمَدْرَسَةُ', 'الْكِتَابُ'],
  },
  stretchTask: {
    task: 'Website mixed paragraph: 6–8 sentences with at least four sun-letter nouns and four moon-letter nouns.',
    checklist: ['Four sun-letter nouns, each with a shadda.', 'Four moon-letter nouns, each with the ل clearly written.', 'The ل of الـ written in every noun.', 'Read aloud: lām silent before sun letters.'],
    phrases: [['فِي الصَّبَاحِ', 'in the morning'], ['ذَهَبَ الطَّالِبُ', 'the student went'], ['فَوْقَ الْجَبَلِ', 'above the mountain'], ['الشَّارِعُ الطَّوِيلُ', 'the long street'], ['الْقَلَمُ الْجَدِيدُ', 'the new pen'], ['فِي السَّمَاءِ', 'in the sky']],
  },
  model: {
    text: 'فِي الصَّبَاحِ أَذْهَبُ إِلَى الْمَدْرَسَةِ مَعَ أَخِي. الشَّارِعُ طَوِيلٌ، وَالنَّاسُ كَثِيرُونَ. أَرَى الشَّمْسَ فِي السَّمَاءِ فَوْقَ الْجَبَلِ. فِي الْفَصْلِ أَكْتُبُ الدَّرْسَ بِالْقَلَمِ الْجَدِيدِ، ثُمَّ أَرْجِعُ إِلَى الْبَيْتِ.',
    en: 'In the morning I go to school with my brother. The street is long, and there are many people. I see the sun in the sky above the mountain. In class I write the lesson with the new pen, then I go back home.',
    find: ['4+ sun nouns', '4+ moon nouns', 'shadda after الـ', 'ل always written'],
    source: 'teacher model for the website mixed paragraph',
    notes: 'Sun: الصَّبَاحِ · الشَّارِعُ · النَّاسُ · الشَّمْسَ · السَّمَاءِ · الدَّرْسَ. Moon: الْمَدْرَسَةِ · الْجَبَلِ · الْفَصْلِ · الْقَلَمِ · الْجَدِيدِ · الْبَيْتِ.',
  },
  selfCheck: [
    { route: 'core', text: 'I can sort any word into sun or moon.' },
    { route: 'core', text: 'I wrote the ل in every article.' },
    { route: 'develop', text: 'I put a shadda only after sun letters.' },
    { route: 'develop', text: 'I read my sentences without transliteration.' },
    { route: 'stretch', text: 'I can explain assimilation in one sentence.' },
  ],
  exit: [
    q('Which begins with a sun letter?', ['الزَّهْرَةُ', 'الْعَيْنُ', 'الْوَرَقَةُ'], 'ز is a sun letter.'),
    q('How is الْعَيْنُ pronounced?', ['al-ʿayn', 'aʿ-ʿayn', 'a-ʿayn'], 'ع is a moon letter.'),
    q('Which is spelled correctly?', ['الدَّرْسُ', 'ادَّرْسُ', 'الْدَّرْسُ'], 'Write ل; shadda on the sun letter د; no sukūn on ل.'),
  ],
  masteryQs: [
    q('How many sun letters are there?', ['14', '28', '7'], 'Half of the alphabet.'),
    q('Which word has a silent lām?', ['التِّلْمِيذُ', 'الْأُمُّ', 'الْفِيلُ'], 'ت is a sun letter.'),
    q('Which is NOT a sun letter?', ['م', 'ن', 'ل'], 'م is a moon letter.'),
    q('What does the shadda after الـ show?', ['the ل merged into a sun letter', 'a moon letter', 'a plural'], 'Assimilation.'),
    q('Which is pronounced ar-rajulu?', ['الرَّجُلُ', 'الْوَلَدُ', 'الْجَمَلُ'], 'ر is a sun letter.'),
    q('Is ل itself a sun or a moon letter?', ['sun: اللَّيْلُ = al-laylu', 'moon', 'neither'], 'ل is on the sun list: the two lāms merge.'),
  ],
  prep: {
    words: [['فَتْحَةٌ', 'fatḥa (a)', '—'], ['ضَمَّةٌ', 'ḍamma (u)', '—'], ['كَسْرَةٌ', 'kasra (i)', '—'], ['مَدٌّ', 'a long vowel', '—'], ['تَنْوِينٌ', 'nunation (-n)', '—']],
    questionEn: 'Find one word in your Qur’an or book with each short vowel (a · u · i).',
    questionAr: 'ـَ ______ · ـُ ______ · ـِ ______',
    homework: {
      core: 'Learn the 14 sun letters; sort 10 nouns from your book.',
      develop: 'Copy the website reading text and colour-code every article.',
      stretch: 'Write the website mixed paragraph and play the 60-second Sun and Moon Challenge.',
    },
    wordsSource: 'The five words prepare GM-SCR-03 (website Script Mastery 03: vowels and phonetic marks).',
  },
  remember: 'Remember: one spelling, two sounds · sun = shadda, lām silent · moon = lām heard · always write the ل.',
});

module.exports = { meta, slides };
