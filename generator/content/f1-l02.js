'use strict';
/*
 * F1-L02 · New Letter Families & Connection Breakers (letters 8–14; sun and moon letters)
 * Website: Pathways › Foundation › F1 › Lesson 2.
 */
const F = require('./f1-common');
const { q } = F;

const meta = F.meta({
  n: 2, fileTitle: 'Letters_Connection_Breakers_Sun_Moon', chip: 'Letters 8–14',
  title: 'New Letter Families & Connection Breakers', arabic: 'الحُرُوفُ مِنْ ٨ إِلَى ١٤',
  focus: 'Learn seven new letters (د ذ ر ز · س ش ص), find out which four letters break a connection, and hear the difference between sun letters and moon letters after ال.',
  icon: 'FaLinkSlash', level: 'Foundation · complete beginner',
});
const NEXT = { nextCode: 'F1-L03', nextTitle: 'Powerful Sounds & Long Vowels', nextAr: 'الحُرُوفُ مِنْ ١٥ إِلَى ٢٢ وَالمَدُّ' };
const L = (n, ar, name, en, dots, tag, core = true) => ({ n, ar, en, tr: dots, tag, core, forms: [{ l: 'name', ar: name }] });

const slides = [
  F.titleSlide({
    n: 2,
    source: 'The website lesson teaches the connection breakers د ذ ر ز (two dot pairs), the tooth family س ش and the first emphatic letter ص, the connection rule (“does not connect to the following letter on its left”), and oral sun/moon awareness with ال. The retrieval check, listening script, pronunciation focus, sun/moon charts, formation tracker, partner games and the eight-item final check are the website’s. Note: the website’s visual game for this lesson repeats the F1-L01 letters, so the letter detective here uses today’s letters (teacher-made).',
    support: `• CORE: name the 7 new letters and their main sounds; sort the four breakers. DEVELOP: explain the dot and shape clues and the connection rule. STRETCH: letters 1–14 in order from memory; sun and moon letters without the chart.
• Sun/moon is an ORAL awareness rule today (website scope): students listen for whether the l of ال is heard — they do not need to read the whole words.
• Heritage / Urdu readers: Urdu has these shapes, but ذ ز and ص are all said /z/ or /s/ in Urdu — the key MSA contrasts today are ذ /ð/ vs ز /z/ and ص /sˤ/ vs س /s/.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Seven new letters and the connection rule.', wedo: 'Connection gate, letter detective, sun or moon.', next: 'F1-L03' }),
  F.doNow({
    questions: [
      q('Which is alif?', ['ا', 'ب', 'ت'], 'F1-L01: alif is first and separate.'),
      q('Which letter has THREE dots above?', ['ث', 'ت', 'ب'], 'F1-L01: thāʾ.'),
      q('Which bowl-family letter has NO dot?', ['ح', 'ج', 'خ'], 'F1-L01: ḥāʾ — same bowl, no dot.'),
      q('Where does an Arabic line begin?', ['On the right', 'On the left', 'In the middle'], 'F1-L01: right-hand side.'),
      q('Which letter is dāl (prepared at home)?', ['د', 'ر', 'س'], 'Prepared at home: د dāl /d/.'),
    ],
    keyIdea: { text: 'Four letters never hold hands with the letter on their LEFT.', ar: 'د   ذ   ر   ز' },
    retrieves: 'Questions 1–4 are the website “F1-L01 readiness check” (3–4 correct → continue; 0–2 → quick repair of the families). Question 5 tests the home preparation.',
  }),
  F.objectivesSlide([
    'Recognise and name letters 8–14.',
    'Use shape and dot clues to tell them apart.',
    'Explain which four letters break a connection.',
    'Hear whether the l of ال is said (moon) or absorbed (sun).',
  ], {
    core: ['I can name the 7 new letters and say their sounds.', 'I can sort the four connection breakers.'],
    develop: ['I can explain the dot clue for each new letter.', 'I can explain the connection rule clearly.'],
    stretch: ['I can write letters 1–14 in order from memory.', 'I can sort the letters into sun and moon without the chart.'],
  }, 2, 'Objectives and routes are the website F1-L02 outcomes (Core · Develop · Stretch · Heritage).'),
  F.keywordsSlide({
    text: '7 new letters in 2 groups, plus one sound rule. We now know 14 of the 28 letters!',
    groups: [
      { head: 'GROUP 1', name: 'Breakers · 4' },
      { head: 'GROUP 2', name: 'Teeth + ص · 3' },
      { head: 'RULE', name: 'Sun and moon' },
    ],
    bridge: [
      { ar: 'د', urdu: 'دال', tr: 'dāl', en: 'dāl — the same' },
      { ar: 'ذ', urdu: 'ذال', tr: 'zāl', en: 'Arabic: dhāl /ð/ (this)' },
      { ar: 'ر', urdu: 'رے', tr: 'rē', en: 'Arabic: rāʾ' },
      { ar: 'ش', urdu: 'شین', tr: 'shīn', en: 'shīn — the same' },
      { ar: 'ص', urdu: 'صاد', tr: 'swād', en: 'Arabic: ṣād /sˤ/' },
    ],
    notes: `URDU BRIDGE: the shapes and most names are the same. The SOUNDS differ: Urdu ذال is said /z/ but Arabic ذ is /ð/ (“this”); Urdu صاد is /s/ but Arabic ص is an emphatic, darker /sˤ/. These are the two big corrections for heritage readers today.`,
  }),
  {
    type: 'vocab', stage: 'teach', min: 3, bigAr: true, eyebrow: 'Key letters · Group 1 · the connection breakers (two pairs)', title: 'Letters that break the chain', ar: 'حُرُوفٌ لَا تَتَّصِلُ بِمَا بَعْدَهَا',
    items: [
      L(1, 'د', 'دَالٌ', 'dāl — sound /d/ (door)', 'no dot', 'pair 1'),
      L(2, 'ذ', 'ذَالٌ', 'dhāl — sound /ð/ (this)', 'ONE dot ABOVE', 'pair 1'),
      L(3, 'ر', 'رَاءٌ', 'rāʾ — sound /r/ (tapped r)', 'no dot', 'pair 2'),
      L(4, 'ز', 'زَايٌ', 'zāy — sound /z/ (zoo)', 'ONE dot ABOVE', 'pair 2'),
    ],
    notes: `NEW LETTERS 8–11 (website Part 1). Each pair shares a body; the dot makes the partner. Accuracy point (website): the dot of ذ is ABOVE, never below.
Pronunciation (website): د /d/ as in “door” · ذ /ð/ tongue tip lightly at the teeth, as in “this” — not /z/ or /d/ · ر a light tap or short trill at the front of the mouth, not the English r · ز /z/ a buzzing sound, as in “zoo”.
Isolated forms only today; positional forms come in F1-L05.`,
  },
  {
    type: 'vocab', stage: 'teach', min: 3, bigAr: true, eyebrow: 'Key letters · Group 2 · the tooth family and the first emphatic letter', title: 'The tooth family and ṣād', ar: 'السِّينُ وَالشِّينُ وَالصَّادُ',
    items: [
      L(5, 'س', 'سِينٌ', 'sīn — sound /s/ (sun)', 'three “teeth” · no dots', 'tooth family'),
      L(6, 'ش', 'شِينٌ', 'shīn — sound /ʃ/ (ship)', 'THREE dots ABOVE', 'tooth family'),
      L(7, 'ص', 'صَادٌ', 'ṣād — emphatic /sˤ/ (dark s)', 'no dot · a loop', 'emphatic'),
    ],
    notes: `NEW LETTERS 12–14 (website Part 2). Count the three tooth-like rises in س ش before looking at the dots.
ص is the first EMPHATIC letter: no English equivalent. Start with /s/, then raise the back of the tongue — a darker, fuller sound (website). Keep it distinct from plain س.
Website preview only: ض (letter 15, the dotted partner of ص) is taught in F1-L03.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Teacher instruction · the connection rule (website)', title: 'Four letters break the chain', ar: 'قَاعِدَةُ الاِتِّصَالِ',
    cards: [
      { chip: 'BREAKERS', color: 'B83227', head: 'د ذ ر ز', big: 'د ذ ر ز', en: 'They join the letter on their RIGHT but NOT the letter on their LEFT.', clue: 'After them there is a visible gap before the next letter.' },
      { chip: 'CONNECTORS', color: '2E8B57', head: 'س ش ص', big: 'س ش ص', en: 'They can join on BOTH sides.', clue: '…when the neighbouring letters allow it.' },
      { chip: 'ALIF TOO', color: '0E7C86', head: 'ا', big: 'ا', en: 'Alif also does not join the letter after it.', clue: 'Remember: ا د ذ ر ز (+ و later) are the “lonely” letters.' },
    ],
    notes: `THE CONNECTION RULE (website): د ذ ر ز may connect to a letter on their RIGHT, but they do not connect to the following letter on their LEFT. Say the side clearly — “does not connect to the following letter on its left” is clearer than “never joins” (website precision note).
Card 3 is a teacher addition preparing F1-L05 (alif and wāw behave the same way).
Gesture: hold hands with a partner on the right; the left hand stays in your pocket.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Teacher instruction · say it right (website pronunciation focus)', title: 'Three contrasts to practise', ar: 'أَصْوَاتٌ مُتَقَارِبَةٌ',
    cards: [
      { chip: '/ð/ vs /z/', head: 'this vs zoo', big: 'ذ   ز', en: 'ذ: tongue at the teeth · ز: buzzing.', clue: 'Heritage readers: ذ is not /z/ in Arabic.' },
      { chip: '/s/ vs /sˤ/', color: '0E7C86', head: 'plain vs dark', big: 'س   ص', en: 'ص: back of the tongue up, a fuller sound.', clue: 'Louder is not more accurate — keep it focused.' },
      { chip: 'rāʾ', color: '7B3FA0', head: 'tap it', big: 'ر', en: 'A quick tap of the tongue behind the teeth.', clue: 'Not the English r.' },
    ],
    notes: 'PRONUNCIATION (2 min) — website pronunciation focus and contrasts. Model 3 times; students echo muted; then volunteers (invitation only). ش /ʃ/ as in “ship” is usually easy — praise it!',
  },
  F.quickCheck([
    q('Which letter is the shape of د plus one dot above?', ['ذ', 'ز', 'ش'], 'ذ dhāl.'),
    q('Which is the dotted partner of ر?', ['ز', 'ذ', 'ش'], 'ز zāy.'),
    q('Which tooth-family letter has three dots above?', ['ش', 'س', 'ص'], 'ش shīn.'),
    q('Which set contains only today’s connection breakers?', ['د، ذ، ر، ز', 'س، ش، ص', 'ب، ت، ث'], 'د ذ ر ز do not connect to the following letter.'),
  ], 'website final check questions 1, 2, 3 and 6.'),
  {
    type: 'trace', stage: 'ido', min: 5, eyebrow: 'I do · watch → air-write → trace → copy (website formation tracker)', title: 'Watch me write the seven new letters', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    cols: 4,
    items: [
      { ar: 'د', name: 'دَال', steps: ['Short slope down to the right.', 'Flat base to the left.'] },
      { ar: 'ذ', name: 'ذَال', steps: ['Write د.', 'ONE dot above.'] },
      { ar: 'ر', name: 'رَاء', steps: ['Start on the line.', 'Curve down below the line.'] },
      { ar: 'ز', name: 'زَاي', steps: ['Write ر.', 'ONE dot above.'] },
      { ar: 'س', name: 'سِين', steps: ['Three small teeth, right → left.', 'Big bowl below the line.'] },
      { ar: 'ش', name: 'شِين', steps: ['Write س.', 'THREE dots above.'] },
      { ar: 'ص', name: 'صَاد', steps: ['A flat loop first.', 'One tooth, then the bowl.'] },
    ],
    notes: `I DO — FORMATION (5 min). Website sequence: study the demonstrated model → air-write → form four times on lined paper → tick only after checking body shape and dot placement. Isolated forms only.
Watch for: ر ز sit ON the line and dip below it — not like د; the teeth of س must be three and even; the loop of ص is flat and closed.`,
  },
  {
    type: 'sorter', stage: 'wedo', min: 3, eyebrow: 'We do · website game “Connection Gate”', title: 'Break or connect?', ar: 'بَوَّابَةُ الاِتِّصَالِ',
    categories: ['Breaks after it', 'Connects on both sides'],
    items: [
      { ar: 'س', cat: 1 }, { ar: 'د', cat: 0 }, { ar: 'ز', cat: 0 }, { ar: 'ص', cat: 1 },
      { ar: 'ر', cat: 0 }, { ar: 'ش', cat: 1 }, { ar: 'ذ', cat: 0 },
    ],
    answerSlide: { eyebrow: 'We do · connection gate answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — website game “Connection Gate” (classify each new letter; the rule is about connection behaviour, not reading direction). Students copy the two headings and sort. Stretch: add ا to the right column? (No — alif also breaks: teacher extension.)',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · website game “Letter Detective” (shape + dots + sound)', title: 'Letter detective: what is its name?', ar: 'مُحَقِّقُ الحُرُوفِ',
    seed: 7,
    questions: [
      q('What is this letter called?', ['ذَالٌ', 'دَالٌ', 'زَايٌ'], 'Shape of dāl + one dot above.', { ar: 'ذ', arBig: true }),
      q('What is this letter called?', ['رَاءٌ', 'زَايٌ', 'دَالٌ'], 'rāʾ: dips below the line, no dot.', { ar: 'ر', arBig: true }),
      q('What is this letter called?', ['شِينٌ', 'سِينٌ', 'صَادٌ'], 'Three teeth + three dots.', { ar: 'ش', arBig: true }),
      q('What is this letter called?', ['صَادٌ', 'سِينٌ', 'شِينٌ'], 'A loop — the emphatic ṣād.', { ar: 'ص', arBig: true }),
      q('What is this letter called?', ['زَايٌ', 'رَاءٌ', 'ذَالٌ'], 'Shape of rāʾ + one dot.', { ar: 'ز', arBig: true }),
    ],
    side: { kind: 'core', label: 'CORE', text: 'Use TWO clues:\n1. the shape (body, teeth, loop)\n2. the dots (how many? where?)' },
    answerSlide: { min: 0, eyebrow: 'We do · letter detective answers', title: 'Letter detective: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — based on the website game “Letter Detective” (use shape, dots and sound together — guessing from one clue is less reliable). Teacher-made items with today’s letters.',
    answerNotes: 'Reveal. Whole class says each name; then partner flash (website): A shows a letter, B says name + sound + “break” or “connect”.',
  },
  F.listenPick({
    title: 'Hear the SOUND → choose the letter', seed: 8, source: 'website “Sound corners” and pronunciation contrasts',
    items: [
      { cue: '/ð/ (as in “this”)', options: ['ذ', 'ز', 'د'] },
      { cue: '/sˤ/ (dark s)', options: ['ص', 'س', 'ش'] },
      { cue: '/ʃ/ (as in “ship”)', options: ['ش', 'س', 'ص'] },
      { cue: '/z/ (as in “zoo”)', options: ['ز', 'ذ', 'ر'] },
      { cue: '/r/ (tapped)', options: ['ر', 'د', 'ز'] },
    ],
    notes: 'Say only the short sound. Stretch pairs: ذ/ز and س/ص.',
  }),
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Teacher instruction · listen and notice (website Part 3)', title: 'Sun letters and moon letters', ar: 'الحُرُوفُ الشَّمْسِيَّةُ وَالقَمَرِيَّةُ',
    cards: [
      { chip: 'MOON · l is heard', color: '1B3B6F', head: 'حَرْفٌ قَمَرِيٌّ', big: 'الْقَمَرُ', en: 'al-qamar — the moon. You HEAR the l.', clue: 'Moon letters so far: ا ب ج ح خ' },
      { chip: 'SUN · l disappears', color: 'C77700', head: 'حَرْفٌ شَمْسِيٌّ', big: 'الشَّمْسُ', en: 'ash-shams — the sun. The l joins the next sound.', clue: 'Sun letters so far: ت ث د ذ ر ز س ش ص' },
      { chip: 'SPELLING', color: '0E7C86', head: 'always ال', big: 'ال', en: 'We always WRITE ال.', clue: 'Only the pronunciation changes.' },
    ],
    notes: `SUN AND MOON (website Part 3) — an oral awareness rule for now: listen for whether the lām is heard.
• Moon: the l of ال is heard clearly (al-qamar). • Sun: the l is not heard; the next sound is said strongly/doubled (ash-shams). The shadda is taught formally later.
Of the first fourteen letters, nine are sun letters (ت ث د ذ ر ز س ش ص) and five are moon letters (ا ب ج ح خ) — website charts.
Memory hook: the tongue letters (made with the tip of the tongue) are usually sun letters.`,
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · website listening · sun or moon?', title: 'Is the l heard?', ar: 'شَمْسِيٌّ أَمْ قَمَرِيٌّ؟',
    seed: 9,
    questions: [
      q('Word 1: الشَّمْسُ', ['Sun', 'Moon'], 'ash-shams: the l is absorbed.'),
      q('Word 2: السَّمَكُ', ['Sun', 'Moon'], 'as-samak (fish): the l is absorbed.'),
      q('Word 3: الدَّرْسُ', ['Sun', 'Moon'], 'ad-dars (the lesson): the l is absorbed.'),
      q('Word 4: القَمَرُ', ['Moon', 'Sun'], 'al-qamar: the l is heard.'),
      q('Word 5: الكِتَابُ', ['Moon', 'Sun'], 'al-kitāb (the book): the l is heard.'),
      q('Word 6: الوَرْدُ', ['Moon', 'Sun'], 'al-ward (roses): the l is heard.'),
    ],
    side: { kind: 'info', head: 'LISTEN FOR THE “L”', text: 'l heard → MOON\nl gone, next sound doubled → SUN' },
    answerSlide: { min: 0, eyebrow: 'We do · sun or moon answers', title: 'Sun or moon: answers', ar: 'الإِجَابَاتُ' },
    notes: `WEBSITE LISTENING (3 min). Read each word twice clearly; students write S or M in their books first, then answer. Students do NOT need to read the words — this is listening only (website scope).
Script: الشَّمْسُ. السَّمَكُ. الدَّرْسُ. القَمَرُ. الكِتَابُ. الوَرْدُ.
Answers (website): Sun — الشَّمْسُ، السَّمَكُ، الدَّرْسُ · Moon — القَمَرُ، الكِتَابُ، الوَرْدُ.`,
    answerNotes: 'Reveal. Show a sun card / moon card on camera (website “Sun/moon response”) for each word as you say it again.',
  },
  {
    type: 'sorter', stage: 'wedo', flex: true, eyebrow: 'We do · website game “Sunlight or Moonlight?”', title: 'Sort all 14 letters', ar: 'شَمْسٌ أَمْ قَمَرٌ؟',
    categories: ['Sun letters', 'Moon letters'],
    items: [
      { ar: 'ب', cat: 1 }, { ar: 'ت', cat: 0 }, { ar: 'ج', cat: 1 }, { ar: 'د', cat: 0 }, { ar: 'ر', cat: 0 }, { ar: 'ح', cat: 1 }, { ar: 'س', cat: 0 },
      { ar: 'ا', cat: 1 }, { ar: 'ث', cat: 0 }, { ar: 'ذ', cat: 0 }, { ar: 'خ', cat: 1 }, { ar: 'ز', cat: 0 }, { ar: 'ش', cat: 0 }, { ar: 'ص', cat: 0 },
    ],
    answerSlide: { eyebrow: 'We do · sun and moon answers', title: 'Sorted: 9 sun, 5 moon', ar: 'الإِجَابَاتُ' },
    notes: 'FLEX — website game “Sunlight or Moonlight?” (sort all fourteen learned letters). Stretch: without the chart. Core: use the rule card.',
  },
  {
    type: 'routes', stage: 'youdo', min: 7, eyebrow: 'You do · independent practice · 7 minutes', title: 'Write: choose your route', ar: 'اُكْتُبْ',
    core: { amount: '7 new letters', task: 'Copy the seven new letters 4 times each. Circle the four breakers.', how: 'Trace first on the I do slide, then copy on the line. Say each name aloud.' },
    develop: { amount: '7 letters + rule', task: 'Copy the seven letters, then write the connection rule in your own English words.', how: 'Give one example: which letters break, which connect.' },
    stretch: { amount: 'letters 1–14', task: 'Write letters 1–14 in alphabet order from memory. Write S (sun) or M (moon) beside each.', how: 'Circle د ذ ر ز as the breakers (website homework).' },
    notes: 'YOU DO — WRITING (7 min). Stretch task = the website homework. LIVE FEEDBACK after 3 minutes: books to camera; check ر ز dip below the line and the three teeth of س ش.',
  },
  F.speakingSlide({
    speaking: {
      context: 'Partner flash: name, sound, break or connect',
      model: [
        ['A', 'مَا هٰذَا الحَرْفُ؟', 'What is this letter?'],
        ['B', 'هٰذَا دَالٌ. لَا يَتَّصِلُ بِمَا بَعْدَهُ.', 'This is dāl. It does not connect to the next letter.'],
        ['A', 'وَهٰذَا؟', 'And this one?'],
        ['B', 'هٰذَا سِينٌ. يَتَّصِلُ.', 'This is sīn. It connects.'],
      ],
    },
  }, {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'مَا هٰذَا الحَرْفُ؟' },
      { route: 'core', ar: 'هَلْ يَتَّصِلُ؟' },
      { route: 'develop', ar: 'شَمْسِيٌّ أَمْ قَمَرِيٌّ؟' },
      { route: 'stretch', ar: 'اِشْرَحِ القَاعِدَةَ.' },
    ],
    stems: [
      { route: 'core', ar: 'هٰذَا ______ .' },
      { route: 'develop', ar: '______ حَرْفٌ شَمْسِيٌّ / قَمَرِيٌّ .' },
      { route: 'stretch', ar: '______ لَا يَتَّصِلُ بِمَا بَعْدَهُ .' },
      { route: 'sum', ar: 'قَالَ / قَالَتْ : هٰذَا ______ .' },
    ],
    modelEn: ['What is this letter?', 'This is dāl. It does not connect to the next letter.'],
    notes: `PARTNER FLASH (website): A shows one of the 14 letters; B says its name and main sound; for today’s letters add “break” or “connect”. Swap after seven cards. Prompts: What is this letter? · Does it connect? · Sun or moon? · Explain the rule.
Heritage extension (website): write الشَّمْسُ and الْقَمَرُ, underline ال, circle the first letter after it, and explain why the pronunciation differs.`,
  }),
  {
    type: 'formsTable', stage: 'feedback', min: 2, eyebrow: 'Feedback · mix-ups and repairs', title: 'Mistakes that help us learn', ar: 'أَخْطَاءٌ شَائِعَةٌ',
    cols: [{ label: 'Likely mix-up', w: 5.6 }, { label: 'Repair cue', w: 6.73 }],
    rows: [
      { core: true, cells: ['Dot of ذ drawn below', 'The dot of dhāl is ABOVE, never below (website accuracy point).'] },
      { core: true, cells: ['Joining د or ر to the next letter', 'Breakers hold hands on the RIGHT only — leave a gap on the left.'] },
      { core: true, cells: ['ر written like د (on the line)', 'rāʾ and zāy curve DOWN below the line.'] },
      { cells: ['Saying ذ as /z/', 'Tongue lightly at the teeth: /ð/ as in “this”.'] },
      { cells: ['ص sounds like س', 'Raise the back of the tongue — darker, fuller.'] },
      { cells: ['Thinking sun letters are spelt differently', 'We always write ال; only the sound changes.'] },
    ],
    notes: 'FEEDBACK (2 min) — mix-ups drawn from the website accuracy points and pronunciation focus. Students check their writing against rows 1–3 and correct in green pen.',
  },
  F.selfCheckSlide([
    { route: 'core', text: 'I can recognise and name letters 1–14.' },
    { route: 'core', text: 'I can name the four connection breakers.' },
    { route: 'develop', text: 'I can explain the dot clues for today’s letters.' },
    { route: 'develop', text: 'I can explain “l heard” (moon) and “l absorbed” (sun).' },
    { route: 'stretch', text: 'I can write letters 1–14 in order and mark S or M.' },
  ]),
  F.exitTicket([
    q('Which letter has the emphatic /sˤ/ sound?', ['ص', 'س', 'ش'], 'ص ṣād (website final check 4).'),
    q('A non-connector creates a break before the next letter on which side?', ['Its left', 'Its right'], 'The following letter is on its LEFT (website final check 5).'),
    q('Which learned letter is a moon letter?', ['خ', 'ت', 'ص'], 'خ is a moon letter (website final check 8).'),
  ], 8),
  F.prepSlide({
    ...NEXT,
    words: [['ط  طَاءٌ', 'ṭāʾ · emphatic /tˤ/', ''], ['ع  عَيْنٌ', 'ʿayn · /ʕ/', ''], ['ف  فَاءٌ', 'fāʾ · /f/', ''], ['ق  قَافٌ', 'qāf · /q/', ''], ['ك  كَافٌ', 'kāf · /k/', '']],
    questionEn: 'Write letters 1–14 in order and mark S (sun) or M (moon).',
    questionAr: 'ا ب ت ث ج ح خ د ذ ر ز س ش ص',
    homework: {
      core: 'Website · F1-L02 · Connection Gate and Letter Detective games; copy the 7 new letters.',
      develop: 'Website · F1-L02 · “Sunlight or Moonlight?”, then explain the rule to someone at home.',
      stretch: 'Website homework: letters 1–14 from memory with S / M; circle the four breakers.',
    },
    wordsSource: 'Next lesson adds eight letters (ض ط ظ ع غ ف ق ك) and the long vowels. Preview five of them tonight.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: 5 new letters + letters 1–14 from memory.' }),
];

module.exports = { meta, slides };
