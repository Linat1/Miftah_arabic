'use strict';
/* P6-L06 · Paper 3 Role Play — Transactional Language at IGCSE Standard — website: Pathways › Progression › P6 › P6-L06 (the role-play mark scheme —
 * Communication 6 · Accuracy 4 — how to score full Communication, five role plays: health centre · travel agency · university admissions · community
 * environment meeting · international conference; the Communication analysis and the reflection). Website vocabulary, cards, panel, prompts, model,
 * fields and exit frames used as published, with waṣl alif shown without a kasra and لِكَيْ always written with its sukūn. Teacher-made: the Do Now,
 * the repair phrases, the model starts for every prompt, the routes and the examiner script. */
const P = require('./p6-common');
const { q } = P;

const meta = P.meta('P6')({
  n: 6, fileTitle: 'Paper_3_Role_Play', chip: 'IGCSE Bridge',
  title: 'Paper 3 Role Play — Transactional Language at IGCSE Standard', arabic: 'الوَرَقَةُ الثَّالِثَةُ — تَمْثِيلُ الدَّوْرِ: اللُّغَةُ التَّعَامُلِيَّةُ',
  focus: 'Score full Communication in the role play: answer EXACTLY what each prompt asks, in two or three full sentences, in the right tense and structure — book, ask, request, negotiate, report, propose — across five IGCSE situations.',
  icon: 'FaComments', iconSet: 'fa6',
});

const s = P.site('P6-L06');
const B = s.blocks;
const NEXT = { nextCode: 'P6-L07', nextTitle: 'Paper 3 Topic Conversation — Extended Speaking at IGCSE Level', nextAr: 'الوَرَقَةُ الثَّالِثَةُ — المُحَادَثَةُ' };

const task = (b, i, o) => P.speakTask(b, {
  min: o.min || 4, eyebrow: `You do · role play ${i} · ${b.title.replace(/^Task \d — /, '').replace(/ \(\d+ marks\)$/, '')} (website)`, title: o.title, ar: o.ar,
  meanings: o.meanings, starts: o.starts, core: o.core || [0, 1],
  notes: `ROLE PLAY ${i} (website, 10 marks: Communication 6 · Accuracy 4). Pairs: A = examiner (reads the prompts as questions), B = candidate; then swap. 30–40 seconds per prompt. ${o.notes || ''}`,
});

const slides = P.bridgeLesson('P6-L06', {
  site: s, next: NEXT,
  plan: '0–1 Welcome · 1–2 Map · 2–8 Do Now + answers · 8–9 Objectives · 9–13 Role-play words · 13–16 The mark scheme · 16–19 Full Communication + repair phrases · 19–23 Role play 1 (I Do) · 23–47 Role plays 2–5 in pairs · 47–51 Communication analysis · 51–55 Reflection + self-check · 55–57 Preparation.',
  source: 'The website P6-L06: the transactional-language vocabulary (8 words), the role-play mark scheme cards (Communication 6 · Accuracy 4), the panel “How to score full Communication”, five role plays with four prompts each (health centre · travel agency · university admissions · community environment meeting · international conference) and a model, the Communication-analysis fields and the reflection frames.',
  support: `• SPEAKING LESSON in pairs on open mic (no breakout rooms): A = examiner, B = candidate, then swap. The teacher examines one pair per role play while others rehearse muted.
• Routes: Core — role plays 1–3 with the “start like this” column · Develop — role plays 1–4, starts covered after the first attempt · Stretch — all five, no starts, two or three sentences per prompt.
• The website message: perfect grammar is NOT needed for the Communication mark — but answering a different question, or one word instead of a sentence, loses the prompt. Precise, not long.
• Anxiety: many students fear speaking exams. Teach the repair phrases first and praise attempts; mistakes are expected in practice.`,
  steps: [
    ['donow', 6, 'Retrieval: role-play words and polite requests.', 'اِبْدَأِ الآنَ'],
    ['teach', 10, 'The mark scheme, full Communication, repair phrases.', 'المَعَايِيرُ'],
    ['ido', 4, 'Watch me do role play 1.', 'شَاهِدْ'],
    ['youdo', 24, 'Role plays 2–5 in pairs.', 'تَمْثِيلُ الدَّوْرِ'],
    ['feedback', 8, 'Communication analysis, reflection, self-check.', 'قَيِّمْ'],
    ['prep', 2, 'Get ready for the topic conversation.', 'اِسْتَعِدَّ'],
  ],
  doNow: {
    questions: [
      q('What does تَمْثِيلُ الدَّوْرِ mean?', ['role play', 'a drama lesson', 'a turn to speak'], 'Prepared at home (P6-L05).'),
      q('What does طَلَبُ المَعْلُومَاتِ mean?', ['requesting information', 'giving information', 'an information sheet'], 'Prepared at home (P6-L05).'),
      q('What does التَّفَاوُضُ mean?', ['negotiation', 'a complaint', 'a booking'], 'Prepared at home (P6-L05).'),
      q('Complete the polite request: هَلْ يُمْكِنُ أَنْ ___ مَوْعِدًا؟', ['أَحْجِزَ', 'أَحْجِزُ', 'حَجَزْتُ'], 'yumkinu an + a verb in -a.'),
      q('Complete the past perfect: كُنْتُ ___ دَرَسْتُ العُلُومَ.', ['قَدْ', 'سَوْفَ', 'لَنْ'], 'P4–P5: kuntu qad + past.'),
    ],
    keyIdea: { text: 'One prompt = one mark: answer exactly what is asked, in a full sentence.', ar: 'مَا الَّذِي تَشْكُو مِنْهُ؟ ← أَشْعُرُ بِصُدَاعٍ مُنْذُ أُسْبُوعٍ.' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P6-L05. Questions 4–5 retrieve two structures the role-play prompts demand: a polite request (yumkinu an + -a) and the past perfect.',
  },
  routes: {
    core: ['I can answer each prompt with a full sentence.', 'I can do role plays 1–3 with the starts.'],
    develop: ['I can answer exactly what each prompt asks.', 'I can use the right tense for each prompt.'],
    stretch: ['I can give two or three sentences per prompt.', 'I can self-mark Communication and Accuracy.'],
  },
  vocab: {
    core: ['تَمْثِيلُ الدَّوْرِ', 'الاسْتِجَابَةُ لِلْمُحَفِّزَاتِ', 'إِعْطَاءُ المَعْلُومَاتِ', 'طَلَبُ المَعْلُومَاتِ', 'التَّفَاوُضُ', 'التَّحَدُّثُ بِثِقَةٍ'],
    forms: { 'الاسْتِجَابَةُ لِلْمُحَفِّزَاتِ': { tag: 'pl · sg', forms: [{ l: 'sg.', ar: 'مُحَفِّزٌ' }] } },
    vocabNotes: { 0: 'The role play is TRANSACTIONAL (اللُّغَةُ التَّعَامُلِيَّةُ): you give information (إِعْطَاءُ المَعْلُومَاتِ), ask for it (طَلَبُ المَعْلُومَاتِ), negotiate (التَّفَاوُضُ) and solve a problem (حَلُّ المُشْكِلَةِ). Each prompt (مُحَفِّزٌ) tells you which one.' },
    bridge: [
      { ar: 'عِلَاجٌ', urdu: 'علاج', tr: 'ilāj', en: 'treatment' },
      { ar: 'سَفَرٌ', urdu: 'سفر', tr: 'safar', en: 'travel' },
      { ar: 'إِقَامَةٌ', urdu: 'اقامت', tr: 'iqāmat', en: 'accommodation, stay' },
      { ar: 'مَوْعِدٌ', urdu: 'وعدہ', tr: 'wada', en: 'Arabic: an appointment · Urdu: a promise' },
      { ar: 'مُذَاكَرَةٌ', urdu: 'مذاکرات', tr: 'muzākarāt', en: 'Arabic: studying · Urdu: negotiations' },
    ],
    bridgeNotes: 'URDU BRIDGE: علاج, سفر and اقامت are shared — the health and travel role plays are full of them. Two traps: Urdu وعدہ = a promise, but Arabic مَوْعِدٌ = an APPOINTMENT; Urdu مذاکرات = negotiations, but Arabic مُذَاكَرَةٌ = STUDYING (negotiation = التَّفَاوُضُ).',
  },
  body: [
    P.cards(B[1], {
      min: 3, eyebrow: 'Teach · the role-play mark scheme, demystified (website)', ar: 'مِعْيَارُ التَّقْيِيمِ', title: 'Ten marks: Communication 6 · Accuracy 4', leftW: 6.9,
      examples: [
        { ar: 'مُحَفِّزٌ وَاحِدٌ = دَرَجَةٌ وَاحِدَةٌ', en: 'one prompt = one Communication mark' },
        { ar: '✗ «صُدَاعٌ.»', en: 'one word — the prompt may be lost' },
        { ar: '✓ أَشْعُرُ بِصُدَاعٍ مُنْذُ أُسْبُوعٍ.', en: 'a full, relevant sentence' },
      ],
      notes: 'TEACH (3 min) — the website cards. Communication is per prompt (up to 6); Accuracy is one overall score (4 → 1). The three ways to lose a prompt: not answering it, answering a different question, one word instead of a sentence.',
    }),
    P.panel(B[2], {
      min: 3, eyebrow: 'Teach · how to score full Communication (website) · repair phrases', ar: 'التَّوَاصُلُ الكَامِلُ', title: 'How to score full Communication',
      points: [
        'Each prompt needs a RELEVANT response with enough language to communicate clearly.',
        'Perfect grammar is not required for the Communication mark — but a serious error that causes misunderstanding loses that prompt.',
        'Give two to three sentences per prompt, delivered confidently.',
        'If you did not understand: ask, then answer. Silence scores zero; a repair phrase keeps you in the conversation.',
      ],
      exHead: 'REPAIR PHRASES (TEACHER)',
      examples: [
        { ar: 'عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟', en: 'Sorry, could you repeat the question?' },
        { ar: 'سُؤَالٌ مُهِمٌّ … دَعْنِي أُفَكِّرُ.', en: 'An important question … let me think.' },
        { ar: 'عَفْوًا، أَقْصِدُ …', en: 'Sorry, I mean …' },
      ],
      notes: 'TEACH (3 min) — the website panel, plus three teacher repair phrases (also used in P4-L12 / P5-L12). Choral repetition of the repair phrases. To a girl: تُعِيدِي (هَلْ يُمْكِنُ أَنْ تُعِيدِي السُّؤَالَ؟).',
    }),
    task(B[3], 1, {
      min: 4, title: 'Role play 1 — At the health centre', ar: 'فِي المَرْكَزِ الصِّحِّيِّ', core: [0, 1, 2, 3],
      starts: ['أَشْعُرُ بِصُدَاعٍ وَأُعَانِي مِنَ الأَرَقِ مُنْذُ أُسْبُوعٍ.', 'مَا العِلَاجُ المُنَاسِبُ؟ هَلْ يَجِبُ أَنْ آخُذَ دَوَاءً؟', 'مَاذَا يَنْبَغِي أَنْ أَفْعَلَ لِكَيْ لَا يَتَكَرَّرَ ذٰلِكَ؟', 'هَلْ يُمْكِنُ أَنْ أَحْجِزَ مَوْعِدًا يَوْمَ الخَمِيسِ؟'],
      notes: 'I DO: the teacher is the CANDIDATE first; a confident student reads the prompts as the doctor. Model prompt 1 with the website answer, then improve it to three sentences (… وَلَا أَسْتَطِيعُ أَنْ أُرَكِّزَ فِي دُرُوسِي.). Then pairs repeat it. Doctor’s questions: مَا الَّذِي تَشْكُو مِنْهُ؟ · مَاذَا تُرِيدُ أَنْ تَعْرِفَ؟',
    }),
    task(B[4], 2, {
      title: 'Role play 2 — At the travel agency', ar: 'فِي وَكَالَةِ السَّفَرِ',
      meanings: ['Book a trip and ask about the schedule.', 'Ask about accommodation options.', 'Request an environmentally friendly option.', 'Negotiate on the price.'],
      starts: ['أُرِيدُ أَنْ أَحْجِزَ رِحْلَةً إِلَى عَمَّانَ. مَتَى تُغَادِرُ الطَّائِرَةُ؟', 'هَلْ تُوجَدُ فَنَادِقُ قَرِيبَةٌ مِنْ وَسَطِ المَدِينَةِ؟', 'أُفَضِّلُ خِيَارًا صَدِيقًا لِلْبِيئَةِ، كَالقِطَارِ مَثَلًا.', 'السِّعْرُ مُرْتَفِعٌ قَلِيلًا؛ هَلْ يُمْكِنُ أَنْ تُخَفِّضُوهُ؟'],
      notes: 'Prompt 4 (negotiate) is the hardest: model a polite counter-offer — هَلْ هُنَاكَ خَصْمٌ لِلطُّلَّابِ؟ (Is there a student discount?).',
    }),
    task(B[5], 3, {
      title: 'Role play 3 — University admissions', ar: 'فِي مَكْتَبِ القَبُولِ',
      meanings: ['Describe your academic background (past perfect).', 'Ask about the available programmes.', 'Talk about your future plans (a conditional).', 'Ask for scholarship information.'],
      starts: ['كُنْتُ قَدْ دَرَسْتُ العُلُومَ وَالعَرَبِيَّةَ فِي المَدْرَسَةِ الثَّانَوِيَّةِ.', 'مَا البَرَامِجُ المُتَاحَةُ فِي كُلِّيَّةِ الطِّبِّ؟', 'إِذَا قُبِلْتُ، سَأَدْرُسُ الطِّبَّ لِكَيْ أُسَاعِدَ النَّاسَ.', 'هَلْ تُوجَدُ مِنَحٌ لِلطُّلَّابِ الدَّوْلِيِّينَ؟'],
      notes: 'The prompts name the structure (past perfect, conditional) — the examiner is listening for it. Core students: use the starts word for word; that already earns the prompt.',
    }),
    task(B[6], 4, {
      title: 'Role play 4 — Community environment meeting', ar: 'فِي اجْتِمَاعِ الحَيِّ', core: [0, 1],
      meanings: ['Report a local environmental problem (passive).', 'Suggest solutions (a subjunctive trigger).', 'Ask about the regulations.', 'Request the council’s support.'],
      starts: ['تُرْمَى النُّفَايَاتُ فِي الحَدِيقَةِ، وَقَدْ لُوِّثَ النَّهْرُ.', 'أَقْتَرِحُ أَنْ تُوضَعَ حَاوِيَاتٌ لِإِعَادَةِ التَّدْوِيرِ.', 'مَا اللَّوَائِحُ الَّتِي تَمْنَعُ رَمْيَ النُّفَايَاتِ؟', 'نَرْجُو أَنْ تَدْعَمَ البَلَدِيَّةُ حَمْلَةَ تَنْظِيفٍ.'],
      notes: 'Develop and Stretch. Passives in prompt 1 (تُرْمَى · لُوِّثَ — P4-L05); an + passive -a in prompt 2 (أَنْ تُوضَعَ — P5-L03); a hope in prompt 4 (نَرْجُو أَنْ — P4).',
    }),
    task(B[7], 5, {
      title: 'Role play 5 — International conference', ar: 'فِي المُؤْتَمَرِ الدَّوْلِيِّ', core: [0, 1],
      meanings: ['Present your position on a social issue.', 'Concede the opposing view (ṣaḥīḥun anna).', 'Request action (yataṭallabu an).', 'Close with a recommendation.'],
      starts: ['أَرَى أَنَّ الفَجْوَةَ الرَّقْمِيَّةَ تُعَمِّقُ عَدَمَ المُسَاوَاةِ.', 'صَحِيحٌ أَنَّ التِّقْنِيَّةَ تُوَفِّرُ فُرَصًا، غَيْرَ أَنَّ …', 'يَتَطَلَّبُ الأَمْرُ أَنْ تُوَفِّرَ الحُكُومَاتُ الإِنْتِرْنِتَ لِلْجَمِيعِ.', 'وَبِنَاءً عَلَى مَا سَبَقَ، أُوصِي بِأَنْ نَسْتَثْمِرَ فِي التَّعْلِيمِ.'],
      notes: 'Stretch. This is the P5-L12 role play at IGCSE level: position · concession · demand · formal close.',
    }),
    P.fields(B[8], {
      min: 3, eyebrow: 'You do · Communication mark analysis (website)', ar: 'تَحْلِيلُ التَّوَاصُلِ', head: 'Record', ex: 'Example', lw: 4.6, ew: 4.4,
      examples: ['…/6', '…/4', 'travel (negotiating)', 'vocabulary → learn 5 travel phrases'],
      foot: 'Is the cause recognising the prompt, missing vocabulary, or hesitation? Each has a different fix.',
      notes: 'COMMUNICATION ANALYSIS (3 min) — website fields; partners give each other the Communication score (one per prompt answered).',
    }),
    P.reflect(B[9], {
      min: 2, eyebrow: 'Feedback · precise, not long (website)', ar: 'التَّأَمُّلُ', can: 'the phrase I use confidently', next: 'the topic I will practise most',
      modelCan: 'هَلْ يُمْكِنُ أَنْ …؟', modelNext: 'travel — negotiating the price',
      extra: [['أَسْتَطِيعُ الآنَ أَنْ ______ بِثِقَةٍ.', 'Now I can … confidently.', 'أَطْلُبَ مَعْلُومَاتٍ']],
      foot: 'Precise, not long: answer exactly what each prompt asks.',
      notes: 'REFLECTION (2 min) — website frames.',
    }),
  ],
  selfCheck: [
    { route: 'core', text: 'I answered the exact question each prompt asks.' },
    { route: 'core', text: 'I used a full sentence, not one word, for each prompt.' },
    { route: 'develop', text: 'I used the correct tense and structure for the situation.' },
    { route: 'develop', text: 'I used a repair phrase instead of staying silent.' },
    { route: 'stretch', text: 'I scored my own role play on Communication and Accuracy.' },
  ],
  prep: {
    words: [['المُحَادَثَةُ المَوْضُوعِيَّةُ', 'topic conversation', '—'], ['التَّوْسِيعُ فِي الإِجَابَةِ', 'extending the answer', '—'], ['الرَّأْيُ مَعَ الأَسْبَابِ', 'opinion with reasons', '—'], ['لُغَةُ التَّوَقُّفِ وَالتَّفْكِيرِ', 'pause-and-think language', '—'], ['التَّعَافِي مِنَ الأَخْطَاءِ', 'recovering from errors', '—']],
    questionEn: 'How can you make a one-sentence answer three times longer?',
    questionAr: 'أَرَى أَنَّ ______ ، لِأَنَّ ______ ، فَمَثَلًا ______ .',
    homework: {
      core: 'Record yourself doing role plays 1–3 with the starts; learn the five words.',
      develop: 'Record role play 4 without the starts; learn the five words.',
      stretch: 'Record role play 5 with two or three sentences per prompt; learn the five words.',
    },
    wordsSource: 'The five words come from the website P6-L07 vocabulary (extended speaking).',
  },
  remember: 'Remember: one prompt = one mark — answer exactly what is asked, in full sentences, in the right tense; if you are lost, use a repair phrase, never silence.',
});

module.exports = { meta, slides };
