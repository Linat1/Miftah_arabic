'use strict';
/* D1-L11 · Speaking and Writing — My Daily Routine — website: Pathways › Development › D1 › D1-L11 (Point + Reason + Example + Contrast, repair errors by category, cue-word speaking, 100–120-word routine article). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D1')({
  n: 11, fileTitle: 'Speaking_and_Writing_My_Routine', chip: 'Speak and Write',
  title: 'Speaking and Writing — My Daily Routine', arabic: 'التَّحَدُّثُ وَالكِتَابَةُ — رُوتِينِي اليَوْمِيُّ',
  focus: 'Bring all of D1 together: extend every answer with Point + Reason + Example + Contrast, repair errors by naming the rule, speak from cue words for 30–45 seconds and write a 100–120-word routine article.',
  icon: 'FaMicrophoneLines', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D1-L11', {
  support: `• This is a PRODUCTION lesson: no new topic. Time goes to building, correcting and performing answers. Keep teacher talk short.
• Core: answer three questions with Point + Reason (+ one learnt example) using the cue cards; write 6–8 sentences with the frames. Develop: 30–45 seconds with an example and one target structure. Stretch: respond to an unseen follow-up and self-correct; write the 100–120-word article.
• The D1 “grammar vault” (group 2) is the checklist for self-correction — keep it visible during writing.
• Urdu bridge: مثال، سبب، دقت، مقابلہ، مہارت.`,
  teach: 'Point → reason → example → contrast; fix errors by rule.',
  wedo: 'Name the error, upgrade the answer, sort and listen.',
  next: { nextCode: 'D1-L12', nextTitle: 'Review and Unit Assessment', nextAr: 'المُرَاجَعَةُ وَالتَّقْيِيمُ' },
  flexGroups: [0, 1],
  doNow: {
    questions: [
      q('What does عَلَى سَبِيلِ المِثَالِ mean?', ['for example', 'however', 'this means that'], 'Prepared at home.'),
      q('What does دِقَّةٌ mean?', ['accuracy', 'fluency', 'justification'], 'Prepared at home.'),
      q('Choose the accurate phrase.', ['قَبْلَ أَنْ أَخْرُجَ', 'قَبْلَ أَنْ أَخْرُجُ', 'قَبْلَ أَخْرُجَ'], 'D1-L04: after أَنْ → fatḥa.'),
      q('Ask a GIRL “When do you wake up?”', ['مَتَى تَسْتَيْقِظِينَ؟', 'مَتَى تَسْتَيْقِظُ؟', 'مَتَى يَسْتَيْقِظُ؟'], 'D1-L07: girl → -īna.'),
      q('Which is 8:55?', ['التَّاسِعَةُ إِلَّا خَمْسَ دَقَائِقَ', 'الثَّامِنَةُ وَخَمْسُ دَقَائِقَ', 'الثَّامِنَةُ إِلَّا خَمْسَ دَقَائِقَ'], 'D1-L02: the next hour with إِلَّا.', { ar: '٨:٥٥', arBig: true }),
    ],
    keyIdea: { text: 'A strong answer = Point + Reason + Example + Contrast — and every verb checked.', ar: 'أَسْتَيْقِظُ مُبَكِّرًا {k|لِأَنَّ} … {w|عَلَى سَبِيلِ المِثَالِ} … {e|مَعَ ذٰلِكَ} …' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home. Questions 3–5 retrieve D1-L04, D1-L07 and D1-L02 — three of the most common D1 errors.',
  },
  routes: {
    core: ['I can answer three routine questions with a point and a reason.', 'I can correct “I / he / she” verb errors.'],
    develop: ['I can speak for 30–45 seconds with an example and a contrast.', 'I can name the rule behind a correction.'],
    stretch: ['I can answer an unseen follow-up question spontaneously.', 'I can write a polished 100–120-word article.'],
  },
  bridge: [
    { ar: 'المِثَالُ', urdu: 'مثال', tr: 'misāl', en: 'example' },
    { ar: 'السَّبَبُ', urdu: 'سبب', tr: 'sabab', en: 'reason' },
    { ar: 'دِقَّةٌ', urdu: 'دقت', tr: 'diqqat', en: 'Urdu: difficulty · Arabic: accuracy' },
    { ar: 'المُقَارَنَةُ', urdu: 'مقابلہ', tr: 'muqābla', en: 'Urdu: contest · Arabic مُقَارَنَةٌ: comparison' },
    { ar: 'مَهَارَةٌ', urdu: 'مہارت', tr: 'mahārat', en: 'skill' },
  ],
  bridgeNotes: 'URDU BRIDGE: مثال → المِثَالُ (عَلَى سَبِيلِ المِثَالِ = مثال کے طور پر). سبب → السَّبَبُ. FALSE FRIEND: Urdu دقت = difficulty, but Arabic دِقَّةٌ = accuracy / precision. مہارت (skill) → مَهَارَةٌ. مقابلہ (competition) is NOT مُقَارَنَةٌ (comparison).',
  core: ['النُّقْطَةُ', 'السَّبَبُ', 'المِثَالُ', 'المُقَارَنَةُ', 'مَعَ ذٰلِكَ', 'عَلَى سَبِيلِ المِثَالِ', 'هٰذَا يَعْنِي أَنَّ'],
  forms: {
    'المِثَالُ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'الأَمْثِلَةُ' }, { l: 'the', ar: 'المِثَالُ' }, { l: 'one', ar: 'مِثَالٌ' }] },
    'السَّبَبُ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'الأَسْبَابُ' }, { l: 'the', ar: 'السَّبَبُ' }, { l: 'one', ar: 'سَبَبٌ' }] },
    'النُّقْطَةُ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'النِّقَاطُ' }, { l: 'the', ar: 'النُّقْطَةُ' }, { l: 'one', ar: 'نُقْطَةٌ' }] },
  },
  vocabNotes: { 1: 'The D1 grammar vault (FLEX): these eight cards ARE the unit checklist. Display them during the writing task and for revision before D1-L12.', 2: 'Answer-extension words: the four “building blocks” (point, reason, example, comparison) and three linking phrases. Students need these to BUILD answers, and to understand feedback.' },
  grammar: [
    {
      type: 'formula', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · build an extended answer (website rules)', title: 'Point + Reason + Example + Contrast', ar: 'نُقْطَةٌ + سَبَبٌ + مِثَالٌ + مُقَارَنَةٌ',
      cols: [
        { label: 'point', ar: 'النُّقْطَةُ', color: '1D5FBF', pale: 'EEF3FA' },
        { label: 'reason', ar: 'السَّبَبُ', color: '1E7B4F', pale: 'E8F4EC' },
        { label: 'example', ar: 'المِثَالُ', color: 'C77700', pale: 'FDF3E3' },
        { label: 'contrast', ar: 'المُقَارَنَةُ', color: '6B4C9A', pale: 'F1ECF7' },
      ],
      rows: [
        { en: 'I prefer an organised routine because it helps me concentrate. For example, I prepare my bag at night. However, my routine changes on holiday.', cells: ['أُفَضِّلُ الرُّوتِينَ المُنَظَّمَ', '{k|لِأَنَّهُ} يُسَاعِدُنِي عَلَى التَّرْكِيزِ.', '{k|عَلَى سَبِيلِ المِثَالِ}، أُحَضِّرُ حَقِيبَتِي لَيْلًا.', '{k|مَعَ ذٰلِكَ} يَتَغَيَّرُ رُوتِينِي فِي العُطْلَةِ.'] },
        { en: 'I wake up at 6:30 because school starts early. For example, the first lesson is at 8:20. As for Saturday, I sleep longer.', cells: ['أَسْتَيْقِظُ فِي السَّادِسَةِ وَالنِّصْفِ', '{k|لِأَنَّ} المَدْرَسَةَ تَبْدَأُ مُبَكِّرًا.', '{k|مَثَلًا}، الحِصَّةُ الأُولَى فِي الثَّامِنَةِ وَالثُّلُثِ.', '{k|أَمَّا} يَوْمُ السَّبْتِ {k|فَأَنَامُ} أَطْوَلَ.'] },
      ],
      foot: 'Core: Point + Reason. Develop: + Example. Stretch: + Contrast, then “this means that …”.',
      notes: `GRAMMAR PART 1 — website rules “Build Point + Reason + Example” and “Add comparison or qualification” (بَيْنَمَا · مَعَ ذٰلِكَ · أَمَّا) with the website patterns.
Website warning: “Do not extend an answer by adding unrelated memorised sentences. Every reason, example and contrast must answer the exact question.”
Teacher script: “Answer the question FIRST (point), then build.” Model row 1 slowly; students build row 2 with their own times.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · repair errors by category (website rule + D1 grammar vault)', title: 'Name the rule, then fix it', ar: 'صَحِّحْ حَسَبَ القَاعِدَةِ',
      cols: [{ label: 'Error family', w: 2.6 }, { label: '✗ Wrong', w: 3.7, size: 24 }, { label: '✓ Right', w: 3.7, size: 24 }, { label: 'Lesson', w: 2.33 }],
      rows: [
        { core: true, cells: ['Person prefix (I / he / she)', { ar: 'أَنَا يَسْتَيْقِظُ · أُخْتِي يَعُودُ' }, { ar: 'أَنَا {w|أَ}سْتَيْقِظُ · أُخْتِي {e|تَ}عُودُ' }, 'D1-L01, D1-L06'] },
        { core: true, cells: ['Clock time (past / to)', { ar: '٦:٤٥ = السَّادِسَةُ إِلَّا الرُّبْعَ' }, { ar: '٦:٤٥ = {k|السَّابِعَةُ} إِلَّا الرُّبْعَ' }, 'D1-L02'] },
        { cells: ['Verb after “an”', { ar: 'قَبْلَ أَنْ أَخْرُجُ' }, { ar: 'قَبْلَ أَنْ أَخْرُ{e|جَ}' }, 'D1-L04'] },
        { cells: ['Asking a girl', { ar: 'أَنْتِ تَسْتَيْقِظُ؟' }, { ar: 'أَنْتِ تَسْتَيْقِظِ{e|ينَ}؟' }, 'D1-L07'] },
        { cells: ['As for … fa-', { ar: 'أَمَّا السَّبْتُ أَسْتَرِيحُ' }, { ar: 'أَمَّا السَّبْتُ {k|فَأَسْتَرِيحُ}' }, 'D1-L03, D1-L08'] },
      ],
      foot: 'Say the family first (“person prefix!”), then the correction. Naming the rule makes the fix stick.',
      notes: `GRAMMAR PART 2 — website rule “Repair errors by category” (verb pattern · person · أَنْ · time · frequency) and the website table (Person · Time · Sequence · Development). These are the five error families from the website error-analysis report (reading text: Lina).
Quick-fire: teacher says a wrong sentence; the class shouts the FAMILY name before anyone corrects it.`,
    },
  ],
  quick: [0, 2, 3, 5],
  ido: {
    title: 'Watch me speak from cue words',
    steps: [
      { head: 'Cue cards', ar: '٦:٣٠ · إِفْطَار · حَافِلَة · سَبَب', think: 'Four cues, not a script.' },
      { head: 'Point + reason', ar: 'أَسْتَيْقِظُ فِي السَّادِسَةِ وَالنِّصْفِ {k|لِأَنَّ} الحَافِلَةَ تَأْتِي مُبَكِّرًا.', think: 'Answer first, then why.' },
      { head: 'Example', ar: '{w|عَلَى سَبِيلِ المِثَالِ}، أَتَنَاوَلُ الإِفْطَارَ قَبْلَ أَنْ أَخْرُ{e|جَ}.', think: 'An example with a D1 structure.' },
      { head: 'Contrast + check', ar: '{k|مَعَ ذٰلِكَ}، أَنَامُ أَطْوَلَ يَوْمَ السَّبْتِ.', think: 'Then re-check every verb.' },
    ],
    legend: ['k', 'w', 'e'], legendLabels: { k: 'REASON / CONTRAST', w: 'EXAMPLE', e: 'CHECKED ENDING' },
    model: 'أَسْتَيْقِظُ فِي السَّادِسَةِ وَالنِّصْفِ {k|لِأَنَّ} الحَافِلَةَ تَأْتِي مُبَكِّرًا. {w|عَلَى سَبِيلِ المِثَالِ}، أَتَنَاوَلُ الإِفْطَارَ قَبْلَ أَنْ أَخْرُ{e|جَ} فِي السَّابِعَةِ إِلَّا الرُّبْعَ. {k|مَعَ ذٰلِكَ}، أَنَامُ أَطْوَلَ يَوْمَ السَّبْتِ، وَهٰذَا يَعْنِي أَنَّنِي أَسْتَرِيحُ جَيِّدًا.',
    modelEn: 'I wake up at half past six because the bus comes early. For example, I have breakfast before I leave at quarter to seven. However, I sleep longer on Saturday, and this means I rest well.',
    notes: 'I DO (3 min) — the teacher writes four cue words on the whiteboard, then SPEAKS the answer (not reads it), with a think-aloud. Then shows the written version and checks every verb aloud against the grammar vault.',
  },
  wedoSlides: [
    {
      type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · upgrade the answer (website mission)', title: 'Which answer is stronger?', ar: 'أَيُّ إِجَابَةٍ أَقْوَى؟',
      seed: 11,
      questions: [
        q('Question: مَتَى تَسْتَيْقِظُ وَلِمَاذَا؟', ['أَسْتَيْقِظُ فِي السَّادِسَةِ وَالنِّصْفِ لِأَنَّ مَدْرَسَتِي تَبْدَأُ مُبَكِّرًا.', 'فِي السَّادِسَةِ.', 'لِأَنَّ السَّادِسَةَ.'], 'Point + reason, in a full sentence.'),
        q('Which phrase introduces an example?', ['عَلَى سَبِيلِ المِثَالِ', 'مَعَ ذٰلِكَ', 'كَمْ مَرَّةً'], 'For example.'),
        q('Choose the best sequence.', ['أَوَّلًا أَسْتَيْقِظُ، ثُمَّ أَتَنَاوَلُ الإِفْطَارَ، وَبَعْدَ ذٰلِكَ أَذْهَبُ إِلَى المَدْرَسَةِ.', 'أَخِيرًا أَسْتَيْقِظُ. أَوَّلًا أَنَامُ.', 'ثُمَّ رُوتِينٌ أَوَّلًا المَدْرَسَةُ.'], 'Markers match the real order.'),
        q('Choose the strongest conclusion.', ['فِي رَأْيِي رُوتِينِي مُنَظَّمٌ لِأَنَّهُ يَجْمَعُ بَيْنَ الدِّرَاسَةِ وَالرَّاحَةِ.', 'رُوتِينِي جَيِّدٌ.', 'أَسْتَيْقِظُ فِي السَّادِسَةِ.'], 'Judgement + evidence.'),
      ],
      side: { kind: 'core', label: 'CORE', text: 'The stronger answer:\n1. answers the question\n2. gives a reason (because …)' },
      answerSlide: { min: 0, eyebrow: 'We do · upgrade answers', title: 'Which answer is stronger? Answers', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO — website mission rounds 1, 2, 5 and 6. After each answer ask: “What would make it even stronger?” (add an example / a contrast).',
      answerNotes: 'Volunteers add ONE more block to answer 1 (example or contrast) aloud.',
    },
  ],
  sorterCats: ['Precise time or frequency', 'Another person’s routine', 'Reason, sequence or contrast'],
  hints: ['I → which prefix?', 'After “an”, what is the last vowel?', 'My sister → which prefix?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 5.\nListen for: عَلَى سَبِيلِ المِثَالِ · مَعَ ذٰلِكَ · فِي رَأْيِي.',
  listenRoutes: 'Core: questions 1, 3 and 5. Develop / Stretch: all 5 — and label each sentence P / R / E / C.',
  gloss: [
    ['أُفَضِّلُ أَنْ أَتَّبِعَ رُوتِينًا مُنَظَّمًا فِي أَيَّامِ الدِّرَاسَةِ لِأَنَّهُ يُسَاعِدُنِي عَلَى التَّرْكِيزِ.', 'I prefer to follow an organised routine on school days because it helps me concentrate.'],
    ['أَسْتَيْقِظُ فِي السَّادِسَةِ وَالنِّصْفِ، وَأَحْرِصُ عَلَى أَنْ أَتَنَاوَلَ الإِفْطَارَ قَبْلَ أَنْ أَخْرُجَ.', 'I wake up at half past six, and I make sure I have breakfast before I leave.'],
    ['عَلَى سَبِيلِ المِثَالِ، أُحَضِّرُ حَقِيبَتِي لَيْلًا حَتَّى لَا أَنْسَى شَيْئًا.', 'For example, I prepare my bag at night so that I don’t forget anything.'],
    ['مَعَ ذٰلِكَ لَا أُرِيدُ جَدْوَلًا صَارِمًا جِدًّا؛ فَفِي نِهَايَةِ الأُسْبُوعِ أَسْتَيْقِظُ مُتَأَخِّرًا وَأَقْضِي وَقْتًا مَعَ أُسْرَتِي.', 'However, I don’t want a very strict timetable; at the weekend I wake up late and spend time with my family.'],
    ['فِي رَأْيِي، التَّوَازُنُ أَهَمُّ مِنْ مَلْءِ كُلِّ دَقِيقَةٍ.', 'In my opinion, balance is more important than filling every minute.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ رُوتِينَكَ فِي يَوْمٍ دِرَاسِيٍّ عَادِيٍّ، وَاذْكُرْ وَقْتَيْنِ دَقِيقَيْنِ.' },
      { route: 'develop', ar: 'مَاذَا يَفْعَلُ شَخْصٌ آخَرُ فِي أُسْرَتِكَ بَعْدَ المَدْرَسَةِ أَوِ العَمَلِ؟' },
      { route: 'develop', ar: 'كَمْ مَرَّةً تَقُومُ بِنَشَاطٍ مُعَيَّنٍ فِي الأُسْبُوعِ، وَلِمَاذَا؟' },
      { route: 'stretch', ar: 'قَارِنْ بَيْنَ رُوتِينِكَ فِي أَيَّامِ الدِّرَاسَةِ وَفِي نِهَايَةِ الأُسْبُوعِ.' },
    ],
    stems: [
      { route: 'core', ar: 'أَسْتَيْقِظُ فِي ______ لِأَنَّ ______ .' },
      { route: 'develop', ar: 'عَلَى سَبِيلِ المِثَالِ ، ______ .' },
      { route: 'develop', ar: '______ مَرَّتَيْنِ فِي الأُسْبُوعِ لِأَنَّ ______ .' },
      { route: 'stretch', ar: 'مَعَ ذٰلِكَ ، ______ . هٰذَا يَعْنِي أَنَّ ______ .' },
    ],
    modelEn: ['How do you organise your routine on school days?', 'I wake at half past six and prepare my bag before I leave. For example, I finish my homework before I use my phone. However, at the weekend my routine is more flexible.'],
    notes: 'Website topic-conversation prompts 1–4 (prompt 5 “Which language error can you now correct? Give an example.” is a good Stretch follow-up). This is the main performance: ● think with 3–5 CUE WORDS only (no script) → ↔ rehearse muted → ◎ 30–45 seconds on the mic. Teacher asks one unseen follow-up to Stretch students (e.g. وَلِمَاذَا؟ / أَعْطِ مِثَالًا).',
  },
  write: {
    core: { amount: '6–8 sentences', how: 'Your school day with two exact times, one “before I …”, and one reason (because).' },
    develop: { amount: '10 sentences', how: 'Add a family member (he / she), how often, an example and a contrast with the weekend.' },
    stretch: { amount: '100–120 words', how: 'Website task: a polished article or email about your daily and weekend routine, comparing another person. Check every verb against the grammar vault.' },
  },
  writing: {
    checklist: ['Give at least two exact times (past / to the hour).', 'Use before/after + a verb with the correct ending.', 'Include another person (he / she) for comparison.', 'Use Point + Reason + Example + Contrast.', 'Check every verb against the D1 grammar vault.'],
    model: 'أَسْتَيْقِظُ فِي أَيَّامِ الدِّرَاسَةِ فِي السَّادِسَةِ وَالنِّصْفِ، وَأَتَنَاوَلُ الإِفْطَارَ قَبْلَ أَنْ أَخْرُجَ مِنَ البَيْتِ فِي السَّابِعَةِ وَالرُّبْعِ. أَسْتَقِلُّ الحَافِلَةَ لِأَنَّ المَدْرَسَةَ بَعِيدَةٌ. بَعْدَ أَنْ أَعُودَ، أَسْتَرِيحُ نِصْفَ سَاعَةٍ، ثُمَّ أُكْمِلُ وَاجِبِي. أَتَمَرَّنُ مَرَّتَيْنِ فِي الأُسْبُوعِ، بَيْنَمَا تَتَمَرَّنُ أُخْتِي كُلَّ يَوْمٍ تَقْرِيبًا لِأَنَّهَا تُحِبُّ السِّبَاحَةَ. أَمَّا فِي نِهَايَةِ الأُسْبُوعِ فَأَنَامُ وَقْتًا أَطْوَلَ، وَغَالِبًا مَا أَزُورُ أَقَارِبِي؛ عَلَى سَبِيلِ المِثَالِ، نَتَنَاوَلُ الغَدَاءَ عِنْدَ جَدَّتِي يَوْمَ السَّبْتِ. مَعَ ذٰلِكَ، أُخَصِّصُ سَاعَةً يَوْمَ الأَحَدِ لِلْمُرَاجَعَةِ. فِي رَأْيِي، رُوتِينِي مُتَوَازِنٌ، وَلٰكِنَّنِي أُرِيدُ أَنْ أَنَامَ مُبَكِّرًا.',
  },
  frames: {
    core: [
      { en: 'On school days I wake up at …', ar: 'فِي أَيَّامِ الدِّرَاسَةِ أَسْتَيْقِظُ فِي ______ .' },
      { en: 'I have breakfast before I leave.', ar: 'أَتَنَاوَلُ الإِفْطَارَ قَبْلَ أَنْ أَخْرُجَ.' },
      { en: 'I go to school by … because …', ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ بِـ ______ لِأَنَّ ______ .' },
      { en: 'After school I …', ar: 'بَعْدَ المَدْرَسَةِ ______ .' },
      { en: 'I sleep at …', ar: 'أَنَامُ فِي ______ .' },
    ],
    develop: [
      { en: 'My brother / sister …', ar: 'أَخِي يَـ ______ / أُخْتِي تَـ ______ .' },
      { en: 'I … twice a week, whereas …', ar: '______ مَرَّتَيْنِ فِي الأُسْبُوعِ ، بَيْنَمَا ______ .' },
      { en: 'For example, …', ar: 'عَلَى سَبِيلِ المِثَالِ ، ______ .' },
      { en: 'As for the weekend, …', ar: 'أَمَّا فِي نِهَايَةِ الأُسْبُوعِ فَـ ______ .' },
      { en: 'However, … This means that …', ar: 'مَعَ ذٰلِكَ ، ______ . هٰذَا يَعْنِي أَنَّ ______ .' },
    ],
    bank: ['أَسْتَيْقِظُ', 'أَتَنَاوَلُ', 'أَسْتَقِلُّ', 'قَبْلَ أَنْ', 'بَعْدَ أَنْ', 'لِأَنَّ', 'عَلَى سَبِيلِ المِثَالِ', 'مَعَ ذٰلِكَ', 'بَيْنَمَا', 'أَمَّا … فَـ', 'مَرَّتَيْنِ', 'فِي رَأْيِي'],
  },
  stretch: [
    ['أَحْرِصُ عَلَى أَنْ …', 'I make sure that I …'],
    ['حَتَّى لَا أَنْسَى شَيْئًا', 'so that I don’t forget anything'],
    ['لَا أُرِيدُ جَدْوَلًا صَارِمًا جِدًّا', 'I don’t want a very strict timetable'],
    ['التَّوَازُنُ أَهَمُّ مِنْ مَلْءِ كُلِّ دَقِيقَةٍ', 'balance is more important than filling every minute'],
    ['هٰذَا يَعْنِي أَنَّنِي …', 'this means that I …'],
  ],
  modelEn: 'On school days I wake up at half past six, and I have breakfast before I leave the house at quarter past seven. I take the bus because school is far. After I return, I rest for half an hour, then I finish my homework. I train twice a week, whereas my sister trains almost every day because she loves swimming. As for the weekend, I sleep longer, and I often visit my relatives; for example, we have lunch at my grandmother’s on Saturday. However, I set aside an hour on Sunday for revision. In my opinion, my routine is balanced, but I want to sleep earlier.',
  find: ['two exact times', 'before/after + verb', 'another person (she)', 'example and contrast'],
  modelNotes: 'TEACHER-WRITTEN MODEL (the website model for this task is a skills reflection — it is used in the notes of the reading slides and suits Stretch homework). Evidence: فِي السَّادِسَةِ وَالنِّصْفِ، فِي السَّابِعَةِ وَالرُّبْعِ · قَبْلَ أَنْ أَخْرُجَ، بَعْدَ أَنْ أَعُودَ · تَتَمَرَّنُ أُخْتِي · عَلَى سَبِيلِ المِثَالِ · بَيْنَمَا، أَمَّا … فَـ، مَعَ ذٰلِكَ.\nWebsite reflection model: أَقْوَى مَهَارَةٍ عِنْدِي فِي D1 هِيَ وَصْفُ الرُّوتِينِ بِالتَّرْتِيبِ … (see the website writing tab).',
  selfCheck: [
    { route: 'core', text: 'Every “I” verb starts with a- or u-.' },
    { route: 'core', text: 'My times are correct (past / to the hour).' },
    { route: 'develop', text: 'After “before / after + an”, my verb ends in fatḥa.' },
    { route: 'develop', text: 'I gave an example and a contrast.' },
    { route: 'stretch', text: 'I checked every verb against the grammar vault.' },
  ],
  exit: [2, 3, 5],
  glossary: [
    ['بَعْدَ المُرَاجَعَةِ', 'after revising'], ['أَكْثَرُ أَخْطَائِهَا', 'most of her mistakes'], ['فِئَاتٍ', 'categories'], ['بِدَايَةِ الفِعْلِ', 'the start of the verb'], ['الفَاعِلُ', 'the subject'],
    ['تَخْلِطُ بَيْنَ', 'she confuses'], ['تَكْرَارَهُ', 'its frequency'], ['إِجَابَةٌ شَفَهِيَّةٌ', 'a spoken answer'], ['اِنْخَفَضَ', 'fell, went down'], ['مُحَدَّدًا', 'specific'],
  ],
  prep: {
    words: [['قَبْلَ أَنْ أَخْرُجَ', 'before I leave (fatḥa!)', 'D1-L04'], ['السَّابِعَةُ إِلَّا الرُّبْعَ', 'quarter to seven (6:45)', 'D1-L02'], ['مَرَّتَيْنِ فِي الأُسْبُوعِ', 'twice a week', 'D1-L03'], ['مَتَى تَسْتَيْقِظِينَ؟', 'when do you (f.) wake up?', 'D1-L07'], ['أَمَّا السَّبْتُ فَـ…', 'as for Saturday, …', 'D1-L08']],
    questionEn: 'Revise the whole unit: which TWO D1 rules do you still find hardest? Write one correct example of each.',
    questionAr: 'مَا أَصْعَبُ قَاعِدَةٍ فِي D1؟',
    homework: {
      core: 'Website D1-L11: the sorter and the final check; learn the five structures on this slide.',
      develop: 'Record a 30–45-second answer to prompt 1 (cue words only) and write it down.',
      stretch: 'Website writing task (reflection): your strongest skill, one recurring error and a precise plan.',
    },
    wordsSource: 'The five “words” are the five highest-value D1 structures for the D1-L12 unit assessment (one from each key lesson).',
  },
  remember: 'Remember: answer first, then build — and check every verb.',
});

module.exports = { meta, slides };
