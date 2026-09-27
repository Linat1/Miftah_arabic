'use strict';
/*
 * F1-L07 · Read the Number, Keep the Order (Arabic-Indic numerals 0–100)
 * Website: Pathways › Foundation › F1 › Lesson 7. Picture game: website lesson game (digits).
 */
const F = require('./f1-common');
const game = require('../site-data/pathway-visual-games.json')['f1-l07'];
const { q } = F;

const meta = F.meta({
  n: 7, fileTitle: 'Arabic_Indic_Numerals', chip: 'Numerals 0–100',
  title: 'Read the Number, Keep the Order', arabic: 'الأَرْقَامُ الهِنْدِيَّةُ مِنْ ٠ إِلَى ١٠٠',
  focus: 'Read and write the ten Arabic digits, say the numbers 0–20 in Arabic, keep a two-digit number in the right order (١٥ = 15), and read real numbers in prices, rooms, scores and times.',
  icon: 'FaHashtag', level: 'Foundation · beginner',
});
const NEXT = { nextCode: 'F1-L08', nextTitle: 'From Marks to Meaning: Reading Aloud', nextAr: 'القِرَاءَةُ الجَهْرِيَّةُ' };
const num = (n, dig, word, tr, core = true) => ({ core, cells: [String(n), dig, { ar: word, sub: tr }] });

const slides = [
  F.titleSlide({
    n: 7,
    source: 'The website lesson teaches the Eastern Arabic-Indic digits ٠–٩ (with formation cues and common confusions), number words 0–10 and 11–20, place value inside Arabic text, real-world numbers (price, room, score, time), a listening call-and-write, and an extension to 100. The digit table, number tables, listening script, games and final check are the website’s; the digit picture game is the website game for this lesson.',
    support: `• CORE: digits 0–10 — match each shape to one value and one spoken word. DEVELOP: random 11–20 beyond the memorised chain. STRETCH: place value to 100.
• Boundary (website): this is a digit-and-sound lesson; number–noun agreement (gender, case) comes later — the words here are standalone counting forms.
• Heritage / Urdu readers: Urdu digits are related but some shapes differ (e.g. ۴ ۵ ۶ in Urdu vs ٤ ٥ ٦ in Arabic) — recognise both without calling one “wrong” (website regional note).`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Ten digit shapes, numbers 0–20, place value.', wedo: 'Digit match, figure flash, call-and-write, bingo.', next: 'F1-L08' }),
  F.doNow({
    questions: [
      q('What does shadda do?', ['Doubles the consonant', 'Makes a long vowel'], 'F1-L06.'),
      q('Read the ending of كِتَابٍ', ['/in/', '/un/', '/an/'], 'F1-L06: two kasras.'),
      q('What does آ represent?', ['hamza + long ā', 'every long ā'], 'F1-L06.'),
      q('Which digit is ٣ (prepared at home)?', ['3', '2', '4'], 'Prepared at home: ٣ = 3 (two humps on top).'),
      q('What does عَشَرَةٌ mean (prepared at home)?', ['ten', 'two', 'three'], 'Prepared at home: عَشَرَةٌ = 10.'),
    ],
    keyIdea: { text: 'Arabic words go right to left, but a number keeps its own order: the tens are on the LEFT.', ar: '١٥ = 15' },
    retrieves: 'Questions 1–3 retrieve the F1-L06 reading marks (website retrieval bridge). Questions 4–5 test the home preparation.',
  }),
  F.objectivesSlide([
    'Match each Arabic-Indic digit to its value.',
    'Write the ten digits clearly, keeping zero, five, six and seven distinct.',
    'Say the numbers 0–20 in Arabic.',
    'Read two- and three-digit numbers in real contexts.',
  ], {
    core: ['I can match each Arabic digit to 0–9.', 'I can say 0–10 in Arabic.'],
    develop: ['I can answer random flashes from 11 to 20.', 'I can read a price or a score.'],
    stretch: ['I can read numbers to 100 with place value.', 'I can explain “five and twenty” vs ٢٥.'],
  }, 1, 'Objectives and routes are the website F1-L07 outcomes.'),
  F.keywordsSlide({
    text: '10 digits, 21 number words and 4 real-life contexts. Shape → value → place → spoken number.',
    groups: [
      { head: 'DIGITS', name: 'Digits 0–9 · 10' },
      { head: 'WORDS', name: '0–10 · 11' },
      { head: 'WORDS', name: '11–20 · 10' },
      { head: 'USE', name: 'Real numbers · 4' },
    ],
    bridge: [
      { ar: '٤', urdu: '۴', tr: 'chār', en: 'four — shape differs' },
      { ar: '٥', urdu: '۵', tr: 'pānch', en: 'five — a ring' },
      { ar: '٦', urdu: '۶', tr: 'chhe', en: 'six — shape differs' },
      { ar: 'صِفْرٌ', urdu: 'صفر', tr: 'sifr', en: 'zero (→ English “cipher”)' },
      { ar: 'حِسَابٌ', urdu: 'حساب', tr: 'hisāb', en: 'maths, arithmetic' },
    ],
    notes: 'URDU BRIDGE: Urdu uses related digits, but ۴ ۵ ۶ are drawn differently from Arabic ٤ ٥ ٦ (website regional note). صفر (zero) is the same word — and it gave English “cipher” and “zero”. حساب = arithmetic.',
  }),
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Teacher instruction · two related digit sets (website digit reference)', title: 'The ten digits', ar: 'الأَرْقَامُ',
    cols: [{ label: 'Western', w: 1.6 }, { label: 'Arabic', w: 1.8, size: 36 }, { label: 'Formation cue', w: 4.2 }, { label: 'Watch out', w: 4.73 }],
    rows: [
      { core: true, cells: ['0', '٠', 'A small dot-like zero.', 'Do not enlarge it into ٥.'] },
      { core: true, cells: ['1', '١', 'One upright stroke.', 'Usually the easiest.'] },
      { core: true, cells: ['2', '٢', 'Hooked top, then down.', 'Not ٣ — count the humps.'] },
      { core: true, cells: ['3', '٣', 'Two top humps, then down.', 'Count the humps.'] },
      { core: true, cells: ['4', '٤', 'Angular open form.', 'Can look like a reversed 3.'] },
      { core: true, cells: ['5', '٥', 'A small ring.', 'The RING is five; the DOT is zero.'] },
      { core: true, cells: ['6', '٦', 'Curved hook with a stem.', 'May look like Western 7.'] },
      { core: true, cells: ['7', '٧', 'Open V shape.', 'Pair it with ٨.'] },
      { core: true, cells: ['8', '٨', 'Pointed cap shape.', 'Upside-down ٧.'] },
      { core: true, cells: ['9', '٩', 'Round head, stroke down.', 'Close to Western 9.'] },
    ],
    notes: `DIGIT REFERENCE (website). Called Eastern Arabic-Indic digits in English, الأَرْقَامُ الهِنْدِيَّةُ in Arabic. Many Arab countries and websites also use 0–9.
History (website): both sets descend from the Hindu-Arabic place-value system — developed in India, transmitted and developed through Arabic-language scholarship.
Four high-value contrasts (website): ٠ zero · dot / ٥ five · ring / ٦ six · hook / ٧ seven · V. Say the value while forming the digit.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Teacher instruction · direction without reversal (website)', title: 'Numbers keep their own order', ar: 'الأَرْقَامُ مِنَ اليَسَارِ',
    cards: [
      { chip: 'PLACE VALUE', head: 'tens on the LEFT', big: '١٥', en: '15 — fifteen, not fifty-one.', clue: '١ = 1 ten · ٥ = 5 ones.' },
      { chip: 'IN A SENTENCE', color: '0E7C86', head: 'read the words right → left', big: 'السِّعْرُ ١٥', en: 'The price is 15.', clue: 'The sentence runs right to left; the number stays as it is.' },
      { chip: 'SEPARATE', color: '7B3FA0', head: 'digits never join', big: '٢٠٢٦', en: '2026 — each digit is a separate symbol.', clue: 'They do not join to each other or to letters.' },
    ],
    notes: 'DIRECTION WITHOUT REVERSAL (website): an Arabic sentence runs right-to-left, but a multi-digit numeral keeps its internal numeric order — the highest place value on the left. Write ١٥ on the board and ask: “fifteen or fifty-one?”',
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Teacher instruction · count from zero to ten (website core number words)', title: 'Numbers 0–5', ar: 'مِنْ صِفْرٍ إِلَى عَشَرَةٍ',
    cols: [{ label: 'Value', w: 1.5 }, { label: 'Numeral', w: 1.8, size: 32 }, { label: 'Arabic word', w: 4.0, size: 26 }],
    rows: [
      num(0, '٠', 'صِفْرٌ', 'ṣifr'), num(1, '١', 'وَاحِدٌ', 'wāḥid'), num(2, '٢', 'اِثْنَانِ', 'ithnān'), num(3, '٣', 'ثَلَاثَةٌ', 'thalātha'),
      num(4, '٤', 'أَرْبَعَةٌ', 'arbaʿa'), num(5, '٥', 'خَمْسَةٌ', 'khamsa'),
    ],
    notes: `NUMBERS 0–10 (website table). Decode, do not guess (website): ثَلَاثَةٌ and ثَمَانِيَةٌ both begin with ثَ — read beyond the first syllable; سَبْعَةٌ (7) vs تِسْعَةٌ (9) — listen for sab- vs tis-; سِتَّةٌ has a shadda — hold the /t/.
Three-pass drill (website): (1) count forward 0–10, (2) backward 10–0, (3) random flashes — only pass 3 proves real knowledge.
Gesture: show fingers as you count.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Teacher instruction · count to ten, part 2 (website core number words)', title: 'Numbers 6–10', ar: 'مِنْ صِفْرٍ إِلَى عَشَرَةٍ',
    cols: [{ label: 'Value', w: 1.5 }, { label: 'Numeral', w: 1.8, size: 32 }, { label: 'Arabic word', w: 4.0, size: 26 }],
    rows: [
      num(6, '٦', 'سِتَّةٌ', 'sitta · doubled t'), num(7, '٧', 'سَبْعَةٌ', 'sabʿa'),
      num(8, '٨', 'ثَمَانِيَةٌ', 'thamāniya'), num(9, '٩', 'تِسْعَةٌ', 'tisʿa'), num(10, '١٠', 'عَشَرَةٌ', 'ʿashara'),
    ],
    notes: `NUMBERS 0–10 (website table). Decode, do not guess (website): ثَلَاثَةٌ and ثَمَانِيَةٌ both begin with ثَ — read beyond the first syllable; سَبْعَةٌ (7) vs تِسْعَةٌ (9) — listen for sab- vs tis-; سِتَّةٌ has a shadda — hold the /t/.
Three-pass drill (website): (1) count forward 0–10, (2) backward 10–0, (3) random flashes — only pass 3 proves real knowledge.
Gesture: show fingers as you count.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Teacher instruction · Develop · numbers 11–20 (website)', title: 'Numbers 11–20: unit + ten', ar: 'مِنْ أَحَدَ عَشَرَ إِلَى عِشْرِينَ',
    cols: [{ label: 'Value', w: 1.4 }, { label: 'Numeral', w: 1.8, size: 30 }, { label: 'Counting form', w: 3.6, size: 24 }, { label: 'Pattern', w: 2.2 }],
    rows: [
      { cells: ['11', '١١', 'أَحَدَ عَشَرَ', 'one + ten (own start)'] }, { cells: ['12', '١٢', 'اِثْنَا عَشَرَ', 'two + ten (own start)'] },
      { cells: ['13', '١٣', 'ثَلَاثَةَ عَشَرَ', 'three + ten'] }, { cells: ['14', '١٤', 'أَرْبَعَةَ عَشَرَ', 'four + ten'] },
      { cells: ['15', '١٥', 'خَمْسَةَ عَشَرَ', 'five + ten'] }, { cells: ['16', '١٦', 'سِتَّةَ عَشَرَ', 'six + ten'] },
      { cells: ['17', '١٧', 'سَبْعَةَ عَشَرَ', 'seven + ten'] }, { cells: ['18', '١٨', 'ثَمَانِيَةَ عَشَرَ', 'eight + ten'] },
      { cells: ['19', '١٩', 'تِسْعَةَ عَشَرَ', 'nine + ten'] }, { cells: ['20', '٢٠', 'عِشْرُونَ', 'a new tens word'] },
    ],
    notes: `NUMBERS 11–20 (website). For standalone counting, 11–19 put the unit BEFORE the ten. 11 and 12 need their own start (أَحَدَ, اِثْنَا) — do not build 11 from وَاحِدٌ. 13–19: unit + عَشَرَ — tap once per element: خَمْسَةَ | عَشَرَ.
Accuracy boundary (website): number words change with noun gender and case (e.g. age phrases with سَنَة) — agreement is taught later.`,
  },
  F.quickCheck([
    q('Which is five?', ['٥', '٠', '٦'], 'The ring is five; the dot is zero.'),
    q('Which is seven?', ['٧', '٨', '٦'], 'Open V = seven; the cap ٨ = eight.'),
    q('What is ١٥?', ['15', '51', '5'], 'Tens on the left: 1 ten, 5 ones.'),
    q('What does سِتَّةٌ mean?', ['six', 'seven', 'nine'], 'sitta — hear the doubled t.'),
  ], 'teacher-made from the website digit table and number words.'),
  {
    type: 'trace', stage: 'ido', min: 4, eyebrow: 'I do · formation strip: trace → cover → reproduce (website)', title: 'Watch me write the ten digits', ar: 'اُكْتُبِ الأَرْقَامَ',
    cols: 5,
    items: [
      { ar: '٠', name: 'صِفْر', steps: ['A small dot.'] }, { ar: '١', name: 'وَاحِد', steps: ['One stroke down.'] },
      { ar: '٢', name: 'اِثْنَان', steps: ['One hook, then down.'] }, { ar: '٣', name: 'ثَلَاثَة', steps: ['Two humps, then down.'] },
      { ar: '٤', name: 'أَرْبَعَة', steps: ['Angular, open.'] }, { ar: '٥', name: 'خَمْسَة', steps: ['A small ring.'] },
      { ar: '٦', name: 'سِتَّة', steps: ['Hook with a stem.'] }, { ar: '٧', name: 'سَبْعَة', steps: ['An open V.'] },
      { ar: '٨', name: 'ثَمَانِيَة', steps: ['An upside-down V.'] }, { ar: '٩', name: 'تِسْعَة', steps: ['Round head, stroke down.'] },
    ],
    notes: 'I DO — FORMATION STRIP (website): digits are separate symbols. Trace once with your finger, copy once while looking, then cover and write from memory. Say the value aloud while forming each digit (“dot — zero, ring — five, hook — six, V — seven”).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · website games “Digit Pair Sprint” and “Figure Flash”', title: 'Figure flash', ar: 'بَرْقُ الأَرْقَامِ',
    seed: 19,
    questions: [
      q('Which Arabic digit is 3?', ['٣', '٢', '٤'], game.items[0].feedback),
      q('Which Arabic digit is 5?', ['٥', '٠', '٦'], game.items[1].feedback),
      q('Which Arabic digit is 7?', ['٧', '٨', '٦'], game.items[2].feedback),
      q('What is ١٢?', ['12', '21', '2'], game.items[5].feedback),
      q('What is ٧٢?', ['72', '27', '702'], '7 tens and 2 ones (website extension).'),
    ],
    side: { kind: 'core', label: 'CORE', text: 'dot ٠ = 0 · ring ٥ = 5\nhook ٦ = 6 · V ٧ = 7\nTens are on the LEFT.' },
    answerSlide: { min: 0, eyebrow: 'We do · figure flash answers', title: 'Answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — the website lesson game (digits 3, 5, 7, 9, 10, 12) and games “Digit Pair Sprint” / “Figure Flash” (read the numeral in place-value order and choose its Western equivalent).',
    answerNotes: 'Reveal. Then random flash: hold up a digit on a card; the class says the Arabic word.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · website listening · partner call-and-write', title: 'Listen and write the number', ar: 'اِسْتَمِعْ وَاكْتُبْ',
    seed: 20,
    questions: [
      q('Number 1', ['٣', '٨', '٢'], 'ثَلَاثَةٌ = 3'),
      q('Number 2', ['٧', '٩', '٦'], 'سَبْعَةٌ = 7'),
      q('Number 3', ['١٠', '٠١', '٢'], 'عَشَرَةٌ = 10'),
      q('Number 4', ['١٥', '٥١', '٥'], 'خَمْسَةَ عَشَرَ = 15'),
      q('Number 5', ['٢٠', '١٢', '٢'], 'عِشْرُونَ = 20'),
    ],
    side: { kind: 'info', head: 'LISTEN WITHOUT LOOKING', text: 'Write each number in Arabic digits in your book.\nThen choose here.' },
    answerSlide: { min: 0, eyebrow: 'We do · listening answers', title: 'Listening: answers', ar: 'الإِجَابَاتُ' },
    notes: `WEBSITE LISTENING — partner call-and-write (3 min). Read each word twice. Students write the digits first.
Script: ثَلَاثَةٌ. سَبْعَةٌ. عَشَرَةٌ. خَمْسَةَ عَشَرَ. عِشْرُونَ. — Answers (website): ٣، ٧، ١٠، ١٥، ٢٠.
Then pairs (website): A secretly chooses five values 0–20 and says each once, then repeats; B writes the numeral; compare and swap.`,
    answerNotes: 'Reveal and compare with books. Common errors: ٠١ for 10 and ٥١ for 15 — the tens go on the left.',
  },
  {
    type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · real-world number lab (website)', title: 'Numbers around us', ar: 'الأَرْقَامُ حَوْلَنَا',
    cols: [{ label: 'Context', w: 2.0 }, { label: 'Sign', w: 3.2, size: 28 }, { label: 'Say it', w: 3.2 }, { label: 'How to read it', w: 3.93 }],
    rows: [
      { core: true, cells: ['Price', 'السِّعْرُ ١٥', 'fifteen', 'The whole value; the currency word comes after.'] },
      { core: true, cells: ['Room', 'الغُرْفَةُ ١٠٤', 'one hundred and four', 'A number — or a code read digit by digit.'] },
      { cells: ['Score', 'النَّتِيجَةُ ٢–١', 'two – one', 'Each side in display order.'] },
      { cells: ['Time', 'السَّاعَةُ ٨:٣٠', 'eight … thirty', 'Hour and minutes; full time phrases later.'] },
      { cells: ['Phone', '٠١٢٣', 'zero, one, two, three', 'Say each digit separately.'] },
    ],
    notes: 'REAL-WORLD NUMBER LAB (website): the same digits in different contexts; what you SAY can differ — a quantity is a number word; phone digits and codes are read one digit at a time. Ask students to read each sign aloud with you.',
  },
  {
    type: 'routes', stage: 'youdo', min: 7, eyebrow: 'You do · independent practice · 7 minutes', title: 'Write: choose your route', ar: 'اُكْتُبْ',
    core: { amount: '0–10', task: 'Write the Arabic digits for 0–10 twice from the model, then once from memory. Write the Arabic word under 0–5.', how: 'Say “dot — zero, ring — five” as you write.' },
    develop: { amount: '1–20', task: 'Write 1–20 as Arabic digits and as Arabic words (website homework). Cover and repeat the five hardest.', how: 'Use the 11–20 table: unit + عَشَرَ.' },
    stretch: { amount: 'to 100', task: 'Write your age, your house number and a year you remember in Arabic digits; then write the tens from 20 to 100 with their words.', how: 'Label each context in English (website homework).' },
    notes: 'YOU DO — WRITING (7 min) = the website homework split by route. LIVE FEEDBACK after 3 minutes: check ٠/٥, ٦/٧ and the order of two-digit numbers.',
  },
  F.speakingSlide({
    speaking: {
      context: 'Live caller bingo and number talk',
      model: [
        ['A', 'كَمْ هٰذَا؟ ١٥', 'How much is this? 15'],
        ['B', 'خَمْسَةَ عَشَرَ.', 'Fifteen.'],
        ['A', 'وَهٰذَا؟ ٧', 'And this? 7'],
        ['B', 'سَبْعَةٌ.', 'Seven.'],
      ],
    },
  }, {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'عُدَّ مِنْ ٠ إِلَى ١٠.' },
      { route: 'core', ar: 'كَمْ هٰذَا؟' },
      { route: 'develop', ar: 'عُدَّ مِنْ ١١ إِلَى ٢٠.' },
      { route: 'stretch', ar: 'اِقْرَأْ: ٣٠ · ٥٠ · ١٠٠' },
    ],
    stems: [
      { route: 'core', ar: 'هٰذَا ______ .' },
      { route: 'develop', ar: '______ عَشَرَ' },
      { route: 'stretch', ar: 'ثَلَاثُونَ · خَمْسُونَ · مِائَةٌ' },
      { route: 'sum', ar: 'قَالَ / قَالَتْ : ______ .' },
    ],
    modelEn: ['How much is this? 15', 'Fifteen.'],
    notes: 'LIVE CALLER BINGO (website): students draw a 3×3 grid and fill it with numerals from 0–20; the teacher (or a student) calls Arabic number words; three in a row wins. Then pairs ask كَمْ هٰذَا؟ with digit cards. Three-pass drill: forward, backward, random.',
  }),
  {
    type: 'formsTable', stage: 'feedback', min: 2, eyebrow: 'Feedback · mix-ups and repairs', title: 'Mistakes that help us learn', ar: 'أَخْطَاءٌ شَائِعَةٌ',
    cols: [{ label: 'Likely mix-up', w: 5.6 }, { label: 'Repair cue', w: 6.73 }],
    rows: [
      { core: true, cells: ['Reading ٥ as zero', 'The ring is five; the small dot ٠ is zero.'] },
      { core: true, cells: ['Reading ٦ as 7', '٦ is a hook = six; ٧ is a V = seven.'] },
      { core: true, cells: ['Reading ١٥ as 51', 'Tens on the left: 1 ten, 5 ones.'] },
      { cells: ['Mixing سَبْعَةٌ and تِسْعَةٌ', 'Listen for sab- (7) vs tis- (9).'] },
      { cells: ['Building 11 from وَاحِدٌ', 'Eleven has its own start: أَحَدَ عَشَرَ.'] },
      { cells: ['Joining digits together', 'Digits are separate symbols.'] },
    ],
    notes: 'FEEDBACK (2 min) — mix-ups from the website confusion column and number notes. Students correct in green pen.',
  },
  F.selfCheckSlide([
    { route: 'core', text: 'I can convert all ten digit shapes.' },
    { route: 'core', text: 'I can write the digits 0–9 clearly from memory.' },
    { route: 'develop', text: 'I can say 0–20 and answer random flashes.' },
    { route: 'develop', text: 'I can keep multi-digit numerals in place-value order.' },
    { route: 'stretch', text: 'I can read tens to 100.' },
  ]),
  F.exitTicket([
    q('Which is zero?', ['٠', '٥', '١'], 'The small dot.'),
    q('What is ١٩?', ['19', '91', '9'], 'Tens on the left.'),
    q('How do you say 20?', ['عِشْرُونَ', 'عَشَرَةٌ', 'اِثْنَا عَشَرَ'], 'A new tens word.'),
  ], 10),
  F.prepSlide({
    ...NEXT,
    words: [['قَرَأَ', 'he read', ''], ['كَتَبَ', 'he wrote', ''], ['دَرْسٌ', 'a lesson', 'pl. دُرُوسٌ'], ['قَلَمٌ', 'a pen', 'pl. أَقْلَامٌ'], ['بَيْتٌ', 'a house', 'pl. بُيُوتٌ']],
    questionEn: 'Write 1–20 in Arabic digits and in Arabic words.',
    questionAr: '١ ٢ ٣ … ٢٠',
    homework: {
      core: 'Website · F1-L07 · Digit Pair Sprint game; write the ten digits from memory.',
      develop: 'Website homework: 1–20 as digits and words; repeat the five hardest from memory.',
      stretch: 'Website homework: your age, house or room number and a memorable year in Arabic digits.',
    },
    wordsSource: 'Next lesson: reading aloud — we use every mark we have learnt. Read these five fully vowelled words tonight.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: 1–20 in digits and words + 5 words to read.' }),
];

module.exports = { meta, slides };
