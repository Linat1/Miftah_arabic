'use strict';
/* D4-L11 · D4 Consolidation — Range Mastery and Speaking Preparation — website: Pathways › Development › D4 › D4-L11 (climate + weather agreement,
 * problem: passive + cause + result, solution: obligation + purpose, qualified judgement: concession + condition شَرِيطَةَ أَنْ; self-correction in speaking).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking and writing used as published. Two quiz distractors replaced
 * (they differed only in vowels), “D4” written in Arabic inside the Arabic texts, English added to the model sentences and speaking model.
 * The website lesson has no picture game. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D4')({
  n: 11, fileTitle: 'D4_Consolidation_Range_Mastery', chip: 'Unit Review',
  title: 'D4 Consolidation — Range Mastery and Speaking Preparation', arabic: 'تَرْسِيخُ الوَحْدَةِ — إِتْقَانُ النِّطَاقِ وَإِعْدَادُ التَّحَدُّثِ',
  focus: 'Pull the whole of D4 together in one chain — climate → problem → cause → solution → qualified judgement — accurately and under pressure, and practise recovering in speaking (لِأُصَحِّحْ ذٰلِكَ · بِعِبَارَةٍ أُخْرَى).',
  icon: 'FaListCheck', iconSet: 'fa6',
});

const site = D.site('D4-L11');
const quiz = site.grammar.quiz.map((it, i) => {
  if (i === 0) return { ...it, options: [it.options[0], it.options[1], 'تَهُبُّ الرِّيَاحُ وَتَسْقُطُ المَنَاخُ.'] };
  if (i === 3) return { ...it, options: [it.options[0], it.options[1], 'يَجِبُ عَلَى المَدِينَةِ أَنْ تُوَسِّعَ النَّقْلَ لِكَيْ تَزِيدَ التَّلَوُّثَ.'] };
  return it;
});
const ar4 = (t) => t.replace('وَحْدَةِ D4', 'الوَحْدَةِ الرَّابِعَةِ').replace('وَحْدَةُ D4', 'الوَحْدَةُ الرَّابِعَةُ').replace('فِي D4', 'فِي هٰذِهِ الوَحْدَةِ');
const T1 = 'فِي المُحَادَثَةِ الأُولَى، وَصَفَتْ مَرْيَمُ مَشْرُوعًا لِتَوْسِيعِ النَّقْلِ العَامِّ. قَالَتْ إِنَّهُ سَيُقَلِّلُ الانْبِعَاثَاتِ، لٰكِنَّهَا أَضَافَتْ أَنَّ التَّكْلِفَةَ الأُولَى مُرْتَفِعَةٌ.';
const T2 = 'وَفِي المُحَادَثَةِ الثَّانِيَةِ، تَحَدَّثَ خَالِدٌ عَنْ شُحِّ المِيَاهِ. أَوَّلًا قَالَ إِنَّ الاسْتِهْلَاكَ انْخَفَضَ، ثُمَّ صَحَّحَ نَفْسَهُ وَقَالَ إِنَّهُ ارْتَفَعَ بِنِسْبَةِ ٩٪. وَأَكَّدَ أَنَّ الحَلَّ يَحْتَاجُ إِلَى التِّقْنِيَّةِ وَتَغْيِيرِ السُّلُوكِ مَعًا.';
const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D4-L11', {
  support: `• No new grammar today: this is the D4 review before the D4-L12 assessment.
• Core: one accurate sentence for each link of the chain (climate · problem · solution) with frames. Develop: the full chain in a paragraph with one passive, one cause–effect and one purpose. Stretch: the website writing task (130–140 words, seven meaningful D4 features) + a qualified judgement and a self-audit.
• Speaking focus: self-correction phrases (لِأُصَحِّحْ ذٰلِكَ · أَقْصِدُ أَنَّ · بِعِبَارَةٍ أُخْرَى) — a recovered mistake is better than silence.
• Use the Do Now and quick-check results to choose each student’s route for the final You Do.`,
  teach: 'The D4 chain: climate → problem → solution → judgement.',
  wedo: 'Sort the range, fix three classic D4 slips, then two short listening cycles.',
  next: { nextCode: 'D4-L12', nextTitle: 'D4 Review and Unit Assessment', nextAr: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ' },
  objectives: ['Describe climate and weather accurately (يَسُودُ · تَهُبُّ الرِّيَاحُ).', 'Explain a problem with a passive and a cause–effect chain.', 'Propose a solution with obligation + purpose and give a qualified judgement.', 'Recover from a mistake in speaking with a self-correction phrase.'],
  rulesTitle: 'D4 integrated grammar and range mastery',
  rulesAr: 'قَوَاعِدُ الوَحْدَةِ الرَّابِعَةِ مُتَكَامِلَةً',
  skipGroups: [1], // the “D4 grammar bank” labels are structure names, taught on the grammar slides instead
  flexGroups: [],
  doNow: {
    questions: [
      q('What does نُقْطَةُ قُوَّةٍ mean?', ['a strength', 'an area for improvement', 'a point of view'], 'Prepared at home (D4-L10).'),
      q('What does بِعِبَارَةٍ أُخْرَى mean?', ['in other words', 'let me correct that', 'what I mean is'], 'Prepared at home (D4-L10).'),
      q('Complete: حَذَّرَ الخَبِيرُ ___ شُحِّ المِيَاهِ.', ['مِنْ', 'عَلَى', 'إِلَى'], 'D4-L10.'),
      q('Choose the accurate sentence.', ['تَهُبُّ الرِّيَاحُ بِقُوَّةٍ.', 'يَهُبُّ الرِّيَاحُ بِقُوَّةٍ.', 'تَهُبُّ الرِّيَاحِ بِقُوَّةٍ.'], 'D4-L02: weather agreement.'),
      q('Which sentence is passive?', ['تُقْطَعُ الأَشْجَارُ.', 'يَقْطَعُ النَّاسُ الأَشْجَارَ.', 'قَطَعْنَا الأَشْجَارَ.'], 'D4-L03.'),
    ],
    keyIdea: { text: 'A top answer is a CHAIN, not a list: every feature links to the next idea.', ar: '{k|يَسُودُ} … ، {e|يُلَوَّثُ} … {e|بِسَبَبِ} … ، {w|يَجِبُ عَلَى} … {w|لِكَيْ} …' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of D4-L10. Questions 3–5 retrieve D4-L10, D4-L02 and D4-L03. Note which of 3–5 each student gets wrong: it points to their revision priority today.',
  },
  routes: {
    core: ['I can write one accurate sentence for climate, problem and solution.', 'I can use the D4 frames.'],
    develop: ['I can link problem, cause and solution in a paragraph.', 'I can use a passive and a purpose clause.'],
    stretch: ['I can give a qualified judgement (شَرِيطَةَ أَنْ).', 'I can self-correct while speaking.'],
  },
  bridge: [
    { ar: 'نُقْطَةٌ', urdu: 'نقطہ', tr: 'nuqta', en: 'point' },
    { ar: 'قُوَّةٌ', urdu: 'قوت', tr: 'quwwat', en: 'strength' },
    { ar: 'تَحْسِينٌ', urdu: 'تحسین', tr: 'taḥsīn', en: 'Urdu: praise · Arabic: improvement' },
    { ar: 'إِعْدَادٌ', urdu: 'اعداد', tr: 'aʿdād', en: 'Urdu: numbers · Arabic: preparation' },
    { ar: 'عِبَارَةٌ', urdu: 'عبارت', tr: 'ʿibārat', en: 'expression, wording' },
  ],
  bridgeNotes: 'URDU BRIDGE: نقطہ، قوت، عبارت are shared. CAREFUL: Urdu تحسین = praise; Arabic تَحْسِينٌ = improvement (مَجَالُ تَحْسِينٍ = an area for improvement). Urdu اعداد (aʿdād) = numbers; Arabic إِعْدَادٌ (iʿdād, with kasra) = preparation.',
  core: ['النِّطَاقُ اللُّغَوِيُّ', 'الدِّقَّةُ تَحْتَ الضَّغْطِ', 'نُقْطَةُ قُوَّةٍ', 'مَجَالُ تَحْسِينٍ', 'إِجَابَةٌ مُطَوَّرَةٌ', 'أَقْصِدُ أَنَّ', 'بِعِبَارَةٍ أُخْرَى', 'لِأُصَحِّحْ ذٰلِكَ', 'سَأُعْطِي مِثَالًا', 'الدَّلِيلُ عَلَى ذٰلِكَ', 'مِنْ وَجْهَةِ نَظَرِي', 'إِلَى حَدٍّ مَا'],
  vocabNotes: {
    0: 'Range and performance: the words a teacher or examiner uses in feedback. Use نُقْطَةُ قُوَّةٍ and مَجَالُ تَحْسِينٍ to talk about your own work.',
    2: 'Speaking and self-correction: phrases that keep you talking when you make a mistake or need time — a recovered mistake earns more than silence.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · the D4 chain (website rules 1–3)', title: 'Climate → problem → solution', ar: 'سِلْسِلَةُ الوَحْدَةِ',
      cols: [{ label: 'Link', w: 2.3 }, { label: 'Model (website)', w: 7.3, size: 20 }, { label: 'Lesson', w: 2.73 }],
      rows: [
        { core: true, cells: ['1 · climate + weather', P('{k|يَسُودُ} مَنَاخٌ جَافٌّ فِي الدَّاخِلِ، وَ{k|تَهُبُّ} الرِّيَاحُ بِقُوَّةٍ فِي الرَّبِيعِ.', 'A dry climate prevails inland, and winds blow strongly in spring.'), 'D4-L01 · L02'] },
        { core: true, cells: ['2 · problem + cause', P('{e|يُلَوَّثُ} الهَوَاءُ {e|بِسَبَبِ} عَوَادِمِ السَّيَّارَاتِ،', 'The air is polluted because of car exhaust,'), 'D4-L03'] },
        { cells: ['2 · result', P('{e|مِمَّا يُؤَدِّي إِلَى} أَمْرَاضٍ تَنَفُّسِيَّةٍ.', 'which leads to respiratory diseases.'), 'D4-L03 · L07'] },
        { core: true, cells: ['3 · solution + purpose', P('{w|يَجِبُ عَلَى} الحُكُومَةِ {w|أَنْ تُوَسِّعَ} النَّقْلَ العَامَّ {w|لِكَيْ تُقَلِّلَ} الانْبِعَاثَاتِ.', 'The government must expand public transport to reduce emissions.'), 'D4-L04'] },
        { cells: ['4 · judgement', P('عَلَى الرَّغْمِ مِنْ أَنَّهَا مُكَلِّفَةٌ، فَإِنَّهَا مُفِيدَةٌ {w|شَرِيطَةَ أَنْ} تُطَبَّقَ بِمَسْؤُولِيَّةٍ.', 'Although it is expensive, it is useful provided that it is applied responsibly.'), 'D4-L06 · L09'] },
      ],
      ltr: true,
      foot: 'Feminine plural non-human subjects: تَهُبُّ الرِّيَاحُ · تَشِحُّ المِيَاهُ · تُقْطَعُ الأَشْجَارُ.',
      notes: `GRAMMAR PART 1 — website rules “Climate and weather accuracy” (keep climate description and weather events distinct), “Problem, cause and passive” (use a true passive where the affected thing is foregrounded) and “Solution and purpose” (state who must act and why). Rule 4 (“Qualified academic judgement”) is row 5. Colours: blue = climate, pink = problem chain, purple = solution / condition.
Core: rows 1, 2 and 4 are enough for a strong answer.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · the three classic D4 slips (website mistakes) · all routes', title: 'Check these three before you hand in', ar: 'ثَلَاثَةُ أَخْطَاءٍ شَائِعَةٍ',
      cards: [
        { chip: 'AN / LI-KAY + -A · CORE', color: '1D5FBF', head: 'أَنْ / لِكَيْ + مَنْصُوبٌ', big: 'أَنْ تُوَسِّعَ … لِكَيْ تُقَلِّلَ', en: 'to expand … in order to reduce', clue: 'Both verbs end in -a.' },
        { chip: 'ANNA + -A · DEVELOP', color: 'C0386B', head: 'يُشَارُ إِلَى أَنَّ', big: 'يُشَارُ إِلَى أَنَّ المَنَاخَ يَتَغَيَّرُ.', en: 'It is indicated that the climate is changing.', clue: 'Anna, then -a.' },
        { chip: 'REAL CONTRAST · STRETCH', color: '6B4C9A', head: 'عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ', big: 'المَشْرُوعُ مُكَلِّفٌ، فَإِنَّهُ يُقَلِّلُ الهَدْرَ.', en: '… costly, it reduces waste.', clue: 'Not “costly, so costly”.' },
      ],
      error: { text: 'Website mistake: after li-kay the verb ends in -a.', pairs: [['لِكَيْ تُقَلِّلَ الانْبِعَاثَاتِ', 'لِكَيْ تُقَلِّلُ الانْبِعَاثَاتِ']] },
      notes: `GRAMMAR PART 2 — the three website common mistakes for this lesson, turned into a hand-in checklist. Students copy the three heads into the margin of their writing and tick each one.
Card 3 in full (website): عَلَى الرَّغْمِ مِنْ أَنَّ المَشْرُوعَ مُكَلِّفٌ، فَإِنَّهُ يُقَلِّلُ الهَدْرَ عَلَى المَدَى البَعِيدِ.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me build the D4 chain — and recover from a slip',
    steps: [
      { head: 'Climate', ar: '{k|يَسُودُ} مَنَاخٌ جَافٌّ', think: 'Formal climate verb.' },
      { head: 'Problem', ar: '{e|تَشِحُّ} المِيَاهُ {e|نَتِيجَةً لِقِلَّةِ} الأَمْطَارِ', think: 'Cause → result.' },
      { head: 'Solution', ar: '{w|يَجِبُ عَلَى} الحُكُومَاتِ {w|أَنْ تَسْتَثْمِرَ}', think: 'Who must act.' },
      { head: 'Recover', ar: 'لِأُصَحِّحْ ذٰلِكَ: لِكَيْ تَحْمِيَ المَوَارِدَ', think: 'Fix it aloud.' },
    ],
    legend: ['k', 'e', 'w'], legendLabels: { k: 'CLIMATE', e: 'PROBLEM', w: 'SOLUTION' },
    model: '{k|يَسُودُ} مَنَاخٌ جَافٌّ فِي مَنَاطِقَ كَثِيرَةٍ، وَ{e|تَشِحُّ} المِيَاهُ {e|نَتِيجَةً لِقِلَّةِ} الأَمْطَارِ وَزِيَادَةِ الاسْتِهْلَاكِ. لِذٰلِكَ {w|يَجِبُ عَلَى} الحُكُومَاتِ {w|أَنْ تَسْتَثْمِرَ} فِي إِعَادَةِ اسْتِخْدَامِ المِيَاهِ {w|لِكَيْ تَحْمِيَ} المَوَارِدَ.',
    modelEn: 'A dry climate prevails in many regions, and water is scarce as a result of low rainfall and higher consumption. Therefore governments must invest in water reuse in order to protect resources.',
    notes: 'I DO (3 min) — build the chain aloud. At step 4, deliberately say لِكَيْ تَحْمِي المَوَارِدَ with the wrong ending, stop, and model: لِأُصَحِّحْ ذٰلِكَ — لِكَيْ تَحْمِيَ. The copy box is the middle of the website writing model (the full model is on the Write slides).',
  },
  patternEn: ['A dry climate prevails inland, and winds blow strongly in spring.', 'The air is polluted because of car exhaust, which leads to respiratory diseases.', 'The government must expand public transport in order to reduce emissions.'],
  sorterNotes: 'Then each student picks their own نُقْطَةُ قُوَّةٍ and مَجَالُ تَحْسِينٍ from the middle column.',
  patch: {
    grammar: { ...site.grammar, quiz },
    reading: { text: ar4(site.reading.text) },
    writing: { model: ar4(site.writing.model) },
    speaking: {
      model: [
        ['A', 'مَا أَقْوَى جَانِبٍ فِي لُغَتِكَ فِي هٰذِهِ الوَحْدَةِ، وَمَا الَّذِي تَحْتَاجُ إِلَى تَحْسِينِهِ؟', 'What is the strongest side of your language in this unit, and what do you need to improve?'],
        ['B', ar4(site.speaking.model[1][1]), 'My strength is linking cause and effect, because I use “because of” and “leads to” accurately. As for my area for improvement, it is the passive, and I will revise verb agreement with the grammatical subject.'],
      ],
    },
  },
  patchNote: 'two quiz distractors replaced (they differed only in vowels), “D4” written out in Arabic inside the Arabic texts, and English added to the model sentences and speaking model.',
  hints: ['an / li-kay: which ending?', 'anna or an?', 'Is it a real contrast?'],
  listenParts: [
    {
      title: 'Conversation 1: Maryam', script: T1, q: [0, 1, 2], min: 3,
      extra: [L('Is Maryam for or against the project overall?', ['for it, with a reservation', 'completely against it', 'she does not say'], 'سَيُقَلِّلُ الانْبِعَاثَاتِ، لٰكِنَّ …')],
      tip: 'Label first: project? benefit? problem?\nListen for لٰكِنَّ: the reservation follows.',
      routes: 'Core: questions 1 and 2. Develop/Stretch: all four.',
      gloss: [
        ['فِي المُحَادَثَةِ الأُولَى، وَصَفَتْ مَرْيَمُ مَشْرُوعًا لِتَوْسِيعِ النَّقْلِ العَامِّ.', 'In the first conversation, Maryam described a project to expand public transport.'],
        ['قَالَتْ إِنَّهُ سَيُقَلِّلُ الانْبِعَاثَاتِ،', 'She said it will reduce emissions,'],
        ['لٰكِنَّهَا أَضَافَتْ أَنَّ التَّكْلِفَةَ الأُولَى مُرْتَفِعَةٌ.', 'but she added that the initial cost is high.'],
      ],
    },
    {
      title: 'Conversation 2: Khalid', script: T2, q: [3, 4, 5], min: 3,
      extra: [L('What did Khalid say FIRST about consumption?', ['that it fell', 'that it rose by 9%', 'that it stayed stable'], 'أَوَّلًا قَالَ إِنَّ الاسْتِهْلَاكَ انْخَفَضَ')],
      tip: 'He corrects himself!\nWhich direction is FINAL: up or down?',
      routes: 'Core: questions 1 and 3. Develop/Stretch: all four — question 2 is the corrected detail.',
      gloss: [
        ['وَفِي المُحَادَثَةِ الثَّانِيَةِ، تَحَدَّثَ خَالِدٌ عَنْ شُحِّ المِيَاهِ.', 'In the second conversation, Khalid talked about water scarcity.'],
        ['أَوَّلًا قَالَ إِنَّ الاسْتِهْلَاكَ انْخَفَضَ،', 'First he said consumption fell,'],
        ['ثُمَّ صَحَّحَ نَفْسَهُ وَقَالَ إِنَّهُ ارْتَفَعَ بِنِسْبَةِ ٩٪.', 'then he corrected himself and said it rose by 9%.'],
        ['وَأَكَّدَ أَنَّ الحَلَّ يَحْتَاجُ إِلَى التِّقْنِيَّةِ وَتَغْيِيرِ السُّلُوكِ مَعًا.', 'He confirmed that the solution needs technology and behaviour change together.'],
      ],
    },
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا أَهَمُّ مُشْكِلَةٍ بِيئِيَّةٍ؟' },
      { route: 'develop', ar: 'هَلِ التِّقْنِيَّةُ جُزْءٌ مِنَ الحَلِّ؟' },
      { route: 'stretch', ar: 'مَا نُقْطَةُ قُوَّتِكَ وَمَجَالُ تَحْسِينِكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'مِنْ وَجْهَةِ نَظَرِي، أَهَمُّ مُشْكِلَةٍ هِيَ ______ بِسَبَبِ ______ .' },
      { route: 'develop', ar: 'نَعَمْ، إِلَى حَدٍّ مَا؛ سَأُعْطِي مِثَالًا: ______ .' },
      { route: 'stretch', ar: 'نُقْطَةُ قُوَّتِي ______ ، أَمَّا مَجَالُ التَّحْسِينِ فَهُوَ ______ .' },
    ],
    modelEn: ['What is the strongest side of your language in this unit, and what do you need to improve?', 'My strength is linking cause and effect… As for my area for improvement, it is the passive, and I will revise verb agreement.'],
    notes: 'Website prompts and model. 60 seconds each in pairs; the partner counts the D4 features heard and notes one self-correction phrase. If a student freezes: لِأُصَحِّحْ ذٰلِكَ / بِعِبَارَةٍ أُخْرَى and try again. To a girl: مَا نُقْطَةُ قُوَّتِكِ؟',
  },
  write: {
    core: { amount: '5 sentences', how: 'One per link: climate · problem · cause · solution · opinion — with the frames.' },
    develop: { amount: '100–120 words', how: 'The chain as one paragraph with a passive, a cause–effect and a purpose clause.' },
    stretch: { amount: '130–140 words', how: 'Website task: seven meaningful D4 features + a qualified technology judgement, then self-audit.' },
  },
  frames: {
    core: [
      { en: 'A … climate prevails in …', ar: 'يَسُودُ مَنَاخٌ ______ فِي ______ .' },
      { en: '… is polluted because of …', ar: 'يُلَوَّثُ ______ بِسَبَبِ ______ .' },
      { en: 'The government must … in order to …', ar: 'يَجِبُ عَلَى الحُكُومَةِ أَنْ ______ لِكَيْ ______ .' },
      { en: 'From my point of view, …', ar: 'مِنْ وَجْهَةِ نَظَرِي، ______ .' },
    ],
    develop: [
      { en: '… which leads to …', ar: '______ ، مِمَّا يُؤَدِّي إِلَى ______ .' },
      { en: 'It is indicated that …', ar: 'يُشَارُ إِلَى أَنَّ ______ .' },
      { en: 'Although … , it …', ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّهَا ______ .' },
      { en: '… provided that …', ar: '______ شَرِيطَةَ أَنْ ______ .' },
    ],
    bank: ['يَسُودُ', 'يَتَّسِمُ بِـ', 'تَهُبُّ الرِّيَاحُ', 'يُلَوَّثُ', 'تُقْطَعُ', 'بِسَبَبِ', 'مِمَّا يُؤَدِّي إِلَى', 'يَجِبُ عَلَى … أَنْ', 'لِكَيْ', 'يُشَارُ إِلَى أَنَّ', 'عَلَى الرَّغْمِ مِنْ أَنَّ', 'شَرِيطَةَ أَنْ'],
  },
  stretch: [
    ['تَنَاوَلَتِ الوَحْدَةُ قَضَايَا مُهِمَّةً', 'the unit dealt with important issues'],
    ['نَتِيجَةً لِقِلَّةِ الأَمْطَارِ', 'as a result of low rainfall'],
    ['يُمْكِنُ أَنْ يُسْتَخْدَمَ … لِرَصْدِ الهَدْرِ', '… can be used to monitor waste'],
    ['تُوَفِّرُ المَالَ عَلَى المَدَى البَعِيدِ', 'saves money in the long term'],
    ['يَجْمَعُ بَيْنَ التِّقْنِيَّةِ وَالسِّيَاسَةِ وَالسُّلُوكِ', 'combines technology, policy and behaviour'],
  ],
  modelEn: 'The fourth unit dealt with important issues such as climate change, water scarcity and AI. A dry climate prevails in many regions, and water is scarce as a result of low rainfall and higher consumption. So governments must invest in water reuse to protect resources. Moreover, AI can be used to monitor waste. Although this technology is expensive, it may save money in the long term. In my opinion, a successful solution combines technology, policy and responsible behaviour.',
  find: ['a climate verb', 'a cause–effect chain', 'obligation + purpose', 'a concession with a real contrast'],
  modelNotes: 'Website writing model. D4 features: يَسُودُ · تَشِحُّ … نَتِيجَةً لِـ · يَجِبُ عَلَى … أَنْ تَسْتَثْمِرَ … لِكَيْ تَحْمِيَ · عَلَاوَةً عَلَى ذٰلِكَ · يُمْكِنُ أَنْ يُسْتَخْدَمَ (passive) · عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّهَا · فِي رَأْيِي. Count them with the class: seven or more, each with a job.',
  selfCheck: [
    { route: 'core', text: 'My weather verbs agree (تَهُبُّ الرِّيَاحُ).' },
    { route: 'core', text: 'After أَنْ / لِكَيْ my verbs end in -a.' },
    { route: 'develop', text: 'I used a passive, a cause–effect and a purpose clause.' },
    { route: 'develop', text: 'After أَنَّ my noun ends in -a.' },
    { route: 'stretch', text: 'My concession is a real contrast; my judgement is qualified.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['خِلَالَ وَحْدَةِ', 'during the unit'], ['أَنْ يَصِفُوا', 'to describe'], ['يَشْرَحُوا', 'explain'], ['المَبْنِيِّ لِلْمَجْهُولِ', 'the passive'], ['رَوَابِطِ', 'connectors'],
    ['تَدَرَّبُوا عَلَى', 'they practised'], ['تَقْدِيمِ حُلُولٍ', 'offering solutions'], ['قَيَّمُوا', 'they evaluated'], ['المَخَاطِرَ', 'the risks'], ['تَحْتَ الضَّغْطِ', 'under pressure'],
  ],
  prep: {
    words: [['تَقْيِيمٌ', 'an assessment', 'pl. تَقْيِيمَاتٌ'], ['فَهْمُ المَسْمُوعِ', 'listening comprehension', '—'], ['فَهْمُ المَقْرُوءِ', 'reading comprehension', '—'], ['مَعَايِيرُ التَّصْحِيحِ', 'marking criteria', 'sing. مِعْيَارٌ'], ['أُرَاجِعُ إِجَابَتِي', 'I check my answer', 'تُرَاجِعُ she']],
    questionEn: 'Write your D4 chain from memory: one sentence each for climate, problem, solution and judgement.',
    questionAr: 'يَسُودُ … · يُلَوَّثُ … بِسَبَبِ … · يَجِبُ عَلَى … أَنْ … لِكَيْ … · شَرِيطَةَ أَنْ …',
    homework: {
      core: 'Learn the five chain frames and the five assessment words; redo today’s exit ticket.',
      develop: 'The full chain in 100–120 words, checked with the three classic slips.',
      stretch: 'Website writing task (130–140 words) + count and label your D4 features.',
    },
    wordsSource: 'The five words are the instruction words of the D4-L12 assessment (its listening, reading and marking sections).',
  },
  remember: 'Remember: build a CHAIN — climate → problem → cause → solution → judgement — and check -a after أَنْ, لِكَيْ and أَنَّ.',
});

module.exports = { meta, slides };
