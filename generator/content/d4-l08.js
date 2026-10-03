'use strict';
/* D4-L08 · Reading — Environment and Technology Texts — website: Pathways › Development › D4 › D4-L08 (impersonal reporting يُشَارُ إِلَى أَنَّ / يُعْتَقَدُ أَنَّ / يُذْكَرُ أَنَّ, prediction يُتَوَقَّعُ أَنْ + subjunctive, statistics يَبْلُغُ / يُمَثِّلُ, attribution وَفْقًا لِـ, pronoun reference, tone).
 * Reading-skills lesson: the website two-text reading workshop is the main You Do task. Vowel slip corrected (يُطْفِئُ); the website pronoun-rule
 * example is unvowelled, so a vowelled version is shown; the website visual game repeats D4-L01, so the picture match is skipped. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D4')({
  n: 8, fileTitle: 'Reading_Environment_and_Technology_Texts', chip: 'Reading Skills',
  title: 'Reading — Environment and Technology Texts', arabic: 'القِرَاءَةُ — نُصُوصُ البِيئَةِ وَالتِّقْنِيَّةِ',
  focus: 'Read reports and articles like an examiner: spot impersonal reporting (يُشَارُ إِلَى أَنَّ …), read statistics exactly (يَبْلُغُ · يُمَثِّلُ · بِنِسْبَةِ …), separate a claim from its evidence, track pronouns and compare the tone of two texts.',
  icon: 'FaNewspaper', iconSet: 'fa6',
});

const site = D.site('D4-L08');
const quiz = site.grammar.quiz.map((it, i) => (i === 1 ? { ...it, options: ['يُتَوَقَّعُ الطَّلَبُ أَنْ زَادَ.', 'يُتَوَقَّعُ أَنْ يَزْدَادَ الطَّلَبُ.', 'يُتَوَقَّعُ أَنِ ازْدَادَ الطَّلَبُ أَمْسِ.'] } : it));
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D4-L08', {
  support: `• This is a READING-SKILLS lesson: the website’s two short texts (council data + a tech blogger) are the main You Do task.
• Core: the reporting words (وَفْقًا لِـ · يُشَارُ إِلَى أَنَّ) and reading questions 1–3 (source, number, how). Develop: all 6 questions + one claim vs one piece of evidence. Stretch: compare the two texts’ tone (مُحَايِدٌ / حَذِرٌ) in writing.
• Reading routine for every text: (1) Who says it? (source) (2) What is claimed? (3) What is the evidence (a number)? (4) What is the tone?
• Builds on D3-L08 (reading adverts, reference, inference) and D4-L03 / L06 (passive).`,
  teach: 'Reporting language, statistics, claim vs evidence, reference and tone.',
  wedo: 'Sort the words, fix reporting slips, then a data-heavy listening.',
  next: { nextCode: 'D4-L09', nextTitle: 'Writing — Environment and Technology Article', nextAr: 'الكِتَابَةُ — مَقَالٌ عَنِ البِيئَةِ وَالتِّقْنِيَّةِ' },
  objectives: ['Recognise impersonal reporting and attribution (يُشَارُ إِلَى أَنَّ · وَفْقًا لِـ).', 'Read statistics precisely (يَبْلُغُ · يُمَثِّلُ · بِنِسْبَةِ).', 'Separate a claim from its evidence and track pronouns.', 'Compare the message and tone of two texts.'],
  rulesTitle: 'Grammar for reading evidence and reporting',
  rulesAr: 'قَوَاعِدُ قِرَاءَةِ الأَدِلَّةِ وَالنَّقْلِ',
  ruleEx: [null, null, null, ['تَحْتَاجُ المَدِينَةُ إِلَى شَبَكَةٍ ذَكِيَّةٍ لِأَنَّهَا تُقَلِّلُ الهَدْرَ.', 'يَعُودُ الضَّمِيرُ «هَا» عَلَى الشَّبَكَةِ، لَا عَلَى المَدِينَةِ.']],
  flexGroups: [],
  doNow: {
    questions: [
      q('What does إِحْصَاءَاتٌ mean?', ['statistics', 'data', 'a report'], 'Prepared at home (D4-L07).'),
      q('What does النَّبْرَةُ mean?', ['the tone', 'the source', 'the claim'], 'Prepared at home (D4-L07).'),
      q('Complete: إِذَا اسْتَمَرَّ الهَدْرُ، ___ تَنْضَبُ المَوَارِدُ.', ['فَسَوْفَ', 'لِكَيْ', 'بِسَبَبِ'], 'D4-L07.'),
      q('What does يُشْتَرَطُ mean in an advert?', ['is required', 'is preferred', 'is offered'], 'D3-L08: a reading passive.'),
      q('In أَرْسَلَتْ سَلْمَى سِيرَتَهَا, -hā refers to …', ['Salma', 'the company', 'the CV'], 'D3-L08: pronoun reference.'),
    ],
    keyIdea: { text: 'A strong reader asks: who says it, what is the evidence, and how sure is the writer?', ar: '{k|وَفْقًا لِبَيَانَاتِ} البَلَدِيَّةِ · {w|يُشَارُ إِلَى أَنَّ} … · بِنِسْبَةِ {e|١٨٪}' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of D4-L07. Question 3 retrieves D4-L07; questions 4–5 retrieve the D3-L08 reading skills (passive advert language, pronoun reference).',
  },
  routes: {
    core: ['I can find the source and a number.', 'I can understand reporting phrases.'],
    develop: ['I can separate a claim from its evidence.', 'I can say what a pronoun refers to.'],
    stretch: ['I can compare the tone of two texts.', 'I can write a supported comparison.'],
  },
  bridge: [
    { ar: 'إِحْصَاءٌ', urdu: 'احصاء / شمار', tr: 'shumār', en: 'statistics' },
    { ar: 'نِسْبَةٌ', urdu: 'نسبت', tr: 'nisbat', en: 'Urdu: relation · Arabic: ratio, percentage' },
    { ar: 'دَعْوَى / ادِّعَاءٌ', urdu: 'دعویٰ', tr: 'daʿwā', en: 'claim' },
    { ar: 'مَصْدَرٌ', urdu: 'مصدر / ماخذ', tr: 'māʾkhaz', en: 'source' },
    { ar: 'مُتَفَائِلٌ', urdu: 'فال / پرامید', tr: 'pur-umīd', en: 'optimistic (meaning only)' },
  ],
  bridgeNotes: 'URDU BRIDGE: دعویٰ (claim) = Arabic ادِّعَاءٌ / دَعْوَى. CAREFUL: Urdu نسبت = connection / relation, Arabic نِسْبَةٌ = ratio, percentage (بِنِسْبَةِ ١٨٪ = by 18%). مُتَفَائِلٌ is related to فال (a good omen) — optimistic.',
  core: ['تَقْرِيرٌ', 'مَصْدَرُ المَعْلُومَاتِ', 'بَيَانَاتٌ', 'إِحْصَاءَاتٌ', 'دَلِيلٌ', 'ادِّعَاءٌ', 'يُشَارُ إِلَى أَنَّ', 'يُتَوَقَّعُ أَنْ', 'يَبْلُغُ', 'يُمَثِّلُ', 'وَفْقًا لِـ', 'النَّبْرَةُ'],
  vocabNotes: {
    0: 'Text and evidence: a CLAIM (ادِّعَاءٌ) is what the writer says; EVIDENCE (دَلِيلٌ) is what proves it (often بَيَانَاتٌ / إِحْصَاءَاتٌ).',
    1: 'Reporting signals: impersonal passives (it is indicated / believed / expected / mentioned that …) — the information matters, not the person.',
    2: 'Reading relationships: the tone words (مُحَايِدٌ neutral · مُتَفَائِلٌ optimistic · مُتَشَائِمٌ pessimistic) are for Stretch comparison.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · reporting and statistics (website rules 1–3)', title: 'Who says it? What is the number?', ar: 'النَّقْلُ وَالأَرْقَامُ',
      cols: [{ label: 'Example', w: 7.6, size: 22 }, { label: 'Reading signal', w: 4.73 }],
      rows: [
        { core: true, cells: [P('{k|وَفْقًا لِتَقْرِيرٍ} جَدِيدٍ، ارْتَفَعَ مُتَوَسِّطُ دَرَجَةِ الحَرَارَةِ.', 'According to a new report, the average temperature rose.'), 'source: wafqan li-'] },
        { core: true, cells: [P('{w|يُشَارُ إِلَى أَنَّ} فَتَرَاتِ الجَفَافِ أَصْبَحَتْ أَطْوَلَ.', 'It is indicated that droughts have become longer.'), 'impersonal report + anna'] },
        { cells: [P('{w|يُتَوَقَّعُ أَنْ} يَزْدَادَ الطَّلَبُ عَلَى المِيَاهِ.', 'Demand for water is expected to rise.'), 'prediction: an + verb in -a'] },
        { cells: [P('{e|يَبْلُغُ} الحَدُّ الأَقْصَى ٤٠ دَرَجَةً.', 'The maximum reaches 40 degrees.'), 'a number: yablughu'] },
        { cells: [P('{e|تُمَثِّلُ} الطَّاقَةُ الشَّمْسِيَّةُ ٣٠٪ مِنَ الإِنْتَاجِ.', 'Solar energy represents 30% of production.'), 'a share: yumaththilu'] },
      ],
      ltr: true,
      foot: 'Numbers: always check WHAT the number measures (degrees? years? per cent?) before you choose.',
      notes: `GRAMMAR PART 1 — website rules “Recognise impersonal reporting” (these passives foreground the information rather than the person reporting it), “Prediction after يُتَوَقَّعُ” (a sound-ending present verb takes fatḥa after أَنْ) and “Statistical language” (identify exactly what the number measures; do not match numbers by sight alone). Rows from the website rules and listening.
Website mistake: وَفْقًا التَّقْرِيرُ ✗ → وَفْقًا لِلتَّقْرِيرِ ✓.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · claim, reference, tone (website rule 4 + reading workshop) · Develop / Stretch', title: 'Claim or evidence? Who is “he”? What tone?', ar: 'الادِّعَاءُ · الضَّمِيرُ · النَّبْرَةُ',
      cards: [
        { chip: 'CLAIM vs EVIDENCE · DEVELOP', color: '1D5FBF', head: 'ادِّعَاءٌ · دَلِيلٌ', big: 'انْخَفَضَ الاسْتِهْلَاكُ بِنِسْبَةِ ١٨٪.', en: 'Consumption fell by 18%.', clue: 'A number = evidence.' },
        { chip: 'REFERENCE · DEVELOP', color: 'C0386B', head: 'هَا = الشَّبَكَةُ', big: 'لِأَنَّهَا تُقَلِّلُ الهَدْرَ', en: 'because IT reduces waste → the grid (not the city)', clue: 'Meaning decides.' },
        { chip: 'TONE · STRETCH', color: '6B4C9A', head: 'مُحَايِدٌ · حَذِرٌ', big: 'نَبْرَةُ النَّصِّ الأَوَّلِ مُحَايِدَةٌ لِأَنَّهُ يَعْرِضُ أَرْقَامًا.', en: 'The first text’s tone is neutral because it presents figures.', clue: 'Tone + reason.' },
      ],
      error: { text: 'Website mistake: after an the verb ends in -a.', pairs: [['يُتَوَقَّعُ أَنْ يَزْدَادَ الطَّلَبُ.', 'يُتَوَقَّعُ أَنْ يَزْدَادُ الطَّلَبُ.']] },
      notes: `GRAMMAR PART 2 — website rule “Pronoun reference” (gender and number help, but meaning confirms the reference) with the website example: تَحْتَاجُ المَدِينَةُ إِلَى شَبَكَةٍ ذَكِيَّةٍ لِأَنَّهَا تُقَلِّلُ الهَدْرَ — هَا refers to the grid, not the city, because the grid is what reduces waste.
Claim / evidence / tone come from the website vocabulary and the writing model (نَبْرَةُ النَّصِّ الأَوَّلِ مُحَايِدَةٌ …، أَمَّا النَّصُّ الثَّانِي فَنَبْرَتُهُ أَكْثَرُ حَذَرًا).`,
    },
  ],
  quick: [0, 2, 4, 5],
  rest: [1, 3, 6, 7],
  ido: {
    title: 'Watch me read a report like an examiner',
    steps: [
      { head: 'Source', ar: '{k|وَفْقًا لِبَيَانَاتِ} البَلَدِيَّةِ', think: 'Who says it? The council.' },
      { head: 'Evidence', ar: 'انْخَفَضَ الاسْتِهْلَاكُ {e|بِنِسْبَةِ ١٨٪}', think: 'A number = evidence.' },
      { head: 'How', ar: '{w|يُشَارُ إِلَى أَنَّ} النِّظَامَ يُطْفِئُ الإِضَاءَةَ', think: 'Impersonal report.' },
      { head: 'Tone', ar: 'النَّبْرَةُ مُحَايِدَةٌ', think: 'Figures, no opinion.' },
    ],
    legend: ['k', 'e', 'w'], legendLabels: { k: 'SOURCE', e: 'EVIDENCE', w: 'REPORT' },
    model: 'النَّصُّ الأَوَّلُ تَقْرِيرٌ. {k|وَفْقًا لِبَيَانَاتِ} البَلَدِيَّةِ، انْخَفَضَ اسْتِهْلَاكُ الكَهْرَبَاءِ {e|بِنِسْبَةِ ١٨٪}، وَهٰذَا دَلِيلٌ مُحَدَّدٌ. وَ{w|يُشَارُ إِلَى أَنَّ} النِّظَامَ يُطْفِئُ الإِضَاءَةَ فِي الغُرَفِ الفَارِغَةِ. نَبْرَةُ النَّصِّ مُحَايِدَةٌ لِأَنَّهُ يَعْرِضُ أَرْقَامًا.',
    modelEn: 'The first text is a report. According to council data, electricity use fell by 18%, and this is precise evidence. It is indicated that the system turns off lights in empty rooms. The tone is neutral because it presents figures.',
    notes: 'I DO (3 min) — think-aloud on the website reading text 1 using the four-question routine (source → evidence → how → tone). Students then do text 2 themselves in the You Do.',
  },
  patternEn: ['It is indicated that temperatures are rising.', 'Demand for water is expected to increase.', 'The maximum reaches forty degrees.'],
  sorterNotes: 'Then pick one word from each group and say how it helps a reader (e.g. وَفْقًا لِـ tells me the source).',
  patch: {
    grammar: { ...site.grammar, quiz },
    reading: { text: site.reading.text.replace('يَطْفِئُ', 'يُطْفِئُ') },
    writing: { model: site.writing.model },
    speaking: {
      model: [
        ['A', 'كَيْفَ نَعْرِفُ أَنَّ ادِّعَاءً فِي نَصٍّ مَوْثُوقٌ؟', 'How do we know a claim in a text is reliable?'],
        ['B', 'نَبْحَثُ عَنْ مَصْدَرٍ وَاضِحٍ وَبَيَانَاتٍ مُحَدَّدَةٍ، وَنُمَيِّزُ بَيْنَ رَأْيِ الكَاتِبِ وَالدَّلِيلِ الَّذِي يُقَدِّمُهُ.', 'We look for a clear source and specific data, and we distinguish between the writer’s opinion and the evidence he gives.'],
      ],
    },
  },
  patchNote: 'one vowel slip in the reading text corrected (يَطْفِئُ → يُطْفِئُ), the unvowelled pronoun-rule example replaced with a vowelled one, one quiz item given meaningful distractors, and English added to the website speaking model.',
  hints: ['After an: -u or -a?', 'Where does the subject go?', 'wafqan + which preposition?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 5.\nThree numbers: 1 degree · 20 years · 15%.',
  listenRoutes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 6 — say what each number measures.',
  gloss: [
    ['وَفْقًا لِتَقْرِيرٍ جَدِيدٍ، ارْتَفَعَ مُتَوَسِّطُ دَرَجَةِ الحَرَارَةِ فِي المَنْطِقَةِ دَرَجَةً وَاحِدَةً خِلَالَ عِشْرِينَ عَامًا.', 'According to a new report, the region’s average temperature rose by one degree over twenty years.'],
    ['وَيُشَارُ إِلَى أَنَّ فَتَرَاتِ الجَفَافِ أَصْبَحَتْ أَطْوَلَ، مِمَّا يُؤَثِّرُ فِي الزِّرَاعَةِ.', 'It is indicated that droughts have become longer, which affects agriculture.'],
    ['وَيُتَوَقَّعُ أَنْ يَزْدَادَ الطَّلَبُ عَلَى المِيَاهِ بِنِسْبَةِ خَمْسَ عَشْرَةَ فِي المِئَةِ', 'Demand for water is expected to rise by fifteen per cent'],
    ['بِحُلُولِ عَامِ ٢٠٣٥.', 'by the year 2035.'],
    ['لٰكِنَّ التَّقْرِيرَ يَذْكُرُ أَيْضًا أَنَّ الاسْتِثْمَارَ فِي إِعَادَةِ اسْتِخْدَامِ المِيَاهِ قَدْ يُقَلِّلُ الضَّغْطَ.', 'But the report also mentions that investing in water reuse may reduce the pressure.'],
  ],
  readingCore: {
    readMin: 4, qMin: 6,
    notes: 'YOU DO — READING (main task): the website reading workshop (two texts: council data and a tech blogger). Text 1: source, number, how. Text 2: claim, reservation, “he”.\nCore: questions 1–3. Develop: all 6. Stretch: then the written comparison of the two texts (message, evidence, tone).',
  },
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا الفَرْقُ بَيْنَ الادِّعَاءِ وَالدَّلِيلِ؟' },
      { route: 'develop', ar: 'كَيْفَ نَتَتَبَّعُ الضَّمَائِرَ فِي النَّصِّ؟' },
      { route: 'stretch', ar: 'كَيْفَ نُقَارِنُ نَبْرَةَ نَصَّيْنِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'الادِّعَاءُ هُوَ ______ ، وَالدَّلِيلُ هُوَ ______ .' },
      { route: 'develop', ar: 'يَعُودُ الضَّمِيرُ فِي « ______ » عَلَى ______ لِأَنَّ ______ .' },
      { route: 'stretch', ar: 'نَبْرَةُ النَّصِّ الأَوَّلِ ______ ، أَمَّا النَّصُّ الثَّانِي فَنَبْرَتُهُ ______ .' },
    ],
    modelEn: ['How do we know a claim in a text is reliable?', 'We look for a clear source and specific data, and we distinguish between the writer’s opinion and the evidence he gives.'],
    notes: 'Website prompts and model. Students explain HOW they read. Core may answer with one Arabic key word + English.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Text 1: the source, the number, what it measures, and the tone.' },
    develop: { amount: '100–120 words', how: 'Both texts: each main claim and one piece of evidence from each.' },
    stretch: { amount: '120–140 words', how: 'Website task: compare the message, evidence and tone of the two texts.' },
  },
  frames: {
    core: [
      { en: 'According to council data, …', ar: 'وَفْقًا لِبَيَانَاتِ البَلَدِيَّةِ، ______ .' },
      { en: 'Consumption fell by …', ar: 'انْخَفَضَ الاسْتِهْلَاكُ بِنِسْبَةِ ______ .' },
      { en: 'It is indicated that the system …', ar: 'يُشَارُ إِلَى أَنَّ النِّظَامَ ______ .' },
      { en: 'The tone is neutral because …', ar: 'النَّبْرَةُ مُحَايِدَةٌ لِأَنَّ ______ .' },
    ],
    develop: [
      { en: 'The blogger thinks that …', ar: 'يَرَى صَاحِبُ المُدَوَّنَةِ أَنَّ ______ ،' },
      { en: 'but he warns against …', ar: 'لٰكِنَّهُ يُحَذِّرُ مِنْ ______ .' },
      { en: 'This is specific evidence of …', ar: 'هٰذَا دَلِيلٌ مُحَدَّدٌ عَلَى ______ .' },
      { en: 'We conclude that …', ar: 'نَسْتَنْتِجُ أَنَّ ______ .' },
    ],
    bank: ['وَفْقًا لِـ', 'يُشَارُ إِلَى أَنَّ', 'يُتَوَقَّعُ أَنْ', 'بِنِسْبَةِ', 'يَبْلُغُ', 'يُمَثِّلُ', 'ادِّعَاءٌ', 'دَلِيلٌ', 'يَعُودُ الضَّمِيرُ عَلَى', 'مُحَايِدٌ', 'حَذِرٌ', 'نَسْتَنْتِجُ أَنَّ'],
  },
  stretch: [
    ['يَعْرِضُ النَّصَّانِ …', 'the two texts present …'],
    ['دَلِيلٌ مُحَدَّدٌ عَلَى فَعَالِيَّةِ النِّظَامِ', 'specific evidence of the system’s effectiveness'],
    ['يُحَذِّرُ مِنْ جَمْعِ البَيَانَاتِ دُونَ مُوَافَقَةٍ', 'warns against collecting data without consent'],
    ['نَبْرَتُهُ أَكْثَرُ حَذَرًا', 'its tone is more cautious'],
    ['يَعْتَمِدُ عَلَى … مَعًا', 'depends on … together'],
  ],
  modelEn: 'The two texts present the benefits and risks of smart systems. According to council data, electricity use fell by 18%, which is specific evidence of the system’s effectiveness. However, the blogger warns against collecting data without consent. The first text’s tone is neutral because it presents figures, whereas the second text’s tone is more cautious. We conclude that the technology may reduce waste, but its success depends on protecting privacy.',
  find: ['each text’s main claim', 'a precise datum', 'a pronoun or passive tracked', 'a tone comparison'],
  modelNotes: 'Website writing model. Evidence: وَفْقًا لِبَيَانَاتِ البَلَدِيَّةِ … بِنِسْبَةِ ١٨٪ · وَهٰذَا دَلِيلٌ مُحَدَّدٌ · يُحَذِّرُ صَاحِبُ المُدَوَّنَةِ مِنْ … · نَبْرَةُ النَّصِّ الأَوَّلِ مُحَايِدَةٌ … أَمَّا النَّصُّ الثَّانِي فَنَبْرَتُهُ أَكْثَرُ حَذَرًا · نَسْتَنْتِجُ أَنَّ …',
  selfCheck: [
    { route: 'core', text: 'I named the source of the information.' },
    { route: 'core', text: 'I said exactly what each number measures.' },
    { route: 'develop', text: 'I separated the claim from the evidence.' },
    { route: 'develop', text: 'I linked “he” / “-hā” to the right noun.' },
    { route: 'stretch', text: 'I compared the tone with a reason.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['بَيَانَاتِ البَلَدِيَّةِ', 'council data'], ['انْخَفَضَ', 'fell'], ['بِنِسْبَةِ', 'by (a percentage)'], ['تَرْكِيبِ', 'installing'], ['يُطْفِئُ', 'turns off'],
    ['الغُرَفِ الفَارِغَةِ', 'empty rooms'], ['صَاحِبُ مُدَوَّنَةٍ', 'a blogger'], ['يُحَذِّرُ مِنْ', 'warns against'], ['دُونَ مُوَافَقَتِهِمْ', 'without their consent'], ['الكَفَاءَةِ', 'efficiency'],
  ],
  prep: {
    words: [['مُقَدِّمَةٌ', 'an introduction', 'pl. مُقَدِّمَاتٌ'], ['حُجَّةٌ', 'an argument', 'pl. حُجَجٌ'], ['حُجَّةٌ مُضَادَّةٌ', 'a counterargument', '—'], ['خَاتِمَةٌ', 'a conclusion', 'pl. خَوَاتِمُ'], ['عَلَاوَةً عَلَى ذٰلِكَ', 'in addition, moreover', '—']],
    questionEn: 'Choose a topic for an article: plastic, AI in school, or smart cities. Note one argument for and one against.',
    questionAr: 'المَوْضُوعُ: … · حُجَّةٌ: … · حُجَّةٌ مُضَادَّةٌ: …',
    homework: {
      core: 'Learn 12 reporting / evidence words; redo reading questions 1–3.',
      develop: 'Both texts’ claims and evidence in 100–120 words.',
      stretch: 'Website writing task: compare the two texts’ message, evidence and tone (120–140 words).',
    },
    wordsSource: 'The five words come from the website D4-L09 vocabulary (academic organisation of an article).',
  },
  remember: 'Remember: source → claim → evidence (exact numbers) → tone — and link every pronoun by meaning.',
});

module.exports = { meta, slides };
