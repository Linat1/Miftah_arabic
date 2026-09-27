'use strict';
/* F6-L10 · Listening: Town and Transport Texts — website: Pathways › Foundation › F6 › F6-L10 (predict the answer type, command endings, ثَمَنُهُ / ثَمَنُهَا, contrast with لٰكِنَّ / بَيْنَمَا, two-listening verification; three texts: directions, transport opinions, a city description). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F6')({
  n: 10, fileTitle: 'Listening_Town_and_Transport_Texts', chip: 'Listening Skills',
  title: 'Listening: Town and Transport Texts', arabic: 'الاِسْتِمَاعُ — نُصُوصُ المَدِينَةِ وَالمُوَاصَلَاتِ',
  focus: 'Listen like an examiner: predict the answer type from the question word, hear command and pronoun endings, keep listening after “but / whereas” and use the second listening to check.',
  icon: 'FaHeadphones', iconSet: 'fa6',
});

const site = D.site('F6-L10');
const [T1, T2, T3] = site.listening.script.split(/\n+/);

const slides = D.devLesson('F6-L10', {
  support: `• This is a LISTENING-SKILLS lesson: the website listening has three short texts (directions · transport opinions · a city). Do them as three cycles: predict → listen twice → read the script → answers.
• Core: label every question with its answer TYPE (place / time or number / reason) and answer the place and number questions.
• Develop: all questions + name the phrase that proves each answer.
• Stretch: analyse the distractors across all three texts and write a reusable strategy guide (website writing task).
• Read each text yourself at natural speed, pausing between sentences. Do NOT show the script until after the second listening.
• Prep check: إِعْلَانٌ · تَقْرِيرٌ · مُقَابَلَةٌ · تَفَاصِيلُ · اِزْدِحَامٌ — the three texts are an announcement-style direction, a mini-report and a description.`,
  teach: 'Question words predict the answer; endings and “but” are evidence.',
  wedo: 'Sort the question words, fix the listening habits, then three short listening cycles.',
  next: { nextCode: 'F6-L11', nextTitle: 'F6 Consolidation: Complete Town and Transport Review', nextAr: 'تَرْسِيخُ الوَحْدَةِ السَّادِسَةِ' },
  doNow: {
    questions: [
      q('What does إِعْلَانٌ mean?', ['an announcement', 'an interview', 'a report'], 'Prepared at home (F6-L09).'),
      q('What does اِزْدِحَامٌ mean?', ['congestion / crowds', 'details', 'a platform'], 'Prepared at home (F6-L09).'),
      q('Which introduces a disadvantage?', ['مِنْ عُيُوبِهَا أَنَّ', 'مِنْ مَزَايَاهَا أَنَّ', 'بِصِفَةٍ عَامَّةٍ'], 'F6-L05 and F6-L09.'),
      q('Which means “overall”?', ['بِصِفَةٍ عَامَّةٍ', 'لِذَلِكَ', 'بَيْنَمَا'], 'F6-L09 connectors.'),
      q('Choose “Turn right” to one boy.', ['اِنْعَطِفْ يَمِينًا.', 'اِنْعَطِفِي يَمِينًا.', 'اِنْعَطِفُوا يَسَارًا.'], 'F6-L08: sukūn for one boy.'),
    ],
    keyIdea: { text: 'Read the question first: the question word tells you what to catch.', ar: 'أَيْنَ؟ · مَتَى؟ · كَمْ تَسْتَغْرِقُ؟ · لِمَاذَا؟' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F6-L09. Questions 3–5 retrieve F6-L05/L09 (advantages, connectors) and F6-L08 (commands).',
  },
  routes: {
    core: ['I can predict the answer type from the question word.', 'I can catch a place, a platform and a time.'],
    develop: ['I can use endings as listening evidence.', 'I can name the phrase that proves my answer.'],
    stretch: ['I can reject a distractor after “but” or “whereas”.', 'I can write a reusable listening strategy.'],
  },
  bridge: [
    { ar: 'تَوَقُّعٌ', urdu: 'توقع', tr: 'tawaqqo', en: 'expectation → prediction' },
    { ar: 'سِيَاقٌ', urdu: 'سیاق', tr: 'siyāq', en: 'context (siyāq o sabāq)' },
    { ar: 'تَفْصِيلٌ', urdu: 'تفصیل', tr: 'tafsīl', en: 'detail' },
    { ar: 'تَحَقَّقْ', urdu: 'تحقیق', tr: 'tahqīq', en: 'investigation → check!' },
    { ar: 'إِعْلَانٌ', urdu: 'اعلان', tr: 'eʿlān', en: 'announcement' },
  ],
  bridgeNotes: 'URDU BRIDGE: توقع (expectation), سیاق و سباق (context), تفصیل (detail), تحقیق (research — same root as تَحَقَّقْ, “check / verify”) and اعلان (announcement, as at a railway station!). Students already know most of today’s strategy words.',
  core: ['تَوَقُّعٌ', 'كَلِمَةٌ مِفْتَاحِيَّةٌ', 'مُشَتِّتٌ', 'مَرَّةٌ أُولَى', 'مَرَّةٌ ثَانِيَةٌ', 'تَحَقَّقْ', 'أَيْنَ؟', 'مَتَى؟', 'كَيْفَ؟', 'كَمْ؟', 'لِمَاذَا؟', 'رَصِيفٌ'],
  forms: {
    'مُشَتِّتٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'مُشَتِّتَاتٌ' }, { l: 'the', ar: 'المُشَتِّتُ' }, { l: 'one', ar: 'مُشَتِّتٌ' }] },
    'تَحَقَّقْ': { tag: 'm. · f. · pl.', forms: [{ l: 'group', ar: 'تَحَقَّقُوا' }, { l: 'girl', ar: 'تَحَقَّقِي' }, { l: 'boy', ar: 'تَحَقَّقْ' }] },
    'اِسْتَبْعِدْ': { tag: 'm. · f. · pl.', forms: [{ l: 'group', ar: 'اِسْتَبْعِدُوا' }, { l: 'girl', ar: 'اِسْتَبْعِدِي' }, { l: 'boy', ar: 'اِسْتَبْعِدْ' }] },
    'رَصِيفٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'أَرْصِفَةٌ' }, { l: 'third', ar: 'الرَّصِيفُ الثَّالِثُ' }, { l: 'one', ar: 'رَصِيفٌ' }] },
  },
  vocabNotes: {
    0: 'Strategy words — students need to UNDERSTAND them (they appear in instructions and feedback). The commands تَحَقَّقْ / اِسْتَبْعِدْ / دَوِّنْ follow the F6-L08 endings: -ī for a girl, -ū for a group.',
    1: 'Question words = the prediction tool. The second half of the group (right, left, platform, takes, cheaper …) is the “answer vocabulary” to listen for.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · predict the answer type (website rule 1)', title: 'The question word tells you what to catch', ar: 'تَوَقَّعْ نَوْعَ الإِجَابَةِ',
      cols: [{ label: 'Question', w: 3.2, size: 26 }, { label: 'Catch a …', w: 2.6 }, { label: 'You might hear', w: 6.53, size: 22 }],
      rows: [
        { core: true, cells: [{ ar: 'أَيْنَ؟' }, 'place', { ar: 'بِجَانِبِ المَتْحَفِ · حَتَّى الدَّوَّارِ' }] },
        { core: true, cells: [{ ar: 'مَتَى؟' }, 'time', { ar: 'عِنْدَ السَّاعَةِ العَاشِرَةِ وَالنِّصْفِ' }] },
        { core: true, cells: [{ ar: 'كَمْ تَسْتَغْرِقُ؟' }, 'duration', { ar: 'نِصْفَ سَاعَةٍ · عِشْرِينَ دَقِيقَةً' }] },
        { cells: [{ ar: 'كَمْ ثَمَنُهَا؟' }, 'price', { ar: 'عَشَرَةُ رِيَالَاتٍ' }] },
        { cells: [{ ar: 'مِنْ أَيِّ رَصِيفٍ؟' }, 'number', { ar: 'مِنَ الرَّصِيفِ الثَّالِثِ' }] },
        { core: true, cells: [{ ar: 'لِمَاذَا؟' }, 'reason', { ar: 'لِأَنَّهَا رَخِيصَةٌ · لِأَنَّهُ أَسْرَعُ' }] },
      ],
      ltr: true,
      foot: 'Before each listening: write PL (place), T (time), N (number) or R (reason) next to every question.',
      notes: `GRAMMAR PART 1 — website rule “Predict the information type”: “Before listening, identify whether the answer must be a place, time, transport, number or reason.”
Website overview: “Question words predict the information type, while verb prefixes and suffixes reveal gender, person and reference.”
CAREFUL (website mistake 3): كَمْ is not only “how many” — the noun after it decides: كَمْ ثَمَنُهَا (price), كَمْ تَسْتَغْرِقُ (duration), كَمْ مَحَطَّةً (quantity).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · endings and contrast are evidence (website rules 2–4)', title: 'Small sounds, big clues', ar: 'قَرَائِنُ صَغِيرَةٌ',
      cards: [
        { chip: 'WHO · CORE', color: '1D5FBF', head: 'اِنْعَطِفْ · اِنْعَطِفِي · اِنْعَطِفُوا', big: 'اِنْعَطِفِي يَسَارًا.', en: 'Turn left (to a girl).', clue: 'The ending = who is addressed.' },
        { chip: 'WHICH ITEM · DEVELOP', color: '6B4C9A', head: 'ثَمَنُهُ · ثَمَنُهَا', big: 'كَمْ ثَمَنُهَا؟', en: 'How much is it? (a feminine item, e.g. the ticket)', clue: '-hu = masculine · -hā = feminine' },
        { chip: 'KEEP LISTENING · STRETCH', color: 'B83227', head: 'لٰكِنَّ · بَيْنَمَا', big: 'القِطَارُ سَرِيعٌ، لٰكِنَّهُ غَالٍ.', en: 'The train is fast, but expensive.', clue: 'The judgement comes AFTER “but”.' },
      ],
      error: { text: 'Website common error: one matching word is not enough evidence.', pairs: [['أَتَحَقَّقُ مِنَ الجُمْلَةِ كُلِّهَا', 'أَخْتَارُ أَوَّلَ كَلِمَةٍ أَسْمَعُهَا']] },
      notes: `GRAMMAR PART 2 — website rules “Hear command endings” (ـْ / ـي / ـوا), “Hear possessive price references” (ثَمَنُهُ / ثَمَنُهَا) and “Distinguish contrast from addition” (لٰكِنَّ / بَيْنَمَا / أَيْضًا).
Website example: سَلْمَى تُفَضِّلُ الحَافِلَةَ، بَيْنَمَا عُمَرُ يُفَضِّلُ القِطَارَ. — two people, two opinions: the question tells you WHICH person.
Website common error: “Do not choose an option because you hear one matching word. Confirm the full meaning and listen for contrast or negation.”
Quick-fire: say اِنْعَطِفْ / اِنْعَطِفِي / اِنْعَطِفُوا in random order; students hold up 1 finger (boy), 2 (girl) or 3 (group).`,
    },
  ],
  ruleEx: [
    ['أَيْنَ؟', 'مَتَى؟', 'كَمْ تَسْتَغْرِقُ؟'],
    ['اِنْعَطِفْ', 'اِنْعَطِفِي', 'اِنْعَطِفُوا'],
    ['كَمْ ثَمَنُهُ؟', 'كَمْ ثَمَنُهَا؟'],
    ['القِطَارُ سَرِيعٌ، لٰكِنَّهُ غَالٍ.', 'سَلْمَى تُفَضِّلُ الحَافِلَةَ، بَيْنَمَا عُمَرُ يُفَضِّلُ القِطَارَ.'],
  ],
  quick: [0, 2, 3, 4],
  rest: [5, 6, 7], // quiz 2 (lone ending shapes ـوا / ـي) is covered orally with the finger quick-fire
  ido: {
    title: 'Watch me beat a distractor',
    steps: [
      { head: '1 · Predict', ar: 'لِمَاذَا تُفَضِّلُ لَيْلَى الحَافِلَةَ؟', think: 'Answer type: a REASON, about LAYLA.' },
      { head: '2 · Listen', ar: 'تُفَضِّلُ لَيْلَى الحَافِلَةَ {k|لِأَنَّهَا رَخِيصَةٌ}، بَيْنَمَا يُفَضِّلُ سَامِرٌ القِطَارَ {e|لِأَنَّهُ أَسْرَعُ}.', think: 'Two people, two reasons!' },
      { head: '3 · Reject', ar: '{e|لِأَنَّهُ أَسْرَعُ}', think: '“Faster” is Samer’s reason: distractor.' },
      { head: '4 · Verify', ar: '{k|تُفَضِّلُ لَيْلَى … لِأَنَّهَا رَخِيصَةٌ}', think: 'Second listen: -hā = the bus, Layla.' },
    ],
    legend: ['e', 'k'], legendLabels: { e: 'DISTRACTOR', k: 'EVIDENCE' },
    model: 'السُّؤَالُ يَطْلُبُ سَبَبًا. سَمِعْتُ «{k|لِأَنَّهَا رَخِيصَةٌ}» وَ«{e|لِأَنَّهُ أَسْرَعُ}». اِسْتَبْعَدْتُ «{e|أَسْرَعُ}» لِأَنَّهُ رَأْيُ سَامِرٍ. الإِجَابَةُ: {k|الحَافِلَةُ رَخِيصَةٌ}.',
    modelEn: 'The question asks for a reason. I heard “because it is cheap” and “because it is faster”. I eliminated “faster” because it is Samer’s view. The answer: the bus is cheap.',
    notes: 'I DO (3 min) — think aloud through website listening question 4 (Text 2). This is exactly the website speaking model: “The train was also mentioned, but it was another person’s view.” Do this BEFORE students hear Text 2, using only the sentence on the slide.',
  },
  sorterCats: ['Place', 'Time or number', 'Reason or opinion'],
  sorterNotes: 'Do this sorter BEFORE the three listening texts: it is the prediction routine. Core: say the English question word aloud as you sort.',
  // website mistakes are English descriptions of listening habits: shown as three wrong ANSWERS a careless listener gives
  mistakes: [
    { wrong: 'تُفَضِّلُ لَيْلَى القِطَارَ.', right: 'تُفَضِّلُ لَيْلَى الحَافِلَةَ.', why: 'The train was Samer’s choice.' },
    { wrong: 'اِنْعَطِفْ يَسَارًا يَا مَرْيَمُ.', right: 'اِنْعَطِفِي يَسَارًا يَا مَرْيَمُ.', why: 'A girl: the -ī ending.' },
    { wrong: 'المَوَاصَلَاتُ فِي المَدِينَةِ كَثِيرَةٌ.', right: 'المَوَاصَلَاتُ فِي المَدِينَةِ قَلِيلَةٌ.', why: 'After “but”: transport is limited.' },
  ],
  hints: ['Who prefers which transport?', 'Who is being told to turn?', 'What comes after “but”?'],
  listenParts: [
    {
      title: 'Text 1: Directions to the station', script: T1, q: [0, 1, 2], min: 3,
      extra: [{ prompt: 'What time does the train leave?', options: ['10:30', '10:00', '3:00'], answer: 0, feedback: 'عِنْدَ السَّاعَةِ العَاشِرَةِ وَالنِّصْفِ.' }],
      tip: 'Label first: direction? place? number? time?\nTwo numbers are heard: 3 and 10:30.',
      routes: 'Core: questions 1–3. Develop/Stretch: + question 4 (two numbers: which is the time?).',
      gloss: [
        ['اِذْهَبْ مُسْتَقِيمًا حَتَّى الدَّوَّارِ، ثُمَّ اِنْعَطِفْ يَمِينًا.', 'Go straight on to the roundabout, then turn right.'],
        ['مَحَطَّةُ القِطَارِ بِجَانِبِ المَتْحَفِ.', 'The train station is next to the museum.'],
        ['القِطَارُ يُغَادِرُ مِنَ الرَّصِيفِ الثَّالِثِ عِنْدَ السَّاعَةِ العَاشِرَةِ وَالنِّصْفِ.', 'The train leaves from platform three at half past ten.'],
      ],
    },
    {
      title: 'Text 2: Layla and Samer compare transport', script: T2, q: [3], min: 3,
      extra: [
        { prompt: 'Which transport does Samer prefer?', options: ['the train', 'the bus', 'the metro'], answer: 0, feedback: 'بَيْنَمَا يُفَضِّلُ سَامِرٌ القِطَارَ.' },
        { prompt: 'What do both of them think?', options: ['the metro is comfortable', 'the bus is fast', 'the train is cheap'], answer: 0, feedback: 'كِلَاهُمَا يَرَى أَنَّ المِتْرُو مُرِيحٌ.' },
      ],
      tip: 'Two people, three kinds of transport.\nWho says what? Listen after “whereas”.',
      routes: 'Core: question 1 (Layla’s reason). Develop/Stretch: all three — question 3 needs كِلَاهُمَا (both of them).',
      gloss: [
        ['تُفَضِّلُ لَيْلَى الحَافِلَةَ لِأَنَّهَا رَخِيصَةٌ،', 'Layla prefers the bus because it is cheap,'],
        ['بَيْنَمَا يُفَضِّلُ سَامِرٌ القِطَارَ لِأَنَّهُ أَسْرَعُ.', 'whereas Samer prefers the train because it is faster.'],
        ['كِلَاهُمَا يَرَى أَنَّ المِتْرُو مُرِيحٌ.', 'Both of them think the metro is comfortable.'],
      ],
    },
    {
      title: 'Text 3: A city description', script: T3, q: [4], min: 2,
      extra: [
        { prompt: 'What is the city known for?', options: ['stone buildings and an old market', 'modern towers', 'a big airport'], answer: 0, feedback: 'تَتَمَيَّزُ المَدِينَةُ بِمَبَانِيهَا الحَجَرِيَّةِ وَسُوقِهَا القَدِيمِ.' },
      ],
      tip: 'One advantage, one limitation.\nThe limitation comes after “but”.',
      routes: 'Core: question 2 (known for). Develop/Stretch: both — question 1 comes after وَلٰكِنَّ.',
      gloss: [
        ['تَتَمَيَّزُ المَدِينَةُ بِمَبَانِيهَا الحَجَرِيَّةِ وَسُوقِهَا القَدِيمِ،', 'The city is known for its stone buildings and its old market,'],
        ['وَلٰكِنَّ المَوَاصَلَاتِ فِيهَا قَلِيلَةٌ.', 'but its transport is limited.'],
      ],
    },
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا نَوْعُ المَعْلُومَةِ المَطْلُوبَةِ؟' },
      { route: 'develop', ar: 'مَا الكَلِمَةُ المِفْتَاحِيَّةُ؟' },
      { route: 'develop', ar: 'مَا الخِيَارُ الَّذِي اسْتَبْعَدْتَهُ؟ وَلِمَاذَا؟' },
      { route: 'stretch', ar: 'مَا العِبَارَةُ الَّتِي أَثْبَتَتِ الإِجَابَةَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'السُّؤَالُ يَطْلُبُ مَكَانًا / وَقْتًا / سَبَبًا.' },
      { route: 'develop', ar: 'الكَلِمَةُ المِفْتَاحِيَّةُ هِيَ « ______ ».' },
      { route: 'develop', ar: 'اِسْتَبْعَدْتُ ______ لِأَنَّ ______ .' },
      { route: 'stretch', ar: 'سَمِعْتُ « ______ »، لِذَلِكَ اخْتَرْتُ ______ .' },
    ],
    modelEn: ['Why did you choose “the bus”?', 'Because I heard “cheap”, and the question asks for the reason. The train was also mentioned, but it was another person’s view.'],
    notes: 'Website prompts “Explain your listening evidence” and model dialogue (لِمَاذَا اخْتَرْتَ «الحَافِلَةَ»؟ — لِأَنِّي سَمِعْتُ «رَخِيصَةٌ» … — مَا المُشَتِّتُ؟ — ذُكِرَ القِطَارُ أَيْضًا، وَلٰكِنَّهُ كَانَ رَأْيَ شَخْصٍ آخَرَ.). Keep it short: students explain HOW they listened. Core may answer with one Arabic key word + English explanation.',
  },
  write: {
    core: { amount: '3 questions', how: 'For three questions: the answer type and the key word you heard.' },
    develop: { amount: '6 sentences', how: 'Website task: three questions, the phrase that proves each answer and one distractor you rejected.' },
    stretch: { amount: '80–100 words', how: 'A reusable strategy guide across all three texts, with a next-step target.' },
  },
  frames: {
    core: [
      { en: 'Question 1 asks for a place.', ar: 'السُّؤَالُ الأَوَّلُ يَطْلُبُ مَكَانًا.' },
      { en: 'I heard “…”.', ar: 'سَمِعْتُ « ______ ».' },
      { en: 'The answer is …', ar: 'الإِجَابَةُ: ______ .' },
      { en: 'Question 2 asks for a number.', ar: 'السُّؤَالُ الثَّانِي يَطْلُبُ رَقْمًا.' },
    ],
    develop: [
      { en: 'Question … asks for … because it starts with …', ar: 'السُّؤَالُ ______ يَطْلُبُ ______ لِأَنَّهُ يَبْدَأُ بِـ ______ .' },
      { en: 'I heard “…”, so I chose …', ar: 'سَمِعْتُ « ______ »، لِذَلِكَ اخْتَرْتُ ______ .' },
      { en: 'I did not choose … because …', ar: 'لَمْ أَخْتَرْ ______ لِأَنَّ ______ .' },
      { en: 'In future I will read the questions first.', ar: 'فِي المُسْتَقْبَلِ سَأَقْرَأُ الأَسْئِلَةَ أَوَّلًا.' },
    ],
    bank: ['يَطْلُبُ', 'مَكَانًا', 'وَقْتًا', 'رَقْمًا', 'سَبَبًا', 'سَمِعْتُ', 'اِخْتَرْتُ', 'اِسْتَبْعَدْتُ', 'مُشَتِّتٌ', 'لٰكِنَّ', 'بَيْنَمَا', 'لِذَلِكَ'],
  },
  stretch: [
    ['كَانَ المُشَتِّتُ قَوِيًّا لِأَنَّ …', 'the distractor was strong because …'],
    ['فِي المَرَّةِ الثَّانِيَةِ تَحَقَّقْتُ مِنْ …', 'the second time I checked …'],
    ['بَعْدَ «لٰكِنَّ» تَغَيَّرَ المَعْنَى', 'after “but” the meaning changed'],
    ['سَأَسْتَمِعُ إِلَى كَلِمَاتِ التَّضَادِّ', 'I will listen for contrast words'],
  ],
  modelEn: 'The first question asks for a place because it starts with “where”. I heard “next to the museum”, so I chose the museum. The second question asks for a duration. I heard “half an hour” and I did not choose “eight o’clock” because it is the departure time. In future I will read the questions first and listen for contrast words like “but”.',
  find: ['an answer type', 'the evidence phrase', 'a rejected distractor', 'a future strategy'],
  modelNotes: 'Evidence: يَطْلُبُ مَكَانًا لِأَنَّهُ يَبْدَأُ بِـ «أَيْنَ» · سَمِعْتُ «بِجَانِبِ المَتْحَفِ» · لَمْ أَخْتَرْ «السَّاعَةَ الثَّامِنَةَ» لِأَنَّهَا وَقْتُ المُغَادَرَةِ · سَأَقْرَأُ الأَسْئِلَةَ أَوَّلًا. NOTE: the website model refers to “half an hour” and “eight o’clock”, which are not in today’s three texts — present it as a model of the LANGUAGE of a strategy record, not as answers to today’s questions.',
  selfCheck: [
    { route: 'core', text: 'I labelled each question before listening.' },
    { route: 'core', text: 'I wrote the key word I heard.' },
    { route: 'develop', text: 'I named the phrase that proves each answer.' },
    { route: 'develop', text: 'I rejected one distractor with a reason.' },
    { route: 'stretch', text: 'My strategy has a clear next step.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['قَبْلَ الاِسْتِمَاعِ', 'before listening'], ['حَدِّدْ نَوْعَ المَعْلُومَةِ', 'identify the type of information'], ['فَابْحَثْ عَنْ مَكَانٍ', 'then look for a place'], ['فَتَوَقَّعْ عَدَدًا', 'then expect a number'], ['وَحْدَةَ زَمَنٍ', 'a unit of time'],
    ['اِفْهَمِ السِّيَاقَ', 'understand the context'], ['تَحَقَّقْ مِنَ التَّفْصِيلِ', 'check the detail'], ['اِسْتَبْعِدِ المُشَتِّتَاتِ', 'eliminate the distractors'], ['لَا تَخْتَرْ', 'do not choose'], ['كَلِمَةً وَاحِدَةً فَقَطْ', 'only one word'],
  ],
  prep: {
    words: [['مُرَاجَعَةٌ شَامِلَةٌ', 'a complete review', 'pl. مُرَاجَعَاتٌ'], ['تَحْلِيلُ الأَخْطَاءِ', 'error analysis', 'sing. خَطَأٌ'], ['نُقْطَةُ قُوَّةٍ', 'a strength', 'pl. نِقَاطُ قُوَّةٍ'], ['أَوْلَوِيَّةٌ', 'a priority', 'pl. أَوْلَوِيَّاتٌ'], ['دَلِيلٌ', 'evidence', 'pl. أَدِلَّةٌ']],
    questionEn: 'Look back at F6-L01 to F6-L10: which grammar point do you find hardest? Bring one example of a mistake you made.',
    questionAr: 'أَصْعَبُ قَاعِدَةٍ لِي هِيَ …',
    homework: {
      core: 'Website F6-L10: redo the listening mission and the sorter; learn the five review words.',
      develop: 'Website writing task: a listening strategy record for three questions with the evidence for each.',
      stretch: 'A reusable listening strategy guide (80–100 words) with one distractor from each text.',
    },
    wordsSource: 'The five words come from the website F6-L11 vocabulary (review and reflection before the unit assessment).',
  },
  remember: 'Remember: read the question first — the question word tells you what to catch, and the answer often comes after “but”.',
});

module.exports = { meta, slides };
