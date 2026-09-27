'use strict';
/*
 * F1-L09 · Write Clearly, Then Fluently (handwriting and dictation)
 * Website: Pathways › Foundation › F1 › Lesson 9.
 */
const F = require('./f1-common');
const { q } = F;

const meta = F.meta({
  n: 9, fileTitle: 'Handwriting_Dictation', chip: 'Handwriting & dictation',
  title: 'Write Clearly, Then Fluently', arabic: 'التَّدْرِيبُ عَلَى الكِتَابَةِ — الدِّقَّةُ وَالطَّلَاقَةُ',
  focus: 'Write all 28 letters in order, check five features of clear handwriting (direction, shape, dots, joins, marks), and write 15 words from dictation using a fair listen – hold – write – check routine.',
  icon: 'FaPenFancy', level: 'Foundation · beginner',
});
const NEXT = { nextCode: 'F1-L10', nextTitle: 'Read What Is Written: Unvowelled Text', nextAr: 'قِرَاءَةُ النُّصُوصِ غَيْرِ المُشَكَّلَةِ' };
const round = (label, words, focus) => ({ core: true, cells: [label, { ar: words, sub: '' }, focus] });

const slides = [
  F.titleSlide({
    n: 9,
    source: 'The website lesson is a writing workshop: alphabet recall from memory, five observable handwriting features, the WRITE routine (Watch · Repeat · Imagine · Try · Examine), five repair codes (L · D · J · M · S), targeted repair lines, a 15-word dictation in three rounds, games (Exact Match, Repair-Code Detective) and an evidence rubric. The dictation script, repair lines, rubric, three-word exit and homework are the website’s. (The website’s visual game for this lesson is a copy-the-letter task, covered by the formation slide.)',
    support: `• CORE: write the 28 letters in order (with chart support if needed) and dictation Round A (5 words). DEVELOP: Rounds A–B (10 words) with repair codes. STRETCH: all 15 words and a fully marked personal paragraph (website Heritage extension).
• Assess READABILITY, not artistic taste (website). A beautiful calligraphic hand is not the goal; a reader must identify every letter without guessing.
• SEND: squared or lined paper with a highlighted baseline; slower dictation pace; allow a word bank of letter shapes for Core. Books to camera for feedback — only the teacher sees private corrections.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Five features of clear handwriting and the WRITE routine.', wedo: 'Repair lines, a 15-word dictation in three rounds.', next: 'F1-L10' }),
  F.doNow({
    questions: [
      q('Where does an Arabic word begin?', ['On the right', 'On the left'], 'F1-L08: R — right edge.'),
      q('How do you read مَكْتَبٌ?', ['mak-ta-bun', 'ma-ka-ta-bun'], 'F1-L08: the sukūn closes the chunk.'),
      q('What does shadda do in مُعَلِّمٌ?', ['Doubles the l', 'Makes a long vowel'], 'F1-L06.'),
      q('Which letters do NOT join the next letter?', ['ا د ذ ر ز و', 'ب ت ث ن ي', 'س ش ص ض'], 'The six non-connectors.'),
      q('What is إِمْلَاءٌ (prepared at home)?', ['dictation', 'handwriting', 'a line'], 'Prepared at home.'),
    ],
    keyIdea: { text: 'Clear writing first. Speed only when it stays clear.', ar: 'مَدْرَسَةٌ' },
    retrieves: 'Questions 1–3 are the website “F1-L08 bridge” (sound to script). Q4 revises F1-L05. Q5 tests the home preparation. Then: ALPHABET RECALL — students write all 28 letters from memory BEFORE the next slide (website).',
  }),
  {
    type: 'formsTable', stage: 'donow', min: 3, eyebrow: 'Do now · part 2 · alphabet recall (website) · write first, then check', title: 'Write the 28 letters from memory', ar: 'الحُرُوفُ الهِجَائِيَّةُ',
    cols: [{ label: '1–7', w: 3.08, size: 30 }, { label: '8–14', w: 3.08, size: 30 }, { label: '15–21', w: 3.08, size: 30 }, { label: '22–28', w: 3.09, size: 30 }],
    rows: [
      { core: true, cells: ['ا ب ت ث ج ح خ', 'د ذ ر ز س ش ص', 'ض ط ظ ع غ ف ق', 'ك ل م ن ه و ي'] },
    ],
    foot: 'Hamza ء and tāʾ marbūṭa ة are writing symbols, but they are not extra letters of the 28-letter alphabet.',
    notes: `ALPHABET RECALL (website). Students write the sequence on paper from memory FIRST (2 min), then reveal this slide and self-mark in a different colour: one point for each correct letter in the correct position; record the total and the FIRST break in the sequence.
If fewer than 20 are correct → chart support and a private recheck later (website evidence note).`,
  },
  F.objectivesSlide([
    'Write all 28 letters in the standard order.',
    'Check five features: direction, shape, dots, joins, marks.',
    'Use the WRITE routine and five repair codes.',
    'Write simple, fully marked words from dictation.',
  ], {
    core: ['I can write the 28 letters in order.', 'I can write dictation Round A (5 words).'],
    develop: ['I can use L, D, J, M and S to repair a word.', 'I can write Rounds A and B (10 words).'],
    stretch: ['I can write all 15 dictation words exactly.', 'I keep my writing clear when I speed up.'],
  }, 3, 'Objectives are the website F1-L09 success criteria (28 letters in order; simple fully marked words from dictation; a consistent, legible Naskh-based school hand).'),
  F.keywordsSlide({
    text: '5 features, 5 WRITE steps, 5 repair codes and 15 dictation words.',
    groups: [
      { head: 'CHECK', name: 'Five features · 5' },
      { head: 'ROUTINE', name: 'W · R · I · T · E' },
      { head: 'REPAIR', name: 'L · D · J · M · S' },
      { head: 'DICTATION', name: '3 rounds · 15' },
    ],
    bridge: [
      { ar: 'خَطٌّ', urdu: 'خط', tr: 'khat', en: 'handwriting · a letter' },
      { ar: 'إِمْلَاءٌ', urdu: 'املا', tr: 'imlā', en: 'dictation, spelling' },
      { ar: 'سَطْرٌ', urdu: 'سطر', tr: 'satar', en: 'a line of writing' },
      { ar: 'نَسْخٌ', urdu: 'نسخ', tr: 'naskh', en: 'Naskh — the school script' },
      { ar: 'قَلَمٌ', urdu: 'قلم', tr: 'qalam', en: 'pen' },
    ],
    notes: 'URDU BRIDGE: خط (in Urdu also “a letter/post”), املا (Urdu “imlā” = spelling/dictation — the same word!), سطر, قلم. Naskh (نسخ) is the clear school script used in this lesson; Urdu is usually written in Nastaʿlīq, which slopes — Arabic school handwriting sits flat on the line.',
  }),
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Teacher instruction · five observable features (website Part 1)', title: 'What clear handwriting means', ar: 'مَا الخَطُّ الوَاضِحُ؟',
    cards: [
      { chip: '1 · 2 DIRECTION + SHAPE', head: 'right → left · clear body', big: 'بَيْتٌ', en: 'Words start on the right; each letter body is recognisable.', clue: 'Keep a consistent size — but some letters go below the line.' },
      { chip: '3 · 4 DOTS + JOINS', color: '0E7C86', head: 'exact dots · correct joins', big: 'جَدِيدٌ', en: 'Dots change the letter. Stop after ا د ذ ر ز و.', clue: 'Both د in جَدِيدٌ make visible stops.' },
      { chip: '5 MARKS + SPACING', color: '7B3FA0', head: 'marks on the right letter', big: 'قَلَمٌ جَدِيدٌ', en: 'Every mark above or below its own letter.', clue: 'Joined letters close together; one clear gap between words.' },
    ],
    notes: `FIVE FEATURES (website Part 1): Direction · Shape · Dots · Joins · Marks — and a stable baseline with space below for letters such as final ي ج ع.
Training text vs ordinary Arabic (website): today’s words are fully marked because the task checks diacritic placement; everyday Arabic (مدرسة جديدة) omits most marks — do not call that misspelled.
Legibility before speed: a faster sample with lost dots or broken joins is not more fluent.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Teacher instruction · the WRITE routine and five repair codes (website Part 2)', title: 'WRITE, then repair with a code', ar: 'خُطُوَاتُ الكِتَابَةِ',
    cols: [{ label: 'WRITE step', w: 3.2 }, { label: 'What to do', w: 4.6 }, { label: 'Code', w: 1.2 }, { label: 'Repair check', w: 3.33 }],
    rows: [
      { core: true, cells: ['W · Watch or listen', 'See or hear the whole word twice first.', 'L', 'Letter shape / order recognisable?'] },
      { core: true, cells: ['R · Repeat and notice', 'Say it quietly; notice letters, dots, marks.', 'D', 'Dots: number and position exact?'] },
      { core: true, cells: ['I · Imagine', 'Hide the model; picture the word.', 'J', 'Join: connected or stopped correctly?'] },
      { core: true, cells: ['T · Try writing', 'Write it once, right to left.', 'M', 'Mark on the correct letter?'] },
      { core: true, cells: ['E · Examine and improve', 'Compare, correct, write it again from memory.', 'S', 'Spacing and baseline clear?'] },
    ],
    notes: `WRITE ROUTINE + REPAIR CODES (website Part 2). Memory line: Look or listen → Say it → Picture it → Write it → Check it.
Model → cover → write → compare (website): look at بَيْتٌ for 3 seconds; say baytun and notice يْ; cover and write; reveal, circle the FIRST mismatch and add ONE code; correct and reproduce from memory.
Website warning: copying with the model always visible trains the hand but not recall — the COVER step is essential.`,
  },
  F.quickCheck([
    q('Which code do you use if a dot is missing?', ['D', 'L', 'J'], 'D = dots.'),
    q('In بَابٌ, where does the join stop?', ['After the alif', 'After the first ب', 'There is no stop'], 'Alif is a non-connector.'),
    q('Which WRITE step hides the model?', ['I — Imagine', 'W — Watch', 'T — Try'], 'Picture it in your mind.'),
    q('Is مدرسة (no marks) misspelled?', ['No — everyday Arabic omits marks', 'Yes, marks are always required'], 'Website training-text note.'),
  ], 'teacher-made from the website features, routine and codes.'),
  {
    type: 'formsTable', stage: 'ido', min: 5, eyebrow: 'I do · targeted repair lines (website Part 3) · watch, then copy', title: 'Watch me write three repair lines', ar: 'أَصْلِحِ الحَرْفَ بِدِقَّةٍ',
    cols: [{ label: 'Line', w: 2.2 }, { label: 'Model words', w: 5.0, size: 30 }, { label: 'What to check', w: 5.13 }],
    rows: [
      round('A · joins', 'بَابٌ · وَلَدٌ · جَدِيدٌ', 'Circle every non-connector break; no pen line crosses it.'),
      round('B · marks', 'بَيْتٌ · مُعَلِّمٌ · عَيْنٌ', 'Point from every sukūn or shadda to its letter before copying.'),
      round('C · spacing', 'قَلَمٌ جَدِيدٌ', 'Joined letters close; ONE clear gap between the two words.'),
      { cells: ['Dot contrasts', { ar: 'ب ت ث ن ي · ج ح خ · ع غ · ف ق', sub: '' }, 'Count and place the dots before leaving the word.'] },
    ],
    notes: `I DO — REPAIR LINES (5 min), website Part 3. Model each line on the pen tablet with a think-aloud:
“بَابٌ: bāʾ joins to alif; alif STOPS, so the last bāʾ stands alone.” “وَلَدٌ: wāw does not join on; lām joins to final dāl.” “جَدِيدٌ: both dāls make stops.”
Efficient habit (website): write the legible base-and-joins first, then add dots and marks in one consistent pass.
Students copy each line twice: first with the model visible, then covered (website: two sets of five).
Stroke order note (website): assess the readable outcome, not one pen path.`,
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · website game “Exact Match”', title: 'Which form matches exactly?', ar: 'اِخْتَرِ الشَّكْلَ الصَّحِيحَ',
    seed: 22,
    questions: [
      q('Target: baytun (house)', ['بَيْتٌ', 'بَيتٌ', 'بَنْتٌ'], 'Two dots below the yāʾ, with sukūn.'),
      q('Target: muʿallimun (teacher)', ['مُعَلِّمٌ', 'مُعَلِمٌ', 'مَعَلِّمٌ'], 'Shadda on the lām; ḍamma on mīm.'),
      q('Target: kitābun (book)', ['كِتَابٌ', 'كِتَبٌ', 'كُتَابٌ'], 'Long ā needs the alif.'),
      q('Target: bintun (girl)', ['بِنْتٌ', 'بَيْتٌ', 'بِتْنٌ'], 'nūn has one dot above; sukūn on nūn.'),
      q('Target: jadīdun (new)', ['جَدِيدٌ', 'جَدِدٌ', 'حَدِيدٌ'], 'Long ī with yāʾ; jīm has a dot.'),
    ],
    side: { kind: 'core', label: 'CORE', text: 'Check each feature:\nletters · dots · long vowels · marks\nThe first difference decides.' },
    answerSlide: { min: 0, eyebrow: 'We do · exact match answers', title: 'Answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — website game “Exact Match” (choose the fully marked form that exactly matches the sound target; tests dots, sukūn, shadda, long vowels and tanwīn). Say each target word aloud twice. Items are dictation words.',
    answerNotes: 'Reveal. For each wrong option, ask: which repair code? (e.g. بَيتٌ → M, missing sukūn; حَدِيدٌ → D, missing dot).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · website game “Repair-Code Detective”', title: 'Name the repair code', ar: 'اِكْتَشِفِ الخَطَأَ',
    seed: 23,
    questions: [
      q('Model بَيْتٌ — written بَنْتٌ', ['D · dots', 'J · join', 'S · spacing'], 'One dot above instead of two below.'),
      q('Model بَابٌ — written with alif joined to the last ب', ['J · join', 'M · mark', 'L · letter'], 'Alif never joins onward.'),
      q('Model مُعَلِّمٌ — written مُعَلِمٌ', ['M · mark', 'D · dots', 'J · join'], 'The shadda is missing.'),
      q('Model قَلَمٌ جَدِيدٌ — written as one joined word', ['S · spacing', 'L · letter', 'D · dots'], 'One clear gap between words.'),
      q('Model عَيْنٌ — written غَيْنٌ', ['D · dots', 'M · mark', 'S · spacing'], 'An extra dot turns ʿayn into ghayn.'),
    ],
    side: { kind: 'info', head: 'FIVE CODES', text: 'L letter · D dots · J join\nM mark · S spacing / baseline\nChoose ONE primary code.' },
    answerSlide: { min: 0, eyebrow: 'We do · repair-code answers', title: 'Answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — website game “Repair-Code Detective” (compare the written form with the model and name the primary repair code). Teacher-made items in the website style.',
    answerNotes: 'Reveal. Fair peer marking (website): check letter order and identity before presentation; underline the exact place of ONE mismatch; add ONE code; the writer repairs — the partner does not redraw it for them.',
  },
  {
    type: 'formsTable', stage: 'youdo', min: 10, eyebrow: 'You do · 15-word controlled dictation (website) · listen → hold → write → reveal', title: 'Dictation: three rounds of five', ar: 'اِسْمَعْ، تَذَكَّرْ، اُكْتُبْ، ثُمَّ صَحِّحْ',
    cols: [{ label: 'Round', w: 2.4 }, { label: 'Words (reveal AFTER writing)', w: 6.4, size: 26 }, { label: 'Focus', w: 3.53 }],
    rows: [
      { core: true, cells: ['A · anchors  (Core)', { ar: 'بَابٌ · كِتَابٌ · قَلَمٌ · مَدْرَسَةٌ · بَيْتٌ', sub: 'door · book · pen · school · house' }, 'breakers, long vowels, dots, sukūn, ة'] },
      { cells: ['B · contrasts  (Develop)', { ar: 'مُعَلِّمٌ · طَالِبٌ · يَدٌ · عَيْنٌ · كَلِمَةٌ', sub: 'teacher · student · hand · eye · word' }, 'shadda, letter families, dots'] },
      { cells: ['C · transfer  (Stretch)', { ar: 'ثَلَاثَةٌ · سَبْعَةٌ · وَلَدٌ · بِنْتٌ · جَدِيدٌ', sub: 'three · seven · boy · girl · new' }, 'length, clusters, spacing'] },
    ],
    notes: `DICTATION (10 min) — the website script. HIDE this slide while dictating (show the previous slide or a blank). Read each word TWICE at a measured pace, including the final -un; allow a brief HOLD after the second reading. Do not spell aloud or show the Arabic.
Script: بَابٌ. كِتَابٌ. قَلَمٌ. مَدْرَسَةٌ. بَيْتٌ. / مُعَلِّمٌ. طَالِبٌ. يَدٌ. عَيْنٌ. كَلِمَةٌ. / ثَلَاثَةٌ. سَبْعَةٌ. وَلَدٌ. بِنْتٌ. جَدِيدٌ.
After EACH round (website): reveal the round, count exact words /5, count repair codes by category, practise the most common repair once, re-dictate one repaired word.
Routes: Core — Round A; Develop — A and B; Stretch — all three.
Exact convention (website): tanwīn is part of today’s written target; this is a controlled script exercise.`,
  },
  F.speakingSlide({
    speaking: {
      context: 'Peer marking: one code, one repair',
      model: [
        ['A', 'اُكْتُبْ: بَيْتٌ', 'Write: baytun'],
        ['B', 'كَتَبْتُ. هَلْ هُوَ صَحِيحٌ؟', 'I have written it. Is it correct?'],
        ['A', 'النُّقَاطُ تَحْتَ اليَاءِ. «D».', 'The dots go under the yāʾ. “D”.'],
        ['B', 'شُكْرًا. سَأُصْلِحُهُ.', 'Thank you. I will fix it.'],
      ],
    },
  }, {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'اُكْتُبْ: بَابٌ' },
      { route: 'core', ar: 'هَلْ هُوَ صَحِيحٌ؟' },
      { route: 'develop', ar: 'مَا الرَّمْزُ؟' },
      { route: 'stretch', ar: 'اُكْتُبْ جُمْلَةً عَنْ نَفْسِكَ.' },
    ],
    stems: [
      { route: 'core', ar: 'صَحِيحٌ !' },
      { route: 'develop', ar: 'الرَّمْزُ ______ .' },
      { route: 'stretch', ar: 'أَنَا ______ .' },
      { route: 'sum', ar: 'كَتَبَ / كَتَبَتْ ______ .' },
    ],
    modelEn: ['Write: baytun', 'I have written it. Is it correct?'],
    notes: `PEER MARKING (website “How to peer mark fairly”). Three-word paper exit (website): a partner reads بَابٌ (non-connector break), بَيْتٌ (sukūn and dot identity), مُعَلِّمٌ (shadda, kasra and joins) twice each; the writer records exact /3 plus one primary repair code.
Stretch / Heritage extension (website): write 4–5 fully marked sentences about yourself, then check the marks in a separate second pass.`,
  }),
  {
    type: 'formsTable', stage: 'feedback', min: 2, eyebrow: 'Feedback · handwriting evidence rubric (website)', title: 'Assess readability, not artistic taste', ar: 'قَيِّمِ الوُضُوحَ',
    cols: [{ label: 'Feature', w: 3.2 }, { label: 'Secure looks like', w: 5.6 }, { label: '✓ · ~ · ↻', w: 3.53 }],
    rows: [
      { core: true, cells: ['Direction and order', 'Words run right to left; letters stay in sequence.', '✓ secure · ~ nearly · ↻ repair'] },
      { core: true, cells: ['Letter identity and dots', 'Recognisable bodies; exact dot number and position.', '✓ · ~ · ↻'] },
      { core: true, cells: ['Joining and spacing', 'Correct joins and stops; clear gaps between words.', '✓ · ~ · ↻'] },
      { cells: ['Requested diacritics', 'Marks present, clear and on the intended letter.', '✓ · ~ · ↻'] },
      { cells: ['Baseline and consistency', 'Size and line placement readable across the sample.', '✓ · ~ · ↻'] },
    ],
    notes: 'FEEDBACK (2 min) — the website evidence rubric on one five-word sample. Record: alphabet /28 + first break; dictation /15 + counts of L D J M S. Progress reflection (website): compare with Lesson 1 — one visible improvement, one feature to keep practising.',
  },
  F.selfCheckSlide([
    { route: 'core', text: 'I can write the 28 letters in order.' },
    { route: 'core', text: 'I can identify the six non-connectors.' },
    { route: 'develop', text: 'I can explain all five WRITE steps.' },
    { route: 'develop', text: 'I can use L, D, J, M and S to repair a word.' },
    { route: 'stretch', text: 'I protect legibility when I increase pace.' },
  ]),
  F.exitTicket([
    q('Which is the correct spelling of “school”?', ['مَدْرَسَةٌ', 'مَدَرَسَةٌ', 'مَدْرَسَهٌ'], 'Sukūn on dāl; the word ends in ة.'),
    q('Why is copying with the model always visible not enough?', ['It trains the hand but not recall', 'It is too slow'], 'The cover step is essential (website).'),
    q('Is Arabic fluency “writing faster”?', ['No — efficient, readable writing', 'Yes — the fastest wins'], 'Website: accuracy before speed.'),
  ], 10),
  F.prepSlide({
    ...NEXT,
    words: [['مدرسة', 'school (no marks)', 'مَدْرَسَةٌ'], ['باب', 'door (no marks)', 'بَابٌ'], ['مخرج', 'exit (on signs)', 'مَخْرَجٌ'], ['مفتوح', 'open', 'مَفْتُوحٌ'], ['مغلق', 'closed', 'مُغْلَقٌ']],
    questionEn: 'Rewrite the 15 dictation words without looking, then check and mark with L/D/J/M/S.',
    questionAr: 'بَابٌ · كِتَابٌ · قَلَمٌ …',
    homework: {
      core: 'Website homework (Round A): rewrite the five anchor words from memory, then check and repair.',
      develop: 'Website homework: all 15 words from memory; mark with L/D/J/M/S; rewrite only repaired words.',
      stretch: 'Website Heritage extension: 4–5 fully marked sentences about yourself; check the marks in a second pass.',
    },
    wordsSource: 'Next lesson: reading Arabic WITHOUT the vowel marks — like real signs. Tonight, look at these five words with and without marks.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: 15 dictation words from memory + 5 sign words.' }),
];

module.exports = { meta, slides };
