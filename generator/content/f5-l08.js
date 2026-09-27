'use strict';
/* F5-L08 · Health Problems and How You Feel — website: Pathways › Foundation › F5 › F5-L08 (symptoms and injuries, عِنْدِي … / أَشْعُرُ بِـ … / يُؤْلِمُنِي …, عِنْدِي أَلَمٌ فِي + body part, مَرِيضٌ / مَرِيضَةٌ agreement, مُنْذُ + duration). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F5')({
  n: 8, fileTitle: 'Health_Problems_and_How_You_Feel', chip: 'Health Problems',
  title: 'Health Problems and How You Feel', arabic: 'المَشَاكِلُ الصِّحِّيَّةُ وَالشُّعُورُ',
  focus: 'Say how you feel, name common symptoms and injuries, locate pain with عِنْدِي أَلَمٌ فِي … and say how long with مُنْذُ.',
  icon: 'FaHeadSideCough', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const mfp = (m, f, pl) => ({ tag: 'm · f · pl', forms: [{ l: 'm.', ar: m }, { l: 'f.', ar: f }, { l: 'pl.', ar: pl }] });
const slides = D.devLesson('F5-L08', {
  support: `• Core: match ten symptoms to pictures and complete عِنْدِي … frames (عِنْدِي صُدَاعٌ).
• Develop: four problems with a location (عِنْدِي أَلَمٌ فِي …) and a duration (مُنْذُ …), then answer follow-up questions.
• Stretch: a short clinic triage note — symptom, duration, cause and impact (لَا أَسْتَطِيعُ …).
• Three structures, one idea (website teaching note): عِنْدِي صُدَاعٌ · أَشْعُرُ بِصُدَاعٍ · يُؤْلِمُنِي رَأْسِي. Core students choose ONE.
• Website safeguarding note: “The lesson teaches language, not diagnosis. Serious or persistent symptoms require an appropriate adult or healthcare professional.” Role plays use invented problems — nobody shares real medical details.`,
  teach: 'Symptoms and the describing phrases, then I have pain in my … since …',
  wedo: 'Picture match, sort symptom / injury / feeling, fix the mistakes and listen to six callers.',
  next: { nextCode: 'F5-L09', nextTitle: 'At the Doctor and Pharmacy', nextAr: 'عِنْدَ الطَّبِيبِ وَفِي الصَّيْدَلِيَّةِ' },
  doNow: {
    questions: [
      q('What does صُدَاعٌ mean?', ['a headache', 'a cough', 'a fever'], 'Prepared at home (F5-L07).'),
      q('What does مُتْعَبٌ mean?', ['tired', 'ill', 'happy'], 'Prepared at home (F5-L07).'),
      q('Choose “This is my hand.”', ['هٰذِهِ يَدِي.', 'هٰذَا يَدِي.', 'هٰذِهِ يَدُكَ.'], 'F5-L07: hand is feminine.'),
      q('Which is a dual form?', ['أُذُنَانِ', 'أُذُنٌ', 'آذَانٌ'], 'F5-L07: -āni = two.'),
      q('Which word means “back”?', ['ظَهْرٌ', 'صَدْرٌ', 'بَطْنٌ'], 'F5-L07 body vocabulary.'),
    ],
    keyIdea: { text: 'Health sentence = what + where + since when.', ar: 'عِنْدِي {e|أَلَمٌ} {k|فِي} رَأْسِي {m|مُنْذُ} أَمْسِ.' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F5-L07. Questions 3–5 retrieve F5-L07 (this is my hand, the dual, body parts).',
  },
  routes: {
    core: ['I can say how I feel.', 'I can name ten symptoms with عِنْدِي.'],
    develop: ['I can say where it hurts: عِنْدِي أَلَمٌ فِي …', 'I can answer مُنْذُ مَتَى؟'],
    stretch: ['I can use three different health structures.', 'I can write a triage note with cause and impact.'],
  },
  bridge: [
    { ar: 'مَرِيضٌ', urdu: 'مریض', tr: 'marīz', en: 'patient / ill' },
    { ar: 'مَرَضٌ', urdu: 'مرض', tr: 'marz', en: 'illness' },
    { ar: 'حَسَاسِيَّةٌ', urdu: 'حساس', tr: 'hassās', en: 'sensitive → allergy' },
    { ar: 'زُكَامٌ', urdu: 'زکام', tr: 'zukām', en: 'a cold' },
    { ar: 'إِصَابَةٌ', urdu: 'مصیبت', tr: 'musībat', en: 'Urdu: trouble · Arabic: an injury' },
  ],
  bridgeNotes: 'URDU BRIDGE: مریض، مرض، زکام are identical in meaning. حساس (sensitive) → حَسَاسِيَّةٌ (allergy: being “sensitive” to something). مصیبت (misfortune) shares its root with إِصَابَةٌ (an injury — something that “strikes” you) and مُصَابٌ بِـ (affected by). Also: درد is Persian — Arabic pain = أَلَمٌ (compare Urdu الم “grief”).',
  core: ['صُدَاعٌ', 'زُكَامٌ', 'حُمَّى', 'سُعَالٌ', 'أَلَمُ الحَلْقِ', 'أَلَمُ المَعِدَةِ', 'أَلَمُ الأَسْنَانِ', 'عِنْدِي ...', 'أَشْعُرُ بِـ ...', 'عِنْدِي أَلَمٌ فِي ...', 'مُنْذُ أَمْسِ', 'مُنْذُ مَتَى؟'],
  forms: {
    'مَرِيضٌ / مَرِيضَةٌ': mfp('مَرِيضٌ', 'مَرِيضَةٌ', 'مَرْضَى'),
    'مُتْعَبٌ / مُتْعَبَةٌ': mfp('مُتْعَبٌ', 'مُتْعَبَةٌ', 'مُتْعَبُونَ'),
    'مُصَابٌ / مُصَابَةٌ بِـ': mfp('مُصَابٌ', 'مُصَابَةٌ', 'مُصَابُونَ'),
    'أَشْعُرُ بِـ ...': { tag: 'I · he · she', forms: [{ l: 'he', ar: 'يَشْعُرُ' }, { l: 'she', ar: 'تَشْعُرُ' }, { l: 'you f.', ar: 'تَشْعُرِينَ' }] },
    'عِنْدِي ...': { tag: 'I · he · she', forms: [{ l: 'he', ar: 'عِنْدَهُ' }, { l: 'she', ar: 'عِنْدَهَا' }, { l: 'you', ar: 'عِنْدَكَ / عِنْدَكِ' }] },
  },
  skipGroups: [3],
  flexGroups: [1],
  vocabNotes: {
    0: 'Symptoms follow عِنْدِي directly: عِنْدِي صُدَاعٌ / حُمَّى / سُعَالٌ. The أَلَمُ … phrases are idāfas: أَلَمُ المَعِدَةِ “pain of the stomach”.',
    1: 'FLEX: injuries and states. مَرِيضٌ / مَرِيضَةٌ and مُصَابٌ / مُصَابَةٌ agree with the SPEAKER (unlike F5-L04, where the adjective agreed with the food).',
    2: 'مُنْذُ + time: مُنْذُ أَمْسِ (since yesterday), مُنْذُ يَوْمَيْنِ (for two days — the dual from F5-L07!), مُنْذُ أُسْبُوعٍ. Question: مُنْذُ مَتَى؟',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · what, where, since when (website rules 1, 2 and 4)', title: 'I have pain in my … since …', ar: 'عِنْدِي أَلَمٌ فِي …',
      cols: [{ label: 'Pattern', w: 2.6 }, { label: 'Arabic', w: 6.0, size: 24 }, { label: 'English', w: 3.73 }],
      rows: [
        { core: true, cells: ['I have + symptom', P('عِنْدِي {e|صُدَاعٌ} وَ{e|حُمَّى}.', ''), 'I have a headache and a fever.'] },
        { core: true, cells: ['pain + where', P('عِنْدِي أَلَمٌ {k|فِي} رَأْسِي.', ''), 'I have pain in my head.'] },
        { core: true, cells: ['pain + where', P('عِنْدِي أَلَمٌ {k|فِي} ظَهْرِي.', ''), 'I have pain in my back.'] },
        { cells: ['+ since when', P('عِنْدِي زُكَامٌ {m|مُنْذُ} أَمْسِ.', ''), 'I have had a cold since yesterday.'] },
        { cells: ['+ for how long', P('عِنْدِي سُعَالٌ {m|مُنْذُ} يَوْمَيْنِ.', ''), 'I have had a cough for two days.'] },
        { cells: ['question', P('{m|مُنْذُ مَتَى}؟ — {m|مُنْذُ} أُسْبُوعٍ.', ''), 'Since when? — For a week.'] },
      ],
      ltr: true,
      foot: 'Pain is located with fī (in), never ʿalā (on). Mundhu covers both “since” and “for”.',
      notes: `GRAMMAR PART 1 — website rules “Locate pain” (عِنْدِي أَلَمٌ فِي + body part, often with -ī “my”), “Name an illness directly” (عِنْدِي + symptom) and “Add duration” (مُنْذُ + period).
Website common error: عِنْدِي أَلَمٌ عَلَى المَعِدَةِ ✗ → فِي المَعِدَةِ ✓
Reporting (listening): عِنْدَهُ صُدَاعٌ (he has) · عِنْدَهَا أَلَمٌ (she has) — the F4/F5 -hu / -hā endings again.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · three ways to say it · agreement (website rule 3)', title: 'I feel … it hurts … I am ill', ar: 'أَشْعُرُ بِـ · يُؤْلِمُنِي · مَرِيضٌ / مَرِيضَةٌ',
      cards: [
        { chip: 'I FEEL + bi-', color: '1D5FBF', head: 'أَشْعُرُ بِـ', big: 'أَشْعُرُ بِأَلَمٍ فِي المَعِدَةِ.', en: 'I feel pain in my stomach.', clue: 'Always bi- after ashʿuru.' },
        { chip: 'IT HURTS ME', color: '6B4C9A', head: 'يُؤْلِمُنِي / تُؤْلِمُنِي', big: 'يُؤْلِمُنِي رَأْسِي، وَتُؤْلِمُنِي أَسْنَانِي.', en: 'My head hurts, and my teeth hurt.', clue: 'The body part is the subject.' },
        { chip: 'SPEAKER m. / f.', color: 'C0386B', head: 'مَرِيضٌ · مَرِيضَةٌ', big: 'أَنَا مَرِيضٌ. · أَنَا مَرِيضَةٌ.', en: 'I am ill (boy · girl).', clue: 'Agrees with who is speaking.' },
      ],
      error: { text: 'Website common error: ashʿuru needs bi-.', pairs: [['أَشْعُرُ بِصُدَاعٍ.', 'أَشْعُرُ صُدَاعٌ.']] },
      notes: `GRAMMAR PART 2 — website teaching note: “Choose one clear structure and complete it accurately. عِنْدِي صُدَاعٌ is a simple possession pattern; أَشْعُرُ بِصُدَاعٍ uses a preposition; يُؤْلِمُنِي رَأْسِي makes the body part the thing that hurts.”
Website rule “Agree with the speaker”: أَنَا مَرِيضٌ / مَرِيضَةٌ اليَوْمَ · أَنَا مُصَابٌ / مُصَابَةٌ بِالزُّكَامِ.
After بِـ the noun ends in -in: بِصُدَاعٍ، بِأَلَمٍ (say it; don’t mark it down at Foundation).`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6],
  ido: {
    title: 'Watch me write four patient messages',
    steps: [
      { head: '1 · What + since', ar: 'عِنْدِي صُدَاعٌ وَحُمَّى {m|مُنْذُ} أَمْسِ.', think: 'Symptoms + mundhu.' },
      { head: '2 · Feel + where', ar: 'أَشْعُرُ {w|بِـ}أَلَمٍ {k|فِي} المَعِدَةِ.', think: 'bi- after ashʿuru; fī for place.' },
      { head: '3 · Cause', ar: 'سَقَطْتُ، وَعِنْدِي جُرْحٌ {k|فِي} رُكْبَتِي.', think: 'I fell → a cut in my knee.' },
      { head: '4 · Agreement', ar: 'أَنَا مُصَابَ{e|ةٌ} بِالزُّكَامِ وَأَشْعُرُ بِالتَّعَبِ.', think: 'A girl writes → -a.' },
    ],
    legend: ['m', 'w', 'k', 'e'], legendLabels: { m: 'SINCE', w: 'FEEL BI-', k: 'WHERE', e: 'FEMININE' },
    model: '١. عِنْدِي صُدَاعٌ وَحُمَّى {m|مُنْذُ} أَمْسِ. ٢. أَشْعُرُ {w|بِأَلَمٍ} {k|فِي} المَعِدَةِ. ٣. سَقَطْتُ وَعِنْدِي جُرْحٌ {k|فِي} رُكْبَتِي. ٤. أَنَا مُصَابَ{e|ةٌ} بِالزُّكَامِ وَأَشْعُرُ بِالتَّعَبِ.',
    modelEn: '1. I have had a headache and a fever since yesterday. 2. I feel pain in my stomach. 3. I fell and I have a cut on my knee. 4. I (f.) have a cold and I feel tired.',
    notes: 'I DO (3 min) — the website writing model (four patient messages), with a think-aloud. Students copy two and change the symptom, place and time.',
  },
  game: {
    title: 'What is wrong? Match the picture',
    pick: [0, 1, 5],
    en: ['I have a headache.', 'I have a fever.', 'I have a cold.'],
    icons: [[['fa6', 'FaFaceTired', 'C77700'], ['fa6', 'FaBrain', 'C0386B']], [['fa6', 'FaTemperatureHigh', 'C0392B']], [['fa6', 'FaHeadSideCough', '1D5FBF']]],
    labels: ['headache', 'fever', 'cold'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). All three use عِنْدِي + symptom. Other website items: عِنْدِي سُعَالٌ · تُؤْلِمُنِي مَعِدَتِي · يُؤْلِمُنِي سِنِّي — the “it hurts me” structure.',
  },
  sorterNotes: 'Items like أَشْعُرُ بِالدُّوَارِ are “feelings / states”; جُرْحٌ and كَسْرٌ are injuries. Accept reasoned alternatives.',
  hints: ['On the stomach, or in it?', 'What must follow ashʿuru?', 'Maryam is speaking: which form?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for the word after عِنْدَهُ / عِنْدَهَا and after مُنْذُ.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 6.',
  gloss: [
    ['المُتَّصِلُ الأَوَّلُ عِنْدَهُ صُدَاعٌ وَحُمَّى مُنْذُ أَمْسِ.', 'Caller 1 has had a headache and a fever since yesterday.'],
    ['المُتَّصِلَةُ الثَّانِيَةُ تُؤْلِمُهَا أَسْنَانُهَا مُنْذُ أُسْبُوعٍ.', 'Caller 2’s teeth have hurt for a week.'],
    ['المُتَّصِلُ الثَّالِثُ سَقَطَ، وَعِنْدَهُ جُرْحٌ فِي رُكْبَتِهِ.', 'Caller 3 fell and has a cut on his knee.'],
    ['المُتَّصِلَةُ الرَّابِعَةُ أَكَلَتْ طَعَامًا وَأَصْبَحَ عِنْدَهَا أَلَمٌ فِي المَعِدَةِ وَغَثَيَانٌ.', 'Caller 4 ate some food and then had stomach pain and nausea.'],
    ['المُتَّصِلُ الخَامِسُ سَقَطَ مِنَ الدَّرَجِ وَكَسَرَ ذِرَاعَهُ. وَالمُتَّصِلَةُ السَّادِسَةُ تَشْعُرُ بِالمَرَضِ وَتَتَقَيَّأُ.', 'Caller 5 fell down the stairs and broke his arm. Caller 6 feels ill and is being sick.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'كَيْفَ تَشْعُرُ / تَشْعُرِينَ؟' },
      { route: 'core', ar: 'مَا المُشْكِلَةُ؟' },
      { route: 'develop', ar: 'أَيْنَ الأَلَمُ؟' },
      { route: 'stretch', ar: 'مُنْذُ مَتَى؟ وَمَاذَا حَدَثَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَنَا مُتْعَبٌ / مُتْعَبَةٌ · أَنَا بِخَيْرٍ.' },
      { route: 'core', ar: 'عِنْدِي ______ .' },
      { route: 'develop', ar: 'عِنْدِي أَلَمٌ فِي ______ .' },
      { route: 'stretch', ar: 'مُنْذُ ______ . سَقَطْتُ / أَكَلْتُ …' },
    ],
    modelEn: ['What is the problem?', 'I have a headache and I feel tired.'],
    notes: 'Website “Health check-in” — all four prompts are the website’s. Pairs use invented problems (role cards). Website model: مَا المُشْكِلَةُ؟ — عِنْدِي صُدَاعٌ وَأَشْعُرُ بِالتَّعَبِ. — مُنْذُ مَتَى؟ — مُنْذُ أَمْسِ.',
  },
  write: {
    core: { amount: '4 sentences', how: 'Four symptoms with عِنْدِي … and one with I have pain in my …' },
    develop: { amount: '4 messages', how: 'Website task: four patient messages with body location and duration or cause.' },
    stretch: { amount: 'triage note', how: 'Symptom, duration, cause and impact (I can’t …) in 6–8 sentences.' },
  },
  frames: {
    core: [
      { en: 'I have a headache.', ar: 'عِنْدِي صُدَاعٌ.' },
      { en: 'I have a cold and a cough.', ar: 'عِنْدِي زُكَامٌ وَسُعَالٌ.' },
      { en: 'I have pain in my …', ar: 'عِنْدِي أَلَمٌ فِي ______ .' },
      { en: 'I am ill (m. / f.).', ar: 'أَنَا مَرِيضٌ / مَرِيضَةٌ.' },
      { en: 'I feel tired.', ar: 'أَشْعُرُ بِالتَّعَبِ.' },
    ],
    develop: [
      { en: '… since yesterday.', ar: '… مُنْذُ أَمْسِ.' },
      { en: '… for two days / a week.', ar: '… مُنْذُ يَوْمَيْنِ / أُسْبُوعٍ.' },
      { en: 'My head hurts.', ar: 'يُؤْلِمُنِي رَأْسِي.' },
      { en: 'I fell and I have a cut in my knee.', ar: 'سَقَطْتُ وَعِنْدِي جُرْحٌ فِي رُكْبَتِي.' },
      { en: 'I feel pain in my stomach.', ar: 'أَشْعُرُ بِأَلَمٍ فِي المَعِدَةِ.' },
    ],
    bank: ['صُدَاعٌ', 'زُكَامٌ', 'حُمَّى', 'سُعَالٌ', 'أَلَمٌ', 'جُرْحٌ', 'عِنْدِي', 'أَشْعُرُ بِـ', 'يُؤْلِمُنِي', 'فِي', 'مُنْذُ', 'مَرِيضٌ / مَرِيضَةٌ'],
  },
  stretch: [
    ['لَنْ آتِيَ إِلَى المَدْرَسَةِ اليَوْمَ', 'I will not come to school today'],
    ['لَا أَسْتَطِيعُ المَشْيَ جَيِّدًا', 'I can’t walk well'],
    ['عِنْدِي حَسَاسِيَّةٌ مِنْ …', 'I have an allergy to …'],
    ['لِذَلِكَ أَقْرَأُ المُكَوِّنَاتِ', 'so I read the ingredients'],
    ['غَسَلَ الجُرْحَ وَوَضَعَ ضِمَادًا', 'he washed the cut and put on a bandage'],
  ],
  modelEn: '1. I have had a headache and a fever since yesterday. 2. I feel pain in my stomach. 3. I fell and I have a cut on my knee. 4. I (f.) have a cold and I feel tired.',
  find: ['I have …', 'I feel bi-', 'in my …', 'since'],
  modelNotes: 'Evidence: عِنْدِي صُدَاعٌ · أَشْعُرُ بِأَلَمٍ · فِي رُكْبَتِي · مُنْذُ أَمْسِ. Message 4 is written by a girl: مُصَابَةٌ.',
  selfCheck: [
    { route: 'core', text: 'I named symptoms with عِنْدِي.' },
    { route: 'core', text: 'Pain is located with فِي, not عَلَى.' },
    { route: 'develop', text: 'I used مُنْذُ at least once.' },
    { route: 'develop', text: 'أَشْعُرُ is always followed by بِـ.' },
    { route: 'stretch', text: 'مَرِيضٌ / مُصَابٌ agree with the speaker.' },
  ],
  exit: [0, 4, 5],
  glossary: [
    ['لَنْ آتِيَ', 'I will not come'], ['سَقَطْتُ', 'I fell'], ['المَلْعَبِ', 'the playground'], ['كَاحِلِي', 'my ankle'], ['لَا أَسْتَطِيعُ', 'I can’t'],
    ['حَسَاسِيَّةٌ مِنْ', 'an allergy to'], ['لِذَلِكَ', 'so / therefore'], ['جَرَحَ إِصْبَعَهُ', 'he cut his finger'], ['فَغَسَلَ', 'so he washed'], ['ضِمَادًا نَظِيفًا', 'a clean bandage'],
  ],
  prep: {
    words: [['طَبِيبٌ', 'a doctor', 'f. طَبِيبَةٌ · pl. أَطِبَّاءُ'], ['صَيْدَلِيَّةٌ', 'a pharmacy', 'pl. صَيْدَلِيَّاتٌ'], ['دَوَاءٌ', 'medicine', 'pl. أَدْوِيَةٌ'], ['مَوْعِدٌ', 'an appointment', 'pl. مَوَاعِيدُ'], ['خُذْ / خُذِي', 'take! (m. / f.)', '—']],
    questionEn: 'Where do you go when you are ill? Write one place in Arabic.',
    questionAr: 'أَذْهَبُ إِلَى …',
    homework: {
      core: 'Website F5-L08: the vocabulary tab and the “Symptom, injury or feeling?” sorter.',
      develop: 'Website writing task: four patient messages with location and duration.',
      stretch: 'Write a clinic triage note: symptom, duration, cause and impact.',
    },
    wordsSource: 'The five words come from the website F5-L09 lesson (at the doctor and pharmacy).',
  },
  remember: 'Remember: عِنْدِي + symptom · أَشْعُرُ بِـ · أَلَمٌ فِي (not عَلَى) · مُنْذُ + time.',
});

module.exports = { meta, slides };
