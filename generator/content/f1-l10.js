'use strict';
/*
 * F1-L10 · Read What Is Written: Unvowelled Text (SCOPE routine; eight signs; ambiguity; context mission)
 * Website: Pathways › Foundation › F1 › Lesson 10.
 */
const F = require('./f1-common');
const { q } = F;

const meta = F.meta({
  n: 10, fileTitle: 'Reading_Unvowelled_Text', chip: 'Unvowelled text',
  title: 'Read What Is Written: Unvowelled Text', arabic: 'قِرَاءَةُ النُّصُوصِ غَيْرِ المَشْكُولَةِ',
  focus: 'Most everyday Arabic has no short-vowel marks. Learn what stays visible, use the SCOPE routine (letters first, context second), read eight real signs, and say “I’m not sure yet” when a word could be read two ways.',
  icon: 'FaSignsPost', level: 'Foundation · beginner',
});
const NEXT = { nextCode: 'F1-L11', nextTitle: 'Arabic Around Us', nextAr: 'خَطٌّ وَاحِدٌ، أَصْوَاتٌ كَثِيرَةٌ' };
const signs = { title: 'Sign Scan', arabic: 'اِقْرَأِ اللَّافِتَةَ', items: [
  { sentence: 'مطعم' }, { sentence: 'مستشفى' }, { sentence: 'محطة' },
] };

const slides = [
  F.titleSlide({
    n: 10,
    source: 'The website lesson explains what stays visible in unvowelled Arabic, teaches the SCOPE routine (Scan · Chunk · Observe · Predict · Evaluate) with the worked example المكتبة, a vowel ladder (full → one anchor → everyday print), eight everyday signs, genuine ambiguity (كتب، علم، دخل) and a three-sentence context mission. All signs, tables, the passage, the rubric, the three-sign oral exit and the homework are the website’s.',
    support: `• CORE: read at least six of the eight signs with the scene clue and the support form. DEVELOP: use SCOPE on new words; explain one clue. STRETCH: explain ambiguity (كَتَبَ / كُتُب) and read the unvowelled passage.
• Hard boundary (website): context may choose a reading of the printed letters; it cannot invent different letters (بت can never be بيت).
• Heritage / Urdu readers: Urdu is normally written without vowel marks too — they already read this way. Their challenge: show the evidence and mark words as secure / likely / uncertain (website Heritage extension).`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'What stays visible, and the SCOPE routine.', wedo: 'Vowel ladder, sign scan, pattern detective.', next: 'F1-L11' }),
  F.doNow({
    questions: [
      q('Which feature changes ب into ت?', ['Dots', 'Joins', 'Spacing'], 'F1-L09 bridge: dots identify the letter.'),
      q('Which letters never join the letter after them?', ['ا د ذ ر ز و', 'ب ت ث ن ي'], 'F1-L05 / L09.'),
      q('Which code means a mark is on the wrong letter?', ['M', 'L', 'S'], 'F1-L09 repair codes.'),
      q('What does مدرسة mean (prepared at home)?', ['school', 'door', 'exit'], 'Prepared at home: مَدْرَسَةٌ without marks.'),
      q('What does مغلق mean on a sign (prepared at home)?', ['closed', 'open', 'exit'], 'Prepared at home: مُغْلَقٌ = closed; مَفْتُوحٌ = open.'),
    ],
    keyIdea: { text: 'The letters stay. The short vowels disappear. You use the letters FIRST, then the context.', ar: 'مدرسة ← مَدْرَسَة' },
    retrieves: 'Questions 1–3 are the website “F1-L09 bridge” (writing knowledge becomes reading evidence). Questions 4–5 test the home preparation.',
  }),
  F.objectivesSlide([
    'Explain why everyday Arabic leaves out most vowel marks.',
    'Use the SCOPE routine: letters first, then context.',
    'Read eight everyday signs.',
    'Say when a word could still be read in two ways.',
  ], {
    core: ['I can read at least six of the eight signs.', 'I know which clues stay visible.'],
    develop: ['I can explain all five SCOPE steps.', 'I use context only after checking the letters.'],
    stretch: ['I can explain كَتَبَ / كُتُب / كُتِبَ from one skeleton.', 'I can mark a reading as uncertain and say why.'],
  }, 1, 'Objectives are the website F1-L10 success criteria.'),
  F.keywordsSlide({
    text: '8 everyday signs, 5 SCOPE steps and 3 skeletons with more than one reading.',
    groups: [
      { head: 'ROUTINE', name: 'S · C · O · P · E' },
      { head: 'SIGNS', name: 'Everyday signs · 8' },
      { head: 'SKELETONS', name: 'Two readings · 3' },
    ],
    bridge: [
      { ar: 'مسجد', urdu: 'مسجد', tr: 'masjid', en: 'mosque' },
      { ar: 'مدرسة', urdu: 'مدرسہ', tr: 'madrasa', en: 'school' },
      { ar: 'علم', urdu: 'علم', tr: 'ʿilm', en: 'knowledge' },
      { ar: 'كتب', urdu: 'کتب', tr: 'kutub', en: 'books' },
      { ar: 'شارع', urdu: 'شارع', tr: 'shāriʿ', en: 'street, avenue' },
    ],
    notes: 'URDU BRIDGE: all five are written without marks in Urdu too (مسجد، مدرسہ، علم، کتب، شارع عام). Urdu readers already read unvowelled words — ask them HOW they know, and name the clue each time.',
  }),
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Teacher instruction · what remains visible? (website Part 1)', title: 'The letters stay; most marks go', ar: 'مَاذَا يَبْقَى فِي الكَلِمَةِ؟',
    cols: [{ label: 'Printed (everyday)', w: 2.6, size: 32 }, { label: 'With support marks', w: 2.8, size: 28 }, { label: 'Clue that stays', w: 6.93 }],
    rows: [
      { core: true, cells: ['مدرسة', 'مَدْرَسَة', 'All five letters, including the final ة'] },
      { core: true, cells: ['شارع', 'شَارِع', 'The written alif shows the long ā'] },
      { core: true, cells: ['فندق', 'فُنْدُق', 'Dots tell ف ن ق apart; vocabulary gives the vowels'] },
      { cells: ['يقرأ', 'يَقْرَأ', 'Hamza stays visible — it is a letter-sign, not a vowel mark'] },
    ],
    notes: `WHAT STAYS (website Part 1): ✓ base letters, positional forms, dots and breaks stay; ✓ long-vowel letters ا و ي stay; ○ fatḥa, ḍamma, kasra, sukūn and tanwīn (and often shadda) disappear; ? the reader supplies the sound from vocabulary, patterns and context.
Starter (website): English readers can often read “ths s wht Englsh lks lk wtht vwls” — but Arabic keeps its long vowels, so it is easier than that!
HARD BOUNDARY (website): context chooses a reading of the printed letters; it cannot invent different letters — بت can never become بيت or بنت.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Teacher instruction · the SCOPE routine (website Part 2) · worked example المكتبة', title: 'SCOPE the word before you say it', ar: 'اِجْمَعِ الأَدِلَّةَ قَبْلَ القِرَاءَةِ',
    cols: [{ label: 'Step', w: 2.8 }, { label: 'What to do', w: 4.6 }, { label: 'المكتبة', w: 4.93 }],
    rows: [
      { core: true, cells: ['S · Scan the skeleton', 'Right to left: name every letter and dot; notice breaks.', 'ا ل م ك ت ب ة — seven letters, one word'] },
      { core: true, cells: ['C · Chunk what is known', 'Spot ال ، و ، بـ ، ة ، ات …', 'ال + مكتب + ة'] },
      { core: true, cells: ['O · Observe vowel clues', 'Look for written ا و ي; compare with words you know.', 'No long vowel inside مكتب'] },
      { core: true, cells: ['P · Predict with context', 'Use the sign, the topic, the other words.', 'School topic; students read books there'] },
      { core: true, cells: ['E · Evaluate everything', 'Does it fit every letter AND the meaning?', 'الْمَكْتَبَة — the library ✓'] },
    ],
    notes: `SCOPE (website Part 2): a strong reader does not guess from a picture and ignore the print — SCOPE moves from certain visual evidence to a checked interpretation.
Confidence labels (website): SECURE — I can point to the skeleton, a known chunk and a context fit · LIKELY — letters fit and context supports it, but the word is not yet familiar · UNCERTAIN — more than one reading still fits; mark it and keep reading.`,
  },
  F.quickCheck([
    q('What stays visible in unvowelled Arabic?', ['Letters, dots and long vowels', 'Only the first letter', 'Short vowel marks'], 'Website Part 1.'),
    q('Can context turn بت into بيت?', ['No — the ي is not printed', 'Yes, if the picture shows a house'], 'The hard boundary.'),
    q('Which SCOPE step uses the sign or topic?', ['P · Predict with context', 'S · Scan', 'C · Chunk'], 'Letters first, then context.'),
    q('What is the chunk ة at the end of مدرسة?', ['tāʾ marbūṭa (feminine ending)', 'the article “the”', 'a long vowel'], 'A known chunk.'),
  ], 'teacher-made from the website Parts 1–2.'),
  {
    type: 'formsTable', stage: 'ido', min: 4, eyebrow: 'I do · walk down the vowel ladder (website Part 3)', title: 'Remove the support step by step', ar: 'سُلَّمُ الحَرَكَاتِ',
    cols: [{ label: 'Word', w: 2.2 }, { label: 'Level 1 · full support', w: 3.4, size: 28 }, { label: 'Level 2 · one anchor', w: 3.4, size: 28 }, { label: 'Level 3 · everyday print', w: 3.33, size: 28 }],
    rows: [
      { core: true, cells: ['hotel', 'فُنْدُقٌ', 'فُندق', 'فندق'] },
      { core: true, cells: ['restaurant', 'مَطْعَمٌ', 'مَطْعم', 'مطعم'] },
      { core: true, cells: ['school', 'مَدْرَسَةٌ', 'مَدْرسة', 'مدرسة'] },
      { cells: ['station', 'مَحَطَّةٌ', 'محطَّة', 'محطة'] },
    ],
    notes: `I DO — THE VOWEL LADDER (website Part 3). Read Level 1, cover it, reread Levels 2 and 3. The letters never change; only the scaffolding is removed.
Anchors (website): فُندق keeps the less predictable opening فُـ; مَطْعم keeps the closed chunk مَطْـ. Point to the skeleton (م ط ع م) at every level — the anchor helps pronunciation; it does not replace letter analysis.
If the final read is uncertain, go back ONE step — not to permanent transliteration (website).`,
  },
  F.gameSlide(signs, {
    en: ['restaurant', 'hospital', 'station'],
    icons: [[['fa6', 'FaUtensils', 'C77700']], [['fa6', 'FaHospital', 'B83227']], [['fa6', 'FaTrainSubway', '1D5FBF']]],
    order: [1, 2, 0],
    title: 'Sign scan: read, then match the scene',
    notes: 'Website game “Sign Scan” (first three of eight signs). SCAN the letters FIRST, then use the scene clue (website: the setting is evidence after scanning, not a substitute for reading). Clues: مطعم — ط has no dot, ع is open; مستشفى — final ى; محطة — final ة, shadda inferred.',
  }),
  {
    type: 'formsTable', stage: 'wedo', min: 4, eyebrow: 'We do · eight signs you can meet in the world (website Part 4)', title: 'Everyday signs', ar: 'لَافِتَاتٌ مِنَ الحَيَاةِ اليَوْمِيَّةِ',
    cols: [{ label: 'Sign', w: 2.2, size: 30 }, { label: 'Support form', w: 2.6, size: 24 }, { label: 'Meaning', w: 2.2 }, { label: 'Letter clue', w: 5.33 }],
    rows: [
      { core: true, cells: ['مطعم', 'مَطْعَم', 'restaurant', 'ط has no dot; ع is open'] },
      { core: true, cells: ['مدرسة', 'مَدْرَسَة', 'school', 'final ة'] },
      { core: true, cells: ['مستشفى', 'مُسْتَشْفَى', 'hospital', 'final ى (alif maqṣūra)'] },
      { core: true, cells: ['مسجد', 'مَسْجِد', 'mosque', 'final non-connecting د'] },
      { cells: ['محطة', 'مَحَطَّة', 'station', 'final ة; shadda inferred'] },
      { cells: ['شارع', 'شَارِع', 'street', 'visible alif = long ā'] },
      { cells: ['بنك', 'بَنْك', 'bank', 'distinct dots on ب ن'] },
      { cells: ['فندق', 'فُنْدُق', 'hotel', 'ف (one dot) vs final ق (two)'] },
    ],
    notes: 'WE DO — the website’s eight signs and letter clues. Read each with SCOPE together: cover the support column first. Then image-to-word recall (website): hide the Arabic, show only the scene words, students say each sign.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · genuine ambiguity · website game “Pattern Detective” · Develop / Stretch', title: 'One skeleton, more than one word', ar: 'هَيْكَلٌ وَاحِدٌ، قِرَاءَاتٌ مُخْتَلِفَةٌ',
    seed: 24,
    questions: [
      q('Books or “he wrote”?', ['books', 'he wrote'], 'A bag contains books: كُتُب.', { ar: 'في الحقيبة ثلاثة كتب.' }),
      q('Books or “he wrote”?', ['he wrote', 'books'], 'A person + an object → a verb: كَتَبَ.', { ar: 'كتب أحمد درسا.' }),
      q('Flag or knowledge?', ['the flag', 'knowledge'], 'You raise a flag: العَلَم.', { ar: 'رفع الطالب العلم.' }),
      q('“He entered” or income?', ['he entered', 'income'], 'A person entering a classroom: دَخَلَ.', { ar: 'دخل المعلم الفصل.' }),
      q('Can بت be read as بيت?', ['No', 'Yes'], 'The ي is not printed — the hard boundary.'),
    ],
    side: { kind: 'core', label: 'CORE', text: 'Letters first.\nThen ask: which reading makes sense in THIS sentence?\nkutub = books · kataba = he wrote' },
    answerSlide: { min: 0, eyebrow: 'We do · pattern detective answers', title: 'Answers', ar: 'الإِجَابَاتُ' },
    notes: `WE DO — website “genuine ambiguity” table and game “Pattern Detective” (read the unvowelled sentence, choose the meaning of the highlighted skeleton). Sentences are teacher-made in the website style.
Website skeletons: كتب (كَتَبَ he wrote · كُتُب books · كُتِبَ it was written), علم (عِلْم knowledge · عَلَم flag · عَلِمَ he knew), دخل (دَخَلَ he entered · دَخْل income).
Good uncertainty language (website): “The letters allow two readings. This sentence makes one more likely because …”`,
    answerNotes: 'Reveal. Ask students to explain each choice with “because …”.',
  },
  {
    type: 'glossed', stage: 'youdo', min: 5, eyebrow: 'You do · three-sentence mission (website Part 6)', title: 'Read the passage — no marks!', ar: 'اِفْهَمِ النَّصَّ مِنَ السِّيَاقِ',
    lines: [
      ['هذه مدرسة كبيرة.', 'hādhihi madrasatun kabīratun — This is a big school.'],
      ['في المدرسة فصل ومكتبة.', 'fī l-madrasati faṣlun wa-maktabatun — In the school there is a classroom and a library.'],
      ['يقرأ الطلاب كتبا في المكتبة.', 'yaqraʾu ṭ-ṭullābu kutuban fī l-maktabati — The students read books in the library.'],
    ],
    notes: `YOU DO — CONTEXT MISSION (website). Show the slide with the English column COVERED (or read aloud only the Arabic) for the first 3 minutes.
Routes: Core — find five words you know and say what they mean (مدرسة، فصل، مكتبة، كتبا، الطلاب). Develop — read each sentence aloud using SCOPE. Stretch — explain كتبا (books, not “he wrote”) with evidence.
Then reveal the support column. Website pronunciation-support version: هَذِهِ مَدْرَسَةٌ كَبِيرَةٌ. فِي الْمَدْرَسَةِ فَصْلٌ وَمَكْتَبَةٌ. يَقْرَأُ الطُّلَّابُ كُتُبًا فِي الْمَكْتَبَةِ.`,
  },
  {
    type: 'routes', stage: 'youdo', min: 5, eyebrow: 'You do · independent practice · 5 minutes', title: 'Write: choose your route', ar: 'اُكْتُبْ',
    core: { amount: '6 signs', task: 'Copy six of the eight signs without marks. Write the English meaning and ONE letter clue under each.', how: 'Use the sign table: e.g. مدرسة — final ة.' },
    develop: { amount: 'SCOPE × 2', task: 'Write the five SCOPE steps for مستشفى and محطة, like the worked example.', how: 'S · C · O · P · E — one line each.' },
    stretch: { amount: 'secure · likely · uncertain', task: 'Copy the mission passage. Label every word secure, likely or uncertain and write the evidence.', how: 'Website Heritage extension: do not reward silent guessing.' },
    notes: 'YOU DO — WRITING (5 min). LIVE FEEDBACK after 2 minutes.',
  },
  F.speakingSlide({
    speaking: {
      context: 'Three-sign oral exit: read and explain your evidence',
      model: [
        ['A', 'مَا هٰذِهِ اللَّافِتَةُ؟', 'What is this sign? (مدرسة)'],
        ['B', 'هٰذِهِ مَدْرَسَةٌ. فِي آخِرِهَا تَاءٌ مَرْبُوطَةٌ.', 'This is a school. It ends in tāʾ marbūṭa.'],
        ['A', 'وَهٰذِهِ؟', 'And this one? (محطة)'],
        ['B', 'هٰذِهِ مَحَطَّةٌ. الشَّدَّةُ لَيْسَتْ مَكْتُوبَةً.', 'This is a station. The shadda is not written.'],
      ],
    },
  }, {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'اِقْرَأْ: مدرسة' },
      { route: 'core', ar: 'مَا مَعْنَى «مطعم»؟' },
      { route: 'develop', ar: 'اِقْرَأْ: محطة' },
      { route: 'stretch', ar: 'اِقْرَأْ: مستشفى' },
    ],
    stems: [
      { route: 'core', ar: 'هٰذِهِ ______ .' },
      { route: 'develop', ar: 'فِي آخِرِهَا ______ .' },
      { route: 'stretch', ar: 'لَسْتُ مُتَأَكِّدًا لِأَنَّ ______ .' },
      { route: 'sum', ar: 'قَرَأَ / قَرَأَتْ ______ .' },
    ],
    modelEn: ['What is this sign? (مدرسة)', 'This is a school. It ends in tāʾ marbūṭa.'],
    notes: 'THREE-SIGN ORAL EXIT (website): مدرسة — identify letters, read, give meaning; محطة — explain the inferred shadda; مستشفى — identify final ى. Record: secure / one prompt / practise again, plus the evidence language used.',
  }),
  {
    type: 'formsTable', stage: 'feedback', min: 2, eyebrow: 'Feedback · context-reading rubric (website)', title: 'Evidence, not guessing', ar: 'الدَّلِيلُ قَبْلَ التَّخْمِينِ',
    cols: [{ label: 'Evidence', w: 3.2 }, { label: 'Secure looks like', w: 5.6 }, { label: '✓ · ~ · ↻', w: 3.53 }],
    rows: [
      { core: true, cells: ['Skeleton', 'Tracks every visible letter and dot.', '✓ secure · ~ nearly · ↻ repair'] },
      { core: true, cells: ['Chunks and pattern', 'Uses known pieces and durable spelling clues.', '✓ · ~ · ↻'] },
      { core: true, cells: ['Context', 'Uses the scene and other words AFTER the print.', '✓ · ~ · ↻'] },
      { core: true, cells: ['Verification', 'Rejects readings that clash with letters or meaning.', '✓ · ~ · ↻'] },
    ],
    notes: 'FEEDBACK (2 min) — the website context-reading rubric. Students complete: “My strongest evidence was …” and “I stayed uncertain when …”.',
  },
  F.selfCheckSlide([
    { route: 'core', text: 'I know which written clues remain.' },
    { route: 'core', text: 'I can read at least six of the eight signs.' },
    { route: 'develop', text: 'I can explain all five SCOPE steps.' },
    { route: 'develop', text: 'I use context after checking letters.' },
    { route: 'stretch', text: 'I can mark a reading as uncertain.' },
  ]),
  F.exitTicket([
    q('Which sign means “hospital”?', ['مستشفى', 'مسجد', 'مطعم'], 'Final ى.'),
    q('Which marks are usually NOT printed?', ['Short vowels and sukūn', 'Letters and dots', 'Long-vowel letters'], 'Website Part 1.'),
    q('What should you check before using the picture?', ['Every letter and dot', 'Only the first letter'], 'SCOPE: Scan first.'),
  ], 10),
  F.prepSlide({
    ...NEXT,
    words: [['العَرَبِيَّةُ', 'Arabic (the language)', ''], ['لُغَةٌ', 'a language', 'pl. لُغَاتٌ'], ['خَطٌّ', 'script, handwriting', 'pl. خُطُوطٌ'], ['بَلَدٌ', 'a country', 'pl. بُلْدَانٌ'], ['لَافِتَةٌ', 'a sign', 'pl. لَافِتَاتٌ']],
    questionEn: 'Find three examples of Arabic script around you (a shop, a website, packaging) and try to read them with SCOPE.',
    questionAr: 'مطعم · مدرسة · مسجد',
    homework: {
      core: 'Website · F1-L10 · Sign Scan game (all eight signs).',
      develop: 'Website homework: three Arabic examples from around you; mark each secure, likely or uncertain.',
      stretch: 'Website Heritage extension: a four-line unvowelled paragraph; sort words and annotate the evidence.',
    },
    wordsSource: 'Next lesson: Arabic around the world — where the script appears and what it communicates. Do not photograph people or private information.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: find 3 real Arabic examples + 5 words.' }),
];

module.exports = { meta, slides };
