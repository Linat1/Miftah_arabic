'use strict';
/* P1-L11 · Consolidation — Speaking Preparation and Grammar Mastery — website: Pathways › Progression › P1 › P1-L11 (repairing the P1 error zones: each verb
 * stored with its preposition غَنِيٌّ بِـ · يَفْتَقِرُ إِلَى · يُعَانِي مِنْ · يُوصَى بِـ + verbal noun; the whole P1 grammar spine; producing إِذَا … سَـ spontaneously
 * in the five-question topic conversation). Website vocabulary, rules, quiz, sorter, mistakes, listening (mock conversation), reading (repair list), speaking and
 * writing used as published; rule examples shown without their English glosses; English added to the patterns. The website visual game is a Foundation symptoms
 * match, so it is not used. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P1')({
  n: 11, fileTitle: 'P1_Consolidation_Speaking_Preparation_Grammar', chip: 'Consolidation',
  title: 'Consolidation — Speaking Preparation and Grammar Mastery', arabic: 'تَرْسِيخُ الوَحْدَةِ — إِعْدَادُ التَّحَدُّثِ وَإِتْقَانُ القَوَاعِدِ',
  focus: 'Repair the P1 error zones (غَنِيٌّ بِـ · يَفْتَقِرُ إِلَى · يُعَانِي مِنْ · يُوصَى بِتَنَاوُلِ …), revise the whole P1 grammar spine, and rehearse the five-question topic conversation until إِذَا … سَـ comes out without being asked.',
  icon: 'FaComments', iconSet: 'fa6',
});

const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const site = D.site('P1-L11');
const RH = [['Nutrition prepositions', 'ghaniyy bi- · yaftaqir ilā · yuʿānī min'], ['Conditional tense', 'idhā + past → sa- + present'], ['Recommended-with passive', 'yūṣā bi- + verbal noun'], ['Passive vowelling', 'yufaʿʿalu']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));

const slides = D.devLesson('P1-L11', {
  support: `• CONSOLIDATION + SPEAKING REHEARSAL for the P1-L12 assessment (topic conversation on healthy lifestyles). The website names the error zones: PREPOSITIONS first, then the conditional, يُوصَى بِـ and passive vowelling.
• Core: correct six preposition errors and write three from memory. Develop: three conditionals and three passives, checked. Stretch: a fluent answer to Q3 and Q5 with spontaneous conditionals (website differentiation).
• Speaking routine for every answer: ANSWER (with the right preposition) → REASON (لِأَنَّ …) → CONDITIONAL (إِذَا … سَـ …). Collect each student’s one “priority error” for L12.
• Sensitivity: in the conversation students may describe stress or diet. Let them talk about “a student” if they prefer.`,
  teach: 'Fix the error zones, revise the spine, speak with idhā … sa- unprompted.',
  wedo: 'Repair twelve slips, sort the prepositions, hear a mock conversation.',
  next: { nextCode: 'P1-L12', nextTitle: 'P1 Review and Unit Assessment', nextAr: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ' },
  objectives: ['Correct the twelve most common P1 errors, especially prepositions and conditionals.', 'Retrieve the full P1 grammar spine accurately.', 'Use a Type 1 conditional and a medical passive in spontaneous speech.', 'Prepare five topic-conversation answers to assessment standard.'],
  rulesAr: 'إِصْلَاحُ الأَخْطَاءِ الشَّائِعَةِ',
  ruleEx: [['الطَّعَامُ غَنِيٌّ بِالبُرُوتِينِ', 'الوَجْبَةُ تَفْتَقِرُ إِلَى الأَلْيَافِ', 'أُعَانِي مِنَ التَّوَتُّرِ'], ['إِذَا تَمَرَّنْتَ، سَتَشْعُرُ بِتَحَسُّنٍ'], ['يُوصَى بِتَنَاوُلِ الخُضَارِ'], ['يُشَخَّصُ المَرِيضُ', 'يُعَالَجُ المَرِيضُ']],
  flexGroups: [2],
  doNow: {
    questions: [
      q('What does الطَّلَاقَةُ mean?', ['fluency', 'balance', 'spontaneity'], 'Prepared at home (P1-L10).'),
      q('What does لَعِبُ الأَدْوَارِ mean?', ['a role play', 'a game', 'a conversation'], 'Prepared at home (P1-L10).'),
      q('What does المُطَابَقَةُ mean?', ['agreement', 'vowelling', 'tense'], 'Prepared at home (P1-L10).'),
      q('Complete: الطَّعَامُ غَنِيٌّ ___ البُرُوتِينِ.', ['بِـ', 'مِنْ', 'عَلَى'], 'P1-L01: the top P1 error zone.'),
      q('Which verb is passive?', ['يُعَالَجُ', 'يُعَالِجُ', 'عَالَجَ'], 'P1-L06 / P1-L10: passive by its vowel.'),
    ],
    keyIdea: { text: 'Store every verb WITH its preposition — one unit, never two words.', ar: '{k|غَنِيٌّ بِـ} · {m|يَفْتَقِرُ إِلَى} · {e|يُعَانِي مِنْ} · {w|يُوصَى بِـ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P1-L10. Questions 4–5 retrieve the two biggest P1 error zones named by the website: prepositions (غَنِيٌّ بِـ) and passive vowelling.',
  },
  routes: {
    core: ['I can fix six preposition errors.', 'I can write three collocations from memory.'],
    develop: ['I can write three conditionals and three passives accurately.', 'I can answer a question with a reason.'],
    stretch: ['I can answer Q3 and Q5 with idhā … sa- unprompted.', 'I can name my own priority error.'],
  },
  bridge: [
    { ar: 'الطَّلَاقَةُ', urdu: 'روانی', tr: 'rawānī', en: 'fluency (Urdu uses a Persian word)' },
    { ar: 'مُطَابَقَةٌ', urdu: 'مطابقت', tr: 'mutābiqat', en: 'agreement, correspondence' },
    { ar: 'مُحَادَثَةٌ', urdu: 'گفتگو', tr: 'guftagū', en: 'conversation' },
    { ar: 'التَّشْكِيلُ', urdu: 'اعراب', tr: 'iʿrāb', en: 'vowel marks (Urdu calls them iʿrāb)' },
    { ar: 'تَوَازُنٌ', urdu: 'توازن', tr: 'tawāzun', en: 'balance' },
  ],
  bridgeNotes: 'URDU BRIDGE: مطابقت and توازن are shared. CAREFUL: Urdu اعراب means the vowel marks; in Arabic grammar الإِعْرَابُ is the system of case endings, and the vowel marks are التَّشْكِيلُ.',
  core: ['غَنِيٌّ بِـ', 'يَفْتَقِرُ إِلَى', 'يَحْتَوِي عَلَى', 'يُعَانِي مِنْ', 'يُوصَى بِـ', 'ضَارٌّ بِـ', 'يُؤَثِّرُ عَلَى', 'جُمْلَةٌ شَرْطِيَّةٌ', 'مَبْنِيٌّ لِلْمَجْهُولِ', 'المُطَابَقَةُ', 'يَتَغَلَّبُ عَلَى', 'الضَّغْطُ الدِّرَاسِيُّ'],
  forms: {
    'غَنِيٌّ بِـ': { tag: 'm · f', forms: [{ l: 'f.', ar: 'غَنِيَّةٌ بِـ' }] }, 'مُفِيدٌ لِـ': { tag: 'm · f', forms: [{ l: 'f.', ar: 'مُفِيدَةٌ لِـ' }] }, 'ضَارٌّ بِـ': { tag: 'm · f', forms: [{ l: 'f.', ar: 'ضَارَّةٌ بِـ' }] },
    'يَفْتَقِرُ إِلَى': ihs('أَفْتَقِرُ', 'تَفْتَقِرُ'), 'يَحْتَوِي عَلَى': ihs('أَحْتَوِي', 'تَحْتَوِي'), 'يُعَانِي مِنْ': ihs('أُعَانِي', 'تُعَانِي'), 'يُؤَثِّرُ عَلَى': ihs('أُؤَثِّرُ', 'تُؤَثِّرُ'),
    'يُوصَى بِـ': { tag: 'active', forms: [{ l: 'active', ar: 'يُوصِي بِـ' }] }, 'يَتَغَلَّبُ عَلَى': ihs('أَتَغَلَّبُ', 'تَتَغَلَّبُ'),
    'عَادَةٌ صِحِّيَّةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'عَادَاتٌ صِحِّيَّةٌ' }] }, 'جُمْلَةٌ شَرْطِيَّةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'جُمَلٌ شَرْطِيَّةٌ' }] },
  },
  vocabNotes: {
    0: 'The P1 error zone — say each one aloud as ONE unit, three times: ghaniyyun-bi · yaftaqiru-ilā · yuʿānī-min. The feminine forms (غَنِيَّةٌ بِـ · تَفْتَقِرُ إِلَى) are on the cards.',
    1: 'The P1 grammar spine: the eight labels an examiner uses. Students point to each one in the mock conversation transcript.',
    2: 'Speaking fluency (FLEX): words to talk ABOUT speaking — useful for the self-review.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the preposition error zone (website rules 1, 3) · Core', title: 'One verb, one preposition', ar: 'الفِعْلُ وَحَرْفُ الجَرِّ',
      cols: [{ label: 'Meaning', w: 2.2 }, { label: 'Correct', w: 3.4, size: 22 }, { label: 'Not', w: 2.8, size: 20 }, { label: 'Lesson', w: 1.4 }, { label: 'Say it', w: 2.53 }],
      rows: [
        { core: true, cells: ['rich in', 'غَنِيٌّ {k|بِالبُرُوتِينِ}', 'غَنِيٌّ مِنَ', 'P1-L01', 'ghaniyyun bil-…'] },
        { core: true, cells: ['lacks', 'يَفْتَقِرُ {m|إِلَى} الأَلْيَافِ', 'يَفْتَقِرُ بِـ', 'P1-L01', 'yaftaqiru ilā …'] },
        { core: true, cells: ['suffers from', 'أُعَانِي {e|مِنَ} التَّوَتُّرِ', 'أُعَانِي التَّوَتُّرَ', 'P1-L03', 'uʿānī mina …'] },
        { core: true, cells: ['is recommended', 'يُوصَى {w|بِتَنَاوُلِ} الخُضَارِ', 'يُوصَى أَنْ نَتَنَاوَلَ', 'P1-L01', 'bi- + verbal noun'] },
        { cells: ['harmful to', 'ضَارٌّ {k|بِالصِّحَّةِ}', 'ضَارٌّ لِـ', 'P1-L04', 'ḍārrun bi-…'] },
        { cells: ['affects', 'يُؤَثِّرُ {p|عَلَى} النَّوْمِ', 'يُؤَثِّرُ النَّوْمَ', 'P1-L05', 'yuʾaththiru ʿalā …'] },
      ],
      ltr: true,
      foot: 'Website teaching point: store the preposition with the verb as a single unit, so the right one comes automatically in speech.',
      notes: `GRAMMAR PART 1 — website rules “Nutrition prepositions” and “Recommended-with passive”, teaching point “Learn each verb with its preposition” and common error (مِنْ after غَنِيٌّ, بِـ after يَفْتَقِرُ, بِـ after يُعَانِي).
Website mistakes 1–3: غَنِيٌّ مِنَ ✗ · أُعَانِي التَّوَتُّرَ ✗ · يُوصَى أَنْ نَتَنَاوَلَ ✗.
Drill: teacher says the verb, class answers with the preposition — fast, three rounds. Then reverse: teacher says the preposition, students name a verb that takes it.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · the whole P1 grammar spine (vocabulary group 2) · Core / Develop', title: 'Six structures — one unit', ar: 'العَمُودُ الفِقْرِيُّ لِقَوَاعِدِ الوَحْدَةِ',
      cols: [{ label: 'Structure', w: 2.6 }, { label: 'Lesson', w: 1.4 }, { label: 'Example', w: 5.8, size: 20 }, { label: 'Check', w: 2.53 }],
      rows: [
        { core: true, cells: ['conditional', 'P1-L03', '{e|إِذَا نَظَّمْتُ} وَقْتِي، {e|سَأَتَغَلَّبُ} عَلَى الضَّغْطِ.', 'past → sa-'] },
        { core: true, cells: ['medical passive', 'P1-L06', '{k|يُشَخَّصُ} المَرِيضُ ثُمَّ {k|يُعَالَجُ}.', 'u … a, -u subject'] },
        { cells: ['Form II benefit verb', 'P1-L02', 'النَّوْمُ {w|يُقَوِّي} التَّرْكِيزَ {w|وَيُحَسِّنُ} المِزَاجَ.', 'direct object'] },
        { cells: ['rhetorical question', 'P1-L07', '{m|هَلْ تَعْلَمُ أَنَّ} النَّوْمَ يُقَوِّي المَنَاعَةَ؟', 'anna + -a'] },
        { cells: ['comparative', 'P1-L09', 'النَّوْمُ {p|أَهَمُّ مِنَ} الطَّعَامِ أَحْيَانًا.', 'afʿalu min'] },
        { core: true, cells: ['agreement', 'P1-L01', 'عَادَاتٌ {k|صِحِّيَّةٌ} · تَمَارِينُ {k|مُنْتَظِمَةٌ}', 'things → -a'] },
      ],
      ltr: true,
      foot: 'Every row is one P1 lesson — the assessment will test them all.',
      notes: `GRAMMAR PART 2 — the website vocabulary group “The P1 grammar spine” (conditional · passive · Form II · rhetorical question · comparative · vowelling · agreement · tense). Website quiz items 6 and 7 test passive vowelling and agreement.
Quick retrieval: cover the Example column; students give one example of each from memory, then compare.
Link the spine to the assessment parts: listening (passive by ear, numbers) · reading (fact / opinion) · writing (Range) · speaking (conditional).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · the conditional in spontaneous speech (website rule 2 + teaching point 2) · Develop / Stretch', title: 'Question → conditional answer', ar: 'الشَّرْطُ فِي الكَلَامِ التِّلْقَائِيِّ',
      cols: [{ label: 'The examiner asks …', w: 4.7, size: 19 }, { label: 'Start your answer with …', w: 5.2, size: 20 }, { label: 'Q', w: 0.9 }, { label: 'Target', w: 1.53 }],
      rows: [
        { core: true, cells: ['كَيْفَ تَتَعَامَلُ مَعَ الضَّغْطِ الدِّرَاسِيِّ؟', 'أُعَانِي مِنَ التَّوَتُّرِ، {e|وَإِذَا نَظَّمْتُ} وَقْتِي، {e|سَأَتَغَلَّبُ} عَلَيْهِ.', 'Q3', 'idhā … sa-'] },
        { core: true, cells: ['إِذَا غَيَّرْتَ عَادَةً وَاحِدَةً، مَاذَا سَتَخْتَارُ؟', '{e|إِذَا غَيَّرْتُ} عَادَةً وَاحِدَةً، {e|سَأَنَامُ} مُبَكِّرًا.', 'Q5', 'idhā … sa-'] },
        { cells: ['مَا رَأْيُكَ فِي النِّظَامِ الغِذَائِيِّ الصِّحِّيِّ؟', 'يَجِبُ أَنْ يَكُونَ غَنِيًّا بِالخُضَارِ، {w|وَيُوصَى بِتَنَاوُلِ} الفَوَاكِهِ.', 'Q1', 'yūṣā bi-'] },
        { cells: ['كَيْفَ تُحَافِظُ عَلَى لِيَاقَتِكَ؟', 'أَتَمَرَّنُ بِانْتِظَامٍ، لِأَنَّ الرِّيَاضَةَ {w|تُقَوِّي} …', 'Q2', 'Form II'] },
        { cells: ['وَأَنْتِ؟ إِذَا غَيَّرْتِ عَادَةً، مَاذَا سَتَخْتَارِينَ؟', '{e|إِذَا غَيَّرْتُ} عَادَةً، {e|سَأَنَامُ} مُبَكِّرًا.', 'Q5', 'I-form'] },
      ],
      ltr: true,
      foot: 'Website teaching point: Q3 and Q5 reward a Type 1 conditional — the mark comes from producing it WITHOUT being asked.',
      notes: `GRAMMAR PART 3 — website rule “Conditional tense” and teaching point “Use the conditional without being asked” (إِذَا نَظَّمْتُ وَقْتِي، سَأُقَلِّلُ الضَّغْطَ الدِّرَاسِيَّ). The examiner’s questions come from the website speaking prompts and the mock conversation.
Turn the question round: the examiner says إِذَا غَيَّرْتَ (you, m.) or غَيَّرْتِ (you, f.) — the student answers with I: إِذَا غَيَّرْتُ … سَأَ… (row 5).
Website mistake list (reading): إِذَا تَتَمَرَّنُ، تَشْعُرُ ✗ → إِذَا تَمَرَّنْتَ، سَتَشْعُرُ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the answer routine for the topic conversation · Stretch', title: 'Answer · reason · condition', ar: 'جَوَابٌ · سَبَبٌ · شَرْطٌ',
      cards: [
        { chip: '1 · ANSWER · CORE', color: '1D5FBF', head: 'غَنِيٌّ بِـ · أُعَانِي مِنْ', big: 'طَعَامِي غَنِيٌّ بِالخُضَارِ، لٰكِنَّهُ يَفْتَقِرُ إِلَى الأَلْيَافِ.', en: 'My food is rich in vegetables, but it lacks fibre.', clue: 'Right preposition.' },
        { chip: '2 · REASON · DEVELOP', color: 'C77700', head: 'لِأَنَّ', big: 'لِأَنَّ النَّوْمَ الجَيِّدَ يُقَوِّي التَّرْكِيزَ.', en: 'Because good sleep strengthens focus.', clue: 'Say WHY.' },
        { chip: '3 · CONDITION · STRETCH', color: '1E6B52', head: 'إِذَا … سَـ', big: 'إِذَا نَظَّمْتُ وَقْتِي، سَأَشْعُرُ بِرَاحَةٍ أَكْبَرَ.', en: 'If I organise my time, I will feel more at ease.', clue: 'Unprompted.' },
      ],
      error: { text: 'Website mistake 3: yūṣā takes bi- + a verbal noun, not an + a verb.', pairs: [['يُوصَى بِتَنَاوُلِ الخُضَارِ', 'يُوصَى أَنْ نَتَنَاوَلَ الخُضَارَ']] },
      notes: `GRAMMAR PART 4 — the website mock conversation (listening) shows the routine: answer with the right preposition → reason → spontaneous conditional; the teacher praises «إِجَابَةٌ مُتَوَازِنَةٌ اسْتَعْمَلْتَ فِيهَا الشَّرْطَ تِلْقَائِيًّا».
Time-buying phrases if a student freezes: دَعْنِي أُفَكِّرُ · سُؤَالٌ جَيِّدٌ · بِصَرَاحَةٍ … Repair phrase: عَفْوًا، أَقْصِدُ …
Pairs practise with a timer: 30 seconds per answer, partner ticks A / R / C on their fingers.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me answer Q3 and Q5',
    steps: [
      { head: 'Answer', ar: 'أُعَانِي {e|مِنَ} التَّوَتُّرِ', think: 'min!' },
      { head: 'Overcome', ar: 'وَأَتَغَلَّبُ {e|عَلَيْهِ} بِالرِّيَاضَةِ', think: 'ʿalā.' },
      { head: 'Condition', ar: '{k|إِذَا نَظَّمْتُ} وَقْتِي، {k|سَأُقَلِّلُ} الضَّغْطَ', think: 'Unprompted.' },
      { head: 'Reason', ar: 'لِأَنَّ النَّوْمَ {w|يُقَوِّي} التَّرْكِيزَ', think: 'Form II.' },
    ],
    legend: ['e', 'k', 'w'], legendLabels: { e: 'PREPOSITION', k: 'CONDITIONAL', w: 'FORM II' },
    model: 'أُعَانِي {e|مِنَ} التَّوَتُّرِ قَبْلَ الامْتِحَانَاتِ، وَأَتَغَلَّبُ {e|عَلَيْهِ} بِالرِّيَاضَةِ وَالنَّوْمِ المُنَظَّمِ. {k|إِذَا نَظَّمْتُ} وَقْتِي جَيِّدًا، {k|سَأُقَلِّلُ} الضَّغْطَ الدِّرَاسِيَّ. {k|وَإِذَا غَيَّرْتُ} عَادَةً صِحِّيَّةً وَاحِدَةً، {k|سَأَنَامُ} مُبَكِّرًا، لِأَنَّ النَّوْمَ الجَيِّدَ {w|يُقَوِّي} التَّرْكِيزَ.',
    modelEn: 'I suffer from stress before exams, and I overcome it with sport and regular sleep. If I organise my time well, I will reduce academic pressure. And if I change one healthy habit, I will sleep early, because good sleep strengthens focus.',
    notes: 'I DO (3 min) — from the website writing model, spoken aloud as an exam answer. Think aloud: “Suffer — MIN. Overcome — ʿALĀ. Now the examiner hasn’t asked for a condition, but I give one: idhā + past, sa- + present. Then a reason with a Form II verb.” Do it twice — the second time faster, as fluent speech.',
  },
  patternEn: ['the food is rich in protein and lacks fibre', 'I suffer from stress and overcome it with sport', 'if I change one habit, I will sleep early'],
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · repair the slips (website reading: the repair list)', title: 'Find it, fix it, name it', ar: 'صَحِّحْ وَسَمِّ الخَطَأَ',
      cols: [{ label: 'Slip', w: 4.3, size: 20 }, { label: 'Correct', w: 4.6, size: 20 }, { label: 'Zone', w: 3.43 }],
      rows: [
        { core: true, cells: ['الطَّعَامُ غَنِيٌّ مِنَ البُرُوتِينِ.', 'الطَّعَامُ غَنِيٌّ بِالبُرُوتِينِ.', 'preposition'] },
        { core: true, cells: ['الوَجْبَةُ تَفْتَقِرُ بِالأَلْيَافِ.', 'الوَجْبَةُ تَفْتَقِرُ إِلَى الأَلْيَافِ.', 'preposition'] },
        { core: true, cells: ['إِذَا تَتَمَرَّنُ، تَشْعُرُ بِتَحَسُّنٍ.', 'إِذَا تَمَرَّنْتَ، سَتَشْعُرُ بِتَحَسُّنٍ.', 'conditional'] },
        { cells: ['يُعَالِجُ المَرِيضُ فِي المُسْتَشْفَى.', 'يُعَالَجُ المَرِيضُ فِي المُسْتَشْفَى.', 'passive vowel'] },
        { cells: ['عَادَاتٌ صِحِّيُّونَ', 'عَادَاتٌ صِحِّيَّةٌ', 'agreement'] },
        { cells: ['تُحَذِّرُ الحَمْلَةُ عَلَى التَّدْخِينِ.', 'تُحَذِّرُ الحَمْلَةُ مِنَ التَّدْخِينِ.', 'preposition (P1-L07)'] },
      ],
      ltr: true,
      foot: 'Website reading: “every verb is memorised with its preposition, and the conditional begins with a past verb and ends with sa-.”',
      notes: `WE DO (3 min) — built from the website reading “twelve sentences to repair” (rows 1–5) plus one from P1-L07. Cover columns 2–3; pairs fix each slip and NAME the zone.
Core: rows 1–3. Develop: all six. Stretch: write two new slips of their own for a partner to repair.
Then each student writes their ONE priority error zone on a sticky note / in the chat — collect for L12.`,
    },
  ],
  sorterTitle: 'bi-, ilā — or min / ʿalā?',
  sorterNotes: 'Then say a full phrase for each card as fast as possible: غَنِيٌّ بِالحَدِيدِ · يُوصَى بِالنَّوْمِ · ضَارٌّ بِالصِّحَّةِ · يَفْتَقِرُ إِلَى الأَلْيَافِ · يَحْتَاجُ إِلَى الرَّاحَةِ · يُشِيرُ إِلَى أَنَّ … · يُعَانِي مِنَ التَّوَتُّرِ · يَتَغَلَّبُ عَلَى القَلَقِ · يُؤَثِّرُ عَلَى النَّوْمِ.',
  patch: { grammar: { ...site.grammar, rules } },
  patchNote: 'website rule headings and formulas shown in English and transliteration (rule examples without their English glosses); the repair table is built from the website repair list; the website visual game (a Foundation symptoms match) is not used. All other website items are used as published.',
  hints: ['ghaniyy + which preposition?', 'yuʿānī + which preposition?', 'yūṣā + an or bi-?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: the prepositions in each answer.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write down the student’s conditional word for word.',
  gloss: [
    ['المُعَلِّمُ: مَا نِظَامُكَ الغِذَائِيُّ؟ الطَّالِبُ: طَعَامِي غَنِيٌّ بِالخُضَارِ وَالبُرُوتِينِ، لٰكِنَّهُ يَفْتَقِرُ أَحْيَانًا إِلَى الأَلْيَافِ.', 'Teacher: What is your diet like? Student: My food is rich in vegetables and protein, but it sometimes lacks fibre.'],
    ['المُعَلِّمُ: كَيْفَ تَتَعَامَلُ مَعَ ضَغْطِ الدِّرَاسَةِ؟ الطَّالِبُ: أُعَانِي مِنَ التَّوَتُّرِ قَبْلَ الامْتِحَانَاتِ، وَأَتَغَلَّبُ عَلَيْهِ بِالرِّيَاضَةِ وَالنَّوْمِ المُنَظَّمِ.', 'Teacher: How do you cope with study pressure? Student: I suffer from stress before exams, and I overcome it with sport and regular sleep.'],
    ['المُعَلِّمُ: إِذَا كَانَ بِإِمْكَانِكَ تَغْيِيرُ عَادَةٍ صِحِّيَّةٍ وَاحِدَةٍ، مَاذَا سَتَخْتَارُ؟', 'Teacher: If you could change one healthy habit, what would you choose?'],
    ['الطَّالِبُ: إِذَا اسْتَطَعْتُ تَغْيِيرَ عَادَةٍ وَاحِدَةٍ، سَأَنَامُ مُبَكِّرًا كُلَّ لَيْلَةٍ، لِأَنَّ النَّوْمَ الجَيِّدَ يُقَوِّي التَّرْكِيزَ وَيُحَسِّنُ المِزَاجَ.', 'Student: If I could change one habit, I would sleep early every night, because good sleep strengthens focus and improves mood.'],
    ['المُعَلِّمُ: إِجَابَةٌ مُتَوَازِنَةٌ اسْتَعْمَلْتَ فِيهَا الشَّرْطَ تِلْقَائِيًّا.', 'Teacher: A balanced answer in which you used the conditional spontaneously.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا رَأْيُكَ فِي النِّظَامِ الغِذَائِيِّ الصِّحِّيِّ؟ مَا الأَطْعِمَةُ الَّتِي تُوصِي بِهَا؟' },
      { route: 'develop', ar: 'كَيْفَ تُحَافِظُ عَلَى لِيَاقَتِكَ البَدَنِيَّةِ وَالنَّفْسِيَّةِ؟' },
      { route: 'stretch', ar: 'إِذَا كَانَ بِإِمْكَانِكَ تَغْيِيرُ شَيْءٍ وَاحِدٍ فِي أُسْلُوبِ حَيَاتِكَ، مَاذَا سَتَخْتَارُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'نِظَامِي الغِذَائِيُّ غَنِيٌّ بِالخُضَارِ، وَأُوصِي بِتَنَاوُلِ ______ .' },
      { route: 'develop', ar: 'أَتَمَرَّنُ ______ ، لِأَنَّ الرِّيَاضَةَ تُقَوِّي ______ .' },
      { route: 'stretch', ar: 'إِذَا غَيَّرْتُ ______ ، ______ ، لِأَنَّ ______ .' },
    ],
    modelEn: ['How do you cope with academic pressure?', 'I suffer from stress, and if I organise my time, I will overcome it easily.', 'And if you changed one habit?', 'If I changed one habit, I would sleep early, because sleep strengthens focus.'],
    notes: 'Website prompts and model — the five assessment questions (three on the slide; Q3 and Q5 are in the model). Pairs: examiner / candidate, 30 seconds per answer, then swap. The examiner ticks Answer · Reason · Condition. To a girl: رَأْيُكِ · تُوصِينَ · تُحَافِظِينَ · لِيَاقَتِكِ · بِإِمْكَانِكِ · سَتَخْتَارِينَ.',
  },
  write: {
    core: { amount: '6 + 3', how: 'Website Core: correct six preposition errors and write three from memory.' },
    develop: { amount: '3 + 3', how: 'Website Develop: three Type 1 conditionals and three medical passives, checked.' },
    stretch: { amount: '80–90 words', how: 'Website task: answer two assessment questions with يُعَانِي مِنْ, يَتَغَلَّبُ عَلَى and two conditionals.' },
  },
  frames: {
    core: [
      { en: 'My diet is rich in … but sometimes lacks …', ar: 'نِظَامِي الغِذَائِيُّ غَنِيٌّ بِالخُضَارِ، لٰكِنَّهُ يَفْتَقِرُ إِلَى ______ .' },
      { en: 'I recommend eating … daily.', ar: 'أُوصِي بِتَنَاوُلِ ______ يَوْمِيًّا.' },
      { en: 'I suffer from … before exams.', ar: 'أُعَانِي مِنَ ______ قَبْلَ الامْتِحَانَاتِ.' },
      { en: 'I overcome it with …', ar: 'وَأَتَغَلَّبُ عَلَيْهِ بِالرِّيَاضَةِ وَ ______ .' },
    ],
    develop: [
      { en: 'If I organise my time well, I will …', ar: 'إِذَا نَظَّمْتُ وَقْتِي جَيِّدًا، ______ .' },
      { en: 'If I change one healthy habit, I will …', ar: 'إِذَا غَيَّرْتُ عَادَةً صِحِّيَّةً وَاحِدَةً، ______ .' },
      { en: 'Because good sleep strengthens …', ar: 'لِأَنَّ النَّوْمَ الجَيِّدَ يُقَوِّي ______ .' },
      { en: 'In my opinion, … is the basis of health.', ar: 'فِي رَأْيِي، ______ هُوَ أَسَاسُ الصِّحَّةِ.' },
    ],
    bank: ['غَنِيٌّ بِـ', 'يَفْتَقِرُ إِلَى', 'أُعَانِي مِنْ', 'أَتَغَلَّبُ عَلَى', 'يُوصَى بِـ', 'سَأُقَلِّلُ الضَّغْطَ', 'سَأَنَامُ مُبَكِّرًا', 'يُقَوِّي التَّرْكِيزَ', 'يُحَسِّنُ المِزَاجَ', 'الأَلْيَافُ', 'الفَوَاكِهُ', 'التَّوَازُنُ'],
  },
  stretch: [
    ['لٰكِنَّهُ يَفْتَقِرُ أَحْيَانًا إِلَى الأَلْيَافِ', 'but it sometimes lacks fibre'],
    ['وَأَتَغَلَّبُ عَلَيْهِ بِالرِّيَاضَةِ وَالنَّوْمِ المُنَظَّمِ', 'and I overcome it with sport and regular sleep'],
    ['سَأُقَلِّلُ الضَّغْطَ الدِّرَاسِيَّ', 'I will reduce academic pressure'],
    ['وَسَأَشْعُرُ بِرَاحَةٍ أَكْبَرَ', 'and I will feel more at ease'],
    ['التَّوَازُنُ … هُوَ أَسَاسُ الصِّحَّةِ', 'balance … is the basis of health'],
  ],
  modelEn: 'My diet is rich in vegetables and protein, but it sometimes lacks fibre, and I recommend eating fruit daily. I suffer from stress before exams, and I overcome it with sport and regular sleep. If I organise my time well, I will reduce academic pressure and feel more at ease. And if I change one healthy habit, I will sleep early every night, because good sleep strengthens focus and improves mood. In my opinion, the balance between food, movement and rest is the basis of health.',
  find: ['ghaniyy bi- and yaftaqir ilā', 'yuʿānī min and yataghallab ʿalā', 'two idhā … sa- conditionals', 'a Form II benefit verb'],
  modelNotes: 'Website writing model. Evidence: غَنِيٌّ بِالخُضَارِ · يَفْتَقِرُ … إِلَى الأَلْيَافِ · أُوصِي بِتَنَاوُلِ · أُعَانِي مِنَ التَّوَتُّرِ · أَتَغَلَّبُ عَلَيْهِ · إِذَا نَظَّمْتُ … سَأُقَلِّلُ · إِذَا غَيَّرْتُ … سَأَنَامُ · يُقَوِّي التَّرْكِيزَ وَيُحَسِّنُ المِزَاجَ · فِي رَأْيِي.',
  selfCheck: [
    { route: 'core', text: 'Every verb has its own preposition (bi- · ilā · min · ʿalā).' },
    { route: 'core', text: 'yūṣā is followed by bi- + a verbal noun.' },
    { route: 'develop', text: 'My conditionals have idhā + past and a sa- result.' },
    { route: 'develop', text: 'My passives have u … a and a nominative subject.' },
    { route: 'stretch', text: 'I used a conditional without being asked, and named my priority error.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['قَائِمَةُ', 'the list'], ['أَخْطَاءٍ شَائِعَةٍ', 'common errors'], ['وَالصَّوَابُ', 'and the correct form is'], ['التَّشْكِيلِ', 'vowelling'], ['حَيْثُ يُقْصَدُ', 'where … is meant'],
    ['المَجْهُولُ', 'the passive'], ['الدَّرْسُ المُشْتَرَكُ', 'the shared lesson'], ['يُحْفَظُ', 'is memorised'], ['حَرْفِ جَرِّهِ', 'its preposition'], ['يُخْتَمُ', 'ends with'],
  ],
  prep: {
    words: [['تَقْيِيمٌ', 'an assessment', 'pl. تَقْيِيمَاتٌ'], ['فَهْمُ المَسْمُوعِ', 'listening comprehension', '—'], ['فَهْمُ المَقْرُوءِ', 'reading comprehension', '—'], ['المُحَادَثَةُ', 'the conversation', 'pl. المُحَادَثَاتُ'], ['أُرَاجِعُ إِجَابَتِي', 'I check my answer', 'تُرَاجِعُ she']],
    questionEn: 'Prepare answers to the five topic-conversation questions — each with the right preposition, a reason and (for Q3 and Q5) a conditional.',
    questionAr: 'أُعَانِي مِنْ … وَأَتَغَلَّبُ عَلَيْهِ بِـ … · إِذَا غَيَّرْتُ … سَأَ … لِأَنَّ …',
    homework: {
      core: 'Learn the eight preposition collocations; correct six errors and write three from memory.',
      develop: 'Write three conditionals and three passives; check each against the spine table.',
      stretch: 'Website writing task: an 80–90-word answer to two assessment questions; record it aloud.',
    },
    wordsSource: 'The five words prepare students for the P1-L12 assessment (its four parts and checking).',
  },
  remember: 'Remember: one verb, one preposition — ghaniyy BI- · yaftaqir ILĀ · yuʿānī MIN · yūṣā BI- + verbal noun — and in the conversation give the conditional before you are asked: idhā + past … sa- + present.',
});

module.exports = { meta, slides };
