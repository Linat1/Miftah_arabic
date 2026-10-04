'use strict';
/* GM-NUM-02 · Telling the Time — website: Mastery & Revision › Numeracy Mastery 02 (kami s-sāʿatu?; the twelve hours with feminine
 * ordinals — 1:00 is al-wāḥida, not al-ūlā; past the hour: wa-n-niṣf, wa-r-rubuʿ, wa-th-thuluth (20 min), exact minutes with the 3–10
 * flip — wa-khamsu daqāʾiqa; to the hour with illā: name the NEXT hour and subtract — al-khāmisatu illā rubʿan = 4:45, accusative after
 * illā; ṣabāḥan, ẓuhran, baʿda ẓ-ẓuhr, masāʾan, laylan; fī s-sāʿati … ; prayer timetable; digital and 24-hour). The website quizzes are
 * interactive and not stored, so all questions are teacher-written on the website content. Website spelling ar-rubuʿ is kept. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'numeracy__numbers__numeracy-mastery-02-time';

const meta = G.meta({
  code: 'GM-NUM-02', fileTitle: 'Telling_the_Time', title: 'Telling the Time', arabic: 'الْوَقْتُ',
  focus: 'Arabic says “the hour the third” for 3:00 (as-sāʿatu th-thālithatu). Past the hour: wa + half / quarter / third. To the hour: name the NEXT hour, then illā — al-khāmisatu illā rubʿan is 4:45, not 5:45.',
  icon: 'FaClock',
});

const slides = G.gmLesson({
  code: 'GM-NUM-02', site: KEY,
  support: `• Core: كَمِ السَّاعَةُ؟ and the twelve hours with feminine ordinals; وَالنِّصْفُ · وَالرُّبُعُ · وَالثُّلُثُ. Develop: إِلَّا for times to the hour, exact minutes (وَخَمْسُ دَقَائِقَ) and صَبَاحًا · مَسَاءً. Stretch: digital and 24-hour times, a full timetable, and explaining listening traps.
• Website trap 1: 1:00 = السَّاعَةُ الْوَاحِدَةُ (never الْأُولَى). Trap 2: hear إِلَّا → the real time is BEFORE the hour you heard (al-khāmisatu illā rubʿan = 4:45).
• Faith link (website): illā as in lā ilāha illā llāh; the prayer timetable is real Arabic reading material.`,
  teach: 'Twelve hours; past the hour; illā; parts of the day.',
  wedo: 'Read the timetable; sort past / to; repair.',
  next: { nextCode: 'GM-NUM-03', nextTitle: 'Age', nextAr: 'الْعُمْرُ' },
  doNow: {
    questions: [
      q('Choose “the third” (feminine).', ['الثَّالِثَةُ', 'الثَّالِثُ', 'ثَلَاثٌ'], 'GM-NUM-01 ordinals.'),
      q('Choose “ten minutes”.', ['عَشْرُ دَقَائِقَ', 'عَشَرَةُ دَقَائِقَ', 'عَشْرُ دَقِيقَةٍ'], 'Daqīqa is feminine → no ة.'),
      q('What does النِّصْفُ mean?', ['half', 'quarter', 'minute'], 'Prep word.'),
      q('What does إِلَّا mean?', ['except / minus', 'and', 'after'], 'Prep word (GM-CP-05).'),
      q('What is ٧:٣٠?', ['7:30', '3:07', '7:03'], 'Left to right.'),
    ],
    keyIdea: { text: 'as-sāʿa + feminine ordinal. Past: wa + half / quarter / third. To: next hour + illā + rubʿan / thuluthan.', ar: '{k|السَّاعَةُ الرَّابِعَةُ وَالنِّصْفُ} ‖ {e|الْخَامِسَةُ إِلَّا رُبُعًا}' },
    retrieves: 'Teacher-written retrieval from GM-NUM-01 (feminine ordinals, the 3–10 flip) and the prep words.',
  },
  objectives: ['Ask and tell the time on the hour.', 'Say half, quarter and twenty past.', 'Use illā for times to the hour.', 'Add morning, afternoon and evening in full sentences.'],
  routes: {
    core: ['I say every o’clock time with a feminine ordinal.', 'I say 4:30, 9:15 and 6:20.'],
    develop: ['I decode al-khāmisatu illā rubʿan as 4:45.', 'I say exact minutes and ṣabāḥan / masāʾan.'],
    stretch: ['I read a 24-hour timetable aloud.', 'I describe my whole day with six times.'],
  },
  terms: {
    items: [
      { ar: 'كَمِ السَّاعَةُ؟', en: 'What time is it?', note: 'السَّاعَةُ الثَّالِثَةُ' },
      { ar: 'النِّصْفُ', en: 'half (30 min)', note: 'وَالنِّصْفُ' },
      { ar: 'الرُّبُعُ', en: 'quarter (15 min)', note: 'وَالرُّبُعُ · إِلَّا رُبُعًا' },
      { ar: 'الثُّلُثُ', en: 'third (20 min)', note: 'وَالثُّلُثُ' },
      { ar: 'إِلَّا', en: 'to (minus)', note: 'إِلَّا عَشْرَ دَقَائِقَ' },
      { ar: 'صَبَاحًا · مَسَاءً', en: 'a.m. · p.m.', note: 'السَّابِعَةُ صَبَاحًا' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Time · part 1 · the twelve hours (website table)', title: '“The hour the third”', ar: 'كَمِ السَّاعَةُ؟', ltr: true,
      cols: [{ label: 'Time', w: 1.4 }, { label: 'Arabic', w: 4.4, size: 22 }, { label: 'Time', w: 1.4 }, { label: 'Arabic', w: 5.13, size: 22 }],
      rows: [
        { core: true, cells: ['1:00', 'السَّاعَةُ الْوَاحِدَةُ', '7:00', 'السَّاعَةُ السَّابِعَةُ'] },
        { core: true, cells: ['2:00', 'السَّاعَةُ الثَّانِيَةُ', '8:00', 'السَّاعَةُ الثَّامِنَةُ'] },
        { core: true, cells: ['3:00', 'السَّاعَةُ الثَّالِثَةُ', '9:00', 'السَّاعَةُ التَّاسِعَةُ'] },
        { core: true, cells: ['4:00', 'السَّاعَةُ الرَّابِعَةُ', '10:00', 'السَّاعَةُ الْعَاشِرَةُ'] },
        { core: true, cells: ['5:00', 'السَّاعَةُ الْخَامِسَةُ', '11:00', 'السَّاعَةُ الْحَادِيَةَ عَشْرَةَ'] },
        { core: true, cells: ['6:00', 'السَّاعَةُ السَّادِسَةُ', '12:00', 'السَّاعَةُ الثَّانِيَةَ عَشْرَةَ'] },
      ],
      foot: 'Website: sāʿa is feminine, so every clock ordinal is feminine. The 1 o’clock trap: al-wāḥida — never al-ūlā. Ask: kami s-sāʿatu? · fī ayyi sāʿatin? (at what time?) · matā? (when?)',
      notes: 'PART 1 (3 min) — website “The twelve hours”. 11 and 12 are compound: al-ḥādiyata ʿashrata, ath-thāniyata ʿashrata.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Time · part 2 · past the hour and the illā trick (website tables)', title: 'Past with wa — to with illā', ar: 'وَ · إِلَّا', ltr: true,
      cols: [{ label: 'Time', w: 1.4 }, { label: 'Arabic', w: 6.6, size: 22 }, { label: 'Literally', w: 4.33 }],
      rows: [
        { core: true, cells: ['4:30', 'السَّاعَةُ الرَّابِعَةُ وَالنِّصْفُ', 'four and the half'] },
        { core: true, cells: ['9:15', 'السَّاعَةُ التَّاسِعَةُ وَالرُّبُعُ', 'nine and the quarter'] },
        { core: true, cells: ['6:20', 'السَّاعَةُ السَّادِسَةُ وَالثُّلُثُ', 'six and the third (20 min)'] },
        { cells: ['3:05', 'السَّاعَةُ الثَّالِثَةُ وَخَمْسُ دَقَائِقَ', 'three and five minutes'] },
        { cells: ['4:45', 'السَّاعَةُ الْخَامِسَةُ إِلَّا رُبُعًا', 'five, except a quarter'] },
        { cells: ['7:40', 'السَّاعَةُ الثَّامِنَةُ إِلَّا ثُلُثًا', 'eight, except a third'] },
        { cells: ['9:50', 'السَّاعَةُ الْعَاشِرَةُ إِلَّا عَشْرَ دَقَائِقَ', 'ten, except ten minutes'] },
      ],
      foot: 'Website examiner’s trap: hear illā → subtract from the hour you heard. After illā the fraction takes -an: illā rubʿan, illā thuluthan. Minutes use the GM-NUM-01 flip: khamsu daqāʾiqa.',
      notes: 'PART 2 (4 min) — website “Past the hour” and “The illā trick”. Arabic’s “secret weapon” (website): ath-thuluth = 20 minutes.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Time · part 3 · parts of the day and 24-hour time (website tables) · Develop / Stretch', title: 'a.m., p.m. — and full sentences', ar: 'صَبَاحًا وَمَسَاءً', ltr: true,
      cols: [{ label: 'Digital', w: 1.8 }, { label: 'Natural Arabic', w: 7.0, size: 22 }, { label: 'Part of day', w: 3.53 }],
      rows: [
        { core: true, cells: ['07:00', 'السَّاعَةُ السَّابِعَةُ صَبَاحًا', 'ṣabāḥan — morning'] },
        { cells: ['12:00', 'السَّاعَةُ الثَّانِيَةَ عَشْرَةَ ظُهْرًا', 'ẓuhran — noon'] },
        { cells: ['13:20', 'السَّاعَةُ الْوَاحِدَةُ وَالثُّلُثُ بَعْدَ الظُّهْرِ', 'baʿda ẓ-ẓuhr — afternoon'] },
        { core: true, cells: ['18:30', 'السَّاعَةُ السَّادِسَةُ وَالنِّصْفُ مَسَاءً', 'masāʾan — evening'] },
        { cells: ['22:30', 'السَّاعَةُ الْعَاشِرَةُ وَالنِّصْفُ لَيْلًا', 'laylan — night'] },
      ],
      foot: 'Website: “at” a time = fī s-sāʿati … — astayqiẓu fī s-sāʿati s-sābiʿati ṣabāḥan. After fī the whole phrase takes kasra: fī s-sāʿati th-thālithati.',
      notes: 'PART 3 (3 min) — website “Morning, evening & full sentences” and “Digital and 24-hour time”. Speech uses the 12-hour clock.',
    },
  ],
  quick: [
    q('What is 1:00?', ['السَّاعَةُ الْوَاحِدَةُ', 'السَّاعَةُ الْأُولَى', 'السَّاعَةُ الْوَاحِدُ'], 'Website trap: al-wāḥida.'),
    q('What is السَّاعَةُ الرَّابِعَةُ وَالنِّصْفُ?', ['4:30', '4:15', '5:30'], 'wa-n-niṣf = half past.'),
    q('What is السَّاعَةُ الْخَامِسَةُ إِلَّا رُبُعًا?', ['4:45', '5:45', '5:15'], 'Hear illā → subtract: 5 minus a quarter.'),
    q('What is السَّاعَةُ السَّادِسَةُ وَالثُّلُثُ?', ['6:20', '6:30', '6:03'], 'ath-thuluth = 20 minutes.'),
  ],
  quickNote: 'teacher-written hinge questions on the website rules and traps.',
  ido: {
    title: 'Watch me describe my school day',
    steps: [
      { head: 'Wake up', ar: 'السَّادِسَةِ وَالنِّصْفِ', think: '6:30 — fī + kasra.' },
      { head: 'First lesson', ar: 'الثَّامِنَةِ إِلَّا رُبُعًا', think: '7:45 — next hour minus.' },
      { head: 'Lunch', ar: 'الْوَاحِدَةِ وَخَمْسِ دَقَائِقَ', think: '1:05 — flip for minutes.' },
      { head: 'Home', ar: 'الرَّابِعَةِ وَعَشْرِ دَقَائِقَ', think: '4:10.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'PAST THE HOUR', e: 'TO THE HOUR (illā)' },
    model: 'أَسْتَيْقِظُ فِي {k|السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ} صَبَاحًا. يَبْدَأُ الدَّرْسُ الْأَوَّلُ فِي {e|السَّاعَةِ الثَّامِنَةِ إِلَّا رُبُعًا}. أَتَنَاوَلُ الْغَدَاءَ فِي {k|السَّاعَةِ الْوَاحِدَةِ وَخَمْسِ دَقَائِقَ}، وَأَعُودُ إِلَى الْبَيْتِ فِي {k|السَّاعَةِ الرَّابِعَةِ وَعَشْرِ دَقَائِقَ}.',
    modelEn: 'I wake up at half past six in the morning. The first lesson starts at quarter to eight. I have lunch at five past one, and I go home at ten past four.',
    notes: 'Website reading “Daily timetable” (answers: 6:30 · 7:45 · 1:05 · 4:10).',
  },
  models: [
    { ar: 'يُغَادِرُ الْقِطَارُ فِي السَّاعَةِ الثَّالِثَةِ وَالنِّصْفِ مَسَاءً.', en: 'The train leaves at 3:30 p.m.', tip: 'Announcement.' },
    { ar: 'يَبْدَأُ الْفِيلْمُ فِي السَّاعَةِ الثَّامِنَةِ إِلَّا رُبُعًا.', en: 'The film starts at 7:45.', tip: 'illā trap.' },
    { ar: 'يَفْتَحُ الْمَتْحَفُ فِي السَّاعَةِ الْعَاشِرَةِ إِلَّا عَشْرَ دَقَائِقَ.', en: 'The museum opens at 9:50.', tip: 'illā + minutes.' },
    { ar: 'أَنَامُ فِي السَّاعَةِ الْعَاشِرَةِ وَالنِّصْفِ لَيْلًا.', en: 'I sleep at 10:30 at night.', tip: 'laylan.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · the school timetable (website Task A) · say it aloud', title: 'Read the timetable', ar: 'جَدْوَلُ الْحِصَصِ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Lesson', w: 3.6, size: 22 }, { label: 'Time', w: 2.0 }, { label: 'Say it', w: 6.73, size: 22 }],
      rows: [
        { core: true, cells: ['اللُّغَةُ الْعَرَبِيَّةُ', '9:00', 'فِي السَّاعَةِ التَّاسِعَةِ تَمَامًا'] },
        { core: true, cells: ['الرِّيَاضِيَّاتُ', '10:15', 'فِي السَّاعَةِ الْعَاشِرَةِ وَالرُّبُعِ'] },
        { core: true, cells: ['التَّرْبِيَةُ الْإِسْلَامِيَّةُ', '11:30', 'فِي السَّاعَةِ الْحَادِيَةَ عَشْرَةَ وَالنِّصْفِ'] },
        { cells: ['الِاسْتِرَاحَةُ', '12:30', 'فِي السَّاعَةِ الثَّانِيَةَ عَشْرَةَ وَالنِّصْفِ'] },
        { cells: ['الْعُلُومُ', '1:15', 'فِي السَّاعَةِ الْوَاحِدَةِ وَالرُّبُعِ'] },
        { cells: ['نِهَايَةُ الْعُلُومِ', '2:15', 'فِي السَّاعَةِ الثَّانِيَةِ وَالرُّبُعِ'] },
      ],
      foot: 'Website Task A: the break lasts 45 minutes — thalāthatu arbāʿi sāʿatin (three quarters of an hour) or khamsun wa-arbaʿūna daqīqatan.',
      notes: 'WE DO (3 min) — website Task A. Cover column 3; students read the times aloud.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · past or to the hour?', title: 'Past the hour, or to the hour?', ar: 'وَ أَمْ إِلَّا؟',
      categories: ['Past the hour (wa)', 'To the hour (illā)'],
      items: [['الرَّابِعَةُ وَالنِّصْفُ', 0], ['التَّاسِعَةُ وَالرُّبُعُ', 0], ['السَّادِسَةُ وَالثُّلُثُ', 0], ['الثَّالِثَةُ وَخَمْسُ دَقَائِقَ', 0], ['الْخَامِسَةُ إِلَّا رُبُعًا', 1], ['الثَّامِنَةُ إِلَّا ثُلُثًا', 1], ['الْعَاشِرَةُ إِلَّا عَشْرَ دَقَائِقَ', 1], ['الثَّالِثَةُ إِلَّا خَمْسَ دَقَائِقَ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Then write each card in digits (4:30, 9:15, 6:20, 3:05 · 4:45, 7:40, 9:50, 2:55).',
    },
  ],
  mistakes: [
    { wrong: 'السَّاعَةُ الْأُولَى', right: 'السَّاعَةُ الْوَاحِدَةُ', why: '1:00 uses al-wāḥida (website trap).' },
    { wrong: 'السَّاعَةُ الثَّالِثُ', right: 'السَّاعَةُ الثَّالِثَةُ', why: 'Sāʿa is feminine → feminine ordinal.' },
    { wrong: 'الْخَامِسَةُ إِلَّا الرُّبُعُ', right: 'الْخَامِسَةُ إِلَّا رُبُعًا', why: 'After illā: rubʿan (website).' },
  ],
  hints: ['First or one?', 'Masculine or feminine?', 'Ending after illā?'],
  practice: [
    q('Choose 8:10.', ['السَّاعَةُ الثَّامِنَةُ وَعَشْرُ دَقَائِقَ', 'السَّاعَةُ الْعَاشِرَةُ وَثَمَانِي دَقَائِقَ', 'السَّاعَةُ الثَّامِنَةُ إِلَّا عَشْرَ دَقَائِقَ'], 'Hour + wa + minutes.'),
    q('Choose 7:40.', ['السَّاعَةُ الثَّامِنَةُ إِلَّا ثُلُثًا', 'السَّاعَةُ السَّابِعَةُ إِلَّا ثُلُثًا', 'السَّاعَةُ السَّابِعَةُ وَالثُّلُثُ'], 'Next hour minus 20.'),
    q('Choose “8 p.m.”.', ['الثَّامِنَةُ مَسَاءً', 'الثَّامِنَةُ صَبَاحًا', 'الثَّامِنَةُ ظُهْرًا'], 'masāʾan = evening.'),
    q('Choose “at seven o’clock”.', ['فِي السَّاعَةِ السَّابِعَةِ', 'فِي السَّاعَةُ السَّابِعَةُ', 'السَّاعَةَ السَّابِعَةِ'], 'After fī: kasra on both words.'),
  ],
  practiceLabel: 'teacher-written questions on the website formulas',
  read: {
    title: 'Prayer timetable — London', label: 'website heritage link (sample times)',
    text: 'مَوَاقِيتُ الصَّلَاةِ الْيَوْمَ فِي لَنْدَنَ: الْفَجْرُ: ٤:٤٥ صَبَاحًا. الظُّهْرُ: ١:١٥. الْعَصْرُ: ٥:٣٠. الْمَغْرِبُ: ٩:٢٠ مَسَاءً. الْعِشَاءُ: ١٠:٤٥. أَسْتَيْقِظُ لِصَلَاةِ الْفَجْرِ فِي السَّاعَةِ الْخَامِسَةِ إِلَّا رُبُعًا، ثُمَّ أَنَامُ قَلِيلًا. نُصَلِّي الْمَغْرِبَ فِي الْمَسْجِدِ فِي السَّاعَةِ التَّاسِعَةِ وَالثُّلُثِ.',
    glossary: [['مَوَاقِيتُ الصَّلَاةِ', 'prayer times'], ['أَسْتَيْقِظُ', 'I wake up'], ['قَلِيلًا', 'a little'], ['نُصَلِّي', 'we pray']],
    task: 'Website challenge: say each prayer time aloud in full words.',
    questions: [
      q('What time is Fajr in words?', ['الْخَامِسَةُ إِلَّا رُبُعًا', 'الرَّابِعَةُ إِلَّا رُبُعًا', 'الْخَامِسَةُ وَالرُّبُعُ'], '4:45 — next hour minus a quarter.'),
      q('What time is ʿAṣr?', ['5:30', '3:05', '5:03'], '٥:٣٠ = al-khāmisatu wa-n-niṣf.'),
      q('Which word means 20 minutes in “9:20”?', ['الثُّلُثِ', 'الرُّبُعِ', 'النِّصْفِ'], 'at-tāsiʿatu wa-th-thuluth.'),
      q('Which prayer is at 10:45?', ['ʿIshāʾ', 'Maghrib', 'Ẓuhr'], 'Al-ʿishāʾ: al-ḥādiyata ʿashrata illā rubʿan.'),
    ],
    qNote: 'Website prayer-timetable sample extended into a short text; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: my daily rhythm', source: 'website speaking task',
    prompts: [
      { route: 'core', ar: 'كَمِ السَّاعَةُ الْآنَ؟ وَمَتَى تَسْتَيْقِظُ؟' },
      { route: 'develop', ar: 'مَتَى تَبْدَأُ الْمَدْرَسَةُ وَمَتَى تَنْتَهِي؟' },
      { route: 'stretch', ar: 'صِفْ يَوْمَكَ بِسِتَّةِ أَوْقَاتٍ عَلَى الْأَقَلِّ.' },
    ],
    stems: [
      { route: 'core', ar: 'السَّاعَةُ الْآنَ ______ ، وَأَسْتَيْقِظُ فِي السَّاعَةِ ______ .' },
      { route: 'develop', ar: 'تَبْدَأُ الْمَدْرَسَةُ فِي السَّاعَةِ ______ وَتَنْتَهِي فِي ______ .' },
      { route: 'stretch', ar: 'أَتَنَاوَلُ الْعَشَاءَ فِي ______ مَسَاءً، وَأَنَامُ فِي ______ لَيْلًا.' },
    ],
    model: [
      { who: 'A', ar: 'مَتَى تَنَامِينَ؟', en: 'When do you go to sleep? (to a girl)' },
      { who: 'B', ar: 'أَنَامُ فِي السَّاعَةِ الْعَاشِرَةِ إِلَّا رُبُعًا، وَأَسْتَيْقِظُ فِي السَّادِسَةِ وَالنِّصْفِ صَبَاحًا لِصَلَاةِ الْفَجْرِ.', en: 'I sleep at quarter to ten, and I wake up at half past six in the morning for Fajr prayer.' },
    ],
    notes: 'Website challenge: one “past”, one “to”, one exact-minute expression and one time with ṣabāḥan or masāʾan. Listening (website): three station announcements — write the times.',
  },
  write: {
    siteTask: 'Write 7–9 Arabic sentences describing a school day or weekend schedule.',
    core: { amount: '5 sentences', task: 'Website scaffold: wake up, Fajr, school, dinner, sleep.', how: 'fī s-sāʿati + ordinal.' },
    develop: { amount: '7 sentences', task: 'Use half, quarter, third and illā.', how: 'Plus ṣabāḥan / masāʾan twice.' },
    stretch: { amount: '7–9 sentences', task: 'A weekend timetable with a 24-hour time read naturally.', how: 'Exact minutes with the flip.' },
  },
  frames: {
    core: [
      { en: 'I wake up at …', ar: 'أَسْتَيْقِظُ فِي السَّاعَةِ ______ .' },
      { en: 'I pray Fajr at …', ar: 'أُصَلِّي الْفَجْرَ فِي السَّاعَةِ ______ .' },
      { en: 'School starts at …', ar: 'تَبْدَأُ الْمَدْرَسَةُ فِي السَّاعَةِ ______ .' },
      { en: 'I sleep at …', ar: 'أَنَامُ فِي السَّاعَةِ ______ .' },
    ],
    develop: [
      { en: '… at quarter to …', ar: '______ فِي السَّاعَةِ ______ إِلَّا رُبُعًا.' },
      { en: '… at twenty past …', ar: '______ فِي السَّاعَةِ ______ وَالثُّلُثِ.' },
      { en: '… in the evening', ar: '______ مَسَاءً.' },
      { en: 'The lesson lasts …', ar: 'يَسْتَمِرُّ الدَّرْسُ ______ .' },
    ],
    bank: ['السَّاعَةُ الْوَاحِدَةُ', 'الثَّانِيَةُ', 'الثَّالِثَةُ', 'وَالنِّصْفُ', 'وَالرُّبُعُ', 'وَالثُّلُثُ', 'إِلَّا رُبُعًا', 'إِلَّا ثُلُثًا', 'دَقَائِقَ', 'صَبَاحًا', 'ظُهْرًا', 'مَسَاءً', 'لَيْلًا'],
  },
  stretchTask: {
    task: 'Website “Hot” task: write this week’s five prayer times in full words with ṣabāḥan / masāʾan, plus two comparison sentences.',
    checklist: ['Five prayer times in full words.', 'Feminine ordinals throughout.', 'At least one illā time with -an.', 'Exact minutes with the 3–10 flip.', 'Two comparisons (qabla / baʿda).'],
    phrases: [['مَوَاقِيتُ الصَّلَاةِ', 'prayer times'], ['تَمَامًا', 'exactly'], ['قَبْلَ', 'before'], ['بَعْدَ', 'after'], ['يَسْتَمِرُّ', 'lasts'], ['ثَلَاثَةُ أَرْبَاعِ سَاعَةٍ', 'three quarters of an hour']],
  },
  model: {
    text: 'يَوْمُ السَّبْتِ عِنْدِي هَادِئٌ. أَسْتَيْقِظُ فِي السَّاعَةِ الْخَامِسَةِ إِلَّا رُبُعًا لِصَلَاةِ الْفَجْرِ، ثُمَّ أَنَامُ حَتَّى السَّابِعَةِ وَالنِّصْفِ صَبَاحًا. فِي السَّاعَةِ التَّاسِعَةِ تَمَامًا أَذْهَبُ إِلَى دَرْسِ الْقُرْآنِ، وَيَسْتَمِرُّ الدَّرْسُ سَاعَةً وَنِصْفًا. أَتَنَاوَلُ الْغَدَاءَ مَعَ أُسْرَتِي فِي الْوَاحِدَةِ وَالثُّلُثِ بَعْدَ الظُّهْرِ. فِي الْخَامِسَةِ وَعَشْرِ دَقَائِقَ أَلْعَبُ كُرَةَ الْقَدَمِ. نُصَلِّي الْمَغْرِبَ فِي السَّاعَةِ الثَّامِنَةِ إِلَّا خَمْسَ دَقَائِقَ مَسَاءً، وَأَنَامُ فِي الْعَاشِرَةِ لَيْلًا.',
    en: 'My Saturday is calm. I wake up at quarter to five for Fajr prayer, then I sleep until half past seven in the morning. At nine o’clock exactly I go to my Qur’an lesson, which lasts an hour and a half. I have lunch with my family at twenty past one in the afternoon. At ten past five I play football. We pray Maghrib at five to eight in the evening, and I sleep at ten at night.',
    find: ['past (wa)', 'to (illā)', 'exact minutes', 'part of day'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'My clock ordinals are feminine (al-wāḥida for 1:00).' },
    { route: 'core', text: 'I used half, quarter and third past.' },
    { route: 'develop', text: 'I named the NEXT hour before illā.' },
    { route: 'develop', text: 'My minutes use the flip (khamsu daqāʾiq).' },
    { route: 'stretch', text: 'I read 24-hour times naturally with masāʾan.' },
  ],
  exit: [
    q('What is السَّاعَةُ الْعَاشِرَةُ إِلَّا عَشْرَ دَقَائِقَ?', ['9:50', '10:10', '10:50'], 'Ten minus ten minutes.'),
    q('Choose 12:00 noon.', ['الثَّانِيَةَ عَشْرَةَ ظُهْرًا', 'الثَّانِيَةُ ظُهْرًا', 'الْعَاشِرَةُ ظُهْرًا'], 'Compound feminine ordinal.'),
    q('Choose 9:15.', ['التَّاسِعَةُ وَالرُّبُعُ', 'التَّاسِعَةُ إِلَّا رُبُعًا', 'الْعَاشِرَةُ وَالرُّبُعُ'], 'wa-r-rubuʿ = quarter past.'),
  ],
  mastery: false,
  prep: {
    words: [['الْعُمْرُ', 'age', 'كَمْ عُمْرُكَ؟'], ['سَنَةٌ · سَنَوَاتٌ', 'year · years', 'خَمْسُ سَنَوَاتٍ'], ['عَامٌ · أَعْوَامٌ', 'year (also)', 'عَشَرَةُ أَعْوَامٍ'], ['أَكْبَرُ مِنْ', 'older than', '—'], ['أَصْغَرُ مِنْ', 'younger than', '—']],
    questionEn: 'Sana (year) is feminine. Is it khamsatu sanawātin or khamsu sanawātin?',
    questionAr: '______ سَنَوَاتٍ',
    homework: {
      core: 'Website “Mild”: eight clock faces labelled in Arabic words.',
      develop: 'Website “Spicy”: six sentences about your school day.',
      stretch: 'Website “Hot”: this week’s prayer timetable in words.',
    },
    wordsSource: 'The five words prepare GM-NUM-03 (website Numeracy Mastery 03: age).',
  },
  remember: 'Remember: kami s-sāʿatu? · as-sāʿa + feminine ordinal (1:00 = al-wāḥida) · wa + niṣf / rubuʿ / thuluth = past · next hour + illā rubʿan = to · fī s-sāʿati … ṣabāḥan / masāʾan.',
});

module.exports = { meta, slides };
