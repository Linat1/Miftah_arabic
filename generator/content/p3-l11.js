'use strict';
/* P3-L11 · Consolidation — Speaking Preparation and Grammar Mastery — website: Pathways › Progression › P3 › P3-L11 (the P3 error zones: the la- of the
 * Type 2 result, a past verb after لَوْ, the subjunctive after أَنْ, tourism-verb agreement and Form X; the whole P3 grammar spine; the three topic-conversation
 * questions and the travel-agency role play of the P3-L12 assessment). Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking,
 * writing, live builder and mission used as published, with waṣl alif shown without a kasra; rule examples shown without their English glosses. The website
 * visual game repeats the P3-L04 tourism cards, so it is not used. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P3')({
  n: 11, fileTitle: 'P3_Consolidation_Speaking_Grammar_Mastery', chip: 'Consolidation',
  title: 'Consolidation — Speaking Preparation and Grammar Mastery', arabic: 'تَرْسِيخُ الوَحْدَةِ — إِعْدَادُ التَّحَدُّثِ وَالتَّكَامُلُ الكَامِلُ لِلْقَوَاعِدِ',
  focus: 'Repair the P3 error zones (la- in the Type 2 result · a past verb after law · an + a verb in -a · tubhiru for a feminine subject · yastaqṭib in Form X), revise the whole P3 spine, and rehearse the topic conversation and the travel-agency role play.',
  icon: 'FaComments', iconSet: 'fa6',
});

const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const site = D.waslFix(D.site('P3-L11'));
const RH = [['Type 2 result', 'law + past → la- + past'], ['Past verb after law', 'law + past (not present)'], ['Subjunctive after an', 'yustaḥsan an + verb in -a'], ['Tourism-verb agreement', 'tubhiru (f.) · yastaqṭib (Form X)']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1], examples: r.examples.map((e) => e.replace(/ \(not .*\)$/, '')) }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P3-L11', {
  support: `• CONSOLIDATION + SPEAKING REHEARSAL for the P3-L12 assessment (topic conversation on travel and tourism + a travel-agency role play). The website names the three highest-frequency slips: a Type 2 result without la- · a present verb after law · -u instead of -a after an.
• Core: correct six P3 errors and write three sentences from memory (website Core). Develop: add a past perfect, a Type 1 and a Type 2. Stretch: answer the three required-structure questions fluently and spontaneously.
• Praise the journey: students now control two conditional types, the past perfect, reported speech and the subjunctive — real B1 grammar. Keep the rehearsal light and encouraging.
• Course rule: after law use the past (لَوْ زُرْتُ). Classical Arabic sometimes has law + present (e.g. in the Qurʾān), so if a student quotes one, praise the observation — for the exam, keep law + past.`,
  teach: 'Fix the error zones, revise the spine, answer each question with its required structure.',
  wedo: 'Repair the slips, build an assessment answer, sort the structures, hear a mock conversation.',
  next: { nextCode: 'P3-L12', nextTitle: 'P3 Review and Unit Assessment', nextAr: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ' },
  objectives: ['Correct the most common P3 errors.', 'Retrieve both conditionals, the past perfect, reported speech and yustaḥsan an accurately.', 'Answer a law question with a law answer.', 'Prepare the topic conversation and role play to assessment standard.'],
  rulesAr: 'إِصْلَاحُ الأَخْطَاءِ الشَّائِعَةِ',
  ruleEx: [['لَوْ حَجَزْتُ مُبَكِّرًا، لَحَصَلْتُ عَلَى سِعْرٍ أَرْخَصَ'], ['لَوْ زُرْتُ المَغْرِبَ …'], ['يُسْتَحْسَنُ أَنْ يَتَعَلَّمَ الزَّائِرُ التَّحِيَّةَ'], ['تُبْهِرُ المَدِينَةُ زُوَّارَهَا', 'تَسْتَقْطِبُ المَدِينَةُ السُّيَّاحَ']],
  flexGroups: [2],
  doNow: {
    questions: [
      q('What does لَامُ الجَوَابِ mean?', ['the la- of the result', 'the letter lām in a name', 'the answer key'], 'Prepared at home (P3-L10).'),
      q('What does الطَّلَاقَةُ mean?', ['fluency', 'confidence', 'accuracy'], 'Prepared at home (P3-L10).'),
      q('What does لَعِبُ الأَدْوَارِ mean?', ['a role play', 'a board game', 'a timetable'], 'Prepared at home (P3-L10).'),
      q('You hear a la- result. The conditional is …', ['hypothetical (Type 2)', 'real (Type 1)', 'a command'], 'P3-L10: la- = unreal.'),
      q('Complete: أَشَارَ الدَّلِيلُ ___ أَنَّ الرَّبِيعَ أَفْضَلُ.', ['إِلَى', 'عَلَى', 'بِـ'], 'P3-L10: ashāra ilā anna.'),
    ],
    keyIdea: { text: 'Each P3 structure has ONE small marker — get the marker right and the structure is right.', ar: '{p|لَوْ} زُرْتُ … {p|لَـ}رَأَيْتُ · أَنْ {k|يَتَعَلَّمَ} · {w|تُبْهِرُ} المَدِينَةُ · {m|قَالَ إِنَّ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P3-L10. Questions 4–5 retrieve the result marker and ashāra ilā anna (P3-L10) — today students produce every marker accurately in speech.',
  },
  routes: {
    core: ['I can fix six P3 errors and name the zone.', 'I can write three spine sentences from memory.'],
    develop: ['I can write a past perfect, a Type 1 and a Type 2 accurately.', 'I can answer with a reason.'],
    stretch: ['I can answer a law question with law, unprompted.', 'I can name my own priority error.'],
  },
  bridge: [
    { ar: 'مُطَابَقَةٌ', urdu: 'مطابقت', tr: 'mutābiqat', en: 'agreement' },
    { ar: 'صِيغَةٌ', urdu: 'صیغہ', tr: 'sīgha', en: 'a (verb) form' },
    { ar: 'زَمَنٌ', urdu: 'زمانہ', tr: 'zamāna', en: 'Arabic: a tense · Urdu: an era, the times' },
    { ar: 'تَشْكِيلٌ', urdu: 'تشکیل', tr: 'tashkīl', en: 'Arabic: vowelling · Urdu: formation' },
    { ar: 'ثِقَةٌ', urdu: 'ثقہ / اعتماد', tr: 'iʿtimād', en: 'confidence (Urdu ثقہ = trustworthy)' },
  ],
  bridgeNotes: 'URDU BRIDGE: مطابقت and صیغہ (the Urdu grammar word for a verb form) are shared. Watch the shifts: Urdu زمانہ = the times, Arabic زَمَنُ الفِعْلِ = the tense; Urdu تشکیل = formation, Arabic التَّشْكِيلُ = adding the vowels — today’s “precise vowelling”.',
  core: ['لَامُ الجَوَابِ', 'زَمَنُ فِعْلِ لَوْ', 'الفِعْلُ المَنْصُوبُ بَعْدَ أَنْ', 'مُطَابَقَةُ يُبْهِرُ', 'صِيغَةُ يَسْتَقْطِبُ', 'مُطَابَقَةُ كَانَ', 'إِنَّ أَمْ أَنَّ', 'شَرْطٌ مِنَ النَّوْعِ الأَوَّلِ', 'شَرْطٌ مِنَ النَّوْعِ الثَّانِي', 'المَاضِي التَّامُّ', 'يُسْتَحْسَنُ أَنْ', 'يَسْتَقْطِبُ / يُبْهِرُ'],
  forms: {
    'مُطَابَقَةُ كَانَ': { tag: 'I · he · she · they', forms: [{ l: 'she · they', ar: 'كَانَتْ · كَانُوا' }, { l: 'I · he', ar: 'كُنْتُ · كَانَ' }] },
    'مُطَابَقَةُ يُبْهِرُ': { tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: 'تُبْهِرُ' }] },
    'يَسْتَقْطِبُ / يُبْهِرُ': { tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: 'تَسْتَقْطِبُ / تُبْهِرُ' }] },
    'يَحْجِزُ / يُقِيمُ': ihs('أَحْجِزُ / أُقِيمُ', 'تَحْجِزُ / تُقِيمُ'),
  },
  vocabNotes: {
    0: 'The P3 error zones — the labels for today’s repair work. Each card’s note gives the rule in one line: la- in the Type 2 result · a past verb after law · -a after an · tubhiru for a feminine subject · Form X yastaqṭib · qāla → inna.',
    1: 'The P3 grammar spine: both conditional types, the past perfect, reported speech, the booking verbs, yustaḥsan an and the tourism verbs — everything the assessment tests.',
    2: 'Speaking fluency (FLEX): words to talk ABOUT speaking. تَجَنُّبُ الشَّرْطِ = conditional avoidance — answering a law question with idhā, or with no conditional at all, loses the mark.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the P3 error zones (website table + reading: the repair list) · Core', title: 'Wrong → right, zone by zone', ar: 'مَنَاطِقُ الأَخْطَاءِ',
      cols: [{ label: 'Zone', w: 2.2 }, { label: 'Wrong', w: 3.5, size: 20 }, { label: 'Right', w: 3.6, size: 20 }, { label: 'Lesson', w: 1.3 }, { label: 'Rule', w: 1.73 }],
      rows: [
        { cells: ['Type 2 result', 'لَوْ حَجَزْتُ، حَصَلْتُ', 'لَوْ حَجَزْتُ، {p|لَحَصَلْتُ}', 'P3-L05', 'la-'] },
        { cells: ['verb after law', 'لَوْ أَحْجِزُ مُبَكِّرًا', 'لَوْ {p|حَجَزْتُ} مُبَكِّرًا', 'P3-L05', 'past'] },
        { cells: ['after an', 'أَنْ يَتَعَلَّمُ الزَّائِرُ', 'أَنْ {k|يَتَعَلَّمَ} الزَّائِرُ', 'P3-L07', '-a'] },
        { cells: ['agreement', 'يُبْهِرُ المَدِينَةُ زُوَّارَهَا', '{w|تُبْهِرُ} المَدِينَةُ زُوَّارَهَا', 'P3-L04', 'city = she'] },
        { cells: ['Form X', 'يَقْطِبُ المَعْلَمُ السُّيَّاحَ', '{w|يَسْتَقْطِبُ} المَعْلَمُ السُّيَّاحَ', 'P3-L04', 'yasta-'] },
        { cells: ['inna / anna', 'قَالَ الدَّلِيلُ أَنَّ …', 'قَالَ الدَّلِيلُ {m|إِنَّ} …', 'P3-L06', 'qāla → inna'] },
      ],
      ltr: true,
      foot: 'Website reading: “every structure has a precise marker that must be controlled.”',
      notes: `GRAMMAR PART 1 — the website table, common error and the reading “twelve sentences to repair” (rows 1–5), plus website quiz 6 (row 6).
Website teaching point “The three highest-frequency P3 slips”: a Type 2 result without la- (row 1) · a present verb after law (row 2) · -u after an (row 3).
Core: rows 1–4. Drill: cover the Right column; students fix each one and NAME the zone. Then reverse — the teacher says a zone, students give a correct example.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · the whole P3 grammar spine (vocabulary group 2 + website model texts) · Core / Develop', title: 'Six structures — one unit', ar: 'العَمُودُ الفِقْرِيُّ لِقَوَاعِدِ الوَحْدَةِ',
      cols: [{ label: 'Structure', w: 2.3 }, { label: 'Lesson', w: 1.4 }, { label: 'Example (website texts)', w: 6.5, size: 18 }, { label: 'Check', w: 2.13 }],
      rows: [
        { core: true, cells: ['past perfect', 'P3-L02/03', '{e|كُنْتُ قَدْ تَوَقَّعْتُ} مَكَانًا عَادِيًّا، لٰكِنَّهُ فَاقَ تَوَقُّعَاتِي.', 'kuntu … -tu'] },
        { core: true, cells: ['Type 1', 'P3-L05', '{k|إِذَا} احْتَرَمَ السُّيَّاحُ القَوَاعِدَ، {k|سَتَبْقَى} المَوَاقِعُ.', 'past → sa-'] },
        { core: true, cells: ['Type 2', 'P3-L05', '{p|لَوْ} كَانَ لَدَيَّ مِيزَانِيَّةٌ غَيْرُ مَحْدُودَةٍ، {p|لَزُرْتُ} كُلَّ المَوَاقِعِ.', 'past → la-'] },
        { cells: ['reported speech', 'P3-L06', '{m|قَالَ} الدَّلِيلُ {m|إِنَّ} الرَّبِيعَ أَفْضَلُ مَوْسِمٍ.', 'qāla inna'] },
        { cells: ['advice', 'P3-L07', 'يُسْتَحْسَنُ أَنْ {k|يَتَعَلَّمَ} الزَّائِرُ بَعْضَ العِبَارَاتِ.', 'an + -a'] },
        { cells: ['travel verbs', 'P3-L02/04', '{w|تَسْتَقْطِبُ} المَدِينَةُ السُّيَّاحَ · {w|أَقَمْتُ} فِي رِيَاضٍ', 'object · fī'] },
      ],
      ltr: true,
      foot: 'Every row is one P3 lesson — the assessment tests them all.',
      notes: `GRAMMAR PART 2 — the website vocabulary group “The P3 grammar spine” (both conditionals · past perfect · reported speech · yaḥjiz / yuqīm · yustaḥsan an · yastaqṭib / yubhir · the four-layer narrative) with examples from the website listening and writing model.
Website challenge: “Write one accurate sentence for each of the four P3 error zones” — then cover the Example column here and write one for each structure.
Link the spine to the assessment parts: listening (sa- / la-) · reading (idhā recommends, law criticises) · writing (both types for Range) · speaking (required structures).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · the required structure, unprompted (P3-L12 topic questions + role play) · Develop / Stretch', title: 'Question → required structure', ar: 'البِنْيَةُ المَطْلُوبَةُ',
      cols: [{ label: 'The examiner asks …', w: 4.4, size: 17 }, { label: 'Start your answer with …', w: 5.5, size: 18 }, { label: 'Q', w: 0.9 }, { label: 'Required', w: 1.53 }],
      rows: [
        { core: true, cells: ['صِفْ إِجَازَةً مَاضِيَةً — مَا الَّذِي كُنْتَ قَدْ تَوَقَّعْتَهُ؟', '{e|كُنْتُ قَدْ تَوَقَّعْتُ} … ، لٰكِنَّهُ فَاقَ تَوَقُّعَاتِي.', 'Q1', 'past perfect'] },
        { core: true, cells: ['مَا رَأْيُكَ فِي السِّيَاحَةِ المُسْتَدَامَةِ؟', 'أَرَى أَنَّهَا ضَرُورَةٌ؛ فَـ{k|إِذَا} احْتَرَمَ السُّيَّاحُ القَوَاعِدَ، {k|سَتَبْقَى} …', 'Q2', 'Type 1'] },
        { core: true, cells: ['لَوْ كَانَ لَدَيْكَ مِيزَانِيَّةٌ غَيْرُ مَحْدُودَةٍ، أَيْنَ سَتَذْهَبُ؟', '{p|لَوْ كَانَ لَدَيَّ} مِيزَانِيَّةٌ غَيْرُ مَحْدُودَةٍ، {p|لَزُرْتُ} …', 'Q3', 'Type 2'] },
        { cells: ['role play: booking and accommodation', 'أُرِيدُ أَنْ {w|أَحْجِزَ} غُرْفَةً؛ أَيْنَ يُمْكِنُ أَنْ {w|أُقِيمَ}؟', 'RP', 'yaḥjiz · yuqīm'] },
      ],
      ltr: true,
      foot: 'Website teaching point: a law question answered with idhā is conditional avoidance — and loses the mark.',
      notes: `GRAMMAR PART 3 — the three P3-L12 topic-conversation questions (past perfect required · Type 1 expected · Type 2 required) and role-play task 2 (ask about booking and accommodation with يَحْجِزُ / يُقِيمُ).
Turn the question round: the examiner says كُنْتَ قَدْ تَوَقَّعْتَهُ (you) → the student answers كُنْتُ قَدْ تَوَقَّعْتُ (I) · لَدَيْكَ → لَدَيَّ.
Row 4: after أُرِيدُ أَنْ / يُمْكِنُ أَنْ the booking verbs end in -a: أَحْجِزَ · أُقِيمَ (P3-L06/L07).
The examiner’s «أَيْنَ سَتَذْهَبُ؟» is everyday phrasing; the answer still needs the full Type 2: لَوْ كَانَ لَدَيَّ … لَزُرْتُ / لَذَهَبْتُ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · answer law with law (website teaching point 2 + speaking model) · Stretch', title: 'Structure · reason · extra', ar: 'بِنْيَةٌ · سَبَبٌ · إِضَافَةٌ',
      cards: [
        { chip: '1 · STRUCTURE · CORE', color: 'C0386B', head: 'لَوْ … لَـ', big: 'لَوْ كَانَ لَدَيَّ مِيزَانِيَّةٌ غَيْرُ مَحْدُودَةٍ، لَزُرْتُ كُلَّ المَوَاقِعِ التُّرَاثِيَّةِ.', en: 'If I had an unlimited budget, I would visit every heritage site.', clue: 'The required one.' },
        { chip: '2 · REASON · DEVELOP', color: 'C77700', head: 'لِأَنَّ', big: 'لِأَنَّ كُلَّ مَوْقِعٍ يَحْكِي قِصَّةَ حَضَارَةٍ.', en: 'Because every site tells the story of a civilisation.', clue: 'Say WHY.' },
        { chip: '3 · EXTRA · STRETCH', color: '6B4C9A', head: 'وَلَـ … · يُسْتَحْسَنُ أَنْ', big: 'وَلَتَعَلَّمْتُ عَنْ كُلِّ حَضَارَةٍ.', en: 'And I would learn about every civilisation.', clue: 'A second la-.' },
      ],
      error: { text: 'Website teaching point: answering a law question with idhā is conditional avoidance.', pairs: [['لَوْ كَانَ لَدَيَّ مِيزَانِيَّةٌ، لَذَهَبْتُ إِلَى اليَابَانِ', 'إِذَا كَانَ لَدَيَّ مِيزَانِيَّةٌ، سَأَذْهَبُ إِلَى اليَابَانِ']] },
      notes: `GRAMMAR PART 4 — website teaching point “Answer the لَوْ question with a Type 2”, website quiz 8 and the writing model (لَزُرْتُ كُلَّ المَوَاقِعِ التُّرَاثِيَّةِ فِي العَالَمِ العَرَبِيِّ، وَلَتَعَلَّمْتُ عَنْ كُلِّ حَضَارَةٍ). Card 2 is a teacher-added reason.
The routine: required structure → a reason → one extra P3 structure. The mock conversation ends with the teacher’s praise «اسْتَعْمَلْتَ فِيهَا النَّوْعَيْنِ مِنَ الشَّرْطِ تِلْقَائِيًّا».
Time-buying phrases if a student freezes: سُؤَالٌ جَمِيلٌ · دَعْنِي أُفَكِّرُ · بِصَرَاحَةٍ … Repair phrase: عَفْوًا، أَقْصِدُ …`,
    },
  ],
  quick: [0, 1, 2, 7],
  rest: [3, 4, 5, 6],
  ido: {
    title: 'Watch me answer the three questions',
    steps: [
      { head: 'Q1', ar: '{e|كُنْتُ قَدْ تَوَقَّعْتُ} …', think: 'kuntu … -tu.' },
      { head: 'Q2', ar: '{k|إِذَا} احْتَرَمَ … {k|سَتَبْقَى} …', think: 'sa-.' },
      { head: 'Q3', ar: '{p|لَوْ كَانَ لَدَيَّ} … {p|لَزُرْتُ} …', think: 'la-!' },
      { head: 'Extra', ar: 'يُسْتَحْسَنُ أَنْ {m|يَتَعَلَّمَ} …', think: '-a after an.' },
    ],
    legend: ['e', 'k', 'p', 'm'], legendLabels: { e: 'PAST PERFECT', k: 'TYPE 1', p: 'TYPE 2', m: 'AN + -A' },
    model: '{e|كُنْتُ قَدْ تَوَقَّعْتُ} أَنَّ البَتْرَاءَ مُجَرَّدُ آثَارٍ، لٰكِنَّهَا فَاقَتْ كُلَّ تَوَقُّعَاتِي. أَرَى أَنَّ السِّيَاحَةَ المُسْتَدَامَةَ ضَرُورَةٌ؛ فَـ{k|إِذَا} احْتَرَمَ السُّيَّاحُ القَوَاعِدَ، {k|سَتَبْقَى} المَوَاقِعُ لِلْأَجْيَالِ القَادِمَةِ. {p|وَلَوْ كَانَ لَدَيَّ} مِيزَانِيَّةٌ غَيْرُ مَحْدُودَةٍ، {p|لَزُرْتُ} كُلَّ المَوَاقِعِ التُّرَاثِيَّةِ فِي العَالَمِ العَرَبِيِّ. يُسْتَحْسَنُ أَنْ {m|يَتَعَلَّمَ} الزَّائِرُ بَعْضَ العِبَارَاتِ العَرَبِيَّةِ.',
    modelEn: 'I had expected Petra to be just ruins, but it exceeded all my expectations. I think sustainable tourism is a necessity: if tourists respect the rules, the sites will remain for future generations. And if I had an unlimited budget, I would visit every heritage site in the Arab world. It is preferable for a visitor to learn some Arabic phrases.',
    notes: 'I DO (3 min) — from the website writing model, spoken aloud as an exam answer. Think aloud: “Q1 wants the past perfect — kuntu qad, both -tu. Q2 expects idhā — and the result with SA-. Q3 is a law question, so I answer with law — and the result MUST start with LA-. Extra: yustaḥsanu an yataʿallamA.” Do it twice — the second time faster, as fluent speech.',
  },
  patternEn: ['had I booked early, I would have got a cheaper price', 'it is preferable for the visitor to learn the greeting', 'the city dazzles its visitors and attracts thousands of tourists'],
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · repair the slips (website mistakes + earlier P3 lessons)', title: 'Find it, fix it, name it', ar: 'صَحِّحْ وَسَمِّ الخَطَأَ',
      cols: [{ label: 'Slip', w: 4.3, size: 19 }, { label: 'Correct', w: 4.6, size: 19 }, { label: 'Zone', w: 3.43 }],
      rows: [
        { core: true, cells: ['لَوْ حَجَزْتُ مُبَكِّرًا، حَصَلْتُ عَلَى تَعْوِيضٍ.', 'لَوْ حَجَزْتُ مُبَكِّرًا، لَحَصَلْتُ عَلَى تَعْوِيضٍ.', 'Type 2 result'] },
        { core: true, cells: ['يُسْتَحْسَنُ أَنْ يَتَعَلَّمُ الزَّائِرُ.', 'يُسْتَحْسَنُ أَنْ يَتَعَلَّمَ الزَّائِرُ.', 'an + -a'] },
        { core: true, cells: ['يُبْهِرُ المَدِينَةُ زُوَّارَهَا.', 'تُبْهِرُ المَدِينَةُ زُوَّارَهَا.', 'agreement'] },
        { cells: ['تُسْهِمُ السِّيَاحَةُ بِالاقْتِصَادِ.', 'تُسْهِمُ السِّيَاحَةُ فِي الاقْتِصَادِ.', 'complement (P3-L05)'] },
        { cells: ['قَرَّرْتُ أَنْ أَلْجَأُ إِلَى السَّفَارَةِ.', 'قَرَّرْتُ أَنْ أَلْجَأَ إِلَى السَّفَارَةِ.', 'an + -a (P3-L06)'] },
        { cells: ['إِذَا حَجَزْتَ مُبَكِّرًا، لَوَفَّرْتَ المَالَ.', 'إِذَا حَجَزْتَ مُبَكِّرًا، سَتُوَفِّرُ المَالَ.', 'Type 1 result (P3-L08)'] },
      ],
      ltr: true,
      foot: 'Website reading: “the shared lesson is that every structure has a precise marker that must be controlled.”',
      notes: `WE DO (3 min) — rows 1–3 are the website mistakes; rows 4–6 recycle mistakes from P3-L05, P3-L06 and P3-L08. Cover columns 2–3; pairs fix each slip and NAME the zone.
Core: rows 1–3. Develop: all six. Stretch: write two new slips of their own for a partner to repair.
Then each student writes their ONE priority error zone in the chat — collect for L12.`,
    },
    {
      type: 'formsTable', stage: 'wedo', min: 2, flex: true, eyebrow: 'We do · build an assessment answer (website live builder)', title: 'Background + Type 1 + Type 2', ar: 'ابْنِ جَوَابَكَ',
      cols: [{ label: '1 · Background (kuntu qad)', w: 4.0, size: 16 }, { label: '2 · View (idhā … sa-)', w: 4.1, size: 16 }, { label: '3 · Hypothesis (law … la-)', w: 4.23, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Say it aloud as one fluent answer.',
      notes: `WE DO (flex) — the website live builder (${site.live_builder.target}). Website feedback: ${site.live_builder.feedback}
Use it as oral rehearsal: one student reads a combination as an exam answer; the partner names each structure.`,
    },
  ],
  sorterTitle: 'Conditional, past perfect / reported — or tourism / modal verb?',
  sorterNotes: 'Then say a full sentence for each card as fast as possible: إِذَا … سَـ … · لَوْ … لَـ … · كُنْتُ قَدْ … · قَالَ الدَّلِيلُ إِنَّ … · يُسْتَحْسَنُ أَنْ يَـ…َ',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('Type 2: لَوْ + past → لَـ.', 'Type 2: law + past → la-.').replace('Subjunctive after أَنْ.', 'A verb in -a after an.') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; rule headings and formulas in English and transliteration (rule examples without their English glosses); the required-structure questions follow the P3-L12 assessment (topic Q1–Q3 + role-play task 2); the repair table adds three earlier P3 mistakes; the website visual game repeats the P3-L04 cards and is not used. All other website items are used as published.',
  hints: ['law … ḥaṣaltu?', 'an yataʿallamu?', 'yubhiru l-madīnatu?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: kuntu qad · idhā … sa- · law … la-.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write down the student’s Type 2 sentence word for word.',
  gloss: [
    ['المُعَلِّمُ: صِفْ إِجَازَةً مَاضِيَةً؛ مَا الَّذِي كُنْتَ قَدْ تَوَقَّعْتَهُ؟ الطَّالِبُ: كُنْتُ قَدْ تَوَقَّعْتُ مَكَانًا عَادِيًّا، لٰكِنَّ البَتْرَاءَ فَاقَتْ تَوَقُّعَاتِي.', 'Teacher: Describe a past holiday — what had you expected? Student: I had expected an ordinary place, but Petra exceeded my expectations.'],
    ['المُعَلِّمُ: مَا رَأْيُكَ فِي السِّيَاحَةِ المُسْتَدَامَةِ؟ الطَّالِبُ: إِذَا احْتَرَمَ السُّيَّاحُ القَوَاعِدَ، سَتَبْقَى المَوَاقِعُ لِلْأَجْيَالِ القَادِمَةِ.', 'Teacher: What is your view on sustainable tourism? Student: If tourists respect the rules, the sites will remain for future generations.'],
    ['المُعَلِّمُ: لَوْ كَانَ لَدَيْكَ مِيزَانِيَّةٌ غَيْرُ مَحْدُودَةٍ، أَيْنَ سَتَذْهَبُ؟ الطَّالِبُ: لَوْ كَانَ لَدَيَّ مِيزَانِيَّةٌ غَيْرُ مَحْدُودَةٍ، لَزُرْتُ كُلَّ المَوَاقِعِ التُّرَاثِيَّةِ فِي العَالَمِ العَرَبِيِّ.', 'Teacher: If you had an unlimited budget, where would you go? Student: If I had an unlimited budget, I would visit every heritage site in the Arab world.'],
    ['المُعَلِّمُ: وَنَصِيحَةٌ ثَقَافِيَّةٌ؟ الطَّالِبُ: يُسْتَحْسَنُ أَنْ يَتَعَلَّمَ الزَّائِرُ بَعْضَ العِبَارَاتِ العَرَبِيَّةِ.', 'Teacher: And a cultural tip? Student: It is preferable for a visitor to learn some Arabic phrases.'],
    ['المُعَلِّمُ: أَجْوِبَةٌ مُتَوَازِنَةٌ اسْتَعْمَلْتَ فِيهَا النَّوْعَيْنِ مِنَ الشَّرْطِ تِلْقَائِيًّا.', 'Teacher: Balanced answers in which you used both types of conditional spontaneously.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ إِجَازَةً مَاضِيَةً — مَا الَّذِي كُنْتَ قَدْ تَوَقَّعْتَهُ، وَمَا الَّذِي وَجَدْتَهُ؟' },
      { route: 'develop', ar: 'مَا رَأْيُكَ فِي السِّيَاحَةِ المُسْتَدَامَةِ؟' },
      { route: 'stretch', ar: 'لَوْ كَانَ لَدَيْكَ مِيزَانِيَّةٌ غَيْرُ مَحْدُودَةٍ لِلسَّفَرِ، أَيْنَ سَتَذْهَبُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'كُنْتُ قَدْ تَوَقَّعْتُ ______ ، لٰكِنَّهُ ______ .' },
      { route: 'develop', ar: 'أَرَى أَنَّهَا ضَرُورَةٌ؛ فَإِذَا ______ ، سَتَبْقَى ______ .' },
      { route: 'stretch', ar: 'لَوْ كَانَ لَدَيَّ مِيزَانِيَّةٌ غَيْرُ مَحْدُودَةٍ، لَزُرْتُ ______ ، لِأَنَّ ______ .' },
    ],
    modelEn: ['What had you expected?', 'I had expected an ordinary place, but it exceeded my expectations.', 'And if you had an unlimited budget?', 'If I had an unlimited budget, I would visit every heritage site in the Arab world.'],
    notes: 'Website prompts and model — the three P3-L12 topic questions. Pairs: examiner / candidate, 30–40 seconds per answer, then swap. The examiner ticks Structure · Reason · Extra. Then a 2-minute travel-agency role play (P3-L12 tasks): ask about a destination, booking and accommodation, a past problem, and a recommendation. To a girl: كُنْتِ قَدْ تَوَقَّعْتِهِ · وَجَدْتِهِ · رَأْيُكِ · لَدَيْكِ · سَتَذْهَبِينَ.',
  },
  write: {
    core: { amount: '6 + 3', how: 'Website Core: correct six P3 errors and write three sentences from memory.' },
    develop: { amount: '3 structures', how: 'Website Develop: add a past perfect, a Type 1 and a Type 2 conditional.' },
    stretch: { amount: '80–90 words', how: 'Website task: answer two assessment questions with the past perfect, both conditional types and yustaḥsan an — every marker accurate.' },
  },
  frames: {
    core: [
      { en: 'I had expected …, but it exceeded my expectations.', ar: 'كُنْتُ قَدْ تَوَقَّعْتُ ______ ، لٰكِنَّهُ فَاقَ تَوَقُّعَاتِي.' },
      { en: 'I think sustainable tourism is …', ar: 'أَرَى أَنَّ السِّيَاحَةَ المُسْتَدَامَةَ ______ .' },
      { en: 'If tourists respect the rules, …', ar: 'إِذَا احْتَرَمَ السُّيَّاحُ القَوَاعِدَ، سَتَبْقَى ______ .' },
      { en: 'It is preferable for the visitor to learn …', ar: 'يُسْتَحْسَنُ أَنْ يَتَعَلَّمَ الزَّائِرُ ______ .' },
    ],
    develop: [
      { en: 'If I had an unlimited budget, I would visit …', ar: 'لَوْ كَانَ لَدَيَّ مِيزَانِيَّةٌ غَيْرُ مَحْدُودَةٍ، لَزُرْتُ ______ .' },
      { en: 'And I would learn about …', ar: 'وَلَتَعَلَّمْتُ عَنْ ______ .' },
      { en: 'The guide said that …', ar: 'قَالَ الدَّلِيلُ إِنَّ ______ .' },
      { en: 'This is a gesture that …', ar: 'فَهٰذِهِ بَادِرَةٌ ______ .' },
    ],
    bank: ['مَكَانًا عَادِيًّا', 'مُجَرَّدُ آثَارٍ', 'فَاقَتْ كُلَّ تَوَقُّعَاتِي', 'ضَرُورَةٌ', 'المَوَاقِعُ لِلْأَجْيَالِ القَادِمَةِ', 'كُلَّ المَوَاقِعِ التُّرَاثِيَّةِ', 'كُلِّ حَضَارَةٍ', 'بَعْضَ العِبَارَاتِ العَرَبِيَّةِ', 'التَّقَالِيدَ المَحَلِّيَّةَ', 'تَفْتَحُ القُلُوبَ', 'غَيَّرَتْ نَظْرَتِي', 'أَفْضَلُ مَوْسِمٍ'],
  },
  stretch: [
    ['أَنَّ البَتْرَاءَ مُجَرَّدُ آثَارٍ', 'that Petra was just ruins'],
    ['وَغَيَّرَتْ نَظْرَتِي', 'and it changed my view'],
    ['وَلَتَعَلَّمْتُ عَنْ كُلِّ حَضَارَةٍ', 'and I would learn about every civilisation'],
    ['وَأَنْ يَحْتَرِمَ التَّقَالِيدَ المَحَلِّيَّةَ', 'and to respect local traditions'],
    ['فَهٰذِهِ بَادِرَةٌ تَفْتَحُ القُلُوبَ', 'for this is a gesture that opens hearts'],
  ],
  modelEn: 'I had expected Petra to be just ruins, but it exceeded all my expectations and changed my view. I think sustainable tourism is a necessity: if tourists respect the rules, the sites will remain for future generations. And if I had an unlimited budget, I would visit every heritage site in the Arab world, and I would learn about every civilisation. I advise every visitor: it is preferable to learn some Arabic phrases and to respect local traditions, for this is a gesture that opens hearts.',
  find: ['a past perfect (kuntu qad tawaqqaʿtu)', 'a Type 1 (idhā … sa-)', 'a Type 2 with two la- results', 'yustaḥsan an + two verbs in -a'],
  modelNotes: 'Website writing model. Evidence: كُنْتُ قَدْ تَوَقَّعْتُ · فَإِذَا احْتَرَمَ … سَتَبْقَى · وَلَوْ كَانَ لَدَيَّ … لَزُرْتُ … وَلَتَعَلَّمْتُ · يُسْتَحْسَنُ أَنْ يَتَعَلَّمَ … وَأَنْ يَحْتَرِمَ.',
  selfCheck: [
    { route: 'core', text: 'My Type 2 result has la-; the verb after law is past.' },
    { route: 'core', text: 'My verbs after an end in -a.' },
    { route: 'develop', text: 'kāna agrees; city subjects take ta- (tubhiru · tastaqṭibu).' },
    { route: 'develop', text: 'My Type 1 result has sa-; qāla takes inna.' },
    { route: 'stretch', text: 'I answered the law question with law, and named my priority error.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['تَحْتَوِي عَلَى', 'it contains'], ['القَائِمَةُ', 'the list'], ['أَخْطَاءٍ شَائِعَةٍ', 'common errors'], ['وَالصَّوَابُ', 'and the correct form is'], ['جَوَابِ لَوْ', 'the result of law'],
    ['زَمَنِ فِعْلِ لَوْ', 'the tense after law'], ['النَّصْبِ', 'the subjunctive'], ['المُطَابَقَةِ', 'agreement'], ['صِيغَةِ الفِعْلِ', 'the verb form'], ['ضَبْطُهَا', 'controlling it'],
  ],
  prep: {
    words: [['تَقْيِيمٌ', 'an assessment', 'pl. تَقْيِيمَاتٌ'], ['فَهْمُ المَسْمُوعِ', 'listening comprehension', '—'], ['فَهْمُ المَقْرُوءِ', 'reading comprehension', '—'], ['وَكِيلُ سَفَرٍ', 'a travel agent', 'pl. وُكَلَاءُ سَفَرٍ'], ['المُرَاجَعَةُ', 'checking, revision', '—']],
    questionEn: 'Prepare answers to the three topic-conversation questions — each with its required structure and a reason.',
    questionAr: 'كُنْتُ قَدْ تَوَقَّعْتُ … · إِذَا … سَـ … · لَوْ كَانَ لَدَيَّ … لَـ …',
    homework: {
      core: 'Correct six P3 errors and write three spine sentences from memory.',
      develop: 'Write a past perfect, a Type 1 and a Type 2 conditional; check each against the spine table.',
      stretch: 'Website writing task: an 80–90-word answer to two assessment questions; record it aloud.',
    },
    wordsSource: 'The five words prepare students for the P3-L12 assessment (its parts, the role play and checking).',
  },
  remember: 'Remember: law + PAST → LA- · an + verb in -A · a city is “she” (tubhiru · tastaqṭibu) · qāla INNA — and answer a law question with law, before you are asked.',
});

module.exports = { meta, slides };
