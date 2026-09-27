'use strict';
/* D1-L02 · Telling the Time — What Time Is It? — website: Pathways › Development › D1 › D1-L02 (وَ / إِلَّا, 24-hour time, start / finish / duration). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D1')({
  n: 2, fileTitle: 'Telling_The_Time', chip: 'Telling the Time',
  title: 'Telling the Time — What Time Is It?', arabic: 'قِرَاءَةُ الوَقْتِ — كَمِ السَّاعَةُ؟',
  focus: 'Read, ask for and give exact clock times, start and finish times, 12-hour and 24-hour timetables, and how long something lasts.',
  icon: 'FaClock', iconSet: 'fa6',
});
const T = (dig, ar, en, core) => ({ core, cells: [{ ar: dig }, { ar }, en] });

const slides = D.devLesson('D1-L02', {
  plan: '0–1 Welcome · 1–2 Lesson map · 2–9 Do Now + answers · 9–10 Objectives · 10–16 Key words · 16–22 The hours + وَ / إِلَّا · 22–24 Quick check · 24–27 I Do · 27–37 We Do (Beat the Clock, sorter, fix, listening) · 37–49 You Do · 49–54 Feedback · 54–56 Preparation.',
  support: `• Time is a CALCULATION (website): the current hour + minutes past (وَ), or the NEXT hour − minutes to (إِلَّا). Core: o’clock, quarter past, half past, quarter to (the four “anchor” times). Develop: five-minute precision with وَ / إِلَّا. Stretch: 24-hour times and duration (يَسْتَمِرُّ مُدَّةَ …).
• The hour words are ordinals (السَّابِعَةُ = the seventh) — a “clock face” table of all twelve hours is provided; Core students keep it open.
• Maths link: many students find the إِلَّا “count back from the next hour” rule easiest with a drawn clock — use the Teams whiteboard.
• Urdu bridge: وقت، دقیقہ، ساعت، مدت، تقریباً.`,
  teach: 'The twelve hours, then minutes past (وَ) and to (إِلَّا).',
  wedo: 'Beat the Clock, sort past / to, fix and listen.',
  next: { nextCode: 'D1-L03', nextTitle: 'How Often? — Frequency Adverbs', nextAr: 'كَمْ مَرَّةً؟' },
  doNow: {
    questions: [
      q('What does السَّاعَةُ mean?', ['the hour / the clock', 'the minute', 'the day'], 'Prepared at home.'),
      q('What does وَالنِّصْفُ mean?', ['half past', 'quarter past', 'quarter to'], 'Prepared at home.'),
      q('Choose “I wake up” (D1-L01).', ['أَسْتَيْقِظُ', 'يَسْتَيْقِظُ', 'تَسْتَيْقِظُ'], 'D1-L01: أَـ = I.'),
      q('Complete for “she”: هِيَ ___ الإِفْطَارَ.', ['تَتَنَاوَلُ', 'يَتَنَاوَلُ', 'أَتَنَاوَلُ'], 'D1-L01: هِيَ → تَـ.'),
      q('Which connector means “after that”?', ['بَعْدَ ذٰلِكَ', 'أَوَّلًا', 'نَادِرًا'], 'D1-L01 sequence words.'),
    ],
    keyIdea: { text: 'Minutes PAST the hour → وَ. Minutes TO the next hour → إِلَّا (and name the NEXT hour!).', ar: '٧:١٥ السَّابِعَةُ {k|وَ}الرُّبْعُ · ٧:٤٥ الثَّامِنَةُ {k|إِلَّا} الرُّبْعَ' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home. Questions 3–5 retrieve D1-L01 (prefixes and sequence words).',
  },
  routes: {
    core: ['I can say o’clock, quarter past, half past and quarter to.', 'I can say what time I wake up.'],
    develop: ['I can tell the time to five minutes with وَ and إِلَّا.', 'I can say when something begins and ends.'],
    stretch: ['I can read 24-hour times in a timetable.', 'I can calculate and state duration.'],
  },
  bridge: [
    { ar: 'الوَقْتُ', urdu: 'وقت', tr: 'waqt', en: 'time' },
    { ar: 'دَقِيقَةٌ', urdu: 'دقیقہ', tr: 'daqīqa', en: 'minute' },
    { ar: 'السَّاعَةُ', urdu: 'ساعت', tr: 'sā‘at', en: 'hour, moment' },
    { ar: 'مُدَّةٌ', urdu: 'مدت', tr: 'muddat', en: 'period, duration' },
    { ar: 'حَوَالَيْ', urdu: 'تقریباً', tr: 'taqrīban', en: 'approximately (different word!)' },
  ],
  bridgeNotes: 'URDU BRIDGE: وقت (waqt → الوَقْتُ), دقیقہ (→ دَقِيقَةٌ), ساعت (sā‘at → السَّاعَةُ), مدت (muddat → مُدَّةٌ duration). Arabic also uses تَقْرِيبًا for “approximately”, but the website word today is حَوَالَيْ.',
  core: ['وَالرُّبْعُ', 'وَالنِّصْفُ', 'إِلَّا الرُّبْعَ', 'وَخَمْسُ دَقَائِقَ', 'إِلَّا خَمْسَ دَقَائِقَ', 'وَعَشْرُ دَقَائِقَ', 'يَبْدَأُ', 'يَنْتَهِي'],
  forms: {
    'يَبْدَأُ': { tag: 'he · she · I', forms: [{ l: 'he / it', ar: 'يَبْدَأُ' }, { l: 'she / it', ar: 'تَبْدَأُ' }, { l: 'I', ar: 'أَبْدَأُ' }] },
    'يَنْتَهِي': { tag: 'he · she · I', forms: [{ l: 'he / it', ar: 'يَنْتَهِي' }, { l: 'she / it', ar: 'تَنْتَهِي' }, { l: 'I', ar: 'أَنْتَهِي' }] },
    'يَسْتَمِرُّ': { tag: 'he · she', forms: [{ l: 'he / it', ar: 'يَسْتَمِرُّ' }, { l: 'she / it', ar: 'تَسْتَمِرُّ' }] },
    'مُدَّةٌ': { tag: 'sg · pl', forms: [{ l: 'one', ar: 'مُدَّةٌ' }, { l: 'pl.', ar: 'مُدَدٌ' }] },
    'المَوْعِدُ': { tag: 'sg · pl', forms: [{ l: 'one', ar: 'مَوْعِدٌ' }, { l: 'pl.', ar: 'مَوَاعِيدُ' }] },
  },
  vocabNotes: ['Minutes past (وَ) and to (إِلَّا). Gesture: clockwise hand for وَ (moving on from the hour); pointing forward to the NEXT hour for إِلَّا.', 'Schedule verbs: a feminine subject (الحِصَّةُ، الاِسْتِرَاحَةُ) takes تَـ: تَبْدَأُ الحِصَّةُ.', '24-hour forms are Stretch; Core recognises صَبَاحًا (a.m.) and مَسَاءً (p.m.).'],
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 1 · the hours are ordinal numbers', title: 'The twelve hours', ar: 'السَّاعَاتُ',
      cols: [{ label: 'Time', w: 1.4, size: 22 }, { label: 'The hour', w: 4.8, size: 22 }, { label: 'Time', w: 1.4, size: 22 }, { label: 'The hour', w: 4.73, size: 22 }],
      rows: [
        { core: true, cells: [{ ar: '١:٠٠' }, { ar: 'الوَاحِدَةُ' }, { ar: '٧:٠٠' }, { ar: 'السَّابِعَةُ' }] },
        { core: true, cells: [{ ar: '٢:٠٠' }, { ar: 'الثَّانِيَةُ' }, { ar: '٨:٠٠' }, { ar: 'الثَّامِنَةُ' }] },
        { core: true, cells: [{ ar: '٣:٠٠' }, { ar: 'الثَّالِثَةُ' }, { ar: '٩:٠٠' }, { ar: 'التَّاسِعَةُ' }] },
        { cells: [{ ar: '٤:٠٠' }, { ar: 'الرَّابِعَةُ' }, { ar: '١٠:٠٠' }, { ar: 'العَاشِرَةُ' }] },
        { cells: [{ ar: '٥:٠٠' }, { ar: 'الخَامِسَةُ' }, { ar: '١١:٠٠' }, { ar: 'الحَادِيَةَ عَشْرَةَ' }] },
        { cells: [{ ar: '٦:٠٠' }, { ar: 'السَّادِسَةُ' }, { ar: '١٢:٠٠' }, { ar: 'الثَّانِيَةَ عَشْرَةَ' }] },
      ],
      foot: 'Question: كَمِ السَّاعَةُ؟   Answer: السَّاعَةُ السَّابِعَةُ.',
      notes: `THE HOURS (teacher reference built from the website examples). The hour is an ORDINAL (“the seventh”) and feminine because it describes السَّاعَةُ.
Question: كَمِ السَّاعَةُ؟ Answer: السَّاعَةُ … . “At” a time: فِي + the hour in the -i form (فِي السَّاعَةِ السَّادِسَةِ) — recognition for Core.
Core: learn 6–9 (the school-morning hours) first.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · a calculation: the hour + or − the minutes (website)', title: 'Past the hour (وَ) or to the next hour (إِلَّا)?', ar: 'وَ أَمْ إِلَّا؟',
      cols: [{ label: 'Clock', w: 1.6, size: 22 }, { label: 'Arabic', w: 6.2, size: 22 }, { label: 'How it works', w: 4.53 }],
      rows: [
        T('٧:٠٥', 'السَّابِعَةُ {k|وَ}خَمْسُ دَقَائِقَ', '7 + 5 minutes'),
        T('٧:١٥', 'السَّابِعَةُ {k|وَ}الرُّبْعُ', '7 + a quarter', true),
        T('٧:٢٠', 'السَّابِعَةُ {k|وَ}الثُّلُثُ', '7 + a third (20 min)'),
        T('٧:٣٠', 'السَّابِعَةُ {k|وَ}النِّصْفُ', '7 + a half', true),
        T('٧:٤٠', '{e|الثَّامِنَةُ} {k|إِلَّا} الثُّلُثَ', 'NEXT hour (8) − a third'),
        T('٧:٤٥', '{e|الثَّامِنَةُ} {k|إِلَّا} الرُّبْعَ', 'NEXT hour (8) − a quarter', true),
        T('٧:٥٥', '{e|الثَّامِنَةُ} {k|إِلَّا} خَمْسَ دَقَائِقَ', 'NEXT hour (8) − 5 minutes'),
      ],
      notes: `GRAMMAR PART 2 — website rules “Use وَ for minutes after the hour” and “Use إِلَّا for minutes before the next hour”. Website teaching: “Treat the Arabic time phrase as a calculation: current hour + elapsed minutes, or next hour − remaining minutes.”
Pink = the hour CHANGES to the next one after half past.
Website common error: at 5:45 do NOT say الخَامِسَةُ إِلَّا الرُّبْعَ — name the next hour: السَّادِسَةُ إِلَّا الرُّبْعَ.
Notice the ending: وَالرُّبْعُ (-u) but إِلَّا الرُّبْعَ (-a) — Stretch observation only.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 3 · start, finish, duration (website) · Develop / Stretch', title: 'Begins, ends, lasts', ar: 'يَبْدَأُ · يَنْتَهِي · يَسْتَمِرُّ',
      cards: [
        { chip: 'START · يَبْدَأُ فِي', color: '1D5FBF', head: 'يَبْدَأُ', big: 'يَبْدَأُ الدَّرْسُ فِي الثَّامِنَةِ.', en: 'The lesson begins at eight.', clue: 'فِي + an exact time.' },
        { chip: 'FINISH · يَنْتَهِي فِي', color: '6B4C9A', head: 'يَنْتَهِي', big: 'يَنْتَهِي فِي التَّاسِعَةِ إِلَّا الرُّبْعَ.', en: 'It ends at quarter to nine.', clue: 'فِي + an exact time.' },
        { chip: 'DURATION · يَسْتَمِرُّ مُدَّةَ', color: 'B83227', head: 'مُدَّةَ', big: 'يَسْتَمِرُّ مُدَّةَ خَمْسٍ وَأَرْبَعِينَ دَقِيقَةً.', en: 'It lasts 45 minutes.', clue: 'How LONG → مُدَّةَ, not فِي.' },
      ],
      error: { text: 'Website common mistake: use مُدَّةَ for how long something lasts.', pairs: [['يَسْتَمِرُّ مُدَّةَ سَاعَةٍ', 'يَسْتَمِرُّ فِي سَاعَةٍ']] },
      notes: `GRAMMAR PART 3 — website rules “Distinguish start, finish and duration” and “Read formal 24-hour time accurately” (١٤:٣٠ ← الرَّابِعَةَ عَشْرَةَ وَالنِّصْفُ; in everyday speech → الثَّانِيَةُ وَالنِّصْفُ مَسَاءً).
Website: “A timetable answer may require an exact start, finish or length. Do not confuse them.”`,
    },
  ],
  quick: [0, 1, 2, 3],
  ido: {
    title: 'Watch me read my timetable',
    steps: [
      { head: 'Start', ar: '{w|يَبْدَأُ} الدَّوَامُ فِي الثَّامِنَةِ {k|وَ}خَمْسٍ وَعِشْرِينَ دَقِيقَةً.', think: '8:25 → 8 + 25 minutes (وَ).' },
      { head: 'Finish', ar: '{w|يَنْتَهِي} فِي الرَّابِعَةِ {k|إِلَّا} عَشْرَ دَقَائِقَ.', think: '3:50 → the NEXT hour (4) − 10.' },
      { head: '24-hour', ar: 'المَوْعِدُ فِي السَّاعَةِ السَّادِسَةَ عَشْرَةَ.', think: '16:00 = 4 p.m. (a timetable).' },
      { head: 'Duration', ar: '{w|يَسْتَمِرُّ} التَّمْرِينُ {e|مُدَّةَ} خَمْسٍ وَأَرْبَعِينَ دَقِيقَةً.', think: 'How long → مُدَّةَ.' },
    ],
    legend: ['k', 'w', 'e'], legendLabels: { k: 'وَ / إِلَّا', w: 'SCHEDULE VERB', e: 'DURATION' },
    model: '{w|يَبْدَأُ} الدَّوَامُ فِي الثَّامِنَةِ {k|وَ}خَمْسٍ وَعِشْرِينَ دَقِيقَةً، وَ{w|يَنْتَهِي} فِي الرَّابِعَةِ {k|إِلَّا} عَشْرَ دَقَائِقَ. {w|يَسْتَمِرُّ} التَّمْرِينُ {e|مُدَّةَ} خَمْسٍ وَأَرْبَعِينَ دَقِيقَةً.',
    modelEn: 'The school day starts at 8:25 and ends at 3:50. Training lasts 45 minutes.',
    notes: 'I DO (3 min) — the four website patterns as one timetable, modelled with a think-aloud (“past or to? which hour? start, finish or how long?”). Draw the clock on the Teams whiteboard for each time.',
  },
  wedoSlides: [
    {
      type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · website game “Beat the Clock” (whole-class version)', title: 'Beat the Clock', ar: 'اِقْرَأِ السَّاعَةَ!',
      seed: 21,
      questions: [
        q('Which is 9:15?', ['التَّاسِعَةُ وَالرُّبْعُ', 'التَّاسِعَةُ إِلَّا الرُّبْعَ', 'العَاشِرَةُ وَالرُّبْعُ'], 'Nine + a quarter.', { ar: '٩:١٥', arBig: true }),
        q('Which is 6:30?', ['السَّادِسَةُ وَالنِّصْفُ', 'السَّابِعَةُ إِلَّا النِّصْفَ', 'السَّادِسَةُ وَالرُّبْعُ'], 'Six + a half.', { ar: '٦:٣٠', arBig: true }),
        q('Which is 11:45?', ['الثَّانِيَةَ عَشْرَةَ إِلَّا الرُّبْعَ', 'الحَادِيَةَ عَشْرَةَ إِلَّا الرُّبْعَ', 'الحَادِيَةَ عَشْرَةَ وَالرُّبْعُ'], 'The NEXT hour (12) − a quarter.', { ar: '١١:٤٥', arBig: true }),
        q('Which is 4:10?', ['الرَّابِعَةُ وَعَشْرُ دَقَائِقَ', 'الرَّابِعَةُ إِلَّا عَشْرَ دَقَائِقَ', 'الخَامِسَةُ إِلَّا عَشْرَ دَقَائِقَ'], 'Four + ten minutes.', { ar: '٤:١٠', arBig: true }),
        q('Which is 2:40?', ['الثَّالِثَةُ إِلَّا الثُّلُثَ', 'الثَّانِيَةُ وَالثُّلُثُ', 'الثَّالِثَةُ وَالثُّلُثُ'], 'The NEXT hour (3) − a third (20 min).', { ar: '٢:٤٠', arBig: true }),
      ],
      side: { kind: 'core', label: 'CORE', text: 'Minutes 1–30 → same hour + وَ.\nMinutes 31–59 → NEXT hour + إِلَّا.' },
      answerSlide: { min: 0, eyebrow: 'We do · Beat the Clock answers', title: 'Beat the Clock: answers', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO — whole-class version of the website “Beat the Clock” game (teacher-made times). 20-second timer per clock; chat the letters. Then show-me: students say the time aloud before the reveal.',
      answerNotes: 'Reveal; the class says each time aloud together.',
    },
  ],
  sorterCats: ['Past the hour (وَ)', 'To the next hour (إِلَّا)'],
  hints: ['At 5:45 which hour do you name with إِلَّا?', '8:15 is AFTER eight. Which word?', 'Is this WHEN or HOW LONG?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 4.\nListen for: إِلَّا … · عِشْرِينَ دَقِيقَةً · وَخَمْسِ دَقَائِقَ.',
  listenRoutes: 'Core: questions 1, 3 and 4. Develop / Stretch: all 5.',
  gloss: [
    ['يَوْمَ الأَرْبِعَاءِ يَبْدَأُ دَوَامِي فِي السَّاعَةِ الثَّامِنَةِ إِلَّا عَشْرَ دَقَائِقَ.', 'On Wednesday my school day begins at ten to eight.'],
    ['الحِصَّةُ الأُولَى مِنَ الثَّامِنَةِ إِلَى التَّاسِعَةِ إِلَّا الرُّبْعَ، ثُمَّ عِنْدَنَا اِسْتِرَاحَةٌ تَسْتَمِرُّ عِشْرِينَ دَقِيقَةً.', 'The first lesson is from eight to quarter to nine, then we have a break that lasts twenty minutes.'],
    ['يَبْدَأُ دَرْسُ العُلُومِ فِي التَّاسِعَةِ وَخَمْسِ دَقَائِقَ، وَيَنْتَهِي فِي العَاشِرَةِ وَخَمْسٍ وَأَرْبَعِينَ دَقِيقَةً.', 'The science lesson begins at five past nine and ends at 10:45.'],
    ['بَعْدَ المَدْرَسَةِ أَذْهَبُ إِلَى التَّمْرِينِ فِي السَّاعَةِ السَّادِسَةَ عَشْرَةَ وَالنِّصْفِ،', 'After school I go to training at 16:30,'],
    ['وَأَعُودُ إِلَى البَيْتِ حَوَالَيْ الثَّامِنَةِ مَسَاءً.', 'and I return home at about eight in the evening.'],
  ],
  speak: {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'مَتَى تَسْتَيْقِظُ؟ مَتَى تَخْرُجُ مِنَ البَيْتِ؟' },
      { route: 'develop', ar: 'مَتَى يَبْدَأُ يَوْمُكَ الدِّرَاسِيُّ وَمَتَى يَنْتَهِي؟' },
      { route: 'develop', ar: 'صِفْ جَدْوَلَكَ فِي يَوْمٍ مُزْدَحِمٍ.' },
      { route: 'stretch', ar: 'مَا أَطْوَلُ نَشَاطٍ فِي أُسْبُوعِكَ؟ وَكَمْ يَسْتَمِرُّ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَسْتَيْقِظُ فِي السَّاعَةِ ______ .' },
      { route: 'develop', ar: 'يَبْدَأُ … فِي ______ وَيَنْتَهِي فِي ______ .' },
      { route: 'stretch', ar: 'يَسْتَمِرُّ … مُدَّةَ ______ ، وَأُفَضِّلُ … لِأَنَّ ______ .' },
      { route: 'sum', ar: 'يَبْدَأُ يَوْمُهُ / يَوْمُهَا فِي ______ .' },
    ],
    modelEn: ['When does training begin?', 'It begins at quarter to six and lasts an hour and a half. I prefer this time because I finish my homework before it.'],
    notes: 'Core prompt (teacher-made): “When do you wake up? When do you leave home?” — two times from the D1-L01 routine. Pairs quiz each other with digital times in chat (partner answers in Arabic).',
  },
  write: {
    core: { amount: '5 times', how: 'Your morning with five times: o’clock, quarter past, half past, quarter to (use the tables).' },
    develop: { amount: '8 sentences', how: 'A busy weekday: start and finish times with وَ and إِلَّا.' },
    stretch: { amount: '100–120 words', how: 'Website task: one 24-hour time, duration with مُدَّةَ, an opinion and a comparison.' },
  },
  frames: {
    core: [
      { en: 'I wake up at …', ar: 'أَسْتَيْقِظُ فِي السَّاعَةِ ______ .' },
      { en: 'I have breakfast at … past …', ar: 'أَتَنَاوَلُ الإِفْطَارَ فِي ______ وَالرُّبْعِ.' },
      { en: 'I leave the house at half past …', ar: 'أَخْرُجُ فِي ______ وَالنِّصْفِ.' },
      { en: 'School begins at …', ar: 'يَبْدَأُ الدَّوَامُ فِي ______ .' },
      { en: 'School ends at quarter to …', ar: 'يَنْتَهِي الدَّوَامُ فِي ______ إِلَّا الرُّبْعَ.' },
    ],
    develop: [
      { en: 'The first lesson is from … to …', ar: 'الحِصَّةُ الأُولَى مِنَ ______ إِلَى ______ .' },
      { en: 'The break lasts … minutes.', ar: 'تَسْتَمِرُّ الاِسْتِرَاحَةُ ______ دَقِيقَةً.' },
      { en: 'Training is at 16:30.', ar: 'التَّمْرِينُ فِي السَّاعَةِ ______ .' },
      { en: 'I return home at about …', ar: 'أَعُودُ إِلَى البَيْتِ حَوَالَيْ ______ .' },
      { en: 'It lasts for an hour.', ar: 'يَسْتَمِرُّ مُدَّةَ ______ .' },
    ],
    bank: ['السَّادِسَةِ', 'السَّابِعَةِ', 'الثَّامِنَةِ', 'الثَّالِثَةِ', 'الرَّابِعَةِ', 'وَالرُّبْعِ', 'وَالنِّصْفِ', 'إِلَّا الرُّبْعَ', 'وَخَمْسِ دَقَائِقَ', 'يَبْدَأُ', 'يَنْتَهِي', 'يَسْتَمِرُّ', 'مُدَّةَ', 'حَوَالَيْ'],
  },
  stretch: [
    ['حِينَ أَسْتَيْقِظُ وَأَسْتَعِدُّ لِلْمَدْرَسَةِ', 'when I wake up and get ready for school'],
    ['تَنْتَهِي الحِصَصُ فِي الثَّالِثَةِ وَالرُّبْعِ', 'lessons end at quarter past three'],
    ['يَسْتَمِرُّ التَّمْرِينُ مُدَّةَ سَاعَةٍ', 'training lasts an hour'],
    ['أَصْعَبُ جُزْءٍ هُوَ …', 'the hardest part is …'],
    ['أُفَضِّلُ اليَوْمَ المُنَظَّمَ عَلَى اليَوْمِ الفَارِغِ', 'I prefer an organised day to an empty day'],
  ],
  modelEn: 'My Tuesday begins at half past six, when I wake up and get ready for school. I leave at ten to seven, and school starts at eight. Lessons finish at quarter past three. After that I go to the sports club at 16:00, and training lasts an hour. The hardest part is the time between school and training because I am tired, but I prefer an organised day to an empty one.',
  find: ['وَ and إِلَّا times', 'a 24-hour time', 'يَسْتَمِرُّ مُدَّةَ', 'an opinion + reason'],
  modelNotes: 'Evidence: السَّادِسَةِ وَالنِّصْفِ · السَّابِعَةِ إِلَّا عَشْرَ دَقَائِقَ · السَّادِسَةَ عَشْرَةَ · يَسْتَمِرُّ التَّمْرِينُ مُدَّةَ سَاعَةٍ · أَصْعَبُ جُزْءٍ … لِأَنَّنِي …',
  selfCheck: [
    { route: 'core', text: 'I can say quarter past, half past and quarter to.' },
    { route: 'core', text: 'I wrote five exact times in my routine.' },
    { route: 'develop', text: 'After half past, I named the NEXT hour with إِلَّا.' },
    { route: 'develop', text: 'I used begins (يَبْدَأُ) and ends (يَنْتَهِي).' },
    { route: 'stretch', text: 'I used a 24-hour time and duration (مُدَّةَ).' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['يُقَدِّمُ', 'offers'], ['مَرْكَزٌ', 'centre'], ['أَنْشِطَةٌ', 'activities'], ['دَوْرَةُ الخَطِّ', 'calligraphy course'], ['نَادِي الرِّيَاضَةِ', 'sports club'],
    ['نَادِي القِرَاءَةِ', 'reading club'], ['يُعْقَدُ', 'is held'], ['يَجِبُ', 'it is necessary'], ['الحُضُورُ', 'attending, arrival'], ['قَبْلَ البَدْءِ', 'before the start'],
  ],
  prep: {
    words: [['يَوْمِيًّا', 'daily', ''], ['أُسْبُوعِيًّا', 'weekly', ''], ['نِهَايَةُ الأُسْبُوعِ', 'the weekend', ''], ['بَيْنَمَا', 'whereas, while', ''], ['يَوْمٌ مُزْدَحِمٌ', 'a busy day', 'pl. أَيَّامٌ مُزْدَحِمَةٌ']],
    questionEn: 'Which is your busiest day of the week, and which is your quietest?',
    questionAr: 'مَا أَكْثَرُ أَيَّامِكَ اِزْدِحَامًا؟',
    homework: {
      core: 'Website D1-L02: “Beat the Clock” game and the time decoder mission.',
      develop: 'Write your weekday timetable with eight exact times.',
      stretch: 'Website writing task: 100–120 words with 24-hour time and duration.',
    },
    wordsSource: 'The five words come from the website D1-L03 vocabulary (frequency, the week and contrast).',
  },
  remember: 'Remember: وَ = past · إِلَّا = to the NEXT hour.',
});

module.exports = { meta, slides };
