'use strict';
/* GM-SCR-04 · Arabic Figures — website: Mastery & Revision › Grammar › Arabic Script › Script Mastery 04 (the ten figures ٠–٩; place value
 * stays left-to-right inside a number; figures in times, prices, dates, phone numbers, addresses, transport and pages; information hunt,
 * digit dictation, practical speaking, information card; common mistakes). Quizzes teacher-written on the website content.
 * GM-SCR-04 = website Script Mastery 04 (end of the Script strand). */
const G = require('./gm-common');
const { q } = G;

const meta = G.meta({
  code: 'GM-SCR-04', fileTitle: 'Arabic_Figures', title: 'Arabic Figures', arabic: 'الْأَرْقَامُ الْعَرَبِيَّةُ',
  focus: 'Read and write the ten Arabic figures ٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩, keep place value when Arabic text runs right to left (١٢ = 12, never 21), and use figures for times, prices, dates, phone numbers and addresses.',
  icon: 'FaHashtag',
});

const D = [['0', '٠', 'zero — a small dot', 'صِفْرٌ'], ['1', '١', 'one — a straight line', 'وَاحِدٌ'], ['2', '٢', 'two — one hook', 'اِثْنَانِ'], ['3', '٣', 'three — two hooks', 'ثَلَاثَةٌ'], ['4', '٤', 'four — like a backwards 3', 'أَرْبَعَةٌ'],
  ['5', '٥', 'five — a small circle (not zero!)', 'خَمْسَةٌ'], ['6', '٦', 'six — like a 7 with a hook', 'سِتَّةٌ'], ['7', '٧', 'seven — a V', 'سَبْعَةٌ'], ['8', '٨', 'eight — an upside-down V', 'ثَمَانِيَةٌ'], ['9', '٩', 'nine — like a 9', 'تِسْعَةٌ']];

const slides = G.gmLesson({
  code: 'GM-SCR-04', site: 'grammar__01-arabic-script__script-mastery-04-arabic-figures',
  source: 'The website chapter “Script Mastery 04”: the ten figures, place value, figures in context (time, price, date, phone, address, transport, pages), the information hunt, digit dictation, practical speaking, the information card and the common-mistakes table. The website checks this chapter through games, so the quizzes are teacher-written on the website content.',
  support: `• Core: recognise ٠–٩ and convert to Western figures; read simple two-digit numbers. Develop: figures in times, prices and dates; read phone numbers. Stretch: mixed-format notices, decimals and larger numbers.
• URDU BRIDGE: Urdu uses the Eastern figures ۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹. Arabic ٠ ١ ٢ ٣ ٥ ٧ ٨ ٩ look the same; Arabic ٤ ٦ are drawn differently from Urdu ۴ ۶ — point these out.
• This lesson is about FIGURES (writing numbers). Number WORDS and the grammar of numbers are taught in Numbers and Time (GM-NUM).`,
  teach: 'The ten figures, place value, figures in daily information.',
  wedo: 'Match figures, repair reversed numbers, hunt information.',
  next: { nextCode: 'GM-ART-01', nextTitle: 'The Definite Article', nextAr: 'أَدَاةُ التَّعْرِيفِ «الـ»' },
  doNow: {
    questions: [
      q('What does صِفْرٌ mean?', ['zero', 'five', 'ten'], 'Prepared at home.'),
      q('What does السِّعْرُ mean?', ['the price', 'the time', 'the page'], 'Prepared at home.'),
      q('Which mark means “no vowel”?', ['ـْ', 'ـّ', 'ـٌ'], 'GM-SCR-03: sukūn.'),
      q('Which word has a long ā?', ['بَابٌ', 'قَلَمٌ', 'بِنْتٌ'], 'GM-SCR-03: fatḥa + alif.'),
      q('Which word begins with a sun letter?', ['السَّاعَةُ', 'الْكِتَابُ', 'الْبَيْتُ'], 'GM-SCR-02: س is a sun letter.'),
    ],
    keyIdea: { text: 'Arabic words run right to left — but the digits inside a number keep their place value: ١٢ is twelve.', ar: '١٢ = 12 · ١٠٥ = 105 · ٢٠٢٧ = 2027' },
    retrieves: 'Questions 1–2 test the words prepared at home; 3–5 retrieve GM-SCR-03 and GM-SCR-02.',
  },
  objectives: ['Recognise and write the ten Arabic figures.', 'Convert between Arabic and Western figures.', 'Keep place value in multi-digit numbers.', 'Read figures in times, prices, dates and phone numbers.'],
  routes: {
    core: ['I can recognise ٠–٩.', 'I can convert a two-digit number.'],
    develop: ['I can read a time, a price and a date.', 'I can read a phone number digit by digit.'],
    stretch: ['I can read a mixed notice with figures.', 'I can handle decimals and four-digit years.'],
  },
  terms: {
    items: [
      { ar: 'رَقْمٌ', en: 'a figure / number', forms: [{ l: 'pl.', ar: 'أَرْقَامٌ' }] },
      { ar: 'صِفْرٌ', en: 'zero', note: '٠ — a small dot' },
      { ar: 'السَّاعَةُ', en: 'the time / o’clock', note: 'السَّاعَةُ ٧:٣٠' },
      { ar: 'السِّعْرُ', en: 'the price', note: 'السِّعْرُ ٢٥ جُنَيْهًا' },
      { ar: 'التَّارِيخُ', en: 'the date', note: '١٥/٠٦/٢٠٢٧' },
      { ar: 'رَقْمُ الْهَاتِفِ', en: 'telephone number', note: 'read digit by digit' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 1 · the ten Arabic figures (1 of 2) · website section', title: 'The ten figures: ٠ to ٤', ar: 'الْأَرْقَامُ ٠–٤', ltr: true,
      cols: [{ label: 'Western', w: 1.8 }, { label: 'How to remember it', w: 5.2 }, { label: 'Number word', w: 2.73, size: 22 }, { label: 'Arabic figure', w: 2.6, size: 36 }],
      rows: D.slice(0, 5).map(([w, a, how, word], i) => ({ core: i < 3, cells: [w, how, word, a] })),
      foot: 'Visual warning (website): Arabic ٠ is the zero; ٥ is the five. Learners often confuse these at first.',
      notes: 'PART 1 (2 min). Write each figure on the whiteboard; class copies in the air. The number words are for recognition only today.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 1 · the ten Arabic figures (2 of 2) · website section', title: 'The ten figures: ٥ to ٩', ar: 'الْأَرْقَامُ ٥–٩', ltr: true,
      cols: [{ label: 'Western', w: 1.8 }, { label: 'How to remember it', w: 5.2 }, { label: 'Number word', w: 2.73, size: 22 }, { label: 'Arabic figure', w: 2.6, size: 36 }],
      rows: D.slice(5).map(([w, a, how, word], i) => ({ core: i === 0, cells: [w, how, word, a] })),
      foot: 'Urdu bridge: Arabic ٤ and ٦ look different from the Urdu forms ۴ and ۶.',
      notes: 'PART 1b (2 min). Quick flash: show a figure, students type the Western digit in chat.',
    },
    {
      type: 'explain', min: 3, eyebrow: 'Grammar · part 2 · place value (website section)', title: 'Text runs right to left — numbers keep their order', ar: 'الْقِيمَةُ الْمَنْزِلِيَّةُ',
      points: [
        'Arabic words are read from right to left.',
        'But inside a number, the digits keep the same order as Western numbers: the biggest place value comes first on the LEFT.',
        'So ١٢ is twelve (one ten, two units), not twenty-one.',
        'Read a long number exactly as you would read 105 or 2027 — the figures just look different.',
        'Times use a colon, prices often use a decimal mark, and dates use slashes — see the next slide.',
      ],
      examples: [
        { ar: '١٢', en: '12', note: 'age, quantity' },
        { ar: '٤٧', en: '47', note: 'price, bus number' },
        { ar: '١٠٥', en: '105', note: 'room number' },
        { ar: '٢٠٢٧', en: '2027', note: 'a year' },
      ],
      callout: { kind: 'warn', text: 'Do not reverse the digits: ١٢ means 12, not 21 (website).' },
      notes: 'PART 2 (3 min) — website section “Arabic text runs right to left, but multi-digit figures keep their place value” and its table.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 3 · where Arabic figures appear (website section)', title: 'Figures in daily information', ar: 'الْأَرْقَامُ فِي الْحَيَاةِ', ltr: true,
      cols: [{ label: 'Context', w: 2.6 }, { label: 'Arabic (website)', w: 5.2, size: 24 }, { label: 'Meaning', w: 4.53 }],
      rows: [
        { core: true, cells: ['time', 'السَّاعَةُ ٧:٣٠', '7:30'] },
        { core: true, cells: ['price', 'السِّعْرُ ٢٥٫٥٠ جُنَيْهًا', '£25.50'] },
        { cells: ['date', '١٥/٠٦/٢٠٢٧', '15 June 2027'] },
        { cells: ['address', 'الْبَيْتُ رَقْمُ ٢٧', 'house number 27'] },
        { cells: ['transport', 'الْحَافِلَةُ رَقْمُ ١٨', 'bus number 18'] },
        { cells: ['page', 'الصَّفْحَةُ ٤٢', 'page 42'] },
      ],
      foot: 'Functional reading (website): phone numbers, codes and room numbers are usually read digit by digit.',
      notes: 'PART 3 (2 min). Read each line aloud; students say the Western equivalent.',
    },
  ],
  quick: [
    q('Which Arabic figure is FIVE?', ['٥', '٠', '٧'], '٠ is zero.'),
    q('What is ٣٨ in Western figures?', ['38', '83', '28'], 'Same place value.'),
    q('Which is 2027?', ['٢٠٢٧', '٧٢٠٢', '٢٠٧٢'], 'Left to right: 2-0-2-7.'),
    q('How do we usually read a phone number?', ['digit by digit', 'as one big number', 'backwards'], 'Website functional reading.'),
  ],
  quickNote: 'teacher-written on the website sections.',
  ido: {
    title: 'Watch me read an information notice',
    steps: [
      { head: 'Find figures', ar: '٨:١٥', think: 'Colon → a time.' },
      { head: 'Convert', ar: '٨:١٥', think: '8:15 — same order.' },
      { head: 'Context', ar: 'رَقْمُ الْفَصْلِ ٢٤', think: 'Classroom 24.' },
      { head: 'Price', ar: '١٧٫٥٠ جُنَيْهًا', think: '17.50 pounds.' },
    ],
    legend: [],
    model: 'يَبْدَأُ الدَّرْسُ فِي السَّاعَةِ ٨:١٥. رَقْمُ الْفَصْلِ ٢٤.',
    modelEn: 'The lesson begins at 8:15. The classroom number is 24.',
    notes: 'Website information hunt, first two sentences. Think aloud: what kind of figure is it (time / number / price / date)? Then convert without reversing.',
  },
  models: [
    { ar: 'السَّاعَةُ ٧:٣٠', en: 'It is 7:30.', tip: 'A colon marks a time.' },
    { ar: 'الْحَافِلَةُ رَقْمُ ١٨', en: 'Bus number 18.', tip: 'رَقْمُ = number' },
    { ar: 'الصَّفْحَةُ ٤٢', en: 'Page 42.', tip: 'Not 24!' },
    { ar: 'الْبَيْتُ رَقْمُ ٢٧', en: 'House number 27.', tip: 'An address.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · website game 5 “What context is it?”', title: 'Time, price or date?', ar: 'صَنِّفْ',
      categories: ['A time', 'A price', 'A date'],
      items: [['٧:٣٠', 0], ['٢٥ جُنَيْهًا', 1], ['١٥/٠٦/٢٠٢٧', 2], ['٨:١٥', 0], ['١٧٫٥٠ جُنَيْهًا', 1], ['١٢/٠٥/٢٠٢٧', 2], ['١٠:٤٥', 0], ['٤٥ جُنَيْهًا', 1], ['٢١/٠٦/٢٠٢٧', 2]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type T, P or D for each card, then say each one aloud in Western figures.',
    },
  ],
  mistakes: [
    { wrong: '٥ = صِفْرٌ', right: '٠ = صِفْرٌ', why: '٠ is a small dot (zero); ٥ is a small circle (five).' },
    { wrong: '١٢ = وَاحِدٌ وَعِشْرُونَ', right: '١٢ = اِثْنَا عَشَرَ', why: '١٢ is twelve: place value does not reverse.' },
    { wrong: 'السَّاعَةُ ٧٣٠', right: 'السَّاعَةُ ٧:٣٠', why: 'The colon shows it is a time.' },
  ],
  hints: ['Dot or circle?', 'Which way do digits go?', 'How do we show a time?'],
  practice: [
    q('What is ٦٤ in Western figures?', ['64', '46', '94'], 'Six, then four.'),
    q('Which is the price 45.50?', ['٤٥٫٥٠', '٥٤٫٠٥', '٤٥:٥٠'], 'A decimal mark, not a colon.'),
    q('Which is 9?', ['٩', '٦', '٨'], 'The other two are six and eight.'),
    q('What is ١٠٥?', ['105', '501', '15'], 'One hundred and five.'),
  ],
  practiceLabel: 'teacher-written on website games 1–4 and 6',
  read: {
    title: 'Information hunt', label: 'website reading task “information hunt”', size: 32,
    text: 'يَبْدَأُ الدَّرْسُ فِي السَّاعَةِ ٨:١٥. رَقْمُ الْفَصْلِ ٢٤. ثَمَنُ الْكِتَابِ ١٧٫٥٠ جُنَيْهًا. الِامْتِحَانُ فِي ١٢/٠٥/٢٠٢٧.',
    glossary: [['يَبْدَأُ', 'begins'], ['الدَّرْسُ', 'the lesson'], ['رَقْمُ الْفَصْلِ', 'classroom number'], ['ثَمَنُ', 'the price of'], ['جُنَيْهًا', 'pounds'], ['الِامْتِحَانُ', 'the exam']],
    task: 'Website information hunt: what time does the lesson begin? What is the classroom number? How much is the book? What is the exam date?',
    questions: [
      q('What time does the lesson begin?', ['8:15', '5:18', '8:51'], 'السَّاعَةِ ٨:١٥'),
      q('What is the classroom number?', ['24', '42', '14'], 'رَقْمُ الْفَصْلِ ٢٤'),
      q('How much is the book?', ['17.50', '71.50', '17.05'], '١٧٫٥٠ جُنَيْهًا'),
      q('When is the exam?', ['12 May 2027', '5 December 2027', '21 May 2027'], '١٢/٠٥/٢٠٢٧'),
    ],
    qNote: 'Website information-hunt questions, as multiple choice.',
    detective: '1. Find the figures.\n2. Colon = time · slashes = date.\n3. Convert without reversing.',
  },
  speak: {
    title: 'Speaking: practical information', source: 'website speaking task “practical information”',
    prompts: [
      { route: 'core', ar: 'مَا رَقْمُ الْحَافِلَةِ؟' },
      { route: 'develop', ar: 'كَمِ السِّعْرُ؟ وَكَمِ السَّاعَةُ الْآنَ؟' },
      { route: 'stretch', ar: 'مَا رَقْمُ هَاتِفِكَ؟ (رَقْمٌ خَيَالِيٌّ)' },
    ],
    stems: [
      { route: 'core', ar: 'الْحَافِلَةُ رَقْمُ ______ .' },
      { route: 'develop', ar: 'السِّعْرُ ______ جُنَيْهًا.' },
      { route: 'stretch', ar: 'رَقْمُ هَاتِفِي ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَا رَقْمُ الْحَافِلَةِ؟', en: 'What is the bus number?' },
      { who: 'B', ar: 'الْحَافِلَةُ رَقْمُ ١٨، وَتَصِلُ فِي السَّاعَةِ ٧:٣٠.', en: 'Bus number 18; it arrives at 7:30.' },
    ],
    notes: 'Website speaking: say a fictional telephone number, a bus number, a price, a date and a time. Students may say the numbers in English if Arabic number words are not yet secure — the target today is reading the FIGURES. Safeguarding: phone numbers must be fictional. Digit dictation (website listening): read the four items in the notes of the website page; students write them in Arabic figures.',
  },
  write: {
    siteTask: 'My information card: write six short Arabic sentences using figures for age, date, time, price, address and telephone number.',
    core: { amount: '6 figures', task: 'Write your age, house number and today’s date in Arabic figures.', how: 'Copy the frames; replace the figures.' },
    develop: { amount: '4 sentences', task: 'Information card: age, date, time and price.', how: 'Use السَّاعَةُ · السِّعْرُ · التَّارِيخُ.' },
    stretch: { amount: '6 sentences', task: 'Website information card: age, date, time, price, address and (fictional) phone number.', how: 'Then convert every figure to Western digits underneath.' },
  },
  frames: {
    core: [
      { en: 'My age (e.g. 13)', ar: 'عُمْرِي ______ سَنَةً.' },
      { en: 'House number …', ar: 'الْبَيْتُ رَقْمُ ______ .' },
      { en: 'The date today …', ar: 'التَّارِيخُ ______ .' },
      { en: 'Page …', ar: 'الصَّفْحَةُ ______ .' },
    ],
    develop: [
      { en: 'The lesson begins at …', ar: 'يَبْدَأُ الدَّرْسُ فِي السَّاعَةِ ______ .' },
      { en: 'The price is … pounds.', ar: 'السِّعْرُ ______ جُنَيْهًا.' },
      { en: 'Bus number …', ar: 'الْحَافِلَةُ رَقْمُ ______ .' },
      { en: 'The exam is on …', ar: 'الِامْتِحَانُ فِي ______ .' },
    ],
    bank: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', 'السَّاعَةُ', 'السِّعْرُ'],
  },
  stretchTask: {
    task: 'Website information card: six sentences with figures for age, date, time, price, address and a fictional phone number.',
    checklist: ['Every figure written in Arabic figures.', 'No reversed numbers.', 'A colon in the time.', 'Slashes in the date.', 'The phone number is fictional.'],
    phrases: [['عُمْرِي ١٣ سَنَةً', 'I am 13'], ['التَّارِيخُ ١٥/٠٦/٢٠٢٧', 'the date'], ['السَّاعَةُ ٧:٣٠', 'the time'], ['السِّعْرُ ٢٥ جُنَيْهًا', 'the price'], ['الْبَيْتُ رَقْمُ ٢٧', 'house number'], ['رَقْمُ هَاتِفِي', 'my phone number']],
  },
  model: {
    text: 'عُمْرِي ١٣ سَنَةً. أَسْكُنُ فِي الْبَيْتِ رَقْمُ ٢٧. التَّارِيخُ الْيَوْمَ ١٥/٠٦/٢٠٢٧. يَبْدَأُ الدَّرْسُ فِي السَّاعَةِ ٨:١٥. ثَمَنُ الْكِتَابِ ١٧٫٥٠ جُنَيْهًا. رَقْمُ الْهَاتِفِ ٠٧٩٣٥ ٦٤٨ ١٢.',
    en: 'I am 13. I live at house number 27. Today’s date is 15/06/2027. The lesson begins at 8:15. The book costs 17.50 pounds. The (fictional) phone number is 07935 648 12.',
    find: ['an age', 'a date', 'a time', 'a price'],
    source: 'teacher model for the website information card (all figures from the website examples)',
  },
  selfCheck: [
    { route: 'core', text: 'I can write ٠ to ٩ without looking.' },
    { route: 'core', text: 'I did not reverse any number.' },
    { route: 'develop', text: 'My time has a colon and my date has slashes.' },
    { route: 'develop', text: 'I can read a phone number digit by digit.' },
    { route: 'stretch', text: 'I can read a whole notice with figures.' },
  ],
  exit: [
    q('Which is 2?', ['٢', '٣', '٧'], 'One hook = two.'),
    q('What is ٥٠ in Western figures?', ['50', '05', '5'], 'Five, then zero.'),
    q('Which is a TIME?', ['٩:٤٥', '٩/٤٥', '٩٫٤٥'], 'A colon marks a time.'),
  ],
  masteryQs: [
    q('Which is 7?', ['٧', '٨', '٦'], 'A V shape.'),
    q('What is ٨٣ in Western figures?', ['83', '38', '73'], 'Eight, then three.'),
    q('Which is the year 2026?', ['٢٠٢٦', '٦٢٠٢', '٢٠٦٢'], 'Same order.'),
    q('Which is 4?', ['٤', '٦', '٣'], 'Watch the Urdu form ۴.'),
    q('What is ١٠٠٠?', ['1000', '0001', '100'], 'One thousand.'),
    q('What is a common mistake with ٥?', ['reading it as zero', 'reading it as 50', 'reading it as 2'], '٠ is zero.'),
  ],
  prep: {
    words: [['نَكِرَةٌ', 'indefinite noun', '—'], ['مَعْرِفَةٌ', 'definite noun', '—'], ['أَدَاةُ التَّعْرِيفِ', 'the definite article', '—'], ['هَمْزَةُ الْوَصْلِ', 'the connecting hamza', '—'], ['تَنْوِينٌ', 'nunation', '—']],
    questionEn: 'Find three nouns WITH الـ and three WITHOUT in your Arabic book.',
    questionAr: 'كِتَابٌ · الْكِتَابُ · ______',
    homework: {
      core: 'Write ٠–٩ three times; convert ten numbers from your timetable.',
      develop: 'Complete the website information card (four sentences).',
      stretch: 'Write the full information card and play the 60-second Arabic Figures Challenge.',
    },
    wordsSource: 'The five words prepare GM-ART-01 (website Articles lesson 1: the definite article).',
  },
  remember: 'Remember: ٠ is zero, ٥ is five · digits keep their order (١٢ = 12) · colon = time · read phone numbers digit by digit.',
});

module.exports = { meta, slides };
