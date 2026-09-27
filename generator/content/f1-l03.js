'use strict';
/*
 * F1-L03 · Powerful Sounds & Long Vowels (letters 15–22; ā ū ī)
 * Website: Pathways › Foundation › F1 › Lesson 3. Picture game: website lesson game (short and long vowels on ب).
 */
const F = require('./f1-common');
const game = require('../site-data/pathway-visual-games.json')['f1-l03'];
const { q } = F;

const meta = F.meta({
  n: 3, fileTitle: 'Powerful_Sounds_Long_Vowels', chip: 'Letters 15–22',
  title: 'Powerful Sounds & Long Vowels', arabic: 'الحُرُوفُ مِنْ ١٥ إِلَى ٢٢ وَالمَدُّ',
  focus: 'Add eight letters (ض ط ظ ع غ ف ق ك), hear the difference between plain and “emphatic” sounds, and build the three long vowels: بَا · بُو · بِي.',
  icon: 'FaVolumeHigh', level: 'Foundation · complete beginner',
});
const NEXT = { nextCode: 'F1-L04', nextTitle: 'Final Letters & Short Vowels', nextAr: 'آخِرُ الحُرُوفِ وَالحَرَكَاتُ القَصِيرَةُ' };
const L = (n, ar, name, en, dots, tag, core = true) => ({ n, ar, en, tr: dots, tag, core, forms: [{ l: 'name', ar: name }] });

const slides = [
  F.titleSlide({
    n: 3,
    source: 'The website lesson teaches the emphatic letters ض ط ظ (with plain/emphatic contrasts), the ع غ family with a “safe practice ladder”, ف ق ك, and long vowels (fatḥa + ا, ḍamma + و, kasra + ي). The retrieval check, listening script, articulation cues, long-vowel table and examples (بَاب، سُوق، كَبِير), games and the ten-item final check are the website’s; the vowel picture game is the website game for this lesson.',
    support: `• CORE: see · say · select — one family at a time, with mouth cues; recognise the 8 letters and build بَا بُو بِي. DEVELOP: explain the visual or sound clue behind each choice. STRETCH: build unfamiliar syllables and find the vowel carriers in words.
• Emphatic and throat sounds: accept an improving approximation at Foundation (website). “Emphatic” is NOT shouting — a changed tongue shape, not extra volume. Stop if a throat sound feels uncomfortable.
• Heritage / Urdu readers: in Urdu ض ظ are both /z/ and ط is /t/ — the MSA emphatics are the key learning today. Describe dialect variation without calling home varieties “wrong” (website).`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Eight new letters and three long vowels.', wedo: 'Plain or emphatic? Letter detective, one beat or two?', next: 'F1-L04' }),
  F.doNow({
    questions: [
      q('Which letter ended the previous lesson?', ['ص', 'ش', 'ض'], 'F1-L02 ended at letter 14: ص ṣād (website retrieval).'),
      q('What happens after د?', ['A connection break', 'It always connects'], 'د is a breaker: no join to the next letter.'),
      q('Select dhāl, the dotted partner of dāl.', ['ذ', 'د', 'ز'], 'ذ dhāl.'),
      q('Is ص a sun or moon letter?', ['Sun', 'Moon'], 'ص is a sun letter.'),
      q('Which letter is qāf (prepared at home)?', ['ق', 'ف', 'ك'], 'Prepared at home: ق qāf — two dots above.'),
    ],
    keyIdea: { text: 'Some letters have a “heavy” twin; and three letters can make a vowel long.', ar: 'د ← ض   ·   بَ ← بَا' },
    retrieves: 'Questions 1–4 are the website “F1-L02 readiness check” (3–4 correct → continue; 0–2 → revisit the L02 families and connection rule). Question 5 tests the home preparation.',
  }),
  F.objectivesSlide([
    'Recognise and name letters 15–22.',
    'Hear plain and emphatic sounds (د/ض, ت/ط, ذ/ظ).',
    'Tell ع and غ apart, and ف ق ك apart.',
    'Build and read long vowels: ā · ū · ī.',
  ], {
    core: ['I can recognise letters 15–22 and say their names.', 'I can build بَا · بُو · بِي.'],
    develop: ['I can explain the clue behind each choice.', 'I can hear the plain / emphatic contrast.'],
    stretch: ['I can build new syllables with long vowels.', 'I can find the long-vowel letter inside a word.'],
  }, 3, 'Objectives and routes are the website F1-L03 outcomes.'),
  F.keywordsSlide({
    text: '8 new letters in 3 groups, plus 3 long vowels. After today we know 22 of the 28 letters!',
    groups: [
      { head: 'GROUP 1', name: 'Emphatic · 3' },
      { head: 'GROUP 2', name: 'Throat + back · 5' },
      { head: 'VOWELS', name: 'Long ā ū ī · 3' },
    ],
    bridge: [
      { ar: 'ط', urdu: 'طوئے', tr: 'tōʾē', en: 'Arabic: ṭāʾ (emphatic t)' },
      { ar: 'ع', urdu: 'عین', tr: 'ʿain', en: 'Arabic: ʿayn' },
      { ar: 'غ', urdu: 'غین', tr: 'ghain', en: 'Arabic: ghayn' },
      { ar: 'ق', urdu: 'قاف', tr: 'qāf', en: 'qāf — the same' },
      { ar: 'ك', urdu: 'کاف', tr: 'kāf', en: 'kāf (Urdu writes it کـ)' },
    ],
    notes: `URDU BRIDGE: the shapes are familiar. Differences: Urdu ض ظ are /z/ and ط is /t/, but in Arabic they are EMPHATIC /dˤ/ /ðˤ/ /tˤ/. The isolated Arabic kāf is ك (with a small mark inside), while Urdu writes کاف without it — same letter.
غ /ɣ/ and خ /x/ exist in Urdu too (ghain, khē) — praise these; ع is often silent in Urdu speech but pronounced in Arabic.`,
  }),
  {
    type: 'vocab', stage: 'teach', min: 3, bigAr: true, eyebrow: 'Key letters · Group 1 · the emphatic letters (website Part 1)', title: 'Heavy, darker sounds', ar: 'الحُرُوفُ المُفَخَّمَةُ',
    items: [
      L(1, 'ض', 'ضَادٌ', 'ḍād — emphatic /dˤ/', 'ONE dot above · connector', 'emphatic'),
      L(2, 'ط', 'طَاءٌ', 'ṭāʾ — emphatic /tˤ/', 'no dot · connector', 'emphatic'),
      L(3, 'ظ', 'ظَاءٌ', 'ẓāʾ — emphatic /ðˤ/', 'ONE dot above · connector', 'emphatic'),
    ],
    notes: `NEW LETTERS 15–17 (website Part 1). Articulation cues (website):
• ض: start from /d/, then add emphatic resonance — back of the tongue raised. (Arabic is called “the language of ḍād”.)
• ط: start from /t/ but make it emphatic and unaspirated — firm, no English puff of air.
• ظ: for careful MSA, begin from /ð/ as in “this”, then add emphasis — tongue at the teeth, darker resonance.
Shapes: ض = ص + dot; ظ = ط + dot. “Emphatic” ≠ shouting (website).`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Teacher instruction · plain versus emphatic (website)', title: 'Light or heavy?', ar: 'مُرَقَّقٌ أَمْ مُفَخَّمٌ؟',
    cols: [{ label: 'Sound', w: 2.6 }, { label: 'Plain (light)', w: 2.6, size: 36 }, { label: 'Emphatic (heavy)', w: 2.6, size: 36 }, { label: 'How to make it heavy', w: 4.53 }],
    rows: [
      { core: true, cells: ['/d/ → /dˤ/', 'د', 'ض', 'Say /d/, then raise the back of your tongue.'] },
      { core: true, cells: ['/t/ → /tˤ/', 'ت', 'ط', 'Say /t/ firmly, no puff of air, tongue back up.'] },
      { core: true, cells: ['/ð/ → /ðˤ/', 'ذ', 'ظ', 'Say “this” /ð/, then make it darker.'] },
      { cells: ['/s/ → /sˤ/ (F1-L02)', 'س', 'ص', 'Revision: the first emphatic letter.'] },
    ],
    notes: 'PLAIN VS EMPHATIC (website table). Model each pair three times: light, heavy, light, heavy. Students echo softly with mics muted. Tip: emphatic sounds make the next vowel sound deeper (طَا sounds like “taw”).',
  },
  {
    type: 'vocab', stage: 'teach', min: 3, bigAr: true, eyebrow: 'Key letters · Group 2 · ع غ (website Part 2) and ف ق ك (Part 3)', title: 'Throat and back-of-the-mouth letters', ar: 'حُرُوفٌ مِنَ الحَلْقِ',
    items: [
      L(4, 'ع', 'عَيْنٌ', 'ʿayn — /ʕ/ (voiced, from the throat)', 'no dot', 'ʿayn family'),
      L(5, 'غ', 'غَيْنٌ', 'ghayn — /ɣ/ (like a voiced خ)', 'ONE dot above', 'ʿayn family'),
      L(6, 'ف', 'فَاءٌ', 'fāʾ — /f/', 'ONE dot above', 'fāʾ / qāf'),
      L(7, 'ق', 'قَافٌ', 'qāf — /q/ (deep k)', 'TWO dots above', 'fāʾ / qāf'),
      L(8, 'ك', 'كَافٌ', 'kāf — /k/', 'kāf mark inside', 'kāf'),
    ],
    notes: `NEW LETTERS 18–22 (website Parts 2–3).
• ع /ʕ/: gently narrow the throat and keep the voice on. غ /ɣ/: a voiced friction sound at the back, like a voiced خ (French “r”). Same body; the dot turns ʿayn into ghayn.
• SAFE PRACTICE LADDER (website): listen → watch (no squeezing or coughing) → echo softly → stop if uncomfortable; accuracy develops gradually.
• ف /f/ lower lip meets the upper teeth · ق /q/ a voiceless stop made further back than ك · ك /k/ as in “skin”, no extra vowel after it.
All eight letters today CONNECT on both sides (website final check 5).`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Teacher instruction · hold the sound (website Part 4)', title: 'Three long vowels', ar: 'الحَرَكَاتُ الطَّوِيلَةُ',
    cols: [{ label: 'Long sound', w: 2.3 }, { label: 'Build it', w: 2.5 }, { label: 'Model', w: 2.8, size: 30 }, { label: 'Word', w: 2.4, size: 26 }, { label: 'Meaning', w: 2.33 }],
    rows: [
      { core: true, cells: ['/ā/ — a held “a”', 'fatḥa + alif', { ar: 'بَ + {k|ا} ← بَ{k|ا}', sub: 'bā · two beats' }, { ar: 'بَ{k|ا}بٌ', sub: 'bāb' }, 'door'] },
      { core: true, cells: ['/ū/ — a held “oo”', 'ḍamma + wāw', { ar: 'بُ + {k|و} ← بُ{k|و}', sub: 'bū · two beats' }, { ar: 'سُ{k|و}قٌ', sub: 'sūq' }, 'market'] },
      { core: true, cells: ['/ī/ — a held “ee”', 'kasra + yāʾ', { ar: 'بِ + {k|ي} ← بِ{k|ي}', sub: 'bī · two beats' }, { ar: 'كَبِ{k|ي}رٌ', sub: 'kabīr' }, 'big'] },
    ],
    foot: 'A long vowel lasts about TWO beats. The short mark before it must match: fatḥa + alif · ḍamma + wāw · kasra + yāʾ.',
    notes: `LONG VOWELS (website Part 4). Teal = the long-vowel letter (carrier).
Precise rule (website): ا و ي are not automatically long vowels everywhere; in these beginner patterns the short vowel before must match the carrier (fatḥa + ا, ḍamma + و, kasra + ي).
Dual-role preview (website): و can also be the consonant /w/ and ي the consonant /y/ — taught formally in F1-L04, not assessed today.
The short-vowel marks are previewed only; F1-L04 teaches their names.
Clap it: بَ = one clap · بَا = hold for two claps.`,
  },
  F.quickCheck([
    q('Select the dotted partner of ط.', ['ظ', 'ض', 'غ'], 'ظ = ط + one dot (website final check 2).'),
    q('Which letter is ghayn?', ['غ', 'ع', 'ق'], 'غ: ʿayn’s body + one dot.'),
    q('Which letter has two dots above?', ['ق', 'ف', 'ك'], 'ق qāf.'),
    q('Which pattern contains a long vowel?', ['بِي', 'بِ', 'بَ'], 'بِي: kasra + yāʾ = long /ī/.'),
  ], 'website final check questions 2, 3, 4 and 9.'),
  {
    type: 'trace', stage: 'ido', min: 5, eyebrow: 'I do · watch → air-write → trace → copy (website formation tracker)', title: 'Watch me write the eight new letters', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    cols: 4,
    items: [
      { ar: 'ض', name: 'ضَاد', steps: ['Write ص (loop + bowl).', 'ONE dot above the loop.'] },
      { ar: 'ط', name: 'طَاء', steps: ['A flat loop on the line.', 'A tall straight stroke.'] },
      { ar: 'ظ', name: 'ظَاء', steps: ['Write ط.', 'ONE dot beside the tall stroke.'] },
      { ar: 'ع', name: 'عَيْن', steps: ['Small open curve on top.', 'Big bowl below the line.'] },
      { ar: 'غ', name: 'غَيْن', steps: ['Write ع.', 'ONE dot above.'] },
      { ar: 'ف', name: 'فَاء', steps: ['Small loop, then a long flat tail.', 'ONE dot above.'] },
      { ar: 'ق', name: 'قَاف', steps: ['Loop, then a deep round bowl.', 'TWO dots above.'] },
      { ar: 'ك', name: 'كَاف', steps: ['Tall stroke, then the base.', 'The small kāf mark inside.'] },
    ],
    notes: `I DO — FORMATION (5 min). Website: after watching a verified model, write each letter four times; tick only when the baseline, dots and proportions are controlled.
Watch for: ف sits ON the line with a flat tail; ق has a deeper, rounder bowl that dips below the line — that and the two dots tell it apart from ف. ط/ظ: the tall stroke is written after the loop.`,
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · website listening · plain or emphatic?', title: 'Plain (P) or emphatic (E)?', ar: 'مُرَقَّقٌ أَمْ مُفَخَّمٌ؟',
    seed: 10,
    questions: [
      q('Pair 1: which order did you hear?', ['Plain first, then emphatic', 'Emphatic first, then plain'], 'Script: دَ، ضَ.'),
      q('Pair 2: which order did you hear?', ['Plain first, then emphatic', 'Emphatic first, then plain'], 'Script: تَ، طَ.'),
      q('Pair 3: which order did you hear?', ['Plain first, then emphatic', 'Emphatic first, then plain'], 'Script: ذَ، ظَ.'),
      q('Which letter is emphatic?', ['ط', 'ت', 'د'], 'ط is the emphatic partner of ت.'),
    ],
    side: { kind: 'info', head: 'LISTEN TWICE', text: 'Write P or E for each sound in your book.\nHeavy, darker sound = E.' },
    answerSlide: { min: 0, eyebrow: 'We do · plain or emphatic answers', title: 'Answers', ar: 'الإِجَابَاتُ' },
    notes: `WEBSITE LISTENING (3 min). Read each pair twice. Students write P or E for each sound in order first.
Script: دَ، ضَ. تَ، طَ. ذَ، ظَ. — Answer (website): P then E in every pair.
Extension: read a pair in the other order and see who notices.`,
    answerNotes: 'Reveal. Then two volunteers produce one pair each (invitation only).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · website game “Letter Detective” (shape + dots + sound)', title: 'Letter detective: what is its name?', ar: 'مُحَقِّقُ الحُرُوفِ',
    seed: 11,
    questions: [
      q('What is this letter called?', ['ضَادٌ', 'صَادٌ', 'ظَاءٌ'], 'Loop + bowl + one dot.', { ar: 'ض', arBig: true }),
      q('What is this letter called?', ['غَيْنٌ', 'عَيْنٌ', 'فَاءٌ'], 'ʿayn body + one dot.', { ar: 'غ', arBig: true }),
      q('What is this letter called?', ['قَافٌ', 'فَاءٌ', 'كَافٌ'], 'Deep bowl + two dots.', { ar: 'ق', arBig: true }),
      q('What is this letter called?', ['طَاءٌ', 'ظَاءٌ', 'ضَادٌ'], 'Loop + tall stroke, no dot.', { ar: 'ط', arBig: true }),
      q('What is this letter called?', ['فَاءٌ', 'قَافٌ', 'غَيْنٌ'], 'Flat tail + one dot.', { ar: 'ف', arBig: true }),
    ],
    side: { kind: 'core', label: 'CORE', text: 'Two clues:\n1. the shape (loop? tall stroke? bowl?)\n2. the dots (how many? where?)' },
    answerSlide: { min: 0, eyebrow: 'We do · letter detective answers', title: 'Letter detective: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — based on the website game “Letter Detective” (combine shape, dots and sound instead of relying on one clue). Teacher-made items with today’s letters.',
    answerNotes: 'Reveal; whole class says each name. Partner echo (website): A reads one model, B names the letter and explains the clue.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: `We do · website game for this lesson · short or long?`, title: 'One beat or two?', ar: 'حَرَكَةٌ قَصِيرَةٌ أَمْ طَوِيلَةٌ؟',
    seed: 12,
    questions: [
      q('Which is the long /ā/?', ['بَا', 'بَ', 'بِ'], game.items[3].feedback),
      q('Which is the long /ū/?', ['بُو', 'بُ', 'بَا'], game.items[5].feedback),
      q('Which is the long /ī/?', ['بِي', 'بِ', 'بُو'], game.items[4].feedback),
      q('Which is SHORT (one beat)?', ['بُ', 'بُو', 'بِي'], game.items[2].feedback),
      q('Which letter makes /ū/ long?', ['و', 'ا', 'ي'], 'wāw lengthens the /u/ (website final check 7).'),
    ],
    side: { kind: 'core', label: 'CORE', text: 'Look for the long-vowel letter after ب:\nا → ā · و → ū · ي → ī\nNo letter after ب → short.' },
    answerSlide: { min: 0, eyebrow: 'We do · one beat or two · answers', title: 'Answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — website game for this lesson (بَ بِ بُ بَا بِي بُو) and the website game “One Beat or Two?”. Say each pattern softly before choosing; clap the beats.',
    answerNotes: 'Reveal and clap each answer together.',
  },
  {
    type: 'sorter', stage: 'wedo', flex: true, eyebrow: 'We do · website game “Sound Laboratory”', title: 'Sort today’s letters', ar: 'مُخْتَبَرُ الأَصْوَاتِ',
    categories: ['Emphatic', 'ʿayn family', 'fāʾ · qāf · kāf'],
    items: [
      { ar: 'ق', cat: 2 }, { ar: 'ض', cat: 0 }, { ar: 'غ', cat: 1 }, { ar: 'ك', cat: 2 },
      { ar: 'ط', cat: 0 }, { ar: 'ع', cat: 1 }, { ar: 'ف', cat: 2 }, { ar: 'ظ', cat: 0 },
    ],
    answerSlide: { eyebrow: 'We do · sound laboratory answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
    notes: 'FLEX — website game “Sound Laboratory” (sort by the teaching group used in this lesson).',
  },
  {
    type: 'routes', stage: 'youdo', min: 7, eyebrow: 'You do · independent practice · 7 minutes', title: 'Write: choose your route', ar: 'اُكْتُبْ',
    core: { amount: '8 letters + 3 patterns', task: 'Copy the eight new letters 3 times each. Then copy بَا · بُو · بِي.', how: 'Trace first; say each name as you write.' },
    develop: { amount: '8 letters + 2 rows', task: 'Copy the eight letters, then build long-vowel rows with two letters you know — for example with tāʾ and sīn.', how: 'Read each row aloud to a partner.' },
    stretch: { amount: 'find the carriers', task: 'Write the 8 letters from memory. Copy بَابٌ · سُوقٌ · كَبِيرٌ and circle the long-vowel letter in each.', how: 'Then build three new syllables of your own.' },
    notes: 'YOU DO — WRITING (7 min) = the website homework (letters four times each; build and read three long-vowel rows using two learned consonants) and “Build and read” task. LIVE FEEDBACK after 3 minutes.',
  },
  F.speakingSlide({
    speaking: {
      context: 'Build and read: partner echo',
      model: [
        ['A', 'اِقْرَأْ: بَا · بُو · بِي', 'Read: bā · bū · bī'],
        ['B', 'بَا · بُو · بِي. هٰذِهِ حَرَكَاتٌ طَوِيلَةٌ.', 'bā · bū · bī. These are long vowels.'],
        ['A', 'وَهٰذَا الحَرْفُ؟', 'And this letter?'],
        ['B', 'هٰذَا قَافٌ. فَوْقَهُ نُقْطَتَانِ.', 'This is qāf. It has two dots above it.'],
      ],
    },
  }, {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'مَا هٰذَا الحَرْفُ؟' },
      { route: 'core', ar: 'اِقْرَأْ: بَا · بُو · بِي' },
      { route: 'develop', ar: 'مُرَقَّقٌ أَمْ مُفَخَّمٌ؟' },
      { route: 'stretch', ar: 'اِبْنِ مَقَاطِعَ جَدِيدَةً.' },
    ],
    stems: [
      { route: 'core', ar: 'هٰذَا ______ .' },
      { route: 'develop', ar: '______ مُفَخَّمٌ ، ______ مُرَقَّقٌ .' },
      { route: 'stretch', ar: 'سَا · سُو · سِي' },
      { route: 'sum', ar: 'قَرَأَ / قَرَأَتْ ______ .' },
    ],
    modelEn: ['Read: bā · bū · bī', 'bā · bū · bī. These are long vowels.'],
    notes: 'PARTNER ECHO and BUILD AND READ (website): A reads one model; B identifies the letter or vowel length and explains the clue. Then choose a learned consonant and build three patterns ـَا ـُو ـِي for the partner to read. Swap after six turns. Prompts: What is this letter? · Read … · Plain or emphatic? · Build new syllables.',
  }),
  {
    type: 'formsTable', stage: 'feedback', min: 2, eyebrow: 'Feedback · mix-ups and repairs', title: 'Mistakes that help us learn', ar: 'أَخْطَاءٌ شَائِعَةٌ',
    cols: [{ label: 'Likely mix-up', w: 5.6 }, { label: 'Repair cue', w: 6.73 }],
    rows: [
      { core: true, cells: ['Mixing ف and ق', 'Count the dots: ف one, ق two — and ق has a deeper bowl.'] },
      { core: true, cells: ['Mixing ع and غ', 'Same body; the dot on top makes ghayn.'] },
      { core: true, cells: ['Reading بَا as short', 'The alif after the fatḥa holds the sound for two beats.'] },
      { cells: ['Shouting the emphatic sounds', 'Emphatic = a changed tongue shape, not extra volume (website).'] },
      { cells: ['Straining the throat for ع', 'Softly — stop if uncomfortable; it develops gradually (website).'] },
      { cells: ['Thinking و and ي are always long vowels', 'They have more than one role (website final check 10).'] },
    ],
    notes: 'FEEDBACK (2 min) — mix-ups based on the website articulation notes, safe practice ladder and final check. Students correct their writing in green pen.',
  },
  F.selfCheckSlide([
    { route: 'core', text: 'I can recognise letters 15–22.' },
    { route: 'core', text: 'I can build /ā/, /ū/ and /ī/ patterns.' },
    { route: 'develop', text: 'I can distinguish the three emphatic letters.' },
    { route: 'develop', text: 'I can identify the ع غ family.' },
    { route: 'stretch', text: 'I can find the long-vowel letter inside a new word.' },
  ]),
  F.exitTicket([
    q('Which carrier builds long /ā/?', ['ا', 'و', 'ي'], 'fatḥa + alif (website final check 6).'),
    q('Which carrier builds long /ī/?', ['ي', 'ا', 'و'], 'kasra + yāʾ (website final check 8).'),
    q('What is true of today’s eight letters?', ['All are connectors', 'All are non-connectors', 'Exactly half are non-connectors'], 'All eight connect on both sides (website final check 5).'),
  ], 10),
  F.prepSlide({
    ...NEXT,
    words: [['ل  لَامٌ', 'lām · /l/', ''], ['م  مِيمٌ', 'mīm · /m/', ''], ['ن  نُونٌ', 'nūn · /n/', ''], ['ه  هَاءٌ', 'hāʾ · /h/', ''], ['و  وَاوٌ', 'wāw · /w/, long ū', '']],
    questionEn: 'Build and read three long-vowel rows with two letters you know.',
    questionAr: 'تَا تُو تِي · سَا سُو سِي',
    homework: {
      core: 'Website · F1-L03 · play the vowel game; copy ض ط ظ ع غ ف ق ك four times each.',
      develop: 'Website homework: build and read three long-vowel rows with two consonants.',
      stretch: 'Website · F1-L03 · Heritage precision: a six-item plain/emphatic drill with a mouth cue for each.',
    },
    wordsSource: 'Next lesson completes the alphabet (ل م ن ه و ي) and names the short vowels. Preview five of the letters tonight.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: 5 new letters + your long-vowel rows.' }),
];

module.exports = { meta, slides };
