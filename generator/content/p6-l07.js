'use strict';
/* P6-L07 · Paper 3 Topic Conversation — Extended Speaking at IGCSE Level — website: Pathways › Progression › P6 › P6-L07 (the topic-conversation
 * vocabulary, three answers to one question at Band 2 · 3 · 5, the mark scheme — Communication 15 · Quality of Language 5 — a full three-question
 * conversation with a Band 5 model, an extra question bank, emergency sentences for weak topics, and the reflection). Website vocabulary, cards,
 * mark scheme, prompts, model, fields and exit frames used as published, with waṣl alif shown without a kasra. Teacher-made: the Do Now, the
 * Band 5 build-up (I Do), the pause-and-think phrases, the starts for every question, the example emergency sentences and the routes. */
const P = require('./p6-common');
const { q } = P;

const meta = P.meta('P6')({
  n: 7, fileTitle: 'Paper_3_Topic_Conversation', chip: 'IGCSE Bridge',
  title: 'Paper 3 Topic Conversation — Extended Speaking at IGCSE Level', arabic: 'الوَرَقَةُ الثَّالِثَةُ — المُحَادَثَةُ المَوْضُوعِيَّةُ',
  focus: 'Turn a one-line answer into a Band 5 answer: opinion → reason → example → concession → conditional → subjunctive conclusion — and keep talking when a question surprises you.',
  icon: 'FaMicrophoneLines', iconSet: 'fa6',
});

const s = P.site('P6-L07');
const B = s.blocks;
const NEXT = { nextCode: 'P6-L08', nextTitle: 'Mock Examination — Paper 1 Listening (Full Exam Conditions)', nextAr: 'امْتِحَانٌ تَجْرِيبِيٌّ — الوَرَقَةُ الأُولَى: الاسْتِمَاعُ' };

const BAND5 = B[1].items[2].ar;

const slides = P.bridgeLesson('P6-L07', {
  site: s, next: NEXT,
  plan: '0–1 Welcome · 1–2 Map · 2–8 Do Now + answers · 8–9 Objectives · 9–13 Conversation words · 13–16 Band 2 · 3 · 5 · 16–18 The mark scheme · 18–21 I Do: build a Band 5 answer · 21–23 Pause-and-think phrases · 23–38 The full conversation in pairs · 38–45 Question bank · 45–51 Emergency sentences · 51–55 Reflection + self-check · 55–57 Preparation for the mock.',
  source: 'The website P6-L07: the topic-conversation vocabulary (8 words), the cards “What a Band 5 answer looks like” (Band 2 · 3 · 5 answers to one question), the mark scheme (Communication 15 · Quality of Language 5), the full three-question practice with a Band 5 model, the extra question bank (4 questions), the emergency-sentence fields and the reflection frames.',
  support: `• SPEAKING LESSON in pairs on open mic: A = examiner (reads the question, times 1 minute), B = candidate; then swap. The teacher listens to one pair per question.
• Routes: Core — answer with opinion + reason + example (the three green frames), at least three sentences · Develop — add a concession (صَحِيحٌ أَنَّ … غَيْرَ أَنَّ) · Stretch — the full Band 5 chain: evidence + concession + conditional + subjunctive.
• Topic sensitivity: the question on study pressure may touch real anxiety. Allow students to answer about “students in general” rather than themselves.
• The website message: development is the key — two sentences cap at about Band 3; four to five developed sentences reach Band 5.`,
  steps: [
    ['donow', 6, 'Retrieval: conversation words and Band 5 structures.', 'اِبْدَأِ الآنَ'],
    ['teach', 5, 'Band 2 · 3 · 5 and the mark scheme.', 'المَعَايِيرُ'],
    ['ido', 5, 'Watch me build a Band 5 answer.', 'شَاهِدْ'],
    ['youdo', 28, 'The full conversation, question bank, emergency sentences.', 'تَحَدَّثْ'],
    ['feedback', 4, 'Reflection and self-check.', 'قَيِّمْ'],
    ['prep', 2, 'Get ready for the listening mock.', 'اِسْتَعِدَّ'],
  ],
  doNow: {
    questions: [
      q('What does التَّوْسِيعُ فِي الإِجَابَةِ mean?', ['extending the answer', 'a short answer', 'a correct answer'], 'Prepared at home (P6-L06).'),
      q('What does الرَّأْيُ مَعَ الأَسْبَابِ mean?', ['opinion with reasons', 'a reason without an opinion', 'the other side'], 'Prepared at home (P6-L06).'),
      q('What does التَّعَافِي مِنَ الأَخْطَاءِ mean?', ['recovering from errors', 'avoiding errors', 'counting errors'], 'Prepared at home (P6-L06).'),
      q('Choose the concession: ___ أَنَّ التِّقْنِيَّةَ مُفِيدَةٌ، غَيْرَ أَنَّ …', ['صَحِيحٌ', 'لِأَنَّ', 'لَوْ'], 'P5: ṣaḥīḥun anna … ghayra anna.'),
      q('Complete the demand: يَتَطَلَّبُ الأَمْرُ أَنْ ___ المَدَارِسُ دَعْمًا.', ['تُوَفِّرَ', 'تُوَفِّرُ', 'وَفَّرَتْ'], 'an + verb in -a (P5-L03).'),
    ],
    keyIdea: { text: 'Development earns the band: opinion → reason → example → analysis.', ar: 'فِي رَأْيِي … لِأَنَّ … فَمَثَلًا … لِذَا يَتَطَلَّبُ الأَمْرُ أَنْ …' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P6-L06. Questions 4–5 retrieve the concession and the subjunctive of demand — the two structures that lift an answer to Band 5.',
  },
  routes: {
    core: ['I can answer with an opinion, a reason and an example.', 'I can speak for three sentences or more.'],
    develop: ['I can add a concession (ṣaḥīḥun anna … ghayra anna).', 'I can use a pause-and-think phrase instead of going blank.'],
    stretch: ['I can use two tenses, a conditional and a subjunctive.', 'I can self-mark Communication and Quality of Language.'],
  },
  vocab: {
    core: ['المُحَادَثَةُ المَوْضُوعِيَّةُ', 'التَّوْسِيعُ فِي الإِجَابَةِ', 'الرَّأْيُ مَعَ الأَسْبَابِ', 'الأَمْثِلَةُ الدَّاعِمَةُ', 'لُغَةُ التَّوَقُّفِ وَالتَّفْكِيرِ'],
    forms: { 'الأَمْثِلَةُ الدَّاعِمَةُ': { tag: 'pl · sg', forms: [{ l: 'sg.', ar: 'مِثَالٌ دَاعِمٌ' }] }, 'الرَّأْيُ مَعَ الأَسْبَابِ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'آرَاءٌ' }, { l: 'sg.', ar: 'سَبَبٌ' }] } },
    vocabNotes: { 0: 'The topic conversation is the second part of Paper 3: three questions on topics you have studied, about a minute each. Unlike the role play, you are marked on how far you DEVELOP each answer.' },
    bridge: [
      { ar: 'رَأْيٌ', urdu: 'رائے', tr: 'rāy', en: 'opinion' },
      { ar: 'مِثَالٌ', urdu: 'مثال', tr: 'misāl', en: 'example' },
      { ar: 'سَبَبٌ', urdu: 'سبب', tr: 'sabab', en: 'reason, cause' },
      { ar: 'مَوْضُوعٌ', urdu: 'موضوع', tr: 'mauzū', en: 'topic' },
      { ar: 'دَلِيلٌ', urdu: 'دلیل', tr: 'dalīl', en: 'evidence, argument' },
    ],
    bridgeNotes: 'URDU BRIDGE: the whole Band 5 chain is built from words Urdu already shares — رائے (opinion), سبب (reason), مثال (example), دلیل (evidence), موضوع (topic). Students who say “meri rāy mein …” are already halfway to فِي رَأْيِي.',
  },
  body: [
    P.cards(B[1], {
      min: 3, eyebrow: 'Teach · three answers to one question (website)', ar: 'مِنْ ٢ إِلَى ٥', title: 'What lifts an answer from Band 2 to Band 5', leftW: 6.2,
      callout: { head: 'THE QUESTION', text: 'mā ra’yuka fī ḍ-ḍaghṭi d-dirāsiyy? — What do you think about study pressure?' },
      examples: [
        { ar: B[1].items[0].ar, en: 'Band 2: “Study pressure is hard. I don’t like it.”' },
        { ar: 'فِي رَأْيِي هُوَ مُفِيدٌ أَحْيَانًا لِأَنَّهُ يُحَفِّزُ.', en: 'Band 3: “In my opinion it is sometimes useful because it motivates.”' },
        { ar: 'صَحِيحٌ أَنَّ بَعْضَهُ يُحَفِّزُ، غَيْرَ أَنَّهُ …', en: 'Band 5: concession + conditional + subjunctive (next slides).' },
      ],
      notes: `TEACH (3 min) — the website cards. Read Band 2 and Band 3 aloud; ask: what does Band 3 add? (a reason — لِأَنَّ). The full Band 5 answer is built on the I Do slide.\nWEBSITE BAND 3: ${B[1].items[1].ar}`,
    }),
    P.markScheme(B[2], {
      min: 2, title: 'The topic-conversation mark scheme: 20 marks', ar: 'مِعْيَارُ المُحَادَثَةِ',
      foot: 'Two sentences ≈ Band 3. Four or five developed sentences with opinion, evidence and a conditional ≈ Band 5.',
      notes: 'TEACH (2 min) — website mark scheme. Communication = 5 marks for each of three questions; Quality of Language = one overall score out of 5.',
    }),
    {
      type: 'modelAnswer', stage: 'ido', min: 4, eyebrow: 'I do · a Band 5 answer, built step by step (website card)', title: 'Watch me build a Band 5 answer', ar: 'إِجَابَةُ المُسْتَوَى الخَامِسِ',
      text: BAND5,
      en: '“It is reported that pressure is rising. It is true that some of it motivates; however, if it goes beyond its limit, it will lead to burnout. So it is necessary that schools provide a less stressful environment.” — evidence · concession · conditional · subjunctive.',
      find: ['يُشَارُ إِلَى أَنَّ', 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ', 'إِذَا … سَيُؤَدِّي', 'يَتَطَلَّبُ الأَمْرُ أَنْ'],
      notes: 'I DO (4 min). Build the answer live, one sentence at a time, naming each step: (1) EVIDENCE — يُشَارُ إِلَى أَنَّ (passive, P4-L05) · (2) CONCESSION — صَحِيحٌ أَنَّ … غَيْرَ أَنَّ (P5) · (3) CONDITIONAL — إِذَا تَجَاوَزَ … سَيُؤَدِّي (P4) · (4) SUBJUNCTIVE CONCLUSION — يَتَطَلَّبُ الأَمْرُ أَنْ تُوَفِّرَ (P5-L03). Then students find the four chips. Vocabulary: تَصَاعُدٌ = rise · الاحْتِرَاقُ = burnout.',
    },
    P.panel({ title: 'Pause-and-think language', body: [] }, {
      min: 2, stage: 'teach', eyebrow: 'Teach · when a question surprises you (teacher)', ar: 'لُغَةُ التَّوَقُّفِ وَالتَّفْكِيرِ', title: 'Never go blank: pause, then develop',
      points: [
        'Silence scores nothing; a natural pause phrase buys you three or four seconds.',
        'Then use an EMERGENCY SENTENCE you prepared — it fits almost any topic.',
        'If you make a mistake, correct it calmly (عَفْوًا، أَقْصِدُ …) and carry on — recovering is rewarded.',
        'Develop with a question to yourself: why? for example? what if?',
      ],
      exHead: 'PAUSE-AND-THINK PHRASES',
      examples: [
        { ar: 'هٰذَا سُؤَالٌ مُهِمٌّ …', en: 'That is an important question …' },
        { ar: 'فِي الحَقِيقَةِ، لَمْ أُفَكِّرْ فِي ذٰلِكَ مِنْ قَبْلُ، لٰكِنْ …', en: 'Actually, I hadn’t thought about that before, but …' },
        { ar: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', en: 'On one hand … on the other hand …' },
      ],
      notes: 'TEACH (2 min) — teacher panel (no website panel for this). Choral repetition of the three phrases; students choose ONE to use in every answer today.',
    }),
    P.speakTask(B[3], {
      min: 15, eyebrow: 'You do · the full topic conversation · 3 questions (website)', title: 'Topic conversation — full practice', ar: 'المُحَادَثَةُ الكَامِلَةُ', core: [0],
      meanings: ['What do you think about study pressure, and how can it be dealt with? (opinion · reason · example)', 'Does technology deepen inequality or reduce it? (concede, then refute)', 'If you were in charge of the environment, what would you change first? (lau …)'],
      starts: ['فِي رَأْيِي، الضَّغْطُ الدِّرَاسِيُّ … لِأَنَّ … فَمَثَلًا …', 'صَحِيحٌ أَنَّ التِّقْنِيَّةَ تُسَاعِدُ، غَيْرَ أَنَّ …', 'لَوْ كُنْتُ مَسْؤُولًا عَنِ البِيئَةِ، لَمَنَعْتُ …'],
      foot: 'Marks (website): Communication 15 (5 per question) · Quality of Language 5. One minute per question.',
      notes: 'YOU DO (15 min) — pairs, three questions each, then swap. The examiner times one minute and ticks: opinion ✓ reason ✓ example ✓ concession ✓ conditional ✓ subjunctive ✓. Core: question 1 with the green start. Question 3 needs the TYPE 2 conditional: لَوْ كُنْتُ … لَمَنَعْتُ / لَغَيَّرْتُ (P4).',
    }),
    P.speakTask(B[4], {
      min: 7, eyebrow: 'You do · extra question bank · mixed topics (website)', title: 'Question bank: four more topics', ar: 'بَنْكُ الأَسْئِلَةِ', core: [0, 2],
      meanings: ['Describe a healthy habit you keep, and why. (Health)', 'Why is preserving heritage important? (Culture)', 'How do you spend your free time — has it changed? (past and present)', 'What is the role of young people in changing society? (subjunctive of demand)'],
      starts: ['أُحَافِظُ عَلَى المَشْيِ يَوْمِيًّا لِأَنَّهُ …', 'أَرَى أَنَّ التُّرَاثَ يَرْبِطُنَا بِتَارِيخِنَا، فَمَثَلًا …', 'كُنْتُ أَقْضِي وَقْتِي فِي …، أَمَّا الآنَ فَأَقْضِيهِ فِي …', 'يَجِبُ عَلَى الشَّبَابِ أَنْ يُشَارِكُوا فِي …'],
      foot: 'Practice questions — no marks recorded. Choose two; aim for four or five sentences each.',
      notes: 'YOU DO (7 min) — each partner chooses two questions they have NOT prepared, to practise the unexpected. Question 3 needs two tenses: كُنْتُ أَقْضِي (past habit, P3) + present.',
    }),
    P.fields({ ...B[5], items: B[5].items.map((it, i) => ({ ...it, label: ['A general observation (yushāru ilā anna …)', 'A Type 1 conditional (idhā … sa- …)', 'A subjunctive conclusion (yataṭallabu an …)'][i] })) }, {
      min: 6, eyebrow: 'You do · emergency sentences for your weakest topics (website)', ar: 'جُمَلُ الطَّوَارِئِ', head: 'Emergency sentence', ex: 'Example', lw: 3.6, ew: 5.2,
      examples: ['يُشَارُ إِلَى أَنَّ الشَّبَابَ يَقْضُونَ وَقْتًا طَوِيلًا أَمَامَ الشَّاشَاتِ.', 'إِذَا تَعَاوَنَّا، سَنُحَقِّقُ نَتَائِجَ أَفْضَلَ.', 'لِذَا يَتَطَلَّبُ الأَمْرُ أَنْ نَتَحَمَّلَ مَسْؤُولِيَّتَنَا جَمِيعًا.'],
      core: [0, 1, 2],
      foot: 'Write three for each of your two weakest topics — they work in the mock and the real exam.',
      notes: 'EMERGENCY SENTENCES (6 min) — website fields. The teacher examples are deliberately topic-neutral: they fit health, environment, technology and society. Students adapt them to their two least confident topics.',
    }),
    P.reflect(B[6], {
      min: 2, eyebrow: 'Feedback · development earns the band (website)', ar: 'التَّأَمُّلُ', can: 'the topic I develop most confidently', next: 'my emergency sentences for the mock',
      modelCan: 'education — study pressure', modelNext: 'the environment and technology',
      extra: [['أَسْتَطِيعُ الآنَ أَنْ أُطَوِّرَ إِجَابَتِي بِإِضَافَةِ ______ .', 'Now I can develop my answer with …', 'سَبَبٍ وَمِثَالٍ']],
      foot: 'Development earns the band: opinion → reason → example → analysis.',
      notes: 'REFLECTION (2 min) — website frames.',
    }),
  ],
  selfCheck: [
    { route: 'core', text: 'I extended each answer beyond a single sentence.' },
    { route: 'core', text: 'I gave an opinion with a reason and an example.' },
    { route: 'develop', text: 'I added a concession (ṣaḥīḥun anna … ghayra anna).' },
    { route: 'develop', text: 'I recovered from an unexpected question without going blank.' },
    { route: 'stretch', text: 'I used two tenses, a conditional and a subjunctive.' },
  ],
  prep: {
    words: [['اسْتِرَاتِيجِيَّاتُ الاسْتِمَاعِ', 'listening strategies', '—'], ['قِرَاءَةُ الأَسْئِلَةِ مُسْبَقًا', 'reading the questions in advance', '—'], ['التَّنَبُّؤُ بِالمُحْتَوَى', 'predicting the content', '—'], ['مُشَتِّتَاتُ الاسْتِمَاعِ', 'listening distractors', 'sg. مُشَتِّتٌ'], ['التَّحَقُّقُ فِي الاسْتِمَاعِ الثَّانِي', 'verifying on the second listen', '—']],
    questionEn: 'What will you do in the two minutes before each listening text?',
    questionAr: 'سَأَقْرَأُ ______ مُسْبَقًا، ثُمَّ سَأُرَكِّزُ عَلَى ______ .',
    homework: {
      core: 'Record question 1 with opinion + reason + example; revise the five listening words.',
      develop: 'Record all three questions with a concession in each; revise the five listening words.',
      stretch: 'Record two question-bank answers unprepared, one minute each; revise the five listening words.',
    },
    wordsSource: 'P6-L08 is a mock with no new vocabulary: these five words are revised from the website P6-L02 (listening strategies).',
  },
  remember: 'Remember: development earns the band — opinion, reason, example, then a concession, a conditional and a subjunctive. If a question surprises you: pause, then use an emergency sentence.',
});

module.exports = { meta, slides };
