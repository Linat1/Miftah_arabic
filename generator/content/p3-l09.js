'use strict';
/* P3-L09 · Writing — Travel and Tourism (Paper 4 Extended Writing) — website: Pathways › Progression › P3 › P3-L09 (writing-skills lesson: a 145–160-word
 * travel article in four paragraphs — a past-perfect narrative opening with sensory detail, a Type 1 recommendation, a Type 2 reflection and a conclusion
 * with formal connectors — plus reported speech and a tourism verb). Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking,
 * writing, live builder and mission used as published, with waṣl alif shown without a kasra and the connector spelt عِلَاوَةً (website: عَلَاوَةً). The website
 * visual game repeats the P3-L04 tourism cards, so it is not used. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P3')({
  n: 9, fileTitle: 'Writing_Travel_and_Tourism_Paper_4', chip: 'Writing Skills',
  title: 'Writing — Travel and Tourism (Paper 4 Extended Writing)', arabic: 'الكِتَابَةُ — السَّفَرُ وَالسِّيَاحَةُ (كِتَابَةٌ مُوَسَّعَةٌ)',
  focus: 'Plan and write the longest article of the programme (145–160 words): a kuntu qad opening with sensory detail, an idhā recommendation AND a law reflection, a reported tip, a tourism verb and formal connectors.',
  icon: 'FaPenNib', iconSet: 'fa6',
});

const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const hs = (she) => ({ tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: she }] });
const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/عَلَاوَةً/g, 'عِلَاوَةً'));
const site = fix(D.site('P3-L09'));
const RH = [['Type 1 recommendation', 'idhā + past → sa-'], ['Type 2 reflection', 'law + past → la-'], ['Narrative and citation', 'kuntu qad + past · qāla … inna'], ['Lift register', 'ʿilāwatan ʿalā dhālika · yastaqṭib']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P3-L09', {
  support: `• WRITING-SKILLS LESSON (IGCSE Paper 4, Q3 style): the website task is a 145–160-word travel article — the longest text of the programme. It brings together P3-L01 to P3-L08 and rehearses the P3 writing assessment.
• Core: the four-paragraph plan with one sentence per paragraph (website Core). Develop: expand to 145 words with both conditional types labelled. Stretch: reach 160 words with eight Range markers and a reported tip.
• The website’s Range checklist gives a mark for EACH conditional type — so one idhā and one law, never two idhā. (This is the course’s own Range checklist; Cambridge rewards range and accuracy in general.)
• Accuracy first: a long article with three wrong particles scores less than a shorter, accurate one. Students should check every law result for la-.
• Grammar links: kuntu qad (P3-L02/L03) · tourism verbs (P3-L04) · Type 1 and Type 2 (P3-L05) · qāla inna (P3-L06) · superlatives (P3-L01).`,
  teach: 'The four-paragraph plan, idhā forward / law back, the Range checklist, the travel voice.',
  wedo: 'Upgrade plain sentences, build an article line, sort by paragraph.',
  next: { nextCode: 'P3-L10', nextTitle: 'Listening — Travel, Tourism and Transport Texts', nextAr: 'الاسْتِمَاعُ — نُصُوصُ السَّفَرِ وَالسِّيَاحَةِ وَالنَّقْلِ' },
  objectives: ['Plan a four-paragraph travel article.', 'Use a Type 1 recommendation AND a Type 2 reflection.', 'Add a past-perfect opening, a reported tip and a tourism verb.', 'Self-assess against the P3 Range checklist.'],
  rulesAr: 'تَرْكِيبُ النِّطَاقِ مَعَ نَوْعَيِ الشَّرْطِ',
  ruleEx: [['إِذَا زُرْتَ فَاسَ، سَتَنْبَهِرُ بِأَزِقَّتِهَا'], ['لَوْ خَصَّصْتُ وَقْتًا أَطْوَلَ، لَرَأَيْتُ المَزِيدَ'], ['كُنْتُ قَدْ قَرَأْتُ عَنِ المَدِينَةِ', 'قَالَ الدَّلِيلُ إِنَّ الرَّبِيعَ أَفْضَلُ مَوْسِمٍ'], ['عِلَاوَةً عَلَى ذٰلِكَ، تَسْتَقْطِبُ المَدِينَةُ آلَافَ الزُّوَّارِ']],
  doNow: {
    questions: [
      q('What does الصَّوْتُ السِّيَاحِيُّ mean?', ['the travel-writing voice', 'a tourist’s phone', 'a travel podcast'], 'Prepared at home (P3-L08).'),
      q('What does التَّفْصِيلُ الحِسِّيُّ mean?', ['sensory detail', 'a short summary', 'a travel plan'], 'Prepared at home (P3-L08).'),
      q('What does ذِكْرَى لَا تُنْسَى mean?', ['an unforgettable memory', 'a forgotten souvenir', 'a long journey'], 'Prepared at home (P3-L08).'),
      q('Complete: إِذَا حَجَزْتَ مُبَكِّرًا، ___ المَالَ.', ['سَتُوَفِّرُ', 'لَوَفَّرْتَ', 'وَفَّرْتَ'], 'P3-L08: idhā … sa-.'),
      q('In a travel text, a law sentence often reveals …', ['implicit criticism', 'a real recommendation', 'a statistic'], 'P3-L08: law = what did not happen.'),
    ],
    keyIdea: { text: 'Look forward with idhā, look back with law — one of each earns two Range marks.', ar: '{k|إِذَا} زُرْتَ … {k|سَـ}… · {p|لَوْ} بَقِيتُ … {p|لَـ}…' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P3-L08. Questions 4–5 retrieve the result marker and the attitude of law (P3-L08) — today students write both types themselves.',
  },
  routes: {
    core: ['I can plan four paragraphs, one structure each.', 'I can open with kuntu qad.'],
    develop: ['I can write one idhā AND one law conditional.', 'I can add a reported tip and a tourism verb.'],
    stretch: ['I can add sensory detail and two formal connectors.', 'I can write 145–160 accurate words.'],
  },
  bridge: [
    { ar: 'تَجْرِبَةٌ', urdu: 'تجربہ', tr: 'tajriba', en: 'an experience' },
    { ar: 'تَفْصِيلٌ', urdu: 'تفصیل', tr: 'tafsīl', en: 'a detail' },
    { ar: 'خِتَامٌ · وَخِتَامًا', urdu: 'خاتمہ', tr: 'khātima', en: 'an ending · in conclusion' },
    { ar: 'مَنْزِلٌ', urdu: 'منزل', tr: 'manzil', en: 'false friend! Urdu = destination' },
    { ar: 'تَأَمُّلٌ', urdu: 'تامل', tr: 'taammul', en: 'false friend! Urdu = hesitation' },
  ],
  bridgeNotes: 'URDU BRIDGE: تجربہ، تفصیل and خاتمہ are shared. Two false friends: Urdu منزل = a destination, but Arabic مَنْزِلٌ = a house (destination = الوِجْهَةُ); Urdu تامل = hesitation, but Arabic تَأَمُّلٌ = a reflection — today’s Type 2 paragraph.',
  core: ['الكِتَابَةُ السِّيَاحِيَّةُ', 'شَرْطٌ مِنَ النَّوْعِ الأَوَّلِ', 'شَرْطٌ مِنَ النَّوْعِ الثَّانِي', 'المَاضِي التَّامُّ', 'الكَلَامُ المَنْقُولُ', 'التَّفْصِيلُ الحِسِّيُّ', 'رَابِطٌ رَسْمِيٌّ', 'صِيغَةُ التَّفْضِيلِ', 'تَوْصِيَةٌ', 'تَأَمُّلٌ', 'عِلَاوَةً عَلَى ذٰلِكَ', 'وَخِتَامًا'],
  forms: {
    'رَابِطٌ رَسْمِيٌّ': sp('رَوَابِطُ رَسْمِيَّةٌ'), 'تَوْصِيَةٌ': sp('تَوْصِيَاتٌ'), 'تَأَمُّلٌ': sp('تَأَمُّلَاتٌ'), 'خَلْفِيَّةٌ سَرْدِيَّةٌ': sp('خَلْفِيَّاتٌ سَرْدِيَّةٌ'),
    'ذِكْرَى لَا تُنْسَى': sp('ذِكْرَيَاتٌ لَا تُنْسَى'), 'الوِجْهَةُ': sp('الوِجْهَاتُ'), 'الرِّحْلَةُ': sp('الرِّحْلَاتُ'), 'التَّجْرِبَةُ': sp('التَّجَارِبُ'),
    'يَسْتَقْطِبُ': hs('تَسْتَقْطِبُ'), 'يَدْمُجُ': ihs('أَدْمُجُ', 'تَدْمُجُ'),
  },
  vocabNotes: {
    0: 'The P3 Range checklist — today’s self-assessment: past perfect · reported speech · Type 1 · Type 2 · sensory detail · the travel voice · a formal connector · a superlative.',
    1: 'Travel-writing register: every article has a purpose — إِخْبَارٌ (informing), إِقْنَاعٌ (persuading) or سَرْدٌ (narrating). Today’s article does all three: narrate the trip, persuade the reader to go, inform with a tip.',
    2: 'Structuring the article: خَلْفِيَّةٌ سَرْدِيَّةٌ (narrative opening) → تَوْصِيَةٌ (Type 1) → تَأَمُّلٌ (Type 2) → وَخِتَامًا (conclusion). Connectors sit at the START of a sentence, followed by a comma.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the four-paragraph plan (website table + teaching point 2) · Core', title: 'Four paragraphs, back and forward', ar: 'خُطَّةُ المَقَالَةِ',
      cols: [{ label: 'Paragraph', w: 2.0 }, { label: 'Structure', w: 2.4 }, { label: 'Model sentence (website model)', w: 7.93, size: 18 }],
      rows: [
        { core: true, cells: ['1 · narrative ←', 'past perfect + detail', '{e|كُنْتُ قَدْ حَلِمْتُ} بِزِيَارَةِ البَتْرَاءِ مُنْذُ الطُّفُولَةِ … فَحَبَسْتُ أَنْفَاسِي مِنَ الدَّهْشَةِ.'] },
        { core: true, cells: ['2 · recommend →', 'Type 1', '{k|إِذَا} خَطَّطْتَ لِرِحْلَةٍ إِلَى الأُرْدُنِّ، {k|فَلَا بُدَّ} مِنْ قَضَاءِ يَوْمٍ كَامِلٍ فِيهَا.'] },
        { core: true, cells: ['3 · reflect ←', 'Type 2', '{p|لَوْ} كُنْتُ قَدْ بَقِيتُ لَيْلَةً إِضَافِيَّةً، {p|لَرَأَيْتُ} الخَزْنَةَ تَحْتَ ضَوْءِ الشُّمُوعِ.'] },
        { core: true, cells: ['4 · conclude →', 'connector + outcome', '{w|وَخِتَامًا}، لَقَدْ غَيَّرَتْ هٰذِهِ الرِّحْلَةُ نَظْرَتِي إِلَى التَّارِيخِ.'] },
      ],
      ltr: true,
      foot: 'Back · forward · back · forward: the article swings between memory and advice.',
      notes: `GRAMMAR PART 1 — website teaching point “Map a structure to each paragraph” and the website table (narrative looks back · recommendation looks forward · reflection looks back · conclusion looks forward).
Row 2: the website model recommends with إِذَا … فَلَا بُدَّ مِنْ (P3-L04) — a Type 1 with fa-, because the result is not a sa- verb.
Row 4: the website table asks for “future + connector”; the model ends in the past (لَقَدْ غَيَّرَتْ). Stretch writers can add a future: وَسَأَعُودُ إِلَيْهَا يَوْمًا مَا إِنْ شَاءَ اللّٰهُ.
Core students write ONLY these four sentences — one per paragraph — and still have a complete, organised text.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · one idhā and one law (website rules 1–2 + teaching point 1) · Develop', title: 'Forward with idhā, back with law', ar: 'إِذَا إِلَى الأَمَامِ · لَوْ إِلَى الوَرَاءِ',
      cards: [
        { chip: 'TYPE 1 · FORWARD · CORE', color: '1E6B52', head: 'إِذَا … سَـ', big: 'إِذَا زُرْتَ فَاسَ، سَتَنْبَهِرُ بِأَزِقَّتِهَا.', en: 'If you visit Fez, you will be amazed by its alleys.', clue: 'Advice to “you”.' },
        { chip: 'TYPE 2 · BACK · DEVELOP', color: 'C0386B', head: 'لَوْ … لَـ', big: 'لَوْ خَصَّصْتُ وَقْتًا أَطْوَلَ، لَرَأَيْتُ المَزِيدَ.', en: 'Had I set aside more time, I would have seen more.', clue: 'Regret about “I”.' },
        { chip: 'BOTH IN ONE · STRETCH', color: '6B4C9A', head: 'لَوْ … لَـ ، لٰكِنْ إِذَا … سَـ', big: 'لَوْ بَقِيتُ أَطْوَلَ لَرَأَيْتُ المَزِيدَ، لٰكِنْ إِذَا عُدْتُ سَأَبْقَى أَطْوَلَ.', en: 'Had I stayed longer I would have seen more, but if I return I will stay longer.', clue: '2 marks, 1 sentence.' },
      ],
      error: { text: 'Website mistake 1: two Type 1 conditionals earn only one Range mark.', pairs: [['إِذَا زُرْتَ فَاسَ، سَتَنْبَهِرُ؛ وَلَوْ بَقِيتُ أَطْوَلَ، لَرَأَيْتُ المَزِيدَ', 'إِذَا زُرْتَ فَاسَ، سَتَنْبَهِرُ؛ وَإِذَا بَقِيتَ أَطْوَلَ، سَتَرَى المَزِيدَ']] },
      notes: `GRAMMAR PART 2 — website rules “Type 1 recommendation” and “Type 2 reflection”, teaching point 1 and mistake 1. Card 3 is from the website speaking model.
A useful habit: Type 1 talks to YOU (the reader: زُرْتَ · خَطَّطْتَ); Type 2 talks about ME (the writer: بَقِيتُ · خَصَّصْتُ).
Website mistake 2: لَوْ حَجَزْتُ مُبَكِّرًا، سَحَصَلْتُ ✗ → لَحَصَلْتُ ✓.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · the P3 Range checklist in the website model (website rules 3–4 + vocabulary) · Develop', title: 'Find the Range in the model', ar: 'مَعَايِيرُ النِّطَاقِ',
      cols: [{ label: 'Range marker', w: 2.6 }, { label: 'Evidence in the website model', w: 7.4, size: 18 }, { label: 'Lesson', w: 2.33 }],
      rows: [
        { core: true, cells: ['past perfect', '{e|كُنْتُ قَدْ حَلِمْتُ} · {e|كُنْتُ قَدْ قَرَأْتُ} عَنْهَا كَثِيرًا', 'P3-L02 / L03'] },
        { core: true, cells: ['reported speech', '{m|قَالَ} الدَّلِيلُ المَحَلِّيُّ {m|إِنَّ} الزِّيَارَةَ لَيْلًا تَجْرِبَةٌ سَاحِرَةٌ', 'P3-L06'] },
        { cells: ['tourism verb', '{w|تَسْتَقْطِبُ} البَتْرَاءُ {w|زُوَّارًا} مِنْ كُلِّ القَارَّاتِ', 'P3-L04'] },
        { cells: ['superlative', 'أَشَارَ إِلَى أَنَّ الرَّبِيعَ {w|أَفْضَلُ مَوْسِمٍ}', 'P3-L01'] },
        { cells: ['connectors', '{w|عِلَاوَةً عَلَى ذٰلِكَ} · {w|وَعَلَى الرَّغْمِ مِنْ ذٰلِكَ} · {w|وَخِتَامًا}', 'P3-L05'] },
      ],
      ltr: true,
      foot: 'With the Type 1 and Type 2 from Part 2, that is eight Range markers — the website Stretch target.',
      notes: `GRAMMAR PART 3 — website rules “Narrative and citation” and “Lift register”, the vocabulary group “The P3 Range criteria” and the website writing model.
Website mistake 3: قَالَ الدَّلِيلُ أَنَّ ✗ → إِنَّ ✓ (أَشَارَ إِلَى takes أَنَّ).
Spelling: عِلَاوَةً (ʿilāwatan) — the website writes عَلَاوَةً; the kasra is correct (cf. Urdu علاوہ).
Self-assessment: students tick each row in their own draft with a coloured pen.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the travel voice: sensory detail (website model + vocabulary) · Stretch', title: 'Make the reader see it', ar: 'التَّفْصِيلُ الحِسِّيُّ',
      cols: [{ label: 'Tool', w: 2.3 }, { label: 'Example (website model)', w: 7.5, size: 19 }, { label: 'Effect', w: 2.53 }],
      rows: [
        { core: true, cells: ['time + movement', '{p|وَصَلْتُ فَجْرًا}، وَمَشَيْتُ عَبْرَ المَمَرِّ الضَّيِّقِ', 'we walk with you'] },
        { cells: ['sudden reveal', 'حَتَّى {e|ظَهَرَتِ} الخَزْنَةُ {e|فَجْأَةً}', 'surprise'] },
        { core: true, cells: ['body reaction', '{k|فَحَبَسْتُ أَنْفَاسِي} مِنَ الدَّهْشَةِ', 'emotion'] },
        { cells: ['colour + material', 'بِعِمَارَتِهَا المَنْحُوتَةِ فِي {m|الصَّخْرِ الوَرْدِيِّ}', 'a picture'] },
        { cells: ['light', 'لَرَأَيْتُ الخَزْنَةَ {m|تَحْتَ ضَوْءِ الشُّمُوعِ}', 'atmosphere'] },
      ],
      ltr: true,
      foot: 'One sensory detail per paragraph turns a list of facts into a travel article.',
      notes: `GRAMMAR PART 4 — the website vocabulary “التَّفْصِيلُ الحِسِّيُّ” and “الصَّوْتُ السِّيَاحِيُّ”, with every example from the website writing model.
حَتَّى + past = “until (finally)”: مَشَيْتُ حَتَّى ظَهَرَتِ الخَزْنَةُ. فَـ + past = “and so”: فَحَبَسْتُ أَنْفَاسِي.
Stretch: add one detail for each sense in your own article — sight, sound (أَذَانُ الفَجْرِ), smell (رَائِحَةُ التَّوَابِلِ), taste, touch.`,
    },
  ],
  quick: [0, 1, 4, 5],
  rest: [2, 3, 6, 7],
  ido: {
    title: 'Watch me build the article',
    steps: [
      { head: 'Narrative', ar: '{e|كُنْتُ قَدْ حَلِمْتُ} … فَحَبَسْتُ أَنْفَاسِي', think: 'Back + detail.' },
      { head: 'Reported tip', ar: '{m|قَالَ} الدَّلِيلُ {m|إِنَّ} …', think: 'qāla + inna.' },
      { head: 'Recommend', ar: '{k|إِذَا} خَطَّطْتَ … {k|فَلَا بُدَّ}', think: 'Forward.' },
      { head: 'Reflect + close', ar: '{p|لَوْ} … {p|لَرَأَيْتُ} · {w|وَخِتَامًا}', think: 'Back, then close.' },
    ],
    legend: ['e', 'm', 'w', 'k', 'p'], legendLabels: { e: 'PAST PERFECT', m: 'REPORTED', w: 'CONNECTOR', k: 'TYPE 1', p: 'TYPE 2' },
    model: '{e|كُنْتُ قَدْ حَلِمْتُ} بِزِيَارَةِ البَتْرَاءِ مُنْذُ الطُّفُولَةِ. وَصَلْتُ فَجْرًا، فَظَهَرَتِ الخَزْنَةُ فَجْأَةً، فَحَبَسْتُ أَنْفَاسِي مِنَ الدَّهْشَةِ. {m|قَالَ} الدَّلِيلُ المَحَلِّيُّ {m|إِنَّ} الزِّيَارَةَ لَيْلًا تَجْرِبَةٌ سَاحِرَةٌ. {k|إِذَا} خَطَّطْتَ لِرِحْلَةٍ إِلَى الأُرْدُنِّ، {k|فَلَا بُدَّ} مِنْ قَضَاءِ يَوْمٍ كَامِلٍ فِيهَا. {p|وَلَوْ} كُنْتُ قَدْ بَقِيتُ لَيْلَةً إِضَافِيَّةً، {p|لَرَأَيْتُ} الخَزْنَةَ تَحْتَ ضَوْءِ الشُّمُوعِ. {w|وَخِتَامًا}، لَقَدْ غَيَّرَتْ هٰذِهِ الرِّحْلَةُ نَظْرَتِي إِلَى التَّارِيخِ.',
    modelEn: 'I had dreamed of visiting Petra since childhood. I arrived at dawn, the Treasury suddenly appeared, and I held my breath in amazement. The local guide said that a night visit is an enchanting experience. If you plan a trip to Jordan, you must spend a whole day there. And had I stayed an extra night, I would have seen the Treasury by candlelight. In conclusion, this trip changed my view of history.',
    notes: 'I DO (3 min) — the skeleton of the website model. Build it paragraph by paragraph, counting Range aloud: past perfect (1) · sensory detail (2) · reported speech (3) · Type 1 (4) · Type 2 (5) · connector (6). Then point to the full model (Feedback) for the tourism verb and two more connectors.',
  },
  patternEn: ['I had read about the city, but the reality surpassed my imagination', 'if you visit Fez, you will be amazed by its alleys', 'had I set aside more time, I would have seen more'],
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · upgrade the sentence (website model and mistakes)', title: 'From plain to Paper 4', ar: 'حَسِّنِ الجُمْلَةَ',
      cols: [{ label: 'Plain sentence', w: 3.2, size: 20 }, { label: 'Paper 4 sentence', w: 6.8, size: 18 }, { label: 'Structure', w: 2.33 }],
      rows: [
        { core: true, cells: ['أَرَدْتُ زِيَارَةَ البَتْرَاءِ.', 'كُنْتُ قَدْ حَلِمْتُ بِزِيَارَةِ البَتْرَاءِ مُنْذُ الطُّفُولَةِ.', 'past perfect'] },
        { core: true, cells: ['رَأَيْتُ الخَزْنَةَ.', 'ظَهَرَتِ الخَزْنَةُ فَجْأَةً، فَحَبَسْتُ أَنْفَاسِي مِنَ الدَّهْشَةِ.', 'sensory detail'] },
        { cells: ['الدَّلِيلُ قَالَ: اللَّيْلُ جَمِيلٌ.', 'قَالَ الدَّلِيلُ المَحَلِّيُّ إِنَّ الزِّيَارَةَ لَيْلًا تَجْرِبَةٌ سَاحِرَةٌ.', 'reported speech'] },
        { cells: ['زُرِ الأُرْدُنَّ.', 'إِذَا خَطَّطْتَ لِرِحْلَةٍ إِلَى الأُرْدُنِّ، فَلَا بُدَّ مِنْ قَضَاءِ يَوْمٍ كَامِلٍ فِيهَا.', 'Type 1'] },
        { cells: ['بَقِيتُ يَوْمًا وَاحِدًا فَقَطْ.', 'لَوْ كُنْتُ قَدْ بَقِيتُ لَيْلَةً إِضَافِيَّةً، لَرَأَيْتُ الخَزْنَةَ تَحْتَ ضَوْءِ الشُّمُوعِ.', 'Type 2'] },
      ],
      ltr: true,
      foot: 'Cover the middle column: upgrade each plain sentence, then compare with the website model.',
      notes: `WE DO (3 min) — an upgrade drill built from the website model. The left-hand sentences are accurate but show almost no Range — that is the point.
Core: rows 1–2. Develop: rows 1–4. Stretch: all five, then add a connector to the front of rows 3 and 5 (عِلَاوَةً عَلَى ذٰلِكَ · وَعَلَى الرَّغْمِ مِنْ ذٰلِكَ).
Row 5: the plain fact (I stayed only one day) is exactly what the law sentence imagines differently.`,
    },
    {
      type: 'formsTable', stage: 'wedo', min: 2, flex: true, eyebrow: 'We do · build an article line (website live builder)', title: 'Narrative + recommendation + reflection', ar: 'ابْنِ سَطْرًا غَنِيًّا',
      cols: [{ label: '1 · Narrative opening', w: 3.9, size: 16 }, { label: '2 · Recommendation / tip', w: 4.2, size: 16 }, { label: '3 · Reflection / close', w: 4.23, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Say it, then write three different versions.',
      notes: `WE DO (flex) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Ask: which combination has the MOST Range? (e.g. row 1 + row 3 + row 2: past perfect + reported + superlative + connector + Type 2).`,
    },
  ],
  sorterTitle: 'Narrative, recommendation or reflection?',
  sorterNotes: 'Then pick one card from each column and join them into a three-sentence mini-article with a connector between each.',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns, final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'the connector spelt عِلَاوَةً (website: عَلَاوَةً); waṣl alif shown without a kasra; rule headings and formulas in English and transliteration; the Range, sensory-detail and upgrade tables are teacher-built from the website model; the website visual game repeats the P3-L04 cards and is not used. All other website items are used as published.',
  hints: ['Two idhā = Range?', 'law … sa-?', 'qāla + anna?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 5.\nListen for: the word count and the two marks.',
  listenRoutes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 5 — and write down the order of the four paragraphs.',
  gloss: [
    ['فِي الوَرَقَةِ الرَّابِعَةِ، يَبْلُغُ النَّصُّ فِي هٰذِهِ الوَحْدَةِ مِئَةً وَخَمْسًا وَأَرْبَعِينَ إِلَى مِئَةٍ وَسِتِّينَ كَلِمَةً، وَهُوَ أَطْوَلُ نَصٍّ فِي البَرْنَامَجِ.', 'In Paper 4, the text in this unit is 145 to 160 words — the longest text in the programme.'],
    ['النِّطَاقُ يُكَافِئُ نَوْعَيِ الشَّرْطِ بِعَلَامَتَيْنِ مُنْفَصِلَتَيْنِ: عَلَامَةٌ لِلنَّوْعِ الأَوَّلِ، وَعَلَامَةٌ لِلنَّوْعِ الثَّانِي.', 'Range rewards the two conditional types with two separate marks: one for Type 1 and one for Type 2.'],
    ['النَّوْعُ الأَوَّلُ يَنْظُرُ إِلَى الأَمَامِ وَيُوصِي القَارِئَ، أَمَّا النَّوْعُ الثَّانِي فَيَنْظُرُ إِلَى الوَرَاءِ وَيَتَأَمَّلُ.', 'Type 1 looks forward and recommends to the reader, while Type 2 looks back and reflects.'],
    ['النَّصُّ الَّذِي يَحْمِلُ نَوْعًا وَاحِدًا فَقَطْ لَا يَنَالُ النِّطَاقَ الكَامِلَ.', 'A text that carries only one type does not get full Range.'],
    ['افْتَحْ بِخَلْفِيَّةٍ سَرْدِيَّةٍ فِي المَاضِي التَّامِّ، ثُمَّ أَوْصِ بِالنَّوْعِ الأَوَّلِ، ثُمَّ تَأَمَّلْ بِالنَّوْعِ الثَّانِي، وَاخْتِمْ بِرَابِطٍ رَسْمِيٍّ.', 'Open with a narrative background in the past perfect, then recommend with Type 1, then reflect with Type 2, and close with a formal connector.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا خَلْفِيَّتُكَ السَّرْدِيَّةُ فِي المَاضِي التَّامِّ؟' },
      { route: 'develop', ar: 'مَا تَوْصِيَتُكَ لِلْقَارِئِ بِشَرْطٍ مِنَ النَّوْعِ الأَوَّلِ؟' },
      { route: 'stretch', ar: 'مَا تَأَمُّلُكَ بِشَرْطٍ مِنَ النَّوْعِ الثَّانِي؟' },
    ],
    stems: [
      { route: 'core', ar: 'كُنْتُ قَدْ حَلِمْتُ بِزِيَارَةِ ______ مُنْذُ ______ .' },
      { route: 'develop', ar: 'إِذَا زُرْتَ ______ ، سَتَنْبَهِرُ بِـ ______ .' },
      { route: 'stretch', ar: 'لَوْ بَقِيتُ ______ ، لَرَأَيْتُ ______ .' },
    ],
    modelEn: ['What is your background?', 'I had dreamed of visiting Petra, and I had read a lot about it.', 'And your reflection?', 'Had I stayed an extra night, I would have seen more — but if I return, I will stay longer.'],
    notes: 'Website prompts and model: students TALK THROUGH their plan with a partner before writing (2 min each). The partner counts the Range markers on their fingers. To a girl: خَلْفِيَّتُكِ · تَوْصِيَتُكِ · تَأَمُّلُكِ. Develop stem: سَتَنْبَهِرُ بِجَمَالِهَا / بِأَسْوَاقِهَا.',
  },
  write: {
    core: { amount: '4 paragraphs', how: 'Website Core: the four-paragraph plan with one sentence per paragraph.' },
    develop: { amount: '145 words', how: 'Website Develop: expand to 145 words with both conditional types labelled.' },
    stretch: { amount: '145–160 words', how: 'Website task: a travel article with eight Range markers, a reported tip and two formal connectors.' },
  },
  frames: {
    core: [
      { en: 'I had dreamed of visiting … since …', ar: 'كُنْتُ قَدْ حَلِمْتُ بِزِيَارَةِ ______ مُنْذُ ______ .' },
      { en: 'If you plan a trip to …, you must …', ar: 'إِذَا خَطَّطْتَ لِرِحْلَةٍ إِلَى ______ ، فَلَا بُدَّ مِنْ ______ .' },
      { en: 'Had I stayed longer, I would have seen …', ar: 'لَوْ بَقِيتُ أَطْوَلَ، لَرَأَيْتُ ______ .' },
      { en: 'In conclusion, this trip changed …', ar: 'وَخِتَامًا، لَقَدْ غَيَّرَتْ هٰذِهِ الرِّحْلَةُ ______ .' },
    ],
    develop: [
      { en: 'I arrived at … and walked … until …', ar: 'وَصَلْتُ ______ ، وَمَشَيْتُ ______ حَتَّى ______ .' },
      { en: 'The local guide said that …', ar: 'قَالَ الدَّلِيلُ المَحَلِّيُّ إِنَّ ______ .' },
      { en: 'Moreover, … attracts visitors from …', ar: 'عِلَاوَةً عَلَى ذٰلِكَ، تَسْتَقْطِبُ ______ زُوَّارًا مِنْ ______ .' },
      { en: 'Despite that, …', ar: 'وَعَلَى الرَّغْمِ مِنْ ذٰلِكَ، ______ .' },
    ],
    bank: ['مُنْذُ الطُّفُولَةِ', 'فَجْرًا', 'فَحَبَسْتُ أَنْفَاسِي', 'مِنَ الدَّهْشَةِ', 'تَجْرِبَةٌ سَاحِرَةٌ', 'أَفْضَلُ مَوْسِمٍ', 'مِنْ كُلِّ القَارَّاتِ', 'قَضَاءِ يَوْمٍ كَامِلٍ', 'لَيْلَةً إِضَافِيَّةً', 'تَحْتَ ضَوْءِ الشُّمُوعِ', 'نَظْرَتِي إِلَى التَّارِيخِ', 'فَاقَ الوَاقِعُ خَيَالِي'],
  },
  stretch: [
    ['وَكُنْتُ قَدْ قَرَأْتُ عَنْهَا كَثِيرًا قَبْلَ الرِّحْلَةِ', 'and I had read a lot about it before the trip'],
    ['وَأَشَارَ إِلَى أَنَّ الرَّبِيعَ أَفْضَلُ مَوْسِمٍ', 'and he pointed out that spring is the best season'],
    ['بِعِمَارَتِهَا المَنْحُوتَةِ فِي الصَّخْرِ الوَرْدِيِّ', 'with its architecture carved into the pink rock'],
    ['وَلَتَعَمَّقَتْ تَجْرِبَتِي أَكْثَرَ', 'and my experience would have been deeper'],
    ['نَظْرَتِي إِلَى التَّارِيخِ وَالجَمَالِ مَعًا', 'my view of history and beauty together'],
  ],
  modelEn: 'I had dreamed of visiting Petra since childhood, and I had read a lot about it before the trip. I arrived at dawn and walked through the narrow passage until the Treasury suddenly appeared, and I held my breath in amazement. The local guide said that a night visit is an enchanting experience, and pointed out that spring is the best season. Moreover, Petra attracts visitors from every continent with its architecture carved into the pink rock. If you plan a trip to Jordan, you must spend a whole day there. Despite that, had I stayed an extra night, I would have seen the Treasury by candlelight, and my experience would have been deeper. In conclusion, this trip changed my view of history and beauty together.',
  find: ['two past perfects (kuntu qad)', 'reported speech (qāla … inna · ashāra ilā anna)', 'one idhā AND one law conditional', 'a tourism verb, a superlative and three connectors'],
  modelNotes: 'Website writing model (≈ 150 words). Range: كُنْتُ قَدْ حَلِمْتُ · كُنْتُ قَدْ قَرَأْتُ (past perfect) · فَحَبَسْتُ أَنْفَاسِي مِنَ الدَّهْشَةِ (sensory detail) · قَالَ … إِنَّ · أَشَارَ إِلَى أَنَّ (reported) · أَفْضَلُ مَوْسِمٍ (superlative) · تَسْتَقْطِبُ (tourism verb) · إِذَا خَطَّطْتَ … فَلَا بُدَّ (Type 1) · لَوْ كُنْتُ قَدْ بَقِيتُ … لَرَأَيْتُ (Type 2) · عِلَاوَةً عَلَى ذٰلِكَ · عَلَى الرَّغْمِ مِنْ ذٰلِكَ · وَخِتَامًا (connectors).',
  selfCheck: [
    { route: 'core', text: 'Four paragraphs: narrative · recommendation · reflection · conclusion.' },
    { route: 'core', text: 'My opening uses kuntu qad (kāna agrees with “I”).' },
    { route: 'develop', text: 'One idhā … sa- / fa- AND one law … la- (not two idhā).' },
    { route: 'develop', text: 'A reported tip with qāla … inna and a tourism verb with its object.' },
    { route: 'stretch', text: 'Sensory detail, two formal connectors, 145–160 accurate words.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['حَلِمْتُ بِـ', 'I dreamed of'], ['الطُّفُولَةِ', 'childhood'], ['فَجْرًا', 'at dawn'], ['المَمَرِّ الضَّيِّقِ', 'the narrow passage (the Siq)'], ['الخَزْنَةُ', 'the Treasury'],
    ['فَحَبَسْتُ أَنْفَاسِي', 'I held my breath'], ['الدَّهْشَةِ', 'amazement'], ['سَاحِرَةٌ', 'enchanting'], ['ضَوْءِ الشُّمُوعِ', 'candlelight'], ['نَظْرَتِي', 'my view'],
  ],
  prep: {
    words: [['التَّمْيِيزُ الصَّوْتِيُّ', 'auditory distinction', '—'], ['الفِعْلُ التَّالِي', 'the following verb', '—'], ['الجَزْمُ', 'certainty', '—'], ['التَّشْكِيكُ', 'doubt', '—'], ['بُنْيَةٌ تَحْتِيَّةٌ', 'infrastructure', 'pl. بُنًى تَحْتِيَّةٌ']],
    questionEn: 'When you hear law or idhā, which word in the result helps you check the type?',
    questionAr: 'بَعْدَ «لَوْ» أَسْمَعُ « ______ » فِي الجَوَابِ، وَبَعْدَ «إِذَا» أَسْمَعُ « ______ ».',
    homework: {
      core: 'Finish the four-paragraph plan with one sentence per paragraph.',
      develop: 'Write the 145-word version and label both conditionals in colour.',
      stretch: 'Website writing task: the full 145–160-word travel article with eight Range markers.',
    },
    wordsSource: 'The five words come from the website P3-L10 vocabulary (listening for conditionals).',
  },
  remember: 'Remember: four paragraphs — back (kuntu qad + a detail) · forward (idhā … sa- / fa-) · back (law … la-) · close (wa-khitāman) — one idhā AND one law, a reported tip, a tourism verb and two formal connectors.',
});

module.exports = { meta, slides };
