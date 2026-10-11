'use strict';
/* P6-L01 · Bridge Launch — Mapping the IGCSE and Setting Personal Targets — website: Pathways › Progression › P6 › P6-L01 (the four papers of Cambridge
 * IGCSE Arabic 0544 and their marks, the exam-terminology vault, the F1–P6 grammar readiness audit, the Bridge lesson map, one SMART target per paper and
 * the journey reflection). Website panels, tables, vocabulary, audit, target fields and exit frames used as published, with هَدَفٌ مَحَدَّدٌ → هَدَفٌ
 * مُحَدَّدٌ (a specific target: the passive participle of Form II حَدَّدَ). Teacher-made: the Do Now, the four-papers quick check, the SMART-target I Do,
 * the speaking and writing tasks, frames and models. */
const P = require('./p6-common');
const { q } = P;

const meta = P.meta('P6')({
  n: 1, fileTitle: 'Bridge_Launch', chip: 'IGCSE Bridge',
  title: 'Bridge Launch — Mapping the IGCSE and Setting Personal Targets', arabic: 'إِطْلَاقُ الجِسْرِ — رَسْمُ خَرِيطَةِ الامْتِحَانِ وَتَحْدِيدُ الأَهْدَافِ',
  focus: 'Map the four papers of IGCSE Arabic 0544 (150 marks), audit every grammar structure from F1 to P6 honestly, and set one SMART target per paper — then say it in Arabic: hadafī an + a verb in -a.',
  icon: 'FaCompass', iconSet: 'fa6',
});

const s = P.site('P6-L01');
const B = s.blocks;
const NEXT = { nextCode: 'P6-L02', nextTitle: 'Paper 1 Listening — Full Format Practice and Strategy Mastery', nextAr: 'الوَرَقَةُ الأُولَى — الاسْتِمَاعُ' };

const slides = P.bridgeLesson('P6-L01', {
  site: s, next: NEXT,
  plan: '0–1 Welcome · 1–2 Map · 2–8 Do Now + answers · 8–9 Objectives · 9–15 Exam words · 15–21 The four papers + quick check · 21–31 Readiness audit · 31–36 The Bridge map · 36–41 SMART targets (I Do) · 41–52 Speak + write your targets · 52–57 Journey reflection + self-check · 57–60 Preparation.',
  source: 'The website P6-L01 “Bridge Launch”: the panel “What is IGCSE Arabic 0544?”, the table of the four papers, the exam-terminology vault (16 words), the F1–P6 grammar readiness tracker (16 structures), the Bridge lesson map (L02–L12), the SMART-target fields (one per paper) and the journey exit frames.',
  support: `• P6 IS DIFFERENT: no new grammar. It is the bridge between three years of Arabic and the IGCSE (0544): full-format practice for each paper (L02–L07), three mock papers under exam conditions (L08–L10), targeted revision (L11) and a celebration (L12).
• Tone: many students feel anxious about exams. Present the audit as a map, not a judgement — a low rating is simply the next revision step. Keep each student’s ratings private (book or private chat).
• Core: rate the 16 structures and write ONE target in English + one Arabic sentence with the frame. Develop: four SMART targets + an Arabic strategy for each. Stretch: a 60–80-word Arabic paragraph on the journey and the plan, with ṣaḥīḥun anna … ghayra anna, yataṭallabu an and law … la-.
• Faith link (optional): «وَقُلْ رَبِّ زِدْنِي عِلْمًا» (Ṭā Hā 20:114) — a dua to open the Bridge; and the hadith «إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ» — itqān (mastery) is in today’s vocabulary.
• Website fix: هَدَفٌ مَحَدَّدٌ → هَدَفٌ مُحَدَّدٌ (passive participle of Form II حَدَّدَ, “specified”).`,
  steps: [
    ['donow', 6, 'Retrieval: P5 grammar and the words you prepared.', 'اِبْدَأِ الآنَ'],
    ['teach', 12, 'Exam words and the four papers.', 'الامْتِحَانُ'],
    ['youdo', 15, 'Audit your grammar and read the Bridge map.', 'الجَاهِزِيَّةُ'],
    ['ido', 5, 'Watch me write a SMART target.', 'شَاهِدْ'],
    ['youdo', 11, 'Say and write your four targets.', 'أَهْدَافِي'],
    ['feedback', 5, 'Name your journey · self-check.', 'رِحْلَتِي'],
    ['prep', 3, 'Get ready for Paper 1 Listening.', 'اِسْتَعِدَّ'],
  ],
  doNow: {
    questions: [
      q('What does وَرَقَةُ الامْتِحَانِ mean?', ['the exam paper', 'the exam hall', 'a page of notes'], 'Prepared at home (P5-L12).'),
      q('What does مَعَايِيرُ التَّقْيِيمِ mean?', ['assessment criteria', 'exam results', 'a revision plan'], 'Prepared at home (P5-L12).'),
      q('What does جَاهِزِيَّةُ الامْتِحَانِ mean?', ['exam readiness', 'exam anxiety', 'the exam date'], 'Prepared at home (P5-L12).'),
      q('Complete: صَحِيحٌ أَنَّ الامْتِحَانَ ___ ، غَيْرَ أَنَّنَا مُسْتَعِدُّونَ.', ['صَعْبٌ', 'صَعْبًا', 'صَعْبٍ'], 'P5: after ṣaḥīḥun anna, the predicate is in -un (a fact).'),
      q('Complete: هَدَفِي أَنْ ___ دَرَجَتِي فِي الاسْتِمَاعِ.', ['أُحَسِّنَ', 'أُحَسِّنُ', 'حَسَّنْتُ'], 'P4–P5: an + a verb in -a.'),
    ],
    keyIdea: { text: 'Everything you learned from F1 to P5 is tested somewhere in the IGCSE — today we map it, and set targets in Arabic.', ar: 'هَدَفِي {e|أَنْ أُحَسِّنَ} … · صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P5-L12. Questions 4–5 retrieve the two P5 accuracy rules (ṣaḥīḥun anna + a fact; an + -a) — today students use an + -a for their targets: هَدَفِي أَنْ أُحَسِّنَ …',
  },
  routes: {
    core: ['I can name the four papers and their marks.', 'I can rate my grammar honestly and write one target.'],
    develop: ['I can write one SMART target per paper.', 'I can name a strategy for each target in Arabic.'],
    stretch: ['I can explain the 150-mark map and grade boundaries.', 'I can write a 60–80-word Arabic plan with P5 structures.'],
  },
  vocab: {
    core: ['وَرَقَةُ الامْتِحَانِ', 'مَعَايِيرُ التَّقْيِيمِ', 'جَاهِزِيَّةُ الامْتِحَانِ', 'نُقْطَةُ قُوَّةٍ', 'مَجَالُ تَحْسِينٍ', 'هَدَفٌ مُحَدَّدٌ', 'خُطَّةُ المُرَاجَعَةِ', 'إِتْقَانٌ'],
    forms: {
      'وَرَقَةُ الامْتِحَانِ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'أَوْرَاقُ الامْتِحَانِ' }] }, 'نُقْطَةُ قُوَّةٍ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'نِقَاطُ قُوَّةٍ' }] },
      'مَجَالُ تَحْسِينٍ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'مَجَالَاتُ تَحْسِينٍ' }] }, 'هَدَفٌ مُحَدَّدٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'أَهْدَافٌ مُحَدَّدَةٌ' }] },
      'مَعَايِيرُ التَّقْيِيمِ': { tag: 'pl · sg', forms: [{ l: 'sg.', ar: 'مِعْيَارُ التَّقْيِيمِ' }] }, 'مَحَاوِرُ المَوْضُوعَاتِ': { tag: 'pl · sg', forms: [{ l: 'sg.', ar: 'مِحْوَرٌ' }] },
    },
    vocabNotes: {
      0: 'Papers: the ordinal numbers are feminine because وَرَقَةٌ is feminine — الوَرَقَةُ الأُولَى · الثَّانِيَةُ · الثَّالِثَةُ · الرَّابِعَةُ. مَعَايِيرُ (sg. مِعْيَارٌ) are the criteria the examiner uses — Task Completion, Range, Accuracy.',
      1: 'Readiness and targets: نُقْطَةُ قُوَّةٍ (a strength) ↔ مَجَالُ تَحْسِينٍ (an area for improvement). هَدَفٌ مُحَدَّدٌ = a SPECIFIC target (the website prints مَحَدَّدٌ; the participle of Form II حَدَّدَ is مُحَدَّدٌ). Say your target with an + -a: هَدَفِي أَنْ أُتْقِنَ …',
    },
    bridge: [
      { ar: 'امْتِحَانٌ', urdu: 'امتحان', tr: 'imtihān', en: 'an exam' },
      { ar: 'وَرَقَةٌ', urdu: 'ورق', tr: 'waraq', en: 'a sheet → an exam paper' },
      { ar: 'مِعْيَارٌ', urdu: 'معیار', tr: 'meyār', en: 'a standard, a criterion' },
      { ar: 'هَدَفٌ', urdu: 'ہدف', tr: 'hadaf', en: 'a target, an aim' },
      { ar: 'تَحْقِيقٌ', urdu: 'تحقیق', tr: 'tahqīq', en: 'Arabic: achieving · Urdu: research' },
    ],
    bridgeNotes: 'URDU BRIDGE: امتحان, معیار and ہدف are shared — the exam already speaks your language. Careful: Urdu تحقیق = research, but in تَحْقِيقُ الأَهْدَافِ it means ACHIEVING (the goals).',
  },
  body: [
    P.panel(B[0], {
      ar: 'الامْتِحَانُ الدَّوْلِيُّ', min: 3, eyebrow: 'Teach · map · orient · own (website)',
      points: [
        'Cambridge IGCSE Arabic (Foreign Language) 0544 has FOUR papers testing the four skills: listening, reading, speaking and writing.',
        'Together they carry 150 marks. Every structure you have learned from F1 to P6 is tested somewhere across them.',
        'P6 is not a new content unit — it is the bridge between three years of learning and the exam.',
        'Over the next ten lessons: each paper in full format (L02–L07), three mock papers under exam conditions (L08–L10), targeted revision (L11), and a celebration (L12).',
      ],
      examples: [
        { ar: 'أَرْبَعُ أَوْرَاقٍ لِأَرْبَعِ مَهَارَاتٍ', en: 'four papers for four skills' },
        { ar: 'مِئَةٌ وَخَمْسُونَ دَرَجَةً', en: '150 marks in total' },
        { ar: 'مِنَ الحَرْفِ إِلَى الحُجَّةِ', en: 'from the letter to the argument' },
      ],
      notes: 'TEACH (3 min) — the website panel. Ask: “How many of you have ever sat a full four-skill exam?” Reassure: they already sat four-skill unit assessments at the end of every unit (P1–P5 L12). The IGCSE is the same idea — longer, and with every unit mixed together.',
    }),
    P.table(B[1], {
      w: [1.4, 1.4, 1.1, 1.3, 5.6], core: [0, 1, 2, 3], min: 3, eyebrow: 'Teach · the four papers at a glance (website)', ar: 'الأَوْرَاقُ الأَرْبَعُ',
      foot: 'Listening and reading carry 90 of the 150 marks — 60% of the exam is understanding.',
      notes: 'THE FOUR PAPERS (3 min) — website table. Point to the last row: grade boundaries A* 135+ · A 120+ · B 105+ · C 90+ (website). Ask students to calculate: what percentage is an A? (120 / 150 = 80%).',
    }),
    {
      type: 'mcq', stage: 'teach', min: 2, eyebrow: 'Check for understanding · the four papers (teacher-made)', title: 'Quick check', ar: 'فَحْصٌ سَرِيعٌ', seed: 41,
      questions: [
        q('How many marks is Paper 1 (Listening)?', ['45', '30', '150'], 'Website table: Paper 1 = 45 marks.'),
        q('Which paper includes a role play?', ['Paper 3 — Speaking', 'Paper 4 — Writing', 'Paper 2 — Reading'], 'Paper 3: role play (10) + topic conversation (20).'),
        q('How long is Paper 4 (Writing)?', ['60 minutes', '12 minutes', '40 minutes'], 'Paper 4: Q1 directed writing (15) + Q2 extended writing (15), 60 minutes.'),
        q('What total gives an A*?', ['135+', '120+', '90+'], 'Website boundaries: A* 135+ · A 120+ · B 105+ · C 90+.'),
      ],
      answerSlide: { eyebrow: 'Check for understanding · answers', title: 'Answers and reasons', ar: 'الإِجَابَاتُ' },
      notes: 'QUICK CHECK (2 min) — teacher-made from the website table. Chat four letters on “3-2-1-go”.',
      answerNotes: 'Go through each answer; point back to the row of the table.',
    },
    P.audit(B[3], {
      min: 8, eyebrow: 'You do · the F1–P6 grammar readiness audit (website)',
      notes: `YOU DO — READINESS AUDIT (8 min, both slides). Students copy the table into their book (or use the website tracker) and rate each structure 1–5, then write ONE example sentence from memory for each structure they rate 3+.
Core: rate all 16, write examples for four. Develop: examples for eight. Stretch: examples for all 16.
Keep ratings private. After 8 minutes: each student circles their TWO lowest ratings — these become their revision agenda (L11 returns to them).`,
    }),
    P.table(B[4], {
      w: [1.1, 7.4, 3.8], min: 3, eyebrow: 'Teach · the Bridge lesson map (website)', ar: 'خَرِيطَةُ الجِسْرِ', title: 'The Bridge: lessons 2–7 (full-format practice)',
      headers: ['Lesson', 'Focus', 'My target note'], rows: B[4].rows.slice(0, 6).map((r) => [...r, '______________']), core: [],
      foot: 'Write next to each lesson: which of your two lowest audit ratings it will help.',
      notes: 'BRIDGE MAP 1 (website lesson map, L02–L07). The website asks students to annotate their personal targets against each lesson — the third column is for that.',
    }),
    P.table(B[4], {
        w: [1.1, 7.4, 3.8], eyebrow: 'Teach · the Bridge lesson map (website)', ar: 'خَرِيطَةُ الجِسْرِ', title: 'The Bridge: lessons 8–12 (mocks, revision, celebration)',
        headers: ['Lesson', 'Focus', 'My target note'], rows: B[4].rows.slice(6).map((r) => [...r, '______________']), core: [],
        foot: 'Three mocks, one revision lesson, one celebration — the exam format becomes familiar before the real day.',
        notes: 'BRIDGE MAP 2 (website lesson map, L08–L12). Stress: the mocks are practice, not judgement — their purpose is to find the last gaps in time.',
    }),
    {
      type: 'explain', stage: 'ido', min: 5, eyebrow: 'I do · watch me write a SMART target', title: 'From a wish to a SMART target', ar: 'هَدَفٌ مُحَدَّدٌ',
      pointsHead: 'S · M · A · R · T', exHead: 'SAY IT IN ARABIC (an + -a)', leftW: 6.9,
      points: [
        'SPECIFIC — name the paper and the skill: not “get better at Arabic” but “Paper 1 Listening”.',
        'MEASURABLE — a score: “35+ out of 45” (website example).',
        'ACTION-BASED — tie it to a strategy: “by annotating every question before the audio”.',
        'REALISTIC + TIMED — check it against your audit; “by the L08 mock”.',
      ],
      examples: [
        { ar: 'هَدَفِي أَنْ أُحَسِّنَ دَرَجَتِي فِي الاسْتِمَاعِ', en: 'my target is to improve my listening score' },
        { ar: 'وَيَتَطَلَّبُ ذٰلِكَ أَنْ أَقْرَأَ الأَسْئِلَةَ قَبْلَ الاسْتِمَاعِ', en: 'and that requires me to read the questions before listening' },
        { ar: 'وَلَوْ رَاجَعْتُ كُلَّ أُسْبُوعٍ، لَأَتْقَنْتُ القَوَاعِدَ', en: 'had I revised every week, I would have mastered the grammar' },
      ],
      callout: { head: 'WEBSITE EXAMPLE', text: '“Score 35+/45 in Paper 1 by annotating every question before the audio and verifying on the second listen.”' },
      notes: 'I DO (5 min) — think aloud with the website example. Turn a vague wish into a SMART target on screen: “I want to be better at listening” → S (Paper 1) → M (35+/45) → A (annotate + verify) → T (by the L08 mock). Then say it in Arabic with an + -a: هَدَفِي أَنْ أُحَسِّنَ … · يَتَطَلَّبُ ذٰلِكَ أَنْ أَقْرَأَ … — P5 grammar now serves the student’s own plan.',
    },
    P.fields(B[5], {
      min: 5, eyebrow: 'You do · SMART targets — one per paper (website)', ar: 'أَهْدَافِي', head: 'Paper', ex: 'Example (website style)', lw: 3.2, ew: 5.6, core: [0],
      examples: ['35+/45 by annotating every question and verifying on the 2nd listen', '35+/45 by finding the key word in the text before choosing', '24+/30 by answering every question with opinion + reason + example', '24+/30 by planning the essay architecture before writing'],
      foot: 'Specific · measurable · tied to a strategy. Write all four in your book — we will check them after each mock.',
      notes: 'YOU DO — SMART TARGETS (5 min, website fields). Core: one target in English (Paper 1 or the paper they feel strongest in). Develop / Stretch: all four, each with a strategy. Students keep these in the front of their book — L11 compares them with the mock results.',
    }),
    {
      type: 'speaking', stage: 'youdo', min: 4, eyebrow: 'You do · say it before you write it', title: 'My strengths, my targets', ar: 'التَّحَدُّثُ',
      prompts: [
        { route: 'core', ar: 'مَا نُقْطَةُ قُوَّتِكَ فِي العَرَبِيَّةِ؟' },
        { route: 'develop', ar: 'مَا مَجَالُ التَّحْسِينِ عِنْدَكَ، وَمَا هَدَفُكَ؟' },
        { route: 'stretch', ar: 'مَاذَا يَتَطَلَّبُ تَحْقِيقُ هَدَفِكَ؟' },
      ],
      stems: [
        { route: 'core', ar: 'نُقْطَةُ قُوَّتِي ______ .' },
        { route: 'develop', ar: 'مَجَالُ تَحْسِينِي ______ ، وَهَدَفِي أَنْ ______ .' },
        { route: 'stretch', ar: 'يَتَطَلَّبُ تَحْقِيقُ هَدَفِي أَنْ ______ .' },
      ],
      model: [
        { who: 'A', ar: 'نُقْطَةُ قُوَّتِي القِرَاءَةُ، وَمَجَالُ تَحْسِينِي الاسْتِمَاعُ.', en: 'My strength is reading; my area for improvement is listening.' },
        { who: 'B', ar: 'هَدَفِي أَنْ أُحَسِّنَ دَرَجَتِي، وَيَتَطَلَّبُ ذٰلِكَ أَنْ أَقْرَأَ الأَسْئِلَةَ أَوَّلًا.', en: 'My target is to improve my score; that requires reading the questions first.' },
      ],
      notes: 'SPEAKING (4 min) — teacher-made prompts on today’s vocabulary. ● 10 s think → ↔ 45 s rehearse muted → ◎ two pairs on open mic → ↺ one student summarises (نُقْطَةُ قُوَّتِهِ … · هَدَفُهُ أَنْ …). To a girl: قُوَّتِكِ · عِنْدَكِ · هَدَفُكِ.',
    },
    {
      type: 'routes', stage: 'youdo', min: 6, eyebrow: 'You do · write your plan · 6 minutes', title: 'Write: choose your route', ar: 'اُكْتُبْ',
      core: { amount: '1 target + 2 sentences', task: 'One SMART target in English, then two Arabic sentences with the frames nuqṭatu quwwatī … and hadafī an …', how: 'Use the frames slide. Check: the verb after أَنْ ends in -a.' },
      develop: { amount: '4 targets + 4 strategies', task: 'All four SMART targets, and for each one an Arabic strategy with yataṭallabu an or yanbaghī an.', how: 'One line per paper. Check every -a after an.' },
      stretch: { amount: '60–80 words', task: 'An Arabic paragraph: my journey and my exam plan — with ṣaḥīḥun anna … ghayra anna, yataṭallabu an and law … la-.', how: 'Open with bada’tu riḥlatī …; close with wa-bināʾan ʿalā mā sabaqa.' },
      notes: 'YOU DO (6 min writing). Live feedback: students post one Arabic sentence in the chat after 3 minutes; correct the an + -a and the ṣaḥīḥun anna + -u in private chat.',
    },
    {
      type: 'frames', stage: 'youdo', eyebrow: 'You do · support · Core and Develop frames', title: 'Sentence frames and word bank', ar: 'قَوَالِبُ الجُمَلِ',
      core: [
        { en: 'My strength is …', ar: 'نُقْطَةُ قُوَّتِي ______ .' },
        { en: 'My area for improvement is …', ar: 'مَجَالُ تَحْسِينِي ______ .' },
        { en: 'My target is to improve …', ar: 'هَدَفِي أَنْ أُحَسِّنَ ______ .' },
        { en: 'I will revise … every week.', ar: 'سَأُرَاجِعُ ______ كُلَّ أُسْبُوعٍ.' },
      ],
      develop: [
        { en: 'Achieving my target requires me to …', ar: 'يَتَطَلَّبُ تَحْقِيقُ هَدَفِي أَنْ ______ .' },
        { en: 'I ought to … before the exam.', ar: 'يَنْبَغِي أَنْ ______ قَبْلَ الامْتِحَانِ.' },
        { en: 'It is true that …; however, …', ar: 'صَحِيحٌ أَنَّ ______ ، غَيْرَ أَنَّ ______ .' },
        { en: 'Had I revised earlier, …', ar: 'لَوْ رَاجَعْتُ مُبَكِّرًا، لَأَتْقَنْتُ ______ .' },
      ],
      bank: ['القِرَاءَةُ', 'الاسْتِمَاعُ', 'التَّحَدُّثُ', 'الكِتَابَةُ', 'دَرَجَتِي', 'أَقْرَأَ الأَسْئِلَةَ أَوَّلًا', 'أُرَاجِعَ القَوَاعِدَ', 'أُخَطِّطَ لِلْمَقَالِ', 'المُضَارِعَ المَنْصُوبَ', 'الشَّرْطَ', 'الوَقْتَ مَحْدُودٌ', 'الإِتْقَانَ مُمْكِنٌ'],
      notes: 'Frames on today’s vocabulary and the P5 structures. Develop frame 4 (law … la-) is a reflection: لَوْ رَاجَعْتُ مُبَكِّرًا، لَأَتْقَنْتُ القَوَاعِدَ.',
    },
    P.reflect(B[6], {
      min: 3, eyebrow: 'Feedback · the journey — from letter to argument (website)', ar: 'رِحْلَتِي مَعَ العَرَبِيَّةِ',
      can: 'I began my journey with Arabic with …', next: 'And today I am able to …',
      modelCan: 'حَرْفِ البَاءِ', modelNext: 'أَكْتُبَ مَقَالًا حِجَاجِيًّا',
      extra: [['وَهَدَفِي فِي الامْتِحَانِ أَنْ ______ .', 'And my target in the exam is to …', 'أُحَقِّقَ أَعْلَى دَرَجَةٍ']],
      foot: 'In F1 you learned to write the letter ب. Today you can build a formal Arabic argument. Name that journey.',
      notes: 'JOURNEY REFLECTION (3 min) — the website exit frames. Note: after أَسْتَطِيعُ أَنْ the verb ends in -a (أَكْتُبَ) — the P4 subjunctive, used about themselves. Invite two or three students to read theirs aloud (by invitation). A moment to celebrate how far they have come.',
    }),
  ],
  selfCheck: [
    { route: 'core', text: 'I can state the marks, timing and format of each of the four papers.' },
    { route: 'core', text: 'I have rated my confidence in every F1–P6 grammar structure honestly.' },
    { route: 'develop', text: 'I have written one SMART target per paper.' },
    { route: 'develop', text: 'I can name a specific strategy that will move each target forward.' },
    { route: 'stretch', text: 'I said my target in Arabic with an + a verb in -a.' },
  ],
  prep: {
    words: [['اسْتِرَاتِيجِيَّاتُ الاسْتِمَاعِ', 'listening strategies', 'sg. اسْتِرَاتِيجِيَّةٌ'], ['قِرَاءَةُ الأَسْئِلَةِ مُسْبَقًا', 'reading the questions in advance', '—'], ['الاسْتِمَاعُ الأَوَّلُ لِلْفَهْمِ العَامِّ', 'first listen for gist', '—'], ['التَّحَقُّقُ فِي الاسْتِمَاعِ الثَّانِي', 'verifying on the second listen', '—'], ['مُشَتِّتَاتُ الاسْتِمَاعِ', 'listening distractors', 'sg. مُشَتِّتٌ']],
    questionEn: 'What do you do in the 30 seconds before a listening text begins?',
    questionAr: 'قَبْلَ الاسْتِمَاعِ، أَقْرَأُ ______ وَأُحَدِّدُ ______ .',
    homework: {
      core: 'Copy your four SMART targets into the front of your book; learn the five words.',
      develop: 'Add an Arabic strategy line to each target; learn the five words.',
      stretch: 'Finish the 60–80-word Arabic paragraph on your journey and plan; learn the five words.',
    },
    wordsSource: 'The five words come from the website P6-L02 vocabulary (listening strategies).',
  },
  remember: 'Remember: four papers · 150 marks · one SMART target per paper — and say it in Arabic: hadafī an + a verb in -a.',
});

module.exports = { meta, slides };
