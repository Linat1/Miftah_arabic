'use strict';
/* D5-L03 · The Past Tense — Form I Regular Singular Verbs — website: Pathways › Development › D5 › D5-L03 (singular past suffixes: هُوَ فَعَلَ · هِيَ فَعَلَتْ ·
 * أَنَا فَعَلْتُ · أَنْتَ فَعَلْتَ · أَنْتِ فَعَلْتِ; فَعَلَ / فَعِلَ patterns; past time expressions first).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing and visual game used as published. In this lesson
 * the quiz options DO differ only in short vowels — that is the skill being taught — so they are kept and shown large; English added to the patterns. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D5')({
  n: 3, fileTitle: 'Past_Tense_Form_I_Singular', chip: 'Grammar',
  title: 'The Past Tense — Form I Regular Singular Verbs', arabic: 'الفِعْلُ المَاضِي — المُفْرَدُ',
  focus: 'Say what you, he, she and “you” did: one root, five endings (ذَهَبْتُ · ذَهَبْتَ · ذَهَبْتِ · ذَهَبَ · ذَهَبَتْ) — and open the sentence with a past time expression (أَمْسِ · الأُسْبُوعَ المَاضِيَ · مُنْذُ أُسْبُوعٍ).',
  icon: 'FaClockRotateLeft', iconSet: 'fa6',
});

const site = D.site('D5-L03');
const vf = (i, she) => ({ tag: 'I · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D5-L03', {
  support: `• Core: أَنَا and هِيَ / هُوَ forms of six verbs (ذَهَبْتُ · ذَهَبَ · ذَهَبَتْ) + أَمْسِ at the start. Develop: all five singular forms, including أَنْتَ / أَنْتِ in questions, and the فَعِلَ verbs (لَعِبَ · شَرِبَ · سَمِعَ). Stretch: the website ten-sentence task with four time expressions, and present / past / future of one verb.
• The key idea: the ROOT never changes; the ENDING says who. ـْتُ / ـْتَ / ـْتِ share the same letters — only the final vowel differs, so students MUST write it (these quiz items deliberately differ only in vowels).
• Past forms met as chunks in D5-L02 (فَازَ · خَسِرَ) now become a system. D5-L04 adds نَحْنُ / أَنْتُمْ / هُمْ and irregular verbs.`,
  teach: 'One root, five endings; time expression first.',
  wedo: 'Sort verbs by person, fix person slips, then what everyone did yesterday.',
  next: { nextCode: 'D5-L04', nextTitle: 'Past Tense — Plural Forms and Irregular Verbs', nextAr: 'الفِعْلُ المَاضِي — الجَمْعُ وَالأَفْعَالُ الشَّاذَّةُ' },
  objectives: ['Form the past tense for أَنَا · أَنْتَ · أَنْتِ · هُوَ · هِيَ.', 'Hear and write the final short vowel that shows the person.', 'Recognise the فَعَلَ and فَعِلَ patterns.', 'Open a sentence with a past time expression and keep the verb in the past.'],
  rulesAr: 'نِظَامُ لَوَاحِقِ الفِعْلِ المَاضِي',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does أَمْسِ mean?', ['yesterday', 'tomorrow', 'today'], 'Prepared at home (D5-L02).'),
      q('What does الأُسْبُوعَ المَاضِيَ mean?', ['last week', 'next week', 'every week'], 'Prepared at home (D5-L02).'),
      q('ذَهَبَ means …', ['he went', 'he goes', 'he will go'], 'Prepared at home (D5-L02).'),
      q('فَازَتِ البَطَلَةُ — who won?', ['she (the champion)', 'he', 'I'], 'D5-L02: the -at ending.'),
      q('Choose the accurate sentence.', ['فَازَ الفَرِيقُ بِالبُطُولَةِ.', 'فَازَ الفَرِيقُ عَلَى البُطُولَةِ.', 'فَازَ الفَرِيقُ إِلَى البُطُولَةِ.'], 'D5-L02.'),
    ],
    keyIdea: { text: 'The root stays, the ending moves — and the ending tells you WHO.', ar: '{e|لَعِبْتُ} · {e|لَعِبْتَ} · {e|لَعِبْتِ} · لَعِبَ · {e|لَعِبَتْ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D5-L02. Questions 4–5 retrieve D5-L02 (فَازَتْ · فَازَ بِـ) — the past forms students already know as chunks.',
  },
  routes: {
    core: ['I can say what I did (ذَهَبْتُ).', 'I can say what he / she did (ذَهَبَ / ذَهَبَتْ).'],
    develop: ['I can ask “did you …?” to a boy and a girl.', 'I can use فَعِلَ verbs (لَعِبَ · شَرِبَ).'],
    stretch: ['I can write ten past sentences with four time expressions.', 'I can give present, past and future of one verb.'],
  },
  bridge: [
    { ar: 'مَاضٍ / المَاضِي', urdu: 'ماضی', tr: 'māzī', en: 'the past' },
    { ar: 'فِعْلٌ', urdu: 'فعل', tr: 'feʿl', en: 'a verb' },
    { ar: 'لَاحِقَةٌ', urdu: 'لاحقہ', tr: 'lāḥiqa', en: 'a suffix' },
    { ar: 'جَذْرٌ', urdu: 'جڑ', tr: 'jaṛ', en: 'root (sound-alike)' },
    { ar: 'أَمْسِ', urdu: 'کل', tr: 'kal', en: 'yesterday (Urdu کل = yesterday OR tomorrow)' },
  ],
  bridgeNotes: 'URDU BRIDGE: ماضی، فعل، لاحقہ are the same grammar words used in Urdu grammar (ماضی مطلق = simple past). CAREFUL: Urdu کل means both yesterday and tomorrow — Arabic has two words: أَمْسِ (yesterday) and غَدًا (tomorrow).',
  core: ['الفِعْلُ المَاضِي', 'ذَهَبَ', 'لَعِبَ', 'شَاهَدَ', 'أَكَلَ', 'كَتَبَ', 'قَرَأَ', 'رَسَمَ', 'خَرَجَ', 'أَمْسِ', 'الأُسْبُوعَ المَاضِيَ', 'مُنْذُ أُسْبُوعٍ'],
  forms: {
    'ذَهَبَ': vf('ذَهَبْتُ', 'ذَهَبَتْ'), 'لَعِبَ': vf('لَعِبْتُ', 'لَعِبَتْ'), 'شَاهَدَ': vf('شَاهَدْتُ', 'شَاهَدَتْ'), 'أَكَلَ': vf('أَكَلْتُ', 'أَكَلَتْ'),
    'كَتَبَ': vf('كَتَبْتُ', 'كَتَبَتْ'), 'قَرَأَ': vf('قَرَأْتُ', 'قَرَأَتْ'), 'رَسَمَ': vf('رَسَمْتُ', 'رَسَمَتْ'), 'طَبَخَ': vf('طَبَخْتُ', 'طَبَخَتْ'),
    'وَصَلَ': vf('وَصَلْتُ', 'وَصَلَتْ'), 'خَرَجَ': vf('خَرَجْتُ', 'خَرَجَتْ'), 'سَمِعَ': vf('سَمِعْتُ', 'سَمِعَتْ'), 'شَرِبَ': vf('شَرِبْتُ', 'شَرِبَتْ'),
  },
  vocabNotes: {
    0: 'Talking about the past tense: the grammar words we use today (root, suffix, pattern).',
    1: 'Past-tense verbs. The card shows “he” (the dictionary form) with I and she underneath. فَعِلَ verbs keep a KASRA in the middle: لَعِبَ · سَمِعَ · شَرِبَ.',
    2: 'When it happened: put these FIRST in the sentence. After فِي and قَبْلَ / مُنْذُ the noun is genitive (قَبْلَ شَهْرٍ).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · five singular endings (website rules 1–3)', title: 'One root, five endings', ar: 'جَذْرٌ وَاحِدٌ، خَمْسُ لَوَاحِقَ',
      cols: [{ label: 'Person', w: 1.9, size: 22 }, { label: 'ذَهَبَ (went)', w: 2.7, size: 26 }, { label: 'لَعِبَ (played)', w: 2.7, size: 26 }, { label: 'شَاهَدَ (watched)', w: 2.7, size: 26 }, { label: 'Ending', w: 2.33 }],
      rows: [
        { core: true, cells: ['أَنَا', '{e|ذَهَبْتُ}', '{e|لَعِبْتُ}', '{e|شَاهَدْتُ}', 'I: -tu'] },
        { cells: ['أَنْتَ', '{k|ذَهَبْتَ}', '{k|لَعِبْتَ}', '{k|شَاهَدْتَ}', 'you (m.): -ta'] },
        { cells: ['أَنْتِ', '{w|ذَهَبْتِ}', '{w|لَعِبْتِ}', '{w|شَاهَدْتِ}', 'you (f.): -ti'] },
        { core: true, cells: ['هُوَ', 'ذَهَبَ', 'لَعِبَ', 'شَاهَدَ', 'he: no ending'] },
        { core: true, cells: ['هِيَ', '{e|ذَهَبَتْ}', '{e|لَعِبَتْ}', '{e|شَاهَدَتْ}', 'she: -at'] },
      ],
      ltr: true,
      foot: 'I / you (m.) / you (f.): the same letters — only the LAST vowel (-tu · -ta · -ti) shows the person. Always write it.',
      notes: `GRAMMAR PART 1 — website rules “هُوَ and هِيَ” (the هُوَ form is the bare past; هِيَ adds ـَتْ with a sukūn), “أَنَا” (the tāʾ carries a ḍamma; the letter before it takes a sukūn) and “أَنْتَ and أَنْتِ” (same consonants; a fatḥa addresses a male, a kasra a female). Website teaching point: “Three short vowels do the hardest work.”
Drill: teacher says a person, students chorus the form (أَنَا → لَعِبْتُ …). Core: أَنَا · هُوَ · هِيَ rows only.
Pattern note: لَعِبَ is a فَعِلَ verb (kasra in the middle) — the endings are identical.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · time first, verb in the past (website rule 4) · Develop / Stretch', title: 'When did it happen?', ar: 'مَتَى حَدَثَ؟',
      cards: [
        { chip: 'TIME FIRST · CORE', color: '1E6B52', head: 'أَمْسِ لَعِبْتُ', big: 'أَمْسِ لَعِبْتُ كُرَةَ القَدَمِ.', en: 'Yesterday I played football.', clue: 'Time, then verb.' },
        { chip: 'ASK A FRIEND · DEVELOP', color: '1D5FBF', head: 'شَاهَدْتَ · شَاهَدْتِ', big: 'هَلْ شَاهَدْتِ المُبَارَاةَ يَا سَلْمَى؟', en: 'Did you watch the match, Salma?', clue: 'A girl: -ti.' },
        { chip: 'AGO · STRETCH', color: '6B4C9A', head: 'مُنْذُ أُسْبُوعٍ · قَبْلَ شَهْرٍ', big: 'قَرَأْتُ الكِتَابَ مُنْذُ أُسْبُوعٍ.', en: 'I read the book a week ago.', clue: 'Genitive after mundhu.' },
      ],
      error: { text: 'Website mistake: Salma is “she” — use the -at ending.', pairs: [['سَلْمَى لَعِبَتْ كُرَةَ السَّلَّةِ.', 'سَلْمَى لَعِبْتُ كُرَةَ السَّلَّةِ.']] },
      notes: `GRAMMAR PART 2 — website rule “Past time expressions come first” (Arabic normally opens the sentence with the past time expression; the verb stays in the past whatever the expression). Website mistakes: أَمْسِ أَذْهَبُ ✗ → أَمْسِ ذَهَبْتُ · هَلْ شَاهَدْتَ المُبَارَاةَ يَا سَلْمَى ✗ → شَاهَدْتِ.
Stretch (website quiz 8): three tenses of one verb — تَسْبَحُ / سَبَحَتْ / سَتَسْبَحُ.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me tell you about yesterday',
    steps: [
      { head: 'Time first', ar: '{k|أَمْسِ}', think: 'Past time word.' },
      { head: 'I did', ar: '{e|ذَهَبْتُ} إِلَى النَّادِي', think: 'I: -tu.' },
      { head: 'She did', ar: 'سَلْمَى {w|رَسَمَتْ} لَوْحَةً', think: 'She: -at.' },
      { head: 'Ask him', ar: 'هَلْ {e|قَرَأْتَ} الكِتَابَ؟', think: 'You (m.): -ta.' },
    ],
    legend: ['k', 'e', 'w'], legendLabels: { k: 'TIME', e: 'I / YOU', w: 'SHE' },
    model: '{k|أَمْسِ} {e|ذَهَبْتُ} إِلَى المَكْتَبَةِ {e|وَقَرَأْتُ} كِتَابًا مُمْتِعًا. {k|الأُسْبُوعَ المَاضِيَ} {e|شَاهَدْتُ} فِيلْمًا طَوِيلًا مَعَ أَصْدِقَائِي. أَمَّا أَخِي فَقَدْ لَعِبَ كُرَةَ القَدَمِ، وَأُخْتِي {w|رَسَمَتْ} لَوْحَةً جَمِيلَةً.',
    modelEn: 'Yesterday I went to the library and read an enjoyable book. Last week I watched a long film with my friends. As for my brother, he played football, and my sister drew a beautiful picture.',
    notes: 'I DO (3 min) — think aloud from the website writing model: “Who did it? Which ending? Did I write the last vowel?” Point to each coloured ending in the copy box.',
  },
  patternEn: ['I played / you (m.) played / you (f.) played', 'Salma played', 'Yesterday I went to the club'],
  game: {
    title: 'What did I do? Match the picture',
    pick: [0, 2, 5],
    en: ['I played football yesterday.', 'I travelled to Egypt last summer.', 'I swam in the sea.'],
    icons: [[['fa6', 'FaFutbol', '1E2B3C'], ['fa6', 'FaCalendarDay', 'C0386B']], [['fa6', 'FaPlane', '1D5FBF'], ['fa6', 'FaSun', 'C77700']], [['fa6', 'FaPersonSwimming', '1E7B9F'], ['fa6', 'FaWater', '1D5FBF']]],
    labels: ['football, yesterday', 'a plane, summer', 'swimming, the sea'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Then change the person: لَعِبَتْ سَلْمَى … · هَلْ سَافَرْتَ …؟ · هَلْ سَبَحْتِ …؟ Other website cards: قَرَأْتُ كِتَابًا · تَنَاوَلْنَا العَشَاءَ مَعًا · شَاهَدْنَا فِيلْمًا (the نَحْنُ forms are D5-L04).',
  },
  sorterNotes: 'Then turn each column into the هُوَ form aloud: ذَهَبَ · لَعِبَ · شَاهَدَ.',
  hints: ['After amsi: past or present?', 'Salma: which ending?', 'A girl: -ta or -ti?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 5.\nWho? I (Yusuf) · Salma · Mum.',
  listenRoutes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 5 — and list every past verb you hear by person.',
  gloss: [
    ['أَمْسِ ذَهَبْتُ إِلَى النَّادِي وَلَعِبْتُ كُرَةَ السَّلَّةِ مَعَ أَصْدِقَائِي.', 'Yesterday I went to the club and played basketball with my friends.'],
    ['وَبَعْدَ ذٰلِكَ رَجَعْتُ إِلَى البَيْتِ وَطَبَخْتُ العَشَاءَ.', 'After that I went back home and cooked dinner.'],
    ['أَمَّا أُخْتِي سَلْمَى فَقَدْ رَسَمَتْ لَوْحَةً جَمِيلَةً، ثُمَّ خَرَجَتْ مَعَ صَدِيقَتِهَا.', 'As for my sister Salma, she drew a beautiful picture, then went out with her friend.'],
    ['وَفِي المَسَاءِ شَاهَدْنَا فِيلْمًا مَعًا.', 'In the evening we watched a film together.'],
    ['وَقَالَتْ لِي أُمِّي: هَلْ قَرَأْتَ الكِتَابَ يَا يُوسُفُ؟ فَأَجَبْتُ: نَعَمْ، قَرَأْتُهُ مُنْذُ أُسْبُوعٍ.', 'My mother said to me: “Did you read the book, Yusuf?” I answered: “Yes, I read it a week ago.”'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَاذَا فَعَلْتَ فِي نِهَايَةِ الأُسْبُوعِ المَاضِي؟' },
      { route: 'develop', ar: 'مَاذَا فَعَلَتْ عَائِلَتُكَ فِي الإِجَازَةِ؟' },
      { route: 'stretch', ar: 'مَتَى قَرَأْتَ آخِرَ كِتَابٍ؟ وَهَلْ أَعْجَبَكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'فِي نِهَايَةِ الأُسْبُوعِ ذَهَبْتُ ______ وَ ______ .' },
      { route: 'develop', ar: 'أُخْتِي ______ـَتْ ، وَأَخِي ______ .' },
      { route: 'stretch', ar: 'قَرَأْتُ ______ مُنْذُ ______ ، وَأَعْجَبَنِي لِأَنَّ ______ .' },
    ],
    modelEn: ['What did you do yesterday?', 'Yesterday I went to the club and played basketball.'],
    notes: 'Website prompts and model (four lines: past question → أَنَا forms → switch person → هِيَ forms). Partner B must change person when asked about a sister. To a girl: مَاذَا فَعَلْتِ؟ · عَائِلَتُكِ · قَرَأْتِ.',
  },
  write: {
    core: { amount: '6 sentences', how: 'Three with أَنَا and three with هُوَ / هِيَ, each starting with a time word.' },
    develop: { amount: '8 sentences', how: 'A paragraph moving between أَنَا and هِيَ, plus one question to a friend (ـْتَ / ـْتِ).' },
    stretch: { amount: '10 sentences', how: 'Website task: 4 أَنَا · 3 هُوَ / هِيَ · 2 أَنْتَ / أَنْتِ · 1 مُنْذُ / قَبْلَ, a new verb each time.' },
  },
  frames: {
    core: [
      { en: 'Yesterday I went to …', ar: 'أَمْسِ ذَهَبْتُ إِلَى ______ .' },
      { en: 'Last week I watched …', ar: 'الأُسْبُوعَ المَاضِيَ شَاهَدْتُ ______ .' },
      { en: 'My brother played …', ar: 'أَخِي لَعِبَ ______ .' },
      { en: 'My sister drew …', ar: 'أُخْتِي رَسَمَتْ ______ .' },
    ],
    develop: [
      { en: 'Did you (m.) read …?', ar: 'هَلْ قَرَأْتَ ______ ؟' },
      { en: 'Did you (f.) watch …?', ar: 'هَلْ شَاهَدْتِ ______ ؟' },
      { en: 'A week ago I …', ar: 'مُنْذُ أُسْبُوعٍ ______ تُ ______ .' },
      { en: 'During the holiday she …', ar: 'فِي الإِجَازَةِ ______ تْ ______ .' },
    ],
    bank: ['ذَهَبْتُ', 'لَعِبْتُ', 'شَاهَدْتُ', 'قَرَأْتُ', 'كَتَبْتُ', 'طَبَخْتُ', 'رَسَمَتْ', 'خَرَجَتْ', 'أَمْسِ', 'الأُسْبُوعَ المَاضِيَ', 'مُنْذُ أُسْبُوعٍ', 'قَبْلَ شَهْرٍ'],
  },
  stretch: [
    ['فِي الصَّيْفِ المَاضِي سَافَرْتُ إِلَى …', 'last summer I travelled to …'],
    ['وَصَلْتُ مُبَكِّرًا', 'I arrived early'],
    ['أَمَّا أَخِي فَقَدْ …', 'as for my brother, he …'],
    ['أَسْبَحُ / سَبَحْتُ / سَأَسْبَحُ', 'I swim / swam / will swim'],
    ['مَا زِلْتُ أَتَذَكَّرُ', 'I still remember'],
  ],
  modelEn: 'Yesterday I went to the library and read an enjoyable book. Last week I watched a long film with my friends. During the holiday I cooked Arabic food with my mother. As for my brother, he played football, and my sister drew a beautiful picture. A week ago I arrived early at school, and a month ago I went out with my family to the park.',
  find: ['four أَنَا forms', 'one هُوَ and one هِيَ form', 'four time expressions', 'مُنْذُ or قَبْلَ + genitive'],
  modelNotes: 'Website writing model. Evidence: ذَهَبْتُ · قَرَأْتُ · شَاهَدْتُ · طَبَخْتُ · لَعِبَ · رَسَمَتْ · وَصَلْتُ · خَرَجْتُ; time: أَمْسِ · الأُسْبُوعَ المَاضِيَ · فِي الإِجَازَةِ · مُنْذُ أُسْبُوعٍ · قَبْلَ شَهْرٍ. Develop / Stretch: add two أَنْتَ / أَنْتِ questions to complete the website task.',
  selfCheck: [
    { route: 'core', text: 'Every verb is in the past.' },
    { route: 'core', text: 'I wrote -tu for “I” and -at for “she”.' },
    { route: 'develop', text: 'My questions use -ta (boy) and -ti (girl).' },
    { route: 'develop', text: 'Each sentence starts with a time expression.' },
    { route: 'stretch', text: 'I used ten different verbs and four time expressions.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['الإِجَازَةِ المَاضِيَةِ', 'the last holiday'], ['مَدِينَةٍ سَاحِلِيَّةٍ', 'a coastal city'], ['وَصَلْنَا', 'we arrived'], ['سَبَحْتُ', 'I swam'], ['الشَّاطِئِ', 'the beach'],
    ['كَتَبَتْ قِصَّةً', 'she wrote a story'], ['سَمَكًا طَازِجًا', 'fresh fish'], ['عُدْنَا', 'we returned'], ['مَا زِلْتُ أَتَذَكَّرُ', 'I still remember'], ['كَانَتْ مُمْتِعَةً', 'they were enjoyable'],
  ],
  prep: {
    words: [['ذَهَبْنَا', 'we went', 'ذَهَبُوا they went'], ['لَعِبُوا', 'they played', 'لَعِبْنَا we played'], ['قُلْنَا', 'we said', 'قَالَ he said'], ['رَأَيْنَا', 'we saw', 'رَأَى he saw'], ['مَعًا', 'together', '—']],
    questionEn: 'What did you and your family do together last weekend? Try “we …”.',
    questionAr: 'فِي نِهَايَةِ الأُسْبُوعِ ذَهَبْنَا …',
    homework: {
      core: 'Learn the five endings with ذَهَبَ and لَعِبَ; write six sentences from the frames.',
      develop: 'An 8-sentence paragraph with أَنَا, هِيَ and one question (ـْتَ / ـْتِ).',
      stretch: 'Website writing task: ten past sentences, ten verbs, four time expressions.',
    },
    wordsSource: 'The five words come from the website D5-L04 vocabulary (plural past forms and irregular verbs).',
  },
  remember: 'Remember: the root stays, the ending moves — ـْتُ I · ـْتَ you (m.) · ـْتِ you (f.) · ـَ he · ـَتْ she — and write the last vowel every time.',
});

module.exports = { meta, slides };
