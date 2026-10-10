'use strict';
/* P5-L10 · Listening — Social Issues and Opinions Texts — website: Pathways › Progression › P5 › P5-L10 (listening-skills lesson: follow an argument by
 * its shape — thesis → evidence → صَحِيحٌ أَنَّ (a point CONCEDED to the other side) → غَيْرَ أَنَّ (the speaker’s real position) → trigger / conditionals →
 * وَبِنَاءً عَلَى مَا سَبَقَ — and predict what comes next). The website listening (an academic on social inequality) is split into two short listens with one
 * teacher-added question (the Type 1 forecast). Website vocabulary, rules, quiz, sorter, mistakes, listening, reading (strategy guide), speaking, writing,
 * live builder and mission used as published, with waṣl alif shown without a kasra, لِكَيْ always written with its sukūn and يَصِرُّ → يُصِرُّ (vocabulary,
 * as in P5-L03). No visual game (the website card set is beginner-level). Sorter headings in transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P5')({
  n: 10, fileTitle: 'Listening_Social_Issues_Texts', chip: 'Listening Skills',
  title: 'Listening — Social Issues and Opinions Texts', arabic: 'الاسْتِمَاعُ — نُصُوصُ القَضَايَا الاجْتِمَاعِيَّةِ وَالآرَاءِ',
  focus: 'Follow an argument by its shape: the thesis comes first; ṣaḥīḥun anna = a point the speaker CONCEDES to the other side; ghayra anna = the speaker’s real position; yataṭallabu an = the demand; sa- / la- decide the conditional; wa-bināʾan ʿalā mā sabaqa = the end.',
  icon: 'FaHeadphones', iconSet: 'fa6',
});

const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ').replace(/يَصِرُّ/g, 'يُصِرُّ'));
const site = fix(D.site('P5-L10'));
const RH = [['Find the thesis', 'introduction → position'], ['Concession signal', 'ṣaḥīḥun anna → a conceded point'], ['Refutation signal', 'ghayra anna → the stronger point'], ['Trigger and conditionals', 'yataṭallabu an · idhā … sa- · law … la-']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const S = site.listening.script;
const cut = S.indexOf('إِذَا اسْتُثْمِرَ');
const T1 = S.slice(0, cut).trim();
const T2 = S.slice(cut).trim();
const LB = site.live_builder.groups;

const slides = D.devLesson('P5-L10', {
  support: `• LISTENING-SKILLS LESSON (IGCSE Paper 1 style): the website listening is played as two short listens, each twice. The grammar slides are a listening toolkit built on the essay architecture of P5-L07 to L09.
• Core: annotate five questions with the argument element you will listen for — thesis, concession, refutation or trigger (website Core). Develop: add whether each point belongs to the other side or to the speaker. Stretch: explain how the structure let you predict the refutation before hearing it.
• The key Paper 1 trap (website teaching point 2): the point after ṣaḥīḥun anna is NOT the speaker’s view — it is conceded to the other side. The speaker’s real position comes after ghayra anna. The P5 listening target on the website is 14+ out of 20.
• Grammar links: concession–refutation (P5-L01, L07, L08) · result markers by ear (P3-L10, P4-L10) · passive past (P5-L02, L05).`,
  teach: 'Signal → job → whose view, the attribution trap, conditionals and triggers by ear, the strategy guide.',
  wedo: 'Two short listens, build a heard-argument report, sort thesis / concession–refutation / subjunctive–conditional.',
  next: { nextCode: 'P5-L11', nextTitle: 'Consolidation — Speaking Preparation and P5 Complete Review', nextAr: 'تَرْسِيخُ الوَحْدَةِ — إِعْدَادُ التَّحَدُّثِ' },
  objectives: ['Predict which argument element each question targets before listening.', 'Hear ṣaḥīḥun anna as a concession signal and ghayra anna as the refutation.', 'Catch subjunctive triggers and both conditional types in fast speech.', 'Reach the P5 listening target of fourteen or more out of twenty.'],
  rulesAr: 'سَمَاعُ بِنْيَةِ الحُجَّةِ',
  ruleEx: [['يُشَارُ إِلَى أَنَّ التَّفَاوُتَ يُهَدِّدُ الاسْتِقْرَارَ'], ['صَحِيحٌ أَنَّ الإِصْلَاحَاتِ تَحْتَاجُ وَقْتًا طَوِيلًا'], ['غَيْرَ أَنَّ الحَاجَةَ المُلِحَّةَ لَا تَتَحَمَّلُ الانْتِظَارَ'], ['يَتَطَلَّبُ الوَضْعُ أَنْ تَتَحَرَّكَ الحُكُومَاتُ فَوْرًا', 'لَوْ عُولِجَ التَّفَاوُتُ مُبَكِّرًا، لَتَحَسَّنَ الوَضْعُ']],
  doNow: {
    questions: [
      q('What does إِشَارَةُ التَّسْلِيمِ mean?', ['the concession signal', 'a traffic signal', 'the final answer'], 'Prepared at home (P5-L09).'),
      q('What does مَوْقِفُ المُتَحَدِّثِ mean?', ['the speaker’s position', 'the speaker’s seat', 'the speaker’s question'], 'Prepared at home (P5-L09).'),
      q('What does مُنْحَازٌ mean?', ['one-sided, partisan', 'balanced', 'silent'], 'Prepared at home (P5-L09).'),
      q('Which is a thesis, not just a topic?', ['الهِجْرَةُ تُثْرِي المُجْتَمَعَاتِ أَكْثَرَ مِمَّا تُضْعِفُهَا.', 'الهِجْرَةُ مَوْضُوعٌ مُهِمٌّ.', 'سَأَتَحَدَّثُ عَنِ الهِجْرَةِ.'], 'P5-L09: a position to defend.'),
      q('Complete: لَوْ فُتِحَتِ الأَبْوَابُ مُبَكِّرًا، ___ التَّوَتُّرَ.', ['لَتَجَنَّبْنَا', 'سَنَتَجَنَّبُ', 'نَتَجَنَّبُ'], 'P5-L09: Type 2 → la-.'),
    ],
    keyIdea: { text: 'An argument always has the same shape — so when you hear “ṣaḥīḥun anna”, you already know what comes next.', ar: '{w|صَحِيحٌ أَنَّ} = الطَّرَفُ الآخَرُ · {e|غَيْرَ أَنَّ} = رَأْيُ المُتَحَدِّثِ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P5-L09. Questions 4–5 retrieve the thesis and the Type 2 (P5-L09) — today students hear the essay architecture they have just written.',
  },
  routes: {
    core: ['I can hear the thesis in the introduction.', 'I can answer 5 questions from the two listens.'],
    develop: ['I can say whose view follows ṣaḥīḥun anna.', 'I can hear sa- / la- and name the conditional.'],
    stretch: ['I can predict the refutation before I hear it.', 'I can judge the speaker: balanced or partisan.'],
  },
  bridge: [
    { ar: 'إِشَارَةٌ', urdu: 'اشارہ', tr: 'ishāra', en: 'a signal, a sign' },
    { ar: 'مَوْقِفٌ', urdu: 'موقف', tr: 'mauqif', en: 'a position, a stance' },
    { ar: 'تَوَازُنٌ · مُتَوَازِنٌ', urdu: 'توازن', tr: 'tawāzun', en: 'balance · balanced' },
    { ar: 'إِصْلَاحٌ', urdu: 'اصلاح', tr: 'islāh', en: 'reform, correction' },
    { ar: 'سَمَاعٌ', urdu: 'سماعت', tr: 'samāat', en: 'Arabic: hearing (listening) · Urdu: a court hearing' },
  ],
  bridgeNotes: 'URDU BRIDGE: اشارہ, موقف, توازن and اصلاح are shared — the whole lesson is about hearing the اشارہ (signal) that shows the speaker’s موقف (position). Remember: Urdu سماعت is a court hearing; Arabic السَّمَاعُ / الاسْتِمَاعُ = listening.',
  core: ['الأُطْرُوحَةُ', 'إِشَارَةُ التَّسْلِيمِ', 'إِشَارَةُ الرَّدِّ', 'مَوْقِفُ المُتَحَدِّثِ', 'التَّنَبُّؤُ بِمَا يَلِي', 'مُتَوَازِنٌ', 'مُنْحَازٌ', 'التَّفَاوُتُ الاجْتِمَاعِيُّ', 'الإِصْلَاحَاتُ', 'الحَاجَةُ المُلِحَّةُ', 'الاسْتِقْرَارُ الاجْتِمَاعِيُّ', 'العَدَالَةُ الاجْتِمَاعِيَّةُ'],
  forms: {
    'مُتَوَازِنٌ': { tag: 'm · f', forms: [{ l: 'f.', ar: 'مُتَوَازِنَةٌ' }] }, 'مُنْحَازٌ': { tag: 'm · f', forms: [{ l: 'f.', ar: 'مُنْحَازَةٌ' }] },
    'الإِصْلَاحَاتُ': { tag: 'pl · sg', forms: [{ l: 'sg.', ar: 'إِصْلَاحٌ' }] }, 'الأُطْرُوحَةُ': sp('الأُطْرُوحَاتُ'), 'إِشَارَةُ التَّسْلِيمِ': sp('إِشَارَاتُ التَّسْلِيمِ'),
    'مَوْقِفُ المُتَحَدِّثِ': { tag: 'm · f', forms: [{ l: 'f.', ar: 'مَوْقِفُ المُتَحَدِّثَةِ' }] },
  },
  vocabNotes: {
    0: 'Listening for structure: الأُطْرُوحَةُ (thesis) comes in the introduction; إِشَارَةُ التَّسْلِيمِ (the concession signal) = صَحِيحٌ أَنَّ; إِشَارَةُ الرَّدِّ (the refutation signal) = غَيْرَ أَنَّ. A speaker who concedes and then refutes is مُتَوَازِنٌ; one who never concedes is مُنْحَازٌ.',
    1: 'Content you will hear — the social-issue words of P5. الحَاجَةُ المُلِحَّةُ = the pressing need; لَا تَتَحَمَّلُ الانْتِظَارَ = cannot bear waiting. These words usually arrive right AFTER the signal.',
    2: 'Grammar markers by ear: a checklist for the two listens — ṣaḥīḥun anna · ghayra anna · yataṭallabu an · law … la- · idhā … sa- · wa-bināʾan ʿalā mā sabaqa · yuṣirru ʿalā an · kāna qad.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · signal → job → whose view (website rules 1–3, table and teaching point 1) · Core', title: 'What you hear, what it means', ar: 'الإِشَارَةُ وَوَظِيفَتُهَا',
      cols: [{ label: 'You hear', w: 3.0, size: 18 }, { label: 'It signals', w: 2.2 }, { label: 'Whose view?', w: 1.9 }, { label: 'Example (website listening)', w: 5.23, size: 16 }],
      rows: [
        { core: true, cells: ['{p|أُطْرُوحَتِي أَنَّ}', 'the thesis', 'the speaker', 'أُطْرُوحَتِي أَنَّ التَّفَاوُتَ الاجْتِمَاعِيَّ يُهَدِّدُ الاسْتِقْرَارَ'] },
        { cells: ['{m|أَكَّدَتِ الدِّرَاسَاتُ أَنَّ}', 'evidence', 'the studies', 'أَكَّدَتِ الدِّرَاسَاتُ أَنَّ الفَجْوَةَ … تَتَّسِعُ'] },
        { core: true, cells: ['{w|صَحِيحٌ أَنَّ}', 'a conceded point', 'the OTHER side', 'صَحِيحٌ أَنَّ الإِصْلَاحَاتِ تَحْتَاجُ وَقْتًا طَوِيلًا'] },
        { core: true, cells: ['{e|غَيْرَ أَنَّ}', 'the stronger point', 'the speaker', 'غَيْرَ أَنَّ الحَاجَةَ المُلِحَّةَ لَا تَتَحَمَّلُ الانْتِظَارَ'] },
        { cells: ['{k|وَبِنَاءً عَلَى مَا سَبَقَ}', 'the conclusion', 'the speaker', 'العَدَالَةُ الاجْتِمَاعِيَّةُ ضَرُورَةٌ لَا رَفَاهِيَةٌ'] },
      ],
      ltr: true,
      foot: 'Website teaching point: once you hear ṣaḥīḥun anna, a concession is coming — and the stronger point follows soon after.',
      notes: `GRAMMAR PART 1 — website rules “Find the thesis”, “Concession signal” and “Refutation signal”, the website table and teaching point 1 (“Argument speech has a predictable shape”).
Pre-listening routine: write T · E · C · R · Con down the margin. As you hear each signal, tick it — you always know where you are in the talk.
Row 1: the speaker says أُطْرُوحَتِي (my thesis) — a gift! Most speakers are less explicit; then the thesis is simply the FIRST claim.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · the attribution trap (website teaching point 2, mistake 1, quiz 4) · Develop', title: 'Whose view is it?', ar: 'رَأْيُ مَنْ؟',
      cards: [
        { chip: 'CONCEDED · CORE', color: '1D5FBF', head: 'الطَّرَفُ الآخَرُ', big: 'صَحِيحٌ أَنَّ الإِصْلَاحَاتِ تَحْتَاجُ وَقْتًا.', en: 'True, reforms need time. (the OTHER side’s point)', clue: 'not the speaker’s view' },
        { chip: 'REFUTED · CORE', color: 'C0386B', head: 'المُتَحَدِّثُ', big: 'غَيْرَ أَنَّ الحَاجَةَ المُلِحَّةَ لَا تَتَحَمَّلُ الانْتِظَارَ.', en: 'However, the pressing need cannot wait. (the SPEAKER)', clue: 'the real position' },
        { chip: 'PREDICT · STRETCH', color: '6B4C9A', head: 'تَنَبَّأْ', big: 'صَحِيحٌ أَنَّ … ← غَيْرَ أَنَّ …', en: 'Hear the concession → expect the opposite.', clue: 'the answer is coming' },
      ],
      error: { text: 'Website mistake 1: the point after ṣaḥīḥun anna is a concession to the other side — not the speaker’s final view.', pairs: [['تَسْلِيمٌ بِرَأْيِ الطَّرَفِ الآخَرِ', 'رَأْيُ المُتَحَدِّثِ النِّهَائِيُّ']] },
      notes: `GRAMMAR PART 2 — website teaching point 2 (“ṣaḥīḥun anna signals conceding, not asserting”), mistake 1 and quiz 4.
The Paper 1 trap: a question asks “What does the speaker think about reforms?” — the option “reforms need time” is TRUE in the text but is the conceded point. The correct option is what follows ghayra anna.
Card 3: prediction. As soon as students hear ṣaḥīḥun anna, they should whisper “ghayra anna is coming” — and listen for the opposite idea.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · conditionals and triggers by ear (website rule 4, mistake 2, quiz 5–7) · Develop', title: 'Wait for the marker', ar: 'انْتَظِرِ العَلَامَةَ',
      cols: [{ label: 'You hear', w: 2.8, size: 18 }, { label: 'Then', w: 1.9, size: 18 }, { label: 'It means', w: 2.6 }, { label: 'Example (website listening)', w: 5.03, size: 16 }],
      rows: [
        { core: true, cells: ['{k|إِذَا} …', '{k|سَـ}', 'a real plan (Type 1)', 'إِذَا اسْتُثْمِرَ فِي التَّعْلِيمِ المُبَكِّرِ، سَتَضِيقُ الفَجْوَةُ'] },
        { core: true, cells: ['{m|لَوْ} …', '{m|لَـ}', 'it did NOT happen (Type 2)', 'لَوْ عُولِجَ التَّفَاوُتُ قَبْلَ عُقُودٍ، لَتَحَسَّنَ الوَضْعُ'] },
        { cells: ['{e|يَتَطَلَّبُ … أَنْ}', 'verb in -a', 'a demand (not done yet)', 'يَتَطَلَّبُ الوَضْعُ أَنْ تَتَحَرَّكَ الحُكُومَاتُ فَوْرًا'] },
        { cells: ['اسْتُثْمِرَ · عُولِجَ', 'u … i', 'a passive past (no doer)', 'إِذَا اسْتُثْمِرَ فِي التَّعْلِيمِ … · لَوْ عُولِجَ التَّفَاوُتُ …'] },
        { cells: ['… لَا …', 'noun', 'X, not Y', 'العَدَالَةُ ضَرُورَةٌ لَا رَفَاهِيَةٌ'] },
      ],
      ltr: true,
      foot: 'Website mistake 2: law with a la- result is a supposition — not a real plan.',
      notes: `GRAMMAR PART 3 — website rule “Trigger and conditionals”, mistake 2, quiz 5–7 and mission rounds 7, 8 and 12.
Listening rule: do NOT decide the conditional when you hear the first word — wait for the result marker (sa- / la-). Mission round 12: «لَوْ عُولِجَ … لَتَحَسَّنَ» means the early treatment did NOT happen.
Row 4: two passive pasts by ear — اسْتُثْمِرَ (ustuthmira, “was invested”) and عُولِجَ (ʿūlija, “was treated”). The u-sound at the start is the clue.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the strategy guide (website reading, mistake 3 and writing model) · Stretch', title: 'Before, during, after', ar: 'قَبْلَ الاسْتِمَاعِ وَأَثْنَاءَهُ وَبَعْدَهُ',
      cols: [{ label: 'Stage', w: 1.7 }, { label: 'What I do', w: 3.6 }, { label: 'From the website strategy guide', w: 7.03, size: 16 }],
      rows: [
        { core: true, cells: ['before', 'read the questions, label each one', 'أَقْرَأُ الأَسْئِلَةَ وَأَتَتَبَّعُ بِنْيَةَ الحُجَّةِ لَا الكَلِمَاتِ المُفْرَدَةَ'] },
        { core: true, cells: ['during 1', 'catch the thesis', 'اسْتَمِعْ أَوَّلًا إِلَى الأُطْرُوحَةِ فِي المُقَدِّمَةِ'] },
        { cells: ['during 2', 'concession → expect the refutation', 'تَرَقَّبْ «صَحِيحٌ أَنَّ» … وَبَعْدَهَا يَأْتِي الرَّدُّ بِـ«غَيْرَ أَنَّ»'] },
        { cells: ['during 3', 'trigger and conditional', 'تَرَقَّبْ «يَتَطَلَّبُ أَنْ» لِلْخَاتِمَةِ، وَ«لَوْ» مَعَ «لَـ» لِلشَّرْطِ الافْتِرَاضِيِّ'] },
        { cells: ['after', 'keep going if words slip past', 'فَإِذَا عَرَفْتَ البِنْيَةَ، تَنَبَّأْتَ بِمَا يَلِي، وَتَابَعْتَ الحُجَّةَ وَلَوْ فَاتَتْكَ كَلِمَاتٌ'] },
      ],
      ltr: true,
      foot: 'Website mistake 3: do not chase every word — follow the structure, even when words slip past.',
      notes: `GRAMMAR PART 4 — the website reading (a listening strategy guide), mistake 3 and the website writing model.
Note the imperatives in the guide (تَتَبَّعْ · اسْتَمِعْ · تَرَقَّبْ) — useful verbs for the writing task, where students turn them into the first person (أَتَتَبَّعُ · أُصْغِي · أَتَرَقَّبُ).
وَلَوْ فَاتَتْكَ كَلِمَاتٌ = even if some words escape you — here وَلَوْ means “even if”, not a Type 2.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me plan my listening',
    steps: [
      { head: 'Before', ar: 'أَقْرَأُ الأَسْئِلَةَ وَأُحَدِّدُ العُنْصُرَ', think: 'Label.' },
      { head: 'Thesis', ar: '{p|الأُطْرُوحَةُ} فِي المُقَدِّمَةِ', think: 'First claim.' },
      { head: 'Concede → refute', ar: '{w|«صَحِيحٌ أَنَّ»} ← {e|«غَيْرَ أَنَّ»}', think: 'Whose view?' },
      { head: 'Close', ar: '{k|«يَتَطَلَّبُ أَنْ»} · {m|«لَوْ» + «لَـ»}', think: 'Wait for it.' },
    ],
    legend: ['p', 'w', 'e', 'k', 'm'], legendLabels: { p: 'THESIS', w: 'CONCESSION', e: 'REFUTATION', k: 'TRIGGER', m: 'TYPE 2' },
    model: 'قَبْلَ الاسْتِمَاعِ إِلَى نَصٍّ جَدَلِيٍّ، أَقْرَأُ الأَسْئِلَةَ وَأَتَتَبَّعُ بِنْيَةَ الحُجَّةِ لَا الكَلِمَاتِ المُفْرَدَةَ. أُصْغِي أَوَّلًا إِلَى {p|الأُطْرُوحَةِ} فِي المُقَدِّمَةِ. ثُمَّ أَتَرَقَّبُ {w|«صَحِيحٌ أَنَّ»}، فَهِيَ تَسْلِيمٌ بِرَأْيِ الطَّرَفِ الآخَرِ، لَا رَأْيُ المُتَحَدِّثِ. وَبَعْدَهَا يَأْتِي الرَّدُّ بِـ{e|«غَيْرَ أَنَّ»}، وَهُوَ المَوْقِفُ الأَقْوَى. وَأَتَرَقَّبُ {k|«يَتَطَلَّبُ أَنْ»} لِلْخَاتِمَةِ، وَ{m|«لَوْ» مَعَ «لَـ»} لِلشَّرْطِ الافْتِرَاضِيِّ.',
    modelEn: 'Before listening to an argumentative text, I read the questions and follow the structure of the argument, not single words. I listen first for the thesis in the introduction. Then I wait for “ṣaḥīḥun anna”, which is a concession to the other side, not the speaker’s view. After it comes the response with “ghayra anna”, which is the stronger position. And I wait for “yataṭallabu an” for the conclusion, and “law” with “la-” for the hypothetical conditional.',
    notes: 'I DO (3 min) — from the website writing model. Model it on the question paper: write the element you expect next to each question number (Q1 → thesis · Q3 → concession · Q4 → refutation · Q5 → law … la- · Q6 → yataṭallabu). Then play Part 1 and tick the signals as you hear them.',
  },
  patternEn: ['it is true that reforms need a long time', 'however, the pressing need cannot bear waiting', 'the situation requires governments to act immediately'],
  listenParts: [
    {
      title: 'Part 1: thesis, evidence, concession, refutation', script: T1, q: [0, 1, 2, 3], min: 3,
      tip: 'Label first: thesis · evidence · concession · refutation.\nListen for: uṭrūḥatī anna · akkadat · ṣaḥīḥun anna · ghayra anna.',
      routes: 'Core: questions 1, 3 and 4. Develop/Stretch: all four — and say whose view each answer is (the speaker or the other side).',
      gloss: [
        ['يَقُولُ الأَكَادِيمِيُّ: أُطْرُوحَتِي أَنَّ التَّفَاوُتَ الاجْتِمَاعِيَّ يُهَدِّدُ الاسْتِقْرَارَ.', 'The academic says: my thesis is that social inequality threatens stability.'],
        ['أَكَّدَتِ الدِّرَاسَاتُ أَنَّ الفَجْوَةَ بَيْنَ الأَغْنِيَاءِ وَالفُقَرَاءِ تَتَّسِعُ.', 'Studies have confirmed that the gap between rich and poor is widening.'],
        ['صَحِيحٌ أَنَّ الإِصْلَاحَاتِ تَحْتَاجُ وَقْتًا طَوِيلًا وَمَوَارِدَ ضَخْمَةً، غَيْرَ أَنَّ الحَاجَةَ الاجْتِمَاعِيَّةَ المُلِحَّةَ لَا تَتَحَمَّلُ الانْتِظَارَ.', 'It is true that reforms need a long time and huge resources; however, the pressing social need cannot bear waiting.'],
      ],
    },
    {
      title: 'Part 2: if, had, requires — the speaker’s stance', script: T2, q: [4, 5, 6, 7], min: 3,
      extra: [L('What will happen if there is investment in early education?', ['the gap will narrow gradually', 'the gap will widen', 'nothing will change'], 'إِذَا اسْتُثْمِرَ فِي التَّعْلِيمِ المُبَكِّرِ، سَتَضِيقُ الفَجْوَةُ تَدْرِيجِيًّا.')],
      tip: 'Label first: Type 2 · trigger · balance · stance · Type 1.\nListen for: law … la- · yataṭallabu an · wa-bināʾan · idhā … sa-.',
      routes: 'Core: questions 1, 2 and 4. Develop/Stretch: all five — and for question 1, say what did NOT happen (inequality was not addressed decades ago).',
      gloss: [
        ['إِذَا اسْتُثْمِرَ فِي التَّعْلِيمِ المُبَكِّرِ، سَتَضِيقُ الفَجْوَةُ تَدْرِيجِيًّا. وَلَوْ عُولِجَ التَّفَاوُتُ قَبْلَ عُقُودٍ، لَتَحَسَّنَ الوَضْعُ كَثِيرًا.', 'If there is investment in early education, the gap will narrow gradually. And had inequality been addressed decades ago, the situation would have improved greatly.'],
        ['وَيَتَطَلَّبُ الوَضْعُ أَنْ تَتَحَرَّكَ الحُكُومَاتُ فَوْرًا.', 'And the situation requires governments to act immediately.'],
        ['وَبِنَاءً عَلَى مَا سَبَقَ، فَإِنَّ مَوْقِفِي وَاضِحٌ: العَدَالَةُ الاجْتِمَاعِيَّةُ ضَرُورَةٌ لَا رَفَاهِيَةٌ.', 'Based on the above, my position is clear: social justice is a necessity, not a luxury.'],
      ],
    },
  ],
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 2, flex: true, eyebrow: 'We do · report what you heard (website live builder)', title: 'Thesis + concession–refutation + conclusion', ar: 'تَقْرِيرٌ عَمَّا سَمِعْتَ',
      cols: [{ label: '1 · The thesis', w: 3.8, size: 15 }, { label: '2 · Conceded, then refuted', w: 4.5, size: 15 }, { label: '3 · The conclusion', w: 4.03, size: 15 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Say it, then write three different versions.',
      notes: `WE DO (flex) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Use after the two listens: students retell the academic’s talk in the third person with the reporting verbs سَلَّمَ بِـ (conceded) · رَدَّ بِـ (responded with) · خَتَمَ بِـ (closed with). Row 1 matches the listening exactly.`,
    },
  ],
  sorterTitle: 'Thesis, concession–refutation — or subjunctive / conditional?',
  sorterCats: ['thesis', 'concession / refutation', 'subjunctive / conditional'],
  sorterNotes: 'Then read each card aloud at full speed and let a partner sort it by ear only (eyes closed) — they must catch the signal word.',
  patch: { vocab: site.vocab.map((g) => ({ ...g, items: g.items.map((it) => ({ ...it, note: it.note.replace('صَحِيحٌ أَنَّ.', 'ṣaḥīḥun anna.').replace('غَيْرَ أَنَّ.', 'ghayra anna.') })) })), grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: { ...site.writing, prompt: 'Write eighty to ninety words explaining your listening strategy for argumentative texts. Describe how you find the thesis, hear ṣaḥīḥun anna as a concession and ghayra anna as the refutation, and catch a subjunctive trigger and a Type 2 conditional.', checklist: ['The rule that you follow the argument’s structure, not single words.', 'ṣaḥīḥun anna signals a concession to the other side.', 'ghayra anna signals the speaker’s stronger point.', 'How you catch a subjunctive trigger and a Type 2 conditional.'] }, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('Concession signal صَحِيحٌ أَنَّ.', 'Concession signal: ṣaḥīḥun anna.').replace('Refutation signal غَيْرَ أَنَّ.', 'Refutation signal: ghayra anna.') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'the website listening is split into two short listens with one teacher-added question (the Type 1 forecast); waṣl alif shown without a kasra; لِكَيْ always written with its sukūn; يَصِرُّ → يُصِرُّ (vocabulary); rule formulas, vocabulary notes, pattern tips, writing prompt and checklist in transliteration; sorter headings in transliteration; the signal, attribution, marker and strategy tables are teacher-built from the website listening and reading; no visual game. All other website items are used as published.',
  hints: ['ṣaḥīḥun anna = the speaker’s view?', 'law + la- = a real plan?', 'catching every word?'],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا أُطْرُوحَةُ المُتَحَدِّثِ؟' },
      { route: 'develop', ar: 'بِمَ سَلَّمَ، وَكَيْفَ رَدَّ؟' },
      { route: 'stretch', ar: 'هَلْ مَوْقِفُهُ مُتَوَازِنٌ أَمْ مُنْحَازٌ؟ وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'أُطْرُوحَةُ المُتَحَدِّثِ أَنَّ ______ .' },
      { route: 'develop', ar: 'سَلَّمَ بِأَنَّ ______ ، ثُمَّ رَدَّ بِأَنَّ ______ .' },
      { route: 'stretch', ar: 'مَوْقِفُهُ ______ ، لِأَنَّهُ يُسَلِّمُ ثُمَّ يَرُدُّ.' },
    ],
    modelEn: ['What did the speaker concede?', 'He conceded “it is true that reforms need time” — that is the other side’s view.', 'And how did he respond?', 'He responded “however, the pressing need cannot wait” — that is his stronger position.'],
    notes: 'Website prompts and model. Pairs replay the academic’s talk from memory: A names a signal (ṣaḥīḥun anna · ghayra anna · law), B gives the sentence it introduced and says whose view it is. Swap. For a female speaker: سَلَّمَتْ · رَدَّتْ · مَوْقِفُهَا.',
  },
  diff: { core: 'Annotate five questions with the element (thesis / concession / refutation / trigger) you will listen for.' },
  write: {
    core: { amount: '5 questions', how: 'Website Core: annotate five questions with the argument element you will listen for.' },
    develop: { amount: '5 questions + whose view', how: 'Website Develop: add whether each point belongs to the other side or the speaker.' },
    stretch: { amount: '80–90 words', how: 'Website task: explain your listening strategy — thesis, ṣaḥīḥun anna, ghayra anna, the trigger, law … la-.' },
  },
  frames: {
    core: [
      { en: 'Before listening, I read the questions.', ar: 'قَبْلَ الاسْتِمَاعِ، أَقْرَأُ الأَسْئِلَةَ وَأُحَدِّدُ ______ .' },
      { en: 'I listen first for the thesis in …', ar: 'أُصْغِي أَوَّلًا إِلَى الأُطْرُوحَةِ فِي ______ .' },
      { en: '“ṣaḥīḥun anna” is a concession to …', ar: '«صَحِيحٌ أَنَّ» تَسْلِيمٌ بِرَأْيِ ______ .' },
      { en: '“ghayra anna” introduces …', ar: '«غَيْرَ أَنَّ» تَأْتِي بِـ ______ .' },
    ],
    develop: [
      { en: 'I follow the structure, not single words, because …', ar: 'أَتَتَبَّعُ البِنْيَةَ لَا الكَلِمَاتِ المُفْرَدَةَ، لِأَنَّ ______ .' },
      { en: 'I wait for “yataṭallabu an” for …', ar: 'أَتَرَقَّبُ «يَتَطَلَّبُ أَنْ» لِـ ______ .' },
      { en: '“law” with “la-” means …', ar: '«لَوْ» مَعَ «لَـ» تَعْنِي ______ .' },
      { en: 'So I predict what follows, even if …', ar: 'وَهٰكَذَا أَتَنَبَّأُ بِمَا يَلِي وَلَوْ ______ .' },
    ],
    bank: ['العُنْصُرَ المَطْلُوبَ', 'المُقَدِّمَةِ', 'الطَّرَفِ الآخَرِ', 'المَوْقِفِ الأَقْوَى', 'البِنْيَةَ تُسَاعِدُنِي عَلَى التَّنَبُّؤِ', 'لِلْخَاتِمَةِ', 'شَرْطًا افْتِرَاضِيًّا', 'فَاتَتْنِي بَعْضُ الكَلِمَاتِ', 'مُتَوَازِنٌ', 'مُنْحَازٌ', 'سَلَّمَ بِـ', 'رَدَّ بِـ'],
  },
  stretch: [
    ['أَتَتَبَّعُ بِنْيَةَ الحُجَّةِ', 'I follow the structure of the argument'],
    ['لَا الكَلِمَاتِ المُفْرَدَةَ', 'not single words'],
    ['تَسْلِيمٌ بِرَأْيِ الطَّرَفِ الآخَرِ', 'a concession to the other side'],
    ['وَهُوَ المَوْقِفُ الأَقْوَى', 'which is the stronger position'],
    ['وَلَوْ فَاتَتْنِي بَعْضُ الكَلِمَاتِ', 'even if some words escape me'],
  ],
  modelEn: 'Before listening to an argumentative text, I read the questions and follow the structure of the argument, not single words. I listen first for the thesis in the introduction. Then I wait for “ṣaḥīḥun anna”, which is a concession to the other side, not the speaker’s view. After it comes the response with “ghayra anna”, which is the stronger position. I wait for “yataṭallabu an” for the conclusion, and “law” with “la-” for the hypothetical conditional. In this way I predict what follows and follow the argument, even if some words escape me.',
  find: ['the structure, not single words', 'ṣaḥīḥun anna: the other side', 'ghayra anna: the stronger position', 'law + la-: hypothetical'],
  modelNotes: 'Website writing model. Evidence: أَتَتَبَّعُ بِنْيَةَ الحُجَّةِ لَا الكَلِمَاتِ المُفْرَدَةَ · أُصْغِي أَوَّلًا إِلَى الأُطْرُوحَةِ · «صَحِيحٌ أَنَّ» … تَسْلِيمٌ بِرَأْيِ الطَّرَفِ الآخَرِ · «غَيْرَ أَنَّ» … المَوْقِفُ الأَقْوَى · «يَتَطَلَّبُ أَنْ» لِلْخَاتِمَةِ · «لَوْ» مَعَ «لَـ» · أَتَنَبَّأُ بِمَا يَلِي.',
  selfCheck: [
    { route: 'core', text: 'Before listening, I labelled each question: thesis, concession, refutation or trigger.' },
    { route: 'core', text: 'I caught the thesis in the introduction.' },
    { route: 'develop', text: 'I gave the point after ṣaḥīḥun anna to the OTHER side.' },
    { route: 'develop', text: 'I waited for sa- / la- before deciding the conditional.' },
    { route: 'stretch', text: 'I predicted the refutation and judged the speaker: balanced or partisan.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['أُطْرُوحَتِي', 'my thesis'], ['تَتَّسِعُ', 'is widening'], ['لَا تَتَحَمَّلُ', 'cannot bear'], ['الانْتِظَارَ', 'waiting'], ['تَدْرِيجِيًّا', 'gradually'],
    ['عُولِجَ', 'was treated, addressed'], ['قَبْلَ عُقُودٍ', 'decades ago'], ['فَوْرًا', 'immediately'], ['رَفَاهِيَةٌ', 'a luxury'], ['تَرَقَّبْ', 'look out for!'],
  ],
  prep: {
    words: [['الطَّلَاقَةُ', 'fluency', '—'], ['التِّلْقَائِيَّةُ', 'spontaneity', '—'], ['الأَدَاءُ تَحْتَ الضَّغْطِ', 'performance under pressure', '—'], ['التَّشْكِيلُ الدَّقِيقُ', 'precise vowelling', '—'], ['الثِّقَةُ', 'confidence', '—']],
    questionEn: 'Which P5 structure is hardest for you to SAY without notes — and why?',
    questionAr: 'أَصْعَبُ تَرْكِيبٍ عَلَيَّ هُوَ ______ ، لِأَنَّ ______ .',
    homework: {
      core: 'Listen to a short Arabic opinion clip and note the thesis and one concession.',
      develop: 'Note whose view each point is (the speaker or the other side).',
      stretch: 'Website writing task: an 80–90-word listening strategy.',
    },
    wordsSource: 'The five words come from the website P5-L11 vocabulary (speaking preparation and review).',
  },
  remember: 'Remember: follow the shape, not every word — thesis first; ṣaḥīḥun anna = the OTHER side; ghayra anna = the speaker; wait for sa- / la-; yataṭallabu an = the demand; wa-bināʾan ʿalā mā sabaqa = the end.',
});

module.exports = { meta, slides };
