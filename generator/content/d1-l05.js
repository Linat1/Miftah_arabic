'use strict';
/* D1-L05 · After School and Evening Routine — website: Pathways › Development › D1 › D1-L05 (possessive and object suffixes, أَرْجِعُ / أُرَاجِعُ, duration لِمُدَّةِ, purpose لِكَيْ / حَتَّى). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D1')({
  n: 5, fileTitle: 'After_School_and_Evening', chip: 'After School and Evening',
  title: 'After School and Evening Routine', arabic: 'بَعْدَ المَدْرَسَةِ وَرُوتِينُ المَسَاءِ',
  focus: 'Describe the afternoon and evening in three phases, with exact times, duration (لِمُدَّةِ), purpose (لِكَيْ / حَتَّى) and possessive and object suffixes (غُرْفَتِي، أُسَاعِدُهَا).',
  icon: 'FaMoon', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const who = (m, f, pl) => ({ tag: 'I · he · she', forms: [{ l: 'he', ar: m }, { l: 'she', ar: f }, { l: 'we', ar: pl }] });
const slides = D.devLesson('D1-L05', {
  support: `• Core: the evening in THREE phases (arrive → jobs → rest) using the vocabulary chunks as they are (أُرَتِّبُ غُرْفَتِي, أُحَضِّرُ حَقِيبَتِي) + one time and one “for half an hour”.
• Develop: change the suffix to talk about someone else (حَقِيبَتُهُ / حَقِيبَتُهَا) and use one object suffix (أُسَاعِدُهَا). Stretch: purpose with لِكَيْ / حَتَّى + the subjunctive from D1-L04, and evaluate the routine.
• The three look-alike verbs (أَرْجِعُ / أُرَاجِعُ / أَسْتَرِيحُ) have their own slide — this is the website’s main warning.
• Urdu bridge: مدت، مطبخ، برنامج، کتاب، مصروف (not in the lesson, but useful for “busy”).`,
  teach: 'Three phases of the evening, then the suffixes: whose and whom.',
  wedo: 'Picture match, sort the evening, fix and listen.',
  next: { nextCode: 'D1-L06', nextTitle: 'He and She — Describing Someone Else’s Routine', nextAr: 'هُوَ وَهِيَ' },
  doNow: {
    questions: [
      q('What does أُرَتِّبُ غُرْفَتِي mean?', ['I tidy my room', 'I wash the dishes', 'I change my clothes'], 'Prepared at home.'),
      q('What does لِمُدَّةِ نِصْفِ سَاعَةٍ mean?', ['for half an hour', 'at half past', 'after an hour'], 'Prepared at home.'),
      q('Choose the accurate phrase.', ['قَبْلَ أَنْ أَنَامَ', 'قَبْلَ أَنْ أَنَامُ', 'قَبْلَ أَنْ النَّوْمِ'], 'D1-L04: after أَنْ the verb ends in fatḥa.'),
      q('Which needs no أَنْ?', ['بَعْدَ العَشَاءِ', 'بَعْدَ أَنْ أَعُودَ', 'قَبْلَ أَنْ أَخْرُجَ'], 'D1-L04: a noun follows directly.'),
      q('What does مَرَّتَيْنِ فِي الأُسْبُوعِ mean?', ['twice a week', 'once a day', 'every week'], 'D1-L03 frequency.'),
    ],
    keyIdea: { text: 'A short ending tells you WHOSE (after a noun) or WHOM (after a verb).', ar: 'حَقِيبَتُ{e|هَا} = her bag  ·  أُسَاعِدُ{e|هَا} = I help her' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home. Questions 3–5 retrieve D1-L04 (أَنْ + subjunctive, noun vs verb) and D1-L03 (frequency).',
  },
  routes: {
    core: ['I can describe my evening in three phases.', 'I can say at what time and for how long.'],
    develop: ['I can use my / his / her on nouns (غُرْفَتِي، غُرْفَتُهُ).', 'I can use one object suffix (أُسَاعِدُهَا).'],
    stretch: ['I can explain purpose with لِكَيْ / حَتَّى + subjunctive.', 'I can evaluate my routine and suggest one improvement.'],
  },
  bridge: [
    { ar: 'لِمُدَّةِ', urdu: 'مدت', tr: 'muddat', en: 'a period of time' },
    { ar: 'المَطْبَخِ', urdu: 'مطبخ', tr: 'matbakh', en: 'kitchen' },
    { ar: 'بَرْنَامَجًا', urdu: 'پروگرام / برنامہ', tr: 'barnāma', en: 'programme' },
    { ar: 'كِتَابًا', urdu: 'کتاب', tr: 'kitāb', en: 'book' },
    { ar: 'مُبَاشَرَةً', urdu: 'براہ راست', tr: 'barāh-e rāst', en: 'Urdu: directly · Arabic: immediately' },
  ],
  bridgeNotes: 'URDU BRIDGE: مدت (a period — كُچھ مدت) → لِمُدَّةِ (for a period of). مطبخ (kitchen — formal Urdu) → فِي المَطْبَخِ. برنامہ (plan, programme) → بَرْنَامَجًا. کتاب → كِتَابًا. مُبَاشَرَةً has no close Urdu partner — teach it as “straight away” (compare براہ راست = directly).',
  core: ['أَرْجِعُ إِلَى البَيْتِ', 'أُغَيِّرُ مَلَابِسِي', 'أَتَنَاوَلُ وَجْبَةً خَفِيفَةً', 'أَسْتَرِيحُ قَلِيلًا', 'أُرَاجِعُ دُرُوسِي', 'أُكْمِلُ وَاجِبِي', 'أُسَاعِدُ أُسْرَتِي', 'أُرَتِّبُ غُرْفَتِي', 'أَتَنَاوَلُ العَشَاءَ', 'أُحَضِّرُ حَقِيبَتِي', 'أَذْهَبُ إِلَى الفِرَاشِ', 'لِمُدَّةِ نِصْفِ سَاعَةٍ'],
  forms: {
    'أُغَيِّرُ مَلَابِسِي': who('يُغَيِّرُ مَلَابِسَهُ', 'تُغَيِّرُ مَلَابِسَهَا', 'نُغَيِّرُ مَلَابِسَنَا'),
    'أُرَاجِعُ دُرُوسِي': who('يُرَاجِعُ دُرُوسَهُ', 'تُرَاجِعُ دُرُوسَهَا', 'نُرَاجِعُ دُرُوسَنَا'),
    'أُكْمِلُ وَاجِبِي': who('يُكْمِلُ وَاجِبَهُ', 'تُكْمِلُ وَاجِبَهَا', 'نُكْمِلُ وَاجِبَنَا'),
    'أَزُورُ صَدِيقَتِي / صَدِيقِي': { tag: 'm · f · pl', forms: [{ l: 'm.', ar: 'صَدِيقٌ' }, { l: 'f.', ar: 'صَدِيقَةٌ' }, { l: 'pl.', ar: 'أَصْدِقَاءُ' }] },
    'أُرَتِّبُ غُرْفَتِي': who('يُرَتِّبُ غُرْفَتَهُ', 'تُرَتِّبُ غُرْفَتَهَا', 'نُرَتِّبُ غُرَفَنَا'),
    'أُحَضِّرُ حَقِيبَتِي': who('يُحَضِّرُ حَقِيبَتَهُ', 'تُحَضِّرُ حَقِيبَتَهَا', 'نُحَضِّرُ حَقَائِبَنَا'),
    'أَغْسِلُ الأَطْبَاقَ': { tag: 'sg · pl', forms: [{ l: 'plate', ar: 'طَبَقٌ' }, { l: 'pl.', ar: 'أَطْبَاقٌ' }, { l: 'he', ar: 'يَغْسِلُ' }] },
  },
  vocabNotes: { 0: 'The m/f/we forms on the cards already show the suffix change (مَلَابِسِي → مَلَابِسَهُ → مَلَابِسَهَا). Point to the ending, not the whole word.', 2: 'لِكَيْ and حَتَّى are followed by a verb in the subjunctive — the same fatḥa ending as after أَنْ in D1-L04.' },
  grammar: [
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 1 · three verbs that look alike (website warning)', title: 'Return, revise or rest?', ar: 'أَرْجِعُ · أُرَاجِعُ · أَسْتَرِيحُ',
      cards: [
        { chip: 'RETURN · 3 LETTERS', color: '1D5FBF', head: 'أَرْجِعُ', big: 'أَرْجِعُ إِلَى البَيْتِ فِي الرَّابِعَةِ.', en: 'I return home at four.', clue: 'ar-ji-ʿu: short, three root letters.' },
        { chip: 'REVISE · LONG Ā', color: '6B4C9A', head: 'أُرَاجِعُ', big: 'أُرَاجِعُ دُرُوسِي لِمُدَّةِ سَاعَةٍ.', en: 'I revise my lessons for an hour.', clue: 'u-rā-ji-ʿu: starts with u, long rā.' },
        { chip: 'REST · STA- PATTERN', color: '1E7B4F', head: 'أَسْتَرِيحُ', big: 'أَسْتَرِيحُ قَلِيلًا بَعْدَ الغَدَاءِ.', en: 'I rest for a while after lunch.', clue: 'as-ta-rī-ḥu: the sta- pattern.' },
      ],
      error: { text: 'Website common error: do not confuse “I revise” with “I return”.', pairs: [['أَرْجِعُ إِلَى البَيْتِ', 'أُرَاجِعُ إِلَى البَيْتِ']] },
      notes: `GRAMMAR PART 1 — website common error: “Do not confuse أُرَاجِعُ ‘I revise’ with أَرْجِعُ ‘I return’.”
Say the three verbs slowly: a-r-ji-ʿu / u-rā-ji-ʿu / as-ta-rī-ḥu. Students mime: walking home (return), reading (revise), head on hands (rest).
Quick-fire: teacher says one; students do the mime. Then reverse: teacher mimes, students say it.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 2 · whose? and whom? (website rules)', title: 'One ending, two jobs', ar: 'ضَمَائِرُ المِلْكِيَّةِ وَالمَفْعُولِ',
      cols: [{ label: 'Person', w: 1.9, size: 24 }, { label: 'After a noun: whose?', w: 3.8, size: 26 }, { label: 'After a verb: whom?', w: 3.8, size: 26 }, { label: 'Meaning', w: 2.83 }],
      rows: [
        { core: true, cells: [{ ar: 'أَنَا' }, P('حَقِيبَتِ{e|ي}', 'my bag'), P('تُسَاعِدُ{e|نِي}', 'she helps me'), 'my · me'] },
        { cells: [{ ar: 'أَنْتَ' }, P('حَقِيبَتُ{e|كَ}', 'your bag'), P('أُسَاعِدُ{e|كَ}', 'I help you'), 'your · you (m.)'] },
        { core: true, cells: [{ ar: 'هُوَ' }, P('حَقِيبَتُ{e|هُ}', 'his bag'), P('أُسَاعِدُ{e|هُ}', 'I help him'), 'his · him'] },
        { core: true, cells: [{ ar: 'هِيَ' }, P('حَقِيبَتُ{e|هَا}', 'her bag'), P('أُسَاعِدُ{e|هَا}', 'I help her'), 'her · her'] },
        { cells: [{ ar: 'نَحْنُ' }, P('حَقِيبَتُ{e|نَا}', 'our bag'), P('تُسَاعِدُ{e|نَا}', 'she helps us'), 'our · us'] },
        { cells: [{ ar: 'هُمْ' }, P('حَقِيبَتُ{e|هُمْ}', 'their bag'), P('أَزُورُ{e|هُمْ}', 'I visit them'), 'their · them'] },
      ],
      foot: 'Tāʾ marbūṭa becomes a normal t before an ending (ḥaqība → ḥaqībatī). “Me” on a verb is -nī, not -ī.',
      notes: `GRAMMAR PART 2 — website rules “Attach a possessive suffix to the noun” and “Attach an object suffix to the verb”. Website overview: the same ending shows possession after a noun or the object after a verb; the sentence role tells you which.
Teacher script: “Look at the word BEFORE the ending. Noun → whose. Verb → whom.”
Point out: (1) ة → ت (غُرْفَة → غُرْفَتِي); (2) “me” after a verb is ـنِي (تُسَاعِدُنِي).
Website common error: أُسَاعِدُهُ أُمِّي ✗ → أُسَاعِدُهَا ✓ (my mother is female → ـهَا).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 3 · how long? and why? (website rules) · Develop / Stretch', title: 'Duration and purpose', ar: 'لِمُدَّةِ · لِكَيْ · حَتَّى',
      cards: [
        { chip: 'AT WHAT TIME? · CORE', color: '1D5FBF', head: 'فِي السَّاعَةِ', big: 'أَتَمَرَّنُ فِي السَّاعَةِ الخَامِسَةِ.', en: 'I train at five o’clock.', clue: 'A point on the clock.' },
        { chip: 'FOR HOW LONG? · CORE', color: '1E7B4F', head: 'لِمُدَّةِ', big: 'أَتَمَرَّنُ لِمُدَّةِ سَاعَةٍ.', en: 'I train for an hour.', clue: 'A length of time.' },
        { chip: 'WHY? · STRETCH', color: 'B83227', head: 'لِكَيْ / حَتَّى', big: 'أُحَضِّرُ حَقِيبَتِي حَتَّى لَا أَنْسَى كُتُبِي.', en: 'I prepare my bag so I don’t forget my books.', clue: '+ fatḥa ending, as after “an”.' },
      ],
      error: { text: 'Website common error: after li-kay the verb ends in fatḥa.', pairs: [['لِكَيْ أَسْتَعِدَّ', 'لِكَيْ أَسْتَعِدُّ']] },
      notes: `GRAMMAR PART 3 — website rules “Express duration with لِمُدَّةِ” (answers “for how long?”, not “at what time?”) and “Express purpose with لِكَيْ / حَتَّى” (+ subjunctive).
Link to D1-L04: لِكَيْ and حَتَّى behave like أَنْ — the verb ends in fatḥa. Negative purpose: لِكَيْ لَا / حَتَّى لَا (so that … not).`,
    },
  ],
  quick: [0, 2, 3, 4],
  ido: {
    title: 'Watch me build my evening in three phases',
    steps: [
      { head: '1 · Arrive', ar: 'أَرْجِعُ إِلَى البَيْتِ فِي الرَّابِعَةِ إِلَّا الرُّبْعَ.', think: 'Exact time anchors the routine.' },
      { head: '2 · Rest', ar: 'أَسْتَرِيحُ {k|لِمُدَّةِ} نِصْفِ سَاعَةٍ.', think: 'For how long? → لِمُدَّةِ.' },
      { head: '3 · Jobs', ar: 'أُسَاعِدُ أُمِّي، أُسَاعِدُ{e|هَا} فِي المَطْبَخِ.', think: 'Mother → her → ـهَا.' },
      { head: '4 · Prepare', ar: 'أُحَضِّرُ حَقِيبَتِ{e|ي} {w|حَتَّى} لَا أَنْسَى كُتُبِي.', think: 'Purpose + fatḥa ending.' },
    ],
    legend: ['k', 'e', 'w'], legendLabels: { k: 'HOW LONG', e: 'SUFFIX', w: 'PURPOSE' },
    model: 'أَرْجِعُ إِلَى البَيْتِ فِي الرَّابِعَةِ إِلَّا الرُّبْعَ، وَأَسْتَرِيحُ {k|لِمُدَّةِ} نِصْفِ سَاعَةٍ. ثُمَّ أُرَاجِعُ دُرُوسِ{e|ي} {k|لِمُدَّةِ} سَاعَةٍ. بَعْدَ العَشَاءِ أُسَاعِدُ أُمِّي؛ أُسَاعِدُ{e|هَا} فِي المَطْبَخِ. قَبْلَ النَّوْمِ أُحَضِّرُ حَقِيبَتِ{e|ي} {w|حَتَّى} لَا أَنْسَى كُتُبِي.',
    modelEn: 'I return home at quarter to four, and I rest for half an hour. Then I revise my lessons for an hour. After dinner I help my mother; I help her in the kitchen. Before sleep I prepare my bag so that I do not forget my books.',
    notes: 'I DO (3 min) — website patterns 1–4 combined into the three phases, with a think-aloud. Students copy it, draw a box round every “for how long” and circle every suffix.',
  },
  game: {
    title: 'My day: match the picture',
    pick: [3, 4, 5],
    en: ['I go to school.', 'I study after school.', 'I sleep at night.'],
    icons: [[['fa6', 'FaSchool', '1D5FBF'], ['fa6', 'FaPersonWalking', '1E7B4F']], [['fa6', 'FaBookOpen', '6B4C9A'], ['fa6', 'FaPen', 'C77700']], [['fa6', 'FaMoon', '1F3A5F'], ['fa6', 'FaBed', '8A5A2B']]],
    labels: ['school', 'study in the afternoon', 'night'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6: the afternoon and night cards). A quick Core warm-up before the evening sorter. Extension: students add a time or a duration to each sentence (e.g. أَدْرُسُ لِمُدَّةِ سَاعَةٍ).',
  },
  sorterCats: ['Arrival and recovery', 'Responsibilities', 'Preparation and rest'],
  sorterNotes: 'Accept reasoned alternatives (e.g. أُرَتِّبُ غُرْفَتِي could be preparation). Ask “why?” — reasons are the Stretch skill.',
  hints: ['Returning home or revising?', 'أُمِّي is female. Which ending?', 'After لِكَيْ, what is the last vowel?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 4.\nListen for: الرَّابِعَةِ · عِشْرِينَ دَقِيقَةً · أُمَّهَا.',
  listenRoutes: 'Core: questions 1, 3 and 4. Develop / Stretch: all 5.',
  gloss: [
    ['تَعُودُ مَرْيَمُ إِلَى البَيْتِ فِي الرَّابِعَةِ وَعَشْرِ دَقَائِقَ.', 'Mariam returns home at ten past four.'],
    ['مُبَاشَرَةً تُغَيِّرُ مَلَابِسَهَا وَتَتَنَاوَلُ وَجْبَةً خَفِيفَةً.', 'Straight away she changes her clothes and has a snack.'],
    ['بَعْدَ ذٰلِكَ تَسْتَرِيحُ لِمُدَّةِ عِشْرِينَ دَقِيقَةً فَقَطْ، لِأَنَّ لَدَيْهَا تَدْرِيبًا فِي الخَامِسَةِ وَالنِّصْفِ.', 'After that she rests for only twenty minutes, because she has training at half past five.'],
    ['عِنْدَمَا تَعُودُ مِنَ التَّدْرِيبِ، تُسَاعِدُ أُمَّهَا فِي إِعْدَادِ العَشَاءِ، ثُمَّ تُكْمِلُ وَاجِبَهَا.', 'When she returns from training, she helps her mother prepare dinner, then finishes her homework.'],
    ['قَبْلَ أَنْ تَنَامَ، تُحَضِّرُ حَقِيبَتَهَا حَتَّى لَا تَنْسَى كُتُبَهَا.', 'Before she sleeps, she prepares her bag so that she does not forget her books.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَتَى تَعُودُ إِلَى البَيْتِ؟ وَمَاذَا تَفْعَلُ مُبَاشَرَةً؟' },
      { route: 'develop', ar: 'كَمْ مِنَ الوَقْتِ تَقْضِي فِي الوَاجِبِ؟' },
      { route: 'develop', ar: 'كَيْفَ تُسَاعِدُ أُسْرَتَكَ؟' },
      { route: 'stretch', ar: 'مَا أَفْضَلُ جُزْءٍ فِي رُوتِينِ المَسَاءِ؟ وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَعُودُ إِلَى البَيْتِ فِي السَّاعَةِ ______ .' },
      { route: 'develop', ar: 'أُكْمِلُ وَاجِبِي لِمُدَّةِ ______ .' },
      { route: 'develop', ar: 'أُسَاعِدُ أُمِّي / أَبِي ؛ أُسَاعِدُهَا / أُسَاعِدُهُ فِي ______ .' },
      { route: 'stretch', ar: 'أَفْضَلُ جُزْءٍ هُوَ ______ لِأَنَّ ______ .' },
    ],
    modelEn: ['What do you do when you return?', 'I change my clothes and rest a little, then I finish my homework so that I am free in the evening.'],
    notes: 'All five prompts are from the website. Prompts 1 and 2 are merged on the slide (Core); Develop answers the two amber prompts; Stretch the last with a reason. Website model: a complete sequence with a purpose clause (لِكَيْ أَكُونَ حُرًّا).',
  },
  write: {
    core: { amount: '5 sentences', how: 'Three phases: arrive (time), rest (for how long), jobs, dinner, bed. Use the Core frames.' },
    develop: { amount: '8 sentences', how: 'Add two possessive endings (my room), one object ending (I help her) and a purpose clause.' },
    stretch: { amount: '100–120 words', how: 'Website task: exact times, six evening verbs, suffixes, duration, purpose and a reasoned opinion.' },
  },
  frames: {
    core: [
      { en: 'I return home at …', ar: 'أَرْجِعُ إِلَى البَيْتِ فِي ______ .' },
      { en: 'I rest for …', ar: 'أَسْتَرِيحُ لِمُدَّةِ ______ .' },
      { en: 'Then I revise my lessons.', ar: 'ثُمَّ أُرَاجِعُ دُرُوسِي.' },
      { en: 'I have dinner at …', ar: 'أَتَنَاوَلُ العَشَاءَ فِي ______ .' },
      { en: 'I go to bed at …', ar: 'أَذْهَبُ إِلَى الفِرَاشِ فِي ______ .' },
    ],
    develop: [
      { en: 'I help my mother; I help her in …', ar: 'أُسَاعِدُ أُمِّي؛ أُسَاعِدُهَا فِي ______ .' },
      { en: 'I help my father; I help him …', ar: 'أُسَاعِدُ أَبِي؛ أُسَاعِدُهُ ______ .' },
      { en: 'I visit my grandparents; I visit them on …', ar: 'أَزُورُ جَدِّي وَجَدَّتِي؛ أَزُورُهُمْ يَوْمَ ______ .' },
      { en: 'I revise so that I understand the lesson.', ar: 'أُرَاجِعُ لِكَيْ أَفْهَمَ ______ .' },
      { en: 'I prepare my bag so that I don’t forget …', ar: 'أُحَضِّرُ حَقِيبَتِي حَتَّى لَا أَنْسَى ______ .' },
    ],
    bank: ['أَرْجِعُ', 'أُغَيِّرُ مَلَابِسِي', 'أَسْتَرِيحُ', 'أُرَاجِعُ دُرُوسِي', 'أُكْمِلُ وَاجِبِي', 'أُرَتِّبُ غُرْفَتِي', 'أَغْسِلُ الأَطْبَاقَ', 'أُحَضِّرُ حَقِيبَتِي', 'لِمُدَّةِ', 'مُبَاشَرَةً', 'لِكَيْ', 'حَتَّى لَا'],
  },
  stretch: [
    ['لِكَيْ أَكُونَ حُرًّا بَعْدَ العَشَاءِ', 'so that I am free after dinner'],
    ['بَدَلًا مِنَ البَقَاءِ عَلَى هَاتِفِي', 'instead of staying on my phone'],
    ['وَلَا أَبْدَأُ وَاجِبِي مُبَاشَرَةً', 'and I don’t start my homework straight away'],
    ['التَّحْضِيرُ المُسْبَقُ يَجْعَلُ الصَّبَاحَ أَسْهَلَ', 'preparing in advance makes the morning easier'],
    ['يَجْمَعُ بَيْنَ الوَاجِبِ وَالرَّاحَةِ', 'it combines homework and rest'],
  ],
  modelEn: 'I return home at quarter to four. First I change my clothes and have a snack, then I rest for half an hour. After that I revise my lessons and finish my homework so that I am free after dinner. I help my mother in the kitchen, and sometimes I wash the dishes with my brother. In the evening I read or talk with my family instead of staying on my phone. Before I sleep I prepare my bag and set the alarm. In my opinion, this routine is organised because it combines homework and rest.',
  find: ['an exact time', 'duration with لِمُدَّةِ', 'a purpose clause', 'two possessive endings'],
  modelNotes: 'Evidence: فِي الرَّابِعَةِ إِلَّا الرُّبْعَ · لِمُدَّةِ نِصْفِ سَاعَةٍ · لِكَيْ أَكُونَ حُرًّا · مَلَابِسِي، دُرُوسِي، وَاجِبِي، حَقِيبَتِي، أُسْرَتِي. Develop challenge: the model has NO object ending — students add one (أُسَاعِدُهَا فِي المَطْبَخِ).',
  selfCheck: [
    { route: 'core', text: 'My evening has three phases in order.' },
    { route: 'core', text: 'I gave one exact time and one “for how long”.' },
    { route: 'develop', text: 'I did not mix up return and revise.' },
    { route: 'develop', text: 'My endings match the person (her → ـهَا).' },
    { route: 'stretch', text: 'After لِكَيْ / حَتَّى my verb ends in fatḥa.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['لَا أَبْدَأُ', 'I don’t start'], ['أَحْتَاجُ إِلَى', 'I need'], ['اِسْتِرَاحَةٍ قَصِيرَةٍ', 'a short break'], ['شَيْئًا خَفِيفًا', 'something light'], ['أَبْقَى', 'I stay'],
    ['بَقِيَّةِ الأَيَّامِ', 'the rest of the days'], ['تَرْتِيبِ المَطْبَخِ', 'tidying the kitchen'], ['دُونَ عَجَلَةٍ', 'without rushing'], ['التَّحْضِيرُ المُسْبَقُ', 'advance preparation'], ['أَهْدَأَ … أَسْهَلَ', 'calmer … easier'],
  ],
  prep: {
    words: [['رُوتِينُهُ', 'his routine', ''], ['رُوتِينُهَا', 'her routine', ''], ['يَرْجِعُ', 'he returns', 'she: تَرْجِعُ'], ['كِلَاهُمَا', 'both of them', ''], ['أَبْكَرُ مِنْ', 'earlier than', '']],
    questionEn: 'Think of one family member. What time do they wake up, and what do they do in the evening?',
    questionAr: 'مَتَى يَسْتَيْقِظُ أَخُوكَ أَوْ أُخْتُكَ؟',
    homework: {
      core: 'Website D1-L05: the vocabulary tab and the sorter “Evening control room”.',
      develop: 'Write 8 sentences about your evening with two possessive and one object ending.',
      stretch: 'Website writing task: 100–120 words about your after-school and evening routine.',
    },
    wordsSource: 'The five words come from the website D1-L06 vocabulary (masculine/feminine forms and comparison).',
  },
  remember: 'Remember: noun + ending = whose. Verb + ending = whom.',
});

module.exports = { meta, slides };
