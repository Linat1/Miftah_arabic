'use strict';
/* GM-SCR-01 · Letters and Letter Positions — website: Mastery & Revision › Grammar › Arabic Script › Script Mastery 01 (all 28 letters; isolated,
 * initial, medial and final forms; how letters join; the six forward non-connectors ا د ذ ر ز و; letter families; copy–cover–write–check;
 * letter hunt, sound-to-letter listening, explain-the-join speaking and the script challenge). The website checks this chapter through games,
 * so the quizzes here are teacher-written on the website content. The website prints no lesson code: GM-SCR-01 = Script Mastery 01. */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-SCR-01', fileTitle: 'Letters_and_Letter_Positions', title: 'Letters and Letter Positions', arabic: 'الْحُرُوفُ الْعَرَبِيَّةُ وَأَشْكَالُهَا',
  focus: 'Recognise all 28 letters in their four positions (ب · بـ · ـبـ · ـب), know the six letters that never join forward (ا د ذ ر ز و), explain exactly where a word breaks — and write connected words clearly.',
  icon: 'FaPenNib',
});

const L = [['Alif', 'ا', 0], ['Bāʾ', 'ب', 1], ['Tāʾ', 'ت', 1], ['Thāʾ', 'ث', 1], ['Jīm', 'ج', 1], ['Ḥāʾ', 'ح', 1], ['Khāʾ', 'خ', 1], ['Dāl', 'د', 0], ['Dhāl', 'ذ', 0], ['Rāʾ', 'ر', 0], ['Zāy', 'ز', 0], ['Sīn', 'س', 1], ['Shīn', 'ش', 1], ['Ṣād', 'ص', 1],
  ['Ḍād', 'ض', 1], ['Ṭāʾ', 'ط', 1], ['Ẓāʾ', 'ظ', 1], ['ʿAyn', 'ع', 1], ['Ghayn', 'غ', 1], ['Fāʾ', 'ف', 1], ['Qāf', 'ق', 1], ['Kāf', 'ك', 1], ['Lām', 'ل', 1], ['Mīm', 'م', 1], ['Nūn', 'ن', 1], ['Hāʾ', 'ه', 1], ['Wāw', 'و', 0], ['Yāʾ', 'ي', 1]];
const row = ([name, l, j], i) => ({ core: !j, cells: [`${i + 1} · ${name}`, j ? 'yes' : 'NO — breaks', `ـ${l}`, j ? `ـ${l}ـ` : `ـ${l}`, j ? `${l}ـ` : l, l] });
const table = (from, to, part) => ({
  type: 'formsTable', min: 1, eyebrow: `Grammar · part 2 · all 28 letters (${part} of 4) · website table`, title: `The alphabet in four positions (${part} of 4)`, ar: 'الْحُرُوفُ فِي أَرْبَعَةِ مَوَاضِعَ', ltr: true,
  cols: [{ label: 'Letter', w: 2.1 }, { label: 'Joins the next letter?', w: 2.03 }, { label: 'Final', w: 2.05, size: 30 }, { label: 'Medial', w: 2.05, size: 30 }, { label: 'Initial', w: 2.05, size: 30 }, { label: 'Isolated', w: 2.05, size: 30 }],
  rows: L.slice(from, to).map((x, k) => row(x, from + k)),
  foot: 'Read right → left: isolated · initial · medial · final. The CORE badge marks a letter that never joins forward.',
  notes: `ALPHABET ${part}/4 (1 min) — website table “All 28 Arabic letters”. Choral: name → isolated → the three joined shapes. Ask: “Which letters on this slide never join forward?”
Website: “Initial does not always mean the letter changes shape. A non-connecting letter such as د remains visually separate from the letter that follows it.”`,
});

const slides = G.gmLesson({
  code: 'GM-SCR-01', site: 'grammar__01-arabic-script__script-mastery-01-alphabet-letter-positions',
  source: 'The website chapter “Script Mastery 01”: the 28-letter table, the four contextual positions, the joining rules and the six forward non-connectors, letter families, writing discipline, the letter hunt, sound-to-letter listening, explain-the-join speaking and the script challenge. The website checks this chapter through eight interactive games, so the Do Now, quick check, practice, exit ticket and mastery questions are teacher-written on the website content.',
  support: `• Core: recognise the 28 letters and the four positions; find the six non-connectors. Develop: build and break words correctly. Stretch: explain every break, and read and copy short unvowelled words.
• URDU BRIDGE: Urdu uses the same joining system (and the same six non-connectors) — Urdu readers already know HOW letters join. The work today is the Arabic letter NAMES, the sounds Urdu does not have (ع ح ط ص ض ظ ق) and accurate writing.
• Teach shapes as a skeleton + joining strokes, never as four unrelated pictures (website rule).`,
  teach: 'Four positions, all 28 letters, joining rules, the six non-connectors, letter families.',
  wedo: 'Sort connectors and non-connectors, repair spacing and dot slips, find the breaks.',
  next: { nextCode: 'GM-SCR-02', nextTitle: 'Sun and Moon Letters', nextAr: 'الْحُرُوفُ الشَّمْسِيَّةُ وَالْقَمَرِيَّةُ' },
  doNow: {
    questions: [
      q('How many letters are in the Arabic alphabet?', ['28', '26', '30'], 'There are 28 letters (website table).'),
      q('Which way is Arabic written?', ['right to left', 'left to right', 'top to bottom'], 'Begin on the right (website stroke discipline).'),
      q('Which letter is Mīm?', ['م', 'ن', 'ل'], 'م = Mīm · ن = Nūn · ل = Lām.'),
      q('Which letter has ONE dot below?', ['ب', 'ت', 'ن'], 'ب: one dot below · ت: two dots above · ن: one dot above.'),
      q('Read the word: بَيْت', ['bayt (house)', 'bint (girl)', 'nabt (plant)'], 'ب · ي · ت — bayt.'),
    ],
    keyIdea: { text: 'One letter, four shapes: find the skeleton, then look at the joining strokes on the right and left.', ar: 'ب · بـ · ـبـ · ـب' },
    retrieves: 'Teacher-written retrieval of the alphabet (letter count, direction, names and dots). Use it to spot students who still confuse dot patterns — they go on the Core route today.',
  },
  objectives: ['Recognise all 28 Arabic letters.', 'Identify the isolated, initial, medial and final forms.', 'Name the six letters that never join to the next letter.', 'Explain where and why a word breaks, and write connected words clearly.'],
  routes: {
    core: ['I can name all 28 letters.', 'I can say which position a letter is in.'],
    develop: ['I can build a word with the right joins.', 'I can find every break in a word.'],
    stretch: ['I can explain WHY a word breaks at that point.', 'I can read and copy short unvowelled words.'],
  },
  terms: {
    flexRest: true,
    items: [
      { ar: 'حَرْفٌ', en: 'a letter', note: 'pl. حُرُوفٌ', forms: [{ l: 'pl.', ar: 'حُرُوفٌ' }] },
      { ar: 'حَرْفٌ مُنْفَصِلٌ', en: 'isolated form', note: 'stands alone: ب' },
      { ar: 'فِي أَوَّلِ الْكَلِمَةِ', en: 'initial (at the start)', note: 'بـ' },
      { ar: 'فِي وَسَطِ الْكَلِمَةِ', en: 'medial (in the middle)', note: 'ـبـ' },
      { ar: 'فِي آخِرِ الْكَلِمَةِ', en: 'final (at the end)', note: 'ـب' },
      { ar: 'لَا يَتَّصِلُ بِمَا بَعْدَهُ', en: 'does not join the next letter', note: 'ا د ذ ر ز و' },
      { ar: 'نُقْطَةٌ', en: 'a dot', forms: [{ l: 'pl.', ar: 'نُقَاطٌ' }] },
      { ar: 'عَائِلَةُ الْحُرُوفِ', en: 'a letter family', note: 'same body, different dots: ب ت ث' },
    ],
    notes: 'Core students learn the English terms; Develop/Stretch use the Arabic position words when explaining a join (فِي وَسَطِ الْكَلِمَةِ …).',
  },
  explain: [
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 1 · four contextual positions (website section)', title: 'One letter — four shapes', ar: 'أَرْبَعَةُ أَشْكَالٍ',
      points: [
        'Arabic is written from right to left, and most letters JOIN to the letters around them.',
        'Isolated: the letter stands alone — ب.',
        'Initial: it begins a joined sequence, so it has a joining stroke on the left — بـ.',
        'Medial: it joins on both sides — ـبـ. Final: it ends the sequence, joined only from the right — ـب.',
        'Do not learn four unrelated pictures: find the letter’s skeleton (body + dots), then look at the joining strokes.',
      ],
      examples: [
        { ar: 'ب · بـ · ـبـ · ـب', en: 'bāʾ in four positions' },
        { ar: 'بـ + ـيـ + ـت = بَيْت', en: 'initial + medial + final = house' },
        { ar: 'ع · عـ · ـعـ · ـع', en: 'ʿayn changes most: learn it carefully' },
        { ar: 'ه · هـ · ـهـ · ـه', en: 'hāʾ: four quite different shapes' },
      ],
      callout: { text: 'Shape recognition rule (website): look for the letter’s basic skeleton, then notice which joining strokes appear on the right and on the left.' },
      notes: 'PART 1 (3 min) — website section “Four contextual positions”. Write ب in four positions on the whiteboard, slowly, saying the position name in English and Arabic.',
    },
    table(0, 7, 1), table(7, 14, 2), table(14, 21, 3), table(21, 28, 4),
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 3 · the six forward non-connectors (website section)', title: 'Six letters that never join forward', ar: 'أ د ذ ر ز و', ltr: true,
      cols: [{ label: 'Word', w: 2.6, size: 30 }, { label: 'Where is the break?', w: 3.4 }, { label: 'Explanation (website)', w: 6.33 }],
      rows: [
        { core: true, cells: ['وَلَد', 'after و', 'Wāw does not connect forward.'] },
        { core: true, cells: ['مَدْرَسَة', 'after د and after ر', 'Dāl does not connect to Rāʾ; Rāʾ does not connect to Sīn.'] },
        { cells: ['زَهْرَة', 'after ز and after ر', 'Both are forward non-connectors.'] },
        { cells: ['قُرْآن', 'after ر and after آ', 'Rāʾ and Alif do not connect forward.'] },
        { cells: ['كَتَبَ', 'no break', 'No non-connector: the whole word joins.'] },
      ],
      foot: 'Memory line (website): أ د ذ ر ز و — they join to the letter BEFORE them, never to the letter AFTER them.',
      notes: 'PART 3 (2 min). Connection test (website): at every boundary ask two questions — can the first letter connect forward? Can the next letter receive a connection from the right?',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 4 · letter families (website section)', title: 'Learn families, not single pictures', ar: 'عَائِلَاتُ الْحُرُوفِ', ltr: true,
      cols: [{ label: 'Family', w: 2.4 }, { label: 'Letters', w: 3.6, size: 30 }, { label: 'How to tell them apart (website)', w: 6.33 }],
      rows: [
        { core: true, cells: ['Bāʾ family', 'ب ت ث ن ي', 'Similar bowls and joining strokes; the dots decide.'] },
        { core: true, cells: ['Jīm family', 'ج ح خ', 'Same body: dot below · no dot · dot above.'] },
        { cells: ['Dāl · Rāʾ', 'د ذ · ر ز', 'Non-connecting bodies; ذ and ز add a dot.'] },
        { cells: ['Sīn · Ṣād', 'س ش · ص ض', 'ش adds three dots; ض adds one dot.'] },
        { cells: ['Ṭāʾ · ʿAyn', 'ط ظ · ع غ', 'ظ and غ add one dot above.'] },
      ],
      foot: 'Dots are part of the letter: write them clearly and in the right place.',
      notes: 'PART 4 (2 min). Quick game: say a family, students type the letter that has e.g. “two dots above” (ت).',
    },
  ],
  quick: [
    q('Which is the INITIAL form of ب?', ['بـ', 'ـبـ', 'ـب'], 'Initial: joining stroke on the left only.'),
    q('Which letter never joins the next letter?', ['د', 'ب', 'م'], 'د is one of the six: أ د ذ ر ز و.'),
    q('Where is the break in وَلَد?', ['after و', 'after ل', 'there is no break'], 'و does not connect forward.'),
    q('Which letters are one family?', ['ج ح خ', 'ج د ر', 'ب س ع'], 'Same body: dot below, no dot, dot above.'),
  ],
  quickNote: 'teacher-written on the website rules.',
  ido: {
    title: 'Watch me read a word letter by letter',
    steps: [
      { head: 'Name', ar: 'ب + ي + ت', think: 'Name each letter.' },
      { head: 'Position', ar: 'بـ + ـيـ + ـت', think: 'Initial · medial · final.' },
      { head: 'Breaks?', ar: 'بَيْت', think: 'No non-connector: fully joined.' },
      { head: 'Compare', ar: 'وَرَقَة', think: 'و breaks the chain after it.' },
    ],
    legend: [],
    model: 'بَيْتٌ · كَتَبَ · وَرَقَةٌ · مَدْرَسَةٌ · زَهْرَةٌ',
    modelEn: 'house · he wrote · a sheet of paper · school · flower — copy, then mark every break.',
    notes: 'Think aloud: “Can this letter connect forward? Can the next one receive it?” Then students copy the five words and draw a small line at every break.',
  },
  models: [
    { ar: 'كَتَبَ', en: 'he wrote', tip: 'كـ + ـتـ + ـب — fully connected' },
    { ar: 'وَرَقَةٌ', en: 'a sheet of paper', tip: 'one break: after و' },
    { ar: 'مَدْرَسَةٌ', en: 'a school', tip: 'two breaks: after د and after ر' },
    { ar: 'زَهْرَةٌ', en: 'a flower', tip: 'two breaks: after ز and after ر' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · join or break?', title: 'Does it join the next letter?', ar: 'صَنِّفْ',
      categories: ['Joins the next letter', 'Never joins the next letter'],
      items: [['ب', 0], ['د', 1], ['م', 0], ['ر', 1], ['ك', 0], ['و', 1], ['ع', 0], ['ز', 1], ['ن', 0], ['ا', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min) — website games 4 “Connect or Break?” and 6 “Find the Break” as a whole-class sort. Students type J or B for each card in order.',
    },
  ],
  mistakes: [
    { wrong: 'مَدْ رَسَة', right: 'مَدْرَسَة', why: 'No spaces inside a word: the breaks after د and ر happen by themselves.' },
    { wrong: 'ب ي ت', right: 'بَيْت', why: 'Joining letters must join — write the word as one unit.' },
    { wrong: 'بَيْث', right: 'بَيْت', why: 'ت has two dots; ث has three.' },
  ],
  hints: ['A space inside a word?', 'Should these letters join?', 'Count the dots.'],
  practice: [
    q('Which form is MEDIAL?', ['ـعـ', 'عـ', 'ـع'], 'Joined on both sides.'),
    q('Where are the breaks in مَدْرَسَة?', ['after د and after ر', 'after م', 'after س'], 'Two forward non-connectors.'),
    q('Which letter is the odd one out?', ['ز', 'ن', 'ك'], 'ز never joins forward; ن and ك do.'),
    q('Which pair shares the same body?', ['س ش', 'س ص', 'ع ف'], 'Shīn is Sīn with three dots above.'),
  ],
  practiceLabel: 'teacher-written on website games 2, 4 and 6',
  read: {
    title: 'Letter hunt', label: 'website reading task “letter hunt”', size: 40,
    text: 'مَدْرَسَةٌ · بَيْتٌ · زَهْرَةٌ · كِتَابٌ · وَلَدٌ · قَمَرٌ',
    glossary: [['مَدْرَسَةٌ', 'a school'], ['بَيْتٌ', 'a house'], ['زَهْرَةٌ', 'a flower'], ['كِتَابٌ', 'a book'], ['وَلَدٌ', 'a boy'], ['قَمَرٌ', 'a moon']],
    task: 'Website letter hunt: find every non-connector, circle letters in medial position, underline final letters, and explain the visible break in two words.',
    questions: [
      q('Which word has NO break?', ['بَيْتٌ', 'وَلَدٌ', 'زَهْرَةٌ'], 'All three letters join.'),
      q('In وَلَدٌ, which letter causes the break?', ['و', 'ل', 'د'], 'Wāw does not connect forward.'),
      q('Which word has TWO breaks?', ['زَهْرَةٌ', 'قَمَرٌ', 'بَيْتٌ'], 'After ز and after ر.'),
      q('In كِتَابٌ, where is the break?', ['after ا', 'after ك', 'after ت'], 'Alif never joins forward.'),
    ],
    qNote: 'Teacher-written on the website letter-hunt words (website answer: مَدْرَسَة breaks after د and ر; زَهْرَة after ز and ر; وَلَد after و).',
    detective: '1. Find the six non-connectors: ا د ذ ر ز و.\n2. The NEXT letter starts a new shape.\n3. Count the breaks.',
  },
  speak: {
    title: 'Speaking: explain the join', source: 'website speaking task “explain the join”',
    prompts: [
      { route: 'core', ar: 'مَا اسْمُ هٰذَا الْحَرْفِ؟' },
      { route: 'develop', ar: 'هَلْ يَتَّصِلُ هٰذَا الْحَرْفُ بِمَا بَعْدَهُ؟' },
      { route: 'stretch', ar: 'لِمَاذَا تَنْقَطِعُ الْكَلِمَةُ هُنَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'هٰذَا حَرْفُ ______ .' },
      { route: 'develop', ar: 'حَرْفُ ______ يَتَّصِلُ بِمَا بَعْدَهُ.' },
      { route: 'stretch', ar: 'تَنْقَطِعُ الْكَلِمَةُ بَعْدَ ______ لِأَنَّهُ لَا يَتَّصِلُ.' },
    ],
    model: [
      { who: 'A', ar: 'مَا اسْمُ هٰذَا الْحَرْفِ؟', en: 'What is this letter called?' },
      { who: 'B', ar: 'هٰذَا حَرْفُ الدَّالِ، وَهُوَ لَا يَتَّصِلُ بِمَا بَعْدَهُ.', en: 'This is dāl; it does not join the next letter.' },
    ],
    notes: 'Website task: choose three words and explain which letters connect, which letters break the sequence, and which letter is initial, medial or final. Core students may explain in English while pointing to the Arabic. Listening extension (website): say ten letter names twice — بَاءٌ · ثَاءٌ · خَاءٌ · ذَالٌ · شِينٌ · ضَادٌ · غَيْنٌ · قَافٌ · نُونٌ · يَاءٌ — students write the isolated letters.',
  },
  write: {
    siteTask: 'Script challenge: write eight words containing one fully connected word, two words with one break, one word with two breaks, and at least six different letter families.',
    core: { amount: '8 words', task: 'Copy–cover–write–check: eight words from the lesson.', how: 'Copy · cover · write from memory · check every join. Circle each non-connector.' },
    develop: { amount: '8 words', task: 'Write eight words: one fully connected, two with one break, one with two breaks.', how: 'Use the word bank. Mark every break with a small line.' },
    stretch: { amount: '8 words + 3 sentences', task: 'The website script challenge, then explain three breaks in a sentence each.', how: 'At least six letter families. Try one unvowelled word.' },
  },
  frames: {
    core: [
      { en: 'Copy: house', ar: 'بَيْتٌ · ______' },
      { en: 'Copy: he wrote', ar: 'كَتَبَ · ______' },
      { en: 'Copy: a boy', ar: 'وَلَدٌ · ______' },
      { en: 'Copy: a school', ar: 'مَدْرَسَةٌ · ______' },
    ],
    develop: [
      { en: 'A fully joined word', ar: 'كَتَبَ · ______' },
      { en: 'A word with one break', ar: 'وَرَقَةٌ · ______' },
      { en: 'A word with two breaks', ar: 'زَهْرَةٌ · ______' },
      { en: 'A word with a new family', ar: 'شَمْسٌ · ______' },
    ],
    bank: ['بَيْتٌ', 'كَتَبَ', 'قَلَمٌ', 'شَمْسٌ', 'وَلَدٌ', 'وَرَقَةٌ', 'بَابٌ', 'زَهْرَةٌ', 'مَدْرَسَةٌ', 'دَرْسٌ', 'عَيْنٌ', 'خُبْزٌ'],
  },
  stretchTask: {
    task: 'Script challenge (website): write eight words, then explain three of the breaks.',
    checklist: ['One fully connected word.', 'Two words with one break.', 'One word with two breaks.', 'At least six different letter families.', 'Every dot clear and in the right place.'],
    phrases: [['كَتَبَ', 'he wrote — fully joined'], ['وَرَقَةٌ', 'paper — break after و'], ['مَدْرَسَةٌ', 'school — two breaks'], ['قُرْآنٌ', 'Qurʾān — breaks after ر and آ'], ['شَمْسٌ', 'sun — Sīn family'], ['خُبْزٌ', 'bread — Jīm family']],
    bankHead: 'WORD BANK — FROM THE WEBSITE EXAMPLES',
  },
  model: {
    text: 'كَتَبَ · شَمْسٌ · وَرَقَةٌ · وَلَدٌ · زَهْرَةٌ · مَدْرَسَةٌ · خُبْزٌ · قَلَمٌ',
    en: 'he wrote · sun · paper · boy · flower · school · bread · pen — كَتَبَ and شَمْسٌ are fully joined; وَرَقَةٌ and وَلَدٌ have one break (after و); زَهْرَةٌ and مَدْرَسَةٌ have two breaks; seven families are used.',
    find: ['fully joined', 'one break', 'two breaks', 'six families'],
    source: 'teacher model for the website script challenge',
  },
  selfCheck: [
    { route: 'core', text: 'I can name all 28 letters.' },
    { route: 'core', text: 'I can find the six letters that never join forward.' },
    { route: 'develop', text: 'My words have no spaces inside them.' },
    { route: 'develop', text: 'Every dot is clear and in the right place.' },
    { route: 'stretch', text: 'I can explain every break in my words.' },
  ],
  exit: [
    q('Which is the FINAL form of ع?', ['ـع', 'عـ', 'ـعـ'], 'Joined from the right only.'),
    q('Which group contains ONLY non-connectors?', ['ا د ر و', 'ب ت ث ن', 'ج ح خ ع'], 'أ د ذ ر ز و.'),
    q('Which word is fully connected?', ['كَتَبَ', 'وَرَقَةٌ', 'زَهْرَةٌ'], 'No non-connector inside.'),
  ],
  masteryQs: [
    q('How many forward non-connectors are there?', ['six', 'four', 'eight'], 'أ د ذ ر ز و.'),
    q('Which letter has two dots above?', ['ت', 'ث', 'ب'], 'ت: two dots above.'),
    q('Which is the INITIAL form of ه?', ['هـ', 'ـه', 'ـهـ'], 'Joining stroke on the left.'),
    q('In زَارَ, after which letters does the word break?', ['after ز and after ا', 'after ر only', 'nowhere'], 'ز and ا are non-connectors; ر is the last letter.'),
    q('Which is NOT in the Jīm family?', ['ع', 'ح', 'خ'], 'ج ح خ share one body.'),
    q('What should you NEVER do inside a word?', ['leave a space', 'write dots', 'start on the right'], 'Breaks happen only after a non-connector.'),
  ],
  prep: {
    words: [['الشَّمْسُ', 'the sun', '—'], ['الْقَمَرُ', 'the moon', '—'], ['شَدَّةٌ', 'shadda (doubling)', '—'], ['سُكُونٌ', 'sukūn (no vowel)', '—'], ['أَدَاةُ التَّعْرِيفِ', 'the definite article', '—']],
    questionEn: 'Say these aloud and listen to the lām: الشَّمْسُ · الْقَمَرُ. Which one do you hear “l” in?',
    questionAr: 'الشَّمْسُ ← ______ · الْقَمَرُ · ______',
    homework: {
      core: 'Copy the 28 letters in their four positions; learn the six non-connectors by heart.',
      develop: 'Write ten words and mark every break.',
      stretch: 'Complete the website script challenge and play the 60-second Script Challenge game.',
    },
    wordsSource: 'The five words prepare GM-SCR-02 (website Script Mastery 02: sun and moon letters).',
  },
  remember: 'Remember: one letter, four shapes · أ د ذ ر ز و never join forward · no spaces inside a word · dots are part of the letter.',
});

module.exports = { meta, slides };
