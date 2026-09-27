'use strict';
/* AT-A-L07 · Body Parts and Health Problems — website: Advanced Topics › Topic A › Lesson 7 (lesson engine F5-L07 “The Body and Its Parts”).
   Topic layer: the Topic A focus adds symptoms and duration (عِنْدِي … · مُنْذُ …), taken from the website F5 lesson 8 vocabulary, patterns and rules. */
const T = require('./topic-common');
const D = require('./d-common');
const { q, translit } = D;

const meta = T.meta('A', 7, { fileTitle: 'Body_Parts_and_Health_Problems', chip: 'Body and Health', icon: 'FaHeartPulse' });
const nx = T.nextOf('A', 7);

const G2 = (sing, du, pl) => ({ tag: 'one · two · pl', forms: [{ l: 'pl.', ar: pl }, { l: 'two', ar: du }, { l: 'one', ar: sing }] });
const forms = {
  'رَأْسٌ': { tag: 'm. · هٰذَا', forms: [{ l: 'pl.', ar: 'رُؤُوسٌ' }, { l: 'my', ar: 'رَأْسِي' }] },
  'وَجْهٌ': { tag: 'm. · هٰذَا', forms: [{ l: 'pl.', ar: 'وُجُوهٌ' }, { l: 'my', ar: 'وَجْهِي' }] },
  'عَيْنٌ / عَيْنَانِ': G2('عَيْنٌ', 'عَيْنَانِ', 'عُيُونٌ'),
  'أُذُنٌ / أُذُنَانِ': G2('أُذُنٌ', 'أُذُنَانِ', 'آذَانٌ'),
  'أَنْفٌ': { tag: 'm. · هٰذَا', forms: [{ l: 'pl.', ar: 'أُنُوفٌ' }, { l: 'my', ar: 'أَنْفِي' }] },
  'فَمٌ': { tag: 'm. · هٰذَا', forms: [{ l: 'pl.', ar: 'أَفْوَاهٌ' }, { l: 'my', ar: 'فَمِي' }] },
  'سِنٌّ / أَسْنَانٌ': { tag: 'f. · هٰذِهِ', forms: [{ l: 'pl.', ar: 'أَسْنَانٌ' }, { l: 'my teeth', ar: 'أَسْنَانِي' }] },
  'يَدٌ / يَدَانِ': G2('يَدٌ', 'يَدَانِ', 'أَيْدٍ'),
  'قَدَمٌ / قَدَمَانِ': G2('قَدَمٌ', 'قَدَمَانِ', 'أَقْدَامٌ'),
  'ذِرَاعٌ': { tag: 'f. · هٰذِهِ', forms: [{ l: 'two', ar: 'ذِرَاعَانِ' }, { l: 'my', ar: 'ذِرَاعِي' }] },
  'رِجْلٌ': { tag: 'f. · هٰذِهِ', forms: [{ l: 'two', ar: 'رِجْلَانِ' }, { l: 'my', ar: 'رِجْلِي' }] },
};

// Topic layer: website F5 lesson 8 symptoms (the Topic A page adds “symptoms and duration” to this lesson)
const SYM = [['صُدَاعٌ', 'headache'], ['حُمَّى', 'fever'], ['سُعَالٌ', 'cough'], ['زُكَامٌ', 'a cold'], ['أَلَمُ الحَلْقِ', 'sore throat'], ['أَلَمُ المَعِدَةِ', 'stomach ache']];
const symptoms = {
  type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Topic A · health problems (website F5 lesson 8)', title: 'What is wrong?', ar: 'الأَعْرَاضُ',
  items: SYM.map(([ar, en], i) => ({ n: 32 + i, ar, en, tr: translit(ar), core: true, tag: i === 1 ? 'f.' : 'm.', forms: [{ l: 'I have', ar: `عِنْدِي ${ar.replace('أَلَمُ', 'أَلَمٌ فِي')}`.replace('فِي الحَلْقِ', 'فِي حَلْقِي').replace('فِي المَعِدَةِ', 'فِي مَعِدَتِي') }] })),
  notes: `TOPIC A KEY WORDS — symptoms from the website F5 lesson 8 vocabulary (“Common symptoms”). The Topic A page lists “possessive suffixes; عِنْد; symptoms and duration” for this lesson, so these six are CORE today.
Every card shows the “I have …” sentence. أَلَمٌ فِي + body part + ـي (my): عِنْدِي أَلَمٌ فِي رَأْسِي. Other website symptoms for homework: أَلَمُ الأَسْنَانِ (toothache), حَسَاسِيَّةٌ (allergy), غَثَيَانٌ (nausea), دُوَارٌ (dizziness).`,
};

const raw = D.devLesson('F5-L07', {
  siteRef: 'Advanced Topics › Topic A › Lesson 7 (AT-A-L07), lesson engine Pathways › Foundation › F5 › F5-L07 (symptom language from F5 lesson 8)',
  support: `• Two halves: the body (website F5-L07 engine) and what is wrong with it (Topic A focus: symptoms and duration, from the website F5 lesson 8 page). Core: 8 face and head words + “this is my …” + “I have a headache / pain in my …”. Develop: هٰذَا / هٰذِهِ by gender, duals (عَيْنَانِ), and مُنْذُ + time. Stretch: describe a problem in 4–5 connected sentences with duration and a cause, and ask a follow-up question.
• Gender surprise: يَدٌ، عَيْنٌ، أُذُنٌ، رِجْلٌ، قَدَمٌ are feminine without ـة (website common error). Teach them with هٰذِهِ.
• Sensitivity: invented patients only — never ask students about their own medical history.
• Links: AT-A-L06 (healthy habits → advice next lesson); AT-A-L02 time words return in مُنْذُ يَوْمَيْنِ / مُنْذُ أُسْبُوعٍ.
• Urdu bridge: جسم، قلب، صدر، حلق، بخار (not Arabic), زکام ← زُكَامٌ، درد (Persian) / أَلَمٌ.`,
  teach: 'Body words with this (m./f.), then I have … / pain in my … / since …',
  wedo: 'Picture match, sort masculine / feminine, fix and listen.',
  next: nx,
  flexGroups: [1, 2, 3],
  kwText: '31 body words from the website in 4 groups, plus 6 symptoms (Topic A). Core: head and face + the six symptoms. Upper body, lower body and actions are FLEX / homework.',
  doNow: {
    questions: [
      q('What does رَأْسٌ mean?', ['head', 'hand', 'eye'], 'Prepared at home (AT-A-L06).'),
      q('What does عَيْنَانِ mean?', ['two eyes', 'one eye', 'two hands'], 'Prepared at home (AT-A-L06).'),
      q('Complete: التَّمْرُ غَنِيٌّ ___ الحَدِيدِ.', ['بِـ', 'عَلَى', 'إِلَى'], 'AT-A-L06: rich in + bi-.'),
      q('Choose the advice.', ['يَجِبُ أَنْ نَشْرَبَ المَاءَ.', 'أُحِبُّ المَاءَ.', 'هٰذَا مَاءٌ.'], 'AT-A-L06: healthy habits.'),
      q('What does مُنْذُ يَوْمَيْنِ mean?', ['for two days', 'in two days', 'two days ago'], 'New today — guess from يَوْمٌ (AT-A-L02).'),
    ],
    keyIdea: { text: 'Add -ī for “my”: ra’s → ra’sī (my head). Say what is wrong with ‘indī (I have) + since how long with mundhu.', ar: 'رَأْسِ{e|ي}  ·  {w|عِنْدِي} صُدَاعٌ {k|مُنْذُ} أَمْسِ' },
    retrieves: 'Questions 1–2 test two of the five body words prepared at home at the end of AT-A-L06. Questions 3–4 retrieve AT-A-L06 (rich in, advice). Question 5 previews today’s duration phrase.',
  },
  routes: {
    core: ['I can name 8 parts of the head and face.', 'I can say “I have a headache” and “pain in my …”.'],
    develop: ['I can choose this (m.) / this (f.) and use “two” forms.', 'I can say how long: since yesterday / for two days.'],
    stretch: ['I can describe a health problem in connected sentences.', 'I can ask a follow-up question (since when? where exactly?).'],
  },
  bridge: [
    { ar: 'جِسْمٌ', urdu: 'جسم', tr: 'jism', en: 'body' },
    { ar: 'قَلْبٌ', urdu: 'قلب', tr: 'qalb', en: 'heart' },
    { ar: 'صَدْرٌ', urdu: 'صدر / سینہ', tr: 'ṣadr', en: 'chest' },
    { ar: 'زُكَامٌ', urdu: 'زکام', tr: 'zukām', en: 'a cold' },
    { ar: 'حُمَّى', urdu: 'بخار', tr: 'ḥummā', en: 'fever (not cognate)' },
  ],
  bridgeNotes: 'URDU BRIDGE: جسم، قلب and زکام are the same words. صدر in Urdu means “president” / “chest” (سینہ is everyday Urdu). CAREFUL: fever is بخار in Urdu (Persian) — Arabic is حُمَّى.',
  core: ['رَأْسٌ', 'وَجْهٌ', 'عَيْنٌ / عَيْنَانِ', 'أُذُنٌ / أُذُنَانِ', 'أَنْفٌ', 'فَمٌ', 'سِنٌّ / أَسْنَانٌ', 'حَلْقٌ / حَنْجَرَةٌ'],
  forms,
  vocabNotes: {
    0: 'Every card: gender (هٰذَا / هٰذِهِ) and “my …” or the “two” form. Eyes and ears are feminine and come in twos: عَيْنَانِ، أُذُنَانِ.',
    1: 'FLEX: upper body. يَدٌ and ذِرَاعٌ are feminine. قَلْبٌ and مَعِدَةٌ return in the listening and reading.',
    2: 'FLEX: lower body. رِجْلٌ and قَدَمٌ are feminine.',
    3: 'FLEX: actions — they appear in the listening (أَرَى بِعَيْنَيَّ، أَسْمَعُ بِأُذُنَيَّ).',
  },
  grammar: [
    symptoms,
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · this, my and two (website rules + table)', title: 'This is my … I have two …', ar: 'هٰذَا · هٰذِهِ · ـي · ـانِ',
      cols: [{ label: 'Body part', w: 2.4, size: 26 }, { label: 'Gender', w: 1.8, size: 20 }, { label: 'This is my …', w: 3.2, size: 24 }, { label: 'Two (dual)', w: 2.6, size: 24 }, { label: 'Meaning', w: 2.33 }],
      rows: [
        { core: true, cells: [{ ar: 'رَأْسٌ' }, 'm.', { ar: '{w|هٰذَا} رَأْسِ{e|ي}' }, { ar: '—' }, 'head'] },
        { core: true, cells: [{ ar: 'عَيْنٌ' }, 'f.', { ar: '{p|هٰذِهِ} عَيْنِ{e|ي}' }, { ar: 'عَيْنَ{k|انِ}' }, 'eye'] },
        { cells: [{ ar: 'أُذُنٌ' }, 'f.', { ar: '{p|هٰذِهِ} أُذُنِ{e|ي}' }, { ar: 'أُذُنَ{k|انِ}' }, 'ear'] },
        { cells: [{ ar: 'يَدٌ' }, 'f.', { ar: '{p|هٰذِهِ} يَدِ{e|ي}' }, { ar: 'يَدَ{k|انِ}' }, 'hand'] },
        { cells: [{ ar: 'أَنْفٌ' }, 'm.', { ar: '{w|هٰذَا} أَنْفِ{e|ي}' }, { ar: '—' }, 'nose'] },
      ],
      foot: 'No -a ending but still feminine: ‘ayn, udhun, yad, rijl, qadam → hādhihi.',
      notes: `GRAMMAR PART 1 — website rules “Use هٰذَا with masculine nouns”, “Use هٰذِهِ with feminine nouns”, “Form the dual” (ـَانِ) and “Add the possessive ending” (ـِي = my), and the website gender table.
Website common error: do not choose هٰذَا just because there is no ـة: هٰذِهِ يَدِي ✓ (هٰذَا يَدِي ✗).
Quick-fire: point to a part of your face on camera; students type هٰذَا or هٰذِهِ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · what is wrong, and since when? (website F5 lesson 8 rules · Topic A)', title: 'I have … pain in my … since …', ar: 'عِنْدِي · أَلَمٌ فِي · مُنْذُ',
      cards: [
        { chip: 'NAME IT · CORE', color: '1D5FBF', head: 'عِنْدِي …', big: 'عِنْدِي صُدَاعٌ وَحُمَّى.', en: 'I have a headache and a fever.', clue: '‘indī = I have.' },
        { chip: 'WHERE · CORE', color: '1E7B4F', head: 'أَلَمٌ فِي …ي', big: 'عِنْدِي أَلَمٌ فِي ظَهْرِي.', en: 'I have pain in my back.', clue: 'my = -ī on the body part.' },
        { chip: 'HOW LONG · DEVELOP', color: 'C77700', head: 'مُنْذُ …', big: 'تُؤْلِمُنِي أَسْنَانِي مُنْذُ يَوْمَيْنِ.', en: 'My teeth have hurt for two days.', clue: 'mundhu = since / for.' },
      ],
      error: { text: 'A girl says marīḍa, not marīḍ (website rule “Agree with the speaker”).', pairs: [['أَنَا مَرِيضَةٌ اليَوْمَ.', 'أَنَا مَرِيضٌ اليَوْمَ.']] },
      notes: `GRAMMAR PART 2 (Topic A) — website F5 lesson 8 rules “Locate pain” (عِنْدِي أَلَمٌ فِي + جُزْءِ الجِسْمِ), “Name an illness directly” (عِنْدِي صُدَاعٌ)، “Agree with the speaker” (مَرِيضٌ / مَرِيضَةٌ) and “Add duration” (مُنْذُ أَمْسِ · مُنْذُ يَوْمَيْنِ · مُنْذُ أُسْبُوعٍ).
عِنْدَ + pronoun is the Topic A grammar point: عِنْدِي (I have), عِنْدَهُ (he has), عِنْدَهَا (she has) — Develop uses it to report a partner in the challenge.
Stretch: يُؤْلِمُنِي + masculine body part / تُؤْلِمُنِي + feminine or plural (تُؤْلِمُنِي أَسْنَانِي، يُؤْلِمُنِي رَأْسِي).`,
    },
  ],
  quick: [0, 1, 2, 4],
  rest: [3, 5, 6, 7],
  ido: {
    title: 'Watch me explain what is wrong',
    steps: [
      { head: 'Show', ar: '{w|هٰذَا} رَأْسِ{e|ي}، وَ{p|هٰذِهِ} عَيْنِ{e|ي}.', think: 'Head m. → hādhā. Eye f. → hādhihi.' },
      { head: 'Name it', ar: 'أَنَا مَرِيضٌ اليَوْمَ. عِنْدِي صُدَاعٌ.', think: 'I have = ‘indī.' },
      { head: 'Where', ar: 'عِنْدِي أَلَمٌ فِي عَيْنَيَّ أَيْضًا.', think: 'Both eyes: ‘aynayya.' },
      { head: 'How long', ar: '{k|مُنْذُ} يَوْمَيْنِ.', think: 'Duration: mundhu.' },
    ],
    legend: ['w', 'p', 'e', 'k'], legendLabels: { w: 'THIS (M.)', p: 'THIS (F.)', e: 'MY', k: 'SINCE' },
    model: '{w|هٰذَا} رَأْسِ{e|ي}، وَ{p|هٰذِهِ} عَيْنِ{e|ي}. أَنَا مَرِيضٌ اليَوْمَ: عِنْدِي صُدَاعٌ، وَعِنْدِي أَلَمٌ فِي عَيْنَيَّ أَيْضًا {k|مُنْذُ} يَوْمَيْنِ. أُرِيدُ أَنْ أَرْتَاحَ.',
    modelEn: 'This is my head, and this is my eye. I am ill today: I have a headache, and I also have pain in my eyes, for two days. I want to rest.',
    notes: 'I DO (3 min) — the website F5-L07 pattern (هٰذَا رَأْسِي، وَهٰذِهِ يَدِي) joined to the F5 lesson 8 patterns (عِنْدِي صُدَاعٌ · مُنْذُ يَوْمَيْنِ). Then re-say it as a girl: مَرِيضَةٌ.',
  },
  game: {
    title: 'This or this? Match the picture',
    pick: [0, 2, 4],
    en: ['These are the two eyes.', 'This is a nose.', 'This is a hand.'],
    icons: [[['fa6', 'FaEye', '1D5FBF'], ['fa6', 'FaEye', '1D5FBF']], [['fa6', 'FaFaceSmile', 'C77700']], [['fa6', 'FaHand', '8A5A2B']]],
    labels: ['two eyes', 'a nose (face)', 'a hand'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Ask: why هٰذِهِ for the hand? (يَدٌ is feminine). Other cards for homework: هٰذِهِ أُذُنٌ، هٰذَا سِنٌّ، هٰذِهِ سَاقٌ.',
  },
  sorterCats: ['this (m.) · هٰذَا', 'this (f.) · هٰذِهِ'],
  sorterNotes: 'Then: say each one with “my” — رَأْسِي، يَدِي، عَيْنِي …',
  hints: ['A hand is masculine or feminine?', 'Two eyes: which form?', 'We hear with which part?'],
  coreTip: 'Listen twice. Core: questions 1 and 2.\nListen for: بِعَيْنَيَّ · بِأَنْفِي · يَدِي.',
  listenRoutes: 'Core: questions 1 and 2. Develop / Stretch: all 4.',
  gloss: [
    ['أَرَى بِعَيْنَيَّ، وَأَسْمَعُ بِأُذُنَيَّ.', 'I see with my eyes, and I hear with my ears.'],
    ['أَشُمُّ بِأَنْفِي، وَآكُلُ بِفَمِي.', 'I smell with my nose, and I eat with my mouth.'],
    ['أَكْتُبُ بِيَدِي اليُمْنَى،', 'I write with my right hand,'],
    ['وَأَرْكُضُ بِرِجْلَيَّ وَقَدَمَيَّ.', 'and I run with my legs and feet.'],
    ['عِنْدَمَا أَتَعَبُ، أَضَعُ يَدِي عَلَى صَدْرِي وَأَتَنَفَّسُ بِعُمْقٍ.', 'When I get tired, I put my hand on my chest and breathe deeply.'],
  ],
  speak: {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'مَا هٰذَا / مَا هٰذِهِ؟' },
      { route: 'develop', ar: 'كَمْ عَيْنًا لَدَيْكَ؟ بِأَيِّ عُضْوٍ نَسْمَعُ؟' },
      { route: 'develop', ar: 'مَا بِكَ؟ / مَا بِكِ؟' },
      { route: 'stretch', ar: 'مُنْذُ مَتَى؟ أَيْنَ الأَلَمُ بِالضَّبْطِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'هٰذَا ______ . / هٰذِهِ ______ .' },
      { route: 'develop', ar: 'لِي عَيْنَانِ. نَسْمَعُ بِـ ______ .' },
      { route: 'develop', ar: 'عِنْدِي ______ . / عِنْدِي أَلَمٌ فِي ______ ي.' },
      { route: 'stretch', ar: 'مُنْذُ ______ . الأَلَمُ فِي ______ ، وَ ______ .' },
    ],
    modelEn: ['What is this?', 'This is a hand.'],
    notes: 'Website prompts 1–3 (body). The symptom prompts (مَا بِكَ؟ “what’s wrong with you?”, مُنْذُ مَتَى؟) are teacher-added from the website F5 lesson 8 vocabulary for the Topic A focus.',
  },
  write: {
    core: { amount: '5 sentences', task: 'Website Core: label body parts and choose the right “this”.', how: 'Three “this is my …” sentences + two “I have …” sentences (a symptom and a pain).' },
    develop: { amount: '7–8 sentences', task: 'Website task: the body and what parts do — four “my” forms and two “two” forms.', how: 'Add one health problem with since / for (mundhu).' },
    stretch: { amount: '8–10 sentences', task: 'Website Stretch: a science-style explanation with duals, plurals and purpose (li-).', how: 'Then a patient’s note: symptoms, where, how long and one follow-up question.' },
  },
  frames: {
    core: [
      { en: 'This is my head.', ar: 'هٰذَا رَأْسِي.' },
      { en: 'This is my hand.', ar: 'هٰذِهِ يَدِي.' },
      { en: 'I have a headache.', ar: 'عِنْدِي صُدَاعٌ.' },
      { en: 'I have pain in my …', ar: 'عِنْدِي أَلَمٌ فِي ______ ي.' },
      { en: 'I am ill (m. / f.).', ar: 'أَنَا مَرِيضٌ. / أَنَا مَرِيضَةٌ.' },
    ],
    develop: [
      { en: 'I have two eyes and two ears.', ar: 'لِي عَيْنَانِ وَأُذُنَانِ.' },
      { en: 'I see with my eyes.', ar: 'أَرَى بِعَيْنَيَّ.' },
      { en: '… since yesterday.', ar: '______ مُنْذُ أَمْسِ.' },
      { en: '… for two days / for a week.', ar: '______ مُنْذُ يَوْمَيْنِ / مُنْذُ أُسْبُوعٍ.' },
      { en: 'He has … / She has …', ar: 'عِنْدَهُ ______ . / عِنْدَهَا ______ .' },
    ],
    bank: ['رَأْسٌ', 'عَيْنٌ', 'أُذُنٌ', 'أَنْفٌ', 'فَمٌ', 'يَدٌ', 'صُدَاعٌ', 'حُمَّى', 'سُعَالٌ', 'عِنْدِي', 'أَلَمٌ فِي', 'مُنْذُ'],
  },
  stretch: [
    ['فِي الرَّأْسِ عَيْنَانِ لِلرُّؤْيَةِ', 'in the head are two eyes for seeing'],
    ['العِظَامُ تَدْعَمُ الجِسْمَ', 'the bones support the body'],
    ['وَالجِلْدُ يَحْمِيهِ', 'and the skin protects it'],
    ['تُؤْلِمُنِي أَسْنَانِي مُنْذُ يَوْمَيْنِ', 'my teeth have hurt for two days'],
    ['أَنَا مُصَابٌ بِالزُّكَامِ', 'I have (am suffering from) a cold'],
  ],
  modelEn: 'This is my head, and this is my face. I have two eyes and two ears. I see with my eyes and hear with my ears. This is my right hand, and this is my left hand. I write with my hand, and I walk with my feet. The heart is in my chest.',
  find: ['“this” with a masculine part', '“this” with a feminine part', 'a “two” form', 'an action verb'],
  modelNotes: 'Evidence: هٰذَا رَأْسِي · هٰذِهِ يَدِي · عَيْنَانِ وَأُذُنَانِ · أَرَى / أَسْمَعُ / أَكْتُبُ / أَمْشِي. Topic A extension: add one sentence with عِنْدِي + symptom + مُنْذُ.',
  selfCheck: [
    { route: 'core', text: 'Feminine body parts take hādhihi.' },
    { route: 'core', text: 'I used ‘indī for a symptom.' },
    { route: 'develop', text: 'I used a “two” form (-āni).' },
    { route: 'develop', text: 'I said how long with mundhu.' },
    { route: 'stretch', text: 'My problem has symptom, place, time and a question.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['نِظَامٌ مُتَكَامِلٌ', 'a complete system'], ['لِلرُّؤْيَةِ', 'for seeing'], ['لِلسَّمْعِ', 'for hearing'], ['لِلشَّمِّ', 'for smelling'], ['وَالكَلَامِ', 'and speaking'],
    ['يَعْمَلُ دَائِمًا', 'works all the time'], ['تَدْعَمُ', 'support'], ['يَحْمِيهِ', 'protects it'], ['أَيْدِيَنَا', 'our hands'], ['أَقْدَامَنَا', 'our feet'],
  ],
  prep: {
    words: [['طَبِيبٌ', 'doctor', 'f. طَبِيبَةٌ · pl. أَطِبَّاءُ'], ['صَيْدَلِيَّةٌ', 'pharmacy', 'pl. صَيْدَلِيَّاتٌ'], ['دَوَاءٌ', 'medicine', 'pl. أَدْوِيَةٌ'], ['مَوْعِدٌ', 'appointment', 'pl. مَوَاعِيدُ'], ['مُسْتَشْفًى', 'hospital', 'pl. مُسْتَشْفَيَاتٌ']],
    questionEn: 'Where do you go when you have a cold: the doctor, the pharmacy or the hospital?',
    questionAr: 'أَيْنَ تَذْهَبُ عِنْدَمَا تَكُونُ مَرِيضًا؟',
    homework: {
      core: 'Website F5-L07: the picture game and vocabulary tab — label 12 body parts with this (m. / f.).',
      develop: 'Website writing task: 7–8 sentences about the body, plus one health problem with since.',
      stretch: 'Write a patient’s note: three symptoms, where, how long and one question for the doctor.',
    },
    wordsSource: 'The five words come from the website F5-L09 vocabulary (the AT-A-L08 lesson engine).',
  },
  remember: 'Remember: 5 doctor and pharmacy words + “‘indī …”.',
});
const slides = T.wrap('A', 7, 'F5-L07', raw, {
  challenge: {
    steps: [
      'Teacher gives each student a secret problem in a private chat.',
      'Describe it without naming it: where, how it feels, how long.',
      'The class guesses the symptom, the body part and the duration.',
      'The describer answers one follow-up question (since when? where exactly?).',
    ],
    routes: {
      core: 'Clue with one body part: “‘indī alam fī …ī” — the class names the symptom.',
      develop: 'Two clues + a duration with mundhu; guessers answer in a full sentence.',
      stretch: 'Describe it as a third person (‘indahu / ‘indahā) and answer a follow-up question.',
    },
    phrases: [['عِنْدِي أَلَمٌ فِي …', 'I have pain in my …'], ['مُنْذُ أَمْسِ', 'since yesterday'], ['مُنْذُ مَتَى؟', 'since when?'], ['هَلْ عِنْدَكَ صُدَاعٌ؟', 'do you have a headache?']],
    notes: 'Secret problems to send (private chat): صُدَاعٌ مُنْذُ أَمْسِ · أَلَمٌ فِي الحَلْقِ مُنْذُ يَوْمَيْنِ · أَلَمُ المَعِدَةِ مُنْذُ الصَّبَاحِ · سُعَالٌ مُنْذُ أُسْبُوعٍ · أَلَمٌ فِي الرِّجْلِ مُنْذُ ثَلَاثَةِ أَيَّامٍ · زُكَامٌ مُنْذُ أُسْبُوعٍ. Model clue: عِنْدِي أَلَمٌ فِي رَأْسِي مُنْذُ أَمْسِ. → صُدَاعٌ!',
  },
});
module.exports = { meta, slides };
