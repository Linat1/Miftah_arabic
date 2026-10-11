'use strict';
/* P6-L05 · Paper 4 Q2 — Extended Writing: Essay Architecture Under Exam Conditions — website: Pathways › Progression › P6 › P6-L05 (time management and
 * architecture, the Q2 mark scheme TC 5 · Range 5 · Accuracy 5, three 130–150-word argumentative essays — health, education, social issues — with their
 * models, the writing performance profile and the reflection). Website vocabulary, cards, mark scheme, tasks, checklists, models, fields and exit frames used
 * as published, with waṣl alif shown without a kasra, لِكَيْ always written with its sukūn and نُوَلِيَ → نُولِيَ (essay 1 model: Form IV أَوْلَى، يُولِي “to
 * give (care)”). Teacher-made: the Do Now, the four-minute plan I Do, the routes, the essay skeleton frames and the English model translations. */
const P = require('./p6-common');
const { q } = P;

const meta = P.meta('P6')({
  n: 5, fileTitle: 'Paper_4_Q2_Extended_Writing', chip: 'IGCSE Bridge',
  title: 'Paper 4 Q2 — Extended Writing: Essay Architecture Under Exam Conditions', arabic: 'الوَرَقَةُ الرَّابِعَةُ — الكِتَابَةُ المُوَسَّعَةُ: هَيْكَلُ المَقَالِ تَحْتَ ضَغْطِ الوَقْتِ',
  focus: 'Write a full 130–150-word argumentative essay against the clock: plan for four minutes, then thesis → evidence → ṣaḥīḥun anna … ghayra anna → law … la- → wa-bināʾan ʿalā mā sabaqa + -a — with Range that never costs Accuracy.',
  icon: 'FaFeatherPointed', iconSet: 'fa6',
});

const s = P.site('P6-L05', [['نُوَلِيَ', 'نُولِيَ']]);
const B = s.blocks;
const NEXT = { nextCode: 'P6-L06', nextTitle: 'Paper 3 Role Play — Transactional Language at IGCSE Standard', nextAr: 'الوَرَقَةُ الثَّالِثَةُ — تَمْثِيلُ الدَّوْرِ' };

const E = [
  P.writing(B[3], {
    chip: 'ESSAY 1 · HEALTH', eyebrow: 'You do · Essay 1 — health topic (website)', title: 'Essay 1 — Mental vs physical health', ar: 'الصِّحَّةُ النَّفْسِيَّةُ',
    phrases: [['لَا تَقِلُّ أَهَمِّيَّةً عَنِ', 'is no less important than'], ['التَّوَتُّرَ المُزْمِنَ يُضْعِفُ المَنَاعَةَ', 'chronic stress weakens immunity'], ['إِهْمَالَ النَّفْسِ', 'neglecting the mind'], ['لَقَلَّتْ حَالَاتُ الاحْتِرَاقِ', 'burnout cases would have fallen'], ['أَنْ نُولِيَ … العِنَايَةَ', 'that we give … care']],
    en: 'It is noted that mental health is no less important than physical health. Researchers have confirmed that chronic stress weakens immunity and affects the body. It is true that the body needs care; however, neglecting the mind destroys health as a whole. Had schools cared about psychological support early, cases of burnout would have fallen. When a person balances body and mind, they live a better life. Based on the above, the matter requires us to give mental health the care it deserves.',
    find: ['thesis (yushāru ilā anna)', 'evidence (akkada … anna)', 'ṣaḥīḥun anna … ghayra anna', 'law … la- · wa-bināʾan + -a'],
    modelEyebrow: 'Feedback · Essay 1 · the website model', modelNotes: 'Website model (health), with one fix: نُوَلِيَ → نُولِيَ (Form IV أَوْلَى، يُولِي). Note إِذَا وَازَنَ … عَاشَ — a past-tense result for a general truth (“whenever”).',
  }),
  P.writing(B[4], {
    chip: 'ESSAY 2 · EDUCATION', eyebrow: 'You do · Essay 2 — education topic (website)', title: 'Essay 2 — Is university still necessary?', ar: 'التَّعْلِيمُ الجَامِعِيُّ',
    phrases: [['لَا يَزَالُ رَكِيزَةً مُهِمَّةً', 'is still an important pillar'], ['رُوَّادِ الأَعْمَالِ', 'entrepreneurs'], ['لَا تُبْنَى إِلَّا بِـ…', 'are only built through …'], ['تَرْفَعُ فُرَصَ التَّوْظِيفِ', 'raises employment chances'], ['لَا أَنْ نَسْتَغْنِيَ عَنْهُ', 'not do without it']],
    en: 'It is noted that university education is still an important pillar of success. It is true that some entrepreneurs have succeeded without a degree; however, the majority need skills that are only built through organised learning. Labour-market experts have confirmed that specialised knowledge raises employment chances. If universities develop their curricula, their link with reality will grow. Had we relied on self-taught skills alone, many would have been deprived of fair opportunities. Based on the above, we should develop education, not do without it.',
    find: ['thesis + concession', 'expert evidence', 'idhā … sa- · law … la-', 'yanbaghī an … lā an …'],
    modelEyebrow: 'Feedback · Essay 2 · the website model', modelNotes: 'Website model (education). Stretch point: يَنْبَغِي أَنْ نُطَوِّرَ … لَا أَنْ نَسْتَغْنِيَ — two verbs in -a, contrasted with لَا.',
  }),
  P.writing(B[5], {
    chip: 'ESSAY 3 · SOCIAL ISSUES', eyebrow: 'You do · Essay 3 — social issues topic (website)', title: 'Essay 3 — Social media: more good than harm?', ar: 'وَسَائِلُ التَّوَاصُلِ',
    phrases: [['سِلَاحٌ ذُو حَدَّيْنِ', 'a double-edged sword'], ['تُقَرِّبُ النَّاسَ', 'brings people closer'], ['المَعْلُومَاتِ المُضَلِّلَةَ', 'misinformation'], ['لَوْ وُضِعَتْ ضَوَابِطُ حَكِيمَةٌ', 'had wise controls been set'], ['لِكَيْ نَجْنِيَ فَوَائِدَهَا', 'so that we reap its benefits']],
    en: 'It is noted that social media is a double-edged sword. It is true that it brings people closer and spreads knowledge; however, it deepens the gap and spreads misinformation. Researchers have confirmed that excessive use weakens concentration. Had wise controls been put in place, the harm would have shrunk. If we use it consciously, it will become a tool for building. Based on the above, the matter requires us to raise generations on responsible use so that we reap its benefits and avoid its dangers.',
    find: ['a thesis image', 'ṣaḥīḥun anna-hā … ghayra anna-hā', 'passive law wuḍiʿat … la-', 'an + li-kay: three verbs in -a'],
    modelEyebrow: 'Feedback · Essay 3 · the website model', modelNotes: 'Website model (social issues). Count the verbs in -a in the last sentence: نُرَبِّيَ · نَجْنِيَ · نَتَجَنَّبَ.',
  }),
];

const slides = P.bridgeLesson('P6-L05', {
  site: s, next: NEXT,
  plan: '0–1 Welcome · 1–2 Map · 2–8 Do Now + answers · 8–9 Objectives · 9–12 Essay words · 12–15 Time and architecture · 15–17 The Q2 mark scheme · 17–21 A four-minute plan (I Do) · 21–23 Choose your essay · 23–48 Plan 4 + write 21 (exam conditions) · 48–53 Models + self-mark · 53–55 Writing profile · 55–58 Reflection + self-check · 58–60 Preparation.',
  source: 'The website P6-L05: the extended-writing vocabulary (8 words), the time-management and architecture cards, the Paper 4 Q2 mark scheme (TC 5 · Range 5 · Accuracy 5), three argumentative essays with checklists and models (mental vs physical health · is university still necessary? · social media: more good than harm?), the writing performance profile and the reflection frames.',
  support: `• EXAM CONDITIONS: one essay, 25 minutes (4 planning + 21 writing) — in the real Paper 4 about 35 minutes are available for Q2. Students choose the topic whose vocabulary they know best (website mark-scheme note: Range falls when you are hunting for words).
• Routes by length and scaffold: Core — the essay skeleton frames, 90–110 words · Develop — 130 words · Stretch — 150 words with both conditionals. Everyone uses the same architecture.
• Website note: length is capped at 130–150 words — more words do not gain marks if quality drops. Models are shown ONLY after writing; students self-mark against the website mark scheme.
• Website fix: نُوَلِيَ → نُولِيَ (essay 1 model).`,
  steps: [
    ['donow', 6, 'Retrieval: essay words and P5 accuracy.', 'اِبْدَأِ الآنَ'],
    ['teach', 8, 'Time, architecture and the Q2 mark scheme.', 'الهَيْكَلُ'],
    ['ido', 4, 'Watch me plan in four minutes.', 'شَاهِدْ'],
    ['youdo', 27, 'Choose your essay · plan · write (exam conditions).', 'اُكْتُبْ'],
    ['feedback', 10, 'Models, self-marking, profile, reflection.', 'قَيِّمْ'],
    ['prep', 2, 'Get ready for the role play.', 'اِسْتَعِدَّ'],
  ],
  doNow: {
    questions: [
      q('What does هَيْكَلُ المَقَالِ mean?', ['essay structure', 'essay title', 'essay length'], 'Prepared at home (P6-L04).'),
      q('What does التَّنَوُّعُ المَعْجَمِيُّ mean?', ['lexical variety', 'a dictionary', 'spelling'], 'Prepared at home (P6-L04).'),
      q('What does الدِّقَّةُ تَحْتَ ضَغْطِ الوَقْتِ mean?', ['accuracy under time pressure', 'a time limit', 'pressure at work'], 'Prepared at home (P6-L04).'),
      q('Which opens the conclusion?', ['وَبِنَاءً عَلَى مَا سَبَقَ', 'صَحِيحٌ أَنَّ', 'أَكَّدَ البَاحِثُونَ أَنَّ'], 'P5-L07: the formal conclusion connector.'),
      q('Complete: يَتَطَلَّبُ الأَمْرُ أَنْ ___ الأَجْيَالَ عَلَى الاسْتِخْدَامِ المَسْؤُولِ.', ['نُرَبِّيَ', 'نُرَبِّي', 'رَبَّيْنَا'], 'P5: an + -a (hidden in -ī verbs: nurabbiya).'),
    ],
    keyIdea: { text: 'Q2 is the P5 essay under exam conditions — four minutes of planning buys you the whole architecture.', ar: 'أُطْرُوحَةٌ ← دَلِيلٌ ← صَحِيحٌ أَنَّ … غَيْرَ أَنَّ ← وَبِنَاءً عَلَى مَا سَبَقَ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P6-L04. Questions 4–5 retrieve the P5 essay close (P5-L07, L09) — today it is written against the clock.',
  },
  routes: {
    core: ['I can plan the four paragraphs before writing.', 'I can write a thesis and one concession–refutation.'],
    develop: ['I can write 130 words with the full architecture.', 'I can close with a connector + a verb in -a.'],
    stretch: ['I can write 150 words with both conditionals.', 'I can self-mark against TC, Range and Accuracy.'],
  },
  vocab: {
    core: ['الكِتَابَةُ المُوَسَّعَةُ', 'هَيْكَلُ المَقَالِ', 'الأُطْرُوحَةُ', 'نَقِيضُ الحُجَّةِ', 'الرَّدُّ', 'الخَاتِمَةُ'],
    forms: { 'الأُطْرُوحَةُ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'الأُطْرُوحَاتُ' }] }, 'هَيْكَلُ المَقَالِ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'هَيَاكِلُ' }] }, 'الخَاتِمَةُ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'الخَوَاتِمُ' }] } },
    vocabNotes: { 0: 'The essay in five words: الأُطْرُوحَةُ (thesis) → الدَّلِيلُ (evidence) → نَقِيضُ الحُجَّةِ (the counter-argument, conceded) → الرَّدُّ (the refutation) → الخَاتِمَةُ (the conclusion). التَّنَوُّعُ المَعْجَمِيُّ (lexical variety) and الدِّقَّةُ تَحْتَ ضَغْطِ الوَقْتِ (accuracy under time pressure) are today’s two challenges.' },
    bridge: [
      { ar: 'وَقْتٌ', urdu: 'وقت', tr: 'waqt', en: 'time' },
      { ar: 'نَقِيضٌ', urdu: 'نقیض', tr: 'naqīz', en: 'the opposite, the counter' },
      { ar: 'خَاتِمَةٌ', urdu: 'خاتمہ', tr: 'khātima', en: 'Arabic: a conclusion · Urdu: an end' },
      { ar: 'دِقَّةٌ', urdu: 'دقت', tr: 'diqqat', en: 'Arabic: accuracy · Urdu: difficulty' },
      { ar: 'ضَغْطٌ', urdu: 'دباؤ', tr: 'dabāo', en: 'pressure (Arabic ضَغْطٌ, Urdu دباؤ)' },
    ],
    bridgeNotes: 'URDU BRIDGE: وقت and نقیض are shared. Remember the traps from earlier: خاتمہ (Urdu: an end) → الخَاتِمَةُ (Arabic: the conclusion paragraph); دقت (Urdu: difficulty) → الدِّقَّةُ (Arabic: accuracy). Today’s phrase: الدِّقَّةُ تَحْتَ ضَغْطِ الوَقْتِ — accuracy under time pressure.',
  },
  body: [
    P.cards(B[1], {
      min: 3, eyebrow: 'Teach · plan · write · check (website)', ar: 'الوَقْتُ وَالهَيْكَلُ', title: 'Time management and architecture',
      examples: [
        { ar: 'عِشْرُونَ دَقِيقَةً · خَمْسٌ وَثَلَاثُونَ · خَمْسٌ', en: 'Q1 · Q2 · checking' },
        { ar: 'أُطْرُوحَةٌ ← دَلِيلٌ', en: 'thesis → evidence' },
        { ar: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ ← وَبِنَاءً عَلَى مَا سَبَقَ', en: 'concession → refutation → conclusion' },
      ],
      notes: 'TEACH (3 min) — the website cards. Draw the hour as a bar: 20 min Q1 · 35 min Q2 · 5 min checking. Stress card 4: Range WITHOUT risk — a simple accurate sentence beats an ambitious broken one.',
    }),
    P.markScheme(B[2], {
      min: 2, eyebrow: 'Teach · know how you are marked (website)',
      items: ['A clear thesis (a position, not just a topic) · cited evidence, a genuine concession and a clear refutation · a formal conclusion connector with a verb in -a.', 'At least three different tenses · one conditional and one subjunctive trigger · a concession structure and a formal connector.', 'Correct -a after triggers and the Type 2 la- · the indicative after ṣaḥīḥun anna · agreement and tense free of major errors.'],
      foot: 'Three equal criteria. Length is capped at 130–150 words — choose the topic whose vocabulary you know best.',
    }),
    {
      type: 'formsTable', stage: 'ido', min: 4, eyebrow: 'I do · watch me plan Essay 3 in four minutes', title: 'A four-minute plan', ar: 'خُطَّةُ أَرْبَعِ دَقَائِقَ', ltr: true,
      cols: [{ label: 'Para.', w: 1.0 }, { label: 'Job', w: 2.4 }, { label: 'My plan (notes, not sentences)', w: 5.6, size: 16 }, { label: 'Range ticks', w: 3.33 }],
      rows: [
        { core: true, cells: ['1', 'thesis', 'سِلَاحٌ ذُو حَدَّيْنِ', 'yushāru ilā anna'] },
        { core: true, cells: ['2', 'evidence', 'البَاحِثُونَ: الإِفْرَاطُ ← التَّرْكِيزُ', 'akkada … anna · present'] },
        { core: true, cells: ['3', 'concession + refutation', 'تُقَرِّبُ النَّاسَ ✗ ← تَنْشُرُ المَعْلُومَاتِ المُضَلِّلَةَ', 'ṣaḥīḥun anna … ghayra anna'] },
        { cells: ['3', 'analysis', 'ضَوَابِطُ حَكِيمَةٌ · اسْتِخْدَامٌ وَاعٍ', 'law … la- · idhā … sa-'] },
        { core: true, cells: ['4', 'conclusion', 'تَرْبِيَةُ الأَجْيَالِ ← الفَوَائِدُ', 'wa-bināʾan + an / li-kay'] },
      ],
      foot: 'Notes, not sentences: four minutes. Then write paragraph by paragraph, ticking the Range column.',
      notes: 'I DO (4 min) — plan Essay 3 live, against a visible 4-minute timer, in short Arabic notes. Show that the Range column is planned BEFORE writing (website teaching: plan both marks at once — P5-L09). Then hide the plan and start the timer for students.',
    },
    {
      type: 'routes', stage: 'youdo', min: 2, eyebrow: 'You do · choose your essay · plan 4 + write 21 minutes', title: 'Choose your essay and your route', ar: 'اخْتَرْ مَقَالَكَ',
      core: { amount: '90–110 words', task: 'Any essay, with the essay skeleton frames: thesis · evidence · concession–refutation · conclusion.', how: 'Fill the frames, then add one sentence of your own to each paragraph.' },
      develop: { amount: '130 words', task: 'Any essay with the full architecture and one conditional.', how: 'Plan 4 min · write 21 min · leave 2 min to check every -a.' },
      stretch: { amount: '150 words', task: 'Any essay with the full architecture, BOTH conditionals and two triggers.', how: 'Choose the topic whose vocabulary you know best. Check ṣaḥīḥun anna + -u.' },
      notes: 'ROUTES (2 min). Topics: Essay 1 health · Essay 2 education · Essay 3 social issues (website). Exam conditions from now: cameras on, no translation tools, no talking. Show a visible timer.',
    },
    E[0][0], E[1][0], E[2][0],
    {
      type: 'frames', stage: 'youdo', eyebrow: 'You do · support · the essay skeleton (Core) and upgrades (Develop)', title: 'Essay skeleton and word bank', ar: 'هَيْكَلُ المَقَالِ',
      core: [
        { en: 'P1 · It is noted that … more than …', ar: 'يُشَارُ إِلَى أَنَّ ______ أَكْثَرَ مِمَّا ______ .' },
        { en: 'P2 · Researchers confirmed that …', ar: 'أَكَّدَ البَاحِثُونَ أَنَّ ______ .' },
        { en: 'P3 · It is true that …; however, …', ar: 'صَحِيحٌ أَنَّ ______ ، غَيْرَ أَنَّ ______ .' },
        { en: 'P4 · Based on the above, … requires that …', ar: 'وَبِنَاءً عَلَى مَا سَبَقَ، يَتَطَلَّبُ الأَمْرُ أَنْ ______ .' },
      ],
      develop: [
        { en: 'Had … been …, … would have …', ar: 'لَوْ ______ مُبَكِّرًا، لَكَانَ ______ .' },
        { en: 'If we …, … will …', ar: 'إِذَا ______ ، سَيَكُونُ ______ .' },
        { en: '… is no less important than …', ar: '______ لَا يَقِلُّ أَهَمِّيَّةً عَنْ ______ .' },
        { en: '… so that we …', ar: '______ لِكَيْ ______ .' },
      ],
      bank: ['الصِّحَّةَ النَّفْسِيَّةَ', 'التَّعْلِيمَ الجَامِعِيَّ', 'وَسَائِلَ التَّوَاصُلِ', 'سِلَاحٌ ذُو حَدَّيْنِ', 'يُضْعِفُ التَّرْكِيزَ', 'فُرَصَ التَّوْظِيفِ', 'الدَّعْمِ النَّفْسِيِّ', 'المَعْلُومَاتِ المُضَلِّلَةَ', 'نُطَوِّرَ', 'نُولِيَ … العِنَايَةَ', 'نَجْنِيَ فَوَائِدَهَا', 'الاسْتِخْدَامِ المَسْؤُولِ'],
      notes: 'Frames for all three topics. Core: the four skeleton frames give the full architecture. Develop: the four upgrade frames add Range.',
    },
    E[0][1], E[1][1], E[2][1],
    P.fields(B[6], {
      min: 2, eyebrow: 'You do · writing performance profile (website)', ar: 'مِلَفُّ الكِتَابَةِ', head: 'Record', ex: 'Example', lw: 4.6, ew: 4.4,
      examples: ['TC 4/5 · Range 3/5 · Accuracy 3/5', 'my concession–refutation', 'a second conditional', 'the -a after an'],
      foot: 'Copy your weakest Range marker and your most common Accuracy error under your Paper 4 target.',
      notes: 'WRITING PROFILE (2 min) — website fields, after self-marking with the mark scheme and the model.',
    }),
    P.reflect(B[7], {
      min: 2, eyebrow: 'Feedback · the exam gives you more time (website)', ar: 'التَّأَمُّلُ', can: 'the element I write confidently', next: 'my practice before the mock',
      modelCan: 'the concession–refutation pair', modelNext: 'the Type 2 la- result',
      extra: [['أُتْقِنُ الآنَ ______ .', 'I have now mastered …', 'بِنْيَةَ المَقَالِ']],
      foot: 'In the real exam you have about 35 minutes for Q2 — today’s 25 minutes was the harder version.',
      notes: 'REFLECTION (2 min) — website frames. Encourage: if they managed the architecture in 25 minutes, 35 minutes will feel comfortable.',
    }),
  ],
  selfCheck: [
    { route: 'core', text: 'I opened with a clear thesis and supported it with cited evidence.' },
    { route: 'core', text: 'I conceded with ṣaḥīḥun anna and refuted with ghayra anna.' },
    { route: 'develop', text: 'I closed with wa-bināʾan ʿalā mā sabaqa and a verb in -a.' },
    { route: 'develop', text: 'I kept to 130–150 words and checked accuracy before submitting.' },
    { route: 'stretch', text: 'I used both conditionals and self-marked against TC, Range and Accuracy.' },
  ],
  prep: {
    words: [['تَمْثِيلُ الدَّوْرِ', 'role play', '—'], ['الاسْتِجَابَةُ لِلْمُحَفِّزَاتِ', 'responding to prompts', '—'], ['طَلَبُ المَعْلُومَاتِ', 'requesting information', '—'], ['التَّفَاوُضُ', 'negotiation', '—'], ['حَلُّ المُشْكِلَةِ', 'problem-solving', 'pl. حُلُولٌ']],
    questionEn: 'How would you ask politely for an appointment at a health centre?',
    questionAr: 'مِنْ فَضْلِكَ، أُرِيدُ أَنْ ______ .',
    homework: {
      core: 'Redraft your essay with the model’s phrases; learn the five words.',
      develop: 'Write a second essay plan (4 minutes) for another topic; learn the five words.',
      stretch: 'Write a second essay in 25 minutes; learn the five words.',
    },
    wordsSource: 'The five words come from the website P6-L06 vocabulary (role play and transactional language).',
  },
  remember: 'Remember: plan for four minutes — then thesis → evidence → ṣaḥīḥun anna … ghayra anna → law … la- → wa-bināʾan + -a. 130–150 words; Range without risk.',
});

module.exports = { meta, slides };
