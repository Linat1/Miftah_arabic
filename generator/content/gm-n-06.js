'use strict';
/* GM-N-06 · Non-Human Plural Agreement — website: Mastery & Revision › Grammar › Nouns › Lesson 6 (a non-human plural stays plural in
 * meaning, but everything that agrees with it — adjective, demonstrative, pronoun, verb — is feminine singular; human vs non-human table;
 * “do not decide from the plural shape”: مَدَارِسُ and سَيَّارَاتٌ both take feminine singular). Entry check, guided mini-check and
 * mastery check are the website’s; the “agreement package” display, sorter, repair, reading questions, frames and model are teacher-made. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-N-06', fileTitle: 'Non_Human_Plural_Agreement', title: 'Non-Human Plural Agreement', arabic: 'جَمْعُ غَيْرِ الْعَاقِلِ',
  focus: 'A plural of THINGS or animals is still plural in meaning, but every word that agrees with it — adjective, “these”, “they”, the verb — is feminine singular. Think in two layers: plural noun, feminine singular agreement.',
  icon: 'FaCar',
});

const slides = G.gmLesson({
  code: 'GM-N-06', site: 'grammar__03-nouns__grammar-mastery-06-non-human-plurals',
  support: `• Core: adjective after a non-human plural is feminine singular (الْكُتُبُ مُفِيدَةٌ). Develop: the whole agreement package — هَذِهِ · هِيَ · a verb with ـَتْ. Stretch: explain why the shape of the plural (sound or broken) does not matter — only meaning.
• The most common error after GM-N-03/04/05: students “agree” by shape — سَيَّارَاتٌ looks feminine plural, so they write سَرِيعَاتٌ. Keep repeating: “Is it a PERSON?”
• Qur’an note: وَالسَّمَاوَاتُ مَطْوِيَّاتٌ shows that classical Arabic sometimes uses plural agreement with things — keep this for curious Stretch students only; the school rule is feminine singular.`,
  teach: 'The agreement switch; the package; human vs non-human.',
  wedo: 'Sort people / things, build the package, repair.',
  next: { nextCode: 'GM-N-07', nextTitle: 'The Iḍāfa Possessive Structure', nextAr: 'تَرْكِيبُ الْإِضَافَةِ' },
  doNow: {
    keyIdea: { text: 'Is it a person? No → treat the plural like “she”: feminine singular adjective, “this (f)”, “she”, verb with -at.', ar: '{k|الْكُتُبُ} {e|مُفِيدَةٌ} ‖ {k|هَذِهِ} الْبُيُوتُ {e|جَدِيدَةٌ}' },
    retrieves: 'The website Entry Check (questions 1–5) — it retrieves the agreement rule first met in GM-N-05.',
  },
  objectives: ['Explain the two-layer rule for non-human plurals.', 'Use a feminine singular adjective after a non-human plural.', 'Use هَذِهِ, هِيَ and a feminine singular verb for things.', 'Keep plural agreement for people.'],
  routes: {
    core: ['I give things a feminine singular adjective.', 'I ask: is it a person?'],
    develop: ['I say “these books” with the feminine singular demonstrative.', 'I use “she” and a verb in -at for things.'],
    stretch: ['I explain why shape does not decide agreement.', 'I switch correctly between people and things.'],
  },
  terms: {
    items: [
      { ar: 'غَيْرُ الْعَاقِلِ', en: 'non-human (things, animals)', note: 'كُتُبٌ · سَيَّارَاتٌ' },
      { ar: 'الْعَاقِلُ', en: 'human (people)', note: 'طُلَّابٌ · مُعَلِّمَاتٌ' },
      { ar: 'الْمُطَابَقَةُ', en: 'agreement', note: 'the matching words' },
      { ar: 'هَذِهِ', en: 'this (f.) / these (things)', tr: 'hādhihi', note: 'هَذِهِ الْكُتُبُ' },
      { ar: 'هِيَ', en: 'she / it / they (things)', tr: 'hiya', note: 'الْكُتُبُ … هِيَ' },
      { ar: 'مُفْرَدٌ مُؤَنَّثٌ', en: 'feminine singular', note: 'مُفِيدَةٌ · سَرِيعَةٌ' },
    ],
  },
  explain: [
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 1 · the agreement switch (website section)', title: 'Plural noun, feminine singular agreement', ar: 'التَّطَابُقُ مَعَ غَيْرِ الْعَاقِلِ',
      points: [
        'A non-human plural stays plural in MEANING — “books” is still many books.',
        'But the words that agree with it take the FEMININE SINGULAR form (website rule).',
        'Adjective: feminine singular, like a word ending in tāʾ marbūṭa.',
        'Demonstrative and pronoun: “this (f.)” and “she” — not “these (people)” or “they”.',
        'Verb: the feminine singular form with -at, as if the subject were “she”.',
      ],
      examples: [
        { ar: 'الْكُتُبُ مُفِيدَةٌ.', en: 'The books are useful.', note: 'adjective' },
        { ar: 'هَذِهِ الْبُيُوتُ جَدِيدَةٌ.', en: 'These houses are new.', note: 'demonstrative' },
        { ar: 'هِيَ جَمِيلَةٌ.', en: 'They (the houses) are beautiful.', note: 'pronoun' },
        { ar: 'وَصَلَتِ الْحَافِلَاتُ.', en: 'The buses arrived.', note: 'verb' },
      ],
      callout: { text: 'Website: think in two layers — noun number = plural; agreement package = feminine singular.' },
      notes: 'PART 1 (3 min) — website section “The agreement switch”. Hold up two hands: left hand “the noun: plural”, right hand “everything else: she”.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · human versus non-human (website table)', title: 'The full agreement package', ar: 'الْعَاقِلُ وَغَيْرُ الْعَاقِلِ', ltr: true,
      cols: [{ label: 'Plural', w: 2.6, size: 24 }, { label: 'Type', w: 2.4 }, { label: 'Adjective', w: 2.5, size: 22 }, { label: 'These', w: 2.4, size: 22 }, { label: 'They', w: 2.43, size: 22 }],
      rows: [
        { core: true, cells: ['الطُّلَّابُ', 'human (m.)', 'مُجْتَهِدُونَ', 'هَؤُلَاءِ', 'هُمْ'] },
        { core: true, cells: ['الطَّالِبَاتُ', 'human (f.)', 'مُجْتَهِدَاتٌ', 'هَؤُلَاءِ', 'هُنَّ'] },
        { core: true, cells: ['الْكُتُبُ', 'non-human', 'مُفِيدَةٌ', 'هَذِهِ', 'هِيَ'] },
        { core: true, cells: ['السَّيَّارَاتُ', 'non-human', 'سَرِيعَةٌ', 'هَذِهِ', 'هِيَ'] },
        { cells: ['الْمَدَارِسُ', 'non-human', 'كَبِيرَةٌ', 'هَذِهِ', 'هِيَ'] },
      ],
      foot: 'Website warning: do not decide from the plural SHAPE. Schools (broken) and cars (sound -āt) both take feminine singular because both are things.',
      notes: 'PART 2 (3 min) — website table “Human versus non-human”, with the schools row added from the website warning. Cover the last three columns and ask students to rebuild them.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 3 · the verb · Develop / Stretch', title: 'Verbs with non-human plurals', ar: 'الْفِعْلُ مَعَ غَيْرِ الْعَاقِلِ', ltr: true,
      cols: [{ label: 'Meaning', w: 3.8 }, { label: 'Arabic', w: 4.6, size: 24 }, { label: 'Why', w: 3.93 }],
      rows: [
        { core: true, cells: ['The buses arrived.', 'وَصَلَتِ الْحَافِلَاتُ.', 'things → verb like “she arrived”'] },
        { core: true, cells: ['The schools were opened.', 'فُتِحَتِ الْمَدَارِسُ.', 'website example'] },
        { cells: ['The planes land here.', 'تَهْبِطُ الطَّائِرَاتُ هُنَا.', 'present: the “she” form'] },
        { cells: ['The students arrived.', 'وَصَلَ الطُّلَّابُ.', 'people: verb before subject stays singular (GM-VS)'] },
      ],
      foot: 'For things, the verb is ALWAYS the feminine singular form — before or after the noun.',
      notes: 'PART 3 (2 min) — website “Verb” box, extended. The last row previews verbal-sentence agreement; do not dwell on it with Core.',
    },
  ],
  quickQuiz: /Guided/i, quickPick: [0, 1, 2, 3], quickNote: 'website guided mini-check, questions 1–4.',
  ido: {
    title: 'Watch me build the agreement package',
    steps: [
      { head: 'Noun', ar: 'الْحَدَائِقُ', think: 'Plural. A person? No.' },
      { head: 'Adjective', ar: 'الْحَدَائِقُ جَمِيلَةٌ', think: 'Feminine singular.' },
      { head: 'These', ar: 'هَذِهِ الْحَدَائِقُ', think: 'Like “this (f.)”.' },
      { head: 'Verb', ar: 'فُتِحَتِ الْحَدَائِقُ', think: 'Verb like “she”.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'NON-HUMAN PLURAL', e: 'FEMININE SINGULAR' },
    model: '{e|هَذِهِ} {k|الْحَدَائِقُ} {e|جَمِيلَةٌ}، وَ{e|هِيَ} قَرِيبَةٌ مِنْ بَيْتِي. {e|فُتِحَتِ} {k|الْحَدَائِقُ} صَبَاحًا.',
    modelEn: 'These gardens are beautiful, and they are near my house. The gardens were opened in the morning.',
    notes: 'Narrate the question every time: “Is it a person? No — so she, this (f.), -at.” Then contrast orally: هَؤُلَاءِ الطُّلَّابُ مُجْتَهِدُونَ.',
  },
  models: [
    { ar: 'السَّيَّارَاتُ فِي الشَّارِعِ سَرِيعَةٌ.', en: 'The cars in the street are fast.', tip: 'Sound -āt plural, still singular agreement.' },
    { ar: 'هَذِهِ الْكُتُبُ مُفِيدَةٌ جِدًّا.', en: 'These books are very useful.', tip: 'Demonstrative + adjective.' },
    { ar: 'وَصَلَتِ الْحَافِلَاتُ مُتَأَخِّرَةً.', en: 'The buses arrived late.', tip: 'Verb with -at.' },
    { ar: 'عِنْدِي قِطَطٌ، وَهِيَ صَغِيرَةٌ.', en: 'I have cats, and they are small.', tip: 'Animals are non-human too.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · person or not?', title: 'Which agreement?', ar: 'صَنِّفْ',
      categories: ['Plural agreement (people)', 'Feminine singular (things / animals)'],
      items: [['الْمُعَلِّمُونَ', 0], ['الْأَقْلَامُ', 1], ['الطَّالِبَاتُ', 0], ['السَّيَّارَاتُ', 1], ['الرِّجَالُ', 0], ['الْغُرَفُ', 1], ['الْأَطْفَالُ', 0], ['الْقِطَطُ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type P or T. Trap pairs: الطَّالِبَاتُ and السَّيَّارَاتُ look alike (-āt) but go to different boxes.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'We do · complete the package · say it aloud', title: 'Fill in the agreement', ar: 'أَكْمِلِ الْمُطَابَقَةَ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Noun', w: 2.8, size: 24 }, { label: 'These …', w: 3.0, size: 22 }, { label: '… are big', w: 3.0, size: 22 }, { label: 'They …', w: 3.53, size: 22 }],
      rows: [
        { core: true, cells: ['الْبُيُوتُ', 'هَذِهِ الْبُيُوتُ', 'كَبِيرَةٌ', 'هِيَ'] },
        { core: true, cells: ['الْمُهَنْدِسُونَ', 'هَؤُلَاءِ الْمُهَنْدِسُونَ', 'كِبَارٌ', 'هُمْ'] },
        { core: true, cells: ['الْمَسَاجِدُ', 'هَذِهِ الْمَسَاجِدُ', 'كَبِيرَةٌ', 'هِيَ'] },
        { cells: ['الْمُعَلِّمَاتُ', 'هَؤُلَاءِ الْمُعَلِّمَاتُ', 'كَبِيرَاتٌ', 'هُنَّ'] },
        { cells: ['الطَّائِرَاتُ', 'هَذِهِ الطَّائِرَاتُ', 'كَبِيرَةٌ', 'هِيَ'] },
      ],
      foot: 'Reveal one row at a time. People → these (people), plural adjective, they (m./f.). Things → this (f.), feminine singular, she.',
      notes: 'WE DO (2 min). For the engineers row, kibār is the broken plural of big (teacher-taught); Core may say kabīrūn — praise the agreement, then model kibār.',
    },
  ],
  mistakes: [
    { wrong: 'السَّيَّارَاتُ سَرِيعَاتٌ.', right: 'السَّيَّارَاتُ سَرِيعَةٌ.', why: 'Cars are things → feminine singular.' },
    { wrong: 'هَؤُلَاءِ الْكُتُبُ', right: 'هَذِهِ الْكُتُبُ', why: 'Things take the feminine singular demonstrative.' },
    { wrong: 'وَصَلُوا الْحَافِلَاتُ.', right: 'وَصَلَتِ الْحَافِلَاتُ.', why: 'Verb with things → feminine singular.' },
  ],
  hints: ['Are cars people?', 'Which “these” for things?', 'Which verb form for things?'],
  practiceQuiz: /Mastery/i, practicePick: [4, 5, 6, 7], practiceLabel: 'website mastery check questions 5–8',
  read: {
    title: 'Our school', label: 'website read-and-notice text, extended by the teacher',
    text: 'فِي مَدْرَسَتِنَا طَالِبَانِ جَدِيدَانِ وَمُعَلِّمَاتٌ خَبِيرَاتٌ. الْفُصُولُ وَاسِعَةٌ، وَمَكْتَبُ مُدِيرِ الْمَدْرَسَةِ قَرِيبٌ مِنَ الْمَدْخَلِ. فِي السَّاحَةِ أَشْجَارٌ عَالِيَةٌ، وَهِيَ جَمِيلَةٌ فِي الرَّبِيعِ. تَصِلُ الْحَافِلَاتُ فِي السَّاعَةِ الثَّامِنَةِ، وَيَنْزِلُ الطُّلَّابُ مِنْهَا.',
    glossary: [['الْفُصُولُ', 'the classrooms'], ['وَاسِعَةٌ', 'spacious'], ['السَّاحَةِ', 'the playground'], ['أَشْجَارٌ', 'trees'], ['عَالِيَةٌ', 'tall'], ['تَصِلُ', 'arrive(s)'], ['يَنْزِلُ', 'get(s) off'], ['مِنْهَا', 'from them (the buses)']],
    task: 'Website: underline every plural; circle the words that agree with it and say whether they are plural or feminine singular.',
    questions: [
      q('What does هِيَ refer to in the third sentence?', ['the trees', 'the teachers', 'the playground'], 'Non-human plural → she.'),
      q('Why is it تَصِلُ (the “she” form)?', ['Buses are things.', 'Buses are feminine people.', 'It is a mistake.'], 'Verb with things → feminine singular.'),
      q('Why is it خَبِيرَاتٌ (plural)?', ['It describes women teachers.', 'It describes classrooms.', 'It describes trees.'], 'Human → plural.'),
      q('Which word agrees with الْفُصُولُ?', ['وَاسِعَةٌ', 'خَبِيرَاتٌ', 'جَدِيدَانِ'], 'Feminine singular after a non-human plural.'),
    ],
    qNote: 'The first two sentences are the website text; the rest is teacher-written to practise the agreement package. Questions teacher-written.',
  },
  speak: {
    title: 'Speaking: describe your street', source: 'website task “speak and transform”',
    prompts: [
      { route: 'core', ar: 'كَيْفَ الْبُيُوتُ فِي شَارِعِكَ؟' },
      { route: 'develop', ar: 'صِفِ السَّيَّارَاتِ وَالْأَشْجَارَ فِي حَيِّكَ.' },
      { route: 'stretch', ar: 'قَارِنْ: الطُّلَّابُ فِي مَدْرَسَتِكَ وَالْفُصُولُ.' },
    ],
    stems: [
      { route: 'core', ar: 'الْبُيُوتُ فِي شَارِعِي ______ .' },
      { route: 'develop', ar: 'هَذِهِ السَّيَّارَاتُ ______ ، وَهِيَ ______ .' },
      { route: 'stretch', ar: 'الطُّلَّابُ ______ ، لَكِنَّ الْفُصُولَ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'كَيْفَ الْبُيُوتُ فِي شَارِعِكَ؟', en: 'What are the houses like in your street?' },
      { who: 'B', ar: 'الْبُيُوتُ قَدِيمَةٌ، لَكِنَّهَا جَمِيلَةٌ. وَالْجِيرَانُ لُطَفَاءُ.', en: 'The houses are old, but they are beautiful. And the neighbours are kind.' },
    ],
    notes: 'Website: choose five nouns, then use each in a sentence. Model answer contrasts things (لَكِنَّهَا جَمِيلَةٌ — “she”) with people (الْجِيرَانُ لُطَفَاءُ — plural).',
  },
  write: {
    siteTask: 'Write 8–12 connected sentences about your school, home or local area, using at least six target noun forms from this lesson.',
    core: { amount: '6 sentences', task: 'Six sentences: a non-human plural + feminine singular adjective.', how: 'Ask “is it a person?” each time.' },
    develop: { amount: '8 sentences', task: 'Add these (f.), she and a verb with -at.', how: 'Use the agreement-package table.' },
    stretch: { amount: '8–12 sentences', task: 'Website task, contrasting people and things in the same paragraph.', how: 'At least two people plurals and four thing plurals.' },
  },
  frames: {
    core: [
      { en: 'The books are …', ar: 'الْكُتُبُ ______ .' },
      { en: 'The cars in my street are …', ar: 'السَّيَّارَاتُ فِي شَارِعِي ______ .' },
      { en: 'The classrooms are …', ar: 'الْفُصُولُ ______ .' },
      { en: 'The gardens are …', ar: 'الْحَدَائِقُ ______ .' },
    ],
    develop: [
      { en: 'These houses are …', ar: 'هَذِهِ الْبُيُوتُ ______ .' },
      { en: 'I have pens, and they are …', ar: 'عِنْدِي أَقْلَامٌ، وَهِيَ ______ .' },
      { en: 'The buses arrived …', ar: 'وَصَلَتِ الْحَافِلَاتُ ______ .' },
      { en: 'The students are …, but the rooms are …', ar: 'الطُّلَّابُ ______ ، لَكِنَّ الْغُرَفَ ______ .' },
    ],
    bank: ['جَدِيدَةٌ', 'قَدِيمَةٌ', 'كَبِيرَةٌ', 'صَغِيرَةٌ', 'جَمِيلَةٌ', 'سَرِيعَةٌ', 'مُفِيدَةٌ', 'وَاسِعَةٌ', 'نَظِيفَةٌ', 'هَذِهِ', 'هِيَ', 'مُجْتَهِدُونَ', 'لُطَفَاءُ'],
  },
  stretchTask: {
    task: 'Website writing workshop: 8–12 connected sentences about your school, home or local area with at least six target noun forms.',
    checklist: ['Four non-human plurals with feminine singular adjectives.', 'One “these (f.)” + non-human plural.', 'One “she” referring to a non-human plural.', 'One feminine singular verb with a non-human plural.', 'Two human plurals with plural agreement for contrast.'],
    phrases: [['هَذِهِ الْبُيُوتُ قَدِيمَةٌ', 'these houses are old'], ['وَهِيَ جَمِيلَةٌ', 'and they are beautiful'], ['وَصَلَتِ الْحَافِلَاتُ', 'the buses arrived'], ['الْفُصُولُ وَاسِعَةٌ', 'the classrooms are spacious'], ['الطُّلَّابُ مُجْتَهِدُونَ', 'the students are hard-working'], ['الْجِيرَانُ لُطَفَاءُ', 'the neighbours are kind']],
  },
  model: {
    text: 'أَسْكُنُ فِي حَيٍّ هَادِئٍ. الْبُيُوتُ فِي شَارِعِنَا قَدِيمَةٌ، لَكِنَّهَا جَمِيلَةٌ. أَمَامَ بَيْتِي أَشْجَارٌ عَالِيَةٌ، وَهِيَ خَضْرَاءُ فِي الصَّيْفِ. تَمُرُّ الْحَافِلَاتُ كُلَّ صَبَاحٍ، وَهِيَ مُزْدَحِمَةٌ. الْجِيرَانُ لُطَفَاءُ، وَهُمْ يُسَاعِدُونَنَا دَائِمًا.',
    en: 'I live in a quiet neighbourhood. The houses in our street are old, but they are beautiful. In front of my house there are tall trees, and they are green in summer. The buses pass every morning, and they are crowded. The neighbours are kind, and they always help us.',
    find: ['non-human plurals', 'fem. sing. adjectives', 'هِيَ for things', 'people: plural'],
    source: 'teacher model on the website writing workshop',
  },
  selfCheck: [
    { route: 'core', text: 'Every thing-plural has a feminine singular adjective.' },
    { route: 'core', text: 'I asked “is it a person?” before choosing agreement.' },
    { route: 'develop', text: 'I used “these (f.)” and “she” for things.' },
    { route: 'develop', text: 'My verbs with things use the “she” form.' },
    { route: 'stretch', text: 'People in my text keep plural agreement.' },
  ],
  exit: [
    q('Complete: الْغُرَفُ ______ .', ['نَظِيفَةٌ', 'نَظِيفُونَ', 'نَظِيفَاتٌ'], 'Rooms are things.'),
    q('Choose “these cars”.', ['هَذِهِ السَّيَّارَاتُ', 'هَؤُلَاءِ السَّيَّارَاتُ', 'هَذَا السَّيَّارَاتُ'], 'Things → feminine singular demonstrative.'),
    q('Choose the correct sentence.', ['الْمُهَنْدِسُونَ مَشْغُولُونَ.', 'الْمُهَنْدِسُونَ مَشْغُولَةٌ.', 'الْمُهَنْدِسُونَ مَشْغُولٌ.'], 'People → plural.'),
  ],
  mastery: false,
  prep: {
    words: [['الْإِضَافَةُ', 'iḍāfa (possessive structure)', '—'], ['مُضَافٌ', 'first noun (the thing owned)', '—'], ['مُضَافٌ إِلَيْهِ', 'second noun (the owner)', '—'], ['بَابُ الْبَيْتِ', 'the door of the house', '—'], ['كِتَابُ الطَّالِبِ', 'the student’s book', '—']],
    questionEn: 'In “the door of the house”, the first noun has no “al-”. Why do you think it doesn’t need one?',
    questionAr: 'بَابُ الْبَيْتِ · ______ الْمَدْرَسَةِ',
    homework: {
      core: 'Write ten noun + adjective pairs for things in your home.',
      develop: 'Write eight sentences using these (f.), she and a verb with things.',
      stretch: 'Website writing workshop contrasting people and things.',
    },
    wordsSource: 'The five words prepare GM-N-07 (website Nouns lesson 7: iḍāfa).',
  },
  remember: 'Remember: is it a person? No → feminine singular: adjective, these (f.), she, verb with -at · people keep plural agreement · the shape never decides.',
});

module.exports = { meta, slides };
