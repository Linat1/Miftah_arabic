'use strict';
/* F6-L11 · F6 Consolidation: Complete Town and Transport Review — website: Pathways › Foundation › F6 › F6-L11 (complete F6 grammar audit: existence + agreement, movement + directions, description + comparison, balanced communication; diagnose → explain → repair; evidence-based target before F6-L12). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F6')({
  n: 11, fileTitle: 'F6_Consolidation_Town_and_Transport_Review', chip: 'Unit Review',
  title: 'F6 Consolidation: Complete Town and Transport Review', arabic: 'تَرْسِيخُ الوَحْدَةِ السَّادِسَةِ — مُرَاجَعَةٌ شَامِلَةٌ',
  focus: 'Pull the whole of F6 together: four grammar families, a diagnose → explain → repair routine for errors, a one-minute topic conversation and one precise target before the assessment.',
  icon: 'FaListCheck', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('F6-L11', {
  support: `• No new grammar today: this is the F6 review before the F6-L12 assessment.
• Core: targeted repair on the two weakest families (existence/agreement and transport patterns) using the audit table.
• Develop: an integrated response (places + transport + directions + opinion) and an explanation for each correction.
• Stretch: lead a “peer clinic”: justify every repair and complete an extended self-assessment.
• Website: “An error explanation is stronger than a corrected sentence because it makes the controlling rule reusable.”
• Use the Do Now and quick-check results to pick each student’s route for the final You Do.`,
  teach: 'The four F6 grammar families and a three-step repair routine.',
  wedo: 'Sort by family, repair the errors, then listen to a cumulative F6 text.',
  next: { nextCode: 'F6-L12', nextTitle: 'F6 Review and Unit Assessment', nextAr: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ' },
  doNow: {
    questions: [
      q('What does أَوْلَوِيَّةٌ mean?', ['a priority', 'evidence', 'a strength'], 'Prepared at home (F6-L10).'),
      q('What does دَلِيلٌ mean?', ['evidence', 'a review', 'a mistake'], 'Prepared at home (F6-L10).'),
      q('A question with كَمْ تَسْتَغْرِقُ expects …', ['a duration', 'a place', 'a reason'], 'F6-L10: predict the answer type.'),
      q('Choose “Turn left” to a group.', ['اِنْعَطِفُوا يَسَارًا.', 'اِنْعَطِفِي يَسَارًا.', 'اِنْعَطِفْ يَسَارًا.'], 'F6-L08: -ū for a group.'),
      q('Which sentence is accurate?', ['تُوجَدُ مَحَطَّةٌ قَرِيبَةٌ.', 'يُوجَدُ مَحَطَّةٌ قَرِيبٌ.', 'تُوجَدُ مَحَطَّةٌ قَرِيبٌ.'], 'F6-L01: feminine noun → tūjadu + -a.'),
    ],
    keyIdea: { text: 'Before you fix an ending, find what controls it: the noun, the person or the transport.', ar: '{k|تُوجَدُ} مَحَطَّةٌ · {k|اِنْعَطِفُوا} · أَذْهَبُ {k|بِـ}الحَافِلَةِ' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F6-L10. Questions 3–5 retrieve F6-L10, F6-L08 and F6-L01. Note which of Q4–Q5 each student gets wrong: it points to their route today.',
  },
  routes: {
    core: ['I can repair existence and transport errors.', 'I can describe my town and journey accurately.'],
    develop: ['I can explain why each correction is needed.', 'I can speak for one minute on my town.'],
    stretch: ['I can combine four grammar families in one text.', 'I can set a precise, evidence-based target.'],
  },
  bridge: [
    { ar: 'تَحْلِيلٌ', urdu: 'تحلیل', tr: 'tahlīl', en: 'analysis' },
    { ar: 'دَلِيلٌ', urdu: 'دلیل', tr: 'dalīl', en: 'argument / proof → evidence' },
    { ar: 'أَوْلَوِيَّةٌ', urdu: 'اولیت', tr: 'awwaliyat', en: 'priority' },
    { ar: 'تَرَقٍّ / تَقَدُّمٌ', urdu: 'ترقی', tr: 'taraqqī', en: 'progress' },
    { ar: 'مُرَاجَعَةٌ', urdu: 'رجوع', tr: 'rujū', en: 'Urdu: turning to → Arabic: review' },
  ],
  bridgeNotes: 'URDU BRIDGE: تحلیل، دلیل، اولیت are shared. ترقی (progress) → Arabic تَرَقٍّ, but the website uses تَقَدُّمٌ. رجوع کرنا (to turn to / consult) shares the root of مُرَاجَعَةٌ (review: “going back over”).',
  core: ['مُرَاجَعَةٌ شَامِلَةٌ', 'تَحْلِيلُ الأَخْطَاءِ', 'نُقْطَةُ قُوَّةٍ', 'أَوْلَوِيَّةٌ', 'دَلِيلٌ', 'يُوجَدُ / تُوجَدُ', 'بِـ / عَلَى / مَشْيًا', 'تَسْتَغْرِقُ', 'تَتَمَيَّزُ بِـ', 'مَبْنِيٌّ مِنْ', 'مِنْ مَزَايَا / مِنْ عُيُوبِ', 'اِذْهَبْ / اِذْهَبِي / اِذْهَبُوا'],
  vocabNotes: {
    0: 'Review words: students need to understand them for today’s self-assessment and target. The Core route learns the five prep words only.',
    1: 'The complete F6 grammar bank: every structure the F6-L12 assessment can test. Students give themselves a traffic light for each (green: confident · amber: sometimes · red: need help).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 5, eyebrow: 'Grammar focus · Part 1 · the complete F6 grammar audit (website rules 1–4)', title: 'Four families, four checks', ar: 'مُرَاجَعَةُ قَوَاعِدِ الوَحْدَةِ',
      cols: [{ label: 'Family', w: 2.6 }, { label: '✗', w: 3.3, size: 20 }, { label: '✓', w: 3.6, size: 20 }, { label: 'Check …', w: 2.83 }],
      rows: [
        { core: true, cells: ['Existence + agreement (L01)', P('يُوجَدُ مَحَطَّةٌ قَرِيبٌ.', ''), P('{k|تُوجَدُ} مَحَطَّةٌ {k|قَرِيبَةٌ}.', ''), 'the noun’s gender'] },
        { core: true, cells: ['Transport (L03)', P('أُسَافِرُ عَلَى الحَافِلَةِ.', ''), P('أُسَافِرُ {k|بِـ}الحَافِلَةِ.', ''), 'the transport type'] },
        { cells: ['Directions (L08)', P('اِذْهَبِي يَمِينًا يَا طُلَّابُ.', ''), P('{k|اِذْهَبُوا} يَمِينًا يَا طُلَّابُ.', ''), 'who is addressed'] },
        { cells: ['Description (L05, L07)', P('العِمَارَةُ مَبْنِيٌّ مِنَ الزُّجَاجِ.', ''), P('العِمَارَةُ {k|مَبْنِيَّةٌ} مِنَ الزُّجَاجِ.', ''), 'agreement + preposition'] },
        { cells: ['Balanced view (L05)', P('مِنْ مَزَايَا مَدِينَتِي المَوَاصَلَاتُ رَخِيصَةٌ.', ''), P('مِنْ مَزَايَا مَدِينَتِي {k|أَنَّ} المَوَاصَلَاتِ رَخِيصَةٌ.', ''), 'the missing anna'] },
      ],
      ltr: true,
      foot: 'Traffic-light each row for yourself: green · amber · red. Your reddest row is your priority (أَوْلَوِيَّةٌ).',
      notes: `GRAMMAR PART 1 — website rules “Existence and agreement”, “Movement and directions”, “Description and comparison” and “Balanced extended communication”, each with the website check question.
Website overview: “This lesson does not introduce a new rule. It connects the full F6 grammar system and teaches learners to diagnose why an error is wrong before repairing it.”
Row 5: after أَنَّ the noun takes -a (المَوَاصَلَاتِ, a feminine plural with -i).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · the repair routine (website common error)', title: 'Diagnose, explain, repair', ar: 'شَخِّصْ · اِشْرَحْ · صَحِّحْ',
      cards: [
        { chip: '1 · DIAGNOSE', color: '1D5FBF', head: 'مَا الَّذِي يَتَحَكَّمُ؟', big: 'يُوجَدُ مَدْرَسَةٌ.', en: 'What controls the verb? The noun: madrasa.', clue: 'Find the controller first.' },
        { chip: '2 · EXPLAIN', color: '6B4C9A', head: 'لِأَنَّ الاِسْمَ مُؤَنَّثٌ', big: 'لِأَنَّ الاِسْمَ مُؤَنَّثٌ.', en: 'Because the noun is feminine.', clue: 'Name the rule in one line.' },
        { chip: '3 · REPAIR', color: '1F7A4D', head: 'تُوجَدُ', big: 'تُوجَدُ مَدْرَسَةٌ.', en: 'There is a school.', clue: 'Now the fix is reusable.' },
      ],
      error: { text: 'Website common error: fixing only the ending.', pairs: [['العِمَارَةُ مَبْنِيَّةٌ مِنَ الزُّجَاجِ.', 'العِمَارَةُ مَبْنِيٌّ إِلَى الزُّجَاجِ.']] },
      notes: `GRAMMAR PART 2 — website common error: “Do not correct only the visible ending. Explain which noun, person, transport type or reference controls the form.”
Website teaching point: “An error explanation is stronger than a corrected sentence because it makes the controlling rule reusable.”
This is exactly what Layla does in today’s reading text (error-analysis report). Practise the routine aloud on quiz item 1.`,
    },
  ],
  rulesAr: 'مُرَاجَعَةُ القَوَاعِدِ وَتَحْلِيلُ الأَخْطَاءِ',
  sorterCats: ['Existence and agreement', 'Movement and directions', 'Description and argument'],
  quick: [0, 1, 2, 4],
  rest: [3, 5, 6, 7],
  ido: {
    title: 'Watch me build one integrated answer',
    steps: [
      { head: '1 · Place + existence', ar: 'أَسْكُنُ فِي مَدِينَةٍ حَدِيثَةٍ {k|تُوجَدُ} فِيهَا مَحَطَّاتٌ.', think: 'Feminine plural → tūjadu.' },
      { head: '2 · Description', ar: '{k|تَتَمَيَّزُ} بِمَتْحَفٍ {k|مَبْنِيٍّ} مِنَ الحَجَرِ.', think: 'bi- after tatamayyazu; mabniyyin agrees.' },
      { head: '3 · Journey', ar: 'أَذْهَبُ {k|بِـ}المِتْرُو، وَ{k|تَسْتَغْرِقُ} الرِّحْلَةُ عِشْرِينَ دَقِيقَةً.', think: 'bi- + duration.' },
      { head: '4 · Balanced view', ar: 'مِنْ مَزَايَا المَدِينَةِ {k|أَنَّ} المَوَاصَلَاتِ رَخِيصَةٌ.', think: 'Do not forget anna.' },
    ],
    legend: ['k'], legendLabels: { k: 'F6 GRAMMAR' },
    model: 'أَسْكُنُ فِي مَدِينَةٍ حَدِيثَةٍ {k|تُوجَدُ} فِيهَا مَحَطَّاتٌ وَحَدَائِقُ وَمَبَانٍ تَارِيخِيَّةٌ. {k|تَتَمَيَّزُ} بِمَتْحَفٍ {k|مَبْنِيٍّ مِنَ} الحَجَرِ. أَذْهَبُ إِلَى المَدْرَسَةِ {k|بِالمِتْرُو}، وَ{k|تَسْتَغْرِقُ} الرِّحْلَةُ عِشْرِينَ دَقِيقَةً. {k|مِنْ مَزَايَا} المَدِينَةِ {k|أَنَّ} المَوَاصَلَاتِ رَخِيصَةٌ، وَ{k|مِنْ عُيُوبِهَا أَنَّ} الشَّوَارِعَ مُكْتَظَّةٌ. هَدَفِي قَبْلَ التَّقْيِيمِ هُوَ مُرَاجَعَةُ أَفْعَالِ الأَمْرِ لِأَنِّي أَخْطَأْتُ فِي صِيغَةِ الجَمْعِ مَرَّتَيْنِ.',
    modelEn: 'I live in a modern city with stations, parks and historic buildings. It is known for a museum built of stone. I go to school by metro, and the journey takes twenty minutes. One advantage of the city is that transport is cheap; one disadvantage is that the streets are crowded. My target before the assessment is to revise commands, because I made mistakes with the plural form twice.',
    notes: 'I DO (3 min) — the website model portfolio answer, built one family at a time. The last sentence is the evidence-based TARGET: it names the rule AND the evidence (“twice”). Students count the grammar families used (4).',
  },
  sorterNotes: 'Stretch: for each item, say the check question (What is the noun’s gender? Who is addressed? …).',
  mistakes: [
    { wrong: 'يُوجَدُ مَحَطَّةٌ.', right: 'تُوجَدُ مَحَطَّةٌ.', why: 'Existence verb agrees with feminine station.' },
    { wrong: 'اِذْهَبِي يَمِينًا يَا طُلَّابُ.', right: 'اِذْهَبُوا يَمِينًا يَا طُلَّابُ.', why: 'A group of students: the -ū ending.' },
    { wrong: 'العِمَارَةُ مَبْنِيٌّ.', right: 'العِمَارَةُ مَبْنِيَّةٌ.', why: 'Passive participle agrees with feminine building.' },
  ],
  hints: ['Station is feminine: which verb?', 'Who is being addressed?', 'Building is feminine: which participle?'],
  coreTip: 'Listen for four families:\nexistence · transport · comparison · advantage.',
  listenRoutes: 'Core: questions 1–3. Develop / Stretch: all 5, then name the grammar family behind each answer.',
  gloss: [
    ['أَسْكُنُ فِي مَدِينَةٍ تَارِيخِيَّةٍ تَتَمَيَّزُ بِأَسْوَاقِهَا وَمَبَانِيهَا المَبْنِيَّةِ مِنَ الحَجَرِ.', 'I live in a historic city known for its markets and its stone buildings.'],
    ['تُوجَدُ مَحَطَّةُ القِطَارِ فِي المَرْكَزِ، وَأَذْهَبُ إِلَيْهَا مَشْيًا.', 'The train station is in the centre, and I walk there.'],
    ['القِطَارُ أَغْلَى مِنَ الحَافِلَةِ، وَلٰكِنَّهُ أَسْرَعُ وَتَسْتَغْرِقُ الرِّحْلَةُ أَرْبَعِينَ دَقِيقَةً.', 'The train is more expensive than the bus, but faster; the journey takes forty minutes.'],
    ['مِنْ مَزَايَا مَدِينَتِي أَنَّهَا آمِنَةٌ،', 'One advantage of my city is that it is safe,'],
    ['وَمِنْ عُيُوبِهَا أَنَّ المَوَاصَلَاتِ تَتَأَخَّرُ أَحْيَانًا.', 'and one disadvantage is that transport is sometimes late.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ مَدِينَتَكَ وَأَهَمَّ أَمَاكِنِهَا.' },
      { route: 'core', ar: 'كَيْفَ تَتَنَقَّلُ فِي مَدِينَتِكَ؟' },
      { route: 'develop', ar: 'أَعْطِ اتِّجَاهَاتٍ مِنَ المَحَطَّةِ إِلَى المَسْجِدِ.' },
      { route: 'develop', ar: 'مَا مَزَايَا مَدِينَتِكَ وَعُيُوبُهَا؟' },
      { route: 'stretch', ar: 'أَيُّ مَبْنًى تُفَضِّلُ فِي مَدِينَتِكَ؟ وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَسْكُنُ فِي … · تُوجَدُ فِيهَا …' },
      { route: 'core', ar: 'أَتَنَقَّلُ بِـ … لِأَنَّهُ …' },
      { route: 'develop', ar: 'اِذْهَبْ مُسْتَقِيمًا ثُمَّ اِنْعَطِفْ …' },
      { route: 'develop', ar: 'مِنْ مَزَايَاهَا أَنَّ … وَمِنْ عُيُوبِهَا أَنَّ …' },
      { route: 'stretch', ar: 'أُفَضِّلُ … لِأَنَّهُ مَبْنِيٌّ مِنْ …' },
    ],
    modelEn: ['Describe your city and transport.', 'My city is modern and has many places. I travel by metro because it is fast.'],
    notes: 'Website “Full F6 topic conversation” — the same five questions the F6-L12 speaking assessment uses. Pairs: A asks, B answers for one minute; swap. Website model: صِفْ مَدِينَتَكَ وَمَوَاصَلَاتِهَا. — مَدِينَتِي حَدِيثَةٌ … أَتَنَقَّلُ بِالمِتْرُو لِأَنَّهُ سَرِيعٌ. — اذْكُرْ مِيزَةً وَعَيْبًا وَأَعْطِنِي اتِّجَاهًا. — مِنْ مَزَايَاهَا أَنَّهَا آمِنَةٌ، وَمِنْ عُيُوبِهَا الاِزْدِحَامُ. لِلذَّهَابِ إِلَى المَسْجِدِ، اِذْهَبْ مُسْتَقِيمًا ثُمَّ اِنْعَطِفْ يَسَارًا.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Repair five sentences from the audit table, then write your own town sentence for each family.' },
    develop: { amount: '80–100 words', how: 'Website portfolio task: places, transport, directions, opinion, four grammar families, and a target.' },
    stretch: { amount: '100+ words', how: 'Portfolio + repair three deliberate errors in your draft and explain each one.' },
  },
  frames: {
    core: [
      { en: 'There is a … in my town.', ar: 'يُوجَدُ / تُوجَدُ فِي مَدِينَتِي ______ .' },
      { en: 'I go to school by …', ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ بِـ ______ .' },
      { en: 'The journey takes …', ar: 'تَسْتَغْرِقُ الرِّحْلَةُ ______ .' },
      { en: 'The … is built of …', ar: 'الـ ______ مَبْنِيٌّ / مَبْنِيَّةٌ مِنَ ______ .' },
      { en: 'My priority is …', ar: 'أَوْلَوِيَّتِي هِيَ ______ .' },
    ],
    develop: [
      { en: 'My town is known for …', ar: 'تَتَمَيَّزُ مَدِينَتِي بِـ ______ .' },
      { en: 'To get to the mosque, go … then turn …', ar: 'لِلذَّهَابِ إِلَى المَسْجِدِ، اِذْهَبْ ______ ثُمَّ اِنْعَطِفْ ______ .' },
      { en: 'The bus is cheaper than …', ar: 'الحَافِلَةُ أَرْخَصُ مِنْ ______ .' },
      { en: 'One advantage … one disadvantage …', ar: 'مِنْ مَزَايَاهَا أَنَّ ______ ، وَمِنْ عُيُوبِهَا أَنَّ ______ .' },
      { en: 'My target is … because I made mistakes in …', ar: 'هَدَفِي ______ لِأَنِّي أَخْطَأْتُ فِي ______ .' },
    ],
    bank: ['يُوجَدُ', 'تُوجَدُ', 'بِالحَافِلَةِ', 'مَشْيًا', 'تَسْتَغْرِقُ', 'أَرْخَصُ مِنْ', 'تَتَمَيَّزُ بِـ', 'مَبْنِيَّةٌ مِنْ', 'اِذْهَبُوا', 'مِنْ مَزَايَا … أَنَّ', 'أَوْلَوِيَّةٌ', 'دَلِيلٌ'],
  },
  stretch: [
    ['غَيَّرْتُ … إِلَى … لِأَنَّ …', 'I changed … to … because …'],
    ['نُقْطَةُ قُوَّتِي هِيَ …', 'my strength is …'],
    ['أَخْطَأْتُ فِي … مَرَّتَيْنِ', 'I made mistakes in … twice'],
    ['أَصْبَحَ نَصِّي أَدَقَّ', 'my text became more accurate'],
  ],
  modelEn: 'I live in a modern city with stations, parks and historic buildings. It is known for a museum built of stone. I go to school by metro, and the journey takes twenty minutes. One advantage is that transport is cheap; one disadvantage is that the streets are crowded. My target before the assessment is to revise commands, because I made mistakes with the plural form twice.',
  find: ['existence + agreement', 'a transport pattern', 'a balanced view with anna', 'an evidence-based target'],
  modelNotes: 'Evidence: تُوجَدُ فِيهَا مَحَطَّاتٌ · بِمَتْحَفٍ مَبْنِيٍّ مِنَ الحَجَرِ · بِالمِتْرُو، تَسْتَغْرِقُ · مِنْ مَزَايَا … أَنَّ · هَدَفِي … لِأَنِّي أَخْطَأْتُ … مَرَّتَيْنِ.',
  selfCheck: [
    { route: 'core', text: 'Existence verbs agree with the noun.' },
    { route: 'core', text: 'Transport: bi- / ʿalā / mashyan correct.' },
    { route: 'develop', text: 'I explained why each correction is needed.' },
    { route: 'develop', text: 'I used four grammar families.' },
    { route: 'stretch', text: 'My target names a rule and my evidence.' },
  ],
  exit: [0, 2, 4],
  glossary: [
    ['رَاجَعَتْ', 'she reviewed'], ['كِتَابَتَهَا', 'her writing'], ['فَوَجَدَتْ', 'and she found'], ['أَرْبَعَةَ أَخْطَاءٍ', 'four mistakes'], ['فَغَيَّرَتْهَا إِلَى', 'so she changed it to'],
    ['لِأَنَّ الاِسْمَ مُؤَنَّثٌ', 'because the noun is feminine'], ['فَاسْتَعْمَلَتْ', 'so she used'], ['صَحَّحَتْ', 'she corrected'], ['وَأَضَافَتْ', 'and she added'], ['أَدَقَّ وَأَوْضَحَ', 'more accurate and clearer'],
  ],
  prep: {
    words: [['تَقْيِيمٌ', 'an assessment', 'pl. تَقْيِيمَاتٌ'], ['مَهَارَةٌ', 'a skill', 'pl. مَهَارَاتٌ'], ['دَرَجَةٌ', 'a mark / score', 'pl. دَرَجَاتٌ'], ['تَعْلِيمَاتٌ', 'instructions', 'sing. تَعْلِيمَةٌ'], ['أُرَاجِعُ', 'I revise / check', 'تُرَاجِعُ she']],
    questionEn: 'Revise your reddest row from the audit table: write three correct sentences using it.',
    questionAr: 'أَوْلَوِيَّتِي: …',
    homework: {
      core: 'Website F6-L11: redo the quiz and the sorter; learn the five assessment words.',
      develop: 'Website portfolio task: final F6 response (80–100 words) with an evidence-based target.',
      stretch: 'Portfolio + three repaired errors with explanations; practise the five conversation questions for one minute each.',
    },
    wordsSource: 'The five words are the instruction words of the F6-L12 assessment (skills, marks, instructions).',
  },
  remember: 'Remember: find what controls the form — the noun, the person or the transport — then explain, then repair.',
});

module.exports = { meta, slides };
