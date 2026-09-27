'use strict';
/* D1-L03 · How Often? — Frequency Adverbs in My Routine — website: Pathways › Development › D1 › D1-L03 (frequency, بَيْنَمَا, أَمَّا … فَـ, أَكْثَرُ … مِنْ). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D1')({
  n: 3, fileTitle: 'Frequency_Adverbs', chip: 'How Often?',
  title: 'How Often? — Frequency Adverbs in My Routine', arabic: 'كَمْ مَرَّةً؟ — ظُرُوفُ التَّكْرَارِ فِي رُوتِينِي',
  focus: 'Say how often routines happen, place frequency expressions naturally, and compare two days or two people with بَيْنَمَا, أَمَّا … فَـ and أَكْثَرُ … مِنْ.',
  icon: 'FaCalendarWeek', iconSet: 'fa6',
});

const slides = D.devLesson('D1-L03', {
  support: `• Core: a frequency LADDER (always → often → sometimes → rarely → never) + “every day / weekly”, attached to verbs from D1-L01. Develop: contrast two people with بَيْنَمَا (each verb keeps its own prefix!). Stretch: أَمَّا … فَـ and comparatives (أَكْثَرُ اِنْشِغَالًا مِنْ).
• The frequency ladder slide is visual (percentage bars) so that weaker readers can place words by meaning before reading them.
• Recycling: days of the week are assumed — show them on the whiteboard if needed (الاِثْنَيْنُ، الثُّلَاثَاءُ …).
• Urdu bridge: عادتاً، دائماً، ابد، معظم (a false friend)، مشغول.`,
  teach: 'The frequency ladder, then contrast two people or two days.',
  wedo: 'Picture match, sort by frequency, fix and listen.',
  next: { nextCode: 'D1-L04', nextTitle: 'Before and After — Sequencing My Day', nextAr: 'قَبْلَ وَبَعْدَ' },
  doNow: {
    questions: [
      q('What does يَوْمِيًّا mean?', ['daily', 'weekly', 'never'], 'Prepared at home.'),
      q('What does بَيْنَمَا mean?', ['whereas, while', 'because', 'after that'], 'Prepared at home.'),
      q('Which is 7:45?', ['الثَّامِنَةُ إِلَّا الرُّبْعَ', 'السَّابِعَةُ إِلَّا الرُّبْعَ', 'السَّابِعَةُ وَالرُّبْعُ'], 'D1-L02: the NEXT hour with إِلَّا.', { ar: '٧:٤٥', arBig: true }),
      q('Which verb means “lasts”?', ['يَسْتَمِرُّ', 'يَبْدَأُ', 'يَنْتَهِي'], 'D1-L02 schedule verbs.'),
      q('Choose the accurate sentence.', ['أَخِي يَسْتَيْقِظُ مُبَكِّرًا.', 'أَخِي أَسْتَيْقِظُ مُبَكِّرًا.', 'أَخِي تَسْتَيْقِظُ مُبَكِّرًا.'], 'D1-L01: my brother → he → يَـ.'),
    ],
    keyIdea: { text: 'Frequency words say HOW OFTEN. بَيْنَمَا joins two complete sentences — check each verb’s prefix separately.', ar: 'أَتَمَرَّنُ يَوْمِيًّا، {k|بَيْنَمَا} {e|تَ}تَمَرَّنُ أُخْتِي أُسْبُوعِيًّا.' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home. Questions 3–5 retrieve D1-L02 (time, schedule verbs) and D1-L01 (prefixes).',
  },
  routes: {
    core: ['I can say how often I do five activities.', 'I can use always, sometimes, rarely and never.'],
    develop: ['I can contrast two people with بَيْنَمَا.', 'I can use numerical frequency (twice a week).'],
    stretch: ['I can organise a comparison with أَمَّا … فَـ.', 'I can compare two days with أَكْثَرُ / أَقَلُّ … مِنْ.'],
  },
  bridge: [
    { ar: 'عَادَةً', urdu: 'عادتاً', tr: 'ādatan', en: 'usually' },
    { ar: 'دَائِمًا', urdu: 'دائماً', tr: 'dāiman', en: 'always (formal Urdu)' },
    { ar: 'أَبَدًا', urdu: 'ابد', tr: 'abad', en: 'eternity (→ never)' },
    { ar: 'مُعْظَمُ', urdu: 'معظم', tr: 'muazzam', en: 'Urdu: great · Arabic: most' },
    { ar: 'اِنْشِغَالٌ', urdu: 'مشغول', tr: 'mashghūl', en: 'busy' },
  ],
  bridgeNotes: 'URDU BRIDGE: عادتاً (usually), دائماً (always — formal Urdu), ابد (eternity → لَا … أَبَدًا never), معظم (FALSE FRIEND: Urdu “great, honoured”; Arabic فِي مُعْظَمِ الأَيَّامِ = on most days), مشغول (busy → اِنْشِغَالًا, busier).',
  core: ['أَيَّامُ الأُسْبُوعِ', 'نِهَايَةُ الأُسْبُوعِ', 'يَوْمٌ مُزْدَحِمٌ', 'يَوْمٌ هَادِئٌ', 'يَوْمِيًّا', 'أُسْبُوعِيًّا', 'لَا ... أَبَدًا', 'كَثِيرًا مَا', 'بَيْنَمَا'],
  forms: {
    'يَوْمٌ مُزْدَحِمٌ': { tag: 'm · f · pl', forms: [{ l: 'm.', ar: 'مُزْدَحِمٌ' }, { l: 'f.', ar: 'مُزْدَحِمَةٌ' }, { l: 'days', ar: 'أَيَّامٌ مُزْدَحِمَةٌ' }] },
    'يَوْمٌ هَادِئٌ': { tag: 'm · f · pl', forms: [{ l: 'm.', ar: 'هَادِئٌ' }, { l: 'f.', ar: 'هَادِئَةٌ' }, { l: 'days', ar: 'أَيَّامٌ هَادِئَةٌ' }] },
    'نَادٍ': { tag: 'sg · pl', forms: [{ l: 'one', ar: 'نَادٍ' }, { l: 'the', ar: 'النَّادِي' }, { l: 'pl.', ar: 'نَوَادٍ' }] },
    'حِصَّةٌ إِضَافِيَّةٌ': { tag: 'sg · pl', forms: [{ l: 'one', ar: 'حِصَّةٌ' }, { l: 'pl.', ar: 'حِصَصٌ' }] },
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · the frequency ladder (website expressions)', title: 'How often? From always to never', ar: 'كَمْ مَرَّةً؟',
      cols: [{ label: 'How often', w: 2.2 }, { label: 'Expression', w: 3.7, size: 24 }, { label: 'Website-style example', w: 6.43, size: 20 }],
      rows: [
        { core: true, cells: ['100% ▰▰▰▰▰', { ar: 'دَائِمًا · يَوْمِيًّا · كُلَّ يَوْمٍ' }, { ar: 'أُرَاجِعُ دُرُوسِي يَوْمِيًّا.', sub: 'I revise my lessons daily.' }] },
        { core: true, cells: ['80% ▰▰▰▰▱', { ar: 'كَثِيرًا مَا · غَالِبًا · فِي مُعْظَمِ الأَيَّامِ' }, { ar: 'كَثِيرًا مَا أَزُورُ جَدَّتِي يَوْمَ السَّبْتِ.', sub: 'I often visit my grandmother on Saturday.' }] },
        { core: true, cells: ['50% ▰▰▰▱▱', { ar: 'أَحْيَانًا · مِنْ حِينٍ إِلَى آخَرَ' }, { ar: 'أَحْيَانًا أَلْعَبُ بَعْدَ المَدْرَسَةِ.', sub: 'Sometimes I play after school.' }] },
        { cells: ['20% ▰▱▱▱▱', { ar: 'نَادِرًا · قَلِيلًا مَا · مَرَّةً كُلَّ شَهْرٍ' }, { ar: 'نَادِرًا مَا أَخْرُجُ لَيْلَةَ الجُمُعَةِ.', sub: 'I rarely go out on Friday night.' }] },
        { core: true, cells: ['0% ▱▱▱▱▱', { ar: 'لَا … أَبَدًا' }, { ar: '{k|لَا} أَتَأَخَّرُ {k|أَبَدًا} عَنِ الحِصَّةِ.', sub: 'I am never late for the lesson.' }] },
      ],
      foot: 'Numbers: مَرَّةً · مَرَّتَيْنِ · ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ (once · twice · three times a week).',
      notes: `FREQUENCY LADDER (website “Frequency range” + rule “Place frequency accurately”): frequency may follow the verb, or a phrase such as كَثِيرًا مَا may introduce the clause; لَا … أَبَدًا wraps the verb.
Quick-fire: say an activity; students show fingers 5 (always) → 0 (never), then say the Arabic word.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · contrast and compare (website)', title: 'Whereas, as for, busier than', ar: 'بَيْنَمَا · أَمَّا … فَـ · أَكْثَرُ … مِنْ',
      cards: [
        { chip: 'CONTRAST · DEVELOP', color: '1D5FBF', head: 'بَيْنَمَا', big: 'أَتَمَرَّنُ يَوْمَ الثُّلَاثَاءِ، بَيْنَمَا يَتَمَرَّنُ أَخِي يَوْمَ الخَمِيسِ.', en: 'I train on Tuesday, whereas my brother trains on Thursday.', clue: 'Two clauses, two agreements.' },
        { chip: 'CHANGE TOPIC · STRETCH', color: '6B4C9A', head: 'أَمَّا … فَـ', big: 'أَمَّا السَّبْتُ فَهُوَ يَوْمُ الرَّاحَةِ.', en: 'As for Saturday, it is a rest day.', clue: 'Topic + فَـ + the comment.' },
        { chip: 'COMPARE · STRETCH', color: 'B83227', head: 'أَكْثَرُ … مِنْ', big: 'الأَرْبِعَاءُ أَكْثَرُ اِنْشِغَالًا مِنَ الخَمِيسِ.', en: 'Wednesday is busier than Thursday.', clue: 'more / less + noun + مِنْ.' },
      ],
      error: { text: 'Website common error: after بَيْنَمَا the verb matches ITS OWN subject.', pairs: [['بَيْنَمَا يَذْهَبُ أَخِي', 'بَيْنَمَا أَخِي أَذْهَبُ']] },
      notes: `GRAMMAR PART 2 — website rules “Use بَيْنَمَا between two contrasting clauses”, “Use أَمَّا … فَـ to organise a comparison”, “Compare how busy days are” (website patterns 1, 2 and 4).
Website teaching point: “A weekly description should reveal patterns, contrasts and priorities rather than repeat seven separate lists.”`,
    },
  ],
  quick: [0, 2, 3, 4],
  ido: {
    title: 'Watch me compare my week',
    steps: [
      { head: 'How often (me)', ar: 'أُرَاجِعُ دُرُوسِي {k|يَوْمِيًّا}.', think: 'Frequency after the verb.' },
      { head: 'Contrast (her)', ar: 'أَتَمَرَّنُ مَرَّتَيْنِ، {k|بَيْنَمَا} {e|تَ}تَمَرَّنُ أُخْتِي يَوْمِيًّا.', think: 'Second clause: أُخْتِي → تَـ.' },
      { head: 'Compare days', ar: 'الاِثْنَيْنُ {w|أَكْثَرُ} اِنْشِغَالًا {w|مِنَ} السَّبْتِ.', think: 'busier + مِنْ.' },
      { head: 'Never', ar: '{k|لَا} أَتَأَخَّرُ {k|أَبَدًا} عَنِ المَوْعِدِ.', think: 'لَا before the verb, أَبَدًا after.' },
    ],
    legend: ['k', 'e', 'w'], legendLabels: { k: 'FREQUENCY / CONTRAST', e: 'SHE', w: 'COMPARE' },
    model: 'أُرَاجِعُ دُرُوسِي {k|يَوْمِيًّا}، وَأَتَمَرَّنُ مَرَّتَيْنِ فِي الأُسْبُوعِ، {k|بَيْنَمَا} {e|تَ}تَمَرَّنُ أُخْتِي يَوْمِيًّا. الاِثْنَيْنُ {w|أَكْثَرُ} اِنْشِغَالًا {w|مِنَ} السَّبْتِ. {k|لَا} أَتَأَخَّرُ {k|أَبَدًا} عَنِ المَوْعِدِ.',
    modelEn: 'I revise my lessons daily, and I train twice a week, whereas my sister trains every day. Monday is busier than Saturday. I am never late for an appointment.',
    notes: 'I DO (3 min) — website patterns combined into one short comparison, with a think-aloud. Students copy it and underline every frequency word.',
  },
  game: {
    title: 'How often? Match the picture',
    pick: [0, 2, 4],
    en: ['I always read.', 'I play sometimes.', 'I never drink coffee.'],
    icons: [[['fa6', 'FaBookOpen', '1D5FBF'], ['fa6', 'FaCalendarCheck', '1E7B4F']], [['fa6', 'FaGamepad', '6B4C9A'], ['fa6', 'FaCircleHalfStroke', 'C77700']], [['fa6', 'FaMugHot', '8A5A2B'], ['fa6', 'FaBan', 'B83227']]],
    labels: ['reading — 100%', 'games — 50%', 'coffee — 0%'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6: always, sometimes, never). Other cards for homework: غَالِبًا (often), نَادِرًا (rarely), كُلَّ يَوْمٍ (every day).',
  },
  sorterCats: ['Frequent / regular', 'Occasional / rare'],
  hints: ['أُخْتِي is feminine. Which prefix?', 'What must follow أَمَّا …?', 'Which little word follows a comparative?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nListen for: الاِثْنَيْنِ · أَتَمَرَّنُ · مَرَّتَيْنِ.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5.',
  gloss: [
    ['يَقُولُ عُمَرُ: يَوْمُ الاِثْنَيْنِ أَكْثَرُ أَيَّامِي اِنْشِغَالًا؛', 'Omar says: Monday is my busiest day;'],
    ['فَبَعْدَ المَدْرَسَةِ أَذْهَبُ إِلَى دَرْسٍ إِضَافِيٍّ، ثُمَّ أَتَمَرَّنُ فِي المَسَاءِ.', 'after school I go to an extra lesson, then I train in the evening.'],
    ['أَمَّا يَوْمُ الثُّلَاثَاءِ فَهُوَ أَهْدَأُ، وَغَالِبًا مَا أُكْمِلُ وَاجِبِي مُبَكِّرًا.', 'As for Tuesday, it is calmer, and I often finish my homework early.'],
    ['وَتَقُولُ هَنَاءُ: أَنَا أَتَمَرَّنُ مَرَّتَيْنِ فِي الأُسْبُوعِ، بَيْنَمَا يَتَمَرَّنُ أَخِي يَوْمِيًّا.', 'And Hanaa says: I train twice a week, whereas my brother trains every day.'],
    ['نِهَايَةُ أُسْبُوعِي أَقَلُّ تَنْظِيمًا مِنْ أَيَّامِ الدِّرَاسَةِ، لِأَنَّ مَوَاعِيدِي تَتَغَيَّرُ.', 'My weekend is less organised than school days, because my appointments change.'],
  ],
  speak: {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'مَاذَا تَفْعَلُ يَوْمِيًّا؟ وَمَاذَا لَا تَفْعَلُ أَبَدًا؟' },
      { route: 'develop', ar: 'مَا أَكْثَرُ يَوْمٍ اِنْشِغَالًا فِي أُسْبُوعِكَ؟' },
      { route: 'develop', ar: 'قَارِنْ بَيْنَ يَوْمَيْنِ فِي جَدْوَلِكَ.' },
      { route: 'stretch', ar: 'هَلْ تُفَضِّلُ جَدْوَلًا مُزْدَحِمًا أَمْ هَادِئًا؟ عَلِّلْ وَأَعْطِ مِثَالًا.' },
    ],
    stems: [
      { route: 'core', ar: '______ يَوْمِيًّا، وَلَا ______ أَبَدًا.' },
      { route: 'develop', ar: '______ ، بَيْنَمَا ______ أَخِي / أُخْتِي ______ .' },
      { route: 'stretch', ar: 'أَمَّا ______ فَـ ______ ؛ … أَكْثَرُ اِنْشِغَالًا مِنْ …' },
      { route: 'sum', ar: 'يَتَمَرَّنُ / تَتَمَرَّنُ ______ مَرَّاتٍ فِي الأُسْبُوعِ.' },
    ],
    modelEn: ['Compare Monday and Saturday.', 'Monday is busier than Saturday; I study and train, whereas I rest and visit my family on Saturday.'],
    notes: 'Core prompt (teacher-made): “What do you do every day? What do you never do?” Website Stretch goal: a 30–45-second answer with contrast, evidence and a balanced judgement.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Five activities with a frequency word each (use the ladder).' },
    develop: { amount: '8 sentences', how: 'Compare two days and two people with بَيْنَمَا and مَرَّتَيْنِ / ثَلَاثَ مَرَّاتٍ.' },
    stretch: { amount: '100–120 words', how: 'Website task: school days vs weekend, with أَمَّا … فَـ, a comparative and a balanced preference.' },
  },
  frames: {
    core: [
      { en: 'I … every day.', ar: '______ كُلَّ يَوْمٍ.' },
      { en: 'I always …', ar: 'دَائِمًا ______ .' },
      { en: 'Sometimes I …', ar: 'أَحْيَانًا ______ .' },
      { en: 'I rarely …', ar: 'نَادِرًا مَا ______ .' },
      { en: 'I never …', ar: 'لَا ______ أَبَدًا.' },
    ],
    develop: [
      { en: 'I train twice a week.', ar: 'أَتَمَرَّنُ ______ فِي الأُسْبُوعِ.' },
      { en: '…, whereas my brother …', ar: '______ ، بَيْنَمَا يَـ ______ أَخِي ______ .' },
      { en: '…, whereas my sister …', ar: '______ ، بَيْنَمَا تَـ ______ أُخْتِي ______ .' },
      { en: 'As for Saturday, it is …', ar: 'أَمَّا السَّبْتُ فَهُوَ ______ .' },
      { en: '… is busier than …', ar: '______ أَكْثَرُ اِنْشِغَالًا مِنْ ______ .' },
    ],
    bank: ['دَائِمًا', 'يَوْمِيًّا', 'أُسْبُوعِيًّا', 'كَثِيرًا مَا', 'أَحْيَانًا', 'نَادِرًا', 'لَا ... أَبَدًا', 'مَرَّةً', 'مَرَّتَيْنِ', 'بَيْنَمَا', 'أَمَّا ... فَـ', 'أَتَمَرَّنُ', 'أُرَاجِعُ', 'أَزُورُ'],
  },
  stretch: [
    ['أَتَّبِعُ جَدْوَلًا ثَابِتًا', 'I follow a fixed timetable'],
    ['أَزُورُ المَكْتَبَةَ يَوْمَ الخَمِيسِ فَقَطْ', 'I visit the library on Thursday only'],
    ['أَمَّا نِهَايَةُ الأُسْبُوعِ فَهِيَ أَقَلُّ تَنْظِيمًا', 'as for the weekend, it is less organised'],
    ['مِنْ حِينٍ إِلَى آخَرَ', 'from time to time'],
    ['وَلٰكِنَّ الرَّاحَةَ ضَرُورِيَّةٌ أَيْضًا', 'but rest is also necessary'],
  ],
  modelEn: 'On school days I wake up early and follow a fixed timetable. I study daily and train twice a week, whereas I visit the library on Thursday only. Wednesday is busier than the other days because training ends at quarter to eight. As for the weekend, it is less organised: I wake up late and from time to time I go out with my family. I prefer balance: a busy timetable helps me achieve, but rest is also necessary.',
  find: ['four frequency expressions', 'بَيْنَمَا', 'أَمَّا … فَـ', 'a comparative + مِنْ'],
  modelNotes: 'Evidence: يَوْمِيًّا · مَرَّتَيْنِ فِي الأُسْبُوعِ · فَقَطْ · مِنْ حِينٍ إِلَى آخَرَ · بَيْنَمَا أَزُورُ · أَمَّا نِهَايَةُ الأُسْبُوعِ فَهِيَ · أَكْثَرُ اِنْشِغَالًا مِنْ.',
  selfCheck: [
    { route: 'core', text: 'I used five different frequency words.' },
    { route: 'core', text: 'I can say “never” with لَا … أَبَدًا.' },
    { route: 'develop', text: 'After بَيْنَمَا, my second verb matches its own subject.' },
    { route: 'develop', text: 'I used twice / three times a week.' },
    { route: 'stretch', text: 'I used أَمَّا … فَـ and a comparative with مِنْ.' },
  ],
  exit: [0, 2, 3],
  glossary: [
    ['يَخْتَلِفُ', 'differs'], ['جَدْوَلِي', 'my timetable'], ['يَوْمَيِ الاِثْنَيْنِ وَالأَرْبِعَاءِ', 'on Mondays and Wednesdays'], ['أُشَارِكُ فِي', 'I take part in'], ['نَادِي العُلُومِ', 'science club'],
    ['أَطْوَلُ يَوْمٍ', 'the longest day'], ['أَعُودُ', 'I return'], ['قَبْلَ العَشَاءِ', 'before dinner'], ['جَدَّتِي', 'my grandmother'], ['يَحْتَاجُ إِلَى تَنْظِيمٍ', 'needs organisation'],
  ],
  prep: {
    words: [['قَبْلَ أَنْ', 'before (+ verb)', ''], ['بَعْدَ أَنْ', 'after (+ verb)', ''], ['عِنْدَمَا', 'when', ''], ['أُكْمِلُ وَاجِبِي', 'I complete my homework', 'he: يُكْمِلُ'], ['أَسْتَرِيحُ', 'I rest', 'he: يَسْتَرِيحُ']],
    questionEn: 'What do you do straight after school, and what do you do before you sleep?',
    questionAr: 'مَاذَا تَفْعَلُ بَعْدَ المَدْرَسَةِ؟',
    homework: {
      core: 'Website D1-L03: the picture game “How often?” and the sorter.',
      develop: 'Write 8 sentences comparing your week with a family member’s (بَيْنَمَا).',
      stretch: 'Website writing task: 100–120 words, school days vs weekend.',
    },
    wordsSource: 'The five words come from the website D1-L04 vocabulary (sequence structures and afternoon actions).',
  },
  remember: 'Remember: every verb after بَيْنَمَا matches its OWN subject.',
});

module.exports = { meta, slides };
