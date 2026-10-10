'use strict';
/* P4-L05 · Natural Disasters — Describing and Responding to Extreme Events — website: Pathways › Progression › P4 › P4-L05 (the reporting passives
 * دُمِّرَتْ / أُجْلِيَ / أُعْلِنَتْ with a nominative subject; the four-layer disaster account: past perfect → past + passive → reported response →
 * conditional analysis; the past perfect of a passive كَانَتْ قَدْ دُمِّرَتْ).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live builder, mission and visual game used as published, with
 * waṣl alif shown without a kasra and one case fix: خُطَّةَ طَوَارِئٍ → طَوَارِئَ (diptote). Game cards 1, 2 and 4 not used (card 2 has a waṣl kasra). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P4')({
  n: 5, fileTitle: 'Natural_Disasters', chip: 'Report',
  title: 'Natural Disasters — Describing and Responding to Extreme Events', arabic: 'الكَوَارِثُ الطَّبِيعِيَّةُ — وَصْفُ الأَحْدَاثِ المُتَطَرِّفَةِ وَالاسْتِجَابَةُ لَهَا',
  focus: 'Report a disaster like a journalist — reporting passives (dummirat, ujliya, uʿlinat) with a nominative subject, told in four layers: before (past perfect), the event, the official response and the analysis.',
  icon: 'FaHouseCrack', iconSet: 'fa6',
});

const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const sg = (s) => ({ tag: 'sg · pl', forms: [{ l: 'sg.', ar: s }] });
const hs = (she) => ({ tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: she }] });
const fm = (l, ar) => ({ tag: 'm · f', forms: [{ l, ar }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ').replace(/خُطَّةَ طَوَارِئٍ/g, 'خُطَّةَ طَوَارِئَ'));
const site = fix(D.site('P4-L05'));
const RH = [['Reporting passive', 'dummirat / ujliya / uʿlinat + nominative'], ['Layer 1 · before', 'kānat qad + past'], ['Past perfect of a passive', 'kānat qad + passive'], ['Layer 4 · analysis', 'law … la- · idhā … sa-']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P4-L05', {
  support: `• Core: five disaster sentences in the reporting passive (website Core). Develop: add a past-perfect “before” layer and an official’s statement. Stretch: a full 110–120-word four-layer report with both conditionals.
• Sensitivity: some students may have family affected by recent disasters (e.g. the 2023 Türkiye–Syria and Morocco earthquakes, the 2023 Derna floods in Libya, the 2022 Pakistan floods). Keep the focus on preparation, rescue and recovery; let anyone opt to write about an imagined event.
• Faith link (optional): «مَثَلُ المُؤْمِنِينَ فِي تَوَادِّهِمْ وَتَرَاحُمِهِمْ … مَثَلُ الجَسَدِ» (al-Bukhārī, Muslim) — when one part suffers, the whole body responds. Relief is a shared duty.
• Grammar links: the passive (P4-L02) · past perfect kāna qad (P3) · reported speech (P3-L06) · both conditionals (P3-L05).`,
  teach: 'Reporting passives with a nominative subject, the four layers, qāla inna / aʿlana anna, the news-report register.',
  wedo: 'Match disaster pictures, build a four-layer report, sort event / before / analysis.',
  next: { nextCode: 'P4-L06', nextTitle: 'Energy and Resources — Arab World Potential and Global Responsibility', nextAr: 'الطَّاقَةُ وَالمَوَارِدُ' },
  objectives: ['Name disaster events and relief vocabulary.', 'Use the reporting passives dummirat, ujliya, uʿlinat with a nominative subject.', 'Structure a disaster account in four time layers.', 'Form the past perfect of a passive (kānat qad dummirat).'],
  rulesAr: 'مَبْنِيُّ الكَوَارِثِ لِلْمَجْهُولِ فِي السَّرْدِ الرُّبَاعِيِّ',
  ruleEx: [['دُمِّرَتْ مِئَاتُ المَنَازِلِ', 'أُجْلِيَ آلَافُ السُّكَّانِ'], ['كَانَتِ السُّلْطَاتُ قَدْ حَذَّرَتِ السُّكَّانَ'], ['كَانَتِ البُنْيَةُ التَّحْتِيَّةُ قَدْ دُمِّرَتْ قَبْلَ وُصُولِ الإِغَاثَةِ'], ['لَوْ كَانَتِ البُنْيَةُ أَصْمَدَ، لَكَانَتِ الخَسَائِرُ أَقَلَّ', 'إِذَا اسْتَثْمَرْنَا فِي الإِنْذَارِ المُبَكِّرِ، سَتُنْقَذُ أَرْوَاحٌ']],
  doNow: {
    questions: [
      q('What does زِلْزَالٌ mean?', ['an earthquake', 'a volcano', 'a flood'], 'Prepared at home (P4-L04).'),
      q('What does إِغَاثَةٌ إِنْسَانِيَّةٌ mean?', ['humanitarian relief', 'human rights', 'an evacuation'], 'Prepared at home (P4-L04).'),
      q('What does دُمِّرَتْ mean?', ['were destroyed', 'destroyed (active)', 'will destroy'], 'Prepared at home (P4-L04).'),
      q('Complete: يَنْبَغِي أَنْ ___ الدُّوَلُ تِقْنِيَّاتِ التَّحْلِيَةِ.', ['تُطَوِّرَ', 'تُطَوِّرُ', 'طَوَّرَتْ'], 'P4-L04: after an, the verb ends in -a.'),
      q('Choose the accurate passive.', ['يُبْنَى سَدٌّ جَدِيدٌ.', 'يُبْنَى سَدًّا جَدِيدًا.', 'يُبْنَى سَدٍّ جَدِيدٍ.'], 'P4-L02: the passive subject is nominative — today’s key rule.'),
    ],
    keyIdea: { text: 'A news report hides the doer: the passive verb comes first and the thing affected stays nominative (-u).', ar: '{e|دُمِّرَتْ} مِئَاتُ المَنَازِلِ · {e|أُجْلِيَ} آلَافُ السُّكَّانِ · {e|أُعْلِنَتْ} حَالَةُ الطَّوَارِئِ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P4-L04. Question 4 retrieves the subjunctive after yanbaghī an (P4-L04); question 5 retrieves the passive with a nominative subject (P4-L02) — the heart of today’s lesson.',
  },
  routes: {
    core: ['I can name 8 disaster words.', 'I can report an event in the passive (dummirat …).'],
    develop: ['I can add a “before” layer with kānat qad.', 'I can report what an official said.'],
    stretch: ['I can use the past perfect of a passive.', 'I can write a four-layer report with both conditionals.'],
  },
  bridge: [
    { ar: 'زِلْزَالٌ', urdu: 'زلزلہ', tr: 'zalzala', en: 'an earthquake (Sūrat al-Zalzala)' },
    { ar: 'إِعْلَانٌ · أُعْلِنَتْ', urdu: 'اعلان', tr: 'ailān', en: 'an announcement · was declared' },
    { ar: 'خَسَارَةٌ · خَسَائِرُ', urdu: 'خسارہ', tr: 'khasāra', en: 'a loss · losses' },
    { ar: 'حَالَةٌ', urdu: 'حالت', tr: 'hālat', en: 'a state, a condition' },
    { ar: 'طُوفَانٌ', urdu: 'طوفان', tr: 'tūfān', en: 'Arabic: a great flood · Urdu: a storm' },
  ],
  bridgeNotes: 'URDU BRIDGE: زلزلہ, اعلان, خسارہ and حالت are shared (حَالَةُ الطَّوَارِئِ = state of emergency). Careful: Urdu طوفان is a storm; Arabic طُوفَانٌ is a great flood (the flood of Nūḥ). Today’s word for a flood is فَيَضَانٌ.',
  core: ['زِلْزَالٌ', 'فَيَضَانٌ', 'جَفَافٌ', 'إِعْصَارٌ', 'حَرِيقُ غَابَاتٍ', 'ضَحَايَا', 'إِجْلَاءٌ', 'إِغَاثَةٌ إِنْسَانِيَّةٌ', 'خَسَائِرُ مَادِّيَّةٌ', 'دُمِّرَتْ', 'أُجْلِيَ', 'أُعْلِنَتْ'],
  forms: {
    'زِلْزَالٌ': sp('زَلَازِلُ'), 'بُرْكَانٌ': sp('بَرَاكِينُ'), 'فَيَضَانٌ': sp('فَيَضَانَاتٌ'), 'إِعْصَارٌ': sp('أَعَاصِيرُ'), 'عَاصِفَةٌ رَمْلِيَّةٌ': sp('عَوَاصِفُ رَمْلِيَّةٌ'), 'حَرِيقُ غَابَاتٍ': sp('حَرَائِقُ غَابَاتٍ'),
    'ضَحَايَا': sg('ضَحِيَّةٌ'), 'خَسَائِرُ مَادِّيَّةٌ': sg('خَسَارَةٌ مَادِّيَّةٌ'),
    'مُتَضَرِّرُونَ': { tag: 'm · f · pl', forms: [{ l: 'f. pl.', ar: 'مُتَضَرِّرَاتٌ' }, { l: 'm. sg.', ar: 'مُتَضَرِّرٌ' }] },
    'يُجْلِي': hs('تُجْلِي'), 'يُغِيثُ': hs('تُغِيثُ'), 'يُعِيدُ البِنَاءَ': hs('تُعِيدُ البِنَاءَ'), 'يُعْلِنُ حَالَةَ الطَّوَارِئِ': hs('تُعْلِنُ حَالَةَ الطَّوَارِئِ'),
    'دُمِّرَتْ': fm('m.', 'دُمِّرَ'), 'أُجْلِيَ': fm('f.', 'أُجْلِيَتْ'), 'أُعْلِنَتْ': fm('m.', 'أُعْلِنَ'), 'تَضَرَّرَتْ': fm('m.', 'تَضَرَّرَ'), 'انْقَطَعَتْ': fm('m.', 'انْقَطَعَ'),
  },
  vocabNotes: {
    0: 'Disaster events. فَيَضَانٌ is the dictionary form; you will also hear and read فَيْضَانٌ (the website game uses it) — both are accepted. A tsunami is borrowed: مَوْجَةُ تْسُونَامِي.',
    1: 'Impact and response: ضَحَايَا (victims, sg. ضَحِيَّةٌ) and خَسَائِرُ (losses) are diptotes — no tanwīn. The verbs are active (يُجْلِي = he evacuates); in a report they usually become passive (أُجْلِيَ = were evacuated).',
    2: 'Reporting passives: ḍamma on the first letter, kasra before the last. The verb agrees with what follows: دُمِّرَتْ مِئَاتُ (feminine) · أُجْلِيَ آلَافُ (masculine, stays singular before a plural). تَضَرَّرَتْ and انْقَطَعَتْ are not passive — they are already intransitive (“got damaged”, “got cut off”).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the reporting passive (website rule 1, teaching point 1 and mistakes 1–2) · Core', title: 'Hide the doer — keep the -u', ar: 'المَبْنِيُّ لِلْمَجْهُولِ فِي الأَخْبَارِ',
      cols: [{ label: 'Active', w: 1.9, size: 20 }, { label: 'Passive', w: 2.0, size: 20 }, { label: 'Note', w: 2.0 }, { label: 'Example (website)', w: 6.43, size: 17 }],
      rows: [
        { core: true, cells: ['دَمَّرَ', '{e|دُمِّرَتْ}', 'Form II', '{e|دُمِّرَتْ} مِئَاتُ المَنَازِلِ.'] },
        { core: true, cells: ['أَجْلَى', '{e|أُجْلِيَ}', 'Form IV, weak', '{e|أُجْلِيَ} آلَافُ السُّكَّانِ.'] },
        { core: true, cells: ['أَعْلَنَ', '{e|أُعْلِنَتْ}', 'Form IV', '{e|أُعْلِنَتْ} حَالَةُ الطَّوَارِئِ.'] },
        { cells: ['طَبَّقَ', '{e|طُبِّقَتْ}', 'Form II', 'إِذَا {e|طُبِّقَتْ} هٰذِهِ المَعَايِيرُ مُسْتَقْبَلًا …'] },
        { cells: ['يُنْقِذُ', '{e|تُنْقَذُ}', 'present passive', 'سَ{e|تُنْقَذُ} أَرْوَاحٌ كَثِيرَةٌ مُسْتَقْبَلًا.'] },
        { cells: ['—', '{p|تَضَرَّرَتْ}', 'not passive', '{p|تَضَرَّرَتْ} قُرًى بِأَكْمَلِهَا.'] },
      ],
      ltr: true,
      foot: 'Website mistakes 1–2: dummirat miʾāta ✗ → dummirat miʾātu ✓ · ajlā ✗ → ujliya ✓ (ḍamma on the first letter).',
      notes: `GRAMMAR PART 1 — website rule 1, teaching point 1 (“News reporting uses the passive by default”), mistakes 1–2, with rows 4–6 from the website reading and listening.
Why passive? The doer is obvious (the earthquake) or unknown, and the news is what happened to people and homes.
The pattern: past passive = ḍamma on the first letter + kasra before the last (دُمِّرَ · أُعْلِنَ · أُجْلِيَ). Present passive = ḍamma on the prefix + fatḥa before the last (تُنْقَذُ · يُبْنَى).
Row 6: تَضَرَّرَ (Form V) already means “got damaged” — no passive needed. Same for انْقَطَعَ (Form VII): انْقَطَعَتِ الكَهْرَبَاءُ.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · the four layers (website rules 2–4, teaching point 2 and table) · Develop', title: 'Before → event → response → analysis', ar: 'السَّرْدُ الرُّبَاعِيُّ',
      cols: [{ label: 'Layer', w: 1.9, size: 16 }, { label: 'Tense', w: 1.9 }, { label: 'Signal', w: 2.1 }, { label: 'Example (website texts)', w: 6.43, size: 17 }],
      rows: [
        { core: true, cells: ['1 · before', 'past perfect', 'kānat … qad', '{p|كَانَتِ} السُّلْطَاتُ {p|قَدْ} أَعَدَّتْ خُطَّةً لِلطَّوَارِئِ.'] },
        { cells: ['1 · before', 'past perfect passive', 'kānat qad + passive', 'كَانَتِ البُنْيَةُ التَّحْتِيَّةُ {p|قَدْ دُمِّرَتْ} قَبْلَ وُصُولِ الإِغَاثَةِ.'] },
        { core: true, cells: ['2 · event', 'past + passive', 'ḍaraba … dummirat', 'ضَرَبَ الإِعْصَارُ المِنْطَقَةَ، وَ{e|دُمِّرَتْ} مِئَاتُ المَنَازِلِ.'] },
        { cells: ['3 · response', 'reported speech', 'aʿlana anna', '{w|أَعْلَنَ} الوَزِيرُ {w|أَنَّ} الحُكُومَةَ أَرْسَلَتْ فِرَقَ الإِغَاثَةِ.'] },
        { cells: ['4 · analysis', 'law / idhā', 'law … la- · idhā … sa-', '{m|لَوْ} كَانَتِ البُنْيَةُ أَصْمَدَ، {m|لَكَانَتِ} الخَسَائِرُ أَقَلَّ.'] },
      ],
      ltr: true,
      foot: 'Website common error: telling the whole account in the simple past, with no past-perfect “before” layer.',
      notes: `GRAMMAR PART 2 — website rules 2–4, the website table and teaching point 2 (“The four layers of a disaster account”).
Layer 1 sets the scene: what HAD been done before the disaster (كَانَتْ … قَدْ + past). Row 2 is the hardest form: كَانَتْ قَدْ + a PASSIVE = “had been destroyed”.
Another Layer-1 form from the website: كَانَ قَدْ تَمَّ تَحْذِيرُ السُّكَّانِ (“residents had been warned”) — تَمَّ + maṣdar is a common way to avoid a difficult passive.
Agreement in row 1: كَانَتِ السُّلْطَاتُ (feminine — non-human plural).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · the response and the analysis (website reading, listening, mission and mistake 3) · Develop / Stretch', title: 'Who said it — and what if?', ar: 'الاسْتِجَابَةُ وَالتَّحْلِيلُ',
      cards: [
        { chip: 'LAYER 3 · CORE', color: '1D5FBF', head: 'قَالَ … إِنَّ', big: 'قَالَ رَئِيسُ فَرِيقِ الإِنْقَاذِ إِنَّ الوَقْتَ عَامِلٌ حَاسِمٌ.', en: 'The head of the rescue team said that time is a decisive factor.', clue: 'qāla → inna.' },
        { chip: 'LAYER 3 · DEVELOP', color: '1E6B52', head: 'أَعْلَنَ … أَنَّ', big: 'أَعْلَنَ الوَزِيرُ أَنَّ الحُكُومَةَ أَرْسَلَتْ فِرَقَ الإِغَاثَةِ فَوْرًا.', en: 'The minister announced that the government sent relief teams at once.', clue: 'aʿlana → anna.' },
        { chip: 'LAYER 4 · STRETCH', color: 'C0386B', head: 'لَوْ … لَمَا', big: 'لَوْ كَانَتِ المَبَانِي قَدْ بُنِيَتْ وَفْقَ المَعَايِيرِ، لَمَا انْهَارَ هٰذَا العَدَدُ.', en: 'Had the buildings been built to standard, so many would not have collapsed.', clue: 'Negative: la-mā.' },
      ],
      error: { text: 'Website mistake 3: a Type 2 result takes la-, not sa-.', pairs: [['لَوْ كَانَتِ البُنْيَةُ أَصْمَدَ، لَكَانَتِ الخَسَائِرُ أَقَلَّ', 'لَوْ كَانَتِ البُنْيَةُ أَصْمَدَ، سَتَكُونُ الخَسَائِرُ أَقَلَّ']] },
      notes: `GRAMMAR PART 3 — website reading (cards 1 and 3), listening (card 2), mission round 6 and mistake 3.
قَالَ is followed by إِنَّ (with kasra); أَعْلَنَ / أَكَّدَ / أَشَارَ إِلَى are followed by أَنَّ (with fatḥa). Both put the next noun in -a: إِنَّ الوَقْتَ · أَنَّ الحُكُومَةَ.
Card 3 has a past perfect passive INSIDE a Type 2: لَوْ كَانَتِ المَبَانِي قَدْ بُنِيَتْ = had the buildings been built. Website: وَفْقَ مَعَايِيرَ مُقَاوِمَةٍ لِلزَّلَازِلِ (to earthquake-resistant standards).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the language of a news report (website listening, reading and writing model) · Stretch', title: 'Sound like a news report', ar: 'لُغَةُ الأَخْبَارِ',
      cols: [{ label: 'Tool', w: 2.4 }, { label: 'Example (website texts)', w: 7.4, size: 18 }, { label: 'Structure', w: 2.53 }],
      rows: [
        { core: true, cells: ['the time stamp', 'ضَرَبَ الإِعْصَارُ المِنْطَقَةَ السَّاحِلِيَّةَ {w|فَجْرَ الثُّلَاثَاءِ}', 'time adverb'] },
        { cells: ['more than', 'وَأُجْلِيَ {e|مَا يَزِيدُ عَلَى} ثَلَاثِينَ أَلْفَ شَخْصٍ', 'mā yazīdu ʿalā'] },
        { cells: ['however', '{p|غَيْرَ أَنَّ} الإِعْصَارَ ضَرَبَ المِنْطَقَةَ', 'ghayra anna + noun'] },
        { cells: ['entire', 'تَضَرَّرَتْ قُرًى {m|بِأَكْمَلِهَا}', 'emphasis'] },
        { core: true, cells: ['more resilient', 'لَوْ كَانَتِ البُنْيَةُ {k|أَكْثَرَ صُمُودًا} = {k|أَصْمَدَ}', 'two comparatives'] },
      ],
      ltr: true,
      foot: 'A news report moves: when and where → what happened (passive) → how many → who said what → what we learn.',
      notes: `GRAMMAR PART 4 — register tools from the website listening, reading and writing model.
Row 2: مَا يَزِيدُ عَلَى = more than (formal); the writing model uses the simpler أَكْثَرُ مِنْ. Row 3: غَيْرَ أَنَّ = however, but — it turns the story from preparation to disaster.
Row 5: two ways to say “more resilient”: أَصْمَدُ (afʿal) or أَكْثَرُ صُمُودًا (akthar + tamyīz).
Numbers: ثَلَاثِينَ أَلْفَ شَخْصٍ — 30 takes a singular accusative (أَلْفَ), 1000 takes a singular genitive (شَخْصٍ).`,
    },
  ],
  quick: [0, 1, 2, 4],
  rest: [3, 5, 6, 7],
  ido: {
    title: 'Watch me write a four-layer report',
    steps: [
      { head: 'Before', ar: '{p|كَانَتِ} السُّلْطَاتُ {p|قَدْ} أَعَدَّتْ …', think: 'Past perfect.' },
      { head: 'Event', ar: '{e|دُمِّرَتْ} مِئَاتُ · {e|أُجْلِيَ} …', think: 'Passive, -u.' },
      { head: 'Response', ar: '{w|أَعْلَنَ} الوَزِيرُ {w|أَنَّ} …', think: 'Who said it?' },
      { head: 'Analysis', ar: '{m|لَوْ} … {m|لَكَانَتِ} …', think: 'What if?' },
    ],
    legend: ['p', 'e', 'w', 'm'], legendLabels: { p: 'LAYER 1', e: 'LAYER 2', w: 'LAYER 3', m: 'LAYER 4' },
    model: '{p|كَانَتِ السُّلْطَاتُ قَدْ أَعَدَّتْ} خُطَّةً لِلطَّوَارِئِ قَبْلَ مَوْسِمِ العَوَاصِفِ. غَيْرَ أَنَّ الإِعْصَارَ ضَرَبَ المِنْطَقَةَ السَّاحِلِيَّةَ. {e|دُمِّرَتْ} مِئَاتُ المَنَازِلِ، {e|وَأُجْلِيَ} أَكْثَرُ مِنْ ثَلَاثِينَ أَلْفَ شَخْصٍ. {w|أَعْلَنَ الوَزِيرُ أَنَّ} الحُكُومَةَ أَرْسَلَتْ فِرَقَ الإِغَاثَةِ فَوْرًا. {m|لَوْ} كَانَتِ البُنْيَةُ التَّحْتِيَّةُ أَكْثَرَ صُمُودًا، {m|لَكَانَتِ} الخَسَائِرُ أَقَلَّ بِكَثِيرٍ.',
    modelEn: 'The authorities had prepared an emergency plan before the storm season. However, the hurricane struck the coastal region. Hundreds of homes were destroyed, and more than thirty thousand people were evacuated. The minister announced that the government sent relief teams at once. Had the infrastructure been more resilient, the losses would have been far fewer.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Layer 1: what HAD they done? kānat … QAD aʿaddat. Layer 2: what happened? Passive first — dummirat, ujliya — and the noun after stays -u: miʾātu, aktharu. Layer 3: who said it? aʿlana … ANNA. Layer 4: what if? law … LA-kānat.”',
  },
  patternEn: ['the authorities had warned residents before the hurricane struck', 'hundreds of homes were destroyed and thousands of residents were evacuated', 'had the infrastructure been more resilient, the losses would have been far fewer'],
  gameKey: 'P4-L05',
  game: {
    title: 'Disasters and responses: match the picture',
    pick: [0, 3, 5],
    en: ['A strong earthquake occurred.', 'A severe storm struck the region.', 'Residents must be evacuated to a safe place.'],
    icons: [[['fa6', 'FaHouseCrack', 'C0386B'], ['fa6', 'FaEarthAfrica', '1D5FBF']], [['fa6', 'FaTornado', '6B4C9A'], ['fa6', 'FaHouse', 'C77700']], [['fa6', 'FaPersonWalkingArrowRight', '1D5FBF'], ['fa6', 'FaShieldHalved', '1E6B52']]],
    labels: ['earthquake', 'storm', 'evacuation'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6; card 2 not used — waṣl kasra). Then report each one as news with a passive: دُمِّرَتْ مَنَازِلُ كَثِيرَةٌ · تَضَرَّرَتِ المِنْطَقَةُ · أُجْلِيَ السُّكَّانُ إِلَى مَكَانٍ آمِنٍ.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build a disaster report (website live builder)', title: 'Before + event + response / analysis', ar: 'ابْنِ تَقْرِيرًا',
      cols: [{ label: '1 · Before (kānat qad)', w: 4.0, size: 16 }, { label: '2 · Event (passive)', w: 4.1, size: 16 }, { label: '3 · Response / analysis', w: 4.23, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Then underline every passive verb and circle the -u on the noun after it.',
      notes: `WE DO (3 min) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Core: read row 1 across. Develop: label column 3 — reported speech (row 1), Type 2 (row 2), Type 1 (row 3). Stretch: add a fourth clause of your own with qāla … inna.
Note column 2 row 1: فَدُمِّرَتْ … وَانْقَطَعَتْ — a passive and an intransitive Form VII side by side.`,
    },
  ],
  sorterTitle: 'Event, before — or response / analysis?',
  sorterCats: ['passive event (Layer 2)', 'before (Layer 1)', 'reported / analysis (Layers 3–4)'],
  sorterNotes: 'Then put the cards in the order of a real report: one “before” card, one event card, one response or analysis card — and read the mini-report aloud.',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: { ...site.listening, questions: site.listening.questions.map((x, i) => (i === 4 ? { ...x, options: ['Had infrastructure been more resilient, losses would be far fewer', ...x.options.slice(1)] } : x)) }, reading: { ...site.reading, questions: site.reading.questions.map((x, i) => (i === 4 ? { ...x, options: ['Had buildings met quake-resistant standards, fewer would have collapsed', ...x.options.slice(1)] } : x)) }, writing: { ...site.writing, prompt: 'Write a disaster response report of one hundred and ten to one hundred and twenty words using the four layers. Use a past-perfect preparation, disaster passives (dummirat, ujliya, uʿlinat), reported speech from officials, and both conditional types.', checklist: ['A past-perfect preparation layer (kānat … qad …).', 'Disaster passives with nominative subjects.', 'A reported-speech response layer (aʿlana … anna / qāla … inna).', 'A Type 2 regret and a Type 1 future measure.'] }, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns, final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; one case fix (خُطَّةَ طَوَارِئٍ → طَوَارِئَ, a diptote); rule formulas in transliteration; sorter headings expanded with layer numbers; writing prompt and checklist in transliteration; listening and reading question 5 answers shortened to fit; game cards 1, 2 and 4 not used; the passive, four-layer and register tables are teacher-built from the website texts. All other website items are used as published.',
  hints: ['dummirat miʾāta?', 'ajlā ālāfu?', 'law … sa-?'],
  coreTip: 'Listen twice. Core: questions 2, 3 and 4.\nListen for: dummirat · ujliya · uʿlinat · aʿlana anna.',
  listenRoutes: 'Core: questions 2, 3 and 4. Develop / Stretch: all 5 — and label each sentence with its layer (1, 2, 3 or 4).',
  gloss: [
    ['كَانَتِ السُّلْطَاتُ قَدْ أَعَدَّتْ خُطَّةً لِلطَّوَارِئِ قَبْلَ مَوْسِمِ العَوَاصِفِ، وَكَانَ قَدْ تَمَّ تَحْذِيرُ السُّكَّانِ مِنِ احْتِمَالِ حُدُوثِ فَيَضَانَاتٍ.', 'The authorities had prepared an emergency plan before the storm season, and residents had been warned of possible floods.'],
    ['غَيْرَ أَنَّ الإِعْصَارَ ضَرَبَ المِنْطَقَةَ السَّاحِلِيَّةَ فَجْرَ الثُّلَاثَاءِ. دُمِّرَتْ مِئَاتُ المَنَازِلِ، وَانْقَطَعَتْ شَبَكَاتُ الكَهْرَبَاءِ وَالمِيَاهِ، وَأُجْلِيَ مَا يَزِيدُ عَلَى ثَلَاثِينَ أَلْفَ شَخْصٍ.', 'However, the hurricane struck the coastal region at dawn on Tuesday. Hundreds of homes were destroyed, power and water networks were cut off, and more than thirty thousand people were evacuated.'],
    ['وَأُعْلِنَتْ حَالَةُ الطَّوَارِئِ. أَعْلَنَ الوَزِيرُ أَنَّ الحُكُومَةَ أَرْسَلَتْ فِرَقَ الإِغَاثَةِ فَوْرًا، وَأَشَارَ الهِلَالُ الأَحْمَرُ إِلَى أَنَّ الاحْتِيَاجَاتِ الإِنْسَانِيَّةَ ضَخْمَةٌ.', 'A state of emergency was declared. The minister announced that the government sent relief teams at once, and the Red Crescent pointed out that humanitarian needs are huge.'],
    ['لَوْ كَانَتِ البُنْيَةُ التَّحْتِيَّةُ أَكْثَرَ صُمُودًا، لَكَانَتِ الخَسَائِرُ أَقَلَّ بِكَثِيرٍ.', 'Had the infrastructure been more resilient, the losses would have been far fewer.'],
    ['وَإِذَا اسْتَثْمَرَتِ الحُكُومَاتُ فِي أَنْظِمَةِ الإِنْذَارِ المُبَكِّرِ، سَتُنْقَذُ أَرْوَاحٌ كَثِيرَةٌ مُسْتَقْبَلًا.', 'And if governments invest in early-warning systems, many lives will be saved in the future.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَاذَا حَدَثَ؟ اسْتَعْمِلْ مَبْنِيًّا لِلْمَجْهُولِ: دُمِّرَتْ · أُجْلِيَ · أُعْلِنَتْ.' },
      { route: 'develop', ar: 'مَاذَا كَانَتِ السُّلْطَاتُ قَدْ فَعَلَتْ قَبْلَ الكَارِثَةِ؟' },
      { route: 'stretch', ar: 'لَوْ كَانَ الاسْتِعْدَادُ أَفْضَلَ، مَاذَا كَانَ سَيَخْتَلِفُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'دُمِّرَتْ ______ وَأُجْلِيَ ______ .' },
      { route: 'develop', ar: 'كَانَتِ السُّلْطَاتُ قَدْ ______ قَبْلَ الكَارِثَةِ.' },
      { route: 'stretch', ar: 'لَوْ كَانَتِ البُنْيَةُ أَصْمَدَ، لَكَانَتِ ______ .' },
    ],
    modelEn: ['What had the authorities done?', 'The authorities had warned residents and prepared an emergency plan.', 'And what happened?', 'Hundreds of homes were destroyed and thousands were evacuated — had the infrastructure been stronger, losses would have been fewer.'],
    notes: 'Website prompts and model. Pair task: “live news” — A is the studio presenter and asks the three questions in order; B is the reporter on the scene and answers layer by layer. Swap. Partner listens for the -u after every passive. To a girl: اسْتَعْمِلِي.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Website Core: five disaster sentences in the reporting passive.' },
    develop: { amount: '60–80 words', how: 'Website Develop: add a past-perfect preparation and a reported-speech response.' },
    stretch: { amount: '110–120 words', how: 'Website task: a full four-layer report with both conditional types.' },
  },
  frames: {
    core: [
      { en: 'Hundreds of homes were destroyed.', ar: 'دُمِّرَتْ مِئَاتُ ______ .' },
      { en: 'Thousands of … were evacuated to …', ar: 'أُجْلِيَ آلَافُ ______ إِلَى ______ .' },
      { en: 'A state of emergency was declared in …', ar: 'أُعْلِنَتْ حَالَةُ الطَّوَارِئِ فِي ______ .' },
      { en: 'The … networks were cut off.', ar: 'انْقَطَعَتْ شَبَكَاتُ ______ .' },
    ],
    develop: [
      { en: 'The authorities had … before …', ar: 'كَانَتِ السُّلْطَاتُ قَدْ ______ قَبْلَ ______ .' },
      { en: 'However, the … struck …', ar: 'غَيْرَ أَنَّ ______ ضَرَبَ ______ .' },
      { en: 'The minister announced that …', ar: 'أَعْلَنَ الوَزِيرُ أَنَّ ______ .' },
      { en: 'If governments invest in …, lives will be saved.', ar: 'إِذَا اسْتَثْمَرَتِ الحُكُومَاتُ فِي ______ ، سَتُنْقَذُ أَرْوَاحٌ.' },
    ],
    bank: ['المَنَازِلِ', 'السُّكَّانِ', 'مُخَيَّمَاتٍ مُؤَقَّتَةٍ', 'المِنْطَقَةِ السَّاحِلِيَّةِ', 'الكَهْرَبَاءِ وَالمِيَاهِ', 'حَذَّرَتِ السُّكَّانَ', 'أَعَدَّتْ خُطَّةً لِلطَّوَارِئِ', 'مَوْسِمِ العَوَاصِفِ', 'الإِعْصَارَ', 'الحُكُومَةَ أَرْسَلَتْ فِرَقَ الإِغَاثَةِ', 'أَنْظِمَةِ الإِنْذَارِ المُبَكِّرِ', 'الخَسَائِرُ أَقَلَّ'],
  },
  stretch: [
    ['كَانَ قَدْ تَمَّ تَحْذِيرُ السُّكَّانِ', 'residents had been warned'],
    ['فَجْرَ الثُّلَاثَاءِ', 'at dawn on Tuesday'],
    ['مَا يَزِيدُ عَلَى ثَلَاثِينَ أَلْفَ شَخْصٍ', 'more than thirty thousand people'],
    ['أَشَارَ الهِلَالُ الأَحْمَرُ إِلَى أَنَّ', 'the Red Crescent pointed out that'],
    ['أَكْثَرَ صُمُودًا', 'more resilient'],
  ],
  modelEn: 'The authorities had prepared an emergency plan before the storm season, and residents had been warned of possible floods. However, the hurricane struck the coastal region at dawn on Tuesday. Hundreds of homes were destroyed, power networks were cut off, more than thirty thousand people were evacuated, and a state of emergency was declared. The minister announced that the government sent relief teams at once, and the Red Crescent pointed out that humanitarian needs are huge. Had the infrastructure been more resilient, the losses would have been far fewer. And if governments invest in early-warning systems, many lives will be saved in the future.',
  find: ['kānat … qad aʿaddat (Layer 1)', 'dummirat · ujliya · uʿlinat (Layer 2)', 'aʿlana … anna (Layer 3)', 'law … la- · idhā … sa- (Layer 4)'],
  modelNotes: 'Website writing model. Evidence: كَانَتِ … قَدْ أَعَدَّتْ · كَانَ قَدْ تَمَّ تَحْذِيرُ · غَيْرَ أَنَّ · دُمِّرَتْ مِئَاتُ · أُجْلِيَ أَكْثَرُ · أُعْلِنَتْ حَالَةُ · أَعْلَنَ … أَنَّ · أَشَارَ … إِلَى أَنَّ · لَوْ … لَكَانَتِ · إِذَا … سَتُنْقَذُ.',
  selfCheck: [
    { route: 'core', text: 'After every passive verb, the noun ends in -u (miʾātu, ālāfu).' },
    { route: 'core', text: 'I used at least three passives: dummirat, ujliya, uʿlinat.' },
    { route: 'develop', text: 'I opened with a “before” layer: kānat … qad + past.' },
    { route: 'develop', text: 'I reported an official: aʿlana anna or qāla inna.' },
    { route: 'stretch', text: 'I ended with a Type 2 regret (law … la-) and a Type 1 measure (idhā … sa-).' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['مَوْسِمِ العَوَاصِفِ', 'the storm season'], ['تَحْذِيرُ', 'warning'], ['السَّاحِلِيَّةَ', 'coastal'], ['شَبَكَاتُ', 'networks'], ['الهِلَالُ الأَحْمَرُ', 'the Red Crescent'],
    ['الاحْتِيَاجَاتِ', 'the needs'], ['النَّاجُونَ', 'the survivors'], ['مُخَيَّمَاتٍ مُؤَقَّتَةٍ', 'temporary camps'], ['عَامِلٌ حَاسِمٌ', 'a decisive factor'], ['الإِنْذَارِ المُبَكِّرِ', 'early warning'],
  ],
  prep: {
    words: [['احْتِيَاطِيَّاتُ النِّفْطِ', 'oil reserves', '—'], ['طَاقَةٌ مُتَجَدِّدَةٌ', 'renewable energy', '—'], ['يَسْتَثْمِرُ فِي', 'invests in', 'Form X, with fī'], ['يَهْدِفُ إِلَى', 'aims at', 'with ilā'], ['تَنْوِيعُ الدَّخْلِ', 'income diversification', '—']],
    questionEn: 'Where does your country’s energy come from? What should it invest in?',
    questionAr: 'يَنْبَغِي أَنْ يَسْتَثْمِرَ بَلَدِي فِي ______ لِكَيْ ______ .',
    homework: {
      core: 'Write five disaster sentences in the passive (dummirat, ujliya, uʿlinat …) — noun in -u!',
      develop: 'Add a “before” layer (kānat … qad) and an official’s statement (aʿlana anna) — 60–80 words.',
      stretch: 'Website writing task: a 110–120-word four-layer disaster report.',
    },
    wordsSource: 'The five words come from the website P4-L06 vocabulary (energy and resources).',
  },
  remember: 'Remember: in the news, the passive comes first and the noun stays -u (dummirat miʾātu) — and a report has four layers: kānat qad (before) → passive (event) → aʿlana anna (response) → law … la- / idhā … sa- (analysis).',
});

module.exports = { meta, slides };
