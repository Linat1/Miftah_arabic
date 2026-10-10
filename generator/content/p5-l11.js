'use strict';
/* P5-L11 · Consolidation — Speaking Preparation and P5 Complete Review — website: Pathways › Progression › P5 › P5-L11 (the P5 error zones: أَنْ + -a after a
 * trigger vs أَنَّ + noun after a reporting verb; the indicative after صَحِيحٌ أَنَّ; the subjunctive conclusion; the la- of the Type 2 result; past-perfect
 * agreement; the whole P5 spine; the three topic-conversation questions and the four role-play tasks of the P5-L12 assessment). Website vocabulary, rules,
 * quiz, sorter, mistakes, listening, reading, speaking, writing, live builder and mission used as published, with waṣl alif shown without a kasra, لِكَيْ always
 * written with its sukūn and يَصِرُّ → يُصِرُّ throughout (vocabulary, sorter, live builder and mission — as in P5-L03). No visual game. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P5')({
  n: 11, fileTitle: 'P5_Consolidation_Speaking_Review', chip: 'Consolidation',
  title: 'Consolidation — Speaking Preparation and P5 Complete Review', arabic: 'تَرْسِيخُ الوَحْدَةِ — إِعْدَادُ التَّحَدُّثِ وَالمُرَاجَعَةُ الشَّامِلَةُ',
  focus: 'Repair the P5 error zones (an + -a after a trigger vs anna + noun after a reporting verb · -u after ṣaḥīḥun anna · -a in the conclusion · la- in the Type 2 result), revise the whole P5 spine, and rehearse the topic conversation and role play.',
  icon: 'FaComments', iconSet: 'fa6',
});

const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ').replace(/يَصِرُّ/g, 'يُصِرُّ'));
const site = fix(D.site('P5-L11'));
const RH = [['an vs anna', 'an + verb in -a · anna + noun clause'], ['Concession → indicative', 'ṣaḥīḥun anna + verb in -u'], ['Subjunctive conclusion', 'wa-bināʾan ʿalā mā sabaqa + an + -a'], ['Type 2 result', 'law + past → la-']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;
const VN = [['وَبِنَاءً … أَنْ.', 'wa-bināʾan … an.'], ['صَحِيحٌ أَنَّ … غَيْرَ أَنَّ.', 'ṣaḥīḥun anna … ghayra anna.'], ['يُصِرُّ / يُطَالِبُ / يَمْنَعُ / يَرْفُضُ.', 'yuṣirru / yuṭālibu / yamnaʿu / yarfuḍu.'], ['وَبِنَاءً عَلَى مَا سَبَقَ.', 'wa-bināʾan ʿalā mā sabaqa.'], ['يُهَجَّرُ / يُرَحَّلُ.', 'yuhajjaru / yuraḥḥalu.']];

const slides = D.devLesson('P5-L11', {
  support: `• CONSOLIDATION + SPEAKING REHEARSAL for the P5-L12 assessment (topic conversation on social issues + a role play at a social-justice conference). The website names the most common P5 slip: anna where a trigger needs an (يُطَالِبُ بِأَنَّ ✗).
• Core: correct six P5 errors and write three sentences from memory (website Core). Develop: add a concession–refutation pair and a Type 2. Stretch: answer the concession and Type 2 questions fluently and spontaneously.
• Praise the journey: students now control the concession–refutation pair, eight subjunctive triggers, both conditionals, the past perfect, reported speech, the passive and formal conclusions — the full toolkit for P6 (the IGCSE Bridge).
• Website teaching point 1 is today’s accuracy rule: a TRIGGER takes an + a verb in -a; a REPORTING verb takes anna + a noun. Teaching point 2: never carry the -a into the concession.`,
  teach: 'Fix the error zones, revise the P5 spine, answer each question with its required structure.',
  wedo: 'Repair the slips, build an assessment answer, sort an / anna / concession, hear a mock conversation.',
  next: { nextCode: 'P5-L12', nextTitle: 'P5 Review and Unit Assessment', nextAr: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ' },
  objectives: ['Correct the twelve most common P5 errors, led by an vs anna.', 'Use concession (ṣaḥīḥun anna) and refutation (ghayra anna) spontaneously in speech.', 'Retrieve the extended subjunctive triggers and both conditionals accurately.', 'Prepare five topic-conversation answers to assessment standard.'],
  rulesAr: 'إِصْلَاحُ أَخْطَاءِ الوَحْدَةِ الشَّائِعَةِ',
  ruleEx: [['يُطَالِبُ بِأَنْ تُوَقِّعَ الدُّوَلُ', 'أَكَّدَ أَنَّ الفَجْوَةَ تَتَّسِعُ'], ['صَحِيحٌ أَنَّ التَّعْلِيمَ يَتَطَلَّبُ مَوَارِدَ ضَخْمَةً'], ['وَبِنَاءً عَلَى مَا سَبَقَ، يَتَطَلَّبُ الأَمْرُ أَنْ تَتَحَرَّكَ الحُكُومَاتُ'], ['لَوْ عُولِجَ التَّفَاوُتُ مُبَكِّرًا، لَتَحَسَّنَ الوَضْعُ']],
  flexGroups: [2],
  doNow: {
    questions: [
      q('What does الطَّلَاقَةُ mean?', ['fluency', 'freedom', 'a long speech'], 'Prepared at home (P5-L10).'),
      q('What does التِّلْقَائِيَّةُ mean?', ['spontaneity', 'repetition', 'silence'], 'Prepared at home (P5-L10).'),
      q('What does الأَدَاءُ تَحْتَ الضَّغْطِ mean?', ['performance under pressure', 'a calm rehearsal', 'a written test'], 'Prepared at home (P5-L10).'),
      q('The point after صَحِيحٌ أَنَّ belongs to …', ['the other side', 'the speaker’s conclusion', 'no one'], 'P5-L10: a concession.'),
      q('«لَوْ عُولِجَ التَّفَاوُتُ مُبَكِّرًا، لَتَحَسَّنَ الوَضْعُ» means the early treatment …', ['did not happen', 'happened', 'will happen'], 'P5-L10: law … la- = it did not happen.'),
    ],
    keyIdea: { text: 'One letter changes everything: an (sukūn) + a verb in -a after a trigger; anna (shadda) + a noun after a reporting verb.', ar: 'يُطَالِبُ {e|بِأَنْ} تُوَقِّعَ · أَكَّدَ {w|أَنَّ} الفَجْوَةَ تَتَّسِعُ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P5-L10. Questions 4–5 retrieve the listening signals of P5-L10 — today students produce them spontaneously.',
  },
  routes: {
    core: ['I can correct 6 P5 slips and name the zone.', 'I can choose an or anna correctly.'],
    develop: ['I can answer with ṣaḥīḥun anna … ghayra anna unprompted.', 'I can answer the law question with la-.'],
    stretch: ['I can answer all 3 topic questions with the structure each invites.', 'I can run the 4 role-play tasks fluently.'],
  },
  bridge: [
    { ar: 'طَلَاقَةٌ', urdu: 'طلاقت', tr: 'talāqat', en: 'fluency' },
    { ar: 'تَلَفُّظٌ', urdu: 'تلفظ', tr: 'talaffuz', en: 'pronunciation' },
    { ar: 'ثِقَةٌ', urdu: 'اعتماد', tr: 'etimād', en: 'confidence (Arabic اعْتِمَادٌ = reliance)' },
    { ar: 'تَمْرِينٌ', urdu: 'مشق', tr: 'mashq', en: 'practice (Arabic مَشَقَّةٌ = hardship)' },
    { ar: 'إِصْلَاحٌ', urdu: 'اصلاح', tr: 'islāh', en: 'correction, reform' },
  ],
  bridgeNotes: 'URDU BRIDGE: طلاقت, تلفظ and اصلاح are shared — today is a day of اصلاح (correcting our slips). Two traps: Urdu اعتماد = confidence, but Arabic الاعْتِمَادُ = reliance (confidence = الثِّقَةُ); Urdu مشق = practice, but Arabic مَشَقَّةٌ = hardship (practice = تَمْرِينٌ). So: التَّمْرِينُ يَبْنِي الثِّقَةَ.',
  core: ['أَنْ (لِلنَّصْبِ)', 'أَنَّ (لِلْخَبَرِ)', 'المُثْبَتُ بَعْدَ صَحِيحٌ أَنَّ', 'الخَاتِمَةُ المَنْصُوبَةُ', 'لَامُ الجَوَابِ', 'بِنْيَةُ التَّسْلِيمِ وَالرَّدِّ', 'المُسَبِّبَاتُ المُوَسَّعَةُ', 'نَوْعَا الشَّرْطِ', 'المَاضِي التَّامُّ', 'التِّلْقَائِيَّةُ', 'الطَّلَاقَةُ', 'الثِّقَةُ'],
  forms: {
    'المُسَبِّبَاتُ المُوَسَّعَةُ': { tag: 'pl · sg', forms: [{ l: 'sg.', ar: 'المُسَبِّبُ المُوَسَّعُ' }] }, 'رَوَابِطُ الخِتَامِ': { tag: 'pl · sg', forms: [{ l: 'sg.', ar: 'رَابِطُ الخِتَامِ' }] },
    'نَوْعَا الشَّرْطِ': { tag: 'dual · sg', forms: [{ l: 'sg.', ar: 'نَوْعُ الشَّرْطِ' }] },
  },
  vocabNotes: {
    0: 'The P5 error zones — name your slip before you fix it: أَنْ vs أَنَّ · the indicative after صَحِيحٌ أَنَّ · the subjunctive conclusion · لَامُ الجَوَابِ (the la- of the Type 2 result) · past-perfect agreement (كَانَتِ الأَجْيَالُ … نَاضَلَتْ).',
    1: 'The complete P5 spine: concession–refutation (L01) · the humanitarian passive (L02) · insist / demand / call (L03) · prohibit / permit (L04) · refuse + conclusion connectors (L05) · the past perfect (L06) · the essay (L07–L09).',
    2: 'Speaking fluency: التِّلْقَائِيَّةُ (spontaneity) — answering without notes; الارْتِجَالُ (improvising) — building the concession–refutation on the spot. The P5-L12 role play is set at مُؤْتَمَرُ العَدَالَةِ الاجْتِمَاعِيَّةِ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · an vs anna (website rule 1, teaching point 1, table and mistake 1) · Core', title: 'One letter, two systems', ar: 'أَنْ أَمْ أَنَّ؟',
      cols: [{ label: 'Before it', w: 3.0, size: 18 }, { label: 'Use', w: 1.7, size: 20 }, { label: 'After it', w: 2.3 }, { label: 'Example (website texts)', w: 5.33, size: 16 }],
      rows: [
        { core: true, cells: ['a trigger: {e|يُطَالِبُ بِـ}', '{e|أَنْ}', 'a verb in -a', 'يُطَالِبُ النَّاشِطُونَ بِأَنْ {e|تُوَقِّعَ} الدُّوَلُ'] },
        { core: true, cells: ['a reporting verb: {w|أَكَّدَ}', '{w|أَنَّ}', 'a noun (-a) + verb', 'أَكَّدَ الخَبِيرُ أَنَّ {w|الفَجْوَةَ} تَتَّسِعُ'] },
        { cells: ['a trigger: {e|يَمْنَعُ}', '{e|أَنْ}', 'a verb in -a', 'يَمْنَعُ القَانُونُ أَنْ {e|تُبَاعَ} البَيَانَاتُ'] },
        { cells: ['a report: {w|يُشَارُ إِلَى}', '{w|أَنَّ}', 'a noun (-a) + verb', 'يُشَارُ إِلَى أَنَّ {w|التَّفَاوُتَ} يُهَدِّدُ الاسْتِقْرَارَ'] },
        { cells: ['✗ يُطَالِبُ بِأَنَّ', '→ أَنْ', '', '✗ بِأَنَّ تُوَقِّعَ → ✓ بِأَنْ تُوَقِّعَ'] },
      ],
      ltr: true,
      foot: 'Website teaching point: a trigger takes an + subjunctive; a reporting verb takes anna + noun. Mixing them is the most common P5 slip.',
      notes: `GRAMMAR PART 1 — website rule “an vs anna”, teaching point 1, the website table and mistake 1; the sorter is built on the same contrast.
Quick test: what comes NEXT? A verb → أَنْ (sukūn) and the verb ends in -a. A noun → أَنَّ (shadda) and the noun ends in -a (it is the “subject” of anna).
Triggers met in P5: يُصِرُّ عَلَى · يُطَالِبُ بِـ · يَدْعُو إِلَى · يَمْنَعُ · يُبِيحُ · يَرْفُضُ · يَتَطَلَّبُ · يَنْبَغِي · مِنَ الضَّرُورِيِّ. Reporting verbs: أَكَّدَ · يُشَارُ إِلَى · يُثْبِتُ · يَرَى.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · keep the concession indicative (website rule 2, teaching point 2, mistake 2) · Core / Develop', title: 'Fact -u, aim -a', ar: 'المُثْبَتُ بَعْدَ صَحِيحٌ أَنَّ',
      cards: [
        { chip: 'CONCESSION · CORE', color: '1D5FBF', head: 'صَحِيحٌ أَنَّ + -u', big: 'صَحِيحٌ أَنَّ التَّعْلِيمَ يَتَطَلَّبُ مَوَارِدَ ضَخْمَةً.', en: 'True, education requires huge resources. (a fact)', clue: 'yataṭallabU' },
        { chip: 'TRIGGER · CORE', color: 'C0386B', head: 'يَتَطَلَّبُ أَنْ + -a', big: 'يَتَطَلَّبُ الأَمْرُ أَنْ تَتَحَرَّكَ الحُكُومَاتُ.', en: 'It requires governments to act. (an aim)', clue: 'tataḥarrakA' },
        { chip: 'PRONOUN · STRETCH', color: '6B4C9A', head: 'غَيْرَ أَنَّهَا', big: 'صَحِيحٌ أَنَّ لِلتِّقْنِيَّةِ فَوَائِدَ، غَيْرَ أَنَّهَا تُعَمِّقُ الفَجْوَةَ.', en: 'True, technology has benefits; however, it deepens the gap.', clue: 'anna + -hā (it)' },
      ],
      error: { text: 'Website mistake 2: do not carry the -a into the concession — the conceded situation is real.', pairs: [['صَحِيحٌ أَنَّ التَّعْلِيمَ يَتَطَلَّبُ', 'صَحِيحٌ أَنَّ التَّعْلِيمَ يَتَطَلَّبَ']] },
      notes: `GRAMMAR PART 2 — website rule “Concession → indicative”, teaching point 2 (“ṣaḥīḥun anna keeps the indicative”), mistake 2 and quiz 3–4.
Cards 1–2 use the SAME verb (يَتَطَلَّبُ) in two roles: in card 1 it is the main verb of a fact (-u); in card 2 it is the trigger, and the verb AFTER أَنْ takes -a.
Card 3 (Stretch): غَيْرَ أَنَّهَا — anna + a pronoun when the subject is already known (here: technology). Exactly the model answer to topic question 2 of the assessment.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · the complete P5 spine (website vocabulary group 2 and P5-L01 to L09) · Develop', title: 'Everything P5 gave you', ar: 'العَمُودُ الفِقْرِيُّ لِلْوَحْدَةِ',
      cols: [{ label: 'Lesson', w: 1.3 }, { label: 'Structure', w: 3.0 }, { label: 'Model sentence', w: 8.03, size: 16 }],
      rows: [
        { core: true, cells: ['L01 · L07', 'concession–refutation', '{w|صَحِيحٌ أَنَّ} الإِصْلَاحَ يَتَطَلَّبُ مَوَارِدَ، {e|غَيْرَ أَنَّ} العَائِدَ أَكْبَرُ'] },
        { cells: ['L02 · L05', 'the passive', 'يُهَجَّرُ المَدَنِيُّونَ · يُنْتَهَكُ القَانُونُ · تُلْزَمُ الدُّوَلُ بِالامْتِثَالِ'] },
        { core: true, cells: ['L03 · L04 · L05', 'extended triggers + -a', 'يُصِرُّ عَلَى أَنْ · يُطَالِبُ بِأَنْ · يَمْنَعُ أَنْ · يَرْفُضُ أَنْ {e|تَسْتَمِرَّ} …'] },
        { cells: ['L06', 'past perfect', '{p|كَانَتِ} الأَجْيَالُ السَّابِقَةُ {p|قَدْ} نَاضَلَتْ مِنْ أَجْلِ الحُقُوقِ'] },
        { cells: ['P3 · P4', 'both conditionals', '{k|إِذَا} اسْتُثْمِرَ … {k|سَتَضِيقُ} · {m|لَوْ} عُولِجَ … {m|لَتَحَسَّنَ}'] },
        { core: true, cells: ['L05 · L09', 'formal conclusion', '{k|وَبِنَاءً عَلَى مَا سَبَقَ}، يَتَطَلَّبُ الأَمْرُ أَنْ تَتَحَرَّكَ الحُكُومَاتُ'] },
      ],
      ltr: true,
      foot: 'Website reading: “the shared lesson is that every structure has a precise marker.”',
      notes: `GRAMMAR PART 3 — the website vocabulary group “The complete P5 spine”, with one model sentence per structure from P5-L01 to L09.
Revision game (3 min): teacher calls a lesson number; students say a sentence with that structure on a social issue of their choice.
Row 4 agreement (website quiz 7): كَانَتِ الأَجْيَالُ … نَاضَلَتْ — both verbs feminine for a non-human plural.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the assessment questions and what each one invites (P5-L12 topic + role play) · Stretch', title: 'Answer with the structure it invites', ar: 'لِكُلِّ سُؤَالٍ تَرْكِيبُهُ',
      cols: [{ label: 'Task', w: 1.6 }, { label: 'Question / task', w: 4.6, size: 16 }, { label: 'Required', w: 2.3 }, { label: 'Start like this', w: 3.83, size: 16 }],
      rows: [
        { core: true, cells: ['Topic 1', 'مَا أَكْبَرُ تَحَدٍّ اجْتِمَاعِيٍّ يُوَاجِهُ العَالَمَ العَرَبِيَّ؟', 'argument + evidence', 'يُشَكِّلُ … أَكْبَرَ تَحَدٍّ، إِذْ تُشِيرُ …'] },
        { core: true, cells: ['Topic 2', 'هَلْ تُعَمِّقُ التِّكْنُولُوجِيَا عَدَمَ المُسَاوَاةِ؟', 'concession–refutation', '{w|صَحِيحٌ أَنَّ} … {e|غَيْرَ أَنَّهَا} …'] },
        { core: true, cells: ['Topic 3', 'لَوْ كُنْتَ فِي مَوْقِعِ السُّلْطَةِ، مَاذَا كُنْتَ سَتُغَيِّرُ؟', 'Type 2', '{m|لَوْ} كُنْتُ … {m|لَاسْتَثْمَرْتُ} …'] },
        { cells: ['Role play 2–3', 'agree with the other side, then give your strongest point', 'concession + refutation', 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …'] },
        { cells: ['Role play 4', 'say what the solution requires', 'yataṭallabu an + -a', 'يَتَطَلَّبُ الحَلُّ أَنْ {e|نُعِيدَ} …'] },
      ],
      ltr: true,
      foot: 'The P5-L12 role play: a social-justice conference — introduce the issue, concede, refute, state what the solution requires.',
      notes: `GRAMMAR PART 4 — the three topic-conversation questions and the four role-play tasks of the P5-L12 assessment (website L12 data), matched to the structure each one invites.
Speaking rule: hear the question → choose the structure BEFORE you answer. A law question demands law … la-; a “do you think …?” question invites ṣaḥīḥun anna … ghayra anna; a “what does it require?” task demands yataṭallabu an + -a.
Role-play task 1 also expects evidence and reported speech: أَكَّدَتِ الدِّرَاسَاتُ أَنَّ …`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me answer the assessment questions',
    steps: [
      { head: 'Topic 2', ar: '{w|صَحِيحٌ أَنَّ} … {e|غَيْرَ أَنَّهَا} …', think: 'Concede, refute.' },
      { head: 'Demand', ar: 'يُطَالِبُ … {k|بِأَنْ تُوَفِّرَ} …', think: 'an + -a.' },
      { head: 'Topic 3', ar: '{m|لَوْ كُنْتُ} … {m|لَاسْتَثْمَرْتُ} …', think: 'la-!' },
      { head: 'Close', ar: '{p|وَبِنَاءً عَلَى مَا سَبَقَ} … أَنْ …', think: 'Formal.' },
    ],
    legend: ['w', 'e', 'k', 'm', 'p'], legendLabels: { w: 'CONCESSION', e: 'REFUTATION', k: 'TRIGGER', m: 'TYPE 2', p: 'CONCLUSION' },
    model: '{w|صَحِيحٌ أَنَّ} التِّقْنِيَّةَ تُوَفِّرُ فُرَصًا هَائِلَةً، {e|غَيْرَ أَنَّهَا} تُعَمِّقُ الفَجْوَةَ بَيْنَ مَنْ يَمْلِكُونَ وَمَنْ لَا يَمْلِكُونَ. وَيُطَالِبُ الخُبَرَاءُ {k|بِأَنْ تُوَفِّرَ} الدُّوَلُ بُنْيَةً تَحْتِيَّةً رَقْمِيَّةً لِلْجَمِيعِ. {m|وَلَوْ كُنْتُ} فِي مَوْقِعِ السُّلْطَةِ، {m|لَاسْتَثْمَرْتُ} فِي التَّعْلِيمِ الرَّقْمِيِّ أَوَّلًا. {p|وَبِنَاءً عَلَى مَا سَبَقَ}، يَتَطَلَّبُ الأَمْرُ أَنْ تَتَحَرَّكَ الحُكُومَاتُ بِسُرْعَةٍ.',
    modelEn: 'It is true that technology offers enormous opportunities; however, it deepens the gap between those who have and those who do not. Experts demand that states provide digital infrastructure for all. And if I were in a position of power, I would invest in digital education first. Based on the above, the matter requires governments to act quickly.',
    notes: 'I DO (3 min) — the website listening (mock conversation), spoken aloud as an exam answer. Think aloud: “Topic 2 is a ‘do you think’ question, so I concede first — ṣaḥīḥun anna + -u — then ghayra anna-hā. I add a demand: bi-AN tuwaffirA. Topic 3 is a law question, so the result MUST start with LA-. And I close formally.” Do it twice — the second time faster, as fluent speech.',
  },
  patternEn: ['activists demand that states sign — and they confirmed that time is running out', 'it is true that reform requires resources; however, the return is greater', 'based on the above, the matter requires governments to act'],
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · repair the slips (website mistakes + earlier P5 lessons)', title: 'Find it, fix it, name it', ar: 'صَحِّحْ وَسَمِّ الخَطَأَ',
      cols: [{ label: 'Slip', w: 4.4, size: 17 }, { label: 'Correct', w: 4.6, size: 17 }, { label: 'Zone', w: 3.33 }],
      rows: [
        { core: true, cells: ['يُطَالِبُ النَّاشِطُونَ بِأَنَّ تُوَقِّعَ الدُّوَلُ.', 'يُطَالِبُ النَّاشِطُونَ بِأَنْ تُوَقِّعَ الدُّوَلُ.', 'an vs anna'] },
        { core: true, cells: ['صَحِيحٌ أَنَّ التَّعْلِيمَ يَتَطَلَّبَ مَوَارِدَ.', 'صَحِيحٌ أَنَّ التَّعْلِيمَ يَتَطَلَّبُ مَوَارِدَ.', 'concession -u'] },
        { core: true, cells: ['يَتَطَلَّبُ الأَمْرُ أَنْ تَتَحَرَّكُ الحُكُومَاتُ.', 'يَتَطَلَّبُ الأَمْرُ أَنْ تَتَحَرَّكَ الحُكُومَاتُ.', 'conclusion -a'] },
        { cells: ['لَوْ عُولِجَ التَّفَاوُتُ مُبَكِّرًا، تَحَسَّنَ الوَضْعُ.', 'لَوْ عُولِجَ التَّفَاوُتُ مُبَكِّرًا، لَتَحَسَّنَ الوَضْعُ.', 'Type 2 la-'] },
        { cells: ['تُلْزَمُ الدُّوَلُ عَلَى الامْتِثَالِ.', 'تُلْزَمُ الدُّوَلُ بِالامْتِثَالِ.', 'yulzamu bi- (L05)'] },
        { cells: ['يُعِيدُ الشَّبَابُ تَعْرِيفُ النَّاشِطِيَّةِ.', 'يُعِيدُ الشَّبَابُ تَعْرِيفَ النَّاشِطِيَّةِ.', 'object -a (L06)'] },
      ],
      ltr: true,
      foot: 'Website reading: “the shared lesson is that every structure has a precise marker.”',
      notes: `WE DO (3 min) — rows 1–4 are the website reading’s repairs (and mistakes 1–3); rows 5–6 recycle mistakes from P5-L05 and P5-L06. Cover columns 2–3; pairs fix each slip and NAME the zone.
Core: rows 1–3. Develop: all six. Stretch: write two new slips of their own for a partner to repair.
Then each student writes their ONE priority error zone in the chat — collect for L12. (Website reading item 5: غَيْرَ أَنَّ must come AFTER the concession, never before.)`,
    },
    {
      type: 'formsTable', stage: 'wedo', min: 2, flex: true, eyebrow: 'We do · build an assessment answer (website live builder)', title: 'Concession + demand + hypothesis', ar: 'ابْنِ جَوَابَكَ',
      cols: [{ label: '1 · Concession–refutation', w: 4.4, size: 15 }, { label: '2 · Demand (an + -a)', w: 4.0, size: 15 }, { label: '3 · Type 2 / conclusion', w: 3.93, size: 15 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Say it aloud as one fluent answer.',
      notes: `WE DO (flex) — the website live builder (${site.live_builder.target}). Website feedback: ${site.live_builder.feedback}
Use it as oral rehearsal: one student reads a combination as an exam answer; the partner names each structure and checks every an / anna.`,
    },
  ],
  sorterTitle: 'an + -a, anna + noun — or concession -u?',
  sorterCats: ['an (trigger + verb in -a)', 'anna (reported fact)', 'concession → verb in -u'],
  sorterNotes: 'Then say a full sentence for each card as fast as possible — and stress every an (sukūn) and anna (shadda).',
  patch: { vocab: site.vocab.map((g) => ({ ...g, items: g.items.map((it) => ({ ...it, note: VN.reduce((s, [a, b]) => s.replace(a, b), it.note) })) })), grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: { ...site.writing, prompt: 'Write eighty to ninety words preparing for the P5 topic conversation. Answer two of the assessment questions, using a concession–refutation (ṣaḥīḥun anna … ghayra anna), a Type 2 conditional and a subjunctive conclusion, with an and anna used correctly.', checklist: ['A concession (ṣaḥīḥun anna + indicative) answered by a refutation (ghayra anna).', 'an before a subjunctive and anna before a reported fact.', 'A Type 2 conditional with the la- result.', 'A subjunctive conclusion (wa-bināʾan ʿalā mā sabaqa … an …).'] }, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('أَنْ (trigger) vs أَنَّ (report).', 'an (trigger) vs anna (report).') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; لِكَيْ always written with its sukūn; يَصِرُّ → يُصِرُّ throughout; rule formulas, vocabulary notes, pattern tips, writing prompt and checklist in transliteration; sorter headings in transliteration; the an / anna, concession, spine and assessment tables are teacher-built from the website texts and the P5-L12 assessment; the repair table adds two earlier P5 mistakes; no visual game. All other website items are used as published.',
  hints: ['yuṭālibu bi-anna?', 'ṣaḥīḥun anna … yataṭallaba?', 'law … taḥassana?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: ṣaḥīḥun anna · ghayra anna-hā · bi-an · law … la-.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write down the student’s Type 2 sentence word for word.',
  gloss: [
    ['المُعَلِّمُ: هَلْ تَعْتَقِدُ أَنَّ الفَجْوَةَ الرَّقْمِيَّةَ تُعَمِّقُ عَدَمَ المُسَاوَاةِ؟ الطَّالِبُ: صَحِيحٌ أَنَّ التِّقْنِيَّةَ تُوَفِّرُ فُرَصًا هَائِلَةً، غَيْرَ أَنَّهَا تُعَمِّقُ الفَجْوَةَ بَيْنَ مَنْ يَمْلِكُونَ وَمَنْ لَا يَمْلِكُونَ.', 'Teacher: Do you think the digital divide deepens inequality? Student: It is true that technology offers enormous opportunities; however, it deepens the gap between those who have and those who do not.'],
    ['المُعَلِّمُ: وَمَا الحَلُّ؟ الطَّالِبُ: يُطَالِبُ الخُبَرَاءُ بِأَنْ تُوَفِّرَ الدُّوَلُ بُنْيَةً تَحْتِيَّةً رَقْمِيَّةً لِلْجَمِيعِ.', 'Teacher: And what is the solution? Student: Experts demand that states provide digital infrastructure for all.'],
    ['المُعَلِّمُ: لَوْ كُنْتَ فِي مَوْقِعِ السُّلْطَةِ، مَاذَا كُنْتَ سَتُغَيِّرُ؟ الطَّالِبُ: لَوْ كُنْتُ فِي مَوْقِعِ السُّلْطَةِ، لَاسْتَثْمَرْتُ فِي التَّعْلِيمِ الرَّقْمِيِّ أَوَّلًا.', 'Teacher: If you were in a position of power, what would you change? Student: If I were in a position of power, I would invest in digital education first.'],
    ['المُعَلِّمُ: وَكَيْفَ تَخْتِمُ؟ الطَّالِبُ: وَبِنَاءً عَلَى مَا سَبَقَ، يَتَطَلَّبُ الأَمْرُ أَنْ تَتَحَرَّكَ الحُكُومَاتُ بِسُرْعَةٍ.', 'Teacher: And how do you conclude? Student: Based on the above, the matter requires governments to act quickly.'],
    ['المُعَلِّمُ: أَجْوِبَةٌ مُتَوَازِنَةٌ اسْتَعْمَلْتَ فِيهَا التَّسْلِيمَ وَالرَّدَّ تِلْقَائِيًّا.', 'Teacher: Balanced answers in which you used concession and refutation spontaneously.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا أَكْبَرُ تَحَدٍّ اجْتِمَاعِيٍّ يُوَاجِهُ العَالَمَ العَرَبِيَّ؟ وَلِمَاذَا؟' },
      { route: 'develop', ar: 'هَلْ تَعْتَقِدُ أَنَّ الفَجْوَةَ الرَّقْمِيَّةَ تُعَمِّقُ عَدَمَ المُسَاوَاةِ؟' },
      { route: 'stretch', ar: 'لَوْ كُنْتَ مَسْؤُولًا عَنِ السِّيَاسَاتِ الاجْتِمَاعِيَّةِ، مَاذَا كُنْتَ سَتُغَيِّرُ أَوَّلًا؟' },
    ],
    stems: [
      { route: 'core', ar: 'يُشَكِّلُ ______ أَكْبَرَ تَحَدٍّ، لِأَنَّ ______ .' },
      { route: 'develop', ar: 'صَحِيحٌ أَنَّ ______ ، غَيْرَ أَنَّهَا ______ .' },
      { route: 'stretch', ar: 'لَوْ كُنْتُ مَسْؤُولًا، لَاسْتَثْمَرْتُ فِي ______ .' },
    ],
    modelEn: ['Does the digital divide deepen inequality?', 'It is true that technology offers opportunities; however, it deepens the gap.', 'And if you were in charge?', 'If I were in charge, I would invest in digital education first.'],
    notes: 'Website prompts and model — the topic-conversation questions. Pairs: examiner / candidate, 30–40 seconds per answer, then swap. The examiner ticks Structure · Reason · Extra. Then a 2-minute role play (P5-L12 tasks, a social-justice conference): introduce the issue with evidence (أَكَّدَتِ الدِّرَاسَاتُ أَنَّ) · concede (صَحِيحٌ أَنَّ) · refute (غَيْرَ أَنَّ) · say what the solution requires (يَتَطَلَّبُ أَنْ). To a girl: تَعْتَقِدِينَ · كُنْتِ مَسْؤُولَةً · سَتُغَيِّرِينَ.',
  },
  diff: { stretch: 'Deliver fluent answers to the concession and Type 2 questions spontaneously.' },
  write: {
    core: { amount: '6 + 3', how: 'Website Core: correct six P5 errors and write three sentences from memory.' },
    develop: { amount: '2 structures', how: 'Website Develop: add a concession–refutation pair and a Type 2 conditional.' },
    stretch: { amount: '80–90 words', how: 'Website task: answer two assessment questions with a concession–refutation, a Type 2 and a subjunctive conclusion.' },
  },
  frames: {
    core: [
      { en: '… is the biggest social challenge, because …', ar: 'يُشَكِّلُ ______ أَكْبَرَ تَحَدٍّ اجْتِمَاعِيٍّ، لِأَنَّ ______ .' },
      { en: 'Studies confirmed that …', ar: 'أَكَّدَتِ الدِّرَاسَاتُ أَنَّ ______ .' },
      { en: 'Experts demand that states …', ar: 'يُطَالِبُ الخُبَرَاءُ بِأَنْ تُوَفِّرَ الدُّوَلُ ______ .' },
      { en: 'It requires governments to …', ar: 'يَتَطَلَّبُ الأَمْرُ أَنْ تَتَحَرَّكَ ______ .' },
    ],
    develop: [
      { en: 'It is true that …; however, it …', ar: 'صَحِيحٌ أَنَّ ______ ، غَيْرَ أَنَّهَا ______ .' },
      { en: 'If I were in charge, I would invest in …', ar: 'لَوْ كُنْتُ مَسْؤُولًا، لَاسْتَثْمَرْتُ فِي ______ .' },
      { en: 'Earlier generations had struggled for …', ar: 'كَانَتِ الأَجْيَالُ قَدْ نَاضَلَتْ مِنْ أَجْلِ ______ .' },
      { en: 'Based on the above, …', ar: 'وَبِنَاءً عَلَى مَا سَبَقَ، يَتَطَلَّبُ الأَمْرُ أَنْ ______ .' },
    ],
    bank: ['الفَجْوَةُ الرَّقْمِيَّةُ', 'التَّفَاوُتُ الاجْتِمَاعِيُّ', 'بَطَالَةُ الشَّبَابِ', 'بُنْيَةً تَحْتِيَّةً رَقْمِيَّةً', 'الحُكُومَاتُ بِسُرْعَةٍ', 'التِّقْنِيَّةَ تُوَفِّرُ فُرَصًا', 'تُعَمِّقُ الفَجْوَةَ', 'التَّعْلِيمِ الرَّقْمِيِّ', 'المَدَارِسِ النَّائِيَةِ', 'الحُقُوقِ', 'حَقٌّ لَا امْتِيَازٌ', 'لِكَيْ تَضِيقَ الفَجْوَةُ'],
  },
  stretch: [
    ['لَيْسَتْ وَلِيدَةَ اليَوْمِ', 'is not new (not born today)'],
    ['بَيْنَ مَنْ يَمْلِكُونَ الوُصُولَ وَمَنْ لَا يَمْلِكُونَهُ', 'between those who have access and those who do not'],
    ['حَقٌّ لَا امْتِيَازٌ', 'a right, not a privilege'],
    ['فِي المَدَارِسِ النَّائِيَةِ أَوَّلًا', 'in remote schools first'],
    ['لِكَيْ تَضِيقَ الفَجْوَةُ', 'so that the gap narrows'],
  ],
  modelEn: 'It is true that the digital divide is not new; however, it deepens inequality between those who have access and those who do not. Experts demand that states provide digital infrastructure for all, and they confirmed that digital education is a right, not a privilege. If I were responsible for policy, I would invest in remote schools first. Based on the above, the matter requires governments to act quickly so that the gap narrows.',
  find: ['ṣaḥīḥun anna … ghayra anna-hā', 'bi-an tuwaffira · akkadū anna', 'law kuntu … la-stathmartu', 'wa-bināʾan … an tataḥarraka'],
  modelNotes: 'Website writing model. Evidence: صَحِيحٌ أَنَّ … لَيْسَتْ … غَيْرَ أَنَّهَا تُعَمِّقُ · يُطَالِبُ … بِأَنْ تُوَفِّرَ (an + -a) · أَكَّدُوا أَنَّ التَّعْلِيمَ (anna + noun) · لَوْ كُنْتُ … لَاسْتَثْمَرْتُ · وَبِنَاءً عَلَى مَا سَبَقَ … أَنْ تَتَحَرَّكَ … لِكَيْ تَضِيقَ.',
  selfCheck: [
    { route: 'core', text: 'After a trigger I used an + a verb in -a; after a reporting verb, anna + a noun.' },
    { route: 'core', text: 'After ṣaḥīḥun anna my verb ends in -u.' },
    { route: 'develop', text: 'Every concession is answered by ghayra anna (never before it).' },
    { route: 'develop', text: 'My Type 2 result has la-; my conclusion verb ends in -a.' },
    { route: 'stretch', text: 'I answered each assessment question with the structure it invites, and named my priority error.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['تَحْتَوِي عَلَى', 'it contains'], ['القَائِمَةُ', 'the list'], ['أَخْطَاءٍ شَائِعَةٍ', 'common errors'], ['وَالصَّوَابُ', 'and the correct form is'], ['التَّمْيِيزِ بَيْنَ', 'distinguishing between'],
    ['بِالرَّفْعِ', 'with -u (indicative)'], ['جَوَابِ لَوْ', 'the result of law'], ['مَوْضِعِ الرَّدِّ', 'the place of the refutation'], ['مَوْقِعِ السُّلْطَةِ', 'a position of power'], ['تِلْقَائِيًّا', 'spontaneously'],
  ],
  prep: {
    words: [['تَقْيِيمٌ', 'an assessment', 'pl. تَقْيِيمَاتٌ'], ['لَعِبُ الأَدْوَارِ', 'a role play', '—'], ['المَوْقِفُ المُضَادُّ', 'the opposing position', '—'], ['عَلَامَةُ الدِّقَّةِ', 'an accuracy mark', 'pl. عَلَامَاتٌ'], ['يُعَالِجُ', 'addresses, treats', 'f. تُعَالِجُ']],
    questionEn: 'Prepare answers to the three topic-conversation questions — each with its required structure and a reason.',
    questionAr: 'يُشَكِّلُ … أَكْبَرَ تَحَدٍّ · صَحِيحٌ أَنَّ … غَيْرَ أَنَّ … · لَوْ كُنْتُ … لَـ …',
    homework: {
      core: 'Correct six P5 errors and write three spine sentences from memory.',
      develop: 'Write an an-sentence, an anna-sentence, a concession–refutation and a Type 2; check each against the spine table.',
      stretch: 'Website writing task: an 80–90-word answer to two assessment questions; record it aloud.',
    },
    wordsSource: 'The five words prepare students for the P5-L12 assessment (its parts, the topic questions and the role play).',
  },
  remember: 'Remember: a trigger → an + verb in -A; a report → anna + noun; ṣaḥīḥun anna keeps -U; answer it with ghayra anna; law … LA-; close with wa-bināʾan ʿalā mā sabaqa + -a — and answer each question with the structure it invites.',
});

module.exports = { meta, slides };
