'use strict';
/* P1-L04 · Unhealthy Habits — website: Pathways › Progression › P1 › P1-L04 (harm verbs يُضْعِفُ + direct object vs يُلْحِقُ الضَّرَرَ بِـ, يُقْلِعُ عَنْ;
 * Type 1 conditional for consequence; reporting evidence impersonally يُوصَفُ بِأَنَّهُ · تُشِيرُ الدِّرَاسَاتُ إِلَى أَنَّ; informing rather than moralising).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, builder and visual game used as published.
 * English added to the patterns. Visual-game cards chosen: smoking, sleep, inactivity. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P1')({
  n: 4, fileTitle: 'Unhealthy_Habits_Smoking_Alcohol_Risk', chip: 'Vocabulary',
  title: 'Unhealthy Habits — Smoking, Alcohol and Risk Behaviours', arabic: 'العَادَاتُ غَيْرُ الصِّحِّيَّةِ',
  focus: 'Describe risk behaviours and their documented effects with the right complement (يُضْعِفُ جِهَازَ المَنَاعَةِ · يُلْحِقُ الضَّرَرَ بِالرِّئَتَيْنِ · يُقْلِعُ عَنِ التَّدْخِينِ), state consequences with إِذَا, and report evidence without judging people.',
  icon: 'FaTriangleExclamation', iconSet: 'fa6',
});

const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });

const site = D.site('P1-L04');
const RH = [['yuḍʿif with a direct object', 'yuḍʿif + accusative'], ['yulḥiq al-ḍarar bi-', 'yulḥiq al-ḍarar + bi- + genitive'], ['Conditional consequence', 'idhā + past form → sa- + present'], ['Reporting evidence impersonally', 'yūṣaf bi-annahu · tushīr al-dirāsāt ilā anna']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));

const slides = D.devLesson('P1-L04', {
  support: `• Core: 10 behaviour / effect words + five sentences with the right harm structure (يُضْعِفُ + object · يُلْحِقُ الضَّرَرَ بِـ). Develop: two conditionals of consequence + one impersonal report. Stretch: the website ~80–90-word informational paragraph that closes on support and prevention without moralising.
• Sensitivity: some students may have family members who smoke or struggle with dependence. Keep the focus on the BEHAVIOUR and its effects, never on people’s worth (website teaching point). Islamic link (optional, for discussion): حِفْظُ النَّفْسِ — protecting life and health is one of the aims of the Sharīʿa; students may mention this respectfully in Stretch writing.
• Grammar links: Type 1 conditional (P1-L03) · direct object vs preposition families (P1-L02) · أَنَّ + accusative (GM-NVS-02).`,
  teach: 'Harm verbs and their complements, consequence with إِذَا, reporting evidence.',
  wedo: 'Sort the harm verbs, build an informed sentence, match the risk picture.',
  next: { nextCode: 'P1-L05', nextTitle: 'Sleep, Rest and Digital Wellbeing', nextAr: 'النَّوْمُ وَالرَّاحَةُ وَالعَافِيَةُ الرَّقْمِيَّةُ' },
  objectives: ['Name risk behaviours and their documented health effects accurately.', 'Use Type 1 conditionals to express consequence rather than to lecture.', 'Use yulḥiq al-ḍarar bi- and yuḍʿif with their correct complements.', 'Write a balanced risk paragraph that informs without moralising.'],
  objNotes: 'Website objectives (Arabic shown in transliteration on the slide so the lines read cleanly). The route statements turn them into this lesson’s concrete targets.',
  rulesAr: 'أَفْعَالُ الضَّرَرِ وَنَقْلُ الأَدِلَّةِ',
  doNow: {
    questions: [
      q('What does التَّدْخِينُ mean?', ['smoking', 'sleeping', 'swimming'], 'Prepared at home (P1-L03).'),
      q('What does يُقْلِعُ عَنْ mean?', ['he gives up', 'he starts', 'he suffers from'], 'Prepared at home (P1-L03).'),
      q('What does الوِقَايَةُ mean?', ['prevention', 'addiction', 'treatment'], 'Prepared at home (P1-L03).'),
      q('Complete: إِذَا ___ مُبَكِّرًا، سَتَكُونُ أَكْثَرَ تَرْكِيزًا.', ['نِمْتَ', 'تَنَامُ', 'سَتَنَامُ'], 'P1-L03: the Type 1 conditional.'),
      q('Choose the accurate sentence.', ['يُقَوِّي التَّمْرِينُ العَضَلَاتِ.', 'يُقَوِّي التَّمْرِينُ مِنَ العَضَلَاتِ.', 'يُقَوِّي التَّمْرِينُ بِالعَضَلَاتِ.'], 'P1-L02: direct-object verbs.'),
    ],
    keyIdea: { text: 'Weakens → a direct object. Causes harm → bi- for what is harmed.', ar: '{w|يُضْعِفُ جِهَازَ المَنَاعَةِ} · {e|يُلْحِقُ الضَّرَرَ بِالرِّئَتَيْنِ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P1-L03. Question 4 retrieves the Type 1 conditional (P1-L03); question 5 the direct-object family (P1-L02) — today adds a harm verb to each pattern.',
  },
  routes: {
    core: ['I can name 5 risk behaviours and 5 effects.', 'I can say what smoking weakens or harms.'],
    develop: ['I can state a consequence with idhā.', 'I can report evidence (tushīr al-dirāsāt).'],
    stretch: ['I can inform without judging people.', 'I can close on support and prevention.'],
  },
  bridge: [
    { ar: 'ضَرَرٌ', urdu: 'ضرر', tr: 'zarar', en: 'harm, damage' },
    { ar: 'الإِدْمَانُ', urdu: 'ادمان', tr: 'idmān', en: 'addiction' },
    { ar: 'سَرَطَانٌ', urdu: 'سرطان', tr: 'sartān', en: 'cancer' },
    { ar: 'الوِقَايَةُ', urdu: 'وقایہ / بچاؤ', tr: 'wiqāya', en: 'prevention' },
    { ar: 'قَانُونِيًّا', urdu: 'قانونی طور پر', tr: 'qānūnī', en: 'legally' },
  ],
  bridgeNotes: 'URDU BRIDGE: ضرر، سرطان and قانون are shared, and Urdu has ادمان in formal writing. Point out that Arabic adds -an for the adverb: قَانُونِيًّا (legally) = Urdu قانونی طور پر.',
  core: ['التَّدْخِينُ', 'الكُحُولُ', 'المُخَدِّرَاتُ', 'الإِدْمَانُ', 'يُقْلِعُ عَنْ', 'سُلُوكٌ خَطِرٌ', 'السَّرَطَانُ', 'أَمْرَاضُ القَلْبِ', 'جِهَازُ المَنَاعَةِ', 'يُضْعِفُ', 'يُلْحِقُ الضَّرَرَ بِـ', 'الوِقَايَةُ'],
  forms: {
    'مُدْمِنٌ / مُدْمِنَةٌ': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'مُدْمِنُونَ' }, { l: 'f.', ar: 'مُدْمِنَةٌ' }] },
    'سُلُوكٌ خَطِرٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'سُلُوكِيَّاتٌ خَطِرَةٌ' }] },
    'يُدَخِّنُ': ihs('أُدَخِّنُ', 'تُدَخِّنُ'), 'يُقْلِعُ عَنْ': ihs('أُقْلِعُ', 'تُقْلِعُ'), 'يَتَوَقَّفُ عَنْ': ihs('أَتَوَقَّفُ', 'تَتَوَقَّفُ'),
    'يُضْعِفُ': ihs('أُضْعِفُ', 'تُضْعِفُ'), 'يُلْحِقُ الضَّرَرَ بِـ': ihs('أُلْحِقُ', 'تُلْحِقُ'),
    'إِحْصَائِيَّاتٌ صِحِّيَّةٌ': { tag: 'sg · pl', forms: [{ l: 'sg.', ar: 'إِحْصَائِيَّةٌ' }] },
  },
  vocabNotes: {
    0: 'Behaviours. مُدْمِنٌ / مُدْمِنَةٌ describes a condition — the website reminds us: describe the condition, not the person’s worth. People plural = مُدْمِنُونَ (-ūna); things plural = سُلُوكِيَّاتٌ خَطِرَةٌ (-a).',
    1: 'Documented effects. Sort the two harm verbs: يُضْعِفُ + direct object (جِهَازَ المَنَاعَةِ) · يُلْحِقُ الضَّرَرَ + بِـ (بِالرِّئَتَيْنِ). الرِّئَتَانِ is a dual: the two lungs.',
    2: 'Reporting and framing: these make your writing INFORMATIVE — tushīr al-dirāsāt ilā anna … · yūṣaf bi-annahu … · laysa sahlan …',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · harm verbs and their complements (website rules 1–2) · Core / Develop', title: 'Weakens · harms · gives up', ar: 'يُضْعِفُ · يُلْحِقُ الضَّرَرَ بِـ · يُقْلِعُ عَنْ',
      cols: [{ label: 'Meaning', w: 2.5 }, { label: 'Verb', w: 3.0, size: 22 }, { label: 'Example', w: 5.2, size: 20 }, { label: 'Then', w: 1.63 }],
      rows: [
        { core: true, cells: ['weakens', '{w|يُضْعِفُ}', 'يُضْعِفُ التَّدْخِينُ {w|جِهَازَ} المَنَاعَةِ.', 'object'] },
        { cells: ['causes', '{w|يُسَبِّبُ}', 'يُسَبِّبُ التَّدْخِينُ {w|أَمْرَاضًا} كَثِيرَةً.', 'object'] },
        { core: true, cells: ['causes harm to', '{e|يُلْحِقُ الضَّرَرَ بِـ}', 'يُلْحِقُ التَّدْخِينُ الضَّرَرَ {e|بِالرِّئَتَيْنِ}.', 'bi-'] },
        { cells: ['is harmful to', '{e|يَضُرُّ بِـ}', 'يَضُرُّ الإِفْرَاطُ فِي السُّكَّرِ {e|بِالأَسْنَانِ}.', 'bi-'] },
        { core: true, cells: ['gives up', '{k|يُقْلِعُ عَنْ}', 'أَقْلَعَ جَدِّي {k|عَنِ} التَّدْخِينِ.', 'ʿan'] },
        { cells: ['stops', '{k|يَتَوَقَّفُ عَنْ}', 'تَوَقَّفَتْ عَنْ شُرْبِ المَشْرُوبَاتِ الغَازِيَّةِ.', 'ʿan'] },
      ],
      ltr: true,
      foot: 'In yulḥiq al-ḍarar bi-, al-ḍarar (the harm) is already the object — bi- introduces WHAT is harmed.',
      notes: `GRAMMAR PART 1 — website rules “يُضْعِفُ with a direct object” and “يُلْحِقُ الضَّرَرَ بِـ” (الضَّرَرَ is the object of the verb; بِـ introduces what is harmed). Website table adds يُقْلِعُ + عَنْ.
Common error (website): يُلْحِقُ الضَّرَرَ عَلَى ✗ · يُضْعِفُ مِنْ جِهَازِ المَنَاعَةِ ✗.
Note عَنِ before al-: يُقْلِعُ عَنِ التَّدْخِينِ (a helping kasra). يَضُرُّ can also take a direct object (the website game: التَّدْخِينُ يَضُرُّ الرِّئَتَيْنِ) — both are correct; the website sorter files it under بِـ.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · people and things — agreement (vocabulary notes) · Core / Develop', title: 'Describe the habit, not the person', ar: 'العَاقِلُ وَغَيْرُ العَاقِلِ',
      cols: [{ label: 'Who / what', w: 2.4 }, { label: 'He', w: 3.0, size: 22 }, { label: 'She', w: 3.0, size: 22 }, { label: 'Plural', w: 3.93, size: 22 }],
      rows: [
        { core: true, cells: ['gives up · people', 'يُقْلِعُ', 'تُقْلِعُ', '{k|يُقْلِعُونَ}'] },
        { core: true, cells: ['smokes · people', 'يُدَخِّنُ', 'تُدَخِّنُ', '{k|يُدَخِّنُونَ}'] },
        { cells: ['addicted · people', 'مُدْمِنٌ', 'مُدْمِنَةٌ', '{k|مُدْمِنُونَ}'] },
        { core: true, cells: ['risky · things', 'سُلُوكٌ خَطِرٌ', '—', 'سُلُوكِيَّاتٌ {w|خَطِرَةٌ}'] },
        { cells: ['harmful · things', 'مَشْرُوبٌ ضَارٌّ', '—', 'مَشْرُوبَاتٌ {w|ضَارَّةٌ}'] },
      ],
      ltr: true,
      foot: 'People in the plural → -ūna. Things in the plural → feminine singular -a (P1-L01).',
      notes: `GRAMMAR PART 2 — agreement check built on the website vocabulary notes (مُدْمِنٌ / مُدْمِنَةٌ: “Describe the condition, not the person’s worth”) and mission (سُلُوكِيَّاتٌ خَطِرَةٌ, a non-human plural).
Contrast the two plurals: people → مُدْمِنُونَ · يُقْلِعُونَ; behaviours → سُلُوكِيَّاتٌ خَطِرَةٌ · تُسَبِّبُ.
Website mistake 3: المُدَخِّنُونَ أَشْخَاصٌ سَيِّئُونَ ✗ (a judgement of people) → يُوصَفُ التَّدْخِينُ بِأَنَّهُ ضَارٌّ بِالصِّحَّةِ (a statement about the habit).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · consequence, not command (website rule 3) · Develop', title: 'If it continues … if he gives up …', ar: 'إِذَا … سَـ …',
      cards: [
        { chip: 'RISK · DEVELOP', color: 'C0386B', head: 'إِذَا اسْتَمَرَّ', big: 'إِذَا اسْتَمَرَّ فِي التَّدْخِينِ، سَيَزْدَادُ الخَطَرُ.', en: 'If he continues smoking, the risk will increase.', clue: 'Past form → sa-.' },
        { chip: 'BENEFIT · DEVELOP', color: '1E6B52', head: 'أَمَّا إِذَا أَقْلَعَ', big: 'أَمَّا إِذَا أَقْلَعَ، فَسَتَتَحَسَّنُ وَظَائِفُ الرِّئَةِ.', en: 'But if he gives up, lung function will improve.', clue: 'ammā … fa-sa-.' },
        { chip: 'SUPPORT · STRETCH', color: '1D5FBF', head: 'إِذَا تَوَفَّرَ', big: 'إِذَا تَوَفَّرَ الدَّعْمُ المُبَكِّرُ، سَتَقِلُّ الحَالَاتُ.', en: 'If early support is available, cases will decrease.', clue: 'A policy view.' },
      ],
      error: { text: 'Website quiz: the verb after idhā is never a present or a sa- verb.', pairs: [['إِذَا اسْتَمَرَّ', 'إِذَا يَسْتَمِرُّ']] },
      notes: `GRAMMAR PART 3 — website rule “Conditional consequence” (state the consequence as a conditional rather than as a command). Compare: يَجِبُ أَنْ تَتَوَقَّفَ! (a command — lectures) vs إِذَا أَقْلَعَ، فَسَتَتَحَسَّنُ صِحَّتُهُ (a consequence — informs).
Card 2: after أَمَّا the result takes فَـ: فَسَتَتَحَسَّنُ (website listening and model).
Mission distractors: إِذَا أَقْلَعَ، تَحَسَّنَتْ صِحَّتُهُ غَدًا ✗ · إِذَا أَقْلَعَ، لَتَحَسَّنَتْ ✗ (that is the law pattern from P1-L03).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · reporting evidence — inform, do not lecture (website rule 4) · Stretch', title: 'From judging to informing', ar: 'نَقْلُ الأَدِلَّةِ',
      cols: [{ label: 'Judges people (avoid)', w: 4.3, size: 20 }, { label: 'Informs (use)', w: 6.0, size: 20 }, { label: 'Tool', w: 2.03 }],
      rows: [
        { core: true, cells: ['المُدَخِّنُونَ أَشْخَاصٌ سَيِّئُونَ.', '{m|يُوصَفُ} التَّدْخِينُ {m|بِأَنَّهُ} ضَارٌّ بِالصِّحَّةِ.', 'is described as'] },
        { core: true, cells: ['يَجِبُ أَنْ يَخْجَلَ كُلُّ مُدَخِّنٍ.', '{m|تُشِيرُ الدِّرَاسَاتُ إِلَى أَنَّ} الإِقْلَاعَ يُحَسِّنُ الصِّحَّةَ.', 'studies indicate'] },
        { cells: ['الإِقْلَاعُ سَهْلٌ لِمَنْ أَرَادَ.', 'الإِقْلَاعُ {k|لَيْسَ سَهْلًا}، وَيَحْتَاجُ إِلَى دَعْمٍ.', 'realistic'] },
        { cells: ['الكُحُولُ لِلنَّاسِ السَّيِّئِينَ.', '{m|يُوصَفُ} الإِفْرَاطُ فِي الكُحُولِ {m|بِأَنَّهُ} عَامِلُ خَطَرٍ.', 'is described as'] },
        { cells: ['لَا أَحَدَ يَسْتَطِيعُ الإِقْلَاعَ.', 'الدَّعْمُ الطِّبِّيُّ {k|يَرْفَعُ فُرَصَ} الإِقْلَاعِ.', 'what helps'] },
      ],
      ltr: true,
      foot: 'After anna the noun is accusative (anna al-iqlāʿa); a feminine topic takes bi-annahā: tūṣaf al-mukhaddirāt bi-annahā …',
      notes: `GRAMMAR PART 4 — website rule “Reporting evidence impersonally” (these report findings without you asserting them personally; the noun or pronoun after أَنَّ is accusative) and teaching point “Inform, do not lecture”: a paragraph that informs is worth more marks than one that moralises, and it is more accurate.
Website quiz item 4: يُوصَفُ التَّدْخِينُ بِأَنَّهُ … (masculine ـهُ for التَّدْخِينُ; ـهَا would be for a feminine topic).
Cover the right column; students rewrite each left-hand sentence with a tool from the right.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me inform, not lecture',
    steps: [
      { head: 'Report', ar: '{m|يُوصَفُ} التَّدْخِينُ {m|بِأَنَّهُ} سَبَبٌ رَئِيسِيٌّ', think: 'Impersonal.' },
      { head: 'Effect', ar: '{w|يُضْعِفُ جِهَازَ المَنَاعَةِ}', think: 'Direct object.' },
      { head: 'Harm', ar: '{e|يُلْحِقُ الضَّرَرَ بِالأَوْعِيَةِ}', think: 'bi- for what.' },
      { head: 'Consequence', ar: '{k|إِذَا أَقْلَعَ}، فَسَتَتَحَسَّنُ', think: 'Not a command.' },
    ],
    legend: ['m', 'w', 'e', 'k'], legendLabels: { m: 'REPORT', w: 'DIRECT OBJECT', e: 'HARM + BI-', k: 'CONDITION' },
    model: '{m|يُوصَفُ} التَّدْخِينُ {m|بِأَنَّهُ} سَبَبٌ رَئِيسِيٌّ لِأَمْرَاضِ الرِّئَةِ وَالقَلْبِ. وَتُشِيرُ الدِّرَاسَاتُ إِلَى أَنَّهُ {w|يُضْعِفُ جِهَازَ المَنَاعَةِ} {e|وَيُلْحِقُ الضَّرَرَ بِالأَوْعِيَةِ} الدَّمَوِيَّةِ. أَمَّا {k|إِذَا أَقْلَعَ} الشَّخْصُ، فَسَتَتَحَسَّنُ وَظَائِفُ الرِّئَةِ خِلَالَ أَشْهُرٍ.',
    modelEn: 'Smoking is described as a main cause of lung and heart disease. Studies indicate that it weakens the immune system and harms the blood vessels. But if a person gives up, lung function will improve within months.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “I am not judging anyone — yūṣaf bi-annahu reports. Weakens: direct object. Harms: al-ḍarar + bi- for what is harmed. Then a consequence with idhā — not a command.”',
  },
  patternEn: ['it weakens the immune system', 'it causes harm to the lungs', 'it is described as a main cause'],
  game: {
    title: 'Which risk? Match the picture',
    pick: [0, 3, 5],
    en: ['Smoking harms the lungs.', 'Lack of sleep affects concentration.', 'Lack of movement affects fitness.'],
    icons: [[['fa6', 'FaSmoking', '6B4C9A'], ['fa6', 'FaLungs', 'C0386B'], ['fa6', 'FaTriangleExclamation', 'C77700']], [['fa6', 'FaBed', '1D5FBF'], ['fa6', 'FaArrowDown', 'C0386B'], ['fa6', 'FaBookOpen', '1E6B52']], [['fa6', 'FaCouch', 'C77700'], ['fa6', 'FaBan', 'C0386B']]],
    labels: ['smoking and the lungs', 'too little sleep', 'sitting all day'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Then upgrade each card: التَّدْخِينُ يَضُرُّ الرِّئَتَيْنِ → يُلْحِقُ التَّدْخِينُ الضَّرَرَ بِالرِّئَتَيْنِ · قِلَّةُ النَّوْمِ تُؤَثِّرُ فِي التَّرْكِيزِ → إِذَا قَلَّ النَّوْمُ، سَيَضْعُفُ التَّرْكِيزُ. Other website cards: alcohol, phone use while driving, unhealthy food.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build an informed sentence (website builder)', title: 'Effect + consequence + balanced close', ar: 'اِبْنِ فِقْرَةً مُتَوَازِنَةً',
      cols: [{ label: '1 · Effect', w: 4.1, size: 19 }, { label: '2 · Consequence (idhā)', w: 4.0, size: 19 }, { label: '3 · Balanced close', w: 4.23, size: 19 }],
      rows: [
        { core: true, cells: ['يُضْعِفُ التَّدْخِينُ جِهَازَ المَنَاعَةِ', 'وَإِذَا اسْتَمَرَّ سَنَوَاتٍ، سَيَزْدَادُ الخَطَرُ', 'وَالإِقْلَاعُ لَيْسَ سَهْلًا وَيَحْتَاجُ إِلَى دَعْمٍ'] },
        { core: true, cells: ['يُلْحِقُ التَّدْخِينُ الضَّرَرَ بِالرِّئَتَيْنِ', 'وَإِذَا أَقْلَعَ، سَتَتَحَسَّنُ وَظَائِفُ الرِّئَةِ', 'وَتُشِيرُ الدِّرَاسَاتُ إِلَى أَهَمِّيَّةِ الوِقَايَةِ'] },
        { cells: ['يَزِيدُ التَّدْخِينُ مِنْ خُطُورَةِ السَّرَطَانِ', 'وَإِذَا تَوَفَّرَ الدَّعْمُ، سَتَقِلُّ الحَالَاتُ', 'وَلَيْسَ الهَدَفُ لَوْمَ الأَفْرَادِ'] },
      ],
      foot: 'Website builder: any box from each column builds an accurate, balanced sentence.',
      notes: `WE DO (3 min) — the website sentence builder. Pairs build three different sentences, one box per column.
Core: read row 1 and translate it. Develop: build two new combinations. Stretch: replace column 1 with your own effect using أَمْرَاضُ القَلْبِ or جِهَازُ المَنَاعَةِ, and add يُوصَفُ … بِأَنَّهُ.
Translations: column 3 — and giving up is not easy and needs support · and studies point to the importance of prevention · and the aim is not to blame individuals.`,
    },
  ],
  sorterTitle: 'Direct object, bi- or ʿan?',
  sorterNotes: 'Then say a phrase for each verb: يُضْعِفُ المَنَاعَةَ · يُسَبِّبُ أَمْرَاضًا · يُهَدِّدُ الصِّحَّةَ · يُلْحِقُ الضَّرَرَ بِالقَلْبِ · يُوصَفُ بِأَنَّهُ ضَارٌّ · يَضُرُّ بِالأَسْنَانِ · يُقْلِعُ عَنِ التَّدْخِينِ · يَتَوَقَّفُ عَنِ الشُّرْبِ · يَمْتَنِعُ عَنِ السُّكَّرِ.',
  patch: { grammar: { ...site.grammar, rules } },
  patchNote: 'website rule headings and formulas shown in English and transliteration; English added to the patterns. All other website items are used as published.',
  hints: ['al-ḍarar + which preposition?', 'yuḍʿif: direct object or min?', 'Habit or person?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nListen for: idhā … sa-.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5 — and note one report phrase and one idhā sentence.',
  gloss: [
    ['يُوصَفُ التَّدْخِينُ بِأَنَّهُ سَبَبٌ رَئِيسِيٌّ لِأَمْرَاضِ الرِّئَةِ وَالقَلْبِ.', 'Smoking is described as a main cause of lung and heart disease.'],
    ['وَتُشِيرُ الدِّرَاسَاتُ إِلَى أَنَّهُ يُضْعِفُ جِهَازَ المَنَاعَةِ وَيُلْحِقُ الضَّرَرَ بِالأَوْعِيَةِ الدَّمَوِيَّةِ.', 'Studies indicate that it weakens the immune system and harms the blood vessels.'],
    ['وَإِذَا اسْتَمَرَّ الشَّخْصُ فِي التَّدْخِينِ سَنَوَاتٍ طَوِيلَةً، سَيَزْدَادُ خَطَرُ تَصَلُّبِ الشَّرَايِينِ. أَمَّا إِذَا أَقْلَعَ، فَسَتَتَحَسَّنُ وَظَائِفُ الرِّئَةِ خِلَالَ أَشْهُرٍ.', 'If a person continues smoking for many years, the risk of hardened arteries will increase. But if he gives up, lung function will improve within months.'],
    ['وَالإِقْلَاعُ لَيْسَ سَهْلًا، لِأَنَّ الاعْتِمَادَ جَسَدِيٌّ وَنَفْسِيٌّ مَعًا؛ وَلِذٰلِكَ يُنْصَحُ بِطَلَبِ الدَّعْمِ الطِّبِّيِّ.', 'Giving up is not easy, because dependence is both physical and psychological; so it is advised to seek medical support.'],
    ['وَتَخْتَلِفُ سِيَاسَاتُ الوِقَايَةِ مِنْ بَلَدٍ إِلَى بَلَدٍ، قَانُونِيًّا وَاجْتِمَاعِيًّا.', 'Prevention policies differ from country to country, legally and socially.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا أَثَرُ التَّدْخِينِ عَلَى الصِّحَّةِ؟ اِسْتَعْمِلْ يُضْعِفُ أَوْ يُلْحِقُ الضَّرَرَ بِـ.' },
      { route: 'develop', ar: 'مَاذَا سَيَحْدُثُ إِذَا أَقْلَعَ الشَّخْصُ؟' },
      { route: 'stretch', ar: 'لِمَاذَا يُقَالُ إِنَّ الإِقْلَاعَ لَيْسَ سَهْلًا؟' },
    ],
    stems: [
      { route: 'core', ar: 'يُضْعِفُ التَّدْخِينُ ______ ، وَيُلْحِقُ الضَّرَرَ ______ .' },
      { route: 'develop', ar: 'إِذَا أَقْلَعَ الشَّخْصُ، ______ .' },
      { route: 'stretch', ar: 'الإِقْلَاعُ لَيْسَ سَهْلًا، لِأَنَّ ______ .' },
    ],
    modelEn: ['What is the effect of smoking on health?', 'It weakens the immune system and harms the lungs and the heart.', 'And what will happen if he gives up?', 'If he gives up, lung function will improve within months, but giving up is not easy and needs support.'],
    notes: 'Website prompts and model. Keep it about the habit — “a person”, not named family members. Check: direct object after yuḍʿif, bi- after al-ḍarar, past form after idhā. To a girl: اِسْتَعْمِلِي.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Website Core: name effects with the correct harm structure.' },
    develop: { amount: '60–70 words', how: 'Website Develop: add two conditionals and one impersonal report.' },
    stretch: { amount: '80–90 words', how: 'Website task: close with a balanced statement on support and prevention — no moralising.' },
  },
  frames: {
    core: [
      { en: 'Smoking weakens …', ar: 'يُضْعِفُ التَّدْخِينُ ______ .' },
      { en: 'Smoking causes harm to the lungs and …', ar: 'يُلْحِقُ التَّدْخِينُ الضَّرَرَ بِالرِّئَتَيْنِ وَ ______ .' },
      { en: 'It increases the risk of …', ar: 'يَزِيدُ مِنْ خُطُورَةِ ______ .' },
      { en: 'It is not easy to give up …', ar: 'لَيْسَ سَهْلًا أَنْ يُقْلِعَ الإِنْسَانُ عَنِ ______ .' },
    ],
    develop: [
      { en: 'Smoking is described as …', ar: 'يُوصَفُ التَّدْخِينُ بِأَنَّهُ ______ .' },
      { en: 'Studies indicate that …', ar: 'تُشِيرُ الدِّرَاسَاتُ إِلَى أَنَّ ______ .' },
      { en: 'If he continues …, the risk of … will increase.', ar: 'إِذَا اسْتَمَرَّ ______ ، سَيَزْدَادُ خَطَرُ ______ .' },
      { en: 'But if he gives up, … will improve.', ar: 'أَمَّا إِذَا أَقْلَعَ، فَسَتَتَحَسَّنُ ______ .' },
    ],
    bank: ['جِهَازُ المَنَاعَةِ', 'الرِّئَتَانِ', 'القَلْبُ', 'الأَوْعِيَةُ الدَّمَوِيَّةُ', 'السَّرَطَانُ', 'أَمْرَاضُ القَلْبِ', 'تَصَلُّبُ الشَّرَايِينِ', 'الاعْتِمَادُ', 'الدَّعْمُ', 'الوِقَايَةُ', 'خِلَالَ أَشْهُرٍ', 'وَظَائِفُ الرِّئَةِ'],
  },
  stretch: [
    ['سَبَبٌ رَئِيسِيٌّ لِـ', 'a main cause of'],
    ['لِأَنَّ الاعْتِمَادَ جَسَدِيٌّ وَنَفْسِيٌّ مَعًا', 'because dependence is both physical and psychological'],
    ['يُنْصَحُ بِالدَّعْمِ الطِّبِّيِّ', 'medical support is advised'],
    ['لَيْسَ الهَدَفُ لَوْمَ الأَفْرَادِ، بَلْ تَقْلِيلُ الضَّرَرِ', 'the aim is not to blame individuals, but to reduce harm'],
    ['تَخْتَلِفُ التَّشْرِيعَاتُ مِنْ بَلَدٍ إِلَى بَلَدٍ', 'legislation differs from country to country'],
  ],
  modelEn: 'Smoking is described as a main cause of lung and heart disease. Studies indicate that it weakens the immune system, harms the blood vessels and increases the risk of several diseases. If a person continues for many years, the risk of hardened arteries will increase. But if he gives up, lung function will improve within months. Giving up is not easy, because dependence is both physical and psychological, so medical support is advised. The aim is not to blame individuals, but to reduce harm.',
  find: ['an impersonal report (yūṣaf bi-annahu)', 'yuḍʿif + a direct object', 'al-ḍarar + bi-', 'a consequence with idhā'],
  modelNotes: 'Website writing model. Evidence: يُوصَفُ التَّدْخِينُ بِأَنَّهُ · تُشِيرُ الدِّرَاسَاتُ إِلَى أَنَّهُ · يُضْعِفُ جِهَازَ المَنَاعَةِ · يُلْحِقُ الضَّرَرَ بِالأَوْعِيَةِ · إِذَا اسْتَمَرَّ … سَيَزْدَادُ · أَمَّا إِذَا أَقْلَعَ، فَسَتَتَحَسَّنُ · لَيْسَ الهَدَفُ لَوْمَ الأَفْرَادِ.',
  selfCheck: [
    { route: 'core', text: 'yuḍʿif has a direct object — no preposition.' },
    { route: 'core', text: 'al-ḍarar is followed by bi- for what is harmed.' },
    { route: 'develop', text: 'My idhā verbs are in the past form, results with sa-.' },
    { route: 'develop', text: 'I reported evidence (yūṣaf / tushīr al-dirāsāt).' },
    { route: 'stretch', text: 'I described the habit, not the worth of people.' },
  ],
  exit: [0, 2, 3],
  glossary: [
    ['تَتَنَاوَلُ', 'deal with'], ['سِيَاسَاتُ الصِّحَّةِ العَامَّةِ', 'public health policies'], ['بِوَصْفِهَا', 'as (being)'], ['أَخْلَاقِيَّةً', 'moral'], ['الإِفْرَاطُ', 'excess'],
    ['عَامِلُ خَطَرٍ', 'a risk factor'], ['الكَبِدِ', 'the liver'], ['فُرَصَ', 'chances'], ['لَوْمَ الأَفْرَادِ', 'blaming individuals'], ['التَّشْرِيعَاتُ', 'legislation'],
  ],
  prep: {
    words: [['جَوْدَةُ النَّوْمِ', 'sleep quality', '—'], ['الأَرَقُ', 'insomnia', '—'], ['وَقْتُ الشَّاشَةِ', 'screen time', '—'], ['الإِشْعَارَاتُ', 'notifications', 'sg. إِشْعَارٌ'], ['يَحُدُّ مِنْ', 'he limits', 'تَحُدُّ she']],
    questionEn: 'How many hours do you sleep, and do you use a screen before bed?',
    questionAr: 'أَنَامُ ______ سَاعَاتٍ، وَ ______ الشَّاشَةَ قَبْلَ النَّوْمِ.',
    homework: {
      core: 'Learn 10 behaviour and effect words; write five sentences with the right harm structure.',
      develop: 'A 60–70-word paragraph with two conditionals and one report phrase.',
      stretch: 'Website writing task: 80–90 words that inform and close on support and prevention.',
    },
    wordsSource: 'The five words come from the website P1-L05 vocabulary (sleep and digital wellbeing).',
  },
  remember: 'Remember: yuḍʿif + a direct object · yulḥiq al-ḍarar BI- what is harmed · yuqliʿ ʿAN — state consequences with idhā, report evidence (yūṣaf bi-annahu), and describe the habit, never the worth of people.',
});

module.exports = { meta, slides };
