'use strict';
/*
 * F4-L02 · The School Timetable — Days and Times
 * Website: Pathways › Foundation › F4 › Lesson 2. The F4-L01 bridge, the seven days (+ فِي يَوْمِ …), the timetable
 * language vault (timetable, period, begins / ends, break, lunch, مَتَى؟ فِي أَيِّ يَوْمٍ؟ كَمْ حِصَّةً؟), the twelve-hour
 * clock (feminine ordinals + quarter past / half past / quarter to), the authentic-style timetable, the timetable
 * builder, the Timetable Mission (14), Amal’s timetable update (listening), Samir and Layla (reading), speaking,
 * the 6–8-sentence description and the 16-question checkpoint. Website game: “Beat the School Clock”.
 */
const F = require('./f4-common');
const { q, bank, banks } = F;

const meta = F.meta({
  n: 2, fileTitle: 'The_School_Timetable_Days_and_Times', chip: 'School Timetable',
  title: 'The School Timetable — Days and Times', arabic: 'الجَدْوَلُ المَدْرَسِيُّ — الأَيَّامُ وَالأَوْقَاتُ',
  focus: 'Name and order the seven days, read the twelve-hour clock (with quarter past, half past and quarter to), read a timetable and describe your school week.',
  icon: 'FaCalendarDays', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F4-L03', nextTitle: 'Classroom Objects — What Is in Your Bag?', nextAr: 'أَدَوَاتُ الفَصْلِ — مَاذَا فِي حَقِيبَتِكَ؟' };
const AR = /[؀-ۿ]/;
const rounds = banks.l02.rounds.map((r) => F.w({ ...r, q: AR.test(r.prompt) ? r.prompt : `${r.title}: ${r.prompt}` }));
const prompts = banks.l02.prompts;
const clock = banks.l02.defs;
const hm = (d) => `${d.h}:${String(d.m).padStart(2, '0')}`;
const others = (i) => clock.filter((_, j) => j !== i).map((d) => d.a);

const site = {
  speaking: {
    context: 'Speak about a school timetable',
    model: [
      ['A', 'مَتَى عِنْدَكَ العَرَبِيَّةُ؟', 'When do you have Arabic?'],
      ['B', 'عِنْدِي العَرَبِيَّةُ يَوْمَ الأَحَدِ فِي السَّاعَةِ الثَّامِنَةِ، ثُمَّ الرِّيَاضِيَّاتُ.', 'I have Arabic on Sunday at eight, then maths.'],
    ],
  },
  writing: {
    prompt: 'Website writing task: 6–8 connected sentences — at least four days, five subjects, four times, one break or lunch detail and two questions or answers (a real or invented timetable).',
    checklist: ['فِي يَوْمِ + day.', 'فِي السَّاعَةِ + feminine hour.', 'يَبْدَأُ / يَنْتَهِي + ثُمَّ.', 'A question: مَتَى؟ فِي أَيِّ يَوْمٍ؟ كَمْ حِصَّةً؟'],
    model: 'فِي يَوْمِ الأَحَدِ عِنْدِي العُلُومُ فِي السَّاعَةِ الثَّامِنَةِ، ثُمَّ الرِّيَاضِيَّاتُ. وَفِي يَوْمِ الاِثْنَيْنِ عِنْدِي التَّارِيخُ فِي الحِصَّةِ الثَّانِيَةِ. الاِسْتِرَاحَةُ فِي السَّاعَةِ العَاشِرَةِ. يَبْدَأُ دَرْسُ الكِيمِيَاءِ يَوْمَ الثُّلَاثَاءِ فِي السَّاعَةِ التَّاسِعَةِ وَالرُّبُعِ. أُفَضِّلُ يَوْمَ الخَمِيسِ لِأَنَّ عِنْدِي الفَنَّ.',
  },
  differentiation: {
    core: 'Six accurate modelled sentences: day + subject + time.',
    develop: 'Add yabda’u, yantahī, thumma and a question.',
    stretch: 'Compare two days and explain which day you prefer.',
  },
  mistakes: [
    { wrong: 'فِي يَوْمُ الخَمِيسُ عِنْدِي الفَنُّ.', right: 'فِي يَوْمِ الخَمِيسِ عِنْدِي الفَنُّ.', why: 'After fī yawmi, copy the modelled -i endings.' },
    { wrong: 'السَّاعَةُ الثَّامِنُ.', right: 'السَّاعَةُ الثَّامِنَةُ.', why: 'Sā‘a is feminine: every hour ends in -a.' },
    { wrong: 'مَتَى يَوْمٍ عِنْدَكَ الكِيمِيَاءُ؟', right: 'فِي أَيِّ يَوْمٍ عِنْدَكَ الكِيمِيَاءُ؟', why: 'On which day? = fī ayyi yawmin.' },
  ],
  listening: {
    title: 'Amal’s timetable update',
    script: 'مَرْحَبًا. هَذَا تَغْيِيرٌ فِي الجَدْوَلِ المَدْرَسِيِّ. فِي يَوْمِ الأَحَدِ يَبْدَأُ دَرْسُ اللُّغَةِ العَرَبِيَّةِ فِي السَّاعَةِ الثَّامِنَةِ صَبَاحًا. فِي يَوْمِ الاِثْنَيْنِ عِنْدَنَا التَّارِيخُ فِي الحِصَّةِ الثَّانِيَةِ، ثُمَّ الاِسْتِرَاحَةُ فِي السَّاعَةِ العَاشِرَةِ. أَمَّا يَوْمَ الثُّلَاثَاءِ فَدَرْسُ الكِيمِيَاءِ يَبْدَأُ فِي السَّاعَةِ التَّاسِعَةِ وَالرُّبُعِ. يَوْمَ الأَرْبِعَاءِ عِنْدَنَا اللُّغَةُ العَرَبِيَّةُ مَرَّةً أُخْرَى فِي السَّاعَةِ العَاشِرَةِ وَالنِّصْفِ. وَفِي يَوْمِ الخَمِيسِ يَنْتَهِي دَرْسُ الفَنِّ فِي السَّاعَةِ الثَّانِيَةِ عَشْرَةَ.',
    questions: bank(2, 'listening', [0, 1, 4, 6, 7]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 2,
    source: 'Website sections used: the eight-question F4-L01 bridge, the seven days (+ فِي يَوْمِ …, school-week awareness) and the 14-question day check, the timetable language vault and the 12-question check, the twelve-hour clock (feminine ordinals, quarter past / half past / quarter to) and the 16-question time check, the authentic-style timetable and the 12-question reading check, the timetable builder, the Timetable Mission (14), Amal’s timetable update (listening, 10), Samir and Layla (reading, 12), speaking (4 prompts), the 6–8-sentence description and the 16-question checkpoint. Website game: “Beat the School Clock” (used as the clock quiz).',
    support: `• Core: seven days + فِي يَوْمِ + the hours 1–12 + “I have … on … at …”. Develop: quarter past / half past / quarter to, يَبْدَأُ / يَنْتَهِي and the three questions. Stretch: compare two days and give a preference.
• Website “Time depth”: this lesson teaches only the timetable times needed here; the separate Time Mastery lesson covers minute-by-minute time.
• School-week awareness (website): many Arabic-speaking schools begin on Sunday; others begin on Monday. Invite students to describe their own (real or invented) week.
• Urdu bridge: ہفتہ (Urdu “week” / Saturday) — Arabic أُسْبُوعٌ; جمعہ = الجُمُعَةُ; گھنٹہ vs سَاعَةٌ (Urdu ساعت = moment); وقت = وَقْتٌ.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Seven days, timetable words, then the twelve-hour clock.', wedo: 'Read a timetable, clock quiz, listen to Amal, read two profiles.', next: 'F4-L03' }),
  F.doNow({
    questions: [
      q('What does جَدْوَلٌ مَدْرَسِيٌّ mean?', ['a school timetable', 'a school subject', 'a school bag'], 'Prepared at home (F4-L01).'),
      q('What does مَتَى؟ mean?', ['when?', 'where?', 'how many?'], 'Prepared at home (F4-L01).'),
      ...bank(2, 'retrieval', [2, 4, 6]),
    ],
    keyIdea: { text: 'A timetable sentence = day + subject + time. Sā‘a (hour) is feminine, so every hour takes the feminine ordinal.', ar: 'فِي يَوْمِ الأَحَدِ عِنْدِي العُلُومُ فِي السَّاعَةِ الثَّامِنَ{e|ةِ}' },
    retrieves: 'Questions 1–2 test two of the five timetable words prepared at home at the end of F4-L01. Questions 3–5 are the website “F4-L01 retrieval bridge” (favourite subject, feminine reason, asking a girl).',
  }),
  F.objectivesSlide([
    'Name and order all seven days.',
    'Read and say the twelve hours plus quarter past, half past and quarter to.',
    'Use fī yawmi … accurately.',
    'Ask when, on which day and how many periods — and describe a timetable.',
  ], {
    core: ['I can say the seven days in order.', 'I can say what I have on a day at a time.'],
    develop: ['I can use quarter past, half past, quarter to.', 'I can ask when and on which day.'],
    stretch: ['I can describe a whole school week.', 'I can compare two days and give a preference.'],
  }, 2, 'Website “By the end, I can…” (left) and the website writing Core / Develop / Stretch routes (right).'),
  F.keywordsSlide({
    text: 'Seven days, timetable words and clock times. Core: the days, the hours and “I have … on … at …”.',
    groups: [
      { head: 'GROUP 1', name: 'Days of the week · 7' },
      { head: 'GROUP 2', name: 'Timetable language · 15' },
      { head: 'GROUP 3', name: 'Clock times · 12 + ¼ ½ ¾' },
    ],
    bridge: [
      { ar: 'الجُمُعَةُ', urdu: 'جمعہ', tr: 'al-jumu‘a', en: 'Friday' },
      { ar: 'وَقْتٌ', urdu: 'وقت', tr: 'waqt', en: 'time' },
      { ar: 'الأَرْبِعَاءُ', urdu: 'اربعاء', tr: 'al-arbi‘ā’', en: 'Wednesday (root: four)' },
      { ar: 'نِصْفٌ', urdu: 'نصف', tr: 'niṣf', en: 'half' },
      { ar: 'أُسْبُوعٌ', urdu: 'ہفتہ', tr: 'usbū‘', en: 'week (different word)' },
    ],
    notes: 'URDU BRIDGE: جمعہ، وقت and نصف are shared. The Arabic day names count from Sunday: الأَحَدُ (one), الاِثْنَيْنُ (two), الثُّلَاثَاءُ (three), الأَرْبِعَاءُ (four), الخَمِيسُ (five). CAREFUL: Urdu ہفتہ = week AND Saturday; Arabic week = أُسْبُوعٌ, Saturday = السَّبْتُ.',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · the seven days (website)', title: 'Sunday to Saturday', ar: 'أَيَّامُ الأُسْبُوعِ',
    items: [
      { n: 1, ar: 'الأَحَدُ', en: 'Sunday · day 1', tr: 'al-a-ḥad', core: true, tag: 'm.', forms: [{ l: 'on', ar: 'فِي يَوْمِ الأَحَدِ' }] },
      { n: 2, ar: 'الاِثْنَيْنُ', en: 'Monday · day 2', tr: 'al-ith-nayn', core: true, tag: 'm.', forms: [{ l: 'on', ar: 'فِي يَوْمِ الاِثْنَيْنِ' }] },
      { n: 3, ar: 'الثُّلَاثَاءُ', en: 'Tuesday · day 3', tr: 'ath-thu-lā-thā’', core: true, tag: 'm.', forms: [{ l: 'on', ar: 'فِي يَوْمِ الثُّلَاثَاءِ' }] },
      { n: 4, ar: 'الأَرْبِعَاءُ', en: 'Wednesday · day 4', tr: 'al-ar-bi-‘ā’', core: true, tag: 'm.', forms: [{ l: 'on', ar: 'فِي يَوْمِ الأَرْبِعَاءِ' }] },
      { n: 5, ar: 'الخَمِيسُ', en: 'Thursday · day 5', tr: 'al-kha-mīs', core: true, tag: 'm.', forms: [{ l: 'on', ar: 'فِي يَوْمِ الخَمِيسِ' }] },
      { n: 6, ar: 'الجُمُعَةُ · السَّبْتُ', en: 'Friday · Saturday', tr: 'al-ju-mu-‘a · as-sabt', core: true, tag: 'm.', forms: [{ l: 'on', ar: 'فِي يَوْمِ الجُمُعَةِ' }] },
    ],
    notes: 'DAYS (website): all seven are treated as masculine. After فِي يَوْمِ use the modelled genitive form (الأَحَدِ، الاِثْنَيْنِ، الخَمِيسِ …). Website examples: فِي يَوْمِ الاِثْنَيْنِ عِنْدِي الرِّيَاضِيَّاتُ · فِي يَوْمِ الخَمِيسِ عِنْدِي الفَنُّ. Also: يَوْمٌ / أَيَّامٌ (day / days), أُسْبُوعٌ / أَسَابِيعُ (week / weeks).',
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 2 · timetable language (website vault)', title: 'Period, begins, ends, break …', ar: 'لُغَةُ الجَدْوَلِ',
    items: [
      { n: 7, ar: 'حِصَّةٌ', en: 'lesson / period', tr: 'ḥiṣ-ṣa', core: true, tag: 'f.', forms: [{ l: 'pl.', ar: 'حِصَصٌ' }, { l: '1st', ar: 'الحِصَّةُ الأُولَى' }] },
      { n: 8, ar: 'يَبْدَأُ · يَنْتَهِي', en: 'begins · ends', tr: 'yab-da’u · yan-ta-hī', core: true, tag: 'verbs', forms: [{ l: 'e.g.', ar: 'يَبْدَأُ الدَّرْسُ' }] },
      { n: 9, ar: 'الاِسْتِرَاحَةُ', en: 'break time', tr: 'al-is-ti-rā-ḥa', core: true, tag: 'f.' },
      { n: 10, ar: 'وَقْتُ الغَدَاءِ', en: 'lunchtime', tr: 'waqt al-gha-dā’', tag: 'm.' },
      { n: 11, ar: 'مَتَى؟ · فِي أَيِّ يَوْمٍ؟', en: 'when? · on which day?', tr: 'ma-tā · fī ay-yi yaw-min', core: true, tag: 'questions' },
      { n: 12, ar: 'كَمْ حِصَّةً؟', en: 'how many periods?', tr: 'kam ḥiṣ-ṣa-tan', tag: 'question' },
    ],
    notes: 'TIMETABLE VAULT (website). Also: جَدْوَلٌ مَدْرَسِيٌّ / دِرَاسِيٌّ (timetable), الحِصَّةُ الثَّانِيَةُ / الثَّالِثَةُ / الرَّابِعَةُ (2nd / 3rd / 4th period), الآنَ (now), صَبَاحًا / مَسَاءً (in the morning / evening). Website models: يَبْدَأُ دَرْسُ العُلُومِ فِي السَّاعَةِ التَّاسِعَةِ صَبَاحًا · يَنْتَهِي الدَّرْسُ فِي السَّاعَةِ العَاشِرَةِ · مَتَى عِنْدَكَ العَرَبِيَّةُ؟ · فِي أَيِّ يَوْمٍ عِنْدَكِ الكِيمِيَاءُ؟ · كَمْ حِصَّةً لِلُّغَةِ العَرَبِيَّةِ فِي الأُسْبُوعِ؟',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · the twelve-hour clock (website)', title: 'The hour is feminine', ar: 'السَّاعَةُ',
    cols: [{ label: 'Time', w: 1.5 }, { label: 'Arabic', w: 4.7, size: 22 }, { label: 'Time', w: 1.5 }, { label: 'Arabic', w: 4.63, size: 22 }],
    rows: [
      { core: true, cells: ['1:00', { ar: 'السَّاعَةُ الوَاحِدَةُ' }, '7:00', { ar: 'السَّاعَةُ السَّابِعَةُ' }] },
      { core: true, cells: ['2:00', { ar: 'السَّاعَةُ الثَّانِيَةُ' }, '8:00', { ar: 'السَّاعَةُ الثَّامِنَةُ' }] },
      { core: true, cells: ['3:00', { ar: 'السَّاعَةُ الثَّالِثَةُ' }, '9:00', { ar: 'السَّاعَةُ التَّاسِعَةُ' }] },
      { core: true, cells: ['4:00', { ar: 'السَّاعَةُ الرَّابِعَةُ' }, '10:00', { ar: 'السَّاعَةُ العَاشِرَةُ' }] },
      { core: true, cells: ['5:00', { ar: 'السَّاعَةُ الخَامِسَةُ' }, '11:00', { ar: 'السَّاعَةُ الحَادِيَةُ عَشْرَةَ' }] },
      { core: true, cells: ['6:00', { ar: 'السَّاعَةُ السَّادِسَةُ' }, '12:00', { ar: 'السَّاعَةُ الثَّانِيَةُ عَشْرَةَ' }] },
    ],
    ltr: true,
    foot: 'Quarter past: wa-r-rubu‘ (9:15) · half past: wa-n-niṣf (10:30) · quarter to: next hour + illā rubu‘an (10:45 = 11 illā rubu‘an).',
    notes: `GRAMMAR PART 1 — website section 4 “Read the twelve-hour clock”: Arabic names each clock hour with a FEMININE ordinal because سَاعَةٌ is feminine (1 = الوَاحِدَةُ, not the cardinal).
Website fractions: السَّاعَةُ التَّاسِعَةُ وَالرُّبُعُ (9:15) · السَّاعَةُ العَاشِرَةُ وَالنِّصْفُ (10:30) · السَّاعَةُ الحَادِيَةُ عَشْرَةَ إِلَّا رُبُعًا (10:45 — the NEXT hour minus a quarter).
After فِي the endings change to -i (فِي السَّاعَةِ الثَّامِنَةِ) — model it, no case teaching needed.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · ask and answer the timetable (website)', title: 'When? Which day? How many?', ar: 'اِسْأَلْ عَنِ الجَدْوَلِ',
    cards: [
      { chip: 'WHEN?', color: '1D5FBF', head: 'مَتَى؟', big: 'مَتَى عِنْدَكَ العَرَبِيَّةُ؟', en: 'When do you have Arabic?', clue: 'Answer: at + time.' },
      { chip: 'WHICH DAY?', color: 'C77700', head: 'فِي أَيِّ يَوْمٍ؟', big: 'فِي أَيِّ يَوْمٍ عِنْدَكِ الكِيمِيَاءُ؟', en: 'On which day do you (f.) have chemistry?', clue: 'Answer: fī yawmi …' },
      { chip: 'HOW MANY?', color: '1E6B52', head: 'كَمْ حِصَّةً؟', big: 'كَمْ حِصَّةً لِلعَرَبِيَّةِ فِي الأُسْبُوعِ؟', en: 'How many Arabic periods a week?', clue: 'Answer: twice, three times …' },
    ],
    error: { text: 'Website model: day + subject + time in one sentence.', pairs: [['فِي يَوْمِ الاِثْنَيْنِ عِنْدِي العُلُومُ فِي السَّاعَةِ التَّاسِعَةِ.', 'الاِثْنَيْنُ العُلُومُ التَّاسِعَةُ.']] },
    notes: `GRAMMAR PART 2 — website “Ask the timetable” and “Begin and end”: يَبْدَأُ دَرْسُ العُلُومِ فِي السَّاعَةِ التَّاسِعَةِ صَبَاحًا · يَنْتَهِي الدَّرْسُ فِي السَّاعَةِ العَاشِرَةِ.
Frequency answers (reading text): مَرَّتَيْنِ فِي الأُسْبُوعِ (twice a week). Asking a girl: عِنْدَكِ (‘indaki).`,
  },
  F.quickCheck(bank(2, 'finalQuiz', [2, 4, 6, 8]), 'website checkpoint questions 3, 5, 7 and 9.'),
  {
    type: 'formsTable', stage: 'ido', min: 3, eyebrow: 'I do · read the website timetable with me', title: 'Find the row, then the column', ar: 'الجَدْوَلُ المَدْرَسِيُّ',
    cols: [{ label: 'Day', w: 2.0, size: 18 }, { label: 'P1 · 8:00', w: 2.2, size: 16 }, { label: 'P2 · 9:00', w: 2.0, size: 16 }, { label: 'Break 10:00', w: 1.7, size: 16 }, { label: 'P3 · 10:30', w: 2.2, size: 16 }, { label: 'P4 · 11:30', w: 2.23, size: 16 }],
    rows: [
      { cells: [{ ar: 'الأَحَدُ' }, { ar: 'اللُّغَةُ العَرَبِيَّةُ' }, { ar: 'الرِّيَاضِيَّاتُ' }, { ar: 'اِسْتِرَاحَةٌ' }, { ar: 'العُلُومُ' }, { ar: 'الفَنُّ' }] },
      { cells: [{ ar: 'الاِثْنَيْنُ' }, { ar: 'الإِنْجِلِيزِيَّةُ' }, { ar: 'التَّارِيخُ' }, { ar: 'اِسْتِرَاحَةٌ' }, { ar: 'الجُغْرَافِيَا' }, { ar: 'عِلْمُ الحَاسُوبِ' }] },
      { cells: [{ ar: 'الثُّلَاثَاءُ' }, { ar: 'الكِيمِيَاءُ' }, { ar: 'الأَحْيَاءُ' }, { ar: 'اِسْتِرَاحَةٌ' }, { ar: 'التَّرْبِيَةُ البَدَنِيَّةُ' }, { ar: 'المُوسِيقَى' }] },
      { cells: [{ ar: 'الأَرْبِعَاءُ' }, { ar: 'الفِيزِيَاءُ' }, { ar: 'الرِّيَاضِيَّاتُ' }, { ar: 'اِسْتِرَاحَةٌ' }, { ar: 'اللُّغَةُ العَرَبِيَّةُ' }, { ar: 'التِّقْنِيَّةُ' }] },
      { cells: [{ ar: 'الخَمِيسُ' }, { ar: 'التَّرْبِيَةُ الدِّينِيَّةُ' }, { ar: 'الفَلْسَفَةُ' }, { ar: 'اِسْتِرَاحَةٌ' }, { ar: 'المَسْرَحُ' }, { ar: 'الفَنُّ' }] },
    ],
    foot: 'Think aloud: “Sunday row → first column → Arabic. So: fī yawmi l-aḥadi ‘indī l-‘arabiyya fī s-sā‘ati th-thāmina.”',
    notes: `I DO (3 min) — the website “authentic-style school timetable”. Model three questions aloud (website):
• مَا الحِصَّةُ الأُولَى يَوْمَ الأَحَدِ؟ → اللُّغَةُ العَرَبِيَّةُ
• مَتَى عِنْدَ الطُّلَّابِ الكِيمِيَاءُ؟ → يَوْمَ الثُّلَاثَاءِ فِي السَّاعَةِ الثَّامِنَةِ
• فِي أَيِّ يَوْمٍ عِنْدَهُمْ عِلْمُ الحَاسُوبِ؟ → يَوْمَ الاِثْنَيْنِ
Then say one full model sentence: فِي يَوْمِ الأَرْبِعَاءِ عِنْدَهُمُ العَرَبِيَّةُ فِي السَّاعَةِ العَاشِرَةِ وَالنِّصْفِ.`,
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · timetable questions (website)', title: 'Read the timetable', ar: 'اِقْرَأِ الجَدْوَلَ',
    seed: 5,
    questions: bank(2, 'timetableQuiz', [3, 5, 6, 8, 10]),
    side: { kind: 'info', head: 'ROW + COLUMN', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Find the day (row),\nthen the time (column).\nFlick back to the timetable.' },
    answerSlide: { min: 0, eyebrow: 'We do · timetable answers', title: 'Timetable: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website timetable reading check questions 4, 6, 7, 9 and 11. The timetable is on the previous slide — flick back or paste it into the chat.',
    answerNotes: 'A student says the full sentence: fī yawmi … ‘indahum … fī s-sā‘a …',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · website game “Beat the School Clock”', title: 'Beat the school clock', ar: 'تَحَدِّي السَّاعَةِ المَدْرَسِيَّةِ',
    seed: 17,
    questions: [1, 2, 3, 6, 7].map((i) => ({ prompt: `What time is ${hm(clock[i])}?`, options: [clock[i].a, ...others(i).slice(0, 2)], answer: 0, why: `${hm(clock[i])} = ${clock[i].a}` })),
    side: { kind: 'core', label: 'CORE', text: '¼ past → wa-r-rubu‘\n½ past → wa-n-niṣf\n¼ to → NEXT hour illā rubu‘an' },
    answerSlide: { min: 0, eyebrow: 'We do · clock answers', title: 'Clock: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WEBSITE GAME “Beat the School Clock” — its eight clock times as a quick-fire quiz (5 here: 9:15, 10:30, 10:45, 7:15, 8:30). Then play the website game for homework.',
    answerNotes: 'Choral response: the class says each correct time aloud.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · website “Timetable Mission”', title: 'Complete the timetable mission', ar: 'مُهِمَّةُ الجَدْوَلِ',
    seed: 13,
    questions: [rounds[1], rounds[5], rounds[8], rounds[10], rounds[13]],
    side: { kind: 'core', label: 'CORE', text: 'day + subject + time\nfī yawmi … fī s-sā‘a …\nthen = thumma' },
    answerSlide: { min: 0, eyebrow: 'We do · Mission answers', title: 'Mission: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 14 Timetable Mission rounds (Friday, quarter to, which day?, ends, complete sentence). The other 9 are homework.',
    answerNotes: 'After each answer, a student reads the correct option aloud.',
  },
  F.repairSlide(site, ['After fī yawmi: which ending?', 'Hour: masculine or feminine?', 'Which day? — which question?']),
  F.listening(site, {
    coreTip: 'Listen twice.\nFive headings: day · subject · time · period · change.',
    routes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5.',
    gloss: [
      ['مَرْحَبًا. هَذَا تَغْيِيرٌ فِي الجَدْوَلِ المَدْرَسِيِّ.', 'Hello. This is a change to the school timetable.'],
      ['فِي يَوْمِ الأَحَدِ يَبْدَأُ دَرْسُ اللُّغَةِ العَرَبِيَّةِ فِي السَّاعَةِ الثَّامِنَةِ صَبَاحًا.', 'On Sunday the Arabic lesson begins at eight in the morning.'],
      ['فِي يَوْمِ الاِثْنَيْنِ عِنْدَنَا التَّارِيخُ فِي الحِصَّةِ الثَّانِيَةِ، ثُمَّ الاِسْتِرَاحَةُ فِي السَّاعَةِ العَاشِرَةِ.', 'On Monday we have history in second period, then break at ten.'],
      ['أَمَّا يَوْمَ الثُّلَاثَاءِ فَدَرْسُ الكِيمِيَاءِ يَبْدَأُ فِي السَّاعَةِ التَّاسِعَةِ وَالرُّبُعِ. يَوْمَ الأَرْبِعَاءِ عِنْدَنَا اللُّغَةُ العَرَبِيَّةُ مَرَّةً أُخْرَى فِي السَّاعَةِ العَاشِرَةِ وَالنِّصْفِ.', 'As for Tuesday, chemistry begins at 9:15. On Wednesday we have Arabic again at 10:30.'],
      ['وَفِي يَوْمِ الخَمِيسِ يَنْتَهِي دَرْسُ الفَنِّ فِي السَّاعَةِ الثَّانِيَةِ عَشْرَةَ.', 'And on Thursday the art lesson ends at twelve.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · two timetable descriptions (website)', title: 'Samir and Layla', ar: 'وَصْفَانِ لِجَدْوَلَيْنِ',
    lines: [
      ['سَامِرٌ: فِي يَوْمِ الأَحَدِ عِنْدِي العُلُومُ فِي السَّاعَةِ الثَّامِنَةِ.', 'Samir · Sunday: science at 8:00'],
      ['وَفِي يَوْمِ الاِثْنَيْنِ عِنْدِي الرِّيَاضِيَّاتُ فِي الحِصَّةِ الثَّانِيَةِ.', 'Monday: maths, 2nd period'],
      ['أُفَضِّلُ يَوْمَ الأَرْبِعَاءِ لِأَنَّ دَرْسَ الفَنِّ يَبْدَأُ فِي السَّاعَةِ العَاشِرَةِ وَالنِّصْفِ.', 'Prefers Wednesday: art begins at 10:30'],
      ['لَيْلَى: عِنْدِي اللُّغَةُ العَرَبِيَّةُ مَرَّتَيْنِ فِي الأُسْبُوعِ: يَوْمَ الثُّلَاثَاءِ وَيَوْمَ الخَمِيسِ.', 'Layla: Arabic twice a week · Tue + Thu'],
      ['تَبْدَأُ حِصَّةُ الثُّلَاثَاءِ فِي السَّاعَةِ التَّاسِعَةِ، وَتَبْدَأُ حِصَّةُ الخَمِيسِ فِي السَّاعَةِ الحَادِيَةِ عَشْرَةَ. الاِسْتِرَاحَةُ فِي السَّاعَةِ العَاشِرَةِ وَالرُّبُعِ.', 'Tue 9:00 · Thu 11:00 · break 10:15'],
    ],
    notes: 'PROFILES A and B (website, complete). Website instruction: underline the day, circle the time and box the subject in each sentence. Notice تَبْدَأُ (not يَبْدَأُ) because حِصَّةٌ is feminine.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions (website)', title: 'Samir or Layla?', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 7,
    questions: bank(2, 'reading', [0, 2, 4, 6, 8]),
    side: { kind: 'info', head: 'EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Underline the day,\ncircle the time,\nbox the subject.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading questions 1, 3, 5, 7 and 9. The other 7 are homework.',
    answerNotes: 'A student reads aloud the evidence phrase (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'مَاذَا عِنْدَكَ يَوْمَ الأَحَدِ؟' },
      { route: 'develop', ar: 'مَتَى عِنْدَكَ العَرَبِيَّةُ؟ / مَتَى عِنْدَكِ العَرَبِيَّةُ؟' },
      { route: 'develop', ar: 'مَتَى يَبْدَأُ الدَّرْسُ؟ وَمَتَى يَنْتَهِي؟' },
      { route: 'stretch', ar: 'أَيَّ يَوْمٍ تُفَضِّلُ؟ وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'فِي يَوْمِ ______ عِنْدِي ______ فِي السَّاعَةِ ______ .' },
      { route: 'develop', ar: 'عِنْدِي العَرَبِيَّةُ يَوْمَ ______ فِي السَّاعَةِ ______ ، ثُمَّ ______ .' },
      { route: 'develop', ar: 'يَبْدَأُ دَرْسُ ______ فِي ______ ، وَيَنْتَهِي فِي ______ .' },
      { route: 'stretch', ar: 'أُفَضِّلُ يَوْمَ ______ لِأَنَّ عِنْدِي ______ .' },
    ],
    modelEn: ['When do you have Arabic?', 'I have Arabic on Sunday at eight, then maths.'],
    notes: `WEBSITE SPEAKING STUDIO “Speak about a school timetable”. Prompts (website):
${prompts.map((r) => `• ${r.title}: ${r.detail}`).join('\n')}
Website checklist (1–6): three days · three subjects · accurate times · مَتَى؟ asked or answered · ثُمَّ · clear delivery.`,
  }),
  F.routesSlide(site, {
    core: { amount: '6 sentences', how: 'Day + subject + time, using the model sentences.' },
    develop: { amount: '6–8 sentences', how: 'Add yabda’u, yantahī, thumma and one question.' },
    stretch: { amount: '8+ sentences', how: 'Compare two days and say which day you prefer and why.' },
  }),
  F.framesSlide({
    core: [
      { en: 'On Sunday I have science.', ar: 'فِي يَوْمِ الأَحَدِ عِنْدِي العُلُومُ.' },
      { en: '… at eight o’clock.', ar: '… فِي السَّاعَةِ الثَّامِنَةِ.' },
      { en: 'The first period is Arabic.', ar: 'الحِصَّةُ الأُولَى اللُّغَةُ العَرَبِيَّةُ.' },
      { en: 'Break is at ten.', ar: 'الاِسْتِرَاحَةُ فِي السَّاعَةِ العَاشِرَةِ.' },
      { en: 'When do you have maths?', ar: 'مَتَى عِنْدَكَ الرِّيَاضِيَّاتُ؟' },
    ],
    develop: [
      { en: 'The lesson begins at 9:15.', ar: 'يَبْدَأُ الدَّرْسُ فِي السَّاعَةِ التَّاسِعَةِ وَالرُّبُعِ.' },
      { en: 'The lesson ends at 10:30.', ar: 'يَنْتَهِي الدَّرْسُ فِي السَّاعَةِ العَاشِرَةِ وَالنِّصْفِ.' },
      { en: 'I have Arabic twice a week.', ar: 'عِنْدِي العَرَبِيَّةُ مَرَّتَيْنِ فِي الأُسْبُوعِ.' },
      { en: 'On which day do you have chemistry?', ar: 'فِي أَيِّ يَوْمٍ عِنْدَكَ الكِيمِيَاءُ؟' },
      { en: 'I prefer Thursday because I have art.', ar: 'أُفَضِّلُ يَوْمَ الخَمِيسِ لِأَنَّ عِنْدِي الفَنَّ.' },
    ],
    bank: ['الأَحَدُ', 'الاِثْنَيْنُ', 'الثُّلَاثَاءُ', 'الأَرْبِعَاءُ', 'الخَمِيسُ', 'فِي يَوْمِ', 'فِي السَّاعَةِ', 'حِصَّةٌ', 'يَبْدَأُ', 'يَنْتَهِي', 'ثُمَّ', 'مَتَى؟'],
  }),
  F.modelSlide(site,
    'On Sunday I have science at eight o’clock, then maths. On Monday I have history in the second period. Break is at ten. The chemistry lesson begins on Tuesday at 9:15. I prefer Thursday because I have art.',
    ['days', 'times', 'begins / then', 'preference'],
    'Built from the website speaking models and Samir’s profile. Stretch: add the website “Compare two days” model (أُفَضِّلُ يَوْمَ الخَمِيسِ لِأَنَّ …، وَلَكِنَّ …).'),
  F.selfCheckSlide([
    { route: 'core', text: 'I used four days with fī yawmi.' },
    { route: 'core', text: 'Every hour is feminine: al-thāmina, al-‘āshira …' },
    { route: 'develop', text: 'I used quarter past / half past / quarter to.' },
    { route: 'develop', text: 'I used yabda’u / yantahī, thumma and a question.' },
    { route: 'stretch', text: 'I compared two days and gave a preference.' },
  ]),
  F.exitTicket(bank(2, 'finalQuiz', [0, 5, 12]), 16),
  F.prepSlide({
    ...NEXT,
    words: [['كِتَابٌ', 'a book', 'pl. كُتُبٌ'], ['دَفْتَرٌ', 'an exercise book', 'pl. دَفَاتِرُ'], ['قَلَمٌ', 'a pen', 'pl. أَقْلَامٌ'], ['حَقِيبَةٌ', 'a bag', 'pl. حَقَائِبُ'], ['مِسْطَرَةٌ', 'a ruler', 'pl. مَسَاطِرُ']],
    questionEn: 'What is in your school bag today?',
    questionAr: 'مَاذَا فِي حَقِيبَتِكَ؟',
    homework: {
      core: 'Website F4-L02: the Timetable Mission (14) and “Beat the School Clock”.',
      develop: 'Website timetable builder: five timetable lines, then copy them into your book.',
      stretch: 'Write 6–8 sentences describing your school week and your favourite day.',
    },
    wordsSource: 'The five words come from the website F4-L03 classroom-object vault.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: day + subject + time · fī yawmi … · the hour is feminine.' }),
];

module.exports = { meta, slides };
