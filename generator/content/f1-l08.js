'use strict';
/*
 * F1-L08 · From Marks to Meaning: Reading Aloud (the READ routine; graded strips; partner feedback)
 * Website: Pathways › Foundation › F1 › Lesson 8. Picture match: website lesson game (six picture words).
 */
const F = require('./f1-common');
const game = require('../site-data/pathway-visual-games.json')['f1-l08'];
const { q } = F;

const meta = F.meta({
  n: 8, fileTitle: 'Reading_Aloud_Decoding', chip: 'Reading aloud',
  title: 'From Marks to Meaning: Reading Aloud', arabic: 'القِرَاءَةُ الجَهْرِيَّةُ وَرَبْطُ الكِتَابَةِ بِالصَّوْتِ',
  focus: 'Use one reliable routine to read any fully vowelled word aloud: start at the Right edge, Extract the letters, Attach the marks, Draw them together — then read again more smoothly.',
  icon: 'FaBookOpenReader', level: 'Foundation · beginner',
});
const NEXT = { nextCode: 'F1-L09', nextTitle: 'Write Clearly, Then Fluently', nextAr: 'التَّدْرِيبُ عَلَى الكِتَابَةِ' };

const slides = [
  F.titleSlide({
    n: 8,
    source: 'The website lesson teaches the READ routine (Right edge · Extract letters · Attach marks · Draw together · Read again), a mark-to-sound reference, connected reading vs pause, graded reading strips (10 words · 8 phrases · 4 sentences), a personal fluency challenge and a partner evidence grid. All reading strips, the listening script, the three-word oral exit and the feedback phrases are the website’s; the picture match is the website game for this lesson.',
    support: `• CORE: single words (Level 1). DEVELOP: short phrases (Level 2), keeping word boundaries. STRETCH: short sentences (Level 3) with pauses and punctuation.
• Temporary support, then remove it (website): transliteration (ka-ta-ba) is shown only on answer and support slides — students cover it and reread from the Arabic.
• Accuracy first; smoothness on the second read. Timing is a personal baseline, never a race between students (website). Reading aloud is always by invitation — “pass” is allowed.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'The READ routine and the mark-to-sound scan.', wedo: 'Picture words, chunk choice, graded strips.', next: 'F1-L09' }),
  F.doNow({
    questions: [
      q('Which digit is 7?', ['٧', '٨', '٦'], 'F1-L07: the open V.'),
      q('What is ١٥?', ['15', '51', '5'], 'F1-L07: tens on the left.'),
      q('How do you say 10?', ['عَشَرَةٌ', 'عِشْرُونَ', 'وَاحِدٌ'], 'F1-L07.'),
      q('Which word means “he wrote” (prepared at home)?', ['كَتَبَ', 'قَرَأَ', 'دَرَسَ'], 'Prepared at home: كَتَبَ kataba.'),
      q('Which word means “he read” (prepared at home)?', ['قَرَأَ', 'كَتَبَ', 'جَلَسَ'], 'Prepared at home: قَرَأَ qaraʾa.'),
    ],
    keyIdea: { text: 'Accuracy first. Smoothness comes on the second read.', ar: 'كَ + تَ + بَ ← كَتَبَ' },
    retrieves: 'Questions 1–3 are the website numeral retrieval (say each answer aloud before choosing). Questions 4–5 test the home preparation.',
  }),
  F.objectivesSlide([
    'Explain the five steps of the READ routine.',
    'Attach every mark to its letter.',
    'Blend chunks without adding extra vowels.',
    'Read a word, phrase or sentence aloud accurately.',
  ], {
    core: ['I can read fully vowelled single words (Level 1).', 'I can explain the READ steps.'],
    develop: ['I can read short phrases (Level 2).', 'I can read sukūn and shadda without an extra vowel.'],
    stretch: ['I can read short sentences with pauses (Level 3).', 'I can give a partner one precise repair cue.'],
  }, 2, 'Objectives and routes are the website F1-L08 outcomes (Core · Develop · Stretch · Heritage).'),
  F.keywordsSlide({
    text: 'One routine (5 steps), 10 verbs, 8 phrases and 4 sentences — all fully vowelled.',
    groups: [
      { head: 'ROUTINE', name: 'R · E · A · D · ↻' },
      { head: 'LEVEL 1', name: 'Words · 10' },
      { head: 'LEVEL 2', name: 'Phrases · 8' },
      { head: 'LEVEL 3', name: 'Sentences · 4' },
    ],
    bridge: [
      { ar: 'قَرَأَ', urdu: 'قراءت', tr: 'qirāʾat', en: 'recitation → he read' },
      { ar: 'كِتَابٌ', urdu: 'کتاب', tr: 'kitāb', en: 'book' },
      { ar: 'مَكْتَبٌ', urdu: 'مکتب', tr: 'maktab', en: 'school (Urdu) · desk, office' },
      { ar: 'مُعَلِّمٌ', urdu: 'معلم', tr: 'muʿallim', en: 'teacher' },
      { ar: 'مَدْرَسَةٌ', urdu: 'مدرسہ', tr: 'madrasa', en: 'school' },
    ],
    notes: 'URDU BRIDGE: many of today’s reading words are also Urdu words — قراءت (recitation), کتاب, مکتب (Urdu: a school; Arabic: a desk/office), معلم, مدرسہ. Warn heritage readers: familiarity can lead to reading from memory instead of the marks — use the READ routine anyway (website Heritage route).',
  }),
  {
    type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Teacher instruction · the READ routine (website Part 1)', title: 'Five steps to read any word', ar: 'خُطُوَاتُ فَكِّ الرُّمُوزِ',
    cols: [{ label: 'Step', w: 2.3 }, { label: 'What to do', w: 5.2 }, { label: 'كَتَبَ — think aloud', w: 4.83 }],
    rows: [
      { core: true, cells: ['R · Right edge', 'Find the first letter on the RIGHT. Look at the whole word first.', 'Begin with ك, not ب.'] },
      { core: true, cells: ['E · Extract letters', 'Name the base letters; notice breaks and hamza shapes.', 'ك ← ت ← ب'] },
      { core: true, cells: ['A · Attach marks', 'Give each letter its vowel, sukūn, shadda or long vowel.', 'Each has fatḥa: كَ، تَ، بَ'] },
      { core: true, cells: ['D · Draw together', 'Blend in chunks. No extra vowel after sukūn.', 'كَ | تَ | بَ → kataba'] },
      { core: true, cells: ['↻ · Read again', 'Read once more, smoothly. Then check the meaning.', 'كَتَبَ = he wrote'] },
    ],
    notes: `THE READ ROUTINE (website Part 1). READ is an English memory aid; the processing stays anchored in Arabic letters and marks.
Model the think-aloud on كَتَبَ exactly as in the right-hand column. Then the two website contrasts:
• sukūn closes a chunk: مَكْ + تَ + بٌ → مَكْتَبٌ — do not say ma-ka-tab (maktabun; at a pause: maktab).
• long vowels stay together: كِ + تَا + بٌ → كِتَابٌ — hold تَا for two beats (kitābun; pause: kitāb).
Decoding is not yet comprehension, and accuracy is not yet fluency (website).`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Teacher instruction · mark-to-sound scan (website fast decoding reference)', title: 'Every signal has a job', ar: 'مِنَ العَلَامَةِ إِلَى الصَّوْتِ',
    cols: [{ label: 'Signal', w: 2.3 }, { label: 'Reading job', w: 4.2 }, { label: 'Example', w: 2.8, size: 26 }, { label: 'Say', w: 3.03 }],
    rows: [
      { core: true, cells: ['short vowels', 'A short vowel after the consonant.', 'بَ  بِ  بُ', 'ba · bi · bu'] },
      { core: true, cells: ['sukūn', 'No vowel; it closes a chunk.', 'مَكْ', 'mak, not maka'] },
      { core: true, cells: ['long vowels', 'Long ā · ī · ū — two beats.', 'بَاب · نُور', 'bāb · nūr'] },
      { cells: ['shadda', 'Doubled consonant; its vowel after the second half.', 'مُعَلِّمٌ', 'muʿallimun'] },
      { cells: ['tanwīn', '/un · in · an/ in careful connected reading.', 'كِتَابٌ', 'kitābun'] },
      { cells: ['hamza · madda', 'The catch /ʔ/; madda begins /ʔā/.', 'قَرَأَ · آمِنٌ', 'qaraʾa · ʾāminun'] },
    ],
    notes: `MARK-TO-SOUND SCAN (website Part 2) — a one-slide summary of F1-L04 to F1-L06.
Connected reading vs pause (website): fully vowelled texts may show endings; at a natural stop, final short vowels and tanwīn are not read the same way (جَدِيدٌ … pause as jadīd). Before reading a strip, say which mode you are using and keep to it.`,
  },
  F.quickCheck([
    q('Where do you start reading كَتَبَ?', ['At ك, on the right', 'At ب, on the left'], 'R — right edge.'),
    q('How do you read مَكْتَبٌ?', ['mak-ta-bun', 'ma-ka-ta-bun', 'mak-tab-ban'], 'The sukūn on كْ closes the chunk.'),
    q('How long is تَا in كِتَابٌ?', ['About two beats', 'One beat'], 'Fatḥa + alif = long ā.'),
    q('What does ↻ “read again” check?', ['Smoothness and meaning', 'Speed only'], 'Accuracy first, smoothness second.'),
  ], 'teacher-made from the website READ routine and mark-to-sound reference.'),
  {
    type: 'glossed', stage: 'ido', min: 4, eyebrow: 'I do · Level 1 · ten fully vowelled words (website graded strip)', title: 'Watch me read, then echo', ar: 'شَرِيطُ القِرَاءَةِ ١',
    lines: [
      ['كَتَبَ  ·  قَرَأَ', 'ka|ta|ba — he wrote   ·   qa|ra|ʾa — he read'],
      ['ذَهَبَ  ·  رَجَعَ', 'dha|ha|ba — he went   ·   ra|ja|ʿa — he returned'],
      ['شَرِبَ  ·  جَلَسَ', 'sha|ri|ba — he drank   ·   ja|la|sa — he sat'],
      ['فَتَحَ  ·  دَرَسَ', 'fa|ta|ḥa — he opened   ·   da|ra|sa — he studied'],
      ['سَمِعَ  ·  لَعِبَ', 'sa|mi|ʿa — he heard   ·   la|ʿi|ba — he played'],
    ],
    notes: `I DO — LEVEL 1 STRIP (4 min), the website’s ten words. For each word: teacher reads with the READ routine aloud → class echoes (mics on for a moment) → one volunteer (invitation).
Support, then remove it (website): after the first pass, cover the English column (or hide this slide) and reread from the Arabic only.
Notice: all ten are three-letter past verbs; watch for the kasra in شَرِبَ، سَمِعَ، لَعِبَ.`,
  },
  F.gameSlide({ ...game, title: 'Picture words', items: game.items.slice(0, 3) }, {
    en: ['a school', 'books', 'a door'],
    icons: [[['fa6', 'FaSchool', '1B3B6F']], [['fa6', 'FaBook', '7B3FA0']], [['fa6', 'FaDoorOpen', '8A5A2B']]],
    order: [2, 0, 1],
    title: 'Read the word, match the picture',
    notes: 'Website lesson game for F1-L08 (first three of six items). Students READ each word aloud (R-E-A-D) before matching. Extra website items for fast finishers: حَافِلَةٌ (bus), بَيْتٌ (house), قَهْوَةٌ (coffee).',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · website game “Chunk Choice”', title: 'Choose the correct chunks', ar: 'اِخْتَرِ التَّقْطِيعَ',
    seed: 21,
    questions: [
      q('Choose the chunks', ['مَكْ | تَ | بٌ', 'مَ | كَ | تَ | بٌ', 'مَكْتَ | بٌ'], 'The sukūn closes مَكْ.', { ar: 'مَكْتَبٌ', arBig: true }),
      q('Choose the chunks', ['كِ | تَا | بٌ', 'كِتْ | ا | بٌ', 'كِ | تَ | ا | بٌ'], 'The long ā stays with تَا.', { ar: 'كِتَابٌ', arBig: true }),
      q('Choose the chunks', ['مُ | عَلْ | لِ | مٌ', 'مُ | عَ | لِ | مٌ', 'مُعَ | لِمٌ'], 'Shadda = two timings of l.', { ar: 'مُعَلِّمٌ', arBig: true }),
      q('Choose the chunks', ['يَقْ | رَ | أُ', 'يَ | قَ | رَ | أُ', 'يَقْرَ | أُ'], 'The sukūn closes يَقْ.', { ar: 'يَقْرَأُ', arBig: true }),
      q('Choose the chunks', ['سِتْ | تَ | ةٌ', 'سِ | تَ | ةٌ', 'سِتَّ | ةٌ'], 'Shadda: hold the t.', { ar: 'سِتَّةٌ', arBig: true }),
    ],
    side: { kind: 'core', label: 'CORE', text: 'Sukūn → the chunk ends there.\nLong vowel → keep it with its letter.\nShadda → the letter twice.' },
    answerSlide: { min: 0, eyebrow: 'We do · chunk choice answers', title: 'Answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — website game “Chunk Choice” (choose the split that preserves consonant clusters, long vowels and shadda timing). Words from the website fluency list. Read each word together after the answer.',
    answerNotes: 'Reveal, then read each word twice together: once in chunks, once smoothly.',
  },
  {
    type: 'glossed', stage: 'wedo', min: 4, eyebrow: 'We do · Level 2 · eight short phrases (website graded strip)', title: 'Read the phrases', ar: 'شَرِيطُ القِرَاءَةِ ٢',
    lines: [
      ['هُوَ يَقْرَأُ  ·  هِيَ تَكْتُبُ', 'he reads   ·   she writes'],
      ['أَنَا أَفْهَمُ  ·  لَا أَفْهَمُ', 'I understand   ·   I do not understand'],
      ['قَرَأَ كِتَابًا', 'he read a book'],
      ['ذَهَبَ إِلَى البَيْتِ', 'he went home'],
      ['جَلَسَ فِي الفَصْلِ  ·  مَعَ مُحَمَّدٍ', 'he sat in the classroom   ·   with Muhammad'],
    ],
    notes: `WE DO — LEVEL 2 STRIP (Develop; everyone tries). Read word by word, then repeat the phrase without a pause between every syllable (website).
Choral → pairs → volunteers. Sun/moon revision: البَيْتِ and الفَصْلِ both start with MOON letters (ب, ف), so the l is heard: al-bayti, al-faṣli.
Useful classroom phrase: لَا أَفْهَمُ — I do not understand (website feedback phrases).`,
  },
  {
    type: 'glossed', stage: 'wedo', flex: true, min: 3, eyebrow: 'We do · Level 3 · four short sentences (website) · FLEX · Stretch', title: 'Read the sentences', ar: 'شَرِيطُ القِرَاءَةِ ٣',
    lines: [
      ['قَرَأَتْ مَرْيَمُ | كِتَابًا قَصِيرًا.', 'Maryam read a short book.'],
      ['ذَهَبَ سَامِرٌ | إِلَى المَدْرَسَةِ.', 'Samir went to school.'],
      ['كَتَبَتْ لَيْلَى | دَرْسًا | فِي دَفْتَرِهَا.', 'Layla wrote a lesson in her notebook.'],
      ['شَرِبَ أَحْمَدُ | مَاءً | بَعْدَ الرِّيَاضَةِ.', 'Ahmad drank water after sport.'],
    ],
    notes: `LEVEL 3 STRIP (Stretch / FLEX). The | marks are the website’s word groups — pause lightly there and fully at the full stop.
Website listening (read aloud first, twice): “قَرَأَتْ مَرْيَمُ كِتَابًا قَصِيرًا. ذَهَبَ سَامِرٌ إِلَى المَدْرَسَةِ.” — students track and mark where the reader pauses. Answer (website): a full pause after قَصِيرًا; the second sentence ends after المَدْرَسَةِ.`,
  },
  {
    type: 'routes', stage: 'youdo', min: 7, eyebrow: 'You do · reading practice · 7 minutes', title: 'Read: choose your level', ar: 'اِقْرَأْ',
    core: { amount: 'Level 1 · 10 words', task: 'Read the ten verbs aloud with the READ routine. Copy four of them and draw the chunk lines.', how: 'Cover the English, then read again from the Arabic only.' },
    develop: { amount: 'Level 2 · 8 phrases', task: 'Read the eight phrases to your partner. Copy three and draw the word boundaries.', how: 'Read word by word, then the whole phrase smoothly.' },
    stretch: { amount: 'Level 3 · 4 sentences', task: 'Read the four sentences with pauses. Copy one and mark the word groups with a slash.', how: 'Then the personal fluency challenge: read the ten fluency words and time yourself (website).' },
    notes: `YOU DO (7 min) — the website graded workshop: choose the level where you can apply READ with productive effort; practise privately, read to a partner, then level up only after accuracy is stable.
Personal fluency challenge (website, Stretch): كَتَبَ مَكْتَبٌ قَرَأَ كِتَابٌ سِتَّةٌ يَقْرَأُ بَيْتٌ مُعَلِّمٌ مَدْرَسَةٌ آمِنٌ — time is a personal baseline only.
Live feedback: listen to one student per route in private (mic on).`,
  },
  F.speakingSlide({
    speaking: {
      context: 'Partner reading check: one strength, one repair',
      model: [
        ['A', 'اِقْرَأْ: مُعَلِّمٌ', 'Read: muʿallimun'],
        ['B', 'مُعَلِّمٌ.', 'muʿallimun.'],
        ['A', 'صَحِيحٌ! الشَّدَّةُ وَاضِحَةٌ.', 'Correct! The shadda is clear.'],
        ['B', 'شُكْرًا. هَلْ أُعِيدُ؟', 'Thank you. Shall I repeat?'],
      ],
    },
  }, {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'اِقْرَأْ: كَتَبَ' },
      { route: 'core', ar: 'اِقْرَأْ: مَكْتَبٌ' },
      { route: 'develop', ar: 'اِقْرَأْ: مُعَلِّمٌ' },
      { route: 'stretch', ar: 'اِقْرَأِ الجُمْلَةَ.' },
    ],
    stems: [
      { route: 'core', ar: 'صَحِيحٌ !' },
      { route: 'develop', ar: 'هَلْ أُعِيدُ؟' },
      { route: 'stretch', ar: 'لَا أَفْهَمُ .' },
      { route: 'sum', ar: 'قَرَأَ / قَرَأَتْ ______ .' },
    ],
    modelEn: ['Read: muʿallimun', 'muʿallimun.'],
    notes: `PARTNER READING CHECK (website): partners listen for four behaviours — direction and tracking, base letters, vowels and marks, blend and reread — and give ONE precise strength and ONE repair step.
Feedback phrases (website): صَحِيحٌ (correct — add the reason), هَلْ أُعِيدُ؟ (shall I repeat?), لَا أَفْهَمُ (I do not understand).
Three-word oral exit (website): كَتَبَ (short vowels) · مَكْتَبٌ (sukūn and pause) · مُعَلِّمٌ (shadda and kasra). Record: accurate / one repair / practise again.`,
  }),
  {
    type: 'formsTable', stage: 'feedback', min: 2, eyebrow: 'Feedback · partner evidence grid (website)', title: 'What did your partner hear?', ar: 'تَقْيِيمُ الزَّمِيلِ',
    cols: [{ label: 'Criterion', w: 3.2 }, { label: 'What “secure” sounds like', w: 5.6 }, { label: '✓ · ~ · ↻', w: 3.53 }],
    rows: [
      { core: true, cells: ['Direction and tracking', 'Begins at the right and keeps the word order.', '✓ secure · ~ nearly · ↻ repair'] },
      { core: true, cells: ['Base letters', 'Tells the dots, shape families and hamza apart.', '✓ · ~ · ↻'] },
      { core: true, cells: ['Vowels and marks', 'Reads short/long vowels, sukūn and shadda.', '✓ · ~ · ↻'] },
      { core: true, cells: ['Blend and reread', 'Blends without invented vowels, then rereads smoothly.', '✓ · ~ · ↻'] },
    ],
    notes: 'FEEDBACK (2 min) — the website “one strip, one evidence grid”. A tick alone does not say what to repair: each partner writes one precise strength (“your long ā lasted longer than fatḥa”) and one repair step.',
  },
  F.selfCheckSlide([
    { route: 'core', text: 'I can explain the five READ steps.' },
    { route: 'core', text: 'I can read a simple fully vowelled word aloud.' },
    { route: 'develop', text: 'I can read sukūn and shadda without an extra vowel.' },
    { route: 'develop', text: 'I can decode without permanent transliteration.' },
    { route: 'stretch', text: 'I can reread more smoothly without dropping marks.' },
  ]),
  F.exitTicket([
    q('What does the R in READ stand for?', ['Right edge', 'Read quickly', 'Repeat'], 'Start at the right.'),
    q('What must you NOT do after a sukūn?', ['Add an extra vowel', 'Stop the chunk'], 'mak-, not maka-.'),
    q('What is fluency?', ['A smoother accurate reread', 'Racing and dropping vowels'], 'Accuracy first (website).'),
  ], 10),
  F.prepSlide({
    ...NEXT,
    words: [['خَطٌّ', 'handwriting, script', ''], ['سَطْرٌ', 'a line (of writing)', 'pl. أَسْطُرٌ'], ['إِمْلَاءٌ', 'dictation', ''], ['دَفْتَرٌ', 'exercise book', 'pl. دَفَاتِرُ'], ['قَلَمٌ', 'pen', 'pl. أَقْلَامٌ']],
    questionEn: 'Practise your reading strip aloud five times; after each read, note one error type.',
    questionAr: 'حَرْفٌ · عَلَامَةٌ · تَقْطِيعٌ · وَقْفٌ',
    homework: {
      core: 'Website · F1-L08 · the picture game; read the Level 1 strip five times.',
      develop: 'Website homework: read the Level 2 strip five times; mark one error category each time.',
      stretch: 'Website homework: Level 3 strip five times; time reads 1 and 5 only if both are accurate.',
    },
    wordsSource: 'Next lesson: handwriting and dictation. Bring an exercise book with lines and a pen.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: read your strip 5 times + bring a lined book.' }),
];

module.exports = { meta, slides };
