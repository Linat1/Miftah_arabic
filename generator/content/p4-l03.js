'use strict';
/* P4-L03 · Climate Change and the Arab World — Causes, Impacts and Responses — website: Pathways › Progression › P4 › P4-L03 (the subjunctive after verbs
 * of volition: يَتَطَلَّبُ أَنْ (requirement), يَخْشَى أَنْ (fear), يَرْجُو أَنْ (hope), يُرِيدُ أَنْ; both conditional types; reported speech and a لِكَيْ clause).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live builder, mission and visual game used as published, with
 * waṣl alif shown without a kasra, لِكَيْ always written with its sukūn, and one vowel fix: ارْتِفَاعُ مَسْتَوَى البَحْرِ → مُسْتَوَى. Game cards 1 and 4 (waṣl
 * kasras) not used. Sorter headings in transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P4')({
  n: 3, fileTitle: 'Climate_Change_and_the_Arab_World', chip: 'Argument',
  title: 'Climate Change and the Arab World — Causes, Impacts and Responses', arabic: 'تَغَيُّرُ المَنَاخِ وَالعَالَمُ العَرَبِيُّ — الأَسْبَابُ وَالتَّأْثِيرَاتُ وَالاسْتِجَابَاتُ',
  focus: 'Analyse climate impacts on the Arab world with three moods of crisis — yataṭallabu an (requirement), yakhshā an (fear), yarjū an (hope), each + a verb in -a — plus a real risk, a counterfactual and a cited expert.',
  icon: 'FaTemperatureArrowUp', iconSet: 'fa6',
});

const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const sg = (s) => ({ tag: 'sg · pl', forms: [{ l: 'sg.', ar: s }] });
const hs = (she) => ({ tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: she }] });
const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ').replace(/مَسْتَوَى/g, 'مُسْتَوَى'));
const site = fix(D.site('P4-L03'));
const RH = [['Requirement', 'yataṭallabu an + verb in -a'], ['Fear', 'yakhshā an + verb in -a'], ['Hope', 'yarjū an + verb in -a'], ['Both conditionals', 'idhā … sa- · law … la-']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P4-L03', {
  support: `• Core: three sentences with yataṭallabu an, yakhshā an and yarjū an (website Core). Develop: add a Type 1 risk and a Type 2 counterfactual. Stretch: a full 110–120-word analysis with a li-kay clause and a cited expert.
• Climate news can make young people anxious. End on hope — the lesson’s own arc is fear → requirement → hope, and the reading closes with «تَتَحَوَّلَ الأَزْمَةُ إِلَى فُرْصَةٍ». Faith link (optional): we are trustees (khalīfa) of the earth and must not cause corruption in it (فَسَاد).
• The grammar is not new — the verb in -a after an (P3-L06/L07) and li-kay (P4-L01). What is new is the meaning of the verb before an: requirement, fear, hope.
• Grammar links: both conditionals (P3-L05) · reported speech and stance (P2-L08 / P3-L06) · li-kay (P4-L01).`,
  teach: 'Verbs of requirement, fear and hope + an, the verb in -a, risk / counterfactual / citation, climate register.',
  wedo: 'Match climate pictures, build a climate argument, sort fear / requirement / hope.',
  next: { nextCode: 'P4-L04', nextTitle: 'Water in the Arab World — Scarcity, Management and the Future', nextAr: 'المِيَاهُ فِي العَالَمِ العَرَبِيِّ' },
  objectives: ['Name climate-impact and policy vocabulary.', 'Express requirement, fear and hope with yataṭallabu / yakhshā / yarjū an.', 'Put the verb after an in the subjunctive (-a).', 'Write a balanced climate analysis.'],
  rulesAr: 'الفِعْلُ المَنْصُوبُ بَعْدَ أَفْعَالِ الإِرَادَةِ',
  ruleEx: [['يَتَطَلَّبُ الوَضْعُ أَنْ تَتَّخِذَ الحُكُومَاتُ تَدَابِيرَ عَاجِلَةً'], ['يَخْشَى العُلَمَاءُ أَنْ تَتَجَاوَزَ الحَرَارَةُ حَدًّا خَطِيرًا'], ['يَرْجُو المُجْتَمَعُ الدَّوْلِيُّ أَنْ تُوَقِّعَ الدُّوَلُ الاتِّفَاقِيَّةَ'], ['إِذَا وَاصَلَتِ الحَرَارَةُ ارْتِفَاعَهَا، سَتَنْتُجُ هِجْرَاتٌ', 'لَوِ اتَّخَذَتِ الدُّوَلُ إِجْرَاءَاتٍ مُبَكِّرًا، لَكَانَ التَّصَحُّرُ أَقَلَّ']],
  doNow: {
    questions: [
      q('What does تَغَيُّرُ المَنَاخِ mean?', ['climate change', 'a change of weather', 'a new climate law'], 'Prepared at home (P4-L02).'),
      q('What does شُحُّ المِيَاهِ mean?', ['water scarcity', 'water pollution', 'a water tank'], 'Prepared at home (P4-L02).'),
      q('What does يَخْشَى أَنْ mean?', ['he fears that', 'he hopes that', 'he requires that'], 'Prepared at home (P4-L02).'),
      q('Choose the accurate passive.', ['يُبْنَى مَشْرُوعٌ ضَخْمٌ.', 'يُبْنَى مَشْرُوعًا ضَخْمًا.', 'يُبْنَى مَشْرُوعٍ ضَخْمٍ.'], 'P4-L02: the passive subject is nominative.'),
      q('Complete: يُحَوِّلُ المَشْرُوعُ المَطَارَ ___ حَدِيقَةٍ.', ['إِلَى', 'بِـ', 'مِنْ'], 'P4-L02: yuḥawwilu … ilā.'),
    ],
    keyIdea: { text: 'Three moods of crisis — requirement, fear, hope — and after each an, the verb ends in -a.', ar: 'يَتَطَلَّبُ أَنْ {k|تَتَّخِذَ} · يَخْشَى أَنْ {e|تَتَجَاوَزَ} · يَرْجُو أَنْ {w|تُوَقِّعَ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P4-L02. Questions 4–5 retrieve the passive and yuḥawwilu ilā (P4-L02) — today the reading ends with yarjū an tataḥawwala l-azmatu ilā fursa.',
  },
  routes: {
    core: ['I can name 8 climate words.', 'I can use yakhshā an + a verb in -a.'],
    develop: ['I can use yataṭallabu an and yarjū an.', 'I can add a real risk and a counterfactual.'],
    stretch: ['I can cite an expert and add a li-kay clause.', 'I can write a balanced climate analysis.'],
  },
  bridge: [
    { ar: 'خَشْيَةٌ · يَخْشَى', urdu: 'خشیت', tr: 'khashiyat', en: 'awe, fear (خشیتِ الٰہی)' },
    { ar: 'طَلَبٌ · يَتَطَلَّبُ', urdu: 'طلب', tr: 'talab', en: 'demand · it requires' },
    { ar: 'ضَرُورَةٌ', urdu: 'ضرورت', tr: 'zarūrat', en: 'necessity, need' },
    { ar: 'هِجْرَةٌ', urdu: 'ہجرت', tr: 'hijrat', en: 'migration' },
    { ar: 'أَمْنٌ', urdu: 'امن', tr: 'aman', en: 'Arabic: security · Urdu: peace' },
  ],
  bridgeNotes: 'URDU BRIDGE: خشیت (as in خشیتِ الٰہی), طلب, ضرورت and ہجرت are shared. Careful: Urdu امن usually means peace; Arabic الأَمْنُ الغِذَائِيُّ is food SECURITY (peace in Arabic is سَلَامٌ).',
  core: ['تَغَيُّرُ المَنَاخِ', 'ارْتِفَاعُ مُسْتَوَى البَحْرِ', 'التَّصَحُّرُ المُتَسَارِعُ', 'شُحُّ المِيَاهِ', 'هِجْرَةٌ مَنَاخِيَّةٌ', 'الأَمْنُ الغِذَائِيُّ', 'يَتَطَلَّبُ أَنْ', 'يَخْشَى أَنْ', 'يَرْجُو أَنْ', 'تَدَابِيرُ عَاجِلَةٌ', 'انْتِقَالٌ طَاقَوِيٌّ', 'الطَّاقَةُ الشَّمْسِيَّةُ'],
  forms: {
    'مَوْجَةُ حَرٍّ قَاتِلَةٌ': sp('مَوْجَاتُ حَرٍّ قَاتِلَةٌ'), 'هِجْرَةٌ مَنَاخِيَّةٌ': sp('هِجْرَاتٌ مَنَاخِيَّةٌ'), 'تَدَابِيرُ عَاجِلَةٌ': sg('تَدْبِيرٌ عَاجِلٌ'), 'اتِّفَاقِيَّةُ المَنَاخِ': sp('اتِّفَاقِيَّاتُ المَنَاخِ'),
    'لَاجِئُونَ مَنَاخِيُّونَ': { tag: 'm · f · pl', forms: [{ l: 'f. pl.', ar: 'لَاجِئَاتٌ مَنَاخِيَّاتٌ' }, { l: 'm. sg.', ar: 'لَاجِئٌ مَنَاخِيٌّ' }] },
    'يَتَطَلَّبُ أَنْ': hs('تَتَطَلَّبُ أَنْ'), 'يَخْشَى أَنْ': ihs('أَخْشَى أَنْ', 'تَخْشَى أَنْ'), 'يَرْجُو أَنْ': ihs('أَرْجُو أَنْ', 'تَرْجُو أَنْ'), 'يُرِيدُ أَنْ': ihs('أُرِيدُ أَنْ', 'تُرِيدُ أَنْ'),
    'يَقْتَضِي': hs('تَقْتَضِي'), 'يَهْدِفُ إِلَى': hs('تَهْدِفُ إِلَى'),
  },
  vocabNotes: {
    0: 'Climate impacts: the vocabulary of a crisis report. Note مُسْتَوَى (level) — with a ḍamma (the website prints a fatḥa). شُحٌّ = scarcity; التَّصَحُّرُ = desertification (land turning into desert).',
    1: 'Volition verbs: يَتَطَلَّبُ / يَخْشَى / يَرْجُو / يُرِيدُ + أَنْ + a verb in -a. يَقْتَضِي takes a direct object (يَقْتَضِي الأَمْرُ تَعَاوُنًا); يَهْدِفُ إِلَى takes a noun (يَهْدِفُ إِلَى خَفْضِ الانْبِعَاثَاتِ).',
    2: 'Responses and policy: the hopeful half of the lesson — political will, agreements, finance, solar energy, cutting emissions.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · three moods of crisis (website rules 1–3 + teaching point 2 + table) · Core', title: 'Require, fear, hope — + an', ar: 'أَفْعَالُ الإِرَادَةِ',
      cols: [{ label: 'Verb', w: 2.5, size: 20 }, { label: 'Mood', w: 1.8 }, { label: 'What follows', w: 2.1 }, { label: 'Example (website)', w: 5.93, size: 17 }],
      rows: [
        { core: true, cells: ['{k|يَتَطَلَّبُ أَنْ}', 'requirement', 'verb in -a', 'يَتَطَلَّبُ الوَضْعُ أَنْ {k|تَتَّخِذَ} الحُكُومَاتُ تَدَابِيرَ.'] },
        { core: true, cells: ['{e|يَخْشَى أَنْ}', 'fear', 'verb in -a', 'يَخْشَى العُلَمَاءُ أَنْ {e|تَتَجَاوَزَ} الحَرَارَةُ حَدًّا خَطِيرًا.'] },
        { core: true, cells: ['{w|يَرْجُو أَنْ}', 'hope', 'verb in -a', 'يَرْجُو المُجْتَمَعُ أَنْ {w|تُوَقِّعَ} الدُّوَلُ الاتِّفَاقِيَّةَ.'] },
        { cells: ['{m|يُرِيدُ أَنْ}', 'desire', 'verb in -a', 'نُرِيدُ أَنْ {m|نَبْنِيَ} مُسْتَقْبَلًا أَنْظَفَ.'] },
        { cells: ['{p|يَقْتَضِي}', 'necessity', 'object', 'يَقْتَضِي الأَمْرُ {p|تَعَاوُنًا} إِقْلِيمِيًّا.'] },
        { cells: ['{p|يَهْدِفُ إِلَى}', 'aim', 'ilā + noun', 'تَهْدِفُ الاتِّفَاقِيَّةُ {p|إِلَى} خَفْضِ الانْبِعَاثَاتِ.'] },
      ],
      ltr: true,
      foot: 'Website teaching point: “each puts the following verb in the subjunctive, so the mood feels natural rather than technical.”',
      notes: `GRAMMAR PART 1 — website rules “Requirement”, “Fear”, “Hope”, the website table and teaching point 2 (“Three moods of crisis”). Rows 5–6 use the website vocabulary (يَقْتَضِي · يَهْدِفُ إِلَى) — they do NOT take أَنْ here.
Feelings first: ask students to sort their own feelings about climate news into fear / requirement / hope before the grammar.
Agreement: the verb after أَنْ agrees with its own subject — أَنْ تَتَّخِذَ الحُكُومَاتُ (non-human / broken plural → ta-) · أَنْ يَتَجَاوَزَ الاحْتِرَارُ (masculine → ya-).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · the verb in -a after an (website teaching point 1, mistakes 1–2 and texts) · Develop', title: 'After an: -u becomes -a', ar: 'الفِعْلُ المَنْصُوبُ',
      cols: [{ label: 'Normal', w: 2.3, size: 20 }, { label: 'After an', w: 2.6, size: 20 }, { label: 'Note', w: 1.9 }, { label: 'Example (website texts)', w: 5.53, size: 17 }],
      rows: [
        { core: true, cells: ['تَتَّخِذُ', '{k|تَتَّخِذَ}', 'sound', 'أَنْ تَتَّخِذَ الحُكُومَاتُ تَدَابِيرَ عَاجِلَةً'] },
        { core: true, cells: ['تُصْبِحُ', '{k|تُصْبِحَ}', 'sound', 'أَنْ تُصْبِحَ بَعْضُ المُدُنِ غَيْرَ صَالِحَةٍ لِلسَّكَنِ'] },
        { cells: ['تَتَعَاوَنُ · تَسْتَثْمِرُ', '{k|تَتَعَاوَنَ} … {k|تَسْتَثْمِرَ}', 'two an', 'أَنْ تَتَعَاوَنَ الدُّوَلُ وَأَنْ تَسْتَثْمِرَ فِي الطَّاقَةِ'] },
        { cells: ['يَزْدَادُ', '{k|يَزْدَادَ}', 'hollow', 'أَنْ يَزْدَادَ التَّصَحُّرُ فِي المِنْطَقَةِ'] },
        { cells: ['نَبْنِي', '{k|نَبْنِيَ}', 'weak -ī → -iya', 'نَرْجُو أَنْ نَبْنِيَ مُسْتَقْبَلًا أَنْظَفَ'] },
      ],
      ltr: true,
      foot: 'Website mistakes 1–2: an tattakhidhu ✗ → an tattakhidha ✓ · an yatajāwazu ✗ → an yatajāwaza ✓.',
      notes: `GRAMMAR PART 2 — website teaching point 1 (“The final fatḥa marks the subjunctive”) and mistakes 1–2, with examples from the website reading, sorter and live builder.
Row 2: تُصْبِحَ + accusative predicate (غَيْرَ صَالِحَةٍ). Row 3: two parallel verbs each with its own أَنْ. Row 5: weak -ī verbs add -a (نَبْنِيَ, like نَحْمِيَ in P4-L01).
Remember: the verbs of fear and hope are themselves weak — يَخْشَى (no change after an: أَنْ يَخْشَى) · يَرْجُو (أَنْ يَرْجُوَ).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · risk, regret, evidence (website rule 4 + listening and writing model) · Develop / Stretch', title: 'Make the argument stronger', ar: 'الخَطَرُ · الافْتِرَاضُ · الدَّلِيلُ',
      cards: [
        { chip: 'TYPE 1 · RISK · CORE', color: '1D5FBF', head: 'إِذَا … سَـ', big: 'إِذَا وَاصَلَتِ الحَرَارَةُ ارْتِفَاعَهَا، سَتَنْتُجُ هِجْرَاتٌ مَنَاخِيَّةٌ.', en: 'If temperatures keep rising, climate migrations will result.', clue: 'Still possible.' },
        { chip: 'TYPE 2 · REGRET · DEVELOP', color: 'C0386B', head: 'لَوْ … لَـ', big: 'لَوِ اتَّخَذَتِ الدُّوَلُ إِجْرَاءَاتٍ مُبَكِّرًا، لَكَانَتْ آثَارُ التَّصَحُّرِ أَقَلَّ حِدَّةً.', en: 'Had states acted early, desertification would be less severe.', clue: 'It did not happen.' },
        { chip: 'EVIDENCE · STRETCH', color: '6B4C9A', head: 'أَكَّدَ … أَنَّ', big: 'أَكَّدَ خُبَرَاءُ الأُمَمِ المُتَّحِدَةِ أَنَّ التَّعَاوُنَ ضَرُورِيٌّ.', en: 'UN experts stressed that cooperation is essential.', clue: 'anna + noun.' },
      ],
      error: { text: 'Website mistake 3: a Type 2 result takes la-, not sa-.', pairs: [['لَوِ اتَّخَذَتِ الدُّوَلُ إِجْرَاءَاتٍ، لَقَلَّ التَّصَحُّرُ', 'لَوِ اتَّخَذَتِ الدُّوَلُ إِجْرَاءَاتٍ، سَيَقِلُّ التَّصَحُّرُ']] },
      notes: `GRAMMAR PART 3 — website rule “Both conditionals”, mistake 3 and the writing model (card 3).
Do not confuse أَنْ and أَنَّ: يَخْشَى أَنْ + a VERB in -a · أَكَّدَ أَنَّ / يُشَارُ إِلَى أَنَّ + a NOUN in -a (أَنَّ التَّعَاوُنَ).
Card 2: أَقَلَّ حِدَّةً = less severe (comparative + tamyīz).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the language of a climate report (website listening, reading and writing model) · Stretch', title: 'Sound like a climate report', ar: 'لُغَةُ التَّقَارِيرِ المَنَاخِيَّةِ',
      cols: [{ label: 'Tool', w: 2.4 }, { label: 'Example (website texts)', w: 7.4, size: 18 }, { label: 'Structure', w: 2.53 }],
      rows: [
        { core: true, cells: ['it is reported', '{p|يُشَارُ إِلَى أَنَّ} المِنْطَقَةَ العَرَبِيَّةَ مِنْ أَكْثَرِ المَنَاطِقِ تَأَثُّرًا.', 'passive report'] },
        { cells: ['most affected', 'مِنْ {w|أَكْثَرِ} مَنَاطِقِ العَالَمِ {w|تَأَثُّرًا} بِتَغَيُّرِ المَنَاخِ', 'akthar + tamyīz'] },
        { cells: ['the gravest', 'يُعَدُّ تَغَيُّرُ المَنَاخِ {e|أَخْطَرَ تَحَدٍّ} يُوَاجِهُ العَالَمَ العَرَبِيَّ.', 'superlative'] },
        { cells: ['a limit beyond life', 'حَدًّا {m|لَا تُمْكِنُ مَعَهُ الحَيَاةُ}', 'relative description'] },
        { core: true, cells: ['the hopeful close', 'يَرْجُو الجَمِيعُ أَنْ {k|تَتَحَوَّلَ الأَزْمَةُ إِلَى فُرْصَةٍ}.', 'crisis → opportunity'] },
      ],
      ltr: true,
      foot: 'A climate report moves: how serious → what is feared → what is required → what could have been → what we hope.',
      notes: `GRAMMAR PART 4 — register tools from the website listening, reading and writing model.
Row 2: أَكْثَرُ + noun + tamyīz (تَأَثُّرًا) = “the most affected” — for qualities that have no afʿal form.
Row 3: أَخْطَرُ تَحَدٍّ = superlative + indefinite noun = “the gravest challenge”.
Accuracy: the UN and the World Bank describe the Middle East and North Africa as one of the regions most exposed to heat and water stress.`,
    },
  ],
  quick: [0, 1, 2, 6],
  rest: [3, 4, 5, 7],
  ido: {
    title: 'Watch me write a climate analysis',
    steps: [
      { head: 'How serious', ar: '{p|يُشَارُ إِلَى أَنَّ} … مِنْ أَكْثَرِ …', think: 'Evidence.' },
      { head: 'Fear + need', ar: 'يَخْشَى أَنْ {e|تَتَجَاوَزَ} · يَتَطَلَّبُ أَنْ {k|تَتَّخِذَ}', think: '-a, -a.' },
      { head: 'Risk + regret', ar: '{w|إِذَا} … سَـ · {m|لَوِ} … لَـ', think: 'Both types.' },
      { head: 'Hope', ar: 'يَرْجُو أَنْ {k|تَتَحَوَّلَ} …', think: 'End on hope.' },
    ],
    legend: ['p', 'e', 'k', 'w', 'm'], legendLabels: { p: 'REPORT', e: 'FEAR', k: 'REQUIRE · HOPE', w: 'TYPE 1', m: 'TYPE 2' },
    model: '{p|يُشَارُ إِلَى أَنَّ} المِنْطَقَةَ العَرَبِيَّةَ مِنْ أَكْثَرِ مَنَاطِقِ العَالَمِ تَأَثُّرًا بِتَغَيُّرِ المَنَاخِ. يَخْشَى العُلَمَاءُ أَنْ {e|تَتَجَاوَزَ} الحَرَارَةُ حَدًّا خَطِيرًا، وَيَتَطَلَّبُ الوَضْعُ أَنْ {k|تَتَّخِذَ} الحُكُومَاتُ تَدَابِيرَ عَاجِلَةً. {w|إِذَا} وَاصَلَتِ الحَرَارَةُ ارْتِفَاعَهَا، {w|سَتَنْتُجُ} هِجْرَاتٌ مَنَاخِيَّةٌ. {m|وَلَوِ} اتَّخَذَتِ الدُّوَلُ إِجْرَاءَاتٍ مُبَكِّرًا، {m|لَكَانَتْ} آثَارُ التَّصَحُّرِ أَقَلَّ حِدَّةً. وَيَرْجُو الجَمِيعُ أَنْ {k|تَتَحَوَّلَ} الأَزْمَةُ إِلَى فُرْصَةٍ.',
    modelEn: 'It is reported that the Arab region is among the regions of the world most affected by climate change. Scientists fear that heat will exceed a dangerous limit, and the situation requires governments to take urgent measures. If temperatures keep rising, climate migrations will result. Had states acted early, the effects of desertification would be less severe. And everyone hopes that the crisis will turn into an opportunity.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “How serious? yushāru ilā ANNA + a noun. What do scientists fear? yakhshā AN + a verb in -a: tatajāwazA. What is required? yataṭallabu AN tattakhidhA. A real risk: idhā … SA-. A regret: law … LA-kānat. End on hope: yarjū AN tataḥawwalA.”',
  },
  patternEn: ['climate change requires states to reshape their policies', 'experts fear that heat will exceed a limit at which life is impossible', 'the international community hopes that states will steer their wealth towards clean energy'],
  gameKey: 'P4-L03',
  game: {
    title: 'Climate causes and answers: match the picture',
    pick: [1, 2, 4],
    en: ['Temperatures are rising because of climate change.', 'Drought is increasing in some regions.', 'Renewable energy reduces emissions.'],
    icons: [[['fa6', 'FaTemperatureArrowUp', 'C0386B'], ['fa6', 'FaEarthAfrica', '1D5FBF']], [['fa6', 'FaSun', 'C77700'], ['fa6', 'FaDropletSlash', '1D5FBF']], [['fa6', 'FaSolarPanel', '1D5FBF'], ['fa6', 'FaWind', '1E6B52']]],
    labels: ['rising heat', 'drought', 'renewable energy'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6; cards 1 and 4 not used). Then add a mood to each: يَخْشَى العُلَمَاءُ أَنْ تَرْتَفِعَ الحَرَارَةُ أَكْثَرَ · يَتَطَلَّبُ الجَفَافُ أَنْ نُوَفِّرَ المِيَاهَ · نَرْجُو أَنْ تَنْتَشِرَ الطَّاقَةُ المُتَجَدِّدَةُ.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build a climate argument (website live builder)', title: 'Fear + requirement + hope', ar: 'ابْنِ حُجَّةً مَنَاخِيَّةً',
      cols: [{ label: '1 · Fear (yakhshā an)', w: 4.0, size: 16 }, { label: '2 · Requirement', w: 4.1, size: 16 }, { label: '3 · Hope (yarjū an)', w: 4.23, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Then circle the verb after every an: does it end in -a?',
      notes: `WE DO (3 min) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Core: read row 1 across. Develop: find the one line with no أَنْ (column 2 row 3: يَقْتَضِي + object). Stretch: write your own fear–requirement–hope line about water (tomorrow’s topic).`,
    },
  ],
  sorterTitle: 'Requirement, fear — or hope?',
  sorterCats: ['requirement (yataṭallabu)', 'fear (yakhshā)', 'hope (yarjū)'],
  sorterNotes: 'Then put the right verb in front of each card and read it aloud: يَتَطَلَّبُ الوَضْعُ … · يَخْشَى العُلَمَاءُ … · يَرْجُو الجَمِيعُ … .',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('يَتَطَلَّبُ أَنْ + subjunctive تُعِيدَ.', 'yataṭallabu an + a verb in -a (tuʿīda).').replace('يَخْشَى أَنْ expresses fear.', 'yakhshā an expresses fear.').replace('يَرْجُو أَنْ expresses hope.', 'yarjū an expresses hope.') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; لِكَيْ always written with its sukūn; vowel fix مَسْتَوَى → مُسْتَوَى; rule headings and formulas in English and transliteration; sorter headings in transliteration; game cards 1 and 4 not used (waṣl kasras); the verb, subjunctive and register tables are teacher-built from the website texts. All other website items are used as published.',
  hints: ['an tattakhidhu?', 'an yatajāwazu?', 'law … sa-?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: yakhshā an · yataṭallabu an · yarjū an.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write down every verb after an with its final -a.',
  gloss: [
    ['يُشَارُ إِلَى أَنَّ المِنْطَقَةَ العَرَبِيَّةَ مِنْ أَكْثَرِ مَنَاطِقِ العَالَمِ تَأَثُّرًا بِتَغَيُّرِ المَنَاخِ. تُعَانِي دُوَلٌ مِثْلُ العِرَاقِ وَالأُرْدُنِّ مِنْ تَصَحُّرٍ مُتَسَارِعٍ يُهَدِّدُ الأَمْنَ الغِذَائِيَّ.', 'It is reported that the Arab region is among the regions most affected by climate change. Countries such as Iraq and Jordan suffer from accelerating desertification that threatens food security.'],
    ['يَخْشَى الخُبَرَاءُ أَنْ تَتَجَاوَزَ دَرَجَاتُ الحَرَارَةِ حَدًّا لَا تُمْكِنُ مَعَهُ الحَيَاةُ فِي بَعْضِ المَنَاطِقِ.', 'Experts fear that temperatures will exceed a limit at which life is impossible in some areas.'],
    ['وَيَتَطَلَّبُ الوَضْعُ أَنْ تَتَّخِذَ الحُكُومَاتُ العَرَبِيَّةُ تَدَابِيرَ عَاجِلَةً. إِذَا وَاصَلَتِ الحَرَارَةُ ارْتِفَاعَهَا، سَتَنْتُجُ هِجْرَاتٌ مَنَاخِيَّةٌ وَاسِعَةٌ.', 'The situation requires Arab governments to take urgent measures. If temperatures keep rising, large climate migrations will result.'],
    ['وَلَوِ اتَّخَذَتِ الدُّوَلُ إِجْرَاءَاتٍ مُبَكِّرًا، لَكَانَتْ آثَارُ التَّصَحُّرِ أَقَلَّ حِدَّةً.', 'Had states acted early, the effects of desertification would be less severe.'],
    ['وَيَرْجُو المُجْتَمَعُ الدَّوْلِيُّ أَنْ تُوَجِّهَ دُوَلُ الخَلِيجِ ثَرْوَتَهَا نَحْوَ الانْتِقَالِ الطَّاقَوِيِّ.', 'The international community hopes that the Gulf states will direct their wealth towards the energy transition.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَاذَا يَخْشَى العُلَمَاءُ؟ اسْتَعْمِلْ «يَخْشَى أَنْ» + مَنْصُوبًا.' },
      { route: 'develop', ar: 'مَاذَا يَتَطَلَّبُ الوَضْعُ؟ اسْتَعْمِلْ «يَتَطَلَّبُ أَنْ».' },
      { route: 'stretch', ar: 'مَاذَا يَرْجُو الجَمِيعُ؟ اسْتَعْمِلْ «يَرْجُو أَنْ».' },
    ],
    stems: [
      { route: 'core', ar: 'يَخْشَى العُلَمَاءُ أَنْ تَتَجَاوَزَ ______ .' },
      { route: 'develop', ar: 'يَتَطَلَّبُ الوَضْعُ أَنْ تَتَّخِذَ ______ .' },
      { route: 'stretch', ar: 'نَرْجُو أَنْ تَتَحَوَّلَ ______ إِلَى ______ .' },
    ],
    modelEn: ['What do scientists fear?', 'Scientists fear that heat will exceed a dangerous limit in the Arab region.', 'And what does the situation require?', 'It requires governments to take urgent measures — and had we started early, the impact would be smaller.'],
    notes: 'Website prompts and model. Pair task: “three moods” — A states a fear, B answers with a requirement, A closes with a hope. Partner checks every -a after an. To a girl: اسْتَعْمِلِي.',
  },
  write: {
    core: { amount: '3 sentences', how: 'Website Core: one sentence each with yataṭallabu an, yakhshā an and yarjū an.' },
    develop: { amount: '60–80 words', how: 'Website Develop: add a Type 1 risk and a Type 2 counterfactual.' },
    stretch: { amount: '110–120 words', how: 'Website task: a climate analysis with the three volition verbs, both conditionals, a li-kay clause and a cited expert.' },
  },
  frames: {
    core: [
      { en: 'Scientists fear that …', ar: 'يَخْشَى العُلَمَاءُ أَنْ ______ .' },
      { en: 'The situation requires that governments …', ar: 'يَتَطَلَّبُ الوَضْعُ أَنْ تَتَّخِذَ الحُكُومَاتُ ______ .' },
      { en: 'Everyone hopes that …', ar: 'يَرْجُو الجَمِيعُ أَنْ ______ .' },
      { en: 'Countries such as … suffer from …', ar: 'تُعَانِي دُوَلٌ مِثْلُ ______ مِنْ ______ .' },
    ],
    develop: [
      { en: 'If temperatures keep rising, …', ar: 'إِذَا وَاصَلَتِ الحَرَارَةُ ارْتِفَاعَهَا، سَتَنْتُجُ ______ .' },
      { en: 'Had states acted early, …', ar: 'لَوِ اتَّخَذَتِ الدُّوَلُ إِجْرَاءَاتٍ مُبَكِّرًا، لَكَانَتْ ______ .' },
      { en: 'UN experts stressed that …', ar: 'أَكَّدَ خُبَرَاءُ الأُمَمِ المُتَّحِدَةِ أَنَّ ______ .' },
      { en: 'The region must rely on … so that it reduces …', ar: 'يَجِبُ أَنْ تَعْتَمِدَ المِنْطَقَةُ عَلَى ______ لِكَيْ تُقَلِّلَ ______ .' },
    ],
    bank: ['تَتَجَاوَزَ الحَرَارَةُ حَدًّا خَطِيرًا', 'يَزْدَادَ التَّصَحُّرُ', 'تَدَابِيرَ عَاجِلَةً', 'تَسْتَثْمِرَ فِي الطَّاقَةِ النَّظِيفَةِ', 'تُوَقِّعَ الدُّوَلُ الاتِّفَاقِيَّةَ', 'تَتَحَوَّلَ الأَزْمَةُ إِلَى فُرْصَةٍ', 'العِرَاقِ وَالأُرْدُنِّ', 'تَصَحُّرٍ مُتَسَارِعٍ', 'هِجْرَاتٌ مَنَاخِيَّةٌ', 'أَقَلَّ حِدَّةً', 'الطَّاقَةِ الشَّمْسِيَّةِ', 'انْبِعَاثَاتِهَا'],
  },
  stretch: [
    ['مِنْ أَكْثَرِ مَنَاطِقِ العَالَمِ تَأَثُّرًا بِتَغَيُّرِ المَنَاخِ', 'among the regions most affected by climate change'],
    ['تَصَحُّرٍ مُتَسَارِعٍ يُهَدِّدُ الأَمْنَ الغِذَائِيَّ', 'accelerating desertification that threatens food security'],
    ['حَدًّا لَا تُمْكِنُ مَعَهُ الحَيَاةُ', 'a limit at which life is impossible'],
    ['لَكَانَتْ آثَارُ التَّصَحُّرِ أَقَلَّ حِدَّةً', 'the effects of desertification would be less severe'],
    ['أَنْ تَتَحَوَّلَ الأَزْمَةُ إِلَى فُرْصَةٍ', 'that the crisis turns into an opportunity'],
  ],
  modelEn: 'It is reported that the Arab region is among the regions most affected by climate change. Countries such as Iraq suffer from accelerating desertification that threatens food security. Scientists fear that heat will exceed a limit at which life is impossible, and the situation requires governments to take urgent measures. If temperatures keep rising, large climate migrations will result. Had states acted early, the effects of desertification would be less severe. UN experts have stressed that cooperation is essential. So the region must rely on solar energy so that it reduces its emissions. And everyone hopes that the crisis will turn into an opportunity.',
  find: ['yakhshā an tatajāwaza · yataṭallabu an tattakhidha', 'a Type 1 (idhā … sa-) and a Type 2 (law … la-)', 'akkada … anna (a cited expert)', 'li-kay tuqallila · yarjū an tataḥawwala'],
  modelNotes: 'Website writing model. Evidence: يُشَارُ إِلَى أَنَّ · يَخْشَى … أَنْ تَتَجَاوَزَ · يَتَطَلَّبُ … أَنْ تَتَّخِذَ · إِذَا وَاصَلَتِ … سَتَنْتُجُ · لَوِ اتَّخَذَتِ … لَكَانَتْ · أَكَّدَ خُبَرَاءُ … أَنَّ · لِكَيْ تُقَلِّلَ · يَرْجُو … أَنْ تَتَحَوَّلَ.',
  selfCheck: [
    { route: 'core', text: 'After every an, my verb ends in -a.' },
    { route: 'core', text: 'I used all three moods: requirement, fear, hope.' },
    { route: 'develop', text: 'My risk uses idhā … sa-; my regret uses law … la-.' },
    { route: 'develop', text: 'an + verb, but anna + noun (akkada anna l-taʿāwuna).' },
    { route: 'stretch', text: 'I cited an expert and added a li-kay purpose.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['أَخْطَرَ تَحَدٍّ', 'the gravest challenge'], ['الأَشَدِّ هَشَاشَةً', 'the most fragile'], ['الاحْتِرَارِ', 'warming'], ['غَيْرَ صَالِحَةٍ لِلسَّكَنِ', 'uninhabitable'], ['مَوْجَاتِ الحَرِّ', 'heat waves'],
    ['تَسْتَثْمِرَ', '(to) invest'], ['انْبِعَاثَاتِهَا', 'its emissions'], ['اسْتِقْلَالِيَّةً طَاقَوِيَّةً', 'energy independence'], ['رَائِدَةً', 'a leader'], ['الأَزْمَةُ', 'the crisis'],
  ],
  prep: {
    words: [['نَدْرَةُ المِيَاهِ', 'water scarcity', '—'], ['مِيَاهٌ جَوْفِيَّةٌ', 'groundwater', '—'], ['تَحْلِيَةُ المِيَاهِ', 'water desalination', '—'], ['يَنْبَغِي أَنْ', 'it is necessary that, should', '+ verb in -a'], ['الرِّيُّ الحَدِيثُ', 'modern irrigation', '—']],
    questionEn: 'How can we save water at home and at school?',
    questionAr: 'يَنْبَغِي أَنْ ______ لِكَيْ ______ .',
    homework: {
      core: 'Write three sentences with yataṭallabu an, yakhshā an and yarjū an (verbs in -a!).',
      develop: 'Add a Type 1 risk and a Type 2 counterfactual (60–80 words).',
      stretch: 'Website writing task: a 110–120-word climate analysis ending on hope.',
    },
    wordsSource: 'The five words come from the website P4-L04 vocabulary (water in the Arab world).',
  },
  remember: 'Remember: yataṭallabu an · yakhshā an · yarjū an · yurīdu an + a verb in -A — but anna + a noun — warn with idhā … sa-, regret with law … la-, and end on hope.',
});

module.exports = { meta, slides };
