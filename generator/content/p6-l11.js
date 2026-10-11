'use strict';
/* P6-L11 · Mock Results, Targeted Revision and Final IGCSE Preparation — website: Pathways › Progression › P6 › P6-L11 (the mock profile, the
 * /150 results calculator and grade guidance, the three most common errors and their fixes, the grammar revision hierarchy, the final
 * readiness checklist, the revision plan and the reflection). Website panel, results, cards, checklist, fields and exit frames used as
 * published, with waṣl alif shown without a kasra and لِكَيْ always written with its sukūn. Teacher-made: the Do Now, the error-fixing practice
 * (We Do), the full model sentences in the checklist (the website splits the لَـ prefix and leaves the essay chain unvowelled), the routes
 * and the revision-plan examples. */
const P = require('./p6-common');
const { q } = P;

const meta = P.meta('P6')({
  n: 11, fileTitle: 'Mock_Results_and_Final_Revision', chip: 'IGCSE Bridge',
  title: 'Mock Results, Targeted Revision and Final IGCSE Preparation', arabic: 'نَتَائِجُ المُحَاكَاةِ وَالمُرَاجَعَةُ المُوَجَّهَةُ وَالاسْتِعْدَادُ النِّهَائِيُّ',
  focus: 'Turn four mock scores into one /150 profile, fix the three errors that cost the most Accuracy marks, and leave with a personal revision plan and a readiness checklist for the real exam.',
  icon: 'FaChartLine', iconSet: 'fa6',
});

const s = P.site('P6-L11');
const B = s.blocks;
const NEXT = { nextCode: 'P6-L12', nextTitle: 'Celebration — Reflection and the Road Ahead', nextAr: 'الاحْتِفَالُ وَالتَّأَمُّلُ وَالطَّرِيقُ إِلَى الأَمَامِ' };
const R = B[1];

const slides = P.bridgeLesson('P6-L11', {
  site: s, next: NEXT,
  plan: '0–1 Welcome · 1–2 Map · 2–8 Do Now + answers · 8–9 Objectives · 9–11 Your mock profile · 11–17 The /150 calculator · 17–22 The three most common errors (I Do) · 22–30 Fix the errors (We Do) · 30–34 The revision hierarchy · 34–42 Readiness checklist · 42–50 My revision plan · 50–54 Reflection + self-check · 54–56 Preparation.',
  source: 'The website P6-L11: the panel “Your mock profile” (grade guidance), the mock results calculator (four papers, /150), the cards “The three most common errors — and their fixes” and “Grammar revision hierarchy”, the final exam-readiness checklist (8 items), the revision-plan fields and the reflection “What we know now that we did not know in F1”.',
  support: `• RESULTS LESSON: scores are personal. Students calculate privately; never share individual scores on screen. Collect totals by private chat or form.
• Grade boundaries on the website are GUIDANCE only — Cambridge sets the real boundaries for each exam series. Say this clearly to avoid false reassurance or panic.
• Routes: Core — calculate the total, fix error 1 (the subjunctive fatḥa) · Develop — fix all three errors, complete the checklist · Stretch — a dated two-week revision plan with practice for each unticked item.
• Wellbeing: a disappointing mock can feel heavy. Lead with the website message: students typically gain 5–15 marks between the mock and the exam through targeted revision.`,
  steps: [
    ['donow', 6, 'Retrieval: revision words and two quick fixes.', 'اِبْدَأِ الآنَ'],
    ['teach', 8, 'Your mock profile and the /150 calculator.', 'النَّتَائِجُ'],
    ['ido', 5, 'The three most common errors.', 'الأَخْطَاءُ'],
    ['wedo', 8, 'Fix the errors.', 'صَحِّحْ'],
    ['youdo', 20, 'Revision hierarchy, checklist, my plan.', 'خُطَّتِي'],
    ['feedback', 6, 'Reflection, self-check, preparation.', 'قَيِّمْ'],
  ],
  doNow: {
    questions: [
      q('What does نِقَاطُ الضَّعْفِ mean?', ['weaknesses', 'strengths', 'points scored'], 'Prepared at home (P6-L10).'),
      q('What does الأَخْطَاءُ الشَّائِعَةُ mean?', ['common errors', 'rare errors', 'corrected errors'], 'Prepared at home (P6-L10).'),
      q('What does خُطَّةُ المُرَاجَعَةِ mean?', ['revision plan', 'exam paper', 'final result'], 'Prepared at home (P6-L10).'),
      q('Choose the correct verb: يَنْبَغِي أَنْ ___ بِجِدٍّ.', ['نَعْمَلَ', 'نَعْمَلُ', 'عَمِلْنَا'], 'After a trigger + an: the fatḥa.'),
      q('Choose the correct result: لَوْ تَدَرَّبْتُ أَكْثَرَ، ___ .', ['لَتَحَسَّنْتُ', 'تَحَسَّنْتُ', 'سَأَتَحَسَّنُ'], 'Type 2: lau + past, la- + past.'),
    ],
    keyIdea: { text: 'The gap between your mock and your target is today’s agenda.', ar: 'نَتِيجَةُ المُحَاكَاةِ لَيْسَتْ نَتِيجَتَكَ النِّهَائِيَّةَ.' },
    retrieves: 'Questions 1–3 test three of the five revision words prepared at the end of P6-L10. Questions 4–5 preview the two most costly mock errors: the subjunctive fatḥa and the Type 2 la- prefix.',
  },
  routes: {
    core: ['I can calculate my mock total out of 150.', 'I can fix the subjunctive fatḥa after a trigger.'],
    develop: ['I can correct the three most common errors.', 'I can complete the readiness checklist honestly.'],
    stretch: ['I can revise my two weakest structures with examples.', 'I can write a dated revision plan.'],
  },
  body: [
    P.panel(B[0], {
      min: 2, eyebrow: 'Teach · results · grade · agenda (website)', ar: 'مَلَفُّ المُحَاكَاةِ',
      exHead: 'THE MESSAGE',
      examples: [
        { ar: 'نَتِيجَةُ المُحَاكَاةِ لَيْسَتْ نَتِيجَتَكَ النِّهَائِيَّةَ.', en: 'Your mock score is not your final score.' },
        { ar: 'المُرَاجَعَةُ المُوَجَّهَةُ تَصْنَعُ الفَرْقَ.', en: 'Targeted revision makes the difference.' },
      ],
      callout: { head: 'GUIDANCE ONLY', text: 'The grade boundaries are the website’s guidance; Cambridge sets the real boundaries for each exam series.' },
      notes: 'TEACH (2 min) — the website panel. Stress: typical gain of 5–15 marks between mock and exam through targeted revision.',
    }),
    {
      type: 'formsTable', stage: 'youdo', min: 6, eyebrow: 'You do · enter · total · predict (website calculator)', title: R.title, ar: 'حَاسِبَةُ النَّتَائِجِ', ltr: true,
      cols: [{ label: 'Paper', w: 4.2 }, { label: 'Out of', w: 1.6 }, { label: 'My mock score', w: 2.6 }, { label: 'Where it came from', w: 3.93 }],
      rows: [
        ...R.papers.map((p, i) => ({ core: true, cells: [p.label, String(p.max), '______', ['P6-L08 (raw /20 × 2.25)', 'P6-L09 (raw /16 × 2.8125)', 'P6-L10 (role play + conversation)', 'P6-L09 (Q1 + Q2, teacher-marked)'][i]] })),
        { cells: ['TOTAL', String(R.total_max), '______', 'add the four scores'] },
      ],
      foot: `Grade guidance (website): ${R.boundaries.map(([g, m]) => `${g} = ${m}+`).join(' · ')}. Guidance only — Cambridge sets the real boundaries each series.`,
      notes: 'CALCULATOR (6 min) — the website calculator, on paper. Students copy the table, enter their four scores, add them, and read the guidance grade. Everything private. Students missing a score enter their best estimate and mark it “est.”',
    },
    P.cards(B[2], {
      min: 5, stage: 'ido', eyebrow: 'I do · the three most common errors — highest impact first (website)', ar: 'الأَخْطَاءُ الثَّلَاثَةُ', leftW: 6.6,
      points: [
        'The subjunctive fatḥa — after a trigger the verb ends in -a, not -u or -i. Worth 2 Accuracy marks and very frequent.',
        'The Type 2 la- prefix — lau + past, then la- + past in the result. The la- cannot be dropped. Worth 2 Accuracy marks.',
        'an vs anna — an + subjunctive; anna + a reported fact. And ṣaḥīḥun anna concedes a real situation, so its verb stays indicative.',
      ],
      examples: [
        { ar: 'يَتَطَلَّبُ الأَمْرُ أَنْ تُوَفِّرَ المَدَارِسُ دَعْمًا.', en: '1 · tuwaffira — not tuwaffiru' },
        { ar: 'لَوْ دَرَسْتُ، لَنَجَحْتُ.', en: '2 · la-najaḥtu — keep the la-' },
        { ar: 'أَكَّدَ أَنَّ الوَقْتَ يَنْفَدُ.', en: '3 · anna + a fact (indicative)' },
      ],
      notes: 'I DO (5 min) — the website cards with transliterated rule names (the website writes the prefix as a split letter; we write whole words). Write a WRONG version of each on the whiteboard (أَنْ تُوَفِّرُ · لَوْ دَرَسْتُ، نَجَحْتُ · أَكَّدَ أَنْ …), think aloud while fixing it.',
    }),
    {
      type: 'mcq', stage: 'wedo', min: 6, eyebrow: 'We do · fix the most costly errors', title: 'Choose the correct form', ar: 'صَحِّحِ الخَطَأَ', seed: 111,
      questions: [
        q('Error 1 · subjunctive: يَنْبَغِي أَنْ ___ المَاءَ بِوَفْرَةٍ.', ['نَشْرَبَ', 'نَشْرَبُ', 'نَشْرَبِ'], 'an + subjunctive: nashraba.'),
        q('Error 1 · purpose: أُطْلِقَ بَرْنَامَجٌ لِكَيْ ___ الشَّبَابَ.', ['يُسَاعِدَ', 'يُسَاعِدُ', 'سَاعَدَ'], 'likay + subjunctive: yusāʿida.'),
        q('Error 2 · Type 2: لَوْ قَرَأْتُ أَكْثَرَ، ___ مُفْرَدَاتِي.', ['لَزَادَتْ', 'زَادَتْ', 'سَتَزِيدُ'], 'lau + past → la- + past.'),
        q('Error 3 · reported fact: أَكَّدَ المُعَلِّمُ ___ الامْتِحَانَ قَرِيبٌ.', ['أَنَّ', 'أَنْ', 'لِكَيْ'], 'A reported fact: anna + noun.'),
        q('Error 3 · concession: صَحِيحٌ أَنَّ التِّقْنِيَّةَ ___ البَعِيدَ.', ['تُقَرِّبُ', 'تُقَرِّبَ', 'لَقَرَّبَتْ'], 'ṣaḥīḥun anna + indicative: tuqarribu.'),
        q('Passive agreement: الرِّسَالَةُ ___ أَمْسِ.', ['كُتِبَتْ', 'كُتِبَ', 'كَتَبَتْ'], 'Feminine subject → kutibat (passive).'),
      ],
      answerSlide: { min: 2, eyebrow: 'We do · answers', title: 'Answers and the rule behind each', ar: 'الإِجَابَاتُ وَالتَّعْلِيلُ' },
      notes: 'WE DO (6 min) — teacher-made, one question per error from the website hierarchy. Students answer in the chat; Core: questions 1–3. After each answer ask: which error number is this?',
      answerNotes: 'Name the rule for each answer. Question 6 is hierarchy item 5 (passive agreement).',
    },
    P.cards(B[3], {
      min: 4, stage: 'teach', eyebrow: 'Teach · revise in this order — most marks per minute (website)', ar: 'تَرْتِيبُ المُرَاجَعَةِ', leftW: 7.4, pointsHead: 'REVISE IN THIS ORDER',
      points: [
        '1 · Subjunctive -a marker — high-frequency, 2 Accuracy marks.',
        '2 · Type 2 la- prefix — common error, 2 Accuracy marks.',
        '3 · Reported speech inna / anna — 2 Accuracy marks.',
        '4 · ṣaḥīḥun anna + indicative — 1 mark, crucial for Task Completion.',
        '5 · Passive agreement — 1 Accuracy mark.',
        '6 · Vocabulary by topic — your three weakest topic areas.',
      ],
      examples: [
        { ar: 'قَالَ: «إِنَّ الوَقْتَ يَنْفَدُ.»', en: 'direct speech → inna' },
        { ar: 'قَالَ إِنَّ الوَقْتَ يَنْفَدُ.', en: 'after qāla → inna' },
        { ar: 'ذَكَرَ أَنَّ الوَقْتَ يَنْفَدُ.', en: 'after other verbs → anna' },
      ],
      notes: 'TEACH (4 min) — the website hierarchy. The examples expand item 3 (reported speech): after قَالَ use إِنَّ; after other reporting verbs (ذَكَرَ · أَكَّدَ · أَشَارَ إِلَى) use أَنَّ.',
    }),
    P.checklist(B[4], {
      min: 8, stage: 'youdo', eyebrow: 'You do · tick what is secure (website)', title: 'Final exam-readiness checklist',
      texts: [
        'I can form the subjunctive after every trigger (likay · yanbaghī an · yataṭallabu an).',
        'I keep the la- prefix in every Type 2 result.',
        'I use an before a subjunctive and anna before a reported fact.',
        'I keep the indicative after ṣaḥīḥun anna.',
        'I can build the full essay architecture from memory.',
      ],
      models: ['يَنْبَغِي أَنْ نَعْمَلَ لِكَيْ نَنْجَحَ.', 'لَوْ دَرَسْتُ، لَنَجَحْتُ.', 'أُرِيدُ أَنْ أَنْجَحَ · ذَكَرَ أَنَّ الوَقْتَ قَصِيرٌ.', 'صَحِيحٌ أَنَّ الوَقْتَ مَحْدُودٌ …', 'أُطْرُوحَةٌ ← دَلِيلٌ ← تَنَازُلٌ ← رَدٌّ ← خَاتِمَةٌ', '', '', 'يُشَارُ إِلَى أَنَّ …'],
      notes: 'CHECKLIST (8 min) — website items; the model column shows full, vowelled examples (teacher). Students tick ONLY what they can do from memory now. Unticked items = the revision list.',
    }),
    P.fields(B[5], {
      min: 8, eyebrow: 'You do · prioritise · act (website)', ar: 'خُطَّةُ المُرَاجَعَةِ', head: 'My plan', ex: 'Example', lw: 4.2, ew: 4.6,
      examples: ['Paper 1 Listening — keep annotating', 'Paper 4 Writing — the biggest gain', 'the subjunctive fatḥa · Type 2 la-', 'one timed essay every week until the exam'],
      core: [0, 1],
      foot: 'Stretch: put a date beside each action for the next two weeks.',
      notes: 'REVISION PLAN (8 min) — website fields. Circulate (private chat) and approve each student’s “single most important action”: it must be specific and measurable.',
    }),
    P.reflect(B[6], {
      min: 3, eyebrow: 'Feedback · three years of Arabic (website)', ar: 'التَّأَمُّلُ', can: 'my most important Arabic sentence', next: 'my final revision priority',
      modelCan: 'لَوْ لَمْ أَتَعَلَّمِ العَرَبِيَّةَ، لَمَا فَهِمْتُ القُرْآنَ بِهٰذَا العُمْقِ.', modelNext: 'Paper 4 — the subjunctive fatḥa',
      foot: 'In F1 you could not read one Arabic letter. Today you read academic texts, write argumentative essays and speak on complex topics.',
      notes: 'REFLECTION (3 min) — website frames and intro. The model sentence (“Had I not learned Arabic, I would not have understood the Qur’an this deeply”) is a teacher example; students choose their own sentence on any theme.',
    }),
  ],
  selfCheck: s.success.map((t, i) => ({ route: ['core', 'develop', 'stretch', 'develop'][i], text: t })),
  prep: {
    words: [['الاحْتِفَالُ', 'celebration', 'pl. احْتِفَالَاتٌ'], ['الإِنْجَازُ', 'achievement', 'pl. إِنْجَازَاتٌ'], ['الرِّحْلَةُ', 'the journey', 'pl. رِحْلَاتٌ'], ['الطُّمُوحُ', 'ambition', '—'], ['الطَّرِيقُ إِلَى الأَمَامِ', 'the road ahead', 'pl. طُرُقٌ']],
    questionEn: 'Write the most beautiful Arabic sentence you can — it will go on your certificate.',
    questionAr: 'فِي الصَّفِّ الأَوَّلِ كُنْتُ ______ ، أَمَّا اليَوْمَ فَأَسْتَطِيعُ أَنْ ______ .',
    homework: {
      core: 'Do one revision action from your plan; learn the five words.',
      develop: 'Do two revision actions and re-test the checklist; learn the five words.',
      stretch: 'Follow day 1 of your dated plan; draft your certificate sentence; learn the five words.',
    },
    wordsSource: 'P6-L12 has no vocabulary list: these five celebration words are teacher-chosen; the frame is the website’s P6-L12 “Name the journey” frame.',
  },
  remember: 'Remember: your mock is not your final score — fix the subjunctive fatḥa, keep the la- in Type 2 results, use anna for facts, and follow your plan.',
});

module.exports = { meta, slides };
