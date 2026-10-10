'use strict';
/* P4-L11 · Consolidation — Speaking Preparation and Full Subjunctive Mastery — website: Pathways › Progression › P4 › P4-L11 (the P4 error zones: the
 * final -a after لِكَيْ and أَنْ, the la- of the Type 2 result, a past verb after لَوْ, the disaster passive and agreement; the whole P4 grammar spine; the
 * three topic-conversation questions and the four role-play tasks of the P4-L12 assessment). Website vocabulary, rules, quiz, sorter, mistakes, listening,
 * reading, speaking, writing, live builder and mission used as published, with waṣl alif shown without a kasra, لِكَيْ always written with its sukūn, rule
 * examples shown without their English glosses and one vowel fix: التُّرَاثِ المَعْمَارِيِّ → المِعْمَارِيِّ (as in the P4-L07 vocabulary). No visual game. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P4')({
  n: 11, fileTitle: 'P4_Consolidation_Speaking_Subjunctive_Mastery', chip: 'Consolidation',
  title: 'Consolidation — Speaking Preparation and Full Subjunctive Mastery', arabic: 'تَرْسِيخُ الوَحْدَةِ — إِعْدَادُ التَّحَدُّثِ وَإِتْقَانُ المُضَارِعِ المَنْصُوبِ',
  focus: 'Repair the P4 error zones (the final -a after li-kay and an · la- in the Type 2 result · a past verb after law · dummirat, not yudammarat · kānat for a city), revise the whole P4 spine, and rehearse the topic conversation and role play.',
  icon: 'FaComments', iconSet: 'fa6',
});

const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ').replace(/التُّرَاثِ المَعْمَارِيِّ/g, 'التُّرَاثِ المِعْمَارِيِّ'));
const site = fix(D.site('P4-L11'));
const RH = [['Subjunctive after a trigger', 'li-kay / an + verb in -a'], ['Type 2 result', 'law + past → la- + past'], ['Past verb after law', 'law + past (not present)'], ['Disaster passive', 'dummirat · ujliya · uʿlinat']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1], examples: r.examples.map((e) => e.replace(/ \(not .*\)$/, '')) }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P4-L11', {
  support: `• CONSOLIDATION + SPEAKING REHEARSAL for the P4-L12 assessment (topic conversation on the built and natural world + an environmental role play). The website names the three highest-frequency slips: a dropped final -a after a trigger · a Type 2 result without la- · a broken passive (yudammarat).
• Core: correct six P4 errors and write three sentences from memory (website Core). Develop: add a purpose clause, a necessity clause and a Type 2. Stretch: answer the why, the yataṭallabu and the law questions fluently and spontaneously.
• Praise the journey: students now control all three subjunctive triggers, both conditionals, the past perfect, the passive and reported speech — a full B1+ toolkit. Keep the rehearsal light and encouraging.
• Website teaching point 2 is today’s speaking rule: answer each question with the trigger it invites — WHY → li-kay · “what does it require?” → yataṭallabu an · law … → law … la-.`,
  teach: 'Fix the error zones, revise the spine, answer each question with its required structure.',
  wedo: 'Repair the slips, build an assessment answer, sort the structures, hear a mock conversation.',
  next: { nextCode: 'P4-L12', nextTitle: 'P4 Review and Unit Assessment', nextAr: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ' },
  objectives: ['Correct the most common P4 errors, led by the final -a.', 'Retrieve the three triggers, both conditionals and the past perfect accurately.', 'Answer a why / yataṭallabu / law question with the structure it invites.', 'Prepare the topic conversation and role play to assessment standard.'],
  rulesAr: 'إِصْلَاحُ أَخْطَاءِ الوَحْدَةِ الشَّائِعَةِ',
  ruleEx: [['لِكَيْ نَحْمِيَ الأَجْيَالَ', 'يَنْبَغِي أَنْ نَسْتَثْمِرَ فِي الطَّاقَةِ'], ['لَوْ بَدَأْنَا مُبَكِّرًا، لَنَجَحْنَا'], ['لَوِ اسْتَثْمَرْنَا …'], ['دُمِّرَتِ المَبَانِي وَأُعْلِنَتْ حَالَةُ الطَّوَارِئِ']],
  flexGroups: [2],
  doNow: {
    questions: [
      q('What does فَتْحَةُ النَّصْبِ mean?', ['the subjunctive fatḥa', 'the opening paragraph', 'a short vowel ā'], 'Prepared at home (P4-L10).'),
      q('What does لَامُ الجَوَابِ mean?', ['the la- of the result', 'the answer key', 'the letter lām in a name'], 'Prepared at home (P4-L10).'),
      q('What does التِّلْقَائِيَّةُ mean?', ['spontaneity', 'confidence', 'accuracy'], 'Prepared at home (P4-L10).'),
      q('You hear يَخْشَى أَنْ. The attitude is …', ['fear', 'hope', 'certainty'], 'P4-L10: yakhshā = fear.'),
      q('You hear a la- result. The conditional is …', ['hypothetical (Type 2)', 'real (Type 1)', 'a command'], 'P4-L10: la- = it did not happen.'),
    ],
    keyIdea: { text: 'Each P4 structure has ONE small marker — get the marker right and the structure is right.', ar: 'لِكَيْ {k|نَحْمِيَ} · أَنْ {k|نَسْتَثْمِرَ} · لَوْ … {p|لَـ}نَجَحْنَا · {m|دُمِّرَتْ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P4-L10. Questions 4–5 retrieve fear vs hope and the result marker (P4-L10) — today students produce every marker accurately in speech.',
  },
  routes: {
    core: ['I can fix six P4 errors and name the zone.', 'I can write three spine sentences from memory.'],
    develop: ['I can write li-kay, yataṭallabu an and a Type 2 accurately.', 'I can answer with a reason.'],
    stretch: ['I can answer each question with the trigger it invites, unprompted.', 'I can name my own priority error.'],
  },
  bridge: [
    { ar: 'مُطَابَقَةٌ', urdu: 'مطابقت', tr: 'mutābiqat', en: 'agreement' },
    { ar: 'إِعْرَابٌ', urdu: 'اعراب', tr: 'eʿrāb', en: 'Arabic: case endings · Urdu: vowel marks' },
    { ar: 'زَمَنٌ', urdu: 'زمانہ', tr: 'zamāna', en: 'Arabic: a tense · Urdu: an era, the times' },
    { ar: 'تَشْكِيلٌ', urdu: 'تشکیل', tr: 'tashkīl', en: 'Arabic: vowelling · Urdu: formation' },
    { ar: 'اعْتِمَادٌ · ثِقَةٌ', urdu: 'اعتماد', tr: 'eʿtimād', en: 'Arabic: reliance · Urdu: confidence (Arabic ثِقَةٌ)' },
  ],
  bridgeNotes: 'URDU BRIDGE: مطابقت is shared. Watch the shifts: Urdu اعراب = the vowel marks, but Arabic الإِعْرَابُ = the system of endings (the -a of today’s lesson is إِعْرَابُ النَّصْبِ); Urdu زمانہ = the times, Arabic زَمَنُ الفِعْلِ = the tense; Urdu تشکیل = formation, Arabic التَّشْكِيلُ = adding the vowels; Urdu اعتماد = confidence, Arabic الثِّقَةُ.',
  core: ['فَتْحَةُ النَّصْبِ', 'النَّصْبُ بَعْدَ لِكَيْ', 'النَّصْبُ بَعْدَ أَنْ', 'لَامُ الجَوَابِ', 'زَمَنُ فِعْلِ لَوْ', 'صِيغَةُ المَبْنِيِّ لِلْمَجْهُولِ', 'مُسَبِّبُ الغَرَضِ (لِكَيْ)', 'مُسَبِّبُ الإِرَادَةِ', 'مُسَبِّبُ الضَّرُورَةِ', 'شَرْطٌ مِنَ النَّوْعِ الثَّانِي', 'المَاضِي التَّامُّ', 'التِّلْقَائِيَّةُ'],
  forms: {
    'مُطَابَقَةُ الفِعْلِ': { tag: 'he · she · they', forms: [{ l: 'she · they', ar: 'كَانَتْ · كَانُوا' }, { l: 'he', ar: 'كَانَ' }] },
    'مُسَبِّبُ الإِرَادَةِ': ihs('أَرْجُو أَنْ · أَخْشَى أَنْ', 'تَرْجُو أَنْ · تَخْشَى أَنْ'),
  },
  vocabNotes: {
    0: 'The P4 error zones — the labels for today’s repair work: the -a after لِكَيْ and أَنْ (most often dropped) · la- in the Type 2 result · a past verb after لَوْ · the passive shape (دُمِّرَتْ) · agreement · precise vowelling.',
    1: 'The P4 grammar spine: the three triggers (purpose · volition · necessity), both conditionals, the past perfect, reported speech and the passive — everything the assessment tests.',
    2: 'Speaking fluency (FLEX): words to talk ABOUT speaking. الارْتِجَالُ بِالمَنْصُوبِ = improvising with the subjunctive — using a trigger without being asked for it.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the P4 error zones (website table + reading: the repair list) · Core', title: 'Wrong → right, zone by zone', ar: 'مَنَاطِقُ الأَخْطَاءِ',
      cols: [{ label: 'Zone', w: 2.2 }, { label: 'Wrong', w: 3.5, size: 20 }, { label: 'Right', w: 3.6, size: 20 }, { label: 'Lesson', w: 1.3 }, { label: 'Rule', w: 1.73 }],
      rows: [
        { cells: ['after li-kay', 'لِكَيْ نَحْمِي البِيئَةَ', 'لِكَيْ {k|نَحْمِيَ} البِيئَةَ', 'P4-L01', '-ī → -iya'] },
        { cells: ['after an', 'أَنْ نَسْتَثْمِرُ', 'أَنْ {k|نَسْتَثْمِرَ}', 'P4-L04', '-a'] },
        { cells: ['Type 2 result', 'لَوْ بَدَأْنَا، نَجَحْنَا', 'لَوْ بَدَأْنَا، {p|لَنَجَحْنَا}', 'P3-L05', 'la-'] },
        { cells: ['verb after law', 'لَوْ نَسْتَثْمِرُ', '{p|لَوِ اسْتَثْمَرْنَا}', 'P3-L05', 'past'] },
        { cells: ['passive', 'يُدَمَّرَتِ المَبَانِي', '{m|دُمِّرَتِ} المَبَانِي', 'P4-L05', 'u … i'] },
        { cells: ['agreement', 'كَانَ المَدِينَةُ قَدْ فَقَدَتْ', '{w|كَانَتِ} المَدِينَةُ قَدْ فَقَدَتْ', 'P4-L07', 'city = she'] },
      ],
      ltr: true,
      foot: 'Website reading: “every structure has a precise marker that must be controlled.”',
      notes: `GRAMMAR PART 1 — the website table, common error and the reading “twelve sentences to repair” (rows 1–5), plus website quiz 8 (row 6).
Website teaching point 1 (“The three highest-frequency P4 slips”): the dropped final -a (rows 1–2) · a Type 2 result without la- (row 3) · a broken passive (row 5).
Core: rows 1–4. Drill: cover the Right column; students fix each one and NAME the zone. Then reverse — the teacher says a zone, students give a correct example.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · the whole P4 grammar spine (vocabulary group 2 + website texts) · Core / Develop', title: 'Seven structures — one unit', ar: 'العَمُودُ الفِقْرِيُّ لِقَوَاعِدِ الوَحْدَةِ',
      cols: [{ label: 'Structure', w: 2.3 }, { label: 'Lesson', w: 1.5 }, { label: 'Example (website texts)', w: 6.4, size: 17 }, { label: 'Check', w: 2.13 }],
      rows: [
        { core: true, cells: ['purpose', 'P4-L01', 'نَفْعَلُهُ لِكَيْ {e|نَصُونَ} المَوْرِدَ لِلْأَجْيَالِ القَادِمَةِ.', 'li-kay + -a'] },
        { core: true, cells: ['volition', 'P4-L03/06', 'نَرْجُو أَنْ {w|تَتَغَيَّرَ} نَظْرَةُ النَّاسِ إِلَى المَبَانِي القَدِيمَةِ.', 'yarjū an + -a'] },
        { core: true, cells: ['necessity', 'P4-L04', 'يَتَطَلَّبُ الأَمْرُ أَنْ {k|نُخَصِّصَ} مِيزَانِيَّاتٍ لِلتَّرْمِيمِ.', 'yataṭallabu an + -a'] },
        { cells: ['both conditionals', 'P3-L05', 'إِذَا اسْتَثْمَرْنَا، سَنَحْمِي الغَدَ · لَوْ بَدَأْنَا، {p|لَنَجَحْنَا}', 'sa- · la-'] },
        { cells: ['past perfect', 'P4-L07', '{e|كَانَتِ} الحَضَارَاتُ {e|قَدْ نَشَأَتْ} عَلَى ضِفَافِهِ.', 'kānat qad'] },
        { cells: ['passive · reported', 'P4-L05 · P3-L06', '{m|أُعْلِنَتْ} حَالَةُ الطَّوَارِئِ · {m|قَالَ} الخَبِيرُ {m|إِنَّ} …', 'u … i · qāla inna'] },
      ],
      ltr: true,
      foot: 'Every row is a P4 lesson — the assessment tests them all.',
      notes: `GRAMMAR PART 2 — the website vocabulary group “The P4 grammar spine” with examples from the website listening, writing model and sorter.
Website challenge: “Write one accurate sentence for each of the four P4 error zones” — then cover the Example column here and write one for each structure.
Link the spine to the assessment parts: listening (hear the trigger) · reading (the -a = required, not done) · writing (one of each trigger for Range) · speaking (the structure each question invites).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · the required structure, unprompted (P4-L12 topic questions + role play) · Develop / Stretch', title: 'Question → required structure', ar: 'البِنْيَةُ المَطْلُوبَةُ',
      cols: [{ label: 'The examiner asks …', w: 4.5, size: 16 }, { label: 'Start your answer with …', w: 5.4, size: 17 }, { label: 'Q', w: 0.9 }, { label: 'Required', w: 1.53 }],
      rows: [
        { core: true, cells: ['صِفْ تَحَدِّيًا بِيئِيًّا فِي العَالَمِ العَرَبِيِّ وَمَا أَسْبَابُهُ.', '{m|تُشَكِّلُ} نُدْرَةُ المِيَاهِ أَكْبَرَ تَحَدٍّ، بِسَبَبِ قِلَّةِ الأَمْطَارِ …', 'Q1', 'passive / cause'] },
        { core: true, cells: ['لَوْ كَانَتْ لَدَيْكَ صَلَاحِيَّاتُ وَزِيرِ البِيئَةِ، مَاذَا كُنْتَ سَتُغَيِّرُ؟', '{p|لَوْ كَانَتْ لَدَيَّ} صَلَاحِيَّاتُهُ، {p|لَأَطْلَقْتُ} …', 'Q2', 'Type 2'] },
        { core: true, cells: ['مَا الَّذِي يَتَطَلَّبُهُ الحِفَاظُ عَلَى التُّرَاثِ فِي رَأْيِكَ؟', 'يَتَطَلَّبُ الأَمْرُ أَنْ {k|نُخَصِّصَ} مِيزَانِيَّاتٍ لِلتَّرْمِيمِ …', 'Q3', 'an + -a'] },
        { cells: ['role play: a solution and a hope', 'إِذَا … سَـ … · نَرْجُو أَنْ {w|تَعِيشَ} الأَجْيَالُ القَادِمَةُ …', 'RP', 'Type 1 · yarjū an'] },
      ],
      ltr: true,
      foot: 'Website teaching point: answer each question with the trigger it invites — that is what earns the quality-of-language mark.',
      notes: `GRAMMAR PART 3 — the three P4-L12 topic-conversation questions (passive + cause expected · Type 2 required · yataṭallabu an + subjunctive required) and the four role-play tasks (yushakkilu / yumaththilu · yataṭallabu an · a Type 1 · yarjū an).
Turn the question round: the examiner says لَدَيْكَ (you) → the student answers لَدَيَّ (I) · كُنْتَ سَتُغَيِّرُ → لَغَيَّرْتُ / لَأَطْلَقْتُ.
Q1 asks for the passive: add one — وَقَدْ أُهْمِلَتِ المَوَارِدُ لِعُقُودٍ (the resources were neglected for decades).
Row 4: تَعِيشُ → تَعِيشَ (hollow verb, still -a).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · answer with the trigger it invites (website teaching point 2 + speaking model) · Stretch', title: 'Structure · reason · extra', ar: 'بِنْيَةٌ · سَبَبٌ · إِضَافَةٌ',
      cards: [
        { chip: '1 · STRUCTURE · CORE', color: 'C0386B', head: 'لَوْ … لَـ', big: 'لَوْ كَانَتْ لَدَيَّ صَلَاحِيَّاتُهُ، لَأَطْلَقْتُ حَمْلَةً وَطَنِيَّةً لِلتَّشْجِيرِ.', en: 'If I had his powers, I would launch a national tree-planting campaign.', clue: 'The required one.' },
        { chip: '2 · REASON · DEVELOP', color: 'C77700', head: 'لِأَنَّ', big: 'لِأَنَّ الأَشْجَارَ تُنَقِّي الهَوَاءَ وَتُقَلِّلُ الحَرَارَةَ.', en: 'Because trees purify the air and reduce the heat.', clue: 'Say WHY.' },
        { chip: '3 · EXTRA · STRETCH', color: '6B4C9A', head: 'لِكَيْ · نَرْجُو أَنْ', big: 'لِكَيْ نَصُونَ المَعَالِمَ، وَنَرْجُو أَنْ يُشَارِكَ الجَمِيعُ.', en: 'So that we preserve the landmarks — and we hope everyone takes part.', clue: 'Two more triggers.' },
      ],
      error: { text: 'Website mistake 3: a Type 2 result takes la-.', pairs: [['لَوْ بَدَأْنَا مُبَكِّرًا، لَنَجَحْنَا', 'لَوْ بَدَأْنَا مُبَكِّرًا، نَجَحْنَا']] },
      notes: `GRAMMAR PART 4 — website teaching point 2 (“Answer each question with the trigger it invites”), the speaking model (card 1: لَأَطْلَقْتُ حَمْلَةً وَطَنِيَّةً لِكَيْ نَصُونَ المَعَالِمَ) and mistake 3. Card 2 is a teacher-added reason.
The routine: required structure → a reason → one extra P4 structure (another trigger). The mock conversation ends with the teacher’s praise «اسْتَعْمَلْتَ فِيهَا المُسَبِّبَاتِ الثَّلَاثَةَ تِلْقَائِيًّا».
Time-buying phrases if a student freezes: سُؤَالٌ مُهِمٌّ · دَعْنِي أُفَكِّرُ · فِي رَأْيِي … Repair phrase: عَفْوًا، أَقْصِدُ …`,
    },
  ],
  quick: [0, 1, 2, 4],
  rest: [3, 5, 6, 8],
  ido: {
    title: 'Watch me answer the assessment questions',
    steps: [
      { head: 'Q1', ar: '{m|تُشَكِّلُ} نُدْرَةُ المِيَاهِ …', think: 'The challenge.' },
      { head: 'Q3', ar: 'يَتَطَلَّبُ الأَمْرُ أَنْ {k|نُخَصِّصَ} … لِكَيْ {e|نَصُونَ}', think: '-a, -a.' },
      { head: 'Q2', ar: '{p|لَوْ كَانَتْ لَدَيَّ} … {p|لَأَطْلَقْتُ}', think: 'la-!' },
      { head: 'Extra', ar: 'نَرْجُو أَنْ {w|تَتَغَيَّرَ} …', think: 'Hope.' },
    ],
    legend: ['m', 'k', 'e', 'p', 'w'], legendLabels: { m: 'CHALLENGE', k: 'NECESSITY', e: 'PURPOSE', p: 'TYPE 2', w: 'HOPE' },
    model: '{m|تُشَكِّلُ} نُدْرَةُ المِيَاهِ أَكْبَرَ تَحَدٍّ بِيئِيٍّ، بِسَبَبِ قِلَّةِ الأَمْطَارِ وَسُوءِ الإِدَارَةِ. وَيَتَطَلَّبُ الأَمْرُ أَنْ {k|نُخَصِّصَ} مِيزَانِيَّاتٍ أَكْبَرَ لِلتَّحْلِيَةِ، لِكَيْ {e|نَصُونَ} المَوْرِدَ لِلْأَجْيَالِ القَادِمَةِ. {p|وَلَوْ كَانَتْ لَدَيَّ} صَلَاحِيَّاتُ وَزِيرِ البِيئَةِ، {p|لَأَطْلَقْتُ} مَشْرُوعًا وَطَنِيًّا لِتَحْلِيَةِ المِيَاهِ. وَنَرْجُو أَنْ {w|تَتَغَيَّرَ} نَظْرَةُ النَّاسِ إِلَى البِيئَةِ.',
    modelEn: 'Water scarcity is the biggest environmental challenge, because of low rainfall and poor management. It requires us to allocate bigger budgets for desalination, so that we preserve the resource for future generations. And if I had the powers of the environment minister, I would launch a national water-desalination project. We hope that people’s view of the environment will change.',
    notes: 'I DO (3 min) — the website listening and model, spoken aloud as an exam answer. Think aloud: “Q1: the challenge — tushakkilu … bi-sabab. Q3 is a yataṭallabu question, so I answer with yataṭallabu AN nukhaṣṣiṣA — and add WHY with li-kay naṣūnA. Q2 is a law question, so I answer with law — and the result MUST start with LA-. Extra: narjū AN tataghayyarA.” Do it twice — the second time faster, as fluent speech.',
  },
  patternEn: ['we invest in clean energy so that we protect future generations', 'the matter requires us to allocate bigger budgets for the environment', 'had we begun the transition early, our environment would be better'],
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · repair the slips (website mistakes + earlier P4 lessons)', title: 'Find it, fix it, name it', ar: 'صَحِّحْ وَسَمِّ الخَطَأَ',
      cols: [{ label: 'Slip', w: 4.3, size: 19 }, { label: 'Correct', w: 4.6, size: 19 }, { label: 'Zone', w: 3.43 }],
      rows: [
        { core: true, cells: ['نَسْتَثْمِرُ فِي الطَّاقَةِ لِكَيْ نَحْمِي البِيئَةَ.', 'نَسْتَثْمِرُ فِي الطَّاقَةِ لِكَيْ نَحْمِيَ البِيئَةَ.', 'li-kay + -a'] },
        { core: true, cells: ['يَتَطَلَّبُ الأَمْرُ أَنْ نُخَصِّصُ مِيزَانِيَّةً.', 'يَتَطَلَّبُ الأَمْرُ أَنْ نُخَصِّصَ مِيزَانِيَّةً.', 'an + -a'] },
        { core: true, cells: ['لَوْ بَدَأْنَا مُبَكِّرًا، نَجَحْنَا.', 'لَوْ بَدَأْنَا مُبَكِّرًا، لَنَجَحْنَا.', 'Type 2 result'] },
        { cells: ['أَجْلَى آلَافُ السُّكَّانِ.', 'أُجْلِيَ آلَافُ السُّكَّانِ.', 'passive (P4-L05)'] },
        { cells: ['يَتَحَوَّلُ العَالَمُ العَرَبِيُّ فِي الطَّاقَةِ المُتَجَدِّدَةِ.', 'يَتَحَوَّلُ العَالَمُ العَرَبِيُّ إِلَى الطَّاقَةِ المُتَجَدِّدَةِ.', 'partner (P4-L06)'] },
        { cells: ['يَهْدِفُ المَشْرُوعُ أَنْ يُقَلِّلَ الانْبِعَاثَاتِ.', 'يَهْدِفُ المَشْرُوعُ إِلَى أَنْ يُقَلِّلَ الانْبِعَاثَاتِ.', 'yahdifu ilā (P4-L09)'] },
      ],
      ltr: true,
      foot: 'Website reading: “the shared lesson is that every structure has a precise marker that must be controlled.”',
      notes: `WE DO (3 min) — rows 1–3 are the website mistakes; rows 4–6 recycle mistakes from P4-L05, P4-L06 and P4-L09. Cover columns 2–3; pairs fix each slip and NAME the zone.
Core: rows 1–3. Develop: all six. Stretch: write two new slips of their own for a partner to repair.
Then each student writes their ONE priority error zone in the chat — collect for L12.`,
    },
    {
      type: 'formsTable', stage: 'wedo', min: 2, flex: true, eyebrow: 'We do · build an assessment answer (website live builder)', title: 'Background + necessity + purpose', ar: 'ابْنِ جَوَابَكَ',
      cols: [{ label: '1 · Background (kāna qad)', w: 4.0, size: 16 }, { label: '2 · Necessity (an + -a)', w: 4.1, size: 16 }, { label: '3 · Purpose (li-kay)', w: 4.23, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Say it aloud as one fluent answer.',
      notes: `WE DO (flex) — the website live builder (${site.live_builder.target}). Website feedback: ${site.live_builder.feedback}
Use it as oral rehearsal: one student reads a combination as an exam answer; the partner names each structure and checks every -a.`,
    },
  ],
  sorterTitle: 'Trigger, conditional / past perfect — or passive / reported?',
  sorterCats: ['subjunctive triggers', 'conditionals / past perfect', 'passive / reported'],
  sorterNotes: 'Then say a full sentence for each card as fast as possible — and stress every final -a after a trigger.',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: { ...site.writing, checklist: site.writing.checklist.map((c) => c.replace('(كَانَ قَدْ …)', '(kāna qad …)').replace('(لِكَيْ)', '(li-kay)').replace('(يَتَطَلَّبُ / يَنْبَغِي أَنْ)', '(yataṭallabu / yanbaghī an)').replace('with the لَـ result', 'with the la- result')) }, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('Purpose: لِكَيْ + fatḥa.', 'Purpose: li-kay + -a.').replace('Necessity: يَتَطَلَّبُ أَنْ + fatḥa.', 'Necessity: yataṭallabu an + -a.').replace('Type 2: لَوْ + past → لَـ.', 'Type 2: law + past → la-.') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; لِكَيْ always written with its sukūn; vowel fix التُّرَاثِ المَعْمَارِيِّ → المِعْمَارِيِّ; rule headings, formulas, pattern tips and the writing checklist in English and transliteration (rule examples without their English glosses); the required-structure questions follow the P4-L12 assessment (topic Q1–Q3 + role play); the repair table adds three earlier P4 mistakes; sorter headings in lower case; no visual game. All other website items are used as published.',
  hints: ['li-kay naḥmī?', 'law … najaḥnā?', 'yudammarat?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: kānat qad · yataṭallabu an · li-kay · law … la-.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write down the student’s Type 2 sentence word for word.',
  gloss: [
    ['المُعَلِّمُ: صِفْ نِظَامًا بِيئِيًّا فِي العَالَمِ العَرَبِيِّ تُعْجَبُ بِهِ. الطَّالِبُ: يُعْجِبُنِي نَهْرُ النِّيلِ لِأَنَّهُ يَضُمُّ تَنَوُّعًا كَبِيرًا، وَكَانَتِ الحَضَارَاتُ قَدْ نَشَأَتْ عَلَى ضِفَافِهِ.', 'Teacher: Describe an ecosystem in the Arab world that you admire. Student: I admire the River Nile because it holds great diversity, and civilisations had grown up on its banks.'],
    ['المُعَلِّمُ: مَا الَّذِي يَتَطَلَّبُهُ الحِفَاظُ عَلَيْهِ؟ الطَّالِبُ: يَتَطَلَّبُ الأَمْرُ أَنْ نُخَصِّصَ مِيزَانِيَّاتٍ أَكْبَرَ وَأَنْ نَحُدَّ مِنَ التَّلَوُّثِ.', 'Teacher: What does conserving it require? Student: It requires us to allocate bigger budgets and to curb pollution.'],
    ['المُعَلِّمُ: وَلِمَاذَا نَفْعَلُ ذٰلِكَ؟ الطَّالِبُ: نَفْعَلُهُ لِكَيْ نَصُونَ المَوْرِدَ لِلْأَجْيَالِ القَادِمَةِ.', 'Teacher: And why do we do that? Student: We do it so that we preserve the resource for future generations.'],
    ['المُعَلِّمُ: لَوْ كَانَتْ لَدَيْكَ صَلَاحِيَّاتُ وَزِيرِ البِيئَةِ، مَاذَا كُنْتَ سَتُغَيِّرُ؟ الطَّالِبُ: لَوْ كَانَتْ لَدَيَّ صَلَاحِيَّاتُهُ، لَأَطْلَقْتُ مَشْرُوعًا وَطَنِيًّا لِتَحْلِيَةِ المِيَاهِ.', 'Teacher: If you had the powers of the environment minister, what would you change? Student: If I had his powers, I would launch a national water-desalination project.'],
    ['المُعَلِّمُ: أَجْوِبَةٌ مُتَوَازِنَةٌ اسْتَعْمَلْتَ فِيهَا المُسَبِّبَاتِ الثَّلَاثَةَ تِلْقَائِيًّا.', 'Teacher: Balanced answers in which you used all three triggers spontaneously.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ نِظَامًا بِيئِيًّا فِي العَالَمِ العَرَبِيِّ تُعْجَبُ بِهِ — لِمَاذَا هُوَ مُهِمٌّ؟' },
      { route: 'develop', ar: 'مَا الَّذِي يَتَطَلَّبُهُ الحِفَاظُ عَلَى التُّرَاثِ المِعْمَارِيِّ فِي رَأْيِكَ؟' },
      { route: 'stretch', ar: 'لَوْ كَانَتْ لَدَيْكَ صَلَاحِيَّاتُ وَزِيرِ البِيئَةِ، مَاذَا كُنْتَ سَتُغَيِّرُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'يُعْجِبُنِي ______ لِأَنَّهُ ______ .' },
      { route: 'develop', ar: 'يَتَطَلَّبُ الأَمْرُ أَنْ ______ لِكَيْ ______ .' },
      { route: 'stretch', ar: 'لَوْ كَانَتْ لَدَيَّ صَلَاحِيَّاتُهُ، لَأَطْلَقْتُ ______ .' },
    ],
    modelEn: ['What does conserving heritage require?', 'It requires us to allocate budgets for restoration and to curb neglect.', 'And if you had the minister’s powers?', 'If I had his powers, I would launch a national campaign so that we preserve the landmarks.'],
    notes: 'Website prompts and model — the topic-conversation questions. Pairs: examiner / candidate, 30–40 seconds per answer, then swap. The examiner ticks Structure · Reason · Extra. Then a 2-minute role play (P4-L12 tasks): describe a challenge (yushakkilu), say what the solution requires (yataṭallabu an), propose a future action (idhā … sa-) and express a hope (yarjū an). To a girl: تُعْجَبِينَ · رَأْيِكِ · لَدَيْكِ · كُنْتِ سَتُغَيِّرِينَ.',
  },
  diff: { stretch: 'Deliver fluent answers to the why, the yataṭallabu and the law questions spontaneously.' },
  write: {
    core: { amount: '6 + 3', how: 'Website Core: correct six P4 errors and write three sentences from memory.' },
    develop: { amount: '3 structures', how: 'Website Develop: add a purpose clause, a necessity clause and a Type 2 conditional.' },
    stretch: { amount: '80–90 words', how: 'Website task: answer two assessment questions with all three triggers, a Type 2 and the past perfect — every marker accurate.' },
  },
  frames: {
    core: [
      { en: 'I admire … because …', ar: 'يُعْجِبُنِي ______ لِأَنَّهُ ______ .' },
      { en: '… is the biggest environmental challenge.', ar: 'تُشَكِّلُ ______ أَكْبَرَ تَحَدٍّ بِيئِيٍّ.' },
      { en: 'It requires us to allocate …', ar: 'يَتَطَلَّبُ الأَمْرُ أَنْ نُخَصِّصَ ______ .' },
      { en: 'We do it so that we preserve …', ar: 'نَفْعَلُهُ لِكَيْ نَصُونَ ______ .' },
    ],
    develop: [
      { en: 'If I had the minister’s powers, I would launch …', ar: 'لَوْ كَانَتْ لَدَيَّ صَلَاحِيَّاتُ الوَزِيرِ، لَأَطْلَقْتُ ______ .' },
      { en: 'Our cities had lost … before …', ar: 'كَانَتْ مُدُنُنَا قَدْ فَقَدَتْ ______ قَبْلَ أَنْ ______ .' },
      { en: 'We hope that …', ar: 'نَرْجُو أَنْ ______ .' },
      { en: 'If we invest today, …', ar: 'إِذَا اسْتَثْمَرْنَا اليَوْمَ، سَنَحْمِي ______ .' },
    ],
    bank: ['نَهْرُ النِّيلِ', 'يَضُمُّ تَنَوُّعًا كَبِيرًا', 'نُدْرَةُ المِيَاهِ', 'مِيزَانِيَّاتٍ لِلتَّرْمِيمِ', 'نَحُدَّ مِنَ التَّلَوُّثِ', 'هُوِيَّتَنَا', 'ذَاكِرَتَنَا الجَمَاعِيَّةَ', 'حَمْلَةً وَطَنِيَّةً لِلتَّشْجِيرِ', 'مَشْرُوعًا وَطَنِيًّا لِتَحْلِيَةِ المِيَاهِ', 'تَتَغَيَّرَ نَظْرَةُ النَّاسِ', 'تُرَاثِهَا العُمْرَانِيِّ', 'الغَدَ'],
  },
  stretch: [
    ['قَبْلَ أَنْ نَنْتَبِهَ لِقِيمَتِهِ', 'before we noticed its value'],
    ['وَأَنْ نَحُدَّ مِنَ الإِهْمَالِ', 'and to curb neglect'],
    ['وَنَحْمِيَ ذَاكِرَتَنَا الجَمَاعِيَّةَ', 'and protect our collective memory'],
    ['وَلَدَعَمْتُ الطَّاقَةَ المُتَجَدِّدَةَ', 'and I would support renewable energy'],
    ['تَجْمَعُ بَيْنَ حِمَايَةِ الطَّبِيعَةِ وَصَوْنِ العُمْرَانِ', 'combine protecting nature and preserving buildings'],
  ],
  modelEn: 'Our cities had lost much of their built heritage before we noticed its value. I think preserving it requires us to allocate budgets for restoration and to curb neglect. We do this so that we preserve our identity and protect our collective memory. We hope that people’s view of old buildings will change. And if I had the powers of the environment minister, I would launch a national tree-planting campaign and I would support renewable energy. These steps combine protecting nature and preserving our buildings together.',
  find: ['past perfect (kānat qad)', 'yataṭallabu an + two verbs in -a', 'li-kay + two verbs in -a · narjū an', 'a Type 2 with two la- results'],
  modelNotes: 'Website writing model. Evidence: كَانَتْ … قَدْ فَقَدَتْ · قَبْلَ أَنْ نَنْتَبِهَ · يَتَطَلَّبُ أَنْ نُخَصِّصَ … وَأَنْ نَحُدَّ · لِكَيْ نَصُونَ … وَنَحْمِيَ · نَرْجُو أَنْ تَتَغَيَّرَ · وَلَوْ كَانَتْ لَدَيَّ … لَأَطْلَقْتُ … وَلَدَعَمْتُ.',
  selfCheck: [
    { route: 'core', text: 'Every verb after li-kay and an ends in -a (naḥmiya · nastathmira).' },
    { route: 'core', text: 'My Type 2 result has la-; the verb after law is past.' },
    { route: 'develop', text: 'My passive has the right shape (dummirat · ujliya); kānat agrees with a city.' },
    { route: 'develop', text: 'I used one of each trigger: purpose, volition, necessity.' },
    { route: 'stretch', text: 'I answered each question with the trigger it invites, and named my priority error.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['تَحْتَوِي عَلَى', 'it contains'], ['القَائِمَةُ', 'the list'], ['أَخْطَاءٍ شَائِعَةٍ', 'common errors'], ['وَالصَّوَابُ', 'and the correct form is'], ['جَوَابِ لَوْ', 'the result of law'],
    ['زَمَنِ فِعْلِ لَوْ', 'the tense after law'], ['المَبْنِيِّ لِلْمَجْهُولِ', 'the passive'], ['المُشْتَرَكُ', 'shared'], ['بِنْيَةٍ', 'a structure'], ['ضَبْطُهَا', 'controlling it'],
  ],
  prep: {
    words: [['تَقْيِيمٌ', 'an assessment', 'pl. تَقْيِيمَاتٌ'], ['فَهْمُ المَسْمُوعِ', 'listening comprehension', '—'], ['فَهْمُ المَقْرُوءِ', 'reading comprehension', '—'], ['صَلَاحِيَّاتٌ', 'powers, authority', 'sg. صَلَاحِيَّةٌ'], ['يُشَكِّلُ', 'constitutes, forms', 'Form II']],
    questionEn: 'Prepare answers to the three topic-conversation questions — each with its required structure and a reason.',
    questionAr: 'تُشَكِّلُ … أَكْبَرَ تَحَدٍّ · يَتَطَلَّبُ الأَمْرُ أَنْ … · لَوْ كَانَتْ لَدَيَّ … لَأَطْلَقْتُ …',
    homework: {
      core: 'Correct six P4 errors and write three spine sentences from memory.',
      develop: 'Write a li-kay, a yataṭallabu an and a Type 2 sentence; check each against the spine table.',
      stretch: 'Website writing task: an 80–90-word answer to two assessment questions; record it aloud.',
    },
    wordsSource: 'The five words prepare students for the P4-L12 assessment (its parts, the topic questions and the role play).',
  },
  remember: 'Remember: li-kay / an + verb in -A (naḥmiyA) · law + PAST → LA- · dummirat, never yudammarat · a city is “she” (kānat) — and answer each question with the trigger it invites, before you are asked.',
});

module.exports = { meta, slides };
