'use strict';
/* D5-L10 · Listening — Sport, Leisure and Past Events — website: Pathways › Development › D5 › D5-L10 (hearing tense: past = suffix, present = prefix,
 * future = سَـ / سَوْفَ, كَانَ + present = past habit, tense-only distractors; annotate P / N / F before listening).
 * Listening-skills lesson. Website vocabulary, rules, quiz, sorter, listening, transcript reading, speaking and writing used as published; the website
 * “common mistakes” are written as English listening habits, so the repair slide uses three Arabic sentence pairs built from the same three points;
 * English added to the patterns and speaking model. The website visual game repeats D5-L02, so it is skipped. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D5')({
  n: 10, fileTitle: 'Listening_Sport_Leisure_Past_Events', chip: 'Listening Skills',
  title: 'Listening — Sport, Leisure and Past Events', arabic: 'الاِسْتِمَاعُ — الرِّيَاضَةُ وَالتَّرْفِيهُ وَالأَحْدَاثُ المَاضِيَةُ',
  focus: 'Hear the TENSE in fast speech: past = an ending (تَدَرَّبْتُ), present = a prefix (أَتَدَرَّبُ), future = سَـ / سَوْفَ (سَأَتَدَرَّبُ), used to = كَانَ يَـ … — and don’t fall for distractors that keep the words but change the time.',
  icon: 'FaHeadphones', iconSet: 'fa6',
});

const site = D.site('D5-L10');
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D5-L10', {
  support: `• This is a LISTENING-SKILLS lesson: the website text is one athlete across three tenses (childhood · last year · now · next week · in years).
• Before listening, students mark every question P / N / F (past / now / future) — the website strategy. Then they listen for that verb form, not the topic.
• Core: questions 1, 2 and 3 + sort ten verbs P / N / F. Develop: all questions, justifying two from the verb form. Stretch: the website ~70-word summary in the third person, every verb in the tense the text used.
• Read the text yourself at natural speed. Do NOT show the script until after the second listening.`,
  teach: 'Suffix, prefix, sa- / sawfa, kāna ya-: four sounds of time.',
  wedo: 'Sort verbs by tense, fix tense slips, then the athlete’s story.',
  next: { nextCode: 'D5-L11', nextTitle: 'D5 Consolidation — Past Tense Mastery and Speaking Preparation', nextAr: 'تَرْسِيخُ الوَحْدَةِ — إِتْقَانُ الفِعْلِ المَاضِي' },
  objectives: ['Hear past verbs from their ending (تَدَرَّبْتُ · تَدَرَّبْنَا).', 'Hear present verbs from their prefix and habit words (أَتَدَرَّبُ عَادَةً).', 'Hear the future marker سَـ / سَوْفَ and كَانَ + present.', 'Avoid distractors that keep the words but change the tense.'],
  rulesAr: 'تَمْيِيزُ الزَّمَنِ فِي الكَلَامِ المُتَّصِلِ',
  ruleEx: [null, null, null, ['فَازَ بِالبُطُولَةِ · سَيَفُوزُ بِالبُطُولَةِ', 'تَدَرَّبَ أَمْسِ · يَتَدَرَّبُ عَادَةً']],
  flexGroups: [],
  doNow: {
    questions: [
      q('What does عَادَةً mean?', ['usually', 'tomorrow', 'yesterday'], 'Prepared at home (D5-L09).'),
      q('What does الأُسْبُوعَ القَادِمَ mean?', ['next week', 'last week', 'every week'], 'Prepared at home (D5-L09).'),
      q('What does المُلْهِيَاتُ mean?', ['distractors', 'details', 'fast speech'], 'Prepared at home (D5-L09).'),
      q('Choose the accurate sentence.', ['أَمَّا الآنَ فَأُمَارِسُ السِّبَاحَةَ.', 'أَمَّا الآنَ مَارَسْتُ السِّبَاحَةَ.', 'أَمَّا الآنَ سَأُمَارِسُ أَمْسِ.'], 'D5-L09.'),
      q('كُنْتُ أَلْعَبُ means …', ['I used to play', 'I will play', 'I play now'], 'D5-L05: kāna + present.'),
    ],
    keyIdea: { text: 'Same activity, different time: listen to the START and the END of the verb.', ar: '{k|تَدَرَّبْتُ} أَمْسِ · {e|أَتَدَرَّبُ} عَادَةً · {w|سَأَتَدَرَّبُ} غَدًا' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D5-L09. Questions 4–5 retrieve D5-L09 (أَمَّا الآنَ فَـ) and D5-L05 (كَانَ + present).',
  },
  routes: {
    core: ['I can sort verbs into past, now and future.', 'I can hear أَمْسِ / عَادَةً / غَدًا.'],
    develop: ['I can justify an answer from the verb form.', 'I can hear كَانَ يَـ … (used to).'],
    stretch: ['I can summarise a text keeping every tense.', 'I can spot tense-only distractors.'],
  },
  bridge: [
    { ar: 'زَمَنٌ', urdu: 'زمانہ', tr: 'zamāna', en: 'time / tense' },
    { ar: 'مَاضٍ · حَاضِرٌ · مُسْتَقْبَلٌ', urdu: 'ماضی · حال · مستقبل', tr: 'māzī · ḥāl · mustaqbil', en: 'past · present · future' },
    { ar: 'عَادَةً', urdu: 'عادت', tr: 'ʿādat', en: 'Urdu: a habit · Arabic عَادَةً: usually' },
    { ar: 'تَفْصِيلٌ', urdu: 'تفصیل', tr: 'tafṣīl', en: 'detail' },
    { ar: 'قَادِمٌ', urdu: 'آئندہ', tr: 'āʾinda', en: 'next, coming' },
  ],
  bridgeNotes: 'URDU BRIDGE: ماضی، حال، مستقبل are exactly the Urdu grammar words for past, present, future. عادت (habit) is the root of Arabic عَادَةً = usually — a habit word that signals the PRESENT tense.',
  core: ['التَّعَرُّفُ عَلَى الأَفْعَالِ', 'اللَّاحِقَةُ', 'الكَلَامُ السَّرِيعُ', 'المُلْهِيَاتُ', 'أَمْسِ', 'عَادَةً', 'كُلَّ يَوْمٍ', 'غَدًا', 'الأُسْبُوعَ القَادِمَ', 'شَارَكَ فِي', 'فَازَ بِـ', 'حَضَرَ'],
  vocabNotes: {
    0: 'Listening strategy: words for HOW we listen (gist, detail, distractors).',
    1: 'Tense markers to hear: each one predicts the tense of the verb next to it.',
    2: 'Sport and leisure in speech: verbs you will hear in all three tenses today.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the sound of each tense (website rules 1–3)', title: 'Past, now or future?', ar: 'مَاضٍ أَمْ حَاضِرٌ أَمْ مُسْتَقْبَلٌ؟',
      cols: [{ label: 'Tense', w: 2.0 }, { label: 'Listen for', w: 2.8 }, { label: 'Example (website)', w: 7.53, size: 22 }],
      rows: [
        { core: true, cells: ['past', 'an ENDING, no prefix', P('{k|تَدَرَّبْتُ} أَمْسِ · {k|تَدَرَّبْنَا} الأُسْبُوعَ المَاضِيَ', 'I trained yesterday · we trained last week')] },
        { core: true, cells: ['present habit', 'a PREFIX + عَادَةً', P('{e|أَتَدَرَّبُ} عَادَةً مَسَاءً · {e|يَتَدَرَّبُ} كُلَّ يَوْمٍ', 'I usually train in the evening · he trains every day')] },
        { core: true, cells: ['future', 'sa- / sawfa at the START', P('{w|سَأُشَارِكُ} غَدًا · {w|سَوْفَ} نَحْضُرُ المُبَارَاةَ', 'I will take part tomorrow · we will attend the match')] },
        { cells: ['used to', 'kāna + present', P('{k|كُنْتُ} أَلْعَبُ كُرَةَ اليَدِ', 'I used to play handball')] },
      ],
      ltr: true,
      foot: 'Before the audio: write P, N or F next to every question.',
      notes: `GRAMMAR PART 1 — website rules “Past is marked by a suffix” (no prefix; the information sits at the end — listen through to the final syllable), “Present is marked by a prefix” (+ عَادَةً / كُلَّ يَوْمٍ = habit) and “Future adds سَـ or سَوْفَ” (in fast speech the سَـ is short — listen at the very start). Website teaching point: “Annotate the tense before you listen.”`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · tense-only distractors (website rule 4) · Develop / Stretch', title: 'Same words, different time', ar: 'نَفْسُ الكَلِمَاتِ، زَمَنٌ آخَرُ',
      cards: [
        { chip: 'PAST vs FUTURE', color: '1D5FBF', head: 'فَازَ · سَيَفُوزُ', big: 'فَازَ · سَيَفُوزُ', en: 'he won · he will win', clue: 'Check the start.' },
        { chip: 'PAST vs HABIT', color: 'C0386B', head: 'تَدَرَّبَ · يَتَدَرَّبُ', big: 'تَدَرَّبَ · يَتَدَرَّبُ', en: 'he trained · he trains', clue: 'Prefix = now.' },
        { chip: 'USED TO', color: '6B4C9A', head: 'كَانَ يَلْعَبُ', big: 'كَانَ يَلْعَبُ · يَلْعَبُ', en: 'he used to play · he plays', clue: 'kāna = past.' },
      ],
      error: { text: 'Website mistake: the distractor keeps the words but changes the tense.', pairs: [['فَازَ بِالبُطُولَةِ', 'سَيَفُوزُ بِالبُطُولَةِ']] },
      notes: `GRAMMAR PART 2 — website rule “Tense-only distractors” (a common wrong option repeats the words of the text but changes the time — check the verb form before choosing). Website mistakes (listening habits): hearing تَدَرَّبَ and answering “he trains” · hearing سَيَفُوزُ and answering “he won” · hearing كَانَ يَلْعَبُ and answering “he plays”.
In the error box the CROSSED item is the distractor when the recording said فَازَ.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me annotate, then listen',
    steps: [
      { head: 'Read the question', ar: 'مَاذَا حَدَثَ فِي العَامِ المَاضِي؟', think: 'Last year → P.' },
      { head: 'Predict', ar: '{k|فِي العَامِ المَاضِي}', think: 'Expect a past ending.' },
      { head: 'Hear', ar: '{k|شَارَكْتُ} · {k|فُزْتُ}', think: 'No prefix: past.' },
      { head: 'Reject', ar: '{w|سَأُشَارِكُ}', think: 'Future: wrong time.' },
    ],
    legend: ['k', 'e', 'w'], legendLabels: { k: 'PAST', e: 'NOW', w: 'FUTURE' },
    model: 'فِي الطُّفُولَةِ {k|كُنْتُ} أَلْعَبُ كُرَةَ اليَدِ. وَفِي العَامِ المَاضِي {k|شَارَكْتُ} فِي بُطُولَةٍ {k|وَفُزْتُ} بِمِيدَالِيَةٍ فِضِّيَّةٍ. أَمَّا الآنَ {e|فَأَتَدَرَّبُ} عَادَةً أَرْبَعَ مَرَّاتٍ فِي الأُسْبُوعِ. وَالأُسْبُوعَ القَادِمَ {w|سَأُشَارِكُ} فِي مُبَارَاةٍ وَدِّيَّةٍ.',
    modelEn: 'In childhood I used to play handball. Last year I took part in a championship and won a silver medal. Now I usually train four times a week. Next week I will take part in a friendly match.',
    notes: 'I DO (3 min) — model the annotate → predict → hear → reject routine on question 2. The copy box shows the transcript AFTER annotation (show it only after the listening).',
  },
  patternEn: ['I trained yesterday', 'I usually train', 'I will train tomorrow'],
  sorterNotes: 'Then say one sentence about yourself in each tense: أَمْسِ … · عَادَةً … · غَدًا …',
  mistakes: [
    { wrong: 'أَمْسِ يَتَدَرَّبُ فِي النَّادِي.', right: 'أَمْسِ تَدَرَّبَ فِي النَّادِي.', why: 'Yesterday needs a past verb (no prefix).' },
    { wrong: 'غَدًا فَازَ بِالبُطُولَةِ.', right: 'غَدًا سَيَفُوزُ بِالبُطُولَةِ.', why: 'Tomorrow needs sa- + present.' },
    { wrong: 'فِي الطُّفُولَةِ كَانَ لَعِبَ كُرَةَ اليَدِ.', right: 'فِي الطُّفُولَةِ كَانَ يَلْعَبُ كُرَةَ اليَدِ.', why: 'Used to = kāna + PRESENT verb.' },
  ],
  patch: {
    speaking: {
      model: [
        ['A', 'مَاذَا فَعَلَ المُتَحَدِّثُ فِي العَامِ المَاضِي؟', 'What did the speaker do last year?'],
        ['B', 'شَارَكَ فِي بُطُولَةٍ كَبِيرَةٍ وَفَازَ بِمِيدَالِيَةٍ فِضِّيَّةٍ.', 'He took part in a big championship and won a silver medal.'],
        ['A', 'وَمَاذَا يَفْعَلُ الآنَ؟', 'And what does he do now?'],
        ['B', 'يَتَدَرَّبُ عَادَةً أَرْبَعَ مَرَّاتٍ فِي الأُسْبُوعِ، وَالأُسْبُوعَ القَادِمَ سَيُشَارِكُ فِي مُبَارَاةٍ.', 'He usually trains four times a week, and next week he will take part in a match.'],
      ],
    },
  },
  patchNote: 'the website common mistakes (English listening habits) rebuilt as Arabic sentence pairs on the same three points; English added to the patterns and speaking model; the website visual game repeats D5-L02 and is skipped.',
  hints: ['Yesterday → which tense?', 'Tomorrow → which marker?', 'Used to → kāna + ?'],
  coreTip: 'Mark P / N / F first.\nCore: questions 1, 2 and 3.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write the verb that proves each answer.',
  gloss: [
    ['فِي الطُّفُولَةِ كُنْتُ أَلْعَبُ كُرَةَ اليَدِ فِي المَدْرَسَةِ، وَكَانَ مُدَرِّبِي يُشَجِّعُنِي كَثِيرًا.', 'In childhood I used to play handball at school, and my coach encouraged me a lot.'],
    ['وَفِي العَامِ المَاضِي شَارَكْتُ فِي بُطُولَةٍ كَبِيرَةٍ وَفُزْتُ بِمِيدَالِيَةٍ فِضِّيَّةٍ.', 'Last year I took part in a big championship and won a silver medal.'],
    ['أَمَّا الآنَ فَأَتَدَرَّبُ عَادَةً أَرْبَعَ مَرَّاتٍ فِي الأُسْبُوعِ، وَأُفَضِّلُ التَّدْرِيبَ الصَّبَاحِيَّ.', 'As for now, I usually train four times a week, and I prefer morning training.'],
    ['وَفِي رَأْيِي الرِّيَاضَةُ تُعَلِّمُ الصَّبْرَ وَالعَمَلَ الجَمَاعِيَّ.', 'In my opinion sport teaches patience and teamwork.'],
    ['وَالأُسْبُوعَ القَادِمَ سَأُشَارِكُ فِي مُبَارَاةٍ وَدِّيَّةٍ، وَسَوْفَ أُحَاوِلُ أَنْ أُحَسِّنَ نَتِيجَتِي. وَبَعْدَ سَنَوَاتٍ أَنْوِي أَنْ أُدَرِّبَ الأَطْفَالَ.', 'Next week I will take part in a friendly match and will try to improve my result. In years to come I intend to coach children.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَاذَا فَعَلَ المُتَحَدِّثُ فِي الطُّفُولَةِ؟ وَمَاذَا فَعَلَ فِي العَامِ المَاضِي؟' },
      { route: 'develop', ar: 'مَاذَا يَفْعَلُ الآنَ عَادَةً؟' },
      { route: 'stretch', ar: 'مَا خُطَطُهُ لِلْمُسْتَقْبَلِ؟ اِسْتَعْمِلْ سَـ أَوْ سَوْفَ.' },
    ],
    stems: [
      { route: 'core', ar: 'فِي الطُّفُولَةِ كَانَ ______ ، وَفِي العَامِ المَاضِي ______ .' },
      { route: 'develop', ar: 'الآنَ يَتَدَرَّبُ عَادَةً ______ .' },
      { route: 'stretch', ar: 'الأُسْبُوعَ القَادِمَ سَـ ______ ، وَبَعْدَ سَنَوَاتٍ يَنْوِي أَنْ ______ .' },
    ],
    modelEn: ['What did the speaker do last year?', 'He took part in a big championship and won a silver medal.'],
    notes: 'Website prompts and model: retell in the THIRD person (I → he): كُنْتُ → كَانَ · شَارَكْتُ → شَارَكَ · أَتَدَرَّبُ → يَتَدَرَّبُ · سَأُشَارِكُ → سَيُشَارِكُ. This person-switch is the hidden skill of the task.',
  },
  write: {
    core: { amount: '6 sentences', how: 'Two past, two present, two future sentences about the speaker (frames).' },
    develop: { amount: '50–60 words', how: 'A summary in the third person with كَانَ + present.' },
    stretch: { amount: '≈ 70 words', how: 'Website task: summarise the text keeping every verb in the tense it used.' },
  },
  frames: {
    core: [
      { en: 'In childhood he used to play …', ar: 'فِي الطُّفُولَةِ كَانَ يَلْعَبُ ______ .' },
      { en: 'Last year he won …', ar: 'فِي العَامِ المَاضِي فَازَ بِـ ______ .' },
      { en: 'Now he usually trains …', ar: 'الآنَ يَتَدَرَّبُ عَادَةً ______ .' },
      { en: 'Next week he will take part in …', ar: 'الأُسْبُوعَ القَادِمَ سَيُشَارِكُ فِي ______ .' },
    ],
    develop: [
      { en: 'His coach used to …', ar: 'كَانَ مُدَرِّبُهُ ______ .' },
      { en: 'He prefers …', ar: 'يُفَضِّلُ ______ .' },
      { en: 'He thinks that sport teaches …', ar: 'يَرَى أَنَّ الرِّيَاضَةَ تُعَلِّمُ ______ .' },
      { en: 'He intends to …', ar: 'يَنْوِي أَنْ ______ .' },
    ],
    bank: ['كَانَ يَلْعَبُ', 'شَارَكَ فِي', 'فَازَ بِـ', 'يَتَدَرَّبُ', 'عَادَةً', 'أَرْبَعَ مَرَّاتٍ', 'يُفَضِّلُ', 'سَيُشَارِكُ', 'سَوْفَ يُحَاوِلُ', 'يَنْوِي أَنْ', 'الأُسْبُوعَ القَادِمَ', 'بَعْدَ سَنَوَاتٍ'],
  },
  stretch: [
    ['كَانَ مُدَرِّبُهُ يُشَجِّعُهُ كَثِيرًا', 'his coach used to encourage him a lot'],
    ['فَازَ بِمِيدَالِيَةٍ فِضِّيَّةٍ', 'he won a silver medal'],
    ['يُفَضِّلُ التَّدْرِيبَ الصَّبَاحِيَّ', 'he prefers morning training'],
    ['سَوْفَ يُحَاوِلُ أَنْ يُحَسِّنَ نَتِيجَتَهُ', 'he will try to improve his result'],
    ['يَنْوِي أَنْ يُدَرِّبَ الأَطْفَالَ', 'he intends to coach children'],
  ],
  modelEn: 'In childhood the speaker used to play handball at school, and his coach encouraged him a lot. Last year he took part in a big championship and won a silver medal. As for now, he usually trains four times a week and prefers morning training. He thinks sport teaches patience. Next week he will take part in a friendly match, and he will try to improve his result.',
  find: ['كَانَ + present (twice)', 'three past verbs', 'two present habit verbs', 'two future verbs'],
  modelNotes: 'Website writing model. Evidence: كَانَ … يَلْعَبُ · كَانَ مُدَرِّبُهُ يُشَجِّعُهُ · شَارَكَ · فَازَ · يَتَدَرَّبُ عَادَةً · يُفَضِّلُ · يَرَى أَنَّ … · سَيُشَارِكُ · سَوْفَ يُحَاوِلُ أَنْ يُحَسِّنَ.',
  selfCheck: [
    { route: 'core', text: 'I marked every question P / N / F before listening.' },
    { route: 'core', text: 'My past verbs have no prefix.' },
    { route: 'develop', text: 'I wrote كَانَ + present for “used to”.' },
    { route: 'develop', text: 'I switched “I” to “he” correctly.' },
    { route: 'stretch', text: 'Every verb in my summary keeps the tense of the text.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['حَدِّدْ زَمَنَ كُلِّ فِعْلٍ', 'identify the tense of each verb'], ['مِهْرَجَانًا رِيَاضِيًّا', 'a sports festival'], ['المَرْكَزِ الثَّانِي', 'second place'], ['الجُمْهُورُ', 'the crowd'], ['بِحَمَاسٍ', 'enthusiastically'],
    ['طَوَالَ اليَوْمِ', 'all day long'], ['اسْتِعْدَادًا لِـ', 'preparing for'], ['المَوْسِمِ الجَدِيدِ', 'the new season'], ['الشَّهْرِ القَادِمِ', 'next month'], ['نَتَمَنَّى أَنْ نَفُوزَ', 'we hope to win'],
  ],
  prep: {
    words: [['الطَّلَاقَةُ', 'fluency', '—'], ['التَّرَدُّدُ', 'hesitation', '—'], ['عَفْوًا، أَقْصِدُ', 'sorry, I mean', '—'], ['دَعْنِي أُفَكِّرُ', 'let me think', '—'], ['أُعِيدُ الصِّيَاغَةَ', 'I rephrase', 'يُعِيدُ he']],
    questionEn: 'Prepare a 30-second answer: “What did you do last weekend?” — two past verbs and one connector.',
    questionAr: 'فِي نِهَايَةِ الأُسْبُوعِ المَاضِي … ثُمَّ …',
    homework: {
      core: 'Sort the 10 transcript verbs into P / N / F; learn the five speaking words.',
      develop: 'A 50–60-word third-person summary of the listening.',
      stretch: 'Website writing task: ≈ 70 words, every verb in the text’s tense.',
    },
    wordsSource: 'The five words come from the website D5-L11 vocabulary (speaking under pressure and repair phrases).',
  },
  remember: 'Remember: mark P / N / F first — then listen to the START (prefix, sa-) and the END (suffix) of every verb.',
});

module.exports = { meta, slides };
