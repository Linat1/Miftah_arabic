'use strict';
/* GM-NUM-06 · Dates and Calendars — website: Mastery & Revision › Numeracy Mastery 06 (the counted week: al-aḥad “day one” … al-khamīs
 * “day five” + al-jumuʿa, as-sabt; mā l-yawm?; the twelve Western months in Arabic script and the yūnyū / yūlyū ear trap; Hijri and
 * Gregorian calendars; the date formula ordinal + min (shahri) + month — date ordinals are MASCULINE because yawm is masculine (clock
 * ordinals were feminine); dates in digits day/month/year; birthdays, Eids, holidays; school calendar; years as Stretch).
 * Website correction: the website asks «مَتَى عِيدُ مِيلَادُكَ؟» — in an iḍāfa the second noun is genitive: عِيدُ مِيلَادِكَ. The website
 * quizzes are interactive and not stored, so all questions are teacher-written on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'numeracy__numbers__numeracy-mastery-06-dates-calendars';

const meta = G.meta({
  code: 'GM-NUM-06', fileTitle: 'Dates_Calendars', title: 'Dates and Calendars', arabic: 'التَّارِيخُ وَالتَّقْوِيمُ',
  focus: 'The week counts: al-aḥad (day one) to al-khamīs (day five), then al-jumuʿa and as-sabt. A date = masculine ordinal + min + month: al-khāmisu min māris (5 March) — masculine because yawm is masculine.',
  icon: 'FaCalendarDays',
});

const slides = G.gmLesson({
  code: 'GM-NUM-06', site: KEY,
  support: `• Core: the seven days (with the numbers hidden inside) and the twelve months in Arabic script; مَا الْيَوْمُ؟ · أَمْسِ · الْيَوْمَ · غَدًا. Develop: full dates 1st–10th with the masculine ordinal (الْخَامِسُ مِنْ مَارِس), birthdays and school events, فِي الْخَامِسِ مِنْ … . Stretch: dates above 10, years (سَنَةَ أَلْفَيْنِ وَسَبْعٍ وَعِشْرِينَ) and date calculations.
• Website ear trap: يُونْيُو (June, nūn) vs يُولْيُو (July, lām) — “N for nūn, L for lām”.
• The gender contrast (website): clock ordinals are feminine (sāʿa), date ordinals masculine (yawm). The system never changed.`,
  teach: 'The week; the months; the date formula; important dates.',
  wedo: 'Read the school calendar; sort days / months; repair.',
  next: { nextCode: 'GM-VS-01', nextTitle: 'Word Order and Sentence Roles', nextAr: 'تَرْتِيبُ الْجُمْلَةِ الْفِعْلِيَّةِ وَأَرْكَانُهَا' },
  doNow: {
    questions: [
      q('Choose “the fifth” (masculine).', ['الْخَامِسُ', 'الْخَامِسَةُ', 'خَمْسَةٌ'], 'GM-NUM-01 ordinals.'),
      q('Choose 5:00 (clock time).', ['السَّاعَةُ الْخَامِسَةُ', 'السَّاعَةُ الْخَامِسُ', 'السَّاعَةُ خَمْسَةٌ'], 'GM-NUM-02: sāʿa is feminine.'),
      q('Is يَوْمٌ masculine or feminine?', ['masculine', 'feminine', 'both'], 'No tāʾ marbūṭa.'),
      q('What does غَدًا mean?', ['tomorrow', 'yesterday', 'today'], 'GM-V-06.'),
      q('Which month is رَمَضَانُ in?', ['the Hijri calendar', 'the Western calendar', 'both'], 'Prep word.'),
    ],
    keyIdea: { text: 'Date = masculine ordinal + min (shahri) + month. After fī the ordinal takes kasra: fī l-khāmisi min māris.', ar: '{k|الْخَامِسُ} مِنْ {e|مَارِس} ‖ فِي {k|الْعَاشِرِ} مِنْ {e|يُونْيُو}' },
    retrieves: 'Teacher-written retrieval from GM-NUM-01 and NUM-02 (ordinals and gender) and the prep words.',
  },
  objectives: ['Name the seven days of the week.', 'Read and write the twelve months in Arabic script.', 'Say a full date with a masculine ordinal.', 'Talk about birthdays, Eids and holidays.'],
  routes: {
    core: ['I say what day it is today.', 'I name any month in Arabic.'],
    develop: ['I say dates 1st–10th: al-khāmisu min māris.', 'I answer matā ʿīdu mīlādika?'],
    stretch: ['I say a full date with the year.', 'I calculate the days between two dates.'],
  },
  terms: {
    items: [
      { ar: 'التَّارِيخُ', en: 'the date', note: 'مَا التَّارِيخُ الْيَوْمَ؟' },
      { ar: 'التَّقْوِيمُ', en: 'the calendar', note: 'الْمِيلَادِيُّ · الْهِجْرِيُّ' },
      { ar: 'الْأُسْبُوعُ', en: 'the week', note: 'سَبْعَةُ أَيَّامٍ' },
      { ar: 'الشَّهْرُ · الشُّهُورُ', en: 'month · months', note: 'شَهْرُ مَايُو' },
      { ar: 'عِيدُ مِيلَادٍ', en: 'birthday', note: 'عِيدُ مِيلَادِي' },
      { ar: 'الْعُطْلَةُ', en: 'the holiday', note: 'الْعُطْلَةُ الصَّيْفِيَّةُ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Dates · part 1 · the counted week (website table)', title: 'The numbers hiding in the days', ar: 'أَيَّامُ الْأُسْبُوعِ', ltr: true,
      cols: [{ label: 'Day', w: 3.6, size: 24 }, { label: 'English', w: 2.6 }, { label: 'Number inside', w: 6.13 }],
      rows: [
        { core: true, cells: ['يَوْمُ الْأَحَدِ', 'Sunday', 'وَاحِدٌ — day one'] },
        { core: true, cells: ['يَوْمُ الِاثْنَيْنِ', 'Monday', 'اثْنَانِ — day two'] },
        { core: true, cells: ['يَوْمُ الثُّلَاثَاءِ', 'Tuesday', 'ثَلَاثَةٌ — day three'] },
        { core: true, cells: ['يَوْمُ الْأَرْبِعَاءِ', 'Wednesday', 'أَرْبَعَةٌ — day four'] },
        { core: true, cells: ['يَوْمُ الْخَمِيسِ', 'Thursday', 'خَمْسَةٌ — day five'] },
        { core: true, cells: ['يَوْمُ الْجُمُعَةِ', 'Friday', 'the day of gathering (Jumuʿa)'] },
        { core: true, cells: ['يَوْمُ السَّبْتِ', 'Saturday', 'learn it as a word'] },
      ],
      foot: 'Website memory gift: you only truly memorise TWO days — al-jumuʿa and as-sabt. Ask mā l-yawm? — al-yawmu yawmu l-khamīs. amsi · al-yawma · ghadan.',
      notes: 'PART 1 (3 min) — website “The counted week”. Count the five on your fingers.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Dates · part 2 · the twelve months (website)', title: 'Western months in Arabic script', ar: 'الشُّهُورُ الْمِيلَادِيَّةُ', ltr: true,
      cols: [{ label: 'Month', w: 2.6, size: 24 }, { label: 'English', w: 1.6 }, { label: 'Month', w: 2.6, size: 24 }, { label: 'English', w: 1.6 }, { label: 'Month', w: 2.6, size: 24 }, { label: 'English', w: 1.33 }],
      rows: [
        { core: true, cells: ['يَنَايِر', 'Jan', 'مَايُو', 'May', 'سِبْتَمْبِر', 'Sep'] },
        { core: true, cells: ['فِبْرَايِر', 'Feb', 'يُونْيُو', 'Jun', 'أُكْتُوبَر', 'Oct'] },
        { core: true, cells: ['مَارِس', 'Mar', 'يُولْيُو', 'Jul', 'نُوفَمْبِر', 'Nov'] },
        { core: true, cells: ['أَبْرِيل', 'Apr', 'أُغُسْطُس', 'Aug', 'دِيسَمْبِر', 'Dec'] },
      ],
      foot: 'Website: the months are transliterations — sound them out. Ear trap: yūnyū (June, nūn) vs yūlyū (July, lām). Heritage link: at-taqwīm al-mīlādī (from the birth of ʿĪsā, peace be upon him) and at-taqwīm al-hijrī; Ramaḍān is the ninth Hijri month.',
      notes: 'PART 2 (3 min) — website “The twelve months”. Spellings follow the website (some Arab countries use other month names).',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Dates · part 3 · saying the date (website table) · Develop / Stretch', title: 'Ordinal + min + month', ar: 'مَا التَّارِيخُ الْيَوْمَ؟', ltr: true,
      cols: [{ label: 'Date', w: 1.8 }, { label: 'Arabic', w: 6.6, size: 22 }, { label: 'Note', w: 3.93 }],
      rows: [
        { core: true, cells: ['1 May', 'الْيَوْمُ الْأَوَّلُ مِنْ شَهْرِ مَايُو', 'full exam format'] },
        { core: true, cells: ['3 Sep', 'الثَّالِثُ مِنْ سِبْتَمْبِر', 'short form — shahr optional'] },
        { core: true, cells: ['5 Mar', 'الْخَامِسُ مِنْ مَارِس', 'masculine ordinal (yawm)'] },
        { cells: ['on 5 Jul', 'فِي الْخَامِسِ مِنْ يُولْيُو', 'after fī: kasra'] },
        { cells: ['22 Oct', 'الثَّانِي وَالْعِشْرُونَ مِنْ أُكْتُوبَر', 'compound ordinal'] },
        { cells: ['5/3/2027', 'الْخَامِسُ مِنْ مَارِس سَنَةَ أَلْفَيْنِ وَسَبْعٍ وَعِشْرِينَ', 'year (Stretch)'] },
      ],
      foot: 'Website gender contrast: clock times are feminine (as-sāʿatu l-khāmisa) because sāʿa is feminine; dates are masculine (al-yawmu l-khāmis) because yawm is masculine. Digits: day/month/year, like the UK.',
      notes: 'PART 3 (4 min) — website “Saying the date”. Birthday question: matā ʿīdu mīlādika? (website corrected — see file note).',
    },
  ],
  quick: [
    q('Which day is “day two”?', ['الِاثْنَيْنِ', 'الثُّلَاثَاءِ', 'الْأَحَدِ'], 'ithnān = two.'),
    q('Which month is June?', ['يُونْيُو', 'يُولْيُو', 'يَنَايِر'], 'N for nūn = June.'),
    q('Choose “the 5th of March”.', ['الْخَامِسُ مِنْ مَارِس', 'الْخَامِسَةُ مِنْ مَارِس', 'خَمْسَةٌ مِنْ مَارِس'], 'Masculine ordinal.'),
    q('Choose “on the 10th of June”.', ['فِي الْعَاشِرِ مِنْ يُونْيُو', 'فِي الْعَاشِرُ مِنْ يُونْيُو', 'فِي الْعَاشِرَةِ مِنْ يُونْيُو'], 'After fī: kasra; masculine.'),
  ],
  quickNote: 'teacher-written hinge questions on the website formulas and traps.',
  ido: {
    title: 'Watch me read our school calendar',
    steps: [
      { head: 'Term starts', ar: 'السَّابِعَ مِنْ سِبْتَمْبِر', think: 'Monday 7 September.' },
      { head: 'Sports Day', ar: 'الثَّانِي وَالْعِشْرِينَ', think: '22 October.' },
      { head: 'Holiday', ar: 'التَّاسِعَ عَشَرَ', think: '19 December.' },
      { head: 'Return', ar: 'الرَّابِعِ مِنْ يَنَايِر', think: '4 January.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'DATE', e: 'DAY / EVENT' },
    model: 'يَبْدَأُ الْفَصْلُ الدِّرَاسِيُّ {e|يَوْمَ الِاثْنَيْنِ}، {k|السَّابِعَ مِنْ سِبْتَمْبِر}. {e|يَوْمُ الرِّيَاضَةِ} فِي {k|الثَّانِي وَالْعِشْرِينَ مِنْ أُكْتُوبَر}. تَبْدَأُ {e|عُطْلَةُ الشِّتَاءِ} فِي {k|التَّاسِعَ عَشَرَ مِنْ دِيسَمْبِر}، وَنَعُودُ إِلَى الْمَدْرَسَةِ فِي {k|الرَّابِعِ مِنْ يَنَايِر}.',
    modelEn: 'The term starts on Monday 7 September. Sports Day is on 22 October. The winter holiday starts on 19 December, and we return to school on 4 January.',
    notes: 'Website reading “School calendar” (answers: 7 Sep · 22 Oct · 19 Dec · 4 Jan).',
  },
  models: [
    { ar: 'مَا الْيَوْمُ؟ — الْيَوْمُ يَوْمُ الْخَمِيسِ.', en: 'What day is it? — Today is Thursday.', tip: 'Day.' },
    { ar: 'عِيدُ مِيلَادِي فِي الْخَامِسِ مِنْ يُولْيُو.', en: 'My birthday is on 5 July.', tip: 'fī + kasra.' },
    { ar: 'تَبْدَأُ الْعُطْلَةُ فِي الْعِشْرِينَ مِنْ دِيسَمْبِر.', en: 'The holiday starts on 20 December.', tip: '20th.' },
    { ar: 'الِامْتِحَانُ يَوْمَ الْخَمِيسِ، الثَّانِي مِنْ مَايُو.', en: 'The exam is on Thursday, 2 May.', tip: 'Day + date.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · the school notice (website Task A) · say it aloud', title: 'Important days', ar: 'إِعْلَانٌ: أَيَّامٌ مُهِمَّةٌ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Event', w: 3.6, size: 22 }, { label: 'Arabic date', w: 5.6, size: 22 }, { label: 'In English', w: 3.13 }],
      rows: [
        { core: true, cells: ['تَبْدَأُ الِامْتِحَانَاتُ', 'يَوْمَ الِاثْنَيْنِ، الرَّابِعَ مِنْ مَايُو', 'Mon 4 May'] },
        { core: true, cells: ['رِحْلَةُ الْمَدْرَسَةِ', 'يَوْمَ الْأَرْبِعَاءِ، الْعَاشِرَ مِنْ يُونْيُو', 'Wed 10 June'] },
        { cells: ['عِيدُ الْأَضْحَى', 'السَّابِعَ وَالْعِشْرِينَ مِنْ مَايُو', '27 May'] },
        { cells: ['الْعُطْلَةُ الصَّيْفِيَّةُ', 'فِي الْأَوَّلِ مِنْ يُولْيُو', '1 July'] },
      ],
      foot: 'Website detective question: June has 30 days, so from the trip (10 June) to the end of June is 30 − 10 = 20 days. The notice never says it — your arithmetic does.',
      notes: 'WE DO (3 min) — website Task A. Watch the June / July trap in rows 2 and 4.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · day or month?', title: 'Day of the week, or month?', ar: 'يَوْمٌ أَمْ شَهْرٌ؟',
      categories: ['Day of the week', 'Month'],
      items: [['الْأَحَدُ', 0], ['الثُّلَاثَاءُ', 0], ['الْخَمِيسُ', 0], ['السَّبْتُ', 0], ['مَارِس', 1], ['يُونْيُو', 1], ['أُكْتُوبَر', 1], ['دِيسَمْبِر', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). For each day students say the number hidden inside (al-aḥad = 1 …); for each month, its English name.',
    },
  ],
  mistakes: [
    { wrong: 'الْخَامِسَةُ مِنْ مَارِس', right: 'الْخَامِسُ مِنْ مَارِس', why: 'Dates count days (yawm, masculine) → masculine ordinal.' },
    { wrong: 'مَتَى عِيدُ مِيلَادُكَ؟', right: 'مَتَى عِيدُ مِيلَادِكَ؟', why: 'In an iḍāfa the second noun is genitive (website line corrected).' },
    { wrong: 'فِي الْعَاشِرُ مِنْ يُونْيُو', right: 'فِي الْعَاشِرِ مِنْ يُونْيُو', why: 'After fī the ordinal takes kasra.' },
  ],
  hints: ['Day or hour: masc. or fem.?', 'Ending after ʿīdu …?', 'Ending after fī?'],
  practice: [
    q('Which month is July?', ['يُولْيُو', 'يُونْيُو', 'يَنَايِر'], 'L for lām = July.'),
    q('What is ٢٠٢٦/٥/١?', ['1 May 2026', '5 January 2026', '26 May 2001'], 'day / month / year.'),
    q('Choose “Eid al-Fiṭr”.', ['عِيدُ الْفِطْرِ', 'عِيدُ الْأَضْحَى', 'رَأْسُ السَّنَةِ'], 'The Eid after Ramaḍān.'),
    q('Choose “My birthday is on the 3rd of March”.', ['عِيدُ مِيلَادِي فِي الثَّالِثِ مِنْ مَارِس', 'عِيدُ مِيلَادِي الثَّالِثَةُ مِنْ مَارِس', 'عِيدُ مِيلَادِي فِي ثَلَاثَةِ مَارِس'], 'fī + masculine ordinal (kasra) + min.'),
  ],
  practiceLabel: 'teacher-written questions on the website formula',
  read: {
    title: 'Three birthdays', label: 'website listening “Important dates” (as a reading text)',
    text: 'اِسْمِي سَارَةُ، وَعِيدُ مِيلَادِي فِي الثَّالِثِ مِنْ مَارِس. اِسْمِي عُمَرُ، وَعِيدُ مِيلَادِي فِي الْعَاشِرِ مِنْ يُونْيُو. اِسْمِي زَيْنَبُ، وَعِيدُ مِيلَادِي فِي الْحَادِي وَالثَّلَاثِينَ مِنْ دِيسَمْبِر — لَيْلَةَ رَأْسِ السَّنَةِ! نَحْتَفِلُ بِأَعْيَادِ مِيلَادِنَا مَعًا فِي يَوْمِ السَّبْتِ الْأَوَّلِ مِنْ كُلِّ شَهْرٍ.',
    glossary: [['الْحَادِي وَالثَّلَاثِينَ', 'the thirty-first'], ['لَيْلَةَ رَأْسِ السَّنَةِ', 'New Year’s Eve'], ['نَحْتَفِلُ', 'we celebrate'], ['مَعًا', 'together']],
    task: 'Website: write the three birthdays in day / month format.',
    questions: [
      q('When is Sārah’s birthday?', ['3/3', '10/6', '31/12'], 'Ath-thālith min māris.'),
      q('When is ʿUmar’s birthday?', ['10/6', '10/7', '6/10'], 'Yūnyū = June (nūn).'),
      q('Why is Zaynab’s birthday special?', ['it is New Year’s Eve', 'it is Eid', 'it is the first day of the year'], 'Laylata raʾsi s-sana.'),
      q('When do they celebrate together?', ['the first Saturday of each month', 'every Friday', 'on 1 January'], 'Yawm as-sabt al-awwal.'),
    ],
    qNote: 'Website listening script used as a reading text, with one added sentence; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: my year', source: 'website examiner questions',
    prompts: [
      { route: 'core', ar: 'مَا الْيَوْمُ؟ وَمَا التَّارِيخُ الْيَوْمَ؟' },
      { route: 'develop', ar: 'مَتَى عِيدُ مِيلَادِكَ؟' },
      { route: 'stretch', ar: 'مَتَى تَبْدَأُ الْعُطْلَةُ الصَّيْفِيَّةُ؟ وَمَاذَا سَتَفْعَلُ فِيهَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'الْيَوْمُ يَوْمُ ______ ، ______ مِنْ ______ .' },
      { route: 'develop', ar: 'عِيدُ مِيلَادِي فِي ______ مِنْ ______ .' },
      { route: 'stretch', ar: 'تَبْدَأُ الْعُطْلَةُ فِي ______ ، وَسَوْفَ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَتَى عِيدُ مِيلَادِكِ؟', en: 'When is your birthday? (to a girl)' },
      { who: 'B', ar: 'عِيدُ مِيلَادِي فِي الثَّامِنِ مِنْ أَبْرِيل. هَذِهِ السَّنَةَ سَيَكُونُ يَوْمَ الْأَرْبِعَاءِ، وَسَأَحْتَفِلُ مَعَ عَائِلَتِي.', en: 'My birthday is on the 8th of April. This year it will be on a Wednesday, and I will celebrate with my family.' },
    ],
    notes: 'Website: birthday, two school dates, a family celebration, a holiday and one date above 20.',
  },
  write: {
    siteTask: 'Write 8–10 Arabic sentences about important dates in your year.',
    core: { amount: '5 sentences', task: 'Days and months: what happens when.', how: 'yawma l-… · fī shahri …' },
    develop: { amount: '8 sentences', task: 'Website “Spicy”: «تَوَارِيخِي الْمُهِمَّةُ».', how: 'Ordinal + min + month.' },
    stretch: { amount: 'capstone paragraph', task: 'Website “Hot”: «صَفْحَةٌ مِنْ حَيَاتِي بِالْأَرْقَامِ».', how: 'Age, a time, a price, a quantity and a date.' },
  },
  frames: {
    core: [
      { en: 'Today is …', ar: 'الْيَوْمُ يَوْمُ ______ .' },
      { en: 'My birthday is in …', ar: 'عِيدُ مِيلَادِي فِي شَهْرِ ______ .' },
      { en: 'Tomorrow is …', ar: 'غَدًا يَوْمُ ______ .' },
      { en: 'My favourite month is …', ar: 'شَهْرِي الْمُفَضَّلُ ______ .' },
    ],
    develop: [
      { en: 'My birthday is on the … of …', ar: 'عِيدُ مِيلَادِي فِي ______ مِنْ ______ .' },
      { en: 'The holiday starts on …', ar: 'تَبْدَأُ الْعُطْلَةُ فِي ______ .' },
      { en: 'The exam is on (day), (date)', ar: 'الِامْتِحَانُ يَوْمَ ______ ، ______ .' },
      { en: 'We celebrate Eid in …', ar: 'نَحْتَفِلُ بِالْعِيدِ فِي ______ .' },
    ],
    bank: ['الْأَحَدُ', 'الِاثْنَيْنِ', 'الثُّلَاثَاءُ', 'الْأَرْبِعَاءُ', 'الْخَمِيسُ', 'الْجُمُعَةُ', 'السَّبْتُ', 'الْأَوَّلُ', 'الثَّانِي', 'الْخَامِسُ', 'الْعَاشِرُ', 'مِنْ', 'عِيدُ الْفِطْرِ'],
  },
  stretchTask: {
    task: 'Website capstone: «صَفْحَةٌ مِنْ حَيَاتِي بِالْأَرْقَامِ» — one paragraph using all six numeracy lessons.',
    checklist: ['Your age (Age Ladder).', 'A clock time from your day.', 'A price you paid (masculine currency).', 'A quantity you bought (kīlū / ghrām).', 'A date you are looking forward to (masculine ordinal).'],
    phrases: [['أَنْتَظِرُ بِشَوْقٍ', 'I look forward to'], ['فِي الْأُسْبُوعِ الْمَاضِي', 'last week'], ['كُلَّ سَنَةٍ', 'every year'], ['هَذِهِ السَّنَةَ', 'this year'], ['الشَّهْرَ الْقَادِمَ', 'next month'], ['مَعَ عَائِلَتِي', 'with my family']],
  },
  model: {
    text: 'صَفْحَةٌ مِنْ حَيَاتِي بِالْأَرْقَامِ: اِسْمِي هِنْدُ، وَعُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً. أَسْتَيْقِظُ كُلَّ يَوْمٍ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ صَبَاحًا. يَوْمَ السَّبْتِ ذَهَبْتُ إِلَى السُّوقِ، وَاشْتَرَيْتُ كِيلُو مِنَ التُّفَّاحِ وَنِصْفَ كِيلُو مِنَ الْعِنَبِ بِخَمْسَةَ عَشَرَ جُنَيْهًا. عِيدُ مِيلَادِي فِي الْخَامِسِ مِنْ يُونْيُو، وَأَنْتَظِرُهُ بِشَوْقٍ لِأَنَّ جَدَّتِي سَتَزُورُنَا. تَبْدَأُ الْعُطْلَةُ الصَّيْفِيَّةُ فِي الْأَوَّلِ مِنْ يُولْيُو، وَسَنُسَافِرُ إِلَى الْأُرْدُنِّ لِمُدَّةِ ثَلَاثَةِ أَسَابِيعَ.',
    en: 'A page of my life in numbers: My name is Hind, and I am fourteen. I wake up every day at half past six in the morning. On Saturday I went to the market and bought a kilo of apples and half a kilo of grapes for fifteen pounds. My birthday is on the 5th of June, and I am looking forward to it because my grandmother will visit us. The summer holiday starts on the 1st of July, and we will travel to Jordan for three weeks.',
    find: ['age', 'clock time', 'price / quantity', 'date'],
    source: 'teacher model on the website capstone task',
  },
  selfCheck: [
    { route: 'core', text: 'I can name the seven days and twelve months.' },
    { route: 'core', text: 'I did not confuse yūnyū and yūlyū.' },
    { route: 'develop', text: 'My date ordinals are masculine.' },
    { route: 'develop', text: 'After fī my ordinal takes kasra.' },
    { route: 'stretch', text: 'I combined numbers from all six lessons.' },
  ],
  exit: [
    q('Which day is “day five”?', ['الْخَمِيسُ', 'الْجُمُعَةُ', 'الْأَرْبِعَاءُ'], 'khamsa = five.'),
    q('Choose “the 1st of May”.', ['الْأَوَّلُ مِنْ مَايُو', 'الْأُولَى مِنْ مَايُو', 'وَاحِدٌ مِنْ مَايُو'], 'Masculine ordinal.'),
    q('Why are clock ordinals feminine but date ordinals masculine?', ['sāʿa is feminine; yawm is masculine', 'dates are always masculine in English', 'there is no reason'], 'The noun decides.'),
  ],
  mastery: false,
  prep: {
    words: [['الْجُمْلَةُ الْفِعْلِيَّةُ', 'verbal sentence', '—'], ['الْفِعْلُ', 'the verb', 'كَتَبَ'], ['الْفَاعِلُ', 'the doer / subject', 'الطَّالِبُ'], ['الْمَفْعُولُ بِهِ', 'the object', 'الدَّرْسَ'], ['كَتَبَ الطَّالِبُ الدَّرْسَ', 'The student wrote the lesson.', '—']],
    questionEn: 'In “kataba ṭ-ṭālibu d-darsa”, which word comes first — the verb or the subject?',
    questionAr: 'كَتَبَ · الطَّالِبُ · الدَّرْسَ',
    homework: {
      core: 'Website “Mild”: a calendar page with four birthdays in words.',
      develop: 'Website “Spicy”: «تَوَارِيخِي الْمُهِمَّةُ».',
      stretch: 'Website “Hot” capstone: «صَفْحَةٌ مِنْ حَيَاتِي بِالْأَرْقَامِ».',
    },
    wordsSource: 'The five words prepare GM-VS-01 (website Verbal Sentences: word order and sentence roles).',
  },
  remember: 'Remember: al-aḥad = day one … al-khamīs = day five · yūnyū (N) June · yūlyū (L) July · date = masculine ordinal + min + month · fī l-khāmisi min māris · clock ordinals feminine, date ordinals masculine.',
});

module.exports = { meta, slides };
