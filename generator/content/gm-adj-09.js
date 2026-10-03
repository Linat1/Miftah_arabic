'use strict';
/* GM-ADJ-09 · Nisba Adjectives — website: Mastery & Revision › Grammar › Adjectives › Lesson 9 (nisba links a person or thing to a place,
 * field, material or concept; masculine ـِيٌّ with doubled yāʾ, feminine ـِيَّةٌ — مِصْرِيٌّ / مِصْرِيَّةٌ · عَرَبِيٌّ / عَرَبِيَّةٌ · شَمَالِيٌّ ·
 * مُوسِيقِيٌّ; it behaves like any adjective — طَالِبَةٌ مِصْرِيَّةٌ · مُوسِيقَى عَرَبِيَّةٌ · مَنْطِقَةٌ شَمَالِيَّةٌ; spelling: some source
 * nouns change — لُبْنَانُ لُبْنَانِيٌّ · سُورِيَا سُورِيٌّ · فَرَنْسَا فَرَنْسِيٌّ; clinic: keep the shadda; don’t forget ـِيَّةٌ). The website
 * Entry Check is the Do Now (feedback in English); guided and mastery checks repeat it, so quick check, practice and exit are
 * teacher-written. Teacher-added: the building steps (drop al- / final -ā / ة), languages as feminine nisba nouns (الْعَرَبِيَّةُ),
 * subject-field nisbas (عِلْمِيٌّ · رِيَاضِيٌّ · تَارِيخِيٌّ) and people plurals (مِصْرِيُّونَ). */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-ADJ-09', fileTitle: 'Nisba_Adjectives', title: 'Nisba Adjectives', arabic: 'صِفَاتُ النِّسْبَةِ',
  focus: 'Add -iyy to a noun to say where someone is from or what something relates to: Miṣr → miṣriyy (Egyptian), tārīkh → tārīkhiyy (historical). Feminine: -iyya. It then behaves like any adjective.',
  icon: 'FaEarthAfrica',
});

const slides = G.gmLesson({
  code: 'GM-ADJ-09', site: 'grammar__04-adjectives__grammar-mastery-09-nisba',
  support: `• Core: nationality pairs (مِصْرِيٌّ / مِصْرِيَّةٌ · عَرَبِيٌّ / عَرَبِيَّةٌ · بِرِيطَانِيٌّ / بِرِيطَانِيَّةٌ · بَاكِسْتَانِيٌّ / بَاكِسْتَانِيَّةٌ). Develop: agreement and definiteness (الْمَنْطِقَةُ الشَّمَالِيَّةُ); languages as feminine nisba (الْعَرَبِيَّةُ · الْإِنْجِلِيزِيَّةُ). Stretch: building steps and irregular forms (سُورِيَا → سُورِيٌّ · الْمَدِينَةُ → مَدَنِيٌّ); field nisbas (عِلْمِيٌّ · تَارِيخِيٌّ · رِيَاضِيٌّ); people plurals (مِصْرِيُّونَ).
• Identity hook: every student says their own nisba (heritage and British) — high engagement and immediately useful for IGCSE “self and family”.
• Website clinic: keep the shadda on the yāʾ (ـِيٌّ), and never forget ـِيَّةٌ for feminine nouns.`,
  teach: 'The core ending; agreement; building and spelling.',
  wedo: 'Build nationalities, sort, describe.',
  next: { nextCode: 'GM-ADV-01', nextTitle: 'Common Adverbs of Time, Place and Manner', nextAr: 'ظُرُوفُ الزَّمَانِ وَالْمَكَانِ وَالْحَالِ' },
  doNow: {
    fb: { 0: 'The nisba feminine has -iyya (yāʾ with shadda + ة).', 1: 'Masculine singular nisba.', 2: 'Music is feminine.', 3: 'Gender and definiteness agree.' },
    keyIdea: { text: 'Noun + -iyy = “from / related to”. Masculine -iyyun, feminine -iyyatun. Then agree like any adjective.', ar: 'مِصْرُ · {k|مِصْرِيٌّ} · {e|مِصْرِيَّةٌ}' },
    retrieves: 'The website Entry Check (all five questions) — it uses the nisba words prepared at the end of GM-ADJ-08.',
  },
  objectives: ['Build a nisba adjective with -iyy / -iyya.', 'Say nationalities for men and women.', 'Make the nisba agree like any adjective.', 'Recognise irregular nisbas and nisbas for subjects.'],
  routes: {
    core: ['I say my nationality (m. / f.).', 'I write the shadda on the yāʾ.'],
    develop: ['I write the northern region with al- on both.', 'I name languages: al-ʿarabiyya.'],
    stretch: ['I build Syrian, French, scientific.', 'I use plurals: Egyptians (people).'],
  },
  terms: {
    items: [
      { ar: 'النِّسْبَةُ', en: 'nisba (relation adjective)', note: 'مِصْرِيٌّ · عِلْمِيٌّ' },
      { ar: 'ـِيٌّ', en: 'masculine ending', tr: '-iyyun', note: 'عَرَبِيٌّ' },
      { ar: 'ـِيَّةٌ', en: 'feminine ending', tr: '-iyyatun', note: 'عَرَبِيَّةٌ' },
      { ar: 'جِنْسِيَّةٌ', en: 'nationality', note: 'مَا جِنْسِيَّتُكَ؟' },
      { ar: 'لُغَةٌ', en: 'language', note: 'اللُّغَةُ الْعَرَبِيَّةُ' },
      { ar: 'شَدَّةٌ', en: 'shadda (doubling)', note: 'keep it on the yāʾ' },
    ],
  },
  explain: [
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · step 1 · the core ending (website)', title: 'Noun + -iyy = “from / related to”', ar: 'يَاءُ النِّسْبَةِ',
      points: [
        'A nisba adjective links a person or thing to a place, field, material or concept (website).',
        'Masculine ending: -iyyun, a doubled yāʾ with shadda (website).',
        'Feminine ending: -iyyatun (website).',
        'It is the Arabic equivalent of English -ish, -an, -ese, -al: British, Egyptian, Chinese, musical.',
        'Website clinic: always keep the shadda in fully vowelled work.',
      ],
      examples: [
        { ar: 'مِصْرِيٌّ · مِصْرِيَّةٌ', en: 'Egyptian (m. · f.)', note: 'website' },
        { ar: 'عَرَبِيٌّ · عَرَبِيَّةٌ', en: 'Arab, Arabic', note: 'website' },
        { ar: 'شَمَالِيٌّ · شَمَالِيَّةٌ', en: 'northern', note: 'website · from north' },
        { ar: 'مُوسِيقِيٌّ · مُوسِيقِيَّةٌ', en: 'musical', note: 'website · from music' },
      ],
      notes: 'STEP 1 (3 min) — website “The core ending”. Ask each student: “min ayna anta / anti?” and build their nisba with them.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · step 2 · agreement and meaning (website) · Develop', title: 'A nisba agrees like any adjective', ar: 'الْمُطَابَقَةُ', ltr: true,
      cols: [{ label: 'Meaning', w: 3.6 }, { label: 'Arabic', w: 4.6, size: 24 }, { label: 'Notice', w: 4.13 }],
      rows: [
        { core: true, cells: ['an Egyptian student (m.)', 'طَالِبٌ مِصْرِيٌّ', 'website'] },
        { core: true, cells: ['an Egyptian student (f.)', 'طَالِبَةٌ مِصْرِيَّةٌ', 'website'] },
        { core: true, cells: ['Arabic music', 'مُوسِيقَى عَرَبِيَّةٌ', 'music is feminine (website)'] },
        { core: true, cells: ['the northern region', 'الْمَنْطِقَةُ الشَّمَالِيَّةُ', 'al- on both (website)'] },
        { cells: ['the Arabic language', 'اللُّغَةُ الْعَرَبِيَّةُ · الْعَرَبِيَّةُ', 'languages are feminine nisbas'] },
        { cells: ['Egyptians (people)', 'الْمِصْرِيُّونَ', 'people plural: -iyyūna'] },
      ],
      foot: 'Website: the nisba follows and agrees with its noun — gender, number, definiteness and case, exactly as in ADJ-04.',
      notes: 'STEP 2 (3 min) — website “Agreement and meaning”. The language row is a teacher-added Develop point: al-ʿarabiyya alone means “Arabic (the language)”.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · step 3 · spelling awareness (website) · Stretch', title: 'How the source noun changes', ar: 'تَغَيُّرَاتٌ فِي الْكَلِمَةِ', ltr: true,
      cols: [{ label: 'Source', w: 3.2, size: 24 }, { label: 'Nisba', w: 3.2, size: 24 }, { label: 'Meaning', w: 2.6 }, { label: 'What changed', w: 3.33 }],
      rows: [
        { core: true, cells: ['لُبْنَانُ', 'لُبْنَانِيٌّ', 'Lebanese', 'just add -iyy (website)'] },
        { core: true, cells: ['بَاكِسْتَانُ', 'بَاكِسْتَانِيٌّ', 'Pakistani', 'just add -iyy'] },
        { cells: ['سُورِيَا', 'سُورِيٌّ', 'Syrian', 'final -yā dropped (website)'] },
        { cells: ['فَرَنْسَا', 'فَرَنْسِيٌّ', 'French', 'final -ā dropped (website)'] },
        { cells: ['السُّعُودِيَّةُ', 'سُعُودِيٌّ', 'Saudi', 'al- and -iyya dropped'] },
        { cells: ['الْمَدِينَةُ', 'مَدَنِيٌّ', 'Madinan / civil', 'irregular — learn whole'] },
      ],
      foot: 'Website: some source nouns change before the nisba ending, so learn frequent forms as whole words.',
      notes: 'STEP 3 (3 min) — website “Spelling awareness”, extended. Rule of thumb: drop al-, a final -ā and a final ة, then add -iyy.',
    },
  ],
  quick: [
    q('Feminine of بِرِيطَانِيٌّ?', ['بِرِيطَانِيَّةٌ', 'بِرِيطَانِيَةٌ', 'بِرِيطَانِيَا'], 'Yāʾ with shadda + ة.'),
    q('Choose “a Pakistani doctor (f.)”.', ['طَبِيبَةٌ بَاكِسْتَانِيَّةٌ', 'طَبِيبَةٌ بَاكِسْتَانِيٌّ', 'طَبِيبٌ بَاكِسْتَانِيَّةٌ'], 'Feminine noun → -iyya.'),
    q('Choose “the historical city”.', ['الْمَدِينَةُ التَّارِيخِيَّةُ', 'الْمَدِينَةُ تَارِيخِيَّةٌ', 'الْمَدِينَةُ التَّارِيخِيُّ'], 'Feminine, al- on both.'),
    q('Choose the nisba of فَرَنْسَا.', ['فَرَنْسِيٌّ', 'فَرَنْسَاوِيٌّ', 'فَرَنْسَيٌّ'], 'Drop the final -ā (website).'),
  ],
  quickNote: 'teacher-written hinge questions on the website’s three steps.',
  ido: {
    title: 'Watch me build a nisba',
    steps: [
      { head: 'Source', ar: 'الْمَغْرِبُ', think: 'Morocco.' },
      { head: 'Drop al-', ar: 'مَغْرِبُ', think: 'Remove the article.' },
      { head: 'Add -iyy', ar: 'مَغْرِبِيٌّ', think: 'Moroccan (m.).' },
      { head: 'Feminine', ar: 'طَالِبَةٌ مَغْرِبِيَّةٌ', think: '-iyya for her.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'MASCULINE -IYY', e: 'FEMININE -IYYA' },
    model: 'صَدِيقِي يُوسُفُ {k|مَغْرِبِيٌّ}، وَصَدِيقَتُهُ مَرْيَمُ {e|بِرِيطَانِيَّةٌ}. يَتَكَلَّمَانِ {e|الْعَرَبِيَّةَ} وَ{e|الْإِنْجِلِيزِيَّةَ}، وَيُحِبَّانِ الطَّعَامَ {k|الْمَغْرِبِيَّ}.',
    modelEn: 'My friend Yusuf is Moroccan, and his friend Maryam is British. They both speak Arabic and English, and they love Moroccan food.',
    notes: 'Model the three building steps on screen. Point out الطَّعَامَ الْمَغْرِبِيَّ — the nisba copies al- and the object case.',
  },
  models: [
    { ar: 'أَنَا بِرِيطَانِيٌّ مِنْ أَصْلٍ بَاكِسْتَانِيٍّ.', en: 'I am British of Pakistani origin.', tip: 'Two nisbas; genitive after min.' },
    { ar: 'أُمِّي صُومَالِيَّةٌ، وَأَبِي يَمَنِيٌّ.', en: 'My mother is Somali, and my father is Yemeni.', tip: 'Feminine and masculine.' },
    { ar: 'أُحِبُّ الْمُوسِيقَى الْعَرَبِيَّةَ.', en: 'I love Arabic music.', tip: 'Website model bank, definite object.' },
    { ar: 'الْعُلُومُ مَادَّةٌ عِلْمِيَّةٌ صَعْبَةٌ.', en: 'Science is a difficult scientific subject.', tip: 'A field nisba.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 2, eyebrow: 'We do · build the nationality · say it aloud', title: 'Country → he → she', ar: 'الْبَلَدُ وَالْجِنْسِيَّةُ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Country', w: 3.4, size: 24 }, { label: 'He is …', w: 3.4, size: 24 }, { label: 'She is …', w: 3.4, size: 24 }, { label: 'Meaning', w: 2.13 }],
      rows: [
        { core: true, cells: ['الْعِرَاقُ', 'عِرَاقِيٌّ', 'عِرَاقِيَّةٌ', 'Iraqi'] },
        { core: true, cells: ['الْيَمَنُ', 'يَمَنِيٌّ', 'يَمَنِيَّةٌ', 'Yemeni'] },
        { core: true, cells: ['الصُّومَالُ', 'صُومَالِيٌّ', 'صُومَالِيَّةٌ', 'Somali'] },
        { cells: ['تُرْكِيَا', 'تُرْكِيٌّ', 'تُرْكِيَّةٌ', 'Turkish'] },
        { cells: ['الْهِنْدُ', 'هِنْدِيٌّ', 'هِنْدِيَّةٌ', 'Indian'] },
      ],
      foot: 'Cover the last three columns. Steps: drop al- (or a final -ā), add -iyy, then -iyya for “she”.',
      notes: 'WE DO (2 min). Invite students to add their own heritage country as a sixth row in the chat.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · masculine or feminine nisba?', title: 'Which form fits the noun?', ar: 'صَنِّفْ',
      categories: ['-iyy (masculine noun)', '-iyya (feminine noun)'],
      items: [['كِتَابٌ عِلْمِيٌّ', 0], ['قِصَّةٌ تَارِيخِيَّةٌ', 1], ['طَعَامٌ هِنْدِيٌّ', 0], ['لُغَةٌ أَجْنَبِيَّةٌ', 1], ['فَرِيقٌ رِيَاضِيٌّ', 0], ['مَدِينَةٌ سَاحِلِيَّةٌ', 1], ['يَوْمٌ دِرَاسِيٌّ', 0], ['مُوسِيقَى شَعْبِيَّةٌ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type M or F and translate each phrase: scientific book, historical story, Indian food, foreign language, sports team, coastal city, school day, folk music.',
    },
  ],
  mistakes: [
    { wrong: 'أُخْتِي بِرِيطَانِيٌّ.', right: 'أُخْتِي بِرِيطَانِيَّةٌ.', why: 'Feminine noun → -iyya (website clinic).' },
    { wrong: 'طَالِبٌ عَرَبِيٌ', right: 'طَالِبٌ عَرَبِيٌّ', why: 'Keep the shadda on the yāʾ (website clinic).' },
    { wrong: 'هُوَ سُورِيَاوِيٌّ.', right: 'هُوَ سُورِيٌّ.', why: 'Drop the final -yā before -iyy (website).' },
  ],
  hints: ['Is sister feminine?', 'Where is the shadda?', 'Drop the ending?'],
  practice: [
    q('Choose “an Arab country (m.)”.', ['بَلَدٌ عَرَبِيٌّ', 'بَلَدٌ عَرَبِيَّةٌ', 'بَلَدٌ عَرَبٌ'], 'Masculine noun → -iyy.'),
    q('Choose “I speak English.”', ['أَتَكَلَّمُ الْإِنْجِلِيزِيَّةَ.', 'أَتَكَلَّمُ الْإِنْجِلِيزِيُّ.', 'أَتَكَلَّمُ إِنْجِلِيزٌ.'], 'Languages: feminine nisba with al-.'),
    q('Choose “the Saudi team”.', ['الْفَرِيقُ السُّعُودِيُّ', 'الْفَرِيقُ السُّعُودِيَّةُ', 'فَرِيقُ السُّعُودِيُّ'], 'Masculine, al- on both.'),
    q('Choose “Many Egyptians live in London.”', ['يَسْكُنُ مِصْرِيُّونَ كَثِيرُونَ فِي لَنْدَن.', 'يَسْكُنُ مِصْرِيَّةٌ كَثِيرَةٌ فِي لَنْدَن.', 'يَسْكُنُ مِصْرِيٌّ كَثِيرٌ فِي لَنْدَن.'], 'People plural: -iyyūna.'),
  ],
  practiceLabel: 'teacher-written practice on the website rules',
  read: {
    title: 'A multicultural city', label: 'website reading text, extended by the teacher',
    text: 'فِي مَدِينَتِي أَمَاكِنُ جَمِيلَةٌ وَشَوَارِعُ وَاسِعَةٌ. هَذِهِ الْمَدْرَسَةُ الْجَدِيدَةُ قَرِيبَةٌ، وَذَلِكَ الْمَتْحَفُ الْقَدِيمُ مُثِيرٌ لِلِاهْتِمَامِ. فِي الْمَتْحَفِ قِطَعٌ تَارِيخِيَّةٌ وَصُوَرٌ قَدِيمَةٌ. فِي شَارِعِنَا مَطْعَمٌ لُبْنَانِيٌّ وَمَخْبَزٌ تُرْكِيٌّ وَمَحَلٌّ صُومَالِيٌّ، وَجِيرَانُنَا بَاكِسْتَانِيُّونَ وَبِرِيطَانِيُّونَ.',
    glossary: [['أَمَاكِنُ', 'places'], ['مُثِيرٌ لِلِاهْتِمَامِ', 'interesting'], ['قِطَعٌ', 'pieces, items'], ['مَطْعَمٌ', 'restaurant'], ['مَخْبَزٌ', 'bakery'], ['مَحَلٌّ', 'shop'], ['جِيرَانُنَا', 'our neighbours']],
    task: 'Website: underline each adjective and every nisba; draw an arrow to its noun and label the agreement.',
    questions: [
      q('Why is it قِطَعٌ تَارِيخِيَّةٌ (feminine)?', ['Items are a non-human plural.', 'Items are women.', 'It is a mistake.'], 'Things → feminine singular.'),
      q('What kind of restaurant is in the street?', ['Lebanese', 'Turkish', 'Somali'], 'مَطْعَمٌ لُبْنَانِيٌّ.'),
      q('Why is it بَاكِسْتَانِيُّونَ (-ūna)?', ['The neighbours are people, plural.', 'They are things.', 'It is dual.'], 'People plural: -iyyūna.'),
      q('Which nisba describes the bakery?', ['تُرْكِيٌّ', 'صُومَالِيٌّ', 'لُبْنَانِيٌّ'], 'مَخْبَزٌ تُرْكِيٌّ.'),
    ],
    qNote: 'The first two sentences are the website text; the rest is teacher-written. Questions teacher-written.',
  },
  speak: {
    title: 'Speaking: who are you and where are you from?', source: 'website speaking task (45–60 seconds)',
    prompts: [
      { route: 'core', ar: 'مَا جِنْسِيَّتُكَ؟ مَا جِنْسِيَّةُ أُمِّكَ وَأَبِيكَ؟' },
      { route: 'develop', ar: 'مَا اللُّغَاتُ الَّتِي تَتَكَلَّمُهَا؟' },
      { route: 'stretch', ar: 'مَا الطَّعَامُ الْمُفَضَّلُ عِنْدَكَ؟ (هِنْدِيٌّ، إِيطَالِيٌّ، عَرَبِيٌّ …)' },
    ],
    stems: [
      { route: 'core', ar: 'أَنَا ______ ، وَأُمِّي ______ .' },
      { route: 'develop', ar: 'أَتَكَلَّمُ ______ وَ ______ .' },
      { route: 'stretch', ar: 'أُحِبُّ الطَّعَامَ ______ لِأَنَّهُ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَا جِنْسِيَّتُكِ؟', en: 'What is your nationality? (to a girl)' },
      { who: 'B', ar: 'أَنَا بِرِيطَانِيَّةٌ، وَأَصْلِي بَنْغَالِيٌّ. أَتَكَلَّمُ الْإِنْجِلِيزِيَّةَ وَالْبَنْغَالِيَّةَ وَقَلِيلًا مِنَ الْعَرَبِيَّةِ.', en: 'I am British, and my origin is Bengali. I speak English, Bengali and a little Arabic.' },
    ],
    notes: 'Website: 45–60 seconds with six accurate structures. Celebrate every heritage; check -iyy / -iyya for boys and girls.',
  },
  write: {
    siteTask: 'Write 90–120 words describing a person, place, object or experience, with at least eight target adjective structures, underlined.',
    core: { amount: '6 sentences', task: 'Introduce your family: nationality of each person.', how: 'He -iyy, she -iyya.' },
    develop: { amount: '8 sentences', task: 'Add languages and food.', how: 'al-ʿarabiyya · ṭaʿām hindiyy.' },
    stretch: { amount: '90–120 words', task: 'Website task: your multicultural street or school.', how: 'Include an irregular nisba and a people plural.' },
  },
  frames: {
    core: [
      { en: 'I am … (nationality).', ar: 'أَنَا ______ .' },
      { en: 'My mother is …', ar: 'أُمِّي ______ .' },
      { en: 'My father is …', ar: 'أَبِي ______ .' },
      { en: 'My friend (f.) is …', ar: 'صَدِيقَتِي ______ .' },
    ],
    develop: [
      { en: 'I speak … and …', ar: 'أَتَكَلَّمُ ______ وَ ______ .' },
      { en: 'I like … food.', ar: 'أُحِبُّ الطَّعَامَ ______ .' },
      { en: 'In my street there is a … restaurant.', ar: 'فِي شَارِعِي مَطْعَمٌ ______ .' },
      { en: 'My favourite subject is a … subject.', ar: 'مَادَّتِي الْمُفَضَّلَةُ مَادَّةٌ ______ .' },
    ],
    bank: ['بِرِيطَانِيٌّ', 'بِرِيطَانِيَّةٌ', 'بَاكِسْتَانِيٌّ', 'صُومَالِيٌّ', 'مِصْرِيٌّ', 'مَغْرِبِيٌّ', 'هِنْدِيٌّ', 'تُرْكِيٌّ', 'الْعَرَبِيَّةُ', 'الْإِنْجِلِيزِيَّةُ', 'عِلْمِيَّةٌ', 'تَارِيخِيَّةٌ'],
  },
  stretchTask: {
    task: 'Website extended writing workshop: 90–120 words about a multicultural place or your family, with at least eight target adjective structures.',
    checklist: ['Three masculine and three feminine nationality nisbas.', 'Two languages as feminine nisbas with al-.', 'One field nisba (scientific, historical, sporting …).', 'One irregular nisba (Syrian, French, Saudi …).', 'One people plural (-iyyūna).'],
    phrases: [['مِنْ أَصْلٍ …', 'of … origin'], ['أَتَكَلَّمُ الْعَرَبِيَّةَ', 'I speak Arabic'], ['مَطْعَمٌ لُبْنَانِيٌّ', 'a Lebanese restaurant'], ['مَادَّةٌ عِلْمِيَّةٌ', 'a scientific subject'], ['مَدِينَةٌ تَارِيخِيَّةٌ', 'a historical city'], ['جِيرَانٌ بِرِيطَانِيُّونَ', 'British neighbours']],
  },
  model: {
    text: 'أَنَا بِرِيطَانِيٌّ، وَأَصْلِي بَاكِسْتَانِيٌّ. أُمِّي بَاكِسْتَانِيَّةٌ، وَأَبِي بِرِيطَانِيٌّ وُلِدَ فِي مَانْشِسْتَر. فِي الْبَيْتِ نَتَكَلَّمُ الْأُرْدِيَّةَ وَالْإِنْجِلِيزِيَّةَ، وَفِي الْمَدْرَسَةِ أَتَعَلَّمُ الْعَرَبِيَّةَ. أُحِبُّ الطَّعَامَ الْهِنْدِيَّ وَالْحَلْوَيَاتِ التُّرْكِيَّةَ. فِي صَفِّي طُلَّابٌ صُومَالِيُّونَ وَمَغَارِبَةٌ وَسُورِيُّونَ.',
    en: 'I am British, and my origin is Pakistani. My mother is Pakistani, and my father is British, born in Manchester. At home we speak Urdu and English, and at school I learn Arabic. I love Indian food and Turkish sweets. In my class there are Somali, Moroccan and Syrian students.',
    find: ['masculine nisba', 'feminine nisba', 'languages', 'people plurals'],
    source: 'teacher model on the website writing workshop',
  },
  selfCheck: [
    { route: 'core', text: 'Every nisba has the shadda on the yāʾ.' },
    { route: 'core', text: 'Women and feminine nouns have -iyya.' },
    { route: 'develop', text: 'Languages are feminine nisbas with al-.' },
    { route: 'develop', text: 'Al- is on both noun and nisba in “the …”.' },
    { route: 'stretch', text: 'I used an irregular nisba and a people plural.' },
  ],
  exit: [
    q('Feminine of يَمَنِيٌّ?', ['يَمَنِيَّةٌ', 'يَمَنِيَةٌ', 'يَمَنِيٌّ'], 'Yāʾ with shadda + ة.'),
    q('Choose “an Indian film (m.)”.', ['فِيلْمٌ هِنْدِيٌّ', 'فِيلْمٌ هِنْدِيَّةٌ', 'فِيلْمٌ الْهِنْدِيُّ'], 'Masculine, indefinite.'),
    q('Choose “She speaks Arabic.”', ['تَتَكَلَّمُ الْعَرَبِيَّةَ.', 'تَتَكَلَّمُ الْعَرَبِيَّ.', 'تَتَكَلَّمُ عَرَبٌ.'], 'Language: feminine nisba.'),
  ],
  mastery: false,
  prep: {
    words: [['ظَرْفٌ', 'adverb', '—'], ['دَائِمًا', 'always', '—'], ['أَحْيَانًا', 'sometimes', '—'], ['هُنَا', 'here', '—'], ['بِسُرْعَةٍ', 'quickly', '—']],
    questionEn: 'Look at dāʾiman and aḥyānan. What ending do they share? Why might many adverbs look like this?',
    questionAr: 'دَائِمًا · أَحْيَانًا · ______',
    homework: {
      core: 'Write the nationality of eight people you know (m. / f.).',
      develop: 'Write eight sentences about languages and food.',
      stretch: 'Website writing workshop: your multicultural street or school.',
    },
    wordsSource: 'The five words prepare GM-ADV-01 (website Adverbs lesson 1: common adverbs of time, place and manner).',
  },
  remember: 'Remember: noun + -iyy (shadda!) · feminine -iyya · it agrees like any adjective · languages are feminine nisbas · drop al-, a final -ā or ة before -iyy.',
});

module.exports = { meta, slides };
