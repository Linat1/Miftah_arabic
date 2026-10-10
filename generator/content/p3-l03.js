'use strict';
/* P3-L03 · Describing Past Holidays — Advanced Narrative — website: Pathways › Progression › P3 › P3-L03 (the four-layer holiday narrative: past perfect
 * before → simple past during → past reaction → conditional reflection; reaction verbs فَاقَ تَوَقُّعَاتِي · غَيَّرَ نَظْرَتِي إِلَى · أَدْرَكْتُ أَنَّ; the negative
 * counterfactual لَوْ لَمْ … لَمَا; impersonal قِيلَ إِنَّ). Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live
 * builder, mission and visual game used as published, with waṣl alif shown without a kasra (الارْتِبَاطِ). English added to the patterns; sorter headings
 * in English. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P3')({
  n: 3, fileTitle: 'Describing_Past_Holidays_Advanced_Narrative', chip: 'Grammar',
  title: 'Describing Past Holidays — Advanced Narrative', arabic: 'وَصْفُ الإِجَازَاتِ المَاضِيَةِ — السَّرْدُ المُتَقَدِّمُ',
  focus: 'Tell a holiday story in four layers: what you had expected (kuntu qad), what happened (the past with connectors), how you reacted (fāqa tawaqquʿātī · adraktu anna) and what you think now (idhā … sa- and law lam … lamā).',
  icon: 'FaCamera', iconSet: 'fa6',
});

const is = (she) => ({ tag: 'I · she', forms: [{ l: 'she', ar: she }] });
const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/الِا/g, 'الا'));
const site = fix(D.site('P3-L03'));
const RH = [['Layer 1 — before', 'kuntu qad + past'], ['Layer 2 — during', 'past + connectors'], ['Layer 3 — reaction', 'adraktu · fāqa tawaqquʿātī'], ['Layer 4 — reflection', 'idhā … sa- · law … la-']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P3-L03', {
  support: `• Core: one sentence for each of the four layers (website Core). Develop: expand Layer 2 to five past-tense sentences with connectors. Stretch: the website 110–120-word anecdote with both conditionals and a reported-speech clause.
• Draw the four layers as a timeline: BEFORE (kuntu qad) → DURING (past) → REACTION (past) → NOW (idhā / law). Students colour-code their own story.
• Not everyone travels: students may tell a story about a day trip, a visit to relatives, Umrah, or an imagined journey — the grammar is the same.
• Cultural link (optional): Ibn Baṭṭūṭa of Tangier wrote the most famous Arabic travel narrative (الرِّحْلَةُ, 14th century) — the four layers are exactly how he tells his stories.
• Grammar links: past perfect (P2-L03) · Type 1 (P1-L03) · Type 2 (P2-L06) · reported speech (P2-L02) · lam + jussive (D units).`,
  teach: 'Four layers, past narrative with weak verbs, reaction verbs, law lam … lamā.',
  wedo: 'Match past activities, build a four-layer anecdote, sort by layer.',
  next: { nextCode: 'P3-L04', nextTitle: 'Arabic-Speaking Destinations — Culture, Geography and Tourism', nextAr: 'الوِجْهَاتُ النَّاطِقَةُ بِالعَرَبِيَّةِ' },
  objectives: ['Use the past perfect for what happened before the holiday.', 'Narrate the holiday itself in the past with connectors.', 'Express a reaction with adraktu, fāqa tawaqquʿātī, ghayyara naẓratī.', 'Close with a Type 1 and a Type 2 reflection.'],
  rulesAr: 'السَّرْدُ الرُّبَاعِيُّ الطَّبَقَاتِ',
  ruleEx: [['كُنْتُ قَدْ حَجَزْتُ رِحْلَتِي', 'كُنْتُ قَدْ سَمِعْتُ أَنَّ البَاعَةَ يَتَفَاوَضُونَ بِشِدَّةٍ'], ['وَصَلْتُ إِلَى المَدِينَةِ القَدِيمَةِ', 'فَجْأَةً، سَمِعْتُ الأَذَانَ يَمْلَأُ السَّمَاءَ'], ['أَدْرَكْتُ أَنَّ الصُّوَرَ لَا تُنْصِفُ المَكَانَ', 'فَاقَ المَكَانُ تَوَقُّعَاتِي'], ['إِذَا أُتِيحَتِ الفُرْصَةُ، سَأَعُودُ', 'لَوْ لَمْ أُسَافِرْ، لَمَا فَهِمْتُ هٰذِهِ الثَّقَافَةَ']],
  doNow: {
    questions: [
      q('What does ذِكْرَى لَا تُنْسَى mean?', ['an unforgettable memory', 'a lost memory', 'a short visit'], 'Prepared at home (P3-L02).'),
      q('What does مُغَامَرَةٌ mean?', ['an adventure', 'a surprise', 'a discovery'], 'Prepared at home (P3-L02).'),
      q('What does صَدْمَةٌ ثَقَافِيَّةٌ mean?', ['culture shock', 'a cultural festival', 'a museum'], 'Prepared at home (P3-L02).'),
      q('Complete: أَقَمْتُ ___ شَقَّةٍ مَفْرُوشَةٍ.', ['فِي', 'عَلَى', 'بِـ'], 'P3-L02: yuqīm fī.'),
      q('Choose the past perfect.', ['كُنْتُ قَدْ حَجَزْتُ الفُنْدُقَ.', 'سَأَحْجِزُ الفُنْدُقَ.', 'أَحْجِزُ الفُنْدُقَ.'], 'P3-L02: kuntu qad ḥajaztu.'),
    ],
    keyIdea: { text: 'A story is not a list. Before → during → reaction → reflection: four layers, four tenses.', ar: '{e|كُنْتُ قَدْ تَوَقَّعْتُ} … {w|وَصَلْتُ} … {k|فَاقَ تَوَقُّعَاتِي} … {p|لَوْ لَمْ أُسَافِرْ، لَمَا} …' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P3-L02. Questions 4–5 retrieve yuqīm fī and the past perfect (P3-L02) — today kuntu qad becomes Layer 1 of every story.',
  },
  routes: {
    core: ['I can write one sentence for each layer.', 'I can open with kuntu qad + past.'],
    develop: ['I can narrate five past events with connectors.', 'I can react with fāqa tawaqquʿātī / adraktu anna.'],
    stretch: ['I can reflect with law lam … lamā and idhā … sa-.', 'I can add an impersonal qīla inna.'],
  },
  bridge: [
    { ar: 'تَجْرِبَةٌ', urdu: 'تجربہ', tr: 'tajriba', en: 'an experience' },
    { ar: 'رِحْلَةٌ', urdu: 'سفرنامہ', tr: 'safarnāma', en: 'a journey · a travelogue (Ibn Baṭṭūṭa’s Riḥla)' },
    { ar: 'لِحُسْنِ الحَظِّ', urdu: 'حسنِ اتفاق', tr: 'husn-e-ittifāq', en: 'fortunately · by good chance' },
    { ar: 'أَثَّرَ فِي · أَثَرٌ', urdu: 'اثر', tr: 'asar', en: 'affected · an effect' },
    { ar: 'ذِكْرَى', urdu: 'یاد · ذکر', tr: 'zikr', en: 'a memory (Urdu ذکر = mention)' },
  ],
  bridgeNotes: 'URDU BRIDGE: تجربہ، اثر and حسن (in حسنِ اتفاق) are shared. Urdu says سفرنامہ for a travelogue; the Arabic genre is الرِّحْلَةُ. CAREFUL: Urdu ذکر means “mention / remembrance of Allah”; Arabic ذِكْرَى is “a memory” (ذِكْرَى لَا تُنْسَى = an unforgettable memory).',
  core: ['قَضَى إِجَازَتَهُ فِي', 'ذِكْرَى لَا تُنْسَى', 'تَجْرِبَةٌ ثَرِيَّةٌ', 'صَدْمَةٌ ثَقَافِيَّةٌ', 'مُغَامَرَةٌ', 'أَدْرَكْتُ أَنَّ', 'فَاقَ تَوَقُّعَاتِي', 'غَيَّرَ نَظْرَتِي إِلَى', 'كُنْتُ قَدْ تَوَقَّعْتُ أَنَّ', 'فَجْأَةً', 'لِحُسْنِ الحَظِّ', 'فِي النِّهَايَةِ'],
  forms: {
    'قَضَى إِجَازَتَهُ فِي': { tag: 'he · I · she', forms: [{ l: 'she', ar: 'قَضَتْ إِجَازَتَهَا' }, { l: 'I', ar: 'قَضَيْتُ إِجَازَتِي' }] },
    'ذِكْرَى لَا تُنْسَى': sp('ذِكْرَيَاتٌ لَا تُنْسَى'), 'تَجْرِبَةٌ ثَرِيَّةٌ': sp('تَجَارِبُ ثَرِيَّةٌ'), 'مُغَامَرَةٌ': sp('مُغَامَرَاتٌ'), 'اكْتِشَافٌ': sp('اكْتِشَافَاتٌ'), 'مُفَاجَأَةٌ': sp('مُفَاجَآتٌ'),
    'يَرْوِي': { tag: 'he · I · she', forms: [{ l: 'she', ar: 'تَرْوِي' }, { l: 'I', ar: 'أَرْوِي' }] },
    'أَدْرَكْتُ أَنَّ': is('أَدْرَكَتْ أَنَّ'), 'كُنْتُ قَدْ تَوَقَّعْتُ أَنَّ': is('كَانَتْ قَدْ تَوَقَّعَتْ أَنَّ'),
    'فَاقَ تَوَقُّعَاتِي': { tag: 'it (m · f)', forms: [{ l: 'f. subject', ar: 'فَاقَتْ تَوَقُّعَاتِي' }] }, 'غَيَّرَ نَظْرَتِي إِلَى': { tag: 'it (m · f)', forms: [{ l: 'f. subject', ar: 'غَيَّرَتْ نَظْرَتِي' }] },
  },
  vocabNotes: {
    0: 'Narrative vocabulary: the nouns of a holiday story. قَضَى إِجَازَتَهُ فِي (spent his holiday in) is a weak verb: قَضَيْتُ (I) · قَضَتْ (she).',
    1: 'Reactions and reflection: Layer 3. Most are past verbs whose SUBJECT is the place: فَاقَ المَكَانُ تَوَقُّعَاتِي · فَاقَتِ البَتْرَاءُ … · أَعْجَبَتْنِي المَدِينَةُ.',
    2: 'Narrative connectors: they turn a list of events into a story. قِيلَ إِنَّ (it is said that) is the passive of قَالَ — still followed by إِنَّ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the four layers (website rules 1–4 + table + teaching point 1) · Core', title: 'Before · during · reaction · reflection', ar: 'أَرْبَعُ طَبَقَاتٍ',
      cols: [{ label: 'Layer', w: 2.2 }, { label: 'Tense', w: 2.0 }, { label: 'Example (website listening)', w: 5.6, size: 19 }, { label: 'Job', w: 2.53 }],
      rows: [
        { core: true, cells: ['1 · before', 'past perfect', '{e|كُنْتُ قَدْ قَرَأْتُ} الكَثِيرَ عَنْ مَرَّاكُشَ قَبْلَ زِيَارَتِي.', 'what you knew'] },
        { core: true, cells: ['2 · during', 'simple past', '{w|وَصَلْتُ} إِلَى المَدِينَةِ القَدِيمَةِ {w|وَانْبَهَرْتُ} بِجَمَالِهَا.', 'what happened'] },
        { core: true, cells: ['3 · reaction', 'past', '{k|أَدْرَكْتُ أَنَّ} الصُّوَرَ لَا تُنْصِفُ هٰذَا المَكَانَ.', 'what you felt'] },
        { core: true, cells: ['4 · reflection', 'law / idhā', '{p|لَوْ لَمْ أُسَافِرْ}، {p|لَمَا فَهِمْتُ} ثَقَافَتَهَا.', 'what you think now'] },
      ],
      ltr: true,
      foot: 'Website common error: the whole story in the simple past, with no past perfect before it.',
      notes: `GRAMMAR PART 1 — website rules “Layer 1–4”, the website table and teaching point “Four temporal layers build a rich narrative”. All four examples are from the website listening.
Website mistake 1: سَمِعْتُ أَنَّ البَاعَةَ يَتَفَاوَضُونَ قَبْلَ زِيَارَتِي ✗ → كُنْتُ قَدْ سَمِعْتُ … (an event BEFORE the holiday takes the past perfect).
Website challenge: “Write one sentence for each of the four layers about a real or imagined destination.”`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · Layer 2 — narrating in the past, I · she · we (website rule 2) · Core / Develop', title: 'I arrived · she arrived · we arrived', ar: 'السَّرْدُ بِالمَاضِي',
      cols: [{ label: 'Verb', w: 2.6 }, { label: 'I', w: 2.6, size: 22 }, { label: 'She', w: 2.6, size: 22 }, { label: 'We', w: 2.6, size: 22 }, { label: 'Type', w: 1.93 }],
      rows: [
        { core: true, cells: ['arrive (waṣala)', '{w|وَصَلْتُ}', 'وَصَلَتْ', 'وَصَلْنَا', 'regular'] },
        { core: true, cells: ['visit (zāra)', '{w|زُرْتُ}', 'زَارَتْ', 'زُرْنَا', 'hollow'] },
        { cells: ['walk (mashā)', '{w|مَشَيْتُ}', 'مَشَتْ', 'مَشَيْنَا', 'weak end'] },
        { cells: ['spend (qaḍā)', '{w|قَضَيْتُ}', 'قَضَتْ', 'قَضَيْنَا', 'weak end'] },
        { cells: ['taste (tadhawwaqa)', '{w|تَذَوَّقْتُ}', 'تَذَوَّقَتْ', 'تَذَوَّقْنَا', 'Form V'] },
        { cells: ['meet (qābala)', '{w|قَابَلْتُ}', 'قَابَلَتْ', 'قَابَلْنَا', 'Form III'] },
      ],
      ltr: true,
      foot: 'Hollow and weak verbs shorten before -tu / -nā: zurtu (not zārtu) · mashaytu · qaḍaytu — but she: zārat · mashat · qaḍat.',
      notes: `GRAMMAR PART 2 — Layer 2 verbs from the website listening and reading (وَصَلْتُ · زُرْتُ · مَشَيْتُ · قَضَيْتُ · تَذَوَّقْتُ · قَابَلْتُ) in the I / she / we forms students need for their own story.
Watch the weak verbs: زُرْتُ (zurtu, short u) · مَشَيْتُ → مَشَتْ (the y drops) · قَضَيْتُ → قَضَتْ.
Connectors for Layer 2 (website vocabulary): فِي البِدَايَةِ · بَعْدَ ذٰلِكَ · فَجْأَةً · فِي تِلْكَ اللَّحْظَةِ · لِحُسْنِ الحَظِّ · فِي النِّهَايَةِ.
Develop target (website): five past-tense sentences with at least three connectors.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · Layer 3 — reaction verbs (website rule 3 + teaching point 2) · Develop', title: 'It exceeded my expectations', ar: 'أَفْعَالُ رَدِّ الفِعْلِ',
      cols: [{ label: 'Reaction', w: 2.7 }, { label: 'Example (website texts)', w: 6.6, size: 19 }, { label: 'Watch out', w: 3.03 }],
      rows: [
        { core: true, cells: ['exceeded my expectations', '{k|فَاقَتِ} البَتْرَاءُ كُلَّ {k|تَوَقُّعَاتِي}.', 'the PLACE is the subject'] },
        { core: true, cells: ['changed my view of', '{k|غَيَّرَتِ} الرِّحْلَةُ {k|نَظْرَتِي إِلَى} التَّارِيخِ.', 'ilā'] },
        { core: true, cells: ['I realised that', '{k|أَدْرَكْتُ أَنَّ} الصُّوَرَ لَا تُنْصِفُ المَكَانَ.', 'anna + -a'] },
        { cells: ['I liked it', '{k|أَعْجَبَتْنِي} المَدِينَةُ كَثِيرًا.', 'the city is the subject'] },
        { cells: ['expectation + contrast', '{e|كُنْتُ قَدْ تَوَقَّعْتُ} مَدِينَةً هَادِئَةً، {k|لٰكِنَّهَا فَاقَتْ تَوَقُّعَاتِي}.', 'kuntu qad … lākinna'] },
      ],
      ltr: true,
      foot: 'Website mistake 3: fāqa takes a direct object — no preposition after tawaqquʿātī.',
      notes: `GRAMMAR PART 3 — website rule “Layer 3 — reaction” and teaching point “Reaction verbs carry the emotion … Pair one with a contrast: كُنْتُ قَدْ تَوَقَّعْتُ … لٰكِنَّ الوَاقِعَ …”. Rows from the website listening, reading and quiz 8.
Feminine subjects: فَاقَتِ البَتْرَاءُ · غَيَّرَتِ الرِّحْلَةُ · أَعْجَبَتْنِي المَدِينَةُ (helping kasra before al-).
أَعْجَبَنِي works like Urdu “mujhe pasand āyā”: the thing liked is the subject, the person is the object pronoun -nī.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · Layer 4 — reflection (website rule 4) · Stretch', title: 'What I will do — and what I would have missed', ar: 'إِذَا … سَـ · لَوْ لَمْ … لَمَا',
      cards: [
        { chip: 'TYPE 1 · INTENTION · CORE', color: '1E6B52', head: 'إِذَا … سَـ', big: 'إِذَا أُتِيحَتْ لِيَ الفُرْصَةُ، سَأَعُودُ حَتْمًا.', en: 'If I get the chance, I will definitely return.', clue: 'Real future.' },
        { chip: 'NEGATIVE TYPE 2 · DEVELOP', color: 'C0386B', head: 'لَوْ لَمْ … لَمَا', big: 'لَوْ لَمْ أُسَافِرْ إِلَى هٰذِهِ المَدِينَةِ، لَمَا فَهِمْتُ ثَقَافَتَهَا.', en: 'Had I not travelled to this city, I would not have understood its culture.', clue: 'lam + jussive · lamā + past.' },
        { chip: 'IMPERSONAL REPORT · STRETCH', color: '6B4C9A', head: 'قِيلَ إِنَّ', big: 'قِيلَ إِنَّ المَدِينَةَ لَا تَنَامُ.', en: 'It is said that the city never sleeps.', clue: 'Passive of qāla.' },
      ],
      error: { text: 'Website mistake 2: a negative Type 2 result uses lamā, not sa-.', pairs: [['لَوْ لَمْ أُسَافِرْ، لَمَا فَهِمْتُ الثَّقَافَةَ', 'لَوْ لَمْ أُسَافِرْ، سَمَا فَهِمْتُ الثَّقَافَةَ']] },
      notes: `GRAMMAR PART 4 — website rule “Layer 4 — reflection” (real future intention + counterfactual) and website quiz 7 (قِيلَ إِنَّ is impersonal reported speech).
The negative Type 2 has two negatives: لَوْ + لَمْ + jussive (لَمْ أُسَافِرْ · لَمْ أَزُرْ — the hollow verb shortens: zur) → لَمَا + past (لَمَا فَهِمْتُ · لَمَا شَعَرْتُ).
Card 1: أُتِيحَتْ is passive past (“was made available”) — after إِذَا it means “if I get the chance”.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me tell it in four layers',
    steps: [
      { head: 'Before', ar: '{e|كُنْتُ قَدْ تَوَقَّعْتُ} …', think: 'Layer 1.' },
      { head: 'During', ar: '{w|وَصَلْتُ} … {w|وَفَجْأَةً} …', think: 'Layer 2.' },
      { head: 'Reaction', ar: '{k|أَدْرَكْتُ أَنَّ} … {k|فَاقَتْ}', think: 'Layer 3.' },
      { head: 'Reflection', ar: '{p|لَوْ لَمْ أَزُرْ} … {p|لَمَا}', think: 'Layer 4.' },
    ],
    legend: ['e', 'w', 'k', 'p'], legendLabels: { e: 'LAYER 1 · BEFORE', w: 'LAYER 2 · DURING', k: 'LAYER 3 · REACTION', p: 'LAYER 4 · REFLECTION' },
    model: 'قَضَيْتُ إِجَازَتِي العَامَ المَاضِيَ فِي الأُرْدُنِّ. {e|كُنْتُ قَدْ تَوَقَّعْتُ} أَنَّ البَتْرَاءَ مُجَرَّدُ آثَارٍ قَدِيمَةٍ. {w|وَصَلْتُ} فَجْرًا {w|وَمَشَيْتُ} عَبْرَ المَمَرِّ الضَّيِّقِ، {w|وَفَجْأَةً ظَهَرَتِ} الخَزْنَةُ أَمَامِي. {k|أَدْرَكْتُ أَنَّ} الصُّوَرَ لَا تُنْصِفُهَا، {k|وَفَاقَتْ} كُلَّ {k|تَوَقُّعَاتِي}. {p|لَوْ لَمْ أَزُرْ} هٰذَا المَكَانَ، {p|لَمَا شَعَرْتُ} بِهٰذَا الارْتِبَاطِ بِالمَاضِي.',
    modelEn: 'I spent my holiday last year in Jordan. I had expected Petra to be just old ruins. I arrived at dawn and walked through the narrow passage, and suddenly the Treasury appeared in front of me. I realised that photos do not do it justice, and it exceeded all my expectations. Had I not visited this place, I would not have felt this connection with the past.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud, layer by layer: “Before I went: kuntu qad tawaqqaʿtu. On the day: waṣaltu, mashaytu, and a drama connector — fajʾatan. My reaction: adraktu anna … fāqat — Petra is feminine. Now: law lam azur … lamā shaʿartu — two negatives.”',
  },
  patternEn: ['I had heard that the traders bargain hard — and it was true', 'suddenly I heard the call to prayer filling the sky of the old city', 'had I not travelled to this city, I would not have understood its culture'],
  gameKey: 'P3-L03',
  game: {
    title: 'What did they do? Match the picture',
    pick: [2, 5, 3],
    en: ['I travelled to Egypt last summer.', 'I swam in the sea.', 'We had dinner together.'],
    icons: [[['fa6', 'FaPlane', 'C77700'], ['fa6', 'FaEarthAfrica', '1E6B52']], [['fa6', 'FaPersonSwimming', '1D5FBF'], ['fa6', 'FaWater', '1D5FBF']], [['fa6', 'FaUtensils', 'C0386B']]],
    labels: ['a trip to Egypt', 'swimming in the sea', 'dinner together'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6; a Foundation past-tense match). Then turn each card into a richer Layer 2 or Layer 1 sentence: سَافَرْتُ إِلَى مِصْرَ → كُنْتُ قَدْ حَلُمْتُ بِزِيَارَةِ مِصْرَ مُنْذُ صِغَرِي، وَفِي الصَّيْفِ المَاضِي سَافَرْتُ إِلَيْهَا أَخِيرًا · سَبَحْتُ فِي البَحْرِ → فَجْأَةً رَأَيْتُ سَمَكًا مُلَوَّنًا …',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build a four-layer anecdote (website live builder)', title: 'Before + during + reflection', ar: 'ابْنِ حِكَايَتَكَ',
      cols: [{ label: '1 · Before (kuntu qad)', w: 4.0, size: 16 }, { label: '2 · During (past)', w: 4.1, size: 16 }, { label: '3 · Reaction / reflection', w: 4.23, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Say it, then write three different versions.',
      notes: `WE DO (3 min) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Core: read row 1 across. Develop: retell a combination as “she” (كَانَتْ قَدْ قَرَأَتْ … فَوَصَلَتْ …). Stretch: add a Layer 3 reaction between columns 2 and 3.`,
    },
  ],
  sorterTitle: 'Before, during — or reaction / reflection?',
  sorterCats: ['layer 1 (before)', 'layer 2 (during)', 'layers 3–4 (reaction / reflection)'],
  sorterNotes: 'Then order one card from each column into a mini-story and add a connector between each: فِي البِدَايَةِ … فَجْأَةً … فِي النِّهَايَةِ …',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns, final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra (الارْتِبَاطِ); rule headings and formulas in English and transliteration; sorter headings in English; the I / she / we past table and the reaction table are teacher-built from the website texts. All other website items, including the visual game, are used as published.',
  hints: ['Before the trip → which tense?', 'law lam … sa-?', 'fāqa … ʿalā?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: kuntu qad · waṣaltu · adraktu.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and label each sentence you hear with its layer (1–4).',
  gloss: [
    ['يَرْوِي المُسَافِرُ: كُنْتُ قَدْ قَرَأْتُ الكَثِيرَ عَنْ مَرَّاكُشَ قَبْلَ زِيَارَتِي، وَكُنْتُ قَدْ سَمِعْتُ أَنَّ البَاعَةَ يَتَفَاوَضُونَ بِشِدَّةٍ.', 'The traveller tells: I had read a lot about Marrakesh before my visit, and I had heard that the traders bargain hard.'],
    ['وَصَلْتُ إِلَى المَدِينَةِ القَدِيمَةِ وَانْبَهَرْتُ بِجَمَالِهَا. فِي تِلْكَ اللَّحْظَةِ، سَمِعْتُ الأَذَانَ يَمْلَأُ السَّمَاءَ، وَتَذَوَّقْتُ طَعَامًا لَمْ أُجَرِّبْهُ مِنْ قَبْلُ.', 'I arrived in the old city and was dazzled by its beauty. At that moment I heard the call to prayer fill the sky, and I tasted food I had never tried before.'],
    ['أَدْرَكْتُ أَنَّ الصُّوَرَ لَا تُنْصِفُ هٰذَا المَكَانَ، وَفَاقَ سِحْرُ الأَزِقَّةِ تَوَقُّعَاتِي.', 'I realised that photos do not do this place justice, and the magic of the alleys exceeded my expectations.'],
    ['لِحُسْنِ الحَظِّ، قَابَلْتُ دَلِيلًا مَحَلِّيًّا أَشَارَ إِلَى أَنَّ أَجْمَلَ الأَسْوَاقِ تَكُونُ صَبَاحًا.', 'Fortunately, I met a local guide who pointed out that the finest souks are in the morning.'],
    ['لَوْ لَمْ أُسَافِرْ إِلَى هٰذِهِ المَدِينَةِ، لَمَا فَهِمْتُ ثَقَافَتَهَا. وَإِذَا أُتِيحَتْ لِيَ الفُرْصَةُ، سَأَعُودُ حَتْمًا.', 'Had I not travelled to this city, I would not have understood its culture. And if I get the chance, I will definitely return.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَاذَا كُنْتَ قَدْ تَوَقَّعْتَ قَبْلَ الرِّحْلَةِ؟' },
      { route: 'develop', ar: 'مَاذَا حَدَثَ حِينَ وَصَلْتَ؟ وَمَا كَانَ رَدُّ فِعْلِكَ؟' },
      { route: 'stretch', ar: 'لَوْ لَمْ تُسَافِرْ، مَاذَا كُنْتَ سَتَفْقِدُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'كُنْتُ قَدْ تَوَقَّعْتُ ______ ، وَكُنْتُ قَدْ قَرَأْتُ ______ .' },
      { route: 'develop', ar: 'عِنْدَمَا وَصَلْتُ ______ ، وَفَاقَ ______ تَوَقُّعَاتِي.' },
      { route: 'stretch', ar: 'لَوْ لَمْ أُسَافِرْ إِلَى ______ ، لَمَا ______ .' },
    ],
    modelEn: ['What had you expected before the trip?', 'I had expected an ordinary place, and I had read a little about it.', 'And what was your reaction?', 'The place exceeded my expectations and changed my view — and had I not travelled, I would not have understood its magic.'],
    notes: 'Website prompts and model. Pairs: interviewer / traveller; the interviewer holds up 1–4 fingers to ask for a layer. To a girl: كُنْتِ قَدْ تَوَقَّعْتِ · وَصَلْتِ · رَدُّ فِعْلِكِ · لَمْ تُسَافِرِي · كُنْتِ سَتَفْقِدِينَ.',
  },
  write: {
    core: { amount: '4 sentences', how: 'Website Core: one sentence for each of the four layers.' },
    develop: { amount: '70–90 words', how: 'Website Develop: expand Layer 2 to five past-tense sentences with connectors.' },
    stretch: { amount: '110–120 words', how: 'Website task: a four-layer anecdote with two past perfects, connectors, a reaction, both conditionals and a reported-speech clause.' },
  },
  frames: {
    core: [
      { en: 'I spent my holiday in …', ar: 'قَضَيْتُ إِجَازَتِي فِي ______ .' },
      { en: 'I had expected that …', ar: 'كُنْتُ قَدْ تَوَقَّعْتُ أَنَّ ______ .' },
      { en: 'I arrived … and suddenly …', ar: 'وَصَلْتُ ______ ، وَفَجْأَةً ______ .' },
      { en: 'The place exceeded my expectations because …', ar: 'فَاقَ المَكَانُ تَوَقُّعَاتِي لِأَنَّ ______ .' },
    ],
    develop: [
      { en: 'Fortunately, I met … who said that …', ar: 'لِحُسْنِ الحَظِّ، قَابَلْتُ ______ قَالَ إِنَّ ______ .' },
      { en: 'I realised that …', ar: 'أَدْرَكْتُ أَنَّ ______ .' },
      { en: 'Had I not travelled, I would not have …', ar: 'لَوْ لَمْ أُسَافِرْ، لَمَا ______ .' },
      { en: 'If I get the chance, …', ar: 'إِذَا أُتِيحَتْ لِيَ الفُرْصَةُ، ______ .' },
    ],
    bank: ['الأُرْدُنِّ', 'مَرَّاكُشَ', 'مَكَانًا عَادِيًّا', 'فَجْرًا', 'ظَهَرَتِ الخَزْنَةُ أَمَامِي', 'سَمِعْتُ الأَذَانَ', 'دَلِيلًا مَحَلِّيًّا', 'الصُّوَرَ لَا تُنْصِفُ المَكَانَ', 'غَيَّرَ نَظْرَتِي إِلَى التَّارِيخِ', 'فَهِمْتُ ثَقَافَتَهُ', 'سَأَعُودُ حَتْمًا', 'ذِكْرَى لَا تُنْسَى'],
  },
  stretch: [
    ['مُجَرَّدُ آثَارٍ قَدِيمَةٍ', 'just old ruins'],
    ['وَمَشَيْتُ عَبْرَ المَمَرِّ الضَّيِّقِ', 'and I walked through the narrow passage'],
    ['يَسْتَحِقُّ يَوْمًا كَامِلًا', 'deserves a whole day'],
    ['لَمَا شَعَرْتُ بِهٰذَا الارْتِبَاطِ بِالمَاضِي', 'I would not have felt this connection with the past'],
    ['سَأَعُودُ لِأَكْتَشِفَ المَزِيدَ', 'I will return to discover more'],
  ],
  modelEn: 'I spent my holiday last year in Jordan. I had booked my trip a month earlier, and I had expected Petra to be just old ruins. I arrived at dawn and walked through the narrow passage, and suddenly the Treasury appeared in front of me. Fortunately, I met a local guide who said that this place deserves a whole day. I realised that photos do not do it justice; Petra exceeded all my expectations and changed my view of history. Had I not visited this place, I would not have felt this connection with the past. And if I get the chance, I will return to discover more.',
  find: ['two past perfects (Layer 1)', 'a past narrative with fajʾatan / li-ḥusni l-ḥaẓẓ (Layer 2)', 'adraktu anna · fāqat · ghayyarat (Layer 3)', 'law lam … lamā and idhā … sa- (Layer 4) + qāla inna'],
  modelNotes: 'Website writing model. Evidence: كُنْتُ قَدْ حَجَزْتُ · كُنْتُ قَدْ تَوَقَّعْتُ (L1) · وَصَلْتُ · مَشَيْتُ · فَجْأَةً ظَهَرَتْ · لِحُسْنِ الحَظِّ، قَابَلْتُ … قَالَ إِنَّ (L2) · أَدْرَكْتُ أَنَّ · فَاقَتْ · غَيَّرَتْ نَظْرَتِي (L3) · لَوْ لَمْ أَزُرْ … لَمَا شَعَرْتُ · إِذَا أُتِيحَتْ … سَأَعُودُ (L4).',
  selfCheck: [
    { route: 'core', text: 'Layer 1 uses kuntu qad + past.' },
    { route: 'core', text: 'Layer 2 is in the simple past, with connectors.' },
    { route: 'develop', text: 'My weak verbs are right (zurtu · mashaytu · qaḍaytu).' },
    { route: 'develop', text: 'My reaction verb agrees with the place (fāqat al-batrāʾ).' },
    { route: 'stretch', text: 'law lam + jussive … lamā + past; idhā … sa-.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['مُجَرَّدُ آثَارٍ', 'just ruins'], ['فَجْرًا', 'at dawn'], ['المَمَرِّ الضَّيِّقِ', 'the narrow passage (the Siq)'], ['الخَزْنَةُ', 'the Treasury'], ['لَا تَنْقُلُ', 'do not convey'],
    ['عَظَمَةَ المَكَانِ', 'the grandeur of the place'], ['بَدَوِيًّا', 'a Bedouin'], ['أَجْدَادَهُ', 'his ancestors'], ['مُنْذُ قُرُونٍ', 'for centuries'], ['الارْتِبَاطِ', 'the connection'],
  ],
  prep: {
    words: [['وِجْهَةٌ سِيَاحِيَّةٌ', 'a tourist destination', 'pl. وِجْهَاتٌ'], ['مَعْلَمٌ تُرَاثِيٌّ', 'a heritage landmark', 'pl. مَعَالِمُ'], ['يَسْتَقْطِبُ', 'it attracts', 'تَسْتَقْطِبُ she / it (f.)'], ['يَتَمَيَّزُ بِـ', 'it is distinguished by', 'تَتَمَيَّزُ she / it (f.)'], ['يَشْتَهِرُ بِـ', 'it is famous for', 'تَشْتَهِرُ she / it (f.)']],
    questionEn: 'Which Arab city would you most like to visit, and what is it famous for?',
    questionAr: 'أَوَدُّ أَنْ أَزُورَ ______ ، لِأَنَّهَا تَشْتَهِرُ بِمَعَالِمِهَا مِثْلِ ______ .',
    homework: {
      core: 'Write one sentence for each of the four layers about a trip (real or imagined).',
      develop: 'Expand Layer 2 to five past-tense sentences with connectors (70–90 words).',
      stretch: 'Website writing task: a 110–120-word four-layer holiday anecdote.',
    },
    wordsSource: 'The five words come from the website P3-L04 vocabulary (Arabic-speaking destinations).',
  },
  remember: 'Remember: four layers — kuntu qad (before) · waṣaltu, zurtu (during) · adraktu anna, fāqa tawaqquʿātī (reaction) · idhā … sa- and law lam … lamā (reflection).',
});

module.exports = { meta, slides };
