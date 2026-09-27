'use strict';
/*
 * F4-L07 · A Typical School Day — Narrating a Sequence
 * Website: Pathways › Foundation › F4 › Lesson 7. The F4 retrieval bridge and the narration route (action + time +
 * sequence + detail), the school-day verb bank (16 first-person phrases; إِلَى / فِي / مَعَ), keeping the first person
 * (أَنَا / هُوَ / هِيَ / نَحْنُ; 12), sequence and time (exact عِنْدَ vs approximate حَوَالَيْ; 14), the timeline studio, the
 * School-Day Mission (14), Salma’s day (listening), Yusuf and Huda (reading; Text B unvowelled on the website),
 * the 60-second talk, the 80–100-word narration and the 16-question checkpoint.
 */
const F = require('./f4-common');
const game = require('../site-data/pathway-visual-games.json')['f4-l07'];
const { q, bank, banks } = F;

const meta = F.meta({
  n: 7, fileTitle: 'A_Typical_School_Day_Narrating_a_Sequence', chip: 'My School Day',
  title: 'A Typical School Day — Narrating a Sequence', arabic: 'يَوْمٌ مَدْرَسِيٌّ عَادِيٌّ — سَرْدُ التَّسَلْسُلِ',
  focus: 'Narrate a whole school day in the first person: sixteen everyday actions, exact and approximate times, and varied connectors that move the reader from morning to evening.',
  icon: 'FaClockRotateLeft', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F4-L08', nextTitle: 'Reading School Texts and Timetables', nextAr: 'قِرَاءَةُ النُّصُوصِ وَالجَدَاوِلِ المَدْرَسِيَّةِ' };
const AR = /[؀-ۿ]/;
const rounds = banks.l07.rounds.map((r) => F.w({ ...r, q: AR.test(r.prompt) ? r.prompt : `${r.title}: ${r.prompt}` }));
const prompts = banks.l07.prompts;
const V = (tag) => ({ tag });

const site = {
  speaking: {
    context: 'Speak for 60 seconds about a school day',
    model: [
      ['A', 'صِفْ يَوْمَكَ الدِّرَاسِيَّ.', 'Describe your school day.'],
      ['B', 'عَادَةً أَذْهَبُ إِلَى الْمَدْرَسَةِ فِي السَّاعَةِ الثَّامِنَةِ. أَوَّلًا أَدْخُلُ الْفَصْلَ، ثُمَّ أَدْرُسُ الْعُلُومَ.', 'Usually I go to school at eight. First I enter the classroom, then I study science.'],
    ],
  },
  writing: {
    prompt: 'Website writing task: an 80–100-word connected narration of a real or invented school day in four stages — morning → school → midday → home — with times, varied connectors, one opinion with a reason and a clear final event.',
    checklist: ['Eight verbs, all in the first person (أَ… / أُ…).', 'Five sequence expressions.', 'Four time phrases (exact and approximate).', 'One opinion + reason; a clear last event.'],
    model: 'عَادَةً أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ، ثُمَّ أَتَنَاوَلُ الْفُطُورَ مَعَ عَائِلَتِي. أَذْهَبُ إِلَى الْمَدْرَسَةِ بِالْحَافِلَةِ، وَأَصِلُ حَوَالَيِ السَّاعَةِ الثَّامِنَةِ. أَوَّلًا أَدْخُلُ الْفَصْلَ وَأَجْلِسُ فِي مَكَانِي، ثُمَّ أَدْرُسُ الرِّيَاضِيَّاتِ وَالْعُلُومَ. أُفَضِّلُ الْعُلُومَ لِأَنَّهَا شَيِّقَةٌ وَمُفِيدَةٌ. فِي الاِسْتِرَاحَةِ آكُلُ فِي الْمَقْصَفِ وَأَتَحَدَّثُ مَعَ زُمَلَائِي. تَنْتَهِي الْحِصَصُ فِي السَّاعَةِ الثَّالِثَةِ، فَأَعُودُ إِلَى الْبَيْتِ. أَخِيرًا أَسْتَرِيحُ قَلِيلًا، ثُمَّ أُكْمِلُ وَاجِبِي الْمَنْزِلِيَّ.',
  },
  differentiation: {
    core: '60–70 words with six events and four connectors.',
    develop: '80–100 words with varied times, places and a justified opinion.',
    stretch: 'Exact and approximate time, a contrast and one sentence about a rule.',
  },
  mistakes: [
    { wrong: 'أَذْهَبُ إِلَى الْمَدْرَسَةِ، ثُمَّ يَدْخُلُ الْفَصْلَ.', right: 'أَذْهَبُ إِلَى الْمَدْرَسَةِ، ثُمَّ أَدْخُلُ الْفَصْلَ.', why: 'Keep “I”: yadkhulu = he enters.' },
    { wrong: 'أَذْهَبُ فِي الْمَدْرَسَةِ.', right: 'أَذْهَبُ إِلَى الْمَدْرَسَةِ.', why: 'Movement towards a place = ilā.' },
    { wrong: 'أَخِيرًا أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ.', right: 'عَادَةً أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ.', why: 'Akhīran closes the day; ‘ādatan opens it.' },
  ],
  listening: {
    title: 'Salma’s school day',
    script: 'اِسْمِي سَلْمَى، وَهَذَا يَوْمِي الدِّرَاسِيُّ. عَادَةً أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ، وَأَذْهَبُ إِلَى الْمَدْرَسَةِ بِالْحَافِلَةِ. أَصِلُ فِي السَّاعَةِ الثَّامِنَةِ، ثُمَّ أَدْخُلُ الْفَصْلَ وَأَجْلِسُ فِي مَكَانِي. الْحِصَّةُ الأُولَى هِيَ الرِّيَاضِيَّاتُ، وَلَكِنَّ مَادَّتِي الْمُفَضَّلَةَ هِيَ الْعُلُومُ لِأَنَّهَا شَيِّقَةٌ وَمُفِيدَةٌ. فِي الاِسْتِرَاحَةِ آكُلُ وَأَتَحَدَّثُ مَعَ زَمِيلَاتِي. بَعْدَ ذَلِكَ أَدْرُسُ اللُّغَةَ الْعَرَبِيَّةَ وَالتَّارِيخَ. تَنْتَهِي الْحِصَصُ فِي السَّاعَةِ الثَّالِثَةِ، فَأَعُودُ إِلَى الْبَيْتِ. فِي النِّهَايَةِ أَسْتَرِيحُ قَلِيلًا، ثُمَّ أُكْمِلُ وَاجِبِي الْمَنْزِلِيَّ.',
    questions: bank(7, 'listening', [1, 4, 5, 7, 8]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 7,
    source: 'Website sections used: the eight-question F4 retrieval bridge and the narration route, the school-day verb bank (16 first-person phrases, place patterns إِلَى / فِي / مَعَ) and the 16-question check, keeping the first person (12), sequence and time expressions (14), the timeline studio, the School-Day Mission (14), Salma’s day (listening, 10), Yusuf (fully vowelled) and Huda (unvowelled challenge) (reading, 12), the 60-second talk (4 prompts), the 80–100-word narration with its review checklist and model, and the 16-question checkpoint. Picture match: website visual game.',
    support: `• F4-L07 JOINS the unit: subjects, times, preferences, reasons and rules become one connected narrative (website narration route: action + time + sequence + detail / opinion).
• Core: 10 verbs + أَوَّلًا / ثُمَّ / أَخِيرًا + two times (60–70 words). Develop: 16 verbs, exact and approximate time, an opinion (80–100 words). Stretch: a contrast and one rule sentence (فِي الْفَصْلِ يَجِبُ أَنْ أَسْتَمِعَ …).
• Reading Text B is UNVOWELLED on the website (a reading challenge). On the slide it is shown fully vowelled; Stretch students try the unvowelled version on the website.
• Real or invented days are equally acceptable; students without a school routine (e.g. home-educated) can describe an ideal day (website prompt 4).`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Sixteen school-day actions, keep “I”, then time and sequence.', wedo: 'School-day mission, listen to Salma, compare Yusuf and Huda.', next: 'F4-L08' }),
  F.doNow({
    questions: [
      q('What does أَصِلُ mean?', ['I arrive', 'I return', 'I wake up'], 'Prepared at home (F4-L06).'),
      q('What does أَعُودُ إِلَى الْبَيْتِ mean?', ['I return home', 'I go to school', 'I leave the house'], 'Prepared at home (F4-L06).'),
      ...bank(7, 'retrieval', [2, 5, 6]),
    ],
    keyIdea: { text: 'A narration = action + time + sequence word + detail. The verbs stay with “I” (a- / u-) from start to finish.', ar: '{k|عَادَةً} أَذْهَبُ إِلَى الْمَدْرَسَةِ فِي السَّاعَةِ الثَّامِنَةِ، {k|ثُمَّ} أَدْخُلُ الْفَصْلَ.' },
    retrieves: 'Questions 1–2 test two of the five phrases prepared at home at the end of F4-L06. Questions 3–5 are the website “F4 retrieval bridge” (10:30, must, must not).',
  }),
  F.objectivesSlide([
    'Use at least sixteen school-day verbs and phrases.',
    'Keep a first-person narration consistent with anā.',
    'Order events with varied connectors and exact / approximate times.',
    'Produce an 80–100-word school-day narration.',
  ], {
    core: ['I can say six things I do in a school day.', 'I can use first, then and finally.'],
    develop: ['I can give exact and approximate times.', 'I can add an opinion with a reason.'],
    stretch: ['I can compare two school days.', 'I can include a rule in my narration.'],
  }, 2, 'Website “By the end, I can…” (left) and the website writing Core / Develop / Stretch routes (right).'),
  F.keywordsSlide({
    text: 'School-day actions, place words and time connectors. Core: ten actions, first, then, finally.',
    groups: [
      { head: 'GROUP 1', name: 'School-day verbs · 16' },
      { head: 'GROUP 2', name: 'Places · ilā · fī · ma‘a' },
      { head: 'GROUP 3', name: 'Sequence and time' },
    ],
    bridge: [
      { ar: 'أَوَّلًا', urdu: 'اول', tr: 'awwalan', en: 'first' },
      { ar: 'أَخِيرًا', urdu: 'آخر', tr: 'akhīran', en: 'finally' },
      { ar: 'عَادَةً', urdu: 'عادتاً', tr: '‘ādatan', en: 'usually' },
      { ar: 'حَوَالَيْ', urdu: 'تقریباً', tr: 'ḥawālay', en: 'about (different word)' },
      { ar: 'الْمَقْصَفُ', urdu: 'کینٹین', tr: 'al-maqṣaf', en: 'canteen' },
    ],
    notes: 'URDU BRIDGE: اول، آخر، عادتاً are shared. Urdu تقریباً (approximately) is also Arabic تَقْرِيبًا — accept it as an alternative to حَوَالَيْ.',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · school-day verbs (website) · 1 of 2', title: 'Wake up, go, arrive, enter …', ar: 'أَفْعَالُ الْيَوْمِ الدِّرَاسِيِّ',
    items: [
      { n: 1, ar: 'أَسْتَيْقِظُ', en: 'I wake up', tr: 'as-tay-qi-ẓu', core: true, ...V('I') },
      { n: 2, ar: 'أَتَنَاوَلُ الْفُطُورَ', en: 'I have breakfast', tr: 'a-ta-nā-wa-lu l-fu-ṭūr', core: true, ...V('I') },
      { n: 3, ar: 'أَذْهَبُ إِلَى الْمَدْرَسَةِ', en: 'I go to school', tr: 'adh-ha-bu i-lā l-mad-ra-sa', core: true, ...V('ilā') },
      { n: 4, ar: 'أَصِلُ إِلَى الْمَدْرَسَةِ', en: 'I arrive at school', tr: 'a-ṣi-lu i-lā l-mad-ra-sa', core: true, ...V('ilā') },
      { n: 5, ar: 'أَدْخُلُ الْفَصْلَ', en: 'I enter the classroom', tr: 'ad-khu-lu l-faṣl', core: true, ...V('I') },
      { n: 6, ar: 'أَجْلِسُ فِي مَكَانِي', en: 'I sit in my place', tr: 'aj-li-su fī ma-kā-nī', ...V('fī') },
    ],
    notes: 'SCHOOL-DAY VERBS (website, 6 of 16). Website: learn each action as a useful first-person phrase, not an isolated dictionary entry. Also: أَكْتُبُ فِي دَفْتَرِي (I write in my notebook), أَسْتَمِعُ إِلَى الْمُعَلِّمِ (I listen to the teacher), أَدْرُسُ (I study), أَقْرَأُ كِتَابِي (I read my book).',
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · school-day verbs (website) · 2 of 2', title: 'Talk, eat, play, return …', ar: 'أَفْعَالُ الْيَوْمِ الدِّرَاسِيِّ',
    items: [
      { n: 7, ar: 'أَتَحَدَّثُ مَعَ زُمَلَائِي', en: 'I talk with my classmates', tr: 'a-ta-ḥad-da-thu ma-‘a zu-ma-lā-’ī', ...V('ma‘a') },
      { n: 8, ar: 'آكُلُ فِي الْمَقْصَفِ', en: 'I eat in the canteen', tr: 'ā-ku-lu fī l-maq-ṣaf', core: true, ...V('fī') },
      { n: 9, ar: 'أَلْعَبُ فِي الْمَلْعَبِ', en: 'I play in the playground', tr: 'al-‘a-bu fī l-mal-‘ab', core: true, ...V('fī') },
      { n: 10, ar: 'أَعُودُ إِلَى الْبَيْتِ', en: 'I return home', tr: 'a-‘ū-du i-lā l-bayt', core: true, ...V('ilā') },
      { n: 11, ar: 'أُكْمِلُ وَاجِبِي الْمَنْزِلِيَّ', en: 'I complete my homework', tr: 'uk-mi-lu wā-ji-bī l-man-zi-liyy', core: true, ...V('I') },
      { n: 12, ar: 'أَسْتَرِيحُ', en: 'I rest', tr: 'as-ta-rī-ḥu', ...V('I') },
    ],
    notes: 'SCHOOL-DAY VERBS (website, 6 more). Website place patterns: إِلَى = movement towards a destination (إِلَى الْمَدْرَسَةِ / إِلَى الْبَيْتِ) · فِي = an action inside a place (فِي الْفَصْلِ / فِي الْمَقْصَفِ) · مَعَ / إِلَى = with people or listening towards someone (مَعَ زُمَلَائِي / إِلَى الْمُعَلِّمِ).',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · keep the narration in the first person (website)', title: 'Who goes? Keep “I”', ar: 'حَافِظْ عَلَى سَرْدِ الْمُتَكَلِّمِ',
    cols: [{ label: 'Person', w: 2.2, size: 24 }, { label: 'Verb', w: 2.6, size: 26 }, { label: 'Example', w: 5.2, size: 22 }, { label: 'Meaning', w: 2.33 }],
    rows: [
      { core: true, cells: [{ ar: 'أَنَا' }, { ar: '{k|أَ}ذْهَبُ' }, { ar: 'أَذْهَبُ ثُمَّ أَدْخُلُ وَأَجْلِسُ.' }, 'I go'] },
      { cells: [{ ar: 'هُوَ' }, { ar: '{w|يَ}ذْهَبُ' }, { ar: 'يَذْهَبُ يُوسُفُ مَاشِيًا.' }, 'he goes'] },
      { cells: [{ ar: 'هِيَ' }, { ar: '{e|تَ}ذْهَبُ' }, { ar: 'تَذْهَبُ هُدَى بِالسَّيَّارَةِ.' }, 'she goes'] },
      { cells: [{ ar: 'نَحْنُ' }, { ar: 'نَذْهَبُ' }, { ar: 'نَصِلُ فِي السَّاعَةِ الثَّامِنَةِ.' }, 'we go'] },
    ],
    foot: 'A personal routine uses the a- / u- form throughout. Website repair: yadkhulu (he enters) → adkhulu (I enter).',
    notes: `GRAMMAR PART 1 — website section 3 “Keep the narration in the first person”: do not change randomly to “he” or “she” — the reader must know who performs every action.
Stretch: the he / she forms are used when COMPARING with Yusuf or Huda (أَمَّا يُوسُفُ فَيَذْهَبُ مَاشِيًا).`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · sequence and time (website)', title: 'Open, move on, close', ar: 'التَّسَلْسُلُ وَالْوَقْتُ',
    cards: [
      { chip: 'OPEN', color: '1D5FBF', head: 'عَادَةً · أَوَّلًا', big: 'عَادَةً أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ.', en: 'Usually I wake up at six.', clue: 'Also: fī l-bidāya.' },
      { chip: 'MOVE ON', color: 'C77700', head: 'ثُمَّ · بَعْدَ ذَلِكَ', big: 'بَعْدَ الاِسْتِرَاحَةِ أَدْرُسُ التَّارِيخَ.', en: 'After break I study history.', clue: 'Also: fī muntaṣafi n-nahār.' },
      { chip: 'CLOSE', color: '1E6B52', head: 'أَخِيرًا · فِي النِّهَايَةِ', big: 'أَخِيرًا أَعُودُ إِلَى الْبَيْتِ وَأُكْمِلُ وَاجِبِي.', en: 'Finally I go home and finish my homework.', clue: 'Make the last event clear.' },
    ],
    error: { text: 'Order: the sequence word goes BEFORE the action it introduces.', pairs: [['أَوَّلًا أَدْخُلُ الْفَصْلَ، ثُمَّ أَجْلِسُ.', 'ثُمَّ أَوَّلًا أَدْخُلُ الْفَصْلَ.']] },
    notes: `GRAMMAR PART 2 — website section 4 “Control sequence and time expressions”: 1 opening (عَادَةً / أَوَّلًا) · 2 school begins (عِنْدَ السَّاعَةِ …) · 3 midday (بَعْدَ ذَلِكَ / فِي مُنْتَصَفِ النَّهَارِ) · 4 closing (أَخِيرًا / فِي النِّهَايَةِ).
Website connector bank: أَوَّلًا، فِي الْبِدَايَةِ، فِي الصَّبَاحِ الْبَاكِرِ، ثُمَّ، بَعْدَ ذَلِكَ، قَبْلَ / بَعْدَ الاِسْتِرَاحَةِ، فِي مُنْتَصَفِ النَّهَارِ، أَخِيرًا، فِي النِّهَايَةِ، عَادَةً، غَالِبًا، أَحْيَانًا. وَلَكِنْ adds contrast, not sequence.
Exact vs approximate (website): عِنْدَ السَّاعَةِ الثَّامِنَةِ = at eight exactly · حَوَالَيِ السَّاعَةِ الثَّامِنَةِ = at about eight.`,
  },
  F.quickCheck([...bank(7, 'present', [4, 5]), ...bank(7, 'sequence', [8, 11])], 'website narration laboratory questions 5–6 and sequence-and-time check questions 9 and 12.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me narrate a school day', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Morning', ar: '{k|عَادَةً} أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ.', think: 'Open + time.' },
      { head: 'School', ar: 'أَصِلُ حَوَالَيِ الثَّامِنَةِ، {k|ثُمَّ} أَدْخُلُ الْفَصْلَ.', think: 'Keep “I”.' },
      { head: 'Midday', ar: '{k|فِي الاِسْتِرَاحَةِ} آكُلُ فِي الْمَقْصَفِ.', think: 'Place: fī.' },
      { head: 'Home', ar: '{k|أَخِيرًا} أَعُودُ إِلَى الْبَيْتِ وَأُكْمِلُ وَاجِبِي.', think: 'Clear close.' },
    ],
    legend: ['k'], legendLabels: { k: 'SEQUENCE / TIME' },
    model: '{k|عَادَةً} أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ، {k|ثُمَّ} أَتَنَاوَلُ الْفُطُورَ. أَذْهَبُ إِلَى الْمَدْرَسَةِ بِالْحَافِلَةِ، وَأَصِلُ {k|حَوَالَيِ} السَّاعَةِ الثَّامِنَةِ. {k|فِي الاِسْتِرَاحَةِ} آكُلُ فِي الْمَقْصَفِ. {k|أَخِيرًا} أَعُودُ إِلَى الْبَيْتِ وَأُكْمِلُ وَاجِبِي.',
    modelEn: 'Usually I wake up at half past six, then I have breakfast. I go to school by bus and arrive at about eight. At break I eat in the canteen. Finally I go home and finish my homework.',
    notes: 'I DO (3 min) — the website four-stage plan (morning → school → midday → home) and model response. Circle every connector, underline every verb (all first person).',
  },
  F.gameSlide({ ...game, title: 'Visual game — Routine', items: [game.items[0], game.items[3], game.items[4]] }, {
    title: 'What happens? Match the picture',
    en: ['I wake up in the morning.', 'I go to school.', 'I study after school.'],
    icons: [[['fa6', 'FaSun', 'C77700'], ['fa6', 'FaBed', '1D5FBF']], [['fa6', 'FaBagShopping', '1D5FBF'], ['fa6', 'FaSchool', '5A6472']], [['fa6', 'FaBookOpen', '1E6B52'], ['fa6', 'FaPen', '5A6472']]],
    labels: ['sun + bed', 'bag + school', 'book + pen'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Put the six cards in order with a connector each: أَوَّلًا أَسْتَيْقِظُ … ثُمَّ أُنَظِّفُ أَسْنَانِي … بَعْدَ ذَلِكَ أَتَنَاوَلُ الإِفْطَارَ …',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website “School-Day Mission”', title: 'Complete the school-day mission', ar: 'مُهِمَّةُ الْيَوْمِ الدِّرَاسِيِّ',
    seed: 18,
    questions: [rounds[2], rounds[3], rounds[6], rounds[9], rounds[12]],
    side: { kind: 'core', label: 'CORE', text: 'keep “I”: a- / u-\nilā = towards · fī = in\nexact ‘inda · about ḥawālay' },
    answerSlide: { min: 0, eyebrow: 'We do · Mission answers', title: 'Mission: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 14 School-Day Mission rounds (arrival, classroom, approximate time, after that, home). The other 9 are homework.',
    answerNotes: 'After each answer, a student adds the NEXT event with a connector.',
  },
  F.repairSlide(site, ['Who enters? Keep “I”.', 'Towards a place: fī or ilā?', 'Which word opens the day?']),
  F.listening(site, {
    coreTip: 'Listen twice.\nFour headings: Morning · School · Break · Home.',
    routes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5.',
    gloss: [
      ['اِسْمِي سَلْمَى، وَهَذَا يَوْمِي الدِّرَاسِيُّ. عَادَةً أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ، وَأَذْهَبُ إِلَى الْمَدْرَسَةِ بِالْحَافِلَةِ.', 'I’m Salma; this is my school day. Usually I wake up at 6:30 and go to school by bus.'],
      ['أَصِلُ فِي السَّاعَةِ الثَّامِنَةِ، ثُمَّ أَدْخُلُ الْفَصْلَ وَأَجْلِسُ فِي مَكَانِي.', 'I arrive at eight, then I enter the classroom and sit in my place.'],
      ['الْحِصَّةُ الأُولَى هِيَ الرِّيَاضِيَّاتُ، وَلَكِنَّ مَادَّتِي الْمُفَضَّلَةَ هِيَ الْعُلُومُ لِأَنَّهَا شَيِّقَةٌ وَمُفِيدَةٌ.', 'The first lesson is maths, but my favourite subject is science because it is engaging and useful.'],
      ['فِي الاِسْتِرَاحَةِ آكُلُ وَأَتَحَدَّثُ مَعَ زَمِيلَاتِي. بَعْدَ ذَلِكَ أَدْرُسُ اللُّغَةَ الْعَرَبِيَّةَ وَالتَّارِيخَ.', 'At break I eat and talk with my classmates. After that I study Arabic and history.'],
      ['تَنْتَهِي الْحِصَصُ فِي السَّاعَةِ الثَّالِثَةِ، فَأَعُودُ إِلَى الْبَيْتِ. فِي النِّهَايَةِ أَسْتَرِيحُ قَلِيلًا، ثُمَّ أُكْمِلُ وَاجِبِي الْمَنْزِلِيَّ.', 'Lessons end at three, so I go home. In the end I rest a little, then finish my homework.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · Text A · fully vowelled (website)', title: 'Yusuf’s early start', ar: 'النَّصُّ (أ)',
    lines: [
      ['أَنَا يُوسُفُ. كُلَّ يَوْمٍ أَذْهَبُ إِلَى الْمَدْرَسَةِ مَاشِيًا لِأَنَّ بَيْتِي قَرِيبٌ مِنْهَا.', 'Walks to school — his house is near'],
      ['أَصِلُ حَوَالَيِ السَّاعَةِ السَّابِعَةِ وَخَمْسِينَ دَقِيقَةً.', 'Arrives at about 7:50'],
      ['أَوَّلًا أَتَحَدَّثُ مَعَ أَصْدِقَائِي، ثُمَّ أَدْخُلُ الْفَصْلَ.', 'First talks with friends, then enters class'],
      ['أَدْرُسُ سِتَّ حِصَصٍ، وَفِي مُنْتَصَفِ النَّهَارِ آكُلُ فِي الْمَقْصَفِ.', 'Six lessons · lunch in the canteen at midday'],
      ['أُحِبُّ التَّرْبِيَةَ الْبَدَنِيَّةَ، فَأَلْعَبُ فِي الْمَلْعَبِ بَعْدَ الغَدَاءِ. أَعُودُ إِلَى الْبَيْتِ فِي السَّاعَةِ الثَّالِثَةِ وَالنِّصْفِ.', 'Plays after lunch · home at 3:30'],
    ],
    notes: 'TEXT A (website, complete, fully vowelled).',
  },
  {
    type: 'glossed', stage: 'wedo', flex: true, eyebrow: 'We do · reading · Text B · unvowelled challenge on the website · FLEX / Stretch', title: 'Huda’s later day', ar: 'النَّصُّ (ب)',
    lines: [
      ['اِسْمِي هُدَى. أَذْهَبُ إِلَى الْمَدْرَسَةِ بِالسَّيَّارَةِ مَعَ أُخْتِي.', 'By car with her sister'],
      ['نَصِلُ فِي السَّاعَةِ الثَّامِنَةِ وَالنِّصْفِ لِأَنَّ الْحِصَّةَ الأُولَى تَبْدَأُ فِي التَّاسِعَةِ.', 'Arrive 8:30 — first lesson at 9:00'],
      ['أَدْرُسُ اللُّغَةَ الْعَرَبِيَّةَ وَالْعُلُومَ وَالْجُغْرَافِيَا، وَأُفَضِّلُ الْجُغْرَافِيَا لِأَنَّهَا مُمْتِعَةٌ.', 'Prefers geography — enjoyable'],
      ['فِي الاِسْتِرَاحَةِ أَقْرَأُ فِي الْمَكْتَبَةِ أَحْيَانًا. بَعْدَ ذَلِكَ آكُلُ فِي الْمَقْصَفِ مَعَ زَمِيلَاتِي.', 'Break: sometimes reads in the library · then eats'],
      ['تَنْتَهِي الْحِصَصُ حَوَالَيِ السَّاعَةِ الرَّابِعَةِ، ثُمَّ أَعُودُ إِلَى الْبَيْتِ وَأُكْمِلُ وَاجِبِي الْمَنْزِلِيَّ.', 'Lessons end about 4:00 · home + homework'],
    ],
    notes: 'TEXT B — on the website this text is deliberately UNVOWELLED (a reading challenge using familiar language). It is shown vowelled here; Stretch students read the unvowelled version on the website first. Website inference: who has the later day? (Huda.)',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions (website)', title: 'Yusuf or Huda?', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 5,
    questions: bank(7, 'reading', [1, 3, 7, 9, 10]),
    side: { kind: 'info', head: 'COMPARE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Find the time in each text,\nthen compare them.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading questions 2, 4, 8, 10 and 11. The other 7 are homework.',
    answerNotes: 'A student reads aloud the evidence phrase (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'مَتَى تَسْتَيْقِظُ؟ وَكَيْفَ تَذْهَبُ إِلَى الْمَدْرَسَةِ؟' },
      { route: 'develop', ar: 'صِفْ يَوْمَكَ الدِّرَاسِيَّ فِي سِتِّينَ ثَانِيَةً.' },
      { route: 'develop', ar: 'مَا أَكْثَرُ أَيَّامِكَ اِنْشِغَالًا؟ وَلِمَاذَا؟' },
      { route: 'stretch', ar: 'قَارِنْ يَوْمَكَ بِيَوْمِ يُوسُفَ أَوْ هُدَى.' },
    ],
    stems: [
      { route: 'core', ar: 'عَادَةً أَسْتَيْقِظُ فِي السَّاعَةِ ______ ، وَأَذْهَبُ ______ .' },
      { route: 'develop', ar: 'أَوَّلًا … ثُمَّ … بَعْدَ ذَلِكَ … أَخِيرًا …' },
      { route: 'develop', ar: 'أَكْثَرُ أَيَّامِي اِنْشِغَالًا هُوَ يَوْمُ ______ لِأَنَّ ______ .' },
      { route: 'stretch', ar: 'أَذْهَبُ ______ ، أَمَّا يُوسُفُ فَيَذْهَبُ مَاشِيًا.' },
    ],
    modelEn: ['Describe your school day.', 'Usually I go to school at eight. First I enter the classroom, then I study science.'],
    notes: `WEBSITE 60-SECOND TALK — short cue words, not a memorised English script; morning → school → break → favourite lesson → home. Prompts (website):
${prompts.map((r) => `• ${r.title}: ${r.detail}`).join('\n')}
Website live checklist: six events · three time phrases · four connectors · one subject opinion · one reason · a clear final event.`,
  }),
  F.routesSlide(site, {
    core: { amount: '60–70 words', how: 'Six events and four connectors, all with “I”.' },
    develop: { amount: '80–100 words', how: 'Varied times and places and a justified opinion.' },
    stretch: { amount: '100 words', how: 'Exact and approximate time, a contrast and a rule sentence.' },
  }),
  F.framesSlide({
    core: [
      { en: 'Usually I wake up at six.', ar: 'عَادَةً أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ.' },
      { en: 'I go to school by bus.', ar: 'أَذْهَبُ إِلَى الْمَدْرَسَةِ بِالْحَافِلَةِ.' },
      { en: 'First I enter the classroom.', ar: 'أَوَّلًا أَدْخُلُ الْفَصْلَ.' },
      { en: 'At break I eat in the canteen.', ar: 'فِي الاِسْتِرَاحَةِ آكُلُ فِي الْمَقْصَفِ.' },
      { en: 'Finally I return home.', ar: 'أَخِيرًا أَعُودُ إِلَى الْبَيْتِ.' },
    ],
    develop: [
      { en: 'I arrive at about eight.', ar: 'أَصِلُ حَوَالَيِ السَّاعَةِ الثَّامِنَةِ.' },
      { en: 'After break I study history.', ar: 'بَعْدَ الاِسْتِرَاحَةِ أَدْرُسُ التَّارِيخَ.' },
      { en: 'I prefer science because it is useful.', ar: 'أُفَضِّلُ الْعُلُومَ لِأَنَّهَا مُفِيدَةٌ.' },
      { en: 'In class I must listen to the teacher.', ar: 'فِي الْفَصْلِ يَجِبُ أَنْ أَسْتَمِعَ إِلَى الْمُعَلِّمِ.' },
      { en: 'As for Yusuf, he walks to school.', ar: 'أَمَّا يُوسُفُ فَيَذْهَبُ مَاشِيًا.' },
    ],
    bank: ['أَسْتَيْقِظُ', 'أَذْهَبُ إِلَى', 'أَصِلُ', 'أَدْخُلُ', 'آكُلُ', 'أَعُودُ', 'عَادَةً', 'أَوَّلًا', 'ثُمَّ', 'بَعْدَ ذَلِكَ', 'أَخِيرًا', 'حَوَالَيْ'],
  }),
  F.modelSlide(site,
    'Usually I wake up at half past six, then I have breakfast with my family. I go to school by bus and arrive at about eight. First I enter the classroom and sit in my place, then I study maths and science. I prefer science because it is engaging and useful. At break I eat in the canteen and talk with my classmates. Lessons end at three, so I go home. Finally I rest a little, then I finish my homework.',
    ['first-person verbs', 'times', 'connectors', 'opinion + reason'],
    'The website model narration (shortened). Stretch: add the website’s group-activity sentence and one rule.'),
  F.selfCheckSlide([
    { route: 'core', text: 'Six events, in a logical order.' },
    { route: 'core', text: 'Every verb stays with “I”.' },
    { route: 'develop', text: 'Four time phrases, exact and approximate.' },
    { route: 'develop', text: 'One opinion with a reason.' },
    { route: 'stretch', text: 'A contrast and a rule sentence.' },
  ]),
  F.exitTicket(bank(7, 'finalCheck', [3, 6, 13]), 16),
  F.prepSlide({
    ...NEXT,
    words: [['نَصٌّ', 'a text', 'pl. نُصُوصٌ'], ['إِعْلَانٌ', 'an announcement / notice', 'pl. إِعْلَانَاتٌ'], ['رِسَالَةٌ', 'a letter / message', 'pl. رَسَائِلُ'], ['عُنْوَانٌ', 'a title / heading', 'pl. عَنَاوِينُ'], ['دَلِيلٌ', 'evidence', '—']],
    questionEn: 'Find one school notice at home or online. What type of text is it?',
    questionAr: 'مَا نَوْعُ النَّصِّ؟',
    homework: {
      core: 'Website F4-L07: the School-Day Mission (14) and the picture game.',
      develop: 'Website timeline studio: change three details and add one opinion with a reason.',
      stretch: 'Write your 80–100-word narration; underline verbs, circle connectors, box times.',
    },
    wordsSource: 'The five words come from the website F4-L08 text-type bank.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: action + time + connector · keep “I” · ilā = towards, fī = in.' }),
];

module.exports = { meta, slides };
