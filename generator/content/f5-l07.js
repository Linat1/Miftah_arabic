'use strict';
/* F5-L07 · The Body and Its Parts — website: Pathways › Foundation › F5 › F5-L07 (body nouns, هٰذَا / هٰذِهِ by grammatical gender, the dual for paired parts, possessive ـِي, بِـ + body part with sense verbs). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F5')({
  n: 7, fileTitle: 'The_Body_and_Its_Parts', chip: 'The Body',
  title: 'The Body and Its Parts', arabic: 'الجِسْمُ وَأَعْضَاؤُهُ',
  focus: 'Name and point to body parts, choose هٰذَا or هٰذِهِ by the word’s gender, use the dual for paired parts and say what we do with them (أَرَى بِعَيْنَيَّ).',
  icon: 'FaPerson', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const g = (gen, dual, pl) => ({ tag: gen, forms: [{ l: 'one', ar: dual[0] }, { l: 'two', ar: dual[1] }, { l: 'pl.', ar: pl }] });
const slides = D.devLesson('F5-L07', {
  support: `• Core: label twelve body parts with the word bank and point: هٰذَا رَأْسِي · هٰذِهِ يَدِي. A “Simon says” (قَالَ المُعَلِّمُ: المِسْ رَأْسَكَ!) warm-up works brilliantly on camera.
• Develop: explain six body parts’ functions: أَرَى بِعَيْنَيَّ، أَسْمَعُ بِأُذُنَيَّ …
• Stretch: a short science-style explanation with duals, plurals and purpose لِـ (عَيْنَانِ لِلرُّؤْيَةِ).
• The website’s big warning: يَدٌ، عَيْنٌ، أُذُنٌ، قَدَمٌ، رِجْلٌ are FEMININE without ة → هٰذِهِ.
• Sensitivity: students with disabilities or medical conditions may prefer a drawing or a cartoon character — never ask anyone to describe their own body.`,
  teach: 'Face, upper and lower body, then this (m. / f.), two (dual) and my.',
  wedo: 'Picture match, sort هٰذَا / هٰذِهِ, fix the mistakes and listen: which body part?',
  next: { nextCode: 'F5-L08', nextTitle: 'Health Problems and How You Feel', nextAr: 'المَشَاكِلُ الصِّحِّيَّةُ وَالشُّعُورُ' },
  doNow: {
    questions: [
      q('What does رَأْسٌ mean?', ['head', 'hand', 'eye'], 'Prepared at home (F5-L06).'),
      q('What does عَيْنٌ mean?', ['eye', 'ear', 'leg'], 'Prepared at home (F5-L06).'),
      q('Ask “How much is the soup?”', ['كَمْ ثَمَنُ الحَسَاءِ؟', 'كَمْ السِّعْرُ الحَسَاءُ؟', 'أَيْنَ الحَسَاءُ؟'], 'F5-L06: kam thamanu + item.'),
      q('Complete: المَقْلُوبَةُ ____ مِنَ الأَرُزِّ.', ['تَتَكَوَّنُ', 'يَتَكَوَّنُ', 'أَتَكَوَّنُ'], 'F5-L06: a feminine dish.'),
      q('Which word means “cheap”?', ['رَخِيصٌ', 'غَالٍ', 'المَجْمُوعُ'], 'F5-L06 menu words.'),
    ],
    keyIdea: { text: 'Some body words are feminine WITHOUT ة — hand, eye, ear, foot, leg. They take هٰذِهِ.', ar: 'هٰذَا رَأْسِي · {e|هٰذِهِ} يَدِي' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F5-L06. Questions 3–5 retrieve F5-L06 (price question, feminine dish, value).',
  },
  routes: {
    core: ['I can name and point to twelve body parts.', 'I can say this is my … with هٰذَا / هٰذِهِ.'],
    develop: ['I can use the dual: عَيْنَانِ، يَدَانِ.', 'I can say what we do with six body parts.'],
    stretch: ['I can write a science-style explanation.', 'I can use purpose لِـ: أُذُنَانِ لِلسَّمْعِ.'],
  },
  bridge: [
    { ar: 'جِسْمٌ', urdu: 'جسم', tr: 'jism', en: 'body' },
    { ar: 'قَلْبٌ', urdu: 'قلب', tr: 'qalb', en: 'heart' },
    { ar: 'عَيْنٌ', urdu: 'عین', tr: 'ain', en: 'eye (as in عین الیقین)' },
    { ar: 'صَدْرٌ', urdu: 'سینہ / صدر', tr: 'sadr', en: 'Urdu: president · Arabic: chest' },
    { ar: 'عِظَامٌ', urdu: 'عظیم', tr: 'azīm', en: 'great — a false friend (bones)' },
  ],
  bridgeNotes: 'URDU BRIDGE: جسم and قلب are identical. عین appears in phrases (عین مطابق “exactly”). صدر in Urdu is “president / chairman” (the one at the front) — in Arabic صَدْرٌ is the chest. عظیم (great) and عِظَامٌ (bones) share letters but not meaning — a fun false friend. Also: دماغ (Urdu brain) is Arabic دِمَاغٌ; زبان is Persian — Arabic tongue = لِسَانٌ (compare لسانیات “linguistics”).',
  core: ['رَأْسٌ', 'وَجْهٌ', 'عَيْنٌ / عَيْنَانِ', 'أُذُنٌ / أُذُنَانِ', 'أَنْفٌ', 'فَمٌ', 'يَدٌ / يَدَانِ', 'ذِرَاعٌ', 'ظَهْرٌ', 'رِجْلٌ', 'قَدَمٌ / قَدَمَانِ', 'بَطْنٌ'],
  forms: {
    'عَيْنٌ / عَيْنَانِ': g('f. (hādhihi)', ['عَيْنٌ', 'عَيْنَانِ'], 'عُيُونٌ'),
    'أُذُنٌ / أُذُنَانِ': g('f. (hādhihi)', ['أُذُنٌ', 'أُذُنَانِ'], 'آذَانٌ'),
    'يَدٌ / يَدَانِ': g('f. (hādhihi)', ['يَدٌ', 'يَدَانِ'], 'أَيْدٍ'),
    'قَدَمٌ / قَدَمَانِ': g('f. (hādhihi)', ['قَدَمٌ', 'قَدَمَانِ'], 'أَقْدَامٌ'),
    'رَأْسٌ': { tag: 'm. (hādhā)', forms: [{ l: 'one', ar: 'رَأْسٌ' }, { l: 'my', ar: 'رَأْسِي' }, { l: 'pl.', ar: 'رُؤُوسٌ' }] },
    'رِجْلٌ': g('f. (hādhihi)', ['رِجْلٌ', 'رِجْلَانِ'], 'أَرْجُلٌ'),
  },
  vocabSlides: 4,
  vocabNotes: {
    0: 'Paired parts show one / two / plural. The dual ending -āni = “two” (عَيْنَانِ two eyes). Point and say: هٰذِهِ عَيْنِي · هٰذِهِ أُذُنِي · هٰذَا أَنْفِي.',
    1: 'يَدٌ (hand) is feminine; ذِرَاعٌ (arm) is usually feminine too. قَلْبٌ (heart) and مَعِدَةٌ (stomach) are inside — use فِي: القَلْبُ فِي الصَّدْرِ.',
    2: 'FLEX: lower body — رِجْلٌ and قَدَمٌ are feminine. رُكْبَةٌ (knee) is feminine with ة.',
    3: 'FLEX: the action verbs are in the he-form (يَرَى). For “I”: أَرَى، أَسْمَعُ، أَشُمُّ، أَلْمِسُ، أَتَنَفَّسُ — used in the listening script.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · this is my … (website rules 1, 2 and 4)', title: 'This is my head · this is my hand', ar: 'هٰذَا · هٰذِهِ',
      cols: [{ label: 'Masculine · هٰذَا', w: 6.1, size: 26 }, { label: 'Feminine · هٰذِهِ', w: 6.23, size: 26 }],
      rows: [
        { core: true, cells: [P('{w|هٰذَا} رَأْسِي.', 'This is my head.'), P('{e|هٰذِهِ} يَدِي.', 'This is my hand.')] },
        { core: true, cells: [P('{w|هٰذَا} أَنْفِي.', 'This is my nose.'), P('{e|هٰذِهِ} عَيْنِي.', 'This is my eye.')] },
        { core: true, cells: [P('{w|هٰذَا} فَمِي.', 'This is my mouth.'), P('{e|هٰذِهِ} أُذُنِي.', 'This is my ear.')] },
        { cells: [P('{w|هٰذَا} ظَهْرِي.', 'This is my back.'), P('{e|هٰذِهِ} قَدَمِي.', 'This is my foot.')] },
        { cells: [P('{w|هٰذَا} وَجْهِي.', 'This is my face.'), P('{e|هٰذِهِ} رُكْبَتِي.', 'This is my knee.')] },
      ],
      foot: 'The ending -ī means “my”. Hand, eye, ear, foot and leg are feminine even without ة. Knee: ة becomes t before -ī.',
      notes: `GRAMMAR PART 1 — website rules “Use هٰذَا with masculine nouns”, “Use هٰذِهِ with feminine nouns (some without ـة)” and “Add the possessive ending ـِي”.
Website common error: “Do not choose هٰذَا only by looking for ـة. يَدٌ، عَيْنٌ and أُذُنٌ are feminine: هٰذِهِ يَدِي.”
Online: students point to each part on camera as the class says the sentence (camera optional; a drawing works too).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · two of them · with my … (website rule 3 and patterns)', title: 'Two eyes — I see with my eyes', ar: 'المُثَنَّى · بِـ',
      cards: [
        { chip: 'DUAL · TWO', color: '6B4C9A', head: 'عَيْنَانِ · يَدَانِ', big: 'لِي عَيْنَانِ وَأُذُنَانِ.', en: 'I have two eyes and two ears.', clue: '-āni = two. No “ithnān” needed.' },
        { chip: 'WITH … · بِـ', color: '1D5FBF', head: 'أَرَى بِعَيْنَيَّ', big: 'أَرَى بِعَيْنَيَّ، وَأَسْمَعُ بِأُذُنَيَّ.', en: 'I see with my eyes and hear with my ears.', clue: 'bi- + my two …: -ayya.' },
        { chip: 'WHERE? · فِي', color: '1E7B4F', head: 'القَلْبُ فِي الصَّدْرِ', big: 'القَلْبُ فِي الصَّدْرِ، وَالمَعِدَةُ فِي البَطْنِ.', en: 'The heart is in the chest; the stomach is in the abdomen.', clue: 'Inside organs + fī.' },
      ],
      error: { text: 'Website: use the dual noun for two eyes.', pairs: [['لِي عَيْنَانِ.', 'عِنْدِي اثْنَانِ عَيْنٌ.']] },
      notes: `GRAMMAR PART 2 — website rule “Form the dual” (ـَانِ as subject, ـَيْنِ elsewhere) and patterns 2–4.
Website teaching note: “Dual forms are introduced for recognition and useful paired nouns. The core goal is communication, not a complete dual-case paradigm.” — Core students only need عَيْنَانِ، أُذُنَانِ، يَدَانِ، قَدَمَانِ.
“My two eyes / with my two eyes”: عَيْنَايَ / بِعَيْنَيَّ — say it, let Stretch students write it.`,
    },
  ],
  quick: [0, 1, 2, 4],
  rest: [3, 5, 7],
  ido: {
    title: 'Watch me describe my body',
    steps: [
      { head: '1 · This is my …', ar: '{w|هٰذَا} رَأْسِي، وَ{w|هٰذَا} وَجْهِي.', think: 'Head, face: m.' },
      { head: '2 · Two', ar: 'لِي {m|عَيْنَانِ} وَ{m|أُذُنَانِ}.', think: 'Pairs → -āni.' },
      { head: '3 · With my …', ar: 'أَرَى بِعَيْنَيَّ، وَأَسْمَعُ بِأُذُنَيَّ.', think: 'Sense verb + bi-.' },
      { head: '4 · Feminine!', ar: '{e|هٰذِهِ} يَدِي اليُمْنَى، وَ{e|هٰذِهِ} يَدِي اليُسْرَى.', think: 'Hand is f. → hādhihi, al-yumnā.' },
    ],
    legend: ['w', 'e', 'm'], legendLabels: { w: 'MASCULINE', e: 'FEMININE', m: 'TWO' },
    model: '{w|هٰذَا} رَأْسِي، وَ{w|هٰذَا} وَجْهِي. لِي {m|عَيْنَانِ} وَ{m|أُذُنَانِ}. أَرَى بِعَيْنَيَّ وَأَسْمَعُ بِأُذُنَيَّ. {e|هٰذِهِ} يَدِي اليُمْنَى، وَ{e|هٰذِهِ} يَدِي اليُسْرَى. أَكْتُبُ بِيَدِي، وَأَمْشِي بِقَدَمَيَّ. القَلْبُ فِي صَدْرِي.',
    modelEn: 'This is my head, and this is my face. I have two eyes and two ears. I see with my eyes and hear with my ears. This is my right hand, and this is my left hand. I write with my hand, and I walk with my feet. The heart is in my chest.',
    notes: 'I DO (3 min) — the website writing model built step by step, pointing to each part. Students copy it and draw a stick figure with Arabic labels.',
  },
  game: {
    title: 'Body parts: match the picture',
    pick: [2, 4, 5],
    en: ['This is a nose.', 'This is a hand.', 'This is a leg (shin).'],
    icons: [[['fa6', 'FaFaceSmile', 'C77700']], [['fa6', 'FaHand', 'C77700']], [['fa6', 'FaPersonWalking', '1D5FBF']]],
    labels: ['nose', 'hand', 'leg'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). The clue is هٰذَا (masculine: nose) vs هٰذِهِ (feminine: hand, leg — سَاقٌ is another word for leg/shin). Other website items: هٰذِهِ العَيْنَانِ، هٰذِهِ أُذُنٌ، هٰذَا سِنٌّ.',
  },
  sorterNotes: 'Say each word with هٰذَا or هٰذِهِ aloud before sorting. The surprise items (يَدٌ، عَيْنٌ، قَدَمٌ) are the lesson’s key learning.',
  hints: ['Is hand m. or f.?', 'How do we say “two eyes”?', 'Which body part hears?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for the word after بِـ.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 4, then mime each sentence.',
  gloss: [
    ['أَرَى بِعَيْنَيَّ، وَأَسْمَعُ بِأُذُنَيَّ.', 'I see with my eyes, and I hear with my ears.'],
    ['أَشُمُّ بِأَنْفِي، وَآكُلُ بِفَمِي.', 'I smell with my nose, and I eat with my mouth.'],
    ['أَكْتُبُ بِيَدِي اليُمْنَى، وَأَرْكُضُ بِرِجْلَيَّ وَقَدَمَيَّ.', 'I write with my right hand, and I run with my legs and feet.'],
    ['عِنْدَمَا أَتْعَبُ، أَضَعُ يَدِي عَلَى صَدْرِي وَأَتَنَفَّسُ بِعُمْقٍ.', 'When I get tired, I put my hand on my chest and breathe deeply.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا هٰذَا؟ / مَا هٰذِهِ؟' },
      { route: 'develop', ar: 'كَمْ عَيْنًا لَدَيْكَ؟' },
      { route: 'develop', ar: 'بِأَيِّ عُضْوٍ نَسْمَعُ؟' },
      { route: 'stretch', ar: 'أَيْنَ القَلْبُ؟ وَمَاذَا يَفْعَلُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'هٰذَا ______ . / هٰذِهِ ______ .' },
      { route: 'develop', ar: 'لِي عَيْنَانِ.' },
      { route: 'develop', ar: 'نَسْمَعُ بِـ ______ .' },
      { route: 'stretch', ar: 'القَلْبُ فِي ______ ، وَيَعْمَلُ دَائِمًا.' },
    ],
    modelEn: ['What is this (f.)?', 'This is a hand.'],
    notes: 'Website “Body-part identification” — all four prompts are the website’s. Pairs point (on camera or on a drawing) and ask. Website model: مَا هٰذِهِ؟ — هٰذِهِ يَدٌ. — وَمَا هٰذَا؟ — هٰذَا كَتِفٌ. (مَا هٰذِهِ؟ is asked when the speaker expects a feminine word.)',
  },
  write: {
    core: { amount: '5 sentences', how: 'This is my … (×4, with هٰذَا / هٰذِهِ) and one dual (I have two …).' },
    develop: { amount: '7–8 sentences', how: 'Website task: four possessives, two duals and two action verbs.' },
    stretch: { amount: '8–10 sentences', how: 'A science-style note with duals, plurals and purpose li- (like the reading).' },
  },
  frames: {
    core: [
      { en: 'This is my head.', ar: 'هٰذَا رَأْسِي.' },
      { en: 'This is my hand.', ar: 'هٰذِهِ يَدِي.' },
      { en: 'This is my …', ar: 'هٰذَا … / هٰذِهِ …' },
      { en: 'I have two eyes and two ears.', ar: 'لِي عَيْنَانِ وَأُذُنَانِ.' },
      { en: 'I have two hands.', ar: 'لِي يَدَانِ.' },
    ],
    develop: [
      { en: 'I see with my eyes.', ar: 'أَرَى بِعَيْنَيَّ.' },
      { en: 'I hear with my ears.', ar: 'أَسْمَعُ بِأُذُنَيَّ.' },
      { en: 'I smell with my nose.', ar: 'أَشُمُّ بِأَنْفِي.' },
      { en: 'I write with my right hand.', ar: 'أَكْتُبُ بِيَدِي اليُمْنَى.' },
      { en: 'The heart is in the chest.', ar: 'القَلْبُ فِي الصَّدْرِ.' },
    ],
    bank: ['رَأْسٌ', 'وَجْهٌ', 'عَيْنٌ', 'أُذُنٌ', 'أَنْفٌ', 'فَمٌ', 'يَدٌ', 'رِجْلٌ', 'قَدَمٌ', 'هٰذَا', 'هٰذِهِ', 'بِـ'],
  },
  stretch: [
    ['الجِسْمُ نِظَامٌ مُتَكَامِلٌ', 'the body is a complete system'],
    ['عَيْنَانِ لِلرُّؤْيَةِ', 'two eyes for seeing'],
    ['أُذُنَانِ لِلسَّمْعِ', 'two ears for hearing'],
    ['العِظَامُ تَدْعَمُ الجِسْمَ', 'the bones support the body'],
    ['الجِلْدُ يَحْمِيهِ', 'the skin protects it'],
  ],
  modelEn: 'This is my head, and this is my face. I have two eyes and two ears. I see with my eyes and hear with my ears. This is my right hand, and this is my left hand. I write with my hand, and I walk with my feet. The heart is in my chest.',
  find: ['this (m.)', 'this (f.)', 'a dual', 'with my …'],
  modelNotes: 'Evidence: هٰذَا رَأْسِي · هٰذِهِ يَدِي · عَيْنَانِ، أُذُنَانِ · بِعَيْنَيَّ، بِيَدِي، بِقَدَمَيَّ.',
  selfCheck: [
    { route: 'core', text: 'I labelled twelve body parts.' },
    { route: 'core', text: 'Hand, eye, ear, foot → هٰذِهِ.' },
    { route: 'develop', text: 'I used two duals (-āni).' },
    { route: 'develop', text: 'I used bi- with two sense verbs.' },
    { route: 'stretch', text: 'I explained functions with li- (for).' },
  ],
  exit: [0, 2, 3],
  glossary: [
    ['نِظَامٌ مُتَكَامِلٌ', 'a complete system'], ['لِلرُّؤْيَةِ', 'for seeing'], ['لِلسَّمْعِ', 'for hearing'], ['لِلشَّمِّ', 'for smelling'], ['وَالكَلَامِ', 'and speaking'],
    ['يَعْمَلُ دَائِمًا', 'works all the time'], ['تَدْعَمُ', 'support'], ['يَحْمِيهِ', 'protects it'], ['أَيْدِيَنَا', 'our hands'], ['لِلْمَشْيِ', 'for walking'],
  ],
  prep: {
    words: [['مَرِيضٌ', 'ill', 'f. مَرِيضَةٌ · pl. مَرْضَى'], ['أَشْعُرُ بِـ', 'I feel', 'she: تَشْعُرُ'], ['أَلَمٌ', 'a pain', 'pl. آلَامٌ'], ['صُدَاعٌ', 'a headache', '—'], ['مُتْعَبٌ', 'tired', 'f. مُتْعَبَةٌ']],
    questionEn: 'How do you feel today? Write one word in Arabic.',
    questionAr: 'أَنَا … الْيَوْمَ',
    homework: {
      core: 'Website F5-L07: the vocabulary tab and the “Masculine or feminine?” sorter.',
      develop: 'Website writing task: 7–8 sentences with four possessives, two duals and two verbs.',
      stretch: 'Write a science-style note on five body parts and what they are for (li-).',
    },
    wordsSource: 'The five words come from the website F5-L08 lesson (health problems and feelings).',
  },
  remember: 'Remember: hand, eye, ear, foot, leg are feminine → هٰذِهِ · two = -āni.',
});

module.exports = { meta, slides };
