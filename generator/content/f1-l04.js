'use strict';
/*
 * F1-L04 · Complete the Alphabet & Read Short Vowels (letters 23–28; wāw/yāʾ roles; لا and hamza; fatḥa ḍamma kasra sukūn)
 * Website: Pathways › Foundation › F1 › Lesson 4. Picture game: website lesson game (short and long vowels on ب).
 */
const F = require('./f1-common');
const game = require('../site-data/pathway-visual-games.json')['f1-l04'];
const { q } = F;

const meta = F.meta({
  n: 4, fileTitle: 'Complete_Alphabet_Short_Vowels', chip: 'Letters 23–28 + vowels',
  title: 'Complete the Alphabet & Read Short Vowels', arabic: 'أَكْمِلِ الحُرُوفَ وَاقْرَأِ الحَرَكَاتِ',
  focus: 'Meet the last six letters (ل م ن ه و ي), see that و also breaks a connection, and use the four marks — fatḥa, ḍamma, kasra, sukūn — to read your first fully vowelled words.',
  icon: 'FaFlagCheckered', level: 'Foundation · complete beginner',
});
const NEXT = { nextCode: 'F1-L05', nextTitle: 'One Letter, Four Positions', nextAr: 'أَشْكَالُ الحُرُوفِ فِي الكَلِمَةِ' };
const L = (n, ar, name, en, dots, tag, core = true) => ({ n, ar, en, tr: dots, tag, core, forms: [{ l: 'name', ar: name }] });

const slides = [
  F.titleSlide({
    n: 4,
    source: 'The website lesson teaches letters 23–28 (ل م ن ه و ي), the two roles of wāw and yāʾ, the six connection breakers, awareness of لا and hamza ء, and the four marks fatḥa, ḍamma, kasra and sukūn with the words كَتَبَ، فَهِمَ، هُوَ، مِنْ. The retrieval check, games, formation tracker, partner tasks and the ten-item final check are the website’s; the vowel picture game is the website game for this lesson.',
    support: `• CORE: see · say · select — one letter or vowel card at a time; read بَ بُ بِ بْ. DEVELOP: combine consonants and marks, then blend short fully vowelled words. STRETCH: justify each choice with position, dot, connection or vowel terms.
• Alphabet milestone: all 28 letters today — celebrate, but accurate retrieval (not speed) is the success criterion (website).
• Heritage / Urdu readers know zabar (fatḥa), pesh (ḍamma), zer (kasra) and jazm (sukūn) from Qur’an reading — use those names as the bridge.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'The last six letters and four reading marks.', wedo: 'Final-letter detective, connection gate, vowel decoder.', next: 'F1-L05' }),
  F.doNow({
    questions: [
      q('Which letter ended F1-L03?', ['ك', 'ق', 'ل'], 'Letter 22 is ك kāf (website retrieval).'),
      q('Select ghayn.', ['غ', 'ع', 'ف'], 'غ = ʿayn + one dot.'),
      q('Which letter can carry long /ū/?', ['و', 'ا', 'ي'], 'ḍamma + wāw = /ū/.'),
      q('How long is a long vowel in the beginner timing model?', ['Roughly two beats', 'One beat'], 'Long = about two beats.'),
      q('Which letter is mīm (prepared at home)?', ['م', 'ن', 'ل'], 'Prepared at home: م mīm /m/.'),
    ],
    keyIdea: { text: 'Today we finish all 28 letters, and small marks tell us which vowel to say.', ar: 'بَ   بُ   بِ   بْ' },
    retrieves: 'Questions 1–4 are the website “F1-L03 readiness check” (3–4 → continue; 0–2 → repair the F1-L03 letters and long vowels first). Question 5 tests the home preparation.',
  }),
  F.objectivesSlide([
    'Recognise and name letters 23–28.',
    'Explain the two jobs of و and ي and name the six breakers.',
    'Recognise لا and hamza ء.',
    'Read fatḥa, ḍamma, kasra and sukūn.',
  ], {
    core: ['I can name the last six letters.', 'I can read بَ بُ بِ بْ.'],
    develop: ['I can blend short fully vowelled words.', 'I can explain when و and ي are consonants or long vowels.'],
    stretch: ['I can justify each choice with the correct term.', 'I can recite all 28 letters and name the six breakers.'],
  }, 1, 'Objectives and routes are the website F1-L04 outcomes.'),
  F.keywordsSlide({
    text: '6 final letters, 2 special signs and 4 reading marks. After today: all 28 letters!',
    groups: [
      { head: 'GROUP 1', name: 'Letters 23–28 · 6' },
      { head: 'GROUP 2', name: 'لا and ء · 2' },
      { head: 'GROUP 3', name: 'Reading marks · 4' },
    ],
    bridge: [
      { ar: 'فَتْحَةٌ', urdu: 'زبر', tr: 'zabar', en: 'fatḥa · short a' },
      { ar: 'ضَمَّةٌ', urdu: 'پیش', tr: 'pēsh', en: 'ḍamma · short u' },
      { ar: 'كَسْرَةٌ', urdu: 'زیر', tr: 'zēr', en: 'kasra · short i' },
      { ar: 'سُكُونٌ', urdu: 'جزم', tr: 'jazm', en: 'sukūn · no vowel' },
      { ar: 'هَمْزَةٌ', urdu: 'ہمزہ', tr: 'hamza', en: 'hamza · /ʔ/' },
    ],
    notes: 'URDU BRIDGE — the Qur’an-reading names students may already know: zabar = fatḥa, pēsh = ḍamma, zēr = kasra, jazm = sukūn, hamza = hamza. Teach the Arabic names, but welcome the familiar ones as a bridge.',
  }),
  {
    type: 'vocab', stage: 'teach', min: 3, bigAr: true, eyebrow: 'Key letters · letters 23–28 (website Part 1)', title: 'The last six letters', ar: 'آخِرُ سِتَّةِ حُرُوفٍ',
    items: [
      L(1, 'ل', 'لَامٌ', 'lām — /l/', 'tall stem · connector', 'letter 23'),
      L(2, 'م', 'مِيمٌ', 'mīm — /m/', 'rounded head · connector', 'letter 24'),
      L(3, 'ن', 'نُونٌ', 'nūn — /n/', 'ONE dot above · connector', 'letter 25'),
      L(4, 'ه', 'هَاءٌ', 'hāʾ — /h/ (hat)', 'open loop · connector', 'letter 26'),
      L(5, 'و', 'وَاوٌ', 'wāw — /w/ or long ū', 'BREAKER', 'letter 27'),
      L(6, 'ي', 'يَاءٌ', 'yāʾ — /y/ or long ī', 'TWO dots BELOW · connector', 'letter 28'),
    ],
    notes: `LETTERS 23–28 (website Part 1). Standard alphabet positions 23–28; hamza is a separate writing sign.
• ه hāʾ /h/ is a normal h — different from ح (deep breath, F1-L01).
• ن nūn: one dot above a deep bowl — do not confuse with ب ت (they are flat).
• ي yāʾ: two dots BELOW — the only letter with two dots below.
Milestone: recite all 28 together at the end of this slide.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Teacher instruction · one letter, more than one job (website Part 2)', title: 'wāw and yāʾ have two jobs', ar: 'الوَاوُ وَاليَاءُ',
    cards: [
      { chip: 'و · CONSONANT', head: '/w/', big: 'وَ', en: 'wa — wāw has its own vowel, so it is /w/.', clue: 'Compare: بُو = long ū (ḍamma before it matches).' },
      { chip: 'ي · CONSONANT', color: '0E7C86', head: '/y/', big: 'يَ', en: 'ya — yāʾ has its own vowel, so it is /y/.', clue: 'Compare: بِي = long ī (kasra before it matches).' },
      { chip: 'SIX BREAKERS', color: 'B83227', head: 'ا د ذ ر ز و', big: 'ا د ذ ر ز و', en: 'They do not join the NEXT letter (on their left).', clue: 'ي is a connector — it can join on both sides.' },
    ],
    notes: `WĀW AND YĀʾ (website Part 2): context and vowel marks show whether they are consonants or long-vowel carriers.
The six connection breakers are now complete: ا د ذ ر ز و. “Breaker” means it does not connect to the FOLLOWING letter on its left — it can still join the letter before it (website).`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Teacher instruction · special writing awareness (website Part 3)', title: 'Two special signs: لا and ء', ar: 'لَامُ أَلِفٍ وَالهَمْزَةُ',
    cards: [
      { chip: 'LĀM + ALIF', head: 'ل + ا ← لا', big: 'لَا', en: 'lā — no. Two letters in one special shape.', clue: 'Also in سَلَامٌ (peace). It is NOT a 29th letter.' },
      { chip: 'HAMZA', color: '7B3FA0', head: 'ء /ʔ/', big: 'ء  أ  ؤ  ئ', en: 'A “catch” in the throat, like the break in “uh-oh”.', clue: 'It can sit alone or on a seat. Seat rules come in F1-L06.' },
      { chip: 'ACCURACY', color: '8A6D1E', head: 'الله', big: 'الله', en: 'This word has no لا shape.', clue: 'Website note: it is not an example of lām + alif.' },
    ],
    notes: 'LĀM–ALIF AND HAMZA (website Part 3). Boundary: recognise hamza and its /ʔ/ sound today; do not ask beginners to choose the correct seat yet (website).',
  },
  {
    type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Teacher instruction · the four reading marks (website Part 4)', title: 'Make the letters readable', ar: 'الحَرَكَاتُ القَصِيرَةُ وَالسُّكُونُ',
    cols: [{ label: 'Mark', w: 2.4 }, { label: 'Where?', w: 2.1 }, { label: 'On ب', w: 2.0, size: 38 }, { label: 'Say', w: 1.8 }, { label: 'Example word', w: 4.03, size: 24 }],
    rows: [
      { core: true, cells: ['fatḥa  فَتْحَةٌ', 'small line ABOVE', 'بَ', 'ba', { ar: 'كَتَبَ', sub: 'kataba · he wrote (three fatḥas)' }] },
      { core: true, cells: ['ḍamma  ضَمَّةٌ', 'small curl ABOVE', 'بُ', 'bu', { ar: 'هُوَ', sub: 'huwa · he' }] },
      { core: true, cells: ['kasra  كَسْرَةٌ', 'small line BELOW', 'بِ', 'bi', { ar: 'فَهِمَ', sub: 'fahima · he understood' }] },
      { core: true, cells: ['sukūn  سُكُونٌ', 'small circle ABOVE', 'بْ', 'b (no vowel)', { ar: 'مِنْ', sub: 'min · from' }] },
    ],
    notes: `THE FOUR MARKS (website Part 4). The first three add a short vowel; sukūn shows that NO short vowel follows that consonant.
Website accuracy point: sukūn is not a “silent letter” — the consonant is pronounced; it just has no vowel after it. In هَلْ the lām is heard and closes the syllable.
Gestures: fatḥa = hand up and open (a); ḍamma = lips rounded (u); kasra = hand points down (i); sukūn = fist, stop.
Colour game (website “Vowel detective”): fatḥa gold, ḍamma blue, kasra green, sukūn purple.`,
  },
  F.quickCheck([
    q('Which is the final letter in the 28-letter sequence?', ['ي', 'و', 'ء'], 'ي yāʾ is letter 28 (website final check 2).'),
    q('Which final-group letter breaks before the next letter?', ['و', 'ه', 'ي'], 'و wāw is a breaker (website final check 3).'),
    q('Read مُ', ['mu', 'ma', 'mi'], 'ḍamma = u (website final check 7).'),
    q('Read نِ', ['ni', 'na', 'nu'], 'kasra = i (website final check 8).'),
  ], 'website final check questions 2, 3, 7 and 8.'),
  {
    type: 'trace', stage: 'ido', min: 5, eyebrow: 'I do · watch → air-write → trace → copy (website formation tracker)', title: 'Watch me write the last six letters', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    cols: 3,
    items: [
      { ar: 'ل', name: 'لَام', steps: ['A tall stroke down from the top.', 'Curve round below the line.'] },
      { ar: 'م', name: 'مِيم', steps: ['A small round head on the line.', 'A straight tail down.'] },
      { ar: 'ن', name: 'نُون', steps: ['A deep round bowl.', 'ONE dot above, in the middle.'] },
      { ar: 'ه', name: 'هَاء', steps: ['Start at the top.', 'One round loop, closed.'] },
      { ar: 'و', name: 'وَاو', steps: ['A small round head.', 'A tail curving down below the line.'] },
      { ar: 'ي', name: 'يَاء', steps: ['A curved body with a round tail.', 'TWO dots BELOW.'] },
    ],
    notes: `I DO — FORMATION (5 min). Website: write each new letter four times, then check the baseline, dot placement and proportions. Positional forms are previewed only; F1-L05 teaches them.
Then the website “four-way build”: choose a learned consonant and write it with fatḥa, ḍamma, kasra and sukūn (e.g. نَ نُ نِ نْ).`,
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · website game “Final-Letter Detective”', title: 'Final-letter detective', ar: 'مُحَقِّقُ الحُرُوفِ',
    seed: 13,
    questions: [
      q('What is this letter called?', ['نُونٌ', 'بَاءٌ', 'يَاءٌ'], 'Deep bowl + one dot above.', { ar: 'ن', arBig: true }),
      q('What is this letter called?', ['يَاءٌ', 'تَاءٌ', 'نُونٌ'], 'Two dots below.', { ar: 'ي', arBig: true }),
      q('What is this letter called?', ['وَاوٌ', 'مِيمٌ', 'رَاءٌ'], 'Round head, tail down — a breaker.', { ar: 'و', arBig: true }),
      q('What is this letter called?', ['هَاءٌ', 'حَاءٌ', 'خَاءٌ'], 'The ordinary h — a closed loop.', { ar: 'ه', arBig: true }),
      q('What is this letter called?', ['لَامٌ', 'أَلِفٌ', 'كَافٌ'], 'Tall stem with a curve below.', { ar: 'ل', arBig: true }),
    ],
    side: { kind: 'core', label: 'CORE', text: 'Use shape, dots, sound and role together.\nTwo dots below → yāʾ\nOne dot above a bowl → nūn' },
    answerSlide: { min: 0, eyebrow: 'We do · final-letter detective answers', title: 'Answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — website game “Final-Letter Detective” (use shape, dots, sound and role together). Teacher-made items with today’s letters.',
    answerNotes: 'Reveal, then all 28 letters recited together (alphabet milestone).',
  },
  {
    type: 'sorter', stage: 'wedo', min: 2, eyebrow: 'We do · website game “Connection Gate”', title: 'Which letters break the chain?', ar: 'بَوَّابَةُ الاِتِّصَالِ',
    categories: ['Breaks after it', 'Connects on both sides'],
    items: [
      { ar: 'م', cat: 1 }, { ar: 'و', cat: 0 }, { ar: 'ي', cat: 1 }, { ar: 'ا', cat: 0 },
      { ar: 'ل', cat: 1 }, { ar: 'ر', cat: 0 }, { ar: 'ن', cat: 1 }, { ar: 'د', cat: 0 },
    ],
    answerSlide: { eyebrow: 'We do · connection gate answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — website game “Connection Gate” (classify each final letter; pay special attention to wāw and yāʾ). Revision letters ا ر د added so the six breakers can be reviewed. Stretch: name all six breakers (ا د ذ ر ز و).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · website game “Diacritic Decoder” and the lesson vowel game', title: 'Diacritic decoder: read it', ar: 'اِقْرَأِ الحَرَكَاتِ',
    seed: 14,
    questions: [
      q('Read', ['ba', 'bu', 'bi'], game.items[0].feedback, { ar: 'بَ', arBig: true }),
      q('Read', ['bi', 'ba', 'bu'], game.items[1].feedback, { ar: 'بِ', arBig: true }),
      q('Read', ['bu', 'bi', 'ba'], game.items[2].feedback, { ar: 'بُ', arBig: true }),
      q('Read', ['min', 'mina', 'mun'], 'kasra then sukūn (website final check 10).', { ar: 'مِنْ', arBig: true }),
      q('What does sukūn show?', ['No following short vowel', 'The letter is always silent'], 'The consonant is said; no vowel follows (website final check 9).'),
    ],
    side: { kind: 'core', label: 'CORE', text: 'Line above → a\nCurl above → u\nLine below → i\nCircle → stop' },
    answerSlide: { min: 0, eyebrow: 'We do · diacritic decoder answers', title: 'Answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — website game “Diacritic Decoder” (name the short vowel or explain the sukūn) and the website lesson game (بَ بِ بُ). Read each item aloud together after answering.',
    answerNotes: 'Reveal. Then chorally read the four website words: كَتَبَ · فَهِمَ · هُوَ · مِنْ.',
  },
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · read aloud · the website words', title: 'Your first Arabic words', ar: 'كَلِمَاتِي الأُولَى',
    lines: [
      ['كَتَبَ', 'kataba — he wrote (three fatḥas)'],
      ['فَهِمَ', 'fahima — he understood (fatḥa, kasra, fatḥa)'],
      ['هُوَ', 'huwa — he (ḍamma, then fatḥa)'],
      ['مِنْ', 'min — from (kasra, then sukūn)'],
      ['لَا', 'lā — no (lām + alif)'],
      ['سَلَامٌ', 'salām — peace'],
    ],
    notes: `READ ALOUD (3 min) — the website example words. Routine: point to each letter → say its mark → blend. Echo reading first (teacher, then class), then volunteers (invitation; “pass” allowed).
Heritage precision (website): read in careful MSA and justify every mark.`,
  },
  {
    type: 'routes', stage: 'youdo', min: 7, eyebrow: 'You do · independent practice · 7 minutes', title: 'Write: choose your route', ar: 'اُكْتُبْ',
    core: { amount: '6 letters + 4 marks', task: 'Copy the six new letters 3 times each. Then write بَ بُ بِ بْ and read them aloud.', how: 'Trace first. Say each name as you write.' },
    develop: { amount: 'four-way build', task: 'Copy the six letters. Then choose 3 letters you know and write each with fatḥa, ḍamma, kasra and sukūn.', how: 'Your partner reads your rows (website four-way build).' },
    stretch: { amount: 'all 28', task: 'Write all 28 letters in order from memory and circle the six breakers. Copy كَتَبَ فَهِمَ هُوَ مِنْ and colour each mark.', how: 'fatḥa gold · ḍamma blue · kasra green · sukūn purple (website vowel detective).' },
    notes: 'YOU DO — WRITING (7 min) = the website homework (all 28 letters, circle the six breakers, write and read بَ بُ بِ بْ and one fully vowelled word) split by route. LIVE FEEDBACK after 3 minutes.',
  },
  F.speakingSlide({
    speaking: {
      context: 'Four-way build: write it, your partner reads it',
      model: [
        ['A', 'اِقْرَأْ: نَ · نُ · نِ · نْ', 'Read: na · nu · ni · n'],
        ['B', 'نَ، نُ، نِ، نْ.', 'na, nu, ni, n.'],
        ['A', 'وَهٰذِهِ الكَلِمَةُ؟ هُوَ', 'And this word? huwa'],
        ['B', 'هُوَ: ضَمَّةٌ ثُمَّ فَتْحَةٌ.', 'huwa: ḍamma, then fatḥa.'],
      ],
    },
  }, {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'اِقْرَأْ: بَ · بُ · بِ · بْ' },
      { route: 'core', ar: 'مَا هٰذَا الحَرْفُ؟' },
      { route: 'develop', ar: 'اِقْرَأْ: كَتَبَ · هُوَ · مِنْ' },
      { route: 'stretch', ar: 'اِقْرَأِ الحُرُوفَ كُلَّهَا.' },
    ],
    stems: [
      { route: 'core', ar: 'هٰذَا ______ .' },
      { route: 'develop', ar: 'هٰذِهِ فَتْحَةٌ / ضَمَّةٌ / كَسْرَةٌ / سُكُونٌ .' },
      { route: 'stretch', ar: 'ا ب ت ث … ن ه و ي' },
      { route: 'sum', ar: 'قَرَأَ / قَرَأَتْ ______ .' },
    ],
    modelEn: ['Read: na · nu · ni · n', 'na, nu, ni, n.'],
    notes: 'FOUR-WAY BUILD (website): A writes a consonant with fatḥa, ḍamma, kasra and sukūn; B reads the four results. Stretch: alphabet milestone — recite all 28 letters in order, then name the six breakers (accuracy, not speed — website).',
  }),
  {
    type: 'formsTable', stage: 'feedback', min: 2, eyebrow: 'Feedback · mix-ups and repairs', title: 'Mistakes that help us learn', ar: 'أَخْطَاءٌ شَائِعَةٌ',
    cols: [{ label: 'Likely mix-up', w: 5.6 }, { label: 'Repair cue', w: 6.73 }],
    rows: [
      { core: true, cells: ['Mixing fatḥa and kasra', 'Same small line: ABOVE = a, BELOW = i.'] },
      { core: true, cells: ['Joining و to the next letter', 'wāw is a breaker — like ا د ذ ر ز.'] },
      { core: true, cells: ['Mixing ه and ح', 'ه is the ordinary h; ح is the deep breath.'] },
      { cells: ['Treating sukūn as a silent letter', 'Say the consonant — just add no vowel (هَلْ).'] },
      { cells: ['Counting لا as a new letter', 'It is lām + alif — still 28 letters.'] },
      { cells: ['Thinking الله contains لا', 'It does not (website accuracy note).'] },
    ],
    notes: 'FEEDBACK (2 min) — mix-ups based on the website accuracy points. Students correct in green pen.',
  },
  F.selfCheckSlide([
    { route: 'core', text: 'I can name letters 23–28.' },
    { route: 'core', text: 'I can read بَ بُ بِ بْ.' },
    { route: 'develop', text: 'I can blend كَتَبَ · فَهِمَ · هُوَ · مِنْ.' },
    { route: 'develop', text: 'I can explain the two jobs of و and ي.' },
    { route: 'stretch', text: 'I can recite all 28 letters and name the six breakers.' },
  ]),
  F.exitTicket([
    q('What does لا represent?', ['Two letters: lām + alif', 'A twenty-ninth letter'], 'lām + alif (website final check 4).'),
    q('Which sign represents the glottal stop /ʔ/?', ['ء', 'ع', 'ه'], 'hamza (website final check 5).'),
    q('What does fatḥa supply? (as in بَ)', ['Short /a/', 'Short /u/', 'Short /i/'], 'fatḥa = short a (website final check 6).'),
  ], 10),
  F.prepSlide({
    ...NEXT,
    words: [['بـ', 'bāʾ at the START of a word', ''], ['ـبـ', 'bāʾ in the MIDDLE', ''], ['ـب', 'bāʾ at the END', ''], ['كَتَبَ', 'he wrote', ''], ['بَيْتٌ', 'house', 'pl. بُيُوتٌ']],
    questionEn: 'Write all 28 letters in order and circle the six breakers.',
    questionAr: 'ا د ذ ر ز و',
    homework: {
      core: 'Website · F1-L04 · play the vowel game; write بَ بُ بِ بْ with three letters.',
      develop: 'Website homework: all 28 letters in order; circle the six breakers.',
      stretch: 'Website · F1-L04 · Heritage precision: fully vowel a familiar word and justify every mark.',
    },
    wordsSource: 'Next lesson: letters change shape at the start, middle and end of a word. Look at how ب changes in the three shapes above.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: all 28 letters + the six breakers.' }),
];

module.exports = { meta, slides };
