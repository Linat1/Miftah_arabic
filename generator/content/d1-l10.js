'use strict';
/* D1-L10 · Listening — Daily Routine and Time Details — website: Pathways › Development › D1 › D1-L10 (listening strategies: prediction, anchors, person tracking, contrast, negation, synonyms, second-listen verification). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D1')({
  n: 10, fileTitle: 'Listening_Routine_and_Time', chip: 'Listening Skills',
  title: 'Listening — Daily Routine and Time Details', arabic: 'الاِسْتِمَاعُ — تَفَاصِيلُ الرُّوتِينِ اليَوْمِيِّ وَالوَقْتِ',
  focus: 'Listen like an examiner: predict the type of answer, link every time to its event, keep listening after “but”, catch “not”, and use the second listening to check.',
  icon: 'FaHeadphones', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const site = D.site('D1-L10');
const [T1, T2, T3] = site.listening.script.split(/\n\n/);

const slides = D.devLesson('D1-L10', {
  support: `• This is a LISTENING-SKILLS lesson: the three-part website listening is the main task, done as three short cycles (predict → listen twice → read the script → answers).
• Core: predict the answer TYPE for each question (a time? a person? how often?) and answer the time questions. Develop: all questions + explain one distractor. Stretch: the performance log (reading) and a written reflection with a measurable target.
• Read each text yourself at natural speed, with a pause between sentences. Do NOT show the script until after the second listening.
• Urdu bridge: توقع، تحقیق، ملاحظہ، مقابلہ، انتخاب.`,
  teach: 'Five listening traps and how to beat them.',
  wedo: 'Three short listening cycles with the script.',
  next: { nextCode: 'D1-L11', nextTitle: 'Speaking and Writing — My Daily Routine', nextAr: 'التَّحَدُّثُ وَالكِتَابَةُ' },
  flexGroups: [2],
  doNow: {
    questions: [
      q('What does أَتَوَقَّعُ mean?', ['I predict', 'I focus', 'I correct'], 'Prepared at home.'),
      q('What is a مُشَتِّتٌ in a listening test?', ['a distractor', 'a key word', 'the script'], 'Prepared at home.'),
      q('Which gives a duration?', ['مِنَ الرَّابِعَةِ إِلَى الخَامِسَةِ', 'فِي الرَّابِعَةِ', 'يَوْمَ الخَمِيسِ'], 'D1-L09: from … to …'),
      q('In يَعُودُ أَخُوهَا, who returns?', ['her brother', 'she', 'I'], 'D1-L09: ya- = he.'),
      q('Which is 4:45?', ['الخَامِسَةُ إِلَّا الرُّبْعَ', 'الرَّابِعَةُ إِلَّا الرُّبْعَ', 'الرَّابِعَةُ وَالرُّبْعُ'], 'D1-L02: the next hour with إِلَّا.', { ar: '٤:٤٥', arBig: true }),
    ],
    keyIdea: { text: 'Hearing a word is not enough. Check: right person? right event? did “but” or “not” change it?', ar: 'تَسْتَيْقِظُ فِي السَّادِسَةِ، {k|وَلٰكِنَّهَا لَا} تَخْرُجُ {k|حَتَّى} السَّابِعَةِ وَالرُّبْعِ.' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home. Questions 3–5 retrieve D1-L09 (reading signals) and D1-L02 (time with إِلَّا).',
  },
  routes: {
    core: ['I can predict whether an answer is a time, a person or a frequency.', 'I can link a time to the right event.'],
    develop: ['I can explain why a distractor is wrong.', 'I can keep listening after “but” and catch “not”.'],
    stretch: ['I can recognise synonyms and paraphrase.', 'I can set a precise listening target for next time.'],
  },
  bridge: [
    { ar: 'التَّوَقُّعُ', urdu: 'توقع', tr: 'tawaqqo', en: 'expectation, prediction' },
    { ar: 'تَحَقُّقٌ', urdu: 'تحقیق', tr: 'tahqīq', en: 'investigation → checking' },
    { ar: 'أُلَاحِظُ', urdu: 'ملاحظہ', tr: 'mulāhaza', en: 'observation → I notice' },
    { ar: 'أُقَارِنُ', urdu: 'مقابلہ', tr: 'muqābla', en: 'Urdu: contest · Arabic: comparison' },
    { ar: 'الاِسْتِمَاعُ الاِنْتِقَائِيُّ', urdu: 'انتخاب', tr: 'intikhāb', en: 'choice, selection' },
  ],
  bridgeNotes: 'URDU BRIDGE: توقع (expectation) → التَّوَقُّعُ / أَتَوَقَّعُ. تحقیق (research, investigation) shares the root of تَحَقُّقٌ (verification). ملاحظہ → أُلَاحِظُ. CAREFUL: Urdu مقابلہ = a competition; Arabic المُقَابَلَةُ = an interview or a contrast, and أُقَارِنُ = I compare. انتخاب (election, selection) is related to اِنْتِقَائِيٌّ in meaning (selective).',
  core: ['التَّوَقُّعُ', 'كَلِمَةٌ مِفْتَاحِيَّةٌ', 'مُشَتِّتٌ', 'تَحَقُّقٌ', 'التَّفْصِيلُ الدَّقِيقُ', 'أُرَكِّزُ عَلَى', 'أَتَوَقَّعُ', 'أَسْتَبْعِدُ', 'أَتَثَبَّتُ مِنْ'],
  forms: {
    'أُرَكِّزُ عَلَى': { tag: 'I · he · she', forms: [{ l: 'she', ar: 'تُرَكِّزُ' }, { l: 'he', ar: 'يُرَكِّزُ' }, { l: 'I', ar: 'أُرَكِّزُ' }] },
    'أَتَوَقَّعُ': { tag: 'I · he · she', forms: [{ l: 'she', ar: 'تَتَوَقَّعُ' }, { l: 'he', ar: 'يَتَوَقَّعُ' }, { l: 'I', ar: 'أَتَوَقَّعُ' }] },
    'أُلَاحِظُ': { tag: 'I · he · she', forms: [{ l: 'she', ar: 'تُلَاحِظُ' }, { l: 'he', ar: 'يُلَاحِظُ' }, { l: 'I', ar: 'أُلَاحِظُ' }] },
    'أَسْتَبْعِدُ': { tag: 'I · he · she', forms: [{ l: 'she', ar: 'تَسْتَبْعِدُ' }, { l: 'he', ar: 'يَسْتَبْعِدُ' }, { l: 'I', ar: 'أَسْتَبْعِدُ' }] },
    'مُشَتِّتٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'مُشَتِّتَاتٌ' }, { l: 'the', ar: 'المُشَتِّتُ' }, { l: 'one', ar: 'مُشَتِّتٌ' }] },
    'كَلِمَةٌ مِفْتَاحِيَّةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'كَلِمَاتٌ' }, { l: 'key', ar: 'مِفْتَاحٌ' }, { l: 'one', ar: 'كَلِمَةٌ' }] },
  },
  vocabNotes: { 0: 'Strategy words — students need to UNDERSTAND them (they appear in reflection and in website feedback), not produce all of them. مِفْتَاحٌ = key, so كَلِمَةٌ مِفْتَاحِيَّةٌ = a key word.', 2: 'Synonym pairs (FLEX): exam listening often uses a DIFFERENT word from the question — e.g. the question says مُتْعَبٌ, the speaker says مُرْهَقٌ.' },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · listening cues and their traps (website table)', title: 'What to listen for — and the trap', ar: 'عَلَامَاتُ الاِسْتِمَاعِ',
      cols: [{ label: 'Cue', w: 2.6, size: 26 }, { label: 'Example', w: 4.4, size: 22 }, { label: 'Listen for', w: 2.6 }, { label: 'The trap', w: 2.73 }],
      rows: [
        { core: true, cells: [{ ar: '{e|تَـ} / {w|يَـ} / {k|أَـ}' }, P('{e|تَ}سْتَيْقِظُ مَرْيَمُ · {w|يَ}عُودُ سَامِرٌ', 'Maryam wakes · Samer returns'), 'WHO does it', 'mixing up two people'] },
        { core: true, cells: [{ ar: 'فِي + الوَقْتِ' }, P('تَسْتَيْقِظُ {k|فِي السَّادِسَةِ} … تَخْرُجُ {k|حَتَّى السَّابِعَةِ وَالرُّبْعِ}', 'wakes at 6 … leaves at 7:15'), 'which EVENT the time belongs to', 'choosing the first number heard'] },
        { cells: [{ ar: 'وَلٰكِنَّ · أَمَّا' }, P('اِقْتَرَحَ الرَّابِعَةَ … {k|أَمَّا} سَلْمَى {k|فَلَا} …', 'he suggested four … as for Salma …'), 'the CORRECTED information', 'stopping too early'] },
        { cells: [{ ar: 'لَا · لَمْ · إِلَّا' }, P('{k|لَا} أَتَمَرَّنُ يَوْمَ الجُمُعَةِ.', 'I do not train on Friday.'), 'NEGATION', 'missing the reversal'] },
      ],
      foot: 'Before each listening: write T (time), P (person), F (frequency) or R (reason) next to every question.',
      notes: `GRAMMAR PART 1 — website table “Cue · What to listen for · Risk” and rules “Use person prefixes to track the speaker”, “Use time frames as anchors”, “Listen beyond the contrast marker”.
Website teaching point: “Do not choose an option merely because you heard its vocabulary. Confirm that the detail belongs to the correct person, event and time.”
Prediction routine (Core): label every question T / P / F / R before listening — this is the “anchor” in the website vocabulary (مَرْسَاةٌ سَمْعِيَّةٌ).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · three small words that change the answer (website rules) · Develop / Stretch', title: 'But, not, only', ar: 'وَلٰكِنَّ · لَا / لَمْ · إِلَّا',
      cards: [
        { chip: 'KEEP LISTENING · DEVELOP', color: '1D5FBF', head: 'وَلٰكِنَّ', big: 'كُنْتُ أَذْهَبُ مَشْيًا، وَلٰكِنَّنِي الآنَ أَذْهَبُ بِالحَافِلَةِ.', en: 'I used to walk, but now I go by bus.', clue: 'The answer comes AFTER “but”.' },
        { chip: 'REVERSAL · CORE', color: 'B83227', head: 'لَا / لَمْ', big: 'لَمْ يَتَغَيَّرْ مَوْعِدِي.', en: 'My appointment did not change.', clue: 'One small word = the opposite.' },
        { chip: 'EXCEPT / ONLY · STRETCH', color: '6B4C9A', head: 'إِلَّا · مَا عَدَا', big: 'أَتَمَرَّنُ كُلَّ يَوْمٍ مَا عَدَا يَوْمَ الجُمُعَةِ.', en: 'I train every day except Friday.', clue: 'Not only “to” on the clock!' },
      ],
      error: { text: 'Website common error: do not stop listening at “but”.', pairs: [['أَسْتَمِرُّ بَعْدَ وَلٰكِنَّ', 'أَتَوَقَّفُ عِنْدَ وَلٰكِنَّ']] },
      notes: `GRAMMAR PART 2 — website rules “Listen beyond the contrast marker” and “Notice negation and limitation” (إِلَّا may mean “except / only” as well as “to” in clock time: لَا أَسْتَعْمِلُ الهَاتِفَ إِلَّا لِمُرَاجَعَةِ الوَقْتِ = I only use the phone to check the time). Examples from the website mission rounds 2 and 3.
Quick-fire: the teacher says a sentence with لَا / وَلٰكِنَّ; students show thumbs up / down for “Does he train on Friday?”`,
    },
  ],
  quick: [0, 2, 3, 5],
  rest: [4, 6, 7], // quiz 2 (“which prefix is I?”) shows lone letter shapes on a slide — covered orally instead
  ido: {
    title: 'Watch me beat a distractor',
    steps: [
      { head: '1 · Predict', ar: 'مَتَى تَخْرُجُ مَرْيَمُ مِنَ البَيْتِ؟', think: 'Answer type: a TIME for LEAVING.' },
      { head: '2 · Listen', ar: 'تَسْتَيْقِظُ {e|فِي السَّادِسَةِ}، وَلٰكِنَّهَا لَا تَخْرُجُ {k|حَتَّى السَّابِعَةِ وَالرُّبْعِ}.', think: 'Two times! Which is leaving?' },
      { head: '3 · Reject', ar: '{e|السَّادِسَةُ} = وَقْتُ الاِسْتِيقَاظِ ✗', think: '6:00 is the distractor.' },
      { head: '4 · Verify', ar: '{k|تَخْرُجُ … حَتَّى السَّابِعَةِ وَالرُّبْعِ} ✓', think: 'Second listen: the verb “leaves”.' },
    ],
    legend: ['e', 'k'], legendLabels: { e: 'DISTRACTOR', k: 'EVIDENCE' },
    model: 'السُّؤَالُ: مَتَى تَخْرُجُ مَرْيَمُ؟ ← أَتَوَقَّعُ وَقْتًا. ← سَمِعْتُ {e|السَّادِسَةَ} وَ{k|السَّابِعَةَ وَالرُّبْعَ}. ← أَسْتَبْعِدُ {e|السَّادِسَةَ} لِأَنَّهَا وَقْتُ الاِسْتِيقَاظِ. ← الجَوَابُ: {k|السَّابِعَةُ وَالرُّبْعُ}.',
    modelEn: 'Question: When does Maryam leave? → I predict a time. → I heard six and quarter past seven. → I eliminate six because it is the wake-up time. → Answer: quarter past seven.',
    notes: 'I DO (3 min) — the teacher thinks aloud through website listening question 2 (and Q8, the distractor question). This is exactly the mistake Sara makes in the website performance log (reading text).',
  },
  modelsNotes: '• Core: copy sentence 1 (my listening target). • Develop: copy sentences 2 and 3. • Stretch: write your own strategy sentence with أَسْتَبْعِدُ or أَتَثَبَّتُ مِنْ.',
  sorterCats: ['Time, order or duration', 'Reason or contrast', 'Negation or changed detail'],
  sorterNotes: 'Website instruction: use the cue to PREDICT what must be caught in the listening. Do this sorter BEFORE the three listening texts.',
  hints: ['Hearing a word ≠ the answer. What must you check?', 'Several times are mentioned. What do you link each one to?', 'What often comes AFTER “but”?'],
  listenParts: [
    {
      title: 'Text 1: Maryam’s morning', script: T1, q: [0, 1, 7], min: 3,
      tip: 'Before listening, write T next to each question.\nTwo times will be heard: wake? leave? bus?',
      routes: 'Core: questions 1 and 2. Develop/Stretch: + question 3 (the distractor).',
      gloss: [
        ['النَّصُّ الأَوَّلُ: تَسْتَيْقِظُ مَرْيَمُ فِي السَّادِسَةِ،', 'Text 1: Maryam wakes up at six,'],
        ['وَلٰكِنَّهَا لَا تَخْرُجُ مِنَ البَيْتِ حَتَّى السَّابِعَةِ وَالرُّبْعِ.', 'but she does not leave the house until quarter past seven.'],
        ['تَتَنَاوَلُ الإِفْطَارَ دَائِمًا، وَتَسْتَقِلُّ الحَافِلَةَ فِي السَّابِعَةِ وَالنِّصْفِ.', 'She always has breakfast, and she takes the bus at half past seven.'],
      ],
    },
    {
      title: 'Text 2: Omar and Salma make a plan', script: T2, q: [2], min: 3,
      extra: [
        { prompt: 'What time did Omar first suggest?', options: ['4:00', '4:30', '4:45'], answer: 0, feedback: 'اِقْتَرَحَ عُمَرُ السَّاعَةَ الرَّابِعَةَ — a suggestion, not the final time.' },
        { prompt: 'Why can’t Salma meet at four?', options: ['her lesson ends at 4:30', 'she is tired', 'she is at the club'], answer: 0, feedback: 'لَا تَنْتَهِي مِنْ دَرْسِهَا قَبْلَ الرَّابِعَةِ وَالنِّصْفِ.' },
      ],
      tip: 'Three times are heard.\nWait for the phrase “they agreed on”.',
      routes: 'Core: question 2 (the first suggestion). Develop/Stretch: all three — question 1 is the FINAL agreed time.',
      gloss: [
        ['النَّصُّ الثَّانِي: يَلْتَقِي عُمَرُ وَسَلْمَى يَوْمَ السَّبْتِ. اِقْتَرَحَ عُمَرُ السَّاعَةَ الرَّابِعَةَ،', 'Text 2: Omar and Salma are meeting on Saturday. Omar suggested four o’clock,'],
        ['أَمَّا سَلْمَى فَلَا تَنْتَهِي مِنْ دَرْسِهَا قَبْلَ الرَّابِعَةِ وَالنِّصْفِ،', 'but Salma does not finish her lesson before half past four,'],
        ['لِذٰلِكَ اِتَّفَقَا عَلَى الخَامِسَةِ إِلَّا الرُّبْعَ.', 'so they agreed on quarter to five.'],
      ],
    },
    {
      title: 'Text 3: Samer’s afternoon', script: T3, q: [3, 4, 5, 6], min: 3,
      tip: 'Label: T, order, F, what day?\nListen past “as for …”.',
      routes: 'Core: questions 1 and 3. Develop/Stretch: all four.',
      gloss: [
        ['النَّصُّ الثَّالِثُ: يَعُودُ سَامِرٌ إِلَى البَيْتِ فِي الثَّالِثَةِ وَعَشْرِ دَقَائِقَ.', 'Text 3: Samer returns home at ten past three.'],
        ['يَسْتَرِيحُ نِصْفَ سَاعَةٍ، ثُمَّ يُكْمِلُ وَاجِبَهُ قَبْلَ أَنْ يَذْهَبَ إِلَى التَّمْرِينِ.', 'He rests for half an hour, then finishes his homework before he goes to training.'],
        ['يَتَمَرَّنُ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ،', 'He trains three times a week;'],
        ['أَمَّا يَوْمُ الخَمِيسِ فَيَبْقَى فِي البَيْتِ وَيُسَاعِدُ أُسْرَتَهُ.', 'as for Thursday, he stays at home and helps his family.'],
      ],
    },
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا الكَلِمَةُ المِفْتَاحِيَّةُ الَّتِي سَاعَدَتْكَ؟' },
      { route: 'develop', ar: 'أَيُّ مُشَتِّتٍ كَانَ أَقْوَى؟ وَلِمَاذَا؟' },
      { route: 'develop', ar: 'مَاذَا غَيَّرْتَ فِي الاِسْتِمَاعِ الثَّانِي؟' },
      { route: 'stretch', ar: 'مَا الهَدَفُ المُحَدَّدُ الَّذِي سَتُطَوِّرُهُ فِي الاِسْتِمَاعِ القَادِمِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'الكَلِمَةُ المِفْتَاحِيَّةُ كَانَتْ « ______ ».' },
      { route: 'develop', ar: 'كَانَ المُشَتِّتُ ______ لِأَنَّ ______ .' },
      { route: 'develop', ar: 'فِي الاِسْتِمَاعِ الثَّانِي ، تَثَبَّتُّ مِنْ ______ .' },
      { route: 'stretch', ar: 'هَدَفِي القَادِمُ أَنْ ______ .' },
    ],
    modelEn: ['Why didn’t you choose six?', 'Because six was the wake-up time, whereas the question was about the leaving time. I waited for the verb “leaves”.'],
    notes: 'Website reflection prompts. Keep it short and supportive — this is metacognition: students explain HOW they listened. Core may answer in one Arabic key word + English explanation.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Rebuild Samer’s afternoon (Text 3) from your answers: time, order, how often, Thursday.' },
    develop: { amount: '8 sentences', how: 'Rebuild one speaker’s routine and explain ONE distractor you rejected and why.' },
    stretch: { amount: '100–120 words', how: 'Website task: reconstruct a routine, explain two distractors, say what changed on the second listen and set a measurable target.' },
  },
  frames: {
    core: [
      { en: 'Samer returns home at …', ar: 'يَعُودُ سَامِرٌ إِلَى البَيْتِ فِي ______ .' },
      { en: 'He rests for …', ar: 'يَسْتَرِيحُ ______ .' },
      { en: 'Then he finishes his homework.', ar: 'ثُمَّ يُكْمِلُ وَاجِبَهُ.' },
      { en: 'He trains … a week.', ar: 'يَتَمَرَّنُ ______ فِي الأُسْبُوعِ.' },
      { en: 'On Thursday he …', ar: 'أَمَّا يَوْمُ الخَمِيسِ فَـ ______ .' },
    ],
    develop: [
      { en: 'I focused on …', ar: 'رَكَّزْتُ عَلَى ______ .' },
      { en: 'The distractor was … because …', ar: 'كَانَ المُشَتِّتُ ______ لِأَنَّ ______ .' },
      { en: 'I eliminated … because …', ar: 'اِسْتَبْعَدْتُ ______ لِأَنَّ ______ .' },
      { en: 'On the second listen I verified …', ar: 'فِي الاِسْتِمَاعِ الثَّانِي تَثَبَّتُّ مِنْ ______ .' },
      { en: 'My next target is to …', ar: 'هَدَفِي القَادِمُ أَنْ ______ .' },
    ],
    bank: ['أَتَوَقَّعُ', 'أُرَكِّزُ عَلَى', 'أَسْتَبْعِدُ', 'أَتَثَبَّتُ مِنْ', 'مُشَتِّتٌ', 'كَلِمَةٌ مِفْتَاحِيَّةٌ', 'الوَقْتُ', 'الحَدَثُ', 'وَلٰكِنَّ', 'لَا / لَمْ', 'اِتَّفَقَا عَلَى', 'هَدَفِي'],
  },
  stretch: [
    ['اِخْتَرْتُ السَّادِسَةَ لِأَنَّهَا أَوَّلُ وَقْتٍ سَمِعْتُهُ', 'I chose six because it was the first time I heard'],
    ['وَلٰكِنَّ السُّؤَالَ كَانَ عَنْ وَقْتِ الخُرُوجِ', 'but the question was about the leaving time'],
    ['فَانْتَظَرْتُ عِبَارَةَ «اِتَّفَقَا عَلَى»', 'so I waited for the phrase “they agreed on”'],
    ['رَبَطْتُ «ثَلَاثَ مَرَّاتٍ» بِالتَّمْرِينِ', 'I linked “three times” to training'],
    ['سَأَكْتُبُ كُلَّ وَقْتٍ مَعَ الحَدَثِ الَّذِي يَصِفُهُ', 'I will write each time with the event it describes'],
  ],
  modelEn: 'In the listening practice I managed to track the times in Text 2, because I waited for the phrase “they agreed on” before choosing. But I made a mistake in the first question: I chose the wake-up time instead of the leaving time. The distractor was strong because six was mentioned first. On the second listening I focused on the verb “leaves” and corrected my answer. My next target is to link every number to the correct event and to check every answer once.',
  find: ['a strategy verb', 'the distractor and why it was strong', 'what changed on the second listen', 'a measurable target'],
  modelNotes: 'Evidence: رَكَّزْتُ عَلَى / اِنْتَظَرْتُ / صَحَّحْتُ · كَانَ المُشَتِّتُ قَوِيًّا لِأَنَّ السَّادِسَةَ ذُكِرَتْ أَوَّلًا · فِي الاِسْتِمَاعِ الثَّانِي رَكَّزْتُ عَلَى الفِعْلِ «تَخْرُجُ» · هَدَفِي القَادِمُ أَنْ أَرْبِطَ كُلَّ رَقْمٍ بِالحَدَثِ الصَّحِيحِ.',
  selfCheck: [
    { route: 'core', text: 'I labelled each question (time, person, how often) before listening.' },
    { route: 'core', text: 'My times match the right event.' },
    { route: 'develop', text: 'I kept listening after “but” and “as for”.' },
    { route: 'develop', text: 'I can explain one distractor I rejected.' },
    { route: 'stretch', text: 'My target is specific and measurable.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['بَعْدَ التَّدْرِيبِ', 'after the practice'], ['اِخْتَرْتُ', 'I chose'], ['أَوَّلُ وَقْتٍ سَمِعْتُهُ', 'the first time I heard'], ['وَقْتِ الخُرُوجِ', 'the leaving time'], ['المُتَحَدِّثَانِ', 'the two speakers'],
    ['فَانْتَظَرْتُ', 'so I waited for'], ['عِبَارَةَ', 'the phrase'], ['رَبَطْتُ', 'I linked'], ['لَمْ أَخْتَرْ', 'I did not choose'], ['سَأَكْتُبُ', 'I will write'],
  ],
  prep: {
    words: [['طَلَاقَةٌ', 'fluency', ''], ['دِقَّةٌ', 'accuracy', ''], ['تَبْرِيرٌ', 'a justification', ''], ['عَلَى سَبِيلِ المِثَالِ', 'for example', ''], ['مَعَ ذٰلِكَ', 'however, nevertheless', '']],
    questionEn: 'Prepare a 30-second answer: “Describe your daily routine.” Include one reason and one example.',
    questionAr: 'صِفْ رُوتِينَكَ اليَوْمِيَّ.',
    homework: {
      core: 'Website D1-L10: redo the listening mission and the sorter “Listening evidence decoder”.',
      develop: 'Website mission rounds 1–6: for each, write the Arabic evidence.',
      stretch: 'Website writing task: 100–120-word listening reflection with a measurable target.',
    },
    wordsSource: 'The five words come from the website D1-L11 vocabulary (speaking and reflection, answer extension).',
  },
  remember: 'Remember: link every time to its event — and keep listening after “but”.',
});

module.exports = { meta, slides };
