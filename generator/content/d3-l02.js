'use strict';
/* D3-L02 · The Workplace — Environments and Work Conditions — website: Pathways › Development › D3 › D3-L02 (workplace + agreeing adjective, relative clauses الَّذِي / الَّتِي, مِنْ مَزَايَا / مِنْ عُيُوبِ … أَنَّ, contrast بَيْنَمَا / وَلٰكِنَّ).
 * The website vocabulary, grammar rules, listening script and reading text are used as published. Its quiz, listening and
 * reading questions, sorter, mistakes, model sentences, speaking prompts, writing model, mission and final check are generic
 * placeholders for this lesson, so those items are teacher-written from the website’s own script, text and rules. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D3')({
  n: 2, fileTitle: 'The_Workplace_Environments_and_Conditions', chip: 'Workplace',
  title: 'The Workplace — Environments and Work Conditions', arabic: 'بِيئَةُ العَمَلِ — الأَمَاكِنُ وَظُرُوفُ العَمَلِ',
  focus: 'Describe where people work and what the conditions are like: an agreeing adjective (مَكْتَبٌ حَدِيثٌ · بِيئَةٌ آمِنَةٌ), الَّذِي / الَّتِي, advantages and disadvantages with أَنَّ, and a contrast.',
  icon: 'FaBuilding', iconSet: 'fa6',
});

const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D3-L02', {
  support: `• Core: 8 condition phrases + “He works in a modern office / a safe environment” + one advantage (مِنْ مَزَايَا … أَنَّ …). Develop: الَّذِي / الَّتِي and a contrast (بَيْنَمَا / وَلٰكِنَّ). Stretch: weigh two workplaces and choose one (عَلَى الرَّغْمِ مِنْ أَنَّ …).
• Built on D3-L01 (فِي + workplace). New: the workplace now gets an adjective that AGREES (مَكْتَبٌ حَدِيثٌ / شَرِكَةٌ حَدِيثَةٌ).
• مِنْ مَزَايَا … أَنَّ was taught in F6-L05 (towns): same structure, new topic.
• Vocabulary group 1 (workplaces) is review from D3-L01 — revise it quickly or set it as FLEX.`,
  teach: 'Workplace + adjective, the who / which clause, and pros and cons.',
  wedo: 'Picture match, sort advantages / disadvantages, fix and listen.',
  next: { nextCode: 'D3-L03', nextTitle: 'Skills and Qualities — What Makes a Good Worker?', nextAr: 'المَهَارَاتُ وَالمُؤَهِّلَاتُ' },
  objectives: ['Describe a workplace with an adjective that agrees.', 'Name work conditions and benefits (hours, salary, team, leave).', 'Join ideas with الَّذِي / الَّتِي.', 'Weigh advantages and disadvantages with أَنَّ and a contrast.'],
  flexGroups: [0, 2],
  doNow: {
    questions: [
      q('What does رَاتِبٌ mean?', ['a salary', 'a team', 'an office'], 'Prepared at home (D3-L01).'),
      q('What does عَمَلٌ مُجْزٍ mean?', ['rewarding work', 'tiring work', 'part-time work'], 'Prepared at home (D3-L01).'),
      q('Choose the accurate sentence.', ['أُمِّي مُحَاسِبَةٌ.', 'أُمِّي مُحَاسِبٌ.', 'أُمِّي تَكُونُ مُحَاسِبَةٌ.'], 'D3-L01: feminine, no “is”.'),
      q('Where does a lawyer work?', ['فِي المَحْكَمَةِ', 'فِي المَصْنَعِ', 'فِي المُخْتَبَرِ'], 'D3-L01 workplaces.'),
      q('Which introduces an advantage?', ['مِنْ مَزَايَا … أَنَّ', 'مِنْ عُيُوبِ … أَنَّ', 'عَلَى سَبِيلِ المِثَالِ'], 'F6-L05: the same frame for towns.'),
    ],
    keyIdea: { text: 'The adjective follows the workplace and agrees with it.', ar: 'مَكْتَبٌ {w|حَدِيثٌ} · بِيئَةٌ {e|آمِنَةٌ} · الشَّرِكَةُ {e|الَّتِي} أَعْمَلُ فِيهَا' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of D3-L01. Questions 3–4 retrieve D3-L01. Question 5 retrieves F6-L05 (advantages of a town).',
  },
  routes: {
    core: ['I can describe a workplace with an adjective.', 'I can give one advantage of a job.'],
    develop: ['I can use the place where / the company which.', 'I can contrast two jobs.'],
    stretch: ['I can weigh two workplaces and choose one.', 'I can use although … in a judgement.'],
  },
  bridge: [
    { ar: 'رَاتِبٌ', urdu: 'تنخواہ', tr: 'tankhwāh', en: 'salary (meaning only)' },
    { ar: 'مَكْتَبٌ', urdu: 'مکتب', tr: 'maktab', en: 'Urdu: school · Arabic: office / desk' },
    { ar: 'مَصْنَعٌ', urdu: 'صنعت', tr: 'sanʿat', en: 'industry → factory' },
    { ar: 'سَنَوِيَّةٌ', urdu: 'سال / سالانہ', tr: 'sālāna', en: 'annual (meaning only)' },
    { ar: 'تَوَازُنٌ', urdu: 'توازن', tr: 'tawāzun', en: 'balance' },
  ],
  bridgeNotes: 'URDU BRIDGE: صنعت (industry) shares the root of مَصْنَعٌ (factory); توازن is identical. CAREFUL: Urdu مکتب is a (traditional) school; Arabic مَكْتَبٌ is an office or desk. رَاتِبٌ and سَنَوِيٌّ have no Urdu cognates — link them by meaning (تنخواہ، سالانہ).',
  core: ['دَوَامٌ كَامِلٌ', 'دَوَامٌ جُزْئِيٌّ', 'سَاعَاتٌ مَرِنَةٌ', 'رَاتِبٌ مُرْتَفِعٌ', 'رَاتِبٌ مُنْخَفِضٌ', 'عَمَلٌ مُجْهِدٌ', 'عَمَلٌ مُجْزٍ', 'بِيئَةٌ آمِنَةٌ', 'فَرِيقُ عَمَلٍ'],
  vocabNotes: {
    0: 'Review from D3-L01 (FLEX): say each workplace with a new adjective — مَكْتَبٌ حَدِيثٌ، مَصْنَعٌ كَبِيرٌ، شَرِكَةٌ دَوْلِيَّةٌ.',
    1: 'The new words. Every phrase is noun + adjective: the adjective agrees (سَاعَاتٌ مَرِنَةٌ: a non-human plural takes a feminine singular adjective). مُجْزٍ (rewarding) loses its yāʾ like مُحَامٍ: f. مُجْزِيَةٌ.',
    2: 'Evaluation connectors (FLEX): the same D3 list. Today’s focus: بَيْنَمَا (whereas) and وَلٰكِنَّ (however).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · place + condition, and which / where (website rules 1–2)', title: 'Describe the place, then join a clause', ar: 'الَّذِي · الَّتِي',
      cols: [{ label: 'Masculine noun', w: 4.6, size: 22 }, { label: 'Feminine noun', w: 4.6, size: 22 }, { label: 'Rule', w: 3.13 }],
      rows: [
        { core: true, cells: [P('يَعْمَلُ فِي مَكْتَبٍ {w|حَدِيثٍ}.', 'in a modern office'), P('تَعْمَلُ فِي بِيئَةٍ {e|آمِنَةٍ}.', 'in a safe environment'), 'adjective agrees'] },
        { core: true, cells: [P('مَصْنَعٌ {w|كَبِيرٌ}', 'a big factory'), P('شَرِكَةٌ {e|دَوْلِيَّةٌ}', 'an international company'), '-un / -atun'] },
        { cells: [P('المَكْتَبُ {w|الَّذِي} أَعْمَلُ فِيهِ', 'the office (which) I work in'), P('الشَّرِكَةُ {e|الَّتِي} تُوَفِّرُ تَدْرِيبًا', 'the company which offers training'), 'allaḏī · allatī'] },
        { cells: [P('المَكْتَبُ الَّذِي أَعْمَلُ {w|فِيهِ}', 'in it (m.)'), P('الشَّرِكَةُ الَّتِي أَعْمَلُ {e|فِيهَا}', 'in it (f.)'), 'fīhi · fīhā'] },
      ],
      foot: 'Relative clauses need a “the” noun: al-maktab allaḏī … — and fīhi / fīhā points back to the place.',
      notes: `GRAMMAR PART 1 — website rules “Place and condition” (يَعْمَلُ فِي + مَكَانٍ + صِفَةٍ: describe the location, then add an agreeing adjective) and “Relative clause” (الَّذِي for masculine and الَّتِي for feminine antecedents). Website examples: يَعْمَلُ فِي مَكْتَبٍ حَدِيثٍ · تَعْمَلُ فِي بِيئَةٍ آمِنَةٍ · المَكْتَبُ الَّذِي أَعْمَلُ فِيهِ · الشَّرِكَةُ الَّتِي تُوَفِّرُ تَدْرِيبًا.
Teacher additions: the adjective takes the noun’s case ending (فِي مَكْتَبٍ حَدِيثٍ: both -in after fī); the returning pronoun فِيهِ / فِيهَا. Core can stop at row 2.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · pros, cons and contrast (website rules 3–4) · Develop / Stretch', title: 'Weigh it up', ar: 'مَزَايَا · عُيُوبٌ · بَيْنَمَا',
      cards: [
        { chip: 'ADVANTAGE · CORE', color: '1E7B4F', head: 'مِنْ مَزَايَا … أَنَّ', big: 'مِنْ مَزَايَا العَمَلِ أَنَّ سَاعَاتِهِ مَرِنَةٌ.', en: 'One advantage of the job is that its hours are flexible.', clue: 'anna + a full clause.' },
        { chip: 'DISADVANTAGE · CORE', color: 'B83227', head: 'مِنْ عُيُوبِهِ أَنَّهُ', big: 'مِنْ عُيُوبِهِ أَنَّهُ مُجْهِدٌ.', en: 'One of its disadvantages is that it is tiring.', clue: 'annahu = that it (m.).' },
        { chip: 'CONTRAST · DEVELOP', color: '6B4C9A', head: 'وَلٰكِنَّ · بَيْنَمَا', big: 'الرَّاتِبُ مُرْتَفِعٌ، وَلٰكِنَّ السَّاعَاتِ طَوِيلَةٌ.', en: 'The salary is high, but the hours are long.', clue: 'lākinna + noun in -a.' },
      ],
      error: { text: 'A clause after min mazāyā needs anna.', pairs: [['مِنْ مَزَايَا العَمَلِ أَنَّ سَاعَاتِهِ مَرِنَةٌ.', 'مِنْ مَزَايَا العَمَلِ سَاعَاتُهُ مَرِنَةٌ.']] },
      notes: `GRAMMAR PART 2 — website rules “Advantages and disadvantages” (a noun phrase followed by أَنَّ and a complete clause) and “Contrast” (بَيْنَمَا compares two situations; لٰكِنَّ qualifies a statement). Website examples: مِنْ مَزَايَا العَمَلِ أَنَّ سَاعَاتِهِ مَرِنَةٌ · مِنْ عُيُوبِهِ أَنَّهُ مُجْهِدٌ · الرَّاتِبُ مُرْتَفِعٌ، وَلٰكِنَّ السَّاعَاتِ طَوِيلَةٌ · أَعْمَلُ فِي مَكْتَبٍ، بَيْنَمَا يَعْمَلُ أَخِي فِي الهَوَاءِ الطَّلْقِ.
Stretch: after أَنَّ and لٰكِنَّ the noun takes -a (accusative): أَنَّ سَاعَاتِهِ (a feminine sound plural shows -i), لٰكِنَّ السَّاعَاتِ.`,
    },
  ],
  rulesTitle: 'Work conditions and relative clauses',
  quick: [0, 1, 3, 4],
  rest: [2, 5, 6, 7],
  ido: {
    title: 'Watch me compare two workplaces',
    steps: [
      { head: 'Place + adjective', ar: 'يَعْمَلُ أَبِي فِي مَكْتَبٍ {w|حَدِيثٍ}.', think: 'maktab is masculine.' },
      { head: 'Which', ar: 'المَكْتَبُ {w|الَّذِي} يَعْمَلُ فِيهِ هَادِئٌ.', think: 'allaḏī + fīhi.' },
      { head: 'Contrast', ar: '{k|بَيْنَمَا} يَعْمَلُ خَالِي فِي مَوْقِعِ بِنَاءٍ.', think: 'Second situation.' },
      { head: 'Pros and cons', ar: 'رَاتِبُهُ مُرْتَفِعٌ، {k|وَلٰكِنَّ} عَمَلَهُ {e|مُجْهِدٌ}.', think: 'Qualify with but.' },
    ],
    legend: ['w', 'k', 'e'], legendLabels: { w: 'PLACE', k: 'CONTRAST', e: 'CONDITION' },
    model: 'يَعْمَلُ أَبِي فِي مَكْتَبٍ {w|حَدِيثٍ} فِي وَسَطِ المَدِينَةِ، {k|بَيْنَمَا} يَعْمَلُ خَالِي فِي مَوْقِعِ بِنَاءٍ فِي الهَوَاءِ الطَّلْقِ. المَكْتَبُ {w|الَّذِي} يَعْمَلُ فِيهِ أَبِي هَادِئٌ وَآمِنٌ، وَمِنْ مَزَايَاهُ أَنَّ السَّاعَاتِ {e|مَرِنَةٌ}. أَمَّا خَالِي فَرَاتِبُهُ {e|مُرْتَفِعٌ}، {k|وَلٰكِنَّ} عَمَلَهُ {e|مُجْهِدٌ} وَيَتَأَثَّرُ بِالطَّقْسِ.',
    modelEn: 'My father works in a modern office in the city centre, whereas my uncle works on a building site outdoors. The office my father works in is quiet and safe, and one of its advantages is that the hours are flexible. As for my uncle, his salary is high, but his work is tiring and affected by the weather.',
    notes: 'I DO (3 min) — teacher-written model built from the website rules and the listening script (Samer on the building site). Think aloud: “Masculine or feminine place? Which clause? Where is my contrast?”',
  },
  patterns: [
    { ar: 'يَعْمَلُ أَبِي فِي مَكْتَبٍ حَدِيثٍ.', en: 'My father works in a modern office.', tip: 'Place + agreeing adjective.' },
    { ar: 'الشَّرِكَةُ الَّتِي أَعْمَلُ فِيهَا كَبِيرَةٌ.', en: 'The company I work in is big.', tip: 'allatī for a feminine noun.' },
    { ar: 'مِنْ مَزَايَا العَمَلِ أَنَّ سَاعَاتِهِ مَرِنَةٌ.', en: 'One advantage of the job is that its hours are flexible.', tip: 'anna + clause.' },
    { ar: 'الرَّاتِبُ مُرْتَفِعٌ، وَلٰكِنَّ السَّاعَاتِ طَوِيلَةٌ.', en: 'The salary is high, but the hours are long.', tip: 'Qualify with but.' },
  ],
  game: {
    title: 'Where do I work? Match the picture',
    pick: [0, 3, 4],
    en: ['I work in a modern office.', 'I work in a factory.', 'I work from home.'],
    icons: [[['fa6', 'FaBuilding', '1D5FBF'], ['fa6', 'FaPeopleGroup', '5A6472']], [['fa6', 'FaIndustry', '6B4C9A'], ['fa6', 'FaGears', 'C77700']], [['fa6', 'FaHouseLaptop', '1E7B4F'], ['fa6', 'FaMugHot', 'B83227']]],
    labels: ['office · team', 'factory · machines', 'home · laptop'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Other website cards: أَعْمَلُ فِي مُسْتَشْفًى · أَعْمَلُ فِي مَدْرَسَةٍ · أَعْمَلُ مِنَ التَّاسِعَةِ إِلَى الخَامِسَةِ (from nine to five). Stretch: add an adjective to each card (مَصْنَعٌ كَبِيرٌ).',
  },
  sorterCats: ['Advantage', 'Disadvantage'],
  sorterNotes: 'Then turn two items into sentences: مِنْ مَزَايَا العَمَلِ أَنَّ … · مِنْ عُيُوبِهِ أَنَّ … (Stretch: argue that one item could be both — long hours with a high salary).',
  patch: {
    mission: null,
    sorter: {
      title: 'Advantage or disadvantage?', instructions: 'Decide whether each work condition is usually an advantage or a disadvantage.',
      categories: ['Advantage', 'Disadvantage'],
      items: [
        { label: 'رَاتِبٌ مُرْتَفِعٌ', answer: 0 }, { label: 'سَاعَاتٌ مَرِنَةٌ', answer: 0 }, { label: 'عَمَلٌ مُجْزٍ', answer: 0 }, { label: 'بِيئَةٌ آمِنَةٌ', answer: 0 },
        { label: 'فُرَصُ التَّرَقِّي', answer: 0 }, { label: 'رَاتِبٌ مُنْخَفِضٌ', answer: 1 }, { label: 'عَمَلٌ مُجْهِدٌ', answer: 1 }, { label: 'سَاعَاتٌ طَوِيلَةٌ', answer: 1 }, { label: 'تَوَاصُلٌ بَطِيءٌ', answer: 1 },
      ],
    },
    mistakes: [
      { wrong: 'تَعْمَلُ فِي بِيئَةٍ آمِنٍ.', right: 'تَعْمَلُ فِي بِيئَةٍ آمِنَةٍ.', why: 'The adjective agrees with feminine bīʾa.' },
      { wrong: 'الشَّرِكَةُ الَّذِي أَعْمَلُ فِيهَا كَبِيرَةٌ.', right: 'الشَّرِكَةُ الَّتِي أَعْمَلُ فِيهَا كَبِيرَةٌ.', why: 'Feminine noun → allatī.' },
      { wrong: 'مِنْ مَزَايَا العَمَلِ سَاعَاتُهُ مَرِنَةٌ.', right: 'مِنْ مَزَايَا العَمَلِ أَنَّ سَاعَاتِهِ مَرِنَةٌ.', why: 'Add anna before the clause.' },
    ],
    grammar: {
      common_error: 'Do not leave out أَنَّ after مِنْ مَزَايَا / مِنْ عُيُوبِ, and do not use الَّذِي with a feminine noun (teacher wording: the website common error for this lesson is generic).',
      quiz: [
        L('Complete: تَعْمَلُ أُخْتِي فِي بِيئَةٍ ___ .', ['آمِنَةٍ', 'آمِنٍ', 'أَمَانٍ'], 'bīʾa is feminine → āminatin.'),
        L('Complete: الشَّرِكَةُ ___ أَعْمَلُ فِيهَا كَبِيرَةٌ.', ['الَّتِي', 'الَّذِي', 'الَّذِينَ'], 'sharika is feminine → allatī.'),
        L('Complete: المَكْتَبُ ___ أَعْمَلُ فِيهِ هَادِئٌ.', ['الَّذِي', 'الَّتِي', 'الَّذِينَ'], 'maktab is masculine → allaḏī.'),
        L('Complete: مِنْ مَزَايَا العَمَلِ ___ سَاعَاتِهِ مَرِنَةٌ.', ['أَنَّ', 'لِأَنَّ', 'بَيْنَمَا'], 'A clause after min mazāyā needs anna.'),
        L('Which connector compares two people’s situations?', ['بَيْنَمَا', 'لِذٰلِكَ', 'إِضَافَةً إِلَى ذٰلِكَ'], 'baynamā = whereas.'),
        L('What does دَوَامٌ جُزْئِيٌّ mean?', ['part-time work', 'full-time work', 'annual leave'], 'juzʾ = part.'),
        L('Which is usually a disadvantage?', ['عَمَلٌ مُجْهِدٌ', 'عَمَلٌ مُجْزٍ', 'سَاعَاتٌ مَرِنَةٌ'], 'mujhid = tiring.'),
        L('Choose the sentence that makes sense.', ['الرَّاتِبُ مُرْتَفِعٌ، وَلٰكِنَّ السَّاعَاتِ طَوِيلَةٌ.', 'الرَّاتِبُ مُرْتَفِعٌ، لِأَنَّ السَّاعَاتِ طَوِيلَةٌ.', 'الرَّاتِبُ مُرْتَفِعٌ، لِذٰلِكَ السَّاعَاتُ قَصِيرَةٌ.'], 'A contrast needs “but”, not “because” or “so”.'),
      ],
    },
    final: [
      L('Choose the feminine relative pronoun.', ['الَّتِي', 'الَّذِي', 'الَّذِينَ'], 'allatī = which / who (f.).'),
      L('What does رَاتِبٌ مُرْتَفِعٌ mean?', ['a high salary', 'a low salary', 'annual leave'], 'murtafiʿ = high.'),
      L('Complete: مِنْ عُيُوبِهِ ___ مُجْهِدٌ.', ['أَنَّهُ', 'لِأَنَّهُ', 'بَيْنَمَا'], 'min ʿuyūbihi annahu …'),
      L('Which sentence describes a workplace?', ['أَعْمَلُ فِي مَكْتَبٍ حَدِيثٍ.', 'أَعْمَلُ مُحَاسِبًا.', 'أَنَا مُحَاسِبٌ.'], 'fī + place + adjective.'),
    ],
    listening: {
      questions: [
        L('Where does Maryam work?', ['in a modern laboratory', 'in a hospital', 'on a building site'], 'فِي مُخْتَبَرٍ حَدِيثٍ'),
        L('What are her hours?', ['8:00 to 4:00', '9:00 to 5:00', '8:00 to 2:00'], 'مِنَ السَّاعَةِ الثَّامِنَةِ إِلَى الرَّابِعَةِ'),
        L('Why does she like the environment?', ['it is safe and organised', 'the salary is high', 'it is outdoors'], 'لِأَنَّهَا آمِنَةٌ وَمُنَظَّمَةٌ'),
        L('What does her work need?', ['great precision', 'physical strength', 'a lot of travel'], 'يَحْتَاجُ إِلَى دِقَّةٍ شَدِيدَةٍ'),
        L('Where does Samer work?', ['on a building site', 'in a laboratory', 'in an office'], 'فِي مَوْقِعِ بِنَاءٍ'),
        L('What is a disadvantage of his work?', ['it is tiring and affected by the weather', 'the salary is low', 'the hours are short'], 'عَمَلَهُ مُجْهِدٌ وَيَتَأَثَّرُ بِالطَّقْسِ'),
      ],
    },
    reading: {
      questions: [
        L('Why do some people prefer remote work?', ['it saves time and gives more flexibility', 'the salary is higher', 'they meet more colleagues'], 'يُوَفِّرُ الوَقْتَ وَيَمْنَحُهُمْ مَرُونَةً أَكْبَرَ'),
        L('Why do others choose the office?', ['direct cooperation with the team', 'it is closer to home', 'it is quieter'], 'بِالتَّعَاوُنِ المُبَاشِرِ مَعَ الفَرِيقِ'),
        L('How often can Nour company staff work from home?', ['two days a week', 'every day', 'one day a month'], 'يَوْمَيْنِ فِي الأُسْبُوعِ'),
        L('What advantage of this system is stated?', ['a better (work–life) balance', 'faster communication', 'a higher salary'], 'يُحَقِّقُ تَوَازُنًا أَفْضَلَ'),
        L('What disadvantage is stated?', ['communication may be slower', 'the hours are longer', 'there is less flexibility'], 'التَّوَاصُلَ قَدْ يَكُونُ أَبْطَأَ'),
        L('What is the text mainly about?', ['comparing remote and office work', 'advertising a job', 'one worker’s day'], 'Both sides are compared.'),
      ],
    },
    speaking: {
      context: 'Where would you like to work?',
      model: [
        ['A', 'أَيْنَ تُفَضِّلُ أَنْ تَعْمَلَ؟', 'Where would you prefer to work?'],
        ['B', 'أُفَضِّلُ مَكْتَبًا حَدِيثًا لِأَنَّ بِيئَتَهُ آمِنَةٌ وَمُنَظَّمَةٌ.', 'I prefer a modern office because its environment is safe and organised.'],
        ['A', 'وَمَا عُيُوبُهُ؟', 'And its disadvantages?'],
        ['B', 'مِنْ عُيُوبِهِ أَنَّ السَّاعَاتِ طَوِيلَةٌ، وَلٰكِنَّ الرَّاتِبَ مُرْتَفِعٌ.', 'One disadvantage is that the hours are long, but the salary is high.'],
      ],
    },
    writing: {
      prompt: 'Compare two workplaces and explain which one you would prefer and why.',
      model: 'يَعْمَلُ أَبِي فِي مَكْتَبٍ حَدِيثٍ فِي وَسَطِ المَدِينَةِ، بَيْنَمَا يَعْمَلُ خَالِي فِي مَوْقِعِ بِنَاءٍ فِي الهَوَاءِ الطَّلْقِ. المَكْتَبُ الَّذِي يَعْمَلُ فِيهِ أَبِي هَادِئٌ وَآمِنٌ، وَمِنْ مَزَايَاهُ أَنَّ السَّاعَاتِ مَرِنَةٌ. أَمَّا خَالِي فَرَاتِبُهُ مُرْتَفِعٌ، وَلٰكِنَّ عَمَلَهُ مُجْهِدٌ وَيَتَأَثَّرُ بِالطَّقْسِ. فِي رَأْيِي، أُفَضِّلُ العَمَلَ فِي مَكْتَبٍ لِأَنَّنِي أُحِبُّ البِيئَةَ المُنَظَّمَةَ وَالعَمَلَ مَعَ فَرِيقٍ. عَلَى الرَّغْمِ مِنْ أَنَّ العَمَلَ فِي الهَوَاءِ الطَّلْقِ صِحِّيٌّ، فَإِنَّهُ صَعْبٌ فِي الشِّتَاءِ. لِذٰلِكَ أُرِيدُ وَظِيفَةً تُحَقِّقُ تَوَازُنًا بَيْنَ العَمَلِ وَالحَيَاةِ.',
    },
  },
  hints: ['bīʾa: masculine or feminine?', 'sharika → allaḏī or allatī?', 'What is missing before the clause?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 5.\nListen for: مُخْتَبَرٍ · الثَّامِنَةِ · مَوْقِعِ بِنَاءٍ.',
  listenRoutes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 6.',
  gloss: [
    ['تَعْمَلُ مَرْيَمُ فِي مُخْتَبَرٍ حَدِيثٍ مِنَ السَّاعَةِ الثَّامِنَةِ إِلَى الرَّابِعَةِ.', 'Maryam works in a modern laboratory from eight o’clock to four.'],
    ['تُحِبُّ بِيئَةَ العَمَلِ لِأَنَّهَا آمِنَةٌ وَمُنَظَّمَةٌ،', 'She loves the work environment because it is safe and organised,'],
    ['وَلٰكِنَّ العَمَلَ يَحْتَاجُ إِلَى دِقَّةٍ شَدِيدَةٍ.', 'but the work needs great precision.'],
    ['أَمَّا سَامِرٌ فَيَعْمَلُ فِي مَوْقِعِ بِنَاءٍ.', 'As for Samer, he works on a building site.'],
    ['رَاتِبُهُ جَيِّدٌ، لٰكِنَّ عَمَلَهُ مُجْهِدٌ وَيَتَأَثَّرُ بِالطَّقْسِ.', 'His salary is good, but his work is tiring and affected by the weather.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ مَكَانَ عَمَلِ أَحَدِ أَفْرَادِ عَائِلَتِكَ.' },
      { route: 'core', ar: 'أَيْنَ تُحِبُّ أَنْ تَعْمَلَ: فِي مَكْتَبٍ أَمْ فِي الهَوَاءِ الطَّلْقِ؟' },
      { route: 'develop', ar: 'مَا مَزَايَا العَمَلِ عَنْ بُعْدٍ وَمَا عُيُوبُهُ؟' },
      { route: 'stretch', ar: 'هَلِ الرَّاتِبُ أَهَمُّ مِنْ بِيئَةِ العَمَلِ؟ وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'يَعْمَلُ / تَعْمَلُ فِي ______ ______ .' },
      { route: 'core', ar: 'أُحِبُّ أَنْ أَعْمَلَ فِي ______ لِأَنَّ ______ .' },
      { route: 'develop', ar: 'مِنْ مَزَايَاهُ أَنَّ ______ ، وَمِنْ عُيُوبِهِ أَنَّ ______ .' },
      { route: 'stretch', ar: 'فِي رَأْيِي ______ أَهَمُّ لِأَنَّ ______ .' },
    ],
    modelEn: ['Where would you prefer to work?', 'I prefer a modern office because its environment is safe and organised.'],
    notes: 'Teacher-written prompts and model (the website prompts for this lesson are generic). Model continues: A: وَمَا عُيُوبُهُ؟ B: مِنْ عُيُوبِهِ أَنَّ السَّاعَاتِ طَوِيلَةٌ، وَلٰكِنَّ الرَّاتِبَ مُرْتَفِعٌ. To a girl: أَيْنَ تُفَضِّلِينَ أَنْ تَعْمَلِي؟',
  },
  write: {
    core: { amount: '5 sentences', how: 'Two workplaces, each with an adjective, plus one advantage with مِنْ مَزَايَا … أَنَّ.' },
    develop: { amount: '80–100 words', how: 'Compare two workplaces with الَّذِي / الَّتِي, بَيْنَمَا and وَلٰكِنَّ, and choose one.' },
    stretch: { amount: '100–120 words', how: 'Website task: compare two workplaces, weigh pros and cons, justify your choice with although …' },
  },
  frames: {
    core: [
      { en: 'My father works in a modern office.', ar: 'يَعْمَلُ أَبِي فِي مَكْتَبٍ ______ .' },
      { en: 'My aunt works in a big hospital.', ar: 'تَعْمَلُ خَالَتِي فِي مُسْتَشْفًى ______ .' },
      { en: 'One advantage of the job is that …', ar: 'مِنْ مَزَايَا العَمَلِ أَنَّ ______ .' },
      { en: 'One disadvantage is that it is tiring.', ar: 'مِنْ عُيُوبِهِ أَنَّهُ ______ .' },
    ],
    develop: [
      { en: 'The company (which) … works in is …', ar: 'الشَّرِكَةُ الَّتِي ______ فِيهَا ______ .' },
      { en: 'whereas my uncle works …', ar: 'بَيْنَمَا يَعْمَلُ خَالِي ______ .' },
      { en: 'The salary is …, but the hours are …', ar: 'الرَّاتِبُ ______ ، وَلٰكِنَّ السَّاعَاتِ ______ .' },
      { en: 'I prefer … because …', ar: 'أُفَضِّلُ ______ لِأَنَّ ______ .' },
    ],
    bank: ['مَكْتَبٌ حَدِيثٌ', 'بِيئَةٌ آمِنَةٌ', 'سَاعَاتٌ مَرِنَةٌ', 'رَاتِبٌ مُرْتَفِعٌ', 'عَمَلٌ مُجْهِدٌ', 'عَمَلٌ مُجْزٍ', 'فَرِيقُ عَمَلٍ', 'الَّذِي', 'الَّتِي', 'أَنَّ', 'بَيْنَمَا', 'وَلٰكِنَّ'],
  },
  stretch: [
    ['يُوَفِّرُ الوَقْتَ', 'it saves time'],
    ['التَّعَاوُنُ المُبَاشِرُ مَعَ الفَرِيقِ', 'direct cooperation with the team'],
    ['يُحَقِّقُ تَوَازُنًا أَفْضَلَ', 'it achieves a better balance'],
    ['يَتَأَثَّرُ بِالطَّقْسِ', 'it is affected by the weather'],
    ['عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …', 'although … (still) …'],
  ],
  modelEn: 'My father works in a modern office in the city centre, whereas my uncle works on a building site outdoors. The office my father works in is quiet and safe, and one advantage is that the hours are flexible. As for my uncle, his salary is high, but his work is tiring and affected by the weather. In my opinion, I prefer working in an office because I like an organised environment and working with a team. Although working outdoors is healthy, it is hard in winter. So I want a job that gives a balance between work and life.',
  find: ['two workplaces with adjectives', 'allaḏī or allatī', 'an advantage and a disadvantage', 'a justified choice'],
  modelNotes: 'Teacher-written model (the website model for this lesson is a placeholder). Evidence: مَكْتَبٍ حَدِيثٍ، مَوْقِعِ بِنَاءٍ · المَكْتَبُ الَّذِي يَعْمَلُ فِيهِ · مِنْ مَزَايَاهُ أَنَّ … وَلٰكِنَّ عَمَلَهُ مُجْهِدٌ · أُفَضِّلُ … لِأَنَّنِي … · عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّهُ …',
  selfCheck: [
    { route: 'core', text: 'My adjectives agree with the workplace.' },
    { route: 'core', text: 'I gave one advantage with anna.' },
    { route: 'develop', text: 'I used allaḏī / allatī correctly.' },
    { route: 'develop', text: 'I contrasted two workplaces.' },
    { route: 'stretch', text: 'My choice is justified with although …' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['بَعْضُ العَامِلِينَ', 'some workers'], ['يُوَفِّرُ الوَقْتَ', 'saves time'], ['مَرُونَةً أَكْبَرَ', 'more flexibility'], ['آخَرِينَ', 'others'], ['يَسْمَحُ لَهُمْ', 'allows them'],
    ['التَّعَاوُنِ المُبَاشِرِ', 'direct cooperation'], ['المُوَظَّفُونَ', 'the employees'], ['مِنَ المَنْزِلِ', 'from home'], ['هٰذَا النِّظَامِ', 'this system'], ['أَبْطَأَ', 'slower'],
  ],
  prep: {
    words: [['مَهَارَةٌ', 'a skill', 'pl. مَهَارَاتٌ'], ['خِبْرَةٌ', 'experience', 'pl. خِبْرَاتٌ'], ['مَسْؤُولٌ', 'responsible', 'f. مَسْؤُولَةٌ · pl. مَسْؤُولُونَ'], ['مُنَظَّمٌ', 'organised', 'f. مُنَظَّمَةٌ · pl. مُنَظَّمُونَ'], ['القِيَادَةُ', 'leadership', '—']],
    questionEn: 'Name one skill a doctor needs and one a teacher needs.',
    questionAr: 'يَحْتَاجُ الطَّبِيبُ إِلَى …',
    homework: {
      core: 'Learn the 9 work-condition phrases; write 5 sentences from the frames.',
      develop: 'Compare two workplaces in 80–100 words with الَّذِي / الَّتِي and بَيْنَمَا.',
      stretch: 'Website writing task: compare two workplaces and justify your choice (100–120 words).',
    },
    wordsSource: 'The five words come from the website D3-L03 vocabulary (skills and worker qualities).',
  },
  remember: 'Remember: the adjective agrees with the workplace — allaḏī (m.) / allatī (f.) — anna before a clause.',
});

module.exports = { meta, slides };
