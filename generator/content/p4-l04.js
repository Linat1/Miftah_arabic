'use strict';
/* P4-L04 · Water in the Arab World — Scarcity, Management and the Future — website: Pathways › Progression › P4 › P4-L04 (impersonal necessity
 * يَنْبَغِي أَنْ / مِنَ الضَّرُورِيِّ أَنْ / مِنَ المُهِمِّ أَنْ + the verb in -a; the three triggers purpose / volition / necessity; both conditionals; a cited report).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live builder, mission and visual game used as published, with
 * waṣl alif shown without a kasra and لِكَيْ always written with its sukūn. Rule-4 examples shown without their English labels. Game cards 0, 2 and 4 not
 * used (three cards are enough). Sorter headings in transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P4')({
  n: 4, fileTitle: 'Water_in_the_Arab_World', chip: 'Policy',
  title: 'Water in the Arab World — Scarcity, Management and the Future', arabic: 'المِيَاهُ فِي العَالَمِ العَرَبِيِّ — النَّدْرَةُ وَالإِدَارَةُ وَالمُسْتَقْبَلُ',
  focus: 'Analyse water scarcity and propose policy with impersonal necessity — yanbaghī an, min al-ḍarūrī an, min al-muhimm an, each + a verb in -a — and sort every subjunctive by its trigger: purpose, volition or necessity.',
  icon: 'FaFaucetDrip', iconSet: 'fa6',
});

const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const sg = (s) => ({ tag: 'sg · pl', forms: [{ l: 'sg.', ar: s }] });
const hs = (she) => ({ tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: she }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ'));
const site = fix(D.site('P4-L04'));
const RH = [['yanbaghī an', 'yanbaghī an + verb in -a'], ['min al-ḍarūrī an', 'min al-ḍarūrī an + verb in -a'], ['min al-muhimm an', 'min al-muhimm an + verb in -a'], ['Three triggers', 'li-kay · yataṭallabu an · yanbaghī an']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1], examples: r.examples.map((e) => e.replace(/ \((purpose|volition|necessity)\)$/, '')) }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P4-L04', {
  support: `• Core: three sentences with yanbaghī an, min al-ḍarūrī an and min al-muhimm an (website Core). Develop: sort five subjunctives by trigger and add both conditionals. Stretch: a full 100–110-word water-policy analysis.
• Make it local first: how much water does your family use in a day? Then zoom out to the region. Faith link (optional): «وَجَعَلْنَا مِنَ المَاءِ كُلَّ شَيْءٍ حَيٍّ» (al-Anbiyāʾ 21:30) and «وَلَا تُسْرِفُوا» (al-Aʿrāf 7:31) — water is a trust, not something to waste.
• Nothing here is new grammar — an + a verb in -a has appeared after li-kay (P4-L01) and after volition verbs (P4-L03). Today adds the third trigger (necessity) and pulls the whole system together.
• Grammar links: li-kay (P4-L01) · passive and planning verbs (P4-L02) · volition verbs (P4-L03) · both conditionals (P3-L05) · reported speech (P3-L06).`,
  teach: 'Necessity expressions + an, the verb in -a, the three triggers, risk / counterfactual / citation, water-policy register.',
  wedo: 'Match water pictures, build a water-policy argument, sort purpose / volition / necessity.',
  next: { nextCode: 'P4-L05', nextTitle: 'Natural Disasters — Describing and Responding to Extreme Events', nextAr: 'الكَوَارِثُ الطَّبِيعِيَّةُ' },
  objectives: ['Describe water scarcity and management with policy vocabulary.', 'Use yanbaghī an, min al-ḍarūrī an and min al-muhimm an + a verb in -a.', 'Classify a subjunctive by its trigger: purpose, volition or necessity.', 'Write a water-policy analysis combining all P4 structures.'],
  rulesAr: 'الضَّرُورَةُ وَنِظَامُ النَّصْبِ الكَامِلُ',
  ruleEx: [['يَنْبَغِي أَنْ تُطَوِّرَ الدُّوَلُ تِقْنِيَّاتِ التَّحْلِيَةِ'], ['مِنَ الضَّرُورِيِّ أَنْ تَتَعَاوَنَ الدُّوَلُ المُجَاوِرَةُ'], ['مِنَ المُهِمِّ أَنْ يُعِيدَ المُزَارِعُونَ النَّظَرَ فِي الرِّيِّ'], ['لِكَيْ تُقَلِّلَ', 'يَتَطَلَّبُ أَنْ تَسْتَثْمِرَ', 'يَنْبَغِي أَنْ تُطَوِّرَ']],
  doNow: {
    questions: [
      q('What does نَدْرَةُ المِيَاهِ mean?', ['water scarcity', 'water pollution', 'rainwater'], 'Prepared at home (P4-L03).'),
      q('What does مِيَاهٌ جَوْفِيَّةٌ mean?', ['groundwater', 'sea water', 'drinking water'], 'Prepared at home (P4-L03).'),
      q('What does يَنْبَغِي أَنْ mean?', ['it is necessary that, should', 'he fears that', 'so that'], 'Prepared at home (P4-L03).'),
      q('Complete: يَخْشَى العُلَمَاءُ أَنْ ___ الحَرَارَةُ حَدًّا خَطِيرًا.', ['تَتَجَاوَزَ', 'تَتَجَاوَزُ', 'تَجَاوَزَتْ'], 'P4-L03: after an, the verb ends in -a.'),
      q('Which verb expresses hope?', ['يَرْجُو أَنْ', 'يَخْشَى أَنْ', 'يَتَطَلَّبُ أَنْ'], 'P4-L03: yarjū an = he hopes that.'),
    ],
    keyIdea: { text: 'Three triggers — purpose, volition, necessity — and after each one the verb ends in -a.', ar: 'لِكَيْ {e|تُقَلِّلَ} · يَتَطَلَّبُ أَنْ {w|تَسْتَثْمِرَ} · يَنْبَغِي أَنْ {k|تُطَوِّرَ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P4-L03. Questions 4–5 retrieve the volition verbs (P4-L03) — today they become one of the three triggers.',
  },
  routes: {
    core: ['I can name 8 water words.', 'I can use yanbaghī an + a verb in -a.'],
    develop: ['I can use min al-ḍarūrī an and min al-muhimm an.', 'I can sort a subjunctive by its trigger.'],
    stretch: ['I can add a real risk, a counterfactual and a cited report.', 'I can write a water-policy analysis.'],
  },
  bridge: [
    { ar: 'ضَرُورِيٌّ', urdu: 'ضروری', tr: 'zarūrī', en: 'necessary, essential' },
    { ar: 'مُهِمٌّ · أَهَمُّ', urdu: 'اہم', tr: 'aham', en: 'important (Urdu takes the Arabic comparative)' },
    { ar: 'حِصَّةٌ', urdu: 'حصہ', tr: 'hissa', en: 'a share, a quota' },
    { ar: 'زِرَاعَةٌ', urdu: 'زراعت', tr: 'zirāʿat', en: 'agriculture' },
    { ar: 'إِدَارَةٌ', urdu: 'ادارہ', tr: 'idāra', en: 'Arabic: management · Urdu: an institution' },
  ],
  bridgeNotes: 'URDU BRIDGE: ضروری, حصہ and زراعت are shared. Urdu اہم is really the Arabic comparative أَهَمُّ (more important); in Arabic “important” is مُهِمٌّ. Careful: Urdu ادارہ is an institution; Arabic إِدَارَةُ المِيَاهِ is water MANAGEMENT.',
  core: ['نَدْرَةُ المِيَاهِ', 'إِدَارَةُ المِيَاهِ', 'مِيَاهٌ جَوْفِيَّةٌ', 'تَحْلِيَةُ المِيَاهِ', 'إِعَادَةُ اسْتِخْدَامِ المِيَاهِ', 'سَدٌّ', 'أَمْنٌ مَائِيٌّ', 'يَنْبَغِي أَنْ', 'مِنَ الضَّرُورِيِّ أَنْ', 'مِنَ المُهِمِّ أَنْ', 'تَعَاوُنٌ إِقْلِيمِيٌّ', 'الرِّيُّ الحَدِيثُ'],
  forms: {
    'حِصَّةُ المِيَاهِ': sp('حِصَصُ المِيَاهِ'), 'سَدٌّ': sp('سُدُودٌ'), 'خَزَّانُ مِيَاهٍ': sp('خَزَّانَاتُ مِيَاهٍ'), 'مِيَاهٌ جَوْفِيَّةٌ': sg('مَاءٌ جَوْفِيٌّ'),
    'يُعَالِجُ': hs('تُعَالِجُ'), 'يَسْتَخْرِجُ': hs('تَسْتَخْرِجُ'), 'يُعِيدُ تَدْوِيرَ': hs('تُعِيدُ تَدْوِيرَ'),
  },
  vocabNotes: {
    0: 'Water scarcity and management: the vocabulary of a water-policy report. نَدْرَةٌ is also pronounced نُدْرَةٌ (both are correct — the website game uses نُدْرَة). مِيَاهٌ is the plural of مَاءٌ; Arabic reports almost always use the plural.',
    1: 'Necessity expressions: يَنْبَغِي أَنْ / مِنَ الضَّرُورِيِّ أَنْ / مِنَ المُهِمِّ أَنْ never change for the person — the verb after أَنْ carries the subject and ends in -a. يُعَالِجُ / يَسْتَخْرِجُ / يُعِيدُ تَدْوِيرَ take a direct object.',
    2: 'The three triggers: today’s map of the whole subjunctive system — purpose (li-kay), volition (yataṭallabu an), necessity (yanbaghī an). The last two words are the farming solution: water-saving agriculture and modern irrigation.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · impersonal necessity (website rules 1–3 + teaching point 1) · Core', title: 'Should, essential, important — + an', ar: 'الضَّرُورَةُ غَيْرُ الشَّخْصِيَّةِ',
      cols: [{ label: 'Expression', w: 2.7, size: 20 }, { label: 'Meaning', w: 1.9 }, { label: 'Verb', w: 1.7 }, { label: 'Example (website)', w: 6.03, size: 17 }],
      rows: [
        { core: true, cells: ['{k|يَنْبَغِي أَنْ}', 'should', 'verb in -a', 'يَنْبَغِي أَنْ {k|تُطَوِّرَ} الدُّوَلُ تِقْنِيَّاتِ التَّحْلِيَةِ.'] },
        { core: true, cells: ['{k|مِنَ الضَّرُورِيِّ أَنْ}', 'it is essential', 'verb in -a', 'مِنَ الضَّرُورِيِّ أَنْ {k|تَتَعَاوَنَ} الدُّوَلُ المُجَاوِرَةُ.'] },
        { core: true, cells: ['{k|مِنَ المُهِمِّ أَنْ}', 'it is important', 'verb in -a', 'مِنَ المُهِمِّ أَنْ {k|يُعِيدَ} المُزَارِعُونَ النَّظَرَ فِي الرِّيِّ.'] },
        { cells: ['two verbs', 'should … and', 'an … wa-an', 'يَنْبَغِي أَنْ {k|تُطَوِّرَ} الدُّوَلُ التَّحْلِيَةَ وَأَنْ {k|تُعِيدَ} اسْتِخْدَامَ المِيَاهِ.'] },
        { cells: ['{p|يَجِبُ}', 'must', 'maṣdar', 'يَجِبُ {p|تَرْشِيدُ} اسْتِهْلَاكِ المِيَاهِ.'] },
      ],
      ltr: true,
      foot: 'Website teaching point: these expressions signal that the action is required but not yet certain — so the verb takes the fatḥa.',
      notes: `GRAMMAR PART 1 — website rules 1–3, the website table and teaching point 1 (“Impersonal necessity always takes the subjunctive”). Row 4 is from the website speaking model; row 5 is from the website visual game.
“Impersonal” = the expression itself never changes: يَنْبَغِي أَنْ أَدْرُسَ · يَنْبَغِي أَنْ تَدْرُسِي · يَنْبَغِي أَنْ يَدْرُسُوا. The person goes on the verb after أَنْ.
Row 3: the verb is singular before a plural subject (يُعِيدَ المُزَارِعُونَ) — verb-first agreement. Row 5: يَجِبُ can also take a maṣdar instead of أَنْ + verb (يَجِبُ تَرْشِيدُ = rationing is a must). Both are accurate.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · three triggers, one mood (website rule 4, teaching point 2 and sorter) · Develop', title: 'Purpose, volition, necessity', ar: 'ثَلَاثَةُ مُحَفِّزَاتٍ لِلنَّصْبِ',
      cols: [{ label: 'Trigger', w: 2.4, size: 20 }, { label: 'Type', w: 1.8 }, { label: 'Question it answers', w: 2.3 }, { label: 'Example (website texts)', w: 5.83, size: 17 }],
      rows: [
        { core: true, cells: ['{e|لِكَيْ}', 'purpose', 'why?', 'تَعْتَمِدُ الزِّرَاعَةُ الرِّيَّ الحَدِيثَ لِكَيْ {e|تُقَلِّلَ} الهَدْرَ.'] },
        { core: true, cells: ['{w|يَتَطَلَّبُ أَنْ}', 'volition', 'what is wanted?', 'يَتَطَلَّبُ الوَضْعُ أَنْ {w|تَسْتَثْمِرَ} الدُّوَلُ.'] },
        { cells: ['{w|يَخْشَى أَنْ}', 'volition', 'what is feared?', 'يَخْشَى الخُبَرَاءُ أَنْ {w|تَنْفَدَ} المِيَاهُ الجَوْفِيَّةُ.'] },
        { cells: ['{w|يَرْجُو أَنْ}', 'volition', 'what is hoped?', 'يَرْجُو الجَمِيعُ أَنْ {w|يَتَحَقَّقَ} الأَمْنُ المَائِيُّ.'] },
        { core: true, cells: ['{k|يَنْبَغِي أَنْ}', 'necessity', 'what must happen?', 'يَنْبَغِي أَنْ {k|تُطَوِّرَ} الدُّوَلُ سِيَاسَاتِ المِيَاهِ.'] },
      ],
      ltr: true,
      foot: 'Website mistakes 1–2: an tuṭawwiru ✗ → an tuṭawwira ✓ · an tataʿāwanu ✗ → an tataʿāwana ✓. Three triggers — one ending: -a.',
      notes: `GRAMMAR PART 2 — website rule 4 (“Three triggers”), teaching point 2 (“Three triggers, one mood”) and examples from the website sorter, reading and listening.
Ask the question in column 3 to find the trigger: WHY? → purpose · WANTED / FEARED / HOPED? → volition · MUST? → necessity.
Row 3: تَنْفَدَ (to run out) — sound verb, fatḥa. Do not confuse it with سَيَسْتَنْفِدُ (will exhaust) in the listening. Row 4: يَتَحَقَّقَ — the hope is that water security is achieved.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · risk, regret, evidence (website quiz, reading, listening and mistake 3) · Develop / Stretch', title: 'Weigh the evidence', ar: 'الخَطَرُ · الافْتِرَاضُ · الدَّلِيلُ',
      cards: [
        { chip: 'TYPE 1 · RISK · CORE', color: '1D5FBF', head: 'إِذَا … سَـ', big: 'إِذَا اسْتَمَرَّتْ مُعَدَّلَاتُ الاسْتِهْلَاكِ، سَيَسْتَنْفِدُ الخَلِيجُ مَخْزُونَهُ.', en: 'If consumption continues, the Gulf will exhaust its reserves.', clue: 'Still possible.' },
        { chip: 'TYPE 2 · REGRET · DEVELOP', color: 'C0386B', head: 'لَوْ … لَمَا', big: 'لَوْ أُدِيرَتِ المَوَارِدُ بِحِكْمَةٍ، لَمَا وَصَلَتِ المِنْطَقَةُ إِلَى هٰذِهِ النَّدْرَةِ.', en: 'Had resources been managed wisely, the region would not have reached this scarcity.', clue: 'Negative: la-mā.' },
        { chip: 'EVIDENCE · STRETCH', color: '6B4C9A', head: 'أَكَّدَ … أَنَّ', big: 'أَكَّدَ خُبَرَاءُ الأُمَمِ المُتَّحِدَةِ أَنَّ التَّعَاوُنَ الإِقْلِيمِيَّ هُوَ الحَلُّ.', en: 'UN experts stressed that regional cooperation is the solution.', clue: 'anna + noun.' },
      ],
      error: { text: 'Website mistake 3: a Type 2 result takes la-, not sa-.', pairs: [['لَوِ اسْتَثْمَرَتِ الدُّوَلُ مُبَكِّرًا، لَكَانَتِ الأَزْمَةُ أَقَلَّ', 'لَوِ اسْتَثْمَرَتِ الدُّوَلُ مُبَكِّرًا، سَتَكُونُ الأَزْمَةُ أَقَلَّ']] },
      notes: `GRAMMAR PART 3 — website quiz 7, mission rounds 11–12, the reading (card 2), the listening (card 3) and mistake 3.
Card 2 is new: a NEGATIVE Type 2 result uses لَمَا + past (لَمَا وَصَلَتْ = would not have reached). Positive: لَـ + past (لَكَانَتْ). أُدِيرَتْ is a passive (P4-L02): “had been managed”.
Do not confuse أَنْ and أَنَّ: يَنْبَغِي أَنْ + a VERB in -a · أَكَّدَ أَنَّ + a NOUN in -a (أَنَّ التَّعَاوُنَ).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the language of a water report (website listening, reading and writing model) · Stretch', title: 'Sound like a policy report', ar: 'لُغَةُ تَقَارِيرِ المِيَاهِ',
      cols: [{ label: 'Tool', w: 2.4 }, { label: 'Example (website texts)', w: 7.4, size: 18 }, { label: 'Structure', w: 2.53 }],
      rows: [
        { core: true, cells: ['one of the worst', 'تُعَانِي مِنْ {e|أَشَدِّ} أَزَمَاتِ المِيَاهِ فِي العَالَمِ', 'superlative + plural'] },
        { cells: ['a statistic', 'تَضُمُّ {w|أَقَلَّ مِنْ وَاحِدٍ بِالمِئَةِ} مِنْ مَوَارِدِ المِيَاهِ العَذْبَةِ', 'less than … %'] },
        { cells: ['since it lacks', '{p|إِذْ تَفْتَقِرُ إِلَى} مَوَارِدَ كَافِيَةٍ لِاسْتِدَامَةِ نُمُوِّهَا', 'reason clause'] },
        { cells: ['the gravest', 'تُعَدُّ المِيَاهُ {e|أَخْطَرَ تَحَدٍّ اسْتِرَاتِيجِيٍّ} يُوَاجِهُ العَالَمَ العَرَبِيَّ', 'superlative + indefinite'] },
        { core: true, cells: ['the strong close', 'مِنَ المُهِمِّ أَنْ يُدْرِكَ الجَمِيعُ أَنَّ المَاءَ {k|حَقٌّ لَا امْتِيَازٌ}', 'X, not Y'] },
      ],
      ltr: true,
      foot: 'A water report moves: how serious → the numbers → the risk → what could have been → what must happen now.',
      notes: `GRAMMAR PART 4 — register tools from the website listening, reading and writing model.
Row 1: أَشَدُّ + definite plural = “one of the most severe” · Row 4: أَخْطَرُ + indefinite singular = “THE gravest”. Row 3: إِذْ = since, as (gives a reason). Row 5: حَقٌّ لَا امْتِيَازٌ = a right, not a privilege — لَا here contrasts two nouns.
Accuracy: the World Bank describes the Middle East and North Africa as home to about 6% of the world’s people but only around 1–2% of its renewable fresh water — sources vary slightly, so “less than one percent” is the website’s figure.`,
    },
  ],
  quick: [0, 1, 2, 6],
  rest: [3, 4, 5, 7],
  ido: {
    title: 'Watch me write a water-policy analysis',
    steps: [
      { head: 'How serious', ar: '{p|يُشَارُ إِلَى أَنَّ} … أَشَدِّ أَزَمَاتِ …', think: 'Evidence.' },
      { head: 'Risk + regret', ar: '{w|إِذَا} … سَيَسْتَنْفِدُ · {m|لَوِ} … لَكَانَتِ', think: 'Both types.' },
      { head: 'Necessity', ar: 'يَنْبَغِي أَنْ {k|تُطَوِّرَ} · مِنَ المُهِمِّ أَنْ {k|تَعْتَمِدَ}', think: '-a, -a.' },
      { head: 'Purpose', ar: 'لِكَيْ {e|تُقَلِّلَ} الهَدْرَ', think: 'Why?' },
    ],
    legend: ['p', 'w', 'm', 'k', 'e'], legendLabels: { p: 'REPORT', w: 'TYPE 1', m: 'TYPE 2', k: 'NECESSITY', e: 'PURPOSE' },
    model: '{p|يُشَارُ إِلَى أَنَّ} المِنْطَقَةَ العَرَبِيَّةَ تُعَانِي مِنْ أَشَدِّ أَزَمَاتِ المِيَاهِ فِي العَالَمِ. {w|إِذَا} اسْتَمَرَّتْ مُعَدَّلَاتُ الاسْتِهْلَاكِ، {w|سَيَسْتَنْفِدُ} الخَلِيجُ مَخْزُونَهُ الجَوْفِيَّ. {m|وَلَوِ} اسْتَثْمَرَتِ الدُّوَلُ فِي التَّحْلِيَةِ مُبَكِّرًا، {m|لَكَانَتِ} الأَزْمَةُ أَقَلَّ حِدَّةً. لِذٰلِكَ يَنْبَغِي أَنْ {k|تُطَوِّرَ} الدُّوَلُ سِيَاسَاتِ مِيَاهٍ مُتَكَامِلَةً، وَمِنَ المُهِمِّ أَنْ {k|تَعْتَمِدَ} الزِّرَاعَةُ الرِّيَّ الحَدِيثَ لِكَيْ {e|تُقَلِّلَ} الهَدْرَ.',
    modelEn: 'It is reported that the Arab region suffers from one of the most severe water crises in the world. If consumption rates continue, the Gulf will exhaust its groundwater reserves. Had states invested in desalination early, the crisis would be less severe. So states should develop integrated water policies, and it is important that agriculture adopts modern irrigation so that it reduces waste.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “How serious? yushāru ilā ANNA + a noun. The real risk: idhā … SA-yastanfidu. The regret: law … LA-kānat. What must happen? yanbaghī AN tuṭawwirA · min al-muhimm AN taʿtamidA. Why? li-kay tuqallilA. Three triggers, one ending: -a.”',
  },
  patternEn: ['Arab states should develop more efficient desalination technologies', 'it is essential that states cooperate in managing shared resources', 'agriculture adopts modern irrigation so that it reduces waste'],
  gameKey: 'P4-L04',
  game: {
    title: 'Saving water: match the picture',
    pick: [1, 3, 5],
    en: ['Water consumption must be rationed.', 'Desalination turns seawater into fresh water.', 'Fixing leaks reduces water waste.'],
    icons: [[['fa6', 'FaShower', '1D5FBF'], ['fa6', 'FaClock', 'C77700']], [['fa6', 'FaWater', '1D5FBF'], ['fa6', 'FaGlassWater', '1E6B52']], [['fa6', 'FaWrench', '6B4C9A'], ['fa6', 'FaFaucetDrip', '1D5FBF']]],
    labels: ['shorter showers', 'desalination', 'fixing leaks'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Then turn each card into a necessity: يَنْبَغِي أَنْ نُرَشِّدَ اسْتِهْلَاكَ المِيَاهِ · مِنَ الضَّرُورِيِّ أَنْ تُطَوِّرَ الدُّوَلُ التَّحْلِيَةَ · مِنَ المُهِمِّ أَنْ نُصْلِحَ التَّسَرُّبَاتِ لِكَيْ نُقَلِّلَ الهَدْرَ.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build a water-policy argument (website live builder)', title: 'Necessity + purpose + reflection', ar: 'ابْنِ حُجَّةً عَنِ المِيَاهِ',
      cols: [{ label: '1 · Necessity (yanbaghī an …)', w: 4.3, size: 16 }, { label: '2 · Purpose (li-kay)', w: 3.8, size: 16 }, { label: '3 · Reflection', w: 4.23, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Then circle every verb after an and li-kay: does it end in -a?',
      notes: `WE DO (3 min) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Core: read row 1 across. Develop: label column 3 — Type 2 (row 1), Type 1 (row 2), cited expert (row 3). Stretch: say your own necessity + purpose about water at school.
Note column 3 row 1: اسْتُثْمِرَ is an impersonal passive (“had it been invested”).`,
    },
  ],
  sorterTitle: 'Purpose, volition — or necessity?',
  sorterCats: ['purpose (li-kay)', 'volition (yataṭallabu an)', 'necessity (yanbaghī an)'],
  sorterNotes: 'Ask the question for each card: WHY? (purpose) · WANTED, FEARED, HOPED? (volition) · MUST? (necessity). Then read each card aloud and stress the final -a.',
  patch: { vocab: site.vocab.map((g) => ({ ...g, items: g.items.map((it) => ({ ...it, en: it.en.replace(': لِكَيْ', ': li-kay').replace(': يَتَطَلَّبُ أَنْ', ': yataṭallabu an').replace(': يَنْبَغِي أَنْ', ': yanbaghī an') })) })), grammar: { ...site.grammar, rules }, listening: { ...site.listening, questions: site.listening.questions.map((x, i) => (i === 1 ? { ...x, options: ['If consumption continues, Gulf states will exhaust their groundwater', ...x.options.slice(1)] } : x)) }, reading: { ...site.reading, questions: site.reading.questions.map((x, i) => (i === 3 ? { ...x, options: [x.options[0].replace('Had resources been managed wisely for decades, the region would not have reached this scarcity', 'Had resources been managed wisely, the region would not be this scarce'), ...x.options.slice(1)] } : x)) }, writing: { ...site.writing, prompt: 'Write one hundred to one hundred and ten words analysing water in the Arab world. Use yanbaghī an, min al-ḍarūrī an and min al-muhimm an, both conditional types, a li-kay purpose clause and a reported-speech clause.', checklist: site.writing.checklist.map((c) => c.replace('A لِكَيْ purpose', 'A li-kay purpose')) }, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('يَنْبَغِي أَنْ + subjunctive تُطَوِّرَ.', 'yanbaghī an + a verb in -a (tuṭawwira).').replace('مِنَ الضَّرُورِيِّ أَنْ + subjunctive.', 'min al-ḍarūrī an + a verb in -a (tataʿāwana).').replace('لِكَيْ purpose clause.', 'A li-kay purpose clause (tuqallila).') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; لِكَيْ always written with its sukūn; rule headings and formulas in transliteration; rule-4 examples shown without their English labels; Core and Stretch writing tasks in transliteration; listening question 2 and reading question 4 answers shortened to fit; sorter headings and trigger-word glosses in transliteration; game cards 0, 2 and 4 not used; the necessity, trigger and register tables are teacher-built from the website texts. All other website items are used as published.',
  hints: ['an tuṭawwiru?', 'an tataʿāwanu?', 'law … sa-?'],
  coreTip: 'Listen twice. Core: questions 1, 4 and 5.\nListen for: yanbaghī an · min al-ḍarūrī an · li-kay.',
  listenRoutes: 'Core: questions 1, 4 and 5. Develop / Stretch: all 5 — and write down every verb after an and li-kay with its final -a.',
  gloss: [
    ['يُشَارُ إِلَى أَنَّ المِنْطَقَةَ العَرَبِيَّةَ تُعَانِي مِنْ أَشَدِّ أَزَمَاتِ المِيَاهِ فِي العَالَمِ. فَهِيَ تَضُمُّ أَقَلَّ مِنْ وَاحِدٍ بِالمِئَةِ مِنْ مَوَارِدِ المِيَاهِ العَذْبَةِ.', 'It is reported that the Arab region suffers from one of the most severe water crises in the world. It holds less than one percent of fresh water resources.'],
    ['إِذَا اسْتَمَرَّتْ مُعَدَّلَاتُ الاسْتِهْلَاكِ الحَالِيَّةُ، سَيَسْتَنْفِدُ كَثِيرٌ مِنْ دُوَلِ الخَلِيجِ مَخْزُونَهُ الجَوْفِيَّ خِلَالَ عُقُودٍ.', 'If current consumption rates continue, many Gulf states will exhaust their groundwater reserves within decades.'],
    ['وَلَوِ اسْتَثْمَرَتِ الدُّوَلُ فِي التَّحْلِيَةِ مُبَكِّرًا، لَكَانَتِ الأَزْمَةُ أَقَلَّ حِدَّةً. لِذٰلِكَ يَنْبَغِي أَنْ تُطَوِّرَ الدُّوَلُ سِيَاسَاتِ مِيَاهٍ مُتَكَامِلَةً.', 'Had states invested in desalination early, the crisis would be less severe. So states should develop integrated water policies.'],
    ['وَمِنَ الضَّرُورِيِّ أَنْ تَتَعَاوَنَ الدُّوَلُ المُجَاوِرَةُ فِي إِدَارَةِ المَوَارِدِ المُشْتَرَكَةِ. وَمِنَ المُهِمِّ أَنْ تَعْتَمِدَ الزِّرَاعَةُ الرِّيَّ الحَدِيثَ لِكَيْ تُقَلِّلَ الهَدْرَ.', 'It is essential that neighbouring states cooperate in managing shared resources. And it is important that agriculture adopts modern irrigation so that it reduces waste.'],
    ['وَأَكَّدَ خُبَرَاءُ الأُمَمِ المُتَّحِدَةِ أَنَّ التَّعَاوُنَ الإِقْلِيمِيَّ هُوَ الحَلُّ.', 'UN experts stressed that regional cooperation is the solution.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَاذَا يَنْبَغِي أَنْ تَفْعَلَ الدُّوَلُ؟ اسْتَعْمِلْ «يَنْبَغِي أَنْ».' },
      { route: 'develop', ar: 'مَا الضَّرُورِيُّ فِي إِدَارَةِ المِيَاهِ؟ اسْتَعْمِلْ «مِنَ الضَّرُورِيِّ أَنْ».' },
      { route: 'stretch', ar: 'مَا الهَدَفُ مِنَ الرِّيِّ الحَدِيثِ؟ اسْتَعْمِلْ «لِكَيْ» وَ«لَوْ».' },
    ],
    stems: [
      { route: 'core', ar: 'يَنْبَغِي أَنْ تُطَوِّرَ الدُّوَلُ ______ .' },
      { route: 'develop', ar: 'مِنَ الضَّرُورِيِّ أَنْ تَتَعَاوَنَ ______ فِي ______ .' },
      { route: 'stretch', ar: 'تَعْتَمِدُ الزِّرَاعَةُ الرِّيَّ الحَدِيثَ لِكَيْ ______ .' },
    ],
    modelEn: ['What should states do?', 'States should develop desalination technologies and reuse water.', 'And what is the aim of modern irrigation?', 'Agriculture adopts modern irrigation so that it reduces waste — and had we done that before, we would have saved a lot.'],
    notes: 'Website prompts and model. Pair task: “water pledge” — A names a problem, B answers with a necessity, A adds a purpose with li-kay. Partner checks every -a after an and li-kay. To a girl: اسْتَعْمِلِي.',
  },
  diff: { core: 'Write three sentences with yanbaghī an, min al-ḍarūrī an and min al-muhimm an.' },
  write: {
    core: { amount: '3 sentences', how: 'Website Core: one sentence each with yanbaghī an, min al-ḍarūrī an and min al-muhimm an.' },
    develop: { amount: '60–80 words', how: 'Website Develop: classify your subjunctives by trigger, and add a Type 1 risk and a Type 2 counterfactual.' },
    stretch: { amount: '100–110 words', how: 'Website task: a water analysis with the three necessity expressions, both conditionals, a li-kay clause and a cited report.' },
  },
  frames: {
    core: [
      { en: 'States should develop …', ar: 'يَنْبَغِي أَنْ تُطَوِّرَ الدُّوَلُ ______ .' },
      { en: 'It is essential that … cooperate in …', ar: 'مِنَ الضَّرُورِيِّ أَنْ تَتَعَاوَنَ ______ فِي ______ .' },
      { en: 'It is important that farmers …', ar: 'مِنَ المُهِمِّ أَنْ يُعِيدَ المُزَارِعُونَ ______ .' },
      { en: 'The Arab region suffers from …', ar: 'تُعَانِي المِنْطَقَةُ العَرَبِيَّةُ مِنْ ______ .' },
    ],
    develop: [
      { en: 'If current consumption continues, …', ar: 'إِذَا اسْتَمَرَّتْ مُعَدَّلَاتُ الاسْتِهْلَاكِ، سَيَسْتَنْفِدُ ______ .' },
      { en: 'Had states invested early, …', ar: 'لَوِ اسْتَثْمَرَتِ الدُّوَلُ مُبَكِّرًا، لَكَانَتِ ______ .' },
      { en: 'UN experts stressed that …', ar: 'أَكَّدَ خُبَرَاءُ الأُمَمِ المُتَّحِدَةِ أَنَّ ______ .' },
      { en: 'Agriculture should adopt … so that it reduces …', ar: 'يَنْبَغِي أَنْ تَعْتَمِدَ الزِّرَاعَةُ ______ لِكَيْ تُقَلِّلَ ______ .' },
    ],
    bank: ['تِقْنِيَّاتِ التَّحْلِيَةِ', 'سِيَاسَاتِ مِيَاهٍ مُتَكَامِلَةً', 'الدُّوَلُ المُجَاوِرَةُ', 'إِدَارَةِ المَوَارِدِ المُشْتَرَكَةِ', 'النَّظَرَ فِي الرِّيِّ', 'أَشَدِّ أَزَمَاتِ المِيَاهِ', 'الخَلِيجُ مَخْزُونَهُ الجَوْفِيَّ', 'الأَزْمَةُ أَقَلَّ حِدَّةً', 'التَّعَاوُنَ الإِقْلِيمِيَّ هُوَ الحَلُّ', 'الرِّيَّ الحَدِيثَ', 'الهَدْرَ', 'إِعَادَةُ اسْتِخْدَامِ المِيَاهِ'],
  },
  stretch: [
    ['مِنْ أَشَدِّ أَزَمَاتِ المِيَاهِ فِي العَالَمِ', 'one of the most severe water crises in the world'],
    ['إِذْ تَفْتَقِرُ إِلَى مَوَارِدَ كَافِيَةٍ', 'since it lacks sufficient resources'],
    ['لِاسْتِدَامَةِ نُمُوِّهَا', 'to sustain its growth'],
    ['لَمَا وَصَلَتِ المِنْطَقَةُ إِلَى هٰذِهِ النَّدْرَةِ', 'the region would not have reached this scarcity'],
    ['المَاءُ حَقٌّ لَا امْتِيَازٌ', 'water is a right, not a privilege'],
  ],
  modelEn: 'It is reported that the Arab region suffers from one of the most severe water crises in the world, since it lacks sufficient resources to sustain its growth. If current consumption rates continue, the Gulf will exhaust its groundwater reserves within decades. Had states invested in desalination since the seventies, the crisis today would be less severe. So states should develop integrated water policies, and it is essential that neighbouring states cooperate in managing shared resources. It is important that agriculture adopts modern irrigation so that it reduces waste. UN experts have stressed that regional cooperation is the solution. Water is a right for everyone.',
  find: ['three necessity expressions + -a', 'a Type 1 (idhā … sa-) and a Type 2 (law … la-)', 'li-kay tuqallila (purpose)', 'akkada … anna (a cited report)'],
  modelNotes: 'Website writing model. Evidence: يُشَارُ إِلَى أَنَّ · إِذْ تَفْتَقِرُ إِلَى · إِذَا اسْتَمَرَّتْ … سَيَسْتَنْفِدُ · لَوِ اسْتَثْمَرَتِ … لَكَانَتِ · يَنْبَغِي أَنْ تُطَوِّرَ · مِنَ الضَّرُورِيِّ أَنْ تَتَعَاوَنَ · مِنَ المُهِمِّ أَنْ تَعْتَمِدَ · لِكَيْ تُقَلِّلَ · أَكَّدَ … أَنَّ.',
  selfCheck: [
    { route: 'core', text: 'After every an and li-kay, my verb ends in -a.' },
    { route: 'core', text: 'I used yanbaghī an, min al-ḍarūrī an and min al-muhimm an.' },
    { route: 'develop', text: 'I can name the trigger of each subjunctive: purpose, volition or necessity.' },
    { route: 'develop', text: 'My risk uses idhā … sa-; my regret uses law … la- (or la-mā).' },
    { route: 'stretch', text: 'I cited a report (akkada anna) and ended with a strong close.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['أَشَدِّ أَزَمَاتِ', 'the most severe crises'], ['المِيَاهِ العَذْبَةِ', 'fresh water'], ['مُعَدَّلَاتُ الاسْتِهْلَاكِ', 'consumption rates'], ['سَيَسْتَنْفِدُ', 'will exhaust'], ['مَخْزُونَهُ الجَوْفِيَّ', 'its groundwater reserve'],
    ['تَفْتَقِرُ إِلَى', 'lacks'], ['تَنْفَدَ', '(to) run out'], ['الهَدْرَ', 'waste'], ['مُتَكَامِلَةً', 'integrated'], ['امْتِيَازٌ', 'a privilege'],
  ],
  prep: {
    words: [['زِلْزَالٌ', 'an earthquake', 'pl. زَلَازِلُ'], ['فَيَضَانٌ', 'a flood', 'pl. فَيَضَانَاتٌ'], ['إِجْلَاءٌ', 'an evacuation', '—'], ['إِغَاثَةٌ إِنْسَانِيَّةٌ', 'humanitarian relief', '—'], ['دُمِّرَتْ', 'were destroyed', 'passive of دَمَّرَ']],
    questionEn: 'Think of a natural disaster you have seen in the news. What happened, and who helped?',
    questionAr: 'ضَرَبَ زِلْزَالٌ ______ وَدُمِّرَتْ ______ .',
    homework: {
      core: 'Write three sentences with yanbaghī an, min al-ḍarūrī an and min al-muhimm an (verbs in -a!).',
      develop: 'Write five subjunctives about water and label each trigger: purpose, volition or necessity.',
      stretch: 'Website writing task: a 100–110-word water-policy analysis.',
    },
    wordsSource: 'The five words come from the website P4-L05 vocabulary (natural disasters).',
  },
  remember: 'Remember: yanbaghī an · min al-ḍarūrī an · min al-muhimm an + a verb in -A — three triggers (purpose, volition, necessity), one ending — warn with idhā … sa-, regret with law … la- (or la-mā), and cite with akkada anna.',
});

module.exports = { meta, slides };
