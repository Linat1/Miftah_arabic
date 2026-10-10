'use strict';
/* P4-L07 · Heritage Conservation — Protecting the Built and Natural Past — website: Pathways › Progression › P4 › P4-L07 (the intergenerational past
 * perfect كَانَتْ … قَدْ بَنَتْ; the three subjunctive triggers in a heritage case; a Type 2 regret over neglect; a cited historian).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live builder, mission and visual game used as published, with
 * waṣl alif shown without a kasra, لِكَيْ always written with its sukūn, and one clean-up: an Arabic grammar label inside the wrong sentence of mistake 1
 * removed. Game cards 1, 2 and 5 not used (three cards are enough). Sorter headings in transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P4')({
  n: 7, fileTitle: 'Heritage_Conservation', chip: 'Argument',
  title: 'Heritage Conservation — Protecting the Built and Natural Past', arabic: 'الحِفَاظُ عَلَى التُّرَاثِ — حِمَايَةُ المَاضِي المَبْنِيِّ وَالطَّبِيعِيِّ',
  focus: 'Argue for heritage conservation — the past perfect for what earlier generations had built (kānat … qad banat), the three triggers for what protecting it requires, a Type 2 regret over neglect and a cited historian.',
  icon: 'FaLandmark', iconSet: 'fa6',
});

const hs = (she) => ({ tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: she }] });
const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ').replace(' (لِلْمَاضِي التَّامِّ)', ''));
const site = fix(D.site('P4-L07'));
const RH = [['Intergenerational past perfect', 'kāna / kānat qad + past'], ['Volition', 'yataṭallabu an + verb in -a'], ['Necessity and purpose', 'min al-ḍarūrī an … li-kay …'], ['Type 2 regret', 'law + past → la-']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;
const TR = [[': لِكَيْ', ': li-kay'], [': يَتَطَلَّبُ أَنْ', ': yataṭallabu an'], [': مِنَ الضَّرُورِيِّ أَنْ', ': min al-ḍarūrī an']];

const slides = D.devLesson('P4-L07', {
  support: `• Core: five heritage sentences with yurammimu, yaṣūnu, yuwaththiqu (website Core). Develop: add a past-perfect sentence about earlier generations and a necessity subjunctive. Stretch: a full 110–120-word argument with all three triggers, both conditionals and a cited historian.
• Sensitivity: the listening mentions war damage to heritage in Syria and Libya (e.g. Palmyra, 2015). Some students may have family links — keep the focus on protection and restoration, not on the conflicts.
• Faith link (optional): «قُلْ سِيرُوا فِي الأَرْضِ فَانْظُرُوا كَيْفَ بَدَأَ الخَلْقَ» (al-ʿAnkabūt 29:20) — the Qur’an invites us to travel and reflect on what came before us. The reading calls heritage an amāna (a trust).
• Grammar links: past perfect (P3 / P4-L05) · the three triggers (P4-L01, L03, L04, L06) · Type 2 with la-mā (P4-L04) · reported speech (P3-L06).`,
  teach: 'The intergenerational past perfect, the three triggers in a heritage case, regret / proposal / citation, heritage register.',
  wedo: 'Match heritage pictures, build a heritage argument, sort past perfect / trigger / regret.',
  next: { nextCode: 'P4-L08', nextTitle: 'Reading — Built and Natural World Texts', nextAr: 'القِرَاءَةُ — نُصُوصُ العَالَمِ المَبْنِيِّ وَالطَّبِيعِيِّ' },
  objectives: ['Describe heritage conservation with yurammimu, yaṣūnu, yuwaththiqu.', 'Use the past perfect for what earlier generations had built.', 'Use all three subjunctive triggers in a heritage case.', 'Regret past neglect with a Type 2 conditional.'],
  rulesAr: 'المَاضِي التَّامُّ وَالنَّصْبُ فِي حُجَّةِ التُّرَاثِ',
  ruleEx: [['كَانَتِ الأَجْيَالُ قَدْ بَنَتْ هٰذِهِ المَعَالِمَ', 'كَانَ قَدْ تَمَّ تَوْثِيقُ كَثِيرٍ مِنْهَا'], ['يَتَطَلَّبُ الحِفَاظُ أَنْ تُعْطِيَهُ الحُكُومَاتُ أَوْلَوِيَّةً'], ['مِنَ الضَّرُورِيِّ أَنْ يُرَمِّمَ المُتَخَصِّصُونَ المَوَاقِعَ لِكَيْ تَظَلَّ شَاهِدَةً'], ['لَوْ أُولِيَ التُّرَاثُ اهْتِمَامًا كَافِيًا، لَكَانَتْ حَالَتُهُ أَفْضَلَ']],
  doNow: {
    questions: [
      q('What does تُرَاثٌ مِعْمَارِيٌّ mean?', ['architectural heritage', 'modern architecture', 'a building company'], 'Prepared at home (P4-L06).'),
      q('What does تَرْمِيمٌ mean?', ['restoration', 'demolition', 'an amendment'], 'Prepared at home (P4-L06). Careful: Urdu ترمیم = amendment!'),
      q('What does الذَّاكِرَةُ الجَمَاعِيَّةُ mean?', ['collective memory', 'a memory card', 'a group of friends'], 'Prepared at home (P4-L06).'),
      q('Complete: تَهْدِفُ الرُّؤْيَةُ إِلَى أَنْ ___ المَمْلَكَةُ اقْتِصَادَهَا.', ['تُنَوِّعَ', 'تُنَوِّعُ', 'نَوَّعَتْ'], 'P4-L06: intention + an + a verb in -a.'),
      q('Complete: يَتَحَوَّلُ العَالَمُ العَرَبِيُّ ___ الطَّاقَةِ المُتَجَدِّدَةِ.', ['إِلَى', 'فِي', 'عَلَى'], 'P4-L06: yataḥawwalu ilā.'),
    ],
    keyIdea: { text: 'They HAD built it (past perfect) — so today it is REQUIRED that we protect it (the verb in -a).', ar: '{p|كَانَتِ} الأَجْيَالُ {p|قَدْ بَنَتْ} · يَتَطَلَّبُ أَنْ {w|نَصُونَهَا}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P4-L06. Questions 4–5 retrieve the intention trigger and a verb with its partner (P4-L06).',
  },
  routes: {
    core: ['I can name 8 heritage words.', 'I can use kānat … qad + past for what earlier generations had built.'],
    develop: ['I can use yataṭallabu an, min al-ḍarūrī an and li-kay.', 'I can regret neglect with law … la- (or la-mā).'],
    stretch: ['I can cite a historian (ashāra ilā anna).', 'I can write a full heritage argument.'],
  },
  bridge: [
    { ar: 'آثَارٌ', urdu: 'آثار', tr: 'āsār', en: 'ruins, traces, antiquities' },
    { ar: 'أَمَانَةٌ', urdu: 'امانت', tr: 'amānat', en: 'a trust' },
    { ar: 'ثَقَافَةٌ', urdu: 'ثقافت', tr: 'saqāfat', en: 'culture' },
    { ar: 'تَرْمِيمٌ', urdu: 'ترمیم', tr: 'tarmīm', en: 'Arabic: restoration · Urdu: an amendment' },
    { ar: 'حَضَارَةٌ', urdu: 'تہذیب', tr: 'tahzīb', en: 'civilisation (Arabic تَهْذِيبٌ = refinement)' },
  ],
  bridgeNotes: 'URDU BRIDGE: آثار, امانت and ثقافت are shared (آثارِ قدیمہ = antiquities). Careful: Urdu ترمیم is a legal amendment; Arabic تَرْمِيمٌ is the restoration of a building. Urdu تہذیب = civilisation, but in Arabic civilisation is حَضَارَةٌ (تَهْذِيبٌ = good manners, refinement).',
  core: ['الحِفَاظُ عَلَى التُّرَاثِ', 'تُرَاثٌ مِعْمَارِيٌّ', 'مَوْقِعٌ أَثَرِيٌّ', 'تَرْمِيمٌ', 'خُطُورَةُ الانْدِثَارِ', 'الذَّاكِرَةُ الجَمَاعِيَّةُ', 'يُرَمِّمُ', 'يَصُونُ', 'يُحَافِظُ عَلَى', 'يُوَثِّقُ', 'يَحْمِي مِنْ', 'أَوْلَوِيَّةٌ قُصْوَى'],
  forms: {
    'مَوْقِعٌ أَثَرِيٌّ': sp('مَوَاقِعُ أَثَرِيَّةٌ'),
    'يُرَمِّمُ': hs('تُرَمِّمُ'), 'يَصُونُ': hs('تَصُونُ'), 'يُحَافِظُ عَلَى': hs('تُحَافِظُ عَلَى'), 'يُوَثِّقُ': hs('تُوَثِّقُ'), 'يَحْمِي مِنْ': hs('تَحْمِي مِنْ'), 'يَتَنَاقَصُ': hs('تَتَنَاقَصُ'),
    'أَوْلَوِيَّةٌ قُصْوَى': sp('أَوْلَوِيَّاتٌ قُصْوَى'),
  },
  vocabNotes: {
    0: 'Heritage conservation: tangible heritage (buildings, sites) and intangible heritage (crafts, songs, stories — تُرَاثٌ غَيْرُ مَادِّيٍّ). الانْدِثَارُ = fading away, disappearing without trace.',
    1: 'Conservation verbs: يُرَمِّمُ / يَصُونُ / يُوَثِّقُ take a direct object (يَصُونُ الهُوِيَّةَ — never بِ). يُحَافِظُ عَلَى and يَحْمِي مِنْ have fixed partners. After an: يَصُونَ · يَحْمِيَ · يُحَافِظَ.',
    2: 'The full P4 toolkit in one group: the past perfect, the three triggers and the Type 2 regret — plus the vocabulary of world heritage (أَوْلَوِيَّةٌ قُصْوَى = a top priority).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the intergenerational past perfect (website rule 1, teaching point 1, mistake 1 and texts) · Core', title: 'They had built it', ar: 'المَاضِي التَّامُّ',
      cols: [{ label: 'Who', w: 2.0 }, { label: 'Past perfect', w: 2.9, size: 18 }, { label: 'Note', w: 2.0 }, { label: 'Example (website texts)', w: 5.43, size: 17 }],
      rows: [
        { core: true, cells: ['generations', '{p|كَانَتْ} … {p|قَدْ بَنَتْ}', 'f. (plural of things)', 'كَانَتِ الأَجْيَالُ السَّابِقَةُ قَدْ بَنَتْ هٰذِهِ الرَّوَائِعَ.'] },
        { core: true, cells: ['civilisations', '{p|كَانَتْ} … {p|قَدْ أَبْدَعَتْ}', 'f.', 'كَانَتِ الحَضَارَاتُ قَدْ أَبْدَعَتْ فِي العِمَارَةِ وَالعِلْمِ.'] },
        { cells: ['impersonal', '{p|كَانَ قَدْ تَمَّ} + maṣdar', '“had been done”', 'كَانَ قَدْ تَمَّ تَوْثِيقُ كَثِيرٍ مِنْهَا.'] },
        { cells: ['they (people)', '{p|كَانُوا قَدْ} صَمَّمُوهَا', 'm. pl. — both verbs', 'كَانُوا قَدْ صَمَّمُوهَا بِعِنَايَةٍ.'] },
        { cells: ['ancestors', '{p|كَانَ} الأَجْدَادُ {p|قَدْ بَنَوْهَا}', 'verb first → sg.', 'كَانَ الأَجْدَادُ قَدْ بَنَوْهَا لِكَيْ يَنْعَمَ بِهَا الأَحْفَادُ.'] },
      ],
      ltr: true,
      foot: 'Website mistake 1: banati l-ajyālu … ✗ (simple past) → kānati l-ajyālu qad banat … ✓ — it happened BEFORE the argument we are making now.',
      notes: `GRAMMAR PART 1 — website rule 1 (“Intergenerational past perfect”), teaching point 1 (“The past perfect carries the intergenerational argument”), mistake 1, the website sorter and quiz 8.
Why past perfect? Our argument is about NOW (what we must do). What the ancestors did is one step further back — so it takes kāna qad + past.
Agreement: الأَجْيَالُ / الحَضَارَاتُ are plurals of non-humans → feminine singular (كَانَتْ … بَنَتْ). Row 5: كَانَ comes BEFORE the subject (singular), بَنَوْا comes AFTER it (plural).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · three triggers make the case (website rules 2–3, teaching point 2, game and texts) · Develop', title: 'What protecting it requires', ar: 'ثَلَاثَةُ مُحَفِّزَاتٍ',
      cols: [{ label: 'Trigger', w: 2.6, size: 18 }, { label: 'Job', w: 1.6 }, { label: 'Verb in -a', w: 1.9 }, { label: 'Example (website texts)', w: 6.23, size: 17 }],
      rows: [
        { core: true, cells: ['{w|يَتَطَلَّبُ أَنْ}', 'volition', 'weak: -iya', 'يَتَطَلَّبُ الحِفَاظُ أَنْ {w|تُعْطِيَهُ} الحُكُومَاتُ أَوْلَوِيَّةً قُصْوَى.'] },
        { core: true, cells: ['{k|مِنَ الضَّرُورِيِّ أَنْ}', 'necessity', 'sound', 'مِنَ الضَّرُورِيِّ أَنْ {k|يُرَمِّمَ} المُتَخَصِّصُونَ المَوَاقِعَ التَّالِفَةَ.'] },
        { core: true, cells: ['{e|لِكَيْ}', 'purpose', 'doubled', 'لِكَيْ {e|تَظَلَّ} شَاهِدَةً عَلَى عَظَمَةِ الحَضَارَةِ.'] },
        { cells: ['{k|يَنْبَغِي أَنْ}', 'necessity', 'sound', 'يَنْبَغِي أَنْ {k|يُشَارِكَ} المُجْتَمَعُ فِي صَوْنِهِ.'] },
        { cells: ['{e|لِـ}', 'purpose (short)', 'sound', 'بَنَتْ هٰذِهِ الرَّوَائِعَ {e|لِتَشْهَدَ} عَلَى إِبْدَاعِ الحَضَارَاتِ.'] },
        { cells: ['{m|أَلَّا} = أَنْ + لَا', 'necessity, negative', 'passive', 'يَنْبَغِي {m|أَلَّا يُدَمَّرَ} المَوْقِعُ التَّارِيخِيُّ.'] },
      ],
      ltr: true,
      foot: 'Website mistake 2: an yurammimu ✗ → an yurammima ✓. Row 6 (website game): an + lā joins into allā — the verb still ends in -a.',
      notes: `GRAMMAR PART 2 — website rules 2–3, teaching point 2 (“Three triggers make the case”), the listening, the reading and website game card 4 (row 6).
Row 1: تُعْطِيَهُ = tuʿṭiya + hu (weak -ī → -iya, then the pronoun). Row 3: تَظَلُّ → تَظَلَّ (doubled verb). Row 5: the short purpose lām (li-) works like li-kay — لِتَشْهَدَ = so that they bear witness.
Row 6 is new: أَلَّا = أَنْ + لَا (“that … not”) — يَنْبَغِي أَلَّا يُدَمَّرَ = the site must NOT be destroyed. Here the verb after it is a passive in -a.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · proposal, regret, evidence (website rule 4, reading, writing model and mistake 3) · Develop / Stretch', title: 'Learn from the past', ar: 'الاقْتِرَاحُ · النَّدَمُ · الدَّلِيلُ',
      cards: [
        { chip: 'TYPE 1 · PROPOSAL · CORE', color: '1D5FBF', head: 'إِذَا … سَـ', big: 'إِذَا اعْتَمَدْنَا سِيَاسَاتِ حِمَايَةٍ صَارِمَةً، سَنَضْمَنُ بَقَاءَ هٰذَا الإِرْثِ.', en: 'If we adopt strict protection policies, we will guarantee this legacy survives.', clue: 'Still possible.' },
        { chip: 'TYPE 2 · REGRET · DEVELOP', color: 'C0386B', head: 'لَوْ … لَمَا', big: 'لَوْ أُولِيَ التُّرَاثُ اهْتِمَامًا كَافِيًا، لَمَا انْدَثَرَ الكَثِيرُ.', en: 'Had heritage been given enough attention, so much would not have vanished.', clue: 'Negative: la-mā.' },
        { chip: 'EVIDENCE · STRETCH', color: '6B4C9A', head: 'أَشَارَ … إِلَى أَنَّ', big: 'أَشَارَ المُؤَرِّخُونَ إِلَى أَنَّ هٰذِهِ المَوَاقِعَ لَا تُعَوَّضُ.', en: 'Historians pointed out that these sites are irreplaceable.', clue: 'anna + noun.' },
      ],
      error: { text: 'Website mistake 3: yaṣūnu takes a direct object — no bi-.', pairs: [['تَصُونُ السِّيَاسَاتُ الهُوِيَّةَ', 'تَصُونُ السِّيَاسَاتُ بِالهُوِيَّةِ']] },
      notes: `GRAMMAR PART 3 — website rule 4 (“Type 2 regret”), the reading (card 1), the live builder (card 2), the writing model (card 3) and mistake 3.
Card 2: أُولِيَ is the passive of أَوْلَى (to give attention) — the same weak Form IV pattern as أُجْلِيَ (P4-L05). لَمَا + past = would NOT have …
Card 3: لَا تُعَوَّضُ = cannot be replaced (a present passive with lā). The listening has a Type 2 with a past perfect inside: لَوْ كَانَتِ الجِهَاتُ الدَّوْلِيَّةُ قَدْ تَدَخَّلَتْ مُبَكِّرًا …`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the language of a heritage argument (website listening, reading and writing model) · Stretch', title: 'Sound like a heritage advocate', ar: 'لُغَةُ الدِّفَاعِ عَنِ التُّرَاثِ',
      cols: [{ label: 'Tool', w: 2.4 }, { label: 'Example (website texts)', w: 7.4, size: 18 }, { label: 'Structure', w: 2.53 }],
      rows: [
        { core: true, cells: ['a pillar', 'يُعَدُّ التُّرَاثُ {e|رَكِيزَةً أَسَاسِيَّةً} لِلْهُوِيَّةِ الثَّقَافِيَّةِ', 'yuʿaddu + -an'] },
        { cells: ['a trust', 'يَحْمِلُ كُلُّ جِيلٍ {k|أَمَانَةً} تِجَاهَ تُرَاثِهِ', 'amāna'] },
        { cells: ['listed', 'أَكْثَرَ مِنْ ثَمَانِينَ مَوْقِعًا {w|مُدْرَجًا عَلَى قَائِمَةِ التُّرَاثِ العَالَمِيِّ}', 'passive participle'] },
        { cells: ['because of', 'يَتَنَاقَصُ {p|بِفِعْلِ} الإِهْمَالِ وَالصِّرَاعَاتِ', 'bi-fiʿli = due to'] },
        { core: true, cells: ['irreplaceable', 'أَنَّ هٰذِهِ المَوَاقِعَ {m|لَا تُعَوَّضُ}', 'lā + passive'] },
      ],
      ltr: true,
      foot: 'A heritage argument moves: why it matters → what they had built → what we have lost → what must be done → what we will gain.',
      notes: `GRAMMAR PART 4 — register tools from the website listening, reading and writing model.
Row 1: يُعَدُّ (is considered) + an accusative (رَكِيزَةً) — like تُعَدُّ المِيَاهُ أَخْطَرَ تَحَدٍّ (P4-L04). Row 3: مُدْرَجٌ عَلَى = listed on. Row 4: بِفِعْلِ = because of, as a result of.
Accuracy: UNESCO lists 90+ World Heritage properties in the Arab States region (2024), so “more than eighty” is safe. Examples students may know: Petra, the Old City of Jerusalem, Islamic Cairo, al-Ḥijr (Madāʾin Ṣāliḥ), Fez, Palmyra.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me write a heritage argument',
    steps: [
      { head: 'Before', ar: '{p|كَانَتِ} الأَجْيَالُ {p|قَدْ بَنَتْ} …', think: 'Past perfect.' },
      { head: 'Regret', ar: '{m|لَوْ} … {m|لَكَانَتْ} …', think: 'Type 2.' },
      { head: 'Require', ar: 'يَتَطَلَّبُ أَنْ {w|تُعْطِيَهُ} · مِنَ الضَّرُورِيِّ أَنْ {k|يُرَمِّمَ}', think: '-a, -a.' },
      { head: 'Purpose', ar: 'لِكَيْ {e|تَظَلَّ} شَاهِدَةً', think: 'Why?' },
    ],
    legend: ['p', 'm', 'w', 'k', 'e'], legendLabels: { p: 'PAST PERFECT', m: 'TYPE 2', w: 'VOLITION', k: 'NECESSITY', e: 'PURPOSE' },
    model: '{p|كَانَتِ الأَجْيَالُ السَّابِقَةُ قَدْ بَنَتْ} هٰذِهِ الرَّوَائِعَ لِتَشْهَدَ عَلَى إِبْدَاعِ الحَضَارَاتِ، وَأَشَارَ المُؤَرِّخُونَ إِلَى أَنَّ هٰذِهِ المَوَاقِعَ لَا تُعَوَّضُ. {m|لَوْ} كَانَتْ سِيَاسَاتُ الحِفَاظِ أَكْثَرَ صَرَامَةً، {m|لَكَانَتْ} مَوَاقِعُ كَثِيرَةٌ فِي حَالَةٍ أَفْضَلَ. لِذٰلِكَ يَتَطَلَّبُ الحِفَاظُ أَنْ {w|تُعْطِيَهُ} الحُكُومَاتُ أَوْلَوِيَّةً، وَمِنَ الضَّرُورِيِّ أَنْ {k|يُرَمِّمَ} المُتَخَصِّصُونَ المَوَاقِعَ لِكَيْ {e|تَظَلَّ} شَاهِدَةً.',
    modelEn: 'Earlier generations had built these masterpieces to bear witness to the creativity of civilisations, and historians have pointed out that these sites are irreplaceable. Had conservation policies been stricter, many sites would be in better condition. So conservation requires governments to give it priority, and it is essential that specialists restore the sites so that they remain witnesses.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Before our time: kānat … QAD banat. The regret: law … LA-kānat. What does it require? yataṭallabu AN tuʿṭiyA-hu. What is essential? min al-ḍarūrī AN yurammimA. Why? li-kay taẓallA. Every trigger — the verb ends in -a.”',
  },
  patternEn: ['earlier generations had built these architectural masterpieces', 'it is essential that specialists restore the damaged sites', 'had heritage been given enough attention, its condition would be better'],
  gameKey: 'P4-L07',
  game: {
    title: 'Protecting heritage: match the picture',
    pick: [0, 3, 4],
    en: ['Historic buildings must be protected.', 'The historic site should not be destroyed.', 'Documentation helps preserve heritage.'],
    icons: [[['fa6', 'FaBuildingColumns', 'C77700'], ['fa6', 'FaShieldHalved', '1E6B52']], [['fa6', 'FaHelmetSafety', 'C77700'], ['fa6', 'FaBan', 'C0386B']], [['fa6', 'FaCamera', '1D5FBF'], ['fa6', 'FaBook', '6B4C9A']]],
    labels: ['protect buildings', 'no destruction', 'documentation'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Card 2 teaches a new word: أَلَّا = أَنْ + لَا (“that … not”) — يَنْبَغِي أَلَّا يُدَمَّرَ. Then add a trigger to the others: مِنَ الضَّرُورِيِّ أَنْ نَحْمِيَ المَبَانِيَ التَّارِيخِيَّةَ · نُوَثِّقُ التُّرَاثَ لِكَيْ نَحْفَظَهُ.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build a heritage argument (website live builder)', title: 'Past perfect + requirement + regret', ar: 'ابْنِ حُجَّةً عَنِ التُّرَاثِ',
      cols: [{ label: '1 · What they had done', w: 3.8, size: 16 }, { label: '2 · What it requires', w: 4.3, size: 16 }, { label: '3 · Regret / proposal', w: 4.23, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Then name the trigger in column 2 and circle the verb in -a.',
      notes: `WE DO (3 min) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Core: read row 1 across. Develop: column 2 row 2 has TWO triggers (min al-ḍarūrī an … li-kay) — find both verbs in -a. Stretch: label column 3 — Type 2 (row 1), Type 2 with la-mā (row 2), Type 1 (row 3).
Column 3 row 1: أَصْرَمَ = stricter (afʿal of صَارِمٌ).`,
    },
  ],
  sorterTitle: 'Past perfect, trigger — or regret?',
  sorterCats: ['past perfect (kāna qad)', 'subjunctive trigger', 'Type 2 regret'],
  sorterNotes: 'Then build a three-card argument: one past perfect + one trigger + one regret — read it aloud as a single paragraph.',
  patch: { vocab: site.vocab.map((g) => ({ ...g, items: g.items.map((it) => ({ ...it, en: TR.reduce((s, [a, b]) => s.replace(a, b), it.en) })) })), grammar: { ...site.grammar, rules }, listening: { ...site.listening, questions: site.listening.questions.map((x, i) => (i === 2 ? { ...x, options: ['Had the world intervened early, war damage would be less', ...x.options.slice(1)] } : x)) }, reading: { ...site.reading, questions: site.reading.questions.map((x, i) => (i === 3 ? { ...x, options: ['Had policies been stricter, many sites would be in better shape today', ...x.options.slice(1)] } : x)) }, writing: { ...site.writing, checklist: site.writing.checklist.map((c) => c.replace('(كَانَ قَدْ …)', '(kāna qad …)')) }, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('مِنَ الضَّرُورِيِّ أَنْ + subjunctive.', 'min al-ḍarūrī an + a verb in -a (yurammima).') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; لِكَيْ always written with its sukūn; the Arabic label inside the wrong sentence of mistake 1 removed; rule formulas, a pattern tip, trigger-word glosses and the writing checklist and Core task in transliteration; listening question 3 and reading question 4 answers shortened to fit; sorter headings in transliteration; game cards 1, 2 and 5 not used; the past-perfect, trigger and register tables are teacher-built from the website texts. All other website items are used as published.',
  hints: ['banat (simple past)?', 'an yurammimu?', 'taṣūnu bi-?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nListen for: kānat … qad banat · yataṭallabu an · li-kay.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5 — and write down the three triggers with their verbs in -a.',
  gloss: [
    ['يُعَدُّ التُّرَاثُ المِعْمَارِيُّ وَالطَّبِيعِيُّ رَكِيزَةً أَسَاسِيَّةً لِلْهُوِيَّةِ الثَّقَافِيَّةِ. تَضُمُّ المِنْطَقَةُ العَرَبِيَّةُ أَكْثَرَ مِنْ ثَمَانِينَ مَوْقِعًا مُدْرَجًا عَلَى قَائِمَةِ التُّرَاثِ العَالَمِيِّ.', 'Architectural and natural heritage is considered a basic pillar of cultural identity. The Arab region has more than eighty sites on the World Heritage List.'],
    ['كَانَتِ الأَجْيَالُ السَّابِقَةُ قَدْ بَنَتْ هٰذِهِ الرَّوَائِعَ لِتَشْهَدَ عَلَى إِبْدَاعِ الحَضَارَاتِ، وَكَانَ قَدْ تَمَّ تَوْثِيقُ كَثِيرٍ مِنْهَا قَبْلَ أَنْ تَتَعَرَّضَ لِلْخَطَرِ.', 'Earlier generations had built these masterpieces to bear witness to the creativity of civilisations, and many had been documented before they were put at risk.'],
    ['لَوْ كَانَتِ الجِهَاتُ الدَّوْلِيَّةُ قَدْ تَدَخَّلَتْ مُبَكِّرًا لِحِمَايَةِ آثَارِ سُورِيَا وَلِيبِيَا، لَكَانَتْ أَضْرَارُ الصِّرَاعَاتِ أَقَلَّ.', 'Had international bodies intervened early to protect the antiquities of Syria and Libya, the damage from the conflicts would have been less.'],
    ['يَتَطَلَّبُ الحِفَاظُ عَلَى هٰذَا التُّرَاثِ أَنْ تُعْطِيَهُ الحُكُومَاتُ أَوْلَوِيَّةً قُصْوَى.', 'Preserving this heritage requires governments to give it top priority.'],
    ['وَمِنَ الضَّرُورِيِّ أَنْ يُرَمِّمَ المُتَخَصِّصُونَ المَوَاقِعَ التَّالِفَةَ لِكَيْ تَظَلَّ شَاهِدَةً عَلَى عَظَمَةِ الحَضَارَةِ.', 'And it is essential that specialists restore the damaged sites so that they remain witnesses to the greatness of the civilisation.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَاذَا كَانَتِ الأَجْيَالُ السَّابِقَةُ قَدْ بَنَتْ؟' },
      { route: 'develop', ar: 'مَاذَا يَتَطَلَّبُ الحِفَاظُ عَلَى التُّرَاثِ؟ اسْتَعْمِلْ «يَتَطَلَّبُ أَنْ» وَ«لِكَيْ».' },
      { route: 'stretch', ar: 'لَوْ أُهْمِلَ التُّرَاثُ، مَاذَا كَانَ سَيَحْدُثُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'كَانَتِ الأَجْيَالُ السَّابِقَةُ قَدْ بَنَتْ ______ .' },
      { route: 'develop', ar: 'يَتَطَلَّبُ الحِفَاظُ أَنْ ______ لِكَيْ ______ .' },
      { route: 'stretch', ar: 'لَوْ أُهْمِلَ التُّرَاثُ، لَانْدَثَرَ ______ .' },
    ],
    modelEn: ['What had earlier generations built?', 'Earlier generations had built architectural masterpieces to bear witness to their creativity.', 'And what does conservation require?', 'It requires governments to give it priority — and had it been neglected before, it would have vanished.'],
    notes: 'Website prompts and model. Pair task: “heritage tour guide” — A chooses a real site (Petra, Fez, Islamic Cairo …) and says what had been built; B, the minister, says what it requires. Swap. Partner checks the past perfect and every -a. To a girl: اسْتَعْمِلِي.',
  },
  diff: { core: 'Write five heritage sentences using yurammimu, yaṣūnu, yuwaththiqu.' },
  write: {
    core: { amount: '5 sentences', how: 'Website Core: five heritage sentences with yurammimu, yaṣūnu, yuwaththiqu.' },
    develop: { amount: '60–80 words', how: 'Website Develop: add a past-perfect sentence about earlier generations and a necessity subjunctive.' },
    stretch: { amount: '110–120 words', how: 'Website task: a full argument with the past perfect, all three triggers, both conditionals and a cited historian.' },
  },
  frames: {
    core: [
      { en: 'Specialists restore …', ar: 'يُرَمِّمُ المُتَخَصِّصُونَ ______ .' },
      { en: 'Wise policies preserve …', ar: 'تَصُونُ السِّيَاسَاتُ الحَكِيمَةُ ______ .' },
      { en: 'Historians document …', ar: 'يُوَثِّقُ المُؤَرِّخُونَ ______ .' },
      { en: 'Earlier generations had built …', ar: 'كَانَتِ الأَجْيَالُ السَّابِقَةُ قَدْ بَنَتْ ______ .' },
    ],
    develop: [
      { en: 'Conservation requires that governments …', ar: 'يَتَطَلَّبُ الحِفَاظُ أَنْ تُعْطِيَهُ الحُكُومَاتُ ______ .' },
      { en: 'It is essential that … so that …', ar: 'مِنَ الضَّرُورِيِّ أَنْ يُرَمِّمَ المُتَخَصِّصُونَ ______ لِكَيْ ______ .' },
      { en: 'Had policies been stricter, …', ar: 'لَوْ كَانَتِ السِّيَاسَاتُ أَكْثَرَ صَرَامَةً، لَكَانَتْ ______ .' },
      { en: 'Historians pointed out that …', ar: 'أَشَارَ المُؤَرِّخُونَ إِلَى أَنَّ ______ .' },
    ],
    bank: ['المَوَاقِعَ التَّالِفَةَ', 'الهُوِيَّةَ', 'المَعَالِمَ التَّارِيخِيَّةَ', 'هٰذِهِ الرَّوَائِعَ', 'أَوْلَوِيَّةً قُصْوَى', 'تَظَلَّ شَاهِدَةً', 'مَوَاقِعُ كَثِيرَةٌ فِي حَالَةٍ أَفْضَلَ', 'هٰذِهِ المَوَاقِعَ لَا تُعَوَّضُ', 'الذَّاكِرَةَ الجَمَاعِيَّةَ', 'التُّرَاثَ غَيْرَ المَادِّيِّ', 'لِلْأَجْيَالِ القَادِمَةِ', 'سِيَاسَاتِ حِمَايَةٍ صَارِمَةً'],
  },
  stretch: [
    ['رَكِيزَةً أَسَاسِيَّةً لِلْهُوِيَّةِ الثَّقَافِيَّةِ', 'a basic pillar of cultural identity'],
    ['لِتَشْهَدَ عَلَى إِبْدَاعِ الحَضَارَاتِ', 'to bear witness to the creativity of civilisations'],
    ['قَبْلَ أَنْ يَتَعَرَّضَ لِلْخَطَرِ', 'before it was put at risk'],
    ['لَا تُعَوَّضُ', 'cannot be replaced'],
    ['سَنَضْمَنُ بَقَاءَ هٰذَا الإِرْثِ', 'we will guarantee the survival of this legacy'],
  ],
  modelEn: 'Architectural and natural heritage is considered a basic pillar of the cultural identity of any society. Earlier generations had built these masterpieces to bear witness to the creativity of Arab and Islamic civilisations, and many had been documented before they were put at risk. Historians have pointed out that these sites are irreplaceable. Had conservation policies been stricter, many sites would be in better condition today. Preserving this heritage requires governments to give it top priority, and it is essential that specialists restore the damaged sites so that they remain witnesses to the greatness of the civilisation. If we adopt strict protection policies, we will guarantee that this legacy survives for future generations.',
  find: ['kānat … qad banat (past perfect)', 'yataṭallabu an · li-kay (triggers)', 'law … la- · idhā … sa-', 'ashāra ilā anna (historians)'],
  modelNotes: 'Website writing model. Evidence: يُعَدُّ … رَكِيزَةً · كَانَتِ … قَدْ بَنَتْ · لِتَشْهَدَ · كَانَ قَدْ تَمَّ تَوْثِيقُ · أَشَارَ … إِلَى أَنَّ · لَوْ كَانَتْ … لَكَانَتْ · يَتَطَلَّبُ … أَنْ تُعْطِيَهُ · مِنَ الضَّرُورِيِّ أَنْ يُرَمِّمَ · لِكَيْ تَظَلَّ · إِذَا اعْتَمَدْنَا … سَنَضْمَنُ.',
  selfCheck: [
    { route: 'core', text: 'What earlier generations had done takes kāna / kānat qad + past.' },
    { route: 'core', text: 'yurammimu, yaṣūnu, yuwaththiqu take a direct object (no bi-).' },
    { route: 'develop', text: 'After every trigger (an, li-kay, li-), my verb ends in -a.' },
    { route: 'develop', text: 'My regret uses law … la- (or la-mā); my proposal uses idhā … sa-.' },
    { route: 'stretch', text: 'I cited historians (ashāra ilā anna) and ended on a proposal.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['رَكِيزَةً', 'a pillar'], ['مُدْرَجًا', 'listed'], ['الرَّوَائِعَ', 'the masterpieces'], ['الجِهَاتُ الدَّوْلِيَّةُ', 'international bodies'], ['الصِّرَاعَاتِ', 'the conflicts'],
    ['التَّالِفَةَ', 'damaged'], ['أَمَانَةً', 'a trust'], ['الإِهْمَالِ', 'neglect'], ['صَرَامَةً', 'strictness'], ['الإِرْثِ', 'the legacy'],
  ],
  prep: {
    words: [['نَصٌّ تَحْلِيلِيٌّ', 'an analytical text', '—'], ['مَوْقِفُ الكَاتِبِ', 'the writer’s stance', '—'], ['يَسْتَنْتِجُ', 'infers', 'Form X'], ['مُحَفِّزُ النَّصْبِ', 'the subjunctive trigger', '—'], ['التَّنْمِيَةُ المُسْتَدَامَةُ', 'sustainable development', '—']],
    questionEn: 'Find one verb in -a in any Arabic text this week. What triggered it?',
    questionAr: 'وَجَدْتُ فِعْلًا مَنْصُوبًا بَعْدَ ______ .',
    homework: {
      core: 'Write five heritage sentences with yurammimu, yaṣūnu, yuwaththiqu.',
      develop: 'Add a past-perfect sentence (kānat … qad) and a necessity subjunctive — 60–80 words.',
      stretch: 'Website writing task: a 110–120-word heritage argument.',
    },
    wordsSource: 'The five words come from the website P4-L08 vocabulary (reading built and natural world texts).',
  },
  remember: 'Remember: what our ancestors HAD built → kānat … qad + past; what protecting it REQUIRES → yataṭallabu an / min al-ḍarūrī an / li-kay + a verb in -a; the neglect we regret → law … la- (or la-mā).',
});

module.exports = { meta, slides };
