'use strict';
/* D1-L09 · Reading Daily Routines and Weekly Schedules — website: Pathways › Development › D1 › D1-L09 (reading skills: person prefixes, pronoun reference, time / duration / frequency evidence, sequence and contrast markers). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D1')({
  n: 9, fileTitle: 'Reading_Routines_and_Schedules', chip: 'Reading Schedules',
  title: 'Reading Daily Routines and Weekly Schedules', arabic: 'قِرَاءَةُ الرُّوتِينِ اليَوْمِيِّ وَالجَدَاوِلِ الأُسْبُوعِيَّةِ',
  focus: 'Read a weekly schedule and a routine email like a detective: find the right row and day, track WHO with prefixes and suffixes, and match each number to the exact event before answering.',
  icon: 'FaTableList', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const site = D.site('D1-L09');
const email = site.reading.text.split('[الرِّسَالَةُ]')[1].trim();

const slides = D.devLesson('D1-L09', {
  support: `• This is a READING-SKILLS lesson: the website reading (a schedule + an email) is the main You Do task, not an extension. Grammar is taught as “reading signals”.
• Core: the schedule only (6 details: day, activity, start, finish) + reading questions 1, 2 and 4. Develop: the email as well + questions 3, 5, 7. Stretch: all 8, including pronoun reference (Q6) and the contrast (Q8).
• SEND: the schedule is rebuilt as a clean table on its own slide; students may cover the email while they work on it.
• Urdu bridge: جدول، مدت، نتیجہ (→ يَسْتَنْتِجُ)، دلیل، ملاحظہ.`,
  teach: 'Reading signals: who, when, how long, how often.',
  wedo: 'Evidence detective, sort the evidence, fix and listen.',
  next: { nextCode: 'D1-L10', nextTitle: 'Listening — Daily Routine and Time Details', nextAr: 'الاِسْتِمَاعُ' },
  doNow: {
    questions: [
      q('What does حَسَبَ الجَدْوَلِ mean?', ['according to the schedule', 'after the lesson', 'a weekly programme'], 'Prepared at home.'),
      q('What does مَوْعِدُ الاِنْتِهَاءِ mean?', ['finish time', 'start time', 'duration'], 'Prepared at home.'),
      q('Complete: أَمَّا يَوْمُ الأَحَدِ ___ أُخَطِّطُ لِلْأُسْبُوعِ.', ['فَـ', 'إِذَا', 'بَيْنَمَا'], 'D1-L08: as for … fa-.'),
      q('Which is 6:45?', ['السَّابِعَةُ إِلَّا الرُّبْعَ', 'السَّادِسَةُ إِلَّا الرُّبْعَ', 'السَّادِسَةُ وَالرُّبْعُ'], 'D1-L02: the NEXT hour with إِلَّا.', { ar: '٦:٤٥', arBig: true }),
      q('In تُحَضِّرُ حَقِيبَتَهَا, who prepares the bag?', ['a girl / woman', 'a boy / man', 'me'], 'D1-L06: tu- + -hā.'),
    ],
    keyIdea: { text: 'Don’t pick a number just because you see it. First find WHO and WHICH event, then the exact time.', ar: '{w|تَـ}عُودُ مَرْيَمُ {k|فِي الرَّابِعَةِ}، بَيْنَمَا {w|يَـ}عُودُ أَخُوهَا {k|فِي الخَامِسَةِ}.' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home. Questions 3–5 retrieve D1-L08 (أَمَّا … فَـ), D1-L02 (time with إِلَّا) and D1-L06 (she + her).',
  },
  routes: {
    core: ['I can find a day, a start time and a finish time in a schedule.', 'I can answer reading questions 1, 2 and 4.'],
    develop: ['I can say who does an action from the prefix (تَـ / يَـ).', 'I can work out a duration from two times.'],
    stretch: ['I can explain what a pronoun refers to.', 'I can compare two routines with exact evidence.'],
  },
  bridge: [
    { ar: 'جَدْوَلٌ', urdu: 'جدول', tr: 'jadwal', en: 'table, schedule' },
    { ar: 'المُدَّةُ', urdu: 'مدت', tr: 'muddat', en: 'duration' },
    { ar: 'الدَّلِيلُ', urdu: 'دلیل', tr: 'dalīl', en: 'evidence, proof' },
    { ar: 'مُلَاحَظَةٌ', urdu: 'ملاحظہ', tr: 'mulāḥaza', en: 'observation, note' },
    { ar: 'يَسْتَنْتِجُ', urdu: 'نتیجہ', tr: 'natīja', en: 'result → to conclude' },
  ],
  bridgeNotes: 'URDU BRIDGE: جدول (table) → جَدْوَلٌ أُسْبُوعِيٌّ. مدت → المُدَّةُ. دلیل (proof, argument) → الدَّلِيلُ (evidence). ملاحظہ (inspection, observation) → مُلَاحَظَةٌ (a note). نتیجہ (result) comes from the same root as يَسْتَنْتِجُ (infers, concludes) — students can guess the verb from the noun.',
  core: ['جَدْوَلٌ أُسْبُوعِيٌّ', 'مَوْعِدُ البَدْءِ', 'مَوْعِدُ الاِنْتِهَاءِ', 'المُدَّةُ', 'النَّشَاطُ', 'رِسَالَةٌ إِلِكْتِرُونِيَّةٌ', 'الدَّلِيلُ', 'حَسَبَ الجَدْوَلِ', 'مِنَ النَّصِّ'],
  forms: {
    'جَدْوَلٌ أُسْبُوعِيٌّ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'جَدَاوِلُ' }, { l: 'the', ar: 'الجَدْوَلُ' }, { l: 'one', ar: 'جَدْوَلٌ' }] },
    'رِسَالَةٌ إِلِكْتِرُونِيَّةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'رَسَائِلُ' }, { l: 'the', ar: 'الرِّسَالَةُ' }, { l: 'one', ar: 'رِسَالَةٌ' }] },
    'النَّشَاطُ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'الأَنْشِطَةُ' }, { l: 'the', ar: 'النَّشَاطُ' }, { l: 'one', ar: 'نَشَاطٌ' }] },
    'مُلَاحَظَةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'مُلَاحَظَاتٌ' }, { l: 'the', ar: 'المُلَاحَظَةُ' }, { l: 'one', ar: 'مُلَاحَظَةٌ' }] },
    'يُقَارِنُ': { tag: 'he · she · I', forms: [{ l: 'I', ar: 'أُقَارِنُ' }, { l: 'she', ar: 'تُقَارِنُ' }, { l: 'he', ar: 'يُقَارِنُ' }] },
    'يَسْتَنْتِجُ': { tag: 'he · she · I', forms: [{ l: 'I', ar: 'أَسْتَنْتِجُ' }, { l: 'she', ar: 'تَسْتَنْتِجُ' }, { l: 'he', ar: 'يَسْتَنْتِجُ' }] },
  },
  vocabNotes: { 0: 'These are the words on schedules and in reading questions. Show a real school timetable on screen and point: this box = خَانَةٌ, this column = النَّشَاطُ, this time = مَوْعِدُ البَدْءِ.', 1: 'Question language: students will meet these in reading questions (الفِكْرَةُ الرَّئِيسِيَّةُ، الدَّلِيلُ، يَعُودُ الضَّمِيرُ إِلَى). Recognition only.' },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · reading signals (website table)', title: 'What each signal tells the reader', ar: 'عَلَامَاتُ القِرَاءَةِ',
      cols: [{ label: 'Signal', w: 3.2, size: 26 }, { label: 'Example in a text', w: 4.3, size: 22 }, { label: 'It tells you …', w: 2.5 }, { label: 'Question it answers', w: 2.33 }],
      rows: [
        { core: true, cells: [{ ar: '{e|تَـ} / {w|يَـ}' }, P('{e|تَ}عُودُ مَرْيَمُ · {w|يَ}عُودُ أَخُوهَا', 'Maryam returns · her brother returns'), 'WHO does it', 'Who returns first?'] },
        { core: true, cells: [{ ar: 'فِي + الوَقْتِ' }, P('يَبْدَأُ النَّادِي {k|فِي} الخَامِسَةِ.', 'The club starts at five.'), 'ONE time', 'When does it start?'] },
        { cells: [{ ar: 'مِنْ … إِلَى …' }, P('السِّبَاحَةُ {k|مِنَ} الرَّابِعَةِ {k|إِلَى} الخَامِسَةِ.', 'Swimming from four to five.'), 'start + finish = how long', 'How long does it last?'] },
        { cells: [{ ar: 'مَرَّتَيْنِ · نَادِرًا' }, P('تَتَمَرَّنُ {k|مَرَّتَيْنِ} فِي الأُسْبُوعِ.', 'She trains twice a week.'), 'HOW OFTEN', 'How often?'] },
        { cells: [{ ar: '{e|ـهَا} / {w|ـهُ}' }, P('فَهُوَ أَهْدَأُ يَوْمٍ', 'it (Wednesday) is the calmest day'), 'what a word REFERS to', 'What does “it” refer to?'] },
      ],
      foot: 'Website warning: a number is only the answer if it belongs to the event in the question.',
      notes: `GRAMMAR PART 1 — website table “Reading signal · What it tells you · Example question” and rules “Track the subject through the present-tense prefix” and “Track pronoun suffixes to the nearest logical noun”.
Teacher script: “Grammar is your detective kit. The first letter of the verb tells you WHO. The little word before a time tells you WHAT KIND of time.”
Website common error: choosing a number because it appears — first identify the event, then match the exact time, duration or frequency.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · three kinds of number (website rules)', title: 'At what time? For how long? How often?', ar: 'فِي · مِنْ … إِلَى · مَرَّاتٍ',
      cards: [
        { chip: 'A POINT · CORE', color: '1D5FBF', head: 'فِي', big: 'يَبْدَأُ الدَّرْسُ فِي الثَّامِنَةِ وَالنِّصْفِ.', en: 'The lesson begins at 8:30.', clue: 'One time on the clock.' },
        { chip: 'A SPAN · DEVELOP', color: '1E7B4F', head: 'مِنْ … إِلَى', big: 'مِنَ السَّادِسَةِ إِلَى السَّابِعَةِ إِلَّا الرُّبْعَ', en: 'from 6:00 to 6:45', clue: 'Finish − start = 45 minutes.' },
        { chip: 'A PATTERN · CORE', color: '6B4C9A', head: 'مَرَّاتٍ', big: 'تَتَمَرَّنُ مَرَّتَيْنِ فِي الأُسْبُوعِ.', en: 'She trains twice a week.', clue: 'Answers “how often?”.' },
      ],
      error: { text: 'Website common error: one start time takes fī, not min.', pairs: [['يَبْدَأُ النَّادِي فِي الخَامِسَةِ.', 'يَبْدَأُ النَّادِي مِنَ الخَامِسَةِ.']] },
      notes: `GRAMMAR PART 2 — website rule “Use time and frequency expressions as evidence”: numbers are distractors unless they answer the exact question; link every time or number to its event.
Quick maths for durations: from five to six = one hour; from 5:30 to 6:15 = 45 minutes (website mission round 4).`,
    },
  ],
  quick: [0, 2, 3, 7],
  ido: {
    title: 'Watch me answer a reading question',
    steps: [
      { head: '1 · Question', ar: 'مَتَى يَنْتَهِي دَرْسُ العَرَبِيَّةِ؟', think: 'Event: Arabic lesson. Info: FINISH time.' },
      { head: '2 · Find the row', ar: 'الخَمِيسُ: دَرْسُ اللُّغَةِ العَرَبِيَّةِ', think: 'Thursday row, not Tuesday.' },
      { head: '3 · Exact detail', ar: 'مِنَ السَّادِسَةِ {k|إِلَى السَّابِعَةِ إِلَّا الرُّبْعَ}', think: 'After “to” = the finish.' },
      { head: '4 · Answer + evidence', ar: 'يَنْتَهِي فِي السَّابِعَةِ إِلَّا الرُّبْعَ ({w|٦:٤٥}).', think: 'Quote the cell.' },
    ],
    legend: ['k', 'w'], legendLabels: { k: 'THE EXACT DETAIL', w: 'THE ANSWER' },
    model: 'السُّؤَالُ: مَتَى يَنْتَهِي دَرْسُ العَرَبِيَّةِ؟ ← خَانَةُ يَوْمِ الخَمِيسِ: مِنَ السَّادِسَةِ {k|إِلَى السَّابِعَةِ إِلَّا الرُّبْعَ}. ← الجَوَابُ: يَنْتَهِي فِي {w|السَّابِعَةِ إِلَّا الرُّبْعَ}. الدَّلِيلُ مَوْجُودٌ فِي خَانَةِ يَوْمِ الخَمِيسِ.',
    modelEn: 'Question: When does the Arabic lesson end? → Thursday cell: from six to quarter to seven. → Answer: it ends at quarter to seven. The evidence is in the Thursday cell.',
    notes: 'I DO (3 min) — the teacher thinks aloud through website reading question 2 (the website speaking model uses the same example). Four steps students will copy for every question: question → row → exact detail → answer + evidence.',
  },
  modelsNotes: '• Core: copy sentence 1 and change the time. • Develop: copy sentence 2 and change the people. • Stretch: write your own “the pronoun refers to …” sentence about a text.',
  wedoSlides: [
    {
      type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · evidence detective (website mission)', title: 'Find the exact evidence', ar: 'اِبْحَثْ عَنِ الدَّلِيلِ',
      seed: 9,
      questions: [
        q('When does the writer wake up?', ['6:30', '8:00', '7:30'], 'The other number (8:00) is the lesson, not waking up.', { ar: 'أَسْتَيْقِظُ فِي السَّادِسَةِ وَالنِّصْفِ، وَلٰكِنَّ الدَّرْسَ يَبْدَأُ فِي الثَّامِنَةِ.' }),
        q('Whose routine is it?', ['Khalid’s', 'his sister’s', 'the writer’s'], '-hu → the nearest male noun: Khalid.', { ar: 'غَيَّرَ خَالِدٌ رُوتِينَهُ لِأَنَّهُ كَانَ مُتْعَبًا.' }),
        q('How long does the club last?', ['45 minutes', 'half an hour', 'an hour and a half'], 'From 5:30 to 6:15.', { ar: 'يَبْدَأُ النَّادِي فِي الخَامِسَةِ وَالنِّصْفِ وَيَنْتَهِي فِي السَّادِسَةِ وَالرُّبْعِ.' }),
        q('Which statement is supported?', ['Samer goes three times a week.', 'Samer goes every day.', 'Samer never goes.'], 'ثَلَاثَ مَرَّاتٍ = three times.', { ar: 'يَذْهَبُ سَامِرٌ إِلَى النَّادِي ثَلَاثَ مَرَّاتٍ، وَلَا يَذْهَبُ يَوْمَ الجُمُعَةِ.' }),
      ],
      side: { kind: 'core', label: 'CORE', text: 'Underline the event in the question.\nFind it in the sentence.\nOnly then choose the number.' },
      answerSlide: { min: 0, eyebrow: 'We do · evidence detective answers', title: 'Find the exact evidence: answers', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO — website mission rounds 2–5 (answer options given in English for Core access). Model the detective steps on Q1: the text has TWO times; only one belongs to waking up.',
      answerNotes: 'For each answer, a student reads out the Arabic words that prove it (the evidence).',
    },
  ],
  sorterCats: ['Who?', 'When / how long?', 'How often?'],
  hints: ['Khalid is a boy. Which prefix?', 'After “as for … ”, what joins the comment?', 'One start time: fī or min?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 5.\nListen for: السَّابِعَةِ وَالرُّبْعِ · الثُّلَاثَاءِ · مَرَّتَيْنِ.',
  listenRoutes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 6.',
  gloss: [
    ['المُتَحَدِّثُ الأَوَّلُ: يَبْدَأُ يَوْمِي فِي السَّادِسَةِ وَالنِّصْفِ، وَأَخْرُجُ مِنَ البَيْتِ فِي السَّابِعَةِ وَالرُّبْعِ.', 'Speaker 1: My day starts at half past six, and I leave home at quarter past seven.'],
    ['أَذْهَبُ إِلَى نَادِي الحَاسُوبِ يَوْمَ الثُّلَاثَاءِ، وَهُوَ يَسْتَمِرُّ مِنَ الخَامِسَةِ إِلَى السَّادِسَةِ.', 'I go to computer club on Tuesday, and it lasts from five to six.'],
    ['المُتَحَدِّثَةُ الثَّانِيَةُ: أَعُودُ إِلَى البَيْتِ فِي الرَّابِعَةِ، بَيْنَمَا تَعُودُ أُخْتِي فِي الثَّالِثَةِ وَالنِّصْفِ.', 'Speaker 2: I return home at four, whereas my sister returns at half past three.'],
    ['أَتَمَرَّنُ مَرَّتَيْنِ فِي الأُسْبُوعِ، أَمَّا يَوْمُ الخَمِيسِ فَأَدْرُسُ فِي المَكْتَبَةِ.', 'I train twice a week; as for Thursday, I study in the library.'],
  ],
  readingCore: {
    text: email,
    readMin: 3, qMin: 7,
    notes: 'YOU DO — READING (main task, 3 min to read). The email from the website reading. Students have the schedule on the previous slide.\nCore: questions 1, 2, 4 (schedule only). Develop: + 3, 5, 7. Stretch: all, including 6 (what does هُوَ refer to?) and 8 (the contrast).\nSEND: cover the text and uncover one sentence at a time.',
  },
  preReading: [
    {
      type: 'formsTable', stage: 'youdo', min: 2, eyebrow: 'You do · reading · part 1: the weekly schedule (website text)', title: 'Maryam’s weekly schedule', ar: 'الجَدْوَلُ الأُسْبُوعِيُّ',
      cols: [{ label: 'Day', w: 2.6, size: 26 }, { label: 'Activity', w: 4.2, size: 26 }, { label: 'Time', w: 5.53, size: 24 }],
      rows: [
        { core: true, cells: [{ ar: 'الاِثْنَيْنُ' }, { ar: 'السِّبَاحَةُ' }, { ar: 'مِنَ الرَّابِعَةِ إِلَى الخَامِسَةِ' }] },
        { core: true, cells: [{ ar: 'الثُّلَاثَاءُ' }, { ar: 'نَادِي الحَاسُوبِ' }, { ar: 'فِي الخَامِسَةِ وَالنِّصْفِ' }] },
        { core: true, cells: [{ ar: 'الأَرْبِعَاءُ' }, { ar: 'لَا نَشَاطَ بَعْدَ المَدْرَسَةِ' }, { ar: '—' }] },
        { core: true, cells: [{ ar: 'الخَمِيسُ' }, { ar: 'دَرْسُ اللُّغَةِ العَرَبِيَّةِ' }, { ar: 'مِنَ السَّادِسَةِ إِلَى السَّابِعَةِ إِلَّا الرُّبْعَ' }] },
      ],
      foot: 'Core task: copy the table and write the start time, finish time and duration for each day in numbers.',
      notes: `YOU DO — READING PART 1 (2 min). The website schedule rebuilt as a table (Monday swimming 4–5; Tuesday computer club 5:30; Wednesday no activity; Thursday Arabic 6:00–6:45).
Core: fill in start / finish / duration in numbers (Monday 1 hour; Thursday 45 minutes; Tuesday: start only — no finish given!).
Ask Develop: “Which day is calmest? What is your evidence?” (Wednesday: لَا نَشَاطَ بَعْدَ المَدْرَسَةِ).`,
    },
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'أَيْنَ وَجَدْتَ وَقْتَ البَدْءِ وَوَقْتَ الاِنْتِهَاءِ؟' },
      { route: 'develop', ar: 'إِلَى مَنْ يَعُودُ الضَّمِيرُ فِي الجُمْلَةِ؟' },
      { route: 'develop', ar: 'قَارِنْ بَيْنَ نَشَاطَيْنِ فِي الجَدْوَلِ.' },
      { route: 'stretch', ar: 'اِذْكُرْ دَلِيلًا دَقِيقًا يُثْبِتُ إِجَابَتَكَ.' },
    ],
    stems: [
      { route: 'core', ar: 'وَجَدْتُ الوَقْتَ فِي خَانَةِ يَوْمِ ______ .' },
      { route: 'develop', ar: 'يَعُودُ الضَّمِيرُ «ـهَا / ـهُ» إِلَى ______ .' },
      { route: 'develop', ar: '______ أَطْوَلُ مِنْ ______ .' },
      { route: 'stretch', ar: 'الدَّلِيلُ مَوْجُودٌ فِي ______ : « ______ ».' },
    ],
    modelEn: ['When does the Arabic lesson end?', 'It ends at quarter to seven.'],
    notes: 'Website prompts and model (the model continues: “What is the evidence?” — “The evidence is in the Thursday cell of the schedule.”). Pairs explain HOW they found one answer — this is the reading strategy spoken aloud.',
  },
  write: {
    core: { amount: '6 details', how: 'From the schedule: six exact details (day, activity, start, finish) written as full sentences.' },
    develop: { amount: '8 sentences', how: 'Compare two days or two people with exact times and two pronoun references explained.' },
    stretch: { amount: '100–120 words', how: 'Website task: compare two routines or schedules with exact times, frequency, sequence, reference and two pieces of evidence.' },
  },
  frames: {
    core: [
      { en: 'On Monday, Maryam …', ar: 'يَوْمَ الاِثْنَيْنِ تَـ ______ مَرْيَمُ.' },
      { en: 'Swimming starts at …', ar: 'تَبْدَأُ السِّبَاحَةُ فِي ______ .' },
      { en: 'It ends at …', ar: 'تَنْتَهِي فِي ______ .' },
      { en: 'It lasts …', ar: 'تَسْتَمِرُّ ______ .' },
      { en: 'On Wednesday there is no activity.', ar: 'يَوْمَ الأَرْبِعَاءِ لَا نَشَاطَ بَعْدَ المَدْرَسَةِ.' },
    ],
    develop: [
      { en: 'According to the schedule, …', ar: 'حَسَبَ الجَدْوَلِ ، ______ .' },
      { en: 'The pronoun “her” refers to …', ar: 'يَعُودُ الضَّمِيرُ «ـهَا» إِلَى ______ .' },
      { en: 'Maryam …, whereas her brother …', ar: 'تَـ ______ مَرْيَمُ ، بَيْنَمَا يَـ ______ أَخُوهَا.' },
      { en: 'The evidence is …', ar: 'الدَّلِيلُ هُوَ ______ .' },
      { en: 'Before she goes to the club, she …', ar: 'قَبْلَ أَنْ تَذْهَبَ إِلَى النَّادِي تَـ ______ .' },
    ],
    bank: ['حَسَبَ الجَدْوَلِ', 'مِنَ النَّصِّ', 'الدَّلِيلُ', 'يَبْدَأُ / تَبْدَأُ', 'يَنْتَهِي / تَنْتَهِي', 'يَسْتَمِرُّ', 'مِنْ … إِلَى', 'مَرَّتَيْنِ', 'بَيْنَمَا', 'أَمَّا … فَـ', 'يَعُودُ الضَّمِيرُ إِلَى', 'خَانَةٌ'],
  },
  stretch: [
    ['يُبَيِّنُ الجَدْوَلَانِ رُوتِينَيْنِ مُخْتَلِفَيْنِ', 'the two schedules show two different routines'],
    ['فِي المُقَابِلِ', 'by contrast'],
    ['الدَّلِيلُ عَلَى أَنَّ رُوتِينَهَا مُنَظَّمٌ هُوَ …', 'the evidence that her routine is organised is …'],
    ['كِلَا الرُّوتِينَيْنِ مُنَظَّمٌ', 'both routines are organised'],
    ['أَكْثَرُ تَنَوُّعًا', 'more varied'],
  ],
  modelEn: 'The two schedules show two different routines. Maryam returns home at four, whereas her brother returns at half past three. Maryam goes swimming twice a week; as for her brother, he plays football three times. On Thursday Maryam studies Arabic from six to quarter to seven. Before she goes to the lesson, she finishes her homework. The evidence that her routine is organised is that she prepares her bag at night. By contrast, her brother’s routine is more sporty. In my opinion, both routines are organised, but Maryam’s routine is more varied.',
  find: ['a “from … to …” time span', 'two feminine and two masculine verbs', 'a piece of evidence', 'two contrast connectors'],
  modelNotes: 'Evidence: مِنَ السَّادِسَةِ إِلَى السَّابِعَةِ إِلَّا الرُّبْعَ · تَعُودُ، تَذْهَبُ / يَعُودُ، يَلْعَبُ · الدَّلِيلُ عَلَى أَنَّ … هُوَ أَنَّهَا تُحَضِّرُ حَقِيبَتَهَا لَيْلًا · بَيْنَمَا، أَمَّا … فَـ، فِي المُقَابِلِ.',
  selfCheck: [
    { route: 'core', text: 'My times match the right day and activity.' },
    { route: 'core', text: 'I used “at” for one time and “from … to” for a span.' },
    { route: 'develop', text: 'Every verb matches its person (ta- / ya-).' },
    { route: 'develop', text: 'I explained what one pronoun refers to.' },
    { route: 'stretch', text: 'I gave two pieces of exact evidence.' },
  ],
  exit: [0, 2, 4],
  glossary: [
    ['مَرْحَبًا', 'hello'], ['وَجْبَةً خَفِيفَةً', 'a snack'], ['نَادِي الحَاسُوبِ', 'computer club'], ['أَهْدَأُ يَوْمٍ', 'the calmest day'], ['عِنْدِي', 'for me'],
    ['لِذٰلِكَ', 'so, therefore'], ['أُكْمِلُ وَاجِبِي', 'I finish my homework'], ['كُرَةَ القَدَمِ', 'football'], ['هَلْ نَلْتَقِي', 'shall we meet'], ['يَوْمَ الجُمُعَةِ', 'on Friday'],
  ],
  prep: {
    words: [['أَتَوَقَّعُ', 'I predict', 'he: يَتَوَقَّعُ'], ['كَلِمَةٌ مِفْتَاحِيَّةٌ', 'a key word', 'pl.: كَلِمَاتٌ مِفْتَاحِيَّةٌ'], ['أُرَكِّزُ عَلَى', 'I focus on', 'he: يُرَكِّزُ'], ['مُشَتِّتٌ', 'a distractor', 'pl.: مُشَتِّتَاتٌ'], ['التَّفْصِيلُ الدَّقِيقُ', 'the precise detail', '']],
    questionEn: 'When you listen to Arabic, what helps you most? Think of two strategies.',
    questionAr: 'مَتَى يَبْدَأُ يَوْمُكَ؟',
    homework: {
      core: 'Website D1-L09: the sorter “Which evidence answers the question?” and the final check.',
      develop: 'Website reading: answer all 8 questions, writing the Arabic evidence for each.',
      stretch: 'Website writing task: 100–120 words comparing two routines with evidence.',
    },
    wordsSource: 'The five words come from the website D1-L10 vocabulary (listening process and strategy verbs).',
  },
  remember: 'Remember: find WHO and WHICH event before you choose a number.',
});

module.exports = { meta, slides };
