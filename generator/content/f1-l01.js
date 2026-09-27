'use strict';
/*
 * F1-L01 · Welcome to Arabic — The Alphabet Family
 * Website: Pathways › Foundation › F1 › Lesson 1 (alif + Family 1 ب ت ث + Family 2 ج ح خ; line direction;
 * isolated formation). Picture game: website lesson game “The Alphabet Family”.
 */
const F = require('./f1-common');
const game = require('../site-data/pathway-visual-games.json')['f1-l01'];
const { q } = F;

const meta = F.meta({
  n: 1, fileTitle: 'Welcome_Alphabet_Family', chip: 'The Alphabet Family',
  title: 'Welcome to Arabic — The Alphabet Family', arabic: 'مَرْحَبًا بِكُمْ فِي اللُّغَةِ العَرَبِيَّةِ',
  focus: 'Meet your first seven letters: alif (ا) and two letter families that share a shape (ب ت ث · ج ح خ). Learn their names and sounds, use the dots to tell them apart, and write each letter carefully.',
  icon: 'FaPenNib', level: 'Foundation · complete beginner',
});
const NEXT = { nextCode: 'F1-L02', nextTitle: 'New Letter Families & Connection Breakers', nextAr: 'الحُرُوفُ مِنْ ٨ إِلَى ١٤' };
const L = (n, ar, name, en, dots, tag, core = true) => ({ n, ar, en, tr: dots, tag, core, forms: [{ l: 'name', ar: name }] });

const slides = [
  F.titleSlide({
    n: 1,
    source: 'The website lesson teaches alif (introductory letter, no fixed sound in this lesson), Family 1 ب ت ث (shared base; dots below/above) and Family 2 ج ح خ (shared bowl; dot inside/below, none, above), line direction (right → left) and isolated formation. The listening scripts, mini-checks, dot detective, sorting task, formation steps, mix-up/repair table and final check are the website’s; the letter-name game is the website game “The Alphabet Family”.',
    support: `• A first lesson for complete beginners, with heritage readers in the same class. CORE: recognise the 7 names, the 6 sounds and the two families; show the right-hand start; write 2 letters. DEVELOP: explain both dot rules; copy all 7 accurately. STRETCH: fast recognition, /t/ vs /θ/ and /ħ/ vs /x/, all 7 from memory, teach the family rule.
• Heritage / Urdu readers already know these shapes: the Urdu bridge shows the Arabic NAME for each familiar letter. Their target is formal names, exact dots and neat formation (website Heritage route).
• No transliteration for letters on the listening tasks (website rule) — students choose the shape they hear.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Right to left, alif, and two letter families.', wedo: 'Listen and choose, sort the families, dot detective.', next: 'F1-L02' }),
  F.doNow({
    questions: [
      q('Where does a line of Arabic begin?', ['On the right', 'On the left', 'In the middle'], 'Arabic is written and read from right to left.'),
      q('How many letters are in the Arabic alphabet?', ['28', '26', '32'], 'Arabic has 28 letters — today we open the first 7.'),
      q('Which of these is written in Arabic script?', ['مَرْحَبًا', 'Hello', 'Bonjour'], 'مَرْحَبًا = hello / welcome.'),
      q('Which language uses almost the same letters as Arabic?', ['Urdu', 'English', 'Chinese'], 'Urdu (and Persian) use the Arabic alphabet with a few extra letters.'),
      q('The Qur’an was revealed in which language?', ['Arabic', 'Urdu', 'Persian'], 'Arabic — the language of the Qur’an, spoken in more than 20 countries.'),
    ],
    keyIdea: { text: 'Arabic starts on the RIGHT. Letters come in families: same shape, different dots.', ar: 'ا   ·   ب ت ث   ·   ج ح خ' },
    retrieves: 'FIRST LESSON — a “what do you already know?” warm-up, not a test. Celebrate any prior knowledge (heritage readers, Qur’an classes). Use it to spot who already reads.',
  }),
  F.objectivesSlide([
    'Know that Arabic lines begin on the right.',
    'Recognise alif and the six letters of two families.',
    'Say each letter name and consonant sound.',
    'Use the dots to tell family members apart and form each letter.',
  ], {
    core: ['I can recognise all 7 letters and say their names.', 'I can show where an Arabic line starts and write 2 letters.'],
    develop: ['I can explain both dot rules.', 'I can copy all 7 letters accurately.'],
    stretch: ['I can hear /t/ vs /θ/ and /ħ/ vs /x/.', 'I can write all 7 from memory and teach the family rule.'],
  }, 1, 'The four objectives on the left summarise the website F1-L01 outcomes; the routes are the website’s Core / Develop / Stretch routes.'),
  F.keywordsSlide({
    text: '7 letters in 3 groups. Learn the NAME and the SOUND of each one. See it → hear it → say it → write it.',
    groups: [
      { head: 'FIRST', name: 'Alif · 1' },
      { head: 'FAMILY 1', name: 'ب ت ث · 3' },
      { head: 'FAMILY 2', name: 'ج ح خ · 3' },
    ],
    bridge: [
      { ar: 'ا', urdu: 'الف', tr: 'alif', en: 'alif (the same!)' },
      { ar: 'ب', urdu: 'بے', tr: 'bē', en: 'Arabic: bāʾ' },
      { ar: 'ث', urdu: 'ثے', tr: 'sē', en: 'Arabic: thāʾ /θ/' },
      { ar: 'ح', urdu: 'بڑی حے', tr: 'baṛī ḥē', en: 'Arabic: ḥāʾ' },
      { ar: 'خ', urdu: 'خے', tr: 'khē', en: 'Arabic: khāʾ' },
    ],
    notes: `URDU BRIDGE — the SHAPES are the same in Urdu; the NAMES change a little: Urdu bē → Arabic bāʾ, tē → tāʾ, sē → thāʾ (and in Arabic ث is /θ/ as in “thin”, not /s/), jīm → jīm, baṛī ḥē → ḥāʾ, khē → khāʾ.
Heritage readers: praise what they know, then insist on the formal Arabic names and sounds (website Heritage route).`,
  }),
  {
    type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Teacher instruction · three big ideas', title: 'Before we start: how Arabic works', ar: 'كَيْفَ تَعْمَلُ العَرَبِيَّةُ؟',
    cards: [
      { chip: 'DIRECTION', head: 'right → left', big: '← اِبْدَأْ هُنَا', en: 'Start here — on the RIGHT.', clue: 'Lines go from the right-hand side towards the left. (This is NOT how to draw each letter.)' },
      { chip: '28 LETTERS', color: '0E7C86', head: '٢٨ حَرْفًا', big: 'ا ب ت ث ج ح خ …', en: 'Today: the first 7 of 28.', clue: 'The other 21 stay closed for later lessons.' },
      { chip: 'FAMILIES', color: '7B3FA0', head: 'same shape, different dots', big: 'ب ت ث', en: 'One body, three letters.', clue: 'Look at the SHAPE first, then COUNT the dots and see WHERE they are.' },
    ],
    notes: `TEACHER INSTRUCTION (2 min) — website “Orient” section: a 28-letter alphabet; Arabic lines begin on the right; the first letters come in families that share a shape.
Stress the website distinction: the right-to-left arrow is about the LINE, not about the stroke order of each letter.
Gesture: every student puts a finger on the RIGHT edge of their screen — “Arabic starts here.”`,
  },
  {
    type: 'vocab', stage: 'teach', min: 3, bigAr: true, eyebrow: 'Key letters · alif + Family 1 (shared base shape)', title: 'Alif and the first family', ar: 'الأَلِفُ وَالعَائِلَةُ الأُولَى',
    items: [
      L(1, 'ا', 'أَلِفٌ', 'alif — the first letter', 'stands alone · no dots', 'first'),
      L(2, 'ب', 'بَاءٌ', 'bāʾ — sound /b/', 'ONE dot BELOW', 'Family 1'),
      L(3, 'ت', 'تَاءٌ', 'tāʾ — sound /t/', 'TWO dots ABOVE', 'Family 1'),
      L(4, 'ث', 'ثَاءٌ', 'thāʾ — sound /θ/ (thin)', 'THREE dots ABOVE', 'Family 1'),
    ],
    notes: `NEW LETTERS 1–4 (website Part 1). Hear → say → see → write.
• ا أَلِف: first in the alphabet; kept SEPARATE from both families; in this lesson we learn its name only — no fixed sound yet (website rule).
• Family 1 shares one body (a shallow bowl). The dots tell the members apart: ب one below · ت two above · ث three above.
Pronunciation (website): ب /b/ close both lips (“book”) · ت clear /t/, tongue inside the mouth · ث /θ/ tongue tip lightly between the teeth (“thin”) — do not turn it into /t/ or /s/.
Gesture: hand flat = the body; fingers below/above = the dots.`,
  },
  {
    type: 'vocab', stage: 'teach', min: 3, bigAr: true, eyebrow: 'Key letters · Family 2 (shared bowl shape)', title: 'The second family', ar: 'العَائِلَةُ الثَّانِيَةُ',
    items: [
      L(5, 'ج', 'جِيمٌ', 'jīm — sound /dʒ/ (jam)', 'ONE dot INSIDE / below the bowl', 'Family 2'),
      L(6, 'ح', 'حَاءٌ', 'ḥāʾ — sound /ħ/ (deep breath)', 'NO dot', 'Family 2'),
      L(7, 'خ', 'خَاءٌ', 'khāʾ — sound /x/ (loch)', 'ONE dot ABOVE', 'Family 2'),
    ],
    notes: `NEW LETTERS 5–7 (website Part 2). Same bowl, different dot.
Pronunciation (website, MSA model): ج /dʒ/ like “jam” — heritage learners may know /g/ or /ʒ/ from dialects; respect it, but the lesson uses /dʒ/ · ح /ħ/ a strong, voiceless breath from deep in the throat — NOT English h (“fog on a mirror”, but deeper) · خ /x/ friction at the back, like Scottish “loch” — never /k/.
Memory hook: ج dot IN the bowl, ح NO dot, خ dot ON TOP (“kh is on the roof”).`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Teacher instruction · the dot rule · all 7 letters', title: 'Shape first, then count the dots', ar: 'قَاعِدَةُ النِّقَاطِ',
    cols: [{ label: 'Group', w: 2.2 }, { label: 'Letter', w: 1.6, size: 34 }, { label: 'Name', w: 2.2, size: 22 }, { label: 'Dots', w: 3.2 }, { label: 'Sound', w: 3.13 }],
    rows: [
      { core: true, cells: ['First · separate', 'ا', 'أَلِفٌ', 'none', 'name only (no fixed sound today)'] },
      { core: true, cells: ['Family 1', 'ب', 'بَاءٌ', '1 below', '/b/ — book'] },
      { core: true, cells: ['Family 1', 'ت', 'تَاءٌ', '2 above', '/t/ — tap'] },
      { core: true, cells: ['Family 1', 'ث', 'ثَاءٌ', '3 above', '/θ/ — thin'] },
      { core: true, cells: ['Family 2', 'ج', 'جِيمٌ', '1 inside / below', '/dʒ/ — jam'] },
      { core: true, cells: ['Family 2', 'ح', 'حَاءٌ', 'none', '/ħ/ — deep breath'] },
      { core: true, cells: ['Family 2', 'خ', 'خَاءٌ', '1 above', '/x/ — loch'] },
    ],
    notes: `THE DOT RULE (website): Family 1 — one below, two above, three above. Family 2 — one inside/below, none, one above.
Seven NAMES but only six consonant SOUNDS today (alif is taught by name only) — a website check question.
Cover-the-dots game: hide the dots with your hand on camera; students say which family; reveal and count.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Teacher instruction · say it right (website pronunciation focus)', title: 'Three sounds to practise', ar: 'أَصْوَاتٌ جَدِيدَةٌ',
    cards: [
      { chip: 'ث · /θ/', head: 'tongue out a little', big: 'ث', en: 'Like “thin” — tongue tip between the teeth.', clue: 'Not /t/ (ت) and not /s/.' },
      { chip: 'ح · /ħ/', color: '0E7C86', head: 'deep, breathy', big: 'ح', en: 'A strong breath from deep in the throat.', clue: 'Not the English h — deeper, no scratch.' },
      { chip: 'خ · /x/', color: '7B3FA0', head: 'scratchy, at the back', big: 'خ', en: 'Like Scottish “loch”.', clue: 'Never /k/. Keep the friction going.' },
    ],
    notes: `PRONUNCIATION (2 min) — website “Pronunciation focus”. Model each sound 3 times; students echo with mics muted, then 3 volunteers on open mic (invitation only; “pass” allowed).
Minimal pairs from the website: /t/ vs /θ/ (ت vs ث) and /ħ/ vs /x/ (ح vs خ).
Heritage / Urdu speakers often say ث as /s/ (Urdu sē) — this is the key correction for them.`,
  },
  F.quickCheck([
    q('Which is alif?', ['ا', 'ب', 'ت'], 'ا is alif — first and separate.'),
    q('Which letter has ONE dot BELOW?', ['ب', 'ت', 'ث'], 'ب bāʾ: one dot below.'),
    q('Which letter has TWO dots ABOVE?', ['ت', 'ث', 'ب'], 'ت tāʾ: two dots above.'),
    q('Which bowl-family letter has NO dot?', ['ح', 'ج', 'خ'], 'ح ḥāʾ: same bowl, no dot.'),
  ], 'website Mini-Check 1 and Dot detective.'),
  {
    type: 'trace', stage: 'ido', min: 5, eyebrow: 'I do · watch → air-write → trace → copy (website formation workshop)', title: 'Watch me write the seven letters', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    cols: 4,
    items: [
      { ar: 'ا', name: 'أَلِف', steps: ['Begin at the top.', 'One straight stroke down.'] },
      { ar: 'ب', name: 'بَاء', steps: ['Draw the body right → left.', 'Add ONE dot below.'] },
      { ar: 'ت', name: 'تَاء', steps: ['Draw the body right → left.', 'Add TWO dots above.'] },
      { ar: 'ث', name: 'ثَاء', steps: ['Draw the body right → left.', 'Add THREE dots above.'] },
      { ar: 'ج', name: 'جِيم', steps: ['Top curve, then the bowl.', 'ONE dot inside the bowl.'] },
      { ar: 'ح', name: 'حَاء', steps: ['Top curve, then the bowl.', 'No dot.'] },
      { ar: 'خ', name: 'خَاء', steps: ['Top curve, then the bowl.', 'ONE dot above.'] },
    ],
    notes: `I DO — FORMATION (5 min). Website sequence: WATCH → AIR-WRITE → TRACE → COPY → WRITE FROM MEMORY. Isolated forms only today.
Model each letter large on the whiteboard / pen tablet, saying the steps aloud. Students air-write with a big arm, then trace the pale letters and copy twice on the dashed line in their books.
Website reminder: the line-direction arrow does NOT tell you the stroke order; each letter has its own steps. Dots go on LAST and close to the body.
SEND: large squared paper; a highlighter baseline; model one letter at a time.`,
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: `We do · website game “${game.title.replace('Visual game — ', '')}”`, title: 'Letter detective: what is its name?', ar: game.arabic,
    seed: 4,
    questions: [
      q('What is this letter called?', ['بَاءٌ', 'تَاءٌ', 'ثَاءٌ'], game.items[0].feedback, { ar: 'ب', arBig: true }),
      q('What is this letter called?', ['ثَاءٌ', 'تَاءٌ', 'بَاءٌ'], game.items[2].feedback, { ar: 'ث', arBig: true }),
      q('What is this letter called?', ['جِيمٌ', 'حَاءٌ', 'خَاءٌ'], game.items[3].feedback, { ar: 'ج', arBig: true }),
      q('What is this letter called?', ['خَاءٌ', 'جِيمٌ', 'حَاءٌ'], game.items[5].feedback, { ar: 'خ', arBig: true }),
      q('What is this letter called?', ['تَاءٌ', 'بَاءٌ', 'ثَاءٌ'], game.items[1].feedback, { ar: 'ت', arBig: true }),
    ],
    side: { kind: 'core', label: 'CORE', text: 'Look at the SHAPE, then count the DOTS.\n1 below → bāʾ\n2 above → tāʾ\n3 above → thāʾ' },
    answerSlide: { min: 0, eyebrow: 'We do · letter detective answers', title: 'Letter detective: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — the website lesson game “The Alphabet Family” (مُحَقِّقُ الحُرُوفِ): see the letter, choose its name. Students type 5 letters in the chat. Core: use the dot clue in the green box.',
    answerNotes: 'Reveal. Whole class says each name aloud together (mics on for a moment), then two volunteers.',
  },
  F.listenPick({
    title: 'Hear the letter NAME → choose the letter', source: 'website “Hear the letter name → select the letter”',
    items: [
      { cue: 'تَاءٌ', options: ['ت', 'ب', 'ث'] },
      { cue: 'أَلِفٌ', options: ['ا', 'ب', 'ج'] },
      { cue: 'حَاءٌ', options: ['ح', 'خ', 'ج'] },
      { cue: 'ثَاءٌ', options: ['ث', 'ت', 'ب'] },
      { cue: 'جِيمٌ', options: ['ج', 'ح', 'خ'] },
    ],
    notes: 'Heritage readers may answer fastest — ask them to wait 5 seconds (think time) before typing.',
  }),
  F.listenPick({
    title: 'Hear the SOUND → choose the letter', seed: 5, source: 'website “Hear a consonant sound → select the letter” and the sound discrimination circuit',
    items: [
      { cue: '/b/ (as in “book”)', options: ['ب', 'ت', 'ث'] },
      { cue: '/θ/ (as in “thin”)', options: ['ث', 'ت', 'ب'] },
      { cue: '/x/ (as in “loch”)', options: ['خ', 'ح', 'ج'] },
      { cue: '/ħ/ (deep breath)', options: ['ح', 'خ', 'ج'] },
      { cue: '/t/', options: ['ت', 'ث', 'ب'] },
    ],
    notes: 'Say only the short consonant sound — not the letter name. Alif is not included: it has no fixed sound in this lesson (website).\nStretch challenge: /t/ vs /θ/ and /ħ/ vs /x/ are the website’s minimal pairs.',
  }),
  {
    type: 'sorter', stage: 'wedo', min: 2, eyebrow: 'We do · website sorting task', title: 'Sort the seven letters', ar: 'صَنِّفِ الحُرُوفَ',
    categories: ['Alif (first, separate)', 'Family 1', 'Family 2'],
    items: [
      { ar: 'ح', cat: 2 }, { ar: 'ت', cat: 1 }, { ar: 'ا', cat: 0 }, { ar: 'خ', cat: 2 },
      { ar: 'ب', cat: 1 }, { ar: 'ج', cat: 2 }, { ar: 'ث', cat: 1 },
    ],
    answerSlide: { eyebrow: 'We do · sorting answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — website “Sort the seven letters” (2 min). Students write the three headings in their books and copy each letter under the right one. Clue: look at the BODY, not the dots.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · website listening · write the letters in order', title: 'Listen and write the order', ar: 'اِسْتَمِعْ وَاكْتُبْ',
    seed: 6,
    questions: [
      q('Listening 1: which order did you hear?', ['ا  ب  ت  ث', 'ا  ت  ب  ث', 'ب  ا  ث  ت'], 'Script: أَلِفٌ. بَاءٌ. تَاءٌ. ثَاءٌ.'),
      q('Listening 1: which letter has one dot below?', ['ب', 'ت', 'ث'], 'Circle ب — one dot below.'),
      q('Listening 2: which order did you hear?', ['ج  ح  خ', 'خ  ح  ج', 'ح  ج  خ'], 'Script: جِيمٌ. حَاءٌ. خَاءٌ.'),
      q('Listening 2: which letter has no dot?', ['ح', 'ج', 'خ'], 'Underline ح — no dot.'),
    ],
    side: { kind: 'info', head: 'FIRST, WRITE', text: 'Listen and WRITE the letters in your book in the order you hear.\nThen choose here.' },
    answerSlide: { min: 0, eyebrow: 'We do · listening answers', title: 'Listening: answers', ar: 'الإِجَابَاتُ' },
    notes: `WEBSITE LISTENING PRACTICE (3 min). Read each script twice, slowly, with a pause between names. Students first WRITE the letters in order in their books (website response task), then choose.
Script 1: أَلِفٌ. بَاءٌ. تَاءٌ. ثَاءٌ. (then: circle the letter with one dot below)
Script 2: جِيمٌ. حَاءٌ. خَاءٌ. (then: underline the letter with no dot)`,
    answerNotes: 'Reveal and check the written order in books (cameras: hold books up).',
  },
  {
    type: 'routes', stage: 'youdo', min: 7, eyebrow: 'You do · independent practice · 7 minutes', title: 'Write: choose your route', ar: 'اُكْتُبْ',
    core: { amount: '2 letters + all 7 names', task: 'Copy ا and one family neatly (4 times each). Say every name as you write it.', how: 'Trace the pale letters on the I do slide first, then copy on the line in your book.' },
    develop: { amount: 'all 7 letters', task: 'Copy all seven letters accurately, twice each, with the dots in the right place.', how: 'Under each family, write the dot rule in English (1 below, 2 above, 3 above …).' },
    stretch: { amount: 'all 7 from memory', task: 'Close the slides and write all seven letters from memory in alphabet order.', how: 'Then write one sentence in English that explains the family rule to a new learner.' },
    notes: `YOU DO — WRITING (7 min). Website routes: Core “form at least two letters”; Develop “copy all seven isolated forms accurately”; Stretch “write all seven from memory and teach the family principle”.
LIVE FEEDBACK: after 3 minutes students hold their book up to the camera. Check dots (position and number) and that dots are close to the letter body (website mix-up table).
Work with the less able first. SEND: squared paper, one letter per box.`,
  },
  F.speakingSlide({
    speaking: {
      context: 'Show and say: My Letter Family (عَائِلَةُ حُرُوفِي)',
      model: [
        ['A', 'مَا هٰذَا الحَرْفُ؟', 'What is this letter?'],
        ['B', 'هٰذَا أَلِفٌ. هُوَ الحَرْفُ الأَوَّلُ.', 'This is alif. It is the first letter.'],
        ['A', 'وَهٰذِهِ العَائِلَةُ؟', 'And this family?'],
        ['B', 'بَاءٌ، تَاءٌ، ثَاءٌ — نَفْسُ الشَّكْلِ وَنِقَاطٌ مُخْتَلِفَةٌ.', 'bāʾ, tāʾ, thāʾ — the same shape and different dots.'],
      ],
    },
  }, {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'مَا هٰذَا الحَرْفُ؟' },
      { route: 'core', ar: 'أَيْنَ يَبْدَأُ السَّطْرُ؟' },
      { route: 'develop', ar: 'اِشْرَحْ قَاعِدَةَ النِّقَاطِ.' },
      { route: 'stretch', ar: 'عَلِّمْ زَمِيلَكَ عَائِلَةً.' },
    ],
    stems: [
      { route: 'core', ar: 'هٰذَا ______ .' },
      { route: 'develop', ar: '______ : نُقْطَةٌ تَحْتَ / فَوْقَ' },
      { route: 'stretch', ar: 'نَفْسُ الشَّكْلِ ، نِقَاطٌ مُخْتَلِفَةٌ .' },
      { route: 'sum', ar: 'قَالَ / قَالَتْ : هٰذَا ______ .' },
    ],
    modelEn: ['What is this letter?', 'This is alif. It is the first letter.'],
    notes: `SHOW AND SAY — website performance task “My Letter Family” (60–90 s each). Evidence checklist (website): introduce ا as أَلِف, the first letter · present ب ت ث OR ج ح خ · say the three sounds · explain the dot rule · point to the right-hand line start · form one letter · answer one audience challenge.
Audience challenges (website): “Point to خَاء.” · “Which letter has two dots on top?” · “Which letter comes first?” · “How many letters does Arabic have?” · “Show me where an Arabic line starts.”
Dignified routes (website): individual, paired, or quiet route with one trusted partner. Prompt translations: What is this letter? · Where does the line begin? · Explain the dot rule. · Teach your classmate a family.`,
  }),
  {
    type: 'formsTable', stage: 'feedback', min: 2, eyebrow: 'Feedback · common mix-ups and repairs (website)', title: 'Mistakes that help us learn', ar: 'أَخْطَاءٌ شَائِعَةٌ',
    cols: [{ label: 'Likely mix-up', w: 5.6 }, { label: 'Repair cue', w: 6.73 }],
    rows: [
      { core: true, cells: ['Putting alif in Family 1', 'ا is FIRST and SEPARATE. Say its name: alif.'] },
      { core: true, cells: ['Mixing ب ت ث', 'Cover the dots, see the same body, then count: 1 below · 2 above · 3 above.'] },
      { core: true, cells: ['The dot of ج drawn above', 'The dot of jīm sits INSIDE the bowl. khāʾ has its dot on top.'] },
      { cells: ['Adding a dot to ح', 'Say: “same bowl, no dot.”'] },
      { cells: ['Saying ث as /t/ or /s/', 'Show the tongue lightly between the teeth: /θ/.'] },
      { cells: ['Saying خ as /k/', 'Keep the friction going at the back, like “loch”.'] },
    ],
    notes: 'FEEDBACK (2 min) — website “Common mix-ups and repairs”. Students check their own writing against rows 1–3 and correct in green pen. Other website repairs: ح is deeper than English h; the line arrow is not a stroke-order rule; dots must stay close to the letter body.',
  },
  F.selfCheckSlide([
    { route: 'core', text: 'I can point to where an Arabic line starts.' },
    { route: 'core', text: 'I can recognise the 7 letters and say their names.' },
    { route: 'develop', text: 'I can explain the dot rule for both families.' },
    { route: 'develop', text: 'I copied all 7 letters with the dots in the right place.' },
    { route: 'stretch', text: 'I can write all 7 from memory and hear ت / ث and ح / خ.' },
  ]),
  F.exitTicket([
    q('Which letter has THREE dots above?', ['ث', 'ت', 'ب'], 'ث thāʾ: three dots above.'),
    q('Which letter matches the sound /x/ (loch)?', ['خ', 'ح', 'ج'], 'خ khāʾ.'),
    q('Which statement is correct?', ['7 names and 6 consonant sounds', '7 names and 7 fixed sounds', '6 names and 7 sounds'], 'Alif is taught by name only today (website final check).'),
  ], 8),
  F.prepSlide({
    ...NEXT,
    words: [['د  دَالٌ', 'dāl · /d/', ''], ['ذ  ذَالٌ', 'dhāl · /ð/ (this)', ''], ['ر  رَاءٌ', 'rāʾ · /r/', ''], ['ز  زَايٌ', 'zāy · /z/', ''], ['س  سِينٌ', 'sīn · /s/', '']],
    questionEn: 'Write the 7 letters you learnt today in order, from memory.',
    questionAr: 'ا ب ت ث ج ح خ',
    homework: {
      core: 'Website · F1-L01 · play “The Alphabet Family”, then trace and copy the 7 letters (website formation cards).',
      develop: 'Website · F1-L01 · the recognition, sorting and bingo activities.',
      stretch: 'Teach the two families to someone at home (60 seconds), then write all 7 from memory.',
    },
    wordsSource: 'Next lesson adds seven letters (د ذ ر ز س ش ص). Preview five of them tonight: look at the shape, say the name.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: 5 new letters + write today’s 7 from memory.' }),
];

module.exports = { meta, slides };
