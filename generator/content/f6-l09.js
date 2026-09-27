'use strict';
/* F6-L09 · Extended Writing: My Town and How I Get Around — website: Pathways › Foundation › F6 › F6-L09 (three-paragraph plan, F6 high-value structures, connectors with a real job, plan → draft → review → final, 80–100 words). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F6')({
  n: 9, fileTitle: 'Extended_Writing_My_Town_and_How_I_Get_Around', chip: 'Extended Writing',
  title: 'Extended Writing: My Town and How I Get Around', arabic: 'الكِتَابَةُ المُوَسَّعَةُ — مَدِينَتِي وَكَيْفَ أَتَنَقَّلُ',
  focus: 'Plan, draft, check and improve an 80–100-word text in three paragraphs: my town and its places · how I travel · a balanced judgement — using the whole F6 toolkit.',
  icon: 'FaPenNib', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('F6-L09', {
  support: `• Core: a supported 60-word response with one sentence frame per point (all points covered).
• Develop: 80–100 words in three paragraphs with accurate F6 range (five structures).
• Stretch: 100+ words, compare two transport choices and improve the first draft with a self-audit.
• Website: “The word target is a guide to development, not a reason to repeat ideas.” · “The plan, first draft and final version should be visibly different.”
• Review order (website): meaning → organisation → grammar → spelling.
• Lesson shape: 10 min plan (oral rehearsal) · 15 min draft · 8 min review with the checklist · 5 min improve two sentences.`,
  teach: 'Connectors and the F6 toolkit, then a three-paragraph plan.',
  wedo: 'Sort sentences into paragraphs, fix three F6 slips and turn a spoken description into a plan.',
  next: { nextCode: 'F6-L10', nextTitle: 'Listening: Town and Transport Texts', nextAr: 'الاِسْتِمَاعُ — نُصُوصُ المَدِينَةِ وَالمُوَاصَلَاتِ' },
  doNow: {
    questions: [
      q('What does مُقَدِّمَةٌ mean?', ['an introduction', 'a conclusion', 'a draft'], 'Prepared at home (F6-L08).'),
      q('What does مُسَوَّدَةٌ / مَسْوَدَّةٌ mean?', ['a draft', 'a paragraph', 'a plan'], 'Prepared at home (F6-L08).'),
      q('Give “turn” to one female.', ['اِنْعَطِفِي', 'اِنْعَطِفْ', 'اِنْعَطِفُوا'], 'F6-L08: -ī for one girl.'),
      q('Choose “I go to school by bus.”', ['أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ.', 'أَذْهَبُ إِلَى المَدْرَسَةِ عَلَى الحَافِلَةِ.', 'أَذْهَبُ المَدْرَسَةَ بِمَشْيًا.'], 'F6-L03: bi- with a bus.'),
      q('Which introduces an advantage?', ['مِنْ مَزَايَا … أَنَّ', 'تَفْتَقِرُ إِلَى', 'مَمْنُوعُ الدُّخُولِ'], 'F6-L05.'),
    ],
    keyIdea: { text: 'Three paragraphs, three jobs: my town · how I get around · my judgement.', ar: 'مَدِينَتِي … · أَتَنَقَّلُ بِـ … · بِصِفَةٍ عَامَّةٍ …' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F6-L08 (the website spells draft مُسَوَّدَةٌ; مَسْوَدَّةٌ is also used). Questions 3–5 retrieve F6-L08, F6-L03 and F6-L05.',
  },
  routes: {
    core: ['I can cover every task point.', 'I can write 60 accurate words.'],
    develop: ['I can write three connected paragraphs.', 'I can use five F6 structures.'],
    stretch: ['I can compare two transport choices.', 'I can improve my draft with a self-audit.'],
  },
  bridge: [
    { ar: 'مُقَدِّمَةٌ', urdu: 'مقدمہ', tr: 'muqaddama', en: 'Urdu: preface / court case → introduction' },
    { ar: 'تَفْصِيلٌ', urdu: 'تفصیل', tr: 'tafsīl', en: 'detail' },
    { ar: 'خَاتِمَةٌ', urdu: 'خاتمہ', tr: 'khātima', en: 'ending → conclusion' },
    { ar: 'نُسْخَةٌ', urdu: 'نسخہ', tr: 'nuskha', en: 'Urdu: prescription · Arabic: a copy / version' },
    { ar: 'رَأْيٌ', urdu: 'رائے', tr: 'rāy', en: 'opinion' },
  ],
  bridgeNotes: 'URDU BRIDGE: تفصیل، خاتمہ، رائے are shared. مقدمہ (preface; also a court case!) → مُقَدِّمَةٌ (introduction: what comes first). Urdu نسخہ is a doctor’s prescription; Arabic نُسْخَةٌ is a copy or version (نُسْخَةٌ نِهَائِيَّةٌ = final version).',
  core: ['يُوجَدُ / تُوجَدُ', 'تَتَمَيَّزُ بِـ', 'تَفْتَقِرُ إِلَى', 'مَبْنِيٌّ مِنْ', 'أَذْهَبُ بِـ', 'أَذْهَبُ مَشْيًا', 'مِنْ مَزَايَا... أَنَّ', 'مِنْ عُيُوبِ... أَنَّ', 'أُوصِي بِـ', 'لِأَنَّ', 'لِذٰلِكَ', 'بِصِفَةٍ عَامَّةٍ'],
  skipGroups: [0],
  flexGroups: [1],
  vocabNotes: {
    1: 'FLEX: connectors by job — sequence (أَوَّلًا، ثَانِيًا، ثُمَّ) · add (كَمَا أَنَّ) · reason (لِأَنَّ) · result (لِذَلِكَ) · contrast (وَلَكِنَّ، بَيْنَمَا) · conclude (بِصِفَةٍ عَامَّةٍ).',
    2: 'The F6 toolkit: one structure from each lesson L01–L08. Students tick each one they use in their draft.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the three-paragraph plan (website rules 1–3)', title: 'Three paragraphs, three jobs', ar: 'ثَلَاثُ فِقْرَاتٍ',
      cols: [{ label: 'Paragraph', w: 2.8 }, { label: 'Model sentences', w: 7.0, size: 22 }, { label: 'F6 lessons', w: 2.53 }],
      rows: [
        { core: true, cells: ['1 · my town + places', P('أَسْكُنُ فِي مَدِينَةٍ مُتَوَسِّطَةٍ وَحَدِيثَةٍ. {w|تَتَمَيَّزُ} بِحَدَائِقِهَا، وَ{w|تُوجَدُ} فِيهَا مَكْتَبَةٌ كَبِيرَةٌ.', ''), 'L01 · L05 · L07'] },
        { core: true, cells: ['2 · how I travel', P('أَذْهَبُ إِلَى المَدْرَسَةِ {k|بِالحَافِلَةِ}، وَ{k|تَسْتَغْرِقُ الرِّحْلَةُ} خَمْسًا وَعِشْرِينَ دَقِيقَةً.', ''), 'L03 · L04'] },
        { cells: ['2 · + reason', P('أُفَضِّلُ الحَافِلَةَ لِأَنَّهَا {k|أَرْخَصُ مِنْ} سَيَّارَةِ الأُجْرَةِ.', ''), 'L06'] },
        { core: true, cells: ['3 · balanced view', P('{m|مِنْ مَزَايَا} المَدِينَةِ {m|أَنَّ} الخِدْمَاتِ قَرِيبَةٌ، وَ{m|مِنْ عُيُوبِهَا أَنَّ} الشَّوَارِعَ مُكْتَظَّةٌ.', ''), 'L05'] },
        { cells: ['3 · recommendation', P('بِصِفَةٍ عَامَّةٍ، أُوصِي بِزِيَارَتِهَا لِأَنَّهَا مُمْتِعَةٌ وَآمِنَةٌ.', ''), 'L05'] },
      ],
      ltr: true,
      foot: 'These five sentences are the website model answer (≈ 80 words). Keep the jobs, change the content.',
      notes: `GRAMMAR PART 1 — website rules “Paragraph 1: place and character” (place + adjectives + يُوجَدُ / تُوجَدُ), “Paragraph 2: movement and detail” (بِـ / عَلَى / مَشْيًا + duration + reason) and “Paragraph 3: balanced judgement” (مِنْ مَزَايَا / عُيُوبِ … أَنَّ + recommendation or target).
Website overview: “Each paragraph has a clear job, and each high-value structure must communicate relevant content rather than appear as decoration.”`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · the review routine (website rule 4)', title: 'Check in this order', ar: 'مَعْنًى · تَنْظِيمٌ · قَوَاعِدُ · إِمْلَاءٌ',
      cards: [
        { chip: '1 · MEANING', color: '1D5FBF', head: 'هَلْ أَجَبْتُ عَنْ كُلِّ نُقْطَةٍ؟', big: 'هَلْ أَجَبْتُ عَنْ كُلِّ نُقْطَةٍ؟', en: 'Did I answer every point?', clue: 'Task completion first.' },
        { chip: '2 · ORGANISATION', color: '6B4C9A', head: 'رَوَابِطُ لَهَا وَظِيفَةٌ', big: 'أُفَضِّلُ المِتْرُو لِأَنَّهُ سَرِيعٌ، لِذَلِكَ أَسْتَعْمِلُهُ كُلَّ يَوْمٍ.', en: 'I prefer the metro because it is fast, so I use it every day.', clue: 'Every connector has a job.' },
        { chip: '3–4 · GRAMMAR + SPELLING', color: 'C0386B', head: 'المُطَابَقَةُ · بِـ / عَلَى', big: 'مَدِينَتِي حَدِيثَةٌ · أَذْهَبُ بِالقِطَارِ · تُوجَدُ مَكْتَبَةٌ', en: 'Agreement · transport prepositions · yūjadu / tūjadu', clue: 'The F6 high-risk points.' },
      ],
      error: { text: 'Website common error: tatamayyazu takes bi-.', pairs: [['تَتَمَيَّزُ مَدِينَتِي بِحَدَائِقِهَا.', 'تَتَمَيَّزُ مَدِينَتِي إِلَى حَدَائِقِهَا.']] },
      notes: `GRAMMAR PART 2 — website rule “Review for range and accuracy”: مَعْنًى → تَنْظِيمٌ → قَوَاعِدُ → إِمْلَاءٌ (content, organisation, grammar, spelling).
Website questions: هَلْ أَجَبْتُ عَنْ كُلِّ نُقْطَةٍ؟ · هَلِ اسْتَعْمَلْتُ تَرَاكِيبَ مُخْتَلِفَةً؟ · هَلْ رَاجَعْتُ المُطَابَقَةَ؟
Website common error: “Do not add connectors without a logical relationship.”`,
    },
  ],
  quick: [1, 2, 3, 5],
  rest: [0, 4, 7],
  ido: {
    title: 'Watch me turn a plan into a paragraph',
    steps: [
      { head: 'Plan · notes', ar: 'مَدِينَةٌ حَدِيثَةٌ · حَدَائِقُ · مَكْتَبَةٌ', think: 'Notes, not sentences.' },
      { head: 'Draft · sentence', ar: 'أَسْكُنُ فِي مَدِينَةٍ حَدِيثَةٍ، وَفِيهَا حَدَائِقُ وَمَكْتَبَةٌ.', think: 'A simple first version.' },
      { head: 'Improve · range', ar: 'أَسْكُنُ فِي مَدِينَةٍ حَدِيثَةٍ {w|تَتَمَيَّزُ} بِحَدَائِقِهَا، وَ{w|تُوجَدُ} فِيهَا مَكْتَبَةٌ كَبِيرَةٌ.', think: 'Add two F6 structures.' },
      { head: 'Check · accuracy', ar: 'مَدِينَةٌ حَدِيثَةٌ · تُوجَدُ مَكْتَبَةٌ', think: 'Feminine agreement ticked.' },
    ],
    legend: ['w'], legendLabels: { w: 'F6 STRUCTURE' },
    model: 'أَسْكُنُ فِي مَدِينَةٍ مُتَوَسِّطَةٍ وَحَدِيثَةٍ. {w|تَتَمَيَّزُ} بِحَدَائِقِهَا وَمَرْكَزِهَا التِّجَارِيِّ، وَ{w|تُوجَدُ} فِيهَا مَكْتَبَةٌ كَبِيرَةٌ وَمَحَطَّةُ قِطَارٍ. أَذْهَبُ إِلَى المَدْرَسَةِ {w|بِالحَافِلَةِ}، وَ{w|تَسْتَغْرِقُ الرِّحْلَةُ} خَمْسًا وَعِشْرِينَ دَقِيقَةً. أُفَضِّلُ الحَافِلَةَ لِأَنَّهَا {w|أَرْخَصُ مِنْ} سَيَّارَةِ الأُجْرَةِ. {w|مِنْ مَزَايَا} المَدِينَةِ أَنَّ الخِدْمَاتِ قَرِيبَةٌ، وَ{w|مِنْ عُيُوبِهَا} أَنَّ الشَّوَارِعَ مُكْتَظَّةٌ. بِصِفَةٍ عَامَّةٍ، {w|أُوصِي} بِزِيَارَتِهَا لِأَنَّهَا مُمْتِعَةٌ وَآمِنَةٌ.',
    modelEn: 'I live in a medium-sized, modern city. It is known for its parks and shopping centre, and it has a big library and a train station. I go to school by bus, and the journey takes twenty-five minutes. I prefer the bus because it is cheaper than a taxi. One advantage of the city is that services are close; one disadvantage is that the streets are crowded. Overall, I recommend visiting it because it is enjoyable and safe.',
    notes: 'I DO (3 min) — the website model answer, with the plan → draft → improve → check cycle shown on one sentence (steps 1–4). Students count the F6 structures in the model (8).',
  },
  sorterNotes: 'Stretch: add one new sentence of your own to each paragraph.',
  hints: ['Which preposition after tatamayyazu?', 'A bus: by or on?', 'What is missing before the clause?'],
  coreTip: 'Listen twice and fill the three-box plan:\ntown · transport · judgement.',
  listenRoutes: 'Core: questions 1, 3 and 4. Develop / Stretch: all 5, then complete the three-paragraph plan from the text.',
  gloss: [
    ['أَسْكُنُ فِي مَدِينَةِ صَلَالَةَ، وَهِيَ مَدِينَةٌ جَمِيلَةٌ وَخَضْرَاءُ.', 'I live in the city of Salalah, and it is a beautiful, green city.'],
    ['فِي المَرْكَزِ تُوجَدُ أَسْوَاقٌ وَمَطَاعِمُ، وَتَتَمَيَّزُ المَدِينَةُ بِمَنَاظِرِهَا الطَّبِيعِيَّةِ.', 'In the centre there are markets and restaurants, and the city is known for its natural scenery.'],
    ['أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ، وَتَسْتَغْرِقُ الرِّحْلَةُ عِشْرِينَ دَقِيقَةً.', 'I go to school by bus, and the journey takes twenty minutes.'],
    ['مِنْ مَزَايَا المَدِينَةِ أَنَّهَا هَادِئَةٌ، وَلَكِنْ مِنْ عُيُوبِهَا أَنَّ بَعْضَ الأَمَاكِنِ بَعِيدَةٌ.', 'One advantage is that it is quiet, but one disadvantage is that some places are far.'],
    ['بِصِفَةٍ عَامَّةٍ، أُحِبُّهَا كَثِيرًا.', 'Overall, I love it very much.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'قَدِّمْ مَدِينَتَكَ فِي جُمْلَتَيْنِ.' },
      { route: 'develop', ar: 'اِشْرَحْ كَيْفَ تَتَنَقَّلُ.' },
      { route: 'develop', ar: 'اُذْكُرْ مِيزَةً وَعَيْبًا.' },
      { route: 'stretch', ar: 'اِخْتِمْ بِتَوْصِيَةٍ.' },
    ],
    stems: [
      { route: 'core', ar: 'أَسْكُنُ فِي … · تُوجَدُ فِيهَا …' },
      { route: 'develop', ar: 'أَذْهَبُ إِلَى … بِـ … وَتَسْتَغْرِقُ الرِّحْلَةُ …' },
      { route: 'develop', ar: 'مِنْ مَزَايَاهَا أَنَّ … وَمِنْ عُيُوبِهَا أَنَّ …' },
      { route: 'stretch', ar: 'بِصِفَةٍ عَامَّةٍ، أُوصِي بِزِيَارَتِهَا لِأَنَّ …' },
    ],
    modelEn: ['Describe your city and its transport.', 'My city is modern and known for its parks. I go to school by bus.'],
    notes: 'Website “Oral rehearsal before drafting” — say the text before writing it. Pairs: 60 seconds each, partner ticks the F6 structures heard. Website model: صِفْ مَدِينَتَكَ وَمَوَاصَلَاتِهَا. — مَدِينَتِي حَدِيثَةٌ وَتَتَمَيَّزُ بِحَدَائِقِهَا. أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ. — اُذْكُرْ مِيزَةً وَعَيْبًا. — مِنْ مَزَايَاهَا أَنَّ المَوَاصَلَاتِ رَخِيصَةٌ، وَمِنْ عُيُوبِهَا أَنَّ الشَّوَارِعَ مُكْتَظَّةٌ.',
  },
  write: {
    core: { amount: '60 words', how: 'One frame per task point; every point covered.' },
    develop: { amount: '80–100 words', how: 'Website task: three paragraphs, five F6 structures, checked for agreement.' },
    stretch: { amount: '100+ words', how: 'Compare two transport choices; improve the first draft with a self-audit.' },
  },
  frames: {
    core: [
      { en: 'I live in a … city.', ar: 'أَسْكُنُ فِي مَدِينَةٍ ______ .' },
      { en: 'There is a … and a … in it.', ar: 'تُوجَدُ فِيهَا ______ وَيُوجَدُ فِيهَا ______ .' },
      { en: 'I go to school by …', ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ بِـ ______ .' },
      { en: 'The journey takes … minutes.', ar: 'تَسْتَغْرِقُ الرِّحْلَةُ ______ دَقِيقَةً.' },
      { en: 'I like my city because it is …', ar: 'أُحِبُّ مَدِينَتِي لِأَنَّهَا ______ .' },
    ],
    develop: [
      { en: 'It is known for its …', ar: 'تَتَمَيَّزُ بِـ ______ .' },
      { en: 'I prefer … because it is cheaper than …', ar: 'أُفَضِّلُ ______ لِأَنَّهُ أَرْخَصُ مِنْ ______ .' },
      { en: 'One advantage of the city is that …', ar: 'مِنْ مَزَايَا المَدِينَةِ أَنَّ ______ .' },
      { en: 'One disadvantage is that …', ar: 'وَمِنْ عُيُوبِهَا أَنَّ ______ .' },
      { en: 'Overall, I recommend visiting it.', ar: 'بِصِفَةٍ عَامَّةٍ، أُوصِي بِزِيَارَتِهَا.' },
    ],
    bank: ['يُوجَدُ', 'تُوجَدُ', 'تَتَمَيَّزُ بِـ', 'تَفْتَقِرُ إِلَى', 'مَبْنِيٌّ مِنْ', 'بِالحَافِلَةِ', 'مَشْيًا', 'تَسْتَغْرِقُ', 'أَرْخَصُ مِنْ', 'مِنْ مَزَايَا … أَنَّ', 'لِذَلِكَ', 'بِصِفَةٍ عَامَّةٍ'],
  },
  stretch: [
    ['كَمَا تُوجَدُ فِيهَا …', 'there is also …'],
    ['ثُمَّ أَسِيرُ مَشْيًا خَمْسَ دَقَائِقَ', 'then I walk for five minutes'],
    ['مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', 'on one hand … on the other …'],
    ['خَارِجَ سَاعَاتِ الاِزْدِحَامِ', 'outside rush hour'],
    ['مَسْجِدُهَا المَبْنِيُّ مِنَ الحَجَرِ', 'its mosque built of stone'],
  ],
  modelEn: 'I live in a medium-sized, modern city. It is known for its parks and shopping centre, and it has a big library and a train station. I go to school by bus, and the journey takes twenty-five minutes. I prefer the bus because it is cheaper than a taxi. One advantage is that services are close; one disadvantage is that the streets are crowded. Overall, I recommend visiting it because it is enjoyable and safe.',
  find: ['paragraph 1: town', 'paragraph 2: transport', 'paragraph 3: judgement', 'five F6 structures'],
  modelNotes: 'Evidence: تَتَمَيَّزُ، تُوجَدُ · بِالحَافِلَةِ، تَسْتَغْرِقُ، أَرْخَصُ مِنْ · مِنْ مَزَايَا … أَنَّ، مِنْ عُيُوبِهَا أَنَّ، أُوصِي بِـ. ≈ 80 words.',
  selfCheck: [
    { route: 'core', text: 'Every task point is covered.' },
    { route: 'core', text: 'Transport: bi- / ʿalā / mashyan correct.' },
    { route: 'develop', text: 'Three paragraphs, three jobs.' },
    { route: 'develop', text: 'Five F6 structures, all agreeing.' },
    { route: 'stretch', text: 'My final version improves my draft.' },
  ],
  exit: [1, 2, 5],
  glossary: [
    ['قَدِيمَةٍ وَلَكِنَّهَا نَشِيطَةٌ', 'old but lively'], ['سُوقِهَا التَّقْلِيدِيِّ', 'its traditional market'], ['المَبْنِيِّ مِنَ الحَجَرِ', 'built of stone'], ['كَمَا تُوجَدُ', 'there is also'], ['بِالمِتْرُو', 'by metro'],
    ['أَسِيرُ مَشْيًا', 'I walk'], ['أَرْخَصُ مِنْ', 'cheaper than'], ['الخِدْمَاتِ', 'services'], ['مُكْتَظٌّ', 'crowded'], ['سَاعَاتِ الاِزْدِحَامِ', 'rush hour'],
  ],
  prep: {
    words: [['إِعْلَانٌ', 'an announcement', 'pl. إِعْلَانَاتٌ'], ['تَقْرِيرٌ', 'a report', 'pl. تَقَارِيرُ'], ['مُقَابَلَةٌ', 'an interview', 'pl. مُقَابَلَاتٌ'], ['تَفَاصِيلُ', 'details', 'sing. تَفْصِيلٌ'], ['اِزْدِحَامٌ', 'congestion / crowds', '—']],
    questionEn: 'Where might you hear a transport announcement? Name two places.',
    questionAr: 'فِي المَحَطَّةِ · فِي …',
    homework: {
      core: 'Finish your 60-word text from the frames; learn the five announcement words.',
      develop: 'Website writing task: final 80–100-word version with the checklist ticked.',
      stretch: 'Compare two transport choices (100+ words) and write a short self-audit.',
    },
    wordsSource: 'The five words prepare the website F6-L10 listening lesson (announcements, reports, interviews).',
  },
  remember: 'Remember: plan → draft → check → improve · three paragraphs, three jobs · every connector has a job.',
});

module.exports = { meta, slides };
