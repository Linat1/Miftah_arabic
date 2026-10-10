'use strict';
/* P2-L11 · Consolidation — Speaking Preparation, Error Analysis and Grammar Mastery — website: Pathways › Progression › P2 › P2-L11 (repairing the P2 error
 * zones: قَالَ إِنَّ vs أَنَّ, the reported pronoun, كَانَ agreement and a past verb after قَدْ, the لَـ of the Type 2 result; the P2 grammar spine; producing the
 * required structure in the topic conversation without being asked). Website vocabulary, rules, quiz, sorter, mistakes, listening (mock admissions
 * conversation), reading (repair list), speaking, writing, live builder and mission used as published, with waṣl alif shown without a kasra; rule examples
 * shown without English glosses; English added to the patterns. The website teaching point numbers the required-structure questions Q2 / Q3 / Q5; this deck
 * follows the P2-L12 assessment, where they are topic questions 1–3. The website visual game repeats the P2-L01 / P2-L03 cards, so it is not used. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P2')({
  n: 11, fileTitle: 'P2_Consolidation_Speaking_Error_Analysis_Grammar', chip: 'Consolidation',
  title: 'Consolidation — Speaking Preparation, Error Analysis and Grammar Mastery', arabic: 'تَرْسِيخُ الوَحْدَةِ — إِعْدَادُ التَّحَدُّثِ وَتَحْلِيلُ الأَخْطَاءِ',
  focus: 'Repair the P2 error zones (qāla inna not anna · the reported pronoun · kāna agreement and a past verb after qad · the la- of the Type 2 result), revise the whole P2 grammar spine, and rehearse the three topic-conversation questions until each required structure comes out unprompted.',
  icon: 'FaComments', iconSet: 'fa6',
});

const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const site = D.waslFix(D.site('P2-L11'));
const RH = [['inna vs anna', 'qāla inna · (all others) anna'], ['Past-perfect agreement', 'kāna / kānat + qad + past'], ['Type 1 vs Type 2 result', 'idhā … sa- · law … la-'], ['Academic verb complements', 'yatafawwaq fī · yuʾahhil li-']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P2-L11', {
  support: `• CONSOLIDATION + SPEAKING REHEARSAL for the P2-L12 assessment (topic conversation on education and future plans). The website names the three highest-frequency slips: qāla anna · kāna / qad errors · a Type 2 result without la-.
• Core: correct six P2 errors and write three sentences from memory. Develop: add a past perfect, a reported clause and a Type 2 conditional. Stretch: answer the three required-structure questions fluently and spontaneously (website differentiation).
• The assessment topic conversation has three questions, each needing ONE structure: Q1 past perfect · Q2 reported speech · Q3 Type 2 (law … la-). The mark scheme records whether the Type 2 is produced spontaneously or avoided.
• Speaking routine for every answer: STRUCTURE first (the required one) → REASON (لِأَنَّ …) → EXTRA (a second P2 structure). Collect each student’s one “priority error” for L12.
• Sensitivity: students may not have firm plans — allow a persona (“a student who wants to study …”).`,
  teach: 'Fix the error zones, revise the spine, give the required structure unprompted.',
  wedo: 'Repair the slips, sort the structures, hear a mock admissions conversation.',
  next: { nextCode: 'P2-L12', nextTitle: 'P2 Review and Unit Assessment', nextAr: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ' },
  objectives: ['Correct the twelve most common P2 errors.', 'Retrieve reported speech, the past perfect and both conditional types accurately.', 'Use these structures spontaneously in speaking.', 'Prepare the topic-conversation answers to assessment standard.'],
  rulesAr: 'تَحْلِيلُ الأَخْطَاءِ وَإِتْقَانُ القَوَاعِدِ',
  ruleEx: [['قَالَ إِنَّ التَّعْلِيمَ حَقٌّ', 'أَكَّدَ أَنَّ المَنَاهِجَ تَتَطَوَّرُ'], ['كَانَتْ قَدْ حَصَلَتْ عَلَى مِنْحَةٍ', 'كُنْتُ قَدْ أَنْهَيْتُ بَحْثِي'], ['إِذَا دَرَسْتَ، سَتَنْجَحُ', 'لَوْ دَرَسْتَ، لَنَجَحْتَ'], ['يَتَفَوَّقُ فِي العُلُومِ', 'يُؤَهِّلُهُ التَّعْلِيمُ لِسُوقِ العَمَلِ']],
  flexGroups: [2],
  doNow: {
    questions: [
      q('What does الطَّلَاقَةُ mean?', ['fluency', 'confidence', 'spontaneity'], 'Prepared at home (P2-L10).'),
      q('What does مُقَابَلَةُ القَبُولِ mean?', ['an admissions interview', 'a role play', 'an exam'], 'Prepared at home (P2-L10).'),
      q('What does الارْتِجَالُ mean?', ['improvisation', 'memorisation', 'repetition'], 'Prepared at home (P2-L10).'),
      q('Choose the accurate sentence.', ['قَالَ إِنَّ التَّعْلِيمَ حَقٌّ.', 'قَالَ أَنَّ التَّعْلِيمَ حَقٌّ.', 'قَالَ بِأَنَّ التَّعْلِيمَ حَقٌّ.'], 'P2-L02: only qāla takes inna.'),
      q('Complete the Type 2: لَوْ عَمِلَ بِجِدٍّ، ___ .', ['لَنَجَحَ', 'نَجَحَ', 'سَيَنْجَحُ'], 'P2-L06: the la- of the result.'),
    ],
    keyIdea: { text: 'Each P2 structure has ONE small marker — get the marker right and the structure is right.', ar: '{m|قَالَ إِنَّ} · {e|كَانَتْ قَدْ ذَهَبَتْ} · {k|إِذَا … سَـ} · {p|لَوْ … لَـ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P2-L10. Questions 4–5 retrieve two of the three highest-frequency P2 slips named by the website: qāla anna and a Type 2 result without la-.',
  },
  routes: {
    core: ['I can fix six P2 errors and name the zone.', 'I can write three spine sentences from memory.'],
    develop: ['I can write a past perfect, a reported clause and a Type 2 accurately.', 'I can answer with a reason.'],
    stretch: ['I can give the required structure without being asked.', 'I can name my own priority error.'],
  },
  bridge: [
    { ar: 'الطَّلَاقَةُ', urdu: 'روانی', tr: 'rawānī', en: 'fluency (Urdu uses a Persian word)' },
    { ar: 'ثِقَةٌ', urdu: 'ثقہ / اعتماد', tr: 'iʿtimād', en: 'confidence (Urdu ثقہ = trustworthy)' },
    { ar: 'مُطَابَقَةٌ', urdu: 'مطابقت', tr: 'mutābiqat', en: 'agreement' },
    { ar: 'ضَمِيرٌ', urdu: 'ضمیر', tr: 'zamīr', en: 'a pronoun' },
    { ar: 'طُمُوحٌ', urdu: 'عزائم', tr: 'azāim', en: 'ambition (Urdu uses another Arabic word)' },
  ],
  bridgeNotes: 'URDU BRIDGE: مطابقت and ضمیر are shared. CAREFUL: Urdu ثقہ means “trustworthy” (of a narrator); Arabic الثِّقَةُ here is self-confidence. Urdu says اعتماد for confidence — also an Arabic word (اعْتِمَادٌ = reliance).',
  core: ['قَالَ إِنَّ', 'إِنَّ أَمْ أَنَّ', 'الضَّمِيرُ المَنْقُولُ', 'مُطَابَقَةُ كَانَ', 'الفِعْلُ بَعْدَ قَدْ', 'لَامُ الجَوَابِ', 'الكَلَامُ المَنْقُولُ', 'المَاضِي التَّامُّ', 'الشَّرْطُ النَّوْعُ الأَوَّلُ', 'الشَّرْطُ النَّوْعُ الثَّانِي', 'يَتَفَوَّقُ فِي', 'يُؤَهِّلُ لِـ'],
  forms: {
    'مُطَابَقَةُ كَانَ': { tag: 'I · he · she · they', forms: [{ l: 'she · they', ar: 'كَانَتْ · كَانُوا' }, { l: 'I · he', ar: 'كُنْتُ · كَانَ' }] },
    'الضَّمِيرُ المَنْقُولُ': { tag: 'him · her · them', forms: [{ l: 'her · them', ar: 'إِنَّهَا · إِنَّهُمْ' }, { l: 'me · him', ar: 'إِنَّنِي · إِنَّهُ' }] },
    'يَجْتَازُ': ihs('أَجْتَازُ', 'تَجْتَازُ'), 'يَتَفَوَّقُ فِي': ihs('أَتَفَوَّقُ', 'تَتَفَوَّقُ'), 'يُؤَهِّلُ لِـ': ihs('أُؤَهِّلُ', 'تُؤَهِّلُ'), 'يُعِدُّ لِـ': ihs('أُعِدُّ', 'تُعِدُّ'),
  },
  vocabNotes: {
    0: 'The P2 error zones — the labels for today’s repair work. Each card’s note gives the rule in one line: qāla → inna · kāna agrees · the verb after qad is past · la- in the Type 2 result.',
    1: 'The P2 grammar spine: the four structures the assessment tests, plus four academic verbs with their partners (yajtāz + object · yatafawwaq fī · yuʾahhil li- · yuʿidd li-).',
    2: 'Speaking fluency (FLEX): words to talk ABOUT speaking — useful for the self-review after the mock conversation.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the P2 error zones (website table + reading: the repair list) · Core', title: 'Wrong → right, zone by zone', ar: 'مَنَاطِقُ الأَخْطَاءِ',
      cols: [{ label: 'Zone', w: 2.3 }, { label: 'Wrong', w: 3.4, size: 20 }, { label: 'Right', w: 3.6, size: 20 }, { label: 'Lesson', w: 1.3 }, { label: 'Rule', w: 1.73 }],
      rows: [
        { cells: ['inna / anna', 'قَالَ أَنَّ التَّعْلِيمَ مُهِمٌّ', 'قَالَ {m|إِنَّ} التَّعْلِيمَ مُهِمٌّ', 'P2-L02', 'qāla → inna'] },
        { cells: ['reported pronoun', 'قَالَ إِنَّ أَنَا مُجْتَهِدٌ', 'قَالَ {m|إِنَّهُ} مُجْتَهِدٌ', 'P2-L02', '“I” → he'] },
        { cells: ['kāna agreement', 'كَانَتْ قَدْ ذَهَبَ', 'كَانَتْ قَدْ {e|ذَهَبَتْ}', 'P2-L03', 'both agree'] },
        { cells: ['verb after qad', 'كَانَ قَدْ يَذْهَبُ', 'كَانَ قَدْ {e|ذَهَبَ}', 'P2-L03', 'past only'] },
        { cells: ['Type 1 result', 'إِذَا دَرَسْتَ، تَنْجَحُ', 'إِذَا دَرَسْتَ، {k|سَتَنْجَحُ}', 'P1-L03', 'sa-'] },
        { cells: ['Type 2 result', 'لَوْ عَمِلَ بِجِدٍّ، نَجَحَ', 'لَوْ عَمِلَ بِجِدٍّ، {p|لَنَجَحَ}', 'P2-L06', 'la-'] },
      ],
      ltr: true,
      foot: 'Website reading: “every structure has a precise marker that must be got right.”',
      notes: `GRAMMAR PART 1 — the website table, common error and reading “twelve sentences to repair” (six of them are here). Website teaching point “The three highest-frequency P2 slips”: qāla anna · kāna / qad errors · a Type 2 result without la-.
Website mistakes 1–3: قَالَ أَنَّ ✗ · كَانَتْ قَدْ ذَهَبَ ✗ · لَوْ عَمِلَ بِجِدٍّ، نَجَحَ ✗.
Core: rows 1, 2, 3 and 6 (the three highest-frequency slips). Drill: cover the Right column; students fix each one and NAME the zone. Then reverse — teacher says a zone, students give a correct example.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · the whole P2 grammar spine (vocabulary group 2 + patterns) · Core / Develop', title: 'Four structures, four verbs — one unit', ar: 'العَمُودُ الفِقْرِيُّ لِقَوَاعِدِ الوَحْدَةِ',
      cols: [{ label: 'Structure', w: 2.4 }, { label: 'Lesson', w: 1.4 }, { label: 'Example', w: 6.3, size: 19 }, { label: 'Check', w: 2.23 }],
      rows: [
        { core: true, cells: ['reported speech', 'P2-L02', '{m|قَالَ} أُسْتَاذِي {m|إِنَّنِي} مُؤَهَّلٌ، {m|وَأَكَّدَ أَنَّ} اجْتِهَادِي سَيُثْمِرُ.', 'inna / anna'] },
        { core: true, cells: ['past perfect', 'P2-L03', '{e|كُنْتُ قَدْ أَنْهَيْتُ} بَحْثِي قَبْلَ أَنْ أَلْتَحِقَ بِالجَامِعَةِ.', 'kuntu … -tu'] },
        { cells: ['Type 1', 'P1-L03', '{k|إِذَا قُبِلْتُ}، {k|سَأَتَخَصَّصُ} فِي الذَّكَاءِ الاصْطِنَاعِيِّ.', 'past → sa-'] },
        { core: true, cells: ['Type 2', 'P2-L06', '{p|لَوْ كَانَتْ} ظُرُوفِي مُخْتَلِفَةً، {p|لَتَغَيَّرَ} مَسَارِي.', 'past → la-'] },
        { cells: ['academic verbs', 'P2-L01', 'يَتَفَوَّقُ {w|فِي} العُلُومِ · يَجْتَازُ الامْتِحَانَ.', 'fī · object'] },
        { cells: ['career verbs', 'P2-L05', 'يُؤَهِّلُنِي التَّعْلِيمُ {w|لِسُوقِ} العَمَلِ وَيُعِدُّنِي {w|لِلْمُنَافَسَةِ}.', 'li- · li-'] },
      ],
      ltr: true,
      foot: 'Every row is one P2 lesson — the assessment tests them all.',
      notes: `GRAMMAR PART 2 — the website vocabulary group “The P2 grammar spine” and patterns (قَالَ أُسْتَاذِي إِنَّنِي مُؤَهَّلٌ، وَأَكَّدَ أَنَّ … · كُنْتُ قَدْ أَنْهَيْتُ بَحْثِي قَبْلَ أَنْ أَلْتَحِقَ … · لَوْ كَانَتْ ظُرُوفِي مُخْتَلِفَةً، لَتَغَيَّرَ مَسَارِي) and website rule 4 (academic verb complements).
Website challenge: “Write one accurate sentence for each of the five P2 structures” — cover the Example column and do exactly that.
Link the spine to the assessment parts: listening (who said it, idhā vs law) · reading (reporting verbs) · writing (Range) · speaking (required structures).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · the required structure, unprompted (website teaching point 2 + P2-L12 topic questions) · Develop / Stretch', title: 'Question → required structure', ar: 'البِنْيَةُ المَطْلُوبَةُ',
      cols: [{ label: 'The examiner asks …', w: 4.6, size: 18 }, { label: 'Start your answer with …', w: 5.3, size: 19 }, { label: 'Q', w: 0.9 }, { label: 'Required', w: 1.53 }],
      rows: [
        { core: true, cells: ['مَا الَّذِي كُنْتَ قَدْ قَرَّرْتَهُ بِشَأْنِ مُسْتَقْبَلِكَ؟', '{e|كُنْتُ قَدْ قَرَّرْتُ} دِرَاسَةَ … ، {e|وَكُنْتُ قَدْ حَصَلْتُ} عَلَى …', 'Q1', 'past perfect'] },
        { core: true, cells: ['مَاذَا قَالَ مُعَلِّمُوكَ عَنْ طُمُوحَاتِكَ؟', '{m|قَالُوا إِنَّنِي} مُؤَهَّلٌ، {m|وَأَكَّدُوا أَنَّ} اجْتِهَادِي سَيُثْمِرُ.', 'Q2', 'reported speech'] },
        { core: true, cells: ['لَوْ كَانَتْ لَدَيْكَ مَوَارِدُ لَا نِهَائِيَّةٌ، مَاذَا سَتَخْتَارُ؟', '{p|لَوْ كَانَتْ} لَدَيَّ مَوَارِدُ لَا نِهَائِيَّةٌ، {p|لَتَعَلَّمْتُ} …', 'Q3', 'Type 2'] },
        { cells: ['وَأَنْتِ؟ مَاذَا قَالَتْ مُعَلِّمَاتُكِ عَنْكِ؟', '{m|قُلْنَ إِنَّنِي} مُجْتَهِدَةٌ، {m|وَأَكَّدْنَ أَنَّ} …', 'Q2', 'girls’ form'] },
      ],
      ltr: true,
      foot: 'Website teaching point: “The mark comes from producing it spontaneously.” The mark scheme records whether the Type 2 is used or avoided.',
      notes: `GRAMMAR PART 3 — website teaching point “Produce the required structure without being asked” and the three P2-L12 topic-conversation questions (past perfect required · reported speech required · Type 2 required). The website teaching point numbers them Q2 / Q3 / Q5; the assessment numbers them 1–3 — this slide follows the assessment.
Turn the question round: the examiner says كُنْتَ قَدْ قَرَّرْتَ (you) → the student answers كُنْتُ قَدْ قَرَّرْتُ (I) · مُعَلِّمُوكَ → قَالُوا إِنَّنِي (the pronoun switch).
Row 4: for a girl taught by women — قُلْنَ / أَكَّدْنَ (they, f. pl.). Accept قَالُوا as well.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the answer routine for the topic conversation · Stretch', title: 'Structure · reason · extra', ar: 'بِنْيَةٌ · سَبَبٌ · إِضَافَةٌ',
      cards: [
        { chip: '1 · STRUCTURE · CORE', color: 'C0386B', head: 'لَوْ … لَـ', big: 'لَوْ كَانَتْ ظُرُوفِي مُخْتَلِفَةً، لَاخْتَرْتُ مَسَارًا آخَرَ.', en: 'If my circumstances had been different, I would have chosen another path.', clue: 'The required one.' },
        { chip: '2 · REASON · DEVELOP', color: 'C77700', head: 'لِأَنَّ', big: 'لِأَنَّ التَّعْلِيمَ يُؤَهِّلُنِي لِسُوقِ العَمَلِ.', en: 'Because education qualifies me for the labour market.', clue: 'Say WHY.' },
        { chip: '3 · EXTRA P2 · STRETCH', color: '6B4C9A', head: 'قَالَ إِنَّ', big: 'لٰكِنَّ مُعَلِّمِي قَالَ إِنَّنِي فِي المَكَانِ الصَّحِيحِ.', en: 'But my teacher said I am in the right place.', clue: 'A second structure.' },
      ],
      error: { text: 'Website mistake 2: the verb after qad agrees with the feminine subject.', pairs: [['كَانَتْ قَدْ ذَهَبَتْ إِلَى الجَامِعَةِ', 'كَانَتْ قَدْ ذَهَبَ إِلَى الجَامِعَةِ']] },
      notes: `GRAMMAR PART 4 — the website speaking model (لَوْ كَانَتْ ظُرُوفِي مُخْتَلِفَةً، لَاخْتَرْتُ مَسَارًا آخَرَ، لٰكِنَّ مُعَلِّمِي قَالَ إِنَّنِي فِي المَكَانِ الصَّحِيحِ) shows the routine: required structure → a second P2 structure; the mock conversation ends with the teacher’s praise «اسْتَعْمَلْتَ فِيهَا النَّوْعَ الثَّانِيَ مِنَ الشَّرْطِ تِلْقَائِيًّا».
Time-buying phrases if a student freezes: سُؤَالٌ مُهِمٌّ · دَعْنِي أُفَكِّرُ · بِصَرَاحَةٍ … Repair phrase: عَفْوًا، أَقْصِدُ …
Pairs practise with a timer: 30–40 seconds per answer, partner ticks S / R / E on their fingers.`,
    },
  ],
  quick: [0, 1, 2, 5],
  rest: [3, 4, 6, 7],
  ido: {
    title: 'Watch me answer the three questions',
    steps: [
      { head: 'Q1', ar: '{e|كُنْتُ قَدْ قَرَّرْتُ} …', think: 'kuntu … -tu.' },
      { head: 'Q2', ar: '{m|قَالُوا إِنَّنِي} … {m|وَأَكَّدُوا أَنَّ} …', think: 'inna, then anna.' },
      { head: 'Q3', ar: '{p|لَوْ كَانَتْ} … {p|لَتَعَلَّمْتُ} …', think: 'la-!' },
      { head: 'Extra', ar: '{k|إِذَا قُبِلْتُ}، {k|سَأَتَخَصَّصُ} …', think: 'A real plan too.' },
    ],
    legend: ['e', 'm', 'p', 'k'], legendLabels: { e: 'PAST PERFECT', m: 'REPORTED', p: 'TYPE 2', k: 'TYPE 1' },
    model: '{e|كُنْتُ قَدْ قَرَّرْتُ} دِرَاسَةَ الحَاسُوبِ قَبْلَ هٰذَا العَامِ، {e|وَكُنْتُ قَدْ حَصَلْتُ} عَلَى خِبْرَةٍ فِي البَرْمَجَةِ. {m|قَالَ} مُعَلِّمِي {m|إِنَّنِي} مُؤَهَّلٌ، {m|وَأَكَّدَ أَنَّ} اجْتِهَادِي سَيُثْمِرُ. {k|إِذَا قُبِلْتُ} فِي الجَامِعَةِ، {k|سَأَتَخَصَّصُ} فِي الذَّكَاءِ الاصْطِنَاعِيِّ. {p|وَلَوْ كَانَتْ} ظُرُوفِي مُخْتَلِفَةً، {p|لَاخْتَرْتُ} مَسَارًا آخَرَ.',
    modelEn: 'I had decided to study computing before this year, and I had gained experience in programming. My teacher said that I am qualified, and stressed that my hard work will pay off. If I am accepted at university, I will specialise in AI. And if my circumstances had been different, I would have chosen another path.',
    notes: 'I DO (3 min) — from the website writing model, spoken aloud as an exam answer. Think aloud: “Q1 wants the past perfect — kuntu qad, both -tu. Q2 wants reported speech — qāla inna-nī (me!), then akkada anna. Q3 wants law — and the result MUST start with la-.” Do it twice — the second time faster, as fluent speech.',
  },
  patternEn: ['my teacher said that I am qualified, and stressed that my hard work will pay off', 'I had finished my research before I joined the university', 'if my circumstances had been different, my path would have changed'],
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · repair the slips (website reading: the repair list + mistakes)', title: 'Find it, fix it, name it', ar: 'صَحِّحْ وَسَمِّ الخَطَأَ',
      cols: [{ label: 'Slip', w: 4.3, size: 19 }, { label: 'Correct', w: 4.6, size: 19 }, { label: 'Zone', w: 3.43 }],
      rows: [
        { core: true, cells: ['قَالَ أَنَّ التَّعْلِيمَ مُهِمٌّ.', 'قَالَ إِنَّ التَّعْلِيمَ مُهِمٌّ.', 'inna / anna'] },
        { core: true, cells: ['كَانَتْ قَدْ ذَهَبَ إِلَى الجَامِعَةِ.', 'كَانَتْ قَدْ ذَهَبَتْ إِلَى الجَامِعَةِ.', 'kāna agreement'] },
        { core: true, cells: ['لَوْ عَمِلَ بِجِدٍّ، نَجَحَ.', 'لَوْ عَمِلَ بِجِدٍّ، لَنَجَحَ.', 'Type 2 result'] },
        { cells: ['أَشَارَ الخَبِيرُ أَنَّ الإِصْلَاحَ ضَرُورِيٌّ.', 'أَشَارَ الخَبِيرُ إِلَى أَنَّ الإِصْلَاحَ ضَرُورِيٌّ.', 'ashāra ilā (P2-L10)'] },
        { cells: ['يَتَحَوَّلُ الذَّكَاءُ لِشَرِيكٍ.', 'يَتَحَوَّلُ الذَّكَاءُ إِلَى شَرِيكٍ.', 'complement (P2-L05)'] },
        { cells: ['إِذَا قُبِلْتُ سَأَدْرُسُ؛ وَإِذَا تَوَافَرَ الدَّعْمُ سَأَتَفَوَّقُ.', 'إِذَا قُبِلْتُ سَأَدْرُسُ؛ وَلَوْ تَوَافَرَ الدَّعْمُ لَتَفَوَّقْتُ.', 'Range: one of each (P2-L09)'] },
      ],
      ltr: true,
      foot: 'Website reading: “the shared lesson is that every structure has a precise marker that must be controlled.”',
      notes: `WE DO (3 min) — rows 1–3 are the website mistakes; rows 4–6 recycle mistakes from P2-L10, P2-L05 and P2-L09. Cover columns 2–3; pairs fix each slip and NAME the zone.
Core: rows 1–3. Develop: all six. Stretch: write two new slips of their own for a partner to repair.
Then each student writes their ONE priority error zone on a sticky note / in the chat — collect for L12.`,
    },
    {
      type: 'formsTable', stage: 'wedo', min: 2, flex: true, eyebrow: 'We do · build an interview answer (website live builder)', title: 'Background + citation + plan', ar: 'ابْنِ جَوَابَكَ',
      cols: [{ label: '1 · Background (kuntu qad)', w: 4.0, size: 16 }, { label: '2 · Citation (reported)', w: 4.1, size: 16 }, { label: '3 · Plan (idhā · law)', w: 4.23, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Say it aloud as one fluent answer.',
      notes: `WE DO (flex) — the website live builder (${site.live_builder.target}). Website feedback: ${site.live_builder.feedback}
Use it as oral rehearsal: one student reads a combination as an interview answer; the partner names each structure.`,
    },
  ],
  sorterTitle: 'Reported speech, past perfect — or conditional?',
  sorterCats: ['reported speech', 'past perfect', 'conditional (Type 1 / 2)'],
  sorterNotes: 'Then say a full sentence for each card as fast as possible: قَالَ إِنَّنِي … · أَشَارَ إِلَى أَنَّ … · كَانَتْ قَدْ حَصَلَتْ … · إِذَا قُبِلْتُ سَـ … · لَوْ … لَـ … · إِذَا لَمْ أَجْتَهِدْ، لَنْ …',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('إِنَّ after قَالَ, أَنَّ after أَكَّدَ.', 'inna after qāla, anna after akkada.').replace('قَدْ', 'qad').replace('لَوْ + past → لَـ + past', 'law + past → la- + past') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; rule headings and formulas in English and transliteration (rule examples without their English glosses); sorter headings in English; the required-structure questions follow the P2-L12 assessment numbering (Q1–Q3); the repair table adds three earlier P2 mistakes; the website visual game repeats the P2-L01 / P2-L03 cards and is not used. All other website items are used as published.',
  hints: ['qāla + anna?', 'kānat qad dhahaba?', 'law … najaḥa?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: kuntu qad · qālū inna-nī · law … la-.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write down the student’s Type 2 sentence word for word.',
  gloss: [
    ['المُعَلِّمُ: مَا الَّذِي كُنْتَ قَدْ قَرَّرْتَهُ بِشَأْنِ مُسْتَقْبَلِكَ قَبْلَ هٰذَا العَامِ؟', 'Teacher: What had you decided about your future before this year?'],
    ['الطَّالِبُ: كُنْتُ قَدْ قَرَّرْتُ دِرَاسَةَ الحَاسُوبِ، وَكُنْتُ قَدْ حَصَلْتُ عَلَى خِبْرَةٍ فِي البَرْمَجَةِ.', 'Student: I had decided to study computing, and I had gained experience in programming.'],
    ['المُعَلِّمُ: مَاذَا قَالَ مُعَلِّمُوكَ عَنْ طُمُوحَاتِكَ؟ الطَّالِبُ: قَالُوا إِنَّنِي مُؤَهَّلٌ، وَأَكَّدُوا أَنَّ اجْتِهَادِي سَيُثْمِرُ.', 'Teacher: What did your teachers say about your ambitions? Student: They said I am qualified, and stressed that my hard work will pay off.'],
    ['المُعَلِّمُ: لَوْ كَانَتْ لَدَيْكَ مَوَارِدُ لَا نِهَائِيَّةٌ لِتَعَلُّمِ أَيِّ شَيْءٍ، مَاذَا سَتَخْتَارُ؟ الطَّالِبُ: لَوْ كَانَتْ لَدَيَّ مَوَارِدُ لَا نِهَائِيَّةٌ، لَتَعَلَّمْتُ الذَّكَاءَ الاصْطِنَاعِيَّ وَعُلُومَ الفَضَاءِ مَعًا.', 'Teacher: If you had unlimited resources to learn anything, what would you choose? Student: If I had unlimited resources, I would learn AI and space science together.'],
    ['المُعَلِّمُ: إِجَابَةٌ مُتَوَازِنَةٌ اسْتَعْمَلْتَ فِيهَا النَّوْعَ الثَّانِيَ مِنَ الشَّرْطِ تِلْقَائِيًّا.', 'Teacher: A balanced answer in which you used the Type 2 conditional spontaneously.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا الَّذِي كُنْتَ قَدْ قَرَّرْتَهُ بِشَأْنِ مُسْتَقْبَلِكَ قَبْلَ هٰذَا العَامِ؟' },
      { route: 'develop', ar: 'مَاذَا قَالَ مُعَلِّمُوكَ عَنْ طُمُوحَاتِكَ؟' },
      { route: 'stretch', ar: 'لَوْ كَانَتْ ظُرُوفُكَ التَّعْلِيمِيَّةُ مُخْتَلِفَةً، كَيْفَ كَانَ سَيَتَغَيَّرُ مَسَارُكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'كُنْتُ قَدْ قَرَّرْتُ ______ ، وَكُنْتُ قَدْ ______ .' },
      { route: 'develop', ar: 'قَالَ مُعَلِّمِي إِنَّنِي ______ ، وَأَكَّدَ أَنَّ ______ .' },
      { route: 'stretch', ar: 'لَوْ كَانَتْ ظُرُوفِي مُخْتَلِفَةً، ______ ، لٰكِنَّ ______ .' },
    ],
    modelEn: ['What had you decided before this year?', 'I had decided on my field and I had gained practical experience.', 'And if your circumstances had been different?', 'If my circumstances had been different, I would have chosen another path — but my teacher said I am in the right place.'],
    notes: 'Website prompts and model — the three required-structure questions. Pairs: examiner / candidate, 30–40 seconds per answer, then swap. The examiner ticks Structure · Reason · Extra. Stretch result must start with la- (لَاخْتَرْتُ · لَتَغَيَّرَ). To a girl: كُنْتِ قَدْ قَرَّرْتِهِ · مُسْتَقْبَلِكِ · مُعَلِّمُوكِ · طُمُوحَاتِكِ · ظُرُوفُكِ · مَسَارُكِ.',
  },
  write: {
    core: { amount: '6 + 3', how: 'Website Core: correct six P2 errors and write three sentences from memory.' },
    develop: { amount: '3 structures', how: 'Website Develop: add a past perfect, a reported-speech clause and a Type 2 conditional.' },
    stretch: { amount: '80–90 words', how: 'Website task: answer two assessment questions with the past perfect, reported speech and a Type 2 — every marker accurate.' },
  },
  frames: {
    core: [
      { en: 'I had decided … before this year.', ar: 'كُنْتُ قَدْ قَرَّرْتُ ______ قَبْلَ هٰذَا العَامِ.' },
      { en: 'And I had gained experience in …', ar: 'وَكُنْتُ قَدْ حَصَلْتُ عَلَى خِبْرَةٍ فِي ______ .' },
      { en: 'My teacher said that I am …', ar: 'قَالَ مُعَلِّمِي إِنَّنِي ______ .' },
      { en: 'And he stressed that …', ar: 'وَأَكَّدَ أَنَّ ______ .' },
    ],
    develop: [
      { en: 'If I am accepted at …, I will …', ar: 'إِذَا قُبِلْتُ فِي ______ ، ______ .' },
      { en: 'If my circumstances had been different, I would have …', ar: 'لَوْ كَانَتْ ظُرُوفِي مُخْتَلِفَةً، ______ .' },
      { en: 'Education qualifies me for …', ar: 'التَّعْلِيمُ يُؤَهِّلُنِي لِمِهْنَةِ ______ .' },
      { en: 'And I will strive to …', ar: 'وَسَوْفَ أَسْعَى إِلَى ______ .' },
    ],
    bank: ['دِرَاسَةَ الحَاسُوبِ', 'البَرْمَجَةِ', 'مُؤَهَّلٌ', 'اجْتِهَادِي سَيُثْمِرُ', 'سَأَتَخَصَّصُ', 'لَاخْتَرْتُ مَسَارًا آخَرَ', 'لَتَغَيَّرَ مَسَارِي', 'لَتَعَلَّمْتُ', 'سُوقِ العَمَلِ', 'مُوَاكَبَةِ التَّغْيِيرِ', 'تَطْوِيرِ مَهَارَاتِي', 'رَاضٍ عَنْ طَرِيقِي'],
  },
  stretch: [
    ['قَبْلَ هٰذَا العَامِ', 'before this year'],
    ['وَأَكَّدَ أَنَّ اجْتِهَادِي سَيُثْمِرُ', 'and he stressed that my hard work will pay off'],
    ['لَاخْتَرْتُ مَسَارًا آخَرَ، لٰكِنِّي رَاضٍ عَنْ طَرِيقِي', 'I would have chosen another path, but I am happy with my route'],
    ['يُؤَهِّلُنِي لِسُوقِ العَمَلِ وَيُعِدُّنِي لِمُوَاكَبَةِ التَّغْيِيرِ', 'qualifies me for the labour market and prepares me to keep pace with change'],
    ['سَأَسْعَى إِلَى تَطْوِيرِ مَهَارَاتِي بِاسْتِمْرَارٍ', 'I will strive to develop my skills continually'],
  ],
  modelEn: 'I had decided to study computing before this year, and I had gained experience in programming. My teacher said that I am qualified, and stressed that my hard work will pay off. If I am accepted at the university I want, I will specialise in artificial intelligence. And if my educational circumstances had been different, I would have chosen another path, but I am happy with my route. I believe education qualifies me for the labour market and prepares me to keep pace with change, and I will strive to develop my skills continually.',
  find: ['two past perfects (kuntu qad)', 'qāla inna-nī and akkada anna', 'a Type 1 and a Type 2 (law … la-)', 'two career verbs (yuʾahhil li- · yuʿidd li-)'],
  modelNotes: 'Website writing model. Evidence: كُنْتُ قَدْ قَرَّرْتُ · كُنْتُ قَدْ حَصَلْتُ · قَالَ مُعَلِّمِي إِنَّنِي · وَأَكَّدَ أَنَّ … سَيُثْمِرُ · إِذَا قُبِلْتُ … سَأَتَخَصَّصُ · وَلَوْ كَانَتْ … لَاخْتَرْتُ · يُؤَهِّلُنِي لِسُوقِ العَمَلِ وَيُعِدُّنِي لِمُوَاكَبَةِ · سَوْفَ أَسْعَى إِلَى.',
  selfCheck: [
    { route: 'core', text: 'qāla → inna (+ the right pronoun); all other verbs → anna.' },
    { route: 'core', text: 'kāna agrees with the subject; the verb after qad is past.' },
    { route: 'develop', text: 'My Type 1 result has sa-; my Type 2 result has la-.' },
    { route: 'develop', text: 'Each academic verb has its partner (fī · li- · ilā).' },
    { route: 'stretch', text: 'I gave the required structure without being asked, and named my priority error.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['القَائِمَةُ', 'the list'], ['أَخْطَاءٍ شَائِعَةٍ', 'common errors'], ['وَالصَّوَابُ', 'and the correct form is'], ['خَطَأٌ فِي الضَّمِيرِ', 'a pronoun error'], ['المُطَابَقَةِ', 'agreement'],
    ['زَمَنِ الشَّرْطِ', 'the conditional tense'], ['جَوَابِ لَوْ', 'the result of law'], ['الدَّرْسُ المُشْتَرَكُ', 'the shared lesson'], ['عَلَامَةً دَقِيقَةً', 'a precise marker'], ['ضَبْطُهَا', 'controlling it'],
  ],
  prep: {
    words: [['تَقْيِيمٌ', 'an assessment', 'pl. تَقْيِيمَاتٌ'], ['فَهْمُ المَسْمُوعِ', 'listening comprehension', '—'], ['فَهْمُ المَقْرُوءِ', 'reading comprehension', '—'], ['لَعِبُ الأَدْوَارِ', 'a role play', '—'], ['المُرَاجَعَةُ', 'checking, revision', '—']],
    questionEn: 'Prepare answers to the three topic-conversation questions — each with its required structure and a reason.',
    questionAr: 'كُنْتُ قَدْ … · قَالَ مُعَلِّمِي إِنَّنِي … · لَوْ كَانَتْ لَدَيَّ … لَـ …',
    homework: {
      core: 'Correct six P2 errors and write three spine sentences from memory.',
      develop: 'Write a past perfect, a reported clause and a Type 2 conditional; check each against the spine table.',
      stretch: 'Website writing task: an 80–90-word answer to two assessment questions; record it aloud.',
    },
    wordsSource: 'The five words prepare students for the P2-L12 assessment (its four parts and checking).',
  },
  remember: 'Remember: qāla INNA (+ inna-nī / inna-hu) · kāna agrees and the verb after qad is PAST · idhā … SA- but law … LA- — and in the conversation give the required structure before you are asked.',
});

module.exports = { meta, slides };
